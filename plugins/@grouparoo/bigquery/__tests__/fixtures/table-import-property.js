const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1630610362910";

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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad0e8250d25d09969f609402da0d8334fc554c10029ddebd4eaf51df1dde3748d294301677d79a5cc02b1813112ed285d3aa9a3e14b5a1a583ffb979d97797f568c046981f974ccc51c125f74e0946f0c323b71ac262f03b05614e4e46d6bba13829e17d759205250a9cdca66fe77a8dd3e0fe3ea9dbd1e351e65955b98f0c1a597d83d9ce2fcfca8d0935327375345d47df06a11d94081df2ca596fc6edca328f4b556a124b3403ae61e6d27e878da4d191d556d56169a17393c9e6972d5f30bf4ea97af355a91cf48157f27c0879e67a7e775d3c3dfd5f6006086f4b4a585c3eb64b328433f0573feec6963cfe6b24a184829f5f19de16f619040000",
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
      "Thu, 02 Sep 2021 19:19:24 GMT",
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
      jobId: "grouparoo-job-1-1630610362910",
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
      "000002ff85536b6fda3014fd2b91f771050284a7845644d33512842e8456dd34458eb9c9dc2631c40e5d55f1df77ed14d6aa52fb29b6ef39f79cfbc83379e0c5868c49ccd35d05e5d3977b119333028aa6f85a7afb9f372abfbedfed92af49afba137f978bc7c904115cb324cdb71934a4a84a0672bc5e35d352545b5a0ad1c0448d76a3ddefdafdb6dded77466d1b6912b264ce8b0724ff516a2bc7add651ba990a916640b75c3699c84fefad7da7b52dc53d30255b6f155b28225b1f6a7ecb04a38a8b62b25ea17e25a18c20a73c4307ff899bf8fc6de626a7793345f09e33a08c89aa50da15a660a248785a95262b193f13e3f2d581acdcb93b0b2d26b22a2fa282e670666da8a2917ada8275192c1796e75f2e83c534f4967eb49a5db98b6973b69caf17fecababd7203d75234cec070ad89756e6e3e5e507f0352f1c2a887fa592bbff4c77b3f144d40690975301ad87dda1edaa33889072c19767b7162431c0fe3418f76639b8d1c70363150e41951c3a205d6cc288b87fd4ee420267206493f1af5fa836808a38eb3811e1dda6d7238238f255770c1e556485e7788dc065ee84661b0f667d3d0352524b4cad4456d4c17f0daa3c20211f4414d071de5029574bb3d3f7483e92cf46edc7ac27348297b5aed70c609cd24209a96d83c05e5426cb061c49f2edc0b049b895d1f83928c7f3d13dd73ede255cb4ff41007a8ed2af325ab30f0fcefc6ce117143b3ca40f6f5419791f04c9b3efc4620ae689d84fc58bbc11da99f0248a084827d3e4c049bc0673fda71ed118a8b8f2a52e11d378749adc14aa837889b624f6ca7db1e10032ed5bb98e30c8e3dd3397446c8a1502f05d56b8f75d662953c813088c3f74daf0eff00985362fa74040000",
    ],
    [
      "ETag",
      "rIvZVtmPjqqf+f5uYoxOMw==",
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
      "Thu, 02 Sep 2021 19:19:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1630610362910"
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
      "4f",
      "db",
      "30",
      "10c7bf8bf7b8544a08cb58241e5a68215368599b3e208422635f82996367b6535655fdee3b0756a681145e92bbf3ef94bbbfffd9919f427192927b51ffeac06c3fd5e07ef86009b693cee2abd5ca020908385a2379f4fd623dbb39b9dc4cabd9ef2c960f76f6397e3a3d45c2b20768284977a41220b925e9ed8e28da00b6312dbb46957d1610b76d7d71552cb3f905e68de63e9faff37c3cc9a7641f1c1a3975b4ecf90fb4dded03f2a8ef97508101c5c0cfd21afd08cc657e4d4b9b56c2c8eace30b0a487fb83dae8aea546eb115646d1284ae23089c23839fa1685c849cda8135a21ba5ee178c46947e5523fe192248a91307d8c0b57fd738375c1fb457c98cd8be4b89fef5f8032a63be5ca41b012c6ba67f1fe822f22fc4f4afa41106f4ac821a806c5c10c51a22d29e706ac1d24b52d69db1eb0c96291bf554571a3051f06376200906e730066f962fc9eb4e8af57adcec7c5f40d611dbae68014d9d574558cafae3d77f76284c9d681bd361a4d65c1fb290a8f4fbe7c4dc2678b9d696f3bfc4eea4c07016114ff944be1485a516961ff07a16be31087030000",
    ],
    [
      "ETag",
      "2JGUFY8HvEfFxI3lhsF+3w==",
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
      "Thu, 02 Sep 2021 19:19:25 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1630610362910",
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
      "6d4fdb3010fe2b91f795b6790f54aa182ad916a92f90a620344dade35c32431a17dbe960a8ff7d97843210127c8ae37b9e7beeb93b3f913b5e656448525edcd7201fbfdc8a941c11d0b4c0db0773fcf7c1f676fefca61c4f2d1a4f03cbbf1c8d10c11b96a29b6d093d256ac9400d978b7e2145bda552881e26ead93dcb774cdf321ddf3eb14ca42928f309afee90fc5bebad1a0e0607e97e21445102dd72d56762f3723fd8d983ad14b7c0b41abc551ca0881a7ca8795a0a463517d568b940fd5a815cc186f2122bf84fccd2af6f33f739ddf40b04ef3803ca98a82bdd54852998a8725ed4b2cd4a864fa4adf2d5812cc249384e8c75cea5d2ab8a6e606d5065ac5612545d6ae35b3c9f1a6bf494f312d4dab8fe11c6a161ac79b63646c6a93189a6516258a89581d2bc6a95129a96d0a83cf7227a3f8086403555d0055781e953ebd83c49f33460f9b1e3a5b909697a9c061e7552939db8e0662950e4e9267bcba295a8eccc322dd70c1cea387e60bb81cbc0f27dd3b3733bf503cf6541000ef3c8fe88fc915cc339575ba178d711721d4749b84ae2e56c7c9684ad8d9ca2f1f3aeb8c6c4eb3a359a44d007bef64d940b546ada1bcd92303e1b27d155d84d740205658f8b7b9c694e4b0588a612bbae414e45864d2317f3459444f3d9d90419ed982e0e0845863f9ffe1392c76ddb65dd7e1b2ddf6df50f802b5ad62d62d71d8845f6fb5f88c0e5ebc8e47219c637a4bb8a21070915fb7c74086e039f3da1c3422314571a5594c67fdc13a61a0d26a1db17be69ab3bb03dd771480b96fa5dcc0bdc43639a1c4d46d840a59f0d750b8d3e3bb15abd803088639e45b3ef18fd07fcb749c24e040000",
    ],
    [
      "ETag",
      "x0Czx25v6OYlCM1aRM716Q==",
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
      "Thu, 02 Sep 2021 19:19:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1630610362910"
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
      "6b",
      "c2",
      "40",
      "0c",
      "80",
      "ff",
      "4b",
      "f6",
      "380bad6ec20a3ecc4d9c5044eb64c21039dbb4ab6b9b9a4b2722fdefcb757bb94b725f928fbbc17751a710c2b1c8cf2df2f52e4759bb2046db9662f56aa8b608034031b9923b3cf34776efb7f3ddeb7a25691605cc97c944099b7c616520bc415660995a083f6f509b0ab5ed70e07ea262726d5c65f31e2f9673cd2b4a5dbedc46d1f3349a41b7ef0670a2638c1932d609ba890dd309135938596baaa644cf52cb095ae8e1fe21676a1bc3449e56bca1178c47fe38f047e3e153e02b575262a4a05ad1ed06748b909832a68baa42a000f7a15a67fdf9a3e51917e894f6fff4f42a68574cbad9a25b1a3c3efc29bc90d312d5156e710089d1ff782b04c2cc9416bb5fcd908d736d010000",
    ],
    [
      "ETag",
      "XeqrWf+0uGXDQPtdfL1rrw==",
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
      "Thu, 02 Sep 2021 19:19:25 GMT",
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
      "000002ffedd34b7282300000d0bb64ad0e6a50e84e080ae2272a3fdd6442081f51c18002767af73abd467d7778df8032c6ab8ad445ce6fe00b7474a40ed8c02e150d35c9062fc4cbc134d6fca01ddb9e594f976857ab5bdfc2ce2ca44975661e42a7e32620164c4d5b90ae9f8639749ed53e2fa9e35ec3696c193bace8c654ac0ec14d4682b8c61cbac9e2856c693b4c9d58a781c7e07cd41ea34783d4f66e0abcaa144fd6a408cfd9ea3a54bc59a713ad7fa883c6d9c33486cf65365a5bc1e95ce413ec6f595be897223b48a6cd4e72378165737d2c71176dfae6daf52e335964f75d3df8f8f8bf400ff0b6cc04af48f6de3e9655b507feea93ba2bf9fbbfc6a9e002fcfc0257de664319040000",
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
      "Thu, 02 Sep 2021 19:19:26 GMT",
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
      jobId: "grouparoo-job-3-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fdb3014fd2b91f795b669d2b7548dae8451a94d599a82609a22c7bdc90c691c6207d6a1fef75d3bb40321c1a7d8bee7dc73ee23cfe49ee71b3222314f1f2a28775fee444c4e08289aead7fc6f32dfdd147faebf2d85b8bdebdf3acee5d3788c08ae59926e8b0c1a52542503395aaf9a6929aa829642343051c36db47baedd6bdb6ecf19b66da449c89239cfef91fc5ba9428e5aad8374331522cd80165c3699d81edf5b8f4eab28c51d30255b6f155b28225b1f6a7ecd04a38a8b7cbc5ea17e25a18c604b79860efe1337f1e9dbcc4d4eb7cd14c18f9c01654c54b9d2ae30051379c2d3aa3459c9e8991897af0e64e5cdbd6968319155db3ccae9164eac0d553452bb02acf360b9b066fef932584cc2d9d28f56d30b6f31694e97f3f5c25f59d7175ee0598ac61918ae35b64ecdcdc70bea6f402a9e1bf5503f6be597feccde0f4513505a421d8cfa768fb607f6304ee23e4b066e374e6c88e341dcef5237b6d9b0039d4d0c147946d4b0682ef2a10b0973a01d0d69dc893a6e67180d681b221bba3d68bb4e7fc080ec4fc853c9159c715908c9eb0e91eb60167a5118acfde924f44c0909ad3275561bd305bcf6a8b040047d50d35e47b94025ddee991f7ac1641aceaebc7ac2734829dbad1e70c609cd24209a96d83c05e5426cb061c49f2cbc33049b895d1e82928c7e3e13dd73ede255cb8ff41007a8ed2af325ab3098f9df8d9d03e28a6695813cd6075d46c2336d7aff0b81b8a27512f263ed0537a47e0a20811272f6f930116c029ffd6887b547282e3eaa488577dc1c26b5062ba1de206e8a3db27b8eed10032ed5bb98db1d1c7aa673e88cb0855cbd1454af3dd6598b55f208c2200edf37bddaff03d477c56674040000",
    ],
    [
      "ETag",
      "bnzfLyYpxWBOooZj7Z22Pw==",
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
      "Thu, 02 Sep 2021 19:19:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1630610362910"
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
      "9b3010c7bf8bf74a24585ad621f521d9b2350a0d4d42b587aa42ae7d3077c6c76cc31445f9ee3b68974d6b25fa0277e7df89bbbfff1cd80f65244bd883aa7eb660f7ef2af09b3ed8826bb577f46ad038600103cf2b22bb322b572a74edeaca772bbbb9f8768ed9e6f2920827be43cd597260a5022d1d4bee0eccf01aa84da06e6b530c59c0fcbee98bbb7cbb5c7fa5bc46d9e7ebdb349dcdd3053b06a746c93d2f06fe0d6df7c7803de2c3164ab06004f4b334161f41f865bfa6e375a361e2b0b5021c1be0e1a0b2d836dc224ea832994ea2781ac651388ddf7f8c42e2340aee151a426f77341ef3e8b9dee22f5a92455322ec10d3c2e5f0eca8aee4b0481f2ed7797c36ccf72fc085c0d6f862142c9575fe49bc3fe0b308ff939abf11a49b527a0caac048b063946a0a2ea505e7464974056f9a1336cfb2f4a52a465a54721cecd408a07d7702bea4d9ec3569c95f7fb5fa3ccb172f08e7c93527245f5e2f76f9ecfaa6e7ee9f8d30df7b703716c9540e7a3f45e1d9c5f987387cb2d827ec6d47df49bc6d216082d39f72a53c4b4aae1d1c7f036fc6ce8387030000",
    ],
    [
      "ETag",
      "vfOfKi0suKHtvKrQ8W5oOQ==",
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
      "Thu, 02 Sep 2021 19:19:26 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1630610362910",
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
      "85535b6f9b3014fe2bc87b5c13202484448aba28651b529ab6405a55d3941873606e01536c524555fefb0ed0f4a24aed13c6e7bb9c9b9fc83d2f623225114f1f6aa8f6dfee44444e08289ae2edfad6f96e8fe4e304e632dc9f89c05a78c67c3643046f5892e665063d29ea8a819cae837e5a89baa495103d14ea0d7ba66d19b66958f660621a489390254b5edc23f99f52a59ceafad1ba9f0a9166404b2efb4ce42ff7fa6ea09795b803a6a4fede514713a97fea799a09461517c56c1da07f2da1da404e798619bc12e3e8c77be53ea7793f45f08e33a08c89ba504d5628c14491f0b4ae5a55327d226d966f0e247097ee22d4b699da6d352ab5cda60259674afbe95f9c6b5b2c26e119c8ad76f3dbf55d4ddbf278abcdb4536de99d7ba166a2490c52f1a2b50869944123ffdc04ef63e71b0255544217dc8c0d9b9a8e31899268cc12c71a45890151e444e311b522834d86308c23a0c8538d7acba285280cb0ad416458743c8c8dd81845236a4f001cc606cc61809a30026338248713f2587105675c9642f2ae15e4c6f7427713faebd5621eba6d1909c5c2cfbae49a22dee6a9b048047d52d7a18972814e4d5fbd55e8faf345e85dbbdd28979052b60f1e709809cd24209a56340705d5b988b169e4f222f042ef62355f22a39dcfe51121c9f4cfd32b21dc976d9755fb6dbcecb6cc17c035cdea16b1eb0ec42487c35f44e0d6756472b576fd5bd25df990400505fb7a74086e035fbd9de326370f33685ca4c27fdc13261b0f5641b72f3c6fb33bb2c786e590165ca90f31d3718e8d69341a45c8a150cf05759b8c757666b57c016110c7bcf256bf30fa1fe278d01247040000",
    ],
    [
      "ETag",
      "UY8+65sw9eAsTyDoS3CI0A==",
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
      "Thu, 02 Sep 2021 19:19:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1630610362910"
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
      "6f",
      "82400c80ff4bf73858001d4e121f70997109d914e7d362cc09858140d9dda16186ffbe1edbcb5ddbfbda7eb91b9c8b2685004e45fedda1ecef72d45b13c4a8ba4a2bbe5a6a148205a845cee42ebcff596dafb3f5b94c2fc553bb994db3345f2c9850c917d602821b640556a982e0f3068da891db8e47394e644cf7ada9aca2f7f083d39a5293beeda3285c462f301c060b4a3ac598a1c4264133b0955462a25f8dab12755ba1ada893092a18e1f12197d4b54212d95cb1a7b6eb4f1cdf7526be37771de62a4a842ea86174bf03dea2498b2aa62b9b82cb801c4396cec6f3c265ef71fee07a46eaf0cf2f7b8d6a2389772b346b5ddff993782623a65958cb0e2d48047fc8bad01064a25238fc02b7b0a3276e010000",
    ],
    [
      "ETag",
      "SA+zFQw7Hkjdvi8pP74fdg==",
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
      "Thu, 02 Sep 2021 19:19:27 GMT",
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
      "0000000002ffedd34b7282300000d0bb646d9d40b425ddf1a9321614b009ca8689100c55c34704d24eef5ea7d7a8ef0eef1bb02ce3d76bda55272ec12b504cc7d36cfa5e1b963308120ca15c2d35d215856a4eb720dc203fb9b08d9b137b560bece0d81e8e3e45cfe979c8d75a57ab480b1ac8eac54724f5061a462f9b3861cc175abfb7dbce1dc32898cbd2125e1e54a629253baa9d69903cd4f3985124b4f8dcf3ca5b4272f13cea64b34b4f5724fca2e5e248cb028a1be76f81dbeb25c99ff62ad4a163ecb6ad19c948b00efb6332aed16782d0c1c75b57a614beaccea78306abbd9a3e3cfc5f6002f858972dbfa6e57d3b9a633c017ff5d34ed5fcfedfe2ace52df8f905e1307a1c19040000",
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
      "Thu, 02 Sep 2021 19:19:27 GMT",
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
      jobId: "grouparoo-job-5-1630610362910",
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
      "6b",
      "6f",
      "da",
      "30",
      "14",
      "fd",
      "2b91f7b540c21b24b4229aae6810b624b4daa629b29d9bcc5d8869ecb4aa2afefbae9dc2da4d6a3fc5f63de79e731f7922bf459992296122bfaba17afc702b193923a0698eaf827d5662dbe5df7b37eea2586fdde0a1ebcf67334408c35274b72fa0a5645d7150d36dd4ce2b59ef6925650b13b5062d6fd873879edb1b76279e8b340545b612e56f24ffd27aafa69dce51ba9d4b991740f742b5b9dc9dde3bf7ddcebe92b7c0b5eabc56eca088eabca9f9b1909c6a21cbd93642fd5a4195c08e8a021dfc25a6ecfc75e6b6a0bb768ee07bc181722eeb521b579882cb3213795dd9ac64fa44accb170712f92b7f113b5c16f5ae4c4aba833327a59a26fa710fce65b8593bcbe07213aee7f1721324d1e2ca5fcfdb8bcd6abb0e22e7e6ca0f7d47535680e53a33e7dcde02bca07e0a4a8bd2aac7e6d9283ff767f9ff500c01a51534c164e40ea93776272c63239e8d7b0396b9c0d8988d06b4c75c3ee9433f65409167452d8b9658739a32d71ba489db852ce943af9b8c81b26434622e1b64c33e1d4fc8e18c3c5442c385507ba944d32172132e633f89c36db098c7be2d21a375a12f1a63a680971e351688a0376a3a98a890a864dabd0c623f9c2fe2e5b5df4c780539e58fd11dce38a3850244d30a9ba7a15acb141b4682f9dabf40b09dd897635091e98f27627a6e5cbc68f9891ee3008d5d6dbf248ac365f0c9da3922ae69515bc87d73306564a230a60f3f11882bda24215fb77ef88d344f21645041c9df1f26826de0bd1fedb8f608c5c54715a5f18e9bc395d1e015341b246cb127f668d21d120baef4bfb1b1e78d8e3d33394c46d841a99f0b6ad61eeb6cc46a75026110871fd8",
      "5e1dfe005990861d74040000",
    ],
    [
      "ETag",
      "ibKsiU2cZ3W0ClMU0Nw2EA==",
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
      "Thu, 02 Sep 2021 19:19:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1630610362910"
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
      "93614fdb301086ff8bf735959215b22d121fd2b56c95420b4d9090261419fb929939b6b19da252f5bfef1c5899c6a4f025b93b3fa7dcbd7eb327bf84e2242377a27de8c1ee3eb4e0af42b001d74beff065b4724022029eb648e6a5f5e5f9fce1669b16ec69ed1f61de99abb333241cfb091d25d99e3402247724fbb1278a76806d4ccbbe53f59045c4ef4c2896d566b9fa8679a779c857d74591cf8a053944c7464e3dad07fe1d6db78788dcebbb0d3460413108b318abef81f96558d3d1ce489838dd5b068e0cf070d05add1b6ab59e6065723a49d2699c26f134fdf8258991939a512fb442f4bac4f188d79eca8d7ec425493245c20e312edc0ccf2dd6051f1609e17255a527c37c7f039431dd2b5f8f828db0ce3f8bf7077c11e15f52d277827853428e412d280e768c12a6a69c5b706e94d4aea6c61cb1d97a5dbc554571ab051f07b76204907e7b04ce8b75fe3f69d15faf5acdf36af186701e5d7344aae5c5a2acf28bcbc0ddbe1861b6f3e02ead465339087e4ae293cfa79fd2f8d9625f75b01d7e27f3b68788308a7fca77e149d650e9e0f01b28e1c16787030000",
    ],
    [
      "ETag",
      "ASrtSFDqXv6LczOtweDmpQ==",
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
      "Thu, 02 Sep 2021 19:19:28 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1630610362910",
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
      "0002ff8553ef4fa34010fd57c8de57db8254a04d1aaf51bce352ab52aa392f977659066e1558dc5d7ae999feef3780f5474cf40bb03befcd9b37333c927b5e26644c629e3dd420b75fee444c0e08689ae1ed0ff3f0ca2b83edbffa6c3aa7f79bdb6179bbb99a4c10c11b96a24595434f895a3250e3e5a29f495157540ad1c3443da76739b6e958a6ed1c8e2c13690af274c6cb7b24ffd1ba52e3c1602fddcf84c872a015577d268ae7fbc1e670504971074cabc15bc5018aa8c1879ac7b9605473514e960bd4af15c8151494e758c10b3189bfbecddce7b4e86708de700694315197baa90a533051a63cab659b958c1f495be5ab0fb2f067fe4964acb9502b5a556b832a63b592a0ea5c1b67e1c5b9b1464329cf41ad8d9bef7ee81b084ed6c6c4383666c1791019160a25a0342f5b9988c63934124f8d08de77bf21504d1574c1956b3ad4f2cc519cc62e4b3dfb284e4d88632f768fa81d9b6c3484611203459e6eb2b72c5a8a321eb9a937a4a9eda6899d58b68b0f07623a1c399ec558caf0687acc26bb03f257720da75c5542f1ae1de4260c227f1585cbf9c934f25b1b2945e3a75d718d89d7756a3489a00f7ced9a2817a8d4f43698477e383d89826bbf1be70c32cab68b071c684a730588a69216a0419e8b049b462e2f1641145ccca73364b433badc231419ff7a7c2144dbaaedb26edf8d96336cf5f7806b9ad72d62d37d108bec76bf11819bd791c9d5d20f7f92ee2a84142494ecf3d121b80d7cf6ffecb719a1b8cfa8a2349e714f986a3498846e5f78d156b7678f4cd3212d58ea7731cbb5f78d69723419a180523f19eab6197d7662b57a066110c73c0fe6df30fa1f2a41d19f4b040000",
    ],
    [
      "ETag",
      "J02Q8nIyzuFANakvZ4nZvQ==",
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
      "Thu, 02 Sep 2021 19:19:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90616b83301086ffcbedab82567028f4431d856eb8763a1c8c524aaaa7b353cf25719d88ff7d17b72fc9f1e6b9bb874cf05977058470a9abaf01e57857a14e4c91a21a1aadf8eaa9530816a0161593bbd5edcd4b872cb9777e9ee2d14f9fdf833259af9950f907b602c209ca1a9b4241789ca0132d72dbf92c97898ce9b137497438c4dbcd9e83960a13ecb338de44f116e6d36cc1952e299628b1cbd18cec255d31d78fc65689b66fd05634c81c152cf0f250491a7a21896c4e6cdf767dcff15dc7f35781eb30d7502e744d1da3d92bf0164d5a3429ddd8155c06e452b276b99cdf1c6b39a0513afdd3d1a851bd48e2cd0acdd2c0f933782063a5d9d6b458900bfe8f5dad212c45a370fe05b7bfc4256d010000",
    ],
    [
      "ETag",
      "H2wV3RuUQ70xJLy6RMY9fQ==",
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
      "Thu, 02 Sep 2021 19:19:29 GMT",
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
      "59",
      "4e",
      "83",
      "40",
      "0000d0bbcc77212cb2f9070e6b2956124de1870c30c230405906811aef6ee335ecbbc3fb06a828f03c67ec4a710f9ec18e24832ff8e3a05b706d42d66bfd8b6caaf5a93d394cdffddcbb765441f0332e86a94ba9cbad41c7a83bb717b5cf558b30b629db82a8f99514027199169291728e1e298977d6226f37c55707ea8ec5c612f9bb9fbea99179b4ddca16b796544ebdc0a40e075996d3401f454da261ad0c0d340cff36a12a6f1ba191dbc52ce71dc65b2c70ae74fe8899c4bcf7484b2e4f6b64ac4582e274456e26da17a6c12529559c6fb31f64fcc3c3ff050e006f0399f09c91fb7659318c03f8ab9fb17dc0f7ff1646139ec0cf2fa02d032519040000",
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
      "Thu, 02 Sep 2021 19:19:29 GMT",
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
      jobId: "grouparoo-job-7-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553ef6fda3010fd5722ef6b81a45008486845346d9120b421b4fba129b2cd25739bc43476ba5515fffbce4e61ed26b59f62fbdebb77f7eef24cee45b92123c244f65043f5f4e94e32724440d30c5f73799f0dcbfcdbb4a8eac943965e7c09d3dfd7e331228461295a6c73682959571cd468bd6a6795acb7b492b285895a8396d7efba7dcfedf68f879e8b3405793a17e53d927f6abd55a34e672fddcea4cc72a05ba1da5c1687f7cee371675bc93be05a75de2a76504475ded5fc9c4b4eb590e578bd42fd5a41954041458e15fc256ed8e9dbcc6d418b7686e047c181722eeb529baa300597652ab2bab259c9e899d82a5f1dc82a9807d3d8e132af8b3229690147ce866a9ae8a72d38e7d172e1ccc2f365b498c4b36598aca697c162d29e2ee7eb45b8726e2f83287034653958ae33764eed2dc40bea6f4069515af5d83c1be5177f66ff0fc510505a41134c066e9f7abe3b64291bf0d4ef9eb0d405c67c3638a15de6f2610f7a1b06147956d4b26829cb9eeff9344d8f939eefb3a4e7829730ceba4997720a5d34c9ebfb6477447e5542c399505ba944e310b98d667190c4d13a9c4ee2c0b690d23ad7674d61a681d7356a6c1041eff4b433512151c9d83d0be3209a4ce3d94dd04c780e19e54fab079c714a730588a6159aa7a15ac80d1a46c2c9223843b09dd8d53ea8c8e8fb33319e9b2a5e597ea0c7384053aeb65fb28aa3597861cbd9236e685e5bc86373306da4223745ef7e201057b44942aed741f495344f11a45041c93f1e26826de0a31f6dbff608c5c54715a5f18e9bc395d1e015341b246cb307f670d8b3bfa9a695fe2736703dd7dd7b6672988c5040a95f1a6ad61efb6cc46a75006110871f5aaf767f00c8d7a30974040000",
    ],
    [
      "ETag",
      "lokg9nlZCmruAqgfGXNfxQ==",
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
      "Thu, 02 Sep 2021 19:19:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1630610362910"
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
      "d3",
      "30",
      "10",
      "c7",
      "bf",
      "8b",
      "79",
      "6da5848e1422ed21850295b276b499fa80a6c8b32f9957c7176ca753a9fadd3967a3208694bd2477e7df29777fff73643b65244bd99daa7f74600f6f6af0df42b006d769efe8d5a271c0460c3caf89bc31f1e376bb4beea733ceb73f273b5318915d5e12e1c43d349ca5475629d0d2b1f4fb9119de00b509d45d63ca3e1b317f68437153ac17cb2f94372843bebcc9f36c96cfd969746e94dcf3b2e75fd1767b1ab107bc5b4305168c80304b6bf101845f84351d6f5a0d63879d15e0580ff707b5c5aee516714c95f1741c27932889a349f2f6431c11a75170afd0040136341ef3e8b95ee3232dc9e20911b68f69e1aa7feea9ae64bf480817cb22b9e8e7fb1be04260677c390856ca3aff24de6ff059847f49cd5f09d24d293d04d56024d8214ab52597d282738324ba92b7ed199bad56f94b558cb4a8e430b8570380f6fb33f0395f65ff9396fcf547ab4f59317f41384fae3923c5e26abe29b2abebc0dd3e1b6176f0e0ae2d92a91c043fc5d1c5fb77d3247ab2d8470cb6a3efa4de76306282d39ff2557996565c3b38fd023e16f8dd87030000",
    ],
    [
      "ETag",
      "Un1wWWk6h7BaaWz3knTncA==",
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
      "Thu, 02 Sep 2021 19:19:30 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1630610362910",
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
      "0002ff85535b4fdb3014fe2b91f74a9b4bdbb4a9543144c316adb42c4d41639a5ac7390986240eb6c38450fffb4e12ca6093e0298ecf7739373f913b5e26644a629eddd7201f3fdd8a981c11d034c3db6b5ade9d7dbb96a59473f3e2bab897f39b55369b2182372c458b2a879e12b564a0a69b753f93a2aea814a28742bd49cf7607966b5b03d7f16c0b690af274c1cb3b24df685da9a9691eacfb9910590eb4e2aacf44f1726f3e386625c52d30adccb78e269a28f35dcfe35c30aab928679b35fad70ae4160aca73cce02f31893fbf55ee735af433043f700694315197bac90a259828539ed5b25525d327d266f9ea40d6fec23f8d8c5d4235ec0caa8ced5682aa736d9c85ab736387d5a43c07b533aebefaa16f183b9eec8c99716c2c82f320326c744940695eb61e118d7368f49fbb10fcdffa86403555d005b763cba5f6c4f2e2341eb3743218c5a905713c89c7233a882de60d6198c44091a71bf596454b513ac9241e22997aa3d41d4dbc7162bbee204d9d31389e973a3665d688c50ed91f91df926b98735509c5bb5e90ab3088fc6d146e96a72791df9691522c7cde25d714f13a4f8d4522e89dbaf64d940b746a1a1b2c233f3c398d824bbf9be50232ca1ed7f738cd94e60a104d252d40833c1709368d5cacd64114ac96270b64b403ba38201499fe7cfa4b881eabb6cbbafd365eeeb0f53f002e695eb78887ee406cb2dfff4204ae5d4726df377ef883745721a420a1641f8f0ec16de0a3c773586584e232a38bd2f88f7bc254e3c12474fbc28b36bb67f6d87646cd462158ea7f638ee55887c6341a8d221450eae782ba55c63a3bb35abd803088635e06cb2f18fd03db02b7c648040000",
    ],
    [
      "ETag",
      "ZankFKZrnrrD/PZmqrDhOg==",
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
      "Thu, 02 Sep 2021 19:19:32 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d904d6fc2300c40ff8b771c95d22255a51207d8d8972ab431d00e1342a175bb421b7789bb8921fefb9c6e97c4769eeda79ce1589b0252d8d7d5678ff6745521bff86085ae6fd8c9d59171082340d6959068ee93ebea89d759f5c6c9cf7179373176369d0ae1f20f6c35a467286b6c0a07e9fb198c6e51da763b3b4c148c4f9dafdcced60bc95a2a7cb6dc64d96c9e2de0b2bd8ce040fb159668d1e4e8e775960e98f3a35775baed1a0c1cf5364707033c3c5496fa4e5ba2402a411284f158c5a11ac7d12454c235946baec908ba7905d9c2c4ba59d1b7884228801d42712e87f34bca918a54a0a240855e6cfbdf333f31ba674bb2dfa15f1dc6ea4fe486bc1c8b34db1e47906bf993879a212d75e3f0f20b5eaa2f4271010000",
    ],
    [
      "ETag",
      "enG8+gJtTLgWt8zkNF9nrA==",
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
      "Thu, 02 Sep 2021 19:19:34 GMT",
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
      "5d",
      "6e",
      "82300000e0bbf4598d148ab037a004a76964137fd88be94ae350a18596022ebbfbccae31bf3b7cdf8032c6953a6971e53578012385fe8ccdd6d20b717f896ddcc9e98a9b4c24ba285a64c8208ff18d64c12d36d546de93720791d96febb828de1a36880f1d3630f7d0a669ca348adc1d363039df59e733ec6a919d6ba4a7241d2a1b43d76e0c4e976346a240453dd91f16623b5ad62677a80575794d6f613eef25aacddc3938b45c56dbb9b3bec2912c15099597baafeff631280a947e7a49d510dc53ab5b29d1b12870bea8762fb4a68536bd880f39d18bd9d3d3ff0526800fb26cb93a958fed36f2fd09f8ab7fd2a3e48fff21a72d6fc1cf2f1c1cbb8519040000",
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
      "Thu, 02 Sep 2021 19:19:34 GMT",
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
      jobId: "grouparoo-job-9-1630610362910",
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
      "db",
      "4e",
      "e3",
      "3010fd95c8fb4a9bf4963695aaa56ac352a94d214d41d56a1539ee246b48e3103b2084faef3b76280b4282a7d89e73e69cb9e485dcf3624fc624e1d9430dd5f38f3b919033028a66f83a7f9adad5c0752fe96e78b7b3fbee8e96e5f5648208ae59921eca1c5a52d4150339de6eda5925ea925642b43051cb6b75dc9ee3769c9edbf53a0ed224e4e99217f748feab5429c7b67d926e67426439d092cb361387b777fbb16b9795b803a6a4fd51d14611697fa9f933178c2a2e8ac97683fab5842a8603e5393af84fdc27e71f33b7393db433043f7206943151174abbc2144c1429cfeaca6425e317625cbe3b908dbff46791c5445e1f8ab8a00738b3f654d1583d97605d84eb95b5082ed6e16a1a2dd641bc995dfaab697bb65e6e57c1c6babdf443df5234c9c170ad89756e6e015e507f0f52f1c2a847fa592bbff667f179289a80d2129a603c745cda19395e922643968e7a832475204946c970407b89c3bc3ef4f70950e41951c3a28528bc6eea3a1d368a1346d3b8ef796e3c828e13bb69ea0dbac3518a29c8f18c3c555cc19ccb5248de7488dc868bc88fa3701bcca6916f4a48699dab79634c17f0dea3c20211f4454d471de5029574bb1741e487d359b4b8f19b092f21a3ec79f380334e692e01d1b4c2e629a856628f0d23c174e5cf116c2676750a4a32fefd4274cfb58b772d7fa34738406d57992fd944e122f865ec9c103734af0de4b139e832529e6bd3c73f08c4156d9290ebad1fee48f314420a1514ecfb6122d804befbd14e6b8f505c7c54910aefb8394c6a0d5641b341dc147b620ffb5d67480cb8529f62bd5effd4339d4367840314eab5a066edb1ce46ac966f200ce2f003d3abe33fdec617e874040000",
    ],
    [
      "ETag",
      "DwA/r566HaY7jY/46YappQ==",
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
      "Thu, 02 Sep 2021 19:19:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1630610362910"
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
      "02ff8d93516f9b3010c7bf8bf74a24583ab622f52159b2261a4dda843e6c53851cfba0ee8c8fda26158af2dd77d02e9bd649f405eecebf13777fff39b09fca4896b09d2a1f1bb0edbb12fc4d176cc035da3b7ad5681cb08081e72591c5d7b275df16df67b37627d6abfbcbc5a3c99e2e2e8870e21e2ace92032b1468e958f2e3c00caf80da04eaa632799f05ccb77557dc669be5ea92f20a6597af6ed374324de7ec189c1a25f73ceff937b4dd1d03f680bb0d1460c108e866a92d3e80f0cb6e4dc7ab5ac3c861630538d6c3fd4169b1a9b9451c5165743e8ae2711847e1387e7f1e85c46914dc2b3484de6e693ce6d173bdc1275a924563226c1fd3c245ffdc535dc97e912e5caeb2f8ac9fef6f800b818df1f9205828ebfcb378bfc11711fe25357f234837a5f41054829160872855e75c4a0bce0d92e8725ed7276cba5ea7af5531d2a292c3e05e0d00daef4fc097743df99fb4e4af3f5acd26d9fc15e13cb9e68464cbabf9369b5c5d77dcdd8b11a6ad07776d914ce5a0f353149e7dfaf0310e9f2df6193bdbd177126f1b0898e0f4a72c946749c1b583e32fd3d8525f87030000",
    ],
    [
      "ETag",
      "fKgysYHZDDybcONhGHqnTw==",
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
      "Thu, 02 Sep 2021 19:19:34 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1630610362910",
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
      "ff8553db4ee33010fd95c8fbb8b4b9b44d2f52c556908548a5409ac25eb46a6d67120c691c6c871542fdf79d24940521c15323cfb9cc99993e913b5124644298c8ee2b508f5f6e252307040ccdf0f5579ce7ce57b79c9d5eded093993f14d18f6c369d2242d42c4db7650e1d2d2bc5414f56cb6ea6645552256507853aaed371fd9ee3bb4ecff7c6ae833c0d793a17c51db26f8c29f5c4b6f7dedd4cca2c075a0adde572fbf26e3f7876a9e42d70a3edb79636ba68fb63d3c35c726a842ca6ab25365069506bd85291630bff9909fbf656ba2be8b69b21f84170a09ccbaa30755b28c165918aac528d2a993c91a6cd571f6419cc83a3d8da68839a1b8b6a6bbd56a0abdc58dfa3f3336b8379529183de58d7a7411458d646241b6b6a1d5af3f02c8c2d176d12d046148d494c590eb5c1f31cc2f7d3af09d4500d6d713d747cea8e9c314bd990a7a3de80a50e303662c301ed31878ffbd04f1850e4995abd61d14216c998f746cc1b21c61fd25eea8c69da07cec76c40c11fa41e7739772825bb03f2570903c74297528b7618e43a0ae3601d47abc5d12c0e9a1829c5e0c76d737588d77d1a0c89a00f72edeaaa90e8544f365cc441343b8ac3aba05de61c32ca1f97f7b8ce94e61a104d15dd82017526131c1ab9385f867178be98cd91d16ce8628fd064f2fbe93f217e2c9b299be6b7f6f2fb8dff1e7045f3aa413cb41fc425bbdd1f44e0e1b56472b90aa29fa47d8a20050505ff7c75086e0a9ffe7ff6c78c583c67b4c11333020f85ebda842b680f466c9bf69ed9c381e379a4012bf3aee6b983fd646a8d5a11b65098e744ed3163d0d6acd22f202ce29e17e1e204abff006d68b7334c040000",
    ],
    [
      "ETag",
      "ZTll0+1pAHQhaGA67iRXgA==",
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
      "Thu, 02 Sep 2021 19:19:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1630610362910"
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
      "0002ff2d90514fc23010c7bfcbf9ca4c0b6e714b780045c58061039e0c2165bbcde1b69b6d8712c277f73a7d692ffffeeeee975ee0b36c3288e050165f1deaf34d8136764582a6abace1aba5c6200c00ad2a980c87a7fad57f3a4ce3c74e64f9fcd98f7ffc783c66c2a41f582b882e9097586506a2f70b34aa466edbef753f91317b6e5db2992f67ebcd64b9e2a8a6cc456fdbc562325dcce0babb0ee048870473d4d8a4e886b69a8e98dab9f335aa6e2bf40c753a45033ddc3f149aba5669228f134f0a4f06231148310a86a1140c56942a5b52c3ec760dbcc692555542dfac0b9201dd976c9ef7e7c9c5b7febdf0fd508677b3d0c9edfedba6678b66a5891d0cbaf532107f320fe4042d8b5bdde10052c59ff3525a88725519bcfe02b4b6a9187a010000",
    ],
    [
      "ETag",
      "92vmJ5FbBQDu0dfIG5Qx5Q==",
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
      "Thu, 02 Sep 2021 19:19:36 GMT",
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
      "0002ffedd34b7282300000d0bb642d8e050cd09d8288ca80d1229f0d1330222221021a62a777afd36bd47787f70d709e93ae4bfba622147c028165639c8f374c9f5bbc543fcec22546439414d6de9e1f96c83ecd2745be4f48744baec9a0d8fafa792b6847b192c18857153fca7c51c8b9bbecb63deaee2b361376702b1e3cd5b226f3ecbb245d16bbb5511237cad5cbcae48ddfe23a38aa7105ad70e350a1dc693f55176e03bd9438876dac4912ad105b27cea4c78ad5fad98c311c88d0875fd033a1f578e244989104cf11d5b1a3c9a7ab16a1258a079894bc0aebc2f451b31abfbdfd5f6004c8c0ca967469f9daae4c0d6304feeaa7bd60e4f57f4e704b5af0f30b675b0e5a19040000",
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
      "Thu, 02 Sep 2021 19:19:36 GMT",
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
      jobId: "grouparoo-job-11-1630610362910",
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
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "fbd82640de8914ad5142b7480de90869b54d1332e6c2dc004eb1e99455f9efbb364dd7aa52fb09dbf79c7bce7df04876bc4cc884c43cbbafa13a7cba13313927a06886afeaefd968777d08cb45314f76dd1ff678e59ecda6534470cd92b4d8e7d092a2ae18c8c976d3ce2a51ef6925440b13b55cb7e50ebacec075ba83ced8759027214faf78b943f66fa5f67262db27ed7626449603dd73d966a2787eb71f3af6be1277c094b45f4bdaa822edf7453fe78251c54539dd6ed0402da18aa0a03c470bff99497cf13a759bd3a29d21f88133a08c89ba54da16a660a24c795657262b993c1263f3c5816cbc2b6f1e5a4ce4755146252de0dc4aa8a2913aecc1ba0cd62b6be95fae83d52c5caefd6833ffeaad66edf9fa6abbf237d6ed572ff02c45e31c0cd79a5a17e6e6e305f513908a97463dd4cf5af9a941cbb763d1049496d004a3a133a0eec819c7693c64e9a8db8f5307e278140ffbb41b3b6cdc835e1203459e11352c5a8a3219f6810d3a7dccd0ef443de68ea211854e34a0836e9cc44ee27619399e933f1557b0e0722f246f3a446e8365e84561b0f5e7b3d03325a4b4ced5a231a60b78e9516181087aa7a6a38e72814abadd4b3ff482d93c5cde78cd84af20a3ecb0b9c719a7349780685a61f314542b9160c3883f5b790b049b895d9f82924c7e3e12dd73ede245cb9fe9210e50db55e64b3661b0f4bf183b27c40dcd6b0379680eba8c94e7daf4f1170271479b24e4dbd60bbe93e62980142a28d9c7c344b0097cf8ab9df61eb1b8f9282315de717598d422ac826685b8a9f6c41e0e86ce901870a5de",
      "c446bdcea9693a87ce080594eaa9a266efb1d046ac96cf200ce2f47dd3ace33f6447913277040000",
    ],
    [
      "ETag",
      "tz+8kPyTnDmCdk3Z/9M1+A==",
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
      "Thu, 02 Sep 2021 19:19:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1630610362910"
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
      "93516f9b3010c7bf8bf74a24683ad621f5816c59168d8696d08769aa906b1fcc9de1986d524551befbceb4cba675127d81bbf3efc4dddf7f0eec87ea244bd8bd6a7e0e60f66f1a70373e28c00eda597af5d859600103c71b22cfbec6abdd2a3679a45745fb255ddac545fe7879498415dfa1e52c39b05a81969625df0eace32d509b403db45d35660173fbde17b765b1deac286f51fa7c739b65e9225bb263706a94dcf16ae45fd176770cd803de175083814e809fa537f800c2adfd9a96b7bd8699c5c108b06c84c783c6e0d0738338a3ca2c8a66513c0fe3289cc767efa390408d823b851db1b75b9a8f39745c17f8485bb2684e841963dab81e9f3baa2b396ee2c3f5a68ccfc701ff06b8103874ae9a046b65ac7b52ef37f8acc2bfa4e6af04e9aa949e821ae82498294af51597d280b59324da8af7fd095be479f652954e1a54721adca90940bbdd09f894e5e9ffa42583fdd1ea635a2e5f10d6916d4e48b9be5a6ecbf4eada7377cf4658ec1dd86b83e42a0bde5051787ef1f65d1c3e79ec037adfd1771267060898e0f4ab7c568e2535d7168ebf005da0e06b88030000",
    ],
    [
      "ETag",
      "2Y6GvG6rO1lGRmKAEsB8Ow==",
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
      "Thu, 02 Sep 2021 19:19:37 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fa34014fd2b64f6515b2855a04d1a35caba24b5ba403566b36967e0c28e52a6ce0cee764dfffb5e06eb6a4c343c30cc3de79e733f7822f7bccec998305e3e3420375fee0423fb04342df176eaeefdddc4d7f276e46f9abd74ea9e2749584e2688e02d4bd1d5ba829e128dcc408de749bf94a2595329440f13f5066e6fe00d1d6fe00c3d77347090a7a02aa6bcbe47f62fadd76a6cdb3bed7e294459015d73d5cfc4eae5de7e74edb51477906965bf95b45145d91f8b1e5522a39a8b7a324fd040a3402e6045798516fe337376fc36759fd355bf44f023cf806699686adddac21499a80b5e36d26425e327626cbe3a90249c86a7a9b52cb8547a51d3152c2daaacc542826a2a6d7d8d2f2fac251655f00ad4d2baf916c6a1652d8dafa535b18eac697411a5d600e572509ad7462ca5ac8256e8b91fd1fb29b404aaa9822eb8f01d8f0e0267c40ae66745303c6485038c05cc3fa443e664a30338c81950e4e936bb61d15ad45e3074697ec0bc80e52cf05dcf2f0623cf7382bc7d0e99eb397ee17a05d9ee93df926b38e36a2d14ef9a426ee2280d17693c9f9d9ea4a129a3a058fb5967ae2de2b54f8d4522e883bab66d940b546a3b1ccdd2303e394da3ebb01bea144a9a6d92071c6b412b0588a6121baf415e881c9b46ae2e93288d2e6727536498495ded108a8c7f3cfd27a49bb5e9b2366f92a471343b370676886b5a3506f2d81d08dce1a608ae9c63f8637c9b5dd96e7f220bb7b2cb48becfc3f8967457311420a1ce3e9f27824de0d39f6bb7e988c55d4719a5f11bb72753ad4826a1db22be6acdecd8beef0d7d62c052bf8b058ebf6b579ba3cd082ba8f57345dda663a19d58a35e4018c4e1cf4ce7b6ff00f936b2f469040000",
    ],
    [
      "ETag",
      "L2+zyRVrY97yu+TL2GSSEg==",
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
      "Thu, 02 Sep 2021 19:19:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1630610362910"
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
      "c1",
      "6e",
      "83",
      "30",
      "0c",
      "40ffc5bb16098ac606520fedd4954aa85a697b98a6aa4ac1b0748059123631c4bfcf61bb24b6f36c3f65800fd9e410c155969f1daafeae44b3b7418abaab8ce6aba54623cc008d28990c62cab7ebfd73ecc7afe2fee7b879781462b95830a1b377ac0544031412ab5c43f43640236ae4b6cb454d1319337d6b2b8763badd6d38af29b7f9ee9424cb55b286f13ccee046d7140b54d8646827b68a6e9899ad95d5a26e2b7434752a430d133c3d948aba562822872b8e3777bcc07703cff58379e8b90c56940923a961f674005e63c8882aa56f76058f013585ac5d4ce71797d74aa2753affd3abdea07e51c4ab35daadf330fc737822eb65d8d7a80e679009fe90581a880a51691c7f01f8ee53136e010000",
    ],
    [
      "ETag",
      "6HodIEQFH3HYa5zTG78aaA==",
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
      "Thu, 02 Sep 2021 19:19:38 GMT",
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
      "d34b7282300000d0bb64ad0c2268d21d484545aa2341081b264a9c80e52381c6d8e9ddebf41af5dde17d037a3e3321b2beb9b21abc01450da49d35bf858e2bcb60974faa3cf9b46bcf1784990b07294bf9ebb0dcd29de2a7681c1213b5829161178fe54a1d8e7741518a6f140f13b228bb5963f3e834af039257f1dee80389e705b479b3bc6f1bb1e5a13f4dd52dcd7bd35cc8158717a543b8a9927d2ed65369a9a16c6add560f37ab8ad5c77588c6f53b363724b6128c375f332f0b836311e75c1a042ee3197e783d2d2fbd7ed0d7a6ebe9d831e444c28c2f93da6f90f6f2f27f811160f7b6e898c88ae7f6a985d008fcd5cf7ad5b2e77f87d18e75e0e71721d1972119040000",
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
      "Thu, 02 Sep 2021 19:19:38 GMT",
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
      jobId: "grouparoo-job-13-1630610362910",
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
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "7b",
      "6d0234092191a2354ae88a96900e48a36e9a903186b9059c62d329aaf2df776d9aae55a5f609dbf79c7bcefde009ddb33a435394b2e2a1a5cde1cb1d4fd119a21217f0baf40fd1cf9d746fab87f4dafabea0c45cede6b319209862095ced4bda13bc6d0815d36dd42f1adeee71c3790f12f5ec41cf760696635b03e77c625bc013b4cc57acbe07f61f29f7626a9a27ed7ec1795152bc67a24f78f5f26e3e9e9bfb86df512285f956d20415617e2cfab5e4044bc6ebd9360203ada04d422bcc4ab0f09f99a5176f53f719aefa05801f19a19810ded652d9821484d7392bda466745d327a46dbe3aa0c85b798bd820bc6cab3aa97145cf8c0c4b9cc8c39e1a97e1666df8c1e5265ccf637f1324d1e2ca5bcffb8bcd6abb0e226377e5859e21715a52cd3566c685be057001fd8c0ac96aad1eab67a5fcdc20fffd581401a405ed82c9d872b0ed5a93344fc7247707a334b7689abae9788407a94526433acc528a81a745350bd7bcceb28c8e064e9ee0746025437b384926998b139b8c1d7734b49c2ccdd0f10cfd6d98a44b26f65cb0ae436817fab197c4e13658cc634f9790e3b694cbce982ae0b547090502e8839a8e2aca3828a976fb41ec85f345ecdf78dd8457b4c0e4103dc08c735c0a0a68dc40f3246dd63c8386a160bef69600d613bb3e05059afe7a42aae7cac5ab96bfd06318a0b22bf5174571e807dfb49d13e20697ad863c76075546ce4a65faf81b80b0a35d12f463eb85b7a87b0a694e1b5a93cf8709601df8f4573bed3d6061f3414648b8c3ea10a1",
      "444843bb1562bada137bec3ae736d2e046be8b8d879353d3540e959156b496cf15757b0f857662ad78014110a61fe8661dff01584f856577040000",
    ],
    [
      "ETag",
      "DIySZWt8YmqbP0KCec/LWA==",
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
      "Thu, 02 Sep 2021 19:19:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1630610362910"
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
      "8d93616fd3301086ff8bf99a8a848cb046da876414a894b6a34d41024d91675f82876307db298aaafe77ced9288821655f92bbf373caddeb3747f25d284e5272279a1f3d98e14503eea30fb6607be92cbe3aad2c908080a30d929f86d5f5cb751e47e5977cc8e79787cffb6c9e5d5d2161d9376829498fa41620b925e9d72351b4056c635af6adaac62c206ee87c71576e97ebf798b79afb7cbd2f8a2c2f16e4149c1b3975b41af967b4dd9e0272afefb6508301c5c0cfd2197d0fcc2dfd9a96b69d8499d5bd6160c9088f078dd17d478dd633accca2781625719844619cbc9a4721825233ea8456c8ee77381f71da51b9d53f714b12c5489831c68debf179c0bae0e3263e5caecbe4621cf06f8032a67be5aa49b016c6ba07f57e838f2afc4b4afa4c10af4ac829a801c5c14c51a2ab28e706ac9d24b5ad68d79db17cb3299eaaa2b8d1824f8307310148773803ef8a4df63f69d1607fb47a9b958b278475689b33522e578b5d99ad6e3c77fb68847c70606f8c465759f0868ac28bcbd76f92f0c163d7dafb0ebf933ad3434018c55fe5837024ada9b470fa0533b2877888030000",
    ],
    [
      "ETag",
      "VyMC/NB31TZByB98vWUA9A==",
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
      "Thu, 02 Sep 2021 19:19:39 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1630610362910",
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
      "6b",
      "4fe33010fc2b91ef2b6d933ed287544105b9bb48a5409a82d0e9d43aee3a18d238d84eb90af5bfdfc6a13c84049f9278677666c79b67f220f235199144a48f25a8dd8f7b9990230286a6787a3bd975eeae1f59987845713578e45b5fb1a7f11811a26269ba29326868592a067ab498375325cb822a291bd8a8e1751b9edf717dcfedf8eda1e7224f43c6a7227f40f69d31851eb55a07ed662a659a012d846e32b9793d6f6ddbad42c97b6046b73e4ab65045b7be163dce24a346c87cbc98a38152835ac2868a0c2dbc31d7c9c9c7d64d4137cd14c15bc1803226cbdc54b6b00593391769a96c57327a26d6e6bb17320fa6c169ecac32b35d39543bcba5025d66c6f9195d9c3b2b9c868b0cf4cab9f91d4481e3acaca19533768e9d69781ec68e873a6bd046e45625a6490695c24b10e1e7f82b023554435d5cf65d9f7a037798f0a4cff8a0d34bb80b493248fa3dda495c36ec42779d00459ea9ba5b16cd65dee374cd3870d61b30eac1a0071c12e6f9b4cff99a519f7607c3f6d0ef92fd117952c2c099d085d4a24e83dc44611c2ce368313b9dc4811d83539cfdac36570df1dea7c12111f4c55cfbaa2a242a55d186b3388826a771781dd4b7398594b2ddfc11ef93d34c03a2a9a21b30a0cee51a43239717f3300e2f66932932ec155d1e109a8cfe3cbf11e25d615336f649e67114ce7e590307c435cd4a0bd9d62f04ee7145a4d0ee09fcb3beed92ecf77f9185eb587724578b20ba25f55184792ac8d9f7f789605bf8f6af3aac386271c951461bfcc6ed61ba12610aea2d129bcacc81dd1f76fb6d62c1ca7caaf97eff1057d5a3ea081bc8cdcb44f58ae3a0b558a95f4158c4cb9fd9e4f6ff015915a02562040000",
    ],
    [
      "ETag",
      "YAy3hVqcIb1ppQ8qfv6rcw==",
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
      "Thu, 02 Sep 2021 19:19:39 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1630610362910"
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
      "4f",
      "c2",
      "30",
      "10",
      "80",
      "ff",
      "cb",
      "f928332b131296f00006d4b0a00e49348690d2ddc670dbcdb65327d97ff73a7d69efaedfdd7de919def32a81100e79f6d1a06e2f32b44f2e88d13485357cd554198401a0951993c7cbf24704abe5ea457f9bc9629dddaad7389b4e9930ea88a584f00c698e4562207c3b43254be4b6fd5ef71319b36ded2acbe861f6cc6949894bd7db289acda30574bb6e00273ac498a2c64aa11b586b3aa1b2f7ced5c8b22ed033d46885067ab87fc83435b5d4441e573c71ed8971e08f851f8c8713e13358909236a78ad9ed06788d252b8b98be58150403ba0fd93aedcf4f2e0f47932b317456bb7f7ede5a348f9a78b941b737f0477f1637e4cc2c1b5bdde00094e41fb9cb2d84a92c0c76bfdba913db6f010000",
    ],
    [
      "ETag",
      "h+mz13KFKXrxs9ENgGcYRg==",
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
      "Thu, 02 Sep 2021 19:19:40 GMT",
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
      "0000000002ffedd34b7282300080e1bb642d8e2005d25d34963742d1206e180841990222a03c3abd7b995ea37e07f877ff378829656d1b75b72f56817730c6025cd2a5592b1bdc5f6ad3a69de1aa8a2e91a62a03cee1a6a3c42759b8aa03cbdee96b44021c36d427d9a9472a4a02b64ac43a3907d148112f0fce1cd93a421c9eb5fe02d17dabe3ddf5fee4f661194c82d91d24bf581b29ff3199d9be2d3952f108ea3aac7c621ca772e7548fd4b6aec670da8e1e149b9baf629e615b8409523c87b49f5eb639b879fc2ce45e668ae56805390e562af56e61ac249c3ff428c4da814a67b757972f2fff17580036d479c3da289f6f5fbf41b8007feb47dd58b3f9ff0d8b1bd6809f5f47b032cc19040000",
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
      "Thu, 02 Sep 2021 19:19:40 GMT",
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
      jobId: "grouparoo-job-15-1630610362910",
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
      "6b",
      "4f",
      "a3",
      "40",
      "14",
      "fd2b64f6ab2dd43ea04d9ab5a9a86c2c7529d56c361b320c17769432c80c1a63fadff7ce605d8d897e6266ee39f79cfbe099dcf12a233392f2e2be85e6e9dbad48c91101450b7c0daecee3fa47e12e94dcfa8fde7a64c33d2fe6734470cd92745797d093a26d18c8d976d32f1ad1d6b411a287897a83716f30193a9381339c1c4f070ef22494f925afee90fd57a95ace6cfba0dd2f84284aa035977d2676afeff6c3b15d37e2169892f67b491b55a4fdb9e8f75230aab8a8e6db0d1a68253409ec282fd1c27f66969ebc4fdde774d72f10fcc01950c6445b296d0b533051e5bc681b9395cc9e89b1f9e64036fea5bf8c2d26ca76572515ddc19195514513f554837516ad5756109eada3d5220ed661b2595ef8ab457fb9bedcaec28d7573e147bea5685a82e15a73ebc4dc42bca07e0652f1caa8c7fa592bbf3428f838164d4069095d30719d091d78ce34cd5397e5de709ce60ea4a997ba633a4c1d361dc1284b8122cf881a16ad449565ce7834a06e927b304e464849529ad1649a1d83c72663d77533b23f228f0d5770ca652d24ef3a446ea220f69338da86cb45ec9b1272da96eab433a60b78eb51618108faa4a6bd8e72814abadd4118fbd1621907d77e37e14b28287bdadce38c735a4a40346db0790a9a95c8b061245cacfc53049b895d1d8292cc7e3f13dd73ede24dcb5fe9310e50db55e64b36711484e7c6ce01714dcbd6401eba832e23e7a536bdff8340dcd12e09f9b9f5a35fa47b8a2087062af6f530116c025ffe6a87bd472c6e3eca4885775c1d26b5086ba05b216eaa3db03dc79d8c890137ea436cea7887a6e91c3a23eca0522f15757b8f857662ad7c056110a71f9a66edff0164f3c0e7770400",
      "00",
    ],
    [
      "ETag",
      "IPGTpJg7AtsUEw8O4/eqig==",
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
      "Thu, 02 Sep 2021 19:19:40 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1630610362910"
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
      "6f",
      "4f",
      "db",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "f736d592153288c48b9415a894fea10d7b33a1c8d89760707c99ed145555bffb2e8175d39814de2477e7df29778f9fecd9b3329225ec41553f5bb0bb4f15f8db2e58836bb577f46ad038600103cf2b2263be72e7579bb97cbebcc93f7f8f27cbf0d6a417174438f1083567c99e950ab4742cf9b16786d7406d02755b9ba2cf02e6774d57dce4ebd9e29af21a65972feeb22c9d645376088e8d927b5ef4fc07daee0f017bc287359460c108e866692c3e81f0b36e4dc7eb46c3c8616b0538d6c3fd4165b16db8451c5165149d8ea2781cc651388ebf9c4721811a05f70a0db1771b9a8f79f45caff185b664d19808dbc7b471d93fb75457b2dfa40b678b3c3ee907fc1be042606b7c310896ca3affaade6ff04d857f49cd3f08d255293d04556024d8214a350597d282738324ba8237cd119b2c97d97b558cb4a8e430b8550380f6db2370952dd3ff494b06fba3d5b7349fbe239c27db1c917c369f6ef274beeab8fb37234c761edcca22b9ca4167a8283c393bfd1a87af1ebbc4ce77f49dc4db16022638fd2a37cab3a4e4dac1e117d727666188030000",
    ],
    [
      "ETag",
      "6aPs9FSMdkCHT/V6BO0QnA==",
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
      "Thu, 02 Sep 2021 19:19:41 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1630610362910",
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
      "6b",
      "4f",
      "a3",
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f6a3da4269293469d428ee926dab0b54d7dd6cda617ac151ca2033b8baa6ff7d2f83f511134d4818e69e73cfb90f1ec90d2f566444129eddd6503d7cb91609d925a06886b7273ba9174cafa29fdf2f1345ffa54efa6be73e1b8f11c11b96a4eb32873d29ea8a811ccda34e5689baa495107b9868cf72f0b14dc7326da7e75926f224e4e9841737c8be52aa94a36e77abddc984c872a025971d26d6cff7ddbb5eb7acc4353025bb6f25bba822bb1f8beee78251c545319e4768a096502d604d798e165e98abe4e06dea0ea7eb4e86e03bce803226ea4235b630051345cab3bad259c9e891689baf0e24f227fe516c2cb9900b5a964b834a63b1a840d6b9324ec2d3a9b1c48a529e835c1a17dffcd0378ca536b534c6c6be3109a6416c58a8b502a978a195629ae4d0a83c3523783f8286401595d0061743d3a1966b7a499a0c59eada8324352149dc6438a0766232af0ffd55021479aac9ae59b4108567db7d7086de60687a66df668e3b742d2f757b036b65f5070c9bdb73dd814536bbe46fc5151c73590ac9db8e908b3088fd451cce674787b1afcb4829d67edc9a6b8a78ed53619108faa0ae4d13e502959af606b3d80f0f8fe2e0dc6f273a818cb287e816679ad25c02a26945d7a0a09a8a15368d9c9d46411c9cce0e27c8d0633adb222419fd7e7c21c40fa5eeb2d26f12c56130fbaa0d6c11e734af35e4ae3d10b8c635115c9a0770af7deb45d96cfe200b57b2cd487eccfdf092b45721a45041c13e9f278275e0d33f6bbbe688c5454719a9f01bb787c9468455d06e115f3766b66cd772cc01",
      "d1e04abd8bb9a6bd6d5793a3c9086b28d45345ed9a63a1ad582d9f4118c4e1cf74e736ff01af4f666e66040000",
    ],
    [
      "ETag",
      "F+f9IMhSXKYbtazf6fZ+xg==",
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
      "Thu, 02 Sep 2021 19:19:41 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1630610362910"
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
      "ff2d90616b83301086ffcbed6b0b5a5761423fd451d840aa73c8e84629a99ece2e7a36892b4efcefbbb84148c29be7ee1e32c257dd1610c0b9aeae3daae1ae42f3622f29ea5e1acd4747ad4658001a513199bcdf77b7ab7f794bce87f8f053d4995c7bb7cd86099d7f62232018a1ac51161a828f115ad120979d4e6aeec898193a9b84711cedb67b0e1a2a6cb0cfa2681b463b988ed3022e744eb144856d8eb665a7e882b979b6b65a349dc4a5a65ee5a86186e7874a51df0945b4e464e9fabc3cc7771dcf5f3db80e839272616a6a99cd5e81c7183242a6746359701950f395bdcb79ffe6d8a81eadd3f19f0e07833a51c4a335daa92b6ffde7f048d6cbb0afad59402ef8479e6a034129a4c6e917afae3ddb6f010000",
    ],
    [
      "ETag",
      "PZ4pwq6jWPbYOYzdiUl53w==",
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
      "Thu, 02 Sep 2021 19:19:42 GMT",
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
      "ffedd34b7282300000d0bb646d9902da86ee085f0d68042a9f0d1331629491948f089ddebd4eaf51df1dde37a045c1da36efea0bbb820f305245930a090b88cc8127375bdfc60a49b03d9ddddec8a6a55dd12193151aba4358ae268350c39263e478f12165a753528450b6dedc7d1a2eea6e384234b0cdfee09865501d4522a34eb5bd9de7a77c0aec5037693ba106d6d816f3d780e905ee35023795216795d96e96641e9bbbc8fa9247da6f0547555bbe10afd1227c1596f6792b57cbd3bbafb8845c4c3f189183d48b0369cc395e63c895fbdab5ceb0da539819d190f6d2d3d3ff056680dd056f589bf3c77675a16933f0573fef46c11eff11a30d6bc0cf2f1dc604b719040000",
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
      "Thu, 02 Sep 2021 19:19:42 GMT",
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
      jobId: "grouparoo-job-17-1630610362910",
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
      "85535d4fdb3014fd2b91f74adba4296d5aa91a5509235a93429a82a6698a6cc70986242eb1c3c650fffbae1dca6093e029b6ef39f79cfb912774c7eb0ccd10e1c57dcb9ac74fb782a023c4142ee0d55bba2c0c2e7e8737535a25b65b17bfc2af97f33920b866495ced4ad693a26d2893b3eda65f34a2dde146881e24ea39939e3376edb163bbe3e1d4b181275999af787d07ec1ba5767236181cb4fb851045c9f08ecb3e15d5cbfbe06138d835e2965125076f2507a02207ef8b7e2e05c58a8b7abedd808156b2266515e62558f8cbccc8c9dbd47d8eab7e01e0074e19a654b4b5d2b620051575ce8bb63159d1ec09199baf0e68e3affc65625151b6559dd6b862475686154ed5e38e5967f13ab482e86c1d878b245847e96679ee878bfe72bdda86d1c6ba3ef763df529894cc70adb975626e115c403f6352f1daa827fa592b3f3728f87f2c9a00d29275c174628fb1e3d953929309cd3df798e43623c4239363ec129b4e476c9411868167440d0bd7a2ce6c67e40df13475983b4947233249f164eca4f6713ece1ce2e639c9d1fe08fd6cb862a75cee84e45d87d0751c247e9ac4db68b9487c53428edb529d76c67401af3d2a281040efd4b4d7512e4049b73b88123f5e2c93e0caef26bc6205a68f9b7b98718e4bc9008d1b689e624d283268188a16a17f0a6033b18b4350a2d9f727a47bae5dbc6af90b3d81016abbca7cd1268983e88bb173405ce1b2359087eea0cbc879a94def7f001076b44b822eb77efc0d754f31cb59c36afaf130016c021ffe6a87bd072c6c3ec8480577581d2ab5086d58b742dc547b607b436fe420036ed4bf31d7b64787a6e91c3a23ab58ad9e2beaf61e0aedc45af90282204c3f32cddaff0116a1ea2c77040000",
    ],
    [
      "ETag",
      "8C3eMIPzMh9cmT03ngxMKQ==",
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
      "Thu, 02 Sep 2021 19:19:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1630610362910"
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
      "4f",
      "db",
      "30",
      "10",
      "c7",
      "bf",
      "8b",
      "79",
      "5caa2514c216898706bad129b4d08697211499f8929939becc76ba7555bffbce817568208597e4eefc3be5eeef7fb6ecbbd48225ec5ed63f3a309b831adcb50f96603be52cbd5ad41658c0c0f1da9379fafb0bca8b63fd6e7a58e95ffaebfb457a7d7a4a842dbf41c359b2659504252c4b6eb74cf306a8ad44d535bae8b380b94deb8bab7c399b7fa6bc41e1f3f94d964dd26cca76c1be5170c78b9e7f43dbdd2e600f78bf840a0ce812fc2cadc10728ddccaf6979d32a1859ec4c0996f5707f501bec5a6e104754194527a3281e8771148ee3c38f5148a0c2923b899ad89b15cdc71c3aae96f893b664d19808d3c7b471d53fd75497a2dfc487b3791e1ff5033e07785962a75d310856d258f7a8de5ff04985ff49c5df08d255493504d5a00598214ab60517c280b58324da82b7ed1e4b178beca52a5a189462185ccb0140b9f51ef8942d26af494b06fba7d5f9249fbe20ac23dbec917c76395de593cb2bcfdd3d1921dd38b05706c95516bca1a2f0e8c3f1491c3e7aec0cbdefe83b89331d04ace4f4ab5c48c7928a2b0bbb3fcde66bdc88030000",
    ],
    [
      "ETag",
      "bTBzJoiH5n+E2fnxnZ/OBQ==",
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
      "Thu, 02 Sep 2021 19:19:43 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1630610362910",
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
      "00000002ff85535d4fe24014fd2bcdecab404b1128095183d56d82a8a56876371b9899ded6c1d2a99d29bbc4f0dff7762abac6449f3a9d7bce3de77ecc337914794c468489f4a98272f76d2d193922a0698ab793c1f943165ddc17bb87580d7e3aebcbfc697b3b1e2342d42c453745062d25ab92831a2de6edb49455414b295b98a8e50c5b4edfb5fb8eedf6bb9e63234f41964c45fe88ec07ad0b35ea740edaed54ca34035a08d5e672f37adfd9763b4529d7c0b5eabc97eca08aea7c2e7a92494eb590f978314703958272091b2a32b4f0c68cd9e9fbd46d4137ed14c15bc181722eab5cd7b63005977922d2aa3459c9e899189bff1dc8dc9ffa93c85ac554c3caa2ca5a2e4b5055a6ad8bf0faca5a613989c840adacfbef7ee85bd6ca385a5963ebc49a0657416439281483d2223732116519d4122f9d083ef6bf26504d1534c1e5c0ee5367687b2c61039e0cdd6396d8c0d8900d8ea9cb6ceef5a01733a0c8d37576c3a2b9ccddc4edc6ae17c71e30ca7bcc7562da4f683fe61ef418ed3b703c606ce091fd11f9530a0de742155289a61de43e0c227f19858bd9e42cf24d1909c5dacf1b737511fffbd45824823ea96b5f478544a5bab7c12cf2c3b34914dcf9cd38a79052be9b3fe140139a2940342de90634945732c6a6919beb791005d7b3b32932cc8c6e0e084546bf9edf08d1ae305dd6e64be65118cc2e8d8103e28e6695816c9b038135ee8814ca3e85bfc6b7d992fdfe37b2701f9b8ce476e1873f487315420225e4fceb7922d804be7c56871d472c6e39ca288dffb83d5cd522bc84668bc4a63673600fddbed725065cea0fb161cf39b4abce5167840de4faa5a266c7b1d046ac52af200ce2f067a673fb7fe49f569763040000",
    ],
    [
      "ETag",
      "C7DhlTFWpyhds7Z1jGnqvQ==",
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
      "Thu, 02 Sep 2021 19:19:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90516b83301080ffcbedb10a51a95b853ed8adb042195d371fca2825ea6975d17349dc28a5ff7d17b797e4eef2dddd47aef0d9f425249037f5d788fa7257a37d75c11ecda8ace16ba0de20788056d64c9ec71667b3f92e5fa8b04fe5e63e3bacb37ab964c21467ec242457a81a54a581e4e30abdec90db4e273d4d64cc5e0657794adfd79c7554baec25db6ed3d5760db7e3cd8396f23d56a8b12fd0cd1b34b558d88d5335b21b14fa86465da081099e1e6a4de3203591cf153f78f08338127120a2385c0482414585b40df5cc666fc06b2c59a9f6f4c3a61030a0a790a5abe9fce6722842e18bd01781333bfef7ac2e16cd4e130b1874bb2331ff3379246767d9daea113d28247fca736321a9a43278fb0525d01a8f72010000",
    ],
    [
      "ETag",
      "huje++5Pb9l2nAaI7UYEUg==",
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
      "Thu, 02 Sep 2021 19:19:44 GMT",
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
      "41",
      "72",
      "82",
      "30",
      "00",
      "40d1bb642d8e40b4a43b408c11b50505c40d43304a6a0269a056dbe9ddebf41af5dde02ffe3728ab8a755dd1b767d68067702b2d34ac86a172bce9672df479b62018ed96b4cee1cb07199b8bf7751a1e9893267c720c2cdb38faca6ebd5c5649ee11cc77ab1819664a476d82a977b28853d4b1343009ede9ebdb2a556833c3424c60d49b318c021726cd5905ce61be2650f648f3462a919c4cabb6b34b06fdd6d398ea6de76ff61515bec4599d4b65ad6629674ba70c4f863254eccea9f85a3e8d68b94d1d5771eb1e326e601116928f7070dc47825c4b357c78f8bfc000b0abe29a7505bfdf6e8f111a80bff58bfea6d8fd7f8f959a69f0f30bebec42f419040000",
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
      "Thu, 02 Sep 2021 19:19:44 GMT",
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
      jobId: "grouparoo-job-19-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb82681843ca568cd12ba464ac84648ab6d9a903117e696608a4da3aaca7fdfb569ba5695da4fd8bee7dc73ee834772cb8b844c48ccb3bb1aaa874f372226670414cdf0d5fe7af00b58cd0f76598ceaf9affa2afcbc384ca788e09a25e9becca125455d319093ddb69d55a22e6925440b13b59c71cb19f4ec8163f706ddb163234f429eae78718becbf4a9572d2e99cb4db9910590eb4e4b2cdc4fef9bd73dfed9495b801a664e7b564075564e77dd12fb9605471514c775b34504ba822d8539ea385ffcc243e7f9dbacde9be9d21f89e33a08c89ba50da16a660a248795657262b993c1263f3c5816cbd95370f2d26f27a5f4405ddc39995504523f5508275116cd6d6d2bfd804eb59b8dcf8d1767ee9ad67edf966b55bfb5bebfad20b3c4bd13807c3b5a6d6b9b9f97841fd04a4e285510ff5b3567e6ad0f2ed583401a52534c168680fa833b2c7711a0f593aeaf5e3d486381ec5c33eedc5361bbbe0263150e41951c3a2852818755cb7cf9268d01f3b91eb0c201abbdd716433b7d74d184dfb8e4b8e67e45071050b2e4b2179d321721d2c432f0a839d3f9f859e2921a575ae168d315dc04b8f0a0b44d03b351d75940b54d2ed5efaa117cce6e1f2ca6b26bc828cb287ed1dce38a5b90444d30a9ba7a05a8b041b46fcd9da5b20d84cecfb2928c9e4f723d13dd72e5eb4fc991ee200b55d65be641b064bff9bb173425cd1bc3690fbe6a0cb4879ae4d1fff201077b449427eecbce027699e0248a182827d3c4c049bc087bfda69ef118b9b8f3252e11d5787492dc22a6856889b6a4fec91ebba0e31e04abd89f547cea9693a87ce087b28d45345cdde63a18d582d9f4118c4e9fba659c77f76b07c1f77040000",
    ],
    [
      "ETag",
      "0BwNneLCw0pn8uCZuVT+Dw==",
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
      "Thu, 02 Sep 2021 19:19:44 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1630610362910"
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
      "ff8d93516f9b3010c7bf8bf75822c1d2d015a90f644b372492b409799a2ae4da0775666c669b545194efbe336dd3a9ad445fe0eefc3b71f7f79f03f923142709b917f5df0eccfe4b0deed6072bb09d74165fad56164840c0d11ac9b3f4369e4cb667f30c94da5d3f6c36f4c23c5e5d2161d90334942407520990dc92e4f78128da00b6312dbb46957d1610b76f7d715dacb2c54fcc1bcd7dbed8e4793acd67e4189c1a3975b4ecf94fb4dd1d03b2d5f72ba8c08062e067698dde0273995fd3d2a69530b2ba330c2ce9e1fea036ba6ba9d17a84955174398ae2711847e138fe7a1985084acda8135a21bb59e37cc46947e54a3fe296241a2361fa1837aefae70eeb82f79bf8305b14f1793fe0ff00654c77ca958360258c754feabd80cf2abc2525fd24885725e4105483e2608628d196947303d60e92da96b46d4fd874b9ccdfaba2b8d1820f833b310048b73b01d7f932fd485a34d8ab563fd262f68eb00e6d73428a6c3e5b17e9fcc67377cf4698ee1dd81ba3d15516bca1a2f0fcdbe4220e9f3cf65d7bdfe17712673a0808a3f8abfc128e241595168eff00ea3362f188030000",
    ],
    [
      "ETag",
      "+AQ655j+MIennvFhUUa7rw==",
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
      "Thu, 02 Sep 2021 19:19:45 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
        types: ["STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "ejervois0@example.com" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1630610362910",
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
      "6b",
      "4f",
      "e33010fc2b91ef2b6d93f491b45205087210a90f4853103a9d5adbd9e40c69dc8b9d7208f5bfdfc6a13c84049f1a7967766677a7cfe4411409191126b2bf15944f3fee2523470434cdf0759ea4dea5eca4e9e3ddc580edaec45486ec7a3c4684a8598a6eb639b494ac4a0e6ab45cb4b352565b5a4ad9c2462dd76e3983ae3d70eceec01d3a36f214e4e944140fc8fea3f5568d3a9d83763b9332cb816e856a73b9797defecdcceb694f7c0b5ea7c94eca08aea7c2d7a9c4b4eb590c578b94003958272051b2a72b4f0c64cd8c9c7d66d4137ed0cc13bc181722eab42d7b6b00597452ab2aa345dc9e899189bef3ec822980467b1b5561a7bae2daaacd5aa0455e5dafa19cda7d61ae749450e6a6ddd5e065160596b63696d8dad636b124ec3d872502901a545617462ca72a8355e56117e3e404da09a2a688a2bcf1e50c7b7872c651e4ffd6e9fa53630e633af4fbbcce6c31ef412061479baee6e58b4900538d44decbeedf56c18f4fcae3f00d7717d065de6d9c3d44db8e7f653ee90fd11792c858673a1b65289661fe4360ae3601547cbd9d9691c9831528ab39f37e6ea21defbd4382482be986b5f578544a57ab9e12c0ea2d3b338bc099a7b4e20a3fc69f1172f9ad25c01a2694937a0a19cca049746aee68b300ee7b3d30932cc91ae0e084546bf9edf08f1d3d66c599b5fb288a37076610c1c103734af0c64d77c10b8c79048a1ec13f8677c9b98ecf7bf9185816c3a92eb6510dd91e62982144a28f8f7f744b0297cfbbf3a841cb1187394c1e86981e9e1aa16e1253429129bdacc81edf7fbbe470cb8d49f6a9e333cacabee5177840d14fa65a226e438682356a9571016f1f833b3b9fd7f9683b31e64040000",
    ],
    [
      "ETag",
      "Odf7Ho/ffwYG6bvPiMoIbQ==",
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
      "Thu, 02 Sep 2021 19:19:45 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1630610362910"
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
      "6f",
      "82301086ffcbedab2ca06206891fd4b0cd441745596216634a3d10058eb565c618fffbae6c5fdacbdbe7ee9ef40e97a23e420869917fb7a86e4f399ab52d62d46d69345f0dd51aa1076844cee4eed2c652bfa6bb619ad4f9ecf4f6195d93f578cc849627ac048477c80a2c8f1ac2af3bd4a2426e3b1c54379131736b6cb29d2fa3cd76b25c7154d1d1461fc96231992e2278ec1f3d38531a63860a6b897668a3e88cd2ccadaf165553a2a3a95512357470f7902b6a1ba1881c4e9cbeeb78a3813bf2dcc1a81f782e832549610aaa994d36c06b0c1951c674655df018505dc9e65977fed8f8d97f717d3ff082611458b9fd7fdbf46650af14b18346bb7ee0fa7f3233b28286c58d6ab10752f0e7bc1706c24c941a1fbf82e6e7167a010000",
    ],
    [
      "ETag",
      "YkuRcsFbY4bUngChGVEwUQ==",
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
      "Thu, 02 Sep 2021 19:19:46 GMT",
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
      "82300000d0bb646d1dcaafd01d024208a12888c88609103b8a222430804eef5ea7d7a8ef0eef01485952cef3fe56d3067c829988fab25ca2565b59e399158695a0c0ecd0f415f5533895619b11577049a5dd3b4131a05c7938d966b76810376fb1d4c0f8d08542b1e734f21994509a54e86cb78740504491d5943a4e9dd584ab1514d6e8fe61a2a39dc68965b8148fb64aac5db80d5335bfd84d515f5d29e3812f8fa52e2ab2aa3af1bbcbf865dd7983381cf616c6d83111cc7cc9c0b382dbce64a13fd5706dabdeb561c1980ca6676cb5efdd66868576acc8f2e5e5ff020b40a7f6c428cf4fcfed92a2eb0bf0573fefe7963effaf286194819f5f5d00bc2319040000",
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
      "Thu, 02 Sep 2021 19:19:46 GMT",
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
      jobId: "grouparoo-job-21-1630610362910",
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
      "ff85536b6f9b3014fd2bc8fbda04425e2452b446095d9112b20269b74e133270a16e0926d864abaafcf75d4cd3b5aad47ec2f63de79e731f3c91075624644a2296ed6ba81ebfdcf3889c119034c3575fa7fb1fb7b7c97a79b0fa7fef0ed97e3ca057b3192258c3127457e6d011bcae6210d3addfcd2a5e97b4e2bc83893a66afd31bf58d51cfe88fcc49cf409e803c5db1e201d977529662aaeb27ed6ec67996032d99e8c67cf7f2ae1f4cbdacf83dc452e86f25755411fac7a25f731e53c97831dbfa68a0165085b0a32c470bff994974fe367597d15d3743f081c540e398d7856c6c618a981729cbea4a6525d327a26cbe3a10df5ed98b408b795eef8ab0a03b38d3122a69281f4bd02ebccd5a73dc8b8db79e07cec60dfdc5a5bd9e77179bd576edfadacda5edd99aa4510e8aabcdb4737573f182fa0908c90aa51e34cf8df273839cf7636908282da00d866363447b963189d2681ca7567f18a5064491158d87b41f19f164008324028a3c25aa58b4e0c5a80f6330601c52cb4cc201b592d01a9a937000bd640851929849428e67e44fc5242c9928b9606d87c88de7047618785b77310f6c55424aeb5c2e5b634d01af3d4a2c10411fd4746ca28ca352d36ec70d6c6fbe089c6bbb9df00a321a3ffa7b9c714a730188a615364f42b5e609368cb8f3b5bd44b09ad8f7535090e9af27d2f4bc71f1aae52ff40007d8d895ea4bfcc073dc6fcace09714df35a410eed819468f90e6b43d7c7df88c4256db390abadedfd24ed9307295450c49f4f13c12af0e9bf765a7cc4e2eaa38c9078c7dd8945231257d0ee1053e59ed8d6683032890257f25d6c6899a7ae35399a8cb083423e57d42e3e16da8ad5e20584411cbfabba75fc07c457ca6678040000",
    ],
    [
      "ETag",
      "S/aqXZZdMDv83xhvgq74aQ==",
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
      "Thu, 02 Sep 2021 19:19:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414fc2401085ffcb782d492b58a50987822018408472308690a59d96c2b65b76b71a42f8efce5644a3267a6967a6df6cdf7bed01b6691e8107ab34d99528f71709ea47534c51955c2bba1522570816a06609911d9dddfbbbde76132673d91f154f6bdeec25ad16112a5c63c6c03b409c228f1478cf07c85986b4160a5e66f9b2ea2cd0fbc20c67c17430bea33e1391e9c7f3e1d06f0fbb70b4ce8b11d36c59f1ff585b1c2dd888d5146394988768b414526c30d4036353b1ace05853a294212aa8e0ea412245593029448d26b54ba7e6b875db75ecba7bd9746c02b908994e454eec7c46fa400bcdf854bc924b700990554986e3eafa42e334aa8c9872300edc46a5ef2b40d2e294e3f26f90f4ae197d860fec14c1778e65a2ccf599ea0d1ffcdf8ea34c3f8fbaf583ee0f42694aea8c0483517716f8a389e11627efedbd463591828254683274ecc6cdd5b56bbfc7da11266a7a8fa7658916848cfe8e7eaac18b1957787c034c9600b37b020000",
    ],
    [
      "ETag",
      "CtmJAqFkjcgUrHMpYhl9Fg==",
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
      "Thu, 02 Sep 2021 19:19:47 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1630610362910",
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
      "0000000002ff85535b4fa34014fe2b64f645135ba0144a9b346e535997585bb7a59addcda61de080a3c0e0cce0c635fdef7b00eb2526fa049cf35dce8d4772cb8a988c48c8d2bb0ac4c3971b1e9223028aa6189d9d4d7a95c8cb7ffa5cfeb24bb0fc3b6b958ec78860354bd2bccca02379252290a3f5aa9b0a5e955470de41a14eafd7311dcb704cc3727a43d3409e842c99b1e216d9d74a9572a4eb7bef6eca799a012d99ec463c7f8eebf73dbd14fc062225f5b7963aba48fd63d3e38c4754315e8cd72b2ca092203690539661092fcc38fcfa56bacb68de4d117ccf22a051c4ab42d565a144c48b84a5956854c9e8913465be7a212b6fe64d036dba98ccbcd5d43b985c9e1e6c695e6b6c0f8f34e350a352db6c04c82a53dab7e5e25cdb96687b4d25c8ad76f5dd5b7a1a86044f58061b166fb5b176accdfc733fd04c2c2106a958d11410d03083dafc6946fefbcdd404aa50bb4d6e0686434dd7188649388812d7b2c3c4803074c3814dadd088867de8c72150e4a95abd61d18217f6d00227e99be0dac9308c07ae456d636844aee1d818b707b1139b31b5c8ee88fc154cc109932597ac1d14b95afa81b70996ebf97412784d1b09c5099cb4c5d54dbcae53619308faa0af5d9d651c9deaa9fbf3c05b4ea6817fe9b58b9e414aa387d51dae3aa19904445341735020ce798c4323178b951ff88bf964868c667b177b8424a3df8f2f84e0a16ca6ac9a67ede5f41bff3de092665583b86f5f884976bb3f88c0a36cc9e4c7da5bfe246d6809090828a2cf5787e026f1e9bfb53f74c4e2a9a38d54f88d8712c9da2412d01e0ccb9bf29ed8eea0e7daa4010bf52ed73787fbc9d41ab522e450a8a78eda43c7465bb34a3e8330897b9efbf353ccfe077209871768040000",
    ],
    [
      "ETag",
      "LKA2urmpz/NsZ5pe3Iq3Sg==",
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
      "Thu, 02 Sep 2021 19:19:47 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1630610362910"
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
      "0002ff2d904d4fc3300c40ff8bb9aed00f69884a3b746c08b40ab6c2c4014d5396baa523adbb241d5453ff3b4ee192d8ceb3fd940b7c554d0e311caaf2d4a1eeaf4ab41b1764683a650d5f2d350661026845c964bec9faf6b8fa592d4eeabca86f9649b47edfcc664c18f989b580f80245852a37107f5ca0113572db7eafc7898cd9be759587f42579e3b4a6dca5cfdb344de6e91286dd3081231d322c506323d10d6c351d51da27e76a44dd2af40c755aa281111e1f4a4d5d2b3491c7152f0cbd601af9d3c08fa6e15de033a8480a5b51c3ecf615788d252b5446dfac0a01037a0cd9ba18cfb32b5fdf46ce69f74fcf7b8b66ad89571b745ba3d0ff73b827e765d9d7ea0e272005ffc76365212e843238fc0289c774d16d010000",
    ],
    [
      "ETag",
      "dQRypjKxKDqlvDm/EA3PWQ==",
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
      "Thu, 02 Sep 2021 19:19:48 GMT",
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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64ad8ef24f77041522880868d50d133154fe0cffd0e9ddebf41af5dde17d031286b46982b64c69013e00231c5c840bb352d07a887985bbd953e1c4e380ac02bb9e7f8221cef7961ff592217aeaa7a931c9f5ecaf4144ee738bc7f4d4e1cb33b1052f55eb36e7fd4bd21f9dfd5148ad12397af33007df95c8adb4d42922d7b52e75d710ca8ab03d503ed9d4732caebbb020d090ad68e3f49b038b97dc6e37a16055692533846ce9ccb71d6363a963ea5eccf3d599a61e09d19d642aa7db3556229c967728ea5abbd21e79c69fa9a06476a648f2e2ededff023340c72aae6913c4afedbc08e10cfcd50f5a56d1d77f44494d6bf0f30b5e76816019040000",
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
      "Thu, 02 Sep 2021 19:19:48 GMT",
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
      jobId: "grouparoo-job-23-1630610362910",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda0492d0bca468cd52baa225a405d26a9a2664cc85ba054cb1e91455f9efbb98a66b55a99390c0bee7dc73ee8367f2c0cb84cc49ccb3c706eafd977b119313028a6678fbe33a83c78bf8ca51f23ab3eb640fd5cdb76cb140046f599216550e3d299a9a819cef827e568ba6a2b5103d4cd41b8e7a83f1c81a0facd178381b58c89390a76b5e3e20fb4ea94ace4df3a8ddcf84c872a015977d268ad77bf3696856b5b807a6a4f95ed24415697e2efa35178c2a2ecac52e40038d843a8282f21c2dfc6326f1d9fbd47d4e8b7e86e027ce8032269a52b5b630051365cab3a6d659c9fc99689b6f3e48e0ac9d5568309137451995b4801323a18a466a5f8171e16f3786eb5d6cfdcd3274b75e14ac2e9dcdb2bfdaae771b2f306e2f1ddf31148d73d05c63619ce9938707d44f402a5e6af5b0bd6e955f1ae47e1c4b4b4069095d309a58633a985ab3388d272c9d8e4ee3d482389ec693533a8a2d36b3c14e62a0c8d3a29a454b514ed96c9458f13062c88e6c0b9288ce52169d324826f698327b6893c309f9537305e75c5642f2ae43e4d67743270afd9db75a868e2e21a54daece3b636d016f3d2a2c10419fd47468a35ca052db6ed70b1d7fb90add1ba79bf01a32caf6c123ce38a5b90444d31a9ba7a0de88041b46bce5c63947b09ed8d53128c9fcd733697bdeba78d3f2577a88036ced2afd2641e8bbde776de788b8a179a3214fdd07a9d0f21dd686ae0fbf11894bda6521d73bc7ff49ba2b1f52a8a164ff9f268275e0bfffda71f1118bab8f3252e1197787c95684d5d0ed10d7e51ed9d3e9706c130daed587183ec7aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd3dd3afc054b122af178040000",
    ],
    [
      "ETag",
      "KQgeqFbPEtsQg4rdyepVBg==",
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
      "Thu, 02 Sep 2021 19:19:48 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92414f83401085ffcb789426d42a2a490fb45625a5b552d48331cd0a43a50283bb8b4dd3f4bf3b8bb51a35d10bcc0cdf2cef3d58c3735626e0c263367fa951aef6e6a8af4d11a2aa73adf85651a9102c402de64c0e179e93527fdfc670585fc9a17d7bbebc5b76bb4ca8f8090b01ee1ad20cf344817bbf865214c86b31e57551ce9ace02bdaacc701a85fef882fb8212d38f6f82c0eb0503d858bbc54468316bf87fac3d6c2c58d06388294a2c63345a2a490b8cb56f6c2a515439b614d53246050ddc3c984baa2b21895a3c691d745a6da7633b6dbbe31c9cb66d06738a85cea864f666cafa40931679484b76090e03b229d970da5c5f799c258d1153fae3c8396cf47d05585a9ae538fb1b64bd4f823fc307b68de03b270aaa4bbda3ce832befb7e338d3cfa3cebc68f083509a93da21913f1a4c236f3431dcc3d67b6fa5514d2471900a4d866dfbf0e4e8d8b1df63ed93899adfe36a59a305b1e0bfe332d3e0a62257b879033ae8f4a77b020000",
    ],
    [
      "ETag",
      "KjA6foC+0eRKuOrK0VFwWw==",
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
      "Thu, 02 Sep 2021 19:19:49 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1630610362910",
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
      "e2",
      "40",
      "14",
      "fe2bcdeccb6e22d016289784b806bbda0441a168369b0dcc4c4feb68dba9335336c6f0dff7b4152f31d1278673becbb9f589dc8b3c2263c244f250827afc7627193922606882d1cb22e7e9796fd04f9c7437b8eee767b2bbbb9a4c10212a96a65991424bcb5271d0e3f5aa9d2859165449d942a196db6b395ed7f61cbbebb923c7469e86349e89fc1ed9b7c6147adce91cbcdb8994490ab410bacd65f612efecdc4ea1e41d70a33bef2d3be8a23b9f9b1ea7925323643e59afb0805283da4046458a25bc3223f6f3bd745bd0ac9d2078273850ce65999baa2c94e0328f4552aa5a958c9f485de69b0759f9337f1a5ad3c57a1e7edfd2ac226f7f58545b9b8d025da6c6fab55c5c58db02bd6ea906bdb56ecefda56f6148c958a4b011d1d69a58c7d62cb80842cb41df08b41179ed1a529642e5f83c98e0e33a2a0235a8dd243703dba3ced01eb1980d783cecf6596c03634336e8d32eb3f9a807bd8801459ea9d46b16cd65ce5c6e7b23d78e0078c4068e4b29e338da3e8d5d7c8dbcb867f7ba4e9fec8fc83f250c9c0a5d482d9ae9909b6510fa9b70b99e4f4f42bf6e23a63881d3a6b8aa89b7751a6c12419ff4b5afb242a25335ea601efacb9369185cfbcd76679050feb87ac0fdc634d58068aa680606d4858ca03aebc52a0883c5fc64868c7a6597078426e33f4faf84f0b1a8a76ceadfcacbebd5fe07c0354dcb1ab16b1ec421fbfd5f44e025366472b5f697bf49135a420c0a72fef5ea105c27befca00ed78d58bc6fb4d106ffe3a1705d997005cdc188ac2eef993d1c750723528395f990f35cf730994aa352840c72f3dc5173ddd8686356ea17102671cff3607e86d9ffa98c5c26",
      "5d040000",
    ],
    [
      "ETag",
      "PpnclH475g1lv7V5nGo3vQ==",
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
      "Thu, 02 Sep 2021 19:19:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1630610362910"
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
      "2d90dd4e83401046df65bc2c24fc34a492f4429458223615db1b4dd36c61402a30b8bb6808e9bb3b8bdeec4ebe393b73b2137cd65d01219cebea6b4039de54a85f4c91a11a1aadf8eaa9530816a0161593ab87788c8645ffd42d579b28787e8b778ba45aaf9950f907b602c209ca1a9b4241f83e41275ae467a7939c2732a6c7de24c9761f3fc619072d1526d81ed2f42e4a63b81eaf165ce89c618912bb1ccdc85ed205739d185b25dabe415bd120735430c373a39234f44212d99cd8ded27603df095cc70fbc5bd761b0a15ce89a3a660fafc06b3469d164f4c3b2e03220e792bdcbf9fce6383042c77f341a35aa9d24deabd0acf43de74fe09e8c9466592d07b42017fc1d9b5a43588a46e1f5178e6214ed6c010000",
    ],
    [
      "ETag",
      "8DEyBu+pKn48HB6MZEP+Ig==",
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
      "Thu, 02 Sep 2021 19:19:50 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffedd3cb7282300040d17fc95a1d85fa487750ad8e18691088769341080dd8f00860884effbd4e7fa39ef5ddde3b88e298350d6dcb0b2bc02bd0910147f1c8a916f65271dfabf84a5ea63344f0588abab0fbedf1c5db0c4bbe56b9b7f3b5d069338d6884540e53eaa7652082bc707b14bfd7bd89dea0957d2d305ef3125f17cadaa3d57565a35c90e630c173e5d1d485c4383851d11d43bef515b4f99850a733cefd5e6e03f3b4a97921ce7177b186a7186a437a43060f759024d8091196a526f5f7fc916a68f29bf8201089e5b29d65c44e749327f3f036493ed5ce851e0e464f4fff171800d65799640dcd1eb79b530807e06f7ddaea8a3dfeb7592499043fbf8ec3482a19040000",
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
      "Thu, 02 Sep 2021 19:19:50 GMT",
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
      jobId: "grouparoo-job-25-1630610362910",
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
      "6b",
      "4f",
      "a3",
      "40",
      "14",
      "fd",
      "2b",
      "64f6ab2db4b5f491346b53712569a902d56c361b320c173a0a0c3283c698fef7bd0cd6d598e82766e69e73cfb90f5ec83d2f13322731cf1e1aa89f7fdc89989c105034c3d7ebc25d5d30ebaeb8125b9316fbbd6b0b6fb9582082b72c498b2a879e144dcd40ce77413fab4553d15a881e26ea0dc7bd813db2ec8135b287b381853c0979bae6e53db2f74a55726e9a47ed7e26449603adb8ec3351bcbd9b8f43b3aac51d3025cd8f9226aa48f36bd19fb9605471512e76011a6824d4111494e768e13f3389cf3ea6ee735af433043f72069431d194aab585299828539e35b5ce4ae62f44db7c772081b37656a1c144de146554d2024e8c842a1aa9e70a8c0b7fbb315cef62eb6f96a1bbf5a26075e96c96fdd576bddb7881717be9f88ea1689c83e61a0be34cdf3cbca07e0252f152ab87ed73abfcda20f7f3585a024a4be882d1c4b2e9606acde2349eb0743a1ac7a905713c8d27633a8a2d363b85d324068a3c2daa59b414e57408b32906233b194fa2d374c4a2d968964683294d86c37810333b218713f2547305e75c5642f2ae43e4d67743270afd9db75a868e2e21a54daece3b636d01ef3d2a2c10415fd47468a35ca052db6ed70b1d7fb90add1ba79bf01a32ca9e83079c714a730988a635364f41bd1109368c78cb8d738e603db1ab635092f99f17d2f6bc75f1aee56ff41007d8da55fa4b82d077bd5fdace117143f346431ebb03a9d0f21e6b43d787bf88c425edb290eb9de3ff26dd930f29d450b2efa789601df8f65f3b2e3e6271f551462abce3ee30d98ab01aba1de2badc237b668dad09d1e05a7d8ad943fbd8b536",
      "479b110a28d56b45dde263a19d5823df4018c4f17bba5b877f9092867e78040000",
    ],
    [
      "ETag",
      "QmICFc0jmPoO/amhhI6oNA==",
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
      "Thu, 02 Sep 2021 19:19:50 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1630610362910"
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
      "92",
      "dd",
      "4e",
      "c2401085df65bc6d63f9abd0848ba228104084e28d216469a750dc76ebee5683847777b6221a35d19b7666facdf69cd3eee131c922f06095ac9f0a94bbb335ea3b534c51155c2bbae522530816a0666b229b03273a8fef5fb92a063ce159afd5e98dfd769b08156e3065e0ed214e90470abc873d642c455a0b052fd26c597616e85d6e86b360da1fdf509f8ac8f4e3f970e877865d3858a7c58869b62cf97fac2d0e166cc56a8a314acc42345a7229b618eabeb1a9589a73b4952864880a4ab87cb096a2c89914c2a6895d6dd815b7e6b815a7e6565b1587402e42a61391113b9f913ed042333e152fe4125c02645992e1b8bc3ed338894a23a6ec8f03b75eeafb0a90b438e1b8fc1b24bd1b469fe1033b46f09d63a928327da2ae87b7fe6fc751a69f475df941f707a13425754282fea83b0bfcd1c4708ba3f7ce4ea39a4841412a3419569c7ab371e13aefb15e0a1335bdc7d3b2400b42467f472fd1e0c58c2b3cbc01477061d07b020000",
    ],
    [
      "ETag",
      "8J0d/fVzlsuJlilnH9BHNA==",
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
      "Thu, 02 Sep 2021 19:19:51 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1630610362910",
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
      "4fa34014fe2b64f64513db022dbd258ddbadaccba617b7a51ab3d9b433c301a70283cca031a6ff7d0f60bdc4449f18e67c97739b27722bd2800c0913d15d01f9e3b79d64e48480a611de3abf772d2f33adbb70779d4875bebcfc71d379188d10214a96a249164343c922e7a086eb5533ca6591d15cca060a35ec6ec3eab6cdae65b6bbf6c03291a7200ea722bd45f68dd6991ab65a07ef6624651403cd846a7299bcdcb7eeed5696cb1d70ad5aef2d5be8a25a9f9b9ec692532d643a5aaf30814241be81848a1853786506ecfb7be9a6a0493342f0bde040399745aacbb45082cb3414519157aa64f844aa34df1cc8ca9dba13df982cc6537735718f56ebd9d19626a5c6f6f8c4308f0daa8ccd260755c4daf8b95ccc8c6d86b6375481da1a57bfdca56be0552e4311c346045b63649c1a536fe6f986852904a0b448ab047cca6228cd9f7be47d9c4c49a01ab5ebe0a66776a9d537072c643d1ef6db0e0b4d60accf7a0e6d33930f3ad0091850e4e952bd62d154a68ec3200cfa9d412f604ebbc36d6a433b64d46681c39d2eb71974428080ec4fc8432e349c09954925ea4691aba5e7bb1b7fb99e4fc6be5b951152ecc0599d5c59c4db3c351689a04feada975121d1a9ecba37f7dde578e27b976e3de82944943faeee70d4218d15209ae634010df94c06d83472b15879beb7988fa7c8a8a67771402832fcfbf44af01fb3aacbbafa965edd4ee57f005cd2b8a810f7f5815864bfff87085cca9a4cfeacdde535a9af9610420e29ff7a7408ae025fbeadc3a22316571d6d94c67f5c14ae4a139e43bd3022a9d27b660f6ccba95ea6a6b9fe10b37bdd43674a8d52111248f57345f5a263a1b559a15e4018c439cfbdf93946ff03aa06608768040000",
    ],
    [
      "ETag",
      "5Jj/Ip01qfjYmosGRVBh4w==",
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
      "Thu, 02 Sep 2021 19:19:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90514f83301080ffcbf93a0c8c8428c91ec068342173a23c9965e9e0c0cec2d5b6cc9165ffdd2bf3a5bdbb7e77f7a567f896430329ec65f733a2996e3a746f3e28d18eca59be340d166101e844c7e4263b1df3665369b3964a676372923d65ab1513b6fec25e407a8656a26a2ca49f6718448fdcb6db997922636ed2bef254bc661f9cf6d4f8745d154596178f70d95e1670a07d892d1a1c6af403b5a103d6eec5bb5ad16b8581a5d1d4686186e787ced0a885210ab8122c93204ae23089c23859de4721838a6ae1240dcc56efc06b1c39a14afa655588183073c8d6ed7c1e7d39bc8defbcd4f61fcf2787766388775bf46be365789578202fe658d8991117500bfe9067e9206d85b278f90331f46f776e010000",
    ],
    [
      "ETag",
      "PAxvBdPUprNilpAu6ximoA==",
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
      "Thu, 02 Sep 2021 19:19:52 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffedd34b7282300000d0bb646d182308d29d0804ac0aa5d0d66e327c8241191a3e1262a777afd36bd47787f70dd23ca77d4f86af0b6dc01390e9c25472e599af2c5b9c597db3e067476db868a22a1f9bcc80dbbed458b895ae9159c390e08c894be431bbfdd89b5a20a45865c1d51f7a979149b33d5817aff3b83d9622f251917417b243614f3701f12b744e0d2685b97704633ee6212f125c5cdd7c07715b1973fee29d2716a8d7e0d06cb88fdcd6d2ebe321ae97b17cdb9c1073903eaa36947114eaa5c0a4b504df39a5744659ac6efbe3fa3467ef6b1c1bf5c85562c2427978f8bfc00cd089571ded4975dfae2e4d7306feea9341727aff6fd1b4a31df8f9055293c54119040000",
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
      "Thu, 02 Sep 2021 19:19:52 GMT",
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
      jobId: "grouparoo-job-27-1630610362910",
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
      "ff85535d6f9b3014fd2bc87b5c13202190448ad628a16ba484ac84b4daa609d9c650b780293699aa2aff7d17d374ad2ab54fd8bee7dc73ee074fe89e97099a22c2b38786d58f5fee04416788299cc1ab48f1f5af6591d0b5f3d5f16eb78772bfd85ccd6680e02d4be2a2ca594f8aa6a64c4ef7bb7e568ba6c2b5103d48d41b783ddb1d5aae6d0dddc1c4b68027599eae79790fec5ba52a3935cd93763f1322cb19aeb8ec5351bcbc9b878159d5e28e5125cdb79226a848f363d16fb9a0587151cef63b30d04856c7acc03c070bff9909397f9bbacf71d1cf007ce094614a4553aad616a4a0a24c79d6d43a2b9a3e216df3d501edfcb5bf880c2af2a628e31217eccc48b0c2b17aac9871116e37c62ab8d8869b79b4da06f16e71e96fe6fdc576bddf043be3e6d20f7d43619233cd3566c6b9be057001fd8449c54bad1eb5cfadf2738356efc7d212405ab22e187b968bedb1352129f1683a1e8e486a3142c6c41be121b1e8c4614e4218069e16d52c5c8ad21bd88e6b511c534246b1633983988c5d2f76126a533cb62d3cb2d0f10cfdadb9624b2e2b2179d7217413ae223f8ec27db09847be2e21c54dae969db1b680d71e151408a00f6a3ab6512e40a96df72a88fc70be8856d77e37e135cb307ddc3dc08c539c4b06685c43f314ab37228186a160bef19700d613fb710a4a34fdfd84da9eb72e5eb5fc851ec1005bbb4a7fd12e0a57c1776de784b8c679a32187ee802ab07c0bb581ebe31f40c2927659d0d5de0f7fa2ee296429ab59493f9f268075e0d37fedb4f88085d50719a9e00ebb43652b426bd6ed10d7e59ed893a1e5b948836bf52e367027a7aeb539da8cac60a57aaea85b7c28b4136be40b088230fe4077ebf80fe1abaa1b78040000",
    ],
    [
      "ETag",
      "ofaVZDmdcL4+47hOvnUCMQ==",
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
      "Thu, 02 Sep 2021 19:19:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1630610362910"
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
      "0002ff8d92dd6e82401085df657a8b09f8834ae20556db9aa855c4abc6981506c4028bbb4bad31be7b67a9b54ddba4bd8199e19be59c0327784ef2101cd824f1be4471bc8951cd75e1a12c5325e956f05c2218808ac544b6f0381f74bdce6191bfda8dbd6985a638c4bd1e1132d862c6c0394194601a4a709e4e90b30c692de06999e5ebaa33401d0b3d5cf8de687a4f7dc643dd4f97e3b1db1f0fe16c5c1743a6d8bae2ffb1b63a1bb0e31b0f23149807a8b51482ef3050236d53b2ac48b1267929029450c1d58358f0b26082f31a4d6af576cdb21ba66d990dbbdeb54c02531e3095f09cd8e582f481e28aa51e3f904bb00910554986a3eafa42e324ac8ce87234f5ed66a5ef2b40d2a224c5f5df20e9dd32fa0c1fd82582ef1ccb7899ab2b75377e747f3b8e32fd3c6ae0fac31f845494d415f14793e1c2772733cdad2edefb4785722638052951676899cd4eab6d9befb1de721d35bdc751a2440302467fc743a2c089582af1fc06172a8d3a7b020000",
    ],
    [
      "ETag",
      "5eyQD9R8wSnx63q01d0rwg==",
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
      "Thu, 02 Sep 2021 19:19:53 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1630610362910",
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
      "0002ff8553594fdb4010fe2bd6f6a5554962c7b91c29a2140c584a024d1ca0aaaa64773d360bb6d7ecaea910ca7fefd8261cad044fb667be632e3f925b9147644c9848ee4a500f9f6e24237b040c4d307a256fe393ef2c3cbe9af64f68b282bba3affd64324184a8589a66450a2d2d4bc5418f57cb76a264595025650b855add51cb19b8f6c0b1dd41d7736ce46948e3a9c86f917d6d4ca1c79dcecebb9d4899a4400ba1db5c66cff1ce7db753287903dce8ce5bcb0ebae8cefba6fba9e4d408994f564b2ca0d4a0d690519162092fcc887d7b2bdd16346b2708be171c28e7b2cc4d55164a7099c7222955ad4ac68fa42ef3d50b59fa53ff30b466c1fcf386661575f3c5a2da5aaf15e83235d6f1e26c666d0a74baa61af4c6ba3cf517be8521256391c25a441b6b62ed5bd36016849683ae116823f2da33a42c85caef692cc1ffcba808d4a076935c0fed017546b6c76236e4f1c8edb3d806c6466cd8a72eb3b9d7835ec48022cf54ea358be632b75d1ebb2eb5c1193acc1b42dcb539ef7b0366f79837e80e47d1288e780464bb47fe2861e048e8426ad1cc865c2e82d05f878bd5fcf020f4eb36628a13386a8aab9a785da7c12611f44e5fdb2a2b243a55830ee6a1bf38380c830bbfd9ed1412ca1f9677b8dd98a61a104d15cdc0809a49ac724ccecf9641189ccd0fa6c8a81776be436832fef5f842081f8a7acaa67e565e835eedbf035cd0b4ac11f7cd0b71c876fb1b1178870d99fc58f98b9fa4092d20060539ff787508ae131ffe4ebbdb462c5e37da6883df78285c57265c41733022abcb7b627baed7eb921aacccbfb99e63f77793a9342a45c820374f1d35b78d8d3666a57e066112f73c0fe62798fd0b69ff42805b040000",
    ],
    [
      "ETag",
      "XokfGBbTFXL5GagUeqD+5g==",
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
      "Thu, 02 Sep 2021 19:19:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1630610362910"
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
      "4f83301080ffcbf93a0c303327c91e989b998ad34d171fccb2747020b3f4b02d1a42f8efbba22fedddf5bbbb2fede0ab541944702c8bef06757b51a0ddb8608ba691d6f05593320823402b0a47d2fa69b958a887fc3adb4c1fd5fa1dfd553c9b3161d24fac04441de425cacc40f4d181121572dbe1a087898cd9b67695bbe4397ee3b4a2cca5eb5d92c4f36409fdbe1fc1898e5bcc51a34ad10dac359d30b5f7ced588aa96e8196a748a06067878283435b5d0441e57bc70ea0593b13f09fcf124bc097c0625a5c296a498ddbd02afb16485dcd22fab42c0801e42b6ce87f3c7952faf42e7b4ffa7e7ad45f3a289571b745bc7a1ffe7704bcecbb2afd50d8e2015fc1fabd242940b69b03f03dd72111c6d010000",
    ],
    [
      "ETag",
      "boNMEDDnJf7dQ8KnNWe0HA==",
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
      "Thu, 02 Sep 2021 19:19:54 GMT",
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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bbf45b088580b0bf01632838ab8c09fc34150a82224ddb0d70d9dd67768df9eef0be01294b2a0496c3995ec1139889eea8a51a31dbf5c75342e0f4a24f3562782d6d18efdece3e7d3f0abc45be21fb2fcbe1f5263385adb7d75dd56f9036e67dbe3cd771d255e91e37785e41d38bd8328545afe032bee83c9d3ebbfd6bb63bd2a2d990d6f53a14c2ccbe795e4405194f41d3167a2f0bc615692a4a34c283166cd36415442470f366bb125ebd261f41681b011aa2b56168728e4356e7dda993ae5fd9d660417169cdabd5ccbc4407c361489ffde74a7d78f8bfc002d089b59c0adcdeb71ba6e32cc05f7d2c6746efff5d4a38e5e0e717dc4fdfa119040000",
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
      "Thu, 02 Sep 2021 19:19:54 GMT",
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
      jobId: "grouparoo-job-29-1630610362910",
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
      "00000002ff85536b6f9b3014fd2bc8fbda26e4414222456b96d29529211d9056d33421dbb9507704536c525555fefb2ea6e9da4d6a3f61fb9e73cfb90f9ec86f516cc9943091ddd7503d7eba938c9c10d034c3d73d67b791f6a3c5fc8bb81a5e4e9cfd3afaf6309b2142342c4577650ea74ad6150735dd449dac9275492b294f31d1697f72da1b0dec51cf1e8cfa939e8d3c0579ba14c56f64df6a5daa69b77bd4ee64526639d052a80e97bb97f7eebedf2d2b79075cabee5bc92eaaa8eefba29f73c9a916b2986d2234502ba812d85191a385bfcc2d3b7b9bba23e8ae9321782f3850ce655de8c616a6e0b248455657262b993e1163f3d58144ded25bc4169779bd2b9282eee0c4da524d13fd58827511ae57961f5cacc3d53cf6d741122d2ebdd5bcb3582f37ab20b26e2ebdd0b334653918ae35b3cecc2dc00bea6f41695118f5b8796e949f1be4ff3f968680d20ada6032b647b4e7da1396b2314fdd81c3521b1873d9d8a10366f3c910865b06147946d4b068210b7bdc67e03aa3c405ee26436e0f138ac8c4a5ced81d3a6ce43829399c90874a683817aa944ab41d2237a11f7b491c6e82c53cf64c0929ad737dde1a6b0a78ed516381087aa7a643131512959a76fb41ec85f345ec5f7bed84979051fe18dde38c539a2b4034adb0791aaa95dc62c348305f79e7083613bb3a061599fe7c224dcf1b17af5afe428f71808d5d6dbe248a433ff86aec1c11d734af0d64df1e4889966fb136747df885485cd2360bf9bef1c21fa47d0a21850a0afef134116c021ffe6bc7c5472cae3eca288d77dc1dae1a115e41bb43c2947b644f86935e8f1870a5ff8d39f83976adc9d164841d14fab9a276f1b1d056ac562f200ce2f803d3adc31fbb22a97978040000",
    ],
    [
      "ETag",
      "vcbhStISCABiP4H95vOSJw==",
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
      "Thu, 02 Sep 2021 19:19:55 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1630610362910"
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
      "92",
      "5f",
      "53",
      "82",
      "5010c5bfcbf628cce03f4a667cc032b35133c15e1ac7b9c2a22870e9de4b668edfbdbd64d65433f502bbcb6f2fe71cd8c326ce427060112f9f0a14bbb325aa7b5d4c5016899274cb7926110c40c5964436bdcdda6dbebe78ad5e58a9a8dbc6c3ba9e6ddb6d2264b0c29481b38728c62494e03cee216329d25ac09322cde6656780dae57ae8f993fea8477dca43dd8fa68381db1974e1609c1643a6d8bce4ffb1363b18b0e68b094628300b506bc9055f63a0fadaa664699ea0297921029450c2e583a5e045ce04e7264dcc5acbacda75cbae5a75bbd6aa5a04263c602ae619b1538ff481e28a2513be2597601320ca920c47e5f599c671581ad1657fe4db8d52df5780a4457182f3bf41d2bb62f4193eb06304df3996f2225327ea7a70e7fe761c65fa79d495eb777f1052515227c4ef0fbb9eef0ec79a9b1dbd77760ae558700a52a2ceb06a352e9ae7b6f51eeb25d751d37b1c250a342060f477dcc40a9c8825120f6f0979fd6e7b020000",
    ],
    [
      "ETag",
      "5SkjA5zxS9Gd++tJ4Vj3nw==",
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
      "Thu, 02 Sep 2021 19:19:55 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1630610362910",
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
      "db",
      "6e",
      "9b4010fd15b47d69d5d8c6c677c94a2d8736a8bea4364eda5495bdbb0c641360f1ee92288afcef1d20ce4591922760e69c39336786077223d2800c0913d12e0775ffe95a327244c0d008a38b308877e3d3497e695fa663e7abf31354f76e34428428589a26590c352d73c5410fd7ab7aa4649e5125650d0bd51cbbd6ec3a76b7693bddd6a069234f431c4e457a83ec2b63323d6c340edaf548ca28069a095de732798a376e5b8d4cc96be046375e4b36504537de173d8e25a746c874b45e6103b906b581848a185b786606ecdbebd27541937a84e05bc181722ef3d4146d61092ed35044b92aab92e10329db7cf14256eed49df8d66cfcfbf396260575fbc5a2dada6c14e83c36d6f7e562666d3354baa21af4d6ba387597ae8521254311c346045b6b641d5b536fe6f956135503d046a4a5a64f590c85dea32ddedb6514046ab07695dcf4ec2e6df6ed010b598f877da7c3421b18ebb35e873acce68336b403061479a6a85eb2682ad356873b2d168641bfc75b4ecfeeb07eab0d4ecb0ec0617d743a00de46abc9fe88dc2961e044e84c6a5179432e969eef6efce57a3e19fb6e394648d18193aab96288977d1a1c1241efccb52fb242a25261b437f7dde578e27be76eb5db294494dfaf76b8dd90c61a104d154dc0809ac9004d23678b95e77b8bf9788a8c726167078426c3bf0fcf04ff3e2b5d36e5b3d0eab64bfd03e09cc67989b8ad5e4893ecf7ff1081775891c9afb5bbfc43aad012425090f28f5787e032f1e1ef74b86dc4e275a38c36f88d87c27521c21554072392b2bd47f6a0d3eb74480956e64dae3f181c9c296a14152181d43c4e54dd360e5a89e5fa098449dcf3dc9bffc0ec7f2dcfc4065b040000",
    ],
    [
      "ETag",
      "OfdlqAHCuZ0ZnA3+3Ker6w==",
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
      "Thu, 02 Sep 2021 19:19:55 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1630610362910"
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
      "db",
      "4ec3300c40ffc5bcaea817a9d32aed61e322408541a1bca069ca3ab774b47548dca132eddfe7145e12db39b68f7284afbadb4102dbbafaeed10c1715f28b0b32b47dc3562e4d9d459800b2aa849cfec6fa3a8eb2c1cfa78707fd18afde67bc98cf85b0c527b60a92239435363b0bc9c7113ad5a2b46d36669c28180fda556ed3d5e24dd296762e7dcad374b14c6fe0b43e4d604fdb0c4b34d815e8066a437b2cf8deb95ad5ea063d4bbd29d0c2088f0f95a15e2b43e449c58b7c2f88233f0efc280e67812f604385e29a3a61f35790354cac9a8c7e44150201cc188a75399e0729879761e49cd6fff47260b4cf8664b545b7350afd3f872b725e2cbe6c7a9c40a1e43fee6a86a4548dc5d319a3716d3e6d010000",
    ],
    [
      "ETag",
      "7z6pD63Ry0U7vJpM6OV9tA==",
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
      "Thu, 02 Sep 2021 19:19:56 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffedd35d6e82300000e0bbf4590c5451ba371a8d54442774467c21b5b4ccbf52b165e2b2bbcfec1af3bbc3f70d18e7e2762b4c7d120abc818e41d4e7fd580778f2f5e96626235e84b2d9836c963c5da1e5da5b487b95e3e9c5d32b69ad83eb0f182b970587eaa187617c97de6c4b099ff079341ac3c8aa2664bbcb60db6aba3625de7b1d1eb56eb1a0a94443413f609e607a9f2292c7ec1c96939ae42665d37a9904f4982a2bcdc9ba175457a53dce4e9d37accaeeecc3c4e17367ef66858960e02fc8fb3cf31342a9dcace3515eb58972e250b5d56ea55579f5306f6172eebfbcfc5fa007c45d1f1a712b0ecfed031fa11ef8ab5f984e8be77f2c58231af0f30b1784988719040000",
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
      "Thu, 02 Sep 2021 19:19:57 GMT",
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
      jobId: "grouparoo-job-31-1630610362910",
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
      "0002ff85535d6f9b3014fd2bc87b6d1248082191a2354a689b2d211b9076d53421db31d42d608a4da6aaca7fdfc5345daa4aed13b6ef39f79cfbc1337ae0c50e4d10e1e963cdaaa72ff782a033c4144ee1f5127fcb1dbf5afc8a2ec9eafb7e1edd5e78d96c3a05046f5812e765c63a52d4156572b20dbb6925ea1257427420516760752c67603a963970fa63cb049e6459b2e2c503b0ef942ae5a4d73b6a775321d28ce192cb2e15f9eb7b6fdfef9595b86754c9de5bc91ea8c8dec7a25f3341b1e2a2986e4330504b56c52cc73c030bff993b72fe367597e3bc9b0278cf29c3948aba508d2d48414591f0b4ae7456347946dae6c90185deca9b470615599d177181737666ecb0c2b17a2a9971116cd6c6d2bfd804eb59b4dcf87138bff2d6b3ee7cb3daaefdd0b8b9f202cf5098644c738da971ae6f3e5c407fc7a4e285568f9ae746f9a541cbf7636908202d591b8c47a6832dd71c93848c68e20e86243119212e190df18098746c337b4718069e16d52c5c8862ec9826a143271e91e138b61d4262d77287b1bdb36cd3eedbb63d66e87086fe565cb10597a590bced10ba0996911747c1d69fcf224f9790e03a538bd65853c0a947050502e8839a0e4d940b506adabdf4232f98cda3e5b5d74e78c5524c9fc24798718233c9008d2b689e62d55aeca061c89fadbd0580f5c47e1c83124d7e3fa3a6e78d8b9396bfd22318606357e92f0aa360e95f6a3b47c435ce6a0dd9b7075482e53ba80d5c1ffe001296b4cd827e6ebde016b54f014b58c50afaf93401ac039ffe6bc7c5072cac3ec8480577d81d2a1b115ab17687b82ef7c81e8f2cd7451a5ca977b1417f74ec5a93a3c9c87256a8978adac587425bb15abe822008e3f775b70eff001b95eec378040000",
    ],
    [
      "ETag",
      "GaJm6NrDXTGbLKvCTYFElA==",
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
      "Thu, 02 Sep 2021 19:19:57 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1630610362910"
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
      "92",
      "61",
      "53",
      "82",
      "40",
      "10",
      "86",
      "ff",
      "cb",
      "f6",
      "152648c362c60f5866949a0a4ee3348d73c2a214707477548ee37f6f8fcc9a6aa6bec0eef2ecf1be2f6ce0312d627061912e9f2a14eb8325aab12e2628ab4c49ba95bc900806a0624b222d565c1e5e0d7bbe17346e07b3d75970daba1eb7db44c8688539037703498a592cc1bddb40c172a4b58867555eccebce00b52ef5300827feb0477dce63dd0fa7fdbed7e977616bec1763a6d8bce6ffb176bf35e0812f2698a0c02242ada514fc0123e56b9b92e56586a6e4958850420dd70f96825725139c9b34311bb6693b0dcbb1ad8673746a5b04663c622ae505b1d380f481e28a6513fe422ec12140d425194eeaeb338dd3b836a24b7f183acd5adf5780a4256986f3bf41d2bb62f4193eb05d04df3996f3aa507beaa27fe3fd761c65fa79d4b917767f105251527b24f407dd20f40623cdddefbc77d60ae548700a52a2ced0b69a27c72dc77a8ff58ceba8e93dae12151a1031fa3b2e53056ec23289db377ddc3e1e7b020000",
    ],
    [
      "ETag",
      "0anH/JNGIAS3WMYxYS97KQ==",
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
      "Thu, 02 Sep 2021 19:19:57 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1630610362910",
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
      "0000000002ff85535b4fa34014fe2b64f665376b5b28422f49e39acaee92d4565baa319b4d3b331c7094323833e836a6ff7d0f60bdc4449f8073becbb9f1486e451e93216122bd2b416dbfdc48460e08189a62b45fa6eebf9977d7cb43cffece06dbfed5f92c1d8d10212a96a69b22839696a5e2a087cb453b55b22ca892b285422db7db727cd7f61ddbf5bb03c7469e862c9988fc16d9d7c6147ad8e9ecbddba9946906b410bacde5e639deb9ef760a256f801bdd796bd94117ddf9d8f428939c1a21f3d1728105941ad40a36546458c20b33663fde4ab705ddb45304df0b0e947359e6a62a0b25b8cc139196aa5625c3475297f9ea852c8249308eacf16c398dbeae636a60fdcda2da5aad14e83233d6cff9ecd45a17e8744d35e8b575f93b98071686944c44062b11afad9175644dc2d330b21c748d411b91d79e116519547e4f6309df2fa3225083da4d72d5b37deaf4ed014b588f277dd763890d8cf559cfa32eb3f9e0100e63061479a652af593497b9ed79b68783a4b1ed0138d4a57d6ef71cc7717b5ed7a6accb68d2f7639bec0ec88312064e842ea416cd6cc8e53c8c8255345f4ec7c75150b791509cc049535cd5c4eb3a0d3689a00ffada555921d1a91a74388d82f9f1380a2f8266b7134829df2eee70bb09cd34209a2aba0103ea54c6383472365b8451389b1e4f90512fec6c8fd064f8e7f185106d8b7acaa67e565efe61edbf075cd0acac11f7cd0b71c86ef7171178870d999c2f83f915694273484041ce3f5f1d82ebc4a7bfd3feb6118bd78d36dae0371e0ad7950957d01c8cd8d4e53db1077808035283957997ebfade7e329546a5081bc8cd5347cd6d63a38d59a99f4198c43d4fc3e92fccfe07fba4b3dc5b040000",
    ],
    [
      "ETag",
      "8ug3xO5q7nI50+b9y8YQOg==",
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
      "Thu, 02 Sep 2021 19:19:58 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1630610362910"
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
      "dd",
      "6a",
      "c2",
      "40",
      "10",
      "46",
      "df",
      "657a5903f98140035e68095508daa6f5aa88aceb24262699b83b51447cf7cea6deec0edf9c9d39ec1d4e55778004f655791ed0dc5e4ae42f57e4688786ad5c3d75166102c8aa147275d63a9c15a7b82ebaf5f5f2caeb857fbc4ea742587dc456417287a2c2e66021f9bd43a75a9467bb9d19270ac6b7de25cbd54ffa91e612b47470c16a9365b37996c263fb98404dfb1c0b34d86974237b43356a5e3a5babdabe41cfd260345a18e1b1511a1a7a65883c49bc28f48238f2e3c08fe2f02df0056c482baea81376f30db286895593d355642110c08ca57817e37991387642db273abf31da4f43b2d7a25b1985febfc03b3929165936034e402bf98e45c59014aab1f8f8030d12cc456c010000",
    ],
    [
      "ETag",
      "Nqcc2Afk6jfnOwv+tOH0hw==",
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
      "Thu, 02 Sep 2021 19:20:00 GMT",
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
      "596e82400000d0bbccb7922058a07fe0b0382c122c08fe100ac322b2cc0c5448d3bbd7f41af5dde17d832ccf3163e934b4b807ef60cd760a9773f6286bf0d1c022eed6859c5b2688e16038d7b62a5d5b8a3fe0619bf81e7c88ce5117d96824125f59cabc88f7d0d654c72d4972bdf4b97c8a3cb5f0a5683ddee9c2e64fc4bb7c6da17ab285202eaba24824a85e697d8bacce6f16b3776654759e4e2d67307c7d8b76669a91db64e03d390941df30ff61a2b5e2293948a1d9f1b33ac7dda04dad8c89a905972f89afcf1121a84d64e4bd05d080292e34e89c66b99ef6dccbcbff0536002f6343314b9be77661af281bf0573f9dd6113fff6b38a398829f5fd5e0c4bf19040000",
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
      "Thu, 02 Sep 2021 19:20:00 GMT",
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
      jobId: "grouparoo-job-33-1630610362910",
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
      "536b6f9b3014fd2bc8fbda0412f22252b466295d9912d212926a9a2664cc85ba23986293a9aaf2df77314dd7aa52fb09dbf79c7bce7df044fef022215312f3eca186eaf1cbbd88c9190145337c2d0e876b76915d9bc52ebbf57687ab1f65fded663643046f5892eecb1c3a52d4150339dd6eba5925ea925642743051c7b63bbd916d8d7a963dea3b3d0b7912f274c98b3fc8be53aa9453d33c69773321b21c68c9659789fdcbbb79e89b6525ee812969be953451459a1f8b7ecd05a38a8b62b6dda0815a4215c19ef21c2dfc6726f1f9dbd45d4ef7dd0cc107ce803226ea4235b630051345cab3bad259c9f489689baf0e64e32edd45683091d7fb222ae81ece8c842a1aa9c7128ccb60bd323cff721dace6a1b7f6a3cde2ca5dcdbb8bf572bbf237c6ed951bb886a2710e9a6bcc8c737df3f182fa0948c50bad1e36cf8df27383bcf7636908282da10d46636b447b13cb89d378ccd2893d8c530be278128f87d48e2de60c6090c44091a745358b16a2e84f9c1421fd880d9d341a4c06fd88b29845a37402ce64988c474e428e67e46fc5155c70590ac9db0e91dbc00bdd280cb6fe621ebaba8494d6b9ba688d3505bcf6a8b040047d50d3b18972814a4dbb3d3f7483f922f4766e3be12564943d6e1e70c629cd25209a56d83c05d54a24d830e2cf57ee0582f5c4ae4f4149a6bf9e48d3f3c6c5ab96bfd0431c606357e92fd98481e77fd7764e881dcd6b0d39b40752a2e53bac0d5d1f7f231297b4cd426eb66ef093b44f01a45041c13e9f268275e0d37fedb4f888c5d54719a9f08ebbc36423c22a687788eb729fd903cb1adb63a2c1957a1773ece1a96b4d8e2623eca150cf15b58b8f85b662b57c016110c7efeb6e1dff01c6c439e378040000",
    ],
    [
      "ETag",
      "nvvPcDgP/nVgWIVvHJpuBQ==",
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
      "Thu, 02 Sep 2021 19:20:01 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1630610362910"
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
      "02ff8d92dd4e83401085df65bc85044451497ad16ad526b4b6941a7fd2345b18282db0b8bbd8344ddfdd59acd5a889dec0ccf0cd72ce812dacb232060fe659fa52a3d81ca5a846ba0850d6b99274ab7829110c40c55222fd74c5fad1933d7af49df42108efd3c1b258b75a44c8688105036f0b4986792cc17bde42c90aa4b588e77551ce9ace00b5a9f4701c06bdc10df5058f753f98f87ebbe37761671c1663a6d8ace1ffb136dd19b0e4f30013145846a8b554822f31523d6d53b2a2cad194bc16114a68e0e6412a785d31c1b94913d3714cdb752cd7b61cf7f8c2b608cc79c454c64b622763d2078a2b96077c4d2ec125403425194e9aeb2b8db3b831a2cbde20744f1a7d5f0192966439cefe0649ef82d167f8c0f6117ce758c1eb521da86bffaefddb7194e9e75157edb0fb83908a923a2061afdf1d87edfe5073d3bdf7ce46a11c0a4e414ad419dad6c9f9e9996bbdc77ac975d4f41e4f891a0d8818fd1db799022f61b9c4dd1b29cf69277b020000",
    ],
    [
      "ETag",
      "LgkaMcZ1QYL3gXRTVgNjmw==",
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
      "Thu, 02 Sep 2021 19:20:02 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1630610362910",
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
      "0000000002ff85535b4fdb3014fe2b91f7b249b449dab44d2b55ac2bd988d416d6a6b0699a5adb390986340eb60342a8ff7d27091d2024788ae3f35dcecd8fe446e431191126d2db12d4c3a76bc9c811014353bc358907c12f6a2e4f0b164c878b82fa936ff7e3312244c5d2745764d0d2b2541cf468bd6aa74a96055552b650a8d5f55a6ebfebf45da7dbef0c5d07791ab26426f21b645f1953e8916d1fbcdba9946906b410bacde5eeffbd7dd7b10b25af811b6dbfb6b4d145dbef9b1e67925323643e5eaf30815283dac08e8a0c537866c6eceb6be9b6a0bb768ae03bc181722ecbdc5469a104977922d252d5aa64f448ea345f1cc82a9805d3c89a878bcfdb981ad87eb1a8b6361b05bacc8cf57d7936b7b605fa5c510d7a6b5d9e06cbc0c22b251391c146c45b6b6c1d5bb3701e46968b9e316823f2da31a22c83caeda929e1db5154046a50bb096e064e9fbabe3364091bf0c4eff658e200633e1bf46897397ce8811733a0c833957acda2b9cc7b5dce91eb0f0609c5a3377499dbe9f92ce9ba6ecff35cc71f74bc5e2726fb2372af848113a10ba945d31972b90ca360132dd78be9240aea32128a1d386992ab8a7899a7c12211f44e5dfb2a2a243a556d0e1751b09c4ca3f02268263b8394f287d52dce36a19906445345776040cd658c4d23e767ab300acf16931932ea719d1f109a8cfe3c3e13a287a2eeb2a9bf9557dfabfd0f800b9a9535e2ae391097ecf77f11815bd890c9cf75b0fc4d9aab2524a020e71f8f0ec175e0c3c774d86cc4e26ea38d36f88f8bc27565c215340b2376757a0ddb733a5ef3140d55e64daceff887ce541a9522ec20374f15359b8d853666a5fe0fc220ce79112e7e60f41f9ae2295f59040000",
    ],
    [
      "ETag",
      "tf4eEXatWHpbEC9Npa8ABw==",
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
      "Thu, 02 Sep 2021 19:20:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1630610362910"
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
      "6f",
      "82",
      "40",
      "0c",
      "80ff4bf70ad9018bc9487cc0cd6c1ab238a6d9c362cc8185a140f1aecc18e37f5f8fede5aeed7d6dbfdc158e75b78718f2ba3a0d682e7715f2bb0b32b443c356ae9e3a8be001b2ae84fccccff7c7f6b45c98152fd775d8452ff931994e85b0c537b61ae22b9435367b0bf1d7153adda2b4ed76669c28185f7a57794ed673c95adabbec6d93a6c92c9dc36d7bf3e0407986251aec0a74f37a43072c78e154ad6efb067d4b8329d0c2088f0f95a1a1d786c8978a1f3df8c1245293404593f0315002365468aea91376f301b286897593d1594c2110c08ca14897e3f923e55085ca57a1af0267b6fdef995d18edca90085874bba350fd993c91b363b16633a00785964f79ad19e25237166fbf98b2b82172010000",
    ],
    [
      "ETag",
      "Wbw/kmqJIrPtJTi2n3GbkA==",
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
      "Thu, 02 Sep 2021 19:20:03 GMT",
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
      "4b7282300000d0bb646d19217cbb338aa0b4223f013719a4b1042a204184747af73abd467d7778df20cb73c218ee9b8ad4e0154c996408b9e0b43a5add4bd15a48cd99ef8fb88426da8f95a278b2716caae8e45945121cb29baf2f118e54df8441a70d541399275fad6a7e7b4b60da9f4791fabac92f5b32d604aeabcb02a36be2bbcbb048d14bf8b91c9442fc40013c303bbdd83d69882af6f1684eb16632f794a12fde05bc955b4771a39314f60e5feb8537af61668aea4e2d571377ae77bea6b9b223250fd3b01b8c51a637096a71fc6e6db634b03703c3aa6ad4c2d3d3ff0566808c2ded08c3f4b11d2a8631037ff5713fb5e4f11f91ac231df8f905b1dafb8a19040000",
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
      "Thu, 02 Sep 2021 19:20:03 GMT",
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
      jobId: "grouparoo-job-35-1630610362910",
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
      "4f",
      "a3",
      "40",
      "14",
      "fd",
      "2b64f6716d4b4b5bda26cdda206a4d4b570a9acd664386e182a3944166e8c698fef7bd0cd6d598687880997bce3de77ef04c1e789190198979f65843f5f4ed5ec4e48480a219deaaf0dabdbf712e16cef5d5f7cbb0bfa21757e36c3e47046f5892eeca1c3a52d41503390bb7ddac1275492b213a98a8638d3afdb1658efba6351e4cfb26f224e4e98a170fc8be53aa94b35eefa8ddcd84c872a025975d2676aff7bdfda05756e21e9892bdf7923d5491bdcf457fe48251c545310fb768a0965045b0a33c470bff99497cfa3e7597d35d3743f09e33a08c89ba508d2d4cc14491f2acae7456327b26dae69b0fb27557ae13184ce4f5ae880aba831323a18a46eaa904e3dcdfac8da577bef1d78b60b9f1a2ad73e9ae175d67b30ad7ded6b8bd747dd75034ce41738db971aa4f1e1e503f01a978a1d583e6ba517e69d0f2e3581a024a4b6883916d8e697f624ee334b6593ab146716a421c4f627b44add864d3210c931828f2b4a866d14214d3d862cc1ab16838ec0fa2a1658da34942d3c8b61398b0013e764c0e27e46fc5159c71590ac9db0e915b7f19b851e0879eb3085c5d424aeb5c9db5c69a02de7a545820823ea9e9d044b940a5a6dd4b2f70fd85132c6fdc76c22bc8287bda3ee28c539a4b4034adb0790aaab548b061c45bacdd3304eb89fd3c062599fd7e264dcf1b176f5afe4a0f70808d5da5df641bf84bef42db39226e685e6bc8befd20255abec3dad0f5e10f227149db2ce43a74fd5fa4bdf221850a0af6f53411ac035ffe6bc7c5472cae3eca488567dc1d261b115641bb435c97fbc21e9a966d4e890657ea436c6259c7ae35399a8cb08342bd54d42e3e16da8ad5",
      "f21584411cbfa7bb75f8070ad91e8178040000",
    ],
    [
      "ETag",
      "tUQEjVCGACQJ+HU1LaGJ6g==",
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
      "Thu, 02 Sep 2021 19:20:03 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1630610362910"
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
      "92",
      "dd",
      "4e",
      "83",
      "40",
      "10",
      "85df65bc85046c8b4ad20b6a5bc560ed0fbd30a669b630502ab0b8bba84dd37777166b356aa23730337cb39c7360078f5919830bab2c7daa516c4f5254135d4c51d6b99274ab7829110c40c55222c7f79de4d5919348f4076dab28c3e1c4bf49bb5d2264b4c68281bb8324c33c96e03eeca06405d25ac4f3ba28974d6780da567a380ba7fee88afa82c7ba1fcd83c0eb0503d81bc7c59829b66cf87fac2df6066cf86a8a090a2c23d45a2ac13718295fdb94aca8723425af4584121ab879900a5e574c706ed2c46c754cdb69598e6db59cd30bdb2230e71153192f899dcf481f28ae583ee52fe4121c02445392e1a4b93ed3388b1b23baf447a1d36ef47d05485a92e5b8fc1b24bd6b469fe1033b44f09d6305af4b75a486c19df7db7194e9e7517d2f1cfc20a4a2a48e48e8df0e66a1773bd6dce2e0bdb75528c7825390127586b6d53eef9c39d67bac975c474def7195a8d18088d1df719d297013964bdcbf018f32f0117b020000",
    ],
    [
      "ETag",
      "PY5fx6sQcrDE40mnTFQIJg==",
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
      "Thu, 02 Sep 2021 19:20:04 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
        types: ["INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1630610362910",
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
      "02ff8553596f9b4010fe2b68fbd2aab10dc607b664a5ae431224db496d9ca4aa2a7b5906b209b06477716545feef1d20ced14ac91330f31d73f148ee791692210978fc5080dc7dba13013922a0698c51eb5e9f6e6fd8ad3c9da60226dfcfbebabb6e3c1a2182972c45d33c8186128564a086ab653396a2c8a914a281420dbbd7b07ab6d9b34cbbd71e5826f21424d19467f7c8bed53a57c356ebe0dd8c858813a039574d26d2e7786bdb6ee552dc01d3aaf5d6b2852eaaf5bee9712218d55c64a3d5120b2814c835a4942758c20b330cbebd956e729a3663046f3903ca9828325d9685124c64118f0b59a992e123a9ca7cf54296eed49df8c66c7cf37913520d9b2f0655c67a2d411589364e1717336393a3cf2d55a036c6f5b9bb700d0c4911f104d63cdc1823e3d8987a33cf372cf40c41699e558e3e0d1228dd9e86e2fdbf8a9240356ad7c975dfec51cb31074114f459e4d8dd203221089ca0dfa57660b241073a61001479ba54af58341359c774da417740fb9dbe336833d3726cc732add00923a05dd3ea07a1c9a86393fd11f923b98613ae72a1783d1972bdf07c77ed2f56f3c9d877ab36228a1338a98b2b9b785da7c62611f44e5ffb32cb053a9563f6e6bebb184f7cefcaad373b8598b2ddf201771bd14401a2a9a42968903311e2d0c8e5c5d2f3bd8bf9788a8c6a5d97078422c35f8f2f047f975753d6d5b3f4ea752aff03e08a264585d8d62fc422fbfd6f44e015d664f263e52e7e923ab480082464ece3d521b84a7cf8331d2e1bb178db68a3347ee3a130559a3009f5c1f0b42aaf6677cccea0d7261558ea7f735dcbee1e26536a948a9042a69f3aaa2f1b1badcd0af50cc224ee79eecdcf30fb1781de9ea459040000",
    ],
    [
      "ETag",
      "1ktFvXchrFLmoeCBG+Ey5g==",
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
      "Thu, 02 Sep 2021 19:20:05 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1630610362910"
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
      "0000000002ff2d90514bc3400c80ff4b7c5de1da6ac1c21e5637743244a7c3898c71ebd2daeddad4bbd451c6febbb9eacb5d92fb927cdc198e55b387147655f9dda1edaf4ae4171f2cd175869d5c2d350e6104c8ba14f2d1bc6bcea6d7f7d971babe71b8fe9867f6341e0be1f22fac35a467282a347b07e9e7191a5da3b46db776982818f7adaf4c276f33c96adafbec69b5584cb2c50c2e9bcb080eb45b6281169b1cfdbcd6d201739e7b55a7ebd660e0a8b3393a18e0e1a1b4d4b5da12055209e22408935825a18a93e83654021aca3557d408bb7a0559c3c4da2ce924a6100a608750a48be1fc9172a42215a828889437dbfcf7643da37bb624020efdee38527f2677e4ed58acd97638825ccba73c540c69a18dc3cb2f697302d072010000",
    ],
    [
      "ETag",
      "JlWatBD4GBkDX5seXYIBrw==",
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
      "Thu, 02 Sep 2021 19:20:06 GMT",
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
      "edd3597282300000d0bbe4db32ec86feb15852b6a2290cf0c3008d10515611a1d3bbd7e935eabbc3fb06595190714caf6d4d1af00a968c579882b13ba81933c5f8aae76fb57476897da94ab6d7058325fc854c3b9d535fd00ab95160f158ce7deda38656ee61de45d85ae38f7b9214c72a535cd34083d75b6d12c4ec561462d787411f74f38209bbb5e57125aed8f649bed2db3e3878b14c27296a4af316865ca9c999147e5ad8e0eb328ca3933a59ea74cc13d9c6a19f0aaa23da2778778acef3e1790f39d9198c14eeb5c114b90551647a4227eb5f7a8010efc4ce3bf3f4f47f810d20f78e0e644ce963bb2029ca06fcd54faf4b471eff35920d64003fbf18e2c0f119040000",
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
      "Thu, 02 Sep 2021 19:20:06 GMT",
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
      jobId: "grouparoo-job-37-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f71168d2a66fa91a551b46b5361d690a9aa629b29d9b6048e3103b4508f5bfefc6a10c84049f62fb9e73cfb98f3c937b91c7644c98481f2a289fbedd49464e09689ae2ebcdfcf1e4d61eec7b17d9cfab4e8fad75db39799c4c10216a96a2bb22833325ab92831a6f37adb49455414b29cf30d1993b386bf75da7df76dc7e67d47690a7204b9622bf47f6add6851adbf651bb954a9966400ba15a5cee5edfed7dc72e4a79075c2bfbbda48d2acafe5cf47b2639d542e693ed060d540aca0876546468e13f3366e7ef53b704ddb55204ef0507cab9ac725ddbc2145ce68948abd26425e367626cbe39908db7f466a1c56556edf228a73b38b562aa69a49f0ab02e82f5ca5af817eb60350d176b3fdacc2ebdd5b4355b2fb72b7f63dd5c7a816769ca32305c6b629d9b9b8f17d48f4169911bf5b07eae955f1ab4f838969a80d20a9a603470fab43d74462c61039e0cdd1e4b1c606cc8063dea32878fbad08d1950e41951c3a2b9ccbb6dd675126714b9fd781475138068c43ac3a8df4b5c18f4793ce48c1c4ec9632934cc852aa4124d87c84db008bd280cb6fe6c1a7aa6848456999e37c6ea02de7ad45820823ea9e950478544a5badd0b3ff482e92c5c5c7bcd84979052feb479c01927345380685a62f334942b1963c3883f5d7973049b89fd3a061519ff792675cf6b176f5afe4a0f7180b55d6dbe6413060bff87b173445cd3ac32907d7320055abec5dad0f5e12f2271499b2ce46aeb05bf49f314400225e4fceb6922d804befcd78e8b8f585c7d94511aefb83b5cd522bc8466878429f785dd75fa9df6801870a93fc45cd73d76adce5167841de4faa5a266f1b1d046ac52af200ce2f87dd3adc33f2b108c5e78040000",
    ],
    [
      "ETag",
      "WDw+h/7v5FlKQ25bOt10+w==",
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
      "Thu, 02 Sep 2021 19:20:06 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1630610362910"
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
      "92",
      "dd4ec2401085df65bcb4c456b04a132e40409b00f2532ed410b2b453286ebb65778b21847777b6221a35d19b7666facdf69cd3eee125c922f060912c3705caddd912f5c814635405d78a6eb9c8148205a8d992c8c7edd379d2ef6e2ea64ec72fd63c68cb3a1b351a44a8708529036f0f71823c52e03def216329d25a28789166f3b2b340ef72339c04637f70477d2a22d30fa6bd5eb3d5ebc0c13a2d464cb379c9ff636d76b0602d16638c516216a2d1924bb1c650fbc6a66269ceb1a24421435450c2e583a51445cea410159a54aad715c7addaae6357ddcbba6313c845c874223262a713d2075a68c6c7e2955c824b802c4b321c97d72d8d93a834624a7f10b8b552df5780a4c509c7f9df20e95d31fa0c1fd83182ef1c4b4591e913d5ed3d347f3b8e32fd3caadd0c3a3f08a529a91312f8fdce2468f687869b1dbdb7761ad5500a0a52a1c9d0b16b3757d7aefd1eebad3051d37b3c2d0bb42064f477dc271abc98718587372e5022807b020000",
    ],
    [
      "ETag",
      "YvZ+iMFq/U1EIujlTDr9aQ==",
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
      "Thu, 02 Sep 2021 19:20:06 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1630610362910",
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
      "000000000002ffa5535b6f9b3014fe2bc87bd9a426406e2491a22e4be9ca944b9b9056eb3425b63950b7802936ddaa2aff7d07687a51a5f6614f9873becbb9d80fe446a401191226a2db02f2fb4fd7929103029a4618fdf16db66a1f9b27ce2567975cd9a72cfe6b9f8d468810254bd1248ba1a164917350c3f5aa19e5b2c8682e6503851aed7ec3eeb5ad9e6db57bad816d214f411c4e457a83ec2bad333534cdbd773392328a81664235b94c9ee2e65dcbcc72790d5c2bf3b5a5892eca7cdff430969c6a21d3d17a8505140af20d2454c458c23333605f5f4b37054d9a1182ef0407cab92c525d9685125ca6a1888abc5225c3075295f9e24056eed49df8c664b19efb9fb73429c9db2f0655c66693832a626d1c2f1733639ba1d71555a0b6c6c589bb740d0ce53214316c44b03546c6a1319e1f6174ff37f5669e6fd85845004a8bb4aac1a72c86d2ff714cdedbe59404aad1a94e6e1cab47edbe3560217378d86f77596801637de674699b597cd0814ec080224f97ea158ba6d83963413f6cb582b00b0354e11dd6b58220e806fd569787acefb459e85821d91d903fb9d07024542695a867452e969eef6efce57a3e19fb6ed54648711e47757165132febd4d82482dee96b57668544a772f0dedc7797e389ef9dbbf5aea710517ebfbac56d87345680689ad30434e43319e0d0c8e962e5f9de623e9e22a35ae0e91ea1c8f0d7c333c1bfcfaa29ebea5b7af53a95ff1e704ee3a242dcd5076293ddeee0ff14ba28f11b2178b56b36395bbbcb9fa40e2d21841c52fef1f6115c253e7ca1fbe782587c3068a334fee35de3aa34e139d4774e24557d35bb633956cb211538d76f72ad8ebd1f6ea9512a4202a97eeca87e2ee5acaa54a19e4098c4ab32f7e6df31fb0f643a873dae040000",
    ],
    [
      "ETag",
      "JBMS3F/H7ZcbZcs1Pblx1Q==",
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
      "Thu, 02 Sep 2021 19:20:07 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1630610362910"
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
      "00000002ff2d90616b83400c86ff4bf67115b40e71423fb4a3ac055756d742619472da68edd4d8bbb821c5ffbe9cdb97bbf0e6b9e4e1eef055366788202d8b5b87ba7f2890b7b648d074151bb95a6a0cc204905521e42abd70dfbf4d8bc33c8c1ff54def6e87663b9b0961b20bd60aa23be425566703d1e71d1a55a33c3b9df4385130ee5b9bac37bbe5eb3291a0a6b30d36fb389e2fe2250cc76102574a13cc516393a11dd96aba62c66b6b6b54dd56e818ea74860646786c149aba5669224712c70f1d2ff0ddc073fd60faecb9025694292ea91176ff01b286895595d08fc88227801e4bf1cec7f37b8c45e8f88f2e7a46f3ae49f61ab42b9f42f74fe085ac148b2ceb0e279029f98e55c910e5aa3238fc02cfb826016c010000",
    ],
    [
      "ETag",
      "HbhtyyM2gXA8L+rqrTqXnQ==",
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
      "Thu, 02 Sep 2021 19:20:07 GMT",
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
      "7282300000d0bb642d8e0650e84eaca085a0fc22b86128c62188024914d0e9ddebf41af5dde13d4196e784f354d46772051f60c8a03ecec776a3199f1d4d4a316c2ea7d09466164bd0290b9d26e8be63b968a1e5c87d5b3c26a2da99c56a81e8d208064c2f28b1f7dc8fbcd2e5e79575147959ddd7fd26f4d5ed0d15fa72d064736e776a7280538fae28ac0937e3bdb44ddd2ac4e6a4a7d3e106fd7b7885962fa74269761497dab1dd348e82ec470523a733188b66cea12c2395d5ca5c996ad832b1cf205e7baef425aca52874b7c22d8a393f858b6092b9eb38c0e3b7b7ff0b8c00e91bca084fe96bbbaceafa08fcd54fc5d090d77f83648c30f0f30bde76b14019040000",
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
      "Thu, 02 Sep 2021 19:20:07 GMT",
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
      jobId: "grouparoo-job-39-1630610362910",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda04f2220f295ab384ae911ab211d26a9a26649b0b750b9862d3aaabf2df77314dd76e52fb09dbf79c7bce7df0446e451193196122bdaba17afc7423193921a0698aaf76e8fc0e27a567a7d9f25aafbe9c31373f7f98cf11211a96a279994147c9bae2a066fb5d37ad645dd24aca0e26ea0ca69d9e3b70dc9e3370fbd39e833c055972218a5b645f6b5daa996d1fb5bba9946906b414aacb65fef26edff7edb29237c0b5b2df4adaa8a2ecf7453f6792532d6431dfefd040ada08a20a722430b7f99313b7d9bba2b68de4d117c2f3850ce655de8c616a6e0b248445a57262b993d1163f3d581ecbc0b6f195a5c66755e4405cde1c48aa9a6917e2cc13a0bb61b6bed9f6d83cd225c6ffd68b73cf7368bee727bb1dff83bebeadc0b3c4b539681e15a73ebd4dc7cbca07e0c4a8bc2a887cd73a3fcdca0f5ff63690828ada00d4663c7a5bd893365091bf3643218b1c401c6266c3ca203e6f0e9108631038a3c236a58b49085cb7b93e92876239e30271af6a913d1789c44e032b7ef4ef9b8379a90c30979a884869550a554a2ed10b90ad6a11785c1de5f2e42cf9490d03ad3abd65853c06b8f1a0b44d03b351d9aa890a8d4b47bed875eb05886eb4baf9df005a4943feeee70c609cd14209a56d83c0dd546c6d830e22f36de0ac16662df8e4145663f9f48d3f3c6c5ab96bfd0431c6063579b2fd985c1daff6aec1c119734ab0de4be3d90122d5f636de8faf00b91b8a46d16f27def053f48fb1440021514fce36922d8043efcd78e8b8f585c7d94511aefb83b5c3522bc8276878429f7993d74c653d7fca99a56fadfd8c4190d8f5d6b7234192187423f57d42e3e16da8ad5ea0584411cbf6fba75f803e2fa28e578040000",
    ],
    [
      "ETag",
      "/T0zT8pE/glChtDBFb6mHw==",
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
      "Thu, 02 Sep 2021 19:20:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1630610362910"
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
      "0002ff8d92d153824010c6ff97ed1526482365c6072d331d35537c6a1ce78445cf80c3bb2333c7ffbd3d326baa997a81dde5b7c7f77db087279e45e0c3822f3705caddd912f58329c6a88a442bbae522530816a0664b225f6b6e3bef70acf15e6fa03aabf3dacb466e1b0d2254b8c29481bf8798631229f01ff790b114692d14499166f3b2b340ef72339c04e3eeb0437d2a22d30fa7fd7eb3d56fc3c13a2d464cb379c9ff636d76b0602d16638c516216a2d1924bb1c650778d4dc5d23c415b894286a8a084cb074b298a9c49216c9ad895baed7a15c7739d8a7751771d02131132cd4546ec7442fa400bcd92b1d8924bf00890654986e3f2fa4c631e95464cd91d065eb5d4f7152069314f70fe37487a578c3ec307768ce03bc7525164fa44ddf6ef9bbf1d47997e1e75d30cda3f08a529a913127407ed49d01c8c0c373b7a6fed34aa911414a44293a1eb546b97579ef31eebb53051d37b7c2d0bb42064f477dc710d7ecc128587375c2028c27b020000",
    ],
    [
      "ETag",
      "z81EpGie8iJJMsGh/8xqrw==",
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
      "Thu, 02 Sep 2021 19:20:08 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1630610362910",
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
      "85536d6f9b3010fe2bc8fbb2494d8090a42152d4a509eb90d2a423a4d5344d893107754b30b54dd7a8ca7fdf014d5f54adfb84b97b5eeecee74772cbf3980c49c4d3bb12e4eed38d88c811014dd32a7a7a26a69299f2c2dc696bf9f05084a797e96884085eb114dd1619b494282503355c2ddba9146541a5102d146a75ad96dd77acbe6d39fd8e6b5bc8539025339edf22fb5aeb420d4df3e0dd4e854833a005576d26b6cf71f3be631652dc00d3ca7c6b69a28b323f363dc904a39a8b7cb45a6201a502b9862de51996f0c28ca3af6fa5db9c6edb2982ef3903ca9828735d9585124ce4094f4b59ab92e123a9cb7c75204b6fe64d4263b258cdc3cf1bbaadc89b2f0655c67a2d41959936be058b736353a0d73555a036c6d5772ff00c0c4991f00cd63cde1823e3c418cfa7c60bb089cdfc733f346cac2506a5795e5712d22883aa8aa761f9efafa822508d324d727d6cf5a93db0dc28898e5932707a516241140da2e31e75228bb95de8c61150e4e94abd66d15ce44ed21b5896d3717b5de8b8940173bab1437b31b3a003aed38798ba6c1093fd11f923b98629578550bc9918b90afcd05b87c16a3e19875edd4642712ad3a6b8aa89d7756a6c12411ff4b5afb25ca053357e7f1e7ac17812fa975e73e3334829db2deff0ce139a29403495740b1ae4b9887168e462b1f4437f311fcf90515fe3c501a1c8f0d7e30b21dc15f59475fdadbcfadddaff00b8a4595923ee9b03b1c97e7ff46f856518f8f3b38f25c605768b32bf11854bde28901f2b2ff8499a50000948c8d9ff3700c175e2bf6ff5f070108b4f076d94c67fdc37a62a1326a1d93bbeadbb6cd85dcbb5ec1ea9c152bfcb752cfb30e04aa352842de4faa9a3e6e154f3aa53a57a066112d7655e4f6aff17ee7377a6b8040000",
    ],
    [
      "ETag",
      "bBGoDrc/rP/yt0SxxpTBVg==",
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
      "Thu, 02 Sep 2021 19:20:09 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1630610362910"
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
      "90514fc23010c7bfcbf9088b1b20e2121e40174509e290274348d96eb3d8f546db6916c277f73a7d692ffffbf5ee979ee14bea1c6238c8f2d4a069af4a746fbe48d136ca59be6ad216a10fe844c9a47cd5d7514fa5273d310f9be34daf912fcfb3e994099b7d6225203e432151e516e28f336851213fdbef4d379131d7d63e59acde93c724e5a0a2dc07abed72399b2f13b8ec2e7d38d221c5020dea0cfdc8dad01133b7f0b65654b5c2c0526332b4d0c15da334d4d4c210059c04a33088c6c3701c85c3f1e02e0a19549409274933bbdd00af71e4844ae987652162c074257b17ddf9cdf1c00bedfed179ebd0ae0df15e8b7ee56872fb27704f5ecab1ac330df62113fc1d4fd2415c0865f1f20bdfd528406c010000",
    ],
    [
      "ETag",
      "iOn/1+lRqn8rDSj5+uiKJA==",
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
      "Thu, 02 Sep 2021 19:20:09 GMT",
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
      "edd35b7282301400d0bde45b190bcaa37f60805aad3cabe84f26c25508459108183add7b9d6ea39e3d9c6f44d3143827b74b0967f48a04950d299596b56ee1fe34d995957d30652f1473a273c37b971776e26f78cbc1d4cd89b2f64b3d50ca8fcdd5eb1bdf1ad63860276c5fcb8b8fe32116d9243954fb6abb9dfb19c35615456f7d0204b38caaac9dc1f89215909cbbdd0ba785d316f2ceb69d2c0c318de3726ab154759dfc538d0c4f4d9a00947cc59b2ea7535b1fd70987355916d71575dafe3cec07ed767471abdec58268413793e938cf8f9aecb68eafa5fcab121d939e9efe2f344270af8b0638291edb9599618cd05f7d7213353cfe5b401b68d0cf2f2cf5366b19040000",
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
      "Thu, 02 Sep 2021 19:20:09 GMT",
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
      jobId: "grouparoo-job-41-1630610362910",
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
      "000000000002ff85536b6f9b3014fd2bc8fbb82681863ca5688d52ba32256405926e9a2664cc85ba259862d3aeabf2df77314dd7aa52fb09dbf79c7bce7df0486e789190298979765b43f5f0e95ac4e48880a219be9e5bf6f69be77e3693f176ecfff9b1f91b7a5717b3192278c3927457e6d091a2ae18c8e926e86695a84b5a09d1c1441ddbea58c3be39b4ccfef0786299c89390a74b5edc20fb4aa9524e7bbd8376371322cb81965c7699d83dbff7ee8e7b6525ae8129d97b2dd94315d97b5ff44b2e18555c14b34d80066a0955043bca73b4f09f99c427af537739dd753304df710694315117aab185299828529ed595ce4aa68f44db7c712081b37416a1c1445eef8aa8a03b383212aa68a41e4a30cefcf5ca70bdb3b5bf9a87eeda8b82c5b9b39a7717ebe566e505c6e5b9e33b86a2710e9a6bcc8c137df3f082fa0948c50bad1e36cf8df25383dcb7636908282da10d46237348adb13989d378c4d2717f10a726c4f1381e0d683f36d9c4063b8981224f8b6a162d44610f591f18b5a2e1686c47b665b2886287a3d16890a434194c20a5647f44ee2baee094cb5248de76885cfa6ee844a1bff116f3d0d125a4b4ced5696bac29e0a547850522e89d9af64d940b546adaed7aa1e3cf17a1bb75da092f21a3ec21b8c519a7349780685a61f314542b9160c388375f39a708d613fb7e084a32fdf5489a9e372e5eb4fc991ee2001bbb4a7f4910faaef755db3920b634af35e4ae3d90122d5f616de87aff1b91b8a46d1672b171fc9fa47df221850a0af6f13411ac031ffe6b87c5472cae3eca488577dc1d261b115641bb435c97fbc4c6b99afd31d1e04abd8959c3e343d79a1c4d46d841a19e2a6a171f0b6dc56af90cc2208edfd3dddaff03a62711e878040000",
    ],
    [
      "ETag",
      "H14VJNI+0d8V8RxXUzTNhQ==",
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
      "Thu, 02 Sep 2021 19:20:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1630610362910"
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
      "0002ff8d92dd6e82401085df657a0b0954c596c40b6cb5d2f8d32a5e35c6ac30200a2cee2e6d8df1dd3b4bad6dda26ed0dcc0cdf2ce71c38c0362d2270619526bb0ac5fe2241f5a88b29ca2a53926e252f248201a85842e4c86995e3b298cc437f2bef07de6b7bd7ea279d0e11325c63cec03d409c621649709f0e50b01c692de4599517cbba3340ed4b3d9c05537f7c477dce23dd8fe7c3a1d71df6e0689c1723a6d8b2e6ffb1b6381ab0e1ab29c628b008516b2905df60a87c6d53b2bcccd094bc12214aa8e1fa4122785532c1b94913b3699bb6d3b01cdb6a3897d7b64560c643a6525e103b9f913e505cb16cca5fc825380488ba24c3717d7da6711ad54674e98f03a759ebfb0a90b438cd70f937487ad78c3ec307768ae03bc7725e15ea4cf58713efb7e328d3cfa36ebda0f783908a923a23813feacd026ff4a0b9c5c97b77af503e084e414ad419da56f3aad576acf7586fb88e9adee32a51a10121a3bf63902a706396493cbe01c3f890987b020000",
    ],
    [
      "ETag",
      "M65pNpnOUcIksJHAx7q5Fg==",
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
      "Thu, 02 Sep 2021 19:20:10 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1630610362910",
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
      "6d4fa34010fe2b64efcb5d625b28b5a54d1aafa978125bea51aa31974bbb2c03ae028beca2a9a6fffd06b0bedce5f413cbccf332333bfb446e7916921109787c5742b1fd722302724040d118a37a70939df5cf1eafdc439a3c40ff710b27a70fe3312278c59234cd13684951160ce468b56cc78528735a08d142a156afdb32faa6de3774b3df1d1a3af22424d18c67b7c8be562a97a34e67efdd8e858813a039976d26d29778e7bedbc90b71034cc9ce7bcb0ebac8cec7a64789605471918d574b2ca09450ac21a53cc1125e9961f0fdbd749bd3b41d23f89e33a08c893253555928c14416f1b82c6a55327a2275996f0e6469cfeca9af4d172bd7ffbaa16945de7cd3a8d4d6eb02649928edc45bccb54d8e5ed75482dc6897a7b6676b182a44c41358f370a38db5236de21e6bafc0263673e68eaf19584b0852f1acaec4a741025515cfc372febda28a4015ca34c9f540ef53c3d28741140c5864998741a4431058c1e0909a81ce863de8850150e4a94abd66d14c64343443b3db1bd05ea80f438b596c6006430bba26d30d0b0243b7c0c22cd91d9087822b38e6321792371323979ee3db6bdf5bb9d3896fd76d4414a772dc145735f1b64e854d22e883be7655960b74aac6efb8beed4da6be736137373e8398b2edf20eef3ca2890444d382a6a0a0988b108746ce174bc77716ee64868cfa1acff7084946bf9e5e09fe36afa7acea6fe5d5afdb7c015cd0a4ac11f7cd811864b73bf8bfc2d2f71cf7c7c71234c76e51e637a270c91b05f273657b57a4097910410119fb7c03105c273e7dabfb8783587c3a682315fee3be315999b0029abde369dd65c3ee19fad018901a5ca8bf73a83edc0fb8d2a81421854c3d77d43c9c6a5e75aa942f204ce2bab8f5a4767f002b898709b8040000",
    ],
    [
      "ETag",
      "0bjnK6KzYN5alwe6zyeFHw==",
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
      "Thu, 02 Sep 2021 19:20:11 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1630610362910"
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
      "6f",
      "82",
      "30",
      "1086ffcbed2b64a04637123f0cc336176726ce986c31a6e28168e1a02d2e86f0df7765fbd25ede7b7af7a42d5cf2f208011cf2ac6e50ddee32342b5bc4a81b69345f15951ac10134226372fb7cf1fc7052a75fa7d975becddeefdfea74359d32a1931316028216d21ce55143f0dd42290ae467fbbdea2732666e954de6cbcfe8258a3928e86883e566b1780a171174bbce81331d624c516199a01d59293a6362e6d6568ba292e86a6a54821a7ab86f648a9a4a28229713773470fdf1d01bfbde703c78f43d062525c2e45432bb5903af3164848ce98765c16740f5257ba7fd79e5d8b342bb7f34bc19d41f8a78af46bb72f430f913989195322c6b54830e2482bfe3353710a4426aec7e01ebfc1af96c010000",
    ],
    [
      "ETag",
      "WFk01B7qfZhCvIWgM/JqfQ==",
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
      "Thu, 02 Sep 2021 19:20:11 GMT",
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
      "7282300000d0bb642d8e02e9407732022220b680163619121265a27c02f2ebf4ee757a8dfaeef0be4146086d5bd4559c96e01d4c99ac2fc9d2ad35633b5c9ab5488f97dba97218bc99c6193b2c0ab1b840bdf4c2afdd7e5ef908f191934049f8cca502ba963b776a8cd9387059b658897b323013bafbaba21d6d8f5a24f7cab6d86d0d9edc2d49ed2d33fed0c609437bc07e43f2f27a8fd4eafc469d4da2fb7d1e66d9ccb4cf385e05b032255aa40faf0e788ca09ae62769dd9be63cf455229a476de33d1625a26775538f53e75a81ea1f06db9d7a36e90d8e0ecb9797ff0b2c001deb42d01615cfed0ad4f505f8ab8fbaa9a6cfff06cd0415e0e717308f3a9d19040000",
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
      "Thu, 02 Sep 2021 19:20:11 GMT",
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
      jobId: "grouparoo-job-43-1630610362910",
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
      "00000002ff85535d4fdb3014fd2b95f738daa66dd23695aa514a6095da74a429689ba6c8766e82218d43ecc010ea7fdf8d431908099e62fb9e73cfb91f7922b7228fc9843091de55503e7eb9918c1c11d034c557f5b7dc3aa7ee38becc7f9d9427e7370f5fc1be984e11216a96a2bb2283b69255c9414db69b4e5acaaaa0a5946d4cd4b607edde70600d7bd660d8777b16f21464c952e4b7c8bed6ba50936ef7a0dd49a54c33a085501d2e772fefddfb7eb728e50d70adba6f25bba8a2ba1f8b7ecb24a75ac87cbadda0814a4119c18e8a0c2dfc67c6ecf86dea8ea0bb4e8ae07bc181722eab5cd7b63005977922d2aa3459c9e489189baf0e64e32dbd79d8e232ab767994d31d1cb562aa69a41f0b689d05eb556be19fad83d52c5cacfd6833ffeead669df97ab95df99bd6d5772ff05a9ab20c0cb7356d1d9b9b8f17d48f4169911bf5b07eae959f1bb4783f969a80d20a9a6034b286b437b65c96b0114fc60387251630366623870e98c55d1bec9801459e11352c9acbbccf8689cd1d37b2c0b1229bb91031d77122c7b5e2be0d31772d46f647e4a1141a4e852aa4124d87c855b008bd280cb6fe7c167aa6848456993e6d8cd505bcf6a8b140047d50d3be8e0a894a75bb177ee805b379b8b8f49a092f21a5fc717387334e68a600d1b4c4e669285732c686117fb6f24e116c26f6e3105464f2fb89d43daf5dbc6af90b3dc401d676b5f9924d182cfc7363e780b8a4596520f7cd811468f91a6b43d7fb3f88c4256db2908bad17fc24cd5300099490f3cfa7896013f8f45f3b2c3e6271f5514669bce3ee70558bf0129a1d12a6dc67b6ddeb5bce881870a9dfc5fafddea16b758e3a23ec20d7cf15358b8f853662957a016110c7ef9b6eedff010f97e80c78040000",
    ],
    [
      "ETag",
      "sxrU5D98dVnZBrBGjw+e4Q==",
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
      "Thu, 02 Sep 2021 19:20:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b4fc2401085ffcbf85a92566a95263c80a29070138a2f8690a59d9662dbad7b1181f0df9dad88464df4a59d997eb33de7b47b784a8b087c58a6c9b346b13d4b50dd9b628252674ad2ade48544b000154b88ac3b5efcbad2a36177b4db0523f7a1a197db4db349840c579833f0f710a7984512fcc73d142c475a0b79a6f362517516a86d6986d360d21bde519ff3c8f4c359bfdf6af73b70b04e8b11536c51f1ff589b1f2c58f3e5046314588468b49482af31543d6353b2bcccb026b916214aa8e0ea4122b82e99e0bc46939a5baf395eddf61cbbee9d371c9bc08c874ca5bc207636257da0b862d9846fc825780488aa24c371757da1711a55464cd91b069e5be9fb0a90b438cd70f137487a578c3ec307768ce03bc772ae0b75a26efba3d66fc751a69f47ddb482ce0f422a4aea8404bd41671ab40663c3cd8fdedb5b85722c380529d164e8d8eed5c5a567bfc77acd4dd4f41e5f098d16848cfe8e6eaac08f5926f1f0060f1de5e37b020000",
    ],
    [
      "ETag",
      "316fxhuONHOzzTO4V9ubyw==",
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
      "Thu, 02 Sep 2021 19:20:14 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1630610362910",
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
      "6d",
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "91",
      "f76593689b347d972a56b581452a2db429689aa6d6762ec190c4c176d810ea7fdf25a1bc080d3ec5b97b5eeecee747722bb2908c0813f15d01eae1cb8d64e48880a1314665ae2e267499cf3d7773f2f724bd7255787a311e2342942c4dd33c81869685e2a0479b753356b2c8a992b281428d4ea7e1f45cbbe7d86eaf3d746ce46948a2b9c86e917d6d4cae47add6c1bb194b19274073a19b5ca6cff1d67dbb952b7903dce8d65bcb16bae8d6c7a6c789e4d408998d376b2ca0d0a0b690529160092fcc907d7f2bdd14346dc608be171c28e7b2c84c59164a709945222e54a54a468fa42af3d581acbdb9370dace972b308beee685a9277df2caaaded56812e12639dac9667d62e47af6baa41efacab1fdecab330a4642412d88a70678dad636bb2986134a406eaffb97fe60796837584a08dc8aa2a02ca12282b781a94fffe7a4a0235e85527b77dbb479d813d6411ebf368e0765964036303d6ef5297d97cd8814ec88022cf94ea158b66321bba945137a49163476cc8e860d8637d3b0abb6d706ca0ddc8097bb6cb39d91f913f4a1898099d4b2dea6991ab951f78db60b5594c278157b511519cc8ac2eae6ce2759d069b44d0077dedcbac90e8548ede5f04de6a320dfc4bafbeed39c4943faceff0be239a68403455340503ea4c86383472be5cfb81bf5c4ce6c8a8aef0fc80d064f4ebf185103ce4d5944df52dbd7a9dcaff00b8a4495121eeeb0371c87e7ff47f855939820f05da76db6ed8ed86d345a5df08c51daf45c8c5c65bfd247568051128c8f8e74b80e02af1e9533dbc1bc4e2cb41",
      "1b6df01f578eebd2842ba8574fa455a335bbe3749cf690546065dee55c67709871a9512a420a9979eaa87e37e5c8aa54a19f4198c48d59f88b53ccfe035968e9c6b7040000",
    ],
    [
      "ETag",
      "oprQAaOpLE3UFxFmW3rdGQ==",
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
      "Thu, 02 Sep 2021 19:20:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1630610362910"
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
      "616f82301086ffcbedab24a0844c123fe8623612e236d4b9b81853f16030e058afcc18e27fdf95ed4b7b79fbf4ee697bf82a9a3384702af2ef0ef5f52e47f36a8b04b9ab0ccbd652c3082340a37221b7fbd57edabecddf239f771b5e97e3c9f3259fcd84e0f4136b05610f5981d59921fce8a15135cab5e3510f1d0533d7d626d16ab37c5c2612d474b6c16a1bc7f345bc84dbe13682924e0966a8b149d1b66c3595989ac8dab2aadb0a1da64ea7c830c0c341aea96b95267224717cdff182891b78ee24184f3d57c08a52650a6aec43d620630c195525741159f004d04329ded9b0fe0cb1081dfed1c5d520bf6892b98c76a47feffe093c909532226b74872348957cc7536120cc54c578fb05c77860da6c010000",
    ],
    [
      "ETag",
      "UZNZ9pVAXI4sWTsSj23Owg==",
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
      "Thu, 02 Sep 2021 19:20:14 GMT",
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
      "ffedd34b7282300000d0bb642dcef015ba032a62834428a3c2260331a27ccacf00b1d3bbd7e935eabbc3fb0629217418f0bd29e91778033c958c2559c256b7dea7fc916cd1a4350c1e05ffe4c6283b9aba9d63527b37b42779091dd329f699397638b28b2832b87b21adc7bc5a5f4bb22634b2b6dd441c6b62e0494a30b88f1de4ee35e013328baacac2153da0b216ec516b3e5377ad6a2cab3b54b238b1519fc5702f1e26effc286606cffca3142bcb88256bdb04eccef1a9cf57d659aa15324eb36f658aecf42c469b39828911eaf355cf6bbbf05108e58bb851779d1f2d5f5efe2fb000746e6f3d1df0edb95d560d6301feeae33b6fe9f3bf45d39ef6e0e717b12f330519040000",
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
      "Thu, 02 Sep 2021 19:20:14 GMT",
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
      jobId: "grouparoo-job-45-1630610362910",
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
      "85535d6fa24014fd2b64f6b1554154d4c46c8dd2ad89e22e609bcd664386e142a7458632431bd3f8dff732d46e9b26ed133373cfb9e7dc0f9ec93d2f12322531cf1e6aa80edfee444cce09289ae1ebd2ceaa2d9c95dec3a1484a739e9d59e655369b2182372c49f7650e1d29ea8a819cee826e5689baa495101d4cd4190c3bd6c8364796698ffa13cb449e843c5df3e21ed9b74a9572daeb9db4bb9910590eb4e4b2cbc4fef5bdf7d8ef9595b803a664efbd640f5564ef73d1efb960547151cc76011aa8255411ec29cfd1c27f66125fbc4fdde574dfcd10fcc81950c6445da8c616a660a2487956573a2b993e136df3cd8104eeda5d84061379bd2fa282eee1dc48a8a2913a94605cfadb8db1f22eb7fe661eaeb65e142caedccdbcbbd8ae771b2f306eae5cdf35148d73d05c63665ce89b8717d44f402a5e68f5b0796e945f1ab4fa38968680d212da60e498236a8dcd499cc60e4bc7f6304e4d88e371ec0ca91d9b6c3280411203459e16d52c5a88c29924a304ec613418a74e34188d9d88b28445c08663cbb24d33754c723c274f1557b0e4b21492b71d2237fe2a74a3d0df798b79e8ea12525ae76ad91a6b0a78eb51618108faa4a66313e502959a76afbcd0f5e78b7075edb6135e4346d92178c019a7349780685a61f314541b9160c38837dfb84b04eb89fd3c052599fe79264dcf1b176f5afe4a0f71808d5da5bf2408fd95f743db3921ae695e6bc8637b20255abec5dad0f5f12f227149db2ce4d7cef57f93f6c987142a28d8d7d344b00e7cf9af9d161fb1b8fa282315de7177986c445805ed0e715dee0b7b600dcd894d34b8521f62fdbe73ea5a93a3c9087b28d44b45ede263a1ad582d5f4118c4f17bba5bc77fbe81215a78040000",
    ],
    [
      "ETag",
      "D3grOe+pNqyndp0Ag+10Hg==",
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
      "Thu, 02 Sep 2021 19:20:15 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1630610362910"
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
      "0002ff8d92614f82501486ffcbe963b0412a199b1fb0b42c3343dcda9a73573820065cbaf79239e77fef5c326bd5565fe09cc3732eeffbc2169ed22202171669f25ca1d81c25a8ee75e1a3ac3225e956f2422218808a2544b65fd53ac8d9f5d4b97116f6c3d2b2fbdeb1d7e91021c325e60cdc2dc429669104f7710b05cb91d6429e557931af3b03d4a6d4c349e00f4697d4e73cd2fd683a1c7add610f76c66131628acd6bfe1f6bb39d012bbef031468145885a4b29f80a4335d03625cbcb0c4dc92b11a2841aae1f24825725139c9b34319b2dd3761a96635b0de7e4ccb608cc78c854ca0b62a713d2078a2b96f97c4d2ec12140d425198eebeb0b8dd3a836a2cbc128709ab5beaf00498bd30ce77f83a477c9e8337c60fb08be732ce755a10e547f78e7fd761c65fa79d48517f47e10525152072418dcf62681773bd6dc6cefbdbb5128c7825390127586b6d56cb74e1deb3dd673aea3a6f7b84a546840c8e8efb84a15b831cb24eede00af1588647b020000",
    ],
    [
      "ETag",
      "8xtwTmaJU6K6b1Xh01FA+A==",
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
      "Thu, 02 Sep 2021 19:20:16 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1630610362910",
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
      "ff85536d4f9b5014fe2be4eecb96d896b74269d2b8a6b28da4a5da528d5b96f60207bc0a5ce45e5c1ad3ffbe0358a731d34f90739e97f3761fc91d2b623226214bef6ba8f69f6e79484e08489a62d429845e3bfb1b7b6a5edf59b3cbc24e93e4623241046b5882e665063dc1eb2a0231deacfb69c5eb92569cf750a8675a3dcd32544b530d4b7734157902b264ce8a3b64df48598af16070f4eea79ca719d092897ec4f3e7f8e0411f9415bf85488ac16bcb01ba88c1fba6a7198fa864bc986cd658402da0da424e598625fc63c6e1d7d7d27d46f37e8ae00716018d225e17b2290b25225e242cadab56958c1f495be68b1fb276e7ee2c5066cb8d1f7cded1bc21efbe285428db6d05a2cea4f26db55c28bb12bd6ea800b153ae7eb82b57c150c51396c196c53b65a29c2a53ff0ca34262755d60ee2dbc40d1b090188464455b4640c30c9a129e26e5bddd4f43a012cdbae4d6562daa8d54274c423b4a46c6304c5408c351680fa911aa91638219874091271bf596450b5ed8436b68e99a9124a3516cc75a6cea23d3b09dd8310cc7d14d4db74d138616399c903f159370c644c905ebc645ae565ee06e83d5c69f4d03b76d23a13892b3aeb8a68997754a6c1241eff47568b28ca353337bcf0fdcd5741678976eb7ee39a434daafef71e109cd04209a56340709d582c7383472be5c7b81b7f4a77364b43b3c3f220419ff7afc4708f6653b65d97e1b2fcb6cfd8f804b9ad52de2a1fb211a391c4efeaf10780b771d4c17e7efabe8aaaef654bda70d034d1f6bc65833fbaaaafe44f1df48c4bbef74c9c5c65d5d932eb482042a28a28fef02c16de2c3e77b7c4b88c5d78436789792e11546a231892ae8ae91e56def1ddbd42cd31c92165cc93739cb181dc7de68348a9043219f3aeade5233c536558b671026f1887ccfff8ed9bfc9ec0ee4cb040000",
    ],
    [
      "ETag",
      "9ns2u9yh7A4Yk6CVn7gffQ==",
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
      "Thu, 02 Sep 2021 19:20:16 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1630610362910"
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
      "dd",
      "6e",
      "83300c46dfc5bb050928621b522fc6c4b66aa85ae9cfcd545529184617304dc22a54f5dde7b0dd24d6e713fb2857f86eba12623836f5794035ded56856b6c8510fd268be7aea34820368446d49ad5e7ab9dab5f7eb5c86c17bd09c93cd653e6742175fd80a88af5035284b0df1e7153ad1223f3b1cd434913133f636592c37e96b9a73d0526983e536cb9e922c85dbfee6c0898e3956a8b02bd08eec159db0300b6bab45db4b74350daa400d133c356a45432f1491cb891b46ae1fcdbcc8f76651f0e87b0c4a2a8469a86376bb065e63c80899d38565c167404d257b57d3f933c52cb4ff4793d1a0fe50c47b35da95e183f727f04c56cab0ac51033a5008fe8eb7c6405c09a9f1f60bc058c46f6c010000",
    ],
    [
      "ETag",
      "bsrFplQVm7SRl42K2iqBTw==",
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
      "Thu, 02 Sep 2021 19:20:17 GMT",
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
      "edd34b7282300000d0bb64ed300862487780daa452b50e22b26102c448e54f4482d3bbd7e935eabbc37b009a24aceb22515d5909de80a41a5212655d9bf6e27e9957db4b1aefb2d12fc83a099218e910677b5a8ca7a410901b0156d346526ce290e72ef3f21043d997f353dddd088f5c335f55f03822aa95d0fe962eb4d4d03f58c4c89dc1f28a4fac15594c79d088f979a7f7029a433a5e99b55cf50c9fa7b6e97947116a3c8d82bb81584b565fd32018dd83fa8e36cb06ba32de1e1d41fc9637647d29177d73bdf924fb986963bbb7e410ebaaaef3ad986d96c48916cacbcbff0526800d75d6b22eca9edb7503a109f8ab1f0959b3e77f9bd196b5e0e7175f4f2d5f19040000",
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
      "Thu, 02 Sep 2021 19:20:17 GMT",
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
      jobId: "grouparoo-job-47-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbd8268184908714ad514a57a6847440da3d3421630c750b9862d3aeaaf2df776d9aae55a5ee13b6ef39f79cfbe009ddb22a457394b0fcaea5cde3a71b9ea0634425ced5abc5ca9fb7ebb6f6edafd74735f95e5dfc397a582c00c1144be0b22e684ff0b62154cc77613f6f785be386f31e24ead9939ee58c4cc73247ce706699c013b4c8d6acba05f6b594b5980f0607ed7ece795e505c33d127bc7c791fdc0f0775c36f289162f05672002a62f0b1e8e782132c19af16bb100cb48236312d312bc0c23f669a9cbc4ddd67b8ece700be67846242785b49650b52105e652c6f1b9d15cd9f90b6f9ea804277edae2283f0a22dabb8c2253d36522c712c1f6b6a9c05db8de1f967db60b38cbcad1f87ab7377b3ecafb6ebddc60f8dab7337700d8993826aaeb1304ef4cd870be8a754485669f5483d2be5e70679efc7a208202d68178c27a683ada9394bb26442b2e9689c64264d92693219e3516292994ded34a118785a54b370c52b6b3a1ca7493a89337b368eed9949e2593ab4626be238e9d41c66c92c43fb63f4d030494f99a8b9605d87d055e0456e1c053b7fb58c5c5d4286db429e76c65401af3d4a2810401fd4b45751c64149b5dbf3233758ae22efd2ed26bca639268fe11dcc38c385a080c60d344fd266c3536818f2971bf714c07a621787a040f35f4f48f55cb978d5f2177a04035476a5fea2300a3cff8bb673405ce2a2d590fbee806ab07c0db581ebfd6f40c2927659d0b79d1bfc40dd534033dad08afc7f9a00d681fffe6b87c5072cac3ec8080977d81d2294086968b7434c97fbccb6619c6307697023dfc5268e7de89acaa132d29256f2b9a26ef1a1d04eac152f2008c2f87dddadfd5fc8b7661e78040000",
    ],
    [
      "ETag",
      "b1imZkLupN4Jh+pcXnPx+w==",
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
      "Thu, 02 Sep 2021 19:20:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92414fc2401085ffcb782d49112cda844311d0268050ca4543c8d24ea1b8edd6dd2d0409ffddd98a68d4442fedccf49bed7baf3dc0739ac7e0c2325dbd9428f7172bd4135304a84aae15dd0a912b040b50b31591d95e6e3ddf6bf15eb7f9baf387697f163c4eda6d2254b4c68c817b8024451e2b709f0e90b30c692d12bcccf245d559a0f785194ec3c01fdd519f89d8f4a3d960e075063d385ae7c59869b6a8f87faccd8f166cc432c00425e6111a2d85141b8cb46f6c2a96151c6b4a94324205155c3d584951164c0a51a349add9aad59d86edd4ed86737953b709e422623a1539b1b329e9032d34e381d8914b70089055498693eabaa5711a57464ce98f42a759e9fb0a90b424e5b8f81b24bd6b469fe1033b45f09d639928737da6fa8307efb7e328d3cfa3ba5ed8fb41284d499d91d01ff6a6a1371c1b6e7ef2ded96b54632928488526c3baddbcbe6a39f67bacb7c2444def71b52cd18288d1df719f6a7013c6151edf00126813da7b020000",
    ],
    [
      "ETag",
      "myrvAIA7lED4zwIMiFURZQ==",
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
      "Thu, 02 Sep 2021 19:20:18 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85546d6fa24010fe2b64efcb5d521504114d4ccf58da92f8d22ab6e95d2eba2c035d8b2c65172f6de37fbf016a5fd25cfb0998795e6666677922773c0d499f043cbe2f207ff8b611013922a0688cd165f8f868848b1b3756f1e5d9e4fcd766e3ec2e070344f09225e9364ba02145913390fde5a219e7a2c8682e4403851a96d3306c53b70dddb4db3d43479e84241af3f40ed9b74a65b2df6a1dbc9bb110710234e3b2c9c4f625dedab55b592e36c0946cbdb76ca18b6c7d6e7a9c08461517e960b9c0020a09f90ab6942758c22b330c7ebe976e72ba6dc608de7106943151a4aa2c0b259848231e1779a54afa4fa42af3cd0b59b86377e46ba3d972ea7f5fd36d495effd0a8d456ab1c649128ed743e9b68eb0cbd6ea904b9d6aecfddb9ab612817114f60c5c3b536d08eb5e1f404a3cf1a5564ec4d3c5f33b09210a4e26955874f8304ca1a9e47e57d3ca0924015bad5c95557b7a9e1e8bd200aba2c72cc4e10e910044ed0ed5033d059cf022b0c80224f95ea158ba622351dddeaf63a108019b0c06a874e9b85a669d93464d4e9399d4e5bb76de891fd11f99b7305275c6642f27a5ee47aeef9eeca9f2fa7a3a1ef566d4414677252175736f1b64e854d22e893bef665960b742a87ef4d7d773e1cf9de955b9ff71862ca1e16f778e2114d24209ae6740b0af289087168e462b6f07c6f361d8e91511de2c5012149fff7d32bc17fc8aa29abea597ad956e57f005cd1a4a810bbfa851864bf3ffabfc2e97836fc5aa3d941c4fe0f8270c56b0572b974e737a40ecd21821c52f6f50620b84a7c79530fd7a6fc0f2c4a1ba9f01bf78dc9d284e550ef1ddf5615d66ccb702cbd4d2a70ae3ee43abdee61c0a546a9085b48d57347f5b529e755a50af902c224aecbd49b9e61f61f9d2a4178b6040000",
    ],
    [
      "ETag",
      "Udzz1dSYEgtgQGMHZjj8vQ==",
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
      "Thu, 02 Sep 2021 19:20:18 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1630610362910"
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
      "000002ff2d906f4fc2301087bfcbf9d22dd91f455dc28ba144300b8129898921a494db1c76bbd1762259f8ee5ea76fdacbef9ede3d690f5f55b38704765579ec509faf4ab42b57e4683a650d5f2d3506c103b4a2645220dd364fc7f47aa9e874f733932fef3a5d8dc74c18f989b580a487a242b537907cf4d0881af9d976ab87898cd973eb92f9e26dfa3ccd39a869ef82c53acbd2493685cbe6e2c181763916a8b191e846b69a0e28eddcd91a51b70a7d439d966860808746a9a96b8526f239f16feefd701407a3308847d1431830a8480a5b51c3ecfa15788d252b544e27968590013d94ec5d0ce737c79113dafca393b345b3d4c47b0dba957114fc093c9293b22c6b75871e48c1df31ab2c248550062fbf827576056c010000",
    ],
    [
      "ETag",
      "aeo5nDqA+Plow7xHcJXrAQ==",
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
      "Thu, 02 Sep 2021 19:20:19 GMT",
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
      "7282300000d0bb64ad8c08a1a63b21d681281f4540364c42a344446804053bbd7b9d5ea3be3bbc6f40f39c5faf595b97fc02dec140a748c915d2cc4c7c17896fbaa1adc71e65757aac9b7d36ada26a5be5f3af90f86f5cfd64cba08937bc98b1c4ec4a6245e1b9cbe1cd5de4da0963758d768e63085204876865583c1d5b8f1eb31495c54af49b793a9f60fb11d89189a546771fbaf48e7ab0592cf1bd8cf7539b0cc1709602093c5ec0c288192b6f485ba7b6af96548d8ca44de5e04617a387db3b0c5875666842bc35a49d659e98e36472c53011ea219630ae5be5e5e5ff0223c0fb46487ecdc473bb06111a81bffa593b34fcf9dfe45472097e7e018e7727c219040000",
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
      "Thu, 02 Sep 2021 19:20:19 GMT",
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
      jobId: "grouparoo-job-49-1630610362910",
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
      "85536b6f9b3014fd2bc8fbda0412f22252b446295da305b21168b54d1332e642dd124cb1695555f9efbb98a66b37a9fd84ed7bce3de73e7822b7bc4cc99c243cbf6ba07efc742312724240d11c5f974d6346f64f7310e553f5f5d26ba272a91e160b44f09625e9be2aa02745533390f368d7cf6bd154b416a287897a23a73798d8d66460d993a133b09027a1c836bcbc45f6b552959c9be651bb9f0b9117402b2efb4cec5fdecdfba159d5e2069892e65b491355a4f9bee8e74230aab82817d10e0d3412ea18f6941768e12f334d4edfa6ee73baefe708bee70c2863a229556b0b533051663c6f6a9d95cc9f88b6f9ea4076eec65d85061345b32fe392eee1c448a9a2b17aacc0380fb69eb1f6cfb781b70cd75b3fdead2e5c6fd95f6d3791e7ef8cab0b37700d45930234d75818a7fae6e305f553908a975a3d6c9f5be5e706adff1f4b4b4069095d309e5a133a98594e92255396cdec7192599024b3643aa67662316704a334018a3c2daa59b4c49a87c9d81e3a596cb3d9201ea5b3614c6992c54e4ad36c0a98c04ec9e1843cd45cc119979590bceb10b90ad6a11b8741e4af96a1ab4bc86853a8b3ce585bc06b8f0a0b44d03b351dda2817a8d4b67bed876eb05c85eb4bb79bf00672ca1e777738e38c1612104d6b6c9e82da1329368cf84bcf3d43b09ed8b7635092f9af27d2f6bc75f1aae52ff41007d8da55fa4b7661b0f6bf683b47c4252d1a0db9ef0ea442cbd7581bba3efc46242e6997857c8fdce007e99e02c8a086927d3c4d04ebc087ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e53eb3470367e6d844836bf54f6c685963e7d8b536479b11f650aae78abac5c7423bb146be803088e3f775b70e7f008dbe27af78040000",
    ],
    [
      "ETag",
      "Auu/U3Z/1Ug7tKVMuUnAtw==",
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
      "Thu, 02 Sep 2021 19:20:20 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1630610362910"
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
      "92dd6e82401085df657a8b29fe5125f1425b6b6dd05ac4f4a231668501b1c0e2ee52438cefde596a6dd336696f6066f86639e7c0015ee22c001bd671b42b50941711aa475db8288b4449bae53c930806a0621191b87b6a078d7272df711681e36e2e47fb9045bd1e11d2df60cac03e4018631248b09f0f90b11469cde7499166abaa334095b91ece3d773c1d519ff240f7d385e3f407ce108ec67931608aad2afe1f6bcba3015bbe76314481998f5a4b2ef8167d35d636254bf3046b9217c24709155c3d88042f722638afd1a4d6ead6ea56d3b4ea66d36a74eb268109f7998a7946ec624efa4071c51297efc925580488aa24c361757da5711c544674399e7a56abd2f7152069619ce0ea6f90f46e187d860fec14c1778ea5bcc8d499ba751efabf1d47997e1e75d3f7863f08a928a933e28d27c3b9d79fcc34b73c791f940ae54c700a52a2ceb06eb63aed2bcb7c8ff59aeba8e93db612051ae033fa3bee620576c81289c737607cb3327b020000",
    ],
    [
      "ETag",
      "eqW5d2yMJ8LUdLRh/Gwfag==",
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
      "Thu, 02 Sep 2021 19:20:20 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` != ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1630610362910",
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
      "00000002ffa553db6e9b4010fd15ba7d69d5d880b1f145b252d7a129aa6327364e5a5595bdc040360616b34b222bf2bf7716e25c142979e813eccc3973ceccecde930dcb4232203e8bb72514bb8f37dc274704248d31ba3dcdafc6a7bfee265fbeed26db4dfaf3fac2d6ef86434430c51234cd1368085e160188c172d18c0b5ee6b4e0bc81851a1da361da96619b8665b7faa6813c01493461d906d9d752e662a0eb07ed66cc799c00cd9968063c7d8cebb72d3d2ff80d0452e82f25755411fadba2c7090fa8643c1b2e1768a01450ac20a52c410b4fccd0fffab27493d1b41923f89605408380979954b6b044c0b388c565515525837b52d97cf64316cec4197bda78b69c7a9fd63455e4f5678d0a6db52a409489d4becf6767da3a47ad6b2a40acb5ab1fcedcd13054f08825b062e15a1b6ac7da687a825175faa08e13f7ccf534136d842024cb2a131ef51350061ee6e4bede8e225089527572d5356c6af68cbe1ff9dd20ea591d3f32c0f77b7eb7432ddf08fa6d68873e50e44955bd62d10c5bb7284018f6423bc2194751d0b12330db96111956cbe8f769ab67d356b74df647e4ae60124e98c8b960f5b0c8d5dcf59c95375f4ec723cfa9da88280ee4a436a79a78ee536293087aa3afbdca328e4a6af2eed473e6a3b1e75e3af5b22710d360b7d8e2ba239a0840342d680a128a331ee2d0c8f96ce17aee6c3a9a20a3dae0f90121c8e0cffd13c1dbe5d59465f5555a76d5e623e092266585b8ad7f8849f6fba3ffabd0c1127f118277bb66938ba533ff4dead01c2228200bdedf3e82abc4bb4ff4f05e108b2f066584c433deb5402891a080faceb1b4f257b3db2dd3e87748052ee4ab9c655987e1aa1aaa22a490c9878eeaf7a26655a54af108c2245e95a93b3dc5ec3fbb784a57af040000",
    ],
    [
      "ETag",
      "qGpWCGXwL+ByLqkmKhQ6/w==",
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
      "Thu, 02 Sep 2021 19:20:21 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1630610362910"
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
      "c1",
      "4e",
      "83",
      "40",
      "10",
      "86",
      "df",
      "65",
      "bc",
      "960856aa92f4600d5162530bb5174dd36c61402a30b83bd854c2bb3b8b5e7627ff7c3bf3657bf82c9b0c023894c55787fa7c5120c7b648d074151bb95a6a0cc204905521e40bc52b5ddef8f533bfc511af519bcb9fd37c2e84493fb05610f4909758650682f71e1a55a33cdbeff53851303eb7368956afe163984850536683d576b9bc5f2c431876c3048e744830478d4d8a7664abe9882947d6d6a8baadd031d4e9140d8cf0d8283475add2448e248eef3ade6ceace3c773abbbaf35c012b4a1597d408bbdd80ac61625525741259f004d06329def9787e4bec5ba1dd3fba38339ab526d96bd0aebcbe75ff041ec84ab1c8b2ee7002a992ef782a19825c5506875f6bd7e5176c010000",
    ],
    [
      "ETag",
      "OoQNri75mKtZQItPers/zw==",
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
      "Thu, 02 Sep 2021 19:20:21 GMT",
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
      "cb",
      "72",
      "82",
      "30",
      "18",
      "40",
      "e177c95a1805b5d29d11446e5ea828b86180fe5c82184c50433b7df73a7d8dfa6dcffa7ca324cb80f3b8a3355cd03bea13459333d96967587f94c51ac8b04fe9cc206bbf3b1e0ae7a3c176732c2b9218b77ebc0abb71b35d706f5b6a81319516c45d05fb8eb492df347c1b5921dd1434c29127fc5c33e7457c12ad2502d5bcd53b538969faf9808975c54ac1017b237d431c3dca87b49c2bb673b8888534f158410d26499799c9020bbed2dbfad9b27c1fae2401e9123cc12bfb7cf2cbb3106f439765b4a6eac17be46a35be4e47e592ee22ddadd3f9f4aec82f2fff171a20106dc580c7d5f37675a26903f4b77edcf52d3cffc7903060e8e717d3d70bfe19040000",
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
      "Thu, 02 Sep 2021 19:20:21 GMT",
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
      jobId: "grouparoo-job-51-1630610362910",
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
      "ff85536b6fda3014fd2b91f771858400e121a11541baa141d84268374d53e4989bd46d88d3d869852afefbae9dd2b5aad47e8aed7bce3de73ef2486e79b1236392f0ecae86eaf0e94624e48c80a2997ef5eac1775b95ea73ff57ca0f747e297adb87c904115cb324dd9739b4a4a82b0672bcddb4b34ad425ad846861a256bfd3ea785dc7eb385dcf1d751ce449c8d3252f6e917dad5429c7b67dd26e67426439d092cb3613fbe777fbdeb5cb4adc0053d27e2d69a38ab4df17fd920b461517c564bb4103b5842a863de5395af8cfdc25e7af53b739ddb73304df7306943151174adbc2144c1429cfeaca6425e347626cbe38908dbff46791c5445eef8bb8a07b38b37654d1581d4ab02ec2f5ca5a0417eb70358d16eb20deccbef9ab697bb65e6e57c1c6bafae687bea5689283e15a13ebdcdc02bca0fe0ea4e285518ff4b3567e6ad0e2ed583401a52534c178e078b4337446499a0c583aecf693d481241926833eed260e1bf5a0b74b8022cf881a162d4431a2c34ee279694c5d4ae39e03102743eac65e6797f6fbde70381824e478461e2aae60ce6529246f3a44aec245e4c751b80d66d3c83725a4b4ced5bc31a60b78e9516181087aa7a6a38e72814abadd8b20f2c3e92c5a5cfacd8497905176d8dce18c539a4b4034adb0790aaa95d861c348305df973049b89fd38052519ff7924bae7dac58b963fd3231ca0b6abcc976ca270117c35764e884b9ad70672df1c488996afb136747dfc8b485cd2260bf9b9f5c3dfa4790a21850a0af6f134116c021ffe6ba7c5472cae3eca488577dc1d26b508aba0d9216eca7d62f75cd7715d62c0957a1373bbeea96b3a87ce087b28d45345cde263a18d582d9f4118c4f107a65bc77f1a00d94f78040000",
    ],
    [
      "ETag",
      "b6u7K/tpt+5XfiyaDVo4Uw==",
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
      "Thu, 02 Sep 2021 19:20:22 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92414f83401085ffcb789446b0162b8907d45a6bda5a293d18639a1586960a0cdd5dac4dd3ffee2c6a356aa2179819be59de7bb081a7b488c183c774b6ac50aef766a86f4d11a0aa32adf85652a1102c402d664c5edff9ce65fb609faea83b5f765e9c41da1aaf4e4f9950d11c7301de069214b3588177bf8142e4c86b1165555e4cebce02bd2ecd701c06bd6197fb9c62d30f27fdbe7fd6efc0d6da2dc6428b69cdff63ed616bc1821e034c506211a1d1524a5a60a47bc6a612799961435125235450c3f58399a4aa1492a8c19346cb69386ed3761dbbe91e9e383683194542a754303b19b33ed0a44516d08a5d82cb80ac4b369cd4d7671ea7716dc494bd61e81ed5fabe022c2d49339cfe0db2deb9e0cff081bd47f09d13395585de5197fd1bffb7e338d3cfa32efcb0f383509a93da21616fd01987fe6064b88777ef676b8d6a24898354683274eca376ebd8b5df623d271335bfc7d3b2420b22c17fc755aac14b44a670fb0a3613d2947b020000",
    ],
    [
      "ETag",
      "JYA1F8/+oHoGhqEx1Mi5Sw==",
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
      "Thu, 02 Sep 2021 19:20:22 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1630610362910",
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
      "536d6fda3010fe2b99f765930a04427893508768b645a2d086d06a9b26b0cd25759bc469ecb05515ff7d17a7f445d5da4f71ee9e97bbf3f99edc886c4b468489f8b684e2eee3b564e48880a631464fdcef67bbbfc9e5f9324eaebae5c28fa7b39ff1788c0851b1144df3041a4a960507355a2d9b7121cb9c16523650a8e1761aed9e63f7dab6d3eb0cdb36f21424d14c6437c8bed23a57a356ebe0dd8ca58c13a0b9504d2ed3c7786bd769e585bc06ae55eba5650b5d54eb6dd3e34472aa85ccc6ab2516502a28d690529160094fcc2dfbf252ba2968da8c11bc131c28e7b2cc7455164a709945222e0ba34a46f7c494f9ec4096decc9b86d674b19a879f3634adc89bcf1655d67a5d802a136d7d0d16a7d62647af2baa406daccbef5ee059182a642412588bedc61a5bc7d6647e623d0137d6872a38f34ffdd06a63315b505a64a69490b204aa321ea6e5bfbea38a4035ead4c975dfeed1f6c01eb288f57934705c16d9c0d880f55dea309b0fbbd0dd32a0c8d395ba61d14c6638df01eb394384ba43b7edf607aee3f00eb0ae0baec39c011d40976ffb647f44fe1442c38950b954a21e19b90cfcd05b87c16a3e9d849e6923a2389693bab8aa89e7756a6c12416ff4b5afb242a253357f7f1e7ac1641afa175e7de5338829bf5bdee2a547345180685ad0143414a7728b4323678ba51ffa8bf964860c738f67078422a35ff74f84f02e3753d6e65b79f5bac6ff00b8a0496910bbfa40da64bf3ffabfc2320cfcf9b7b7252639768b32bf11855b5e2b90f39517fc20752880080ac8f8fb1b80609378f7b11e5e0e62f1eda08dd2f88ffbc65565c20ba8f74ea4a6cb9addede0c721065ce857b98eed1c065c69548a9042a61f3aaa5f4e352f932ad5230893b82e7333a9fd3fdc3cc979b9040000",
    ],
    [
      "ETag",
      "D5HPvxlWQSglh4uOIgCLZg==",
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
      "Thu, 02 Sep 2021 19:20:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1630610362910"
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
      "6b",
      "83",
      "30",
      "10",
      "86ffcbed6b05b5d676423fb49b7405299b6bd9609412f57476eab9246e88f8df7b71fb921cef3db97bc8005f6593410049597c7728fbbb02f58b2962545da5155f2d350a6106a845c164b67477ef757f5445e73dbe25aba42ec3c566bd6642a59f580b0806c84bac3205c1c7008da8919f5d2e729ac898ee5b93ec0fc77017c61cd49499e0708aa2cd360a613c8f33b85212638e129b14cdc856d21553bd37b64ad46d8596a24ea6a86082a74621a96b8524b238b116aee5f873db77ecb9efde3b368315a54297d4307b7a055ea3498b2aa65f960587013995ec9d4fe70fc79e113affa3db5ea37a96c47b159a95de6af927f040464ab3ac961dce2015fc1d4fa586201795c2f1060076a8106c010000",
    ],
    [
      "ETag",
      "d72GXmyTsgu4DWb8bmiE5A==",
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
      "Thu, 02 Sep 2021 19:20:23 GMT",
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
      "edd3597282300000d0bbe4db382a02d23f982046162d8bd0fe30314664293b12ecf4ee757a8dfaeef0be01a194755ddc57392bc11b98c84a99d3b9596f3434664e733748a6152b3b48f2c1440bbcf5e594528edf09d20643086156d24f7d0ad139726bdf1261ec1754e1ad2eb96274d6f18906c9e3e05cb36ab94d22e1c4c9c5de854c0f247ab6efd6c82e5f4e023f54ed5237aee78a8e87f1a616bc82fb96f710c601a5059cb4002ef7db2edc41e32057b7cd7a272f232b4466af0cd06a647c93aeead1dc4b15270bd9cc15dd9d90681ab712d2b57dac924454f501e26efef2f27f811960bc4e5bd6c5e973bb202aca0cfcd58ffba966cfff1a232d6bc1cf2f377f4e5719040000",
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
      "Thu, 02 Sep 2021 19:20:23 GMT",
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
      jobId: "grouparoo-job-53-1630610362910",
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
      "6b6f9b3014fd2bc8fbda2410c8538ad628a12b52423a425a4dd3848cb9503704536cda5555fefb2ea6e9da4d6a3f61fb9e73cfb90f9ec99e170999929867f735544f5fee444cce08289ae1eb95bd17bf972c2b57fb7e3a1e5d0d1c5b79f3d90c11bc61497a2873e84851570ce474b7ed6695a84b5a09d1c1449d81ddb186b639b44c7bd89f5826f224e4e98a177b64df2a55ca69af77d2ee66426439d092cb2e1387d7f7de43bf5756e20e9892bdf7923d5491bd8f45bfe68251c54531db6dd1402da18ae040798e16fe3293f8fc7dea2ea7876e86e007ce803226ea4235b630051345cab3bad259c9f499689b6f0e64ebaedc45683091d787222ae801ce8c842a1aa9a7128c8b60b3363cff6213ace7a1b7f1a3ede2d25dcfbb8bcd6ab7f6b7c6cda51bb886a2710e9a6bcc8c737df3f182fa0948c50bad1e36cf8df24b83bcffc7d210505a421b8c46e6905a637312a7f188a5637b10a726c4f1381e0da81d9b6ce28093c44091a745358b16a24016a48e6945e9c0ec474e3261d1d89e3891153b0c4cdbb22d3321c733f25871054b2e4b2179db21721378a11b85c1ce5fcc43579790d23a57cbd65853c05b8f0a0b44d007351d9b2817a8d4b4dbf34337982f42efda6d27bc828cb2a7ed3dce38a5b90444d30a9ba7a05a8b041b46fcf9da5d22584fecea149464faf399343d6f5cbc69f92b3dc401367695fe926d1878fe376de784b8a679ad210fed819468f9166b43d7c75f88c4256db390ef3b37f841daa70052a8a0609f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b92f6ca76f4f860ed1e04afd1b73ac41ffd4b5264793110e50a8978adac5c7425bb15abe823088e3f775b78e7f00ede647f978040000",
    ],
    [
      "ETag",
      "P3koxDcgpLk2f87P543tIA==",
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
      "Thu, 02 Sep 2021 19:20:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1630610362910"
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
      "92",
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb786d631128d884431144124028e5640859da2914b7ddbabb5509e1bf3b5b118d9ae8a59d997eb37defb507784cf3183c58a79ba712e5fe62837a668a0055c9b5a25b21728560016ab621127bed2e7f5d27bd666b37d8aef1b2ed0633bfd32142455bcc1878074852e4b102efe10039cb90d622c1cb2c5f559d057a5f98e13c0c869301f599884d3f598c467e77d487a3755e8c9966ab8affc7daf268c14eac034c50621ea1d15248b1c3480f8d4dc5b282a3ad4429235450c1d5838d1465c1a410364dec66ddaeb975c7ad3975f7eabae610c845c4742a72621773d2075a68c603f1422ec125405625194eaaeb338dd3b83262cae124741b95beaf00494b528eabbf41d2bb65f4193eb05304df39968932d767ea7674efff761c65fa7954cf0ffb3f08a529a933120ec7fd79e88fa7865b9ebc77f71ad5540a0a52a1c9b0e634dacd96ebbcc77a234cd4f41e4fcb122d8818fd1d77a9062f615ce1f10db3fa3a087b020000",
    ],
    [
      "ETag",
      "eD8BlxbfD57jGhbe/86RQA==",
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
      "Thu, 02 Sep 2021 19:20:25 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` != ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1630610362910",
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
      "7b6f9b3010ff2accfb67d39a00099087147551ca36a4947484b49aa629317050af80a96dba5555befb0e68fa50b5564202ee7e8fbbf3f98e5cb132215312b1ecba0671fbfe378fc8110145338c1a9fcc81fed75f5d94e155b0ce9c449889359fcd10c11a96a44595434ff25ac420a79b753f13bcaea8e0bc87423ddbea99ced0704c63e80c26a6813c0979ba64e515b22f95aae454d70fdefd8cf32c075a31d98f79f110d76f067a25f86f8895d49f5beae822f5d74d8f731e53c57839dbacb1805a82d84241598e253c3293e8f373e93ea3453f43f00d8b81c631af4bd5948512312f5396d5a25525d33bd296f9e483acdda5bb08b5c56ae3871f76b468c8bb8f1a95da762b40d6b9d2be04ab536d57a1d725952077dac5373770350c099eb21cb62cd96933ed589bfb27da2370a7bd6b824befd40b35138b49402a56b6a58434caa129e37e5adecb336a0854a14e97dc8e0c879a636312a5d1284ec7433b4a0d88a27134b2e93032e28905561201459e6ad45b162d790913c3a6d66808e6c881d104ac716239966d9ae9c48acc64645a469cdad198ec8fc81fc1149c305971c9ba91918bc00bdd6d186cfcc53c74db36528a6339e98a6b9a785aa7c22611f44a5ffb26cb383a35f3f7fcd00de68bd03b77bb235f4246e3dbf5351e7a4a730988a68216a0409cf2048746ce566b2ff456fe7c898cf61ccf0e0849a63fef1e09e16dd54e59b5efc6cbb15aff03e09ce6758bb8e93e8849f6fba3ff2bacc3c0f3bfbe2e412bec16657e210ab7bc5320df376ef08374a100521050c66f6f0082dbc49b97f57073108b77076da4c27fdcb7583626b1806eef58d176d9b1ad813d18daa4050bf52287cf61c08d46a3080594eabea3eee634f36a53b57c006112d7c56f27b5ff0709b9eca5b9040000",
    ],
    [
      "ETag",
      "0+12/xNOWnTkRSg6dr1d4A==",
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
      "Thu, 02 Sep 2021 19:20:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90514fc23010c7bfcbf9e81619e0c4253c08122421e0863c1942ca769b836e57db4e83cbbebbd7e94b7bf9dfaf77bfb4854b596710c1a92c3e1bd4d79b026dec8a044d23ade14b516d103c402b0a26e3f9b07afed94eb677f2b6c8d4256e96a7389e4e9930e9075602a216f2126566207a6fa11615f2b3e351f71319b357e592d5e66db15c241c5494b960b35faf9f66eb057487ce83339d12cc51639da21ba9349d31b52b676b44a524fa861a9da2811eee1b85a646094de473e2df8ffd201c0dc260300a878fc1804149a9b025d5ccee77c06b2c592113fa66590818d07dc9de797f7e711c3aa1c33f3abb5a34af9a78af41b7723c79f813989393b22c6b75831ea482bfe3a5b410e5421aec7e01c3a1f5856c010000",
    ],
    [
      "ETag",
      "QC2mDzO8O/l+gdpkQuGbQQ==",
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
      "Thu, 02 Sep 2021 19:20:26 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd34b7282300000d0bb642d8efcaae98e18ca5741a80c76c320a618b010133e4aa777afd36bd47787f70df2a22042645d5b9306bc827baec07931f7d80ae1910e34d4127a13e3953569529d7c7583d276d86d15b90827329e6bdcbf44e345518dfd3bcf3f0ff8ad647d6cef9bb39b0425a27ef0e59a384bd68aec069313375922792615b52c358dbc28d69115c681816e2da6982f4fd0ff08ccca49790bf5de95f1bad2d02079877810a8bda023b296e1d8f75a672fae0e1fcbb4356afb68ebbb3d3588b31d6cbd4f0c58745b3f922abe9a1c1cb35cc3d604cd74c3049c3f3dfd5f6006c88d514e44461fdb551dc219f8ab9f7577461eff11c939e1e0e7175018b75219040000",
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
      "Thu, 02 Sep 2021 19:20:26 GMT",
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
      jobId: "grouparoo-job-55-1630610362910",
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
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "fbda243c129a448ad634a12b53425642da4dd3848c73a15e09a6d874caaafcf75d4cd3b5aad44a4860df73ee39f7c123b9e3c5968c49c2b3fb1aaafda7df2221270414cdf0d6bfbd3b1fa8efbd4d363fff9a3bc3bfa7fb4b7535992082372c4977650e1d29ea8a811c6fd6ddac1275492b213a98a83318742cd7315dcb745c7b6499c89390a70b5edc21fb56a9528e7bbda376371322cb81965c7699d83ddff71eec5e5989dfc094ecbd96eca18aecbd2ffa39178c2a2e8ac9668d066a09550c3bca73b4f09fb94dce5ea7ee72baeb66087ee00c2863a22e54630b533051a43cab2b9d958c1f89b6f9e283acbd85378b0c26f27a57c405ddc189b1a58ac66a5f827111ae96861f5cacc2e534f25741bc9e5d7acb6977b65a6c96c1dab8b9f442cf5034c941738d8971a64f011e507f0b52f142ab47cd75a3fcd420ffed581a024a4b6883f1a9e9526b688e92343965e9d01924a90949324c4e07d4494c36ea437f9b00459e16d52c5a88c24a2c3a1a6c9dd866f630ee5bce284e5cb31f2760e103c06cb74f0e27e44fc515ccb92c85e46d87c84de8475e1c859b60368d3c5d424aeb5ccd5b634d012f3d2a2c1041efd47468a25ca052d36e3f88bc703a8bfc6baf9df00232caf6eb7b9c714a730988a615364f41b5145b6c1809a64b6f8e603db16fc7a024e39f8fa4e979e3e245cb9fe9110eb0b1abf49baca3d00fbe683b47c435cd6b0d79683f4889966fb136747df885485cd2360bb9da78e10fd25e8590420505fb789a08d6810fffb5e3e22316571f65a4c233ee0e938d08aba0dd21ae",
      "cb7d62f76dd7b68744832bf526e6b8ceb16b4d8e2623eca0504f15b58b8f85b662b57c066110c71fe86e1dfe018fe68cde78040000",
    ],
    [
      "ETag",
      "IhkB5tX/UgDBJl38z7yHtQ==",
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
      "Thu, 02 Sep 2021 19:20:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1630610362910"
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
      "92",
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85ffcb78a5915a8b4ae2812a2ab1d64a693c18d36c61c0d585c5ddc5a636fdefce62ad464df40233c337cb7b0f56f0c4ab0c7c98f3e2b941b5dc29d0dcd82246dd08a3e956cb4a23388086154496cdee6b56c4d16152bc7271c96f1761d90b8e8f89d0e903960cfc15e41c45a6c1bf5b41c54aa4b5548aa6ac666de78059d6763849e268744e7d2933db8fa6c361301886b076b68b19336cd6f2ff58bb5f3bf028e731e6a8b04ad16aa9957cc4d444d6a666652db0a365a352d4d0c2ed8342c9a6664aca0e4d3afd7ea7ebf55cafebf6bcbda3ae4ba09029335c56c44e27a40f8c344cc472412ec12340b52519cedbeb0b8d79d61ab165344abcfd56df5780a4e55ce0ec6f90f43e30fa0c1fd82682ef1c2b6553992d7536bc0e7e3b8e32fd3cea3448c21f843694d41649a2ab7092045763cbdd6fbc0f9606f558490a52a3cdb0ebee1ff60f3cf73dd61369a3a6f7f84635e840cae8efb8e006fc9c098deb3787bd2ac47b020000",
    ],
    [
      "ETag",
      "mu/zdgRI8TgzilKiWwEm3A==",
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
      "Thu, 02 Sep 2021 19:20:27 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` != ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1630610362910",
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
      "0000000002ff85536d6f9b3010fe2bccfbb2494d0204c88b147551ca5aa634e908e98ba629b18da16e01536c3a5555fefbced074adaab59f3077cfcbddf9fc886e7911a331223cbdab59f5f0f94610748098c22944537b452eae8e3d420683cb4bf307a7e149369d4c00c1354be2bccc58478abaa24c8ed7ab6e5a89bac495101d10eab85ec7f2faa667997dcf1e5926f024cb92392f6e817dad5429c7bddedebb9b0a91660c975c76a9c89fe3bd7bbb5756e28651257baf2d7be0227bef9b1e668262c5453159afa0805ab26ac372cc33dde0333326df5e4b7739cebb2980ef3965985251174a9705125414094febaa5145e347d494f9e28056fedc9f45c66cb95e445fb638d7e4ed57034b63b3a998ac33657c0f97a7c6b604af6b2c99dc1a17277ee81b10aa44c233b6e1f1d6981887c6747104d1182bb6353ee9c03c380d22c382426226152f9a32224c32a64b789a54f0f67e34012b306b939b81e9616b688e4842063419f65d92988c902119b8b84f4c3a729813138681a7b47ac3c285281cafefda233b19b92676124a1c3b76136f38c423cf720826d4a3b6ed5918ed0ed09f8a2b76c46529246fc7852ec220f23751b85ecca691dfb4916018c9515b9c6ee2659d0a9a04d03b7ded74960b70d2b30f16911f4e675170eeb7d73d6729a60fab3bb8f0046792011a5738678a55a72286a1a1b3e52a8882e5623a07467387677b8444e35f8fff08d143d94c59355fede5398dff1e708eb3ba41dcb70764a1ddeee0ff0a477a04ef0ad8a66d764cbb63b9a0f41ba0b0e4ad08fab9f6c32bd4864296b08a15f4e325007093f8f0adee1f0e60e1e9808d54f00f2b47a536a1156b578fe74da32ddbb107aeab9713c0957a93f386d67ec65a432bb29c15eaa9a3f6e1e89135a95a3e8320091bb30816c790fd0b06c1f621b8040000",
    ],
    [
      "ETag",
      "g2SbWYG6bb77XX0JicRHlA==",
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
      "Thu, 02 Sep 2021 19:20:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90514f833010c7bfcbf90a09b88d28c91e9c21ba48d840e78b59960e0e2c030edb3225cbbebb57f4a5bdfcefd7bb5f7a8193ec0a08e128abaf01d57853a1496d91a11e1aa3f9eaa9d3080ea0111593412d49466233ef7fceefa734396e372f69ba5c32a1f34f6c0584172825368586f0e3029d68919f1d0e6a9ac898197b9bac93b7e829ca3868a9b041b28be387551cc1757f75a0a66386252aec72b4237b4535e6666d6db568fb065d4d83ca51c3044f8d4ad1d00b45e472e22e02d70f665ee07bb3e0f6def7186c28174652c7ecee15788d21239a8cbe59167c06d454b277399d678e175668ff8fae46837aab88f76ab42be777de9fc0235929c3b2460de8402ef83b9ea581b0148dc6eb2f65d73c626c010000",
    ],
    [
      "ETag",
      "6jioiEaO4pxvVkQNbPOKQQ==",
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
      "Thu, 02 Sep 2021 19:20:28 GMT",
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
      "ffedd3417282300000c0bfe4ac8e21c5406f60850842c1465abd64420c34830a222ad1e9dfebf41b75ffb077c08590a713ebea4a1ec02bd0dcb04762143696fb7655fa8a63947868b12f7b4482b878a10a1639528561e83109586c0ea17f619a31683b1927c19078ab1ce214afcf5aedcd890894e56f70ad4592a1242ce9e5368f42df2d171f87d94c5775b44b7dab8ecd31153b483d98f11b26e24cf2ae9c7ced1cecd169b7747bf75d35c7765b8d118d61e879d1fa48129b4323df34559d4cb1d347975bdd3811f7b74bebdb48d15aa6d7d5672b69662da6383aa24d311f3d3dfd5f600064dfa8569e987a6c47a66d0fc05f7dd6e9463efebb92b7b2053fbf496d4b2f19040000",
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
      "Thu, 02 Sep 2021 19:20:28 GMT",
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
      jobId: "grouparoo-job-57-1630610362910",
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
      "6b",
      "4f",
      "a3",
      "40",
      "14fd2b64f6636da12da58fa4599b16579296ae94ea9acd860cd30b8e52069941e39afef7bd0cd6d598e82766e69e73cfb90f9ec91dcf776442629ede57503e7dbb15313921a0688aafbf96ade0ef62695db7cee5c26bb5ceee5bd9e8623a4504af5992ee8b0cda5254250339d96e3a6929aa829642b431517b306c779dbee574adbed31b772de449c89225cfef907da3542127a679d4eea442a419d082cb0e13fbd777f3a16716a5b805a6a4f95ed24415697e2efa3d138c2a2ef2e97683062a0965047bca33b4f09fb98b4fdfa7ee70baefa4087ee00c2863a2ca556d0b533091273cad4a9d954c9e89b6f9e64036eed29d87061359b5cfa39ceee1c4d8514523f554807116ac5786e79fad83d52cf4d67eb4999fbbab5967be5e6e57fec6b83a7703d75034ce40738da971aa6f3e5e507f0752f15cab87f573adfcd220efe3586a024a4b6882d1d0726877648de3241eb264d41fc48905713c8a8703da8f2d36b6c1dec54091a745358be6221f5387398cf6226a513bb207741cc543ea44bb51bf178f0760f787437238218f2557b0e0b21092371d22578117ba51186cfdf92c74750909ad32b5688cd505bcf5a8b040047d52d3a18e72814a75bb3d3f7483d93cf42edd66c24b48297bdadce38c139a4940342db1790aca95d861c3883f5bb90b04eb89fd3c062599fc7e2675cf6b176f5afe4a0f7180b55da5bf6413069eff43db39222e695669c8437320055abec1dad0f5e10f2271499b2ce462eb06d7a4790a20811272f6f53411ac035ffe6bc7c5472cae3eca488577dc1d266b115642b3435c97fbc2b67b23bb6f130d2ed587d860e01cbb56e7a833c21e72f55251b3f858682356c957100671fcbeeed6e11f09bbc2a578040000",
    ],
    [
      "ETag",
      "XL+RzDL0Y+HsDI++Fq+l8Q==",
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
      "Thu, 02 Sep 2021 19:20:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd6e82401085df657a0b09fe6125f1422b6d49d05ac5abc6981506c5028bbb4bd51adfbdb3d4daa66dd2dec0ccf0cd72ce81233c2779040e2c93d5b64471b85aa17ad4c50465992a49b782e712c100546c45a4bbf7eb8f6d2f18efc7834eff35dab2fa48edba5d2264b8c68c81738438c13492e03c1d216719d25ac8d332cb175567803a147a380d26dee88efa8c47ba1fcd7cbfd7f75d381997c58829b6a8f87faccd4f066cf87282310acc43d45a0ac137182a4fdb942c2b5234252f4588122ab87ab012bc2c98e0dca489d96a9b35bb61d935ab61d73b358bc094874c253c277636257da0b862e984efc825d80488aa24c371757da17112554674e98d02bb59e9fb0a90b4384971f137487ad78c3ec307768ee03bc7325ee6ea42ddfa0fbddf8ea34c3f8f1af402f7072115257541026fe84e83de70acb9f9d97bffa0508e05a72025ea0c6b56f3bad5b6adf7586fb88e9adee32851a20121a3bfe33e51e0c42c95787a0392853d2d7b020000",
    ],
    [
      "ETag",
      "ExL2Q7ITPxPD9Bzdqa2Ntw==",
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
      "Thu, 02 Sep 2021 19:20:29 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` != ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b6f9b3014fe2bcc7bd9a4263184842452d4a1946d6cb9740969b74e5362c050b780a96d525555fefb8ea1e945d5ba27d039dfe5dc7c8fae5911a3110a597a535171f7fe8a87e8085145521dbd284579e97fdbddbadffdf378e7fc1cbaa13b1e03826996247999d196e49588a81cad57ed54f0aa2482f31608b57a8396d9efe2be89bb7d6b6862e0499a2553565c03fb52a9528e3a9d83773be53ccd2829996c473c7f8c777656a714fc8a464a765e5a76c04576de363dce784414e3c578bd82022a49c586e6846550c213330e3fbd946e3392b75300ef58444914f1aa50ba2c90887891b0b412b52a1adda3bacc673f68e54dbd49604c16eb79f0614b724dde7e348834361b41659529e3f3723133b625785d1249e5d638ffea2d3d034282272ca31b166f8db1716cb8f313884a05d56d8d773a32f5677e609850494ca562455d4740c28cea1a1e46e5bf5e902610056e4d72e3e03e3107781826a11325836e2f4c300dc341e8f44837c4d1d0a6761c52023ca5d56b162978d18b71889d38ee99b1092c920cb06d45494208e95bc9d0b21c3bb4703f46fb23742b98a2274c965cb2665ee87ce907de2658aee71337f0ea3612023339698ad34d3caf534193007aa3afbdce320e4e7af8fe3cf096ee24f0cfbc66df539a92e86e75031b4f482629a08920395554cc780c4343a78b951ff88bb93b0546bdc4d30342a2d1effb27427057d65356f5577bf5eddaff00382359552376cd0f32d17e7ff46f85c09f79abc09d9dbead62610bb7b0d5327b81698dcceec8b4db18e30b10ff034438fc4617fd587bcb5fa8092d6942052da2ffdf0580ebc47fdfefe13101169e13d8c0612a065718496d1209da5c23cbebde1bb66d0de124500d16ea55ce769cc3d8b58656a4392dd44347cd63d253ac53957c0441128e68eecfbf40f62fe284085fcc040000",
    ],
    [
      "ETag",
      "bZprphIJvwAKIWdv7X9AbA==",
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
      "Thu, 02 Sep 2021 19:20:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1630610362910"
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
      "4f",
      "c2",
      "30",
      "10",
      "c7bfcbf9bac50d84c0121ec42c8a81a953e28321a4eb6e63d0ed66db4916c277f73a7d692ffffbf5ee975ee0543539449055e57787babf29d1beb92245d3296bf86aa931081ea015a5236fe7593d9269f29c9db2f1cb66d3d487cff362c1849107ac054417282a54b981e8eb028da8919fedf77a98c898ed5b97ac928ff8314e39a8297741b25dafef97eb18aebbab0747ca522c506323d18d6c351d51da95b335a26e15fa863a2dd1c0000f8d5253d70a4de473e24f667e381d07d330184f47f33060509114b6a286d9ed3bf01a4b56a894ce2c0b21037a28d9bb18ce1f8e274e68f78f2e7b8be65513ef35e856decd823f810772529665adeed00329f83b9e2a0b512194c1eb2f663f7bdb6c010000",
    ],
    [
      "ETag",
      "b/9bm2cRNJbkb3OMMnmhWw==",
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
      "Thu, 02 Sep 2021 19:20:30 GMT",
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
      "5d",
      "6e",
      "82300000e0bbf4598c223fedde46d81004a132017969b0166d30b4521ca2d9dd67768df9dde17b808a52a614e945c35af006c64a47533a5d49e8b8c311072b1c94bb3556836691a070fb0ed51f69bdb9132168218991527f3b68416c8fc1fb2c11f35489c65b2e053564e95b2ef7cf2d85b0a84e351689a6bbe131438db2b4b8abcf65909979eb9af137c7b3ec165bb957e677785cabab890d1d364846668434ee5d9cc5363c7061933524eeccde5cf6a19365fae7f9209383cc65eb35fb04db277c4dbba11db542441b1ada7a03cbdee0955ff8d1d76eee2fa72f2fff1798007693bc638af0e7f68589d004fcd527fd28d9f3bfc3aa8e75e0e717570ac50019040000",
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
      "Thu, 02 Sep 2021 19:20:30 GMT",
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
      jobId: "grouparoo-job-59-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda04681e2491a2354be98a14c84648aa6d9a903117ea96608a4dabaaca7fdfc5345dab4aed276cdf73ee39f7c113b9e5654a6624e1f95d03f5e3971b919013028ae6f85aae7e7bbbdcfeb65b3ea8c6391d8cd72bcbcfe77344f09625e9be2aa02745533390b3eda69fd7a2a9682d440f13f546d39e3d1e5863db1a8c4fa7b6853c0945b6e2e52db2af95aae4cc348fdafd5c88bc005a71d96762fff26ede9f9a552d6e802969be953451459a1f8b7e2d04a38a8b72bedda08146421dc39ef2022dfc67a6c9d9dbd47d4ef7fd1cc1f79c01654c34a56a6d610a26ca8ce74dadb392d913d1365f1dc8c65db9cbc860a268f6655cd23d9c18295534568f151817e1da37bce0621dfa8bc85b07f16679e9fa8bfe72bddafac1c6b8ba7443d750342940738db971a66f015e503f05a978a9d5a3f6b9557e6e90f77e2c2d01a52574c1d8b1c6d49e58d3244b1c964d06a324b32049268933a283c462d3210cd30428f2b4a866d152943600d009b562364a9d7848c1899166c7498691c4b2a64e4ac9e1843cd45cc139979590bceb10b90abdc88da3701b2c1791ab4bc86853a8f3ce585bc06b8f0a0b44d007351dda2817a8d4b6db0b22375c2c236fe776135e414ed9e3e60e679cd14202a2698dcd5350fb22c5869160e1bbe708d613fb710c4a32fbf344da9eb72e5eb5fc851ee1005bbb4a7fc9260abde0bbb67344ec68d168c87d7720155abec6dad0f5e12f227149bb2ce4e7d60d7f91ee29840c6a28d9e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c45580ddd0e715dee337b38b046ce946870addec59cd1f4d8b536479b11f650aae78abac5c7423bb146be803088e30f74b70eff0006b516f478040000",
    ],
    [
      "ETag",
      "nLZIVg1BVCwtu7236OL0Mg==",
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
      "Thu, 02 Sep 2021 19:20:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1630610362910"
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
      "0002ff8d92d14e83401045ff657ca509b4162d491f5aad4a426b4b51931ad3ac3050eac2e2eea2a94dffdd59d46ad4445f606638b3dc7b610b0f79998007f779f658a3dc1c64a867a60851d55c2bba55a2540816a06619918bf6c3f569e7e6c5594c66bcea86ebb3936035ebf78950f10a0b06de16d21c79a2c0bbdd42c90aa4b558f0ba28974d6781de5466388f427f724e7d2112d34fae8260300c46b0b3f68b09d36cd9f0ff58bbdb59b016f721a628b18cd168a9a45863ac7d6353b1a2e2d852a296312a68e0e64126455d3129448b26ad6eafe5b81ddb75ec8edbee3936815cc44ce7a224f66a4efa400bcd78289ec925b804c8a624c369737da2719e34464ce94f22f7b0d1f715206969ce71f937487a578c3ec307f61ec1778e15a22ef59e3a0b2e07bf1d47997e1e753a88463f08a529a93d12f9e3d13c1a8ca786bb7bf73edc685453292848852643c73e3cee1eb9f65bac27c2444deff1b4acd18298d1df71916bf052c615ee5e0163e894fe7b020000",
    ],
    [
      "ETag",
      "Z2kVD3Wz1ZNQlp5RjFCLhQ==",
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
      "Thu, 02 Sep 2021 19:20:31 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` != ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536d4fdb3010fe2b99f76593689b90f455aa580581452a296b53109aa6d6712ec190c4c176e82ad4ffbe4b4279111a7c6a7af7bcddd97e24773c8fc888843cb92f416ebfde8a901c10d034c1ea60b3dd14379bb3702aef027f51fadedf6bb1198f11c12b96a25991424b89523250a3e5a29d485116540ad142a156cf6c593ddbec59a6dd3b1c5a26f214a4f194e777c8bed1ba50a34e67efdd4e844852a005576d26b2e77ae7e1b05348710b4cabce5bcb0ebaa8cec7a647a9605473918f970b0c502a902bc8284f31c20b330a7fbc956e739ab513043f7006943151e6ba8a85124ce4314f4a59ab92d123a963befa200b77ea1e07c6f16ce907dfd634abc8ebef0655c66a254195a9364ee7b373635da0d70d55a0d6c6d54f77ee1a589222e629ac78b436c6c69131f14fb0faa4617ca94a53efdc0b0c0ba344a034cfeb20010d53a8423cedca7b7f4215816ab46b9aabbed9a3d6c01c8671d867f1c0ee86b109613808fb5d6a87261b3ae0442150e4e94abd66d15ce434a6d1c004e80d2c6a85b1dd8d23c7b1cdd876fa601fb218a869851100d91d908de41a4eb82a84e2cdc2c8d5dc0bdc55305ffac793c0adc788292ee5a409570df13aa7c62111f4c15cbbaacb053a55dbf7fcc09d4f8e03efd26d0e7c0a0965dbc53d1e794c530588a69266a0419e8b0897462e660b2ff066fe648a8cfa142ff6084546bf1f5f08c1b6a8b7acebdfcaabe7d4fe7bc0254dcb1af1d07c108bec7607ff57389dce269f6bb4bb88d8fd4110def14681fc5abaf36bd294e61083849c7d7e03105c373e7daafb7783587c3968a334fec7fbc65465c22434f78e6775c286edd896d31d901a2cf5bb5e7768ee175c69548a9041ae9f266ade4db5afba55aa671036f1baf89e7f86dd7f69389dffb7040000",
    ],
    [
      "ETag",
      "8wywphwGbLrkTNSuNIxYow==",
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
      "Thu, 02 Sep 2021 19:20:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90dd4ec3300c46dfc5dcaea23fa8129576b1a20295a60165d32ed034659ddb754be392a44037eddd710a3789f5f9c43eca054e8dda4302bba6feec510f3735da375714687a690d5f1d29833001b4a266f2fc72bb5eaac34f98a9b03ea5797a7e1ce46c3a65c294076c052417a81a947b03c9c7059468919f6db77a9cc8981d3a97e48b65f694151cb4b477c162359fcfd27906d7cd750247da1558a14655a21bd9693a626973676b44db49f40cf5ba4403233c366a4d7d273491c78917fb5e10477e1cf8511cde073e83924a611b52ccaede81d758b24216f4cdb21030a0c792bdabf1fce2f8ce096dfed174b0685e35f15e836e6514fa7f020fe4a42ccb5adde3044ac1dff1dc58482a210d5e7f01116b9ec46c010000",
    ],
    [
      "ETag",
      "zO/WTnhx2En2gkBIBzFylA==",
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
      "Thu, 02 Sep 2021 19:20:32 GMT",
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
      "edd3597282300000d0bbe45b1caa20d03f908ab2141137f8615802092110968ad8e9ddebf41af5dde17d83384d61df474343600ddec1142f94793ab798ace963b1d7e5818c6fd41405647987765d1a19833e96376bb1779bd88ccee796dfd637c26463fd5831641062b00f4e0a1f01cb4a51b85e2ccf461da3bb45c9aead760951e57927e40b0ee56f546dd2723599a88a0a252b75e708735ed85fbeb8e524ee023170383470767d4f8acfc23c1d741787d22a294744530913dc86c7c6d7ebd1da5253c54ddba8a82b92208d6c77585a23c5a4ca6337a0ce7143682e137bfef2f27f81198077863bd847f8b97d292aca0cfcd58f8689c1e77f0dc61decc0cf2f0c05a6a419040000",
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
      "Thu, 02 Sep 2021 19:20:32 GMT",
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
      jobId: "grouparoo-job-61-1630610362910",
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
      "00000002ff85536b4fdb3014fd2b91f711da264ddf5235aa1246b5361d490adaa629b2dd9b6048e3103b2086fadf77e3500642824fb17dcfb9e7dc479ec8adc8b764429848ef2a281fbfdc48468e09689ae26ba26f7ecd697574e9fc3dcf68d73ffa4e2fec87e91411a26629ba2b32682959951cd46413b6d35256052da56c61a2d6c0693903d71e38b63be88e1d1b790ab26429f25b645f6b5da849a773d06ea752a619d042a83697bb97f7ce7db75394f206b8569db7921d54519d8f45bf6692532d643edd8468a05250c6b0a322430bff995b76f236755bd05d3b45f0bde040399755ae6b5b9882cb3c1169559aac64f2448ccd5707127a4b6f1e595c66d52e8f73ba83636b4b358df56301d659b05e590bff6c1dac66d162edc7e1fcdc5bcddaf3f572b3f243ebeadc0b3c4b539681e15a53ebc4dc7cbca0fe169416b9518feae75af9b9418bf763a90928ada009c6437b409d913d66091bf264e4f6596203632336ec5397d97cdc83de9601459e11352c9acb7c004e7f84913881c48d7be3218b69d775e3e1c86136eb8edd5e9f91fd317928858653a10aa944d32172152c222f8e828d3f9f459e2921a155a64f1b637501af3d6a2c10411fd4b4afa342a252ddee851f79c16c1e2d2ebd66c24b48297f0cef70c609cd14209a96d83c0de54a6eb161c49fadbc53049b89fd38041599fc7e2275cf6b17af5afe428f7080b55d6dbe248c8285ffcdd839202e695619c87d7320055abec6dad0f5fe0f2271499b2ce462e3053f49f314400225e4fcf36922d8043efdd70e8b8f585c7d94511aefb83b5cd522bc8466878429f799dd73bb98801870a9dfc5fadddea16b758e3a23ec20d7cf15358b8f853662957a016110c7ef9b6eedff01f5dd12b678040000",
    ],
    [
      "ETag",
      "ftjZCau+V1zHla2N+KaQ0w==",
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
      "Thu, 02 Sep 2021 19:20:32 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1630610362910"
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
      "000002ff8d925f53825010c5bfcbf68a339086c98c0f58663468a5f8d438ce1516c5804bf78fe6387ef7f6925953cdd40bec2ebfbd9c73600fcf599980078b6cf9a251ecce96a81e4d3146a97325e956f1522258808a2d890c83b56edaabfeabdfd1f67ad0dea6e9dd66dbed1221e315160cbc3da419e68904ef690f252b90d6629eeba29cd79d056a5799e1241a07a301f5054f4c3f9a86a1df0bfb70b04e8b09536c5ef3ff589b1d2c58f3c518531458c668b45482af315681b1295951e5d8905c8b1825d470fd6029b8ae98e0bc419386eb341cb769bb8edd74cf3b8e4d60ce63a6325e123b9d903e505cb17cccb7e4125c02445d92e1b4be6e689c25b5115306a3c86dd5fabe02242dcd729cff0d92de15a3cff0811d23f8ceb182eb529da89bf0deffed38caf4f3a86b3feaff20a4a2a44e48140cfb93c81f3e186e76f4dedb29940f825390124d868eddbabc68bbf67bac57dc444deff194d06841cce8efb8cd147829cb251ede00e8e4867b7b020000",
    ],
    [
      "ETag",
      "LIju30hExA9u0jG7wffJvw==",
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
      "Thu, 02 Sep 2021 19:20:33 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1630610362910",
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
      "c5",
      "53",
      "5d",
      "4f",
      "db",
      "30",
      "14",
      "fd2b962704486d433f8844a58a7510b668690b69ca8426d4b8c96d3024716a3b4808f1df77ed501862620f7bd853ed7bcfb9e7e4f8f691def132a543bae2d9a606f9f0e956ac688b82661956cb0b75b6c9bf4e42d8845e2d5d7f3517c978344204372cc58a2a87b612b54c400d17f34e26455d3129441b07b5dd5ebbebf60fdcee41dfed1d750f90a7205f07bcbc43f68dd6951a3ace56bb930991e5c02aae3a89285eeace7dcfa9a4b885442be7ada4832acaf958f4381709d35c94a3c51c0dd40ae4120ac673b4f0ca4c579fdf8eee7056743204dff304589288bad4c6168e4844b9e6592ded543a7ca4d6e66f073af702ef242227b3c534da8b5961c8f13e618a2c9712549d6b7216ce2624ae50eb86295031f9f1cd0b3d822529d63c87254f633222c7643c3d252498fdf0c2bd186bfb24f0bf7b580ffc891f912efa4961cd70e429d338491b1f6973f4cd2369501a41cf09faefdf8d3e992e17926be3dd9f465e383e89fc4baf892b808c250ff30d06b666b9024433c90ad020272205a49ccfe67ee4cfa6e300193683f32d42d1e1cfc75742f4508131a8edafd17207567f0bb864796d11f7cd8176e9d353eb9f26ec740f7770c83582703f1a3ebd5878e1156d4a21ac41429958d6073959b06dfc75cdb73b8758dc3a94511aef4af344199144826d47bcb0dfd8b007fdfe61ef885ab0d4ef7b03f3d850a67fec3c6bd4763e4829646817cd5c514d592fbcc450f0afdba20528c532336651e2972860ab1c887d3bf212258963c24b62a226717475ee2d6ddc718b7c612976b43b2036e52131216fcfbbe6b26b1c591fcd0afc270fd74d2c46e47436f5700f7e01873d8e72f4040000",
    ],
    [
      "ETag",
      "nQsFqlGMReqREur6IbSocA==",
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
      "Thu, 02 Sep 2021 19:20:33 GMT",
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
      "0000000002ffedd34b7282300000d0bb64ed38444c95ee2a51404150d42a1b86a491df68431224e2f4ee757a8dfaeef01e20a3944999aaef9a5dc13bb867236b48872b3e9de1aea83759d0ab5dc1d7f6474b5cad24ab5ba4bed8f1965f05a71256dda18dafc7268abb3dca75679068af2759618e658ef1e2b236fab959ca1ddac9b796c37cd1848d17d8c5f27c42c92a82c45da5749fe12549aa8b8ebce5c9405eaff0d9f14d93ba6662f9f6315d5f36e330a06284a65b48629f046daf4a231cd91bd2962e3f8474ee4c31b4f4f6007d27cc9b1a6b4f199f5d25181173ff165790457c327c79f9bfc00030cd4bc1645a3eb79bc8b206e0af7eaaee9c3dffcf582698003fbf929f7e3519040000",
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
      "Thu, 02 Sep 2021 19:20:33 GMT",
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
      jobId: "grouparoo-job-63-1630610362910",
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
      "9b3014fd2bc87b6d1202843491a2354ae99a29211b9056d33421632ed42dc1149b545d95ffbe8b69ba7693da276cdf73ee39f7832772c7cb944c49c2f3fb06eac74fb72221270414cdf1f5623592f2620f6b51febe0de14e8cafbe5e3fcc6688e02d4bd25d55404f8aa66620a7dbb09fd7a2a9682d440f13f55cbb37746dd31d9ab66b4d8626f22414d98a9777c8be51aa92d3c1e0a8ddcf85c80ba015977d26762fef83bd35a86a710b4cc9c15bc901aac8c1fba29f0bc1a8e2a29c6d4334d048a863d8515ea085bfcc34397b9bbacfe9ae9f2378cf1950c64453aad616a660a2cc78ded43a2b993e116df3d58184deca5b44061345b32be392eee0c448a9a2b17aacc0b808366b63e95f6c82f53c5a6efc385c5c7aeb797fb1596dd77e685c5f7a8167289a14a0b9c6cc38d3371f2fa89f8254bcd4ea51fbdc2a3f3768f9ff585a024a4be882f1d874e9f0d49c24593266d9a93d4a321392e434198fa89d986ce28093264091a745358b96a21c8d2c27492c2b4ea963c78e3576e3493a1cc76e32b4d2cc319985133e9c90879a2b38e7b21292771d22d7c132f2e228d8fa8b79e4e91232da14eabc33d616f0daa3c20211f44e4d8736ca052ab5ed5efa9117cc17d1f2caeb26bc829cb2c7f01e679cd14202a2698dcd5350af458a0d23fe7ced9d23584fecdb3128c9f4e713697bdeba78d5f2177a84036ced2afd2561142cfd2fdace1171458b4643f6dd815468f9066b43d7875f88c425edb290ef5b2ff841baa70032a8a1641f4f13c13af0e1bf765c7cc4e2eaa38c5478c7dd61b2156135743bc475b9cf6cc7b627b64b34b856ffc61cd3358f5d6b73b4196107a57aaea85b7c2cb4136be40b0883387e5f77ebf0072ac6da2478040000",
    ],
    [
      "ETag",
      "FL5ssFveMonzjSeko7VJWw==",
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
      "Thu, 02 Sep 2021 19:20:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1630610362910"
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
      "92",
      "61",
      "4f",
      "82",
      "50",
      "14",
      "86",
      "ff",
      "cb",
      "e963b0308d8acd0f58586e608ab8b535e7ae70500cb874efc5e69cffbd73c9ac555b7d81730ecfb9bcef0b3b78ceca041c5864cb971ac5f664896aac8b10659d2b49b78a9712c100546c49e4e67115f403f7d48bfa329e86913d4dd8d9b8db2542c62b2c18383b4833cc1309ced30e4a5620adc53caf8b72de7406a86da58793281c0cefa82f78a2fbe1d4f7dd9eefc1de382e264cb179c3ff636db63760cd1721a628b08c516ba9045f63ac06daa6644595a329792d6294d0c0cd83a5e075c504e7264d4cbb6db6ecb665b7acb67d7eddb208cc79cc54c64b62a713d2078a2b9687fc955c824d80684a329c36d70d8db3a431a2cbc130b23b8dbeaf00494bb31ce77f83a477c5e8337c608708be73ace075a98e54df7f707f3b8e32fd3cead68dbc1f845494d4118906813789dc60a4b9d9c17b6fab508e04a72025ea0c5b56e7eae2d2b6de63bde13a6a7a8fa3448d06c48cfe8efb4c8193b25ce2fe0dae73ef727b020000",
    ],
    [
      "ETag",
      "vXhMFMA+ETFscURT6Uda/Q==",
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
      "Thu, 02 Sep 2021 19:20:34 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1630610362910",
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
      "7d",
      "4f",
      "9b",
      "40",
      "18",
      "ff",
      "2a",
      "e4",
      "16",
      "1397d8969796d226c6352d53b64a9552cdb22ced010f780a1c7287ce987ef73d80f565cbf42f8e7b7e2fcfdb3d921b9647644c0296dc56503e7cbae6013920206982b7dab76377aa5a93d96f7e36bb3fcffd13d383c9e1212258cd12342b52e8085e952188f16ad94d4a5e15b4e4bc83421db3dfd14c433535d530f591a6224f401acf597e83ec2b290b31eef576dedd84f324055a30d10d79f67cdfbbd37b45c9af2194a2f7d6b2872ea2f7bee951ca432a19cf0f574b4ca01250ae21a32cc5145e9851f0e5ad7497d1ac9b20f88e8540c39057b9acd3428990e7314baab25125e347d2a4f9ea4096f6dc9efaca74b172fdfd0dcd6af2e6b34285b25e9720aa542a5fbdc5a9b229d0eb8a0a101be5f2c4f66c05af4a1eb314d62cda2887ca913271678a325f5cdadefe331cb5e6ce771ba373e7d4f1150db38a4048963739f93448a1cee7a96dcebfc3aa0954a2541b5c0f55936a963a0ae26018c6963108621582c00a86036a046a38ea433f0a80224fd6ea0d8be63c37740a6a6c587d88cc38d2cc400f757da4eb100f221af40d55b5ac911a0dc9f680dc974cc28c89820bd6f68e5c7a8e6faf7d6fe54e27bedd941153eccfac4dae2ee2759e128b44d03b756deb28e3e8540fc2717ddb9b4c7de7c26e673f8784860fcb5b9c7e4c530188a625cd404279ca236c1a395b2c1ddf59b89339329a819eed10828c7f3ebe10fc87a2e9b26cbeb597d96ffc77800b9a560de2ae3d108d6cb707ff5758fa9ee31ebf2fb1478b620f657e210ad7bd5520e72bdbfb41da",
      "2b0f6228210f3fde000437810f5fedee0921161f11da0889ffb86fa1a84dc212dabd63595365cbee1b7dcb1891065ccabf6303551dee1a5c6bd48a90412e9f2a6a9f50ddaf265489671006715ddca653db3f10bcede8c2040000",
    ],
    [
      "ETag",
      "1JGNC08ADxoPDwQnTH6ReA==",
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
      "Thu, 02 Sep 2021 19:20:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1630610362910"
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
      "6b",
      "c2",
      "40",
      "0c",
      "86",
      "ff",
      "4b",
      "f6",
      "d58255e9b6821f54ca74746eab130643e4ac6957d736b7bbd4514afffb72ddbedc8537cf250fd7c157519f218453917f3768da9b1cf9d51509daa6642b97a6da228c0059e542365194d52bf3fc7ee5277f1d2c63bd8b1e17f3b91036fdc44a41d841566079b6107e7450ab0ae5d9f16886898271ab5db2d9be450f5122414567176cf771bc58c611f4877e04173a2598a1c13a4537521bba60ca1b676b55a54bf42c3526450b033c3472438d5686c893c40b669e1f4cc7813f9e06937b7f2c6049a9e2826a61f73b90354cacca847e44167c01cc508a77369c5789274ee8f08f2e5b46fb6248f65a742b6777b77f022b72522cb26c1a1c41aae43bd6054398a9d262ff0b72a3b7346c010000",
    ],
    [
      "ETag",
      "uEEfnCrOXvtM1H6BLpSEJA==",
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
      "Thu, 02 Sep 2021 19:20:35 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffedd3417282300000c0bfe42c8e1041e8ad928818142b60f194010c889254125a854eff5ea7dfa8fb87fd06595130a568f7716102bc803e339c713126577b8e6ea7a0efddd7bd824e9bf765a23351b22190bc589bfee7b031b528bf50d87dd14a5a90f3c83255a92718d9ebb42dbaf858857806d1cc79f3e29da64fc2ee4c52ec35c68a1fb71bd9887623e9fe3ca446b23c04f28e2ded7d98aee26027507922b646b0ac6ace270df4449e57e5225ac6248b52942b7ac9b60d6bd6a18fe112df0fd01da230f2d4d4df9e457d30ec95cffb142163ba20faa99d91d6ed2c918c9f9efe2f3002ec7ead2553b47e6c87a6e38cc05f7ddaf557f6f83f67996412fcfc02f17e5c1319040000",
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
      "Thu, 02 Sep 2021 19:20:35 GMT",
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
      jobId: "grouparoo-job-65-1630610362910",
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
      "6b",
      "4f",
      "a3",
      "40",
      "14",
      "fd2b64f6ab6da10f2c4d9ab5a9a84d5aba52aad96c366466b8e054ca2033688ce97fdfcb605d8d897e6266ee39f79cfbe085dc8b222113c244f65043f5fc6327193921a06986af351f16fd7a7b9d3dedd4d2db5ddeea5101d9748a08d1b014dd97397494ac2b0e6ab2dd74b34ad625ada4ec60a28e3bea38eec0761d7be0f63dc7469e823c5d8ae21ed9775a976ad2eb1db5bb9994590eb414aacbe5feedbdf7d8ef9595dc01d7aaf751b2872aaaf7b5e8cf5c72aa852ca6db0d1aa8155431eca9c8d1c27f66c2ce3ea6ee0abaef66087e141c28e7b22e74630b537059a422ab2b93954c5e88b1f9ee4036fed29f47169779bd2fe282eee1c44aa8a6b17e2ec1ba08d72b6b115cacc3d52c5aac837833bff257b3ee7cbddcae828d757be587bea529cbc170ada975666e015e503f01a54561d4a3e6b9517e6dd0e2f3581a024a2b6883f1a9ed52676c7b2c65a73c1d0f462cb581b1313b1dd101b3b9378461c28022cf881a162d64e1b03ef54e872c06ee79f1d04992d87393419c0cdc31655e3a74c6941c4ec85325349c0b554a25da0e91db7011f971146e83f92cf24d0929ad737dde1a6b0a78ef51638108faa2a643131512959a762f82c80f67f36871e3b7135e4246f9f3e601679cd25c01a26985cdd350ad64820d23c16ce59f23d84cecd731a8c8e4cf0b697adeb878d7f2377a84036cec6af3259b285c0497c6ce117143f3da401edb0329d1f21dd686ae0f7f11894bda6621d75b3ffc4ddaa71052a8a0e0df4f13c126f0edbf765c7cc4e2eaa38cd278c7dde1aa11e115b43b244cb9afece1c0b547e64fd5b4d29f628eeb1cbbd6e46832c21e0afd5a51bbf858682b56ab371006",
      "71fc81e9d6e11f39a2e5ab78040000",
    ],
    [
      "ETag",
      "uc4n2uUQgwjsL9jGWt5neg==",
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
      "Thu, 02 Sep 2021 19:20:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1630610362910"
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
      "92",
      "51",
      "53",
      "82",
      "40",
      "14",
      "85",
      "ff",
      "cb",
      "ed15474cc562c6074c2b1a34457ca9719c152e8a024bbb4b8d39fef7ee925953cdd40b7beff2dddd730eec619be411d8b04c564f258addd90ad544173eca3255929682e712c100546c4564727197584dafde577ef8da7ec0597db9ed4cba5d2264b8c68c81bd8738c13492603fee216719d258c8d332cb17556780da157a731af8eee886fa8c47ba1fcd3ccfe979033818a7c18829b6a8f87f8ccd0f066cf8d2c71805e6216a2d85e01b0c95ab6d4a961529d6242f4588122ab87ab112bc2c98e0bc463b35ab5d6b584dd36a984debfcb2611298f290a984e7c4cea6a40f14572cf5f90bb9048b0051956438ae9ecf3aaaa832a24b771458ad4adf5780a4c5498a8bbf41d2bb66f4193eb06304df3996f1325727eadabb777e3b8e32fd3caaef04831f845494d40909dce1601a38c3b1e6e647efbd9d4239169c8294a8336c98ad8b76c732df63bde23a6abac756a2440342467fc76da2c08e592af1f006ec603f657b020000",
    ],
    [
      "ETag",
      "i8Ji63L/DtRcz5ZeU/bk7Q==",
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
      "Thu, 02 Sep 2021 19:20:37 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553796f9b3014ff2ac853a54e6a128e941c52d44529e9d048d211d2eed0941878502f80293699ba2adf7d0f687aa85afb17c6ef77bccbf764cbb2900c89cfe2db128abb0fbfb94f4e08481ae32dfb3bb5663fb6d3723bf52e74cfda65d36f5e3c1a2182552c41d33c8196e065118018ae96edb8e0654e0bce5b28d432cd96661aaaa9a986a90f3415790292c861d916d93752e662d8e91cbcdb31e771023467a21df0f4f1beb3d33b79c17f432045e7a565075d44e76dd3b3840754329e8d564b4ca01450ac21a52cc1149e98a1ffe9a5749bd1b41d2378c702a041c0cb4c5669a144c0b388c56551ab92e13da9d37c76204bcbb1269e3259ace6def186a61579f351a14259af0b10652295a9bb98299b1cbd6ea800b151ae3f5baea5e055c12396c09a851b65a49c29e3f9b9a2388b6bcb3d7e84a396637fb130ead833db5334cc2a04215956e7e4513f812a9f87b6d9af875511a844a926b8eea926d5faeac08ffc5e10f58d533f52c1f7fb7eef941abe1a0cbad00d7da0c893957acda219cf0c9d821a19fd2e8466146aa6af07ba3ed075884e43ea770d55edf7076ad823fb13f2a76012ce99c8b9604defc8b56b7bd6da7357f3c9d8b3ea32228afd396f92ab8a789ea7c42211f4465dfb2aca383a5583b0e79ee58e279e7d6535b37720a6c1ddf216a71fd14400a26941539050cc78884d23978ba5edd98bf9d841463dd0cb034290e1cffb27827797d75d96f5b7f232bbb5ff01704593b246ec9a03d1c87e7ff27f85a5e7daf38bb7258e689e1fa1cc2f44e1ba370ae4ebca72bf93e6ca85080ac882f73700c175e0dd577b784288c547843642e23fee5b202a93a08066ef585a57d9b0bb464fd7faa40617f255cce80d0e0dae342a454821930f15354fa8ea571d2ac5230883b82ef3ba53fb7fdb66c606c2040000",
    ],
    [
      "ETag",
      "izFEMZkFukFTG2TEvnFXTg==",
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
      "Thu, 02 Sep 2021 19:20:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1630610362910"
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
      "00000002ff2d90d16e82401045ff65fa2a29684353121fa421d6488cd21adb34c6ac30501418ba3bb431867fef2cf66567f6eed9b937738573d96410c0b12cbe3bd497bb0279639b044d57b191d25263104680ac0a21cf67d6eefa61be9b2d67ef8f4bff7ea7c28fcd742a8449bfb056105c212fb1ca0c049f5768548df2ed70d0c344c1f8d25a65b17a8be65122424d991556db389e857104fdbe1fc1898e09e6a8b149d18e6c359d30e5854d6b54dd56e818ea748a06067878283475add2448e288eef3b9e3f717dcf9df8e327cf15b0a25471498db0db57101b26565542bf12163c01f4d04aee7c387f441edb40fb7f34bc309ab526f135682ddd9bfd33d9482c515977388254c9325e4abeddfb3fcd7d044369010000",
    ],
    [
      "ETag",
      "kktr0P4GWAKAX7K6/WaBYQ==",
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
      "Thu, 02 Sep 2021 19:20:37 GMT",
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
      "cb",
      "72",
      "82301840e177c95a1db949e84ec005c41150b0c286497f52602c34dcc4c4e9bbd7e96bd46f71dee03c100560c3908fdf57d6a23724a86aad604538b6ddb9f2f9c58c4502e768d276d1f84eb4584dbc2c0d985aeb400bc3d0bc861c9ffdd84e2a189ed917d2314e8449585f409b6f9f6928bc913225dd87496b95a7842d2771e30929a4dd843a04797456fa20c34eacb6c76abccfee5dbd947c17cb2f30019c7d1b74a20029782d4c1c55b6c05b28973d91f820375e47bbb221d3926f63bdd8446ed35d75bf30724777f91a936b747632c5a77e77205386572f2fff175a2076e775cf86bc7edeae1996b5407febe7a3e0ecf9bfcd68cf7af4f30ba83e829f19040000",
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
      "Thu, 02 Sep 2021 19:20:37 GMT",
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
      jobId: "grouparoo-job-67-1630610362910",
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
      "ff85536b6f9b3014fd2bc8fbda2450c8a391a2354bc91a2990959056db3421632ed42d608a4da7aaca7fdfc5345daa4aed276cdf73ee39f7c133b9e76542a624e6d94303f5d3973b119313028a66f8ba985c95cba5b9045b7cf30a7979efffba4eb3d90c11bc65495a5439f4a4686a0672badbf6b35a3415ad85e861a2de68dcb346b639b24c7b747a6699c89390a76b5ede23fb56a94a4e078383763f1322cb81565cf699285edf078fa783aa1677c0941cbc951ca08a1c7c2cfa35178c2a2ecad96e8b061a09750405e5395af8cf4ce2f3b7a9fb9c16fd0cc18f9c01654c34a56a6d610a26ca94674dadb392e933d1368f0e64ebaedd4568309137451995b4801323a18a46eaa90263196c3c63e52f3781370f571b3fda2e2e5d6fde5f6cd63bcfdf1a37976ee01a8ac63968ae3133cef5cdc70bea2720152fb57ad83eb7ca2f0d5abd1f4b4b4069095d301a9b236a4dccb3388dc72c9dd8c33835218e27f17848edd864670e38490c14795a54b368294a7bcc28a40944c38963454e9a58d124612c722866b14ccb64c0c8fe84fcadb9820b2e2b2179d7217213ac42370a839dbf9887ae2e21a54dae2e3a636d01c71e151688a00f6adab7512e50a96df7ca0fdd60be0857d76e37e13564943d6d1f70c629cd25209ad6d83c05b527126c18f1e79e7b81603db11f87a024d3dfcfa4ed79ebe2a8e5aff41007d8da55fa4bb661b0f2bf6b3b07c435cd1b0d79ec0ea442cbb7581bbadeff41242e6997855ceddce027e99e0248a186927d3e4d04ebc0a7ffda61f1118bab8f3252e11d7787c95684d5d0ed10d7e5beb01d7b629e3a44836bf52e668d8687aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd7dddaff03d854285978040000",
    ],
    [
      "ETag",
      "C8QnFF0Fe3oBMmsHkNZVfg==",
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
      "Thu, 02 Sep 2021 19:20:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1630610362910"
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
      "92",
      "dd",
      "6e",
      "82",
      "40",
      "10",
      "85",
      "df",
      "65",
      "7a",
      "0b09568b2d8917fed592a0b58a578d312b0c885d58babbb41ae3bb77965adbb44dda1b9819be59ce397080a7ac88c18375963e5728f71729ea0753cc50555c2bba95a2500816a0662991f154c98405fd5d82dc1f857c328847bbb4d32142451bcc1978074832e4b102eff10005cb91d622c1abbc58d59d057a5f9ae13c9cf99311f5b9884d3f590441b7170ce1689d1763a6d9aae6ffb1b63c5ab015eb192628b188d06829a5d862a47d6353b1bce4682b51c90815d470fd2095a22a9914c2a689edb6ed86db74dc86d3742f6f1a0e815c444c67a2207631277da085667c265ec925b804c8ba24c3497d7da17116d7464ce94f42b755ebfb0a90b424e3b8fa1b24bd1b469fe1033b45f09d63b9a80a7da66e83fbee6fc751a69f470dbae1f007a134257546427f3c9c87ddf1d470cb93f7de5ea39a4a41412a3419369cd6f555db75de63ed0b1335bdc7d3b2420b22467fc75da6c14b1857787c03cab58a567b020000",
    ],
    [
      "ETag",
      "dPsrfaLCxfelIGTlNDdGxg==",
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
      "Thu, 02 Sep 2021 19:20:41 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1630610362910",
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
      "d5",
      "53",
      "6d",
      "4fdb3010fe2b56f60524da12a832d6a9621d04c8d6179aa42084506b9c4b302471b01da482f8ef3b3b2d0cb1b1cffb94e4ee79f3f9f2e4dcf132717ace35cfee6b90cb4fb7e2dad97240d30cabc78fec2c6269f2b874f9f46e5a78ecc7d1c9a0df4704372c458b2a879612b564a07ab3a89d495157540ad142a196b7d772bddd6dcfdddef576beb8dbc85390a7435ede21fb46eb4af53a9db5773b1322cb81565cb599285eea9d879d4e25c52d30ad3a6f2d3be8a23a1f9beee78251cd45d99f4518a05620e750509e6384576672fdedad749bd3a29d21f88133a08c89bad426164a3051a63caba555757a4f8e8df9db8b13f943ff20260793d938de58d0c290179b842a329f4b5075aec95138199145855e3754815a90f3133ff40996a448790e739e2c489fec93c1f89090e1e4dc0f37164a6346141a063f7d6c0d835110131723259052543da41ac5b4899234af81b9270d4a236835c4e0fdd539cfa6cb85e4dac40fc6b11f0e0ee2e0cc6f2636848cb265748f334b69ae00d154d20234c891480029a793288883c9783044861dc3e91aa19cdee5d32b215e5660026afb345e5ed7faaf016734af2de2a179715ce7f979ebef0a7130f2a378303a45d8150ae1123408673af3c30ba729859082849259e60793b060dbf8e72eaf170bb1b85a6883d7a3b9d29c2963c224d876cc0b7b8a86ddedba9ee739162cf5bbdee7ee9ef9ffcae48f9d95476df5414a2143bb4de613dd94cdc24b1c1c4fa67617dfa4bc5f950a508a66467e2c484135bbe1654614cf4ad496405221495a97ccd09ad5b3252ab3ba8052133378d5232f836f93a8ae2a213524af2a0868b6368ac3607cbcf975f5f9fd22f623fc1734b9747b7b3b57e650f628cd9efcbfc7b86a2ec7e4399c8c7ddcc65f8c9289fd5f050000",
    ],
    [
      "ETag",
      "GzcVScfdzy1iQkQm6cJFHA==",
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
      "Thu, 02 Sep 2021 19:20:41 GMT",
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
      "ffedd3597282300000d0bbe45b1810b4d03f2975a96264d1167f984802650f24ac4eef5ea7d7a8ef0eef0e501812c6025e65a404af6044735d0cc53dd50cb38f61c924d6eeaa664f2cede252f3c3dc0db7090bdf3e4ce54ef76a7cbcc4787d6d383fb8cad6ccd776beee36b8dec8cb4a581638350eb543b3c9914d4df04b5e72dc9e9cf1e5fc19c5d1e9a67552d3a7438f9964a9454bb65960df2608b3d6ababa42b8f4ee842e416d61ef9c394d3b9557da52e3272dff0b8c6681b07eff179b3d58dd3d0a9022a90a3a750cde4c5248f57d357fad51b23763d223792e0ca129f9efe2f300364a0494358903cb62b0b5d9f81bffa011f2979fc37086a48037e7e0149aa593b19040000",
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
      "Thu, 02 Sep 2021 19:20:41 GMT",
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
      jobId: "grouparoo-job-69-1630610362910",
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
      "4f",
      "a3",
      "4014fd2b64f6716d4ba1b6a549b33615b59b962aa5baee664386e142472983cca0694cfffb5e06eb6a4cf48999b9e7dc73ee07cfe49ee731199188a70f1594bb6f7722224704144df1b5fabe66c5d570f0abfabdd9ec16f29cddda3f9fc66344f09a25e9b6c8a02545553290a3f5aa9d96a22a6829440b13b5fa4eabdbb7cd7ed7b4fb96d3359127214be63cbf47f646a9428e3a9d83763b1522cd80165cb699d8bebe771ead4e518a3b604a76de4b765045763e17fd9109461517f978bd4203958432842de5195af8cf8ca393f7a9db9c6edb29821f3903ca98a87255dbc2144ce4094fab526725a367a26dbe3990953b77a781c144566df330a75b383262aa68a876051867fe7261ccbcb3a5bf9804b3a517aea617ee62d29e2ee7eb85b7326e2e5cdf35148d32d05c636c9ce89b8717d48f412a9e6bf5a07eae955f1a34fb38969a80d2129a603830fbb43b349d2889062c19dac7516242140da3c131b52393393de8c51150e46951cda2b9c86937b62c9bc6e1902571d81bd05e487bc776c8fac3a40be044e058647f449e4aaee094cb4248de7488dcf8b3c00d037fed4d2781ab4b486895a9d3c6585dc05b8f0a0b44d02735edeb2817a854b77be605ae3f9906b36bb799f01c52ca76ab079c7142330988a625364f41b91031368c7893857b8a603db1cb435092d19f6752f7bc76f1a6e5aff4000758db55fa4b56813ff3ceb59d03e29a6695863c360752a0e50dd686aef77f11894bda6421576bd7bf25cd930f099490b3afa789601df8f25f3b2c3e6271f551462abce3ee30598bb0129a1de2badc1776af6799438b6870a93ec4acae73e85a9da3ce085bc8d54b45cde263a18d58255f4118c4f17bba5bfb7fe940d2ea78040000",
    ],
    [
      "ETag",
      "u+UcpQ87XuZhhyMsGcY3Jw==",
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
      "Thu, 02 Sep 2021 19:20:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1630610362910"
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
      "92",
      "dd",
      "4e",
      "83",
      "40",
      "10",
      "85df65bc2c4dc05654925eb45ab5b17fb6e88d699a15064a5d18dc5d344dd3777716b51a35d11b9819be59ce39b085c7ac882180872c7daa506d0e523437b698a1aea4d17c2ba9d0080ea0112993fdf6b821af57b4be7327474963ee4da3ca4b3b1d2674b4c25c40b0852443196b08eeb750881c792d2259e5c5b2ee1c309bd20ee7e16c30bee43ea7d8f6e3dbe1b0db1bf661e7ec176361c4b2e6ffb1b6d839b0a6871926a8b088d06a2915ad3132036b538bbc94d8d454a90835d470fd2055549542113579d2f44f9b9edf727dcf6df987a79ecba0a448988c0a666fe7ac0f0c192167f4c22ec16740d5251b4eeaeb338fb3b83662cbc138f4dbb5beaf004b4b3289cbbf41d6bb12fc193eb0f708be7322a7aa307bea6238e9fe761c67fa79d47937ecff20b4e1a4f6483818f5e7617734b5dce2dd7b6f63504f1571901a6d869edb3e393af6ddb758cfc846cdef098caad08148f0df71951908122135ee5e01f331eebd7b020000",
    ],
    [
      "ETag",
      "E4N+lKhojV0O5f+S1Pcu1g==",
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
      "Thu, 02 Sep 2021 19:20:43 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1630610362910",
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
      "00000002ffd5536d4fdb3010fe2b56f60524fa5ecae854b1ae6410ad4d4b92821042ad492ea9218953db41ab10ff7d67a7852136f6799f92dc3d6f3e5f9eac07964756dfba63c9ba04b1f974cfefac030b144db07abd1eadbac73f0f5bde99ebcf2e8f37f9ea703e1c0c10c1344bd2ac48a12679294290fdb95f4f042f0b2a38afa150eda8596bf53acd5eabd9e9b58f5b4de44948e331cb1f90bd52aa90fd4663e75d4f384f52a00593f590672ff5c663bb51087e0fa1928db7960d74918d8f4d4f521e52c5783e98fb18a09420169051966284576674f7f5ad749dd1ac9e20f8918540c39097b9d2b15022e479cc92521855abff649998bfbd58be3db64701194de76eb0b7a499262ff7099564b11020cb5491efde744296057aada804b92457e7b667132c091eb314162c5a9201392143f79490f1f4caf6f696526146141a3b3f6c6c8d9d89139016468a20a6a87a4a158a291d25aa5e1d7d4f0aa442d07688cefbabb39e759771c1948eefb881ed0d4781736957131b4342c38dbfc699c5349580682a68060ac484478094d9d4770267ea0ec7c8306398ed10d2eadf3cbd12824d013aa0324fedd5eb1aff1de092a6a5413c562f56cb7a7e3ef8bb42e04c6c3f184e6608bb45215c820a615dcc6defdaaa4a1ec420200f0df3834918b069fc7397778b85585c2db4c1eb514c2a164a6d120a30ed8065e61415bbdbedb40fdb96010bf5aed7e91ce9ff2f8ffed8d97a94461f84e0c233dba43fd14d9a2c2cc7c1b1e8c2ece29b94eb6d29032969a2e55d4e32aac215cb13225992a3b600127341e2320f35ad5a3d53a2222933c815d183977df232f83af1cba2e04241f4aa82806a6bfdc073dcb3fd2fdbcf6fd781ede3bfa0c84dabffb97dab0f658e52edc9ff7b8cdbea72749ed3a96be336fe02ae89bf625f050000",
    ],
    [
      "ETag",
      "YqCh49x51RGNSPV9ynh5UA==",
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
      "Thu, 02 Sep 2021 19:20:43 GMT",
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
      "0002ffedd3db6e82300000d07fe9b33355c66d6f800c416a002f697c69b014a20ea9e5da2efbf799fdc63cff70be414e296b5bd2353776071f40e64b7b4ee71b6eb9abf12a8c8acbad8b608c4e78e922a351c9f6f86ed80f871ccf388bbdfa7cfe5235243be9df54ed40a55b6655517142d26a252e5d4c8c15415171835e6f94d93a2fa017d11e6b955eab221d77ab1de59d1f52f39e5e49acb2e9b3c14183220c49a72ff4375d6e1282e483a5da5a1bb5849c849fa59e497dd8aff7223d4829073b5c14ad5f49ccb4884f83f2bc2e580efb184fd8e0652732e7700dc2709cbfbcfc5f6006d8c42f82b5e4f2dcaee9b63d037ff54927397bfe77592e98003fbf29dfc5e819040000",
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
      "Thu, 02 Sep 2021 19:20:43 GMT",
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
      jobId: "grouparoo-job-71-1630610362910",
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
      "9b3014fd2bc8fbb82640c95b8ad628a52b53201d21adb66942b663a85b82293699b22aff7dd7a6e95a556abf00f63de79e731fc923bae7e5064d10e1f943c3eafda73b41d009620ae7701b67dfae76f4677977d30f42ffafed0c1cf9399f4e01c1354be26d55b08e144d4d999cac57ddbc164d856b213a90a833743beec07306aee30d4ec7ae033cc98a6cc1cb7b60df2a55c9896d1fb5bbb91079c170c565978aedf3bdbd3bb5ab5adc31aaa4fd5ad2061569bf2ffaa510142b2ecae97a05061ac9ea946d312fc0c27fe6869cbd4edde578dbcd01bce394614a45532a6d0b525051663c6f6a93154d1e91b1f9e203adfc853f4f2c2a8a665ba625deb2136b83154ed5be62d645bc0cad20ba58c6e12c099651ba9a5ffae1ac3b5f2ed661b4b26e2efdd8b7142605335c6b6a9d99530407d0df30a97869d4137dad959f1a14bc1d8b2680b4646d301d3a03ec8e9c31c9c8906623af4f3287113222c33ef68843c73dd6db10868167440d0b97a21c8f68dfcd364eeab99e93f63c6f9c1232808743f0a9eb8e717f8cd1e104fda9b962e75c5642f2b643e8260e123f4de275349f25be2921c34da1ce5b63ba80971e151408a0776a3ae82817a0a4db1d44891fcfe64970edb7135eb01cd3fdea01669ce1423240e31a9aa7581d8a0d340c45b3d03f07b099d8d53128d1e4d723d23dd72e5eb4fc999ec000b55d65de6895c441f4d5d83922ae71d118c8aefd401558be85dac0f5e137206149db2ce8fbda8f7fa0f62a6619ab59493f9e26804de0c3dfda71f1010bab0f3252c11976874a2d426bd6ee1037e53eb17b3d6fe08e9001d7ea4d6ce478c7aee91c3a23dbb2523d55d42e3e14da8a35f219a4ff4ed65164ba75f8072be306e678040000",
    ],
    [
      "ETag",
      "RfJPvcZnjW5IMEz/060s+g==",
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
      "Thu, 02 Sep 2021 19:20:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1630610362910"
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
      "92",
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78",
      "b424ad60d1261c8aa01011114a3c184296765a5ab7ddbabb5509e1bf3b5b118d9ae8a59d997eb37defb55b784c8b083c58a5c95385727394a0be33c51455c5b5a25b290a8560016a9610a9b357b49b737e7c2defb35eac9bbd9633f03b1d2254b8c69c81b78538451e29f01eb650b01c692d14bcca8b65dd59a037a519ce82e9707c457d2e22d38fe7a391df1df561671d1623a6d9b2e6ffb1b6d8599089d5146394588468b494526418eaa1b1a9585e726c2851c91015d470fd2091a22a9914a2419346db69386ed3761dbbe99e9c3b36815c844ca7a220763e237da085667c2a5ec825b804c8ba24c3717d7da6711ad5464c391c076eabd6f715206971ca71f937487ad78c3ec307b68fe03bc7725115fa405d8e6efddf8ea34c3f8feaf941ff07a13425754082e14d7f16f83713c32df6debb1b8d6a220505a9d064e8d8adb3d3b66bbfc77a214cd4f41e4fcb0a2d0819fd1d8354831733ae70f7064234d2d17b020000",
    ],
    [
      "ETag",
      "tjxe03Ul+KrWjDft3D41HA==",
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
      "Thu, 02 Sep 2021 19:20:44 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1630610362910",
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
      "c5",
      "53",
      "6d4fdb3010fe2b9627c426b54d03a568952ad6953022425bda148426d4b8c935189238d80e1343fcf79d1dca8bd8e0e33ec5f6ddf3e2c7977b7acd8b84f6e892a73715c8bb4f5762491b14344bf174b49a05273b939db34beff0fac741d0fe3df47fa5fd3e767083522c2f33682a51c918546f3e6ba552542593423491a8b9bbd574bbdbedaedbdeee6e7d75db885390ad025e5c23fa52eb52f51c67addd4a854833602557ad58e44fe7ceed96534a7105b156ce6b49075594f3bee85e2662a6b928faf3191aa814c805e48c6768e119992cbfbda66e7196b7526cbee531b0381655a18d2da48845b1e269252d2beddd536bf3c582cebcc01b8664389e8fc2cf11cb0d38fa4298228b850455659a1c4cc7c7242a51eb92295011393bf4a61ec12329563c83054f22d2277b6430da2724189f79d3174c817fe4612df08ffd90b8e829811543da7da6914d1b2f49bdf4cd4369501a9b1e53f4dfbe1d7d30552e24d7c6bf3f0abde96018faa75e1d5900298bef663718da8a650ab09b49968306792c1240c8643cf3437f3c1a0488b0394cd61d8af67ede3f03c2bb128c416dbf46abdbb1faeb86539655b6e3b65e50973e3c34fecd70108c071f726cb8ad9dce06125d601bce49cd414fe6def49cd6475358818422b6b877b2b2cdb6f0e1b8af670f7b71fa504669dc2bcd6365446209b61cf2dcdeb346773a9d5dd73c2a364bfdb6b6bd6b7ed122f96be551a3b2fc20a590533b70668b6aca7ae105c682bf7083e6a0144b0dcdbcc09b2860cb0c887d3ff214268922c20b62e22651783ef1168f91470df29d2524119541d9a87ba44e7abddbacb79bc698b5534fc3ffb572518764b4f6c7230fa7e20f54afb8000a050000",
    ],
    [
      "ETag",
      "NfSLQ5P5WhEHkGFL0zCIwg==",
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
      "Thu, 02 Sep 2021 19:20:44 GMT",
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
      "7282300000d0bb646d1ddb1020dd1150401414a12a1b26628488424a98f2e9f4ee757a8dfaeef0be01cd322665dad625abc03b18e81b9e66534fe8c4ea72395a9b4271648b35c735843ff2804bb83d19e7725c592121e41e1d1d5dd87214c86379c4f738b1952c378eb7da4ac245c2a32e46b9ac5bdbbcf46b985f3e7b13964b27feb82344cdf0dcd8d722d5d0cb5cc5a45217aec1fc995869b2c3bb2ab9251e2d4a5a1e7c58d000d6db6816c684aa4a60b7cb0147f2f49aa39417ca7ce7ca390ccbb188bcbd7e51b5c3e67eb5aa55acafbbaf43a5396306cdfdcd9d3e3dfd5f6002582f78c364ca1fdb21c27802feeaa7ed20d8e33f61b4610df8f905429e62e019040000",
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
      "Thu, 02 Sep 2021 19:20:44 GMT",
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
      jobId: "grouparoo-job-73-1630610362910",
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
      "000002ff85536b6f9b3014fd2bc8fbb8262109793452b44629599812b20269374d1332e642dd02a6d874abaafcf75d4cd3b5aad47ec2f63de79e731f3c925b5ec46446229eded5503d7cba11113921a0688aaf7feff6d578c07facd6dff67cbdf0f368f5595dcce788e00d4bd2bccca023455d3190b3bddf4d2b5197b412a283893a9361a73f1e9ae3be391c0f4efb26f22464c98617b7c8be56aa94b35eefa8dd4d854833a025975d26f2e7f7defda05756e2069892bdd7923d5491bdf745bf648251c54531dffb68a096508590539ea185ffcc383a7b9dbacb69de4d117ccf1950c6445da8c616a660a248785a573a2b993d126df3c581f8f6c65e060613599d17614173383162aa68a81e4a3056de6e6b38ee6ae76d1781b373437fb9b6b78bee72b7d96f5ddfb85adb9e6d281a65a0b9c6dc38d337172fa81f8354bcd0ea41f3dc283f35c8793b968680d212da603831c7b43f354fa3249ab0643a1c45890951348d26233a8c4c766a8115474091a745358b1658339bd2b1c9ac9025310d2d9a98211d24344ce8d484786cc62373400e27e44fc5159c73590ac9db0e912bcf09ec30f0f6ee7211d8ba8484d6993a6f8d3505bcf4a8b04004bd53d3a18972814a4dbb1d37b0bdc532702eed76c21b48297bf0ef70c609cd24209a56d83c05d556c4d830e22eb6f63982f5c4be1f8392cc7e3d92a6e78d8b172d7fa60738c0c6aed25fe2079ee37ed5768e884b9ad51a72df1e488996afb136747df88d485cd2360bb9d8dbde4fd23e7990400505fb789a08d6810fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb7d625bd6c8b4fa44832bf526d61f0d8e5d6b7234192187423d55d42e3e16da8ad5f21984411cbfabbb75f8073a5ffa0e78040000",
    ],
    [
      "ETag",
      "xqUr62iXFHJUiHASmbF+tQ==",
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
      "Thu, 02 Sep 2021 19:20:45 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bc2d491128da848ba2a835800825620c214b3bfdc1b65b76b71224bcbbb315d1a889deb433d36fb6e79c7607cf491e800dcb245a9728b62711aa7b5d8c5196a992742b782e110c40c52222678fd3a86cc5ce6ae2a85ebc96afb70f33b1e97488907e8c19037b0761826920c17eda41ce32a4359fa765962faace00b52df470e28ddde135f5190f743f9cf6fb4eb7df83bd715c0c98628b8affc7da7c6fc08a2fc718a2c0dc47ada5107c85be72b54dc9b222c59ae4a5f0514205570f22c1cb8209ce6b34a9b51bb5bad530adbad9b04ecfeb268129f7994a784eec7442fa4071c5d231df904bb00810554986c3eafa42e324a88ce8d21d7a56b3d2f71520696192e2e26f90f4c68c3ec3077688e03bc7325ee6ea485df5ef9cdf8ea34c3f8fba74bcde0f422a4aea8878eea037f19cc14873f383f7ee56a11c094e414ad419d6cde659ab6d99efb15e701d35bdc756a244037c467fc74da2c00e592a71ff06036739b87b020000",
    ],
    [
      "ETag",
      "XYUgu5hAjSAtEhqszJWXrw==",
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
      "Thu, 02 Sep 2021 19:20:46 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1630610362910",
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
      "c5",
      "53",
      "d1",
      "4e",
      "db",
      "30",
      "14",
      "fd",
      "15",
      "cb",
      "13",
      "02a4b6a1d016ad52c54a095ab4d0b03405a109356e721b0c491c6ca71342fcfbae1d0a434cec610f7b8aed7bce3dc7c7378ff48e97291dd225cfee6b900f9f6ec592b6286896e1692d6717a7a9d2723c58dddf86c793f5e9b4ff73344204372cc58a2a87b612b54c400de7b34e26455d3129441b1bb50f7bedeee0606fd0dd3b18ec7feeee214f41bef2797987ec1bad2b35749c8d76271322cb81555c751251bc9c3beb7da792e21612ad9cb7920eaa28e763d1a35c244c73518ee63334502b900b2818cfd1c22b335d7e79dbbac359d1c910bce609b0241175a98d2d6c918872c5b35adaae74f848adcddf1674e6faee242293603e8d7662561872bc4b98228b850455e79a9c86c119892bd4ba610a544c2ebfbaa14bf0488a15cf61c1d3988cc811194f4f08f1834b37dc89f16c974c8388f8de37176bbe77e645a48b9e5258316c7bc23476d3c64bda2c3df3501a9446d0738adefbb7a34fa6ca85e4daf8f7a6911b8e279177e13691f990b1e461768fa1ad58ae00d14cb20234c833910252ce83991779c174ec23c3e670be41283afcf1f84a881e2a3006b5fd1aad41cfea6f00172caf2d62dd2c68973e3db5fea9c356b7bf854dae118433d2f0e9f7b91b5ed1e6288415482813cbfa20270bb685bf8efa66ee108b9387324ae35e699e28239248b0e58817f68e0dbbd71bf47be641112cf5fb5affd0fc9e65fac7cab3466dfb8394428676d8cc16d594f5c24b0c057fdf162d4029969936f3126fa2802d7320f6edc84b94248e092f89899ac4d1d5b9bbb0",
      "71c72d72cc52ace8418fd89487c484bc596f9bcdb671647d3423f09f3c5c37b118919360eae21cfc023c316a78f8040000",
    ],
    [
      "ETag",
      "urSVFdstrA6fqjRBCvFN5w==",
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
      "Thu, 02 Sep 2021 19:20:46 GMT",
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
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "d9",
      "e7246329a56f2e098622888a17232cb38db0d6c6a59dfe7b33fd8de6fcc3f9064559a271cc597f451d78036bc12bbb72e7105933667c83112f781d0759e75f33a9ed1658d989d31cf47a0eac9399c2d4825ac38c38505ed2d85722a128f795c7e6fa430feab3b7e5c4d2eb7bde5593a1b8dd882419028e4fee568d55c7cab1c9fb4839af837a91e940e3d6693acc316cefa786c8f579f982d1705c068163ed21fd645395b5afdc5c5b15c56d4642524fc44d065b4fd4b99c1c2d9e24f31e5099131939b9918bf87c8aee21cc2e217bd7cda3bf7b7afabfc006a085608ac61c3fb60ba2a26cc05ffd9cad043dfe6ba8a088829f5f5995c60c19040000",
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
      "Thu, 02 Sep 2021 19:20:46 GMT",
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
      jobId: "grouparoo-job-75-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f795b669933ea56a54258c4a6dba2529084d53643b37c190c62176400cf5bfefc6a10c36093ec5f63de79e731f792677a248c88c3091ddd7503d7db9958c9c10d034c35727b81f44ebf0fa37db055b8f95dcdd55c9e37c8e08d1b014dd97397494ac2b0e6ab60bbb5925eb925652763051673cecf4478e3deadbce6830eddbc85390a76b51dc21fb46eb52cd7abda376379332cb81964275b9dcbfbef71e06bdb292b7c0b5eabd97eca18aea7d2cfa35979c6a218bf92e4403b5822a863d15395af8cb4cd8e9fbd45d41f7dd0cc10f8203e55cd6856e6c610a2e8b54647565b292d9333136df1c48e8adbd65647199d7fb222ee81e4eac846a1aeba712acf360bbb156fef936d82ca2d5d68fc3e585b7597497dbf56ee387d6d585177896a62c07c3b5e6d6a9b9f97841fd04941685518f9ae746f9a541abffc7d210505a411b8cc7f688f627f694a56cccd3893364a90d8c4dd878481d66f3a90b6ec28022cf881a162d64311d8d2807cee3be9d42ecbaee24a6e334891d07930c191b8d07437238218f95d07026542995683b44ae8255e4c551b0f3978bc83325a4b4cef5596bac29e0ad478d0522e8839a0e4d5448546adabdf2232f582ca3d5a5d74e780d19e54fe13dce38a5b90244d30a9ba7a1dac8041b46fcc5c63b43b099d8f7635091d9cf67d2f4bc71f1a6e5aff40807d8d8d5e64bc22858f9df8c9d23e292e6b5813cb40752a2e51bac0d5d1f7e211297b4cd427eecbce09ab44f01a45041c13f9f26824de0d37fedb8f888c5d54719a5f18ebbc35523c22b68774898725fd8ae3b9a0e1c62c095fe3786cb631fbbd6e46832c21e0afd5251bbf858682b56ab57100671fcbee9d6e10fb3120eef78040000",
    ],
    [
      "ETag",
      "3Rq2TLSYzbUROEbpc4Urdw==",
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
      "Thu, 02 Sep 2021 19:20:47 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1630610362910"
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
      "92",
      "dd",
      "6e",
      "82",
      "401085df657a8b0954c596c40bac5649fd6915af1a63561814051677170d31be7b67a9b54ddba4bd8199e19be59c0327d8c559080eace2f5be4051deac51bde8628ab24894a45bce338960002ab62672f0d4dd153b57f559dfca0fcd59b92fbdc9b1dd2642061b4c19382788624c4209ceeb09329622ad053c29d26c597506a832d7c3993ff5c67dea531eea7e3c1f0eddceb00767e3ba1832c59615ff8fb5c5d9802d5f4d31428159805a4b2ef81603e5699b92a5798235c90b11a0840aae1eac052f722638afd1a4d66ad62cbb6eda9659b76fef2d93c084074cc53c23763e237da0b862c9941fc925d80488aa24c351753dd0380e2b23baf4c6bedda8f47d05485a1427b8fc1b24bd1b469fe103bb44f09d63292f3275a51e8713f7b7e328d3cfa3baaedffb414845495d11df1bf566be3b7ad6dce2e2bd532a94cf82539012758696d9b86bb66cf33dd607aea3a6f7384a146840c0e8ef18c40a9c882512cf6fbb7b50ae7b020000",
    ],
    [
      "ETag",
      "HKDkukAtGaG1pv5SyqyIOw==",
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
      "Thu, 02 Sep 2021 19:20:47 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536d6f9b3010fe2bc853a54d4a02348484485197a56c4323a423a455374d89714cea0630b54daaaeca7fdf014d5f54adfd84f13d2f77e7bb7bb465f91a0d51cc36372515771fae798c5a882abc815b4bcfa57379fd6bfb85f54d5f8ca7dbbfbbabdbd10810ac62499c15296d4b5e0a42e57031ef6c042f0b2c386f8350bb6fb74dbb6bd8a6d1b58f1dd3009ea469e2b37c0bec2ba50a39d4f5837767c3f926a5b860b24378f678afef8ef542f06b4a94d45f5aeae022f5b74d4f524eb0623c1f2de6904029a958d20cb314527862aee3cf2fa53b0c679d0d80778c504c082f7355a5051284e709db94a25645c37b54a7f9ec80e6aeef4e226d325b04d1c715ce2af2ea9386a5b65c0a2acb54695fc3d9545b15e0758525952bede2bb1bba1a5c099eb0942ed97aa58db4136d1c9c6a9a3fbb70c38f8f70d00a6691e67b3f5c40f8ded48b3413325b53a9585ee715e138a5554e0fadf35e3f5845c00ae49ae0b26fd8d81c184e9cc47d920cbabd3831681c0fe27e0f7763833816b5d631c5c053957acdc239cf1dec0c1c62503be927c9daa2a6630d4cab477a34c1668c6dc3805fa787d1be856e0553f494c9824bd6f40f5d845ee42ea370114cc6915b979160e8d169935c55c4f33c151409a037eada5751c6c1a97a0c2f88dc703c89bc73b7797f9f6e30b99bdfc00424389514d058e08c2a2aa67c0d4d4367b3b91779b360ec03a37ed4b30342a2e1effb27427457d45d56f5b7f2b2addaff0038c769592376cd019968bf6ffd5f611e855ef0ed6d89232e707e043a7f000633df48a09f0b37bc44cd5548132a684ede1f0100d7817757f7b04780854d021ba9e01f068ec8ca8408da0c1ecbea321bb6650d0ce318d560a15ec54ce856eb697f2a459ad15c3d54d4ec51d5b03a54ca471004615e82ba55fb7f1eb5a661c7040000",
    ],
    [
      "ETag",
      "4/ns9YjZkBi71LrAMkzvhw==",
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
      "Thu, 02 Sep 2021 19:20:48 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1630610362910"
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
      "4f833010c7bfcbf92824e01650923d6c86283a8932f76496a52b07eb048eb5c56559f6ddbda22fede57fbfdefdd20b7cabae840476aa3e0ea8cf3735da0f57146886c61abe7aea0c82076845cd64a6ead748ee27f1ad7a99b7e59b381efbfc349b3161e41e5b01c9052a854d6920f9ba40275ae467dbad1e273266cfbd4bb2fc337d4a0b0e5a2a5d90af97cbf96299c27573f5e040bb022bd4d84974237b4d07943673b646b47d83bea1414b3430c263a3d634f44213f99cf871e487d12488c26012dd3d8401830d49611575ccae57c06b2c59d1147462590819d063c9ded578fe703c75429b7f7471b668de35f15e836ee5f43efe137824276559d6ea013d9082bfe35959482ad118bcfe02015e8dfc6c010000",
    ],
    [
      "ETag",
      "IigK6ch37+iJAmdMaqqpNw==",
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
      "Thu, 02 Sep 2021 19:20:48 GMT",
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
      "0000000002ffedd3d15682301800e077d9b57250c241776cd24a04e5908addec8cf96744e8d840c54eef9ea7d7c8ef1dbe6f24a40463787bace0801e512fc6be25ad4879647afeb4ede2b44a615c5252cc3e4aa92ff859c3eea868b914aba0585f99612979fb8aae11ae2b2df166b7cfdb26266d1006592078de492f62901b99ba9c26a32175fa90ac6b6a70881dd04fc1cc2bb0cd61396c262a3aee9d6ad483c0c23039ca23ea2c4e5dc8abc3deb1b35c655b9757b56c7c1176aad9cc271c9a8714333e67ed7bedd566ebb78c262ff5782d571ec492c77a9a30ac0f0b59be1237b1eeeefe2f34407051a506c3cbdb76c7f5fd01faabcfdb5ec1ed3f01a141a39f5f163b18b819040000",
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
      "Thu, 02 Sep 2021 19:20:49 GMT",
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
      jobId: "grouparoo-job-77-1630610362910",
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
      "9b",
      "30",
      "14fd2bc87b5c13209090448ad628a56ba484ac405a6dd3846cc750b78029369da22aff7d17d374a92ab54fd8bee7dc73ee07cfe881973b344584678f0dabf75fee05416788299cc12bbf9eec4530ced443c0736b20be36bfd4f57c3603046f59121755ce7a5234356572ba8dfa592d9a0ad742f42051cff37af6c8b146b6e58c0613db029e6479bae2e503b0ef94aae4d4348fdafd4c882c67b8e2b24f45f1fa6e3e0dccaa16f78c2a69be953441459a1f8b7ecb05c58a8b72b68dc04023599db002f31c2cfc67eec8f9dbd47d8e8b7e06e0274e19a65434a56a6d410a2aca94674dadb3a2e933d2364f0e28f257fe2236a8c89ba24c4a5cb0336387154ed4be62c665b8591bcbe07213aee7f1721324d1e2ca5fcffb8bcd6abb0e22e3f6ca0f7d43619233cd3566c6b9be057001fd1d938a975a3d6e9f5be597062ddf8fa52580b4645d30f1ac11b6c7d684a4c4a3e9d81992d462848c8937c40eb1e8c465ee8e300c3c2daa59b8849aedb183a94b1267342289eba52419e3749758eec8c6c381ed39438c0e67e86fcd15bbe0b21292771d42b7e132f69338dc068b79eceb1252dce4eaa233d61670ea51418100faa0a6431be50294da762f83d80fe78b7879e377135eb10cd37df408334e712e19a0710dcd53ac5e8b1d340c05f3b57f01603db11fc7a044d3dfcfa8ed79ebe2a4e5aff41806d8da55fa8ba2385c06dfb59d23e206e78d863c75075481e53ba80d5c1ffe001296b4cb82aeb77ef813754f214b59cd4afaf93401ac039ffe6bc7c5072cac3ec8480577d81d2a5b115ab36e87b82ef785edba13db739106d7ea5dccb19d63d7da1c6d4656b052bd54d42d3e14da8935f2150441187fa0bb75f807466d162a78040000",
    ],
    [
      "ETag",
      "iQ9yoN8gtkNil02o+uZtQA==",
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
      "Thu, 02 Sep 2021 19:20:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92d14ec2401045ff657c6d9356a460131e401148002b148d3186acedb414b7ddb2bb5509e1df9dad8a464df4a59d999ed9de7bdb1d3c66450c3e3c64e9a642b93d4a515f996286aae25ad1ad148542b000354b891ce4c79b210f8297dbb6747bccbdbe099a98763a44a8688539037f0749863c56e0dfeda06039d25a24789517cbbab3406f4b339c87b3d174407d2e62d34f17e371b737eec3de3a2cc64cb365cdff63ed7e6fc15a3ccc3041894584464b29c51a233d323615cb4b8eb612958c50410dd70f5229aa9249216c9ad8ad96ed7a0dc7739d86777cea3a047211319d8982d8c59cf481169af199782697e01120eb920c27f5f589c6595c1b31e5681a7a27b5beaf00494b328ecbbf41d2bb62f4193eb0f708be732c1755a10fd4c5f8b2fbdb7194e9e751e7ddb0ff83509a923a20e168d29f87dd4960b8fb77efbdad46154841412a3419bace49bbd9f29cb758cf84899adee36b59a10511a3bf639869f013c615ee5f01cffa48bd7b020000",
    ],
    [
      "ETag",
      "Gm2qHlPPxY8r1Ba1VWP5eg==",
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
      "Thu, 02 Sep 2021 19:20:49 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1630610362910",
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
      "0000000002ff85536d6f9b3010fe2bc853a54e6b0234090991a22e4ad98a9a928e9056d33425c61cd42d608a4da7aeca7fdf014d5f54adfd84b97b5eeecee70772c3f3888c49c893db0acafb4fd722240704144d301acd6e4f4fbefcf50d1f4e75f0ad737551c5d3c90411bc66499a152974a4a84a0672bc5a76935254052d85e8a0506738ea9856cfb04ca3671ddaa6813c09693ce7f90db2af942ae458d777dedd448824055a70d965227b8aeb77877a518a6b604aeaaf2d757491fafba647a9605471914f564b2ca09250ae21a33cc5129e9951f8f5b57497d3ac9b20f88e33a08c892a57755928c1441ef3a42a1b55327e204d992f0e64e9cc9d59a0cd162b2fd8dfd0ac266f3e6b546aeb7509b24a95f6cd5f9c699b02bdaea804b9d12e4f1cdfd130548a98a7b0e6d1469b6847dad43bd6b4f9e2d2f1f79fe0a8e52d026dee9e3a8898bb676ea09958590452f1bca92ba0610a754d8fa373df5e584da00ae5dae47a6858d41c1976188743168f7a833036200c47e170407ba1c1ec3ef4a31028f254addeb0682e729bda239b1960c5c3388efa60dafd91d91fb001c4d40ca96518f86b0f28d91e903f255770cc6521246fe7472e7d3770d681bff266d3c069da8829cee8b82dae6ee2659d0a9b44d03b7d6deb2c17e8545f86eb058e3f9d05ee85d3deff1c12caee97b7b801314d25209a96340305e599887068e47cb1740377e14de7c8682ef57c879064fcebe19910dc17cd9455f3adbdac7ee3bf035cd0b46a1077ed819864bb3df8bfc232f05deffbfb127ba2a4f91eeafc4618ee7c2b417eac1cff2769433ec45042ce3e5e010437890f9feeee1d21165f12da4885ffb8704cd626ac8476f178d6b4d9b2fb03c33486a40197ea4dee7038d84db8d6a81521835c3d76d4bea37a604daa924f204ce2be78cda8b6ff003542041ac7040000",
    ],
    [
      "ETag",
      "dCqKH+zR0ReK/eR6PtVufA==",
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
      "Thu, 02 Sep 2021 19:20:50 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1630610362910"
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
      "90616f82301086ffcbede32481696092f841a7996e84389c59b2c5985a4f8602c7dae24208ff7d57dc97def5edd37bdf5c0b97ac3c4208872cfda9513577299a37db24a8ebdc682e15951a61006844ca64306fc6c1bd3f9a7beef2e3731d5f5ea6afd774326142cb6f2c04842d9c32cc8f1ac2af164a51207fdbef553f9131d3545659c5ef8be745c24241472bc4db289acea20574bb6e00673a24784285a5443bb2527446695636ad164595a3a3a9561235f470ff902aaa2ba1881c569ce0d1f1fca1eb7beed07f187b2e83394961322a99dd6e806d0c199127f4cb61c16340f52de73ef5e795e5910db4fb47678d41bd56c4be1aada57bb37f221bc97054a36a1c8014bc8c65666ef7ee0f48cc63a069010000",
    ],
    [
      "ETag",
      "7Dy97+64D10HWZPNkJAKvg==",
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
      "Thu, 02 Sep 2021 19:20:50 GMT",
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
      "59",
      "6e",
      "82",
      "400000d0bbccb712289bd33f590c51410187003f04614a4136674636d3bbd7f41af5dde13d419a6598d2847537dc824f30a71f90cbb843bfd18cb1323d1469a450145daab3d1b3d55b33ee74182c3a3a495bd33de35138c97b7f567bddb8ba08d161a33469d34e15bbab168abc9d8b96b32c89d6f6e6200aa1cf88eaf1594be7f93ee506b474d199822f7aea8ca8376b760ecd80b4fef238a2c62858a88e411cb3652d183ba86c2fc8eec3acfa8ef7f92404d3a1e1ad47c9f3b26b0da543a2628cab4bbcce05ddda14f915e6b2ed06d18c6b7a3c74f5603e1ceeededff022b80a7be249826e56bbb2843b8027ff51336f7f8f55fc329c104fcfc021e7b9ce519040000",
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
      "Thu, 02 Sep 2021 19:20:50 GMT",
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
      jobId: "grouparoo-job-79-1630610362910",
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
      "85536b6f9b3014fd2bc8fbda04f20422456b96d2152d211b214dbb6942c618ea96608a4dabaeca7fdfb569a25695da4fd8bee7dc73ee836774c7ca144d50c2f2fb86d64f5f6e79824e10953887d75cde5c6dfb173f30c3f6e3d5e8dbbf2dbffe3d9b4e01c1144be05d55d08ee04d4da8986cd6ddbce64d856bce3b90a863bb9dde78608d7bd660dc777b16f0042db2052bef807d23652526a679d0eee69ce705c515135dc277c777f3a16f5635bfa5440af3ada4092ac2fc58f46bc109968c97d3cd1a0c3482d631dd6156a8028fcc34397d9bbacbf0ae9b03f881118a09e14d29952d48417899b1bca97556347946dae6ab035a7b0b6f1e198417cdae8c4bbca327468a258ee553458df370b534fce07c152e6791bf0ae2f5fcc25bcebaf3d562b30cd6c6f6c20b3d43e2a4a09a6b4c8d537d0be002fa291592955a3d52cf4af9a541fefbb12802480bda0663db1ae39e63b94996d8247306a324b3689238893dc283c422ee900ed38462e06951cdc2252fb13348adb44f63d7cdac78481c3776fb8e1de3f100f77a7dbbe73a04ed4fd063cd243d63a2e282b51d42dbd08fbc380a37c17c1679ba840c37853c6b8da9025e7b945020803ea869afa28c83926ab71f445e389b47fea5d74e7841734c9ed6f730e30c1782021ad7d03c49eb254fa16128982dbd3300eb89fd3c04059afc7946aae7cac5ab961fe9110c50d995fa8bd651e807dfb59d03e212178d863cb4075481e51ba80d5cefff021296b4cd827e6dbcf01ab54f21cd684d4bf2f93401ac039ffe6b87c5072cac3ec8080977d81d229408a969bb434c97fbc21e8e2cdb759006d7f25dcc1db987aea91c2a23ddd152be54d42e3e14da8a35e20882208c3fd0dddaff07bfff780b78040000",
    ],
    [
      "ETag",
      "gthXW2HKaia7wX5BzWoYZA==",
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
      "Thu, 02 Sep 2021 19:20:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1630610362910"
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
      "92",
      "d1",
      "53",
      "82",
      "40",
      "10",
      "c6",
      "ff97ed1567300d93191fb0ac984133c4a7c6714e5810833bba3b4ac7f17f6f8fcc9a6aa65e6077f9edf17d1fece129e709b8b0cab3e71ae5ee2c43fd608a10555d6845b74a708560016a96199287766fcbc7918a83c4deae2a3ef47bd96040848ad7583270f790e658240adcc73d705622adc5a2a84bbe6c3a0bf4ae32c35914fa935bea4b91987e320f026f188ce0609d1613a6d9b2e1ffb1b63858b011ab105394c863345a2a2936186bdfd854acac0a6c2951cb18153470f32093a2ae9814a2459356afdf6a3b1ddb69db1de7bcdfb6092c44cc742e38b1f319e9032d342b42f14a2ec121403625194e9beb0b8df3a431624a7f1239dd46df5780a4a57981cbbf41d2bb66f4193eb06304df39568a9aeb137513dc7bbf1d47997e1e75ed45a31f84d294d40989fcf1681679e3a9e11647efc39d46359582825468326cdbddcb8b9e63bfc77a254cd4f41e57cb1a2d8819fd1d77b906376585c2c31bea8ac2617b020000",
    ],
    [
      "ETag",
      "bnR07xnMTscLd0xbpnBI7g==",
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
      "Thu, 02 Sep 2021 19:20:51 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "DATE" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1630610362910",
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
      "000000000002ffd5536d4fdb3010fe2b56f60524e81bacd04e15eb68b6454bd392a43086506b9c6b6a48e2603b4815e2bfefecb463888d7ddea73a77cfcbf9fcf4d1b9e345e2f49d1b9ede5720d7ef6ec58db3e780a6a9a9aaa35527998efc23f67d7df9633a0ed8e860381820821b96a27999c1be129564a0fab3a8914a5195540ab18f42fbc7adfd76f7a0d56db70eba9d5ebb853c05d9d2e7c51db2575a97aadf6c6ebd1ba9106906b4e4aac144feabde7ce8344b296e8169d57c69d94417d57cdbf424138c6a2e8ac12cc2012a05720e39e5198ef0cc4c6e3ebe946e709a3752043f700694315115da8c85124c144b9e56d2aa3afd47c78ef9dbc1895cdf3d8dc9e96416c43b0b9a1bf262975045e67309aaca34f91c4ec66451a2d78a2a500b72f1d50d5d822529963c83394f1664404ec8301811e24f2edc706791500da8134c62e27bdf5cecfaded88b491ba74a604951784435ea69334d521f3df3541a9446d0668fdeebd7739e4c970bc9b5b98117c46e383c8dbd73b75e9a0f2965ebe81ed7b6a4990244534973d020c72201a44c2791177b9360e823c36e62ba4528a77ff5f84c88d7259801b5fd355edd43ebbf059cd3acb28887fae0b49da7a7bdbf2b8c86b18b886bd4c008d44de76ce686974e5d0a6109120a66496f2cc1826de39f49dec60ab1182cb4511abf95e64c191326c1b6639edb0bd4ecc3f7ed5ea7e758b0d4af7b3da30c45f2c7cec6a3b2fa20a590a1cd92f944376567e105ee8c276736892fa6bcdf9472508aa6463e1024a79aad789112c5d302b52590a590645915ccd0eae0d91295699543a189d9b9ea13b3f30689aab2145243f22c80bd3aae511c7ac197dd0f9bcf4f97b11be19f4093ab76ffb8736dee636f51a7e3bfbcc175fd24368393c064f027b9dc087953050000",
    ],
    [
      "ETag",
      "bs7h2dPDL7cXyYZPMNcD3A==",
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
      "Thu, 02 Sep 2021 19:20:52 GMT",
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
      "ffedd3516e82300000d0bbf45b099420767f65ac8222ead0205f0d941aaa28150a952dbbfbccae31df1dde37c819e35d475573e137f006c61c2283192b39f77c5d55d93c71d621c212474d7deea0357e40d3ddf7a8276ec4459f5a435948b16537a1eca224ca9cb9117dacce30eb5407a926c33bf38830e1a576f40686d93498b2fb965fefd1f10c758d675fd8674333c0727d09b7c3b46993a04a4d4950e692e54137f13eaad282f2fac45ac78287c4e74ba7daf558accccd093bf1b853b12e98f23e7dbdb8923447c771d350ac1f892bb31d0c62cb4a161eb683ab6dbcbcfc5f6002f8438a9677543cb7db0e4213f0579faa51f2e77f8fe72d6fc1cf2ffd8504ae19040000",
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
      "Thu, 02 Sep 2021 19:20:52 GMT",
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
      jobId: "grouparoo-job-81-1630610362910",
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
      "ff85536b6f9b3014fd2bc8fbda0412f22091a2354ae91629211b9046d33421e35c53b704536c3a4555fefb2ea6e95a556a3f61fb9e73cfb90f9ec8bd28f6644a52913dd4501dbfdcc9945c10d034c3d7dd316203b91bd82bbeb5edc983379ccf79369b2142342c450f650e1d25eb8a819a6ea36e56c9baa495941d4cd4f17a9ddec875463dc71df5273d07790a72be12c53db26fb52ed5d4b6cfdadd4cca2c075a0ad565f2f0f26e3ff6edb29277c0b4b2df4adaa8a2ec8f45bfe692512d6431db4668a056502570a022470bff99fbf4f26deaaea0876e86e047c1803226eb4237b63005930517595d99ac64fa448ccd570712f92b7f115b4ce6f5a1480a7a800b6b4f354df4b104eb3adcacad6570bd09d7f378b9099268f1dd5fcfbb8bcd6abb0e226bf7dd0f7d4bd33407c3b566d6a5b9057841fd3d282d0aa31e37cf8df2738396efc7d210505a411b4cc6ce88f63c6792f274ccb8e70e53ee409a7ae97848ddd46193010cf62950e41951c3a2852cdc49caa83b1a2613ce20198c5d48bcb1e7257c34e0c03d8f3b43464e17e46f25345c09554a25da0e915db88cfd240eb7c1621efba6044eeb5c5fb5c69a025e7bd45820823ea8e9d4448544a5a6ddcb20f6c3f9225edef8ed84579051768c1e70c69ce60a104d2b6c9e866a2df7d83012ccd7fe1582cdc47e9c838a4c7f3f91a6e78d8b572d7fa1c738c0c6ae365f12c5e132f866ec9c113734af0de4b13d90122ddf626de8faf40791b8a46d16f273eb87bf48fb1402870a0af6f934116c029ffe6be7c5472cae3eca288d77dc1da61a115641bb43c294fbcc1e0cfb7dd723065ce9773177383977adc9d164840314fab9a276f1b1d056ac562f200ce2f803d3add33f8aa89b9778040000",
    ],
    [
      "ETag",
      "WySc4oW4/LfU//9q85AAfg==",
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
      "Thu, 02 Sep 2021 19:20:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1630610362910"
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
      "92",
      "dd",
      "4e",
      "c2",
      "40",
      "10",
      "85",
      "df65bcb424ad60c1265c144125fc88b4c40b43c8d24ea1d076cbee5620847777b6221a35d19b7666facdf69cd31e601d672138308f179b02c5fe6281ea4917639445a224dd729e49040350b105913b779bb62f3b5eddcd7a6cb37337ebe7deebb6d92442064b4c19380788624c4209cecb01329622ad053c29d26c567606a87dae879e3fee0eefa94f79a8fbe1a4df775bfd0e1c8df362c8149b95fc3fd6a64703567c3ec6080566016a2db9e02b0c5457db942ccd13ac485e8800259470f96021789133c1798526958655b1ecaa695b66d5bebab14c02131e3015f38cd88947fa4071c59231df924bb00910654986a3f2fa4ae3382c8de8b23bf4ed5aa9ef2b40d2a238c1d9df20e95d32fa0c1fd82982ef1c4b7991a93375d77f747f3b8e32fd3caaedfa9d1f845494d419f1bb838ee7bb8391e6a627efadbd4239129c8294a833b4cc5ae3ba6e9befb1de721d35bdc751a2400302467fc743acc0895822f1f80656a274a97b020000",
    ],
    [
      "ETag",
      "xAwmD+ES7AnKaqxAqkWKvw==",
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
      "Thu, 02 Sep 2021 19:20:53 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd5535b4fdb3014fe2b56f602126d7a81ae64aa580761444b5348d22286506b1c27189238d80e0810ff7dc74e0b436cec794f49cef96e3e3e79b26e5899588e75c9b2db9a8a874fd7fcd2dab2a8c219548fb6f158febc9f93c7c3e1e39c11a67cbbba1f8d00c1344be2a2ca694bf25a102a9d59d4ce04af2b2c386f81506bd86b7507fdcea0dbe90f7abbdd0ef024cd539f9537c0be52aa928e6dafbddb19e7594e71c5649bf0e2a56edff5ec4af06b4a94b4df5adae022ed8f4df7724eb062bc1ccd2208504b2a16b4c02c8708afcce4f2eb5be936c3453b03f01d231413c2eb52e95820417899b2ac1646d5729e2c13f3b7172b727d773f46fbd359106f2c71a1c9cb4d84255a2c049575aed061389da065055e575852b944a7476ee82228099eb29c2e58b24423b487c6c10142fef4d40d3796524146100aa631f2bd1f2eb47d6fe2c5a80bb1129a62503ec00a04958e9334af9ebe2b45a502d06a90defbebb39e759771c1943e8217c46e38de8fbdb9db4ccda719260fd12dcc2dc5b9a480c60217545131e10905caf134f2626f1a8c7d6098511caf11d272ce9f5e09f143457540659eda6bb06dfcd78039ce6b83b86b5eacaef5fcbcf57785d89bb8513c9e1c03ec028460111a84753273c333ab298534a58296c4303f9884019bc63ff779bd5c8085f5021bb822c5a462446a1322a869c7ac30a768d8db3bfd9dddbe65c042bdeb7dee0cf53f58267fecac3c6aa34f85e022341ba53fc14d9a2cac84c1b1e4c4ece39b94b7ab5241a5c499960f382ab02257accc90645909da82a2940b94d625d1b466fd4c098bac2e68a9901ebc74d0cbe0db28aaab8a0b4593571500349b1bc5a1177cdffcb2fafc7616bb11fc0f0a9d779d61ef421fca1ca5d993fff71817cde5e83c07d3c0856dfc05f8e2628663050000",
    ],
    [
      "ETag",
      "H4aAsZwVczF8zVicitL/pw==",
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
      "Thu, 02 Sep 2021 19:20:53 GMT",
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
      "51",
      "6e",
      "82",
      "300000d0bbf45b0822ccb2bf0156940c07e8ccf821584b2d22ad542cb0ecee33bbc67c7778dfa0c0984899dff89934e0150c85e9e8580f05747dc56a8e1ab62817108915a7096ec5d5389f4fe39d995d595da8ab9066ae65ca829ccb4377b1bc749ae3f85d85dee7c7e6ad0eaba8d38efb74c8328abe506dad15f743b870a1dcd93527ae9529b7a71d5cefd3b907572fd12ed81697041d11def6ecb02cc3fdead414c1cc4fedc3dc30684561236d514e97714a6861c6f39d7347b4e189324f254bfac1225aceae1b1c1922e9922aeb7c3596e3bd8d03ad67fad3d3ff052680f482b544e6ecb17d663bce04fcd5cf6f83208fff2e295ad2829f5fcbbd153419040000",
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
      "Thu, 02 Sep 2021 19:20:53 GMT",
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
      jobId: "grouparoo-job-83-1630610362910",
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
      "6b",
      "6f",
      "a24014fd2b64f66b15505434315ba3742551ec22b6fbc8860c78a1d3024399c14dd3f8dff732d4ae4d93f6133373cfb9e7dc07cfe481157b3221114b1f6ba89ebedcf3885c109034c557fb47b1582caf67e6e136772b975f2ff5f4d76c3a45046b5882e665061dc1eb2a0631d96dbb69c5eb92569c773051c7ee77cc61df189a467fd81b9b06f20464c98a150fc8be93b214135d3f697753ced30c68c94437e6f9ebbb7ee8e965c5ef2196427f2ba9a38ad03f16fd9af1984ac68be96e8b066a0155083965195af8cfdc47976f537719cdbb29820f2c061ac7bc2e64630b53c4bc48585a572a2b993c1365f3ec40b6ceca99075accb33a2fc282e670a1eda9a4a17c2a41bbf2376bcdf5ae36fe7a16b81b2fdcce97ce7ad69d6f56bbb5b7d56e978eef6892461928ae36d52ed5cdc30beaef41485628f5a0796e945f1ae4be1f4b434069016d301c19436adac6384aa2519cd8fd419418104576341ad07e64c4630bac7d0414794a54b168c10b2bb1808ecc7d68f40c3bb48cbe1d8e6104e1b8371844f6a86746e6801c2fc8df8a4958305172c1da0e915bdf0d9c30f077de7c1638aa8484d6995cb4c69a02ce3d4a2c10411fd4746ca28ca352d36ed70b1c7f360fdc1ba79df00a521a3f6d1f71c609cd04209a56d83c09d59aefb161c49bad9d0582d5c4ae4f414126bf9f49d3f3c6c559cb5fe9010eb0b12bd5976c03dff5be293b27c40dcd6a0539b40752a2e53bac0d5d1fff201297b4cd42beef1cff27699f7c48a08222fe7c9a0856814fffb5d3e22316571f6584c43bee4e2c1a91b8827687982af7856d0d2c6334260a5cc977b19e659fbad6e46832420e857ca9a85d7c2cb415abc52b0883387e4f75ebf80f1714eebd78040000",
    ],
    [
      "ETag",
      "8XnDDHPA1vWmIrIoPH/gZA==",
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
      "Thu, 02 Sep 2021 19:20:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1630610362910"
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
      "000002ff8d92414f83401085ffcb788504da8a95a4075aab92b4b5521a0fa669b630502ab0b8bba8b5e97f77166b356aa2179819be59de7bb08387ac8cc18555963ed628b62729aa5b5d0428eb5c49ba55bc940806a06229919dc4f35ecb6c100c3c76d7c22a8a59f292f67a44c8688d050377074986792cc1bddf41c90aa4b588e775512e9bce00b5adf4701606fee48afa82c7ba9fcc4723af3f1ac2de382ec64cb165c3ff636db13760c357012628b08c506ba904df60a47c6d53b2a2cad194bc16114a68e0e6412a785d31c1b94913b3db366da76d39b6d5765ae7b64560ce23a6325e123b9f913e505cb13ce0cfe4121c02445392e1a4b93ed1388b1b23baf427a1d369f47d05485a92e5b8fc1b24bd6b469fe1033b44f09d6305af4b75a42e4737de6fc751a69f475d78e1f0072115257544427f3c9c85de78aab9c5c17b7fab504e05a72025ea0c6dabd33d3d73acf758075c474def7195a8d18088d1df719d297013964bdcbf01fd11844f7b020000",
    ],
    [
      "ETag",
      "4fAAzniCRCAaW2epcdafxg==",
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
      "Thu, 02 Sep 2021 19:20:54 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1630610362910",
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
      "c5",
      "53",
      "5b",
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b9627c426f50a6dc72a55aca341cb169a2e4d416c428d9b9c06431207db414388ffbe638772111b3cee29b6cff92efe7c724b2f7991d0215df1f4aa0279f3ee42ac68838266299efefc7d98cf74bfef277be36f0b7d72ae3b3b937434c20e6e508ae565064d252a19831a2ee6ad548aaa645288261235f77acdee60b733e87676073b9fba1dc429c8d61e2f2e117dae75a986edf646bb950a9166c04aae5ab1c81fcedbd73bed528a0b88b56a3f976ca38a6abf2eba9f8998692e8ad1628e062a05720939e3195a784426abcfcfa95b9ce5ad149baf790c2c8e455568630b296251ac795a49cb4a87b7d4da7cb2a073c7730e4272e02fa6e1fb88e5061c7d204c91e55282aa324d0e03ff8844256a9d33052a22275f9dc0217824c59a67b0e4494446649f8ca713423cffc4099e304dfd9078ee7707eb9e7be486a48bbe125833a49e308d8cdaf849eaa56b1e4b83d2d8749fa4fbf2fde89da97221b9367770a7a1138c0f42f7d8a963f32065f1cdfc0a835bb34c017633c972d0208f44020899f9733774fde9d84384cd62b6e95074f8ebf61110de94600c6afb355a839ed5df341cb3acb21dd7f58276e9dd5de3df0c879e3f7e9363abdbeaf7b690e80cdb70566a0efa63e104a7b43e0a600d128ad8e25ec9ca36dbc29b23bf993fecc5094419a571af348f95118925d872c8737bcf1addebf73bfd1eb5cd52bfac7ddc33bf6991fcb572af51597e9052c8c00e9dd9a29ab25e7881b1e06fdca03928c55243b328f0260ad82a0362df8f3c8449a288f08298b849149ece9ce57de451837c61094944655036ea21a993deecb6ebedb63166edd4d3f07fad9cd5",
      "2119ad893f75702afe0090ad08190e050000",
    ],
    [
      "ETag",
      "ZxFmPt55Od8AJUtWht02Dg==",
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
      "Thu, 02 Sep 2021 19:20:55 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffedd3cb7282300085e177c95a186c0997ee00515a010b1245361984cc700db714904edfbd4c5fa3fefb7376df378893840c03664d492878038ff845e513fed82afa6e2aaef79bed9cd3b13ad338f32309dd0da3c0cce83837e25054ef27281fb46b3aeb965631e37d72bc90ce5f0b96d536f43854e72e32f1c30924e124a6e4c3c70616cb5ecee76e6b4ddac1ad28bc07e1d94b8b6d63436d913e3d1890d9ae35abcab8d6664b944024d8d93a70030b52e607b3d8b0dbc8e25d59944a68769a12a3e27091d72b5a4789d8fb7bb1bf040532ab9672e5d1cedd05a9e3c09d14817ff6ecff063680cc6dde9301e7abf657a8aa1bf0471fb3474b56ff3a897bd2839f5f039d52e919040000",
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
      "Thu, 02 Sep 2021 19:20:55 GMT",
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
      jobId: "grouparoo-job-85-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fa34014fd2b64f6a3b6a50fdad2a4599b4ab5494b574ad5cd664386e182a3c02033b8e99afef7bd0cd6d598e82766e69e73cfb90f9ec903cf233221214f1e2b28f7dfee45484e09289ae0eb6d3e5cecfd0bd5b3aed9df9375efe1f66431bb9a4e11c16b96a45991424b8aaa642027bb6d3b294555d0528816266a8dad5677d837875db33fecd95d137912d278c5f30764df2955c849a773d46e27422429d082cb3613d9eb7be7a9d7294a710f4cc9ce7bc90eaac8cee7a2df53c1a8e2229feeb668a092500690519ea285ffcc283c7b9fbacd69d64e10fcc41950c64495abda16a660228f7952953a2b993c136df3cd816c9d9533f70d26d22acb839c66706a4454d140ed0b3016de666d2cddc5c65bcffce5c60db6f34b673d6bcf37abdddadd1a37978ee7188a862968ae3135cef4cdc50bea472015cfb5ba5f3fd7ca2f0d5a7e1c4b4d4069094d30189943da1d9b76188723168ffb56189b1086e37064d17e68327b008328048a3c2daa593417390cfb436a5966d01bdb2c188c5814504afb412f1a8de2b1d905733c228753f2a7e40aceb92c84e44d87c88db7f49dc0f776ee7ce63bba849856a93a6f8cd505bcf5a8b040047d52d3a18e72814a75bb97aeef78b3b9bfbc769a09af20a16cbf7dc419c7349580685a62f314946b1161c3883b5b3be708d613fb710c4a32f9f54cea9ed72edeb4fc95eee3006bbb4a7fc9d6f796ee85b673445cd3b4d290a7e6400ab47c87b5a1ebc36f44e2923659c8d5cef17e92e6c983184ac8d9d7d344b00e7cf9af1d171fb1b8fa282315de717798ac455809cd0e715dee0b7b60597dd3261a5caa8f31db3e76adce5167840c72f55251b3f858682356c957100671fcaeeed6e11fe8065ba778040000",
    ],
    [
      "ETag",
      "Xn6FyTGt25Vcz+M2kX+FAQ==",
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
      "Thu, 02 Sep 2021 19:20:55 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1630610362910"
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
      "02ff8d92dd4ec2401085df65bca44d8a40c5265c144521f227946834842cedb414da6edddd4a08e1dd9dad88464df4a69d997eb33de7b47bd8c459000e2ce3e8a540b13b8b50ddeb6282b24894a45bce338960002a1611e9bb95e90e2bf6d3c3aa5b7f54777965146cb6ad1611d25f61cac0d94318631248709ef790b114f51a4f8a345b949d016a97ebe1d49bf486b7d4a73cd0fd70d6efbbed7e070ec66931608a2d4afe1f6bf383016bbe9c608802331fb5965cf035faaaa76d4a96e6099a9217c24709255c3e88042f722638376962361b66d5ae5976d5aad9e797558bc084fb4cc53c237636257da0b862c9846fc925d80488b224c361797da5711c944674d91b7a76bdd4f7152069619ce0e26f90f4ae187d860fec18c1778ea5bcc8d489bae98fdcdf8ea34c3f8fba76bdce0f422a4aea8478bd4167eab983b1e6e647efed9d4239169c8294a833ac5af566e3c2b6de63bde23a6a7a8fa3448106f88cfe8e6eacc0095922f1f006a5124c147b020000",
    ],
    [
      "ETag",
      "cA+Sye+6ZWhH4XtKp+Odkw==",
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
      "Thu, 02 Sep 2021 19:20:56 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` = ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1630610362910",
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
      "a5",
      "53",
      "5b",
      "6f",
      "da",
      "3014fe2b91f7b249054220109050c768ba45a2d086d06a9a26b09d93d46d12a7b1d30e55fcf79d24a51755ea1ef692cb39dfe55cec47722bb2908c0913f15d09c5eed38d64e48880a631464f4bddbfa0bbeb6177f5ed3c71221f567fc287c90411a262299ae609b4942c0b0e6abc5eb5e34296392da46ca150cb19b4ba839e39e89abd8135ea9ac85390447391dd22fb5aeb5c8d3b9d83773b96324e80e642b5b94c9fe39d7bab9317f206b8569db7961d74519d8f4d8f13c9a916329bac575840a9a0d8404a458225bc3043f6f5ad745bd0b41d23f85e70a09ccb32d3555928c1651689b82c6a55327e247599af3ec8ca9dbbb3c0982dd78be0f396a61579fbc5a0cad86c0a5065a28d537f79666c73f4baa60ad4d6b8fae1faae81a1424622818d08b7c6c43836a68b138c1efee6de9917185dac2204a54556d710509640e5ff3426effd722a02d5e8d42437437340bb8e3962111bf2c8e9d92c328131870d6dda63261ff5a11f32a0c8d3957acda21976ce58e844961546368c5085f7996d866168878e65f38839c31e8b866644f647e4a1101a4e84caa512cdacc895ef05ee26f0d78bd93470eb36228af338698aab9a785da7c62611f4415ffb2a2b243a5583f71681eb4f678177e936bb9e434cf96e7587db8e68a200d1b4a0296828ce64884323e7cb951778cbc5748e8c7a81e7078422e35f8f2f846097d753d6f5bbf21af46bff03e09226658db86f3e4897ecf747ffa760a3c46f84e0d16ed8e462edfa3f4913f221820232feefed23b84efcf3861eae0b62f1c2a08dd2f88f678dabca8417d09c3991d6f535ecbe8d0f8bd4e042bfcb599675186ea55129420a997eeaa8b92ed5acea54a99e4198c4a3b2f016df31fb172afecee9ae040000",
    ],
    [
      "ETag",
      "Fut4Qayh71SBPl8fReSxdw==",
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
      "Thu, 02 Sep 2021 19:20:56 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1630610362910"
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
      "2d90414f83401085ffcb781422b4092a490f6d53b59110a5f6a2699a2d1d900a0cee0e1a4af8efce522f3bb36fbf9df7323d7c15f511423814f9778bbabbca915f6d93a0694b36521aaa0d8203c82a17f2bd3d5f77fcb0b9594e6e33cef23a3f3fc7f3d94c08937e62a520ec212bb03c1a083f7aa85585f26dbfd7e344c1b86bacb28edf568fab44848a8e5688b751345f442b18768303273a2498a1c63a453bb2d174c294d736ad515553a26ba8d5291a18e1f121d7d4364a13b9a2b87781eb07532ff0bd6930b9f73d014b4a1517540bbbdd80d830b12a13fa95b0e00ba0c7567267e3f933ca1268f78f2e3a46f3a2497c0d5a4bef62bf241b89252aeb161d48952ce3a9e0cb7df8031e66681769010000",
    ],
    [
      "ETag",
      "Zuz+ytFS/C27ftfgngzKNA==",
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
      "Thu, 02 Sep 2021 19:20:56 GMT",
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
      "02ffedd34b7282300000d0bb642d4c0105d21d36a62855345a20dd3001224404f9f9899ddebd4eaf51df1dde376069cafb3e1e4e25afc12b904c876aaa7a8d3d4557516d3e95ae6aeed5d99051abd76da2f86d77ca32acfb3bcdd118442d0f21c349d6927c0e9320df4c825ad7060be10b75855fd237638742827c270a27f8ba8633522ca22db6e9905328721a88c87277724cd14b8cfbf3dd5aca3a81de7d23beaa95ee90d2c50ad6db85bbf73029945a7a65018d7db695c85826ef2ceed697b4e905d722eb3845caf8e3da8ced14127338e407f33833cc5b4fd81cd31575d4a7a7ff0b8c00bf35a2e37d2c1edb8d098423f0573f1e64c31fffa79c75bc033fbf273fd3b919040000",
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
      "Thu, 02 Sep 2021 19:20:56 GMT",
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
      jobId: "grouparoo-job-87-1630610362910",
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
      "536b4fa34014fd2b64f6ab2d94be689366ed56d46e5aaa403566b321c330e02830c80c5663fadff7ce605d8d897e6266ee39f79cfbe005ddb332415314b3eca1a1f5f38f3b1ea3234425cee0f5697731316f7e0797db64b1f17e35bb277676b59bcd00c1144be0a2ca6947f0a626544cb74137ab7953e19af30e24ea38e34e6fd4b7463dab3fb2273d0b7882e6e98a95f7c0be95b21253d33c687733ceb39ce28a892ee1c5dbbbf9689b55cdef2891c2fc2869828a30bf16fd99738225e3e56c1b808146d03aa205663958f8cf4ce2e38fa9bb0c17dd0cc08f8c504c086f4aa96c410ac2cb94654dadb3a2e90bd236df1d50e0aedc4568109e37451995b8a0474682258ee473458d537fb33696dee9c65fcfc3e5c68b82c5b9bb9e77179bd576ed05c6f5b9ebbb86c4714e35d79819c7fae6c105f4132a242bb57aa89e95f26b83969fc7a208202d681b8cc6d608f71c6b12a7f198a44e7f18a7168d63271e0f713fb6c8644007494c31f0b4a866e19297f6d88efb241946d4eef5a201e92791838783c88a1d6c2736249dd8687f84763593f484898a0bd676085dfbcbd08d427feb2de6a1ab4b487193cb93d6982ae0bd47090502e88b9af62aca3828a9762fbdd0f5e78b7079e5b6135ed10c93e7e001669ce25c5040e31a9a2769bde609340c79f3b57b02603db18b4350a0e99f17a47aae5cbc6bf91b3d84012abb527f5110fa4bef4cdb3920ae70de68c8637b401558be85dac0f5fe2f206149db2ce872ebfa37a87df2694a6b5a92efa709601df8f65f3b2c3e6061f5414648b8c3ee10a144484ddb1d62badc57f660381adb03a4c1b5fc14736ce7d035954365a4052de56b45ede243a1ad5823de401084f17bba5bfb7f981aaeba78040000",
    ],
    [
      "ETag",
      "xwP9/YJSQUdCONBuwxiGVw==",
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
      "Thu, 02 Sep 2021 19:20:56 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1630610362910"
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
      "92",
      "41",
      "4fc2401085ffcb782d491128d88403280a0920423988216469a7a5b0edd6ddad5a09ffddd98a68d4442fedccf49bed7bafddc32e4e0370611d478f39cae22c427d678a29aa9c6b45b74ca40ac102d42c22b277bfd8e04b3d4af25dbfcfd7452b5a345ea3769b08e56f3061e0ee218c91070adc873da42c415af305cf9374557616e82233c399371d8c6fa84f4460faf17c38ec74873d3858a7c58069b62af97fac2d0f166cc57a8a214a4c7d345a3229b6e8eb81b1a9589271ac28914b1f159470f9209222cf9814a242934aab59a93a35dba9da35e7fca26a13c885cf742c5262e733d2075a68c6a7e2995c8243802c4b321c96d7271ac74169c49483b1e7d44b7d5f019216c61c577f83a477c3e8337c60c708be732c1179aa4fd4f5f0b6f3db7194e9e751571daff783509a923a21de60d49b799dd1c470cba3f76ea1514da4a020159a0cab76bdd5683af67bac97c2444def71b5ccd1029fd1dfd18f35b821e30a0f6fdae45dc77b020000",
    ],
    [
      "ETag",
      "EYZhex4gmukHHlby8gZ5zg==",
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
      "Thu, 02 Sep 2021 19:20:57 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1630610362910",
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
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "2b",
      "c8",
      "fbb2494d20212f1029eab2846d5469d211d26a9aa6c49883ba054cb1c91655f9ef3ba0e98baab59f3077cfcbddf97c4f6e7916921109787c5742b1ff702302724240d118a393a8932dcb99fce2ef12ddda5feefe9e656c321e2382572c49d33c81961465c1408ed6ab765c8832a785102d146a5956ab33308d41c730075dbb63204f4212cd79768bec6ba57239d2f5a3773b16224e80e65cb699481fe3faaeabe785b801a6a4fed2524717a9bf6d7a9a08461517d978bdc2024a09c50652ca132ce18919069f5f4ab7394ddb3182779c01654c9499aaca420926b288c76551ab92d13da9cb7c76202b67ee4c7d6dba5c2ffc8f5b9a56e4ed278d4a6db329409689d2be7acb736d9ba3d7359520b7dad577c773340c1522e2096c78b8d5c6daa93659ccb42760139bbbe7aeaf75b09610a4e2595d894f8304aa2a1e86e5bebea28a4015ca34c9cdd018d08e65d841140c596499fd20322008ac60d8a7666030bb07bd30008a3c55a9d72c9a89cc8cfa9661985dbbdf83ae4d1930b3179ab41f3203ba609b0308a9cdac901c4ec89f822b9871990bc99b89912bcff59d8defad17d389efd46d4414a7326b8aab9a785ea7c22611f4465f872acb053a55e37717bee34da6be7be934373e8798b2fdea0eef3ca2890444d382a6a0a03817210e8d5c2c57aeef2e17933932ea6bbc38222419fdba7f22f8fbbc9eb2aabf95d7a057fb1f019734296bc4ae39900e391c4efeafb0f23d77f1ed6d89498edda2cc6f44e192370ae4c7daf17e9226e441040564ecfd0d40709d78f7ad1e1f0e62f1e9a08d54f88ffbc66465c20a",
      "68f68ea775970dbb878b311c901a5ca857b96ed73e0eb8d2a81421854c3d74d43c9c6a5e75aa948f204ce2ba2cea491dfe018148d216b8040000",
    ],
    [
      "ETag",
      "Af1nOuDsBTvl/8yVvxJncA==",
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
      "Thu, 02 Sep 2021 19:20:58 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1630610362910"
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
      "41",
      "6f",
      "82",
      "40",
      "1085ffcbf42a096842d0c4835ad29a12d362b9d418b3c240b1c0e0eed09618fe7b67b197ddd9b7dfcc7bbb37f82a9b0c16702e8b6b87ba7f2890df6c11a3e92a36b2b5d418840920ab42c869b2dae376f3f2bbf968ae3c4f1e4d1e64c5722984493fb156b0b8415e629519581c6ed0a81aa5ed74d2e344c1b86fadb2ddbd874f612c424d9915764914add65108c37198c085ce31e6a8b149d18e6c355d30e5ad4d6b54dd56e818ea748a064678bc283475add2448e284e10389e3f737dcf9df9d3b9e70a5851aab8a446d8640f62c3c4aa8ae947c28227801e4bc99d8febb77db10d74fc47d73da379d524be06ada57bb7df908dc4129575871348957cc673c9f7f3f007a539c9ac69010000",
    ],
    [
      "ETag",
      "2UASeICKxCZnqt9UDsf8dg==",
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
      "Thu, 02 Sep 2021 19:20:58 GMT",
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
      "49",
      "72",
      "82",
      "40",
      "14",
      "00",
      "d0",
      "bb",
      "f45a2c0c83929dd00cda282a49012b8ae1637060681a1b48e5eeb1728df8eef0be519265d07531abaf50a17734266fda3c9b9366a5635e72e543220585e0705137ee0da76a27568bbba49fbf9adc8dbac7b032e54896e06816e0d5e00811ddfbacb54f6bd5dac9497538af54598e33d29e1a917b129da0bc05c4b8187e99ab8547dd70e86571bd3fb69a51b458d0fc90e01ec8a1d063d1e2fc964f8172f2efdb6de7b069d37ec6622fd8cbde61c77c583e7657d314b855f7ccdee2111bfc922b766a8fbb745127bd74adf57b3b2dc0ae43c16344e1f39797ff0bcd100c4d49a18bcbe77649d1b419faab1fb3b181e77f1d120a14fdfc024a04de4e19040000",
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
      "Thu, 02 Sep 2021 19:20:58 GMT",
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
      jobId: "grouparoo-job-89-1630610362910",
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
      "6b",
      "6f",
      "9b",
      "3014fd2bc8fbb8269037448ad628a56ba6846c40da4dd3848c73a16e01136c5a7555fefb2ea6e95a556a3f61fb9e73cfb90f1ec92d2f76644a629eee6ba81e3edd88989c105034c5d76f97d7fbfcf32dfcf499df677fb95986f6f9fd6c8608deb024cdcb0c3a52d4150339dd06ddb41275492b213a98a8633b9dde78608d7bd660dc777a16f22464c98a17b7c8be56aa9453d33c6a775321d20c68c9659789fcf9ddbceb9b65256e802969be963451459aef8b7ec904a38a8b62b60dd0402da18a20a73c430bff99bbf8f475ea2ea7793745f01d6740191375a11a5b98828922e1695de9ac64fa48b4cd170712b82b77111a4c64755e4405cde1c4d8514523f5508271ee6fd6c6d23bdff8eb79b8dc7851b0b870d7f3ee62b3daaebdc0b8ba707dd75034ce40738d9971aa6f1e5e507f0752f142ab87cd73a3fcd4a0e5dbb134049496d006a38935a63ddb72e2249eb0c41e8ce2c48238b6e3c9880e628b394318ee62a0c8d3a29a450b51d80e6383218c22cb1af5a2a16d0f22a70f104d288063c563872623723821f7155770c66529246f3b44aefc65e846a1bff516f3d0d52524b4ced4596bac29e0a547850522e89d9a0e4d940b546adabdf442d79f2fc2e5a5db4e780529650fc11e679cd04c02a26985cd5350adc50e1b46bcf9da3d43b09ed8f7635092e9ef47d2f4bc71f1a2e5cff41007d8d855fa4b82d05f7a5fb59d23e29266b586dcb50752a2e56bac0d5d1ffe201297b4cd427e6c5dff17699f7c48a082827d3c4d04ebc087ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e53eb187237b3218110daed49b98d31f1ebbd6e46832420e857aaaa85d7c2cb415abe5330883387e4f77ebf00f105069e678040000",
    ],
    [
      "ETag",
      "JVhqm+keXRcR2czi/pT8Fw==",
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
      "Thu, 02 Sep 2021 19:20:58 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1630610362910"
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
      "92",
      "d1",
      "4e",
      "83",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7ca509a8c54ae203d5aa985a6ba126c634cd1606dcbab0b8bbd8344dffdd59d46ad4445f606638b3dc7b61034fbcca2080052f9e1b54ebbd02cdad2d26a81b6134dd6a59690407d0b082c8e555f7be1a8b68aaf894877117efd8eaf2f6e484089d3e62c920d840ce51641a82870d54ac445a4ba568ca6ade760e98756d877132894617d49732b3fd683a1c86fde100b6ce6e316386cd5bfe1f6bb3ad034bb998608e0aab14ad965ac925a626b236352b6b811d2d1b95a286166e1f144a363553527668d2e91d773cffc0f53df7c0df3ff65c02854c99e1b222761a933e30d23031912b72093e01aa2dc970de5e5f68ccb3d6882da351e21fb6fabe02242de702e77f83a4f791d167f8c0de23f8ceb1523695d951e7c39bf0b7e328d3cfa3cec264f083d08692da2149743d8893f07a6cb9d9bbf7fedaa01e2b49416ab4197aee61af7be4bb6fb19e4a1b35bd2730aa410752467fc7253710e44c68dcbe02af1972c57b020000",
    ],
    [
      "ETag",
      "jJ5YnPlIUriUiAS5eVawHQ==",
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
      "Thu, 02 Sep 2021 19:20:59 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1630610362910",
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
      "6d",
      "6f",
      "9b",
      "3010fe2bc8fbb2494d02212f1029eaa294ae6869d211d26a9aa6c49883b8054cb0e91655f9ef3ba0e98baab59f3077cfcbddf9fc40ee781692110978bc2ba1d87fba15013921a0685c4583f3efdb3cbee8efc259faf736ddbb72ba9d8cc788e0154bd2344fa02545593090a3d5b21d17a2cc6921440b855ab6de3206a63e307473d0b50d1d79129268c6b33b646f95cae5a8d3397ab76321e20468ce659b89f429deb9ef76f242dc0253b2f3dab2832eb2f3bee9692218555c64e3d5120b2825146b48294fb0846766187c7d2ddde6346dc708bee70c2863a2cc5455164a3091453c2e8b5a958c1e485de68b03593a3367ea6bd3c56aee7fded0b4226fbe68546aeb7501b24c9476ee2d2eb54d8e5e5b2a416eb49b0bc773340c1522e209ac79b8d1c6daa936999f69cfc02636732f5d5f33b09610a4e2595d894f8304aa2a1e87e5bebda28a4015ca34c9f5501f50c3d2ed200a862cb2cc7e10e910045630ec5333d099dd835e1800459eaad46b16cd4446433334bbbd21ed85ba1d5acc624333b02de89a4c372c080cdd020bb3e47042fe145cc11997b990bc9918b9f15cdf59fbde6a3e9df84edd4644712a674d7155132feb54d82482dee9eb5065b940a76afceedc77bcc9d477af9de6c6671053b65feef0ce239a4840342d680a0a8a4b11e2d0c8d562e9faee623e9921a3bec6ab234292d1af876782bfcfeb29abfa5b790dea369f00d734296bc47d732006391c4efeafb0f43d77feed7d099a63b728f31b51b8e48d02f9b172bc9fa4097910410119fb7803105c273e7cabc78783587c3a682315fee3be315999b0029abde369dd65c3eef5ed81d92535b8506f72437b781c70a55129420a997aeca87938d5bcea54299f4098c47599d7933afc033c583c3fb8040000",
    ],
    [
      "ETag",
      "bbFKhpgH5qdLmxjmyIsChA==",
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
      "Thu, 02 Sep 2021 19:20:59 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1630610362910"
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
      "dd",
      "4a",
      "c3401085df65bcb481c462a4855e5809b6508a8d56412965bb99a6697e26ee4e9418faeeceaedeecce9ef966ce6107288b2683291c8afcb343d35fe5c81b57a468bb8aad5c2d35166104c82a1752979345f9d647b7af9b53fa63b6d7efd9f22e9fcd84b0fa84b582e900c702abccc2f4638046d52863fbbdf11b05e3be75ca72fd923c26a90835654e586f57abfbf92a81cbee3282331d523ca2c146a35bd91a3aa3e6a54b6b55dd561858ea8c460b1ef68ddc50d72a431488124cc2208ac7611c85e3f86612850256a41517d408bb7d06b1616255a5f42d612112c0f852721ffdf92572e802edfed179cf689f0c89afc5cc77bdfd03b9482c51d9743802ade4331605ffbd2fbff9c31c4169010000",
    ],
    [
      "ETag",
      "ck9HkWy15VQhRzrU+ZdI7g==",
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
      "Thu, 02 Sep 2021 19:21:00 GMT",
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
      "7282300000d0bb646d18d402da9d915644e51b81b2c9c4186aa0a411a8829ddebd4eaf51df1dde37a08cf1b625dd67c5257806039dcc35a66dd40cd957e1d703e9b69520e848ddc41131bfb847f6b6f10a2a91b9d0b9a542d7e951efe36a9c2d95ba39ad8f8524352bf8598cd3e96431a4577c833b7592afa59ece5e1a3df2ead5a62e6193493bbcd99798ca3287b83c7c18de537cccda2e3b403f882770698585bd865f862f3d949b71408cd4a5ee367cc7d23a391e0b50885d624ce1beca8b7562568c35b85f05669d59d13849ec4295f9b6d89f0fbb48cde25a7b78f8bfc008f05e8986b744dcb74f8df97c04feea936e50fcfe1f71daf006fcfc02f52a286b19040000",
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
      "Thu, 02 Sep 2021 19:21:00 GMT",
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
      jobId: "grouparoo-job-91-1630610362910",
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
      "6b",
      "4f",
      "db",
      "3014fd2b91f795b649933ea56a54258c4a6dbaa529084d53643b37c190c621766008f5bfefc6a10c84049f62fb9e73cfb98f3c933b5124644a98c8ee6ba89ebedd4a464e08689ae1ebf9f5851cec6c8f332a77eedafeab25f7e6b3192244c352745fe6d051b2ae38a8e96edbcd2a5997b492b283893a13a7e30c5d7be8d8eeb03f716ce429c8d39528ee907da375a9a6bdde51bb9b4999e5404ba1ba5cee5fdf7b0ffd5e59c95be05af5de4bf65045f53e17fd9e4b4eb590c56cb74503b5822a863d15395af8cf4cd8e9fbd45d41f7dd0cc10f8203e55cd6856e6c610a2e8b54647565b292e9333136df1cc8d65ff98bc8e232aff7455cd03d9c5809d534d64f2558e7e1666d2d83f34db89e47cb4d106f1717fe7ade5d6c56bb75b0b5ae2efcd0b734653918ae35b34ecd2dc00bea27a0b4288c7ad43c37ca2f0d5a7e1c4b434069056d301ed943ea8ced094bd988a76377c0521b181bb3d180bacce6130fbc8401459e11352c5ac8c29eb80980cd624abd61ecb184c76c3264311b3b0336729833667d7238218f95d07026542995683b44aec265e4c751b80b16f3c83725a4b4cef5596bac29e0ad478d0522e8939a0e4d5448546adabd0c223f9c2fa2e5a5df4e780519e54fdb7b9c714a730588a615364f43b59609368c04f3b57f866033b19fc7a022d3dfcfa4e979e3e24dcb5fe9110eb0b1abcd976ca37019fc30768e884b9ad706f2d01e4889966fb036747df883485cd2360bf9b5f3c36bd23e8590420505ff7a9a0836812fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca7d617b43bb3f1a1003aef487983be91fbbd6e46832c21e0afd5251bbf858682b56ab57100671fc81e9d6e11f085a3ecd78040000",
    ],
    [
      "ETag",
      "FYHo5U04cbaoU3M0xtoc4A==",
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
      "Thu, 02 Sep 2021 19:21:00 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92d14e83401045ff657ca509684525e903d56a9b206a4b63a2699a2d0c485958dc5d54d2f4df9d45ad464df405668633cbbd173650e455021eacf2ecb141d9ee65a86f4c3145d570ade8568b4a2158809a654446fcaee8db2f6d58dc8eedac7d0ab0589df98301112a7ec09281b78134479e28f0ee3750b112692d16bc29ab65d759a0dbda0c67d174125e505f8ac4f4e13c08fc613082adb55b4c9866cb8effc7da626bc15aaca698a2c42a46a3a596628db19e189b8a9535c79e128d8c514107770f32299a9a49217a34e99d383dc73db05dc73e70f74f1c9b402e62a67351113b9f913ed042333e15cfe4125c02645792e1b4bb3ed1384f3a23a69c8491dbeff47d05485a9a735cfe0d92de07469fe1037b8fe03bc74ad1547a479d0757fe6fc751a69f479df9d1e807a13425b543a2c9e56816f997d7865bbc7b1fb61ad5b51414a44293a163f78f0f8f5cfb2dd65361a2a6f7785a366841cce8ef18e71abc947185db575c6b43e17b020000",
    ],
    [
      "ETag",
      "TlZk40xyNkWH0gyvLekbDA==",
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
      "Thu, 02 Sep 2021 19:21:01 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` = ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1630610362910",
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
      "6d",
      "6f",
      "da",
      "3010fe2b91f765930a2404c28b843a04d916894209a1d5364d603b97d434c421765a5515ff7d97a474adaab59fe2dc3d2f77e7f323b9156948868489f85040fef06927193923a0698c516bf64b2e77d121f50fcef8fe6669ef7addf57234428428598aeeb3041a4a163907355caf9a712e8b8ce6523650a83168372cc7361dcbb49df6c03291a720896622bd45f68dd6991ab65a27ef662c659c00cd846a72b97f8eb7eedaad2c973be05ab55e5bb6d045b5de373d4f24a75ac874b45e610185827c037b2a122ce11f33645f5f4b3705dd376304df090e947359a4ba2c0b25b84c23111779a54a868fa42af3c581acdc993b098cc9623d0f3e6fe9be246fbf1854199b4d0eaa48b4f1cd5f5c18db0cbd6ea802b535ae7fb8be6b60289791486023c2ad3132ce8df17c8ad1906aa8ff67de85171816d61182d222adaa08284ba0ace06950dedbeb290954a3579ddcf44c875a7d73c022d6e351dfeeb2c804c6faacd7a53633f9a0039d9001459e2ed52b164d653ab029a3764823cb8cd880d1fec0613d330abb6db04ca0ddc80a1dd3e69c1ccfc87d2e344c85caa412f5b4c8b5ef05ee26f0d7f3c93870ab36228a1399d6c5954dbcac536393087aa7af639915129dcad17bf3c0f5c793c0bb72ebdb9e414cf9c3ea80f71dd14401a2694ef7a021bf90210e8d5c2e565ee02de6e31932aa2bbc3c211419fe7efc47081eb26acabafa965e4ea7f23f01ae68525488bbfa402c723c9efd5f615a8ee05d81b6d9361b26ee741795fe201477bc1621cbb5ebff2475c887087248f9c74b80e02af1e1533dbd1bc4e2cb411ba5f11f578eabd284e750af9ed8578dd6ec8e63757b6d528173fd26d7b3fba719971aa522ec21d54f1dd5efa61c59952ad4330893b831736ffe1d",
      "b37f019224d680b7040000",
    ],
    [
      "ETag",
      "1LZoQjfqnRq6AwhQ3j75UQ==",
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
      "Thu, 02 Sep 2021 19:21:01 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1630610362910"
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
      "02ff2d90416f82401085ffcbf42a09482591c44335a49210aa584f8d312b0c140586ee2e1a42f8ef9d452f3bb36fbf9df73203dcca26031f2e65f1d7a1ecdf0ad47bd324a8ba4a2b2e2d350a6106a845c1e4e6f67ee8ef8b22d96fbf1e0bb98b43378b8ad58a0995fe622dc01f202fb1ca14f83f0334a246fe763ecb692263ba6f8d12c6dfc16790b050536684f818451feb2880f134cee04a97047394d8a46846b692ae98ead0a455a26e2bb41475324505133c3d1492ba5648228b156b39b71ccfb53dc776bdf9d2b119ac2815baa486d9e301d846931655420f0e0b0e03726a39773e9df749e640a717baee35aa9d24f655682ceda7fd864c24cd51b5ec7006a9e0656c4bfdbc8fff9d38680969010000",
    ],
    [
      "ETag",
      "Ck4Syv5gRQHOw5rPNI3dLg==",
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
      "Thu, 02 Sep 2021 19:21:02 GMT",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffedd34b7282300000d0bb646d1d103f497742fc7740188d914d26c6a880400ac4884eef5ea7d7a8ef0eef09b810b2ae595366b2009fa0e53dd415dd95822e36e91c3112a6de3dcc6c64f7b7d15053167e9ce0684769dadfdb9e72258d5d3fc4f176b62f335af41a33359787ae256765c42670a52b4ea093adada4b812b54017f4c8f93029c7e9693945fd3ad713f39d2dfdb0c1373ee36d80f703a98246f9b4bd5d47daf8e5616ef2dc875eb38e85d858b181c2e045901091466782895fde7a2d86c72f6f74b967b03a064bedd94e7dd6d638a53be76015ecb121eb20e9bebdfd5fa003e45d2595ac59f2daee0c10ea80bffaac69957cfd7725af64057e7e01b6e8930019040000",
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
      "Thu, 02 Sep 2021 19:21:02 GMT",
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
      jobId: "grouparoo-job-93-1630610362910",
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
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "fb",
      "b8263c92e625456b94d21529211b21ada66942c65ca85bc0149b4c5195ffbe8b69ba5695da4fd8bee7dc73ee8327f2c0cb84cc48ccb3c706eac3977b119333028a66f8ba594ec2af8ef076ea20b347e10cbcfb2c5dcce788e02d4bd2a2caa12745533390b3ddb69fd5a2a9682d440f13f5a6839e3d1a5823db1a8c9ca96d214f429eae78f980ec3ba52a3933cd93763f1322cb81565cf699285edecdbd6356b5b807a6a4f956d24415697e2cfa2d178c2a2ecaf96e8b061a09750405e5395af8cf4ce28bb7a9fb9c16fd0cc17bce8032269a52b5b630051365cab3a6d659c9ec89689baf0e64ebaedc6568309137451995b4803323a18a46ea508171156cd686e75f6d82f522f4367eb45d5ebbeb457fb959edd6fed6b8bd7603d75034ce41738db971a16f3e5e503f01a978a9d5c3f6b9557e6e90f77e2c2d01a52574c1686c8da83db1a6711a8f593a199cc7a905713c89c7e774105b6c3a84611203459e16d52c5a8a7292a6cc1ad26994c4f6381a4e1c2ba289358cd834a600c351922663723c237f6baee092cb4a48de7588dc065ee84661b0f3978bd0d525a4b4c9d56567ac2de0b547850522e8839a8e6d940b546adbedf9a11b2c96a177e376135e4146d961fb88334e692e01d1b4c6e629a8d722c186117fb1762f11ac27f6e3149464f6fb89b43d6f5dbc6af90b3dc401b67695fe926d1878fe776de784b8a179a321fbee402ab47c87b5a1ebe31f44e2927659c8cf9d1bfc22dd530029d450b2cfa789601df8f45f3b2d3e6271f551462abce3ee",
      "30d98ab01aba1de2badc67f670e4388e4d34b856ef6283897dea5a9ba3cd080594eab9a26ef1b1d04eac912f200ce2f87dddade33f1b56341078040000",
    ],
    [
      "ETag",
      "OC8T+2oIUtysgqo23IjgfA==",
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
      "Thu, 02 Sep 2021 19:21:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92414fc2401085ffcb782d492b58a5098782888d8008251e0c214b3b2dc56db7ee6e3184f0df9dad88464df4d2ce4cbfd9bef7da3d3c67450c1eacb2f4a542b93b4b513f98628aaae25ad1ad148542b000354b8974b683bb645361731b757b65d67e4426fb7ea743848ad69833f0f69064c86305ded31e0a9623ad45825779b1ac3b0bf4ae34c359380dc603ea73119b7e3c1f0efdeeb00f07ebb41833cd9635ff8fb5c5c1828d584d3141894584464b29c506231d189b8ae525c78612958c50410dd70f5229aa9249211a3469b49b0dc76ddaae6337ddf3b66313c845c474260a62e733d2075a68c6a7e2955c824b80ac4b329cd4d72d8db3b83662ca601cbaad5adf5780a42519c7e5df20e95d33fa0c1fd83182ef1ccb4555e8137533bcf77f3b8e32fd3ceada0ffb3f08a529a9131206a3fe2cf44713c32d8edebb3b8d6a220505a9d064e8d8adab8b4bd77e8fb5274cd4f41e4fcb0a2d8818fd1db799062f615ce1e10d446569b07b020000",
    ],
    [
      "ETag",
      "1vGKfjue3vcBCpi9WearEA==",
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
      "Thu, 02 Sep 2021 19:21:03 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` = ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1630610362910",
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
      "a3",
      "4014fe2b64f66537b1e50ea549e3361557362d554a752fd9b4030c380a0c32831b35fdef7b00eb2566f50972ce7739b77940d7b44cd0184534bb69487df7e98a45e80011813388dae9bd79f6433ed10b715faaf8ba389e7e0fb2c90410b465715c54391970d6d431e1e3f56a98d5aca970cdd80084068e31502d5db15445b734475580c7499ece69790dec4b212a3e96e5bdf730632ccb09ae281fc6ac788acbb79a5cd5ec8ac482cbaf2d6570e1f2fba687398bb1a0ac9cac575040c349bd2105a63994f0cc4ca2afafa5871417c30cc0b73426388e59538ab62c90885999d2aca93b55347e405d992f7ed0ca9dbbb3509a2dd77ef8798b8b96bcfd22612e6d3635e14d2ea4e360b990b615785d624ef856ba387103578250cd529a930d4db6d2443a94a6fe1144b980eafac0dc5b78a1a4422109e182965d19218e72d296f03829efed7e5a021660d62737b6626175a438511ad9713ad2cd285548148d22dbc47aa4c48e418c24221878a255ef58b864a56d5aa6a5a97a9a8e46899da889a18d0cdd761247d71d473354cd360c625a687780fed6549023ca2bc6693f2e741178a1bb0983b53f9b866ed7468a6124477d716d132feb14d02480dee96bd7662903a776f69e1fbac174167ae76ebfee39c9707cb7ba8185a738e704d0b8c60511a45eb00486864e972b2ff496fe740e8c6e87a77b0447e3df0fcf84f0aeeaa62cba6feb65199dff1e708ef3a643dcf63f4845bbddc1ff15426fe1aec2e9e2f47d154dd19481a20d543354b5b1aa8f5563a828ca2f10ff0344b8fb5e179daddde027ea430149494dcaf8e3bb007097f8f0f9eedf1260e135810ddca5a07085316f4de29af4d7488baef79e6d58bae958a803d7e24dce569dfdd85b8d569114a4148f1df56fa99d6297",
      "6af81308927044bee77f83ec3fa76af510cb040000",
    ],
    [
      "ETag",
      "7fz5QX/H3mtzn1akmFAJRg==",
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
      "Thu, 02 Sep 2021 19:21:03 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1630610362910"
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
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85ffcb782d09586d52921e441b6d42a962f1a0699a2d0c480b0cee0e2a69f8efce522f3bb36fbf9df7326738954d063e1ccae2ab43dd5f15c82fb689d174151b292d35066102c8aa1072bb790f6e376f6b56c929fa4db2b05baf1f8ac54208937e62adc03f435e629519f03fced0a81ae5db7eafc7898271df5a65156d978fcb58849a322b444918de05e11286dd3081231d62cc516393a21dd96a3a62ca2b9bd6a8baadd031d4e9140d8cf0f85068ea5aa5891c519cf98de3cda6eecc73a7b3ebb9e70a5851aab8a446d8e415c486895515d38f84054f003db6923b1fcfef519640bb7f34e819cdb326f135682ddd8bfd3dd9482c515977388154c9329e4abedc873fcabbf09a69010000",
    ],
    [
      "ETag",
      "TOZB5OVMtaUkNxUdLuMMDg==",
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
      "Thu, 02 Sep 2021 19:21:04 GMT",
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
      "ffedd34d7282300040e1bb64ad0e438136dd91069c221ae44761c5441a20442c0411d0e9ddcbf41af5dbbef57b009a65acebd2ebb76017f00e26aac255b6da346f080fa5e6baf0143744565ccd43b390cb31ff3ac6bdb6a494299fe72819507d292d6d0a4dd1da283544a3129fe02eda78f53085ca9c6b4ab13e3afd36c65ca2cee2af99dc633f3fb46592ed881b399139c66b6c3798f745421841f26049018da44de2daf78aa31e0e2634cf3862650d69d5db8ebfdedf05a91429a821448fc30f6e6ddddbb00b9c9b15a0494f8be5f564f17677d7c2e4e6112fb02914aba7a7ff0b2c001b1b2e5997f2f9f6171dc205f85b3fbd4e0d9bff478c4a26c1cf2f87605c5619040000",
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
      "Thu, 02 Sep 2021 19:21:04 GMT",
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
      jobId: "grouparoo-job-95-1630610362910",
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
      "536b6f9b3014fd2bc8fbb8262190b714ad514a17a4866c405a4dd3848cb950b7802936adba2aff7d17d374ad2ab59fb07dcfb9e7dc074fe496970959909867770dd48f5f6e444c4e08289ae16be1a463c7155fb34d103cf06b910dffa69bd5728908deb2242daa1c7a52343503b9d807fdac164d456b217a98a8371ff78613db9c0c4d7b62cd8726f224e4e9052f6f917dad54251783c151bb9f0991e5402b2efb4c142fef837b6b50d5e206989283b792035491838f45bfe58251c545b9dc0768a091504750509ea385ffcc243e7d9bbacf69d1cf107ccf1950c64453aad616a660a24c79d6d43a2b593c116df3d58104ce85b30e0d26f2a628a3921670622454d1483d56609cfbbbade17ae73b7fbb0add9d1705eb8db35df5d7bb8bfdd60b8cab8de33b86a2710e9a6b2c8d537df3f082fa0948c54bad1eb6cfadf27383dcf7636909282da10b465373428733731ea7f194a5337b1ca726c4f12c9e8ea91d9b6c3e82511203459e16d52c5a8a7298cce2590a66644f67d36834b7218aadd1244a6c66c7a3294cc6d6901c4ec843cd159c715909c9bb0e912bdf0d9d28f4f7de7a153aba849436b93aeb8cb505bcf6a8b040047d50d3a18d72814a6dbb5d2f74fcd53a742f9d6ec2179051f618dce18c539a4b4034adb1790aeaad48b061c45b6d9d3304eb89fd38062559fc7e226dcf5b17af5afe420f7180ad5da5bf24087dd7fbaeed1c1197346f34e4be3b900a2d5f636de8faf00791b8a45d16f273eff8bf48f7e4430a3594ecf3692258073efdd78e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7993d9a8c2ccb221a5cab77317b6c1dbbd6e668334201a57aaea85b7c2cb4136be40b0883387e4f77ebf00f068b60e978040000",
    ],
    [
      "ETag",
      "mEf5EIo+gHSSwihog1zfHA==",
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
      "Thu, 02 Sep 2021 19:21:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bc2d4911acd2848ba2a818442d25628c214b3b2dc56db7ec8f8610deddd98a68d4446fda99e937db734ebb81e7bc4cc087799ead0ccaf54186face16212ac3b5a25b254a85e0006a9611d937d9729a450b139e4cb97c989bd5fd551974bb44a8788105037f03698e3c51e03f6ea06405d25a2cb829ca59dd39a0d7951d8ea37030baa0be1089ed4793e130e80dfbb075f68b09d36c56f3ff587bda3ab014f310539458c668b554522c31d6036b53b1a2e2d850c2c81815d470fd2093c2544c0ad1a049a373d4687a2dd76bba2defb0d37409e422663a1725b19331e9032d34e3a1782597e01120eb920ca7f5f585c679521bb1e5601479ed5adf5780a4a539c7d9df20e95d30fa0c1fd82e82ef1c2b8429f59e3a1fde04bf1d47997e1e751644fd1f84d294d41e8906d7fd71145cdf5aee69e7bdb7d6a86ea5a02015da0c9b6efbe4e8d873df633d15366a7a8fafa5410762467fc765aec14f1957b87d039bc95f9e7b020000",
    ],
    [
      "ETag",
      "EugjXgThuR8XlrYbuqWJnA==",
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
      "Thu, 02 Sep 2021 19:21:05 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` = ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1630610362910",
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
      "0000000002ff85536d6fa24010fe2b64efcb5dd20a0aa298989e517a47ce62abd8e672b9e8b20c745b6029bb78318dfffd06a8bd36cdb59fc499e7656676e691dcf33c222312f2e4a18272ffe94e84e48480a209460391cef63b5bf7ef3ccb0cd8e4be78f8115c8dc788e0354bd2ac48e1548aaa642047eb5527294555d0528853143a75ecd3ae6d1a76d730ed9ed3359027218de73cbf47f6ad52851ce9fad1bb930891a4400b2e3b4c64cf717dd7d38b52dc0153527f6da9a38bd4df373d4b05a38a8b7cbc5e61019584720319e52996f08f19855f5f4b7738cd3a0982779c01654c54b9aacb420926f2982755d9a892d12369ca7cf14156eedc9d06da74b1f683cf5b9ad5e4ed178d4a6db3294156a9d2ce978b0b6d5ba0d72d9520b7dacd7777e96a182a45cc53d8f068ab8db5336de2cf30faa4d144e6de8517685dac2402a978ded411d03085ba86a751796f1fa82650856e6d7233306cda1d1a4e188703160fcd7e181b1086c370d0a7666830c7022b0a81224fd5ea0d8be6223787863570fa108219b2d0ea45c31e8b4cd3b269c4e8d019f6fb3dc3b6c1218713f2a7e40a665c1642f2765ee466e905ee2658aefde924709b36628a3399b5c5d54dbcac536193087aa7af439de5029deae17b7ee02e27d3c0bb76dbf79e4342d97ef5802f1ed35402a269493350505e880887462e172b2ff016fe648e8ce6112f8f084946bf1eff11827dd14c5935bfb5976d35fe47c0354dab06b16b3f48971c0e27ff57389f2f261f6b74fa8838fc4610ae78ab40aed6eef22769434b88a1849c7dbc01086e121f5eeaf16c108b87833652e17fdc37266b135642bb773c6b2a6cd996dd37cde6ce152dd59b9ce558c701d71ab5226490aba78edab3a9e7d5a42af90cc224ae8beff9df30fb17759ac979b6040000",
    ],
    [
      "ETag",
      "TolDyv6/NjI43TcAkpqKTQ==",
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
      "Thu, 02 Sep 2021 19:21:05 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1630610362910"
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
      "00000002ff2d90dd6a83401085df657a59a59a80102117b1a44d40823f0d1442089b75b4a6ead8ddb54142debdb3a6373bb367bf9d73981b7cd75d01219cebea6740353e556852db64a887c6682e3d751ac10134a262f28d9e134f7fe6c9465da3552ab3328f5fd2e592092dbfb01510dea0acb1293484871b74a245fe763aa969226366ecadb2dd7dacdfd7190b2d1556d8ede37815c56bb81fef0e5ce89c61890a3b897664afe882d26c6d5a2ddabe4157d3a0246a98e0e9a15234f44211b9acb88bc0f583b917f8de3c982d7c8fc186a4303575ccee73601b434634195d392cf80ca8a9e5dce574feb23cb3818eff68341ad48922f6d5682dbd87fd2bd94886a31a35a00352f03236b579dcef7f5cd6009069010000",
    ],
    [
      "ETag",
      "Fo+P0sXSPHrwBAQcRfSL/Q==",
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
      "Thu, 02 Sep 2021 19:21:05 GMT",
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
      "59",
      "6e",
      "82",
      "40",
      "00",
      "00",
      "d0bbccb721236284fe95a50468504441f999b00cabc0c0c0b098debda6d7a8ef0eef09c238c694a2a1ad70033ec012f2121773161165752a0373194e9425d5ea9f4a5d81f77b16c9b21512bb19af791a19d86fa1e0aa9f30d783b92daecc380bda24a249abdd2ed44628465982f9c6538e851b578becacb6428f4c27a4a3314a75b2e36f88f20fa1168b74c82aebd6adae679542ad9a9158f94c665d07d7c81995f1bb6646e90c5f2db1704bed70ab788ba0b98c1807a98697795461811402b3a07c98dbaad707354a93737be989975fe6fda136b8b7b7ff0b6c009e49d1638a8ad7f6dd5e9236e0af3e1a16825fff651cf6b8073fbfe32f3dde19040000",
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
      "Thu, 02 Sep 2021 19:21:05 GMT",
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
      jobId: "grouparoo-job-97-1630610362910",
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
      "000002ff85535d6f9b3014fd2bc87b5c939090028914ad5142b74c09d980b4aaa6091973a16e09a6d8b4aaaafcf75d4cd3b5aad43e61fb9e73cfb91f3c915b5ea6644a129edf35503f7eb911093921a0688eafa6f5d57f387d389fdc5e5f55b969fdbca077cbf96c8608deb224dd5705f4a4686a0672ba0bfb792d9a8ad642f430516fe2f486b665da43d3b24793a1893c0945b6e6e52db2af95aae47430386af77321f20268c5659f89fdcbfbe07e34a86a71034cc9c15bc901aac8c1c7a2df0ac1a8e2a29ced4234d048a863d8535ea085ffcc34397b9bbacfe9be9f23f89e33a08c89a654ad2d4cc14499f1bca97556327d22dae6ab0309bdb5b7880c268a665fc625ddc38991524563f55881711e6c37c6ca3fdf069b79b4dafa71b8f8e16de6fdc576bddbf8a171f9c30b3c43d1a400cd3566c699bef97841fd14a4e2a5568fdae756f9b941abf7636909282da10bc68e69d3a16b4e922c7158e65aa749664292b889734aadc46493318cd30428f2b4a866d15294d4a28eebda4e9c0e474e3cce4c1abb19b0d8b16d0b26ce644c53208713f25073054b2e2b2179d7217219ac222f8e829dbf98479e2e21a34da1969db1b680d71e151688a00f6a3ab4512e50a96df7ca8fbc60be8856175e37e135e4943d867738e38c1612104d6b6c9e827a23d0e594f8f38db744b09ed8af635092e99f27d2f6bc75f1aae52ff40807d8da55fa4bc22858f9dfb59d23e282168d86dc770752a1e56bac0d5d1ffe221297b4cb427eefbce08a744f01645043c93e9f268275e0d37fedb8f888c5d54719a9f08ebbc3642bc26ae87688eb729fd963db361d976870addec546a67bec5a9ba3cd087b28d57345dde263a19d58235f4018c4f1fbba5b877f420e1e4478040000",
    ],
    [
      "ETag",
      "03+Nw5wF9khYpg03JVaqDA==",
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
      "Thu, 02 Sep 2021 19:21:06 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1630610362910"
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
      "92",
      "6f",
      "4f",
      "82",
      "50",
      "14",
      "c6bfcbe965b8f00f986cbec0b272a999e2d6d69cbbc20121e0d2bd179d737ef7ce25b3566df506ce39fccee5791ed8c34b9c07e0c02a8e5e4b14bbb308d5a32ea628cb5449ba153c970806a0621191f76b71be69588597149675f1248a5e7f9e6cbb5d22a4bfc68c81b38730c63490e03cef216719d29acfd332cb97556780da157a38f3a683f12df5190f743f9e0f876e6fd88783715a0c9862cb8affc7dae26040c257530c5160eea3d652089ea0af06daa6645991624df252f828a182ab0791e065c104e7359ad43aed5add6e9a76dd6cda8d4edd2430e53e5331cf899dcf481f28ae583ae55b72093601a22ac970585d37348e83ca882e0763cf6e55fabe02242d8c535cfe0d92de35a3cff0811d23f8ceb18c97b93a5137c307f7b7e328d3cfa3ae5dafff83908a923a21de60d49f79ee68a2b9c5d17b6fa7504e04a72025ea0ceb66ebd26adbe67bac575c474def719428d1009fd1df71172b7042964a3cbc011a2d3b327b020000",
    ],
    [
      "ETag",
      "Khr+v25pTjp55/XrpBEUjw==",
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
      "Thu, 02 Sep 2021 19:21:07 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` > ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1630610362910",
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
      "a5",
      "53",
      "5b6f9b3014fe2bc87bd9a426818410881475514a37b4346913d2aadaa6c43607ea8e608a4da7b6ca7fdf019a5e54a97dd813e69cef722ef603f923b2880c0913c94d09c5dda76bc9c801014d138cfeb88fd5bd1d8a98aba4bcee8edd63fbf2f26c344284a8588a6ef3145a4a960507355c2ddb4921cb9c1652b650a8e5b92dcbe9998e65f69cae6799c85390c65391fd41f695d6b91a763a7bef7622659202cd856a73b97d8a776ebb9dbc90d7c0b5eabcb6eca08beabc6f7a984a4eb590d968b5c4024a05c51ab654a458c23333625f5f4bb705ddb61304df0a0e94735966ba2a0b25b8cc62919445ad4a860fa42ef3c5812cfda93f098dc97c350b3f6fe8b6226fbe185419eb7501aa4cb571bc989f189b1cbdaea802b5312ebefb0bdfc050216391c25a441b63641c1ae3d91146abbf5fa569f60043d3e024080d0b4b89406991d5858494a55015f138abe0ed862a02d568d724d703d3a1966b7a2c66031ebbbd3e8b4d60cc65833eed31937b36d811038a3c5da9d72c9ac92cb2984bbbaedde776647a4ee40cba9e0b1e65838899bd01e30c654c8791dd01f95b080d4742e552896660e4621184fe3a5cac669371e8d76dc4148772d4145735f1b24e8d4d22e89dbe7655564874aaa61fcc427f319e84c1b9df2c7c0a09e577cb1b5c794c530588a605dd8286e244463834723a5f0661309f8da7c8a8b778ba472832fcf9f04c08eff27acabafe565e8e5dfbef01e7342d6bc46d732016d9ed0efe4fa18f12bf1182f7bb6193b395bfb8244d6801311490f18fb78fe03af1e133ddbf19c4e2ab411ba5f11fef1a5795092fa0b973625bd7d7b06d6760792ea9c1857e93ebf5ddfd702b8d4a11b690e9c78e9a3753cdaa4e95ea098449bc2ab360f60db3ff0041524e87b3040000",
    ],
    [
      "ETag",
      "Kzfsz4Tifcsguj2A8F4YYQ==",
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
      "Thu, 02 Sep 2021 19:21:07 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1630610362910"
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
      "000002ff2d90614fc2301086ffcbf995850d7081257c10437471129960348690d2dde6b0dbcdb61317c27ff73afdd25ede7b7af7a467f82ceb0c223894c5578bbabb2ad0ae5d91a26995357c35541b8401a01505936a327c19ca87e9ea701de363f57aa29fb77c3d9f3361e4075602a233e425aacc40f47e865a54c8cff67bdd4f64cc768d4be2d56679b74c39a82873c16a9b24378b640997dd6500473aa498a3c65aa21bd9683aa2b4b1b335a26a147a865a2dd1400ff78d4253db084de471e2cda65e108efd30f0c7e16816f80c2a92c2965433bb7d065e63c90a95d28965216040f7257be7fdf9cdf1c809edfed14567d13c69e2bd06ddcac9d4ff13b825276559d6ea160720057fc77d6921ca853278f905d27e37c46c010000",
    ],
    [
      "ETag",
      "l4/V/cK8Nb5IeMmXwoxYfQ==",
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
      "Thu, 02 Sep 2021 19:21:08 GMT",
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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb642d0e22d0a43b531490b608a915dd6420c6102316f929747af73abd467d7778df20658cd7356dbe143f8367d0a7061ab3715042ec5c73ddc9d85bc6fb50378355187fea66fdd4184819b5f7019336a2245f1fe66946302251746a61e94f3c5bb0f959f589ab82d54953832f51fc82c880d14ebf11119c592b5e37f34c1a16be4e72e172eaefe05ef4f685f77e942b6892e208b7975048ebb6667a6ca69abbc49d3c1c44a282d0916ee057486a9b6e46f2cb71610a2b9b36155decbd63f8ce074a0a43dbd69d665bed1ac362a928f1b3aad0f2f1c3c3ff054680df4a59f19acafbf6a985d008fcd5a74d5ff2fb7fccd38a57e0e717a3d9e21819040000",
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
      "Thu, 02 Sep 2021 19:21:08 GMT",
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
      jobId: "grouparoo-job-99-1630610362910",
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
      "85536b6f9b3014fd2bc8fbda04c8039248d19aa5748d94900d48ab6a9a906d0c750b9862932aaaf2df77314dd7aa52fb09dbf79c7bce7df08c1e7899a019223c7b6c587df8762f083a434ce10c5e7fb8852ff6e3c7bd1d0d1c796d26b7c27ecae67340f096257151e5ac274553532667bbb09fd5a2a9702d440f12f5a6d39eed0c2dc7b686ce606a5bc0932c4fd7bc7c00f69d52959c99e649bb9f0991e50c575cf6a9285edfcdfdc0ac6a71cfa892e67b491354a4f9b9e8f75c50acb828e7bb100c3492d5312b30cfc1c27f6642cedfa7ee735cf43300ef39659852d194aab50529a828539e35b5ce8a66cf48db7c7340a1b7f696914145de14655ce2829d1909563856878a1997c17663acfccb6db05944abad1f87cb2b6fb3e82fb7ebddc60f8d9b2b2ff00c8549ce34d7981be7fae6c305f41326152fb57ad43eb7ca2f0d5a7d1c4b4b0069c9ba60ec5a0eb627d694a4c4a5e9643826a9c5089910778c87c4a2d3111b258461e06951cdc2a5282d1703716ac7ce706cc5234a273121ee244ec880b9e3d426a364848e67e8a9e68a5d705909c9bb0ea19b6015797114ecfce522f27409296e7275d1196b0b78eb51418100faa4a6631be50294da76affcc80b16cb6875ed75135eb30cd343f808334e712e19a0710dcd53acde88041a86fcc5c6bb00b09ed8af5350a2d99f67d4f6bc75f1a6e5aff40806d8da55fa8bc22858f93fb59d13e21ae78d86ecbb03aac0f21dd406ae8f7f01094bda6541bf775e708bbaa780a5ac6625fd7a9a00d6812fffb5d3e20316561f64a4823bec0e95ad08ad59b7435c97fbc21e39136730461a5cab0f31d7199ebad6e66833b28295eaa5a26ef1a1d04eac91af2008c2f87dddade33ff3876bee78040000",
    ],
    [
      "ETag",
      "B7mNov5qv1T26sV/dYo1wg==",
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
      "Thu, 02 Sep 2021 19:21:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1630610362910"
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
      "92",
      "dd6e82401085df657a8b09fe942a8917686d4ba2d6225e348d312b0c8a028bbb4b0d1adfbdb3d4daa66dd2dec0ccf0cd72ce81236ce32c041b96f16a57a028af56a89e74e1a12c1225e996f34c2218808aad886c3b8de7d2ed1fb2de7217ed1a256ec521dc77bb44c8608d2903fb08518c4928c17e3942c652a4b58027459a2daace0055e67a38f53d777c4f7dca43dd8f67c3a1d31b0ee0645c1643a6d8a2e2ffb1363f19b0e14b0f23149805a8b5e4826f3050aeb629599a275893bc10014aa8e0eac14af0226782f31a4d6a9d4ead6e354dab6e36ad46a76e1298f080a99867c4cea6a40f14572cf1f89e5c824580a84a321c55d7571ac761654497eed8b75a95beaf00498be204177f83a477cde8337c60e708be732ce545a62ed4ddf0d1f9ed38caf4f3a85bc71ffc20a4a2a42e88ef8e0653df194d34373f7bef950ae544700a52a2ceb06eb6dad73796f91e6b9feba8e93db612051a1030fa3b1e620576c41289a737073377f07b020000",
    ],
    [
      "ETag",
      "8A2YyICznBbqfq2yekrzdw==",
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
      "Thu, 02 Sep 2021 19:21:09 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1630610362910",
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
      "0002ff85535b6f9b3014fe2bc87bd9a4264042c8458aba28a51d5b9a7484b49ab62931e640dd0226d8b48aaafcf71da0e945d5da278ccf7739373f905b9e856444021e6f4b28769f6e44408e08281ae32dcdbe87526c27a73f4a7d7266dd6481efeceec76344f08a25699a27d092a22c18c8d16ad98e0b51e6b410a285422dd3305aa6dd356cd3e8da9da16920514212cd78768bf46ba57239d2f583793b16224e80e65cb699489feef5bb8e9e17e2069892fa6b4f1d6da4fe81eb712218555c64e3d512332825146b48294f3087676a187c7daddde6346dc708bee30c2863a2cc5495174a3091453c2e8b5a958c1e489de78b03593a3367ea6bd3c56aee7fded0b4226fbe68546aeb7501b24c9476ea2dceb54d8e5ed75482dc6857df1ccfd1f0aa10114f60cdc38d36d68eb5c9fc447b066eb43fa56174010333f7dcf53513130a412a9ed5e9f83448a04ae5b165eedb495504aa50ab09aefb864dcd81310ca2a0cfa241b717440604c120e8f7683730d8d0022b0c80224f55ea358b66d804e80f2c9b0ecd90d2a8db0f6c931951c70c2ddb3059d80fbab6d1890c3a24fb23725f7005275ce642f2a66de4ca737d67ed7babf974e23b751911c5d69c34c95545bccc536191087aa7ae7d15e5029daa19b873dff12653dfbd749ab1cf20a66cb7dce2e0239a4840342d680a0a8a731162d3c8c562e9faee623e9921a39ee5c50121c9e8f7c333c1dfe5759755fdadbc6cabf63f002e6952d688bbe6404cb2df1ffd5f61e97beefcec7d89498ed5a2cc5f44e1aa370ae4e7caf17e91e6ca83080ac8d8c71b80e03af0f1933d3c1f04e303421fa9f01f178ec9ca8515d02c1e4feb321bb6650f2db3476a70a1dec47ae6e0d0e14aa352841432f55852f37caa86d5a1523e813088fb32af5bb5ff073b65d782c0040000",
    ],
    [
      "ETag",
      "anJdsoqAFKu/AG4jnbTEyw==",
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
      "Thu, 02 Sep 2021 19:21:09 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90614f83301086ffcbf9151270131dc93e38437409591cca126396a5c0816cc0415b5c90f0dfbda25fdacb7b4fef9e74844bd964e04352165d8f72b82950ef4d11a1ea2badf86aa9510816a0160593b23b5c257d0c71b0bffbe956c525cf12b758af9950e917d602fc11f212ab4c81ff3942236ae467a7939c2732a687d624dbdd7bf01c441cd49499601787e1e3260c603a4e169c29893047894d8a66642be98ca9de1a5b25eab6425b512f535430c373a390d4b74212d99cd8aee3d8aeb7703cd75978b72bd761b2a254e8921a86e337e03d9ab4a822bab22db80cc8b964f17c3ebf395e1aa3e33fba1934aa5749bc58a1d9b97cb8ff33782263a5d956cb1e2d4805ffc74ba9c1cf45a570fa055ccf39646d010000",
    ],
    [
      "ETag",
      "rqVwroYyUEQ5zq9gkfdb1g==",
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
      "Thu, 02 Sep 2021 19:21:10 GMT",
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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "f4",
      "5b4c27b896fdc14014241466d1f1d350acc008a080425d76f7995d63be3bbc6f906699e87b36b49568c01b90e9429f6773ef8c4d6b2c0424b0809e3a3037abd2f86471b45ef868cfef0ab188b9cc297607b7dc0c7e1dcbb60ee54b793b20671be518775ee45cd7b1ae282dfa804a466beec8e2b5dac48ea6cb7b00c320b728d7ecc5c516032506890ee3b8b9301fd751fb95c07d281089f3ca6826f79678d868b6539e849f9c1d77a94633261b64d6abe8c4d563d98dc1218574bfcbb96bd16b6d17ef32249a4fd0ea4a7ceca9c8dd163763fef4f47f811910d3b9ec44cfcac77675a9eb33f0579f0df22c1eff4d9176a2033fbfe177179219040000",
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
      "Thu, 02 Sep 2021 19:21:10 GMT",
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
      jobId: "grouparoo-job-101-1630610362910",
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
      "000000000002ff85536b6f9b3014fd2bc8fbda04c83b91a2354ae91a29212d21eda66942b6b950a704536c525555fefb2ea6e95a555a3f61fb9e73cfb90f5ec883c86332214ca48f1594cfdf76929133029aa6f89a973f6d90f7ce2eddb9997f48c7a3a7ebe1d3748a0851b314dd1719b494ac4a0e6ab2ddb4d35256052da56c61a296ebb82d77d07506aed31d74c6ae83440559b214f903d2efb52ed4c4b64fe2ed54ca34035a08d5e672fff66e1f3a7651ca1d70adec8f9a36ca28fb0bd5ef99e4540b994fb71b7450292823d85391a1877fd4989d7fccdd1674df4e117c101c28e7b2ca75ed0b5370992722ad4a93954c5e88f1f9ee4036ded29b87169759b5cfa39ceee1cc8aa9a6917e2ec0ba0cd62b6be15fae83d52c5cacfd6833bff256b3f67cbddcaefc8d7577e5059ea529cbc070ada9756e6e3e5e503f06a5456ed4c3fab9567eedd0e2f3606a024a2b6882d1d0195077e48c59c2863c1975fb2c7180b1111bf66997397cdc835ecc8022cf881a16cd653ea2b41ff77a9d28e6712fea31c6a251d277a241ecd2ee8075780c0e399e91a75268b810aa904a341d2277c122f4a230d8faf359e89912125a65faa2315617f0dea3c60211f49f9a8e75544854aadbbdf0432f98cdc3c5add74c780929e5cf9b479c7142330588a625364f43b99231368cf8b39577816033b1eb535091c9ef1752f7bc76f1aee56ff4100758dbd5e64b3661b0f07f183b27c42dcd2a0339340752a0e57bac0d5d1fff2012b7b4c9426eb65ef08b344f01245042cebf9e26824de0ebbfedb4f908c6dd471da5f18ecbc355adc24b689648987a5fd9bda1d31d9a7f55d3527f8af5bbfd53dbea1c7546d843ae5f4b6a361f2b6dc42af506c220cedf37ed3afe055ab819777b040000",
    ],
    [
      "ETag",
      "nrX/eoh0jgj1lNvg98wP7w==",
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
      "Thu, 02 Sep 2021 19:21:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1630610362910"
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
      "000002ff8d925b6f82401085ffcbf41512f0422d890f5e686ba256059f1a635618100596ee2e35c6f8df3b4bad6dda26ed0bcc0cdf2ce71c38c13e2d22706193262f158ae34d826aae8b05ca2a53926e252f248201a858426473ded90d1b7e3268cbb91d6d8e7ba13c79e8768990e1167306ee09e214b34882fb7c8282e5486b21cfaabc58d79d01ea58eaa11f2c46d307ea731ee97eba1c8f7bfdb10767e3ba1831c5d635ff8fb5d5d9801ddf2c30468145885a4b29f80e4335d23625cbcb0c4dc92b11a2841aae1f24825725139c9b34316dcb366da76939b6d5741a77b64564c643a6525e10bcf4492028ae58b6e007b2090e01a22ec9715c5f5f699c46b5135d8ea681d3aa057e05485b9c66b8fe1b24c15b46dfe103bb64f09d6339af0a75a5eec74fbddf8ea3503f8f1af602ef07211545754582d1c4f383de64a6b9d5c57bffa850ce04a72425ea106dabd569df3ad67bae03aeb3a6f7b84a546840c8e8f7784c15b831cb249edf0003228e257c020000",
    ],
    [
      "ETag",
      "3Q8jD2SgC5sQ1dbykrtEsw==",
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
      "Thu, 02 Sep 2021 19:21:11 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` > ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1630610362910",
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
      "596fda4010fe2bd6f6a595023e630e09a514dcd61281d498d0aaad606dc6ce26b6d7f1ae134511ffbde375c8a1a8c91366e73be6bc2757acd8912189587a5d4375f7e19247e48880a429be86c76290dcd22ff24a5f27e57a1a99f2f2673a1a2182352c41f332838ee075158318ae96ddb4e275492bce3b28d4310dab63bab6e19a86ed5a03d340a2802c99b1e20ae917529662a8eb07f36eca799a012d99e8c63c7f7cd76f2cbdacf825c452e82f3d75b411fa3bae27198fa964bc18ad9698412da0da404e5986393c5177d1e797da5d46f36e8ae01b16038d635e17b2c90b25625e242cad2ba54a86f744e5f9ec832cbd993709b5c962350f3f6e69de90b79f342ab4cda602516752fb1a2c4eb56d895e175480d86aebef5ee069f854f18465b061bbad36d24eb4f17caa3d01b7da9fda306cc0c0cc3ff543cdc4847620242b543a218d326852796899ff7a520d814ad46a839b9ee152b36f0ca224eac549df3e8e1203a2a81ff58ea91d19f1c001671701459e6cd4158b16bc701dc7ee27a6b17306561f12d37277b661f4acbe11274e94d83ddb305de7d822fb23725b310953264a2e58db36b20efcd0db84c16a3e19879e2a23a1d89a699b5c53c4f33c251689a037eada3751c6d1a999813f0fbd603c09fd73af1dfb0c521adf2daf71f009cd04209a56340709d529df61d3c8d962e987fe623e9e2143cdf2ec801064f8fbfe8910de95aacb52fd365eaea3fc0f80739ad50a71d37e1093ecf747ff575886813ffff6b6042db15a94f98b285cf55681fc5879c12fd23e0590400545fcfe06205805de3fd9c3f920180f087d84c4ffb870b1685ce20adac563b92ab3653b3dd3b2d5c14b5ac9573147293f9e4da3083914f2a1a4f67c9a86a9502d1e4118c47d99ab56edff01fdc75967c0040000",
    ],
    [
      "ETag",
      "T5s9fwaBtk/WfpWDb1tjXg==",
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
      "Thu, 02 Sep 2021 19:21:11 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90614fc2301086ffcbf951966ca0884bf80064110c4199628c8690aebb8dcd6e37db4e2084ffee75faa5bdbcf7f4ee49cff055d429849014f9778bfa7495a35dbb2246d32a6bf86aa836083d402b7226abe4e976d59f5cefcbf7d9e1318f8ff38fd1db7a3c66c2c83d5602c2336405aad440f879865a54c8cf763bdd4d64cc9e1a972c56afd14314735051ea82d566b99c4c97115cb6971e9494c498a1c65aa21bd9682a51da85b335a26a147a865a2dd14007778d5c53db084de471e2057edf0b86037f18f88361ff3ef0995424852da86678f302bcc792152aa603db42c080ee4a16cfbaf38763df196dffd1e9c9a279d6c48b0dba9d37a3bb3f8319392bcbb656b7d80329f83fe685853013cae0e517f279d1446d010000",
    ],
    [
      "ETag",
      "mbO5N2A+hjXCwJgRxHZ8VQ==",
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
      "Thu, 02 Sep 2021 19:21:12 GMT",
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
      "51",
      "6e",
      "82301800e0bbf4598c8032d99b85e18a031549d427f203050aa6545a105d76f7995d637e77f8be1164199532516d43397a477730ec6936dd8825766f95265d3e6f6edc31abe0d8d6a5c9faf4ebe113f7b02c8dda3c7c1651c2ba26165a4116d8d35d3504c190ef37ab8beb71556de178ed5d8b0efcecf075ddc95958da7a1eee3128c0be71328a41f55e15aeeb24bd58e1aab707b615be0d2dcdee3bf8c8493110767a280d2270ea5d3c8e1b32424df9213085e5c8b668441e9d53f5b606b217f3e8eaf3878e991ee7d0c819d1da2a1e3194c08aaab460faf2f27fa109a2a3601d95097b6e3717b63d417ff5137517f4f91f53e868877e7e016599008319040000",
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
      "Thu, 02 Sep 2021 19:21:12 GMT",
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
      jobId: "grouparoo-job-103-1630610362910",
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
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2bc8fbd8269090e625456b94d29529211b21ada66942c65ca857c0149b4e5595ffbe6bd374ad2aad9fb07dcfb9e7dc074fe48e5729999384e7f72d348f9f7e8b849c125034c7d7a09edcd957c3cbe9e62492fe577eb24acbf172b14004d72c49cbba809e146dc340cef7bb7ede88b6a68d103d4cd41b386e6f30769d311ec6c3d9c041a284225bf3ea0ee9b74ad5726edb47f17e2e445e00adb9ec3351bebcdb0f43bb6ec46f604ada6f356d9491f607aa9f0bc1a8e2a25aec77e8a095d0c450525ea0877fd434397f9bbbcf69d9cf11fcc01950c6445b29ed0b533051653c6f1b9395cc9f88f1f9ea4076deda5b451613455b5671454b38b552aa68ac1e6bb02ec3edc6f283cb6db85946fe368877ab2b6fb3ecafb6ebfd26d85937575ee8598a260518aeb5b0cecd2dc00beaa72015af8c7aa49fb5f27387fcf783d1049496d005e38933a683a9334bb264c2b2a97b96640e24c934999c513771d86c04a334018a3c236a58b412d56cec0e86ce7416433275e2913375e324a359cc5c27056702679064e4704afe345cc10597b590bceb10b909fdc88ba3701fac9691674ac8685ba88bce982ee0b547850522e83f351d74940b54d2edf683c80b97abc8bff6ba09af21a7ec71778f33ce682101d1b4c1e62968362205bddccb8d77816033b16fc7a024f39f4f44f75cbb78d5f2177a8403d47695f9925d14fac11763e788b8a6456b200fdd81d468f9166b43d7875f88c42dedb290ef7b2ffc41baa7103268a0621f4f13c126f0f1df76dc7c04e3eea38e5478c7e56152abb006ba25e2a6de67f668321c0e06c4801bf52ee69e8d8f6dd339744628a152cf25759b8f",
      "957662ad7c016110e71f98761dfe020878e0d77b040000",
    ],
    [
      "ETag",
      "Np7k/H2F8M+TsIJi+Cdm6A==",
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
      "Thu, 02 Sep 2021 19:21:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1630610362910"
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
      "02ff8d92dd4e83401085df65bc8584da8a95a417f44f4968ad942626c6345b18281558babbd8344ddfdd59acd5a889dec0ccf0cd72ce8103bc64650c0eacb2745ba3d85fa4a81e7411a0ac7325e956f1522218808aa5448e8b9dbf0a278fdb329cce5436180c17fdeeaed72342466b2c1838074832cc6309ced3014a5620ad453caf8b72d97406a87da587f330f0a6b7d4173cd6fd74e1fb6edf1fc1d1382fc64cb165c3ff63edf968c086af024c506019a1d65209bec14879daa6644595a329792d2294d0c0cd8354f0ba628273932666cb6a9b2dbb6dd954d897372d8bc89c474c65bc2478312781a0b86279c07764136c02445392e3a4b9bed2388b1b27baf4a6a1dd69047e05485b92e5b8fc1b24c16b46dfe1033b65f09d6305af4b75a6c6febdfbdb7114eae75143371cfd20a4a2a8ce48e84d46f3d09dcc34f77cf2dedf2b9433c12949893ac496d5e95e5ddbd67bae03aeb3a6f7384ad46840c4e8f7b8cb143809cb251edf00df030d607c020000",
    ],
    [
      "ETag",
      "FmwLbTMXqnTNPtiCCDUB8w==",
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
      "Thu, 02 Sep 2021 19:21:13 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` > ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1630610362910",
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
      "6d",
      "6f",
      "9b",
      "3010fe2bc8fbb2694d6202841029eaa2946e4c69d225a455b54d893147ea1530c5a65355f5bfef80a62faad67e0ab97b5eee1edb77e44ae431199148ecae2b286f3ffc91113920a0d90eab0b3df52edcf594025793ef92e5579f8ffdc9788c0851b314cb8a143a4a562507355aafbabb5256052ba5eca050c7a476c71c587460526bd0f74c8a4405693213f915d22fb52ed4a8d7db9b777752ee526085505d2eb3c77aefa6df2b4af907b856bd979e3db451bd775c0f53c99916321faf573841a5a0dc40c6448a333c51e3e8cb4bedae60597787e01bc181712eab5cd773a1049779227655d9a892d11d69e67cf64156fecc9f86c674b19e871fb72cabc9db4f0653c6665382aa526d1c2f1727c6b640af4ba6406d8df36ffed237b054ca44a4b011f1d6181b87c6647e84d59869d81abf2a4a2dc0e22c380942c3c46162505ae4cd28218b52a8c778882b787d4a358169346c9b1b970e9839a45e94442e4f8696132514a26818b90eb322ca3d1bec3802863c5dab372c96cbdced736653d7f5c01cc6103bb1472ddbf1623b71ddc84bb815b9b1eb8049ee0fc8df52683812aa904ab49191f36510fa9b70b99e4f27a1dfac91308ce5a81dae5ee2f99c1a9744d01b7bddd75d21d1a9ce3f9887fe72320d8333bf3df219ec18bf5d5de3a1272c55806856b20c34942732c6d0c8e9621584c1623e9921a339c7d33d4291d1cfbb2742785b3429ebe6b7f61ad88dff1e70c6d2aa41dcb41f0453b83ff8bfc2511dc19b027ddaa71ddaef980e2afd4628def45684fc58fbcb0bd29696904009397fff1220b869bcff62f7af07c1f87ed04769fc8f778eabda8597d0de3d91359bb66cdbb52cc7210db8d4af7a8ee5ed43ae356a45c820d70f2bb5afa7ceac6955ea1184",
      "4dbc32f360fe15bbff00f0155c0bbf040000",
    ],
    [
      "ETag",
      "OtC9Y7UC0ecsAJoank+FEA==",
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
      "Thu, 02 Sep 2021 19:21:13 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1630610362910"
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
      "c1",
      "4e",
      "83",
      "40",
      "10",
      "86",
      "df",
      "65bc420294a092f4204a2c09a916edc934cd0203d20283bb8b8610dedd59f4b23bf9e7db992f3bc3b5e94b08216feaaf11e57453a33e98224335b65af13550af102c402d6a2653f952f5b74d927757c7f7f1290a769377d86e9950c5277602c219aa06db5241f831432f3ae467e7b35c2732a6a7c124c9fe3d7e8e330e3a2a4db03fa6e94394c6b09c160b2e946758a1c4be4033729074c14227c656896e68d15634ca0215acf0daa8258d8390443627b6ebf8b61b6c9cc075368177ef3a4cb65408dd50cff0f10d788f262dda8c7ed8165c06e45ab278b59edf1c7bc6e8f48f469346f52a89172b343bfd3be7cfe0918c95665b2d47b4a010fc1fbb4643588956e1f20bc5e54d046d010000",
    ],
    [
      "ETag",
      "LrOfn7iIbmk044eDB6Hy2Q==",
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
      "Thu, 02 Sep 2021 19:21:14 GMT",
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
      "02ffedd34b7282300000d0bb642d0e9f8142777c44943a6afd34b0610204089140430069a777afd36bd47787f70d5096e1be4f444b3103af6046aab5cc9661673ade54e7a43fd3553aca732cda34b3636e6d078b54a7bd7dd828f9ac0893a15ba8e983e2db2c1d7538a891d486fbb1b62994e88eb457633b9e8a342c65b8c179562847a551cd32eb43c35735e7ee706765f9fee756d6829a7a92bb6b74e5fd2c09af1c20faba06505c2a444f1f6cf6cd83e79daf1d775c1198d06022885935bacdba4888db4c09232feb8971af7b8b8a4b1ed7113f227a839341194dd21ac2fdf2e9e9ff020b80ef1de1b84fc863bba65bd602fcd54fc4dce1c77f07238e39f8f905a11c355819040000",
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
      "Thu, 02 Sep 2021 19:21:14 GMT",
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
      jobId: "grouparoo-job-105-1630610362910",
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
      "00000002ff85545d4fa34014fd2b64f6d5b6605ba04d9ab5a9a8dd6de92ea51ab3d990617ac151ca2033685cd3ffbe7706eb6a4cd62798b9e7dc73ee073c933b5e6ec998a43cbf6fa07efa722b52724440d11c6fa345f9e87cab9c6bfbfbb9ffc767fd531e6df3c904115cb324dd550574a4686a0672bc5977f35a3415ad85e860a28e630f3b8edbb75dc7eebbc723c746a284225bf0f20ee9374a5572dceb1dc4bbb9107901b4e2b2cbc4eef5bef770dcab6a710b4cc9de7bcd1ecac8de27aa5f0bc1a8e2a29c6cd6e8a0915027b0a3bc400fffa8dbf4e47dee2ea7bb6e8ee007ce8032269a52695f98828932e379539bac64fc4c8ccf372f641d2c82596c315134bb3229e90e8eac2d5534514f155867d16a69cdc3b355b49cc6f35598ac6717c172da9dad169b65b8b6ae2e8228b0144d0b305c6b629d98538807d4df8254bc34eab1bed6ca2f1d9a7f1c8c26a0b484369878b64b1ddf1ea559eab1ccef0fd3cc8634f5536f48fba9cd4603186c53a0c833a286454bacd987a177ecb889ebb98364c0b251e28f6c3fe9bbcc77323bcb52df23fb23f2587305a75c5642f2b643e42a9ac74112479b70368d035342469b429db6c674016f3d2a2c1041ffa969afa35ca0926ef73c8c83683a8be797413be105e4943dadef71c6192d24209ad6d83c05f5526cb161249c2e8353049b89fd38042519ff7a26bae7dac59b96bfd2631ca0b6abcc93ace3681e9e1b3b07c4252d1a0379685f4885966fb03674bdff8d48dcd2360bf9b909a26bd25e4590410d25fb7c9a083681cfbfb6c3e62318771f75a4c2332e0f935a85d5d02e1137f5beb007de60e0996f55d15a7d88b9fef0d0369d4367841d94eaa5a476f3b1d256ac91af20fd47d984a169d7fe2f618ecf977b040000",
    ],
    [
      "ETag",
      "RLnw1Jp1Y0KG8z8c3DiRdg==",
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
      "Thu, 02 Sep 2021 19:21:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1630610362910"
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
      "92",
      "d1",
      "4e",
      "c2",
      "401045ff657cb4c456a06a131e50514910104a8c1a4396765a8a6da7ec6e2584f0efce5644a326fad2ce4ccf6cefbded065e923c040f6649bc2c51ae0f62d477a618a12a53adf85650ae102c402d6226071377ae8674df5c1e8a49181f351e1f668d55abc5840ae69809f036102598860abca70de422435e0b282db37c5a7516e8756186637fd4ed5f739f5168fafea4d76b9ff73ab0b5f68ba1d0625af1ff587bde5ab0a0d9082394980768b414921618e8aeb1a94456a4585354ca00155470f5209654164212d5785273ec66cd71ebb6ebd875f7f8ccb1994c29103aa19ce1c9980582262dd211add826b80cc8aa64c751757de57112564e4cd9edfb6ea312f815606d5192e2f46f9005cf057f870f6c97c1774e6454e67a4f5df506eddf8ee3503f8fba6cfb9d1f84d21cd51ef1bbb79db1dfbe1d1aee79e7fd7cad510d2571920a4d888edd386d9eb8f67bae1764b2e6f7785a96684120f8f7b84934789148156edf00016029167c020000",
    ],
    [
      "ETag",
      "OU6hsPoW5q+aUdg/4ZYb4w==",
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
      "Thu, 02 Sep 2021 19:21:15 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` > ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1630610362910",
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
      "2b",
      "91f7b269b475ee6da58a5525dbc27a8136058d6d6aedc40986340eb153c450fffb4e12ca4568f094e89cef726ebe47d73c8b501f519edc94acb8fb7025283a404c9104a217f47834bebdfe7beedda69f7f9c1d9f9bcbc9f674300004af58926cf294b5a4288b90c9fe72d14e0a51e6a410a205422d1d3b2ddd31b1a363d3317a3a06a264693ce6d935d02f95ca65bfd3d99bb713219294919ccb7628368ff1ced6e8e485b862a1929d979e1db0919d775c0f531112c54536582ea08252b262c53684a750c31335a25f5e6ab739d9b413006f79c848188a3253555d20118a2ce64959d4aaa87f8fea3a9ffda08537f64681369a2da7c1c735d954e4f5278d486db52a982c53a57d9dcf26da3a07af4b22995c6be7dfbdb9a741a810314fd98a476b6da01d6ac3e91144a582ead6daef1263934174ec4ffc40d3a19a8849c5b3ba9680d09455753ccccb7fbda68a40143836c9958b1da277718fc6d40de3ae69d318334abbd4b5894971d8b39815514680a72af59a453291f50ce6c4616c5bc48e5c4a22d3a2badd75ac181bc4d17baeed76e3887429da1da0db822b76c4652e246f6686cee77ee0ad82f9723a1a065edd464c602e474d715513cfeb54d02480dee86b5765b900a76a01fe34f0e6c351e09f79cdcec72c21e1dde206b61e9354324093826c9862c54444303474325bf8813f9b0ec7c0a81779b24748d4ff75ff4408eef27acaaafe565e8e55fbef0167242d6bc4b6f9413adaed0efeaf10f8136f110c27276fab18d8c02d6cb4743bd08dbe6ef675ab8d31be00f13f4084eb6f74d1e9d29bff444d68ce6256b02c7cff2e005c27de7fc5",
      "fb1705607853e003d7a9389c61282b97b060cd39f24ddd7cc3b65cdb720d54830bf52ae758783ff74aa352641b96a987969a17558db14e95f2110449b8a2a93ffd06d97f859fc367d3040000",
    ],
    [
      "ETag",
      "ZbJCLwkzWEwl+KVJW3UMvQ==",
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
      "Thu, 02 Sep 2021 19:21:15 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1630610362910"
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
      "6f4fc2301087bfcbf9764b36d04597f0029408c9243a454d0c21a5dcfe60d79b6d872e84efee75faa6bdfceee9dd939ee0b3d67b486157975f1d9afea244f7e48b1c6da79ce5ab256d110240274a268fd59baeca9f577567bbf65d6a7df5b090d3c984092b2b6c04a427286a547b0be9c709b468909f6db76698c898eb5b9f2c572ff3fb79ce41437b1facd659369d6573386fce011c6897638106b5443fb2357440e996ded68aa655185aea8c440b033c344a435d2b0c51c8491847491827e32889a37132ba8923261549e16ad20caf9f81f7387242e5f4cdb61033608692c58be13c723cf2469b7f74d63bb48f8678b145bff3f23afa33b8256fe5d8d6990e039082ff63513b480ba12c9e7f01dd8e17986d010000",
    ],
    [
      "ETag",
      "vhWnhgxVlDsupXcnn5MHcA==",
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
      "Thu, 02 Sep 2021 19:21:16 GMT",
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
      "82",
      "300000d0bb64adce5050a1bb4641aac10f4965649309108ca824fc94d8e9ddebf41af5dde17d0396a6bc69682bcfbc04ef40b33767948e56ca86f37b51909a6cb6a69454176117906ebac90ae8ea25de4f163614c3d8980832b35c9158863c477bbd2c9a45b515bb99ff713767eb14e5ad617eda6dd64e37487ff50c1971135d7c35d9e6c7aac22a762c687a793e1c97f4b44e6478bca15dd91dfdabcd4a76104164b8436c2f3014c16adaa785759fe32a63c9fa4020a20fd8d3cc9059a72e28b273e4e09224de2e0c6e2611079c8f6f7e943297c99577d6ea3a7a79f9bfc000f05e9d6aded0d373bb39769c01f8ab4f5badf8f33fe4ace635f8f905e1bd9e0d19040000",
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
      "Thu, 02 Sep 2021 19:21:16 GMT",
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
      jobId: "grouparoo-job-107-1630610362910",
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
      "6b",
      "6f",
      "9b3014fd2bc8fbda0448c8538ad62ca52b52423642da75d3848cb950b704536c3ab555fefb2ea6c95a555a3f61fb9e73cfb90f9ec91d2f12322531cfee6ba81e3fdd8a989c105034c3d7351ffcb8fe2217e6aa08caa7cbf153e6963fe7b3192278c3927457e6d091a2ae18c8e976d3cd2a5197b412a283893ab635ead8c3be35b4adfeb037b12d244ac8d3252fee907ea35429a7a67910ef66426439d092cb2e13bbe3bbf9d033cb4adc0253d27cab69a28c343f50fd9c0b461517c56cbb4107b5842a821de5397af8474de2d3b7b9bb9ceeba19821f3803ca98a80bd5f8c2144c1429cfea4a6725d367a27dbe3a908dbb7417a1c1445eef8aa8a03b383112aa68a41e4b30ce83f5caf0fcf375b09a87deda8f368b0b7735ef2ed6cbedcadf1857176ee01a8ac63968ae31334ef5cdc70bea2720152fb47ad83c37ca2f1df2de0fa621a0b48436188dac21b5c7d6244ee3114bc7fd419c5a10c7e37834a0fdd86213079c24068a3c2daa59b41085336196d373ecc89a38a3c819b024a2bd491cd90e8b870c5bddb781ec4fc89f8a2b38e3b21492b71d22578117ba51186cfdc53c74750929ad7375d61a6b0a78ed51618108fa4f4dfb26ca052a35edf6fcd00de68bd0bb74db092f21a3ec71738f334e692e01d1b4c2e629a85622c186117fbe72cf10ac27f6ed109464faeb99343d6f5cbc6af9911ee2001bbb4a7fc9260c3cffabb673405cd2bcd69087f6404ab47c83b5a1ebfd6f44e296b659c8f7ad1b5c93f62980142a28d8c7d344b00e7cfcb71d361fc1b8fba82315de7179986c545805ed12715def0bdb190d1d6b4234b852ef62039df9b8f14d46d841a15e4a6a371f2b6dc56a79046110e7efeb76edff02b4effaff7b040000",
    ],
    [
      "ETag",
      "Oi5XYBsC/MnRpzV8zgEpZA==",
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
      "Thu, 02 Sep 2021 19:21:16 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1630610362910"
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
      "92",
      "41",
      "4fc2401085ffcb78b424ad60c1261c8a809200562807630859da2914b7ddb2bb9510c27f77b6221a35d14b3b33fd66fbde6b0ff092e63178b04c57db12e5fe6285fad114135425d78a6e85c8158205a8d98ac8cef8a95fda97db4007b2dbe29af5ec60bd6bb78950d11a3306de01921479acc07b3e40ce32a4b548f032cb17556781de1766380d2783f11df599884d3f9e0d877e67d883a3755e8c99668b8affc7dafc68c1462c2798a0c43c42a3a5906283911e189b8a6505c79a12a58c504105570f565294059342d4685273ec66cd71ebb6ebd875f7eac6b189e422623a1539c1b32909042d34e313b1239be01220ab921c27d5f595c6695c3931e5601cba8d4ae05780b42529c7c5df20095e33fa0e1fd82983ef1ccb4499eb33d51f3ef8bf1d47a17e1ed5f5c3de0f42698aea8c8483516f1afaa3c070f393f7ce5ea30aa4a024159a101dbbd1ba6ebaf67baeb7c2644deff1b42cd18288d1ef719f6af012c6151edf00bbe20f747c020000",
    ],
    [
      "ETag",
      "BNYFu0+qPtPrD8ltaE0Phw==",
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
      "Thu, 02 Sep 2021 19:21:17 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` > ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535b6f9b3014fe2bc87bd9a4360142421229eaa2846e6c296913d2aebb2831e640dd02a6d8b4aaaafcf71da0e945d59627cc39dfe55cec4772c3b3900c49c0e3db128a870fd722200704148d31da3fd3a7d9f4bb79697ef37efcbc1fcc0cc33c1b8f4688e0154bd2344fe0508ab2602087ab652b2e4499d3428843143a34f4fea1d1ebe83d43eff4cc81a123514212cd787683f42ba572396cb777e6ad588838019a73d962227d8eb7efcc765e886b604ab6df7ab6d146b6f7b81e258251c545365a2db1825242b18694f2046b78a186c1e7b7da2d4ed3568ce03bce803226ca4c5575a1041359c4e3b2a855c9f091d475be3a90a5337326be3699af3cffe386a61579f349a3525baf0b9065a2b4e3c5fc44dbe4e8754525c88d76f1d559381a860a11f104d63cdc6823ed481b7b538c3e6968bf4b5def008667ee89eb6b06961382543cab8bf169904055c8d3c0dcf77baa0854a165935cdb7a8f1a7d7d104481cda27ea71b443a04413fb0bbb413e86c608115064091a72af59a45339199601a1058d406cbe8f4008cc8a6fdae6ee3918516b50c1c9bd90942b23d20f7055730e5321792374323170bd777d6fe62e54dc6be53b711511cccb429ae6ae2759d0a9b44d07ffada56592ed0a9da80ebf9ce623cf1dd73a759fa0c62ca1e96b7b8f6882612104d0b9a8282e244843834723a5fbabe3bf7c63364d49b3cdd212419fe7a7c21f80f793d65557f2baf9e55fbef00e734296bc45d732006d96e0ffead703c9b8ff76bb4ba88d8fe41105ef446819cad9cc52569420b88a0808cedbf0108ae13fb1feceef120189f0ffa4885ff78e198ac5c5801cdc5e3695d62c3b66cdbec0e480d2ed4bb9c65f67713ae342a454821534f2d358fa71a589d2ae5330893785f3cd7fb82d9bfd82a6575be040000",
    ],
    [
      "ETag",
      "8Q0DnDK2Y2JNXZw9L112QA==",
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
      "Thu, 02 Sep 2021 19:21:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1630610362910"
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
      "00000002ff2d90db4ac3401086df65bc6d30072c1ae88595500ba56a6ce98594b24d2631cd61d2dd892584bcbbb3d19bdde19f6f673e7680b2685208e15ce4d70e757f97237fd82246d3556ce46aa93108334056b990ecbd65c17dc9917e480ff1f65aeeca55735b2c8430c937d60ac201b202abd440f83540a36a9467a7939e260ac67d6b93f57617ada258829a521b6cf79bcdf37213c1781c6770a1738c196a6c12b4235b4d174c786d6d8daadb0a1d439d4ed0c0044f8d5c53d72a4de448e278eea3e3cd0377eeb9c1dc7ff25c212b4a1417d408bcff04d9c3c4aa8ae926b6e009a0a752c4b3e9fc91d8b746c77f74d9339a774db2d8a0dd19f8ee9fc10b592b165bd61dce2051f21faf054398a9cae0f80bb577f2de6d010000",
    ],
    [
      "ETag",
      "t1Of3/ktEr5dWRNqkTkGnw==",
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
      "Thu, 02 Sep 2021 19:21:17 GMT",
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
      "cb",
      "72",
      "82",
      "30",
      "18",
      "40",
      "e1",
      "77",
      "c9",
      "5a994a05a13b81520b6881a912d964b8fc0ac6700919019dbe7b99be46fdd6677b1e28c932e83a226a0a157a436322eb5226b98d66587d69624bed1d8b2ac58730e774ac1da5d7d2901a27dc81290c7a29fa422d1d120c637c3b6d3691bd4eaf2210b9ebe338b8687e9a57511b464a4d3cd75f99fa29c44b93d5b1265fcda255a16477fae9392406f9fdb05df1e3b5c52f8d48165544fd9db22ca3b5917e4d055fdac0b02cbaeee61ad5de69333fda1fe092abc76ddcf05dcace403c969def837777b88bf763ed79431eb2f6bbafec39f3954dbc909e9efe2f3443303425878e94d3edaf8aaecfd0dffa448c0d4cff1b9070e0e8e717aac1191819040000",
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
      "Thu, 02 Sep 2021 19:21:18 GMT",
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
      jobId: "grouparoo-job-109-1630610362910",
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
      "6b",
      "6f",
      "9b3014fd2bc8fbda2450f296a2354ae88a94901548ba6a9a90712ed42dc1149b4c5995ffbe8b69ba5495d64fd8bee7dc73ee8317f2c4f32d199398a7cf1594872f8f22261704144df1757e7f7db7f9511c86c19f7c1566f3bd7c2a36b793092278cd92745764d092a22a19c8f13a68a7a5a80a5a0ad1c2442dcb1cb5acbe6df62dd3ee5f8e2c138912b264c1f327a43f2855c871a773126fa742a419d082cb3613bbb7f7cefeb25394e21198929df79a1d94919d4f54bf668251c5453e5907e8a0925046b0a33c430fffa8dbf8ea7dee36a7bb768ae03d6740191355ae6a5f9882893ce16955eaac64fc42b4cfb303099c85330b0d26b26a974739ddc185b1a58a46ea508071edaf9686eb5daffce53474575e14cc6e9ce5b43d5b2dd64b2f30ee6e1cdf31148d33d05c63625ce99b8717d4df82543cd7ea61fd5c2bbf76c8fd38989a80d2129a603430fbd41a9aa33889072c19dabd3831218e87f1a047edd864a32e74b73150e46951cda2b9c807802ded0e93c88aed24ea32b0a39826bda86bf6ec81b5053632fbe478417e975cc19ccb4248de7488dcf96ee844a1bff666d3d0d12524b4cad4bc31561770ee51618108fa4f4dc73aca052ad5ed76bdd0f1a7b3d0dd38cd8417905276089e71c609cd24209a96d83c05e5526cb161c49b2e9d3982f5c4be9f82928c7fbe90bae7b58bb396bfd1431c606d57e92f0942dff5be693b27c486669586ec9b0329d0f203d686ae8fbf10895bda6421b76bc7bf27cd930f099490b3cfa789601df8fc6f3b6d3e8271f751472abce3f23059abb0129a25e2bade57767730bcb40744834bf52166f747a7b6d539ea8cb0835cbd96d46c3e56da8855f20d84419cbfa7db75fc0b2ca6bbce7b040000",
    ],
    [
      "ETag",
      "DYFWVXpy8SznOTlDvskpVQ==",
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
      "Thu, 02 Sep 2021 19:21:18 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4e83401085df65bca50968454be205d5561b6bed0fbd324db3c2d05217067717b5367d7767b156a3267a0333c337cb390736f090150904709f2d1e2b54eb83059a912dc6a82b6934df4a2a34820368c482c9eb51fafa22c3479dd23a8f5a290ddbcbeee8ec8c091d2f3117106c20cd50261a82bb0d1422475e8b49567931af3b07ccbab4c34934ee0d2eb9cf29b1fd60daef87ed7e07b6ce7e311146cc6bfe1f6bb3ad032bba1f638a0a8b18ad9652d10a63d3b336b5c84b890d4d958a51430dd70f168aaa5228a2064f1a9edb6a78fe91eb7bee917fd8f25c2625c5c26454303c9db0403064841cd333db049f015597ec38adaf4f3cce92da892d7b83c86fd602bf02ac2dcd24ceff0659f052f077f8c076197ce7444e5561f654b77f1bfe761c87fa79d44518757e10da70547b24eadd7426517833b4dc6ce7bdbd36a8878a38498d3644cf6d9e1e9ff8ee7baee764b3e6f7044655e8402cf8f7b8ca0c04a9901ab76f5b323f1e7c020000",
    ],
    [
      "ETag",
      "KQfzxlAqsfoymT9foPBhFQ==",
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
      "Thu, 02 Sep 2021 19:21:19 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` < ? LIMIT 1",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1630610362910",
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
      "a5",
      "53",
      "db",
      "6e",
      "9b",
      "40",
      "10fd15b47d69a5d886601bdb92953a366d887c496c9ca86a2b7b7719c826c01276711545fef70e10e7a248cd439f5866ce99736666f791dc89342003c244745f40fef0e95632724440d308a3e9d9f9e96e351bcd1ceb7462a5e1acb81edd5d0e878810254bd1248ba1a16491735083f5aa19e5b2c8682e65030b352ccb6c585ddbec5aa6dd3dee5b261215c4e154a47748bfd13a538356eb20de8ca48c62a099504d2e93e7786b77dcca72790b5cabd65bcd16caa8d607aa27b1e4540b990ed72b745028c837905011a387176ac0bebeaddd1434694608de090e947359a4baf48525b84c4311157955950c1e49e5f3d581acdca93bf68df1623df73f6f695292b75f0caa8ccd260755c4daf8b65ccc8c6d865a375481da1ad767eed2353094cb50c4b011c1d6181a27c6683ec168f9f7ab304d9b6368eacd3cdfb0d04a004a8bb432e253164369e26958defb1d9504aa51ae4e6e1cb34bad9ed967217378d8b33b2c3481b11e733ad46626efb7a11d30a0c8d365f58a45539976da5dabdf63c71d0b984d6ddee3d077ecc0844e10f443db6a0303873a01d91f913fb9d030112a934ad40323d74bcf7737fe723d1f8f7cb76a23a43894496dae6ce2b54f8d4d22e81f7dedcbac90a8544edf9bfbee7234f6bd2bb75ef81422ca1f56f7b8f290c60a104d739a80867c26031c1ab958ac3cdf5bcc475364545bbc38201419fc7c7c21f80f5935655d7d4bad6ebbd23f00ae685c54885d7d2016d9ef8ffeaf42074bfc46085ef09a4d2ed7eef207a9434b082187947fbc7d0457898f1feae1d120189f0dea288dff78d9b82a55780ef5a5134965b066b79dbe6d774905cef5bb5cbb671da65bd6282b4202a97e6aa97e34e5b0aa54a19e4198c4bb32f7e6df31",
      "fb17f5b6d5cdb6040000",
    ],
    [
      "ETag",
      "nHJBvSMAM71BD1nfMuWAkQ==",
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
      "Thu, 02 Sep 2021 19:21:19 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90dd4e83401046df65bc1422484394a417ad215a25b5c53631314db38501a9c0e0feb4a984777716bdd99d7c7376e6647bf8aada1c223854e5b74179b92a51af6d91a232b5567c75d42a0407508b92c9893915727d53563fa7974df3fc7e6dceabd7d974ca84ca3eb11110f5505458e70aa28f1e5ad1203fdbefe53891317de96cb2586ee2c738e5a0a1dc06cb6d92cce6490cc36e70e04887140b94d866684776928e98e985b555a2e96a74151999a182111e1ba524d30949e472e2fabee7fa61e085be1784b7f7bec7644d99d015b50c6fdf80f768d2a24ee9ccb6e03320c792c58bf13c711c58a3dd3f3abf68542b49bc58a1dd39b9f3fe0c1ec85a69b6d5d2a00399e0ff78aa344485a8150ebf36fc1bb66d010000",
    ],
    [
      "ETag",
      "4uvfrQ/gizvKTmJX+uwPOA==",
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
      "Thu, 02 Sep 2021 19:21:20 GMT",
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
      "0000000002ffedd34b7282300000d0bb64ad8c1f7ee9ae018d8a12193e221b063141a122120442a777afd36bd47787f70d9234a59cc7cdbda025f8002299412995ac4a4766971f4d35b1e57415894f793f49366ce2055f01ed8c0b3e847c38a06a1e618f65ebfcbe1781588e4f67d51eec951f6dc769b8acebac655bbf6bed9962388237e39e955a34c8918249407a48b0b32c368fa37fefa699d62c76a49d9a2deae173f108a875369016903c363b86c44dc3cad62525be3256ada8c759b8c9b1fa2cb2fc408a8bce778ea557268fe6c3f0685d4d9553a886a7121d95a2b7d7b5ecde2091dedefe2f3002b4afae35e5f1f5b57dae4038027ff5e34654f4f51fd1a4a635f8f9053727a15819040000",
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
      "Thu, 02 Sep 2021 19:21:20 GMT",
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
      jobId: "grouparoo-job-111-1630610362910",
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
      "6b",
      "4f",
      "a3",
      "40",
      "14fd2b64f6ab6da1f4419b346bd3a23669a90b54d76c3664182e384a1964065d63fadff732585763b27e6266ee39f79cfbe085dcf322215312f3eca186eaf9db9d88c9090145337cad6fcfdcebe59fdd252b2fcfe1679f97c1fdcdd36c8608deb024dd973974a4a82b0672ba0bba5925ea925642743051c7b2ac8e35b2cd9165daa3fec4329128214fd7bcb847faad52a59cf67a47f16e264496032db9ec32b17f7bef3df67b6525ee8029d9fba8d94319d9fb42f57b2e18555c14b35d800e6a0955047bca73f4f08f9ac4a71f737739dd7733043f720694315117aaf185299828529ed595ce4aa62f44fb7c772081bb7617a1c1445eef8ba8a07b383112aa68a49e4b30cefcedc65879675b7f330f575b2f0a1617ee66de5d6cd7bb8d1718d717aeef1a8ac63968ae31334ef5cdc30bea2720152fb47ad83c37caaf1d5a7d1e4c434069096d301a9b236a39e6244ee3314b1d7b18a726c4b1138f87d48e4d3619c0208981224f8b6a162d4461dbd44ad2348ee878604783c499448e93a611b5693ab480c1706c92c30979aab8822597a590bced10b9f657a11b85fece5bcc43579790d23a57cbd65853c07b8f0a0b44d07f6a3a34512e50a969f7ca0b5d7fbe0857576e3be13564943d070f38e394e612104d2b6c9e826a23126c18f1e61b7789603db1cb635092e9af17d2f4bc71f1aee56ff41007d8d855fa4b82d05f79e7dace117145f35a431edb0329d1f22dd686ae0fbf11895bda66213f76ae7f43da271f52a8a0605f4f13c13af0f5df76dc7c04e3eea38e5478c7e561b2516115b44bc475bdafec816399ce806870a53ec5fa7df3d8b626479311f650a8d792dacdc74a5bb15abe813088f3f774bb0e7f01bd1618ec",
      "7b040000",
    ],
    [
      "ETag",
      "uhFEWDxUPcpPGeX2ipSkYw==",
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
      "Thu, 02 Sep 2021 19:21:21 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4e83401085df65bca509584525e94555d41a5afb434dd434cd1686960a0cdd5d344dd37777166b356aa23730337cb39c736003cf69118307b374beaa50ae0fe6a807a618a2aa32adf85652a1102c402de64cfae1ede37374bd0896f75434570fb11fcf1e06ad16132a5a602ec0db409262162bf09e3650881c792da2acca8b69dd59a0d7a5198ec261a777cd7d4eb1e97be320689f073e6cadfd622cb498d6fc3fd6265b0b96341b6282128b088d9652d21223dd313695c8cb0c1b8a2a19a1821aae1fcc2555a590440d9e341cc769386ed3761dbbe91e9e393693194542a754303c1eb140d0a44536a457b6092e03b22ed971525f5f789cc6b51353767aa17b540bfc0ab0b624cd70fa37c8821782bfc307b6cbe03b2772aa0abda7ae82bbf66fc771a89f475db643ff07a13447b547c24ed71f85ed6edf70939df7f3b546d597c4492a34213af6d1e9f1896bbfe77a41266b7e8fa765851644827f8f9b548397884ce1f60d94706c007c020000",
    ],
    [
      "ETag",
      "ETJZkcGhLjVon3qYdEdbYQ==",
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
      "Thu, 02 Sep 2021 19:21:22 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1630610362910",
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
      "e9",
      "4f",
      "db",
      "30",
      "14ff5722efcb26d136476fa96255c958580f4853d0b44dade3be04431207dbe98450fff7bd24944368f0298edfef78971fc82dcfb66448421edf1520ef3fdd88901c11d034c6dbb1ddf1ce76d7a7f0637661aa829e4dbbfa261e8d10c14b96a2699e404389423250c3d5b2194b51e4540ad140a18665d90dabeb985dcb74baf6c03291a82089a63cbb45fab5d6b91ab65a07f3662c449c00cdb96a32913eddb776762b97e2069856add79e2db451ad0f5c8f13c1a8e6221bad969841a140ae21a53cc11c9ea9dbf0eb6bed26a7693346f08e33a08c8922d3655e28c14416f1b890952a193e902acf1707b274a7ee2430268bd53cf8bca16949de7c31a832d66b09aa48b4f1cd5fcc8c4d8e5ed75481da1857df5ddf35f04a8a8827b0e6db8d31328e8df1fcc478066e8cdf85693a0c03536fe6058685096d41699e55e904344ca04ce5b165dedb499504aa51ab0eae7b66975a7d731046618f457da713462684613fec75a8139a6cd086f636048a3c5daa572c9a896c4bbbd069dbc0281bd8103a604611359dc86156af4f3ba10910f659a747f647e4afe41a4eb8ca85e275dbc895ef05ee3af057f3c93870ab32228aad39a9932b8b7899a7c62211f44e5dfb32ca053a9533f0e681eb8f278177e9d6639f424cd9fdf20e071fd14401a2a9a429689033b1c5a691f3c5d20bbcc57c3c454635cbf3034291e1af876742709f575dd6d5b7f4eab62bff03e092264585d8d5076291fdfee8ff0acbc0f7e6a7ef4b8c73ac1665fe200a57bd5620172bd7ff49ea2b1f229090b18f3700c155e0e3277b783e08c607843e4ae33f2e1c53a50b93502f1e4fab326b76bb6fdb833ea9c052bf89b51debd0e152a354841432fd5852fd7cca8655a1423d81",
      "3088fb32af5ab5ff0718755102c0040000",
    ],
    [
      "ETag",
      "A25IJvhGeKMQ0suaJL6tjg==",
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
      "Thu, 02 Sep 2021 19:21:22 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90614fc2400c86ff4bfdcae20666ea123e0c9db2884427448321e418dd1cded679d76908e1bfdb9b7eb96bde3ed73eb9237c56cd0e22d856e55787e67056223fbb2243db69b672b5d458840120ab52c8db95a97dcdd3f87151be9dbfde3da4c92a8dc763216cfe81b582e80845857a67217a3f42a36a94679b8de9270ac687d625e97c91dc27990435ed5c305fce66f16496c0697d1ac09eb6191668b0c9d18d6c0ded31e7d4d95a55b71a3d4b9dc9d1420ff78dd250d72a43e449e205c1d00bc2911f06fe281c5e07be909a72c51535022f5f40f630b1d219fd882d040298be14f1a23fbf25f69dd1fa1f9d1c18ed9321596cd1edbcb8bafc33b82167c562cba6c301e44afe635a314485d2164fbf3d445abb6d010000",
    ],
    [
      "ETag",
      "DZrm0ltHAMTgX/WFKIEZIA==",
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
      "Thu, 02 Sep 2021 19:21:23 GMT",
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
      "edd34b7282300000d0bb642d8e7c1bba03f9145033553b8c6c32900682b42110b040a777afd36bd47787f70d7242a89478681bcac1339873cd5e937522a0eb7d55678da99749bf8d37846609e79294916fee53e9b647fe029d3d37041e44a5f9a13f2527cc3fe1925c903216753a7213ba6fbcc5676312ea402c937907839cd87bc5ba4cec6276cd2c8247c519234ab7e9c0f0990745a7f0a62c960aede243d7496fbedef4bade068aea758d7f28fbac45174db04d18bee2745aa0d36b39224f0bb3c393ee7d1ce38ddf44423a49648501f28aac32923cd62d569bd05c3f3cfc5f6005e824ea9e4a5cdfb7eba66dafc05f7d3ccc82deffbb34ef690f7e7e01fd67356e19040000",
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
      "Thu, 02 Sep 2021 19:21:23 GMT",
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
      jobId: "grouparoo-job-113-1630610362910",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb8268190078914ad514ab74809d90869b54d1332e642dd124c6d93aaaaf2df77314dd7aad2fa09dbf79c7bce7df044ee7899922949787e5f837cfc742b12724640d31c5f379f370fbf0ed55d61278c89d55aee64bf7898cd10c11b96a2fbaa808e12b564a0a6bb6d3797a2aea814a283893a8ee3769c916b8f1cdb1df5278e8d440545b6e2e51dd26fb4aed4b4d73b89777321f20268c5559789fdcb7befd0ef5552dc02d3aaf756b38732aaf781ea974230aab92867bb2d3aa815c818f69417e8e11f354dcedfe6ee72baefe6083e7006141b5097baf185299828339ed7d26425d327627cbe3a90adbff21791c54451efcbb8a47b38b352aa69ac1f2bb02ec3cdda5a06979b703d8f969b20de2ebef9eb7977b159edd6c1d6bafee687bea5695280e15a33ebdcdc02bca07e0a4af3d2a847cd73a3fcdca1e5fbc134049456d006e3b13da28e674f922c19b3cc73874966439278c97848ddc46693010cd20428f28ca861d15294de201bba3419c6190cd3789002c474e00ee349dfb63d9b39fd7e3f25c733f220b9860bae2aa178db21721d2e233f8ec25db09847be2921a375a12f5a634d01af3d6a2c1041ffa9e9d844b940a5a6ddcb20f2c3f9225a5ef9ed84579053f6b8bdc71967b45080682ab1791ae45aa4d83012ccd7fe0582cdc4be9f828a4c7f3f91a6e78d8b572d7fa14738c0c6ae365fb28dc265f0d5d83921ae68511bc8a13d900a2ddf606de8faf80791b8a56d16f263e7873f49fb144206124af6f134116c021fff6da7cd4730ee3eea288d775c1ea61a1526a15d226eea7d660f3c7730f688014bfd2e36f49c53db9a1c4d46d843a99f4b6a371f2b6dc56af502c220ce3f30ed3afe05b2a4f5b67b040000",
    ],
    [
      "ETag",
      "O+OwZvpkl0bccoLMrUr2lw==",
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
      "Thu, 02 Sep 2021 19:21:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1630610362910"
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
      "0000000002ff8d92dd4e83401085df65bc8514a4a225e905d5aa4ddada1f1a134dd36c61a0b4c0e2eea2364ddfdd59acd5a889dec0ccf0cd72ce811d6cd222020f9669f254a1d89e24a8c6ba98a0ac3225e956f2422218808a2544dedb1d55b636ead519f985f390369a0d311bb7db44c8708539036f07718a5924c17bdc41c172a4b59067555e2ceace00b52df5701a4c7ac31bea731ee97e38ebf7fd4ebf0b7be3b81831c51635ff8fb5f9de80355f4e30468145885a4b29f81a43d5d33625cbcb0c4dc92b11a2841aae1f24825725139c9b34316ddb316dd7b15cdb72dcd3966d1199f190a9941704cfa6241014572c9bf017b2092e01a22ec9715c5f9f699c46b5135df68681dbac057e05485b9c66b8f81b24c12b46dfe1033b64f09d6339af0a75a4aefb77fe6fc751a89f475df941f707211545754482dea03b0dfcc14873f383f7ce56a11c094e494ad421da56f3e2ecdcb5de73bde43a6b7a8fa7448506848c7e8fdb548117b34ce2fe0d2dcb80e77c020000",
    ],
    [
      "ETag",
      "W1Btp9ktx3PAn3Zi/4/rUQ==",
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
      "Thu, 02 Sep 2021 19:21:24 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` < ? LIMIT 1",
        types: ["INT64", "STRING"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1630610362910",
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
      "85535b6f9b3014fe2bc87bd9a4268184908b147551c236a45c3a42da4ddb94d8ce81b8054cb169d555f9ef3b40d38baab54f189fef726ebe275722dd91216122ba2e20bffb7029193921a06984b7e3623228b2fdecc7f57ec9e5fcf66f1acfa6d168840851b2144db2181a4a163907355caf9a512e8b8ce6523650a8615976c3723aa663991da73db04c242a88c39948af90bed73a53c356eb68de8ca48c62a099504d2e93c7fbd64dbb95e5f212b856ad979e2db451ad775c4f63c9a916321dad579841a120df4042458c393c5177ecf34beda6a0493342f08de040399745aacbbc5082cb3414519157aa64784faa3c9f1dc8ca9db993c0982cd78be0e396262579fbc9a0cad86c725045ac8d2ffe726e6c33f4da53056a6b5c7c737dd7c0ab5c8622868dd86d8d91716a8c1753e309b8357e17a6d9e1189879732f302c4c68074a8bb44a27a02c863295879679af275512a846ad3ab8e9990eb5fae68085acc7c37ea7cb421318ebb35e977698c90736d83b061479ba54af583495291d40d86e77a11f9a1de60cda9c87943a7d8702ebf38e657519db393db34b0e27e436171aa642655289ba6de4c2f7027713f8ebc5641cb8551921c5d64cebe4ca229ee7a9b14804bd51d7a18c0a894ee50cbc45e0fae349e09dbbf5d86710517eb7bac6c187345680689ad30434e473b9c3a691b3e5ca0bbce5623c434635cbb3234291e1affb27427097555dd6d5b7f472eccaff0838a77151216eea03b1c8e170f27f8555e07b8baf6f4bd00cab45993f88c255af15c8f7b5ebff24f5950f21e490f2f73700c155e0fd277b7c3e08c607843e4ae33f2e1c57a50bcfa15e3c915465d66cbb6fdb964d2a70ae5fc51cd33a76b8d428152181543f94543f9fb26155a8508f200ce2be2caa561dfe017dc89707c0040000",
    ],
    [
      "ETag",
      "AuC9uphLXqhOcoMwznlLDg==",
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
      "Thu, 02 Sep 2021 19:21:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1630610362910"
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
      "90614f83301086ffcbf971230e595049f66153a24bc8a2cc254eb32c1d5c1156386c8bcbb2f0dfbda25fdacb7b4fef9ef402c7b2c9218243597c77a8cf5705da5757a4683a650d5f2d3506610c6845c1e436fc7897d569bb5e1e47a3c724b816f214cf6733264cf685b580e802b244951b883e2fd0881af9d97eaf87898cd973eb92e5ea2d7e8a530e6aca5db0da24c97c91c4d0effa3154744851a2c6264337b2d554616697ced688ba55e819ea748606067868149aba5668228f13cff7a79e1f0693d09f04e1cdbd3f615251266c490dc39b35f01e4b56a8944e6c0b3e037a28595c0ee70fc7a133dafda38bb345f3a289171b743ba777b77f060fe4ac2cdb5adde11832c1fff15c5a88a45006fb5f76f63d846d010000",
    ],
    [
      "ETag",
      "Y6ZXfjwYSIk++DL3/afwEA==",
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
      "Thu, 02 Sep 2021 19:21:25 GMT",
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
      "00000002ffedd35d6e82300000e0bbf45908c84fedde2066084cd948a5c80ba958a59609b4a88365779fd935e67787ef1bd0aa624a95432bd805bc8091ce915ee971b7f097f7b3283832c6615dd0a3e476239460ab377ae01b77df2eb16f98715537ddc9ca27b495fde64ad01dd222b48854d30d5d76ece4bb4370ca35f4490e91ef84c1f5ba805ae0c6f97634c82bc24eb20f79d6635a5b81ebdd3c478313c69a689c8f10c37db9ea3c12db5a94edd6bd20610d53124a3ed8a610d9568e904fd96511ab64ee1679971233baa7673bc6566ad68dc2c3fb2631e6d6b14f5a48bc551be94f4fff179801f6d571c954c91fdb2d07a119f8ab5f0e63c71eff7d462593e0e717ebea8a0219040000",
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
      "Thu, 02 Sep 2021 19:21:25 GMT",
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
      jobId: "grouparoo-job-115-1630610362910",
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
      "6b",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7",
      "71d0266dd397548daa8411a94d479a82d83445b673130c691c62a71342fdefbb712803218d4fb17dcfb9e7dc479ec983281232254c648f35544f5fee2523270434cdf0f567ed275f1f6ed75b77ed5c6774495532de5fcd6688100d4bd15d99c3a99275c5414db79b4e56c9baa49594a798e8d471dc5367d8b7878edd1ff6268e8d440579ba14c503d2efb42ed5b4db3d8a773229b31c68295487cbddeb7b77dfeb9695bc07ae55f7bd66176554f713d56fb9e4540b59ccb61b74502ba862d85191a3877fd4849dbdcfdd1174d7c910bc171c28e7b22e74e30b537059a422ab2b93954c9f89f1f9e64036ded25b44169779bd2be282eee0c44aa8a6b17e2ac1ba08d72bcb0f2ed6e16a1ef9eb20de2c2ebdd5bcb3582fb7ab6063dd5c7aa16769ca72305c6b669d995b8017d44f40695118f5a8796e945f3ae47f1c4c434069056d301ed943ea8ced094bd988a7e3becb521b181bb3914bfbcce693010c1206147946d4b068218b9e3bb4a9033c46602f1ea43d16330088276c38188dc7cc1df6fbe47042fe5442c3b950a554a2ed10b909fdc88ba3701b2ce691674a48699debf3d65853c05b8f1a0b44d07f6a3a34512151a969b71f445e385f44feb5d74e780919e54f9b479c714a730588a615364f43b59209368c04f395778e6033b11fc7a022d35fcfa4e979e3e24dcb5fe9110eb0b1abcd976ca2d00fbe1b3b47c435cd6b03d9b70752a2e53bac0d5d1f7e2312b7b4cd42aeb65e784bdaa71052a8a0e09f4f13c126f0f9df76dc7c04e3eea38ed278c7e5",
      "e1aa51e115b44b244cbd2fecc1d81db4ffaaa695fe107347bd63db9a1c4d46d841a15f4a6a371f2b6dc56af50ac220ce3f30ed3afc059d8a8fca7b040000",
    ],
    [
      "ETag",
      "ZuId+kYOU5O1VgaLasd8vQ==",
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
      "Thu, 02 Sep 2021 19:21:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1630610362910"
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
      "000002ff8d92dd6e82401085df657a8b0954a54ae205566b4dfc2ba269d218b3c28028b0747769638cefde596a6dd336696f6066f86639e7c011f6491e82039b247e2e511cae62540fbaf05096a992742b782e110c40c56222bbb3c17c6abbd1bed76d8dfdfea35c0e96edb8d32142065bcc18384788124c4309ced311729621ad053c2db37c5d7506a843a18773df1b4e06d4673cd4fd64311ab9dd511f4ec66531648aad2bfe1f6bab93013bbef130428179805a4b21f80e0335d43625cb8a146b9297224009155c3d88052f0b2638afd1a46659cd9a65d74ddb32ebf675db32894c79c054c27382177312088a2b967afc956c824d80a84a721c55d7171a2761e54497c3896f372a815f01d2162529aeff0649f096d177f8c0ce197ce758c6cb5c5da8bbd1d4fded380af5f3a89eebf77f1052515417c41f8efb73df1dcf34b73a7bef1e14ca99e094a4441da265365acd1bdb7ccff596ebace93d8e12251a1030fa3dee13054ec45289a737910366337c020000",
    ],
    [
      "ETag",
      "BPGSO6AfkDB8MTEXsVGV9g==",
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
      "Thu, 02 Sep 2021 19:21:26 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` < ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1630610362910",
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
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "2b",
      "c8",
      "fb",
      "b2494d62420249a4a88b52b6b1a549979076d336258731d42b608a4da7acca7fdf014d5f54adfd84b97b5eeecee75b7225b2908c4820e2eb9217bb37bf65408e08d71063f4330cbf65baaf52d796eed5979dea5ffcf5e3f11811a2622948f384b7942c0bc6d568bd6ac7852c7328a46ca150cb34ed96695bd436a96577872645a2e2493413d915d22fb5ced5a8d33998b76329e384432e549bc9f43edeb9e976f242fee64cabce53cf0edaa8ce2baec78964a085ccc6eb1556502a5e6c780a22c11a1ea861f0fea9765b40da8e117c231807c66499e9aa2e9460328b445c16b52a19dd92bace4707b27267eed437a68bf5dc7fbb85b4226fdf19a08ccda6e0aa4cb4f161b93835b6397a5d82e26a6b5c7c7297ae81a1424622e11b116e8db1716c4ce627180d41f3adf1b3a4d462189c79a79e6f98584cc89516595d8a0f41c2ab32eec6e53dbfa58a001a0d9be4c6a13698033a0ca2c061d1c0ea0711e54130089c3e580165c31eef850107e4e94abd664126b3d03423e8f7a2082880130c4287d3d0e981c523e859b60d8e13300a94ec8fc89f42687e22542e956846462e969eef6efce57a3e9df86edd4604389693a6b8aa89c7756a6c12412ff4b5afb242a253357f6feebbcbc9d4f7cedde6ca673c06b65b5de3a54790288e682820e59a17a732c4a191b3c5caf3bdc57c3243467d8f67078422a31fb70f047f97d753d6f5b7f2b27bb5ff01700e4959236e9a0331c97e7ff47f85936a042f0a746997b668b765f651e9174271d31b11f275ed2ebf9326b4e4",
      "112f78c65e5f0204d789d75fece1f52018df0ffa288dffb8734c552eace0cdee89b4eeb461f706b6655ba40617fa59ae6f750f43ae342a459ef24cdfb5d4bc9e6a6675aa54f7204ce2caccbdf947ccfe03f567d0f9bf040000",
    ],
    [
      "ETag",
      "Ja9Xnt5smE6oEkKys5WzTg==",
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
      "Thu, 02 Sep 2021 19:21:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1630610362910"
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
      "c1",
      "4e",
      "c2401086df65bcd2d00ad948130ea00d122bd12a07630859da692db69dbab39534847767b67ad99dfcf3edcc973dc377d96410c2a12c7e3a34fd4d81f6d5150972575996aba586114680561742ce1ea6abe6e33456cc4bf5a4a271f43cdb2ee6732138fdc25a437886bcc42a63083fcfd0e81ae5d97e6f868982d9be75c97af31eada244829a32176cb671bc58c6115c7697111ce990608e069b14ddc8d6d01153bb76b6acebb6428fa93329320cf0d0280c75ad36449e245e10282f50135f05fe44ddce025fc88a526d4b6a04debe81ecb1647595d0496c2110c00ca588e7c3f92bf1c419edfed1656f915f0cc96246b7737ae7ff19dc93b3b2626b4d872348b5fcc7636921cc75c578b902b0e61e756d010000",
    ],
    [
      "ETag",
      "9D4GnYw/6ssB6K6E/EM9UA==",
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
      "Thu, 02 Sep 2021 19:21:27 GMT",
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
      "000002ffedd34b7282300000d0bb642d0e8210d39d88a27c1425146493418842a90209c560a777afd36bd47787f70dd22ca39c93aeaee80dbc812155d0381b3bcdcc30efe5d52be161b7578723eeb8a5938b13ac6b4d89af04a5aab33f89d3b22acf585f914228c3d66cda287156e7f9ec60f8bd2d50e06e1d02df375ee07db2ddd4c5466ff786148a82bbcc4290eb896fdaf5d677db8b1ce4509bd1c85327f450b671d70bbfd9b7b52b4d97f01add2b7f91e05518f31cafb174776121b0c512785bf404795ef0c88eba64ca1fd4a672deab5df608eba456587592a61b9b5bdac46ebec62f2fff1718012a9a92514ecae77655436804feea936e68e8f3bf41534619f8f905eeed7a4719040000",
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
      "Thu, 02 Sep 2021 19:21:27 GMT",
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
      jobId: "grouparoo-job-117-1630610362910",
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
      "6b6f9b3014fd2bc8fbda24d0904723456b94d235524236206db76942b6b9507704536cd24555fefb2ea6e95a555af902f63de79e731f3c91dfa248c88430913dd450ed3fdd4b464e08689ae1edfc76f783dfdae9e5e39f551ddef71ff66ab67c9c4e11211a96a2db32878e9275c5414d366137ab645dd24aca0e26ea38cea8e30cfbf6d0b1fbc3d333c746a2823c5d8ae237d2efb42ed5a4d73b8a773329b31c68295497cbedcb7d6f77da2b2b790f5cabde5bcd1ecaa8de07aa9f73c9a916b2986e4274502ba862d85291a3877fd4849dbfcddd1574dbcd10bc131c28e7b22e74e30b537059a422ab2b93954c9e88f1f9ea8384ded29b47169779bd2de2826ee1c44aa8a6b1de97605d06eb95b5f02fd7c16a162dd67e1cceafbcd5ac3b5f2f372b3fb46eaebcc0b334653918ae35b5cecdc9c703ea27a0b4288c7ad45c37cacf1d5abc1f4c434069056d301ed943ea8ced3396b2114fc7fd014b6d606ccc4603da67363f73c14d1850e41951c3a205d6cc0609c7cec6bccf9dd81dd834669c8d624a1d7cf8d80648c9e1843c5642c38550a554a2ed10b90916911747c1c69fcf22cf9490d23ad717adb1a680d71e351688a0ffd47468a242a252d3ee851f79c16c1e2daebd76c24bc828df870f38e394e60a104d2b6c9e866a25136c18f1672bef02c166625f8f4145263f9f48d3f3c6c5ab96bfd0231c6063579b3709a360e17f31768e886b9ad706b26b3f488996efb036747df88548dcd2360bf9b6f182efa4bd0a20850a0afef134116c021fff6dc7cd4730ee3eea288d675c1eae1a155e41bb44c2d4fbcc76c723d775890157fa5d6ce09e1edbd6e46832c2160afd5c52bbf958692b56ab17100671febe69d7e12fc09d3cb07b040000",
    ],
    [
      "ETag",
      "CXvZcX0fFwxMuSj3qysALw==",
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
      "Thu, 02 Sep 2021 19:21:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1630610362910"
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
      "92",
      "d14e83401045ff657c8504ac5225f1816a5562ad9562a2314db3c280e0c2e2ee626d9afebbb358ab51137d8199e1cc72ef85153c15750a3e3c14f9738b72b993a3be364584aae55ad1ad11b542b00035cb89bce57765103d37bd98bdde1daa52e5176ab2383a2242258f5831f0579015c85305fefd0a6a5621ad2582b7553def3a0bf4b231c3691c85e333ea2b919a7e7c331a0583d110d6d67631659acd3bfe1f6bb3b505a578883043897582464b234589890e8d4dc5aa86a3ad442b1354d0c1dd835c8ab66152089b26b6ebf66dd7eb399eebf4bcdd43d721928b84e942d404df4c492068a1198fc4826c824780ec4a729c75d7171a1769e7c494e138f6f63a815f01d296151ce77f8324f891d177f8c036197ce75825da5a6fa9d3d155f0db7114eae75127413cfc41284d516d9138bc1c4ee3e07262b8d9c6fb60a9514da4a024159a105d67ef60bfef39efb91e0b9335bdc7d7b2450b1246bfc779a1c1cf1857b87e03d773d11f7c020000",
    ],
    [
      "ETag",
      "XlYjARqp3TaxY9sjsgKsPw==",
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
      "Thu, 02 Sep 2021 19:21:28 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` < ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1630610362910",
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
      "6f",
      "da",
      "30",
      "14fe2b91f7b249051c124240421da3e91609420ba1d56e02c771a8db244e6d87a9abf8ef3b494a2faad63e20a273becbb9f91eddf03c464314f1ed6dc9e4dd876b11a123c434d942f40bcb9731df255c9e4ea77f4fcefdc08ee5f96804085eb114c98a94b5942825656ab85ab6b75294059142b440a8659a6ecb742cec98d872ba03130351b13499f2fc06e8575a176ad8e91cccdb5b21b6292305576d2ab2c77867d7ed14525c33aa55e7a567076c54e71dd7e35450a2b9c847ab2554502a26d72c233c851a9ea871f4f9a5769b93acbd05f08e5346281565aeabba40828a3ce1db52d6aa68788fea3a9f7da0a537f526a13199af82f0e386641579f3c920ca58af255365aa8dd3c57c666c0af0ba228aa98d71f9cd5b780684a44878cad63cde1823e3d818072710551aaadb18bf4a8c2d0ad1a93ff343c3846a62a634cfeb5a4212a5acaae3615efeeb355504a2c1b149aefbd821a68b075112f569e25abd28c12c8adca8df235684e9c066761c31023c5da9d72c928bdca626c67d1ad19eedda7677003fd2a7cec0e95b36769228724c6a33ab8ff647e88fe49a9d705508c59b99a1cb851f7aeb70b10a26e3d0abdb4808cce5a429ae6ae2799d1a9a04d01b7dedab2c17e0542dc00f426f319e84fe85d7ec7ccab684de2d6f61eb09491503349124639ac999886168e86cbef4437f1e8ca7c0a8177976402834fc79ff4408ef8a7acabafeafbc1cbbf63f002e485ad6885df3814cb4df1ffd5f21f467de321ccfcede56e9e22e6ee16ecbec856677685a43d36e638c7f80f86f20c2f537bae87ce52dbea326b46009932ca7efdf0580ebc4fbaff8f0a2000c6f0a7ce03a358733a4aa72a19235e7c8b3baf9866dbbaee50c500d96fa55aee79a",
      "87b9571a9522cb58ae1f5a6a5e5435c63a55aa471024e18a023ff80ad97f32093a19d3040000",
    ],
    [
      "ETag",
      "BenSdivfirFLLzDQIN4drQ==",
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
      "Thu, 02 Sep 2021 19:21:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1630610362910"
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
      "02ff2d90616b83400c86ff4bf65541675b5aa11fd6229b50cae62a0c4a29571b9d9d1a7717eba4f4bf2fe7f6e52ebc792e79b81b7c95cd19423895c577877a782890df6c91a0e92a3672b5d418040790552164fc3319a6d734fef016fd94d72a5aec8aae5f2e8530d927d60ac21be425566703e1fe068daa519e1d8f7a9c28180fad4de2ed2e7a8e12096a3adb609b6e364fab4d04f7c3dd810b9d12cc516393a11dd96aba60c6b1b535aa6e2b740d753a4303233c360a4d5dab34912b89ebfb73d79f05deccf782d9e3c2f784ac28535c522370fa0eb287895595502fb6e00ba0c752c4f3f1bc4a1c58a3c33fba1a18cdab26596cd0ee9cccbd3f8335592b165bd61d3a9029f98f979221cc5565f0fe0bdc694d466d010000",
    ],
    [
      "ETag",
      "Ix4y5vUIX09w5tCaE9Tguw==",
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
      "Thu, 02 Sep 2021 19:21:29 GMT",
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
      "497282401400d0bbf45a2906113a3ba583d220a394c40d85f8310422cd10b04de5eeb1728df8eef0be5196e7d0f7e9d05470452f8867321672c166fa9a4ce59eb5da65532894e7501864f06a2bc38731aa2bdddfe6af5ff7655c9a09a948e66787ad16be614b96f4ee5df9147bf36cd48bdedb525015a50d703c02c4692c6131c19446d6255ed947bc3eda6e7f232095f5aa5d387377748669056dad519b05b7919b1cefc751bc78411c4aaa2cde9d804fcd409c266a19dba461458dab12d20417ed99ec1a7d7e32e9bce0ee3d51cdd217dd8f258180683b233a1544787afabfd00cc18d951df469f9d8aea818cfd05ffd74e00c1effd79075d0a19f5f3684e43219040000",
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
      "Thu, 02 Sep 2021 19:21:29 GMT",
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
      jobId: "grouparoo-job-119-1630610362910",
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
      "000002ff85535d6f9b3014fd2bc87b6d0209348148d19aa5b4cd9a900d48ab699a90712ed42dc1149b6e5595ffbe8b69ba5695d6276cdf73ee39f7832772c7cb2d999094e7f70dd48f9f6e454a8e08289ae3abe9b0e5ddf945c487d9e53afbeadcff19bb5f66d3292278cb92745715d093a2a919c8c926eae7b5682a5a0bd1c344bdc1c0eb0d46b6351a58f668e80d2c244a28b2252fef907ea3542527a67910efe742e405d08acb3e13bb9777f3616856b5b805a6a4f956d34419697ea0fab9108c2a2ecae92642078d843a811de5057af847dda6276f73f739ddf573043f70069431d194aaf585299828339e37b5ce4a264f44fb7c752091bff4e7b1c144d1eccaa4a43b3832b654d1443d56609c85eb95b108ced6e16a162fd64112cd2ffcd5ac3f5f2f37ab2032ae2ffcd037144d0bd05c636a9ce85b8017d4df8254bcd4ea71fbdc2a3f7768f17e302d01a52574c1646c8de8c0b5bc344bc72c73ede334b3204ddd747c4cedd4629e03ce36058a3c2daa59b414a5e7bad44999958c99c31227a5a3c41d323b61d4a61e508bbaf688ec8fc8ef9a2b38e5b21292771d22d7e122f69338dc04f359eceb1232da14eab433d616f0daa3c20211f49f9af66d940b546adbbd08623f9ccde3c595df4d780939658fd13dce38a3850444d31a9ba7a05e892d368c04b3957f8a603db16f87a024939f4fa4ed79ebe255cb5fe8310eb0b5abf4974471b808ceb59d03e28a168d863c740752a1e51bac0d5def7f2112b7b4cb42be6ffcf007e99e42c8a086927d3c4d04ebc0c77fdb61f3118cbb8f3a52e11d9787c95685d5d02d11d7f53eb31dd71bbafa5f55b456ef628e651ddad6e66833c20e4af55c52b7f9586927d6c817100671fe816ed7fe2f3a19a6a87b040000",
    ],
    [
      "ETag",
      "/4cLkGHSi2fKOfJ4qx78BA==",
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
      "Thu, 02 Sep 2021 19:21:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1630610362910"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d492b50b48917e54724022a14a331842cedb414b6ddbabbd510c2bb3b5b118d9ae84d3b33fd667bce6977b049f3083c58a6c97389727b92a0be33c50455c9b5a25b21728560016a9610f97c1dfbf2be19f36eb3f5b0edbc068dfee631b9b82042852bcc18783b8853e49102ef690739cb90d642c1cb2c5f549d057a5b98e134980cc67dea3311997e3c1b0efdf6b0077bebb81831cd1615ff8fb5f9de82b5584e3046897988464b21c51a433d303615cb0a8e35254a19a2820aae1e245294059342d46852739cf39ae3d66dd7b1ebeee9b96313c945c8742a7282675312085a68c627e2956c824b80ac4a721c57d7171aa751e5c4948371e0362a815f01d216a71c177f832478c5e83b7c60870cbe732c1365ae8fd4e5f0c6ffed380af5f3a8ae1ff47e104a53544724188c7ad3c01fdd1a6e7ef0dede6a54b75250920a4d888edd386bb65cfb3dd78e3059d37b3c2d4bb42064f47b5ca51abc987185fb3711e696357c020000",
    ],
    [
      "ETag",
      "qKfArV5flD57XyCwT4GkYg==",
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
      "Thu, 02 Sep 2021 19:21:31 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` < ? LIMIT 1",
        types: ["INT64", "FLOAT64"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1630610362910",
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
      "59",
      "6fda4010fe2bd6f6a59512b059630e09a58838ad2b022918a2a8ad60bd8c9d4d6cafe35d274111ffbd633be450d4f28499f98eb9f689dc8a7443fa2410d15d01f9f6d38d0cc81101cd228cf692bbed752697579949b31fbdc7ec7139f71f0603448892a55892c570ac64917350fdc5bc11e5b2c8582ee5310a1d5b2df3d872a8e95826755a3dcb44a282381c8bf416e9d75a67aadf6ceecd1b9194510c2c13aac165f2126fdeb79a592e6f806bd57cefd9441bd53ce07a124bceb490e96031c70a0a05f90a122662ace195ba09bebed76e0896342204df0b0e8c7359a4baac0b25b84c43111579a54afa4fa4aaf3cd0799bb6377e41ba3e962e27f5eb3a424afbf184c19ab550eaa88b571369b9e1beb0cbdae9902b5362ebfbb33d7c0502e4311c34a6cd6c6c038318693538c3e6b18bf0bd3a41cc363efdcf30d0bcbd980d222ad8af159104359c8f3c0bc8f7b2a094ca3659d5c754c87595db317844187875dda0e421382a01b74da8c0626efd9606f0260c8d3a57ac562a94c69d7eada402d6e752873286d43db36a9cd68ab45c336659b96edb45b4e8fec8ec8432e349c0a954925eaa191cb99e7bb2b7fb6988c86be5bb511321ccc695d5cd9c4db3a353689a0fff4b52bb342a253b9016fe2bbb3e1c8f7966ebdf431448c6fe777b8f690c50a10cd72968086fc5c6e7068e4623af77c6f3a198e91516df2628f50a4ffebe995e06fb36acabafa2dbd1cbbf2df03962c2e2ac47dfd412cb2db1dfd5be16c3c1d1ed668b411b1fb83203cf45a81fc5cb8b32b52876610420e293f7c0108ae12871fecfef120189f0ffa288dfff1e0b82a5d780ef5e189a42ab166db3dcb6a3ba402e7fa438edaf67ec2a546a90809a4fab9a5faf19403ab52857a016112ef65e24dbe61f62fa7e98ed6be040000",
    ],
    [
      "ETag",
      "9mqyhpoVYp03pJ9xpxVSTw==",
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
      "Thu, 02 Sep 2021 19:21:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1630610362910"
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
      "00000002ff2d90dd6a83401046df657aabe04fb144c84553a49548486c73919410363a5a5375ecee9a20e2bb77d6f66677f8e6eccc6147f8aeda1c42b854e54f8f72782851ef4c91a2ea6badf8eaa8550816a0162593c3e3fd101c0fb7a82a9efa75bc7516deb0de2d974ca8ec0b1b01e108458575ae20fc1ca1150df2b3f359ce1319d343679278f311bd4629070de526d8ec93e4799544309d260bae7449b140896d86666427e98a998e8dad124d57a3ada897192a98e1b9514aea3b21896c4e6cd7736c37f09dc075fcc05bb80e9335654257d432bc7f07dea3498b3aa53bdb82cb809c4b162fe6f3c6b1678c4effe86ad0a8b69278b142b3d3f79c3f831732569a6db5ecd1824cf07fbc551ac242d40aa75f8d43bc516d010000",
    ],
    [
      "ETag",
      "y4wY6ZYvEif7uKIP092yKQ==",
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
      "Thu, 02 Sep 2021 19:21:31 GMT",
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
