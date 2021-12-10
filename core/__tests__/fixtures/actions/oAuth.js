const nock = require("nock");

nock("http://localhost:8080", { encodedQueryParams: true })
  .get("/api/v1/oauth/providers")
  .once()
  .reply(
    200,
    {
      providers: [
        {
          name: "github",
          description: "Sign in with GitHub",
          icon: "http://localhost:8080/images/auth-providers/github.png",
          authTypes: ["user"],
        },
      ],
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 1,
        currentTime: 1639179592365,
      },
      requesterInformation: {
        id: "55a367d2023c2b11652933e6932cdbf009890abe-cee59af3-a4e3-4031-ab98-c231aed67e73",
        fingerprint: "55a367d2023c2b11652933e6932cdbf009890abe",
        messageId: "cee59af3-a4e3-4031-ab98-c231aed67e73",
        remoteIP: "127.0.0.1",
        receivedParams: { action: "oAuth:listProviders", apiVersion: "1" },
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
      "sessionID=55a367d2023c2b11652933e6932cdbf009890abe;path=/;expires=Sat, 11 Dec 2021 00:39:52 GMT;",
      "content-length",
      "748",
      "Date",
      "Fri, 10 Dec 2021 23:39:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("http://localhost:8080", { encodedQueryParams: true })
  .post("/api/v1/oauth/github/client/start", {
    type: "user",
    requestId: "req_123",
    customerId: "tcs_abc",
    callbackUrl: "http://localhost:18081/oauth/callback",
  })
  .once()
  .reply(
    200,
    {
      location:
        "https://github.com/login/oauth/authorize?client_id=57b0d28f587fed66dead&scope=user%20user:email&state=req_123",
      oAuthRequest: {
        id: "req_802d69ac-a4ea-4561-9fe2-4dd5a1ba097e",
        type: "user",
        provider: "github",
        requestId: "req_123",
        telemetryCustomerId: "tcs_abc",
        callbackUrl: "http://localhost:18081/oauth/callback",
        identities: [],
        confirmed: false,
      },
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 3,
        currentTime: 1639179592377,
      },
      requesterInformation: {
        id: "f54730fca1a2a52e912e45bb43a6f67d947061c3-e14ce0a4-9a50-435d-a820-c7b8e73821a5",
        fingerprint: "f54730fca1a2a52e912e45bb43a6f67d947061c3",
        messageId: "e14ce0a4-9a50-435d-a820-c7b8e73821a5",
        remoteIP: "127.0.0.1",
        receivedParams: {
          type: "user",
          requestId: "req_123",
          customerId: "tcs_abc",
          callbackUrl: "http://localhost:18081/oauth/callback",
          action: "oAuth:client:start",
          apiVersion: "1",
          provider: "github",
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
      "sessionID=f54730fca1a2a52e912e45bb43a6f67d947061c3;path=/;expires=Sat, 11 Dec 2021 00:39:52 GMT;",
      "content-length",
      "1125",
      "Date",
      "Fri, 10 Dec 2021 23:39:52 GMT",
      "Connection",
      "close",
    ]
  );
nock("http://localhost:8080", { encodedQueryParams: true })
  .get("/api/v1/oauth/client/request/req_123/view")
  .query({ requestId: "req_123", customerId: "tcs_abc" })
  .once()
  .reply(
    200,
    {
      oAuthRequest: {
        id: "req_802d69ac-a4ea-4561-9fe2-4dd5a1ba097e",
        type: "user",
        provider: "github",
        requestId: "req_123",
        telemetryCustomerId: "tcs_abc",
        callbackUrl: "http://localhost:18081/oauth/callback",
        identities: [],
        confirmed: false,
      },
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 3,
        currentTime: 1639179592386,
      },
      requesterInformation: {
        id: "89de8a309f9477b9564601742ba089b55b938f39-916f4cce-d4bc-41b6-be32-dd2029667248",
        fingerprint: "89de8a309f9477b9564601742ba089b55b938f39",
        messageId: "916f4cce-d4bc-41b6-be32-dd2029667248",
        remoteIP: "127.0.0.1",
        receivedParams: {
          requestId: "req_123",
          customerId: "tcs_abc",
          action: "oAuth:client:view",
          apiVersion: "1",
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
      "sessionID=89de8a309f9477b9564601742ba089b55b938f39;path=/;expires=Sat, 11 Dec 2021 00:39:52 GMT;",
      "content-length",
      "885",
      "Date",
      "Fri, 10 Dec 2021 23:39:52 GMT",
      "Connection",
      "close",
    ]
  );
