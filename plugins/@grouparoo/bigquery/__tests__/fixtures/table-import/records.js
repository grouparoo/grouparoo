const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212585169";

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
      "bb646d1d50c4d89d801fc0f2112cc8c64934082a04214182d3bbd7e935eabbc37b02743c92a639307a2525f804028d66c3e3104bf3b895fad00db3cb8dae2eeaa3b77d5d49e149b16f48a35323b8fbddee6c927d9d6685c54987e547499051c36c59adc4ba1785cb13b86e75dbb5970edeb5d3cb66d3511ee58b51ab7a76ca16c2f1d947ff5df7659c5581a7bb961167aac56cb30acb50de87f3220b548d4b68b2fdc26532de771a1c11413c0f264e33757481434b3103097bd0a5779e3716de1aa7f3ea0c55aa3c4c9f7745921a488bf440665ca5ec8ae57964dc76c3b7b77f070c00e9aabc26cd217f6d1f4f66b301f8ab7f60a222afff1a4135a9c1cf2f556978e619040000",
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
      "Wed, 22 Dec 2021 22:36:27 GMT",
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
      jobId: "grouparoo-job-1-1640212585169",
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
      "536b6f9b3014fd2bc8fbb82640de448ad62ca16bb484ac40da4dd3848cb9307704a7d864adaafcf75d4c93b5aad47ec2f63de79e731f3c923fbc48c898c43cbbaba07cf8702b62724640d10c5fcd78fff9ca4cbe8b607a99dd7e9dcfee3f5edd6793092278cd9274bbcba12545553290e34dd0ce4a51ed6829440b13b5ec963de8591dbbd31ff5ed8183340979bae4c51f24ff566a27c7a679946e67426439d01d976d26b6a77773df3177a5b805a6a4f952d1441169bea9f929178c2a2e8ac92640fd4a4219c196f21c1dfc2726f1f9cbcc6d4eb7ed0cc17bce803226aa42d5ae30051345cab3aad459c9f8916897cf0e247097ee2c3498c8ab6d1115740b674642158dd4c30e8c0b7fbd3216dec5da5f4dc3c5da8b82d9a5bb9ab667ebe566e505c6cda5ebbb86a2710e9a6b4c8c737df3f082fa0948c50bad1ed6cfb5f2537f16af875213505a42138c86d680da23cb89d378c8d251b71fa716c4f1281ef66937b698d3835e1203459e16d52c5a88c2611d1bba761c75a9d38b7ae038d168987422da73bac38e65db83d4268733f2b7e40ae65cee84e44d87c88dbf08dd28f437de6c1ababa849456b99a37c6ea029e7b54586064593602dfa8eb5047b940b5bae50b2f74fde92c5c5cbbcd94979051f610dce19c539a4b40342db1810aca9548b069c49baedc3982f5d4be1d83928c7f3e92baefb593676d3fd1431c626d59e92f09427fe17dd1768e886b9a571ab26f0ea40426ca043d1f7e210eb7b4c941ae36aeff83344f3ea45042c1de9f278275e0bd7fedb8f908c5dd4715a9f08ecbc364adc14a689688eb5a4fec61a737221a5caa57b1eec03ab6acce5167842d14eaa9a066f3b1ce46ac9227100671fe9e6ed5e11f13ae8f4477040000",
    ],
    [
      "ETag",
      "/bvBQ/dXoSAHgjKDCx+Qxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212585169"
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
      "c7bf8b794da506da0c22f1d0b276640a2d4dc35e261499f8921a1cdbd84e5155f5bbef1c588760527849eecebf53eefefe674f9eb86424260fbc7e6ec1ec4e6a702b1f64605be12cbeb492164840c0d11ac968b13acbf2f9d545b2c936fae7eed753be9daf2e2f91b0e5061a4ae23da938086649fc7b4f246d00db4a25da46165d1610b7d3beb8ceb364f103f346319f2feed274324d67e4101c1b1975b4e8f82fb4dd1f02f2a81e32a8c0802cc1cfa28d7a84d2257e4d4b1b2d6060556b4ab0a483bb83daa85653a3d4002b83701046a3e169783a3e1f87d105724295d4712511bd5be378c4294745a65e7049129e2161ba1817aebae716eb9c758bf83059e4d1a89bef3d40cb52b5d215bd60c58d75afe2fd05df44f8480afa45106f8a8b3ea806c9c0f4515c17943103d6f692ca1654eb23365d2ed3cfaa48661467fde096f700c26d8fc03c5d4efe272dfaeb9f56df27f9ec13611dbae688e4c9cd6c9d4f6e6e3d77ff6684e9ce81bd350a4d65c1fb291c8ecec7dfa2e1abc5ae94b71d7e2776a685809414ff946bee485c5161e1f007728c193987030000",
    ],
    [
      "ETag",
      "6NQ3RTFC9IhRhpJyVkTvFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:29 GMT",
      "Server",
      "ESF",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640212585169",
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
      "ff8553db6eda4010fd15cb7d692bc017ccc548514bc154960834b6499bbec07a3d7636d85ed85d274251febd634368a248c98bb59a3967ce998b1ff52d2b137da4c72cdb57200e9fee78acb7745024c3e8a238f4bab3ebedf4afb3ea3add3f5bafd8c3d5c5052258cd92a4d8e5d096bc1214e468157632c1ab1d119cb7b150db6e5b7dc7b42dbb37ec597d176912f274ceca2d926f95dac991613c4b7732ceb31cc88ec90ee5c5396edcdbc64ef03ba04a1aaf150d1491c6bb9adf724e8962bcbc5885a85f49106b2808cbd1c17f62127f7f5db9c348d1c9107ccf28104a7955aada1596a0bc4c595689a6aa3e7ad41b972f1e7ae8cdbd49a47d6d69e178e6ad27e330fabc910a05361a915a1805fee2e797fab959af6f1f8a8d360b9697da4600e522911b6d194cbd40fb71a33db3c6e1a4a56d58d2bcb4b97fe9479a659ada72360bbd4833d1560252b1b23115913887dad0696cfedb5dd504a2888463723d30fbc41a9a6e9cc6039a0ebbbd3835218e87f1a047bab1495d079c2406823c55576f58a4e4656c51c734075d1b0603277587439bb8b41fbb49af3b802435cd142cfc12fda9a53f08a660cae48e4b761c9efe3bf0236f1d05abc5641c794d1b29a972353d9aab9b78e95361936bd3b410f84e6f4f75967154abb7e12f222f184f22ffda3b1ec01c32420fe11e4f2025b9044413410a50202e798283d37f2d433ff2978bf1bcae8557151d7675fc6ae50537a75000290828e9c783467093f8e8df78be5484e2ada20a2e5f31dc2a95b5061570dc2e2b6a2f67b6ebd87dbd010bf526d7ebdb983b5f685d110a28d5a9a1e3a5ea4f27b14a9e4198c4a52cf05031fb0fad1f0e8427040000",
    ],
    [
      "ETag",
      "Nmy53FVkDZ4U343XkEmqeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640212585169"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff9d976d6fe23810c7bfca29f7f28a653b8f465a69699ba5edd17697b2d24aa7154a1303a106738ea1adaa7ef79b84360f8b9b0bfb82e219cfa8fefdc71e9b17eb215d2756dfba4fe7ff6eb97afe73cef5b77c30e6d956e80cbe36729d71ebc4e23a9a43e470c5369be50acfbf65cb1f4ff12e7cbabab87efcf40922b278c15791d57fb16629174966f5ff79b1d6d18a435a9a40807edee4e3cb9b49380cc7e058c92477dc7c1f8d06a7a3d07a3d2913a23896dbb59e1e9d384b55a6a7855126de4dc69737c3f63c11fd561a10a7e2b894395f275c1d97936ea65192289e6547e6c96c1a6d3655d2e9eded281cdcfc8ff8eb44c934f98dcc5d7a6c86d0bb2ae3cbe87630698f4f225d2bd1f96012b6c7673a5ad5d634b9bc0eef2683ebafed59d3e9e271d545ea9faf27d652de8ff98c2bbe8e79befd374a2e79ac2ff39395c17f17bc97c9ad8a795e3c082e26e64a6e379192b2079e1eed11cfc19450377089c7204ec838d2a95c43e8f73b589aa5a58ec4583ec2b9b2088608558ce18ccd8abfbbdc5f303447a14a79695c71b5936956da7cb977e0cffca958298ae5aa9cbd8e44954a5c441d1fd901f269e9d46a5b45cc229171f314751922551ac514f730ede1da82911b60d7658439213304fe41689fd87de2fc8571217b9d9b1ab8cfa2381535f430df38ef46ccc12246e82f70a4457de536228e871c82686db92daccd29e620db3be4a14d70cf0174c73591d3921cb9189be86d03fd5071cd45cd94db58c60fa5633e7ff3d04e22108202a820c188d8ced1d5f7bc00d98764765303df260c34f07c930a764d05cf37a9e0185418ac221d553b426a9ecda44a4a4f14bfbbec2e3210662306a700c3c733a37e6c3820203e04739a220424b00b1102930a4e4385c0bc1ddc2aaf1c8d5255e9702517eb4c436b797788e59bc7e9a2427e20bc7cb188b12ed56f4e05344f3f44739b3a30ecf87b1d984908b72904330ae1198438e7ebb434eee248a4952e4956d86ea7ad007d90d8045a03f4c3e34f04f5612705875cde2f2a30f2413ff45afba16f20bfe0625eb1fe2d78ed1a583ce4a6d7053cc8af810001bd1b98d95a8e00f651add0258cdfa026d8f75d33b5df4a1d18a8875ce9da2570b6bd4fb5aeba605cd87ea78ac3c6a5ae0b55cf8fff07456e",
      "297900378863800f9af0c4b399193e68856706f8d15609ceab737e0a4f062eaa5b41dcef1d41a73b20dfed708d83048e6d466cd3c203f96a574749c59af8d4c5b6199fb5e293aab5568b3b974a2f9e4bf3b2d1f492343759177427dff304790e742ebb4bad9b539461e41ede7fb52517e8b6edf94674827f45fff9f61c3c7d86ebebab92f0b4cc78feaac4fb17e699cc91e0bdd3cf977562c511fc36bb48f5de7efd0fa08aa6d0f80d0000",
    ],
    [
      "ETag",
      "Gm9ppjm0gQsjXxcvExJHMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:29 GMT",
      "Server",
      "ESF",
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
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffedd34b7282300000d0bb64ad0ee123d29d5a445b110514c226c32728a0044914a2d3bbd7e935eabbc37b82384d096398d38ad4e00388583646e92891a6e15d7af83634aba558dab1ab296d9da7c4d8bab5ee6e1a2f30eee991a98bb382cc717d8eccd0bbc0f97a6e39eda5cccd0d922dae965260756502cdf13484de57bff23baa6179ee68cdcafea425a1509f909ba2d7ce75f19d4d6632ac0a21201309c292f4c82e3c0fcf63af3ab07028cb7479b44f7de147c3082648d3359e747bd8797c6f0e113e4496d59f48b0cf835dab77fdadf785979d1a8ea94e51dee095e53074dd55db3555476f6fff0e1800d237454b182e5edb15cd3006e0af3ee6a221afff3312b7a4053fbff51a998619040000",
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
      "Wed, 22 Dec 2021 22:36:29 GMT",
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
      jobId: "grouparoo-job-3-1640212585169",
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
      "536b6f9b3014fd2bc8fbb826212ff290a2354be9c694900d48bb699a903117e696606a9b6e5595ffbe8b69ba5695da4fd8bee7dc73ee837b72cdcb94cc49c2f39b1ae4ddbb2b919013029ae6f80aacdc7edc7cbf76be5cb1f7f98517fe4d96345f2c10c11b96a2fbaa808e12b564a0e6bbb09b4b5157540ad1c1449d61a7ef8cec417f309e8efbce0c690a8a6ccdcb6b24ffd6ba52f35eef28ddcd85c80ba015575d26f68fefbddb41af92e20a9856bde78a3d1451bd57353f148251cd45b9d885a85f2b9031ec292fd0c17f629a9c3ecfdce574dfcd117ccb1950c6445deac615a660a2cc785e4b9395ccef8971f9e4404277edae228b89a2de977149f77062a554d358df55609d07db8de5f9e7db60b38cbcad1f87abcfee66d95d6dd7bb8d1f5a979fddc0b5344d0a305c6b619d9a9b8f17d44f41695e1af5a8796e941ffae3bd1c4a434069056d309ed80eed4fed59922513964d87e324b32149a6c9644c8789cd662318a50950e41951c3a2a5288734b51d4893982663271ef567433c6583189fd3749439364d1d7238217f24d770c65525146f3b442e032f72e328d8f9ab65e49a12325a17faac35d614f0d4a3c60263dbee23f095ba0e4d940b546b5aeef9911b2c579177e1b6535e434ed95d788373ce68a100d154620335c88d48b169c45f6edc33049ba97d3d061599ffbc274ddf1b274fdafe488f70888d656dbe248c02cfff64ec1c1117b4a80de4b63d10094cc8143d1f7e210eb7b4cd41beeddce007699f02c84042c9de9e27824de0ad7fedb8f908c5dd4715a5f18ecbc354a3c124b44bc44dad47f6ccb69d213160a95fc4facee4d8b226479311f650ea8782dacdc73a5bb15a3d823088f3f74dab0eff0096d443de77040000",
    ],
    [
      "ETag",
      "ecnOBMXk6Jjc+gVISxbAag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640212585169"
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
      "0000000002ff8d93616f9b301086ff8bf79548a10dac45ea07d2d12d124dd2846a9ba60a39f6c19c1a9bd9265d14e5bfef4cbb6c5a27d12f70777e4edcbd7e399047a13849c846d43f3a30fb7735b83b1facc076d2597cb55a59200101476b2427cbcfd1f5979beaf26e5bc74df6f567f4986dd2ab2b242cfb0e0d25c981540224b724f976208a36806d4ccbae51659f05c4ed5b5f5c17abd9fc23e68de63e9fdfe7793acd33720c4e8d9c3a5af6fc1bda1e8e01d9eacd0a2a30a018f8595aa3b7c0dcccaf6969d34a1859dd190696f4707f501bddb5d4683dc2cae87c14c693f15978165d44617c899cd48c3aa115a2f76b1c8f38eda85ce9275c9284e748983ec685abfeb9c3bae0fd223e9ccd8b78d2cff7374019d39d72e520580963ddb378bfc11711fe25257d23883725e4105483e2608628d196947303d60e92da96b46d4fd874b1c85faba2b8d1820f833b310048b73b0137f922fd9fb4e8af3f5a7d488bec15611dbae68414b3db6c5da4b74bcf3dbc1861ba77609746a3a92c783f85e3c945f43e1e3f5bec5a7bdbe17712673a0808a3f8a77c128e241595168ebf008bd56b1687030000",
    ],
    [
      "ETag",
      "4PW5CXFf9Qjg6mEYx5kEbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:30 GMT",
      "Server",
      "ESF",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-4-1640212585169",
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
      "e3",
      "30",
      "10",
      "fd",
      "2b",
      "91",
      "f7",
      "cb1e3d9c366d934a88edb6818db6072401c41e6a1d675a0c695c62a7a842fcf79d24946357824fb63cefcd7b339eb92737228d499f4462759b43b6fb702d235223a0d90a5f8fbfe9fc6e9bc79ddd17c7a6a3d170eafdb83a3d38408428588aad3709d495cc330eaa7f16345699cc372c93b28e89ea56ddec5ab465b63a76c7ec3a4853902cc722bd41f295d61bd56f36f7d28d9594ab04d846a80697eba7f7e6b6d5dc64f21ab856cdd78a4d1451cd37350f13c99916323d380b503f5790cd61cd44820e9e8971f4f575e68660ebc60ac15bc181712ef35417ae300597e952acf2accc4afaf7a474f9e2420277ec0e43e373cd080647ee7c3808c28f0ba5516061306504a1ef4d8f3f15d7c57c7e75b75e1847fe6c622c32e0328bd5c2b8f8eefaaeb1a7fcce296dc3817168ccfc91eb1bdf2e9f428360583316222e6fc6d89b78a161526acc8e8e02373428da8d416991966643162550187d6ca7f7ff1f1604a699822a38efd12e336dea44cba8c79776bb132d2944911df53aac1d51ee5860c51130e4e9227bc96229b6a86799dd88c64e8ff6621e5bb1d56b39b6c36de8d26e17c0b23b0e384e9b3cd4c85d26348c84da4825aaa6920bdf0bdd79e89f4d8783d02dcb58b23cd1a3ca5c51c44b9f1a8b9c536a22f08dda1e8aa890a856fc92370d5d7f300cbd73b71a8c31ac18df05b7381a4b96284034cbd81a3464131963e3c8c92cf0426f361d8c9151fef6c91ea148ffd7fd3321dc6dca4eebf224a1377183703039293dec41e72cc94bd4b6ba90166dd13a6dd5692f345b7db3dd37ad06a5f4277978f883441cef2a2f393d73fd4b",
      "523df9b0840c52fefecf22b80cbcb7a4fb9541282e0daae0b4698163c455a1c133a8c649ac0b2f7bb643edae454a70a6ff8d9978ec7b56e42832c21a52fd5850b53258672596ab271006710aa6b83118fd0b837e9496b0040000",
    ],
    [
      "ETag",
      "GBtuwvud5y+980DDCNIKhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640212585169"
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
      "6f",
      "6f",
      "da",
      "30",
      "10c6bfca94bd1c4476fe07a9d2a0a4148dd28ed2bd992a649223b835716a3b74a8ea779f934e01d68c41df809ff33de27e67fb78311e6996181d634ed3a702c4e6730aea7bb998802c9892fa2be79904a3658022a9ceec4f06900aeae583f91db5fbfe9335ff9177cfce74868c97b02246e7c558506089343a3f5f8c8cac40db68a213d4262fd7c3f1341a44131d58f1a40c8cef46a36e6f1419afadda40e29817999a9d6c5c5021d5ac12b5f1763a198e07877d8c7cc8a689293bcd9242968038cd43f319491201529ee8e37246f27c6bea5d5f8fa2eef83fcdcf12c169f201e79a9eea606abd755c8caebbd3c3f909513b47d4ef4ea3c3f95291d54e4dd3e155743bed5edd1c76cd66cbe7d531adbe7f6d190f7c3e810508c86228af7f2ef803c46a58be2ca97f9d415bf242c4501e9e4eae3652c18b9c08cedb3ad276dad87390852d3770b117ea3cc663a228cf74eaddad2ecd505c1136e1cffa5d198e4e10d5523fb145f5b9d661bf42285756bdba0496925a7d634065ad968fa5f4bec2afaa4a33e6ab7aef42df6c06b50c5cd372023330b11bd441250a384238c83791bbad0d59a88dac36da968b4d37c0c8f7ddd089c286c44fd8ea60bb839d2f08553ddfa50e1aa8072014dd56705ecca952b54ce34afbc78063cb362dd735b18d7407eaf0823009ff507bf081834da7013ed887c79e1d36c30707e1c306f85121184056eb9ebe2ac058add9fc2d101cc36fd9589f7968ea16387633e2a15e78ba7db6f39e2adcc7b75c6437e38707f131aa1ddbe2fa5ca8e5a69643a9f8b619092d65780cba53de796c7a8ea94fe798b3dedfb24264baf63ba29d922b74dbf6fc46748cfe46bfff33057a1b05f246703d512494c304bd0d96735e22e9f9d829cb6a1931d17fc99754bde9d7dfb5b858b9ef070000",
    ],
    [
      "ETag",
      "DRGegri6pGbUi3D7q2bVpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:31 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd34b7282300000d0bb642d0e0808e90e81460b0a2a2ab861f80486af314446d2e9ddebf41af5dde17d8324cbf030c4ecd6e01e7c802959c079364f45231c451e6c25dbb3745db639450deaa9a09da365c9e998cb499597481cfbafbb26956773d0a1336d92b5e7b188baec090f285d9c9eb193f2ce754c72aff7c4da935cdc455c1aaae4187175854edd04754923544096df7fde769352924069158a5c7b7f7d8429cc4cfdb0d8ace45c168ec195151d350c7ef1eac651b797d62018aecb21ae370d2c72978d5eeb3f9a35bb45de55580a1127a3139a5661f807b5f2ed6d1a8ec592abf6fcededdf0133809fa4a27888abd77659857006feeac76c22f8f57f85138a29f8f90502bb58da19040000",
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
      "Wed, 22 Dec 2021 22:36:31 GMT",
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
      jobId: "grouparoo-job-5-1640212585169",
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
      "ff85536b6fda3014fd2b91f771059202e121a11541bab241584368574d53643b3799db10a7b1d30955fcf7dd38a56b55a9fd14dbf79c7bce7de491dc893c2663c2447a5f41b9ff742b193921a0698aafeee79ff3e25be5ee97ab4bd7eddf7c977eff269d4c10216a96a2bb2283969255c9418db79b765acaaaa0a5942d4cd4eab71cb7679f3aa7fd61df7147485390254b91df21f98fd6851a773a47e9762a659a012d846a73b97b7eef3c9c768a52de02d7aaf35ab18322aaf3aee6974c72aa85cc27db0dea570aca08765464e8e03f316667af33b705ddb553043f080e947359e5ba768529b8cc139156a5c94ac68fc4b87c71201b6fe9cd428bcbacdae5514e777062c554d348ef0bb0ce83f5ca5af8e7eb60350d176b3fdacc2ebcd5b43d5b2fb72b7f635d5f78816769ca32305c6b629d999b8f17d48f4169911bf5b07eae959ffab3783b949a80d20a9a6034b05dea0ced114bd88027c36e9f2536303664833eed329b8f7ad08b1950e41951c3a2b9cc07ddd1b0d763713404ee443dc69c08614ee4c0a06b0fe81080d9e47042fe9642c35ca8422ad174885c078bd08bc260ebcfa6a1674a486895e97963ac2ee0a5478d0546b6ed20f09dba0e75544854ab5bbef0432f98cec2c595d74c790929e5fbcd3dce39a1990244d3121ba8a15cc9189b46fce9ca9b23d84cedc731a8c8f8d723a9fb5e3b79d1f6677a8843ac2d6bf3259b3058f85f8d9d23e28a6695813c3407520297658c9e0fbf11875bdae420975b2fb821cd5300099490f38fe7896013f8e85f3b6e3e4271f7514569bce3f270556bf0129a2512a6d6237be4f4073631e052bf89b923fbd8b23a479d117690eba7829acdc73a1bb14a3d833088f3f74dab0eff008d23631b77040000",
    ],
    [
      "ETag",
      "6+XDpJu6yLMQ665YKoN5Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640212585169"
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
      "8d93614fdb301086ff8bf9b854345d9bb591f8d06e65cb145a685309694291b12f99996367b653a8aafe77ce01ca0493c297e4eefc9c72f7facd9efc118a9398dc8af26f0366775282bbf2c10a6c239dc557ad9505121070b444926fc6d1e9e924bd3e2f270f9f1e7e0eae0b939467674858f61b2a4ae23d2904486e49fc6b4f14ad00db98964da5f2360b88dbd5beb8ce56c9e23be695e63e5f6cd2743a4be7e4101c1b3975346ff90fb4dd1c0272a76f57508001c5c0cf521b7d07cc257e4d4bab5a42cfeac630b0a485db83d2e8a6a646eb1e567aa35e180dfb8370301a8fc268829cd48c3aa115a29b358e479c7654aef43d2e49c2cf489836c6858bf6b9c5bae0ed223e4c1659346ce7fb17a08ce946b9bc132c84b1ee49bc17f05984b7a4a41f04f1a684ec824a501c4c1725ea9c726ec0da4e52db9cd6f5119b2d97e97b5514375af06e702b3a00e9b647e03c5d4eff272dfaeb55ab6fd36cfe8eb00e5d7344b2e462becea617979ebb7936c26ce7c05e1a8da6b2e0fd14f687e3d197a8ff64b1afdadb0ebf133bd3404018c53fe58770242ea8b4707804ac8280f887030000",
    ],
    [
      "ETag",
      "dU86//9LXFg9x+xJ2XfrIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-6-1640212585169",
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
      "536d4fdb3010fe2b91f7659b68eba4ef952a564a3a22f56d4900c136b58e730966695c62a708a1fef75d12ca8b90e0932ddff3dcf3dcf9ee91fc136948062410f15d0ed9c3975b199023029ac5f82af9659aee6eb6cc9a06f9c9b5b59bc8e5593c1c2242142cc536db046a4ae619073538f7ea7126f32dcba4ac61a25aa766765ad432ad76af6d76fa485390445391fe43f28dd65b3568340ed2f558ca3801b615aacee5e6f9bdb1b31adb4cde02d7aaf156b18122aaf1a1e6712239d342a6c3730ff57305d90a364c24e8e08518063fde66ae0bb6a9c708de090e8c7399a7ba708529b84c2311e75999950c1e49e9f2d58578f6d41efbc6f723c31b4decd578e4f95fd74aa3c0da60caf07cd799fffc565cd7abd5cdfd666d4cdcc5cc5867c06516aab5717966bbb671a0fcc9296dc2d0383616eea9ed1a2757cfa191373e32d6222c6fc6d49939be61526a2c2613cff60d8a7643505aa4a5599f050914469fdae9bcffc382c034535005575dda61668ff68328e8f2a8d76c07118520e805dd366b0694f75bd00a0360c8d345f692c552995a4dde8326e7268d3a4d1686d007b3cd3aed16437c97f53a26586140db647f44ee33a1e154a8ad54a26a2ab9741ddf5ef9eef97c3cf2edb28c88e5893eadcc1545bcf6a9b1c815a526023fa86d5f448544b5e2979cb96fbba3b1ef5cd8d5604c2166fcc1bbc3d18858a200d12c631bd090cd64888d23cb85e7f8ce623e9a22a3fcede501a1c8e0f7e30bc17fd8969dd6e5497c67667bfe68b62c3d1c40172cc94bd4aeba108b5ab446ad9a69faa635309b03b355a7945e93fdfe2f1271bcabbce4d7b9ed5e91eac985083248f9e73f8be032f0d9921e5606a1b834a882d3a6058e11578506cfa01a27b129bc1cd87dabd9ed90129ce977b1b6d93df4acc85164840da4faa9a06a65b0ce4a2c57cf200ce214cc716330fa1f4695cca4b0040000",
    ],
    [
      "ETag",
      "ocWnnvhpa2LbuBZ2vFoPHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1640212585169"
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
      "df4fc23010c7ff97fa280b428428890f03a7a2e387633c19b394f518c5ad37db0e4208ffbb3735cad3743cf57e7c3fd7f6dadbb337a904ebb1854cde0bd0bbb304ec736904608ad41a5a725406588381e509293395f1c5483ccf062dd1793ce75ef3e9ba99dcdc90c2c42bc838ebedd952422a0cebbdec99e21910260509ec2e2fede138f4eebd8002198a32309efbbedbf73d7668fc003c8eb15036aa0d2ea53636fa747ec059180cc7f7d55cca4fc2e8c632ad8724a004e87a8ccc232e8406636a7268229ee7bf507f32f13d77fc47f395d028c509e446d62552bbf925eefc891b56eb05b7474f74eb865eb5de589e1d9d291c8ebc59e88ea6d55414adb6d97f5afd7a68b0352e025882061543f9fd738d6b88edb09c2c43bba7e0182c740ce5e391f83391682c72ae111d8a385da7d5bdbc68b7da9dab4eab7b4dba14636e252a92ce67743466d1f234c02dcd15bb60df7e7f67c14c35526d03e23b430507586e4b9dea595d4083c59c86f341da2ffff001b3322380f9030000",
    ],
    [
      "ETag",
      "mnmabMdQSC1d5J+aE/K9/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb642d4eac84d4ee10890a51c920826c9880e1abe55bf938bd7b9d1ee1bd17e05124da36e8ca427c832f30f28fd53c9a8750f59e703a1f9383a89cebcde505b570ad548f82674657f9715bac6b427576776de5e4a810b79305939c222ddce7996f0bfb264263d79bc48caf0d57f4a4bf26a7c39dc88bd44f47a8eea05d1718415f0eb9993aac63cb0ddf3e1ea8d0a4ba47ac9cc4e2b2bc9c7fceea880d82b09ee19a1e76de96a49a64944473a9a979e4b38703ca247598b45354aabcdf8f932cc7f9408fde738d2773705b97313ba91c6bbfc959444356276006c450658d6883eced5ea2d56a06fe13826eacc47b622d78231af0fb072b8466ee23010000",
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
      jobId: "grouparoo-job-7-1640212585169",
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
      "f7b540c21b24b422082b12843609ada6698a6c7393b90d31b31daaaae2bfefc6295dab4aeda7d8bee7dc73ee23cfe441143b32264c647f4b504fdfee252317040ccdf0b53cd26bfd98158ceafb87f9e27ad15e5f953793092244c5d2747fc8a1a165a938e8f1366a664a9607aaa46c60a2c6a0e1f5bb6edb6bf7863daf3f429a863c5d89e201c97f8c39e871ab75966e66526639d083d04d2ef7afefad63bb7550f21eb8d1adf78a2d14d1ad4f35bfe79253236431d946a85f6a5009eca9c8d1c17fe28e5dbecfdc1474dfcc107c141c28e7b22c4ce50a537059a4222b95cd4ac6cfc4ba7c732091bff267b1c3655eee8ba4a07bb87076d4d0c43c1dc059849bb5b30c169b703d8d979b20896657fe7ada9c6d56db75103977577ee83b86b21c2cd7993897f616e005f577a08d28ac7a5c3d57ca2ffd597e1c4a4540690d753019b87dea0ddd114bd980a7c34e8fa52e303664831eed30978fbad0dd31a0c8b3a296450b5950e8bbbd6ec74b5c9ef2a49bf234a18cb94997513680411b46ed949c2ec8a31206e6421fa4167587c85db88cfd240eb7c16c1afbb6849496b999d7c6aa02de7a345860e2ba1e023fa9eb54458544b5aae5cb20f6c3e92c5edefaf594579051fe14fdc539a734d78068aab08106d45aeeb0692498aefd3982edd4aecf414dc6bf9e49d5f7cac99bb6bfd2631c6265d9d82f89e27019fcb076ce885b9a971672ac0f4401976a879e4fbf11875b5ae720375b3ffc49eaa710525050f0afe789601bf8ea5f3b6f3e4271f751451bbce3f2705d697005f512095beb993dea789e4b2c58990fb176d73bb7acca5165843d14e6a5a07af3b1ce5aacd4af",
      "200ce2fc03dbaad33fab841e2577040000",
    ],
    [
      "ETag",
      "uvaPswgnbasjkDFPF2MHuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1640212585169"
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
      "0002ff8d936f6fda3010c6bf8bf73668a403da45ea0b68698b16fe0cd269d25445c6bea4668eedd90e1421befbce69c7a6b552fa26b93bff4eb97bfce4407e0ac54942d6a2fc5583dd7f28c17f0dc1125c2dbdc397d1ca018908785a22b95b3fa5df3fdede7d59148be966b38bcdb7d16379798984638f5051921c4821407247921f07a26805d8c6b4ac2b95375944fcde84e22a5b4e66b798579a877c769fa6c3513a26c7e8d4c8a9a779c3bfa3ede118918d5e2fa1000b8a4198c558bd01e627614d472b23a1e3746d1938d2c0cd4169756da8d5ba8395ce79271ef4ba67f159ffa21f0f3e232735a35e6885e8fd0ac7235e7b2a977a874b92f81312b68971e1a2796eb12e78b3480827b36cd06be6fb17a08ce95af9bc152c8475fe59bc3fe08b08ff9392be13c49b12b20d2a4171b06d943039e5dc8273ada4763935e6848de6f3f4b52a8a5b2d783bb8152d80f4db137093ce876f498bfefaabd5f5301bbf229c47d79c906c321dafb2e17411b88717238cf61edcc26a349583e0a7b8dbbbe89f0fbacf16bbd2c176f89dc4db1a22c228fe2977c293a4a0d2c1f13775ce7e5b87030000",
    ],
    [
      "ETag",
      "wbxLX/GHKPfPMjjw1pVBhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1640212585169",
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
      "40",
      "10fc2b88beb48d6dc0d8062c45ade3e08ad6b113c0adf2641fc7422e01ceb93b624551fe7b176ca7492b356fa7dd999dd98f7bd2ef5895ea633d61f97d0de2f1c32d4ff48e0e8ae4183d290b17dcfbab1ff9f7cbca38dbc9383ff176a7a788600d4b92725b4057f25a5090e355d4cb05afb74470dec5425db76b8d0666dfea0fdda135f29026a1c8e6acba43f28d525b39368ca3742fe73c2f806c99ec515ebec48d87beb115fc16a892c65b450345a4f15fcd2f05a744315e9dae22d4af258835948415e8e00f314dbebeaddc63a4ece5087e601408a5bcae54e30a4b505e652caf455b551f3fe9adcb570f3df2e7fe34d63e77b46832f3d7d349147fdc4885021b8d482d8ac360f1ed53f3dcacd737bb72a3cdc2e585b61140b948e5465b86e77ea89d5d6b47d6249a76b40d4bdb97360f2e82581b68cbd92cf263cd44532948c5aad6524c92021a3b87a105ff6eaa21104524ec936bc71c11cb35bd244b1c9ab9f630c94c4812377186c44e4cea0d6090264090a79aea2d8b54bcb2c86030a223cb76c0ce483aea5367689bd4227d2fa58e6399b693397d4af5e78ebe134cc139935b2ed97e74faaf3088fd751cae16d349ecb76d64a42ed4f9de5cd3c46b9f0a9b5c9ba685c0fff4f6dc641947b56617c122f6c3c9340e7efafbf5cf2127f431bac703c8482101d144901214880b9ee2e0f4cb6514c4c172319937b5f0a6e2c76d13bf5af9e1f521144206022afafea011dc26defb19c73b45285e2aaae0ea15c3ad52d9685001fbedb2b2f172647bb6e7d97a0b16eaefdcc0b25dccbddc6753114aa8d4a1a1fd9deacf07b15abe8030894b59e09962f6372b60bd5a25040000",
    ],
    [
      "ETag",
      "+ml8e8qQKgJPn/BwsTg+9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1640212585169"
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
      "55",
      "5d",
      "4f",
      "db3014fd2b53f6486bd989932695909642806efd80521ea60955267143208d3bdb297488ffbe9b00692ab28ef290c6f7fa1cf59ee37b9d27e33ec922a36bdc24f1ef9ccbf5d798eb8b6231e12a4fb582d752648a1b2d836b1603f2d13df8919f0dfedc0c1923c7bd9f17177e34f60f0f01a1c25bbe6046f7c998273c8d94d1fdf564646cc181964400d0eb65b1ee8fa6c1693081c442444562743518f8bd41603cb72a020b4391677ab637719e48a5676550112fa793fee874372f659fa281e224dd8f12f32ce2723f4eb29cb128925ca93d7942cdd872b921f5c6e341e08ffe637e164991449f60ae927d19a95e6d182783b13fdd8d8f98ae1dd1b13f0d76e395668b5a4dd3fe30b89cfac3f3ddacd9ecf661f111abaf9f5bc69db899f039973c0b79d1fe4b29ee78a8fbc56429f8f794b795c865c88bc30370b9114b912f9914a20d99b6db260ec526316dd7268e07b854844c272203e8d525946668a1593a110f30570605802c973062f3f2770569524ad85e0532e155f09dcb95485415f3bb9704fec61fcb42512816d5ee90a51b2ab191493bc87251c7ac925ae61bc49ca58a376f99b687c886666213b7b1d9c6b58291ed62dbf6884703af01f885985d6275093dc0b874bdaedb6cd07dc4c224ad490f8abe790b420e1169147d02139dd62bb710a10ea20499b5727768dddef228b29cf77acc6de10e05e9d46e526e56ca918d71937aab41fda9e49aa7b550e4a108efab441cbf66cc0f99400872e1040946c4a27b9fbee3b8c87aafccdaf6a063110f3c703a4d2e5835179c4e930bb4c1057fc134db7484d05ccd858caa0c0bdf52d6476c209e853c98020c8fd32cf5df010503f17b6174db0497b8566982dbe402dd72c1addae1faf576e8ad41ceb91470d3285e5c32f8e5c239128534e8ff6e5152cb08197caacf12fd123fff05fc6cfabe07080000",
    ],
    [
      "ETag",
      "x8+KuHLzbMaa1DBYQQAdOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dd0516e82300000d0bbf45b4d2750617f400425a0e88a803fa4406128c55a1528cbee3eb323bcf7034851d0c7237bdeaeb4039f4092a5b128163934931e4e38647c2a432fd0482bb53dbb5f23bb3a33f34b0f4c3e3ec311f509ca5524a3bbb359da75d56bad792ccf0e436b51fbed26abd9e950856babb4c4b19da0a260f47da2b6d8f515d20b5af6b5ea871f1986ab57e92d6bac663c95d7e32dbd0fdafe7539187999e62ad7c333c77410961e6f5de302094c820e32657e897b12b9eec0a53fd8f11ac78d6978d1b4aa764994cc930d511bd478eef6353a2cde0facc39dd3fa3200334047de08fac89ab75bd10c6306fe13b2a7e4f43d615122a800bf7f88837b1023010000",
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
      "Wed, 22 Dec 2021 22:36:34 GMT",
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
      jobId: "grouparoo-job-9-1640212585169",
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
      "57",
      "22ef6b81f09b20a195d1743041d84268374d53e43897cc6d1283ed50a18aff7d17a774ad2ab59f62fbdebb77f7eef248ee791193318978ba2f411e3fdd89885c10d034c55727ee749c9f37fefcdbbcdc0ef7e2cbe168e70f93092278c55234df65d050a2940cd478bb69a652943b2a856860a286d3680f7a76a7dde98ffaed8183340559b2e4c53d92ff6abd53e356eb2cdd4c854833a03bae9a4ce4cfefad43a7b593e20e9856add78a2d1451ad77353f678251cd4531d96e50bf542043c829cfb082ffc438ba7c9db9c969de4c117ce00c2863a22c745515a660a248785a4a93958c1f89a9f2c5816cdca53b0b2c26b2322fc282e67061c554d3501f77605dfbeb95b5f0aed7fe6a1a2cd65eb899cdddd5b4395b2fb72b6f63ddce5ddfb5348d32305c6b625d9a9b8717d48f41695e18f5a07aae949ffc59bc1d4a4540690575301cda03da1ed94e944443968cbafd28b1218a46d1b04fbb91cd9c1ef4e20828f28ca861d1027b463b59cc58d8ed4012f67a7d08a36112871103870244fd840ec8e9823c48aee18aab9d50bc7688dcfa8bc00d037febcda6816b5a486899e9abbab0aa8197356a6c30b4ed3602dfe9eb5445b940b5caf28517b8fe74162c6edc7aca4b48293b6ef638e784660a104d251aa841ae448ca6116fba72af106ca6f6fd1c5464fcfb9154be5795bcb0fd991ee010ab92b5f9924de02fbcafa69c33e28666a5811cea0391c0848cb1e6d31fc4e196d639c88fadebff22f5930f094828d8c7f344b0097cf4af9d371fa1b8fba8a234de717998aa3498847a89b8e9f5cc767ac3aef9533595fa4d0c739f2dab7254192187423f35546f3ef6598b95ea1984419cbf67ac3afd03b57c1a9a77040000",
    ],
    [
      "ETag",
      "9d229XVRHJHuU7qoBvy0mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1640212585169"
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
      "db3010c6bf8b79b9546a58db9548bc48a16c9dd23fb441429a5064ec4b70716ccf763a5555bffbce8175684c0a6f92bbcbefe4bb278f0fe459284e12f228aa9f0dd8fd5905fe36046b708df40e5f462b072422e06985e47cb7ff345d7e5f3d5fd906c6f7db743530f4f6f21209c79ea0a62439905280e48e243f0e44d11ab08d69d9d4aa68b388f8bd09c54dbe9e2dbe625e6b1ef2c55d96a5936c4a8ed1a991534f8b96ff40dbc331225bfdb886122c2806611663f516989f85351dad8d849ed38d65e0480bb71f2aab1b43add63dacf42e7af168d03f8fcf87e3613cba404e6a46bdd00ad1bb0d8e47bcf654aef52f5c92c49f91b06d8c0b97ed738775c1db4542385be4a3413bdf5b8032a61be58b4eb014d6f917f1fe80af22fc4b4afa4110ff94905d50058a83eda2842928e7169ceb24b52ba831276cb25c66ef5551dc6ac1bbc19de800a4df9d809b6c99fe4f5af4d75fadaed37cfa8e701e5d7342f2d97cbac9d3f92a700faf4698ec3db895d5682a07c14f717f301e7e19f55f2c76a583edf09cc4e3a58908a37853be094f92924a07c7dfefcb72c887030000",
    ],
    [
      "ETag",
      "Mvy+EOJPkCrue8XjAP4paQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-04T12:13:14.567Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1640212585169",
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
      "536d4fdb3010fe2b91f7659b68eba44dd35642ac2be916a92f90b820d8a6d6492ec590c625764008f5bfef92505e84049f6cf99ee79ee7ce778fe4466431199050ac6f0bc81fbe5ccb901c10d07c8dafa7a78b311ddd5e0ad94f585e98417cb1e5f787878810254bf1cd36858692451e811a2c82e63a97c596e752363051c3a40db3dba19669d93ddbecf691a7204d2622bb41f695d65b3568b5f6dacdb594eb14f856a8662437cfefad3babb5cde535445ab5de4ab65045b53e163d4a65c4b590d9e122400385827c091b2e52b4f0c28cc31f6f533705df34d708be1311f0289245a64b5b9822925922d6455e6525834752d97c7521813b7147ccf87e6004c3b1bb1c0d03f675a5340aac0cae8c80f9deecd7b7f2ba5a2eafee372b63eccfa7c62a8748e6b15a19e7bf5ddf35f694bf05a56d38348e8cb97fecfac6cf8be7d030181d182b11573763e24d3d66748cf9781cb8cca0683606a5455659653c4ca1b4f9d44deffd1f9604aeb9823ab87468979b3dda0f93d089925edb0e130a61d80b1d9bb7431af53bd08943e0c8d365f68ac53399c5dd042ce0d4747817e22431793b0a632be1fd7692f47bb6d3b3c171da0ed91d90fb5c6838166a2b95a85b4ace7d8fb94be62f66a32173ab32125ea4fab8365716f1daa7c62297949a08fca0b65d191512d5ca3ff266ccf58723e69db9f5584c60cda387e0160723e1a90244f39c6f40433e9531368e9ccc038f79f3d970828ceaaf4ff60845067f1e5f08ec615b755a572761ded40dd8707a5279d883ce785a54a8bbfa422c6ad106b51ab4c34c6b60b60766a769779d4bb2dbfd43224e779d979c2e5cff82d44f3e249043167dfeb308ae029f2ee97e63108b3b8332386c5ae01c45aa148972a8e7496c4a337b76dfb69d2ea9c0b97e17eb75e9be69658e32236c20d34f15d51b8385d662857a066110c760860b83d1ff8ecc954fb1040000",
    ],
    [
      "ETag",
      "QQUF0CqZio9fTru1SdYpaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1640212585169"
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
      "55",
      "5d",
      "53",
      "e2",
      "30",
      "14",
      "fd",
      "2b",
      "3bdd47a19bf4bbcc38b345aba2886ec1879d1d87896d28c1b6e92601d771fcef9b546d41bb2cf840b9f7e61c7acf496e78d2ee4991683ded8ea4bf97983d7e4db1f8a18208f36526b8fc2a69c1b1d6d1b040a9442e0e42de8feecdf2ee3cc081f32de2abf4e7c3e1a144f0788e73a4f59eb419c159c2b5deaf27ad40399634924880782c553c184dc2d33092859c26aa30ba190e83fe30d49e3b3501c5315d1662ba3771461817d32aa989e34934189d6ee765e85334a99864fb51525c2498edc721e5142509c39cefc9a37c8acab221f5afae866130fa8ff945c228493ec15c917d199958358c93e15530d98e4f9058dba2e360126ec77381f2b59e2683cb703c092eafb7b3a6d3f943be8bd5b7cf1d6d41ef223cc30c173156c7bf64748163315093c5e5db33dce574c962ac364f82ab8594d1658918a55d59e942d0858e050c68d89e0d1d5f02331a23416821b13763d99b26a84059441fe460699604b02a943336ab9eabaaac34a808d651902381eaec880acc6794257505c56f25f33bfe53b5abc734afd74fe411cf70f3c3bea9fbba6101f971eaaa604bbc436279be0eeacc0006e802a30bd6dad66d0f78d0337dcb765c2ff45bc05fa0d183660f5aba8200700040b50feb46d80daf8e8684353e9cd379c18574f7ad902d5e2bd62e2ed8a60e1dd5acee372dce50c6ff217c73c93314fda3347bd3071f58ee8b0f7e9b11f6a6117eab114e8b11c7b82075328e51461a5f125ee5f64e47c1f47468421d5a9eee5abb08df58325c7992bc8fba9c772ef810fa569b014e6d409b72b745f919ced246eb458609afb3f9bd4a9d5d847bb63cfc9e2ed5db5ebbb62d23005c7d6da36b31ee866a",
      "085cd76e57edbe577dfb7a35f41fe51c5f332aef198ed515035eae9b23aaf4c85bb3a71ae96831927fd46744bce4cf7f01bd6c411b05080000",
    ],
    [
      "ETag",
      "j+EsBRk3pbJAeA6/RsvgYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "edd34b7282300000d0bb64ad0ef211e84e5a0a158844115237193e414090f029089ddebd4eaf51df1dde3708e398761de9eb2bbd81173085bcba8a5711b7c503377b7b8b0899e3e78a42473168dcc27650c2cda9396357c215b9ab7ad8e7493b58c2da60018bcac618336d730d10c3b2284a4b6f396a7330c9d0563dc3301b18bacae1722095609e3ead7670d6c7e23da975d415f9dd3ac157145192f17c58a2f36d23229bf726ae4c6558c9e7aedf1f6911d825f63f2a9ce20dd40983dbe442a5566665fcb5b30b747ad3cd3485aa8428f219ab19072306859da5cb472d09a2324b3c455f3d3dfd3b6001e89de52ded48fed82e48aaba007ff5493f31faf8afd1b0a52df8f905d86d75bd19040000",
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
      "Wed, 22 Dec 2021 22:36:36 GMT",
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
      jobId: "grouparoo-job-11-1640212585169",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f795b6499b3ea56a742540b5361d690a43d31439ce4de692c4c5769810ea7fdf8d431908093ec5f63de79e731f792277bc4cc884c43cbbaf403e7ed989989c10d034c3d78bef7359fd2cd75efa6db7bb5a5c1542ae6e67d3292278cd52b4d8e7d052a2920cd464bb696752547b2a856861a296e3b49c816b779d6e7fd4770663e429c8d3252fef90fd47ebbd9a743a47ed7626449603dd73d566a27879ef3c743b7b2976c0b4eabc95eca08aea7c2cfa35178c6a2ecae97683062a05328282f21c2dfc6726f1e9dbd46d4e8b7686e007ce803226aa52d7b630051365cab34a9aac64f2448ccd5707b2f196de3cb498c8aba28c4a5ac08995504d23fdb807eb3c58afac857fbe0e56b370b1f6a3cdfcd25bcddaf3f572bbf237d6cda5177896a6710e866b4dad5373f3f182fa0928cd4ba31ed6cfb5f2738316efc75213505a41138c86f6803a237b1ca7f190a5a35e3f4e6d88e3513cecd35e6cb3b10b6e1203459e11352c5a8ab26b0f7bb40bc3c84d981db92975a331f4fa91e302a4e0c6ddf160400e27e4afe41aceb8da0bc59b0e919b60117a51186cfdf92cf44c0929ad727dd618ab0b78ed516381916d3b08fca0ae431de502d5ea962ffcd00b66f37071ed35535e4246d9e3e61ee79cd25c01a2a9c4066a902b9160d3883f5b7967083653fb710c2a32f9f544eabed74e5eb5fd851ee2106bcbda7cc9260c16fe85b173445cd3bc329087e64024302113f47cf88d385cd32607b9da7ac12d699e02eca284927d3e4f049bc0a77fdb71f5118bcb8f324ae31db787a95a844968b6889b628fecf1a06ff788014bfd2e367087c79ed539ea8c5040a99f2b6a561f0b6dc42af502c2202e806f7a75f807d0b129417a040000",
    ],
    [
      "ETag",
      "GKCruXnOEfBjjQIQmorMYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1640212585169"
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
      "516fda3010c7bf8bfb1a24d202eb22f5013ad621a5a440aa3e5455e4da9760e6f832db8131c477df256dd9b44e4a5f92bbf3ef94bbbfff39b0efca4816b16755fca8c1eecf0af08b265882abb577f4aad038600103cf0b227fd984cfaf7fee370fe17a21e47ab71049b2bbba22c28935949c4507962bd0d2b1e8f1c00c2f81da04eaba34599b05ccefaba6b84a97b3f90de525ca269fdfc7f178124fd93138354aee79d6f21f687b3a066c83cf4bc8c18211d0cc5259dc80f0b3664dc7cb4a43cf616d0538d6c2ed4161b1aeb845ec51a51786bd7034e89f87e7c3cb6138fa4ca046c1bd4243ecfd8ae6631e3dd74bdcd1962cbc20c2b6316d9cb7cf2dd5956c3769c2d93c1d0dda01ff06b810581b9f7582b9b2cebfa8f706beaaf02fa9f90741ba2aa5bba0028c04db45a92ae3525a70ae934497f1aa3a61932489dfab62a44525bbc1adea00b4df9e80af7132fe9fb464b03f5a7d19a7d37784f3649b1392ce6ea7ab747c7bd7704faf4698ec3db83b8be42a078da1c2fee072f869d47ff1d83536bea3ef44ded61030c1e957f9a63c8b72ae1d1c7f0384b05f8d88030000",
    ],
    [
      "ETag",
      "zrOaNCxyjW1hQcdhwQcOOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:37 GMT",
      "Server",
      "ESF",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-12-1640212585169",
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
      "85536b4fdb3014fd2b91f7659b68eb3cfa942a564aba65ea83252e08b6a9751c2718d2b8c44e1143fcf7dd24948790e0932ddf73ee39f7fade7b742db2080d5028929b82e7779fae64880e10d73481d79f3bfffae8722bd28b91740961e6fcdfc92e190e01214a96a29b6dca1b4a1639e36ab00c9a492e8b2dcda56c40a2866935cc8e832dd36af7da66a70f3cc5d3782ab26b605f6abd5583566bafdd4ca44c524eb7423599dc3cbdb776566b9bcb2bceb46abd966c818a6abd2f7a984a46b590d97019808142f17cc53754a460e1991985df5ea76e0aba692600de09c62963b2c874690b523099c52229f22a2b1adca3cae68b0b0adca93b26c6d70323184ddcd5781490cf6ba541606d506504c4f7e6dfbf94d7f56a7579bb591b137f3133d63967328fd4da38fbe1faaeb1a7fc2930b6f9d0383416feb1eb1b47e74fa151303e30d622aa6ec6d49b79c4708cc56412b8c4c06036e24a8bacb24a6898f2d2e66337bdb77f5812a8a68ad7c1551777a8d9c3fd300ebb2ceed9ed30c63c0c7b61b74ded10b3bec39d28e41478bacc5eb16826b388f781d6ed9898db118e6dcaba5d6c616ab759ecf41cc7b1dab66d3b317a3840b7b9d0fc58a8ad54a26e293af33de2ae88bf9c8f47c4adca886991eae3da5c59c44b9f1a8a5c616c02f09dda1ecaa890a056fe913727ae3f1a13efd4adc762ca13caee821b188c98a68a039ae674c335cf673282c6a19345e0116f311f4d8151fdf5c91ea1d0e0f7fd3381dc6dab4eebea44c49bb90119cd4e2a0f7bd0294d8b0ab5ab2fc8820e35b0d5c05d625a03d31e984e13637c811e1efe0211a6bbce8b7e2d5dff1cd54f3e8f79ce33f6f1cf02b80a7cb8a4fb8d012cec0cc8c0b0690173c45429c2725ecf93d89466f6ec7ed7e9d8a802e7fa4dac83ad7dd3ca1c6546bee1997eaca8de1828b4162bd4130882300673581888fe07d83a932ab1040000",
    ],
    [
      "ETag",
      "JvRkBhpilZAoETTc1NzPvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1640212585169"
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
      "6f",
      "6f",
      "da",
      "30",
      "10",
      "c6",
      "bf",
      "ca94bd2c4476fe9120551ab4698b466907f4d55421931cc1ad8999edb46355bffb9c7432b06619f40df839df23ee77b68f17eb91e6a9d5b5e634fb5180d87cce407d2b1763900553527fad792ec16a59a048a6337f7821db0cd3b34d314119999efc221d9964a7a73a43264b5811abfb622d28b0545addef2f564e56a06d34d5096ab32ed783d134be8cc73ab0e2691918dd0d87bdfe30b65e5bc640928417b99a1d6d5c5021d5ac12c638998e07a3cb661f231fb26962ca8eb36490a7208ef3d0f58ca4a900298ff4713923ebf5d6d4bfb919c6bdd17f9a9fa782d3f403ce277aac83a9a7ade36278d39b36e7a744ed1cd1796f1a37e74b45563b354d07d7f164dabbbe6d76cd66cbe7d521adbe7f6d590f7c3e860508c81328afff5af00748d4a07c5952ff3a83b6e48548a03c3c9d5c6d6482176b22386feb481b3b6d1c78c8c18e1ffa38887422e3095194e73af76ea26bb31457848df9b37e5896a71344b5d46f6c517d3ee970a76228578e595d01cb88515f195069d4f2b194c117f8599569277c65f62ef4d5666064e8db8e17daa18dfdd0049528e000e1a18e8dfc6d6dc8416de4b4d1b65c6cfb21469d8e1f79715493f8093b5dec76b1778250d5f45deab086fa1284a2db0ace8a3955cac82ca974e71070ecb8b6e3fb367691ee80092f0893f00fb5071f7ad8f66ae0c37d781cb8513d7cd8081fd5c00f0bc10072a3fbfaaa006346b3f95b203c84df71b13ef3c8d62df0dc7ac4a65e04ba7daef79e2adac7777ce4d6e3478df81819c7b6b8732ed47263e4402abe6d464a4b191d82ee95771edb8167ebd339e4acf7b79c08d9befb8e68a7e40add75834e2d3a467fa3dfff9902fd",
      "8d02792bb81e2912ca6982de26cb192f91f480ec9665b5ac84e8ffe42baadef4eb6ff630ac4ff0070000",
    ],
    [
      "ETag",
      "q48lyLdCyuS0gaT+za7scg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:37 GMT",
      "Server",
      "ESF",
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
      "4b",
      "72",
      "82",
      "300000d0bb642d4e4018487709588b1503caaf6c183e81a18a42827cecf4ee757a84f77e4056144c8874b85fd80dbc812553d0ba58e710c7237cfab49f3c2c7259c18beaddd09457a9dc0fb7eb393496885817444aa965175aab49fcaec58b67a764cba0183de940b7d6d585e8de1a96eb5efdd89ccd530e5b551bb87f1f115c1ecd34d4b3a3f7ae9853711427bfa3b17ca65515d02fa1eb598583da0c8f36fcc40492435d1a55292994388111cbc13839d1b037e744dad47e59d3efdee2d15edff1642c5c64604b29f35eb258c87168935d3b22fb43e92a87d0fc21c00ab0b96b381369f3726f348456e03f211d968ebd2608cb38e3e0f70fbae9746123010000",
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
      "Wed, 22 Dec 2021 22:36:37 GMT",
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
      jobId: "grouparoo-job-13-1640212585169",
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
      "fd2bc87b6d1208a42191a2354ae99a29211b9056d33421632ecc2dc1a96d5a5555fefb2ea6e95a556a9fb07dcfb9e7dc0f9ec82daf733225192fef1a908f5f6e44464e08685ae2ebca4dca64f5dd8f2e5d67525edf565ec982f96c8608deb214dded2be829d148066aba8dfba514cd9e4a217a98a8e7b83de7d4b387ce70e48f9cd309f21454c58ad7b7c8feabf55e4d0783a376bf14a2ac80eeb9ea33b17b791fdc0f077b296e806935782b39401535f858f46b2518d55cd4b36d8c061a0532851de5155af8cfccb3b3b7a9fb9ceefa2582ef3903ca98686adddac2144cd4052f1b69b292e91331365f1d481cac824562315135bb3aade90e4eac9c6a9aeac73d5817d1666d2dc38b4db49e27cb4d98c68bcb603def2f36abed3a8cadebcb200a2c4db30a0cd79a5967e616e205f573509ad7463d699f5be5e7062ddf8fa525a0b4822e988eed53eaf8f6242bb2312b7c7794153664999f8d47d4cd6c36f1c0cb33a0c833a286456b51031d3a23779ca77438b2536f9841ea8f3d3b75722ff73cdf05cff1c8e1843c48aee19cabbd50bceb10b98e96499026d1365ccc93c09450d0a6d2e79db1b680d71e351698dab683c00fea3ab4512e50ad6df9324c8268be4896574137e51594943dc67738e782560a104d253650835c8b1c9b46c2f93a3847b099da8f635091e9ef27d2f6bd75f2aaed2ff40487d85ad6e64be2245a86df8c9d23e28a568d81dc770722810999a3e7c31fc4e19a7639c8cf6d10fd22dd53040548a8d9e7f344b0097cfab71d571fb1b8fc28a334de717b986a4598846e8bb829f6c89ef88eeb110396fa5d6c38f68f3d6b73b4196107b57eaea85b7d2cb4136bd40b0883b800a1e9d5e11f81f1a4dd7a040000",
    ],
    [
      "ETag",
      "L3TgTLJ8RH319gWkl4gcEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1640212585169"
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
      "93514fdb3010c7bf8bf7b8546a68da75917868b7b2450a2db4a9789850e4da97ccccb183ed045555bf3be70005c1a4f092dc9d7fa7dcfdfdcf81fc138a9398ec4479df80d97f29c15dfb600db691cee2abd6ca020908385a22b9df65db24bac9dc7494b6ed5719dd5f8ce0e1fc1c09cbfe4245497c208500c92d89ff1c88a215601bd3b2a954de650171fbda1737d93a59fec2bcd2dce7cb6d9acee6e9821c835323a78ee61dff89b6db6340eef46e0d0518500cfc2cb5d177c05ce2d7b4b4aa250cac6e0c034b3ab83b288d6e6a6ab41e6065108e06e1241a9e8567e3e9389c7c47506a469dd00ad9ed06e7234e3b2ad7fa01b724e10809d3c5b871d13d5bac0bde6de2c364994da26ec0b700654c37cae5bd60218c754feabd80cf2abc2725fd24885725641f5482e260fa2851e7947303d6f692dae6b4ae4fd87cb54a3faaa2b8d182f783ade801a46b4fc045ba9afd4f5a34d8ab563f67d9e203611ddae68464c9e56293cd2eaf3c77fb6c84f9de81bd321a5d65c11b2a1c46d3f1b7c9f0c9633fb4f71d7e2776a68180308abfca6fe1485c5069e1f808df21863088030000",
    ],
    [
      "ETag",
      "ybTUI4WTt83Lvv+l4qF3ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:38 GMT",
      "Server",
      "ESF",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE  `id` > ? AND  `id` < ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: ["INT64", "INT64"],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1640212585169",
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
      "0000000002ffa553db6e9b4010fd95d5f6a5ad7c01638cb114a58e8d5b2ac74e80248adaca5e96856c02acc32e719328ffde01e25c5a2979e813ab9973e69c1966eef115cf233cc2214fae4b56dc7eb814216e61a64802d1dfbdbbf9c038fe7a751007da5da219dff5ed70bbb707085eb124c936296b4b511694c9d189df490a516e4821441b0ab5f57e5b1ff4b59ede3387a63eb08127591acf797e05ec0ba53672d4edeeb43b891049cac886cb0e15d953bc7bd3eb6e0a71c9a892ddd7925d5091ddb745f7534189e222df3bf1c1402959b16219e12958786646e197d7a53b9c649d04c0379c3242a9287355d9821254e4314fcaa2ae8a47f7b8b6f9e2817d67ee4c02f4b985fcf1cc594dc67ef0712d1508ac1191c80f3c77f1f553f55caf5617db6c8d66def210ad0b464511c9353afbe6780e426b1eadd1cf52d30c86f6d178317d19a2105a7a53c74307e768577dec4f5a0d065e68ee1eba01d2350d2d6733df099006f6232615cf6bf301095356197f9caffbef5fad084411c99ae4cad206441f6a761887168d878619c61a0bc3616899c408356af7593f0a19019eaaaad72c928b5c67562fd243424cddb2ac78c834d3b60d7b101a614463d3307416c6562fc60f2dbc2db862532e3742f266c8f8cc7303671578278bc93870ea366252a66ada98ab9a78e95341932b4dd301f8466f0f55960b50abfe9abb081c6f3c09dc53a75994394b08bdf5af615562924a066852908c29561c8a0806878f96be1bb8cbc5780e8cfaef1fed10128f7edc3f1382db4d3d69557f2bad41bfd6df014e495ad6889be68121fdd0faaf0a1654f80508388b868c8f4f1cef1c37218fc5ac60397d7f01005c27debdeedda901168e0d64602b158775a3b212a1056bd68e6795991ddb1eda661fd7e042fd9db3b5a1b99b6d55a3aac83296abc78e9a53ab4655a74af90482246ccb022e0db27f00a70d39acea040000",
    ],
    [
      "ETag",
      "x2zL63QGkBfT0zg03J1w8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1640212585169"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff9d545d739a4014fd2b9ded638461111098c94cb521d68cd1a8e4a9936136b0e05a60e9ee62e238fef72ec4806dadd5bcc0fd3867b9f7ecbd6cc10f9247c005cf24f95962b6f99c6031ab8c39e6652ab87c1534e718740016289148479fdd19717885ecb5e30f8bd7d9029224b9be96081e2e718680bb0531c169c481fb7d0b72946149239104884d51d9a389ef0dbdb90c6434aa0293c7f1b83f187b60d76908280c69998be062624c181741ed34c4853f1f4d86a77929fa104d764cd2cb2809ce23cc2ee390224051c430e717f2280f5051b4a4c1743af6fa93ff889f478c92e803cc35b994918a75cbb81d4ffbfe697c84c4c115ddf47def349e0b941dd4e48feebd85dfbf7f38cd0a82e54b768ed44fbb0e58d1e7398e31c37988abf12f185de1508caacde2f2eb2956382d5988abcb93e03a91305a168851aac888020d055a86a643ddb44d68391298d210094273897d5cc8da80a002a573fa22170be812c06a53ee585c3fd7326cd63dac6bc0bb35260c35ce1d5de65cc843df03e96a1f31bee0d7ba5635a45993be95f39de2c635bb2ab4a06adaaae334c118a5bc850856e27fa46cbda2b7256abaa668baa2b55557476b8e66f41cc3b47ab6e33947d09fa0eec2ae0b0db5c668579a56dfc3a110d611216e704e1a6711a294b4ba44bcf6cd7344805d5b855da842c3567bc6398dff96d27b5dd5b1ffeecbfa43050742c7382680d508b0effc693f1b838dc0fc815139681c5733a6bdcddb575ab524d7c6ad0ae98010c93ff53722defcdd2f3f8bc84b06060000",
    ],
    [
      "ETag",
      "92QJ4fc+a8v9TGpxQS1igg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:39 GMT",
      "Server",
      "ESF",
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
