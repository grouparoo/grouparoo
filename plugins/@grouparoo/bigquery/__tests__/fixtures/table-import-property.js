const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1592428057699";

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
      "1dcfdb6e82300000d07fe9b3358810646f36923198e0b8cb0b29a58c2a97727114ccfe7d66e70fce136042e838665377a72d78030b96f52dd9dadd01ad3329b34771a6ad99f8631db69ee2f59adb1491ef8f9ca457b721d02a2eb9faadfbb7f4c22c0e77b8c1b4fbecc5de884f3fcb7b336b9ac8a9c3da93ed4a222e911338865359552fe694382b4491c8efa8dbd74d9304feb18cbb22a9ce912b6a2207739a55aae7f11d91addb64ada569e7101a2cc93e52f388b91442245d9550ebfb87a2ce8495328539ff3a606c800da082b3818e197bcdf6aaae6fc07f339b164e5f5744f14007f0fb070370094205010000",
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
      "Wed, 17 Jun 2020 21:07:43 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1592428057699",
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
      "00000002ff8d546d6f9b3010fe9e5f81d8d726e49da452b446095d23356423d0aa9a2664ccc1dc02a6d834adaafcf7d9262f64a9bae553b8bbe7e5ee6cbf37344d7f2259a85f6a7a40e2e7128ab72f8f34d02f6406388a65e6d5db8c8cd722357a594a61b359cd1f3c6f3a99545544a1194af3049a8c96050676e9ad5b7141cb1c1594360561b3d3ec0cc6dd7e77d41e98c3f1b8823248a25b923d4982df9ce7ecd230f6365a31a571022827ac85697a881b2f5d232fe82360ce8c5355430831e353ddaf09c588139a4dbc75e5a16450f890229248174770185c9db2b7084a5bb1a87e211810c6b4ccb87456d1609a45242e0b452e98de45508495e5c3672da0afad5b6be66a9826659af9194ae1420b11473e7fcb41bb76564b6d615faf9ce5d45dac6c7f3dbbb196d3d66c75eb2dedb5767f633996c6519080c26a13ed4a7dd9e24339526a21304e32e5c995d99a1391dd8d71f1c1020f149244b862b02bf3cdf6107546ed711005268e46bd4110b5210846813940bda08dc77de88701a03a837256e15146b37167081099811f86d8f4fb0318fac8ec067e7b08c1281a8e477db3afefd0db432f9b827098139653467643d6ef9d856bf9aee3d9b3a96bd5fb8e5099f079e5fcb4eb9376b81850dde9672339739417840a536a9d0bdbb59ce9cc5ddcd56c88b3750b31c26feb6779ba22943038a2512176c5a158d2502e46b7a74b6b7e04ab93f27d5fc444c5cf83cf633ba250ee5ff572b6ff531d571cac935154bba9a2fada7516f637bd96dc7e4c738792f2039e975d588e3022c9715e8aaaf1f7bf5f8d9a842e6eeace9dfec3b39c078955399971208202327c14fd8f932b8155fadfef90a8de3f0b12205e86833ce3222cee106647715c4075a34835f73de1b0277e7b42012cf879c5a07d903c7b1aa416a490f1fd28aa27a29ae3f6c45259b3a360b25cdc027bb7c26d63dbf803e64bd4",
      "0ddd050000",
    ],
    [
      "ETag",
      "xUw8/xrm/3nmoewwODYUUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1592428057699"
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
      "95",
      "c1",
      "8e",
      "da",
      "30",
      "1086ef790ae45e41020474a9b40768690bcac236b0a70a21134f526f9d4c6a3baca215ef5edb094b2e5b452a522eb167fe197fca8cec79f53a1df29ba78c7cea90238fffe4208b0f31e81f761380ca855666c9305540ba361a348d6d74ce80ad64319a042b1c1f57459480485eeeefcb2815fe82849ab85763193be2209832f64f67772abfd3529a803d31449127e9c199ddabac8bccc9db5db05c7fab2b0932a7ac9f7c7f36f717a492ceddf7218c6a7a7047fe1fc2ad7baf8291673c061081843484eb5f67129f21d44b575e45934c404f612e435015c42696722c31cfa844ec19576fd01b8ca7c3d1f0ae3ffe38994e2fd10243aa39a636e1694bdef01a351501bed80a93c1b0ec812cedb2e2975290a8d6847a858c74b2d99c9137dfb9fb8fc0e57a3719d562abdddeab6536a6465c2a5db6be19bd6ad58df082b6493737858b56c831a40c642b689e1d286312946a078fea40b3ac217bbed9f8b722d39449e4ac25fa89b74115fad490fad5dfcc6ef8ae98e7bee99dfe32db2d6e8555da3cf60db9bbe5c362bb9b3d3cbe0b37dffdf5999f171ad4a344334414b8d131e88feecc98e893cb28fa8c76d4683b89b4ccc1b9436a46f277ae8d2fa2428177f6fe02b8467858fe070000",
    ],
    [
      "ETag",
      "udedJry46RJo5bJyfmelmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `first_name` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-2-1592428057699",
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
      "00000002ff8d546d6fda3010feceaf88b28f2b2410424225d4a1365dd12874105a4dd3048e7349dd8638b51daaaee2bfcf4e7849d6aadb377277cfcbddf9786d689afe48d2503fd5f480c44f39b0974f0f34d04f5406048a55e69b07c6d5c5c6b9fcecfe7e9efa77f7b73698c3c1a0ac22059aa375964093d39c61e0a78b792b6634cf10a3b429099b9d66dbee77ba1dd7b49d5ebf5f423924d198a48f8ae05e888c9f1ac6de462ba6344e006584b7305d1fe2c6a663648c3e0016dca8ab1a52881b1fea9e25142341683a58cc4b0f3907b68435228972710487c1973a7b8ba0752b96d51b8201614cf3542867250da66944e29c15e492e9550665b8b07cf8ac04f4b937f6ce7d6d1511c6c532456b5869886bcb25039e2742bb9c4dafb595ec342209f0957677e5cd3c6d45c29536d0ce0ad18230042e485ac8fa2848a02226b3bb498dded9d1814291208138ecca968ed9436dd7ec0751e0e0c8b5ec20322108dcc0b1911598b8df856e1800aa3208a55de2512a67812da7dd4610bad001abdf772d2742b8638736ee756d2b8a5c270413d9fa8e617be8e79911011784679493dd2cf5bbd9c8f796fe6c31391ffa5eb5f708c9595d94eeeb9dd75a12724855b71f8de58da38c112a4d155b1b4d7c6f363cf747b7151bf2098d2146f865fea41e5184120e47346272b702d8350dd572f49be97ce48fa693e1f8c850bc8a9b7d2597653f0f668f3d55d9fc97acbeea720b6554d9ec75f54a6e7bf22ecb2d4af2776836bbb0deae7134fefef5ab51e1d6e5b9ed5ce9df17deec87c21639959941040c527c54fb8fb7a98065fadf7f26b27a7fdb0a20cffb20cf850ccb2bc1fc288e19943743d665a73bc25ed7b27b7b420964e26d45cfb2f7156fee5b69c11a52b11f4579e7e51cb7354b79c54e0153e5f28d4f4693af85f9c6b6f107312bbd7ca2050000",
    ],
    [
      "ETag",
      "KEe/HDv7F+8zwOTWhV5e0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7de72b48f7b89188914d96f820ce6c2ec44cd4a7c5980a1786032eb6c5c519feddb680fad2f69c736f6fcfe9d9304df29b16117935c92e4d0e15b0d3430262a10e01f02a135c6e25161cc893aa0641135d3df1f6abc7a1ed2ec73dfff3cd39fc0f9ce362346aaa78f8033995756789248e53c8222ef1b7c666cb6bada039a81bb75ba607ea1b5a4d9c4aad2d57c16cfe7eafe4186965bef6fdb1e74f492bd57adfc8b5d62fd9e32e8018181421dcde5332dc432866da38a7799981c5b16221f076886a6ce484615552866849caea5bb6e3f607fd61cf797976ddae3ac3908a140bd5b05e92eb7881826601fe29efc46ec2610d6ca2e88220f15d3af7f948e9a89aa72c057265ebf6b4313ab4b9cdf34e02f81743e98683f6603b03d2c531416557a83404ab40d321951ff6910ac9c534e360d4c60512d57f641c020000",
    ],
    [
      "ETag",
      "bCBjT+819SA0LJD5qz45vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d9",
      "7282301400d07fc9b33a9445b16fb1203b1674047cc904b83850054c80b84cffbd4ecf1f9c17a245019c93a1fb81167da20795d78b62e175fae629aaeb5136cd25273189764b0770c1b4e8329455f6957b627f3d40d6389248a1dc8621b6fbf8c3084621bbcd0d7c6a8494381e95b1ce7070f9deedc7fbed5eafb43c1b390c38d0dda44bf9dc32ab64256907a2337e7e8c923598a5c5c2668edbc8354e1b7fdbe67d9972c1e3676e514b118aea2ab63a9da98d7b48582035752652dfceb874a047ed34d989a54e02cd10dcfb9a0127f57ba668ebf50cfd37c9f0e8e17ddd0065c0d0ef1f85fdfdd105010000",
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
      "Wed, 17 Jun 2020 21:07:45 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1592428057699",
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
      "0000000002ff8d54db6e9b40107df75720fa1adbd8c61722590d75488b64e316e3445555a1653dd08d8125ec922a8afcefdd5d7cc17594f60d66e69c3973d9796d699abe25f946bfd6f488244f15942f1f1e69a45f490f7094480fd97edace46363537017b22b6bb405ee6d8d3691d45149aa1ac48a1cd68556260d7eb5527296955a092d2b6206c0fdabda1d537fb1363381e59560d6590c673926f25c12fce0b76dded1e6474124a931450415807d3ec68ef3ef7bb45491f0173d63dcfda158958f7ddbc1f538a1127349fae57b5868a41194286482a559cc09be8e69cbd4350d64944f433c18030a655cea5b29a06d33c2649552a72c1f42a8cc2ac241f7f1b067de5cc9d59a0619a56591ee628832b6d83380af94b01da9dbf5c68ae77b7f41776e02ebd7035fbe22cecce6c395f2fbc95f6f0c5f11d8da3280585d5a6da8dfaf3c48f52a4b26d8071922b4d81f4369408efbe8dee1b033c524812a18ac13e2c1c1b23d49b18561447631c4f06c32836208a26d178880691812d13cc4d04a8c9a094d57894d37c60f590d18f0761df1c0f4313c7bd1059d8084dc384780cd8b4c6a0efd1bb632dbf4bc2e196b08232b26fb2fee0bb811306feda9bd981d3ac3b4655ca6f6be5e7559f95c345839a4adf6bc985a2a224548852e374bdc0f1ed59e0de376488dd9a4382f0cbea496e578c520627342ac5ac38940bba9183d13d7be1dc9ec06a53be1e829888f871d4792a4704caf9ab5a2ee67f9e27108b75d68a7a36b5555f05beeb7dd61bcedddb34f728addee079de9b650b63929efaa5a85a7f7ffd6c3552e8e2a5eed5e9dfd68eff5d62954f7a7c88a1841c9f92fec7e64a60edfef71d12d187b32001e2321cd3332ecce20d61764a8e4ba85f14a9fb7e201c0dcdd1e040288025bf8c184efa87888bd320734106393fb4a23e11751f776792aa861c0593e1e21578fb11ee5abbd61faa40609add050000",
    ],
    [
      "ETag",
      "ikBkC6Ao4dTsqiAIMaNmEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1592428057699"
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
      "0002ffc595df4fc23010c7dff75790fa0a093f554c7c004525193f84f16408a9eb6d56bb75b61d4a0cffbb6d37642f9a2592ec65edddf7ae9fec2eed7d39b51a7aa331415735f44cc3f714c4ee2c04f568360b902953522f098f25a0ba8906854313bd9d3c46bdeecb3c221fea9dce3b9dd527bd0dafafb328e9bf408475dc97b6b41d5060446afbc9dab5dc6fb51847604ef4394ba37863cdfa5156bbc4ca4b6f319ede17958813ab4c57ae3b18ba23944bfbfaef108215ded823ff87b0ebdac961e8953f2f200001b10fc7bf4e047f055f8d6d79258e12060dc953e183cc2126319343c1d3040bce1bdad5e8345abd7ebbdbbe6cf62ecefbfd4334e33e5694c72661b5443f78c515660bfe612a8c5aedac0722b3b38a1f4a818242138a15d2d2d66453827e7cfbfa1f81e3a977de2dc4e6bbb553c82c4d0da8902a6b7d397adeaa13e119ae92ae6f0a659590438809884ad034d960420448590d9ecb0d4e9292ece16ce69e8a8c6322382515d1b7b40a2a53db92d43b773638e1bba29ffbb277fa76e08d4e85954a3ff625b9de78325a7a83c9fc57b8feae8fcffc70a740ce05d74344821d1dad66f7528f89263a8ca21b6e468d3293488914acdbc77a243f50a57d0166129cbdf30d46cba705fe070000",
    ],
    [
      "ETag",
      "vMQm54hPmdwtqiP33UxiDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ltv` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-4-1592428057699",
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
      "54",
      "6d",
      "6fda3010feceaf88b2af05929484500975a8cd36244a5b086da76902dbb9646e439cda0e15aaf8efb5135ec25a75fb46eeee79b93b1faf0dc3309f68169967868969f25c005f7f7964d83cd1199028d199e9307cb90d1fd2074cedd90a9235e0d019f4fb55152dd1022df3149a82159c80389b4d5b0967458e38634d45d8ec346db7e7741cdf72bb5eaf574105a4f188664f9ae08f94b9386bb777365a0963490a28a7a245d8721f6faf9c76ced9231029dac7aa6d2524da9fea9ea78c204959d69f4d2b0f85003e8725a2a976710047f8eb317b8ba2652b51d52b4a0011c28a4c6a67150d61594c938297e48ae9550555b8b4bcffac05cc69300a2e426391cad5c240c298cf39882295c6b7c9f595b1502dc63405b130ee7f0493c058d06861f48df352ad648a40489a957a21c229d45454763ba2e107cbd95368122491806dd9bc6b79c8f6ad1e8e7197c4fea98b630b30f671d745a7d822bd0e74220ca8ce20b576854719cbdc38464ee4c4910de023ecfa1d4c220f7c077b91ef5ac4b62c3f06db31b70c9b7d3f2f9c4ab8a42267826e8768de4f8661300f27b3f1c5200ceabdc748cdeab2727fdcf9514b520da9eef6b3b1bc739473ca94a9725dc371184c0617e1f0ae6643bd9d112488aca7cffaf5c428157040238e9620815fb1482fc7bcb9568734bc1e0f460786f239dcec2a852afbb5377be8a9ce16aef3e355575ba8a2daa6d7316bb9cdc9872c77282d3ea0596dc3a67dc4d1f8fbd7ef468ddb5477b67565dece82c94f8d2d733a3381183864e4a0f61f6f5303abf4bfff4554f5eea83540ddf55e5e4815565742c4",
      "419c70a86e862eab4eb7849ed771ed1da10272f9bec2f5f692ef0e5b6bc11232b91b4575e0d51c3747968a9a9d12a6cbd51b1f0fc7df4bf38d4de30de0c2267b9b050000",
    ],
    [
      "ETag",
      "SITwQTXlXbi1UvegyebT2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1592428057699"
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
      "0000000002ff4d515d6f8230147de75790ee752cc244c7121f7471d90cd987d364c9624cad1786032eb4659b33fcf7b505d497b6e79c7b7b7b4e0f966d93af24df925b9b6c92b8ac80ef2f6290affa300751a552a8adc05c00b9d4d52069acaba7e570b19c95eefbcc676e54ca5f08afffc6a3515325d8276454d51d1452384a20dd0a853f0cb65bde6839cd40dfb85e7333d0dcd06a725f18ed3e7c1e2fce850cb746785a86e178124e492bd5665fa9b5360fd9e1660e1170c8199c9e5370dc01938fc6b7a059918223b0e20c443b44373672ccb12a28477414e5f41dd70fbcbe77d3f3878320e8aa5364542698eb86e51b398e9728693ac71f6d9db84d36bc814d125d0e243a0be73c1e257deb66cf0fae5c8f1cf9ba3dadac0ead4e13277b09e285a3f223c0b870073dd2057287dab0d479485e81a119553ff69048c545341560d5d63fa00c16771d020000",
    ],
    [
      "ETag",
      "Eq7TUJq1XJ5c1fqtxeL3zA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b5283300000d0bb645d3b0ce5ebae095822df4253d40d93818015099f600be978773bbe1bbc3ba065c98428e6be651c3c8395aaf6b6dcfabd05e5ad5695130adbeafd355c91d632a9d851e0a9423a4ebff394ceaf290a633406434751723e2c9c4bfb98c0c638fb651c7d54aad9e17920cc4562a1846bd23dd1f010356b665c71c66beb1867048ff0eae9f8470f4495528cdff6a9561bca9cd5e67a9c18b3bf2d332733ef9e22ee39e3e7d74b1e2aae95a244ee33472f0969cc4913370893900c74518bbccd3d176c005b86cbc4447179cc76ba6d6fc07fb398d7813dae90d1894de0f70fc2e7457f05010000",
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
      "Wed, 17 Jun 2020 21:07:47 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1592428057699",
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
      "545d6f9b30147dcfaf40ecb509902621548ad688d21629211b21ada66942c631d42dc1cc36a9aa2aff7db6210959aa6e6f70ef3de79efbe1fbded134fd05176bfd4ad3139cfdae107dfbf24c12fd427a100799f4001ad94fe3d06525f08cf46eebb93e9cbd4e26751456680636658eba8c54142276b55af6324aaa125042ba82b03bec5a43a73fe88fcda13d729c1aca509ece70f122099e382fd99561ec65f43242b21c8112b31e249b83ddd8f68d9292670439334eb31a2211333ecdfb352710704c8ac96a596ba818a231da009c4b1547f03ab93e65ef61b0e965227a8b21021092aae052594d034991e2aca28a5c30bd0ba3302bc987df96415f7a33cf8d3448f26a53c405d8a00b6d0d3888f95b89b4db7031d7fce07611cea791bf08e2a57befcda73d77315bcd83a5f678ef859ec641922385d526dab5fa0bc48f52a4b2ad11e3b8509a22e96d2911dea68dfe07033c504812a18aa1262cb6cd11b0c6a693a4890dd3f1e530494d9424e3c41e82cbc484ce000dd609026d06a5acc683821416b04d075883b86f01100f4cdb89136b6cc5a321589b8ee30033b5f506bd3bd4f24a314737989584e1a6c9fa63e8475e1c85abc09d465ebbee145439bfa9959f567d520e170d6a2bfdac25678a4a8a8910a5c6e90791174eddc87f68c910bb354319806fcbdf72bb5290337444032a66c5119d93b51c8c1e4ce7decd11ac36e5db3e8889889f079dc77244a09cbfaae56cfea77922b15827ada867535bf56514fac19dde72ee3ea6790079f501cfb631cb16a6383ff64b5175fefefad569a5d0c54b6dd4e9df575ef84362954f7a4294228a0a784cfa1f9b2b81b5fbdf774844efcf820488cb70",
      "48cfb8308b3704d93139a4a87e51b8eefb9e70645f5ad69e5000293f8f18d8fd7dc4d96990b9d006157cdf8afa44d47ddc9d48aa5a72144c868b57103423dc75769d3f52b095d0dd050000",
    ],
    [
      "ETag",
      "arT7h8RCspaE/fGvECIcLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1592428057699"
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
      "95",
      "c1",
      "6e",
      "e2",
      "30",
      "10",
      "86",
      "ef790ae41e172440d096957a805db6a50ad0427ad915426e3c494d9dd8b51d5a54f1eeb59d50726915699172893df3cff8536664cfbbd768a0679a12f4b3811e69fc9281dc9dc5a0efed66012a635a9945f054016ada68d038b6d1fd8e907f9f6179fb430fa2b7e93c18d38d7abdbacaa354f804093671efc6327644811165ec7fce6e147ea7a538017b62c85996a46b67368fb2de09272f83c564765d56124e9c327bf0fde1c81fa342da37bf8610acf1da1df97f08b7aebc028636fc71011148484338feb5907c03a19eb8f22a9c08062dc53319822a2036319763c9338125e72de36af55b9dfea0dbeb5eb6fb17e783c1219af1106bca539bf0b0449f78cd35660bfe6a2b8c3addbc0732b7f38a1f4a81a25213ca1532d2d66653823e7dfbe63781935970de2bc516bb9557caac4c8da8543a6f7d357ad1aa13e119ae936e6e0a65b590634809c85ad054ac31211294aa07cfd51a0b51913d9acffd5391714a24a7a426fa96d641657a5b91fac79f0f4ff8ae98e7beea9dfe3d0cc6a7c22a6d1efb8adc60321d2f83e1f4ee4bb8f9ae8ecffc68a741dd496e868802373a3aeddea519136d741845bfb81d35da4e222d3370ee109b917c43b5f1459829f0f6de0718376ad4fe070000",
    ],
    [
      "ETag",
      "51prZkeSJ+t9fxMOTEijsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ios_app` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-6-1592428057699",
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
      "54",
      "db",
      "4e",
      "db",
      "40",
      "10",
      "7d",
      "cf5758ee2b49ecdcec20451405b78d1402380ea8aaaa64773d76176cafd95d8310cabfb36be7621744fb16cf9c39e7ccec4c5e5b86613ed02c344f0d13d3f8b100fef2e59e61f3446740a2586782a91df9d1b3b8cc53b17ab8b06e91dfbfbf994c2a142dab054af304da82159c80385d2d3b3167458e38636d45d81eb5ede1b837e8b9d6d0198dc755a980249ad3ec4113fc913217a7ddeede4627662c4e00e55474084b0ff1ee53af9b73760f448a6e53b5ab8444f753ddb384112429cb26ab65e5a110c0d790229a6817c7e2107f6db277284a3bb1423f510288105664523bab6808cb221a17bc24574caf2aa8c2a5e5c3672d602ebdb9370d8c0d65628df27c632061acd71c449148e39b7f75696c549b114d406c8cbb1f9eef296cb83126c659a958b2852024cd4acd00e1046a4a2abb1bd3ec83073a5068122491801d6ced582364bbd61847d82191db1fe2c8028c5dec0c511f5b643c80418801d519a4d6aeea51c632db8161e4f44868f7edfe708cfaae1b59085b96835c827b111eb97d6700b6b963d81efa79e654c205153913743748f3ce9f05de3af0578be979e0d57b8f909ad545e5bed979a325a9865477fbd958de39ca3965ca54f964b345e0f9e7d360765bb3a1f6670e31222fcb47bd41114a041cab11472948e0972cd48f635e5f2d67c1ec6a713e3f32942b71bd470a05fb75307beca9ce16bce4cda7ae5ea18a6a9ba38159cb6d4f3e64b9",
      "4549f101cdd32e6cda0d8ed6dfbf7eb76adca6bab59d2bf366e5f93f756d99d3191f22e09091a3da7feca62eacd2fffe2751e8fd61eb0275db07792155585d09114771c2a1ba199a569dee08d5eef7067b4255c8e57b84331aed11ef8e5b6b410a99dc8fa23af26a8edb86a5a266a72cd370b5e38bd9e27b69beb56dbd01b76c20ba9f050000",
    ],
    [
      "ETag",
      "TC1fRfwsMpmsUkD0VaR3jQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30147de75790ee71235133752cf14116dd9610dd587c5a8ca9e582b8c2c5b66c2186ffbeb680fa427bceb91f3d87b3e3bae4272b62f2ec927d969e2a10f55d0aead35c22901557521f251612c883a9064553531d1c57aa1e9c58bce4c3e4f5304d96fb7b98cf666d956407c8a9ae3b6ba47192018fa5c6df16bb1d6fb582e66026ee76c22eb4133a4dd5a5d582f53a5ccc57b7528eb195569b309c07e182745263cfadfe36f62947dc4790808082c1f541a5c02330f56e9d4b9a971c3c89956020bb25a6b1955381554905a2a7296fe20dc7fee871f434184f27bedf5773645465589886cd17b9ac57a8288ff0cf9827c3361dd1c2368b3e0992dcc4731b90967e4db31215900bdb74b7add3a3ed755f502b901f02b51b09d6833f207d1a2f68dc2a138619696946f50f7bcb94e612ca25388df30fdd6f93ea1c020000",
    ],
    [
      "ETag",
      "BjNty0qcdFl1fGh7fFb+eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfdb7243400000d07fd9e7c84c5883bea11a9716cd6de9cb0e6be926715db6c8f4df9be9f983f300192194733cb637da8017b064b2b125dba0d5adf58754d62a2e52caf3be39deb15e57698c444da0e4e1769e64669e27370bddd3c777c3923610644c967de0515d17e5e926595793a16514bb489eaa321c5ff3ee3d77de9022b58ea55db53852ef364fec75e7c3c4b7a3fd8c8ae0ccca79a834540767b2c2af3e3f1438d4207572bb6afaa6e85357fba4cc3f3a9da9bb488a2e95c5b24cf590110f9ee0e4e0408523083680ce1d1b28c7ec395354c3d880ff261e978e3eaf16cd063a80df3f440e85f905010000",
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
      "Wed, 17 Jun 2020 21:07:51 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1592428057699",
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
      "54",
      "ef6f9b3010fd9ebf02b1af4d08090949a5688d52ba464ac80aa455354dc89883b9259862d3a9aaf2bfcf36f94196aadb37b8bbf7eedd3bdbef2d4dd39f491eeb979a1e91f4a582f2edcb138df40b99018e52994983ec11065dcf7a1c54be99ddb0e061f6723799d45544a119da1419b419ad4a0cec72ed77d29256052a296d0bc2b6dd3607e39ed51b7507f6703caea10cb26441f26749f08bf3825d1ac65e4627a534cd0015847530dd1ce2c66bcf284afa049833e3b4ab211a31e3d3be5f338a1127349facfd5a43c5a00c618348a6463d80e3e8ea94bd43d0a6938aea578201614cab9c4b65350da67942d2aa54e482e95d044558493efc3602baef2c9c59a0619a559b3cccd1062eb4187114f2b702b41b6fb5d4e6eecdca5b4e83f9ca0dfdd9adb39c7666abc57ae9fadac3ade3391a4751060aab4db42bf5e78a1fa548758b8171922b4d81cc369488eccec6f9070b3c504812a18ac1ae2cb4bb43648ebae328896c9c8cfa8328e942148d227b80fa51178f2db0e20850934129abf1281746d95662da160e21b6acd01af7e27094446668f5131ba2816dc5435bdfa1b787597e9784c3356105656467b2fee0cd03270cbcb53b9b064e73ee045519bfae959f4e7d320e170635957e66c999a2a224548852eb9cbb81e34d67c1fcbe21439cad05a408bff92ff2742528637044a352ec8a43b9a4b15c8cee4e97cef511ac4ecaf77d1113153f0e3a8fe38842b97f35cbd9fe4ffb04e2609d5851efa68eea7ee0cddd6f7a23b9fd98e61e65d5073cafbbb0b43021d9d12f45d5fafbeb67abd142173775a74ebf5b3bdea3c4aa9ccc78904009393e36fd",
      "8f932b8175fadfef90a8de3f0b12205e86437bc64558dc21cc8ecd7109f58d22b5ef7b42db1c9af69e50004b7e5e61f7cd7dc5d9d3207bc10672beb7a27e226a1fb72792aa861c0593e5e216b8bb156e5bdbd61f3f059f05dd050000",
    ],
    [
      "ETag",
      "gTlYe50R4Y5uS1lFsTWCqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1592428057699"
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
      "95",
      "d1",
      "4f",
      "fa",
      "30",
      "10",
      "c7dff75790fa28244040c5c487a1f89364828ef9a08690bade66fd75eb6c3b0c31fcefb6dd90bd689648b297b577dfbb7eb2bbb4f7e9b45ae83f4d093a6fa1171abfe720364731a87bb3f141e64c49bd643c9580da261a148e4df4d07b7c0a737f2106ee24ba16ddf8feea187f5c5c1451327c8504ebb84f6d693ba2c088d4f6b3b55ba5df6a294ec09c18729627e9ca9aedbdac36999517813f9dfdab2a092756993d789e3bf626a894b6ed9f21042bbcb247fe0d61d7a553c2d01b7ff12102016908fbbfce047f83504d6d79254e32061dc97311822c2126b19063c1f30c0bce3bdad539edf486a3fea07fd61d9e9e8c46bb68c643ac284f4dc2c3027de3155798f9fcc35418f5fa450f44611715df9502459526542ba4a5b5c9a6047dfbb6ed5f02a7b3e06450892d774ba792599b1a512155d1fa7af4b25507c233dc245ddf14ca1a21c79012108da069b6c2840890b2193c972b9c6535d9e3f9dc3b1419a744704a1aa2af691354a6d635a9d7dedc3de0bba29ffbba77faca0d2687c24aa51ffb9adc607a3b5904eeeddd8f70fd5dee9ff9f14681bc135c0f11097674f4ba83333d26ba68378a2eb91935ca4c222572b0ee10eb917c4395f645984970b6ce17084795b5fe070000",
    ],
    [
      "ETag",
      "5LYZcuRSr4AEfFr0gQD+aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `date` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-8-1592428057699",
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
      "ff8d546d6fda3010feceaf88b2af8504c86b25d47534db982865105a4dd3047672c9dc8638b59d4e55c57f9f9d04086bb5ed137077cfcbddf978e9689afe40f2583fd7744cd2c712d8f3bb7b8af5339501815295f1c685b15c79d7626e4e8df99704c71f1ebd7434aaab4885e6685b64d0e5b46411f0f3d5b297325a168851da95845dafdbb7fd8135f04cdb757cbf8672c89229c91f14c14f210a7e6e187b1bbd94d234035410de8be8f610379e0646c1e83d44821ba7aa8614e2c65f752f321a2141683e5a2d6b0f2507b6862d2299727104c7f8fd297b8fa06d2f95d54f24021445b4cc857256d344344f485ab28a5c32bdc8a00c57960f3f5b017d194c8371a86d622460a321aeadd70c789909ede3e2e65adbc81e139201df68779f8345a06d48bcd146da45255751c5c005c92bc110e10c5a3232dbcc68f2c6760e148a0409c4a1295bbba683fa9ee9e304bb51e20d6d9c9880b1875d1b0db119f916583106d466104abbc6a39ce643ab6ff7b16b21eca84f2719da4e6239f6c0f11dd7f4863e32c1f520d61b86dda19f5f8c08b822bca09c3453d4ef16933058878bd56c7c1906edde1324677555bb3fedfca4252187d476fbb7b1bc72543042a5a96a5f9359182c2ec7e1e4b665433e9e29a4287a5e3eaae793a08cc3118d18da8200764d63b51c7d7eb39c84939bd9e5f4c850bd87f9be92cbb2ef07b3c79eda6ce17371baea7a0b7554d9742cbd95db9dbdc9728bb2f20d9aa726acf74f383a7f7efbd16971ebf2d01a57fad755b0f8a6b0554e65169000833c3aaafdc7db54c03afdefbf1159bdbf6a0590877d90e74286e59544fc281e31a86f866ceb4e1b4277e079ce9e500299785de1fbf6bee2d5652b2dd8422ef6a3a82fbc9ee3eec452d9b2",
      "53c154b97ce3b3c9ec5365beb3ebfc06d26ba8ab9c050000",
    ],
    [
      "ETag",
      "8Cp/SU8MtP0L/PJfbdBq8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b48f73a1220ea74890fea4c7433cb70fa6016636abd305ce1b2b6cc18c3bfaf2da0beb43de7dcdbdb737a715c97fca4f9813cbb649f26bf2588f343022a328725c8922ba9b7027309e4d15483a289a99ebdce3741f6768ca67cd299ac806d4ef359341cd655927d434675dd45238de314f8416afc65b1dbf056cb6906e6c6dd4ed881f6864653e7c26a2fa3d5f49ecff060f9f7f562311a2fa6a4912abb6ff55ad9771c71bf841804e40c6eaf29041e81a9b9b52d695670f0249682816c8698c65a4e04960515889ea6bcbe1774076127ecfbdda7de60d056736454a5989b86f527b98e57a8285fe2c93827411d8da8611d441b0389efb2b94f474b7fa639f443dff343cf0fc855ab9ad3d669d1f636757c56203f046a4f12ac93a0e7933694091ad3ca64a244099666547fda2c559a8b2997e054ce3f7fe9f34e20020000",
    ],
    [
      "ETag",
      "HJIY1mKjQElC4CTecYwIHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0bbf45b0dd354617f600011900c171dfc90d2b5502d2d1411cab2bbcfecdde0fd008431e9fbe221ef448077a0d1da5ae155284d671ee91027ebc961a9dc0e32225ddd97a5b9e755326cde5a565746eb5fba94507daea1d7dcc66795d8ce2462becd53dabadee8bb45890ed88f9654656e37fa8dc893b8fc0ebe0ed7dcc977153b7dc2eac86df1018de1a8910ce9fe7cd7a145dc54990d94363d3f4f823546d4719dddccc6e44b2a8b2bb51816869839f4bdcb6e46718f4899a909d9331ea48982002c00995aa6485fb0d76c032d6b01fe9bc543b7e4757508524481df3ff803d2a005010000",
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
      "Wed, 17 Jun 2020 21:07:53 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1592428057699",
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
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cfaf40ecb50924810295a22d4ae89a29211b21ada66942c618ea96606a9b565595ff3edbe4832c55b737fbde7bce3df7c37eeb689afe88cb54bfd2f404e74f35a2af9f1e48a25f480fe220979ef2b634eff3e96488afe9a3e9bca481ed7c1b8f464d14566806365581ba8cd4142276b55ef5724aea0a5042ba82b0eb75fbb637b006ae693b979ed740192ab2392e1f25c13de715bb328cbd8c5e4e485e205061d6836473b01bcf03a3a2e40141ce8cd3ac8648c48c0ff37e2e08041c9372b45e351a6a86688c36001752c5119c265f4ed97b186c7ab9887ec6100108495d72a9aca181a4cc705e53452e98de84519895e4c3b565d057fedc9f441a2445bd29e3126cd08596020e62fe5a21ed3a5c2eb45970bd0c17e368b60ce2d5e4c65f8c7b93e57cbd0856dadd8d1ffa1a07498114561b695fd42d1017a548654b11e3b8549a22e96d2911de5d1b67ef0cf0402149842a867661b1635e82be6b7a4996383073877692992849dcc4b1c13031a167212b4d10683328650d1e94a4f46ce80e6c60c556e6d9b165a141ec5a8e195ff6dd7460f5fb36b091be436f0fb5bc50ccd114b38a30bc6bb27e17ce223f8ec2753019477ebbee0cd4059f36ca4fab3e29878b06b5957ed492334515c5448852e39c05911f8e27d1ecb62543ecd61ce500beae9ee47665a060e8880654cc8a23ba20a91c8c1e8c17fef408569bf27d1fc444c4af83ce63392250ce5fd572",
      "36ffd33c9158ac935634b369acfa2a0a67c157bde5dcbe4f730b8afa1d9ee79d59b630c3c5b15f8aaaf3f7e977a79542172f75a74effb1f6c39f12ab7cd213a20c5154c263d2ffd85c096cdcfffe8744f4fe5b9000f1331cd2332ecce20d41764c0e296a5e146efabe2774868eebec090590f2b3084b9cf611675f83cc8536a8e4fb56345f44d3c7ed89a4ba2547c164b87805c16e84dbceb6f307f65e35cbdd050000",
    ],
    [
      "ETag",
      "nVn0hgDC3iFrk07wdN57JA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1592428057699"
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
      "95516fda3010c7dff32990fb0a1a50da91497d004a37a4143a48a56915426e7c09ee9cd8b31d2a54f1dd673ba1e4a555a421e525f6ddffce3fe54ef6bd79ad16fa433382beb5d0334dfee620f71709e89f76b3049533adcc2278a600b56d34689cd8e8cbedf0b78f27fd95fa22b6d9afa09b4ce8eef5e6a68852d116526ce2de8c65ec980223cad84fce6e957ea76538057b62c4599e661b67b64fb2de0b27afc2e56cfebdaaa49c3865fe1804a3713045a574687f0c2158e38d3bf2ff106e5d7b250cbdf0e725c420218be0f4d742f21788f4cc9557e15430e8289ecb085409b189859c489e0b2c39ef1857c7eff4aefcfea03fec5e7dbdf6fd6334e311d6946736e17185def19a6bcc96fcd55618f5fa450f646117153f9602c59526542b64a49dcda604bdfb0eed4f0267f3f07a50892d776baf92599b1a53a974d1fa7af4b25567c233dc24dddc14ca1a21279011908da0a9d860422428d50c9eab0d16a2267bbc5804e722e38c484e4943f41d6d82caf4ae26f52e588ccef8ae98e7beee9dbe1d85d3736195368f7d4d6e38bb9faec2d1fdc38770f35d9f9ef9f15e837a90dc0c11056e74f4ba83a119135d741c45136e478db69348cb1c9c3bc26624ffa0daf862cc147807ef1f5579a9dffe070000",
    ],
    [
      "ETag",
      "3h8Z9aC2Ss/phnXL0gCivw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `stamp` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-10-1592428057699",
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
      "0002ff8d546d6fda3010feceaf88b28f2b1042484225d45534db9028ed4268b54d13d8e692b90d716a3badaa8aff3e3be12559ab6edfe0ee9e97bbf3e5a56518e63dcdd6e6a961629a3c14c09f3fdc316c9ee80c4894e84c44f08f1b46c6bc7f31cf08f0fec3c7244846a3aa8a96688136790a6dc10a4e409c2ee69d84b322479cb1b6226cf7ac766f30b41ddbb7069e3b1c565801693ca5d9bd66f82d652e4ebbddbd8f4ec2589202caa9e810b639c4bb8f7637e7ec0e8814dda66c572989eefbc26729234852968d16f3ca4421802f618368aa6d1cd16bfca949dfa168d34954f523258008614526b5b58a86b02ca649c14b72c5f4a2822a5c7a3efcad05cc79300dc691b11252a9ac0c248ce592832852697c0eaf2e8d95ea32a629889571fb3508036345d72b63649c957a25d71a84a459a918219c424d476577539abcb1a0038526411209d8952d3dcb453ddf1ae2187b24f6fb031c5b80b18fbd01ea638b0c1d70d618509d416aed0a8f3296113c707ac873c8c075c0c2c8c6c8b21494c0dac7b6ed21bfe70c5dd732770cdb433f4f9c4ab8a0226782eec668de8693285846e162363e8f827aef3152b3baa8dc373b6fb424d590ea6edf1bcb2b4739a74c992a1736994541783e8e2637351beaf54c2141e479fea0df4f8c52014734e2680312f8255bebe598d757f34934b99a9d4f8f0ce583b8de570a55f6f360f6d8539d2d7ace9babaeb65045b54dd7316bb9edc99b2c37282ddea079dc85cd5e83a3f5f7af5fad1ab7a94e6de7cafcb608c2ef1a5be67426841838a84fc7f12cfefd3635b04affc7974495efef5a23d4691ff4d57949aace8488a33ae1501d0ddd54adee083dd7f1dd3da10272f9bac2b5ed7dc5abdbd65ab0814cee6751dd7835c86dc35251b353c274b97ae4b3c9ec4b69beb56dfd011c13e6",
      "aba0050000",
    ],
    [
      "ETag",
      "TcbZVocCr3DSncer3q+gEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1592428057699"
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
      "4d",
      "51",
      "5d6f8230147de75790ee756c40c48d253ee866361735ce8f6cd9624c850bc301c5f6b2c518fefbda02ea4bdb73cfbd3d3da747c334c94f9287e4c124db24de97c00f5731e09b3acc4194290ab9152c1740ae5537208d55f7f3143ff6363e7ddea618f743f7d57d0f93b8d7abbb44f00d19957d4789248e12484321f197c66653d75c4e3350376e365c0bea1b1a0e0f85e696a3c970b1ec4f669764c6424d4e57e3717f301e9286aaf4be966ba51fb363db3944c0210fe0fca482b31d0438d2de05cd8a142cc14a1e806844d4604dc79c9505e58c59b26439b6e578bedb71ef6defaeebfb6d7bca028a09cbd5c46a414efac890a673f6a7fc13a70e88d7b08ea30d834417095d6624a95f3d7ce3494dcf77fcced02727ba6a4e6ba345ebb3f0e08020669c495f02b41ba76b93369847a68ca3ca057909ba1c50f97b2f09ca5a4453014665fc030c7c7dd229020000",
    ],
    [
      "ETag",
      "GNtXq0tDZ/ltgAd2J2Wdig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c7",
      "6e",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "f139442194d55b216684a13a401817cbb20c01ca103310f5df1bf5fdc17b0142291b473c75356bc127d8c8593dd2a3d329dabee6df4834e2da87c206a56cb7a02aa74c33d3d6371ebe63896e16647aa2d8b2e4dfe9c9e1d2af7e0e61385e2febadb0135ac93c8a091792d1ee78e35670531ec0ca97974dd094c016b5623747a98a891279f6d36df4d665168421923a53386d29c1f02121ece388336794444de6dd4dda38f37219a28feb1a2cbc97ba51eeeee84c9d5a57c21fcfca501594ad0dc101b0675f0e6cc4e57b2688aa7a00ff4d3c6d3d7b5f3546063680df3f7d66a75b05010000",
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
      "Wed, 17 Jun 2020 21:07:57 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6f9b3010fe9e5f81d8d72640de53295aa394aed112d211d26a9a2664ccc1dc00a6d8b4aaaafcf7da262f64a9aa7e83bb7b5eeecef65b43d3f40dc942fd52d303123f9550bc7e7ba4817e2133c0512c338febbb9f3c9dc0edf065bd7196766ad8d1e6653caeaa88423394e60934192d0b0cec72bd6ac5052d735450da14844dcb6a5abd51bbdb1e9abd417f34aab00c92684eb28d64f8c779ce2e0d63efa315531a278072c25a98a687b8f1dc36f2823e02e6cc3895358412333e17fe9e508c38a1d978bdaa4c940c0a1f52441269e3880e83ab53fa1641692b16d5cf0403c298961997d62a1a4cb388c465a1c805d39b088ab0f27cf8ad05f4953db7a79e866952a6999fa1142eb41071e4f3d71cb41b77b9d066cecdd25d4cbcd9d2f157d35b7b31694d97f3f5c259690fb7b66b6b1c050928ac36d6aed49f237e9423a51602e324539e3c99ad3911d9dd1c671facf0402149842b06bb327f60f69135344741140c7034ecf482c884201806831eea04261e75a11b0680ea0cca59854719cd3a38ec98bdded0ef9b91e977bb41d70f3a51e85b6dcb6ab72ddc19614bdfa1b7875e5e0ac2e19ab09c32b21bb2fee0ce3cdbf7dcb5339d7876bdef089509bfae9c9f767dd20e1703aa3bfd6c24678ef28250614aad73e678b63b997ab3fb9a0d71b6e61023fcba7a92a72b420983231a1562571c8a050de5627467b2b0af8f607552eef6454c54fc39f83cb6230ae5fe552f67fb3fd5f1c4c13a1945b59b2aaaaf3c77e6fcd06bc9edc734f728293fe079de85e50823921ce7a5a81aff7ffd6dd42474715577eef45f6bdbfd2db12a27332e445040868fa25f38b91258a5bff01289f2fdbb2011e26938e8332ec2e212617654c70554578a5483df130e06dd76674f2880053fafe89b07c9b3b7416a410a19dfcfa27a23aa416e4f2c95353b0a26cbc53570763bdc36b68d771c8b53d7e0050000",
    ],
    [
      "ETag",
      "jUPKtmAeH8wUkNOEm/Efkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1592428057699"
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
      "95",
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "dff729487d14124650c4c4075054920102f3c91052d7db2c76eb6c3b0c317c77db6ec85e344b24d9cbdabbff5d7fd95ddafb721a0df44e1382ae1be895461f1988dd59046a6e360b901953522f294f24a0a689068523131dbc3d92e5fcfcb6d7a724de3c4ceedb21eecd6f6ef22819bc418c75dc97b6b41d5260446afbc5da8dc26fb504c7604fe42c8b93b5359b4759ed522b2ffdc578fa5056624eac327df6bcc1d01ba142da377f8710acf0da1ef93f845d574e01431bfeba80100424011cff3a157c03811adbf24a1ca70c5a9267220059404c622e47826729169cb7b4abe5ba2df7a2dfe976aeda17bdcb7eff10ce788015e589c9785ea21fbee20ab305ff3425466e276f82c8edbce4875aa0b0d4857289b4b435d994a01fdfbef947e078ea5f764bb1c56ee594322b53432aa4ca7b5f8d5ef4ea447886eba4ebab42592de4081202a216344dd798100152d683e7728dd3b4227b389b79a722e384084e494df42dad83cad4b622f5de9b0d4ef8aee8f7beea9dbe1bf8a35361a5d2af7d45ae3f9e8c96fe60f2f42b5c7f57c7677eb853209f04d75344829d1d6ebb7ba5c7441b1d66d12d37b3469951a44406d61d603d931fa9d2be103309cedef906c85a1a5cff070000",
    ],
    [
      "ETag",
      "chHdSQ+C79idmjGMF0fa7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT `first_name` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-12-1592428057699",
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
      "54ef6f9a4018feee5f41d8c7550585024d4ceb5ab699586d01db2ccba207beb0abc8e1ddd1cd34feef3b0e545c9ba6dfe0fdf13ccffbeb5e5a8aa2ae70b6542f1435c4c9a600bafdf44442f5acf4004749e949c6d35576079f37c0cca15ff4efbff456db6430a8a2b0cc66689da7d066a4a011b08b99df492829724409690bc0b6de6beba6d3337ab6665ae78e53e53248e331ce5625c26fce7376d1edee757412429214508e592722eb83bdfbdcebe6943c41c459f794b62b9858f77de2cb94448863920d667e25a26040e7b0463895c51eb297e1d5297c07a3752711d1cf38021445a4c87829ad82894816e3a4a0125c20bd08a3304bcd87df8641f5ddb17b1d288b1853c6e7195ac342414c99cf29b022e5ca576f7aab2c44a9314e812d94c7efaee72a0ba974a10c944bc92b3197c038ce247380c2141a7cc25b776bf4c6a00e102508e288411d36b7b473a4db9a13c6a115c576df0c630dc2d00e2d13f5432d720c309621a026022fb9ab7c94914c0f0d1b1996a6db46bf77ded74cc7d62dc3b4f4d876e2b0a7eb2806b096b65a23ec0ef5fca198c30d663961b86ea7fae88d02771e78b3c9f530709bb5c748b4eba6527f5af949495c34a9a9f6bdb6bc5294534c842839b8d12470bde175307a68c8105b348604455b7f53ee518c5206c76c44c57839d05bb22c87a3de4dfd51309a4e86e323825c8cbb7d2413613f0f628f3535d1826d7e3aea6a0a9555f5036f34f9a6369cbbb337611e505abc81f35c9b5578122b4f30d3aee0af6c935cfa266eebffaf5fad069f2aeeb096aadecf5cef47992b7da5c783182864d151c10716b64cacdc1f786644f8fee8cb0c71f7077ec68559dc4ec48eec11",
      "85ea92f05a4ade035ae2088c3da048a4fc7584e198fb8857875f72c11a32beef45f500548ddc9d482a1a72645a192e367f520f74d7dab5fe01dbc24a78bd050000",
    ],
    [
      "ETag",
      "gLOknPe+qes5ASu3QB2kyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1592428057699"
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
      "4d",
      "51",
      "d1",
      "4e8330147de72b487d54a210a7ce640fdbb228092e8eb9a831cb52e0829dc0656dd12c0bff6e5b60db0bed39e7dede7b0e07cbb6c90f2b13f268938865bb1af8fe2203b9d09710449d4ba18e0a4b01e44a5783a499ae9e0e2edf5f926b3f5a2e8259c13e16d3cf5d381e8dda2a117f434155dd4121855306792214fe32d8ee78a395b400fde266c3cd40f342a7c97d65b4e55be8cf9fce950213a3cc5741309e0433d2498d39d7eadb984db618859002873286d33e15c72dc4d237c6052daa1c1c81358f41744374632b671ceb8a724447518eeb39ee60e8dd7a0f3783fbbbe1b02fcf31a69261a93b564b729c2f51d23cc43f6d9eb86d3abc856d167d12243d8be73c2025fdeae61967408e6cd3ddd6568fd6a77993bd04f1ca51d911604c78dda6dad614b55fa9e390bc0643c754fdb167261597d25c80d558fff5e8c1501d020000",
    ],
    [
      "ETag",
      "C5+WMd/IbSQLEmiXQCYqRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "43",
      "40",
      "18",
      "00e077d9ebc8a44ea5778e114b0922e2c6a8fcd3a24a767736c8f4dd9be9f706df03d54d0394566cece107bda1a516f56db3c5a366aef7abd1926814b05b4b1ac57160ae81a775b9324c1138657fee4550e52eb45266e8c2ae70ec393e62a6c9c75beffa07baa784f9f255520de272c2d5fcfbe065e950c0d73b40c38890f6d56b77e7980c99adca7c749399ee95b648c480da3ccd7a3c6485938d56a950ec3589297ff8897509c7d94b298ff3728a2ebab00c72aedc940c58f772aa4fdd6e2d3fbd73883608e6a92540abf63993145ddfa0ff66c596099e57136a0204fdfe018e1ce35005010000",
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
      "Wed, 17 Jun 2020 21:07:59 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b40107df75720fa1adf2f9848566339b841b2718b71a2aaaad0ee32d04d304bd8255514f9dfbbbbf882eb28ca1bcccc3973e6b2f3d6300cf3896691796d989826cf2514af5f1e1936af9407044a94e7d1b19f105f4d13374be3f9c370deebdf433299545154a339dae62934392b0b02fc7ab36e25052b735430d69484cd6ebfd91ddabd416fdc195a23dbaeb01cd27841b327c5f047889c5fb7db071dad84b124059453de226c7bb4b75f7aedbc608f40046f9fa76dcb4cbcfd71e2af29234850964d36eb4a44c9a108618b68aa649cd011be39a76f51b46d2532fa85124084b032134a5a45435816d3a42c34b9647a934669d69a8fbf3583b97616ce2c30084bcb6d1666680b574684040ac56b0ec6dc5f2d0dd79baffce53470575eb89edd39cb696bb65a6c96deda78b8737cc71008a7a0b1c6c4b8d17f9efcd18a74b608b8a099d614286f4d89f4eefbe8be33c223852291aa38ecc342ab3342dd71c7c631b6483cee0f71dc018cc7d81aa23eee107b00830803aa336865151e652c1b8d87d1080f70886dcb0a07e32e0e51dc2521ea238ca2ce08b03530f7e8ddb196bf0515704b79ce38dd37d97cf0ddc009037fe3cda68153af3b46652a6e2be5e7559f95236483ea4a3f6ac985a2bca04c8ad2e374bdc0f1a7b3c0bdafc990bbb5800491d7f5b3daae18a51c4e6854c8590928962c528331bde9d2b93d81f5a67c3f047119f1eba8f3548e0c54f3d7b55cccff3c4f2017ebac15d56c2aabb90e7cd7fb66d69cbbf769ee515abec3f3b237ab16c6343df54b5335fefffadda8a530",
      "e553ddab337f6c1cffa7c26a9ff2f8104301193925fdc4e62a60e5fec42592e187bba010f2341cf37321cdf211117eca4e0aa89e14ad1a7f20b4ec9e353a104a60212e2306ddee21e2e236a85cb0854c1c7a51dd88aa91bb3349654d8e86a970f90cbcfd0c778d5de31ff6a3d397e0050000",
    ],
    [
      "ETag",
      "jE9kasOAgInlfFW5F23Veg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:07:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc595516fda3010c7dff32990fb0a1a649495497d808d6e4829b4906ad526844c7c49cd9cd8b51d2a54f1dd6b3ba1e4a553a421e525f6ddffce3fe54ef6bd7aad16fa4b3382beb6d08626cf39c8fd4502fade6e16a072a6955904cf14a0b68d068d131beddfdfe86736f8c4ba4fdb47e16f7e2751fcebe5faba8852d113a4d8c4bd1acbd831054694b1ff38bb55fa9d96e114ec891167799aad9dd93ec97a2f9cbc0c17d3d98faa9272e294d943108cc6c10495d2a1fd3184608dd7eec8ff43b875e59530b4e59b05c420218be0f4d742f22d447aeacaab702a187414cf6504aa84d8c4424e24cf05969c778cabd3fbdce95d0efdbe7fd5bdfc32180e8fe18c4758539ed98c87257ae76bae315bf0175b62d4f38b26c8c22e4a7eac058a2b5da896c8483b9b4d097af71ddaff089ccec241bf125bee565e25b33635a652e9a2f7f5e865afce8467b849bab92a9435424e2023201b4153b1c6844850aa193c576b2c444df6783e0fce45c619919c9286e83bda0495e95d4dea4d301f9df15d31ef7ddd3bfd7d144ece8555dabcf635b9e1f476b20c47b7771fc2cd77757ae6c77b0dea4e72334514b8d9d1ebf6afcc98e8a2e32cfac6edacd176146999837347d8cce49f541b5f8c9902efe0bd019c1ee2b6ff070000",
    ],
    [
      "ETag",
      "2QFtql6/l0hjXp2bZgcfWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ltv` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-14-1592428057699",
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
      "8d546d4fe24010feceaf687a5f050ab4bc9810355a4f2e885e291a73b9c0ee76da5b6dbb65778b470cfffd765b5eca698cdfe8cc3c2f333bc35bcd30cc179a06e6a961621a2d73e0eb6fcf0c9b273a0312453ab3bc5e676bd2ce9e7e58e3010e0601dc4cd1eb705856d1022d5092c550172ce704c4e96cda8838cb33c419ab2bc27acbaeb79c41db6ef72da7d71d0c4aac80381cd3f44533fc913213a7cde6ce4723622c8a01655434084bf6f1e6aaddcc387b062245f358b6a99444f373e1b3981124294b87b369692217c0e790201a6b1b077480cf8fe91b14258d4855af28014408cb53a9ad953484a5218d725e902ba6371554e1c2f3feb31230a7eed8bdf48d452c570b0309633ee720f2581ad7deddadb1503d863406b1301e6f5ccf351685c5853134ce0ac1822c0021695a48fa08c7501152d9ed98461fbcd09e42932089046ccbe63dab8b5a7d6b8043dc2361bfe3e0d0028cfbb8e7a00eb6c8c0063bc080aa0c526b977894b2b41b581d12067d27b0306983ddc1b61538ad6eaf1d200854bc4b6c0bba5d73cbb0d9f7f3caa9842b2a3226e8768ee6a337f2ddb9efcd269717be5bed3d446a5c57a5fbe3ce8f5a926a4855b79f8de59da38c53a64c152f369af8ae7771e98f1e2a36d4fa8c2142643d5dea050a512ce080461c252081dfb2403f8e797f371df9a3bbc9c5f8c0506cc4fdae52a8b25f7bb3879eaa6cfe3a3b7eeaf215caa839f5bdd1e4bb59496e4e3ea4794071fe01cf6a1b36e159ed3aa3c23a87bfc5988a6daff2d6fefff5bb56d133d5016ead9a3f67aef7a4b1454e673c0881434a0e0ebeb0b01a58a6bff0ffa2ca77d7ae11eae0f7fa42aab0ba1d220eea8443794934292cef08fb56db69ed081590cb",
      "f715b665ef2ade5dbcd6820452b99b4579f9e520374796f28a9d02a6cbd5e64fb60fbaa96d6aff00fb9f8671b6050000",
    ],
    [
      "ETag",
      "qFypyc2pYJ0L9bd9deHSaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "90ee756c82e2c6121f74999909fb90cdbd2cc6d47a6138e0625b668ce1bfaf2da0beb43de7dcdbdb737ab46c9bfca6c5863cd8649d26bb0af8e12a0139d78708449549a1b6120b01e45a5783a489aeaefa3bef252e66d33e0b16bb5b31935fc37c3e1a355582fd404e55dd512185e314b28d50f8db60bbe58d56d01cf48dab153703cd0dad260fa5d1a6e1dbf8f352c8716384d745188e27e11369a5daec4bb5d6e6215b5c4710038782c1f93925c72d303933be05cdcb0c1c81156720da21bab191138e554939a2a328c71d38ae1f7803efbee7df0d83a02bcf90519962a13b161fe4345fa2a459847bed9db84d38bc814d145d1024be48e7321f25fde966cf0f6e5c8f9cf8ba3d2dad0e2dcf13270709e29da33224c0d8e8f77cd225f288dab1d481485e81a119555ff69c4ac5c5341360d5d63fdb09d68c1e020000",
    ],
    [
      "ETag",
      "u3q2MfnIF3c9Uq/sItV6mQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf496e83301400d0bb789d460c45e17767c2101b28503531cd0631b862520206ca10f5ee8dfa6ef01e28cd733e0cc9786ff80dbda13555609fefddbb6e6c73c1a03928fcb39983a378c7d7c62b1d3f80fe1c2f9204a29357dcb7b0baa637492f50c73fcc636d3f5e4f5a0804b32d52bf6fd459b09a4e756565e1e227411cd7131dacc28ec8863b3b268bbfe49485ce0cf3ec33213b67f7437b5588e79854e8999ad972f07504d52ebc2832ca891203576b7b2a43fbb2b1340ecc238626b72bbd2dc2834253195ceb2211b4437ce92ac187a47ace540d6087fe9bc9b876fc7935782ab840bf7fb2ac95d305010000",
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
      "Wed, 17 Jun 2020 21:08:01 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1592428057699",
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
      "54",
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5f81d8c7b579232fa452b446095d9112d20169374d13b2cdc1dc129c6293aaaaf2df674312c8525595f880efee79eeb93bfbde1a9aa63fd134d4af341dd3f83987ecf5cb23c3fa85f28040b1f2ac3d78b943b67f6fa7bd14fd64c3e9f6eb6c321e9751b44073b4de2470c9599e11e0572baf19672cdfa08cb14b4978d9e9cb6fd4ed75cd767f38188d4a2c87249ad3f44931fc1562c3af5aad838e66cc589c00da50de246c7db4b7b6ddd626638f40046f9da66dc94cbcf571e26f09234850968e575e2922e79005b0463451322a7488af4fe99b14ad9bb18cde5202881096a742492b69084b231ae759412e99dea4519a0bcdc763cda07bd6dc9afa1a6149be4e8314ade1420b91408178dd8076e32e179aeddc2cddc5c4b7974ee04d6fadc5a4395dce570bc7d31e6e2dd7d204c20914586dac5d1727471e0a4545b610b8a069a1c957de9a12e9ddf7d17e6784470a45225571d88705c3f60075ccf60847784822d3e8e3a80d189b78d847066e93510f7a210654672894957894b234340661cfc0282066db087ac4e807261eb4833e18460f63e87530e87bf4ee58cb4b4605cc28df304ef74dd61f5cdbb702df5d39d3896fd5eb8e509e8859a9fcb4ea9372846c505de9472d3953b4c92893a28a71da8e6fb993a96fdfd764c8bb3587189157ef59ddae08251c2a34cae4ac04640b16aac1e8ce6461cd2a707153ee0e415c46fc3eeaac",
      "ca91816afe452d67f33fcde3cb8b75d28a7236a555f77cd776beeb35e7ee7d9a7b94e4eff06cf766d5c2882655bf0aaac6ff7f7f1ab514ba7caa7b75fa8f95e5fe52d8c2a73c2e4490414aaaa49fb8b90a58ba3fb18964f8612f28845c0dc7fc5c48b37c448457d94906e593a265e30f8466a753114a6026ce238cae798838db0d2a17ac2115875e943ba26ce4ee44525e9353c054b87c06ce7e86bbc6aef10fbbe0af8de0050000",
    ],
    [
      "ETag",
      "mSewPaITVIn4naXo7Cv+DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1592428057699"
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
      "c595d14ffa3010c7dff75790fa28244040c1c40750fc491c43613e1843485d6fb3feba75b61d8618fe77db6ec85e344b2459b2acbdfbdef5935db3bb4fa7d140ff6942d04503bdd0e83d03b13d89403d98cd0264c694d44bca1309a869a241e1c844dfb1ebbb99371807fdc1d6bf8d66a7f2eac9fbb8bccca364f00a31d6719fdad276488111a9ed676b370abfd5121c833931e02c8b93b5359b07596d532b2ffdc5d4fb5756624eace23dbaee68ec4e5021ed9a3f430856786d8ffc1bc2ae2ba780a137feb280100424011cbe3a15fc0d0235b5e595384e19b424cf4400b28098c45c8e04cf522c386f6957abd3d7cfb0dbeb0edafdf3b3e1701fce788015e589c9785ca26fbee20ab305ff3025469d6e7e0922b7f392ef6b81c2d22d944ba4a58dc9a6047dfb76cd5f02a79e7fd62bc516bb9553caac4c0da9902abffb6af4e2ae8e8467b84ebafe5528ab851c414240d482a6e91a132240ca7af05cae719a56648fe773f758649c10c129a989bea1755099da54a4deb8f3d111fb8aeef755ffe9eb913f3916562added2b72fde96cb2f447b3fb1fe1fabd3ab4f9f15681bc175c4f1109767674dabd811e136db49f4557dccc1a6546911219587780f54cbea54afb42cc24383be70bde80562cff070000",
    ],
    [
      "ETag",
      "KlDKMN8Bc58yTHgM+sCYNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ios_app` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-16-1592428057699",
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
      "54",
      "6d",
      "53",
      "da",
      "4010feceafc8a41f2b900442c01946ada62d164142d0713a1db85c36e969c8c5bb0bd53afcf7de25bc84ea387e23bbfbbcecde2e2f354dd31f481aeac79a1e90f83107f6fce99e06fa91ca8040b1ca743f3f7d19c32515d6e544b0c92cfc3bb9fb31e9f7cb2a52a0395a6609d439cd19067e3c9b366246f30c314aeb92b06e76eaa6ddb3da56d7b09d4eaf57623924d190a40f8ae1b710193f6e36b73e1a31a571022823bc81e972176faeac66c6e83d60c19b87b24da9c49bef0b9f2414234168da9f4d4b1339073687252289b2b14787c1e9217d83a0652396d52b8201614cf354286b250da66944e29c15e492e9450665b8f0bcfbac04f4a93b74cf7d6d41289fa32c5b68886bf339039e2742fbea8dafb485ec332209f08576fbddf55c6d51d85c687deda4102d0843e082a485ac8f82042a6232bb19d5e08d57da5128122410874dd9dc313ac8ec1abd200a1c1c755b7610191004ddc0b1512b3070af0ded30005465104abbc4a394a61099b613212b444ecb41ed76db0eb01d39a1117422d3b42ccb81a88dcd96be6158effaf9c388800bc233cac96696faad37f0ddb9efcd46e767be5bed3d42725c17a5fbc3ce0f5a12724855b7ef8de595a38c112a4d15af3618f9ae7776ee0f6e2a36e40a0d2146f879faa896284209873d1a31b40401ec8a86ea71f4ebf174e00fc6a3b3e19ea1d88aeb6d2597653f7766f73d55d9fce7ecf0a9cb5728a3fad4f706a36f7a25b93e7a93e60625f91b3cab4d58877bb9ef9470e3149e8a31151b5fe5adfdff",
      "eb57ada2a7cb23dc58d52733d7bb53d822a7321e44c020c57b071f5858052cd31ff88f91e5db8b570879f43b7d2e6458de0ee67b75cca0bc24b22c2c6f09bb96619b5b420964e27585d9db55bcba7aa5054b48c57616e5f597835c1f58ca2b760a982a979b3fda3ce8bab6aefd030525c914ba050000",
    ],
    [
      "ETag",
      "8+xBOeJot2JQtrQUdzQYKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "7d",
      "ef",
      "af",
      "28d9eb0ad3a99b031f54840945678730182231bdadd5b6b74b6edd44fadf97a4adfad2e49c733f724e2f8eebb2639287eccd65bb24fe29419e1f62a095b904a0ca94943e0acc15b047530dc46353fd779aad4e4b12abde5a455f5375dc1fe7f37834aaab94d843c675dd45238da304d25069fc6db1dbf056cb790666e2762bed423ba1d1e85c586db25cfab3f1e25eca30b4d262edfbe3893f638d54d973a3bf957dca01770144202117707b5021f10082e6d6b9e2599182a7b0940254b3c434d6722cb12cb844f434e575065ea73fecf6baaf4ffd97c170d896a7283825989b8ef527bbee27249e06f86bdcb34e1d8fac611d461b058beef2b94f484b27d34cb2047665abe6b6715ab4b9ed9b9c09d487446d478135d17deeb3368f291abf64e230332d2db8fe65ef09692ee2a902a772fe010a10628e1e020000",
    ],
    [
      "ETag",
      "xvEQvOtcQ4UsfXCskhkIIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cf4b7282300000d0bb646d1d0ca540774520081690f251371984201ff9348098747af73a7d37783f20cd32328e78ea1bd28177c052a8aeb3b5d32b1a5ff24337a7a16413e7ce59b71760e38b51de401592d848b1db06c782957cfe42da05153d5e32eb0d2a350b0c4b2e2cf3b5f65acefbca310346e758dc7a933076c9182df9c7f72642fabe4c983e274b2e84e8169d8beb67cbd52dbc09927fad140d29cc2b378750f3ef7a7d723d59e4f669b49923d090e23a36ec1d3a562d56bae642778e1c982fee7056356920bcc9c00a90c7505132e2ea391325555d81ff269ed8409e578da49450f0fb07ec6f617305010000",
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
      "Wed, 17 Jun 2020 21:08:02 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6f9b3010fe9e5f81d8d73621810452295ab394ad9112b211d26e9a2664ccc1dc124cb1495555f9efb34d5ec85255fd0677f7bcdc9dedd796a6e98f248ff52b4d8f48fa5441f9f2e98146fa85cc0047a9cce4b6436df3c17a4cabdb983a9b2ffed8faf93c1ad55544a1195a17195c325a9518d8d56ad94e4b5a15a8a4f452105e76edcb6e7fd8b37a8ed1b707c3618d65902533923f4a86bf9c17ecaad3d9fb68a794a619a082b036a6eb43bcb3e9758a923e00e6ac732adb114aacf3bef0e78c62c409cd47ab656da2625086b0462493368ee838ba3ea56f13b46ea7a27a4330208c69957369ada6c1344f485a958a5c30bd8aa0082bcf87df46405fba337712689866d53a0f73b4860b2d461c85fca500edabbf986b53efebc29f8f83e9c20b97935b773e6e4f16b3d5dc5b6af7b7aeef6a1c451928ac36d2aed59f277e9423a51603e324579e02996d3811d9dd1ca76facf0402149842b06bbb2d03606a8eb18c328896c9c38663f4a0c882227b2fbc88c0c3cb4c08a23404d06e5acc6a39ce6431b0c237692d08a90155a561f85c39e03e1c0344c3319f4aca83bd077e8eda197e79270b821aca08cec86acdffbd3c00d037fe54dc681dbec3b4155c66f6ae7a75d9fb4c3c5809a4edf1bc999a3a224549852eb9c7a81eb8f27c1f4ae61439cad19a408bf2c9fe4e94a50c6e08846a5d81587724e63b918dd1bcfdd9b23589d94effb22262a7e1f7c1edb118572ffaa97b3fd9fea04e2609d8ca2de4d1dd597813ff5bee98de4f66d9a3b94556ff06c766139c28464c77929aad6ff5f7f5a0d095d5cd59d3bfdc7caf57f49accac98c0f099490e3a3e8074eae04d6e90fbc44a27cff2e4884781a0efa8c8bb0b844981dd57109f59522f5e0f7848e69f4ba7b42012cf97945d73c489ebd0d520bd690f3fd2cea37a21ee4f6c452d5b0a360b25c5c036fb7c36d6bdbfa07c3c049a5e0050000",
    ],
    [
      "ETag",
      "n78o73j4kguHdo8vBRA4Xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc595df6fda3010c7dff92b90f70a1a20fa83497d808e0eb4142804eda142c8c497cc9d93cb6c870a55fcefb39d50f2d22ad290f212fbee7be78f7227fbde1acd26f9c31346be35c98e477f3390872f11e827bb5982ca845666493151405a361a348d6cf4c27ff27e65d11ab3c9fdcfc557354976f8f07a779747a9e037c4d4c4bd19cbd82107c194b19f9ddd2cfc4e4b680cf6c4004516275b67b6ceb23ea44e5ef9cbe9ec475989913965b6f6bce1c81b93423ab63e8630aae9d61df97f08b76e1a058cbce06e092148480238ff752af105023d75e555344e05b41566320055406c622e4712b3944ac4b671b5bb37edeed5a0d7efdd76ae6eae078353b8c0806a8e89cd58afc83b5fa3a66289afb6c4a4dbcb9b20733b2ff9a916242c75a15c2223ed6d3667e4dd776c7d12389df9d7fd526cb1db344a9995a921974ae7bdaf462f7a7521bca075d2cd55e1a21672040903590b9aa75bca9804a5eac1a3dad234adc81ecde7dea5c834611239ab89bee7755085de57a43e78f3e105df15f3de57bdd3df87fef85258a5cd6b5f91eb4f1fc72b7ff8b8f8106ebe9bf3333f3a68500b89668a2870b3a3dbe9df9a31d121a759748f76d6683b8ab4ccc0b9036a66f2846be30ba950d03836fe01b205c200ff070000",
    ],
    [
      "ETag",
      "PTQLWugUouHCKP/sHnboFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `date` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-18-1592428057699",
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
      "0000000002ff8d546d4fa34010fede5f41b88f6a81da173069b4a7a8cdd5ea01d55c2e977617066e1558dc5d7a674cfffbed425fe8698cdfcacc3c2f333bd3d796a6e94f248ff4134dc724792e81bd7c79a4583f54191028511971605c5e33c3bffad6fd0a074fc9c334f397a3e1b0ae22159aa3ac48e188d39285c04f667e3b61b42c10a3f448121e59f691d5733add8e6df6067dc7a9b11cd27842f227c5f05b88829f18c6c6473ba13449011584b7439a6de3c6b263148c3e4228b8b12f6b48256e7c2c7c9ad2100942f3e1ccaf4d941cd81c3244526563878ef0d93e7d9ba0ac9dc8ea25090185212d73a1acd53421cd639294ac22974caf3228c395e7ed6723a0fbeec43d0fb44584042c34c4b5f99c012f53a15d7ab737da4236199314f8427bb8763d575b541e17da503bad142bb608b82079a519209c42434966d7731abff3445b0a458204e2b02e9b0fcc3eb26cd3c1311e84b17ddcc3b10918db78d043c7d80c9d2e74230ca8c92094768d4739cd23842d6b1043041d88065dc7b631c44eb7dfc31d1c018a1c13a01f59a6be66586dfbf9c388800bc20bcac97a90fa83370edc79e0cda6e7a3c06df61e2339ae8bdafd7ee77b2d0939a4a6db8fc6f2c651c10895a6aa271b4f03d71b9d07e3fb860db93f134850f8e23fab0d8a51ca6187460c652080ddd0483d8e7e77eb8f83f1ed7434d931542b71b7a9e4b2ece7d6ecaea7265bf052ec3f75fd0a7554f7036f3cbdd21bc9d5e1bb34f7282ddfe159aec33a3cca65a7849b67f0b71a53b5ee4dded6ffbf7eb51a7ababcc0b555fdfbccf57e286c9553190f626090873b079f585805acd39ff88391e59b73570879f15b7d2e6458de4ec877ea2183fa92485659de10da8e656d09259089b7151dbbbfa97873f24a0b32c8c56616f5e9d7835ced592a1b762a982a979b3f5d3fe8aab56afd0316220f26b7050000",
    ],
    [
      "ETag",
      "t+/FHr/SGK4Be+kgWNmSvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d51c172823014bcf3154c7a2d23506da5331eb4ea68ab1da5f5d4719c880f8a028f26a1ad75f8f72601d44b92dd7d2f2fbb3919a6490e71b6238f26d9c6d15701ec78138158aa830fbc4804975b8e190772abaa41d04855b7e6ade7e9b87d48277ff1502c7ec7de4b315ff67a55150f3e21a5b2ee2491c4610cc98e4bfca1b159f35acb680aeac6cd86e981fa865a13c75c6bc3fefbe89a4f71a7f9d7d56cd61fcc46a4964abdafe55aea77ec71eb43080cb2002eafc919ee2110536d9bd3344fc0e258b000783d44355672c4b0c82943b42465395dcbe9786edbedda9d877bcf6bca130ca88831531dab37729e2f50d0c4c71f659d385536ac8255124d0e24bc0ae73a1e297dab66d7766dcb762ddb2167adac4f6ba341ebcbd4c151005f3094a638682b77768734a93ca1722d54288215a0e980ca5f9bc44272214d3818a5f10fd9286e6e21020000",
    ],
    [
      "ETag",
      "/M/JIF4kmHziDtPxF9KuMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7fd9e7c80435d9ed1b5a83465408b12f3b6bb32114eb5ad2e9bf37d3f307e70750c6f83090b1ad78035ec14a15b465db8f161a8f6f3ebbda90db29ab90256c76a18913b8411877ed49502fe98e713695662aac9a55d4419af0af7e80f5d8fa52e63d15aacc4d7863505ece9444a2c9237cdb650741dc229c909eee17e71ac1c09baa17757064bd6ed6d129cadcf6b30c5699f77636d26290e08c4a6a6a0bb52d07776cd706219ba2f7e0f0a92fc704e3bc25e5a9903c5c2b9751967c56f49a8e2bb0017c11f79e0fe4fe9ca91a421bf0df24e32af8f36a70daf31efcfe01c370312005010000",
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
      "Wed, 17 Jun 2020 21:08:09 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1592428057699",
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
      "02ff8d54db6ee230107de72ba2ece31608b70457425b16d21609c26e08adaad52ab28d93350d711a3badda8a7f5fdbe112daaaea5b3233e7cc998be7b56618e63d4d57e6b961221a3f14247ffeb666c83c531e2260ac3ce3bbf968bd86dfbbd14fffa67d5524d98bed3c0d066514d5680e375942ea9c153926fc7cb968c4392b329833569784f516a8b77aa0dd6df7ad9e630350623949a2294def15c33f21327ede6cee753462c6e284c08cf206669b83bdf9d86e66395b132c78f3346d5366e2cdcf13ff48188682b274b05c94220a4ef2906c204d948c237a852e4ee91b146e1ab18c7ea498408c59910a25ada4c12c8d685ce49a5c32bd4aa3346bcd87df8ac15cb8537714189825c5260d53b82167c60a0a188ae78c1897fe7c664cbccbb93f1b0693b9172e46d7ee6cd818cda7cb99b7306eaf5ddf35044409d15863605ce83f4ffe68453adb8a704153ad2950de8a12e9ddf571f2c1080f148a44aae26417163a960d5b7d0ba0083938ea777a28b208427de4f4600759187449778508ac326865251ea62cb5db2d7b05a015dad00261d70120044ed40fbbed88743a08b61040e60ebd3dd4f2945341c694678cd35d93cd5b7f12b861e02fbdd13070ab7547b048c4b8547e5af549394236a8aaf4b396bc5394e59449517a9c132f70fde12898dc5464c8dd9a9218e2e7c583daae08269c1cd13097b312249fb1951a8ce90d67eef808d69bf26b1fc465c49f83ce63393250cd5fd7f26efea77902b95827ad2867535acd45e04fbc2bb3e2dc7e4c730393e2039ec79d59b530a2c9b15f9aaaf6f6eb6fad92c2944f75a7cefcbd74fd3b85d53ee5f149447292e263d22f6cae0296ee2f5c2219bebf0b0a214fc3213f17d22c1f11e6c7ec3827e593a265e3f7847d007af69e5002",
      "73f13602589663ed23dedd06958b6c482af6bd286f44d9c8ed89a4a22247c354b87c06de6e86dbdab6f61f90bfbde0e0050000",
    ],
    [
      "ETag",
      "DYOCjja+4fBRV2Gulpz67w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1592428057699"
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
      "0002ffc595516fda3010c7dff32990fb0a1a61c04aa53ec0c636a614da10a44a13426e7cc9dc3a716a3b5054f1dd6b3ba1e4a555a421e525f6ddffce3fe54ef6bd3aad167aa22941572df440e3e71cc4fe22067567363ec89c29a9978ca71250db4483c2b1898ef2c1d0bfffe2e51377f5b27b4a22fff9cfd7bbebeb224a86ff20c13aee555bda8e283022b5fdd7daadd26fb51427604e0c39cb937463cdf64956fbcccacbc09fcd7f55958413abcc579e379e7853544a87f6c7108215ded823ff0f61d7b553c2d0237ff02102016908a7bfce047f8450cd6c79254e32061dc97311822c2126b19063c1f30c0bce3bdad571471d7730eaf57b97ddc1b7e168740c673cc48af2d464ac96e89dafb8c2cce73b5362e4f68a2688c22e4a7eac058a2a5da896484b5b934d097af71dda9f04cee6c1b05f892d776ba792599b1a512155d1fb7af4b25767c233dc245d5f15ca1a21c79012108da069b6c1840890b2193c971b9c6535d993c5c23b1719a744704a1aa26f691354a6b635a93fbdc5f88cef8a7eefebdee91fe3607a2eac54fab5afc90d6637d36530beb9fd10aebfebd3333fd92b90b782eb2922c1ce0eb7dbbfd463a28b8eb3e83b37b3469951a4440ed61d623d937f53a57d1166129c83f3067071ac17ff070000",
    ],
    [
      "ETag",
      "fu56RX/LuB1UxwkmfRqJ3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `stamp` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-20-1592428057699",
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
      "ff8d545b53da40147ee75764d25781708924ce30ea68b4e9206a086adbe9c066394957926cd8ddd03a0effbdbb0984501dc737b2e77c9773e3b5a169fa92a40bfd44d30312ad72602f5f9e69a01fa9080814a9c8927efbc19f1ed0355f2ff12abb729fb29bfefd7058669102cd5192c5d0e4346718f8c974d28a18cd33c4286d4ac266d768764cbbdbef5a863938b6ed12cb210e47245d2a86df4264fca4dddef96845944631a08cf016a649f5de5e77db19a3cf80056f1fcab6a5126f7f2c7c1a538c04a1e9703a294de41cd80c12446265638f5e046787f42d82925624b3d70403c298e6a950d64a1a4cd39044392bc825d3ab7c94cf85e7eab3f6a04f9c9173e16b732ea4ca5c435c9bcd18f03c16da95777ba3cd6595218981cfb5c7af8ee768f3c2e45c1b6aa7856441b7002e485a88fa2888a12625a3db46b9efcca8a2502448200edbb4d9c038461dcbb0833018e0d0ea994168401058c1c044bdc0c0761ffa8b00509d4128ed128f529ae28e19ca6683d5314ddb820120e899169633380e2cab1762cb1ef417a6ad6f1936553d7f18117049784639d976527ff45cdf99f9de747c71ee3bf5da4324db7559ba3facfca024219b5477fb515bde38ca18a1d254313377ec3bdef985ef3ed46cc8051a4184f0cb64a556284431873d1a319480007643176a38faddedc4f5dddbf1f968cf50ecc4dd2e93cbb49f95d97d4d7536ff253b1c753985f2559ff89e3bbed66bc1cdd1bb340f28cedfe1596f9f757896db4e0937cee06fd1a662dfebbc8dff7ffd6ad4f47479825babfafdd4f1be2b6c1153110f426090e2bd834f2cac0296e14ffcc3c8f4ddbd2b843cf94a5f9e9d20f27630dfab6306e52591a4b0bc23b40dabd3df114a20136f323a865149beb979a50509a462",
      "d78bf2f6cb466e0e2ce5353b054ca5cbcd1f6f07ba696c1aff0077990702b8050000",
    ],
    [
      "ETag",
      "koJZsXVaGsvkcqpFIXpM4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1592428057699"
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
      "4d",
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af58eaab3330983a131ec090483294cf44630829e36e16bbddd9761242f6df6dbb4d78697beeb9b7a7e7f4ecb82ef966f99e3cb964c7d29f12c4e9260535378705c8922ba9b7027309e4d67483a2a9e94e55c9e6effc63e2b3a8c0b7b477643b3f1d0cea2e197f414675df59238d13067c2f35feb4d86dea96cb6906e6c6ed5658417b43c3a95361b9d5643a5eae86d3d93599e1de92afeb281a8ea23169a8caee1bbd56f63107dc2d200101790c972715020f10ab89f52e695670f024962206d98898c19a4e05960515889e2e797ec7eb06a1dff71f3bc1c37d18b6ed1c63aa18e66662bd24fffa0a15e50b3c1affa45b07246a58c7d1864192ab84ae33d2d4af1dbe0bb4661076c3fe3824ff74d59c364e8b3617e1d149819c09d4be245837bd4e40da609ed118572617254ab0e598eadf7b614ad712ca253895f307de19a57f29020000",
    ],
    [
      "ETag",
      "gtuiQXlYI2iLpoOg3wib2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfdb7243401800e077d9ebc8741709bda3321315c13a65dc18e4970a0db1ebd8e9bb37d3ef0dbe1f9415053096f2b686077a474b46d46db1b55a455fa7e29335810d879be4f164b890d18a3a5d04c7ca8fa78f82610c9e3d53c25bfba9d164cec25934a6c138c5b62f781a935c437cb669d4886102e15d8a42cbd6b83c1d02f331fb7e615ecf5ffa6e9743dd3443ac50dd186dc5a2c1c5716fc7f42a60aa91ccc7eb39ad077dcf9b3de9392e7199f8a62b3fe9da0da4c4666d92fa0ee07c57b45f8c310f0321f604ed0d6d10cc5dd5034babd74c94557583fe9b295f3a785d75c87ae8d1ef1ffad6aa1305010000",
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
      "Wed, 17 Jun 2020 21:08:11 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1592428057699",
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
      "0002ff8d546d4fa34010fede5f41b88fa76d416a8b4973f62a9e242d554af55e7221cb32e02a65915d6c1ad3ff7ebbd017b81ae3379899e799675e76de5a8aa23e9334542f143520f14b01f9facb130dd413e9018e62e9e97d5dcffaf8ee2721dfeddbd9eaf7ea19add2d17058459112cdd0324be094d122c7c02e16f3769cd3224339a5a782f054d74eb59ea91bfaa0dbeb9f9b668565904413923e4b8647ce3376d1e9ec74b4634ae3045046581bd3e5dede79d53b594e9f0073d669a6ed884cacf371e26f09c588139a0e17f34a44c120f761894822651cd06170d9a46f13b46cc722fa95604018d322e5525a4583691a91b8c84b72c1f4268cc25c6adeffd60ceadc9a58634fc1342996a99fa2259c2821e2c8e7eb0c946b7736556ce77ae64e479e3d73fcf9f8c69a8edae3d9643175e6cac38de55a0a4741022556192a97e59f237e4a4565b610182769a9c993de9a12e1ddf6d17e67847b0a49225431d886f9fdee39d2065d3388823e8e0667bd20ea42100c827e0f9d055d6c1a608401a03a43a9acc2a394a6fa4037c1c0818f8c30f20da461df0c35dd37ceba46a899e6790f85ea16bdd9d7b2ca09872bc232cac8b6c9ea836b7b96efb90b673cf2ac7add112a127e55296f56dd28878b06d5957ed4922345594ea810558ed3763ccb1d8d3dfbbe2643ecd6046284d7f317b95d114a181cd02817b3e2904f692807a33aa3a9757500979b72bb0b6222e2cf5ee7a11c1128e75fd67234ff661e4f2c56a315d56c2aab3af75cdbf9a1d69c9bf769ee5152bcc3f3ba35ab99e8d6a3e8306b70b5fefffadbaae550c55bddca53ef1696fb4b624b9ff4b810410e293e64fdc4ea4a60e5fec42912e1bbc32011e236ecf3332ecce2156176c88e73a8de14a93abf2334b581aeed080530e7c711a6b18f383a0e32",
      "172c21e5bb5e5447a26ae4a621a9a8c92961325cbc03673bc44d6bd3fa07b0895ca3e1050000",
    ],
    [
      "ETag",
      "5+yO7cQXiiBIPOwZwkawnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d4fc230147ddfaf20f515124600c5c48781a844443ec683318494ed0e87dd3adb4e4308ffdddb6ec85e304b24f165edbde7dc9edcdb9eedac4a85bc87b14fae2b6415ae3f5210db8b35a889de4c41a64c495c121e4b2055cd0645d7861dcdba0f3dcfd9cc7d7bfc71cf1299be3c4e6e6e3296f4de20a2c8db6184711002f325c6af26aee47983c534027da2c7591ac54b13568fb0da26069eb9d3c1e8be8844dc37c8683e1c3add619fe4d0be7a5ac4a78a2ecd917f9330ebc2cac5c886afa6108080d88363d789e01bf0d4c08c57d2286150933c151ec85c441766f05af034a182f31aa66a0dbb66b73a8d66e3aadeba6c773a073ae31e55218f75c57c467ef41557944df9971e3169677720b2309bf8611424285c427142087deae2d0273fb97df517e260e4b69b056ebe5b5885cad2aa38a92064b0fc2775bc92378a2fbc9c76fe4cce244e239ec6aaa4f4ddf0d93963e3e886b24ddf3a6eff5cb252a1174aeaba83a7fecc759ec627c5f1bb389aa0bb5520c782a3c7241867d9f5e6159aa84e0e4eed71ed44a58daa440a26ed51fc633d840a73016512acbdf50da2b250031d050000",
    ],
    [
      "ETag",
      "bmSBHCcAjUd1PqGlpsuYKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-22-1592428057699",
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
      "54",
      "db",
      "6e",
      "da",
      "40",
      "10",
      "7d",
      "e7",
      "2b",
      "2c",
      "f7259102f80a38124a11715a24022998445555c17a3d7636b1bd8e774d8b22febdbb3617d34451def0cc9ccbccecf0da5014f599a4817aa9a83e895e0ac8375f9ea8af5ec80c7014c98c798d0b73116dac87285e0737fafada4bff0efafdaa8a946886922c8626a3458e815d2ee6ad28a74586724a9b82b069184ddd760ccbe86976b7e3381596411c8e49fa2c191e39cfd865bbbdf7d18a288d624019612d4c9343bcbd36da594e9f0073d63e956d0b25d6fe58f82aa6187142d3fe625e992818e44b481089a58d233af0bf9ed2b7084a5a91a85e130c08635aa45c5aab68304d43121579492e985e4550844bcf87cf5a409dbb6377e829c3e960ecce87eed9e0fedbd90a259275757ea168e70a62ca7299032b62aedccca6b7ca2a13461e1103b6521ebebb335744721a9218962458297de5aaf452ea04c038494b371ef263a87910d9dd0447ef2cef40214910176abbb26557eb20bda7397ee87771d8336d3fd4c0f77b7ed746a6af61c7022bf001d519b8d4aef028a5a9af05c837baba11da966de9a663a25ecfd6ad9e1d08eec0446074350c86ba63d81efaf993130ed784659491dd88d587d9c87397de6c31190e3cb7de7b88c4d0ae2bf7a79d9fb4c4c590ea6e3f1acb1b47594ea830552e7334f1dcd960e88dee6b36c4cb1a4384f066fe22df5688620647",
      "34ca51021cf25b1ac8e5a877d3f9c81b4d2783f191a17c2c77fb4a26ca7e1dcc1e7baab3799bec74d5d516aaa8b4d9b1d45a6e7bf12ecb3d8a8b7768d6bbb0aa9f7034fefff5bb51e356c519ee5ca93f16eeeca7c496399999410839a4f8a8f689b7298155fa13ff32a27c7ff31221cefea0cfb8088b33c1eca88e73a88e862455ab3b42c7701c6d4f2880397f5361ea66675ff1e6eea5162490f2fd2caafbaf06b93db154d4ec9430592e1ef96434f9569a6f6c1bff0001f8795abc050000",
    ],
    [
      "ETag",
      "3Dcu3Ugy4WglvdF1vDTnxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b48f73a16c539e7121f60d9d4846c8e69b26431a6e20571858b6d9933867f5f5b407d697bceb9b7b7e7f464d936f949f30d79b2c93a4df625f0e34d02f2431f42102593426d05e602c8adae0649135d3d1ec77f62ebd3349c4fa79303fbda8b72e68d46759588b6905155775248e13805b6110a7f1b6c37bcd1729a81be71b5e266a0b9a1d1e4b130da6bf0eecdaf850c3746785b0481e7072fa4912ab32fd55a9987ec701d420c1cf2082ecf2938ee209253e35bd0ac60e0082c7904a219a21b6b39e1581694233a8a725cd7e9f687eebdfbd8e90f1e86c3b69c6144658ab9ee587c92f37c8992b2100fda3be9d6e1f01ad651b44190f82a9deb7c94f46b9aef063d7266abe6b4b45ab4bcccf38f12c48ca3b223c098e8b91dd2e6f18cdaafd471485e82a123aa3e6c924ac5c59409b02aeb1f95dcb8bd1c020000",
    ],
    [
      "ETag",
      "GGfxshBaiRTIIHwlXqsuPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d9",
      "72",
      "82",
      "30",
      "14",
      "00d07fc9b3e344161bfa56501a9691c5a5c20b03e98552502081b238fdf73a3d7f701e28650c8448faa6823b7a45732a696bb6761aa22f637e0ac54059d6139aed70baa3bd770dc8f01262cd97f68397dcce07be00352a15586399dd0973a2912d6e8ed1f8ae0c4671e45b32db56eb5ed4bbf0fa5affa86fee1bb8595a9a61d35159513655cee7e8132a52e4e3506cba627f8d3a3ce99ae13b87c8a780dd6e9e1529c625f922f50ff8be7df62b60404d9cbb465cc944bf3881677dd3dc5e84174f4c3202b44230b525079194cf99ac6ada0afd37937e6ee179d521e5c0d1ef1f021f5b5005010000",
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
      "Wed, 17 Jun 2020 21:08:13 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6e9b40107df75720fad8d810e31b91acc6724863d5c609c6492faad0b21ec8269825bb4bda28f2bf77177c813a8af2063373ce9cb9ecbc36344d7f24e94a3fd3f490c44f39b0974f0f34d44f9407048a9567d6f97b19dac6f76fec73dfbac6e3c8eeff9cdf0c87651429d01cadb3049a9ce60c033f5b2e5a31a3798618a54d49d86c5bcdd3aeddeeb40766b7dfb3ed12cb2189a6247d540cf74264fccc30763a5a31a571022823bc85e97a6f379edb46c6e80360c18d7a5a4366e2c6fb89bf24142341683a5c2e4a11390716c01a9144c938a057e1799dbe45d0ba15cbe8678201614cf3542869250da66944e29c15e492e9551aa5b9d0bcffad18f4853375c6be866992afd320456b38d15648a040bc64a05d7af39936712fe7de6ce44fe66eb0185f39b3516b3c9f2e67ee42bbbb723c4713284ca0c06a43edbcf873e54fa1a8c8b6022e485a68f295b7a2447ab77d9cbc31c23d852291aa386cc382bed943a703d30ea3b08fa381d50d2313c27010f6bbc80a4d6c77a0b30a0155190a65251ea534959300b4b2fa817dda8b828e657783d0061c84960966bb17593ddcd6b7e8cdbe963f8c08b8203ca39c6c9bacdf7913df097c6fe98e47be53ad3b4279222e4ae5f5aa6be508d9a0aad2f75a72a42863844a51c53827aeef78a3b13fb9adc890bb358518e197c593daae08251c0e68c4e4ac04b0195da9c1e8ee68e65c1cc0c5a65cef82b88cf8b5d779284706aaf917b51ccdbf9ec7978b556b45399bd2aa2f7c6fe27ed52bcecddb34b728c9dfe079de9af54c76eb5e7698d7b81aff7ffd6e5472e8f2ad6ee5e9374bc7fba1b0854f793c8880418a0f593fb0ba0a58ba3f708a64f8ee302884bc0dfbfc5c48b37c45981fb26306e59b2265e77784b66577ba3b420964e228a263f67abb88a3e3a072c11a52b1eb457924ca466e6a92f28a9c02a6c2e53b70b743dc34368d7f5bd427dbe1050000",
    ],
    [
      "ETag",
      "M4xFb9/XKr+73PcCf97ZOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1592428057699"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7ddfaf20f51522df82090f43414910154662348494ed6e4cb775b69d8610febbb7dd80bd609648e2cbda7bcfb93db9b73ddb1aa512f9f023875c97c8caf73e13e09b0b0fe4b3da4c41248114b8c42c1240ca8a0d927a8a3dfc58d7a3d6eb8b0cbf9376d8f2d6978dbb8ed9eba52c61af21a4c8db6284b1eb43e0088cdf745ccaf21a8b6808ea449b0549182d75583ec272136b78664d4793bb3c1232472393f9786cf6c7039241bbf26911874abad447fe4d42af0b231323ef6c3505173844361cbb8e397b075b8ef478050de3002a8225dc069189a8c214f6384b62ca19ab60aa526f546aad6ebd59ef545b57ed6e774f0f984da5cf2255319f9183be64920653f6ad464cdae91df0344c27be1f05717397909f10425faad877c821b72bff421c4dac7633c7cd760b235759581527e5fa012cff491daf644df18517d3ce9ec999c469c8924816941e8e1fcd33368e6e28daf4ad690dce252b247aa1a0ae357a18cc2cf3e1e9a4387e174713f43712c41367e83101da59b56ab38326aa92bd536f9872a25446953c019db629feb1ee7d89399706028c9df103a4b4e57e1d050000",
    ],
    [
      "ETag",
      "Fkh2n5ZXtmwu6m5gh/3G8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-24-1592428057699",
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
      "94",
      "6d",
      "6f",
      "da",
      "30",
      "10",
      "c7dff329a2eccda616121e424825d45534eb982874105a6dd3048e7349dd26716a3badaa8aef3e3b0910d6aaea3b720fbffbdf9d8f9786a6e9f7240df4134df749f490037bfe74477dfd587940a0487962eb363c32bdf3a734fffde3e2a88ddca7c48a86c3328a14d91c25590c4d4e7386819f2c17ad88d13c438cd2a604363bbd66db723abdcec0b4ecbee394b91ce27042d27b45b81522e32786b1d5d18a288d624019e12d4c939ddd78ec1819a3778005370ecb1ab21237de2f7c1a538c04a1e970b92845e41cd80a12446225639f1df85f0ff12d82925624a31f09068431cd53a1a495184cd39044392be092f4228dd25c68de7dd60cfac29db8234f1bcd9653eff31a250ab7fea221aead560c781e0beddb7c76a9ad3359fd1671e06bede6bb3b77a585d190c4b022c15a1b6aa78580021e0017242d2478c88fa156587aabb18ddfd8d80ea12048c86a55d8ca36fba83d301d3ff46d1c0eba961f9ae0fb03dfb650d737b1d3835ee003aa1384aa5de6a394a601f836203beca1beddc7260eda12823b761777cd0132071dd3090289d22bc266d7cf132302ce09cf2827d55cf59bf9d87357de7c391d9d796ebdf710c9a19d97ea0f3b3f6849c821d5d5be3796578a3246a814556c703cf5dcf9d9c81b5fd764c8e7348108e1e7c5837a50218a39ecb31143090860973450cbd1af668bb1379e4dcf267b42f142aeb6915c86fdd989ddf754a779cfd9e1aacb2d945625b3dfd36bbecdf19b946b",
      "14e76f601e2bb3de3e6034fefff5b75163ebf2f62a55facfa53bffa5720b9ff2cc21040629de57fbc0db5489a5fb037f2d327c7be82a43defaae3e17d22ccf04f37d75cca03c1a9294ad5640a7e7b4ed2d502632f12ac2322d731bf1ead8552d482015db5994475f0e72732029afc929d254b87ce4d3f1f4a210dfd834fe0185969599b1050000",
    ],
    [
      "ETag",
      "l5hf+0TDwnuZJG+1aEwm5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "90",
      "ee7524cafc62890fd31066e2ccc6702f8b31152e0c57b8ac2d5b8ce1bfaf2da0beb43de7dcdbdb737ab66c9b7ce765421e6d72c8b39f1af8e92e03f9a60f21889a49a1b60a4b01e45e5783a499ae5e7ac1cb94a5d12cf268504d161f472fa8b3f9bcad12f1171454d59d155238cd812542e14f83ed8e375a490bd037eef7dc0c3437749a3c55465b6d223ff0c35ba9c0c4489bed7afdb458fba4931ab3efd4da98a71cf110420a1cca18ae0faa381e21962be35cd0a262e008ac790ca21ba21b5b39e3585794233a8a72dc91331c7beec89d0dc6d389e7f5e50c632a732c75c7f69d5ce64b949485f8a7dd93611b0f6f611b461f05496ff2b94d4849bfba79422e54d39d76568f76d7618b9304f1ca517911601c3cb803d287b1446d56ea2c24afc1d03155fff59c4bc5a59409b01aeb1fd909cd331b020000",
    ],
    [
      "ETag",
      "C9GM7lfT8T9aGp6BVj9Gug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82300000d07fe9b3186245606f2314d81a817111e1a581d20941caa5442d66ff3ee3f983f30425a54c08b20c1de3e003c872676ee9160f86b5de6bcd62edba839218327561a156689f8de934c521eabfceae9e2541b1f70aa5e1304ab42eb1b0bd560dc28612461df19bbca4bf8f13e7ba2d2f232207a6a846d4491a309dac116d7be7886e5e06d52b313f7d9b36b6559595e3783531609d400c198f79365ce3428c31cd6fd1f9d20434e1df3f27ac1fef74f25190870279b0108bebeb752f9c6552558253b001ec31b63313a47dcda0669a1bf06e92458eec75b55839b319fcfd03c1f49b4405010000",
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
      "Wed, 17 Jun 2020 21:08:15 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6fa24010feeeaf20dcd7aa88a0d2c45c8dd23b2f8a77886d9acb852ceb40b74596b24baf4de37fbf5d4085b369fa0d66e679e699979db796a2a88f24d9aa978a1a90e82987ecf5cb030dd40be9018e22e9d1f53b779b7afacbed62a6d96cf5c39abd84d1785c469102cdd02e8da1cd689e6160979b7527ca689ea28cd2b6206ceb66bb675abaa18f347338b0ac12cb200e172479940cf79ca7ecb2db3de8e844944631a094b00ea6bba3bdfbac77d38c3e00e6acdb4cdb159958f7e3c45f638a112734196fd6a5889c41e6c30e9158ca38a1b7c15593be43d0ae1389e8678201614cf3844b69250da64948a23c2bc805d39b300a73a1f9f85b33a86b7b614f3d05d338df257e827670a16c11473e7f4d41b976574b65ee5cafdce5c49baf1c7f3dfd6e2f279de96ab1593a6be5f6bbedda0a47410c0556192b57c59f237e0a4545b62d304e92429327bd3525c25bf571fece088f149244a8625085f9436d807a23cd0ac26088c351df0c420d8260140c4dd40f346c19606c0340758642598947094d8cdea03f0073e85bbadef78d51d8f7470353f331d62c430f82be6ef4d50abd3fd6f237231c6684a59491aac9eaad3bf76cdf7337ce74e2d9f5ba4394c77c562a6f56dd28878b06d5957ed49233456946a810558c73ee78b63b997af39b9a0cb15b0b88107e5d3fc9ed0a51cce08446999815876c49b77230aa3359dab313b8d8949f872026227e1f759eca118172fe452d67f36fe6f1c462355a51cea6b4aa6bcf9d3bdfd49a73ff3ecd0d8af377789e2bb39a8a6edd8b0eb30657ebffaf3fad5a0e55bcd54a9efa6b63bb77125bf8a4c785103248f029eb275657024bf7274e91083f1c068910b7e1989f716116af08b353769c41f9a648d9f903a1655a96762014c08c9f450c7ac631e2ec38c85cb083841f7a511e89b291fb86a4bc26a780c970f10e9c6a88fbd6bef50fd1c5df9ee1050000",
    ],
    [
      "ETag",
      "22YRdpT2xWLD0EsOJ9Dxfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1592428057699"
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
      "c554514fc230107edfaf20f51592818062c203082a0650613c184348d96e73daadb3ed34c4f0dfbd7603f6825922892f6befbeeffae5aefdf66d552ae43d8c3d725521eb30f848416cce02504f7a33039932257149782c8154351b140d343bb95ddbcecd64704fef9e8366c2ec4dab7e1e74bb194bbaaf1051e47d6384b11f02f324c62f26aee47983c534027da2cb591ac52b13560fb0da24069e3bb3d1f4b68844dc33c874311ef7fae321c9a16df5b88847155d9923ff2661d6a5958b9137be9e810f0262170e5d2782bf81ab4666bc924609839ae4a97041e622ba308303c1d3840ace6b98aa355ab57aabd368362eedd645bbd3d9d11977a90a79ac2b1673b2d7575c5136e35f7ac4a49ddd81c8c26ce2bb5110bf7009c50921f4a98b438fec73dbea2fc4d1d469370bdc7cb7b40a95a55571527ec860f54fea7825af145f7839edfc999c489c463c8d5549e99bf143ef848da31bca363de839c353c94a855e28a9eb8c26c3b9d39b3c1e15c7eff26082fe46817c141c3d26c138ab6e372fd14436d939f59a6b272a6d542552306997e21feb2e5498f32993606dad1f289887001d050000",
    ],
    [
      "ETag",
      "pGb0TFMDJaHYg4pl0y513g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-26-1592428057699",
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
      "0002ff8d546d6fa24010feeeaf20dc9736a9028a204d4ccfb3dc959cd59e629bcbe5a2cb3ad06d81a5bbd08bd7f8df6f177cc16bd3f49bccccf332333bbe3414457d24e94a3d57d480444f05b0f5a7071aa8673203398a64268cff7a78687fe16b6f8c3577b6befa6e2751bf5f559112cd5192c5d0e4b46018f8f97cd68a182d32c4286d0ac266db6a1a5da76db67b7ad7b61ca7c27288c311491f25c37d9e67fc5cd3763e5a11a5510c2823bc8569b28f6bcf6d2d63f40170ceb563594d2871ed7de18b986294139af6e7b3ca44c1812d20412496360ee855f0f998be4550d28a44f533c18030a6459a4b6b150da66948a28295e482e9450445b8f4bcffac05d4993b7287be329c0c46ee6ce89ecce6d7274b9448d6e5e999a29f2a882b8b05035ec4b9f2753ab956969930728f38f0a57277e54e5d11613424312cc86aa9f4958bd24ba9b3029e93b474e3a320869a0791dd4ed07b63797b0a498272a1b62d5bd8ba858c9eee046160e3b0d7e906a10e41d00bec2eea043a764c305701a03a432eb52b3c4a691a18bad9b54d4000366eeb3a5a61cb34c0e95a1dac1b3d33347ac8b23a81ba65d8ecfbf9c3480e9784679493ed88d5bba9e7bb0b7f3a1f0f07be5bef3d4462689795fbe3ce8f5acac590ea6edf1bcb2b47192354982a97e98d7d773a18fade6dcd8678592388105ecf9ee4db0a51cce180460c259003bba62bb91cf56632f37c6f321e8c0e0ce563b9d9557251f66b6ff6d0539dcd5f67c7abaeb65045a54dcb546bb9cdd99b2cb7282edea079de8655e388a3f1ffafdf8d1ab72ace70eb4afd3177a73f25b6ccc9cc14426090e283da07dea60456e90ffccb88f2ddcd4b8438fbbd3ecf45589c09e60775cca03a1a9254ad6e091dcbb17b3b420164f9ab0adb303bbb8a57772fb5208134dfcda2baff6a909b234b",
      "45cd4e0993e5e2918fbdf1b7d27c63d3f8076a99aaa1bc050000",
    ],
    [
      "ETag",
      "flzIcC7BsyINc/ESyHK7mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff4d515d6f8230147de75790ee7163119c4e97f8a0fb7421db64e3615988a9784114b8ac2d3a63f8ef6b0ba82f6dcf39f7f6f69c1e0cd3249b245f923b932c92f8b704b6bf8841ccd4c1035ea682cbadc09c03b952d52068acaa670f2b8a9355f6ba7bf6a67ffec6f6bf2fb3d9685457f170051995750789248e1248975ce21f8dcd86d75a4e335037cee74c0fd437349ad8175a7b72dfc75fe742864b2dbcf9ae3b9eb88fa4912abd0772adf443d6b8f02002067908a7e7140cd7108aa9f6cd6956a460712c5908bc19a21a6b3966581694215a92b29cbe65f786ce8d33e8f46efbc3615b9e62484582b9eaf03fc971be4041530f77ca3bb1eb70580deb28da20487496ce793e52daeae6ce7577408e74d59c02a345c169e0642f807f30947e3868175da743da40ee5119162a0fc14ad07448e58fbd244272114d391895f10f70dce6d81d020000",
    ],
    [
      "ETag",
      "QDhaoBhmJwGRIxUk1UY+mQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfc97282300000d07fc9591d76496f41d0b20444166b2f0c0da92cb2254c2974faef75fafee0fd809c10ca7936f50dedc00b587209eec8ceed75639da969a711c7308dcca272ae77bd6533f75cec258abf7fa7651ec84918336514421cea5658efe7f8e16354c32efb6c053b305f45d8b6c2f643e527bcb5935055fd837e5cbd4974e4bb866cf1522f0f8bab162a66a71b56fd286037e006bc69a4434852c6931193e870497a28dc8cb3af30bfe10d976854a6242bf2e8ab3f6ba5945ce99876f21b73158eaa3cd6240c36807e0f15a33cab9e3359857003fe9bd9b40cf4793568ce2803bf7f0c4a19f605010000",
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
      "Wed, 17 Jun 2020 21:08:17 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7df75720fa1adbd8816022598deb90c6928d13c049abaa42cb7a209b6096b08bd334f2bf77177c813a4afb063373ce9cb9ed5b4b51d427922ed573450d49fc5c40fefae99186ea89f40047b1f4dc68f6b7e9d52febb76718eb2f5634e3069ede0e87551429d10cadb204da8c16390676bef03a714e8b0ce594b60561bb6fb67b86d5d7fb03cd30cf2cabc23248a229499f24c303e7193bef76773a3a31a571022823ac83e96a6fefaefbdd2ca78f8039eb36d3764526d6fd38f1e78462c4094d870baf125130c803582192481907f432bc68d277085a756211bd261810c6b448b99456d1609a46242ef2925c30bd09a330979af7bf3583ead9537bec2b9826c52a0d52b482136589380af86b06ca953b9f2913e76aeece46fe64ee04def8da9e8d3ae3f97431733ce5feda766d85a3308112ab0c958bf2cf113fa5a232db12182769a9c997de9a12e1ddf671f2ce08f7149244a862b00d0b4ced0cf5069a1546a189a3c1a911461a84e120340d741a6ad8d2415f8680ea0ca5b20a8f529a62388b7a6069816eeabd40c7004118223d00c3c4a66e69a6e051b7e8cdbe96979c70b8242ca38c6c9bacdebb13df0e7c77e18c47be5daf3b4245c22f2be5cdaa1be570d1a0bad28f5a72a428cb0915a2ca714e1cdf7647637f72579321766b0a31c2afdeb3dcae08250c0e68948b5971c867742907a33aa3997d7900979b72b30b6222e2c75ee7a11c1128e75fd67234ff661e5f2c56a315d56c",
      "2aabeaf9eec4f9aad69c9bf769ee5052bcc3b3de9ad54c74eb41749835b85a7f7ffd6cd572a8e256b7f2d4db85ed7e97d8d2273d2e449083589bc35dfd7b7525b072ffc75324c2770f834488b7619f9f7161165784d9213bcea1ba2952757e47689903fd74472880393f8eb0f47dcaa3c741e68215a47cd78bea91a81ab969482a6a724a980c1777e06c87b8696d5a7f00d8e78a02e1050000",
    ],
    [
      "ETag",
      "P0EXLFx9zS55vB9fMt5cLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1592428057699"
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
      "c1",
      "6ee23010bde72b90f70a12459496957a802dbb454a690be1b22b848c3349d375e2d49eb4a5887fdfb1134a2e5d455aa4bdc49e796ffc3463bfecbc568bfd4eb2907d6db14d123f17a0b75f62c007bb998329241a5a729519606dcb06e4b165e733d4ef1bc1a39f988fa558bec5e1b5ff7a7555b28c788494136f4711c55102323414ff7271abca3b2ce329d8138592459aad5dd83ec2b8cd1dbc08e6d3d98f3a92aad021b3a5ef8fc6fe8455d0befdb948c891afdd91ff26e1d6955789b127b59943041a3201c7ae73ad9e40e0d48dd7f03497d031aad0024c25620b4b38d6aac8b956aa43a94eefa273763eecf57b97ddf38bc17078a04b2538262ab315cb05fbd047855cced5ab1d311b9477a0cbb09cf861142caa5d427d4204bdd8e224641fb97dfb2fc4e92c18f46bdc6ab7f26a958d556952512261fd9fd4e94a1e39bdf066dad5333991384f55916143e9effedde8848d931b9a367d3d0a26a79235485e68a81b4c6f278b60747bffa9387d5747138cb708e65e2bf29801e7acb36eff924cd46507a77e53d689688d8aba0097169cfe583709522ee2d280b7f7fe00ae0c85f51d050000",
    ],
    [
      "ETag",
      "pNtrzbcafZtpBlcUxgdDLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-28-1592428057699",
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
      "54",
      "6d",
      "6f",
      "9b3010fe9e5f81d8974d6b424202814a5557b5d9c69497969056d33425c61cd42d606a9b565595ff3e1bf242d6aaeab77077cfcbddf9f2d2d234fd9ee4917eace921491e4a60cf9fee68a81fa90c0894a8cccc82a7affea5897a03df3626f7931fe5f5afab9393ba8a54688eb2228536a725c3c08f17f34ec268592046695b12b64da7ddb35c73603a5d6b68bb6e8de590c66392df2b865b210a7e6c185b1f9d84d224055410dec134dbc58d47d32818bd032cb871286b48256ebc2f7c9a528c04a1f9c9625e9b2839b0256488a4cac61e1d85df0ee93b04659d44563f120c08635ae64259ab6930cd639294ac22974c2f3228c395e7dd6723a0cf47e3d179a04dbce9e715ca14d9ea8b86b8b65c32e0652ab4effe6ca2ad0aa97d8b38f09576f373e48f6484d198a4b024d14a3bd14e2bf98a3a022e485e19085098424356663743f3ded8d78e42912021d53665cb61d7463da7eb867138c4b1d3b7c2b80b61e884430bf5c32e7607308842404d06a1b46b3cca696e47a66b6213ec28c23d6c46b68dbbdd30eaf7fab6ed868e3bc436587dcbd1370ceb5d3f4f8c08b820bca09c6ca6aadff85e305a06fe627a7e168c9abdc7480eeda2767fd8f9414b420ea9e9f6bdb1bc72543042a5a96a7fde3418f967e78177ddb0211fd31812849fe70fea39c528e5b04723863210c0263452cbd12f67732ff066d3b3f19ea17a1f97db4a2ecbfeecccee7b6ab205cfc5e1aaeb2dd45165d31ee88ddcfae84d966b94966fd03c6ec27aef80a3f5ffafbfad06b72e2f6fe34abf5a8cfcdf0a5be554c6871818",
      "e478aff681b7a98075fa037f2cb27c7be60a212f7da7cf850ccb33c17caf8e19d44743b2bad50da1eb0cfb832da10432f1bac2b186db8a57a7aeb420835c6c67519f7c3dc8f581a5b261a782a972f9c8a7def44765beb56efd03f3e6dc8caf050000",
    ],
    [
      "ETag",
      "O5ew+RP2a14R6/MkMGuVJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1592428057699"
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
      "0000000002ff4d51d14ec230147ddf572cf5d5199820c38407201a358b3890f8600829e36e0cbaddd976ca42f6efb6dd06bcb43de7dcdbdb737ab26c9b1c926c4b1e6db249e29f02787913830cf4610ea26052a82dc74c00b9d5d52069acab17d34120fade9b7483afdd81c55e77762ce3d1a8ae12e10e52aaea4e0a291c25c0b642e16f83ed86375a4653d037aed7dc0c3437349a2c73a33dfbb3f1e7b590e2d608ef4bdf1f4ffc27d24895d9576aadcc43f6b89943041cb2102ecfc939ee2194afc6b7a069cec01158f01044334437d672ccb1c829477414e5b89ed3ed0fdd9eeb75fa8387e1b02d6718529960a63b960b729e2f515236c73fed9d74eb70780deb28da20487495ce753e4afa35cd773d979cd9aa39adac16ad2ef326a504f1c151d911604cdcbb1dd2e63145ed57ea38242fc0d021551ff69248c5459409b02aeb1f2ba165921c020000",
    ],
    [
      "ETag",
      "SC7Qs58Jt2QWhklg81Oxyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "49",
      "72",
      "82401400d0bbf45a2ce6213b212a0694361069d95054f3354008d08d4ca9dc3d56de0dde0fca2805ced3bea9e01bbda03993ad355d7b8d692f233543529cb724aae42f27ed75c7a893e0526c2a1317bb41d91e6da69eaad2bda83a35b9e8c56544881007323f26f62d9473c2b8f7399d3129b51cdf217413d6299beb00cc996b090ba160ed867d3d7aae463bcb7f60a51172ff2111f755ca3f82b0197026bdab27906e49afc707c331821296c5f5cdaec36ff7b16dbd0313cbfc0add24b6fea0694eb4e77cce548e5608a6b660c0d3e2395334cb5aa1ff66dacf2d3caf36640c18fafd039f060efd05010000",
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
      "Wed, 17 Jun 2020 21:08:20 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1592428057699",
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
      "8d54db6e9b40107df75720fa1adbf88a89643596431a57366e01276aab0a2deb816c022c6197b456e47fef2e601bea28ca1bcccc3973e6b2f3da5214f589245bf552517d123ee790ed3e3d525fbd901ee028949eddededd707e76997fb59bc1c41fc7790ffcc67d36919450a3443711a419bd13cc3c02e374e27cc689ea28cd2b6206cf78d766f64f487fd8936d2c78651621944c192244f92e181f3945d76bb071d9d90d230029412d6c1343edabb2ffd6e9ad147c09c759b69bb2213ebbe9ff8734431e28426d38d538ac819641ec4884452c609bdf5af9af41d82e24e28a25f08068431cd132ea5953498260109f3ac20174cafc228cc85e6e36fcda03ae6d29cbb0aa6511e275e8262b850b688238fef52506eecf54a5958376b7b3573176bcb73e6b7e66ad699af979b95e528f7b7a66d2a1cf911145865aa5c157f96f8291415d9b6c038490a4daef4d694086fd5c7c51b233c524812a18a4115e6e9da18f5269ae107be8e83c960e4071af8fec4d74768e06bd818c270eb03aa3314ca4a3c4a68d2eb8f411f8cb0171868ec0d47baef1930d4bdfe10f93dc130d611562bf4fe58cb9f8c70b8262ca58c544d56efed856b7aaebdb1e633d7acd71da03ce2d7a5f266d58d72b868505de97b2d39539466840a51c53817966bdab3b9bbb8abc910bbb58410e19df32cb72b401183131a6562561cb215ddcac1a8d66c655e9fc0c5a67c3b043111f1eba8f3548e0894f32f6a399b7f338f2b16abd18a7236a555755c7b617d516bcefddb347728cadfe079a9cc6a2abaf5203acc1a5cadffbf7eb76a3954f1562b79eaf78d69ff90d8c2273d36049041824f593fb0ba1258ba3f708a44f8e1304884b80dc7fc8c0bb37845989db2e30cca",
      "3745cace57843d4d9b0cf503a10066fc2ca2d7d3068788b3e32073410c093ff4a23c126523f70d49794d4e0193e1e21d58d510f7ad7deb1f0b260f6ae1050000",
    ],
    [
      "ETag",
      "yHHJhSkyubrmL5emx3uZuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1592428057699"
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
      "00000002ffc554514fc230107edfaf20f51512988060c2032aea12441d233e1842ea768361b7ceb64389e1bf7bed86ec45b344125fd6de7ddff5cb5dfbedd3aad5c86b9404e4bc465ea2e55b06627bb204f5a8372ec88c29894bca1309a4aed9a0e852b3dbae7d66db1f9bd587bb613df7c9a12dfbf47d30c859d25f414c91f78911c661042c90183f9bb856e40d96d018f4893e67599c2c4c583fc06a9b1a78eab9cee4a68cc43c30c864361e0f2fc6235240bbfacf22015574618efc9b8459e7562146d6fcc5851004243e1cba4e055f83af1c335e49e3944143f24cf8200b115d98c34bc1b3940ace1b986ad8fd46abd3b7db76afd939ebf6fb7b3ae33e55114f74c56c4abef5155794b9fc5d8f9874f33b1079984f7c3f0a12962ea13c218436ba380ac8776e57ff85e84cbc6ebbc42d7673ab545959152715460c16ffa48e57b2a2f8c2ab6917cfe448e234e659a22a4a5f8fef87476c1cdd50b5e9aba1373a96ac54e8858aba9e73379a7ac3bb871fc5f13b3f98e062ab403e088e1e93609cd56ab67b68a226d93bf5926b272a6d54253230699fe21feb3652980b299360edac2fce83d0ba1d050000",
    ],
    [
      "ETag",
      "4R2722xvhxRvl8RWIa123w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-30-1592428057699",
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
      "02ff8d54596fda40107ee75758ee4bab067c413091508a88db5821240593a35505eb65ec6c627b9ddd75aa28e2bf77d7e6304d14e50dcfcc77cccc0e2f0d4dd31f48b6d48f343d24f16301ecf9d33d0df503950181629561cee9c8a75f6fd0ecd672bc3c1afeba35cee27ebfaa22259aa3344fa0c969c130f0a3d9b415335ae48851da94844dc76c5a9d9eddb65db3d33decf52a2c87241a91ec4131dc0991f323c3d8f868c594c609a09cf016a6e9366e3cd946cee83d60c18d7d59432a71e37de1e384622408cdfab36965a2e0c0e6902292281b3bf432fcb64fdf22286dc5b2fa89604018d32213ca5a4583691691b86025b9647a9141192e3d6f3f6b017dea8dbc61a09d0f6e3e2f50aac8165f34c4b5f99c012f12a17d9f5c9c6b8b5c6adf210e7ca15d9f7a134f46188d480273b25c687dedb8942fa997c005c94a03010a13a8c9caec7a68fe1bfbda52281224a4daba6cde350f91e59abd300abb38729d4e189910866ed8ed20273471af0ded6508a8ce209476854719cd3aa68bc08ec0343b566841e4846eb7832dc7b1dba6655b6ddbc48e133aaebe66586dfbf9cb888013c273cac97aaafaf5c40fbc7930998d8783c0abf71e2139b493cafd7ee77b2d0939a4badbf7c6f2ca51ce0895a6cafdf9e3c09b0c86817f55b3211fd30862849fa78fea394528e1b04323865210c0cee9522d47bfbc98fa817f311e8c760ce5fbb8dc547259f67b6b76d7539d2d78cef7575d6da18a2a9b876dbd965b1dbcc9728592e20d9aa77558b7f6381afffffad3a871ebf2f2d6aef49f336f72abb0654e65261001830cefd43ef03615b04a7fe08f45966fce5c21e4a56ff5b99061792698efd43183ea68485ab55a115aa6e576db1b420964e255856ddaf6a6e2d5a92b2d4821139b5954275f",
      "0d72b567a9a8d92961aa5c3ef2b13ffe519a6fac1aff006cb33cf8af050000",
    ],
    [
      "ETag",
      "r3HLIo+XaUY13EpfCZY/Kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48",
      "f7e85814e79c4b7cd0658b4bd8149df16121a6e20551e0b2b66898e1dfd716505fda9e73eeeded393d1ba6490e51ba252f26d944e16f0eacb80b41b8ea30079ec782cb2dc39403b957d52068a8aa5bcee76ab19ab97f93e9f47808fad9aeb573dde1b0aae2fe0e122aebce12491c44106fb9c43f1a9b35afb59426a06e5caf991ea86fa83551645a7b77a6a3ef5b21c1ad16be968e331a3b6fa4964abd7b722df543f6b89943000c521faecfc918eec1171fda37a7491683c531673ef07a886aace490619e51866849caeab6ad4e6f603fdacfed5eff693068ca63f4a98830551dcb05b9cc1728683cc793f24e3a5538ac8255144d1024b849e7361f291d55b3fd6077c9852deb936734c8bbce1b1702f88ca1b4c3419be8da6dd2e4f18acaaf5071089683a67d2a3f6c1209c90534e66094c63f882d46111c020000",
    ],
    [
      "ETag",
      "+LMWSWPQzHOOvkf7ph+hQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "49",
      "6e",
      "83",
      "30",
      "1400d0bb789d46345002dd0165164465261be4383f32240533d754bd7ba3be1bbc1f84098171aca6ee0e2d7a471c1fd43dd9fb9da26f2b7914a1300ffe4dba5db0c71a9a72aa5d47712b25817671c94816c9346bccc6a40e44a57c0d36c384a03836ab51f687fb6b29cc012bc298e78f8b73b2e5a4eefa05a0219266c1296eada0c87192854636cb2e9fd740ffc0679e2842ee5a2fbcfb5a40a80a4671eea5f0e934a93daf665a5ab85e453560291c954e1b5a7739db266ceae02b9937e2c989fa2d453b04dfac1e60aceae74c7c53d51dfa6f561367f0bcea800718d0ef1f5b7e2e2405010000",
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
      "Wed, 17 Jun 2020 21:08:22 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fa1adf6f3892d5580e69506ddc024e5455155a96816c022c6117b769e47fef2e601bea28ca1bcccc3973e6b2f3da5214f58924be7aa9a81e099f73c85e3e3d524fbd901ee028941e6363ff992de351721ffe851bfb2b41906e17f37919450a3443711a419bd13cc3c02eb77627cc689ea28cd2b6206c0ffbedfe7836180db4de783a99cd4a2c83285891e449323c709eb2cb6ef7a0a313521a468052c23a98c6477b7737e8a6197d04cc59b799b62b32b1eefb893f4714234e6832dfdaa5889c41e6428c4824659cd0be77d5a4ef1014774211bd231810c6344fb89456d2609a0424ccb3825c30bd0aa330179a8fbf35836aeb2b7de9289846799cb8098ae142f111472e7f4941b9b1366bc5306f36d67ae1181bd3b597b7fa7ad1596e56dbb5692bf7b7baa52b1c7911145865ae5c157fa6f8291415d97c609c248526477a6b4a84b7eaa3f1c6088f149244a8625085b9d3de04f5b5decc0bbc290eb4e1d80b7ae0799a371da3a1d7c3b3118c7c0f509da15056e2514213d026436dd0d7dca918893bd2863317f9e3be0be0f5bd6130f4fdc940add0fb632dbf33c2e19ab09432523559bdb70c47771d6b6b2e178e5eaf3b4079c4af4be5cdaa1be570d1a0bad2f75a72a628cd0815a28a711aa6a35b8ba563dcd56488dd5a4188f08bfd2cb72b401183131a6562561cb235f5e5605473b1d6af4fe0",
      "6253be1d829888f879d4792a4704caf917b59ccdbf99c7118bd56845399bd2aada8e65985fd49a73ff36cd1d8af237787695594d45b71e44875983abf5ffd7af562d872ade6a254ffdbed5ad1f125bf8a4c782003248f029eb075657024bf7074e91083f1c068910b7e1989f716116af08b353769c41f9a648d9f98ab0df1b4cc7da815000337e1ea14d8e1167c741e68218127ee8457924ca46ee1b92f29a9c0226c3c53b30ab21ee5bfbd63fa2ed145de1050000",
    ],
    [
      "ETag",
      "IOSx9Cm4nWgzeFSKiaepUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1592428057699"
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
      "ffc5544d4fc24010bdf75790f50a09205631f1501495842f4b391942d6765a2b6db7ee6e0542f8efce6e8bf48269228997eecebc37fb32b3fbba336a35b20a138fdcd6c85b187c66c0b71701c817b5b141649114b8a42c1140ea8a0d92068a4d1fc6abf9cc1c6da66bba59f7e2154ce824b8bbcb59c27d8798226f8711c67e089127307ed571adc86b2ca131a8135d166571b2d461fd08cb6daae199630fc64f6524669e46c6f3e1d0ea0dfba480f6f5d3221e9574a98ffc9b845e174621463ed89b0d3e70485c38769d72f601ae1ce8f10a1aa7113404cbb80ba2105185391c7096a59433d6c054e3b2d5685d75db9df64df3eadaec760ff488b954862c5115f319f9d1974cd2c8666b356262e677c0f3309ff86114c42f5d427942087da9e2d0233fb97dfd17e260ec989d12b7d82d8c526565559c941f46b0fc2775bc92778a2fbc9a76f14cce244e639625b2a2f4e370629db1717443d5a61f2ca77f2e5921d10b15759dc1a83f73acd1f4a4387e174713f4b612c49433f49800edac56b37383266a928353ef9972a25446953c039d7629feb19e4389399f46028cbdf10d566e79f61d050000",
    ],
    [
      "ETag",
      "aDNkUS6MxPwaxwBmkeOaOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-32-1592428057699",
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
      "02ff8d546d6fda3010feceaf88b22f9b562084104825d455341d48145a08edba6902c7b9a46e439cda0e1baaf8efb3135ec25a55fd46eeee79b93b1f2f154dd39f4812e8a79aee93e83903b6fef4487dfd446540a04865fefec45ffbf797aba895ad0dd1fb311ef7affc9b6eb7a822399aa3651a4395d38c61e0a7b3692d62344b11a3b42a09ab4db3da6839a665768c56db769c02cb210e872479520c0f42a4fcb45edff9a845944631a094f01aa6cb7dbcbe32eb29a38f8005af1fcbd6a512afbf2f7c16538c04a14977362d4c641cd81c9688c4cac6011df8df8ee96b042d6b91ac5e110c08639a2542592b68304d4212652c27974c2f3228c3b9e7fd6729a04fdda1dbf3b4de7836f23e2f022460f145435c9bcf19f02c16dae5647ca52d52a9fd8038f08576d77727ae8c301a9218e62458685ded2c97cfa903e08224b9010ff931946465763bb4c11bfbda53281224a4dab66cde366cd4e8188e1ffa6d1c769a2d3f34c0f73b7ebb859abe811d0bacc0075466104abbc0a3842666688716380ddc09db8da683fd66c3b42dd3b0adc00e4cdcec9846e0f826d6b70c9b7d3f7f18117041784a39d94e55bf9b0c3c77ee4d66a3deb9e7967b0f911cda45e1feb8f3a396841c52d9ed7b6379e52865844a53f9fe0623cf9d9cf7bcc16dc9867c4c4388105e4f9fd5730a51cce180460c2d4100bba2815a8e7e3d9e0ebcc178743e3c30e4efe37a57c965d9afbdd9434f65366f9d1eafbad8421155366d4b2fe536276fb2dca2387b8366b50deb8d238ecaffbf7e574adcbabcbcad2bfd66e64eee1536cfa9cc04426090e083da07dea60216e90ffcb1c8f2dd992b84bcf4bd3e17322ccf04f3833a66501c0d5916ad16840da36975ec1da10432f1bac2b6dabb8a57a7aeb4600989d8cda2",
      "38f962909b234b59c94e0e53e5f2918f06a3efb9f9caa6f20ff75a80fbaf050000",
    ],
    [
      "ETag",
      "xZc+HYFvg5uy0tCXOOHMbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b48f73a12c5e9e6121fd490cd84988d4db36431a6d60b8301c5f6a223867f5f5b407d697bceb9b7b7e7f46cd936f98df33d79b6c92e8e0e2588ea2e027cd787006499a2545bc17309e45e5703d24857cf51faec90e7bb75e27d25a7f5b1c2bfd3743269aa24fb818caabab3420a8731a47ba9f0b7c176cb1b2da719e81bb75b61069a1b5a0dabc2688be5a7f7e205b752c6f7465aae7c7f3af33dd24ab5d9376aadcd5312be0b2004013983eb830ac11360b830ce25cd8a141cc94bc140b64374632347829705159c3b8a7206aed31f8edd07f7a9377c1c8dc75d79ca19c598e7ba63f5412ef391234d037ed2ee49bf894734b009a38b828437f9dc26a4a4a36e1e910b55b7a78dd5a1cd75d8ac42906f822b2f128c8381db235d1873aecda2ce024509866654fdd76b8c8a0b692ac1aaad7f345d417b1b020000",
    ],
    [
      "ETag",
      "CtsLcqnnbVjEXjwVvytxwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82300000d07fe9b3350c41606fb044ad2b48b86ce24b53591104a4b4dccdfe7d66e70fce13d034655292ae29d903bc8399aad63a5d7f36a6b38cac19a2c66bc97d0cd38bebd24a1bbe265e7a50d43b0815eba340e6d00721ea4f7e266c9f2dcac5cbf732aa1984a33737cea83b79c6ec5bb5ed903d21ad2c7e5431c0c37c356323d8bb44db264860ac05fd55b493b973ead8482b9563e591856709e59d199b73dec6b22b0f516e993abe1154d4b8960b7dd37bde1f93e329c49aee7b09fc86a2b2a933fa394fc00ab08917824952bc661bddb256e0bf49ba99b3d7d5615430017eff005ccb624105010000",
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
      "Wed, 17 Jun 2020 21:08:24 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1592428057699",
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
      "54",
      "6d",
      "6f",
      "a2",
      "40",
      "10",
      "fe",
      "ee",
      "af",
      "20",
      "dcd7aaf80e4dccd558bc7a516c01db34970b59d6816e8b2c6517ef9ac6ff7ebb800a67d3f41bccccf3cc332f3bef0d45515f48bc512f15d527e16b06e9dbb767eaab17d2031c85d273bb237f3b7cd29d3a21e64f6466fc34668f77e3711145723443db248226a3598a815dae9d5698d22c4129a54d41d8ecf59a9d81d1ed77756d301a1a46816510050b12bf488627ce1376d96e1f74b4424ac3085042580bd3edd1dede75db494a9f0173d6aea76d8b4cacfd79e2ef11c588131a8fd74e212263907ab0452492324ee88d7f55a76f11b46d85227a4730208c69167329ada0c1340e4898a539b9607a174661ce351f7f2b06d53117e6d455308db26decc5680b17ca0671e4f1b7049499bd5a2a736bb6b2971377beb23c677a632e27ade96ab15e5a8ef27063daa6c2911f418e55c6ca55fe67899f5c519e6d038c9338d7e44a6f4589f0967d9c7f30c223852411aa189461de481ba28eae197ee08f70a0f7067ea081efebfe68807abe868d3ef4373ea02a43aeacc0a398c6a3ce082318199ededde85ebf37d43dd441ba870d03231f0d865a07a9257a7face54f4a385c13965046ca26ab0ff6dc353dd75e5bd3896b56eb0e5016f1eb4279bdea5a395c34a8aaf4b3969c294a524285a87c9c73cb35edc9d49ddf576488dd5a4088f09bf32ab72b401183131aa5",
      "62561cd225ddc8c1a8d664695e9fc0f9a6dc1e829888f875d4792a4704caf9e7b59ccdbf9ec7158b556b45319bc2aa3aae3db77ea815e7fe639a7b14651ff0ec4ab39a886e3d890eb31a57e3ffafdf8d4a0e55bcd5529e7ab736ed4789cd7dd263430029c4f894f50bab2b8185fb0ba748841f0e834488db70cccfb8308b5784d9293b4ea17853a4e87c49d8d1fa5d63702014c0949f47f4b5ee21e2ec38c85cb085981f7a511c89a291fb9aa4ac222787c970f10eac7288fbc6bef10f9eb5590ce1050000",
    ],
    [
      "ETag",
      "Pvix1tA2CSgcthiF9J9FYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1592428057699"
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
      "0000000002ffc554514fc230107edfaf20f51512544031e1612a2a71028ef9a08690b2ddc6705b67db4188e1bf7bed06ec45b344125fd6de7ddff5cb5dfbedcba8d5c8479878e4aa46e661f09901df9c04209fd5c606914552e092b24400a92b36481a28b6edcc97dd390d60655ab76bef71f3fa36ba58f77a394bb80b8829f2be30c2d80f21f204c6ef3aae15798d25340675a2cba22c4e663aac1f60b949353c71ecc1f0be8cc4ccd3c8f0c5b2cc6bab4f0a685bff59c4a392cef4917f93d0ebd428c4c892cd6df08143e2c2a1eb94b325b872a0c72b689c46d0102ce32e88424415e670c0599652ce5803538df3f3c669bb7bd63abb6cb62f3addee8e1e3197ca9025aae26542f6fa92491ad96cad464c3af91df03ccc27be1b05f14b97509e10422b551c7a649fdbd67f210e864ea755e216bba951aaacac8a93f2c30866ffa48e57b2a0f8c2ab6917cfe448e2346659222b4adf5923f3888da31baa367d6b3afd63c90a895ea8a8eb0c9efa13c77c1aff288edfe9c104d71b0962cc197a4c8076d669b37589266a929d536f9872a25446953c039d7629feb11e4289399f46028cadf10de59ae4ec1d050000",
    ],
    [
      "ETag",
      "RTbj9bagevALDwdKyYZO7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-34-1592428057699",
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
      "54",
      "6d",
      "6f",
      "9b3010fe9e5f81d8974d5a5e2004924a51d7b5ac454ad38e9054d33425c61cd42d606a9b4c5595ff3e1bf242d6aaeab77077cfcbddf9f2d2d234fd91e4917ea2e921499e4a60cf9f1e68a87f55191028519962f2802fcd8864dfcd07b4f0af166bd72d93f1b8ae22159aa3ac48a1cd69c930f093f9ac93305a168851da9684edbed5360623d33287bd81638f463596431a4f48fea818ee8528f849b7bbf3d149284d524005e11d4cb37dbcbb36bb05a30f8005ef1ecb76a512efbe2f7c9a528c04a1f9783eab4d941cd81232445265e3808ec26fc7f41d82b24e22abd70403c29896b950d66a1a4cf3982425abc825d38b0cca70e579ffd908e83377e29e07dab537fdbc8a9080d5170d716db964c0cb54683ffc9b6b6d5548e57bc481afb4bb2bd7776584d198a4b024d14a1b6ba79578451c011724afe40314a6d01095d9edc8bc37b6b5a750244848b56dd9d2e9d9c818f646611c3a381ef60761dc83301c86ce00f5c31e1e59604521a0268350da351ee534b743c706c38e1c23b66dc7324d63605ad1d03247760878d803b0c2189b7d7dcbb0d9f7f39711011784179493ed4cf53bdf0bdc65e0cfa7e76781dbec3d46726817b5fbe3ce8f5a1272484db7ef8de595a382112a4d55dbf3a681eb9f9d07dea261433ea50924083fcf9ed4638a51cae180460c6520805dd3482d47bfbd99798177333d9b1c18aad771bbabe4b2ecf7deeca1a7265bf05c1cafbade421d55366d4b6fe4365fdf6459a0b47c8366bd0debc61147ebff5f7f5a0d6e5ddeddd695fe73eefabf14b6ca",
      "a98c0f3130c8f141ed036f5301ebf407fe5664f9eec81542def95e9f0b19966782f9411d33a88f866475ab35a1d11b3986b3239440265e570cfbe6aee2d5a12b2dc82017bb59d4075f0f727364a96cd8a960aa5c3ef2a937bdacccb736ad7f53a45780ad050000",
    ],
    [
      "ETag",
      "pLjcG2dimB2jaVRHVvEEug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51d16e8230147de72b48f73a3240d9e6121f749acc48960de7c3b21853f1822870b12d5bd0f0ef6b0ba82f6dcf39f7f6f69c9e0dd3248724df9217936c92f85802abee62109fea10002f53c1e55660ce81dcab6a103456d5bb8377ea7d07c5645fce8f3c9e3d2c123a8f87c3a68a873bc8a8ac3b4b24719440bae512ff686cb6bcd6729a81ba71bd667aa0bea1d54455686d32fa9adef2196e35ffbef4fdd1d89f9256aaf5be926baddfb1c74d001130c843b8bea660b88750ccb46d4eb322058b63c942e0ed10d5d8c831c3b2a00cd19294d5eb5b8e3770fbeeb3ed3d3d0e065d798a211509e6aa63b92097f902054d03fc53d689d364c31ad824d1e540a29b706ee391d2af6a766dd7b66cd7b21d72d1eaf6b4323ab4ba4e1d5702f80743698a83b6d2736dd2a5f28acab550a1085682a6432a7fed2d11928b68cac1a88d7fa10d607321020000",
    ],
    [
      "ETag",
      "hk5z3YRpDjuKqsgI/SiaKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "30",
      "00",
      "00",
      "d0",
      "bb64dd7690d202eef889141a2c1441379918224105028109d0f1ee767c3778378009a142a0b1fba62d78040b56cd1dd9859d61af92c815afeba5799363eab932822c7ef12154cc0ad992d563bbd54f1f83e095d3f79961a8ba115dcfd7c0684989d09c5b4d12b0b0ca93e7f771b2e6e48197edd6d3ec7335f196e192ab50f8a190f0952f6e7cd678f0a9289a8e96688ac202fdd8ec4955e2beb172e990e3e1d253e67e85311fc5891485e73b62d10661056136f01e766994ed27d35d6982fd63aa810da033af072a507d9fed0fa6b901ff4d342e9cdeaf36c5031dc0ef1f775744b105010000",
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
      "Wed, 17 Jun 2020 21:08:30 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d4fa340147defaf20ecabfda0800593666d5a5c892d5d29d5ec6e366418061c05069941634cfffbce006d616b8c6f70ef3de79efb31f7bd2749f213ce42f94292031c3f97a878fbf64802f94c781003b1f078b3eb9bc56d64939bab14abbfad89a2a8463c9dd651b8425390e609ea53521610d18bed661017a4cc4141489f13f655bdafe8e6581b1b237d726e9a3596a2245ae2ec49303c3096d38be170af631013122708e4980e20490ff6e1cb789817e411414687ddb4439e890e3f4ffc3d2110304cb2e976538b28292a7c94029c08194774185c76e90718a4839847bf60880084a4cc989056d3409245382e8b8a9c33bd732337579a0fbf2d83bcb196d6dc932049ca34f33390a23329040cf8ec2d47d295bb5e49b673b5765733cf5e3bfe667e6dad6683f97ab95d391be9feda722d8981204115569a4a97d59fc37f2a4555b6105186b34a9327bc2d25dcdbf4d1fe6084070a41c25551d484f993d139508c911944c1044686aa07d1080581114c74a00623686a480b0304da0c95b21a0f329285a6a24125d47d5555755fd3a2d0370ca0f9e63980238e360d10c90d7a77a8e5b5c00c2d30cd09c54d93e57bd7f62cdf73b7ce7ce659edba2350266c512bef56dd2987f106b5957ed692134579810917558dd3763ccb9dcd3dfbae2583efd612c500be6d9ec5764520a1e88806059f1543c58a846230b2335b598b23b8da949ffb20ca23fe1c741ecbe18162fe552d27f3efe6f1f862755a51cfa6b6ca1bcfb59d1f72cbb9fb98e60e24e5073c2f8d59ce79b71e78876987abf7ffd7df5e2b87ccdf6a234fbedd5aee2f81ad7cc2e3a208152883c7ac5f585d01acdd5f38453c7c7f180482df86437ecab899bf22488fd96181ea3785ebce37848a32d294c99e90030b761aa18f8d7dc4c97110b9508a32b6ef457d24ea46ee3a92ca969c0a26c2f93b709a21ee7abbde3f61e2577be1050000",
    ],
    [
      "ETag",
      "TAHKDQfIoKFmi3ZE71138g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1592428057699"
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
      "4d",
      "4f",
      "c2",
      "4010bdf75790f50a09c88762e201b54a930a5acac910b2b4d3526cbb75772b2184ffeeecb6482f9a269278e9eecc7bb32f33bbaf7ba3d120ef51ea939b065945e1470e7c7711827c551b07441e4b814bc65201a4a9d82069a8d8c3d4e160cff3f147d7b2a726efaf3ad2dfdede162ce1ad21a1c8db6384711041ec0b8cdf74dc28f31a4b6902ea448fc579922e75d83cc172976978e63ad6e4a98a24ccd7c8646edba33bdb24257468fe2ce2534997fac8bf49e87561946264c3560e04c021f5e0d475c6d9063c69e9f10a9a6431b404cbb907a2145185051c7296679433d6c254abdb6f75fac3cbdee575bb7f35180e8ff4987954462c5515f319f9d6974cd2d8615b35623228ee80176131f1e3284850b984ea8410fa54c5914fbe7387e62f446be20e7a156eb95b1895cadaaa38a9208a61f94fea78256b8a2fbc9e76f94cce244e1396a7b2a6f4a33d1d9db1717443dda61f46ae792e5921d10b35755debd99cb9a3e7971fc5f1bb3899e06e2741bc70861e13a09dd569f7aed1446d7274ea3d534e94caa892e7a0d31ec53fd63892980b682cc038185f56149be01d050000",
    ],
    [
      "ETag",
      "9nRreLUuHq3ILOEr5b1tdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-36-1592428057699",
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
      "54",
      "6d",
      "6f",
      "da3010feceaf88b22f9b544802044825d4219a15264a5b08edba6902dbb9a4ee429cda4ea7aaea7f9f9df012d6aaea377277cfcb9def78ae1986f987a6a1796c9898c60f39f0a74ff70c9b473a0312c53a733b180e7007ffbc197d3f1b5d322bb54836baeaf7cb2a5aa0055a6709d405cb390171bc983762cef20c71c6ea8ab0deead41dd76bb69b3ddbed763cafc40a48a2094dff68863b2933716c595b1f8d98b138019451d1206cbd8b5b8f4d2be3ec1e8814d6a1aca59484f5bef049c2089294a5fdc5bc34910be04b58239a681b7b7488bf1ed237285a376255fd48092042589e4a6dada4212c8d689cf3825c313daba00a179e779f958039f727fe3030ce073f3eaf422461f5c540c2582e39883c91c6b7d9c5b9b1ca94f21d122056c6cdc89ff92ac259441358d27065f48d9342bc200e41489a16f201c2095444557633b2f11bafb5a3d024482ab54dd9b26b7790d3b33d1ce12e897a2d17473660dcc35d17b5b04dbc36b4430ca8ca20b5768947294bb11391b0dbf56c3bf2c2b6db749be041db46d0693921f11cd72676b36377cd0dc3cbae9fbf9c4a38a52263826e666adeccc681bf0c668be97010f8d5de23a486765aba3fecfca025a9865475fbde585e39ca3865ca54f17ae369e0cf06c3607c5db1a156690231224ff307bd4c114a04ecd188a33548e0e72cd48f635e5eccc7c1f8623a98ec198aedb8dc560a55f66b6776df53952d78ca0e9fba7c8532aa6d76da6625f772f426cb354af237681e3761d339e0a8fdffeb77adc26daabbdbb832af16feec56638b9cce",
      "cc20020e29d9ab7d603735b04c7fe06f45956f8f5c23d49deff4855461752644ecd50987f268e8ba6cb52474d46abaee965001b97c5de178ceb6e2d5a16b2d58432ab7b3280fbe1ce4cb81a5bc62a780e972b5e4d3f1f4ac305f7ba9fd03f1363c10ad050000",
    ],
    [
      "ETag",
      "YACAb6bZWHJGHPo/n/cpHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1592428057699"
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
      "4d",
      "51cb6ec23010bce72b22f7da482114289538f0521f8aaa92162e15424eb27940924d6da708a1fc3bb6930017db33b3ebf58ccf866992435a84e4c5247e1aff55c04e0f3188953a78c0ab4c70b9955870208faa1a048d55f53c5a1d16af9b3c1c26c78f8d374a5c9f4e57934953c58304722aebce12491ca590855ce25f8dcd96d75a41735037ee764c0fd437b49a38955a5b4c7f96f77c8ea1e63fd7ae3b9db94bd24ab5deb772adf53bf6e87b1001832280db6b4a867b08c4bbb6cd695e666071ac5800bc1da21a1b3966589594215a92b2fa43ab37183b4fceb33d180dc7e3ae3cc3808a140bd5b1fe26d7f90205cd3c3c2aeba4d764c31ad824d1e540a2bb70eee391d2bf6a766cc7b66cc7726c72d5eaf6b4353ab4bd4d9d9d04f02f86d214076da52f7bbb54e6a85c0b158a6015683aa0f2d7de5221b988661c8cdab800aab4237021020000",
    ],
    [
      "ETag",
      "CfQkDGVmd6hwJVR7hLbaAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfdb4e83300000d07fe9f35c04c6cd3718e1ba1b5861f0420a6d1a981b488ba518ffddc5f307e707a0b6258cd57cb89107780312a9f6b6dd2683e5aea255fc482c4190b16f3dc52a350ae4e956d9c7024639b2a330a6fd2123d83cb908ef63b5ab9cc5ea8cabe3c226dc43c98b7a775f4e54305a3aefb22e3c2c897e879a36cbd7069f77fc2bf960bcfa0ce641f205baf49243567b6b62fb13c596cf156c06349d5fc45a158f269f95b5f28f388346d6258313f05949f922ac7ebe9e250acb7444e470bc9917dc51b0016419bb89b0ba7bce34ddb637e0bf59733992e7d525682213f8fd03bc19b67005010000",
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
      "Wed, 17 Jun 2020 21:08:35 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1592428057699",
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
      "00000002ff8d546d6f9b3010fe9e5f81d8d7269057924ad11aa5748d9490969076d33421db39a85b822936adba2aff7d36900496aaea27f0dd3dcf3d7767df7b43d3f4271a6ff4734dc7347cce207dfbf6c8b07ea63c2050a83cb1f1d742ed670fcf6f6fb29f59d7e8d0ebe4753c2ea2688ee6689b44d0e42c4b09f0f3f5aa15a62c4b50ca58531236bb56b3dd1f757a9da1d9b706a35181e51005731a3f29860721127e6e187b1dad90b130029450de226c7bb01b2f1d2349d92310c18d7a5a4366e2c6e789bf478c2041593c5eaf0a111987d4872da2919271446ff0459dbe45d1b615cae8174a0011c2b2582869050d617140c32ccdc925d3bb344a73aef970ac18f4953db7a79e4658946d633f465b38d33648205fbc25a05db9cb853673ae96ee62e2cd968ebf9a5edb8b496bba9caf17ce4abbbfb65d5b1308479063b5b176919f1c79c815e5d936c0058d734d9ef25694486fd9c7d907233c502812a98a4319e65be600b587e60807d822c1b0dbc78109180fb1d5475d6c92510f7a1b0ca8ca902b2bf02866716fd8333169f77d0b3a96df935cfe28e8f67c3ce877ad009b5db2417a89de1d6a794da9804bca13c669d964fdde9d79b6efb96b673af1ec6add01ca22715928af575d2b47c80655957ed6921345494a9914958f73e678b63b997ab3bb8a0c79b7e61022f2b67a56b72b401187231aa5725602d205dba8c1e8ce64615f1ec1f94db9d9077119f1fba0f3588e0c54f3cf6b39997f3d8f272f56ad15c56c0aabbef2dc99f343af38771fd3dca128fb80e7a534eb89ecd683ec30af7135fefffbd3a8e4d0e55b2de5e9b76bdbfda5b0b94f795c082085981cb37ee1ea2a60e1fec22a92e1fbc5a01072371cf27321cdf215117ecc4e5228de142d3a5f12b6e5d71aec092530152711037364ed234e9683ca055b88c5be17c592281ab9ab49ca2a7272980a97efc02987b8",
      "6bec1aff00c6099f69e1050000",
    ],
    [
      "ETag",
      "n/z7a1qTbLQPuXu3/2iHpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1592428057699"
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
      "00000002ffc5544d4fc24010bdf75790f5282415f934f15015a51111a11c8c21646da7b5d876ebee564308ffddd96d815e344d24f1d2dd99f7665f66765f3746ad46dec3c4231735f21a061f19f0f54900f2496da620b2480a5c5296082075c5064903c56ededbfdf6a9f9b432ed612606d6731c9cf7accbcb9c25dc378829f2361861ec87107902e3171dd78abcc6121a833ad1655116274b1dd60fb05ca71a9e39537b7c574662e669643c1f8dacabd18014d0b6feb38847255dea23ff26a1d785518891157b9d820f1c12170e5da79cadc095b61eafa0711a4143b08cbb200a115598c30167594a39630d4c35cebb8db376bfd96af6cc76b7d3efefe81173a90c59a22ae633b2d7974cd268cabed4884927bf039e87f9c477a3207ee912ca1342e85315871ed9e7b6f55f88f6d8e9b44adc62b7304a95955571527e18c1f29fd4f14ade28bef06adac5333992388d5996c88ad2b7a347eb888da31baa367d63398363c90a895ea8a8ebd80f8399633d4c7e14c7efe26082abb50431e10c3d26403bebcc6cf5d04426d939f59a29274a6554c933d06997e21f6b184accf93412606c8d6f753183d11d050000",
    ],
    [
      "ETag",
      "2KI95+0Qj0IHusEAYmg38A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ?",
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
      jobId: "grouparoo-job-38-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc5545f6fa240107ff75310eee52ea98a0a0a4d4ccf587a2567b587d8e672b9e802035d8b2cdd5d7a691abffbed022aa65ed3b77b8399f9fd99d9dd796d288afa88d3503d57541fc74f39d0974f6be2ab6732031cc532037c3dfe3ebed69c1bd781b57d776551d78987c3b20a1768863659024d46721a003b5fcc5b3125798628214d41d8ec99cd8e6175f5aea91983be659558064934c1e9a36478e03c63e7edf6ce472b26244e006598b502b2d9c7dbcfdd7646c91a02cedac7b26da1c4daef0b5f2424401c9374b8989726720674091b841369e3800efdafc7f42d8c36ad58543fe3005010903ce5d25a49139034c2714e0b72c1f42a82225c78deffd602eadc9ed8634f19cf1653eff30a6d24ddea8b8298b25c526079c2952b7776a3ac32a1fe8018b095727f6dbbb6885012e10496385c2943e542194d2f156555fd15760aa91018c76961c8437e02351b225b0dd139717e7b0a4982b8d0aeca9603ad8f3aa666f9913f0822b367f89106be6ffa0303f57c2db074d0431f509d814bed128f52929abd0e587a081ad23a0684a1a1f741eff6babd9edfd7753091e5ebbe110dd48a61bbefe70fc51c2e31cb08c3d594d57bd7f1eca5e72ea6e39167d77b8f9018e165e9feb8f3a396b81852dded7b6379e328a3980853c5793a53cf764763cfb9abd910976b02310a5ee64ff27a4528617040238a36c081de90501e8e7a3b9b3b9e339b8e260786e2bedcee2a9928fbb5377be8a9cee6bd64c7475d9e42199536fbba5acb6dcf4eb2dca1243f41f35c85d5ce1147e304db7f7567fcc35ef5f5bb512357c5a2a86ca93f16b6fb53628b9cccb81001853438c87de0e9486099fec01e14e5bbad24116231edf5191761f18a0376500f28946f1a6faa5e0bc24ea76f1ae68e5000297f5331d07a835dc59bcd24b5600329dfcda2dc50e520b74796f29a9d0226cbc51b9c3ad36f85f9c6b6f11711d4a3af5e060000",
    ],
    [
      "ETag",
      "etjCKCH0IMRIejEVF9rRIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30147de72b48f73a1275bae9121fe6e2d08ca8c3f9b41853f1c250e0b2f632e30cffbeb680fad2f69c736f6fcfe9d9b26d7688b31d7bb6d9368e7e0a10a7bb08e8431f7c904542526d396612d8bdae06e291ae9e1fe7a194ee64f92e17f8476fee4150160d8755950cbe21e5aaeeac90c2610cc94e2afc65b05df346cb780afac6cd469881e6865aa3536eb4e9ec73ec8efd5b29c59d91662bcf7b197963564ba5d9d76a2dcd53f6b8f52104015900d707e502f710d0d438973ccd137024162200590fd18d951c092c722e101d45390f7da7dd1b74ba9d7eabf7f4381834e509069c62cc74c76ac92ef30989273e1eb57bd6aee21115acc268a260e14d3eb70929e9b76abe50657d5a5b0d5a5f878d4e047221507991601c74fb2dd684f18ada2ce92c481460e880abff9ac4a4b8902712acd2fa07a45714011b020000",
    ],
    [
      "ETag",
      "OwOfssGHSKsPoztFGkrtng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb642d0e26caa73b49a1a158454518b26168084245400248747af73a7d37784f9032c68548fae6c26bf006640acd399b7b8d613dee391446766e1aabdf28ebc2c95de414efed677ec2660f337b0a8631604a77480f08ddfd643fa6d546f87b4c3272d0a2541fac200a2feab924f903ea9c3a6189bf1529233a1c8348b06dc3a0b9828ea7ba722dfc9d8deb8aea444e7c71852ca8e842ff584e3b62b07ebb74633fbe0a61759878783c0eb79864379875c81fb590db44251aaa621ac653fdf5438b1398013eb565c74552be6668659a33f0df4c7ad9f2d7d5e269c73bf0fb0781f4c81b05010000",
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
      "Wed, 17 Jun 2020 21:08:37 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6fa24010feeeaf20dcd7aaf806d2c45c8da5ad89628bd8e6ee7221cb32d0ed214bd9c54bd3f8df6f1750e16c9a7e8399799e79e665e7bda528ea1f9204eaa5a2fa247acd217bfbf6427df5427a80a3a8f03cecb4ddfded4f5d33f465a03f457c786745934919450a3443db348636a37986815d6ed69d28a3798a324adb82b03d30dbbd91d91ff6c7dac8d04db3c43288c30549fe488667ce5376d9ed1e7474224aa318504a5807d3edd1deddf5bb69465f0073d66da6ed8a4cacfb79e2ef31c588139a4c36eb5244ce20f3608b482c659cd0817fd5a4ef10b4ed44227a4730208c699e7029ada4c1340949946705b9607a1746612e341f7f6b06756d2dac99ab601ae7dbc44bd0162e940071e4f1b714941b67b554e6f6cdca594eddf9caf6d6b33b6b39edcc568bcdd25e2b4f779663291cf931145865a25c157fb6f8291415d902609c248526577a6b4a84b7eae3fc83111e29248950c5a00af30c4d47bdb166faa16fe0703c18f9a106be3ff68d111af81a3687300c7c40758642598947094d062604a301465e2fd0fbde1007e099a360e8998237d4fb7d73acf5d40abd3fd6f237231cae094b29235593d52767ee5a9eeb6cecd9d4b5ea7587288ff975a9bc5975a31c2e1a5457fa594bce14a519a1425431ceb9ed5ace74e6ce1f6b32c46e2d2042f86dfd2ab72b443183131a6562561cb2250de460547bbab4ae4fe06253ee0f414c44fc3aea3c952302e5fc8b5acee6dfcce38ac56ab4a29c4d6955d7ae33b76fd59a73ff31cd238af30f787695594d45b79e45875983abf5ffd7ef562d872ade6a254f7dd858ce0f892d7cd2e340081924f894f50bab2b81a5fb0ba748841f0e834488db70cccfb8308b5784d9293bcea07c53a4ec7c45d8eb1986a91f080530e3e711e6e01871761c642ed842c20fbd288f44d9c87d43525e9353c064b878077635c47d6bdffa07c0649901e1050000",
    ],
    [
      "ETag",
      "bQv0vPGZ6076Md6Wgt4HEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1592428057699"
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
      "0000000002ffc5545d4f2a31107ddf5f41ea2b2488c005131f405049908bb03e1942eaee2c56bbedde7e5c2586ffeeb4bbc8be683691c4976d67ce999eccb467df835a8dbc301193f31a79649b7f16d4f66403e6ce6d16a02d371a974c0a0da4eed860e8c6b187974cdc8ce237f1c246a6d5eaf5acedf0d78b8b9ca5a3274829f2de31c23861c0638df1838f6b45de6382a6e04e8c24b7a958fbb07e80cd36f3f0325c4c66d7652495b14766f7d3e960381d9302dad5bf1689a9a16b7fe4cf24fcba0a0a31f22c1f1790800211c1a1eb4cc96788ccc48f57d334e3d0d0d2aa087421e20a7378a3a4cda892b281a9c659bf71dae9b7daad5eb3f3a7dbefefe95c46d430295cc5fd927cea1b69285fc8573762d2cdef40e5613ef1fd284852ba84f28410faef8a594c3e73bbfa37c4c92cecb64bdc62b70a4a959555715209e3b0fe2575bc92278a2fbc9a76f14c8e244e536985a9287d35fd3b3862e3e886aa4d8f06e1f858b2daa0172aea8693dbf1321cdccebf14c7efea6082e1d6809e2b891ed3e09d75da6cf7d0444db277eaa5744e34cea84659f0e988e21feb8619cc25946b0876c1070abdb7091d050000",
    ],
    [
      "ETag",
      "BCinHDdxnkiDt2288uu5lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-40-1592428057699",
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
      "0000000002ffad545f6fda30107fe75344d9cba61508210152097588661b12851242bb6a9ac00997d46b12a7b6d30a557cf7d94980a0b2aa9af682c2ddfdfef8cebe979aa2a80f3859abe78aeae1f03103baf9f09b78ea99cc0047a1ccfcb8797067183d3b71a8df69b3cf579ba6339ef5fb4515ced10cc56904754632ea033b5fcc1b2125598a282175415837b47acbb47443ef6966b76359059641148c71f22019ee394fd979b3b9f3d1080909234029660d9fc4fb78f3496fa694fc069fb3e6b16c5328b1e6dbc21711f111c724e92fe685898c015d428c70246d1cd06befcb317d03a3b8118aea27ec03f27d92255c5a2b687c920438cc684e2e985e44508473cffbbf95803ab7c7f6d05586d3c5c4fdb842b1a45b7d521053964b0a2c8bb8f2d5995e29ab54a8df23066ca5dc7eb71d5b44280970044bbc5e297de542194c2e95435d1ecb4de5826b601c27b92d17791154cc886cd9cad18929ee292409e282b92c5b76b50e6af534cb0bbcae1ff4daa61768e0793daf6ba2b6a7f99601c6da035465e052bbc0a3842400486be73f7a676d08986681a7753cd330f59ee559ba65747cdf04b564d8eecff34c31874bcc52c270d96bf5d619b9f6d2751693e1c0b5ab670f9068e465e1fef8e44747e2a24955b76fb5e595a39462224ce5531d4d5cdb190cddd14dc586b862630891bf993fca4b16a088c1018d288a8103bd226b391cf57a3a1fb9a3e964303e30e4b7e67a57c944d9cfbdd9c399aa6cee263d1e753185222a6d760cb592db9e9d64b941517682e6a90cabad238eda09b67f7137779dd1e4db7fb03748c5e0fe62b1fcfa55abf0ab626594d6d4d9c276ee2436cfc98c03015048fc83e23b9e8f0416e9776c4451bedb4f122156d45e9f7111162fd96707759f42f1ae715c4ca3206ce97aa76dee080590f2d715dd6e6b57f16a47492d8821e1bb5e14bbaa68e4f6c85256b193c364b97887937280dbdab6f607fb0e4f3d",
      "68060000",
    ],
    [
      "ETag",
      "XVkTQiawRmg2Y0Q+My/RLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6f",
      "8230147de75790ee7524eafc5ce2831ab79930b7b111b32cc654b8301cf4b2b6cc18c37f5f5b4079697bceb9b7b7e7f46cd936f9495848ee6db24fe2df02f8e92606f9a60f1e882295426d393201e4565783a4b1ae1e86c9fcd93f88cf4d848ce58bcdcbc3dd62369d565522f8868caabab3420a4709a4a150f8cb60bbe68dc66806fac6dd8e9b81e6865a93a7dc68abf5c7f271e9b5a50c4323ad7dd79dcddd25a9a5d2ec5bb596e62907dc7b10010716c0f54139c7030472659c0b9ae52938020b1e80a887e8c64a8e391639e5888ea29c7ec7e90e26bd7e6fdc198c869349539e624065824c77f8efe4325fa2a4a98747ed9e74ab787805ab309a2848d4caa79d9092fe74738f5ca8b23e6dad066dafc3e62709e295a3f222c038e88f47a4096381daacd459485e80a103aafeeb29918a8b682ac02aad7fe0b2b3cd1b020000",
    ],
    [
      "ETag",
      "6diBMUjsYWfonnpCWOF3CA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "d9",
      "e7c88c226cdf68129da0a909455ecc62c9ba17bbec76faefcdf4fcc1f90128cff13ca7cbd0e01ebc028e5ee03edf3b836189b50c9cb76f163ec8c35d9562a185dada0a4b51875ce9d27d9558958ba5cbec3361a86a7c9f4edae1204cdd6a33e77832b9b6d18084ccc95bb7d17b43afdb5e4fee7e7597f8c0e280d46c147d224b76027135bed3f423dafcb9f14cef5290a6d1e2eddaf30c5651ab4ab130251199b7e0549fbd18a9d66720782952bbdb3a02e3eb91dde4c8a29a82b6951a6166801dc0db48263ca7e43953340877e0bf992e7cc4cfab85d18427f0fb07059807dc05010000",
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
      "Wed, 17 Jun 2020 21:08:43 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1592428057699",
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
      "ff8d54db6e9b40107df75720fa1a1b6c836d22598de590c6528c5bc0b1a2aa42cb32904d80a5ec92368afcef5d2eb6a18ea2bcc1cc9c33672e3b6f3d49929f491ac89792ec93e87701f9eb9727eacb17a507388a4a4f1eddec209920c57908f4e5dfdd7af6f0c4a3f9bc8e22159aa1248ba1cf68916360975b6710e5b4c8504e695f10f6b5617fa81b236d3453f5e9c4306a2c8338bc23e973c9f0c879c62e15e5a06310511ac58032c206982647bbf23252b29c3e01e64ce9a6554426a67c9cf86b4c31e284a6f3ad538b2818e41e2488c4a58c133af0afbaf40382924124a25f080684312d525e4aab69304d43121579452e98de8451982bcdc7df964176cc3b73e94a98c645927a294ae0420a10471e7fcd40bab1376b6965dd6cecf5c25d6d2ccf59de9aebc560b9b9dbae2d47dadd9ab62971e4c75061a5b97455fd59e2a75254650b807192569adcd2db5222bc4d1f57ef8cf048519208550c9a306faa4ed070a61a7ee84f71381beb7ea882efcffca98ec6be8a0d0db4c007d466a894d57894d2d418ea810a86e6c118269e36d10c0fe140f5d4f16c24a605381ce97283de1f6bf993130ed784659491a6c9f2ce5eb9a6e7da5b6bb970cd76dd212a627e5d2bef56dd29878b06b5957ed4923345594ea810558d7365b9a6bd58baabfb960cb15b771021fceafc2eb72b443183131ae562561cf2350dcac1c8d6626d5e9fc0d5a67c3f043111f1f3a8f3548e082ce75fd57236ff6e1e572c56a715f56c6aabecb8f6cafa26b79cfbf769ee515cbcc3f3d298e54c74eb51749875b87aff7ffdeab572c8e2ad36f2e41f5bd37e28b195aff4d810420e293e65fdc4ea96c0dafd895324c20f87a14488db70cccfb8308b5784d9293bcea17e53a4ee7c43381c69aa3e3a100a",
      "60cecf2386b3e121e2ec3894b92081941f7a511f89ba91fb8ea4a225a78295e1e21d58cd10f7bd7def1f2fa4d410e1050000",
    ],
    [
      "ETag",
      "rgFWem6a/SYd5CxWM8Yjtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1592428057699"
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
      "000002ffc554514fc230107edfaf20f5d12d018208263e0c449d0154180fc61052b61b4eb775b69d8610febbd76ec05e304b24f165edddf75dbfdcb5df3646ad463ec2c4275735b20c579f19f0f5d90ae4b3da4c40649114b8a42c11404cc50649578aedf2f4135e9c07af3f13bda6b33e9fddc7b7f6f575ce12de1bc414791b8c300e42887c81f1ab8e6b455e63098d419de8b1288b93850ecd032cd7a986a7eec419df959198f91a19cf8643bb371c9002da9ac7457c2ae9421ff93709bdce8d428cbcb3e50402e0907870e83ae5ec1d3ce9e8f10a1aa711588265dc035188a8c21c5e7196a594336661ca6a35acc645b7d96a76ea1797ed6e77478f984765c81255319b92bdbe64924613f6ad464cdaf91df03ccc27be1b05094a97509e10425faa38f4c93eb7357f213a63b7dd2a718bdddc28555656c5490561048b7f52c72b79a3f8c2ab6917cfe444e2346659222b4adf0e1fed13368e6ea8daf48ded0e4e252b247aa1a2aeeb8c0653d71e3d1d15c7effc6082de5a8278e20c3d26403bab516f75d04475b2736a9f29274a6554c933d0698fe21feb3e94980b6824c0d81a3f6a94bfc01d050000",
    ],
    [
      "ETag",
      "TrpqeYIJcCUsB2Iy+UHmFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-42-1592428057699",
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
      "ad",
      "94",
      "5d6f9b301486eff32b10bbd9b4268414925029eaa2946d4869d211d26a9aa6c43686ba054c6dd3aaaaf2df670349889a55d5b43b381fcf797d8e7d5e5a9aa6df932cd4cf341d92f8a1c0ecf9c31d85fa89f2600162e561a8173f199fc7dfc4c0b41c3b84a137b4e3d1a88a22653607699ee036a70543989f2d179d98d122078cd2b604b6ad5edbb49d9ed51b76ed41df71aa5c8e93684ab27b45b81522e76786b1d5d189298d130c72c23b88a63bbbf1d8337246ef3012dc382c6bc84adc78bbf0794211108466a3e5a2125170cc563805245132f6d921fc7288ef1090766219fd48100608d122134a5a8541348b485cb0122e492fd228cda5e6dd6fc3a02fdca93b09b4c97c390b3eae41aa70eb4f1ae0da6ac5302f12a17df5e797da3a97d56f01c77caddd7c777d575a188d488257245c6b23ed5c1bcf2eb47d5c692b45950543cc05c94a590180096e8891deba95de9129ee100a028424d761ab41b70fcc61d781111ca068786ac3a88b211cc2810d4e61173916b6428841932054ed2a1f64b257009b080ea00da2bed943d1008478d8374f4f9d30b29caed30dfb309230bd266c76e7796244e00bc273ca49dd6bfdc6f7027715f8cbd9641cb8cdb3474036f2a2527f78f2832309d9a4a6dab7daf24a51ce0895a2caa97ab3c0f5c793c0bb6ec890576c8a63809e170fea924520e1789f0d1848b1c0ec92866a38fad57ce105de7c369eee09e5adb9da467219f66b27767fa6262d78ce0f475d4da1b22a997d4b6ff836274729d720298e601e6bb36e1e305a4768ffa26e11f8deecdb7f90077239b8bf48acbf7eb71a7c5dae8c5a9afe63e9fa3f556ee953",
      "1e1f4798e10ced2bbee3f9a8c4cafd8e8d28c3b7fb4965c815b5abcf8534cb978cf8be3a62b87ad724ada65101cd9ee50ced2d502632f12ac2362d731bf16a47a95a38c599d8f6a2da5555233707928a869c324d85cb7738ab07b8696d5a7f00426c4ac768060000",
    ],
    [
      "ETag",
      "rc2gw/+AGt71495dbdI85g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1592428057699"
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
      "4d51d16e8230147de72b48f73a12253875890fd398cd85b8c96636b31853f1c2d0c2c5b66c23867f5f5b407d697bceb9b7b7e7f464d9363924d98edcdb649bc4c702787913835ce84300a26052a82dc74c00b9d5d52069acab57e397bfcfd5a457a6cfc70fc6f8e1e8f9c16234aaab44f80d2955752785148e12603ba1f097c176c31b2da329e81b371b6e069a1b1a4d96b9d166f3f7e9e334b89652dc1969bef4fd87b13f258d54997dadd6ca3c658fdb0022e09085707950ce710fa19c19e782a639034760c14310cd10dd58cb31c722a71cd15194e3b94eb737743d77d0e9f5ef86c3b69c6148658299ee58be91f37c8992b2007fb57bd2ade3e135acc368a320d1553ed70929e9473777c899aa9ad3da6ad1fa326c5c4a10af1c951701c68137e893368c096ab35267217901860ea9faafa7442a2ea24c805559ff7c98c8701b020000",
    ],
    [
      "ETag",
      "YBOxXYC5ymJqWllrkq4LRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb642d0ec6ca4077b5085a0a8594ff868921c4c0944042abe0f4ee75fa6ef0ee00134295aa26d1d11e3c8319436b4dd69e30f7cbb55e8676d249dc251ee6ae6f1bacbe21d5c0eec30d92a142e169f7dac70e327e7457222bb6d9537916fe6c35ef8c09d88e218afce368e3861b4559375141ad1b0e4ac2c58ba77dd60a6ecea93c0ae48f5fce324936b5ec1bf2a630fd4dc4f2fc04df8829398905ce882ad3426b0c43a803cbbd84bbd136bbd0cb813b2174ed34d0af79ef64da1273bd1e07a5c00ad0dbc02555157fccb63bcb5a81ff6635cd037d5cf7144b2ac1ef1f18e10c1905010000",
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
      "Wed, 17 Jun 2020 21:08:45 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1592428057699",
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
      "54",
      "6d",
      "6f",
      "a2",
      "40",
      "10",
      "fe",
      "eeaf20dcd75614b1621373f52cbd9a28f610db5c2e17b22c03dd1658ca2e7d49e37fbf5d4085b369fa0d66e679e699979df78ea2a88f240dd47345f549f45440fef6ed81faea89f4004791f4f0a5759384a3c7c50f8834dd7e0d37af33ff6532a9a248896628c9623865b4c831b0f3cdba1be5b4c8504ee9a9203c3506a7fde1583774b3371c9d8dc71596411c2e48fa2819ee39cfd8b9a6ed7474234aa31850465817d3646fd79e752dcbe90360ceb4765a4d6462dae789bfc714234e683ad9ac2b110583dc83049158ca38a003ffa24ddf2528e94622fa99604018d322e5525a4583691a92a8c84b72c1f42e8cc25c6adeff360ceada5a583357c1342e92d44b5102274a8038f2f85b06ca95b35a2a73fb6ae52ca7ee7c657bebd9b5b59c7667abc56669af95bb6bcbb1148efc184aac32512eca3f5bfc948aca6c01304ed252932bbd0d25c25bf771fec108f7149244a862508779a3de19ea9bbdb11ffa231c9a83a11ff6c0f74d7f344403bf87c70618810fa8c9502aabf028a5a9ded307861e806722e87906f40d6f0c2678a340d787661f63dd00b5466ff7b5bce484c325611965a46eb27ae7cc5dcb739d8d3d9bba56b3ee101531bfac94b7ab6e95c345839a4a3f6bc991a22c2754882ac739b75dcb99cedcf96d4386d8ad054408bfad9fe4768528667040a35ccc8a43bea4811c8c6a4f97d6e5015c6ecacd2e8889883f7b9d877244a09c7f59cbd1fcdb79",
      "5cb158ad5654b3a9aceada75e6f64fb5e1dc7e4c738be2e2039ee7daac66a25bf7a2c3acc5d5f9ffeb6fa79143156fb596a7feda58ce6f892d7dd2e3400839a4f890f50bab2b8195fb0ba74884ef0e834488dbb0cfcfb8308b5784d9213bcea17a53a4ea7c4dd8d787676363472880393f8e30757d1771741c642e4820e5bb5e5447a26ae4b625a968c82961325cbc03bb1ee2b6b3edfc034eb0d445e1050000",
    ],
    [
      "ETag",
      "tMEPmf7kLBeg/2NxfUxCbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1592428057699"
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
      "00000002ffc5545d4fc230147ddfaf20f51512be05131e5011491011c69321a46c7738eddad9762231fc776fbb017bd12c91c497b5f79e737b726f7bf6e5944ae42de43eb92a9175b8794f40ee2e36a09fcc66062a615ae1120bae80940d1b34dd187650ddb9c305674ffcb37edfaeb95df01af1b6d74b59ca7b818822ef0b238c831098af307eb67129cb5b8cd308cc899e6049c457362c9f60bd8b2d3c7767a3c9308f44c2b7c864311ef7afc7039241fbf2cf223ed574658ffc9b845d974e26465ec57a060148e01e9cba8ea578054f8fec78158d6206152512e981ca444c610a6fa448622a85a860aad26c546aad6ebd59ef545b97ed6ef74067c2a33a14dc542ce6e4a8af85a66c26b666c4a49dde814cc374e2875190207709f90921f4618a439f1c73fbf22fc4d1c46d3773dc6cb77472958555715241c860f54fea78252f145f7831edec999c499c4622e1baa0f4ddf8b17fc6c6d10d459bbeedbb8373c92a8d5e28a8eb8e1e0673b7ff30fd511cbfcb9309ae771ad4540af49802ebac5ab5d9411355c9c1a937c238511ba36a99804d7b14ff58f7a1c65c40990267ef7c0331b92fdd1d050000",
    ],
    [
      "ETag",
      "f0yTGUnlQnx2H61T9ec3pw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ?",
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
      jobId: "grouparoo-job-44-1592428057699",
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
      "a5",
      "54",
      "db6eda40107de72b2cf7a595021883b1898452046e8b4420059ba8aa2ad8b5c7ce26b6d7f1ae93a2887fefaecdc528348ada377b2ee79c99d999979aa2a80f24f1d54b45c5247ccc21db7cb8a758bd901ee028941e471b3d2f6fb1e6326ce496fb7be31acbfb41bf5f4691229ba1388da0ce689e79c02edd4523cc689ea28cd2ba00ac773af596d1d33bbaa51966b7d72b731944c184240f12e18ef3945d369b7b1d8d90d230029412d6f0687cb0379ff4669ad17bf0386b9ed23605136bbe4d7c15510f714293bebb2845e40cb215c4884452c631dbc79f4fe11b04c58d50443f110f90e7d13ce1525a09e3d12420619e15e002e9451885b9d07cf8ad18d4853db1878e329cb953e7e31ac5126efd49414c59ad326079c4952ff3d9b5b24e05fb1d62c0d6caed377b6e0b4b460312c18af86ba5af5c2983e94851d63ee250fc17820a321f18274921c94138828a10e1ddb5717c668207080982b860df85ad4cad8b5a96d6c30136bdc06a1b38d000630b9b066a63cdeb75a0e3634055042eb9cb7c94d004051d2bc086a619d807f02dd3c066abd36e77db565b172e0d7cb3a79b2d7587b03dd4f39c110e23c252cac8aecfeaed7cecd82b67ee4e8703c7aed61e20d1c451a9feb4f29392b8685255ed5b6d79a528cd0815a28a898ea78e3d1f0c9df1b222433caf0984c8db2c1ee5030b50c4e0988d32140387ec9afa7238eacd6c3176c6b3e9607244285ecccd3e9289b09f07b1c79aaa68ce263d1d753985d22a65763b6ac5b7bd388bb244517e06e66967565b2718b53368ffa26e2487f8ffe2744dd7ea9a2e96ff2f2a775fbf6a1512555c8c9d3af5",
      "bb6bcf7fc8dcc2273d73082083c43bd2be63836462e97ec74114e1fbf32433c4853af0332ecc62993d7664f73228579bc4e5404ac096de35bad61e502466fc7544d732f711af4e94e4821812beef4579aaca466e4f24e51539459a0c17ab381d4fbf16e26bdbda1f9690111f67060000",
    ],
    [
      "ETag",
      "T0DwVWb0Usb5u8UxyU5VjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b48f73a32343865890f73d3cdc498c9c683598ca9f58238e0b2b6cca8e1dfd716505fda9e73eeeded393d5bb64d7e927c4b9e6cb249e2df12f8f12e06b9d0870044994aa1b6027301e45e5783a4b1aeee274b36c9c25328dcd7dec30227ee69b73c0c877595603bc8a8aa3b2ba4709440ba150a7f1b6c37bcd1729a81be71bde666a0b9a1d1e4b130da74fe357e1b07b752865b23cdc3d9ec79341b9346aaccbe526b659eb2c74d001170c8195c1f5470dc039353e35cd0ac48c111587206a219a21b6b39e6581694233a8a723ccfe9f4fcaed71db8bdfea3efb7e529322a13cc7547f8492ef3254a9a0678d0ee49a78e87d7b00ea38d824437f9dc26a4a4bfbaf94255cd6965b568751d363a4a101f1c951701c6813770491bc60b6ab35267217909866654fdd77b221517d154805559ff864238251b020000",
    ],
    [
      "ETag",
      "7iYcFmUzUs0D5/QoF0zhYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "7f",
      "e9",
      "b335dc06edde5610119c4a40e69e08944a488b148a282efbf7917dc1c9f90105a54ca97cec38bb81773017065ed375d421f27a54893e70b46d3be4f7dc0d2895fbbd78c252772aa1c9232a49fc841f32e7f9a4271bcf37353b86caa79912166e0eb5c78d36aca62ecd822d6f4de732844ee715e49ca7160d5ebb383a146e6927ce9c92e6eef4e8f4594a612d58958efd8ce18033c33f9e49b8b9c5bbf4eb2ac468ba50b5f574d79061c25339b7dfd72c72a3a067151e61cd1eb676a1024f08ac007bca66602a6f9699f986f10afc37f371966cb912560c6c00bf7f8dcb359205010000",
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
      "Wed, 17 Jun 2020 21:08:47 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1592428057699",
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
      "0002ff8d54db6e9b40107df75720fa1adb18e30b91acc6754862d5c62de0445555a16559c826c0127671e446fef7ee02c6504751de6066ce9933979db78e24c9cf38f1e54b49f670f892a36cffe58978f285f0200642e1b1f7afa677f7cd5a7c8fedcdf3edfae1ef2d18bfce6665142ed014c46984ba94e41944f4726bf7c28ce429c808e972c2ae36ea0e46baaaa953653419eb7a89a5280a563879160c8f8ca5f4b2df3feae8858484110229a63d48e2dadedfa9fd34234f0832da6fa7edf34cb4ff71e2af1181806192ccb6762922a72873510c7024649cd0be77d5a6ef6110f7421ebdc3100108499e3021ada48124097098670539677ae3466e2e34d7bf0d836c1b2b63e1489044799cb80988d185e403065cb64f9174636dd6d2d2bcd958ebb9b3dc98aebdb833d6f3de62b3daae4d5b7ab8332c4362c08b50819566d255f167f29f425191cd4794e1a4d0e4086f4309f7567d5cbe33c29a42907055145561ee441983c154d1bdc09bc0603a1c7981823c6fea4d4660e82950d790e67b0834190a65251e242451146da48c54e04e818a5c2d081457f7d5b13bd1011cea7ee081e944aed087ba96d70c33748d694a28ae9a2c3f584bc7701d6b6b2ee68ed1ac3b0079c4ae4be5edaa5be530dea0a6d28f5a72a628cd30e1a28a712e4dc7b0e60b6779df90c1776b854200f7f68bd8ae0044149dd020e3b362285b135f0c4636e76be3fa042e36e5c73188f288dfb5ce53393c50ccbfa8e56cfeed3c0e5fac562bcad99456d976aca5792b379c87f769ee4194bfc3b3abcc72cabbf5c83b4c5b5c9dffbffe741a3964fe562b79f2cfad61fd12d8c2273c160a50861278cafa89d515c0d2fd8953c4c38f874120f86da8f353c6cdfc15417aca0e3354be295c76be221ca8137558137260c6ce2386dae01871761c442e14a3841d",
      "7b511e89b2918796a4bc21a7808970fe0ecc6a8887cea1f30f6badd07be1050000",
    ],
    [
      "ETag",
      "SywNbHBRCKmSOkGMWzGa6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554514fc230107edfaf20f551480001c1840750c49989c8e69321a46cb731ddd6d9761a62f8ef5ebb017bd12c91c497b577df77fd72d77efb326a35f216261eb9aa917518bc67c0b76701c827b55980c822297049592280d4151b240d14dbb42fceedfbcfd49cf6bace7dbab66fa7d65b301ce62ce16e20a6c8fbc208633f84c81318bfe8b856e43596d018d4892e8bb23859e9b07e84e536d5b0ed2cccd9b48cc4ccd3c8ecd9b246636b420a6857ff59c4a392aef4917f93d0ebd228c4c82b5b2fc0070e890bc7ae53ce5ec195a61eafa0711a4143b08cbb200a115598c30167594a39630d4c353add46ab3b6877dafd66f7b23718ece91173a90c59a22a9e6d72d0974cd268c13ed588492fbf039e87f9c4f7a3207ee912ca1342e84315871e39e476f55f88e6cce9754adc62b7344a95955571527e18c1ea9fd4f14a36145f7835ede2999c489cc62c4b6445e95beb7174c2c6d10d559bbe19399353c90a895ea8a8eb980f13db193dcc7f14c7eff26882f156829873861e13a09dd56a76fa68a226d93bf59a29274a6554c933d06997e21feb2e9498f36924c0d819dfbee916b71d050000",
    ],
    [
      "ETag",
      "IS3+SJwpIG65TJpbSFGLkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ?",
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
      jobId: "grouparoo-job-46-1592428057699",
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
      "ad",
      "94",
      "5b6f9b3014c7dff329107bd9a425104ab8448aba28612b536e4d48bb6e9a121b0c750b9862d3a9abf2dd67432e44cdaa6ada1b9ccbfffc7c8e7d9e1b9224dfe33490bb920c71f450a0fce9dd1d81f247e1410c44c2733554e0d7e2e29be11969e7f74ddfbc9f0de865af5745e1329b82248b51939222f711ed2e17ad2827450672429a5cb0a91bcd76c7d674cd523ba661db552e457138c2e9bd50b8652ca35d45d971b42242a218810cd3964f92bd5d79d4942c2777c86754392eabf04a5479bdf0794c7cc030497bcb4505515094af5002702c300ed901fc742cdfc22069453cfa11fb08f83e295226d02a199fa4218e8abc14e74acfdcc8cd25f3feb7669017cec81978d260ba9c78efd7201172eb0f12a0d26a95235ac44cfa3c9f8ea575c6abdf028ae85ababe70e60eb7e424c4315ae1602df5a473a93f194ad29a328e5b1a4aa2b25a8028c369c9e40118a31a09f76efbe89e18e15e428800c6cb6fc356a66a80b6a5da3084a61f5a671d18aa08420b9a1d700655dfd6911e4004ea0a4cd4aef2414a52cdd42c1da89d40b30d2db08d105a3ab2552b84360a42649ac082ba0f80bc55d8eccff32bc70c0d31cd08c5db46cbd773d77356de7c3919f43da77ef610f02e0e2bfae3931f1d89f126d5695f6bcb0ba22cc78443952375279e33ef0f3cf7aa86c1efd70845c07f5a3c881b168298a24336c8418218cac72410c39167d385ebb9d3497f745028afcc6c174979d88f3dece14c7535ef293b1e753585ca2a300d5daef9361f4faa5c81b83821f3b835cbed238dc609b57fa1f3dcb1b3f0fae3d97f20d4544d6daa1a5f015e5bebb6cf",
      "ba6dbda5aaeaf7bf806fbf7e366a2565be45b6c0f2e5d299df88dcd2273c7314a21ca5fe01e20d8f4a2456ee372c491ebe5b5922836fad7d7dfee019e6efdba787ea7e8eaad78e936a4695605b336df36c27c81373f622c2524d7317f1626d895a284129dbf5a25a5f5523374748450da74c13e1fc754edcc99712beb169fc0141de2a2d7b060000",
    ],
    [
      "ETag",
      "VD/bJuHX6T6n5zYA7kPCsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d51d16e8230147de72b48f73a3230e874890f6a8c33336632ddb22cc454b8301c70595b6688e1dfd716505fda9e73eeeded393d1ba6497e923c244f263924f16f09acba8b416cd4c1035ea682cbadc09c03b957d52068acaaed93f3327b3f4daadca60f0bee2e3e3ea3ed663c6eaa78f00d1995756789248e1248432ef197c666cb6b2da719a81bf77ba607ea1b5a4d5485d696ebed7c31f76ea50c432dad77abd564ba9a9356aaf5eecbb5d64f39e2c1830818e4015c1f54303c422096da39a7599182c5b16401f076886a6ce498615950866849ca720796d31ff5dcded0ee3f0e46a3ae3cc5808a0473d5b17b2397f902054d3d3c29f7c469e2610d6cc2e8a220d14d3eb70949e9af69be50757bf28d0ef9d761d34a007f6528bd70d00edca14dba3066a8cc0a95856025683aa0f2bf9e1321b988a61c8cdaf8074fa374ac1b020000",
    ],
    [
      "ETag",
      "0w1KCVwAyn0a/Gs4GWYfTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfd16e82301400d07fe9b31a04dc646fbdc8441ceae840ca4b834dd14a22b520942dfbf7999d3f383fa8e45cb42deb9a5adcd01b1a4bdb9bf1d9b659c2f720c2d0ee60ea5ba7177ca8d6d78d7af7e9ddc25ffa78d197723b0f97d60d7454e792806e5c2b59481ed7d1f9318cb2f2fb5064aa8056e9fd94ae82843cd2ab9d415261f31950204e9af666edc5f3c2f0a2768961af34e602038c675bc97dc0f0b4dca581dc536587278818be5f9d5bd6cd8fec4ca813433e067d365c709e449eb731bbc36a6c3ea84b0e40523441c228a945cbe473e62c3c6f82fe9bac1b95785e41945a68f4fb07420581c105010000",
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
      "Wed, 17 Jun 2020 21:08:48 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d6fa24010feeeaf20dcd7fa8e0a4dccd5587a3551bc43b4b9bb5cc8ee3ad06d91a5ece2a569fcefb70ba870364dbfc1cc3ccf3cf3b2f3d6d034fd99c65bfd5ad3310d5f32485fbf3c31ac5f290f08142acf33dbfc1adedbd1c05d207793b08d67457793f1b888a2399aa35d124193b32c25c0afd7ab5698b22c4129634d49d83446cdeec0ea193db333180d2dabc0728882398d9f15c3a31009bf6eb78f3a5a2163610428a1bc45d8ee646fef7bed24654f40046fd7d3b66526defe38f1d7881124288bc7eb552122e390fab043345232cee82dbea9d3b728dab54219bda70410212c8b859256d010160734ccd29c5c32bd49a334e79a4fbf1583beb2e7f6d4d3088bb25decc7680757da1609e48bd704b43b77b9d066ceddd25d4cbcd9d2f157d37b7b31694d97f3f5c259690ff7b66b6b02e10872ac36d66ef23f47fee48af26c5be082c6b9264f792b4aa4b7ece3ec9d119e28148954c5a10cf3479d21ea9a1d0b07784402b33fc041073036f16880fab8432c038c2d065465c895157814b3b86b0d86803b868f832df8061af57c6404813f32cd7ed01d9806c1482fd187532d7f532ae096f284715a36597f70679eed7beeda994e3cbb5a7780b248dc16caeb55d7ca11b24155a51fb5e4425192522645e5e39c399eed4ea6de6c539121776b0e2122afab17b55d018a389cd12895b312902ed8560d4677260bfbf60cce37e5fb3188cb88df279de77264a09a7f5ecbc5fceb793cb958b55614b329acfaca7367ce37bde23cbc4fb34151f60ecfbe34eb89ecd6a3ec30af7135fefffad3a8e4d0e55b2de5e93fd6b6fb5361739ff2b810400a313967fdc4ea2a60e1fec42992e1c7c3a010f2369cf27321cdf215117ece4e5228de142d3a5f12767ba639ec1c092530159711d6b07f8cb8380e2a17ec2016c75e1447a268e4a12629abc8c9612a5cbe03a71ce2a17168fc03bcdf2051e1050000",
    ],
    [
      "ETag",
      "koVZ6HEl5RMaRVpoVT9lFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1592428057699"
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
      "54514fc230107edfaf20f51522124467c2c35054129838862f8690b2ddc6705b67db4988e1bf7bed86ec45b344125fd6de7ddff5cb5dfbedd36834c85b94fae4a6415651f89e03df9d85209fd5c60191c752e092b15400692a36481a2a36648fe6c63e9f5091849ded8b299e577662f5fb054b786b4828f23e31c2388820f605c6af3a6e94798da5340175a2c7e23c49973a6c1e61b9cb343c739d91fd504512e66bc49e8fc7d6603c2425b46ffe2ce2534997fac8bf49e87561946264c3560e04c021f5e0d875c6d9063c39d2e31534c962680996730f4429a20a0b38e42ccf2867ac85a956f7aa75716976ba9debf6e555cf340ff4987954462c5515f319f9d6974cd2d8615b3562d22bee80176131f1c3284850b984ea8410fa50c5914fbe73fbe62fc491edf6ba156eb95b1895cadaaa38a9208a61f94fea78256b8a2fbc9e76f94c4e244e1396a7b2a6f4fdf8c93a61e3e886ba4ddf59eef054b242a2176aeabaa3c970e65a93e98fe2f85d1c4d30d8491053ced06302b4b32edadd6b34519b1c9c7acb9413a532aae439e8b447f18ff51849cc05341660ec8d2f6d1366401d050000",
    ],
    [
      "ETag",
      "epH9jN/Masmg2wV9sQbNmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ?",
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
      jobId: "grouparoo-job-48-1592428057699",
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
      "00000002ffad946d6fda3010c7dff329a2eccda6150269024925d4214a37240a1d8476d33481e35c52b7499cda4e2b54f1dd67273c049555d5b477c93dfcef7767fb5e6a9aa63f9034d0cf34dd27d1630e6cf5e19efafa89f2804091f2fcb0efa2fb5698fb9d70f5bcf2cd07e37304cfdd6e19458a6c8e922c863aa739c3c0cfe6b346c4689e2146695d0ad62da7deb25dd3329da6dd69bb6e99cb210e47247d500a774264fccc30b61c8d88d228069411dec034d9d98d27d3c818bd072cb87158d69095b8f176e1f3986224084dbbf359099173600b48108915c63e3bf0bf1cca37084a1a918c7e221810c6344f85422b65304d4312e5ac10974a2fd228cd05f3eeb762d06783d1a0ef69fdc97cec7d5ca244c92d3f69886b8b05039ec742bb9c4eaeb46526abdf210e7ca9dd7e1b4c07d2c2684862589060a975b573ad37bed0b4ad84b2144845b900b8206901e5213f860a8af46e06393c72863b09258284acbf095b749a6dd4729aae1ffa1d1c3aa7b61f36c1f71dbf63a353bf895d0bacc007545510aa76998f529a7602db74cc3008030b99aee586c8c296db44a60d801dec076d3b74dda0a56f14d6bb7e9e19117041784639d94c5abf9d0ebdc1c29bcec7fd9e37a8f61e2239c68b92feb0f38396841c5295f6adb1bc22ca18a112aa38d3e1d81b4c7b7d6f7853c190176c0411c2abd9a3ba62218a39ecb3114309086057345087a35f4f66436f3819f7467b85e2ce5c6f23b90cfbb583ddf75455f356d9e15197a7505a1566dbd22bbef5c951951b14e747649e3666bd75a0513ba2f62f7497a349ef3ff1356ceb2f889bafdfb58abc2e17c6064dff3e1f4c7faadcc2a73c530881418af705dff17c5462e97ec73e94e1dbeda432e482dad5e7429ae54bc67c5f1d3328df3549ca6e4bc196e93aadce56502632f13ac2b5ec6dc4ab0da56a4102a9d8cea2dc54e520d7074879",
      "05a74853e1f21d8e87e3af057c6d5dfb03fc6bbddf66060000",
    ],
    [
      "ETag",
      "X5hgj1fub7fywyb2k/+gew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30147de75790ee75248a1fd3253ea8c18fcc19c7e6c3b21853eb85c180cbda32630cff7d6d01f585f69c736fef3d878b65dbe427ca8ee4d9268728fc2d809f1f42906ffae283281229d4916326803cea6a9034d4d59fb345d009c7f194cf5e5efba7cd9c41c64ea3515525d837a454d55d1452388820390a85bf0cb66bde68194d41bfb8df7333d0bc506bf29c1b6db9fef0e69e7f2fa57834d27abb5a8d272b8fd45269ce9dfa966695180f3e04c0d57a705b28e71803934be35cd0344fc011587006a21ea21b2b39e458e494233a8a72ba03a7dd1bba5d77d0ea3df587c3a63c4146658499eed8be93eb7c8992263e9eb47bd2aee2e115acc268a220c15d3ef70929e94f37bbe44a95f56d673568771b36394b101b8eca8b00e3a0e3b64813c614b559a9b390bc004333aafed722928a0b6822c02aad7fa1be72c91b020000",
    ],
    [
      "ETag",
      "YFHf3gAjCrFKM6wPGcencw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfe17243300000e077c9efea0d35c9fe0909869db565ebfe387541aa42a2dbb0dbbbafb7ef0dbe1f5056159ba6e236744c8027b09406da56db688078fd664e24236490c450ce67d367a19374adeb533d9644bd3642b53dcd18cbf78f7a0e2f4c04e324cb0fca6111eaed099fc515ed2834b18cf30c3baa8f350f1259a7a3aad1b13898f9f01ce4be717da131a950a011bbc33048cfad3bb7c21833ff3853fbb2da7b2eb5f7940a881ce859a29917b796b8d3df46abf74895cca5de9acec34ef0f510f6ea4b2cfc04c106b079e48a4d05bfcf4c0ba10df86f16b76564f72b66a5620afcfe01928ccd8905010000",
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
      "Wed, 17 Jun 2020 21:08:50 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fad8d8c6176c88643596435224831bc089aaaa42cbb2908d8125ec92288afcefdd056c431d457983993967ce5c76de7b9224ef7016ca97921ce0f8b944c5dbb72712c817c283188885e7d5daa56b73676e6fef2c3777bf6785eadcbf2e167514aed014a47982fa94940544f472eb0ee28294392808e973c2fe54ef8f547d3c1d6b8a3a9fe97a8da52889d638db098647c6727a391c1e740c6242e204811cd30124e9d13e7c190ff3823c21c8e8b09b76c833d1e1e7897f2404028649b6d8bab58892a2c24729c08990714287c155977e80413a8879f40b86084048ca8c0969350d245984e3b2a8c839d33b377273a5f9f8db32c8aeb136569e044952a6999f81145d482160c0676f39926e9c8d2599f6cdc6b1969eb9b17d77f5d3b09683d566bdb56c577af8693886c44090a00a2b2da4abeacfe63f95a22a5b8828c359a5c913de9612ee6dfa687e30c2238520e1aa286ac2fcb93203234dd1832898c3489ba841a4a020d082b90a268102f5299a8601026d864a598d0719c9b4a9a2e99330f40152a03f55c291af4770ecabfa5c03634d8f745d931bf4fe58cb6b8119bac6342714374d961f1cd3337ccfd9daaba567b4eb8e4099b0eb5a79b7ea4e398c37a8adf4b3969c29ca0b4cb8a86a9ca6ed19ce72e599f72d197cb7d62806f0cd7d16db158184a2131a147c560c151609c560",
      "647b6919d72770b529bf0e419447fc39ea3c95c303c5fcab5acee6dfcde3f1c5eab4a29e4d6d955dcf31ed5bb9e5dc7f4c730f92f2039e97c62ce7bc5b8fbcc3b4c3d5fbffeb6faf9543e66fb59127df6d0de7b7c0563ee17150840a94c153d62facae00d6ee2f9c221e7e380c02c16fc3313f65dccc5f11a4a7ecb040f59bc275e71bc2d14499a9b303210716ec3c62ae698788b3e32072a11465ecd08bfa48d48ddc7724952d39154c84f377603743dcf7f6bd7f66b74c5ae1050000",
    ],
    [
      "ETag",
      "wMkmLIkIUGQMSpS+nr5RVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1592428057699"
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
      "51",
      "4f",
      "c230107edfaf20f5151234139d890f4351300838e68b8690baddc6705b47db21c4f0dfbd7643f6a25922892f6befbeeffae5aefdf669341ae43d4a7d72d5206f51b8ca816f4f42904f6ae380c8632970c9582a8034151b240d15fbbe4fed9ed53637cbc566d97d31d70f2b7f1c5e5f172ce12d20a1c8fbc408e32082d81718bfeab851e63596d204d4891e8bf3249debb07980e536d3f0d47506a3fb2a92305f23a3e7e1d0ee0e7ba48476cd9f457c2ae95c1ff93709bdce8c528c2cd99b030170483d38749d71b6044f0ef478054db2185a82e5dc03518aa8c2020e39cb33ca196b61aa655aadd373ebcc3cbb6c9f5f742c6b4f8f994765c45255f13c25dffa92491a3bec438d98748a3be045584c7c3f0a12542ea13a2184d6aa38f2c9776ed7fc853818b91db3c22d7733a352595b1527154431ccff491daf6441f185d7d32e9fc991c469c2f254d694be1b8eed23368e6ea8dbf4adedf68e252b247aa1a6ae3b78ec4d5dfb71f2a3387e67071374b712c48433f49800edacd3b67989266a93bd536f9872a25446953c079df628feb1fa91c45c406301c6cef80245da51051d050000",
    ],
    [
      "ETag",
      "GHaAE904xjhxjBZ4vJqdOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` != ?",
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
      jobId: "grouparoo-job-50-1592428057699",
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
      "c5",
      "54",
      "5f",
      "6f",
      "9b",
      "30107fcfa760ec65d396848410924a5117b56c434a49979054d33425b631d41d606a9b7659d5ef3e1b48026a57f56d6ff8ee7e7fee8cefa1a569fa2f9206fa89a64312dde698eddede50a87f54192c40a432bf39dce573f703bc77e2603d5c27ded51f783f999455a440739064316e739a3384f9c96ad98918cd33c0286d4bc2b665b47bd6b83fe88f0ccb1e8ec72596e3389c91f49762b81622e327ddeede4727a2348a31c808ef209a1ce2ddbb7e3763f40623c1bb4dd9ae54e2dd97854f638a8020349dac96a5899c63b6c10920b1b2714407f05393be4340d28964f51d41182044f354286b250da26948a29c15e492e9410665b8f07c38d602fad2993967be76365f79febb2d4814ddf6bd06b8b6d930ccf358689f17f30b6d9b49f56bc031df6a575f9d8523238c8624c61b126cb58976aa4dbd734ddbaad31b792cfc145a01e682a485231fc018d77cc86c3545f7990b3c50281220a47855b6b18d21e88d8c310ca18dc29169c1d0c0108ea06d01131a683cc08300625067104abbc48394a6061c8581d90f6d8c806df50260f67bd006e32146d81cda960d2d330cd040af181e0ffddc3322f039e119e5a41ab37eb5707d67e32f56ded9d477eabd8740cef0bc74dfecbcd1929043aabb7d692c4f1c658c5069aab850d7f39dc5f4cc77d7351bf2ef9ae108a0ddf256fd5f2188393ea201030916985dd0405d8e7e395fbabe3bf7a6b32343f1c35cee2bb92cfb71307beca9cee6efb2e65597b7504695cde161b68d6e9a2c6b10e7cfd0dc5561bdd7e0683d",
      "c3f65fdd59ffb0577dfd6cd5c875b9292a5bfab795b3f8aeb0454e651638c40ca7e828f78aa7a38065fa158b5096efd79242c8cd74d0e74286e52b46fca88e182edf3449aa5e0bc29e698e8cfe9e500299785a31ee0ff7154f5693d2c2094ec57e16e58a2a07f9d8b094d7ec1430552edfa0e77a5f0af3adc7d65fcbd2cbf45f060000",
    ],
    [
      "ETag",
      "xsbyuOI+bwEldV6VmNWzbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48f73a221ad874890f73bacdcc19c7344bb61053e08238e0b2b66c31867f5f5b407d697bceb9b7b7e7f4689826f94e8b88dc992448939f0ad8e12a01f1a60e1ef02a135c6e25161cc8b5aa06411355bd7b5c06afbdb2f7527c0c6387aea7dee774958cc74d150f77905359779448e238852ce2127f696cb6bcd60a9a83ba71bb657aa0bea1d5c4a1d4da7cb99e3dcdbc4b29c7484bcbcd62713f59cc482bd57af7e55aeba7ec31f02006064508e707950cf7108ab976ce695e666071ac5808bc1da21a1b3961589594215a92b25cdbeabba3813318daeeedcd68d4956718529162a13a36efe4345fa0a099877fca3de937f1b0063661745190f8229fcb84a4f4ab9a5d72a2eaf6e41b1df2cfc32607017cc5507ae1a01d38439b74613ca0322b54168255a0e990caff7a4e85e4629a71306ae31fbee8a2ad1b020000",
    ],
    [
      "ETag",
      "hFNbM/p/KnW8f4aTDRZDPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82300000d07fe9b3182872e9de2cc5c92c6ec2bcd017d2d43275845b215096fdfbccce1f9c1fc085904ae57dfd2d2bf0023487682996bbdac7f3785dad0782dd989dbc763aee837dc90c28f8cc75ab7b151512452c2d3fe82514992021998380460897cd2133a146753cce52385f4d6555d820574907d32d3c3c6eb16fd717af49ad54b9cee314bd53ef1c26b702f649629ac11b446ca2198506e9acb362c836f52622ad3e72157fcee56d9b10bb9e462666c9a37589bab03757bb57963ee0540d729373c3070b20a7e6de4995df9f33db416801fe9b79af1bf9bc62c93bd981df3f12bcc89205010000",
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
      "Wed, 17 Jun 2020 21:08:54 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1592428057699",
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
      "54db6e9b40107df75720fa1a5fc1c68e6435ae43124b366e314e5a5515da5d0f6413cc1276491345fef7ee02b6a18ea2bcc1cc9c33672e3b6f0d4dd31f69bcd1cf351dd3f02983f4f5cb03c3fa99f28040a1f24c081e7c1bf16b7e678e0c8407e1cbcbe467381e1751344773b44d22687296a504f8f97ad50a5396252865ac29099bfd6eb3db1ff5ccdeb0d3b706a35181e51005731a3f2a867b21127ede6eef75b442c6c2085042798bb0edc1de7eeeb593943d0011bc5d4fdb969978fbe3c45f234690a02c1eaf5785888c43eac316d148c938a237f8a24edfa268db0a65f43325800861592c94b48286b038a06196e6e492e94d1aa539d77cf8ad18f4953db7a79e4658946d633f465b38d33648205fbc26a05db9cb853673ae96ee62e2cd968ebf9aded88b496bba9caf17ce4abbbbb15d5b1308479063b5b17691ff39f227579467db001734ce3579ca5b5122bd651f67ef8cf040a148a42a0e65986f7506a83bec8c70802d120c8d3e0e3a80f1105b7d64e00e1999606e30a02a43aeacc0a398c596610cbb1d93f806367bbe3984c01f61c3f209187863055d0446572fd1bb432d7f532ae092f284715a3659bf73679eed7beeda994e3cbb5a7780b2485c16caeb55d7ca11b24155a51fb5e4445192522645e5e39c399eed4ea6deecb62243eed61c42445e574f6abb02147138a2512a6725205db08d1a8cee4c16f6e5119c6fcaf77d109711bf0f3a8fe5c84035ffbc9693f9d7f37872b16aad28665358f595e7ce9c6bbde2dcbd4f738ba2ec1d9ee7d2ac27b25bf7b2c3bcc6d5f8ffeb4fa39243976fb594a7ff58dbee2f85cd7dcae3420029c4e498f513abab8085fb13a748",
      "86ef0f8342c8db70c8cf8534cb5744f8313b49a17853b4e87c49d835cc81d5df134a602a4e2386bdc13ee2e438a85cb08558ec7b511c89a291bb9aa4ac222787a970f90e9c7288bbc6aef10fb0bb9606e1050000",
    ],
    [
      "ETag",
      "Acb6B9sGsW493ab6gxxAXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1592428057699"
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af20f51512404030e161202a6620c278308690badde6705b67db6108e1bf7bed86ec45b344125fd6de7ddff5cb5dfb6d6f542ae43d885d725d21af81ff9102df5df8209fd4660e220da5c02561b10052556c90d457ec87eda035dc06cfc2bfdb6c6f9ccb285a5aa6d9ef672ce1bc414491b7c708632f80d01518bfe8b892e73516d308d4890e0bd3285eebb07a82e52ed1f0c29e8fa777452462ae46a64bcb3207d688e4d0a1fab3884b255deb23ff26a1d795918b910d7b9d83071c62074e5d279c6dc091633d5e41a324849a60297740e422aa30837dced28472c66a98aab51bb546bbd76c35bbf5f655a7d73bd243e65019b058552c17e45b5f3249c339fb5423269dec0e781666133f8e8278854b284e08a1ad2a0e5cf29d3b547f218ea776a755e0e6bb9551a82cad8a93f28210d6ffa48e57f246f18597d3ce9fc999c469c4d2589694beb51ecd33368e6e28dbf48d698fce252b247aa1a4ae3d9e8c16b63999fd288edfd5c904839d0431e30c3d26403bab516f75d144757274ea9029274a6554c953d06987e21feb3e9098f36828c038185f02e3cce01d050000",
    ],
    [
      "ETag",
      "JvB4CviYsgGjvDc3mmULAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ?",
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
      jobId: "grouparoo-job-52-1592428057699",
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
      "000002ffad945d6fda301486eff9155976b34985184220a9843a44d30d89862e8476d334819338a9db244e6da75555f1df67270182caaa6ada0552381fcf797d8e7d5e5a8aa2dee32c544f15d5c7f14381e8f3c73be2ab27d283388ca5e7429f801f17dc729e72dd61779af98033733c1a5551b8cc6630cd13d466a4a00162a7cb4527a6a4c82125a42d806da3d7ee1a56afdf3381311c585695cb5012cd70762f09b79ce7ec54d3b63a3a31217182608e592720e9ceae3df6b49c923b1470a61d96d54425a6bd5df82c2101e49864a3e5a212513044572885389132f6d9a1ffe510dfc130edc422fa110708060129322ea555988064118e0b5ac205e9451885b9d4bcfbdb30a80b7b664f3c65325f3adea7354c256efd59814c59ad286245c2950b777ea9ac7351fd1632c4d6cacd37dbb585859208276885c3b53252ce94b173aeece3d6ca07612c55951543c438ce4a5d1ef413d45023bc752fa747c6b8434808e4025d87ad866000bb26b0fcc81f0691a91b7e0490ef9bfed080ba0f02ab8ffaa18f6093c065ed2a1f6624d3a3a109babdc8884c608616180cfa20d44d0021307430d07d0b88dfd0506bc266779e278a393ac72c270cd7cd566fdca967af3c77e94cc69edd3c7b044527cf2bf587273f3812174d6aaa7dab2daf14e5141321aa1cebd4f16c773cf1a6d70d19e28ecd500c83e7c583bc65114c18da67430a53c411bd24a11c8e7a355f4cbde9dc19cff684f2da5c6d239908fbb513bb3f5393e63de787a3aea65059a5cc415f6df836274729d730298e601e6bb3da3d60b48ed0fe45ddc273a7ced7ff206f9c8bc1fd4562fdf5bbd5e0ab6267d4d2d4ef4bdbfd29734b9ff4b828421465c1bee23b9e8f4cacdcef5889227cbba06486d851bbfa8c0bb378c901db570f28aade354eab6954c0ae6e187d7d0b148994bf8e180cc136e2d59292b5508a32be",
      "ed45b5acaa466e0e24150d39659a0c17efd0a907b8696d5a7f0046438e4c69060000",
    ],
    [
      "ETag",
      "F3C0XFt9Nwp3Nsj/8qin8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d51d14e8330147de72b487d9c240ec16d267b7086e822990e5d7c30cbd27517640217dbe24216feddb6c0b697b6e79c7b7b7b4e8f966d939fb4d8917b9b6cd3e4b7025e5f252097fa1081a83229d4566221805ceb6a9034d1d572c8fc38f7ddcfc32dafd960f91256af83643a6dab04fb869caabaa3420ac729643ba1f097c176c71bada039e81b371b6e069a1b3a4dd6a5d1e68b8fe029882ea51c77465aacc2f0611606a4931ab3afd5da98a7ec711b410c1c0a06e707951cf7c0e4dc3817342f337004569c81e886e8c6564e385625e5888ea21cdf7586fec4f5dcf18d3fba9b4cfaf20c19952916ba63f54e4ef3254a9a4578d0eec9b08d87b7b00da38f82c417f95c26a4a43fddec9113d574a7b5d5a3f579d8ac9620de382a2f028c036f3c227d188fa8cd4a9d85e415189a51f55fcfa9545c4c33015663fd03d2b8354b1b020000",
    ],
    [
      "ETag",
      "t1c5fm52Ww3ryc+QKLuO+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb642d0e3512a03b111c85a1912210dc646888948f90f2a9814eef5ea7ef06ef07648cf161a06357f316bc8239db986bb6f63ac35a1ebcbac5448b553e6950d5baca803439ec54c182640952c541fba90a8bfd62e5bef28d83c97ff12e4592cbc9d58b79f3953471ada3f11a3529ae99f82422267785ccadb13dc2d665f8dac933a532f5104d0fdb8b5b87bdb94381224ef6fcde9e2dd5d45d04ef248a1cc7c7c11b2e6fc2654be50c8d7c649d2c175dfbc8ab07b1ede6c8c2bce1708018c52df34e3e58012e45d9f38196cf19d44c7305fe9b749c057f5e2d9ef5bc07bf7f111dc81405010000",
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
      "Wed, 17 Jun 2020 21:08:56 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1592428057699",
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
      "54",
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5f",
      "81",
      "d8d736af90904ad11aa574cb9690959056d33421db39a85bc0149b565595ff3e1b48024b55f50bc277f73cf7dc9d7d6f2d4dd31f69b2d52f341dd3f02987ecf5cb03c3fa99f28040a1f2ccb06037de3c369d9b7b277e34563f7e4e472f934919450b3447711ac139677946805f6cd6ed3063798a32c6ce25e1b93938ef99e3bed1b7bae668381e97580e51b0a0c9a362b81722e5179dce5e473b642c8c00a594b7098b0ff6ce73bf9366ec0188e09d66da8eccc43b1f27fe1a31820465c964b32e45e41c321f62442325e388dee2cb267d9ba2b81dcae8674a0011c2f2442869250d614940c33c2bc825d39b344a73a1f970ac19f4b5bdb0679e465894c7899fa018ceb42d12c817af2968d7ee6aa9cd9deb95bb9c7af395e3af67dfede5b43d5b2d364b67addd7db75d5b1308475060b58976599c1c79281415d9b6c0054d0a4d9ef2d694486fd5c7f93b233c502812a98a4315e68fba43d4b3ba631ce01109ac8189832e606ce1918906b84bc606185b0ca8ce50282bf12861c97030c626829e6f00969f1e463e1e83e10f87560f0ce89bc8227a85de1d6a79c9a8802bca53c669d564fdce9d7bb6efb91b6736f5ec7add01ca2371552a6f56dd2847c806d5957ed492134569469914558c73ee78b63b9d79f3db9a0c79b7161022f2ba7e52b72b40118723",
      "1a65725602b225dbaac1e8ce74695f1dc1c54df9b50fe232e2cf41e7b11c19a8e65fd47232ff661e4f5eac462bcad994567dedb973e79b5e73eedea7b94551fe0ecf7365d653d9ad7bd961dee06afdfff7b755cba1cbb75ac9d36f36b6fb5b610b9ff2b8104006093966fdc4d555c0d2fd895524c3f78b4121e46e38e4e7429ae52b22fc989d6450be295a76be22ec0d868635d8134a60264e23867d6b1f71b21c542e882111fb5e944ba26ce4ae2129afc929602a5cbe03a71ae2aeb56bfd03f555dce2e1050000",
    ],
    [
      "ETag",
      "CbtoQTIm5NQhNmk4OJKA7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1592428057699"
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
      "51",
      "4f",
      "c230107edfaf20f51512449862c20328ea928908c3174348dd6eb3b8adb3ed24c4f0dfbd7643f6a25922892f6befbeeffae5aefdf669351ae48da501b96c901716bde720b62711a847bd9981cc632571c9782a8134351b148d343beb6c80ad9f6cf6e08ceca8edbe39c1843e0e06054bfaaf9050e47d628471c8200e24c6cf266e947983a534017da2cfe33c4957266c1e60b5cd0c3cf766cee4b68a243c30c864e1bac3913b2625b46bfe2c12504557e6c8bf49987569956264cd5f66108280d48743d799e06bf09563c62b6992c5d0923c173ec8524417167024789e51c1790b53adde59ebb4d7ef743b17eddeb9ddefefe931f7a9623cd5158b39f9d6575cd178c6377ac4c42eee40146131f1fd284858b984ea8410fad0c52c20dfb95df317a233f1ec6e855bee9656a5b2b62a4e2a6431acfe491dafe495e20bafa75d3e932389d384e7a9aa297de33e0c8fd838baa16ed3d7436f7c2c59a9d00b35753de77e3cf786f7d31fc5f1bb3c9860b45520a782a3c72418679db6bb1768a236d93bf58a6b272a6d54257230699fe21feb8e29cc85349660edac2faa078d331d050000",
    ],
    [
      "ETag",
      "p2weijV6iOIB6g0LkIdNaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ?",
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
      jobId: "grouparoo-job-54-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad94db6eda401086ef790ad7bd69a57236184742290237a122901a9328aa2a58db636713dbebecaea950c4bb77d736602b691455bd83397cf3cf8c779e6b8aa23ee2d853cf14d5c1c1530a74f7f18138ea17e9018e02e9b94bb7f0b8bb9b2c4617dffb295c3e3893d00c86c33c0a67d90c454908754652ea023b5b2d1b0125698228217501acf7b47abb6774b4cea0d5d3fb8691e73208fd198e1f25e19ef3849d359b071d8d809020049460d6704974b437b79d6642c903b89c35ab659ba2126bbe5df83c242ee298c4c3d532179132a06b88100ea58c53b6e77cade21b18458d40446fb10bc875491a73292dc7b824f67190d20c2e48cfc228cc99e6e3df92415d9a33736c2be3c56a6e7fdaa048e2369f15c494f59a024b43ae7cb31657ca2611d5ef1103b6516e2f4dcb14164a7c1cc21a7b1b65a89c2ba3f94439c56d940fc298a9ca2a7ac0388e335d36724228a911de6296d357d678444808e2025d84adf5561fb5072dc3f11dddf507dd9ee3b7c071068ede435da7e51a1a689e03a84ce0b2769e8f6212eb8e87faedb6af773b03049ae6796ecb68f95dd0f5b66f407fa019ae610c34b520ec8ffdfca698c304b384305c0c5bbdb5a6b6b9b6add57c3cb2cd72ef3e12939ce4eaab9d575ae2624865b56f8de585a284622244656b9dce6dd31a8dede94d4986f8c666102077b77c925f998f4206a76c4451041ce815f1e472d4ebc5726a4f17f3d1ec44c83e9beb432413613f8f624f3d9569f62ea9ae3adf426e9532fbc7d956baa9526e5098be82d91666b55d61d45ea1fd8bbaa56d4de717ff411e4ac4e2fe22b1f8f5ab56e2abe26614d2d41f2bd3ba93b9994f7a2cf08142ec9e2abee3f9c8c4dcfd8e9328c20f074a66881b75accfb8308b97ecb253759742feae71946f2307b6bb7ab7df39004522e52f23345d3f44bc3852b2164410f3c32cf263950f725f919496e46469325cbcc379b1c07d6d5ffb032d096c3169060000",
    ],
    [
      "ETag",
      "YuvekyYDOAGJ6ueHjbDlEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1592428057699"
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
      "4d",
      "51",
      "cb6ec23010bce72b22f7daa885f24a250e05452d024149cba942c8389b609a6453db698550febdb6930017db33b3ebf58ccf8eeb926f9e47e4d9257b9efc94204e7709a8b5398420cb5449bd15984b20f7a61a144d4c357f92f372b69e327808a3797058857c9524e3715d25d90132aaebce1a691c734823a9f197c56ec35b2da719981b773b6107da1b1a4d9d0aabcd969fc16b10de4a1946565a6e168b97c922208d54d97dabd7ca3ee588fb1062109033b83ea8107804a666d6b9a459918227b1140c6433c434d67222b02ca840f434e5f57b5ea7ef777bddd1637f38f0fdb63c454615c7dc746c3ec865be4245d310ff8c7bd2a9e31135acc368a320f14d3eb70969e9d7340fc885aa9ad3d669d1f63a6c725220df056a2f12ac83de6848da30a668cc2a93851225589a51fd5f6f5c692ea6a904a772fe010188ae541b020000",
    ],
    [
      "ETag",
      "i3sKuIQCce/RdKEhORiOgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b7282300000d0bb64ad0e0894a43b438116e3208214dc3001630c60914f41d2e9ddebf4dde0fd005a14acefb3a1a9d8177805335da355b1da3610cba9702267ef47d884e3863aea814428b6a939e65aeded5f08ea2cc793a3a28f2e1f0ac547a81c6fca5baacd02963a815effd9e487908a236fb8515f1dcb24973a6637ac0734f297a6ae8a75edef127bce934dfa70e4848dc99d2b996adfa7298267ac86193be90691d23e96cb9207d8b6b7a69fbc87d5353c5b418f7799d07497c7436b1bedc745b31a5eb484aa102c007bdc45c7fa4c3c679a81d002fc37b361beb3e71533dab10efcfe0152685e5c05010000",
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
      "Wed, 17 Jun 2020 21:08:58 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1592428057699",
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
      "54",
      "6d",
      "6fa24010feeeaf20dcc756c517449b98ab51da2351bc02b6b95c2e645906ba2db2945dda788dfffd961715cea6e9379899e799675e76de5b92243f93d897af24d923e14b06e9eedb13f5e4cbdc031c85b9e716ddd906526ffe5ea8fa6209b38b65c6766fd36919450a3443db248236a3598a815d6dec4e98d22c4129a56d41d856d5764f9df487fdb1a26aa3c9a4c432888225899f738647ce1376d5ed1e7474424ac30850425807d3edd1de7ded7793943e01e6acdb4cdb159958f7f3c4df238a1127349e6eec5244c62075618b4894cb38a17defba49df2168db0945f42bc18030a659cc7369250da67140c22c2dc805d3bb300a73a1f9f85b33c8b6bed4e78e8469946d6337465bb8947cc491cb77094837d67a2519e6cdda5acd1c636dbaf6fc87be9a75e6ebe56665dad2c30fddd2258ebc080aac3495ae8b3f53fc148a8a6c3e304ee24293937b6b4a84b7eaa3f1c1088f14398950c5a00a733565847a6365e2059e8683f140f502053c6fec692a1a780a9e0c61e87b80ea0c85b2128f621a7b23cf1f0d82be0b637fe40e87d87727d0d35c259804434d09c6415f932bf4fe58cb5b4a382c084b28235593e507cb7074d7b136e67ce6e8f5ba0394457c512a6f56dd28878b06d5957ed6923345494aa810558cd3301ddd9acd1de3be2643ecd612428477f64bbe5d018a189cd02815b3e290aea89f0f4636672b7d7102179bf2f310c444c4efa3ce533922309f7f51cbd9fc9b791cb1588d5694b329adb2ed5886792bd79cfb8f69ee51947dc0f35a99e54474eb51749835b85aff7ffd69d572c8e2ad56f2e4bb8d6e",
      "fdcab1852ff75810400a313e65fdc2eae6c0d2fd855324c20f87214788db70cccfb8308b5784d9293b4ea17c53a4ec7c45d81b8cfb3ded402880293f8f182aca21e2ec38e4b9600b313ff4a23c126523f70d49594d4e01cbc3c53b30ab21ee5bfbd63f90bc34dee1050000",
    ],
    [
      "ETag",
      "GaQSIa5Fz+5EDLeA+Lusyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1592428057699"
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
      "4d",
      "4f",
      "c2",
      "4010bdf75790f50a096a8b62e2a1082209201fd5838690a59d966adbadbb5b0c31fc7767b7457ac13491c44b7767de9b7d99d97dfd326a35f21e261eb9a99155187c64c0b76701c8a9dacc40649114b8a42c1140ea8a0d92068abd36470ff1740cabe9e425b8ec6f56cfdd96b06f6f739670d71053e47d6184b11f42e4098c5f755c2bf21a4b680cea449745599c2c75583fc0729b6a78eecc06e37e198999a791f1d3706877863d5240bbfa71118f4abad447fe4d42af0ba310236f6c35031f38242e1cba4e397b03570ef478058dd3081a8265dc055188a8c21c0e38cb52ca196b60aa61598d73ab7d615e5c37adab56bbbda747cca5326489aa789a931f7dc9248d66ec538d98b4f23be079984f7c3f0ae2972ea13c218436aa38f4c84f6e57ff8538183b2db3c42d760ba35459591527e587112cff491daf644df18557d32e9ec989c469ccb2445694be1f3eda276c1cdd50b5e9aeedf44e252b247aa1a2ae3318f5e68e3d9a1c15c7efe26082ce56829870861e13a09d75de34afd1444db277ea1d534e94caa89267a0d32ec53fd6432831e7d34880b133be019fc8fd3d1d050000",
    ],
    [
      "ETag",
      "h4MHmQNebQPZg3GvbVD6sA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` != ?",
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
      jobId: "grouparoo-job-56-1592428057699",
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
      "a5",
      "54",
      "db",
      "6e",
      "da",
      "40",
      "10",
      "7de72b5cf7a5950218030647422d02b7a525260593f4a20ad6ebb1b389ed35de35158af8f7eeda5c8c42a3a89578307339e7ccccce3c5614457d20b1a75e2aaa4b825506e9e6f53d75d50be9018e02e969c59fedd5eaa61d7c6356f60577cd1ffe66ddeff58a289267331425215419cd520cec723eab0529cd1294525a1580d5b6516db44dbda577b576c730cd229741e88f49fc2011ee384fd865bdbed7510b280d42400961354ca383bdbed6eb494aef0173563fa5ad0b26567f9ef85d4831e284c6bdf9ac10913148171021124a19c76ccf7d7f0a5f2328aa05227a4d30208c69167329ad80c134f64990a539b8407a144661ce351ffe960ceacc1a5b0347194ce6b6f366892209b77cab20a62c1629b02ce4ca87e9e44a592682fd0e31604be5f69335b58425a53e096141bca5d253de297d7ba8284b0f71582aaf84215794b379c03889734d0e7243282911de5d1f47674678809020880bfa5dd8a2a319a8d1d54cd7773bd8ef36dbaeaf81eb76dd4e1b355d0d9b2d68792ea0320297dc453e8a69dce860c3d7c50fda5da4b71ae063cfd35d1f0caf696846aba3377d53337d7587b03dd4f33b251c86842594915da3d5dbe9c8b116ce746e0ffa8e55aedd47a28bc342fd69e5272571d1a4b2dae7daf2445192122a44e5231dd98e35ed0f9cd14d4986785f630810decc56f285f9286470cc46298a80437a453d391cf57a321b39a389dd1f1f11f22773bd8f6422ece741ec",
      "b1a6329ab3494e475d4ca1b04a99464b2df9b61767516e50989d8159efcc6ae304a37206ed5fd40de510ff5f9caee95a55d3c5f6ff45e5eeeb57a544a28a93b153a77e9d5bd3ef3237f749cf147c4821c647da176c904c2cdc2fb888227c7f9f64863851077ec685592c336647769c42b1da242a065200369aa6a61f004562ca9f46340c6d1ff1e446492e8820e6fb5e14b7aa68e4f64452569293a7c970b18af6c8fe988baf6c2b7f006f470c6f68060000",
    ],
    [
      "ETag",
      "4nJNqqV5gXsEuKc89ZfyvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1592428057699"
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
      "4d",
      "51d16e8230147de72b48f73a1235a2b0c487e9cca63166437d5a8ca97861b8d2cbda32430cffbeb6c0f4a5ed39e7dede9ed3abe3bae43be327f2e4926396fe9420aa8714d4873944204ba6a4de0ae412c8a3a9064553533d665115f059c02e117fa9d832dc2ca36d3a99345532fe829ceabaab461a2719b093d4f8d362b7e5adc6690ee6c6c341d881f68656535561b5c57a3b7f9d47f7528e272bad77abd5f3743527ad54db7dafd7da3ee58cc7081210c063b83da8107886582dac7349f3828127b11431c87688696ce45460595081e869caf3475edf0f07c341d0f3c7a330ecca19c65465c84dc76e43fee72b5494457831ee49bf894734b009a38b822477f9dc27a4a55fd3ec937faa6e4f7ba743fbdbb069a540be0bd45e245807c3a047ba306668cc2a93851225583aa6fabfde32a5b98432094eedfc010a8cb8bd1b020000",
    ],
    [
      "ETag",
      "7lRy8nC8lwRnDylJ9SJRTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:08:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfdb4e83300000d07fe9f35840c604df2c0b4ea1e35250e24bd376050ae31220dc8cff2ef10fcef9019473310c646c2bd18017b0d227ebc88f6e6bc26de68383214c6ac1aa6ef97226e692fcb5ba07e2ecdb9c4f3af234e5f94d26324a3bd97beb26dd450b8768be989744216d83e3cfbebba6a157b3469526bc7909ae38d4fc6c96394eed6b89ccd265e6e8ab71e18559e93cf09417f0147d30a52614aaef37146d776ca1744294ea4590c7cb4a2c85f99d710ae7fadc3ea6345e8c6fcc82306b249a12bbe67dc267700062d9596220729fe986651dc07f938c6b27f62b14b4173df8fd0358b0664d05010000",
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
      "Wed, 17 Jun 2020 21:08:59 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1592428057699",
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
      "54",
      "5d",
      "6f",
      "a2",
      "40",
      "14",
      "7d",
      "f7",
      "57",
      "10",
      "f6b52aa8146c62b6c6d2d6547117b0ddcd66438661a06381a1ccd0d634fef79d0154589ba66f70ef3de79efb31f7bd2349f2134e03f942927d1c3d1728df7edb105f3e131ec440243c77ebe46de3c4767af72b38dfe2cdcdd4f29dd7c9a48ac2259a82248b5197922287885eac9d5e9493220339215d4ed8d5f4aeaa8d07a381a168faf9785c61298ac3054e9f04c3236319bde8f7f73a7a1121518c4086690f92e460efbf0cfa594e360832da6fa7edf34cb4ff79e2ef31818061924ed64e25a2a028f75002702c641cd1817fd9a6ef6190f4221efd82210210922265425a4503491ae2a8c84b72cef4ce8ddc5c6a3efc360cb2632ecc992b41121749eaa5204167520018f0d83643d2b5bd5a4a73eb7a652fa7ee7c6579ceecd65c4e7bb3d562bdb41ce9e1d6b44d89013f4625569a4897e59fc57f4a4565b6005186d352932bbc0d25dc5bf771fec1080f148284aba2a80ef374e51ca88632f6435f87a131d4fc5041be6ff8ba0686be02c723340a7c049a0ca5b20a0f52926a034d1f2075e00d03a47823c5809e1168a167a081ca298dd15057e51abd3bd4f29a6386ae30cd08c57593e5077bee9a9e6bafadd9d4359b7587a088d955a5bc5d75ab1cc61bd454fa594b4e146539265c5439ceb9e59af674e6ceef1b32f86e2d5004e0d67916db1582",
      "98a2231ae47c560ce54b1288c1c8d674695e1dc1e5a6fcd807511ef1e7a0f3580e0f14f32f6b39997f3b8fcb17abd58a6a369555765c7b6eddc80de7ee639a7b10171ff0bcd46639e3dd7ae41da62daeceff5f7f3b8d1c327fabb53cf9e7dab47f0b6ce9131e1b852847293c66fdc2ea0a60e5fec229e2e1fbc32010fc361cf253c6cdfc15417acc0e7354bd295c75be2654478aa2ea7b420eccd969843a34f61127c741e442094ad9be17d591a81ab96b492a1a724a9808e7efc0aa87b8ebec3aff000a3313b1e1050000",
    ],
    [
      "ETag",
      "KUmxjSlRnKXd6yijGANbSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1592428057699"
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
      "5d",
      "4f",
      "c2",
      "30",
      "147ddfaf20f5518893008a890f435149f8d031e3570829db1d0cb775b69d8a86ffee6d37642f9a2592f8b2f6de736e4fee6dcf3e8d4a853c07b1474e2a6416cc5f52e0abbd39c81bb5b141a4a114b8242c1640aa8a0d92ce157b19dd3d7467b6b96fdd35e4283a30df1f3fee6f4e4f339670171051e47d6284b11f40e8098c9f745cc9f31a8b6904ea44978569144f7558ddc272956878ecd8bde165118998a791e16dbf6f75fa5d9243ebeacf221e9574aa8ffc9b845e27462e46966c66830f1c6217b65d279c2dc1953d3d5e41a324849a60297741e422aa3083e79ca509e58cd530556b1ed50e9bed7aa37e6c368f5aedf6861e3297ca80c5aae2764cbef5259334b4d99b1a31696577c0b3309bf86614c42f5c42714208bdaae2c023dfb975f517626fe8b41a056ebe9b1885cad2aa38293f0861fa4fea78250b8a2fbc9c76fe4c76244e2396c6b2a4f4457f64edb0717443d9a6cf2da7bb2b5921d10b25759ddea03b76acc1f58fe2f89d6c4dd0594910d79ca1c70468671d9a8d63349149364e3d63ca89521955f21474daa5f8c7ba0a24e67c1a0a30d6c6172db0e2d51d050000",
    ],
    [
      "ETag",
      "jmWYEbR0+AW4tOm/0xZzXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` != ?",
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
      jobId: "grouparoo-job-58-1592428057699",
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
      "ad",
      "94",
      "5d",
      "6fda301486eff9155976b3498538810041421da5d916090285d06a9b26708293ba4be2d4765a7515ff7d76c2475059554dbb4bcec77b1e9f639fe79aa2a8bf70ba567b8aeae3e83e47f4e9fd1df1d533e9411c46d273337b9c26bfefae17617ea16b17ae4e5976f5d8ef9751b8c86630c962546724a70162bdc5bc11519267901252178275b35bd74dcb68195d6076da9655e6321487239cfe920ab79c67aca7693b8e46444814239861d60848b2b76b0f869651728702ceb4e3b29aa8c4b4d70b9fc724801c93b4bf989710394374891288638971c85efb9f8ee51b18268d48443fe000c1202079ca255a29139034c4514e0b71a1f42c8cc25c30ef7f2b06756e8feca1a70c270bd7fbb08289945b7d542053964b8a581e73e5f36c32565699a87e0b19622be5e6ab3db385859210c76889d72ba5af9c2b03f75251568c0bdc95f24e580aa4a2dc1a318ed302ca837e8c2a28c2bb6da47362867b092902b9a8bf0d5b76401bea5d60f9a1df09c26ed3f443807cbfeb774cd8f44160b5506bed235855e0b276990f5392ca59b42d1320d835cd10ea7a68eac0041632ad8eefb78161f84153370c75abb0d99fe791628e2e31cb08c3db4e8b0bea78f6d29b2ddce1c0b3ab670fa168e365497f7cf2a32371d1a42aed6b6d794194514c04543153c7f5ecd960e839d7150c71c1462882c1d3fc5e5eb110c60c1db2218509e2888ec95a0e479d4ee68ee74cdcc1e8a050dc99e92e9289b01f7bd8c399aa6ade53763cea720aa55562b65b6ac5b7393ba9720de3fc84ccc3d6acea471ab5136aff42e739637bee0dc6d3ff40680003d481",
      "217680a71b3dbdd9d35b0d00c0f7bf806fbf7ed62a2555b146b6c0ead5c29e7d93b9854f7a66284414a5c101e20d8f4a2696ee376c4911bedb593243acad7d7df1e23916ef3b6087ea0145e56bc74939a352506f35f58ebe13148994bf8c681ae62ee2c5de92b5508252beeb45b9bfca466e8e90f20a4e9126c3c5eb741df74b015fdbd4fe000d8701517c060000",
    ],
    [
      "ETag",
      "WRwPmzjVUfuB1/BN1rspQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48",
      "f73a32343275890fb83867e2dcc4992d598ca9786168e1625b668ce1dfd716505fda9e73eeeded393d5bb64df649b6254f36d924f1a1007eba8b41cef52100513029d496632680dceb6a9034d6d55f07f7e8be77f7dd97f19ef185bff97e7b60fe60505589f01752aaeace0a291c25c0b642e11f83ed9a375a4653d037aed7dc0c3437d49a3ce5469bcc3e47e351702ba5b835d26c399dfac3e988d45269f6955a4bf3941d6e0288804316c2f54139c71d8472629c0b9ae60c1c81050f41d443746325c71c8b9c724447518ed7735a5ebfdd69f75caffbd8ef37e50c432a13cc74c772412ef3254aca023c6af7a455c5c32b5885d14441a29b7c6e1352d29f6ef6c8852aebd3ca6ad0ea3a6c7892203e382a2f028c834ecf254d18cfa8cd4a9d85e405183aa4eabf5e13a9b88832015669fd03127155711b020000",
    ],
    [
      "ETag",
      "Wq0w0O7k7FGklrSAbXM/lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb6e82300000d07fe9b318520ad2bd8d04082237655479691816c64d0a75a05df6ef333b7f707e4051964c087a1f3b76036fe05940bc2db7fe685a722dddb67238ea23d9363a49a33c77d46fa4682556646aefc92e800231737d2707ff9a0c46ad0616c9f26aeadb5e3b85154a9c78ccc3ab371db0b447ab362e4be03ebbb90979262feea37682e58be8bc58a2b38fd2723cf7a8da4b7f27b0228e2781c32185124d43bcc0f5c132854c306b3d7eb5bdbaa356441633871f3cf086e618c49a679af446d5dd68c0cf046c007bf066668236af99a663bc01ff4d7a7f72f6ba5aac98d90c7eff002477548a05010000",
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
      "Wed, 17 Jun 2020 21:09:04 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1592428057699",
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
      "8d546d739a4010feeeaf60e8c746454591cc388d35a47546b1014cdae97498e35cc825c811ee4826cdf8df7b07a85033997c83dd7d9e7df6e5f6b5a528ea034936eab9a206247acc217bf9744f03f54c7a80a3487a9e1dc7b4eef1f4a7a9c167fde6f6efc6fdcaaf2793328a146886b6690c6d46f30c033b5fbb9d28a3798a324adb82b03d34dbbda1d9d7fb636d688c4cb3c43288c305491e24c31de7293bef76f73a3a11a5510c2825ac83e9f660ef3ef5bb6946ef0173d66da6ed8a4cacfb7ee22f31c588139a4cd66e29226790f9b0452496328ee84d70d1a4ef10b4ed4422fa89604018d33ce1525a498369129228cf0a72c1f42a8cc25c683efcd60caa6b2dac99a7601ae7dbc44fd016ce940de2c8e72f292857ce6aa9ccedab95b39c7af395edbbb3efd672da99ad16eba5ed2ab7df2dc752380a6228b0ca44b928fe6cf153282ab26d807192149a3ce9ad2911deaa8ff3374678a090244215832acc37b411ea8d353308030387e3c1300835088271600cd120d0b0a983be0900d5190a65251e2534093463340cb4d0c7a131f47534d0fd711f813f427d5d0b71cf34b1a156e8dda196e78c70b8242ca58c544d566f9db967f99eb3b66753cfaad71da23ce697a5f266d58d72b868505de97b2d39519466840a51c538e7b66739d39937bfa9c910bbb58008e117f7516e578862064734cac4ac38644bba918351ede9d2ba3c828b4df9b10f6222e2f741e7b11c1128e75fd47232ff661e4f2c56a315e56c4aabea7acedcfea6d69cbbb7696e509cbfc1f35499d55474eb4e749835b85aff7ffd69d572a8e2ad56f2d4ebb5e5fc92d8c2273d0e849041828f593fb0ba1258ba3f708a44f8fe304884b80d87",
      "fc8c0bb37845981db3e30cca3745cace57843d5def8d867b4201ccf869c4a06fec234e8e83cc055b48f8be17e591281bb96b48ca6b720a980c17efc0ae86b86bed5aff00b4c1343ee1050000",
    ],
    [
      "ETag",
      "wRR9EjcAX90e+4VWzdSBtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1592428057699"
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af20f51512408662c2c350542202c278328494ed3687db3adb4e45c37ff7da0dd80b668924beacbdfbbeeb97bbf6dbb751a990d72076c95585ac02ff2d05be39f3413ea9cd14441a4a814bc26201a4aad820a9afd8f766c34abfacc967b4be68bf4fe4c3b8792e9ebadd8c259c178828f2be31c2d80b207405c6cf3aaee4798dc5340275a2c3c2348a973aac1e60b949343cb3a783d15d118998ab91d17c38b47ac33ec9a16df5b8884b255dea23ff26a1d785918b91355b4dc1030eb10387ae13ced6e0c8811eafa05112424db0943b2072115598c13e6769423963354cd5cc4ead61769aade665ddbc68773a3b7ac81c2a0316ab8af98cecf52593349cb20f3562d2ceee80676136f1dd288857b884e284107a57c5814bf6b96df517e26064b75b056ebe5b1885cad2aa38292f0861f94fea78252f145f7839edfc999c489c462c8d6549e9dbe1d83a61e3e886b24ddf5876ff54b242a2174aeada83c7feccb61e2747c5f1bb3898a0b79120269ca1c704686735eaad4b34519dec9c7acd9413a532aae429e8b443f18f751f48cc793414606c8d1f870ec6bc1d050000",
    ],
    [
      "ETag",
      "H51AuzAPxmj76vPtKO23sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` != ?",
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
      jobId: "grouparoo-job-60-1592428057699",
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
      "ad",
      "945b6f9b3014c7dff329187bd9a4265c1220a91475514b37a434e90869354d53628ca16e0153dbb48baa7cf7d9900b51b3aa9af606e7f23fbf736c9f9796a2a80f388fd453450d71f25822bafa784f42f5447a100789f4ac0292fb71ff7efa1c79b3eeef71ef46a366321cd651b8ca66202b52d466a4a410b1d3f9ac935052168012d216826d5b6f1bd6c0ec997ddd72ecc1a0ce65288dc7387f900a779c17ec54d3b61c9d84902445a0c0ac0349b6b36b4fa65650728f2067da61594d5462dadb85cf520201c7241fce673544c9105da00ce05462ecb3a3f0cba17c0783ac9388e8270c11809094399768b50c24798c939256e242e9451885b962defd360ceacc1dbbe781723e9d4f824f4b9049b9e567053065b1a0889529572efde995b22c44f53bc0105b2ab7df5cdf15164a629ca2058e96ca50395346930b45d94a281f84a962aaea4588719c5754010853d46011decd24bd2387b8939022800b804dd8c2d16d60f4f54118870e8cfb5d2b8c751486fdd0b14037d4e1a0877a5188405381cbda753ec8496e1b966dd99163221374bba6e358d03042130d8003fb26b4c5800ddb8a07ea4661bdebe799628e2e302b08c39b51abb7be17b88bc09f4fce4781dbec3d06628e1735fd61e7072d7131a426ed5b63794554504c045475a8de2470fdd179e0dd3430c40d1ba304c0d5ec51deb118a40cedb3010519e2885e91481e8e7a3d9d7981379d8cc67b85ead25c6f239908fbb983ddf7d4540b56c5e151d7a7505b25a6dd531bbef5c951951b909647649e3666d538d0681d51fb17bacbf174f49ff83a56ef2f889baf5fad86bc2a36c6064dfd3e77fd1f32b7f2498f8f6244510e",
      "f705dff17c6462ed7ec74214e1dbf52433c486dad5675c98c54b866c5f1d5254bf6b9cd5ddd68246cfd29dee56502452fe3ac2d49d6dc4ab15256ba10ce57c3b8b7a55d5835c1f20950d9c2a4d868b7738f1265f2bf8d6baf50754fba7d367060000",
    ],
    [
      "ETag",
      "yTonRf8jOwdIS3xL4V/r2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1592428057699"
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
      "00000002ff4d51d14e8330147de72b487d9584e18662b20767c85c5c1687e28b59960e2e8c59b8d816cdb2f0efb605b6bdb43de7dcdbdb737ab26c9b7c17554a1e6db22bf29f06f8f12607b9d6870844c3a4505b8d950072abab41d25c573785f0e6991f837cf5dd4f9f1d827d395b4fa75d9548f6505255775248e1ac00960a85bf0cb67bde68152d41dfb8dd7233d0dcd06bf2581b6db1fa08e761742d95981a69152f974fb365487aa935fb46adad79ca01771164c0a14ae0f2a09ae30112b930ce052d6b068ec0862720fa21bab193738e4d4d39a2a328c7779dd124f0c6de833bb9f78360286798505960a53be277729e2f515216e19f764f465d3cbc835d18431424bbcae73a2125fdeae63139536d7fda5803da5c86cd8e12c41b47e545807170e7b96408e319b559a9b390bc01432754fdd74b2115975126c06aad7f061b2c701b020000",
    ],
    [
      "ETag",
      "uis2Gf6UetK60V6lj9hmBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb7243400000d07fd9e7c80471d9bea115c2aab87579d95136a5ae83b875faefcdf4fcc1f9016996d171245357d116bc802de5e0313b5a9dacee4b1e9ac354105da1d450846a27b28ebbd97159d66dd02231956ff44cd165274736752805b8549d6aeedbf74be32511cc44e18d5bfaf3ce6b2b667261a75a2c65d8b51e6d5bb0641b3c72adedc4d17da24c060c64cb8daeedfddb7e159b913f8b362eb6c7278ef31a29215291de41e1f4e5c61f491f30a39b9882beadb7babaaca8409e5f87b6a8cea1c6dc391261040e80ae7d39d09194cf192f407800ff4d326d3d7d5e559a0e7400bf7fbfe7f2d105010000",
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
      "Wed, 17 Jun 2020 21:09:05 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1592428057699",
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
      "02ff8d545d6f9b40107cf7af40f435fe060391acc6754863d5c60dc649abaa42072ce412cc11ee706b45feefbd036c431d457983dd9dd9d9d9bb7b6d4992fc8c9340be94640f472f3964bb4f4fc4932f4406188a4466f465ad22fdd61add2bdf8c60fb57b3263ff0dd785c56e1024dd1268da14d499ef9402fd7ab4e94913c4519216d4ed81ef5db7dd5182803bda76a23c328b114e2708e9367c1f0c8584a2fbbdd838e4e444814034a31edf864738c77b7836e9a9127f019ed36db767927da7dbff1e798f88861928cd7ab52444e21736183702c649cd08177d5a4ef60b4e944bc7a8b7d40be4ff2840969258d4f92104779569073a6571ee4e142f3f1b7169057e6dc9c3a924fe27c93b809dac0851420865cb64b41bab1970b6966dd2cedc5c4992d2d7735bd351793ce74395f2fac95f4706bdaa6c49017438195c6d255f167f19f4251d12d00ca7052687244b6a684672b1f676facf0482148b82a0a5599abf546a8aff70c2ff4343fd487aa17f6c0f3744f53d1d0ebf986024ae001aa3314ca4a3c4ab8510355d360d877870318b88a1aea2e5f8fe28efa0a047a30547a9e2657e8fd71963f1966708d694a28ae4c961fec9963ba8ebdb6a613c7accf1da23c66d7a5f2e6d48d711837a8aef43d4bce14a519265c54b1ce99e598f664eaccee6b32f8d99a4384fcddea459cae10c5144e6894f15d31c81624108b91adc9c2bc3e818b93f2fd504479c5afa3ced338bc50ecbf98e56cffcd3e0e3f580d2bcadd945179e5d833ebab5c4beedfa6b94771fe06cfb60acb2977eb913b4c1b5cadffbf7eb76a3d647e572b79f2dddab47f0a6c9113191b42c820f14f5d3f707405b04c7fe029e2e587874120f8db70ec4f190ff35be4d353773f83f24ee1d2f98ab0afa886aa1f083930636715a39ea11d",
      "2ace1e07d10b3690b08317e523511ab96f48ca6b720a9828e7f7c0aa96b86fed5bff00dc8d5d7be1050000",
    ],
    [
      "ETag",
      "6BU5a8HN6V4K9dvx7NAXiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1592428057699"
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
      "02ffc554c14ec24010bdf72bc87a85040c2298784045ad4144a807630859da69a9b49dbabb5589e1df9ddd16e845d344122fdd9d796ff66566f7f5cbaad5d82a4c3c7656638b3078cb40ac8f02508f7a330199454ad292622281d5351b140f34fbe673f51cc6ddeb3bc1ede57885cb759a4c83f3f39c25dd25c49c785f1451ec87107992e21713d78abcc1121e833ed1c5288b93b909eb7b58ad53034f9d893dba2923317a06193d0d87fd8be18015d0a6feb388c7159f9b23ff2661d6995588b1575c4cc00701890bfbae5381afe02adb8c57f2388da02131132ec8424417e67020304bb9406c50aad169355a27bde3f671b77972dae9f5b6f4085dae424c74c5d394edf4152a1e4df0438f9875f23b1079984f7c3b0ae6972ea13c2182de7571e8b15d6e53ff85688f9c4ebbc42d7633ab5459599526e58711ccff499dae64c9e98557d32e9ec981c4798c59a22a4a5f0f1ffa076c9cdc50b5e9abbe333894ac54e4858aba8e7d3f983afdfbf18fe2f49ded4d70b15620c702c963128cb35acd76974cd4645ba75ea276a2d246552203937639fdb16e4345399f4712ac8df50dad01698a1d050000",
    ],
    [
      "ETag",
      "GxkYim8FJraIhPkohypnSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) LIKE ?",
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
      jobId: "grouparoo-job-62-1592428057699",
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
      "c554db4edb40107dcf57ac5c214022314993d0448a281757b51a62701c28aa50bc712666c1f69add351245fc7b77d7f12552407d6adfec3933e71ccfc5af0d848c47922c8d213216247cca80bd7c7aa00be340212070a890789a0c4e79afff78751438e94f48bcb8fb3b1c8df22ca2ab398ed3089a9c662c003e9c4d5b21a3598a19a54d49d8ec779aeddea0d3ed7c39ec1df50783bc9643b41a93e45131dc0b91f2a169163e5a21a561043825bc15d0b88c9bcf1d3365f40102c1cd4d59532a71f363e1e3880658109a8c66d3dc44c681cd21c6245236aaeae5e2eb267d8be0b815caec6712000e029a254259cb69029aac4898314d2e995e655086b5e7f2b51630a6d6d83af3d099339b787b3e8e159dbf8f3047f339039e45027d739d0be4a752fd1e73e03ebaf96eb9968c30ba2211ccc9d24723748c4e26e7088d9d1bcbddf3656c1f8ded1f163ad6c6b4e8125658129e63217944cd8ec2f2a0ade728808bb24c82eb4edb5b866cacb3de4a959411ca88d05f674f3ccb3d39f3ec6babb2215b3d8610072fd327d5ec158e3854d598e11804b00bba044571e94c6dcf762627e38a4177efb2c8e432ed5769b6faa63a9bf792c2c6076b58e45165b3df356ad8dbc156966b1c655b689ed761a3bdc1d1d8c2f63fddedb47b3bef185c3fdd356af4863c9cb531e36a66b9b7aa56630a7161050c92a012fc704b2aca1cfe8bff824c2fae5455c8432df5b990612e48c02bf58081cef5489ccf22276cf70e07fdcf05a12c64624bc651bfc88064b91ddf10cf6ac2c01865ae3ed5fa854b3b3c774e123902f9832cd73706ce71a8356689ec0207bc8800e9ad46e53891ef239220b505c8f76e2fadb95e04ff009de2a5",
      "4444bf8bf46c87484db678de552fbbc6c624b5c5fa99d40eff7d9fffd269b18377d5a084963d772696ee7de3adf107164aa3c3aa060000",
    ],
    [
      "ETag",
      "mSn9Bs56kQ7cOpXenTm4zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad0e0d844f77a2d34201a1ca20ba61f8a4e11708046aa0d3bbd7e9bbc1fb01699e63ce93a96f70075ec192426397ef9c5e37d7074eb9b3864e3e1fae7a82b0d7255333059ad8bf7d9dea805221f90e8943ac11ed080989d54c713faf9c411111d1abb6557cf39048974173e305d54306dfa3991d6adff411793953e59e2adeca502697426b8dd251e5edd1bb8bc61634cb5765d02947aab6465285d1ec8e1e2d2e6db016d1600d23ed487bdbb3076aa2ed0956a1854cfb436670ba0552397639d8002c5835629e54cf998c0c6303fe9bc9b430fcbc9a381df1087eff009e66efc705010000",
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
      "Wed, 17 Jun 2020 21:09:11 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1592428057699",
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
      "0000000002ff8d546d6fa24010feeeaf20dcd72abe0b4dccd5585abd28f610db34970b5996816e8b2c65179ba6f1bfdf2ea0c2d934fd40c2ceccf3cc3333bbf3d15014f585c4be7aa9a81e095f3348df7f3c534fbd901ee028949e5fb348375ee071c6fb37d1e26e650f76b7c3b7f1b88822399aa16d124193d12cc5c02e37eb5698d22c4129a54d41d81cf69a9d81d1ed77f5f66034348c02cb200a16247e910c4f9c27ec52d30e3a5a21a561042821ac85e9f668d7765d2d49e93360ceb47a5a4d6462dad7897f4614234e683cdeac0b111983d4852d2291947142fbde559dbe45d0b6158ae81dc18030a659cca5b48206d338206196e6e482e943188539d77c3c560ceada5c985347c134cab6b11ba32d5c283ee2c8e5ef092837f66aa9ccad9b95bd9c38f395e5aea7337339694d578bcdd25a2b0f33d336158ebc0872ac3256aef293250eb9a23c9b0f8c9338d7e4486f4589f0967d9c7f32c223852411aa189461eea83d441dbd6d788137c281de1b78411b3c4ff74603d4f3dad8e843dff70055197265051ec534f6b0efb747c87771cf476e7fd8095c63e8f75df1415bd78300f702b544ef8fb5bca584c335610965a46cb2fa60cf1dd375ec8d359d3866b5ee006511bf2e94d7abae95c34583aa4abf6ac999a224255488cac739b71cd39e4c9df97d4586b85b0b08117e5fbfcadb15a088c1098d52312b0ee992fa7230aa35599ad727707e53ee0e414c44fc39ea3c952302e5fcf35acee65fcfe3888b556b45319bc2aaae1d7b6eddaa15e7fe739a7b14659ff0ec4ab39a886e3d890eb31a57e3ffbfbf8d4a0e55bcd5529efa7b63da8f129bfba4c786005288f129eb37aeae0416ee6fac22117e580c122176c3313fe3c22c5e1166a7ec3885e24d91a2f3256167d0e918c303a100a6fc3ca2d7d50f1167cb41e6822dc4fcd08b6249148ddcd724651539394c868b77609543dc37f68d7ff4d4b947e1050000",
    ],
    [
      "ETag",
      "JHl89keYHt4FlLPOR5vG6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1592428057699"
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af20f51512500431e161282a061161c6444348dd6e38dd76b3ed34d3f0dfbd7643f6a25922892f6befbeeffae5aefdf669d56aec25883d765c638fc1ea350591edad40dde8cd0c641a2a494b82b10456d76c507ca5d95d81779759e0dc0f5e63db4da19b5d241f37fd7ece92ee13449c789f1451ec07107a92e20713d78abcc1621e813ed1c5308de2a509eb5b58658981e7ce6c34392f23117a0699dc8ec7f6603c6405b4aeff2ce271c597e6c8bf499875611562ec191f67e08380d8856dd789c06770d5c88c57f22809a12131152ec8424417e6f04a609a7081d8a054a373d0681df6f6dbfb47cdc36ea7d7dbd04374b90a30d615b773f6adaf50f17086ef7ac4ac93df81c8c37ce29b5130bf7409e50911f4a68b038f7de7d6f55f88a389d36997b8c56e61952a2babd2a4fc2084e53fa9d3953c717ae1d5b48b67b223711e611aab8ad267e36b7b878d931baa367d6a3bc35dc94a455ea8a8eb8cae8673c7be9afe284edfc5d604834c819c0a248f4930ce6a35db4764a226db38f504b5139536aa122998b4cbe98f751128caf93c9460adad2fba39dba91d050000",
    ],
    [
      "ETag",
      "7roWJyiTZBqnAcue7yHpzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ?",
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
      jobId: "grouparoo-job-64-1592428057699",
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
      "ad94ef6f9a4018c7dffb571096265d321528a036319db17425b3da21da34cba27770d86b81a3dc51d335feefbb034448bba659f64e9f1f9fe7fb3c0ff7bcb424497ec0b12f9f4a32c49bc70ca5cf9fee0994bf080f6260233c97f0f6eaf7f6dbe8e271ec43335c5a4bc5da6e87c3220ae7d914444988da9464a987e8e962ded9a4244b404a489b03dba6de568d81a66b7dc5e8998341914b51184c70fc2008778c25f4b4dbddebe86c08d984082498763c1255f6ee93d64d52728f3c46bbcdb25d5e8976df2f7c16120f304ce2e1625e88c8284a5728023814320ed93efcdac47730883a1b1efd843d043c8f643113d20a8c47e2006fb2348773d20b377273aeb9fa5b33c8736b628d5d693c5b4cdde33588046efd5902545aad5244b3904917ceec4a5a27bcfa1da088aea59b4bcbb1b82525010ed10afb6b69289d49a3e9b9244d663796735c4573d4c4fe6e4967b9bcbcb48f28c3712ed00530443559dc5b0ed57e639f15424000e3f4326cd5534ca0f695010c60cf0bfa27060c1404611ff60c7002156fa023dd8708d4094cd42ef2414c623d50b5c084a6a60d3ca5a79b9a11e801e2f9d00350d77cb3df57e089a6cb256157f5b34d3143e7982684e272eaf28d63bbd6ca7516d3f1c8b5eabd07808ff4bc50dfecbcd112e343aaab7d6f2caf142529265c54be5f7bea5ace68ecdacb9a0cfeb14dd00678cff347f1b90520a4e8900d52102186d22be28be5c8d7b3b9eddab3e9687220e4dfcff53e92f2b09f95d8434f759afb9c34575d6ca1b00a996635db46374dca1284d91b98a7d22cab0d46eb0ddabfa89bbb8e3dfdf61fe41d812439fa8bc4f2d7af568d2ff3e3514a937f2c2ce756e4e63ee171508052147b87",
      "8a1f783e22b1707fe036f2f0fda51219fc5855f529e366fe923d7aa8eea5a878d7382ab6510055c3508dde1ec81353f63a4257d57dc4ab6b256aa108c56c3f8be26a1583dc3524653539799a08e7ef705a2e70d7dab5fe00e0b4eb3472060000",
    ],
    [
      "ETag",
      "HbYMzwGAFqCdb6lVEV0Eww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1592428057699"
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
      "4d",
      "515d6f8230147de75790ee75c449fc5ce2832e643333c6b1f9b41853e1822870597b997186ffbeb680fad2f69c736f6fcfe9c5b26d764cf2903ddb6c97c43f2588f3430cf4a10f3ec83225a9b6027309ec515703f15857777cef982ccb298f38dfd1beb32adeff46a7c9a4ae92c11e32aeea2e0a291c25908652e16f83ed86375ace33d0376eb7c20c3437341a9d0ba3cd975fdeabe7df4b1986465aae178be96ce1b146aaccbe516b659e72c09d0f1108c803b83da810788080e6c6b9e459918223b11401c866886eace55860597081e828ca19f49c6e7fecf6dcd1537f38188fdbf214034e09e6ba63fdc9aef30989a73e9eb47bd6ade31135acc368a360d15d3ef70929e95737bbec4a55cd6963b568731b363b13c89540e5458271d01b0d591bc60b6ab3a4b3205182a103aefeeb2d21c5453c956055d63fb34b32841b020000",
    ],
    [
      "ETag",
      "/REkiNuAafaabth/PpKz8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf497282401400d0bbf45a2d262dc88e0614042c8188924d17c1afcc343432a572f7587937783f284e12608cf44d0135fa40732c289b646337325ec607968db63ed76ee92fd7415c2f652556c5da9f668b3062b16439645e74c086db34298cfb408aa86df002c77aa7abd3bb94115c8f662a56d36dab8556f8d53e72f9d56b97e0c8c7775f7e16e6920ed8519d9b4f3921047b7fa2c7d2bbeabba973dd5c52a9023a7502eb39a8c0b989669efa5df8a2099bd5ce0b0ae2a83a9c0bd67cf3d814f3cbe71c29ebd6992d90d00ac144b30e18c9de3371ab282bf4df24fd4ce17dc51077d0a1df3f613022de05010000",
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
      "Wed, 17 Jun 2020 21:09:16 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1592428057699",
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
      "54",
      "5d",
      "6f",
      "9b30147dcfaf40ecb509f92240a5688d52da654ac80aa4dd344dc83686ba259862d3aeaaf2df67034960a9aabec1bdf79c7bee87ef5b4751d4479286eab9a242123f15387ffdf240a17a263d9883587afe0ee177677d731dffdc78f47678df5f5ba3f0653aada2488966609b25b8cb689123ccce375e2fce6991819cd2ae20ec4ef4ee40b786e3a1d9d78d8965555886936849d247c970cf79c6ce356dafa317531a27186484f510dd1eecdaf350cb72fa8011675a3bad263231ede3c45f138a0027349d6ebc4a44c1701ee02d208994714487f0a24ddf2360db8b45f433411820448b944b69150da26944e2222fc905d39b300a73a9f9f0db30a89ebdb4e7be8268526cd320055b7ca684808380bf6658b972d72b65e15cadddd5cc5fac9dc09b7fb357b3de7cbddcac1c4fb9fb66bbb6c2014c708955a6ca45f9e7889f5251992dc48c93b4d4e44b6f4389f0d67d5cbc33c203852411aa18aec302a33f0103b36fc1081a2832473a8cfa1842131a3a18c13eb2c6781c420c9a0ca5b20a0f529a02c334f4e1641c006b3409c6a60903d3e8ebc10061cbb0c6301c01a0d6e8dda196979c707c49584619a99bacdeb90bdf0e7c77e3cc67beddac3b0245c22f2be5edaa5be570d1a0a6d28f5a72a228cb0915a2ca712e1cdf7667737f71db9021766b8963805ebd27b95d1148183ea2412e66c571bea2a11c8ceacc56f6e5115c6eca8f7d101311bf0f3a8fe5884039ffb29693f9b7f3f862b15aada866535955cf7717ceb5da70eedea7b90549f10ecf736d5633d1ad7bd161d6e2eafcfff5a7d3c8a18a",
      "b75acb536f36b6fb4b624b9ff4b838c2394ed131eb275657022bf7274e9108df1f068910b7e1909f716116af08b1637694e3ea4d91aaf335e1409f4cf4e19e5000737e1a6118fa3ee2e438c85c788b53beef457524aa46ee5a928a869c1226c3c53b70ea21ee3abbce3f8dd3b6d2e1050000",
    ],
    [
      "ETag",
      "x2bJNOQGgXUSoV2h0O93dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1592428057699"
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
      "000002ffc5544d4fc24010bdf75790f50a091aa862e2a12a6a938a524a623084aced14ab6db7ee878418febbb3db22bd609a48e2a5bb33efcdbeccecbe7e59ad16794ff2889cb7c84bb2fc50c0d7474b9063bdf141a8540a5c0a960b206dcd0649979a3d7382c9d554da6b4f292f7657e3277f568c2f2e4a96085f21a3c8fbc208e338813412183f9bb855e50d96d30cf489214b55962f4cd8dec1725d187812f8eee8b68e642c32c868ea79cea5372415b469ef1789a8a40b73e4df24cc3ab72a31f2c65e7c8881431ec2aeeb82b33708a56bc62b6856a4d0114cf1104425a20b4b78c9992a2867ac83a98eddef1cf70727bd93b36effd41e0cb6f4948554262cd715d309f9d1974cd2d4672b3d62629777c0cbb09cf8761424ae5d427d42087deae224223fb94dfb17a23b0aec5e8d5bede656adb2b12a4e2a4e5258fc933a5ec92bc517de4cbb7a260712a71953b96c287de33d38076c1cddd0b4e96b27181e4a5648f44243ddc0bd1f4e02e7fe71af387ee73b135cae258847ced063028cb38ebbbd333451976c9d7ac5b413a536aae40a4c3aa4f8c7ba4b24e6629a0ab036d6374576bdc41d050000",
    ],
    [
      "ETag",
      "ZATSCUt6yLuuLfIwQXRZpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ?",
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
      jobId: "grouparoo-job-66-1592428057699",
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
      "ffad94ef6f9a4018c7dffb571096265d3a4511519b98ceb47465b3da22b65996458ff3a0d70247ef0eb7a6f17fdf1d2042da35cdb277fafcf83cdfe779b8e7b9a128ea038ed7eab1a27a38784c117dfa704f3cf593f4200e02e9f97a4416d7f717ec1c1e69b3e16cf35b432c1a8f467914ceb2198892103519492944ec78316f0594a409a0843405b0699acd4e6fa81bfaa0ddeb9bc3619ecb50e84f70fc2009779c27ec58d3763a5a012141884082590b92a8b46b1b5d4b28b9479033ad5e56139598f676e1939040c03189478b792e2265882e5104702865ecb3d7dee73abe8541d40a44f4064304202469cca5b41c0349ece320a5195c909e85519833cde5df8a419d5b13ebd4554e678ba97bb80291c4ad3e2a8029cb25452c0db972eecc2e955522aadf0186d84ab9bdb01c4b5828f171889678bd5246ca89329e9e29ca64766b398765b4404dec6f967292c9cb4aaf11e338ce04bac00b514596f01643b55fd967899010c005bd085bf6db26e80cda43cff7fad01f747b9edf469e37f0fa3dd0f5da70682063ed21502570593bcf0731890dbfa3fba667eafa10b6fb86a9f77cc34722df83c033f4b53918b4bdae6ea805615bf6f38b628ece304b08c3c5d4d55bc776ada5eb2ca6a763d7aaf6ee0331d2b35c7dbdf35a4b5c0ca9aaf6adb1bc5094504c84a86cbff6d4b59cf1a96bdf5464888f6d8202009fe68ff273f341c8d03e1b5010218ee82559cbe5a857b3b9eddab3e978b22764dfcfd52e9289b01fa5d87d4f559afb94d4579d6f21b74a996639db5a3775ca0d08d357309bc2ac766a8cc62bb47f5137771d7bfae53fc83b004972f01789c5af9f8d0a5f15c7a390a65e2f2ce7bbcccd7cd2e3201f5114c37dc5773c1f9998bbdf711b45",
      "f8ee52c90c71accafa8c0bb378c990edab438af2778da37c1b39b0d3ebf7bac60e2812297f1921def02ee2c5b592b5508462be9b457eb5f2416e6b92d28a9c2c4d868b77382d16b86d6c1b7f0036be369672060000",
    ],
    [
      "ETag",
      "J+oUQjHsFc+/O9Ovx/esmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1592428057699"
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
      "0002ff4d515d6b8330147df75748f63aa195f56bd0877694552865da7530869454afce4e735d12b749f1bf2f89daf625c939e7dedc9c93b365dbe42b633179b4c9314bbf2be0f55d0ad2d7870044954ba1b612990072afab41d25457339f656fef6baffa73cbd3d417f1d49bec16f3795b25a24f28a8aa3b2ba47092411e0b853f0cb63bde688c16a06f3c1cb819686ee834599746f3b6afabe755702b15181b69bbdf6c16cbcd8a745263f650ad8d79ca098f0124c08145707d50c9f10491f48c73418b32074760c52310dd10ddd8ca29c7aaa41cd15194331e3bc3d1cc7d70a783d1643c9bf5e539465466c874c77e472ef3254a9a07f8abdd93611b0f6f611b461f05496ef2b94d48493fbad92517aae94ea1d5a3f03a6c594b102f1c951701c6c180f4513ca1b62a7512925760e888aadf5a67b2e3acc6fa074c96f2eb18020000",
    ],
    [
      "ETag",
      "nQniVYHIux2pj8Qsd8I7SA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b5283300000d0bb64dd742c500bee12aa22200c9152e8260369f8140c10a2853adedd8eef06ef07e48cf169a2aa6fb9004f60c9356bcdd65e6fe2db95ef0be26ee4f7a373d1d86c2ab4d89b0ff8722637a2c1e6a14e9cb4e883578f2d9fe530b9b61226b1269ed6357c561a19753d2b09092beb88db288d75598e3a3c87746718fe978f46a144266a233b7511c2c2ae47d85d91cfcb20c58db4df13b31d707c3ac0c49d4714c3d6db6a6f5044a823bb7290c585aacac9684cbd3cf0ad266010675db53fea6e880f0cac009f8746f28936f799beb5ac15f86f52b50cfc7ec53c975c82df3fc54e007405010000",
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
      "Wed, 17 Jun 2020 21:09:18 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7df75720fad8c4776313c96a2c8724ae6cdc629c28a92ab42c03d904b36477499546fef7ee02b6a18ea2bcc1cc9c33672e3b6f0d4dd39f4812e8679aee93e83903f6fae591fafa89f2804091f20cd89de1f4befffdfa70cfae6ed07d1606466b321e1751244773b4496338e5346318f8d97ad58c18cd52c4283d9584a7c6f0b43330bbfdeea83d181aa6596039c4e19c244f8ae14188949fb55a3b1dcd88d228069412dec474b3b7b75ebaad94d147c082b7ea695b32136f7d9cf85b4c31128426e3f5aa109171601e6c1089958c033af0cfebf44d8236cd4846bf100c08639a2542492b68304d4212652c27974c6fd228cdb9e6fd6fc5a0afacb93575354ce36c937809dac0891620813cf19a8276e92c17daccbe5c3a8b893b5bdade6a7a6d2d26cde972be5ed82bedf6da722c4d203f861cab8db5f3fccf963fb9a23c5b005c9024d7e42a6f4589f4967d9cbd33c23d852291aa389461deb06da0cea86dfaa13fc4e1a837f0c336f8fec81f0e50cf6f63b30ffdc0075465c895157894d0a48ffc9e89871dcf303bd8eb0fa1ef99d808bcd01fc1a08383a087da7a89deee6bf9c388800bc253ca49d964fdd699b996e73a6b7b3a71ad6add21ca62715128af575d2b47c80655957ed49223452923548acac739b35dcb994cddd94d4586dcad394408bfae9ed5768528e6704023266725802d68a006a3db9385757100e79bf26317c465c4afbdce43393250cd3fafe568fef53cae5cac5a2b8ad914567d",
      "e53a33fb4aaf38b7efd3dca0387b87e7a534eba9ecd683ec30af7135fefffadda8e4d0e55b2de5e93fd79673a7b0b94f791c088141820f593fb1ba0a58b83f718a64f8ee302884bc0dfbfc5c48b37c45981fb26306c59b2245e74bc2ce60d4ed1b3b420964e238a267b4771147c741e5820d2462d78be248148ddcd624651539394c85cb77609743dc36b68d7fa6a585c0e1050000",
    ],
    [
      "ETag",
      "5rY6R3Jz+hZrGVaZufd6/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1592428057699"
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
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "bd",
      "f7",
      "57",
      "90f5282460f810130fa0a8684584723284acedb454db4edddd6a88e1bf3bbb2dd28ba689245eba3bf3deeccbcceeeba755abb1d730f1d8598d3d87c15b06627314807ad49b19c82c529296141309acaed9a078a0d977b7d930edf79269fb783eddacf9957ddbc1e0fc3c6749770d3127de274514fb21449ea4f8c9c4b5226fb084c7a04f7431cae26465c2fa1e569bd4c07367369e5c9791183d834c16b63d18da235640dbfacf221e577c658efc9b8459975621c65ef079063e08485cd8779d0a7c01578dcd78258fd3081a1233e1822c4474610e0702b3940bc406a51add5ea3d5e99fb44f4e9b9d5eb7dfdfd12374b90a31d1158b39fbd657a87834c30f3d62d6cdef40e4613ef1dd28985fba84f284087ad7c5a1c7be73dbfa2fc4f1c4e9b64bdc62b7b44a95955569527e18c1ea9fd4e94ad69c5e7835ede2991c489cc79825aaa2f495fd303860e3e486aa4d5f0e9cd1a164a5222f54d475c6f7a3b933b89ffe284edfe5de04c38d023915481e93609cd56ab64fc9444db673ea056a272a6d542532306997d31feb265494f37924c1da5a5f56f50d921d050000",
    ],
    [
      "ETag",
      "KJuBp97nP4+SPyhaFLJ5og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ?",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T08:00:00.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1592428057699",
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
      "00000002ffcd545d6fda30147de75758d94b2b1508594b2913ea18cdd66c7c3509adbaaa02e338a9218953dba95455fdef731c4882c6ba69dac3241ec83df79e73ae7daf5f6a00686b127b5a17684b123ca6983dbf5bd1a576942158c02043d69ea1a3e0c2185c7e5d2dd783fe69325d39fd5e2fcf22aa9ac32809719dd39421ccbb33a711309a2690515a9784f576a7de3a39338e8d8e7e72da3e3bcb6b390efd2189d719c3831009ef369b5b1f8d80d220c43021bc816854c49b4f463361748591e0cd5dd9a654e2cdb785cf438aa02034eecd9cdc44ca319be3089230b351567bcb8fbbf40d02a34620b39f08c210219ac622b396d3201afb24489922974c2f3228c3ca73f15909688e3934072e184c6663f76001a38c6e71082007f339c33c0d05f86c4f46609148f507c8315f809b4bd3366584519f84784ebc05e88173d01f5f00309cdc98f6c1820b695af20cad6f263857de94ae877d28392fa09054a2e228c3f2a0a5ae52602e8a32096e0edbda73cfda26ebb5504918a18c08d5a035764dbb3f70ad6bb3b4214f7b8803889e9dc7ecbc7d18725c564306232c301b510f6714d38963b9d664dc1f960cea00a7db4c2ed3ee0ab3654f5536f739c13b0d2b58e4d1cc66fb58ab60af477b59ae6198eea179da84b5d60e476d0fdbdfb873ad91e9b8fdd1f41f38347443afeb865c0857ef74755dfe1abaae7fff85f1cdbffb5a4552933bb531ac5dcd4cfb36ab555886d8d8c70cc7a834f1e6f4949439fc074f864cdf2e70562177b8d097832f081704f1521d31ac725d12e5779413b6daad93f7ed2da12c64e2e78cb6ded966e0d8db8fef88a71561cc1865b6dae2eaf24b3b3c774e62792dc4bb52af4131dbd5de1e77a108730e03e5614c4104057a20710038096229cd30f029037e1aa3ac3e7f0c5408b2208d702c403651bc0b8a816a00274d12ca04f64a169990bf238e6b5be32f871f36",
      "9f9f6e5dd3918f930077ad6ea775afed0c85eab6ba8995b7e5372dbfd9f47fdaf67637eecb0112cae1c5646caa99a8bdd67e005bb9235f5d070000",
    ],
    [
      "ETag",
      "kd20cgD2CHJjbkCA7pPjSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb64ad0ed4a84977182d0e42554421dd6430864f154c4320a8d3bbd7e9bbc17b829473d1344cdf2ea206efe09ebee1111fad6f68fe305c77e2980617776f5667e22ba7450bcfa108aec922dbda06f57e92fbc3fcf2e5c0611ca0ba287eb60713611d3a704dafcc5331815166623bafc6aac612318857cb28efadd08ddd6f26956c5ad7a07147511bee6443a7273d4b76984f75b1b14c2f97c1a422d0ee8eca9acdb2a4f0e6659a95a40acfbe43bafd47ed7172a0493bf9b4531e3feea7ab779b5a7043c100885e964a34ac7ccdc6138c07e0bfc9f45d8ad7752e522514f8fd036607988805010000",
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
      "Wed, 17 Jun 2020 21:09:21 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6f9b30147dcfaf40ecb549205f8448d19aa5748d96908e9056d33421db18ea1630c5265354e5bfcf0692c052557d837bef39f7dc0fdfb796a2a82f24f1d589a24212bee638db7f79a650bd921ecc41283dc11ae9207e32ef770fc1b7b9b5d77e18b74e389d9651a4403310a7116e339a6708b3c976d309339aa720a3b42d08db23b3ad0fcddea037d686c6c8344b2cc351b024c98b6478e23c65936ef7a8a313521a4618a48475108d4ff6eeaed74d33fa8c1167dd66daaec8c4ba1f27fe1a510438a1c974bb2945e40c671e8e0189a48c33da87d74dfa0e01712714d13b82304088e60997d24a1a449380847956900ba6376114e642f3e9b7665037d6d29abb0aa2511e275e02627ca5f880038fef53acdc3aeb95b2b06fd7ce6ae62ed6b6b799df59ab5967be5e6e57f64679bcb31c4be10046b8c02a53e5baf8b3c54fa1a8c8e663c649526872a5b7a64478ab3e2ede19e189429208550c57619ea18d803ed64c18400305e3fe10061a86700c8d21e8430d99033cf02106758642598907094d741ff6c1a0dff7744d43de00f58067fa70e80543a80726304ca3a7ab15fa70aae56f4638be212ca58c544d561f9d856b79aeb3b5e733d7aad71d803ce237a5f266d58d72b868505de9472db9509466840a51c53817b66b39b3b9bb78a8c910bbb5c42140fbcdabdcae00440c9fd12013b3e2385b515f0e46b5672bebe60c2e36e5fe18c444c4ef93ce73392250cebfa8e562fecd3cae58ac462bcad9945675e33a0bfbbb5a731edea7790051fe0ecfae32aba9e8d693e8306b70b5fefffad3aae550c55bade4a93fb796f34b620b9ff43838c0194ed039eb275657024bf7274e91083f1e068910b7e1949f716116af08b1737694e1f24d91b2f315a13ed2c7a3de915000337e19619a8363c4c57190b9708c137eec457924ca461e1a92f29a9c0226c3c53bb0ab211e5a87d63f501656f3e1050000",
    ],
    [
      "ETag",
      "fOc1amh9PvVfBCEy0K7FRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1592428057699"
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
      "c554514fc230107edfaf20f515229889ccc4075454124481f9640829db0da7dd6eb69d8618febbd76ec85e304b24f165edddf75dbfdcb5dfbe9c4683bdc569c8ce1b6c19afde7390eba315e889d94c41e5422b5a324c15b0a66183e62bc31ef45c81bde5c4bdba0bbcebe3f5593cc98e3f2f2e0a960a5e20e1c4fba288e22806112a8a9f6ddc28f3164b7902e6c400459ea40b1b3677b05e67169ef9d3e1f8b68a24185a64fc341af52f470356429be67e91906bbeb047fe4dc2ae73a71463afb89c420412d200765d67125f21d0433b5ec5934c404b612e0350a588292ce095c43ce312b145a956d76b754ebd13f7a4d73e3deb7ade962e30e03ac6d4543ccdd88fbe46cdc5143fcd8859b7b8035984c5c4b7a36051e512aa1322e8c314c721fbc96d9abf108763bfeb56b8e56eee542a6babd2a4a258c0e29fd4e94a5e38bdf07adae5333990384f304f754de99bd143ff808d931bea367dddf7078792559abc5053d71fde0f667efffe71af387de73b135cae35a84789e43105d6599db6db2313b5d9d6a957689ca88d51b5ccc1a6034e7facbb58532ee24281b371be011deb91dd1d050000",
    ],
    [
      "ETag",
      "E84lo8bQ4CHc9D/y7iQp/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ?",
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
      jobId: "grouparoo-job-70-1592428057699",
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
      "0002ffcd545d4fdb30147defafb0b21790689ba4d0afa962850616d10f48521043a83589130c491c6c87a942fcf7394e9ba45ac7a6690f7b4beeb9f79c73ed7bfd56034079c6b1a7f481f280839714d1d5a727f2a01c6408e230c89056e7c2ea9e0cc9a8f5ec9f5df556de6a32197d1f0cf22c2cab198c9210d51949a98b587f6e37024ad2045242ea82b0de51ebda514f3fd4bbea51a7ddebe5b50c85fe18c7cf19c323e709eb379b1b1f8d8090204430c1ace192a888375ff56642c91372396b6ecb3685126b7e2c7c1c1217724ce2c1dcce4da40cd1058a200e331b65b5f7f0659bbe8161d40844f62b7611745d92c63cb396d3b824f6719052492e98de445084a5e7e2b712506c636c9c3ae074369f3a7b4b186574cb7d0019582c286269c8c199359b806522d41f21436c096ebe1a96212294f838440bec2dc1001c83e17404c0787663587b4bc68569c133362f0c702cbd495d0ff950708e201754bce228c3f2a029af9223c68b3201ae0fdbdc71cfca3aebbd504928261473d9a039750c6b78ea98d74669439cf61805d05dd92fd979fb3064a8ac86144688233a211eca282e67b6e998b3e9705c32c803bcdc6432917657982d7baab239ab046d352c619e47339bed43a582bd1fec64b98661ba83e6751d56b42d8eda0eb6bf71e79813c3768693cb7fe0505775b5aeea62211c4def6badbe76d85055f5db2f8cafbfee6b154945ecd4dab0723537acdbac56621962211f5114bba5890fa7a7a4cce13f783244fa6681b30ab1c385be187c8e19c72e2bd55d8a64ae83a3fc8e7242adadb7bbea86501452fe7346a7a56f3250ecedc6b7c4d38a30a294504b6e7175f9851d963bc7b1b816ec5dc9d7a098ed6a6f2fdb5084188381f430252082dc7dc47100180e62214d11f009057e1abb597dfe18c810a441",
      "1aa198836ca2581f1403d500769a248472e4952c22217f476cc732a7e7fb9fd7bf27b78e618bc789833baddfd5ee95ada190dd5637b1f2b6fca6e50f9bfe4fdbdeecc67d39405c3a1ccda6869c89da7bed07be4167575d070000",
    ],
    [
      "ETag",
      "37KR8BAoD3kfFQ9ydyMMDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfd17643300000d07fc973d3831ab537c9b48ccd5817e5c5492d8a9a98509a9dfdfb7a76ffe0fe005a144c887ce417d6814770a39ab52ed63edf2239976f016c78f5b5b834926d9d32d2bd1288b4d41e5eb2263ce649fc4d0cdfc3f35ed9a28bad5ba281e5f22e11a709ae507ada39c64137ad5625106f288e4f4de96bc20b396ccdb93a66d88facc5e9fae7a973aa78a67e84f0a198853c433d89326964a184124fe7cf0f9db586ad5681a1b82d9d424673be8b9bbd123c75c4196dd916eae8a744bfe2ce31b9eb8115604b5f0f4ce4f57db679b0ac15f86fe6e3ad67f72b62746003f8fd037bfc856c05010000",
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
      "Wed, 17 Jun 2020 21:09:22 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1592428057699",
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
      "54",
      "6d",
      "4f",
      "a3",
      "40",
      "10fede5f41b8afb685be514c9ab3a97836b17052aab95c2e6459065ca52cb28bc633fdefb70bb485ab317e8399799e79e665e7bda328ea134943f55c5103123f1790bf7d7ba4817a263dc0512c3de1fda6b8351cc771ad4c8faec262c2fe3aafb35915454a3443db2c812ea3458e819d6fd6bd38a74586724abb82b06be85d7d6c0e4683a9363626a659611924d10d499f24c303e7193beff7f73a7a31a571022823ac87e9f660efbf0cfa594e1f0173d66fa7ed8b4cacff79e2ef09c588139ace36eb4a44c120f7618b4822651cd16170d1a6ef11b4edc522fa85604018d322e5525a4583691a91b8c84b72c1f42e8cc25c6a3efc360ceadabab1169e8269526c533f455b385342c491cfdf3250ae5c67a52ced2bc75dcdbda563fbebc5b5b59af716cecd6665af95fb6bcbb5148e82044aac32532eca3f5bfc948aca6c21304ed2529327bd0d25c25bf771f9c1080f149244a8625087f9863641fa543383283070341d8e834883209806c6180d030d9b23188501a02643a9acc2a394a6064653c018fb3ad6757fa419863f3587e063181b6638d1101e4cd41abd3bd4f29a130e9784659491bac9eabdbbf42cdf7337f662ee59cdba235424fcb252deaeba550e170d6a2afdac25278ab29c5021aa1ce7d2f62c77bef096770d1962b76e2046f86dfd2cb72b420983231ae562561cf2150de560547bbeb22e8fe072537eee839888f87dd0792c4704caf997b59cccbf9dc7138bd56a45359bcaaaae3d7769ff501bce",
      "ddc7347728293ee079a9cd6a26baf5203acc5a5c9dffbffe741a3954f1566b79eaedc6727f496ce9931e1722c821c5c7ac5f585d09acdc5f3845227c7f182442dc86437ec68559bc22cc8ed9710ed59b2255e76b427d323027da9e5000737e1231d4c6d37dc4c97190b9600b29dff7a23a125523772d4945434e0993e1e21dd8f510779d5de71f0df79e89e1050000",
    ],
    [
      "ETag",
      "dWUuQ7OOOREp1fFdu6szOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1592428057699"
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
      "4d",
      "4f",
      "c24010bdf75790f50a1110f930e15094af8888502e1a42d6760ac5b65b77b71242f8efce6e0bf4a269228997eecebc37fb32b3fbba370a05f2e1850eb92b90776ff51903df5dad40bea8cd1444ec4b814bc44201a4a8d820e94ab1077c56e58ddecd5c76faf7dbd7f1eb63ffba63b6db094bd86b0828f2f61861ec7ae03b02e3371d17d2bcc6421a803ad1667e1c844b1d16cfb0dc451a9e59d3e1b89f4502e668643c1f8dcccea84b52e850fc59c4a1922ef5917f93d0ebc248c5c886bd4fc1050ea10de7ae23ce3660cba11eafa041e44349b098db2052115598c02bcee28872c64a982a352aa5ca6dab5aab36cbb78d7aab75a4fbcca6d263a1aa98cfc8495f3249fd29dbaa11937a72073c0993891f4741dccc25642784d0972af61c72ca1d8abf108763ab5ecb70d3ddc2c854e656c549b99e0fcb7f52c72b59537ce1f9b4d3677221711ab0389439a57ba367f3828da31bf236fd605add4bc90a895ec8a96b0d9fba33cb7c9afc288edfc5d9049d9d0431e10c3d26403bab52ae35d144657274ea3d534e94caa892c7a0d336c53fd6c0939873a92fc03818df5755cfe11d050000",
    ],
    [
      "ETag",
      "HrS2r7F3UtBGCwZNZKG/BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) LIKE ?",
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
      jobId: "grouparoo-job-72-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc554614fdb3010fdde5f6165426c126d6857ca5aa9621d0451519a2e4d616c428d9b5c83218983ed3021c47f9fedb449aa15344d93f62dbe77f7deb3ef2ecf35848c7b9204460f190b123e64c09ededdd185b1a71010385448fcedfafb79d621ee982f27e6439775cfc2e867bf9f67115dcd719c4650e734633ef0de6cda0819cd52cc28ad4bc2fa61abde3ce8b6daad4ffb07879d6e37afe5102d4724b9570cb742a4bc679a6b1f8d90d230029c12def0695cc4cdc79699327a07bee0e6a6ac2995b8f9b6f051447d2c084dfab3696e22e3c0e6106312291b6575b0f8bc49df20386e8432fb91f8807d9f668950d6721a9f264b12664c934ba667199461edb9385602c6d41a59c72e3ab66763f7bd876345e77d4098a3f99c01cf22814e1dfb0279a954bfc51cb887aece2cc792114697248239093cd4474768303e4168645f594e8568343cb7d09136a785035862497a8285e412154b0acb8343dd4b015c1465125cbdf6704ba38d55d64ba19232421911fa86c3b16b3983637778699536e4738f20c4fed3f4413df812471cca6acc700c02d8050d40514cece9d01ddae3c1a864d02f3859677299f6a3305bdea9cae63ea5b071610d8b3caa6c76da46057bd9dbca7289a36c0bcde32a6c3437386a5bd8fec6dde9c81efc1b7f3bcdc6417be71593abaf9b5a45c0900bb432677c9d59ceb5aad598421c580283c42f25df9c94923287ffe0ff20d3d7dbaa2ae4c216fa5cc83017c4e7a5bacf40e7ba24cefb9113363b1fbbddc335a12c64e2b78cf6fe7e210949b01ddf10cf2ac2c018658e5ed9eaa64b3b3c774e12d904f9a32c463806ce71a83566897c050e781101d2938d8a8622cf4324416a1290e75e4facf96a18bc3df4050728a099aad20deea1bcbdebd36e7edc35361aaa9d5637a6f20f78ddee7f30bc9ec89bb26d42ab9fd8634b77a2f652fb0539e01887c0060000",
    ],
    [
      "ETag",
      "mXYZKu6iTNsfP/q9r9Hglw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfd97282301400d07fc9b3381d0201fa6654068596c56a91970c852b5036095bb0d37fafd3f307e707c549027dcf86b68406bda225968d75b2b65b9d3ee6641bb87b45bcab6f3a17f8c84fa1a988da7540188fc9ba7d12de50a5706998c6e425806c4e8c4682aebb01111613b6d979ec389c2b47cf36a1af2e1dbb8602288e7242f22c90236be7f8df71de6bbeaaf6de02d37c6117dbdba5b37faa0c2dcfa3cd7e1c250c20a2e13a56728b356cb9e59404f0f5211f4a2b8afcbc3e9bfcb00d299106cdc2214f49cd950d5a2110f78243cf8ae70cab86b142ff4d362c77785e29c41c38fafd03420191ab05010000",
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
      "Wed, 17 Jun 2020 21:09:24 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d6fa24010feeeaf20dcc7ab8aa0a24dccd5587af5a27887d8a6b95cc8b20c745b6429bbb4d734fef7db0554389ba6df60669e679e79d9796b298afa4892403d57549f444f3964af5f1ea8af9e490f701449cf2c8fa3c01c2eeec8c24ee9dfd50ffa70fdf5653229a3488166689bc6d06634cf30b0f3cdba1365344f5146695b10b64da3dd1b8cf5be3ed206e6703c2eb10ce270419247c970cf79cacebbddbd8e4e446914034a09eb60ba3dd8bbcf7a37cde80360cebacdb45d9189753f4efc2da618714293c9665d8ac819641e6c1189a58c233af02f9af41d82b69d48443f130c08639a275c4a2b69304d4212e559412e98de8451980bcd87df9a415d5b0b6be62a98c6f936f112b4853325401c79fc3505e5ca592d95b97db572965377beb2bdf5ecda5a4e3bb3d562b3b4d7caedb5e5580a477e0c0556992817c59f2d7e0a4545b600182749a1c995de9a12e1adfa387f6784070a49225431a8c23c531ba2de481bfba16fe270640cfc5003df1ff9e60019be86c77de8073ea03a43a1acc4a3842660e8435deb059ea68dc0eb8f87868740d73c1d07860e60fa189b6a85de1d6a79c908874bc252ca48d564f5d699bb96e73a1b7b3675ad7add21ca637e592a6f56dd28878b06d5957ed49213456946a810558c736ebb96339db9f39b9a0cb15b0b88107e5d3fc9ed0a51cce08846999815876c49033918d59e2eadcb23b8d8949ffb2026227e1f741ecb118172fe452d27f36fe671c562355a51cea6b4aa6bd799dbdfd59a73f73ecd0d8af377789e2bb39a8a6edd8b0eb30657ebffaf3fad5a0e55bcd54a9efa6b633977125bf8a4c781103248f031eb275657024bf7274e9108df1f068910b7e1909f716116af08b363769c41f9a648d9f98ab037ec1bbdc19e5000337e1ad1370e1127c741e6822d247cdf8bf248948ddc3524e53539054c868b77605743dcb576ad7fb2e84fd4e1050000",
    ],
    [
      "ETag",
      "Culgd76LYiLNpoxOJojH+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1592428057699"
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
      "c16ee23010bde72b907b2c4894022d2bf5404bbacb96b26d48b5d25608996402812493da4e5751c5bfefd8092597569116a997d833ef8d9f66ec9737abd160db30f1d9b7065b86ab970c447eb202f5a8370ec82c529296141309aca9d9a0f84ab3d3d1cfe4d5b67f3bdb3fa7f916efd67977d47fbcba2a58d25b43cc89f74611c54108912f297e3671a3cc1b2ce131e8133d8cb2385998b07980559e1a78e63ae3e9f72a12a36f90e9d36432bc9ed8ac8476cd8f457caef8c21cf97f12669d5ba518dbe0d2810004241e1cba4e056ec05363335ec9e3348296c44c78204b115d58c02b8159ca05628b52ad8bf3d6596fd0e9762edbbd8bfe60b0a747e8711562a22b9e66ec5d5fa1e291837ff58859bfb8035184c5c4f7a36041e512aa1322e85517873e7bcfed9a9f10c753b7dfad70cbdddcaa54d656a5490561048b2f52a72b59737ae1f5b4cb677224711e6396a89ad2b7935fc323364e6ea8dbf468e8dac792958abc5053d71ddfdb337778fff0a1387de707135ce70ae48340f29804e3acb376f7924cd4667ba7dea076a2d24655220393f638fdb17e848a72018f24583beb1f74903a6f1d050000",
    ],
    [
      "ETag",
      "pDJnvEEWRkZ+ykoKhy4D6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) NOT LIKE ?",
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
      jobId: "grouparoo-job-74-1592428057699",
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
      "ffc554db6eda40107de72b56aea234528080c0244828cdc555dd1048c1248aaa082ff6e06c627b9ddd35158af2efdd5de30b2a89fad4bed97366ce399e8b5f6b0819cf24f68d3e321624784981ad3f3dd18571a81010385048afb7c0e7c7bfccf4c95f7e07a7d58eaed6ab6030c8b288aee6384a42a8739a320f787f366d048ca6096694d62561bdd7a9b7ba27ed4efbf8a8db334f4eb25a0ee17248e267c5f02844c2fbcd66eea311501a848013c21b1e8d8a7873d56e268c3e812778735bb6299578f363e1d3907a58101a0f66d3cc44ca81cd21c2245436ca6a7ff1659bbe4170d40864f68a78803d8fa6b150d6321a8fc64b12a44c934ba657199461edb978ad048ca935b42e1c74319e8d9ccf2e8e149d7b803047f339039e86027d9d8caf919b48f547cc81bbe8ee9b35b16484d12509614e7c170dd0293a1b5d22341cdf5993cfae8c1da0d1d84143fbca42a7da9c16f6618925e92516924b542c292c0bda7a9602b828ca24b8e9b6bd63d0c626ebad504918a18c08fd85f6c8b12667178e7d6b953664bb8710606f3d7d510d5fe29043598d198e4000bba63e288a9bf1d476ecf1e86c5832e80edee4995ca6fd2ccc96df546573d6096c7db08645165536cd8e51c1de0e77b2dce230dd41b3da848dd616476d07dbff74b7d7eaeebd6370f3f450abd01bf27836c68c1f336b72af6a35a690092c8141ec95821f6e494999c17ff16f90e9f9a5aa0a79ac853e1732cc05f178a9ee31d0b90e89b25964842db37b649a39a12c64e2cf8c56a7956740ecefc6b7c4d38a303046d9449f6bf5caa51d9e3927b11c81fc4916eb1b01e738d01ab3587681035e8480f456a3629cc875118991da02e43af737d65c2f827b88ceb12f116176909e6d1fa9c9e6",
      "cffbea65dfd89aa4b6583d93cae1bfeff35f3acd77f0a11c94d0b297e391a57b5f7babfd0644b6915fae060000",
    ],
    [
      "ETag",
      "77baB8w6ujdfJeT12mKyvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfcb6e82401400d07f99b59ae21594ee0aa5018102066b653341bc200c3023c8b3e9bfd7f4fcc1f921719260dbd2076758935732c56b7595ac6cbed3e621edaf1f200cc536f68360fc4e35d81da13a064e961d12e811fcb47e0ffaaa83a6ea4bbb5b5a5f8246c5142f435b1d470ea87a89ec5ee6833b4799ae784dd1b3b5d2829a9e35914d79845466d6c660d64de902471a1f5b37f3bbdad34ddf1a2b7863a1fe89fb4b55065189d039db213ffbcd2993cc442eafa667bcf8e63dd4248996df37bb302007ce4fee346cc882e028f2065b9a3f6720abea82fc37e96312f8bc6a1837d890df3f87e61f5405010000",
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
      "Wed, 17 Jun 2020 21:09:25 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1592428057699",
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
      "ff8d545d6fa240147df75710f6b58a1f20d0c46c8da52d89e22e62bbddcd860cc340a7458632838d69fcef3b03a8b0364ddfe0de7bce3df763ee7b4792e4179c86f2a52407387e2d50befbf64c02f942781003b1f090d7c7d1ed43f2fb97eeda857bbfed7b70f7369d4caa285ca229d86409ea5252e410d1cbf5aa17e7a4c8404e4897137675ad3bd0cca13a34fa9a3e36cd0a4b5112cd71fa22189e18cbe8a5a21c74f46242e204810cd31e249ba35dd90e952c27cf0832aab4d32a3c13553e4ffc3d2110304cd2c97a55892828ca7db4013811324ee830b86ad3f730d8f4621ebdc510010849913221ada281248d705ce42539677ae7466e2e351f7f1b067965cdad99274192149bd44fc1065d482160c067bb0c4937ee7221d9cecdd25d4c3d7be9f8abd99db598f666cbf97ae1aca4873bcbb524068204955869225d957f0eff291595d94244194e4b4d9ef03694706fdd47fb83111e2904095745511de6ebfd3118187d3388021d46c6480ba23e0a0223d035300afad054911a060834194a65151ea424558d7138d64cd337223df455d518f9c60018fe488786aac3d0304d4daed1fb632d6f3966e81ad38c505c37597e706dcff23d77edcca69ed5ac3b0245c2ae2be5edaa5be530dea0a6d2cf5a72a628cb31e1a2ca71da8e67b9d39967df3764f0dd9aa318c0ddea556c5704128a4e6890f35931942f482806233bd385757d02979bf2e3104479c49fa3ce53393c50ccbface56cfeed3c1e5fac562baad9545679e5b9b6732b379cfb8f69ee41527cc0b3adcd72c6bbf5c43b4c5b5c9dffbffe761a3964fe566b79f2cfb5e53e0a6ce9131e17452847293c65fdc2ea0a60e5fec229e2e187c32010fc361cf353c6cdfc15417aca0e7354bd295c75be261c",
      "8cb5d1d838107260cece2354637888383b0e2217daa0941d7a511d89aa91fb96a4a221a7848970fe0e9c7a88fbcebef30fbc69d2cae1050000",
    ],
    [
      "ETag",
      "oqY3GWlZX7RIuRVv0TcywA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1592428057699"
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "dfaf20f51512248060c2c3505492813a467c308494ed36a7dd3adb4e430cffdd6b37642f982592f8b2f6eefbae5feeda6f5f56a341dee23420970db289a3f71cc4f62c02f5a8372ec89c29894bc65309a4a9d9a068a4d9b3fb70f0c622c7693f497f9cf506c993dbb147a38225fd174828f2be30c2388c810512e3671337cabcc1529a803ed1e72c4fd2b5099b07586d33032f3c773abfad22090f0c325f3a8e3d7626a48476cde3220155746d8efc9b8459575629465ef9c6851004a43e1cbace047f055f4dcd78254d32062dc973e1832c457461014782e719159cb730d5bae8b5ce7bc34eb73368f72efac3e19eceb84f55cc535db15c901f7dc515652effd42326fde20e44111613df8f8284954ba84e08a10f5d1c07e427b76bfe429ccebd7eb7c22d772bab52595b152715c60cd6ffa48e57f242f185d7d32e9fc989c469c2f354d594be71eeed13368e6ea8dbf4b5ed4d4e252b157aa1a6ae379d4d169e3d7b382a8edfd5c104e3ad02f920387a4c8271d679bb3b4013b5c9dea9575c3b5169a32a918349fb14ff5877b1c25c4899046b677d038744d0af1d050000",
    ],
    [
      "ETag",
      "MOf8klgLL0WscBp58mWR2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ?",
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
      jobId: "grouparoo-job-76-1592428057699",
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
      "02ffad54ff6f9a4014ffddbf82b034e9922aa028dac474c6b295d5628758d32c8b1ec741af058ede41bba6f17fdf1da062ea9a66d96ff0defb7cb9f7eede6b4392e4079cf8f2a9247b387ccc117df9744f3cf9446450064291b9c8f1229a745cf83b5c5c3edee6e977a56f3e0f8765152ed00cc469849a8ce41422763a9fb5424af21450429a9cb069f49a5a77d0d6db7db56bf4068312cb50144c70f22018eeb22c65a78ab2f1d10a0909230452cc5a90c4dbb8f2d456524aee11cc98b22fab7025a6bc2f7c161108324c92e17c569ac819a24b14031c091b3bb4ef7dd9a76f6110b7425efd84210210923cc984b592069224c0614e0b72cef4ca833c5c78defed602f2cc9c9863571a4fe7b67bbc02b1a05b7d960093964b8a581e65d257677a25ad52ae7e0718622b6971613a268f5012e0082db1bf9286d29934b2cf2569325d98cef1b69a53d953579a5897a67456582ce47dc4329c14265de045a8668d67abc65a0766baa5102420e30a55d9d2507b40ebab032ff00c18f43b5d2f5091e7f53da30b3a9e0a073ad27d0f813a4326b44b3c4848d28581aae9fe40ef7401f254ad07fbbee1e9aa66680360686da0b5838ee61972c5b0de9ee799e20c9d63961286abcecb0bc772cda5ebccedf1c835eb670f006feb79e97effe47b47ca7893ea6edf6bcb1b4729c5849b2a666cd9aee98cc6ae7553b3c12fdc048500becc1ec5950b40c4d00e0d28885186e815f1c570e4ebe9cc72ada93d9aec188a3b74bda964bcece7d6ecee4c7536f725dd1f753985322a6cf674b9965b9f1c64b901517e80e6a90acbda1e47e300dbbfb89bb98e657ffb0ff68e0805c9d15f3c565fbf1a3501996f90ca9bfc636e3ab7025be444c64101a228813bc90fbc1f012cd31f5890bc7cb3ae04826facad3ecb78",
      "983f65c876ea90a2f261e3b81c4749a8f5fabadadd107220cdde56f4dadaa6e2cdca125a284649b6e945b9baca46aef72ce5353b054c94f3876857135c37d68d3f553f932477060000",
    ],
    [
      "ETag",
      "HuiWlL3TcxgWKqYupJ/8Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b48f7e848a60195253e8c493613e3269b59b2c5980a1706032e6bcb1663f877db02ea4bdb73cebdbd3da747c334c94f5a46e4de24fb34f9ad811d6e12106b750880d7b9e072abb0e4406e5535089aa8eaf99acda7c58be76483b1f7e10e9cd8733ed7b3595bc5c36f28a8ac3b4a24719c421e7189bf34363b5e6b252d40ddb8db313d50dfd069e250696db17af79ffce05a2a30d2d26ab35c3e784b9f7452a3f7ad5c1bfd940cf701c4c0a00ce1f2a08a6106a15868e79c16550e16c79a85c0bb21aab1951386754519a225296b32b6868e3bb247d33b673276ddbe3cc7908a144bd5b17923e7f90205cd03fc57eec9b08d87b5b00da38f82c457f95c2724a53fd56c9333d574a7add1a3ed65987710c05f194a2f1cb4037b3a217d188fa8cc0a95856035683aa4f2bf9e5321b998e61c8cc63801c1317daf1b020000",
    ],
    [
      "ETag",
      "DQrD8mOB5j+6BW9+5fB5ZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb64ad8e6231a44ba05244c188a9c02603183e032531807c3abd7b9dbe1bbc1f10a7296b5bdaf18a35e01d4cb18256e9cae19a3e0f2937cc5d99cb78a6d0a839c6223b424b7ae7b588489f64199e60a18636f4a64b4346fd7357f564f24549f9c093fd32754eb27e4648b3e2254668404620425f626663a5d58a8fae8301ba64feb53f6b14dac637e177cb5f371c4fdde0a8901e9ceaed8ead4dc04df7784b30d61f797232dd84ccbc18f3abf46ab37ca8063de4b7aaddbbf9e6a929c3368cc22f0216808da294aca5e56bb655115a80ff26ed26c15e579dc59249f0fb07bdda4ca705010000",
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
      "Wed, 17 Jun 2020 21:09:29 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1592428057699",
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
      "54",
      "5d",
      "6f",
      "a2",
      "40",
      "147df75710f6715b45458426666b2c6dcd2a7611db6c361b320c031d0b0c9d19da348dff7d670015d6a6e91bdc7bcfb9e77ecc7def288afa84b350bd50d400c7cf05a26fdfb62450cfa40771104bcff63b0a356f3bfb09a8795bbcded03b3db5a7934915854b3403699ea073460a0a11bbd8acbb3125450e2821e782f07c3c3eef8fac813e30b5d1d8b0ac0acb50122d70f624191e39cfd945afb7d7d18d0989130472ccba90a4077bef65d0cb29d922c859af9db62732b1dee7897f2404028e4936d9ac2b110543d44729c08994714487c1659bbe8b41da8d45f40b860840488a8c4b69150d245984e38296e482e95d1885b9d47cf86d18d4b5bdb0679e024952a4999f81149d2921e0c0e76f3952aeddd552993bd72b7739f5e62bc75fcf6eede5b43b5b2d364b67ad3cdcdaaead701024a8c42a13e5b2fc73c44fa9a8cc1622c671566af2a4b7a14478eb3ece3f18e181429208550cd561fe583340dfd4ac200ac6303287a320d2501098c178048681062d1de961804093a15456e14146326b641960140e7d1319d0d7cd28f08165f67d0d0080f4415fd70ca8d6e8dda196578a39bac22c270cd74d561fdcb967fb9ebb716653cf6ed61d8122e15795f276d5ad72b8685053e9672d395194534c84a8729c73c7b3dde9cc9bdf376488dd5aa018c0b7f5b3dcae08240c1dd1808a59714497249483519de9d2be3a82cb4db9db073111f1e7a0f3588e0894f32f6b39997f3b8f2716abd58a6a3695555d7beedcb9511bceddc734f720",
      "293ee079a9cd6a2ebaf5283acc5a5c9dffbffe761a3954f1566b79eaaf8dedfe96d8d2273d2e8a1045193c66fdc2ea4a60e5fec22912e1fbc32011e2361cf2332ecce2154176cc0e29aade14ae3a5f13f60d6b68e87b4201a4fc34623430f61127c741e64229caf8be17d591a81ab96b492a1a724a980c17efc0a987b8ebec3aff0021496f38e1050000",
    ],
    [
      "ETag",
      "j+ed0TjCKar8HuwGrP4mEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1592428057699"
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
      "00000002ffc5544d4fc24010bdf75790f50a0910e4c3c403286a13be2cd58b21646da7a5da76cbee56d210febbb3db22bd609a48e2a5bb33efcdbeccecbeee8d5a8d7c06b14b6e6ae43df0b729f0ecca07f9ac3616883494029784c502485db141525fb19fe79bd66c1b3c8d7ccbcc287f753b1b2fdddddee62ce16c20a2c8db6384b11740e80a8cdf745c2bf21a8b6904ea4487856914af75583fc1324b34bcb42d73f6584622e66a64f632990c47933129a043fdbc884b255deb23ff26a1d7955188910ff66e81071c62074e5d279c7d80234d3d5e41a3248486602977401422aa30877dced28472c61a986af47a8dd6f5a0dd69f79bd7bdee6070a487cca13260b1aa7859921f7dc9240d2db6532326ddfc0e781ee6133f8e8278a54b284f08a12f551cb8e42777a8ff42346776b753e216bb9551aaacac8a93f28210d6ffa48e57b2a1f8c2ab6917cfe442e23462692c2b4a3f4ce6c30b368e6ea8daf4fdd01e5f4a5648f442455ddb9c8e97f670ba382b8edfd5c904a34c825870861e13a09dd56a76fa68a226393af58e29274a6554c953d06987e21feb299098f36828c03818df6752b0471d050000",
    ],
    [
      "ETag",
      "QOh1NqiHBgRIyarVd4hfuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ?",
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
      jobId: "grouparoo-job-78-1592428057699",
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
      "ad",
      "54",
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "9e5f81982a755a9340de482a455dd6b20e85928e9076d33425c618e61630b5215d55e5bfcf0642889a55d5b46f702fcff3dc9def9e1b9224dfe3d8934f25d9c5c14386e8d3bb3be2ca27c2835210088fb90e2eefbf4d7f83c5c49b9af0c3a7a919d1c7f1b888c27936035112a226231985889d2ee6ad80922c01949026076c6ac3a6da1f757a9da1d2d706a35191cb50e89b38be1708bfd23461a7edf656472b2024081148306b411255f6f6bad34e28b9433065ed7dda366762edd789cf4202418a493c5ecc0b1119437489228043216397edb91ff7e15b1844ad8047af3144004292c5a99056c04012fb38c8680ece919eb9919b73cdd56fcd20cf75533f77a4f3d9c2728e57201270abf71260d2724911cbc254fa6ccfaea455c2d97f0186d84abafda2db3ab750e2e3102db1b792c6d29934b12e24c99cddeaf67115cda1ac992399c65497ce728939bd87588ae35ca403dc10d5a4716fd958e3c04c2b08010252ce50862d356500d4a132727d5783feb0db777d05b9eed0d5faa0eb2a70d4433dcf45a08e900aee221fc424ee435f517bdea8d7ed03e42aea000e3dcded29aaa68e80a67680daf1bbaaabc925c2a6aae791e2145d60961086cbcecbb7b6e1e84bc75e58e71347afd7ee03ded68b42fd7ee57b25a5bc4975b5afb5e585a28462c245e533362c47b727e78e715393c11f9c8902009fe60fe2c9f9206468970d2888508ae815f1c470e4eb",
      "d9dc708c9935317708f91bbade46321ef6a312bbaba98ee63c25fba32ea6505885cc414faef9362707516e40981d8059976659ddc3681c40fb177573c736accbff20ef8850101ffd4563f9f5b3512390f90529b5c95f17bafd5de4e63ee1b1918f288ae18ef20dfb23120bf71b0e240fdf9e2b91c12f56c5cf526ee6ab0cd98e1d52542c368e8a711480aac6776bb805e489347d19d1e957112f4e96e042118ad36d2f8ad3553472b32729abc9c9d344385f44ab9ce0a6b169fc0112014f8177060000",
    ],
    [
      "ETag",
      "LvgGkXKxaUAdKLc+BKLmrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1592428057699"
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
      "4d",
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "147ddfaf58eaab8be34bc08407d1a92493e084274348199739d876677b2759c8febb6db7212f6dcf39f7f6f69c9e2ddb66c738dbb1079b6de3e8a70051de44401ffa10802c12926acb3193c06e7535108f74b5ef6e8b1e3c9f5e7abd72797ca73bd75b74a2c9a4ae92e137a45cd59d1552781f43b2930a7f196c37bcd1329e82be71b31166a0b9a1d1a8cc8d369b2fbd572fb89652dc1969bef2fdc7a9efb146aaccbe566b659e72c06d007b109085f0ffa05ce001429a19e792a779028ec44284209b21bab196238145ce05a2a3286738723a8371b7df1db983e1fd78dc962718728a31d31dab4f76994f483c09f0a4ddb34e1d8fa8611d461b05db5fe5739d90927e75739f5da8aa39adad16adff874d4b02b910a8bc48300e5cd646f184da2ae924481460e890abdf7a8ba9e1accafa03d02d888518020000",
    ],
    [
      "ETag",
      "L0bu3eDwF33yTkMt/0EP1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4e83300000d07fe9f358c6a51bf50d4c40ee6c93207b69000b221b500ab460fc7717cf1f9c1f909725610c4f7d4b3af002d65c41fb72eff5bab971429b0387e6d1944442075f4b0887f3028d74e9dd6a0c830bc7248b424398767541faa913cc0e1ff259778e90af28bb87a424d85ad2c15bdbc0c3188b5969a925b4e51a55ab9c4e90cf59d6bc9f6db7f87ebd171f6a9d8822a8133e1c9c75411a2a60bcb9f4a45afe67d5f9d447716c4851debf85b2b251b5d6523bf31535714698a3854eb7af66be8d4c7a30b003440ccd48186e9e331522b403ff4d3cad03795e4d928f6404bf7fc110a16405010000",
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
      "Wed, 17 Jun 2020 21:09:30 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1592428057699",
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
      "545d6f9b30147dcfaf40ecb50969420aa914ad28a52b5a202b21ada66942b631d42dc1149b565195ff3e1b48024b55f50deebde7dc73bffcde5314f59964917aa9a890242f252eb6df9e2854cfa4077390480f5bcc5fee0074b6b6f1d3a6ccd2dc40e3d66c5647910acdc0264f719fd1b240985dae5783a4a0650e0a4afb82b06f4cfbe793e9481f99c38971319dd65886d37841b267c9f0c879ce2e356daf6390509aa418e4840d10dd1cecdaeb48cb0bfa8411675a37ad263231edf3c4df538a0027349bad57b58892e122c41b405229e3888ee055977e40c0669088e85782304088961997d26a1a44b398246551910ba6776114e64af3e1b7655057f6c29e070aa269b9c9c20c6cf09912010e42becdb172e32f5dc5f16e96be6b05ced20b57f35bdbb506f3e562ed7a2be5e1d6f66d850398e20aabcc94abeacf133f95a22a5b84192759a52990de9612e16dfae87c30c203852411aa186ec242637801cecde114c6d040b1399ec078882134a13101633844531deb11c4a0cd5029abf120a359648cf5910ee3104d0c18ead1c8084d0886a1318af4681c818b09d2d506bd3bd4f256108eaf09cb29234d93d507df09ec30f0d7dedc0aec76dd3128537e5d2bef56dd29878b06b5957ed69213457941a810558dd3f102dbb7e68173df9221766b811380b6ab17b95d3148193ea2412166c571e1d2480e46f52cd7be3e82ab4df9b50f6222e2cf41e7b11c1128e75fd57232ff6e9e402c56a715f56c6aabba0a7cc7fba1b69cbb8f69ee415a7ec0f3da98d55c74eb51749875b87aff7ffdedb572a8e2561b79eadddaf67f4b6ce5931e1fc7b8c0193a66fdc2ea4a60edfec25324c2f70f8344",
      "88b7e1909f7161165784d8313b2a707d53a4ee7c43782e6ec330f7840258f0d308c31cee234e1e07990b6f70c6f7bda81f89ba91bb8ea4b225a782c97071075e33c45d6fd7fb072a9a3fb7e1050000",
    ],
    [
      "ETag",
      "sLCqQabIyE7KEosA/MT/tA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1592428057699"
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
      "54514fc230107edfaf20f55148802038131e405147101166d41842ca7683e1b6ceb65309e1bf7bed86ec05b344125fd6de7ddff5cb5dfb6d63944ae4cd8f5c725122737ff19e005f9f2c403ea8cd18441248814bcc2201a4acd820e942b1bfbcf0e3e5f674f9e4f6fbf5d1f2b9d58c7bd667bb9db284b38490226f8311c69e0f812b307ed57129cb6b2ca221a8131d16246134d361790fcb75ace1893db68637792464ae46868f8341a73be8910cda960f8bb854d2993ef26f127a9d1a991859b1f9183ce01039b0ef3ae66c058eb4f478050de3002a8225dc019189a8c2145e7096c4943356c154a565566a6766bd513faf9eb59aa6b9a307cca1d26791aa789c901f7dc9240dc6ec538d9834d33be069984e7c370ae2e52e213f21843e54b1ef929fdcb6fc0bd11adacd468e9beda646aeb2b02a4ecaf30398fd933a5ec992e20b2fa69d3d932389d39025912c287d3db8ef1cb1717443d1a6af3a76ef58b242a2170aeadad65d6f6277ee4607c5f13bdd9ba0bb9620469ca1c7046867d5aa8d73345195ec9c7ac99413a532aae409e8b443f18f75eb4bcc793410606c8d6fb572d9a01d050000",
    ],
    [
      "ETag",
      "xfmvYH+hWdJJ2PhX76pEIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`date`) NOT LIKE ?",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "%2020-02-15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554ef4fdb3010fddebfc2ca84601a6dda889f952a564126b295a6a429084da871d36b302471b01d2484fabfcf76da249d0a9aa649fb96dcbb7befd977e7b70642c61349e746171933123de7c05e3f3dd299b1af101038524868cdbe673e7c39ee5f3f1c9acec8762272ddeff58a2ca2ab394eb2189a9ce62c04de9d8c5b11a3798619a54d49d83c69373b87a7d68175d23e3c3e3a3d2d6a39c48b01499f14c3831019ef9ae6da472ba2348a016784b7429a9471f3c53233461f2114dcdc9435a512373f163e8b698805a1696f322e4ce41cd814124c6265a3aa9ecfbe6ed2b7084e5a91cc7e2121e030a4792a94b58226a4e9824439d3e492e94d0665587b2e7f6b01636c0fec731f9dbb93a1bf17e044d1059f11e6683a65c0f358a06f9e7b85824caa3f600e3c40b797b667cb08a30b12c394cc03d44367a83fbc4068e0dedade5e30c70224cdd0f5d1c0f961a3336d4f4bcf618125ed0516924dd44c29ac083aba9b02b828cb24b8ba6f674bab8d55d6b254c918a18c087d4667e8db5effdc776eecca86bcf00144387c1d3fab2b5fe09843558d194e4000bba27350142377ecf88e3bec0f2a067d87a3752697693f4bb3d599ea6cfe6b061b07d6b028a2cae6d18151c396fb5b596e709c6fa17959858dce0647630bdbdfb8bbe8fbf63f30b763b5ad76b36dc97dd879c7e7eaebbe519331e416adfc19d713dbbb53b51a5388070b60908695f087c3525116f01f3c12327dbdb2aa426e6da9cf850c7341425ea9870c74ae4f92a2250561e7d8b23aed35a12c64624b86d55967403adf8e6f88e73561608c324fef6d7ddda51d5e3827a96c857c2dcb294e80731c698d492a6f81039ec580f470a3b2ad28081049911a0614f877237baae621d8474ec187d4c277d16ebdbdbb4877fdf7a8b1d1576db8be3bb5d7e07dd7ffcff77a3eefab268a623fdca1de8f6563d9f805a71fe4bcd3060000",
    ],
    [
      "ETag",
      "c2bJpTe+7AQh5/IPEIgiQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "52",
      "83",
      "30",
      "00",
      "00d07fc9b9edc82a789351a02d4d295b850b13202c46b61024e0f8ef767c7ff07e00ca733c4d29eb09eec00b5891a81ff2c3b9d78c6dc1112cc5136b9ff3b9ce7c7b864fd26b85acb867b1a3cb49d86ec36adee82a8de187c8bf1bd13b5e32c11183a5f11d98a33a5550a32e7197b60e864984a45a0e4fca7eacad2480be4bbc90f0db35bb7ec66e60aa3279e79565b891b37054b3d0a0fe97c6358fab012dee9360cb0589485991999ecbbe2b3c1813a8f1fb71092ce6b16d2f5cba37dba22531c725043b80f9d0503ca5cd632629babe03ffcd94ad037e5c0d8c28a6e0f70f7ef824db05010000",
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
      "Wed, 17 Jun 2020 21:09:33 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1592428057699",
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
      "0000000002ff8d545d6f9b30147dcfaf40ec714dc80784a452b4a284ae9112b212d26a9a26648ca16e0153db74eaaafcf7d9401258aaaa6f70ef39e79e7bafedb78ea2a84f380bd54b450d70fc5c20fafae59104ea85cc200e629961295c7c1decacfc76774f346b61e1bf8f349ecd2a142ed90ca47982ba8c14142276b9dbf6624a8a1c5042ba42b03b197407c674a80f277dc31c4fa71597a1245ae1ec492a3c709eb34b4d3bf8e8c584c4090239663d48d2635c7b196a39258f0872a6b5cb6aa212d33e2efc2d2110704cb2d96e5b992818a23e4a014ea48d133b0caedaf23d0cd25e2cd02f1822002129322ead55329064118e0b5a8a0ba5371114e1d2f3f1b71150b7f6ca9e7b0a244991667e065274a18480039fbfe648b976376b65e95c6fdcb5e52d378ebf9ddfd86bab37dfac766b67abdcdfd8aead701024a8e42a33e5aafc73c44fe9a8ac1622c671567af264b6e14464eb392edf59e151428a08570cd530dfec8fc160d29f065160c268323282a88f826012980618057d38d5911e060834154a67151f64241b873a10a8c00ffbc3d0d77534f0272353f747e17888a6c09c042343add9fb632f7f28e66881594e18ae87acdebb4bcff63d77e7cc2dcf6ef61d8122e18bca79bbeb563b5c0ca8e9f4a3919c39ca2926c254b9cea5e3d9ae35f796770d1be26cad500ce0ebf6599eae08240c9dd8808a5d7144d724948b511d6b6d2f4ee4f2a4fc38809840fc3afa3cb5238072ff652f67fb6fd7f1c4c16a8da2da4d1555b79ebb74beab8de4fe7d993b9014efe8bcd4613517d37a1013662dadceff5fbf3b8d1aaab8abb53df57667bb3f25b7ccc98c8b224451064f553f717425b14a7fe22912f0c3c32019e26d38d6675c84c52d82ec541d5254dd295c4dbe161c9823dd300f828248f939c2308d03e2ec7190b5508a327e9845f5485483dcb72c150d3b254dc2c53d70ea25ee3bfbce3fcc336ffde1050000",
    ],
    [
      "ETag",
      "smcD+1UApQUWo/ADAizjrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554514fc230107edfaf20f51512404430e10114753a1161c6074348dd6e73b2ada3ed340be1bf7bed86ec05b344125fd6de7ddff5cb5dfb6d63d46a6415c42eb9a891b7c05fa7c0b3131fe493dacc40a4a114b8242c1640ea8a0d92fa8a9d9d5af7d9ba7bc7572b73bc9ebc8c6ee99afb8341ce12ce3b4414791b8c30f602085d81f1ab8e6b455e63318d409de8b0308de2a50eeb7b58668986e7f6cc9cdc949188b91a993c5bd670648d49016deb87455c2ae9521ff93709bd2e8c428c7cb0b71978c0217660df75c2d90738d2d4e315344a4268089672074421a20a73d8e72c4d2867ac81a946afd5689df5db9d76af7976deedf777f4903954062c5615cf73f2a32f99a4e18c7da911936e7e073c0ff389ef4641bcd225942784d0a72a0e5cf293dbd67f219a13bbdb29718bddc228555656c549794108cb7f52c72b79a7f8c2ab6917cfe448e23462692c2b4a5f5b8fc323368e6ea8daf4d5d01e1f4b5648f442455ddb7c18cfede1c3f4a0387e177b138c320962ca197a4c807656abd9e9a1899a64e7d44ba69c289551254f41a71d8a7facdb4062cea3a100636b7c03f7d816f31d050000",
    ],
    [
      "ETag",
      "y3LKyq6JrkkIEqNWBHaqrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ?",
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
      jobId: "grouparoo-job-82-1592428057699",
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
      "cd",
      "54",
      "5b",
      "4f",
      "db",
      "30",
      "18",
      "7d",
      "ef",
      "af",
      "b0b21790d6a649cbad53c53ac8205a9b40928200a1d6246e302471b01d3484f8efb39d3649b58e4dd31ef6967c9773cee7eff2da02407bc459a40d807687e3a702d1970f0fe44efb283d88c3587ab87f6af74c37fe0ec77a6f74ed9d4cce232f1e0ecb28acb2194cf304b519296888d860ea77624a8a1c5242da02b0bd6fb68d9d03b36fee7777f6760f0eca5c8692c518678f12e19ef39c0d747da5a31313122708e6987542925676fdd9d4734a1e50c899be4eab0b26a6bf4f7c989010724cb2e1d42f45140cd1194a214ea48c3a3bbafbbc0edfc130edc422fa198708862129322ea5953021c916382ea8021748afc228cc4a73f5db3068be35b68e0270e44e9d606b0e530937df069081d98c2256241c7cf5dc0998e782fd1e32c4e6e0f2d4f22c61a164811334c3d11c0cc1211839c7008cdd4bcbdb9a332e440b1cc70dc0d8fe668143a54f7147680105ee31e4028e3754495f69b4553b3962bc4a13cee583db1b7aad2da3de2a969c6242315745da4e6079a3a3c0beb06a19e2c5c72886e18bff24df7c011386ea6c48618a38a21312210971e6fa7660bbce685c23a8473c5b453211765389ad6b6aa2052f395a2b58b97969953277fb5ac3f7f67123ca054c8a0d30cf4bb366ac61b436a0fd8dbac09e587e309a9cfd038566d7ecb6bb722902c31c18bd81d1ef74bbddeb5f085f",
      "7eddb61a949ad8aba560ed7c6a79573257f9a4c7430b445116d622de9d9e1ab274ffc1d910e1ab259619628f2b7e31fc1c338e4356b38714a9d800a7658f4a4063af6f8a9e2f014522e53f47f4cc8a1265d166ff1a79d120469412eaa94d6e1e00218795ca7126da82a3737511aad96ed6f6b4ee4a116330561a1c0252c8c37b9cc580e13813d4148105a1605164a1cc2f0f8232411a1729ca389013c506a01aa80ef08b3c2794a3a8461101e52df103cf764eb63f2d7fbf5c05962f0e140737c660dfb8d5d6864255dbdcc4c66df94dc9ef16fd9f96bdda8ddb7a80b85278ec3a969a89d65beb07a8ac42c361070000",
    ],
    [
      "ETag",
      "tSHI32OgxaL/3AZRGMQdRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfc95283300000d07fc9b976901d6fc409a060315336b930690cc84e093550c77f97f1fc4eef07104a19e7c532b66c004f6023b275a4477f34e15dd09618c1edc571e36ef575556ad5b3927b2b899333ea4420d21edf3bf14658b285b11df0066b8ab0112c0dc42239346138a925c776447ad18d084327c3d70e097f314475c1276f701fb221542935a0034feea3fd8a4be393e6abda6a19437aef2a38d523eb435a191dfdefb4ddbeeaf65ae1a2af7c4936fd5b93bcefe2f16169f222dea60ba6cff66a68130707c0d6a99e192fea7da668967500ffcd62d926b65f2123339bc1ef1fff21a00705010000",
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
      "Wed, 17 Jun 2020 21:09:34 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1592428057699",
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
      "000002ff8d54db6e9b40107df75720fa1a1b5ff0854856831cd25a3238c538515455685906b2096609bba48a22ff7b7701db504751de6066ce9933979df78ea2a8cf240dd54b450d48fc5240fef6ed8906ea85f40047b1f4b0dbb51e11cd741cb0ef9ec217d399a40ff17c5e459112cdd02e4ba0cb6891636097db4d2fce6991a19cd2ae20ecce46ddc1d818eac3597f3c9d1846856590442b923e4b8647ce3376a969071dbd98d238019411d6c37477b46baf432dcbe91360ceb4765a4d6462dae789bf2714234e683adf6e2a110583dc871d228994714287c1559bbe47d0ae178be8578201614c8b944b69150da66944e2222fc905d3bb300a73a9f9f8db30a81b6b652d3c05d3a4d8a57e8a7670a18488239fbf65a0dcb86b5b593a376bd736bde5daf1378b9f966df616ebd5d67636cafd4fcbb5148e82044aac3257aeca3f47fc948aca6c21304ed2529327bd0d25c25bf771f9c1088f149244a8625087f9d3fe040d667d238882298e66a37110f5210866c1748c46411f1b3ae86100a8c9502aabf028a529606cc0000c1ff543e4eb6814f9b3c174e0c36c32363046fac0c06a8dde1f6bf99b130ed784659491bac9eabdbbf42cdf73b7cec2f4ac66dd112a127e5d296f57dd2a878b0635957ed6923345594ea810558e73e978966b2ebce55d4386d8ad15c408bf6d5ee4764528617042a35ccc8a436ed3500e46754cdbba3e81cb4db93d043111f1fba8f3548e0894f32f6b399b7f3b8f2716abd58a6a369555dd78eed2f9a1369cfb8f69ee50527cc0f35a9bd54c74eb517498b5b83aff7ffde93472a8e2add6f2d45f5bcb7d90d8d2273d2e4490438a4f59bfb0ba1258b9bf708a44f8e1304884b80dc7fc8c0bb37845989db2e31caa3745aaced78483a93e1e4f0e840298f3f38889313c449c1d07990b7690f2432faa23513572df925434e49430192ede81",
      "530f71dfd977fe01a360181de1050000",
    ],
    [
      "ETag",
      "sPO4fi/ANNeMVjdqAN6nYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1592428057699"
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
      "5d",
      "4f",
      "ea",
      "40107defaf20eb2b248005c1c487aa782541ae427dd110b2b65328b7edd4fdb88618febbb3db227dd13491c497eece9c337b32b37bfaee341aec5f9c85ecbcc15ee2d5ab06b13d59817a309b19489d28494b8e9904d6346c507c65d8ee939f6e5ebb5ed0c1ded3e95c6bb7c7d70f1717054b066b4839f1de29a2388a210925c5cf366e94798b653c05736280894eb3a50d9b07586d730bcffdd978faa78aa4185a64fa3899789793112ba15df36b91902bbeb447fe4cc2ae0ba714631b7c99410402b2000e5de7023710a8b11dafe4699e404ba21601c852c41416f04aa0ceb9406c51aa35386d757ac3aedb1db47b67fde1704f4f30e02ac6cc543cced9a7be42c59319be9911b37e7107a2088b89ef47c1a2ca25542744d07f531c87ec33b76b7e431c4ffdbe5be196bb8553a9acad4a938ae20496bfa44e57b2e6f4c2eb6997cfe448e23c459da99ad23793bfde111b2737d46dfadaf347c792958abc5053d71fdf8de6be7777ffa5387d1707135c6e15c87b81e43109d6599db63b2013b5d9dea957689ca88c5195d060d301a73fd66dac2817f14482b3733e00536407681d050000",
    ],
    [
      "ETag",
      "4ZTmjq2Ac1o5Z3Suu45ahQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ?",
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
      jobId: "grouparoo-job-84-1592428057699",
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
      "c5",
      "54",
      "61",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "ce",
      "afb03255ddb4028501a548a86334d5a251d24168d74d1531c9919a26716a3bddaaaaff7db603499068354d93f62dbe77f7deb3ef2e4f15848c3b12fb460f190b12dca7c01edface8c2385008081c28a431fdfe6b386c9fbfffb9f42e0fbbd7ab6923f836e8f7b32ca2ab398e9210aa9ca6cc03de9b4d6b01a3698219a5554958edb6aa8df671b3d5ec1eb68f3ac7c7592d87703922f19d62b81522e1bd7a7de3a316501a848013c26b1e8df278fda1594f185d8127787d5bb62e9578fd75e193907a58101af767d3cc44ca81cd21c22454368a6a7ff1719bbe4670540b64f603f1007b1e4d63a1ac65341e8d9724489926974c4f3228c3da737e2c058ca93932870e1adab3b1f3d6c591a273df21ccd17cce80a7a1406713fb1cb98954bfc51cb88bae3e9b135346185d9210e6c477511f9da0c1f814a1917d654e4a4463db4123eb8b894eb4412deec3124be2532c249f28d9525816b4743f057091974970fde2d68e661bebace75c2561843222f42dadb1634e0643c7ba340b1bf2c9471060ef717aaf1e7d89430e453566380201ec9cfaa0282eeca9e558f678302a18f42b5e6c32b94cfb919b2dee5466731e13d8bab086451655363b2da3843d1fec64b9c461ba83e6611d361a5b1c951d6c7fe3ee6c640ffe8dbfbd46adddda7bc1e4faeba6521230e412adcd195f67e6e45ad56a4c2113580283d82b245f9d94823283",
      "ffe01f21d3371bab2ae4d2e6fa5cc83017c4e385bac740e73a24cafa9111368eda9d666743280b99d891f1a1bbc980d8df8d6f89a72561608cb2895edbf2b64b3b3c734e62d904f9b3cc473802ce71a03566b17c050e781102d2938df28622d74524466a1290eb5c5f98f3f530b807e813f6914f5355a51bdc43597b37a7fdecb86f6c35543b2d6f4ce91ff0b2ddff607833913745db84563fb5c7a6ee44e5b9f21bb45f592cc4060000",
    ],
    [
      "ETag",
      "1SZxCC5M+wfcV08YjS1gXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb642d4eaa82a53ba1fc296d6351c2261342008b22240cbf4eef5ea7ef06ef0750c6b894a4bfd7bc012f60a61b7dcdd6c1fdd958c6024b9eab6387da86e4160ecd6129d34a979ffa7b432872941219fb593ba361f384b5d8a7cc6baa243836dcc99394be7ad9c9dee31896ecf685eda9ab2b74d66cb814a36659d432be23e79a86875d4fddf16aca3a23907566d01db0d5ab599cceed1bf233963bae8427df81a3526f71108514093751f258906e5e9ac883415a44d2390a314cb5b153a477fb806005f8d45e0497e4f2986d555d5f81ff26e9e7963fae06a7820bf0fb074f4a455b05010000",
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
      "Wed, 17 Jun 2020 21:09:35 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fa1adf6f10c96a5c87348e6cdc609c28aa2ab42c03de0458cc2ea9a2c8ffde5dc036d4519437989973e6cc65e7bda128ea0b893df552515d12ec3248dfbe3d5357bd901ee028909e3bbeddfcd0fabba76de4ede0f6467be81babfbc9a48822399aa12809a1c968966260979b752b486996a094d2a6206c6ac36677a8f7063dad331c8f74bdc03208fd05895f24c396f3845db6db071dad80d220049410d6c2343adadbafbd7692d267c09cb5eb69db22136b7f9ef87b4831e284c693cdba109131481d881009a58c13da73afeaf42d82a25620a25f09068431cd622ea5153498c63e09b23427174cefc228ccb9e6e36fc5a0ae8d8531b3154cc32c8a9d184570a178882387bf25a0dc58aba532376f56d6726acf57a6b39edd1acb696bb65a6c96e65a79bc352c43e1c80d21c72a13e52aff33c54fae28cfe601e324ce35d9d25b5122bc651fe71f8cf0482149842a06659833ee8c5057ebe8aeef8eb1aff587aedf01d7d5dcf110f5dd0ed60730f05c4055865c598147318d479edee9fa9aefa0ded07306030d3b5a07751daf8b75ec76fbbda1d6574bf4fe58cbdf9470b8262ca18c944d561fadb96d38b6b5316753dba8d6eda32ce4d785f27ad5b572b8685055e9672d395394a4840a51f938e7a66d58d3993d7fa8c810bbb58000e1b7f54e6e978f420627344ac5ac38a44beac9",
      "c1a8e674695c9fc0f9a6fc3a043111f1fba8f3548e0894f3cf6b399b7f3d8f2d16abd68a623685555ddbd6dcfca9569cfb8f691e50987dc0f35a9ad544746b2b3acc6a5c8dffbffe342a3954f1564b79eafdc6b09e2436f7498f053ea410e353d62facae0416ee2f9c22117e380c12216ec3313fe3c22c5e1166a7ec3885e24d91a2f32561772c16f7482880293f8fd047a343c4d97190b92082981f7a511c89a291fb9aa4ac222787c970f10ecc7288fbc6bef10fc2738342e1050000",
    ],
    [
      "ETag",
      "JthUB83qYhmdqeHF8V3EOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1592428057699"
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
      "51",
      "4f",
      "c2",
      "30107edfaf20f55188a08060c2c35444928138862f8690badde6745b67db6988e1bf7bed06ec05b344125fd6de7ddff5cb5dfbeddba8d5c87b9878e4aa465ec2e02303be3e09403eaa8d0d228ba4c02565890052576c903450ec0bdf0c468ed5c9a8773aeb3f7db56e8667493018e42ce1be424c91f78d11c67e089127307ed671adc86b2ca131a8135d166571b2d2617d0fcb75aae1b9638fa7a33212334f23d3856599d7d69014d0a67e58c4a392aef4917f93d0ebd228c4c81b7bb1c1070e890bfbae53cedec095633d5e41e3348286601977411422aa308703ceb29472c61a986af43a8d56a77fde3eef353b97dd7e7f4b8f984b65c81255b198939dbe64924636fb522326ddfc0e781ee613df8e82f8a54b284f08a14f551c7a6497dbd47f218ea74eb75de216bba551aaacac8a93f2c30856ffa48e57f24af18557d32e9ec991c469ccb2445694beb31ecc23368e6ea8daf4ade90c8f252b247aa1a2ae339e0ce78e39991d14c7ef726f82ebb50431e30c3d26403babd56cf7d0444db275ea0d534e94caa89267a0d32ec53fd67d2831e7d34880b1317e008da2ff271d050000",
    ],
    [
      "ETag",
      "3fAgGTL5uad+P9Vw1CE/ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ?",
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
      jobId: "grouparoo-job-86-1592428057699",
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
      "0000000002ffc555dd6fda30107fe7af88b2974d2a2481044225d4219aadd968e84268374d1338c985ba4de2d4765a5515fffb9c0f20a8aceadbdec8ddfd3eee6c1f2f2d4992ef711acaa792ece3f5430ef4f9c31df1e59322031cad8b8c3b9e4d7e66e177647d5b2817914da32e319f46a3aa0a976886922c863623390d809d2ee69d3525798628216d41d836fb6dcd1876f5aea91a83fe70586119c4d114a7f705c32de7193b5594ad8fce9a90750c28c3ac13906417571ebb4a46c91d049c2987b28a5062cadbc267310910c7241d2de695899c015d4282705cd8d8a343fff3217d07a3a4b316d58f38001404244f7961ada209481ae1754e4b72c1f42282225c7ade7d3602f2dc9a5a134f9acc168ef7718592826ef549424c5a2e29b03ce6d217777629ad32a17e8b18b095747361b996885012e11896385c4923e94c1a3be792b4aabf4a3ba554088ce3b434e4213f86860d91ad87681f39bf1d454182b8d0aecb9603b58f34531dfa913f0822b367f8910abe6ffa0303f57c3518eaa0873ea026032fb42b3c4a496af63418ea21a848d50c084343ef83deed757b3dbfafeb60a2a1affb4634906b86cdae9f278a399c63961186eb29cb37aeed594bcf5d3893b167357b8f9018e179e5feb0f38396b81852d3ed5b6379e528a3980853e579da8e67b9e389675f376c88cb3585350a9ee70fc5f58a50cc608f461425c0815e92b0381cf96a36b73d7be68ca77b86f2be5c6d2b9928fbbd33bbefa9c9e63d6787475d9d42152d6cf675b991db9c1c65b946717e84e6b10ecbda0147eb08db7f7567fcc35efdeb4fab412e8b4551db927f2c2cf757812d7345c6850828a4c15eee1d4fa70056e977ec4151bedd4a05422ca69d3ee3222c5e71c0f6ea0185ea4de3a4eeb524d406a6aae95b4201a4fc75856618db8a579ba9d0820452be9d45b5a1aa416e0e2ce50d3b25acfc9f58388eed7c2dcdb736adbf369de26f",
      "5e060000",
    ],
    [
      "ETag",
      "RAOCXpdKaEJU/HfIrf2o8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6f8230147de75790ee75c48f4ca74b7c988bd948087338f7e0424c852be280cbda32470cffddb680f2d2f69c736f6fcfe9d9304df21367217932c92e8e7e0b60e55d04e2431d3ce04522b8dc72cc38907b550d8246aa7ad3fb3f3a36f596037ef05cd6fb7a0f579bd36c5657f1e000299575678924dec790845ce26f8dcd86d75a465350376eb74c0fd437349a2873add9eee7e275e175a514432db96bc7799e3b0bd24895de7db956fa2947dc79b007065900b707e50c8f10085b3be734cd13b038162c00de0c518db51c312c72ca102d495993b135184d870fc3497ff4389e4edbf204032a62cc54c77a45aef3050a9a787852eec9a08e87d5b00ea38d82ec3bf9741392d25fdd7ca5aae6e41b2df26fc3e6a500be6428bd70d00efaa48de2059555a19210ac004d0754fed65b2c1acea88c0bd359c72718020000",
    ],
    [
      "ETag",
      "Z/xjLIaRP1shRNr/VOdSZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "82",
      "300000d0bb64ad8ec04093eed0b61682363a543e9b4c08a141e4ffc7e9ddebf4dde03d00e35cb42dedca4c14e015cc4c451bbec125dc2d6322ba9ed4be66bb6f8b16fab20c5cc8ef2f0abbda8ebc0450a6564e0dc5b1dd9fed6ca3fe06af3da4e3cd3b14888fb5a7635559d7d17c428d2dfb7e311a8cc8b01e32ec7bc54849fa5d99384053fc39b44e862373d2a674af5bd1008773eec93bf96a477bda5bac6264eb7c4403d6742f36d9d1ad4be32454a91ecd2e1f0f8a4ae2a9bc9ccf615193e43d9173c8c10a88a94a1bd1d2f439d3748456e0bf49bbb912cfeb4eb04634e0f70fcdf58a8905010000",
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
      "Wed, 17 Jun 2020 21:09:38 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fa9ad8f8820d91acc672486bc9c60dc64e9aaa42cb32904d304bd8256d14f9dfbb0bd8863a8af2063373ce9cb9ecbcb514457d2249a05e28aa4fa2e71cb2d72f8fd457cfa407388aa427c84232bfdb6ccceeddfdf436b81f5c6b7fcd9bf1b88c22059aa16d1ac339a37986815dac57ed28a3798a324acf05e1b9313aefea666fd033347d3434cd12cb200ee72479920c0f9ca7eca2d3d9eb6847944631a094b036a6db83bdf3d2eba4197d04cc59a799b62332b1cec789bfc614234e68325eaf4a113983cc832d22b194714407fe6593be4dd0b61d89e8178201614cf3844b69250da64948a23c2bc805d39b300a73a1f9f05b33a82b6b6e4d5d05d338df265e82b670a60488238fbfa6a05c3bcb8532b3af97ce62e2ce96b6b79a7eb71693f674395f2fec9572fbdd722c85233f8602ab8c95cbe2cf163f85a2225b008c93a4d0e44a6f4d89f0567d9cbd33c203852411aa185461de481ba2aea1997ee88f7068f4753fd4c0f70d7fa4a3beaf61730083c00754672894957894d0048c61a01926f2f42eea790304e09983a1e969bedeefebbd41880343add0bb432d7f32c2e18ab09432523559bd7566aee5b9ceda9e4e5cab5e7788f2985f95ca9b5537cae1a24175a51fb5e444519a112a4415e39cd9aee54ca6ee6c539321766b0e11c2afab67b95d218a191cd12813b3e2902d6820",
      "07a3da9385757504179bf2631fc444c4af83ce63392250cebfa8e564fecd3cae58ac462bcad9945675e53a33fb9b5a73eedea7d9a0387f87e7a532aba9e8d683e8306b70b5fefffaddaae550c55bade4a9376bcbf929b1854f7a1c082183041fb37e627525b0747fe21489f0fd619008711b0ef9191766f18a303b66c719946f8a949daf08bb234337867b4201ccf869c4c8e8ef234e8e83cc055b48f8be17e591281bb96b48ca6b720a980c17efc0ae86b86bed5aff00236fc6b9e1050000",
    ],
    [
      "ETag",
      "drfiLXVV91XZCWdZ4F0x9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1592428057699"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "dfaf20f5752448900f131ff85231301166626208a9dbdd986ceb6c3b0d18febbb7dd80bd609648e2cbda7bcfb93db9b73dfb362a15b20e62975c57c85be07fa4c037173ec827b599814843297049582c80988a0d92fa8a3dbc5d7fac1e56132b7a11c980d2b6b5ddf6fd9b9b8c259c15441479df1861ec0510ba02e3571d57f2bcc6621a813ad161611ac54b1d9a47586e120dcfedd9c8ba2b22117335623d8fc7ddde78487268679e1671a9a44b7de4df24f4ba307231f2cede66e00187d88163d70967efe0c8911eafa051124255b0943b2072115598c13e6769423963554c55dbadeae555a7dea8b76b57ad66a7b3a787cca13260b1aa789e9383be64928633f6a5464c9ad91df02ccc26be1f05f10a97509c10429faa3870c921b7337f218e2cbbd92870f3ddc228549656c549794108cb7f52c72b59517ce1e5b4f3677226711ab1349625a56fc78fdd33368e6e28dbf4a06b0fcf252b247aa1a4ae3d9a0ce77677323d298edfc5d104bd8d0431e50c3d26403bebb2d668a3896a64efd43e534e94caa892a7a0d30ec53fd67d2031e7d15080b1337e00510796581d050000",
    ],
    [
      "ETag",
      "EFkqhJhMNmXspDaa8NzzCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-88-1592428057699",
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
      "ad",
      "54",
      "5f",
      "6f",
      "da30107fe75344d9cb2615083409a412ea18642b1285368456d33481935c52b7499cda4ea7aee2bbcf4e02049555d5b41714eeeef7c777f6bd3414457dc069a09e29aa87a3c71ce8f3877be2a92732031c4532f3e522183d8c2f7f4753d3b4473a99dfdd52723d189455b840339464313419c9a90fec6cb9684594e419a284340561b3df6f760cabab77fb9ad1332dabc43288c3294e1f24c31de7193b6bb7b73e5a1121510c28c3ace59364176f3f75db1925f7e073d63e946d0b25d67e5bf83c263ee298a483e5a2349133a02b48108ea58d3d3af03e1fd2b7304a5a91a87ec23e20df2779caa5b592c6276988a39c16e482e9450445b8f0bcfb5b0ba80b7b6a8f5c65345fcedc8f6b9448baf527053165b5a2c0f2982b5f9df9a5b2ce84fa1d62c0d6caed85edd8224249886358e160ad0c947365381b2bfbba2256982a0403601ca7852d177931d4cc886cd5cac99129ee282409e282b92a5bf5341375fa9ae5855ecf0ffba786176ae0797daf67a0534ff32d1df4c0035467e052bbc4a394a400483b2d7eba66a00b986681a7999ea11bddbee5595d4b377ddf00b562d8eccef38b620e63cc32c270d56bf5d699b8f6ca7596b3d1d0b5eb670f9168e4b8747f78f2832371d1a4badbb7daf2ca51463111a68aa94e66aeed0c47eee4a666435cb12944c87f5e3cca4b16a298c11e8d284a8003bd24811c8e7a355f4cdcc97c369cee198a5b73b5ad64a2ecc7ceecfe4c7536f7393b1c753985322a6d9aba5acb6d4e8eb2dca0383f42f35485d5ce0147e308dbbfb85bb8ce64f6ed3fd81b6662707fb158",
      "7dfd6cd4f855b1322a6beaf5d276be4b6c9193190742a090fa7bc5773c1f092cd3efd888a27cbb9f2442aca89d3ee3222c5eb2cff6ea3e85f25de3a49c4649d8e9597a57df120a20e5af2b0cfd745bf16a47492d4820e5db5e94bbaa6ce4e6c0525eb353c064b97887b36a809bc6a6f10747d7f8a268060000",
    ],
    [
      "ETag",
      "BHdCkDMzgL66EC4oOhWroQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d6f8230147de75790ee75246ae6d7121fe66636126226eac3b61853e1c250e0626fd9e20cff7d6d01f5a5ed39e7dede9ed3b365dbec90e4217bb4d92e898f2588d35d0c72a10f3e50994a525b813901bbd7d52079acabff0869b09cbbdecb21fa40fc748f43da2f2693ba8a826fc8b8aa3b2ba47094401a92c25f06db0d6fb49c67a06fdc6e8519686e6834792a8ce6ce57b3d7997f2b65181a69bef6bca7a937638d54997da3d6ca3c658f3b1f22109007707d5021700f81748d73e259918243588a00a819a21b6b391658165c203a8a724623a7db1ff71e7aa34e7f38188fdbf214032e13cc75c77ac92ef3254a9efaf8abddb36e1d8fa8611d461b058b6ef2b94d48493fbab9c72e54d59c36568b36d761d393047a17a8bc1018071dd646f18cdaaad449485182a103ae7eeb2d910d6755d63fa930555918020000",
    ],
    [
      "ETag",
      "zsos6SNILDkfYooZIq7sjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "7643300000e077c975f5d45a3fd99d6019c5a67364dce4386990eab06045cfde7d3dfbdee0bb8382313e0c74ec1ade8267b0144f70cbb6c7ce44ebad74385582dbd53830329c705c465ee5af721c63bffed8e3282011c97aabf16eb1e5da84b65ebe38c441e661d738a1089a385df41dc3c605072afd24539dbdac68ed892b5548df1268f7e76a626df8e5870912b397e28c2bd0ce71ac57ef4829cbf5920bef541f75f7da9e95a4e0a639a7e4f5675253d53534d8d17cb234e9cc85f18d6757598526ab62ea64cbc006f0b917920f543c667b0dc20df86fd271e9f9e38a7821b904bf7fceead3ae05010000",
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
      "Wed, 17 Jun 2020 21:09:39 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1592428057699",
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
      "8d545b6fa240147ef75710f6b50a5e506c62b656e9ae89620bd8a6d96cc80c1ce8b4c85066e8c66dfcef3b5c54589ba66f70cef9bef39ddbbcb724497e21b12f5f4a3226e16b06e9eedb33c5f245ee018ec2dcf308e1dfdb747badf8f36bfb69b3b39cb9bdbb9b4cca2852a019da2611b419cd520fd8e5c6ee8429cd129452da16846d7ddcee6ae3dea0a7abda68381e97580651b024f14bcef0c479c22e15e5a0a313521a468012c23a1edd1eedca5b4f4952fa0c1e674a33ad223231e5f3c4df23ea214e683cd9d8a5888c41eac2169128977142fbf8aa49df2168db0945f41bf100791ecd629e4b2b693c1a0724ccd2825c30bd0ba330179a8fbf35836c1b4b63e6481e8db26decc6680b17928f3872f92e01e9c65aafa48579b3b6565367b1365d7bf6d3584d3bb3f572b3326de9e1a7611912473882022b4da4abe2cf143f85a2229b0f8c93b8d0e4e4de9a12e1adfab8f86084478a9c44a8625085b9237588baba3ac6011e7981ded770a002c63a1e69a88f556f3c80818f01d5190a65251ec5341ef4f030003472355d1bb983b18f5c8cfbba8b55e86afe68087ad0972bf4fe58cb9f94709813965046aa26cb0fd6c2315cc7da98b3a963d4eb0e5016f179a9bc5975a31c2e1a5457fa594bce142529a1425431ce85e918d674e62cee6b32c46e2d2144dece7ecdb72b401183131aa562561cd215f5f3c1c8e67465cc4fe062536e0f414c44fc3aea3c952302f3f917b59ccdbf99c7118bd56845399bd22adb8eb5307fc835e7fe639a7b14651ff0bc55663911dd7a121d660daed6ff5fbf5bb51cb2b8d54a9e7cb731acc71c5bf8728f0501a4107ba7ac5f58dd1c58babff01489f0c3c39023c4db70cccfb8308b2bf2d829bb97",
      "427953a4ec7c4528ce421df40e840298f2f388aea61e22ce1e873c176c21e6875e948f44d9c87d4352569353c0f27071076635c47d6bdffa07b8c0980ce1050000",
    ],
    [
      "ETag",
      "YegzPrmB/dDBShUyRTDSyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554514fc230107edfaf20f55148800032131f50a79220029b9a680829db0da7dd3adb4e420cffdd6b37642f9a2592f8b2f6eefbae5feeda6f9f56ad46dea22420a735b28c56ef1988cdd10ad4546f662033a6242e294f2490ba6683a22bcd9e5eb43676f7e9c1735cb7f3d83f6e393464ebb3b39c25fd178829f23e31c2388c800512e36713d78abcc1121a833ed1e72c8b938509eb7b586d5203bbde6c38be2e23310f0c32be1f8d06e7238714d0b6feb34840155d9823ff2661d6b955889157be9c410802121ff65da782bf82af8666bc92c6298386e499f0411622ba308757826729159c3730d5e8db8d56d76e77dafd66f7a467db3b3ae33e55114f74c5bd4bbef5155794cdf85a8f98f4f23b1079984f7c370a12962ea13c21843e74711490efdcb6fe0b7138f67a9d12b7d8cdad526565559c54183158fc933a5ec90bc5175e4dbb78260712a731cf125551fa6a74373860e3e886aa4d5f0e3ce750b252a1172aea7ac35bc7f506b7931fc5f13bdf9be07ca3404e04478f4930ce6a353b7d345193ec9c7ac1b5139536aa121998b44ff18f751329cc859449b0b6d6175a9198aa1d050000",
    ],
    [
      "ETag",
      "QC1y95ZVTESS4W8+1Eaflw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-90-1592428057699",
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
      "ad",
      "94",
      "5d",
      "6f",
      "9b301486eff32b10bbd9b426817c5329eaa294ad6869d211d26a9aa6c43686ba054c6d93aeabf2df670349889a55d5b43b381fcf797d8e7d9e6b9aa6df93c4d74f351d92f021c3ece9dd1d85fa89f2600142e5b170ebb709178ed77b083e7e4d1fe717eb5fe3d1705844913c9b83388d709dd38c21cc4f17f346c868960246695d02eb965137bb56abd31a18dd7ecfb28a5c8ea36042927b45b81522e5a7cde6564723a4348c3048096f201aefeccd75ab99327a8791e0cdc3b24d5989375f2f7c16510404a1c970312f44641cb3258e0189948c7db60f3f1de21b04c48d5046af09c200219a2542492b30882601093396c325e9591aa539d7bcfbad18f4b93db1c79e369e2da6defb1588156ef541035c5b2e19e65924b4cfeeec525ba5b2fa2de098afb49b0bdbb5a585d180447849fc9536d4ceb4d1f45cdbc7e5b65c545ed0c75c902497e50118e18a18e92d5be91c99e20ea12040487219b6ec1b3d600e0c0b06b08f8241bb0b0303433880fd2e684303591ddcf12106558250b58b7c90c85e016c22d8875d10f4cc160afac0c7839ed96e5b7ed0b10ccbf07b309030bd246c76e7796444e073c253ca49d96bfdc6753c7be9b98be978e4d9d5b3074036f2bc507f78f2832309d9a4aadad7daf24251ca0895a2f2a93a53cf764763cfb9aec890576c8243809ee60fea920520e2789f0d1888b1c0ec92fa6a38fad56cee78ce6c3a9aec09f9adb9da467219f66327767fa62acd7b4a0f475d4ca1b02a99bd8e5ef16d4e8e52ae41941dc1ac4bb36e1e306a4768ffa26eeeb9cef4",
      "cb7f90075239b8bf482cbf7ed62a7c5dae8c529afe6d61bbdf556eee531e170798e104ed2bbee1f9a8c4c2fd868d28c3b7fb4965c815b5abcf8534cb978cf8be3a62b878d7242ea65100d5d31c74b64099c8c48b08d36cf5b6112f7694aa85639c886d2f8a5d553472732029abc8c9d354b87c87d372809bdaa6f6077fc1585e68060000",
    ],
    [
      "ETag",
      "9e2z1bUIT6qf+KpwSHvxCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1592428057699"
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
      "4d",
      "51",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "7d",
      "ef",
      "af",
      "28",
      "d9eb0a2a73b3031fd6214e5644eb84c11089e96dad6b7bb324dd26d2ff6e92b6ea4b92f37173734f4e8eeb92efac8cc9b34b7659fa538138dea5a096e61081ac7225f5c6b19440ee8d1b144d8d9b2da6f9fc3f5c71be679162a3cfa4780f96e371e3926c0f05d5be93461a2719e4b1d4f8cb62b7e5ad56d202cc8ddbadb00ded0dada68edc6ab3f9c7643a896ea502632bcdd761f8128413d24ab5dd377aaded530eb88b2001012583eb83b8c0033035b3934b5af01c3c89956020db26a6b091538115a702d1d394e7f7bcfed01f3c0c46bde1d3a3ef77f61c19551996a662bd2297fe0a15cd23fc33d3937e138f686013461705496ef2b94d484bbfa6b8472e54dd9e364e8736d766c151815c08d4b348889bca2e8a5734a32a93841215589a51fd5b6f996a39a776ceb2e8a68518020000",
    ],
    [
      "ETag",
      "cPGlNxLSpphcRtc8XfmKBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "30",
      "00",
      "00",
      "d0bb64dd766ae513dc915841e45b692d6c1806224df905020470bcbb1ddf0dde0f48b38c709e0c6d491af00296f4a0edb2dd470bd12af2a1ab6437ab1b6594bb688a0313eaf17cd46ce3698e70e3ebcefd8e988dc3a0169e526c1d472cd2db2da15712465509852a16f32073f3428f3d6506b2ba3c42eb7bb5e78428ea29b988736ca7ae2ac981b2b8fe74f8fac673807cd858969bbe923619e62b9cda9ad5d4c2ca29ef9859106f59e1d693e468c558da9746563a34fc1c94eac63d5b2f46b3c5e678061b4066467bc213fa983dcb9ab601ffcd645818795c11497bd283df3fabafbdf005010000",
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
      "Wed, 17 Jun 2020 21:09:41 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1592428057699",
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
      "54",
      "5d",
      "6f",
      "a2",
      "40",
      "14",
      "7d",
      "f75710f6b50a0a0a36315b63e9d6ace216b1cd66b32133c340c7224399a14dd3f8df770650616d9abec1bdf79c7beec7dcf78ea2a84f240dd54b4585247e2e70fef66d4ba17a213d9883587ab0eb7a7ef8bc05afba67707aff33de3ae6dd6452459112cdc02e4b7097d12247985d6ed6bd38a74506724abb82b03bee77fbc3f1c01cd8fad01a8dc71596e1245a90f449323c729eb14b4d3be8e8c594c6090619613d447747bbf632d0b29c6e31e24c6ba7d54426a67d9ef87b4211e084a693cdba1251309c0778074822659cd021bc6ad3f708d8f56211fd42100608d122e5525a4583681a91b8c84b72c1f42e8cc25c6a3efe360ceada5938335f413429766990821dbe5042c041c0df32acdc78aba532776f56de72eacf576eb09edd3acb696fb65a6c96ee5a79b8753c47e10026b8c42a13e5aafc73c54fa9a8cc1662c6495a6af2a5b7a14478eb3ece3f18e191429208550cd76181a58f40dfd6c73082168a6c6308231d4368436b080ca8a3b189cd1062d0642895557890d2d4346c688486191800f403d31ad9816d413b302360411d0c806e8dd41abd3fd6f29a138eaf09cb28237593d5076fee3b81ef6ddcd9d4779a7547a048f875a5bc5d75ab1c2e1ad454fa594bce146539a1425439ceb9eb3bde74e6cfef1b32c46e2d700cd0dbfa596e570412864f68908b59719c2f692807a3bad3a5737d02979bf2eb10c444c49fa3ce53392250cebf",
      "ace56cfeed3cbe58ac562baad9545675ed7b73f787da70ee3fa6b90749f101cf4b6d5633d1ad47d161d6e2eafcfff5b7d3c8a18ab75acb53ef368ef75b624b9ff47838c2394ed129eb175657022bf7174e91083f1c068910b7e1989f716116af08b1537694e3ea4d91aaf33561dfee8f06a303a100e6fc3cc236f443c4d97190b9f00ea7fcd08bea48548ddcb724150d39254c868b77e0d643dc77f69d7fc5debf9ee1050000",
    ],
    [
      "ETag",
      "eNNRTdqjaw0R3toVKgjE4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554c14ec24010bdf72bc87a850410d09a78288ada0451a11cd410b2b653acb69dbabbd510c3bf3bbb2dd28ba689245eba3bf3deeccbcceeeba7d568b0d7280dd849833d45abb71cc4fa6005ea4e6fa620f358495a324c25b0a66683e22bcd3eec67b8ceba13b7dfb9b761f87a367f9081737a5ab0a4ff0c0927de2745148711c481a4f8d1c48d326fb09427a04ff431ce937469c2e60e56ebccc0336fea4e2eab4882814126f3f1d8198e47ac8436cd9f4502aef8d21cf93709b32eac528cbde0d314421090fab0eb3a13f802be72cd78254fb2185a1273e1832c45746101af04e61917882d4ab5ec4eabd3b7bbbdee71bb7f34b0ed2d3d469fab08535d319fb16f7d858ac753fcd0236683e20e44111613df8e8285954ba84e88a0775d1c05ec3bb769fe427427dea057e196bb8555a9acad4a930aa31896ffa44e57f2cce985d7d32e9fc99ec4798279aa6a4a5f8c6f9c3d364e6ea8dbf4b9e38df6252b1579a1a6aee75e8f669e737dfba3387d173b130cd70ae4ad40f29804e3ac4ebb774c266ab3ad53cf503b5169a32a918349fb9cfe585791a25cc86309d6c6fa02c9dae59b1d050000",
    ],
    [
      "ETag",
      "35poyp2NI51Y9eBkCUZsdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ?",
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
      jobId: "grouparoo-job-92-1592428057699",
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
      "a5",
      "54db6e9b40107df75720fad24ab58db13110c94a9d9826961c3bb171a2aaaaec0506b209b0647749eb46fef7ee822f5871a3a87d83b99c736666675e6a8aa23ee234504f14d5c3d1530e74f5e18178ea67e9018e22e9d1bccbfc6cb01afc4e0c6659a97f76f1ebfae6a6d72ba37091cd5092c5506724a73eb093f9ac115192678812521780755bafb70c5befe89666985ddb2e7319c4e108a78f12e19ef38c9d349b5b1d8d889028069461d6f049b2b3379ff56646c903f89c350f699b828935df263e8d898f3826696f3e2b45e40ce80212846329639f1d785f0ee11b18258d48443f631f90ef933ce5525a09e39334c4514e0b7081f4228cc25c68defd560ceacc1939e7ae723e998fdd8f4b9448b8e527053165b1a0c0f2982b5fa7932b659909f67bc4802d95bb4b67ea080b25218e618183a5d2534e95fe78a028cb007128fe0b410559008ce3b490e4222f868a10e1ddb4717864823b080982b860df842d4cad8b5a96667ba167faa1d536bc5003cfb33cd3406d4ff3ed0e74020f5015814bee321fa5244561c70a3d43d30c2f00082cd3f0cc56a7ddeeb6adb62e5c1a04a6ad9b2d7583b0ded5f393620e03cc32c2f0a6cfeadd74e83a0b773a1f9ff75da75a7b88441307a5fac3ca0f4ae2a24955b56fb5e595a28c62224415131d8e5d67da3f7787b71519e2798d2042fe6af6241f58886206fb6c4451021ce81509e470d4ebc96ce80e27e3fe688f50bc98eb6d241361df7762f73555d1dc557638ea720aa555caec76d48a6ffdf928ca2d8af32330cf1bb3da3ac0a81d41fb17750339c4ff17a76bba56d7e4f2ff45e5e6eb47ad42a28a8bb151a7decc9de937995bf8",
      "a4670a215048fd3ded3b36482696ee771c4411be3d4f32435ca81d3fe3c22c96d9677b769f42b9da3829075202b6ac76d76e6f014522e5af2304ed36e2d589925c9040cab7bd284f55d9c8f581a4bc22a74893e16215c7c3f14521beb6aefd014115c22f67060000",
    ],
    [
      "ETag",
      "0bHuBDyDzm5s88ncBGxPQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1592428057699"
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
      "0000000002ff4d51d16e8230147de72b48f73a1235bac9121fe6423613461ceac3b61853f1c250e0627bd9620cffbeb680fad2f69c736f6fcfe9d9b26d76488b1d7bb2d9364d8e1588d35d02f4a10f21c82a23a9b6120b09ec5e5703f14457fbefcb800e59102cc7e228bf70b518ce3f93c9a4a992d10fe45cd59d1552384e21db4985bf0db65bde6805cf41dfb8d90833d0dcd06a742a8d360b96deab17de4a39ee8c14ac7cff79ea7bac956ab3afd55a9ba7ec711b420c028a08ae0f2a05ee21a299712e795e66e048ac4404b21da21b1b391158955c203a8a72dc81d31fb983e160dc1b3d3eb86e579e61c429c54277ac16ec329f907816e29f76cffa4d3ca2814d185d142cbec9e7362125fd36cd17aa6e4f6bab43ebebb0e98940ce052a2f128c831eeba278416d957412242a3074c4d56fbda5d472566dfd031aacba2518020000",
    ],
    [
      "ETag",
      "LMTNtklNNT8rqsZoUS4PYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d07fc9599cb244486f28b29545e8b0f5c2042620d214241144a7ff5ea7ef0fde13e0ba268c957ce8c90f78072b96d0b6de7e0cdafeb134558bc3bcf65c6f9cc541acf488f850258e7a36bdef283e71aa654dc8a2d9dad9d28d3251084ce427e26aadc8962eb89a4d884e192292c4a85304bd08e3fa9cb8b2d1507e2bec515f7095732fbdd26a6983b7fa080b85097055f34c3b3a85571264a7b160f946a3aee9811e920cd2c7eee48c9deeca9f92e891fe2b08f95551e44b7077b8d01b061d22dc562dd800721fbb89b0b27bcd6488d006fc374bbe8ee475dd133c9109fcfe01e42ef47805010000",
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
      "Wed, 17 Jun 2020 21:09:44 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1592428057699",
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
      "ff8d545d6fda30147de75744d9e30a09104a5209ad88a62b13842d04ba699a22db38a9db1007dbe95455fcf7d94980645455df927bef39f7dc0fdfd796a6e94f24dde8579a0e49bccb317bf9f448a17ea13c5880587916ebf5dd6716fbb713eeee7e06d036ad6fb378342aa34881e6609b25b8cd69ce10e657ab65276634cf00a3b42d09db4ebfdd1d383dab679b83e1a5e394588e936846d227c5f02044c6af0ce3a0a313531a271864847710dd1eedc673cfc8187dc44870a399d69099b8f17ee22f094540109a8e56cb5244ce310bf1169044c938a137f0ba49df2160db8965f43341182044f3542869250da26944e29c15e492e9551aa5b9d07cfcad19f4a53b7327818668926fd330055b7ca16d8000a178c9b076eb2fe6dad4bb5df8f371305d78e17272e7cec79dc962b69a7b4bedfecef55d4d0098e002ab8db4ebe2cf933f85a222db067341d24253a0bc3525d25bf571fac6088f148a44aae2b80a0b87e625e8daa60323384491dd1fc0c8c410da7038007d6822c7c2d6066250672894957890d214390ed898d00a6dc71e84963d1884921084bd3eec23609bf610447a85de1f6bf9cb88c03784679493aac9fabd3f0ddc30f057de641cb8f5ba239027e2a654deacba518e900daa2b7daf25678a3246a814558c73ea05ae3f9e04d3754d86dcad198e017a59eed4764520e1f884064cce4a6036a71b3518dd1bcfdd9b13b8d894ef87202e237e1f759eca91816afe452d67f36fe609e462355a51cea6b4eacbc09f7a5ff59a73ff36cd1a24f91b3ccf9559cf64b71e64877983abf5ffd79f562d872edf6a254fffb172fd5f0a5bf894c7c711663845a7ac1f585d052cdd1f384532fc70181442de86637e2ea459be22c44fd911c3e59b2265e7",
      "2bc2ae6df5bbfd03a10432711e61f5868788b3e3a072e12d4ec5a117e591281bb96f48ca6b720a980a97efc0ab86b86fed5bff00b9ac2ca3e1050000",
    ],
    [
      "ETag",
      "OVVH+rgRFCsEqXTb804JLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1592428057699"
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
      "c554514f8330107ee7572cf5754bb639a798f8803a95649b1b60626296a583039940b12d9a69f6dfbd16e678d190b8c417dabbefbb7eb96b3f3e8d568bbcc45940ce5b641547af05f0cd510472ae360e88229102979c6502485bb141d248b127cec7c4b56e57ddf5c8ff306dd7ee3f46c7f38b8b9225fc674829f23e31c2388c210904c64f3a6e55798d65340575a2cf9222cd963a6cef61b9c935ec7a8e3dbdad23290b34327d188fadcbf18854d0b6fdb34840255dea23ff26a1d785518991355b39100287cc877dd739676bf0a5adc72b689a27d011ace03e884a44159670c4599153ce5807531df3b8d33b31fb83fe59f7e474689a3b7ac27c2a6396a98a07977ceb4b2669e2b0773562322cef80976139f1dd284858bb84fa84107a53c57140be73dbf62f447bea0d07356eb55b18b5cac6aa38a9304e60f94fea7825cf145f7833edea991c489ca6acc86443e99bf1bd75c0c6d10d4d9bbeb6bcd1a16485442f34d4f5ecc9c8f5acc9ec4771fc2ef626b8dc481033ced06302b4b37addc1199aa84b764ebd62ca89521955f20274daa7f8c7ba8b25e6429a0830b6c6172c9b87761d050000",
    ],
    [
      "ETag",
      "MRzMSAGb0jEcz9ISI2Xg3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ?",
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
      jobId: "grouparoo-job-94-1592428057699",
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
      "0002ffad946b6f9b301486bfe75720f665939604280488147551ca36a4dc9a9056eb3425060ed42dc1149b4e5195ff3e1b72216a5655d3be25e7f2be8f8ff179694892fc88d350ee4ab28fe3a702f2cd8707e2cb9f4506188a4586dd3d807a879562831e8c3166ae399d5df77bbdaa0a97dd14adb3049a94147900b4bb98b7e29c1419ca096972c1a6ad3755c3d674cd520cb363db552f85241ae2f45128dc3396d16ebbbde768c584c409a00cd35640d68778fb596b6739798080d1f6a96d9b3bd1f6dbc697090910c324ed2de6154441215fc21ae144601cbb43ffcba97c0ba3752be6d5cf38001404a4489940ab64029246382ef2529c2bbdf0200f97cc87bfb5803c7786cec0930693c5d8fbb8426b21b7fa24212a2d9739d02261d2d7d96424ad32ee7e8f28d09574fbdd99393c92930827b0c4e14aea4997527f7c25492bca386e1928894ab71028c369c9e4213f811a09cfeee6e89eb9c2838410418cdbefca96a6d241aaa5d87ee49b41645d187ea480ef5bbe69a00b5f096c1df4d007545760c2bbea4729493553b374a418a16677b4d0ee44bea583ad58916f4318816922cbd70384e49dc2f6709edf39667085694628de0d5abe9db99eb3f4668bf1a0ef39f5b347884ff1aaa23f3df9c991181f529df6adb1bc22ca724c385479a5eed87366fd81e7ded430f8f7358418059bf993f8c22294503876a31cad81413e22a1b81c793a99bb9e3b19f7874785f29399ee2b292ffb79803d9ea9aee66db2d3abae6ea18a0acc8e2ed772dbcf67556e50529c9179de8565f544a37146ed5fe83c77e4ccbdfe68fa1f083545539a8ac65780a76a5df5a2abea2d4551eefe02befbf5ab51b394f916d901cbd70b67f643f496399199410439a4c111e21d8f4a3456e9772c495ebe5f59a2836fad833f7ff00cf3f71dd0a37b9043f5daf1baba",
      "a34a50b50cc3d4f682bc3167af2b4ce560f96a6d092f5843caf6b3a8d65735c8ed095251c329db44397f9d6377fcad846f6c1b7f002ae9a1587b060000",
    ],
    [
      "ETag",
      "tZje1Zi0uyaj5NitI7PRQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1592428057699"
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
      "4d",
      "51",
      "5d6f8230147de75790ee752462d48d253e4c639c0b7393cdbd2cc614b8321c70595b6688e1bfaf1fa0bcb43de7dcdbdb737ab66c9bfca4454c1e6c12a6c96f05acbe49406cd421005e6582cbadc48203b955d52068a2aa4fe1cbb80e2781fb1ccf97e10658f8fa89a7e9d454f1e81b722aebce12497c48218bb9c45f1adb2dafb582e6a06edcef991ea86f683551975a5bad3f16cb45d097728cb5b4defafee3cc5f90566af4be936ba39f72c4308003302822b83ea864788448acb4734ef332038763c522e0ed10d568e48461555286e848caf1468e3bf686a3e1fd607c37f1bcae3cc3888a140bd5b17d2797f90205cd023c29f7c435f130034d185d14e4d0cba79f9094fe4cf3856adad3ceead0ee3a6c560be06f0ca5170edac1807451cc5159152a09c12ad07444e56f3da5a2e5acc6fa071b57fb1818020000",
    ],
    [
      "ETag",
      "wbM5yb6R1JdCGbQerbOVow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "dd",
      "6e",
      "82",
      "30",
      "18",
      "00",
      "d077e9b535c6d285eeae209585c1c0b9b87143a0fb800e23bfdac2e2bbcfecbcc1f945b994308ed9d4367041cf68ceb76c2dd7416b3b8b2e89258afe9d3889d2a1f5b3e531b8461d04cd37119526d594f2a43de8ab5c46ac9a4b1ed47ddc3573942ed23a5fb9a0f4a237e62bded39255037e15c6053f28ad69c6b7cf00409438eafdf65484ec6d212e60be13ccd1f2f854b092dae6d4efaa987f48d510ee36e2e8a4b2f5429b4d84277b1c85ddd28f91efe9447edfbc1a57aa1e3c3217c1b9c62f6885c0746a8031538f19a18cadd07f339be60e1e5707f2010674ff031f4c154205010000",
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
      "Wed, 17 Jun 2020 21:09:46 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7df75720fad8c436be4224abb11cd25ab5718bb1a3aaaad0ee7a209b004bd8255514f9dfbb0bd8863a8af2063373ce9cb9ecbcb6344d7fa4c94ebfd2744cc3a71cb2974f0f0ceb17ca030285ca132fb0937ededc07847e370dd83ed8667f3b9d4cca285aa0398ad3082e39cb3302fc6ab36e8719cb5394317629092fade1a531b47a839ed91d8e479655623944c182268f8ae15e88945f753a071ded90b130029452de262c3eda3bcfbd4e9ab1072082779a693b3213efbc9ff84bc40812942593cdba149173c87c88118d948c137a87af9bf46d8ae27628a39f29014408cb13a1a495348425010df3ac20974cafd228cd85e6e36fcda0afed853df334c2a23c4efc04c570a1ed9040be784941bb75574b6deedcaedce5d49baf1c7f3dfb662fa7edd96ab1593a6bedee9bedda9a40388202ab4db4ebe2cf913f85a222db0eb8a049a1c953de9a12e9adfa387f6384470a45225571a8c2fc7177840cb36be1008f4960f68738e802c6261e0f511f77893580c10e03aa3314ca4a3c4a5862e0606061c3f2c7fd2ef1075637f031ee61df94e0218c8d5160ecf40abd3fd6f237a3026e284f19a75593f53b77eed9bee76e9cd9d4b3eb7507288fc44da9bc5975a31c211b5457fa5e4bce14a51965525431ceb9e3d9ee74e6cdb7351972b7161022f2b27e52db15a088c3098d32392b01d992edd4607467bab46f4ee062537e1c82b88cf87dd4792a4706aaf917b59ccdbf99c7938bd56845399bd2aaaf",
      "3d77ee7cd56bcefddb345b14e56ff03c57663d95ddba971de60daed6ff5f7f5ab51cba7cab953cfde7c6767f296ce1531e1702c82021a7ac1f585d052cdd1f384532fc70181442de86637e2ea459be22c24fd94906e59ba265e72b42c31c19a3fe81500233711ed133078788b3e3a072410c8938f4a23c126523f70d49794d4e0153e1f21d38d510f7ad7deb1fd47ea03fe1050000",
    ],
    [
      "ETag",
      "mLbNp+UhfciK81eVjE83VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1592428057699"
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
      "c1",
      "4e",
      "c24010bdf72bc87a85040d20987840456d8208a5c68321646da750683b7577ab41c2bf3bbb2dd28ba689245eba3bf3deeccbcceeebd6aad5d83a4c7c765163afe1e22d03b13959809ae88d03328b94a425c54402ab6b3628bed06cecb8e3f5f2adebb4dcf7f1a788b369603f4f2e2f7396f4961073e26d29a2380821f225c52f26ae157983253c067da2875116277313d60fb0daa4069eba8e3dba2b2331fa06193d0d87fdabe18015d0aefeb388cf159f9b23ff2661d6995588b115be3a108080c48343d7a9c01578ca36e3953c4e236848cc8407b210d18539bc1098a55c203628d5e8b51ba7edde59ebacdb6c9f777abd3d3d428fab10135df13465dffa0a158f1cfcd023669dfc0e441ee613df8f8205a54b284f88a0775d1cfaec3bb7abff42b4476ea755e216bb9955aaacac4a930ac208e6ffa44e57b2e4f4c2ab6917cfe448e23cc62c5115a56f878ffd23364e6ea8daf44ddf1d1c4b562af242455dd77e184cddfec3f84771face0e26b8da28906381e43109c659a7cd56974cd4647ba75ea376a2d24655220393f638fdb1ee4345b9804712ac9df505565f483a1d050000",
    ],
    [
      "ETag",
      "o6TPkhq8R4TvPzrmuSfIWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ?",
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
      jobId: "grouparoo-job-96-1592428057699",
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
      "ad",
      "94",
      "5b",
      "6f",
      "9b",
      "30",
      "14c7dff329107bd9a4e55a48a052d46529ed22a5a44b48bb699a12630ed40d606a9b765d95ef3e1b72216a5755d3dee05cfee7778eedf354d3347d45d2403fd6749f447739b0c777b7d4d73f2a0f0814294feb76753ecc3ebbab6bebd7b7df2be1dda00731e8f7cb28526473946431d439cd19067e3c9f352246f30c314aeb52b06e77eb6dd3ee181dab65f6bab65de67288c33149574ae146888c1f379b5b8e4644691403ca086f609aececcdfb4e3363f416b0e0cdc3b24d5989375f2f7c12538c04a1697f3e2b21720e6c010922b1c2d86707fea743f90641492392d1f70403c298e6a95068a50ca66948a29c15e252e9491aa5b960defd560cfacc193b434f1b4ee6aef77e891225b7fca021ae2d160c781e0bed6c3ab9d09699ac7e8338f0a576fdc5993ad2c2684862589060a9f5b5136de09e6ada5642590aa4a25c005c90b480f2901f4305457a37831cbd70863b09258284acbf095bf45a5dd4b65ab61ffa3d1c5a47a61fb6c0f72dbf67a223bf856d038cc007545510aa76998f529af602b36375c2200c0cd4b10d3b440636ec16ea9800d8c27ed03543db0edafa4661bdebe7811101a784679493cda4f5ebe9c87316de74ee0e079e53ed3d44728ca725fd61e7072d0939a42aed6b637946943142255471a623d773a683a137baaa60c80b368608e1c7d99dba62218a39ecb3114309086017345087a35f4e66236f347107e3bd4271672eb7915c86fdd8c1ee7baaaa798fd9e15197a7505a1566d7d02bbef5",
      "c71755ae509cbf2073bf31ebed038dda0b6aff4277369e0cfe135fc334fe82b8f9fa59abc8eb72616cd0f4af7367fa5de5163ee59942080c52bc2ff886e7a3124bf71bf6a10cdf6e27952117d4ae3e17d22c5f32e6fbea9841f9ae4952765b0ab6adaedd6d6f05652213cf227aed96b98d78b6a1542d482015db59949baa1ce4fa0029afe014692a5cbe4377e49e17f0b575ed0facb4623766060000",
    ],
    [
      "ETag",
      "0jkGCpBNkW8xXzktThawtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7de72b48f73a123053c7121fc6623617e71cd3a785980ad78a032e6b8b8b33fcfbda02ca4bdb73cebdbd3da767cbb6c9775a24e4c126db94fd54c04f370ce4873e8420aa4c0ab595580820b7ba1a2465ba7abc676fafa2c8c45fe22ddfdd1573037a6493495325e23de454d59d1552789742960885bf0cb65bde6805cd41dfb8d97033d0dcd06af2541a6db6584d9fa7615fca3131d2623d9f3f06f32969a5daec915a6bf394036e43d801872286eb834a8e0788e5cc3817342f337004563c06d10ed18d8dcc385625e5888ea21c7fe478437f7037b87787e391ef77e519c654a658e88ef527b9cc97286916e2af764fbc261edec0268c2e0ab2ebe5d34f484947dd3c2017aa6e4f91d5a1e83a2c3849104b8eca8b00e3c0255d144fa8ad4a9d84e415183aa6eab75e52d972566dfd035003fb2e18020000",
    ],
    [
      "ETag",
      "7hgMJsnlszd1PO0Tg0Bavg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfdb7243400000d07fd9e74c267643e85b42dd854d59e2c5acb554508a9148a7ffde4ccf1f9c1f4019e3d394cd7dc3bfc01b582954b66cebf4f2e979670e3ce2b325e2598ffb52ad7ca6682ad20a01b5df0d3c56f75436e96752c43872a4c43928a397ed0c0d935c4fe749eec6d6206db92425cdc3e660fa81ba8f49426a2b5ae68f8e40537a879571439ed76476c0e44021bb708f907e71c3a98bae69175bba70c589bdd2c752e95538155242adf53c1c051372cbc695ef9a24e6e2334afd26736f6e141775ae166e0f36803f867ae45356bf664854940df86f66f33af0d7f5c4e9c847f0fb07a9d02fa805010000",
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
      "Wed, 17 Jun 2020 21:09:47 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1592428057699",
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
      "ff8d545d6f9b30147dcfaf40ecb5f9200921548ad62ca12d52423a425a6dd3848c6353b78009369dba2aff7d36900496aaea1bdc7bcfb9e77ef8beb514457d26c956bd54d48084bb1c65af5f9e68a05e480fe220941e7c677cfbb99aed6e12106a399ceb4efcf7369c4cca2852a01988d308b519cd3388d8e566dd09339aa720a3b42d08dba6d1d674b33fec8f7bba3132cd12cb5084172479960c8f9ca7ecb2db3de8e8849486110229611d48e3a3bdfbd2efa6197d4290b36e336d576462dd8f137f8d28049cd064b25997227286321fc5804452c609bd0dae9af41d02e24e28a25f084400429a275c4a2b69204d3009f3ac20174c6fc228cc85e6e36fcda0aead8535f31448a33c4efc04c4e842d9020e7cfe9a22e5da5d2d15dbb95eb9cba967af1c7f3dbbb596d3ce6cb5d82c9db5f2706bb996c24110a102ab4c94abe2cf113f85a222db16314e92429327bd3525c25bf5d17e6784470a492254315485f9466f04b471cf0c7060403c1ee801eea1201807860e06410f9a4334dc0608d4190a65251e2434e9438c020cb10fc603ec0f3538f24d23307dbdaf8df000eb7a7f60aa157a7face54f46389a13965246aa26ab0faeed59bee76e9cd9d4b3ea756390477c5e2a6f56dd28878b06d5957ed49233456946a810558cd3763ccb9dce3cfbbe2643ecd6028500beae7772bb3088183aa1412666c551b6a45b3918d5992eadf9095c6ccadd218889885f479da77244a09c7f51cbd9fc9b793cb1588d5694b329adeada736de746ad39f7efd3dc83287f87e7a532aba9e8d6a3e8306b70b5fefffaddaae550c55bade4a9df3796fb43620b9ff4b808a30c25f094f513ab2b81a5fb13a748841f0e834488db70cccfb8308b5704d9293bcc50f9a648d9f98a501b1bbaae1d",
      "080530e3e71123d338449c1d07990bc528e1875e9447a26ce4be2129afc92960325cbc03a71ae2beb56ffd03344e41ebe1050000",
    ],
    [
      "ETag",
      "fP7BZOCqGnag1ucD5NmzHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1592428057699"
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
      "0000000002ffc5544d4fc24010bdf75790f50a0918e4c3c44345d42a229672d110b2b6d35a6cbb7577ab41c27f77765ba0174c1349bc7477e6bdd99799ddd7b551ab91f730f1c8798dbc86c147067c7512807c521b1b441649814bca1201a4aed82069a0d8d24abc6fdae94ec60308ede1fdd3f3ddec2ab8b8c859c27d8398226f8d11c67e089127307ed171adc86b2ca131a8135d166571b2d0617d0fcb55aae1a9635be39b3212334f23e3d968645e8e86a48036f5c3221e9574a18ffc9b845ee746214696ecd5061f38242eecbb4e395b822b2d3d5e41e3348286601977411422aa308703ceb29472c61a986af4bb8dd659ffb47dda6b9e753bfdfe961e3197ca9025aa6236253b7dc9248d6cf6a5464c3af91df03ccc27be1d05f14b97509e10429faa38f4c82eb7a9ff42b4c64ea75de216bbb951aaacac8a93f2c30816ffa48e57f246f18557d32e9ec991c469ccb2445694be1e3d9a476c1cdd50b5e92bd3191e4b5648f442455dc77a184e1df36172501cbff3bd092e5712c48433f49800edac56b3dd431335c9d6a903a69c28955125cf40a75d8a7facdb5062cea791006363fc0030a7b2cd1d050000",
    ],
    [
      "ETag",
      "tIndza67PNCeiREKQZJUDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` > ?",
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
      jobId: "grouparoo-job-98-1592428057699",
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
      "c5",
      "94",
      "5b",
      "6f",
      "da",
      "30",
      "14",
      "c7dff91451f6b249059270495209750cb20d894207a1176d13388e93ba24716a3b7455c5779f9d04082aabfab627c8b9fccfef1cdbe7a5a628ea1a27be7aaea81e0e1f33449f3f3c104f3d931ec441283d4f09b76e93fe9d17de0ed7ba41d7fadd9f2f61af5744e13c9b81388d509d918c42c4ce17f346484996024a485d08d66dabae776ca36d585ac7ecda7691cb50148c71b2960af79ca7ecbcd9dc71344242c2088114b30624f1dededc18cd94920704396b1e976d8a4aacf976e18b8840c031497a8b7901913144972806389218876cdffb7c2cdfc0206e84227a83210210922ce112ad908124097098d15c5c28bd08a330e7ccfbcf8a419d3b6367e02a83e962e27e5c8158caad3e298029cb25452c8bb8f27536bd5456a9a87e0f18622be5e6bb337384859200476889fd95d2532e94fe64a8282bf9f52bd3b416522e72a6bc9e8f18c7494ee5022f421516e12d27393a71887b092902b80028c396a6d605baa5d95ee09930b05a1d2fd090e7599ed9012d4f83761bb57d0f81aa0297b58b7c909044d3da5daf63e8a00b2dd3f65b96e7832eea1a9609025f78c4afae1b36544b85edbe9f278a391a62961286cb51ab37b391eb2cddd96232e8bb4eb5f70088390e0bfae3ce8f5ae2624855dab7c6f28a28a59808a8fc504713d799f507eee8ba82216ed81885003ecf1fe51d0b40c4d0211b5010238ee825f1e5e1a857d3f9c81d4d27fdf14121bf3457bb4826c27eee610f3d55d5dce7f4f8a8",
      "8b5328ac12b3db562bbeedd949956b1065276436a559d58f346a27d4fe2b5de71f78e5bfdfb58ab82ab64589a5fe5838b33b999bfba46786024451020fe5def1746462e17ec73214e1bbd52433c476dad7675c98c52b86ec501d5254bc691c97bde682ba6d98666b272812297f15d1d26c6317f16a3dc95a284609dfcda25853c520b747485905274f93e1e20d4e46936f397c6d5bfb0bb462567163060000",
    ],
    [
      "ETag",
      "wnt8XnAYbgXDk12rk1YxBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1592428057699"
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
      "4d",
      "51",
      "d1",
      "4e",
      "83",
      "30147de72b487d54e2463605933d3825db2259145d666296a56317640217dba292857fb72db0f1d2f69c736f6fcfe9d1304df295e47b7267925d127f97c0aa8b18c48b3a04c0cb5470b91598732057aa1a048d5535bb5cadf361f418bfd3bfebb9e316b09e3dc5934953c5c34fc8a8ac3b4a24719440bae7127f686cb6bcd6729a81ba71bb657aa0bea1d54455686db17cf3665ed09732dc6b69b9f2fdfba9ef9156aaf5be916bad9f72c05d001130c843383fa8607880502cb4734eb322058b63c942e0ed10d5d8c831c3b2a00cd19294e53ad670ecda23db198c6f6f5cb72b4f31a422c15c75ac5ec969be4041d3007f957b326ce2610d6cc2e8a220512f9f7e4252fa51cd363951757bda181dda9c874d2b01fc99a1f4c2413b183903d285f180caac5059085682a6432aff6b9e08c94534e560d4c63fbed3a9661b020000",
    ],
    [
      "ETag",
      "r+UWn1fDgXax/H89peWGKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4e",
      "83",
      "300000d07fe9f358101c50df444869502edbb8eda5e94a9740e56241812efebb8be70fce1d50c6f834917910bc072f60a306dcb37d3838ae5a58ecde46e567a52ed8b2a1f37b323aa2c32e19b6a5a4f660ab36307b75103eba3c59bd6147353ee576b89e943370447e8e41e83695d2fc7025ee2b31bea455cbee4d87972083f88a3ca8ba189a346116b6645d9529c428c6293dc67171dee2b06291f3e9a10faff373de47b4113069cb6b9508f4ac15060a5bbd2a2a0abf6ff95c6a704ad1880732292632b0037c1d1bc927d23c66e601c21df86f92791bf9e3ea722ab904bf7fe04b4d7005010000",
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
      "Wed, 17 Jun 2020 21:09:53 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1592428057699",
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
      "54",
      "6d",
      "6f",
      "9b",
      "3010fe9e5f81d8d7e685bc112a456b94d23552425620ada66942c639a85bc0149b545d95ff3e1b48024b55f51bdcddf37277b6df5b8aa23e9364ab5e2aaa4fc2971cb2b76f4fd4572f6406380a6526b80d749fc1ee2f436b3775b4783c4077b3e9b4ac22059aa1388da0cd689e6160971ba71366344f5146695b10b60da3ad8d8cfeb03fe98df4b16194580651b024c9b36478e43c6597ddeec14727a4348c00a58475308d8ff1eeaedf4d33fa0498b36e53b62b9458f773e1ef11c588139a4c374e6922679079102312491b27f4d6bf6ad277088a3ba1a8de110c08639a275c5a2b69304d0212e659412e98de4550840bcfc7df5a4075cca53977154ca33c4ebc04c570a16c11471e7f4b41b9b1d72b6561ddacedd5cc5dac2dcf99df9aab5967be5e6e5696a33cdc9ab6a970e447506095a97255fc59e2a77054a86d817192149e5c99ad3911d96a8e8b0f5678a49024c21583aaccd37b63a44d7a861ff83a0e2683911ff4c0f727be3e4203bf878d210cb73ea03a43e1acc4a3440c6a3c196b5a0f79c13008bc210c74cf1feac8032d08f0d0c7b8a7815aa1f7c75e5e33c2e19ab09432520d597db017aee9b9f6c69acf5cb3de7780f2885f97ce9b5d37dae1624075a79f8de4cc519a112a4c15eb5c58ae69cfe6eee2be66439cad258408bf392ff2740528627042a34cec8a43b6a25bb918d59aadcceb13b838293f0f454c54fc3efa3cb5230ae5fe8b5ecef6dfd471c5c16a8ca2dc4d19551dd75e583fd45a72ff31cd3d8af20f78765558",
      "4dc5b41ec5845983abf5ffd79f564d431577b5b2a7de6d4cfb97c4163999b121800c127c52fdc2d195c032fd85a748941f1e0689106fc3519f711116b708b3933acea0bc53a49c7c45a81983497f742014c08c9f5718fa51f2ec71905a1043c20fb3281f897290fb86a5bc66a780c972710fac6a89fbd6bef50fa2dd79c7e1050000",
    ],
    [
      "ETag",
      "fHf7bsevzsaOTpS1m63aQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1592428057699"
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
      "5d",
      "4f",
      "c230147ddfaf20f515222a4c66e2c3f850490011e69321a46e7773daadb3ed30c4f0dfbded86ec45b344125fd6de7bceedc9bdedd9a7d56890b7380dc855833cc7d17b0e627b12817ad09b05c89c29894bc65309a4a9d9a068a4d9aac35c196dec8bd3a41bf6e6836164f7fad1f575c192fe0b2414799f18611cc6c00289f193891b65de60294d409fe8739627e9da84cd03acb6998197de623cbbad22090f0c327b9c4cdcfe64444a68d7fc5924a08aaecd917f9330ebca2ac5c82b7f5e400802521f0e5d6782bf82afc666bc9226198396e4b9f0419622bab08023c1f38c0ace5b986a394eebaceb9c77ce7bedeea5ed387b3ae33e55314f75c5e3927ceb2bae285bf00f3d62621777208ab098f87e1424ac5c427542086d74711c90efdcaef90b713cf3ec4e855bee5656a5b2b62a4e2a8c19acff491dafe485e20bafa75d3e932389d384e7a9aa297d33b9778fd838baa16ed343d71b1d4b562af4424d5d6f3c1d2d3d773aff511cbfab8309fa5b05722e387a4c8271d659bbd34313b5c9dea903ae9da8b45195c8c1a47d8a7facbb58612ea44c82b5b3be00d940ab0f1d050000",
    ],
    [
      "ETag",
      "t4lAsgv63/m5f8PCDg68Bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ?",
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
      jobId: "grouparoo-job-100-1592428057699",
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
      "ffad94ef6f9a4018c7dffb5710f6664ba782059526a633966d26163bc436cdb6e8713ed0eb80a3dce1d234feefbb035448bbad59f64e9f1fdfe7f33c0ff73cb51445fd41928d7aa6a83e091f72c81edfdc535f7d2f3dc051283d973d7f7b0bb7cb88a7f603388e7772854ec6a35119458a6c86e2348236a37986819d2d179d30a3798a324adb42b0ad6b5a5b37ad9ed11b6ae6a06f59653283289891e48794b8e33c6567ddee1ea413521a468052c23a98c6077b77dbeba619bd07cc59b759b72b4ab1ee5f2a9f4714234e68325a2e4a8a9c41b682189148721cd337fe87a67e87a0b8138ae82dc18030a679c2255b298369129030cf0a71a1f4248cc25c401ffed60ceac29ed9134f99cc978ef7768d6229b77ea720a6ac5619b03ce2ca47777ea9ac5351fd0e31606be5e6b3eddac292d18044b0229bb53252ce95b173a11ce3d6cab75cd34e41392fc88aaa1b609c24059b87fc086a44c25b0d74fac2320f12520471215f85ad065a1fe943cdf2037f8083e1a9e9071af8fed01f98e8d4d7b06580b1f101d515b8ac5de6a384267adf30873de41b9a8fb541d0d3351c18fd7ee0eb160a02809e6601b67443ad1476877e7e6684c305612965a41ab87ae34e3d7be5b94b6732f6ec7aef0112d3bc28e99b9d375ae2624875da3f8de519519a112aa08ad54e1dcf76c7136f7a5dc310dfd90c42841f170ff24b0b50c4e0988d32140387ec926ee472d4abf962ea4de7ce787654283e9dab7d2413615f0fb0c79eea6ade63da5c75b985d22a31fb87d936ba69aa5ca3287f41665b9955bda1d17a41ed5fe8169e3b753efd07bc712a16f71bc4ead7f7564d5f1587a34253bf2c6df756e6163ee97121800c127cacf88ae723134bf76b0ea388df5f2999220ed501807161164f19",
      "b363799c41f9b0495caea314d42d63609a7b419198f16711a6d61fec239e5d2a590b6248f87e18e5c52a27b96b20e5359c224d868b87e8541bdcb576ad5f4cf089de70060000",
    ],
    [
      "ETag",
      "M2bvYeYUltpEqeNNT+Pa+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1592428057699"
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
      "000002ff4d515d6f8230147de75790ee75246af06b890fba984d439c63eacb624c850bc3152eb6659b1afefbda02ea0bed39e7dede7b0e17cbb6c9779285e4c926fb243e16c04f0f31c8777df141144c0a75e49809208fba1a248d75f56ac3c4f2dc9fe7b3bfcd318ec6696ffee68d47a3aa4a045f905255775148e12801160a853f0db66bde68194d41bfb8db7133d0bc506bf2941b6db6584d5fa6febd946268a4c5daf3c6136f4a6aa934e7567d4bb3ca01f73e44c0210be0b650cef100819c19e782a639034760c10310f510dd58c931c722a71cd15194d36eb59c7677d8713b8356b7df1b0e9b7a8601950966ba65fd41ae0b489494f9f8abed9376950faf609546930589ee02ba8f48493fbad92557aaac6f5bab41dbdbb0c949825872546604180beea04f9a349e51bb953a0cc90b307440d50f7b4da4e222ca0458a5f50f1178bb851c020000",
    ],
    [
      "ETag",
      "TVlsPz7JpIxVqgfAm6JOLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfd97282301400d07fc9b338056b0c7d934534b28915d1970ce29de006318102edf4dfebf4fcc1f94179518052aca96f50a10f34e486392ec6eb9a58df1d50819366edc13eee92263c2bb500ebcef467bbbc76a7b2ea04ff541b4a163b0d1f96962f939b62dc25d51d3fc268d5191ee069781a2c4953c1e77696ada95f11771fbd3b9ac938ecf8f1ee97db389bb8789a5fbfaaed5be0e95a1bf5ad4eaea2979ad0cb15d18d63c0d562bed39cdea6b3d945b1f2500c387db81e3fa7c04f07c3a1b908745ba8a7ea098e798d46087a7191a0d8e5359b4c4d7384fe9bac1904bcae16e41224fafd03f52bf42e05010000",
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
      "Wed, 17 Jun 2020 21:09:55 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d5461739a4010fdeeaf60e8d7a8684425334e639534cc283688c9643a1de63816720972843bd2a619ff7bef00156aa6cd37d87defeddbddbb7b6b298afa449240bd50549f44cf3964af9f1ea9af9ec90c7014c98cb578d4e6babe48ef875fae210f7fe737e4d774322951a46033b44d6368339a6718d8c566dd89329aa728a3b42d04db3dadd7eee9467fd01f6bfa6868182599411c2e48f224251e384fd945b7bb37d289288d624029611d4cb78778f7a5df4d33fa0898b36eb36e579462ddff54fe1c538c38a1c964b32e5de40c320fb688c4d2c7911ef8974dfd0e41db4e24d02f0403c298e60997de4a194c9390447956880ba5371114e1c2f4e1b71650d7e6c29cb90aa671be4dbc046de14c0910471e7f4d41b972564bc5b2af56ce72ea5a2bdb5bcfaecde5b4335b2d364b7baddc5d9b8ea970e4c7507095897259fcd9e2a77054540b807192149e5c99ad3911d96a90d63b4b3c484811e18a4105f346da10f5c69ae187fe0887e373dd0f35f0fdb13fd2d1b9af61630083c0075457289c957c94d0449708e35cf3703fe87b83f158f3100c0c6f08c3400ffd611f8d74b562ef0ebdfccc088739612965a41ab27ae758aee9b9cec69e4d5db3de7788f298cf4be7cdae1bed7031a0bad37f8de4c4519a112a4c15ebb46cd774a633d7baadd910676b0111c2afeb6779ba42143338b2512676c5215bd2402e46b5a74b737e241727e5db1ec404e2fbc1e7b11d0194fb2f7a39d97fb38e2b0e566314e56ecaa8ba761dcbfeaad692bbf7656e519cbfa3f35285d5544ceb414c9835b45a7f7ffd68d56aa8e2b256f6d49b8de9dc4b6e9193190742c820c1c7aa1f38ba9258a63ff21809fcfe659014f1381c0c302ec2e21a61762c8f33282f1529475f09f60ca1a8ef050531e3a788b17e409cbc0eb2166c21e1fb6194af4439c95dc3525eb353d0245c5c04bbdae2aeb56bfd01379db4c8e4050000",
    ],
    [
      "ETag",
      "ILj0D55LpY6BHeufzuQixA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1592428057699"
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
      "c554d14ec230147ddf5790fa28244000c584075004124484f1208690baddcdc1d6ceb6d310c2bf7bdb0dd98b668924beacbdf79cdbb3def6746f954a641b3097dc94c86be0bf272076173ea8273d99814c42257188399340ca9a0d8afa9a7d3bec2f8346b33eb87b5c5e3acf62c97a6ceb773a294b3a6f1051e4ed31c2d80b207425c62f262e657983311a815ed1e16112b1b509cb2758ed6203cfedd96832c82311770d32598cc7dddeb84f32e850fe59c4a58aaecd927f9330e3cacac4c886bfcec00301cc81d3ae63c137e0a89169afa4511c4245f244382033115d98c2bee0494c05e7154c556ad55aa5d66cd71bf5eb6af3aad56e1ff92177a80a38d3258b39f9fe01c5150d67fc53f798b4d243106998b6fcd80be2e54e21df22843e7471e092efdca1fc0b7134b15b8d1c379badac5c6561556c951784b0fe27753c93378a57bc9876764fce244e239e305550fa7efcd83de3c6d10e45377dd7b5fbe792950acd5050d71e3df4e776f761faa3387e572713f4760ae4547034990463ad5ab5718d26aa92a3556fb9b6a2d24e5522019376283e59c34061cea3a104eb607d013618ad231e050000",
    ],
    [
      "ETag",
      "CHEZi452GDOZ+cYrZnBnkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ?",
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
      jobId: "grouparoo-job-102-1592428057699",
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
      "ad",
      "94",
      "ef",
      "6f",
      "9a",
      "40",
      "18",
      "c7",
      "df",
      "fb5710f6664ba6820a4213d319cb3613ab1d629b655bf4381fe8b5c0d13b70eb1afff7dd012aa66e6b96bd83e7c7f7f9dcf3dc3d4f0d4551ef49b256cf14d527e1430eecf1d51df5d5b7d203190a0bcf8f7cf273d8bd34f2c5e66271a52736bef3c3c1a08c22453647711a4193d39c61e0678b792b64344f11a3b429049bbad669ea86dde9752ccde89bb65d267388820949eea5c46d96a5fcacddde81b4424ac308504a780bd3786f6f6f3aed94d13bc0196f1fd76d8b52bcfd97cae711c5282334192ce62545ce812d214624921c87f4b5ffee58bf4550dc0a45f486604018d33cc9245b2983691290306785b8507a1246612ea0f7bf35833a7726cec85346b3c5d47bbd42b1945bbd511057964b063c8f32e5bd3bbb5456a9a87e8b38f09572f3d1711d61613420112cc97aa50c94736538bd500e712be56bae695d50ce0bb2a2ea1a78469282cd437e043522e1ad1a3a3e31ccbd8414419990afc2967dcd44baa5d97ee0f77160750d3fd0c0f72dbf6fa0aeaf61bb07bdb50fa8ae90c9da653e4a68824cdc0b0cd3ec60f051b7631876cfeafac8824e5ff775cbb04d5d07b36fab95c2767f9eef8c647041784a39a91aaedeb863cf597aee623a1a7a4efdec0112ddbc28e98f4f7e74a44c34a94efba7b63c234a19a102aa18ed78ea39ee70e48daf6b18e29e4d2044f871fe206f5a80220e876cc4500c19b04bba96c351af66",
      "f3b1379e4d879383427175ae76915c847dd9c31ece5457f31ed3e351975328ad12d3eca935dff6ed49956b14e52764369559d58f341a27d4fe856eeeb9e3e987ff80875231b8df20565fdf1a357d552c8e0a4dfdb470dccf32b7f0498f0b013048f0a1e20b9e8f4c2cdd2f598c227eb7a5648a58547b009e09b378ca981fca6306e5c32671398e5250b76dd3dc0b8a44963d8fb0746d17f16c53c95a104392ed9a516eacb293db23a4bc8653a4c970f110a7d504b78d6de3179f9e90fd70060000",
    ],
    [
      "ETag",
      "bxuLzA3M5uUvDUP1n9cjbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:09:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1592428057699"
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
      "4d",
      "51",
      "d1",
      "6a",
      "c2",
      "40",
      "10",
      "7c",
      "cf5784eb6b0351b49a820f55ac1544dab4524a1139e326c65eb2e9eda54524ffeedd25515f723733bbb73b9393e3baec27cd77ecd165db34f92d411eef12506fe612029542913e0acc09d8bda906c513531d0c40d1d75ed0aac74b7afef467be9c24a3515d45d11e32aeeb4e1a691ca72076a4f1b7c56ec35b2de7199817371b6907da171a4d1d0babcd971fd3d934bc9532dc5969b95a2c9ec68b296ba4ca9e6bfdadec2a07dc861083843c82eb4285c403446a6e9d13cf0a011e612923a0668869ace54462597089e869caebf85dafd30fbabdeed0ef0f1e82a0ad17187195626e5a56efecb28042c54588ffc63eebd4f9c81ad669b459b0f826a0db88b4f4679a7d76a1aae6b6765ab4be0e1b1f15d0ab446d86c05ae80d07ac4d6382c6ad3261285982a523ae7fd84baa34177341e054ce19bd0502981c020000",
    ],
    [
      "ETag",
      "97etsYhlsU4ausFW0G0rCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d07fe9b318045a606f161d0ee31a8888f2d220148b4c2e0556cbb27f9fd9f983f303b23c67c340c7b6660d78032a33dc65bedcb70e9e6511b6975463d77a8ef68a622ec7ea9122828258d7c6305b7353f40982f75380cbae39d7bd6687cf6848cb043adb09ca963706df1cdfabeea207ad0ba16faca94adb60134d7165d24ef02a0b0e507c73b7e8bfd2435e38964fb4c7ed6ab330f47969795e8d9f9367d7d3ea642a46787ed35144d47824db92dd5712cf48c6d66e878a86c846351826ecfc493f62b000ecd955820db47acd4ce8ba0bf0dfa4a3ead8eb8a59269800bf7f3b148a1605010000",
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
      "Wed, 17 Jun 2020 21:10:00 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1592428057699",
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
      "54",
      "6d",
      "6f",
      "a2",
      "4010feeeaf20dcd7aa882f481373354aaf2615ef106ddacb852ccb80db224bd9c55edbf8df6f7951e16ceefa0d66e679e699979df78624c94f24f2e44b497649f09c42f2fae591baf245e6018e82ccb37e7bdbac9f92df7d7ccf860f0fbbe966387d79198d8a2892a319dac62134194d130cec72b56c05094d639450da1484cd8ed26d76fabada53874a5f1be87a016610fab7247aca28369cc7ecb2dd3e086905940621a098b016a6dba3bdbd53db71421f0173d6aee76d8b54acfd9fcc5f438a1127341aad96858a9441e2c0169130d371827bee559dbf45d0b61588e81dc18030a669c4336d050da6914f8234c9c905d3bb300a732efaf85b31c84be3d698d812a661ba8d9c086de142f210470e7f8d41bab6167369665e2facf9d89e2d4c6739b931e6e3d66471bb9a9b4be9eec6b00c892337841c2b8da4abfccf143fb9a23c9b078c9328d76467de8a12e12d1b39fb6088478a8c44a8625086399a32409da1a2bbbeab617fd8edbbbe02ae3b74b53eeaba0ad67bd0f35c4055865c598147118d401f78b8df01a7879581d3034f758658c18eaf0d5455d3ba3d0d54b944ef8fb5bc2484c394b09832523659beb366b6e1d8d6ca9c8c6da35ab78fd2904f0be5f5aa6be570d1a0aad27fb5e44c519c102a44e5e39c99b6618d27f66c5d912176eb1602845f97cfd976f928647042a344cc8a4332a75e3618d91ccf8de9099c6fcaf7431013113f8f3a4fe588c06cfe792d67f3afe7b1c562d55a51cca6b0ca4bdb9a99dfe48a73ff31cd1a85e9073cbbd22cc7a25b",
      "1bd16156e36afcfdf5ab51c9218bc75aca937fac0ceb3ec3e6becc63810f0944f894f513ab9b010bf7678e91883f5c860c228ec35100e3c22c9e1166a7f43881e25191a2f525a1aa283dbd732014c0849f470c74e51071761db25cb085881f9a515c89a293fb9aa4b422278765e1e22198e514f78d7de30fbc20f93be4050000",
    ],
    [
      "ETag",
      "VzzhVkrx5cYs8ZZvDh8Dww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1592428057699"
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
      "c554c16ee23010bde72b90f70a12b4c0c24a3dd096525a0a6d082b5515426e3281b44e266b3b5ba18a7fdfb1134a2e5d452a522fb167de1bbf78ece777a75663af5112b05f35f61cadff6420b73fd6a01fccc4059509ad68483151c0ea860d9aaf0dbba36f479bde85f89d8e1ee1e6d2dd2ede66f8707696b394bf819813ef9d228ac30844a0287eb271adc85b2ce13198157d14599cac6c583fc07a9b5a78eeb9e3e9a88cc4185864ba984c06e793212ba05dfd7391806bbeb24b7e4dc28e4ba710632ff8ec420812121f0ebb4e25be80afc7b6bd8ac7a98086c24cfaa00a115398c36b8959ca256283528d56f3b4d1eaf44fda27bd66e767b7dfdff305fa5c47989892c59c7dfc8046cd858b6fa6c7ac9b1f82ccc3bce5fb5eb0b0740ae51611f4d7144701fbc8edeaff218ea75eb75de216b3a553aaacac4aad0a2301ab6f52a733d970bae2d5b48b7b7224711e6396e88ad25793d9e0881b273b54ddf4e5c01b1e4b56693243455d6f7c379c7b83bbfb4fc5e9bb3c98e07cab41dd4b249329b0d66a35db3d325193edad7a81c68ada3855cb0c6cdae7f4645d479a7221170a9c9df30fa3de8b871e050000",
    ],
    [
      "ETag",
      "5tKGh8ClVpGYeJDRyUwOoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` > ?",
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
      jobId: "grouparoo-job-104-1592428057699",
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
      "a5",
      "94",
      "5b",
      "6f",
      "da3014c7dff91456f6b249030c21042aa10e51d665a2d041d26a3781134ea84712a7b6d3a9aafadd67275c12b5dbaaed2d3997fff9f91cfb3cd41032b634591b27c8f0e9e636037effea07f38db7da03926cb4e7cbf6a3696fcdf39635f7bcad738927de4d673818145134cf16244e23a80b96f100c489b7686c38cb52c219ab2bc17a0b77ea2dabdfeeb47bd8b2bbfd7e912c200a2734d96a891b295371d26cee411a1bc6361190948a46c0e283bd79d76ea69cfd80408a66b56e539512cdbf543e8d58402465c9c05b14149900be8498d048731cd3d7febbaa7e8392b8b151d177340012042c4ba4662b640296847493f15c5c293d28a332e7d087df92c1588c27e3918b46336feabe5e9158cbadde2022d072c941649144efe7b30bb44a55f51b2240acd0f587f17cac2c9c853482255dafd0009da2e1f40ca1d59a4858a16f19c626a0d39c2aafb80621699273b9c48fa044a3bcbb663acf0cf220a145885408bbb0a58dbba4d5c37d3ff4ed20ec99961f62f0fd9e6f5bc4f471d0ef4067ed03292b485dbbc827094bd676b7d56a5b56b7e5fb9d7ed706e813cb0a42d233438cd567d8b33a21e9183b85c7c3797e722ae18c8a9409ba6bb6713d77dcf1d29d7bd3d1d01d97cf1e12d5c9b382be7af2ca91a46a5299f64f6d79429472ca14543e5667ea8ee7c391eb5c9530d41d9bc08604f78b5b7dcb4212093866134e6290c02fd85a0fc7b89c2d1cd7994d8793a3427e6d2ef79142857d3dc01ecf545673efd3eaa88b2914568dd93df4b6729aaaca1589b26764ee7666a355d1a83da3f6",
      "2f74677a88ff0fd7c66d5cc76db5017e43b9fbfa5e2b1531d4ded8d1199fbcf1fcb3cecd7dda3387103824c1b1ec0b5e904e2cdc2fd98b2a7ebfa4748ada530700219559bde6401ccb071c8ab74de3622285601b9b5dcbdc0baa442e9f46d87dbc8f78b2a8742d882191fb66140babe8e46305292be1e4693a5cbdc5a9333dcfe16b8fb55f72cd48446f060000",
    ],
    [
      "ETag",
      "ZkJ37k3G15RUUkIP0LUh4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1592428057699"
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
      "4d",
      "51d16e8230147de72b48f73a1225ea70890fba984d43ccc6e662b61853eb85e1808b6d9963867f5f5b407da13de7dcdb7bcfe164d936f98eb31db9b7c9368e0e05f0f22602f9a22f01882291421d396602c8adae0649235dbd7a5ff9ee91332f3a30f76f3ec83ee6f2773c1ad555827d414a55dd492185c318929d50f8d360bbe18d96d114f48b9b0d3703cd0b8d26cbdc68b3c5dbf4711a5c4b29ee8cb458fafe78e24f492355e65cab6f6556d9e336801038640c2e0be51cf7c0e4cc381734cd137004169c816886e8c65a8e381639e5888ea29c6ea7e774fb43b7e77a9dfedd60386ceb136454c698e996e52b392f2051d224c0a3b64fba753ebc86751a6d1624bc0ae83a2225fde866979ca9aab9adad16ad2fc326a504f1cc519911602cf4bc0e69d37840ed56ea30242fc0d08caa1ff6144bc58534116055d63fb6127e2a1c020000",
    ],
    [
      "ETag",
      "XVXL2wrc8gqc2zJ6nZJtxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fc9591d041d486f0282d05a2814592e19c8842d84bd6c4effbd4edf1fbc27883126c380c686921abc8135e6e1011fde1b49dee67409f82a37aabd9843b960e29a3dfaaba02ab26845f88b4d1774cf17ae74d19458cdfdac63eda3f344f7d80bcea649e2143235536cf6a0615dcf15cf21cc39754fa34f41f12336eb2d246502a360159864a4be6b4eddfec48212a2813ab656fed8992546c62de4d5ee127847ca9bba3e12cfe2bac8b9a6565051ae55e6867e9353b99152b9258aa9faf6925c580676802c6dd1930115af9970867007fe9b685c5bf2baca24ee490f7eff002632ada505010000",
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
      "Wed, 17 Jun 2020 21:10:04 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1592428057699",
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
      "ff8d545d6fa240147df75710f671aba0826213b335966ecd2a56c0b69bcd860cc340a7450699a14ddbf8df770650616d76fb06f7de73eeb91f73df5b92243fe12490cf25d9c7d13647d9eb9747e2cb67c283188884e765fae66cd1e38fe516a45f6f82fbe8ed7eb55a8dc765142ed0146cd218b529c93388e8f9dae94419c9539011d2e684edaeaab7bbfaa8a7f50c551f0e46a3124c511cce71f224281e184be9b9a2ec85742242a2188114d30e249b835d79ee2969461e11645469e655782aaafc27f3b79840c03049c66ba754915394796803702c741ce1817fd1e4ef60b0e9443cfa194304202479c284b692069224c4519e15e49ce99d1bb9b9107df8ad1964c79c9b53578224ce378997800d3a9302c080c75e53245dd9cb8534b3ae96f662e2ce9696e74cafcdc5a4335dced70bcb91eeae4ddb9418f0635460a5b17451fc59fca75054640b1065382934b9c25b53c2bd5523671f0cf1402148b82a8aaa306fa80e40d750477ee80f6168f4753f5491ef1bfe50077d5f85230d69818f409da15056e241421243eb424d1df4bcfe70d0f5b4d0303c7f14e85ed8d7d51001d0d5fbba5ca177875a5e32ccd025a629a1b86ab27c67cf5cd373edb5359db866bdee10e431bb2c9537ab6e94c37883ea4affd592134569860917558c7366b9a63d99bab3db9a0cbe5b731401f8ea6cc5768520a6e88806199f1543d982046230b2355998974770b12937fb20ca237e1d741ecbe18162fe452d27f36fe671f962355a51cea6b4ca8e6bcfacef72cdb9fb98e616c4f9073ccf95594e79b71e78876983abf5f7d7ef562d87cc1f6b254f5ead4dfba7c0163ee1b151883294c063d64facae0096eecf1c231ebfbf0c02c28fc3410065dccc9f11a4c7f43043e5a3c265eb2bc2",
      "9eaa0d87fa9e900333761a618cb47dc4c97510b9d006256cdf8cf24a949ddc3524e53539054c84f387605553dcb576ad3f5bacd929e4050000",
    ],
    [
      "ETag",
      "wCzSqejKOqap+PdXgzXQQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc554d14ec230147ddf5790fa0a71202098f830149508a86c3e1942ea763786db3adb4e45c3bf7bdb0dd90b668924beacbdf79cdbb3def6f4cba8d5c84b9878e4ac469ec3e03503be3e0a403ea8c90c4416498143ca1201a4aed82069a0d8b781f3bafa7c38b1af5f26e6876d2d6f0657c7d6f979ce12ee12628abc2f8c30f643883c81f1938e6b455e63098d41ade8b2288b93850eeb3b58ae530ddbce6c34bd2e2331f334327d1c8fadc178480a6853df2fe25149177ac9bf49e8716e146264c59e67e00387c485ddae53ce56e0ca916eafa0711a4143b08cbb200a115598c30167594a39630d4c359a66a7d1ecf45bed56cfec9c76fbfd2d3f622e95214b54c9a34d7e7e403249a3197b573d26ddfc10781ee62ddff682f8a55328b708a137551c7ae427b7a9ff421c4d9d6ebbc42d6673a3545959155be587112cfe491dcf6449f18a57d32eeec981c469ccb2445694be1adf5907dc38daa1eaa62f2d6778285921d10c15759dd164683bd6e47eaf387ee73b130cd612c43d67683201da5a4db3dd431399646bd50ba6ac28955325cf40a75d8a4fd64d2831e7d34880b131be01eb302ea61e050000",
    ],
    [
      "ETag",
      "KgTqjzQ3SGkM0xSAhHBF/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` > ?",
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
      jobId: "grouparoo-job-106-1592428057699",
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
      "ad",
      "94",
      "5b",
      "6f",
      "9b",
      "3014c7dff329107bd9b42631901b91a22e4ad9c694db0269b59b12630c750b9862d3adabf2dd67432e44cdb66ada53c8b9fccfcfe7d8e7b1a628ea2d497cb5afa81e09ef729c3dbcb8a19e7a263d98c3507ade4d46e6c5cf396b8d5f07913f19fe703e38b7c3c1a08c22453683711ae13aa3798630eb2f9d4698d13c8519a5752158d740a7aeb54dbda5f740bbdb31cd3299e1281893e4564a5c739eb27eb3b90369849486118629610d44e3bdbd79af37d38cde60c459f3b86e539462cdbf543e8f28829cd064b0744a8a9ce16c85634822c97148f7bd37c7fa0d02e34628a2ef09c210219a275cb2953288260109f3ac10174a8fc228cc05f4fe6fc5a03ad6d81ab9ca68b69cba2fd7309672eb570a64ca6a956196475c79bb984d94752aaa5f4386d95ab97a6f2d2c61c9684022bc22fe5a1928e7ca707aa1286bc605ee5af99a036060e5bcc02a4afa98719214602ef4225cc111de6d37ed1393dc4b4811c805c3366cd5051da8f580e9055e17053da3ed05007b5ecfebb6a1e10164b670cbf730ac2a7059bbcc87094d1000408381875a660feb46db6f8b1fa8e3a083ccae11685d6404c8809eba55d8eccff33d231c5f10965246b6dd56af16b66baddcc5723a1aba56f5ec0114adbc28e98f4f7e74242e9a54a5fd535b9e10a519a102aa98ab3d75adc570e4da97150c71c9c63884e8c1b993d72c8011c3876c98c118739c4da82f87a3ce678eeddab3e9707c5028eecd7c17c944d8973dece14c5535f7213d1e753985d22a313b2db5e2db9c9d54b98451",
      "7e42e67e6b56b5238dda09b57fa173ed89e5b8c3c9fc3f10ea400775a08b3de06a7a5f33fa5aab21eedee7df806fbfbed52a2555b14bb6c0eac7a5b5f824730b9ff42c7080339ca003c4331e954c2cddcfd995227eb7b8648ad85d7b00f1ec39110f1cb1437994e1f2b993b81c5229a8837607f476822231e34f23ba40df453c595eb2168e71c277cd289758d9c9cd11525ec129d264b8789e537bfaae80af6d6abf006895a20583060000",
    ],
    [
      "ETag",
      "GMC9DzPs4L+fldMAxSJSkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1592428057699"
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
      "000002ff4d51cb6ec23010bce72b22f7daa8807856e250286a9122a06951a5560819b349034e36b59d0242f9f7da4e025c62cfccae776772765c97ece3744b1e5db289a3df1cc4e92e02f5662e01c89c2ba98f0c5309e4de5483a291a99eb38cfafe78b9d8f3af79e7c08ebdcf87e7c370585649f60309d575678d340e63e05ba9f1b7c56ec55b2da5099817d76b6107da172a4d9d32ab4d671f939749702b25b8b5d26ce9fb4f237f422aa9b0e74a7f0bbbca0e370184202065705d2813b803a6a6d6b9a449c6c193980b06b21a621a4b3912986754207a9af29a8daed7ec0c5aed56bfd1e9750783ba9e23a32ac6d4b42cdfc96501858af2000fc63e6996f988129669d45990f026a0db88b4f4679a5be44215d56de5d468751d363a29900b81da8c046ba1dd6f903a8d311ab7ca84a1440e966654ffb0d758692ea45c825338ff30e5c9a11c020000",
    ],
    [
      "ETag",
      "OcpaLLCUPklZO5wcx7W/Dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb7243400000d07fd9e7c8b8d6ea5b565c3a75c94aaa7831c2d245425875e9f4df9be9f983f303b23c27e398b2ae2177f00ad64cd4f6f9febd83689b892f53d309902a4562adc22afebe61664046032bf58e09273cec94bfcb7621bc7c70229d9c8ee87893cfa1aa6653ba68104d2d0beae4fc4995588dbbd96353ebaed3d2f05887e13538e1b7a304a16b6f3759f078e4b24bcf0c2ff085b63c0d978e5b97c35a16c8b4ebf0cb9a4323b2e0d8307b6e4a0e0b5ca69461643a7a5034d761ed7bdf88d961aa1e09ae3a0c76802c3d1dc898d2e74c52346d07fe9b295b7bf2bc22920d6400bf7fa3a6226205010000",
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
      "Wed, 17 Jun 2020 21:10:06 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1592428057699",
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
      "54",
      "ef",
      "6f",
      "a2",
      "40",
      "10",
      "fd",
      "ee5f41b8af55d1fa039b98ab51da9a28f600db5c2e17b2ac03dd1659babbd8348dfffbed022a9ccd5dbfc1cc7b6fdeccecee4743d3f417926cf42b4d0f48f49a017bfff64c03fd426540a04865ee6f9f49ea0a67f70a2befc91dc5b321b326e3718122399ba36d1a4393d38c61e0576bb715319aa58851da9482cd8e316c76faa36eaf6b1afde160342ac81ce27041921725f12444caafdaed839156446914034a096f61ba3dc6dbbb6e3b65f419b0e0ed7addb62cc5dbffa9fc3da618094293f1da2d5c641c980f5b4462e5e344df04d775fd1641db5624d13b8201614cb344286f850ca64948a28ce5e252e943066538377dfcad0474d75a58534fc334ceb6899fa02d5c681b24902fde53d06e9cd5529bdb372b6739f1e62bdb77a777d672d29aae16eba5ed6a8f77966369020531e45c6dac5de77fb6fcc91de5d536c00549724f9eca569cc86c39c8f9274b3c4a2811e98a4309f387c600754c631484c11087e6653f080d08023318f6d16560e0510f7a9b005055217756f051421330a0d7d9181d1f87e1c09768c337cd01f69189fb835e0f497dd04bf6fed8cb1b23026684a7949372c8faa333f72cdf73d6f674e259d5be4394c5625638af775d6b47c801559dfe6b24678e5246a83495af736e7b9633997af3878a0d79b6161021fceebeaad315a298c3898d98dc9500b6a41bb518dd9e2cadd9899c9f94fb03884bc4afa3cf533b12a8f69ff772b6ff7a1d4f",
      "1eacda288add1451ddf59cb97dab5792fbcf651e509c7da2b32bc37a2aa7f52427cc6b5a8dbfbf7e372a357479594b7bfa8fb5e5fc54dc3ca7320e84c020c1a7aa5f38ba8a58a4bff21849fce1655014f9381c0d7021c3f21a617e2a8f1914978a14a32f05bbc6a037ba3c084a2213e78841df3820ce5e07550bb69088c3308a57a298e4be6629abd8c9690a2e2f825d6e71dfd837fe000303999ae4050000",
    ],
    [
      "ETag",
      "PGjipStRvqeOThS9lD7rEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1592428057699"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af58ea2b2440900f131f36452502228cc46008a9dbdd1c6eeb6c3b0d31fc776fbb017bd12c91c497b5f79e737bd6db9e7e19a649dec2c4231726790983f70cf8f62c00f9a82633105924050e294b04909a6283a481626fed27cfeea5cb4df66877ad31bfee5bf7cbcfcbcb9c25dc578829f2be30c2d80f21f204c6cf3a368bbcc6121a835ad1655116276b1dd68eb0dca61a9e3bb3e1e4b68cc4ccd3c864311a59f668400a6857fb59c4a392aef5927f93d0e3ca28c4c886bdccc0070e890bc75da79c6dc09543dd5e41e33482ba601977411422aa308703ceb29472c6ea98aa371bdd7af3bcdf6ab77a8df36ea7dfdff323e65219b244952ce6e4f00392491acdd8a7ea31e9e487c0f3306ff9be17c42f9d42b945087da8e2d02387dcaef60b7138713aed12b798ad8c526565556c951f46b0fe27753c93578a57bc9a76714f4e244e639625b2a2f4cde8c13ae1c6d10e55377d6d398353c90a8966a8a8eb0cc783b9638da73f8ae377753481bd9520a69ca1c904686b351bed1e9aa841f656bd62ca8a523955f20c74daa5f864dd8512733e8d04183be31b6ceaa7231e050000",
    ],
    [
      "ETag",
      "yBXdB8pZjuQB7AMrD9AKZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` > ?",
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
      jobId: "grouparoo-job-108-1592428057699",
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
      "02ffad945d6fda301486eff9155676b3490392409a50097588a66d240a1d8456eb3681e338a9db244e6da75555f1df67277c04956dd5b40ba4703edef39c63fbbc3600d01e48166ac7400b48fc5860f6f2e19e06da67e5c102c6ca63ea96359fdf7a8e63c56936b3f38b7371fbdcef5751a4cce630cd13dce4b46008f3e3f9ac15335ae49051da94824d43779a86d533bba6a35bf651af5725739c4423923d28893b21727edc6e6f405a31a57182614e780bd1746b6f3f99ed9cd17b8c046fefd76dcb52bcfd97ca27094550109af5e7b38aa2e0982d700a49a23876e961f0655fbf4560da8a65f413411822448b4c28b64a06d12c2271c14a71a9f42a8dd25c426fffd60cdacc1db9431f0c27f3b1ff71095325b7fc0420078b05c3bc4804389b4e2ec13297d5ef20c77c096e2edca92b2d8c4624c10b122e411f9c80c1f814808d04f851e87a07839392abac19622e485692f93048708d477ad7e3f40e1ce5564289402121d6610b5b3f8286a3f78228b051e474ac20d2711038816dc14ea0a35e1777c300c3ba8250b5ab7c98d1ccc6811d1aa1ee4496d5b1a0eec8bcc04466604123d26dbd072df9d31d6dadb0daf6f3cc88c0a784e79493f5b8b59ba9e7bb0b7f3a1f0f07be5bef3d827296a715fd7ee77b2d0939a43aed9fc6f2862867844aa8f260bdb1ef4e0743dfbbae61c85b36c231442fb34775cf229870bccb860ca658607649437538dad564e6f9de643c18ed14ca8b73b589e432ecfb1676d7535dcd7fc9f78fba3a85caaa308fba5acdb7fa7c50e51a26c50199a7b55933f6341a07d4fe85ee6c3419fc27be96d5fd0de2faeb67a326afc9b5b146d3becedde937955bfa94678a23cc70867605dff17c5462e57ecf5a94f19b1da552e49ada027021cdf22923be2b8f18ae1e3649ab762b",
      "41d3304cabb31194894cbc8de8f4ec4dc49b3da56ae1146762338c6a5f55935ced2115359c324d85cb8738f6c6e7257c63d5f8050c7466f16e060000",
    ],
    [
      "ETag",
      "2055UUZI885gmnS7pHGtZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d514d6f824010bdf32bc8f65a12c55ab589076da83531a6453d35c6ac30502c30dbfda8b186ffeeee02ea85ddf7decccebcc7d9715df29395317971c93e4b7f15f0d3430af2d35c42102a97421f0c4b01e4d15483a4a9a96645f0ff36c370bd64f1aa50c7819a6c7a93f1b8ae12d1371454d79d35d238c9208f85c65f16bb0d6fb59216605edcedb81d685f68347962569b2fd7c12c08efa502632b2d378bc564ba08482355f6dcea6f655739e03e8404389411dc16621c0f10c9b9752e68c172f0042a1e81688698c65a4e392a4639a2a729afdb197addfec87ff2879dfee079346aeb738ca8ccb0342d9b15b92e2051d23cc4a3b14fba753ebc86751a6d1624b90be83e222dfd99669f5ca9aab96d9d166d6fc3a62709e283a33623c05ae8f91dd2a6f18ac6ad346148aec0d211d53fec3d939a4b682ec0a99c0b10a02a021c020000",
    ],
    [
      "ETag",
      "pmEzFGoRTNpdSmuw7uAU3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "82",
      "30",
      "00",
      "00d0bb642d4e11aca4bb06ea4043e55b40360c0d8141be06c2cfe9ddebf4dde03d404a081d8664ec2ada8237b0a607b8277bdc29689b33027118393656b4cf6074c2c8ba4f3347b263bf6c876eaa04bf3285a1652af91ab91069b592354d93418baf634c3455d6ddf3056b8accbda3ac8ab93c97177cfeb999a69b7b4ceaef0b476b0827ef9a5a359b5bce0dd39574b70b8285595b118bd94d3c49e9d4f97cfd16203af94e8a29365e3187030ddee36b8117d788fb62ecb2ea20963efaa86db9d7737b003b4097be647448cae74c3a42b803ffcd645c7bfabc229a32cac0ef1f70db3a6605010000",
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
      "Wed, 17 Jun 2020 21:10:12 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6fa240147df75710f6b52a82566962b6c6d2968de22e604db3d9906118e8b4c85066e8c634fef79d1950616d76fb06f7de73eeb91f73df3b8aa2bee02c52af1435c4c96b898add976712aa17c2831848a467b89bdc6dbe15b91da1953b4ebde7dde366369d565158a229d8e629ea52521610d1abb5d74b0a52e6a020a4cb09bb03cdec0e46a63ed427da687c699a1598a2345ee0ec45503c3196d3ab7eff20a4971092a408e498f620d91eedfd37bd9f17e4194146fbedbc7d9e8af6ff93f96b4a20609864d3b557a928292a02b40538153a4ef028bc6ef3f730d8f6121efd86210210923263425b45034916e3a42c2439677ae7466e96a28fbf0d83ea590b6bee2b90a4e5360b32b045174a041808d82e47caadbb5a2ab673bb729733df5e398137bfb796b3de7cb5582f1d4fd9dc5baea53010a6486295a9722dff1cfe2315c96c11a20c6752932fbc0d25dc5b37d2fe6088470a41c2555154870563ed120c269a19c6e118c6136314c61a0ac349381e0123d4a03944c32844a0c92095557890910c44da040c4d23d0f50806c328d282f032d603c3e4406334bcd40c43add1fb632dbf0bccd00da639a1b86eb2ba716ddf0a7c77edcc67bed5ac3b0665ca6e2ae5edaa5be530dea0a6d27fb5e44c515e60c245c971da8e6fb9b3b96f3f3464f0dd5aa004c09df72ab62b062945273428f8ac182a96241283519dd9d2ba3981e5a67c3f04511ef1f3a8f3540e0f14f397b59ccdbf9dc7e78bd56a45359bcaaa7abe6b3b776ac3b9ff98e601a4e5073c6fb559cd79b79e7887698babf3f7d7af4e2387ca1f6b2d4ffdb1b6dc4781953ee171518c0a94c153d64facae0056eecf1c231e7fb80c02c28fc3510065dccc9f11a4a7f4b040d5a3c255eb6b427da00f46e303210716ec3cc2d0f543c4d97510b9d01665ecd08cea4a549ddcb724950d391226c2f94370ea29ee3bfbce1f8e1c0b4fe4050000",
    ],
    [
      "ETag",
      "b4y8GWJrpIdeOR7lSjyYWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1592428057699"
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
      "c1",
      "6e",
      "e23010bde72b90f70a12204acb4a3dd02ddd8d94d202e96985909b4c685a2793da93eea28a7fdfb1134a2e5d455aa4bdc49e796ffce2b19fdfbd4e47bca4792cbe76c463ba7d2d41efbe6c811676b204532a323c14981b105dcb06925bcbfe1dcd8becfc45bd911f2c301c0f1719d2e2f2b26299e80932c9bc778e384e5250b1e1f8a78b3b75de61b9ccc0ae18a12ab37ce3c2ee11a65de1e055b8f4e7df9b4886b143e60f4130bd0a66a286f6ddcf45624972e396fc370937aebd5a4c3ce3e31212d0904770dc75a1f11922f25d7b8dcc0a053d83a58ec0d422b6b082b71acb426ac41ea77a83fea437389b0c47c38bfed9f9783239f015469252cc6dc9c34a7cfc002149b5c45fb6c7625c1d82aec2aae5875e88a4710acd1631f4668bd3587ce4f6ddbf10fd79381e35b8f56ced352a5bab72ab9254c1e63fa9f3993c49bee2edb4eb7b722271996199534be99be06e7ac28db31dda6efa7a1ace4e256b88cdd05237f46f67ab707a7bffa9387fd747135ced08ccbd4636990167ad417f74c126ea8b8355bfa1b52259a7922ec1a523c94fd68f9438974865c0db7b7f00879405e21e050000",
    ],
    [
      "ETag",
      "xcNpm7klvtILQoT62QmotQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` < ?",
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
      jobId: "grouparoo-job-110-1592428057699",
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
      "000002ffc5945b6fda3014c7dff91451f6b249057201029550c768b621516821b4da4d608793d45d12a7b6d3adabf8eeb3930041655bdff6043997fff99d63fb3cd5344dff4e92b57eaae99884f719b0c7577714eb27ca030285ca638aa9172d86b4fbf9dd0dfd252e863f31bdbceaf78b2892677314a711d439cd980ffc74316f848c66296294d6a560dd348dbad9ee592dab6bb49d4eaf57247388823149be2b895b21527eda6c6e411a21a561042825bce1d378676f3e58cd94d13bf0056f1ed66dca52bcf98fca6711f5912034e92fe60545c6812d214624521cfbf4357e7ba8df20286e8432fa81f8807c9f6689506c858c4f93808419cbc5a5d293344a730ebdfbac18f4b93b76879e369c2e26deeb158a95dcea8d86b8b65c32e05924b4f7b3e985b64a65f55bc481afb49b8feecc9516460312c192ac575a5f3bd30693734d5ba9afaf9961d8be769633e5f5d6c00549722a0fe1082a2cd25b8e7274e41877124a04090950862d1da383ccaed1c30176fca06bb7716000c65decb4918d0dbfd782d61a03aa2a0855bbc847094dba18d9c86e1936ea06183a8e659ac8720c43feb44c708c96050e6058eba5c266d7cf0f46049c139e524eca51eb37b391e72ebdd962321c786eb5f700c9399e17f4879d1fb424e490aab47f1bcb33a294112aa1f2431d4d3c7736187aa3eb0a86bc61630891ff38bf57772c4011877d3662280601ec82aed5e1e897d3f9c81b4d2783f15e21bf3497db482ec3beec60f73d55d5bcc7f4f0a88b5328ac0ab3d3d22bbecdc951956b146547641e4ab36e1e68d48ea8fd57baf61ff0ca7fdf6a15715dae8b124bbf5ab8b34f2a37f729cf0c026090f8fb722f783a2ab170bf641dcaf8ed6e5229723ded00b89066f98c7dbe2fef33281e3589cb667341cbb4adf64e502632f13cc2763adb8867fb49d5821812b11d46b1a78a496e0e90",
      "b20a4e9ea6c2e5239c8c261f72f8daa6f61b0aab9b4466060000",
    ],
    [
      "ETag",
      "1tOTlUCo8ZBWoztMCxboPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1592428057699"
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
      "02ff4d514d6f824010bdf32bc8f65a52b0da6a130fdad06afc484bb597c69815068a024377170d31fcf7ee2ea05ed87defcdeccc7b9c0dd32487380bc88b497671f457002bef22109feae2012f12c1e59163c681dcab6a103452d5192df2c36a367a982cbef9713163a9780b4ec3615dc5fd5f48a9ac3b4b247118431270897f34361b5e6b194d41bdb8dd323d50bfd068a2ccb5365daedc77d7bb95520cb4b45ccfe7a3f1dc258d54e97323bf955e658f3b0f426090f9705d2867b8075f4cb5734ed33c018b63c17ce0cd10d558cb11c322a70cd19294e538b6e5f4069d6ea76ff79e9f0683b63e419f8a1833d5b2fe229705040a9a787852f68953e7c36a58a7d16641c29b806e2392d251353f920b5535b78dd1a2cd75d8b814c03f184a331cb4856edf266d1aafa8dc0a1586600568daa7f2874d6221b990261c8ccaf807ae79e8731c020000",
    ],
    [
      "ETag",
      "naupkTKA/HMVsvMKrmtFdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb64ad8e1049a1bb523e0229d65a2d64c390103e52200222b1d3bbd7e9bbc1fb0129637c1892b1ab790b9e814c5563c55641a79bf71bcbec197f32855247136163c6a739bf2e1d883d8b18f3c186def07d9c5029b74fad9edd09b248b4bb6dde4d3cd955adab58da5a8ec33973c429926e58baa19f12148c5f7e3339c7256d5dacb22e43eebeb454c808f1aa0d5d63b74eaefd24a65c88cb5416ddae0fc9f5036efd16d5e22d525e7449b5d85a1f94ec921667b46fe8ab828c78e48316f4e722a404ea6001f82caa9e0f49f59841cd3016e0bf998c52f0c7d5e469cf7bf0fb072b51eb6d05010000",
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
      "Wed, 17 Jun 2020 21:10:14 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1592428057699",
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
      "54",
      "5d",
      "6f",
      "a2",
      "40",
      "14",
      "7d",
      "f7",
      "5710f6b52aa8a834315bd7d2d644b08bd8ee66b32133c340a7458632834ddbf8df770650616d76fb06f7de73eeb91f73df5b8aa23e912450cf151592e839c7d9eb97470ad533e9c11c44d2f3c37cb9de224adeae01bc7dfb36b3a94d162f934919450a34039b34c66d46f30c6176be5e75a28ce629c8286d0bc2b6aeeb6ddd307b83de58334643d32cc10cc7e182244f92e281f3949d77bb7b219d88d228c62025ac83e8e660ef6e7bdd34a38f1871d66de6ed8a54acfb9fcc5f638a00273499ac57a58a9ce1ccc71b4062a9e3080fe04593bf43c0a61389e82d41182044f3844b6d250da24948a23c2bc805d3bb300a7321faf05b33a82b6b61cd3c05d138df247e0236f84c0900073e7f4db172e52e6d65ee5c2d5d7beacd978ebf9add58f6b4335b2ed6b6b352ee6f2cd7523880312eb0ca44b928fe1cf153282ab205987192149a3ce9ad2911deaa91f30f8678a090244215c355983fd286401f6b260ce10885e3be01430d4338862303f4a186cc011e0410833a43a1acc48384260099635333747f807a435fccc6f061300e7c6884603cd2c0b0af856a85de1d6a79c908c79784a59491aac9eabd3bf72cdf73d7ce6cea59f5ba4390c7fcb254deacba510e170daa2bfd574b4e14a519a1425431ceb9e359ee74e6cdef6a32c46e2d7004d0ebea596e570862868f68908959719cd9349083519da96d5d1ec1c5a6dcee",
      "839888f875d0792c4704caf917b59cccbf99c7138bd56845399bd2aaae3c77ee5cab35e7ee639a3b10e71ff06c2bb39a8a6e3d880eb30657ebefafdfad5a0e553cd64a9efa7d6db93f25b6f0498f8b439ce1041db37e627525b0747fe61889f8fd659010711c0e02181766f18c103ba647192e1f15295b5f11f6f4415fefed090530e3a7118381b18f38b90e3217dee084ef9b515e89b293bb86a4bc26a780c970f1109c6a8abbd6aef5076ca9f156e4050000",
    ],
    [
      "ETag",
      "X9wGvcoizGabPzBCMoMiLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1592428057699"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554516fda30107ecfaf40ee2b68a4025626f581aeb44302da4290265508b9c925a4737c99edac4515ffbd672794bc748a34a4bdc4befbbef3179ffdf9cd6bb5d8af5446ec5b8b3da5c9ef02d4ee2c01f360270bd085309a861ca506d6b66c303cb1ec71ef56f6eff8ea67906cb9c4d72f5d312b1e2e2f4b960eb79071e2bd5144719c828834c58f2e6e557987499e815d3144516472e3c2f61136bbdcc1cb603199dfd6910c2387cc57d3e9e86a3a6615b46f7f2e1271c3376ec97f9370e3daabc4d8333e2d2006053284e3ae7385cf109a896bafe6592ea0a3b15021e84ac4169670a2b0c8b942ec50aae3fb7ec7ef0fcf7be717ddfed7c17078e00b0cb94951da92d5927dfc8041c3c5025f6c8fd9a03c04558665cb0fbd6071ed14ea2d22e88f2d4e23f691dbb7ff429ccc8341afc6ad666baf56d958955a15a70236ff499dce64cbe98a37d3aeeec989c4798685340da56fa677a3136e9cecd074d3d7a3607c2a596dc80c0d7583c96cbc0c46b3fb4fc5e9bb3e9ae06a6740df2b24936970d6f2bbbd0b3251971dacfa1dad158d75aa5105b874c8e9c9fa911acac55c68f0f6de3b51419aa91e050000",
    ],
    [
      "ETag",
      "E4Gn5OaUXTghanox/0lMuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ?",
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
      jobId: "grouparoo-job-112-1592428057699",
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
      "ad",
      "54",
      "ef",
      "6fda3010fdce5f11655f36a9901f102095508728ddd068e84268356d1338c649dd26716a3b54a8e27f9f9d841054b655d3bec1dd7befdeddc5f7d25014f511276bf55c517d1c3e65886edf3d105f3d9319c4412833e1d5865fc7dad6fce2dd3890ce6c2d76f0f36050a070ce66204e23d46424a310b1f3c5bc155292a58012d214824dc3309b86659b1db3af5bbdae6d176486a2608a93472971cf79cace356d6fa41512124608a498b52089abb8b631b59492070439d38eeb6aa214d3fe52f9222210704c92c1625eb8c818a24b14031ce5ed56f4b5fff158bf8541dc0a057a83210210922ce1d25b21034912e030a3b9b8507a114111ce4d577f6b01753e9e8e479e329a2d1ceffd0ac4526ef541014c592e296259c4952b7776adac5251fd1e30c456cadde7b13b16114a021ca1255eaf948172a10c9d4be5805b293f325d6f43e5227796575d23c671927bf3801fa19a23912d073a39b1cc4a428a002ee44bd8b2a77781d1d76d3ff07b30e8b72d3fd091eff7fd9e05dabe0eed0eeaac7d04ea0a5cd62ef8202109b0bb8101fb5dbb6d7504b6630bbcd5b190df85fda027f8c8d62ddb5faba5c2aeeae799628e2e314b09c3e5c0d53b77e28d979ebb7046436f5cef3d00629a9785fbe3ce8f5ae2624875b77f1acb2b4729c54498ca573b71bcb13b1c7993db9a0df19d4d5108e076fe24bfb400440c1dd88082187144afc95a2e47bd99cd27de64e60ca70785fcd3b9d92399807dafcc1e7aaaab79dbf478d5c5168aa8b4d9eda8b5dceeeca4ca2d88b213329b32ac1a471a8d136affe26eeeb913e7d37fb0",
      "374cc5e27e63b1fcf5b351d357c5e128ada95f1763f79be4e63999715180284ae0a1e21b9e8f2416e9b71c4681df5f29491187aa32c0b8088ba70cd9a13ca4a878d8382ed651089a86659895a02052fe1a615afd3de2d5a592b5508c12be1f4671b18a49ee8e2c65353b394dc2c54374ca0dee1abbc62fc96d631370060000",
    ],
    [
      "ETag",
      "gFvtMm/y2KTPNcrO9/mNiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1592428057699"
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
      "0000000002ff4d51d16e8230147de72b48f73a12213a75890f53c96666cc86ba97c5980a970e052e6bcb1666f8f7b505d417da73cebdbdf71cce966d93539247e4d12687847d97c0ab3b06f25d5f0210652a853a0acc05907b5d0d92325d3d2fe4c9f370ca5e3f36f3bf953b6387c86393495325c22fc8a8aa3b2ba4709c401a09853f0db65bde6839cd40bfb8df7333d0bcd06ab22a8cb6586dfc673fb895328c8cb4da2e974fd3a54f5aa936e74e7d6bb3ca110f01c4c0210fe1ba50c1f108a15c18e78266450a8ec0928720da21bab19119c7b2a01cd15194e3ba9ee30ec65edf1bf506c387f1b8ab4f31a432c15cb76cd7e4b2804449d3007fb57de236f9f0063669745990f826a0db8894f4a39b7be442d5ed6d677568771d36ad2488378eca8c0063a13f1a922e8d196ab75287217909860ea9fa612f89545c4c5301566dfd03a685af561c020000",
    ],
    [
      "ETag",
      "Dptk22oBgKVTDzN1Cgbd2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "72",
      "82",
      "300000d0bb64ad0e3f11ba442ca6282d4801d9301822d220840092e0f4ee75fa6ef09e204708f77d36b40437e00d885c315768e5b686354fa8b476651a3326d9cd5e13d1f7743ad29fb373ab6019d87625138146b1f4ba5c9526bca1ae55fab14e914f88700b389ff1ae3bf14badf7d6e172251e5f861aedc29cd5aab7353628b59c468bc22e893fbf749964da680f682deb88c10f61d7ef70e4fb429a9de118dd3d2d15c444814f0e4b182a66633f902e918719c1eb16258593c2842bbce5697733ee46508205c09c560cf759f59aa96bd35c80ff6636088a5f570be70c33f0fb07c532669805010000",
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
      "Wed, 17 Jun 2020 21:10:16 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1592428057699",
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
      "0000000002ff8d545d6f9b30147dcfaf40ecb509904fa814ad514ad748095981b49aa60919c750b780a96d32b555fefb6c20092cd5d637b8f79e73cffdf07def288afa8cb3ad7aa9a8218e5f0a445fbf3c9150bd901ec4412c3d236f66be51afffe238e65d68a46f1bda0fefa6d32a0a976806d23c415d460a0a11bbdc78bd989222079490ae20ec1ac6a06b8cacfeb06feaa3c9d8b22a304349b4c4d9b3a478e43c67979a7610d28b0989130472cc7a90a447bbb6eb6b39254f0872a6b5f36a2215d3fe93f96b4220e09864d38d57a92818a2014a014ea48e137c1b5eb5f97b18a4bd5844ef3044004252645c6aab6820c9221c17b424174cefc228cca5e8e36fc3a07af6d29efb0a2449916641065274a16c0107017fcd9172e3ae57cac2b959bbab99bf583b8137bfb557b3de7cbddcac1c4f79b8b55d5be1204c508955a6ca55f9e7889f5251996d8b18c759a9c997de8612e1ad1bb9f86088470a49225431548705137d0c0c53b7c2289cc0c81c8cc24847616886931118843ab48668b80d11683294ca2a3cc848668d226bab0fad000e7433188e0d2b00e6200afa437d0cc7c81c8e4c53add1fb632dbf29e6e81ab39c305c37597d7017be1df8eec699cf7cbb5977048a845f57cadb55b7cae1a2414da5ff6ac999a29c62224495e35c38beedcee6fee2be2143ecd612c500be7a2f72bb2290307442032a66c5115d91ad1c8ceacc56f6f5095c6ecaf7431013113f8f3a4fe5884039ffb296b3f9b7f3f862b15aada866535955cf7717ce37b5e1dc7f4c730f92e2039e5d6d5673d1ad47d161d6e2eafcfdf5abd3c8a18ac75acb53ef36b6fb43624b9ff4b828421465f094f513ab2b8195fb33c748c41f2e838488e37014c0b8308b6704d9293da4a87a54b86a7d4dd837c42eeb074201a4fc3c62601c539e5d07990ba528e387665457a2eae4be25a968c82961325c3c04a79ee2beb3effc01acc9f889e4050000",
    ],
    [
      "ETag",
      "5SA8zrS2qNN8Qb1mzUr2bQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1592428057699"
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
      "ffc554d14ec230147ddf5790fa0a0920a298f800884a9ca06326268690b2ddcd61b7ceb68310c3bf7bdb0dd98b668924beacbdf79cdbb3def6f4d3aad5c87b94f8e4b2469651f89181d89e84a09ef4c4019931257148792281d4351b140d35fb7e3d5c6e9cc066abc1cdda8d66e1ddf4fa65737595b3a4f7063145de2746180711305f62fc6ae25a9137584263d02b7a9c6571b23061fd00ab6d6ae099eb8c27b76524e6be4126cfb6dd1fd8235240bbfacf223e55746196fc9b8419e7562146567ce9400002120f0ebb4e055f81a7c6a6bd92c6298386e499f0401622ba308743c1b3940ace1b986ab45aa78dd659afdd695f34cfcebbbdde9ecfb84755c4135df23c23df3fa0b8a2cce11bdd63d2cd0f41e461def27d2f48503a85728b105aebe2c827dfb95dfd17e278e2763b256e319b5ba5cacaaad8aa2062b0f827753c93378a57bc9a76714f8e244e639e25aaa2f48d3ded1f71e36887aa9bbeeebba363c94a8566a8a8eb8e1f4633b7fff0f8a3387ee707130cb60ae4a3e0683209c65aad66e7024dd4247bab0eb9b6a2d24e55220393f6283e597791c25c4099046b677d0167fe34e11e050000",
    ],
    [
      "ETag",
      "KvCbwRfLljBFvTiSgHODXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ?",
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
      jobId: "grouparoo-job-114-1592428057699",
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
      "ad",
      "94",
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "c7",
      "df",
      "e7",
      "5320f666939a84401e2b455dd4d22d6a4a5a42da4ddb9418e7a06e0153db74aaaa7cf7d94012a2665b35ed1ddcc3ff7ebeb3efa5a669fa034956fab1a6fb247ccc803dbfbba7be7ea43c2050a83c0c5f4c9cc985f8729e851dd44aafacf9f5e368382ca2489ecd519c4650e7346318f8f17cd60819cd52c428ad4bc17aabd5aeb73a03b36df68d4eaf3b1814c91ca26042920725712744ca8f9bcd0d4823a4348c00a58437308db7f6e693d94c19bd072c7873bf6e5396e2cdbf543e89284682d064389f15141907b68018914871ecd257fec77dfd0641712394d14f0403c2986689506c850ca64940c28ce5e252e9451aa53987defe560cfacc9ed8a79e763a9d3bdefb258a95dcf28386b8b65830e05924b473777aa92d5359fd0e71e04bedf6b3eddad2c26840225890d5521b6a27dac839d376714bed7b661816d64e72b2bcea0ab82049cee6213f820a91f4960d1d1f18e65642892021e5cbb045cfe8a256df18f881dfc341dfeaf88101bedff77b1d64f9061eb4a1bdf201551584aa5de4a384265d8c3b46d01a9880031f0c7365e0a0b7ea5b66d7c0ed36ee5b0066cfec057aa9b0de9ee7272302ce084f292765c3f55b77ecd90bcf9d3ba723cfae9e3d40b29b6705fdfec9f78e246493aab47f6acb2ba294112aa1f2d18e1dcf7647a7def8a68221efd90442849f678fea",
      "a60528e2b0cb460cc520805dd2951a8e7e359d8dbdf1d4194d760af9d5b9da447219f66d0bbb3b5355cd7b4ef7475d4ca1b02acc6e5baff8d64707556e50941d90792acd7a6b4fa37640ed5fe8669e3b763efd073c94cac1fd06b1fcfa51abe8eb72719468faf5dc76bfaadcdca73c2e04c020c1bb8a6f783e2ab170bf6531caf8cd96522972516d01b89066f99431df95c70c8a874de2621c85a0d9eac977b41194894cbc8eb0bad626e2d5a652b52086446c9a516caca293eb3da4ac8293a7a970f9109d7282ebdabaf60b21d34a5e70060000",
    ],
    [
      "ETag",
      "rcKLNLKtXFug5a1pP3UQqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1592428057699"
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
      "0000000002ff4d515d6f8230147de75790ee7524c3e0d7121fe6429c89311bd3c46421a6960b43818b6d997386ffbeb680fa427bceb9b7f79ec3c5b26d72488b883cdb649726c70af8f92101f9a12f01882a93421d251602c8a3ae0649135d7d8a7fd92ad90ce67deeee6647efb0f9a387643269aa04fb869caaba8b420ac729649150f8cb60bbe58d56d01cf48bdb2d3703cd0bad26cfa5d1e6cb953ff3837b29c7c848cbf562f1325df8a4956a7386ea5b9b55f6b80b20060e0583db4225c73d303937ce05cdcb0c1c81156720da21bab191138e554939a2a328c7753dc7ed8f7b5e6ff4d41f0ec6e3ae3e4346658a856e597f92eb021225cd023c69fbc46df2e10d6cd2e8b220f15d40f71129e947370fc895aadb5b687528bc0d9b9e2588778eca8c0063c11b0d4997c62b6ab75287217905866654fdb0b7542a2ea69900abb6fe01a84b53331c020000",
    ],
    [
      "ETag",
      "wfxcTgX6I5r1bGq4kXzakg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfdb6e82300000d07fe9b398a074d2bd019b6529ca4de4f242a0b472c9ac5018a2d9bfcfecfcc17982825226653e8a8e5dc13b588a0d5ad33511baf9986925e8fdea0c4daf7b8750a5b1e361a69fc8256aba328decc02e82bd6a3d9248639bb6e3c2a92362732c55532625f43eb131d559c6de1022c77d6b7e84968f76cda4692dccdab3386fbbba76654064d53392323e1125eec35d1bc1ad3f72e457892278597e2523ae8c5376f9e98e9486df338606c7ca62d9b13b12279a39d15c17a9b509d5f430700c859e821560f75b33309937afd91622b402ffcd7c5c6eec75355931b001fcfe019083da6f05010000",
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
      "Wed, 17 Jun 2020 21:10:18 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1592428057699",
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
      "02ff8d54db6e9b40107df75720fa98f86e6c886435964d5a4b366e314e145515da5d06b20e6609bbb84a23ff7b978b6da8a3366f3033e7cc9933bbfbd65014f599469e7aa3a898062f2924af9fb60cabd75906040ab2cce4eacaa2e2f7d684bd664e1ee3ede05ecc82f1b8a8a2399aa35d1c4293b33421c06f36eb5690b0344609634d49d8ec76b56657337a839eded14643c328c01c427f41a3e78ce2498898dfb4db4721ad80b120041453de226c778ab7f7bd769cb02d10c1dbf5be6dd98ab7ffd3f973c808129445e3cdba509172485cd8211a663ace700fdfd6f95b14ed5a81acde53028810964622d356d01016f93448939c5c32bdc9a00ce7a24fbf9580ba3617e6d451080bd35de4466807d78a870472c56b0cca9dbd5a2a73eb6e652f27ce7c65b9ebe9577339694d578bcdd25a2b0f5f4ddb5404c221e45865acdce67f96fcc915e5dd3ce08246b92627cb5694c86c69e4fc9d259e283212a98a4359e68e3a43d4d53b06f6f188f87a5fc37e0730d6f148437ddc21c600061e065465c89515781449a388d61dc05073c1ef19eea083898b3dacb91877bafac8e8fb23c3534bf4e134cbaf840a98511e334e4b93d5077bee98ae636face9c431ab73fb280dc5ac505e9fba368e90065595fecb920b457142991495af736e39a63d993af3fb8a0c79b6161020f2ba7ec94e978f420e67344ae4ae04244be6658b51adc9d29c9dc1f949f9762ce2b2e2c749e7791c5998ed3f9fe562fff53e8e3c58352b8add145175edd873eb8b5a491edea7b94761fa0ecfbe0cabb174eb493acc6b5c8dbfbf7e362a3d5479594b79eaf78d693f66d83c97656cf02181889cbb7ee0e866c022fd91c748d61f5f860c221f8793002e64585e23c2cfed4902c5a5a285f52561afabf786fa9150",
      "02137159d1d7fbc78a8bd721eb053b88c4d18ce295289c3cd424a51539392c2b9717c12ab778681c1a7f00b93754c0e4050000",
    ],
    [
      "ETag",
      "A++NitzjEev5EAYpj4VtDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1592428057699"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af20f515124600c58487a18018443e4634318494ed0ea7db3adb0e4308ffdddb6ec05e304b24f165edbde7dc9ef5b6a73ba354229f7ee492db1259f9ebaf04f8f66a0d72a22653104920050e318b0490b26283a46bc5aecd6a0ffdcd4bcf34c79371173e478f3de7d56ab7539670de21a4c8db6184b1e743e00a8cdf745ccaf21a8b68086a45870549182d75583ec1721b6b78664f07a37e1e0999ab91d17c38b43ac32ec9a07df9bc884b255dea25ff26a1c7859189910fb69a82071c22074ebb8e39fb00470e747b050de3002a8225dc019189a8c2145e7396c4943356c154c5341b15b3d1aad56b37d5c675b3d53af003e650e9b34895cc67e4f80392491a4cd9b7ea3169a687c0d3306df9a117c4cb9d42be45086d54b1ef92636e5ffe853818d9cd7a8e9bcd1646aeb2b02ab6caf30358fe933a9ec93bc52b5e4c3bbb271712a7214b225950ba377cb62eb871b443d14ddf5b76f752b242a2190aeada83a7eeccb69ec667c5f1bb3899a0b39520c69ca1c904686b99d5fa0d9aa84a0e56bd63ca8a523955f20474daa1f8643df812731e0d04187be3073e55fda61e050000",
    ],
    [
      "ETag",
      "2S2HGvWF11PQPEekNJFcXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` < ?",
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
      jobId: "grouparoo-job-116-1592428057699",
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
      "a5",
      "94",
      "5b",
      "6f",
      "da",
      "30",
      "14",
      "c7dff91451f6b2490342b88454421d02ba2151e820b49bb6096ce724759bc4a9ed74adaa7ef7d90997a0b2addade9273f99f9fcfb1cf53c530cc5b9af8e68961621ade65c01fdfdc306cbed71e9028d49ee1c39d1bdf2467f0709671ffe6cbf56dfdd1097bbd228ae6d902c5690455c1324e409c2c17b590b32c459cb1aa12ac361a9d6aa3edda2dbb6bb59d8eeb16c902a26042935b2d712d652a4eeaf52d482d642c8c00a554d4088b77f6fabd5d4f39bb012245fdb06e5d9512f5bf543e8d184192b2a4b75c14149900be8218d14873ecd37dfce150bf46515c0b55f43d258008615922355b21435812d030e3b9b8527a524665cea177bf2583b9184d4603cf18cc9653efed1ac55a6efdce40c258ad38882c92c6d97c766eac5355fd1a09106be3ead3683e5216ce021ac18afa6ba3679c1afde9d030d63e92b036be6796d524c6694e9557f441489ae45c1ec21194689477d3ccf19141ee24b408920a6113b672ac0e6a742d1707d82141b7d9c681051877b1d3464d6c11b7052d1f032a2b485dbbc847094bb0dde940bb65811b388051b76b63c08e8509e9763001bfe140bb8983c0dc283cefcef3935309432a5226e8a6d9e6d57cec8d56de7c391df4bd51f9ec01529d1c16f487273f3892544d2ad3fea92d2f88524e9982cac73a9e7aa3797fe08d2f4b18ea8e4d2044e47171a76f59802201fb6cc4510c12f839f3f570cc8bd962ec8d67d3fe64af905f9b8b6da45061df76b0fb33",
      "95d5bcc7f470d4c5140aabc6ecb4cc92eff9fd51954b14654764ee3766b371a05139a2f62f74433dc4ff87b32ddbaa5ab6da00bfa1dc7cfda8948a986a6f6ce8cccfcbd1fcabcecd7dda3387003824645ff6152f482716eed7ec4515bf5d523a45eda91d8090caac5e3311fbf28443f1b6695c4ca410b46ddb713b5b4195c8e5cb08b7d5da46bc5854ba16c490c86d338a855574f2f900292be1e4693a5cbdc5e978fa3187af3c577e01789c2d226f060000",
    ],
    [
      "ETag",
      "Dxq9mjnFexFurdjXhk/y7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1592428057699"
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
      "02ff4d51d16e8240107ce72bc8f5b52462d56a131f6a63ac2d312d2d4d93869813174481a577878618feddbb039417ee6666f77667381ba6490e71b6254f26d9c4d17f01acbc8b407caa8b0bbc480497478e190772afaa41d04855bf45bfc730cf227ed8f5bc1f77373ed0f7c5693aadab78b08394cabab344128731245b2ef19fc666c36b2da329a817d76ba607ea171a4d94b9d696abeff962ee76a514b75a5a798ef33c73e6a4912a7dfaf25be955f6b8712104065900b78572867b08c4523be734cd13b038162c00de0c518db51c312c72ca102d4959b63db2ece1a43fe88f7bc3c7d164d2d62718501163a65abc2f725d40a0a0898b27659fd8753eac86751a6d1624ec04d48d484a47d5fc40ae54d5dc7ca345fe6dd8ac14c03f184a331cb485c1b847da345e50b9152a0cc10ad07440e50f7b8d85e4429a70302ae30267d41da31c020000",
    ],
    [
      "ETag",
      "JgXvfpngskh0UVRh8kaKGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfe17243300000e077c9efea4dd4c2fe2d4ecdd12a32ca1fa796b4191315abca6eefbedebe37f87e40dd3454ca6a122dedc10b586a68af9b75202cace606a9649f92f0d51998a617a9ced557d4dcf3b3aba5ef9e2ee225a99b59fa034c0e65da6d977e92118b0a0b5e1c2f17bb9665bb63711e42820f01ca34e27db2b137c9262efd11d908075b8d18898baace7538ca3ae9eb81dfb6dd9e65dd958ba93c427153c36255ba91e6c953d87f9c6c78615cafe2ec343d2b6c452abd1a1b34ba8cbc7dfb78f6cd9bc40a72015680de073e5259f1c7cc306d7b05fe9bd5b40cf471c5b41ee9087eff00c50b530605010000",
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
      "Wed, 17 Jun 2020 21:10:23 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6e9b40107df75720fa1a1b8cc14024abb16c9258b2710338515555685916b209b0845d52a591ffbdcbc536d4519b37989973e6cc65e77d2008e233ce42f15210031cbf94a878fbf24402f1a2f22006e2cab3d6d7f7bf41211b0f66aa494befe646776fef66b3260ad7680ad23c41434aca02227ab973477141ca1c14840c39e1703cd68763cd5454c590357d6a9a0d98a2245ae3ecb9a278642ca797927410328a09891304724c4790a447bbf4aa4879419e106454eae795782a2afd27f3d78440c030c9663bb751515254f8280538a9749ce06170d5e71f61908e621efd8a21021092326395b68606922cc27159d4e49ce99d1bb9b9167dfced1844d75a5b0b4f802429d3cccf408a2e841030e0b3b71c09d7ce7623acecebadb3997babadedbb8b5b6b331f2db6ebddc67685875bcbb104068204d55861265cd57f36ffa915d5d9424419ce6a4d5ee5ed28e1deb691ab0f8678a4a848b82a8ada305f97a7606cc86610053a8c8c891644320a0223d03530096468aa480d0304ba0cb5b2060f329299e389319d8e355fd174e4ab6359f14d751afa309846416898910a15b145ef8fb5fc2a30434b4c734271db64f1c1597996ef393b7b31f7ac6edd112813b66c94f7abee95c37883ba4affd592334579810917558f73657b96335f78abfb8e0cbe5b6b1403f8e6be54db158184a2131a147c560c151b12568311edf9c65a9ec0f5a67c3b04511ef1e3a8f3540e0face65fd77236ff7e1e8f2f56af15cd6c1aabe87acecabe113bcefdc734f720293fe0796dcd62cebbf5c83b4c7b5c83bfbf7e0e3a3944fe585b79e2ddce72be57d8da57791c14a10265f094f513ab5b011bf7678e118f3f5c860ac28fc3510065dccc9f11a4a7f4b040cda3c24deb5b42459968a67120e4c0829d45a8b2ac1e22ceae43950ba5286387663457a2e9e4be27a9ecc8a96155387f08763bc5fd603ff803fc0f0d81e4050000",
    ],
    [
      "ETag",
      "L7LVzar08W9m5/DTGG7SHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1592428057699"
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
      "d14ec230147ddf5790fa0a09104431f101147571a28e111f0c2165bb9bd36e9d6da741c3bf7bdb0dd80b668924beacbdf79cdbb3def6f4db6a34c85b9c06e4ac419671f49e83581d45a01ef5c40599332571c8782a8134351b148d34fbb6dffbb299740270dfae9f1ed520a5ef49747e5eb0a4ff020945de3746188731b04062fc6ce2469937584a13d02bfa9ce549ba30617307ab5566e0a9e7da93eb2a92f0c0209399e30c47ce9894d0bab95f24a08a2ecc927f9330e3dc2ac5c82b5fba108280d487ddae33c15fc157b669afa449c6a025792e7c90a5882e2ce048f03ca382f316a65a9dce49ab733ce8f6baa7ede393fe60b0e133ee5315f35497cca664fb038a2bca5cfea97b4cfac52188222c5abee905092ba7506d11421fba380ec836b76efe42b4275ebf57e196b3b955a9acad8aad0a63068b7f52c73379a178c5eb6997f7e440e234e179aa6a4a5f39f7c3036e1ced5077d397436f7c2859a9d00c35753dfb6e3cf586770f7bc5f13bdf9960b452201f0447934930d6eab47ba768a236d958f5826b2b2aed54257230699fe29375132bcc859449b0d6d60fb89351e41e050000",
    ],
    [
      "ETag",
      "K64zIlsLdeRkGWQt9naqmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` < ?",
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
      jobId: "grouparoo-job-118-1592428057699",
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
      "ad",
      "946d6f9b3010c7dfe75320f6669396c4104248a4a88b5ab62125244b48ab759b12630c730b986293aaaafadd67431e40edb66adabbe41efef7bb3b7c8f2d45516f491aa82345f5497457e0fce1cd0df5d5f7d283398ca4e7168330098d62b798cddd6b67c76e563cba1f8fab285266339864316e335ae408b3d17ad589725a6430a7b42d04db9a66b5b5fe5037740bf407e6705825331c875392de4a899f9c676cd4ed1e403a11a5518c61465807d1e468efeef46e96d31b8c38eb36eb764529d6fd4be5b39822c8094dc7eb554551309c6f7002492c394ee981ffa1a9df2130e944227a47108608d122e592ad9241340d4954e4a5b8507a1446612ea18f7f6b0675654fed734f399faf5defed1626526efb4e814cd96c72cc8a982b1f97f399b2cd44f59f9061b655ae3edb4b5b58721a92186f48b055c6ca9932712f1465cbb8c0dd2adf0b007a48392bb1ca9201669ca4259807fd18d77084773f4de7854d1e25a408e482611fb61900136a1618faa13f40a1d5ebfb21c0be6ff9833eecf9000d0d6c043e8675052e6b57f930a5a9a9f7aca1a919560090057564591a34b08f74d3d2ccc04400ea01300343dd2b3c1dfbb9cf09c71784659491fdb4d5aba5e3d91b6fb976cf279e5def3d84629417157db3f3464b5c0ca94efba7b13c23ca72420554b957c7f5ece5e4dc732e6b18e2239be208a287d59dfccc4218337cca86394c30c7f98c067239ea62be723c67ee4ea62785f2bb591c229908fb76843df55457f31eb2e6aaab2d545689691e67dbe8a6a97209e3e20599dddeac6a0d8dd60b6aff42e739337be54d668bff40a8031db4812eee80a7e923ad37d28c0e00e0fa37e0fb5f3f5ab592",
      "aab8257b60f5cbda5e7e95b9a54f7a9638c4394ed109e2158f4a2656eed7dc4a117f385c3245dcae238078f69c88078ed8a93cca71f5dc49522da912d4f5bed6ef1f044562ce9f47e8a679887876bc642d9ce0941f86511db16a924f0da4a28653a6c970f13c5dc7fd54c2b79e5abf00b2b0418983060000",
    ],
    [
      "ETag",
      "ke0fmf4uvPMONZIvsjStgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1592428057699"
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
      "4d",
      "51",
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "572cf5d54586a09b090fa244214070c28b8690b2ddd5e1b63bdb4e8264ff6edb6dc0cbda73cebdbdf79c1d2ddb26df491e91079b6c13f653023f5c31906ffa1280285329d451602e805ceb6a9094e9eabfd9fe6632f13e866cf91c25d18cef8a396383415d25c22fc8a8aa3b2aa4709c401a09853f0db61bde6839cd40bfb8d97033d0bcd068f250186d3c5f8e5e46c1a5946164a4f96a3a7d1c4e47a4912a73aed5b732abec701b400c1cf210ce0b151c7710cab1712e6856a4e0082c7908a219a21b6b99712c0bca111d4539aeeb396edfeff6ba5ea77f7fe7fb6d7d8a219509e6ba65f54e4e0b4894340d70afed13b7ce87d7b04ea3cd82c417015d46a4a45fdd7c4b4e54d5dcd6568bd6e761c38304b1e0a8cc0830167a5e87b4693ca1762b7518929760e890aa1ff69a48c5c534156055d63fcd4577071c020000",
    ],
    [
      "ETag",
      "zMw/JJ8ZBgTDdidMrjpNgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d07fe9b3987111e8dec42211bc2106032f044a6108b69432a12efbf7999d3f383f20c79808918dac25147c02996b70899701b39dd7549e8e7b4a6b756528095539ec13b54d15e61ecb848a2b8c2deedd2fb6ee3f1f836d542f642a066b4603a1d44afc62deea27c9bc6f05e75a24cf6eb8b3a0212b47ab5291178131bae12dbea3a8105157716c6fe26dc57ac4607995d1b4f9e2213c949e2466c2cdeeb0a3eb0b76c7ac7be876d99f0334e9b87684ef14cf1959fe3e4eb9ab7dd4014d6e6d0107ba060b40e6be1988c89af74c5f41b800ffcd6c943d795f1d920f6400bf7fd6b9fed305010000",
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
      "Wed, 17 Jun 2020 21:10:25 GMT",
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
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1592428057699",
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
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "107df75720fa1adbf8864d24abb11c9220d9b8c138695555685906b2096609bb244a23ff7b7701db50476dde6066ce9933979df796a2a84f2409d47345f549f49c43f6f6e591faea99f4004791f47c8fad3c4faf97f7faefd9307c086eefb4e7feeb745a469102cdd0368da1cd689e6160e79b7527ca689ea28cd2b6206cf77a46bb3732fac3fe441b8d75c328c10ce27041922749f1c079cacebbddbd904e446914034a09eb60ba3dd8bb2ffd6e9ad147c09c759b79bb2215ebfe27f3d79862c4094da69b75a922679079b04524963a8ef0c0bf68f27708da762211fd4230208c699e70a9ada4c1340949946705b9607a1746612e441f7e6b06756d2eccb9ab601ae7dbc44bd016ce940071e4f1b714942b67b5542cfb6ae52c67aeb5b2bdf5fcc65cce3af3d562b3b4d7cafd8de9980a477e0c0556992a17c59f2d7e0a4545b600182749a1c995de9a12e1ad1a697d30c403852411aa185461de58d3516fa2197ee88f7138198cfc5003df9ff8e3111af81a3686300c7c40758642598947094db0164ec040baa78d0cf086fa003cdfd003af3f16443d18e051d8532bf4ee50cb6b46385c12965246aa26abf78ee59a9eeb6cecf9cc35eb7587288ff965a9bc5975a31c2e1a5457faaf969c284a334285a8629c96ed9ace6cee5a77351962b7161021fcb67e96db15a298c1118d32312b0ed992067230aa3d5b9a974770b129dff6414c44fc3ce83c962302e5fc8b5a4ee6dfcce38ac56ab4a29c4d6955d7ae63d9d76acdb9fb98",
      "e60ec5f9073c2f95594d45b71e44875983abf5f7d7af562d872a1e6b254fbddd98ce0f892d7cd2e340081924f898f513ab2b81a5fb33c748c4ef2f838488e37010c0b8308b6784d9313dcea07c54a46c7d45d8efebda70b82714c08c9f46f4f4d13ee2e43ac85cb08584ef9b515e89b293bb86a4bc26a780c970f110ec6a8abbd6aef5070a2b35afe4050000",
    ],
    [
      "ETag",
      "XlIuupGMW6zA4fhdQV0q2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1592428057699"
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
      "c554d14ec230147ddf5790fa2844404430f16128ea923915467c3084d4ed6e0cb775b69d8618fedddb6ec05e344b24f165edbde7dc9ef5b6a75f46a341dea2d427170df21a85ef39f0f55108f2494d2620f2580a1c32960a204dc5064943c53e35c723abfbf976e23cbb774fd3c0b38f07a7e1e565c112de12128abc2f8c300e22887d81f18b8e1b655e63294d40ade8b1384fd2850e9b7b58ae330d4fdd89e5dc569184f91a7166b66d8eec3129a14df367119f4abad04bfe4d428f73a314232bf63a810038a41eec779d71b6024f5ababd8226590c2dc172ee812845546101879ce519e58cb530d5ea7486adced9b0dbeb0eda67e7fde170cb8f994765c45255329b92dd0f4826693c619faac7a45f1c022fc2a2e5db5e90a0720ad51621f4a18a239fec729be62f44cb71fbbd0ab79ccd8d4a656d556c5510c5b0f827753c9325c52b5e4fbbbc270712a709cb535953fac67e300fb871b443dd4d5f9beef850b242a2196aeabad6fd78ea9af78f3f8ae377be37c1682d413c72862613a0add569f70668a236d95af58a292b4ae554c973d0698fe293751749cc053416606c8c6fdfa1c04d1e050000",
    ],
    [
      "ETag",
      "3AEBI2wk/NWTHQSfcL+83g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` < ?",
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
      jobId: "grouparoo-job-120-1592428057699",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffad945b6fda3014c7dff91456f6b249034208012aa10ed1748b44a18540b59bc0769cd46d12a7b6d3a9abf8eeb3132e41edb66ada5b722efff33bc7f679aa0160dcd134304e808168749f13fef8e69621e3bdf6100923ed192d87f75f9617c1b843ad9f5eef8a3bddf06e38189451b4c81630c96252172ce7988893c5bc117196679033565782f59665d65b9dbe655b3db3d375fafd325990381cd3f44e4bdc48998993667307d288188b6202332a1a98257b7bf3c16a669cdd122c45f3b86e539512cdbf543e8d198692b274b0989714b9207c45124863cd71480fd08763fd0685492352d10f14138831cb53a9d94a19ccd29046392fc495d293322a7301bdffad188cb93b76473e184d1713ffed1a265a6efd0e4001562b4e441e4b703e9b5e8075a6aadf4041c41a5c7f7267aeb27016d298ac68b00603700a869333007612e05b6e9a6d0c4e0baea2664084a46941e64314930a8ff26ec7e9bd70947b092d02a582d886adbaa6035b3db38f42d4c561afdd41a14910eaa16e07b69189fb36b10344605541eada653e4c596adba8e574217602db22edd0464e804cbb85ad3642a1ad149c4edb7682b6b155d8ecfbf9c1a9246754644cd0edb88deb99e7bb2b7fb6988c86be5bed3d846a966725fd71e7472d4935a42aed9fc6f28c28e39429a8e260bd89efce8623df5b5630d42d1b9308e2c7f9bdbe67218c053964430e132209bf60813e1ce3723af77c6f3a198e0f0ac5c5b9dc450a15f6750f7be8a9aae63f66c7475d9e4269d5988e6d547c9bf72faa2c619cbf20f3b0351bad238dda0b6aff42773e9e0eff135fa363ff0671fbf5bd569137d4dad8a219570b77f659e7163eed9991907092e243c1573c1f9d58ba5fb31655fc6e47e914b5a6f600422ab37aca581cca634eca874d93b2dd52d0b29c9ee9ec04552297cf23fa766f17f16c4fe95a2421a9dc0da3dc57e5243747487905a748d3e1ea214ebcc9c702beb6a9fd025745e4806e060000",
    ],
    [
      "ETag",
      "CVAqZVMdL5i2zI8Qr67fkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1592428057699"
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
      "4d",
      "51",
      "d1",
      "4e8330147de72b487d958431a7ce640fce91b9842c0edd9359960e2ec82cdcda160d59f877db02db5e68cf39f7f6de733839ae4bbe8b2a254f2e3914f94f0da2b9c9416dcc2506593325f5c1b192406e4d35289a9bea655acd791d852b26782c2763bf592cb69bd9acab92c9179454d79d34d2382b80a552e34f8bdd9eb75a454b302feef7c20eb42ff49a6ab8d556eb8f7019c6d75289a995d6db287a9e4721e9a5d69e3bfd6ded2a473cc49081802a81cb425ce01112b5b2ce252d39034f622d1290fd10d3d8c9b9c09a5381e869ca1b05be379a4c83bbe0d19f3cdc4fa7433dc384aa022bd3b27d27e705142aca62fc33f6c9a8cb4774b04b63c8826457015d47a4a55fd31c9033d5f6b79d33a0dd65d8bc5120df046a3312ac8571e093218d17346e950943891a2c9d50fdc35e0ba5b98c32094eebfc03744abc871c020000",
    ],
    [
      "ETag",
      "GdnBpuLEIlrpRs530yDDUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 17 Jun 2020 21:10:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-28=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
