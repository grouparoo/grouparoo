const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1602380706833";

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
      "d07fe9b31ab994c0dee8ca2082209bcad84b53a02037616d41c9b27f1fd9179c9c1f40f39c0941e4d0b23b78010b55ad5dbef30713e976d1491c5e8c27bac72594f4acdbb4ab5cde058f5393a64d91249485b7032da16e29de528b83cce023efedb8926e86b59984f55873754eaddc9c278c273e08aafab7ea4a94480fc6ef62acbcab2bde7a337a704e5b4f29b7d19793fa9a1f23bb2ef145adcdae2265f009cf7ee6265193227cf222bc403aa1383130ddef8f224046f3ca79e17d6cdfc7f6e8f8bd0336803d579d0952af330d5ad606fc37895c46b65e11a39c71f0fb071b1f21b105010000",
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
      "Sun, 11 Oct 2020 01:45:10 GMT",
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
      jobId: "grouparoo-job-1-1602380706833",
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
      "00000002ff8553616fda3010fd2b91f7b54008145224b42248d74810b6105a4dd314d9e692b90d71163b5455c57fdfd9295dbb49eda7d8bef7eeddbdbb3c917b51eec8843091ff6ea07efc7427193923a0698eafbf06db4538ae625f89f9c3833c5008ebabd9748a0861588aeeab023a4a36350735d96eba792d9b8ad652763051a7dfe98f5c6fe0bb6377e40f06485350644b51de9be45a576ad2eb9da4bbb9947901b412aacbe5fee5bd77f07a552def806bd57babd84311d57b57f3732139d54296d3ed06f51b05750a7b2a0aace02f71c72edf66ee0abaefe6083e080e9473d994da548529b82c339137b5cd4a264fc456f9ea4036c13298270e9745b32fd392eee1ccd9514d53fd58817315af574e185dade3d52c09d751ba995f07ab5977be5e6e57d1c6b9bd0ee2c0d1941560b9ced4b9b4b7082fa8bf03a54569d513f36c949ffd09ff1f8a21a0b4823698a22bb4efbb172c63639ef9837396b9c098cfc6e774c05c7e3184e18e01459e15b52c5aca927a9937a48361eab31d4d87de88a5686f3ff586c0b38c32ee8d19399e91875a6858085549255a87c86d1c26419ac4db683e4b02db42469b422fdac24c03af6bd4d82082dee9e968a242a292b13b8c92209ecd93f0266827bc849cf2c7cd6f9c71460b0588a6359aa7a15ec91d1a46a2d92a5820d84eeceb29a8c8e4c713319e9b2a5e59fe424f7080a65c6dbf6493c461f4c5967342dcd0a2b190437b306d64a230451f7f221057b44d42be6d83f83b699f62c8a086927f3c4c04dbc0473fda69ed118a8b8f2a4ae31d37872ba3c16b683748d8664fecbe7b31728905d7fadf58bfef7b27cf4c0e9311f650eae786dab5c73e5bb146bd803088c38fac57c73fc768738174040000",
    ],
    [
      "ETag",
      "h3UDI7pR8siCwwovaeIrFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1602380706833"
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
      "000002ff8d93514fe24010c7bfcbfa68498a2890263e943bf07a29a0507c3186acdd695d6fdba9bb5b4e247c7767aba2392fa92fedccf437d9f9cffebb637f642958c0ee64fe5883de1ee560af5cb000532b6be855616980790c2ccf899c1c0faeaf2683d5ef68258ee74fe3a7293e3e87e7e74498f41e0ace821dcb2428615870b363252f80da52547551ae9bcc63765bb9e2325944b30bca0b142e9fade2381cc563b6f70e8d825bbe6ef86fb4ddee3df680770bc8404399829ba5d2f800a98d9c4cc38b4a41c760ad5330ac819b0fb9c6bae21ab143954eb7d3edfb27bda13ff0fbc35e8f388529b7124b42574b1a8f59b45c2df02f8964dd1322741393e0ac796ea82e4523c485d12ce99f36f37d0632a98d7dddc93bf8a6ed5f52f16f82740152b541399402741b25ab3517428331ad249a35afaa03369acfe32f102f854629dac18d6c0194dd1c80493c0fffb75ab2cdc7ae7e86c9f80b612c99e18024d174bc4cc2e9a5e36edfee77b4b5602e3592570c389b74fdd3e1d9a0efbf3ae7073a37d13981d535782ce5f403fc929605195706f62fe34fed0e5e030000",
    ],
    [
      "ETag",
      "F+7VQF7UJIUd+OxExMoqzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:11 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-2-1602380706833",
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
      "02ff85535d6f9b4010fc2b88beb4956dbe4cec588a5ae2e00ac9b15bc0add217731c0bbe0438c21d89a228ffbd7bd84e93564aded0edccceeccef2a8dfb03ad3677aca8adb0eda870fd73cd5073a4852e06bf7cd7083dc5dd7de62179e2f774e3dfe5d78676788608a2548d5943014bc6b2988d9261a152def1ad2723ec446437b689d98b6333527e6c9d4719026a0cc97acbe41f24eca46cc0ce3283d2a382f4a200d1323caabe777e3ce369a965f0395c278ad68a08830ded4fc52724a24e3f5d92642fd4e40bb858ab0121dfc2566e9d7d79d478c54a302c1778c02a19477b554aeb005e575ce8aaeedbbeab347bd77f9e2438ffca53f8fb5cf032df216fe76ee45f1c7444814483422b4280e83d5b74fea33d96e77d57da22dc2f5a596e094392b4124da3abcf043edfc4a3bd2bc683ed01296f55fda32b80c62cd324d6dbd58447eac99e82b032159ddbb8a495a827274d85bf07f588a402411b02f6e715bc49a9aa7699e4e683e75dc3437214da7e9c4254e6ad2d3318cb31408f2a4eadeb348cd6b3337a78050cba1908f336a4f480eae9d8d274e7ae2b813d7b41cd3c1f09f06fa7dcb245c30d170c1f6dbd37f8541ec6fe370b39a7bb1df8f9193ae94177b736a88973e250e89a037e67a5255c651494511ac623ff4e671f0d3dfa7bf8482d087e816f3cf492900d1a4251548682f79864bd3bfafa3200ed62b6fa97ae149c50f8d7affb1f1c3abc3530839b450d3f7978ce0bef0de8f713c5384e2a1a20a062f19264a85d2a02dec936595f272645bd6a9a5b247702bffadd9765f7b3e4fd5112aa8e561a0fd99ea4f07b14e3c83b08881acf04ab1fa0774b0427f24040000",
    ],
    [
      "ETag",
      "uG/5If5OnAFhRBLh3n4ZgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1602380706833"
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
      "5d",
      "53db3a1086ff4ac7bd2cd148963f33d3990648213d01da905ef49ce96484ad240225ca911528c3f0dfbb32e08fc6f138bd00bcab7dc33edad55a7972eec43a75face8d58fcbfe5faf1fd829b6ff661c2b3ad3419fcd9a875c69d23871bb68048373edf2ceffe1d7dfbf12be463417f3c4ce67af1f1234464c992af98d37f72e682cb3473faff3d396bb6e22013290498c78d7d1e5d4e8767c30938562ab58ecbefe3f1e0783c749e8f0ac15ce8cccc72a3105e4f27a3cbb3769d647f2583c4853c4cb2e0eb94ebc33462336369aa79961da853d98c6d36a5e8f8ea6a3c1c5cb6abd83ad54aa47fa1bc17872aa4b92f159fc75783697b7cca4ca544a783e9b03d3e336c55c9693aba185e4f07175fdb55b3d972f5d065ab7f3e1f39b7ea66c2e75cf375c26d176fb4bae58919d90392c17f97bc97a9ad4eb82d1e04e70b0badb61ba695ea81a7e7f648805d1ae1100711a5102755c28c506b08fd7e0da93946192627ea018e87433044e8fc198eca3cff7d6ffd39837d1a6ac10be30bd7f74a6485cd6f5f1cf813ff95e78712b52a562f982ca5c447ae17221aa1d02d9c466fcb883993196f5e72fd189152e66217f7b0dbc3659a04f911f6fd98c4de306e087c47dc3ea17de27dc038dfec2a6df9c9272c11b2023cb44df266241c2cd288fa198eaface64b11f102e411e456926c21ac2fc51ea2c12e855bc70d3c006ec4755b71692138d3dc705931d53651c95de1582c5e3d6e276a42500485221811ea1d5ce4208810dd65a175e89092b8199ab64297f90c56ccb0b2e2caf06cae745a7858f2e6a25da8494c510cbd8de1276826db6f78b05f7817c5ab334724a2cdcc5e2bb35f08c64297c85fd4729d1998086f0e79fbeaf1ba00dbde0e6c5e288ebbd4b5be",
      "14b956be4be2d79163ec85cdc87e2b72f9c9a77c2d0ae33a6152943b9066b9ed77aa2f8c2c42099c67185d8777b51b427b44bb18c11fbc31d933ba8256deb0109c73b92809ff91bc32a79777d60cbae046764e470898fda899a8a59b71882a852c10c21a2bc161b8676e85adac653e675c9bca943ed9de0863caa995e476d8a9bad08eaeef4385edf9dd53d096f24630e2bd06e4a88e4c02ba676a45adc8a560bcd592f3f2cc1ec35b9bcb7276cb9b1747d46952db7e86772a807bb419ac6d0702d8b4ca802f58e23ab4ebe33d632b6e8526e5443c55da2c1f0b73541b5ba9b066dc05d8b35d4d50e0c1eca15dea5a5f72638cfcdd775325d11c98d2a0796811fc27f0cfd77bd8f123bc6bbe6a0577ba8cdbeb5c1cd097cbdd89b25070fde8dbc48e9c84c1b79b73619c7e9edbf36fb9b4354a3b0d0000",
    ],
    [
      "ETag",
      "29HphkZIQYx7eLi3YwRfrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:12 GMT",
      "Server",
      "ESF",
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
      "4e83300000d07fe9f3b220b75adfa88302c68c99ddf48594d209b4944bb90c8cffeee2f983f30328635ceb74680457e0052cd4445bb67d6b9eb1ede58cf8e14e663742cdb6f095e139854992208ba6636cdb51adea19aea26e0fcd48ecae8c5168cb380e3c999fce07e8a1e59cd413c34926877cb62d3a1d2bc9b2442b3187e694ad5370b5dca7e09a40a7324ab85fbf8379269f3eed54214f2b312fe5bb1e8c3e42fa438f7d88baba71f1cd0ff4e8b2e835115f951034cd17bcce97bbb1e7d8820a92dd52b406d8007e6fcb9eebb47ccc2c07a10df86fa6c3d2f2c71573daf31efcfe010c3091ee05010000",
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
      "Sun, 11 Oct 2020 01:45:13 GMT",
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
      jobId: "grouparoo-job-3-1602380706833",
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
      "ef",
      "4f",
      "db3010fd5722efe3689b262dfd2155a32a61ebd4a6234941d33445b67b092e695c62078450fff79d1dca4048f029b6efbd7b77ef2e4fe456941b32264ce47735548f5fb6929113029ae6f8aa4b3ea857ec74fb35f6ef1ec496b9fecdcfcbc90411c2b014dded0b682959571cd4781db7f34ad67b5a49d9c2442dbfd53d753d7fe80edcd3a1ef234d41912d44798be41badf76adce91ca5dbb9947901742f549bcbddcb7be7deebec2bb905ae55e7ad62074554e743cd6f85e4540b594ed631ead70aaa1476541458c17fe2869dbdcddc1674d7ce117c2f3850ce655d6a5315a6e0b2cc445e57362b193f115be5ab03898345304b1c2e8b7a57a625ddc189b3a19aa6fa710fce45b45a3af3f062152da7c97c15a6f1ec47b09cb667abc57a19c6cef58f200a1c4d590196eb4c9c337b0bf182fa1b505a94563d31cf46f9d99ff9fba118024a2b688229ba42bb4377c43236e0d9d0efb3cc05c6866cd0a73e73f9a807bd0d038a3c2b6a59b494e56038f2dcbe374abb837e37ed79ae9752ee8f52bf37801ef82c03e893c30979a8848673a1f65289c621721dcd93204da275389b26816d21a375a1cf9bc24c03af6bd4d820823ee8e960a242a292b17b1e2641349d25f3aba099f00272ca1fe33b9c71460b0588a6159aa7a15aca0d1a46c2e9323847b09dd8af635091f19f27623c3755bcb2fc859ee0004db9da7e499c44f3f0bb2de788b8a2456d21f7cdc1b49189c2147df88b405cd12609b95c07d16fd23c4590410525ff7c9808b681cf7eb4e3da2314171f5594c63b6e0e57468357d06c90b0cd1ed95dbf7bea110baef4bb58cff38e9e991c2623eca0d4cf0d356b8f7d3662b57a016110871f5aaf0eff00777cf084",
      "74040000",
    ],
    [
      "ETag",
      "tnc7uOb6j+S3qwijb03hJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1602380706833"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93616f9b400c86ff8bf79548a4e96884d40fc99a6da968d211ba4d9daae8c21976dd81e9dd912a8af2dfe7a35d36b593e817b0cd639d5fdfcb1e7ea95a420c1b553eb46876ef4a745f7c90a26db5b3fc6aa8b60801a0132593dfb2f4eb6544d5edeef65212259b87efd963797ece84cd7f622520de43a1504b0bf18f3dd4a2426ecb49b755bdeeb200dcaef1c55596ce179f38af48fa7c7193249369328343706c94c28975c7bfa1edee10c03d6d522cd0609da39fa531748fb99b7b9956548dc681a5d6e468a183bb0fa5a1b6118668c095c168308cc293d1383c0ba3f168c49ca65c384535a3372b1e0f1c39a1537a6491303c61c274310b2ebae796eb4a76427c385f64d16937dfbf40a18c754f3bf9033e6b7b496af146902f40e93ea8c45aa2e9a354b316521ab4b69724bb164d73c4a6cb65f20a12b534a4643fb8553d8076db23f031594efeb75ab6cddf5d5d4cb2d92bc23a36c311c9e657b35536b9baf6dcddf3fd4e770eedb521f68a456f9361783a7e7f16854fcef940de4d7c4eec4c8b01e4827f80cfca415c086df1f01b39c900f65e030000",
    ],
    [
      "ETag",
      "WTRVJ6omZyZJdooLbqXTwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:14 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-4-1602380706833",
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
      "f7658f3e9c479f52c5ba926e99fa802405d16d6aedc42986240eb10362a8ff7d3709052624f864cbf79c7bcebdbef7015df334444344f9eea660f9fd872b415103314576f0ba3ecdd6f3fc2abafb7bbefae9d0f5179275c8783402042f59922459cc9a521479c0e470e5b576b92832920bd184444daba977b161f6710f77fba60934c9e268c6d36b205f2a95c961bb7d906eed84d8c58c645cb602913cbdb76f8d76968b2b1628d9fe5fb10d22b2fda6e6512c02a2b848472b0ff40bc9f20d4b088fc1c13331a45fffcfdce22469ed007ccb0346824014a92a5d418a40a411df157995150d1f50e5f2c50579f6cc9ef8dae786e68da7f66632f6fc8f5ba94060ab11a979beeb2cbe7f2aafdbcde632b9db6a537739d7b65065c46326b7daf90fdbb5b503e77781b1c946da91b6748f6d57fb76f1141a7b9386b6e56175d366cedcf1351d636d399d7ab6af61f01b32a9785ab9f5098d59e9f4b19fceeb4f2c094411c9eae006ba48f43e1ed088f682a86f76688419a57ddaeb1093e26060312ba48c004f95d92b1649454a8caed1b3746a0e3a966512d2654c1ff46948426aea34344d62b14e4002b46fa0bb9c2b76cc652624afbb8ace5dc7b737bebb5a4cc6be5d9511912256c7b5b9b288973e151409a037eada97512e40a9fc2267e1dbee78e23b67763d1533b623c1bd7703731191583240939c244cb17c2e42681a3a597a8eef2c17e31930aaaf3e3920241afe7a7826f8f759d565559dc877e6b6e78fe727958703",
      "e88cc44585baad2fc8c0066e62a3897bbe6e0c7573a85b2d8cf11aedf77f8008b35de745a72bdbbd40f593cb2296b33478ff57015c05dedbd0c3be001436065460d21487110a64a911e4ac1e259e945e0e6cdd324c1d55e05cbd8a99fdcea167658e32234b58aa1e0baaf705eaacc50af90482204cc002d605a2ff00e17c749ead040000",
    ],
    [
      "ETag",
      "ZQpZMrjfwzWUJIbZ+ap5aA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1602380706833"
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
      "0002ff9d956f6fda3010c6bfcae4bd2c44769c8404a9d2a0a5858dd28e5269da5421931cc1ab89996de868d5ef3e279d02ac2c82be49fc9cef51ee77fe9367f4c0b30435d184a7bf96a0d61f53305ff3c110f452186d5f0b996940350486a536f35b72f6d4761f2e46c967373d21acdb7dfabe7a3c3db5193a9ec19ca1e6339a72108946cd1fcf286373b0369ed804b35ee4e3de60d4b9ec0c6d602e933c30b8ebf75bed7e07bdd44ac3942b6dc685288db7a3616f7059ed13ec5d365b3817c75952c81250c779f862cc924481d647faa41eb3c562636a5f5ff73bad41b58b6589923c798773c58f7508b3da382efad7ad51757ec2ccd6129db7469dea7c6dd87caba651efaa733b6a5ddd54bbc6e3d9fcf19056dfbfd4d04f3919c214146431e4bb78a1e44f884d2f3f20da7e5d405dcba58a215f3c9b5c4ca44a2e174c4959b791ba5727017669881b380829b57942c6cc7099d9d4bb5b5b1a32d23031948ff67820cf26a862684fcab478ae6cb85120e4a32e889495ea8b00ae4b357bc865f0097e17b539b19c977317763f0b2865e83bae173aa143fcb00c1ab5840384871b0ef64be96217d7b15bc79b2289e38704371a7ee475a23d891f88db24b449bc138c8b4e6fb36eeab90465f8e6bb67cb0937a694695ce8c621b8c4a58eebfb0ea1d87297e129131afea37690438f38de1ee47017990434da8f1c56226f0cfda5120059a9db76338010a51693d7407808b54b895ddfc8b1e01edd0f56d581c0368d7a6f59a25d68d7c7743f7454094d70e93897caccd6a5ec6923372d48782ea34380bd7c571327f01cbb1287acebee941b61c7a76f38b60a2d80290d1a7b8109fe17f8feefe96eaf0de81b25ed4da121bf24a280be5e19673287b2375f332fac866266ff995d6e50b3a8ede50f12c4016691070000",
    ],
    [
      "ETag",
      "XdCzB2kFTdJ2g+1aHHzZvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:14 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dcf4b5283300000d0bb645d3b7c422dee40f0138452104ad964280986f02d840a38dedd8eef06ef0764794ec7118baea22d78024ba6e8db7ceb747b131ae4b5b8de349245efc18463a8ce74b9b24368cf21bf0cabc2c68b13339e2b2942d379c9e9fe2b9076a6cea5b68c65d39f0a9f9230653426a7d95f09c27a6f717d51deca1a451f858822a3dc1dcdd6381d540baad092cf0657b5e709df92a4729db67047294b087cb08818917cac3d246aeb3395d8f4e2b239682afe281a88135caf65d135d5b7ed317bf5ea08bb6003e8dc97031d71799fa99aae6fc07f138ba5a7f7ab49b3810ee0f70f76afdb4705010000",
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
      "Sun, 11 Oct 2020 01:45:15 GMT",
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
      jobId: "grouparoo-job-5-1602380706833",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553616fda3010fd2b91f7710512122020a195d1744582b086d0aa9ba6c8364e661ae234769858c57fdfd9295dab4aeda7d8bef7eeddbdbb3ca27b5e6cd008119e3dd4ac3a7cda0a82ce10533883d7e070eb3bf4f3dfa5bcccbede6d7f5cef1f9c6d361e03826b96c4bb32672d29ea8a32395aafda5925ea125742b42051abd772fa76d7f5ed81ddf75d176892e5e99c17f740fead5429479dce49ba9d0991e50c975cb6a9d83dbf77f6dd4e59892da34a765e2b76404476ded5fc920b8a1517c578bd02fd5ab22a613bcc73a8e03f7143ce5f676e73bc6b6700de73ca30a5a22e94ae0a525051a43cab2b93158d1e91a9f2c501ad8279308d2d2af27a572405deb1336b83154ed4a164d665b45c58b3f072192d26f16c1926abe955b098b4a7cbf97a11aeacdbab200a2c8549ce0cd71a5be7e616c205f4374c2a5e18f5583f6be5277f666f87a209202d59134cc015ecf8f690a4644053dfed91d46684f864d0c32eb1e9d063de86300c3c236a58b8108547bbdd613af412e2f5d2c4ebba24c17e97240eb1dd61bfef0e1c77888e67e84fc515bbe0b21492370ea1db681607491cadc3e9240e4c0b29ae7375d114a61b7859a3820601f44e4f471de50294b4ddb3300ea2c9349edd04cd84e72cc3f4b07a8019a738970cd0b802f314ab16620386a170b2082e006c26f6fd149468f4f31169cf75152f2c7fa6c730405dae325fb48aa359f8cd947342dce0bc36907d73d06da43cd7451f7f011056b44982aed74174879aa788a5ac6205fd78980036818f7eb4d3da0314161f54a4823b6c0e955a8356acd9206e9a3db19d9e33b4910157ea4dccf5ec93673a87cec876ac504f0d356b0f7d3662b57c064110861f1aaf8eff00b3c0d18d74040000",
    ],
    [
      "ETag",
      "EyW81c+zOsFgBYjZQvq1jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1602380706833"
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
      "02ff8d93514fdb3010c7bf8b794da594965045e2a165dd162934ac0d4f13aa4c7c092e4eceb39db2aeea77df39404180145e92bbcbefe4fb9fffd9b307d90816b33b59fd69c1ec4e2a70bf7cb004db2a67e9a5b1b1c002068e5744ceff6dff6609d71b65c76e93ede47d342c1e2f2e88b0c53dd49cc57b564a50c2b2f8f79e35bc066a2b50b575b3eeb280b99df6c555be4c163f28af51f87c7193a6d3593a6787e0d828b8e3eb8eff42dbed21601bbc5b4209069a02fc2cdae0060a97789996d75ac1c0626b0ab0ac83bb0f95c156738338a0cae06c308cc2d3d1243c0fa3c968449cc2823b890da1372b1a8f39745c2df19144b2e12911a68b4970d93db75497a213e2c3649147e36ebeb740298d754f3b79019fb5bd2715ff22481720551f544123c0f45152afb91006aced25d1aeb9d6476c9665e9078837c2a014fde056f600ca6d8fc0f7349b7eb65ab2cdebaebe4df3f907c23a32c311c993abf92a9f5e5d7beef6f97e673b07f6da2079c582b7c9301c4fcecea3f0c93997e8dd44e7c4ceb410b082d30ff0533a16975c5938fc07e69863725e030000",
    ],
    [
      "ETag",
      "EzvxOIapjls4tjOyih61cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:15 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-6-1602380706833",
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
      "db6ea33010fd15e47dd95d358981dca5a8cb26741729972e38adba17250686d42dc12936adaa2affbe0334bda852fb64cb73ce9c33e39907722db2980c4928363705e4f79fae64488e0868bec157474f6733465997f3dd7c723eb91b7444cf198d10214a96e2db5d0a0d258b3c02355c06cd4d2e8b1dcfa56c60a246b76176a965f7698f76fbb68d3405693215d935922fb5dea961ab75906e6ea4dca4c077423523b97d7a6fdd5aad5d2eaf20d2aaf55ab18522aaf5aee6712a23ae85cc46cb00f50b05f90ab65ca4e8e0991887df5e676e0abe6d6e107c2b22e051248b4c97ae304524b3446c8abcca4a860fa472f9e2420277ea8e99f1f5c8089c1377357602f679ad340aac0dae8c80f9defcc797f2ba5ead2eb7776be3c45fcc8c3556998814d4da38ffe9faae71e0fc2d28b561641c1b0b7fe2fac6f78ba790138c8f8cb588ab9b31f5661e334c4a8dc5c949e03283a2df18941659e596f13085d2e9633fbdb79f5812b8e60aeae00abbc8cd3e1d8449d88b92bedd09130a61d80f7b1d6e87341ab4a11d87c091a7cbec158b6732834e1c9bd48ea0db838427b60d10b7db761427bc433b835e6cc589c50736d91f91bb5c689808b5934ad45d25e7bec7dc15f397f3b1c3dcaa8c8417a99ed4e6ca225efad4582482dea96b5f468544a5f28bbc39737d67ccbc33b79e8a296c78741fdce05c243c5580689ef32d68c86732c6a691d345e0316f3177a6c8a8befaf4805064f8e7e199c0ee775597757512e6cddc8039b3d3cac30174c6d3a242ddd61762518b36a8d5304d665a43d31e9aed26a5f437d9efff211167bbce4b7e2d5dff82d44f3e249043167dfcab08ae021f6de8615f108a1b832a38695ae00845aad48872a847496c4b2f07b6d935cd72d8109ceb3731cbee1c7a56e62833",
      "c21632fd5850bd2f58672d56a82710067102e6b82e18fd0f85829a5fad040000",
    ],
    [
      "ETag",
      "AtLMMT0T6aapNDWDw95i7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1602380706833"
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
      "93",
      "4d",
      "6f",
      "c2",
      "300c86ff4b760589c1d441250e050a632a1f2be5344d55684c094b9b92a42084f8ef73d9049caa95531ce77d6ccb8e4fe49ba78cd864c5e35d0eeaf81483f9280c1f742e8cc62393a906522360688ccabcffc276ef9de16018cc3b6a00d971d5b49c6e17153ada4042897d226b0e8269627f9e484a13408c3314986356d8e369e08e5c1f1d89648563baf43ca7e7b9e45cbb026baeb4092f972bb808fcf17454ce09fa10868573510d892165a0aa313c0b29630ab4aec8491dd22cbb41bdd9cc739d69394553a624670f907b5e9510667f2386decc09caf58c9abb110d9cc02dd76b4393bb9a82f1c45d04ce645e4e85e12639fca7d55fe71ad9ca950f6b50904650fce24cc92d44665c2c88c6ec02ea5ae62a82627828be3cc44ae6195552d6d153b7eacf56a3d96a375e1b56bbd5429d9011355ca6285d2eb03462a4a1c297075c0fd2207ff7ded1809e2b89b13514613b56eb37495f1689b157b65139d4484471cbdeb821f69a0a0de71f9fe432d6c3030000",
    ],
    [
      "ETag",
      "uC4dqJ9FDFTP9rDepyb26A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:16 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "1800d0bb642d0e2845e90e50a01214a514e3c6c9a451f92941be50099ddebd4edf0dde0fa28c7180b314156fd02b5274664fd934124bd77418f1faecb49f6d68b426fe02885f5f9adb65bba3872c344728a1dd9f967182bd373b6a1abdd7160daf54aeb6de033a42762b4cbe1fc36a2e1d153a12e635e1d4bc7d0a611841267ddc5f457c2cfcf4a334d78e71f288152423d3203ae8d0adc5b12aa9452051b2bdea694cb31036ef7a47ef520beed110559460968aa3f955bb38c631e4a3a95c8d155692676882f8d0161d8773f19ccd5f6c7b82fe9b67a95afebcba9c76bc43bf7fe8cad92805010000",
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
      "Sun, 11 Oct 2020 01:45:16 GMT",
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
      jobId: "grouparoo-job-7-1602380706833",
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
      "8553616fda3010fd2b91f7b54020940424b4229aae6810ba105a4dd31439ce25751b621a3b2054f1df77764ad7aa52fb29b6efbd7b77ef2ecfe4919729199184e74f3554876f0f2221670414cdf175797feb853f974f3fc561bd0b6fc43ecdd7fbfd788c08ae59926eb605b4a4a82b0672b45eb5f34ad45b5a09d1c2442db7d51dd83dc7b35d7be0390ed22414d99c978f48be576a2b479dce49ba9d0b911740b75cb699d8bcbe7776bdceb6120fc094ecbc57eca088ec7caaf9bd108c2a2ecaf17a85fab5842a860de50556f09f982617ef33b739ddb47304ef3803ca98a84ba5abc2144c9419cfebca6425a36762aa7c73202b7fee4f238b89a2de947149377066a554d1581db6605d85cb85350bae96e16212cd9641bc9a5efb8b497bba9caf17c1cababbf643df523429c070adb175616e015e503f05a97869d423fdac955ffc997d1c8a26a0b4842618a32bb4ebd9c3244b5c9679ce7992d990245ee29e5327b1d9b00ffd34018a3c236a58b41425380c9ca10df1f9d01ec47d973a71d2f3524ce8b9dd1eeddb69af4b8e67645f7105975c6e85e48d43e42e9c457e1c85eb603a897cd34246eb425d3685e906ded6a8b041047dd2d35147b940256df72c88fc70328d66b77e33e139e4941d564f38e38c1612104d2b344f41b510291a4682c9c2bf44b099d8cd2928c9e8cf33d19eeb2ade58fe4a8f7080ba5c65be641585b3e08729e784b8a5456d20bbe6a0dbc878a18b3efe4520ae689384fc5afbe16fd23c8590410525fb7a98083681af7eb4d3da2314171f55a4c23b6e0e935a8355d06c1037cd9ed85dd7b65d62c095fa10eb3a8393673a87ce081b28d54b43cdda639f8d582d5f4118c4e107c6abe33f58bd5da374040000",
    ],
    [
      "ETag",
      "OhV8RKOqKoyUvRPowdgUww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1602380706833"
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
      "4f",
      "e2",
      "401086ffcbded7921451204dfc404ff0482a08d433b98b216b775a17b73b75778b2184ffee6cf5d0e825f54b3b337d263befecdb3d7b945ab088ddcbe2a906b3fb51805bf86009b656ced2ab426d81050c1c2f88ccbab7d96410ff594c3673fdfb32de2d9e8afaf9fc9c089b3d40c959b467b904252c8bfeee99e625f8365475a9d74d1630b7ab7c71952ea7b34bca4b143e9fdd24c9284ec6ec101c1b05777cddf0df68bb3b046c83f74bc8c180cec0cf5219dc40e6a65ea6e565a5a063b1361958d6c0cd87c2605d7183d8a14a67d0e9f6c393de301c84fd61af479cc28c3b899ad09b158dc71c3aae96f84c2259f78408d3c424386f9e5baa4bd108f1e17496f64f9bf93e02b934d6bdeee41ff8a6ed33a9f83741ba00a9daa002b400d346c96acd8530606d2b8976cdabea88c5f379f205e25a1894a21ddcca1640b9ed119824f3d1ff564bb679dfd5c5281d7f21ac23331c91747a355ea5a3ab6bcfddbddd6fbc7360af0d92572c789b74c3d3e1d9a01fbe3ae7277a37d139913335042ce3f403fc928e453957160e2f142aa23b5e030000",
    ],
    [
      "ETag",
      "c1WcF7BZQFjOnVGByQqguw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:17 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-8-1602380706833",
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
      "9b",
      "40",
      "10",
      "fd",
      "15",
      "445fdaca36d88e0db614b5d4c115922f2de046c98bbdbb0c64136009bb248aa2fc7b66b19d26ad94bcad66ce9973e6b28fe60d2f13736a529edd36503f7cba16d4ec98a04886d1bb4b6f4d27970d1b871b1a2dad582597e7f7a7a788e09a254951e5d095a2a919c8e926ea65b5682a520bd1c5425db7db1fdb83a16b3bf6d81d0e9126214f17bcbc41f29552959c5ad651ba970991e5402a2e7b4c142f71eb6e6055b5b806a6a4f556d1421169bdabf92d178c282ecad34d84fa8d847a0b05e1393af84b4ce8f7b7957b9c14bd0cc1779c01614c34a5d2aeb0041365cab3a66eab9ad347b375f9ea6146fec29fc5c6d78e1179737f3bf3a2f8f34e2a14d819441a511c06ab9f5ff473b7dd5e15f73b631eae97c60ebb4c790e7267acc3333f347e5c18479a17cd3ac68e27edcb5804cb20364e8cf57c1ef9b161a3ab04a4e265eb29263407ede730b5e0ff5569025144c23eb9c55991be6b4f684a1d96bac3114d6da0d4a5ce880ca9cd262770925020c853ba7acb22a528114a9c517f943ad44e86cc71dc91036c4cc76c32067b9030ea809dd2b1f9d431ef6baee08ccb4a48be9f9d791e06b1bf8dc3cd6ae6c57edb464a9a5c9dedcde9265efb54d82482dee9eb4967b94025bd886015fba1378b833ffe7ef70bc8087b886e71fb29c925209ad4a40005f552243834f3d73a0ae260bdf216ba161e54fc50e9f8ef8d1f5e1c4221a45043c93e1e3282dbc447dfe278a408c53345155cbbe2b85126b506ab61bf595e682f4776df990c06660baed5bf39d71ee9",
      "ca2fc7a92b4201a53a34b43f52f3e920d6c817102671212bbc51cc3e03491208ff22040000",
    ],
    [
      "ETag",
      "vZAOb9Zuc6RUbSM/TtdZWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1602380706833"
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
      "9d955d4fdb301486ffcae45dd25a769ca64924a41516a05b3f5869a54d13aa4ce206431217db2d4388ff3e2740928e2ca25c34f5397edfe63c3eb6fb086e7916011f5cf1f86ec3e4c3e798e91ff960c6d426d1ca7cad45a618e800a6696c9467d6743cfcb538feeef44f7a57f82e3b18ff5cdc1f1e1a850aaf594a81ff08569c259102feef4790d194191b8f8c403facf3f170320f4e839949a422ca1393c56834381a05e0a9531a565c2abd2c82d278319f0d27a7edbe847ec8660ae7c97e9698651193fb79f87a49a34832a5f6f409b5a4eb75653a9a4e47c160d2eea25924058f3ee0dcf27d1d89de568e93d174306fd74754d75af475300fdaf54ad3b456d37c380e2ee683f179bb6bb9bc4eefdfb3d4974f1d7023ae666cc524cb4296efe2b514372cd4c3fc8028f3f6847595d8c890e5cd33e262229662b3a65288aec974dd2e7690455cd4478e4b88d12522a49a8bcc481717a634a085a6c94cdc9be3016c2390c5d09c9455f1dc9a342e10f25120392b836f4c6e055765cc6e9e13e80bfb539407439196b3639a5456dc8396dd87c4857dab4c6ab9a9142b9a28d63c65f53c882b9b852cd4455617556562d87351afe761cf0ebc06e1276cf998f8d83e40a858eb3a6df5cbc734e4490d38c8f7c86b103213e146d413737a937abd0462db81368656adc816c2dd29cf86c4794b61ede23ab6016ec4b55a71496938954cb3a4168a4d28c2db3211c72f19eb5dd41843d7340a238889bd77931dc785e42d0bd985ee13ec35439356e8aa9e414a35ad3a2e34532b21a33243c3d714790f35f608f4ccde46e6e33493fd3fb0cd7aa1b728f62eb38b5dd2cc6cffcb7cf972bc8f1e0cc3b914e6aa502cbf253c873cdf19c7222732dbdacf2be980909a3fcd33ae815ff4e6e92f071ce60192070000",
    ],
    [
      "ETag",
      "H2OMIYUCK67F5b1qn+MXUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:18 GMT",
      "Server",
      "ESF",
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
      "02ff1dcfdb7243400000d07fd9e7c8884bd9be113256c7755a96971d742952c12e099dfe7b333d7f707e4051559431c26f3d1dc02bd80a091eabe3db4d3715e333f0121c54fba598ef8dbe7bb5788230e9f0a20a9d13ef7dd496ae5b9c0cb7f37c7bb7b558949cb821bc9159bad4ca873ed581ef624ca33e9359213bb185c9b636993e690f555b9700952a4a909512664465cef31d2a54ea69abe40a5227e122dccf42f8859a7940c930aea9c3ababdc9adab7ab3fd6c5e838c3d970d6ac17938552296ef06abcdb6158fbc80607401f633b5346dae74c56213c80ff26e1db489f579316339dc1ef1fa4364fa105010000",
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
      "Sun, 11 Oct 2020 01:45:18 GMT",
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
      jobId: "grouparoo-job-9-1602380706833",
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
      "ef",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "5722efe30a845f2541422b8274452a610ba1d5364d916d2e99db24a6b1c35655fcef3b3b05b59bd47e8aed7befdeddbbcb13b917e5968c0913d9430dd5e3873bc9c819014d337ccdbeef199591eadd6fe71b3714a38f7f8aab6c324184302c458b5d0e2d25eb8a831a6fd6edac92f58e5652b63051cb6f75cfdd5edf7347eeb9d7ef234d419e5e8bf21ec9bfb4dea971a773946e67526639d09d506d2e8bd37b67dfebec2a79075cabce6bc50e8aa8ce9b9a9f72c9a916b29c6cd6a85f2ba81228a8c84d7b27e2965dbccedc16b4686708de0b0e94735997da548529b82c5391d595cd4ac64fc456f9e240d6c175308b1d2ef3ba2893921670e66ca9a6897edc817319ad96ce22bc5c45cb69bc5885c97a76152ca7edd9ea7ab30cd7ceed5510058ea62c07cb7526ce85bd857841fd2d282d4aab1e9b67a3fceccfe2ffa118024a2b688209ba42bb9eebb3948d78eaf5872c7581318f8d86b4cf5cee0f60b065409167452d8b96b2f4fd7377c46198a4fe70980c862e4b98ef8df034ecd35edaf5fade801ccec8ef4a68980bb5934a340e91db681107491c6dc2d9340e6c0b29ad733d6f0a330dbcac516383087aa3a783890a894ac6ee451807d174162f6e8266c2d79051feb87ec019a7345780685aa1791aaaa5dca261249c2e833982edc4be1c838a8c7f3c11e3b9a9e285e5277a8c0334e56afb25eb385a849f6d3947c40dcd6b0bd93707d3462a7253f4e1270271459b24e4eb2688be91e62982142a28f9fbc344b00dbcf7a31dd71ea1b8f8a8a234de7173b8321abc82668384",
      "6df6c8ee7a9ed725165ce97f63beeb768f9e991c26231450eae7869ab5c73e1bb15a9d4018c4e187d6abc35f9252ab4b74040000",
    ],
    [
      "ETag",
      "gZvbaoRs2kdDU0Ni7+xmHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1602380706833"
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
      "ff8d93614fdb301086ff8bf99a6a292da544e2430a1d540a2d6dc3266d4295b12fc1c5c905db292a55fffbce8175d39814be247797e7e47bcf6f76ec49959245ec41e5cf3598ed510e6eee8305d85a3b4baf0a4b0b2c60e0784ea4c6efcbb958ffc8ec976f5ac4eee46cf4dacfcfcf89b0e2110acea21dcb14686959f473c74a5e00b509d47551ae9a2c606e5bf9e2325d4ca6579417287d3ebd4b9278948cd93e38344aeef8aae13fd176bf0fd81a1f1690818152809fa532b806e1265ea6e545a5a163b136022c6be0e6436eb0aeb841ec50a573d6e90ec2e3de303c0d07c35e8f388d823b8525a1774b1a8f39745c2ff08544b2ee3111a6894970d63c375457b211e2c3c9341df49bf9fe063265ac7bdbc96ff05ddbbfa4e69f04e902946e8372282598364a552b2ea5016b5b49b42b5e55076c349b251f205e4a834ab6831bd50268b739005f9359fcbfd5926dfeecea324ec71f08ebc80c07249ddc8c97697c73ebb9fbf7fb1d6d1dd85b83e4150bde26ddb03f3c391d846fceb940ef263a2772a68680094e3fc0b5722ccab8b6b0ff05397fb2315e030000",
    ],
    [
      "ETag",
      "loWSQcjZfs/VlcAt59Bz4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:19 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-10-1602380706833",
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
      "4ee33010fd95c8fbb2bba2ad73699356aad86c497723f502890b622f6a9dc40986dc881d1042fdf79d24145821c1932dcf3973ce8c671ed10dcf233441014f6e6b563d7cba2e02748498a409bc66765292bca2f97a93de5867d5fc7e1969f6740a08deb004cdca94f54451572113938ddf4faaa22e6955143d48d453714f1d614db7b0894796ae034fb0345ef0fc06d85752966232181cb4fb49512429a32517fdb0c89edf0777daa0ac8a6b164a31f85f72002a62f0bee8715a8454f2229f6e7c30500b566d5946790a165e9851f0edffd47d4eb37e02e03b1e321a86459dcbc616a4088b3ce6495db559d1e411b5365f5d90ef2c9c1951be1e29be3d77b633db279f774282c04ea142f189e7ae7e7c69aebbedf62abbdf29736fbd54765066cc532676cac54fc7739403e74f8db1cea6cab1b2f64e1c4ff97ef91cb2fdd991b2e3517b5316eed2258aa1ace773df210a06b7111392e7ad57428394353e9fdae9befdc486402515ac0b6ea18754b5f0388803338c2d7d18c4980581159843aa07381c1bcc88024681279bec2d8be6d0a1e198457814e8261e6313601a55756c19a1468dd1d08c23351e1a311ea1fd11baafb864275c9485e05d4fd185e712674bbccd6a6613a72d23a6752a4f3a734d11af7d4a281240efd4b56fa2bc00a5e683dc15713c7b46dc73a79b89054b68f8e0dfc254c434150cd0b4a21993ac5a1611340d9dae7d97b8eb95bd0046fbd1a707844093df8f2f04f250b65d96ed8988bb747c622f4f5b0f07d0394deb1675d75d908635dcc35a0f1b44d526aa3e518d3ec6f817daefff021146bbcb8bce368e7789ba278fc5ac6279f8f1af02b80d7cb8a18775012c2c0cc8c0a0490e33148a4624ac58374b3c6bcc1cd8ea78640e510bae",
      "e49b98690d0f4d6b72341959c672f95451b72e506827568b671004610456b02d10fd07d655084fae040000",
    ],
    [
      "ETag",
      "mAgpTnranOUlk8QrFwMd2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1602380706833"
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
      "02ff9d956d53e23010c7bfca4deee5414dfadcce387345aa7287a8505fdcdc384c6c0344dba626014f1dbffba53d6d41b90ef88292ddec9fee2fbb1b9ec11dcd13e0831b3abf5f12fef8754ee465b91813b14ca5505f05cb05011d40249eabc8fcd28ce4fdafa727269283837e3fec653278383c5411225e900c03ff19cc28491301fcdfcf20c71951329aa800f95894ebc1280a4fc2b172642c291da3abe130e80d43f0d2a90533ca859c56462d9c44e3c1e8a45d97e24fc954e234dd4f32277942f87e1a5a4c71927022c49e3a26a6b8281a51effc7c1806a37615ce13ce68f209e58aeeab48e5aa511c0fcf83a83d3ec172ad44fd200adbe385c4d95a4ed1e02c9c44c1d945bb6a3a5d640fbb1cf5f54b07dcb29b3199114ef298945d5c70764b6239280744a8b7a7a42bd892c7a42c9e0aae36e69c2d0bcc19eb2a4f17c12eb2a16eb8d081b66b182a3065319694e52af66aa2720392499c8ed9839a0f60aa005e2dd5a8ccaae7aa72970ce52ac8b0c4b575c4241133c693da83e33797f19dfca992d46296d5fbc7aab153529bc833344fd34da83e76ed957c4976304cd7d3606de950875da87761932cd22c17bac8353c33f4b6047e41ba8f0c1f99df20ac8e7c9dd9aa0543ca1be41f6c910ba98eefcd91debe7acc5d802d4343769997e63519cd702afec3b8b9e5eaa5fc2389b589ec41d3d98e6cb52237bfdc2739ad8d498c53da9c40222adbdaa9be86ab210369c87435c7dc0571634b77547bb81f31ec77bc1e42db79ed565ea7169c9274de10fe4c0915b5b5b82b4d7b175cd7527dec6a8ad972b713b5743374b4b542d608ce062b828e636d6775deb35ebfce76ef518de40567eaa210a4bc233cdbf877631cb192485d7c7e994a07c458fd659e5209fcaa282f7f01402f338890070000",
    ],
    [
      "ETag",
      "nQ4TtqYzzosd//DDEBmtAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:20 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dcfdb6e82300000d07fe9b31ac64dd91b080b2a654020145e0896ba158102edb868f6ef333b7f709ea0c498705e0876271d78076b291b3bbcbbb083a59a15d3dabaf7fdc1285dccf76ae86e933cca3f27329f3fb4cade9edc00b9a445a1dd4c8fb67e4098b9a94575a31a987a3df2384d6f047b4e16c89dfd16a49e01b9f4457ebe5104756215adc2601632dc4a69ad3a7bfb2ccc1247c3f1b074bd70a0e5f17bdc24fa2df62a7a4a2f76155e254542224b4641e5d92966da7a9a4088c3a51e545f69a6bcb746c75c730636802c3d1d092fe86ba66886b101ffcd42ac3d795d2d528e6404bf7f1f57d82105010000",
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
      "Sun, 11 Oct 2020 01:45:20 GMT",
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
      jobId: "grouparoo-job-11-1602380706833",
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
      "fd2bc87b6d1212480291a235a3648d94900d48ab6d9a903186b925986293aaabf2df776d9aae55a5f609dbf79c7bcefde011ddb22a433394b2e2aea5cdc3a71b9ea23344252ee0f5eea777db8aa5c47febc317e12f6de12d83fbf91c104cb104ded725ed09de36848ad92eea170d6f6bdc70de8344bde1b0379c9823cb31a7e6c4b12ce0095ae66b56dd02fb8f94b5980d0627ed7ec17951525c33d1277cfffc3e388c0675c36f289162f05a72002a62f0bee8e792132c19afe6bb080cb4823609dd63568285ffcc2c3d7f9dbacff0be5f00f8c008c584f0b692ca16a420bcca59d1363a2b9a3d226df3c50145fedaf76283f0b2dd574985f7f4ccc8b0c4897ca8a9b10cb71b63152cb7e16611afb641127997fe66d1f7b6ebdd26888ceb4b3ff40d89d3926aae3137cef52d800be86754485669f5583d2be5a706adde8e4511405ad02e984057f0d031dd344fa72477ac719a9b344d9d743ac6566a12d7a67696520c3c2daa59b8e295331eb963374b136b9a39896d4decc41d4e26893dc1a66b4f33331f0dd1f10cdd374cd20b266a2e58d721741dae623f89c35de02d625f9790e3b694179d3155c04b8f120a04d03b351d5594715052ed5e05b11f2ebc7875e577135ed3029387e80e669ce3525040e3069a2769b3e119340c058b8d7f01603db16fa7a040b35f8f48f55cb978d1f2677a0c035476a5fea2280e57c1576de784b8c265ab2187eea0cac859a94c1f7f031076b44b82beeffcf007ea9e429ad38656e4e3610258073efcd54e7b0f58d87c901112eeb03a442811d2d06e8598aef6c41e99b669230d6ee4",
      "db983b3e354de55019e99e56f2a9a26eefa1d04eac15cf2008c2f403ddace33f92cb07df77040000",
    ],
    [
      "ETag",
      "qZCkusFtazpvBsEF4sCFNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1602380706833"
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
      "3010c7bf8bf79a6a09855245e221655d5729b4ac0dbc4ca872e34b707162cfe764aaaa7e77ce01ca34268597e4eef23bf9fee77f0eec49d682c56c2bcbdf0dd8fd9712dc4f1fac001be5905e46d7082c60e07849e42cfa9af1edcc5c374fcb7b74edceb6d3fbe4ea8a08cc1fa1e22c3eb0428212c8e25f0756f30aa82dd7aaa9ea4d9705cced8d2faeb3d57c31a3bcd2c2e78bbb344d26e9941d8353a3e08e6f3afe136d0fc780edf476050558a873f0b318ab7790bbb99789bc320a06a81b9b03b20eee3e945637865bad07541944d1201a8567c37178198ec6c321814ae7dc495d137bb7a6f998d38eab95fe432a59744684ed62525c74cf96ea52744a7c385f64a3f36ec0bf81425a742f4b79035fc5fd4b2afe49906e40aa3ea8845a80eda3a4d970212c20f6921a37dc981336592ed30f10af85d552f483adec01946b4fc0f77499fc6fb5e49bf75d7d4bb2e907021db9e18464f39be93a4b6e6e3df7f07abf93bd03bcb59acc82e07d1285e7e38bcb51f8629d6beded44e7c4ce3610b09cd31ff0433a16175c211c9f018e09345a5f030000",
    ],
    [
      "ETag",
      "G1/TabGpCukOVstvjrvEVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:21 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-12-1602380706833",
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
      "0002ff8553694fe33010fd2b91f7cb1e3d9ca4572a556c296137520f364941eca1d64e27ad218d4bec8010ea7fdf49423984049f6c79de9bf7663cf340ae45ba227dc2c5fa2687ecfed395e4a44640b335be5a9b9c7f037f3339be7346d3f9f58569b76038182042142cc5b6bb04ea4ae65904aa3f0f1aeb4ce63b964959c74475d3aa9b1d6ad93ddaa59d9e6d234f41128f457a8dec8dd63bd56f360fda8db594eb04d84ea84624b74fefcd5babb9cbe415445a355f4b36514535df173d4a64c4b490e9601ea0815c41b6802d13095a7866aef8f7d7a91b826d1b6b04df8a085814c93cd5852d4c11c93416eb3c2bb392fe03296dbeb890c01dbba3d0f85a3382e1a9bb180d83f0f3526914581a4c1941e87bd31f5f8aeb72b1d86cef96c6a93f9b184b2c331609a8a571f1d3f55de3c0f99b536ac3c0383266fe89eb1bc7974fa16130aa194bb12a6fc6d89b78a1d13266a7a7811b1a14ddae406991965e43c613287c3eb6d37bfb89058169a6a00a2eb087ccec5187c7bc1bc53dbbcd630a9cf778b7cd6c4e23a705ad1507863c5d642f592c95a94d29f45a8ec3569d36e7dd4ec7695b16e30ed81d703a6db36d036f472d87ec6be42e131a4e84da4925aa9e920bdf0bdd45e8cfa7a361e89665c42c4ff44965ae28e2a54f8d4522e89dbaf6455448542a3ec89b86ae3f1c85deb95bcdc418d62cba0f6e702a6296284034cbd816346413b9c2a691b359e085de6c3a1c23a3fce8b3034291fe9f87674278bf2bbbaccb9384dec40dc2e1e4acf470009db3242f51b7d58558d4a2756ad5693734adbe69f7cd568352fa9becf7ff9088a35de525bfe6ae7f49aa271f62c8208d3efe550497810f37f4b02e88c58541191c342d7086225588441954b324b6859903db322db3434a70a6dfc4ec9679685a91a3c8085b48f56345d5ba60a19558ae9e4018c41198e2b660f43f63529c7eae040000",
    ],
    [
      "ETag",
      "2hub+eRhMBw9CNUkW134eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1602380706833"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d955d6fda301486ffcae45d0e223b4e42825469d0860e8dd28ed2aba942263904b72666b6d30e55fdef73d229c0ca22e84de2f7f8bcca798e3ff2821e799ea22e9af3ec57016af33903f3a31c4c4017c268fb5acb5c036a21302cb399d192f4faea26e6de605e888116c3ec39ef9d9dd90c9d2c61c550f7052d388854a3eecf1794b315581b4f6d82d9accbf1703c8d2fe3890dac645a06c677a351af3f8ad16bab362cb8d2665689da783b9d0cc797cd3ec13e64b38573719a25833c05759a87af672c4d15687da24fea195bafb7a6fef5f528ee8d9b5d2c4f95e4e9079c4ffc5487304f5bc76074dd9b36e7a7ccec2cd1456f1a37e76bc3563b354d8757f1edb47775d3ec9acd96abe7635a7dffda420f723e810528c8132877f15ac90748ccb03c20da7e5d405bcb4225502e9e4dae2632258b355352b66da44ddc3609b04b43dcc14148a94d14326186cbdce6dedddada90918689897cb6e70379364155437b5416d5f3c9863b154339fa062263b5fa2e80eb5a2d1f4b197c85df55714e2257f5dcc06e6801b50c7dc7f5422774881fd641a30a384278b8e360bf962e76711bbb6dbc2d92387e4870a7e3475e1c1d48fc44dc2ea15de27dc1b86af52eebb69e4b50866fbf7b5eccb931b5cc924a778ec1252e755cdf7708c596bb0e2f98d0f01fb5871c7ac4f10e2087fbc824a0d161e4b011796b18154a00e4b5eedbcd0042d45accdf02e131d42e25767d23c7827bf43058530702db34eabd6789f6a15d1fd3c3d0512334c1b5e3422ab3dcd472a88ddcb620e5a58c8e01f6ca5d4d9cc073ec4a1cb3aefb536e841d9fbee3d829b402a634e81c0426f85fe0fbbfa7bbbf31a06f94b4578586f2968802fa76679ccb12ca5e7dddb2b0164a98fd697ee30675abda5eff0052ab57a192070000",
    ],
    [
      "ETag",
      "9h1ABrPEi4FbulFslIgwnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:45:21 GMT",
      "Server",
      "ESF",
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
