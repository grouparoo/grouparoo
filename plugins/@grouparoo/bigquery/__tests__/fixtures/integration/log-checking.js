const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201492188";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dd04b7282300000d0bb646d1dfe81eec0110404f92ab0c9600ca050c3af51e9f4ee757a84f77e408931992634d396dcc127789582b6c6eb33a7678c5b124f89928d6fdf64b7f2874edf707657bb81a36a5deaf018f5e1a998b23ac8adfe48179d5753b351a40771e088867b95cde8f59c62862dabec44e140a5220ea86424f7cbaebe886a6b37e3e9403fa45a473cee7d2573517abd9814c62ed34ccf1ab6377923faac17cc247b3cb7ed566d873d2c43398572340f0caa4747da41e7ab08e3fc5bccc3c028cff4c00c63d88591905b0de7e7056f32bc2c475ef07c6f0a0d58ed53b002e4d95f4732a1ebdb2dca9ab602ff09687ef5e43d6190722423f8fd039f766a5723010000",
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
      "Wed, 22 Dec 2021 19:31:33 GMT",
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
      jobId: "grouparoo-job-1-1640201492188",
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
      "5d",
      "6f",
      "9b",
      "40",
      "10",
      "fc",
      "2b",
      "e8",
      "fa",
      "1a9b4fdb60c96a2387a4961257c538519facbb63a1170347ee0eb75194ffde051c3751a4e40d6e76667676f789ec459d913961a27868413d7eb9978c9c1130b4c0d7fab2f8abbc1bffb00fedc9d5f456ea6512148b0556888ea569d59430d2b2551cf47cbb19174ab60d55528e5068e48edc69e0788e1b449e1b8648d350e6d7a2de23f9b7318d9edbf68bf5b890b2288136428fb9ac4eeff6c1b31b25ef811b6dbf75b4d144db1f7a7e2d25a746c87ab1dda07fab41eda0a2a2c40efe1333f6edadf258d06a5c60f14170a09ccbb6365d5728c1659d8ba255bd2a993f91becb571f64135fc7cbd4ca85d26657d30aaccbe4c78d65409bb1022e55a6adbbef71125b22b316968ba21962a2ee2553ca4ae8e48ea157ef27dd11a8a11a06703773a6d40d9d88e56cc6f3d09fb0dc01c642369b509f393c0a20c81850e4994ebd67d15ad69917659e1f31dfcf27411e308706ded4e553eab07ce6313f73b289c7228f3c9f913f4a18b810ba915a0cd1c95db24ae35d9a6cd7cbf334ee63e4b42dcdc5d05c17e2759fdd00768ed3e5fd20db73870a896edd2c57eb344ece97e9ea361ed6770d05e58f9b075c604e4b0d588e6b4f1f1b9c19f9b98d935f64784a20070535ff7c9658dc039f1defcb2961291e13ba6883ffb838ae3b0fae6058a0a8ba5e4e6c7f3673485faccc3b2c8c7cc44e27d4294205b539061a4e893c1fcd5a7d2a4210e7be5eadaf10fd07b0a622d1c8030000",
    ],
    [
      "ETag",
      "nFgxr2M3vk8/5G6VosCR4g==",
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
      "Wed, 22 Dec 2021 19:31:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201492188"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90514fc23010c7bfcbf9ba053609c1253c0c834a42880c080f8698326eb3b8ed667b43e7c277f73a7c69ef7ffdb5f74b3bf8d4d5092238eafcab41d3dee5c86b5724689b82ad6c355516c10364950bd906b3588776900fe8f7e9671fdf5fc6db6c3d9d0a61d30f2c15441d641a8b9385e8ad834a9528d7326d2cbff7c1036e6bd7db6c93c5ea597249279757bbe5329e2de7703d5c3d38d331c10c0d5629ba376b43674c79e174ad2aeb027d4b8d49d1420ff707b9a1a65686c8978e1ff8c178340c87c1e8210c2613e10a4a156baa04dd6d40a630b12a12fa16590804307d29de59bf5ea43d371a9dd2e19f9eb58cf6d5904cb6e8860e6f028fe4a45864d934e841aae43f5e34dff2f50f805a788f6c010000",
    ],
    [
      "ETag",
      "y1BAi2s/g/ozFxWA3v6TfQ==",
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
      "Wed, 22 Dec 2021 19:31:34 GMT",
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
