const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640203541988";

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
      "1d",
      "d0",
      "d1",
      "76",
      "82200000d07fe1b93aa96bc9deaad9b0a43419192f1ce360993354a4463bfbf775f609f7fe805c08a935ef5525afe00dd8dc8523313a8e67d96dfc20b1142b4c13b25eec0db3db4d964dcf0e4c9628ce5015a9b90ad7db9a5ec207a395d2a2356a26a59ed971a0cd854e229e625e1c7741136e22bb0fdb36bcbce4ea1eb8fd17f6c539db21cb8615bc17051ec2fa3039994fdfbc97082deb90c4fe07614eb2d52db6d7b368f4f4e135987b25f523b452941d86923bccefca138e36b93254d587dbebdc4d9ad82e1c4fee0b726cb14c1151aeb8f6264e995742026d1e800190df4dd949cdcba7db9b403800ff09bcb78d7c4ecc65dec90efcfe014565163b23010000",
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
      "Wed, 22 Dec 2021 20:05:44 GMT",
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
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640203541988",
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
      "53",
      "5d6fda3014fd2b91f75a2040020109ad8ca62b13842d8456d33445b6b9c9dc26318d1d2654f1df77e314d6aa52fb14dbf79c7bcefdc8137910c5968c0913e96305e5e1d3bd64e48280a629be1ef6de17ffc101dff73c0758f8cd0fa7623a992042d42c45f35d062d25ab92831a6fd6edb494d58e9652b63051abdbea0e1cbb67f75da73bf23ca429c89285281e90fc47eb9d1a773a27e9762a659a01dd09d5e6323fbf77f6bdceae94f7c0b5eabc56eca088eabcabf939939c6a218bc9668dfa958232869c8a0c1dfc276ed9e5ebcc6d41f3768ae0bde040399755a16b579882cb221169559aac64fc448ccb1707b2f617fe2cb2b8ccaabc880b9ac385b5a59ac6fab003eb3a5c2dad7970bd0a97d368be0ae2f5ecc65f4edbb3d562b30cd6d6dd8d1ffa96a62c03c3b526d6a5b9057841fd2d282d0aa31ed5cfb5f2737fe66f875213505a41138c87f680763d7bc41236e489d777596203631e1bbab4cf6c3e72c0d932a0c833a286450b5980db637d70bbf1c8e9d3d8f1b649ec3974143b7ce80e98dbe3fd1127c70bf2b7141aae84da49259a0e91bb701ef971146e82d934f24d0909ad327dd518ab0b78e9516381b16d7711f84e5dc73a2a24aad52d9f0711eee62c9adffacd941790527e583fe29c139a2940342db1811acaa5dc62d348305dfa57083653fb7e0a2a32fef544eabed74e5eb4fd4c8f7088b5656dbe641d85f3e0abb17342dcd2ac32907d7320cf0b84a68fbf11886bda24213f367ef893344f21245042c13f1e28824de0a39fedb4fa08c5e54715a5f18edbc355adc14b68b6489862cf6ca7e7dac4804bfd26d61ff44e3dab73d4192187423f17d4ac3ed6d98855ea0cc2202e40607a75fc077a90408578040000",
    ],
    [
      "ETag",
      "yv8BEk4eEE884ebRJERAiA==",
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
      "Wed, 22 Dec 2021 20:05:44 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640203541988"
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
      "8d",
      "91",
      "6f",
      "4f",
      "c2",
      "30",
      "10",
      "87",
      "bfcbf9764b3619084b7821c62809411d90f8278494ee3686dd3ada4e8264dfdd6b45638c2f7cb3dedd9e4b7e4f7b84d7a24a21867591ef1a5487b31ccd832d12d48d309a8e5a561ac103342c277276b77ed44f7c90ce452a76bbe781debcd7fbe19008cd375832888f901528520df1cb112a5622ad71299ab25ab9ce0373a8ed70364fc6d31bea4b99da7eba984c2e47936b68bdefc59419b672fc3fd696ad075bb94e30438515479ba556728bdc8cada666652dd0d7b2511c3538d8fdc8956c6aa6a4f469e2877ed88b82f3a0d38dc241bf4f9c909c994256842e66140f8c344c24724f92d02140b9927c33f77da371913a0f5b8ea7f35ee4e2fd049ce1177292facdd482557f30cb5382d1c1a0be57926c345a913088fadd8b5ef0e97625adafa17b30aa410f38a327ba2d0cc419131adb0fddcdbc5700020000",
    ],
    [
      "ETag",
      "SObXsYc9dTldlqqZ9shzpw==",
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
      "Wed, 22 Dec 2021 20:05:44 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `name` FROM `accounts` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640203541988",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553eb6e9b30147e15e4fdd9a45c48202144aabaa8a51b534a5a425a55d3941cc030b70453db748aaabcfb0ea6e965953a0909f0f92ee77cb61fc91d2b53322531cbef6b2a769f6e794c3a842ac87135c8dddbcb85751d9c42cacf2e7e98b93b3167474788600d4bc2b62a6857f25a24544e57cb5e2e785d81e0bc8b42dd617730b6cda1698dec813b99204dd2229bb3f20ec9bf95aae4b4df3f58f772cef38242c5642fe1dbe7f5fec3b05f097e4b1325fb6f1dfb6822fb1f7a1e173c01c57879b45aa27f2da958d32db0023b7821a6f1d7b7ca3d06db5e8ee007965048125e97aae90a25125e662caf855625d347a2bb7cf54196dedc3b898c0d4b37064863bdaeee3ac6a6842ddd1867e1e2dcd83c29ca8d71fddd0b3da3c5fa81b10a026f19199f8fbfa0534aa562a5f689202e68e3f19484ff3efe86000a246d8b6bc71cc36062ba71163b4936b1467166d2389ec4ce08acd84c5c9bda694c0179aa51d72c2879e9c4d930b55cdb745c44a79935ccec38b506a8e25800666a8d6168c380ec3be48f608a9e325971c9da3cc875e847de3a0a57c1c92cf2f41819d4853a6d9b6b8678dda7c221d7a63940e007b3ed9b2ae3e8d604ec079117ce4e22ffca6bf7744e734876cb7bdcd50c0a49110d02f356549cf3148323178ba51ff98b60364786dea88b034292e9cfc71742b4ab74d24abfc92c0c6737c8012160f74f0dfb18db64bf7f65770545ad211aafff5afd87b64030b65f7b7c3a044f6bab472e575e7843daa5906654d032f9ff6e235817fe77e70e3700a17807d0452afcc7a395c8c62311b43d626cabfb3bb0478391433458a87735cb740f39361a8d22ddd2523d0dd4de009d4c53aae533088b7832023ff886d5bf4189e0497f040000",
    ],
    [
      "ETag",
      "Ng9jQO3WNDadoFPJ0g980A==",
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
      "Wed, 22 Dec 2021 20:05:45 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640203541988"
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
      "6d90cd6ec2301084df657b6c2201e53712074088468d681be0d20a45c66cd24092756da72842bc7bd769d5532ff67a3c637de32b9cf3ea08011cf2ecb346dddc65685fdd10a3a90b6b78535419040fd08a8c9dbbb7d1603e592ca2c1b3799add4f427d383597e9941d467e602920b8429a63713410bc5fa11225722c49d4992db651ee14aeb7cbd53266a1a4a313d6bb289acda325dcbcbf48bbfd4536db385caffe4bec6f1e9ce810638a1a2b890e40693aa1b4a1eb6644a90af40dd55aa281d6dc5e649a6a253491cf8adff3bbc37ea7d77918f4bb93f1987d05496173aa5ceb0d9381252b8a982edc0cba6cd0edc825d376fd6a65d7c04da656a89312339148d2ca71ee7f9f983716cd8b26c631e84886a31fac053954cb15acaed10329f84b1f730b412a0a83b76fe9d4f7c6b0010000",
    ],
    [
      "ETag",
      "UZ75B9CCL5OsKA+9Irbjyw==",
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
      "Wed, 22 Dec 2021 20:05:45 GMT",
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
