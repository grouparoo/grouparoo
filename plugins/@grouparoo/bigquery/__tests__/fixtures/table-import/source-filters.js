const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335952675";

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
      "4b",
      "72",
      "82300000d0bb64ad8c2850d39d807cd541281ad96400c3d706088a06a777afd36bd47787f704719a92bec7d7a626147c021ecfa1900a6ebb548dbca0ae668e1f99921dfd7c550cb41267253c2ad9a97713c49440b30b1b97ad73f6d51a9a532df0d7688a0c44b5b038343b7cc9d36f6fab8fcc5adf92fd7d81a495cdbe06292ec684dc87688baf70c7c34ef2886af240cfe46d4c365d670cce4c4615e6a64579e271844667e331c711e79a18404469a3ca7caf1a6252c9484176d54551691ab27e585cea6538178f6c6ad58fa091cca6b82d4fe741c31096bef0f6f67f8109208fb664a4c7e56bfb42867002feeae32b6fc9ebbf4a624618f8f905bd99093119040000",
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
      "Mon, 08 Nov 2021 01:45:52 GMT",
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
      jobId: "grouparoo-job-1-1636335952675",
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
      "54",
      "6b",
      "6f",
      "da",
      "30",
      "14fd2b91f7b540208402125a11841509c2968456d33445b6e3a46e93388d9d56ace2bfefda297d6c52fb25897dcfb9e7dc073ca13b5e26688a08cfee1b561fbedc0a82ce10533883db60f56775df5c09571d423f5fded0025f3b8fb31920b866495c5439eb48d1d494c9e93eec66b5682a5c0bd181449d7ea73f72468ee34edcc1e8dc059a6479bae1e51d906f94aae4b4d73b49773321b29ce18acb2e15c5cb7def61d0ab6a71cba892bdf78a3d1091bd0f35bfe68262c54539db87a0df4856c7acc03c0707afc4845cbccfdce5b8e866007ee094614a45532aed0a525051a63c6b6a93154d9f9071f9e60385dec65b44161579539471890b76662558e1581d2a66ad82ddd65afbab5db09d47eb9d1f878b4b6f3bef2e769bfdd60fadeb4b2ff02c8549ce0cd79a5917e6e4c301f41326152f8d7aa4afb5f2737fd6ff0f4513405ab236189fdb23dc1fdb139292739a8e1d97a43623644cce5dec109b4e866c9810868167440d0b97a2b46d7be82483493ca463780c9c24267d6712f71d321ef7c743e260171dcfd063cd155b725909c9db0ea1eb601d797114ecfdc53cf24c09296e72b56c8de902de7a545020803ea8e9a8a35c80926ef7da8fbc60be88d6575e3be10dcb303d84f730e314e792011ad7d03cc5eaad48a061c89f6fbd2580cdc4be9f82124d7f3d21dd73ede24dcb5fe8110c50db55e68dc22858fbdf8c9d13e20ae78d813cb41fa802cb37501bb83efe0624ec689b05fdd87bc14fd45e052c65352be9e7d304b0097cf64b3bed3d4061f341452a38c3ea50a93568cdda15e2a6da57f6c49d2003aed5bf31c77606a7a6e91c3a232b58a99e0b6af71eea6cc51af902d2ff257bdf37cd3afe054f3a8fc875040000",
    ],
    [
      "ETag",
      "RFzFquVo5tySNlDhcmaW3w==",
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
      "Mon, 08 Nov 2021 01:45:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335952675"
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
      "000002ff8d92514fc2400cc7bf4b7d1d11840d59c2c354d0258038e69331e4d83a1c6eebb8bb4108e1bbdb9b88464df4e5d676bf76fdff777b784d8b185c58a4cb75857277b644fd608200559569c58f920a8560016ab1647293ec1ce9cdcef36ddbef8cd7c3d8ee2d26db7e9f0915bd602ec0dd439262162b709ff650881cb92da2acca8b799d59a077a529cec2c09fdc729e536cf2c9e368e45d8d0670b04e8db1d0625ef3ff687b3e58b0a24580094a2c2234bb9492561869dfc854222f336c28aa64840a6ab87eb1945495421235b8d268355a4edb69b7ed9e7de1746de6328a844ea960f471c6eb81262db280b62c121c06641db2dea43e375c4ee35a8709fd49e874eaf5be02122392f1fc4faee46d5f04ff840fec68c0774ee45415fa440d47f7de6fe3d8d1cf51375e38f84128cd3e9d90d01f0f66a1379e1aeef928fd6aa7514d25b18d0a8d83ad66e7d2ee3acd7753afc918cddf71b5acd08248f0ddb84b35b889c8141ede00dde58d4779020000",
    ],
    [
      "ETag",
      "vfy6rAS/mw3I4MqFd59bNw==",
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
      "Mon, 08 Nov 2021 01:45:53 GMT",
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
