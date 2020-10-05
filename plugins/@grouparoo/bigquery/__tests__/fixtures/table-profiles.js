const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1601915854258";

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
      "08000000000002ff1dcfdb6e82300000d07fe9b3318043656f802017191621305e4843cb2604286d11eab27f9fd9f983f303505d13ce2b31766400ef4022cdd8d6db703c5abb05eb62542185acbd7d934bf3c06dab3ae9b4c0e89c6a983aa8b4ecf5e917a69ac7ae386af9236d47bbc6524f847d3d24bd99663264c3fc6ce30675fb47a89c3f1b6299fb8be97d691f6458069fbdf5e8ca9df9d6e5ae0c267b5183b88476d740ada7fd88fa2823fce4e353ec5343e685d4c5aa2a3840659d65ca74689dc41b26d75b0b5f2e11a4ca386bdc851c6c0059e99d115edd5fb39d6e181bf0dfac84a4e475b508628481df3fb510a86405010000",
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
      "Mon, 05 Oct 2020 16:37:37 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1601915854258",
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
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7",
      "5a2014020109ad88a62d12842d096da7698a6c7393b90d318d9d6e55c57fdfb55358bb49ed536cdf73ee39f723cfe45e941b32264ce40f35544f9fee2423270434cdf1b57f793b487ed7e5d6ad6f17236f79dff5c2389f4c10210c4bd1edae80969275c5418dd7713baf64bda395942d4cd4eab6ba03b73bea7abed73ff57ca42928b28528ef91fc53eb9d1a773a07e9762e655e00dd09d5e6727b7cef3c9e767695bc03ae55e7ad62074554e75dcdcf85e4540b594ed631ead70aaa14b65414e8e02f71c3cede666e0bba6de7087e141c28e7b22eb5718529b82c3391d795cd4ac6cfc4ba7c752071b0086689c365516fcbb4a45b38713654d3543fedc0b988564b671e5eaca2e53499afc2349e5d05cb697bb65aac9761ecdc5c0551e068ca0ab05c67e29cd95b8817d4df80d2a2b4ea897936ca2ffd99ff3f14434069054d301dba03daf5dd11cbd890677ecf63990b8cf96ce8d11e73f9a80ffd0d038a3c2b6a59b49465d7074e374337f57a2e4ffbc0b2940e467eca7a6c38a0fd21f31827fb13f2ab121ace85da49259a0e919b689e046912adc3d934096c0919ad0b7dde183305bcf6a8b14004bd53d3de44854425d3ee799804d17496ccaf8366c20bc8297f8a1f70c6192d14209a56d83c0dd5526eb061249c2e837304db897d390415197f7f26a6e7c6c5ab961fe9090ed0d8d5f64be2249a8797d6ce01714d8bda421e9b832923138531bdff81405cd12609f9ba0ea26fa4798a20830a",
      "4afef130116c031ffd6887b547282e3eaa288d77dc1cae8c06afa0d920618b3db2879edf27165ce97f63beebf60e3d33394c46d842a95f0a6ad61eeb6cc46a75046110871fda5eedff001f31c4c974040000",
    ],
    [
      "ETag",
      "4GX6Txunm0uXL95Mk15NSg==",
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
      "Mon, 05 Oct 2020 16:37:38 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1601915854258"
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
      "0002ff8d93616f9b301086ffcbede38814a2906548fd403ab622519226b49b345591830fe6ce60669b4c5194ffbe33edd26a9d44bfc0ddf19c7ceff9e5083f45c321849da87e75a80fef2ab4372e58a3e9a435f46a5563103c40cb2a226759165cc5bb9be55df52d89bf5e4eeedeafe6d1c50511a6f8813583f008a540c90d84df8fd0b01aa9ad50b2ab9b6d9f79600fad2b6ef275927da1bc56dce5d96d9a468b348693776ee4ccb26dcfbfa1edfee4c183daadb1448d4d816e9656ab072c6ce2641a56b712474675ba40033ddc7fa8b4ea5aa6951a5165e48ffcd9d8ffe807f3603a09e6c44955302b5443e8ed86c603ab2c936bf59b44823f2142f731092efbe79eea82f7425c9864f96cdacff712288536f671277fc1276dff9292bd11a40b107208aab0e1a88728d16e19e71a8d192495d9b2b63d638be5327d05b1866b25f830b8170380b4fb33f0395d46ff5b2dd9e679579fa23c7e45184b66382379721d6ff2e87ae5b8fba7fb5d1c2c9a9556e41583ce26fe783a0f3eccc68fceb954ce4d744e6875871e148c7e802b61212c993478fa033d2bcf205e030000",
    ],
    [
      "ETag",
      "6NN5HEbQOVgXIEWC2V+P8A==",
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
      "Mon, 05 Oct 2020 16:37:39 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1601915854258",
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
      "5d",
      "6f",
      "9b4010fc2b88beb4956dc080b12d45ade3e00ac9362de0a47932c7b1904b8073b8235614e5bf77c18e9b285222f170da9dd999fde049bd6355aa4ed584e5f70dd48f5f6e79a2f6549024c7289597d9cabbaaf1bbf237cb915fceff9eefcfce10c15a9620e5ae80bee04d4d414c37e120af79b32335e77d2cd41ff68d916e4c0c7b6c5b437b8c340145b664d51d926fa4dc89a9a6bd480f72cef302c88e8901e5e529ae3d0cb55dcd6f814aa1bd55d45044681f6afe28382592f1ea6c13a27e23a0de424958810efe13d3e4e7dbca0346ca418ee007468150ca9b4ab6aeb004e555c6f2a6eeaaaad327b573f9eaa186eed29d47caf79e12ce16ee763e0ba3afb19028102b4428611478eb5fdfda67bcddde94fb585904fe4a89b1cb8c152062c50f2edc4039bf565e68b370de536296762f65e9adbc4831745df1178bd08d141d7da52024ab3a5711490a681d1de7e6bd5f564b2092083824b78e3e22c6589f2459e2d06c6cda49a643928c13c72666a2d38905569a00419e6cab772c52f14acff43120d4302964564a870ec9c01ea696632623d3766cdd3075d334d5e79ebaaf99840b26765cb0c3f4d4abc08bdc6d146cd6f359e4766d64a429e4c5c15cdbc46b9f129b44d0077d3db759c651a95d85b78edc60368fbc4bf7b0fd25e4843e86f7b8ff8c1402104d6a5282847ac5531c9afadb0fbdc8f3d7b3655b0b4f2a7adcb5f13f1b37b83e8602c8a0868a7e3e64047789cf7e8c973345281e2aaae0e225c38d52d16ad01a0e9b6565ebe5c49e8c2c5bedc0b57c971b3b16e64ee7d95684122a796ce870a6eaf351ac1127102671216bbc52ccfe037db177cd24040000",
    ],
    [
      "ETag",
      "ctVfMIWrIWrWOUL6OmCXBw==",
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
      "Mon, 05 Oct 2020 16:37:39 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1601915854258"
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
      "9d",
      "97",
      "6d",
      "73",
      "da",
      "38",
      "10c7bfca8defe5058f65c94fcc74e648421e7a84b4405f743a1d46b1052811889345d25c26dffd566e62d9c5784c5f24f1aef64ff6a75dadc58bf3c03799d377eef8f2df1d53cf7f2e99fe6c1e262cdf099dc39faddce4cc397198a64b88cc6e9fa693f0e962acfffb4a46abe58f9b8be0eaf3870f1091a72bb6a64effc5597026b2dce97f7b713674cd40c63308d0cf5bf37c3d9e0d2f871370ac65661ce32fa3d1e07434745e4f4ac182ab5ccf0ba3144e6793ebf165bb4ed0df9241e25c1c2759b24dc6d4711abe9dd32c532ccf8fd4c97c4eb75b2b3abdbd1d0d07e37615dd644af2ec37948ffc5885d08f567131ba1dccdae333aa2b253a1fcc86edf1b9a6eb4a4eb3eb9be17436b8f9d4ae9acf57eba72e5bfdfdf5c4b9977713b6608a6d5266ba78abe43d4bf5b5392039fc77c17ab9dca99499e24170b1b05472b7a54aca1e787a7e0f851e4a501007c40f62881332a59acb0d847e99426a8e969a8a897c82e3e1200f2254f10c476551fc7e34fe82c13c0d1567a5f191a947c9f3d266f73f1ddedfec47919f9bca75b97a438595a2c0f549e4e2d88dfcd2a9d5ce462ca8c859f3921f242eb232dff3bd9ee7f73c9b267283d80b82042564983404fe81fc3ec27d44fef2bc62b3abb4f693cf68ca450578689ae4dd481958a811f5028eafa8e68b5d44429720d7af24d942585f4a888bc37d0abf8e1b12006ec4f55b717129b8544c335131e52e95e943e9582edf3c7e276a84dc180a853c1761727491c33076f13e0bae43471825cdd0b815dae63358534d6dc5a566f942aaacf4d0f4dd85bb50a304bb09f4b6073f6133d96183c07e79fb28a4ce1ca3",
      "1837339356e6a0148cb8b2c81fe56a936b9808ef0e71ffe6215d804d6f87262f3749bad4b5be14fb46be4f12d491138f44cdc8412bb2fde473b6e1a5314da9e07607b2bcb0834ef58591853082f30ca3ebf8aef623688f781f23fc853741074657d8ca1b95822b269696f01fc12a737af560ccb00b6e6ce674ec0273103713b574b317b995429608518d15795174606e45adac369f4ba674654a9fedeeb8d6766aa5851d75aa2eb4a31f045061737e0f14b4a5bc318c78d2801cd79151880f4cadb815d90a463b2518b367f614deda4cd8d92dee7e3ae24e93daf433bc53019ce066b0b61d0861d32a03be6449ead07ee01d185b492b34b213f15c2abd7a2ecdebdad8cab831932ec0c47435724302b30777a96b7dc94f3c37d87f3755122d80310e9b8716f27e05fefe760f3b7d8677cd2725e14e9733739d4b20bfe27277260d145c3ffa26b11327a5f0ede68a6ba75fe4f6fa3f8a9e41e93b0d0000",
    ],
    [
      "ETag",
      "dOwSR6wFNtzY4LhgxMF5HQ==",
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
      "Mon, 05 Oct 2020 16:37:42 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "cfdb6e82300000d07fe9b3332a74c0dee81aee568803292f04ba362328949b8066ff3eb3f307e7090ac6f830e4635bf3067c80b538185bb6f55b1d29335f7c1c95e97c3fe906c54345b58766c5e83385ef53be08be42da30b91eeba64b1c3b13a11bc5b865756c432720baa4bb6c56892cd63416b1ca21711116e544e65b6d59bd663a0d914bb0cbc53409bbecc32e4b4f163efa1e71a388cef84b57cc1f1b5766e011ccd3736b8af0529fdf4206afadea7ae65025fb91d6ec7ee9921b0cf8b77b85686f1d1e77a4830de08bac7a3ee4d56ba640c3d880ff663eae92bfae88173defc1ef1fdfef36aa05010000",
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
      "Mon, 05 Oct 2020 16:37:42 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1601915854258",
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
      "000002ff85535d6f9b3014fd2bc87b6d1248484a22456b96d01629212b21eda66942c6b930b704536c3a5555fefbae4dd3b59bd43e61fb9e73cfb91f3c913b5eeec884a43cbf6fa07efc742b52724240d11c5fafc4177a739b81dff0b8fa360cc4f662b19e4da788e09a25e9be2aa0234553339093eda69bd7a2a9682d44071375061d67643b6367e80dddfed0439a84225bf2f20ec9bf94aae4a4d73b4a777321f20268c5659789fdcb7befa1dfab6a710b4cc9de5bc51e8ac8debb9a9f0bc1a8e2a29c6e37a8df48a813d8535ea083bfc45d7af6367397d37d3747f003674019134da9b42b4cc14499f1bca94d56327922c6e5ab03d9f84b7f1e5b4c14cdbe4c4aba87136b47154dd46305d679b45e594178be8e56b3385887c9667ee9af66ddf97ab95d851bebe6d28f7c4bd1b400c3b5a6d699b9857841fd1d48c54ba31eeb67adfcdc9fe0ffa168024a4b6883c9a93da28e678fd32c3d65993718a6990d69eaa5a7433a486d3676c1dda5409167440d8b9658b3970e9d3ed8c9d8f3dcc4a583413276faa78967f799bbf3467dd71d90c309f95d73050b2e2b2179db21721305b19fc4d1369ccf62df9490d1a6508bd6982ee0b547850522e89d9a0e3aca052ae9760761ec47b3791c5cfbed84979053f6b8b9c71967b49080685a63f314d42bb1c3869170b6f217083613fb7a0c4a32f9f14474cfb58b572d7fa1c738406d57992fd9c451105e183b47c4352d1a0379680fba8c8c17daf4e127027145db24e46aeb47df49fb1441063594ece36122d8043efad18e6b8f505c7c54910aefb8394c6a0d5643bb41dc147b648ffa63c726065cab7f630367e41d7ba673e88cb087523d17d4ae3dd6d98a35f20584411c7e687a75f8038080aa3374040000",
    ],
    [
      "ETag",
      "QoBaWjfeEuiTpX5IoUGDOA==",
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
      "Mon, 05 Oct 2020 16:37:43 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1601915854258"
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
      "8d93616fd3301086ff8bf99a4a4dd79412691fd2512052d6ae6d064268aadcf8123c9c9cb19d4255f5bfef9c8d82d8a4ec4b7277794ebef7fce6c87ec846b098ed64f5b305737853815bf9600db655ced24b636381050c1caf8814f3e473b4c2afbb69fb8557bf93c56e94ead5e52511b6f80e3567f191951294b02cfe76640daf81da0a546ddd6cbb2c60eea07d7193afd3c547ca6b143e5fdc665932cbe6ec149c1b05777cdbf1af68bb3b05ec1e776b28c14053809f451bbc87c2a55ea6e5b55630b0d89a022cebe0ee4365b0d5dc200ea832b818849361f82e8ca6d178144d8953587027b121f47643e331878eab35fe22912c1c1161ba980497dd734f75293a213e4c17f964dccdf72f504a63dde34efe804fdafe27157f25481720551f544123c0f451526fb91006aced25d16eb9d6676cb65c66cf20de088352f4837bd90328b73f031fb265f2d26ac9367f77f53ec9e7cf08ebc80c67244fafe79b3cb9bef1dcddd3fdce0e0eec8d41f28a056f9370389e466f27c347e75ca177139d133bd342c00a4e3fc027e9585c7265e1f4005be2d9af5e030000",
    ],
    [
      "ETag",
      "dEAV5QoYb8uWagxANb2IpQ==",
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
      "Mon, 05 Oct 2020 16:37:45 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-07T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1601915854258",
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
      "69",
      "4f",
      "e33010fd2b91f7cb1e3d9ca3a784d86e49d9483d200920f650eb2493e025894bec8010ea7fdf49423984049f6c79de9bf7663cf340ae791e9131097872534271ffe99f08488b806209be96b21f2f46b313bab81370343afe96e85dfdf4e00011bc6249966d53684b511621c8f199d7490a516e5921441b13b5adb6dea7fa48ef0d7b96d11b224d421acf797e8de42ba5b672dcedeea53b8910490a6ccb652714d9d37bf7d6e86e0bf10f4225bbaf15bb2822bbef6a1ea622648a8bfce0cc43fd5242b1868cf1141d3c13a3e0fbebcc1dceb24e82e05b1e020b4351e6aa7285294291c73c298b3a2b193f90dae58b0bf1ecb93df5b5af2dcd9bccecf574e2f99f3752a1c0466352f37cd7591e7fa9ae9bf5fa2abbdb683377b5d0365865cc53901bede2a7eddada9ef3a7a4d48403ed505bb947b6abfdb87c0a4dbc694bdbf0a8be697367e1f89a4ea9b69acd3cdbd728fa8d402a9ed76e7d16a450397deca7f3f6132b02534c42135c0f689fe9433a0ae26010c643b317c4148260180c7acc0c6838b2c08a0260c85355f69ac5729133a36f0c2c3d30473dcb3219eb03e8a36110b12830f520324d66412f6421d9b5c85dc1151c71b91592375d2517aee3db6bdf3d5b4e27be5d9711b33255478db9aa88973e151689a077eada55512e50a9fa2267e9dbee64ea3be776331573485878efdde05cc42c95806856b00c14140b1161d3c8c9ca737c67b59ccc91517ff5c91e21c9f8f7c333c1bfdfd65d56f5497c67617bfe6471527bd883ce595ad6a8dbe6420c6ad03635da74e0ebc65837c7bad5a194fe22bbdd5f24e26c3779c9e999ed5e92e6c985180ac8c38f7f15c175e0a30dddef0b4271635005274d711ca150561a6101cd28f1acf2",
      "b267f77bc6d02035b8506f620373b8ef5995a3ca0819e4eab1a0665fb0ce46ac944f200ce2042c715d30fa1fab34d802ad040000",
    ],
    [
      "ETag",
      "us6fM9FP0MwoeD9G+g1/1Q==",
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
      "Mon, 05 Oct 2020 16:37:45 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1601915854258"
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
      "9d",
      "95",
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "86",
      "ff",
      "cae45d16223b1f9044aa3468d3168dd296d25d6caa90490ec1c5c4996d6859d5ff3e279b02ac2c82de80df93f32aefe3afbca239cb1214a2094b7f2e41ae3fa7a0ef8ac110d4926b65fe729129400d049aa6a6f3417aee7a3e89d8edfc24d52fdf7f7d7b3e6fdf9d9e9a0e15cf604151f88aa60c78a250f8e315657401c6c612d3a0d77931ee0d46d16534348585488ac2e0a1dfef74fb117a6b548629934a8f4b5119ef47c3dee0b2dec7e9876c2638e3c75952c81290c779583ea6492241a9237d428d699e6f4cdd9b9b7ed419d4bb689648c1920f3857ec5807d7ab8de3a27fd319d5f727546f2dd1796714d5f72b4d175b9946bdebe87ed4b9bead778dc7b3c5f32153fdf8d6404f6232842948c8622876712ec513c4ba571c1065decea1a9c452c6502c9e692e1fa4522c732a85689a4ad36d92162601f17ccfb53ddff4711153cd44561c9d7b130d69a1291f8a67733c906b1a64393427655afeae4cb95d2214a32be029add4570e4c556a362f64eb0bbc94d9ac582caa6717663f73a8a4ef59b6eb5bbe658255452d9770807071dbc25e256d6ce326b69b781392589e4f70bbed056e14ec69fc44ec903821714f302e677a9b7593e712a4669bf79e2d274ceb4aa671a9db87e012dbb16ccfb388830d77559e52aee03f6a07d97789e5ee41f6779149cb09f623fbb5c81b437f29394056e9aed90cc079a5f9e44fc13f84da768859dfc032e0aeb31fac6e065a66d21cf73d4bb00b6d7bd8d90f1dd442135c39ce85d4b375257b4a8bcd1424ac90c121",
      "c06eb1ab89d5722db31287acebee233bc096e7bce3d80a5a023b4eabbd1798e07f811fff9eeeee5a83ba95c2dc140a8a4b2230f9ca2be34c1450e6e60b8b600d1453f3cdbc621a8565b6b7dfa27cc9c991070000",
    ],
    [
      "ETag",
      "Ur54ykbEiPk+gtxZzVwD7Q==",
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
      "Mon, 05 Oct 2020 16:37:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "4b",
      "52",
      "83",
      "300000d0bb645d3a851624eec0a850b0c3af80dd6430a410c01213908fe3ddedf86ef07e40410895120f7d4b6fe0112c8506b764ebf5a6bd9f4a2f635767b2028368cdf530c58953f5425b8e4d38bd189a12ea4354aa3a324b2b778393ebda2389d4c4aedbd01ff5686870dbee38cbddb4cc8c93d7f6055252a23e8f65390b68cd71173036bd65c607cd5fcdf5c253dbdfc10e71644858d3f3b7467198aea15113917c39957b8493576729b31cb6c4d103c7fc70fb6c084a3035a9ccfc989f2be509bdafdd45820da03367824acceeb3bd0ee106fc37f1b0707abfdab4105480df3f7333458305010000",
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
      "Mon, 05 Oct 2020 16:37:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1601915854258",
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
      "02ff85535d6fda3014fd2b91f75a08019200125a11a42b1a842e8456d53445b6e3646e9398c60e5555f1df77ed94aedda4f629b6ef39f79cfb916774cfab144d10e1f943c3eaa72f7782a033c414cee135dce5cd60972d3cfc3d2d6fc783c383dda8c7e914105cb3242ef705eb48d1d494c9c96edbcd6bd1ec712d44071275dc8ee3f59cb1e38edc61df1d014db2225bf1ea1ec8bf95dacb896d9fa4bbb91079c1f09ecb2e15e5ebbb7de8dbfb5adc31aaa4fd5ed10611697fa8f9b510142b2eaae96e0bfa8d6475c24acc0b70f0979892f3f799bb1c97dd1cc0074e19a6543495d2ae20051555c6f3a63659d1e41919976f0e681bac82796c515134659554b86467568a154ed4d39e5917d1666d2dc38b4db49ec5cb4d986ce797c17ad69d6f56bb75b8b56e2e8328b0142605335c6b6a9d9b5b0817d04f9954bc32eab17ed6ca2ffd59fe3f144d0069c9da60e2f73cec8c7a6392119f66a3814bb21e2364447c170f488f8e876c9812868167440d0b57a22263ecfb3dea26dec021c9b0ef8c12ec0dc689935277e87b9eef11171dcfd063cd155b70b91792b71d4237d1320e9238da85f3591c981232dc146ad11ad305bcf5a8a040007d50d35147b90025ddee651807d16c1e2faf8376c22b9663fab47d801967b8900cd0b886e62956af45caf462cfd6c102c0666257a7a044939fcf48f75cbb78d3f2577a0c03d47695f9a26d1c2dc36fc6ce09718d8bc6400eed419791f1429b3efe0220ac689b04fdd805d12d6a9f2296b19a55f4f36102d8043efbd14e6b0f50587c50910aeeb039546a0d5ab37683b829f6c4f6bc51af8f0cb856ffc67ca73f3ef54ce7d01959c92af55250bbf650672bd6c857100461f8a1e9d5f10f6714943374040000",
    ],
    [
      "ETag",
      "NUgu3UfD6aKdmY93vq/utw==",
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
      "Mon, 05 Oct 2020 16:37:47 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1601915854258"
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
      "93",
      "61",
      "6f",
      "9b301086ff8bf79548a10a598ad40f64cb36269a74844a95a62a72f0c1dc181fb34da634ca7fdf9976e9b44ea25fe0ee784ebef7fc72643ba9058bd956d63f3b30877735b86f3ec8c176ca597ab5a82db08081e335913375b9c37ca7e7c962bc9d96e9d7c7bb08eaab2b226cf9031acee223ab24286159fcfdc8346f80da4a545da3377d163077687d715de4e9f233e50d0a9f2f6fb32c99670b760ace8d823bbee9f937b4dd9f02f680db1c2a30a04bf0b3b4061fa074a9976979d32a1859ec4c0996f570ffa136d8b5dc208ea8328a46e1741c5e86d12c9a5c4433e21496dc49d484deae693ce6d07195e32f12c9c20b224c1f93e0aa7feea92e452fc487e9b2984efaf9fe062a69ac7bdac91ff059dbbfa4e26f04e902a41a826ad002cc1025db0d17c280b58324da0d6fdb33365fadb25710d7c2a014c3e05e0e00caedcfc0a76c95fc6fb5649b975d7d4c8ac52bc23a32c31929d2ebc5ba48ae6f3c77ff7cbff383037b6390bc62c1db241c4f66d1fbe9f8c9391fd0bb89ce899de9206025a71fe08b742caeb8b270fa0dd9e480c35e030000",
    ],
    [
      "ETag",
      "8l9koRknBAE0b6cIJzX5eg==",
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
      "Mon, 05 Oct 2020 16:37:48 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-11T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1601915854258",
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
      "000000000002ff85536d6f9b3010fe2bc8fbb297263121e44d8aba34a51b525e5a7052b5db941838a837c019365dabaaff7d072c5dab4adb275bbee7b9e7b9f3dd03f921f2888c4920929f2514f76fbecb801c11d03cc15775d7d71b7bcf36c93afef0f93238b9cefcbb8bc90411a262299eed536829591621a8f1da6f27852cf7bc90b285895afd96d9a7e6c8b48776af6b0f91a6208de722ff81e41badf76adce91ca4db8994490a7c2f543b94d9d37be7b6dbd917f23b845a755e2a76504475fea9799cca906b21f3c9da47fd5241b1858c8b141dfc2546c1c79799db8267ed04c1b722041e86b2cc75e50a5384328f4552167556327e20b5cb6717e23b7367c68cf747863f3d73b6b3a9cfdeee9446819dc195e133cf5d7e7a575d77dbed4df66b679c79ab85b1c32a639182da19979f1dcf310e9caf25a5164c8c6363e59d3a9e7172f5149afab3236327a2fa66ccdd85cb0c9352637576e63bcca0e83702a5455ebb653c48a172faa79feeeb4fac085c73054d703ba07d6e0ee928888341180f2d3b882904c13018d8dc0a6838ea412f0a80234f57d96b16cf650e761499d40aa13f8098c7960510f57a5618c5dca6f6681075a3b8cb4716793c22bf0aa1e154a8bd54a2e92ab9f45ce66c99b75ecea6cca9cb887999ead3c65c55c4739f1a8b44d03fea7aaca242a252f545ee9239de74c6dc8dd34cc51c121edefb3f712e629e2a40342f78061a8a858cb069e47ce5bbcc5d2da77364d45f7d7e402832fef2f097c0eef77597757d12e62e1c9f4d17e7b5870368c3d3b246dd3617d2a55ddaa2dd966932b33b36adb1d96b534aafc9e3e33724e26c3779c9c5daf1ae48f3e4410c05e4e1ff7f15c175e07f1b7ad81784e2c6a00a4e9a163842a1aa34c2029a511259e5e5c0ee0f7bbd6ad8105ce85731bb3f3af4acca5165840c72fda7a0665fb0ce46ac544f200ce2042c715d30fa1bfc38b881ad040000",
    ],
    [
      "ETag",
      "sx6tV5pTVgUf+HWbBZmSxQ==",
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
      "Mon, 05 Oct 2020 16:37:48 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1601915854258"
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
      "9d",
      "93514fc23010c7bf4b7d14a2a0105ce2c3c009c431608ca8316629eb318add3adb0e8284efee4d0df0b4084fbd5effbfbbcb5d6f4b3e78ca8845663cfecc416d2e6230e3c2f041e7c2683c32996a20150286c6a8bc5c794f9ff5d7f5b3d3b9ea747aadaff1e6458defef51a1a3052494585b32e7209826d6db96a43401c4384381d96485ddf702a7ebf8e848242b1cded475edb6eb905d650fccb9d226fcb9ecc149e0f7bd6e3927e8591816cec569480c2903751ac3b39032a640eb1339a9439a6507a83d1cba8eed955334654a727606b9e2a712c2ac0ec4a33bb483723da3e668440f76e094ebb5a1c9514d417fe04c027b302aa7c27091acffd3eaf75d852ce5cc8739284823287e71a6e41222d32f1644637601552d731541313c14ff3cc44ae619555256d1536d566bcdebda5dadd16adcd61b2dd4091951c3658ad2e9044b23461a2a7cb9c6f520d7e4efdede18d0232531b68622ec5df3e63749471689b15796513954484471cb7adc106b4e8586dd377cf25089c3030000",
    ],
    [
      "ETag",
      "+vNKq2YwWEC/CCH8zQyXrQ==",
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
      "Mon, 05 Oct 2020 16:37:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "c95283300000d07fc9b976d864f1c6e224b4084128152f0cc484b21608b28ce3bfdbf1fdc1fb01392194f36cbe37b4072f60cf25e3488ee7bb6ec92b49d721ad980a4d143509d69605f5b10b87cdeff64b5787a8a5ee94a30885fee7b5883ea8682796280b02f3159bb0848d481f1b287dc590a982f3da96161db991720f9e3051436fced1508bda6d4f95cc245118608833377cc24e8597777d2815ecdc5ae79c1a322c6746ed51d8cce0c27a575854ce0bd6495b9188c229f0aaeb5a2b6f725d634bd5b2ef58070740b7a19a28cfaac74c7e368c03f86f66f33ed0c7d5a2f94427f0fb07bfefbd1d05010000",
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
      "Mon, 05 Oct 2020 16:37:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1601915854258",
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
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b91f74adb9436bd49d5e84a18d5da14d214344d53e4382799218943ec1418ea7fdfb1431908099e62fb7c9773cb13b9e5454c2624e2e95d0dd5e3971b119123028aa6f82a92870beefc585e3cdc2c2ecbe1df87bcfcb6bb9f4e11c1354bd2bccca025455d319093eda69d56a22e6925440b855ac356776077c75d67e4f48f9d11d22464c99217b748fea35429279dcec1ba9d0a9166404b2edb4ce42fef9ddd71a7acc40d30253b6f1d3b68223b1f7a7ecd04a38a8b62badda07f2da10a21a73cc30cfe13e3e8e4ad729bd3bc9d2278c71950c6445d289d154a3051243cad2ba34a264fc464f9ea4036eed29d071613599d1761417338b262aa68a81e4bb0cefcf5ca5a78676b7f350b166b2fdccccfddd5ac3d5f2fb72b6f635d9fbbbe6b291a6560b8d6d43a31370f2fe81f8354bc30ee817ed6cecffd59bc1f8a26a0b58426180eed01ed8eec71944443968c7a4e94d81045a368e8d05e64b3711ffa71041479c6d4b068218a9e43e363a7df0b9d2419857d079c708c3aa1ed303ab0fb8cc64320fb23725f7105a75c9642f2a643e4da5f046e18f85b6f3e0b5c534242eb4c9d3689e9025ee7a8b040047d50d35e47b94027ddee8517b8fe6c1e2caedc66c24b48297bdcdce18c139a494034adb0790aaa9588b161c49baddc53049b895d1c82924c7e3d11dd739dc5ab96bfd0031ca04e57992fd904fec2fb6ed23920ae68561bc8ae39e832129ee9a4f7bf11882bda8890cbadebff24cd930f095450b0cf87896013f8ec473bac3d4271f1d1452abce3e630a93d5805cd067153ec813db47b03871870",
      "a5dec550fbd033ada1152187423d17d4ac3dd6d998d5f20584411cbe677ab5ff076d09748374040000",
    ],
    [
      "ETag",
      "ofxPi5KLPxjIQp7zxmpBvw==",
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
      "Mon, 05 Oct 2020 16:37:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1601915854258"
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
      "000002ff8d93614fa3401086ffcbfa9526a529b592f881def5b409b64a692ee6629a951db8d585c1dda5a636fdefce52af1abd04bfc0ccf04c76ded9971d7b94956021bb97c553037a7b5280bd714102a651d6d0abc6ca00f318585e1039193cc7bf93db8b171d9dad167694c6f120b8393f27c2647fa1e42cdcb15c821286857f76ace225505b86aa29ab759b79cc6e6b575ca6c96c7e417989c2e5f3551c479378caf6deb15170cbd72dff8db6bbbdc71ef03e811c345419b8596a8d0f90d999936978592be8196c740686b570fba1d0d8d45c23f6a8d23bedf9a3be7fe607e3603808c6c429ccb8955811ba5ad278cca2e52ac16712c9fc0111ba8d4970de3e375497a215e2c2d93c1d0ddbf93e02b9d4c61e76f20f7cd3f69954fc9b205d80545d50019500dd45c97acd85d0604c278966cdebfa884d168bf80bc42ba1518a6e70233b00653747e057bc88feb75ab2cdfbae7e46e9f40b612c99e188a4b3abe9328daeae1d77f776bf93ad0573ad91bc62c0d9c4ef0fc7c1e9a87f70ce0f746ea27342ab1bf058c6e907b8949685395706f6afe112788a5e030000",
    ],
    [
      "ETag",
      "B2wLWRYGzrA9UOt6TLL25Q==",
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
      "Mon, 05 Oct 2020 16:37:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1601915854258",
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
      "53db6e9b4010fd15445fdaca36609b8b2d45adebe006d5971470ab3cd9bbcb403601d66197a469947fef80ed3451a4e46d3573ce9c33977dd0af7999e8639df2eca686eafec395a07a470745328c9e713e5c9ad1b9b5384f647ff8e3effccff5fceee40411bc614952ec72e84a51570ce4781df5b24ad43b5209d1c5425daf6b39a635b26ccf1ef66d0f6912f274cecb6b245f2ab59363c3384af73221b21cc88ecb1e13c553dcb8ed1bbb4a5c0153d278a968a08834ded4fc920b461417e5c93a42fd5a42b58182f01c1dfc2726f4ebcbca3d4e8a5e86e05bce803026ea5235aeb0041365cab3ba6aabeae307bd75f9eca147fedc9fc6dae78e164d66fe663a89e28f5ba95060ab11a94571182cbf7f6a9edbcde6b2b8db6ab370b5d0b6d865ca73905b6d159efaa1f6ed423bd226d1b4a36d79d2beb479b008626da8ad66b3c88f35135d2520152f5b4f31a139347e0e530b5eafaa21104524ec931bd77488e599239a5297a5dec0a6a909947ad4b5c9809a6c3484614281204f35d55b1629458950e2da969dbad44c06cc753ddb05e650878d1c30fb09a32e982975f4c78e7e577105a75cee84e4fbd9e9bfc320f63771b85e4e27b1dfb691923a57a77b734d13cf7d2a6c12416ff4f5d864b940a56611c132f6c3c9340e7ef9fbddcf2123ec3ebac1eda72497806852910214540b91e0d0f4f35514c4c16a399937b5f0a0e2fb5d13ffb9f6c38b432884142a28d9fb4346709b78ef5b1c8f14a178a6a8826b571c37ca64a3c12ad86f96178d9723dbb51c6fa8b7e04abdca79ce00734fc7d95484024a7568687fa4fae341ac964f204ce2429678a398fd0786152eee22040000",
    ],
    [
      "ETag",
      "Hii4N0SP1MPds24KzLxkLw==",
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
      "Mon, 05 Oct 2020 16:37:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1601915854258"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d955d53a3301486ffca4ef672db0c2180c08c335bbba875faa16dbdda713a29a41805529350d771fcef1b5081ae2c63bd28cd3979df729e9c247d06f72c8b800fd62c7ec8a978fa1e5375550ce654e68992fa6bcb3349410f504562ad5cdc0e87e7eb3cbc78f0f0ecd25dc7e461caaf8e8fb54286b73425c07f061b46934802fff733c8484ab58d455aa09eb6c578345d0667c15c27521e1589e9f5783c381907e0a55719364c48b52a83cab858ce47d3b36e5f42be64d385b3e4304b4cb3888ac33c6cbb225124a89407fab85c91edb6369dcc66e36030ed76912c129c455f70eed8a18e44ed6ac7e978365876eb23a21a2dfa355806dd7aa948daa869399a048be56072d9ed5aad6ed3c7cf2cf5cd4b0fdcf1f59c6ea8a059488b5dbc15fc8e866a541c10a9df9ed0bee4b90869d13c2d2e2762c1f32d119cf775a6eff69163200fd9ae6d99b6ab75090f89623cd3d2eb852e0d28ae4832e78ffa78004b0b4439d42765533e773a8d4a8462140846abe0828a1d67b28ae9dd6bc2f849ff94e5c190a7d5ec8424b515d9d0b48e2076e191592595c86bc5862492b64f99b607516d330dd3e81b66dfa8cb44d0760ddbf69067055e8bf01b327d847d64fd308c72ad9bb4f52f0f49c892067050ec91f720a43a42ada8a7faf426cd7a314496032d04cd46911d84fb539e05b1f391c2dcc7752c0ddc8a6b76e2e2ca7026a8a24923e479c8c3fb2a11c76f19f353d4084157370a191061ebe0263b8e0bf14716bc0f7d8491d70e8d3ba1eb7a062951a4ee3857546eb888aa0c09df53f833d4c8c3d0d37bdbd01fa79decff81a5d7cbf88862ed33bbc8c5edccd6bfcc376fc7fbe449335c0aaeaf0a498b5bc273f0eb9d31e40591ded67e51490f8444ff699e3305fcb2372f7f01dbd705fc92070000",
    ],
    [
      "ETag",
      "ShCCHbucJq93OP8bgaqNoQ==",
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
      "Mon, 05 Oct 2020 16:37:52 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "db",
      "6e",
      "82",
      "30",
      "18",
      "00",
      "e077e9b5982283d0dd61848d300f54318c9b06ea0f322a022d27cdde7d66df1b7c4f94720e523275afa046ef684e5764c997c1dd5e1b63ae6de3f25ce03ec2054f1e1bd70f738b1e858b9daec8a82135cda80fc1e374b2bdda12f8dbbfe270147edbefe7d1e1147f1eafaa2d53e82d18d8ee32dbc089e9dd9c76b442d1b4893abb2940a658566df349da742389365447fd0dec396ff6b1a01ed9e126cae830e914a4d7b11c2789e38ab054ab6e3a0451ccf49b131af8c364ea8bcdc64f5825417df1d102c1d4941d4856be668649c802fd37999a1b785dd79076d0a1df3f9459964005010000",
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
      "Mon, 05 Oct 2020 16:37:53 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1601915854258",
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
      "85536b6fda3014fd2b91f7b53c42080424b452485724085b12da55d314d9c649dd26318d1d2a54f1df77ed94ae55a5f6536cdf73ee39f79167f4c0cb2d1a23c2b3c79a55876ff782a033c414cee0f502479bcb7d9efd9e077170d7bb20b7ee1a3f4d2680e09a2571b1cb594b8abaa24c8e37513bab44bdc395102d48d41ab5ec41d71ed9aee7f67bae0734c9f274c9cb0720df29b593e34ee724ddce84c87286775cb6a9285edf3bfb5e6757897b4695ecbc57ec8088ec7caaf93d17142b2ecac92602fd5ab22a6105e63938f84fdc92f3f799db1c17ed0cc07b4e19a654d4a5d2ae20051565cab3ba3259d1f81919976f0e28f297fe2cb6a8c8eba24c4a5cb0336b8b154ed461c7accb70bdb216c1e53a5c4de3c53a48a2d995bf9ab667ebe5661544d6cd951ffa96c22467866b4dac73730be002fa5b26152f8d7aac9fb5f24b7f161f87a209202d59134c86dd01b6bdee88a4644853cf7149da65847864e8628774e9a8cffa5bc230f08ca861e152946ed7c629a134e939439af41dd74946d8eb25c41ee0d41950b78f47e878869e2aaed89ccb9d90bce910ba0917b19fc4e126984d63df9490e23a57f3c6982ee0ad47050502e8939a8e3aca0528e9762f82d80fa7b37871ed37135eb20cd343f408334e712e19a07105cd53ac5a892d340c05d3953f07b099d8cf5350a2f19f67a47bae5dbc69f92b3d86016abbca7c5114878be087b173425ce3bc36907d73d065a43cd7a68f7f01082bda2441bf367e788b9aa790a5ac6225fd7a98003681af7eb4d3da0314161f54a4823b6c0e955a8356acd9206e8a3db1878edd73910157ea43ace7d9a79ee91c3a232b58a95e0a6ad61eea6cc46af90a82200c3f30bd3afe0337a1de5774040000",
    ],
    [
      "ETag",
      "BaSUFvlgXDNTNh2BbY5Oaw==",
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
      "Mon, 05 Oct 2020 16:37:53 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1601915854258"
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
      "93",
      "51",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "bf",
      "8b",
      "fb",
      "1a348280d1487d8096ae9152a0217da8aa0ab9f1253375729eedb021c477df39ede8b44e4a5f92bbcbefe4fb9fff39b017590b16b16759fe68c0eccf4a70773e48c136ca597a69ac2db08081e32591459e26db9beb4bf97077357c88bfc85fab812e2f2e88b0f977a8388b0eac90a08465d1e381d5bc026acb513555bd69b380b9bdf6c57596c68b6f9457287cbeb84f92e92c99b363706a14dcf14dcb7fa2ede918b02d3ea75080813a073f8b36b885dcc55ea6e59556d0b3d8981c2c6be1f64369b0d1dc20f6a8d23bef85e37e781e8e26a3e16034214e61ce9dc49ad0fb358dc71c3aae52fc4922593820c2b431092edae78eea52b4427c182fb2f1b09def6fa090c6bad79dfc01dfb4fd4b2afe49902e40aa2ea8845a80e9a2a4de70210c58db49a2dd70ad4fd86cb94c3e40bc1606a5e80677b203506e7702ae93e5f47fab25dbbcefea6a9acd3f10d691194e4816dfced7d9f476e5b9a7b7fb9ded1dd89541f28a056f93b03f9c8cbe8efbafceb944ef263a2772a68180e59c7e801be958547065e1f81bd9d06ff85e030000",
    ],
    [
      "ETag",
      "fcRLjHFCiYQD4YI/ixP2pg==",
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
      "Mon, 05 Oct 2020 16:37:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-04T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1601915854258",
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
      "53d96edb3010fc15827de9e183b2255f8091bab69c0af0914a74d2f4804d4994c2448723520edcc0ffde9514e74080e4890477666776b97b8f6f44e2e3017645789bf36cffe13a75710d73c54278fd77fa3317d3dde48b7961ab7dee84ca9df7c2e11010a26049166f235e97699e795c0e564e23ccd27ccbb234ad43a2ba46ea5a87687dcde8197acbe8014ff2289889e406d8574a6de5a0d93c6a37c2340d23ceb64236bc347e7c6fee5acd6d965e734fc9e64bc926a8c8e6dba22751ea3125d264b872c0402e79b6e6311311587862faeed797a91b82c58d10c03be171e679699ea8c216a4f0d22410619e9559f1e01e97369f5db063cecc31459f6bc8194dcdf578e4d08f1ba940608398440eb5adc5e9a7e2ba59afafe2bb0d9adacb39da40998188b8dca08befa66da223e74f4e489b0fd1095ada13d346df2e1f4323675c431be1973734b3e616453a5a4ea78e491101b73e974a24a557cadc88173e1fda69bdfec482c01493bc0aaebba4c3b41ee9bb81dbf5825edb7003c25db7e7760dd67689d7d7b9eebb9c014f15d94b164ba043469ffba4e3b6bba44fba006b31ad4d7abad7627ac7e806be16187a403af850c37799507c22e43695a2ea29beb02d6aaea9bd5a8c47d42ccb08581ea94965ae28e2b94f054502e88dba0e4554a4a0547c90b5a0a63d1a53ebdcac6662c643e6ed9d5b988a804592039a652ce68a67f3d487a6e1b3a563516bb918cd80517ef4d91121f1e0f7fd1381eeb765975579626acd4d878ee667a58723e89c457989da5517dc222d5227ad3ad1a9d61a68ed81a6370821bff0e1f0178830da555efc6365da97b87ab279c0339e78efff2a80cbc0bb1b7a5c17c0c2c2800c0c9a1230439e2c44bc8c57b324e2c2cc91ddd5818f4b70a65ec53afdceb169458e22238f79a21e2aaad6050aadc472f90882",
      "208cc002b605a2ff017e873fd5ae040000",
    ],
    [
      "ETag",
      "zGXuiFvD+EWRtyuSgtbM8g==",
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
      "Mon, 05 Oct 2020 16:37:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1601915854258"
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
      "9d",
      "95",
      "6d",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "bf",
      "cae4bd1c44719e13a9d2429b766c94764035695385dcc480a91367b6a14355bffbecac4da06511f405c177be3fb99fefce3c827b526420027764fe7b85f9e6e31ccbef7a31c26245a5505f252b04061d80259aabc8cbc5c378897ef6bc1ff7179b78791eaf51ba8c4f4e548448173847207a043382692640f4eb111428c74a4632152037a55ef78793e422192947ce32ed18de0c06716f9080a74e2d98112ee4b4326ae17832ea0f2fda7514bd4ba61227f438c91c1719e6c76948394559c6b11047ea9898a2b26c44bdabab41120fdb55a8c83823d93b946b72ac82ca75a3381f5cc593f6f80cc9ad129dc593a43d5e48946fe534e95f26e3497c79ddae9a4e17f9c321477dfbd4014b7637c233cc719162ddc525674b9ccabe1e10a1de4e7157b0154fb12e9e0aae36e69cad4ac419eb2a4f179a5de89930846ee03a961ba840ca5224092b54eccd58e5062493888ed8839a0fe0a8005e2dd5a8ccaae7ba726b06bd8a7324516d9d3289c58cf1acf6a0f4c5657fc67faa248d94e5f5feb96a6c8a6b1386b6111a9663aa8f577b255fe1030c27080db3b62cd332bba6d5359b64a1e1066600033b7492704fe0076845d08ea0f3c934ab23df66766bc180f006f92b5b1442aae37b71d0e5b3c73904d8b50de8e9bc8cb0c96886a8f80fe3ee566069f95b12771739341d7f3fb2db8adcfcf2192e486d8c534449730299a86cf7a0fada81016d684027307ce710c49d2dcb57ed11bcc5f05ef18610eee7f55a79fd5af005d37943f88d62226a6b71af4def10dc",
      "c0557d1c188ad90df613b574b3e91b5b85ac11fc1d5668fabebb9fd57fcd7afb3cdbbd8d1ac96bced44521b0be2342cffe77639c324da42ebe48a7d20129527f995f8804515594a7bf963bf87990070000",
    ],
    [
      "ETag",
      "MhwSjaZB6WkGyAjFAvacjA==",
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
      "Mon, 05 Oct 2020 16:37:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
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
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d07fc9599d22b2a4b702010a543691ea2513d2c8be0c840a76faef75fafee0fd0042299b26ccfb9a75e015ac640f7774e7f6aa26ded95a04ead550ec93ffde9a4295caedc293fc20a75e73a4726aad9f5e84158ca565df20aca241661fce964dc3d9bfbfbc15702be909cefc341fcd4ca9b4e8da14b9abc9068182e5dc785d35a5265428fe76fbd4e661fc454a32777577bc703310dbccf444c7a7393d8c2a4974dccf683f5fb896e1a9088c7360c891ca6dc909d3c13b59498862a837a265a2e5f648c006b065284736e1f23913250837e0bf89f93ab0e75563646423f8fd0354310d2e05010000",
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
      "Mon, 05 Oct 2020 16:37:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
            parameterValue: { value: "profiles" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1601915854258",
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
      "02ff85536b6f9b3014fd2bc8fbda849084e621456b94d21529212b903e364dc8980b7547708a4db7aaca7fdfb569ba5695da4fd8bee7dc73ee8327f29b571999929417f70dd48f5fee444a8e08285ae0ebdfab28bb1e3837757c7b3ebe8e4bf5a3bce8cf67334470cd9274bb2ba12345533390d34dd42d6ad1ec682d440713751ca7e31cf79c89e38edd61df1d234f42992f79f51bd9b74aede4d4b60fdadd4288a204bae3b2cbc4f6e5dd7ee8dbbb5adc0153d27e2b69a38ab43f16fd5a0a461517d56c13a18146429dc096f2122dfc6766e9c9dbd45d4eb7dd02c10f9c01654c3495d2b630051355ce8ba63659c9f489189baf0e24f296de22b698289b6d9554740b475646154dd4e30eacb370bdb2fce06c1daee6b1bf0e926871eeade6ddc57ab95905917575ee859ea5685a82e15a33ebc4dc02bca07e0652f1caa8c7fa592b3f37c87f3f164d4069096d3019f58ea933ee4dd23c1db17c3c70d3bc07693a4e472e1da43d3619c2304b8122cf881a16ad443562c08629838439cc4d866e9e27140012c8d9209bf453702923fb23f2a7e60a4eb9dc09c9db0e91abd08fbd240e37c1621e7ba6849c36a53a6d8de9025e7b545820823ea869afa35ca0926eb71fc45e385fc4fea5d74e780905658fd13dce38a7a50444d31a9ba7a05e890c1b4682f9ca3b45b099d8f7435092e9cf27a27bae5dbc6af90b3dc6016abbca7c4914877ef0cdd839202e69d918c8437bd065e4bcd4a6f7bf10883bda2621171b2fbc21ed530839d450b1cf87896013f8f4573bec3d6271f351462abce3ea30a945580ded0a7153ed813d3a767b1362c0b57a171b0d2787a6e91c3a236ca152cf15b57b8f85b6628d7c016110a71f9866edff01e6f0f5bb77040000",
    ],
    [
      "ETag",
      "xWSdX31YrThH8XTltZlQ2A==",
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
      "Mon, 05 Oct 2020 16:37:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1601915854258"
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
      "00000002ff8d93516fda3010c7bfcbf5354804114a23f5216cb031056843cacb5421135f32774e9cda0e2d427cf79ed3964deba4f425b9bbfc4ebefff99f23fc1615871076a2786c501f2e0ab4b72e48d034d21a7ad5aa32081ea065059187324e527f3398453f9e83d978badb6ca2c5d3f5351126fb852583f008b940c90d843f8f50b112a92d53b229ab6d9b79600fb52baed364befc4679a9b8cb9777711c4de2299cbc732367966d5bfe136df7270f1ed42ec11c355619ba596aad1e30b37327d3b0b296d833aad1191a68e1f643a1555333ad548f2a3ddfeff9a3be7fe507e3603808c6044a95312b5445ecdd9ae603ab2c93897a2295e00f88d06d4c8af3f6b9a7bae0ad1217ce97e968d80ef837900b6deceb52dec13771ff92927d12a41b10b20b2ab0e2a8bb28516f19e71a8de92495d9b2ba3e6393d52afe00b18a6b257837b8171d80b4fb33308b57d1ff564bbef9b3abaf513afd40184b6e3823e97c315da7d1e2c671f76ff73b395834375a91590c3a9ff8fde138b81cf55fadf345393bd139a1d50d7a9031fa03be0b0b61cea4c1d30b2e6105445f030000",
    ],
    [
      "ETag",
      "ymLRT1V2FAJx5F8EbVVAMw==",
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
      "Mon, 05 Oct 2020 16:37:57 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hmw` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-07T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1601915854258",
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
      "000002ff85536d6f9b3010fe2bc8fbb24d4d6248082152d56529ddd0f2d201ddd66e53629323750338c5a65554f5bfef80a52faad47eb2e57b9e7b9e3bdfdd918dc8576448b8585f9750ecde5d494e0e0868b6c657f3db6673fe2bf3af76971733fb72c7e5243dfe7e78880851b114cbb629b4942c8b18d4f02c6caf0b596e5921650b13b54cab65f6a9e99af6c0ee59f600790ad26422f20db22fb5deaa61a7b3d76eafa55ca7c0b642b563993dbc776eacceb69057106bd5792ed94115d5795df4289531d342e68767211a2815140bc89848d1c22373c53f3d4fdd162c6baf117c236260712ccb5c57b630452cf344accba2ce4a8677a4b6f9e442426fe28d23e3e381118e4ebcc5781446ef974aa3c0d260ca08a3c09f7df9505d978bc56576bb344e82f9d45862998948412d8d9f5fbdc033f69c3f25a55d38348e8c7970ec05c6e7f387d0281c1f184bb1aa6fc6c49ffa91d133e62727a1171914ddae406991d75e23c653a87cfe6fa7fff2132b02d34c41135c38b4cfcc017579c29d3819746d9e50e07cc01d9b75398ddd1ef4561c18f27495bd66b15ce65d4a61d0735db6eadb9c3bfdbe6b5b16e32e74fbe0f66dd3ee02b7e39e4bee0fc86d21341c0bb5954a343d253f033ff2165170361b8f22af2e236165aa8f1b7355114f7d6a2c1241afd4755f458544a5ea83fc59e405a371e4fff09a9998c09ac5bbf01aa72261a90244b38265a0a198ca15368d9cce433ff2e7b3d10419f5479fee118a0c7fdf3d12a2ddb6eeb2ae4f12f9532f8c46d3d3dac31ef483a5658dba692ec4a2166d51ab459dc8b486667768f6da94d20b727fff178938da4d5ef2fdcc0bce49f314400205e4f1dbbf8ae03af0e686eed705b1b830288383a605ce50ac2a91b8806696445699d9b31dc7e9d7fbad59a15fc4dcaeb36f5a95a3ca0819e4fa7f45cdba60a18d58a91e4018c41198e1b660f41ff6a4cb63ae040000",
    ],
    [
      "ETag",
      "1KkkYXmIjyhZN5hyboLlDQ==",
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
      "Mon, 05 Oct 2020 16:37:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1601915854258"
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
      "9d",
      "95",
      "5d6fda301486ffcae45d16323b1f9020551ab42963a5b4a5e9d55421931c825b1333db6987aafef739d994c0ca22e80df83d39aff23efeca2b7a6259827a68ced29f39c8cde714f46d319882cab956e66f2d3205a88540d3d4747ad1d589e097cbf35bf8422ef3ef78c86ed297d353d3a1e225ac28eabda205039e28d4fbf18a32ba0263638969d09b75311e4da270184e4d612592a230b91f8ffb837188de5a9561c1a4d2b35254c6bb683a9a0c9b7d9c7ec86682337e9c25852c01799c87ad673449242875a44fa8195daf6bd3e0fa7a1cf627cd2e9a2552b0e403ce6776ac83ebe7da7131beee47cdfd09d55b4b74de8fc2e67ea5e96a2b5334ba0aefa2fed54db36b365bae5e0e99ea87b7167a14f3292c40421643b18bd7523c42ac47c50151e6ed1cda4ae4328662f14c73f92095225f532944db54dac46e930e2601f17ccfb53ddf34721153cd44667aefef4c36a485a67c2a5eccf940ae6990e5d01c9545f9fb6ccadd92a1187d039ed24a5d7260aa52cba74276bec2af329c158b55f5ecc26c680e95f43dcb767dcbb74cb0aaa8650e070817772dec55d2c6366e63bb8deb90c4f27c82bb5d2f70c3604fe32762f788d323ee09c6e5546fb3d679862035abdf7b96cf99d6954ce352770fc125b663d99e6711071beeaabca05cc17fd40eb2ef12cbdd83ecef22938e13ec47f61b916bc338971c20abf4c06c06e0bcd27cfea7e01f426d3bc4ac6f601970d7d90fd634031d33698efb9e25d885b63decec870e1aa109ae1ce742eae5a69223a5453d05092b647008b05bec6a62755ccbacc421ebbafbc80eb0e539ef38b68296c08ed3e9ee0526f85fe087bfa77bb0d1a06ea430578582e296084cbef2ce38130594b9fa7a45b0168aa9f9687e631af5ca6c6fbf018353d623920700",
      "00",
    ],
    [
      "ETag",
      "5TM+olKhDQe/1KuJ0GiPgw==",
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
      "Mon, 05 Oct 2020 16:37:59 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
