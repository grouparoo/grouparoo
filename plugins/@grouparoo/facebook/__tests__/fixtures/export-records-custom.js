const nock = require("nock");

nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AR6kvZe1TVe3Fh1bCBhq1xk",
    "x-fb-trace-id",
    "EM3LMfIZ49e",
    "x-fb-rev",
    "1004423949",
    "X-FB-Debug",
    "Ypq1iabg2hNZMcZ/+69CBZl9DixdKv+zw2asVpCKCzREMbm421MRBVM+rDMPF0zBvCxGbqMX+OqwXrcaEZdsQA==",
    "Date",
    "Tue, 21 Sep 2021 00:08:40 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AealZUryf_SeuqATlwBNUYz",
    "x-fb-trace-id",
    "DekePdRbUkj",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "klDrmgL1fAvYj2T0I2knvxVcybq9Ldvhp7IwVZTq3opu/PFiRn7TpgHShZ71HJHL4kjbtcrua7SvUHm5ZiSXVA==",
    "Date",
    "Tue, 21 Sep 2021 00:08:41 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AaCCuF6uOKUF8AP18h2ULSt",
    "x-fb-trace-id",
    "Ds4+IRDzo11",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "kaqRl6PrbDu+SYhWH2XdDysZtCK0YnAbFgjUIdnYqVlgwoBH1m13+IOPSq42lnwSaO+16HJyszMxllTKIHnEAA==",
    "Date",
    "Tue, 21 Sep 2021 00:08:41 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "A5v7hOaDisHLf-J0xB9VzI3",
    "x-fb-trace-id",
    "Gcp/9DKZw/q",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "aCGkxuTsWPMfkPJW+lr6hKh+VUGFI7DB1KP/Uqm/Hhw2s3us1gsB01dPw0twjqGKKaFP+fKKR8AJgIlUZv9bqA==",
    "Date",
    "Tue, 21 Sep 2021 00:08:41 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AAr7dR1NtQqouITjfSswMG2",
    "x-fb-trace-id",
    "HF+uvfQgdO+",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "dNiZe5VnAbsw/q2mqqW+zyEMYH2u/CH5YPLgwymYL74oqN0G1gQ/h/bEy/LbXJqskfRYJtfwEZUv3HLdwGjrbA==",
    "Date",
    "Tue, 21 Sep 2021 00:08:41 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AdY7CMMKHuSR9vF0tF8qS3m",
    "x-fb-trace-id",
    "GcE4UrTyEWz",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "v2f9Pj9TBWrsbBuzOvvz18wPaqTyH0aioIpcZLSYqaXcPaJIsgkVsrcCNKRff6wjsYRjnHAKSLkrSoorPI/Z0Q==",
    "Date",
    "Tue, 21 Sep 2021 00:08:41 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "11",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AvcWMSsv4Jo5O3JE7cSWWRg",
    "x-fb-trace-id",
    "CVUP1SkLaQ4",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "Amn9lvWvURoM6jJWqmbec8bftFi6LG+pA9z9RGOKYZqTswHeq+C3UdR5izJwY0c0MODyRVpti9fdOmT7dlmPUA==",
    "Date",
    "Tue, 21 Sep 2021 00:08:41 GMT",
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
  .post("/v11.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23848581113410582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "APOXBwr8KtdN2Zn0-c718NF",
    "x-fb-trace-id",
    "Gqdd8BW8mvz",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "1Q7dxebtwYdj+M8DlsLv03rtmzsL2JnO1h6k7H4CYOe6QkS0YgILr3cjGfkWt8Sijk2Kl7m0sOGy192IPe2WeQ==",
    "Date",
    "Tue, 21 Sep 2021 00:08:42 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113410582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "3072446828550405529",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A32MNDKJ2vraiAeGlQbbhFr",
      "x-fb-trace-id",
      "HMes9+J1nYB",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "S9NgPkZknZUDYgTFJy7qNEGDJvnPvGicJHQK5Q2568BIDKfzPKOiQCmBQ2q9Gxfo+4ynmn4IxBZnTIWmgEudbQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:42 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23848581113410582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"1c77499456ec2911c42f5955dab12944894ce423"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AX0Gw-8-Kl0sl-0dTTX7Q6H",
      "x-fb-trace-id",
      "EYy2yAVXleg",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "NaoOUM87kiU7kz+wNIsIftxFf0hnaNspn9MVrhQCiXD04d41B7AfgwGvV2SABLageVWQI7qr2DYKQxLeVCb4TQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:43 GMT",
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
  .get("/v11.0/23848581113410582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848581113410582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"b280d8ac8b3fb4e64712f568b1e74f758eaf92dc"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A82VgcInK0sMoNSq0VW69es",
      "x-fb-trace-id",
      "CGT5neYLeLO",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "kAzBTnT1Tb2dBl3w/3ARtHEimNL0WXrEcyeCbMJA+mxI1XReYfrmOk2dzP918E98tQwl5jx4Vn0WMy+BwmFqmQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:43 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23848581113410582", name: "(test) Group 1" }],
      paging: {
        cursors: {
          before:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"1c77499456ec2911c42f5955dab12944894ce423"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AzNttXLndBxXSvKOvn5ZA5-",
      "x-fb-trace-id",
      "Hq/wa616AMi",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "PRUKHPf9qymu9AGvIrWwfB0IBmviD9U39jdCPMTxqoGCv1DHeO9W7CI4aV5RigV/WqkZmiZ/lpZO5I3nXd03+A==",
      "Date",
      "Tue, 21 Sep 2021 00:08:43 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"f5e3693db6ed597e2053429eafe76339b1c3d1db"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AppFb7ecx3LBWZ3scDpFmOW",
      "x-fb-trace-id",
      "GOkDhvlRL51",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "Q5nEabw2ce2dwTQ/PnGGsMMfllnLEzJZS0xdixjsNq2Aj0FW7SBpVWLiIAvkojg5SV4vCqW4zwaCUnLWKcxHkw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:43 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AbuYChAu4w4zerCxI_sqy2Y",
      "x-fb-trace-id",
      "DQMe/tYgrFj",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "HwDBjLQQJQysO6bLZxqwXP5/BQi8qkHeu/kEF6EHkPCu/de0RKck67EX9rjZ5K9daawSWA2zy1URlXbgxhzNGw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:43 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"f5e3693db6ed597e2053429eafe76339b1c3d1db"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A1CjcJN7ZwqDZme4JE0Y0Sh",
      "x-fb-trace-id",
      "At0VJhLBkul",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "NRVBS1XrAEJIKnUY+fBO1MRBYLoDGzU/FjPWHPHmNPzETLzIucSlrf+3NdK2NKNQPnIZjyibOkTQcJyFdoWANg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:44 GMT",
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
  .post("/v11.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23848581113850582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "Alq_MASXamEIbDfcgUX01Ls",
    "x-fb-trace-id",
    "Ckt5WHuB+yb",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "Per9U4rfWFNdbXRfii9f7ZdX91lkcVeribmUKwQpUoj47UsSoWTkMskcntFXj92DSSjVCycis7/5K9TORWEZtw==",
    "Date",
    "Tue, 21 Sep 2021 00:08:44 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113850582/users", {
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
    id: "23848581113850582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113850582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AwuwpKTcyY0-P3RzRE9dsOt",
      "x-fb-trace-id",
      "Hm+i91Hufnz",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "iKweo3ym276TxyP5l3iq2erNbGOcTFZd5xKi0LLd8u4X30o8kxhU0qLnvu9mQlSjFklEFCMQxTzEus/PxE1weg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:45 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2" },
        { id: "23848581113410582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"cb6b7c869fd7471eb0da5c425fd9c90dff620c91"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AeJrnQSFRzRYuFecBJvivq_",
      "x-fb-trace-id",
      "GD38lBpSxxT",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "XJqCBEGx+PxYJ5tICKITbe5trMjRmKIkmo8H/5wIJvT/P9xSz37qYMuPBQcke+jDmgJeVON6fzbvt3ye5gMmOw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:45 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/23848581113410582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848581113410582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"b280d8ac8b3fb4e64712f568b1e74f758eaf92dc"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AbDXdJu-GHHMY3OdT9AYjeD",
      "x-fb-trace-id",
      "AtRggtMsoDu",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "sXegyMmCdHnqQ4BdJmLjruLiD6AHqhk1tIuxpO49au5swBeFdbj2bjW9TEpFtYX5PcBxouxs/HH/4UHpPNC5jg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:45 GMT",
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
  .get("/v11.0/23848581113850582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848581113850582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"c177e68af944ccb5e6a72c0954c75632eb841bb2"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AsXraZha4bH1L7Msei4j_Ij",
      "x-fb-trace-id",
      "B6qkiChSAT0",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "Jgnj5W1hsneKxaPBqTFHsq3QfzX+g8H2YNnZivpUkccZ0e2U0effisCentXb2J0XFe+cpntL7T/gTUIINX0lrQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:45 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"ae0781acaff263e5f07dfdfeb40542d033d9105f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AbWcd7zN5RINBKK7uT6bpQG",
      "x-fb-trace-id",
      "EY2m17AhvWE",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "WreIXbxy/bFtEDgx+ixyGbmLtUfe+iFOrdQBHchMNdpASq7EN3Jj4E2Oh9FMV69Lp82f0brVk/h/sLu6JRgdHQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:45 GMT",
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
  .delete("/v11.0/23848581113410582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848581113410582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "16666929761965516",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AneSlel8HCLGJY-qyP2_Iaz",
      "x-fb-trace-id",
      "Hc8a/JAxtDf",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "LKAYkRn0XfGK1PwmfgqYMs+vmHfStQNy2lmpqxrmJs9n9KC5YH3RLmROlrUsr9Arnrad4muUGfKLkH7M9M9SPw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:46 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"ae0781acaff263e5f07dfdfeb40542d033d9105f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AFCxzMR_pYSNmgODEOjMqmg",
      "x-fb-trace-id",
      "Hx2gWywTvHP",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "6DIVDfxrDq6gSapuLIS30WQg5KNXtdziIp/c074WIuPog5i67y/sVZlWsu5AjhNa/z/mv7Eg9PtR1YPztXPwUw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:46 GMT",
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
  .delete("/v11.0/23848581113850582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848581113850582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113850582",
      session_id: "16666929761965516",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Ajs1QNhWwoBjOtFfSGuOB7I",
      "x-fb-trace-id",
      "DdF3xiZ32VG",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "Wzde0mGB2BcMkyj1dZoTsFQpt+C6bJvB89cSCJ5mYUuGKasLl3fvVOsV6c87a4LI1KoxDJ7N+EQwbzcE5RB+iw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:47 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "136",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"ae0781acaff263e5f07dfdfeb40542d033d9105f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AWqVnZNUSnZi8ZyVQwR_GQP",
      "x-fb-trace-id",
      "EJmFRQUK204",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "gHbe8BWHSnFxH9RAt7AdIb4WmPAARixWqZOR0axj0eyXePFAKJDkw9S2/vxwAGJLSZBA2g1hBX2ezjltsVlJRw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:47 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AxhZy99gPlOR9XIpGUL-YW4",
      "x-fb-trace-id",
      "GYLfClUjUZi",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "mPt3mOnB6zSE4txb+nHkslE3QxOO4FpbdLJ82DLUb0MtyODSyfPNVGj2GQrWmZQI66xJyPaDk10DHjDK73Swmw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:47 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"ae0781acaff263e5f07dfdfeb40542d033d9105f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AAr7WreSf3EDAJMZcga57QK",
      "x-fb-trace-id",
      "GJWZzc+43YQ",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "/JdeEuHxG/P43NVcW00N2Ut51rdgF1oBP0Zf2j0lMnfwUIF8yzcE/To5PV1Uv+I7mBqzgDgZ9aNsTL38GsqK+g==",
      "Date",
      "Tue, 21 Sep 2021 00:08:47 GMT",
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
  .post("/v11.0/23848581113850582/users", {
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
    id: "23848581113850582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113850582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A1BH0UJo0oY8NkSCLfJr-lq",
      "x-fb-trace-id",
      "Gn27kiJUcXA",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "O+WRUBXjzUOrwN19KBGJkKQEK+zOlaylV/V1PxT1X1rdbH3APU6dS23XwYyL7LB1dSV/qt1491tXCPs2BZYVLw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:48 GMT",
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
  .get("/v11.0/23848581113410582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848581113410582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"b280d8ac8b3fb4e64712f568b1e74f758eaf92dc"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A-8bmzKEchzo40Amgjhn7Z2",
      "x-fb-trace-id",
      "GkaHJt+/w64",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "R/MNkeAL3UG6ta/pViC5uGC3X8Q6UHAIrbUUZe6+swWqmG90JnAA9r78PwDF6P/il5Spauj/9l+1tqQv8NXfTg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:48 GMT",
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
  .get("/v11.0/23848581113850582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848581113850582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"c177e68af944ccb5e6a72c0954c75632eb841bb2"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ABLnF3V3idX5g4cmMWzppPM",
      "x-fb-trace-id",
      "D9+VrXOrq/V",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "9+ZvI+6/plr0T5bDoot75I6wF71CJNPL4ovJ6V4kicWDa1Y6IB7b1ksBB9WkxTvwZSssK9ncmv9luLfc5WpShg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:48 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"ae0781acaff263e5f07dfdfeb40542d033d9105f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ACwJ8JqfLy_CDMbQgY4heOp",
      "x-fb-trace-id",
      "FfcseGaz7MN",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "3WPtoySu1uznbnQDlPox1SvO665mwypDFQ8H2kbZgy27DGVTy71qQgNFb/vMvKBEr1OhtirxOIHZCHS0u0scYw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:48 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v11.0/23848581113850582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848581113850582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113850582",
      session_id: "16666929761965516",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":7,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Al1OhVVX6MSV2umL_rgHK9Y",
      "x-fb-trace-id",
      "FKHZBxzGV72",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "M9x9+nr7lO40VO/Eb6It9q5ZcXZEXiG6w7h1QXOd83CSxIf3yjOCTb/U0wHMdSJVyRItseJ6hW6xitkYwH2VCA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:49 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"ae0781acaff263e5f07dfdfeb40542d033d9105f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AY-vinVay1RX6_X40A8o4nS",
      "x-fb-trace-id",
      "HLn0XpCVFd0",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "vT2TthNqcXFEsVbrtD4Edmc4Y7hJbb3gb9OCAjn7jqz2FvSvt5TI3s6p3A2sPc15RixJS06s4eQzuG/BH8TRJQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:50 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Abo8qycG2sT5Hu2m6Op-51w",
      "x-fb-trace-id",
      "CeW7KeVRjIj",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "3upReGA3T33rfooTzQH8tau3g8yP1fB+jrsZz+jpa9ITMNZfI8Upoi45ujb6tpt2RMeYx/EW1ifm6BShKxMHGw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:50 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2" },
        { id: "23848581113410582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"cb6b7c869fd7471eb0da5c425fd9c90dff620c91"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "A1JysuPbEnv0b4x2gsIFMYK",
      "x-fb-trace-id",
      "A68d9TzAMH9",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "t3hZQJehvAX24jHOlIAWGGCXAMfpUhrwJ1zqmcxqXGuCCm9ob3tU4C2DCSPgMHZIQnte9fYS45Qf0KCbOo+kMA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:51 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"ae0781acaff263e5f07dfdfeb40542d033d9105f"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ADOX2VO5aeCoM9z3naFn6B1",
      "x-fb-trace-id",
      "DS5l5OpsqjD",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "gadLRXM3Ici5kyY3tXQgz3cDUtagtpAenx0moKJVwctOaLlgsFKuK0wzJMun3nVvCSi3eFi6UrLMGd83zK6cQA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:51 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/act_542676646349772/customaudiences", {
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
  .reply(200, { id: "23848581114090582" }, [
    "Content-Type",
    "application/json",
    "Vary",
    "Origin",
    "Vary",
    "Accept-Encoding",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AEmO3NssUAq-75XzUCDVWDQ",
    "x-fb-trace-id",
    "DX1AyYOy3Ml",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "uGsl9Ofl8DoKKHQU2E1AN914MIszGodpwEGkb6KxiK35jZhAGVGp4XPGFWX1iG6CbyuO3gDguZkWwKdu78n4FA==",
    "Date",
    "Tue, 21 Sep 2021 00:08:51 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581114090582/users", {
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
    id: "23848581114090582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581114090582",
      session_id: "2833229905291980331",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AedOupel0vRnPjepVlC99FJ",
      "x-fb-trace-id",
      "H3GCYf8ktIy",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "G8e7v/NGTca5FFDUqJhdmh5wdsH96NucwxtOG9HUMbfqfx19/cKEzP2ii81eanrYWYiCvi2p+zEU5hzpd+7VXA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:52 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "140",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3" },
        { id: "23848581113850582", name: "(test) Group 2" },
        { id: "23848581113410582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"451c64bc3fca7856fc797f245d74f4f2c8b202ca"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AiQ-62nutz8Uz59FKNSr7mZ",
      "x-fb-trace-id",
      "CgWYla5vp3l",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "UvjoLLk5Xzp/hq50DnwY2H0Y71301hIbC6TbXVkuN214pPgOIdAtJA9smSnwU5BHk2ARorT4sVN8IhjKumQn1w==",
      "Date",
      "Tue, 21 Sep 2021 00:08:52 GMT",
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
  .get("/v11.0/23848581114090582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23848581114090582",
      name: "(test) Group 3",
      subtype: "CUSTOM",
      approximate_count: 1000,
    },
    [
      "ETag",
      '"8a999ea7ad1fe62de7d87b52a9698ec510ada77b"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AxDzj4b3sXjg0kDiBZWTGQi",
      "x-fb-trace-id",
      "HpJh+d37f/u",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "mB9vEFl0sK0pmscHMN1OrFNwXcudaOIkUEqeHwO1XUyHHqhTYpNC8ZBy+qdi1D2PpeVCL6Ix+9vWy3KkOJBi1g==",
      "Date",
      "Tue, 21 Sep 2021 00:08:52 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "94",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AlFJli9eK_SXgk5tepN_inr",
      "x-fb-trace-id",
      "D8RZlXXZosN",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "P0savVfmenNL3yC6iUxDBWm4+JaRGL1GjpGtuPqFKGc+665hITeNtHqF9TI6vgD4uI+4eSpM2BEa7cqGhDyjqA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:52 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v11.0/23848581113410582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23848581113410582",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "16666929761965516",
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
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AQT8qr1Eul3TwR-kOCCnlGJ",
      "x-fb-trace-id",
      "EpSjM/CuHUm",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "btkm2dE+FFVnnRDdl9xL1OWICTyMBfOiT75v17pB0XDFZ6I1DILf+yH4YAWz1WyT/sH7D1nR7kAphYq37WpTlw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:53 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "136",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Alxr3ekdXZ1Aqwau3okcdL7",
      "x-fb-trace-id",
      "CHmp8gBSm/2",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "RXRZcX7Z38qa9qsnfpEK/lbowZ9eKCsIwzVmNca+2jXYWHnAP0ssIS1v58Qebme43KW5YnT1XcJOKG9bvwvPug==",
      "Date",
      "Tue, 21 Sep 2021 00:08:53 GMT",
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
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AH2InsZVELCuAvZYeQGxRvg",
      "x-fb-trace-id",
      "AFxtVkkE59e",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "N3CxLTZzcWiSNi6ZKCovuKDMqfRiqrmuTsFSVl8GWKtRuPuK7FLHXGayNec/hrFOroaY5aYUxC4lwkv5pVkfHw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:53 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AZ1w_dwokiJqAOAVPd8R5Jh",
      "x-fb-trace-id",
      "HvpALnvkJYZ",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "DkrySkm66UMvvKIriVp8p2fHJCo2Cfa1cE+9SzFKQISRXt4sDZyd0GxIl73C/Caz2ccwh0SBwsjB9zvZHWgOBw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:53 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AlMXFPFcv00uMTvd3qfolvy",
      "x-fb-trace-id",
      "Dc1fjcirXI1",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "YAjlC7PlpguEqAyZsaEbuLsCaOJ0yQk9hRgVvTzVyu7ZG5sOJDx86NRrQYeyGdXZbGUMA418mOy1p4z9NzdDWw==",
      "Date",
      "Tue, 21 Sep 2021 00:08:53 GMT",
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
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "At1oumXwvQb8-SHcXGEgy2i",
      "x-fb-trace-id",
      "H3hDKczJ81u",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "yZT1347XH5iCBntov9hDZH46fnpAELA4+oAGwMxG5KU+Jl2riZQ+DWxdV9J+a3jJELnZzi0z1Z3wT34XflqzXA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:54 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ALvy5u1EpkTRZnVPUHCbowH",
      "x-fb-trace-id",
      "DNxOzA5uBa5",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "r6jWHwllRaYp7gWlnBGLbPKv89bAZfCMz6cUf84tzCaQInMKcSDlGYR7KZ5jpisS3HBFKtHpvc7Q/lyIeroO4A==",
      "Date",
      "Tue, 21 Sep 2021 00:08:54 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ApDszzY7bdKaMbqOlwLwbmx",
      "x-fb-trace-id",
      "GgeBQEBBoYe",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "W6vW0YK/XAeAP+gBUECtVeYnPT47yAvqz/XcFnGcPwhRIAD0A1+XhYN0Ue6wulc/L3xd3j07yzxEs34R4LKhcQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:54 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "5538673331948196679",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Asqc5oYXCeSsE2m-hLYnZhC",
      "x-fb-trace-id",
      "ECBn79CjJBS",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "agtc2cR2aIJFzPMxHv24mNlCMyFJXRPta3hQVvedTSupHrwpHQSM3f+heBOh3DfzbRJmrWCr7927WzOyWQUsrQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:55 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AUhTB5zIB3q-gMNkc0ONcdb",
      "x-fb-trace-id",
      "FROUpDMZcSG",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "UWXO8YGX+fhU7pFQEktbuLlk20Q3j2Kv2DFnme56MgZ0FGeKnmXfqQab8YiCEN2pBixO1HFBXK7oFQ123O7VlA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:55 GMT",
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
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AenedKg9NJZQprlfwjQu-iw",
      "x-fb-trace-id",
      "DZzOKILRHsF",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "xZaRspUyZwl0IEXUUPrYFgxZM/jVwIW40IJz4p0bqv9nBjIeWvFALIzskBPaIFFEcIn+VTmkb0APRynX0dEVBA==",
      "Date",
      "Tue, 21 Sep 2021 00:08:55 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AzCnvnrfJ8XowChNxcnU6HE",
      "x-fb-trace-id",
      "GeI0Bg92N0T",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "7QWXPPEr5yFEqFGiLPUxmoAEjhUORKKd3sDvDcKlxeqoiPaJ/UH2/RTH4c9n2K3Ia6Sp5wxvIihnX0GUph96wg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:55 GMT",
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
  .post("/v11.0/23848581113850582/users", {
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
    id: "23848581113850582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113850582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AHPZtvwn4uUbv2LwQYBqkhs",
      "x-fb-trace-id",
      "Hl/x66vrKsC",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "7khSlscGeSwb5j+mzb9vj0rmH+N8DulxyllIcA8qzw/HRKAHQt81dzC9kb8Elc1I9j7Zfq3Sj7NhcjqgJi9Jmg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:56 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AyOJW3Q-6B5eJ-dGEtxFnHV",
      "x-fb-trace-id",
      "H+jCy/N+PKr",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "cg+TdBBDnPu1mle4U9S+sfMFMlAMnbVTkPUnl9HyiKjSCPE0EFnNxwok8S33KhYWqBnPStHRGNTTK8/9hArV0w==",
      "Date",
      "Tue, 21 Sep 2021 00:08:56 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AYnroBvEzkjRQGHfXcK_jHR",
      "x-fb-trace-id",
      "Agmc+P6+viz",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "GD0ibYV9aO29dO3Lx28SUid2tjKLeh5XGW0UObUbPdZxyoG7jBm4Qo2XbiNNNJTu0flkrlvBSBxOcBl5cMd/Ug==",
      "Date",
      "Tue, 21 Sep 2021 00:08:56 GMT",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23848581113850582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23848581113410582", name: "(test) Group 1", subtype: "CUSTOM" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"aeba8aac03bec0aaac6c3be3e26a03fd98adf039"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Am7U6dRUkTi97KQRcGEqxDT",
      "x-fb-trace-id",
      "AAAg6GzZ3GQ",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "6iMcEvs/Ch5w8Dvh2OKYmsP3orlQFAKCl+jiXXuTHVv9VbVWOPdhXs8rc7HR0oMNV/JuUpHIbwZoua7SvI5+zg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:57 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v11.0/23848581113410582/users", {
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
    id: "23848581113410582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23848581113410582",
      session_id: "7144961233130455944",
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
      "x-app-usage",
      '{"call_count":1,"total_cputime":0,"total_time":0}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AwE4_M_r_kK9s1-BpnEh2mR",
      "x-fb-trace-id",
      "EvCxatvkvRZ",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "S1CckOMdfDIbdCbCDLGA5ueYtlcvtEA4KwkTOwD6THHFN1LC2AuEJIKQcuiNiCI5j+vsVE9yUTUJuRSb112XgQ==",
      "Date",
      "Tue, 21 Sep 2021 00:08:57 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3" },
        { id: "23848581113850582", name: "(test) Group 2" },
        { id: "23848581113410582", name: "(test) Group 1" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUll3VDdqeFdhcFRPRy1FbTg5ZAmJnNHgxQWw0Uk1uOXFjRFBETFY1eEhTajJ1bnBzQlRvR3lIRGc3WU5HOEFBcjVQaXpHZAFJuQlI0U3FrOV9TeUdMSklR",
        },
      },
    },
    [
      "ETag",
      '"451c64bc3fca7856fc797f245d74f4f2c8b202ca"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "AcQTaV5BzYznjT07rnVxBca",
      "x-fb-trace-id",
      "CPpbDpsUj65",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "tCUIOX7klUbzGNCyfDjiBUlTtLebXxGlDfi5i+jbJqYvTd4HWfxs24ORaKCYEC3KszXqDSSVR7CQ04U3aYLDeg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:57 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v11.0/23848581113410582", {})
  .query({
    id: "23848581113410582",
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
    '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AlfODuIKtqImC7AzyRIg4VQ",
    "x-fb-trace-id",
    "Fs5obsT9Ojl",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "upwixe8Zss40rj/kdBxe+3oZyOjS1ff3wUHuNLgaiTh7YtrH0lZAEzY5PtiGzmlN2L2PfKbGDqIRk0P0fb4DcQ==",
    "Date",
    "Tue, 21 Sep 2021 00:08:59 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
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
        { id: "23848581114090582", name: "(test) Group 3" },
        { id: "23848581113850582", name: "(test) Group 2" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUnZAhNFRNOTRjNWo3cXlYLWU1ZAmo2N1pCV2FzMTYwMVJnSTVHdjVwcmxnTEZAzOVFmTWl1RWlMbG4wSWxQVnJBVklwVExmeXhTb3QweEd3cTdtN2ZArNEtB",
        },
      },
    },
    [
      "ETag",
      '"f663b5767a35418d5c2f410f6cc6a39c511b63f8"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "Aj5zrkCYmXExF4W5bVYcKS2",
      "x-fb-trace-id",
      "C7B3EbyLaM+",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "9ny3H+rmkLwBhZ/0h6gH9gBcIs47SBXt35Ffzy2q80rBL3b56VIlFK8v40a4xtY1axijf1R0C92qXJw/ToI3Bg==",
      "Date",
      "Tue, 21 Sep 2021 00:08:59 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v11.0/23848581113850582", {})
  .query({
    id: "23848581113850582",
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
    '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "Ay63ESPP7TRqTqn10M798y2",
    "x-fb-trace-id",
    "EwHBBMGwImH",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "OGM0QytyA0Jn9MRfs8if7WrKnOnaHJKhjQ4KmfXrOE5s6lPJF96LRMrzKJ5lPjg9lKYMvDinbMVBhbE6608F3A==",
    "Date",
    "Tue, 21 Sep 2021 00:09:00 GMT",
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
  .get("/v11.0/act_542676646349772/customaudiences", {})
  .query({
    fields: "id%2Cname",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      data: [{ id: "23848581114090582", name: "(test) Group 3" }],
      paging: {
        cursors: {
          before:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
          after:
            "QVFIUlZAKQU1vdkFXcUZAqYmh2RHlXY3BUR0pBXzJ4R0tGVzIzREVvbXhHQXl1dHc2V2wwRWZATa0RJWlFBMl9CVTA3M1ZAEVEEzd1k0OENjQlB6U2t2SjBOaVp3",
        },
      },
    },
    [
      "ETag",
      '"a85060aa3c3882b75b8a87cd86a2a307cb369c3c"',
      "Content-Type",
      "application/json",
      "Vary",
      "Origin",
      "Vary",
      "Accept-Encoding",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
      "x-fb-rlafr",
      "0",
      "Access-Control-Allow-Origin",
      "*",
      "facebook-api-version",
      "v11.0",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "Pragma",
      "no-cache",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "x-fb-request-id",
      "ASL73futJlMs5jSiuuREgyc",
      "x-fb-trace-id",
      "Gn9n2aviI8j",
      "x-fb-rev",
      "1004423793",
      "X-FB-Debug",
      "R+x+uiad9KavnAcnygECvdyGb+wvv7uDUChPZCRw3OfPdESOrphtRAkHeIv4qaLoFz7MsEdBtWxn7c8zl/OJUw==",
      "Date",
      "Tue, 21 Sep 2021 00:09:00 GMT",
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
  .delete("/v11.0/23848581114090582", {})
  .query({
    id: "23848581114090582",
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
    '{"542676646349772":[{"type":"custom_audience","call_count":8,"total_cputime":1,"total_time":2,"estimated_time_to_regain_access":0}]}',
    "x-fb-rlafr",
    "0",
    "Access-Control-Allow-Origin",
    "*",
    "facebook-api-version",
    "v11.0",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "Pragma",
    "no-cache",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "x-fb-request-id",
    "AOl_tSp3dQAe2m0YRlJwn-A",
    "x-fb-trace-id",
    "CAA2P7KoG+c",
    "x-fb-rev",
    "1004423793",
    "X-FB-Debug",
    "52qqIYDnLu9wPFoEIh9BGTetUY4UX3+1kKTn+9yKoiWrNvKlCwdXXMUYE9hRoRatvfFcvP+8MWndnIWrbF0llw==",
    "Date",
    "Tue, 21 Sep 2021 00:09:02 GMT",
    "Alt-Svc",
    'h3=":443"; ma=3600, h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
    "Connection",
    "close",
    "Content-Length",
    "16",
  ]);
