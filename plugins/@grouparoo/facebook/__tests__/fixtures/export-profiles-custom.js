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
        { id: "23846440375100582", name: "(test) Group 3" },
        { id: "23846440374670582", name: "(test) Group 2" },
        { id: "23846440374610582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmVLQ19tSVhIN2RvNnpqTTFzNm4tN3hJQVdTNU5rQTZATd1pjdTlOV0tPZAUVLcmtkbTNlTWZA4OEgxcUJQd0ZAyOHU5ZA0VkSnpaQVJUekFGRHVDcmRVbGl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"132742bf28bd767c54cf87e582c8e22fa37d04d7"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Afgl1Wg5NKY-sz7lxcctjIS",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "G4XiUQggrtJ",
      "x-fb-rev",
      "1003121270",
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
      "400wk/P1QKUGPMfk1gN8cpmM8Hl6Cb4TVDKoj9UeiVw5bjlXwCw4JJXRcOUPt/yEHyN/jvTRXVScxk5+F0qM8A==",
      "Date",
      "Thu, 17 Dec 2020 23:37:16 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440374610582", {})
  .query({
    id: "23846440374610582",
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
    "AGNoFnnsiXp2dPGrKys02s9",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "DTsw8hIcErK",
    "x-fb-rev",
    "1003121270",
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
    "rMbYmJgQ04dnHma5X3iwroHBpgz9e/BQVDHEFRBj22VKEiX9L+PCsgKoQHjmMPny5xCh9nslUPc3Pr6s5v+W3w==",
    "Date",
    "Thu, 17 Dec 2020 23:37:17 GMT",
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
        { id: "23846440375100582", name: "(test) Group 3" },
        { id: "23846440374670582", name: "(test) Group 2" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmVLQ19tSVhIN2RvNnpqTTFzNm4tN3hJQVdTNU5rQTZATd1pjdTlOV0tPZAUVLcmtkbTNlTWZA4OEgxcUJQd0ZAyOHU5ZA0VkSnpaQVJUekFGRHVDcmRVbGl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"3714e9104a737f99e9906c5b9f65a8040c2c736f"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A2nrPjzcFUdHvBwgmeDqafh",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BdWXtqNrrAV",
      "x-fb-rev",
      "1003121270",
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
      "hHfIc+It1G9/08Z42hUC+X+SIJQnFirYa4G0g2D/HLXPzNhjavpA7lXHFe1eLdqKgvb7iGtgwPK9okJ64IHD3w==",
      "Date",
      "Thu, 17 Dec 2020 23:37:17 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440374670582", {})
  .query({
    id: "23846440374670582",
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
    "AZPV4ugNoU5cVk4k-jEwM7d",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "CCPOUCSblIZ",
    "x-fb-rev",
    "1003121270",
    "Cache-Control",
    "private, no-cache, no-store, must-revalidate",
    "Pragma",
    "no-cache",
    "x-business-use-case-usage",
    '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
    "Access-Control-Allow-Origin",
    "*",
    "X-FB-Debug",
    "MfuHeGtuSXqEPAY1jVbnwhiSxcOfmkWfD/C04kQAmIYn2goPQ+DwAO0F6OD/f/aresKKdagNOdlqbn0/YXHEQg==",
    "Date",
    "Thu, 17 Dec 2020 23:37:18 GMT",
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
        { id: "23846440375100582", name: "(test) Group 3" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUmVLQ19tSVhIN2RvNnpqTTFzNm4tN3hJQVdTNU5rQTZATd1pjdTlOV0tPZAUVLcmtkbTNlTWZA4OEgxcUJQd0ZAyOHU5ZA0VkSnpaQVJUekFGRHVDcmRVbGl3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"0b882ff155d450a110cb5482b0e20048cd08984a"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AOkr1zZSObG3JcQysss3PD-",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FZR0FX8uYVp",
      "x-fb-rev",
      "1003121270",
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
      "kTre2ZQ36KhW6ogUtA1D5+26SZUSS7IIr3CrAb5GNfVOH2Zpsc1wgwbXcz2SJSgdfNaSzH8oGQuAf3B19eSvNA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:18 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440375100582", {})
  .query({
    id: "23846440375100582",
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
    "AiohJt9gTZHUvVdGQstQf1O",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "A82NON3DoDu",
    "x-fb-rev",
    "1003121270",
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
    "tkcgiwCceHo1hoReXZdlPe57iZxPuz8Xd+jtuIqxOcYNpFoaewyoqBLn+q4bsTdvgoSJYYJtZ9lDxDaLMMMd7w==",
    "Date",
    "Thu, 17 Dec 2020 23:37:20 GMT",
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
      "A4nT-G_qgODJSgr9K6B43gF",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ED6r3c8Amw2",
      "x-fb-rev",
      "1003121270",
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
      "gNr7Ar/g63xHluDAH6pcbJnenz445HR494pRZDnKCUiIPQu7c6ZamWcsLEORVD4fORARahgLFMARdVIIXGiPLg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:20 GMT",
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
      "A7tMTKmuVW6EP8ZdYGvDwIK",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FcpWpH2puhw",
      "x-fb-rev",
      "1003121270",
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
      "rJj8EOPe443QPSCCmMvHjRxuQvTagQRPeBnOoE4OQkHIXU72cLPIoyi6zOUmXIQhSLzH9FM+maLBi1putgAGZA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:20 GMT",
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
      "Ay72BtI10EJhfDMFLxR45At",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "A0OvAslay4Z",
      "x-fb-rev",
      "1003121270",
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
      "Y0i/fPJyW1OvepduECl9fS1e9wLzF0cXMOxbmhm72yYuHddczIRziw5zrf8FM86FkDQ3pzYu7LG8ddT5wzzKRg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:20 GMT",
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
      "AQ9Rb_wkldwBvLCh7d6h9gZ",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "B83d4k5YqLx",
      "x-fb-rev",
      "1003121270",
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
      "aLSm+zXtZ9fDPF6WGsQ8VGDi2zijp+xYOD4lAvkPF1QPzOzokj5UDa3yhmsaT4BBxjbN/43MQ2yg8cun06jXYA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:20 GMT",
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
  .reply(200, { id: "23846440602800582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "AeHqEONlvGIIy1jntHUDHx3",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GexiXqNvsHu",
    "x-fb-rev",
    "1003121270",
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
    "1oDZOLA4opzPaxun2yW441wdmW2p8mRHmthWGii9ZxBnEbsQIYt2fbiiCFtgctxPvG4A04Doq7L1n7per7VfPw==",
    "Date",
    "Thu, 17 Dec 2020 23:37:21 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
    payload: {
      schema: ["EMAIL", "FN"],
      data: [
        [
          "2e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7",
          "f3fe5a51a2be8c6dc715028858fcba82ee021be7687e4f95b45086b8ffb1a23f",
        ],
      ],
    },
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4042233637407993511",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":9}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A4GVG7jGC8CEGpgLBa94NL8",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EoV1d2hZauz",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "ZYKNlrOT6MmhkrskQMrDMdoTK0pVQfr1fNehUbHLdWTebGMHuvzekaFoue2fYt03Q6+cdHye3ey+rfjkHa0RSg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:21 GMT",
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
        { id: "23846440602800582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnc2NXdiOUxYc05EOEpIaE9YZA1dPb3pwOHBzdEJZATW9CU0haNVpIVU4tOEgwOGFfLVkwMkdKcHBlWkRZALXFXdVh5bEo5VENxb2dPbkdkc1c4TkZAJcDJR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"d6c4eedf4b73c1630768f9fb5e169a6cbeb1100a"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AVu-oLRNxzEGTeyp8LhZ_QO",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ApeckVN9msr",
      "x-fb-rev",
      "1003121270",
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
      "8TFYF1FVuPfKdHyMkl4hG8CgEgY66AeInRJMljSLTgt2/OmnU3Z9j+awqyzMwIrMGNA5kdLk5XpwG6T7LWQItA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:21 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846440602800582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846440602800582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"f53cb0497392d55b042b5e15b26f1935aca4cb97"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A1KE2yspwUUkqAVPeobZKrc",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EdIS/taXM3W",
      "x-fb-rev",
      "1003121270",
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
      "NPiG1V5zUwTY/rF0ih87hc1KIovqezF8dYagNd+nTBxMeE5ge+PQsBMXAX4+GAYSGg3WFc1WDIQkmGNvAtIGBg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:21 GMT",
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
        { id: "23846440602800582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnc2NXdiOUxYc05EOEpIaE9YZA1dPb3pwOHBzdEJZATW9CU0haNVpIVU4tOEgwOGFfLVkwMkdKcHBlWkRZALXFXdVh5bEo5VENxb2dPbkdkc1c4TkZAJcDJR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"d6c4eedf4b73c1630768f9fb5e169a6cbeb1100a"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AFkcvXudBP0xvwJMx9WCEHF",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EbDk4uGvKvj",
      "x-fb-rev",
      "1003121270",
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
      "W5yj/e/Y8wdX9kCouwai7ftlJsilk3m3bZ+JEkY0ffkiDJ3JeYhmBjmT1S/gTTN0I8qTEFLwrEAuWZAqywb8bg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:22 GMT",
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
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnc2NXdiOUxYc05EOEpIaE9YZA1dPb3pwOHBzdEJZATW9CU0haNVpIVU4tOEgwOGFfLVkwMkdKcHBlWkRZALXFXdVh5bEo5VENxb2dPbkdkc1c4TkZAJcDJR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c1bdf538682f8d9f882f14ac52d638eb645cdf73"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Akv9BGmvGb0RwwvFVdGJmS4",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "C9phACxmWVD",
      "x-fb-rev",
      "1003121270",
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
      "xzVmKyJ7ChKi/zto+Jd/dcqgme7sex8NvEORbq64eygShr+ntR3vKwkF41FYCBeocl94uKHZ9TnoIQas1V1njg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:22 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":15.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AY48JvmrCix-O-pMYUym8Er",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "C6YRhnfvqr3",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "KG6toYRsCJVnYB1nT85ZNxEtoW05NpAZ0NrOXA6bHujVJ2v+oXBGHXiP1k8/sShnTg9f1WBJVkY3XoWB3ksZKA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:22 GMT",
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
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnc2NXdiOUxYc05EOEpIaE9YZA1dPb3pwOHBzdEJZATW9CU0haNVpIVU4tOEgwOGFfLVkwMkdKcHBlWkRZALXFXdVh5bEo5VENxb2dPbkdkc1c4TkZAJcDJR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c1bdf538682f8d9f882f14ac52d638eb645cdf73"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Av_WjOqYzA6hescqNajJtk4",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GwLGyly16sz",
      "x-fb-rev",
      "1003121270",
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
      "XECT8ccF6dsLBJ78HQu4Yhm9Hm3eZU2vrMJHqvoaeThwVU0AtjlrTj8V43ZB76h+F9rh5Ln3Y88mdYmmedODPg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:22 GMT",
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
  .reply(200, { id: "23846440602950582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "Aihr8z7yCro8uY6kpH4ipTC",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GCvbjd2i8xc",
    "x-fb-rev",
    "1003121270",
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
    "G9xLtkM3b8qRZe/poy2bzyhblct3Wu4UP4Ptnz7/6CbClyYl8N/1BYeDJyNwuQqoWN203Y1vByK+3MNr+ltfEA==",
    "Date",
    "Thu, 17 Dec 2020 23:37:23 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602950582/users", {
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
    id: "23846440602950582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602950582",
      session_id: "4564521828325725226",
      num_received: 2,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":23.33}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A5oqRj3sOsr5hczdaxk92hy",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DR6fnMAJuPS",
      "x-fb-rev",
      "1003121270",
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
      "C4ArUsbshZIHtaQ6kBDQ8Z301kotUj3SAkRaURNZhbSTa7m6StvYbKWdna+VehtOVvAH9U4Isr/XIY95ZXFMjQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:23 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2" },
        { id: "23846440602800582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"5ca5877c9d48c6ee7e6d169f5cb944923a3a972e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AnMDbifK_hJtPIvbEvC_vYm",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DSopRYShvno",
      "x-fb-rev",
      "1003121270",
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
      "H9c2wSJAxHNuKvH6z0cqu2BRqWofMqExgcx3TRNesAo4gDe8LoK1A2MtZBev220p+dIsP/w/rSXI7hN9cxx1jw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:23 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846440602800582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846440602800582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"f53cb0497392d55b042b5e15b26f1935aca4cb97"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A94OpLjWawtSaWw6G5olfzz",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HGIy3o9fwu3",
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":3,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "VzXkMJjghpOL0QSLqrZqWJCUcJmzQvn9lH1/C8SNc/l8d2D8zGq8XNdn0q1IQgZeq36szDdL8KKwj8A8zTGAhA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:23 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846440602950582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846440602950582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"e53802e2294cd9c0c578e28aee8ac770f42307f8"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A6EvwqUhJRsUCuKlgQvAuBi",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GiF0aHLmCRE",
      "x-fb-rev",
      "1003121270",
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
      "mOSRBKnav0iYnhAFyW4qlo7kg62duNjTwYR9r9qaowUDbDQenS0UG/Ee1kF/zMB9LnD9AgPqqEkaImFEIHNXpg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:24 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c4a972ba54fdcbf1cd8420b8101a43ffd7639142"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Au7jlgRWyo2kfyDh4PiJYZs",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EGaH10s0p7e",
      "x-fb-rev",
      "1003121270",
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
      "lztGwO6hIcnrPDRvfrXB69Mi/m7+fBxKrXAPXJaC6wuD6Jnw52+XKedog1xTrRc+stP9NZTTRh4p+fx1Mj1HFg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:24 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440602800582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846440602800582",
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
        fbtrace_id: "AqLS5eNyBcM1AL52q67l0Md",
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
      "AqLS5eNyBcM1AL52q67l0Md",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BS4Fyur8vPd",
      "x-fb-rev",
      "1003121270",
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
      "4Flwvss/retmuHrSazicA+feiOnwjBx31ZBaiOGPd+udZTI+YYoELF/GrZq6LSu+t+ohzQa7mke/oZQI9nZgaA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:24 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c4a972ba54fdcbf1cd8420b8101a43ffd7639142"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AI1tqsFz0DcMada5TuoxNL3",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CW/kBN127JH",
      "x-fb-rev",
      "1003121270",
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
      "hMs1kEKqsCnM3VVZN53MJD0TdXPBaU3A5W2emnUn2X8cWX/dh6V4+vRoGFA44YuVtxjji6997dBBgOrzsUcmxQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:25 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440602950582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846440602950582",
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
        fbtrace_id: "ATc-3Ba_tCVZSkiAjfGvYOs",
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
      "ATc-3Ba_tCVZSkiAjfGvYOs",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "E1kDtJGVgeO",
      "x-fb-rev",
      "1003121270",
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
      "IEovPsLsQdpX5imHEAg/oTRrdr3EHhiCGPld/Kt6qyiUWvj67C1FlgZOWuBjL4+92+BxMXhZk1y4E0u5fEkRtQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:25 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c4a972ba54fdcbf1cd8420b8101a43ffd7639142"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AbiZey5YRmko23qIsL3c1xS",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FhFsy+QJFZC",
      "x-fb-rev",
      "1003121270",
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
      "1WZ4s1SEJMp803n9LVAIs2u9GpwrUcw5mKJgn3EKdKJ/D26j7d9Ch4714mXbb8vS11N8At9Ww1Cf0lJQqjW6vw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:25 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
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
      "A4lnQDl3uhQUCKd7M9A2Qn-",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HAq6EgyaRWq",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "GWv3HQvuvB2Laizvzj1t5CiC875hpQTMkAeKZrLKUO1b8/f4hM55UcyQMLoU5sbollBhbCL0+4ZedS2RMllcXg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:25 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c4a972ba54fdcbf1cd8420b8101a43ffd7639142"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AGly9msdM1K0XR5ll8jnRxr",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "A08EolwslYQ",
      "x-fb-rev",
      "1003121270",
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
      "L+3IPo+VyMEF8xWbLvqheKexnCOpBSzRlxFNtjmhcbZSY3Plg7TRqdQxGC+FCEvg+tCU3hAcLb2Mg5PAOawXZQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:25 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602950582/users", {
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
    id: "23846440602950582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602950582",
      session_id: "4564521828325725226",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":40.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Aqinb5cViRs9hed2Y84OpBz",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DH+VBPixx0R",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "dEMgtAENm5qg8Vd7oxuNZ+Yhijl9t5Ox5gp8wHuE6fIPeAK2ivdacbTYfRDGExtQzq5yGerZpxLPeayz4xsn8A==",
      "Date",
      "Thu, 17 Dec 2020 23:37:26 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846440602800582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846440602800582",
      name: "(test) Group 1",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"f53cb0497392d55b042b5e15b26f1935aca4cb97"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AgXu3hjCogRX3XXOH6WFxgv",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Ez1rCKgabT1",
      "x-fb-rev",
      "1003121270",
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
      "uoEiv9CJiUrFW+Sof0T36ujKY7YVZf4CAYaw4Z6TSsGFHFpAp8fzvc93WQXicr/uRYr1qvnCDNilVjVTgFEQMw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:26 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "92",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846440602950582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846440602950582",
      name: "(test) Group 2",
      subtype: "CUSTOM",
      approximate_count: -1,
    },
    [
      "ETag",
      '"e53802e2294cd9c0c578e28aee8ac770f42307f8"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ASnTJHfAqswWLoZN3HhRCBC",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HK7jFvL22BX",
      "x-fb-rev",
      "1003121270",
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
      "bHownFtbVq1I/CqGDOCSEypGPX6sUAVVoGN3/VmEyJY0DJEJ2Prk4LpNrkKEtlFDivM1KmEPa5/SZShmP1J2ng==",
      "Date",
      "Thu, 17 Dec 2020 23:37:26 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c4a972ba54fdcbf1cd8420b8101a43ffd7639142"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ARpxTYbR5F6Yns166B12vHC",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ArMSl3rZng+",
      "x-fb-rev",
      "1003121270",
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
      "jDOZWlQbeDixoFZDajrolRoYOyGV+SzdyhCAKiogtfH/QAIwnNV+2F/8+xAVfeCb0gnao0+WmP89DSI8vAg9hQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:26 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440602950582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846440602950582",
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
        fbtrace_id: "AwOShMIg1v93mfOrdBTxKAf",
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
      "AwOShMIg1v93mfOrdBTxKAf",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FCgNovSAMt6",
      "x-fb-rev",
      "1003121270",
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
      "T9a1Ygg1+3/YzP+e+ZAdu+rQiXFDA2r1ghBUTvWyy8UYln5Cbq9Eh3RIgPQe9c/vS0fJ8YmtXNj9F6Nj3ZHqvA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:26 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c4a972ba54fdcbf1cd8420b8101a43ffd7639142"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AxM5AfA7AaUuEoTMMvA02xS",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CeY/tpa/suB",
      "x-fb-rev",
      "1003121270",
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
      "sMZj1wgG2qjl6eqB4v3PRNufZstszv527sa3iCvjIT/Hxaxgv0GDHrWFyfwgO2PVQ0+1reJr7kdsJjQEAxuivg==",
      "Date",
      "Thu, 17 Dec 2020 23:37:26 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
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
      "AvfRp7e2nQPBRLhAPMgruj1",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BhN1KBFntlb",
      "x-fb-rev",
      "1003121270",
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
      "k5xblZNob9ArvoR9nUztXX1Y5+E6BbGCt9oNSN0QJMH8ybY6mN5c9MRXBYcDisugxVJgE2PpjdbPNBaxoJmjYA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:27 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2" },
        { id: "23846440602800582", name: "(test) Group 1" },
        { id: "23846439958980582", name: "High Value" },
        { id: "23846439958910582", name: "Spanish Speakers" },
      ],
      paging: {
        cursors: {
          before:
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"5ca5877c9d48c6ee7e6d169f5cb944923a3a972e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ALbQZpCsjXULSqgxoWt9X-W",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FEZIvNn7hHO",
      "x-fb-rev",
      "1003121270",
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
      "xSy9bh2MdfRO2rHpImFBcDuWHjY0B38oYEuiAirKvaDtqIg6e4NSxHRM879xln/td27YpVv7903o77bvIIooHA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:27 GMT",
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
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUnY1dUdTbTh2aEJKUE9CT0FTUHlYT3luR19COUFMazJVYmNWMlh1OWlHOHVUSUx4aFlyTXpxVHpucHktdldDeTRHWUc0VDdYRGxzUXIydUk0LWl1R3l3",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"c4a972ba54fdcbf1cd8420b8101a43ffd7639142"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AJyej8WBijSuJ5hVebcVGge",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Cg6/SqgmvcX",
      "x-fb-rev",
      "1003121270",
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
      "xRNENSZG2Arni1yoBTqTmoYvCEi+i+mIWlWhNKhoLxyj6lSGnQgENSZDjoRh26pCk+zSxSEb+rj7wzjdy2Rgow==",
      "Date",
      "Thu, 17 Dec 2020 23:37:27 GMT",
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
  .reply(200, { id: "23846440603390582" }, [
    "Expires",
    "Sat, 01 Jan 2000 00:00:00 GMT",
    "Content-Type",
    "application/json",
    "facebook-api-version",
    "v9.0",
    "x-fb-request-id",
    "A6sq8Kbczeo7E7z9MxJOm8m",
    "Strict-Transport-Security",
    "max-age=15552000; preload",
    "x-fb-trace-id",
    "GFEq5WDeGHv",
    "x-fb-rev",
    "1003121270",
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
    "2HwhXMV5ENo9kCzvbHJBN8xVo7kotZOfzjXCbqjTuXUh2TCCT8KZhsa2CU2s3WLn58k9Jj2jrIzqsvWk02p2rg==",
    "Date",
    "Thu, 17 Dec 2020 23:37:27 GMT",
    "Connection",
    "close",
    "Content-Length",
    "26",
  ]);
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440603390582/users", {
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
    id: "23846440603390582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440603390582",
      session_id: "3244703208940661123",
      num_received: 151,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":55}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A_vGIcKOt03dKaxSF817Ftf",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DC+Oa/d804Q",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "UHZlWzPxTtFdn+OvdZWQg+wt2QwHEcN1JJDaHj9P9P61McacsANZPfTrS+pNPGltLrUNU2CWZe+h7tBXuHg+lQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:28 GMT",
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
      "AzjsHCiwqBzRaRQYbgA5zFA",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "FiR7i01ebSn",
      "x-fb-rev",
      "1003121270",
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
      "yPwjR8fJrQeGkvACwymv2+1cB3LDepIHiu/fgcf8BUJoxp5pSFi2uBlQ92DqiDszWEHdgyCkVnZFQFPHxUGWMw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:28 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .get("/v9.0/23846440603390582", {})
  .query({
    fields: "id%2Cname%2Csubtype%2Capproximate_count",
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      id: "23846440603390582",
      name: "(test) Group 3",
      subtype: "CUSTOM",
      approximate_count: 1000,
    },
    [
      "ETag",
      '"9a4ed0b720e41add4354d8d67c11f9af2b97bbd7"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ALvtACpMciMeEyT8_HwX1Lw",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Hj3AC8m+1BI",
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "aRs2qvCyLu4crsM1RKCZWYJ7mIGu9syaveG8+jpds9ZVm7q3sxN/no66sIhjtRkZUn4FuvDLm2ZMGMzoje8pHA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:28 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Ai21vdtlZLnX8OHYsyIZ2WR",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "EQXKQ+RQn1x",
      "x-fb-rev",
      "1003121270",
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
      "EW7XhyPrnHFEy6n9NRC0rmOhYZL7jQKU4coAXe14VEBCiC+u9xxI5VJdmDrVt19L8kroXwizaBLHGGNILFuv4A==",
      "Date",
      "Thu, 17 Dec 2020 23:37:28 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .delete("/v9.0/23846440602800582/users", {})
  .query({
    payload:
      "%7B%22schema%22%3A%5B%22EMAIL%22%5D%2C%22data%22%3A%5B%5B%222e5b5d0a3c2f708e9cfc1eb6396c60814862229246a84697da56931761b8e6e7%22%5D%5D%7D",
    id: "23846440602800582",
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
        fbtrace_id: "AL28fo9ThbZXe3ynWGEnWSK",
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
      "AL28fo9ThbZXe3ynWGEnWSK",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HPbkZK7gM1B",
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "no-store",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "x-business-use-case-usage",
      '{"542676646349772":[{"type":"custom_audience","call_count":4,"total_cputime":1,"total_time":1,"estimated_time_to_regain_access":0}]}',
      "Access-Control-Allow-Origin",
      "*",
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "WWW-Authenticate",
      'OAuth "Facebook Platform" "invalid_request" "Permissions error"',
      "X-FB-Debug",
      "ylRGugWq2Tt5iJOJm0aGNUep5H0HRm4xz0QVOE1ilMjvfFDmxoY292lsBMZX5HdbTW8fTzS/2pQ3HOUVy4Qt9Q==",
      "Date",
      "Thu, 17 Dec 2020 23:37:29 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ACiGuNL8eUrpPd4pZi-PubM",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AeO8Q3ZDcog",
      "x-fb-rev",
      "1003121270",
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
      "xT8wwAOrYFGfEMaF1KAfokqMqOL6cjGkCWyUKDecXciX2PKXQpez/LT+2oRUX9eZY5vFrBjhA2CPJkJN3Rm4KA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:29 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
      num_received: 1,
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
      "A4LDvbbY4z5UW9okeGOh3gu",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "DpAwKGj3hzQ",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "6R071msZ/kexaGRXiS4QA2LHlVjymY3124pWUBbcxt8mN6kjARlBNbNsCf3vCIw2e28T9/yDQqu2QsD1PqWwYw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:29 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "ApJhErlsyu65scrraMXGVRB",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Gtaq/eez1KU",
      "x-fb-rev",
      "1003121270",
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
      "ifYG114ri8ARXfZ7uTxHkza6NiZOt8NP0sBz1x2AWUEM1ElPLZlCkmRvUJvlbehkPGUmq6vSSofiKRl2/5zz0g==",
      "Date",
      "Thu, 17 Dec 2020 23:37:29 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A66QJnDzQVnflbdU1NsdDRE",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BijTwIM9U2J",
      "x-fb-rev",
      "1003121270",
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
      "7OPw4PgbQGS6wLo6e/mVgca+3uBIcNt/EVwyiG7rx6RguhjhPrcU6IHXQRF1lVBWWZbLILNy0ZJX4OdlHxWfVQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:29 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":67.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AHJTkGBMv5LAhHycZldNWSA",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BGyAiXvMvxH",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "NMHB/AMxkE/xe6SadcaQB1wnwcAEPpxnimxD7cdUv10LEpnFhF2mWKPZqLS74JebqYMK+nCgSMgV2+7PwaSCxA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:30 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AZj3r7nVOJ3yy_IKxLnFV-b",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AXJBvj8yq2i",
      "x-fb-rev",
      "1003121270",
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
      "Gzpi7tIM3HCq2Ca+RvXqYbhEt1uoXEsWXVi07t+/5KvRmjTqLEjLbgdMrSUO9v3rzOuzi9GVTnyHHugBC5i0Ig==",
      "Date",
      "Thu, 17 Dec 2020 23:37:30 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "Ahu_epimTnIa4TIPfJzll0f",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "GiUnrchuqie",
      "x-fb-rev",
      "1003121270",
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
      "QOv6fvR5HyaJn0RD1z/A0yAAPlFq5CIc/SFo8MJFNSSnBiirWZhpPEE4q0oAQthrJ3T5khzDEBApdrmTIcZZzw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:30 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4446585645685663673",
      num_received: 2,
      num_invalid_entries: 1,
      invalid_entry_samples: {
        '["e190e9b20a82820ff09d873ae4dfe092b21bd625c259d54ab8773ff022eb08e0","","e96e02d8e47f2a7c03be5117b3ed175c52aa30fb22028cf9c96f261563577605","",""]':
          "empty external ID",
      },
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":67.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AKHY9nR7HqPzz3Ssm153wpv",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "Abi0rr7GsZ2",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Vary",
      "Accept-Encoding",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "CDI5IGBH/MA6BaUDqj9On/1FZ6y1+VnNpn5kyqR/62YtYLZRg9N/jZL0N5l75qODrVEzTZDvA8OXoSqfU7zwPQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:30 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "A0KznqtztGvkJaRKvZRfNJ1",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CrSiKauH9Ky",
      "x-fb-rev",
      "1003121270",
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
      "k3zWVio8QgPF+9H3agFA3auiGDsJmLwGXCixQb5OhH0f/9TsA45RvjK9PtlR7NigE528M0+QDQgjEPljyIVoGQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:30 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
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
      "v9.0",
      "x-fb-request-id",
      "A9rRZyOSiTrC8ihN0eCq4Ag",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "HRm88Jk5Dnv",
      "x-fb-rev",
      "1003121270",
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
      "F+gk6L07Uxofx/dBm8tg9yAlqiATRNKkEgzVPQVfsHYB39xsMSTRSLkoFfrLShQSC8mwyIKPqBQqehB/dxuoHQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:31 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AN4M0jM7cr9WHvt7HJ6MlBm",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "BfL5nU0PeYM",
      "x-fb-rev",
      "1003121270",
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
      "Y2p6gpSgG2ZuftGPUIY+tibluxraQA0vbZK82IANd/l6hT5/1kPn1KvYBitQ0LhZGHQpO/i12fl/i6PhPHR1Nw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:31 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602950582/users", {
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
    id: "23846440602950582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602950582",
      session_id: "4564521828325725226",
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
      "v9.0",
      "x-fb-request-id",
      "ADPT3MOPWlUxkuCJJEpL7xl",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CbscFbL+7p9",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "9PeawUMEOtfL0TfGLQCfwdzePHhlaTybRectt7Dy/dgthZTltTmTYJXrlNL3g38bvF2FOsucP4L7boHXi9l90Q==",
      "Date",
      "Thu, 17 Dec 2020 23:37:31 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AWuUJ4UHD9f-NWOvpFa2ir2",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "CiuqPJRgrFP",
      "x-fb-rev",
      "1003121270",
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
      "h6+8DL2FzIXemka+PI1sQOO3oX+dQ2mYI47Ytet0atcw1V8aIBNc2UnC96C2Sri53Y6B+rIAdkjTTI6ArcYelQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:31 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
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
      "v9.0",
      "x-fb-request-id",
      "A6F-J736zeEIFJ0VM5_arb_",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "ADY6B0RZZOt",
      "x-fb-rev",
      "1003121270",
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
      "Q3DU8BQ93j5Uszf0fIjRZQctoiZ9uGGJEhxElufdcHe3QWZVor7a21b3ZQCXCNXHzxj4jqvTV0D7V/Ur9dFNsQ==",
      "Date",
      "Thu, 17 Dec 2020 23:37:31 GMT",
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
        { id: "23846440603390582", name: "(test) Group 3", subtype: "CUSTOM" },
        { id: "23846440602950582", name: "(test) Group 2", subtype: "CUSTOM" },
        { id: "23846440602800582", name: "(test) Group 1", subtype: "CUSTOM" },
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
            "QVFIUjhLdm40UzhUdEtENDRRZA1F5T3B4Qmd3RmM5U3d3aGRMbHJWVHJyR3N0SFhRT3haTjIzaWZAJNnU1MG1lV2F0Qm1KY2FzZAHpiNmxOc1dCUEtyOF80b3JR",
          after:
            "QVFIUjFVNFVQN3lVMm9UTU1ULXh4YUZANVFI0ZAXYwOWRSWG9NUURyM3hzRmhmenBpdHlKWFRtUE05RWdBZAEl6ZAFVuT2MxOVJYVFhCdTFaQU5NanFicWZA5VmdR",
        },
      },
    },
    [
      "ETag",
      '"fa38f7cdde16dc9cb292140c60d5ac196288382e"',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AOEVUxxdJoZaHqrQwsMst95",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "G853G4V3q46",
      "x-fb-rev",
      "1003121270",
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
      "YQszpdZ9zSszgx26UyD+vfQDs89iIjaBWEpJshimV+o9F8//NLHHIw+Y0jlxDpYK00NIv4D9ZumjaWlXm6meGA==",
      "Date",
      "Thu, 17 Dec 2020 23:37:32 GMT",
      "Transfer-Encoding",
      "chunked",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
    ]
  );
nock("https://graph.facebook.com:443", { encodedQueryParams: true })
  .post("/v9.0/23846440602800582/users", {
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
    id: "23846440602800582",
  })
  .query({
    access_token:
      "EAAKJ4ZBf45t4BAEgazqCLrZBRFZC0EgyZCpgkqhlqJ9RifPnhXky7WTeyHXA6oJhkj3zSrMqrSUnPmfiSyVEZB6RFua0xAkqwWoRA7zipl6yT5aAOijtKrzPmXUB9H7peJuLScCt9xQSiIMYYIcmIynFE5hCCugRruVZAqIJBMnigGapQTdgrAtFufPw3lA4CWgQpSlwbPzkuRZAcftFxMEQ26ndGpVlWxDcgYPzS3y7gZDZD",
  })
  .once()
  .reply(
    200,
    {
      audience_id: "23846440602800582",
      session_id: "4564521828325725226",
      num_received: 1,
      num_invalid_entries: 0,
      invalid_entry_samples: {},
    },
    [
      "x-ad-account-usage",
      '{"acc_id_util_pct":78.67}',
      "Expires",
      "Sat, 01 Jan 2000 00:00:00 GMT",
      "Content-Type",
      "application/json",
      "facebook-api-version",
      "v9.0",
      "x-fb-request-id",
      "AOZtPypYx5oU0hhj0XzWikw",
      "Strict-Transport-Security",
      "max-age=15552000; preload",
      "x-fb-trace-id",
      "AHDNQ8hezuA",
      "x-app-usage",
      '{"call_count":0,"total_cputime":0,"total_time":0}',
      "x-fb-rev",
      "1003121270",
      "Cache-Control",
      "private, no-cache, no-store, must-revalidate",
      "Pragma",
      "no-cache",
      "Access-Control-Allow-Origin",
      "*",
      "X-FB-Debug",
      "dcFh+c9v91WLEqnWGM8dc6lfzKxDw/oGJ32HFV8V3upeWlHG5YPrakRrk+C0dlOo6j3HuOaFRQaDPyNrzM7eRw==",
      "Date",
      "Thu, 17 Dec 2020 23:37:32 GMT",
      "Alt-Svc",
      'h3-29=":443"; ma=3600,h3-27=":443"; ma=3600',
      "Connection",
      "close",
      "Content-Length",
      "138",
    ]
  );
