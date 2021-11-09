const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475693643";

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
      "02",
      "ff",
      "ed",
      "d3",
      "db",
      "6e82300000d07fe9b39a2097d2bd0d099722069139f5a5012cd251a5501a8666ff3eb3df98e71fce03e46549a52443dbd01b780353be448b721109dbf1c6ba6943e9606375525d575bd837af59b59d8bee129badeae67aaa1f62b213906dee4d3060a2fc7aaf957e9244be554b1d1e770217dd48648356b63bc5761eef48cc4b9566d3d04e17311a94f9f9013288985f614b79ef2a81b0f87433ef8b8f7777d06e7df1815bcb69a22bb3907ed91e6fe37ae0dd46a6dc9b343747e7f31ad7a45a27c13e832c0979636c6cc351a720eaafa9c90d5c2ccb9a663c548b9797ff0bcc00fd16aca792b0e776dd446806feea936112f4f9dfa1794f7bf0f30b1ec165d119040000",
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
      "Tue, 09 Nov 2021 16:34:54 GMT",
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
        query: "SELECT 'HI' as name",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636475693643",
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
      "000000000002ff85525d6fda4010fc2bd1f5210f0dd8e00f6c24d446c44a911052c1a4ca13da3bafdd0bb6cff19d53d188ffdeb54d68a248c913e666666767779fd95e96099b322eb3c706ebc39707c5d915430319bd26f7f69d971487c236b72277ff3a66bffa9acd66c490ad4a4351e538d0aaa905eae97633cc6ad554502b35a04283d160e43bbe3bf1fc907e1c9269ccd3a52cf724fe6d4ca5a796f5623dcc94ca72844aeaa150c5f9dd7a1a5b55ad1e50186dbd75b4c8445b1f7a7ecb9500235539db6ec8bfd158efb000995307ff8509fffeb6f2504231cc88fc24058210aa294ddb159510aa4c65d6d45d55367d665d97af3ed8265a46f3f8e2f2c7e2f202f4450905922e416d64d9a962e039b68a53aec5fb61b60230a0b1077713db875160873ce51391068ec7531b390ff8c40387db2274d14d3802e94c5bbd5341a94a370c3d7f0c89cbb93f0912578463d786001207c234b06df043db4b439f1dafd89f5a1abc91ba525af6e9d8aff5228e76f17abb9a5fc7511723852637377d736d88d77d1a0a49a40f721d5b542a726a47b558c5d1fa7a1e2feea27e3b4bcc401c368fb49f14728d44a7adc6878ae6c57e6ea3f53deb9fd698628da5f87c8e44ee80cf6ef3e552884ab7422edad07f5a9ad0ad87a8b15f9e2cda5ece6a776287ac23d7e61d16d823c2ce17d256c4024b730ad45f0a3b9ecc1a7d261148335f2d56b784fe0358d7a317a7030000",
    ],
    [
      "ETag",
      "dY0V5dmym0tGcl4z3tkN+g==",
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
      "Tue, 09 Nov 2021 16:34:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475693643"
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
      "904f6f83300cc5bf8b7705a9948d69483db4d3b4a222b4c17aa8a61ed260182d609684fe11e2bbcfa1bbc47ececf794f19e054b5398470a8cadf1ed5eda144f3699b14755f1bcda5a35623388046944c6e66d9fc722dd2ebd9cb363b3fa9a2939e2f170b26b4fcc14640384051619d6b08bf07684583bc361507ccadb32afb4aa3e49d7543b9d5c9368e97abf80dc6fde8c0910e2916a8b095685feb141d519ac806d5a2e96a7435f54aa286099e2e4a457d271491cb13d773bdc00f1e9f9f82172e3e733549612a6a19dd66c02e868ca853ba704cf0185053cb898be93cf3781dd940fb7f767533a83f14b1af466b39bbdbbf928d6438aa513d3a2005ffc3ba32773dfe01121fbdaf64010000",
    ],
    [
      "ETag",
      "K0S2wxfRxv1SKY3NiIks2A==",
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
      "Tue, 09 Nov 2021 16:34:55 GMT",
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
