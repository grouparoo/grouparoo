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
        currentTime: 1639178518773,
      },
      requesterInformation: {
        id: "29343ab5339520c8b33af1f97c6edc4cad5fd53b-f0c5c62a-8cfb-4c3d-b28a-db8a9fb51e67",
        fingerprint: "29343ab5339520c8b33af1f97c6edc4cad5fd53b",
        messageId: "f0c5c62a-8cfb-4c3d-b28a-db8a9fb51e67",
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
      "sessionID=29343ab5339520c8b33af1f97c6edc4cad5fd53b;path=/;expires=Sat, 11 Dec 2021 00:21:58 GMT;",
      "content-length",
      "748",
      "Date",
      "Fri, 10 Dec 2021 23:21:58 GMT",
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
        id: "req_123",
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
        requestDuration: 4,
        currentTime: 1639178518787,
      },
      requesterInformation: {
        id: "ead237a77875e3279ee7222a7040064ca010865b-bdc56563-69c0-41fd-bbc1-33f6e534dcf5",
        fingerprint: "ead237a77875e3279ee7222a7040064ca010865b",
        messageId: "bdc56563-69c0-41fd-bbc1-33f6e534dcf5",
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
      "sessionID=ead237a77875e3279ee7222a7040064ca010865b;path=/;expires=Sat, 11 Dec 2021 00:21:58 GMT;",
      "content-length",
      "1290",
      "Date",
      "Fri, 10 Dec 2021 23:21:58 GMT",
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
        id: "req_123",
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
        requestDuration: 2,
        currentTime: 1639178518795,
      },
      requesterInformation: {
        id: "b93513c8b7348a62bbc3a68433fd289e5c0004c6-4485b9e0-1490-484f-a4c8-5a60a5bd9413",
        fingerprint: "b93513c8b7348a62bbc3a68433fd289e5c0004c6",
        messageId: "4485b9e0-1490-484f-a4c8-5a60a5bd9413",
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
      "sessionID=b93513c8b7348a62bbc3a68433fd289e5c0004c6;path=/;expires=Sat, 11 Dec 2021 00:21:58 GMT;",
      "content-length",
      "1017",
      "Date",
      "Fri, 10 Dec 2021 23:21:58 GMT",
      "Connection",
      "close",
    ]
  );
