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
        requestDuration: 3,
        currentTime: 1639181545999,
      },
      requesterInformation: {
        id: "91657c61ed2440977a6ca17c9045a8cf64c80307-29f3647a-1cc4-4392-9a78-a3d120227eee",
        fingerprint: "91657c61ed2440977a6ca17c9045a8cf64c80307",
        messageId: "29f3647a-1cc4-4392-9a78-a3d120227eee",
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
      "sessionID=91657c61ed2440977a6ca17c9045a8cf64c80307;path=/;expires=Sat, 11 Dec 2021 01:12:25 GMT;",
      "content-length",
      "748",
      "Date",
      "Sat, 11 Dec 2021 00:12:26 GMT",
      "Connection",
      "close",
    ]
  );
nock("http://localhost:8080", { encodedQueryParams: true })
  .post("/api/v1/oauth/github/client/start", {
    type: "user",
    requestId: "req_123",
    customerId: "tcs_abc",
    callbackUrl: /http:\/\/localhost:\d+\/oauth\/callback/,
  })
  .once()
  .reply(
    200,
    {
      location:
        "https://github.com/login/oauth/authorize?client_id=57b0d28f587fed66dead&scope=user%20user:email&state=req_123",
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 10,
        currentTime: 1639181546019,
      },
      requesterInformation: {
        id: "3ef771da68da87f40cbc05084c70dea2ce580338-8fbe0f64-c57e-46aa-b196-9a26c754133f",
        fingerprint: "3ef771da68da87f40cbc05084c70dea2ce580338",
        messageId: "8fbe0f64-c57e-46aa-b196-9a26c754133f",
        remoteIP: "127.0.0.1",
        receivedParams: {
          type: "user",
          requestId: "req_123",
          customerId: "tcs_abc",
          callbackUrl: /http:\/\/localhost:\d+\/oauth\/callback/,
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
      "sessionID=3ef771da68da87f40cbc05084c70dea2ce580338;path=/;expires=Sat, 11 Dec 2021 01:12:26 GMT;",
      "content-length",
      "830",
      "Date",
      "Sat, 11 Dec 2021 00:12:26 GMT",
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
        id: "req_644f7daf-9fe4-4b7c-b86a-f78ea9f8dea5",
        type: "user",
        provider: "github",
        requestId: "req_123",
        telemetryCustomerId: "tcs_abc",
        callbackUrl: /http:\/\/localhost:\d+\/oauth\/callback/,
        identities: [],
        confirmed: false,
      },
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 5,
        currentTime: 1639181546029,
      },
      requesterInformation: {
        id: "681253402e44a1133ad0a99b22d868f53e0e622b-0f90c676-c64c-4a6f-b2fe-a5dcbca0e333",
        fingerprint: "681253402e44a1133ad0a99b22d868f53e0e622b",
        messageId: "0f90c676-c64c-4a6f-b2fe-a5dcbca0e333",
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
      "sessionID=681253402e44a1133ad0a99b22d868f53e0e622b;path=/;expires=Sat, 11 Dec 2021 01:12:26 GMT;",
      "content-length",
      "885",
      "Date",
      "Sat, 11 Dec 2021 00:12:26 GMT",
      "Connection",
      "close",
    ]
  );
