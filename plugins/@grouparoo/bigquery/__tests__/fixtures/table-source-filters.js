const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1595717903361";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
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
      "1d",
      "cf",
      "cd",
      "72",
      "43",
      "40",
      "00",
      "00",
      "e0",
      "77",
      "d973641643e82d24846dcda014979dc5324bfcff9474faee35bd7f97ef07902ca3d384e7aea62d78033b11d47376469da2f16ee1e977eed5889ec62658a44a2722c57fdfe42a9c173c0a892bed8651933aec2bf42c7339325b21c5d1c703a62eb106385884778adcbc55b95ffac86a2f64ab10deec658617b19147bbe4daf5eb6a1e82ac4df0e93ecc8c494db40a49947ddfdda8aaada044e6bc5549d8d17868157863beeec1982e81b3c766e0a7aed5f082934a2d070d9b75d818f5447e5ec109d0ad67239d303b66a2a4aa27f0dfc4f3ded3e3aa5132d211fcfe01e26c1a7c05010000",
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
      "Sat, 25 Jul 2020 22:58:23 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1595717903361",
    },
  })
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
      "ff8d54db6e9b40107df75720fa1a1b7cc1d891acc672486bc9c60de0445555a16519c8269825ec12cb8afcefdd055fa08ed2bec1cc9c33672e3bef2d45515f481aaad78a1a90f8b5807cf7e59906ea95f40047b1f4bc8e8ac2c88c9de6f2edc0de6eef970ffd513c995451a44433b4c91268335ae418d8f5daedc4392d329453da1684ed6ebb6b8c0db36b8ef57e7fd8ada00c926841d21749f0c479c6ae35ed28a313531a278032c23a986e4e76edada765397d06cc99d6ccaa89444cfb34efd78462c4094d276bb7d25030c87dd820924815677018dc34d93b046d3ab1887e231810c6b448b95456d1609a46242ef2925c30bd0ba33097924fbf3583ea5a0b6be6299826c526f553b4812b25441cf97c978172e7ac96cadcbe5b39cba9375fd9be3bfb6e2da79dd96ab15edaaef2f8dd722c85a3208112ab4c949bf2cf163fa5a2325b088c93b4d4e4496f4d89f01eda38ff6080270a492254313884f9a63e44dd913e0ea2c0c4d1a86f04910e41300a4c03f5031d8f0730080340758652598547294d43d3304d84c017c0a13f8048f703d07b7e3fd443bd3b8c82a8d7530fe8fda9966d4e38dc129651460e4d561f9db967f99eb3b66753cfaad71da122e1b795f266d58d72b868505de9672db95094e5840a51e538e7b66739d399377fa8c910bbb58018e19dfb2ab72b420983331ae562561cf2250de560547bbab46ecfe072537e1c839888f875d2792e4704caf997b55cccbf99c7138bd56845359bcaaaba9e33b7bfa935e7fe639a0794141ff0bc1dcc6a26baf5243acc1a5cadbfbf7eb76a3954f1540ff2d4fbb5e5fc94d8d2273d0e4490438acf59ff637525b072fffb1089e8e35d9000711a4ee9191766f188303b27c739544f8a548d3f110ef4be712414c09c5f467407e363c4c56d90b96003293fb6a2ba11551ff70d49454d4e0993e1e219d88719ee5bfbd61f7553e8c4de050000",
    ],
    [
      "ETag",
      "q8uu5p5y/Stw4NwwQMV38g==",
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
      "Sat, 25 Jul 2020 22:58:24 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1595717903361"
  )
  .query({ location: "US" })
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
      "c5",
      "54",
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df572cf515220b03c48487a9a8338830c69321a4767730dcd6d9762a21fcbb6d37642f9a2592f8b2f6de736e4fee6dcf768669a2d7280dd0a5895ea2d55b0e6c7bb60231551b0f781e0b2e978ca61c5043b141e095627fbaedf3cd7c4d3ca70398d8dc9eda0ffe743028589cac21c192b793918cc308e280cbf859c76699d7588a135027121ae749bad461e3088b6da6e199efb9e3bb2a92d04023e3f968e45c8d86a884f68d9f45022cf0521ff93709bd2e8c520c6de88b07213048091cbbce18dd0011ae1e2fc749164393d39c11e0a5882a2ce015a3798619a54d996a5a4dabd3eff4ac5ebfd56e77ad033ba6048b88a6aa603e43dff2820a1c7bf4434d18758b2b6045580cfc30091456eea03a2009bdabe22840dfb97de317a23bf6bb76855bee1646a5b2b6aa1c5418c5b0fc277579236b2c1f783dedf2959c481c27344f454de9dbd19373c2c6a519ea367de3f8c353c97221ad5053d7771f8733df799cfc282ebf8ba309aeb602f8845169310eda5856cbbee8f4ba2d7430ea35554614caa782e5a0d304cb1fd67d24642ec43107636f7c01d3b343691c050000",
    ],
    [
      "ETag",
      "xI3/jUhcRA5eac4s4Q4JTQ==",
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
      "Sat, 25 Jul 2020 22:58:24 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
