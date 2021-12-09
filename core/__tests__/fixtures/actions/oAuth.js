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
        currentTime: 1639080808880,
      },
      requesterInformation: {
        id: "bc0791de3da10b5d7a6ae64d1ea3c1b85d23df77-7dcb4d75-a9b7-4d99-954f-3ff35f4429bf",
        fingerprint: "bc0791de3da10b5d7a6ae64d1ea3c1b85d23df77",
        messageId: "7dcb4d75-a9b7-4d99-954f-3ff35f4429bf",
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
      "sessionID=bc0791de3da10b5d7a6ae64d1ea3c1b85d23df77;path=/;expires=Thu, 09 Dec 2021 21:13:28 GMT;",
      "content-length",
      "748",
      "Date",
      "Thu, 09 Dec 2021 20:13:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("http://localhost:8080", { encodedQueryParams: true })
  .post("/api/v1/oauth/github/client/start", {
    type: "user",
    requestId: "req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f",
    customerId: "tcs_38524ddf-8b23-468c-b9f4-e16ca456d7ca",
    callbackUrl: "http://localhost:18081/oauth/callback",
  })
  .once()
  .reply(
    200,
    {
      location:
        "https://github.com/login/oauth/authorize?client_id=57b0d28f587fed66dead&scope=user%20user:email&state=req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f",
      oAuthRequest: {
        id: "req_6e043c49-fa08-450a-9f3b-513977921e96",
        type: "user",
        provider: "github",
        requestId: "req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f",
        telemetryCustomerId: "tcs_38524ddf-8b23-468c-b9f4-e16ca456d7ca",
        callbackUrl: "http://localhost:18081/oauth/callback",
        identities: [],
        confirmed: false,
      },
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 3,
        currentTime: 1639080808891,
      },
      requesterInformation: {
        id: "3024f1b528a1f3811562422da9e4809176423bb2-42959c85-ef8d-4db3-9355-8ccf31c075b3",
        fingerprint: "3024f1b528a1f3811562422da9e4809176423bb2",
        messageId: "42959c85-ef8d-4db3-9355-8ccf31c075b3",
        remoteIP: "127.0.0.1",
        receivedParams: {
          type: "user",
          requestId: "req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f",
          customerId: "tcs_38524ddf-8b23-468c-b9f4-e16ca456d7ca",
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
      "sessionID=3024f1b528a1f3811562422da9e4809176423bb2;path=/;expires=Thu, 09 Dec 2021 21:13:28 GMT;",
      "content-length",
      "1290",
      "Date",
      "Thu, 09 Dec 2021 20:13:28 GMT",
      "Connection",
      "close",
    ]
  );
nock("http://localhost:8080", { encodedQueryParams: true })
  .get(
    "/api/v1/oauth/client/request/req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f/view"
  )
  .query({
    requestId: "req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f",
    customerId: "tcs_38524ddf-8b23-468c-b9f4-e16ca456d7ca",
  })
  .once()
  .reply(
    200,
    {
      oAuthRequest: {
        id: "req_6e043c49-fa08-450a-9f3b-513977921e96",
        type: "user",
        provider: "github",
        requestId: "req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f",
        telemetryCustomerId: "tcs_38524ddf-8b23-468c-b9f4-e16ca456d7ca",
        callbackUrl: "http://localhost:18081/oauth/callback",
        identities: [],
        confirmed: false,
      },
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 2,
        currentTime: 1639080808899,
      },
      requesterInformation: {
        id: "40875b16c72fc2b84a23fd32c10b72168f82d849-25ff1d10-22e3-4fa7-b9e8-1699e28a104f",
        fingerprint: "40875b16c72fc2b84a23fd32c10b72168f82d849",
        messageId: "25ff1d10-22e3-4fa7-b9e8-1699e28a104f",
        remoteIP: "127.0.0.1",
        receivedParams: {
          requestId: "req_2d4d5b0c-fb4d-4004-8386-7e41b8ba902f",
          customerId: "tcs_38524ddf-8b23-468c-b9f4-e16ca456d7ca",
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
      "sessionID=40875b16c72fc2b84a23fd32c10b72168f82d849;path=/;expires=Thu, 09 Dec 2021 21:13:28 GMT;",
      "content-length",
      "1017",
      "Date",
      "Thu, 09 Dec 2021 20:13:28 GMT",
      "Connection",
      "close",
    ]
  );
