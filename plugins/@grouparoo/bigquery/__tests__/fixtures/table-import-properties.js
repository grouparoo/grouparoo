const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1605334902709";

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
      "0000000002ff1dcfdb6e82300000d07fe9b3188155e6de406c885c04b98e97a661050a11ba4205b2ecdf6776fee0fc005255749af03cf674001f6023da695fed5d7eb06044199bafde45419db0b901ed40bb65d78bdee6ef074f0bc57a1e1c592c6fe213b675652fee241ef461fbac71e23ec2d931f1391cc3c69c78a0c75eb83d89c9cf58f25ce6cf6a64b426ed6cc105c949b88ee0ba83c68e9729c39edfb7c725568d2232619073745fa32dc5c1107a755230d907a5d0b23afa96a42b55b4a5ce2d4f8dd9df5aa63486549a34be2f725546354e0c2890d97e15b5bb801da02b67824e98bdb23a3c9d76e07f8ee78dd357dfa24450017eff001b0761be18010000",
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
      "Sat, 14 Nov 2020 06:21:48 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1605334902709",
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
      "ff85536b4fdb3014fd2b91f795b6699b3ea56a54258c4a6dbaa509eca129b29d9b6096c625766008f5bfefdaa10c84049f62fb9e73cfb98f3c923fa24cc9943091dfd6503d7cba918c9c10d034c7d7abebf977115f6ee6220e7f7a7ffb31ac26ec7e364384302c4577fb025a4ad61507358db7edbc92f59e5652b63051abdbea0edd41bfef4ddcdec89d204d4191ad44f907c9d75aefd5b4d3394ab77329f302e85ea83697bbe7f7ce5dafb3afe40d70ad3aaf153b28a23aef6a7e2e24a75ac872166f51bf565025b0a3a24007ff89293b7d9db92de8ae9d23f84e70a09ccbbad4c615a6e0b2cc445e57362b993e12ebf2c5816cfd95bf881c2e8b7a572625ddc18993524d13fdb007e73cdcac9d6570be09d7f368b90992ede2c25fcfdb8bcd2a5e075be7eac20f7d47535680e53a33e7d4de02bca07e0a4a8bd2aa47e6d9283ff567f976288680d20a9a60327287b43b76272c63239e8dfb0396b9c0d8988d06b4cf5c3ef1c04b1950e45951cba2a52c538f7930825e920e262cf1466e9a50187413eaa669e675f9b0eb0ec9e184dc5742c399507ba944d32172152e233f89c23858cc23df9690d1bad0678d3153c04b8f1a0b44d03b351d4c54485432ed5e06911fce17d1f2d26f26bc829cf287ed2dce38a3850244d30a9ba7a15acb141b4682f9da3f43b09dd8d7635091e9af47627a6e5cbc68f9333dc2011abbda7ec9360a97c1176be788b8a4456d2177cdc1949189c2983efc4620ae6893847c8bfdf007699e42c8a082927f3c4c04dbc0473fda71ed118a8b8f2a4ae31d37872ba3c12b683648d8629fd9e3be3724165ce937b141af77ec99c96132c20e4afd5450b3f658672356ab67100671f881edd5e11fdf91b6d774040000",
    ],
    [
      "ETag",
      "WhAXiUVOAiURZ4x3UeL9bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1605334902709"
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
      "d1",
      "4e",
      "eb",
      "30",
      "0c",
      "86",
      "df255cd249dd181b54e262831e985436d8cad5119ab2c6ed09a47596a443d3b477c72930d001a9dcb4b6fb59f1effcddb167590916b1952cd63598ed5101eede0773b0b572965e1a2b0b2c60e07841a45eb935d7316e8f87c39ec66388d7ababfb8b0b226cf60f4acea21dcb25286159f477c72a5e02b565a8eab25a3659c0dc56fbe2229d4fa6d79497287c3e7d4892d13889d93e38340aeef8b2e17fd1f6b80fd813aee69083812a033f8b36f804999b789996975a41c7626d32b0ac819b0f85c15a7383d8a14aa7dbe90ec2d39393fe79d81b86e7c429ccb8935811fab0a0f19843c7d51c5f4824ebf688304d4c82f3e6b9a1ba148d101f4ea6e9a0dfccf715c8a5b1ee6d271fe0bbb6ff49c57f09d20548d506155009306d94d44b2e84016b5b49b44baef5011bcf66c9378857c2a014ede046b600ca6d0ec09f6436fa69b5649bcf5d5d8dd2f81b611d99e180a493db78918e6eef3cf7f87ebfe3ad037b6790bc62c1dba41bf6cf4e8783f0cd3997e8dd44e744ced410b08cd30f70231d8b72ae2cec5f01eac891385e030000",
    ],
    [
      "ETag",
      "pbtqapEoy+772po+eEqbDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1605334902709",
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
      "79",
      "6f",
      "9b3014ff2ac8fb67d37290841c44aabaac652d534a3a20adba694a8c7950af0453db748aaa7cf73da0e9b14aad1489d8bfe35d7ef7e486e731999288a7b725c8ed873f22222d029aa678cb4e3f9f28bde4a3eb0016b113fc3cb1bf2fd2830364f04aa5e8a6c8a0ad442919a8e932e8a45294059542b4d1a8dd6ff746e67030b06cb33f366d9429c89239cf6f507cad75a1a6ddee3e74271522cd80165c7598d83cde77effadd428a3fc0b4eabe8cd8c520aafb66ccc34c30aab9c80f9601c62f15c8156c28cf308327611c7d79e9dce174d349917cc71950c64499eb2a2bb460224f785acada954cef499de5b33f2470e6ce5168ac132e955ee574036b832a63b592a0ca4cb78c358f1f6e8a1be39bbf3833d65861c233506be3f2d4f11da3e1b89eb1f43c27088d8f879f8c137fb13c37be5ed558eb853fe61583d23cafb30a69944195d143dfdcd7c3aa045453050db81a9b23da9b9876944463964c06c32831218a26d178480791c96c0bac38028a3a5db9d72a9a8bbc1701a0c8322d06f10865436b12f587fd91955060d01f8e7bd0b30763b26b91bf926b38e6aa108a37dd2397be1b3aabd05f7a47b3d0a9cb482836e9b849ae2ae2799e1a8b44d21b75ed2a940b8c548dc2f542c79f1d85ee85d34c7f0e2965dbe016e79fd04c01b2a9c40e6a906722c6a691f345e086eec29bcd51518ff47ccf5064faebfe49106e8bbacbbafe9299efcfae5043a5a4dbff30cc636491ddee59b80b9a9535a5e6d7a7c6ffae01480f6b793af5c9eef70e7f2d82afbc71273f968e7f459a2b1f129090b3f7e78ee41a786f57f79b8354dc1d8ca2349ef1913155c560129ac7c63775b67bb53de84d484d96fa1566d9c37d572b8fca113690eb87829acda9fb5441a57a2421886fc473bd1344ff01d3f8ef9bb7040000",
    ],
    [
      "ETag",
      "cH+GstUi6hSeOdESZG9JOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6d904f6bc24010c5bfcbf49a408cada2e04125d880581bf554a4aceb98ae269974ff5452f1bb773616eaa197dd99d9df1bdedb0b9c54b58721ec54fee950370f39da575f64685c610d5f3555062100b4226752d6b2d7e9bbd8a917b2e9b9f95ef797763c1a3161e4079602861738282cf606866f17a844892c7b7fd7ed46c66c53fbc96a9da58b19f725ed7dbfd8cce7e3c93c816b70a7aa4f7f8a74b14e6649f69f647b0de048bb0c0fa8b192e84dd49a8e286deaf31951d60586869c9668a085db875c93ab85260a7912c661a7173d75bb8f8328ee4703e60a92c22aaa18ddacd81a58b2a2c8e8cce9206640b725073db4e7178f13adb04de19b4e6beefe792aa42aee88d813dbdfcd93c6a2596a629706bdc1e866764a3e80e560563b0c400afeec67656ffdf507d45c92cac9010000",
    ],
    [
      "ETag",
      "cpc617u2uiOotIwyzT7PtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "e0",
      "77",
      "e9",
      "b518b072da9d0eb214b7b01699e38a60fd11ca71a51cd4ecdd67f6bdc1f74019e7300ca9ea2a68d10bba651b77cdd7875edf9bf4b2632561e3c46a21887cf5a09871bee3f3cc6132f77a9c9f1b7932b26f3b844c8e0907bd22a4198039aaf1e8968c54a8f73614f72ae6fde8151e863499ca25e97d371246a8b02d6df38b3256a83ae82c077ffe2441fb46642cf2088a3e2f1b6b63516332bba6f58f47f7ee1c0ddf65a156fbf607bd5c876439640ac7a7d839189e3f660939e385d2208aeed0d59a5d5752275a78165b5c5dd10ac1d2971286b47c66b1e9ba2bf43f4fd5ad87677fff8c8044bf7f3f667b4618010000",
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
      "Sat, 14 Nov 2020 06:21:49 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1605334902709",
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
      "6b6f9b3014fd2bc8fbda0448c8538ad62ca56ba44036425a4dd3848cb930b70467d8744aabfcf75d9ba66b55a9fd84ed7bce3de73e782477bccac894a4bcf8d3407df8742b52724640d1025f472b397c38882fc1cd627b6bbb63f9300a2e8bd90c115cb324dded4be848d1d40ce474bbe916b568f6b416a283893afd8e3b7406fdbe37717a236782340965bee2d51d927f2bb59753db3e49770b218a12e89ecb2e13bbe777fbbe67ef6b710b4c49fbb5a28d22d27e57f3732918555c54b3ed06f51b0975023bca4b74f09f98a5e7af337739dd750b04df73069431d1544abbc2144c54392f9ada6425d347625cbe38908dbff217b1c544d9ecaaa4a23b38b332aa68a20e7bb02ea375602dc3cb7514cce3e53a4c368b2b3f987717ebd5360837d6cd951ff996a26909866bcdac73730bf182fa1948c52ba31eeb67adfcd49fe5dba168024a4b6883c9c8195277ec4cd23c1db17cdc1fa4b903693a4e4703da4f1d36f1c0cb52a0c833a286452b514d28ed0fb31e4bb2412f4dbcc1d049c6e0b0c41b532ff3723765bd21399e91bf355770c1e55e48de7688dc44cbd84fe2681b2ee6b16f4ac86953aa8bd6982ee0a547850522e89d9a8e3aca052ae9762fc3d88fe68b7879edb7135e4141d961f307679cd35202a2698dcd53500722c38691701ef817083613fb760a4a32fdf94874cfb58b172d7fa6c738406d57992fd9c4d132fc6aec9c10d7b46c0ce4be3de832725e6ad3c75f08c4156d9390ef5b3ffa41daa70872a8a1621f0f13c126f0d18f765a7b84e2e2a38a5478c7cd61526bb01ada0de2a6d813db759c9e4b0cb8566f626e7f72ea99cea133c20e2af55450bbf658672bd6c867100671f8a1e9d5f11fe6d8d69074040000",
    ],
    [
      "ETag",
      "7Ls6zyoBMWCUj/18sz7MFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1605334902709"
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
      "000002ff8d93614fdb301086ffcbed23a994d2d2d2487c68b7322a8516da30214da872e34b3073ec603bad42d5ffbe73601d1a93c297e4eef29c7ceff9cd1e7e09c521828dc89f2b34f5971cddad0f96682be92cbd4aad2c4200e8584ee4e8fc72a3aa7a3bac4f5ecc959ade9bc71f72777141844d1fb16010ed211328b985e8e71e142b90da522dab42ad9b2c005797beb84a96b3f977ca0bcd7d3ebf8be3f1249ec221383672e6d8bae13fd1f67008e0496f9698a14195a29fa534fa095337f3322d2b4a891dab2b93a285066e3ee4465725335a77a8d2e975ba83f0acd7eb8fc2d36138224eea9439a115a1772b1a0f9c764c2ef58e4442f79408d3c424386b9e5baa0bde08f1e16c9e0cfacd7cef814c18eb5e77f2077cd3f62f29d92741ba0021dba01c1547d3468972cd3837686d2ba9ed9a95e5119b2c16f10788296eb4e0ede056b400d26d8fc065bc18ff6fb5649bbfbbfa364ea61f08ebc80c4724995d4f57c9f8fac6730f6ff73ba91dda1ba3c92b16bd4dba61fffc6c38085f9df3557b37d139913315069032fa01ae84832863d2e2e1372923f5bd5e030000",
    ],
    [
      "ETag",
      "98Fbnuyv7y+zrHnEXrhVlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1605334902709",
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
      "8553eb6eda30147e95c8fbb3495c420857a9ea28cd58261aba105aa16902c771329710a7b6c3842ade7d270eb474955a0929d8dfe57ce7d87e421b9645688842963c1654ec3f3df010d510553881dd87597776c5d88f69b19c4c3689e78c13314d2e2e80c14a95c4db3ca575c90b41a81c2ee68d44f022c782f33a18d5ed7aab6b76da6d7b605a3d73003249d378cab20d88ff2895cb61b3792add48384f528a73261b846f9ff79b3bab990bfe408992cdd7159b504436dfad7999728215e3d9c5620ef50b49c58a6e314b21c18b300abfbe766e30bc6d2440de31423121bcc854990a2c08cf62961442bba2e113d229cffea0b93375c681b14ed56e6d6069ac5682ca22553563cda2e34ebe31bef9b31b630dadc52ca5726ddc7f777cc7a838ae672c3ccf9907c6e7cb2fc6c49f2d6e8daba5c66a95312489a8542cd339021ca6b4cc709c94fbf6784a015658d20a5cf5cc2e6ef5cd4118873d12f7db9d30366918f6c35e07b743930c6c6a4721c5a053a5bb56e18c6736b122b347da31ee45168eec4e1f63dab55a1d2b26614cbad8ee9010776d74a8a1bf82297acd64ce25abe685ee7d37705681bff0c6a3c0d16dc418a6735d852b9b38cfa9a04920bdd3d7a14419874ae5f05d2f70fcd13870ef9ceabca734c1643f7f84138f712a29b0b1c05baaa8b8e1110c0dddcee66ee0cebcd11414fa106f4f0c8986bf9e5e04c13ed75356fa8b46be3f5a82060b81f7ff6190a31cc1e1acdc1d4e0b4dd17cbdaafc7715805ad0cbcbca4287df07f8d510dcebca1dfd5c38fe12555b3e8da9a019f9f8dc81ac818f5ee7e9ad00155e0b54910ad670c9882c6b1041abcbc6b63aed51dd32fb2d0b69b2506fb081dd3a4db5f4281de99666ead850f556f49c4aa890cf2400e18e78ae3701f41f45051a5ea9040000",
    ],
    [
      "ETag",
      "jO6OBiiJLuYGGkgNECgrLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1605334902709"
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
      "00000002ff6d90d16f823010c6ff97db2b3840c560e2831ab79910a74cb3258b31150f4481625b66d4f8bfef5a97cd87bdb4bdbbdf77f9be5e609f951be8c23a4b0f358ad3438a6aa61f11ca3a5792ae8a9712c102542c25b2ed0fc5077b748f384ba6db737ce8bffb9d59af47848cb75830e85e20c930df48e87e5ea06405926cb512662361ea54e9ce53f8da9f5359f08d2e278b30ec0fc2115cad3b51b5ff138c27f3d1f328fa4fb2bc5ab0e3eb08131458c6a83d5482ef3056631d4fb2a2cad196bc16314a30b019a482d715139cdbd4b15bb6eb3bed66b315385ec70988cb79cc54c64b42176f640d14572c8ff891c2814780304fca9998f34bb7db41c3f54c0e5dbac6de3d10b41a4dff77eee9f9f267f3e0a4504e05279712b541e76676c8750045c194a8d18298d15fbf64ea565fbf0142a6e832c8010000",
    ],
    [
      "ETag",
      "56CrXa/1weQfPhzcqAW67Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb6e82300000d07fe9b33155a0cade2838d389a85c4ce74b03581010db95bb66ff3eb3f307e705e234e54dc35a51f107f80053bc34e7e97c2721364ed9d5416a6f755eee52f3d8469bee7880d6598413fb82d42f1ccd258a89bac7b6d72122f66851276a851e3f9339a068bbd01bc321398dcdfbb1cec44dc8cace8cb547ada0cc95c43a8113094742bbc42e2f244a2ae919cfeb39c3e302066e513db64686fae1d97f130eb541252e8acbb65fa5e27639accefec515582fb75e916cba36d2605d7eee3066f93526c52e3c50674d59701aeebeb594a11ac00cf051168a37ac786735c33467e07fceda49f2771ff35871057eff00a8a680b018010000",
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
      "Sat, 14 Nov 2020 06:21:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1605334902709",
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
      "0002ff85535d6f9b3014fd2bc87b5c939026242452b44629dd9012b20169354d1332e642dd124cb1695555f9efbb364dd7aa52fb84ed7bce3de77ef0446e79959139497971d742f3f8e546a4e48480a205be06975f2fda74e486d7b7517d772d2bd5b0f1c3628108ae5992eeeb127a52b40d0339df45fda2116d4d1b217a98a8e7f48613db198dc633fb746acf9026a1ccd7bcba45f2b552b59c0f0647e97e21445102adb9ec33b17f791fdc9f0eea46dc005372f05671802272f0a1e6b75230aab8a816bb08f55b094d027bca4b74f09f98a5676f33f739ddf70b04df73069431d1564abbc2144c54392fdac66425f327625cbe3a90c85b7babd862a26cf75552d13d9c58195534518f355817e17663f9c1c536dc2c637f1b24d1ea87b759f657dbf56e1344d6d50f2ff42c45d3120cd75a5867e616e005f533908a57463dd6cf5af9b93ffefba168024a4be882c9d49ed0a16bcfd23c9db2dc1d39696e439abae9d4a1a3d466b3318cb31428f28ca861d14a5414a89b4f663461593e4dc6484d52b09d848d5d98cea6cecccd28399c9087862b38e7b21692771d2257a11f7b491cee82d532f64c09396d4b75de19d305bcf6a8b040047d50d34147b94025dd6e3f88bd70b98afd4baf9bf01a0aca1ea33b9c714e4b0988a60d364f41b31119e8c55e6ebc73049b89fd3c062599ff7922bae7dac5ab96bfd0631ca0b6abcc974471e807df8d9d23e29296ad81dc77075d46ce4b6dfaf01781b8a25d12f26be785bf49f714420e0d54ecf36122d8043efbd18e6b8f505c7c54910aefb8394c6a0dd640b741dc147b640f878e6313036ed4bbd8c4718e3dd3397446d843a59e0bead61eebecc45af902c2200e3f30bd3afc03acb562ea74040000",
    ],
    [
      "ETag",
      "NV+Fub38RhkSpqhsntrc4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1605334902709"
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
      "0002ff8d936f6fda3010c6bfcbed6d9012ca9f11a92f420b1b520a0cd24ad35421135f32778e9dd90e13427cf79ed38e4deba4f44d7277f99d7ccff9c9097e08c52186bd287f36688e1f4a745f7cb041db4867e9556b65110240c74a221ff66a7e5bced7d157f57023e6513a998dfbc9f5351136ff8e1583f8048540c92dc4df4ea05885d4966bd9546ad76601b863ed8bdb6cb3587ea2bcd2dce7cbfb344da6e90ccec1a59133c7762dff8eb6c773004f7abfc1020daa1cfd2cb5d14f98bb85976959554bec59dd981c2db470fba134baa999d1ba4795deb0178dc2e1d5d56012f6c7e18438a973e6845684de6f693c70da31b9d1bf4824447d224c1b93e0a27d1ea82e782bc4878b65361ab4f3fd0d14c258f7b293dfe0abb67f49c9de09d20508d90595a8389a2e4ad43bc6b9416b3b496d77acae2fd874b54adf404c71a305ef060fa20390ee7001e6e92af9df6ac9367f76759b64b337847564860b922dee66db2cb95b7beef1f57ea74787766d3479c5a2b749140e3e0ec7a3f0c53937dabb89ce899d6930809cd10ff05938880b262d9e9f01c0a72de75e030000",
    ],
    [
      "ETag",
      "VbnFDgFP1YnVCiF1L9E72A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1605334902709",
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
      "4fda4018ff2acded9f2de3a5145a288971a87576c1c24ad1986581ebf1b43b2dbddabb3a89e1bbef690ba233d184a4dcf37b79deee9ec81d4f576448421edf17906f3edd8a903408281a6314bcdeb908aeb8fec8997afc7af2e3fe623a191d1d2183972a49d759024d298a9c811cce67ad3817454673219a68d4b49a1d4b37bbdd9ead1b7ddd469984241af3f40ec57f94cae4b0dddea76ec542c409d08ccb1613ebe778fbc16867b9b805a664fb75c6362691ed77731e278251c5457a349f61fe4242be8035e509567010aec26faf9d5b9cae5b31921f3803ca982852555685164ca4118f8bbc7225c3275255f9e20f993963e734d0965cc805cdb2a546a5b658e4208b443530bcda45b23beddc9f5c6a4b6c2fe209c8a5767de1f88e56735c4f9b7b9e330bb4cfc75fb4effe643ed54e6e2aac7130c78a5620154fab7a021a2650d6b29b98fb764da5802a2aa106177ddda29d816e8751d867d1a06b86910e613808fb26ed863ab37bd05b854051a74af74a455391027274cb02c3362dd6ebaf6c6647b6c16c9b757453373a7d7b6002b3806c1be46fce159c719909c9ebb9916bdf0d9c45e0cfbdd351e0546d4414277456175736f1b24e854d22e99dbeb625ca05662a97e07a81e38f4e03f7caa9f73e8698b2cdec1e371fd14402b2694ed7a020bf142b1c1a994e666ee04ebcd11815d532a77b8624c35f4f0741b0c9aa29abea4b46be3fba410dcd73baf90fc33aac1ed96e5fa4bba24951512a7e75aafd1f6a8074b097c3c920dbdf5bfc3508deefda9dfc9c3bfe0da9433e449043ca3ede3b922be0a357ba7f3348c5578359a4c2335e3226cb1c2c87fab2f17555ed4edd314ccb241539576fb0be6deca75a7a948eb08654ed1aaadf4c35a7122ae4330941bc239eeb7d47f41fc45a1420b1040000",
    ],
    [
      "ETag",
      "eN4FoTVi0xictx+BJqHPOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1605334902709"
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
      "6d505d4fc23014fd2fd7d72d1903114878606651cc041d624c0c21a5bb9b836dad6d272184ffee6d3181075fdadef371734e8fb02b9b0c46b0298bef16d5e1a640f36a1f29eab6329a2e291a8de0011a5658656f5085d3e7e1c753d4bef70779b6e1b2bb1f8f49a1f917d60c4647c84bac320da3cf2334ac46b2add7ca6d249939488b44f379124f6604d422b3c06c9924932889e1e45dd9e4ee6299cedee28738fdcfb23a79b0159b147354d870b429a4125be4666a0b6a56cb0a7d2d5ac55183133ba250a2954c09e113e2f7fd4e3fb8ed767bc320bc0b86a4ab0467a6140d49970b8a06461856a5624ff5202481724f6a9abbf38760a35a742decd071e1aee99c55fac287965ffded8d0e06f58b129451a38d179ca3de0b1bdf502dbbdb03cee8af1f4b739e4fbf695bfd04c8010000",
    ],
    [
      "ETag",
      "b48l2IM9XJBuV68fdbcp3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb64ad8e25a0a43ba91111292004029b0cd044c06a283fb19ddebd4edf0dde0fc88a82771debe585dfc02b78640a5a140bbb591a9a2fbcea05ef82c17b63773521648f53aaf90a4c47033aef0ef1ef82b7ee601d2e3897f6e77670691dddd7aa83fb71fe41ad28f758703d3e4c5b13473d2e83c2e06585626ca169dae179b80945f24dd689e385475dbb8902ae462f73a3e1d0c093d81a693e923070e4b857686bb1aedb903335635ae3cb57aeb8523493b959da31ba6d539f49a96b70aa9d7279a5d1eaec49da1b2865be50390c27c2ce6006f8d4542def58f5cc420da119f89fb3fed1f067dfe059cb5bf0fb07db5dac1018010000",
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
      "Sat, 14 Nov 2020 06:21:53 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1605334902709",
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
      "000000000002ff85535d4fdb3014fd2b91f74adbb4691b5aa91a5509a35a93429282a6698a1ce72633a471891d5085fadf77ed50064282a7d8bee7dc73ee479ec93daf323225292f1e1aa8f7dfee444a4e08285ae0ebf5de6341e453ff8a3b769e67f6e2e7ad3f9fcd10c1354bd2edae848e144dcd404e3751b7a845b3a3b5101d4cd4713bfdb13d729ce1c41eb8f6046912ca7cc5ab7b24ff556a27a7bdde51ba5b08519440775c7699d8bebef71e07bd5d2dee8029d97bafd84311d9fb54f37b2918555c54b34d84fa8d843a812de5253af84fccd2b3f799bb9c6ebb05821f3903ca98682aa55d610a26aa9c174d6db292e933312edf1c48e4adbc456c315136db2aa9e8164eac8c2a9aa8fd0eac8b70ed5bcbe0621dfaf378b90e926871e9f9f3ee62bddaf84164dd5e7aa167299a9660b8d6cc3a33b7002fa89f8154bc32eab17ed6ca2ffd597e1c8a26a0b4843698b8f698f64fed499aa72ecb4f9d519adb90a6a7a93ba24e6ab3c91086590a147946d4b068252a77e46674e4da091d333b193a6e964c305532c906fdb1eb3894f5811c4ec853cd159c73b91392b71d22b7e132f69238dc048b79ec991272da94eabc35a60b78eb51618108faa4a6838e72814abaddcb20f6c2f9225ede78ed84575050b68f1e70c6392d25209ad6d83c05b52f326c1809e6be778e6033b1ab635092e9ef67a27bae5dbc69f92b3dc6016abbca7c491487cbe087b17344dcd0b23190c7f6a0cbc879a94d1ffe201057b44d42ae375ef88bb44f21e45043c5be1e26824de0ab1fedb8f608c5c54715a9f08e9bc3a4d66035b41bc44db14776df711c9b1870ad3ec48693c1b1673a87ce085ba8d44b41edda639dad58235f4118c4e107a657877f964a0f9a74040000",
    ],
    [
      "ETag",
      "QyEcNSMaMPi30ffd0CKWMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1605334902709"
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
      "3010c6bf8b799b4a29fd3722f122ddca1629b42c0d12134295892fc1ccc979b6d3a9abfadd770eac209814de247797dfc9f79c9fecd94fd90816b17b59fd6ac1ec4e2a70df7d90816d95b3f4d2d858600103c72b22fff0e9623681042e6af5e36632cf6e46a98ecfcf89b0c503d49c457b564a50c2b2e876cf1a5e03b515a8dabad97459c0dc4efbe23acf92e557ca6b143e5f5ea7693c4f17ec101c1b05777cd3f11f68bb3b04ec11ef3328c14053809f451b7c84c2255ea6e5b55630b0d89a022cebe0ee4365b0d5dc200ea832980d86d370321a8dcfc2d35978469cc2823b890da1d76b1a8f39745c65f89b44b2e12911a68b4970d93db75497a213e2c364994fc7dd7caf81521aeb9e76f20f7cd6f69654fc83205d80547d50058d00d34749bde14218b0b69744bbe15a1fb1f96a95be8378230c4ad10f6e650fa0dcf6085ca4abf87fab25dbbcecea4b9c2fde11d691198e489e5c2ed6797c79e5b9bbe7fb9def1cd82b83e4150bde26c370fc69329b864fcef98cde4d744ee44c0b012b38fd00dfa46351c99585c35ffbc4875b5e030000",
    ],
    [
      "ETag",
      "za6E75eIeFmlYX5BRX3LpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1605334902709",
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
      "0002ff8553eb6e9b30147e15e4fdd9a4242404c845aaba2ca51d524a3a425a55d3941873606e08a6d8b48aaabcfb0e90f4b24aad1489d8dfe57ce7d87e221b9e45644c429edc9750ecbedc8990b408289ae0ee652637d6e82e8bcf677aceac6c3a9b589bc7931364f04a25e9364fa12d45593090e3e5a29314a2cc6921441b8ddac376cfee5afdbe39ea1a83ee086512d278c6b30d8aff2a95cbb1ae1f4b771221921468ce658789edf3befe60e87921ee8029a9bfada86311a97f58f334158c2a2eb293e502eb97128a156c294f31c18b300abfbf75ee70baed24487ee00c2863a2cc54950a2d98c8629e9445ed4ac64fa44ef9ea0f593833671a68eb882a586b546aab5501b24c554b5bf3e8b0936fb4737f7ea9adb1b798a720d7dacd4fc777b486e37adad2f39c45a07d3dfda65df8f3e595f6e3b6c65a0767cc1281543cab9304344ca14a719895fbfe802a0155544203ae065d9bf686dd51188703160ffb561877210c87e1c0a2fdb0cb46269851081475aa72af553413191b19308070105b863d8c62dbb2cd7ed48b8c2802c34619eb0198a13122fb16792cb882332e732179333172e3bb81b30afca5379d044edd464c713c674db8aa89d739153689a40ffada57281758a91abfeb058e3f9906eeb5d39cf80c12ca768b7b3cf398a612904d0bba0505c5a5887068e46abe700377ee4d66a8a88ff1eac89064fcfbe94510ecf27acaaafe9289ef4f6e51438b82eefec330876d92fdfe55b96b9a9635a5e6d7abc6ffa101480f7b79591964ff678fbf16c19bddb8935f4bc7bf25cd960f311490b1cfcf1dc935f0d9fb3cbe16a4e27bc12a52e11a2f1993550d564073d9f8b64e7b50f7cc9e69939a5ca877986119c7a9561e95236c215387869ad752cfa9824af94c4210ef88e77a1788fe03a69b194eab040000",
    ],
    [
      "ETag",
      "Mnsk59jnfFL/pc5nCLA5kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d90416fc2300c85ff8b776da510c606481c602b0309a151403b4c130ac194425b77493a8410ff7d4e99b61db824f6cbe7e4bd9ce190161be8c23a4d3e2b34a7bb04ddcc1731da2a7396b7920a8b10003a9530d992e492b76a57ad877a7e9cb6c56898b467bd1e1356ef3057d03dc336c56c63a1fb7e8642e5c863ab95a96f64cc9d4aaf3cf7171177396d7c375d4e26fdc124824bf06fa63cfcf1e3e9227a89e25b231f9700f6b48e718b060b8dde4269688fda8d7d3aabf232c3d05265345aa8e1fa20315495ca1085ac84edb0f1205acde67d47c847d1612e23ad5c4a05a3cb395b03474e65311d391b48064c5d72cc6dbd7e795948110a198a469dc54b8ddae24d48fe42d2431f3f4f0c4e0eedab21b66bd13b1557d74fe493384ee84c850168c57f3e4addb5bf7c03efacc767d0010000",
    ],
    [
      "ETag",
      "52otgWuhubFcSwN80HFg8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "b9",
      "6e83300000d07ff11c22c211703750455a4c4156b817448c4d2809184cc511f5df8b3abfe9bd40490815a298fa9676e00daca5028fe488b86ceb9851279eb52154848689f333c109e6bd9e241d6b75731e2e19bc4f57c373091b3a2e9cb3e57e32b99d7d9d381bc57dcd4dbbc143b5de9e81c1b40d2e9b949e52778e6c495be22f490ec7995be9338a948b5c204b045711dc7ca16c3916d637e67103abb6366b5b7dafee1fd9820c483d1f4734f418e461f038e559b3cab36b3138206327892567a7f1d4cc945b0b251039798648513e4c33a8c101d08537231545b367551dc203f89f17d3cae9deb76939d211fcfe0156e3e9f318010000",
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
      "Sat, 14 Nov 2020 06:21:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1605334902709",
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
      "5d4fdb3014fd2b91f738da26342569a56a74258c4a4d3ad214344d53e4b8379921894bec8010ea7fdfb5431908099e62fb9e73cfb91f7922b7bcde9209c97871d742f3f8e54664e48880a205beaab63e9f5fbaf38ae69befe1d7a42a667e70399d22826b96a4d5ae849e146dc3404e36eb7ed18876471b217a98a837ee3927f6683874c7f6b1678f9126a1cc97bcbe45f25fa5767232181ca4fb8510450974c7659f89eae57d707f3cd835e206989283b78a031491830f35bf958251c5453dddac51bf95d0a450515ea283ffc46d76fa36739fd3aa5f20f89e33a08c89b656da15a660a2ce79d136262b993c11e3f2d581ac8365304f2c26cab6aad39a5670646da9a2a97adc81751eaf426b119dafe270962c5651ba9e5f04e1ac3f5f2d3761b4b6ae2f8238b014cd4a305c6b6a9d9a5b8417d4df8254bc36ea897ed6cacffd59bc1f8a26a0b4842e987af609757c7b9ce599c7727f38ca721bb2cccfbc111d66361bbbe06e33a0c833a286456b517b8e637b43e6a55b774453d78171eafb274eeaf9aeed3a6c381ef91ed91f9187862b38e3722724ef3a44aee34512a449bc89e6b3243025e4b42dd559674c17f0daa3c20211f4414d7b1de5029574bb175112c4b379b2b80aba092fa1a0ec717d8733ce692901d1b4c1e6296842b1c5869168160667083613fb79084a32f9fd4474cfb58b572d7fa12738406d57992f5927f122fa61ec1c1057b46c0de4be3be832725e6ad3fb3f08c415ed9290cb4d10ff22dd530c393450b3cf87896013f8ec473bac3d4271f151452abce3e630a9355803dd067153ec81edb89ee711036ed4bb98ef39879ee91c3a235450abe782bab5c73a3bb156be803088c38f4caff6ff007059449b74040000",
    ],
    [
      "ETag",
      "tunFCQ4CmafUBM+TmgA8EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1605334902709"
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
      "dd",
      "4e",
      "e3",
      "301085df65b82495d2bf9446e2a285c0560a6db70d570855269e048313676da7a8aafaee3b0e50d076a57093cc4cbe91e78c4ff6f02a4a0e213c89fc4f8d7a7796a3fded82159a5a5a43af4a9506c103b42c776434cc838bd16bcf2ea3f3f5707e3e8e02f676794984499fb16010ee211328b981f0610f252b90da5225eba2dc3499077657b9e23a59cde6b794178abb7c7e1fc793691cc1c13b367266d9a6e17fd0f678f0e0453dad30438d658a6e964aab174cedccc934aca824768caa758a061ab8f9906b55574c2bd5a14a67dce906feb0df1f8cfddec81f132755caac5025a1f76b1a0facb24caed41b89846e8f08ddc424386b9e5baa0bde0871e16c9e048366beef4026b4b1ef3bf9043fb4fd4b4af643902e40c83628c792a36ea344b5619c6b34a6955466c3aaea884d178bf8046225d74af076702b5a0069b747e0265e4cfeb75ab2cdd7aeae27497442184b663822c9ec2e5a2793bba5e31e3fee77bab368965a91570c3a9b74fdc1c57014f8efceb952ce4d744e68758d1ea48c7e805fc242983169f0f017201ee16c5e030000",
    ],
    [
      "ETag",
      "bE5g687k2tPE+S5N+9E6aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1605334902709",
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
      "61",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2b",
      "91",
      "f765938004488020551d6bb336130d5d08edba6902c738a94b8853db69852afefb2e0eb474955a295212df7befdeddf99ed08ae54b3444314bef4b2a369fee788c1a882a9cc2a9993a8fb3e887e7fefe75de3d7556fcf6d1ef8c8e8e00c12a96c4eb22a34dc94b41a81ccea6ad54f0b2c082f3260835db56b3ddb39c6ed776ad4edf72812769968c59be02f6ad52851c9ae63e772be53ccd282e986c11be7e3e371f3a6621f81d254a9aaf539a90459aef273dce38c18af1fc68360503a5a4624ed7986560e185b98cbfbe966e31bc6ea5007e608462427899abca1648109e272c2d855645c327a46d1e7ca0a937f64e22632115682e0c2c8df95c505966aa612cd8727752ac8cefe1e4c258407509cba85c18d7e75ee81935c60f8c591078d3c8f87cfcc5380b27b34be3db8d8e35f6d2e06649a562b9f612e138a3958f5dbbfcb743aa08586149ebe0bc6ff5707b60b97112f74932e83a7162d1381ec47d0777638bb836b59731c5c05395ba66e19ce7167593c4c5aedb25f6c075dc1e493a03ab9f58037bd06ef77062c7c476dc046d1be85130454f992cb86475cfd075e847de3c0a67c1c928f274190986fe9cd6e6aa220e7d2a281240efd4b5ada28c43a66a007e1079e1e824f2afbc7ae6639a62b299dec3d4139c490a682cf09a2a2a2ef8129a862e27533ff227c1680c0c3dc8cb3d42a2e19fa71742b4297497957ea351188e6e808385c09bff62e0a367a3edf620dd15ce4a0dd178fd57eb3fd401d4865a5efe3a68fb770b4f03c1e5aed5d1cf9917dea0fa28a4091534271fcf1dc03af0e18eee1706b0b0329006ee9a6270cb88ac921041ebdbc6d6daee8e",
      "dd761cd7461a2cd49b98ab959f17a552a46b9aab5d45f5c2e84655a1523e8320089724f0833388fe037957f37eb0040000",
    ],
    [
      "ETag",
      "/g5wUTJE9ZXH3D5kohwI2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1605334902709"
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
      "6d906d4fc2301485ffcbf5eb66b6c1a623e1039829984160bcc4c41052c6650eb675b69d0609ffdddb6222897ee9cbe973da737a82435e6da1039b3c7b6f501c6f325453bd485036859234d5bc920816a0621991cb97e73e7e4d9b6819e328c8dc476fe00659b74b844cdfb064d039c12ec7622ba1f37a828a9548b6f55a981b0953c75a2bf3e1289acd7ba3094925df6a69bc88e35e3f8ee06c5d19ebc3af69389e474f51f29f6575b660cf3709ee506095a2ce510bbec7540d7545c9caba405bf246a428c1c0e62013bca999e0dc26c5761ddb0d1cbfd56a878e77e78404163c652ae715b18b196503c5152b12fe490dc12340982595dd99f18364f7d6bf777c3f74c376149a3e463531ff70419bc86bced3dceae7a1fe51a19c084ea925eac0ce25fc03d785141555a2410b5246ff3fc8d5657ffe061a66f93cdc010000",
    ],
    [
      "ETag",
      "VXJBezQuEVLeM6g1F2H16g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cd",
      "6e",
      "82300000e077e9590dcaff6e8051caa206a72cecd24029b420881428d4ecdd4776fe4edf1b241813ce51ffac48033ec09cecec0dde7cb68aab87f9a18b1eb9ac7c184ee6f080d03af951333937ee5d8f1e7ad543c6763d1d7351d004dd7961de258bb7634c9cb67e85c1aca5c2ff79b5577fcaa4b4449436ade2ab711fd5ee35f53ccf80fd81ecd422504ee73de696a435d23276c28625acf37128bf95e94ba7f1ed40d8535414076521d637b361a646d77aeaa1fdbc75f6252614117829eaaad643c82f12ce636488f5684f4eb6e0e023c9340156804c2deb08476cc9aaba6dafc0ff1cf5734b96be4b928e74e0f70f35d04e6918010000",
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
      "Sat, 14 Nov 2020 06:21:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1605334902709",
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
      "6b6f9b3014fd2bc8fbda2410f22252b446295dd112b20269354d1332c650b78033db64aaaafcf75d9ba66b55a9fd02d8f79c7bce7df0841e5893a339ca58f9a7a5e2f1cb3dcfd019a20a97701b12210f2460aefb5dde09b7be97e5d4b95e2c00c1344be27a5fd19ee4ad2054ce7771bf14bcdd63c1790f12f51ca7e74cecb1eb8e3c7b38b53de0495a156bd63c00fb4ea9bd9c0f0627ed7ec9795951bc67b24f78fd723f380c077bc1ef295172f05672002a72f0b1e8d78a13ac186f16bb180cb4928a94d6985560e13f33cfcedfa6ee335cf74b001f18a19810de364adb82148437052b5b61b2a2f91332365f7da0d85ffbabc422bc6aeb266d704dcfac1c2b9caac73db52ea3edc60ac2cb6db45926c1364ce3d595bf59f657dbf56e13c6d6ed951ff996c259450dd75a58e7e614c201f4732a156b8c7aa2afb5f2738382f763d1049096b40ba6537b829d99ed65453625c5cc1d67854db36c964dc7d8cd6ce28de828cf28069e11352cdcf026f32643676cdb9001dbe9680a0f6c67a3d49bb88e93937cec790e3a9ea1bf82297ac1e49e4bd67508dd4641e2a749b40b57cbc4372514b8add445674c17f0daa3820201f4414d471d651c9474bb8330f1a3e52a096efc6ec26b5a62f218ff811917b89214d05840f314151b9e53bddacb8d7f016033b11fa7a044f35f4f48f75cbb78d5f2177a0203d4769579a3388982f09bb17342dce0aa359043f7a1cb2858a54d1f7f031076b44b82ae777ef4137557112da8a00df97c980036814f7fb5d3de0316361f64a48233ac0e915a8408daad1033d59ed8ce646c4f91010bf52e3619ce4e4dd33974465ad3463d57d4ed3d14da89b5f2050441987e689a75fc07ff0e308b77040000",
    ],
    [
      "ETag",
      "NcrsvcIi33Kshr3mjsg71Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1605334902709"
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
      "02ff8d93614fe2401086ffcbfab524ad2068133fc0898257812b35f1620c59bbd3bab8edf476b71842f8ef375b15cd7949fdd2ce4c9fc9ce3bfb76c79e652958c81e65fea706bd3dcac1fe72410ca656d6d0abc2d200f318589e133989f8151f0caea38b787df7fbf4e77c32eb06f9f93911267d8282b370c732094a1816deef58c90ba0b614555d94ab26f398dd56aeb84ce2e9ec8af20285cb67b751341c4563b6f70e8d825bbe6af86fb43dec3db6c6c71832d050a6e066a934ae21b55327d3f0a252d03158eb140c6be0e643aeb1aeb846ec50a513049da0ef9f74bbbd33ff78e09f11a830e5566249eced92e663162d5731be904a161c13a19b981467cd734375291a252e9cce927eaf19f03390496deceb52dec13771ff928a7f13a41b90aa0dcaa114a0db2859adb8101a8c6925d1ac78551db0d17c1e7d817829344ad10e6e640ba0ece6005c46f3e1ff564bbef9d8d5c530197f218c25371c90647a335e26c39b85e31edeee77b4b560161ac92c069c4f02bf777a32e8fbafd6f981ce4e744e68750d1e4b39fd0113695998716560ff1775dd44235f030000",
    ],
    [
      "ETag",
      "HLaGa77JLDRjXY8KOHN31g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1605334902709",
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
      "8553614fdb3010fd2b91f765934a933669d35442d041c62a9514d214564d53eba497cc90c6c576d80aea7fdfc5a140870452a424bef7eebd3bdf3d925b562c499fc42cbb2b416c3eddf0983408289ae1a9970f2ebbae77a61e1eccd98f07b3f04e03757978880856b1245dad733890bc1409c8fe74d2cc042fd754707e80890e5aed8356d7ead8b6e3596dd7f29027214f47acb845f66fa5d6b26f9a3bed66c67996035d33d94cf8eaf9dcbc6f9b6bc16f2051d2dc973451459aef8b1ee53ca18af1e2703a4103a50431871565395a78612ee3e3fdd44d4657cd0cc1f72c019a24bc2c54650b5324bc4859560a9d95f41f89b6f9ea834cfc917f12198b9409a9e6055dc1c2a0d298cf05c832570d63a11d3c1dae6f8d6fe1f8dc58609529cb412e8cebef7ee81bcfb061604c83c09f44c6e7a32fc659389e5e185f67bb70634f080d2e412a56687b118d73a8ac3d7570f8f6de2a025554421d9cbb5697b67a9617a7b19ba43dbb13a716c4712f763bd48eadc473c059c64091a7aaec9a450b5ec4a9ed42c776da691bec8eb7743da7973a0e20b865591dc7c17bf15c3b21db06f92398825326d75cb2ba8de43a1c46fe3c0aa7c1c920f2751929c56e9dd6e6aa225efb54582482dea96b5b451947a5ea4e8641e48783936878e5d76330828c269bc91d0e424a730988a6023ba8409cf325368d5c8c27c368380e062364e8bbbdd82124e9ff7c7c21449bb5eeb2d26f3208c3c10c395408baf92f3689c2617046b6db577a57342f354613f45f2d705f0708dce0207226ad63f8ab8bd4a3b86dbc20704815b4f6c3bfb6f834086e45ed815c4efd7046eaa310521050241f4f078275e0c3e5de6d1a6271d750462afcc7594c64259208a86792ad2a333b76cbed382ed160a1dec4ba4e6fd7fc2a4795115650a8a78aea4dd3ddac42a57c0661104729a87bfd0f0074b28de9040000",
    ],
    [
      "ETag",
      "9lAQ679Gtzz/YXz/n9DNtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1605334902709"
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
      "51",
      "4f",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "cb",
      "f5",
      "95e9060a8184444154124264888931849472991ddbee6c3b7412febbb7d507e2932f6dcfed77da7bda03ec54b1811eac55f25ea1aecf12b433b788d15499353c9554188406a0150993cddbbb797ad1b13430f5d74bf4dca6a8d39ef5fb4c18f986b980de01b60ab38d81deeb010a9123db562bed4f64ccd6a5abcc9fe2f1f49e754e1ba7a78bc9e4663019c1b171e22a77ff712c8f0d48691de3163516125d0fa5a614a51dbb7846e4658681a14a4b34e061bf9168aa4aa18902ae04513388dae155ab75d90d9b9db0cb604652584505b38b39b70696acc862fa30ee2d18d07ec941b77edc7379a415fa144e608a7a4fca84d7f8e9bb389794fb8e4f2d43215576e292282c467f2dcbdfeb07b545f3a889b3187431c29f484372b4e5f85657d80029f8471e94fdd1c76fa22a445bee010000",
    ],
    [
      "ETag",
      "2DFSj/7toBsyzY1V6o176Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfcb7282301400d07fc9da7124824077e00394f25264904d26865b4d29108128e8f4dfebf4fcc17921ca18741de99b126af481468acd299b7a62666b310464bcf29f859eadb70df3954b95e46af4b8eb05f8f12dc4f5393d8d476ba35f6f81555347316c1f73ba0413703b784141d66d140d78f725652d0eea6aefd1ef9e3b4f633b94caa82722bfa89e2117b9888a47a30e24db1fe74be5a937a734dacedcac9c3dedcf1d9383c6e23adca5e4dee11ef24e3855956017af785c845ec8cbe07ef003c32a422a577d026b52c96ce3f799f0749932ad76cf878785260806c15be8087f67e79a694ed0ff9cf4a38077df06da428b7eff00839ef59818010000",
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
      "Sat, 14 Nov 2020 06:21:58 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-13-1605334902709",
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
      "3014fd2bc8fbb8268190078914ad594a57d4846c84b49aa6091973616e094eb1e95455f9efbb364dd7aa52fb09dbf79c7bce7df0486e79959129497971d740fdf0e946a4e48480a205be7abc18659fd3cb73e72a6adcaf81b0335ace67334470cd9274b72fa12345533390d3eda65bd4a2d9d35a880e26ea386ec719d943d71d4cecfed89e204f42992f79758bec3f4aede5b4d73b6a770b218a12e89ecb2e13bbe7f7de7dbfb7afc50d30257baf257ba8227bef8b7e2905a38a8b6ab6dda08146429dc08ef2122dfc6766e9e9ebd45d4e77dd02c1f79c01654c3495d2b630051355ce8ba63659c9f491189b2f0e64e32ffd456c315136bb2aa9e80e4eac8c2a9aa8873d58e7d17a6505e1f93a5acde3601d269bc585bf9a7717ebe576156eaceb0b3ff22d45d3120cd79a59a7e616e205f533908a57463dd6cf5af9a941c1dbb168024a4b6883c9d81e51c7b327699e8e59eeb9c334b7214dbd743ca46e6ab3c90006590a147946d4b068252a980045a49d0c1dd74b06194d138f797902fd913374fba9035e4e0e27e46fcd159c71b91792b71d22d75110fb491c6dc3c53cf64d09396d4a75d61ad305bcf4a8b04004bd53d34147b94025ddee208cfd68be88832bbf9df0120aca1e367738e39c9612104d6b6c9e827a25326c1809e72bff0cc16662df8f4149a6bf1e89eeb976f1a2e5cff41807a8ed2af3259b380ac26fc6ce117145cbc640eedb832e23e7a5367df88d40dcd13609f9b1f5a39fa47d8a20871a2af6f130116c021ffe6ac7bd472c6e3eca4885775c1d26b508aba15d216eaa3db21d0f87490cb8566f62eec03e364de7d0196107957aaaa8dd7b2cb4156be433088338fdd034ebf00fdb43316677040000",
    ],
    [
      "ETag",
      "8ig6d+bKF1VRu3BIo0dalA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1605334902709"
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
      "6f",
      "da",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "f772410ae5df1aa92f606323530a0cd24ad3542137be64ee1c5fb01d2a8af8ee3ba72dadd649e99be4eef23bf99ef39303fb23b56011bb95c5b606b3ff5080fbe18315d85a394baf0ab505163070bc20b2987d1ce887b418ed673f6337ef5dc7dfb7dbe2e282089bfd8692b3e8c072094a5816fd3a30cd4ba0b60c555dea4d9305cced2b5f5ca7ab78fe8df21285cfe75749329e2453760c4e8d823bbe69f877b4dd1c037687b72bc8c180cec0cf5219bc83ccc55ea6e565a5a063b1361958d6c0cd87c2605d7183d8a14aa7dbeb7487e1a0d7eb9f8767a3f09c408519771235b1576b9a8f39745cadf09e54b2ee1911a6894971de3c775497a251e2c3789e0efbcd80af815c1aeb1e97f20c3e89fb9754fc9d20dd80546d50015a8069a364b5e14218b0b69544bbe15575c2268b45f206e25a1894a21ddcc91640b9dd09f89a2cc6ff5b2df9e665575fc6e9f40d611db9e184a4f1e5749d8e2f979ebb79badfc9de815d1a24b358f03ee986fd4f83d1307cb4ce67f476a27322676a0858c6e90f9849c7a29c2b0bc7bf8659c1555f030000",
    ],
    [
      "ETag",
      "gH+5nzTg7yHYItN3VIJqqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1605334902709",
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
      "000002ff8553fd4fa34010fd57c8de2f77b11fd0425b9a18ed29e771a9e851aaf12e9776a103b70a2cb24bb531fddf6f58ac1f67a20909b0f3debc37b3330fe486e52b3226214b6e2b28379fae79485a04244df0f48793e7e6fd9d39dddb9bdfd25fba55d8224bf6f711c16a96a05991425bf0aa8c408ce7b34e52f2aaa025e76d4cd436ccb631d0ad7edfb4f5de50b79127208da72cbf41f65f290b31ee7677da9d84f324055a30d18978f674de5df7ba45c9af2192a2fb5ab28b2aa2fbbee841ca232a19cff7e7333450092817905196a28567e62a3c7c9dbac368d64910bc6611d028e2552e6b5b9822e279cc92aa5459c9f881289b2f3ec8cc993a4781b64ce57aa951a12d1625882a952d6da9a41f0f8b1bed9b7f76aa2db1bc98a52096dae577c777b42798eb6973cf736681f6f9e08b76e29fcdcfb5af57bb70ab51404b2b1092e5ca5040c3146a338f3d73dfde544da0920a68828ba13ea0c648b7c3381c46f1a86f85b10e61380a8716ed877a649b60ae42a0c8937576c5a239cfc3d8ea41180f7ad630ee87a0c783411f6c5b8facd830a93db0e8d0580d2c936c5be4ae64128e9928b8604de3c8a5ef06ce22f0e7ded12470541931c5361d37e6ea225efa94582482dea96b5b471947a5fa165c2f70fcc951e05e38cdc54f21a1d166768b571fd35400a269493390509ef215368d9c9fcddcc03df3265364a8db3cdf210419ff7e7826049b427559aa3799f8fee40a39b42ce9e6bfd82cf05def846cb72ff42e685a298c22a8bf4660dd04085ce3e87126f443b85745aae1dbb69e113896128cd7e13f5b7c5a04f7a0f1407ece1dff8a34473ec450421e7d3c1d0856810fd779b75b88c5ed421921f11f673112b548544233932cabcdecd8866d182651e052be89f58cd1aef9758e3a236490cbc78a9add52ddac43957802611047c96b7afd0fb751d9eadb040000",
    ],
    [
      "ETag",
      "JEnn4xw4L++UqaZ05p9smg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d91614fc2301086ff4bfdba916d3070242482994ab2a00e488c8690328e39d876a3edd085f0dfbd16a3c4f8a5bdbbbe6ffb3ee991edb272cdfa6c95a5fb1a447395827ad6450cb2ce95a4adc25202b318289e9272eabfccfd715385afaee7ef27bde23a0cb3e7c1801432798782b3fe916d32c8d792f5df8eace405906db914e64692a9a6d293bbe87138a3b6c0b56e27f3281a8ea2909dac0b53b5fb354c67f17872ff9f6371b2d81657316c404099808e5009dc42a2c69a4ef2a2cac196588b0424336273900aac2b2e106d9ad86ec776bb8edf6e7702c7eb390109734cb8cab024ed7c4ad19842c5f3183f088e792410a624ce8d590f7aec072dd7331cba852d880366d2b9814f93a3956061325f9a824eabddfdf124c015b87f0d8befe7478d02f924905824680ce78c748b5aad085f891a2c9670fa90874c9dfbd3171c55443bed010000",
    ],
    [
      "ETag",
      "S5XU5IypEZ125qN7m8EEiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb642d8e8001d31de1a3020ed24a31dd6420464851440282747af73a7d37783f20638c4b49bb5bc56bf0069e9986e66c1e340b0ce3d3323782a86208ee53898d8b7159d907bf337dbcb53f38fd8c6529f1c37ad6ae7384ece02a72b92a12ea59caeee2d3fb4263f99a25e3a91f34526f1cae6939298e44b7c97aba3e9cf33452158ed530e5fb3a308bf7b2b4716aa57e342a08f7a35a8762ab4af2ed898a04cbaf98f429a46ae41e14379c06fd1699a2da4e9e29943b3c3be211aa294155ef25b16b5cafa195241b95b04e412dca4ecdae0033c0c746b45c52f1caea10a119f89fd3eed9f0571ff3ace52df8fd033d99ff4118010000",
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
      "Sat, 14 Nov 2020 06:21:59 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-15-1605334902709",
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
      "85536b4fdb3014fd2b91f795b649dfa9548dae84ad529b8e3485a1698a6ce72633a471891d1042fdefbb76280321c1a7d8bee7dc73ee234fe4569429991026f2bb1aaac72f37929113029ae6f8ea3d3cfc62cbc2bdd09aa7e975555c7d9b55f9748a0861588aeef605b494ac2b0e6ab2ddb4f34ad67b5a49d9c2442d6fd0f286eea0d7ebfb6e77e4fac85350644b51de22fbafd67b35e9748edaed5ccabc00ba17aacde5eee5bd73dfedec2b79035cabce5bc90eaaa8cec7a25f0bc9a916b29c6e3768a0565025b0a3a2400bff99293b7d9bba2de8ae9d23f85e70a09ccbbad4c616a6e0b2cc445e57362b993c116bf3d5816c8265308f1d2e8b7a572625ddc18993524d13fdb807e73c5aaf9c4578be8e56b378b10e93cdfc47b09ab5e7ebe576156e9cab1f4114389ab2022cd7993aa7f616e205f553505a94563d36cf46f9b9418bf76331049456d00493913ba4ded8f559c6463c1bf7062c7381b1311b0d688fb9dcef433f65409167452d8b96b2743dcfebb2ae9b74bd619af487fd513286cc4fdc01f360c87c462990c30979a8848633a1f65289a643e42a5ac4411247db703e8b035b4246eb429f35c64c01af3d6a2c10411fd47430512151c9b47b11c641349bc78bcba099f01272ca1f377738e38c160a104d2b6c9e866a25536c180967abe00cc176623f8f414526bf9f88e9b971f1aae52ff4180768ec6afb259b385a84dfad9d23e29216b585dc37075346260a63faf00781b8a34d1272b10da26bd23c4590410525ff7c9808b6814f7fb5e3de2316371f6594c63bae0e57468457d0ac90b0d51ed99e3f1a0e890557fa5d6c3c181d9b6672988cb083523f57d4ec3d16da88d5ea0584419c7e689b75f807f16fa69777040000",
    ],
    [
      "ETag",
      "1wwXbLl0QttcddYrlWBArg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:21:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1605334902709"
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
      "da400cc7bf8bf71aa4d0025d23f5015a369052e842789a2a74e49cf4da4b2e3b5fe828e2bbcf97766c5a27a52f89edfcacf3dff7cf019e54252182ad2a7e3468f79f0a74df7c902035da11bf6a53114200e844c1e43a99fd8c67eb9725dd940f5b5283a76672fd7c75c504650f580a880e902bd49220fa7e804a94c86d99d14d596dda2c00b7af7d719526f3c557ce4b237dbe58c7f178124fe1189c1aa57062d3f21f68bb3f06f068b609e668b1cad0cf525bf388999b7b9924ca5a638f4c63332468e1f643614d530b6b4c8f2bbdfeb0d71f85c3f3f3c1657876115e32a84d269c3295dfc08ae703679cd089796695d03f63c2b6312bcedbe78eeb4ab64a7c385fa4a3413be0df40ae2cb9d7a5fc06dfc4fd4b6af141906f40e92ea8c04aa2eda254bd11525a24ea240d6d445d9fb0c97219bf834425ad51b21bdca90e40bbdd09f8122fc7ff5b2dfbe6cfae6ec6e9f41d418edd7042d2f9ed74958e6fef3c77ff76bf93bd43bab386cd42e87dd20f079f8717a3f0d53ad7c6db89cf899c6d30804cf01f30530ea25c68c2e32fe6b0440a5f030000",
    ],
    [
      "ETag",
      "URHxLHUzOsDmhbsi4kuBCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1605334902709",
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
      "7f",
      "4f",
      "db",
      "3010fd2a91f7cfa69536fddd5442d041c6a295b4a429a89aa6d6762f9d4b1a87d86154a8df7d1787521812489192f8debbf7ee7cf7486e45b2247dc2c4ea2e876cfb692d19a910d07485a7ade12ce297eec3d7f1cfaed7abd90f17ebd9faeaf81811a26029ba4963385232cf38a8fe74525d65324f6926e511263aaa77f0b1dbcd66cbb11b5ddb419e82381a8ae416d97fb44e55bf56db6b575752ae62a0a950552e37cfe7b5fb462dcde41ab856b5d792355451b5f7454f62c9a91632399e4ed040ae209bc3868a182d1c984b76fa3a7555d04d7585e07bc181722ef34417b63005974924567966b292fe2331365f7c90893b74cf426b21a49ad3345d585459f379062a8f75c55a18f9a7c3f4d6fa1e8c2ead0596188918d4c2baf9e106aef50cf37c6beafbee24b43e9f7cb12e82d1746c7d9bedc395830a5a5b82d22231c642ca62284c3df5ce7b7b6305816aaaa00ccebb7687d67bb6c322d6e551afd966910d8cf558b74d9bcce64e0b5a4b061479bac86e58349189cd7b7644ed4683b759bbd706608d16d41dd6a93b8ed3b46d873759bbcb22b2ab90bf99d0702e542a95281b486e022f74e76130f5cf06a16bca8828b6eabc345714f1d2a7c62211f44e5dbb222a242a15b7e1f9a11b0cce42efda2d0760082bcab7933b1c8188c60a104d33ba010dd9a55c62d3c87834f1426fe40f86c830b73ade2314e9ff7a3c10c26d6abaaccd9b0c826030430ecd32bafd2f360903cfbf20bbdd0bbd6b1ae7066308e6af14b82f0304d638825228fb141e4c91660877950302c75343fd75f8f70e9f0ac17d283d90aba91bcc48791440041924fce3e940b0097cb8d6fb1d432c6e19ca288dff388b5c15223c837226c5a630b36737ec6ea74e0c38d36f623da7bb6f7e91a3c8081b48f45345e58e996e16a15c3d833088a3e497bd",
      "fe07aeb5ddf2e3040000",
    ],
    [
      "ETag",
      "4LYfcMEx+PK7I8/0xGjYjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1605334902709"
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
      "0002ff6d91514fc2301485ffcbf5d1a11ba808098960504926e8702f1842cab89b1bdbee6c3b9010febbb7d504624c9aedf6ec3bdd39e91ed669b9822e2cd3e4b346b93b4b50bf9a214055e75af1aba2522138805a244cce9af1e52db66761d03ff79ebdf061960d936dafc7848a3eb010d0dd439c62be52d07ddf43290a64db6221ed898ce95d6594c164e20ffb63160a5a19611cfa7e7fe00fe1e09cd8aaf5d1327d0b46e3c7ff1cf38303192d038c516219a1095149ca30d223d34f89a2cab1a1a896112ab0b0fd9048aa2b21891aac34bc1b5eee75ab75d5719b6db7c3604e91d02995cc86538e069ab4c803da723d683220edc84d63fbdcb0ac658db685d960867243a972eff0cba6b888a8b0894f2db1c8d5d113a1d0e8fd35cc7f7f3ed869542f92b8894253c2fd29744f86d65cde047020127c214fa9fed91fbe0122fc989ced010000",
    ],
    [
      "ETag",
      "Z2f/8e7ZURA+1M1UFZjEgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfdb6e82300000d07fe9b31a2ce1b637502e820c70241dbc90d216442220ed0031fbf7999d3f382f8009619c17a26f59073ec01343634776c120594a429dce1b92a5aa19725dbbdedb373b793e722ff3e92a7807dd461479bdd7c2524baed37deb8bf3a024ad4494002f089223422ce3f93934b0aca71e8e606b61e81e2e274f24dff5968c45acce9731b584961b77b5c91f32fa41cd31ccacd2d4ca431585b4aef6ad6acef486a1c4a2a32fe7b1dff2e570eaaea923e16b4c7913f4f3f4c563e438389c5895e932b4a79e9a53ba5a0fb48acfd5eb2fba0936802d4333325e34efacac18c606fccf0bf11cd8bb6f313cb211fcfe0177b5172618010000",
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
      "Sat, 14 Nov 2020 06:22:01 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-17-1605334902709",
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
      "e2",
      "40",
      "14",
      "fd",
      "2b",
      "cd",
      "ec",
      "e30a14285048c8ca625512286e291ab3d934d3e96d1d2d9dda99ba2186ffbe77a6e26a4cf4a93373cfb9e7dc8f3e93075e246442629e3dd650edbfdd8b989c105034c3d7fd851b9cabe1ed9d6d5fa5fb9fdfe341bf14d9748a08ae5992eeca1c5a52d4150339d96eda5925ea925642b43051ab3b6a7587f6a0df77c6766f648f9127214f97bc7840f69d52a59c743a47ed76264496032db96c33b17b7def3cf53a6525ee8129d9792fd94115d9f95cf4472e18555c14d3ed060dd412aa087694e768e13f33894fdfa76e73ba6b67087ee20c2863a22e94b685299828529ed595c94a26cfc4d87c73201b6fe9cd438b89bcde1551417770622554d148ed4bb0ce83f5ca5af8e7eb60350b176b3fdacc2fbdd5ac3d5f2fb72b7f63dd5c7a8167291ae760b8d6d43a35371f2fa89f8054bc30eaa17ed6ca2f0d5a7c1c8b26a0b48426188dec21edbaf6384ee3114bddfe204e6d8863371e0d683fb6d9d80127898122cf881a162d44415dd719f75d88d2aee346cec06511ed8fdda89b38ac374eecd849811c4ec8df8a2b38e3b21492371d2237c122f4a230d8faf359e89912525ae7eaac31a60b78eb51618108faa4a6838e72814abadd0b3ff482d93c5c5c7bcd84979051b6df3ce28c539a4b4034adb0790aaa9548b061c49fadbc33049b895d1d83924c7e3f13dd73ede24dcb5fe9210e50db55e64b3661b0f02f8c9d23e29ae6b5813c35075d46ca736dfaf00781b8a34d12f26beb05b7a4790a20850a0af6f530116c025ffe6ac7bd472c6e3eca4885775c1d26b508aba059216eaa3db27b5dc771890157ea436c301c1d",
      "9ba673e88cb08342bd54d4ec3d16da88d5f21584419cbe6f9a75f8074be87ecd77040000",
    ],
    [
      "ETag",
      "yG8RFt6Yh00PfyB+b53pog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1605334902709"
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
      "da",
      "40",
      "0c",
      "86ffcbede382145a0a6ba47e8095ad48014a08d2aaa942d79c931dbbc4d9f9c28410ff7dbeb463d33a29fd92d8ce639d5fdf9ba3f8ae2b2522f1a48b1f0dd8c3bb02dcca070950631cf1abc68a4004029c2c985c24bbd53c53abbb256dece84b7cfbfe217c286e6e98a0ec1b94524447916b308a44f4f5282a5902b765689ab2dab65920dca1f6c5759acc169f392f51f97cb189e3f1249e8a53706e54d2c96dcbbfa1edf114881d3e259083852a033f4b6d7107999b799924cbda408fb0b1199068e1f64361b1a9a545ec71a5d71ff5fac3f0eaf272701d5e8cc26b060d66d269ac98ddac793ee1d04993e04f5629fa174cd83666c579fbdc735dab56890f678b74386807fc1bc8b525f7bc94dfe08bb87f4923df08f20d68d305155029b05d94aeb752290b449d24d256d6f5199b2c97f12b4856caa256dde05e7700c6edcfc0a77839fedf6ad9377f76753b4ea7af0872ec863392cee6d3753a9edf7beef1e57e270707746f91cd42e07dd20f071fae46c3f0d93a1fd1db89cf899c6d201099e43fe04e3b11e5d2109c7e0113cb93845f030000",
    ],
    [
      "ETag",
      "NRjQMcdQHOsUr7XLD+Y0Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1605334902709",
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
      "7f",
      "6f",
      "a2",
      "40",
      "10",
      "fd2a64ef9fbb440505454d9ad6b65c8f44d102b631978b2e3078abc85276e99d69fcee3780f6c73569131261e7bd796f66677c225b9646644802b67e2820df7fd9f080340848bac6d3c455e964616ecd4b6f93ccdaaa4ab5cee4f6ec0c11ac6409bacb12680a5ee42188e1dc6bad735e6434e7bc89899aed7eb3ddd3baba6e0cb48ea90d90272089c72cdd22fbb7949918aaea49bbb5e67c9d00cd9868857cf77cae3e76d42ce71b08a550df4aaaa822d48f45cf131e52c9787a36f7d04021205fc28eb2042dbc30a3e0e26dea16a3bbd61ac18f2c041a86bc4865690b53843c8dd9bac8abac64f8442a9baf5e88678dad2b5f594554c24aa142592e731045221bcaaad23e1e665be5bb3b9d282bac2f6609889572ffc3722de519663bcadc712ccf57be9e7f536edce97ca65c2e4ee1c651024d4520244b2b4b3e0d1228ed1cbb66bfbfab92402515500797a6d6a3edbe3608e2c00ce3bede0d620d82a01f985daa075a3830c08802a0c89365f68a45539e463008a3b833d07bd434f438e81a866e52dad623d30030ba7410c6dd7ea7470e0df2276712ae99c8b86075ebc8bd6bfbd6d277e7ced5c8b7aa32628a7dbaaecd9545bcf629b148047d50d7a18c328e4ae53dd88e6fb9a32bdfbeb3eaab1fc39a867bef012f3fa6890044d39cee40423ee111368dcca69eeddb5367344646759fb3134290e1cfa71782bfcfaa2ecbea978c5c77b4400ecd73baff2fe6f9aeeddc90c3e195de1d4d8a0a5311aaaf5ae0b10e10d8e0f07126b40bf85b15598ddfa1f182c0c194d07e1bfe75c0a74170136a0fe4766eb90b521fb910430e69f8f97420b80a7cbad0a7ed422cee17ca0889df388ba12845c21cea9964bbd2cc89dde9e8f5df81a4b97c1733ccfea9f9",
      "658e3223ec2095c78aeaedaaba59860af10cc2208e9253f7fa1ffe660caadd040000",
    ],
    [
      "ETag",
      "lR/aMY7k7BSjlP1//a02MQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d91514fc2301485ff4b7ddd4c374485844450a22484c080276348299731d8764bdb810be1bf7b5b8c1ac34b7befed779a73da13db65e58ab5d9324bf715e8fa26053b714502a6caada14d616980050cac4889c4c9b1a9f6ad1d4ea27e3ddecce365356da69d0e11466ea010ac7d62eb0cf29561edf7132b4501245b2cb4bf91305b2b3779e9cefad415b872dd683e1c767bc33e3b077f346af7cb4f67c960f47a4df1710ed8169709ac414329c139501ab720edc08533a2503984062b2dc1300ffb835463a584460c6912468f6174cf9b8dc65d8bc70fbc45608e52d80c4b62e753b2c62c5a912778a46c2c2640fb9262aefd7a70631ef390c7218f7c1637822de80366863fc1a7f7722bb1f0beaf0ae31fa1046121faaffaf8f6d1ab2d98b1460a65c0e5e1976ccfe8684bef6075050193823ee62db397fefc0509a285a4f5010000",
    ],
    [
      "ETag",
      "oQw5pq9koQ1EyPhU2buS5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d1",
      "6e",
      "82",
      "301400d07fe9b3355504dbbd895225888a5502be340dde093a2a1499e0b27f9fd9f983f383549641d3c8c7fd061a7da05e8dd9301b061571ed089aceab0973b0b597fee812959225e5466cb81727935ddf4e0e6d81258671efb0752a4f3a48096737207cb4bfe889c15f3298d3ec782871958a5ac1737d5bf806c2ed3d0ee8f95e1ccdb272c2fe416b9225906bfdb98ba3de8fcf7bef69acc05b3ad72424ab6baeb761f4bdf05f33374ea7994b6a319fb97629f18bd3f044b90a1dab3da4af157d96a21238e844a3f95419de95a4cda95f0ba6666880a0ab0a038d2cde59cb666c80fee7f2d157f0eebba00c18f4fb07e066338618010000",
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
      "Sat, 14 Nov 2020 06:22:02 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-19-1605334902709",
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
      "6b4fdb3014fd2b91f771b4499bd297548daa8451a94d599ac2d03445b67b931992b8c40e88a1fef75d3b948190e0536cdf73ee39f79127722bca2d191326b2bb1aaac72f37929123029a66f8da995e7e5d053f7bd7d77f1783e2e14ce6b99f3e4c26881086a568b1cba1a5645d7150e3cdba9d55b2ded14aca16266a7546ad4edf3bf6fddec8eb0ebc11f214e4e94294b7c8fea3f54e8d5df7a0ddcea4cc72a03ba1da5c162fefee7dd7dd55f206b856ee5b49175594fbb1e8b75c72aa852c279b351aa81554091454e468e13f73cb4edea66e0b5ab43304df0b0e94735997dad8c2145c96a9c8eaca6625e327626dbe3a9075b00866b1c3655e176552d2028e9c2dd534d18f3b70cea2d5d2998767ab68398de7ab3059cfce83e5b43d5b2d36cb70ed5c9d0751e068ca72b05c67e29cd85b8817d4df82d2a2b4eab17936cacf0d9abf1f8b21a0b48226980cbc3eed0cbd114bd980a743ff98a51e3036648363ea338f8f7ad0db32a0c8b3a296454b5972b61d8297f612afdfef26bdfe88260cd234619461baa1d7037f44f647e4a1121a4e85da49259a0e91ab681e07491c6dc2d9340e6c0929ad737dda183305bcf6a8b140047d50d3de44854425d3ee791807d17416cf2f8366c20bc8287f5cdfe18c539a2b4034adb0791aaaa5dc62c348385d06a708b613bb38041519ff7a22a6e7c6c5ab96bfd0631ca0b1abed97ace3681e7eb7760e884b9ad71672df1c4c19a9c88de9fd6f04e28e3649c88f4d105d93e62982142a28f9e7c344b00d7cfaab1df61eb1b8f928a334de7175b83222bc82668584adf6c0eefa5ed727165ce977b14ec73f34cde43019a180523f57d4ec3d16da88d5ea0584419c7e689bb5ff07be8607d477040000",
    ],
    [
      "ETag",
      "1AV+OEX4YYzL7mwFoll3fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1605334902709"
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
      "0000000002ff8d93dd4ee3301085dfc57b9b4a69298546ea45ba14280afd0d082d42958927c15d270e1ea7a85bf5dd771ca0ac16a47093cc4cbe91e78c4f76ecb72c040bd8a3cc9e2b30db1f19d8b90b168095b248af521708cc63607946e43cb9fa73b19c1becde5e8e66eb5f70d7b97a0a0703223079829cb360c752094a200bee77ace039505ba2559517ab3af398dd96aeb88c17e3c905e5b9162e9fdc4451388c466cef1d1a05b77c55f3df687bd87b6cad1f179082812201374b69f41a123b763291e7a58216eaca2480ac86eb0f99d155c98dd62daab4dafd56bbe71f1f1d75fb7ee7c4ef13a874c2add405b1374b9a8f596db95ae81752c9da1d224c1d93e2b47e6ea82e45adc485e349dcebd603fe0ba4d2a07d5dca3bf826ee7f52f16f8274035235411914024c1325cb1517c2006223a971c5cbf2800da7d3e813c40b61b414cde0463600ca6e0ec079340dbf5a2df9e6635767613cfa44a025371c90787c3d5ac6e1f5cc710f6ff73bdc5ac099d1641604e793b6df3d3d3ee9f9afd6f9a99d9de89cc09a0a3c9670fa032ea56541ca15c2fe2f39733af75f030000",
    ],
    [
      "ETag",
      "QcJzGSQrs4VHEPjZeX2JhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553696fda4010fd2bd6f64b2b71186c0e234509216eb0444c624cd2a8aa60bd8ce906e375bcebb428e2bf77bc0eb92a251212b0f3debc37d723d9f074450624e2ebfb02f2dd973b11911a0145d7f87ac646e3a437bd195f8dc58f8de39cba49dbbe3a3a42042f59926eb304ea521439033998cf1aeb5c1419cd85a863a27adbacb7ba66c7b26cc76cf74c0779129278c2d30db27f2b95c941b379d06eac85582740332e1b4c6c9fdf9b0fed66968b3b604a36df4a365145363f163d4e04a38a8bf4683e430385847c015bca13b4f0c25c45276f533738dd36d6087ee00c2863a24855690b533091c67c5de43a2b193c126df3d50f327327ee2834965261cea541a5b158e4208b44d58ca5167f7acc36c6f7607a612cb1c098272097c6cdd80d5ce319e6f9c6dcf7dd59687c3dfe669c07d3f9a5717a7b08d70e1a686b0552f1549b0a69944069e8a96fdeffd32a095451095570d133bbb4d5379d288e7a2cee5b9d2836218afa51af43adc8648e0df62a028a3c5566d72c9a8ad4895a605b9dceaaedf422bb6dad58df667d4c43ad6ea7cf62bbdb32b17f31d9d7c89f9c2b38e332139257cd23378117ba8b3098fba361e8ea32628a8d3aabcc9545bcf6a9b048047d50d7be8c72814ae5243c3f7483e128f4aedd6af8135853b69bdde3f8639a484034cde91614e41762854d2397d399177a537f3841869ee8e50121c9e0e7e30b21dc65bacb4a7f9361100c6f9143f39ceedec56661e0f9e764bf7fa5774d9342633441ffab041eaa00813b5c3fc1a579027f75917a01f7b51704aea682d6dbf0af3d7e6a046fa1f240aee66e704baaa70062c821659f6f078275e0d3933edc1762f1c25006375271dc45264b119643b5937c5b9a39b0db96d3b38906e7ea7dcc6e59d6a1f9658e32236c21554f1555f7a5bb59860af90cc220ae925ff5fa1f0a380e35df040000",
    ],
    [
      "ETag",
      "DcCHl7OWHQHoXk99BEl24Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1605334902709"
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
      "000002ff6d915d4fc2301885ff4bbddd601b0c1c098962508980300637869052de8dc1b6ceb64309e1bffbb69848d49b7e9c3ea739a73d917d5a6c4887acd3e4bd0271bc49404df5220459654ae254f24202b108289a20b99db617f3c523f55f581cd6eb5e1155af8769b78b84645bc829e99c489c42b691a4f3762205cd016dab95303722a68ea556a2c1a83f8bee47139472bed1d2783e1cdef7867d72b6ae8ce5fec7348bc2c1f8e93fc7f26c911d5f8710838082818e510abe03a606baa1a47999812d7925184862607390085e9554706ea3627b8eedb61cbfd168068ed776020433cea84a7981ec7c86d188e28a6621ffc082c443409825768dcd7840d9adf9b78eef076ed0ec07a68e566107e2c053e9dcc1a78953633c37d1ff785b4d745f7b195005ee6fe3f23b4defa8404e04c76a12742be7d2f0816b5ae16b2851814518c53f7a4ed5657ffe020fd0f29400020000",
    ],
    [
      "ETag",
      "hQ7VUVFa5KcfR//2nTuOvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb646d1d50a3d09d4005815a8dfcec86c1900225893420313abd7b9dbe1bbc072830267d9f0f979670f00a543133a7781a749a050f65ec97ed3974b471cbcece8fc962c9705536765a3afe421d154a397e83707320dcd3c4173a1da10e45a0acbb16442fd2a890ed6a6c15dbf589ed2977df6366d6e8d26f223f8931c5bb8ebbb36c4ef62aa1d49a2709934969283c13f75c5a28f1a403f187ac587afe5e6c3fc74837ae5890aebeaedbbbe3d19aea356c471446b9ed49d90cc414abdb1273c3df79d9c03abab4d4926748eae1daadc004905bd708d2e7cd333b87a63901fff37c501d79f62d520822c0ef1fc84ee8e918010000",
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
      "Sat, 14 Nov 2020 06:22:04 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-21-1605334902709",
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
      "536b4fa34014fd2b64f6ab2d7dd0d23669d6a6a292b47417688dd96cc8305c709432c80cbaaee97fdfcb605d8d897e6266ee39f79cfbe099dcf122213312f3ecbe86eae9dbad88c9090145337c35ffc275b0a33723d7fd33bee07237ce6e57d97c8e08deb024dd973974a4a82b0672b60dba5925ea92564274305167d0eff4c7bdd170684d7b03bb37459e843c5df1e20ed9374a9572669a47ed6e264496032db9ec32b17f7d371f066659895b604a9aef254d5491e6e7a2df73c1a8e2a2986f0334504ba822d8539ea385ffcc243e7d9fbacbe9be9b21f88133a08c89ba508d2d4cc14491f2acae7456327b26dae69b03099c95b30c0d26f27a5f4405ddc38991504523f5548271ee6fd686eb9d6ffcf52274375e142c2f9df5a2bbdcacb66b2f30ae2e1ddf31148d73d05c636e9cea9b8717d44f402a5e68f5b0796e945f1ae47e1c4b434069096d30b27b63da9ff4a6711adb2c9d0c4771da83389ec4f6880ee31e9b5a60253150e46951cda28528ac7e0c2c99c4d16498a69195a649446d4822cbb6fa308eede9948dc9e1843c565cc11997a590bced10b9f2ddd089427feb2d17a1a34b48699dabb3d65853c05b8f0a0b44d027351d9a2817a8d4b4dbf542c75f2c4377e7b4135e4146d953708f334e692e01d1b4c2e629a8d622c186116fb176ce10ac27f6e3189464f6eb99343d6f5cbc69f92b3dc401367695fe9220f45def42db39227634af35e4a13d90122ddf606de8faf01b91b8a46d16f273ebf8d7a47df221850a0af6f53411ac035ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b640facf154ffa98a56ea436c620f8f5d6b723419610f857aa9a85d7c2cb415abe52b0883387e4f77ebf00f96d78dab78040000",
    ],
    [
      "ETag",
      "/zeYSVah5IIx6GisV6gjLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1605334902709"
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
      "00000002ff8d92d14e83401045ff657ca591d64a95c4076aaba2b46a8b89c6986685016917167717b569faefceae5a8d9ae80bcc0c67967b2fac60515429f8705fe48f0dcae5568efad21413540dd78a6eb5a8148203a8594ee4d3e9e8466d9f5cdf2c5e3afde43ccd223e38bb3c382042250f5832f0579015c85305feed0a2a5622ad2582376535b39d037a599be1349e84e363ea4b919a7e7c1545413f1ac2dad92ca64cb399e5ffb176b776602eee2798a1c42a41a3a596628e890e8d4dc5ca9a634b894626a8c0c2f6412e45533329448b26ad4ebbd5f6dcdd9d9deebedbe9b9fb047291305d888ad8ab29e9032d34e313f14c2ec12340da920c67f6fa44e322b5464c198e63af6bf57d05485a56709cfd0d92de07469fe1037b8fe03bc74ad1547a431d45e7c16fc751a69f470d8278f883509a92da2071381a4ee3607461b8bb77effda54675210505a9d064d876bb7bbb3dcf7d8bf55098a8e93dbe960d3a9030fa3b4e0a0d7ec6b8c2f52b0e94b3767b020000",
    ],
    [
      "ETag",
      "vJMYs/HXYkx2BcOdfLlDKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1605334902709",
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
      "4fa33018ff2aa4f78f26db60ec85b1c47838398f643205a6d1cb652ba5cc2aa3d8162f3bb3ef7e0fe0d49d89264b58fb7b797ecfd3f6193db03c416314b3d56349c5e6db3d8f510b518557b06bd997b7b7dde924bcdb4cd8c9e6afb815fabd7374040c56a9245e17196d4b5e0a42e5781e7656829705169cb7c1a86d9aedeed018f47a7ddb302dc3069da4593a65f903a8ef942ae458d777b53b2bce5719c505931dc2d7affbfa93a91782df53a2a4be5f52872a52ffbce871c609568ce747f3100294928a055d639641843765127fdfb7ee30bceeac80fcc408c584f03257552cb0203c4fd9aa14b52b1a3fa33ae6bb3f2874a7ee24d2263367ea8613f7c0b93a3b58e275e5b13c6c69c6a186a5b658082acb4cb5b425b497b28c2e58b26c90e241fb11ccce018130775852b9d4ae7fba81abed933d5f9bfbbe1b46dac1f1a17616cce617dac9cd1e070227542a96d771231c67b48afa3251efe3395602aca066032e2c6388bb23c38ed3d822e9a837885383c6f128b606b8171bc4eed37e12530c3a55b9d72a9cf37c88e318a76460a64942bb9681ed5e17f74631b6699ad89649497f0816046d5be88f608a9e325970c99ab1a2ebc08bdc4514ccfd8913b9751b2986799d36e1aa26dee754d024903ee96b5ba18c43a5ea8c3c3f7203671279576e732da67485c9267c848b91e24c52606381d7545171ce13181aba98855ee4cd7c670a8afaac2f760c89c6bf9edf04d1a6a8a7acea2f7282c0b9010d16026ffec320c7b08fb6db77e5ae7056d6949a5faf1affa706405de8e56d65a2edef2dfc5a08ee7fe38e2ee76e70839aad80a654d09c7c7dee40ae812f9ff1ee4d01175e1594910ad670cb88ac8a10419bdbc6d675dc17b539189826aac9427dc02c73b81b6be55139d235cdd54b47cd9baa075541a57c25010897c4f7fc3340ff0171d7cd9bd3040000",
    ],
    [
      "ETag",
      "79QZZ1LCShyCiByzrZr/jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1605334902709"
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
      "6d",
      "90",
      "5b",
      "6f",
      "82",
      "40",
      "10",
      "85ffcbf4151a40eb2df1418dad26d4b6a8894d63cc0a23a0c0d2dd45a3c6ffded9b58936e93eb073f90e9cc3197669114107d669fc5da1383ec4a83e7411a0ac3225e92a7921112c40c56222178345efe446af49323a7c3a65569f27ad53dced1221c30473069d336c52cc22099daf33142c4792ad56c2bc9130752cf5e4d97febcda8cd79a4dbc9dcf77b7d7f0817eb4e54ee6e82f164367c1906ff4996170bb67c1de0060516216a0fa5e05b0cd558c7932c2f33b425af4488120c6c16b1e055c904e7364d6ccfb3dd86f354abd5db8ed774da04663c642ae505b1f3297903c515cb027ea074e011204c494137e6b9a7b1fbd86a369cbb5333a1f646a1bdfe859bb7b5abd7cbdf8ff48f0ae5bbe0e458a236eb5c8d0fb80ea328a412155a1032faefa3545dfbcb0f4f222601d4010000",
    ],
    [
      "ETag",
      "XCXAz1dMhhHwY0pl4Uh8zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282301800d0bb642d8efcda7457821689012db6946c32097e580645245a814eef5ea707788bf783645180d6e27aaea141cf6890169e1653dace7c775b5ad9f5cbc8cfdf713280d92f1b4f1db647bd230db5a2d1836a1ff7a53a8ab535d47b3e5ae98b0a1cb7320d9d49ca4a72087a3e46c777c1893f3f2da224f4b049d85a25a4cb4ba87da0ab94bb4fbc76182374cc3ff2d0a95eb313e4a983ef70db7c62794b49bca13badc6878a65602c06b16cbdb269635b152c78b35718d8852705168ac01cef99ccfd4b6857c9455383af655cd79099b3dd164d10f46dd58116d5236bbb184fd0ff5c5c87161e7d1f64071dfafd035b9eaaef18010000",
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
      "Sat, 14 Nov 2020 06:22:06 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-23-1605334902709",
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
      "000000000002ff85536b4fdb3014fd2b91f771b449df0fa91a550923529b8e3405a1698a6ce7261892388b1d1042fdefbb71280321c1a7d8bee7dc73ee23cfe45e1431991326d2bf35544fdfee24232704344df1f5623dbe7acce9776fe2ccb87de796beb8a92f170b448886a5685e66d051b2ae38a8f97ed74d2b5997b492b283893afd41a737764683c170e6f43107f21464c95a14f7c8bed5ba5473db3e6a775329d30c68295497cbfcf5dd7ee8db6525ef806b65bf97b45145d99f8bfec824a75ac862b1dfa1815a4115414e458616fe336376fa3e7557d0bc9b22f84170a09ccbbad08d2d4cc1659188b4ae4c56327f26c6e69b03d9b96b77155a5c66755e4405cde1c48aa9a6917e2ac13a0fb61bcbf3cfb7c166197a5b3fdaad2edccdb2bbdaaef71b7f675d5fb8816b69ca32305c6b619d9a9b8f17d48f41695118f5b0796e945f1ae47d1c4b434069056d309a3863da9b3a3396b0094fa683114b1c606cca26233a600e9f0d611833a0c833a286450b594c7a7c3a9e389328891d160d29cca229c7d3cc6133de0346f928268713f258090d6742955289b643e43af042370a83bdbf5a86ae2921a175a6cf5a634d016f3d6a2c10419fd47468a242a252d36ecf0fdd60b90abd2bb79df01a52ca9f767f71c609cd14209a56d83c0dd546c6d830e22f37ee1982cdc47e1d838acc7f3f93a6e78d8b372d7fa58738c0c6ae365fb20b03cfff69ec1c115734ab0de4a13d90122ddf626de8faf00791b8a46d1672b977831bd23e0590400505ff7a9a0836812fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca3db2fbe3813324065ce90fb1e1b077ec5a93a3c9083914faa5a276f1b1d056ac56af200ce2f87dd3adc33f7e1e25ec78040000",
    ],
    [
      "ETag",
      "HL6Vwma+I709c/jEpNiYuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1605334902709"
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
      "5b",
      "6f",
      "82",
      "401085ffcbf41553bc6125f1015b6b4dbc22beb4316685415160e9ee62abc6ffde596a6dd336695f6066f86639e7c011b6511a800dcb68f59ca3d85fad504d74e1a2cc6325e996f1542218808aad88dc85ae79984e46fe75523e58dbd7dbee636839ad1611d25f63c2c03e4218611c48b09f8e90b20469cde7719ea48ba23340ed333d9c7a6e6fd8a53ee181ee87b37edf69f73b70322e8b01536c51f0ff589b9f0cd8f0a58b210a4c7dd45a32c137e8ab9eb6295992c558923c173e4a28e0e2c14af03c6382f3124d4a956aa96c99f56ab5d6342b0db34960cc7da6229e123b9b923e505cb1d8e52fe4122c02445192e1b0b8ee681c0585115df6869e552bf47d05485a18c5b8f81b24bd6b469fe1033b47f09d6309cf5375a1eefb23e7b7e328d3cfa3ee1caff383908a92ba205e6fd0997ace60acb9f9d97b7baf508e05a72025ea0ccb66eda6deb0ccf7586fb98e9ade632b91a3013ea3bfe3215260872c96787a031ffe440b7b020000",
    ],
    [
      "ETag",
      "vfR0zSQOc/m1z6kxCGZf6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1605334902709",
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
      "fd",
      "4f",
      "db",
      "30",
      "10",
      "fd5722ef1790fa9126e9a7845829198b56524853109aa6d671ed6048e2603ba00ef57fdf25a140870452a5d47eefddbd3bdf3da37b9eadd108453c7e28a8dc7cbb13116a20aa710cb703f7e4171b3ccdfec6e12cb2ddab229b5c92f1d1113078a95238cd13da54a29084aad162de8aa528722c856842a0a6e5343b3db36bdbced0b4fae610748a266ccab37b50df6a9dab51bbbdcbdd8a8588138a73ae5a44a4aff7ed47ab9d4b71478956edfd946dc8a2da9f273d4e04c19a8bec6831070385a2724953cc13b0f0a65c47dff743b7384e5b31901f39a198105164bab4052188c8188f0b594545a36754d97cf707cddda93b098dc96ce187072b9c96e2d5a18195b15c4aaa8a44378c15d4c47842977cbdaa91fcdef811ccce010107b75851b532ae7fba816bec933ddf58f8be3b0f8d83e343e32c982d2e8c939b3d0eb85c53a57956790c7194d0d2df4b1bbd8f8f570ab0869c35b8ec9b3ddc1998c388457dc206763762268da241d4ef623b32c9d0a1ce3aa21874ba8c5ea9702632cb64cc8c4c1b6387d95ddae9d98e83fb1dd3195a1dc63089983db09863a36d033d49aee92957b950bcee25ba0ebcd05d86c1c29f8c43b72a8361e8d7696dae2ce2bd4f0d4502e993bab625ca05642a1fc6f34337184f42efcaad67614a634c36f3079806861345818d254ea9a6f25caca169e86236f7426fe68fa7a0a81ef862c75068f4fbf94d106ef2aacbbafaa271108c6f4083a5c49bff30f0d173d076fb2edd154e8a8a52f1ab531dffb10650076a793b5968fb670bbf0682a1afa3a3cb851bdca0fa2aa08c4a9a91afdf1dc815f0e5eeee1609b8b04a90466938c3941155262192d6d3c6d3caee8bdaea772c075564a93f6096d3dfb5b58c5146a429cdf44b45f52255",
      "8d2aa142bd92008421f13dff0cd07f7cf25c9dc8040000",
    ],
    [
      "ETag",
      "8EBKf8wOzgTOb3EVunCQcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d905b4fc2401085ffcbf8da26e55602090f6250d1866885c4c410b26ca7b5d076eaeeb60409ffddd9c5181e7dd9cb39df4ccecc09f67995c018b679f6d5a03ade64685eed2346dd1446f35553a5113c40233226bbe210a66af9347c6e65d4de9bf97baffd3e4c264c68f989a580f109d21c8b44c3f8e304952891cb361be53a32668eb555e68be5ec6116b350526285c52a8a6ea7d10ccede5559bdff57c9faecc18eb631a6a8b0926853d48a7628cddc0ea8455917e86b6a94440d0e7646a6a8a98522f259f1bb7dbf1306835eaf3f0abac360c4604152989c2a66576f9c0d0c1951c474d0761b0c28f7e4515377b62c0fdc0cad036cb46b2ffcf33ad65bff369c1e0dea17459c4ea30d165c42de910d6e7820a31af4400adef2636e2efff30fc240b26ec2010000",
    ],
    [
      "ETag",
      "2aw6frTJ7KvcLvFtIX3vzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0",
      "bb646d1d2006b04b28887cc488eda09b4cc0182151c2a722767af73a7d37783f809625eb7b323482ddc03b98a8b19c97f348690ec265fa548e63ed9e7a628c2bc871de2c2a1a7a49bd8252b5049f34d3a105927c5bef17ee9a5c3fbea49e1a471b4b21effc13da19d70e6b63f8f62d5c7805f1fc496be8d99463e8b6d44399c3fd7a94283ca779b541e7684da5d89be9f4368c31dcc05dac45d7be0e92434032d46c6d523c7315d8e42e38e5c131b276c145656e7f73d34e743a6936f0fe28e2457518274ef3ca13d8bd68657b8afa028319600f5575ac27d52b0bd1723903ff73324c8abdfa0ea31debc0ef1f4a9b497018010000",
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
      "Sat, 14 Nov 2020 06:22:07 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-25-1605334902709",
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
      "ff85536b6f9b3014fd2bc8fbb82690178448d19a2574654b4807a4d5344dc83686ba259862d3adaaf2df77314dd7aad2fa09dbf79c7bce7df0886e7999a219223cbf6b58fdf0e14610748298c239bc8a4df1ed737a7b67affea8dd5727fe78e107db7c3e07046f5912efab82f5a4686acae46c17f5f35a3415ae85e841a2de70d21bd8d664341abbd6d0b15ce04956646b5ede02fb5aa94ace4cf3a8ddcf85c80b862b2efb54ec9fdfcdfba159d5e2865125cdd79226a848f3ffa29f0a41b1e2a29cef2230d04856276c8f790116fe315372fa3a759fe37d3f07f03da70c532a9a52b5b620051565c6f3a6d659d1ec11699b2f0e28f2d6de3236a8289a7d999478cf4e8c142b9ca8878a1967e17663f8c1d936dc2c627f1b24d1f2dcdb2cfacbed7ab70922e3eadc0b3d43615230cd35e6c6a9be057001fd9449c54bad1eb7cfadf25383fcb7636909202d59174c1ccbc683a9e5928c38349b8e2624b3182153e24cf08858d41db3714a18069e16d52c5c8ad29e0c523ab5ec84b8ce34196794242e4e49624f337b426c7b8047181d4ed0ef9a2bb6e2b21292771d4257a11f7b491cee82e522f67409196e0ab5ea8cb505bcf4a8a04000fda7a6431be50294da76fb41ec858b65ec5f7add84d72cc7f421ba831967b8900cd0b886e629566f440a0d43c162e3ad00ac2776710c4a34fbf988da9eb72e5eb4fc991ec3005bbb4a7f5114877ef045db39222e71d168c87d77401558be86dac0f5e117206149bb2ce8fbce0b7fa0ee296419ab5949df9f268075e0dd7fedb8f88085d50719a9e00ebb43652b426bd6ed10d7e51ed943c7b16da4c1b57a1373a7c363d7da1c6d46b667a57aaaa85b7c28b4136be433088230fe4077ebf017509cd14f78040000",
    ],
    [
      "ETag",
      "oMlKBdkq6DxtUJ7T+PINOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1605334902709"
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
      "ff8d925b6f82401085ffcbf41513bc6125f1015baaa66abde04b1b635618100b2cdd5d6c88f1bf77965adbb44dda179819be59ce397084e7380bc0866d1cbd1428caab08d55c170b9445a224dd729e49040350b188c8fbfd8ef9ead0dcbaad4939701f4b77d61ece7b3d22a4bfc394817d8430c62490603f1d216329d29acf9322cd365567802a733d5c7a8bd174407dca03dd4f57e3b1d31fbb70322e8b01536c53f1ff585b9f0cd8f3ed02431498f9a8b5e482efd157236d53b2344fb02679217c9450c1d58348f0226782f31a4d6a8d76ad6e99ed66b3d5351b1db34b60c27da6629e11bb5a923e505cb164c15fc925580488aa24c361753dd0380e2a23ba1c4d3dab55e9fb0a90b4304e70f337487a778c3ec307768ee03bc7525e64ea42dd8d1f9cdf8ea34c3f8fba753cf7072115257541bcd1c45d7ace64a6b9f5d97bbf54286782539012758675b375ddee58e67bac375c474defb19528d0009fd1df318c15d8214b249ede00307441e07b020000",
    ],
    [
      "ETag",
      "Kjhactv3bE4MyGEZyEP5HQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1605334902709",
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
      "4fa33018ff2aa4f78f26db60ec0d96186f37513927db01d32c97cb56ba825546b12d5e16b3ef7e0fe0d47989264b58fb7b797ecfd3f6193db06c8d862862c96341c5f6db3d8f5003518513d83dff79e9e90b92f4eee4d55a90497ce5cf707272020c56aa24dee4296d4a5e0842e5701eb412c18b1c0bce9b60d434fbcd76dfe8753a5ddb3007860d3a49d378c2b20750df2995cba1aeef6bb712ce9394e29cc916e19bd77dfdc9d473c1ef2951523f2ca94315a97f5ef434e5042bc6b3937900010a49c5926e304b21c29b721d7d3fb46e31bc6925407e628462427891a9321658109ec52c2944e58a86cfa88af9ee0f0a9c89330eb5f174347182b17314ccaf8f5678537aac8e1b9a71ac61a92d9782ca22550d6d05edc52ca54bb65ed548fea09dfbd36b4020cc1d9654aeb4db4bc777b443b2eb6973cf7382503b3a3dd62efce97ca6fd581c7020f09a4ac5b22a6e88a39496515f26eafe7f8ea5002ba85983cb81d1c76dcbb0a3381a90d8eaf4a2d8a0516445831eee4406b1bbb4bb8e28069d2add2b15ce78d6ef5b9185718fd8b86de2816d9b64407b96d189dadd98dadd28a26b138cd0ae81fe0aa6e819933997ac1e2bbaf5ddd05986fedc1b8f42a76a23c630afb33a5cd9c4fb9c0a9a04d2277ded4a9471a8549e91eb858e3f1a87ee8d535f8b094d30d9068f7031629c4a0a6c2cf0862a2aaef91a868666d3c00ddda9379a80a23aebd99e21d1f0f7f39b20dce6d59455f54523df1f2d408385c0db0f18e4e877d16ef7aedc0d4e8b8a52f1ab55edff5403a80dbdbcad4cb4fbb3835f03c1fdafddd1afb9e32f50bde5d3980a9a91afcf1dc815f0e533debf29e0c2ab823252c11a6e1991651122687ddbd8a68afba2362ddbb2504516ea2366b7db83fd584b8fd2916e68a65e3aaadf5435a8122ae42b0940b8249eeb5d00fa0f416afe30d3040000",
    ],
    [
      "ETag",
      "FJHN/Ycg5hsKdrcLfKRPag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1605334902709"
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
      "6d905b6f82401085ffcbf4b1a028168b890fda686b4a6c454d9a34c6ac38501458babb78a9f1bf77766d5a1fba0fec5cbe03e770826d5aaca103ab34f9ac501c6f1254135d8428ab4c49ba4a5e48040b50b184c822d8efe2c370f2dcf2a6b76ff5e0abde93debedb2542461f9833e89c204e315b4be8bc9fa06039926cb914e68d84a963a927c3e0a537a336e76bdd8ee741d0eb0703385b57a272fb27188d6783c741f89f6471b660c35721c628b088507b2805df60a4463a9e647999a12d792522946060b34804af4a2638b76962373dbbe13977aedbf29d66dbf109cc78c454ca0b62e753f2068a2b96857c4fe9a049803025058dcd734763bfe6b6fdeb6332ed8c405bbd661b4ecdbdffdd37f47ef1f391fe51a17c159c1c4bd4669d8bf107aec3280aa9448516448cfefb53aa2efdf91b970a9edad4010000",
    ],
    [
      "ETag",
      "nLwvfxFQK46S+X/Lz/As6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf516e82300000d0bbf45bcca494d0fda980d68a5311417e48d522082b08255096dd7d66ef06ef07b0db8db76d22ab820bf00914d3f1f436a5f5c7021dee1b7a0903d541edb05bd443651b851b513b574d2a9cde72f0207025d65f483e214277bc49e9d31f1efb65e0f28284ccd8aa63dbd550f7fc937636b30bf449bf3a0d6866d05c22eed38ebd46ec424d5b061164965ae789bb33cf65d05e4da2a4cc6663b8b9a6700f8fe578d6573d1132f31ea57668865858d1b627561a8bfbaa98b3172211e94a27a3d5b799acf59894364b4bb1b72d2feb1e73de8309e0439d37bc4df27716228c27e07f9e4855f3777fc159c31bf0fb0701324fe618010000",
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
      "Sat, 14 Nov 2020 06:22:09 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-27-1605334902709",
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
      "0000000002ff85536b4fdb3014fd2b91f79536e983a6a9548dae0d1089a62c4d8ba6698a6cf72618d2388b1d1042fdefbb71280321c1a7d8bee7dc73ee23cfe45e143b32214c647f6ba89ebedd49464e08689ae16bdeffb138dfda6ad90b5c7a711d07f7b0a58fd3292244c352745fe6d051b2ae38a8c966ddcd2a5997b492b283893a7db7d31b39a783c1d073faaee3214f419e5e89e21ed9b75a976a62db47ed6e266596032d85ea72b97f7db71ffa7659c93be05ad9ef256d5451f6e7a2df73c9a916b2986ed668a0565025b0a722470bff993b76f63e7557d07d3743f083e040399775a11b5b9882cb2215595d99ac64f24c8ccd3707b2f6affc796c7199d7fb2229e81e4eac1dd534d14f2558e7d16a6905e1f92a5acee2601526ebf9a5bf9c75e7ababcd325c5b37977ee45b9ab21c0cd79a5a67e616e205f577a0b4288c7adc3c37ca2f0d0a3e8ea521a0b4823698b8ce88f6c68ec752e6f2743c3865a9038c8d997b4a07cce1de10863b06147946d4b068218b418f71978d7932e88fbc64d87369e2f5dc71e2a4de900f462c1d0e3d7238218f95d0b010aa944ab41d22375110fb491c6dc2f92cf64d0929ad73bd688d3505bcf5a8b140047d52d3a1890a894a4dbb8330f6a3d93c0eb67e3be12bc8287f5affc519a7345780685a61f334544bb9c3869170b6f417083613bb3e061599fc7e264dcf1b176f5afe4a8f71808d5d6dbe641d47417861ec1c115b9ad706f2d01e4889966fb136747df883485cd2360bf9b9f1a35fa47d8a20850a0afef534116c025ffe6bc7c5472cae3eca288d77dc1dae1a115e41bb43c2947b64f7bdd1c8fca99a56fa43ccf57ac7ae35399a8cb08742bf54d42e3e16da8ad5ea1584411c7f68ba75f807c7c6d1ef78040000",
    ],
    [
      "ETag",
      "l2BDFV/sM1I7aGPTIkeVaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1605334902709"
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
      "c2401085df65bd2d49f96bb50917a0a810c0528a378690a59d4271dba9bb5b0d12deddd98a68d4446fb633d36fa6674e77cf1ed33c661e5ba5eba712e4ee6c0d7a6a82005429b4a24781b9026631d07c4da483fe50bec689bf72fdc67818d427e23e98763a44a868031967de9e2529885831ef61cf729e01b54528ca2c5f5699c5f4ae30c559180c26379467189b7c321f8dbabd519f1dac5363cc355f56fc3fda16078b6d7115400212f2088c9642e216223d306b2a9e15026a0a4b198162155cbd584b2c0b2e116b54a935dc5addb1dbcd66ebc26eb8f605810223ae53cc899dcf481fd3a8b908f045194f089055480b27d5f94ce534ae1631e160123aad4adf5780a425a980e5df20e9dd70fa0d1fd8d182ef1ccfb0ccf589ba1edd757f1b479e7e8ebaea86fd1f84d2e4d4090907e3fe2cec8e7dc32d8ebbf7761a942f918c54603cacdbadf3b6ebd8efb65ea2b19abee3695982c5224eb7e336d5cc4bb850707803028396487b020000",
    ],
    [
      "ETag",
      "6oPJrzdfPb7P2MJR1NlVRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1605334902709",
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
      "61",
      "4f",
      "e2",
      "40",
      "10",
      "fd2bcdde17cd012d2d5020311e873d6d82852b45632e17d86eb775b5edd6ddad8618fefb4d5b5139134d48caee7b6fe6cdeccc33ba677984c62864c94349c5f6db1d0f510b518513b825178ea17b7e687f1f4ecd2b3b2aafcf17717272020c56a924ce8a94b6252f05a172bc5a7612c1cb020bcedb10a86d0edbdd81d1b7acdec8306d63043a49d378c6f27b50df2a55c8b1aeef737712ce9394e282c90ee1d9ebbdfe68ea85e0779428a91fa6d4218bd43f4f7a9a728215e3f9c96a09064a49c59a6698a560e14d19853f0e437718ce3a09901f19a198105ee6aab2052108cf639694a28e8ac6cfa8b6f9ee0f5a3a33671a6897ae77b4c15925dd1c6b586aebb5a0b24c554bdb4045314be99a459b0629eeb55ffefc1210c87f8b25951bedfac2f11ded90ec7adacaf39c65a01d9d1e6be7fe7cb5d07ede1c70c06344a56279ed30c0614a2b772f4d743f3e5d25c00a7236e0da3606b83b3446611cda241e5afd303668180e43bb8fadd020a31eed4521c5a05355f45a85739e9be630a2461c45a3d0a4567f60d84333ec5940c631e94603886913bb3742bb167a124cd133260b2e59d34974edbb81b30efc95379d044e5d468ca15f678db9aa88f73e151409a44feada5528e390a97a16d70b1c7f320ddc2ba79984194d30d92e1f6016629c4a0a6c2c70461515973c82a6a1c57ce906eedc9bcc40513fef62cf9068fce7f94d106c8bbacbaafea289ef4f6e408385c0dbff30f031e8a1ddee5dba2b9c9635a5e6d7a726fe6303a02ed4f27632d1eeef0e7e2d0423df4447bf578e7f839a2b9fc654d09c7cfdee40ae812f3777bf46c08545823452c119a68cc82a0911b4993696d5765fd49661f7faa8260bf5011b59d6bead558c2a22cd68ae5e2a",
      "6ad6a86e540595f29504200c89e77ae780fe030c8d1613c6040000",
    ],
    [
      "ETag",
      "cHE0/NRb7+8C2V7duWGPfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d904f4fc24010c5bfcb786d495b50fe241c4011491a940a2743c8d20eb5d0eed4dd2d0a84efee6c31cac1cbeececcef4ddedb13ec3299400fd659fa51a13adca46866f611a1ae72a3f92a496a0407d08894c9ae960bff612cf361ba964781c1573268cefa7d2674fc8e8580de093619e68986dedb09a4289065ab95aa3732660ea5ed3c86cf8339970525b69c2ec270300c477076ae44e5ee4f3099ce47e351f49f647976604beb0837a850c6683d948ab6189b898da74551e6e86aaa548c1a6ab81ea48aaa522822973b6ed071fd3befb6d96c75bda0ed7519cc29162623c9ece295bd812123f2883e391d040ca8fac94137f5b9e7b6d76877ea18fb9ab1eeaec77ea315fc8e7d3b5efeac1d1e0cea1745ec51a3b5e75dacde93b56f389651153a100bfee9a7cc5ceaf337474f8cf6c6010000",
    ],
    [
      "ETag",
      "9snU1DGnlBgbnzae2xdA3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b7282300000d0bb64ed3808a498eea012e5136a0b52ca86410c887c121246c04eef5ea7ef06ef07e44541a5cc46d6d01ebc822557d1ba587b5cb1e047190c53eed4613c78e9911312883e389ba94a34c380aa12870d7904e8e4756f8657443926a7b9dd87d95da603e7b55398837c84e688a72ee8addb8bfb256d1cbf9372dab0529801130fd96bfeb22fcc2e71e9e49ff16d368ebb7607eb2b615b556ebd945da68df36db1a85baa24baab897d81d732b493f89c39e6a5176e831456c5cda70825e43a46181f74bf75c98c46775395f0da1dc6e6a62b76055680cebc165466f533ab418456e07f9e8d0ba7cfbe45734105f8fd03201170ca18010000",
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
      "Sat, 14 Nov 2020 06:22:11 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-29-1605334902709",
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
      "14fd2bc8fbda0412087948d19aa5748d9490969056d33421632ed419c1149b765d95ffbe8b69ba5695da4fd8bee7dc73ee8327f29b1709999098677735548f5f762226270414cdf0f5e1cfe5b7517131327765a276fe9de3ff5d5f65d3292278c392745fe6d091a2ae18c8c976d3cd2a5197b412a283893afd71a7e75a03db76c6567f688d9127214f97bcf88dec5ba54a3931cda376371322cb81965c7699d8bfbc9bf77db3acc40e9892e65b491355a4f9b1e8d75c30aab828a6db0d1aa8255411ec29cfd1c27f66129fbe4ddde574dfcd107ccf1950c6445da8c616a660a2487956573a2b993c116df3d5816cbca5370f0d26f27a5f4405ddc38991504523f55882711eac57c6c23f5f07ab59b858fbd1667ee1ad66ddf97ab95df91be3e6c20b3c43d13807cd35a6c6a9bef97841fd04a4e285560f9be746f9b9418bf7636908282da10d4643cba5bd91358ed378c8d2913d88530be278140f07d48e2d3676c04962a0c8d3a29a450b51f4e3bed563561cc5aeeb440e75ec880e476e94806df7ac14dc1e00399c90878a2b38e3b21492b71d2237c122f4a230d8faf359e8e912525ae7eaac35d614f0daa3c20211f4414d8726ca052a35ed5ef8a117cce6e1e2da6b27bc848cb2c7cd1dce38a5b90444d30a9ba7a05a89041b46fcd9ca3b43b09ed8e53128c9e4e713697adeb878d5f2177a88036cec2afd259b3058f8dfb59d23e29ae6b586dcb70752a2e55bac0d5d1f7e211297b4cd42aeb65ef083b44f01a45041c13e9f268275e0d37fedb8f888c5d54719a9f08ebbc36423c22a687788eb728f6cbbe7b80ed1e04abd8b0ddcf1b16b4d8e2623eca150cf15b58b8f85b662b57c016110c7efeb6e1dfe016a76e24e78040000",
    ],
    [
      "ETag",
      "wxPB8nH8/jpdtjNq4NzOQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1605334902709"
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
      "00000002ff8d92dd4ec2401085df65bc2d49f987265c14456d02154b31268690a59d4271dbadbb5b0c21bcbbb315d1a889deb433d36fb6e79cf600cf691e8303ab74fd52a2dc5fac51df9b22405572ade856885c2158809aad897cf098efaf7a2a0937367f2ca79b64372fdcc18008156d3063e01c204991c70a9ca703e42c435a8b042fb37c597516e87d6186b330f0fc1bea33119bde9f8fc7ee703c82a3755e8c9966cb8affc7dae268c156ac024c50621ea1d15248b1c5487bc6a66259c1b1a64429235450c1d583b51465c1a410359ad41afd5abd63b79bcd56df6e74ed3e815c444ca72227763e237da085663c10afe4123a04c8aa24c34975ddd1388d2b23a6f4fcb0d3aaf47d05485a92725cfe0d92de0da3cff0819d22f8ceb14c94b93e53d7e33bf7b7e328d3cfa3aedc70f483509a923a23a13719cd42773235dce2e47db8d7a8a65250900a4d8675bbd56b773bf67bac97c2444def71b42cd18288d1df719b6a7012c6151edf00df85e6427b020000",
    ],
    [
      "ETag",
      "VIaNNb8sfTh0lXuPhfvUpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1605334902709",
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
      "7f4fa34010fd2a64ef1fcdb58596fe4e8c572b7a24952a053def72699765c155607177e95d63fadd6f00abf64c3421c0ee7b6fe6cdecec137a605988c62860f16341c5e6cb3d0f5003518563d8fd796f9e156b5fef7e3df93b4de73ef7a3b3f3aba32360b05225719a27b42979210895637fd18a052f722c386f42a0a66934db7da3679add91d1191823d0499a4433963d80fa4ea95c8e757d97bb15731e2714e74cb6084f5ff6f57547cf05bfa744497d3fa50e59a4fe71d2e38413ac18cf8efc05182824154b9a629680855765187cdb0fdd62386dc5405e33423121bcc854690b42109e452c2e4415158d9f5065f3cd0f5a58336bea6917931f072b9c96d2d5a186a5b65c0a2a8b4435b4155414b1842e59b8aa91fc413b73e7178040fe3b2ca95c6937df2dd7d2f6c9b6a3f98e632d3cede0f8503b77e7fea57672bbc7018f21958a6595430f07092ddd3d37d17e7f74a5002bc85983cb81d1c7eda1310aa26040a2a1d90b228306c13018f4b0191864d4a5dd30a01874aa8c5ea970c6b3701046dd81d1ee0e49d0a324ec85a131080c13f749d7e8f5fb9860d2ef6182b60df44730454f99ccb9647527d18d6b7bd6d2737d673af1acaa8c0843bf4e6b7365116f7d2a2812481fd4b52d51c62153792cb6e359ee64ead9d7563d09331a63b2593cc22c44389114d858e0942a2a2e78084d4397f385edd9736732034575bc973b8644e35f4faf026f93575d56d5174d5c77720b1a2c04defc87818f7e176db76fd25de3a4a82815bf5ad5f1d73580da50cbebaa83b6bfb7f034108c7c1d1d5df9967b8bea2d974654d08c7c7eee40ae804f6feeee1a01172e12a4910ad6306544964988a0f5b4b1b4b2fbac363beda1892ab250ef3078edda5ac62823d29466eab9a2fa1a558d2aa142be90008421716ce71cd07f542f73a6c6040000",
    ],
    [
      "ETag",
      "Zj3FuvU/4+BxCmOUoUfFGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1605334902709"
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
      "6d",
      "90",
      "4f",
      "4fc24010c5bfcb78b425fd831a4838004125a9a0a59c0c214b196aa1edacbb5b0812bebbb3c528072fbb3b33bf37796f4fb0cbab35746195679f35aae34d86e6cd3e62d47561345f922a8de0001a913159ef67d3af1739f592649cf93420ef76b83af47a4ce8f4034b01dd136c722cd61abaef27a844892c5b2e55b391317394b6f3184dfb099725ad6d399947517f108de0ec5c89e4ee4f309e24a3a751fc9f647176604bab1837a8b04ad17a908ab6989ab18da745290b7435d52a450d0ddc0c3245b5148ac8e58e1b7aae7fefdd8561bbe3050f5e87c182526172aa989dcfd81b1832a288e9c0e9206040354f0eba69ce3db7c396df6e62ec1bc6babb1e07ad20fc1dfb76bcf8593b381ad4af8ad8a3466bcfbb581d92b56f389651353a900afee9e7dc5ceaf33761beb0c7c6010000",
    ],
    [
      "ETag",
      "uvSOzMpO0TTIg1oBo0+Cbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb64ad8e5428d05d4108168220d61a364c0c91897c27446ce8f4ee75fa6ef07e00a1948d6321fb9a75e00d28f262afe82a1cd68e915e97fdaea5eb8e6dd1e9badb7749c99b74ab55279350fe80511ac1512061e11252efe6c7039677a7851fe92423547a5f1cee5cba8e4dac543905a2259691456647f4d1b763e736b547cf93bd18e699bc46e743c8eb223f04fa74b62aa42e43986117b7d95c8d333bc447737f4bf2bd42d84079001f61d35cdcabde6bbe9bb9c1ddaf735f4fdaedcc9d774cd0d1539f01419bae94893f2da1562c650516807d0f5cb0b1e0cfecc6b0ed05f89f17520decd97718114c80df3f742c48ec18010000",
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
      "Sat, 14 Nov 2020 06:22:12 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-31-1605334902709",
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
      "0000000002ff85536b6fda3014fd2b91f7b54020bc82845604e98a04610ba1d5344d91eddc04b7214e63a71baaf8efbb714ad7aa52fb29b6ef39f79cfbc813b917794c268489f4a182f2f8e54e32724140d3145feff6def59ce7376a361aecfbc774d18b93bfb3e91411a266297a2832682959951cd464b76da7a5ac0a5a4ad9c2442da7dbea0eed81e3f45dbb37b25de429c89295c8ef91bdd7ba50934ee7acdd4ea54c33a085506d2e0f2fef9dc75ea728e51d70ad3a6f253ba8a23a1f8b7ecd24a75ac87cbadba2814a4119c1818a0c2dfc67c6ecf26deab6a087768ae047c181722eab5cd7b63005977922d2aa3459c9e489189baf0e64ebadbc7968719955873ccae9012eac986a1ae96301d655b0595b4bff6a13ac67e172e347dbf9b5b79eb5e79bd56eed6faddb6b2ff02c4d5906866b4dad4b73f3f182fa31282d72a31ed6cfb5f2738396efc75213505a41138c46f69076c7b6cb1236e2c9d819b0c406c6c66c34a00eb3b9db877ecc8022cf881a16cd65deeb42e2f65c1e390987a8cf076ec4dc18a2211b8f808d93de3071c9e982fc29858685508554a2e910b90d96a11785c1ce9fcf42cf9490d02ad38bc6585dc06b8f1a0b44d007359deaa890a854b77be9875e309b87cb1baf99f00a52ca8fdb079c7142330588a625364f43b99631368cf8b3b5b740b099d8f7735091c9af2752f7bc76f1aae52ff4100758dbd5e64bb661b0f4bf193b67c40dcd2a03796c0ea440cb7bac0d5d9f7e231297b4c9427eecbce027699e0248a0849c7f3e4d049bc0a7ffda79f1118bab8f324ae31d7787ab5a8497d0ec9030e59ed98e63db0e31e052bf8b75fbc373d7ea1c75463840ae9f2b6a161f0b6dc42af502c2208edf37dd3afd03f57b022278040000",
    ],
    [
      "ETag",
      "jhEHCcnVsA75h4ygD2dfxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1605334902709"
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
      "92dd6e82401085df657a0b092a6a25f102ff2aa9d256f1aa31668501b1c0d2dda58d31be7b67a9b54ddba4bd8199e19be59c0347784a8b081cd8a6c97385e27095a07ad0c50265952949b7921712c100542c2172680bdf8d7cbb7d1b7aa3956f25cd493c4dfa7d2264b8c39c81738438c52c92e03c1ea16039d25ac8b32a2f367567803a947ab80c169e7f437dce23ddfbabd9cc1dccc670322e8b11536c53f3ff585b9f0cd8f3ed0263145884a8b59482ef31549eb629595e66684a5e891025d470fd2011bc2a99e0dca489d96a988d8ed56eb5ec9ed5ec5a3d02331e3295f282d8d592f481e28a650bfe4a2ea14380a84b321cd7d7171aa7516d44979e1f74ec5adf5780a4c569869bbf41d2bb63f4193eb07304df3996f3aa50176a32bb737f3b8e32fd3c6ae406e31f845494d40509bcf97819b8f37bcdadcfde070785f25e700a52a2ceb061d9d7ed6ec77a8f75c875d4f41e47890a0d0819fd1dd3548113b34ce2e90d65da20057b020000",
    ],
    [
      "ETag",
      "C4rNAdN45KcIDUN0g2FfHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1605334902709",
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
      "fd",
      "6f",
      "9b",
      "30",
      "10",
      "fd5790f74babe583847c4b5597a6ac434b4946a055364d890d07734b30c5265354e57fdf014ddbac522b2119fbbd77f7ee7c7e24f73c09c888301e3de490ed3edd09466a04148df0347998cfaebe2f557bfbd977dc3bfde7c5d0e3e3b33364f04225e9268da12e459ef92047dea21165224f6926441d03d58d76bdd5d3bb86d119eaedbe3e449d84389cf2e41ed57f944ae5a8d93ce46e44424431d094cb862f36cfe7cd6dbb9966e20e7c259bc7299b984536df4f7a1e0b9f2a2e92336f81067209d90a3694c768e14519b02fc7a11b9c6e1a1192b7dc07eafb224f54610b43f822097994676554327a24a5cd573f64614ecd89ab4d669eed9eac03aa607daa51a9ad5619c83c56356d8d15853c86150fd61592de6b5f9dd9352298ff0f9520d7daed37d331b563b2656b9e6d9b0b573b393fd5ae9c9937d72e96471cf41880543c291dba94c550b87b6aa2f5f6ea0a015598b302577dbd475b037dc842d6f7c381d165a10e8c0d58bf4b0da6fbc30e7402061475aa885eaa682292eea00fed8ecefa7a408119418f75f4b058fc36a33d8ad0b0c5a0d321fb1af99b7105975ca642f2aa93e4d6b15c73e53a9e3d19bb66594648b15f9795b9a288d73e151689a477eada17281798a9b816cb764d673c71ad1bb39a842944d4df2d1e7016421a4b4036cde8061464d722c0a691f96c61b9d6cc1e4f51515eeffcc09064f4ebf145e0eed2b2cbaa5cc9d871c64bd4d02ca3bbff30f4d1c316ec5fa5bba1715e524a7eb9abe26f2b80b4b096975d9bec7feff1ab111cf92a3af9e199ce9254470e849041e27f7cef482e810f5feee11921171f12a6910af73865be2c92f81954d3c637a5dd27b561f40703529233f5061b0e5a87b616318a88b081443d55543da3b251",
      "0594cb6712823824b6655f21fa0fe249938bc6040000",
    ],
    [
      "ETag",
      "nqPOGKYt2v+cRTj0ZB9UiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1605334902709"
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
      "90",
      "41",
      "6f",
      "c2",
      "300c85ff8b776da5428109240e14551b53875807974d0885d6ed0a6ddd25298c21fefb9c304d1c77499ce7cfd67b39c3bea85318c1b6c83f5b94a7bb1cf58b2962546da9155f0dd50ac101d422673208bddef47b597cbd3d2dd2f059204e82e3713c6642251f5809189d212bb04c158cdecf508b0a796cb391762363fad41865365f860f61cc4245a911e6ab289a04510817e766acd9ff6b647d716047db1833945827685c34927698e89909a844d594e82a6a65820a2c6c1bb9a4b61192c865c5f5bb6e67e0f57dbf37f4baf7de90c19212a10baa995dbdb237d0a44519d391f3419701694b8e9ad9f3c072df663858c058bbed0dfe7a1dd35bff2e0c4e1ad54212bb53688c7957935332c63507d2b2450712c1bffc58e8ebfbf2036c8e9d89c2010000",
    ],
    [
      "ETag",
      "BE04CzTixZJPdEMaeeABww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb642d8e8248d25dd19620832528ad719309217c046b0ca840a777afd37783f703b810b26d5977a9e53778010337d1544c0335736d92adb1a82f42472919175eb06d9d7348991cd26cab3151271d47f4713eb81aa5fd2a91f233581fba7c1fc2fcee1524debca5d9c1c37694c4cd8d5b45a590494fc7e0c3ec87aa8e96774c0b4654533a371fd1d1a25cf8e6691023f654352c1fe4716d6cebcac38e2beabafb1db420a910dc409dccaf21fe9a1ff3b2e68b599a46d2334a6c65bee1247dcb145ccd58f7be1d1dd88f5eb37b2d546918044c80ec55a565cbaa67d6b2119a80ff39eb06259f7d57722d35f8fd03f4cfe44318010000",
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
      "Sat, 14 Nov 2020 06:22:14 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-33-1605334902709",
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
      "a2",
      "40",
      "14fd2b64f6b50a8a8a9898adb1744ba2b8456cd3dd6cc8305ee8b4c8506670631afffb5e86da6dd3a47d6266ee39f79cfbc13379e4c5964c48c2b3a71aaac3b707919033028a66f85acbc7db7d394fedecd762ebe681b4eeefd4f5748a08deb024dd953974a4a82b0672b25977b34ad425ad84e860a28e6d777a236b68db03d7ea3b968b3c0979bae0c523b2ef952ae5c4344fdadd4c882c075a72d96562f7fa6eeefb66598907604a9aef254d5491e6e7a2df73c1a8e2a2986ed668a09650c5b0a33c470bff99dbe4fc7dea2ea7bb6e86e03d6740191375a11a5b98828922e5595de9ac64f24cb4cd3707b2f616de3c3298c8eb5d1117740767c6962a1aab4309c665b85a1a7e70b90a97b3c85f05f17a7ee52d67ddf96ab159066be3f6ca0b3d43d12407cd35a6c6b9be057841fd2d48c50bad1e35cf8df24b83fc8f636908282da10dc68e35a2bdb1e52669e2b0746c0f93d482241927ce90da89c5dc010cb60950e46951cda285287a83113816b0988d2d2b1ef4c683d8654e3fee0fa107aee3306be492e319f95b7105175c9642f2b643e436f4232f8ec24d309f459e2e21a575ae2e5a634d016f3d2a2c10419fd4746ca25ca052d36e3f88bc70368ffc1baf9df00232ca0eeb279c714a730988a615364f41b5145b6c1809664bef02c17a623f4f414926bf9f49d3f3c6c59b96bfd2231c606357e92f5947a11ffcd0764e881b9ad71ab26f0fa444cbf7581bba3efe41242e699b855c6fbcf08eb44f21a45041c1be9e268275e0cb7fedb4f888c5d54719a9f08ebbc36423c22a687788eb724f6c7be0580ed1e04a7d888d87d6a96b4d8e2623eca0502f15b58b8f85b662b57c056110c71fe86e1dff01d95d9b1c78040000",
    ],
    [
      "ETag",
      "uskWvpCf3gZLd9lNs0hYtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1605334902709"
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
      "8d92414f83401085ffcb78a509951695a48756ab92b4d5164c0fc6345b18901618dc5d6c6ad3ffee2c6a356aa2179819be59de7bb0837556c6e0c1324b9f6a94dba314f5d414335475ae15df2a2a158205a845cae43a88eb95ea8e8317315f4e9db9bed2b4497b3d2654f48885006f07498679acc0bbdf41290ae4b588f2ba28174d6781de56661884337f72c57d41b1e92777a3517f301ac2de3a2cc6428b45c3ff63ed616fc18a96334c506219a1d152495a61a47d635389a2cab1a5a896112a68e0e6412aa9ae84246af1a4e538adb66b771da773661f9fd8670ce614099d51c9ec5dc0fa409316f98c36ec125c066453b2e1a4b93ef3388b1b23a6f427a1db69f47d05585a92e5b8f81b64bd8f823fc307f61ec1774e145497fa405d8e6efabf1dc7997e1e75d10f873f08a539a90312fae36110f6c7b7867b78f73ed86a54b79238488526c3b6dd39ed9eb8f65bace764a2e6f7785ad6684124f8efb8ce347889c815ee5f01254b71c77b020000",
    ],
    [
      "ETag",
      "kSdujs5MSzaWbQ3WtGtowg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f7a5957804420820551d6bb32e1b0d6d08adaa6902db71529710a7b6c3c42afefb6e92d2964d6a25a4609f73ee3df7e127b4e259844688f0e4b16072fbe94110d4404ce3046eedeb39f5fbb70fe68fadb9a1df63f34f47ac92931360f052a5f03a4f5953894252a646f3592b91a2c8b114a209819a56afd9e99bb665f58666d73187a0532c8d273c5b81fa5eeb5c8ddaed7dee56224492329c73d5a262fd72dfde74dbb9140f8c6ad53e4cd9862caafd7ed2d35450acb9c84ee63330502826176c8d790a165e9511f97c18bac5f1ba950079c329c3948a22d3a52d08414516f3a4905554347a4295cd377fd0cc9db867a171e9f947cb086bb63c36b032160bc95491ea86b1847a629eb2058f963592af8cafc1f41210c87e8f15534be3f69b1bb8c621d9f38db9efbbb3d0383a3d362e82e9fccaf87277c0018711539a6795bf10939495de9e5be8fd3fb8528035e4acc18563f67167600e494c1c1a0f2c9bc4262364401c1b5bc4a4c31eeb458461d0e9327aa5c299c8cc38729c38ee503cc49db8635b5de258300b33c6ac6b93ae43fa6460621bed1ae8b7e49a9d73950bc5eb3ea2dbc00bdd4518ccfdb371e85665c418fa755e9b2b8b78eb534391407aa7ae5d89720199caa1787ee806e3b3d0bb71eb3d98b004d3edec113621c6a962c0c612af9966f25244d03474359d79a137f5c7135054c3bdda33141afd7c7a1584dbbceab2aebe681c04e33bd06029f1f61f0c7cf47b68b77b93ee06a74545a9f8d5a98ebfa901d4815a5e4f5db4fbb5835f03c1c2d7d1d1f5dc0dee507d15b0984996d18fe70ee40af8f0ddee1f1170e119411aa5e10c5b465599844a566f1b5f57769fd596ddb34d5491a5fe0febf706fbb69631ca886ccd32fd5c51fd88aa469550a15e4800c292f89e7f01e85f95bdf8d5c4040000",
    ],
    [
      "ETag",
      "5QUcN6Wj0Ky0vcJf0z1okg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1605334902709"
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
      "6d",
      "90514fc2301485ffcbf5758b63030d243c802e4820440768a221a4747773b0adb5ed1442f8efde16a33e90346defe977db737a845d51a7d0834d917f34a80e57399a27bb495037a5d1b448516b040fd0b09cc8f924bfde779e5f27d968df7931acbb4f251ff4fb4468fe8e1583de11b202cb5443efed0835ab90dad66be56e24cc1ca455ee078b98aa4aa4b69a2da7d3c1701ac3c9fbd723777ffc78b688477172a96575f2602b360966a8b0e6682d4825b6c8cdd8a6d3ac9225fa5a348aa30607bb835c89463225844f8a1fb5fdd64dd089a27637086f832e81a5e0cc14a2267639276f6084616522be281c840428b7a59c999b3fad1c84811f84345c1827398f17a1d62fd4b2d0eae789e1c1a07e5482fc6ab45683b3ed3b61a3188a6854831e70469ffe5098737dfa06821e3a61d1010000",
    ],
    [
      "ETag",
      "SKg/x5VZKfGx5Wta9xdpcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc97282300000d07fc9591ccae6a4b7b08a5a95a06c1726d228318a91a52574faef75fafee0fd005255b4ebcafec16903de81241a9c57f3b5506d33aaac0e4bd7c87bc5d869fabe8e76cbfacd6c74fa9c76b595e4509d929116c67532f0cd5f124fe3cce05c5139bee68335d0bd996c8243a12ed129fa4a8b330f2e8ab31276035951c66e867c33af58eb0ec6f6136d4681cf276735ddb57ebdc8c6efe0087be17bc81bb6b68a88c37098655389160ebcef5787c64eb373a0b34782888edd45681d65ac16a190279e8e97f483f84f2f975838cafd56cb308ec00cd051b09676257b657513c219f89f97bd14f4d5b72969690b7eff00713d7bd718010000",
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
      "Sat, 14 Nov 2020 06:22:16 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-35-1605334902709",
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
      "2bc8fbda0408212f295aa3842e9912d20269354d1332c650b78029369daa2aff7dd7a6e95a556a3f61fb9e7bceb90f9ed13dab52344309cb1f5ada3c7dbbe3093a4354e21c5e6fcdc5d5de6ef9da1a64d694ac2ed765faf36a3e07045359029775417b82b70da1627608fb79c3db1a379cf780a8e7b83d7b64b98e339c5a83b135853c418b6ccbaa7bc52e652d66a679d2eee79ce705c535137dc2cbd777f37160d60dbfa3440af3bda4092ac2fc5cf47bc109968c57f34308065a419b9896981560e17f669a9cbfa7ee335cf673003f32423121bcada4b20514845719cbdb46b3a2d933d236df1c50e86dbd6564105eb4651557b8a467468a258ee5534d8d8b60bf3336fec53ed82da2cdde8fc3e5dadb2dfacbfdf6b0f343e366ed059e217152509d6bcc8d737df3e102fa291592555a3d52cf4af9a5419b8f635109202d68178cc7d608db136b9a64c9986413c74d328b26c92419bbd8492c321dd2619a500c795a5467e18a57ce34b507033c895ddba2f190b86e0c44699c8e46b693d9c9086763743c437f1b26e98a899a0bd67508dd049bc88ba3e0e02f1791a74bc8705bc855674c15f0d6a3840201f4494d4715651c9454bb377ee4058b65b4b9f6ba096f698ec953f80033ce702128a07103cd93b4d9f1141a86fcc5ce5b01584fecf2141468f6fb19a99e2b176f5afe9a1ec100955da9bf288c828dff43db3921ae71d16ac86377403558be85dac0f5f10f2061493b167475f0825fa87b0a68461b5a91afa709601df8f25f3b2d3e6061f5414648b8c3ee10a1444843bb1d62badc53b6331a8c8748831bf92136b4ac53d7148762a425ade44b45dde243a19d582b5e411084f1fbba5bc77f8f1ce64b78040000",
    ],
    [
      "ETag",
      "h/AQO1uoH02f09cDPHmdJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1605334902709"
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
      "df65bc2d49913f69c205280aa6a096a2898690a59d96e2b65b76b710427877672ba25113bd6967a6df6ccf39ed1e5e932c04071649bc2e50eece62d40fa6f050155c2bbae522530816a0663191fe86855bfff6693b683c4fd68a17abc77811773a44a860892903670f51823c54e0bcec216329d25a20789166f3b2b340ef72339cf8de707c437d2a42d38fa7aedbedb97d3858a7c59069362ff97faccd0e16acc4c2c3082566011a2db9142b0cf4d0d8542ccd3956942864800a4ab87c104b51e44c0a51a149a5d6a8549b76a356abb7edf396dd26908b80e94464c44e27a40fb4d08c7b624b2ea149802c4b321c95d70d8d93b03462cae1d86fd64b7d5f019216251ce77f83a477c9e8337c60c708be732c1545a64fd4b57bd7fded38caf4f3a8abaedfff41284d499d107f38ea4ffceee8de70b3a3f7de4ea3ba978282546832acdaf58b46ab69bfc77a294cd4f41e47cb022d0818fd1d8344831331aef0f006d62cb6ac7b020000",
    ],
    [
      "ETag",
      "TvadwTJWwH5ZSqslujVgbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85537f4fdb3010fd2a91f70f48fd91a6a1692b21d6416091dab44b53189aa6d6769c609ac6c1761815ea77df25a1408734a44aa9fddebb7b77be7b466b9e456888084f1e0a26b75fee05410dc4344ee076aba63a7053eb7266d1c9fc89d89ba7629d9c9e0283972a853779ca9a4a149232355ccc5b8914458ea5104d08d4ecf69a9d9e79d2edda03d372cc01e8144be331cfd6a0bed33a57c3767b9fbb950891a40ce75cb5a8d8bcdeb71fad762ec53da35ab50f53b6218b6aff3fe9592a28d65c64a78b39182814934bb6c13c050b6fca887c3d0cdde278d34a80fcc829c3948a22d3a52d08414516f3a4905554347c4695cd777fd0dc1dbbe7a13119fd3c5a4558b3d5b18195b15c4aa68a54378c15d413f3942d79b4aa917c6d5c06d3092090fd0e2ba656c6cd7737708d43b2e71b0bdf77e7a17174766c5c05d3c5ccf8767bc0018711539a6795bf10939495de5e5ae87d7cb8528035e4acc1a563f670a76f0e484c1c1af7bb27243619217de29ce02e31e9c066764418069d2ea3572a9c892c726cbb13c7716491c8896dcbb2fa0e661dc7ea11c78c4cd2a73ddbee5113ed1ae88fe49a5d70950bc5eb3ea29bc00bdd65182cfcf351e85665c418fa75519b2b8b78ef53439140fa4f5dbb12e50232958fe2f9a11b8cce43efdaade760cc124cb7f307988418a78a011b4bbc619ac98988a06968369d7ba137f5476350548f3bdb33141afe7a7e1384dbbceab2aebe681404a35bd06029f1f61f0c7cf46cb4dbbd4b778dd3a2a254fcea54c77fac01d4815ade4e16dafddec1af8160e0ebe8e8c7c20d6e517d15b0984996d1cfdf1dc815f0e9deee9708b8b04690466938c394515526a192d5d3c63795dd1775d731ed3eaac8527fc02cd3dcb7b58c5146641b96e9978aea25aa1a5542857a25010843e27bfe15a07f01a913b511c4040000",
    ],
    [
      "ETag",
      "ysOtREl2FP2cMSxb4mxukg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1605334902709"
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
      "6d90d14fc23010c6ff97f3d12de9866220e1017011224198f0a221a48c636e6cbbd1761a42f8dfbd16a33ef0d2de7dfd5dfb7d3dc13eabb6d0854d961e1a54c79b14cddc1631eaa6309ab79a2a8de0011a9932192c5eeac3ccbcc97c943fcf87b168e8b69ff67a4ce8e4034b09dd13ec322cb61abaef27a864893cb65e2b772363e6585be5b1bf88b82b696bbbe97232e90f26119cbd7f33f5fe8f1f4f17d153145f1b599d3dc86913e30e1556095a0bb5a21c1333b6e9b42ceb027d4d8d4a508383dd41aaa8a9a522f259f15b6d3f688bfb56ebae23c207d161b0a0449a8c2a6697afec0d0c1959c4f4c5e1206440b99273eedcfa6965110a5f847ed071619ce43c5e8342f10b05165afd3c31381ad43345ec57a3b52a2eb68764a3188e6854831e24923f7d94994b7ffe0636d49f9cd1010000",
    ],
    [
      "ETag",
      "1TOpqPtZajHjKQCR0uo+Ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4b7282300000d0bb642d8e8da2d29de0874f2d44403e9b4c080115091050814eef5ea7ef06ef07104a59dbe2ae2a18079f60205099d2a955cf541965d67dddd4bb3e198fe752dfa69b5475a42e4a17927f3b21582d2dfc48d4432dc373e857e46bc197481c022337bd602511364f52864cb945c8a7d12249aa2cce5bc72e2baaf1e7b82fee59d05f1a173e8be6885048d72153b6e1ccc86dc3268f61553257b224897b3285aed0e1c5baba82e26074b61f43e969e31e434fb1ab5b64c64ff33bd44e36f177ea41bc583823fea827b8e09bf11ee77a0fb9d88009607d7d15acc5d777762e2bca04fccf7137d4ecdd5719114c80df3feb2ba5d818010000",
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
      "Sat, 14 Nov 2020 06:22:17 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-37-1605334902709",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda24242421448ad62ca16ba4867484b47b6842c65ca85bc0149b745595ffbe8b69ba5695ba4fd8bee7dc73ee832772c78b984c49c4d3fb1aaac74fb722222704144df1352ffe5c997bbaacfa5fa423063fbf5fce870fe96c8608deb024cdcb0c3a52d4150339dd6dbb6925ea925642743051c7b23bfdb139b2aca1630e6cd3419e842cb9e0c51db26f942ae5b4d73b6a775321d20c68c9659789fce5bdb71ff4ca4adc0253b2f756b2872ab2f7b1e8e74c30aab82866bb2d1aa8255421e4946768e11f338e4edfa6ee729a775304ef3903ca98a80bd5d8c2144c14094feb4a6725d327a26dbe3a90ad7be12e028389acce8bb0a0399c18315534548f251867fe666dacbcb38dbf9e07ab8d176e17e7ee7ade5d6c2e766b6f6b5c9fbbbe6b281a65a0b9c6cc38d5370f2fa81f8354bcd0ea41f3dc283f3768f57e2c0d01a525b4c1d036c7b43f319d28896c964cac519498104593c81e512b32993384611c01459e16d52c5a88c21a24161bf621ecd3d130c4ee8ec389d3b7c2c1c061663c76c693784c0e27e4a1e20a965c9642f2b643e4da5f056e18f83b6f310f5c5d4242eb4c2d5b634d01af3d2a2c10411fd47468a25ca052d3ee9517b8fe7c11acaedc76c2179052f6b8bdc71927349380685a61f314546b1163c388375fbb4b04eb895d1e83924c7f3d91a6e78d8b572d7fa10738c0c6aed25fb20dfc95f755db3922ae68566bc8be3d90122ddf606de8faf01b91b8a46d16f26de7fa3f48fbe443021514ecffd344b00efcf75f3b2e3e6271f551462abce3ee30d988b00ada1de2badc23dbb26dcb261a5ca977b189631ebbd6e46832420e857aaea85d7c2cb415abe50b0883387e4f77ebf0174a125af078040000",
    ],
    [
      "ETag",
      "mnxV0vaDr1Bs9o2ZXPA4wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1605334902709"
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
      "5b4fc2401085ffcbf86849aadca4090fdc941a402ce50543c8d24e4b71db2dbb5b0d21fc77672ba251137d6967a6df6ccf39ed019e932c0407d649bc2b50ee2f62d48fa6f050155c2bbae522530816a06631917dde8c7bbbcbf57cd87217e87567f7f96218b7db44a860832903e70051823c54e03c1d206329d25a20789166abb2b340ef73339cf99e3bb9a33e15a1e927f3d1a8d31d0de0689d1743a6d9aae4ffb1b63c5ab0156b0f2394980568b4e4526c31d0aeb1a9589a73ac2851c800159470f92096a2c89914a242934ab559b96ad8f56ab5d6b2af9b768b402e02a61391113b9f913ed04233ee895772090d02645992e1a8bcbed038094b23a674277ea356eafb0a90b428e1b8fa1b24bd1b469fe1033b45f09d63a928327da66e470f9ddf8ea34c3f8fea77fcc10f42694aea8cf8ee7830f33be3a9e19627efddbd4635958282546832bcb26b37f566c37e8fb5274cd4f41e47cb022d0818fd1dc344831331aef0f8064c779dc37b020000",
    ],
    [
      "ETag",
      "Dl7gCq+bUH9IZeRBSJpZHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1605334902709",
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
      "fd",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "5790f74b2b25817c910f29eab294754829e90869154d5362e0a06e0153db748aaafcef3ba0691bb55b2524b0efbd7befce679ec83dcb4232263e8b1f0a10bb2f77dc270d028ac6b89b1aeea0b39e0edbe256eaa6d9d7edcea51b4f268860254bd2344fa02979210290e3d5b2150b5ee45470dec444cdeeb0d9368d7eb7db1b199d8131429e84249ab3ec1ed9b74ae572aceb07ed56cc799c00cd996c053c7dd9d71f3b7a2ef81d044aeac7923aaa48fdffa267090fa8623c9bac9668a0902036905296a0855766e87f3d4edd62346dc5087e6401d020e045a64a5b9822e059c4e2425459c9f8895436df7c90a535b7669e365bac1cef644bd392bc3dd5a8d4361b01b2485443db624d114b60c3c26d1dc9efb5efeee21223e8e0964a905bede687e55a9ab62d4113ed4c9b3ae7da31d576b495e3584b4f3b393bd52edcc5ea4afbb63ec2a0e710a46259e5d8a37e02a5dbe7a6daef8fb22450850eeae0666098b43d34467ee40f8268d8edfb9101be3ff4077ddaf58d60d4835ee803459e2ab3572c9af1cc044a4dbfdb864e7bd0a3a3b033eaf921f447ed7600832ed0218d42c3e801d937c81fc1149c339973c9eace921bd7f6ac8de7ae9cd9d4b3aa32228add3bafcd9545bcf5a9b04804fda7ae7d19651c95ca63b21dcf72a733cfbeb6eac998434c83ddf2016723a289044453415350202e79884d23578ba5edd90b673a474675dc57078424e35f4faf046f97575d56d5bbd4327b95fe01704d93a2423cd61fa4dd27fb7de3df29a6ae3b5da32c1582ee3e4eff61fe0a5fad6a8b2f7aa4543bac3a64ff7b8f4f83e02daab3939f2bcb5d937acb85080464c1e7a383e02af0e9cfe07033118b771365a4c2350e6a",
      "204b9140403db02cadec3eb3bbc3be39241558a877b141df3c9c4c99a3cc082964eab9a2fa66568d2a43857c016110e7ccb19d0b8cfe051b35c09819050000",
    ],
    [
      "ETag",
      "m0R72YA81rhs/665/I2MRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1605334902709"
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
      "02ff8d90516f82301485ffcbdd2b2428db9c263ee8621c0b318af3c91853cb851581cbdab2c518fefb6ed1873dee85de1ebed39ed32b9c559dc2044e2aff6a515f1e72b41b372468dad21a5e1aaa0d82076845ce6499665bb592e1fb6c589c42b58e96911e6da653268cfcc44ac0e40a99c2323530d95fa11615b2ed78d4fd898cd94be39468f5b1582e12162a4a9db0dac5f16c1e2fa0f3fed89af3bf2c87ce83824e0966a8b196e852349a0a943672058da89a127d43ad9668a087fb1fb9a6b6119ac867c50f5ffcc173f014868fe360380ac60c962485555433bbdb7236b0644599d00ff7830103ba1fb96ad67fbf7bd975b84f87ee7037cd2f16cd5a132730e82e0f6e415ec985b31cdaea163d90825ff24dd9dbbefb05dd4c937fa6010000",
    ],
    [
      "ETag",
      "ldfSiNc3JA2jb3iPIGIr7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcf4d7282301800d0bb642d0ef18fd01d5841c1920202a61b06e357442b898971749cdebd4edf0dde13359c83d6f5559ca0476fe8d18cdc211fc6d2f6a729b74130663c2fc814063c977d9c4ed8a53e67055d9c7462ddf390e0a8a23f671c24b3db0ac79b28694951edd7f936bb7f8efbfaa043dfeee3684458d32893ad332af8564c605aee67b71d01ed8631de5272a4e436ff8884e376ca31e270dc909960a396136375d1ae8295aa78f2c5145934de7c57683b37e75c9bc97bf86dd9f202feb5a59b65896d555aedeab2904ba0c60da2503b0173644153344070979d025d77afec78eaba03f43fafaf0f09afbe0f8d02857eff009da36a7b18010000",
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
      "Sat, 14 Nov 2020 06:22:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-39-1605334902709",
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
      "f6",
      "ab6d51e88326cdda206a9396ae40359bcd860cc305a752866586bac6f4bfef65b0aec6443f3133f79c7bce7df04c1e789992294978fea781fae9db5624e48480a239beee5df7a10eafb69c5f7ae06ea3e2efe323dccc6688e02d4bd25d55404f8aa66620a79bb09fd7a2a9682d440f13f52ca7773a328796653be6d9d8749027a1c896bc7c40f6bd52959c0e0647ed7e2e445e00adb8ec33b17b7d1feccf06552db6c0941cbc971ca08a1c7c2efabd108c2a2ecad92644038d843a861de5055af8cf4c93f3f7a9fb9ceefa3982f79c01654c34a56a6d610a26ca8ce74dadb392e933d136df1c48e82d3d373298289a5d1997740727464a158dd55305c665b05e190bff721dace6d162edc7a17bedade67d77bddcacfcd0b8bbf602cf50342940738d9971ae6f3e5e503f05a978a9d5a3f6b9557e69d0e2e3585a024a4be882f1d81cd1d389e924593266d9c41a269909493249c6436a2526736cb0d30428f2b4a866d152941373341a4e2c27b66962c7363869ecb02c8961689e39f6041c6b04e470421e6baee082cb4a48de7588dc058bc88ba360e3bbf3c8d32564b429d44567ac2de0ad47850522e8939a0e6d940b546adbbdf0232f98bbd1e2d6eb26bc849cb2a7f00fce38a3850444d31a9ba7a05e89141b46fcf9cabb40b09ed88f635092e9af67d2f6bc75f1a6e5aff40807d8da55fa4bc22858f857dace11714b8b4643f6dd815468f91e6b43d787df88c425edb2909b8d17fc24dd530019d450b2afa789601df8f25f3b2e3e6271f551462abce3ee30d98ab01aba1de2badc23db72ecb1fe5315add587d8d0718e5d6b73",
      "b4196107a57aa9a85b7c2cb4136be42b0883387e5f77ebf00f3f165cda78040000",
    ],
    [
      "ETag",
      "vCCkrSGjiiFEeCjTlxwweQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1605334902709"
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
      "ffcbe92b6e988ac9e607342a363453dcda9a73573820065cbaf7a239e77fef5c326bd5565fe09cc3732eeffbc2019ed322021b5669f252a1d85f24a81e74314559654ad2ade485443000154b887c6da5bbd1a39f0c7ba2ed3da86de1ce7ce9f4fb44c8708d3903fb00718a5924c17e3a40c172a4b59067555e2cebce00b52ff570164cbdf12df5398f743f9efbbe33f05d381ae7c58829b6acf97fac2d8e066cf86a8a310a2c42d45a4ac137182a4fdb942c2f336c485e891025d470fd2011bc2a99e0bc419346abd7685a66a7d56af7cccbaed92330e32153292f889dcf481f28ae5836e53b72091601a22ec9705c5fb7344ea3da882ebd7160b56b7d5f019216a7192eff0649ef9ad167f8c04e117ce758ceab429da91bffdef9ed38caf4f3a86b27707f105251526724f046ee2c704613cd2d4ede077b8572223805295167d834db579dae65bec73ae43a6a7a8fad448506848cfe8ebb54811db34ce2f10d309c52637b020000",
    ],
    [
      "ETag",
      "x3iwMXLgC9r4IQtvnESLsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1605334902709",
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
      "00000002ff85547f6f9b3010fd2ac8fba795f283000d1029eab294756829e90869174d536288a16e01536c524555befb0ed3b4cdbab51212d8f7debd77e7338fe88ee66b3440214dee2b526e3fddb210b5101138815dd3d66ee2fbef1ba75a4cfcc9cf589db2fce261380404ad591c67454ada9c556544f8603eeb2425ab0a5c32d686446d436df7faea89ae1bb6aa99aa0d3c4ed27842f33b60df0851f041b7bbd7ee248c2529c105e59d8865cffbdd8dd62d4a764b22c1bb87925d50e1ddf7454f53166141593e9ccfc040c549b92419a629587861aec3cf87a93b14679d04c01b1a111c45acca456d0b52442c8f695295322b1a3c2269f3d5079a3913671c28e3e9dc0b8e5638abc9ab63057365b92c09af52d1525650534c53b2a4eb551329ee94affef40222e0e00673c257caf537c7779497ad9532544e959177a61c26703d65ee79ce2c508e4e8f95737f3abf54be2c0e30e07c4db8a0b9f41de03025b5e7a7d6ba6f0fb4266001a24d7069aa7ddcb3543b8c43338a2dfd248c55128656689e603d5423db20c63a241878a2ce2e593867b9aae92ad14d784e34c3880c0d9b36f0742bd62dd58a6dd5d28869f5fa68d7420f2515e48cf28271daf4175dfb6ee02c037fee8d478123cb8831f4f0ac315717f1daa7802201f44e5dbb3a4a1928d587e57a81e38fc6817be534f33121098eb6b37b989018a79c001a9738238294176c0d4d4397d3991bb8536f3401863cf4cb3d82a3c1afc71742b02d6497857ca359e0bbdeb934b0475ce1b492904df38146057845bb5debff6946be3f5a80342e4bbcfd2b06e5f48d9afe0f098997abc6e65eb2876ab5fd4a43bbdf3b785a08ee53931dfd983bfe02355b3e894949f2e8e3f101b00c7cf85bd8df51c0c22d05192e600dc31af15a242a4933b43493769fd886aad92692e052bc89193d7b7f3a758e3a23c9482e9e2a6aeea86c541daaf8330882306b9e3ca8dd1fa14edf7d23050000",
    ],
    [
      "ETag",
      "792hfqKvEuYLRLXf0OonMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1605334902709"
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
      "90",
      "d1",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "ff97f3754b060309243c882e8a9245a73c1942ca76ccc1d6ab6d872e84ffdd6b3186475fdaeb77bfbb7c5f8fb0af640113d854e5678bbabb2ad1beb82243d3d6d6f0a5481a8400d08a9249f12d1f8b27a174b119e2e12e4e8a74382aa753264cfe818d80c911b615d68581c9fb11a46890c7d66bed3732663be59479fa96dc27190b0d154e48978bc5cd6c91c029b81853fb7f8dac4e01ec6893e11635ca1c9d0ba56987b99dbb804634aac6d050ab7334e061df2835b54a68a29095701085bdeb6818c78371d41f4563066bca85ad4832bb7c656f60c98a3aa32fce077d06b42f39ead69f0796639fe1e00167edb2d7ffebf55c6ff5bb70d65934cf9ad89d41672c3a9bbc2567dc7220ab5b0c2017fccb0f953dbf4f3ff2f868f6c2010000",
    ],
    [
      "ETag",
      "axnJdKaprdb5evD3EdN57g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0",
      "bb",
      "64",
      "2d0edf02dd05101414f929ca260398f02b90022ad2e9ddebf4dde0fd8034cff138a2a96f70073ec12be5d575be7628ab493e5688831ab1e129e4f3daf30a9d28a74351c9d9833f0bd342a4c87445e6315c723e94b75c5fb8444f5b52b057d716e09331f79b70b774f4b931ae87c999edc8311c699f34e1d1fa862a9fc1c05298802ea26ccd11bb18f16db46b64ed4a780ff512e583adf90a8d549d5cc2208974ee838b49d6f40b830c36f55a57f54fdb40f249bb40d32ccba3d209e9cd523acfd4e3afd646b537dcb373990819072158013cd36ac023aade594152d515f89fa3e945f1bbafe174c003f8fd038012423718010000",
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
      "Sat, 14 Nov 2020 06:22:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-41-1605334902709",
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
      "ff85536b6f9b3014fd2bc8fbb82690421e448ad62c656ba4846c84b49aa609d9ce85ba25986293adabf2df77314dd7aa52fb09dbf79c7bce7df0406e45b12563c24476574375ffe14632724240d30c5fefa2bd135ff1d9cde73fb76a73a1ff7e8cb7836c32418468588aeeca1c3a4ad6150735deacbb5925eb925652763051c7eb757a03a7efba9eef9c0e1d1f790af274218a5b645f6b5daab16d1fb5bb9994590eb414aacbe5eee9ddde9fda65256f806b65bf94b45145d96f8b7eca25a75ac862b259a3815a4195c08e8a1c2dfc676ed9d9cbd45d4177dd0cc17bc181722eeb4237b6300597452ab2ba3259c9f881189bcf0e641d2c82596c7199d7bb2229e80e4eac2dd534d1f725585fa2d5d29a875f56d1721acf5761b29e5d04cb6977b65a6c96e1dababa08a2c0d294e560b8d6c43a33b7102fa8bf05a54561d4e3e6b9517e6cd0fcf5581a024a2b6883c9d019d0dec8f159ca863c1db97d963ac0d8880dfbd4650ef73df0b60c28f28ca861d14216a314462e6583c4497d37f1187513eab15e42c119fafec873fd3e90c309f95d090de742955289b643e42a9ac74112479b70368d0353424aeb5c9fb7c69a029e7bd4582082dea8e9d0448544a5a6ddf3300ea2e92c9e5f06ed841790517ebfbec319a7345780685a61f334544bb9c5869170ba0cce116c26f6ed185464fcf381343d6f5c3c6bf9133dc6013676b5f992751ccdc3afc6ce117149f3da40f6ed819468f91a6b43d7875f88c4256db390ef9b20fa41daa70852a8a0e0ef4f13c126f0eebf765c7cc4e2eaa38cd278c7dde1aa11e115b43b244cb947b6d773062362c0957e153bed39c7ae35399a8cb083423f56d42e3e16da8ad5ea0984411c7f68ba75f8072dc39a0878040000",
    ],
    [
      "ETag",
      "qRv0TWcCjBxksUHtz+Td6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1605334902709"
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
      "5b",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ffcbf84a136aef247da0166b0dad964b7c304db385a1a5028bbb8ba669fadf9dc55a8d9ae80bcc0cdf2ce71c38c0535ac460c13add3c5728f6171b540b5d7828ab4c49ba95bc900806a0621b221f7a66df8dc6e8df3abe722761386ed9f3c57048848cb69833b00e90a498c512acc703142c475a8b7856e5c5aaee0c50fb520ffdc09bce27d4e73cd6fd3c745d7be43a7034ce8b31536c55f3ff585b1e0dd8f1b587090a2c22d45a4ac17718a9a9b629595e66d890bc12114aa8e1fac146f0aa6482f3064d1aed66a3d9353bad567b605ef6cc0181198f984a79416ce8933e505cb1cce3afe412ba0488ba24c3497d7da1711ad74674399d07dd76adef2b40d29234c3d5df20e9dd32fa0c1fd82982ef1ccb7955a83375edded9bf1d47997e1e35b603e707211525754682e9ccf1037b76afb9e5c9fb68af50de0b4e414ad41936cd76bfd3eb9aefb15e711d35bdc752a2420322467fc74daac04a5826f1f806713ece037b020000",
    ],
    [
      "ETag",
      "W708LcDeSJEStLGUUD3ANQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1605334902709",
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
      "0000000002ff85547f6f9b3010fd2ac8fba7959240f81192485197a5b4434a494748ab6a9a12430c750b9862d329adf2dd7798a669baad9590c0bef7eebd3b9f7946f7345fa3210a69f2509172f3e58e85a88588c009ecf62ce3e9e96cbe31afbfcf1cb72f42d5d6cec6a3112068cde2382b52d2e6ac2a23c2878b7927295955e092b136246a9b7abbdbd32cc330079a6e6b03e07192c6539adf03fb5688820f5575a7dd49184b52820bca3b11cb5ef7d5475d2d4a764722c1d543491554b8fab1e849ca222c28cb478b3918a838299724c334050b7be63afc7a98ba4371d64900fc482382a38855b9a86d418a88e5314daa526645c367246dbef9407367ea4c0265325b78c1d10a67357975ac60ae2c9725e1552a5aca0a6a8a694a9674bd6a22c5bd72e6cf2e20020e6e31277ca55c7f777c47d96fad949172a28cbd53e53081eb290bcf73e681727472ac9cfbb3c5a5f2ede60003ced7840b9a4bdf010e53527b7e69adfbf781d6042c40b4092e6dad87bb7d6d10c6a11dc57dc30a638d84613fb42d6c845a343089b90e09069ea8b34b16ce590e015dc39818b1ded76dbd6b754da3db5b772d5bef197618479add3722ab8bb62df4bba4829c525e304e9bfea26bdf0d9c65e02fbcc93870641931861e9e36e6ea22defa145024803ea86b5b472903a5fab05c2f70fcf12470af9c663ea624c1d166fe001312e3941340e312674490f282ada169e87236770377e68da7c090877eb9437034fcf9bc27049b427659c8379a07beeb9d4b033bc4154e2b09796c3e102ec02bda6e5bff4f33f6fdf10d48e3b2c49b773128a767d6f47f4848bc5c3536779275e7f72b1d6d7f6de16921b84f4d76f463e1f837a8d9f2494c4a92479f8f0f8065e0d3dfc2ee8e02166e29c870016b18d688d72251499aa1a599b4fbc236bb03c344125c8af7315db306bbd3a973d419494672f15251734765a3ea50c55f41108459f3e4416dff00834f24d123050000",
    ],
    [
      "ETag",
      "653zzFSy4WHOEI8tb/70FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1605334902709"
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
      "90",
      "4f",
      "4f",
      "c3",
      "300cc5bf8bb9b652f707d02aedb0a10a26551514266d4268ca52af744be32e49354ad5ef8e5b76e0c829f1f3cf2fcf69e154e80c42d817f9b946d3dce4e85efa4b8ab656cef25191b6081ea0133993137d3149b255e3acd0a36fa9be367a735ecce74c58f989a580b08543812ab310beb7a045893cb6db99c19131d754bdb24adea2c72865a1a4ac1792751c2f9671049df767ac3afd6be4a3f3e048fb140f68504bec5354868e28ddaa5fd08ab252e85baa8d440b033c34724375250c91cf8a3f1dfba3bbe0763299ce82f17d3063509114ae20cdecfa95b3812327544a17de0f02b8d6cbc6a17d36c4e616b36b871d1fa87fd7711e676af4400afea4a7c2fdd6dd0fcf9026f181010000",
    ],
    [
      "ETag",
      "3nwrNNYl2din1zclxXnXqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfc97282300000d07fc9591d1490a1b7a26cb22828187a61424894356c45a0d37fafd3f707ef07208c49dfc7032b480d3ec08c76f2066fac8653448f929a394e85f1f57614698decc4bbe602c49067c322f0be86161f4e0fbb267314b8011defc38d06f5cea0094c0c1f15f3c352112e43bce7d26fb6bec8661acb2c4eb7bd7b0eefb1de0a41ab727c3d85a73ca74f23bdf9aeaf84b6f04c19d30f2fb45cb651d4580ef4c6d2a28aa972ea62eaa3f619e865a2b7e17a91a2b570228954a083e189509bf75544248de9e4cbb977c56444677a36b2d1ad8e1e580132355947fa387b6779519657e07f1e0f7343de7d85a08e74e0f70feb318f9f18010000",
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
      "Sat, 14 Nov 2020 06:22:22 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-43-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fa34014fd2b64f6ab2db4a5f491346badb892b474a554b3d96cc830bde02830c80cba8de97fdfcb605d8d897e6266ee39f79cfbe099dcf36247a624e6e9430dd5fedb9d88c9090145537c7d381b0394f9dff4e9f2ca31f7f24cd637fda7d90c11bc61499a971974a4a82b0672badd74d34ad425ad84e860a28e3de8f41c6b3818d813ab3fb226c89390254b5edc23fb56a9524e4df3a8dd4d854833a025975d26f2d777f3b16f9695b803a6a4f95ed24415697e2efa3d138c2a2e8ad97683066a09550439e5195af8cfdcc5a7ef537739cdbb29821f3903ca98a80bd5d8c2144c14094feb4a6725d367a26dbe39908dbb7417a1c14456e74554d01c4e8c1d553452fb128c8b60bd323cff621dace6a1b7f6a3cde2d25dcdbb8bf572bbf237c6cda51bb886a271069a6bcc8c537df3f182fa3b908a175a3d6c9e1be59706791fc7d210505a421b8c4696437b636b1227f18825e3c1304e2c88e3713c1ad2416cb1890df62e068a3c2daa59b410c5a0079351622591356693c8b6593f8a7b7418d90367083406dbb629399c90a78a2b38e7b21492b71d22378117ba51186cfdc53c74750909ad3375de1a6b0a78eb51618108faa4a64313e502959a767b7ee806f345e85dbbed84979052b6df3ce08c139a494034adb0790aaa95d861c3883f5fb9e708d613fb790c4a32fdfd4c9a9e372edeb4fc951ee2001bbb4a7fc9260c3cff87b673445cd3acd690c7f6404ab47c8bb5a1ebc31f44e292b659c8d5d60d7e91f62980042a28d8d7d344b00e7cf9af1d171fb1b8fa282315de7177986c445805ed0e715dee916df7874e9f6870a53ec41ca777ec5a93a3c9083914eaa5a276f1b1d056ac96af200ce2f87dddadc33f3584bbe478040000",
    ],
    [
      "ETag",
      "qB8eepmxgwHQ6/ysBsuW2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1605334902709"
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
      "85",
      "ff",
      "cb",
      "78a511dbda2a8907aaa824b5b680174dd36c9701a90b8bbb8b4dd3f4bf3b8b5a8d9ae80566866f96f71e6ce1a9a852f06059e4cf0daacd418e66668b0875238ca65b2d2b8de0001a961319f351b710f787115f87b36e9c3481c27bffec8c08cd1fb164e06d212b50a41abc872d54ac445ae3523465b5683b07cca6b6c33889c2c915f5a54c6d3fb91b8ffdd138809db35f4c99618b96ffc7da7ce7c04a2e23cc5061c5d16aa9955c2137a1b5a959590bec68d9288e1a5ab87d902bd9d44c49d9a149a7dfeb1c0ddce35eaf7fea7687ee29814272660a59117b17933e30d23011c935b9840101aa2dc970d65e5f685ca4ad115b869364d06ff57d05485a56085cfc0d92de47469fe1037b8fe03bc74ad954664f5d8e6ffddf8ea34c3f8fbaf093e007a10d25b54792f0268813ff666ab9f9bbf7d1c6a09e2a49416ab4191eb9fd93e3e1c07d8bf55cdaa8e93d9e510d3ac019fd1dd785012f6342e3ee1517269a917b020000",
    ],
    [
      "ETag",
      "ScB2ilZ/RcwIQ2STuEreZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1605334902709",
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
      "ff85546b6f9b3014fd2bc8fbd24a7990401e448aba2ca12d5a4a5a42da45d394186352b780896d5a4555fefb2ed0f4b16eab8404f63de79e73afaf7942f72c0dd100056cb3cda9d87db9e301aa21aaf00676afba9defcef98f6cb9744e937c6bdf6d27f271341c0282152c89932ca675c97341a81c2ce68d8de0798605e775485437cd7aabab770cc3b4f4764fb78027691c4d597a0fec5ba5323968360fda8d0de79b98e28cc906e1c9cb7ef3a1ddcc04bfa344c9e67bc926a8c8e6ff454f624eb0623c1d2ee660209754ac6882590c165e9961f0f57dea06c3496303e00746282684e7a92a6c410ac2d3886d72516645832754da7cf381e6f6d41efbda78b670fda3354e0af2fa58c3525bad049579ac6ada1a6a8a584c572c5c5791ec5e3bf56617100107b75852b9d66ece6dcfd6b47588155d6b43ed441bb913ed3dd971b585ebda735f3b3a39d6cebcd9e252fbb67c8701d721958aa5a5671f07312dfc3eb7d5f9789805012bf05005573dbd8b5b7ddd0aa2a047a2bed109229d06413fe875b011e8c432a9190614034f15d94b164e79da6f458611740d42fb8641ba06ed772d423abda017866ddc324c3332a38e15a27d0d3d0aa6e884c98c4b56f516dd788e6faf7c6fe18e47be5d961161e8dfa4325714f1d6a7822201f49fbaf6459471502a0eca717ddb1b8d7de7daae66634a3798ece65b988e08c792021a0b9c5045c5050fa169e87236777c67e68ea6c0280ffcf2809068f0f3e995e0efb2b2cbaa7ca34951c0fe4dc26b1ce725e0a1fa406dbdadd7f576bdd541fb7deddf99469e375a823a1602effe8841455db3a0ff45a7c497abcae941b7850ab5171768ff6b0f4f0dc175aab2a3ab85ed2d51b5e5d1880a9a92cf2708c065e0d3bfc2e18a02162e29c848056b9857220b11226835b72c29ed3eb34da36de9a8040bf5216658fdc30115398a8c34a1a97aaea8baa265a38a502e5f40108471731df70ca2bf0137186ab222050000",
    ],
    [
      "ETag",
      "Q65KIHXpYYIFmuqEjqDswA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1605334902709"
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
      "90",
      "cd",
      "6e",
      "83",
      "30",
      "10",
      "84",
      "df",
      "657b2c48d0d0a244caa189501b09e58794f650a1c8818592004b6dd32a8a78f7ac490e3df682d7c337f68ccf702c9b0c26b02f8bef0ee5e9ae40bd314384aaabb4e2a5a5462158805a144c2e8af98772433f8836e12abe5ffbabede1bd984e9950e917d6022667c84bac320593cf3334a246b6ed76723891317d6a8db258be052f41c4424d99119671183ecfc2007aeb8fad3dfecb92f4161c681f618e129b144d8a56d20153bd300595a8db0a6d459d4c51c1000f3f0a495d2b2491cd8aed79b6fbe43c8e46ded879f09d318315a54297d4301b6f391b68d2a28ae897fb81cb801c46ae9a0fdf9f41361d6e53d22737d3eca451ad25710285e672e71a644e269ce6d05a7668412af8255f4b7dddf717ac14fd62a6010000",
    ],
    [
      "ETag",
      "IgCWs1L7ERQLOU+P7OSjVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "e0",
      "77",
      "e9b51a8a16d6dd8998725a9421c79b06f1d7a108044a809abdfbccbe37f85e282f0ae87b2e9a07d4e813cdb94a57c5ca6d1583f8e0f8fd5113b73a1c0277dbf5c9a024b5e9cb1b8bd3a580e67ae691b0233596d09c02d0b46da342cd3d9f1e98550c4ff6c4c4d3ab0fc71da796ef97fd0efb41ea508d3972b8db659bd30c27cdb94e8b6bde053f177bafdcad51357dc0d9295ac79c12bd2e0219978acd68186d9dcdc1b0942f8f3d76fcb6d36578c91c738e264562fd52019326d65bf29df334d3dc2336ac8a84d3bc89c9288435a20582a92d3be879f9ceae09a50bf43fe7626ee1dd3720efa043bf7f54ba56d718010000",
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
      "Sat, 14 Nov 2020 06:22:23 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-45-1605334902709",
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
      "00000002ff85535d6f9b3014fd2bc87b6d12d2401222456b94d0952a212d9076d33421db18ea96608a4dbaa8ca7fdfc5345dbb49ed13b6ef39f79cfbc1337ae045822688f0ecb166d5fecbbd20e80431853378fd9ed9fdcbe46e576dceaff0f56fef72211cf9349d0282372c89b765ce3a52d4156572b209bb5925ea125742742051c7b23bfda1690f0696639e8e4c077892e5e992170fc0be53aa94935eefa8ddcd84c872864b2ebb546c5fdf7bbbd35e59897b4695ecbd97ec818aec7d2cfa3517142b2e8ae9260403b56455ccb698e760e12f332167ef537739de763300ef386598525117aab10529a828529ed595ce8a26cf48db7c7340a1bb74e79141455e6f8bb8c05b76622458e158ed4b669c07eb95e1f9e7eb60358bbcb51f87f30b7735ebced7cbcdca0f8ddb0b37700d8549ce34d7981a67fae6c305f41326152fb47ad43c37ca2f0df2fe1f4b430069c9da603c3287b83f361d9292114dc7039ba42623644c46361e10933a16b312c230f0b4a866e14214644812e238763c1c98566c0da8153ba3e138b66dbb8f1d3ca2e391890e27e8a9e28a2db82c85e46d87d06de0456e1c051b7f3e8b5c5d428aeb5c2d5a634d016f3d2a2810401fd47468a25c8052d36ecf8fdc60368fbc1bb79df0926598eec34798718a73c9008d2b689e62d54a24d030e4cf56ee02c07a6257c7a044939fcfa8e979e3e24dcb5fe9110cb0b1abf4178551e0f9dfb49d23e206e7b586ecda032ac1f21dd406ae0fbf00094bda6641d71b37f881daa780a5ac6205fd7c9a00d6814fffb5e3e20316561f64a4823bec0e958d08ad58bb435c977b645b03c71e220daed4bf31cb7486c7ae35399a8c6ccb0af55251bbf850682b56cb57100461fcbeeed6e10f09639e0d78040000",
    ],
    [
      "ETag",
      "Xg51JdhvrUFPaQxIJDo9sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1605334902709"
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
      "5b6f82401085ffcbf41513142f95c4076c6d6be305119b268d312b0c880596ee2e35c6f8df3b4bad6dda26ed0bcc0cdf2ce71c38c073928760c33a895f4a14fb8b18d54c171eca3255926e05cf258201a8584ca473df7af41aeeb4f1e0ba598c56d7ea3466bb5e8f08196c3063601f204a300d25d84f07c85986b416f0b4ccf255d519a0f6851ece7d6f38b9a53ee3a1ee278bd1c8e98f067034ce8b21536c55f1ff585b1e0dd8f2b587110acc03d45a0ac1b718a8a1b6295956a45893bc14014aa8e0ea412c785930c1798d26b566ab566f9b2dcb6a76cd46c7ec1298f280a984e7c42ee6a40f14572cf5f88e5c429b0051956438aaaeaf344ec2ca882e8713bfddacf47d05485a94a4b8fa1b24bd1b469fe1033b45f09d63192f7375a66e4653e7b7e328d3cfa3ae1d7ff083908a923a23fe703c98fbced8d5dcf2e4bdbf57285dc12948893ac3bad9bc6c75dae67bac575c474defb19528d18080d1df719728b023964a3cbe01fd2eb1267b020000",
    ],
    [
      "ETag",
      "AJ5XR2PO2VPPmge39372Qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd4fdb3010fd5722ef974deb87d3a44da98458818c452a294b532698a6d6712fc590c4c576982ad4ff7d9784b2b12fa44849fddebb7b77beeb23b913c58a8c4822d6f725a8ed9b5b99901601c3d6787a7d1c1c7ba0bcfc6cab9debf4fde473c2efc78787c810954ab37c93415bcb5271d0a3f9acb356b2dc3025651b03b5dd41db1ed0bee3b807b4e7d103d469c8d28928ee507d63cc468fbadd7deece5aca75066c237487cbfcf9bcfbd0eb6e94bc056e74f765ca2e66d1ddff273dca246746c8e2703e4303a506b5809c890c2dfc54ae920f2f437704cb3b6b243f080e8c735916a6b28521b82c52b12e551d958c1e496df3970f32f327fe496c9d4ce761fc76c9f24abc7c67316d2d160a74999996b5c49a5291c142ac960db2b9b33e46d37344d0c10dd3a097d6974f7ee45bd6521b74b7b40ead236b1c9e5a2fd54168cdc3d09fc5d6dba377d659349d5f58c7572f38687b05da88a2361db32483caf0535f833f6fb3123083261a70e1d101b387f42049138fa743a79fa414926498787de624941fb8e0ae1260a83355f45ac50a5978dc1b02f5fa83810b09a4bd95cbfa3650bb9f3a097706766f08a933642bb26b91ef4a1838157a23b5689a4bbe4441ec2fe2681e9e8c63bf2e2365d8c0d3c65c55c4af3e0d1689a4ffd4b5ab5021315375534118fbd1f8240e2efd663826b0667c3bbbc7f14859a601d94cb11c0ca873b9c2a6918be92c888369389ea0a2bef18b3d4393d1d7c79f8278bba9bb6cea37898373bca3f1f945ed614fba645959b31e9a0fd2a33ddaa6bdb6dd8feddec87646b6dba1945e93ddaef5efe0e3281a5fa121a614dbfe86619103b792ff256bcdaf7f35e6f72e6c52657bf64476df76f8b408ae58139d7c9efbd115698e22484141c15f1f2a24d7c0abff14fbb5452e2e2ea6c11530024798eb2a0957d08cb2c86bbb4f6ad7f5a84b6ab2327f60c33edddf5915a38a083914e6a9a2666deb465550a99f4908e20486417886e80f242a2aac36050000",
    ],
    [
      "ETag",
      "ZBIB7er7mGys3Zf+LQbcqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1605334902709"
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
      "0002ff8d90414f83401085ffcb782c24d4621b487a6895680d691425696248b3a503d20283bb8b061bfe7b67690f1ebdb0b38fefedbeb7273816f51e7cd815f9578bb2bbc951bf9a2142d5965af1d250ad102c402d722669138f7e77f5cc2de2e70db9e83d8c3a5acce74ca8f4132b01fe09b202cbbd02ffe304b5a8906ddbad1c4e644c778d5156ebf7e0318858a8686f84751c868b6518406ffdb135c77f5992de8203ed22cc50629da249d1483a60aa57a6a0125553a2ada895292a18e0e1472ea96d8424b259b1dda93d9e3a779389eb39b733c763b0a454e8826a66e337ce069ab42823fae17e3066400e2357cd86eff7209b0ed729e993ab69d969542f9238814273b97309724f269ce6d05ab668412af8259f0a7dd9f7678fff462aa6010000",
    ],
    [
      "ETag",
      "oXU+zbn74iUJXo4e9D+yoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d07fc95a1d34484a773ce55984c636ba61025c0694620454d0e9bfd7e9f983f3443ccfa1efd3e17c8216bda389afd445bef085a4afe352e39189bf75b5a113c93cf92df838ee9432fa19aed123a051c6e9459f2763acadbe86623a9dda18f6a57ba6a4776e3c1f075779f823abd3ade54b15e877fc18494849640d1e4da9089cfb3191abc3466b0e8dbcc47668682ddb79d2f459b8a0573467cb4b522fb9bbdb6a9cb2607e8bad496d4916fa2e036cb81b02b608a5445c4da5e9f638adb0da1573d227bee160712136730a3e9a240266ddd10cc128ea0efab47e65f15a5567e87f9e0e9380575f07de41877eff005b87ef6e18010000",
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
      "Sat, 14 Nov 2020 06:22:25 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-47-1605334902709",
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
      "2bc87b6d129a900091a2354ae98a94900d48db699a903186ba054cb1c9d455f9efbb364dd7aa52fb84ed7bce3de77ef084ee599da1394a59f1d0d1f6f1cb1d4fd109a21217f05acb0baf8eaa1b53d8bbcb1b9fe5d25cff5d2e1680608a2570d594742078d7122ae6bb6858b4bc6b70cbf900120d2c7b703a33a79389e59a63db7481276899af597d0fec5b291b311f8d8edac382f3a2a4b861624878f5f23eda8f474dcbef289162f45672042a62f4b1e8d792132c19af17bb080c7482b609ad302bc1c27f66969ebd4d3d64b81a1600de33423121bcaba5b2052908af735674adce8ae64f48db7c754091b7f656b14178d9557552e38a9e18199638918f0d352ec2edc6f0838b6db859c6fe3648a2d5a5b7590e57dbf56e1344c6f5a5177a86c4694935d7581867fa16c005f4332a24abb57aac9e95f27383fcf76351049016b40f26b639c3a78ee9a6796a93dc994cd3dca469eaa4f6144f5293b816b5b29462e06951cdc235afc9cc2499eda64946664e62396e9eb8993b4ecc536b9c3ace6c92db041d4ed09f96497ace44c305eb3b84ae433ff69238dc05ab65ece91272dc95f2bc37a60a78ed51428100faa0a6838a320e4aaadd7e107be17215fb575e3fe1352d30798c1e60c6392e0505346ea17992b61b9e41c350b0dc78e700d613fb7e0c0a34fff58454cf958b572d7fa1c730406557ea2f8ae2d00fbe693b47c4152e3b0dd9f707d480e55ba80d5c1f7e031296b4cf827eecbcf027ea9f429ad396d6e4f3690258073efdd78e8b0f58587d901112eeb03b442811d2d27e87982ef7c8b6a693998534b895ef62963d3d764de5501969456bf95c51bff850682fd68917100461fc81eed6e11fe39b6497",
      "78040000",
    ],
    [
      "ETag",
      "ntFEnSmX0s7UHXIift0LzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1605334902709"
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
      "c2401085df65bcb424050a48132e8a2292f027940b620859da69296ebb75772b21847777b6221a35d19b7666facdf69cd31ee139c942706193c42f05cac3558cfad114335405d78a6eb9c8148205a8594ce4443bd54632e95fd71ad961e92ff97ec46a71a743840ab69832708f1025c84305eed311329622ad05821769b62e3b0bf42137c3b93f1b8cfbd4a72234fd78311c7add610f4ed66531649aad4bfe1f6bab93053bb199618412b3008d965c8a1d067a606c2a96e61c2b4a14324005255c3e88a528722685a8d0a4e2b42ad5a6dda8d79db65d6bd96d02b908984e4446ec624efa400bcdf84cecc925340990654986a3f2fa4ae3242c8d987230f69b4ea9ef2b40d2a284e3fa6f90f46e197d860fec1cc1778ea5a2c8f485ba1f4ebcdf8ea34c3f8fbaf3fcde0f42694aea82f883516fee7ba3a9e15667efdd834635958282546832acdace4da3d5b4df63bd15266a7a8fab658116048cfe8e8744831b31aef0f406e00bfed07b020000",
    ],
    [
      "ETag",
      "Ot415iOG+25nyYTYlwMa2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1605334902709",
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
      "7f4fa34010fd2a64ef1f8dfd410bb4b449e3f514ef482a554a35e672699765c15560915dbc34a6dffd86c5aa3def342181dd796fde9bd9599ed03dcb233446214b1e2a5a6ebedcf110b5109538815d79695d654e641f1923ffdc9d1f0d496016d3c90410ac66099c15296d0b5e95848af172d1494a5e15b8e4bc0d89daa6ddee0d74cb30cc91de1fea23e0099ac63396df03fb56ca428cbbdd9d7627e13c49292e98e8109ebdec771ffbdda2e4779448d1dd97ec828ae87e2c7a9c728225e3f964b9000395a0e58a6698a560e19519855ff7537718ce3a09801f19a198105ee5b2b6052908cf639654a5ca8ac64f48d97cf38116cecc3909b493f9d20b0ed638abc9eb430d0b6db52aa9a852d9d2d65053cc52ba62d1ba8914f7da993f3f870838b8c5828ab576fdc3f11d4ddbe5d026dab136f54eb57dbaeb694bcf73168176707ca87df7e7cb0beddbcd1e067c475448962bd7010e535a3b7e6eacfbfe386b0296e0a209ae86fa00f76c7d14c6e190c4b66185b14ec3d00e871636429d8c4c6a4621c5c0937576c5c239cf6d38096cf52d62f57a562f1ae93ae999e1001bc6d0b4a27e3ca423da0b2d1b6d5be877c9243d65a2e08235dd45d7be1b38abc05f7a27d3c05165c4183a78da98ab8b78eb53429100faa0ae6d1d651c94eaa372bdc0f1a727817be534d331a309269bc503cc478c5341018d4b9c5149cb731e41d3d0c57ce106eedc9bce80a18efc62871068fcf3e995106c0ad565a9dee86c369f06035339d841ae705a29cc63f3817a1d0b10dbd6ffd34c7d7f7a03d2b82cf1e6af18943350f47f2828bc5a35365f1451adb65bf5d1f6d7169e1682dbd46447974bc7bf41cd964f635ad29c7c3e3e0056814f7f0abb1b0a58b8a3202324ac615889a84548499ba16599b2fbcc3607ba6d20052ee5bb58dfd077a753e7a833d28ce6f2b9a2e686aa46d5a14abc802008b3e6b9de7788fe0108fccc8021050000",
    ],
    [
      "ETag",
      "tQ5VmEd8+39RMIO+7cT4pA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1605334902709"
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
      "50",
      "4d",
      "6b",
      "c2",
      "40",
      "10",
      "fd",
      "2fd3a309247eb5063c6809ad10a44deba54564dd8c6934c9c4dd4d2588ffbdb36b291e7bd99d7d1fc37b7b8643516710c1b6c88f2daaee2e47f36a8714755b1acd5743b546f0008dc85999cec6bd4098aaeb4e61ef9825a30f99a8d974ca0a2dbfb012109d6157609969883ecf508b0ad9b6d928b79165a66b2cb258bec74f71ca4045990596ab2499cd93182ede8dad39fccbb2be78b0a76d8a3b54584bb4291a457b9466610b6a513525fa9a5a255183133b2257d4364211f98cf8c3073f1c07a3c1603809faf7c184852549610aaa59bb7ae36c60c88832a513f7833e0b941bb9eace9ddf0eb61dec14ba68b75cf8c7f52db7fe5d38ef0cea17459c4ea30d165c433e920d6eb890512d7a2005fff27361aeefcb0f3244014ac2010000",
    ],
    [
      "ETag",
      "RA6+0atmyyw1+qdL5ZcLrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfd15682300000d07fd9b379063885dec08ea914a0026dbe70c69c0803da1811d8e9dff374ffe0fe00ca18d73aeb3f056fc13398a8e9ccd9dc97d04307f64df532e7ea0cc330d927eb54a19e14b232706598501d3c0bf77035a073cb3dbf6846b48d94aa05629665ef335147c672cca7fc5ab785682e2e2b21fac2fad20d46da62ff86ee8297f1fb9906d9abb1dd58d6a4a33428385e87de2124ab0fc7debd0cf7e478833e359b406d4ec790e950484d6823e3cd2210b133f4a4ca85745374541939ed770b52c64fd7d15cb6fe9b8d2f77033776eae427e68219e0a32c3baeb3f291b590e3ccc0ff3ceb27c91f7d8fd38e77e0f70f8bcd170118010000",
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
      "Sat, 14 Nov 2020 06:22:26 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-49-1605334902709",
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
      "6f9b3014fd2bc8fbda0692900791a2354ac81a2d211b216da76942c6b950b704536cda5555fefbae4dd3b59bd47e01ec7bce3de73e7822b7bcd891114978765743f5f8e94624e48480a219de2e27bd99e75fd5193bff6df3f9c5767e35f9fa301e23826b96a4fb32875329ea8a811c6d37adac1275492b214e31d1a9eb9db6fb4eafdb753da733703ce449c8d3252f6e917dad542947b67dd46e65426439d092cb1613fb977bfbbe639795b801a6a4fd56d2461569bf2ffa39178c2a2e8af17683066a09550c7bca73b4f097b94bcedea66e71ba6f6508bee70c2863a22e94b685299828529ed595c94a464fc4d87cf54136fed29f46161379bd2fe282eee1c4da514563f55882350fd72b6b11ccd7e16a122dd641bc999efbab496bba5e6e57c1c6ba3cf743df5234c9c170adb175664e011e507f0752f1c2a847fa5a2b3f3768f1ff583401a52534c178e0f4697be878499a0c583aecf692d481241926831eed260ef35c70770950e41951c3a28528da2e63b4dfe9c42ed0347687d08b3d473ffa8cb96cd0edb6fb400e27e4a1e20a665c9642f2a643e4325c447e1c85db603a897c53424aeb5ccd1a63ba80d71e151688a0776a3ae82817a8a4dbbd08223f9c4ca3c585df4c780919658f9b3b9c714a730988a615364f41b5123b6c1809262b7f866033b16fc7a024a39f4f44f75cbb78d5f2177a8403d4769579934d142e822fc6ce117141f3da40ee9b0f52a2e56bac0d5d1f7e211297b4c942be6ffdf00769ae4248a182827d3c4d049bc087ffda71f1118bab8f3252e1197787492dc22a6876889b728f6cb7ef753bc4802bf56f6ce00cbc63d7740e9d11f650a8e78a9ac5c7421bb15abe803088e30f4cb70e7f00acb7669278040000",
    ],
    [
      "ETag",
      "LA5D9EXugcHx/iFVUFXAKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1605334902709"
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
      "00000002ff8d92dd4ec2401085df65bca424050a48132e8a829200f253121363c8d24e4b71db2dbb5b9510deddd98a68d4446fda99e937db734e7b80a7240bc1857512ef0a94fb8b18f5cc14735405d78a6eb9c8148205a8594c6445dd3b3caf55e43e9e4c07af6cb6c37aec75bb44a860832903f70051823c54e03e1c206329d25a20789166abb2b340ef73335cf8f3e1e486fa5484a69f2c4723af37eac3d13a2f864cb355c9ff63edf168c156ace718a1c42c40a32597628b811e1a9b8aa539c7aa12850c504109970f62298a9c4921aa34a93a9d6aad65371b0da763d7db7687402e02a6139111bb5c903ed042333e172fe4125a04c8b224c351797da6711296464c399cf82da7d4f715206951c271f537487a378c3ec307768ae03bc7525164fa4c0d4677de6fc751a69f475d7b7eff07a134257546fce1b8bff0bdf1d4708f27efbdbd4635958282546832acd9ce65b3ddb2df63bd12266a7a8fab658116048cfe8edb44831b31aef0f8063249acaa7b020000",
    ],
    [
      "ETag",
      "+sX4lp1+rygNPFxaQqe2gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f6f9b3010fd2accfba795f283a4102052d4a529eb98529211d22a9aa6c480a15e0153db748baa7cf71dd0b48ddab51212d8f7debd77e7330fe896e6111aa280267725e1dbcfbf59805a88489cc0ee85fcbba2373cea5faa24fb3e5f9c0571ee8e472340d08a257056a4a42d58c9432286cb4527e1ac2c3067ac0d89dabadaee0d54fde444b3d4bea15ac013248da734bf05f68d94851876bb7bed4ec25892125c50d10959f6b4dfbdef770bce7e93508aeea164175444f77dd1d394855852968f960b30500ac2d724c334050bcfcc28f87298ba4371d649007c4f4382c39095b9ac6c418a90e5314d4a5e6745c30754db7cf18116f6d49ef8ca64b674fda30dce2af2e658c14259af3911652a5bca066a8a694ad634da3491e256f9eacd2e21020e6eb02062a35c7fb33d5b513615e8d3483955c6eeb972c8755c65e9baf6c2578e4e8f950b6fb69c2b67ab030c988e889034af2dfb38484965f7b1abceebb3ac0858828526b836d401ee99aa15c48111c6e6891ec42a09023330747c12a8a1a5112d0a08069eacb2d72c9cb3dc8c4ca36f445837624b87131968a666f50ca367f62d43337a16ee5944b722b46ba13f9c4a724e45c1046d5a8bae3dc7b7d7beb7742763dfaecb8831b4efbc315715f1d2a7842201f44e5dbb2a4a192855e7e4b8beed8d27be736537a33125090eb78b3b188e18a782001a739c1149f8258ba069683e5b38be3373c75360d4e73ddf23041afe7c7826f8dba2eeb2acdf95d640abf5f7802b9c9635e2bef9403d1ded76adffa7187bde7805b29873bc7d3bfd9bf96b7cbd6a2c3ee9a14a6dbfeaa3ddaf1d3c2d04d7a8c98e7e2c6d6f859a2d8fc484933cfc7874005c073efc1becaf2660e172828c90b086410d45251272d20c2ccd6abb8f6ccd30fa035483b97c153335737f32558e2a23c9482e1f2b6aae66dda82a548a27100461ce5cc7bd80e83f13f30d9c1a050000",
    ],
    [
      "ETag",
      "GtxYihrd2M0emJPSBbfnNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1605334902709"
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
      "02ff8d90416fc2300c85ff8b775c2b155841207118a81a48058d6e3d4d0885d67485b60e49ca5421fefb9cb0c30e3bec9238cf9fadf7728553d9e430817d599c5b54dd438166638b04755b19cd97a44623788046144caefae7f94a56835874f962334a653a7cac37d329133afbc45ac0e40a8712ab5cc3e4e30a8da891c7763be53632663a6995e5fa3d7a8912166acaadb04ee3f879164770f37e8dc9d3bf46b6370f8eb44ff0800a9b0cad0ba9e8889959da805ad4b2425f53ab32d4e060d72814b55228229f153f0cfcde30080783a771d01f0563062bca8429a961367d636f60c8882aa12fce077d06942b39eac19d17964397e1e2006bedef5ecff6b63f0b679d41fdaa88dd69b4c682bbc93959e3860319d5a20799e05f5e94e6febe7d0367169470c2010000",
    ],
    [
      "ETag",
      "M2qCMpl3LaydHQ7UpU6+mQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b7282300000d0bb642d8e0a887407081590dfa0f2d93029a40a18132042b0d3bbd7e9bbc1fb01b02cd130148cb4e8013ec00c37eab25cba74a5cb11cabcd12a1e73637929fe369d0d5da7fcd6fb4560d766feec68ac65dc9ae0941ec2d01084aa9bd7ce8027c56a2dd8335bdec9476890a8e4d7ada54fce89ca02755d9c3cf95d527c29eab3d7ed2ebf18e5abd64c72d71b2fc199712167e21cdbe8d06daf99e912ad4c9dd7ce21e3d33f0f013ede70fca97709fd0a15c980fbd37866b89a846ac346a1a8c9b5d9136d35744dd6067edc88a4d5aaf072f034b00088d3ba474351bfb3a2acaa0bf03f2fd84cd1bbaf23d8a31efcfe011491ec1f18010000",
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
      "Sat, 14 Nov 2020 06:22:28 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-51-1605334902709",
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
      "9b3014fd2bc8fbda24e4d540a4688d12ba464a484748b38726649b0b714730c5a65357e5bfef629aae55a5f613b6ef39f79cfbe091fc16794cc68489f4ae82f2e1d3ad64e48c80a629befe052d66bb7d72bd5fa7db75f5ed079b8bdd74324184a8598a1e8a0c5a4a56250735de6eda6929ab829652b630516bd86d75cfed61bf3f70eddec87691a7204b9622ff8decbdd6851a773a27ed762a659a012d846a7379787eefdcf73a45296f816bd5792dd94115d5795ff4732639d542e693ed060d540aca080e546468e13f336617af53b7053db45304df0b0e947359e5bab68529b8cc139156a5c94ac68fc4d87c71201b6fe9cd428bcbac3ae4514e0f7066c554d3483f14605d06eb95b5f02fd7c16a1a2ed67eb4995d79ab697bb65e6e57fec6da5d79816769ca32305c6b625d989b8f17d48f4169911bf5b07eae959f1ab4783b969a80d20a9a6034b2cf69d7b15d96b0114f9cfe90253630e6b0d190f699cddd010c6206147946d4b0682e73b7e7b8c873223776593448ec41c45cd68bba2e9efb2c71e2fe39399e913fa5d03017aa904a341d22bb60117a51186cfdd934f44c0909ad323d6f8cd505bcf4a8b14004bd53d3b18e0a894a75bb177ee805d359b8b8f19a092f21a5fc617387334e68a600d1b4c4e669285732c686117fbaf2e6083613bb3e051519ff7c2475cf6b172f5afe4c0f7180b55d6dbe6413060bff8bb17342dcd0ac3290fbe6400ab4bcc7dad0f5f1172271499b2ce4ebd60bbe93e62980044ac8f9c7d344b0097cf8af9d161fb1b8fa28a334de7177b8aa457809cd0e0953ee893d7006f6881870a9dfc486a3eea96b758e3a231c20d74f15358b8f853662957a066110c7ef9b6e1dff01155747f978040000",
    ],
    [
      "ETag",
      "zetiCWhfPhOgUOuXZbDiWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1605334902709"
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
      "594cf05f49bc40abd646ad225e348d312b0c8805167797b6c6f8ee9da5d6366d93f60666866f96730e1ce1294a7db0601385fb1cc5e12a4435d78583328f95a45bc6538960002a1612e9b69a835ef735bd7ba80ccbfbc9b6bdbbaeb279a74384f4b69830b08e104418fb12acc723a42c415af3789c27e9bae80c50874c0f17ae339a0ea94fb8affbe9723cb6bbe33e9c8ccba2cf145b17fc3fd6562703767ce3608002530fb5964cf01d7a6aa46d4a9664319624cf8587120ab878100a9e674c705ea249a95e2e951b66bd5aadb5cd4ad36c1318738fa988a7c42e17a40f14572c76f80bb9840601a228c970505c9f691cf985115d8ea66ea356e8fb0a90b4208a71fd37487ab78c3ec307768ee03bc7129ea7ea420dc6f7f66fc751a69f47ddd86eff072115257541dcd1a4bf70edc94c73abb3f7ee41a19c094e414ad41996cd5aabde6c98efb1f6b88e9ade632991a3011ea3bfe3365260052c96787a034a24eeca7b020000",
    ],
    [
      "ETag",
      "T87FCBxnJY2G1qMh9j+3aQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8554fd4fdb3010fd5732ef17d04a9b7e37952a1620834e25853405a1696a1de7120c691c62a71343fddf7771281f6303295262df7bf7ded9777920b73c0dc990043cbe2b20bfff7c23025223a0688cbb67b13dffb2760f3a05b74fbe9f757f1fc577fdf3d10811bc6449baca12d893a2c819c8e17c568f7351643417620f13ed755b7bcd9ed96db73b96d9ea9b16f22424d184a7b7c8be562a93c34663ab5d8f858813a019977526564ffb8d75ab91e5e20698928dd7920d54918df745f713c1a8e2221dcd6768a090902f60457982169e9961f0f575ea3aa7ab7a8ce0356740191345aa4a5b98828934e27191ebac64f840b4cd171f64e64c9c43df389cce5d7f6749572579b96b50692c1639c8225135638935453c81050f975524bb35be79d3538ca0836b2a412e8dcb13c7738ce7ada5f16964ec1bb67b64bcce30768db9eb3a33dfd8d9df358ebde9fccc38b87a8541eb2148c5536ddca74102a5e9c7b31dbfbdd1924015aa56c145dfecd1e6c0b48228e8b368d0ee069109413008fa5dda0e4c6675a013064091a7caec9a45539106411852ab1d5883d0ea32b33d88ba61d80bdb21857e48c316b41804ccb2c8a6467ee55cc111979990bc3a6072e98d7d67e17b73f7d0f61d5d4644f1108f2a7365112f7d2a2c1241efd4b529a35ca052795b63d7773cfbd01f5f3855834c20a6ec7e76872d12d14402a2694e57a0203f15219493319d8dfdf1d4b527c8d0b77eb6454832fcf1f04cf0ef337dca4abfc9ccf7c6eeb136b0455cd0a4d09075f541ec0cbd92cda6f6ff34b6e7d957284df39cdeff15c3727a9d92fe0f098dd7abcae656b2494ab5edaa45363f37f8d4080e54959d9ccf1def8a545b1e449043ca3e6e1f04ebc087ff85ed902216c71465a4c235362b93a508cba16a5abed2761fd91dabd5358906e7ea4dacd36c6d6fa7cc51668415a4eab1a26a48f54195a1423e813088bde6ea8bdafc01217fe1e324050000",
    ],
    [
      "ETag",
      "PgAU+vNB4uiAHJP5zDgq7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1605334902709"
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
      "50",
      "4d",
      "6f",
      "82",
      "40",
      "10",
      "fd",
      "2f",
      "d32b24885aab89076c8c35a1a6a2a687c69815068a024377971a6afcefceae4de3b197ddd9f731796fcf70ccab0446b0cfb3af0665fb90a15e9a2142d5145af15553a5101c402d3256e6c3defa35da9c82f7e54feab58364f6b40a4ee3312b54fc89a580d119d21c8b44c1e8e30c9528916dbb9db41b59a6dbda20f3c57a3a9b460c94941860b109c360124ee1e2dcd9eae3bf2cdb8b0307da4798a2c42a4693a29674c058cf4d4125caba40575123635460c596c82435b590442e236edf773b8f5ebfdbed0d3d7fe00d5958502c744e156b372bce069ab428223a713ff05920edc855537b7e33dcb31dccd4b1d1ee39ff8ff30db7fd5d386935aa37499c4ea109e6dd423e9309aeb990960d3a100bfee5975cdfde972bdb899111c2010000",
    ],
    [
      "ETag",
      "i94TMRUwAWQzf0y7dG8SAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0",
      "bb64ad8e02a1d21d52442148f9542b9b4cc02808c448f8653abd7b9dbe1bbc1f40f29c0a81bb47451978079228c6225f787cb981e1c57ca885ef793591dbb5fd74d3c7d3293251d58861d3af944acd4ed25817cbdb67d4ab477b6e7d874e378ad3e87b07cdd2d807af2c4464939ad71cadb2b088d272a04ea028bd3df5b70bc65323acbc6e796e8d83b34ef661d7c872578ffc36ec8aa6236e9cf96eac9bf4fc15081d21b8876da07b099beebd35207d4e93303ec4c97ee512b665929bf00edfb46b54f695770e140dbbc71ab2da59ee500866804ebc6ca9c0e52bab42c39881ff39ee24a7affe869296b6e0f70f89a674d918010000",
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
      "Sat, 14 Nov 2020 06:22:29 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-53-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f795b681367d49d5a84ad8aab5e94852109aa6c8766e82218d43ec8018e2bfefdaa11508093ec5f63de79e731f792677a24cc9943091df37503f7dbb958c1c11d034c7d71ce699dfdcfdbabae0037abfbafef7e845e17c364384302c457755011d259b9a839a6ea36e5ecba6a2b5941d4cd4f1fa9de3a1ebf5fb83897b327227c85350642b51de21fb46eb4a4d7bbdbd763797322f80564275b9dc1dde7b0f27bdaa96b7c0b5eabd97eca18aea7d2efabd909c6a21cbd93642038d823a811d158529f0c04cd9e9fbd45d4177dd1cc10f8203e55c36a536b63005976526f2a6b659c9f499589b6f0e24f257fe2276b82c9a5d99947407474e4a354df45305ce79b8593bcbe07c13aee7f1721324d1e2a7bf9e77179bd5761d44ced54f3ff41d4d590196ebcc9c537b0bf082fa29282d4aab1e9b67a3fcdaa0e5c7b118024a2b6883c9c81dd2e3b13b61191bf16cdcf758e602636336f2689fb97c328041ca8022cf8a5a162d65396294b1c1709c4cfac75e32187b3c1953972774c858ea8d524ed313f272441e6ba1e14ca84a2ad176885c85cbd84fe2701b2ce6b16f4bc86853e8b3d69829e0ad478d0522e8939a5e4c54485432ed5e06b11fce17f1f2d26f27bc829cf2a7e81e679cd14201a2698dcdd350af658a0d23c17ced9f21d84eecf73ea8c8f4cf33313d372edeb4fc408f7180c6aeb65f12c5e132f861edec1197b4682ce4a13d900a2ddf606de8fae52f227149db2ce462eb87d7a47d0a21831a4afef534116c035ffe6bfbc5472cae3eca288d77dc1dae8c08afa1dd2161cbddb30793f1d0fea99ad6fa436c321cedbb6672988cb08352bf56d42e3e16da8a35ea00c2208e3fb0dd7af90f1ce759c278040000",
    ],
    [
      "ETag",
      "geAfEukKWQc4aqLYzw5SRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1605334902709"
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
      "4f825014c6bfcbe965b8512a269b2fb0b4d8d0fc836bd59cbbc20131e0e2bd97ca39bf7be79259abb67a03e71c7ee7f23c0fece029c943b06199c49b12c5f6244635d6c50465992a49b782e712c100542c26b21fb7a2fae61585db3d95c3fb6c193f88bb71a743840c569831b0771025988612ecc71de42c435a0b785a66f9a2ea0c50db420fa7fec41d5e539ff150f7c399e7395daf077be3b81832c51615ff8fb5f9de80355f4e30428179805a4b21f81a03e56a9b9265458a35c94b11a0840aae1ec4829705139cd768526bd66b6796d9acd71b6df3bc65b6094c79c054c273626753d2078a2b964ef80bb9048b0051956438aaaecf344ec2ca882edda16f352a7d5f01921625292efe0649ef8ad167f8c00e117ce758c6cb5c1da9be77ebfc761c65fa79d495e3f77e1052515247c47707bda9ef0c469a9b1fbc77b70ae548700a52a2cef0cc6c5c345b96f91eeb25d751d37b6c254a342060f477dc240aec88a512f76f38956ae37b020000",
    ],
    [
      "ETag",
      "Fg7f3qxerIB+sNYmbgZrWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1605334902709",
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
      "7b",
      "6f",
      "da",
      "3010ff2a99f74f2bf108af109050c768d645a2a10da155374de0844b7009711a3b5d51c577dfc5296d59b7564222f1fd5e77b6f348d62c59923ef159749743b6fd7ccb7d5221206984ab0f77dee58fde5a984238b465af205c3dac2f070344b08225e8268da12a789e0520fab3692dca789ed28cf32a0a553bed6ac3d03bad56bba737bb7a0f7902e270cc9235b25752a6a25fafefbd6b11e7510c3465a216f0cdf37afdbe594f337e0b8114f543cb3aba88fafba627310fa8643c19cca618201790cd6143598c115e984bffcba1748dd14d2d42f03d0b800601cf1359c442898027218bf24ca992fe2351315f3d90a935b6469e369acc1cef684137057971ac51a1cde719883c96156d813d852c86395b2eca4abad6beb99373ac608215152016daf577cbb5b497a585f669a09d6843e7543b54b01d6de638d6d4d38e4e8eb5337732bbd0bede1c6030fa128464890aee513f8622f4d36cedb73b5a10a844d7b238efea066d987acf0ffd6e109aad8e1feae0fba6dfedd096af07bd36b4973e50e4c9425db168c2931640bbdb36a96f86dda68e024b43ef5154330ddf348da66f36289881417615f23b63124e9948b960e580c9b56b7bd6dc7367ce68e859aa8d90e2104fcb704513af734a6c1241eff4b52baa8ca353b15bb6e359ee70e4d957567940c610d1603bbdc32312d25800a269463720213be74b1c1ab9984c6dcf9e38c33132d4ae5fec1182f47f3ebe10bc6daaa62cd53f997aaeed9ca9007bc4158d7305b92f1f084d312bd9ed2aff9719baeef006ad6996d1ed5f356cc76817f47f5828bc7a2b63ee2d1ba470dbbf35c9eed70e7f158217aa54279733cbbd21e5920b216490041f1f1f04abc287df85fd25452c5e53b41112dff1b006a2300932280f2ddba8b84fec8e6eb43a448133f9a6d6ed9afbdd29340a45d8",
      "40229f3a2a2fa91a5451cac533088b78d61cb551bb3f65a0302224050000",
    ],
    [
      "ETag",
      "xqTQZ9ks8ssNa3IhefhxkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1605334902709"
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
      "90",
      "4f",
      "6bc24010c5bfcbf49a404cfc83010f5a44059536557a28229b38c668924977374a907cf7ceaea578ec6577f6cd6f86f7f60e97ac3c400871967ed7289b9714f5bb29225475ae155f15950ac101d42265f2b609b255b05a7fc68ce5335f9e06e3f96d34624225272c0484773866981f14845f772845813cb6df4bbb9131dd544659ac37d3d93462a1a08311d6dbe5723c594ea1759ec6aacbbf4676ad03678a233ca2c43241e3a29274c6442f4c40258a2a4757512d13546061db4825d59590442e2b6eafeb76fa5e2f08ba43cf1f784306734a84cea86476fbc1de409316794437ce073e03d2961cf568cf2bcb3d9be16a0163edb9d7ffeb754c6ff7bb70d268546f92d89d4263cc7b987c25635c73202d6b742011fccbf34c3fdeed0fc82c273cc2010000",
    ],
    [
      "ETag",
      "wT3iM3MNWbuerlG2rh7AHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf516e82300000d0bbf45b0d162a657f126020cb0a9241e08794521dd6b5ac2802cbee3eb37783f70328637c18ea9b125c82173053e86cd826ee0d17a56db69bedae5272bbb0e9d88742acdd447d6491b563e3c9a3d7749883b1712189b3d750c8f8ac962bf30e9058fa12c13242f1639de2ea50b16f22ee96e7f8c89f10248893bd2e4ccb4aacb35d7d391e2b72aa1212b5506896e5adac54bbd7b4399877ffd4ce41f759df25b6b13a531b91474e30ba9663308d295d0cece0e39ca90ba450968d406f5b4c9b418e856706eabd0b5117ac4f3723d98315e053df693ed4dd336b22c75981ff797d9b7bfeecbb9c6aaec1ef1f5018fe3a18010000",
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
      "Sat, 14 Nov 2020 06:22:31 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-55-1605334902709",
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
      "5c1348139212295aa394b69112b20169b54d1332e642dd02a6d8748aaafcf75d4cd3a5aad4be00f63de79e733f78260fbc4cc894c43c7b6ca0de7db917313921a06886b7835fceed2a08a499ec82c2feba491657569ecd6688e02d4bd2a2caa12745533390d36dd0cf6ad154b416a287897ab6dd1b8c2d7b381c39d6e9c4729027214f57bc7c40f69d52959c9ae641bb9f0991e5402b2efb4c14aff7e6d3a959d5e21e9892e65b491355a4f9b1e8b75c30aab82867db000d3412ea080aca73b4f09f99c4e76f53f7392dfa19829f3803ca98684ad5dac2144c9429cf9a5a6725d367a26d1e7d90c05db98bd060226f8a322a6901274642158dd4ae02e3d2dfac8da577b9f1d7f370b9f1a26071edaee7fdc566b55d7b81717bedfaaea1689c83e61a33e35c9f3c3ca07e0252f152ab87ed75abfcd2a0e5fbb1b4049496d005a38935a68333cb89d378c2d2b3a11da716c4f1593cb1e930b6983382511203459e16d52c5a8a72324e6c6aa74934a2313ec04e2287b14934b44731b35327657442f627e46fcd155c705909c9bb0e915b7f19ba51e86fbdc53c747509296d7275d1196b0b38f6a8b040047d50d3be8d72814a6dbb975ee8faf345b8bc71bb09af20a36c173ce28c539a4b4034adb1790aeab548b061c49bafdd0b04eb897d3f042599fe7e266dcf5b17472d7fa58738c0d6aed26f1284fed2bbd2760e881b9a371af2d47d900a2ddf616de87aff0791b8a45d16f263ebfa3f4977e5430a3594ecf3692258073efdd70e8b8f585c7d94910acfb83b4cb622ac866e87b82ef7c0b607a7e321d1e05abd8b8d86a343d7da1c6d4628a0",
      "542f15758b8f8576628d7c056110c7efe96eedff01cca565d678040000",
    ],
    [
      "ETag",
      "1Z9WLSSs/dySm5+OdCG0lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1605334902709"
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
      "df",
      "65",
      "bc",
      "b424e55f9a7001824004445a2e8c216469a7506877cbee5624847777b6221a35d19b7666facdf69cd31e611bf1001c5846ab5d86f270b542fd688a29aa2cd68a6ea9e00ac102d46c45a4bbf5f96ec7eeeb3df7a9f31a95aedb3ddedf379b44287f8d0903e708618471a0c0793e026709d29a2fe22ce18bbcb3401f523374bde960dca33e1181e9c7b3e1b0d51e76e1645d1603a6d922e7ffb1363f59b011cb29862891fb68b4a4526cd0d7036353b1248db1a044267d5490c3f983951459caa410059a14aad542b16657cbe54ac32ed5ed0681b1f0998e042776e6923ed042b3782af6e4126a04c8bc24c3617e7da17114e4464c39187bb54aaeef2b40d2c228c6c5df20e95d33fa0c1fd83982ef1c4b44c6f585ba1b3eb47e3b8e32fd3caad3f2ba3f08a529a90be20d465dd76b8d26869b9fbdb70f1ad5440a0a52a1c9b068576eaaf59afd1eebad3051d37b1c2d33b4c067f477f4230d4ec86285a737b31277297b020000",
    ],
    [
      "ETag",
      "SkcnqqaK7GSYDxi2+BGnHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1605334902709",
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
      "fd",
      "6f",
      "9b",
      "30",
      "10fd5798f74b2be58340c897147559c236b494b4405a45d394183812b70427d8b48aaafcef3ba06993756b2524c0f7debb77e7b39fc83d4b42d2233e5b6e3348779fefb84f2a04245de26a321bac6e85747faeacad9bf0616b0bd7ee63bf8f0896b3045d6f62a80a9ea50188ded4ad2d539e6d68ca791585aa46abda68a986ae37bbaad656bbc81310476396dc237b25e546f4eaf543eeda92f3650c74c3442de0eb97f5fa8356dfa4fc0e0229eaa729eb9845d4df4f7a11f3804ac693fed445039980740e6bca62b4f0ca0cfd2fa7d23546d7b525821f580034087896c8dc164a043c89d8324b0b55d27b2285cda30fe29a6373e829c3c9d4f6ce16749d9317e70a15ca7c9e82c8625951165853c46298b370514636f7ca376772891174b0a202c442b9fd613aa6a22c422a61a17cea2b17cac01e29a76ccb56a6b66dba9e727671ae7c7726d32be5ebec0483b64310922585698ffa31e4869ffb6abdddcd9c40259a2883f3b6daa28d8edaf523bf1d441dddf023157cbfe3b70daafb6ad06d4233f481224fe6ea058b263cd13a86114686deee42a8eaa03774bf61f86ad80e42683683861e81a652a341f615f29832092326365cb0b2b9e4d6b13c73ee39537b38f0cca28c88620347a5b9bc88639f128b44d03b75edf328e39829df29cbf64c6730f4ac1bb31c8e312c69b073b7381e118d05209aa6740d12d24b1e62d3c8d5c4b53c6b620fc6c82876fcea8010a4f7ebe995e0ed36459765f126a3bc80fd91e00d8db302f0507e104dd5d4aaaa551b06d9ef2bff571a38ce6086d9699ad2dd5f31aca8d5cce9ffc853e08bbfd2e9216fdefc231764ff7b8f4f85e0792ad5c9f5d47466a45c7220821492e0e309427011f8f05a389c51c4e229c53442e23fce6b20f224410ae5dcb27561f7996d68",
      "0dadb854244de59b98d6ee1c3628d7c815610d897caea83ca345a3f250265e4018c471b32dfb3b46ff00e4aea6ef23050000",
    ],
    [
      "ETag",
      "nYAhWstSKhIqSnoC6qeQSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90414fc2401085ffcb78b44d0a080a0907308d921022550ec610b3b4432d6c3b75770aa984ffeeece2c183072fbbb36fbe99bcb727d817550623d814f96783a6bdca9197ae48d0369aad5c355516210064950b796d7892df1d5f33a5e3cc0e075fc76eab97e3b11036fdc052c1e804db02756661f476824a952863efefc66f148cdbda29b3c54bfc10272294943961b19acf27d3790ce7e0d758bdffd7c8fa1cc08e36096ed16095a273511bda61ca3317d0aab2d6185a6a4c8a163cec1bb9a1a65686281425ec0fc2ce20eaf77a37c3a87b1b0d05d4942a2ea81276f52cde8089954ee828f9a02b80f1a544ddfaf32072df673878c059fbbbd771bdf5cfc269cb689f0c893b8bce587431794fce384b20360d06902af9e5c7822feff337f062d4bbc2010000",
    ],
    [
      "ETag",
      "+rtAg8wYdalEds96zw2ylQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb64ed382006a43b62a9d206c74081ca261343a831f297f2717af73a7d37780fc038175d47ef9512257801135bd94bbefca8350409df8979fb56985578b90dc9ce0f614a7d28236260ab37d5aafc41d08e8634aa2f048e4cf3e65b31e6be77520ecfef9fddb5687275a9d0b705e9ba9c2cecca94413de8a3fe4bc65eb6b12b5e0a89cfb903cf053efa316246a3fbd65cbfaacc25349abc2ca0c7783358742049aabbef5ab33b4b579a58ed3dacc856496c38ad8dd7e45666e43a1f9c53c3f25558c681a3232888d0b7422587f1b077c00288b196ade8a87c660d68db0bf03fa7f7a916cf3e12ac152df8fd0336ae177518010000",
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
      "Sat, 14 Nov 2020 06:22:32 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-57-1605334902709",
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
      "02ff85536b4fa34014fd2b64f6ab2d58c03e9266edb6b8565baa946a369b0d19860b8e520699c14d63fadff73258577713fdc4ccdc73ee39f7c13379e045424624e6d9630dd5eecbbd88c9110145337c9d5eb9df9cfcc29e899bf86275b94becd5b9793d1e2382372c49b7650e1d29ea8a811c6dd6ddac1275492b213a98a8e3f63bc727966bdbced0eaf5ad21f224e4e982170fc8be53aa9423d33c68773321b21c68c9659789edebbbf9d433cb4adc0353d27c2f69a28a343f16fd9a0b461517c578b34603b5842a822de5395af8cb4ce2d3f7a9bb9c6ebb19829f3803ca98a80bd5d8c2144c1429cfea4a6725a367a26dbe3990b5b7f0a6a1c1445e6f8ba8a05b383212aa68a476251867c16a69ccfdb355b09c84f3951fada7e7de72d29dae169ba5bf366ecfbdc033148d73d05c636c9cea9b8f17d44f402a5e68f5b0796e945f1a34ff7f2c0d01a525b4c1a86f9dd0e381358cd3b8cfd281edc6a905713c88fb2eb5638b0d1d70921828f2b4a866d14214fdfed0a1894da381930e22a7e7f622ec3044d61006e058c78ed573c9fe88fcaeb8821997a590bced10b90de6a11785c1c69f4e424f9790d23a57b3d65853c05b8f0a0b44d00735ed9b2817a8d4b47bee875e309986f31baf9df00232ca76eb479c714a730988a615364f41b51409368cf893a53743b09ed8d52128c9e8e733697adeb878d3f2577a88036cec2afd25eb3098fbdfb59d03e286e6b5863cb50752a2e53bac0d5def7f211297b4cd42ae375ef083b44f01a45041c13e9f268275e0d37fedb0f888c5d54719a9f08ebbc36423c22a687788eb720f6cb737b44e880657eadf986d59eea16b4d8e26236ca1502f15b58b8f85b662b57c056110c7efeb6eedff00cabee3b278040000",
    ],
    [
      "ETag",
      "CP5B4lJ3DoVbJOKyd3OH/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1605334902709"
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
      "5b",
      "4f",
      "83",
      "40",
      "10",
      "85ffcbf84a137a815a923e50adda845ea4347d304db385815281c5dd456d9afe7767b156a326fa0233c337cb39070ef098161138b04993a70ac5fe224175af0b1f65952949b7921712c100542c21b2b534fdb1f43debb5f4a6feb2b04abbd771fb7d2264b8c59c81738038c52c92e03c1ca06039d25ac8b32a2fd6756780da977a380ffcd1e496fa9c47ba9f2c3ccf1d7843381ae7c58829b6aef97facad8e06ecf8c6c7180516216a2da5e03b0cd548db942c2f336c485e891025d470fd2011bc2a99e0bc419386d56d346dd36ab73b3db3d5357b04663c642ae505b18b39e903c515cb7cfe422ec12640d425198eebeb338dd3a836a2cbd124b03bb5beaf00498bd30cd77f83a477cbe8337c60a708be732ce755a1ced48d37757f3b8e32fd3ceada0d863f08a928a933128cc6c379e08e679a5b9dbc0ff60ae54c700a52a2ceb069762eadae6dbec77ac575d4f41e47890a0d0819fd1d77a902276699c4e31b014f4f627b020000",
    ],
    [
      "ETag",
      "2W0RMsRL5xpLORWn5p694A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1605334902709",
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
      "fd",
      "6f9b3010fd5798f74b2be50342082452d4b194ae4809c90869d54d53628349dd02a6d8748aaafcef3ba0e9c7bab51212c4efbdbb77e7bb3ca05b9645688408dbde95b4d87dbee104b51095780ba7b2974fcfe767596e85491a5d9038f05637f6780c0c56a9044ef384b6052f8b908ad16ad9d916bccc71c1791b02b50dabad0d5443d7fb43b567aa43d0099ac45396dd82fa5aca5c8cbadd43eece96f36d4271ce4427e4e9d379f7bed7cd0b7e434329baaf5376218be8be9ff424e121968c67e3d5120c9482166b9a62968085676544bebc0edd6138ed6c817ccf428ac3909799ac6c4188906731db96451d158d1e506df3c5075a3a5367122893f9ca0b8e3638adc49b63050b65bd2ea82813d952365053cc12ba66d1a641f25be5cc9fcf000107d75850b1512ecf1ddf51948d90e06ea37c1a2b278aed9d2aafe5aea7ac3ccf5906cad1c9b1f2cd9faf16cad7ab571cf01d51215956bb0e304968e5f8b1b1eedbebac0458828b065c9bea006b963a243131c3d8d20d12ab94108b9806d6891a0efbb41f118a4127abe8b50a673c8ba2be66984353c3c3be15614b1f90a146faaa6119ba4574d28b3462c60646fb16fa5d30494f99c8b9604d77d1a5ef06ce3af057dec40e9cba8c1843074f1b7355112f7d4a281248efd4b5af50c621537555ae1738be3d09dc0ba7998e29dde270b7bc83f988712228b07181532a6931e311340d2de64b3770e79e3d05457de58b0343a0d1cf876741b0cbeb2ecbfa8d0277067764cf16b58703e9022765cdba6f3e504feda96db5d7d68c40eb8d347da4f53baaaafe40fb7debffc16ddfb7afc0102e0abcfb0b832207fd4afe8fac35bffed5983fb8d05095edc913daffdac3d342b0634d74f47de5f857a839f2694c0b9a851f0f15906be0c3bf8ac3de02173617d2c00e4806231c8a2a4958d06694595adb7d541bbaa91ba82617f20d660dacc39d5531aa8834a5997c",
      "aca8d9dbba5115548a27128030819eeb7d03f40f712b1cb737050000",
    ],
    [
      "ETag",
      "t2pLHOFnp8clmdVbfTNUjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1605334902709"
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
      "000002ff8d90414fc2401085ffcb786d93025681848335444900a18a9818429676288576a7ee6e3148fadf9d5d3c78f0e06577f6cd3793f7f60c875ca6d0874d9e7dd4a84e57199ab92d62d47561345f15498de0011a9131f9369b445fdda7c9f4752e17bb65249632df648301133ad96129a07f866d8e45aaa1ff7e06294ae4b1f55ab98d8c99536595d1f465f8308c592829b5c274311edf45e32134deafb1eaf0af9155e3c19e36316e51a14cd0baa814ed3131231b508bb22ad0d754ab043538d835324575251491cf8a1f76fdd64d10763ad7bda07d1bf4182c28112627c9ece299bd8121238a983e391fb41950aee4a85b771e590e5d86a303acb5bf7b2ddb5bfd2c8c4e06f54c11bbd3688d051793f7648d1b0e64548d1e24827ff931379777f30d8c401f1bc2010000",
    ],
    [
      "ETag",
      "XPMBz8OMNVQnUhWBaWnibg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fc9591c9606a43722a0406594cd9a4b8625602a9b8060dae9bfd7e9fb83f703d23ca7e348a6ee465bf00e782aebeb7cedf52282a732ba407237bb4540fbede47a46c4c69d931ccd3357acdaf7110edb4cd63cd5abb489f98d8e1b5fa59181be676510b54ae659cf2e156b0a4f3cb945b78925f59917aa59c542bb3c18748ed84ea0a7075f2235f786b97bf3cb8ea60b2e839858dc316ae5905b0fe5336eb378d3b27a9ed4fc9e5c51870f3391c3047206dbd97697e0b62d4321f23f24d7d634e92e615b1daea23d389d98d851727623c1002b409f3d1be848d82bab405d5f81ff3999784f5f7d44d3810ee0f70ffc383eb818010000",
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
      "Sat, 14 Nov 2020 06:22:34 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-59-1605334902709",
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
      "00000002ff85535d4fdb3014fd2b91f74adbd0266d53a91a550950a94db724054dd314d9ee4d30a471889d3284fadf77e350064282a7d8bee7dc73ee479ec9bd28b6644298c81e6aa89ebedd49464e08689ae1ebcd7d312b72e71a6ccdffe6fdcb703362f6e3748a08d1b014dd95397494ac2b0e6ab289ba5925eb925652763051c7f53aa743db1d0c1ccfee8f6c0f790af274298a7b64df6a5daa49af77d4ee66526639d052a82e97bbd7f7debedf2b2b79075cabde7bc91eaaa8dee7a2df73c9a916b2986e2234502ba812d85191a385ffcc2d3b7b9fba2be8ae9b21782f3850ce655de8c616a6e0b248455657262b993c1363f3cd8144fed29fc7169779bd2b9282eee0c4da524d13fd54827511ae57d622b85887ab59bc58074934bff257b3ee7cbddcac82c8bab9f243dfd294e560b8d6d43a33b7002fa8bf05a54561d4e3e6b9517e69d0e2e3581a024a2b6883c9c81ed2d3b1edb1948d783a1eb82cb581b1311bb974c06cee39e06c1950e41951c3a2852c5c4847fdf1609c389e0b89c3b89db0517f90a4436fc86dc706d776c9e1843c5642c3b950a554a2ed10b90917b19fc4e12698cf62df9490d23ad7e7adb1a680b71e351688a04f6a3a34512151a969f72288fd70368f17d77e3be12564943f450f38e394e60a104d2b6c9e866a25b7d83012cc56fe3982cdc47e1c838a4c7e3f93a6e78d8b372d7fa5c738c0c6ae365f12c5e122b834768e886b9ad706b26f0fa444cbb7581bba3efc41242e699b85fcdcf8e12fd23e8590420505ff7a9a0836812fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca3db25dc771fac4802bfd21e6f6bd63d79a1c4d46d841a15f2a6a171f0b6dc56af50ac2208e3f30dd3afc03d4b674ee78040000",
    ],
    [
      "ETag",
      "WknAnl4Ve0tcxl2GRU7b0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1605334902709"
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
      "ff8d92dd4e83401085df65bca509da3f4bd20baa556b6a554aaf4cd36c61b6a50283bb8b4a9abebbb358ab5113bd8199e19be59c035b784cf2183c5826aba7125575b442736f8b0075991acdb782728de0001ab16252caf66c735dbdd254caaa55c57e6f10942ffd3e133a5a6326c0db824c308d35780f5bc84586bc16515a66f9a2ee1c30556187d330184d2eb9cf28b6fd64361efb83f11076ce613116462c6afe1f6bf39d031b5a062851611ea1d55228da606446d6a6165991624353a922d450c3f58395a2b2108aa8c19346bbd738eeb8ed66b3d5734fba6e8fc194226112ca999d4d591f1832220de8855d42870155976c58d6d7671e27716dc496a349d869d5fabe022c4d26292efe0659ef5af067f8c0f6117ce74446656e0ed4c5f8d6ffed38cef4f3a8733f1cfe20b4e1a40e4838ba194e43ffe6ce72f3bdf7416550df29e22035da0c8fddd669bbdb71df633d231b35bfc733aa440722c17fc75562c09322d5b87b0390516cc77b020000",
    ],
    [
      "ETag",
      "ff5UjJyxoSffy4ydA9BRuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8554fd4fdb3010fd5732ef17d04a9ba64dfa2121d641804a25853485b1696a1de7520c495c62a75385fabfefe2503ec60652a4c4bef7eebdb3eff240ee7816913e09f9e2be807cfdf95684a44640d105ee9eb34e938e2cf503be5caeacd356f4bd984617fbfb88e0254bd27499c09e1445ce40f6a793fa2217c592e642ec61a23dc7dc6b3aa6dd6ab57ba6d5317bc89390c4239edd21fb46a9a5ec371a5bedfa4288450274c9659d89f469bfb1b21acb5cdc0253b2f15ab2812ab2f1bee8412218555c64fbd3091a2824e43348294fd0c233330abfbe4e5de734ad2f10bce20c2863a2c854690b533091c57c51e43a2be93f106df3c50799b823f730300ec7532fd899d3b424cf770d2a8dd92c075924aa66ccb1a6982730e3d1bc8a2cef8c637f7c861174704325c8b97175eafaae616c73189ff68d0363e01d19aff943cf987a9e3b098c9d835de3c41f4fcf8d6fd7af30683c02a978a66d07344ca0b4fc78b2c3b7f75912a8421b5570d6311ddaec9abd300e3b2ceeb6ec3036210cbb61c7a6add064bd36b4a31028f254995db3682632071cc7ecf63a6dab695ab10d8e4d298b98d36dd22e349b1046a1dd8bda5db2a991df395770c4e552485e1d2fb9f287813b0bfca97738085c5d464cf1088f2a7365112f7d2a2c1241efd4b529a35ca0527957432f70fdc16130bc74abf618c182b2f5e41e1b24a6890444d39ca6a0203f13119473319e0c83e1d81b8c90a1effc7c8b90a4fff3e19910ac97fa94957e93e3d17810386ded600bb9a449a131abea8334eb362236b5ffa719f8fee01aa5699ed3f55f312cc7d1f47f2868bc5e55369f1449a9b65d5964f36b834f8de03855d9c9c5d4f5af49b5e5430c3964ece3f641b00e7cf857d88e2862714851462a5c63b332598ab01caaa6e5a9b6fbc8b66dcb6a110dced59b58dbec6e6fa7cc5166841432f5585135a2faa0ca50219f4018c45ef386de0946ff00486ee24b22050000",
    ],
    [
      "ETag",
      "Pc71aL2tZe+Vv2H3dXuUdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d904f6fc2300cc5bf8b776db5f2674c2071180c313684b67688c38450086e5748eb2e494108f5bbcf093becb0c32e89f3fcb3f55e2e70c8cb1d0c609b675f35eaf34d86f6cd15319a5a59c35745a5410800adc8987c7cde27e3e549dd0a59ab976e322d57ab3c1b0e9930f2130b01830ba439aa9d81c1c7054a51208f6d36da6f64cc9e2ba7cc16ef93e92466a1a09d1316cbf9fc61349f4013fc1aab0eff1a593701ec691b638a1a4b89ce45a5698fd2ce5c40238a4a6168a8d6120d78d837324d75253451c84ad88bc2562fbaeb74bafda87d1ff519542485cda9647699b037b064858ae9c4f9a0cd80f625474dfd7964b9eb331c3de0acfddd6bb9defa67e1e86cd1bc6a6277069db1e86a724cceb8e54056d7188014fccb4fb9bdbe9b6fe7766a2ec2010000",
    ],
    [
      "ETag",
      "DJjSCUwl/aculK4SGnWWig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d07fc9591c10a3d21bab2c01b44889a70c6044d6b03aa0d37fafd3f707ef0de234a5c3404656d2067c8125de48eb74edb4bc02cf37f413c6becad7babde851650e77c5e11be610fd72b81d67dfaf430b93c7ac9bcfef3cb0329b5d45a99558a4d3297c99489793d652a921d01729616d200f855aed95d070d3f034b11dda76b63b19d04cb05aca7b87c72759ab848d6f8d390733f40c2e22a61b9c1da67ce0a3a2db9f05617b99b806579dca5dbb20716338b867da3eee9d8f33cd3a19bb3a698a923459212c36640c2a22e78d0b3aca6005e8dce63d1d48fec98a509256e07f4ec6a5a59fbe42e39ef6e0f70f959c2db218010000",
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
      "Sat, 14 Nov 2020 06:22:35 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-61-1605334902709",
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
      "0002ff85536b6f9b3014fd2bc8fbda2490072491a2354ae81aad212b216da76942c65ca83bc0149b565995ffbe8b69ba7693da4fd8bee7dc73ee8327f28b1731999288a7f73554fb4f7722222704144df1157e8f6e727b73b359c7ae4896fbcbdde3573e9fcd10c11b96a4799941478aba6220a7bb6d37ad445dd24a880e26ead856c7b2cdd160309c987dc79c204f42965cf0e217b26f952ae5b4d73b6a775321d20c68c9659789fce5bdf7d0ef9595b803a664efad640f5564ef7dd1cf9960547151cc765b34504ba842c829cfd0c25f661c9dbe4ddde534efa6087ee00c2863a22e54630b533051243cad2b9d954c9f88b6f9ea40b6ee85bb080c26b23a2fc282e67062c454d150ed4b30cefccdda5879671b7f3d0f561b2fdc2eceddf5bcbbd85cecd6ded6b83e777dd75034ca40738d9971aa6f1e5e503f06a978a1d583e6b9517e6ed0eaffb134049496d00643c7b4a93536275112392c190f46516242148d2367440791c9264318c61150e46951cda285281c2b02cb3247a1658e5938b461184ee2b1133a43e85bd0b76d663be470421e2bae60c96529246f3b44aefd55e08681bff316f3c0d52524b4ced4b235d614f0daa3c20211f44e4d8726ca052a35ed5e7981ebcf17c1eaca6d277c012965fbed3dce38a1990444d30a9ba7a05a8b181b46bcf9da5d22584fecdb3128c9f4c713697adeb878d5f2177a80036cec2afd25dbc05f795fb49d23e28a66b5863cb40752a2e55bac0d5d1f7e221297b4cd422e77aeff9db44f3e245041c13e9e268275e0c37fedb8f888c5d54719a9f08ebbc36423c22a687788eb728fecd168ece83f55d14afd1bb32db37fec5a93a3c9083914eab9a276f1b1d056ac962f200ce2f83dddadc31fe8b89a2f78040000",
    ],
    [
      "ETag",
      "ez5Xm6OXOMdEofDyQUwKiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2db108146cc2455154087f42f14243c8d24ea1b0edd6ddad8a847777b6221a35d19b7666facdf69cd3ee6013a721b8b088978f39caedc912f5ad29c6a872ae15dd32912a040b50b325911a637eafbb9bbbc970d53d6d2c5e37e9f6c56b368950c10a1306ee0ea21879a8c07dd841ca12a4b540f03c49e7456781de666638f1c79dc135f589084d3f98f67a5eabd786bd755c0c9966f382ffc7da6c6fc15a2cc618a1c43440a32593628d81ee189b8a2519c79212b90c504101170f9652e419934294685272caa5b263d72a95eab97d56b7cf09e422603a1629b1d309e9032d34e363f14c2ec121401625198e8aeb138de3b03062cacec077aa85beaf00498b628ef3bf41d2bb62f4193eb04304df3996883cd547eaaa37f47e3b8e32fd3cead2f3db3f08a529a923e277faed89eff547869b1dbcb7b61ad5480a0a52a1c9b06c571bb5ba63bfc77a214cd4f41e57cb1c2d0818fd1d37b10637625ce1fe0db2158faa7b020000",
    ],
    [
      "ETag",
      "teilZtJkVSOhJ/8bzknyxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1605334902709",
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
      "54",
      "7f4fdb3010fd2a96270448fd4d29a212622d842d5b49bb340175136adcc40d86240eb603eb50bffbce0e815530f6e7a448f1f9debdf77ce7e411dfb22cc27dbc60f15d41c5eac30d5fe01aa68ac4b03bbb39efda676efbfbcf5f670fb67a606238fcf270740408a6ab2449f384d6252f444865df9f3662c18b9c08ceeb4054ef75eaed5e6b7f6faf7bd8ea1cb40ea14ed2643962d92d545f2b95cb7eb359693762cee384929cc946c8d3e7fde67da7990b7e4343259b9b924d5091cdf7458f131e12c57876e44fc14021a998d394b0042cbc54468b8f9bd40d46d2460ce07b16521286bcc894b6051421cf962c2e8461c5fd476c6cfeb1c0536b649d78e864ec3bde4e40525d1cec2222d17c2ea82c125543019c69c9123a67515066f25b74e68ecf21030eae89a43240979f2dd7426834beb4dc9d00a0bb68647fb5d0311a38a76893c47690ef38d6d4433bc7bbe8933bf6276838dbc080fb882e091838250a1494761d954b5b8f5451a900f4d46ffbf594f15a6719174ce993da8e67b98313cfbeb0cae68e684cc2d5f40edabb2489a4802682a4545171ce230a2593f1d4f6ecb133184185e9d8a44248dcfff1f852e0ad72aa0d2af3d65abdaed1af001724290ce2be5ce0adf6fe165eaf6b7f2719b8ee6006c24408b27a5be04d0583375169b2526c63ad56451dbcbe5ac353c370154b76fccdb7dc192eb75cbaa48266a1a17ca7c9066c12fffca2aaeb0d58b8e0202315c452b1506a91505093f6586aec3e55eff70e5a5d6cc042bdcef53afa2f90456f669e340ac34f85e0c235775a87a0268d1796414fe02f51c3299592c49ac6cfe0249292454291193c7aee330a02c432a40781026f36b1e66618410d0d490419d5eb22d3e43ed233aed6db3ad8d68e8c8f7234ffc9c355d9162d723a762cb847bf01c93c45555f050000",
    ],
    [
      "ETag",
      "YjM4IFR1ZxzFwItwirBBJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb64ed388850487724da2a381490ff868110294989948f7c3abd7b9dbe1bbc1f901342fb3e1bee9c0af00a965c865bb2b55a09a92ef1873bcd1ce94d2f0d183aebd1171aaca7c821028e2c240db39a06f2f482cb5a318a40eb4ee73115f3d536708f1adbb48d509d65966abd544a1fea68ce9a574d9a7f5c4ad793064da74a453ed548bedc7656b0b0d0ee3237b070a5acbb28b9cdf103178782ee951a57eb8472ae545fe21b99ad67f124c6f48585abcc239378dc14f568ef333c9d0e657e4ea64e1d1f83788f91c57446e4c575d6096c009ddbbaa37d563fb37b15c20df89f67c3d2d2671fd1bca31df8fd03737f03b118010000",
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
      "Sat, 14 Nov 2020 06:22:36 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-63-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6fa24014fd2b64f66b55141535315b6369eb46708bd847361b328c173a2d3094196c4ce37fdfcb50bb6d9ab49f98997bce3de73e78218f3cdf92098978f25441b9fff12022724240d1045f07e5eaf982dff15d7175effdbaca6e37cb5b77369d2282d72c49b32285961455c9404e36eb76528aaaa0a5102d4cd41a5aadeed01c58567f6cf66c738c3c0969bce4f923b2ef952ae4a4d3396ab71321921468c1659b89ecedbdb3eb758a523c0053b2f351b2832ab2f3b5e8cf5430aab8c8a79b351aa82494216494a768e13f731b9d7e4cdde6346b2708de7106943151e5aab6852998c8639e54a5ce4a262f44db7c77206b67e9cc038389b4caf230a7199c185baa68a8f60518e7feca3516def9ca7767c162e585ebf9a5e3cedaf3d572e37a6be3e6d2f11d43d12805cd35a6c6a9be797841fd2d48c573ad1ed4cfb5f26b83169fc75213505a42130c6d7348bb23731cc591cde29135886213a26814d9036a45261bf7a1bf8d80224f8b6a16cd456e7587d4b68186109971d88fcd281c8f86781a5b310c7a567f0b16399c90e7922b38e3b21092371d2237fe2270c2c0df78f359e0e812625aa5eaac315617f0dea3c20211f4454d873aca052ad5ed5e7881e3cfe6c1e2da6926bc8484b2fdfa09671cd35402a26989cd5350ba628b0d23decc75ce10ac27f6fb189464f2e785d43daf5dbc6bf91b3dc001d67695fe9275e02fbc0b6de788b8a669a521bbe6400ab47c8fb5a1ebc35f44e2923659c8d5c6f1ef48f3e4430c25e4ecfb69225807befdd78e8b8f585c7d94910aefb83b4cd622ac846687b82ef7c81ed8e6604434b8549f625dbb77ec5a9da3ce0819e4eab5a266f1b1d046ac926f200ce2f83dddadc33f3d174b4678040000",
    ],
    [
      "ETag",
      "5rOwGiYivpQhNJQmXULXMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1605334902709"
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
      "0000000002ff8d92414fc2401085ffcb782d49112cd28403286a0d20d27232842ced140a6da7ee6e4542f8efce5644a3267a6967a6df6cdf7bed1e36491e810b8b64f95ca2dc9d2d513f9a6282aa4cb5e25b41b942b000b5583219953d5f3bf1f0fe756b3b19851b4f0d5bdb4e870915ae3013e0ee214e308d14b84f7bc84586bc16525a66f9bcea2cd0bbc20cfd60e28d6eb9cf2832fd683a18747b833e1cacd36224b49857fc3fd666070bd6b498608c12f3108d9642d21a43ed199b4a64458a3545a50c514105570f9692ca4248a21a4f6a4ea35677ec8b46a3d9b6cf5b769bc19442a113ca999dfaac0f3469914e68cb2ec1614056251b8eabeb0b8f93a832624a6f1438cd4adf5780a5c5498af3bf41d6bb12fc193eb06304df39915199eb13753378e8fe761c67fa79d47537e8ff2094e6a44e48e00dfb7ed01d8e0d373b7aefed34aab1240e52a1c9b06e372f2f5a8efd1eeb1599a8f93dae96255a100afe3bee120d6e2c528587370c145f4d7b020000",
    ],
    [
      "ETag",
      "duBSt6fMJxw06mockIsM7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1605334902709",
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
      "8d",
      "4f",
      "a33014ff57482f269a6c837d30c612e3ed2677122753c65ccce5b29552661528d2e26531fbdfef519cbaf34e131268dfefe3bdd7579ed03dcb223444215b3f94b4d87cb9e3216a202af11a76f58929178b0747de9ed976efa27babe373e7eaf81810ac62099ce6096d0a5e16848ae17cd65a17bccc71c17913849afd5eb3dd37cc6eb7671b1dcbb0812768124f58760fec5b297331d4f59d776bcdf93aa13867a24578fab2af3f76f4bce0779448a1ef5beae022f48f4d4f124eb0643c3b9ecf208152d0624953cc1248e19519855ff7a55b0ca7ad35801f19a198105e66b24a0b2408cf62b62e0ba58a864f48a5f9e603cd9c89330eb4f174ee05872b9c56e4d5918685b65c165494896c682ba82966095db2685547f27bedbb3fbd800864708b05152b6d71e6f88ea64da60bc73f7c0980d6c43d77b4136de49d6afb52aea7cd3dcf9905dae1c991f6c39fce2fb56f377b18a821a242b24c5510e030a155f6cf4d76df1f6d45c0128cebe0d232fab83d30ec300e2d120fba66181b340c07a165e26e6810bb477b514831f064a5ae5838e399654631e975bab685891d859db86d0fc20e353ad8a6c4eaf7edae19c798f4d1b6817e174cd25326722e58dd69b4f0ddc05906fedc1b8f0247951163e8e6699d5c55c4db3c251409a00feada5651c6c1a93a36d70b1c7f340edc6ba79e94095d63b2993dc0acc4381114d0b8c02995b4b8e011340d5d4e676ee04ebdd10418eaf82f770881863f9f5e09c126575d96ea8d6681ef7a3f54023bc4354e4a0579ac3fd001cef303b4dd36fe2f33f2fdd10d58e3a2c09bbf62504ebf57d1ff61a1f06a55a7b9b36ca3ca6db7eaa0edaf2d3c0d0437ab56475773c7bf41f5964f635ad08c7c3e3e0056814f7f10bbdb0a58b8af602324ac615889a84c4841eba165a94af7996d5ad6c0440a5cc87731dbe8ed4ea7d2a814",
      "694a33f95c517d5b55a3aa50295e40108459f3d4416dff000d7a820f2d050000",
    ],
    [
      "ETag",
      "/L5tWWqEthH994M3h/aKEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1605334902709"
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
      "90414fc2401085ffcb786d93521043130e6240884da355f0600859cab416da4edddd422ae97f77763186a397ddd937df4cdedb331cf26a07016cf3ecab41d9de64a85f4c11a36a0aadf8aaa952080ea0161993d1e974688fab65d1ac9e26efdf389fcdf255361e33a1924f2c05046748732c760a828f3354a2441edb6ca4ddc8986e6ba32ca2b7e9e33466a1a49d11a26518de4fc22974ced5587df8d7c8ba73604fdb1853945825685cd492f698e88509a8445917e82a6a64820a2c6c1b99a4a61692c865c51d0edcded0bbedf70723cfbff3460c1694089d53c5ecf295bd81262d8a984e9c0f7c06a42d396a6acf23cb7d9be1680163edbae7fff57aa6b7fe5d386935aa6749ec4ea131e65d4c3e9031ae3990960d3a9008fee579ae2fefee07e62f2349c2010000",
    ],
    [
      "ETag",
      "NwwkyvVUluVKBWzeHFFiVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b7282300000d0bb64ad0ea281a6bb0611e43705112b1b26c5440c10c247053bbd7b9dbe1bbc1f40f29cf67d36342515e01d4c44458b7ce14a05c390a97eff71da57edf4f49daf127be77623574425b216baae66bbbb322f4788a244ccb10575c717194bf08d77acadc485156f91b919ab62dddf0d27d2e229c27e1a6f436d5a5beaaed753ef68e75a1ad8dfb0cecf70e7b26360d7dcb94229f622cd45c143c2b7b5862dffd12465706a4ca4a0034a0e2c980a5eddc3fa688d92f04a1da3d550182e7c2eabdbb26979561a5bcffc84549baf47331603f32e6006e828af1dedb3eb2bbb8208cdc0ff3c1b26495f7d4c49473bf0fb070bf5da1518010000",
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
      "Sat, 14 Nov 2020 06:22:38 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-65-1605334902709",
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
      "0000000002ff85536b4fa34014fd2b64f6abb6f4414b9b346b5351d96de92e505db3d99061b8e02830c80c6e8ce97fdfcb605d8d897e6266ee39f79cfbe089dcf132217312f3ecbe81faf1cbad88c9110145337c35870337702fbe5d159bfb6bef7cfc3d61e35fd9628108deb2242daa1c8ea5686a0672be0b7a592d9a8ad6421c63a2e389753c9898d668349e99c3a939439e843c5df3f20ed9374a5572deef1fb47b9910590eb4e2b2c744f1f2de7f18f6ab5adc0253b2ff56b28f2ab2ffb1e8d75c30aab82817bb000d3412ea080aca73b4f09f99c4276f53f7382d7a19821f3803ca98684ad5dac2144c9429cf9a5a6725f327a26dbe3a90c0593babd060226f8a322a6901474642158dd46305c699bfdd18ae77b6f537cbd0dd7a51b0ba7036cbde6abbde6dbcc0b8ba707cc75034ce41738d8571a26f1e5e503f01a978a9d5c3f6b9557e6e90fb7e2c2d01a52574c1686a4ee8c03667711a4f596a8fac3835218eed786ad1516cb2d918c6490c14795a54b368294a6a5a609b43160d27f1201a27a61dd9094ba3c482e1d466189e24647f44fed65cc129979590bceb10b9f2ddd089427fe7ad96a1a34b486993abd3ce585bc06b8f0a0b44d00735eddb2817a8d4b6dbf542c75fae42f7d2e926bc868cb2c7e01e679cd25c02a2698dcd53506f44820d23de72e39c22584fecc72128c9fcf713697bdeba78d5f2177a88036ced2afd2541e8bbdeb9b673405cd2bcd19087ee402ab47c83b5a1ebfd1f44e2927659c8cf9de35f93eec987146a28d9e7d344b00e7cfaaf1d161fb1b8fa282315de7177986c45580ddd0e715dee816dd9e3d9806870addec5acd9f0d0b536479b110a28d57345dde263a19d58235f4018c4f17bba5bfb7fac4a25e578040000",
    ],
    [
      "ETag",
      "021ISIHJWmMqYNG4Kdc4Xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1605334902709"
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
      "ffcb78b4c42250a40987a280988258cac910b2b453286ebb7577ab2184ffee6c45346aa2977666facdf6bdd7eee129cd63706195ae9f4b94bbb335ea075304a84aae15dd0a912b040b50b33591fc220fc77743b6627d227539386faf7cafdb2542451bcc18b87b4852e4b102f7710f39cb90d622c1cb2c5f569d057a5798e12c0c469321f599884d3f99fbbed7f3fb70b04e8b31d36c59f1ff585b1c2cd88a5580094acc23345a0a29b618e991b1a9585670ac2951ca08155470f5602d45593029448d2635a755ab3b76abd16876eccbb6dd21908b88e954e4c4ce67a40fb4d08c07e2955c824380ac4a329c54d7171aa77165c494a349e8342b7d5f019296a41c977f83a477c3e8337c60c708be732c1365ae4fd4c0bff77e3b8e32fd3ceac60bfb3f08a529a913128ec6fd59e88da7865b1cbdf7761ad5540a0a52a1c9b06e37af5a6dc77e8ff55a98a8e93dae96255a1031fa3b6e530d6ec2b8c2c31bdd57e4a67b020000",
    ],
    [
      "ETag",
      "l/nTMJGabaEtQutuF+7bLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1605334902709",
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
      "0d",
      "4f",
      "db",
      "30",
      "10fd2b912724d0fa917e379510eb4a46a39594a529084d53ebb84e302471b01d4685fadf777168a16303295262bff7eedd9dcf7942772c5da1010a58749f53b1fe74cb03544154e108765df3f1a66f794d7b3c765c9f7e4b3f8f1f45747c0c0c56a8244eb2985625cf05a172309fd522c1f30c0bceab10a8daed561b5db3d36ab52db3d9332dd0491a871396de81fa46a94c0eeaf5ad772de23c8a29ce98ac119eecf6eb0fcd7a26f82d254ad6f72debe022ebef9b9ec49c60c5787a3c9f4102b9a4624113cc6248e145b90abeec87ae319cd422203f304231213c4f55911684203c0d59940b1d150d9e904ef3d5079ad9137be41ba3e9dcf50f973829c4cb23034b63b11054e6b1aa184ba82964315db0d5b244b23be39b373d070432b8c192caa57135b63ddb3026d32bdb3bdc01106be27cb78d1363e89e1afba11cd798bbae3df38dc39323e3cc9bce2f8cafd77b1ca86145a562a9aec0c7414c8bec9f9becbc3dda4280151897e0a2677671a36f5a4118f448d86f7582d0a441d00f7a1ddc0a4c62b5697b15500c3a5544d72a9cf2b4d75985a4dd6c593d4cac55d00c1b563f6852b3892d4a7addaed5ea8421265db4a9a0df82297aca64c6252b3b8dae3cc7b717be37774743dfd6658418ba795a265714f13a4f054502e99dba3605ca383815c706436e7bc391ef5cdae5a44c6884c97a760fb312e2585260638113aaa838e72b681aba98ce1cdf99bac30928f4f15f6c19120d7e3ebd08fc75a6bbacf41bcd7ccf71cf74025bc6258e734d79283fd001ceb203b4d954fe1f66e879c36bb0c642e0f55f1894d36d17f27f5868be5e95696e2d1ba870dbae9a68f36b034f05c1cd2aa3a31f73dbbb46e59647432a684a3e1e1f206be0c31fc4f6b60217ee2bd848056b1856220b",
      "13226839b42cd1e93eab3b56cbec204d16ea0dd6d6d8ee961611694253f55c51795b75a30a28973b1280306bae3ea8cd1f005218252d050000",
    ],
    [
      "ETag",
      "N0xh89R2EHHINTeFn+Hxrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1605334902709"
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
      "90",
      "414fc2401085ffcb78b48d852a0a090721204442a48a1743c852a6a5d076eaee148384ffeeec620c472fbbb36fbe99bcb747d865e51a3ab0cad2cf1af5e12a459ed9224253e76ce4aaa834081e20ab54c8cd7bf6d07be66438ee07e977381c5d6f5737b36e5708136fb050d039429261be36d0f93842a90a94b1e552bb8d82f1a1b2ca78fa36781a442214b4b6c2743e993cf6260338791763d5ee5f238b93075b5a4598a0c63246eba2d2b4c598c736a0514595a36fa8d6311a70b06ba49aea4a69225f14bfd5f21bade02e0c6fdb41f33e680b9853ac38a352d8f9ab7803265679445f920f9a0268574ad4c49d7b91439761ef006bedb2d7fceb356c6ff1bbb07760342f9ac49d416b2c389bec9335ce1288758d1ec44a7e7994f1f97dfa0188e7cc4ec2010000",
    ],
    [
      "ETag",
      "hVi8BKtfFIC0gz3FH+jb/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb64ad0e1fa14377202d225454d41836190229821f420825d1e9ddebf4dde03d415e14b4efb1682ff40ede81ca0d6756cc22a679d6b6807b69b6e137d1581a36c3b8c6d35b747a13fa2a371ec7c5791ec388dfc475ed76998d3701d47c2153a423e487e4604b62986ab75967ddfe677e8f96a472e750936a792cb9e19b4d95ba09ca8edb29d4e9f8319471b247d21bd301437981896e6285eb33c6c5a2341e4e735a79f18d505ff56e6705db1a0d53b36d6c8f08c61783f5f9b553ad9ef1da134c57a9e593cba15658058f55eca62143d70a4c0095ace6b4c7f52b6b5a8e3301ff732c14a3afbe47734e39f8fd03d5f7c89218010000",
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
      "Sat, 14 Nov 2020 06:22:39 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-67-1605334902709",
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
      "6d0269208448d19a2564454a480ba455354dc81843dd02a6d8748aaafcf75d4cd3b59bd43d05df7bce3de77ee4053db22a453394b0fca9a5cde1cb034fd019a212e710c5857558ebdf5656dbdc5dafcde0727a5b5ce5f3392058c712b8ac0b3a10bc6d0815b37d38cc1bded6b8e17c008506137b309a18d6786c3ac6b96d38c013b4c836ac7a04f6bd94b598e9fa497b98739e1714d74c0c092fdfe2faf3b95e37fc811229f48f923aa808fd73d1af052758325ecdf7211868056d625a625680853fcc34b9f8587ac87039cc01fccc08c584f0b6929d2d28417895b1bc6d5455347b41cae6bb0f14ba1b77196984176d59c5152ee9999662896379a8a9b60e765bcdf3d7bb60bb88bc9d1f87cb4b77bb182e779bfdd60fb5db4b3770358993822aae36d72ed4cb8707e8a754485629f5a80b77caaf03f2fe5d4b47006941fb646c1b133c9a1a4e922536c9a6632bc90c9a24d3c4b6f03831886352334d28069e12552c5cf12acdd2b1918d0ca8908d62d321699c8c7012a723676c9a36b1208c8e67e857c3245d315173c1fa09a1dbc08bdc380af6fe7211b9aa850cb7855cf5c6ba06de7b94d020803ee9e9d8651907a56edc9e1fb9c1621979376ebfe10dcd3139844fb0e30c1782021a37303c499b2d4f6160c85f6cdd1580d5c6ae4e4981663f5e5037f3cec5bb91bfd12358606757aa5f144681e77f57764e881b5cb40af2dc7fa01a2cdf436fe0faf8139070a47d1574bd77833bd487029ad18656e4ffdb04b04afcf7bf763a7cc0c2e9838c90f086db21a213210ded6f88a9764f6ccb817522056ee45fb98961d8d3d3d4ba1a5d455a",
      "d24abe76d41f3e34da8bb5e20d044958bfafa675fc0d2fff458d78040000",
    ],
    [
      "ETag",
      "al5yF/BD5urYQF4RH8WlPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1605334902709"
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
      "92414fc2401085ffcb782db108146dc2a1685512408472308690a59d42b1edd4ddad0409ffddd98a68d4442fedccf49bed7bafddc1539247e0c222593e9728b7274bd4f7a618a32a53adf85650ae102c402d964cda53ad7cbb1efa346ad4370fa75bef75e17b9d0e132a5c6126c0dd419c601a29701f77908b0c792da4b4ccf279d559a0b785194e82716f78c37d4691e987d37edfebf67dd85bc7c5486831aff87faccdf616ac6931c61825e6211a2d85a43586ba676c2a911529d61495324405155c3d584a2a0b21896a3ca939ed5addb15b8d46f3c23e6bdb170ca6140a9d50ceec74c2fa409316e99836ec121c066455b2e1b8babef038892a23a6ec0d03a759e9fb0ab0b4384971fe37c87a57823fc3077688e03b27322a737da4aefb77de6fc771a69f475d7981ff83509a933a22416fe04f026f3032dcece0bdbbd5a8469238488526c3badd3c6fb51dfb3dd64b3251f37b5c2d4bb42014fc77dc261adc58a40af76feabcef2d7b020000",
    ],
    [
      "ETag",
      "0UtsE01cEoP31wY/yAzbEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1605334902709",
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
      "6b",
      "4f",
      "db",
      "30",
      "14fd2b96f705a4be6859a19d10eb23db22daa424290821d49ac40986240eb68354a1fef75d3b2d5dc7c63e4faad4d8f79c73cf7df8153fb13cc27d7ccf92e7928ad5a7477e8f6b982a92c06d6b70e1ae56a361362c68c7ed91ab71989e24676780609a254956a4b42e7929422afb73bf91085e1644705e07a17af7b47ed46d7dee748e7badf649ab073c49d378c2f227603f2855c87eb3b9cddd48384f524a0a261b21cfdeee9b2fed6621f8230d956ceea76c4216d9fc38e979ca43a218cfcfe63e182825150b9a119682851d33baffba2fdd60246b24007e61212561c8cb5c695b2011f23c6649298c2aeebf6263f3970fec5b136b14a0913b77828325c93479798888448b85a0b24c550d2da1a698a574c1a26515299ed037cf9d42041c3c1049e5125dffb03c0ba1897b6d79074ba9c023084dec0b0b9da3813346fb3ab683e68e63f9013a383f44df3d773e43c39b3d0c1410d19880873151904469e351f569eba92a2a1580362db7df0f1aaf759471c1942ed67602cb1b8c02fbcaaafa3ba1090957fe33743826a9a480268264545131e51105caccf5edc0769dc10418a669b32d42e2feedeb8e10ac0aaa0d2af38f037b0ac50da633bc5ed7fe0e1b78dee006a4891064f55b0cec768f357dc7be22696920066f4e958d972a808fb0ceb63db5f1fa6e0dbf1a867dabd4f1e5dcf26e7075e5d1980a9a8746f283361ab009fcf3d96c7718b0b0c59006364131a9582875925050130e5866ec6ed8ddd669a7850d58a877b15ebbab9f7a1efd31b2c9511a7d2a04179e595c7d846cd2786139f484459766edf75c3e6fae322a2549b4bcc3514654f8c0f2044996e4a02d288ab9407199879a566db9b9222229339a2ba48726fbe86dee0de49745c185a2d14e0500d503f103cf76be1f7ed91c873781e5c3b3",
      "53e8f6a87fdabed3459952aae9febf65dc55c3d17ec6ae63c136ff0459f0a629ca050000",
    ],
    [
      "ETag",
      "0AKOyyCBmBpe3O9aVDcl7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfc97282300000d07fc9591d098bd21b0905ead6865008bd302c4191a21064edf4dfebf4fdc1fb01719af2b68d1ef792dfc00b9862a8afd2d5be5e2395e4d8b3d12c754788963b88852245569dece4f4e368dcbeae6f9c0be5b26cc3b13fb6b43b74ecb42d684ccc50343354af0441bf2f67d9b810cb4c5858d213f49dba1b0359df0fdf8e4cb734d78869f6c53eeccb311e2b2933df13d44cee546168704da95cea4dccb299c702674d76d8324677f3f97af7991bf658ba2ea3c13e2736091a710a1cbcc968764854a4e5676f28f5266bb0cc0e22ce8699196001f8581782b751f1cccaaaae2fc0ff3c7a4c357ff6118f0517e0f70f5129f70218010000",
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
      "Sat, 14 Nov 2020 06:22:41 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-69-1605334902709",
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
      "0000000002ff85535d6f9b3014fd2bc87b6d12124a4822456b94d22e52201b21adb66942c65ca85bc0149b745595ffbe8b69ba5695da276cdf73ee39f7832772c7cb84cc48ccb3fb06eac72fb72226270414cdf095efbdbfb79beb62f1cbbbb4d70f629384f7978bf91c11bc65495a5439f4a4686a0672b6dbf6b35a3415ad85e861a2de78da1b8e4ddbb24ea7e6c831a7c89390a76b5ede21fb46a94ace0683a3763f1322cb81565cf699285ede07fbd1a0aac52d3025076f2507a822071f8b7ecd05a38a8b72bedba28146421d4141798e16fe3393f8ec6dea3ea7453f43f09e33a08c89a654ad2d4cc14499f2aca97556327b22dae6ab03d9ba6b77191a4ce44d5146252de0c448a8a2917aacc0b808369eb1f22f3681b708571b3fda2ebfb9dea2bfdcac779ebf35aebfb9816b281ae7a0b9c6dc38d3371f2fa89f8054bcd4ea61fbdc2a3f3768f57e2c2d01a52574c1c831c7743831a7711a3b2c9d58769c9a10c793d8b1a9159b6c7a0aa7490c14795a54b368294acba2c3d48671648f2693e8d49a8c223a1925118c1d2b1e0e13d3193be470421e6aaee09ccb4a48de75885c07abd08dc260e72f17a1ab4b486993abf3ce585bc06b8f0a0b44d007351dda2817a8d4b67be5876eb05886ab2bb79bf01a32ca1eb7f738e394e612104d6b6c9e82da1309368cf80bcf3d47b09ed8f7635092d9ef27d2f6bc75f1aae52ff41007d8da55fa4bb661b0f22fb59d23e28ae68d86ecbb03a9d0f20dd686ae0f7f10894bda65213f766ef093744f01a45043c93e9f268275e0d37fedb8f888c5d54719a9f08ebbc3642bc26ae87688eb728fecf17064db44836bf52e6639ceb16b6d8e36231450aae78abac5c7423bb146be803088e3f775b70eff0043d8e89f78040000",
    ],
    [
      "ETag",
      "ivMxjOWmAZMG5LwoOdTqGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1605334902709"
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
      "4f82501486ffcbe963b8301585cd0f9a566c6686b8b69a735738200a5cbaf79273ceffdeb964d6aaadbec03987e75cdef7853d6c923c04079649fc52a2d89dc5a81e74e1a12c5325e956f05c2218808ac544da0dcf629df6a673b14a1a4fb27c3c1f2c67db6e970819ac3063e0ec214a300d2538cf7bc85986b416f0b4ccf245d519a076851e4e7dcf1ddf509ff150f7e3d968d4eb8f8670304e8b21536c51f1ff589b1f0c58f3a587110acc03d45a0ac1d7182857db942c2b52ac495e8a00255470f52016bc2c98e0bc46939a65d7ea96d96a349ab679d9366d02531e3095f09cd8d994f481e28aa51edf924bb00810554986a3eafa4ae324ac8ce8d21dfb56b3d2f71520695192e2e26f90f4ae187d860fec18c1778e65bcccd589ba1eddf77e3b8e32fd3c6ad0f3873f08a928a913e2bb77c3a9dfbb9b686e7ef4dedf299413c12948893ac3bad9ecb4da96f91eeb15d751d37b1c254a342060f477dc260a9c88a5120f6f1ea0c7907b020000",
    ],
    [
      "ETag",
      "93R6a87k8/hi3ZsuW+DbUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1605334902709",
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
      "5d",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "96",
      "f70252dbb48596d109b10219446bd392a4b00aa1d6244e302471b01da482fadf77edb4741d1b7b9e54a9b1ef39e79efbe157fcc8f208f7f01d4b9e4a2a169f1ef81dae61aa4802b72f2fde25ef2c3ad1386877f7f383c31ffc7ad13f3a0204d32c49b222a575c94b1152d99bf88d44f0b22082f33a08d50f9af556b7d9d9dbdb3f6cb60f9a87c093348d072c7f04f6bd5285ec59d63a7723e13c492929986c843c7bbbb79edb5621f8030d95b4b6535a90455a1f273d4e794814e3f9d1c40703a5a4624633c252b0b06146775fb7a51b8c648d04c0cf2ca4240c79992b6d0b24429ec72c298551c5bd576c6cfef2817d7b609f06e8743471839d39c93479be8b8844b399a0b24c550dcda1a698a574c6a27915291ed1376f34840838b82792ca39babeb03d1ba1c1e8daf676e6528147101a38df6d748cfaee19dad6715c34715ddb0fd0cef12e3af74693313a996e61a08088c6043c9c11054994361e559f8e9eaaa2520168d572e7fda0f1524719174ce9621d37b0bdfe69e05cd9557f073421e1c27f820ec7249514d044908c2a2a863ca240198f7c2770466e7f000cd3b4f11a2171efe67543081605d50695f9c7813384e2fac3315e2e6b7f87f53daf3f0569220459fc1603bbdd7d4ddfb0af485a1a88c19b5365e3b90ae016d6d9d6a7365ede2ee157c3b06f953abe9cd8de1457571e8da9a07968243f68a3019bc03f9fcd7a87010b5b0c69601314938a855227090535e18065c6ee8add6d37f73ad880857a176b75dafaa9e7d11f23ab1ca5d1a74270e199c5d547c8268d1796434f587469d67ecbe5d3ea2aa3529244cbbb1c654485f72c4f9064",
      "490eda82a2980b149779a869d5969b2b229232a3b9427a68b287dee6de407e59145c281a6d5400503d103ff01cf77cf7cbea78320d6c1f9e9d4237addee7f6ad2eca94524df7ff2de3b61a8ef67336726dd8e69fe412f16cca050000",
    ],
    [
      "ETag",
      "zzRQo5y5dPT264n79XoWyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d1",
      "76",
      "43",
      "30",
      "00",
      "00",
      "d0",
      "7fc973f528aacdde828e2d74481ded5e729450d2a526a5d8d9bfaf67f70fee0fc8f29c4949ef37ce04780153a6c165bec4ad6aada3bcd8b7d69be8838a1a6b4cc43bbfd85cddc417a3206a126207911d0fa62b4e1a43cc916a7187da7641b5aa71dd934fb49b3279df65a8d2edeaf3bc4fbf067fce5624e4d1309a38d55425354f018443aca016414b879b92f6664922b80b9072b33fcaf42cab701279b5d5f6865d5562571f0ad77394b85f698fce475933da0731f84e5f3aae274f1d4efaa37bd65f07e96ef0eca5d783e448a2e4d83ec002b0b1ad3b2669fdccea6b0817e07f4eef53cb9e7d8b651debc0ef1ffdd5cb6518010000",
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
      "Sat, 14 Nov 2020 06:22:42 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-71-1605334902709",
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
      "000002ff85536b4fdb3014fd2b91f71168d27752a91a550950ad4d479a82a6698a6cf72618d238c44ea70af5bfefc6a10c84049f62fb9e73cfb98f3c9347916fc88830913e5550eebf3d48464e09689ae22b78456fca7fec4fece264b08b2aa7935c1537e3312244cd52745b6470a664557250a3f5aa9596b22a6829e519263a1bb6cfda03a7dfedf63ca733743ce429c892b9c81f917daf75a146b67dd46ea552a619d042a81697dbd7777bd7b18b523e00d7ca7e2f69a38ab23f17fd9e494eb590f978bd4203958232862d15195af8cfdcb0f3f7a95b826e5b2982778203e55c56b9ae6d610a2ef344a45569b292d1333136df1cc8ca9ffbd3c8e232abb6799cd32d9c5a1baa69acf7055897e17261cd82cb65b89844b36510afa6d7fe62d29a2ee7eb45b0b2eeaefdd0b734651918ae35b6cecd2dc00bea6f4069911bf5a87eae955f1a34fb38969a80d20a9a603c7406b4ed3a1e4bd890276eb7cf12071873d9b04fbbcce15e0f7a1b06147946d4b0682e73680f122fa1490cded08d7b6e87c60c49b1d7e794b9e0f43de691c329f95b0a0d1742155289a643e42e9c457e1c85eb603a897c534242ab4c5f34c6ea02de7ad45820823ea9e950478544a5baddb320f2c3c9349addfacd84e79052be5f3de18c139a2940342db1791aca85dc60c3483059f817083613fb790c2a32fafd4cea9ed72edeb4fc951ee1006bbbda7cc92a0a67c195b17344dcd2ac32905d7320055abec7dad0f5e10f2271499b2ce466ed87bf48f314420225e4fceb6922d804befcd78e8b8f585c7d94511aefb83b5cd522bc8466878429f7c81e747aae4b0cb8d41f628376fbd8b53a479d11b690eb978a9ac5c7421bb14abd823088e30f4cb70eff004ee849b578040000",
    ],
    [
      "ETag",
      "e9p4CcKy+/p+6vTu02fGpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1605334902709"
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
      "c2401085df65bc2db1c89f34e1a2280a09209602318690a59d4271dbadbb5b0d10deddd98a68d4446fda99e937db734ebb87a7380dc18165bc7ace516ecf56a8ef4de1a1cab95674cb44aa102c40cd5644ceb259e897a7152ebb0f199b9def76c174e3b65a44a8608d0903670f518c3c54e03cee216509d25a20789ea48ba2b3406f33331cfb5e6f784b7d2242d30f27fdbedbee77e0609d1643a6d9a2e0ffb1363f58b0114b0f2394980668b464526c30d03d6353b124e358522297012a28e0e2c14a8a3c635288124d4a8d72a95cb76b954ab5695f34ec26815c044cc722257632267da08566dc13afe412ea04c8a224c351717da1711c16464cd91bfaf56aa1ef2b40d2a298e3e26f90f4ae197d860fec18c1778e25224ff589bae9dfb9bf1d47997e1e75edfa9d1f84d294d409f17b83ced8770723c3cd8fdedb5b8d6a240505a9d06458b6ab97b546dd7e8ff54a98a8e93d8e96395a1030fa3bbab10627625ce1e10d9e0156697b020000",
    ],
    [
      "ETag",
      "WpWdT1V3lrHYpaW/zzcVjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1605334902709",
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
      "54",
      "7f",
      "4f",
      "db",
      "30",
      "10fd2a96270448fd4569415442ac4060d14adaa529ac9a50e326d76048e2623b4815ea77dfd969810ec6fe9c14293edfbbf79eef9c3cd3079ec7b443a73c792c402ebedc8b29ad50d02cc15d7915ec5fce1acd9f3a6afbd709b0d6d1e538393e460437558a65f314aa4a143202d5190d6b8914c59c4921aa48543d6c56f70e1aedfdfdd651a379d838c23a05e9acc7f307acbed37aae3af5fa5abb960891a4c0e65cd52291bdecd79f9af5b914f7106955df94aca38aaa7f2e7a928a88692ef2e3d1100d140ae40432c653b4f05a194fbf6e52d738cb6a09829f78042c8a44916b630b292291cf785248cb4a3bcfd4da7cb3a043a7e79c05e4ac3ff2829d9065a638dc254c91c944822a525d21219e69c65398f0382c33f30772e1f7af30830eee980215929b6f8eef10d2ebdf38fe1ba69efbdd2127a4eb9d934d22d72323cf738601d939d925977e7f3420a7e30d0c9e2086194313e74ca38a36cee372e99ab16a501a41ab9ebbef274d9726cb85e4da9cd6f502c7ef9e05eeb55336b807098b16c3476cf18ca50a10cd24cb4083bc123160c9a03f7403b7ef757b5861bb36582314edfc7a7e2d0816733006b57dd38b5ebf1b1cb4ac8335e49aa585c53c950bbab5576bb7b6e87259f93b51d7f7bb63146752b2c51f393c9091f850c3e26d541a5d6bee51a3b68e9a7479bbc4a742f14a96ecf4c7c8f1c7b4dcf2610612f2c8527ed2680bb6897f7e59eb6b8e58bce828a334c64af348199148824d073cb37657d507fbcd768b5ab0d4ef73874df337c8e30f332b8dc2f2839442faf66e9b10d594f5c273ec09fe2d2a3403a558626846399e44019ba640ecf0c94b9f4918129e1333081206e38133594d3cac905316935814a6caf6b943ca41afa3ed32dc36c6ac9d7242ffd7ca6dd924a3",
      "75def71cbc55bf0191be48fe75050000",
    ],
    [
      "ETag",
      "rMT3Gf02Xtc5RVgea49GYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfd97243501800e07739d7918904e3f4aea825966014ed8d3939fe2842ec5ba6efde4cbf37f89e88500a7d9f0c8f126af4865672c47bba379b83c47b690ec2d18d43dd575493195c3cf95a4c6eb7d6257335369a1168ad1b0d0a88b5038e89af7cbfccb63a7ccf3567543c57e05475f075fce89c44e896d6227e5a328025e33d1c8c54d71aea4198ad336036483d4db987d385b38ff29d3aea14370a2e5527e004bb78a4f18f4e36dae997b3605b9f99cbb2e272da2c8b5580b5d983bb726a9ee7c5580526c44c298b735448edd7c655d19901baceb29da11d82a5c93be893fc953df118efd0ff3c19d6065e7d0948071dfafd03dbc9c8c018010000",
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
      "Sat, 14 Nov 2020 06:22:43 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-73-1605334902709",
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
      "000002ff85535d6f9b3014fd2bc87b6d020d496822456b96d03555425620adb66942c65ca85b82293699a22aff7d17d374ad2ab54fd8bee7dc73ee074fe4811709199398678f3554fb2ff72226270414cdf0d5bcb4c3f4eef4d7fc2ad8cdaebeedf60eb5ebebc90411bc6149ba2d73e84851570ce4781374b34ad425ad84e860a28e63774e87d6c0b6fb23abe75823e449c8d3252f1e907da75429c7a679d4ee66426439d092cb2e13db977773d733cb4adc0353d27c2b69a28a343f16fd9a0b461517c56413a0815a4215c196f21c2dfc6726f1f9dbd45d4eb7dd0cc13bce803226ea4235b630051345cab3bad259c9f889689baf0e247097ee2c3498c8eb6d1115740b274642158dd4be04e3c25faf8c8577b1f657d370b1f6a26076e9aea6ddd97ab9597981717be9faaea1689c83e61a13e35cdf3cbca07e0252f142ab87cd73a3fcdca0c5fbb134049496d00623c71ad2d3336b14a7b1c3d2337b10a716c4f159ec0ca81d5b6cd4877e1203459e16d52c5a88a2cf8643cb49936860b324ea3318457460c551d21ba5d4eaf51cca6c7238217f2bae60ce6529246f3b446efd45e846a1bff166d3d0d525a4b4ced5bc35d614f0daa3c20211f4414d8726ca052a35ed5e78a1eb4f67e1e2c66d27bc848cb27df088334e692e01d1b4c2e629a85622c186116fba72e708d613fb710c4a32fefd449a9e372e5eb5fc851ee2001bbb4a7f4910fa0befbbb67344dcd0bcd6905d7b20255abec3dad0f5e10f227149db2ce47ae3fa3f49fbe4430a1514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c81eda03c7261a5ca9773167d03f76adc9d164842d14eab9a276f1b1d056ac962f200ce2f83dddadc33f2840150d78040000",
    ],
    [
      "ETag",
      "/H3Tfh1ZDJSvCJBvy7a3uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1605334902709"
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
      "4ec2401085df65bcb48de5af48132e0011490011ca0531842cedb4b4b6ddbabb9520e1dd9dad88464df4a69d997eb33de7b407788a321f1cd844e17381627f11a27ad0c50c65912849b79c6712c100542c24b2082eedc5950cddca609ef7e265fc5aed2e77ed3611d2db62cac039401061e24b701e0f90b11469cde3499166ebb23340ed733d9cbbb3e164407dca7ddd4f16a351a73beac3d1382ffa4cb175c9ff636d753420e69b19062830f3506bc9058fd153436d53b2344fd094bc101e4a28e1f24128789133c1b94913b359332bb6d5a8d5ea2dabdab45a0426dc632ae219b18b39e903c5154b667c472ec126409425190ecaeb0b8d23bf34a2cbe1c4b5eba5beaf00490ba204d77f83a477cbe8337c60a708be732ce545a6ced4ede8bef3db7194e9e751371db7ff83908a923a23ee70dc9fbb9df15473ab93f7ee5ea19c0a4e414ad41956acfa75a3695befb1f6b88e9adee32851a0011ea3bfe32e52e0042c91787c03451e185f7b020000",
    ],
    [
      "ETag",
      "uf+6U/sgT1GSpCjYjz2BYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1605334902709",
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
      "54",
      "61",
      "4f",
      "db",
      "3010fd2b962704486d4321945109b1ae642c5a9a74690aaa26d4b8891b0c495c6ca75b85fadf777628ac82b18f9322c5e77bf7def39d93477ccfca1477f18c650f1515ab0f777c861b982a92c1eee5f2b24f06ab81b0c3f6afde83eddd95b7cecfb33340305d2549b1c86953f24a245476c7a3562678b52082f32610354fec66bb73707c74649f1e1c9e1c9c429da4f9dc63e53d54df2ab5905dcbda68b732ceb39c920593ad8417cffbd6f2d05a087e471325ad6d490b54a4f5bee879ce13a2182fcfc6233050492aa6b4202c070b2f95e9ecd336758b91a2950178c9124a928457a5d2b68022e1e59c659530acb8fb888dcd3f1678e4784e3f42fd60ec477b31297471bc8f8844d3a9a0b2ca5503c570a639cbe994a5719d59dca32f6130800c38b82592ca185d7f754207212fb876c2bd18a0fbc80f22e4b9df1c748e7afe05da26727d34f67d6714a1bdf37d741906e321fa3cd9c2c009523a2760e282285051da795a2f5d3d5645a502d053cfddd793c66b9d655c30a54febfa9113f6fa917be5d40df6684692d5e8015a3c27b9a480268214545131e02985926130722337f07b1e5498ae0d370889bb3f1e5f0aa2d5826a83cabcb556c736fa1bc015c92b8358d60bbcd33edec1eb75e3ef24bd30ec4d40980841566f0bbca960f026aa4d6e14db58ab6da243bcbe59c3d3c0701d6b76fc7dec84135c6f85744e052d1343f94e930dd824fef9556dae3860e192838c54104bc512a94512414d3a6285b1fb54ddb1eda38fd880857a9d3b6eeb3f4199be9979d2a80c3f15828bd0dc6b1d829a345e58093d813f450317544a92699a7109279194cc728acce0d1739f511c2356223d08144793a13335c3881be8334921a33a36324dee223de3cd7a5707bbda91f1518fe63f79b8a9dba2452e02df817bf41b9cf1be",
      "b263050000",
    ],
    [
      "ETag",
      "GvGCaMyMr4R1xAq4LjnhEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfdb6e82300000d07fe9b3181041d85b6b15182092858bbe10c4a674456eed1431fbf7999d3f382f50561511a2901d272df800cf72652faba5dfabc888c94faa30f9b846a1d599799b67693db73493b5ba861bab9e605439c6ea86b4f89186ea34584173f40294313c36fa3da3e408c773e7ebd8d1f2526bbff746121af2bab6a45923d72d671e5cba41c754110dfa8c7a1a6bd2deb951c2592c333a4c3e371c6fda9e52ee9baa35abc38909cef63615c4a3e68cd5607d287708ef15549cd96d0b0b18a3d3a57235c2539cecbe5aeccc7731ea0d743787182c00997a361251b07756376c7b01fee7857cf6e4dd47a41cc9087eff003fb2c92818010000",
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
      "Sat, 14 Nov 2020 06:22:44 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-75-1605334902709",
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
      "000002ff85536b4fdb3014fd2b91f795b6e9234d5ba91a5509a35a9bb22405b1698a6cf72618d238c40e0850fffb6e1cca4048f029b6ef39f79cfbc833b915f9964c0813e95d05e5e3b71bc9c811014d537c3d9f3f5dfdcc96fcf75999452339e8f6fc5c3d4ca78810354bd15d91414bc9aae4a0269bb09d96b22a6829650b13b55ca7d51dda4ebf3f18db3dd71e234f41962c457e8bec6bad0b35e9740edaed54ca34035a08d5e672f7fadeb9ef758a52de00d7aaf35eb2832aaaf3b9e8f74c72aa85cca79b100d540aca1876546468e13f73cb8edfa76e0bba6ba708be171c28e7b2ca756d0b5370992722ad4a93954c9e89b1f9e640426fe9cd238bcbacdae5714e7770646da9a6b17e2cc03a0dd62b6be19fae83d52c5aacfd389c9f79ab597bbe5e6e567e685d9e79816769ca32305c6b6a1d9b9b8f17d4df82d22237ea51fd5c2bbf3468f1712c3501a51534c1d8b587b43bb2c72c612e4f467d872536303662ae43fbcce6e3010cb60c28f28ca861d15ce66387baee808de36eb7cfe341c2584c1965716fd8034ec11dd9f690ec8fc84329349c085548259a0e91cb60117971146cfcf92cf24c0909ad327dd218ab0b78eb51638108faa4a67d1d151295ea762ffcc80b66f36871e135135e424af9637887334e68a600d1b4c4e6692857728b0d23fe6ce59d20d84cecfc105464f2e799d43daf5dbc69f92b3dc201d676b5f992300a16fe0f63e780b8a0596520f7cd811468f91a6b43d7fbbf88c4256db2905f1b2fb822cd5300099490f3afa7896013f8f25f3b2c3e6271f5514669bce3ee70558bf0129a1d12a6dc037b38701d9b1870a93fc4468e73e85a9da3ce083bc8f54b45cde263a18d58a55e4118c4f1fba65bfb7f6f434ebf78040000",
    ],
    [
      "ETag",
      "PCzYKlLcZHrlT8o412Nnsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1605334902709"
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
      "0002ff8d925f53825010c5bfcbf68a13e5df98f101cbca46cd109f1ac7b9c2a218b078efa552c7efde5e326baa997a81dde5b797730eece029ce4270601e2fd605cacdc902f583293c5445a215df72ca148205a8c582c954455bef2e6ecd27b45daf5e717baa074db7dd6642054b4c05383b88624c4205cee30e329122af05941469362b3b0bf42637c3b1eff58637dca7149a7e38e9f7dd4ebf0b7bebb8180a2d6625ff8fb5e9de8215cd3d8c506216a0d1924b5a61a07bc6a612699e60455121035450c2e58385a4221792a8c2934ab35e396bd8f56ab576619f37ed0b06130a848e29637632667da0498bc4a31776090d066459b2e1a8bc3ef3380e4b23a6ec0dfd46add4f7156069519ce0ec6f90f52e057f860fec10c1774ea45464fa485df7efdddf8ee34c3f8fba72fdee0f42694eea88f8bd4177ecbb8391e1a607ef9d8d463592c4412a34199ed9b556bdd9b0df63bd241335bfc7d1b2400b02c17fc76dacc18944a270ff06bdfa3a717b020000",
    ],
    [
      "ETag",
      "msfzRJi8bUozqjxez/tM7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1605334902709",
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
      "0b",
      "4fdb3010fe2b912724d0fa489bbe25c43ac858b492429a82d034b5b6eb64a6495c6ca7a842fdefbb3814e8d8408a94d8f73deecee73ca225cf166880088fef7326379fee044115c4348e61f72678b8fabc5e7af262335ade2f44eb5cc67757c7c780e0054be17495b0aa12b9a44c0da6935a2c45bec252882a0855bb9d6aa363b71da7d5b79b5dbb0f3cc59268c4b325b07f6bbd52837a7de75d8b85881386575cd5a8489ff7ebeb667d25c51da35ad5f72debe0a2eaef9b9e248262cd45763c9d4002b96272c652cc1348e185b9205ff6a56b1ca7b518c06b4e19a654e4992ed202092ab288c7b934aa68f0884c9aaf3ed0c41db9a7a1753a9efae1e11ca705797e646165cd6692a93cd1156b0e35453c6133be989791d5d2fa168c2f200219fcc68aa9b975f3dd0d5ccb1a8d6fdce0f039005afe38b446de0fd73ab186fe99b52fe7f9d6d4f7dd49681d9e1c59e7c1787a697dbdddc3401d0ba634cf4c152126092b2a786ab4f7f6780b02d6605e06675dbb831b3dbb4f22d2a551cf6993c86684f448b78d1d62d37e8bb5168461e0e942ddb07026b27ebb8f6914f59a6dead8cd88d8dd76b4b09b8c50429c46b34f08761cbb85d1b6821e24d7ec8cab9550bcec360ca517bab33098faa7c3d0356544183a7a56265714f13a4f0d4502e89dbab645940b702a8ecef34337189e86deb55b4ecb88c5986e26f7302f114e1403349638659ac90bb180a6a1cbf1c40bbdb13f1c01c38cc0e50ea1d0e0e7e30b21dcac4c97b579a3491878feb9496087b8c6496e20ebf2031d0889b303b4dd56feaf330c82e12d786329f1e6af18d4d36915f47f7818bc599579ee3c1ba870dbad9a68fb6b0b4f05c1f52ad5d1d5d40d6e51b915b0884996d18fe707c026f0e15f627765010b97166c9486354c2b55850995ac9c5a9e9a749fd89d76a769fe311a4bfd26d66d3bbbe329340a4596b24c3f",
      "55545e59d3a82294ab67100461d87c7352db3f3c1dde1f32050000",
    ],
    [
      "ETag",
      "WRwQ+vkIrMyLkqdo4GrgjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1605334902709"
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
      "90",
      "4f",
      "6f",
      "c2",
      "30",
      "0c",
      "c5bf8b776db5f25f20711853c7100c8d324e1342696a4aa1adbb24654388ef8e13a689e32e89f3fcb3f55ece70c8ca04061067e9578deaf490a259d822425de746f35551a9113c40235226a3a97caca7f1aa7899ff4ce2dddb38c170b9180e99d072878580c119b619e68986c1e7194a51208f6d36ca6d64cc9c2aab4ce61fe1388c582828b1c27c359b3d8d66215cbcbbb1eaf0af91f5c5833dc5116e516129d1baa814ed519a890da84551e5e86baa95440d0e768d54515d0945e4b3e2f7ba7ea31b745aad763f68f6823e83394961322a995d2dd91b1832228fe89bf3419301e54a8eba75e791e58ecb707480b576df6bfff51ab6b7fe5d383a19d4ef8ad89d466b2cb8997c266bdc7020a36af4400afee5d7ccdcde972b86c18526c2010000",
    ],
    [
      "ETag",
      "RKc/uKbUmFNxIbhMGdeESQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb642d8e1504d29d40e5a33866908a6e3229261093460d5a094eef5ea7ef06ef09485dd3aec3b7b3a00abc0343a6705c8f97974930436c1b4ea3536aa175fb813c920b154a2bddfb791648d154910907cceb1d8d61bf999c872d8ecbec2ca34f6412dd6fee45a6fbf67bbe34c65b31b50ea91dab023391b49d5871e5ba7959745fc7f4d8a7dace0b5a643b3f4d226b32f8316a0e9230ff540d7801ab5265cd82394e4319e70fab224e4ed76fd2f9819b100fbbb0258f5aa17b7ff3e0756f4b6ecd65698b405f99700fc4a4aea075d9223002b4bf704d3bcc5f597b06e108fccff1cd5ce8ab1f50a2a906bf7ff007460718010000",
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
      "Sat, 14 Nov 2020 06:22:46 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-77-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda242490a714ad19a52b52423620ada66942c65ca85b8219367da8ca7fdfc5345dab4aed276cdf73ee39f7c113b9e5654a1624e1f9df06eac72f372221270414cdf1d59c07a633a4ceec61f770cfbdd928cacebfdd2f9788e02d4bd27d55404f8aa6662017bbb09fd7a2a9682d440f13f5a6d3de70628e2dcb9e9ba3a939479e84225bf3f216d9d74a557231181cb5fbb9107901b4e2b2cfc4fee57d70371a54b5b801a6e4e0ade40055e4e063d1af85605471512e77211a6824d431ec292fd0c27f669a9cbe4ddde774dfcf117cc71950c64453aad616a660a2cc78ded43a2b593c116df3d58184eeda75228389a2d9977149f77062a454d1583d56609c07db8de1f9e7db60b38abcad1f87ce85bb59f59ded7ab7f143e3eac20d5c43d1a400cd3596c6a9bef97841fd14a4e2a5568fdae756f9b941defbb1b4049496d005e3a939a1c399394fb264cab299354e32139264964cc7d44a4c36b7c14e13a0c8d3a29a454b51da133b998d198b937432896d6b0cf1cc4e47b1391db2d4a269369ecfc9e184dcd75cc119979590bceb10b90abcc88da360e73babc8d52564b429d45967ac2de0b547850522e8839a0e6d940b546adbedf9911bac9cc8bb74bb09af21a7ec31fc8b33ce682101d1b4c6e629a83722c586117fb571cf10ac27f6e3189464f1fb89b43d6f5dbc6af90b3dc201b67695fe92300a3cffbbb673445cd2a2d190bbee402ab47c8db5a1ebc31f44e2927659c8cf9d1bfc22dd530019d450b2cfa789601df8f45f3b2e3e6271f551462abce3ee30d98ab01aba1de2badc237b32195916d1e05abd8bd923ebd8b536479b11f650aae78abac5c7423bb146be803088e3f775b70eff00786c641478040000",
    ],
    [
      "ETag",
      "09R0C1aC8xUxwiI82TfFBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1605334902709"
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
      "df657a8b09d61f94c40badb63541ad88e94563cc0a03621716779736c6f8ee9da5d6366d93f60666866f96730e1ce139cd2370619326fb12e5e12a413d37858faae45ad1ad10b942b000354b883cc4319fab9dedcf1f959f0f71b6ef0ceca4d72342855bcc18b8478853e49102f7e90839cb90d642c1cb2c5f579d05fa5098e122f0c7d33bea3311997ebaf4bcfec01bc1c9ba2c464cb375c5ff636d75b26027363ec628310fd16829a4d861a8c7c6a66259c1b1a64429435450c1d583448ab26052881a4d6a8e53abb7ed56a3d1ecdad78edd25908b90e954e4c42e17a40fb4d08cfbe2955c429b0059956438aeae2f344ea3ca8829c7d3a0ddacf47d05485a9c725cff0d92de2da3cff0819d23f8ceb14c94b9be50b7deacffdb7194e9e751c37e30fa41284d495d90603c192d82fee4c170abb3f7c141a37a908282546832acdbcd4ecb69dbefb1de081335bdc7d5b2440b42467fc77daac18d1957787a037bfd22017b020000",
    ],
    [
      "ETag",
      "yfflQsj0RQWsRnDeOq8B0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1605334902709",
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
      "0b",
      "6f",
      "9b",
      "30",
      "10fe2bc8d3a44e4a1302794b5597a5ac434b494748aa6a9a12db31cc2b606a9b4e5995ffbec3346db36e9d8404f67d8fbbf3997b74c3f30d1a21c293db92c9ed9b1f82a006621a27b0fbf3224b07783ef875ee2ce5241a176cbbbc4e4e4e00c12b96c25991b263254a49991a2de6cd448ab2c0528863103aee0f8edb3dbbebba9da1edf4ed21f0144be329cf6f80fd5deb428d5aadbd7733112249192eb86a52913deeb7ee9c5621c50f46b56a1d5ab6c045b55e373d4d05c59a8bfc643187044ac5e48a6598a790c2137343de1f4a3739ce9a0980ef3865985251e6ba4a0b24a8c8639e94d2a8a2d13d32693efb40736fea4d226b325b04d1d11a671579fdcec2ca5aad245365aa1bd61a6a8a79ca567cb3ae23c58df5319c5d400432f88e15536bebea93177a96359d5d79e1d16300b48259644dfdcf9e756a8d8333eb50ce0fac451078f3c83a3a7d679d87b3c5a5f5e1fa0003756c98d23c37554498a4acaae0a1d1fecbe3ad085883791d5cf5ed1e6e0fec2189499fc603b74b629b113220fd2e76894d871dd6d9108681a72b75c3c2b9c887dd21a6713c70bad4b59d98d8fd6ebcb11d4628216edb1912825dd7ee60b46ba09f926b76c6552114afbb8dae423ff25651b80826e3c83365c4183a7a56275715f13c4f0d4502e895ba7655940b70aa8ece0f222f1c4f227fe9d5d3326509a6dbf92dcc4b8c53c5008d25ce9866f2426ca069e87236f7237f168ca7c0302370b9472834fa7aff4488b685e9b2366f348f423f383709ec114b9c960672577fa0b742e2fc2ddaed1affd61987e1f81abcb19478fb470ceae9752afa5f3c0cdeacea3cf79e6d54b9ed570eda7ddbc1d34070bd6a75f465e185d7a8de0a59cc24cbe9ffe707c026f0dfbfc4feca02162e2dd8280d6b98",
      "56aa2a132a593db53c33e93eb07bfd76a7870c58ea1731d7e9ed8fa7d2a81459c672fd50517d654da3aa50a91e411084610bcc49ed7e03c567a2f732050000",
    ],
    [
      "ETag",
      "wMml8aS8zG2VrCTApeyVYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d905b6bc2401085ffcbf4358178ab8de043d34a1b085ad32a8522b2c6318db94cdcdd2822f9ef9d5d4bf1b12fbbb367be19ced90be459b585116cb2f4d0a03cdfa5a8e7a688513585567cd554290407508b94c92808caf0b07c9e9dfc78399b2e3fcb4e8ef3f19809957c63296074815d86c556c1e8eb02952891c7d66b693732a6cfb551c2e9c7e46512b350d2d608d345143d06d1045ae766acceff35b26a1dd8d326c61d4aac12342e6a497b4c7468022a51d605ba8a1a99a0020bdb462aa9a98524725971870f6ee7de1bf47a7ddfeb0e3d9fc18212a133aa985dbcb337d0a44511d389f3419701694b8ebab3e791e581cd70b480b176dbebfff53aa6b7fa5d189c35aa3749ec4ea131e65d4d3e9131ae3990960d3a9008fee5d74c5fdfed0ff91f627dc2010000",
    ],
    [
      "ETag",
      "LBBmIqVDOw9RVONVXm1keQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0",
      "bb",
      "642d4e25844f77a523a58011045a593118a37c04912440e8f4ee75fa6ef07e404108652ce7f78676e015c842b5d664edf72f368a689a380e54ae86a23517ccccc941d72e8dc78393cb85d79ef07dac5e977390da646394e37627e2c7adc4dd9cab66d0b8a7e5688ce9a0d48b1c3cc9745d8c5d287161ba9f0c710aef49a753de1ec773a2a525cc22bdd7dec494b8a7ec4b57cfee922835b6e18307a752d6b4edda8f7d14200b85a1b2c3acf81e37b10854180ef5e57deb90cadc8aa26f6ccc43b19f3d6235592d22e8cf9382fcec368115a0735f0d94e5d5330b9165adc0ff3ce7b2a7cfbe4d8b810ee0f70f1c6d99f218010000",
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
      "Sat, 14 Nov 2020 06:22:47 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-79-1605334902709",
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
      "6b4fdb3014fd2b91f795b679b54d2a55a36b0364b4e94852d098a6c8719d6048e3103b2084fadf77e350069b049f62fb9e73cfb98f3ca33b566ed104a52cbf6f68fdf4e596a7e8085189737835bfcdd7a7e7d7865b05c645f07d54f2eb057b9c4e01c15a96c0bbaaa03dc19b9a5031d944fdbce64d856bce7b90a837767bc6481f5a96edeae65877812768912d597907ec1b292b31190c0edafd9cf3bca0b862a24ff8eef57df0600eaa9adf5222c5e0bde40054c4e063d1af052758325e4e3711186804ad13bac3ac000b7f99dbf4f87dea3ec3bb7e0ee0074628268437a56c6d410ac2cb8ce54dadb2a2c9335236df1c50e42dbd79ac115e34bb3229f18e1e695b2c71229f2aaa9d84eb95e60727eb70358bfd759044f3336f35ebcfd7cbcd2a88b4ab332ff43489d3822aae36d58ed52d800be86fa990ac54ea71fbdc2abf34c8ff7f2c2d01a405ed82c9581f61c3d1dd344bc72473ac619ae9344d9d743cc456aa13d7a6f636a518784a54b170c94bd37486236b8c131da74e62dbd8485ce29a8963e9e690d8a9311c8dd0fe083dd64cd205131517aceb10ba0afdd84be27013cc67b1a74ac87053c84567ac2de0ad47090502e8839af66d9471506adbed07b117cee6b17fe975135ed21c93a7e81e669ce1425040e31a9a2769bde25b68180a662b6f016035b11f87a040935fcfa8ed79ebe24dcb5fe9310cb0b52bd5174571e807a7cace0171898b46411eba03aac0f20dd406aef7bf01094bda6541171b2ffc89baa79066b4a625f97c9a0056814fffb5c3e20316561f6484843bec0e11ad08a969b7434c957b608fc6aeadfe54896bf96fcc312ce3d0b536479b91ee68295f2aea161f0aedc41af10a82208c3f50dddaff019402115e78040000",
    ],
    [
      "ETag",
      "2BCOGKZ19pN1QNJ6noZDiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1605334902709"
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
      "8d92dd4ec2401085df65bc2d49f92bd0848b828890020a454d0c214b3b8562dbadbb5b0912deddd98a68d4446fda99e937db734e7b80a7280dc08655b47ece51ec2fd6a86e75314599c74ad22de3a9443000155b13d91dced56435ba7b7db0d2a43f6cbae67d65be6bb78990fe061306f601c208e34082fd78809425486b3e8ff3245d169d016a9fe9e1cc9b0ec67dea131ee87e3c775da7e3f6e0689c1703a6d8b2e0ffb1b6381ab0e5ab29862830f5516bc904dfa2af06daa66449166349f25cf828a1808b076bc1f38c09ce4b3429355aa5b265d6abd55acbac34cc168131f7998a784aec7c46fa4071c5e229df914bb00810454986c3e2fa42e328288ce87230f6ac5aa1ef2b40d2c228c6e5df20e9dd30fa0c1fd82982ef1c4b789eaa3375e54e9cdf8ea34c3f8fba74bcde0f422a4aea8c7883516fe639a31bcd2d4ede3b7b85f246700a52a2ceb06cd69af58665bec7dae53a6a7a8fad448e06f88cfe8eeb48811db258e2f10d35aba0077b020000",
    ],
    [
      "ETag",
      "CJUtObMVzX6nmGJ8L0W2Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1605334902709",
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
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "96",
      "f705a4be97d74e8895361bd14a02490a5408b56ee20497240eb68354a1fef79d9d765dc7c63e4faad4d8f73ccf3d77e77bc3cf2c8f700fcf59f25252b1fcb4e0735cc35491046e87f7433a18dedb136fde5ef0e0f462e15ede27676780609a254956a4b42e7929422a7b63bf91085e1644705e07a1fa49abde3e6a1d76bb07a7adce71eb147892a6f188e5cfc07e52aa90bd667393bb91709ea494144c36429efdbc6fbe769a85e00b1a2ad9dc4dd9842cb2f971d2f3948744319e9f8d7d30504a2aa634232c050b5b6634ffb22bdd60246b24007e65212561c8cb5c695b2011f23c6649298c2aeebd6163f3970fec5b236b10a0813b7682bd19c93479b68f8844d3a9a0b24c550dcda0a698a574caa25915299ed157cfbd820838782292ca19babbb43c0ba1917b67797bb388280a3a8e1ba091fddd42e7a8ef0cd1ae94eda0b1e3587e80f6cef7d137cf1d5fa38bc90e066a88684cc0c69028c8a3b4f7a8fab4f56015950a40ebaedbef678d573acab8604ad76b3b81e5f507817d6b552d1ed184844bff059a1c93545240134132aaa8b8e21105cab5ebdb81ed3afd11304cdfae3708897b0f6f5b42b02ca836a8cc3f1ef6030baf56b5bf23fa9ed79f802a11822c7f8b81d3a3034ddfb26f495a1a88c19b53e5e0b50ae036d6d936a70e5e3daee057c3f0da2a757c33b6bc09aeae3c1a5341f3d0487ed0410336817f2ecde6050316de30a4910ace52b150ea24a1a0261cb0ccd85db38f5b9dee313660a1dec5baed43bde879f4c7c83a4769f4a9105c78e6d9ea236493c60bcba1272cba318f7ec7e5cbfa2aa3529244cb3b1c6544854f2c4f9064490eda",
      "82a2980b149779a869d51b3757442465467385f4d0640fe99137905f1605178a465b0188559be1079eed7cdbffbc3e5e4c02cb877d53e8a1dd3be93cea7a4c15d560ffcb0a1eab919815701dbd023f0042600cb3be050000",
    ],
    [
      "ETag",
      "DXDeCDXIYRb1joT9BjOHXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7fd9e7c8605daa6f4211c4b884d017e3b2541b6c5dd64aa7ffde4ccf1f9c1f5054159ae77c19bfd0005ec15ef0cab13a3a983d89411ddb51cb7d108fe1b3765355f6bec141a6178a76cff5bfdda48c5a419fb5c71296b709cb50a5562c5e844694f5a5cc8748d1a097de64ef0517be29450d921b48943e65bb7a859fc2fd6c45391bf5e3d287ebbb9359d7d4e7894b192fe1745515674891b39130b186b750b01332b8ccb57484d4f4d16cd9b4d609e38ee2c3c01213c8093d9b2a47ea589bf40cb2585803c3f52d83db61c04aa4b437700088e26e4273de3db350549403f89fe7cb8ed1b37f42c58426f0fb07e42cdd5118010000",
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
      "Sat, 14 Nov 2020 06:22:50 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-81-1605334902709",
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
      "000002ff85536b4fdb3014fd2b91f795b6217da4a9548daa8451ad49214d8ba6698a6cf72618d2388b1d1042fdefbb71280321c1a7d8bee7dc73ee23cfe45e143b32214c647f6ba89ebedd49464e08689ae1ab733574673fd3ebcd6e5b462c789c855b3b7c9c4e11211a96a2fb32878e9275c5414d36eb6e56c9baa495941d4cd4199f764e47f6b0df1f78b6e3da1ef214e4e95214f7c8bed5ba54935eefa8ddcda4cc72a0a5505d2ef7afefbd07a75756f20eb856bdf7923d5451bdcf45bfe792532d6431ddacd140ada04a604f458e16fe3377ecec7deaaea0fb6e86e007c181722eeb4237b6300597452ab2ba3259c9e499189b6f0e64ed2ffd796c7199d7fb2229e81e4eac1dd534d14f255817d12ab016e1c52a0a66f1621526ebf9a51fccbaf3d57213846bebe6d28f7c4b539683e15a53ebccdc42bca0fe0e941685518f9be746f9a5418b8f63690828ada00d26ae3da2a763db632973793aee0f596a036363e60e699fd9dc1bc060c78022cf881a162d6431701de68c38241e75ed64e00c9cc4639e97d031f6da859163f787e470421e2ba1e15ca8522ad17688dc448bd84fe26813ce67b16f4a48699debf3d65853c05b8f1a0b44d027351d9aa890a8d4b47b11c67e349bc78baddf4e780919e54febbf38e394e60a104d2b6c9e862a903b6c180967817f8e6033b1ab635091c9ef67d2f4bc71f1a6e5aff41807d8d8d5e64bd671b4087f183b47c496e6b5813cb40752a2e55bac0d5d1ffe201297b4cd42ae377ef48bb44f11a45041c1bf9e26824de0cb7fedb8f888c5d54719a5f18ebbc35523c22b68774898728f6cd7769d3131e04a7f888d87c363d79a1c4d46d843a15f2a6a171f0b6dc56af50ac2208e3f34dd3afc03dc59a1cf78040000",
    ],
    [
      "ETag",
      "2P57AKfQUdVpRbMwANV0Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1605334902709"
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
      "02ff8d92dd6e82401085df657a0b29fe2b8917d85a35416b1193364d635618100b2cdd5d6a8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c073928760c33a895f4a14fb8b18d59d2e3c9465aa24dd0a9e4b040350b198c8517c694d7b9e753f9ee7ae4c1eeaa39d53dff5fb44c860831903fb0051826928c17e3c40ce32a4b580a76596afaace00b52ff470e17b93d988fa8c87ba9f2d5dd719b843381ae7c59029b6aaf87fac3d1d0dd8f2b587110acc03d45a0ac1b718a889b6295956a4684a5e8a00255470f52016bc2c98e0dca489d9ad99b5b6d56a349a3dabdeb17a04a63c602ae139b1cb05e903c5154b3dbe2397d026405425198eaaeb2b8d93b032a2cbc9cc6f372b7d5f0192162529aefe0649ef86d167f8c04e117ce758c6cb5c9da91bf7d6f9ed38caf4f3a86bc71ffe20a4a2a4ce883f990e17be339d6beee9e47db05728e782539012758635abd96d75dad67bac575c474defb19528d18080d1df314e14d8114b251edf00d5e5cf6e7b020000",
    ],
    [
      "ETag",
      "Gg/0M9R0XHPnLsiY2GwA2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd5536b4fdb3014fd2b96f705441fb485029d102b90b1883629490aab106a4de204431207db61aa50fffbae9d96ae63639f27556aec7bceb9e73efc8a9f581ee11ebe67c97349c5fcd323bfc7354c1549e0b6e8efb42e3b7936e93e7e6f255dafecee14d73f8e8f01c1344b92ac48695df2528454f6c67e2311bc2c88e0bc0e42f5c376bdd5ddddef74f68e76db07bb47c093348d072c7f02f6835285ec359babdc8d84f324a5a460b211f2ecedbef9d26e16823fd250c9e666ca266491cd8f939ea43c248af1fc78ec8381525231a5196129585833a3fb2f9bd20d46b24602e01716521286bccc95b6051221cf639694c2a8e2de2b36367ff9c0be35b0ce0274e68e9d606b46324d9e6d2322d1742aa82c53554333a82966299db26856458a27f4d573871001070f4452394337df2ccf4268e0de58ded64c2af008428e1ba0817d69a113d477ced1a696eda0b1e3587e80b64eb6d185e78e47e874b2818122221a13f0714e142452da7c547dda7ab28a4a05a065dbedf7c3c60b1d655c30a50bb69dc0f2fa67817d6d553d1ed0848473ff19ba1c93545240134132aaa818f2880265e4fa7660bb4e7f000cd3b8d10a2171eff6754d08e605d50695f9c7813d84e2fac3115e2c6a7f87f53daf3f0169220499ff1603bbdd3d4d5fb3af495a1a88c19b5365e3a50ae016d6d956a7365edc2de057c3b073953abe1a5bde0457571e8da9a07968243f68a3019bc03f9fce6a8f010b9b0c69601b14938a855227090535e18065c6ee927dd0daefb4b1010bf52ed635319a477f8c2c7394469f0ac1856796571f219b345e580e3d61d19559fd0d97cfcbab8c4a49122def709411153eb03c41922539680b8a622e505ce6a1a6559b6eae8848ca8ce60ae9a1c91e7a9b7b03f9655170a168b4560140f548fcc0b39d8bedcfcbe3e924b07c787a0addb67a87ed3b5d9429a59aeeff5bc65d351cede7dc752cd8e69f6f90cee6ce050000",
    ],
    [
      "ETag",
      "pA+1K3nmY6jX1g6Ru6+pVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d07fc9591caab2f556548c1a7052ca22974c844853902da12c9dfe7b9dbe3f783f80a6291382c8ba60157805135d59cb74796e545bc399197af8e0e8a34aafc4d091b2e1aeef9c3d4efdba1469f5419a7d34cc95f9b293edf7b1082fb7476b0be8e931354b7ae3284e94003baab73d62e8a0b659e58a8a675509ba7b1d217168f98cf45cb2cfcb28f41eaf07f311f4385236c4b6df76109543dcae8d2cd9f6d857c6130c5c2a219466710a259ef9fd729df6db085944567a184957d350a6f650aecc044da52bb5f2cba893f7caf788e873b0006c6c78c704e1cfec5ab3ac05f89f133935ecd9b719ed58077eff00dac1365618010000",
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
      "Sat, 14 Nov 2020 06:22:51 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-83-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d0221210991a2354be91a2d211d21ada66942c6b95077802936edb22aff7d17d374ed26b54fd8bee7dc73ee078fe4272f766442629eded550ed3fdc8a989c105034c5d7fdda0dec5a9975e57ffa6d5fcc7fe5975f460fd3292278c392342f33e84851570ce464bbe9a695a84b5a09d1c1449d71bfd31b5a4ebf3f702d7b64b9c89390254b5efc44f68d52a59c98e651bb9b0a9166404b2ebb4ce4cfefe6bd6d9695b805a6a4f95ad2441569be2dfa31138c2a2e8ae97683066a09550439e5195af8cbdcc5a7af537739cdbb2982ef3903ca98a80bd5d8c2144c14094feb4a67259347a26dbe38908db7f4e6a1c14456e74554d01c4e8c1d553452fb128cf360bd3216fef93a58cdc2c5da8f36f30b6f35ebced7cbedcadf18d7175ee0198ac61968ae31354ef5cdc70beaef402a5e68f5b0796e949f1ab4f87f2c0d01a525b4c168640d696f6cb971128f5832ee3b7162411c8fe39143fbb1c5dc010c763150e46951cda285287a8c0d7b2c8923dbb107d1609038111d3a4ed477e3a1d507c004400e27e4a1e20aceb82c85e46d87c875b008bd280cb6fe7c167aba8484d6993a6b8d3505bcf4a8b04004bd51d3a18972814a4dbb177ee805b379b8b8f2da092f21a56cbfb9c31927349380685a61f314542bb1c386117fb6f2ce10ac2776790c4a32f9fe489a9e372e5eb4fc991ee2001bbb4a7fc9260c16fe676de788b8a259ad21f7ed819468f9066b43d7871f88c4256db390af5b2ff846daa70012a8a060ef4f13c13af0eebf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b947f6a8e70e4644832bf56fccb61cfbd8b5264793117228d45345ede263a1ad582d9f4118c4f1fbba5b873f4b17b13478040000",
    ],
    [
      "ETag",
      "yO9R2ut/urNBz2HCxmPK7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1605334902709"
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
      "ff8d92dd4e83401085df65bc8584dada1f925ea0ad8a69ab529a9818d36c61402a307477d1344ddfdd59d46ad4446f6066f86639e7c00e9eb23206175659baa9516e8f52d4b7a60850d5b9567caba8540816a0162993b45accfab29a56c159d01a6daebc8dbfbd7b190e9950d1231602dc1d2419e6b102f77e07a52890d722caeba25c369d057a5b99e13c0cfcd905f705c5a69f2d2613ef743286bd75588c8516cb86ffc7dac3de8235ad024c506219a1d152495a63a47d635389a2cad15654cb08153470f3209554574212d93cb1fb6dbbd5754edaedcec039ee390306738a84cea8647631677da0498b3ca01776095d066453b2e1a4b93ef3388b1b23a6f46761b7d3e8fb0ab0b424cb71f937c87a1f057f860fec3d82ef9c28a82ef5813a9f5c7bbf1dc7997e1e35f2c2f10f42694eea8084fe743c0fbde98de11edebd9f6e35aa1b491ca4429361cbe9f44f7a5de72dd6333251f37b5c2d6bb42012fc775c661adc44e40af7af9e2dd45b7b020000",
    ],
    [
      "ETag",
      "obUN8rpMpRCR1DqJAqIyXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1605334902709",
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
      "0002ffc554614fdb3010fd2b96270493da064a29b41262a58491519292a6a06a428d9bb8c190c4c5762a75a8ff7d67a7053a18fb3829527cbe77ef3ddf3979c68f2c8f711b4f58f25450b1f8f2c027b882a92209ecfefa311f39f74f07d6edc351dc3a95dd8bcb38b93e3e0604d3559264b39456252f4444657b38a8258217332238af0251f5a851dd6bee1eecef375abbf5c3dd16d4499a4e7b2c7f84ea7ba566b26d596bed5ac27992523263b216f1ec65df9ad7ad99e00f3452d2da94b440455a9f8b9ea43c228af1fc7838000385a4624c33c252b0f05a194fbe6d52d718c96a0980e72ca2248a78912b6d0b28229e4f595208c38adbcfd8d87cb3c003bb677703d4f5866eb013924c17875f1191683c165416a9aaa010ce3465291db3382c33b34774ee7b57900107f7445219a2db0bdbb711ea79b7b6ff86c9f502d4732e6d74823aee19da24735c34745d7b10a09d93afe8bbef0dfbe874b4818153c4744ac0c81951a0a4b4fbb85c3a7ab48a4a05a055df9df7d3c64b9d655c30a54fecb881ed77ba817363974deed184448bc113b4794a5249014d04c9a8a2e28ac7144afadec0091ccfedf4a0c274aebf4648dcfef9fc5a102c66541b54e68dcf7b5e2768368c8335e486a485c1cccb05dedaab1d34b6f07259f93b51c7f73b2310274290c51f39389096f850c3e04d541a5d6bee61adb68eea7879b784a782e15a96ecf87a68fb235c6ef9744a05cd2343f949a30dd824fef975adaf3a60e1b2838c54104bc522a94522414d3a6099b1bbaa3eac379b756cc042bdcfb50ef51f218f3fccac340ac34f85e0c237f75b87a0268d1796434fe08f51c1199592249a6698c3492425939422337cf4d267148688e5480f0285c1a86f8f57130f2be894c428e685ae327d6ea372d0eb68bb0cb7b53163a79cd0ffb5725736496b9d79ae0db7ea373b7dfa6879050000",
    ],
    [
      "ETag",
      "zJvYIhq5/Wj8d9BsCHKdgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfdb6e82300000d07fe9b31a0776d8bd019a1919535b15e1a52950403a68a1848b66ff3eb33f38e709589270ad692705afc10798988116c9c2534b079e328bcde32bb6481d9883b094e947113eb091c93dfcf17a5cdcbe1f7e7d94e5aad44e418d1e8756650ca18c63b21be8e77aaf336807761395ac95d12317ace4f0762d36c25521eeaf17c25bbc0fd30322dacd9aafedd28432d779e55c1a494eb8afb2da45db8db2bb378a3c038da582028f73af9c849641fa6eb40327d3b17869772c71fd55679338bc9cfd489ccfcca2f9a3ee4e55b56e8891da6006f8a8ee2dd7f4feca9a10a119f89fd36e52fcd577386b790b7eff009090647618010000",
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
      "Sat, 14 Nov 2020 06:22:52 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-85-1605334902709",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda2424e44122456b94d20529900d48ab699a903117ea96608a4db7aaca7fdfc5345dbb49ed276cdf73ee39f7c113b9e3654a1624e1f97d03f5e3a75b919033028ae6f86a799b8d57065b7b66d1f16f998d9dabd05d2d9788e02d4bd24355404f8aa6662017fbb09fd7a2a9682d440f13f5ec496f38352796359e9ba39939479e8422dbf2f20ed9374a557231189cb4fbb9107901b4e2b2cfc4e1e57df0301a54b5b805a6e4e0ade40055e4e07dd1cf85605471512ef7211a6824d4311c282fd0c25f669a9cbf4ddde7f4d0cf11fcc01950c64453aad616a660a2cc78ded43a2b593c116df3d58184ced659470613457328e3921ee0cc48a9a2b17aacc0b80c769ee1fa97bbc05b45eece8fc3f5c6f156fdf56ebbf7fcd0b8de388163289a14a0b9c6d238d7371f2fa89f8254bcd4ea51fbdc2a3f37c8fd7f2c2d01a52574c178664ee9d036e74996cc58665b9324332149ec6436a15662b2f918c6690214795a54b36829cac9948ec19a9bf1309d4fe2b1cd689cd8661a4f872935534c908e28399e915f355770c1652524ef3a44ae033772e228d8fbeb55e4e81232da14eaa233d616f0daa3c20211f44e4dc736ca052ab5ed76fdc80956ebc8bd72ba096f21a7ec31bcc71967b49080685a63f314d49e48b161c45f79ce0582f5c4be9e82922c7e3c91b6e7ad8b572d7fa14738c0d6aed25f124681eb7fd1764e882b5a341af2d01d4885966fb036747dfc89485cd22e0bf9b67782efa47b0a20831a4af6f13411ac031ffe6ba7c5472cae3eca488577dc1d265b115643b7435c977b62cf4673db221a5cab7f639639b34f5d6b73b419e100a57aaea85b7c2cb4136be40b0883387e5f77ebf8071334fd6578040000",
    ],
    [
      "ETag",
      "3MHHMnRL873a4xsf4EVSIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1605334902709"
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
      "02ff8d92dd4ec2401085df65bc2d49911fb10917a008848a0a25d1184396edb454db4edddd6a08e1dd9dad88464df4a69d997eb33de7b45b784af2103c5825f173896a7314a3b9b1c50c75991acdb782728de0001a113379574e5f6e311bfaad891c750cc9492855dced32a1e51a3301de16a204d3508377bf855c64c86b92d232cb9755e780d91476380f66e3e990fb8c42db4f17bedfebfb03d83987c55018b1acf87fac3dec1c78a4d50c2354984bb45a0a458f28cdd8dad4222b52ac692a95440d155c3d881595855044359ed43aad5abdedb61a8de6a97b7ce29e3298921426a19cd9c59cf5812123d219bdb24b6833a0aa920d47d5f585c7495819b1e5781ab49b95beaf004b8b9214977f83ac772df8337c60fb08be7322a3323707eac2bfeafd761c67fa79d4792f18fc20b4e1a40e4830be1ccc83dee5b5e51ef6defb1b83fa5a1107a9d16658779b9dd649db7d8ff58c6cd4fc1ecfa8121d9082ff8e5162c08b44aa71f706d5185d277b020000",
    ],
    [
      "ETag",
      "YuNvXemGL5KcH8tocKdcrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1605334902709",
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
      "8554fd6f9b3010fd5790f74b2be503f24588147569c236a484b484b48aa629317050b704536c324555fef71dd0b4cdd6b51212d8f7debd77e7334fe481250119108f458f3964fb2ff7dc2335029246b89bcf26ab607417a7ac1d2d2ef59531dfcdeeaf874344b08225e8368da12e789ef92006cb4523ca789ed28cf33a26aaf77b75ada776dbed8ea1b674d5409e80389cb2e401d97752a662d06c1eb51b11e7510c3465a2e1f3edcb7e73d76aa619bf075f8ae6a964135544f363d18b98fb54329e0c970b34900bc8d6b0a52c460bafccc0fb7a9abac1e8b6112178c77ca0becff34416b63085cf93904579566625832752da7cf34116e6d41cbbca78beb4ddb30ddd16e4cdb94285b25e6720f258d6940dd614b218d62cd85491f441f9e6cc67184107775480d828b73f4cc754944d011a2a17cac89e28a754cb5696b66d2e5ce5ece25cf9eecc9757cae5ea04839e03109225a563977a31146e9f9b6afd7b9405814a745005d7badaa35a5f35bcd0d3fdb0dfee7aa10a9ed7f7f42e6d7baa6f74a013784091278bec258b263ce901a53dafad414bd33bd4085a46c70ba06b689a0f7a1b689f8681aa76801c6ae477c6244c9848b9605567c9ad63b9e6da7596f678e49a651921c5ee4d2a7345116f7d4a2c12411fd47528a28ca352714c96ed9ace68ec5a376635195388a8bf5f3ce26c84341680689ad12d48c8663cc0a691abf9c272adb93d9a22a33ceeab234290c1cfa75782bb4fcb2ecbf25d68f53aa5fe117043e3bc44ecaa0fa275c9e150fb7f8a91e38c56284bb38ceedf4fff6efe125fae2a8b2f7aa4503bae5ae4f0eb804f8de02daab293eba5e9ac48b5e540081924fee7a383e032f0e9cfe07833118b77136584c4350eaa2f0a113f836a60d9b6b4fbccd6db86ae93129cc9bf631d4dd58e2753e42832c21612f95c517533cb4615a15cbc80308873665bf6778cfe01c9e887ef19050000",
    ],
    [
      "ETag",
      "uMDYdAhlpi3gSB7Y9OvMjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90516f82301485ffcbdde320c1e99c98f8a01b7126c46c3893658b31152e58052eb6658b21fc776fd1873dee85de1ebed39ed3068eb24c600c3b999d6a54e7bb0ccdbb1d22d4756e342f15951ac101342263f21448ff5eac46ebcf793ef8ea07d98b0cf7d3c984091defb110306e209598271ac6df0d94a240b66db7aa3b913173aeacb2587e04f32062a1a0c40acb75184e676100adf3c7561dff65d9b40e1c6817618a0acb186d8a4ad10163b3b005b528aa1c5d4db58a514307773f324575251491cb8a3b1ababda1f7d8ef0f7cefe1c9f319cc29164652c9ec7ac5d9c090117944bfdc0f7a0ca86ee4aa69f7fde964dbe1366ddacdcd343b1bd46f8a3881467bb9770df24c369ce1d046d5e8402cf8255fa5b9eedb0bb7a9bef6a6010000",
    ],
    [
      "ETag",
      "qEi9+aS8UXGl4Z3EgDiLhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4d7282301800d0bb64ad0e1241d25df9474144c4029b0cd000ea50d27ca6623bbd7b9dbe1bbc1f54350d03a0b7f1ca3ed00b7a542a59348b2d574c2d69fb020fa1b24b46cda64c9f305e1683d83b8f38b07674c871f045581525a59152288eea35be00f07aecbbda8e8b694faa3452287d15a61732b226a590f7616e00f8ee2697b2336d6ee786cd1cf354be2d33797171af27ca7797cd3b9d8ca971350fb5956531c8c87782f23d2c5755d6f3a1775b21bdd561bb9a03b4511775128475f4eccfd386656b18c2d8cd373e95dc2a8fd3294d70a0eed404cd109bf85930a0e767166b84ccd0ff9cde1e9c3dfb26ab0413e8f70fb8baa79118010000",
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
      "Sat, 14 Nov 2020 06:22:54 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-87-1605334902709",
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
      "00000002ff85536b6f9b3014fd2bc8fbda3c9a904022456b94d21529212b9046db3421632ed42dc1149b545195ffbe8b69ba5695da4fd8bee7dc73ee8367f2c08b844c49ccb3c71aaac3b77b119333028a66f87a638fb6db419eb8f9efbcac9fdcc3e16067d96c8608deb024dd953974a4a82b0672ba09ba5925ea925642743051c7b63ae7e3fe68383427fd81d59f204f429e2e79f180ec3ba54a39edf54edadd4c882c075a72d96562f7fadedb0f7a6525ee8129d97b2fd94315d9fb5cf47b2e18555c14b34d80066a0955043bca73b4f09f99c417ef537739dd753304ef3903ca98a80bd5d8c2144c1429cfea4a6725d367a26dbe3990c0593a8bd06022af774554d01d9c190955345287128c2b7fbd325cef6aedafe6a1bbf6a26071edace6ddc57ab9597981b1bd767cc75034ce41738d9971a16f1e5e503f01a978a1d5c3e6b9517e6990fb712c0d01a525b4c1c8ea8fe9b9dd9fc4696cb1d41e8ee2b40f716cc7d6880ee33e9b9860263150e46951cda28528b0a529586c1499e3d1383253338962c692c884f190c2800e47e9801ccfc853c5155c72590ac9db0e91adef864e14fa1b6f310f1d5d424aeb5c5db6c69a02de7a545820823ea9e9d844b940a5a6ddae173afe7c11bab74e3be12564941d82479c714a730988a615364f41b51209368c78f3957389603db19fa7a024d33fcfa4e979e3e24dcb5fe9210eb0b1abf49704a1ef7a3fb49d13e296e6b586ecdb0329d1f21dd686ae8f7f11894bda6621371bc7ff45da271f52a8a0605f4f13c13af0e5bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b927b685e33d271a5ca90f31cb1e9fbad6e46832c20e0af55251bbf858682b56cb57100671fc9eeed6f11f208ed4e678040000",
    ],
    [
      "ETag",
      "Q85WW2ldIlZlpuwIyyy8gg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b4fc2401085ffcbf85a92722bd0848782a835dc8492680c214b3b2d85b65b77b71a24fc77672ba251137de9ce6cbfd93de7b407d8c5590036ace3e8a940b1bf8850dde96286b24894a425e799443000158b888c8bdeae637ad183e8f4d768bedee2fda4e674bb44487f832903fb00618c4920c17e3c40c652a4319f27459aadcace00b5cff5e6dc9bb9e36bea531ee87ebc180e9dde700047e33c1830c55625ff8fb1e5d1802d5fcf304481998f5a4b2ef8167de56a9b92a5798215c90be1a384122e5f44821739139c5768a7d26e55aa96d9acd71b1db3d6323b0426dc672ae619b18b39e903c5154b66fc855c824580284b321c96cf671d55501ad1a53bf6ac46a9ef2b40d2c238c1d5df20e9dd30fa0c1fd82982ef1c4b7991a93375359c38bf1d47997e1e75e978831f845494d419f1dcd160ee39a3a9e69627efbdbd4239159c8294a833ac9a8d76b36599efb1f6b98e9aeeb19528d0009fd1df71132bb04396483cbe01f6283ea17b020000",
    ],
    [
      "ETag",
      "iuBk90TgYr9Cbe0zJeXO2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1605334902709",
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
      "fd",
      "6f",
      "9b",
      "30",
      "10fd5790f74babe683041248a4a8cb52d621a5a403d2aa9aa6c410439d104c6dd32daaf2bfef304d3fd6ad9590c0bef7eebd3b9f79401b9aafd0104534bd2b09df7d5ab3083510913885dda473b259996b699f77dc93f5d7bea39f04bfd3d10810b46209bc2d32d214ace43111c379d04a392b0bcc196b42a2a66d373b7dbd6718e640ef5afa00788264c994e61b60df4a598861bb7dd06ea58ca519c10515ad986d9ff6dbf7dd76c1d99ac452b45f4bb64145b4df173dcd588c2565f9681e80815210be205b4c33b0f0cc5c459f5fa76e51bc6da500bea731c171ccca5c56b62045ccf284a6255759d1f001299b2f3e50e04c9d49a84d66732f3c5ae26d455e1e6b58688b0527a2cc64435b424d09cdc882ae9675a4d8685ffdd90544c0c12d16442cb5eb6f8eef68cf5b4b6da49d6a63ef4c7b9dc0f5b4b9e73941a81d9d1e6be7fe6c7ea97db9798501e72b2224cd95ef104719a93c3fb6d67d7ba015014b10ad830b4befe38ead0fa224b2e2c4367a51a29328b223ab878d488f0726315711c1c0935576c5c239cbf5aea113c382a7d735cdd8ec626b003cc34e0c5bb793816e77896577fa68df40bf3895e48c8a82095af7175dfb6ee82c427fee4dc6a1a3ca4830f4f0ac365715f1d2a7842201f44e5dfb2a4a19285587e57aa1e38f27a17be5d4f33125298e77c11d4c48823341008d39de1249f8055b41d3d0e52c704377e68da7c050877e79400834fcf1f04c087785eab2546f1484beeb9d2b0307c415ce4a05b9af3fd0b800af68bf6ffc3fcdd8f7c737208d39c7bbbf62504edface8ff905078b5aa6d1e243ba8523bacba68ff730f4f03c17daab3a3ef73c7bf41f5964f12c2491e7f3c3e0056810f7f0b873b0a58b8a5202324ac6158635189c49cd4434bb7caee23dbeaf5faea",
      "a72231976f627d157bba9b5546b225b97caca8bea3aa5155a8144f2008c2ac79eaa0f67f00fc58644b23050000",
    ],
    [
      "ETag",
      "f1+kd4jt8G1I+jF6E0+Sxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1605334902709"
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
      "90",
      "4f",
      "4f",
      "c2",
      "40",
      "10",
      "c5",
      "bf",
      "cb78a48d852aff120e56899220d16a2f1a4296765a0b6d67d9dd6208e1bb3bbb18c3d1cbeeec9bdf4cdedb236ccb268331accb62d7a23a5c15685e6d11a36e2ba3f992d468040fd08882c9dd20ea24fd07d9b9fe48cafc198ba8deef8ac984099d7e612d607c84bcc42ad330fe3c42236ae4b1d54ab98d8c9983b4ca6cf13e7d9cc62cd494596191cce777d17c0a27ef624c6eff35b23c79b0a1758c392a6c52b42ea4a20da66666036a51cb0a7d4dad4a5183835da350d44aa1887c56fce1d0eff683db30bc1905bd413062b0a25498921a669337f606868ca862fae67cd06340b992a3e6eedcb31cba0c7b07586b97bdde5faf6b7bcbdf85d1c1a07e51c4ee345a63c1d9e43d59e3860319d5a207a9e05f7e2acdf97dfa0197e1e9c8c2010000",
    ],
    [
      "ETag",
      "q7B+U6Dp+/ZUifMegBmvqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8e",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "99e76a5c33b16f2e59ebae41b12fc27494518a71abcdfefb367bfee0fc8002214c693e3f5bdc830ff02a78f98ccef6c0aad2051fa6978ded85ab0869a7bcd793ca6bfc3d15a140d6c6bfd77c3a405f73667db34696830c5da367171aa517c61c8cb78aad9644d1501c2d811a1cb7eefb18a4bce10ac8d46de0ebc9a85f91555a622c2752b046e27ced1583488788042b3a149fa3a3a9934ed8a043cd1521b795c2f2a15673d977817d4b17799f5145e3ec51bb2b5bdc79a6e9be88ea4cd9aefa4efd9942b74b6d16bb05a7b9c6064e00ef4333619a37efac20c9f209fccff3f935e0775fc5c58427f0fb074b2c0ccc18010000",
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
      "Sat, 14 Nov 2020 06:22:56 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-89-1605334902709",
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
      "535d6f9b3014fd2bc87b5c134843128814ad514a36a284ac84b49aa609d9e442dd124cb1e9d456f9efbb98a66b55a97dc2f63de79e733f7822b7bcd89131613cbbaba17af87223183921a06886af8bbaf4168b47fb6b2f7fe4e26231f7e7653e9d4c10c11b96a4fb32878e147595801c6f37ddac1275492b213a98a8e3b89dded01af4fbb66b9d8e2c177912f274c98b5b645f2b55cab1691eb5bb9910590eb4e4b29b88fdcbbb797f6a9695b8814449f3ada4892ad2fc58f45b2e12aab82826db0d1aa8255431ec29cfd1c27fe68e9dbd4ddde574dfcd107ccf13a04922ea4235b63045228a946775a5b392f113d1365f1dc8c65b7ab3c848445eef8bb8a07b38317654d1583d9460ccc3f5caf083f93a5c4d237f1dc49bd90f6f35edced6cbed2ad818573fbcd03314653968ae3131cef42dc00beaef402a5e68f5a8796e949f1be4bf1f4b434069096d301e5943da732c97a56c94a44e7fc0520b1873d86840fbcc4a5c1bec1d038a3c2daa59b410c59042cfe9d96e6cbb031adb7d96c60c5c1603b3863dd7719c7e6a93c309f95b7105e75c9642f2b643e42af4232f8ec26d309b469e2e21a575aece5b634d01af3d2a2c10411fd47468a25ca052d36e3f88bc703a8bfc4baf9df012329a3c6cee70c629cd25209a56d83c05d54aecb0612498aebc7304eb89fd3c062519ff7e224dcf1b17af5afe428f70808d5da5bf6413857ef05ddb39222e695e6bc87d7b20255abec6dad0f5e10f227149db2ce462eb85bf48fb14420a1514c9e7d344b00e7cfaaf1d171fb1b8fa282315de717712d9882415b43bc475b947f668d81b0c880657ea5dec74d83f76adc9d164843d14eab9a276f1b1d056ac962f200ce2f803ddadc33fbd7391f178040000",
    ],
    [
      "ETag",
      "JupEJJz4+1lzioQJFIFplA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1605334902709"
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
      "ff8d925b6f82401085ffcbf41552bc2b890fda5aab41eb051f6c63cc0a036281a5bb4b8d31fef7ce526b9bb649fb0233c337cb39078ef01ca53ed8b089c2971cc5e12a4435d5c50c651e2b49b78ca712c100542c2432dc0d99da4f3158d6a265d9ef3b8fd70fc369bb4d84f4b69830b08f104418fb12eca723a42c415af3789c27e9bae80c50874c0fe7ee6c30ee539f705ff7e385e374ba4e0f4ec665d1678aad0bfe1f6bab93013bbe99618002530fb5964cf01d7a6aa06d4a9664319a92e7c24309055c3c0805cf332638376962365b66a96ed52a956acb2a37ac168131f7988a784aec624efa4071c5e219df934ba813208a920c07c5f595c6915f18d1e560ecd6ab85beaf00490ba218d77f83a477cbe8337c60e708be732ce179aa2ed49df3d0f9ed38caf4f3a8db8edbfb414845495d107730eacdddce68a2b9d5d97bf7a0504e04a72025ea0c4b56b5596bd4adf7586fb88e9ade632b91a3011ea3bfe33e5260072c96787a03110be0897b020000",
    ],
    [
      "ETag",
      "gjJatwQefY5iY2dGLZ/OJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1605334902709",
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
      "0002ff8554616fda3010fd2b91f7a5958084040820a18e41b621d1d086d08a4d1338c149dd26716a3b4ca8e2bfefe29452d6ad952225f6bd77efddf99c27f440b30deaa380c68f05e1bb4ff72c403544248e61f7eac7a50812e1ed96ce7697def6c6fadce2d783012068c91238cd135217ace02111fdc5bc117356e49833568744f59e516f768cb665b57a86691b3de0099244539a3d00fb4eca5cf475fda0dd88198b1382732a1a214b5ff6f5ada9e79cdd93500afd54520715a1bf2f7a91b0104bcab2c1620e060a41f88aa4982660e1c8dc049f4f5337284e1b3180b73424380c5991c9d216a4085916d1b8e02a2bea3f2165f3d5079a3b5367e46ba3d9c2f5cfd6382dc9eb730d0b6db5e2441489ac696ba829a20959d1cdba8ae40fda576f76091170708705116bedf6bbe339da716bad0db40b6de88eb5d30413575bb8ae33f7b5b38b73ed9b375b5c695f96271870be2142d24cf9f6719090d2f3736b276f0fb4246009a25570651b1ddcec1abd200aec30ea5aed203248107403bb8dadc0087b2dd2da0404034f96d9150b672c838069604cacc8ec9ab6d96c375b56b3b369b66db363d941141a76d70adb4db4afa1df9c4a32a622678256fd45b7dec47756beb7704743df516544187a38aecc9545bcf629a14800bd53d7be8c52064ae5614d5cdff186237f72e354f33125310e77f3479890082782001a739c1249f825db90f262cce6137f3273875360a843bf3a2004eaff7c3a12fc5daeba2cd51bcd7d6fe27e53060e881b9c140ab2ad3e10cec12bdaef6bff4f33f4bce112a431e778f7570ccae9b44afa3f24145ead2a9b07c9b2f3c79589f6bff6f0d410dca72a3bba5e38de12555b1e89082759f8f1f80058053efc2d1cee2860e196828c90b086610d45291272520d2d4d95dd67b66d9b96891498cb3731ab651d4ea7cc51662429c9e47345d51d558d2a43857801411066cd5507b5ff032fda7c5f23050000",
    ],
    [
      "ETag",
      "PZMsblsRyYEvymW9D/S3rQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1605334902709"
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
      "90",
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb7885046dd540d20335446b90b4d41e8c31cd2e4c91167670778912c27f77a03d78f4b43b6fbe79fb667b38952a870064597cb5a8bbab02ed66bca468daca1a3e1a5206c101b4a26072ae3632d93ebfc9b554a57cf9093d1975e162c184c93eb11610f47028b1ca0d04ef3d2851238fedf77a7264cc76cda8ac92d7e8314a59a8291f856417c7e1328e6070fe8c35a77f8d7c0c0e1c49a678408d2ac33145a3e988995d8d0b1a513715ba865a9da181099e1a85a6b6119ac865c5f53df7facebb9dcde6be7773eff90c5694095b926276b7e56c60c98a2aa56fde0f3cb8d4cbcea2596b627383f9a5c38e0f34be6b398fd52d3a9009fea4a7d29eebe11727f38e2081010000",
    ],
    [
      "ETag",
      "4nQbNSJYbPbnibMxA0bEyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb646d1daa044877c412f908885611374cc4f05102347c143abd7b9dbe1bbc1f409384b56ddcd57756810f30d2059a2773a791300cd20ddf5abcac053c42cd5c69579c75c5c285664708deea6f287077e47038116a5df27c5fc93c222733ee744fc98c7ca4868a3bd4dfa0ae18c2756c17b365e11f193c5eeb69ec137e2243d69a46be4ea4cdaa4ecb7e085be3ebddbb1ca2aa8499ea5b6ce2b6957edfee2cdccbda39d0d782e2a0297dc7fb3c4f365c22e4b5ea30c9d4f5a7675994eb5e5d3ca458181c86bcda87ee79173d12e59ed61a09c00cb0675308d6c6c52bbb8408cdc0ff3ceec686bdfa9851c104f8fd0345da250218010000",
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
      "Sat, 14 Nov 2020 06:22:57 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-91-1605334902709",
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
      "6f9b3010fd5790f7b54948c90f8814ad51429b48095981b49ba609197350b704536c325555fef71da6e95a556a3f61fbdedd7bf7ee78260fbc48c884c43c7baca17afa762f62724640d10c5f4771757df593df2c82c572c6b70fcbc77c9366d32922789325e9becca123455d3190935dd0cd2a5197b412a283853a4ebfd31f9943cb1a38e6f9d874304f429eae79f180d9774a9572d2eb9db8bb9910590eb4e4b2cbc4fef5bd7738ef9595b807a664ef3d650f5964ef73d2efb9605471514c77010aa8255411ec29cf51c2ffcc24be785fbacbe9be9b21f8c01950c6445da846169660a248795657ba2a993c132df3cd8104eeda9d87061379bd2fa282eee1cc48a8a2917a2ac1b8f4b71b63e55d6efdcd2c5c6dbd28982fddcdac3bdfae771b2f306e97aeef1a8ac639e85c636a5ce89b8717e44f402a5e68f6b0796e985f0c5a7d1c4b9380d412da60343647b46f9b4e9cc66396dad6304e4d88633b1e0fa9159bcc19c0208981629e26d559b410c5b939a0b6c958441d7b140dd0dac8b6fa7694244e3f1ea69605ce801ccfc8df8a2b5870590ac95b87c8adbf0add28f477de7c16baba8594d6b95ab4c29a06de6a54d820823ee9e9d844b940a6c6ee9517bafe6c1eae6edc76c26bc8287b0a1e71c629cd25209a56689e826a2312348c78b38dbb40b09ed88f535092c9ef67d278dea87863f96b7a88036ce42afd2541e8afbc2b2de784b8a179ad2187f6404a947c87bda1eae31f44e292b655c8f5cef57f91f6c987142a28d8d7d344b00e7cf9af9d161fb1b8fa482315de7177986c485805ed0e71ddee297b3c1edbfa4f55b4521f628ee59c5c6b6a3415610f857ae9a85d7c6cb425abe52b0883387e4fbb75fc0793b8c3c278040000",
    ],
    [
      "ETag",
      "6brQGXiVDSDHAiOkHqlMfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1605334902709"
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
      "6e82401085df657a8b0956c54ae205566b49d4fa83bd6863cc0a83a20b4b77971a637cf7ce526b9bb6497b0333c337cb39078eb04bb2085c5825eb9702e5e16a8d7a628a29aa826b45b75c640ac102d46c4de4aebae1f346d7bfded71cbfdb789aac86fd47afdd2642851b4c19b8478813e49102f7f908194b91d642c18b345b969d05fa909be12c98faa33ef5a9884c3f9a0f065e67d0839375598c9866cb92ffc7dae264c156aca618a3c42c44a32597628ba1f68d4dc5d29c6345894286a8a084cb076b298a9c49212a34a9b4aa95aa63376ab57acbbe6eda2d02b908994e4446ec7c46fa400bcdf854ecc9253804c8b224c371797da5711295464ce98f02a75eeafb0a90b438e1b8fc1b24bd1b469fe1033b47f09d63a928327da1ee060fde6fc751a69f4775bda0f783509a92ba20813feccd026f3836dce2ecbd73d0a8c65250900a4d8655bb7ed3683af67bacb7c2444def71b52cd08290d1df719f687063c6159ede00628da7537b020000",
    ],
    [
      "ETag",
      "k1hlU5DI2w36ID5ZQbMGVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1605334902709",
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
      "0002ff85546b6f9b4010fc2be8fa2591fcc006e38764a5ae4d532407a718278aaaca3e8ec5b90638c21da9acc8ffbd0bc449dcb48964c9703bb333bbb7cb23b9e369484624e0dbfb02f2dda75f22200d028a6ef134549d896eddbbd9790a22711ccb0c4c73321e2382972c49932c86a61445ce408e56cbd63617454673219a98a839ec363b96de330c73a877fbfa107912e268ced33b64df2a95c951bb7dd06e6d85d8c640332e5b4c24cfe7ed876e3bcbc52f604ab68f25dba822dbef8b9ec58251c5453a5e2dd14021215f4342798c165e9861f0f938758bd3a4b545f0036740191345aa4a5b98828934e2db22afb292d123a96cbe7a204b7b6e4f7d6dba58b9fec98626257973aa51a9add739c822560d6d8335453c86350f377524bbd3be7a8b0b8ca0835b2a416eb4eb6fb6676bda26a40a36da583bd326ee4c3b263baeb6725d7be96b2767a7dab9b7585d6a5f6e8e30e83a04a9785a79f6691043e9f7a9adcedbcb2c0954a1873ab8eeeb16ed0cf46110057d160d8c5e10e9100483a0dfa346a0b3a109661800459e2ab3572c9a8a74d0890c23b00c0603c3609601036bc858af1ff4c3b04b3b86694666d41b8664df20bf73ae60c6652624af7b4bae3dc7b7d7beb772a713dfaeca8828f66f569b2b8b78ed536191087aa7ae7d19e50295ca8b725cdff62653dfb9b2ebd998c396b2ddf21ea723a2b10444d39c26a020bf1021368d5c2e968eef2cdcc91c19d5855f1e10928c7e3cbe10fc5d56755955ff645616b07f95f08ac6450578a81f4857efea4d1de7b747f6fbc6ff334d3c6f7283ea34cfe9eeaf1856649925fd1f3a15be7aab9d1e743ba4547b7641f63ff7f86b105ca73a3bf9beb2bd1b521f7910410e29fb7882105c053efc2a1c5614b1b8a4282315bee3bc32598ab01ceab9e54965f789dd1ff42c8354e05cbd89f5b18b8d97d52c334202a97aaaa85ed1aa5165a890cf200ce2b8b98e7b8ed13fff79f5cf22050000",
    ],
    [
      "ETag",
      "dt1A06qNpGneomII64b44A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1605334902709"
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
      "000002ff8d90cd6e83301084df657b058924fd03298724422d2d4a5bd25c5a4591030b8100ebdaa65514f1ee5d931c7aec05af876fec199fe050b61904b02b8baf0ed5f1aa40f366870475571bcd8ba45623388046144c7a4ff3282f5ef6cdf3fd4a49af587c5498cda6532674bac746407082bcc43ad3107c9ea0150db26dbb55c3898c99a3b44ab47c0f1fc2848586322b2cd7713c9bc721f4ce1f9b3cfccbb2e91da86897608e0adb146d0aa9a8c2d444b6a0168dacd1d5d4a914350cf0f0a350d449a1885c565c7fec8e6ebd9bc9e4daf7c6779ecf604da93025b5ccae579c0d0c195127f4c3fd60c4801a46ae9a0fdfef41b61d2ed3a6df5c4cf3a341fdaa881368b4977be7200bb2e10c8736aa430752c12ff9589af3beff05059eb5f9a6010000",
    ],
    [
      "ETag",
      "0JBIfgOhmK8Srp0gCZjedA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b7282300000d0bb64ad0e827cd21d1f69b102a180036c3221848228df4c019ddebd4edf0dde13104ad93461de35ac056f602522dcd1dd672f187240910d7d0129de92e87375350d4541b4bf0b5d3e595561c6a1fabd779074b871e65b0b1fc46240a59c446aaedd4b754a037751358d21235a457a4b270f5af83d38da4592cd24425e622bfb5689a5dc759421af4c0efb8b4a431a9c3234879e26f9bdde66ce5a6aa2991e8d4b7c4dcfe451745f8fb224bc6a7538e71ac57ebb251fb6e79add781eb6588472760a93a0f9a9311bc60b7f08f1c16c741c800d604b5f8f6cc2f52b2bc9106ec0ff1cf3b567afbec1c8c846f0fb076e19f53018010000",
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
      "Sat, 14 Nov 2020 06:22:59 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-93-1605334902709",
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
      "4fdb3014fd2b91f771b44d5fa4a9548daa0416a94db73485a1698a6ce72618d238c44e2784fadf77e3500642824fb17dcfb9e7dc479ec8bd281232254c640f35548f5fee2423270434cdf0f5d7702ee4e832f8eae7378bfddc19c00dcbb3d90c11a26129ba2b73e82859571cd474bbe96695ac4b5a49d9c1441d77d8e99fdae3e170e4da03c77691a7204f97a2b847f6add6a59af67a47ed6e266596032d85ea72b97b79efed07bdb29277c0b5eabd95eca18aea7d2cfa2d979c6a218bd97683066a05550c3b2a72b4f09f99b0b3b7a9bb82eeba1982f78203e55cd6856e6c610a2e8b54647565b292e91331365f1dc8c65b7a8bc8e232af77455cd01d9c5809d534d68f255817e17a65f9c1c53a5ccd237f1dc49bc5776f35ef2ed6cbed2ad858d7dfbdd0b334653918ae35b3cecc2dc00bea27a0b4288c7ad43c37cacf0df2df8fa521a0b48236183bf629ed4f6c97a5cce1e9643866a90d8c4d9833a64366737704a38401459e11352c5ac862623b7c80e098a5d48947769ac40cb81bd3948ffa703a1a0f20218713f2b7121ace852aa5126d87c875e8475e1c85db60318f3c53424aeb5c9fb7c69a025e7bd45820823ea8e9d0448544a5a6dd7e1079e17c11f9575e3be12564943f6e1e70c629cd15209a56d83c0dd54a26d83012cc57de3982cdc47e1c838a4c7f3f91a6e78d8b572d7fa14738c0c6ae365fb289423fb834768e882b9ad706b26f0fa444cbb7581bba3efc41242e699b85fcdc7ae10d699f4248a182827f3e4d049bc0a7ffda71f1118bab8f324ae31d7787ab468457d0ee9030e51ed98e3b38ed1303aef4bbd8d0718f5d6b7234196107857eaea85d7c2cb415abd50b088338fec074ebf00f781ad8f578040000",
    ],
    [
      "ETag",
      "X3Aio4GN+IlYCvA72eYblg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1605334902709"
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
      "657ca509b52d0a890fb55625a1ad526a524dd36c9781a2c0e2eea2364dffdd59d46ad4445f606638b3dc7b610b0f59198307ab2c7dac516e0e52d4d7a60851d5b95674ab44a9102c40cd5222f1c57579e10783357fb919cf6fa3913b99a727274428bec68281b78524c33c56e0dd6da16405d21a17795d94cba6b3406f2a339c46a13fbea0be10b1e9c7b320e89f0643d859fbc59869b66cf87fac2d7616dc8b5588094a2c391a2d9514f7c8b56f6c2a565439b694a82547050ddc3c48a5a82b268568d1a4e5765a6dc7ee753a5dd73e3cb25d0273c199ce4449ec6c4afa400bcdf2503c934b7008904d498693e6fa44e32c6e8c98d21f474eb7d1f71520694996e3f26f90f4ae197d860fec3d82ef1c2b445dea3d751e4cfabf1d47997e1e75d68f863f08a529a93d12f9a3e134ea8fae0cb778f77ebad1a8aea4a020159a0cdb76f7b877e4d86fb10e84899adee36959a3059cd1df719969f012962bdcbd02b448c3347b020000",
    ],
    [
      "ETag",
      "ex99cmILChcxVNYZTM9OYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:22:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1605334902709",
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
      "00000002ff8554fd4fa34010fd57c8de2f9af463817e27c6ab15ef485adaa354e35d2eed42075ca52cb28ba631fddf6f00abf6bcd38404baefbd9937b3337d22773c599301f179749f43b6fd722b7c5223a05884a731d0b963b62717f3c7ab91179de913ab73119d9c2083172ac936690c7529f22c003958cc1b5126f2946542d43150bddfaaeb1dda36cd569f1a5dda479d84381cf3e40ed5374aa572d06cee73372221a21858ca6523109b97f3e683d14c33710b8192cdc3944dcc229b1f273d8d45c01417c9c9628e067209d912368cc768e155b9f6bf1e866e70b66944487ee001b0201079a20a5b18221049c8a33c2ba392c113296dbef920736b6c8d3c6d345d38ded18a6d0af1ea5863525b2e339079ac6ada0a6b0a790c4bbe5e55487aa75db8d30922e8e08649902bedeabbe55a9ab6920addadb413ed541b3ae7daa1da76b485e358734f3b3a3dd6beb9d3c54c3bbb3ee0a0ed3548c593d2b4c7fc180ac3cf7db5dfdf6621600a4d54e0b24b3b4cefd1be1ffadd20ec996d3fa4e0fb3dbfdb66a64f837e0b5a6b1f18ea5411bd54b14424dda0db03da6d773a2df02134d62dd6d681eaedd0f403b3a31b3d08cd1e5b935d8d3c665cc13997a990bc6a2eb9726dcf5a7aeec2190d3dab2c2364d8c0f3ca5c51c45b9f0a8b44d20775ed0a940bcc54dc94ed78963b1c79f6a5550dc71822166ce7f7381e218b25209b656c030ab2895863d3c86c3ab73d7bea0cc7a8286f7cb6674832f8f5f42af0b669d96555be89674ff08e869359e9614fba64715eb21eaa0f625083d6a951d7db9e6e0c7473a0b71a94d29f64b7abfd3ff8d07587d768886519dbfe8561919d5621ff47d6925ffeaaccef5de8a4c8f6e289ec7eeff0a9115cb12a3af9b1b0dc6b521db910420649f0f95021b9043efda7d8af2d727171310dae80e238c2812c92041954a3cc37a5dd67758fd2be494a72a6de617abfb7bfb3224611113690a8e78aaab52d1b5540b97c21218813e8d8ce3744ff00d507b3f136050000",
    ],
    [
      "ETag",
      "le0SN35MFSwWCTgB1ME6Fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1605334902709"
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
      "90",
      "4f",
      "6f",
      "82",
      "40",
      "10",
      "c5bfcbf40a29d63f55120f6a683531a6a5f5501b63561c280a0cee0e35c6f0dd9d450f3df6c2ce3e7e6ff7bdbdc0212d76e0c3364d8e15eaf34382fc6e87104d95b191a5a4c2203880ac122157557fb29aaa5e77627ae313bf3c7ea9fe71341c0a61a21fcc15f8178853cc7606fcef0b142a47b16d36ba3951303e9756992d3e83d7201421a79d1516cbf97c349e07503b7f6ce5e15f9675edc09eb621c6a8b188d0a62835ed31e2992d68545e66e81aaa7484061ab8f99168aa4aa5895c51dc41c76df5bc6ebbdd19784fcfde40c08c22c52915c22e3f241b30b1ca423a493f6809a09b51aac6cdf7b7916d87fbb4aed777d3f8cc68de34490283f672ef166442361c4b68d6153a102979c969cab77d7d05cf7a06c0a6010000",
    ],
    [
      "ETag",
      "Zu8CZHa65Cs6BwtF/Ya8qA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb64ad8ea028e9aea045a18c7c8c0536990881c128bf4425717af73a7d37782f40f29c728e45cb68033e80243a9ce533af9b5b4658b453375bc5482f077ad82123f7a087d2805f074416ec5685775f4623dc06d557569af7fae6afd7350e24ff5e9050685eb5777527334cb4b9296dc4d7c4b58e782962fbd3d1364bae3f9fb1559ab1fd509bc8957d2ac883ef8de29255cbc0171a66895362a4ecb6dbb213cc59a9eaece788a3c6485aa9fab3be3b05dbae876e9352c7c359e1287460d538778ad162ecf230e5696a0ff119db325cf54f300174ecea81725cbfb30b03c209f89f63213bfaee5b940c7400bf7f2d742f8118010000",
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
      "Sat, 14 Nov 2020 06:23:00 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-95-1605334902709",
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
      "fd2b64f6ab2df465a149b3928a6b9396ee02d5ac9b0d19860b8e52069941a3a6ff7d2f83753526fa8999b9e7dc73ee836772cbcb94cc48c2f3bb06eac76f372221470414cdf1d594a38b27d3f7fcabf0e6c91d5fb9e5d5c472e77344f09625e9ae2aa02745533390b36dd8cf6bd154b416a287897acea43738b626a3d1d8b18653cb419e84225bf1f216d9d74a5572669a07ed7e2e445e00adb8ec33b17b7d37ef8766558b1b604a9aef254d5491e6e7a2df0bc1a8e2a29c6f4334d048a863d8515ea085ffcc3439799fbacfe9ae9f23f89e33a08c89a654ad2d4cc14499f1bca97556327b26dae69b0309bd95b7880c268a6657c625ddc19191524563f5588171166cd6c6d23fdb046b375a6efc385c9c7b6bb7bfd8acb66b3f342ecfbdc033144d0ad05c636e9ce89b8f17d44f412a5e6af5a87d6e955f1ab4fc38969680d212ba603cb58ee9c0b69c244ba62cb3479324b32049ec643aa1a3c462ce18c6690214795a54b368294a968e07e00c27719a39341ea7a91ddb8e3388b35132067b488f07938cec8fc843cd159c725909c9bb0e91cb60197971146cfd851b79ba848c36853aed8cb505bcf5a8b040047d52d3be8d72814a6dbb977ee405ee225a5e78dd84579053f618dee18c335a484034adb1790aeab548b161c477d7de2982f5c47e1e8292ccfe3c93b6e7ad8b372d7fa54738c0d6aed25f1246c1d2ffa1ed1c1017b46834e4be3b900a2d5f636de87aff1791b8a45d16f26beb05bf49f71440063594eceb69225807befcd70e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7c0b6ade940ffa98ad6ea43cc1e0e0e5d6b73b4196107a57aa9a85b7c2cb4136be42b0883387e5f776bff0fa6889c7178040000",
    ],
    [
      "ETag",
      "/s3Vz/NENZSjzA4ZAnZ50A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1605334902709"
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
      "5b",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcbf86889e50e4d7c00456dc29de2838690b59d62a1edd4dd2d8410febbb355d1a889beb433d36fb6e79cf6009b280dc081a768f592a3dc9fad504f4c314595c75af12da3542158805aac98a4f9b67c1f79adcd48eeb6b292bb0f17e7c1e4f29209e53f6322c0394018611c28701e0f908a0479cda7384fd265d159a0f79919cebca93bbce53ea1c0f4c379bfdfe9f67b70b44e8b81d06259f0ff585b1c2d58d3d314439498fa68b46492d6e86bd7d85422c9622c29caa58f0a0ab878b092946742129578526ad74be5865daf566b6dbbd2b4db0cc6e40b1d51caec7cc6fa409316f19476ec121a0cc8a264c36171ddf2380a0a23a674875ea356e8fb0ab0b4308a71f937c87a9f057f860fec3d82ef9c48284ff589bae98f3abf1dc7997e1e75ddf17a3f08a539a913e2b983decceb0cc6865bbc7befee35aab1240e52a1c9b06cd75af566c37e8bf58a4cd4fc1e47cb1c2df005ff1d7791062714b1c2e32b101208617b020000",
    ],
    [
      "ETag",
      "oUv1ViT8kOrwvr2uIZ/+dQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1605334902709",
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
      "614fdb3010fd2b91f705a4d2266dd336952ad695c0824acad21484a6a9751c2718d238d80e5385fadf777128d0b1811429b1efbd7befcee73ca17b96c7688822963e94546cbedcf10835105538855de73bf1169db0ddca36b12c8be43c4ccf453a1a0182552c89d745468f242f05a172b8983753c1cb020bce8f20d191d33bb27aa6dde9741db3dd371de0499a255396df03fb56a9420e5bad9d7633e53ccd282e986c12be7ed96f3db65b85e0779428d9da976c818a6c7d2c7a9c718215e3f968310703a5a46249d7986560e19519475ff75337195e3753003f32423121bccc55650b52109e272c2d85ce8a864f48db7cf381e6eed49d84c664b6f0c383155e57e4d5a181a5b15c0a2acb4c358c15d494b08c2e59bcaa23c5bd711acc2e20020e6eb1a472655c7f7703d73076398c91716c8cfd13639feef9c6c2f7dd79681c1c1f1a67c16c71697cbbd9c380ef984ac572ed3ac451462bc7cf8df5de1f6745c00a5cd4c165dfec616b603a5112f54932e8d85162d2281a447d1b772293385dda8d238a81a7aaec9a85739e0fe024b0ddb6896d59b6153ba649ac6ed4c39d4ebf6bc7eda44f1d6a45f6006d1be8b7608a9e305970c9eaeea2ebc00bdd65182cfcc93874751909860e9ed4e6aa22defa545024803ea86b5b451907a5eaa83c3f7483f124f4aedc7a3aa634c564337f80f948702629a0b1c06baaa8b8e031340d5dcee65ee8cdfcf11418fac82f770889863f9f5e09e1a6d05d56fa8d4ea7b371d8eb6a073bc815ce4a8d79ac3f90d5b401b16dfc3fcd3808c637208d85c09bbf62504e4fd3ffa1a0f17a55db7c514495da6ed546db5f5b781a086e539d1dfd58b8c10daab7029a504173f2f9f80058073efd29ec6e2860e18e828c54b0866125b2122182d643cbd6daee337b60753b5da4c142bd8bd9edfeee74aa1c5546baa6b97aaea8bea1ba5155a8942f2008c2acf99e7f06d13fbfacdf6f21050000",
    ],
    [
      "ETag",
      "9HcIU3T2/lydsupfJTgJrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1605334902709"
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
      "ff8d505d6bc23014fd2f778f6ba1d64d51f041876c823857150643248db75db5edcd92744ec4ffee4d1cc3c7bd2437e7e3724e4eb02fea2df4212df2af06f5f12e47fbe686044d535ac397a2da20048056e4acacd39fd74cc7915c1851ccefbb6af99e1f8683012b8cfcc44a40ff045981e5d640ffe304b5a8906d9b8df61b59668fca2193d972fc3c4e18a868eb80d96a3a1d8ea66338073736b5ff97657d0e60476982196aac25ba144ad30ea59db8824654aac4d050a3251af0624fe49a1a253451c848d8eb84ad4ef4d86e3ff4a2b81bf558589214b6a09ab5ab0567034b5694091db81fc42cd07ee4aa993fbf3dec3ab8a9e5a3dd72ad3f2e76dcfa77e1e868d1cc35713a832e58740df9442eb8e5425637188014fccb2f85bdbecf17f9ecf62fc2010000",
    ],
    [
      "ETag",
      "nbxOfr20cSsaiP+7pTXgwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfdb6e82300000d07fe9b3186de9b47b9b72e91ca22c308117d2d41a9828a5addc96fdfbccce1f9c1fc038175a17a6b98a3b7805238364cee71f72b1c1118ff9e34d772a9cca5abb664d5ce51797e0041b8fd82ca51495bc35ecb4e7477420a277eca56832ab7991fb507dd764bb8c45dde2cb27ebfd849ef323ca43674095dd598a6e61920512e1b6fd7209bba679eac32aa07258dcb2315bd1775806d8c98ebb43c3605f4ed72d9725260383edbe340f2b4a4381ac559110e3af16b7b8be4de73b25044fe13a1dbacaf3bdda3a65a39744cb56efcc30466006c4202b2574513db308133203fff3c28c523cfb1bc19450e0f70f3f66079a18010000",
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
      "Sat, 14 Nov 2020 06:23:01 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-97-1605334902709",
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
      "0002ff85536b4fdb3014fd2b91f7159af4dd54aa4655c2286ad391a4b0699a22c7bd0986240eb1c38450fffbae1d5a8190e0536cdf73ee39f79117f2c0cb1d999284678f0dd4cfdfee45424e08289ae16b16f6af0ada0d5690a4574973f7cbbe1f47d7b31922b866495a54399c4ad1d40ce4741b76b25a3415ad8538c544a7eef8b43b7286fdfec0757a63c7459e843c5df1f201d9774a55726adb07ed4e26449603adb8ec30511cdfeda79e5dd5e21e9892f67b491b55a4fdb9e8f75c30aab82867db100d3412ea180aca735de091b94bcedea7ee705a7432043f71069431d1944adbc2144c9429cf9ada6425d317626cbe3990d05b798bc862226f8a322e690127d68e2a1aabe70aac8b60b3b696fec52658cfa3e5c68fc3c5a5b79e77169bd576ed87d6eda5177896a2490e866bcdac3373f3f182fa3b908a97463dd2cf5af9b541cb8f63d1049496d006e3b133a2dd89e326693266e9a43f4c52079264928c87b49f38cc1dc0609700459e11352c5a8a72e4740146d4897bdd911b0ffab417bb0083d871c73d3a4c872c4d06647f42fed55cc139979590bced10b90d96911747c1d65fcc23cf9490d22657e7ad315dc05b8f0a0b44d02735ed75940b54d2ed5efa9117cc17d1f2c66b27bc828cb2e7f011679cd25c02a2698dcd5350afc50e1b46fcf9da3b47b099d8cf435092e99f17a27bae5dbc69f9911ee100b55d65be248c82a5ffc3d839206e68de18c8537b20155abec3dad0f5fe2f227149db2ce47aeb05bf49fb14400a3594eceb6922d804befcd70e8b8f585c7d94910aefb83b4c6a115643bb43dc947b604f7a8e3320065cab0fb16eb77fe89acea1334201a57aada85d7c2cb4156be41184411cbf6fbab5ff0f5367bf7878040000",
    ],
    [
      "ETag",
      "gS3Jma1RLebfJbuhX/j7TQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1605334902709"
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
      "00000002ff8d92dd4e83401085df65bca509d5fe92f4a2d5aa4db05a4ae38531cd1606c4c20eee2e364dd37777166b356aa23730337cb39c736007eb4cc6e0c12a4b5f2a54db9314cdcc1601ea2a379a6f25498de0001a913229af56b25868ba5ff5f0de97ee66dd9b2dd2c180091d3d6121c0db4192611e6bf01e76204581bc16515e157259770e986d6987f330984cafb82f28b6fd74e1fbc3913f86bd735c8c8511cb9affc7dae3de81675a0598a04219a1d5522a7ac6c84cac4d2d8a32c786a64a45a8a186eb07a9a2aa148aa8c19346bfdb6876dcf6d959abef9e76dd3e833945c26424995dcc591f1832220f68c32ea1c380aa4b369cd4d7571e67716dc4969369d869d5fabe022c2dc9725cfe0db2de27c19fe1033b44f09d130555d21ca94bff76f8db719ce9e75117c370fc83d086933a22e1e4663c0f873777967b3c781f6d0dea3b451ca4469b61d36df5dadd8efb1eeb39d9a8f93d9e51153a1009fe3bae33035e22728dfb376e3cf4c27b020000",
    ],
    [
      "ETag",
      "nGbnmUsoWb8eWLn0wk8QUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1605334902709",
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
      "547f4fdb3010fd2a91f70f68fde13649db5442ac2b19742b2924290c6d53eba44e302471b01da60af5bbef9250a01b03295262df7bf7de9dcf7940b72c5ba1210a587c5750b1fe70c303d44054911876071f59fe557cbbc473e3e41c3bd3f1770f7ba3830340b09225499a27b4297921422a8773af150b5ee44470de84444d6bd0ecf4b0a9eb8685bb7d6c014fd2249ab2ec16d8d74ae572d86e6fb55b31e7714249ce642be4e9d37efbbedbce05bfa1a192ed5dc936a8c8f6dba287090f89623c3b987b60a090542c684a5802169e99abe0d36eea1623692b06f03d0b2909435e64aab40529429e452c2e4495150d1f5065f3c507f2eca93df6b5f16ceef87b4b9296e4e5be46a4b658082a8b4435b425d414b1842ed86a5947f25bed8b3b3b850838b82692caa5767962bbb6a62d4bd0cf02639d6a87dac839d276f913479b3b8eedf9dadee1be76eccee667dae7ab1d0c185f51a95856d9f64990d0d2f2636727ff9e6749200a6cd4c1451ff7486780ad200afa6134d0cd20c234080641df247a8043cba0c62aa00478aacc5eb148c6339d9a516fb0c241802dcbec84a66e750dc324bd88ae0c9d6063d0d3c37e5f479b06fa2d98a2474ce65cb2babde8d29df8f6c277e7ce78e4db55191181161ed5e6ca225efa54502480dea86b53461907a5f2ac268e6fbba3b13fb9b0ebf198d298846bef0e06242289a4802682a4545171ca57d0347436f326fe64e68ca6c0a8cefc6c8b9068f8e3e199e0aff3aacbaa7a975a3da3d2df022e48525488fbfa03754cb4d934fe9f62e4baa32b90254290f5ebe95fcd5fe1ab556df1490f956adb55176d7e6de06920b84a7576743eb7dd2b546fb934a28266e1fba303e02af0ee1f617b3d010b171464a482350c6a284b9150d07a60595ad97d640fba560fa30a2cd4df311df7adedc99439ca8c34a5997aaca8be9e55a3ca50219f401084397326ce3144ff0089792bce1e050000",
    ],
    [
      "ETag",
      "8+ipJrKW0U4HQ0NLCXS0SA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1605334902709"
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
      "000002ff8d50c14e834014fc97e7518894aab5243d5053b59154451b0f86345bfa4028f070779190867ff72dedc183072fbbb3f3665e66f600fbacda8107db2cfd6a50766729ea170342544da1155f35550ac102d42265e5bc7872cfbbc7d67fbf08fcbb6c92e4e3266f673356a8f8134b01de01920c8b9d02efe3009528916d9b8d1c36b24c77b56196abb7c5fd2264a2a49d2156eb20f0e7c1027aeb97addeffcb12f516e4b40d314189558c26452d29c7582f4d4125caba405b51236354308887412aa9a98524b299b1a737f6e8dab91a8f2fa78e3b71a62c2c28163aa38ab5eb57ce069ab428426ab91fb82c9003e4aac9707e0fb4e9704291c17fcd4666169d16ce3b8dea5912a753688239c790b764826b2ea4658316c4827ff921d3c777ff03d0fc47dac2010000",
    ],
    [
      "ETag",
      "BlO2+yKwAW/LAFi7fj3ujw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb642d0e6091a43ba24eb1b4141411b3612204d40286447ee9f4ee75fa6ef07e00cd322665fab87fb306bc82899a689ecd3dae632bcc6abb714436989fd4c704a98b8372c7d6828fdb5226a9da8cc21232249d8b208a7721d2b57b8b57fea93ae2c9d79825f176e55541d1e7078f53de4c1b4cf3429197f626ecc88bddfe5241df505b6e5f6bd8c5611faa522727ed62d8efbc88f7794b0255d6b28b86ce3c92e3579d24e7bbd1ee344828ecca119a41b285cbc11b1b47f723bfd2ddfa161b418fd6dec2e4ca1dc8592b0e5229feb62ec10cb0915f0593e9f5995d5808cdc0ff3c7d4c9c3dfb9851c104f8fd030118004c18010000",
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
      "Sat, 14 Nov 2020 06:23:03 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-99-1605334902709",
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
      "fbda04f27e48d11a2574434bc84648b26a9a903117ea1630c5265555e5bfef629aae55a5f613b6ef39f79cfbe089dcf13c225312f2e4be82f2f1cbad08c9050145137c8d9cc1c3fee178bf5bae7f5c5bbff9fe501cee92d90c11bc66499a1529b4a4a84a0672badbb6935254052d856861a2d664d2ea0cad41afd79f58dd9135419e84345ef1fc0ed9374a15726a9a67ed76224492022db86c3391bdbc9bc7ae5994e2169892e65b491355a4f9b1e8d75430aab8c867bb2d1aa82494016494a768e13f330a2fdfa66e739ab513041f3903ca98a87255dbc2144ce4314faa526725d327a26dbe3a90adbdb217bec1445a657990d30c2e8c882a1aa8c7028c2b6fb3361cf76ae3ade7beb37183ede2bbbd9eb7179bd56eed6e8dc377dbb30d45c31434d7981997fae6e205f523908ae75addaf9f6be5e70639efc75213505a42130c46d69076c6d6248cc3118bc7bd41185b1086e37034a0bdd062933ef4a31028f2b4a866d15ce4fdeeb0db897a2c88866316f459370ac60caf9d413cb0221ac2a81b91d3057928b98225978590bce91039788e6f07beb7731773dfd625c4b44ad5b2315617f0daa3c20211f4414da73aca052ad5ed765cdff6e60bdfd9dbcd84579050f6b8bdc719c7349580685a62f314946b1161c3883b5fdb4b04eb89fd3c072599fe792275cf6b17af5afe42f77180b55da5bf64eb7b8efb4ddb3923f634ad34e4d81c4881966fb036747dfa8b485cd2260bf9b5b3bd6bd23c7910430939fb7c9a08d6814fffb5f3e22316571f65a4c23bee0e93b5082ba1d921aecb3db3c7bda1d5211a5caa77b1d1b07fee5a9da3ce0819e4ea",
      "b9a266f1b1d046ac922f200ce2f85dddadd33f24fcb6db78040000",
    ],
    [
      "ETag",
      "dI5wVwvqUDMKY0XiVWpWkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1605334902709"
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
      "000002ff8d925b4fc2401085ffcbf85a62919b34e1a1202209d752121243c8d24ea1d876d7ddada621fc77672ba251137d6967a6df6ccf39ed119ee22c0407b6f1ee3947595ced50cf4de1a1ca13ade82678a6102c40cd76440ab15a15623abf5e0dbc9ee81e1a2a9b056ea743840af69832708e10c598840a9cc723642c455a0b7892a7d9a6ec2cd08530c385ef0d2703ea531e9a7eb21c8ddceea80f27ebb21832cd3625ff8fb5f5c98203df7a18a1c42c40a345487ec0400f8d4dc552916045f15c06a8a084cb073bc973c124e7159a54daed4ab569376ab57adbbe69d96d02131e301df38cd8e582f481e69a251e7f2597d024409625198ecaeb0b8de3b03462cae1c46fd64b7d5f019216c5096efe0649ef9ed167f8c0ce117ce758caf34c5fa8fbd1d4fded38caf4f3a83bd7efff2094a6a42e883f1cf717be3b9e196e7df6de2d34aa99e414a4429361d5aedf365a4dfb3dd61e3751d37b1c2d73b42060f4773cc41a9c88250a4f6f21ec6b057b020000",
    ],
    [
      "ETag",
      "ppXXypOQ/XGRCpBj5snPcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1605334902709",
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
      "fd",
      "6f",
      "9b3010fd5790f74b2be50342423ea4aa63095dd152d211d2aadaa6c48049dd02a6b6c99455f9df7798a66dd66d9590c0bef7eebd3b9f7944f7348fd1088574fd5012befd70c742d44044e235ec5a67d76d31c8ee6c6b62ff3a37e22f1b7e5ed8272780a0154be0ac484953b09247448c16f3d69ab3b2c09cb126246a1abade342cbd679adda1dee9eb43200a9226539adf03fd56ca428cdaedbd786bcdd83a25b8a0a215b1ec79bfbde9b40bceee482445fb50b30d32a2fd8eea69ca222c29cb4f167370500ac29724c334050f2fd438fc7898bb4571d65a0378432382a38895b9ac7c418a88e5095d975c6545a347a47cbefa407367ea8c036d3c5b78c1d10a67157975ac61a12d979c8832950d6d05452534254b1aafea4871af9df9b30b8880835b2c885869d7e78eef682f5b2bed7ba9eb26d14e35db9b6887595c4f5b789e330fb4a3d363edb33f5b5c6a9f6e0e30603f2642d25c990f709892caf85383ddb7e75a11b004e53ab8eceb163606fa304cc27e940ccc5e98e8240c0761bf87cd508f865dd28d43828127abec8a857396f7b16e197107bc1bb149f4d0e86268eca03f4ca25e571fc4b165247dcbeaa25d03fde4549209150513b46e32baf6ddc05906fec21bdb81a3ca48303472529bab8a78ed53429100fa4f5dbb2a4a19285527e67a81e3dbe3c0bd72ea219992358eb6f307189304a782001a739c1149f8058ba169e87236770377e6d95360a893bfdc23041a7d7b7c2104db427559aa379a07beeb7d5606f6882b9c960ab2a93f905d8057b4db35fe9dc6f67dfb06a431e778fb470ccaa93af957098557abdae65ed24095da7ed541bb1f3b781a086e559d1d7d5d38fe0daab77c92104ef2e8fdf101b00abcff77d8df5400c35d051d21610dd31a894a25e2a49e5a9a29bf4fec41d71cf6900273f926d6d3cdfdf15439aa8c2423b97c2aa9bea9aa5355",
      "a814cf2008c2b079eaa476bf01d53ed8342b050000",
    ],
    [
      "ETag",
      "6FW/s8mjA6DAzH1dKvrHpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1605334902709"
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
      "000002ff8d504d4fc24010fd2fe3d136690b6a20e120a62a09215ac10386906599d642dba9fba1210dff9dd9c5188e5e7667dfc7e4bded605f365b18c2a62cbe2caac35581e6d50d196a5b19cd574b8d4608008d2858494d7d5deddf6d26c7bd656d978fb19ccb62346285969f580b18769097586d350c3f3a68448d6c5baf95dfc83273681d3299cdd3a73463a0a6ad03668be9f47e3c4de1185cd8dafdbf2cab63003bda6498a3c246a24bd12adaa1341357508bbaad30d46495440d5eec8942916d85220a1909e3280ae3dbe8a6d7eb0fa2e42e1ab0b222294c490d8b176f1c0e0c195165f4c305216181f22377cdfdf9cd70df977053ecb35d72c91f97386ef5bb707c30a85f14713c8d2e59744ef9402eb9e14646590c400afee6e7d29cdfc7131a7bede8c3010000",
    ],
    [
      "ETag",
      "onm+lkVuRcB3ZmuZF1cTcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d0e3fabe94e22a8e1a380a5c0868969b0145048f8a9d3bbd7e9bbc17b0242291322eb6e25bb827770272a9cd3b9ddc8c6c2ffca7a4edb8b89fa692b7c8dbe6db54ddaa505c68a367d1fd67c4c2076505eb5a75518667cd4952bdab5636f7dacbb9e5622412a8a824f5bff3151846d0879637a2bc341bba576644bca5df4d8909bafeaeae4aa1876791d4b5789ece582ef11714998513688438eab24c08925a5f7496cd5d4835dd9c7daa8c063e9d4b17cde47f9e0583135ce4e540f867b11e21cd8d6215c3f4e27dd9b96c894641fcc009b9a82339115afacb6807006fee759776fd8ab6f30c21907bf7f4798ae9d18010000",
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
      "Sat, 14 Nov 2020 06:23:04 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-101-1605334902709",
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
      "9b3014fd2bc87b5c134842028914ad514adb4809590969574d1332e642dd024eb1495555f9efbb98a66b37697dc2f63de79e733f78210fbc4cc884c43c7baca17afe722f62724240d10c5ffd5a5c5c2d03fbdeab1f6e9d4b33ffbaff513c4da788e00d4bd2629743478aba622027db4d37ab44bda395101d4cd4e959bd4e6f640d07037b6cf51d6b8c440979bae4e503d2ef94dac989691ec5bb9910590e74c7659789e2eddddcf7cd5d25ee8129697ed43451469a9fa87ecb05a38a8b72badda0835a42154141798e1efe5093f8f463ee2ea7453743f09e33a08c89ba548d2f4cc14499f2acae7456327921dae7bb03d9784b6f1e1a4ce4755146252de0c448a8a2917ade81711eac57c6c23f5f07ab59b858fbd1667ee9ad66ddf97ab95df91be3e6d20b3c43d13807cd35a6c6a9bef97841fd04a4e2a5560f9be746f9b5438b7f07d310505a421b8c1c6b447bae358ed3d861a93b18c6a90571ecc6ce900e628b8d6db0931828f2b4a866d152940ef493e1680891eb3288ecd44e233a70dcc8492ce80fe2b86f8f5c7238214f155770c6e54e48de7688dc048bd08bc260ebcf67a1a74b48699dabb3d65853c07b8f0a0b44d07f6a3a34512e50a969f7c20fbd60360f17d75e3be12564943d6f1e71c629cd25209a56d83c05d54a24d02cf76ce59d21584fecfb3128c9e4e70b697adeb878d7f2377a88036cec2afd259b3058f817dace11714df35a43f6ed81ecd0f21dd686ae0fbf10895bda6621575b2fb825ed5300295450b2cfa789601df8fc6f3b6e3e8271f751472abce3f230d9a8b00ada25e2bade23dbb5c7f6906870a5fe8e0d2db7776c5b93a3c9080594eab5a476f3b1d256ac966f200ce2fc7dddaec36f19b5bc497b040000",
    ],
    [
      "ETag",
      "NuoGQLR4jEukY7H/l+vXmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1605334902709"
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
      "5d",
      "53",
      "82",
      "50",
      "10",
      "86",
      "ffcb768b339886ca8c1768564e7e14d245358d73840531e0d0f9c8ccf1bfb787cc9a6aa66e607779f6f0be2f6ce1312d22706191264f1ac5e62841756d0a1fa5ce94a45bc90b8960012a9610d90fdb5adf4e2fef16bd81238297dbe475bcf6ba5d2264b8c49c81bb8538c52c92e0de6fa16039d25ac8339d17f3aab3406d4a339c05fe70724e7dce23d34f6e4623af371ac0ce3a2c464cb179c5ff63ed6167c18a2f7c8c516011a2d1520abec2500d8d4dc9f232c39ae45a8428a182ab0789e0ba6482f31a4d6a75bb5eab3bf649a3d1ecd8c72dbb4364c643a6525e107c332381a0b86299cfd764131c02445592e3b8ba3ed3388d2a27a61c4e02a75909fc0a90b638cd70fe374882978cbec307b6cfe03bc772ae0b75a0ce4653efb7e328d4cfa34ebd60f083908aa23a20c1703c9805def8ca700f7befbd8d427925382529d18458b79bed939663bfe7dae7266b7a8fab84460b4246bfc745aac08d592671f70647828c557c020000",
    ],
    [
      "ETag",
      "Cc8uuYOKZbBE6rTxYgzMwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1605334902709",
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
      "000002ff8554694fdb4010fd2bd6f60b4839ec9c4e2444437069aae0501f44a8ad92b53d0e0b8ed778d74101e5bf77bc261ca52d92257b77de9bf76676d68fe496a511199280adee0ac8b79f6e78406a04245de1eec357eb211a6dbef9d21ddcb9bdf9783c3ff1ef8f8e10c14a96a0eb2c81bae0451e8218fa6e6395f322a339e7754c5437f456dde8e9dd76bb33d05b7d7d804401493c65e92dd2afa5ccc4b0d9dc8b37569caf12a019138d90af9ff79b9b5633cbf90d845234df6a365146343f503d4e784825e3e991efa2834240be803565097a78a146c1e7b7b91b8cae1b2b046f5808340c7991cad217a608791ab35591abac64f84894cf571fc4b5a6d6d8d3c633dff60e96745d9297871a15da629183281259d3965854cc1258b0685945b25bed8b333bc7083ab8a602c4529b7fb51c4b7bd95a6a3f0b5d6f8376ac8dec53ed6d9689adf9b66db99e76707ca89d3933ff423bb97a8341fb1108c95265dea34102a5f1a7064fde9f6b49a01295abe0a2aff7a861ea83200efa616cb6bb41ac43109841bf4bdb811e0e3ad08902a0c8936576c5a2294f0dbd4fc3ae1180d103daa141cf342230db0185766f1040075a83586fb581ec6ae43e67124e99c8b8605593c9dc9978d6c2737c7b3cf22c55464cb191a795b9b288d73e251689a0ffd4b52ba38ca352796213dbb39cd1d89b5c5ad5904c6145c3ad7b876312d34400a2694ed720213fe711368d5cccdc893799d9a32932d4c95fec11820c7f3cbe10bc6da6ba2cd59bb89e33b1cf94813de2922685826caa0f4233f44a76bbdabfd38c1c677485d234cfe9f68f1896d3eb94f4bf4828bc5a5536f7920629d5f6ab16d9fddae1532378abaaece4bb6f3957a4da7220861cd2f0e3f141b00a7cfc77d8df5404e35d451d21718dd31a8a5225cca19a5ab6567e9fd866b7af1b448173f92e6676ccfdf19439ca8cb086543e9554dd54d5a932548867100671d86c7552bbdf8efd05802b050000",
    ],
    [
      "ETag",
      "zHEzdAvJUtS9qS6WCCWBUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1605334902709"
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
      "90",
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb7885048ad540d2436ba82521c4a26d628c69b6cb146981c1dd454308ffdd017bf0e86977de7cf3f6cdf67029ea0c023816f9678baabbc9d16cc74b8aba2d8de6a3a15a23588046e44cae375fa91649bb5cef33ed6f5d397f8dbc7cb16042cb0fac04043d9c0a2c330dc15b0fb5a890c70e0735393266ba6654a2e4257c0c53162aca4621d9c5f172158730587fc69acbbf46de070bce744cf1840a6b89638a46d119a589c605b5a89a126d4dad92a86182a746aea86d8422b259b15d6766bb77cedcf36e7d6776eff84c96248529a86678f7cce1c09011654adfbc203870ad579d41fda488dd3566d70e5b3ed0f8b0e14046b5688114fc4b9bc2fcd6c30f257a1b5c82010000",
    ],
    [
      "ETag",
      "FHvRsaNuAFVds9Q1c5YI3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "56",
      "82",
      "30",
      "00",
      "00",
      "e0",
      "77",
      "d9b57a1010b1bbb6e227101b334c6e76264e8319c30d01e9f4ee79fadee0fb01ac28b8d6b49582d7e009dc99b99a15b3a831e002f3781b41dd6c4ec70b95648a4cf296de12e1b98a78ebcd5e15b414ef7e5e1be155eee8ad3b888af59f57d1cf9bb0cc6e707053622c8d7a7477896d92674d969ebb40365eb3183a4d3c9ea53ca1dd00e3717fe8a3a075f24b5d33dc751557fe2bb2f24e6e71f295854ca5978c4173c88863ce8363d5a24a24f658eabeb7d2350aa54fef282902ef65c00229fc111cb7084f756845ec7b9edb3837cf6730017c684ac5352d1f596bb15a4dc0ff9cb6f7863ffa9033c515f8fd03302701d018010000",
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
      "Sat, 14 Nov 2020 06:23:06 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-103-1605334902709",
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
      "0002ff85536b4fdb3014fd2b91f771b44d495fa9548daa0d10a94d214d41d33445b673130c699cc50e1b42fdefbb712803218d4fb17dcfb9e7dc479ec983281232254c64bf6aa89ebedc4b464e08689ae1ebf87e7995fac1fa220f1d79211266ff71bf5ecf6688100d4bd17d994347c9bae2a0a6bb6d37ab645dd24aca0e26eaf46da7d31fd943c719b8f6e9d87691a8204f57a27840fa9dd6a59af67a47f16e266596032d85ea72b97f7def3d9ef6ca4ade03d7aaf75eb38732aaf789eab75c72aa852c66bb2d3aa8155431eca9c8d1c33f6ac2cedee7ee0abaef66087e141c28e7b22e74e30b537059a422ab2b93954c9f89f1f9e640b6deca5b44169779bd2fe282eee1c44aa8a6b17e2ac13a0f376bcb0fce37e17a1ef99b20de2e2ebdf5bcbbd8ac76eb606bdd5e7aa16769ca72305c6b669d995b8017d44f40695118f5a8796e945f3ae47f1c4c434069056d301edb23da9fd82e4bd998a71367c8521b189bb0f1903acce6ee000609038a3c236a58b490c5e9b8cfd87062c77cd81fc7833ee3b19b0e86f1c805d776808f129690c309f95d090d4ba14aa944db21721bfa911747e12e58cc23cf9490d23ad7cbd65853c05b8f1a0b44d07f6a3a34512151a969b71f445e385f44fe8dd74e780519e54fdb5f38e394e60a104d2b6c9e866a2d136c1809e66b6f896033b1ab635091e98f67d2f4bc71f1a6e5aff40807d8d8d5e64bb651e80717c6ce117143f3da401edb0329d1f21dd686ae0f3f11895bda6621d73b2ffc4edaa71052a8a0e09f4f13c126f0f9df76dc7c04e3eea38ed278c7e5e1aa51e115b44b244cbd47f664e4d83631e04a7f880d86f6b16d4d8e2623eca1d02f25b59b8f95b662b57a056110e71f98761dfe028ae078ce7b040000",
    ],
    [
      "ETag",
      "7jDPfINMGlR3oGidb0x9+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1605334902709"
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
      "ff8d92dd4ec2401085df65bc2d49cbaf36e1a22a2a09a04289898690b59de262db29bb5b0812deddd9aa68d4446fda99e937db734ebb836799c7e0c3a35cac4a54dba3059a5b5b8c5197a9d17c2b28d7080ea0110b26f3cbf39e779facd61b752737de8b6c52dd0dba5d2674f48499007f0789c434d6e03fec201719f25a446999e5f3aa73c06c0b3b9c84e3fee892fb8c62db8fa68341703ae8c1de392cc6c28879c5ff636db67760498f634c50611ea1d552285a6264fad6a6165991624d53a922d450c1d58385a2b2108aa8c6939ae7366a5edb6d351acd13b7de714f984c29124652cef074c202c19011e998366c13da0ca8aa64c749755df358c695135bf64761bb5909fc0ab0b644a638ff1b64c14f82bfc307f69ec1774e6454e6e6405d0cae83df8ee3503f8f3a0fc2de0f421b8eea8084fd616f1206c31bcbcddebd9f6e0dea1b459ca4461ba2e7368f5b9db6fb96eb19d9acf93dbe51253a1009fe3daea4013f11a9c6fd2baac1888c7c020000",
    ],
    [
      "ETag",
      "nGDE1ZfqvwrWiw1zi4o20A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1605334902709",
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
      "7b",
      "4f",
      "db",
      "30",
      "10",
      "ff",
      "2a",
      "91f70f687de4d1f42521d641b6558394a529086d53eb38976048e3103b4c1dea77df39a10cc636a44a4d7cbfd79deddc931b9ec7644c229ede56506ede5c8b88b408289ae26abaa9dede6d6cc9add9e25ac1e7d1cf0b5a4c0e0e10c1354bd27591415b8aaa6420c78b79272d4555d05288360ab52db3d7b6faa6eb38bd91690fcc11122564c909cf6f907ea55421c7ddeecebc930a9166400b2e3b4cac1fd7bb7776b728c5353025bbcf3dbb6823bbafb81e668251c5457eb09863824a42b98435e5996ef1911a47ef9e6b77385d775204df7106943151e54ae7420926f284a75559ab92f13da9733e792073efc43b0a8da3d9c20ff75674adc9ab7d834a63b92c4156996a192b6c2ae1192c79bc6a2ac58df121989d6205135c510972655c7cf202cf30563155b032be55a6e98071684cfc63e3b9c2d43716beefcd4363ef70dff818cc1667c6fbcb67188c1e83543caf838734ca40877e18eef4e59e6a025518a4292e07669f5a43731425d1802543c78d1213a268180d5cea44261bf5a017474091a7b47acda2b9c87b3d6be858b163d97dea0e5ce62476628335324d36704c378ee3916b3116936d8bfc28b982632e0b2179336072114c436f19060bff68127a751b09c5211e37e174134f732a6c1241ffe96babab5ca093deada91f7ac1e4289c9e7bcd01398194b2cdfc168f4842330988a6255d8382f254c4383472369b4fc3e9cc9f9c20a3def5b31d4292f1d7fbdf847053d45356f53f39d60d6c9f089ed3acaa0177cd03b14ddb6c9b76db72c976dbfab7d224082697e84ecb926efea86147fd9ea6ffc5a7c6d76f4dd29daf45b4db630ab2fdbec55f8be0a56ad4c997",
      "85175c92662980044ac8d9eb2708c175e1f58fc3eea22218af2afa4885ef786099d42eac84e6e0f2759df7813d1c38ae4d6a70a95ed47afdd16e87b486568435e4eaa1a5e6a2d693d2a54a3e82b088e7cd9ffa1fb1fa0b4434cd042a050000",
    ],
    [
      "ETag",
      "gyu+vy2si1OUjteK9zWapA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1605334902709"
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
      "8d50c16e824014fc97d72ba4a0b60d241e4a43aca931856a7a688c59f14151e0d1dd454b89ffee5bf4d0430fbdeccece9b7999d90ef679b5051f3679f6d5a06c6f32d4910131aaa6d08aaf9a2a8560016a91b172710cf693dbc9cbbb1b6485683d7188be7fa2f198152af9c45280df419a63b155e07f74508912d9b65ecb7e23cb745b1b663a5f84933066a2a4ad21e6cbd9ec31988570b27ed9eafdbf2cab93053bdac498a2c42a4193a296b4c3444f4d4125caba405b51231354d08bfb4126a9a98524b299b15d6764bbf7cedd7038f29cc183e3b1b2a044e89c2a162fdf381c68d2a288e9c80561c002d943ee9af6e7a1a74d892b5a19fcd7cc35b3d57561d06a54af92389e4293ccb9a47c22935c73232d1bb42011fccdcfb9bebc4f679fad6c14c3010000",
    ],
    [
      "ETag",
      "TwBkG/GKW1Bglay9avQxzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "74",
      "2d8620dfd951c51fea20a0221b424b6500810a08b466ee3e642ef092f70131c6a46da3ae2e4805be008b25638ee73615a172c60fcc4dbf0cc372971ee5872f5e6eb7eddd1dc9c1e22e47048e5950cb8aa146b40ac42766d1b5e8f93a1be8c083f6f4b46b7b7be2fb016d50d98a97f7c20c8d506b2ce15d487013a4d755c8925e871a5e1aec2ec9a9b0dc73ae5d6bc74d2a5514bc0afafd8ee7b9e2d09fa3abf249c95d2da0f6ea5b64291a2dac39dcd385975f2294171dab178717f72872520547bdbe96f37322999e0a0ba8b214cc001969d69036caa6ec42318c19f89f471da364ea431237a401bf7f80f7cac318010000",
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
      "Sat, 14 Nov 2020 06:23:07 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-105-1605334902709",
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
      "6d0249202191a235a2748d94900e48bb699a906d0c754b30c5265157e5bfef629aae55a5f509dbf79c7bcefde0193df03245334478fed8b0fae9cbbd20e80c318573782d2cd35b3bd7753ef40ef77f7e6ca2a89287c37c0e08deb224de5505eb49d1d494c9d936eae7b5682a5c0bd18344bd81e5f40663cb198deca9359c5853204a56642b5e3e00fd4ea94ace4cf324decf85c80b862b2efb54ec5edfcdfdd0ac6a71cfa892e67b4d1364a4f989ead74250acb828e7db081c3492d509db615e80877fd4949cbfcfdde778d7cf01bce794614a4553aad617a4a0a2cc78ded43a2b9a3d23edf3cd0145fecaf762838aa2d995498977eccc48b1c2897aaa9871196ed6c632b8dc84eb45bcdc0449e45df9eb45dfdbacb6eb20326eaffcd037142605d35c636e9ceb5b0017d04f9954bcd4ea71fbdc2abf7468f971302d01a425eb82c9c41ae3816b4d4946263473470ec92c46884b260e1e118b4e6d66a78461e06951cdc2a528ed89c31c2b1d2684387662a7833471c7d371e2dac4b15c4af0d01da2e3193ad45cb10b2e2b2179d721741b2e633f89c36de02d625f9790e1a650179db1b680b71e151408a0ffd4746ca35c8052dbee6510fbe1c28b97377e37e115cb317d8a1e61c6192e240334aea1798ad56b9142c350b058fb1700d613bb3e05259afd7a466dcf5b176f5afe4a8f6180ad5da5bf288ac365f04ddb39216e70d168c8be3ba00a2cdf416de0faf81b90b0a55d16f47deb873f51f714b28cd5aca49f4f13c03af0f9df76da7c00c3ee838e547087e5a1b255a135eb9688eb7a4f6cd7b56c076970ad3ec406e3c1a96d6d8e3623",
      "dbb152bd94d46d3e54da8935f2150441987fa0db75fc0bc3030cc27b040000",
    ],
    [
      "ETag",
      "l0/CM5Prg2CwjzXOSSpsww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1605334902709"
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
      "8d92dd4e83401085df65bc9426d4fe59122fa8addaa456a5188dc6345b185aeac2e0ee626d9abebbb3a8d5a889dec0ccf0cd72ce810d3ca6790c1eccd2f953896abd374773658b0075298de65b41b94670008d9833296fa3fd9bee8cf44d6715f45e1a679dbbfed23f3a6242470bcc04781b485294b106ef7e03b9c890d7229265964fabce01b32eec701206c3f129f719c5b61f5f8f467e6f3480adb35b8c8511d38affc7dac3d68125cd024c50611ea1d552285a626486d6a6165921b1a6a954116aa8e0eac15c5159084554e349adeeb66af5b6db6a349a5df7a0e376999414099352cef0f5840582212364402bb6096d065455b2e3a4ba3ef3388d2b27b61c8ec376b312f815606d492a71fa37c8821782bfc307f69ec1774e6454e666479d8c2efcdf8ee3503f8feafbe1e007a10d47b543c2e1f96012fae797967b78f7de5b1bd4978a38498d36c4badb3c6c75daee5baec764b3e6f7784695e84024f8f7384b0d7889901ab7afbc918ca47c020000",
    ],
    [
      "ETag",
      "lXc+W9bosW7wRBx3H7ZDjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1605334902709",
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
      "69",
      "6f",
      "9b",
      "40",
      "10",
      "fd",
      "2b",
      "68",
      "fb",
      "25917c2cd86063294add84a6a80e4e314e9a1eb21718c8269875d8255512f9bf778038578f4848e09df7debc999df13db9e2794c4624e4e97509c5edbb4b11921601c5523cbdbbfb6a7a593f3e3bbd5b81fae45fc2e7f3cb746f0f11bc6249b65a67d096a22c2290a3f9ac9316a25cb34288360ab5756ab5758b9abd5edfa6c680da48949025139e5f21fd42a9b51c75bbdbe49d54883403b6e6b21389d5e379f7c6e8ae0b71099192dd9739bb984676dfc8ba9f8988292ef2bdf90c1d94128a05ac18cfd0c313350edfbfd4ee70b6eaa408bee111b0281265ae2a5f2811893ce16959d4aa64744f6a9fcf3ec8cc9938078176309d7bc1ce92ad2af2725763525b2c0a9065a65ada128b4a78060b1e2f9bc8fa4afbe84f8f31820e2e9804b9d4ce3e39bea3694ba9d0dd52fb5152da036d5f1b7b87da4b09d7d3e69ee7cc026d677f573bf2a7f313edc3f90b0c7a8f412a9ed7ce03166650b97ee8aefbe7a55604a6d049135c0ca8c5f421b5c3241c44c9b067860985301c860393f5421ad97de8c72130e4a94abd66b15ce483c4b44c36d0696c19d4841ef4a835b063ddb0ccc41a264904499f59f6906c5ae457c1151c72b91692371d2667be1b388bc09f7b07e3c0a9cb481876f1b0315715f1dca7c22211f49fba3655940bcc545d97eb058e3f3e08dc53a7999009a42cba9d5de38c242c9380685630dc02288e458c4d2327d3991bb8536f3c41467ded275b8424a3eff74f84e0765d7759d56f12b8c77847e3e393dac31674cab2b246dd341fc4a0066d53a3ad9b816e8cf4de48ef7728a5dfc866d3fab7f8d8f7c7e7688815",
      "05bb7d15c322ad7e45ff4bd61a5fff6acc6f5de8a4caf6e8896c7e6ef069115cb4469d7c993bfe39698e7c48a0803c7a7ba8105c07defec3d82e2f82717d310f2e82e238c391acb2440534b3cc57b5df07f67068db3aa9c1857a1db3f5beb1bdb44aa3528415e4eaa1a46679eb4e55a1523e82308823e8b9de11467f03fa78b99a3e050000",
    ],
    [
      "ETag",
      "zzX5Nl4dWVzmetHRjeKYjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1605334902709"
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
      "50",
      "416ec23010fccbf69a4809b42090384015515484da504e1542c62c2121c9baf6a61545fcbdebc0a1871e7ab1c7b333ab199fe198d73b18c236cf3e1ab4a7bb0cf9d583145d53b293cb50ed100240569928a7d83f347a698aeffa39c1286687851b8f46a270fa809582e119f639963b07c3f733d4aa42b16d36b6dd28323e19cfcc166fc9344985a868e789c56a3e1f4fe6095c825f3673fc97657d09a0a06d8a7bb4586bf4298ca50235cf7c41a72a5362e8a8b11a1db4e27690596a8cb244a130611cf5c2b8173d74bbf783a8d38f06a22c492bcea916f16a29e180895599d29714848e086c0ba5ebbe3d3f5bda97b8a1b5c77fcd623f5bdf164e4e8ceec592c473e89345d7948fe493b33462db60005ac9373fe57c7d5f7e00ddcdfc4ac3010000",
    ],
    [
      "ETag",
      "Ge7hucSpjznKEe01tsejsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfdd7243401800d077d9ebc808966cef2cad101a3a52193766f1496c4a36fe4a3a7df7667adee0fc205614d0f7d970bb428b5ed0c214b22ed67b21531c15c4f72fd63460e67de5959da6c00315f4e3c3a4c13629bd459c49c036d14c2ea50cba1bb9befb8eb549b348c81d5b5542b81f28f50d2ba9c25da5d6f15115de78ca638e353b37426a7599c5319e2389e6759875040c2d19254d16a6d716dea13beee38938a0b3368b437f1aada4b9d6adacb7aec4fbf4e4d855b91d1c089451e11f42ca9b543b7f7e2b22c579707fdb99c3c05da6bfde9a7253996885601675077d563fb32a266485fee7d9b00878f629b00e3af4fb07df67423018010000",
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
      "Sat, 14 Nov 2020 06:23:09 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-107-1605334902709",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fa34014fd2b64f6d5b6286d8126cdda54d46e5aba0b54dd6c3664182e382e30c80c1a63fadff732585763b23e3133f79c7bcefde099fce1554a6624e1f97d0bcdd3973b919023028ae6f87a6f56934b8b43a3ac9be2e6f1fcc25994df16f3392278c792b4ac0b1848d1360ce46c170ef346b4356d841860a2c1b1690f8ea7e6c4b2c6ae79629b2e122514d99a577f907eab542d67a3d1417c980b9117406b2e874c94afefa3879351dd883b604a8ede6b8e50468e3e51fd5a08461517d57c17a283564213434979811efe51d3e4f47dee21a7e53047f003674019136da53a5f9882892ae379dbe8ac64f64cb4cf3707127a6b6f19194c146d59c5152de1c848a9a2b17aaac1380fb61b63e59f6f83cd225a6dfd385c5e7a9bc570b95def367e685c5f7a8167289a14a0b9c6dc38d5371f2fa89f8254bcd2ea51f7dc29bf7468f571301d01a525f4c1d836a7f4d831dd244b6c9639d624c94c481227b127d44a4ce68e619c264091a745358b56a202d74a1d9b5a314d208dc70e7563ea323b9e4e298c59ca5c8701d91f91c7862b38e3b21692f71d22d7c12af2e228d8f9cb45e4e91232da16eaac37d615f0d6a3c20211f49f9af65d940b54eadabdf2232f582ca3d595d74f780d39654fe13dce38a3850444d3069ba7a0d988141b46fcc5c63b43b09ed8f7435092d9af67d2f5bc73f1a6e5aff40807d8d955fa4bc22858f917dace0171458b56431efa03a9d1f22dd686aef7bf11895bda67213f765ef093f44f0164d040c53e9f268275e0f3bfedb0f908c6dd471da9f08ecbc364a7c21ae89788eb7a0f6cc79d4ec644831bf521664fa687b67539ba8c5042a55e4aea371f2bedc55af90ac220cedfd7eddaff05d2c665f07b040000",
    ],
    [
      "ETag",
      "q0n5H3iert3XlXwFG8AmJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1605334902709"
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
      "85",
      "df",
      "65bca509b5ff24bda08a95d856057a659a660b434b5d58dc5d6a9aa6efee2cd66ad4446f6066f86639e7c0019eb322010756d9faa542b9bf58a37e344580aae25ad1ad148542b000355b13e973bddb7a4932bd73f73ceb8772b31bfbee7048848a379833700e9066c81305ced3010a9623adc5825779b1ac3b0bf4be34c3300afcd998fa5c24a69fcd27137734f1e0689d1713a6d9b2e6ffb1b6385ab015ab00539458c468b494526c31d6beb1a9585e726c2851c91815d470fd602d455532294483268da6dd6b34bb76a7d56a0feccb9e3d20928b98e94c1404cf4312085a68c603f14a36a14b80ac4b729cd6d71d8db3a476624a7f1675dbb5c0af00694b338ecbbf4112bc61f41d3eb05306df39968baad067ea6672effe761c85fa79d4b51b793f08a529aa3312f9532f8cdce983e11627efa3bd46f5200525a9d084d8b4dbfd4eaf6bbfe77a254cd6f41e47cb0a2d8819fd1eb7990627655ce1f10da89c63927c020000",
    ],
    [
      "ETag",
      "IltvjEddMKAyli8SrhvGIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1605334902709",
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
      "7f",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2a91f70f88b6499aa64d2b21d641601525853405753fd4da8e530c695c6287a942fdeebb3814e8d8861429b1efbd77efcee73ca17b9ec5a887085f3c142c5f7fba1304d510537851eedadfecab6c7d6ec9f6817996f4a707e7cee9d5e1212078c99278b94a595d8a22a74cf626e3c62217c50ae742d441a86e5b5edd6e5baee3b4ba56b363758128599a0c79760ff45ba556b2679adbe48d85108b94e115970d2a962ffbe663d35ce5e28e5125cddd9c26a491e607598f5241b1e2223b9c8cc14121593e634bcc53f0f04a8dc9e75ded06c7cbc602c08f9c324ca9283255fa02092ab2842f8a5caba2de13d23edf7ca0b13ff48f23e3783409a2bd395e96e4f9be81a5319be54c16a9aa1973282ae1299bf1785e4556f7c66938ba800838b8c592c9b971f3d50f7dc3d86a183f0acb72987164f4831363576310189320f0c791b177b46f9c85a3c9a5f165ba8301f331938a67da7a8449ca4adbcfed1dbc3fd592801558a982b38ed5c6b6677549423a34f11c97241623c4231d173bc4a2dd166bc58461e0a9525db3702632daf41ce2128f79cdb89d90d8b54827b1bb4d62c59e471dca5aed8ed5b163b4a9a15f3957ec84cb9590bc6a31ba0907913f8bc24970dc8f7c5d4682a18d2795b9b288b73e151409a0ffd4b529a35c40a6f2bc0641e487fde36870ed572332640b4cd7e307189204a792011ae778c914cb2f440c4d4397a3f1201a8c82fe1018fadc2fb708897adf9f5e09d17aa5bbacf41b9d0e47fda8ddd20eb6906b9c161af3587d20bbe1026253fbb74c3f0cfb53488df31cafff8841396d4dff4b068dd7abcae64b465466dbae9a68f373034f0dc19daad4d1d5c40fa7a8da0a59c27296d18fc707c03a",
      "f0f1bf617b4f010c3715f248056b98562acb2c3467d5d4f2a5f6fbccee5a8eeb200dced5bb98dbb2b6c7536a948a6cc932f55c52754f75a7ca50215f401084610b06c119447f0399bb44e629050000",
    ],
    [
      "ETag",
      "b1Z1QnyK0s6+/GfAY+K3FQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1605334902709"
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
      "0000000002ff8d504d6f824014fc2faf574840ed07241eaa21d5684c4b6b9ab4216685074581b7dd5d3486f8dffb163df4d0432fbbb3f3665e66b6837dd96410c2b62cbe5b54a79b02cd8b0531eab6329a2f498d4670008d2858398de3d571918f6693c0fb58cbc36eb6780f8af198153afdc25a40d8415e629569083f3b68448d6cdb6c54bf9165e6242d335fbd454f51cc444d992556ebe5f271b28ce0ecfcb2c9fdbf2cc9d9811d6d63cc516193a24d2115ed3035735b508b5a56e86a6a558a1a7a713f2814b55228229719d7f71e5cffcebb1d0e478137b8f7025656940a5352c3e2f52b8703434654311db9200c58a07ac85df3fe3cf4b42d714589c57fcd7c3b4bae0b272783fa5911c7d3689379979453b2c90d3732aa450752c1df3c2bcde57dfe01626f4f4ac3010000",
    ],
    [
      "ETag",
      "CRRNwKf4HB90ZUpvjHKW9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcfdd9642400000e07799ebeac85fec1da2906615d6b871264d51461ab4c39e7df7edecf706df0fc04541ba2eef1f77d2800f3062515f140bbf154c25bc4c4b095edbdd893d93e20c23ee7d054711ad056654a8f75f4fc1b32aafd93a07c7b42e36631a5e5215257073409a3c7c4706e4b587dd3ada6a4999cdc5264447aacf275bb0073f8e6fcaa63e5bc3fd2497d224aad4088cace4296463385c57e1a15abbd2640c24a13baa52f4992538ec57651a309a84e3d8ede3fb73cf91eb1cfdba99acf6742153f7706531cea81df81b57eb14951378bba53564ca15cc00e16dc5489757efaca4e8fa0cfccff37e6cc9bb6f12cc0803bf7fe86f684e18010000",
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
      "Sat, 14 Nov 2020 06:23:10 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-109-1605334902709",
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
      "c87b6d0204d28448d11a25748d96908e9056d33421632ed42dc1149b765595ffbe8b69ba5695d6276cdf73ee39f7836772c7cb944c48c2f3fb06eaa72fb72221270414cdf1b5bc4b57f4fa8f7d7b69dadf8bab859bcdd8229f4e11c15b96a4fbaa809e144dcd404e76db7e5e8ba6a2b5103d4cd4b32daf679f5a43c7713d6b30b23c244a28b2152fef907ea3542527a67914efe742e405d08acb3e13fbd777f3616056b5b805a6a4f95ed34419697ea2fab5108c2a2ecae96e8b0e1a09750c7bca0bf4f08f9a2667ef73f739ddf773043f70069431d194aaf585299828339e37b5ce4a26cf44fb7c73205b7fe5cf238389a2d9977149f77062a454d1583d55609c879bb5b10cce37e17a162d3741bc9d5ff8eb597fbe59edd6c1d6b8bef043df50342940738da971a66f015e503f05a978a9d5a3f6b9557ee9d0f2e3605a024a4be882f1c83aa5f6d8f2922c19b16cec0c93cc82241927a32175128b792eb8690214795a54b36829cac1c081011bb9f17898dab1eb0edc183becc499edd1c41ac270783a228713f25873050b2e2b2179d721721d2e233f8ec25d309f45be2e21a34da1169db1b680b71e151688a0ffd47468a35ca052dbee6510f9e16c1e2daffc6ec22bc8297bdadee38c335a484034adb1790aeab548b1612498adfd0582f5c42e8f414926bf9e49dbf3d6c59b96bfd2231c606b57e92fd946e132f8a6ed1c1157b46834e4a13b900a2ddf606de8faf01b91b8a55d16f263e7873f49f71442063594ecf3692258073effdb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7c8f66c6bec100daed587d8c0b18e6d6b73b419610fa57a29a9db7cacb4136be42b088338ff40b7ebf017",
      "29ba2c127b040000",
    ],
    [
      "ETag",
      "nkdLaWx1jP/1KlVD4fAcDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1605334902709"
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
      "dd4ec2401085df65bc2db1fc4b132e0aa2920062290989216469a7506c3b7577ab21847777b6221a35d19b7666facdf69cd31ee029ce4270601d6f9e0b94fb8b0dea075378a88a442bbee59429040b508b0d93dbc524d2eb45bf8ea1b8a4e9ae16c846cfed769950c1165301ce01a218935081f378804ca4c86b0125459aadcace02bdcfcd70e67bc3c92df72985a69fcc4723b7371ac0d13a2f86428b55c9ff636d79b460476b0f2394980568b4e4927618e8a1b1a9449a27585154c800159470f96023a9c88524aaf0a452b53b956acb6ed6eb8d8e5d6bdb1d26130a848e2963783e6381a0498bc4a357b6092d066459b2e3a8bcbef0380e4b27a61c4efc56a314f815606d519ce0ea6f90056f057f870fec94c1774ea45464fa4cdd8ceedddf8ee3503f8fba76fdc10f42698eea8cf8c3f160e6bbe3a9e19627efbdbd463595c4492a342156edc655b3ddb2df73ed93c99adfe36859a00581e0dfe32ed6e0442251787c033215ab457c020000",
    ],
    [
      "ETag",
      "hXNftbXC3eda/oPj2cr4BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1605334902709",
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
      "7f",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2ac8fba7d5f203424248a4aa4b53b6654a494b48ab689b12630ee296e0149b4e5195efbe039ab6d9ba554202fbdebbf7ee7ce691dcf134247d12f0f83e876cfbe15604a44640d11877af3e76576796db09a7df8cd534f2ac792fbe8e4f4e10c10b96a4eb4d027529f28c81eccfa68d3813f9866642d43151dd30f4ba61e91dd36cf7f45657ef215142128d797a87f495521bd96f36f7e28d58883801bae1b2c1c4fa79bff9d06a6e32710b4cc9e6a166136564f31dd5d34430aab8484f665374904bc816b0a63c410f2fd430f87498bbc1e9ba1123f88133a08c893c55852f4cc1441af138cfcaaca4ff484a9faf3ec8d4193b435f1b4e66ae7fb4a4eb82bc3cd6a8d4168b0c649ea89ab6c4a2229ec08287cb2ab2b9d33e7b930b8ca08315952097dacd57c773346d59807ee4ba6e32ed541bb8e7da217fe46a33d775a6be76747aac7df126b34bed6c7e8041e32148c5d3d2b64f83040acb4fad1dfd7da205812ab45105175ddda286adf78228e8b2c8363b41a44310d841b743cd4067bd36b4c30028f25491bd64d154a4811dd97a688265843618916953603dcbb2edc842b8ddb522669b5d30c9ae467e655cc139971b2179d55e72e38d7c67e17b337738f09db28c88620bcf2b734511af7d2a2c1241ffa96b5744b940a5e2ac46aeef7883a13fba76aaf118434cd9767a8f0312d14402a26946d7a020bb1021368d5c4ea6237f347107636494677eb94748d2fffef842f0b79bb2cbaa7c175a56bbd4df03ae6992978887ea83181db2dbd5fe9d62e0798339cad22ca3dbb7d3bf99bfc497abcae2b31e29d4f6ab16d9fddce153237897aaece46ae67873526d79104106297b7f74105c06deff27ecef2782f186a28e54b8",
      "c64965b25061195413cbd7a5df2776cfb0b1d6129ca93f632dddd2f74753e42832c21a52f55452753fcb4e15a15c3e83308883e68edc2f18fd0df4de36b921050000",
    ],
    [
      "ETag",
      "Q+7hB6N5dSJ1hSfR6Y9gVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1605334902709"
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
      "90",
      "4f",
      "6f",
      "c2",
      "30",
      "0c",
      "c5",
      "bf",
      "8b",
      "77",
      "6da516f647207180ad02a4aa1a050ed3845068ddacd0d65d923221d4ef3e27ecb0c30ebb24cef3cfd67bb9c2a96c7218c3a1949f1daacb9d44b3b2458abaab8ce6aba54623788046482697d364b0ea0a99e6f2651dc5d15bb1992fe464c284ce3eb01630be425162956b18bf5fa11135f2d87eafdc46c6cca5b5ca32d944f32865a1a6dc0ac9368ea7b33882defb35d69efe35b2eb3d38d221c5021536195a17ada223666669036a51b715fa9a3a95a10607bb8654d4b54211f9acf86118f8e163f0301cde8f82c1533062b2a24c98921a86b76b3607868ca852fae280306040b992b316ee3cb33c7421ce0eb0defeee85b6b7fb5938bb18d4af8ad89e46eb2cb8b97c26ebdc7022a33af42013fccd8bd2dcdefd373e36ecd2c3010000",
    ],
    [
      "ETag",
      "IAN2QufgRdgDSELEYfTGHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b7282300000d0bb642d0e0ab6a63b504a5a3e420842dd30404305f92654089ddebd4edf0dde0f48f39c729e8cdd8db6e00588740bd7f9daea657de7e7418a8b8363468e947f0691aa34f6a9567d6f9e49e5b98bbdf9f0ab6668c32b3abbccdf0cc45af60b2b3aa3205e4d1398629c1da1bb9c4d46d463e6455badfb7e425291994c49da61f445b8c03af0d483558ad73c4664c4f674259c09e982c47306abbec7c6fb1bc22811712d13e238778ca5523f85b3e05f7d410b1ec971a6de638fbb5ac40ee3ac6a1ced99716a48b09952da4dfc165f101b35b00274ee4b4679523eb2ca0ec215f89f27a3e8e9a3afd39451067eff00bb8be47c18010000",
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
      "Sat, 14 Nov 2020 06:23:12 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-111-1605334902709",
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
      "91f75a20211408125a11a42b12842d8456db3445b673939a86388d9d5655c57fdf8d53ba5695d6a7d8bee7dc73ee479ec99d281232214c64f735544f5ff6929133029a66f89a2fe657974e5164fb5fab3b7b37d4fbe1a2caa653448886a5e8a1cca1a3645d715093ddb69b55b22e6925650713751cc7e93843fbdc75079edd1fd91e1215e4e94a147748bfd5ba54935eef24decda4cc72a0a5505d2e0fafefbd877eaface41eb856bdf79a3d9451bd4f54bfe692532d6431dd6dd141ada08ae140458e1efe511376f13e7757d0433743f083e040399775a11b5f9882cb2215595d99ac64f24c8ccf3707b2f557fe3cb2b8cceb431117f400675642358df55309d665b8595bcbe07213ae67d17213c4dbf995bf9e75e79bd56e1d6cad9b2b3ff42d4d590e866b4dad0b730bf082fa09282d0aa31e35cf8df24b87961f07d310505a411b8c47f6903a63db63291bf174ec9eb3d406c6c66c744e5d66736f00838401459e11352c5ac8026c37e9bb368b79eaf078e0c0281ea7891b8f47ce10bc3ea39ec7c8f18c3c5642c342a8522ad17688dc84cbc88fa37017cc67916f4a48699deb456bac29e0ad478d0522e83f351d9ba890a8d4b47b19447e389b47cb6bbf9df00a32ca9fb6f738e394e60a104d2b6c9e866a2d136c1809666b7f816033b1efa7a02293dfcfa4e979e3e24dcb5fe9110eb0b1abcd976ca370197c33764e886b9ad706f2d01e4889966fb136747dfc8348dcd2360bf9b1f3c39fa47d0a21850a0afef934116c029fff6da7cd4730ee3eea288d775c1eae1a155e41bb44c2d47b627bfda13326065ce90fb1d1c03db5adc9d164840314faa5a476f3b1d256ac56af200c",
      "e2fc03d3aee35f651098ed7b040000",
    ],
    [
      "ETag",
      "lDCHF1nngjZLk0U6tj6Drg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1605334902709"
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
      "4e83401085df65bc1412b07f96a41754ab6da4b5b6f4ca34cd16064a0516779736a4e9bb3b8bb51a35d11b9819be59ce39708097240fc1817512bf9628aa8b18d5932e6628cb5449ba153c970806a06231918fad46211faafd607d59649d615eed4aafebf67a44c860831903e70051826928c1793e40ce32a4b580a76596afeace0055157a38f767a3c93df5190f753f59789edbf7067034ce8b21536c55f3ff585b1e0dd8f2f50c23149807a8b514826f3150236d53b2ac48d194bc14014aa8e1fa412c785930c1b94913d3b66dd36e5bad46a3d9b5ae3a5697c894074c253c2778312781a0b862e98cefc926b4091075498ea3fabaa37112d64e74399af8ed662df02b40daa224c5d5df2009de30fa0e1fd82983ef1ccb7899ab3375e73dbabf1d47a17e1e75ebfa831f845414d519f147e3c1dc77c753cd2d4fdefb954239159c9294a843b4ade675abd3b6de73bde13a6b7a8fa3448906048c7e8f61a2c089582af1f8061971e5de7c020000",
    ],
    [
      "ETag",
      "O53psKywEb+pm7HnyvuL9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1605334902709",
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
      "02ff8554eb4edb30147e95c8fb035adba4e9bd12625d092c5249599ac0d036b58ee314431207db8121d477df8943818e6d48959af87cb7736ce711ddb03c466314b1f56d49c5c3876b1ea106a20aaf619559f7e5af8fcc2ac4547dcb5df3f82a09b3fb830340b08a257156a4b42979290895e370d15a0b5e165870de04a166bb6d37db7dabd7e97447963db0464094344d662cbf01fa9552851c9be6d6bcb5e67c9d525c30d9223c7b5e37ef6cb310fc9a1225cd5d4f136ca4f98eeb61ca09568ce707e1021294928a25cd304b21c30b358e3eed6ab718ce5a6b00df31423121bccc55950b2408cf13b62e855645e347a473be7a400b67e64c03633a0fbd606f85b38abcda37b034964b416599aa86b182a61296d2258b5775a5b8318efdf9295420c1159654ae8c8b2f8eef182f4b2be34769591d621c1a13efc8d855713d23f43c6711187b87fbc6893f0fcf8ccf973b18881f53a958aec307384a6915fc69c0eedb7dad085881735d5c0eac3e6e0fad51944403920c3bbd28b168140da3410f77228b8cbab41b4714034f55ea9a85739e0fec288ec900133b1ec67d128fac41cfb6ec3e4e08680ebb5d50eb47ed1eda34d0bd608a1e315970c9ea21a30bdf0d9c65e087de741238ba8d04c3208fea705513af732a681240ffe96b53551907a76ac75c2f70fcc93470cf9dfa90cce81a9387c52d1c9304a792021a0b9c5145c5298f6168e86cbe700377ee4d66c0d03b7fb6454834fefef842081e0a3d65a5ffd122f05def4407d822ce715a6ac85dfd80260564459b4de3df3213df9f5c823516023ffc518376fadd8afe170b8dd76f75ccad651b556edb371b6d7e6ee0d74070ab6a75f43574fc4b542ff934a182e6e4fde303605d78ffebb0bda90086bb0a3e52c13b9c56222b1722687d6a59a6f33eb1479d4e7b883458a837b5ae6d6fb7a7d2a814694673f5d4527d53f5a4aa52299f415084c3e6e99ddafc069fc472712b050000",
    ],
    [
      "ETag",
      "i0wux+i0prCtXnI/FhfUmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1605334902709"
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
      "000002ff8d90414f83401085ffcb781412a06ad3263d58452521a4451b538d69b630a5d085a1bb4b0c21fc7707ecc1a3a7dd79f3cddb37dbc129af5298c33ecfce0daaf62a43b31e2e31ea461acd474d9546b0008dc8988cded79e7e3aaf8a6a2baf1fa7c7e0639bc5d962c1844e8e580a987770c851a61ae69f1d54a2441edbedd4e8c89869eb4109a237ffd98f5928291d84681386f7cbd087defa33569ffe35f2d55b50d03ec6032aac121c52d48a0a4c4c302ca845594bb435352a410d233c3632454d2d1491cd8aedba9eedde39b793c9cdccf1a6ce8c4949893039550c6f5e391c183242c6f4cd0b8203977ad91ad42b45ecae31bd74d8f28186870d0732aa410b12c1bff4929bdfbaff017c0d018c82010000",
    ],
    [
      "ETag",
      "NWQ2sFqPjnYl+D7hIZYgRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "41",
      "72",
      "82",
      "300000c0bfe42c8ec102d21b511002284686542f1908b12a3455081aedf4ef75ba3fd81f50722efa9ea9ef4648f00e1ea5e98ef938be4c90b5e1b91704187d6e1b9d2e949ebdd90565716bf8f280cee727e664059d5a6e898fa6fecafeb851cb0bcd016ad974c606c2a3ac63b5bb050c3d9435cc86083b8b6c49f4301446eb660ed58a57495e95765aa92a2baea9ceb19399a6b4b726bb1e6635949d5045bda7340cd74614e56d40e1d0ed9275ca2cbeaa727124f3094ff77eff154e9ef318d2b52f3069c8d20fabf88e22ece1cc4deae98d130f8c80d09753277a767a65a796eb8ec0ff9ca9c745bcfa48949de8c0ef1fe3430b8b18010000",
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
      "Sat, 14 Nov 2020 06:23:13 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-113-1605334902709",
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
      "2b",
      "91f7b54020bc82845604e98604a10da1d5364d91eddca46e439cc64e3756f1df77e394ae55a5f5536cdf73ee39f79127722ff2984c0813e94305e5e1d39d64e48c80a629be2e1eaadd8629f790ff61df2fe542dcf59ddf57d3292244cd52745f64d052b22a39a8c96edb4e4b5915b494b285895addaed3ea0eed81e3f45dbb37b25d242ac89295c8ef917eab75a1269dce49bc9d4a9966400ba1da5cee5fde3b8fbd4e51ca3be05a75de6a765046753e50fd9c494eb590f974b74507958232823d15197af8478dd9f9dbdc6d41f7ed14c18f8203e55c56b9ae7d610a2ef344a45569b292c913313e5f1dc8d65b79f3d0e232abf67994d33d9c5931d534d28702ac8b60b3b696fec52658cfc2e5c68fb6f3afde7ad69e6f56bbb5bfb56ebe7a816769ca32305c6b6a9d9b9b8f17d48f4169911bf5b07eae959f3bb47c3f989a80d20a9a6034b287b43bb65d96b0114fc6ce802536303666a3017598cddd3ef46306147946d4b0682ef3c1c01dc4a3611c3936a751bf37ee46e3649844bc4b39ebb94e0f58428e67e45729342c842aa4124d87c84db00cbd280c76fe7c167aa6848456995e34c6ea025e7bd4582082fe53d3b18e0a894a75bb977ee805b379b8bcf69a09af20a5fcb07dc01927345380685a62f334946b1963c3883f5b7b0b049b895d9e828a4c7e3c91bae7b58b572d7fa18738c0daae365fb20d83a5ffc5d83921ae695619c8637320055abec5dad0f5f12722714b9b2ce46ae705df48f314400225e4fce36922d8043efedb4e9b8f60dc7dd4511aefb83c5cd52abc84668984a9f7c4769db163fe554d4bfd2ee68ec6a7b6d539ea8cb0875c3f97d46c3e56da8855ea0584",
      "419cbf6fda75fc0b749f6a447b040000",
    ],
    [
      "ETag",
      "DquUObs9ynzbZPoDij43xQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1605334902709"
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
      "00000002ff8d925b4f83401085ffcbf8284dc0de2c491fd05625b6b517fa649a660b03a55d58dc5d34b5e97f77166b356aa22f30337cb39c73600fdb348fc085559a3c9528776709ea8929a6a84aae15dd0a912b040b50b384c8fb571cfbc364e2f0f92e8feabdc6f63cf327dd2e112a5c63c6c0dd439c228f14b88f7bc85986b4160a5e66f9b2ea2cd0bbc20c67c1d41fdd529f89c8f4a3f960e05d0dfa70b04e8b11d36c59f1ff585b1c2cd888d5146394988768b414526c30d4beb1a9585670ac2951ca10155470f52091a22c9814a246939ae3d46b4ecb6ed6eb8d8e7dd1b63b447211329d8a9ce0f98c0482169af1a978219bd022405625398eabeb338dd3a872624a7f14b41a95c0af00698b538ecbbf4112bc66f41d3eb06306df39968932d727ea66f0e0fd761c85fa7954cf0bfa3f08a529aa1312f8c3fe2cf08663c32d8edeaf761ad5580a4a52a109d1b11b97cd76cb7ecff55a98ace93dae96255a1032fa3dee520d6eccb8c2c31bba4835f27c020000",
    ],
    [
      "ETag",
      "KzePIMgQ1lUynd3D4k+mIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1605334902709",
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
      "fd",
      "4f",
      "db",
      "3010fd5722ef17d0fa91a669d35442ac2b013a9514d214c63ed43a8e130c491c6287a942fddf777128d0b10d295262df7bf7de9dcf7944772c0bd110052cbe2f69b1fe70cb03d44054e21876bf7e1b5fa49d8bc1a93cfe5226b91158e2a3393a380004ab5802a779429b829705a162b898b7e28297392e386f42a266a763363b7dbdd7ed9ab66e58ba0d44419368cab23ba0df48998b61bbbd156fc59cc709c539132dc2d3e7fdf683d1ce0b7e4b8914ed5dcd36c888f63baa87092758329e1d2ce6e0a014b458d214b3043cbc50c3e0d36eee16c3692b06f003231413c2cb4c56be2005e159c4e2b25059d1f011299faf3ed0dc993a635f1bcf16aebfb7c269455eed6b5868cb65414599c886b682a22296d0250b577524bfd38ebdd91944c0c10d1654acb4ab53c773b497ad95f6a3d4f52ed10eb5917ba4ed6699b8dac2759db9afed1dee6b27de6c71ae7dbedec180fd900ac93265dec741422be34f0d9ebc3dd78a802528d7c1a5a5f77167a0db411458241a747b41a4d3201804560f77039dd82635c38062e0c92abb62e18c677680f59e15521202aa179ac430cdbe1d1881691b5ddcef598635e84406459b06fa5530498f98c8b9607593d19537f19da5ef2ddcf1c87754191186461ed5e6aa225efb94502480fe53d7a68a320e4ad5894d5cdff146637f72e9d44332a53126ebf93d8c49841341018d0b9c52498b331e42d3d0f96c3ef12733773405863af9f32d42a0e1f7c71782bfce5597a57aa3b9ef4ddc1365608bb8c449a9200ff507c23978459b4de3df69469e37ba06695c1478fd470ccae99b15fd2f120aaf56b5cdad6407556adb9581363f37f03410dcaa3a3bba5838de35aab73c1ad18266e4fdf101b00abcff77d8de5400c35d051d21610dd34a44a5420a5a4f2d4b95df27b66df67a7da4c0857c13b3746b7b3c",
      "558e2a234d69269f4aaa6faaea54152ac5330882306cae3aa9cd6f72bcc7282b050000",
    ],
    [
      "ETag",
      "XZCQm1Q8HtFJulp2b7s+4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1605334902709"
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
      "00000002ff8d904f4fc24010c5bfcb78b44d5afe0a0907218d1211b5483c184296ed500b6da7ee6e2184f4bb3bbb18c3d1cbeeec9bdf4cdedb33ecb33281216cb2f4bb4675ba49d1bcd922465de746f35551a9113c402352265fe2a7482677b7ed891827fde347fdbc509374346242cb2f2c040ccfb0cd304f340c3fcf508a02796cbd566e2363e65459653a7f8f1ea2988582122bcc97b3d9fd781641e35d8d55fb7f8dac1a0f76b489718b0a4b89d645a56887d24c6d402d8a2a475f53ad246a70b06ba48aea4a28229f153f0c3b7ed80bbaed766710b4fac180c99ca43019950c2f176c0e0c1991c774e480d06240b992b36edd7960b9eb421c1c60bd5df77a7fbdd0f656bf0bc72783fa5511dbd3689d05179713b2ce0d2732aa460fa4e06f7ecccce5ddfc00f011cf99c3010000",
    ],
    [
      "ETag",
      "ORKEcd8+3CaBd7wWuMSrCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "7f",
      "c95a1c08504c77c6c6b6501e16b0d20da3e14a50de4190e9f4dfebf4fcc1f94147ce41ca7468ae50a367341f3159f2a5d3aad4dc41e18f2908c55432a5c396eb75c36a9a0c83eebdedf0fd5444428f147a0d38dec54632dabea7c65f41a4290d2e6c354eee068e78f3e166acb180ae2c3bd18c14380ba2e9cdbed349b49a9357ec93853213fbf5468759f28d2560dadef8cdac06224fa7fc30d4075793bd779e937578a96656d23a2c5fdfc5e952d4a593dfb4c0cda3b3819391b097ae4e35171319cccc51b9e257c2ef43d8243199d002c1bd2d7a9069f1c8ea26210bf43f4f87b985479fc2b1871efdfe015c7ad13e18010000",
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
      "Sat, 14 Nov 2020 06:23:15 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-115-1605334902709",
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
      "9b3014fd2bc87b6c132009218914ad11a55ba48474405a6dd3848c31d42d606a9b565595ffbe8b69ba5695d6276cdf73ee39f7836774c7ea0c2d50ca8afb968aa72fb73c45a7882a5cc0ebaf4a78939328c7458dedc713e15dba99f5b85c0282752c89aba6a403c95b41a85ceca3612178db60c1f900120d6cdb19d853cb198f27736be45a73204a5ae61b56df01fd46a9462e4cf3283e2c382f4a8a1b26878457afefe6c3c86c04bfa54449f3bda60932d2fc44f56bc909568cd7cb7d040e5a4945422bcc4af0f08f9aa567ef730f19ae8605801f18a19810ded6aaf3052908af7356b44267458b67a47dbe39a0c8dff85e6c105eb6559dd4b8a2a74686154ed453438d8b70b735d6c1c52edcaee2f52e4822efbbbf5d0dbddd66bf0d22e3fabb1ffa86c2694935d7581a67fa16c005f4332a15abb57adc3d77ca2f1d5a7f1c4c47006949fb60e25a536ccfac799aa72ec9676327cd2d9aa6b3d475f038b5c87c4227594a31f0b4a866e19ad78464698eb351e28c9c3c99b8d92c49a7733bc9a64e06cd7626d6d4458753f42898a2e74c365cb2be43e83a5cc77e1287fbc05bc5be2e21c76da9ce7b635d016f3d2a281040ffa9e9d0451907a5aeddeb20f6c39517afaffc7ec21b5a60f214ddc38c735c4a0a682ca0798a8a2dcfa06128586dfd7300eb895d1e83122d7e3fa3aee79d8b372d7fa5c730c0ceaed25f14c5e13af8a6ed1c1157b86c35e4a13fa0062cdf406de0faf00790b0a57d16f463ef873f51ff14d29c0a5a93cfa709601df8fc6f3b6e3e8061f741472ab8c3f210d9a91041fb2562bade237beed8b311d260a13ec446ae7b6c5b97a3cb482b5aab9792facd874a7bb156be822008f30f74bb0e7f01762190757b040000",
    ],
    [
      "ETag",
      "ZmrC4+Sfagna1w+rCP7d0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1605334902709"
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
      "5b",
      "4f",
      "83401085ffcbf84a13e8d592f4816ad526f4620bbe98a6d9c2d052171677170d69fadf9dc55a8d9ae80bcc0cdf2ce71c38c0539ac7e0c226dd3e9728ab8b2dea7b532c50955c2bba1522570816a0665b22653377ee75189633ce1f78a7a2c55de20d0644a868871903f700498a3c56e03e1e206719d25a247899e5ebbab3405785192e83c5787a4b7d2662d34f43dff786fe088ed67931669aad6bfe1f6baba3057bb159608212f3088d96428a3d467a6c6c2a96151c1b4a94324205355c3fd84a51164c0ad1a049c3713a0da76b775aad76df6ef6ec3e915c444ca72227385c9240d04233be10af6413ba04c8ba24c7497d7da1711ad74e4c399e06dd762df02b40da9294e3fa6f9004ef187d870fec94c1778e65a2ccf599baf167de6fc751a89f475d7bc1e807a13445754682f164b40cbcc9dc70ab93f761a551cda5a024159a101dbb7dd9e975edf75caf84c99adee36a59a20511a3dfe32ed5e0268c2b3cbe019b6503d97c020000",
    ],
    [
      "ETag",
      "r2n1QtUUuOllVl5yigqhfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1605334902709",
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
      "7b",
      "6f",
      "da",
      "30",
      "10",
      "ff",
      "2a",
      "91",
      "f74f27f148c23348554721eb9068684368556d1338e692ba0d31b51d18aaf8eebb24a58f755b252412dfef75673b8fe49ea74bd223218f1f3290bb4f77222415029ac6b8ea9ccaedafdbcb602863fbee72baaddf6fcce9f6f818113c6729ba5a27505522930c546f36adc552646b2a85a8a250d5b2da55ab6db61a8da663da1dd341a282241af3f41ee9b75aaf55af5e3f98d76221e204e89aab1a13abe7f5fac6aeafa5b803a655fdad671d6d54fd03d7934430aab9488f67534c9029907358519e608617ea32fcf256bbc6e9aa162378c31950c64496ea3c174a3091463cce64a14a7a8fa4c8f9ea814cddb13b088cc164e605470bbacac98bcf0655c67c2e416589ae180b6c2ae209ccf9725156d6f7c6577f728e154c704b15a88571fdcdf55dc3582ca98685f12333cd06334e8cbe3734de2a8c3c63e679ee34308e4e3e1b67fe6476619cdebcc160f42528cdd3227840c304f2d04fc31dbddfd39c403506298bf38ed9a656d774c228ecb0a8db6885910961d80d3b2dda084de634a1b90c81224fe7ea058ba622656dcb01d3614e23645d07baa1dd8576236c769a4d0b57bbd44619cb62645f215bc9350cb95a0bc5cb01936b7f14b8f3c09f79837ee0166d441487382cc3e54dbccea9b14904fda7af7d5ee5029df2dd1a7981ebf707c1e8ca2d0fc81862ca76d3073c22114d14209a4aba020df25c2c7168e462321d05a389d71f23a3d8f58b034291def7c71742b05b1753d6c53f19e60dec5f095ed1242b009bf281d8a66d564dbb6ab5c87e5ff9b752dff7fb37e84ea5a4bb3f6ad851bb99d3ffe253e08bb732e9c1d722b9db730ab2ffb9c75f85",
      "e0a52ad5c9e5ccf56f48b9e443041252f6f109427051f8f8e370b8a808c6ab8a3e4ae33b1e58a6721726a13cb87c55e47d623bad6ecb260558ea7735a7dd3eec50ae912bc20a52fdd45279518b49e5a54c3d83b088e7cd1b796758fd0d4dffda982a050000",
    ],
    [
      "ETag",
      "9BrwxhQTDrg2jQSw/kv0Sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1605334902709"
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
      "90",
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ffcb786d93161485840328114c43a4881743c8b61d6aa1edd4dd298610fe3bb38b070f1ebceccebef966f2de9e605fd4190c2029f2af16f5f126475ed82246d3966ce46aa836081e20ab5cc8e88117f894759297a8647c1f6587e5749f0f874298f4132b0583136c0b2c3303838f13d4aa4219db6cb4db28181f1babcce66f93e7492c42459915e6ab281a8da3099cbd5f63cdfe5f23ebb3073b4a62dca2c63a45eba2d1b4c3946736a0515553a26fa8d5291a70b06be49ada4669225f143f0c7b7ed80beebadddb7ed0b90ffa4296942a2ea81678b51473c0c4aa8ce95b02424700ed4ac9ba75e741e4ae0b717080f5f6772fb4bdf5cfc2f191d1bc6a127b06adb3e0eaf291ac739644ac5bf42055f2cdd382afeff3057b1e3c25c3010000",
    ],
    [
      "ETag",
      "L8tQeDd2bJLlteVAdvSHkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cfcd6e82300000e077e9594c1531ed6e36208eaa581d187a690a1475acf22b3f9abdfbcceedfe57b019924aa69445be4ea0e3ec028e7789a4c690989c51474e03856519e17e9c2b4384a7d4971dd32ce538378fdf3c097d6c8744cbab077f7f6797ed5c873d1235ce9d847634c4f229d854616e55f92e1cca533b894ebed8ecead1d21691e4403eb1ce38087d34035c202cbe2896fb8afd925b0af4bf8ed36ca241cae55d5399d61f10e55fbf0f830abe80705fe65f379591843bad1e21a65252c6f3545db212f9bd6f6243c6b1d1fc33b5ad547ef44831e4c801ade4635e2f6ce9a16c613f03f17ed58aa779f2859ab1afcfe01c1577c1918010000",
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
      "Sat, 14 Nov 2020 06:23:16 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-117-1605334902709",
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
      "000002ff85535d6f9b3014fd2bc87b5c1348424a8814ad514a57a484ac405a4dd3840cb950b78029369daa2aff7dd7a6e95a555a9fb07dcfb9e7dc0f9ec93dabf7644e52563c74d03e7db9e3293921206981aff14d5441549b1177ef2fbfaeaf2e72d78762b14004532c41aba68481e05d9b8198efa261d1f2aea12de7034c34188d9cc1e8d49a4e26b66b8d1dcb45a280325fb3fa1ee9b75236626e9a47f161c17951026d981866bc7a7d371fc766d3f23bc8a430df6b9a2823cc4f54bf953ca392f17ab18bd04127a04da0a2ac440fffa8fbf4ec7dee21a3d5b040f023cb806619ef6aa97c618a8cd7392bba566725f367a27dbe3990c85b7babd8c878d9557552d30a4e8c3d9534914f0d1817e17663f8c1c536dc2c637f1b24d1ead2db2c87abed7ab70922e3e6d20b3d43d2b404cd3516c699be057841fd3d08c96aad1eab67a5fcd221ffe3601401a505f4c1c4b14ee96866b9699e3a593e9b4cd3dc82349da5ce944e522b736db0f72950e46951cda235afa9e350706c3b51f1c41e8395b8165e5d7beca6966ba5760ae47042feb44cc239130d17acef10b909fdd84be27017ac96b1a74bc86957caf3de982ae0ad47890522e83f351d5494715452edf683d80b97abd8bff6fa09afa1a0d953f48033ce692900d1b4c5e64968377c8f0d23c172e39d23584fecc73128c8fcd733513d572edeb4fc951ee300955da9bf248a433ff8aeed1c11d7b4ec34e4b13f90062ddf626de8faf01b91b8a57d1672b5f3c29fa47f0a218716eaecf3692258073effdb8e9b8f60dc7dd41112efb83c99502a590bfd12315def91ed9e9e4e4744835bf921367326c7b6a91c2a235450cb9792facdc74a7bb14ebc823088f30f74bb0e7f01cb7445567b040000",
    ],
    [
      "ETag",
      "TWSmeSn/So9kH+LQFf9Ieg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd4ec2401085df65bdb48de5af48132e0051490a229444620859da6929b69dbabb4509e1dd9dad88464df4663b33fd667ae674f7ec29ce02e6b0551c3d1720766711a87b1d4c40168992f4c83193c00c068a4744da56d42daaf3fadcc5f3a0b77d78bd18ad6751bb4d84f4d79072e6ec5918431248e63cee59c653a0361f9322cd96656630b5cb7571ea4d06a31bca530c743e9ab96ea7ebf6d9c13835065cf165c9ffa36d7130d8065713084140e683d6920bdc80af067a4dc9d33c015362217c90ac84cb1791c022e702d1a48a59a934cd8a6d356ab57acbaa36ad169109fa5cc598113c9b9240a650f164822f529b42802843da382ccf2d95e3a0dc4487839167d74b815f01d216c6092cff0649f09ad37ff8c08e1e7ce7788a45a64ed4b57bd7f96d1c99fa39eaaae3f57f1052915527c41b0cfb53af331c6b6e71dcbdbb5320c702c94909dac48a55bf6c346debddd71e6aafe93b8e120518cce7743d6e63c59c9027120e6f8785201a7c020000",
    ],
    [
      "ETag",
      "60gBu2Y4YLo+dCvXx/NhUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1605334902709",
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
      "8554fd6fda3010fd5722ef9756e2c3090112a4aa6390759120b0105a751f02c771984b8869ec50a18aff7d97a4b465dd56295282efbd77efce773ca2354f23d443215fdde72cdb7fb81321aa21a6c80a4eaf8261b233d6716b38de19f158ef307cd77ab8b800042f58926cb609ab4b916794c9de7cd6586522df924c883a08d575ddaaeb1ddc6eb54c1b1b5d6c0351b2241ef1740df45f4a6d65afd93c266fac8458258c6cb96c50b1793e6fee8ce63613778c2ad93ccdd98434b2f94ed6cb4450a2b8482fe63370904b962dd886f0043cbc50a3f0e3a97683934d6305e01da78c502af25415be40828a34e6ab3c2b5551ef11953e5f7da099337206813698ccbde06c4936057979ae11a92d16199379a26ada128a8a79c2163c5a5691ed5afbec4fc6100107bf886472a9dd7c717c47d3965281bba5f623c7b845b54badef0db55309d7d3e69ee7cc02edecf25cbbf227f3a9f6e9f60403de2326154f4be701091356b87eeaaefbf6520b0251e0a40a2ebab843740bdb611c76696cb5da618c59185a61b74d5a21a6b6c9cc28640478aa502f592415293130b63a1665b81d124c42d38a08b628e9746d338a426263bd13d9ba890e35f49071c5865c6e85e45587d18def06ce22f0e7dea01f38651931812e0e2b734511af7d2a281240ffa9eb5044b9804cc575b95ee0f8fd41e05e3bd5848cd88ad0fdec1e6624268964802619d930c5b2b188a069683a99b9813bf1fa236094d73e3d2224ea7d7f7c2104fb6dd96555be51e08ee18efae369e9e108ba26495ea276d50732b081ebd8a8ebed40377a7aaba79b0d8cf1377438d4fe2ddef7fdfe2d18225946f67fc4a0c88e59d0ff92b5c497bf2af347173a2ab23d7b42879f07786a0816ad52475fe78e7f8baa239fc52c63297d7fa8005c06deffc3382e2f80617d210f2c82e230c354165968c6aa59e69bd2ef13dbee762d8c4a70a6dec42cdb3c5e5aa15128b20d4bd55349d5f2969d2a42b97c06411046d073bd2b88fe066812cbb03e050000",
    ],
    [
      "ETag",
      "GTDlv2kf3DMv2fM16e0j3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1605334902709"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90cb6ec2301045ff65ba4dd404fa002416a58a2808f108456a5521e4249334906452db0121947fefd874d14517ddd8e33b6746f7fa0287bc4a6000519e7d3528cf3719ea952942544da1155f35550ac101d422637273bb5c046fe37411f9d3453e2d7afb55f67e1a0e9950f1279602061748732c1205838f0b54a2441edbeda4ddc8983ed74699cc5f837110b250526284f966367b1acd02689d5f63f5e15f23dbd6813d4521a628b18ad1b8a825ed31d613135089b22ed055d4c8181558d83632494d2d2491cb8aebfb3dd77ff0eebbddbbbed779f4fa4c16140b9d5365c2afd91c68d2a208e9c401a1c380b425674ded7964b96b431c2d60bcfdddf34d6ffbb37074d6a89692d89e42e3ccbbba7c26e35c73222d1b742016fccd2fb9bebedb6fbf1cf456c3010000",
    ],
    [
      "ETag",
      "U/POEXGfOb1JOiJl8jQgYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfc97282300000d07fc9591c3629f45674d8640fadad17264006c24e88023afdf73a7d7ff09e00e5399ee7940d0deec13bd890a8edf3fd79e4f543843d2a0aa8cd8cc614ad8cbb964889f929bc60bf948ec7c16afb35509897b1ca93ebc5433ab284b259cf6481999fd2f693bb9c14372c025f21f094db4e312e61d269d05e1aba8d6c347dbb35df364bb84d1f375f16ef8ebed68a9d78f2104168865c7d379a2fe554a1a4ce5595a6df7391c851fa53f51dea63978a88f1a53dd92a647c757c6ccbf0980c292655009dae0accbe216ec84b57a7ef04b2801dc0eb48289e53f2ca4a074ddb81ff79cab611bffa3a461453f0fb073305eac818010000",
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
      "Sat, 14 Nov 2020 06:23:18 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-119-1605334902709",
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
      "14fd2bc8fbda2424e40191a2354b691729211b21adb66942b6b950b704536c3ab555fefb2ea6e95a555a3f61fb9e73cfb90f9ec8ad281232254c647735540f9f6e2423270434cdf0f5bcef5dfc4cbf3c5ef4378f3e642bffba2ccaf96c8608d1b014dd97397494ac2b0e6abadb76b34ad625ada4ec60a24ebfef75fa637be43843cf1e4c6c0f890af274258a5ba45f6b5daa69af7714ef66526639d052a82e97fb97f7defda05756f206b856bdb79a3d9451bd0f543fe792532d6431db6dd141ada08a614f458e1efe511376fa367757d07d3743f0bde040399775a11b5f9882cb2215595d99ac64fa448ccf5707b2f557fe22b2b8cceb7d1117740f275642358df54309d679b8595bcbe07c13aee7d17213c4dbc5577f3def2e36abdd3ad85a575ffdd0b734653918ae35b34ecd2dc00bea27a0b4288c7ad43c37cacf1d5abe1f4c434069056d309ed863da776d8fa56cc253d719b1d406c65c36195187d9dc1bc23061409167440d8b16b260e00ec01b0d626740793c4c9361cca8e3c66cec24233771d2e138258713f2a7121ace842aa5126d87c855b88cfc380a77c1621ef9a68494d6b93e6b8d3505bcf6a8b14004fda7a643131512959a762f83c80fe78b6879e9b7135e4146f9c3f60e679cd25c01a26985cdd350ad65820d23c17ced9f21d84cecdb31a8c8f4d713697adeb878d5f2177a84036cec6af325db285c0617c6ce117149f3da40eedb0329d1f235d686ae0fbf11895bda6621df777ef883b44f21a45041c13f9e26824de0e3bfedb8f908c6dd471da5f18ecbc355a3c22b689748987a8f6ccf1d3a2e31e04abf8b8dc6eeb16d4d8e2623eca1d0cf25b59b8f95b662b57a016110e71f98761dfe023e9721577b040000",
    ],
    [
      "ETag",
      "F19GZfBzG1OzEegLEhpnpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1605334902709"
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
      "000002ff8d925b4f83401085ffcbf8288dd4b6d492f481daaaa4177ba18989699a2d0c14041677174dd3f4bf3b8bb51a35d1179819be59ce39b087a7380fc0864d1c3d9728766711aa992ee628cb5449ba153c970806a0621191db241b661d1cce7afd878bdd79b2c1c432a36e9708e96f316360ef218c310d24d88f7bc85986b4e6f3b4ccf275d519a076851e2ebcb93bb9a53ee381ee27cbd1c8e98d0670304e8b01536c5df1ff585b1d0c48f8668e210acc7dd45a0ac113f495ab6d4a961529d6242f858f122ab87a10095e164c705ea349ad5eefd4ea96d96a349a1df3b26d76884cb9cf54cc7382970b12088a2b96cef92bd9048b005195e438acae2f348e83ca892edd8967352b815f01d216c629aeff0649f096d177f8c08e197ce758c6cb5c9da89bd1bdf3db7114eae7517dc71bfc20a4a2a84e88e78e070bcf194f35b73a7aefed14caa9e094a4441d62dd6c5eb5da96f99eeb35d759d37b6c254a34c067f47bdcc50aec90a5120f6feb1438b07c020000",
    ],
    [
      "ETag",
      "hjmKm9eKQBDX/y+jbej60g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1605334902709",
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
      "fd",
      "6f9b3010fd5790f74babe58340be8854752ca51b534a3a425a55db94186352b7802936e9b22afffb0ed3b4cdbaad1212d8f7debb77e7330fe89665111aa190adee4a5a6cdeddf0103510957805bbc617cc48dc6717e3eb5feb997d75e6beff69de1f1d0182552c81d33ca14dc1cb8250319acf5aab8297392e386f8250b363e8cd4e5fef9966d7d28d816e0151d0249eb0ec16e8d752e662d46eef92b7569caf128a73265a84a74ffbedb5d1ce0b7e438914edfd9c6d4823da6f643d4e38c192f1ec683e0307a5a0c582a69825e0e1991a851ff6b55b0ca7ad1580d78c504c082f3359f90209c2b398adca42a9a2d103523e5f7ca0993371c681369ecebde06089d38abc3cd4b0d0168b828a32910d6d0945c52ca10b162deb487eab9dfad3338880836b2ca8586a979f1ddfd1b49d86f6bdd4759368c79aed9d68fb1aaea7cd3dcf9905dac1f1a1f6c99fcecfb58f577b18301f512159a6ac07384c6865fbb1bdeeeb53ad085882953ab818e87ddc19ea56188703120fcd5e18eb340c87e1a087cd5027569776a39062e0c94a5db170c6330b826114752c9df6e2b0abf78751d831063836e361685abd6e4c869169f4d0b681ee0b26e909133917ac6e31baf4ddc05904fedc1bdb81a3ca8831b4f1a4365715f1d2a7842201f49fbab6559471c8549d97eb058e6f8f03f7c2a947644257986c66773024314e0405342e704a252dce78044d43e7d3991bb853cf9e00439dfbf90e21d0e8dbc33321d8e4aacb52bdd1e9646a07fdae72b0835ce0a4549875fd813aad1e20b68d7fcbd8be6f5f416a5c1478f3470ccae92bfa5f3228bc5ad5369f32a22adb6e65a0ed8f2d3c0d0477aa56475fe78e7f85ea2d9fc6b4a019797b7c00ac026fff1b76f714c07053218f90b0866925a2ca420a5a4f2d4b95df47b665191d132970215fc5ccee70773c9546a548539ac9c792ea7baa3a55854af10482200c9be77a9f20fa",
      "1b037b8f4a29050000",
    ],
    [
      "ETag",
      "2Jaicf6iVChzvSAYMI+x3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1605334902709"
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
      "90",
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78",
      "b44ddaa212483888412169881608268690a51d6a61dba9bb5b0892fe7766170f1e3c78d99d7df366f2bd3dc3bea832e8c3a6c8bf1a54a79b1ccd9b2d12d48d349aaf9a2a8de0011a91b37319c8f97b11678764fcfd1ccee4b27bab3bc7c1801d3afdc45240ff0cdb0265a6a1ff71864a94c863ebb5721bd9664eb55526d3f9e86594b050526685e9228e1f87f1085aefd758bdffd7c8aaf560479b04b7a8b04ad152d48a76989a890da845594bf435352a450dceec1ab9a2a6168ac867c50fa3c00f1f82fb4ee7ae1744dda0c74e49a93005556c5ecc180e0c1921133a724088d8a05cc959b7ee3c38d986b055e8d8feee45b6b7fa59383c19d4af8a184fa3250bae944f64c90d2732aa410f52c1df3c2eccf5dd5e00b1a9c040c3010000",
    ],
    [
      "ETag",
      "W0lTXiLdvRHzF1SlW7+s3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b7282300000d0bb642d4e00a5d89da86d1581442d2a9b0c86a0944f30010338bd7b9dbe1bbc27882965529286e7ac02efa08f8dd9988edd1a3a534cbdd5ad6c3ecf194eb976dec323b9238b756dbfb38db276f4dd75abae21bacffb4ddd0eae6321b60c1293ae5aa8f363f9b815e1e3861793efc1c4b63951271478c61b55872e28c4461c0b423209a75f3e87618af042f94deeeee76e7272d6a8587fd0224286959a8e845aa7449a5cfa9c7a033d484b6294c63c2f5ba35dd7f36a88967a5e85bce93c5d5348fcdcd5096e22df8ef0852468eff3ed72b88211605d9d092649f6ca9ad3d96c04fee7a4e96bf6ea3b2c164c80df3f4cfc8f2818010000",
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
      "Sat, 14 Nov 2020 06:23:19 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-121-1605334902709",
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
      "536b6fda3014fd2b91f7b590f026486845345d91206c21b4daa629b29d9bcc6d8869ec30a18affbe6ba774ad2aad9f62fb9e73cfb98f3c910751a6644298c81f6ba88e9fee2523170434cdf195cef42076b39b1fc1281dde3ea4d1f6d8af66d32922846129badb17d052b2ae38a8c976d3ce2b59ef6925650b13b53add4eab33f406bd5edff7ba23cf47a282225b8af201e9bfb5deab89eb9ec5dbb9947901742f549bcbddcbbb7be8bafb4ade03d7ca7dabe9a28c723f50fd5c484eb590e574bb4107b5822a811d15057af8474dd9e5dbdc6d4177ed1cc107c181722eeb521b5f9882cb3213795dd9ac64f244accf5707b20996c13c76b82cea5d99947407174e4a354df4710fce75b45e398bf07a1dad66f1621d269bf94db09ab5e7ebe576156e9cbb9b200a1c4d590196eb4c9d4b7b0bf182fa29282d4aab1e9b67a3fcdca1c5fbc118024a2b6882c9c81bd2ced8f359c6463c1bf7062cf380b1311b0d688f79dcef433f65409167452d8b96b2641e1bf638eb25c30e8c937e87f284f2d128f1865d7f9c021f0c334e4e17e44f25345c09b5974a341d2277d1220e9238da86f3591cd812325a17faaa31660a78ed51638108fa4f4d27131512954cbb17611c44b379bcb80d9a092f21a7fcb879c41967b45080685a61f334542b9962c348385b055708b613fb7a0e2a32f9f9444ccf8d8b572d7fa1c738406357db2fd9c4d122fc62ed9c11b7b4a82de4d01c4c1999288ce9d32f04e2923649c8b76d107d27cd5304195450f28f8789601bf8f8673b2f3e8271f5514769bce3ee7065547805cd0e095bee99edfbe37e975870a5dfc57cbf7fee9ac96132c20e4afd5c52b3f858692356ab17100671fca1edd6e92f87f798d77a040000",
    ],
    [
      "ETag",
      "aAt5T/fHZE7d6VkdRUy4rA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1605334902709"
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
      "8d93d14eab401086df65bda509d45a95c40baad553836da578618c695676c0ed5918dc5d6a9aa6ef7e66d1538d9ae00dcc0cdf64e79ffdd9b2bfb2122c644fb27869406f0e0ab0b72e48c034ca1a7ad55819601e03cb0b2279b18afaca4fa671733b7c89aed5ebfd1c8bb333224cf60c2567e196e51294302c7cd8b28a97406d19aaa6ac966de631bba95d71912693e915e5250a974fefe2381ac563b6f3f68d825bbe6cf95fb43dee3cb6c2a70472d05065e066a935ae20b31327d3f0b256d033d8e80c0c6be1f643a1b1a9b946ec51a517f4835e30f48f0e0f07a77effd83f255261c6adc48ae0bb050dc82c5aae127c25992ce813a1db9824e7ed734d75295a292e9c4cd3e1a09df033904b6decdb56fe83efeabe928aff12a42b90aa0b2aa012a0bb28592fb9101a8ce924d12c795defb1d16c167f837825344ad10dae6507a0ec7a0f5cc6b3e8a7d592713e767511a5e36f84b164873d924e6ec68b34ba993beef1fd7e471b0b66ae91dc62c01925f0072747c743ffcd3be7e8fc44e7845637e0b18cd32ff0475a16e65c19d8fd03d4078b4160030000",
    ],
    [
      "ETag",
      "agjA2l0RNLuQ6qAJlwYPog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdf5682301c00e077d9b57870fccbee027274484441536e76c6fa5983c4b121019dde3d4fdf1b7c3f88710e5ad3ee5a43831ed1c8f072cee7b1347d670baa13631fdaede4492280be52ea25bad0e40d87c6d1935d41f5b94e2d9862354c2921cc33bba0ea352e53bfcf6a230d0f3add98bb1b6fd867d67e870bab76aea6bdbd05cde9c91871981f6f178af320125fd18b00e107972219449514a5b68ce379c7e367fb24c964eb8af2b676c36a93f65b152ca8f40976ddbce6eb3df3a04caad5da3eb59229c6a603aba2f72ca7fbb219c68755060bdba31f688660904281a6e29eb59ce57286fee7b41b25dcfb3e30050afdfe015bd180c118010000",
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
      "Sat, 14 Nov 2020 06:23:20 GMT",
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
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-122-1605334902709",
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
      "2b",
      "91",
      "f77105cc23bc24b43248d76c10b610da4dd31439e626731b62889d4e55c57fdfb553ba5695d64fb17dcfb9e7dc471ec8ad28b6644c12911d2a28efdfddc8849c11d02cc3d7ae12ab2fcabfba0d3e7f3cf4bfbf87cb8b39cb26134408c3526cb7cfa1a164557250e3cdba9995b2dab352ca06266ab43b9d46bb4fdd6eb737a29d011d2151419e2e44718bf4df5aefd5b8d53a89373329b31cd85ea82697bba7f7d65da7b52fe50d70ad5a2f355b28a35a6fa87ec825675ac862b259a3834a4119c38e891c3dfca36e93f397b99b82ed9a1982ef0407c6b9ac0a6d7c610a2e8b54645569b392f103b13e9f1dc8da5b78b3c8e132af76455cb01d9c395ba659aceff7e05c84aba5e30717ab70398dfc5510af6797de72da9cad169b65b076ae2fbdd073344b72b05c67e29cdb5b8017d4df82d2a2b0ea917936ca8f1df25f0fc610505a411d8c07b4cfda433a4ad264c0d361d74d520a49324c062eeb26948f7ad0db26c09067452d8b15b2606e0fbb0a346ef70649dcdbbafd7844dba3d84dbb6deaf66040db29399e913fa5d030176a2f95a83b44ae433ff2e228dc04b369e4d9125256e57a5e1b33053cf7a8b14004fda7a6a3890a894aa6dd7e1079e17416f9575e3de105648cdfaf0f38e394e50a10cd4a6c9e867229b7d830124c97de1cc176625f4f4145c63f1f88e9b971f1ace54ff4080768ec6afb25eb28f4834fd6ce0971c5f2ca42eeea83292315b9317dfc85405cd23a09f9b6f1c21fa47e0a2185120afef630116c036fff6ca7c54730ae3eea288d77dc1dae8c0a2fa1de2161cbadd92ea574d0a7c4824bfd2a36ecbba7ae991c2623eca0d08f25",
      "d58b8f95d662957a026110c71fd86e1dff02f1ccd32c7a040000",
    ],
    [
      "ETag",
      "3siOKsIVkNJBq6X+eHFDag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1605334902709"
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
      "0000000002ff8d93516f9b3010c7bf8bf74a5448d37445ea03e9b2361a4d32421eaaaa8a5c7c30678663b6c986a27cf79d6997556d25fa0277c7efe4fb9fffecd94f590916b24759fc6a40b79f0ab0df5d9080699435f4aab132c03c06961744b64db2bdbbf9f6a7947c19e1757b12acf124babc24c2643fa0e42cdcb35c82128685f77b56f112a82d43d594d5a6cb3c66dbda155769329b5f535ea270f97c1dc7d1249eb283776c14dcf24dc77fa0ede1e0b12d3e269083862a03374bad710b999d39998697b58281c14667605807771f0a8d4dcd35e2802a8360381c0463ffecf47474e10fcffd0b221566dc4aac085eaf684066d17295e06f92c9822111ba8b4972de3d775497a293e2c2d93c1d8fba095f02b9d4c63e6de51ff8acee35a9f80741ba02a9faa0022a01ba8f92f5860ba1c1985e12cd86d7f5119b2c16f11b885742a314fde04ef600caee8ec0d77811bdb75a32ceff5d7d89d2e91bc258b2c3114967b7d3551add2e1df7f07cbf93d682596a24b718704609fcd1e7b3f3b1ffe49d2b747ea27342ab1bf058c6e917b89196853957060e7f017266e14060030000",
    ],
    [
      "ETag",
      "yuRjYHKxmiaPAoGy/1Uo/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 14 Nov 2020 06:23:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
