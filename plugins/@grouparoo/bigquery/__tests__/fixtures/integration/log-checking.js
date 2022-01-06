const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212604306";

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
      "00000002ff1dd04d7282301800d0bb646d1d44fed21d696315128b8216dc30f46b640254189282e8f4ee757a84f7eea800104ae5baadc5053da3a930f11ce69f869f0ec62de11e77c31ff0d928c71526bea9e39aace2d23153c1a700374a2eac3af6d81ec3d7299af6ad476b854509c3066c2b72389425e7ac8528dc6dad9c6bda68f1416580abe4e5d0c5fa6665fee5ac2a76f397479ac707e3bdc0030be4b18f36057577446bbb7f3532139c88916420ee356369e810158cdf6ea53a3e85e3b84fc6b5c77277511c0f43bab5cdb7e609a0db12ce836bd6eecea58c4ffd325b7b0456d4a26886c4b593bd50b97cb89736c633f49f90eba9138f09228a5ef4e8f70fbb21f23623010000",
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
      "Wed, 22 Dec 2021 22:36:45 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT first_name FROM test.records WHERE id = 1",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640212604306",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8552614fdb3010fd2b91f795366992a64da56a43906d95a0883485ed53653b97cc90c4c176ca10e2bfef9c40079b04df12bf7befddbbbb47722b9a9c2c0813e55d07eae1d38d64e48880a125bed2e8625d9c7313ecab925fed6fdcf31fbfd9e5728915c2b234addb0a465a768a835e6c37e352c9aea54aca110a8d26a349147afec48fbc30f022a469a88a33d1dc22f99731ad5eb8ee8bf5b894b2ac80b6428fb9ac0fefeede775b256f801bedbe7574d144bbef7a7eae24a746c866b9dda07fa741eda0a6a2c20efe1273f6e5adf258d07a5c62f15e70a09ccbae31b62b94e0b22944d9a95e952c1e49dfe5ab0fb249ce9293cc2984d266d7d01a9cafe9c5b963409bb1022e55ae9debef499a38227796ce044573c444d34b66945560e59e43affe9fb4255043350ce06ee6457432f76256b0192fe6c194151e303667b3290d98c7e310c29c01459eb1ea3d8b36b2c9fd38f783980541310d8b907934f4a3098fa8c78a99cf82dccba73e8b7df27444ee9530702a742bb518a293eb749525bb2cddae4f8eb3a48f51d0ae32a7437336c4eb3eed00769e67f3be93edc9a242a29b9de56a9d25e9f149b6ba4a86f59d4149f9c3e60e1758d04a0396e3dab3871667462eb749fa930c4f2914a0a0e11fcf128b7be0a3e37d39252cc56342176df01f17c7b5f5e00a86058adaf672604fe3b94ffa6265fec5222f0e113b9c9055841a1af31c683825f2f46cd6e943118238f7f56afd0dd13fd19f4405c8030000",
    ],
    [
      "ETag",
      "a6ONfMct3vlgcVvj/MXxbQ==",
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
      "Wed, 22 Dec 2021 22:36:46 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212604306"
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
      "61",
      "6bc2301086ffcbed6bcb5a2d85097ed0219b5064ab2b830d1931bd76716daf26578788ff7d97ba2fc9bd9727b9875ce0c77425cc606feae380f67c5723bffa22473734ec64eba973080120ab5a4835dddb7b7c38568b45a29bf755517c9ce27a3e17c2e96f6c15cc2e50196c4a07b3cf0b74aa45b95619ebf86b0c01f0b9f7bded5bbede3c496ea9f4795364d96299ade0babb0670a07d8e155aec34fa377b4b07d4bcf6ba4eb57d83a1a3c16a7430c2e3416d69e895250aa513c6619c26d1249ea451328d52e11ad28a0d7582165b90294cac9a9c7e45166201ec588a7735ae2769afac41afb4fba7976746f76249263bf443a39bc02379291659b60306a095fcc7b3e15bbefe01d222be036c010000",
    ],
    [
      "ETag",
      "a3br/e9qfAA4clWEUUZv1g==",
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
      "Wed, 22 Dec 2021 22:36:46 GMT",
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
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
