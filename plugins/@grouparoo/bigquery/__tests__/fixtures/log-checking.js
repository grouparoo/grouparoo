const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1630444439655";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffedd34b7282300000d0bb646d1d4450e8ce10899402012a60360c8dc14a31f2ad40a777afd36bd47787f70d32c678dba6ddf5930bf00cc64cd6e76c6e571a44b733bc1d5f3d5e212a89692d6a39d090f246494da61d3185c34c33c4dd8a4e5eaf7ec5398a43a9ac7d69eb88de35d649a1d0c872a343ccf7bdbab4282cdddb4e1b1d4ce56c538d4cefc793967fbc4b05be3849030b0523bb57d6fe090e38effda2eaf6aabd5a6434340b4282e0384e1bd5a0976e83136144d622dbea1609440dafdd80a5d2784187436e3f31ec9f08ac0b336275ec2969225b2b9d854819e60f0fff1798013e54e786b7e9f9be7da9eafa0cfcd54fbbb1e2f7ff90670d6fc0cf2fb8d1fdfe19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 31 Aug 2021 21:14:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT first_name FROM test.profiles WHERE id = 1",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1630444439655",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "52",
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b",
      "91",
      "f74a9b84a4495ba9da18cdb64aa5d3d214b4bd54b6739c199238c40e5021fefb8e13602024e853eaef766ef7e44ad6399913268beb0edac3a74bc5c81101430b7cfddaacef6845d3e86cf9e7e02fc5ecb23dbf2b160b6448abd2b46a4a1869d5b51cf47cb71d17adea1ada2a3542a3913ff2a3c00bf117cca2c904651a4ab196f5158aff1ad3e8b9eb3e458f0ba58a126823f598abeaf9ddbd39769b565d0237da7d9de8628876dfcdfc5c2a4e8d54f562b7c5fc4e43bb878aca122bf82fccd997d7ce6349ab7181e41bc98172aebadad8aad082ab5ac8a26b7b5732bf277d952f3ec8365927a7992364abcdbea61538dfd29f678e016dc6d889902568e7e24792268ecc9d85e3a36b8ea0ac7bcf8cb212acdf63d7abb7a3b6026aa88601dcc75e44fda9376382c55c4c8309131e303665f18406cce3b310c29c01459db1eebd8ad6aa8e83d843ae2f26ccf726d154f871c8f39847216322caf390e671c46601793822b7ad34b094ba515a0ebd938b749525fb2cdd6d4e4fb2a46f43d0ae34cba138dbc4cb3aed0490f44e5f0f16950a93ec20579b2c494f4eb3d57932ec6e0d05e587ed356e4fd05203d271e7d9a1c179915fbb24fd4d86a71404b450f38fe788e41ef8e8729fee08a9784998a20dfec7a5716d33780bc3f264656b79528781771c909edc9a37983fb5ab7fbe1feb0815d4e6b1a1e18ec8c36358a79f4908e2cc37abcd7744ff01b4d47a46c5030000",
    ],
    [
      "ETag",
      "BpLxamaR6MDZy1Df9jrVxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 31 Aug 2021 21:14:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1630444439655"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d",
      "90",
      "51",
      "4b",
      "c3",
      "301080ffcbf9b8162c5b0716f6e05cd14119ae5bf1418664d9b566b6bd9a5c953af6dfbd54f390dc5dbecb7de4021fa63d410247537df668879b0a79eb831c5d5fb393a3a3d6210480ac2a21575551ec267ad069f7b38f56c5cb7a9215dbc54208a7dfb151905ca034589f1c24af17685583d2561aebf86d4c02e0a1f3b5dd3e5f6f1e256fe8e4f34d9165f7cb2c85ebe11ac0998e399668b1d5e8dfec2c9d51f3daeb3ad57435868e7aabd1c1088f1795a5be539628944a1885d17c7a3b9335bd9bc7b1703569c5865a418b1dc8142656754edf220b9100760cc5bb1cf72f29a7d6a0573afcd3cb81d13d5b92c90efdd0289efd293c90d762d165db63005ac98f3c1986a454b5c3eb2f36c0d91b6f010000",
    ],
    [
      "ETag",
      "DgUUS+cycEpzT1DUWI+LUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 31 Aug 2021 21:14:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
