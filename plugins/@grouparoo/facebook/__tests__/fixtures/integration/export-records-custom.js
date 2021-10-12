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
    '{"542676646349772":[{"type":"custom_audience","call_count":0,"total_cputime":0,"total_time":0,"estimated_time_to_regain_access":0}]}',
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
    "AApr9nGZUf0G5Czax1_V_i9",
    "x-fb-trace-id",
    "DwfPpxFCoN+",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "CeWIIvMUe/0/rhUKiRbfm/xFKz8rU/LjH/Byar29RZFWG7g+t/CHNGHc1g/5E3WwfJjeIgZPc0b5l9IPs0nY4g==",
    "Date",
    "Sat, 02 Oct 2021 20:58:24 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
    '{"542676646349772":[{"type":"custom_audience","call_count":0,"total_cputime":0,"total_time":0,"estimated_time_to_regain_access":0}]}',
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
    "AcZBj8aufBwCDYV5x7Ur6pO",
    "x-fb-trace-id",
    "G8blUyk6wQE",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "4rsLo14REd363TfOSXfv/2QYWCAlKOs1jhcoZDHhoaGqC966thi2jD9whez/ovP38FYu5g34pdHA/UJwJ9e/Yg==",
    "Date",
    "Sat, 02 Oct 2021 20:58:24 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
    '{"542676646349772":[{"type":"custom_audience","call_count":0,"total_cputime":0,"total_time":0,"estimated_time_to_regain_access":0}]}',
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
    "A_upczZ8IPcak1g4YrMygsd",
    "x-fb-trace-id",
    "DsGiT7uGcLn",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "7UliFHJaj8L9aqI87jDqUqy4SbYI4tn7kQ/CPNoZ9ph++bk3IYWwGVJ7qxGoS4+I9nheeoRUvs7rtmBAsAq92w==",
    "Date",
    "Sat, 02 Oct 2021 20:58:24 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
    '{"542676646349772":[{"type":"custom_audience","call_count":0,"total_cputime":0,"total_time":0,"estimated_time_to_regain_access":0}]}',
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
    "AfqjmAarhBgpacQZxwUqApN",
    "x-fb-trace-id",
    "D1LQ9ce5kC7",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "CpEKoyw3GV7hcehsQoDjVAKiDQfWlzC2+VIZXLqSEBIt2jjl5EvwaqsvxRiApfWh30pP4AaViFABHw2stPpB3g==",
    "Date",
    "Sat, 02 Oct 2021 20:58:24 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
    '{"542676646349772":[{"type":"custom_audience","call_count":0,"total_cputime":0,"total_time":0,"estimated_time_to_regain_access":0}]}',
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
    "AxSH2ADRMDKv8FdSXl16qlY",
    "x-fb-trace-id",
    "EaMsWrM4gnm",
    "x-fb-rev",
    "1004496561",
    "X-FB-Debug",
    "H6PqQj1yzsX1E2elz2Mfb4ATA1RupcaCrUGLZLb50W6pZLx+J0GHv20RWm9GDuyJ3QOWSE34kkK4dNydMMOXww==",
    "Date",
    "Sat, 02 Oct 2021 20:58:25 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
    '{"542676646349772":[{"type":"custom_audience","call_count":0,"total_cputime":0,"total_time":0,"estimated_time_to_regain_access":0}]}',
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
    "AmKIIAuqFyNTcP0wIexf2Dj",
    "x-fb-trace-id",
    "GnoRndpHFus",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "HzxziGLLNhbRi7+/miQm+2MXa7TveoAAR2y8UBga6oVvwC5lXot5PArWVMkAPkEBwuucdTv+AF7dUxPug2iolQ==",
    "Date",
    "Sat, 02 Oct 2021 20:58:25 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
  .query({
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
    '{"542676646349772":[{"type":"custom_audience","call_count":0,"total_cputime":0,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
    "A3VQ7HXrFPQLrMbuiFi3_hK",
    "x-fb-trace-id",
    "HjcS3mJ5Bv/",
    "x-fb-rev",
    "1004496561",
    "X-FB-Debug",
    "9g1hYgbQNoqtIIS6/5ci1weqrX4gu/jZD+ep4wBSRhDfBuVhxdrFPJ9yC4HSyOQ4uwVGS1VOCurIueD4y1oyAQ==",
    "Date",
    "Sat, 02 Oct 2021 20:58:25 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
  .reply(200, { id: "23848672402580582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
    "Az1aFt-noaWWZ77oo13Ihih",
    "x-fb-trace-id",
    "F+TNU8YKoe6",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "W1CXaCVLGFTt7twCDwOPZ8suEbaFy5vWDcaeLw4I4Pz68oZPtwekyyVYJMNmr+uCNI093Bu0ecEOuglpiWXKcw==",
    "Date",
    "Sat, 02 Oct 2021 20:58:26 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "3067661753945377346",
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
      '{"acc_id_util_pct":6.67}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "AlcccmPRugXqNY-FxfZ-zSJ",
      "x-fb-trace-id",
      "FmfDo2wTHul",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "KPdRDGFsGjjRJZSWpD2bLPM63Arg6BMybtnha18kHcz6/ia2erwP2goz7x2rVidR0s8mlsPerxiaWIR/zi7lbA==",
      "Date",
      "Sat, 02 Oct 2021 20:58:26 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
      data: [{ id: "23848672402580582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"7adf43a8bf1c27fa7026ae6ee1ba3ef908b784f8"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ATSZAlUBvJs_HaXgq2WLUNw",
      "x-fb-trace-id",
      "Fqb4nEt+np+",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "iOtAKXUqO4nBO2+EbRW7BZ7guq/YL7jdNfkd5Z5bAXGKAGndxQ81g+PKEQupoQvdEFZTS9wYPY51yAB0F5O9cA==",
      "Date",
      "Sat, 02 Oct 2021 20:58:27 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23848672402580582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848672402580582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"15df18ecbb7cfbf4ceeb3a743eff9aef18d5be16"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AwWHgF1Owt9fWBTq9o6r8my",
      "x-fb-trace-id",
      "H/YU/Nnal/6",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "QnTqaDT+sfhX/oo8g8VZzFy3RH7uppX98u2+2OFMSzxvcumzD++BFQ1VDgmJjb6io4n1vrYfDxVhTBrzXTttJg==",
      "Date",
      "Sat, 02 Oct 2021 20:58:27 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
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
      data: [{ id: "23848672402580582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"7adf43a8bf1c27fa7026ae6ee1ba3ef908b784f8"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AsqABu_xO3uk5y-YxHBG54q",
      "x-fb-trace-id",
      "HNK8/tGonW0",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "e1/qBM6MB87DH3vJwq2bIQgXcQ9p1Q26qKU8agXsT7EKnC+sWEl2AbsvWu/sC5BQmWuw2tv5yF+UOAzwnTw60A==",
      "Date",
      "Sat, 02 Oct 2021 20:58:27 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8ef75acefef7d037ad3403da6fe814bdcb098b2a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AChPu7CXeEulGDz8VIpuNui",
      "x-fb-trace-id",
      "HJjXjrRXNtF",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "IV7jndy8ukH98Igi1BiiVBiOrSolTopArXB2SX+tFG0U5loR1go3/lQdlAupj901U2CptlgXp4VNiMYz4+Ezkw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:27 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":16}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "AccRKvrir0BThSG4crAbni5",
      "x-fb-trace-id",
      "BKquNgf8+JR",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "Olb6cS5Mo0LfAAO9Lt0gprUKzrCRbf/lt0C/AaHEK8qk3bb6HZXVEX7zfZ9bvpFFNVw7sOEJXrZF6DHjf9Kuaw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:28 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8ef75acefef7d037ad3403da6fe814bdcb098b2a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AdYVh-hdWJoNmAjg1XFlObB",
      "x-fb-trace-id",
      "GCgL8stMvAI",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "Ja7QxzVN1baTiQ9l4OaM2GHmXY+hslPiq0PT2b0hFZ64OxPBFdRJO2Grni1X8XbCXIWJc/l2CBpw3ZzwD2W5qQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:28 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
  .reply(200, { id: "23848672402650582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
    "Aa-OqwR6m_i4f-QJt1XqpYu",
    "x-fb-trace-id",
    "FStXlM+01GS",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "0DrUAf7c+iV2p36YUIMdmc7E8I7GSMnV1yzbKflzHKFHJyeYSTiKLmRSN6u3QHUf1cKPp2xo9sewD2LVDtzf8Q==",
    "Date",
    "Sat, 02 Oct 2021 20:58:28 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402650582/users", {
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
    id: "23848672402650582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402650582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":22.33}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "AFT-MFq8JAavvarmNDi4X8V",
      "x-fb-trace-id",
      "EiC8R+huzuZ",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "nKK8cIv6UU6jmcvZXdNN3KFu86aRu669cpMZp3crJW7bAwV+h0XQz1I/0ws1ldv+MCVXI4a3X8NauWW6ec/r9g==",
      "Date",
      "Sat, 02 Oct 2021 20:58:29 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
        { id: "23848672402650582", name: "(test) Group 2" },
        { id: "23848672402580582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"7bdb5e133e44311b3c582afd738a2633f1351538"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ADsiuVa5hllsJ4o8ZRGEz2D",
      "x-fb-trace-id",
      "FK5u5PqSUEz",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "R/W0r+4pmMe9pmfbTY/qpt4kQQR441RjkjmOQiXVAMBn9ffEuqoYiKQ9WEwSW2+u2n/tvTvXlgA1XIKAa7c61g==",
      "Date",
      "Sat, 02 Oct 2021 20:58:29 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23848672402580582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848672402580582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"15df18ecbb7cfbf4ceeb3a743eff9aef18d5be16"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AISac94yYeKpH9uchQeo2rA",
      "x-fb-trace-id",
      "BE5dFDviiyK",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "4J1s4FPnauSh17pThaPItlaNaMvuVHCJuqCj94lCOkbfzLkzduq0JpxMUqA6HZmI+CVSVYMXEk04Jy4+JvObFA==",
      "Date",
      "Sat, 02 Oct 2021 20:58:29 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23848672402650582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848672402650582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"4e59b1a251977b8f0c90e11c83014c1d82e62810"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "A3SbY-EKvRxCoCe2zbyvQ86",
      "x-fb-trace-id",
      "CSDlsbVNaiP",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "Wa0Ab3NwI8Owzp1oyKIByWgLPFe5doWj2C+xvvJRo7+hDfj04/AeIcPpfTuayVTAajY7hZDCaC7otRtLwRJMrw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:30 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8296f448fd5969e740055865eceefa57debc3f14"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AeHrQgd7BOtV6uAmUf-JT2Z",
      "x-fb-trace-id",
      "AE5TcI8mPxf",
      "x-fb-rev",
      "1004496561",
      "X-FB-Debug",
      "DTRVZd1ZbWgahQQKcr0u8qX+JildmMp/RMN+76tbdwRlPoecuzYGKtNPLXSvTToL0L96vqLQe+PLfXwg3gMq0Q==",
      "Date",
      "Sat, 02 Oct 2021 20:58:30 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23848672402580582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848672402580582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "11881855156937461",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AyZdWcAujqKoSP_7hN8Qixm",
      "x-fb-trace-id",
      "ASHeX5AO4gU",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "o/czm8ydF/XysBdha51Ilgb8AWAsSCqpHjWAfg7lH16Epbcl6Z7mlMgawDgqm9Iz/q9Tt9SE9IsmAYyktPBPbg==",
      "Date",
      "Sat, 02 Oct 2021 20:58:30 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "136",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8296f448fd5969e740055865eceefa57debc3f14"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "A0v1XLEtFpAem8GOs67sw_-",
      "x-fb-trace-id",
      "GSWexoA2ZUY",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "YFmxCl7LlnDNKVAwJzKD/gl33HvktZyWrdKFZzssCYGUY143qfoDc6eqMbyRD0SfWdXX/qPXTVJaMxMez0S3zQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:30 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23848672402650582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848672402650582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402650582",
      session_id: "11881855156937461",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AalI3F4MX6xHrkgOA0_mLfz",
      "x-fb-trace-id",
      "EaVrV2Uz+Yt",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "DJdgqm2Nzzk3tI5bD7iBxYRIjaBqS7sdMI+EtJA+7vcVp1QQEPZvmKhUlazb+SC/HZIjCAo1tl6JtOuX+HEV/w==",
      "Date",
      "Sat, 02 Oct 2021 20:58:31 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "136",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8296f448fd5969e740055865eceefa57debc3f14"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AmltfUho0yEzjZW9XO4DBRe",
      "x-fb-trace-id",
      "Hv03De41z2F",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "NZHwa/C5QzP5TJwh/X/XkJijYPnTNGCAwQBzEBmUQyYENOCJZHhcUJS8ooLA5L5oRoMK8oJ23byUSNlxz0+oIA==",
      "Date",
      "Sat, 02 Oct 2021 20:58:31 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":31.67}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "AwOpJmk3H8F2KVbTfQuXKMt",
      "x-fb-trace-id",
      "A2QCyPfnuxa",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "f12P1xt3Lg5HQZs7igb9RDXVJgYiisVyEg3A/kuzWPqlXrXwxCbL9a6CGBaquAko1Cf4KFt82HGmhipQ4hu7zg==",
      "Date",
      "Sat, 02 Oct 2021 20:58:31 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8296f448fd5969e740055865eceefa57debc3f14"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AffUIRxXxMtKn0VBVSYDCN1",
      "x-fb-trace-id",
      "AMLSTMvGNXq",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "ns0lVm1gZiYJ9QR/ge2ETxhJ7JFMApi9pH0607tH0EemOeO51T/Un2V6pAMvDPmRXOfppH/LD2aTfQ/Vb9/Brw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:32 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402650582/users", {
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
    id: "23848672402650582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402650582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":38}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "AbBUoY2PLIrOhf1E64h_Va6",
      "x-fb-trace-id",
      "Cs4JEALBCY+",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "Jo6g0HbbaXHciqIi3Z1wFv3zL9hER6M+pVvRTgBJFrS6TCglgEpjV9NF3gGxvAPALoR/tV4gRh5FwXRhf+SP7w==",
      "Date",
      "Sat, 02 Oct 2021 20:58:32 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23848672402580582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848672402580582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"15df18ecbb7cfbf4ceeb3a743eff9aef18d5be16"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AOrRbzKCVxyOlPrm8FLEkcX",
      "x-fb-trace-id",
      "CM5kONOjpkQ",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "0zPkBAgOwEsCWAtYYNTxALa6u2UfuW0nmJzdgim8f94jONnwFvgDPCVAgctwaQl4lMnGLVyce/sKsCBmTg7vHw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:32 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23848672402650582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848672402650582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"4e59b1a251977b8f0c90e11c83014c1d82e62810"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ACpHLF1mNT-XdYcTp0xRF3U",
      "x-fb-trace-id",
      "HPLxQJDcBqJ",
      "x-fb-rev",
      "1004496561",
      "X-FB-Debug",
      "yFNWmZWrC09lMX5qQyWdnFor6oVNzB4RlerGL/HYREHMMK5jVRBdi060rpF86Pktk5uNFZ5RwqSnjyD8v4+rOw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:32 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8296f448fd5969e740055865eceefa57debc3f14"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "Aj2dz5Br95sNGjEobx43pZv",
      "x-fb-trace-id",
      "CRRWtRqbqmH",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "bE3RUhO7+UAvbw2Prmwth4nROPIRUzFMIlcaUc4AF9YwhYou2WTMHyLukXBMBsyhGeTgCYiB/grnEaMKAj9RHQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:33 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23848672402650582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848672402650582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402650582",
      session_id: "11881855156937461",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AGZxtaq5XCZZPVzk3F5hJIo",
      "x-fb-trace-id",
      "Fmf67PnXUNZ",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "J5B2lfjHMtvIZrkZQOtOXBcdjymhKQak/G50roUC8YBSA4QmQSUvPXPhBQMk3l6F55MpQBPy26cZEXlMnq7N0w==",
      "Date",
      "Sat, 02 Oct 2021 20:58:33 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "136",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8296f448fd5969e740055865eceefa57debc3f14"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "A441s5NkxxQhUneqFDXlVPS",
      "x-fb-trace-id",
      "H//u1N4qd/5",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "xP0TxwsBFeEH/25VB+31tu7ZTNb1U1TqwSExuJBOxMbEG5wvUtyBKWr9UvsEiC8DPD+zocTRkVkyap8cLP2HlA==",
      "Date",
      "Sat, 02 Oct 2021 20:58:33 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":45.67}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "ATK20GnGT5NvRYpaXv2iVds",
      "x-fb-trace-id",
      "Acdal+gwDbZ",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "xurEia2pkNxtuB6MtxNKhW4ivsN5rdMpxKKH7kgc8BblWYfD1qC481YptCpuy3C1jJLSULwgrTqmkvMRwj42tQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:34 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
        { id: "23848672402650582", name: "(test) Group 2" },
        { id: "23848672402580582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"7bdb5e133e44311b3c582afd738a2633f1351538"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ACGW6KykFqfZliexy7q2EAY",
      "x-fb-trace-id",
      "EizsWHhf6os",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "sMgN1I44EwT3x0pvNkhBJYl4WqrViLqk7A0qoSBHBtWbm+kG90EUUyuF2jqC5/wbhsvtf3RRj3A0/05SpTy0og==",
      "Date",
      "Sat, 02 Oct 2021 20:58:34 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"8296f448fd5969e740055865eceefa57debc3f14"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "Ay0qDaPYnU0w7i7Myn5twNN",
      "x-fb-trace-id",
      "A8kKfsH4F+o",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "YMWxzRmfBoOYkQx0qpEf+ufpa6NmEl9ZKHeaWMTHto7rrJWMjuNnFg56CLq8lo7+OmgLz4wrBDVFrqiQBO5hJg==",
      "Date",
      "Sat, 02 Oct 2021 20:58:34 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
  .reply(200, { id: "23848672402780582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
    "AiiZeDEmrqbQEK4pNdMTRBA",
    "x-fb-trace-id",
    "B87wdZ6tbNl",
    "x-fb-rev",
    "1004496561",
    "X-FB-Debug",
    "1a5MElVy6ySPeZtWICqATe+trfvoxx8iCXLkSFQU9auuDKrwho2mrKvABaysksE0zBQEpoO8eNUomVblyr8yJg==",
    "Date",
    "Sat, 02 Oct 2021 20:58:35 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402780582/users", {
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
    id: "23848672402780582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402780582",
      session_id: "2830406359431302202",
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
      '{"acc_id_util_pct":50.33}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "AFlzadC11jcUuTjYFsObWij",
      "x-fb-trace-id",
      "GJx4bG7ne//",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "w8LUrlOO+jHYtYP57u+kM88q3747tZmP2FdRlDywoK6EggCm4warRgaoOkdH+pGmru4FbCn95pK7fMTuupoS2Q==",
      "Date",
      "Sat, 02 Oct 2021 20:58:35 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
        { id: "23848672402780582", name: "(test) Group 3" },
        { id: "23848672402650582", name: "(test) Group 2" },
        { id: "23848672402580582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"c792e89e8b38bcd40e1030464e5dc094cac930ef"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ATNmoJ6kChpfx7XxqShzZca",
      "x-fb-trace-id",
      "D13tpLikFg9",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "KZMe4O5DesaHz/YkBFxVYul4lGLPiBRz3y69k+QP7Sm6U86SIo+xK5ysaGki9oJKgKASoYUN3BJHu303Dj3pfg==",
      "Date",
      "Sat, 02 Oct 2021 20:58:36 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/23848672402780582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848672402780582",
      name: "(test) Group 3",
      subtype: "CUSTOM",
      approximate_count: 1000,
    },
    [
      "ETag",
      '"2c85ecf8266fcdea28247b3c9c4b13014e985064"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ARUTnmpCUQOpCk_3Z31Ch5p",
      "x-fb-trace-id",
      "AQvql12Qw1h",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "9wmzrRAwOKXo9FOcbGWspz3NnNqlhImN78I+rLRvRNSZAa88dqaDk2GJFdscRPG12/9V1f4XS3jgDCCT4EgEQw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:36 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "94",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "A3T1L_HpFtPZQVnOo-A48ot",
      "x-fb-trace-id",
      "B9lN7VYS5mg",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "dLgTEJ2FjWL6HlXDTtyXZNAjjf8x1hJgpOB+05IRyuPvROcJ80q4pQnJovXvid941SI6mi9pxYtakS3Gyr4a8g==",
      "Date",
      "Sat, 02 Oct 2021 20:58:36 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23848672402580582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848672402580582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "11881855156937461",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "Ac5_RU4BcBZfGu_IGrNXVxi",
      "x-fb-trace-id",
      "G4qN2Ms5CWZ",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "8E8vrHJjWoMAXstcJvPFVeBYZgh15zZYapMFMNBnez9uhjVoyi3HI1ALA5GMdTQxN9vvHwX0VaD+MuVBwev8mg==",
      "Date",
      "Sat, 02 Oct 2021 20:58:36 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "136",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "Azv5iNdl4B6upJiHxaurZ3x",
      "x-fb-trace-id",
      "BuVWmctSzzN",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "1FNGYAHRTBak6jbOESaT0Y29oNJnKGTWi7DX1ZLDTYppgXVzjzgHfITZHhDdYqdgX3HXPKkfSFJeWs8Pj9rZlQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:37 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":58}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "A8wf-Q9Vi7Ff4t6qHQ3fhMQ",
      "x-fb-trace-id",
      "Bc3AWhzgwko",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "EADlUkZiUNljMqb7kz76uiuaMcxqPih/pZfd+zCM89DGDHbhb/oAuq3ImEM2xfqYXotdUQm2nDSP3euh5KsM/A==",
      "Date",
      "Sat, 02 Oct 2021 20:58:37 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ApNzkiJbZW3DYNzdY-kuRPo",
      "x-fb-trace-id",
      "F2BwqGhddN9",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "PD7YJBS2dHlPqR07/zs+m3druUxYnCWepJv+TjUXcmJcwfq2+tzgGn6Hw8QXbiHlQd27+oxb7G+wUTb5Jo4mXg==",
      "Date",
      "Sat, 02 Oct 2021 20:58:37 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AcLdVUiX7BC7t4Pg9wQPVC0",
      "x-fb-trace-id",
      "A/ute7mZqjl",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "HXhddGMomDtYw23m8hgbb+Dcer63p5TL75f+4mgH90NI9W9rHlfSf4vkAmSSt+k8scnImTFaS48y8eo4klOx+g==",
      "Date",
      "Sat, 02 Oct 2021 20:58:37 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":64.33}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "A27mdIBKZtgH8Vm47p4l-QJ",
      "x-fb-trace-id",
      "GaUlR6t0Xbq",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "ikepYkHdPjLiL2ALEKXIksCAVMn8dHAu+jamLPYWsZQjQNloT1jaAbtXsKJtC0MBE2tIv1uuNlvSLs4YLwrE9A==",
      "Date",
      "Sat, 02 Oct 2021 20:58:38 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AbKQXu2nhQDumhd3tB94PfF",
      "x-fb-trace-id",
      "CSKjoIuHhvi",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "YqOVSOWyarWWO+naDex7G/kHstuBNlwPrT7vMwoYlj4g+EtdQ7Kv1vzUNLlWO9W82LDhKfADRYjTUVuQlLlZoA==",
      "Date",
      "Sat, 02 Oct 2021 20:58:38 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AigS0c5DHQksFRCDXBeGxk7",
      "x-fb-trace-id",
      "FNqNCV40JNS",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "oISoeSwE9gZQBIFPZMlkZioufhvOzju6a9pz/ks662k/U72bHqqU2UwCYKhUTNCXw0WGO8Q/4ZOZ0D4Ppqi+HQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:38 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "5543458406553224862",
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
      '{"acc_id_util_pct":69}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "A5m5vML2riL1-SCeB2ML_CX",
      "x-fb-trace-id",
      "BQ9Vw6IiDfi",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "rRLjiZGi+r+e0bqKZV8BZZE2q8U/IvaoiemEjL6H2uAKKWlcG2pN4HJ3Ku5taTXwVstm05kkIa+ec2Gh/DW0zQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:39 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ALtoIq4etvtKKOjf_6Zt8dd",
      "x-fb-trace-id",
      "CpqoLM40gEp",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "dRFixRZHwXUJ95FMHqLucxUnyfCrtONkTH9+mSH0r8qvqlLHx0a8f0t39XHLBBP+M3LZmc1yMjtMtuMBTjzm3g==",
      "Date",
      "Sat, 02 Oct 2021 20:58:39 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":72}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "AQa2N0Itro0EYTlARqWKOYk",
      "x-fb-trace-id",
      "H4oSC9+qwUl",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "D/iVPCQVm0FLPuQnGyo5F4Rl46CX/RAQGfKy6PxEb7Q/7AzxaM69wLERzV2RHKXX47xNcF5pyUqK9QKcA65qFw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:40 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":1,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AiGWdWBw5p2f_wSv4B0kPDM",
      "x-fb-trace-id",
      "Ebxi948yIHy",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "lHFyCl4JAWobuXcDV1x/KV5nKzVIN2/shavxlsQCzhSOJrp15eA7q0gK5A/IT5A9tAnrikkkFtjRlnvMa9Ro4A==",
      "Date",
      "Sat, 02 Oct 2021 20:58:40 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402650582/users", {
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
    id: "23848672402650582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402650582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":72}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "A0B3jSc5VeLLuQneuD3wjH6",
      "x-fb-trace-id",
      "GhGZxbYLdTC",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "qg3GNRuOeaYIGbzLN5rmPaooZVZ4uN1LgH/QAyUiiBUqQX9owTyUsSRhfNp4pwyHH2bAN2CbstU8AG9otFJc9g==",
      "Date",
      "Sat, 02 Oct 2021 20:58:40 GMT",
      "Priority",
      "u=3,i",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ANUoEnLElJn1Q-LJoMvvUZk",
      "x-fb-trace-id",
      "HBTIWVAwoQl",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "7+K4PFyPRgVWVagxN5dtYsl7piqiTZnEodoSEhfSQDpm4oga7WqvyY5SLIvi54tQYOiJG5IysrBpZYvTm6O57g==",
      "Date",
      "Sat, 02 Oct 2021 20:58:40 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":73.33}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "A4in4Z0MuWEd_y0aC932eIn",
      "x-fb-trace-id",
      "EyC/SUMJLYx",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "43BOa1+VCN4QO4eF3ItdZ8ow5Ln1v2ttJNXpuhXeGEDEPa+eZugbbAKA4z4zfDoIlS5SiLtV3MDPRE6FdWuEhw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:41 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v12.0/act_542676646349772/customaudiences", {})
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
        { id: "23848672402780582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848672402650582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848672402580582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"0794cc0720cf1b0d36c63faaed7d61a7e0259f6a"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "AwOSOhS93MSkZiGM8WD4DPv",
      "x-fb-trace-id",
      "D3LB+ND07Qh",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "5YVxJ1BFk6B8phC3hptI9bTZ8aAte7FZRUlmL8aaEgCrhQdklYvU7/Slrgll3eERZyNNE1fAPy76h20ePurtqw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:41 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v12.0/23848672402580582/users", {
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
    id: "23848672402580582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848672402580582",
      session_id: "7142137687269777831",
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
      '{"acc_id_util_pct":73.33}',
      "cross-origin-resource-policy",
      "cross-origin",
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
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
      "Akj7WtzgDNpGRcWVZsSF_BV",
      "x-fb-trace-id",
      "Fvk5RrtGEkD",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "vRkJNl970xVHlmCHNzqs1iRa+IKSIHtTVuHmLMSPTrD4Y5cbB0m0HidD91z4GVy4mqMFJyEqTaAsL3/9fETeHw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:41 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
        { id: "23848672402780582", name: "(test) Group 3" },
        { id: "23848672402650582", name: "(test) Group 2" },
        { id: "23848672402580582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUjdUNUItbHY4MU1LNEtTNFJzRjV5VzJ2Um9rUE9TUFY0TEFfRXpvWFBlVnA1NTdsRXMxU3ZADVkdpYU5IYXZAIeEFkb2pnR2tWcjVBeGZA0bFU2OEh2WUFn",
        },
      },
    },
    [
      "ETag",
      '"c792e89e8b38bcd40e1030464e5dc094cac930ef"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "A96nb1rNBkPEkAf4g3hoV0U",
      "x-fb-trace-id",
      "Gf3dU2xbxYU",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "NuXlz3nffOameq5wlVMBP8BMAhByn+tyTimONNVwY8jf6AYkZCrIwKnxJY5ftBxw6GXJugZWcJG3avQMRr1txw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:42 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23848672402580582", {})
  .query({
    id: "23848672402580582",
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
    '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
    "AJ2aPB7BAoquzIA1szCcDE9",
    "x-fb-trace-id",
    "HHLvCIQWYy7",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "JCNrh03XA/60B3voz4O6rQRF6wMmtxubP413oRE4lrcjlJtduYhqZINPk1yTP1OSR/91yCNDqcT1UkrtRuxPyw==",
    "Date",
    "Sat, 02 Oct 2021 20:58:44 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
        { id: "23848672402780582", name: "(test) Group 3" },
        { id: "23848672402650582", name: "(test) Group 2" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUnlvVzRFZAzBENWwtSThKd2lhRFhsQzlJbHpNVi1ValV3WFFJRDY5NDVYYXRCOWdnaXhGZAEZADX01lWFQ4MDV1aGJFOGdwVDFzTDRmbk1FT043WkJ6NWh3",
        },
      },
    },
    [
      "ETag",
      '"5fa7c019471c4e5de57480c1e3e7a5be48dac496"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "Ac-Je_RDJ15U4bbuKfKreCS",
      "x-fb-trace-id",
      "EIWq/2bnmmB",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "KBitHNNUErCXWfGXUGh7KRtOxzGPpHFP40EBwUuY/J9FBzR0sIqT2PB6mfmUdarw5yCL3cl0Jt3MN/d857CChQ==",
      "Date",
      "Sat, 02 Oct 2021 20:58:44 GMT",
      "Priority",
      "u=3,i",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23848672402650582", {})
  .query({
    id: "23848672402650582",
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
    '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
    "ALpVbXlHqtvlPAQCUj-PuIe",
    "x-fb-trace-id",
    "DyJLqKd3qPe",
    "x-fb-rev",
    "1004496597",
    "X-FB-Debug",
    "lfd43md0tiTz6SpVUvP/ahYJO/Ut3JNLg2TMY351ywmK+JBb2Bv/YFSNNyAvVKU19AdOxVZleJ6440ikeBQxPw==",
    "Date",
    "Sat, 02 Oct 2021 20:58:45 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
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
      data: [{ id: "23848672402780582", name: "(test) Group 3" }],
      paging: {
        cursors: {
          before:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
          after:
            "QVFIUkMyMFdJbEJtNGN2eGJieERuYlp5X2JCZA1BCcXY2MmJhMzBaUGFXRi1WUlZAySE5qNG5SVk1lUUhlUk14NDQ5VW1SNWFTeEJld3ZAHLVkxNHdWNVRJUkVR",
        },
      },
    },
    [
      "ETag",
      '"9b1e54fd071e5021293a84329db58bcfd462e84b"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
      "ApVIMJjJSh3FUHI7QqqMcGY",
      "x-fb-trace-id",
      "HSUxCjLPXIU",
      "x-fb-rev",
      "1004496597",
      "X-FB-Debug",
      "ioirTVEqAneM3BGZvsz/QrS92bxmd7lI/k5Q+GrUAUi+n5wclMMjAS1NXptQJ8Ta/YJjyOqq54zOWSpJ2evurw==",
      "Date",
      "Sat, 02 Oct 2021 20:58:45 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v12.0/23848672402780582", {})
  .query({
    id: "23848672402780582",
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
    '{"542676646349772":[{"type":"custom_audience","call_count":2,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
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
    "AeBiMt6f359xJlAaxPZqLUL",
    "x-fb-trace-id",
    "AhKM7RgJT81",
    "x-fb-rev",
    "1004496561",
    "X-FB-Debug",
    "rYJ4EVJTSOwBeEEijBsy7wNl0frLL0yvO35q1Y4KI+UZdMZlV2pxDGkRJVGuSX9eux/QIErOOAyWotKezyMbQg==",
    "Date",
    "Sat, 02 Oct 2021 20:58:47 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
