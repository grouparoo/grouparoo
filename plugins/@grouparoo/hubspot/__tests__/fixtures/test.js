const nock = require("nock");

nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .get("/integrations/v1/me", {})
  .query({ hapikey: "a31ef454-1835-4b88-8d3a-eefc0b688ded" })
  .once()
  .reply(
    200,
    {
      portalId: 7974676,
      timeZone: "US/Eastern",
      accountType: "DEVELOPER_TEST",
      currency: "USD",
      utcOffset: "-05:00",
      utcOffsetMilliseconds: -18000000,
    },
    [
      "Date",
      "Tue, 15 Feb 2022 21:22:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "147",
      "Connection",
      "close",
      "CF-Ray",
      "6de197c7df018c8a-EWR",
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
      "7ae118b9-b1b7-4c81-a711-1e2b1467b47f",
      "X-HubSpot-RateLimit-Daily",
      "250000",
      "X-HubSpot-RateLimit-Daily-Remaining",
      "249980",
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
      "2B3C7ED589A16FF02352EA953E664EB6B83E7A297A000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=uLv7%2B6Jhja0f%2FFVRR81tFkCQK5A5ri5FJUV5fm%2B7FJgAv23KuFIfz60eEhEFUiBqMZ%2FK3GD%2FENpkgwm%2Fd8F1GTa83GUx0oU4SwLHOP7mlJ3JDOHbtzndr4dHiH0DdVCe"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
nock("https://auth.grouparoo.com:443", { encodedQueryParams: true })
  .post("/api/v1/oauth/hubspot/client/refresh", {
    refreshToken: "faux-refresh-token",
  })
  .once()
  .reply(
    200,
    {
      token:
        "CMek_vrvLxIOAAEAUAAA4SIAAAD8BwEYlN7mAyCCjLoGKMbZKDIUfwogxLSwG9byOFcFnDyh1WSfhZI6MAAAAEEAAAAAAAAAAAAAAAAAhgAAAAAAAAAAACAADgA-AOAxAAAAAABA__8fABDwA0IURpw-Q8bL4-3bnr8SBHq0fFpb0Z9KA25hMVIAWgA",
      expirationSeconds: 1800,
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 420,
        currentTime: 1644960160487,
      },
      requesterInformation: {
        id: "6648a298f211b0865bb8e3458592f893f3dc18a3-795774ad-60f5-4e91-a2ff-2e13381f6b28",
        fingerprint: "6648a298f211b0865bb8e3458592f893f3dc18a3",
        messageId: "795774ad-60f5-4e91-a2ff-2e13381f6b28",
        remoteIP: "127.0.0.1",
        receivedParams: {
          refreshToken: "faux-refresh-token",
          action: "oAuth:client:refresh",
          apiVersion: "1",
          provider: "hubspot",
        },
      },
    },
    [
      "strict-transport-security",
      "max-age=31536000; includeSubDomains",
      "access-control-allow-headers",
      "Content-Type",
      "access-control-allow-methods",
      "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS, TRACE",
      "access-control-allow-origin",
      "*",
      "x-powered-by",
      "@grouparoo-inc/telemetry",
      "content-type",
      "application/json; charset=utf-8",
      "set-cookie",
      "sessionID=6648a298f211b0865bb8e3458592f893f3dc18a3;path=/;expires=Tue, 15 Feb 2022 22:22:40 GMT;",
      "content-length",
      "855",
      "Date",
      "Tue, 15 Feb 2022 21:22:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://auth.grouparoo.com:443", { encodedQueryParams: true })
  .post("/api/v1/oauth/hubspot/client/refresh", {
    refreshToken: "faux-refresh-token",
  })
  .once()
  .reply(
    200,
    {
      token:
        "CLWl_vrvLxIOAAEAUAAA4SIAAAD8BwEYlN7mAyCCjLoGKMbZKDIUJdsyzCq11fDw3HLdePsfItuVAPs6MAAAAEEAAAAAAAAAAAAAAAAAhgAAAAAAAAAAACAADgA-AOAxAAAAAABA__8fABDwA0IUnZb2kPkA8gwFtg9-pYlbCUHa7t9KA25hMVIAWgA",
      expirationSeconds: 1800,
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 101,
        currentTime: 1644960160596,
      },
      requesterInformation: {
        id: "c2537c2b3a7f713235bb3747579b3fca8a9d3087-e494e733-2d01-4a94-bf1a-5213c7b6232d",
        fingerprint: "c2537c2b3a7f713235bb3747579b3fca8a9d3087",
        messageId: "e494e733-2d01-4a94-bf1a-5213c7b6232d",
        remoteIP: "127.0.0.1",
        receivedParams: {
          refreshToken: "faux-refresh-token",
          action: "oAuth:client:refresh",
          apiVersion: "1",
          provider: "hubspot",
        },
      },
    },
    [
      "strict-transport-security",
      "max-age=31536000; includeSubDomains",
      "access-control-allow-headers",
      "Content-Type",
      "access-control-allow-methods",
      "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS, TRACE",
      "access-control-allow-origin",
      "*",
      "x-powered-by",
      "@grouparoo-inc/telemetry",
      "content-type",
      "application/json; charset=utf-8",
      "set-cookie",
      "sessionID=c2537c2b3a7f713235bb3747579b3fca8a9d3087;path=/;expires=Tue, 15 Feb 2022 22:22:40 GMT;",
      "content-length",
      "855",
      "Date",
      "Tue, 15 Feb 2022 21:22:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://auth.grouparoo.com:443", { encodedQueryParams: true })
  .post("/api/v1/oauth/hubspot/client/refresh", {
    refreshToken: "faux-refresh-token",
  })
  .once()
  .reply(
    200,
    {
      token:
        "CMGm_vrvLxIOAAEAUAAA4SIAAAD8BwEYlN7mAyCCjLoGKMbZKDIUuO8V4Vq75_KTVuynWOjpBUk9tTA6MAAAAEEAAAAAAAAAAAAAAAAAhgAAAAAAAAAAACAADgA-AOAxAAAAAABA__8fABDwA0IUmOwFLBXbDwPQuX3KQDEycPGxdX1KA25hMVIAWgA",
      expirationSeconds: 1800,
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 140,
        currentTime: 1644960160740,
      },
      requesterInformation: {
        id: "1aa842a326d935f90fb772074714c022b7edb2bc-c4edd304-7172-4bec-a551-22382b957c50",
        fingerprint: "1aa842a326d935f90fb772074714c022b7edb2bc",
        messageId: "c4edd304-7172-4bec-a551-22382b957c50",
        remoteIP: "127.0.0.1",
        receivedParams: {
          refreshToken: "faux-refresh-token",
          action: "oAuth:client:refresh",
          apiVersion: "1",
          provider: "hubspot",
        },
      },
    },
    [
      "strict-transport-security",
      "max-age=31536000; includeSubDomains",
      "access-control-allow-headers",
      "Content-Type",
      "access-control-allow-methods",
      "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS, TRACE",
      "access-control-allow-origin",
      "*",
      "x-powered-by",
      "@grouparoo-inc/telemetry",
      "content-type",
      "application/json; charset=utf-8",
      "set-cookie",
      "sessionID=1aa842a326d935f90fb772074714c022b7edb2bc;path=/;expires=Tue, 15 Feb 2022 22:22:40 GMT;",
      "content-length",
      "855",
      "Date",
      "Tue, 15 Feb 2022 21:22:40 GMT",
      "Connection",
      "close",
    ]
  );
nock("https://api.hubapi.com:443", { encodedQueryParams: true })
  .get("/integrations/v1/me", {})
  .query({})
  .once()
  .reply(
    200,
    {
      portalId: 7974676,
      timeZone: "US/Eastern",
      accountType: "DEVELOPER_TEST",
      currency: "USD",
      utcOffset: "-05:00",
      utcOffsetMilliseconds: -18000000,
    },
    [
      "Date",
      "Tue, 15 Feb 2022 21:22:40 GMT",
      "Content-Type",
      "application/json;charset=utf-8",
      "Content-Length",
      "147",
      "Connection",
      "close",
      "CF-Ray",
      "6de197cd19258c71-EWR",
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
      "5e2214f5-b62e-438e-9449-adc34d73a1b2",
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
      "2BA7F503A61145062BBBA7C24F5C27B793EC79229E000000000000000000",
      "Report-To",
      '{"endpoints":[{"url":"https:\\/\\/a.nel.cloudflare.com\\/report\\/v3?s=mY5syKS4TbJtpSmEW9wHPYh2jRaLIp%2FTrNCyzaJkVeUFjXkXttGn16B%2F1tRBJ%2BxAemSgQwVI7mvWZJIDdpKic554jbdl8uCGlyNoQB5murYWDEPdWp1O46ge7JgOi3Uz"}],"group":"cf-nel","max_age":604800}',
      "NEL",
      '{"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}',
      "Server",
      "cloudflare",
      "alt-svc",
      'h3=":443"; ma=86400, h3-29=":443"; ma=86400',
    ]
  );
