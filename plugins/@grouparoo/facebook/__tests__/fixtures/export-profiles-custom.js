const nock = require("nock");

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
      data: [{ id: "23847400777180582", name: "Test 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"35cc679f6b018b628c206d20edfcff2f3d108f36"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AUIK8lOTPUQEe-KfzLKpPm-",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Cc2IfgDiMv+",
      "x-fb-rev",
      "1003608480",
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
      "OMPjYzctejVHA6kg+klp/z5GLZPXyyAUXPo6VbKA12GNfXwQgNw2oG1/Lu44AgS1OPwshnJw2QiTLQYtr5ouPQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:43 GMT",
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
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847400777180582", name: "Test 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"35cc679f6b018b628c206d20edfcff2f3d108f36"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AVNVxFyn-8lF07IhLdRFJY7",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ADO7h4IZxov",
      "x-fb-rev",
      "1003608480",
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
      "C/0In7cSRZBzAhCGy1duZnJlSgnjZnzub5Xa00lNdefZVgolb1ilUlApMJZCsEu5yj/G/2yIXNputzCz8YuXrw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:44 GMT",
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
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847400777180582", name: "Test 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"35cc679f6b018b628c206d20edfcff2f3d108f36"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AKEllW3pU4PpeleNg_8GjFv",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CxEiVtF4eeP",
      "x-fb-rev",
      "1003608480",
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
      "obIeBWzkFjihd7FirpfaXy9vyLzMUUy4eBlefMPNo4gtTKpPPSJjOVcg+Un4xoH6A5LWjerFIDH9L8sCnzZeOw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:44 GMT",
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
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847400777180582", name: "Test 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"35cc679f6b018b628c206d20edfcff2f3d108f36"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Av-BQ4Qvd2YJJjHLtkI_Nrk",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "H6blQlW4r7z",
      "x-fb-rev",
      "1003608480",
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
      "/BO2tV1EAw3gB6kzzMK0hyJJ+w2pqxd/xwf5wMphX+0YOb+8VWxsUS2zVQjYOhqEVQero46dF0J/hFQ44OmRKQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:44 GMT",
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
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847400777180582", name: "Test 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"35cc679f6b018b628c206d20edfcff2f3d108f36"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AetNsAQ75vp4e2Z8wvbktvy",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HfP9+hDlTpd",
      "x-fb-rev",
      "1003608480",
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
      "PAAqlmxp2hT4iCW+WSbtQBlx1RYl6SyF58gdmeMvi8aqBJpLz3NxHlX8r4IgIRUQ5Md703uGK18lMpPElmyERQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:44 GMT",
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
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23847400777180582", name: "Test 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"35cc679f6b018b628c206d20edfcff2f3d108f36"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AIytjEb0MNDHuptlJUskVwa",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BMbUrRyPUSN",
      "x-fb-rev",
      "1003608480",
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
      "fNjvC4fN1U8Jc3c1l7jYKusD7+40aSPFP4xgkmZpT2Np52Ah7BM3SNZXjDQVtIa5sr2bskQx94UEC62Gb/qQ6Q==",
      "Date",
      "Mon, 12 Apr 2021 21:15:44 GMT",
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
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"96590cef784cfbe594fd5f4d13333d8c4e2aef92"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AhQl4sYmBn-4-WaMyvLt9sX",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HhXh0iP7hik",
      "x-fb-rev",
      "1003608480",
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
      "Nq1Poj91PctOKQvxbQyNDVgsX+1LNhGeJf79kgHxxket1c3eUlAGMMwyAiUX7gvkMbamfR4mxlBaDyAQV4gnlg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:45 GMT",
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
  .reply(200, { id: "23847402475230582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v10.0",
    "x-fb-request-id",
    "AQkV3XyhqVpjeKdvdDeRVso",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "BNSoxjgc/T5",
    "x-fb-rev",
    "1003608480",
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
    "EGRHqQ38QMwnCb9KcYXRfyXbXlYwevZPPOJmot4I+pmMFLUrxqXaP1Z+IdLN7xCdfxWCywe9FQ71VFZC7yIHLg==",
    "Date",
    "Mon, 12 Apr 2021 21:15:45 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475230582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5022970352017871556",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A_9JG23ax5RrS5EUYyJ8r5Q",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ArEnYm89ZUT",
      "x-fb-rev",
      "1003608480",
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
      "gfXFviqBgVyy0QGuCulnhGWXFzIu8gzgZMfAroAdYLg5ZuKJkinZpPjsL3F9wv1KlFYnlUGsI40r74o9/pFikA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:45 GMT",
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
        { id: "23847402475230582", name: "(test) Group 1" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlBwQWhNTXQtS2VOS3d2Yk4tX2N5MjhYcFpXb1NqZAmhCZAlowc0lROFVqNV8xTXpGWk1aY18zUUFjTF9lZA05UZAERzRUJndW43bXF5c0tmSURLdzJqNDZAB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"edcf9af4a256f68a854d68a8b293e8a13ebf85c2"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AhvnHfnRorI_ezmWSCfGAtt",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DbPKneWET39",
      "x-fb-rev",
      "1003608480",
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
      "VcGJf2ridyi1sFzryzENr9Y1j48YpD9fEertpHOo93HYiq+25rervwpVRy3A8DTK43gMcaP4YxeorKKgPP8tKA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:46 GMT",
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
  .get("/v10.0/23847402475230582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847402475230582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"323fb79c54eb5ad4ffc8e5e7af08020bbb9c6b3d"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AYNMbCViosngvW1nNWNQ_xC",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CXIOmwZbVQv",
      "x-fb-rev",
      "1003608480",
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
      "TsCBDarMSC88nUUJCmBvxcuhWeeyZLZNCOLeVEHEUMs3nt/A5qKEgiLYyhDVbYBjLq8Ek6xl2P7FTerjhebEOw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:46 GMT",
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
      data: [
        { id: "23847402475230582", name: "(test) Group 1" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlBwQWhNTXQtS2VOS3d2Yk4tX2N5MjhYcFpXb1NqZAmhCZAlowc0lROFVqNV8xTXpGWk1aY18zUUFjTF9lZA05UZAERzRUJndW43bXF5c0tmSURLdzJqNDZAB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"edcf9af4a256f68a854d68a8b293e8a13ebf85c2"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AUS8o_xDUYFMK-1Yq6TjJw6",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HUCNJ5CEuWE",
      "x-fb-rev",
      "1003608480",
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
      "87WkH3CdNszm2x/6Vqancoi0oSXXymnAVncxJVatZ90zmyuzhO2GvxT8n4uUirj8t/sFIhvF/OZlv4Ex752FDg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:46 GMT",
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
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlBwQWhNTXQtS2VOS3d2Yk4tX2N5MjhYcFpXb1NqZAmhCZAlowc0lROFVqNV8xTXpGWk1aY18zUUFjTF9lZA05UZAERzRUJndW43bXF5c0tmSURLdzJqNDZAB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"ffc3a4a0977237867bc7ef9174c5c4eefacf5d03"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Axv5xGF952RzRTDIAy6Pu93",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CKmSym8lbIY",
      "x-fb-rev",
      "1003608480",
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
      "rN6uqarjfVRUixGhqHUO28nfFtuwuHyJC84ExzMGgEv4qgK5bfw1MkcOVuLr1DrwB60pLPhrqJkZozPu9S64cg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:46 GMT",
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
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "ATBblS6_KjLOU6GWoIQZu4x",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EEUelnMsOnT",
      "x-fb-rev",
      "1003608480",
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
      "QTWLEFqRps0FcwH8ldFn+lrzDIaV/MvDF6Gcho65Pup9LUCpo1s1Vdu+dOt6ykN1cpvwfBjtOFMJQo08K33jPA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:46 GMT",
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
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlBwQWhNTXQtS2VOS3d2Yk4tX2N5MjhYcFpXb1NqZAmhCZAlowc0lROFVqNV8xTXpGWk1aY18zUUFjTF9lZA05UZAERzRUJndW43bXF5c0tmSURLdzJqNDZAB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"ffc3a4a0977237867bc7ef9174c5c4eefacf5d03"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AJOv0kcv-dCYM9dj-wq9NU8",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hi9wVoGckoh",
      "x-fb-rev",
      "1003608480",
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
      "+za4g4wiBNyIY7znU5RDkTwYskHaW7L6CBmnhNmoZp+JqJP9693G57ItDvc6Il5nhCju0+47UQZTZaFthZ0+pA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:47 GMT",
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
  .reply(200, { id: "23847402475280582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v10.0",
    "x-fb-request-id",
    "A2nDa_8Cof1TuCMQAusQ3fo",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GctoltAKh2o",
    "x-fb-rev",
    "1003608480",
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
    "+rjuiUzVPVUPXetynkn312ZG8Rdl+NF2OPrEO3imKaOfoC5doXIucuEdDCYsinMIfuSSNavDb9zmOvKtZBjWlg==",
    "Date",
    "Mon, 12 Apr 2021 21:15:47 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475280582/users", {
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
    id: "23847402475280582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475280582",
      session_id: "5226879727615747141",
      num_received: 2,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A_heW6B8GFINmStsqh-ByiJ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Aj1e8zSXi0s",
      "x-fb-rev",
      "1003608480",
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
      "k2VQsBg0VZw51+fnuBmfhO0iJDl8fJ+Ei0lzyontRx13vcu7jbe+0h78Sgu6yOb2OYl2XNgjzvMQjfBieKwUVw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:48 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2" },
        { id: "23847402475230582", name: "(test) Group 1" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"66a63bf1c34c778ff63589ebc1bfc4d1a2327881"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AI4US8gLPR_Ex0_PRUZLgQP",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AIGXgnCOILg",
      "x-fb-rev",
      "1003608480",
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
      "2O7lCn1oSweDtnuI5v2HBlofeywvaH6ImA/LhXUlyLbi0H/XOzmM+6wUauZBIw5jRpFWdP1ZzHN/cjh5UfSPAA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:48 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847402475230582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847402475230582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"323fb79c54eb5ad4ffc8e5e7af08020bbb9c6b3d"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AHRvmG5O_CNztNhPZrPnY-v",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "D7ceskBRXg1",
      "x-fb-rev",
      "1003608480",
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
      "uwO79CpppxgIeDkiLRy810s50NZwP8p4EB8F+s8wGd3q2bjDqiau8Yo8Q4AUKYCl5AbhK/O30yApA2/WQ6vX8w==",
      "Date",
      "Mon, 12 Apr 2021 21:15:48 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847402475280582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847402475280582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"7c9254dc1de8c7813dd419ba11eadc6fa751b6f0"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A70u4saBeg0ZLydwmOLVZn-",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AR4PYy8Z7HZ",
      "x-fb-rev",
      "1003608480",
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
      "peMED9eeNmvJoaqU5SFoiGPsmmeymqC0Z50IFuLWouoB6ONdnZmPyRCVtosmbEue7VJ2AeewOcQiakFtIjzTyQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:48 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"52edad5ebaca51e221fed23018d12d596c858c70"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A9BIZsDLHaOtSAQWxJstZO2",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "C1OR5x1/alx",
      "x-fb-rev",
      "1003608480",
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
      "PGoKs2sJzgBvlWNLI69GzHGRrY5tfVLCghMLtDPkBymKJhKM/vBpAC1kIu2vh49CvLir6G+a8qp9XRc9whFjAw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:48 GMT",
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
  .delete("/v10.0/23847402475230582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847402475230582",
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
        fbtrace_id: "AYRSIzPUhaJ0BJoJibATFrL",
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
      "AYRSIzPUhaJ0BJoJibATFrL",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BYq2GTPh6aM",
      "x-fb-rev",
      "1003608480",
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
      "bZTO9ungUD0hbYY3neuABRBByX/ANeoz7q3VOT4zpiM49cll53QQoUHr0DlxfKJcIoO1TtRNR8hufjx2b5Ynnw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:49 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"52edad5ebaca51e221fed23018d12d596c858c70"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Alv2y5qsqDDq-woQWDhpAac",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ac2C8cs3k0G",
      "x-fb-rev",
      "1003608480",
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
      "c02jv/XDY92MwqNIIewDmuSVTuFQMGuZZOfpLY3FHIsTqSkLKqZE9pQ3gRe/zQMXCsDBFh1S8MxKdbnC9yv0+A==",
      "Date",
      "Mon, 12 Apr 2021 21:15:49 GMT",
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
  .delete("/v10.0/23847402475280582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847402475280582",
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
        fbtrace_id: "AtsCOyAw755lBd535W5ScTh",
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
      "AtsCOyAw755lBd535W5ScTh",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AVau5baDbAI",
      "x-fb-rev",
      "1003608480",
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
      "/j3zkRCZawqsOZW7M7QxrmKZX92iJfyDf69VGQJhDwnFX6+PIWgw/qXC6U7w77sX3gtUdY/RT5OobrQz+5DbGg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:49 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"52edad5ebaca51e221fed23018d12d596c858c70"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AVFCJCDYG3R4h3VFfwyjSUz",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CVrZQJdKM2b",
      "x-fb-rev",
      "1003608480",
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
      "JValIzX5KTs8pt4greMe5OtX4oICPcDU8cOsTBAgFmsGAv0m9Fn+XP7TeP1oQn6l9IMJklmjnmlyfgXyhclXFw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:50 GMT",
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
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Alsao9bQDysJejXfd-qmPa2",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ExJUUuZ+7zl",
      "x-fb-rev",
      "1003608480",
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
      "CdBJMaTOtyo4laMn4jdKlgepJ0I1MokW51BEyhlmkXA6nLX7XHRRDkcz+7oPuaji7slBHLArYlJurP3gQ9wu6A==",
      "Date",
      "Mon, 12 Apr 2021 21:15:50 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"52edad5ebaca51e221fed23018d12d596c858c70"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "ANtFt96bQDIoQep4dyBkY8g",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ADs/4On15PI",
      "x-fb-rev",
      "1003608480",
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
      "X0Gp57Sx6hOH0++KQtU7jbamUG2MhkvWeDL7/X7vrmFsSytPOj0jJ1kDzJrK9koUh50yqsRsk+QtPPz+WUMNQA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:50 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475280582/users", {
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
    id: "23847402475280582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475280582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AXMVvsG2PL7YEuni0iDHXry",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AXXipIuiRH+",
      "x-fb-rev",
      "1003608480",
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
      "nETGmkWeWe8AIi/ORrv+v4FdN4Bq87nU6qEj0WfkOJ7D60LbyI7et6EpsWT0rnX/Cj6AsUJn3XjB5MTq40bPHQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:50 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847402475230582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847402475230582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"323fb79c54eb5ad4ffc8e5e7af08020bbb9c6b3d"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AUry3yHXUTu5O5GMNttG8_a",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GO0C/O3iNFv",
      "x-fb-rev",
      "1003608480",
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
      "W8kT1HOcHo9kV++SqG04pyRUKlS4yMqR4it6hPioqlbZDkVbIBA2EUGIpFs5IlgCZNe+wQ8+y9KIhbb4Nd/KoA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:50 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v10.0/23847402475280582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847402475280582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"7c9254dc1de8c7813dd419ba11eadc6fa751b6f0"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AyWU-CwXHiHsy5dGMlcbwr7",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BHa+xQ0+O/0",
      "x-fb-rev",
      "1003608480",
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
      "qlTnPvzwiWHimXNDCBlbmFyekoM5uTRpXTzlQjMUnhPVgO+VuK5LOPUD0nqlqpnIlLRZpI+V9Q53z1/IX8BlSQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:51 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"52edad5ebaca51e221fed23018d12d596c858c70"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AWZ0Jp6TF0ku9pr3-sNuIXG",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HGHNAcnTytL",
      "x-fb-rev",
      "1003608480",
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
      "wqP1AAJ0qvR67O91qCzRYRnn5yR6/E8vs0XAK5eALyDei11nazamuN05iu4UHVmK2yIcYnkWYop9zKFleC4hYA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:51 GMT",
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
  .delete("/v10.0/23847402475280582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847402475280582",
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
        fbtrace_id: "A8qTGaYmOWPRmFvGkqzj6Uc",
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
      "A8qTGaYmOWPRmFvGkqzj6Uc",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BRbWMA4EFvS",
      "x-fb-rev",
      "1003608480",
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
      "lQ9HG+rHMFIvltvZV207MquDsVuZhFReC6tzp4694JILATdn63it/XQboNSe/u7e4aItS7pp6inx49N/D0gQEQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:51 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"52edad5ebaca51e221fed23018d12d596c858c70"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AbINPOhHNzoxQ1U4mG-xAVD",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DeRiAeFX4y4",
      "x-fb-rev",
      "1003608480",
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
      "av9xTcvRdMnp3Lr9pCN1F+fEeMGtdXasWqDHq8x2mtpd28NsBkpi8bqaqU4rFxb1xXR8Skh+hhl8bAEIzjrbgA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:51 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A32UyDevZSi-xEu3sPuphiC",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AxKhjTCbya9",
      "x-fb-rev",
      "1003608480",
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
      "5GUAU7K2G948s8hHFNBKFrDshX7fEQyiq9CI8+fNYSQ5nT3yfeNDKjEMiI/2qz7NYTQkuMkMzi1aYwJlOpZ3Vg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:52 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2" },
        { id: "23847402475230582", name: "(test) Group 1" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"66a63bf1c34c778ff63589ebc1bfc4d1a2327881"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "ADiiH9saVbozE3gJKIX-E1U",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EokLBueeUtO",
      "x-fb-rev",
      "1003608480",
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
      "NjWsDz9t6LyHdHgjBte41p4YiuGfzhe6NVbBJAWJ9pAdFQiOLcDlP0IxON59Ar9CBCRAc0p8Y/tCaEYruF3qUw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:52 GMT",
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
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUjI5WFA1UzhBanhsbzQ3T2JHbnVTWk1HSGFUTFF0elNxT00wbHAwSGpmUDF4Q3VsNFVYWVJsNTZA4b3ZAyRF93cWdZAV3M5T3JOT1dVSDN5YmFscTByaExB",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"52edad5ebaca51e221fed23018d12d596c858c70"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AHlw4QU1naKUiXksQtUoNiy",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hr8HGyrqfPU",
      "x-fb-rev",
      "1003608480",
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
      "AW+eap3SAmRg/uO3hqBv/zLf3odoP5dI3pwuLHF66/8h5MSvAAjfZQu6Bn0+JU35557QyXQYf/KB/RH7HIXn7g==",
      "Date",
      "Mon, 12 Apr 2021 21:15:52 GMT",
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
  .reply(200, { id: "23847402475420582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v10.0",
    "x-fb-request-id",
    "AqIZvOtKc8MheIWuPibmUrK",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "EuzMey6lFE5",
    "x-fb-rev",
    "1003608480",
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
    "evmPztLsqqpNeF697v5HR29Wa9+srfj7aasI8pBDxT7tZXaw1bJGMyV1JNYwXGjYT6DeUnpNpatC9Q8N4yY0Gg==",
    "Date",
    "Mon, 12 Apr 2021 21:15:52 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475420582/users", {
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
    id: "23847402475420582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475420582",
      session_id: "7525855141896437136",
      num_received: 151,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AlElEOb_MsOz6R-1xhDrgqe",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ESE6Jwup9/V",
      "x-fb-rev",
      "1003608480",
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
      "/BfNPDcw+QYxpOfX6UP9hCr1yup9Z3uJ66Xh7HC1w6QAtUY9kDmMwVmMdgx0OVIKpKREvctzCg3wIUrbrX9VqA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:53 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3" },
        { id: "23847402475280582", name: "(test) Group 2" },
        { id: "23847402475230582", name: "(test) Group 1" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"23db4a172a0872282acea71b2e0b24e2b481d4ed"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A0w2wA4y7JmC2nEv-vOpGMA",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "A3KTuUh02iR",
      "x-fb-rev",
      "1003608480",
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
      "OjnjZqCZw/i0lbKxXbD4C6RnNOLQ+SHYwrnzZsEpLHS9Jc4++RBEXRRj1TlcYixEkz3gpr9v+5XnFq0RQ2bglQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:53 GMT",
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
  .get("/v10.0/23847402475420582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23847402475420582",
      name: "(test) Group 3",
      subtype: "CUSTOM",
      approximate_count: 1000,
    },
    [
      "ETag",
      '"7ceea7bc4c6e6723291aa819b4b5ed1e6330c049"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Aw3KnZs-rEItBFa5crr-gQQ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Fo9tpGFen7O",
      "x-fb-rev",
      "1003608480",
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
      "ghDeNOk0wdKL06wZE9D5ybkA3t+4ZW/OTtgHSraqqvffI5zi76/ExSfMs9NrsBx8gCJqS1e2qEPC16hOleUgwg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:53 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Aon9cHtQwuPtItYnXRkC3oe",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GNjQXGF3mgi",
      "x-fb-rev",
      "1003608480",
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
      "iJkKWa+Oo0n63krLFFfR8/S7hN0ZZaBowQ0bY6yvNG5jBDHAXAxcH+XEHeZ6vxVtSl/2Hc6bHTQbJZLs4kfxmg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:53 GMT",
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
  .delete("/v10.0/23847402475230582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23847402475230582",
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
        fbtrace_id: "AIQ3k6FnTFHim3mzjga0eaJ",
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
      "AIQ3k6FnTFHim3mzjga0eaJ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "D2KbBp9Tf26",
      "x-fb-rev",
      "1003608480",
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
      "r6JoQIKLjQ+aE7AqRYiJ/hUQo1ltypRaC3cFjw6rmFE8DLYno9+wnr2x9d55lvSYegYWBmynPKHy5n3otJzllA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:54 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A9MU5b9QQnJ7EXE3PdEgFnL",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ExWBVmsBPFx",
      "x-fb-rev",
      "1003608480",
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
      "rsROdP1B948Jwf6DxCGK/lafHDFTjRAzFnr5rQmNrBPfVNvyi1rUi72tMCraPM0BJCm34CaY8+q/XbA9DP2tWg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:54 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AP5ELfpxokfTg-HBgCRxfzA",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ca7cd1XaST9",
      "x-fb-rev",
      "1003608480",
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
      "zdw+AUHzpUh1EbBtOm041C+dWPJt46dl7355i1ZqqdrNJGhmByx2NsdFSKfDnKKThO8z4g2E/Uk0cKM+Zx59sA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:54 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Awa3XzUmjAand3miS-KFlSY",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DoJj1ESpy5j",
      "x-fb-rev",
      "1003608480",
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
      "7lQyTdvYnZ/foieXwN6JEFXlgu/SNT6IDkFH6cOcP27XpYKMgXRKvYVkH8JEsal+OSkTJS89V3B94wzU7/QBgw==",
      "Date",
      "Mon, 12 Apr 2021 21:15:54 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AIhsHcQBiyJRMIJNabPUYr7",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AVkK5trcS7O",
      "x-fb-rev",
      "1003608480",
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
      "3SK4hWz+rNd7JpSom4W4gu3CBUK7aEY46/u023WWaez0shRuPVMCap1peg+Zvd9+44XGiDoYLnFMfDxs479rYA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:55 GMT",
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
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AaU3X4o785lAxWwlQOlRSEg",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Bhzv6dBq7zs",
      "x-fb-rev",
      "1003608480",
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
      "Xh8iphBf8MYWpLzhJKFKzT/Ijyh+0KOVVsghpbAaja21U4bHhdCN8FVIA8ooEVa9CxZ82G6uX/3BhA45jcYHCA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:55 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A5J35EMaCSp1IR8C8IyCYn9",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "A3hCPGdynXu",
      "x-fb-rev",
      "1003608480",
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
      "PC2CJt25r7L6RTAPqlianCAIh5dD+hhqw78W2RzCiZcec+uZtOgXniFcOOjgGc+KlMLexKV/5MKfRoBln43cmg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:55 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AWFYbMncpHvcmKgNPbaZmPN",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "E08a6E41pdk",
      "x-fb-rev",
      "1003608480",
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
      "yq1rzXtLQMpqkQGFLe9/LTp5wY3gFG3+kZDTTB7Bt+y/Wl7Qq3IBhiyfgSIikTOSX3h9oEmyE4c3GSsWyEG8Cg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:55 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "4812653561193077724",
      num_received: 2,
      num_invalid_entries: 1,
      invalid_entry_samples: {
        '["e190e9b20a82820ff09d873ae4dfe092b21bd625c259d54ab8773ff022eb08e0","","e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","",""]':
          "empty external ID",
      },
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AjflQ_P1ptqW5Bkqt7l-ppW",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CCaCxWk6Iw5",
      "x-fb-rev",
      "1003608480",
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
      "4dBMtDo13W5UdkjN6qM5m4hFtuI9yOtqUXWMonhfoiBGF2RO18y50F9B0oiuxCcgNDmAFtPtx+T02zf7PHos9A==",
      "Date",
      "Mon, 12 Apr 2021 21:15:56 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "As5y8i2RcZ7ID2FpOn3IqeH",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Bvl+MkwUVMQ",
      "x-fb-rev",
      "1003608480",
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
      "JWxKVKLtClJ6+0SOeLyV0zs6BwsiTf6EIAg/TknB6O7FAGB/j7ldlYyTD0LclOl1SPNgs3qCovO+cMZz7tXJTQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:56 GMT",
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
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AlrNIV7EGAjrIu8kGPxLf7U",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GT6EB16cgDS",
      "x-fb-rev",
      "1003608480",
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
      "QKZbQEtlqor93pJHEEu7kVTdA+rAoJrRQAD/9taTyrF/UD6IRcTXRqpsrN9lxa+H3fumK5ULC2TgDXLg5kco2w==",
      "Date",
      "Mon, 12 Apr 2021 21:15:56 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A_Nmo999ZU3Qa0liGpncnrm",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DN9K3ec5Obl",
      "x-fb-rev",
      "1003608480",
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
      "k6yAyeAmZxXGPwcufYc8gCtPpqZxbLBrAqLpIUYV9MDB5H3hUbACnsE58cATRMz/1k1TSgTeOsVSJaRhjv8Cjg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:56 GMT",
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
  .post("/v10.0/23847402475280582/users", {
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
    id: "23847402475280582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475280582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AIDfQxb91xiNyvImYEeDylD",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "G06eeDycyVM",
      "x-fb-rev",
      "1003608480",
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
      "CpyXb74hDGHmh5VmWIoaWhHVBfmQtsf11EH8tFye9B9LYc9PVc2WDC8CdcCF4eTquq/sZqGf5rUWQLF4kXg6ig==",
      "Date",
      "Mon, 12 Apr 2021 21:15:57 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AAS5ibxZD_Ec1IUR6r8H_Yi",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FTIr1eCKas8",
      "x-fb-rev",
      "1003608480",
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
      "j4do2+Qq+6+nk2bdcHzq62xYrfNfTY2SDfpbukwoL4DDcjCwl6Wx4BFzb645Egh/QucNp9rZvtuP34+8V+Gvqg==",
      "Date",
      "Mon, 12 Apr 2021 21:15:57 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AvpDVloQ2dj3gpVLrg2uHRP",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DWno2fqVv0F",
      "x-fb-rev",
      "1003608480",
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
      "3etNluk+Cncw2YZ2/I7HlnHIzLPiuPi+o75eH4dKBbWOuvRyRAZ5js46LP6oh5Mnsv6iVJqkL8vH5OSyb0pyzA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:57 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23847402475280582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23847402475230582", name: "(test) Group 1", subtype: "CUSTOM" },
        { id: "23847400777180582", name: "Test 1", subtype: "OFFLINE_EVENTS" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"107a407b3da3cb0c3db3d21c389179a15a935ec1"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "Aq8saUpr3r-hjDL4-LPajLN",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AFRVgbYu2tU",
      "x-fb-rev",
      "1003608480",
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
      "+p4gN1sHErJQQkqZTkozQgt34KJxbfCsQ8ht0Yz63pRFZmTq8csyGXJgmMs1vNVPrd1qwFOatFZWCFMeb7RcjA==",
      "Date",
      "Mon, 12 Apr 2021 21:15:57 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v10.0/23847402475230582/users", {
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
    id: "23847402475230582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23847402475230582",
      session_id: "5226879727615747141",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":100}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AXsf4J99ee3VFUiMo48JeFV",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GFJuo2cAQRH",
      "x-fb-rev",
      "1003608480",
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
      "bCCx12fw8omxR7cKohGeERLPGZUiwhOV1FiKbIuvGoeJYxkPRmTjcS4WxyupaV3B8ucY5gPEUsZ5TMemgQUxsQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:58 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3" },
        { id: "23847402475280582", name: "(test) Group 2" },
        { id: "23847402475230582", name: "(test) Group 1" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"23db4a172a0872282acea71b2e0b24e2b481d4ed"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "AKeqrA23Q1LUHtPTlEZuQfN",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FmLpcgeeiBM",
      "x-fb-rev",
      "1003608480",
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
      "Xd/PZSAHAdLvAqP7F5sLwhSf6BixnXjOlIQMJaSvUsG4BiDJwfcK+bgP9tF+6OSXwG+1Uvouq6Xed1RfpWP3lQ==",
      "Date",
      "Mon, 12 Apr 2021 21:15:58 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847402475230582", {})
  .query({
    id: "23847402475230582",
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
    "A-WeROY1ZHTfebmxJka5HIg",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "EmRRrTHg+Yk",
    "x-fb-rev",
    "1003608480",
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
    "PVT8eWCIzliDw3FeMsf2wha4geEm3RHDZDU0UWAHzhIRGO9h9q1tVpfHAt2z8CND1xQ0JgbUhFWsrNpE+A684g==",
    "Date",
    "Mon, 12 Apr 2021 21:15:59 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3" },
        { id: "23847402475280582", name: "(test) Group 2" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"d129b2016620f0d1974d2078cd31698ccbd5753c"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A60i1rnB-YvfMrFuuUfgMUg",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "A7+t7mKplEg",
      "x-fb-rev",
      "1003608480",
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
      "cNqkgrbvxfEoI1vX1ZQo2W40tqKkUiEZrP/jYrr9XokkJ5FKblUUb+QA6jBqHTdivs1HGucEkDD+G4h73QUF3w==",
      "Date",
      "Mon, 12 Apr 2021 21:15:59 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v10.0/23847402475280582", {})
  .query({
    id: "23847402475280582",
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
    "Ad6r_Frkc36FsGdmZ1s8p-7",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "FSylqyLP3MW",
    "x-fb-rev",
    "1003608480",
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
    "sPPBD7G2D6jfuxCIYbVKS4P+eACp3EKE9rqZSLn+bzTL6Jczk8OtSNsnWRoSBTksfq8oa3lcuflc60viApX3IA==",
    "Date",
    "Mon, 12 Apr 2021 21:16:01 GMT",
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
        { id: "23847402475420582", name: "(test) Group 3" },
        { id: "23847400777180582", name: "Test 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUndwdlZAOdWJNTlVtZADBjb3RuRFBoaVZAJeFg0dUhNaWp4dFdJTnRMNGdoZAU1rVzlyT200ZAFNIVXduSTQ3VjUyN2V1d0NFcDhjS2ZAGM3M3dDQ1aGRRb2ln",
          after:
            "QVFIUjJXU3NTVFdHaFZAobGhjZAnRla2ItZA0Qtel9vekpOUndrTkdoZA01fRDR4Uzk5R3FvOFBfTzF0ZA1JWVUFQa0ZAFQ2hUMnBsWlVYUFZANRXdGc1NsSmxwZADB3",
        },
      },
    },
    [
      "ETag",
      '"57737b352c1747d566406d182a94b9ef7f594f7a"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v10.0",
      "x-fb-request-id",
      "A-vlyWrmgTLILZY-FBJB-av",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Bs23BYRTufi",
      "x-fb-rev",
      "1003608480",
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
      "tsLmEaA7sZRpmi2Mih9bI6THFhdT7+4K/YSaE8lYmdKMTAZSBjVMLPcv50t/SsUeNeBLaZXT3ItbpKGFdboTMQ==",
      "Date",
      "Mon, 12 Apr 2021 21:16:01 GMT",
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
  .delete("/v10.0/23847402475420582", {})
  .query({
    id: "23847402475420582",
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
    "AlPyTOkrfTnju5xQpR-vM3T",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "Gcrc4zXLhl/",
    "x-fb-rev",
    "1003608480",
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
    "AXhJpwTz0axo3Mhi60Lic4Ts7i/UpGvT1Al4p6F51JcOpabUDNkWVk8JZTidyJcRUdDJTtvgiRlcyxA/6W+Q7g==",
    "Date",
    "Mon, 12 Apr 2021 21:16:02 GMT",
    "Priority",
    "u=3,i",
    "Alt-Svc",
    'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
