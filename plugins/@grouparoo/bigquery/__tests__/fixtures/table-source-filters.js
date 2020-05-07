const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1588888727887";

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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "f4",
      "db1a8601ecfe4436860c90a80cfc696a570ac84a81322dcbee3eb37783f70308a56c1cb1eaae4c8067a08989967419766b57f332a79c9fa068946d578754e525da263483d98cdf60a2b5caa6c6ee8f76eef180c4c5ad5495f1d48b0f2f0efa90ad66ed04cd2e4bbc59ec9b2638b975c9bcb388824d4ce83a964e1573f26e6854bf5ca442cedd68c2e87ae616f4cd096ebf7cc7c590e84d67cfcaa797e9bb4d8513a62c427554dd548f2d2946339c465e303e989ec336bbcfae3ccab6ddbf166001d85dd6031b71fd98ad2c8416e0bf899596ec71751919d8007eff00fb1e61cf05010000",
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
      "Thu, 07 May 2020 21:58:56 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-1-1588888727887",
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
      "ff",
      "8d",
      "54db6e9b40107df75720fad8f81e073b92d558366e916cdc024e54551559f04036c12c6117b74ee47fef2cf8027594360f569839e7cc99d9d97dad298afa44e3957aada81e0d9f3348b71f1e99a75ec80c0812caccd374f4d2b2531f5eba2d083efe4e378f5b160e87058ae66c4ed6490475ce32c4f1eba5dd085396252465ac8e82f576bdddebcb3fada3e14f41e51005331a3f49810721127edd6c1e6c3442c6c208484279c367eb63bcb9e93493943d822f78b35ab5898578f3ddba9f22e61341593c5cda85878c43eac29ad048ba389157de4d55bd41c9ba11227a437d20becfb2584867858ccfe28086599a8ba3d22b06319c5b3e7e9602aaadcff4b1a3f82ccad6b11b93355c282b22882bb60928536b3157ee057071df30cce9c29a8f1c6361baf6f88b3e1f35c68bd9726edacadd17ddd21541bc08720965a8dce45f267ee4c6f2a22bd4a1716ecd91d99221cceea769bc718e47092982e638ec61aed6ba22ed7e6be0059ee607fd6ecf0b5ae0797d4feb91aed7f2079770b9f28094157267059fc42c1e0ca0d7ee11cd6d77a1eb5e6a1dcf1db403cd25c8ecc315e968de95ba67ef8ebdf829100113ca13c6e97ed8ead8d2478eee1a53d7d4f5893e39b5fe2ba567e83bcb40b0632dcd31b2ca630a48168949d168754895eee5b9941b7b6f82670d242965682a5f02c374746b34768cdb920ddcc81984c4dfdacf722703127138b1498a472b209db3953c47d51ccdcbfde6fbf5f500e288f871f4796a0781725df25eced6a55ac7c175ac8ca238ca22aada8e65989fd55272f7b6cc2d89b2377436fbb09ae0b41e70c2bca255fbfbbf9fb5520d152ff8de9efa6da95bdf2537cfc98c0501a410fba7aaffb1e99258a4fffd7c21faf09a48023e28c7f25c6018ef9ccf4fc5f3c595379016833f0876f12a1d0591988a7344",
      "5beb1c10672f8aac056b88c56114c5cb52cc7157b19495ece43409c76b60eecf7057dbd5fe00d3010e3014060000",
    ],
    [
      "ETag",
      "kFAz0Srcez30ef+xrvjyog==",
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
      "Thu, 07 May 2020 21:58:57 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1588888727887"
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
      "000002ffc554514fc230107edfaf20f55148c02018131e86a292202a0c7d3084d4ed3687db3adb1b8410febbd76ec85e344b24710f6defbeeffaa5d77edb5ab51afb08138f5dd6d85b187c6620372701e0935e4c4065112a9a5291286075cd06e48166bfb4e255d0777c5cb6d50a9f4ff947ba7eb07bbd9ca5dc778839f1b61451ec8710798ae25713d78abcc1121e83ded1155116270b13d60f306e52034f9dc9707c5b4662e119643c1b8decfe68c00a6857ff59c4e3c81766cbbf4998796e15626c29de26e08384c485c3a9532996e0e2d0b457f1388da0a144265d5085882ecce1408a2ce5528806a51aad46ebfc427fddb32e0d7b76245c8ea14874c16ccabee551208f2662ad3bcc3af915c83ccc1bbeef04f34b77506e10412b5d1c7aec3bb7abff421c8e9d4ebbc42d5673ab545959951ae587112cfe499d6ee49dd303afa65dbc922389f35864095694be193dd8473c3899a1eaa1af6d67702c598564858abacef07e3075ecfbc71fc5699c1f4cd0df20a84729c8620a8cb15acdf6c579b7d3647ba35e096d44d43e45998149bb9c7e58772152cee791026b677d01858594771c050000",
    ],
    [
      "ETag",
      "W1mvgBTftj4svtV+akpwOA==",
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
      "Thu, 07 May 2020 21:58:58 GMT",
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
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
