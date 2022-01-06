const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212590796";

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
      "000002ffedd3597282300000d0bbe45b995889a9fd033422c4250308f2e3040cab96b5b2747af73abd467d7778df8087a1689a4b5be4e2137c8081bf2da5500aa0e23de068efe39d289df3d5e5393de26a51de739e1a6de9474dae5684aed9cdb516074781b8198f30ce28d2826d96fa96b0ae2230f4ce246674aef9621d77e7f8b0bb117996f8c900151d5a558e11f4e5809b89c35a365ff1cdfd8e726d5a758815a3989de627fbcb56066c1084d729aee84ef73624d1a6464134979a9a47de3bd8a374aaf4a376080b8577db6194e528ebe9de7ba878347bb77119b3e2d2396e57190b69c0aa587a79f977c00488be4c6bd15cd2e7f6395a2e27e0affea51d4af1fcaf0a5e8b1afcfc026153326419040000",
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
      "Wed, 22 Dec 2021 22:36:32 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640212590796",
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
      "c8fbb8269007098914ad514a57a684ac84349aa6091973616e094eb0e99455f9efbb98266b55a9fd84ed7bce3de73e78220fbc48c898c43cdb57501e3edd8b985c105034c3d73cddf0f960e3cc0fdf64b1f74cb8fdfbf92e9b4c10c16b96a4db5d0e2d29aa92811caf57edac14d58e9642b43051abd3ea0cfa56b7d3b547d67034409a843c9df3e201c9bf95dac9b1699ea4db9910590e74c7659b89edf9dd7cec9abb52dc0353d27cad68a28834dfd5fc920b461517c564bd42fd4a4219c196f21c1dfc2726f1e5ebcc6d4eb7ed0cc18f9c01654c5485aa5d610a268a946755a9b392f113d12e5f1cc8ca9dbbb3d06022afb64554d02d5c1809553452871d18d7c1726178fef532584c436fe947abd98dbb98b667cbf97ae1af8ccd8d1bb886a2710e9a6b4c8c4b7df3f182fa0948c50bad1ed6cfb5f2737fbcb743a909282da10946436b403b8e358ad378c852a767c7a90571ecc4439bf6628b8dfad04f62a0c8d3a29a450b510c7ba39e3d489c6864db4ed4776c8846719c464e7f68819d0e7b0346c9f182fc29b9822b2e7742f2a643641378a11b85c1da9f4d43579790d22a57578db1ba80971e15161859560781efd475aca35ca05add72cf0fdd603a0bbd3bb799f21c32ca0eab3dce39a5b90444d3121ba8a05c88049b46fce9c2bd42b09edaf7535092f1cf2752f7bd76f2a2ed677a8843ac2d2bfd25ab30f0fcafdace097147f34a431e9b032981893241cfc75f88c32d6d7290dbb51bfc20cd5300299450b08fe789601df8e85f3b6d3e4271f751452abce3f230596bb0129a25e2bad633bb8b63261a5caa3731dbea9f5a56e7a833c2160af55c50b3f958672356c9330883387f5fb7ea",
      "f80f2a5c35d577040000",
    ],
    [
      "ETag",
      "lfWiL6W8LyJsnqI/eQz+Vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212590796"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93616f9b301086ff8bf79548214dc982d40f644bd768344913ba699a2ae4da07756738669b545194ffbe33edb2699d44bfc0ddf93971f7fae5c07ea85ab298ddabf2670b66ffae0477e3830dd8563b4baf066b0b2c60e07849e497e99932b89f5c8d465f1f2ebf6dd74fede728b9b820c28a07a8388b0fac50a0a565f1f703ab7905d42650b7559d7759c0dcbef1c56db6592c3f515ea1f4f9f2364d93593a67c7e0d428b9e379c7bfa1edee18b047bcdf4001066a017e96c6e02308b7f06b5a5e351a06165b23c0b20eee0e4a836dc30de2802a83701046e3e1281c9d4f879369449c46c19dc29ad0db2d8dc71c3aae37f8444bb2f08c08d3c5b470d13d775457b25bc4878b65168dbbf9fe06b810d8d62eef050b65ac7b16ef37f822c2bfa4e66f04e9a694ee834aa825983e4a353997d280b5bd24da9c37cd099bad56e96b556a6950c97e70a77a00ed7627e0325d25ff9396fcf547ab8f49367f455847ae3921d9e27abecd92ebb5e7ee5e8c30db3bb06b83642a0bde4fe170fcfe7c120d9f2df601bdede83bb1332d044c70fa53ae946371c1b585e32f16226d8c87030000",
    ],
    [
      "ETag",
      "V93iroy7H22WhFYSPwuK6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:33 GMT",
      "Server",
      "ESF",
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
        query: "SELECT COUNT (*) AS __count FROM `records` WHERE `stamp` > ?",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "1970-01-01T00:00:00.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640212590796",
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
      "85537b4fdb3010ff2a91f7cf36d1d669e95342ac2a19cbd407b409682fb5b673c9cc92b8d80e08a17ef75d12ca434820454ae4fb3deecebfdc937f328fc88870995c17a0ef3e5c294e0e085896e0e9d9557791dc46e1e9e27c117682eee0fb243c1f1f1d2142962cc3b26d0a0da30a2dc08cc25533d1aad832ad5403851aed86db3ba46db7dd1dd2feb0873403693c95f93f24ffb5766b46add6deba992895a4c0b6d23485ca1ecf5b37edd656ab2b10d6b45e3ab6d0c4b4def43c4e956056aafc285ca17f6140af216332c50e9e8811fff252b92959d64c107c230530215491dbb22b94102a8f6552e84a958cee49d5e5b30fb2f2a6de2470268b701e381f3f7f72c62b67bdae349cafcbc5ccd968104a4766e35c7ef3969eb33116dd37ceef82d20e38c7e81281b132af3c02c65328f51fb6e0bf5e7d49609619a88beb3eed317740873ce67d110f3a5d1e53e07cc0fb5dd6e1540c0fe130e2c090674bf58ac572950fdd1ed0487485e08cb9110c108e3a831ef4298f61d81711675dcec8ee80dc6a69e1449aad32b2de05b95cfa81b70e96e17c320ebc6a8c9815a93da99b2b8778dea7c521d794ba087c63b65d59950addcae5faf3c05b8e27817fe1d5f739858489bbd535de68cc520388669a656041cf5404658c172b3ff017f3f11419d5259ded11868c7edd3f1182bb6db5695bbd49e0cfbc55309e9d553dec41172c2d2ad44dfd41dc619f36a88b4f40e9a87a9a94d29f64b7fb83444c65ad4bce436ff983d4474b8841432edebf59045785f7fead7dd2118a5947174c95951823614a0fa1a18e93ccaaa6f7ec4e9b764805d6f655add376f73b2b354a45c820b70f03d549c7396bb3c23c82b0882998fbf353acfe077c8de78367040000",
    ],
    [
      "ETag",
      "Pj5OgwdUGOQOU3T58JCUQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640212590796"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d905d6bc2301486ffcbd9ad852ab343c18b296553c4b96e6e8c2112e369ad6b7bbae44429d2ffbe93ba9b7cbc7992f72157f8c9ab038c619f67bf0e4d739721bffa4582d6156c65aaa9b2083d4056999097c27d2d2e2f8be32c5a9f87e926ce3f3ec36c3211c2ea23960ac65748732c0e16c6df57a85489726db7d3e42a168a9bda07f3d57bfc1427129474f0c16ab35c3e4e9731b4dbb60727da2798a2c14aa37fb1367442cd732f6b55591718587246a3850eee0e3243ae56862890241804fde83e1cf407c351f8308a842b482bcea91274f306d2c2c4aa48e822aad017c0744bb14ebbf1ece3d00b6dffd969c368d786a4d7a2af0c6ff533f24a2caa6c1cf6402bf98be79c6ffbf60f06decfa568010000",
    ],
    [
      "ETag",
      "wluYJwOJhC6Pv5fUEiVW0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:33 GMT",
      "Server",
      "ESF",
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
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1640212590796",
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
      "9b3014fd2bc8fbda24e44912295aa384b6d102e90869574d1332e6c2dc114c6dd3a9aaf2df77314dd6aa52fb09dbf79c7bce7df04cfef022215312f3eca102f9f4e55ec4e48c80a619beeaeb45226e2fef6fbccdd2e1df7e94f3bbf5683e9b2182d72c45f7650e2d252ac9404d77db762645555229440b13b5faadee6860f7babde1c4762623a429c8d3352ffe20f9b7d6a59a763a47e976264496032db96a33b13fbd771e7b9d528a7b605a75de2a765044753ed4fc9a0b463517c56cb745fd4a818c604f798e0efe1393f8fc6de636a7fb7686e047ce803226aa42d7ae30051345cab34a9aac64fa4c8ccb5707b275d7ee22b498c8ab7d1115740f675642358df45309d645b0f1ac957fb109bc79b8daf8d17671e57af3f662b3de79fed6babd7203d7d234cec170ad99756e6e3e5e503f01a57961d4c3fab9567ee9cfeafd506a024a2b688291638f68776c4fe23476583aee0fe3d486381ec7ce90f6639b4d06304862a0c833a286450b51b0eeb89b8c7a10c5839e130d12a71b8d81f6a311a569cf8963184ffae47046fe4aae61c95529146f3a446e8355e84661b0f317f3d03525a4b4caf5b2315617f0daa3c60223dbee22f083ba0e75940b54ab5bbef24337982fc2d58ddb4c790d19654fdb079c734a730588a6121ba8417a22c1a6117feeb94b049ba95d1f838a4c7f3e93baefb593576d3fd1431c626d599b2fd986c1cabf34768e881b9a5706f2d81c88042664829e0fbf10875bdae420df776e70479aa700529050b0cfe7896013f8ec5f3b6e3e4271f7514569bce3f230556b3009cd127153eb89dd779c213160a9dfc526fdf1b165758e3a23eca1d02f05359b8f753662953a813088f3f74dab0eff00f332b11877040000",
    ],
    [
      "ETag",
      "tPCdoWGjVMOD7iKXpAYL6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640212590796"
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
      "93616fda301086ff8bf77141020a7444ea87d0b10e29850e42a56aaa22d7be64ee1c5f663b5408f1df774e3b56ad93d22fc9ddf939e5eef59b03fba98c64317b50e5af06ecfe4309fe5b08d6e01aed1dbd6a340e58c4c0f392c8f176783b4cfc5d537e6cdcd5f27637cddc6579714184133fa0e22c3eb04281968ec5df0fccf00aa84da06e2a93b759c4fcbe0ec54db65e2caf28af50867cb94dd36496ced9313a354aee79def2ef68bb3f46ec111fd65080052320cc525b7c04e117614dc7ab5a43cf61630538d6c2ed4169b1a9b945ec51a577d61b4c46fde160389ef6cfa713e2340aee151a42b71b1a8f79f45caff18996648333226c1bd3c245fbdc515dc97691102e96d964d4cef71ae04260637cde0916ca3aff2cde1ff045847f49cddf09d24d29dd05956024d82e4ad53997d282739d24ba9cd7f5099bad56e95b558cb4a86437b8531d80f6bb13f0255d25ff9396fcf557abcf49367f43384fae3921d9e27abec992eb9bc0ddbf1861b6f7e06e2c92a91c043f0dfaa34fe3f349ffd96297186c47df89bd6d206282d39ff2557916175c3b38fe06dd5b44d687030000",
    ],
    [
      "ETag",
      "5U2V2AtYug+usGNVv9TsCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:34 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT (*) AS __count FROM `records` WHERE `stamp` > ? AND  `id` > ? AND  `id` < ?",
        types: ["TIMESTAMP", "INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "1970-01-01T00:00:00.000Z" },
          },
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1640212590796",
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
      "a554ed4f9b4018ff57c8edcb366d7bb450a089714d6593ac2fda52cddc96f6380e764a39e40e97cef8bfefe1b05363d40f4b4820f7fc5e9eb7e3165df13c460314f1f4ba62e5f6dda588d03e628aa4707a66b142fdd9eeed7d3d9ec517dee9de28b5b3e1c1012078cd92645364ac254555522607cb453b2d45559052881608b5ac96d9b770d7ecda1e76bc3ed024cb9231cfaf80fc4ba9420e3a9d9d753b1522cd1829b86c53b1f977deb9e9768a525c32aa64e7a963074c64e755cfc34c50a2b8c80f960bf0af242b576c437806193c10e3e8d353e536279b760ae01b4e19a15454b9aab302092af284a755a955d1e016e92c1f7da0853ff647a1319a2da7a1f1fee30763b830562bad617c9ecf26c6ba645494b15c1be7c7fedc37d65281fbdaf85161dc63c6a1319c1e19c69ac72f1f51e310728999543cd7998424ca589dc57daf82e703aa094411c99ae0cac17d62bad88b92c8a189dbb3a304b3287223c726bd0853cf62561c31023c55ab6b16c9456ef723d7eb76bb6ee226d88eac5ee2d9cc74edc826a6d9b3719738ae13638aeef6d1ef922b76c46521246f3a86cee741e8afc2f9723a1a86be2e232155a68e9ae4ea221ee7a9a0c815c626005fa9edae8e72016ef5088269e8cf87a33038f39ba98f594ae876710d734f482619a04949364cb1722262681c3a992d8230984d876360e8519eec10120dbedf3e10c26da13badf41b85c1c45f84c3c989ce61073a2359a55137cd07323d07b7b0094f88f1403f6d8cf105babbdb7f591c0ae95baf0b5bffade080c24f40c0fd69c8e874e9cfbfa1e668ce1256b29cbebd5d00d681b7fe02bb3b0950b895e002fbaf38ac3295b5072d59b3d27ca31bb7635b4e0f230d2ed5b398673abbb9d51ab522dbb05cdd17d4dcc9ba533a54c97f2008c2264e83e91788fe05fda8962611050000",
    ],
    [
      "ETag",
      "V4eptzy++KHOdZ9Q+Cg5lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640212590796"
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "86",
      "ff",
      "cb",
      "f196256c2086255c0812c44c22538cc41052cad91c6e3bb33dc30cc27ff77478d38fb74ffb3ee919beb3720f21ecb2f4a746d3dca4c84bb788d1d6395b992a2a2d420790552ae47baf79cad793e764a53ed6c7de4c9f1e54b31c8d84b0fa0b0b05e119920cf3bd85f0f30ca52a50ae6db79aea9285e2a672c17cf1369d4d63090adabb60b18aa2fb713485cbe6d28103ed624cd060a9d1bd58193aa0e6b993b5aaa872f42cd546a385166e0f524375a50c912789d7f7fc41bf1bf8c1edb07b371c089793569c5129e8ea15a48589551ed3afa8822f806997629db4e351e2c0f96cfed171c3685f0c49ad45d7d8bdb64fc819b198b2a9b1035ac9573c667cdd5ffe00279584ff67010000",
    ],
    [
      "ETag",
      "V3yJlYCMfUaXYv3GczDayQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:35 GMT",
      "Server",
      "ESF",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd0417282300040d1bb642d4ea280d25d0169088a550443364c80942a5628c480767af73a3dc05ffcf703785188becf64538b2b7801773eb3a6c53487af54c1c7e15d1e51ce7de7e62e591291a22b155a4179642b2d090c6a6119f6aeb9259bd47b53b587a2052df5614dec87c6cfc66553db7ecc59b22387f84218c6634369133afbddd035e8c3cb189795b75dafced0471129e9c6093fbf4c5b67799a0622dae666cb74a566c1b377bc71a0eba373586823bd8d719c8ae41c612fb01b8ebe2b9764660c71555dfdb9ab97586baac7d2daab0497b0903307d6766a48de5fe77754413001626c4f9de8b3d3f37b6e58d604fc2364f2de8aa7842d78273af0fb07d256c89323010000",
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
      "Wed, 22 Dec 2021 22:36:35 GMT",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1640212590796",
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
      "4fe33010fc2b91ef95366969d20fa93a7a2540a5368534059d4ea7c8713639d3342eb60342a8ff9d8d437b2024788aed9dd9d99dddbc900d2f53322209cf1f2a90cf3fee45424e08689ae3ebe6e1c60ffd9ebcde30fff2e9b2630fc25fc3a7f11811bc6629badd15d052a2920cd468bd6ae752543b2a856861a296dbea783da7dbe9ba43a73ff490a6a0c8e6bcdc20f99fd63b35b2ed83743b17222f80eeb86a33b13dbedb8f5d7b27c53d30adec8f8a368a28fb4bcd9f85605473518ed72bd4af14c818b6941758c17f629a9c7dccdce674dbce11fcc81950c64455eaba2a4cc14499f1bc92262b19bd1053e5bb0359f9737f1a594c14d5b68c4bba85132ba59ac6fa7907d645b85c58b3e062192e26d16c19c4abe995bf98b4a7cbf97a11acacbb2bf4dcd23429c070adb175666e015e503f05a57969d4a3fab9567ef367f679283501a51534c1b8ef78b43370864996f45936387593cc812419247d979e260e1bf6a09726409167440d8b96a2741cc84efbae130f5cc78b7bcc4be3419a0d63873a9ed771bd4ed64dc9fe843c49aee19cab9d50bc7188dc85b3c88fa3701d4c27916f5ac86855e8f3a6b0ba81f7356a6c30769c0e02bfe86b5f47b940b5daf25910f9e1641acd6efd66ca73c8297b5e3de09c335a2840349568a006b910299a4682c9c23f47b099daf521a8c8e8cf0ba97daf2b7967fb911ee110eb92b5f9925514ce824b53ce01714b8bca401e9b0391c0844cb1e6fd5fc4e1963639c8cdda0f7f93e629840c2494ecfb7922d804befbd70e9b8f50dc7d54511aefb83c4cd51a4c42b344dcf47a64bbbd9e4b0c58ea4f31d7730e96d539ea8cb08552bf35d46c3ef6d98855ea08c220ce3f3056ed5f01a596d46e77040000",
    ],
    [
      "ETag",
      "kqQERE4rPkcEGwG1/8RB9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640212590796"
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
      "00000002ff8d936f6f9b3010c6bf8bf772444aba84ae487d41b67443237f4a48fb62aa90631fcc9db15ddba48ba27cf71db4cbaa75127d0377e7df89bbc70f07f253284e22b215d5430376ffae027fdd0619b8467a872fa395031210f0b442f2cafcba59e5ef37e12c596de70fb7d9b7ebea26bebc44c2b11f5053121d4829407247a2ef07a2680dd8c6b46c6a55745940fcdeb4c5759e258b2f98d79ab7f96293a6f1349d9163706ae4d4d3a2e3dfd076770cc8bdde66508205c5a09dc5587d0fcc27ed9a8ed646c2c0e9c63270a483bb83caeac650abf5002b83c960148e8767a3b3c9c5f0fc22444e6a46bdd00ad1cd1ac7235e7b2a33fd884b92d107246c17e3c265f7dc615df06e91364c167938eee67b0950c674a37cd10b96c23aff24de1ff059847f4949df08e24d09d90755a038d83e4a9882726ec1b95e52bb821a73c2a6cb65fa5a15c5ad16bc1fdc891e40fadd09b84a97f1ffa4457ffdd5ea739ccf5e11cea36b4e489ecc67eb3c9eaf5aeeeed908d3bd07b7b21a4de5a0f5d36838fe38390f874f16fba45bdbe177226f1b0808a3f8a77c159e4425950e8ebf019f624d8687030000",
    ],
    [
      "ETag",
      "FpxVPT+U6EIPbMqWRKQgVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:36 GMT",
      "Server",
      "ESF",
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
        query: "SELECT COUNT (*) AS __count FROM `records`",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1640212590796",
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
      "0000000002ff85526d4fdb3010fe2b95f7659bd62669d3a4ad84b6aa0414adb4a34df7f2a9d8ce25189238d80e0c21fefbce69e94048f02df13d2ff7dcdd03b916554a268489fca60175ffe14a32f28580a139bec2d5cd49669cbfdf8fcf7fc7fdd3f26e79799b9e1f1d21425896a6655d4057cb4671d093cdba972bd9d45449d945a16ed0f502dfed7bfde1d80dc701d23414d95c54d748be34a6d613c779b2eee552e605d05ae81e97e5e1ddb9ed3bb59257c08d765e3a3a68a29d373dbf169253236475b459a37fa3416da1a4a2c00efe1353f6eda5724fd0b29723f85670a09ccba632b62b94e0b2ca44dea856954c1e48dbe5b30fb28ee6d12ce9cc969b45d2f9f8f95367baee6cb7ad46e764b53ceb5c28e052a5fa02e552d04654ad5842590156681f377e3d634ba0866ad815b7a11b506fe48e59c6429e8d064396b9c0d88885433a602e1ffbe0a70c28f28c556f59b49255df1b4290d2d1d81ba57e48331a8cfc410a83b1cbd8007c0843c6f8103cf2f885dc2961e058e85a6ab10b4d7eade224da26abcd62364da23646469bc21cef9ab3219ef76930e4d6753d04be91edd1568544373bc5789144abe92c897f46bbc5cd21a7fc7e7d83abcb68a101d154d1120ca83399e2e0c88fe53a4ee2e5623ab75a780dc97d6ddfcf37d1eacffe69051928a8f8fb8346705b78efa69f2e0ca17863e8a20dfee356b9b61e5cc16ebba2b4bd1cd8413f08490b56e655cd77adf2e1b2ac229450997da0dd8591c7bd59a30f202ce25216f1e214abff00bbe6c387df030000",
    ],
    [
      "ETag",
      "ejqFft/xKDQXI2GmwOhvdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1640212590796"
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
      "000002ff2d905d6bc2301486ffcbd9ad852a5b45c18b39ca7494323b1d8c2112e3b1ab6b73bae45457a4ff7d277537f978f324ef43aef05d98034c615fe43f0ddaf62e475ef94586ae29d9c954937108034056b9906dbefa5dbcc47abcf8b017f7be36e97992e6b399104e7f61a5607a856381e5c1c1f4f30a465528d7763b4d8d61a1b8ad7db04cd7f1739c4950d1c107e926491ee7490cddb61bc089f6191ed1a2d1e85fac2d9d50f3d2cb3a55d525068e1aabd1410ff707b9a5a65696289024888261741f8e86a38749389e44c295a415176404ddbc81b430b12a33ba882a0c05b0fd52ac8ffd78f671e885b6ffecbc6574af96a4d7a1af0c6ff54fe4955854d9363800ade42f1605dff6dd1fa5d687fe68010000",
    ],
    [
      "ETag",
      "ygQxHJEc7HYrwsVTnNv9Ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:36 GMT",
      "Server",
      "ESF",
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
