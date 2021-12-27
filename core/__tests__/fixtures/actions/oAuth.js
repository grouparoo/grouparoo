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
        {
          name: "google",
          description: "Sign in with Google",
          icon: "http://localhost:8080/images/auth-providers/google.png",
          authTypes: ["user"],
        },
      ],
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 0,
        currentTime: 1639434850045,
      },
      requesterInformation: {
        id: "b7d63ce7a0a045805f84b5fbdbaa557be73eeccb-5221fb17-4af5-4265-ba98-f303d6fd78c6",
        fingerprint: "b7d63ce7a0a045805f84b5fbdbaa557be73eeccb",
        messageId: "5221fb17-4af5-4265-ba98-f303d6fd78c6",
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
      "sessionID=b7d63ce7a0a045805f84b5fbdbaa557be73eeccb;path=/;expires=Mon, 13 Dec 2021 23:34:10 GMT;",
      "content-length",
      "945",
      "Date",
      "Mon, 13 Dec 2021 22:34:10 GMT",
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
        requestDuration: 5,
        currentTime: 1639434850059,
      },
      requesterInformation: {
        id: "479b878c2e692d7159c92c4caeacd750d9c98d84-6136a6b8-b55e-43ea-ac8c-7f051789d7d3",
        fingerprint: "479b878c2e692d7159c92c4caeacd750d9c98d84",
        messageId: "6136a6b8-b55e-43ea-ac8c-7f051789d7d3",
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
      "sessionID=479b878c2e692d7159c92c4caeacd750d9c98d84;path=/;expires=Mon, 13 Dec 2021 23:34:10 GMT;",
      "content-length",
      "829",
      "Date",
      "Mon, 13 Dec 2021 22:34:10 GMT",
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
        id: "req_306c0063-91de-4e42-813b-5b116c93f06b",
        type: "user",
        provider: "github",
        requestId: "req_123",
        telemetryCustomerId: "tcs_abc",
        callbackUrl: /http:\/\/localhost:\d+\/oauth\/callback/,
        token: null,
        identities: [],
        confirmed: false,
      },
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 4,
        currentTime: 1639434850068,
      },
      requesterInformation: {
        id: "3dc91b78dc12e16f50234a766cdca7483d3b4030-521f5e0a-a997-430b-bd6a-8496cf425832",
        fingerprint: "3dc91b78dc12e16f50234a766cdca7483d3b4030",
        messageId: "521f5e0a-a997-430b-bd6a-8496cf425832",
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
      "sessionID=3dc91b78dc12e16f50234a766cdca7483d3b4030;path=/;expires=Mon, 13 Dec 2021 23:34:10 GMT;",
      "content-length",
      "904",
      "Date",
      "Mon, 13 Dec 2021 22:34:10 GMT",
      "Connection",
      "close",
    ]
  );
