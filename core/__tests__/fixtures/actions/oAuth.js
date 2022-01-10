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
        {
          name: "mailchimp",
          description: "Connect to Mailchimp",
          icon: "http://localhost:8080/images/auth-providers/mailchimp.png",
          authTypes: ["app"],
        },
      ],
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 2,
        currentTime: 1641830664550,
      },
      requesterInformation: {
        id: "099da4b80b01c5007f94aee66ca2a00e25c4f81a-8dfc7128-6e95-444f-9103-3d6d74fad1dc",
        fingerprint: "099da4b80b01c5007f94aee66ca2a00e25c4f81a",
        messageId: "8dfc7128-6e95-444f-9103-3d6d74fad1dc",
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
      "sessionID=099da4b80b01c5007f94aee66ca2a00e25c4f81a;path=/;expires=Mon, 10 Jan 2022 17:04:24 GMT;",
      "content-length",
      "1148",
      "Date",
      "Mon, 10 Jan 2022 16:04:24 GMT",
      "Connection",
      "close",
    ]
  );
nock("http://localhost:8080", { encodedQueryParams: true })
  .get("/api/v1/oauth/providers")
  .query({ type: "user" })
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
        requestDuration: 3,
        currentTime: 1641830664560,
      },
      requesterInformation: {
        id: "017f6c6ccce28ee3b2f66b1b8880c0cce540f1bd-9ffe1abe-d8aa-47f2-b776-433dab6de220",
        fingerprint: "017f6c6ccce28ee3b2f66b1b8880c0cce540f1bd",
        messageId: "9ffe1abe-d8aa-47f2-b776-433dab6de220",
        remoteIP: "127.0.0.1",
        receivedParams: {
          type: "user",
          action: "oAuth:listProviders",
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
      "sessionID=017f6c6ccce28ee3b2f66b1b8880c0cce540f1bd;path=/;expires=Mon, 10 Jan 2022 17:04:24 GMT;",
      "content-length",
      "967",
      "Date",
      "Mon, 10 Jan 2022 16:04:24 GMT",
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
        "https://github.com/login/oauth/authorize?client_id=57b0d28f587fed66dead&scope=user%20user:email&state=req_123~tcs_abc",
      serverInformation: {
        serverName: "@grouparoo-inc/telemetry",
        apiVersion: "0.1.0",
        requestDuration: 6,
        currentTime: 1641830664576,
      },
      requesterInformation: {
        id: "4e19180c71949cafc859080a3c7b09afc7562fa3-eff8a28b-ea12-460d-92e3-5a7e9358844a",
        fingerprint: "4e19180c71949cafc859080a3c7b09afc7562fa3",
        messageId: "eff8a28b-ea12-460d-92e3-5a7e9358844a",
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
      "sessionID=4e19180c71949cafc859080a3c7b09afc7562fa3;path=/;expires=Mon, 10 Jan 2022 17:04:24 GMT;",
      "content-length",
      "837",
      "Date",
      "Mon, 10 Jan 2022 16:04:24 GMT",
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
        id: "req_eb25c8fa-3194-46b5-a68d-e9247cddc15a",
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
        currentTime: 1641830664588,
      },
      requesterInformation: {
        id: "2035127579032f0a79537cb05d56e0eff94d709c-3c87fcd8-bed3-41db-8377-53044dad9432",
        fingerprint: "2035127579032f0a79537cb05d56e0eff94d709c",
        messageId: "3c87fcd8-bed3-41db-8377-53044dad9432",
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
      "sessionID=2035127579032f0a79537cb05d56e0eff94d709c;path=/;expires=Mon, 10 Jan 2022 17:04:24 GMT;",
      "content-length",
      "904",
      "Date",
      "Mon, 10 Jan 2022 16:04:24 GMT",
      "Connection",
      "close",
    ]
  );
