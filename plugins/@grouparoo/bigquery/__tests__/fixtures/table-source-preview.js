const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631152724319";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd34b7282300000d0bb642d0c58b0a43b0309df22d02ae8868910caafc8b7829ddebd4eaf51df1dde37a049c286211e2f156bc00b58e81af2096fb70ad2ae25bc19b81a48e1db024dc40da1facc150a5b8212638fdd8ed9bb3009e1c15d4cd3b45ca2a6db264b91552a681c9f19e2d67b1fa9e158934e924349ffda4b8e60f461d69d0a32e2f34422421ca37287c6a9a1ef380d91f199dbceaf5037326fd17a27f0a64926542479f891fa275356ea1c676f1a1423dddad53b91cee50073751333da79aeaa0a8b7ab4db54e1e6eeb38bb5ab2728d1c135f2c4c64170e11f1efe2fb0026c6e8b9e0d7171dffe2443b8027ff5e37169d9fd3f62b4673df8f9051ac3ed8719040000",
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
      "Thu, 09 Sep 2021 01:58:44 GMT",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1631152724319",
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
      "a3",
      "40",
      "14",
      "fe2bcdecdb6a0b945bdbc4ec3695dd90d46e96d2353ed599e14047814166d034a6ff7d0f50abc644df60bedbb93d937b5126644698c81e1aa8f7dfee2423e70434cdf0f5ccaf4c19ece6517e56de38d7c5da2960955d5c2043b42a458b2a87a1924dcd41cd36eb5156cba6a2b59443341a5a43cbb32dcb1dfb63c7b6a6285390a74b51dea378a775a56686f1123dcaa4cc72a09550232e8bd3bbf13836aa5ade01d7ca789f686088323ecdfc914b4eb590e5c5668df98d827a0b05153956f02a4cd8cff7ce23418b5186e447c181722e9b52b755a10597652ab2a6ee5cc9ec997455bef920eb60192ce2c1f7c1afe8cfd5e0b642c71d55a06e07cbf02a8c0796893609282dcace24a62c87d6e0d866f871b6ad806a34e9c1ad6f7ad49a985396329fa713db65a9098c4d98ef529b997cea809330a0a8d3ad7ba7a2a52cc70eb3994f4d4679eab9eec4f54c3bf1a7e03ba6371e27f6d475ac69ea317238274fb5d07029542595e89b25d7511807db38daac16f338e8da486993ebcbbeb8b689b7756a6c12499ff47568512131a99d5cb88a8368be88c37f41bfac256494efd70fb8ae94e60a908e4b8ef715ce8bfcdd04d10de99f2248a186927f3d472477c057a7fa723848c5d3c114a5f11f97c6559bc16be897278ab69657b567baa423d7fa03865346ec7430ad231450ea6343fde190c331ac5127128238f355b8fa8de87fb86e65aab6030000",
    ],
    [
      "ETag",
      "+7p0oEhARl+nY4WmS4meNg==",
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
      "Thu, 09 Sep 2021 01:58:44 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631152724319"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff9d946d6fda3010c7bf8bf77204d9792004a92fe89a754c945108d2a6a99a9cc4d074499cd94e5b84f8eebba4154936c346df84e372bffbfbeee2dba19f491ea3110a93cdaf9289edbb0d53b795b160b24c95849f82e792a11e628a6e209207e163f81c7fbdca9f07ab6d390fbf95ef3fdf5e5c40848cee5946d16887d6094b638946df7728a719032c8921406d8bca9ecc02ffda5f8023e371e598ada6d3f1e5d447fbde0128045f2729fb713e588ae89ed6477ec596c16232bb3e4dd18c97b96a988fd32fe3e0341253d512b91a07fee978a96856344030b9f197c1f866aea3eef63df4c0c3055b33c1f288554d858e3cb0484daa794948953243722896495407d72f36829705159c1be03188410616218ee99ab6453c884b794455c273085d2de174487145d3057f826921822142d4364c6e5d3f1fc16fd56574ada512f42964426c0f2eb38f1b1b9bd8c0a6811b82f49d2176e1189eed7b75896d0dd2b0ceb9222db61221963570f522eedb2b69b1b5886713472be2680a191730ae46bb4fecbf3be5743be561fb481166c39e23d0e2ea021cece90b800fe56d025e47c024c4b6f4024ddc91fcc06b3a44ba1d721c8f68f3bbff3cbf3eff1f13c6aeab6fd050f315fd4ffe61373fdccd2377a161ed73045a5c2d30189a8701dcbd5ef5cbad62722e38ac0dc9aa8d815fb6c7075e6d14d86823254ad64311856dfe29512ffff7bf0100c9eb852a060000",
    ],
    [
      "ETag",
      "oTbvbxdXDnx6UyuPbYu+JQ==",
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
      "Thu, 09 Sep 2021 01:58:45 GMT",
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
