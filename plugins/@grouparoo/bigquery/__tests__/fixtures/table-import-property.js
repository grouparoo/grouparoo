const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1592525998233";

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
      "0000000002ff1dcf4b7282300000d0bb642d0e7f4877056d05234dc14270c33098f0b1404cc0623bbd7b9dbe1bbc1f50561595b298c60b1dc013b8973a5c57ebfde87aea33add062ddae76a7892c8a91aef2a88b4d66f6d48aa1536564e98385f83c6559823b93a3566d33c2df8629d185367e04f87cf487ed7683a2e9dd382d547c71a94997a52f7b454624af89ddcce17c6a023c4016ee12e96611f6ae4e8f0d167ece6686eb8b6d9c99867d0329f9fc4a540ce92d5d9a9d36b6767950bebb6433e5735c60e5d81f6a943b69a10bbf0cc00ad085b782caa27dcc0c0bc215f86f16d39dd3c7d5a3a5a002fcfe01ce525a7d05010000",
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
      "Fri, 19 Jun 2020 00:20:01 GMT",
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
      jobId: "grouparoo-job-1-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545b6f9b30147ecfaf40ecb549c89d548ad62ca51b52423a42526dd3846c63985bc0d4369da22aff7db6c9852c55b73738e77c97738eedd78661984f248fcc6bc38424792e31db7e78a4d0bc52192c40a232bf36c8b5dce7efd972bbc9b3ee94dd7f0a583299545544a339c88a1437392d19c2fc7abd6a258c96056094362561b3d3ec0cc6dd4177301edbdd5eaf82729cc673923f6911210a7edd6e1f6cb4124a93148382f016a2d931de7ee9b60b461f3112bc7daeda9642bcfdaeeec794222008cd27eb55e5a1e49885380324552e4ee008de9cb3b708c85a89ac7e2108038468990be5aca241348f4952324d2e995e655086b5e5e36f2d60ae9cb9330b0c44d332cbc31c64f8ca888000a1d816d8b8f3970bc3f5ee96fe621ab84b2f5ccdbe388b696bb69caf17deca78f8e2f88e21004cb1c61a13e346ff79f2473bd26a11e682e4da53a0b2352732bb1fa3fbc6028f148a44bae2785f168eac21e8d8d618c6708462bb3780b18521b4e168007ad042e33eee4710833a837656e1412e0725d7318aad6e38845137ec77ac28847dd40b51048616c4f630ee0ccc3d7a77ece5372302df125e504ef643361f7c3770c2c05f7bb369e0d4fb8e41998adbcaf979d767ed0839a0bad3f74672e1a860844a537a9dae1738fe7416b89b9a0d79b6e6380168bb7a56a72b0629c7273460725702b3058dd4624c6fba706e4f607d52ee0f455c56fc38fa3cb5230bd5fe752f17fb3fd709e4c13a1b45b59b2a6aae02dff53e9bb5e4ee6d9a0d48cb37785ef66135c298a4a77969aac6df5f3f1b350953ded4bd3bf3ebdaf1bf29accea98c8f63cc708e4ea2ff717215b04afffb1d92d587674101e4cb7094e74286e51d42fc248e18ae6e14a9e65e110e2dab33b4ed03a1043271512115fb878a8ba74169e10ce7e2308aea89a8e6b83bb354d6ec68982a97b7c0dbaf70d7d835fe00f25d1cbbdd050000",
    ],
    [
      "ETag",
      "hVcI0IqZmOyVnm2ArPBTrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1592525998233"
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
      "c7dff75790fa08444151f8253e80a2924c90311f8c21a4aeb759edd6d9761862f8df7f6d37642f9a2592ec65edddf7ae9fec2eed7d398d067aa70941ff1ae885461f1988cd51046a6e361ec88c29a99794271250cb4483c29189ee07d3fef17193352f06379f733113f193d79c5f5ee65132788518ebb82f6d693ba4c088d4f6b3b51b85df6a098ec19c187096c5c9ca9aadbdac36a99517be3799de96959813ab4c1f5d773872c7a890b6ad9f21042bbcb247fe0d61d7a553c0d01b7ff12004014900fbbf4e057f83404d6c79258e53066dc93311802c2026319723c1b3140bcedbdad5eeb43bbd41b7d7ed0d06fdeee9e92e9af1002bca1393f0b840df78c515661eff3415469d6ede0391db79c577a54061a909e50a69696db22941dfbe6deb97c0c9d43f3f2bc516bba553caac4c0da9902a6f7d357ad1aa03e119ae93ae6f0a65b590234808885ad0345d61420448590f9ecb154ed38aecd16ce61e8a8c1322382535d1d7b40e2a53eb8ad41b77363ce0bba29ffbaa77fa7ae88f0f85954a3ff615b9fee47ebcf087f70f3fc2f577b97fe6471b05f241703d4424d8d1d13939ebf72ece4fd06e145d71336a9499444a6460dd01d623f98e2aed0b3193e06c9dffe5abca33fe070000",
    ],
    [
      "ETag",
      "8cN8//+l+79FwQrOrmYR+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `first_name` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-2-1592525998233",
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
      "da",
      "30",
      "10",
      "fe",
      "ce",
      "af",
      "88",
      "b28f2b240402a112ea589b6d9128ed20b4aaa6096ce792b94de2d4763a5515ff7d76c24b58ab6edfc8dd3d2f77e7e3a56518e603cd23f3d430314d1e4be0cf1fee19364f7406244a74c6b5e4c7e811db13e4dd61f1f92eb347d6b7643caeab688516282b52680b567202e274b9e8249c9505e28cb51561db6977dd91e33aee68e439bd5e0d1590c6539a3f68825f5216e2d4b276363a0963490aa8a0a24358b68f5b4f8e5570760f440aeb58d55242c27a57f72c650449caf2f172517b2805f0156488a6dac5011ce14fc7ec1d8ab24ea2aa9f280144082b73a99dd53484e5314d4a5e912ba6171554e1caf2feb3113017fed43f0f8d754cb990ab1c65b0369030562b0ea24ca5f1657e7569ac55a7314d41ac8ddb6ffedc37d6345a1b63e3cc9806974168742bf18a380221695ec98708a7d01055d9edc4823776b5a7d024482201dbb2d5d01ea0ae678f708c8724f67a2e8e6dc0d8c34317f5b04d467de847185093416aed1a8f72961385e86170484406ae8b87b1dd771d70601477b10d08397d70064ed736b70c9b7d3fbf3995704145c104ddced4bc9d07a1bf0ae7cbd9f924f49bbdc748cdeca2767fdcf9514b520da9e9f6bdb1bc725470ca94a96a7bc12cf4e793f330b869d8504f690a0922cf8b47fd9862940a38a011573b96c02f59a497635e5f2d8230b89a",
      "4da60786ea755cef2a852afbb1377be8a9c9163e17c7abaeb75047b5cd41df6ce436276fb2dca0b47c83e6691b36bb471cadbf7ffd6c35b84d75765b57e6f7a53fbfd3d82aa733738881434e0e6afff13635b04efffb4f4555ef6e5c03d499efe58554617525441cc40987fa666856775a110e6cbb37f0dc1da10272f9bac2eb0d7615afee5c6b4106b9dc8da2bef77a8e9b234b65c34e05d3e5ea8dcf82d9d7ca7c6bd3fa03438f7d6daa050000",
    ],
    [
      "ETag",
      "5/t+dqb0Aa8YbsBYm09/Hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1592525998233"
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
      "147de72b48f73a1ec091c8121f64319b0b311b6a8c5988a9706138e0b2b6b810c3bfaf2da0beb43de7dcdbdb737a314c93fce455429e4d72ccb3df0658fb9081f85487107853082eb71a2b0ee4515583a099aacecefe34f0563b0cf6bbf7d677279b84b1f96cd657f1f81b4a2aeb2e12499ce650245ce22f8dcd81d75a454b50371e0e4c0fd4370c9a686badad37e172f57aaf94986865b50d82b91f2cc820757a8fe4dae9979cf018420a0caa186eefa9199e20164b6d9cd3b22ec0e2d8b018f8304435f672c6b0a92943b424653996ed7a8eebb89e37752693b1bac0988a1c2bd5b05d93eb7881821621fe29efc4eec3613deca3188320e95d3af7f948e9ac9a172c077265bbe11419238a6ef3fc5600ff6028dd70d01e6cf7898c71bca0b22b541a8235a0e998ca0f7bcb85e4525a70303ae31f049e44821c020000",
    ],
    [
      "ETag",
      "gvB8L9NWoLYWJyB53TdrrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000d07fe9b331a448037b1b43a532c24d19f8d2702950b917908bd9bfcfecfcc179812849e83090b12d69033ec01a41659fec8d565685cf0cb1f2f643265be951113e86223fa84a2547379c05be766422e749a81b70c19687b9abc6856f0745c38ff76f6121e6e69bab068349e64d95b53cbf73abb7cf69080f6e3a56578524091466366d7ddd5c62499b69f94cd55e3cc179889fb173ed0872c855402613636b31a7943d56fdf4254958cf6b5487862ba30d7713d2bbde397b3db62fa8905cc35b4d07831da04bc7381d087bcf44495176e0bf49c6b5a3efab4a234e39f8fd0355a00e9205010000",
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
      "Fri, 19 Jun 2020 00:20:04 GMT",
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
      jobId: "grouparoo-job-3-1592525998233",
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
      "cf",
      "af40ecb509242109548ab628a16bb4405642da4dd3846c63985b8209369daa2aff7db6c90759aa6e6f70ef3de79efbe1fbdad234fd89e4b17eade990a4db0a972f1f1e29d4afa40773904acf82dc7d19c1ed7a7bef1933ffdbf6a9f2d7f46e3caea3884233b02932dc66b42a1166d7eb55272d69558092d2b6206cf7dbdd81d31bf4068e63f7fafd1aca70962c48fe24097e715eb06bc338c8e8a494a6190605611d443747bbf1dc338a923e62c499719ed5108998f16ede8f194580139a8fd7ab5a43c57019e10d2099547102c7f0d3397b87804d2715d1cf04618010ad722e95d53488e60949ab52910ba65761146625f9f8db30e82b77e14e430dd1acdae4510e36f84a8b0107117f29b076132c3d6deedf2c036f12ce977eb49adebadea4335d2ed69ebfd21e6eddc0d538801956586dac7d527fbef8518a54b618334e72a52994de8612e1ddb771fec6008f149244a862781f168dcc21e8daa60313384289dd1fc0c4c410da7034007d6822c7c2560c3168322865351ee434ef2643bb6b023beac2d889aca46b458e098751cf8a4796d5477d30ece97bf4ee58cbef92703c23aca08cec9bac3f04f3d08dc260ed4f27a1dbac3b0155c667b5f2f3aacfcae1a2414da5efb5e4425151122a44a971cefdd00d26d3707edf9021766b8153805e565bb95d09c8183ea1412966c571e9d1580e46f7279e3b3b81d5a67c3d043111f1",
      "e3a8f3548e0894f357b55cccff3c4f2816ebac15f56c6aabbe0a83b9ff596f38776fd3dc83ac7a83e7796f962d4c4876ea97a26afdfdf5b3d548a18b97ba57a7dfaddde0bbc42a9ff40438c125ced129e97f6cae04d6ee7fdf21117d380b12202ec3313de3c22cde1062a7e4a8c4f58b2275df6bc2a1695a8ee91c0805b0e4171103d3b60f1117a741e6c21b9cf3432bea1351f7717726a96ac85130192e5e81bf1fe1aeb56bfd01bb72f0aadd050000",
    ],
    [
      "ETag",
      "LiQK7bqUqVM/DNXqkuNUoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1592525998233"
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
      "000002ffc595516fda3010c7dff32990fb0a5281d295497d808d6e9102b449785985906b5f32b74e9cda0e6b54f1dd6727a1e4a553a421e525f6ddffce3fe54ef6bd3bbd1e7a6129455f7be889c5af39c8e22206fd60373ea89c6b65964ca40a50df4683c6b18d76535524c5db5b10f8e33bf24296af64f3ebe1f6b68a52e43724d8c4bd1bcbd811034e95b11f4bbb57fb4b2dc509d81389e07992ee4ab37f927591957210faeeea475349042d95d5c6f366736f816ae9d0ff1c42b1c6bbf2c8ff4394ebd6a961e8593cf910818494c0e9af33299e8168b72cafc249c661a0442e09a81a62132b399622cfb01462605c83f16038998e26a3c9747a331a8f8fd15c10ac99486dc226401f782d34e6bef8632b8c86a3aa07b2b2ab8a1f4b81a246139a1532d2de66338a3e7c87fe3f02dd55787dd588ad775ba791d99a1a31a974d5fa76f4ba5567c273dc25dddc14c63b21c79052909da059b6c3944a50aa1bbc503b9c652dd9f3f5da3b1719a7540a463ba2ef591754aef72da977de7a76c677c53cf76deff4f759b838175669f3d8b7e486ee721184b3e5fda770f3dd9e9ef979a141dd4b6186888272740c2faf6e265fae2fd171147d1376d4683b89b4cca174136c46f24fa68d2fc25c817370fe0271ec5eacfe070000",
    ],
    [
      "ETag",
      "InsymyxxSSR3FckcMqcUZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ltv` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-4-1592525998233",
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
      "0002ff8d546d4fe24010feceaf687a1f4f28b450c0847846ab3641d4523477970bec6ea7bdd5d2adbb5b8c31fcf7db6d7929a7f1ee1b9d99e7656667786b1886f944b3c83c364c4c93e702f8eb974786cd239d0189129de93bc1f4c7ecca0a0b7c19b924bc08bfa29797d1a8aaa2255aa0659e4253b0821310c7b3692be1acc81167aca9089bdd66a737b47b766f381cd88e534105a4f198664f9ae0b794b938b6acad8d56c2589202caa96811b6dcc5ad956de59c3d0291c23a54b59490b03ed53d49194192b26c349b561e0a017c0e4b4453ed620f8ef0b743f61645cb56a2aa57940022841599d4ce2a1ac2b29826052fc915d39b0aaa706979f7590b98536fec9d85c62295ab858184319f7310452a8d8be0e6da58a816639a8258180f575ee0190b1a2d8c9171628cfd6b3f343aa56ac9188190342b75438453a8a9a9ec6654fe078fb4a3d0244822019bb279bfeda2cea03dc431ee9378e0f470dc068c07b8df430e6e936117ba11065467905abbc2a38c656d3ce8bb51ecd804e3b86bbbae6240e0c40e895d7be8d85d97383024aeb96158effa79e154c23915391374334cf321f0436f1e06b3c9d969e8d57b8f919ad979e5feb0f38396a41a52dded676379e728e7942953e5b3f993d00b4ecf42ffbe6643edd01812445ea7cf7a8b62940ad8a311474b90c0af59a41fc7bcbd99faa17f33391def19cab5b8dd560a55f6736776df539d2d7ccd0f9fba7a852aaa6dba5db3965b1f7dc8728fd2e2039ad5266c760e381a7ffffad5a8719beade36aeccbb99177cd7d832a73301c4c021237bb5ffd84d0dacd2fffe3751d5dbe3d60075df3b792155585d09117b71c2a1ba19baac3a2d09dd76db55cbba2554402edf5774073bc97707aeb5600999dc8ea23af46a8eeb034b45cd4e09d3e56ac727fee4b234df5837fe0006b03d",
      "b4a3050000",
    ],
    [
      "ETag",
      "73RSZUH/TubGd6cTFT+aww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1592525998233"
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
      "0000000002ff4d51cb6e833010bcf315c8bd96369052854a3924519b56427de4714915450e2c140a2cb54d2b12f1efb50d24b9d89e995d8f777c344c937c2745481e4cb24fe29f0a587d1583f8508705f02a135c6e25161cc8b5aa06416355bd192dddd5e0b0b94da953cde7389b47f568321eb7553cf8829ccabaa344124709642197f85363b3e3b556d01cd48dbb1dd386fa864e1375a9b527ff6db2ba14720cb5f0baf6fdc9d47f249dd4e87d2bd7463f24c5fd0222605004707e4ec9308540bce8b939cdcb0c2c8e150b807726aab1956386554919a22529ebceb25dcf711dd7f346ce70d8576718509160a11ad64b72b2172868b6c03f353ab1db6c580bdb24fa1c487411ce653c52fa55cdd2f1c676c8896fbad3d6e8d1f6ec38ad05f07786721e0e7a0afb7e40fa4066a806162a0fc12ad07440e58f3d27427211cd38188df10f75fb8c8f1d020000",
    ],
    [
      "ETag",
      "Z8S5T0zZ/ja2uGGoCGfy8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "300000d07fc9599c10aa85de88b541706193e5c4000d0a44f60c924effbd4edf1fbc1f90e6391dc7646a6bda800fb0a4485be76bab5531d40b19f2693c9efb718a7395f91ca99e43f2ec2002728291f0512829fa7bbf151e66ec82625a5e4cdc1ae68ef0cc3682198a60a364d25c7492157da1db9b7729608d31d769059bfabe9c487d66516944c5772def3f71ef6a06ac0e592bddcbe231fbbba3ccd2805f29ebe40a6133883af7d13022dc4e6b6c6a895e0aab78326e7bde34646b5f9d10cf92edc42c062b409f5d39d031295f3365a3692bf0df4ca6a5a3af2ba6e94007f0fb0743fba45305010000",
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
      "Fri, 19 Jun 2020 00:20:07 GMT",
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
      jobId: "grouparoo-job-5-1592525998233",
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
      "61",
      "6f",
      "9b",
      "30",
      "10",
      "fd9e5f81d8c735094d20844ad11aa5b4430aa423a4d5344dc818c3dc02a6d8748aaafcf7d9862464a9ba7d83bb7befdebdb3fdd65314f51917b17aa5a8114e5f6a546d3f3d9148bd1019c4402a32f4ce7c9cbeb8d628ffbc0db27be7d6dab87a3a9b355558a229c8cb0cf529a92b88e8d5663d482b5297a022a4cf09fb46ffd2b046c6c8b0ace9683c6ea01465c91217cf82e0176325bd1a0ef73206292169864089e90092fc101fbe8e8665459e10647478da75c81bd1e1877dbf640402864931dbac1b0d35455588728033a1e2088ea3eb53f60106f920e5d5af18220021a90b269435349014094eeb4a9273a6371ee46129f9f0db09a86b7b692f020592acce8bb00039ba5062c040c8b625526efd95ab38deedca77e781b3f2c2f5e2abedce078bd572e37a6be5f1abeddb0a03518624569929d7f2cfe33f5291ec1623ca7021350522db51c2b3ad8dce3b0b3c500812ae8aa2b62c34b509b89c6a569444264ca663234a341445d3c834c038d2a0a5233d8e10e83248650d1e14dca8d1e452d78c241c99a616ea93711c5ab13e0e35439f98268a4d3036d416bd3bccf2bbc20cdd605a128a5b93d547df09ec30f037de621ed8ddb9135067eca6517e3af5c9388c1bd455fa9125678aca0a132e4aaed3f102db9f2f02e7a123839fad254a01dcae5fc4e94a4046d1110d2abe2b862a97c46231aa3777ed9b23589e94fb7d11e5153f0e3a8fe3f042b17f39cbd9fe4ffb04fc609d58d1eca689aaebc0",
      "77bc3bb593dcbd4ff300b2fa1d9ed7362c2c4c7076f44b52f5fefefad9ebb450f94d6dd5a9df36b6ff5d60654e647c94a00a15f0d8f43f4eae0036e97fbf43bc7aff2c08007f190eed29e3617e87203d3687156a6e146e7c6f08279a664ecc03210756ecbc62aa6bfb8ab3a741f442392ad8de8ae689687cdc9d48aa3b72244c94f35be0b52bdcf576bd3f5e5487f0dd050000",
    ],
    [
      "ETag",
      "sG7W8qM92m+yTlPIF9UM4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1592525998233"
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
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "df",
      "f32990f758904ada74a5521fa0652d530a6d089aa60921135f825b27ce6c8709557cf7d94e2879e914694879897df7bff34fb9937def4ea783de6846d04d07ad69f2bb00b1fb92807a319b0064c194d44bce3309a86ba241e1c4449ffd789ba9c562f3d8df04df7f9e8d1e5c15ae93dbdb324a461b48b18e7bd796b6630a8c486dffb276a7f25b2dc329981323ce8a345b59b37b94d52eb7f23c0c26d387ba92726295e9c2f787237f8c2a69dffd1c42b0c22b7be4ff21ecba742a187ae5eb006210904570fceb5cf05788d4c49657e23467d093bc1011c80a62124b3911bcc8b1e0bca75d3dafd7f706aee77a83c1b57b717188663cc28af2cc242ce6e803afb8c22ce07f4c8551df2d7b204abbacf8a11428ae35a15e212d6d4d3625e8c3b7effe2370320daf2e6bb1d56ee9d4321b53632aa42a5bdf8c5eb5ea447886dba4eb9b42592be4043202a21534cd5798100152b683e77285f3bc217b349bf9a722e38c084e494bf42d6d83cad4b621f59b3f1b9ef05dd1cf7dd33b7d3f0cc7a7c24aa51ffb86dc70f2349e87c3a7e74fe1fabb3c3ef3a39d02f92cb81e2212ece8e89f5f5e7b5fafced16114dd71336a9499444a1460dd11d623f9912aed8b3193e0ec9dbf8ca6b0e3fe070000",
    ],
    [
      "ETag",
      "+WkOtUUhH1hRJY+BG2tTbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ios_app` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-6-1592525998233",
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
      "6fda3010fdce5f11655f0b248100a9843ad6665b240a1d8456d334816d2ea9db244e6d87aaaaf8df6727fc086bd5ed1bb97bf7debb3b1faf0dc3301f69b636cf0d13d3f8a900fef2e98161f34c6740a25867ba8f1b369d5c6579fffee1264d9c858ff897d17058a168592d509a27d014ace004c4f962de8a392b72c4196b2ac266af69bb9ee33aaee70d9c4ea72a159044639a3d6a827b297371de6eef6db462c6e204504e458bb0f4106f6f9c76ced9031029daa7aa6d2524da1fea5e248c204959365ccc2b0f8500be8414d144bb3816aff1e753f61645692b56e80d258008614526b5b38a86b02ca271c14b72c5f4aa822a5c5a3e7cd602e6dc1ffb97a1b1a24c2c519eaf0c248ce592832812697c9d4daf8d956a33a209889571f7dd9ff90abb5e1943e3c21807d74168d8a572c9ba062169566a870827505354d9ddb882771675a0d0244822013bd8b26ff5903db03c1ce13e89061d174716603cc07d1775b045bc2e74d718509d416aedaa1e652cb361107507ebbe6763cf1d8043a2c8725c0b79519f60dbee210ff75cb088b963d81efa79e654c215153913743750f36e1684fe329c2d2697a3d0aff71e2135b3abcafd69e7272d4935a4badb8fc6f2c651ce2953a6cad50593d09f8d2ec3e0b66643bda331c488bccc9ff44b8a5022e0588d384a4102bf666bbd1cf3663a0fc2603a198d8f0ce5d3b8d9238582fd3a983df654670b5ff2d355575ba8a2da66af6bd672dbb377596e5152bc43b3d9854dfb84a3f1f7afdf8d1ab7a96e6ee7cafcb1f0673f756d99d3991944c0212347b5ff789bbab04afffb1f",
      "45a1f707ae0bd48d1fe48554617525441cc50987ea66685a755a12f62cbbd3b7bd3da12ae4f22dc2eb387bc49b23d75a904226f7a3a88ebd9ae3f6c45251b3539669b87ae39360f2ad34dfd836fe00ee50a284a7050000",
    ],
    [
      "ETag",
      "4kvoONDnp7hjPml2UEarBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1592525998233"
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
      "02ff4d515d6f8230147de75790ee7123991ab6b1c40731665b4274c3992c598ca9e5c2d0c2656d993186ffbeb680fa427bceb91f3d8793e3ba649f97097976c936cf7e6b10c79b0cd487b9c4206baea43e2a2c25903b530d8a66a63a18cdebaf47c678f6e9c7fb727b8b2fd3e5613c6eab24fb8182eaba93461aa739f0446afc6db1dbf1562b690166e26623ec423ba1d3d4b1b25ab85844b3c9fc5a2a30b1d27c154593309a914e6aecb9d6dfc63e6587db1852105032b83ca812b803a6deac73498b8a8327b1160c64b7c434b67226b0aea840f434e53d78033f18fa433f089e86a3515fcd91519563691a564b725eaf50511ee3c1982783361dd1c2368b3e09925ec5731d9096fe4cb312359033db74b7b5d3a3f5655f785420df056a3712ac87e09ef4694cd1b855260c33d2d28cea1ff69a2bcda5944b701ae71fb65021951c020000",
    ],
    [
      "ETag",
      "93NuX7cclgT5Rknb+oGCSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "1dcfdb6e82300000d07fe9b3980590cbde68096cc0c44694e90ba9505c2d0a14580bcbfe7d66e70fce0f20654987a1185b4e1fe015cc4477d7e53a6e1df8e255f6e7f530a27dc80db545d132e3f3cdb202724cbe315f02dfd1cb38f311f647b8e85904635336b5477a4ca9d7185b365cfcd4d47324459ec6755e9d4f61ec774edfea5f05da4146fa4025f40271f296924c9a1e8708667494fd82fabc4ab35baf4d517467ea9d1c07ebd0dea11d4ec8ae348977bc6944d4d9ec248d5a3de270bf519512da4721272e9d6b0b5680aa8e093a14ec393336aebb02ffcd629c3bfabc424a0415e0f70fc15e989005010000",
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
      "Fri, 19 Jun 2020 00:20:15 GMT",
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
      jobId: "grouparoo-job-7-1592525998233",
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
      "8d545d6f9b30147dcfaf40ecb5f9208492548ad628a56ba484ac405a4dd3848c31d42dc1cc36ada22aff7db621812c55b737fbde7bce3df7c37eef689afe82f358bfd2f408a7bf4b44775f9e49a45f480fe220959ebb276ce3b228c609da3ceee8dbe43e7e7e4aa7d32a0a2b3403db22435d464a0a11bbdaf8bd9492b2009490ae20ecda5dc39a0cada135998c87a6594119ca9225ce5f24c113e705bbeaf70f327a292169864081590f92edd1de7f1df60b4a9e11e4ac7f9ab52f12b1fea779bf6604028e493eddf8958692211aa22dc09954d180e3e8fa94bd87c1b6978ae8570c118090943997ca2a1a48f204a72555e482e95d188559493e5e5b06dd7796ce3cd020c9ca6d1ee6608b2eb4187010f25d81b45b6fbdd216eeedda5bcd82c5da0dfdf99db39af5e6ebe566e5fadae39de3391a07518614569b6ad7eae68a8b52a4b2c588719c2b4d81f4b694086fddc6c507033c524812a18aa13a2cb40797c0180f265112d930199b56940c50148d23db0266348093111ac511026d06a5acc2839ce47064c4c00456080cc30a4789294e4363108ecc783430c6f6e5d8b2f51abd3fd6f246314737981584e1bac9faa3b7089c30f036ee7c1638edba135066fca6527e5af549395c34a8adf4b3969c292a282642941ae7c20d1c6f360f160f2d1962b796280570e7ff96db95808ca1060da89815477445623918dd9dad9c9b06ac36e5fb218889889f479d4d392250ce5fd57236ffd33c8158ac935654b3a9acba1f780bf79bde72ee3fa6790059f901cf6b6d962d4c70d6f44b5175fe3efdeab452e8e2a5d6eaf4fb8de3fd9058e5931e0f2588a21c3649ff637325b072fffb1f12d1876f4102c4cf704ccfb8308b370459931c52",
      "54bd285cf5bd22bc1c18966d5a074201a4fc3c6232b20f11675f83cc85b628e78756545f44d5c7fd89a4b22547c164b878056e3dc27d67dff903d5c2fd08dd050000",
    ],
    [
      "ETag",
      "Hhi7iupp8feUWyrw9Qdjhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1592525998233"
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
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "dff32990f70a5209a52d93fa001d1bb4291448a749134226be64ee1c3bb31d3654f1dd673ba1e4a553a421e525f6ddffce3fe54ef6bd7aad16fa4939411f5b684b935f39c8fd8704f4c26e96a072a6955932c115a0b68d068d13172dc207fffeeb826fef60f22d99f41eeeff8c16b7b745948a7e408a4ddcabb18c1d53604419fbbbb35ba5df691ca7604f8c04cb53be7166fb24eb7de6e455b89ccebe54955410a7cc9e8360380ac6a8940eedf721046bbc7147fe1fc2ad6baf84a117b15d420c127804a7bfcea47881484f5d79154e33061d257219812a2136b1901329f20c4b213ac6d5b9ee74fb03bfeff707831bbfd73b463311614d05b709cf2bf486d74263b614bf6d8551d72f7a200bbba8f8b11428ae34a15a2123ed6c3625e8cd7768ff23703a0baf2e2bb1e56eed55326b53632a952e5a5f8f5eb6ea4c78869ba49b9b425923e4043801d9089a661b4c8804a59ac10bb5c15956933d9acf83739131275250d2107d479ba032bdab49fd1ccc87677c57cc735ff74e7f1a86e3736195368f7d4d6e387d1cafc2e1e3d3bb70f35d9f9ef9d15e837a92c20c11056e74742f2e6ffad75717e8388aee841d35da4e222d7370ee089b913ca1daf862cc147807ef2fd64a5ac3fe070000",
    ],
    [
      "ETag",
      "boTK2JVQnbCeHXgH3KJxBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `date` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-8-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6f9b3010fe9e5f81d8c735e1ad21a152b4452ddb90d2b423a4d5364d893107730b98daa65355e5bfcf86bc90b5eaf62ddcddf372e7bb3cf7344dbf2765a29f697a4cb2871ad8d3bb3b1aeb272a0302652af37d19cc6c6b568e885bb8f57b37cde6cc984e266d1569d01c15550e7d4e6b86819f2d17838cd1ba428cd2be24ec8ffbd6d0b387f6d0f3c6b6e3b4500e793a23e5bd22f82544c5cf0c63676390519ae5802ac2079816fbb8f1681b15a3778005378e550d29c48d37753fe41423416839592e5a0f3507b68202915cb9388093f8e331fb80a06290c9ea478201614ceb5228672d0da6654ab29a35e492e9590665b8b1bcffec04f4853ff3cf236d9d20016b0d716db562c0eb5c689fc2ab4b6d2d7b4c490e7caddd7ef1435f5b9364ad4db40fda2cb80c22cd6a641bca04b82065231ca138878e9ccc6e6715bcf24a7b0a458204e2b02d5b8d4c175963d38bd37884d3b1338c5313e2781c8f86c8894dec9dc2691203ea3208a5dde251494bdb06048e3b04ecd9b68d2041e6c876b1391e43925843d3b56dc7b33c53df326cf6fdfc6644c005e115e5643b4dfd360c227f1585cbf9f934f2bbbda748ceeca2757fdcf9514b420ea9ebf6adb1bc70543142a5a9e6dd8279e487d3f328b8e9d8904b34830ce1a7c5835aa314e51c0e68c4500102d8254dd4e3e8d7578b200aaee6d3d981a1d98beb5d2597653ff6660f3d75d9a2a7eaf8a9db5768a3caa67baa77729b9357596e505ebf42f3b80debd61147efef5f3f7b1d6e5d1edcd695fe75e987df14b6c9a94c08293028f141ed3f765301dbf4bfff4e64f5eeba15401ef85e9e0b19965782f9411c33686f86146da70da16bcabdb7f68412c8c4cb0acb7177152f2e5c694101a5d88da2bdf4768e9b234b75c74e0353e572c7e7c1fc7363beb7e9fd01a5b964c7a4050000",
    ],
    [
      "ETag",
      "ZUIL21Ln7i6m6u+6fgNr/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d515d6f8230147de75790ee756480d1e8121f70ba8f84b8cde9835b8ca9786138e0b2b64c89e1bfaf2da0bcb43de7dcdbdb737a364c93fcc4d99edc9b641747bf05b0f22602f1ae0e0be04522b8dc72cc38905b550d8246aa7a591e06afebe8eeb37cdccda7feda7b9a1c4fde785c57f1e01b522aebce12491cc690ecb9c45f1a9b0dafb58ca6a06edc6e991ea86f683451e65a9b7acb59974f71aff9f9caf7bd893f238d54e97d23d74abfe380bb0584c0200be0fa9a9ce10102f1a26d739ae609581c0b16006f86a8c65a8e181639658896a4aca1e5f4476edfed8f4643b7d76bab130ca88831530dab0f72192f50d0648147e59c387534ac8675106d0c24ec64d34d474a7faad9b55ddbb25dcb76c845ab9ad3c668d1e63a75520ae06f0ca5270eda8933b0491bca032ad342652258019a0ea8fcb4e758482ea40907a332fe01bc21478220020000",
    ],
    [
      "ETag",
      "Tyj6OYg/ZyFbNDLYAGBwxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "db7243400000d07fd9e7c8b0895bdf88c434c58a08e1c5b036ee6116e9d2e9bf37d3f307e707a41893714ca6be214ff0019614aa5bbcfdea159dd772bedc0f41e725869c55f7282689783ded440779dd11977b96664c39ad82d75e30c705bc70365404e549e02485adc670f59ffea3a599c334cd0b5e2be4e6a895cac89896e0f3609be7d4e234d830bdeeec349c076a3a25aa03b7ad1155843b74dde23887b5434c9ccf8f4301c379bd0931b160448bbc1cb4978c62d422bfea75abbad837c58cbb06e7d2452dc837d800c2868a9231a9deb39da8aa1bf0df4ca66520efab4e524a28f8fd03b1f73daf05010000",
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
      "Fri, 19 Jun 2020 00:20:18 GMT",
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
      jobId: "grouparoo-job-9-1592525998233",
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
      "f75720fad8d8c677886435ae4312141bb71827aaaa0a2deb816e8259c22eaedcc8ffdeddc5175c4769df6066ce9933979dd79aa6e9cf245dea979a1e92f8a5807cf3e18986fa85f40047b1f47ca466b2ee3c6c8cdbcff70efffdd8ceda641c0f87651451688656590275468b1c03bb5ccc1b714e8b0ce594d60561ddaab77a56bbd7ee5996d9ee744a2883249a90f45912fce43c6397cde65e4623a6344e00658435305d1deccd75bb99e5f4093067cdd3ac4d918835dfcdfb29a1187142d3e1625e6a2818e401ac1049a48a2378195e9db237085a356211bd261810c6b448b95456d2609a46242e72452e985e85519895e4c36fc5a0cfed893df6354c93629506295ac185b6441c057c938176e3cda69ae3deccbce9c877666e301fdfd9d351633c9b2ca6ee5c7bbcb33d5be3284c4061b5a176a5fe5cf1a314a96c4b609ca44a932fbd1525c2bb6ba3f3c6000f149244a862b00b0b06461fb54cc30aa3708023b3d30b2303c2d00c073dd4090d6c75a1bb0c01551994b2128f529ae2a86f183db31f2034e8045d8c2040dd300a70b76bf5318aa21e6eeb3bf4f650cbaf9c70b8262ca38cec9aac3f7a8e6f07beb770c723dfaed61da122e1d7a5f2d3aa4fcae1a24155a5efb5e44c5196132a44a9713aae6f7ba3b1ef3c546488dd9a408cf066fe22b72b420983231ae562561cf2295dcac1e8ee686a5f1fc16a53beec839888f87ed0792c4704caf9ab5acee67f",
      "9ac7178b75d28a7236a5559ffb9ee3deea15e7f66d9a0794146ff0ac7766d9c28824c77e29aadadf5f3f6a9514ba78a93b75fad785ed7d9358e5931e0f22c821c5c7a4ffb1b91258baff7d8744f4fe2c4880b80c87f48c0bb37843981d93e31cca1745cabe97847da3655a567f4f2880393f8bb05add43c4d96990b9600529dfb7a23c11651fb727928a8a1c0593e1e215b8bb116e6bdbda1fb8f21ff9dd050000",
    ],
    [
      "ETag",
      "+o8lv3Vy0GBKItzW2p2iCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc595516fda3010c7dff32990fb0a52a14d0b93fa105adaa105e8422a55ab1072e34b6ae6c499ed30a18aef3edb09252fad220d292fb1effe77fe2977b2efdde974d06f9a11f4ad835e69f2a700b13b4b40fd349b0064c194d44bce3309a86ba241e1c44407d7b36777f9e3b97fbf89c5af64f646d864e8dddc9451327a8314ebb8776d693ba6c088d4f68bb53b95df6a194ec19c187156a4d9da9adda3ac76b9959761309d3fd4959413abcc9f7cdf1bfb135449fbeee71082155edb23ff0f61d79553c1d086bf061083802c82e35fe7826f2052535b5e89d39c414ff24244202b88492ce544f022c782f39e76f546bdbe3b1ab80377341a0e2e2e0ed18c4758519e9984a725fac02bae300bf85f5361d41f943d10a55d56fc500a14d79a50af9096b6269b12f4e1db77bf089ccec3abcb5a6cb55b39b5ccc6d4980aa9cad637a357ad3a119ee136e9faa650d60a39818c8068054df33526448094ede0b95ce33c6fc81e2f16fea9c838238253d2127d4bdba032b56d48bdf717de09df15fddc37bdd3775e383915562afdd837e486d3d964197ab3c74fe1fabb3a3ef3e39d02f928b81e2212ece8e89f5f0eddebab73741845b7dc8c1a6526911205587784f548fe4e95f6c5984970f6ce3f12a9984ffe070000",
    ],
    [
      "ETag",
      "R7MX5SKX1FjfrZgMhdlE8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `stamp` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-10-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d6f9b3010fe9e5f81d8d7352110de2a455d97b20d294dda84b49aa629317030b780a96d3a5555fffb6c4808ac55d56fe1ee9e97bbf3e579a028ea3d2e62f55451439c3e54409f3edd9150fd2c33c0512a339332828bafe932bf760a8dcfac318fd32a9d4e9b2a5ca319cacb0c4e18a96804ec74b31ea6945425a2849c08c293b17632365dddd44dd77574c368b00cb2648e8b7bc9f087f3929d8e46071fc3949034035462368c48dec6478ffaa8a4e40e22ce467dd9915062a3f785cf3212218e4931ddac1b131503ba851ce14cda38a2e3f04b9f7e88513e4c45f5238e004511a90a2ead35341129129c56b426174ccf2228c2b5e7f6b31350d7dedc9b05ca8e71a1b2531053b65b0aaccab8f26db5bc5476a2cb0467c076caed0f6fe5293b1cef94a972a6ccfd4b3f50c6b56ecd1903e3b8a895031466d0d113d9fdb4fc3716d5524812c411837dd9d6d62c347634374c423b4a1cc30c130dc2d0096d1319a116b91398c421a02e0397da0d1e15a4b05d43b32d174d2626588ea1279ae6b8a669591323710dc735625bb7119aa87b8697b69fbf1473b8c0ac240cefc7a9deaefcc0db06abcd62761e78ddde13246676d1b8ef77de6b898b2175ddbe3796578e4a8a8930552fce5f04deea7c16f8371d1be215cd2145d1d3fa41bea304650c8e6844510e1ce82589e572d4abe5da0ffce5e27c7e64a81fc6d5a19289b25fadd9634f5db6e0a9ecafbad942139536ad76b6bd6efa2c3728abdea079dc87d5718f63f0ffafdf830eb72a4e6eef4abdde78ab9f125be7646605095028a2a3da07dea60436e90ffca388f2c37d4b8438f1565f9c19c7e24c2276548f28344783f3a6d59ad0d2f4b1eeea074201a4fc75856db792af6e5c6a410e053fcca2b9f566902f3d4b55c74e0d93e5e2912ffcc5f7dafce065f00f15d4c273a8050000",
    ],
    [
      "ETag",
      "4pceDBgOmQ8n0tC61tdgug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1592525998233"
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
      "ff4d515d6f8230147de75790ee752ca2eb264b7cd08544135de65734598ca978411c70595bb639c37f5f5b407d697bee39b7b7e7f46cd936f98cb33d79b1c92e8ebe0ae0a7bb08e4541f66208a440ab5e5980920f75a0d92455afd3c4ce581feaed7f8b75a0dbbfe2e9d0ee269af57a94470809429dd592185c31892bd50f8c360bbae1b2e6329e81bb75b6e069a1b6a4e9e72c32d46137fbee84fde6fc914f7867c5b8ec7fdc1d82735559a7da3d6d23ce688bb1984c0210be0faa49ce311023932de054bf3041c81050f40d443746345471c8b9c714447951cb7e5b8d46bd336f5bc6ebbd369e409064cc698e98ee59c5ce64b942c99e18ff64fdc2a205ec12a8e260c12de24749b91a2be4df303edb628f55cefd1f7c8852eebd3c66ad0e63a78709220de392a5f028c1bf7a9459a605e511b973a17c90b30e580a9df1bc652d5429608b04aeb1f7bf3342b29020000",
    ],
    [
      "ETag",
      "7Hmth5xXXozWWH8EbmQBiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "7fe9b31aae51f606830141cb44b9b42f0d62b928d84ac100cbfe7d66e70fce0fc88b820a410676a70ff001e65c3136c526603b4b320b2b15d01d5a8be9e2f64aaafb8599e1b51275a9c2a3da65886bbe92bb552ba351e63e8a9f09996a6cef1e16c971c483350966dd97c5b639a297c7c62e66b87444766994abedb4e9947eda040d3098f6752869b3a067af8fa40cf69e9ac4f080a9fb0d0b567dbd668b35a3ba781db3eb2d8a9e6889b49b7930e413c75ed87952ca5adee37db976ce93b654890456804ebce9a920cd7ba6ea86b102ff4d32cc9cbeaf16cd7bda83df3fd8213c7705010000",
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
      "Fri, 19 Jun 2020 00:20:22 GMT",
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
      jobId: "grouparoo-job-11-1592525998233",
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
      "7dcfaf40ecb5490884062a456b96d23552423620eda66942c618e61630c1a6eb87f2df679b7c90a5aafa06f7de73eeb9e7da7eed288afa808b58bd50d408a7eb1a55cf9fee49a49e890c62201599e9d397ecde4c472f83b56fdebce49ee7fe789a8cc74d1596680af232435d4aea0a227ab1f27b6945ea1254847439617730e80e4c5b3775d3b62ddd301a2c455932c7c58360f8c358492ffafd9d8e5e4a489a215062da8324dfc7fb8f7abfacc83d828cf68fdbf67927da7fbff1e78c40c03029c62bbf115153548528073813320ee838ba3ca6ef6190f7525efd8821021092ba60425a43034991e0b4ae2439677ae5411e969af7bfad80ea3b73671a289064755e8405c8d19912030642f65c22e5da5b2e94997bbdf4169360b674437f7ae32c26bde972be5ab8be7277e3788ec24094218955c6caa5fc73f98f5424bbc588325c484d81c8b694f0ecd6c7d91b2bdc530812ae8aa26d5938d2cec1c0d2ec28894630b10c334a341445563432811169d01ea2611c21d06690ca1a3c28b85143a86b006aa1a699301c46b111da860e43cb8e4ddd48ac018448dda237fb59fe5698a12b4c4b42f1d664f5ce9b054e18782b773a099cf6dc09a83376d5283f9efa681cc60d6a2b7dcf9213456585091725d7397303c79b4c83d96d4b063f5b739402f8ecafc5e94a4046d1010d2abe2b86aa0589c5625477b270ae0e607952beed8a28aff8b5d7791887178afdcb594ef67fdc27e007ebc88a",
      "66374d54f5036fe67e555bc9cddb34b720abdfe079dc86858509ce0e7e49aaceff5fbf3bad162abfaa5b75eaf795e3fd14589913190f25a842053c34fdc0c915c026fd81978897efde0581e04fc3be3f653ccc2f11a487eeb042cd95c28df10de1b9a6ebe7d69e90032b765a31b287bb8a93b741f442392ad8ce8be68d688cdc1c49aa5b72244c94f36be06e77b8e96c3aff002019d8a0e0050000",
    ],
    [
      "ETag",
      "CxBlj5g7z1qS5HzmRRNXxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1592525998233"
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
      "6f",
      "da",
      "3010c7dff32990f70a5a434b5726f581b4b0464d8141fab05508b9f1253375e2d4769850c5779fed8492974e918a9497d877ff3bff943bd9f7e6743ae88566047defa0679abc1620765f12503fcd6601b2604aea25e79904d435d1a07062a27fb99bbbafc5eb643eb9f7eed9d47b99fdf665727d5d46c9e80fa458c7bd694bdb310546a4b69facdda9fc56cb700ae6c488b322cdd6d6ec1e65b5cbadbc0c17fef4475d4939b1caf43108465e304695b4ef7e0c2158e1b53df27308bbae9c0a8636fc79013108c82238fe752ef80622e5dbf24a9ce60c7a9217220259414c622927821739169cf7b4abe7ba3d7730ec0ffa83e1f0aa7f7e7e08673cc28af2cc643c2ed13b5f7185d982ff3525466ebf6c8228edb2e4875aa0b8d6857a89b4b435d994a077dfbefb9f407f1a5e5ed462abddcaa96536a6c6544855f6be19bdead589f00cb749d75785b256c8096404442b689aaf312102a46c07cfe51ae77943b6379b05a722e38c084e494bf42d6d83cad4b6217512cc46277c57f47bdff44edf8ec2f1a9b052e9d7be2137f41fc6cb70f430ff10aebfabe333efed14c8b9e07a8a48b0b3c33dbbb81a7cbb3c43875974c3cdac516614295180754758cfe43baab42fc64c82b377fe01f3659e51ff070000",
    ],
    [
      "ETag",
      "Y1jH/uqFPFKBKlNBkOZIsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `first_name` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-12-1592525998233",
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
      "5b",
      "4fa340187defaf20ecab2d144a5b4c1a7595dd25a9ad02d56c369b76183e705acae0cce0ea9afef71da017ba1ae31b7c9773ce779bd796a2a82b9245eaa9a28624792c80bd7c59d2503d293d2050527af4e4efd5d2a70f3efdbad27e58b7d36712af92d1a88e22553647eb3c8536a705c3c04f677e2761b4c811a3b42d01db5da3ddb56cc3322cdb1e1aa659e77248e331c95625c28310393fd5b49d8e4e42699202ca09ef60badedbb52743cb195d02165c3ba6d52413d73e263e4b294682d06c34f36b110507368735226929e3901d85e7c7f01d82d69d44463f110c08635a64a29456c3609ac5242958052e915ea5519a2bcdfbdf8641f59db17319288b98302ee6195ac342415c99cf19f02215ca376f7aad2c64a93149812f94fb1f8ee7288b4ae942192967cad8bd7603a55bf157d8117041b24a4180c2141abcd2bbed9afbcec0f61025081288c3366c3ed0fba83bd4ed300e07381e9a5618eb1086c370602133d4b1dd835e14026a228892bbce4719cd4c0383de33cd611cf522bb370423ea636b60a25e6c77fb918d74d30c0d1bd42dc2665fcf1f46045c119e534eb66d55ef3d3770e681379b5c5e044eb3f618c9b65dd5ea8f2b3f2a49c82635d57ed496378a7246a814550dd09d048e777119b8770d19729bc69020fce23f96fb14a394c3211b31396601ec9a46e570d49ba9ef06ee7472313e20540b72b38be432ecd75eeca1a6265af0921f8fba9e426d55fdc07327dfd5867373f22ecc1d4a8b77709eb666159672f529e1fa393c576daa96bf89dbfaffeb77abc1a7ca7bdc4a556f678ef7b3cc",
      "ad7ca5c783181864f8a0e0130b5b26d6ee4f3c37327c77fc6586bcff3d3f17d22c6f07f3033b66505f125957926bc0be6e989635dc01ca4426de460cbafb88370f40c9056bc8c4ae17f5435037727324a968c8a9d2ca70b9f993ed4037ad4deb1f3272da37c5050000",
    ],
    [
      "ETag",
      "0gzDjSohSoBk/H5QOxifkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1592525998233"
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
      "00000002ff4d51d16e8230147de72b48f73a92893193253ee8629cc6980de71eb61853f1c27085cbdacb8831fcfbda02ea4bdb73cebdbd3da767c775d94f9a1fd893cbf669f25b823cdd25406fe610822a0529bd15982b60f7a61a8827a67a4e8f347b10e3c5f023aa86fc931793e3a21a8d9a2a157d43c675dd59238de314c44169fc65b1dbf256cb7906e6c6dd4eda81f68656a35361b5f57b385fcd6e950c0f56596d96cbf1643965ad54db7dabd7dabee488fb1062909047707d4f21f10811cdad71c5b34280a7b09411a87688696ce44462597089e869caebf95e6f10f8037f100443bfdfefca05469c52cc4dc766cd2ef309898b102b639ef59a7464039b2cba24587c13cf6d405afa33cd539902bbb0757bda3a1dda5ee74d4e04ea55a2b6a3c09af0838075793ca3f14b260e9225583ae2fac75e52d25ccc8502a776fe01ce50216a1d020000",
    ],
    [
      "ETag",
      "It7tG0lAJ8Vcw8aZapBjJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00e077d9eb24a3ab06bd139b364107152c3786cdaf0ee37cd6e9bb37d3ef0dbe1f143306c3108d4d09357a435b8ce5133be98d74e694c73beec09b43731263a3a81cfd1669be22551cb020da46510281fae9cb279d6a480cbeb81f3fb449bbec452605a26c19f9cc1e788faf19a651d790c93220b48cb0b1fb8e146a63da9d4528bdcdd43d26ec9a84e25adb16262149d432d09df56bd91b39a3bac36f6a35ac99d82b692ba57e61b9df2657c62c83654e2e5850e5ca73f3f5954b168f8aa4dfee264307046b9bf73044f973c60bb27c40ffcd68dc5a785ecf10f7d0a3df3fea1b848205010000",
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
      "Fri, 19 Jun 2020 00:20:25 GMT",
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
      jobId: "grouparoo-job-13-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d546d6fa24010feeeaf20dcd7aa8852a589b91a4b5b2f8a77886d9acb85ec2e03b72db2945d6c4ce37fbf5df005cfa6e9379899e799675e76de1b9aa6bfd034d4af341dd3f8b5807cf3ed9961fd427940a05879c8e30fb1b6df603336decc9727b8e3a14fe3e1b08aa2259aa355964093b32227c0af968b569cb3224339634d49d8ec749b1dcb362dd3b2ed81d9ed56580e4934a5e98b62f82b44c6afdaedbd8e56cc589c00ca286f11b63ad8db6bb39de5ec1988e0edd3b46d9989b73f4ffc3d610409cad2e17251892838e401ac104d948c233ac4d7a7f42d8a56ad5846af290144082b52a1a4553484a5118d8bbc24974cefd228cda5e6c36fcda02f9ca933f635c292629506295ac18516228102b1c940bbf5e6336de2decebdd9c89fccdd6031be7766a3d6783e5dcedc85f678ef788e26104ea0c46a43edbafc73e54fa9a8cc160217342d35f9ca5b5322bdbb3e4e3e18e181429148551c766141dfb8449d8161e308f74934e85a383200e301ee5ba88b0d62f7a0176240758652598547294b2d14a15e97a0004c83043dd28f028c4212585164d997087730eeeb3bf4f650cb5b4e05dc509e314e774dd61fbd89ef04beb774c723dfa9d71da122113795f2d3aa4fca11b24175a59fb5e44c519653264595e39cb8bee38dc6fee4a12643eed6146244368b57b55d114a381cd12897b31290cf58a806a3bba399737304979bf2731fc465c4ef83ce63393250cdbface56cfea7797cb95827ada8665359f585ef4ddc3bbde6dc7e4cf38092e2039ef5ceac5a18d1e4d8af92aaf1ffd79f462d852e9fea4e9dfe6be9784f0a5bfa94c783087248c931e9173657012bf7172e910cdfdf058590a7e1909f0b69968f88f063769243f5a468d5f88af0d230ad4ed7dc134a602ece23ccbeb18f38bb0d2a17ac2015fb5e5437a26ae4f64452519353c254b87c06ee6e86dbc6b6f10f9352aed8e0050000",
    ],
    [
      "ETag",
      "cWJtv9weyC0w2kYeGsdTig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1592525998233"
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
      "ffc595c16ee2301086ef790ae4bd8254a0d052a987d0b26da414288443b542c88d2759b34e9cda0e15aa78f7da4e28b9b48ab448b9c49ef967fc2933b2e7c369b5d03f9a1274d342af347ecb41ec7fc5a09ecd660132674aea25e3a904d436d1a0706ca2a774fee8de7974380cd3fdcbea61e4df6fc9fbed6d1125c3bf90601df7a12d6d47141891dafe63ed56e9b75a8a133027869ce549bab166fb24ab7d66e565b0f0a60f5525e1c42ad395efbb637f824ae9d0fe1e42b0c21b7be4ff21ecba764a18daf2d7054420200de1f4d799e05b089567cb2b719231e8489e8b1064093189851c0b9e675870ded1ae4eb7dfe90e46bd416f301a5df7fafd6338e3215694a72663b5445f7cc515660bfe6e4a8cbabda209a2b08b921f6b81a24a17aa25d2d2ce645382be7c87f60f81de34185e5662cbdddaa964d6a646544855f4be1ebdecd599f00c3749d75785b246c831a4044423689a6d302102a46c06cfe50667594df67836f3cf45c629119c9286e83bda0495a95d4dea6f7fe69ef15dd1ef7ddd3b7def06937361a5d2af7d4d6ee03d4d9681fb34ff16aebfebd3333fde2b9073c1f51491606747f7e2f27a7035bc40c75974c7cdac516614299183758758cfe447aab42fc24c8273703e012819de10ff070000",
    ],
    [
      "ETag",
      "NiPHACIi66cnyYUG9LDjdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ltv` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-14-1592525998233",
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
      "5b",
      "6f",
      "a2",
      "40",
      "18",
      "7d",
      "f7",
      "57",
      "10",
      "f6b52a28786962dac6d25d76d5b6886d9acd4667c60f765a60706670d734fef71dc00b6e9ba66ff05dce39df6d5e6b9aa6bfd064a99f6b3aa6e12a03bef9f2ccb07e967b40a230f76c7e4cc7f1035b0df9ea86cdbedfaffaf693170e0665142db2058ad308ea82659c80389f4d1b2167598a386375055837adba69f75b76cbeef77bad76bbcc151005239abce408bfa54cc579b3b9d7d108190b234029150dc2e283bdb96e3553ce9e8148d13ca56d2a26d1fc98f822620449ca92c16c5a8ac804f039c48846b98c63f6125f9ec237288a1ba18a5e530288109625329756c210960434cc7801ae905e9551990bcd87df8a419f3a2367e86b8b48ae171a12da7cce416491d46ebcdbb1b65035063402b1d01ebf399ea32d0a890b6da05d682377ecfa9a591017a04b10922605b58f70041542e5ddb5cb7d675207881c044924601736ef1a1d64f68c3e0e709704bdb68d030330eee1ae8ddad8207d0bac25065445903977998f1296a0a5d5b30dd25e9a1d1bb5306a0716e974fba605d8b4017771a70b1dc332f51dc2f650cf1f4e255c5391324177fdd41f3dd777e6be379b0caf7ca75a7b8054dbae4bf5a7959f94245593aa6a3f6acb1b4529a74c892a26e74e7cc7bb1afaee4345865aa31184886ca6ab7c910214093866238e6290c0c76c990f47bfbb9dbabe7b3bb9",
      "1a1d118acdb8db470a15f6f320f6585315cddfa4a7a32ea7505af5a9efb993af7ac5b93d7b17e60145d93b38eb9d598767b5f38c0ae312fe166d2ab6be8a5bfbffeb57adc2a7ab43dc49d5ef678ef794e716bedce341001c127254f08985cd134bf727de1915bebffa3c431dfe815f486556b743c4919d70282f89c685e412b063b47a96d1dd03aa442edf46d8f6fe2adf5e7ece05312472df8bf205281bb93d919455e4146979b8dafcc96ea0dbdab6f60f6695c248be050000",
    ],
    [
      "ETag",
      "yKSMmVoqCrqFoUJQq95YRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1592525998233"
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
      "2b48f73a968123994b7cd0453313b24d365f5c8c29e5c250e0b2b6cc10c3bfdb16505fda9e73eeede93d3d59b64d0e591993179b4459fa57036fee52902b7d0841d4b9146aabb01440ee7535489aeaea4d52ae22314f0e8be96159fb0d5b6de2e83899745582fd424155dd492185930cf25828fc63b0ddf3462b6901fac6dd8e1b437343afc9a632da22f8987edf0a05c646785f07c17416cc492fb566dfaab5350fd9631442021c4a06d7e7541cf7c0e4d2cc2d6851e5e008ac3903d19be8c64e4e39d615e5888ea21cf7c971fdb1e77bfe78fcec8d4643798e8cca0c4bddb1fe22177f8992e6211ef5ecc4edc2e11deca2188220c94d3ab7f928e95f372bc707d72317beed4f5b6b40dbabe3ac91203e39aa81049831468f3e191279453db1d481485e83a119555ff69649c525341760b5d61934f7229f1e020000",
    ],
    [
      "ETag",
      "ZfnQbsEfkFAkIu5ycQZdbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "1dcfdd6e82301800d077e9b51814dd6477a030e4a738b2c0c24d83e5031994622b5558f6ee333b6f707e50412948496ebc851ebda1a9589b4bba0cf8ced62d2863c675f80a99079f7275cc7dde1362463e6927a6567e1d1ea670e4c17c59a7e7c4a3a1da5d72f798f76de63af3de52ce23a853f035a2194556657c781cb0da8e825dd9abe08d4e1537aaf0d4613b9b72472bf67549e639109d3c754cbc27ad72748c136deef00b7c7c43d4ddaf4d636cd292dc87aa77a916bbfc6c251b11a9d29465af63c71be33cb2b0440b048fa1112049f39c195bd35ca0ff26b94d033caf36140204fafd03105bfcb405010000",
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
      "Fri, 19 Jun 2020 00:20:29 GMT",
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
      jobId: "grouparoo-job-15-1592525998233",
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
      "8d546b6f9b3014fd9e5f81d8c7b581901754aad628a56bb44056425a4dd3848c73a16e09a6d8b4abaafcf7d9260fb25455a508c5f7de73eeb90ffbada569fa23c997fa99a6c7247daaa07cfdf24063fd447a80a3547a58ecf9e6d38fc073062f8ef1957a7fddfcfee6fcbc8e220acdd0aac8e094d1aac4c0ce16f3765ad2aa4025a5a782f0b4d3173fc7ea5b7dc7b1ad6eb7c632c89229c91f25c33de7053b338cad8e764a699a012a086b63badad98d67cb284afa009833e330ad213231e3e3c4df328a1127343f5fcc6b111583328215229994b1472fe38b43fa3641ab762aa29f09068431ad722ea5d53498e60949ab52910ba637611466a579776c18f4b93b75c7a1866956adf228472b38d19688a388bf16a05d05334f9bf857b3c01b8593991fcdc7d7ae376a8f67d385e7cfb5bb6b3770358ee20c14563bd72ed4c91707a548655b02e324579a42e96d2811de4d1f27ef8c70472149842a069bb068680e50c7369d38898738b1bbfd3831218eed78d847ddd8c44e0f7acb1850934129abf128a7b96376fa38e9e1a86781f8c0c08ceca185a324b651b78fece1a063eb1bf47a57cb4b49385c12565046364dd6ef8249e84661b0f0c7a3d06dd69da02ae397b5f2c3aa0fcae1a2414da51fb5e4485151122a44a9714efcd00d46e37072db9021766b0a29c2aff327b95d09ca18ecd1a814b3e2507a742907a3fb23cfbddc83d5a6fcdc063111f17ba7735f8e0894f357b51ccdff304f2816eba015f56c6aab3e0f8389ff5d6f38d7efd3dca2ac7a87e77963962d4c48b6ef97a26afdffef4fab9142175775a34ebf59b8c12f89553ee90920811272bc4ffa89cd95c0dafd899748846fdf0589104fc32e3fe3c22c2e",
      "1166fbecb884fa4a91baf135e1c0b49c5eafb32514c0921f470cac5dc4d1db2073c10a72beed45fd46d48d5c1f48aa1a72144c868b6be06f66b86ead5bff0058732bc2e0050000",
    ],
    [
      "ETag",
      "sbMN0qKRM96w9/+oMxEnhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc595c16ae3301086ef7e8aa01e9b406327dda6d043d266bb66dda44d5c582821a8d6d8abae6cb9929c124adebd92ec34beb4183660309666fe197d788467de9d4e07fda31941971df44c93d702c4f62401f560360b900553522f39cf24a0ae8906851313eddd9e9eba0afe0cbcf8f76b72e3079e1fc2c3d5551925a3bf90621df7ae2d6dc7141891da7eb276a7f25b2dc329981323ce8a345b5bb37b90d536b7f2325cf8b3dbba92726295d963108c27c11455d2aefb35846085d7f6c8ff43d875e55430f4c29f171083802c82c357e782bf40a47c5b5e89d39c414ff24244202b88492ce544f022c782f39e76f5fa43fd8cdca13b1c8d2e5ccfdb87331e61457966321e97e893afb8c26cc1df4c8951df2d2f41947659f27d2d505cbb857a89b4b431d994a04fdfaefb4da03f0bcf07b5d86ab7726a998da93115529577df8c5eddd591f00cb749d7bf0a65ad9013c8088856d0345f63420448d90e9ecb35cef386ecc97c1e1c8b8c332238252dd137b40d2a539b86d49fc17c7cc4bea2fb7dd37ffa661c4e8f85954a77fb86dcd0bf9b2ec3f1ddfd9770fd5e1ddafc64ab40de0baea788043b3bfa67838be18ff333b49f45d7dccc1a6546911205587784f54cfe4595f6c598497076ce072581f5b4ff070000",
    ],
    [
      "ETag",
      "3G++2teX43fKqgDIL3ITeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ios_app` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-16-1592525998233",
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
      "5b",
      "4f",
      "a3",
      "40",
      "18",
      "7defaf20ecab2db494164c1a35caba24bd2da51ab3d9b4c3f0c18e0283cc50d798fef79d815ee86a8c6ff05dce39df6dde5a8aa23e912c54cf153520f17309c5ebb7471aa867d2031cc5d2a3bdcc6f1e8c7992dc9a77fa2485ee460ff9cb685447912a9ba1344fa0cd68596060e7cb45272e6899a382d2b6006c7707edae69f7cc9e69db56cf30ea5c06493426d99344f8c379cece356dafa313531a278072c23a98a607bbb6e96979411f0173a69dd26a8289699f135f2414234e68365a2e6a11258362052922899471cc0e83cb53f80e41692716d11b8201614ccb8c4b69350ca65944e2b2a8c005d29b300a73a5f9f0db30a80b67ec5cfbca9a50b64279be56105356ab02589970e5bb379b286b51674412606be5fe87e339caba92b95646ca85327627aeaf742bf20a3804c64956d1fb2848a0412abcbb96b91f4ceb00214110470c7661aba13e405d4bb7832818e2c832cc20d22108ac60682223d0b1dd877e18006a2270c95de7a38c669605b611f674bbab0fb1159af630e8813ec046bf17f461680f2c33d42301b143d81eea792908871bc272cac8aea7eabde7facecaf796d3eb2bdf69d61e21d1b69b5afd69e5272571d1a4a6dacfdaf24e515e102a4455d373a7bee35d5dfbee5d438658a531c408bf2e9ee53245286170cc46054a814331a1a11c8e3a9f2d5cdf9d4dafc647846a3be6fb4826c27e1dc41e6b6aa2f9aff9e9a8eb29d45675e17beef4566d38b7671f",
      "c2dca1a4fc0067b333abf028f69e12a65fc2dfaa4dd5e637715bff7ffd6e35f854718c3ba9eacfa5e33dc8dcca273d1e445040868f0abeb0b032b1767fe1ad11e1fbcb9719e2f80ffc8c0bb3b81dcc8eecb880fa92485a49ae0107ba3130fae61e502416fc7d8469e9fb8877d72fb920858cef7b51bf027523b72792ca869c2a4d868bcd9fee06ba6d6d5bff007e257c65c2050000",
    ],
    [
      "ETag",
      "/wPDY3PllG5V0Mme1v0dtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1592525998233"
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
      "147de72b48f73a1e80b0c8121f7471d91622ca627c588ca9786138e8c5b66c31867f5f5b4079697bceb9bdb7e7f46ad936f929d8913cdbe450e4e706f8e52107b9d6870444534aa1b61a9900f2a8ab41d25c576f386e197f2dd62bf76319bbb9773e4f583e9d765522fd868aaabaab420a67059447a1f097c176cf1b8dd10a74c7fd9e9b81a643afc94b6db4791c478bd9722c557834d2721345b379b420bdd49a7da7d6d63ce584870432e0c052b83fa8e6788254be1be7825675098ec086a720fa21fa6227e71c9b9a724447518efbe4b841e8055e108613cff787f212532a0b64269c4f729b2f51d232c13fed9eb85d3cbc835d184314241be5334e4849bffab2e40d901bdbf6a79d35a0dd7ddefc2241ac382a3b028c09cf0fc890c70b6abf52c7a17b1a3aa5eacbde0aa9b88c9602acd6fa07211ab8081e020000",
    ],
    [
      "ETag",
      "UroWnrFiQP1JNO1g2qq8ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00000002ff1dcfdb7243400000d07fd9e7c8a84bd037aa4145c4bdf1b2a37683c806bb68e8f4df9be9f983f3038ab2c48cc1b16bf11dbc82a510b46db9753bd5e075a4149f06859923d3793afb39615db087b39e707e43e4f0c491549ba5e6cd2ee383e7cb2d5f535ad588def4485899c2a4740c620f65c951348397bb8b9ab01ee6a39cda2e41177b9d7c67faa0ad19d52b1f7096b21f9c5c683d3cefc2320a4c6bbca63093faefee4b52c58a86e476a9f062e193780dd1008db815d4f743627ae22326bb133b63dd918d3c30b911276003f0a36f2866b079ce4459d336e0bf09c7a5c7cfab810b8a29f8fd031d0da5f705010000",
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
      "Fri, 19 Jun 2020 00:20:38 GMT",
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
      jobId: "grouparoo-job-17-1592525998233",
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
      "ff8d54db6e9b40107df75720fa1a5fb08d0d91acc6754863c9c629c689aaaa42cb32d04d304bd8c59515f9dfbbbbf882eb28ca1bcccc3973e6b2f3d6d034fd8564917eade921495e4b28b65f9e69a85f490f7094488f9198b1f18d6c12f3a1b799b030cd8cd5643c1a555144a1195ae72934192d0b0cec7ab56c25052d735450da14844d63d8344cbb6b764ddbb6babd5e856590c63392bd48863f9ce7ecbadd3ee86825942629a09cb016a6eba3bdbde9b6f3823e03e6ac7d9eb62d32b1f6c789bfa614234e68365a2d2b11258322803522a994714247e1cd397d8ba0752b11d11b8201614ccb8c4b69150da6594c92b250e482e94d188559693efed60cfad29939135fc3342dd75990a1355c6911e228e0db1cb43b6f31d7a6eeddc29b8ffde9c20d96937b673e6e4d16b3d5dc5d6a4ff78ee7681c852928ac36d26ed49f2b7e9422952d02c649a634f9d25b5322bcfb3e4edf19e191429208550cf661c1b0334086d5b1c3381ce2d8ea9961dc8130b4c2a1897a6107db7de84721a03a835256e15146331345c8ee5871100e2223e877b115585d044118d9d66010752c130c7d8fde1d6bf95b100eb784e594917d93f5276fea3b81efaddcc9d877ea75c7a84cf96da5fcbceab372b868505de9472db9509417840a516a9c53d777bcf1c49f3ed66488dd9a4182f076f92ab72b462983131a1562561c8a398de46074773c776e4f60b5290f872026227e1d759eca118172feaa968bf99fe7f1c5629db5a29a4d65d597be3775bfeb35e7ee7d9a479496eff06cf666d9c298a4a77e29aac6ff5fbf1bb514ba78aa7b75fa8f95e3fd9458e5931e0f622820c3a7a49fd85c09acdc9fb84422fc701724429c86637ec685593c22cc4ed97101d5932255e32bc241a7",
      "67f5bbf68150000b7e1961f68e1117b741e6823564fcd08bea46548ddc9d492a6b72144c868b67e0ee67b86bec1aff0057d91bd0e0050000",
    ],
    [
      "ETag",
      "1g5f1Bivg5P3vCsbln1UCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc595c16ee2301086ef790ae4bd821628a165a51e6097ed22a5c0427aaa1032f124ebd6c9a4b643852adebd76124a2ead222d522eb167fe197fca8cec79735a2df2cc13467eb4c88e472f19c8c3b708f45fbb5981ca84566649315140da361a348d6cf412bfafe72eeb46f1ee0ee3e797ee308b07afb7b745940afe414c4ddc9bb18c1d72104c19fb31b75ba53fd7121a833d314091c5c93637db67591fd25c5efbabd9fcaeaac4c87265fee079e3893725a5746c7f0e6154d36d7ee4ff21f275e39430f284bb1584202109e0fcd7a9c42708f42c2fafa2712aa0a3309301a81262130b399298a55422768cabd3bbeef4dc51dfedbba3d14dffeaea142e30a09a6362331ed6e483af5153b1c2575b62d2eb174d90855d94fc540b1256ba502d9191f6369b33f2e13bb6bf089ccdfde1a0125bee364e25b33635e452e9a2f7f5e865af2e8417b449bab92a5c34428e2061201b41f3744b1993a0543378545b9aa635d993c5c2bb1499264c22670dd1f7bc09aad0fb9ad4dfde627cc177c5bcf775eff4afb13fbd145669f3dad7e4fab3fbe9da1fdf2f3f859befe6fccc4f0e1ad452a299220af2d9d1eb0e6edceb61979c66d14fb4b346db51a46506b93ba06626ffe1daf8422a143847e71d7076753dff070000",
    ],
    [
      "ETag",
      "Po/SN5d0gmbGomkq06um4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `date` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-18-1592525998233",
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
      "5b",
      "6f",
      "a240187df75710f6b58aa2283631adb16c97446d17b1cd66b3d119f8864e458632435bb7f1bfef0c78c16dd3f40dbecb39e7bbcd5b4dd3f4154d42fd5cd3318d9e72c836df1e19d6cf9407048a9447ac1ed07cba4adcd135262fc66672f53712c3c1a08ca2453647eb34863a677916003f9fcf1a51c6f214658cd52560bd65d75b56dfb44cabdfb7cd76bbcce51093314d560ae14188949f1bc65e4723622c8a01a5943702b63ed88d67d34833f60881e0c629ad2199b8f139f145cc0224284b06f3592922e7902d608d68ac641cb3437c790adfa068dd8864f4330d000501cb13a1a49530014b088df2ac0097486fd228cd85e6c36fc5a0cf9cb133f2b56588042c35c4b5c522039ec742fbeedd4cb4a52c92d018f852bbffe1788eb62c342eb58176a18ddd89eb6bad82b9400d810b9a14dc3ec2315418a577d72ff783511d2014081288c32e6cd16b7651cb6ef631c1bd80d86d0b9326606ce39e85dab819f43bd00931a02a8250dc653e4a5862b6fa9d90f449afd7469d6e1b113becda980418b5cd90f43a664bdac0b2f41dc2f650cf4b46055c519e324e770dd5ef3dd77716be379f8e86be53ad9d20d9b6ab52fd69e5272509d9a4aadacfdaf24e519a51264515a373a7bee30d47be7b579121f7680c110a36b327b54904c51c8ed928436b10904d58a886a3dfdecc5cdfbd990ec7478462356ef7915c86fd3e883dd65445f337e9e9a8cb2994567de67beef45aaf38b7671fc2dca138ff00e77967d6e1512e3da3bc7909af459b8ab5afe2d6fefffa53abf0e9f2127752f59f",
      "73c7fba5720b9ff27840208324382af8c2c2aac4d2fd85874686efcf5e65c8cb3ff07321cdf276027e640f32282f89ae0bc92560b7d9b12cdbda03cac44cbc8fe899e63ee2dde92b2e584322f6bd289f80b291db134979454e91a6c2e5e64f7703ddd6b6b57fd45c0ee3bf050000",
    ],
    [
      "ETag",
      "tkhaUNknICGbfw/yMDzgtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1592525998233"
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
      "0000000002ff4d515d4f8330147de75790fa2a11584836933d6c3a3fa7d1e97cd02c4b291764422fb6c56559f8efb605b6bdb43de7dcdbdb73ba775c97fce43c21972e89f3ecb706b13bcb40bd9ac302645d28a9b70ab904726eaa41d1cc54cfe2277e7311541ff127bb4d968fbc60f1c3763c6eab24fb8692eababd461aa7391489d4f8cb62b7e3adc66909e6c6f55ad881f6864e53bbca6ad793f7d9295f6262f9e7e57c3e99ce67a4931abbaff4dad8776c305e400a023883e36b2a811b60eadeda96b4ac0af024d68281ec8698c656ce04d61515889ea6bc60e805d1288cc268341a8683415f5e20a32a476e3a966fe4305fa1a2c502b7c63a09da6c440bdb24fa1c487a12ce693c5afa33cda11ffa9e1f7a7e400e5ad39d564e8f56c7a9d39d02f922509b9260ad0cfc88f4a95ca171ad4c284ad4606946f5afdde54a73292d24388df30fd1ae1c9621020000",
    ],
    [
      "ETag",
      "EbMnF/1pVbZcGdUKnlcbJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "4b7282300000d0bb642d0e15a5d21d881d30044404d10d1362f82abf04053abd7b99eedfe6fd004c08652ce275492bf00546bc52966409ebad26aac9ab781cadd6f4aadd3a579f2f1d2296ad8b1b35d1a17eee894efa4c2dfa526cf7376604713043b7b69c1574f9bbf751c3a22e1c4c43943c64b1c9b83cce7bd9c2713c49d8f6640f5dcdef249b6ab74f4369624fb9e0c64180c219862de1a8e0472cde9d0157bac3fa4698607c3d6c7677fb4ef23addd85d60caf2397b5fd2b1fcf461a89dbc72fbe147be9b4801010b408726ef288bf279266d146501fe9b111f1b3a5f358a3bda81df3f451d330105010000",
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
      "Fri, 19 Jun 2020 00:20:46 GMT",
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
      jobId: "grouparoo-job-19-1592525998233",
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
      "00000002ff8d54db6e9b40107df75720fa1a1bdfc02692d5b80e49ad1a9c609ca8aa2ab4ac07ba0e6609bba48a22ff7b77175f701d457983993967ce5c76de1a9aa63f916ca55f6a7a4492e7128ad72f6b1ae917d2031c25d233bcfd9675b23559cfee5def877567cc8cd44c46a32a8a2834439b3c8526a36581815d2e17ada4a0658e0a4a9b82b0d9b19b1dd3ee9a5dd3b687dd5eafc23248e319c99e24c31fce737669187b1dad84d224059413d6c27473b01b2f5d232fe81a3067c6695a436462c6c789bfa614234e68365a2e2a11258322840d22a9947144afa2ab53fa16419b5622a25f080684312d332ea5553498663149ca42910ba637611466a5f9f05b33e80b67e64c020dd3b4dc6461863670a1ad1047217fcd41bbf1e7ae36f56ee6be3b0ea6732f5c4cbe3beeb83599cf96aeb7d01ebf3bbea37114a5a0b0da48bb527f9ef8518a54b615304e32a52990de9a12e1ddf571face080f149244a862b00b0b076d0b75866d3b8aa3018e873d338adb1045c36860a25ed4c6761ffaab08509d4129abf028a359d46be3f6d084d08acd55d8376d33b4cdb8175a26b2fb7dcbb2ad7e57dfa1b7875afe1684c33561396564d764fdd19f064e18f84b6f320e9c7add312a537e5d293fadfaa41c2e1a5457fa514bce14e505a142941ae7d40b1c7f3c09a60f351962b7669020fcba7896db15a394c1118d0a312b0e854b577230ba37769deb23586dcadd3e8889885f079dc77244a09cbfaae56cfea77902b15827ada8665359f545e04fbd5bbde6dcbe4ff380d2f21d9e979d59b63026e9b15f8aaaf1ffd7ef462d852e9eea4e9d7ebf74fc9f12ab7cd2e3430c0564f898f4139b2b8195fb13974884efef824488d370c8cfb8308b4784d9313b2ea07a52a46a7c4568b5c5ea76067b42012cf879c4a06fef23ce6e83cc051bc8f8be17d58da81ab93d9154d6e428980c17cfc0dbcd70dbd836fe01cc",
      "539cd8e0050000",
    ],
    [
      "ETag",
      "8GBn1njijLQMNK6P/L/l5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1592525998233"
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
      "0000000002ffc595516fda3010c7dff32990f758904a5a58a9d487b0d20d29850ed297550899f892b97362cf76d858c577afed8492975691869497d877ff3bff943bd9f7e2753ae817cd09baeea00d4d7f1720779f52d0dfed6601aa605a9945f05c01eada68d038b5d159a876fa5ffe978b1f920c37b3e06ee29f05373765948a7f42864ddc8bb18c9d50604419fbc9d99dcaefb41c67604f8c392bb27cedccee51d63be1e465b498cebed6958c13a7cc1ec3301887135449fbeefb1082355ebb23ff0fe1d69557c1d033df2c200109790cc7bf16923f43aca7aebc0a6782414ff142c6a02a884d2ce554f24260c979cfb87afd51af3f18f9037f301a5df917178770c663ac29cf6dc6e312bdf135d7982df81f5b62d4f7cb26c8d22e4b7ea8054a6a5da897c8485b9b4d097af3edbb1f044e67d1f0b2165bed565e2db33135a152e9b2f7cde855af4e8467b84dbab92a94b5424e2127205b4153b1c6844850aa1d3c576b2c4443f6783e0f4f45c639919c9296e85bda0695e96d43ea5d380f4ef8ae98f7bee99dbe0da2c9a9b04a9bd7be21379ade4f965170fff02edc7c57c7677ebcd3a01e24375344819b1dfdf3cbabc1e7e1393acca22fdcce1a6d4791960538778ccd4cfe46b5f1259829f0f6de2b1b9e8153ff070000",
    ],
    [
      "ETag",
      "mLsytznxopZrd6bNAFE2+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `stamp` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-20-1592525998233",
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
      "ff8d545b6f9b30187dcfaf40ec714d422024a152d4562d6bd912da11d26a9aa6c4381fcc2dc1d436d9a22aff7d36e442d6aaea1bfe2ee79cefc64b43d3f427922df4534d8f48f25c005b7f7aa4917ea23c2050a23ce3885fadd1f8b3d75e99dfd8cd9d7ffd75ea27c3611545ca6c8e96790a4d4e0b86819f4e27ad84d122478cd2a6046c9a46b3633ba66dda8e33302dabcae590c623923d2984df42e4fcb4dddee96825942629a09cf016a6cbbd5d8a68e78c3e0216bc7d4cdb964cbcfd3ef1594a31128466c3e9a412517060335822922a1987ec45747e0cdf2268d94a64f48a604018d322134a5a0583691693a46025b8447a9146692e35ef9f35833e7147ee65a8cdb9902c730d716d3663c08b54685f82dbb1369755c624053ed71e6edcc0d5e6a5c8b936d4ceb49137f642ad535297b00be08264257988a2146a94d2bb6d98f7c6acf6100a0409c4611b36eb1b3dd419184e14477d1c0f2c3b8a0d88a241d4b7911519d8e942771101aa2308c55de5a38c66ddbee9583d24014ccb1e2c222bee98b8ebc877172cc7b6c0361616ea5bfa1661b3afe70f2302ae08cf2927db8eea0f8117bab33098fa9717a15baf3d46b26d5795fae3ca8f4a12b24975b5efb5e595a29c112a4595b3f3fcd00d2e2e43efbe26432ed2081284d79367b54a314a391cb211434b10c0c674a186a3dfdd4ebcd0bbf52f4607847237ee76915c86fddc8b3dd454470bd7f9f1a8ab2954567d12069e7fadd79c9b933761ee515abc81b3da9a7578945b4f0937cee16fd9a672efebb88dffbf7e356a7cba3cc5ad54fdfbd40d7ea8dcd2a73c01c4c020c307051f58589558b93ff0a791e1bbbb5719f2f4f7fcf2fc0491b783f9811d33a82e892c4bc91560cfe8f6bbceeee6542213af237a",
      "3d6717f1eaf615172c2113bb5e54ff80aa919b2349454d4e99a6c2e5e6fbdb816e1a9bc63fad5a1a67c0050000",
    ],
    [
      "ETag",
      "MbsDyaM+I/v2KrHPNGJUNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1592525998233"
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
      "515d6f8230147de75790ee756c083691253ee8e2a2096ece8fa7c5985a2f8803cadaa22186ffbeb680fad2f6dc736e6fcfe9d5b26df49be407f466a37d12ff95c0aba718e4b73e2c4194a9146a2b582e003d6b3548126b753a9b56fd8fd1d7d9a747d79f87af122ef8321c362a418f9011a5bb2aa47094407a100aff186cb775c3e524037de36ec7cd407343cbc9aa30dc7a369facd6a3f9e291ccd8c1909f9b301c8dc3096aa9daec5bb5d6e63127b65f42041c720af727159c9d80ca99f12e4856a4e00856720aa21da21b1b3ae6ac2c0867cc5125c7739d1e0e3cece1201878bedfc95346894c58ae3b362b749b2f9924e9925db47fd46b02e20d6ce2e8c240d143428f1929ea6c9a5ff0c0c538e805fd49806e74dd9eb65687b6f7c1e34a825870a67c09306e7c17a32e9877a68d4b9d8be425983225eaf7a68954b588a402acdafa073adb3c7929020000",
    ],
    [
      "ETag",
      "lIHy4FAOv3ch03ML/tew5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000000002ff1dcf417282301400d0bb642d8e42a0d21da2ad4a0b0805a31b26c21f4c61481a4890767af73a7d37783f889625f47d31f0063af48c266abaf3721ef0d57ae101d45966f894f4bebbb52e10bfd174a74edcaf79970eba1b0d53e2111737aa8d8fa6adc3acf72b9649f5a9840cd677619e5880454b3b1beb31c08bdbc8a8932885791e3af2d5858dc30ed199d513bcb4bb2969c627aea3fc5c5eed95773471595c6d4b1e8c4ad346a50ec98da4136c23eb2df6c597432e8459cb2a2e97848692bc7b9384ef784fa2bdc61ccd10dc0593d017ec31b36cd79da1ff66314c021ed735500912fdfe013de4440005010000",
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
      "Fri, 19 Jun 2020 00:20:48 GMT",
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
      jobId: "grouparoo-job-21-1592525998233",
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
      "0000000002ff8d54db6ea330107dcf5720f6b549480209548ab65142b7480969096977b55a21630c750b9862d35555e5dfd736b9c0a6aafa063373ce9cb978de3b8aa23ee33c522f1535c4c94b85cab76f4f24542f84073190084f728b5174f373ae5bd6fcfa7931239eb59ddd4da7751496680ab222455d4aaa12227ab9ddf4929254052809e972c2ee70d01d18d6d0181a96650e47a31a4b511a2f71fe2c181e192be865bf7fd0d14b084952040a4c7b9064477bff75d82f4af28420a3fd76da3ecf44fb9f27fe9e12081826f974bba94554149501ca004e65b14774145eb5e97b1864bd8447bf62880084a4ca999056d34092c738a94a49ce99deb9919ba5e6e36fc3a06eeca53df71548d22acb831c64e842890003017b2b9072edad578ae35eafbdd5cc77d66eb099dfd8ab596fbe5e6e57ee4679b8b13d5b61204c91c42a53e54afeb9fc472a92d9224419cea5265f781b4ab877df47e783111e2904095745d13e2c9868633030352b8cc3098ccd9111c61a0a43339c1860146ad0d2911e85083419a4b21a0f72929b268c46a11e050323d6027da04f823032b4009a7a6c8d011cc79aa6eed1bb632d7f4bccd002d38250bc6fb2fae039be1df8ded69dcf7cbb59770caa942d6ae5edaa5be530dea0a6d2cf5a72a6a82831e1a2e4381dd7b7bdd9dc77ee1b32f86e2d5102e0dbe6456c570c528a4e6850f2593154ae482406a3bab395bd3881e5a6dc1e82288ff87dd4792a87078af9cb5acee6dfcee3f3c56ab5a29e4d6d5537bee7b83fd48673f731cd3d48ab0f785ef766b5e0dd7ae41da62daeceff5f7f3a8d1c2a7fab7b79eaddd6f67e09acf4098f876254a21c9eb27e617505b0767fe114f1f0c36110087e1b8ef929e366fe8a203d658725aadf14ae3b5f138e35ddd427d68190034b761e6158c621e2ec38885c2843393bf4a23e127523772d4955438e848970fe0edcfd10779d5de71fd2e357b1e1050000",
    ],
    [
      "ETag",
      "gPiedHXC499CFkDAoR9UAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1592525998233"
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
      "00000002ffc5545d6bc230147defaf90ec55c1efe9c087bab9ade047a715064324b6b7b5da365d922a22fef72569d5be380a13f6d2e4de736e0ef726a747ad54425b3f72d05309ad7cef3b017a78f0807fc8cd14581270269698440c5059b281634fb2b77bf3b341f17ab2f31aeba6df1de19969e8bd5eca62f61a422c78471189d8f521709888bf545ccaf20a8b7008f2449b0449182d5558bec2fc102b78664d8df15b1e0989a390f17c38d4fbc301caa053f9b68883395eaa23ff26a1d6859689a10d594dc1050a910dd7ae634a366073438d97e1300ea0c248426d6099882c4c618f9224c694908a4855eab54aadd5adb7eaad6eb7536f34cef480d898fb249215f319bae873c27130257b3962d44eef80a6613af1f328909bbb84fc8404b493c5be832eb953f917a231b6dacd1c37db2db45c6561553129d70f60f94feae24ad658bcf062dad933b993380e4912f182d2afc3897ec7c6851b8a36fda25b837bc9322ebc5050d732468399a58fcc9be2e2bbb89aa07fe0c04c4a84c7182867d5aacd4eebb15d4567a73e13e9442e8dca69022a6d63f1c77af7b9c8b93860a09db41f14f207dd1d050000",
    ],
    [
      "ETag",
      "kwPX3rahOvg3h4i9MaSPIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-22-1592525998233",
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
      "10fe9e5f81d897566b02214042a5aa8b52b6a1a549979076d53425b631d42d606a9b4e5595ff3e1bf242d6aaeab7e4ee9e97bbf3f1d2d234fd81e4917eaae990248f2566cf9fee29d44f54060b90a84c3fbccd7cd74b27bfd850dcdd5b86677efe919c9dd555a442739015296e735a3284f9e962de49182d0bc0286d4bc2b665b5bb8e673996e37903abd7abb11ca7f198e40f8ae14e88829f1ac6d64727a13449312808ef209aede2c69365148cde6324b871286b48256ebc2f7c9e520404a1f9d9625e9b2839664b9c01922a1b7b7404bf1cd27708c83a89ac7e2208038468990b65ada641348f4952b28a5c32bdc8a00c579e777f1b017dee8ffd51a88da6c3b13f1ff947c3eb6f472b9029d6d5f189661e6b806bcb25c3bc4c85f67536bdd4568534720738e62bede6bb3ff36584d198a47849a29576a69d6be3e03208b56ee5a9d28b301724af5c8500a6b8e1456637930cde58e28e42910021553765cbbee982eec0f4600cfb281ef41c189b18c201ec3ba0074de4d9d88e20064d06a1b46b3cc869ee42676079314476ecc5d836a31e8ce0c0f6ec3e1e44d07662d745ae0b7afa8661bdebe72f23025f105e504e36a3d66f6641e82fc3d962321a867eb3f718c8e15dd4ee0f3b3f6849c82135ddbe3796578e0a46a834552d359884fe6c380a83eb860df9c2c63801e879fea8de580c528ef768c040860566973452cbd1afa6f3200ca693e178cf503d9aab6d259765bf7766f73d35d9c2e7e270d5f516ea",
      "a8b2e9da7a23b73e7993e51aa4e51b344f9bb0de3de068fdffeb4fabc1adcb73dcb8d27f2efcd9adc256399599e118339ca3bdda07dea602d6e90f7c6d64f9f6f615429eff4e9f0b19966782f85e1d315c1f0dc9ea562b42d7747a5d7b7b5e0ac8c4eb8ade5ef2d5fd2b2d9ce15c6c67517f07ea41ae0f2c950d3b154c95cb473e0926df2af3ad75eb1f59ca8b8dc4050000",
    ],
    [
      "ETag",
      "7TYmE69lNXrAthj2/90+Kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1592525998233"
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
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "487d1575103267b2876dd1cc483665f2a259960e2e080217dbe2dc16feddb6c0b697b6e79c7b7b7b4e8f866992efb48cc88349b669f25303db5f2520ded4c1075ee782cbadc29203b956d52068a2aacbf9c7f2e007c19f18beb8b719dbae66d562371eb7553cfc8282cabaa34412c729e41197f85363b3e3b556d202d48d9b0dd303f50d9d26f695d69ebce5e4fd522830d2c222f0bcc9d47b249dd4e87d2dd7463f24c3ad0f31302843383fa7629841289eb56f4e8b2a078b63cd42e0dd10d5d8ca09c3baa20cd1929465dbd6c01dd9aeed8e46f7b6e3f4e5398654a458aa8e60454ef3050a9afbb853dec9a00d87b5b08da20f82c417e95ce623a55fdd7c3374c8896dbad3dae8d1fa3c6fba17c05f194a3b1cb409c7be237d1e33547e858a43b01a341d52f961f354482ea63907a331fe016d554c661c020000",
    ],
    [
      "ETag",
      "nHZOzRUUxt7K5/jrbSCpNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ff1dcfc97282300000d07fc9d93a0884a53776904d4659ca2543438a80184a50c14effbd4edf1fbc1f50614c184333edc915bc83b5e2d52ddefa54d1398d48eed0e59ca07be63cfb9033106d6e2eb4517aae8628eb0251329a7ec7cfb82c0f638245097aa12d1e3dc7daa974b1d4cb03354ecc34f37c70dfd24c70a3a2866489ebdcbcd751d87e0f1f548a72a38beeb121c481cc0ae5935e3a265857ac775990da0e8c1e79e7df4ec5e96b2871a23ac7967b6aeb983c65c52964610cf7a2f9b07952d7f39ee52886714f4598820d20cbd84e84a1f63513a0aa6ec07f13cdeb485e579d541399c0ef1fccc27bc305010000",
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
      "Fri, 19 Jun 2020 00:20:54 GMT",
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
      jobId: "grouparoo-job-23-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545b6fa240147ef75710f6b58a05af4dccd6285dcd2a6e11dbbd644366c6814e1719ca0c6e4ce37fdf990111d6a6e91b73cef9bef39d0be7b5a169fa1f126ff51b4d87247cc9707af8f44ca17e253d9883507adc281ca3fdcfedd7e9e1fbf320e8cfbcc3ddec7e34caa3884233b04b22dc64344b1166379b752b4c69968094d2a6206c9a56f3ba3b34bb6677381c98969563198e820589ff488627ce13766318271dad90d230c22021ac85e8aeb41b7bd34852fa8c1167463dad213231e3fdc49f238a0027341e6dd6b9888ce1d4c73b402229e38cdec2db3a7d8b805d2b14d17b82304088663197d2721a44e3808459aac805d3ab300ab3d25c3e2b067d6d2fec89a7211a65bbd88fc10e5f695bc081cf0f09d6eedcd5529b3b772b7739f6e62bc75f4f66f672dc9aac169ba5b3d61e67b66b6b1cc0082bac36d26ed5cb110fa54865db62c649ac3479d25b5122bc451fe76f8cb0a490244215c34598df6ff7c0f5a03d8401eca360607561d0c6100e60bf0b2cd846c30eee6c21065506a52cc78398c63d10f42dc1e29ba6d5f33bfd1ef441a70f7c802c3884724c26d00bf4b1ace56f4a389e129650468a26eb8feedcb37dcfdd3893b16757eb0e4016f169aebc5e75ad1c2e1a5455fa5e4b2e142529a142941ae7dcf16c773cf1e60f151962b7163804e8b07e91db158088e1331aa462561ca74bba9583d19df1d29e9ec16a53be9d829888f855ea3c972302e5fc552d17f3afe7f1c462d55a91cf26b7ea6bcf9d3b5ff48af3f836cd0388b23778f685594f44b79e4487598dabf1ffd7ef4625872efed5429e7ebfb1dd1f12ab7cd2e3e200a73846e7ac1f585d09ccdd1f384522fc74182442dc86323fe3c22cfe22c4ced9518af37f8ae49dcf097bed6ee7ba57120a60ca2f23acf6e01471711c642ebcc3313ff5223f1279238f354959458e82a953bd719c6288c7c6b1f10f6c2a34eae1050000",
    ],
    [
      "ETag",
      "RlgAcvZdKDyXj8f7HTyFHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5544d4fc24010bdf75790f50a091f16c1844355044c458472308690b59d62b1ed94ddad4a0cffdddd6d815e344d24f1d2dd99f7665f66765fbf8c4a85bc05b1472e2be425586d5260dbb3158847b599024f43c1e59260cc8154151b045d2976b4c181cdefa84f9fbae6b63dbcb13e3bebc75e2f6371f715222a795f3292b11f40e871193febb892e73516d308d4892e8669142f75583dc2629b6878e64c47e3411189d0d3c8786edbd695dd2739b4abfe2ce2514197fac8bf49e87561e462648d2f53f08141ecc2b1eb84e11a5c31d2e3e5344a42a8714c990b3c17518519bc6298269421d664aad66cd51a66b76936cd6eb7d36cb5f6f4105d2a028c55c57c460efa02050da7f8a1464cdad91db02ccc26be1f05f10b97509c9084de5571e091436e57fd85381a3bedf30237df2d8c4265695539293f0861f94feaf24a5ea97ce1e5b4f3677222711a611a8b92d2b7f68375c2c6a51bca367d6339fd53c97221bd5052d719ddf7678e753ff9515c7e1747135c6d05f00943e9310eda598dfa79c7bc68d7c9dea9d7a89c289451054b41a75d2aff58c340c89c4f430ec6cef80616577ad71d050000",
    ],
    [
      "ETag",
      "mqoGLsJafaY95y6HDAx8jQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-24-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d546d6f9b3010fe9e5f81d8974d5ade48805029eaaa94b54c69d225a455374d89710eea1630b54dbaaaea7f9f0d7981b5aafa2ddcddf37277be3c37344dbf27e95a3fd2f480440f39b0a74f7734d0bfaa0c0814a90cfc3a1f78fc11657fb3eb1f71dacf36673751341c9655a440739464313439cd19067eb498b72246f30c314a9b92b069f49b5dd3314cc3749c81d1eb95580e713826e9bd62b81522e347edf6ce472ba2348a016584b7304df6f1f6c668678cde0116bc5d976d4b25de7e5ff838a6180942d3e1625e9ac839b0252488c4cac601bd0ebed5e95b0425ad48566f08068431cd53a1ac953498a621897256904ba6671994e1c2f3feb312d0e7eed81df9da68ba98f89f57285174ab2f1ae2da72c980e7b1d0becfa617da2a93eab788035f69d7e7eecc9511464312c392ac57da503bd6c6de85e76bddc24821b2062e485a58f1511043c580cc6ec7e7bdb1b93d85224142aa6ecb9676c742dd41c709c2c0c6e1a067066107826010d826ea051decf4a1bf0e00551984d22ef128a5a91584c8b66db3ef20c70ef1a01382691b838e6d9946d03542cbec620cb8af6f195ef6fd3c3222e094f08c72b29daf7e3df37c77e9cf1693d189ef567b0f911cde69e9bede79ad2521875475fbde585e39ca18a1d254b1496fe2bbb39391ef5d556cc867358608e1a7f9837a58218a391cd088a10404b00bba56cbd12fa773cff7a69393f181a1782997bb4a2ecb7eefcd1e7aaab2f94f597dd5e516caa8b269ed675beba6ce7285e2fc0d9acd36ac776b1c8dff7ffd6954b87579835b57facf853bbb51d822a732330881418a0f6a1f789b0a58a63ff01723cb7707af10f2e6f7fa5cc8b03c13cc0fea9841793424295b2d08ad8e699b86b1239440265e5738b6b5ab7875f44a0b1248c56e16e5f197837ca959ca2b760a982a978f7ce24dce0af38d97c63f823d4e12b9050000",
    ],
    [
      "ETag",
      "eZH8IswapxpWJln4pvGYgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1592525998233"
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
      "7de72b48f73a9289d38d253eccc56c26c44c1cc992c5988a1706032ede961963f877db02ea4bdb73cebdbd3da727cbb6d95f5aeed88bcdb669b2af818e7709c8a53e0420ea5c0ab555580a60f7ba1a244f74f593374e68e12f333a883d64940ec2efd5613269ab44f40b0557752785148e53c87742e11f83ed8e375ac90bd0376e3664069a1b3a4d1e2ba3cd175fb3f759702b15b833d222f4fdd7a93f639dd4987dadd6c63c25c36d00311094115c1f54116610c9b9712e7851e5e008ac2902d10dd18dad9c10d615274447518efbe80c469e3b72479ef7ec0e877d798e11972996ba235cb1cb7c8992e7011eb47b3668e3a116b661f451b0f8269fdb8494f4af9bc7ec4235dd696df5687d1d363d4a109f84ca8b00e360e83eb03e8c37d466a5ce42520d868eb8faaf8f542a2ee6b900abb1ce49d4ec9e1b020000",
    ],
    [
      "ETag",
      "796grNLQjrwsqejri1UXSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ff1dcf4b7282300000d0bb64ad8ee51348773005044410c45036199a060a54c3272ad0e9ddebf4dde0fd808252368e44f0965dc12b980b096de8c6e7bab935e87d0aa1b645ca525355c5f6cec0a1cf7650c5fc04398de433358a9736a9ac8ba2355e862b4472bb5f4e5848995c16f8cd739da4a9ec3b94d7b5779083183d0e51bb3769e02ba5286292d908552e11476e0ee9da74f6537ee3f3034aa10fdde86c7ca2c0b57a9d38fe4d5b04fde8e000f548e494a15e3493327e2def57967e7728e1162ad594f4f114589723052bc0a6ae1ed848eae74c56115a81ff261173c79e579315031bc0ef1f4c6ba24805010000",
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
      "Fri, 19 Jun 2020 00:20:58 GMT",
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
      jobId: "grouparoo-job-25-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6e9b40107df75720fad8d8c6d83810c96a2c8734966cdc629c34aa2ab4ac07b209b0845d9c4691ffbdbbe00bd4519437989973e6cc65e7ada528ea1349d7ea85a206247a2e207ffdf24803f54c7a80a3487afe0ebc5e0231b91fe6d1af4942bf82b7998c47a32a8a946886922c8636a3458e815dac969d28a74586724adb82b0ad1bed9e61e9866e5896a9f7fb1596411cce48fa24191e38cfd845b7bbd7d189288d624019611d4c9383bdbbd1bb594e1f0173d66da6ed8a4cacfb71e26f31c588139a8e56cb4a44c120f721412496328ee87570d9a4ef1094742211bd211810c6b448b99456d1609a86242af2925c30bd09a330979a0fbf3583bab467f6c453308d8b24f55394c099b2461cf9fc3503e5da5dcc95a973bd70e7636fba70fce5e4c69e8f3b93c56c357796cadd8dedda0a47410c2556192997e59f237e4a4565b635304ed2529327bd3525c2bbebe3f49d111e28248950c56017e69f6b43d433352b0883731c9a7d2308350802333837503fd0b03580c13a0054672895557894d2b41f0cb131d0c0378703d31f603df42d1c98be666881d91f0e867a88d51d7a7ba8e525271cae08cb2823bb26ab77eed4b37dcf5d3993b167d7eb0e5111f3ab4a79b3ea46395c34a8aef4a3969c28ca724285a8729c53c7b3ddf1c49bded66488dd9a4184f0ebf2596e578862064734cac5ac38e473ba9683519df1dcbe3a82cb4df9b10f6222e2f741e7b11c1128e75fd67232ff661e4f2c56a315d56c2aabbaf4dca9f35dad39b7efd3dca2b8788767b333ab99e8d683e8306b70b5fefffad3aae550c55bddc9537fae6cf75e624b9ff4b810420e293e66fdc4ea4a60e5fec42912e1fbc32011e2361cf2332ecce2156176cc8e73a8de14a93a5f110e35c3342d7d4f2880393f89b034abb78f38390e32172490f27d2faa23513572db9054d4e49430192ede81b31be2b6b56dfd034bc02318e1050000",
    ],
    [
      "ETag",
      "x4T1meliY6rgXCmo+eTvCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:20:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1592525998233"
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
      "ffc554514fc230107edfaf20f51512058660c2c340540ca2c278d11052b61b4ebbdd6c3b9518febb6d37602f982592f8b2f6eefbae5feeda6fdf56a542dec2d8271715b20c57ef29f0f5c90ae4a3de4c40a44c0ab524180b2055cd0649579abd0ed2a7e957c21ab8745874cbdbadcf59dfe9763396f05e20a28af7ad22150721305fa8f8d9c4953c6fb09846a04ff490a551bc3061750fcb7562e0a93b198eaf8b4884be41c6b3d1c8e98d06248736d5c3223e9574618efc9b8459e7562e465e7139810038c41eecbb4e38be82278766bc824609839ac0947b2072115d98c12b8e694239624da56a75bb766677ea76ddee74daf546634b67e8511962ac2b6653b2d39728299be0a71e31696577c0b3309bf8761424285c4271420afad0c5a14f76b94df517e270ecb69a056ebe9b5b85cad2aa6a5241c860f14feaea4a5ea87ae1e5b4f3677224711a611acb92d257a37be7888d2b37946dfad27107c792155279a1a4ae3bbc1b4c5de7eee1a0b8facef726e8ad2588078eca63028cb3ce4e9b6dfbbc754ab64eeda376a2d446953c0593f6a8fa63dd8452e502ca04581beb07cfe93e9d1d050000",
    ],
    [
      "ETag",
      "yfuZSxpl3obAlmJr86wUCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-26-1592525998233",
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
      "10feeeaf20dc9736a90a22824d4ccf587ac7c59756b14d73b9e8b20c745b64e92e78d76bfcefb70bbee0b569fa4d67e67999991d5e6b8aa23e912450cf15d527d1730eece5cb23f5d53399810c4532f3f080f33bf883a2c9fd78f877fd70f543bfbdbee9f5ca2a52a0395aa531d439cd19067e3e9f352246f314314aeb82b0deead475b3db325b66b76bb70ca3c47288c321499e0a952c4bf979b3b9f3d188288d624029e10d4c57fb7873dd6aa68c3e02ce78f358b6299478f363e18b986294119af4e6b3d244ce812d6085482c6d1cd081fff598be41d0aa1189ea35c18030a67992496b250da64948a29c15e482e9550445b8f0bcff5b09a83367e80c3c6530e90f9dd9c03999cd47274bb492accbd333453b551057160b063c8f33e56a3a1929cb541879401cf852b9fbee4c1d11613424312c48b0547aca85327447aea7e885a7422f009e91a470e5213f868a1791dd4ed27d67897b0a498232a1ba2d5b585a07e9b6d6f543dfc2a16d987ea881efdbbe6522c3d770b70dedc0075465c8a4768947094d6c1b5960754343d72cc3086ccbc296e95bd0360dd435db8165a14e0774a46e1936fb7e7e3392c125e129e5643b6af56eea7acec29bcec783bee7547b0f9118de65e9feb8f3a3963231a4aadb8fc6f2c651ca0815a68aa5ba63cf99f6079e7b5bb1215ed81022845f66cff28d8528e6704023865690011bd1402e47bd9ecc5ccf9d8cfbc30343f168ae77955c94fddc9b3df45465f35ed2e355975b28a3",
      "d266a7ad56729bb377596e519cbf43b3de8655fd88a3f6ffaf5fb50ab72ace71eb4abd993bd37b892d72323385101824f8a0f689b7298165fa135f1b51bebb7d8910e7bfd7e799088b33c1fca08e199447435665ab056147ebe866cbde110a20cbde56589ab9ab7873ff520b569064bb5994df8172909b234b79c54e0193e5e2918fddf1b7c27c6d53fb07102d9b9ec4050000",
    ],
    [
      "ETag",
      "hhcuWexagOYNLzvhFJ1VPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d6f8230147de75790ee752c0a71ca121fd46d990bfb62f3612ec654b8301c70b12d73c4f0dfd716505fda9e73eeeded393d18a6497e923c243726d924f1ae04565dc420ded4c1075ea682cbadc09c03b954d52068acaa97f3d9e327fc0da3ed7077bbf7dd70e43f2de3f1b8a9e2c1376454d61d2492384a200db9c45f1a9b2dafb59c66a06e5caf991ea86f683551155abbf75e261fe74286a1169e179e37997a77a4956abdafe45aeb876c71e343040cf2004ecf29186e211073ed9bd3ac48c1e258b200783b44353672ccb02c2843b42465d9d7567fe0da037be0ba23db71baf214032a12cc55c7e29d1ce70b1434f571afbc937e130e6b601345170489ced239cf474abfbab977e58cc891aedbd3cae8d0ea34705a09e0af0ca51f0eda8563f74817c80c9561a1f210ac044d0754fed843222417d19483511bff7e8516a81d020000",
    ],
    [
      "ETag",
      "ZICJYex7fj7qDwR9d8RMZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "8b08000000000002ff1dcf4b7282300000d0bb646d1d1010e88e6f810ecaa7a1c086099811054924513e9ddebd4edf0dde0f404d8319ab38e9f000dec18276fab6d97e12cd140cac09abeb75df4c48ab93f196b067efec0b97d0bbff11276669e98f5b482d2b4e6f30aea7a675f27292a92934c4f7cbfacbcbdd911e278b5028c86aef9f8a7d219dd3708ef27939ecb893462216c360c88e85effa0ff1e1d5acca02e560a05581f6006df7a9c5a820069fbcc54864276ae1eaaa13e6d7451d902424b48d0239e3691fd9f915d60c9de93dedaa84810dc033bd8c985597d74c52747d03fe9b155f287e5d4d8c463c82df3f541fa0f205010000",
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
      "Fri, 19 Jun 2020 00:21:02 GMT",
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
      jobId: "grouparoo-job-27-1592525998233",
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
      "02ff8d545f6f9b30107fcfa740ecb5098404122a456b94d03553423a20ada66942c618ea96608a4dabaaca779f0d84c052557d83bbfbfdb93bdbef3d49929f701aca97921ce0f8b940f9dbb74712c8172283188845e6f9365ba613c5223771711bfd04f1d21825afb35955854b3405fb2c417d4a8a1c227ab97307714e8a0ce484f439615f9bf487baa9e99a6e9a536d34aab01425d11aa74f82e181b18c5e2acad1c72026244e10c8301d40b26fe2ca8ba6643979449051a52bab7025aa7c2efc3d2110304cd2d9cead4c1414e53eda039c081b2774185c75e90718ec0731af7ec110010849913261ada281248d705ce42539677ae7411e2e3d37bfad80ec5a6b6be1499024c53ef553b04717520818f0d95b86a46b67bb9156f6f5d6d9ccbdd5d6f6ddc58db5990f16dbf56e63bbd2fd8de558120341824aac3493aeca3f9bff948e4ab5105186d3d29327b22d273c5bcf71f5c10a1b0a41c25d515497f913d500c3a96a06513081d174a407918a82601a4c74300a54688ed1380c10683394ce2a3c48491a1a6032e2087faa45863f3611f4cd4833fd701aa8ba6aa8a636d4e51a7d687a79cd31434b4c3342713d64f9de597996ef393b7b31f7ac76df112812b6ac9c77bbeeb4c3f880da4e3f1bc999a32cc7849b2ad7b9b23dcb992fbcd55dcb063f5b6b1403f8e63e8bd3158184a2131ae47c570ce51b128ac5c8f67c632d4fe0f2a4dc1e8b28aff8d3f83cb5c30bc5fecb5ecef6dfd5f1f8c1ea8ca2da4d15955dcf59d93fe456f2f031cd1d488a0f785eeab09cf1693df009d30e57efffafbfbd9686ccef6a6d4ffeb5b39cdf025be644c64111ca510a4faa5f38ba0258a5bff014f1f2e3c32010fc6d68f429e3617e8b203da9c31c55770a5793af080dd5d0c6867e24e4c09c9d5718",
      "c346f2ec71105a688f52769c45f54854833c742c152d3b254c94f37b60d74b3cf40ebd7f8e1b4149e1050000",
    ],
    [
      "ETag",
      "qPpDn7/EoHguPfJagD63lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1592525998233"
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
      "af58eaa390e0942f131f86a2620011668c3184d4ed0e86db3adb4e4208ffdddb6ec85e304b24f165edbde7dc9edcdb9e6d0cd3241f41ec914b93bc07f3cf14f8fa640ef2496dc620d2500a5c12160b2015c50649e78afd3a7aa935a3dba5f5b092a7cb5a6f789700acaeae329670171051e46d30c2d80f20f404c66f3a36f3bcc6621a813ad165611ac5331d56f6b05c271a9e386314292211f334327ceef7ed4ebf4b72685b392ce2514967fac8bf49e8756ae46264c9dec7e00387d8857dd709674b70654f8f57d02809a12a58ca5d10b9882acce0396769423963554c55ad66f5acdeb6ea56bddd6e59e7e73b7ac85c2a0316ab8ae709f9d1974cd270cc566ac4a491dd01cfc26ce2bb5110bf7009c50921f4a58a038ffce4b6955f88bda1d3b82870f3ddd428549656c549f94108b37f52c72b59507ce1e5b4f3677224711ab1349625a56ffb8ff6111b4737946dfac676bac7921512bd5052d7e90dba13c71e8c0e8ae377ba3741672d418c38438f09d0ce3aab5db4eacd468dec9c7acd9413a532aae429e8b44bf18f751f48ccf93414606c8d6f3a97e9351d050000",
    ],
    [
      "ETag",
      "YPW07mFj2Jwt+j0INGpeew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-28-1592525998233",
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
      "9e5f81d8974d6a12209040a5aaab5ab65125694748bb6a9a12630eea1630c5265355e5bfcf86bc90b5aafa2ddcddf37277bebc7414457d2479a41e2b6a4892a70acae74f0f34548f6406384a64e6e932bb5d79f625727eb99713aca13bdfe2c9c94953456a344359914297d1aac4c08ee7b35e52d2aa4025a55d41d835ecae6e398665588e631b8341836590c663923f4a867bce0b76dcef6f7df4124a93145041580fd36c17efaf8c7e51d207c09cf50f65fb4289f5df173e4d29469cd0fc643e6b4c540cca056488a4d2c61e1d855f0fe97b0465bd4454af08068431ad722ead353498e63149aab226174c2f2228c2b5e7dd672ba0cedcb17b1e28136ffa79893249b6fca220a62c1625b02ae5ca37ff6aa22c0ba17d8f18b0a572fbc3f55d1129694c52589068a99c28a7cad89b7881a2d7366a89081827796d2440610a2d7991dd0ccf7b636f3b0a4982b850dd942d46da10e9b6e6847138c2b13db0c2588330b4c3918506a1861d13cc2804d466e052bbc1a39ce6e66864196061840c64423834634d7774b022c3d287c81ae228d6cc811eaa1b86f5ae9fbf25e17041584119d94c57bdf5bdc05d04fe7c7a7e16b8edde63248677d1b83fecfca0252e86d476fbde585e392a4a4285a97a8fde3470fdb3f3c0bb69d9108f6a0c09c2cfb327f9ac629432d8a3518932e0504e682497a35e5fcdbcc0bb9a9e8df70cf53bb9de563251f67b6776df539b",
      "2d782e0e57dd6ca1894a9b43536de5d6476fb2dca0b47a8366b509abfa0147e7ff5f7f3a2d6e555ce0c695fa73eefa77125be764c687184ac8f15eed036f53029bf407fe6044f9f6dc25425cfc4e9f7111166782d95e1d97d01c0dc99a566bc2a1361cd8f6684b2880257f55616aa6b3ad7875f2520b32c8f97616cde937835c1f58aa5a766a982c178f7cea4dbfd7e63bebce3fef24e890b7050000",
    ],
    [
      "ETag",
      "qJmWvI8Ja9XEJMc0aYR5tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1592525998233"
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
      "c230147ddf572cf5d5a90c1699090f40244a161194170d21a5dccde2b63bdb4e8264ff6edb6dc04bdb73cebdbd3da747c775c937cfb7e4c1251b9efc94200e5709a8b9392c4096a9927a2b309740ae4d35289a98eabf712ff898dff3643a9931bebf9d62c88bf960505749f60519d575478d348e39a45ba9f1a7c56ec35b2da719981bd76b6107da1b1a4d1d0aab4da2d9f0fd52c8706b859765140d47d12369a4caee2bbd56f6213bdc2c2006013983f3730a813b60ead9fa96342b52f0249682816c8698c65a4e04960515889ea63cbfef7582d00ffc200cfb7eb7db96a7c8a8e2989b8ee51b39cd57a868bac0bdf14e3a7538a28675146d1024be48e7321f2dfddae69b9e4f4e6cd59c564e8b56e779a38302f92a50db91604d74fd3bd2e63146e35799389428c1d28cea0f7be24a73314d253895f30f09ced4b81c020000",
    ],
    [
      "ETag",
      "zC45ZQ7igJFOciw/Jo9ipQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d0",
      "7f",
      "c9d971808825bd49812a60115c707ac90488ec094bcae6f4dfebf4fdc17b0212c7b4efb1e02565e01dcc4441eb78ed704d97768f24675b3d3bb59ff5256c9564bf5117b7ad5c5edd5bd32888232b93eb051a5c20b5cb50b382036219f6e54484fb5419c418a086f9113bcfa194a261304d0f37dfd016d7e3545f746b51b702e5b2eab0d87e734ab5d871d98bea30cedb4af2cbb3dfb4b65c8ca38a29cdf8fd1a9dea5ba06d3ec63a9d10277839462624916468fad7bc337ec410c80f624df0d61cc00ad0a9c93bdae3fc35832a422bf0dfc4626ee8ebaa53d2d10efcfe01ffd1c60705010000",
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
      "Fri, 19 Jun 2020 00:21:04 GMT",
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
      jobId: "grouparoo-job-29-1592525998233",
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
      "107df75720fa1a5f82af44b21acb260d958d53c089daaa42cbb2904d8025ece2368afcef9d055fa08ea2bec1cc9c3367ceecee5b4b51d4679a06ea95a2fa347a2948fefae989f9ea85cc10812299d17e04893bfe6a2f98b9b51f97ce9f2c31eea2e9b4aaa2259aa3248b499bb322c7845f6d9c4e94b3224339636d206c6b7afb72a86b436da8eb13addfafb09cc4e192a6cf92e151888c5f75bb071d9d88b1282628a3bc8359728c77b75a37cbd913c182779b6dbbd089773f6efc39661809cad2e9c6a944149ce41e49108da58c133af0af9bf41d8a924e04d55b8a09c29815a990d22a1accd29046455e9203d31b04215c6a3efed602aa632c8db9ab60161749eaa52821174a8004f2c46b46941b7bbd524ceb666daf66aeb9b63c677e6bac669df97ab959598ef2706bd88622901f9312ab4c95ebf2cf829f5251d92d205cd0b4d4e4ca6c4d0964f73e9aefacf0482149401527fb326fdc1ba1cb494ff7437f8cc3497fe8873de2fb137f3c447dbf87f50119043e41758652598547291835d2751c04634f1bf7346fa06903cfd77ce401594f0b806a8475758fde1d67f99d53411694678cd3bdc9ea836dba86e7da1b6b3e738dfadc212a62b1a89437a76e8c23c0a0bad28f2c395394e59481a8729da6e51af66cee9af7351970b6962442f8d57991a72b4431272734ca615782e42b16c8c5a8d66c652c4ee0f2a4dc1d8a3854fc3cea3c8d038572ffe52c67fb6ff671e16035aca876534555c7b54deb8b5a4bee",
      "dea7b94771f10ecf761f563370eb111ce60daed6bf5fbf5ab51e2adcd5bd3cf5dbc6b0bf4b6c9993199b842427293e75fd8fa32b8155fa3f9e22283f3c0c12016fc3b13f1710865b84f9a93bce4975a768e57c4538ea8d06fa68782004602ece2a8670770e15678f83ec4512928a8317d5235119b96b482a6a724a982c877b60ed97b86bed5a7f014691d1c9e1050000",
    ],
    [
      "ETag",
      "2ZdmT7JRDoIvRhLSxpmEPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1592525998233"
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
      "c5545d4fc230147ddfaf20f55148600a3a131e404188807c0c636208a9dbdd1c76eb683b0c31fc77db6ec05e304b24f165edbde7dc9edcdb9e7d1ba512fa0c2217dd95d07be0af1360db0b1fc4446da6c01322b85c621a714065c506817dc5aeaebbbdcdeb93ff60bdccfdcbee0da9dd57f9a4d94c59dcf980104bdeb78c64ec05405c2ee3371d97b2bcc6221c823ad1a12409a3a50ecb47586c630dcfec697ff4984742ea6a64341f0c5aed410765d0ae7c5ac4c5022ff5917f93d0ebc2c8c4d08abe4fc103069103c7ae634657e088be1e2fc7614ca0c269c21ce099882a4c619fd124c68cd28a4c554cab52ab5b66ddac5bd6ad7975b5a713ea6011d04855cc67e8a02fa8c0644abfd4885123bd039686e9c4f7a3405eee12f21392d04615072e3ae476e55f88fd91ddb8ce71b3ddc2c85516569593f20202cb7f529757f281e50b2fa69d3d933389e39026912828dd1d3cb7ced8b87443d1a61f5a76e75cb25c482f14d4b5fbc3cecc6e0dc727c5e5777134417b2b808f19951ee3a09d55ab5edfd66f1a55b477ea3d554e14caa88225a0d30e967fac5e2064cec38483b1337e00a6b18dca1d050000",
    ],
    [
      "ETag",
      "0qFHvXKgD9VUg+F7l1C0sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-30-1592525998233",
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
      "da",
      "30",
      "10",
      "fe",
      "ce",
      "af",
      "88",
      "b22f9b5420e125249550c768b64502da42a09da6091ce742dd25716a3b9d58c57f9f9df012d6aaea377277cfcbddf978ae699afe9ba4a17eaee901593fe6c0361f1e68a09fa90c08b45619efde1e3a1b6f71f3e5ef9d1d2d3a18b9cc1ff4fb651529d01c25590c754e7386819fcf678d35a3798618a57549586f1b75b3ebb4baadaee3d8ad76bbc47288a311497f2b867b21327ede6cee7d34d694ae634019e10d4c9343bcf9d46a668c3e0016bc792adb944abcf9b6f0454c311284a6fdf9ac349173604b481089958d233a0c3e9fd237084a1a6b59fd4430208c699e0a65ada4c1348dc83a6705b9647a9641192e3c1f3e2b017de68edca1af8d07771f57285164ab4f1ae2da72c980e7b1d0be4eafc6da2a93daf788035f69b7dfdda92b238c4624862509575a5fbbd046ded8f335b3b0514884c005490b233e0a62a8c8cbec6e78de2b7b3b50281224a4eaae6cd9332c64da861344410f4776bb1b440604811df4baa81d18d8e940270c00551984d22ef128a5290a712b6c5b081911384e845018393d64831dd9a669210ca1e9b4ccd0d4770cdb433f7f18117049784639d94d57bf9d7abebbf4a7f3c970e0bbd5de2324877759ba3fedfca42521875475fbd6585e38ca18a1d254b1476fe2bbd3c1d0f716151bf2518d608df066f6a89e5584",
      "620e4734622801016c4c43b51cfdfa6ae6f9ded564303a3214efe47a5fc965d9cf83d9634f55367f939daebadc42195536ad8e5ec96dcf5e6559a0387f85e66917d6cd138edaffbf7ed52adcbabcc09d2bfd66ee4e7f286c9153992944c020c547b577bc4d052cd3eff88391e5fb73570879f1077d2e64589e09e64775cca03c1a9294ad16849661598ee9ec0925908917153dc3b6f6152f4e5e694102a9d8cfa23cfd7290db134b79c54e0153e5f2914fbcc9b7c27c6d5bfb07cd0f01d1b7050000",
    ],
    [
      "ETag",
      "Ih8C9yIVQBzX8fV4caErTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1592525998233"
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
      "4ec230147ddf572cf5d519d80211131e8068501790290fc61052c65d1d74bbb3ed5424fb77db6e035eda9e73eeeded393d3aae4bf669be25772ed9a4ecab0471b862a016e610812cb9927a2b309740ae4d3528ca4cf5e4f799cf17f8bee93fb1e06f56ecfb6caad8705857c9f81332aaeb8e1a699ca4c0b752e30f8bdd86b75a4e333037aed7c20eb437349a3a14567b08e7a3b74b21c3ad1566cb301c8dc37bd24895dd577aadec4376b889200101790ce7e714027710ab47eb5bd2ace0e0492c450cb219621a6b99092c0b2a103d4d7941c7ebf6067ecfef0d06b77e10b4e51c63aa52cc4dc7f2959ce62b549447f863bc936e1d8ea8611d451b04492ed2b9cc474bdfa6d9bff1037262abe6b4725ab43acf1b1f14c81781da8e046b22f03ba4cd6382c6af3271285182a563aa3f6c9a2acd25944b702ae71f67c57f531c020000",
    ],
    [
      "ETag",
      "CxKlOQoYb6Jg3zNpk6gHtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "ff1dcf4b8e82300000d0bb742d868f10989dc50fd2460c08281b8250812908b60506cddc7dccbc1bbc37c8f29c709e8a8e9207f80273a65acb7c893a13caeb5cc1a288e3d17c96c6ee8113a58cb6c5c0dc20a9ddf07e3c37b728a9828e3d9d194213ad0b193fc3fa8534e9285e12d356ed95461c761d9f589b591529f772af065e158b7b89a728375c76deacfc00626a4bd4bef91c0d1087f6899f06e5d204171359b29235bec979a46c1cda5228ed99a0eea8972d8a77c3379baebe6d1707695047d7f30471027d3292c3162c00f9e96b46785a7f669a6e590bf0df4cc5dc93cf15928c11067eff00b0651c7c05010000",
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
      "Fri, 19 Jun 2020 00:21:07 GMT",
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
      jobId: "grouparoo-job-31-1592525998233",
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
      "ff8d54db6e9b40107df75720fa1adfb0894d24abb11cd258b2710bd8515555685906b20eb0845d92a691ffbdbbe00bd4519437989973e6cc65e7ada528ea234903f54a517d123d1590bf7ed9525fbd901ee028929e2df4ba24f9ebfcd96c1f92b5c59677aeb679994caa2852a2194ab218da8c16390676b5763a514e8b0ce594b605617bd06ff77543d335dd30c6da60506119c4e182a48f92e181f38c5d75bb071d9d88d228069411d6c13439dabbcf5a37cbe9163067dd66daaec8c4ba1f27fe1a538c38a1e964ed54220a06b9070922b194714207fe7593be4350d28944f433c18030a645caa5b48a06d33424519197e482e94d1885b9d47cfcad1954c75c983357c1342e92d44b5102174a8038f2f86b06caadbd5a2a73eb76652fa7ee7c6579ceecce5c4e3bb3d562bdb41ce5feceb44d85233f8612ab4c94ebf2cf123fa5a2325b008c93b4d4e44a6f4d89f0eefb387f6784470a49225431d88779a3de25ea8f7b861ffa231c8e07ba1ff6c0f7c7fe484703bf878d210c031f509da15456e1514a53cdc0832118d80bd1b8ef0d03ac7b86e61b1ee8a1062840a1ee5faa7bf4ee58cb4b4e38dc10965146f64d56efedb96b7aaebdb66653d7acd71da222e63795f266d58d72b868505de9472d395394e5840a51e538e7966bdad3993bdfd46488dd5a4084f0abf324b72b443183131ae562561cf2250de460546bba346f4ee07253be1f829888f875d4792a4704caf997b59ccdbf99c7158bd56845359bcaaa3aae3db7bea935e7ee7d9a0d8a8b77789ef7663513dd7a101d660daed6ff5fbf5bb51caa78ab7b79ea8fb569ff94d8d2273d368490438a4f593fb1ba1258b93f718a44f8e1304884b80dc7fc8c0bb37845989db2e31caa3745aace578497",
      "bdcb91a11d090530e76711e3ded838449c1d07990b1248f9a117d591a81ab96b482a6a724a980c17efc0da0f71d7dab5fe013c0e4bade1050000",
    ],
    [
      "ETag",
      "je0/imzSxVjhmUNsMHT2Vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1592525998233"
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
      "10bdf75790f528443e04c584435154222096120f8690b59dd66adba9bb5b0821fc7777b7457ad13491c44b7767de9b7d99d97ddd1a950af90862975c55c86be07fa6c036273e8827b5b180a7a1e0724930e640aa8a0d82fa9aed2133e121f55767cf767f5ae78177fabceef5321677de20a292b795918cbd004297cbf845c7953cafb19846a04e74304ca378a9c3ea01169b44c333db1a4eee8a4884ae4626f3d1c8ec8f06248776d59f455c2ae8521ff93709bd2e8c5c8cbce3ab051e30881d38749d307c07470cf578398d92106a1c53e600cf45546106fb0cd38432c49a4cd55a8d5aa3dd6db69bed6ef7b2d96aede9213a540418ab8af98c7ceb0b1434b470ad464c3ad91db02ccc26be1f05f10a97509c908456aa3870c9776e57fd85389cd89df30237df2d8c4265695539292f0861f94feaf24adea87ce1e5b4f3677224711a611a8b92d2b7a347f3888d4b37946dfac6b407c792e5427aa1a4ae3d1c0f66b6399efe282ebf8b8309fa1b017cca507a8c837656a37e7ed9bee8d4c9dea9d7a89c289451054b41a71d2aff58f78190398f861c8c9df1054df4ad831d050000",
    ],
    [
      "ETag",
      "bforAeKugv/WTBP0sif+Ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-32-1592525998233",
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
      "02ff8d546d4fe24010feceaf687a5feea2405b281413e219ec794d10b414cde57281ed765a574bb7ee6e359ee1bfdf6ecb4b398df11b9d99e7656676786d689afe40b2483fd1f490248f05b0972ff734d48f5506044a54863e1c0daec63c73ddd9b5171f597f1f5df3e27938acaa4889e66895a7d0e4b46018f8c97cd64a182d72c4286d4ac266c76a9af6c0b22d7b3070ac4ea7c27248e331c91e14c39d10393f69b7b73e5a09a5490a2827bc85e96a176f3f59ed9cd17bc082b70f65db5289b73f163e4d294682d06c389f55260a0e6c012b445265638f8ec2ef87f42d8256ad44563f110c08635a644259ab6830cd629214ac24974caf3228c3a5e7dd672da0cfdcb13b0ab4d1743e09be2e232460f94d435c5b2c18f02215da0f7f7aa92d73a97d8738f0a576fbd3f55d19613426292c48b4d486daa936f62ebd40334b1ba544045c90ac3412a030859abccc6e86e7bdb3b71d85224142aa6eca167da3874cc7188471d8c7b1d3b1c3d8803074c2be8d3aa181075de84621a03a8350da151e653433628c50df74626461038c38767a8e19d91823c0115821b65164f56d4bdf30ac77fd3c3322e09cf09c72b299ae7eeb7b81bb08fcf9647416b8f5de632487775eb93fecfca02521875477fbd158de38ca19a1d254b9476f12b8fed928f06e6a36e4a31a4382f0cbec513dab18a51cf668c4d00a04b04b1aa9e5e857d3991778d3c9d978cf50be93ab6d259765bf7766f73dd5d98297fc70d5d516aaa8b2d9ebeab5dcfaf85d961b9416efd03c6dc2ba79c0d1f8ffd79f468d5b9717b871a55fcf5dff97c2963995f121060619deab7de26d2a6095fec41f8c2cdf9ebb42c88bdfe97321c3f24c30dfab6306d5d19055d56a49d833fae6c0e96d092590893715966958db8a3727afb4600599d8cea23afd6a",
      "90eb034b45cd4e0953e5f2914fbcc94569beb16efc034c926589b7050000",
    ],
    [
      "ETag",
      "ok+9PLsnEESQIf+2zqE1Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1592525998233"
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
      "30147de75790ee752413c23297f8a08b7166846c38f719632a5e10075cd696291afefbda02ea4bdb73cebdbd3da747c334c94f92afc9bd495649fc5b02abae62102fea10002f53c1e55660ce815cab6a103456d5fec7d0fddcbb1371d87cbd1ff2f95315bccd76834153c5c30d6454d61d2592384a205d7389bf35365b5e6b39cd40ddb85c323d50dfd06aa22ab436f55fc79371702965b8d6923ff7bce1c81b9356aaf5be906bad9fb2c555001130c843383fa860b885504cb5734eb322058b63c942e0ed10d5d8c831c3b2a00cd19294e5d856cfeddbaeedf6fb77b6e374e52986542498ab8ef98c9ce60b14340d70a7dc935e130f6b6013461705892ef2b94c484a7faaf9969ca8ba3d2d8c0e2dcec3469500fecc507ae1a01d38f60de9c278406556a82c042b41d32195fff59808c94534e560d4c63fd9efd8c81b020000",
    ],
    [
      "ETag",
      "NXA5Yx5GtzhZWznUKyRVSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ff1dcf496e83301400d0bb789d4450a6b8bb30950a052a31ee904d3f98a12698a140d5bb37eabbc1fb41a42c619a8a79e880a357b493177c292ffe7035a55be57c60d383eef3fedde655c4d541767ca198ef9cc92a7841a6a56b6bcb9199874ecb74ca7536e17c8db63ac9e858dab5cfc86e27356dbb0a0659e095141e0fe81af4836be1bd9233237d23bda7c7a04b14dfb5e336a64b68c6b66f740ca2452db5733a1fd4727936f5f6d1b034d13c2b700c552ce74a09d55bef16b93686623ba46d4939fd0a4097f7f88a4e08b64723602a9ae74cd1303ea1ff6631ef0f785e4d200204fafd0365ac1cba05010000",
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
      "Fri, 19 Jun 2020 00:21:12 GMT",
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
      jobId: "grouparoo-job-33-1592525998233",
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
      "4010feeeaf20dcd7aa14aa481373354aaf248a2d627b97cb852ceb40d7224bd9c54bd3f8df6f177c81b369fa0d66e679e699979df796a2a82f245da9d78a1a92f8b580fceddb9a86ea85f40047b1f43c45c67a3db75e279ab3756096dde7f6cf877838aca2488966689325d066b4c831b0ebe5a213e7b4c8504e695b10b60da37dd9b3f49edeb3ac816e18159641124d49fa22199e39cfd875b77bd0d189298d134019611d4c37477b77ab77b39cae0173d66da6ed8a4cacfb79e2ef09c588139a0e978b4a44c1200f60834822659cd0abf0a649df2168d38945f496604018d322e5525a4583691a91b8c84b72c1f42e8cc25c6a3efed60ceac29eda635fc13429366990a20d5c282bc451c0df32506ebdf94c71dcdbb9371bf9cedc0d16e33b7b36ea8ce7d3e5cc5d284f77b6672b1c8509945865a8dc947faef8291595d956c038494b4dbef4d69408efbe8fce07233c524812a18ac13e2c30b53eba1c68561885268e06462f8c3408c34168f690116ad8ba82ab5508a8ce502aabf028a5695f5f6961cfec07d01fa0e0ca8cfa81852d33b0aca867f5f581668491ba47ef8eb5fccd09870961196564df64f5c9737c3bf0bda53b1ef976bdee0815099f54ca9b5537cae1a24175a59fb5e44c5196132a4495e3745cdff64663df79acc910bb358518e1b7c5abdcae08250c4e68948b5971c867742507a3baa3993d3981cb4db93f043111f1fba8f3548e0894f32f6b399b7f338f2f16abd18a6a3695555df89ee3fe506bceddc7348f28293ee0d9eecd6a",
      "26baf52c3acc1a5cadffbffeb46a3954f156f7f2d487a5edfd92d8d2273d1e4490438a4f59bfb0ba1258b9bf708a44f8e1304884b80dc7fc8c0bb37845989db2e31caa3745aace57847dcdd42d533f100a60cecf220c5db30e1167c741e6820da4fcd08bea48548ddc3524153539254c868b77e0ee87b86bed5aff00cc8da920e1050000",
    ],
    [
      "ETag",
      "Wf3jjO9qD0IvIeMpPrEXQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1592525998233"
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
      "cb",
      "6e",
      "c2",
      "30",
      "10bce72b907b0589572854e2105ada22f12a844b2b844cb209a14e1c6ca71542fc7b6d27402e54918ad44becdd99f568d79e1c8c52097d06918b1e4a681df8bb04d8fece07f1a63633e009115c2e318d38a0b26283c0be629b81e7937daf2f7691db8166f2be73261babdb4d59dcd9408825ef2023197b011097cbf843c7a52cafb10887a04e742849c268a5c3f20516fb58c3737b3618bfe49190ba1a192f8643ab37eca30c3a96af8bb858e0953ef26f127a5d1a9918dad2f50c3c60103970e93a66740b8e18e8f1721cc6042a9c26cc019e89a8c214f6194d62cc28adc854a5d1a8d4cc4eddac9b9d4ebbde689ce8843a58043452158b393aeb0b2a3099d16f3562d44aef80a5613af1d3289097bb84fc8424f4a58a03179d73c7f22fc4c1d86e3573dc6cb73472958555e5a4bc80c0ea9fd4e5956cb07ce1c5b4b3677223711cd2241205a59f8713eb868d4b37146dfac9b2fbb792e5427aa1a0ae3d18f5e7b6359a5e1597dfe5c504bdbd003e65547a8c837656adda6c9bf7ad2a3a39f5912a270a6554c112d06907cb3fd66b2064cec3848371347e0089b55e5f1d050000",
    ],
    [
      "ETag",
      "5ifglyBEtqnd9e4uZqcOhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-34-1592525998233",
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
      "40107df75720fad24ab53137832345699ad016d576528c135555652fcb4036c12c6197a46ee47fef2ef8829b28ca9b99997399991d3f751445bd2379ac1e296a44d2fb0acad5bb5b1aa91f6506384a65661c7cfefbfd4ebb0ecd224ee0cf74954d8dc1e3f17153456a3443cb22832ea35589811dcda6bdb4a455814a4abb82b06b5a5ddd1e1ab6610f87ae619a0d9641968c487e27196e382fd891a66d7df4524ad30c5041580fd3e52eae3d185a51d25bc09c6987b29a5062daebc22719c588139a1fcfa68d898a413987252299b4b147c7d1a743fa1e41cb5e2aaa1f08068431ad722ead353498e60949abb226174c4f2228c2b5e7dd672ba04ebd9177162a637ff27e11230e8b0f0a62ca7c5e02ab32ae7c092ec6caa210ca3788015b28d7dfbcc0139192262483398917cab172a28cfcb11f2a7a6da21688817192d736421465d01217d9cde8fc17b6b6a39024880bd54dd9dce90f90eef68751123938714d3b4afa10456ee4d8c88cfa786881154780da0c5c6a377894d31ce3be610dc0b0ad1892a41fb968604696e138896b881c766c17eb7a9ca81b86f5ae9fc792703827aca08c6c66ab5e077ee8cdc36036393b0dbd76ef0912c33b6fdc1f767ed01217436abb7d6d2ccf1c1525a1c254bd457f127ac1e959e85fb56c8827358214e1d5f45e3eaa04650cf66854a2257028c73496cb512f2fa67ee85f4c4e477b86fa955c6e2b9928fbb533bbefa9cd16ae8ac355375b68a2d2e6c0525bb9f5c71759ae5056bd40f3b009abfa0147e7ff5f",
      "bf3b2d6e55dcdfc695fa63e6053f25b6cec94c00099490e3bdda1bdea60436e937fcbd88f2edb14b84b8f79d3ee3222cce04b3bd3a2ea1391ab26c5aad09077dc7d51d7b4b2880257f5e61ead6b6e2d9c14b2d5842ceb7b3680ebf19e4fac052d5b253c364b978e4137ff2b536df5977fe014ef64726b5050000",
    ],
    [
      "ETag",
      "MRBzKk/WT3pdfexSylS26w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1592525998233"
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
      "00000002ff4d51d14ec230147ddf572cf5d585d1b9444c7800250144d429898921a48cbb39dc7667db290bd9bfdb761bf0d2f69c736f6fcfe9d1b26df29de43b7267936d12ff94c0abab18e4ab3e0420ca540ab515980b20d7ba1a248b75f5f3074e79eff1804ff37219cf78de9b0b8c87c3a64a845f903155775448e12881742714fe34d86e79a3e52c037de366c3cd407343abc9aa30dac3e87d72c967b833fc72b5588cc68b0969a5daec6bb5d6e61d7bdc061001873c84f36b0a8e7b08e5ccd8162c2b527004963c04d10ed18d8d1c732c0bc6111d4539de8dd3f707d4a7fe60704b3daf2b4f316432c15c77acdec869be44c9d200ffb475d26fb2e10d6c92e87220d1453897f128e957375397ba8e4b1db74f4e5add9ed65687d6e7a9e34a8278e1a84c0930563cea922e957bd4aea50e45f2120c1d32f56bd3442a2e62a900abb6fe01f5b1343b21020000",
    ],
    [
      "ETag",
      "OXoHr/KxoMJuNgIrn/Jsog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000000002ff1dcfd97282301400d07fc9b3755a28087d235a672818cba2802f198817cb628004cad2e9bfd7e9f983f38352c6404ada371570f486e65431d76ced34067eb6f2ac24bcc2760843bd972586a058c8465b92d9e6bde326a6d115db2edcf9db7a988ad38b3851c2eb390af3d74fbda6eafb759f1faf50df2cc806e5923172e8f0392752b71c798f76fe3d76d532123c763ee2a8a6386144ef0260a6e6068e0f51d6dcc410f121f089b48f1e5b0cbe7cc9a0214fcbf7d48fea46cf2bcfbab47861a3377596d29ccda9c3f161f40db44230b58500498bc74cd54c7385fe9bb49f5b785c31a40204fafd0346af64e005010000",
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
      "Fri, 19 Jun 2020 00:21:19 GMT",
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
      jobId: "grouparoo-job-35-1592525998233",
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "7ecfaf40ecb5b943132a456b96d225524236429a55d3848c3950b780293699a22aff7d36e4024b55f5cd3ee77cdff9cec57e6b288afa42125fbd51548f84af3964bb2fcfd453afa407380aa567f3eb79aa0df34d34b5b0b365f1e3f69a7d1b8f46651429d00cc569044d46f30c03bb59af5a6146f3146594360561b3af37bbbad1d37bba610c7bfd7e896510057392bc488627ce5376d36e1f75b4424ac308504a580bd3f8646f6f7bed34a3cf80396bd7d3b64526d6fe38f1d78862c4094d46eb5529226790b9102312491967b4efddd6e95b04c5ad50446f09068431cd132ea5953498260109f3ac20174c6fc228cc85e6d3b5625057e6dc9c380aa6511e276e8262b8527cc491cb772928f7f672a1ccacfba5bd183bb3a5e5ae265373316e4d96f3f5c25a299ba9699b0a475e0405561929b7c5cd1297425191cd07c649526872a4b7a244780f7d9cbd33c213852411aa181cc2dc41e71a75871dc30bbc010e867ddd0b3ae079436fa0a3bed7c186069aef01aa3214ca4a3c4a68d2d17c8cbcdec005017435030217f575cdedea18babe380d7a867a40ef4fb5fccd08873bc252cac8a1c9eac69e39a6ebd86b6b3276cc6add01ca237e572aaf575d2b878b0655957ed4920b456946a810558c736639a63d9e38b3878a0cb15b730811dead5ee5760528627046a34ccc8a43b6a0be1c8c6a8d17e6dd195c6cca8f63101311bf4f3acfe5884039ffa2968bf9d7f33862b16aad2867535ad59563",
      "cfacef6ac5b97f9fe60145f93b3cdb83594d45b79e4487598dabf1ffe94fa39243156ff5204ffdb936ed47892d7cd26343001924f89cf513ab2b81a5fb135f91083f7e0c1221fe86537ec68559bc22ccced97106e59b2265e74bc2ebcec0e869c323a10066fc3242ebebc7888bcf41e68218127eec45f949948ddcd724e51539054c868b77601d86b86fec1bff000701cc15e1050000",
    ],
    [
      "ETag",
      "WXjH48uWlHNcTvsmYv6sBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554cb6ec23010bce72b907b0595572854e2105a689180f20897560899640301274e6da71542fc7b6d27402e54918ad44becdd99f568d79e1c8c4201edfcd0458f05b4f2d79f31b0fddd1ac4446da6c06322b85c221a724045c50681d78a0d95afb7b1f35ef7ac55b0eb6d1eeec9aad79ab4db098b3b1b08b0e41d642463cf07e272197fe8b890e63516e200d4890e2571102e7558bcc0621f6978664ffba3972c12505723a3f9606075065d9442c7e27511170bbcd447fe4d42af0b2315435bba9a82070c42072e5d478c6ec1117d3d5e8e83884089d39839c053115598c06b46e308334a4b3255aa99a58ad9aa9a55b3d56a566bb5139d50070b9f86aa623e43677d41052653faad468c1ac91db0244c267e1a05f23297909d9084be54b1efa273ee58fc85d81fd98d7a869bee1646a632b7aa9c94e71358fe93babc920d962f3c9f76fa4c6e248e031a8722a7746ff066ddb071e986bc4d3f5b76f756b25c482fe4d4b5fbc3eeccb686e3abe2f2bbb898a0b317c0c78c4a8f71d0ceaa94eb4df3a1514627a73e51e544a18c2a580c3aed60f9c77af585cc799870308ec60f90f3c5ee1d050000",
    ],
    [
      "ETag",
      "e1vOPcZ4fAbmkFh7/lbF9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-36-1592525998233",
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
      "8d546d6fa24010feeeaf20dc97bbe414104169627ac6d21e17b53dc5f69acb459765a06b91a5bb4b2f6de37fbf057cc16bd3f49bccccf332333bbe341445bd2769a89e286a40e2871cd8d3a7150dd4af4506048a8b4c8f3ae7c3f1ea99ad1c2d7feef8b76717773f06fd7e55454a3447eb2c8126a739c3c04fe6b356cc689e2146695312364dbb69584edb6a5b8ed36b9b6685e590442392de170c774264fc44d3763e5a31a571022823bc85e97a1fd71edb5ac6e80ab0e0dab1ac2695b8f6bef06942311284a6fdf9ac329173600b58239214360ee830f8764cdf2268dd8a65f523c18030a6792a0a6b150da66944e29c95e492e9450665b8f4bcffac05d4993b7287be321efcfabc0c9180e517057165b160c0f34428e7d3cbb1b2cca4f21de2c097cacd7777eaca08a311496041c2a5d2574e959137f67cc5284d9402217041d2d2868f82046ae232bb1d9df7c6d6f61405091252755bb6e8ea36327aba13444117473dd30a221d82a017742d64063a763ad009034075065168577894cad9740ddc0e233dd01158a611981dbb0b5647d74ddb31bb185bba819161ebea9661b3efe72f2302ce08cf2827dbd9aa3753cf7717fe743e190e7cb7de7b84e4f0ce2af7c79d1fb524e490ea6edf1bcb2b471923549a2ab7e84d7c773a18fade75cd867c522388117e9a3d148f2a420987031a31b406016c4cc36239ead5e5ccf3bdcbc9607460285fc9d5ae92cbb2df7bb3879eea6cfe5376bcea6a0b55b4b06977d45a6ef3f54d966b94e46fd03c6ec3aa71c4d1f8ffd79f468d5b95f7b775a5fe9cbbd3db025be68acc14226090e283da07de6601acd21ff87b91e5bb632f10f2def7fa5cc8b03c13cc0fea98417534645db5",
      "5a12da7a4f378cee8e500299785dd1b6ec5dc5ab832fb4600da9d8cda23afc6a909b234b79cd4e092bcae5239f78938bd27c63d3f80703c7157db5050000",
    ],
    [
      "ETag",
      "8o9FCMjzrj9/uz4TYDGhJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1592525998233"
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
      "4ec230147ddf572cf5d525a30b22263c8092600423e8e28321a48cbb3ad87647db2184ecdf6dbb0d78697bceb9b7b7e7f4ecb82ed925f9863cb9649df07d09e274c741cdcd6101b24c95d45b81b904726faa41316eaa0fc719676ffcd89b29fedddb4df6c7641cce0783ba4a46bf90315d77d648e33881742335feb1d86d78abe52c0373e36a25ec407b43a3a95361b597e1d7f896cf7063f9f7703a1d8ea663d24895dd977aadec3bb6b85e400c02f208aeaf29046e2152afd6b66459918227b11411c8668869ac652eb02c9840f434e5050f5ea7dba75ddaedf71f6910b4e529464c25989b8ef0935ce62b542c5de09fb14e3a7536a28675126d0e24be09e7361e2d1d4c33f5a9eff9d4a33eb96855735a3a2d5a5ea78e4e0ae487406d4a82b512e8de36956734ae95094589122c1d31fd6b9344692e66a904a772fe017da1dfef21020000",
    ],
    [
      "ETag",
      "vxMgaKgx7MtgW7kHqxiEUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "02ff1dcf4b5283300000d0bb64dd74903feef859316de52302dd646848041488d034a2e3ddedf86ef07e404d085d167c99dee908eec15aabce966cd1647b8acb10f6e3a8309ab34fa2d33a9a2c85960149d29b01c9e918ee9ce9cd281bc2d553714d442aef3254c156c62113bd4c9c45eb5a24e4fa9884792e215c6527fa407dd01745c53a2ce05c07afe4907387c7359b0ba65774cf78814cafaaba43aa28e6fe2c57946996cb7c190b9a0ccda7a91461ce836a708fe825f3db29b4a372c0c27af6bfd3ddd3d1fe70cb49820da05fbc9be982bbdb4c331c6703fe9bf8b2727abb7ab49ee90c7eff00d1df572805010000",
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
      "Fri, 19 Jun 2020 00:21:20 GMT",
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
      jobId: "grouparoo-job-37-1592525998233",
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
      "cf",
      "af",
      "40ecb50904422095a2354be88694901648ab699a90710c754b30c5a65357e5bfcf0692c052557d837bef39f7dc0fdfb79e24c94f38dbca97921ce1e4b944c5eb974712c917c28318488467f1776ede7cf32d3f5167c0cf9d24bea3eaed745a47e10a4dc12e4f519f92b280885e6efc415290320705217d4ed8d7cdfed0986886664c2696a6eb3596a2345ee2ec49303c3096d34b4539e818248424290239a603487647bbf2a22979411e116454e9a6557826aa7c9cf86b4a20609864d38d5f8b28292a42b4033815324ee86d74d5a51f60b01b243cfa054304202465c684b49a06922cc6495954e49ce98d1bb9b9d27cfc6d1964df5edaf34082242d775998811dba90b6808190bde648baf6d62bc971afd7de6a16386b37f4e73fecd56c305f2f372bd797ee7fd89e2d3110a5a8c24a53e9aafa73f94fa5a8cab64594e1acd214086f4b09f7367d74de19e19142907055143561a1a98ec1d05227511c9930b674238a55144556641a408f543819a1d13642a0cd5029abf1202399a96b9a3106460890350e47b1310e2d231e8780f381916aa9a348931bf4fe58cb9f0233b4c0342714374d96ef3d27b0c3c0dbb8f35960b7eb8e4199b245adbc5b75a71cc61bd456fa514bce14e505265c54354ec70d6c6f360f9cbb960cbe5b4b9400f8ea3f8bed8a414ad1090d0a3e2b868a15d98ac1c8ee6c652f4e",
      "e06a536e0e419447fc3aea3c95c303c5fcab5acee6dfcd13f0c5eab4a29e4d6d95fdc073dcef72cbb97f9fe60ea4e53b3c2f8d59ce79b71e78876987abf7ffd7ef5e2b87ccdf6a234fbeddd8de4f81ad7cc2e3a118152883a7ac9f585d01acdd9f38453cfc70180482df86637ecab899bf22484fd96181ea3785ebced78463d51aaaba7920e4c0829d4768faf01071761c442eb443193bf4a23e127523f71d49654b4e0513e1fc1db8cd10f7bd7def1ff2a6497fe1050000",
    ],
    [
      "ETag",
      "DzC7PBS8Sg0AaSpIgfVs0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1592525998233"
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
      "4fc230147ddfaf20f51512f9144c7800042519283012a321a46c7763b0adb3edc449f8efb6dd80bd609648e2cbda7bcfb93db9b73ddb6b8502daba8185ee0b68e53a1f11d0f8c6013e919b29b0c8e34c2c210918a0a26403c78e644f98f5b5e3cded2ed6bff0b8f7f63a70be23a7dd4e58cc5c838f056f2f2211db2e781613f1bb8a0b695e6101f6419e68122ff283a50a8b6798c7a18267c674387ecc223eb114329eeb7aa7abf7510a1d8a97452cccf1521df93709b52eb4540c6dc86a0a3650084c38771d52b201930fd57819f6430f4a8c44d404968ac8c204762889424c09298954a97a572ad75b957aa5de6a352bd5ea91ee1113739704b2623e43277d4e38f6a66427478c1ac91dd0244c267e1c05b23397909d90803e65b16ba153ee50fc85381c1b8d5a869bee165aa632b7aa9894ed7ab0fc277571256b2c5e783eedf4995c491cfb240a784ee981fedcb962e3c20d799b7ee818fd6bc9322ebc9053d7188efa33a3337ab9282ebe8bb309ba3107f64289f01803e5acf26dad59bf6bdca2a3537b443a914ba3721a814a9b58fcb19e5c2e7236f6186807ed07971a2f8b1d050000",
    ],
    [
      "ETag",
      "Qsdxwt8kwyLxaNCZXFgzug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-38-1592525998233",
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
      "02ffc594df6f9b3010c7dff35720f6b2a94b0209215029eaa2846d6869d225a4d5344d89710eea0e30b5215355f57f9f0d2401b5abfab637b81fdffbdcd9bec796a2a8bf49b253cf15d527e17d0eece1dd1df5d58fd203190aa527776c9e4ccff6e6ce876ffa8d1ea71c9f8d47a3328a14d91cc569046d4e7386819faf579d90d13c458cd2b6106cf7adb63eb07b83dec0b6ad5ebf5fe672888219497e4b85db2c4bf979b77be0e884948611a094f00ea6f1d1deddf7ba29a3778033de6d96ed8a4abcfb7ae18b886294119a8cd6ab1222e7c036102312498c53f6ceffd494ef1014774211bd271810c6344f328956ca609a0424cc59212e941e8551980be6e36fcda0ae9c9933f194c9623df7de6f512ce5b61f14c495cd8601cfa34cf9bc5c5c2adb5454bf451cf856b9f9ea2c1d61613420116cc86eab8c940b653c9f2acaf6f037732f5d4fd10baca2e40e78469202cc437e04351ce1ad86e9be708e4709298232c150856d869a89744bb3fdc01fe2c0ea0ffc4003dfb7fce100f57d0ddb0618e2baa0ba42266b97f92811d332cdbe059a81900dc818020a0ccbd0918d2c73a70fc1443d2dc0e6d0502b85a7633f7f18c9604a784a39a9a6adde2c5dcfd978cbf57c32f69c7aef0112a39c96f4cdce1b2d65624875dad7c6f28c2865840aa8e25cddb9e72cc713cfbdae61884b368310e187d5bdbc66018a389cb211433164c02ee94e1e8e7ab558b99ebb988f672785e2de5c1d22b908fb79843df55457f31ed2e65197a7505a25a6799c6da39ba6ca358af21764f69559d51b1aad17d4fe2bdde01f78d5d7af564d5c150ba3c252bfaf9de50f995bf8a46709013048f0a9dc1b9e8e4c2cdd6fd88722fcb09d64865850c7fa3c1366f18a313f55c70cca374de2aa5729686a96",
      "6eebbd83a04864d9b3889e66198788671b4ad6821892ec308b725395837c6a20e5359c224d868b373877e75f0af8d653eb2f429f246f66060000",
    ],
    [
      "ETag",
      "uE9snD+v6dbeK1W1mpsc+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1592525998233"
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
      "147de75790ee7564f3830496f8a08bd99c844c9c4b9685988a17c40197b565460dff7d6d01f5a5ed39e7dede9ed3b3619ae4272db6e4c9249b34f9ad801def12100b7508805799e0722bb1e040ee5535089aa8ea2fc765f9a9f0d9cec387e1623eff7c3b2cc7a35153c5a31de454d69d2592384e21db7289bf35365b5e6b05cd41ddb85e333d50dfd06ae2586a6de67f4c5fa6c1ad94e3564bfecaf3c6136f4a5aa9d67b28d75a3f658f9b0062605044707d50c9700f919869e79ce6650616c78a45c0db21aab1911386554919a225296be0583ddbeddb7ddb759dfe60d0956718519162a13a564b72992f50d02cc083724f7a4d3cac814d185d1424bec9e7362129fd35cd17aa6e4fa1d1a1f03a6c7214c0df194a2f1cb483a1f348ba309e5199152a0bc12ad07444e57fbda6427231cd3818b5f10fecc5ece51b020000",
    ],
    [
      "ETag",
      "Y89rmznNrhLo/4QKKVJwSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "6e",
      "82",
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "99",
      "b335c0b0486fa0208aa56593e532413a3084915585a1e9bf97f4075ef27e4096e7781cd1a3ad7103de01cb04759b6fed76a7735a1e2a1efa8aa4d124386e4b31e08cb2ff66b1ea4d4a29d8d8f1e9f9c07cffa538d09b57828ff64346b527ab78210ad2c9fc40509e9ccbcc8f1a35eeb6044571399992ad76c475ab39f11b31ad0bda776ffb7447fa87d993369f345f9a597da52da9e5e3ebacb3a438453746fae562e94f611865b70ce1c13ade51019b2ba4e1673a2c5c64585daf17b7584a021a820dc073570d7844d53a8392aa6ec07f133d5887d7ab8eb3010fe0f70f1e1ed48905010000",
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
      "Fri, 19 Jun 2020 00:21:22 GMT",
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
      jobId: "grouparoo-job-39-1592525998233",
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
      "6f9b30147dcfaf40ec714d42201f50295aa3946e4809d90869574d13b28da16e09a6d8b48aaafcf7d9401258aaaa6f70ef3de79efbe1fbd65114f589a4a17aa9a890c4cf05ce775f1e29542fa40773104b0f3087f7cfc92e0fe71bf4fbf56b0698a3dfc4d36915454a3403db2cc15d468b1c6176b959f7e29c1619c829ed0ac2ae617507234b1fe923cb3275c3a8b00c27d182a44f92e181f38c5df6fb071dbd98d238c12023ac87e8f668efbfe8fd2ca78f1871d66fa7ed8b4cacff71e26f094580139a4e37eb4a44c1701ee02d208994714287f0aa4ddf2360db8b45f40b411820448b944b69150da26944e2222fc905d39b300a73a9f9f8db30a86b7b61cf7d05d1a4d8a6410ab6f84209010701df6558b9f1564bc5716f56de72e63b2b3758cf7fd8cb596fbe5a6c96ee5ab9fb617bb6c2014c708955a6ca55f9e78a9f5251992dc48c93b4d4e44b6f4389f0d67d74de19e191429208550cd761c1441b8381a9593082131499c608461a86d084931130a086ac211e8610832643a9acc28394a6c3d0184fb006037d027030d42746609983710074138e010a87509ba8357a7face535271c5f13965146ea26ab779ee3db81ef6ddcf9ccb79b7547a048f875a5bc5d75ab1c2e1ad454fa514bce146539a14254394ec7f56d6f36f79ddb860cb15b0b1c03b45b3fcbed8a40c2f0090d72312b8ef3250de5605477b6b4af4fe072537e1e829888f873d4792a4704caf997b59ccdbf9dc7178bd56a45359bcaaaae7dcf71bfab0de7fe7d9a5b9014eff0bcd4663513dd7a101d662daeceff5f7f3b8d1caa78abb53cf5d7c6f6ee25b6f449",
      "8f87239ce3149db27e627525b0727fe21489f0c3619008711b8ef9191766f18a103b654739aede14a93a5f118e3553b734f3402880393f8b3006daf01071761c642ebcc5293ff4a23a125523f72d4945434e0993e1e21db8f510f79d7de71f65f6e89fe1050000",
    ],
    [
      "ETag",
      "a84YqlyrdCUcXw+pasI2Fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1592525998233"
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
      "ffc554cb6ec23010bce72b907b05a910a050894378b5a84079845385904936609ac4c1765a21c4bfd77602e44215a948bdc4de9d598f76edc9d12814d027095df45c406bb2d9c7c00e0f1b1053b599018f7dc1e512d190032a2a3608bc516cb34fc653b333efbe75c836de774613e0c46ab5121677b61060c93bca48c61e01dfe532fed07121cd6b2cc401a8131deac741b8d261f10a8b43a4e1b93d1b8c5fb248405d8d8c17c3a1d51ef6500a9d8ab7455c2cf04a1ff93709bd2e8d540cede87a061e30081db8761d31ba03470cf478390e221f4a9cc6cc019e8aa8c204de301a4798515a92a992d92c956bcd4aad526b361b15d33cd37dea604168a82a167374d11754607f46bfd588513db9039684c9c4cfa3405ee612b21392d0972a262ebae44ec55f8883b15daf66b8e96e69642a73abca4979c487d53fa9cb2bd962f9c2f369a7cfe44ee238a07128724af787efd61d1b976ec8db74d7b27bf792e5427a21a7ae3d18f5e6b6359adc1497dfe5d504ed83003e61547a8c837656f9b1daa83dd51fd1d9a91daa9c289451058b41a71d2cff58af44c89c877d0ec6c9f801d8aee6661d050000",
    ],
    [
      "ETag",
      "3FiNQ3CSDKCihuqCMPesiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-40-1592525998233",
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
      "00000002ffad545f6f9b30107fcfa740ec65939a049290844a5197a5b443a3494b48ab699a12630c750b98d8a65b55e5bbcf06921035abaa696f7077bf3fbeb3efa5a128ea234e03f554517d1cad73449f3f3c105f3d9119c44124334ee25cae1fd30b3cd09943bfdcfe26df68f766342aab70816620c962d46424a710b1d3c5bc155192678012d21484cd9ed6d40db363740cd31c76badd12cb501c3a387d940cf79c67ecb4dddefa68458444310219662d48925dbcfdd46967943c20c859fb50b62d9458fb6de1b39840c03149478b79692267882e5102702c6decd181fff990be8541d28a44f51386084048f2944b6b250d246988a39c16e482e9450445b8f0bcfbad05d4b9e558134f99cc1653efe30a24926ef549014c592e296279cc950b7776a5ac32a17e0f18622be5eeabe55a2242498863b4c4c14a192967ca787aaeecebca98635fd99ea217e60ae100318ed3c29e07fc18d54c896cd552fbc8347714920470a150952d075a1fe843cdf4437f00c361d7f0430df9fed01f18a0eb6bd0eca15ee0235067e052bbc48394a4c830b5c004a63e003da31b68d01ff6e1506006c084a0a3f703106a22ab560c9bdd797e51ccd139661961b8eab97ae7da9eb5f4dcc57432f6acfad943201a7a5eba3f3cf9c191b86852dded5b6d79e528a3980853c574eda967b9e38967dfd66c88abe6a008c0e7f95a5eb610c40cedd18082047144af482087a35ecfe6b667cfa66367cf50dc9eeb6d2513653f7666f767aab379cfd9e1a8cb29945169b3df536bb9cdc951965b10e747689eaab0aa1f70348eb0fd8bbbb9e7dad3cbff606f9c89c1fdc562f5f5b351e357c5eaa8aca9370bcbfd2eb1454e665c14228a52b8577cc7f391c032fd8ecd28cab77b4a22c4aadae9332ec2e22543b657871495ef1a27e5340ac2be3634bafa8e5000297f5d61f406db8a57bb4a6aa104a57cdb8b7267958ddc1c58ca6b760a98",
      "2c17ef705a0d70d3d834fe000e630aff70060000",
    ],
    [
      "ETag",
      "LmLGqknFi71sLrBVxoKr3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1592525998233"
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
      "0002ff4d51d16a8330147df72b247b9d6cb595d5411fda215d41a473730c4629a9bd3a3bf5ba246e48f1df97446d7d4972ceb93737e7e46c9826f9ceca237934c9214b7f6a60cd4d0ae2451d42e0752eb8dc2a2c39905b550d82a6aadab90bc3f7e663592781e747dbac49f87abd5c2cba2a1e7f414165dd592289930cf22397f85363b3e7b556d202d48dfb3dd303f50dbd269a4a6b9be0cd5b7be1582af0a8a520f2fde5caf7482fb57adfc9b5d54f39e12184041894315c1f54313c412c36da39a7459583c5b16631f07e886aece494615d51866849ca9add5b13c7b51ddb71ddb93d9d0ee539c6546458aa8ee8955ce60b14340ff14fb927932e1ed6c12e8c210a928cf2192724a55fd56c930bd5f6a79d31a0dd75d8aa11c0b70ca5170edac16cfe4086309e5099152a0bc16ad0744ce57f3d67427209cd3918adf10f75f9be201b020000",
    ],
    [
      "ETag",
      "5/RRVyXAufNELUPiyfsGGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000d07fe9b318a45ccadeac12c2205b48e88c7d210895712b5068b52cfbf7999d3f383fa0284bb62cf93a768c8337a00bcbdf97fb7844d83c96689ce9a6b2f532e55a79fc0cdb2f23e12621ba1c6e983af31c9d6a7a17ec3dfb5ea3ca360f4f0f5f6cabae523e5c3b77e8284bf55995483dfac5909018c8494c92f3809bcbc7241dc4559f7dcaaa8e7518a929f08d60ab973b8173a184b7c52c1ca6d16edbf9d08f22d4572b2258fa1822cf5db94a6f751b345b94c9c190744ba07ba268438fab6247b003ec3935822d79f39a41c7f777e0bf99af7a62af2b66856002fcfe01bb5b4fb605010000",
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
      "Fri, 19 Jun 2020 00:21:26 GMT",
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
      jobId: "grouparoo-job-41-1592525998233",
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
      "6d6fa24010feeeaf20dcd7aaf882421373354a4f13c53bc03697cb852ceb40b74596b28b8d69fcefb70bbec0d934fd0633f33cf3cccbce7b4351d417926cd45b450d48f49a43b6fff64c03f5467a80a3487ad07aba72ed75770633eeec277cd77ddabd44a35119450a3443db348626a3798681ddaedd5694d13c4519a54d41d8ec779a1dddecea5ddd348d6eaf576219c4e182242f92e189f394ddb6db271dad88d228069412d6c2747bb6b777dd769ad167c09cb5eb69db22136b7f9ef87b4c31e28426a3b55b8ac819643e6c1189a58c0b7a13dcd5e95b046d5b9188de110c08639a275c4a2b69304d4212e559412e98de8551980bcde7df8a4175ad8535f1144ce37c9bf809dac28db2411cf97c9f8272efac96cadcbe5f39cbb1375fd9be3b9959cb716bb25aac97b6ab3cce2cc752380a6228b0ca48b92bfe6cf153282ab26d807192149a3ce9ad2811de631fe71f8cf04c2149842a06c7307fa80d50c7d0cc200c8638347a7a106a10044630d4512fd0b0d987fe260054652894957894d0440b4dad6798437f637434bf1f981ddfc47dd3d7fb5acfd4b421847a573da20fe75ade32c2614a584a193936597d74e69ee57bceda9e8c3dab5a7788f2984f4be5f5aa6be570d1a0aad2cf5a72a528cd0815a28a71ce6dcf72c6136ffe509121766b0111c27bf7556e578862061734cac4ac38644bba918351edf1d29a5ec0c5a6fc3c053111f1e7acf3528e0894f32f6ab99a7f3d8f2716abd68a7236a555753d676eff502bcec3c7340f28ce3fe0d91dcd6a2abaf5243acc6a5c8dffbffe362a3954f1568ff2d45f6bcbf92db1854f7a1c082183",
      "045fb27e617525b0747fe11489f0d3619008711bcef9191766f18a30bb64c719946f8a949d2f09079a31e8ebfa895000337e1da19b8353c4d57190b9600b093ff5a23c1265230f354979454e0193e1e21dd8c7211e1a87c63fea257f2ae1050000",
    ],
    [
      "ETag",
      "aUDOSNU2HeHtRyCtv2hvkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc554cb6ec23010bce72b907b0589f02a54e2105a5e15050aa13d540899640381244e6d078410ff5edb09900b55a422f5127b77663ddab527472d97435b37b0d1530e2dddd57704f4f0b002fe2e37136091c799584212304079c9068e5792bd363b5dbdbbff287d6ea7a35efd75172c8b2da3d98c59cc5a838f05ef2822113b2e783613f1978a73495e6101f6419e68112ff283850af357981f42054fcd497fd84d233eb115329c0d06466bd0460974cadf16b131c70b75e4df24d43ad71231b421cb09384021b0e0da7548c9062cde57e365d80f3d283012510b5822220b6378454914624a4841a40a15bda0571ba56aa9da68d44be5f299ee110b739704b2623645177d4e38f626642f478c6af11dd0388c277e1e05725297909e908076b2d8b5d12577caff42ec0fcd5a25c54d76732d559959554cca713d58fc93bab89235162f3c9b76f24cee248e7d12053ca374673032eed8b87043d6a65f0cb37d2f59c6851732ea9afdb7f6d434dec637c5c5777e3541ebc0818d29111e63a09ca5172bf5ea63ad88ce4e7d26d2895c1a95d30854dac2e28fd573b9c839d863a09db41f469729481d050000",
    ],
    [
      "ETag",
      "hTFG1GwV2WkSOH8Jvnb0BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-42-1592525998233",
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
      "6f9b30107fcfa740ec65539b8410205029eaa2946d4c69d211d26a9aa6c41843dd02a6d8b44aab7cf7d94012a2665535ed0deeeef7c777f6bdb42449bec769209f49b28fa38702e5eb0f77c4974f4506311089cc4538bf9d30e3e464f6fde659234ffac3335e47c36155854b34054916a33625450e113d5bcc3b514e8a0ce484b439615b53db3ddd527555b72c53edf72b2c457138c1e9bd60b8652ca367ddeed6472722248a11c830ed4092ece2dd47b59be5e40e4146bb87b25dae44bb6f0b9fc7040286493a5ccc2b130545f9122500c7c2c61e1df89f0fe93b18249d88573f62880084a44899b056d1409286382af2929c33bdf0200f979e77bf8d803cb727f6d893c6b3c5d4fbb80289a05b7d92009596cb1cd12266d217777629ad32ae7e0b28a22be9e69bedda3c929310c7688983953494cea5d1f442dad755b18973e97852af34570a0788329c96f63ce0c7a8618a67eb963a47a6b9a31024807185ba6c39500cd03315cb0ffd010ccdbeee870af27dd31fe8a0ef2bd0d29016f808341998d0aef0202569df547c43d503c3570c43d750a00e2c5f83a6da330253d1a16e695033cc815c336c76e779ca314317986684e2bae7f28deb78f6d27317d3f1c8b39b670f016fe845e5fef0e4074762bc494db76fb5e595a32cc7849b2aa7eb4c3ddb1d8d3de7ba61835fb5098a005ccf1fc4650b414cd11e0d72902086f24b1288e1c857b3b9e339b3e968b267286fcfd5b692f2b25f3bb3fb3335d9bc757638ea6a0a5554d83434b991db9c1e65b906717184e6b10ecbbd038ed611b67f7137f75c67faf53fd803191f",
      "dc5f2cd65fbf5b0d7e99af8eda9afc6361bb3f05b6cc898c8b4294a314ee15dff17c04b04abf6333f2f2ed9e1208beaa76fa94f1307fc990eed5618eaa778d936a1a25a1a1583dd3186c09393067af2a5445b5b615af7695d042094ad9b617d5ceaa1ab939b05434ec943051cedfe1b41ee0a6b569fd01aa76926070060000",
    ],
    [
      "ETag",
      "DfShLt6++OJWz4ow5qziyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d51d14ec230147ddf572cf55197c08000263c88a012c99429898921a494bb39dc7667db4106d9bfdb761bf0d2f69c736f6fcfe9c9b26df21ba55b726f934d14fee5c08b9b10e4421f7c10792c85da324c05903b5d0d9286bafaf816b45bcbe3a47fbb8f27c52bdb7b5fded36234aaaa04fb8184aaba93420a0711c45ba1f0b7c176cd1b2da509e81bd76b6e069a1b6a4d1699d166dee7f479ea5f4b096e8de42de7f387f17c4a6aa934fb4aada579ca0e373e04c02165707950c671074cce8c7341932c064760ce19887a886eace490639e518ee828cae9ba4ebb37747b6e6f381cb89d4e531e23a332c254772c3fc879be4449631f0fda3d6957f1f00a5661345190e02a9feb8494b4d7cd2d72a6cafab4b21ab4ba0c1b1712c43b47e5458071d01df44913c6236ab3526721790e866654fdd74b241517d05880555affc53f48281b020000",
    ],
    [
      "ETag",
      "zOf10UzD7+vlDyKcvNXNFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "30",
      "00",
      "00d07fe9f35cb6221bf80603952163a49394be345c5aa80825e53ee3bfbb78fee0fc8034cf59dfd341d6ac052f604da1b9cdb7be34ec9d957f66966ed33a5897db89bcdfbeab27a411fd3804131ccab1f20aa945e86e98cf0eef2aec214583038fb345862ec38b1e214c6a7c49381447e4b3521571264d2ac2bae8adf3aee2d70f014f50fa8363bc5228b27bb890d635474f6237f6dbc541a8c15a12448d83a6fde4c1398297cecf8993bde5e44b8dfe95ef7952f58d2d088f90dbcd6a6ad3c379984bb0016ce984623d158f99a69be606fc37e9b076ec71b559aa9802bf7f5e08f39605010000",
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
      "Fri, 19 Jun 2020 00:21:33 GMT",
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
      jobId: "grouparoo-job-43-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d4fa34010fede5f41b88f675b84d28249733615ef9ab4d4a354632e17b22c03ae5216d945634cfffbed425fe06a8cdf60669e679e79d979ef288afa44b248bd50d49024cf25146fdf1e69a89e490f709448cfddcdf4e1fb6469cdee4d080bfbd55fdeaf97c9785c47910acdd0264fa1cb6859606017eb552f296899a382d2ae20ec0e8ceeb969eba66edab6a51b468d6590c673923d498607ce7376d1efef75f4124a9314504e580fd3cdc1de7fd1fb79411f0173d66fa7ed8b4cacff79e21f29c588139a8dd7ab5a44c9a0086083482a651cd15178d9a6ef11b4e92522fa85604018d332e3525a4d83691693a42c2a72c1f42e8cc25c693efc360ceaca993b535fc1342d375990a10d9c2911e228e06f3928d7de72a1ccdceba5b798f8b3a51baca6bf9cc5a4375dced70b77a5dcfd723c47e1284ca1c22a63e5b2fa73c54fa5a8ca1601e324ab34f9d2db5022bcbb3ece3e18e181429208550c7661c1481ba2734bb3c3381ce1d832cc30d6200cad70642223d4b03d804114026a3254ca6a3cca6866e9230891690548d347c160644681650f21d08623a461ddd2a3305677e8eda196d78270b8222ca78cec9aacde7933df097c6fed4e27bed3ac3b4665caaf6ae5edaa5be570d1a0a6d2cf5a72a2282f0815a2aa71ce5cdff126537f76db9021766b0e09c26fab67b95d314a191cd1a810b3e2502c682407a3ba9385737504579b72b30f6222e2cf41e7b11c1128e75fd57232ff761e5f2c56ab15f56c6aabbaf2bd99fb536d38b71fd3dca2b4fc80e765675673d1ad07d161d6e2eafcfff5b7d3c8a18ab7ba93a7fe5e3bdebdc4563ee9f1208602327cccfa85d595c0dafd855324c2f7874122c46d38e4675c98c52bc2ec981d1750bf295277be261c6ab6716e687b42012cf86984a10df61127c741e6820d647cdf8bfa48d48ddcb624950d39154c868b77e0ee86b8ed6c3bff00eeee8a0fe1050000",
    ],
    [
      "ETag",
      "WPCh+AO8IY5ebr9wTOYUOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1592525998233"
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
      "cb",
      "6e",
      "c2",
      "30",
      "10",
      "bc",
      "e7",
      "2b",
      "907b2c48bc0b953884965224a03cc201550899640301274e6da71545fc7b6d27402e54918ad44becdd99f568d79e1c8c5c0eedbcc0418f39b4f2d61f11b0fddd1ac4586d26c02322b85c421a704079c50681d78a8dc9fdeca1db9eefc773c146bebdfd76761bb3d58a59dcde808f25ef202319bb1e1087cbf85dc7b924afb100fba04eb42989fc60a9c3fc0516fb50c3536bd21b76d3884f1d8d0c67fdbed9ee7750021df3d7451c2cf0521ff93709bd2e8c440c6de96a022e30086cb8741d32ba055bf4f47839f64302054e2366034f4454610caf198d42cc282dc854a15a29946acd72ad5c6b361be54ae54427d4c6c2a381aa984dd1595f5081c9847ea911a37a7c072c0ee3899f4681dcd425a42724a14f55ec39e89c3be67f21f68656bd9ae226bb8591aaccac2a27e57a0496ffa42eaf6483e50bcfa69d3c931b89639f4681c828fdd27f336fd8b87443d6a69f4dab732b592ea41732ea5abd41676a9983d15571f95d5c4cd0de0be02346a5c7386867958ad546eda15e4427a73e51e544a18c2a58043a6d63f9c77af584ccb99870308ec60f963b04181d050000",
    ],
    [
      "ETag",
      "al+U7GBYyQYtrPmcjzdkhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-44-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffa5945b6fda3014c7dff91451f6b249034242b854421d82ac8bc4a585d06a9a26709c93d46d8853dba1aa2abefbec844b5059556d6fc9b9fccfcfe7d8e7b5a269fa234902fd42d37d123d65c05e3e3d505fffaa3c2050a43ccf5768b169dc22e38e5dd37e34f6d18d83a25eaf8822793647eb34862aa719c3c02f16f35ac46896224669550a569bcd6ac3ee9ab66977bb1dd3b28a5c0e713822c9a352b81722e517f5fa9ea316511ac58052c26b98ae0ff6fac6aca78c3e0016bc7e5ab62e2bf1fafb852f638a912034e92de60544c6812d618d48ac308ed981ffed54be46d0ba16c9e80dc18030a65922145a21836912922863b9b8547a954669ce990fbf25833e7746cec0d306d3c5c4fbbc426b25b7faa221ae2d970c78160bedfb6c3ad656a9ac7e8f38f09576f7c39939d2c2684862589260a5f5b44bad3f196ada2a40028aff913b763dad9183e54503e08224399a87fc184a40d2bb6ba77b66920709258284a4d8852ddb460b353a46d70ffd360e3b96ed8706f87ec76fdbc8f20ddc6d4233f001951584aa5de4a384267e27f45bbed585366e36916563033a2da31b84b661586ddbc2010e82060af59dc2f6709e6746040c094f2927bb7eeb7733d77396de6c3119f43da77cf610c9660e0bfad3939f1c49c8269569df6bcb1ba294112aa1f2c9ba13cf99f5079e7b5bc290d76c0411c22ff32775d142147338662386d620808d69a086a35f4fe7aee74e27fdd15121bf39d7fb482ec37e1d608f672aab792fe9e9a88b29145685d96aea25dff6eb59955b14676764363bb3de38d1a89c51fb17baa11ae2ffc3998669540d532e81bf50eebe7e574a4574b9397674facdc299fd54b9b94f7966100283041fcb7ee005a9c4c2fd81c528c3f76b4a65c84d75a8cf8534cbc78cf9b13a66503c6db22e06920bca97641b2d7b2f281399781b6136cc7dc49b55a56ac11a12b1ef45b1b28a466e4f90b2124e9ea6c2e5539cb893ab1cbeb2adfc017c604c0f6f060000",
    ],
    [
      "ETag",
      "wGaUv1Va0WrPoAgMbaQEag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1592525998233"
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
      "0002ff4d51d16e8230147de72b48f73ab28990c8121f7421d384188733d9b21853e1c250e0625b5c8ce1df6d0ba82f6dcf39f7f6f69c5e0cd32487ac8cc99b4976597aac819d9f52109fea1002af73c1e55661c9813cab6a103455d5a797cc99ac82a517f09f61f07d38bab351998ec76d158ffea0a0b2ee2291c4490679cc25fed5d8ec78ad95b40075e376cbf4407d43a78973a5b5f9e2cbfff0c347a9c0584b8b75104ca6814f3aa9d1fb46ae8d7eca1e772124c0a08ce0fea08ae11e2231d7ce392daa1c2c8e358b80774354632ba70ceb8a32444b5296e35803d7b35ddbf5bc913d1cf6e53946546458aa8ef58adce60b14340ff15fb92783361ed6c2368c3e0a923ce4f39890944e6df38d6abad3c6e8d1e63e6c7a16c0970ca5170eda81337a257d18efa8cc0a95856035683aa2f2bf6699905c42730e46635c017e2d93bb1b020000",
    ],
    [
      "ETag",
      "v/i4ASLP9LsY3LXkq5H8ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "cfdb4e83300000d07fe9f35cc62d806f14091757c13131f842a0948bda016d8182f1df5d3c7f707e408931e1bc10c317b98147b095aa7dc4c7e7c18227a78e158f2392253214859bf1304ec7c0cccbe165ee74efad4bc2747774f5aa3c094b678a577111cccbc378be289b718dceb340cd7cad7d68538cd6c88cb864ee8a5d3dfa7484a32e29b9a12aa0fb127fbc4b7f94fbf78c3d2b936a35ed7956170cc192976daaaf9a06c3756fcc69b068dc6b59feda8c55eb39c98aa43ad0b9f6fd1335e894a30e468abcd8610b0e80c8b1678417fd7da619b67d00ffcd426c23b95f21291961e0f70f95dec36805010000",
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
      "Fri, 19 Jun 2020 00:21:37 GMT",
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
      jobId: "grouparoo-job-45-1592525998233",
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
      "54db6e9b40107df75720fa1adfb0892192d5580e6e2c19dc62eca8aa2ab42c03d904b3945d5c5991ffbdbbe00bd4519437989973e6cc65e7ada528ea2b4943f54e510312ff2920df7f79a1817a233dc0512c3d906d16ebdd6ca76ff6d1ccb4b53523457f321e5751a44433b4cd1268335ae418d8dd7ad589735a6428a7b42d08db43bdddd74d4dd774d334b4c1a0c23248a205495f25c333e719bbeb764f3a3a31a571022823ac83e9f66cefeeb46e96d317c09c759b69bb2213eb7e9cf86b4231e284a6e3f5aa125130c87dd822924819177418dc37e93b046d3bb188de110c08635aa45c4aab68304d23121779492e98de8451984bcde7df9a415d590b6bea299826c536f553b4851b25441cf97c9f81327397b63277664bd79e78f3a5e3afa68f963de94c978bb5edac94a747cbb5148e82044aac3256eecb3f47fc948aca6c21304ed2529327bd3525c27bece3fc9d119e29248950c5e018e68f7ab7a86ff4cc200a463832067a10f520088c60a4a341d0c3e610866100a8ce502aabf028a5a919a0411446a1af8578e40ff5a1e91b6168f886711b051a8e4c08403da20fe75afee684c303611965e4d864f5c99d7b96efb96b673af1ac7add112a12fe50296f56dd28878b06d5957ed4922b45594ea810558e73ee78963b997af34d4d86d8ad05c408ef577fe4764528617041a35ccc8a436ed3500e467526b6f57001979bf2fd14c444c4afb3ce4b392250cebface56afecd3c9e58ac462baad9545675e5b973e79b5a731edea7d9a0a47887677734ab99e8d6b3e8306b70b5fefffaddaae550c55b3dca537fac2df7a7c4963ee97121821c527cc9fa89d595c0cafd895324c24f87",
      "4122c46d38e7675c98c52bc2ec921de750bd295275be22bced9946cf189e080530e7d7115adf38455c1d07990bb690f2532faa235135f2d09054d4e49430192ede81731ce2a17568fd0328fbe7c5e1050000",
    ],
    [
      "ETag",
      "epVLUvFv5VyfF9M2Usiu1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1592525998233"
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
      "cb",
      "6e",
      "c2",
      "30",
      "10",
      "bc",
      "e7",
      "2b",
      "907b0589577854e2105adaa2f22a04a96a859049361048e2d476a008f1efb59d00b950452a522fb17767d6a35d7b72d07239b471031bdde7d0c25d7e4540f7774be06f72330616799c892524010394976ce07829d9db0f6b37acbf7f6ff16ec43aaf9b4ac558e05dab15b398b5021f0bde414422765cf06c26e24f15e792bcc202ec833cd1225ee4077315e62f30df870a9e98e3eee0398df8c456c860daeb19ed5e0725d0317f5dc4c61ccfd5917f9350eb4c4bc4d09a2cc6e00085c0824bd721256bb078578d97613ff4a0c048442d6089882c8ce125255188292105912a54f542496f96f5b2de6c36ca95ca89ee110b739704b2623a41677d4e38f6c66427478c6af11dd0388c277e1a05725297909e9080b6b2d8b5d13977ccff42ec0ecc5a35c54d76332d559959554cca713d98ff93bab89215162f3c9b76f24c6e248e7d12053ca3f4536f68dcb071e186ac4d3f1a66e756b28c0b2f64d435bbfdcec434faa3abe2e23bbb98a0bde7c04694088f3150ce2a15ab0dbd5e2ba293531f8874229746e5340295b6b0f863bdb85ce41cec31d08eda0fc8f024df1d050000",
    ],
    [
      "ETag",
      "vZcwO7XxvawPsEKk33Abaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-46-1592525998233",
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
      "4f",
      "db",
      "30",
      "10c7dff75358d99b4d5adb3c347d922a5695b065ea036b53d098a6d6719c6048e2603b2084f8eeb3933e24822134ed4d959eeffef7bb3bfb9e1a0068b7240db421d07c12dde5983d7eb8a1bef6599d6001237562da4990774fd937fb6c4d1fc2d59a7c4fafc6a351e9458a680e932cc64d4e7386301fae57ad88d13c838cd2a6146c76ba4dc31e98b6690f067dd3b2ca588ee3704ad25ba5702d44c687edf69ea315511ac5186684b7104d0ef6f6bdd9ce18bdc148f0763d6d5b66e2edb7139fc4144141683a5aaf4a889c63b6c10924b1c2384607fe97ba7c8bc0a41549ef7b82304488e6a95068a50ca26948a29c15e252e9491aa5b9603efcad18b4953375261e982cd673efe316264a6efb09400e361b86791e0b70b65cccc03693d9af21c77c0b2ebf394b475a180d498c3724d882113801e3f929005b2e246e6998ba33d703464156640d3017242dd83ce8c7b842244f77fd745f19e5414289402131766e9b9ede85465f1ff8a1df4361dfb2fd50c7bedff77b36b47c1d0d3ab813f818561584ca5dc6c394a6c1a08fadc0304c198d2cd8d37bbe9c5168dbb863875660a12eec0676a7a3ed149e0ff53c3022f029e119e564d770ed72e97acec65baee793b1e7546b0fa1ece669495fafbc5692904daad2bed59617441923544215a375e79eb31c4f3cf7a28221efd91447103daeeed44d0b61ccf1311a32986081d98c066a38daf962e57aee623e9e1e158aab73bef7e4d2edd701f6585355cd7bcceaa32ea7505a1566",
      "f7d0db5a3575950b18e7afc8dcefcc9a51d368bca2f62f749e3b7356de7876fe1f084dddd49bba295781679843c31a1a9d96aeeb577f01df7dfd6e54526a729bec80b51f6b67f953c51667ea648943cc708a8e10ef78542ab03c7ec7b294eefbd5a522e4f63ae4970f5f10f9be113f66470c97af9d24e58c0ac1aea1cb5f732f28039978e9215ff6dee3c5fa52b9708253b1ef45b9c6ca463ed790f20a4e11a6dce5eb9cbbf3af057ce3b9f107ff8b0bcb83060000",
    ],
    [
      "ETag",
      "25mdu6DrH5FUowfSUiJnZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1592525998233"
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
      "6ac230147def5794ec75855975ce810f3a64ca44b6aa0c1c22b1de76756d6f96dc3a44faef4bd2567d4972ceb93737e7e4ecb82efb49f23d7b76d92e897f0b90a7bb18e8c31c0250454a4a6f027305ecde5403f1d854f7d6dc7f9b4f3e17b4ec1dd799102dea7586834155a5c26fc8b8ae3b6ba4719440ba571a7f59ecd6bcd5729e81b971bb9576a0bda1d6e824ac369d2fc7afe3e056ca706fa5f96a361b8e6663564ba5dd377a2ded530eb80b2002097908d70709890708696a9d2b9e89143c85850c41d5434c6325c7120bc125a2a729aff3e8b5ba7dbfeb77fbfd27bfdd6eca530c3925989b8ed5825de613124f03fc33ee59ab8a4756b00aa389824537f9dc26a4a563d57ca1cafab4711ab4b90e1b9d08d4bb44ed458175d0797a604d182f68cc92c9826401960eb9feaf49429a8b78aac0299d7f0bc9dafc1b020000",
    ],
    [
      "ETag",
      "7Za2KNHWStT7vZmpp1t74A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "7fe9b31a068ab0373ab74844092084ee851456a0b0964b4b0596fdfbccce1f9c1f808b820891c9ae251cbc8205ebf6aed85d3a0b6a4e09190aa373e6449897c82b9ab6cccbbdbb12be9d93e5162acbf4c208a1e150112b0a94927daa9852a27de14315f0d838ed692e8377b39475fc6935d38cdd78612495d4ac75a6aae11b5629f6bdfe0b3e8cd61eabeb871193a0d68ee24e69f866621fd5b70c393576bba96df094c8d5ca2fc2df325ee47704f375358e0f3d3a1716b92eba1a929336f68c766003c8dcd391888c3e67c6c1b637e0bf99c9a527cf2b24782423f8fd03e94d7c7005010000",
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
      "Fri, 19 Jun 2020 00:21:45 GMT",
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
      jobId: "grouparoo-job-47-1592525998233",
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
      "a24010feeeaf20dcd72a8a52b089b91a4baf268a3dc03697cb852ceb40b74596b28b97a6f1bfdf2ea0c2d934fd0633f33cf3cccbce7b4751d417926ed42b450d49fc5a40fef6ed9986ea85f40047b1f46c2c2d4ea62ebf5f59b75eeae88ec79fd17432a9a2488966689b25d065b4c831b0abb5d78b735a6428a7b42b08bb23b33b30c6baa11be3b1a50f87159641122d48fa22199e38cfd895a61d74f4624ae3045046580fd3edd1aeed742dcbe93360ceb4765a4d6462dae789bf2714234e683a597b958882411ec0169144ca38a137e1759bbe47d0b6178be81dc18030a645caa5b48a06d33422719197e482e95d1885b9d47cfc6d1854cf5ed8335fc13429b66990a22d5c281bc451c0df32506eddd552993bb72b7739f5e72b27f06677f672da9bad16eba5e3298f77b66b2b1c8509945865a25c977f8ef8291595d936c038494b4dbef43694086fddc7f907233c524812a18a411d1698fd4b34b0fae3300a4d1c5943238cfa108656681a6818f6f17804a34d08a8c9502aabf028a5a919220381350e903940c1c8345180427d188c2c7ddc1f01e8d81aaa357a7face56f4e38dc10965146ea26ab8feedcb703df5d3bb3a96f37eb8e5091f09b4a79bbea56395c34a8a9f4b3969c29ca724285a8729c73c7b7dde9cc9f3f346488dd5a408cf09bf72ab72b420983131ae562561cf225ddc8c1a8ce7469df9cc0e5a6dc1f829888f87dd4792a4704caf997b59ccdbf9dc7178bd56a45359bcaaa7abe3b777ea80de7fe639a0794141ff0ec6ab39a896e3d890eb31657e7ffaf3f9d460e55bcd5",
      "5a9efa736dbbbf24b6f4498f0b11e490e253d62facae0456ee2f9c22117e380c12216ec3313fe3c22c5e1166a7ec3887ea4d91aaf315e1e5a06f18a3c1815000737e1e71691a8788b3e32073c116527ee8457524aa46ee5b928a869c1226c3c53b70ea21ee3bfbce3f79659070e1050000",
    ],
    [
      "ETag",
      "d8/glARtPO8FSnN2NStjaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1592525998233"
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
      "6b",
      "c230147defaf28d9ab82df1f031fea744e50e76a85c91089edad56dba64bd20d11fffb92b46a5f1c85097b6972ef3937877b93d3a3a6eb68ef850e7ad4d1dadb7cc6400f0f1be06f7263028b7dcec4129190012a483670bc91ec59eb7561ee06a57277ffbee805eb92b1e32da3d34958ccde428005ef282211bb1ef80e13f1878af534afb01007204fb4891f07e14a85852bcc0f91826796399c0cb248401c854ce6a391d11df5510a9d0ab7451cccf14a1df93709b52eb5540cedc8da04172884365cbb8e28d981cd876abc0c07910f4546626a034b456461026f2889234c09298a54b1d62c96ebed4abd526fb75b956af54cf7898db9474259319fa18b3e271cfb26f99623468de40e681226133f8f02b9994bc84e48405fb2d873d025772afc421c4eac462dc34d774b2d53995b554ccaf57c58fd93bab8922d162f3c9f76fa4cee248e0312873ca7f4f3e8d5b863e3c20d799bee1956ff5eb28c0b2fe4d4b586e3fecc32c6d39be2e2bbbc9aa07be0c0a694088f3150ce2a976aad7ab3514267a73e11e9442e8dca690c2a6d63f1c77af1b8c8b9d867a09db41fcf10b08c1d050000",
    ],
    [
      "ETag",
      "S8OYRjG01BkXYDmb0Ajt8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-48-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffad946d6fda3010c7dff329a2eccd260d089040a8843ad4a65b340a2d8456d33481e35c52b7499cda0e535bf1dd67273c049555d5b41748e11efef7bbb37d2f354dd31f481ae8279aee93e83107f6f4e19efafa67e5018122e5b98a9ed96d82bfdf0f4d173ab13f593df7e2ebc1a08c224536474916439dd39c61e027f359236234cf10a3b42e05eba65d6f59fdb6d5b6fa7dbbdde994b91ce27044d207a5702744c64f9acd2d4723a2348a01658437304d76f6e6aaddcc18bd072c78f3b06c5356e2cdb70b9fc6142341683a98cf4a889c035b408248ac30f6d981ffe550be4150d28864f48a604018d33c150aad94c1340d4994b3425c2abd48a33417ccbbbf15833e7346ce99a79d4de663efe312254a6ef949435c5b2c18f03c16dac57472a92d3359fd0e71e04bedf69b3375a485d190c4b020c1521b68a7da707cae695b89c232722f5d4f6b156845d900b8206901e7213f860a92f46e06ea1e39cb9d84124142726cc2163da38b5ab6d1f743bf8743bb63f9a101be6ffb3d0b757c03f74d30031f505541a8da653e4a698a6cd40e7c132cbbdb01dcf3cd8ed1c71d33f42d3b287e5ddbeedb3da46f14d6bb7e7e3322e09cf08c72b299b87e3b753d67e14de7e3b3a1e7547b0f911ce779497fd8f9414b420ea94afbd6585e11658c5009559cad3bf69ce9f0cc736f2a18f2a28d2042f869f6a8ae5a88620efb6cc4500202d8250da078759399ebb993f170b45728eeced53692cbb09f3bd87d4f5535ef293b3ceaf2144aabc2ec9a7ac5b7fe7c54e506c5f91199d5c6acb70e346a47d4fe85ee623419fe27be8665fe0571f3f5ab5691d7e5e2d8a0e9d77367fa43e5163ee59942080c52bc2ff88ee7a3124bf73bf6a20cdf6e29952117d5ae3e17d22c5f32e6fbea9841f9ae4952765b08765b46cfb0da5b4199c8c4eb88b6616c235e6d2a550b1248c57616e5c62a07b93e40ca2b38459a0a97ef70ec8ebf16f0b575ed0f1037ceeb6e060000",
    ],
    [
      "ETag",
      "PgzrWmcKjA4Ie3lbOvz7lQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1592525998233"
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
      "48f73a12c599c0121f74219b9b331bc3646631a6e20571c0c5b6cc10c3bfaf2da0bcb43de7dcdbdb737a314c93fc26f99e3c9a6497c4a71258751783f854071f78990a2eb702730ee45e5583a0b1aa76a641f5bd7ef50787f32aa8cab777ffe4ade3c9a4a9e2e101322aeb2e12491c2590eeb9c43f1a9b2dafb59c66a06edc6e991ea86f683551155a9b2f03efd9f3fb52867b2d2d578bc574b6f0482bd57adfc8b5d64f39e2ce870818e421dc1e54303c4228e6da39a7599182c5b16421f076886a6ce498615950866849ca7a70ace1d8b5c7f6d8751d7b34eaca530ca94830571dab2f729d2f50d0d4c7b3724f864d3cac814d185d1424eae5d34f484a7faad92657aa6e4f1ba3439bdbb05925807f30945e386807237b40ba309e5099152a0bc14ad07448e57fbd244272114d3918b5f10f0efd78671b020000",
    ],
    [
      "ETag",
      "8ATyXYJR0hwUTyuKMRqEYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "8b08000000000002ff1dcf4b7282300000d0bb642d0e1f85d21d90c25084a87c0a6e3221048928ff0e42a777afd37783f70308a56c1cf1d4d6ac01ef6021b2bea55baf7d334583666e2a777d3897659da09286e625ceedb9d6f68e56d1535f34a275511fd08e77511af0e3c982837a4f60ea8c5ec0efee473147bccfe3443e3ac2f9f04487eb0491d321354bd288fab34426ff532f64a5a88984ec423ca128c66b6b0865955beef025e5b31f18a4b9dd42cc6ce381e46cc557a10abd681476e759834a3ed890eba2ca17b3f87668d3a5ddca4c6e800d60cf8e0f6cc4fc3553f6babe01ff4d3c2d1d7b5d4d46063680df3f0f9d6f6d05010000",
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
      "Fri, 19 Jun 2020 00:21:47 GMT",
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
      jobId: "grouparoo-job-49-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6e9b40107df75720fa1adb5c6c0747b21acb2635528c1b8c13b5558596f54036c52c6197544ee47fef2ef8027514e50d66e69c3973d9796b298afa87a46bf54a5143123f17906fbf3cd150bd901ee028961e7376f7bae293c7d7fb1971ace9169bbdf5cfbbd1a88a22259aa14d96409bd122c7c0ae56cb4e9cd3224339a56d41d8ee0ddb7a7f68f48dfe706819a659611924d12d49ff488647ce3376d5ed1e7474624ae30450465807d3cdd1de7d31ba594e9f0073d66da6ed8a4cacfb71e2af09c588139a8e56cb4a44c1200f60834822659cd0ebf0ba49df2168d38945f40bc18030a645caa5b48a06d33422719197e482e94d1885b9d47cfcad19d4a57d6b4f7c05d3a4d8a4418a3670a1ac114701df66a0dc788bb9e2b8370b6f3ef69d851b2c27337b3eee4c16b7abb9bb541e66b6672b1c8509945865a45c977faef8291595d9d6c038494b4dbef4d69408efbe8fce3b233c524812a18ac13e2cb8d40648b7b46118859738b2cc7e186910865678d94766a8e1610f7aeb10509da15456e1514a533dd48c81a1e3000d4c087a661f05c3a83f080ccbd4752dec81a981ba47ef8eb5fccd09872961196564df64f5c1737c3bf0bd953b19fb76bdee0815099f56ca9b5537cae1a24175a51fb5e44c5196132a4495e3745cdff6c613dfb9afc910bb750b31c2dbe5b3dcae08250c4e68948b5971c8e7742d07a3bae3b93d3d81cb4df97e086222e2d751e7a91c1128e75fd67236ff661e5f2c56a315d56c2aabbaf43dc7fda6d69cbbf769ee5152bcc3f3b237ab99e8d6a3e8306b70b5fefffaddaae550c55bddcb53ef56b6f743624b9ff47810410e293e65fdc4ea4a60e5fec42912e187c32011e2361cf3332ecce2156176ca8e73a8de14a93a5f110e74cdd20ced402880393f8f3074eb1071761c642ed840ca0fbda88e44d5c85d4352519353c264b87807ee7e88bbd6aef50f3011d03fe1050000",
    ],
    [
      "ETag",
      "3HQzUtChzVHiI8Dyc34dZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1592525998233"
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
      "00000002ffc5545d4fc230147ddfaf20f55148f81828263c4c4525022a8c44630829dbdd186ebbb3ed34c4f0df6dbb217bc12c91c497b5f79e737b726f7bf665542ae42d885d725121cbc07f4f816d4e7c104f6a33019e8682cb25c19803a92a3608ea2bb649eb33f705ef1bb0364f4dcb6278f5ecfbbd5ec6e2ce0a222a795f3292b11740e87219bfeab892e73516d308d4890e8669142f7458ddc3629368786a4f06e3db2212a1ab91f16c38b42e877d9243dbea6111970abad047fe4d42af732317236b5c4ec00306b103fbae13866b70c4408f97d32809a1c631650ef05c441566b0cf304d2843acc954cdecd61aed6eb3dd6c77bbe7cd566b470fd1a122c05855cca6e4475fa0a0e1043fd5884927bb039685d9c477a3205ee1128a1392d0872a0e5cf293db567f210ec676c72c70f3dddc285496569593f2821016ffa42eaf6445e50b2fa79d3f932389d308d3589494be193e58476c5cbaa16cd3d796dd3f962c17d20b2575edc1a83fb5add1e34171f99def4d70b911c01f194a8f71d0ce6ad4cdf3f659a74e764ebd42e544a18c2a580a3aed50f9c7ba0b84cc7934e4606c8d6f2059470b1d050000",
    ],
    [
      "ETag",
      "4a0UdYoK1ej4+4AAroCXgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` != ? LIMIT 1",
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
      jobId: "grouparoo-job-50-1592525998233",
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
      "0000000002ffc5945d6f9b301486eff32b3c76b3a94d0221245029eaa2946d48f9e812d26a9aa6c438867a054c6dd3adaaf2df670349889a55bddb1d3e1fef79ce39d8cf0d00b47b926eb40ba005247ac8317b7aff8b06dab9f2600123e579f833195fe7f6fdd9bd3d8e53929dc55d6146834119458a6c0e932cc64d4e738630bf582e5a11a3790619a54d29d8b4f4a661391dab63398edd31cd3297e3381c93f45e29dc0991f18b767bc7d18a288d620c33c25b88267b7bfbb1d3ce18fd8591e0ede3b26d5989b75f2f7c19530405a1e960b92821728ed90a2790c40ae390bd093e1dcbb7084c5a918c7e24084384689e0a8556ca209a8624ca59212e959ea5519a0be6fdb166d016eed81df960345b4efd0f6b9828b9f547003958ad18e6792cc0e7f96c02d699ac7e0739e66b70fbd59dbbd2c2684862bc229b3518804b309c5e01b056a777ea38f6269e0f8c82aba8b9c15c90b420f36110e31a8ff456d3f44e2c722fa144a0901055d8aaaff7a061eb4e10067d14daa615843a0e023be85bd00c74e47471771360585710aa76990f53392e07ea46881cb3d7d1fb762790db31ac6ecfecd936b46c13997d14f4fb1b53ab14b6fb7e7e3322f015e119e5a41ab7763bf77c77e5cf97d3d1d077ebbd8750cef2aaa43feefca825218754a77d6d2c2f883246a8842a16eb4d7d773e1cf9de4d0d43fe65631c41f4b47850ff5908638e0fd990c1040bcc2674a396a35dcf169eefcda6c3f141a1f871ae77915c86fdd8c31e7aaaabf94fd9f1aacb2d945685d9eb6a35dff6fca4ca0d8cf313328f9559338e341a27d4fe2b9df50fbceaeb67a326aec917a3c2d2be2dddf977955bf894678e43cc708a0ee5de70755462e97ec38328c377cf93ca902fd4be3e17d22c6f31e287ea88e1f24e93a4ea5509f60cdd760c7d272813997811e1e8cebee48b274ad5c2094ec56e16e553550e727b8494d7708a34152eefe0d49b7e29e01bdbc65fb7d3cc",
      "cf67060000",
    ],
    [
      "ETag",
      "qxMLPu8k+k8Llnip+l4t3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1592525998233"
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
      "00000002ff4d515d6f8230147de75790ee75247e8c4496f8308d992ec44ca6dbb2c5985a2e0c065cd6961963f8efb605d497b6e79c7b7b7b4e4f966d93dfa408c9a34df649fc57013fdec52057fa1080a83229d456622180dceb6a9034d6d5919f782ff8be4c3fcbf9d75a1e3ea6b960abf1b8a912ec0772aaea4e0a291c25908542e16f83ed96375a4173d037ee76dc0c3437b49a3c96465b2cd7b3e759702be5181a69b9f1fda7893f23ad549b7dabd6da3c25c57d00117028185c1f54724c81c985712e685e66e008ac3803d10ed18d8d1c73ac4aca111d45396ecfe9bbdec01db89e371a0c875d79868cca040bddb1792397f91225cd023c68f7a4dfc4c31bd884d14541a29b7c6e1352d2bf6e76c985aadbd3d6ead0f63a6c7294205e392a2f028c8387518f74614c519b953a0bc92b3034a3eabfe689545c443301566d9d01231d1a3c1b020000",
    ],
    [
      "ETag",
      "fLi9JoVNjXpHZTtwWCmscQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ff1dcfc77282400000d07fd9b338a10ab985169a54297a61605d22a0a12c084b26ff1e27ef0fde0f28204418e753d7a26ff00e48c1487bb8b73b517efba846d9bc2ef73e4b2fa2760a144aec12facc1a56942deaaa43bacfed35084b6db89f982c78066def6ef8827c859d61e308446fb15571c72fd53e78a2e3ca3469cd0717217b2189c6e39b4705b1be25e645343a6655392c52425bd8bea039d2133b06ce1e87c99d4b0f12f869379b700eaa6bdcab4aaca5f9cdaa1b4b8dce3c1967bf4c9ba359f8f48486d0da863c5cc00ea0b5af4784f3fa35637949da81ff663e911ebdae322a463482df3f9af0409005010000",
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
      "Fri, 19 Jun 2020 00:21:49 GMT",
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
      jobId: "grouparoo-job-51-1592525998233",
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
      "00000002ff8d54db6ea330107dcf5720f6b509907b2a45db34a51ba484ec12d26ab55a216306e296608a4d5651957f5f1b7281b6aafa063373ce9c3963fbb5a128ea334902f55a517d12bde490edbf3d515fbd9219e0289299fec69acc34b619e8fbd92ddca78fa370771b8dc7651529d00c6dd3189a8ce6190676bd5eb5a28ce629ca286d0ac266cf681abd51bbd7ee8d46c376a7536219c4e19c24cf9261c379caae35eda4a315511ac58052c25a986ecf716dd7d6d28c3e01e64cabb7d54427a67ddef87b4c31e28426e3f5aa149133c83cd822124b191774e0dfd4e95b046d5b91a8de110c08639a275c4a2b69304d4212e559412e985e4550840bcde7df4a405d997373ea2a98c6f936f112b4852b25401c797c9f8272ef2c178a65df2f9dc5c4b596b6b79aceccc5a4355dced70b7ba53cce4cc75438f26328b0ca58b929fe6cf153282aba05c038490a4daecc569488ecd147eb83159e29248950c5e058e60df43e3286fac80ffd010e879d9e1feae0fb437fd0431d5fc7a32e74031f5095a15056e251228c0a50b7d386d0eb1b01785db11a0f7570e8e13e46bae1f7daa3b6ae1ed187f32cff32c2e18eb094327234597d742cd7f45c676d4f27ae599d3b4479ccef4ae5f5a96be370615055e96796bc539466840a51c53a2ddb359dc9d4b51e2a32c4d99a4384f07ef5224f578862061734cac4ae38640b1ac8c5a8f66461de5dc0c549f9792a62a2e2cf59e7651c5128f75fccf26efff53eae3858352bcadd945175e53a96fd43ad240f1fd33ca038ff8067770caba9706b231c6635aec6dbafbf8d4a0f55dcd5a33cf5d7da747e4b6c9193190742c820c197ae5f38ba1258a6bff01489f2d3c32011e26d38f7675c84c52dc2ecd21d6750de29523a5f12f60d5d500e4f840298f1b715866ef4bba78a778f83ec055b48f8c98bf291288d3cd424e51539054c968b7b601f9778681c1aff01ac52",
      "0d0fe1050000",
    ],
    [
      "ETag",
      "6hIAH/sh70yHBeFpW9fvBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1592525998233"
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
      "54514fc230107edfaf20f51512418762c2c3405412408411630c2175bbc170dbcdb61381f0df6dbb017bd12c91c497b577df77fd72d77edb1aa51279f72397dc94c89b3fff4880adcfe6209ed466043c0904974b8c110752566c1074aed8ad71ad8ded78b37c86fbafcd62dde9bfacd06a36531677161052c9dbca48c69e0f81cb65fcaae35296d758444350273a18246134d361f9088b75ace1b13dea0eeef34888ae4606935ecf6af53a248376e59f455c2ae84c1ff93709bd4e8d4c8c2cf16d041e30881c38761d335c8223ba7abc9c867100158e0973806722aa3085e70c939832c48a4c55cc6aa56a366a66cd6c34ae6b17177b7a800e153e46aa623226077d818206235ca911937a7a072c0dd389ef4741bcdc25e42724a14f55ecbbe490db957f21760776fd32c7cd765323575958554ecaf30398fd93babc9205952fbc9876f64c4e244e434c225150faaef7689db071e986a24ddf5a76e754b25c482f14d4b5bbfdced8b6fac31fc5e5777a34416b2d800f194a8f71d0ceaa9e5f5e9b57f573b2776a1b95138532aa6009e8b443e51febc11732e7d18083b133be0192fa5c771d050000",
    ],
    [
      "ETag",
      "BS2CoCpzjWeGxzhyEMYwoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-52-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffad545b6f9b30147ecfaf60ec65939a0b0412a81475514a37a45c3a42da4dd39418c750b780a96d525555fefb6c200951b3aa9af606e79cefe273ecf3d25014f501a76bf55c51031c3de6883e7fbc27817a263388834866ac4d9edf7783e0ce3074e3c7e4ca7ff4accdd3605056e102cd4092c5a8c9484e2162e78b792ba224cf0025a429089ba6ded44c5b3775d3b62dbddb2db10cc5e118a70f92e18ef38c9db7db3b1fad8890284620c3ac0549b28fb7377a3ba3e41e41cedac7b26da1c4da6f0b5fc404028e493a58cc4b133943748912806369e3805e075f8ee95b1824ad48546f3044004292a75c5a2b692049431ce5b420174c2f2228c285e7fd6f2da0ce9db133f295d16c31f53fad4022e9569f15c094e5922296c75cb9f26613659509f53bc0105b29b7df1ccf11114a421ca3255eaf948172a10ca797caa16ea57c90c1b13b717d452bdc15ca6bc4384e0b7f3e0862547325b2554fdd13e3dc534812c0854455b6ec777a40b33a7610067d185a5d33083b2808aca06f826ed081b6818c7580409d814bed120f52929aba1dda3a84bdd0ee597dc3b634bb6b0bca8e1686611719661fad352beca915c3767f9e278a39bac42c230c574d576f3dd77796beb7988e86be533f7b0844472f4bf7c7273f3a12174daabb7dab2daf1c65141361aa18af3bf51d6f38f2dd9b9a0d71d7c62802f079fe286f5b0862860e6840418238a213b296c351af6773d77767d3e1f8c0505c9feb5d251365bff6660f67aab3f9cfd9f1a8cb29945169b367a8b5dcf6ec24cb0d88f313349b2aac6a471c8d136cffe26eee7beef4eb7fb037ccc4e0fe62b1fafadda8f1ab627754d6d4ef0bc7fb29b1454e663c14228a5278507cc7f391c032fd8ed528ca778b4a22c4aedaeb332ec2e225437650871495ef1a27e5340ac29ea6e9a6d5d9110a20e5af2b2c5ddf55bc5a56520b2528e5bb5e944bab6ce4f6c8525eb353c064b97887d36a80dbc6b6f10780e47e4371060000",
    ],
    [
      "ETag",
      "8vuuj3bbh4424XMFTqR8vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1592525998233"
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
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48",
      "7d9587c1d0cd640f4e892e214471f341b32c1d5c181b70b12d2a59f8f7b505b6bdb43df79cdbdb737a344c931cb232260f26d966e94f0dacb94941bcab4308bcce05975b85250772abd42068aad4e02c9f9d037f635fcbc5ff5df359ec9200d3d9ac53f168070595baa344122719e43197f85b63b3af6baea405a81b371ba607ea1b7a4e3495e616c1d27bf1c26baac05853c1caf71fe7be477aaad5fb5aaead7eca1eb72124c0a08ce0f2a08ae11e22b1d0ce392daa1c2c8e358b80f743546347a70ceb8a32444b962cd7b646eed4766d773a9dd88e33c8738ca8c8b0541dab0f729e2f50d03cc43fe59e8cba785807bb308628487295cf754292fa55cd63722eb5fd696d0c687d19366f04c88f41e9858376309edc93218c27546685ca42b01a7439a2f2bf5e33216b09cd3918ad71026fdc34c21b020000",
    ],
    [
      "ETag",
      "e3TD3ksPrZTIx6yVmhfNog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "82300000d07fc9591c642bf40694a5c856918c9e980423fbd28040ecf4dfebf4fdc1fb0128cfc93465f3d0901ebc0386046d9fef8f836af0fa8d396d12b8a5aaf597fb9b69c6a4b020d771abff9410570b365f2926340de1da69be82dd5bc027430afde8115869f8e80b1c3095786b1c35a3e97cad6a3c7d96b18ce909e7496ab4b135b1eabad517d68ee1ac4a6e63c790c767c516c33bacb63634e9217250969c73223f69bb2cd4d0bfa54e1014df3d2e96be207e68c5a4c2703d951fe8207b81572c13ab5d15ec00d9c68a9229ab5e3351d6b41df86f66331bc9eb6a10440905bf7fcf88c12405010000",
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
      "Fri, 19 Jun 2020 00:21:53 GMT",
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
      jobId: "grouparoo-job-53-1592525998233",
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
      "546d6f9b3010fe9e5f81d8c735098440924ad11aa5748d94908d9076d33421e31cd42d608a4daba8ca7f9f0d7981a5aafa0deeee79b93bdb6f2d45519f48ba512f153520d17301f9f6cb230dd40b99018e2299197a7ce98c2c0a8be82b4ab6239e1abf9693f1b8aa22259aa1248ba1cd6891636097eb5527ca6991a19cd2b6206c9b465b37473db3678e46c39e61545806713827e9936478e03c6397ddeec14727a2348a01658475304d8ef1ee4baf9be5f4113067dda66c5728b1eec7c2df628a1127341daf5795898241ee4382482c6d9cd09be0aa49df2128e944a2fa85604018d322e5d25a4583691a92a8c84b72c1f42682225c7a3efed602eaca9edb534fc1342e92d44f510217ca0671e4f36d06ca8dbb5c2833e766e92e26de6ce9f8abe9adbd9874a6cbf97ae1ac94fb5bdbb5158e82184aac3256aeca3f47fc948e4ab50d304ed2d29327b3352722bb9fe3ec9d151e29248970c5605fe60f340be9436d1484c1008743c30c420d8260180c4c64041a1ef5a1bf0900d5194a67151ea534352dd00cdd30fdd0b42cbf1f9a818f341dfb818efb86160c60a069ea1ebd3bf6f29a130ed784659491fd90d57b77e6d9bee7ae9de9c4b3eb7d87a888f975e5bcd975a31d2e065477fad148ce1c6539a1c254b9ce99e3d9ee64eacdee6a36c4d99a4384f076f52c4f578862062734cac5ae38e40bba918b519dc9c2be3e81cb93f2e350c444c59fa3cf533ba250eebfece56cff4d1d4f1cacc628aadd545175e5b933e7bb5a4beedea7b94371f10ecfcb3eac66625a0f62c2acc1d5faffeb6faba6a18abbbab7a7fe5cdbee6f892d7332e3420839a4f8a4fa89a32b8155fa134f91283f3c",
      "0c1221de86a33ee3222c6e116627759c4375a74835f98ad0d275c332ac03a100e6fcbc62a81f25cf1e07a90509a4fc308bea91a806b96b582a6a764a982c17f7c0d92f71d7dab5fe01488da783e1050000",
    ],
    [
      "ETag",
      "8TtON96oeMg+amy9tn3XOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1592525998233"
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
      "000002ffc5545d4fc230147ddfaf20f55148e46308263c0c9d8841d4318cd11052b6bb31ddd6d9762a12febb6d37642f982592f8b2f6de736e4fee6dcfd65aa5825e83d8456715b408fcb714e8eac8077e2f3716b034e44c2c098919a0aa6403c7be648febd3f8d8ec2f1f9e1e3afae7354bfdc1d7a3d1eb652ce62c21c282b7169188bd00429789f859c5953cafb01847204f74489846f15c85d51dcc57898227b6351c0f8a48445c858ca7a391d11f99288736d5fd222ee678ae8efc9b845a675a2e865ec8c2020f28c40eecba4e287901870fd578198e92106a8ca4d401968bc8c20cf62949134c09a989544d6fd6ea7ab7a137f46eb7d36836b7f490389807249615d309fad1e784e3d0221f72c4a89ddd01cdc26ce2db5120af7009c50909e85d16072efac96daabf108763bbdd2a70f3dd4c2b5496561593f28210e6ffa42eae6489c50b2fa79d3f930389e388a4312f297d39ba350ed8b87043d9a62f0cdb3c942ce3c20b2575ede18d39b18d9bbbbde2e23bdb99a0bfe2c0ee28111e63a09c553f6975f4d3f609da3af59c48277269544e535069078b3fd655c045cec321036da37d03473163c51d050000",
    ],
    [
      "ETag",
      "N1Un+EBhVZV85xJsugGzXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-54-1592525998233",
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
      "9b3010fe9e5fc1d8974d6ade21844a5197a56c434a933621eda6694a8c3952b780a96d5a6555fefb6cc80b51b3aa9af60deeee79f19d7dcf154dd3ef4912e8a79aee93e543066cf5fe8efafa89ca80404b957932aebf6774e58e1d6682d1b09cdff6d5e7a75eafa822399aa3388da0ca69c630f0d3d9b4b664344b11a3b42a09aba6516d9a76cb6c99b6dd6db5db059643140e4972af186e8548f969bdbef5515b52ba8c00a584d7308d77f1fa63ab9e327a0758f0faa16c5d2af1faebc26711c548109af466d3c244c681cd2146245236f6e8c0ff74485f2328ae2d65f523c18030a6592294b58206d32424cb8ce5e492e959066538f7bcfb2d05f4a93374069e3618cf46de87058a15dde2a386b8369f33e05924b42f93f185b648a5fa2de2c017dacd3767e2c808a32189604e8285d6d3ceb4fee85cdbd72db4772a38742f5c4f6be6ee72e500b82049eecf437e04255732bbe9a97b649c3b0a45828494d894cdad460735bb0ddb0f7d0b87ddb6e9870df0fdae6f99a8ed37b06d8011f880ca0c4269177894d0a48ba06399461b0213831f58561b5b487e87b86b3791d96c74cca0e5db96be6158efcef3c4888073c253cac9a6e9facdc4f59cb937998d067dcf299f3d44b2a3e785fbc3931f1c49c82695ddbed696178e5246a834958fd71d79cea43ff0dceb920d79d786b04478357d50b72d4411873d1a31148300764103351cfd723c753d773cea0ff70cf9f5b9dc567259f67367767fa6329bb74a0f475d4ca1882a9b1d432fe5d6274759ae51941da179dc84f5e60147",
      "e508dbbfb89b7a1377f4f53fd843a91cdc5f2c6ebe7e554afcbadc1d1b6bfad5cc99fc50d83ca7321308814182f78a6f783e0a58a4dfb01a65f976512984dc553b7d2e6458be64ccf7ea9841f1ae495c4c2327ec349b86d9b5b78412c8c4cb8a6ea3b3ad78b1ac9416c490886d2f8aa55534727d60292bd9c961aa5cbec3d16680ebcabaf2073012f0be71060000",
    ],
    [
      "ETag",
      "w4VXuoyIOEr5e407Ez9QBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1592525998233"
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
      "515d6f8230147de75790ee75c4f8c1a64b7c980b6e6ec66ca8c93e424cc50bc30117dba241c37f5f5b407d697bceb9b7b7e7f4649826f98bd20d7930c93a0a7739b0e22604f1a10e2ef03c165c6e19a61cc8adaa06414355bddb7ebbc7b97b6cd1d7aff17cb4f88cc66fadc370585571ff17122aeb4e12491c44106fb8c43f1a9b35afb59426a06e5cad981ea86fa83551645a9bcc16ceb3e35e4b096eb4345b4ea78fa3a9436aa9d4bb27d7523f658b6b17026090fa707950c6700bbe9868e79c26590c16c79cf9c0eb21aab1924386794619a22529cbee596d7bd0b13bf660d0ef74bb4d798c3e1511a6aa633927e7f902058d5d3c28f7a45dc5c32a5885d1444182ab7cae1392d25e35df913355d627cf68907719362a04f07786d20b07eda0d7bf274d184fa8cc0a9585603968daa7f2bf5e2221b980c61c8cd2f807ed1761911b020000",
    ],
    [
      "ETag",
      "qjZRzSRz/aJYFSBTXiFK/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "6e82301800e077e9b518cecaeee8e6c6491071ba70d340f99721420bed8660f6ee237b812ff91ea8a01484209235d0a1273415bab3a6eb906db1eac2978ecb9ce6542927bbc5b2f37b27eaf6b476de9999646352f06a3ef5e7cfd4510e4aeb453bddd5373faf202f80a50173361eb1d44ed658a52421a2559b4a58df95116bbdc78abbd87549d5fae1714c833b272a3703737bedc5add312b81aa1651bb3cdbcaaec5ee46d71ad4dfe369e9f0fae655f80c73166c1470bb2f443a55659c19abd9f44b639938cd60d5a21b8f37a0041ea6566588eb342ff4d22270ecb154331c0807eff00bb80952105010000",
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
      "Fri, 19 Jun 2020 00:21:55 GMT",
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
      jobId: "grouparoo-job-55-1592525998233",
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
      "02ff8d546d6fa24010feeeaf20dcd72a8aa2d2c45c8da53d13c51e627b97cb852ceb40d7224bd9c5c634fef7db0554389ba6df60669e679e79d9796f288afa42e2b57aada83e095f3348f7df36d457afa407380aa5e7edcda59b24d8fd5a8cef37e67e454df3210847a3228ae46886b649044d46b31403bb5e2d5b614ab304a594360561d3309a1dc3d40ddd30cda1deed165806513023f18b6478e63c61d79a76d4d10a290d234009612d4cb727bbb6d3b524a51bc09c69f5b49ac8c4b4cf137f8f28469cd078b45a16223206a9075b442229e38c5efb3775fa1641db5628a2770403c298663197d20a1a4ce38084599a930ba6776114e65cf3e9b7625097d6cc9ab80aa651b68dbd186de14a59238e3cbe4f40b9731673656adf2d9cf9d89d2e6c6f39f961cdc7adc962b69adb4be5e987e5580a477e043956192937f99f2d7e724579b635304ee25c932bbd1525c25bf671fac1084f149244a86250867983761f75866dd30ffc010e865dc30fdae0fb437f60a0aedfc6660f7a6b1f5095215756e0514ce36eafdf6ef7cda137f4fd9ed70b30f2cc8e8ebdaede1fea3d0ceb6edb544bf4e154cb5b4a38dc12965046ca26ab4fced4b53cd759d993b16b55eb0e5016f1db4279bdea5a395c34a8aaf4b3965c284a524285a87c9c53dbb59cf1c49d3e566488dd9a4188f07ef92ab72b401183331aa562561cd2395dcbc1a8f6786edd9ec1f9a63c1c839888f873d2792e4704caf9e7b55cccbf9ec7158b556b45319bc2aa2e5d676adfab15e7e1639a4714651ff0ec4ab39a886e3d8b0eb31a57e3ffafbf8d4a0e55bcd5529efa736539bf2536f7498f0301a410e373d62facae0416ee2f9c22117e3c0c12216ec3293fe3c22c5e1166e7ec3885e24d91a2f30561bfd331fa1df348288029",
      "bf8c18188363c4c57190b9600b313ff6a2381245230f354959454e0e93e1e21dd8e5100f8d43e31fdfa39a14e1050000",
    ],
    [
      "ETag",
      "wwTojpfvXOAGj9yUo99Pfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc554d14ec230147ddf5790fae848703a14131e06a2928c89307cd01052b7bb31dcd6d9760a31fcbb6d37602f9a2592f8b2f6de736e4fee6dcfbeb44603bd45a98fae1be8350adf73a09b9310f8a3dc4c80e5316762c948ca00e9920d1c8792fd44d7fdb5b94c7a4edfb133e3797c1a19b756b75bb098b784040bde9788441c4410fb4cc42f2a6e947985a5380179a247e23c49172ad40f30df640a9eba93a173574512e22bc499d9b6d5b307a884b6facf223ee678a18efc9b845ae75a298656e475020150483d38749d51b2028f0fd578194eb2189a8ce4d403568ac8c2020e29c9334c09698a54d3349b6766c7300db3d3b932cecf77f498789847249515b329daeb73c2713c219f72c4a85ddc012dc262e2bb51a0a07209d50909e84316473edae7b6fa2fc4a1e3b62f2adc7237d72a95b555c5a4822886c53fa98b2b5962f1c2eb6997cfe448e2382179ca6b4adfda0fd6111b176ea8dbf48de50e8e25cbb8f0424d5d77381a4c5d6b34fe515c7ce70713f4361cd89812e13106ca5967ad8b2bf3b2dd423ba7f68974229746e5340795f6b0f863dd475ce4021c33d0b6da3710a99aef1d050000",
    ],
    [
      "ETag",
      "VrxCx5hmBNCNLp2ZP+i2FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` != ? LIMIT 1",
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
      jobId: "grouparoo-job-56-1592525998233",
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
      "000002ffa5945b6f9b3014c7dff329187bd9a4260112485229eaa2846d4cb9740969b54d5362cc81ba054cb1695555f9eeb32117a26655b5bdc1b9fccfcfe7d8e7b9a628ea1d497cf55c513d12dee7903dbdbfa59e7a263dc051283de05bd78b9949befdc49dc731d3c249cb22837ebf8c22453643711a419dd13cc3c0ce978b4698d13c4519a575215837adba6ef60cd3307bbdaed16a95b90ca2604c923ba970c379cace9bcd1d4723a4348c00a58435308df7f6e683d14c337a0b98b3e671d9a6a8c49aaf17be8828469cd0a4bf5c941039836c05312291c43864fbdea763f90641712314d10f0403c298e6099768a50ca64940c23c2bc485d2b3300a73c1bcffad18d4853db687ae329c2da7ee87358aa5dcfaa38298b25a65c0f2882b9fe7b389b24e45f51bc480ad95ebaff6dc16968c06248215f1d74a5fb95006d391a2ac7dc461adbc9386b133715c452fc88aaa3e304e9282cd455e041522e1ddf6d33931cabd8414415c606cc3561dcd427a57eb7981d7c141b7657a81069ed7f53a266a791aeeb5a1ed7b80aa0a5cd62ef3514213c3d4f5a0ddc12d030075758cf52e58eda0ed81d7c6bd96d901ac23cf0475abb0d99fe731231c4684a594916dc3d5ebb9e3da2b77be9c0e07ae5d3d7b8044374725fdf1c98f8ec44593aab4afb5e505519a112aa08ad13a53d79e0f86ae7355c110f76c0c21c24f8b7b79d30214313864a30cc5c0219b505f0e47bd9c2d1cd7994d07e3834271752e77914c84fddac31ece5455739fd2e351975328ad12d36aab15dfe6eca4ca158af213320f5bb3aa1f69d44ea8fd0bdd480ef1ffe10ccdd0ea9a21b6c05f28b75fbf6b9522aa581d5b3af5fbd29eff90b9854f7ae6104006093e947dc30b9289a5fb0d9b5184eff694cc10ab6a5f9f7161168f19b343759c41f9b4495c0ea410b474dd32cddd129089197f19d1d1f7112f76",
      "95ac0531247cd78b7267958ddc1c21e5159c224d868ba73875a65f0af8daa6f607d7ca0a7e70060000",
    ],
    [
      "ETag",
      "ed6WSO5iJZc7wLs0gM36iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1592525998233"
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
      "0000000002ff4d51d14ec230147ddf572cf5d525c29c82090fa2a82484e01463308494713787dbee6cefc085ecdf6dbb0d78697bceb9b7b7e7f460d936fb89b30dbbb3d93a8e7e0b10e54504f4aa0f3ec82221a9b61c3309ec525703f14857ff3ded4297a68bf9ed6cffb8f874bd0f1fcbfd605057c9e01b52aeea0e0a291cc6906ca4c25f06db0d6fb48ca7a06f5cad8419686e68342a73a38da7efa3e7917f2ea5b831d2743e99dc0f2723d64895d9976aadcc53b6b8f62104015900a707e502b710d0d838973ccd137024162200d90cd18db51c092c722e101d4539de8dd3f1fa5dafebf5fbbdaeebb6e509069c62cc74c7fc8d1de713124f7cdc6bf7ac53c7236a5887d146c1c2b37cce1352d24e377bec4855cd6969b568791a362c09e44ca0f222c138b8ee5db1368c07d466496741a20043075cfdd74b4c8a0b7922c1aaac7f921e482e1b020000",
    ],
    [
      "ETag",
      "xFvf3tNZU7PwDZX35VRoyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9f35c0850467d1b202897b8419dc84b83acacdc460785b433febb8be70fce0f28ab8ace33116347afe019a85247db6a1b8db6a3eda99226f642ccd3c38a4f9f42b5893514de378473d0ab55caf69673d70f875e73eb80e178a9efdc35b092e1871c7433e9206bcf3129b5af962da4e34d523b6f0593744dcf11295849f06aee13ef84eed694fb8d131496055fbd051d03624ef1ce44b9ed1a29ef7d9a767111aeda286c7879a1958add4b964687a7db3bd693a34030b3c2ebc87c5bee44a696116c0095bc99e84c9ac7cc80086dc07f9308c5e9e3ead072a213f8fd03d45cb9ca05010000",
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
      "Fri, 19 Jun 2020 00:21:57 GMT",
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
      jobId: "grouparoo-job-57-1592525998233",
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
      "54db6e9b40107df75720fa1adff00513c96a5c8734966c5c034ed456155a96816c022c61974451e47fef2ef8027514f50d66e69c3973d9796f298afa44d240bd54549f44cf05e46f5f1ea9af5e480f7014498f71b724e666e3d05f0f89adc1761b7e7337afd36915454a34434916439bd122c7c02eb74e27ca6991a19cd2b6206c8ff4767f6468236d6418136d30a8b00ce27049d227c9f0c079c62ebbdd838e4e44691403ca08eb609a1ceddd17ad9be5f4113067dd66daaec8c4ba9f27fe1a538c38a1e974eb54220a06b9070922b194714207fe5593be4350d28944f40bc18030a645caa5b48a06d33424519197e482e95d1885b9d47cfcad1954c75c9a7357c1342e92d44b5102174a8038f2f85b06ca8dbd5e290beb666daf66ee626d79cefcd65ccd3af3f572bbb21ce5fed6b44d85233f8612ab4c95abf2cf123fa5a2325b008c93b4d4e44a6f4d89f0eefbb8f86084470a49225431d887797a6f8cfa939ee187be8ec3c960e4873df0fd89af8fd0c0ef616308c3c00754672895557894d2b407c1004603cd1b630dbc618002cf08fa434f4302a80f269ad1eba97bf4ee58cb6b4e385c13965146f64d56efed856b7aaebdb5e633d7acd71da222e6d795f266d58d72b868505de9672d395394e5840a51e53817966bdab3b9bbb8abc910bbb58408e137e7596e578862062734cac5ac38e42b1ac8c1a8d66c655e9fc0e5a6fc38043111f1fba8f3548e0894f32f6b399b7f338f2b16abd18a6a369555755c7b617d576bceddc73477282e3ee079d99bd54c74eb41749835b85aff7efd69d572a8e2adeee5a99bad69ff94d8d2273d368490438a4f59ff637525b072ffc72912e1",
      "87c32011e2361cf3332ecce2156176ca8e73a8de14a93a5f118efb7d7d3c3e120a60cecf23745d3b449c1d07990b1248f9a117d591a81ab96b482a6a724a980c17efc0da0f71d7dab5fe0275deb619e1050000",
    ],
    [
      "ETag",
      "9VLiEQQSoZhmR2eUUfBTQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1592525998233"
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
      "af",
      "20f5950505c687890f20284b10658c076308a9db1d0cbb75b61d8a86ff6edb0dd98b668924beacbdf79cdb937bdbb34fa352412f61eca3cb0a7a0e57af29b0ddd90ac4546d1ce029115c2e098d39a0aa6283c02bc56e6f67bc2f6a8d797ffb5e7bfc1839d36070fd767595b1b8b786084bdea78c641c84407c2ee3271d57f2bcc6621c813ad1a3248de2a50eab4758ec120dcf5cc79edc169188fa1a99ccc7e35e7f3c4439b4affe2ce2638197fac8bf49e87561e46268439f1d088041ecc1b1eb84d10d78c2d6e3e5384a08989ca6cc039e8ba8c20c5e319a2698516aca9469b5cd0bab5bb7ea56b7dba9371a073aa11e16218d55c57c86bef505159838f44d8d18b5b23b6059984dfc300a14142ea13821096d5571e8a3efdcbefa0bd19eb8ad66819bef1646a1b2b4aa9c54101258fe93babc9235962fbc9c76fe4c4e248e239ac6a2a4f4cdf8be77c2c6a51bca363de8b9c353c97221bd5052d7b5ef8633b777f7f0a3b8fc2e8e26e8ef04f00746a5c73868675d9c373b56bb758e0e4ebda6ca89421955b01474dac3f28f350a85cc05987030f6c617a13f87881d050000",
    ],
    [
      "ETag",
      "7vSsBt/3UBvx/YzHRQfDCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:21:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` != ? LIMIT 1",
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
      jobId: "grouparoo-job-58-1592525998233",
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
      "945b6f9b3014c7dff329187bd9a426010209448ab62c651b552e1d21adb6694a8c31d42d608a4db6aaca779f0db99035abaa69790ae7f23f3f9f639fc78624c977380de4be24fb38ba2f50fef0fa96f8f299f0200622e1090ab07671f80b5e758df8e2c2f2cd51f2211a0caa285c66539064316a5252e410d1fe62de8a7252642027a4c9059b86d9540d4b3334c3b24cadd3a972298ac3314eef84c20d6319edb7db3b8e56444814239061da8224d9dbdb6bad9de5e4164146dbc765dbbc126d3f5ff85d4c206098a483c5bc822828ca97280138161887ecc07f7f2cdfc22069453c7a8d21021092226502ad9281240d7154e4a538577ae4466e2e99f79f35833cb7c7f6c89346b3c5d47bb30289905bbd95009596cb1cd12266d2477736915619af7e0328a22be9fab3eddadc929310c7688983953490de49c3e9b924ad28e3b82be995b08c9d89e3496a8956960d1065382de13ce0c7a886c4bddb863a2766b997102280718e6dd8b2a774816a2a961ffa3d189a1dc30f15e4fba6df3340c757a0a5233df011a82b3051bbca07294991c97f2ad4a10f2cc5eff0cf500781a5432b403dd80d80e6ab41a02179abb0d99fe7678e193ac73423146f3b2e5fbb8e672f3d77311d0d3dbb7ef610f0769e57f4c7273f3a12e34daad33ed7962744598e09872a67eb4c3ddb1d8e3ce7aa86c12fda1845003eccefc5550b414cd1211be420410ce5131288e1c897b3b9e339b3e9707c5028efcee52e92f2b0ef7bd8c399ea6ade43763cea6a0a9555607675b9e6db9c9d54b90271714266bd35cbea9146e384dabfd079cec49e7bc3c9e57f20d4144d692a1adf059eaaf5d54e5fd55b8aa27cfb",
      "0bf8f6df8f46ada4ccd7c91658feb2b0ddaf22b7f4098f8b4294a3141e205ef0a84462e57ec1b6e4e1bbdd2532f8fadad7e72f9f61febe213d548739aa5e3b4eaa1995825d55b54c63b7174462cefe8cd01445df473cd95fa2164a50ca76bda8f658d5c8cd115251c329d344387f9d5367faa9846f6c1abf01d6cf1cb184060000",
    ],
    [
      "ETag",
      "duavRifxcV65lJJ9b8CmBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1592525998233"
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
      "8230147de72b48f73ab2a923c1253ee8e636a7318a732f8b31152f88032e6b2f2ec6f0efb605d497b6e79c7b7b7b4e4f966db3df38dbb2679b6de2e8af0071bc8b80e6fae0832c12926acb3193c0ee7535108f4c7567779803bdce5ae3c5f7f8d3dbf4e1e16ddeeb555532d841ca55dd492185c31892ad54f8c760bbe68d96f114f48debb53003cd0db546c7dc68a3e9d7f07de8df4a296e8d345d4e26fdc164c86aa934fb4aada579ca1e373e8420200be0faa05ce01e021a19e792a779028ec4420420eb21bab192238145ce05a2a328c7f59c96db6dbb6db7dbf5da9d4e539e60c029c64c772c17ec329f9078e2e3bf76cf5a553ca28255184d142cbcc9e73621251d74b3cb2e54599f56568356d7618323819c09545e2418074fde236bc278416d967416240a3074c0d57f7dc4a4b8902712acd23a033463eaa71b020000",
    ],
    [
      "ETag",
      "b3hvQetDP1KSVKJ8bAe/FQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d0",
      "bb",
      "64ad0ea4604977a668b0d40a2268d93034860a12c29f40a7772fd3eddbbd1f1053ca9a266ac58315e0058c31442bbab28581950dd5c293ee1cda86c1e7f2a35b43abbb168ffe1818be3f9ab84c88847ccdcfbde256291cb47dd0ec96241f3c8e2d31ec3d557536b16192fab28d727244dc2145951f72910888caf095da79975453c7896243ce762ad6679f86f89eb977b4d485abbdb5999fc5372cd59be9c848367a309dcd81e6dff5d6f2879096f0ab7de79e62f51a71eccf117379b9b6ce28c0023059a6356ba2749e3de9082dc07f336ac792cd57cce29ad5e0f70f8d15986805010000",
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
      "Fri, 19 Jun 2020 00:22:00 GMT",
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
      jobId: "grouparoo-job-59-1592525998233",
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
      "8d54db6e9b40107df75720fa9af88e8d23598deb90c6958d1bc089a2aa42bbcb4036c12c6117a751e47fef2ef8027514f50d66e69c3973d9796f689afe4c9340bfd0744ca3971cb2b72f4f0ceb67ca030245ca73177cf3fe3c783ffade70e4de6e72367722fa3a1e9751b44073b44e6338e72ccf08f08b95db8c3296a72863ec5c129e1ba3f38e31ea1a5d633432bbbd5e89e51087739a3c2b864721527ed16aed753423c6a218504a7993b0f5c1deda745b69c69e8008deaaa76dc94cbcf579e2af31234850968c576e2922e790f9b0463456328ee8005fd6e99b14ad9b918cde50028810962742492b69084b421ae559412e99dea5519a0bcd87df8a4177adb935f534c2e27c9df8095ac3991620817cf1968276ed2c17daccbe5e3a8b89375bdabe3bbdb11693e674395f2d6c57bbbfb11c4b1308c75060b5b17659fcd9f2a75054640b800b9a149a3ce5ad2891de5d1f671f8cf040a148a42a0ebb307fd81ea08ed91ee1100f4968f60c1cb60163130f0dd4c36d32ea433fc080aa0c85b2128f1296e010fac3b0437c13e181df076cf8660f75fdcec00c8c30449dde00e93bf4f650cb6b46055c519e324e774dd6ef9d9967f99eb3b2a713cfaad61da23c1657a5f27ad5b572846c5055e9672d39519466944951c53867b6673993a937bbabc890bb3587089137f7456d5788620e4734cae4ac04640b16a8c1e8f664615d1dc1c5a6fcdc077119f1eba0f3588e0c54f32f6a39997f3d8f2717abd68a7236a555773d67667fd72bceedc7347728ce3fe0d9eccc7a2abbf5283bcc6b5c8d7fbf7e372a3974f95677f2f4db95e53c286ce1531e0742c82021c7acffb1ba0a58baffe314c9f0fd615008791b0ef9b99066f98a083f6627",
      "19946f8a969d2f09079d6edb1cf6f78412988993884ebbdbde479c1c07950bd690887d2fca235136725b939457e41430152edf81bd1be2b6b16dfc05d41cfe1fe1050000",
    ],
    [
      "ETag",
      "VdBTxYTJ4T79SQvuoLRgiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1592525998233"
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
      "34eb5148102852130f55514900f9282743c8d24e4bb1edd6fd9010c37f77775ba0174c1349bc7477e6bdd99799ddd76fc334d14794fae8ce44ab28fc1440775721f089da4c81899833b9642465806a8a0d1c878a2dde44a3bdee607bdb1a4e3ed2c6e67675fd1adedfe72ce6ad21c192f72d23190711c43e93f1bb8ecd22afb11427a04ef4482c9274a9c3da09e6bb4cc33377da1fbd949184f81a19cd0703e761d04305b4af9d17f131c74b7de4df24f4ba300a31b421ab29044021f5e0d47546c9063cded7e36538c962a83322a807ac105185391c5222324c09a9cb54ddb2eb3796ddb49a966d779badd6811e130ff388a4aa623e43477d4e388ea764ab468c3af91dd03ccc277e18050a4a97509e9084be5471e4a3636e5ffb85d81fb99d76895bec1646a9b2b2aa9c5410c5b0fc277579256b2c5f7835ede2995c481c2744a4bca2f4f3e0cdb960e3d20d559b7e72dcdea56419975ea8a8ebf687bd99eb0cc767c5e5777132c1c38e031b53223dc6403beba6d1ee5ab79d063a38f59128277265544e05e8b487e51feb35e23217e09881b1377e006931688f1d050000",
    ],
    [
      "ETag",
      "uOu04h6a9w3MQkn0j7b+Hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` != ? LIMIT 1",
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
      jobId: "grouparoo-job-60-1592525998233",
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
      "da3014c7dff9145ef6b269057221402aa10e015da3d1d04268354d1338c649dd26716a3b9daa8aef3e3be112545655d3de9273f99fdf39b6cf4b0d00ed81a42bed146801891e73cc9e3fded3403b511e2c60a43c3eb3dbed2f43f3fac279f02ec22bf3fbddd0bfeef5ca28526473986431ae739a3384f9e97cd68818cd33c828ad4bc17a5baf1bb663daa6ed385dd3b2ca5c8ee3704cd207a5702744c64f9bcd2d4723a2348a31cc086f209aececcd27b399317a8f91e0cdc3b24d598937df2e7c16530405a1696f3e2b21728ed9022790c40a639fbd0abe1eca37084c1a918c7e22084384689e0a8556ca209a8624ca59212e955ea4519a0be6dd6fc5a0cd46e3d1c00783c9dcf33f2d61a2e4969f01e460b16098e7b100e7d3c9255866b2fa1de4982fc1edc5683a9216464312e305592d410f9c81be3704602b013e28d3d8bd747d60146c45dd15e682a4059d0f83185798a4773351f7c861ee24940814126413b6e8e86d6874752708830e0abb961d843a0e826ed0b1a115e8c869e1d62ac0b0aa2054ed321fa634458e8957ba61196dab63db7a175936327433b420b22ddc328d005b9d966e6a1b85f5ae9fdf8c083c243ca39c6c46aedd4e5d7fb4f0a7736fd0f747d5de4328e7392ce90f3b3f6849c8215569df1acb2ba28c112aa18ac3753d7f34ed0f7cf7a682216fda1847103dcf1ed55d0b61ccf13e1b32986081d9255da9c3d1ae2633d777275e7fbc57282ecfd53692cbb09f3bd87d4f5535ff393b3ceaf2144aabc26cb7b48a6f7d7254e506c6f91199a78d59330e346a47d4fe85ee",
      "7c3ce9ff27be86ddfa0be2e6eb57ad22afc9cdb141d3aee7a3e90f955bf894678a43cc708af605dff17c5462e97ec76294e1db35a532e4a6dad5e7429ae54b467c5f1d315cbe6b9294dd16826dc3343a96b91594894cbc8e708cee36e2d5aa52b5708253b19d45b9b2ca41ae0f90f20a4e91a6c2e53bf45cef5b015f5bd7fe00f11953cd6f060000",
    ],
    [
      "ETag",
      "Tr566+D2QH9kNHfP2KhDTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1592525998233"
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
      "30147ddf572cf5d525b0093a131e84a06090c884c4c41052c6dd1c6ebba3bdd310b27fb7ed36e0a5ed39e7dede9ed39365dbec27c977ecd166db243e94208e3731d0421f0290654a526d05e612d8adae06e2b1aeeee7de338df6f7fd791c90ff0a6f87e5e7241e0cea2a197e43c655dd492185a304d29d54f8cb60bbe18d96f30cf48d9b8d3003cd0d8d46c7c268d3f972fc320eaea50c77469aaf66b3a7e16ccc1aa932fb5aad9579ca1eb7014420200fe1f2a042e01e429a1ae79267450a8ec45284209b21bab196638165c105a2a328a7df71ba3ddfedb93ddf7f703daf2d4f31e49460ae3b561fec3c9f90781ae09f76cfba753ca28675186d142cbacae73a2125fdeae63b76a6aae6b4b65ab4be0c1b1e09e4bb40e5458271e0b91dd68631426d967416244a3074c8d57f4d12525cc453095665fd033d7256c21b020000",
    ],
    [
      "ETag",
      "6n3FtCj76NgRt9JeMqTXHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "76",
      "43",
      "30",
      "0000e077c975f5507a2abb136a4b6b48a7e8958345fd0b6295edecddd7b3ef0dbe1f90e6399de7840f0dedc10b10e90e6ef3ed79d0916cd06eed2e734c4c2d58765f9e6917cd6d3c585981148c8deea47c267a0e2bd70a7ca3ae1e9379af55590b336330bb50630fe1441d1ce34c12a56ff58a36789ea405725dd5f9f411bd1e92be1547a1f3ee5d47d9d1b54fb02157e49a3795d13e86d75921f27dcf1cb5958ac8e30e79b309e7cef26d3054ae39f16dce463a5f70b9946aafe31087e73e121417edf0001b4057564d744eaae74cdd43b801ffcd840b469f5744d3894ee0f70f98cbb00a05010000",
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
      "Fri, 19 Jun 2020 00:22:02 GMT",
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
      jobId: "grouparoo-job-61-1592525998233",
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
      "545d6fa240147df75710f6b58a208a34315b6b696b56718bd866bbd9909961a0d3224399c14dd3f8df7706fc80b569fa06f7de73eeb91f73df5b8aa2be903454cf151592f8b5c0f9dbb7670ad533e9c11cc4d2f3787b3359fc30c1a5015c347eb8bb7c641374371a5551a44433b0ce12dc66b4c81166e7ab6527ce6991819cd2b6206c0ff4b6deb78dbed1b7eda1d1eb555886936846d217c9f0c479c6ce356dafa313531a2718648475105d1fecdac6d0b29c3e63c499d64cab894c4cfb3cf1f78422c0094d47ab6525a260380ff01a9044ca38a24378d1a4ef10b0eec4227a43100608d122e5525a4583681a91b8c84b72c1f42e8cc25c6a3efcd60cead29939135f413429d6699082353e5342c041c0df32ac5c7b8bb93275af17de7cec4f176eb09cdc3af37167b298ade6ee5279b8753c47e10026b8c42a23e5a2fc73c54fa9a8cc1662c6495a6af2a5b7a64478777d9c7e30c203852411aa18de8505567700f461d78611b45034ecf561d4c5100ea1d5073dd845b689cd106250672895557890d254d7cdc88e863018000b0626d2f500426b1018a6857a61649aa16da93bf4f650cbdf9c707c45584619d935597df0a6be13f8deca9d8c7da75e77048a845f55ca9b5537cae1a24175a59fb5e4445196132a4495e39cbabee38d27fef4be2643ecd60cc700bd2d5fe576452061f88806b99815c7f99c867230aa3b9e3b574770b9293ff7414c44fc3ee83c962302e5fccb5a4ee6dfcce38bc56ab4a29a4d655597be37756fd49a73fb31cd3d488a0f78363bb39a896e3d890eb30657ebffaf3fad5a0e55bcd59d3cf56ee578bf24b6f4498f87239ce3141db37e617525b0727fe11489f0fd619008",
      "711b0ef9191766f18a103b664739aede14a93a5f110e74c3b006dd3da100e6fc34c21e1e224e8e83cc85d738e5fb5e5447a26ae4b621a9a8c92961325cbc037737c46d6bdbfa070948c6c3e1050000",
    ],
    [
      "ETag",
      "ZHGCOK4aB2aNcAWQBZsCcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1592525998233"
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
      "d1",
      "4e",
      "c2",
      "30",
      "147ddf5790fa0a89038660e2c3d4a93303114630318494ed6e4cb775b69d8410feddb61bb217cd12497c597bef39b727f7b6673badd140ef51eaa3cb065a45e1470e747b16027f969b09b03ce64c2c194919a0a66403c7a1646fdcb5de9ddbfaf4796e3dce9c9770be0913f3eaaa60316f0d0916bc9d88441c4410fb4cc4af2a6e947985a5380179a247e23c49972a6c1e61becd143c7527f6e8be8a24c457c868e638e6b563a112da377f16f131c74b75e4df24d4bad04a31f4465613088042eac1b1eb8c9237f0b8adc6cb7092c5d06224a71eb0524416167048499e614a484ba45a3dbda51b83b6d13606837ebbd339d063e2611e915456cca6e85b9f138ee309d9c811a35e7107b4088b891f468182ca25542724a04f591cf9e83bb76ffe42b4476eaf5be196bb8556a9acad2a261544312cff495d5cc91a8b175e4fbb7c262712c709c9535e53face79324fd8b87043dda66f4dd73a952ce3c20b35755d7b684d5d7338fe515c7c1747135c6f39b03125c2630c94b3f4f36edfb8e89da383536f8874229746e5340795f6b0f8633d445ce4021c33d0f6da1704224c881d050000",
    ],
    [
      "ETag",
      "wTh14WI1SQWEJULXgWwgmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-62-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d6fda30147de7575899aaae5a81f2b981843a46332d6a0a1d8476dd5411132ea9db244e6d870d55fdefb31d488246ab3d6d6fc93df79e73723ff25442c87820d1c2e822634efcc704d8facd3d9d1bc70a01817d855c9e34eee293f3b93930edef2b7cfdebe7b7f5bb7eaf9766115dcd71180750e634611ef0ee7452f1194d62cc282d4bc272bb5eaeb53af556bdd5e97ca8371a692d87606993e84131dc0911f36eb5baf551f129f503c031e1158f8659bcbaaa576346efc113bcba2b5b954abcfabaf069403d2c088d7ad3496a22e1c066106212281b79f562fe7197be427058f165f68a78803d8f269150d6521a8f464be2274c934ba627199461ed397b2d048c89699b03070d46d3a1f3d6c5a1a2738f10e6683663c09340a0cfe3d1057263a97e873970175d7f31c7a68c30ba2401ccc8c2453d748afac33384ecd1b5397eebcad811b2ad7353c66debc272504d1bd4e20b5862497c8685e413055b0a4b83969ea7002eb232096e3a6eed19b6b1c97ace5462462823427fa53574cc717fe05857666e43b6dc061f7bebc9a36afa12071cf26acc700802d8055d80debfd1c472acd1b06fe70cba8b97db4c2ed37e6466f36f2ab239eb18763e58c3228d2a9beda651c09e8ff7b25ce120d943b3da848dda0e47690fdbff7477506b1dbc6070f3745b2ad01bf28036c68caf53737ca36a35a690312c8141e4e582af6e494e99c27ff17f90e9db6b5515f260337d2e64980be2f15cdd63a0731d12a6b3d084ed5abdd179dfdc12ca4226fec8689e34b6576240b4d88fef88270561608cb2b13ed9e2a54b3b3c754e223902f9a3ccd63704ceb1af35a691ec02073c0f00e9ad46d93891eb221221b505c8756e2ecd995e04f7187dc20b89887613e9d976919aecf6f950bd1c1a3b93d4168b675238fc977dfe4ba7db1dbccd0725b4ecd96868eade979e4bbf0164a8bd99b2060000",
    ],
    [
      "ETag",
      "P03hp0KbECELZvaWxwXy+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ff1dcfc97282300000d07fc9599d1495a5379616aa162224ca78c984106c44652d5ba7ff5ea6f777793f80712e9a86b6452e9ee0158c4c31567cb52f740b9a42eb3650f8f5a60bb943c787f9a9c554956b26973cc2311bde5a756a13644bf78ae364fc8e02e8cb97eb7dd70711d573377d7f64dad05fbc019b50e0f85c4a55b13fe4cd601e368ce52d09070f9d9ca7ddea28dbc30e926e872a4a1c1bab53f815848c106a95f298e55bb725f194606c527140fdb9f1913323e5e29ba482e529baf769ef2e8b4354659ca70558003194b2160d95f36cbd358c05f86fd2762cc57cb504ab450d7eff0039ae966a05010000",
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
      "Fri, 19 Jun 2020 00:22:04 GMT",
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
      jobId: "grouparoo-job-63-1592525998233",
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
      "20fa1a5f31d88e643596431a2b366e314e7a51857697816c8259c22ea9acc8ffde5df005ea28ea1bcccc3973e6b2f3d6d034fd9926817ea9e998462f3964db4f4f0ceb17ca030245ca73f7b0cdf15dfcd3ed9a717aff1d19236b604cc6e3328a16688e36690c4dcef28c00bf5caf5a51c6f214658c352561d3329a5d73d4337be66834ec194689e51087739a3c2b864721527ed96e1f74b422c6a218504a798bb0cdd1de7eedb5d38c3d0111bc5d4fdb969978fbe3c49f634690a02c19af57a5889c43e6c306d158c938a1037c55a76f51b4694532fa95124084b03c114a5a49435812d228cf0a72c9f4268dd25c683efe560cfaca9edb534f232cce37899fa00d5c680112c817db14b41b77b9d066cecdd25d4cbcd9d2f157d35b7b31694d97f3f5c259690fb7b66b6b02e1180aac36d6ae8a3f47fe148a8a6c017041934293a7bc1525d2bbefe3ec9d111e29148954c5611fe60f3a16ea0e3b231ce20109878689c30e603cc4031319b843467de807185095a15056e251c212d332c36edfb27c1c04c4ef5b83918fa1877c627683de00750901acefd1bb632d7f322ae09af29471ba6fb2fee0ce3cdbf7dcb5339d7876b5ee10e5b1b82e95d7abae95236483aa4a3f6ac999a234a34c8a2ac639733cdb9d4cbdd97d4586dcad3944886c572f6abb42147338a151266725205bb0400d4677",
      "260bfbfa042e36e5eb2188cb885f479da77264a09a7f51cbd9fceb793cb958b55694b329adfaca7367ce17bde2dcbd4f738fe2fc1d9ed7bd594f65b71e6587798dabf1efd7ef4625872edfea5e9efe6d6dbb3f14b6f0298f0b2164909053d6ff585d052cddff718a64f8e1302884bc0dc7fc5c48b37c45849fb2930cca3745cbce978456b7d73786e681500233711e619a8343c4d97150b960038938f4a23c12652377354979454e0153e1f21d38fb21ee1abbc65f1c2d97cae1050000",
    ],
    [
      "ETag",
      "KWyubKlZR15lpVXa39673A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1592525998233"
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
      "545d4fc230147ddfaf20f51512f9d814131e864ec50c84318c8921a46c7738ddd6d9762221fc77db6ec05e344b24f165edbde7dc9edcdb9e6db55a0dbd87898fae6a6819ae3e32a09bb315f089dc38c0b28833b1a4246180ea920d1caf247bf2d437bbcf5f9f8f1b4b37ace461f86e3f0fd7bd5ece62de2bc458f0b62212711042e43311bfa8b856e41596e018e4891e89b23859a8b07e84f92655f0d47506a3bb3212135f21a3996d9b7ddb4205b4abff2ce2638e17eac8bf49a875ae1562e88d2c1d088042e2c1b1eb949237f0f8408d97e1388da0c148463d6085882ccce11525598a29210d916a18ed4653efb6f496deed5eb6daed3d3d221ee6214964c56c8a0efa9c701c39642d478c8cfc0e681ee613df8f0205a54b284f48409fb238f4d121b7abff421c8c5ca353e216bbb956aaacac2a261584112cfe495d5cc92b162fbc9a76f14c4e248e639225bca2f4adfd689eb071e186aa4ddf98ae752a59c685172aeaba83a13575cde1f84771f19d1f4dd0df7060634a84c718286735cf3b97fa85718ef64ebd26d2895c1a95d30c54dac3e28f751f72910b70c440db69df9cf91d121d050000",
    ],
    [
      "ETag",
      "QVBA9XxvOyE56EnJMkLXMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-64-1592525998233",
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
      "6d6fa24010c7dffb29089726bdb42a3e80d0c4f4ace5eec859e921d634978b2eeb60b70596b2d0a669fceeb70ba8987a4d73b93706e7e137ff9dd99dd79a24c90f245aca6792ec91d56306c9cba77beac9a7c203295a090f0d4e2e9e6dca4e6c6376db7d50af2f54bb33e8f78b2892673314c601d419cd120cec6c3a69ac129ac528a1b4ce8175ad5b6fa9465b6dab86a1b73b9d229741e08f48f4200877691ab3b36673a3a3b1a27415008a096b601a6eedcda776334ee83de09435f7cb367925d67cbff07940314a098dfad34921226390cc214424103276d94befcb3ebe4150d858f1e8278201614cb32815d20a0ca6914f565992c339e9951bb939d7bcfd5b31c81373640e5d69684fc7eef1028502b7f82c2126cde709b02c48a5af8e7d252d625efd0e31600b69f6dd744c6e49a84f029893e542ea4be7d2607c2949237b663ac7db688e1a593f4cee1d5957962bb57299b98425b09444b95017790154e4716fd95cebc05cb708014129af5286cd7b8a865aba6278bed7c3bede513d5f01cfd3bd9e8a3a9e828d2e74971ea02a2115b58b7c14d1a80d2d5d43a8a3fb9d36c67a4fd700daa071ce52c38aaea8ed96a27806c82561bd3dcf734252b8242ca68c94dd97678ee59a73d7998e8703d7ac9edd47bcb59785fafd93ef1d29e54daaaa7daf2d6f14c509a15c543e676bec9ace60e85a371519fcd28d6085f0cbe4515c3b1f050c76d9284121a4905cd1a5188e7c6d4f2cd7b2c783d18e90dfa3eb4d24e361bfb6627767aad2dc97787fd4c5140aab90a975e58a6f7d7a90728382ec00e6a934cbad3d46ed00ed5fd44d5cc71a7ffb0ff28e501c1ffd",
      "4562f9f5bb56e1cb7c8994d2e49f53d3b915b9b94f781cf0218108ef2a7ee0f988c4c2fd811dc9c3371b4b64f0a5b5adcf526ee62f19b35d759c40f1ae49584c23076a2dfea31b1b204f4cd2b711dd5dc49bad256a410851bae945b1bd8a46aef724651539799a08e7ef705c0e705d5bd7fe00c8907b957a060000",
    ],
    [
      "ETag",
      "ol+BwOos+O9WY4k5PB5O3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1592525998233"
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
      "30147de75790ee7564113f59e2c334464d8c994c97258b31b55e180eb8d8160d33fcf7b505d417daf3d1de9ec3d5b26df21ba507f26a937d149e72e0c5530872a5373e883c96422d19a602c8b37683a4a1766fd818a7bde2b2efcd5e3ebfcef2af1f9c60351c562ec17e20a1ca775548e12082f82014fe36d8ae79a3a534017de36ec7cd407343adc92233da7cb99e4c27fea394e0c148cbcd62f1365a4c482d9566ddaa6f699e72c4bd0f01704819dc1f94713c029373935cd0248bc111987306a21ea20f5672c831cf28477414e5f43a4eabebb95db7eb7903b7dd6eec31322a234c4d391fe4365fa2a4b18f179d9eb4aa7a7805ab329a2a48f0d0cf63434a3aebc32eb95165bddb5a0ddade878d0a09e29da3ca22c024e80cfaa429638c3aacd45d489e83a11955ff6b1649c50534166095d63f2784f9a01b020000",
    ],
    [
      "ETag",
      "UcCoG6ywb6H/VXvtz7fqeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "02ff1dcfdb6e82300000d07fe9b3334085c2de2002114510362ebe34503b25e5de8aa0d9bfcfecfcc179818210ca39161da32df8044ba1186bb2de77ba25993fc75c99cdeac94b6bf1d244adfb6c2b6ae18a32906152b189352ddb4da479c23a129be53a20f9c0088a44a14ae1b787504e37a6964c4e39d8b783fe6071e3db288f139d86350cf6b874902cf9a9e6ec907f22d16c5dc3787017ccb353cd1ad5f03b7f4af5318f1578b9dc745369efc7c825300bd2988d1ff7e0dc4a5fdef9610da9a2793cc679646f2b99f5908115a0735f8d94e3ea3d83aa61acc07f138ba5a7efab458b918ee0f70f6617083405010000",
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
      "Fri, 19 Jun 2020 00:22:06 GMT",
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
      jobId: "grouparoo-job-65-1592525998233",
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
      "000002ff8d54ef6fa24010fdee5f41b8afada0884a1373f52cbd9a28f600db34970b59d6816e8b2c65171bd3f8bfdf2ef803cea6b94fcaccbc376fdeecee474b51d45792aed42b450d49fc5640befdf64243f5426680a35866b65bcd33b259b6d15fedfb8e163ff9b31ff6fb6854559112cdd03a4be092d122c7c0ae965e3bce6991a19cd24b4178d9372f3ba6d535bba6650dbb8651611924d18ca4af92e199f38c5d69da41473ba6344e006584b5315d1fe3daa6ab65397d01cc99d66cab894e4cfbbaf1f78462c4094d474baf125130c803582392481927f42abc6ed2b7095ab76351bd211810c6b448b99456d1609a46242ef2925c307d88a008979a8f9fb580ead9337be22b9826c53a0d52b4860b6585380af83603e5d65dcc95a973bb70e7637fba70026f7267cfc7edc962b69c3b9ef27867bbb6c2519840895546ca75f9e5888f5251d96d058c93b4d4e4cb6c4d89c8ee7d9c7eb2c223852411aa18eccb8281de479da16e855138c0d1d030c34887301c86031319a18ead1ef45621a03a43a9acc2a35418151a38c296150ccd3e043d0beb41689aaba0a79bc8ec0d0c3dc2a0eed1bbe32cef39e17043584619d99bac3eba53df0e7c77e94cc6be5d9f3b4245c26f2ae5cda91be37061505de957969c29ca724285a8729d53c7b7ddf1c49f3ed46488b3358318e1adf7264f578412062734cac5ae38e473ba928b519df1dcbe3981cb93727f2862a2e2f751e7691c5128f75fce72b6ff661f5f1cac8615d56eaaa8eaf9eed4f9a9d692bbcf691e50527cc2b3d987d54cb8f52c1c660daed6bffffeb46a3d547157f7f2d45f4bdb7d92d83227332e4490438a4f5dffe3e84a6095fe8fa748941f1e0689106fc3b13fe3222c6e1166a7ee3887ea4e91caf98ab0dfe9f6c5cf815000737e5e61f43b878ab3c741f68235a4fce045f5485446ee1a928a",
      "9a9c1226cbc53d70f64bdcb576adbf06f2b110e1050000",
    ],
    [
      "ETag",
      "yy/S3pLpv0kEP1/gYTLBEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1592525998233"
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
      "6b",
      "c2",
      "30",
      "14",
      "7d",
      "efaf90ec55c1afea1cf8d06e4e05754e2b6e0c91d8de6ab56dba24dd10f1bf2f49abf6c55198b09726f79e7373b837393d688502da79a1831e0a68e5ad3f63a0fbbb35f057b999008b7dcec4129190012a4a3670bc96ecde9b3e0fde4dbae3e614cc9d39779bddb9d16e272c666f20c082771091885d0f7c8789f843c58534afb01007204fb4891f07e15285c50bccf79182a7d6a43fea669180380a19cd0603c31c74500a1d8bd7451cccf1521df93709b52eb4540c6dc96a022e50086db8741d51b2059bf7d578190e221f4a8cc4d406968ac8c2045e53124798125212a952432f55f45655afeaadd67db5563bd17d6263ee915056cca6e8accf09c7fe847ccb11a3467207340993899f4681dccc25642724a02f59ec39e89c3b167f21f64756a39ee1a6bb8596a9ccad2a26e57a3e2cff495d5cc9068b179e4f3b7d263712c70189439e53fa79f062dcb071e186bc4d3f1956e756b28c0b2fe4d4b5fac3ced43286e3abe2e2bbb898c0dc7360634a84c718286755caf57bbdd928a393531f8974229746e5340695b6b1f863f53c2e722ef6196847ed0784f20a5f1d050000",
    ],
    [
      "ETag",
      "HX5WmYBrktBSeBkBWf7GWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-66-1592525998233",
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
      "000002ffad946d6f9b3010c7dfe75320a64a9bd4243c3484548abaa8651b5a4a3a421a55d39418e7a06e01530cedaa2adf7d362484a859554d7b07f7f0bbbfefec7b6949927c4f92957c2ac93e091f0ac89e3fdc515f3e161ec851283cc55df7f7039e5f27707513ab811efa81b37a1a0eab2852663314a711b4192d320cec7436ed84192d529451dae6c0b661b4d5de40eb69bdc1c0d474bdca6510056392dc0bc26d9ea7ecb4dbddeae884948611a094b00ea6716def3e6add34a3778073d6dd2fdbe59558f7edc26711c528273419cea695888241b680189148c8d865affccffbf80e417127e4d18f0403c29816492ea455184c9380844556c239e9851bb9b9d45cff360cf2d41a5be79e743e9939dec7258a056ef949424c5a2c326045944b5fdcc9a5b44c79f55bc4802da5f937cbb5b825a301896041564b69289d4923e74292c693b9e57eaca3396a6c7fb7b8776c5fda9ea496324b092b6039494aa11ef22368c8e3de4d73ed0373ad110282725e6513b6e82b06524d65e0077e1f07a6def303057cdff4fb3da4fb0a1e9cc0c9ca07d424e4a276958f129a68a09a0642ba19e81ac666df3400343038676560c5547a9aaa28fe00e40d615d9fe72923395c1096524636dd97e7aeed590bcf9d39e723cf6a9e3d40bcb51795fafd93ef1d29e74d6aaa7dab2daf14a519a15c543967dbf12c7774eed9d70d19fcd28d2144f879fa20ae5d802206bb6c94a11872c82ee94a0c47be9a4c6dcf9e38a3f18e50dea3ab6d24e3613f6bb1bb333569de73ba3fea6a0a9555c8344ee4866f7d7c90728da2e200e6716396d53d46eb00ed5fd44d3dd776befe077947284d8ffe2271f3f5abd5e0cb7c896ca4c93f66967b23724b9ff0b810400609de557cc7f3118995fb1d3b92876f3796c8e04babaecf726ee62f19b35d759c41f5ae495c4da3041aaaae",
      "aafd1ac813b3fc7584ae0db611afb696a8053124f9b617d5f6aa1ab9de935434e49469229cbf436733c0756bddfa03793b821b7a060000",
    ],
    [
      "ETag",
      "uj/xqcWVnePYm1f3gbfNdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1592525998233"
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
      "6e8230147de72b48f73a9209c3e9121fe642d485e8c6e6d3624c850bc280cbda32430cffbeb680fad2f69c736f6fcfe9d9304df29396117936c9214d7e6b60cd5d02e2431d02e0752eb8dc2a2c39907b550d8226aaba88b2476f19f84eb44836f653737c9b6c26a7d9acabe2e1110a2aebce12491ca790475ce26f8dcd9ed75a490b5037eef74c0fd437f49a682aadadd65fdec20b6ea502232dadb7beff32f73dd24badde77726df553323c041003833284eb832a86198462a59d735a5439581c6b1602ef87a8c64e4e18d615658896a4acf1d81ab953dbb5dde974623bce509e6348458aa5ead87e92cb7c8182e6019e947b32eae2611decc218a220f14d3eb70949e94f35dbe442b5fd69670c68771d366f04f07786d20b07ede0810c51bca2b22a541282d5a0e990cadf5aa6a2e78cd6f8075c37807d18020000",
    ],
    [
      "ETag",
      "mdj4EHRL3dGgO27yhJ8O8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "6e82300000d07fe9b31ae45af6468b63a94cc6c500be10848e5b4028058465ff3eb3f307e707a45946c731e18f8676e00daca9a81fb2c3f9019160e4a9e277d21d6ad8beedab1c79cf39acdb3892372267cd87168ac6ec0ccbbb77ed57edbb944b8e837a4aa265b0e72261e44289bb57eb3353a4758991cccde85eba4226417d53352c7516eb2ef0c420df821c8b996ff1dc8710ef09d1a719994737fc24a40e5bf3d447d869bd232dec385f54d9e55764adfa5a8c82ec8c37897d7167427c6854010684d8d888c10ed0675f313a26d56b2629babe03ffcd84af3d7d5d114d1965e0f70fd7f685fe05010000",
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
      "Fri, 19 Jun 2020 00:22:11 GMT",
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
      jobId: "grouparoo-job-67-1592525998233",
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
      "7df75710f6b50aa2a834315b63694baab80bd8a6bbd9906118e85464283374db34fef79d0154589ba66f70ef3de79efb31f7bd2349f206a7a17c2ec9018e9f0b94bf7d7b22817c263c88815878b464380a6e7f692e7bb8b536afeaf5e6956d66d36915854b3405db2c415d4a8a1c227abe767b714e8a0ce4847439617734eef67543d335dd3026da605061294aa2054e3782e191b18c9e2bca5e472f26244e10c830ed41b23dd895174dc972f28420a34a3badc23351e5f3c4df130201c3249daedd4a444151eea32dc08990714487c1459bbe87c1b617f3e8170c118090142913d22a1a48d208c7455e9273a6776ee4e652f3e1b761905d7361ce3d0992a4d8a67e0ab6e84c0a01033e7bcb9074e5ac9692655fad9ce5ccb356b6efce6fcce5ac375f2dd64bdb95ee6f4cc7941808125462a5a97451fed9fca75454660b1165382d3579c2db50c2bd751fad0f4678a010245c154575983f5647a03f518d200ac6309a0cf4205251104c82b10e06810a8d211a8601024d86525985072949416818e3f148f32308547f18aaaa3f4143dde7938aa2309820ddd0e51abd3bd4f237c70c5d629a118aeb26cbf78ee599bee7acedf9cc339b7547a048d865a5bc5d75ab1cc61bd454fa594b4e146539265c54394ecbf64c6736f7acbb860cbe5b0b1403f8e63e8bed8a4042d1110d723e2b86f22509c560647bb6342f8fe072537eec83288ff87dd0792c87078af997b59cccbf9dc7e38b",
      "d56a45359bca2abb9e63d9d772c3b9fb98e60e24c5073c2fb559ce78b71e7987698babf3ffd79f4e2387ccdf6a2d4ffeb9369d07812d7dc2e3a008e52885c7ac5f585d01acdc5f38453c7c7f180482df86437ecab899bf22488fd9618eaa3785abce5784a3fea03fe96b7b420eccd96984d11fef234e8e83c885b62865fb5e5447a26ae4ae25a968c82961229cbf03bb1ee2aeb3ebfc0308818ccbe1050000",
    ],
    [
      "ETag",
      "2l46bKZ2StYKIkx0GkxtkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1592525998233"
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
      "5d6f8230147de75798ee55133f712ef10137752eea40f161598ca970511c50d6962dc6f8dfd716545e5c4866b217da7bcfb93db9b73d1cb452097df8918b1e4a68ed6f3e13a0fbbb0d704b6e66c0928033b1c4246280ca920d1c6f247b3ae4fb978537b0de9aba55ef59b66952d3ea76531673b61062c13b8848c49e0f81cb44fcaee252965758844390273a2448c268a5c2f205e6fb58c1737b369a0ef348485c854c17e3b1d11bf751061dcbd7455cccf14a1df93709b52eb54c0cedc87a061e50881cb8741d53b203878fd478190ee3002a8c24d4019689c8c214de5092c498125211a98adeaed45a9d7aabdeea74eeeb8dc6891e1007739f44b2623147677d4e380e66e45b8e18e9e91dd0344c277e1a05f27297909f9080be64b1efa273ee58fe85389ada7a33c7cd764b2d575958554ccaf30358fd93bab8922d162fbc9876f64c6e248e439244bca0f460fc6adcb071e186a24d3f1976ff56b28c0b2f14d4b54793fedc3626e65571f15d5e4cd0db73602625c2630c94b36ad5e67dabad57d1c9a98f443a914ba3729a804a3b58fcb19e7d2e721e0e186847ed07b7d2c9921d050000",
    ],
    [
      "ETag",
      "NGtyJUfFQY46Q2BQTPPrPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-68-1592525998233",
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
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "58d94b2b0d0869a1940975ac4db76c7cb424b4eaaa0a4c72495d9238b59d56a8ea7f9fe3401234d64dd31e26f140eeb9f79c736ddffb5241485b92c8d33a489b13ff3101b67af740e7dafb140181fd1469aebcb3b8f9f5f0c89a37312c7bd6f9332c9fbbdd2c8ba86a8ec338802aa7097381772676cd67348931a3b42a09abad76b5d13c369a46f3f8b86d1c1c64b51c82459f44cb94e15e889877eaf58d8f9a4fa91f008e09afb934cce3f527a31e33fa00aee0f56dd9ba54e2f5b7854f02ea624168d49dd8998984039b42884990da28aabdf9c76dfa1ac161cd97d94fc405ecba3489446a2da37169b4207ec214b9647a914119569ef3cf5240b3cdbe79eaa0d3d164e8eccd7098d2cdf611e6683a65c09340a0f3f1688066b154bfc71cf80c5d7f31c7a68c30ba20014c8937435d74827ac33384faa36b73bc37e3429a963c7deb9b29a1be35b01cd4501e95be070b2cb9cfb09094a2e42cc5b2a0a5ae540017799904d7876eedb86f6d9df59aabc48c5046846ad41a3ae6b877ea58576661439e7a1f7cecaeecc7f4dc1738e0505463864310c006d48394e262645b8e351af6fa05833ac88b4d269769b7b9d9a2a7329bb38a61ab61058b2c9ada6c1d6a25ecf5fd4e962b1c243b689ed661adb1c551d9c1f637ee1c6b60da4e6f70f10f1c1abaa15775430e86a3b73bba2e7f355dd7bfffc2f8",
      "fadf5da524a9c9d95a1bd62e27e6f826ad55588a8c61010c22b730f1e6eb292833f80f56874cdf0c725a216739d79703200817c4e585bacb40e53a24ccee4811b61a0746ebd0d810ca42267ece38d2db9b0c88bcddf89678521206c6281bab692e2f01698767ce4924af8578976a2be46fbbdcdbe3361402e7d8571e86148558b8f724f211277e24a519a005656891446e5a9f2d0515c2cc4f4288044a5f14efa0fc41d5909dc4316502bc82452664fbc476c6d6f0f3fe87f5e7a71bc7b4e59212e8b6d16937eeb4ad47a1ba2d4f6269b7fca6e5379bfe4fdbdeccc65df180847278361a9aea4d545e2b3f003739194165070000",
    ],
    [
      "ETag",
      "5ydDp5J47Ib5aekAIFwekw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d0bb642d0e8454427722b40842075010364c08291f0d20c111ecf4ee75fa6ef07e00a19409914ffd8575e01d2c04ea6bba767b6cc8db6ff3d356c69978a29cba207d3eab744e8a22bbf2da8d081fb06c2966adcf5c04b1eb5b28dedd03e9769a9c1d8d21175126a49bc9c3839787812c0e467937cb05768fa6329ba6b47a0b761386578368de1949381a5a5ea20f3ba9e5a3f2c8ea34561d54fbad7af2ec8b56c419ae28d95b509a75be3736670d110ced9639e958fbe1091da72ddaa44393c834faa26005d83c34231379f39aa96fbabe02ffcd7c5a06f6ba1a8c8c6c04bf7f988a13e305010000",
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
      "Fri, 19 Jun 2020 00:22:12 GMT",
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
      jobId: "grouparoo-job-69-1592525998233",
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
      "a3",
      "30",
      "10",
      "7d",
      "cf",
      "57",
      "20f6719b40c8954ad1364ae83652425a42daddae56c89881ba259862d3aaaaf2ef6b432eb0a9aabed93373ce9cb9d8ef0d45519f4812a8e78aea93e83987eceddb23f5d533e9018e22e961cfd634cabf679a331c4f5ff5c9fdaffbebe578342aa34881666893c6d06434cf30b0f3f5aa1565344f514669531036fb66b3dd338d9ed133cda1d1e9945806713827c9936478e03c65e79ab6d7d18a288d624029612d4c3707bbf6626869461f0173a6d5d36a2213d33e4ffc23a618714293d17a558ac819641e6c1089a58c233af02feaf42d8236ad4844bf100c08639a275c4a2b69304d4212e559412e98de8551980bcd876bc5a0aeacb93571154ce37c937809dac09912208e3cfe968272e92c17caccbe5c3a8bb13b5bdade6a72652dc6adc972be5ed82be5eeca722c85233f8602ab8c948be2668b4ba1a8c81600e3242934b9d25b5122bcbb3ece3e18e181429208550c7661de40efa3f65037fdd01fe070d8e9f9a10ebe3ff4073dd4f1756c76a11bf880aa0c85b2128f129af803104319e89e6e186dafdbf77d6fd80e7a5e00a01ba6d1415d14aa3bf4f650cb6b46384c094b2923bb26ab77ceccb53cd759db93b16b55eb0e511ef369a9bc5e75ad1c2e1a5455fa594b4e14a519a1425431ce99ed5ace78e2ce6e2b32c46ecd2142f86df52cb72b443183231a6562561cb2050de460547bbcb0",
      "a64770b129d7fb202622fe1c741ecb118172fe452d27f3afe771c562d55a51cea6b4aa2bd799d93fd58a73fb31cd2d8af30f785e76663515dd7a101d6635aec6ffa7bf8d4a0e55bcd59d3cf5666d39bf25b6f0498f03216490e063d62facae0496ee2f7c45227cff314884f81b0ef9191766f18a303b66c719946f8a949d2f09fbed8e619aed3da10066fc24a2234efb8893cf41e6820d247cdf8bf293281bb9ad49ca2b720a980c17efc0de0d71dbd836fe01191c2356e1050000",
    ],
    [
      "ETag",
      "sqEDgu+r/R8ADw0CZXZPOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1592525998233"
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
      "4fc230147ddfaf20f55148607c08263c80a29200021bbe18424a773786db3adb4e4308ffddb61bb017cc12497c597bef39b727f7b6677ba354421f7ee4a0fb125afbde67026c77e38198a9cd1c7812082e9798461c5059b141604fb1b9b56913d3f2fcc1dde68d85a4766b266cd6eda62c4e361062c9dbcb48c6ae0f81c365fcaee35296d75884435027121a2461b4d261f90c8b5dac61cb9e0f27cf7924a48e46268bd1a8d71f0d50061dca97451c2cf04a1ff93709bd2e8d4c0c6de97a0e2e3088089cbb8e19dd0211433d5e8ec338800aa70923c033115598c21ea3498c19a51599aab43a955ab36336cd66a7d336ebf5233da0040b9f46aa6261a193bea0020773faad468c5ae91db0344c277e1c05727397909f9084be54b1efa053ee50fe85389cd8ad468e9bed9646aeb2b0aa9c94eb07b0fa277579251b2c5f7831edec995c491c8734894441e9a7d16bef8a8d4b37146dfab1670fae25cb85f442415d7b381e58766f3cbd282ebfcbb309fa3b017ccaa8f41807edac5ab5d16edeb5aae8e8d407aa9c289451054b40a709967fac175fc89c8b030ec6c1f8014e25a65a1d050000",
    ],
    [
      "ETag",
      "sSh8c2SgiE7hVrmc1+2urQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-70-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffcd545d6f9b30147dcfafb0d84b2b351f90266b32455d96b2162d212990565d55252e18e21630b14db4aaea7f9f31091029eba6690f7b837bee3de75cfb5ebfd600509e71ec297da03ce2609d22faf2e1893c2a271982380c32c45ebb5774b4493ab31f961e747b4f2bcd1c5e0f06791696d50c464988ea8ca4d445ac3fb71b012569022921754158ffd8aaab9d9ed6d13abdde99d66ee7b50c85fe18c7cf19c38af384f59bcd9d8f46404810229860d6704954c49b1bad9950f2845cce9afbb24da1c49aef0b9f87c4851c937830b77313294374812288c3cc4659ed3d7edea76f6018350291bdc12e82ae4bd29867d6721a97c43e0e522ac905d3ab088ab0f45cfc56028aad8ff5910346d3b9e91c2d6194d12d8f016460b1a088a521075fade9042c13a1be820cb125b8bdd22d5d4428f1718816d85b8201380743f30280f1f456b78e968c0bd382676c7cd305343626860354e951ea7bc88782fb027241c92bce322c0f1af24a3962bc2813e0f6d08d03f7ad6cb3de0a9584624231978d1aa6a35bc39163dce8a50d71ea631440f7c55e67e7eec390a1b21a5218218ee8847828a3984d6dc331a6e6705c32c8839ced329948bb2fcc963d55d99c9704ed352c619e47339bdd53a582bd9d1c64b981617a8066b30d2bea1e47ed00dbdfb8738c896e3bc3c9ec1f38d45a5aabded2c46238aad657db7df5b4d16ab5beffc2f8f6eba1569154c46e6d0d2bd773ddbacb6a25962116f21145b15b9a78777a4aca1cfe83a743a4ef1639ab10bb5ce88b05e09871ecb252dda548e63a38caef481276d5f6a9aa767784a290f2031967bd5d068abdc3f89e785a114694126ac96dae3e02c20ecb9de3585c0bf6aee5ab50cc76b5b7f53e1421c660203d98044490bb2b1c0780e12016d214019f50e0a7b19bd5e78f820c411aa4118a39c8268af54131500d60a7494228475ec92212f2f7c4762cc3bc3cfeb4fdfd72e7e8b678a438b857fb67ea83b23714b2dbea2656de96dfb4fc6ed3",
      "ff69dbbbdd782807884b871753539733517babfd043ab52f4a65070000",
    ],
    [
      "ETag",
      "SqcHrCvp5PxREg69jh2NAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "dd7643300000e077c975dba314cdee64521d1aaac67ae510a906f39b51dbd9bbaf67df1b7c3f20a5948d6322da8a35e0052ca90c3774e3b47b24193954b545b607cb69a065eeaeb638d275fcd6566eb8aba71edfaf6831b4568a45787a5d7f322d0e6d32d3dccedcc337b1849614b73ed6994778d07fac45a8307e92bc9677655117ef632d28dfe25c8d0aaa101c7f35e525083b389b4633de67bcf5098411a268520256c995cf96f266ea7d742e0239d36ab79cf6c8c3974c7ff88ee1087c0c7c3723d1810ad368c10ab047c7073626fc3953540857e0bf9988a563cf2b62e9c006f0fb07fe60f85305010000",
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
      "Fri, 19 Jun 2020 00:22:14 GMT",
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
      jobId: "grouparoo-job-71-1592525998233",
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
      "8d545f6f9b30107fcfa740ecb5090981102a456b94d29529211d9056db3421630c754b30c5a65554e5bbcf8684c052557b83bbfbfdb93bdbef3d49929f7116c997921ce2e4a544c5eecb1309e50b91410c242233dd0163796fd82afd75779b7d9fe0743c7f9bcf667515aed0146cf314f529290b88e8e5c61b240529735010d2e7847d63d41fe9a6aaabba694ed5f1b8c65294c64b9c3d0b8647c6727aa928471f838490244520c77400c9b6892bafaa9217e409414695aeacc295a8f2b9f0d79440c030c9661baf3651525404680b702a6c9cd05178d5a51f60b01d24bcfa154304202465c684b59a06922cc6495954e49ce99d0779b8f2dcfcb602b2672dad852f419296db2cc8c0165d4811602060bb1c4937ee7a25d9cecdda5dcd7d7bed04dee2d65acd078bf572b3723ce9e1d6722d8981304515569a4957d59fc37f2a47955a8428c359e5c917d996139e3dccd1fe60850d8520e1ae283a9405c6700246d3a119c6a101e3e9580fe3210ac36968e8601c0ea1a9212d0a11683354ce6a3cc84866aa13d304ba1a84666c065a04d50098a111a8133dd2a03e1c8ea69a7c40ef9b5ede0accd035a639a1f83064f9c1b57d2bf0dd8db398fb56bbef189429bbae9d77bbeeb4c3f880da4e3f1bc999a3bcc0849baad6693bbee5ce17be7ddfb2c1cfd6122500eebc1771ba62905274428382ef8aa1624522b118d999afaceb13b83a2977c722ca2b7e373e4fedf042b1ffaa97b3fd77757c7eb03aa3a877534765cf776de79bdc4aee3fa6b90769f901cfeb212ce77c5a8f7cc2b4c3d5fbf7eb4fafa521f3bb7ab027ffd858ee4f81ad7222e3a21815288327d5ff38ba0258a7ffe329e2e5c7874120f8dbd0e853c6c3fc16417a528705aaef",
      "14ae275f134e46634d33b423210716ecbcc2d01bc9b3c74168a12dcad87116f523510f72dfb154b6ec543051ceef817358e2beb7effd05a18b5656e1050000",
    ],
    [
      "ETag",
      "8ya7LV7I2sZPHnJ6il3AwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1592525998233"
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
      "af58eaa3237cc910131f40518903750c7d3084d4ed6e0cb775b69d8618febb6d37602f982592f8b2f6de736e4fee6dcfbe355d47ef61e2a10b1dbd85c14706747d12007f921b1b581671269694240c9021d9c07120d9c1aa7ef78c5fcc60d0b80f6ebf4c5a3f6556707999b398bb84180bdeb78844ec8710794cc4af2ad68bbcc2121c833cd1255116270b151a7b98af53054f1d7b34b92d2331f114329959567f600d51016d8cc3221ee678a18efc9b845ae75a218656e4cd061f28242eecbb4e295981cb476abc0cc76904354632ea022b4464610e07946429a684d444aad66dd69a9d5eabd3eaf47ae7ad767b4b8f888b79481259319ba29d3e271c4736f9922346667e07340ff3896f4781fcd225942724a04f591c7a6897db18bf104713c73c2b718bdd5c2b5556561593f2c30816ffa42eae6489c50bafa65d3c932389e3986409af287d633df48fd8b87043d5a6affbcef058b28c0b2f54d47546e3e1d4e98f1f0f8a8bef7c6f82c19a037ba444788c817256b37176dee99a0db475ea15914ee4d2a89c66a0d22e167facbb908b9c8f2306da46fb01ea64c0081d050000",
    ],
    [
      "ETag",
      "gj/HVaW6gB0KgGw6r/+sLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-72-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554614fdb3010fdde5f6165426c126d68a19456aa584783080b2d6b53109a50e326d7e091c4c1769810e2bfcf76da24d50a9aa649fb16dfbb7befd97797971a42c6034902a3878c05091f3360cf1f7ed085b1a7101038544827f583a1995d24ce43dc8c2f7e9efbfbcd65d8efe7594457731ca711d439cd980fbc379b364246b314334aeb92b0de69d59bed6eabdd6a77bbc7ad8383bc9643b47448f2a018ee854879cf34d73e1a21a561043825bce1d3b8889b4f2d3365f407f8829b9bb2a654e2e6fbc22711f5b12034e9cfa6b9898c039b438c49a46c94d5c1e2f3267d83e0b811caec27e203f67d9a254259cb697c9a2c4998314d2e995e645086b5e7e258091853cbb14e5d743a9e8ddc8f1e8e159df709618ee673063c8b043a9b8c2f91974af57bcc817be8e6dc9a5832c2e8924430278187fae8040d4643849cf18d35a91039f6574b628e7d69bba8a94d6a03012cb1241f62213945c59ac2f2a0ad7b2a808ba24c82ab57b7b734dc5865bd162a29239411a16f6a8f5c6b323875ed6babb4219fdd8110fbcfd347f5f04b1c7128ab31c33108609734004571359edaae3d1e0d9c9241bfe4d53a93cbb4ef85d9f24e5536f739858d0b6b58e45165f3e8d0a860af7b5b59ae71946da1795a858de606476d0bdbdfb83b73c6837fe36fa7d9681feebc6172f57557ab0818729156e68c6f336b72ab6a35a690092c8141e29792ef4e4a4999c37ff09f90e9ebad551572710b7d2e64980be2f352dd67a0735d12e7fdd08447cd834eb7b3bf2694854cfc9671dcda3f5c6740126cc737c4b38a303046d944af6e75e3a51d9e3b27896c82fc6116231c03e738d41ab344be0207bc8800e9c946454391e72192203509c8736fafacf96a18bc3df4050728a099aad20deea1bcbdebd36e7edc35361aaa9d5637a6f20f78dbee7f30bc9ec8bbb26d42ab0fc7234b77a2f65afb054546e3f1c8060000",
    ],
    [
      "ETag",
      "7pcdD/uJnLkm1mJwHc01fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00",
      "00",
      "c0",
      "bf",
      "f8",
      "1c45064203bd910a22a0503687e5828c71c21a16b314aafebd51e707f303302194b174ea6afa04ef60c3bc7c2447b3932e50c91f9fabbc5a5c06fd453bd3c046fe96efd9620a0436d6d5481cdc6986d14eab23eb5d8007dc7351a870b7618ec5fbac27926596047dd4c3493cb74a6cc498290559edc8dd5089ed39d9dd1b1752e40e9aea558256da8dd4190f6fcf9e5ea05b5dc16cce08f96b06d5c8647c6bcd8e6afae84b7211ae2b2d8a1a88099fbf258b2393d437530596a872effca960e000e8775f8e94a5e56b2688b27c00ffcd74da7afaba5e281ee9087eff00e6b4df6a05010000",
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
      "Fri, 19 Jun 2020 00:22:18 GMT",
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
      jobId: "grouparoo-job-73-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6fa24010feeeaf20dcd72a2a52a189b91a8b77268a57c0b697cb852c30d06d91a5ece25dd3f8df6f1750e16c9a7e8399799e79e665e7ad2349f2334e43f94a927d1cbf1490bf7e7922be7c213cc0502c3c838d33bf45f143cea2f99429bb8747fcd79c4e2655142ed1146db304ba94147900f46ae3f4e29c1419ca09e972c2ee58ed0e3463a80d35c3d087aa5a612924d112a7cf82e191b18c5e29ca41472f26244e006598f602b23dda95dd50c972f20401a34a3badc23351e5e3c45f13122086493ad93895888242eec116e144c838a143ffba4ddfc368db8b79f40e07808280142913d22a9a80a4118e8bbc24e74c6fdcc8cda5e6e36fc3203be6d29cb9524092629b7a29dac2851422863cf69a8134b7d72b6961cdd7f66aea2ed696e7ccbe9bab696fb65e6e569623dd7f376d5362c84fa0c44a13e9bafcb3f84fa9a8cc160265382d35b9c2db50c2bd751f17ef8cf0482148b82a0a759837ee5fa281de37fcc81f0791ae6a7ed407dfd7fdb18654bf1f182318853ea02643a9acc2a394a4a8df075035c3f347aaee8dc250f310d20d4f35906a5c4608d430926bf4fe58cb9f1c33b8c1342314d74d96efed856b7aaebdb16653d76cd61da122613795f276d5ad72186f5053e9472d395394e5987051e53817966bdad399bbb86bc8e0bbb5841805afce8bd8ae0825144e6894f35931c85724148391ade9cabc3981cb4df97108a23ce2d751e7a91c1e28e65fd67236ff761e972f56ab15d56c2aabecb8f6c2fa26379cfbf769ee5052bcc3b3abcd72c6bbf5c83b4c5b5c9dffbf7e771a3964fe566b79f2edc6b47f0a6ce9131e1b22c8210d4e593fb1ba0258b93f718a78f8e1300804bf0dc7fc9471337f45013d650f72a8de14ae3a5f115e0e547d34d20f841c98b3f3084dd70e1167c741e4822da4ecd08bea48548ddcb724150d39254c84f37760d543dc77f69d7f5fb4cae8e1050000",
    ],
    [
      "ETag",
      "1USFQagXrtfFAt/vXhixEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1592525998233"
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
      "4fc230107edfaf20f5152282a098f0808a4a8280633c184348dd6e63d8ed66db4188e1bfdb7643f6825922892f6befbeeffae5aefdf665552ae4238c3d725321ef61f09902df9e05205ff4c606913229d492602c8054351b240d34fb952dcfb90c83d163b45e39281ee8646c6fbadd8c25dc254454f1be54a4623f04e60915bf99b892e70d16d308f4892eb2348a1726ac1e60b94d0c3c75ecc1e8b18844e81964341b0e7bb7c33ec9a15df5b88847255d9823ff2661d6b9958b9115bedbe00387d88543d709c715b87260c62b689430a8094cb90b2217d185191c704c13ca116b2a55bb6ad62e5a9d46abd1ea74ae1bcde69eced0a532c45857cca6e4475fa2a4ccc68d1e31696777c0b3309bf87e14c42f5c4271420a5aebe2d0233fb95df517e260e4b42f0bdc7c37b70a95a555d5a4fc90c1e29fd4d5952ca97ae1e5b4f3677222711a611acb92d20fc371ef848d2b37946dfabee7f44f252ba4f242495d67f0dc9f3abde7c95171f59d1f4c70bb9520261c95c70418675dd42faf5b57ed3ad93bf50eb513a536aae42998b44bd51feb29942ae75326c0da59df9b72e8c91d050000",
    ],
    [
      "ETag",
      "Ylh/rtigNGmvjTosFaPORw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-74-1592525998233",
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
      "00000002ffc5545d4fe240147de7574cba316a22205fae9010d7956e68ac805034ba317428973ada76eaccd40d6bfcef3b3385b62468f669f7adbde7de734eef47df4a0819cf245a181d64cc89ff92005b7d79a273e3482120b0af9064757d3c329b97fd5eefd7fdf16fe8cf6fee89dfeda6594457731cc60194394d9807bc339d547c469318334acb92b0fcb559aeb5daf556bdd56e9fd61b8db49643b0b449f4ac181e858879a75addf8a8f894fa01e098f08a47c32c5e7dad5763469fc013bcba2d5b954abcfab9f059403d2c088dbad3496a22e1c066106212281b79f562fe6d9bbe427058f165f62bf1007b1e4d22a1aca5341e8d96c44f9826974c6f3228c3da73f65a081813d3362f1c74319c0e9c0317878ace3d4498a3d98c014f02817e8c8757c88da5fa23e6c05d74db37c7a68c30ba2401ccc8c2455d7486ce073d84ece1ad393e7065ec100d860eb2ad4b5362b6756539a8a64d6a030b586249dec342728a823585a5414bcf540017599904d75db7760cdc5867bd672a31239411a1bfd41a38e6f8fcc2b16eccdc866cbb0d3ef6569317d5f8250e38e4d598e11004b02bba0045311a4e2cc71a0eceed9c417772b4c9e432ed676636ffa6229bb38a61eb83352cd2a8b279d2340ad8fbd14e961b1c243b685ed761a3b6c551dac1f63fddedd55a7b1f185c3f3d940af4863ca2b531e37a6a8eef54adc6143286253088bc5cf0d32dc92953f82ffe11327d73b1aa421e6da6cf850c73413c9eab7b0c74ae43c274169af0a4d668375aed0da12c646247c6e9f12603a2c56e7c4b3c29080363948df5d916af5ddae1a97312c911c89f65b6be21708e7dad318d641738e07900486f35cac6895c179108a92d40ae733732677a11dc23f41d2f24224e9a48cfb683d46437cffbea65dfd89aa4b6583c93c2e17fecf35f3addece0433e28a1657bc381a97b5f7a2ffd0140d1cb6ab6060000",
    ],
    [
      "ETag",
      "uyQ0PE4KHDDwZ0zeHbVZig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000002ff1dcf4b7282300000d0bb642d8efc5ae98e14e43b68918266938134890e42281f09767af73a7d37783fa024840e031e454d5bf0069652b3d6641d892ddcd8acd9dc0a23503f1c1e1eb8a3b6ecbd1401377c338ea4cf8b3e4bb5ba393d9825666dde0e0953d8eb044bc6871bebea2c40d52e69a497692952ee4eeebac26d7511385538b57082e963395e6016ee3b36e7c68125723c9db1d4d506f9d0265ed5b231f47c1c2363e621924d5d15f3117d9adf465c8ec25ace9c5483ab46be0af105e636dd136df715e4f717458015a0b2bbf674c0d7e74c372d6b05fe9b785c3afabc425af6b407bf7f1892181905010000",
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
      "Fri, 19 Jun 2020 00:22:19 GMT",
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
      jobId: "grouparoo-job-75-1592525998233",
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
      "4f",
      "a340147defaf20ecab2d054a0193666d2a6a93966e29d55d371b320c038e52069941e39afef79d817ec0d618dfe0de7bce3df763ee7b4792e4279c45f2b9248738792e51f1f6ed9184f299f0200612e1b9d79757ebdbd73c2f7f6a4bf257bb5696e47e3c1ad551b84253b0c953d4a5a42c20a2e7eb552f2948998382902e27ec9a4657356ccdd00cdbb6345dafb114a5f10c674f82e181b19c9e2bca5e472f21244911c831ed41b239d895174dc90bf28820a34a3badc23351e5f3c4df530201c3241bad57b58892a222401b805321e3888ec28b367d0f834d2fe1d12f18220021293326a4d5349064314ecaa222e74cefdcc8cd95e6c36fc320af9c9933f12548d272930519d8a03329020c04ec2d47d295b7984b53f76ae1cdc7fe74e106abc98d331ff7268bd97aeeaea4bb1bc7732406c214555869245d547f2effa91455d9224419ce2a4dbef0369470efae8fd30f4678a010245c1545bbb0c0ec0f816af5ed300e4d185bba11c67d148656681a400ffbd01ea0411422d064a894d57890916c10a9ba39b08681a59a5630180ec300680805916a19763884c054a1bc436f0fb5bc1698a14b4c7342f1aec9f29d37f59dc0f7d6ee64ec3bcdba6350a6ecb256deaeba550ee30d6a2afdac25278af202132eaa1ae7d4f51d6f3cf1a7b70d197cb7662801f06df52cb62b062945473428f8ac182ae624128391ddf1dcb93c82ab4df9b10fa23ce2f741e7b11c1e28e65fd57232ff761e9f2f56ab15f56c6aabbcf2bda97b2d379cdb8f696e415a7ec0f3b233cb39efd603ef306d7175feff",
      "fad369e490f95bddc993976bc7fb25b0954f783c14a30265f098f50bab2b80b5fb0ba78887ef0f8340f0db70c84f1937f35704e9313b2c50fda670ddf99a70a8eab6619b7b420e2cd86984a919fb8893e32072a10dcad8be17f591a81bb96d492a1b722a9808e7efc0dd0d71dbd976fe01d4d34815e1050000",
    ],
    [
      "ETag",
      "Z3QFUVwppuX2Qoz2G/QoZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1592525998233"
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
      "02ffc5545d4fc230147ddfaf20f51148f81a82890f435149f8728c44620829dbdd186eeb6c3b0d12febb6d37602f9a2592f8b2f6de736e4fee6dcff65aa984defcc8413725b4f6bdf704e8eeca03fe2c3726b024e04c2c318918a08a6403c79e64f792c5a4ce1db341bda8fc052fd3726db2306e6f5316b3371062c1db8b48c4ae0f81c344fcaae25296575884439027da2448c268a5c2ca19e6bb58c133cb1c8c1ff348481c858ce7c3a1d11bf651061d2a3f8b3898e3953af26f126a5d6a9918da92b5092e50886c38771d53b2059b0fd478190ee300aa8c24d4069689c8c214f62849624c09a98a54f55aafd6f56e436fe8dd6ea7d16c1ee901b131f749242be63374d2e784e3c0249f72c4a89dde014dc374e2c75120377709f90909e84316fb0e3ae50e955f8883b1d56ee5b8d96ea9e52a0bab8a49b97e00ab7f521757b2c1e28517d3ce9ec985c47148928817947e184e8c0b362edc50b4e97bc3ea5f4a9671e18582bad660d49f59c668faa3b8f82ecf26e8ed38b02925c2630c94b3eab55647bf6ed7d0d1a977443a914ba3729a804adb58fcb19e7c2e722e0e186807ed1bed245baf1d050000",
    ],
    [
      "ETag",
      "BuYO1tdR2rgn+zeXP+0OYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-76-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad54616f9b3010fd9e5f81982a755213480249a81475514b57b6947484b49ba629318ea16e0153dbb4eaaafcf7d94012a2665535ed1bdcbd7beff9cebe9786a2a8f7385daac78a1ae0e82147f4f9c31d09d42399411c4432e39e0f3a5afcfb7666b9177dfc85cfbe4fdbfed37058a27051cd4092c5a8c9484e2162c7b3692ba224cf0025a429089bfd5eb36d5a1db3635ad6a0d3ed96b50cc5e118a7f792e196f38c1d6bdada472b22248a11c8306b41926ce2da6347cb28b94390336d5756134a4c7b5bf8242610704cd2e16c5a9ac819a27394001c4b1bdbea65f06997be8541d28a04fa114304202479caa5b592069234c4514e0b72c1f42282225c78defcd602ead41edba7be723a99b9fee10224926ef151014c99cf296279cc95736f72a92c32a17e0b18620be5e6c2f66c11a124c4319ae3e542192a27cac83d5394f1e4c6f60e376841e54e7c65ec7cb50562ec5c3abed22eac16369688719c16667d10c4a8665164ab063b7b66bba19024800ba50a36efeb3dd01ee85610067d180eba6610ea28080641df04dd408796818c6580409d814bedb21ea424ed0e8c7010829e151886098dbe6ee9204496deb5fa3dd3ec01d885a12eb8d48a61b539cf13c51c9d61961186ab09a8379ee3db73df9bb9a723dfae9f3d04a2bd67a5fbdd93ef1c898b26d5ddbed596578e328a893055ccda717ddb1b9dface75cd86b878631401f83c7d90572f043143db6a40418238a297642987a35e4da68eef4cdcd178cb50dca5ab359209d8cf8dd9ed99ea6cfe73b63bea720a6554daec196a2db73adacb720de27c0fcd631556db3b1c8d3d6cffe26eea7b8efbf93fd83b2014a4077ff1587dfd6ad40454b1492a6feab799edfd90b5454e663c14228a52b8957cc7fb918565fa1d8b52c0d76b4b5688cdb5d1675c84c553866cab0e292a1f364eca711484bdb6a1f7dbe69a501452fe1a6175ad35e2d5ea925a2841295ff7a25c616523573b96f29a9da24cc2c54374ab09ae1aabc61f7b9339957f060000",
    ],
    [
      "ETag",
      "NF82/lzhU9NH7iJtUXS1Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1592525998233"
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
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "487d5412c7861b267b7066718b84288a319a65e9d80599c0c5b63897857fb72db0f1d2f69c736f6fcfe9d1304df29d165b726b924d9afc54c00e170988677508805799e0722bb1e040ae5435089aa8eac5a5cf93915f8408dee35b8a1f7fefd776329d36553cfa829ccabaa34412c729645b2ef1a7c666cb6bada039a81bd76ba607ea1b5a4d1c4aad2dfdd7f9c33ce84b396eb5e4879e7737f3e6a4956abdafe45aeba7ec7013400c0c8a08ce0f2a19ee20124bed9cd3bcccc0e258b108783b44353672c2b02a2943b424658d6fac81e3da8eedb8eec41e0ebbf20c232a522c5447f8424ef3050a9a05b857eec9a0898735b009a38b82c4bd7cfa0949e957358fc889aadbd3cae8d0ea3c6c7610c09f184a2f1cb483d1644cba30ee5199152a0bc12ad07444e57f2d5221b998661c8cdaf807ed8834641b020000",
    ],
    [
      "ETag",
      "H+Nsg4NnUoeLKVioZxX02g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000002ff1dcfdb7243400000d07fd9e72463dcf50d6d421a6ca9605f8caec54adcd65669a7ffde4ccf1f9c1f50604ce639e7c38df4e0096c85681cf0e175d02dc1c47e5095890af7e4cbe5ef482f59b7069be27f2e222de8069113b51a840c76623ab1178fd226c57419a73e1ca2a9a5955edf3d7ed64ae78c3e24bf84622df33935fa683d66fb4b30a628c9fce316876de67d57a6bade2527b2638c65d7d2ac88325cb9adc26bd545bddc15c3650ac293d0cc574ac353302e9d1dda10c50223cf8dea2c57a6246f8169eab7017a6007c83a5246e69c3e669262183bf0dfccf93692c7d52205230cfcfe016474389605010000",
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
      "Fri, 19 Jun 2020 00:22:21 GMT",
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
      jobId: "grouparoo-job-77-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d54db6ea330107dcf5720f6b5b9430895a26d94d26da440b6405a55ab1532ce40dd124cb1495555f9f7b52117d85455df6066ce993317cf474b51d41792aed54b450d49fc5a40fefee39986ea85f40047b1f4bc1919b153efeee5d57c7b60eecd72a13b8ff16452459112cdd0264ba0cd68916360972baf13e7b4c8504e695b10b60da3ddd7cd813ed04d733c180e2b2c83245a90f445323c719eb1cb6ef7a0a313531a278032c23a986e8ef6ee76d0cd72fa0c98b36e336d576462ddaf13ff4c28469cd074b2f22a1105833c800d2289947142afc3ab267d87a04d2716d15b8201614c8b944b69150da66944e2222fc905d387300a73a9f9f85b33a89eb5b066be8269526cd220451bb850d688a380bf67a0dcb84b5b993b374bd79efaf3a51378b35bcb9e7666cbc5ca763ce5e1d6722d85a3308112ab4c94abf2cf113fa5a232db1a182769a9c997de9a12e1ddf771fec9088f149244a862b00f0b8cde08f5c73d338c420347e3a11e463d08c37168e86818f6b0a981b60e01d5194a65151ea534ed6b5a7f3c88f4001b7a3fd0869119989aa60546a42108f108903956f7e8ddb196b79c70b8262ca38cec9bac3eb873df0a7c77e5cca6be55af3b4245c2af2be5cdaa1be570d1a0bad2af5a72a628cb0915a2ca71ce1ddf72a7337f7e5f9321766b0131c2efdeabdcae08250c4e68948b5971c86dba9683519da96d5d9fc0e5a6fc3e043111f1e7a8f3548e0894f32f6b399b7f338f2f16abd18a6a369555f57c77eefc526bcedde734f728293ee1d9eecd6a26baf5243acc1a5cadffbffeb66a3954f156f7f2d4bb95e53e4a6ce9931e1722c821c5a7acdf585d09acdcdf384522fc70182442dc86637ec68559bc22cc4ed9710ed59b2255e72bc2515feb1bda915000737e1e311e998788b3e32073c106527ee8457524aa46ee1a928a9a9c1226c3c53b70f643dcb576ad7fb54bb4d5e1050000",
    ],
    [
      "ETag",
      "w7piMnSQkq9wWsRFOL5NYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1592525998233"
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
      "54cb6ec23010bce72b907b0595f7a3120768a150f12a04f55021649c0d8426716a3b2084f8f7da4e805ca82215a997d8bb33ebd1ae3d391a990cfa727c0b3d65d0ca597f87c00e0f6b10ef6a33051eba82cb25a03e0794556c1078add8562fbfdd8db9491c7b453ebcc7e0addb59ed9bcd88c5c9063c2c794719c9d876c0b5b88c3f759c89f31af3b107ea4442ddd0f3973acc5e617108343c33a7fdd16b12f1a8a591d17c3068b5071d1443a7ec6d110b0bbcd447fe4d42af0b2316435bba9a820d0c7c02d7ae0346b740445f8f97632f7021c769c808f058441546f09ad130c08cd29c4ce56ab55ca1d228568a9546a35e2c95ce7497122c1ceaab8af90c5df40515d89dd2bd1a31aa4677c0a2309af87914c84e5c42724212daa962c74297dc29fb0bb13f32abe50437de2d8c44656a553929db7161f94feaf24a3658bef074daf133b99338f668e88b94d2ddc1b875c7c6a51bd236fdd2323bf792e5427a21a5aed91f7666666b38b9292ebf8bab09da07017cc2a8f41807edac42be5cafd4aa797476ea33554e14caa88285a0d304cb3f56cf11326763978371327e008d277cb21d050000",
    ],
    [
      "ETag",
      "dH0jvOsTcifbcWm/pJFEbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-78-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad946d6fda3010c7dff329a24c953aa94080044825d4b1365da3d2d08650b44d1338c649dd26716a3b4c55c5779f9d04082aabaa69ef927bf8dfcf77f6bdd614457dc2c9523d55541f87cf19a22f9f1e89af9e480fe220949eebafad6b3ff5ae2c6d76a9ad02fef483dfa57783411185f36c06e234427546320a113b9d4e1a2125590a2821752158eff5eb2dc36c1b6dc334fbed4ea7c865280a463879920a0f9ca7ecb4d9dc70344242c2088114b30624f1d6de5cb59b29258f0872d6dc2fdb149558f3fdc26711818063920ca69302226388ce510c70243176d94bffcbbe7c0383b8118ae81586084048b2844bb442069224c061467371a1f42a8cc29c336f7f2b0675628dac734f391f4f1def78016229b7f8ac00a6cce714b12ce2caa53bbe5116a9a8fe0018620b657665b996b05012e008cdf172a10c943365e85c28ca683cb3dce36db49072c69e32b2af2d1131b26f6c4f69e5a839c612318e931cd6037e842a88c25b36d83e30dbad8414015c542ac3e63dad0b5a7dcdf403bf07837ec7f0030df97edfef19a0e36bd0d491bef411a82a7059bbc80709493a7d3de807a06bfaba6e40bda7991a0890a975cc5ed730ba007660a0092db554586fcff39b628e2e304b09c3e504d4996b7bd6dc73a7cef9d0b3aa670f8068ef4541bf7ff2bd2371d1a42aed7b6d794394524c04543e6bdbf12c7778eed9f7150c71f1462804f065f22caf5e00228676d980821871446fc8520e47bd1d4f6ccf1e3bc3d14e21bf4bb79b4826c27e6e617767aaaa792fe9fea88b29145689d9d5d58a6f7d7250e51e44d901995569565b7b1ab5036aff4237f15cdbf9f61ff08e0805c9d15f18cbaf5fb54a01556c92924dbd9b5aee77999bfba4c74501a22881bb921f783f32b1707f60518af0cdda921962736deb332ecce22943b6ab0e292a1e368e8b71e482dd96deee76f48da048a4fc6d44cfd82c89b7ab4bd642314af8a617c50a2b1ab9de43ca2a38799a0c170fd12927b8aead6b7f009f7835307f060000",
    ],
    [
      "ETag",
      "KB1KbpTHE0WF0vftkZtQpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1592525998233"
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
      "30147de72b48f73a92097393253ea8319b89311b9bf36121a6e20571d08b6d6121867f5f5b407d697bceb9b7b7e7f46cd936f94dd99ebcd8649726a712787d9780fcd08700449949a1b602990072afab41d244576fbe69459f905587d83b8d3633e6e53b77321eb755223a404e55dd592185e314b2bd50f8c760bbe38dc6680efac6ed969b81e6864e937561b4c5ea6bfe3a0f6ea51cf7465aad97cbc97439279dd4983d546b639e72c45d00317060115c1f54703c422417c6b9a079918123b0e411886e886e6ce5846359508ee828ca791e3983a1ef0edda1ef8f5ccfebcb338ca84c91e98ef527b9cc97286916e09f764f066d3cbc856d187d1424bec9e736212555baf9915ca8a63b85568fc2ebb0692d41bc73545e0418070fa48f6286daaad449485e82a123aa7eeb2d951d6735d63f9fff008118020000",
    ],
    [
      "ETag",
      "WVava6onvhf3q8WCn3mb2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "02ff1dcfdd7643300000e077c975dba3d4d4ee42d009656bb1edc6c9892895fa4b2976f6eeebd9f706df0f20943221d27b53b11abc8299c8fa866e70b33724985f96601ebee0e954dcd6ceb46d548996c7c0633c764dbc1852a8c9bd2e112290f7d11dfdfc335076eb792c76f6f8c661423374363bc45b74e09e829d44cb459377c13575b520ac5038085783788265feb2bcabc32d8117dc8ea6b2e7876289ea11d110c72997630b4557cb4a48230df8b1e899dfd94e9d2ecd369e61d6fbc8aac4b94065f29d236ce3202af803ac009bdab267222d9f3345d5f515f86fa6f7b965cfabc148cf7af0fb0780c657a705010000",
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
      "Fri, 19 Jun 2020 00:22:23 GMT",
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
      jobId: "grouparoo-job-79-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6fa24010feeeaf20dcd72aca4b9526e66a2cbd9a28de21b6692e17b2ac03dd1659ca2ebd98c6ff7ebba00867d3f41bccccf33233bbfbde5114f585a41bf54a514312bf1690efbe3dd350bd9019e0289619bc9b16768aeea3acaf15c07677c3f4e971321e5755a44433b4cd12e8325ae418d8d57ad58b735a6428a7b42b08bb43bb3bb06cddd22ddb1ee98651611924d19ca42f92e189f38c5d69dad1472fa6344e006584f530ddd671ed4dd7b29c3e03e64c6bcb6a4289699f0b7f4f28469cd074bc5e55260a0679005b441269e384de84d76dfa1e41db5e2caadf080684312d522ead553498a611898bbc24174cef2228c2a5e7fab7115057cedc99fa0aa649b14d83146de142d9208e02becb40b9f5960b65e6de2ebdc5c49f2ddd6035bd731693de74395f2fdc95f270e7788ec25198408955c6ca75f9e78a9fd251a9b601c6495a7af265b6e144640f739c7db0c29a429208570c0e65c1b07f8906a3be1d46e1104723c30aa33e84e1281c5ac808fbd836c1dc84809a0ca5b30a8f529a5ef60d3bd2753bc0868d0313467630d2ad416019a66d45ba31b4225b3da0f7752f7f73c2e186b08c327218b2fae0cd7c27f0bdb53b9df84eb3ef081509bfa99cb7bb6eb5c3c5809a4e3f1bc999a32c2754982ad739737dc79b4cfdd97dc386385b738811dead5ee5e98a50c2e08446b9d815877c41377231aa3b593837277079527e1e8b98a8f85dfb3cb5230ae5fecb5ecef6dfd6f1c5c16a8da2da4d155557be37737fa88de4fe639a7b94141ff0bc1dc26a26a6f52426cc5a5c9dffbffe741a1aaab8ab077beaafb5e33d4a6c9993190f22c821c527d52f1c5d09acd25f788a44f9f1619008f136d4fa8c8bb0b845989dd4710ed59d22d5e42bc2cb81691803fb482880393faf30cd5af2ec71905ab085941f67513d12d520f72d4b45c34e0993e5e21eb88725ee3bfbce3f28edc304e1050000",
    ],
    [
      "ETag",
      "cyCu9naVfp0/uesyH7nhYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1592525998233"
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
      "6f8230147de75798ee5533bf70bac407dd9cd3a853c4972dc654b8200e286bcb8c31fef7b5059517179299ec85f6de736e4fee6d0f07ad50409f5e68a3c7025a7bee570c747fe7029fc98d012cf639134b444206a828d9c0b12bd9c3d9fdd8c27ad918f6d74edf9b378d77b7bc6bb71316b3361060c13b8848c48e07becd44fca1e2429a5758880390275ac48f8370a5c2e205e6fb48c173d3184cfa592420b642268bd1a8d31df5500a1d8bd7456cccf14a1df93709b52eb5540c6dc9da00072884165cba8e28d982c5076abc0c07910f2546626a014b45646102bb94c411a6849444aaf4d02a55f45655afeaad56b35aab9de83eb130f748282b167374d6e78463df203b3962d448ee80266132f1d3289093b984ec8404f42d8b3d1b9d73c7e22fc4c1c46cd433dc74b7d43295b955c5a41ccf87d53fa98b2bd960f1c2f369a7cfe446e2382071c8734abf8cde3a376c5cb8216fd3cf1db3772b59c6851772ea9a83716f6e76c6d3abe2e2bbbc98a0bbe7c0a694088f3150ceaa94eb4dfda1514627a73e11e9442e8dca690c2a6d61f1c77af5b8c839d867a01db51f03674fc41d050000",
    ],
    [
      "ETag",
      "JQ/Mca50RJGbfGiS8RZg0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-80-1592525998233",
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
      "ef",
      "4f",
      "db",
      "3010fddebfc2ca84601afd150aa3952ad64126a295b6a429084da871d36b302471b09d4a08f57f9fedb449ba15344d93f62db977f7deb3efceaf15848c2712cf8d0e326624784e81bd7c78a433e350212070a090138227f81317a3c9c8a1adaf8f37b7c9a573dded66594457731c252154394d990fbc3319d70246d304334aab92b07adaa8368fdbe6b179dc6e9f9a4747592d8770d127f19362781022e19d7a7de3a316501a848013c26b3e8df2787d69d613461fc117bcbe2d5b974abcfebef059487d2c088dbb93716622e5c0a61061122a1b45f57cf6659bbe4670540b64f692f8807d9fa6b150d6321a9fc60b12a44c934ba657199461ed39ff2d058cb1d5b7ce5d743e9c0cdc030f478acefb883047d329039e86027d738657c84ba4fa03e6c03d747b6939968c30ba20214cc9dc435d74867a830b84fac35bcb39f0e65880a4190c5dd4b7bf5b12eddb57b68b9adaa6b630870596f4175848565132a7b02c68ebae0ae0222f93e0fadeed1d2d37d659ab5c2561843222f459ed816b39bd73d7beb10a1bf2e2fb1060ff65fcacae7e81430e453566380201ec8ace41518c8663dbb587835ebf60d07739da647299f623375b9ca9cce6be24b075600d8b2caa6c9eb48c12b63adcc97283c37407cd721d369a5b1c951d6c7fe3eea2e75affc0dc9ed9301bd58629f762ef0d9febaffb4a49c690dbb4f6675c4f2ce74ed56a4c210e2c8041ec17c2ef0e4b4199c17ff058c8f4cdeaaa0ab9bdb93e1732cc05f179a1ee33d0b92e89b29668c2",
      "9366abd56cb73684b29089df33ccd6e74d06c4f3ddf896785a1206c62873f4fe96d75edae1997312cb56c857339fe20838c781d698c4f21638e05908480f37cadb8a3c0f9118a961409e7b37b2a66a1ebc4364677c482d7e07ed97dbbb8f74d77f8d1a5b7dd586cbbb537a0dde76fdff7c6fe6f3be68a2c8f66338d0fbb1aaac2a3f01702b5261db060000",
    ],
    [
      "ETag",
      "6iaUa+stPUPRo4BjVWpHRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ff1dcf4b7282300000d0bb642d0eff4f77a0080428a50ca4ae32310486da6220f2b3d3bbd7e9bbc1fb0184522604bedfaeac072f6023aab3a7fbf8667bb25be7d744c9358ec3c20c4497dbb36e434a89fd8955d22b45d6c6a6d72bcdd7233224e37db44465cecc77bff585fafa2af7516379f0d45e785497b0558faa3418acce67471ca064952e5cd0a60541aa2b555dfac9c7b0a2246952c4b629cb8a70e14d689cd6f9000b8aaa3c15b504d971c29169ada1293a344f1c5d5834624f3b37a89307d7c9de4a8b3ce2d733d801b6f26e640277cf996638ce0efc37f17de3ec79f51819d9087eff00bace5eae05010000",
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
      "Fri, 19 Jun 2020 00:22:24 GMT",
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
      jobId: "grouparoo-job-81-1592525998233",
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
      "0000000002ff8d545b6f9b30147ecfaf40ecb5b990400295a2354ae98a94900d48ab6d9a903186ba034c6dd3aaaaf2df67432eb05455dfe09cf37de73b37bff51445fd8b8b58bd54d408a74f15a2af5f1e49a45e480fe220959ea74d352e29becbad4dfe60fa2fbfd25b9abecce74d14aed10ce46586fa8c54142276b9f5072925550928217d41d837b5be665863636c5896399e4c1a2c4359b2c2c55fc9f0c079c92e87c3838e414a489a2150623680243fda87cfe36149c923829c0dbb698722131b7e9cf86b4620e09814f3addf88a818a221ca01cea48c133a8eaebaf4030cf2412aa29f3144004252155c4a6b682029129c56b426174c6fc228ccb5e6e36fcba0faf6ca5e060a2459951761017274a1c4808390bf9648b9f1366bc5716f36de7a11381b37f497b7f67a31586e56dbb5eb2bf7b7b6672b1c4419aab1ca5cb9aaff5cf1532baab3c588715cd49a02e96d2911de7d1f9d774678a49024421543fbb070369a02cd1c595112cd60624e8c2819a12832a3990126d1085a3ad2e308813643adacc18382149101ccc41859613c857aa8c3d8084d38852132ad589bc4508ba6a6ba47ef8eb5bc50ccd13566256178df64f5de73023b0cbcadbb5c0476bbee045419bf6e9477abee94c34583da4a3f6ac9992271154488aac7e9b881ed2d968173d79221766b8552005ffd27b95d09c8183aa10115b3e288ae492c07a3ba8bb57d7d02d79bf2fd10c444c4efa3ce53392250cebfaee56cfedd3c8158ac4e2b9ad93456d50f3cc7fda6b69cbbf769ee4056bdc3f3bc37aba5e8d683e830eb70f5fefffad36be550c5adeee5a93fb6b6f753626b9ff47828411415f094f513ab2b818dfb134f91083f3c0c1221de86637ec685595c1164a7ec90a2e6a670d3f98670aae9baa1cd0e840248f979c454d70f11678f83cc857254f0432f9a47a269e4ae23a96ac9a961325cdc81bb1fe2aeb7ebfd032ee9ea1ce1050000",
    ],
    [
      "ETag",
      "qOu2priVm9Omh8SwZgHrgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1592525998233"
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
      "ffc5545d4fc230147ddfaf58ea2b8b808060e2032a2209201ff3454348ddeee6706b673f5042f8efb6dd80bd689648e2cbda7bcfb93db9b73ddb5ab68dde23e2a32b1bbd46e18704b6390b414cf566065cc682ab25a58403aa6836081c6ab6d7efcbe98a8cfdf32fbeae13324de5f373787d9db1b8f7060956bcad8a541c4410fb5cc52f26b6f3bcc1084ec09c48639990a5092b47586c5203cfddd960dc2f2209f50d327e1a0ebb37c31ecaa15de567111f0bbc3447fe4dc2ac0b2b17432bfa3a830018100f8e5da78caec01303335e8e9334068753c93ce0b9882ecce09051996246a9a3524ebbe6d49a9d7ab3deec74daf58b8b3d3da61e161125bae2698e0efa820a1ccfe8a71e316a6577c0b2309bf87e1428285c4271420a5aebe2c84787dcaef20b7130765b8d0237df2dac4265695535a9208a61f94feaea4adeb07ae1e5b4f3677222719c50494449e9fbe163f7848d2b37946dfaaeebf64e25cb85f242495d7730eacdddee68f2a3b8fa2e8e26b8d908e0134695c7381867d5aa8d76f3b255457ba7de52ed44a18d2a980493f6b0fa633d4442e5021c73b076d637353701be1d050000",
    ],
    [
      "ETag",
      "cGGuQjnNd/xsv2nnQpuZZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-82-1592525998233",
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
      "00000002ffcd54df6fda30107ee7afb0b297562a3f12a06a9950c720dbb241a04968d55515b88949bd26716a3b4ca8eaff3edb812468ac9ba63dec2db9efeebbefce77f75c03407bc449a0f580768fc3a70cd1cd9b6fe45e3b9108e230948833c3f168184e06b16ea6ebcd95833b9fdbdffbfddc0bab6806e33442754632ea23d69bbb8d90922c859490ba20ac9f1975bd7b6e748deef9f999d16ee7b10c45ab314e1e25c303e729eb359b3b1d8d9090304230c5ace193b8b037d74633a5e41bf2396beea76d8a4cacf97ae28b88f8906392f4e76e2e2263882e500c71246594d1c1fdbb7dfa0686712314de6bec23e8fb244bb89496d3f82459e130a38a5c303d0ba3302bcdc56fc5a0b9e6d81c7a60389ddbded112c6926e790c20038b05452c8b38f8e04c2760998aec0f9021b604d79f4cc714164a5638420b1c2c411f5c80813d02603cbd369da325e342b4e0b1a71e185b5f4c018fad89e5015de9541a02b482827f04b9a0e5157512cb8d967a568e182fc204b86dbc75e0cdb5add74b9125a59850cc55b196ed99ce60e85957662943747e8c42e86fdc27d9fb158c182aa3218531e2884e488024c56cea5a9e35b507e392413573b6f364c2edb6105bd65465f33629da2b58c13cb74a99a71dad82bd9c1c64b98251768066bd356bfa1e47ed00dbdfa8f3ac89e97a83c9ec1f28345a46abde92cbe1e9464f6ff7f44ea3d56a7dfd85f0edd75dad925213fbb515ac5dce4de746c62a4c220e5a218a12bf14f1eaf4949439fc07e743b8ef965946887d2ef28b25e09871ecb332bb4f91f2f5709cbf91223cd53bddcee96e376420e53f7b74dbad9d074a82c3f85ef2ac9218514aa8a336ba7a08841c962bc78978161c5caacb50cc76b5b6a77d28468cc15069b0098821f71f70120286c344a4a608ac0805ab2cf1657c7e189409d2308b51c2819c28d603c54035809ba529a11c",
      "05258b70c86f8aeb3996fdf1f8edf6f7fd8d67bae2507170abf7cef43b6d6f2854b5d54dacdc96df94fc6ad1ff69d9bbddb82b07882b85a3a96daa99a8bdd47e002827e71069070000",
    ],
    [
      "ETag",
      "RPimDCgMAm1EpvyVRi4J3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "ff1dcfdb6e82300000d07fe9b333d88aae7ba3c834ab822293b11782a540eb85a6105a5cf6ef333b7f707e40c118efbabc6f2ffc0edec058403c6553dabe12c7e3511037101d2264fc33c2b76da425918367e9ded01486c6b7f1d5ffa4db1abf3823346e59cc935dc81a3fd7276753c9f78c74991c6e8811a966087d089b66b8f6bb683dd66a09ab5972eeedda9a235a94a5bd9471ac35b12b9590ea10186fefeddc5a8ea9cc1f7d17ac6cf3dd0ad1a7e101c514f677b4fc5a28a28cb8461be20654b2e350586be70f71f2c00470ab84e65d2e9e33e4623c01ffcdbc1f157f5e092f34d7e0f70f6fd96e0a05010000",
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
      "Fri, 19 Jun 2020 00:22:25 GMT",
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
      jobId: "grouparoo-job-83-1592525998233",
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
      "0002ff8d54db6e9b40107df75720fad8c4776c886435964d1a4b364e314e1a5515da5d06b2096609bba44a23ff7b77c117a8a3286f3033e7cc99cbce5b43d3f4279a04fa85a6631a3de790bd7e7964583f531e1028529ec9d79b000fd874e92cfe0eef7a9ddbfb9fb68846a3328a16688e36690ce79ce519017eb15e35a38ce529ca183b9784e766efbc63585da36b5896d9edf54a2c87389cd3e449313c0891f28b566bafa3193116c58052ca9b846d0ef6d64bb79566ec1188e0ad7ada96ccc45b1f27fe1633820465c968bd2a45e41c321f3688c64ac6111de0cb3a7d93a24d3392d12f94002284e58950d24a1ac29290467956904ba6376994e642f3e1b762d057f6dc9e781a6171be49fc046de04c0b9040be784d41bb72970b6de65c2dddc5d89b2d1d7f35b9b617e3e664395f2f9c9576776dbbb626108ea1c06a23edb2f873e44fa1a8c816001734293479ca5b5122bdbb3ecede19e181429148551c7661feb03d401db36de1100f4968f60c1cb60163130f0dd4c36d62f5a11f6040558642598947094b8839ec0c0696e91b3d13fc7e376cfb28b0b06f21ab1d74f1c06887437d87de1e6af993510153ca53c6e9aec9fa9d3bf36cdf73d7ce64ecd9d5ba4394c7625a2aaf575d2b47c80655957ed492134569469914558c73e678b63b9e78b3db8a0cb95b738810795d3dabed0a51cce18846999c95806cc1023518dd192fece9115c6ccacd3e88cb885f079dc77264a09a7f51cbc9fceb793cb958b55694b329adfaca7367ce77bde2dcbe4f738be2fc1d9e979d594f65b71e6487798dabf1ffd7ef4625872edfea4e9efe636dbbf70a5bf894c785103248c831eb275657014bf7274e910cdf1f068590b7e1909f0b6996af88f063769241f9a668d9f99270d0e91b43b3bf2794c04c9c46588343c4c97150b9600389",
      "d8f7a23c126523b7354979454e0153e1f21d38bb216e1bdbc63fa128a648e1050000",
    ],
    [
      "ETag",
      "C+Pdb6oDONMz7W31VYXEtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1592525998233"
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
      "ffc5544d4fc24010bdf75790f50a09f28d8987a288988258eac910b2b453acb49db2bb95a0e1bfbbbb2dd28ba689245eba3bf3deeccbcceeeba751a9904d107be4aa4256c17a9b02db5fac413ca98d0d3c0d05974b82310752556c1074add80f565cc7cd6c3b18c1defae826dcee3ae6eefa3a6371f715222a799f3292b11f40e87119bfe8b892e73516d308d4892e8669142f75583dc1629f6878eed8e3e9a88844e86964fa6c59e6c01a921c3a547f16f1a8a04b7de4df24f4ba307231f2862b1b7c6010bb70ea3a61f806ae18ebf1721a2521d438a6cc059e8ba8c20c5e334c13ca106b3255eb356b97ed7ea3dd68f7fbbd46b379a487e8521160ac2a9ee7e45b5fa0a0a18d3b3562d2c9ee80656136f1e328885fb884e28424f4ae8a038f7ce70ed55f88e3a9d36915b8f96e61142a4babca49f94108cb7f529757f24ae50b2fa79d3f933389d308d3589494beb31ecd33362edd50b6e95bd3199e4b960be98592bace78329c3be664f6a3b8fc2e4e2618ec05f01943e9310eda5997f556afddedd4c9d1a937a89c289451054b41a75d2aff58f78190399f861c8c83f105e8c3f80b1d050000",
    ],
    [
      "ETag",
      "JLn0okPqBGeyLz7psR7TAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-84-1592525998233",
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
      "0002ffc554614fdb3010fdde5f6165426c82b66b698156aa584783962d34d0a66c68428d9b5c83218983eda021c47f9fedb4492a15344d93f62dbe77f7deb3ef2ecf35848c7b9204461f190b123e64c09ededdd185b1af10103854c88fabbd696b39ea1e87bfc8e82b1beea51f0f8f2e07833c8be86a8ee334823aa719f381f767d346c868966246695d12d68f3bf556b7d7eeb6bbbdde71fbe020afe5102d6d92dc2b865b2152de6f36d73e1a21a561043825bce1d3b888371fdbcd94d13bf0056f6eca36a5126fbe2d7c12511f0b4293c16c9a9bc838b039c49844ca46591d2c3e6dd237088e1ba1cc7e243e60dfa7592294b59cc6a7c9928419d3e492e9590665587b2e8e958031356df3d445a7ce6cecbef770ace8bc0f0873349f33e05924d0d9c439475e2ad56f3107eea1ef5fcc8929238c2e490473127868804ed0703c42c876be9b930ad1d871916d7d33256e5be7968b5adaa83611c0124b811116925754ec292c0f5abaaf02b828ca24b87a796b4bd38d55d64ba19232421911fab6d6d83527c353d7ba324b1bf2e96d08b1ff347d508fbfc41187b21a331c8300764e03501417ced4722d673cb44b06fd9a17eb4c2ed37e1666cb3b55d9dca714362eac61914795cdc38e51c15ef6b7b25ce128db42f3b80a1bad0d8eda16b6bf7177663bc37fe36fa7d5e876765e31b9fabaa955040cb94c2b73c6e5cc9c5cab5a8d2964024b6090f8a5e49b935252e6f01ffc2b64fa7a7355855cde429f0b19e682f8bc54f719e85c97c4793f34e161abd36b1f1cad096521135b32badd750624c1767c433cab080363944df4fa56b75edae1b97392c826c89f6631c231708e43ad314be42b70c08b08909e6c543414791e22095293803cf7fac29caf86c1db479f7180029aa92adde03ecadbbb3eede6c75d63a3a1da6975632aff",
      "80d7edfe07c3eb89bc29db26b4fac8199bba13b597da6f0df324fbcc060000",
    ],
    [
      "ETag",
      "XV+S1fD58gxiDJrA+p067Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "1dcf4b7282300000d0bb642d0e1004d21d509428d1aa958f1b2692a0881a1ac0029ddebd4edf0dde0fa079ce9b266b45c51fe00d0c5447d37cba12b6ab3a854c374384b170759f21893ee7018bbd18279d8174eb880ab1c43e0f9431d5bad1380d46c1148f91be33c2f9fe08f3ce2a3c2d09b4c42ea1b1d80873c50ed7afc1bc99a7d073ec67d2aa5ae155fba5bebd4209df497ae716bbe06054d691b35b07898f6f07823f9ab8a05b536774771052fbd61c7a164ea740f2b830d9437257f1ac823163d9a23e87510b89998309e07d5d4ade64e56b0667084dc07f336b879abfae2ea7924bf0fb070e84b06d05010000",
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
      "Fri, 19 Jun 2020 00:22:29 GMT",
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
      jobId: "grouparoo-job-85-1592525998233",
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
      "000002ff8d54db6ea330107dcf5720f6b5b9dfa052b4cda6741335215b425aad562b64cc40dd104cb1695555f9f7b54d2eb0a9aabed93373ce9c99b1e7bda669fa8624817ea9e93e899e73c8debe3d515fbf901ee028921e874eef86379becc7d808360e9af6e6b7b0781d8d8a28a2d00c6dd318ea8ce6190676b95e35a28ce629ca28ad0bc2bad1afb7fb66a7dfe99ba6d1e9760b2c83389c936423191e394fd965b379d0d188288d624029610d4cb7477bf3a5d34c33fa0498b366356d536462cdcf137f8f29469cd064b45e1522720699075b446229e3840efcab2a7d83a06d2312d12f0403c298e60997d20a1a4c93904479a6c805d3bb300ab3d27cbc960cfaca9a5b1357c334ceb78997a02d5c6801e2c8e36f296837ce72a1cdec9ba5b318bbb3a5edad26536b316e4c96f3f5c25e690f53cbb1348efc1814561b6957ea668b8b52a4b205c038499426577a4b4a8477dfc7d907233c524812a18ac13ecc1bb606a86db44c3ff4873834ba7d3f6c81ef1bfeb08fba7e0b9b3de8053ea032835256e05142136807686042e80ddac3d0eb996078c86f1b5e18e23660b3e587664bdfa377c75a5e33c2e19ab09432b26fb2fee0cc5ccb739db53d19bb56b9ee10e531bf2e9457abae94c34583ca4a3f6bc999a23423548852e39cd9aee58c27eeecbe2443bcad394408bfad9ee5eb0a51cce08446999815876c41033918dd1e2faceb1358bd945f87202622fe1c759eca118172feaa96b3f957f3b8e261555a51cca6b0ea2bd799d93ff59273f731cd3d8af30f785ef6663d15dd7a141d6615aedaffa7bfb5520e5dfcd5bd3cfd6e6d39bf2556f9a4c781103248f029eb179eae0416ee2fac22117e580c122176c3313fe3c22c7e1166a7ec3883e24f91a2f305e1a0dd337b86792014c08c9f4788c321e26c39c85cb085841f7a512c89a291bb8aa4bc2447c1d4aa5edbf6",
      "7e88bbdaaef60f1b1cb916e1050000",
    ],
    [
      "ETag",
      "RoHQ7FkrBA8dkRaH4LKeMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1592525998233"
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
      "d1",
      "4e",
      "c2",
      "30147ddf5790fa0a090e8660e20328e20c208e11130d21b5bb1bd36d9d6da721847fb7ed06ec45b344125fd6de7bceedc9bdedd9d6a8d5d07b9878e8b2865ec3e02303b6390b403caa8d033c8b04974b4a130ea8aed82070a0d8178e3f786eb399dd7a320531897ddfb646c1d555cee2640d3196bcad8c64ec8710795cc62f3aae15798d2538067522a15116272b1dd68fb0d8a41a9ebb8e3d1d9591987a1a992ec6e3fe603c4405b4abff2ce2618157fac8bf49e875691462e88dbe3ae0038384c0b1eb94d13720c2d6e3e5384e2368709a3102bc105185391c309aa59851da90a946d76a9c5b3dd332ad5eaf6bb65a7b7a440916214d54c5628e0efa820a1c39f44b8d1875f23b6079984f7c3f0ae4972ea13c21097daae2d04387dcaefe0bd19eba9d76895bec9646a9b2b2aa9c941f46b0fa277579256b2c5f7835ede2999c481cc7344b4445e9dbf143ff848d4b37546dfaa6ef0e4f25cb85f442455dd79e0ce76e7f32fb515c7e9747130c3602f88c51e9310eda59e7cd76d7bae834d1dea9d754395128a30a96814e132cff5877a190391f471c8c9df10de27d895e1d050000",
    ],
    [
      "ETag",
      "7RfBZ4rPI3W2tc2cIJ45Gg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-86-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5945d6f9b301486eff32b2c76b3a9cb7720a452d44529db90d2a44b48ab759a120307ea1630b54da7a8ea7f9f0d2401b5ab7ab73b381fef79ceb17d9e1a0869f724f1b553a4b9247cc880ed3edc5157fbac3c2070a83c3b7ce39fdcc29d3513e1c9cd6efa002757221c8f8b289267731ca7113439cd9807fc74bd6a858c6629669436a560d3349a5d7dd4d37bfa6864f6fafd22974314cc4872af146e8548f969bbbde76885948611e094f09647e383bdfdd86ba78cde812778bb5eb62d2bf1f6db85cf22ea614168325eaf0a888c03db408c49a4308ed9befba52edf22386e8532fa9178803d8f66895068858c4793808419cbc5a5d293344a73ce7cf8ad18b49535b3a60e9a2ed673e7e316c74a6efb09618e361b063c8b04faba5c5ca06d2aabdf620e7c8baebf5b4b4b5a180d48041be26fd1189da1c9fc1ca1edfe6f665fd80eeae65879491fb820490ee66037820a8ef496c3b45f39c7838412c1423294619b61c7c05db333720377e805665f77830eb8aee90e75dc773bde680003df055c5510aa76918f13392dc3e89bd019603c023c18020e06e6a08b47d834fcee100cdceb049e311c68a5c2f3a19f3f8c0838273ca59c94d3d6ae97b6636d9ce57a3e9d3856b5f700cb519e17f4f5ce6b2d0939a42aed5b63794194324225547eaef6dcb19693a9635f5530e4259b4188bdddea415db300471c8ed998e11804b00beaabc3d12e172bdbb117f3c9eca890df9bcb7d249761bf0eb0c79eaa6ace2ead1f75710a8555611a87d9d6baa9ab5ce1287b45e6b1346bdd9a46e315b5ff4aa7ff03affcfadda8886b72619458da8fb5b5fca972739ff22c21000689772cf78ea7a3120bf73bf6a10cdf6f27952117d4a13e17d22c5fb1c78fd53d06c59b2671d9ab1234ba7aa727db2e056522132f23fafa701ff16243a95a104322f6b328365531c8e71a5256c1c9d354b87c83737bfe2d876f3c37fe02d42441af66060000",
    ],
    [
      "ETag",
      "yaZd+hejELtg+ZyCqe+Vtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1592525998233"
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
      "d16e8230147de72b48f73ab2a961c1253ecc856c26c438860f6631a6c285e180cbda8b8b31fcfbda02ea4bdb73cebdbd3da767cbb6d94f5e25ecd966fb3cfb6d409cee32a00f7d0841360549b5d5584960f7ba1a8867ba3a0a3d88ca8da4f9ca8b9689ef3e84f298cd665d958cbfa1e4aaeeac90c2690e452215fe32d8ee79a355bc047de36e27cc407343afd1a936da6219f96f7e782b95981869b90e829779e0b35e6acdbe556b6b9e72c07d082908a862b83ea81678809816c6b9e4655d8023b11131c87e886eece44c60537381e828caf19e9c913b1dbb63773af5c693c9505e60cc29c74a77ac3fd9653e21f122c43fed9e8dba784407bb308628587a93cf6d424a3a76cd17aaed4f5b6b40dbebb0f98940ae042a2f128c83473644f18ada2ae924483460e898abdf7acfa9e7acd6fa0785cc4f5618020000",
    ],
    [
      "ETag",
      "TR8eTmYstBP8TNdE5/Rsvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "1dcf4b7282300000d0bb642d4e1b1a84ee8822206a4140c40d13d3f0b1069804caa7d3bbd7e9bbc1fb0184522665d6355fac06ef6022d058d2a5d7e8f8c564dc1eab4fecb52d1fcefd8d88c2c2f69a6aaac31c7830361f232c1019902f859ba879191fa1dc6b7a5e29d8fb56a3838a2e9247af35eedbb60f95a017ab5ac9b3b00a6fb3c0f1d0e187eb57dab44dcc9d6df3b42bf731a3cdeacd51dd084f1cee36270bce9dbc32794f209ab87b55ccb2919714953a2a2577fcbb1ea44eb136f36df098cff4684f6e6231c207b0006c6c2bc164563d672a328c05f86f66ddd4b2e71533229800bf7fdcf4e3cb05010000",
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
      "Fri, 19 Jun 2020 00:22:30 GMT",
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
      jobId: "grouparoo-job-87-1592525998233",
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
      "5b",
      "6f",
      "9b",
      "30147ecfaf40ecb5b991d0904ad11aa574cd94900d48bb6e9a90ed1c885b8229369dba2aff7d36e4024b55f5cd3ee77cdff9cec57e6d689afe4893957ea1e998464f39642f9f1e18d6cf9407048a94e7fe69f6d3b38daf6b34a093476c26eb1f7fefc7a35119450b34479b348626677946805f2cbd5694b13c4519634d49d8b406cdae39344cc31c0e2da3d72bb11ce270469347c5b01622e517edf65e472b622c8a01a594b708db1ceced67a39d66ec0188e0ed7adab6ccc4dbef27fe1c33820465c968e99522720e59001b446325e3885ee1cb3a7d8ba24d2b92d1cf94002284e58950d24a1ac29290467956904ba6576994e642f3e15a31e89e3db327be46589c6f9220411b38d35648a040bca4a05dbb8bb93675ae17ee7cec4f174ee04d6eecf9b83559cc9673c7d3ee6e6cd7d604c23114586da45d1637475e0a4545b6157041934293afbc1525d2bbebe3f48d111e28148954c56117160c3ae7a86b758638c403125a3d13871dc0d8c20313f570870cfbd05f6140558642598947094bb0454282421c740d9304fd736406c8c0c3401efaa18900c12ad477e8eda1963f1915704579ca38dd3559bf73a7be1df8eed2998c7dbb5a7788f2585c95caeb55d7ca11b24155a5efb5e444519a51264515e39c3abeed8e27fef4b62243eed60c22445ebc27b55d218a391cd12893b31290cdd94a0d4677c673fbea082e36e5db3e88cb885f079dc77264a09a7f51cbc9fceb797cb958b55694b329adbae7bb53e78b5e716edfa6b94571fe06cff3",
      "ceaca7b25b6bd9615ee36afc7ffadda8e4d0e55bddc9d3bf2f6df75e610b9ff2b8104206093966fdc0ea2a60e9fec05724c3f71f8342c8bfe1909f0b6996af88f063769241f9a668d9f992f0bc6b762ceb402881993889e8760c731f71f239a85cb08144ec7b517e126523b7354979454e0153e1f21d38bb216e1bdbc63f02c3daa5e1050000",
    ],
    [
      "ETag",
      "YqLZSE2Jha7iCkb5nhXzYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d4fc230147ddfaf58eaeb481c0882090f5351317c337dd01052b63b1876eb6c3b0921fc77db6ec05e344b24f165edbde7dc9edcdb9eed0cd3441f61eca31b132dc2e5670a6c7bb10431569b09f094082e9784c61c90a5d820f052b1df867d579055405eedcd3476eeec357efe1cb7db198b7b2b88b0e4ed6424e32004e27319bfebd8ccf31a8b7104ea448f92348ae73ab44eb0d8261a9eba93eee0b18844d4d7c8e0a5d7736e7b1d94437beb67111f0b3cd747fe4d42af332317436bba9840000c620f4e5d278caec1135d3d5e8ea3844085d39479c073115598c14b46d304334a2b3255695e57ec7aab5aafd65bad66b5563bd009f5b00869ac2a5ea6e8a82fa8c06442376ac4a891dd01cbc26ce28751a0a07009c50949e84b15873e3ae6f6d62fc4eec06d5c15b8f96e66142a4babca49052181f93fa9cb2b5961f9c2cb69e7cfe44ce238a2692c4a4a3ff486ce191b976e28dbf4bde376ce25cb85f442495db7dbef4c5da73ffa515c7e672713dc6e05f011a3d2631cb4b3eccbab66fdba71890e4ebda3ca89421955b01474dac3f28ff5140a990b30e160ec8d6ffe8ee50b1d050000",
    ],
    [
      "ETag",
      "ZOMTtlhflV1wSnAC1jaJqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-88-1592525998233",
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
      "da",
      "30",
      "10",
      "fe",
      "ce",
      "af",
      "88",
      "b22f9b545e0204924aa84334db5251684368d74d13388e93ba4de2d476a858c57f9f9d04082aabaa69df92bb7b5e7c67df4b4d51d4479cf8eaa9a27a387cca105d7f78209e7a2233888350669e1eef7e5cac82f96f8b3d07abebef1cf135781e0c8a2a9ca31988d308d519c92844ec743e6b84946429a084d40561dd30ea9a6eb6f5b66e9a46bbd329b00c45c118278f92e19ef3949d369b5b1f8d9090304220c5ac0149bc8b3757ed664ac903829c350f659b428935df163e8b08041c9364309f15263286e802c50047d2c61eed7b9f0fe91b18c48d5054af3044004292255c5a2b682049021c663427174c2f2228c2b9e7dd6f25a0ceacb1357295d1743e713f2e412ce9969f14c094c5822296455cf9e24c2f95652ad4ef01436ca9dc7eb31c4b442809708416d85f2a03e54c194ece957d5d111bdb97b6ab68b9b95cd8478ce324b7e7022f421553225bb6d43e32cd1d8524015c2894658b7eab0734a3657a81d78781d1d1bda0853ccff0fa3ae8782d687651d7f710a83270a95de0414212a49b2ddf04a6d6075dbde3b7a067f4a021307d6042d0d67a3e085a22ab960c9bdd799e29e6e81cb394305cf65cbd756cd75ab8ce7c321aba56f5ec01100d3d2fdc1f9efce0485c34a9eaf6adb6bc7294524c84a97cbaf6c4b59ce1c8b56f2a36c4551ba310c0",
      "f5ec495eb600440cedd180821871442f892f87a35e4d67b66b4f27c3f19e21bf3d57db4a26ca7eeecceecf546573d7e9e1a88b29145169b3d7552bb9cdc951961b10654768566558d50e386a47d8fec5ddcc75ecc9d7ff606f988ac1fdc562f9f5ab56e157c5ea28ada9d773cbb993d83c27330e0a104509dc2bbee3f94860917ec76614e5db3d25116255edf4191761f19221dbab438a8a778de3621a39614fd33553ef6e090590f257156dad6d6c2b5eed2aa9856294f06d2f8a9d553472736029abd8c961b25cbcc34939c04d6d53fb033ab73c1870060000",
    ],
    [
      "ETag",
      "qkYZJvfUzEswfvQXtetyaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1592525998233"
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
      "8230147de72b48f73a92896381253ecc8538136636860f6631a6c285e180cbda32430cff6e5b407d697bceb9b7b7e7f4649826f9cdab843c9b649f677f0db0f62e03f1a90e21f0a6105c6e35561cc8bdaa06413355bd88ec237bcc92cdbb03f83471237713ce8fb3595fc5e31f28a9ac3b4924719a43917089bf3536075e6b152d41ddb8db313d50df3068a2adb5b65c45fec20f6fa512132dadd641f0320f7c32489ddeb772edf4530eb80f210506550cd707d50c0f108ba576ce69591760716c580c7c18a21a7b3963d8d494215a92b25cd79a389eedd88ee7b9f6743a961718539163a53ad65fe4325fa0a0458847e59e4cfa78580ffb30c628487a93cf6d4252fa57cd36b950dd70da1a23da5e87cd5b01fc83a1f4c2413b78206314afa8ac0a9584600d683aa6f2b7de72317046679c017c588e9f18020000",
    ],
    [
      "ETag",
      "GT2wr4gdYM5eo618T8YRBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d0",
      "7fc9d93ac89ede64900e212cb209bd3084441615904db1d37fafd3f707ef07e445c1c6319bba0b6bc12758731e6e8badd5a91ab7a7da75d77d9346b89e9c363a2c7cd8a2893c4912d76a1c84de2a25ab53f1c80c54e63b6711ba2c9857fd96af08eb48d4d2fb88ee95427023dbd0140c22a58a807788051807c62bec08878e1735b363c57f60e9c809e1d94d3edc2a94baa6f76862ba70b126dd7c5894a20661818a856ecc3c6f15659b885a190d33f16977f32275904b79df2f348527befab20f6003d8b3af073666f57b2648106ec07f339bd69ebdaf1acb073680df3fdef9b99405010000",
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
      "Fri, 19 Jun 2020 00:22:32 GMT",
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
      jobId: "grouparoo-job-89-1592525998233",
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
      "9b30147dcfaf40ecb509e483052a456b9ad29529212b21adb66942c618ea1630b14db7aaca7f9f0df980a5aafa06f7de73eeb9e7da7eed288afa84f3483d57d410279b12d1974f8f2454cf64067190c84c46217cda5cc6fae54fcd19acef37df167fc3dbc9a4aec2159a81ac485197919242c4ced7ab5e424959004a485710764dabdb37ac8131302ccb1c0c873596a1349ee3fc49323c705eb0734ddbebe8258424290205663d48b2435c7b1e6805258f0872a6b5db6aa213d3de6ffc252510704cf2c97a558b2819a201ca004ea58c233a0a2fdaf43d0cb25e22aa9f3144004252e65c4aab6920c9639c94b422174caf2228c295e6c36f23a0aeecb93df31548d232cb831c64e84c890007017f299072ed2d178ae35e2fbdc5d477966eb09addd88b696fb69caf17ee4ab9bfb13d5be1204c51855526ca45f5e78a9f4a51d52d428ce3bcd2e4cb6c4389c8ee7c74de58e181429208550cedca82b1fe19f44ddd0ae3700c63736884b18ec2d00cc70618863ab4466814850834192a65351ee4c2a8617f149903230068a8072318ea8185a251a0c378a49b23348ca2b1ba436f0fb3fca198a32bcc0ac2f0ce64f5de737c3bf0bdb53b9bfa7673ee189429bfaa95b7a76e8dc385414da5ef5972a2a8a0980851d53a1dd7b7bde9cc77ee1a32c4d99aa304c097d5469eae18a40c1dd1808a5d71441724928b51dde9c2be3a82ab93f27d5fc444c5af83cee338a250eebf9ae564ffed3ebe38582d2beaddd45175e57b8efb556d24b76fd3dc81b47c83e77917560be1d6837098b5b8",
      "3aff7ffdee347aa8e2aeeee4a9b76bdbfb21b1554e663c14238a7278ecfa81a32b8175fa034f9128df3f0c1221de86437fc64558dc22c88edd2145f59dc2b5f335e1e7be31181bc69e5000293fad30ad43c5c9e3207ba10ce57cef45fd48d4466e5b92ca869c0a26cbc53d70774bdc76b69d7f79f001d1e1050000",
    ],
    [
      "ETag",
      "mrcckqBf0BZ/I2UWqJMxbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554514fc230107edfaf20f51522a04330f1612a2ac94485f9600c2165bb8d69b79b6d8741c37fb7ed86ec45b344125fd6de7ddff5cb5dfbedd36a34c86b9c06e4b4411671f496035f1f44201ff46602226752a825c35400696a36481a6976c256689fb8ab55b6788ab2f7f6c7f2ba73e89c9d152ce12f21a18af7a922158731b040a8f8d9c48d326fb09426a04ff491e5493a37617307cb7566e0a937198dafab48828141c68faeeb9cbb4352429be6cf220195746e8efc9b8459675629465e7031811038a43eecbace38be802f4766bc8226198396c09cfb204a115d58c011c73ca31cb1a552adfea0d5b1075dbb6b0f06fdeed1d196ced0a732c654573c4ec9b7be4449d904dff58849afb8035e84c5c4b7a32061e512aa1352d04a17c701f9ce6d9abf104763af775ce196bb9955a9acadaa2615c60ce6ffa4aeae6449d50bafa75d3e933d89d304f354d694be72ef9c3d36aedc50b7e94bc71bee4b5648e5859abadee87638f59cdbfb1fc5d577b633c1f95a82b8e7a83c26c038abd33eeedb27bd36d93af502b513a536aae43998b44fd51feb26962a175226c0da585f2c46de061d050000",
    ],
    [
      "ETag",
      "mlvo57LvvpbYgpw0zhG1/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-90-1592525998233",
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
      "3010fe9e5f81d8974d6b022140a052d46569d622a5494748bb174d8931867a054cb1495555f9efb3812444cdaa6ada37b8bbe7c577f63db72449bec769209f4ab28fa38702e54fef7e135f3e1119c44024328f8ef2d1f8ecdf5c5cabe7b3cbf50f13cfbfd1e1605055e1124d4192c5a84d499143444f17f34e9493220339216d4ed8b6d576d7b03543336cdbd27abd0a4b511c4e707a2f18ee18cbe8a9a26c7d742242a218810cd30e24c92eaeac3525cbc96f0419550e6515ae4495d785cf620201c3241d2ce6958982a27c8912806361638f0efc4f87f41d0c924ec4abd718220021295226ac553490a4218e8abc24e74ccf3cc8c3a5e7dd6f2320cfc793f1c89346b3c5d47bbf0289a05b7d90009596cb1cd12266d217777625ad32ae7e0728a22be9f672ec8e792427218ed112072b69209d49c3e9b9b4afab6213e7caf1a46e69ae140e1065382ded79c08f51c314cfd62d758e4c7347214800e30a75d9b2af9aa06ba9b61ffa7d185a3dc30f55e4fb96df3740cf57a1ad233df011683230a15de1414ad29ea5faa66604a6af9aa6a1a340ebdbbe0e2dad6b06966a40c3d6a16e5a7db966d8eccef3986386ce31cd08c575cfe55bd7f1c64bcf5d4c47436fdc3c7b087843cf2bf787273f3812e34d6aba7dad2d2f1c653926dc54395d67ea8ddde1c8736e1a36f8559ba008c0a7f983b86c218829daa3410e12c4507e4502311cf97a36773c67361d4ef60ce5edb9de56525ef67367767fa6269bf7941d8eba9a421515364d5d6ee4362747596e405c1ca159d761",
      "b97bc0d13ac2f62feee69eeb4c2ffe833d90f1c1fdc562fdf5abd5e097f9eaa8adc95f1763f7bbc09639917151887294c2bde21b9e8f0056e9376c465ebedd5302c157d54e9f321ee62f19d2bd3acc51f5ae71524da32434bb86ae69fa96900373f6b2a2a7ef2a5eec2aa1851294b26d2faa9d5535727360a968d82961a29cbfc3693dc04d6bd3fa03186f5f3e70060000",
    ],
    [
      "ETag",
      "wI/+5BbVGP0DOHvZ6iSXsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1592525998233"
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
      "000002ff4d515d4f8330147de75790faa8c4c13215933d38b3e892053774d16896a52b17640217db32b32cfc77db021b2f6dcfc7eded3d3d5ab64d7ed22222f736d9a6c96f05fc7091805cea4308a2caa4505b89850072a5dd2069a2dd379fd72fb300f2c5fba5cff61fd132bd75dd643c6e5c827d434e95efa890c2710a592414fe32d86e79a31534077de366c34d437343abc94369b459f0367d9a867d29c7c848c16a3e7f98cca7a4956ab3afd55a9ba7ec701b420c1c0a06e707951c77c0e4cc4c2e685e66e008ac3803d136d1858d9c70ac4aca111d4539fec07147be37f246be7fe70d879d3d4346658a85ae58bd92537f89926621fee9e989dbc4c31bd884d14541e25e3efd8494b4d7c50372a2eaf6b4b63ab43e379b1c24880547358b80a8a9eca278443daad449485e81a11955bff59cca96b36aeb1f9bf4198b18020000",
    ],
    [
      "ETag",
      "6Z/OINemPW+9cvXdQi711g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ff1dcf4b7282300000d0bb646d1d84a049770661caa75a048aed2613207c1a0b8144c5e9f4ee75fa6ef07e002b4bae14d583e03d78067766e265b90c07448c6d1557ad1516b409df05dbd6f088fd2b4e7a69404a25d4a74d2cf3e4720b0ee31591b9df891549c7ba6a3231ce4a3b4e6805d71cda99c7f6ce7af6a27c3a84c32e51f5f912a3eefbed3cc4c27555228d60e3bd12d663fb69be690f159020ddd0ade965ac129f113b342f5194165d6e7eb9e8ee8f45bf224aedd7c2c57ed416c96d88cc326d3fe0393ce97d2add63061680cfb29bb8a2dd6366d9182fc07f93eabbe48f2be16ce213f8fd0323ef42e805010000",
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
      "Fri, 19 Jun 2020 00:22:34 GMT",
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
      jobId: "grouparoo-job-91-1592525998233",
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
      "f6b52aa02834315ba3b47557710b68d36c3664661ce8b4c85066e8a669fcef3b037ec0da347d837bef39f7dc8fb9ef2d45519f49ba512f151592f8a5c0f9dbb7270ad50be9c11cc4d2331d0c7990da0fd39b1c45f73fd6ebc79fc8bd1b8daa2852a219d866096e335ae408b3cb95df89735a6420a7b42d08dbb6ded64ddb300dd3b62da3d7abb00c27d19ca4cf92e191f38c5d76bb071d9d98d238c12023ac83e8f668efbe1add2ca74f1871d66da6ed8a4cacfb79e2ef094580139a8e567e25a260380ff1169044ca38a137f0aa49df2160db8945f42b411820448b944b69150da26944e2222fc905d3bb300a73a9f9f85b33a8be337726818268526cd330055b7ca16c0007217fcbb072ed2d17caccbd5e7a8b71305bbaa13fb97516e3ce64395f2d5c5fb9bf753c47e10026b8c42a23e5aafc73c54fa9a8ccb6c18c93b4d414486f4d89f0eefb38fb6084470a49225431bc0f0b87da00e89666c3080e5164f54c186918420b0e4dd0831ab2fbb8bf8118d4194a65151ea434d50d5b078631082d4db7c2be665921e8d966a86d06c886d0445007ea1ebd3bd6f237271c4f09cb2823fb26abf7de2c70c2c05bb99371e0d4eb8e4091f069a5bc5975a31c2e1a5457fa594bce146539a1425439ce991b38de7812ccd6351962b7e63806e8cd7f91db158184e1131ae4",
      "62561ce70bba918351ddf1c2999ec0e5a6fc3a043111f1fba8f3548e0894f32f6b399b7f334f2016abd18a6a369555f5036fe6dea835e7ee639a35488a0f785ef7663513dd7a141d660daed6ff5f7f5ab51caa78ab7b79eaddcaf11e24b6f4498f87239ce3149db27e617525b0727fe11489f0c3619008711b8ef9191766f18a103b654739aede14a93a5f110e74b36f69fd03a100e6fc3cc21e1a8788b3e32073e12d4ef9a117d591a81ab96b482a6a724a980c17efc0dd0f71d7dab5fe0154352546e1050000",
    ],
    [
      "ETag",
      "D67tTn9YDGrcfWJVVhKcNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1592525998233"
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
      "5d4fc230147ddfaf20f55148f81a82090f4350171111c6031a42ca7607c36d9d6d8712c27fb7ed06ec05b344125fd6de7bceedc9bdedd94e2b14d087173ae8b68016def23306babd5a027f959b11b0d8e74c2c110919a0a26403c74bc97683e9774ddf74f813bc5d779b467d3a345746bb9db098bd82000bde4e4422763df01d26e2771517d2bcc2421c803cd1267e1c847315164f30df460a1e5b2373f0904502e2286430e9f78d4ebf8752685f3c2fe2608ee7eac8bf49a875a6a562684d162370814268c3a9eb889235d8dc54e36538887c283112531b582a220b137849491c614a4849a44aad4aa9a2b7aa7a556fb59ad55aed40f7898db94742593119a3a33e271cfb23f225478c1ac91dd0244c267e1805723397909d908036b2d873d031b72ffe42340756a39ee1a6bb9996a9ccad2a26e57a3eccff495d5cc90a8b179e4f3b7d261712c70189439e53fabeff625cb071e186bc4d770dab772959c6851772ea5ae6736f6c19cfc3b3e2e23b3b99a0b3e5c08694088f3150ceaa94eb4dfda6514607a7de11e9442e8dca690c2a6d63f1c77af4b8c8b9d867a0edb51fca98b9ae1d050000",
    ],
    [
      "ETag",
      "fmYx35vBtKeZ+D8A4YPIhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-92-1592525998233",
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
      "6d",
      "6f",
      "9b",
      "30",
      "10",
      "c7",
      "df",
      "e75320f666939a84044842a5a8cb52b622a5499b90b6db3425c61cd42b608a4db6aaca779f0d79206a5655db3bb887fffd7c67df734d51d40792f8eaa9a27a247ccc217b7af7937aea89f40047a1f4dc740c0f2e121c7fbb1bfcc60f9f92bb55cbb8eef7cb2852643314a711d419cd330cec743e6b8419cd5394515a178275ab5d6f9956db6c9b96d56beb7a99cb200a462479900af79ca7ecb4d9dc7234424ac308504a5803d378676faedacd34a33f0173d63c2cdb149558f3f5c26711c588139af4e7b3122267902d2046249218fb6cdffb7828df20286e84227a4530208c699e708956ca609a0424ccb3425c283d0ba33017ccbbdf8a419dd9237be82ac3c97cecbe5fa258ca2d3f2888298b45062c8fb8f2793ab95496a9a87e8f18b0a5727b614f6d61c968402258107fa9f4953365303e5794a58f3894ff23e7d2719556015614f581719214682ef222a80009efa69dce9149ee24a408e2826213b6e86a1dd4ea699617785d1cf474d30b34f0bc9ed73591ee69d832c0f03d4055052e6b97f928a189d70bbc8ea75bd0c5868174136bd0eb68961f989aa6774d1dfbd8f75b2850370aebdd797e6584c33961296564d36ff576eab8f6c29dcec7c3816b57cf1e20d1ccf392fef0e40747e2a24955dad7daf28228cd081550c5649db16b4f0743d7b9a960886b368210e1a7d9a3bc68018a18ecb3518662e0905d52",
      "5f0e47bd9acc1cd7998c07a3bd427173aeb6914c847ddfc1eecf5455739fd2c351975328ad12b363a815dffae4a8ca0d8af22332ab8d596d1d68d48ea8fd0bddb91ce2ffc3b5b5b656d7e412f80be5e6eb47ad5244159b6343a75ecfede957995bf8a4670a016490e07dd937bc209958badfb01845f8764dc90cb1a976f5191766f19831db57c719944f9bc4e5400ac14ecb34bbda4e502466fc65846558db8817ab4ad6821812beed45b9b2ca46ae0f90f20a4e9126c3c5531c3be32f057c6d5dfb03d481f9446f060000",
    ],
    [
      "ETag",
      "V64beHncmZXAxckBnXv14Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1592525998233"
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
      "2b48f73a12c5b08c253ee842361363369c7bd8624c850b4381cbdacb9c31fcbb6d01f5a5ed39e7dede9ed39365db6c9f95317bb2d9364b7f6b10c7bb14e85d1f4290754e526d159612d8bdae06e2a9ae0e0e5e46e52c5e8efebfc241f819a40fc17e321eb75532fa8182abba93420a2719e4b154f8db60bbe38d56f202f48d9b8d3003cd0d9d46c7ca68b3c547f01284b75281b19116abf97c329d07ac931ab3afd5da98a7ec701b420202ca08ae0faa04ee20a299712e7951e5e048ac4504b21ba21b5b391558575c203a8a727cd7197abeebb99eef3fbaa3515f9e63c429c35277ac96ec329f90781ee241bb67c3361ed1c2368c3e0a96dce4739b9092fedae60bd574a7b5d5a3f575d8f44820df042a2f128c8301eba378466d957412246a3074c4d56fbd66d47156639d01910d544818020000",
    ],
    [
      "ETag",
      "Ew5itnIdS3xZR0RVEg6EkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "db7243400000d07fd9e734a32e8bbe2d4286a12e8d901723b2d64682ee22a4d37f6fa6e70fce0f28ab0a735e8c7d8b3bf001d652d4b7d5d6eb35434097c575e49490312ccfe7467b58d59b64dd62c550997faa99d65133ad503ab9f1f72cab30bb4aa724729a06b1c1360a31ea3d21839612c8fb58409a9887e1de89978444fee318d494dad49682113b9dafd6e4c66715eb879dcb79c55d2e27b229c1597f3f92ab0f45d9cfbce724c00ce1bb78d19a1545c5ddc5d06c8d41899bb10c959c47bb76ca4909bf66e9f30036002f03659817f43593145ddf80ff6631ae037e5d0d5c32ccc0ef1f55664c9d05010000",
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
      "Fri, 19 Jun 2020 00:22:36 GMT",
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
      jobId: "grouparoo-job-93-1592525998233",
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
      "7df75720fa1adb5c7c2392d5580e692cd9b8059cb4aa2ab42c03d906b3845d124591ffbdbbe00bd4519437989973e6cc65e7ada328ea23c922f5525143923c9550bc7ef94b43f5427a80a3447acabb34b5a3c71757777ebe78d6ad6e46b9964ca77514a9d00c6df314ba8c96050676b9f17a4941cb1c1594760561d732bbfad03286c6d0b2268669d6580669bc24d9a36478e03c6797fdfe41472fa1344901e584f530dd1eedfd67a39f17f42f60cefaedb47d9189f53f4efc35a5187142b3e9c6ab45940c8a00b688a452c6091d85576dfa1e41db5e22a29f090684312d332ea5d53498663149caa222174c6fc228cc95e6e36fc3a07af6d29efb0aa669b9cd820c6de142891047017fcd41b971d72b65e1dcacddd5cc5fac9dc09bdfdaab596fbe5e6e568ea7dcdfdaaead7014a6506195a97255fd39e2a75254658b807192559a7ce96d2811de7d1f17ef8cf0482149842a06fbb060ac8d903ed1ac300ec7389e98c330d6200c27e17888cc50c3d600065108a8c95029abf128a399353060125938403a84c100596610c60323181848d32234d23564aa7bf4ee58cb4b41385c13965346f64d56efdd856f07bebb71e633df6ed61da332e5d7b5f276d5ad72b8685053e9472d39539417840a51d538178e6fbbb3b9bfb86bc810bbb58404e157ef496e578c520627342ac4ac38142b1ac9c1a8ce6c655f9fc0d5a67c3f043111f1fba8f3548e0894f3af6a399b7f3b8f2f16abd5",
      "8a7a36b555f57c77e17c531bceddfb3477282ddfe179de9bd55c74eb417498b5b83aff7ffde93472a8e2adeee5a93f36b6fb4b622b9ff4b8104301193e65fdc4ea4a60edfec42912e187c32011e2361cf3332ecce2156176ca8e0ba8df14a93b5f138ef4e168782214c0829f478cb5f121e2ec38c85cb0858c1f7a511f89ba91bb96a4b221a782c970f10e9cfd10779d5de71fa5076c71e1050000",
    ],
    [
      "ETag",
      "uVllEdkwR1NXwS9H13dp0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1592525998233"
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
      "5d4fc230147ddfaf20f55148140499890f0351d1f135664c3484d4ed0e06dd3adb4e4308ffddb61bb217cd12497c597bef39b727f7b6675ba35241eb30f6d15505bd858bf714d8e6640162a2360ef094082e9784c61c5055b141e08566af45d0ed3d3ebcb4477c3421ab676f323eb5aeaf3316f7961061c9dbca48c64108c4e7327ed57125cf6b2cc611a8133d4ad2289eebb07a80c526d1f0d475fac3bb2212515f23c327dbb63a760fe5d0aefab3888f059eeb23ff26a1d799918ba1157d73200006b10787ae134657e089be1e2fc75142a0c669ca3ce0b9882acce005a3698219a53599aa998dda79d3ac37eb4dd36cd71b8d3d9d500f8b90c6aae2698abef505159838f4538d18b5b23b6059984d7c3f0a14142ea13821097da8e2d047dfb95df517627fe8b62e0adc7c37330a95a555e5a48290c0fc9fd4e5952cb17ce1e5b4f3677224711cd1341625a56fed9175c4c6a51bca367d63b9bd63c97221bd5052d7ed0f7a53d71a8c7f1497dfd9c1049d8d003e66547a8c8376d6f9d945bb79d93a437ba776a972a25046152c059df6b0fc63dd8742e6024c38183be30ba2561b611d050000",
    ],
    [
      "ETag",
      "bktfCEKJZ8OsOQljWcQP+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-94-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffad94596f9b4010c7dffd29107d69a5dae6f42559a965d306c94762e3246d55d9cbb2904d8025bb4bda34ca77ef2ef800258da2aa6ff61cfff9cd0c3b8f0d45516f711aa80345f571749723faf0ee86f8ea47e9411c44d233b1dccbabab5fd6b561f7f3d3dfc1f93af696d1705846e1229b81248b5193919c42c406eb552ba224cf0025a429049b7daba9db7dc31612fd9e619a652e437138c5e9ad54b8e63c6383767bcfd18a0889620432cc5a9024077bfbde686794dc20c859bb5eb62d2ab1f6eb854f620201c7241dae572544ce10dda004e058621cb303ff535dbe8541d28a44f43d86084048f2944bb452069234c4514e0b71a1f4288cc25c301ffe560ceaca993a634f192fd673effd1624526efb41014cd96c286279cc95cfcbc54cd966a2fa3560886d95cb5367e9080b25218ed106075b65a89c28a3f94451b68c0bdcd2307567aea7e805595135408ce3b460f3801fa30a91f0eee6e9beb0ca838414015c60ecc2365dad03f49ed6f743bf0bc39e69fba1867cbfe7776d60fa1aec5bc80a7c04aa0a5cd62ef3414ad2a0df4366a0eb86c88626e86a5d5fec28b46d64d9a11998b0033a816d59ea4ee1e9d0cf4f8a399a609611867703572f97aee76cbce57a3e1e794eb5f71088694e4afa7ae7b596b8185295f6b5b13c23ca282602aa58ad3bf79ce568ecb917150cf19d4d5104e0c3ea4e7e692188193a66030a12c4119d91402e473d5bac5ccf5dcc47d3a342f1e99ced239908fb7e803df65455f31eb2faaacb2d945689d939ccb6d64d5de502c4f90b32f73bb3aad7341a2fa8fd0b9de7ce9c95379a9dfd07424333b4a6668853e0e9c6403707bad5d234eddb5fc077bf7e342a2555714d76c0eaf9da597e95b9854f7a96284414a5f008f1864725134bf71b8ea508df9f2e9921aed7a1be78f81c8bf70dd9b13aa4a87ced38297754087674bbdbe9da7b419148f9f3889ed5d9473c3b5fb2164a50caf7b328cf5839c8a71a",
      "525ec129d264b8789d7377fea5806f3c35fe0056921fa383060000",
    ],
    [
      "ETag",
      "D4IWXXx4h259uHzdQUlTRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1592525998233"
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
      "8230147de75790ee7123993a1659e2831ab2991933f163c916636ab9301c70595b5c8ce1bfdb16505fda9e73eeeded393d59b64d7e933c242f36d925f15f09fc7817839ceb4300a24ca5505b81b900f2a0ab41d25857afd75ff4fd39bbff64e5a1b718f7c3a53bf78683415d25d80f6454d59d1452384a200d85c2df06db0d6fb49c66a06fdc6eb919686e6834792c8c36992dfd573fb895320c8d345b4da7c3d1d4278d54997da3d6ca3c658fbb0022e09033b83ea8e0b8072627c6b9a059918223b0e40c44334437d672ccb12c28477414e5784f4ec7f5ba6ed7f5bc7eb7d76bcb5364542698eb8ed5825ce64b94340df05fbb279d3a1e5ec33a8c360a12dde4739b90920e75f385aa9ad3c66ad1e63a6c7494203e382a2f028c8347d24631466d55ea24242fc1d08caadf7a4b64c359957506e9ee0b7018020000",
    ],
    [
      "ETag",
      "VVZaK6m+Wcuv3SC8dT5Q9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00d0bbf45b0c1499b03f01031b016140517f1ae86a072a656d05ccb2bb8fec042fef07d4845029b1e257da8357f0aca1b326eb88dbaebe23ca3eca9adba6c3bc8ac5eebdcc44a87fe308a55666b555704813e8ccc7e0b679bc95ee978a89b631a3ca20adf3e19df7ee81ab5b0d2fe882d524f8a9ca6716a7a6a846d8a121f589dbe016ede49c7ff6ef380c4d43e47a5258d292fe0b3c6b13f28da033cb930f4536f6a450a1b70da85e2c280b48a4f5dda3e9c7ed5daf398b2691ef59849ac248249cae6005e83cb4824adc2e33d3729c15f86f62f51ce87275692da800bf7ff60d019e05010000",
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
      "Fri, 19 Jun 2020 00:22:38 GMT",
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
      jobId: "grouparoo-job-95-1592525998233",
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
      "f75720fa9af8824d6c22598de590c6958d1bc089d2aa42bbcb4036c12c6197b451e47fef2ef8027514e50d66e69c3973d9796b699afe44d3503fd7744ce3e702f2d72f8f0ceb27ca0302c5ca734ffd9ff8fb8deb2de1af5d78b79873761f8fc755142dd11cadb3044e392b7202fc7ce5b5e39c1519ca193b9584a79679da332dc3344ccb1a19fd7e85e59044739a3e29860721327edee9ec74b463c6e2045046799bb0f5dede79313a59ce1e8108de69a6edc84cbcf371e2af09234850968e575e25a2e09007b0463451320ee8105f34e9db14addbb18c7ea1041021ac48859256d1109646342ef2925c32bd49a334979af7bf3583eed9737bea6b8425c53a0d52b486132d440205e23503edca5d2eb49973b57417137fb674026f7a6d2f26ede972be5a389e76776dbbb626104ea0c46a63eda2fc73e44fa9a8cc160217342d35f9ca5b5322bddb3ecede19e19e429148551cb661c1b07b867aa3ae85233c24d1a86fe2a80b188ff0d0447ddc25d60006210654672895557894b2d4e899dd0132a22034472418e0fe3040c4c081195ad08d0cc0c88cf42d7ab3afe54f4e055c529e314eb74dd6efdc996f07bebb72a613dfaed71da122119795f266d58d72846c505de9472d395294e5944951e538678e6fbb93a93fbbadc990bb3587189157ef596d5784120e0734cae5ac04e40b16aac1e8ce64615f1ec0e5a6fcd8057119f16baff3508e0c54f32f6b399a7f338f2f",
      "17abd18a6a369555f77c77e67cd36bcecdfb34b72829dee179d99af54c76eb41769837b85aff7ffd6ed572e8f2ad6ee5e9372bdbbd57d8d2a73c2e4490434a0e593fb1ba0a58b93f718a64f8ee302884bc0dfbfc5c48b37c45841fb2931caa3745abce5784673d73d437f68412988be3888165ed228e8e83ca056b48c5ae17d591a81ab969482a6a724a980a97efc0d90e71d3dab4fe0107c65cbbe1050000",
    ],
    [
      "ETag",
      "YiTZbJQRSOexEuSVbssoYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1592525998233"
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
      "ffc5545d6bc230147defaf90ec55c1af3a1df8509ddb0475aead301822b1bdadd5b6e9927443c4ffbe24adda174761c25e9adc7bcecde1dee4f4a0552a6817c42e7aa8a075e07fa640f7773ef037b93181a52167624948cc0055251b38f625db318646c7b20773171b83f7d8ddad13d337fafd8cc59c0d4458f00e2212b11740e832117fa8b892e71516e308d489244ca378a5c2ea05e6fb44c1966d8e67cf452422ae42668bc9c4184c4628878ed5eb222ee678a58efc9b845a975a2e86b6646d82071462072e5d27946cc1e163355e86a324841a23297580e522b230837d4ad20453426a2255ebe9b586de6bea4dbdd7eb365bad133d240ee6018965c5c242677d4e380e4df22d478c3ad91dd02ccc267e1a05f20a97509c9080be6471e0a273ee58fd85389ed99d76819bef965aa1b2b4aa98941784b0fa277571251b2c5e7839edfc99dc481c47248d7949e9a7c9ab71c3c6851bca36fd68d8a35bc9322ebc5052d71e4f47966d4ce757c5c5777931c160cf81cd29111e63a09cd5a8b7bbfa7da78e4e4e1d12e9442e8dca690a2aed60f1c77a09b8c8793864a01db51fee47aa021d050000",
    ],
    [
      "ETag",
      "cACA6STBPdaABXndkbpRgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-96-1592525998233",
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
      "14",
      "c7",
      "df",
      "f329107bd994e60a245029eaa2946e48b9b484b4eaa62931c650b780a96d3a4555befb6cc885a859554d7b8844cee57f7ee7d83eaf3545519f701aa8e78aeae3e8394774fde991f8ea99f4200e22e9b9b2dc1f66bd0eebfabd5e5f274f3737a3388d0683320a17d90c24598c1a8ce4142276be9837234af20c50421a42b061f51a1dc3ea1a5dc3b2ccaea695b90cc5e118a74f52e181f38c9db75a3b8e66444814239061d68424d9db5b2fdd5646c923829cb58ecbb64425d67abff0454c20e098a483c5bc84c819a24b94001c4b8c4376e07f3d966f6290342311fd82210210923ce512ad9481240d7194d3425c28bd0aa33017ccfbbf15833ab7c7f6c85346b3c5d4fbbc0289945b7d510053964b8a581e73e5ca9d4d945526aa3f0086d84ab9fb6ebbb6b05012e2182d71b05206ca85329c5e2aca4ea2b08c9d89e3299d02ad281b20c6715ac079c08f51054978b703754e9ce55e428a002e38b661cb7ebb073a66dbf243bf0f435333fcb08d7cdff4fb06d0fc36b474a4073e0255052e6b97f9202529304137f07564983d0dc1beaf6b6d0b6a7ae81b6650fc7aa669997da06e1536fb7e7e53ccd125661961783b71f5ce753c7be9b98be968e8d9d5de4320c67959d21f777ed4121743aad2be3796374419c544401567eb4c3ddb1d8e3ce7b682212eda184500aee7cff2aa852066e8900d284810477442027938eaf56c",
      "ee78ce6c3a1c1f148abb73bd8b6422ece71ef6d05355cd5b67c7475d9e426995983d5dadf8366727556e419c9f9079d99ad5ce9146ed84dabfd05d8d67c3ffc4d734f4bf206ebf7ed52af2aa581c5b34f56661bbf732b7f0498f8b4244510a0f053ff07c6462e9fec05e14e1bb2d2533c4a2dad7675c98c54b86ec501d5254be6b9c94dd1682bd4eaf63f5bb3b419148f99b886e473376116f3695ac851294f2dd2cca8d550e7273849457708a34192edee1d4997e2be06b9bda1f4b4b24c76e060000",
    ],
    [
      "ETag",
      "F9RZ8++c+4Y4+ymkQQClng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1592525998233"
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
      "4d51d16e8230147de72b48f73a9289731b4b7c980b6e2446373692258b31b55c10052eb665c618fe7d6d01f5a5ed39e7dede9ed39365db6497953179b6c93a4bf735f0e34d0af2531f4210752e85da2a2c05905b5d0d92a6ba7a37b98f62e6fe2c168ffbcd229866c174470fe3715b25d8060aaaea4e0a299c6490c742e15f83ed8e375a490bd037ae56dc0c3437749a3c56460be6dffe9b1f5e4b05c6469a47b3d9cb64e6934e6accbe546b639eb2c57508097028195c1e5471dc029381712e6851e5e008ac3903d10dd18dad9c72ac2bca111d4539de83331879eec81d79de933b1cf6e539322a332c7547f445cef3254a9a8778d0eec9a08d87b7b00da38f822457f95c27a4a43fddec9233d574a7a5d5a3e565d8e428417c70545e04180777a48fe215b555a99390bc064333aa7eeb3d931d6735d63fad224e5918020000",
    ],
    [
      "ETag",
      "kB4Udc2XOO7qhOIFiIFkaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000d07fc9591d7692dec0b24c815054362f4c80944d76aa713afdf73a7d7ff07e00290abaaed9367674006fe0490474280ece08754e2b4d85747ebf3476d9648b4ead3b8671f3e9919c085652856221181c77d36b87d71e5e4a8664bc14ef72ee55ec3e5b0194fb3042a1d12314a5617f2e7d56333e2814be233046df7b851f31ddba0ddf4dd5fdd0d4a35f33351dfc58742e737482d4c1e763745426e66d336e5b6807f8923bd64d30da7de9ce522c498a6b4aa67acda158e19c3d12854e5ff675f43db003944dcd42d7ac79cd4419a11df86f66db73a2afab4ec94217f0fb07da4568f505010000",
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
      "Fri, 19 Jun 2020 00:22:42 GMT",
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
      jobId: "grouparoo-job-97-1592525998233",
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
      "8d546d6fa24010feeeaf20dcc7d637149526e6ea59da2351bc036cd35c2e645906ba2db2945d6c4ce37fbf0514e16c9a7e8399799e79e665e7bd2549f20b897df94a923d12be6690eebe3d534fbecc3dc051987b426dfe38b39f7617a3c9fcee826b3f5ed016bd4da7651429d00c6d9208da8c66290676b5b63b614ab304a594b605615b1bb7fbaaa6a88aaa6913653028b10ca26041e2979ce189f3845d75bb471d9d90d230029410d6c17453d9bb5ba59ba4f4193067dd66daaec8c4ba9f27fe1e518c38a1f1746d97223206a90b1b44a2a2d80aed7bd74dfa0e419b4e28a2b70403c2986631cfa5953498c60109b3b420174cefc228cc85e6eab766906d7da1cf1d09d328dbc46e8c367029f9882397ef12906eadd55232ccdb95b59c39c6ca74edf94f7d39ebcc578bf5d2b4a5879fbaa54b1c79111458692a5d177fa6f8291415d97c609cc4852627f7d69408efa18fc60723ac287212a18ac121cc1df746a83fe9695ee08d713019a85ed003cf9b7863150dbc1ed68630f43d40758642598947318d01ab807d505d6da8803b54478a3b014f757b41dff7a1ef8f7b9e261fd0fbaa96b79470b8212ca18c1c9a2c3f5886a3bb8eb536e73347afd71da02ce237a5f266d58d72b868505de9672d395394a4840a51c5380dd3d1add9dc31ee6b32c46e2d20447867bfe6db15a088c1098d52312b0ee992faf9606473b6d46f4ee062537e1d839888f853e93c952302f3f917b59ccdbf99c7118bd56845399bd22adb8e65987772cdb9ff98e61e45d9073cdb83594e44b79e44875983abf5ffd7df562d872cdeea419efc7bad5b8f39b6f0e51e0b024821c6a7ac5f58dd1c58babf708a44f8f130e408711baafc8c0bb378",
      "45989db2e314ca3745cace9784a3fe4819a9ca915000537e1e311e571167c721cf051b88f9b117e591281bb96f48ca6a720a581e2ede817918e2beb56ffd03d25605e0e1050000",
    ],
    [
      "ETag",
      "g9CYAShy+68CG+t9Bkavaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1592525998233"
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
      "0002ffc5545d4fc230147ddfaf20f51522a04367c2032ae2c8001d23f12384d4ed0e06db3adb4e4208ffddb61bb017cd12497c597bef39b727f7b6675bad5241ab20f6d04d057d04f3cf14e8e66c0efc596e6c6069c899581212334055c9068ee792fdf2b67ed5e1c5325b462fea9fd3fe6a64e175bb9db198bb80080bde564422f603083d26e2771557f2bcc2621c813cd125611ac53315568f30df240a1e3bb639ec159188780a194e2cab736b75510eedaa3f8b7898e3993af26f126a9d6ab9185a920f1b7ca010bb70ec3aa164092e37d578198e92106a8ca4d405968bc8c20c9e53922698125213a99a71556be846536fea8671ddbcb8d8d343e2621e9058564cc6e8a0cf09c7a14dd672c4a895dd01cdc26ce2fb5120bf7009c50909e84b16071e3ae476d55f88e6d0695d16b8f96eaa152a4bab8a49f94108b37f521757b2c0e28597d3ce9fc989c47144d29897947eb0469d13362edc50b6e9fb8ed33d952ce3c20b25751d73d01d3b9dc1d38fe2e23b3d9ae076c3813d51223cc64039ab51bfbcd6af5a75b477ea1d914ee4d2a89ca6a0d22e167facc7808b9c8f4306da4efb06e2a9fdf61d050000",
    ],
    [
      "ETag",
      "XZwY5eXLI69GmJ/rJkOLaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` > ? LIMIT 1",
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
      jobId: "grouparoo-job-98-1592525998233",
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
      "945d6fda301486eff9155176b3490512208154421da3599789421b4259b54d601b27759bc4a9ed74aa2afefbec848fa0b2aa77bb4bcec77b9e736c9f979aa6e90f245de9a79a0e49f49863f6fce19e42fd4479b00091f2dc9a3f22f83d03d7d3eebc37f8327707173e1cf4fb651429b23948b218d739cd19c2fc74366d448ce6196094d6a560dde9d54dcb69592dcb717aad76bbcce5380e47247d500a774264fcb4d9dc7234224aa318838cf006a2c9cede7c6a353346ef3112bc7958b6292bf1e6db85cf628a802034edcfa62544ce315be004905861ecb357f0f3a17c8380a411c9e82782304088e6a95068a50ca26948a29c15e252e9451aa5b960defd560cfad41db9c3401b4e66e3e0e312244a6ef949035c5b2c18e6792cb4affee4525b66b2fa1de0982fb5f937d777a585d190c47841564badaf9d6983f1b9a62dd5dfafdc30da589a46dea5176866c156d45d612e485ad00500c6b8c224bd9b897a470e7327a1448090209bb045d7b081d9331c18c22e0a7b6d0b860686b007bb16684303391ddc59410caa0a42d52ef3414a53841cbb873ac0c2c8b4510b750cd0b5a0d95d752cd8c56d0b41001cd341fa4661bdebe70f23029f139e514e3623d7e7be17b88bc09f8d8783c0adf61e0239cff392feb0f38396841c5295f6adb1bc22ca18a112aa385c6f1cb8fe60187837150c79d3463802e879faa8ee5a08628ef7d98081040bcc2ee94a1d8e7e35997a8137190f467b85e2f25c6d23b90cfbb983ddf754550b9eb3c3a32e4fa1b42a4cbba3577ceb93a32a3720ce8fc83c6dccba79a0513ba2f65fe9ac7fe06dbe7ed72ae2badc1a1b2cfd7ae6fab72ab7f0298f8f43cc708af6e5def1745462",
      "e97ec75294e1db15a532e496dad5e7429ae52b467c5f1d315cbe69926c7a5582b669db866d6f05652213af235a46671bf16a4da95a38c1a9d8cea25c57e520d707487905a74853e1f20d8ebdf145015f5bd7fe02f06b7bd56b060000",
    ],
    [
      "ETag",
      "Y1XgbJpaQS7W8ABWEAGRbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51d16e8230147de72b48f73a928992c1121f74631b89311b4e936531a6c20571c0656dd9420cffbeb680fad2f69c736f6fcfe9c9304df29d95317930c93e4b7f6a60cd4d0ae25d1d42e0752eb8dc2a2c39905b550d82a6aa1a52dbdd3f6d0e1b6fb49e34cf41f51907f7b3e9b4abe2d1010a2aeb4e12499c6490c75ce22f8dcd9ed75a490b5037ee764c0fd437f49a682aad05cb0fffc50fafa502632d2dd78bc56cbef0492fb57adfcab5d54f39e23e84041894115c1e54313c422402ed9cd3a2cac1e258b308783f44357672cab0ae2843b4246579ae35723cdbb11dcf73edf17828cf31a222c35275ac57e43c5fa0a079887fca3d1975f1b00e76610c5190e42a9feb84a4f4ab9a6d72a6dafeb43506b4bd0c9b3702f81b43e98583763071efc810c6232ab3426521580d9a8ea8fcafd74c482ea13907a335fe011fc6efe41b020000",
    ],
    [
      "ETag",
      "eg28bDVhV91U4yFIpYdI7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000000002ff1dcfdb6e82300000d07fe9b318b909ec0d5444088e82dc7c690a2dd85984145cc065ff3eb3f307e707e0baa6e388a6fe4e1fe0032c58b1d6f53ae84d6763d367e215df0c6f542498aea68eb1bcb4a3d0da63ce2d532eb831f16ac69d381b8d23c190d4c13dd7d320f58c1d9761188a30ecccdc2df157ac8c433ec4dba76fc262a78cdbb4b40f168bc9104305ea5778cbc8c397fbb3cd5363104e69b8c167962ca743872e2f5f624d15b5ad46731f755a72d9379c78514b94f1b6bfc2cc9d09e668f2123f329b5385a5a06bc10ad07960828e88bd67aa6e592bf0df44d332d0f7d5a15850017eff0017e35ce805010000",
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
      "Fri, 19 Jun 2020 00:22:47 GMT",
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
      jobId: "grouparoo-job-99-1592525998233",
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
      "9b40107df75720fad8c4577c2192d5580e69506ddc629c28aa2ab42c03d904b36477711a45fef7ee822f504751de6066ce9933979db786a6e94f240df50b4d0f48fc9c037bfdf24803fd4c7940a05879d8f5d74ed7f8d1dbdc26d4ddd82ff9f3e0feefcb785c469102cdd13a4be09cd39c61e017ab65336634cf10a3f45c129e9be679a76f76fbddbe698ebabd5e89e5904433923e29860721327ed16aed7534634ae30450467813d3f5c1deda745b19a38f80056fd5d3b66426defa38f1b7846224084dc7ab652922e7c07c58239228194774185cd6e99b04ad9bb18cde100c08639aa742492b69304d2312e7ac20974c6fd228cd85e6c36fc5a02fad9935f5344c937c9dfa295ac3991622817cf19a8176ed2ee69aed5c2fdcf9c4b3178ebf9cde58f34973ba98ade6ce52bbbbb15c4b132848a0c06a63edb2f873e44fa1a8c8160217242d3479ca5b5122bdbb3edaef8cf040a148a42a0ebb307fd81ea0cea86d065130c4d1a8d70fa23604c12818f6512f6863d300230c0055190a65251ea5340da25e68b4cdc81f2223f48d0136fd0020f4b1d90734ec8cba280af41d7a7ba8e585110157846794935d93f53bd7f62cdf7357ce74e259d5ba239427e2aa545eafba568e900daa2afda825278a3246a814558cd3763ccb9d4c3dfbb62243eed60c62845f97cf6abb22947038a21193b312c0e6345483d19dc9dcba3a828b4df9b90fe232e2f741e7b11c19a8e65fd47232ff7a1e4f2e56ad15e56c4aabbef45cdbf9ae579cdbf7696e5192bfc3b3d999f54c76eb417698d7b81aff7ffd",
      "695472e8f2adeee4e9bf56967bafb0854f795c8880418a8f593fb1ba0a58ba3f718a64f8fe302884bc0d87fc5c48b37c45981fb36306e59b2265e74bc2416730ec0e8c3da10432711a617446fb8893e3a072c11a52b1ef457924ca466e6b92f28a9c02a6c2e53b707643dc36b68d7f0cb2b827e1050000",
    ],
    [
      "ETag",
      "rF+124K3vVloRvIwuq6Yxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d6f8230147de75798ee719a38bf264bf6804e2789738af8b02cc654b8200e286bcb8c33fef7b505272f5b4866b217da7bcfb93db9b73d1cb44a05bd05b18bee2a681df8ef29d0fd950f7c263716b034e44c2c098919a0aa6403c7be64f776f6acdf9d6ea723f3ba37fc0c1646f3c5f6efef331673361061c13b8848c45e00a1cb44fcaae24a9e57588c2390273a244ca378a5c2ea19e6fb44c173db32278f452422ae42268bf1d8e88d0728878ed59f455cccf14a1df93709b52eb55c0c6dc9da020f28c40e9cbb4e28d982c34d355e86a324841a23297580e522b230837d4ad20453426a2255d3f5da4d5b6fb41b6d5def369acd133d240ee6018965c5628ebef539e138b4c84e8e1875b23ba059984dfc340ae4152ea13821017dc8e2c045dfb963f517a239b13bad0237df2db54265695531292f0861f54feae24a3658bcf072daf933b990388e481af392d2c3f1b371c1c6851bca36fd60d8834bc9322ebc5052d7369f0673db789afe282ebecbb3097a7b0e6c4a89f01803e5ac9b7aabdbbeedd4d1c9a97d229dc8a551394d41a51d2cfe58a3808b9c874306da51fb0286638d001d050000",
    ],
    [
      "ETag",
      "BwTQC8PjPHI+BFziUA3YTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-100-1592525998233",
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
      "945d6f9b301486eff32b10bbd9a426011208a9147551ca3aa684b484b4aab6293160a85bc0d436ddaa2aff7d369084a8d9564dbb83f3f19ec7e7d8e7a52549f203ca42f954927d143f16903cbfbbc7be7c223c9081587892ab0bfd62ec7c4148bb9dcd7fce1fee0be05f8d4655142ab32948f304b6292e4800e9e972d189092e7240306e73c1b6aa286d551f6abaa60f87a6d6eb55c91426d114650f42e28eb19c9e76bb5b904e8c719c409023da0970bab3779fb46e4ef03d0c18ed1ed6edf252b4fb97ca67090e0043381b2d171545412159c114a04470ecd343ffe3a17e0781b413f3e82714401004b8c89860ab64029c45282e4829ce955eb8919b4be8dd6fc3202faca935f1a4c97ce978efd7201572eb0f12a0d26a45202d12267d72e733699df3ea778042ba966e3e5baec52d044728812b14aea59174268d9d73691fb796be158ad283dc31b567b627a92561593d8494a1ac64f4809fc00619f7d68db58f0c7527214400e365eab0d54031806a2a433ff2074164f6743f52a0ef9bfe40073d5f09867dd80f7d089a0a4cd4aef2418633b30fc270a8693d3f3481aef77ba1a1034381c087be160643a0aabdd08c0cb956d8eccef3832006cf11cd314575e3e51bd7f6ac95e72e9dc9d8b39a678f00efea79457f78f2832331dea426ed9fdaf28a28270873a872c4b6e359ee78e2d9d70d0c7edfa63006c1f3e251dcb8082414eeb30101296490cc702886235fce17b667cf9df174af505ea1cb6d24e5615f77b0fb3335d5bce7fc70d4d5142aabc034fa72c3b73939aa720d92e288cc536d96d5038dd611b57fa15b78aeed5cfc07bc71ce07f71bc4faeb7baba12ff30552a3c9574bcb",
      "bd15b9a54f785c184102b3605ff10dcf472456eeb72c481ebfdd5622852fac1d0065dccc9f7240f7e50302ab878dd26a1ca5a0a11aa6d1df09f244c25e470cccc136e2d5c612b5600a33b66d46b5b9aa4e6e0e908a064e9926c2f94374ea096e5a9bd62f011efc7878060000",
    ],
    [
      "ETag",
      "lQG5GANJii2YMOxOkjuabQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1592525998233"
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
      "4b",
      "6f",
      "82",
      "40",
      "10bef32bc8f65a521549b589876a484b6bacd29a1e1a63561c28f218babb6888e1bf777701f5c2eef7989d998fb3619a2489f33d7932c92e8efe4a60d55d0462a52e3ef032155c1e05e61cc8bd7283a09172f7d7df1f34b1e1edc14bd8d149de97b370799a4c1a170f7e21a3d2779648e2308674cf25fed1d86c79ade53403f5e276cb7443fd42ab89aad09ab7f8725f5cff56ca70afa5c57a3e7f9ece5dd24ab53e37f25beb510eb8f32104067900d7810a86070884a737e7342b52b038962c00de3651858d1c312c0bca102d4959fd5ecfea3be3813370c6e3d1c0b63b7f8a011531e6aa64fd492e03081434f5f1c4756c4d3eac814d1a5d1624bc09e83622291d55f1905ca8babd6d8c0e6daecda69500be642897e1a057188e1e4997c60cd5b642852158099a0ea8fc61afb1905c48530e466dfc030be7ba731c020000",
    ],
    [
      "ETag",
      "1UWOak3eJ/Ikrv5kKPCfPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000d0bb642d4e883fe8ce20517e8a18b4ba6120060b280249f9d8e9ddebf4dde0fd8098312e44249f052fc1071862a48fd9d8796a182e53f4f2a7d94a3d1885e21ae4b2a3a1fa80515aa6d3958fbd49706ac3a0dd5074b530ea303e083ab7a7e7a32b6951dba41641bc0fec05e92b37fed4f07e77861d9cb336ddc2eca6128bb105c516b9e8ebd0aed532cc992336b89d41324fac5973f2044d98746ec6bd78f04cf1ef1a952f353195ab69204fa2e46badd551696c8345a928364afc3efff686bc2347138211e07d95355c44d97b3699e9fa08fc37233954fc7dc53c6e78037eff007126a50805010000",
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
      "Fri, 19 Jun 2020 00:22:49 GMT",
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
      jobId: "grouparoo-job-101-1592525998233",
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
      "cf",
      "af",
      "40",
      "ecb5f98024102a452b4a689b2e211b21ada66942b663a85b822936a9aa2aff7d369004966aeb1bdc7bceb9e7de6bfbbda528ea334936eaa5a24212bde4387bfbf244a17a21339883486600bc59f709987e7bbdb3a193d877e87ef7f03a1e972852b019d8a6316e339a6708b3cbf5aa1365344f4146695b08b6b59ed6d686963ed4879635d2fbfd92cc701cce49f22c251e394fd965b77b30d289288d620c52c23a886e8ff1ee4eefa6197dc288b36eb36e579462ddff54fe1a530438a1c978bd2a5de40c6701de02124b1f27fa065e35f53b046c3b9140ef08c200219a275c7a2b65104d4212e559212e94de4550840bd3c7df5a405d397367e22b88c6f9360912b0c517ca067010f0b7142bd7de72a1ccdceba5b7b0fdd9d20d56935b67617726cbf97ae1ae94875bc773140e608c0bae3256ae8a3f57fc148e8a6a1bcc38490a4fbeccd69c886c35c8d9074b3c4a4811e18ae10a16983d0368a39e054368a270d41fc2b087211c417308fab087ac011e6c20067585c259c907094d7481d00d4b0b4c4bd7828161f4024bc3fdc040860e81092c004cb562ef8fbdbc6684e329612965a41ab2fae0cd7c27f0bdb53bb17da7de7708f2984f4be7cdae1bed7031a0bad37f8de4cc519a112a4c15eb9cb9bee3d9137f765fb321ced61c4700bdad5ee4e9",
      "0a41ccf0890d32b12b8eb305ddc8c5a8aebd70a627727152be1f404c207e1d7d9eda1140b9ffa297b3fd37ebf8e260354651eea68caa2bdf9bb9376a2db9ff58e61ec4f9073abb2aaca6625a8f62c2aca1d5fafbeb77ab56431597b5b2a7fe583bde4fc92d7232e3e110673841a7aa9f38ba9258a63ff31809fce1659014f1381c0d302ec2e21a21762a8f325c5e2a528ebe143434c33207fa415010337e8eb08c23e2ec7590b5f01627fc308cf2952827b96f58ca6b760a9a848b8be0565bdcb7f6ad3fe6264ca2e4050000",
    ],
    [
      "ETag",
      "abGU3iaDKwJAbEnAJcVvWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1592525998233"
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
      "30147ddfaf20f51522df82090fa0a88b7c0923060d2165bb83c1b6ceb61391f0df6dbb017bc12c91c497b5f79e737bd6db9eeeb44c06ad1ddf42b7193477161f21d0edd502f88b9c0c81852e67620888cf0065251b385e48369b3ceb6bba7c5b3b5fdf139d5eaff94dff75d368442c662ec1c382b71391886d075c8b89f85dc59938af301f7b205734891b7afe4c85d913ccb7818247c650ef3d26118f580ae98d3b9d66abd34631b4cf9e17b130c733b5e4df24d438d56231b422f321d840c137e1b4eb809215985c57ed65d80b5cc831125213582c220b2378414918604a484ea472857c2157a8d48b9562a55eaf154ba503df2526e60ef165c978848e3fc009c7ee906c648f51353a041a8551cb0fbd4076e214922d12d0a72c762c74ccedb3bf10f59e512d27b8f16caa252a53ab8a56d98e0bb37f521767b2c4e28aa7d38eefc985c4b147429fa7947ee8f49b17dcb8b043da4ddf378df6a56419176648a96be8ddf6c868760767c5c5777a32416bcb810d28112663a0ac55c8976b959b6a1e1dac7a47a415b9742aa721a8b489c593f5e47091b3b1cb40db6b3f10069c471e050000",
    ],
    [
      "ETag",
      "sYKIkrhZkixzYIr/kt7OWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-102-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad94596f9b4010c7dffd29107d69a5d8e6f045242bb51cd2a2fa48304e14b595bdc040360196ec82232bf277ef2ef8c08adb4655df608efffc7666775e6b92243fe1c497cf25d9c5e1730e74fde191b8f299f0408642e159bfc41d3fff062b6bfc6cccaf2eefe76b27bae9f7cb285c643314a711d419c9a907ec7c3e6b8494e429a284d4b9605d55b4bada36b4b6d6368c9ea6eb6532832818e1e449483c6459cace9bcd1d482324248c00a598353c12efedcd95d64c2979042f63cde3ba4d5e8a35ff52f922221eca3049faf359499133a00b88118e04c721dd773f1feb37308a1b218f5e610f90e7913cc9045b29e39124c0614e0b71aef4ca8ddc5c40ef7f2b0679668ecca1230da7f389f371896221b7fc2421262d1614581e65d2953d1d4bcb94577f400cd852bafb6ada26b75012e00816d85f4a7de9421a4c2ea543dc52fa912b8a0edc31b2c69623a9056151dd0796e1a46074901b41858c7bb78db54e0c752f214450c6cb6cc3165da583d49e62b881dbf5829ede7603055cb7e776db487715cf6841cb770155153251bbcc4709495a5ae07710f25c3e215f33b496027a1754b5eb83ae745be0e98aa175902f6f1536fbf3bc509cc12566296178db78f9ceb61c73e1d8f3c970e098d5b3078877f5b2a43f3ef9d19132dea42aed9fdaf28628a59870a862c4d6c431edc1d0b16e2b18fcbe8d2044de7af62c6e5c802206876c44510c19d031f1c570e4ebe9cc72ace964303a281457e87a17c978d8f73dece14c5535679d1e8fba9c426915989d965cf16dce4eaadca2283f21b3da9a65f548a37642ed5fe8668e6d4dbefc073c94f2c1fd0671fbf5b356d197f902d9a2c93773d3be17b9854f786c088042e21d2abee3f988c4d2fd9e05c9e377db4aa4f085b507601937f3a7ecb143798f42f9b0715c8ea310eca8fc81b65b3b419e48b3b7113d55d945bcd958a216c49064bb66949babece4e60829afe01469229c3fc4c976829bdaa6f60b341dd94b78060000",
    ],
    [
      "ETag",
      "ywm6duKevIMq9UFDYUyTlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1592525998233"
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
      "00000002ff4d51d14e8330147de72b487d54928d491c267b70662a095914dd8b66593a764166e1625bd8e6c2bfdb16d8f6427bceb9b7f79ec3d1b26df293151b726f937596fe56c00f5729c8377d8940544c0a759458082037ba1a244d75750e453daa3f45054ffb609fedaee775f0b79b4cda2a117f434e55dd512185930cd84628fc65b0ddf1462b680efac5d58a9b81e6854e9387d268c1fc63f63c8b2ea51c37469a2fc2f0611ace482735e65caa6f6356d9e23a82043814319c172a396e219681712e685e327004563c06d10dd18dad9c72ac4aca111d4539c381eb0c3ddff55ccff7c7ee68d4d7338ca9ccb0d02d8b77725a40a2a42cc29db64f866d3ebc856d1a7d1624b908e8322225d5ba79404e54d3dd96568f96e761d38304f1ca519911602cdc8eef489fc6236ab75287217905868ea9fa612f99545c429900abb1fe01fd49fd791c020000",
    ],
    [
      "ETag",
      "menv3vZsueFxIxiw+NvIzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ff1dcfdb7243400000d07fd9e7c8c42561fb66930c46892ea2ed8b612d59045d9720d37f6fa6e70fce132484d0be8f87b6a20d78034b22c12dd9daad86767a3e1c42c52e9b4409465624f5ba9c0f624a2e58eddedde3893ba4b2a7e2d80bf8e7742d0a7fb4cbabfe615a83e7a0873b7f4f61e087810bf16acea9be230bf3ee8e5f6a17c6a79c7d85e6bdd4a529416a6cc9728d6f8ca748c386609eb3dee028bc895226c8ccf89c04b4e4de4a440de6e9832a64225cca221cfaf288d5369232536a32a8caad155502dc0f42ad810da073c738ed63f69ac97b0837e0bf190f4b475f5744134e39f8fd038cd2a5c905010000",
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
      "Fri, 19 Jun 2020 00:22:51 GMT",
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
      jobId: "grouparoo-job-103-1592525998233",
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
      "6f9b30147dcfaf40ecb509210949a814ad694a57a484ac84b49ba609d9e442dd124cb1699556f9efb3211fb0545bdfec7bef39f7dc0ffbbda128ea134956eab9a262123de7906dbe3c52ac9e490f7014494f37df5c5ef67ab7c8317ec491cdb4b7f6dddb78342aa3488166689dc6d06434cf0260e7cb452bca689ea28cd2a6206ceaed6e5337cc8ed1314c73d8e9764b3083389c92e449523c709eb2734ddb0b6945944631a094b05640d707bbf6d2d1d28c3e42c09956cfab89544cfb4fe6af310d102734192d17a58a9c41e6c31a9158ea38c257f8a2cedf2268dd8a44f40b09000501cd132eb59534014d4212e559412e98de8551980bd1876bc5a02eaca935f19480c6f93af113b48633658538f2f92605e5da9dcf14dbb99ebbb3b167cf1d7f31b9b166e3d6643e5dce9c85727f63b996c2118ea1c02a23e5a2b839e252282ab2ad807192149a3ce9ad2811de5d23ed0f8678a090244215835d983f68f7913e6c9b38c483201c760d1cb601e3211e18a88bdb81d983de0a03aa3214ca4a3c4a6862f4cd70003de41ba1a9fb3d03ebbe092b710afb6d3c1c605def83ba436f0fb5bc6684c31561296564d764f5deb53dcbf7dca533197b56b5ee10e531bf2a95d7abae95c34583aa4affd59213456946a810558cd3763ccb1d4f3cfbae2243ecd61422146c16cf72bb42143338a2512666c5219bd1951c8cea8c67d6d5115c6ccaf77d101311bf0e3a8fe5884039ffa29693f9d7f37862b16aad2867535ad585e7dace37b5e2dc7e4c7387e2fc039e979d594d45b71e4487598dabf1f7e977a39243158f75274fbd5d5aee4f89",
      "2d7cd2e342081924c131eb275657024bf7673e2311bfff1924447c0e07018c0bb37846013ba60f32281f15295b5f12f6f581deef0df6840298f1d388a17e4879f23bc85cb08684ef9b51fe126527b7354979454e0193e1e22138bb296e1bdbc61f4b5f0ad6e4050000",
    ],
    [
      "ETag",
      "3uyBB44QaN5XlgIs/z0VzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5545d4fc230147ddfaf20f515123e04c18487a9a828a28ee98b21a46c7773daedceb65389e1bfdb7603f6a25922892f6bef3de7f6acb73dfdb26a35f21a253e39ae916514be65c0570721c87b3d7140644c0a35a498082075cd064943cd6e5d051f5edf66ced9d1237e5eb72ffcfb65680f87394b78cf1053c5fb52918a8308982f54fc64e25a9137584263d02b7ac8b2385998b0be83e52a35f0cc75c6d38b3212a36f90e9c364629f4c46a480d6f59f457c2ae9c22cf9370933cead428cbce0d2810038241eec769d727c014f8e4d7b058d53060d8119f7401422ba3087438e594a396243a51aad66a7d1ea0edadd767730e8b73b9d0d9fa1476584892e799891ed0f48949439f8a17b4c7af921f03ccc5bbee905094aa7506e9182de7571e4936d6e5dff85389ebabdc312b798cdad52656555d5aa2062b0f827757526cf545df16adac53dd993388d314b6445e9f3c9adbdc78d2b3b54ddf499ed8ef6252ba43243455d777c339ab9f6cddd8fe2ea3bdf99e0642541dc7154261360acd56a1ef6bb47bd26d958f514b515a576aae41998b447d593751949950b281360adad6fc60e6f1d1e050000",
    ],
    [
      "ETag",
      "1Jfwc8AlRD7VoxK2GdQbgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` > ? LIMIT 1",
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
      jobId: "grouparoo-job-104-1592525998233",
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
      "59",
      "6f",
      "9b",
      "40",
      "10c7dffd29107d69d5d81c061f91acd48a9d16c9476ae344555bd90b0c641360c9ee92c88afcddbb0b3eb0e2b651fb0673fce7b733bbf3525314f501a7817aaea81e8e1e73a0eb77f7c453cfa407388aa4e74afb685883b1e10cdae8ba338fed708dbde75eaf8cc24536434916439d919cfac0ce17f34644499e214a485d08d60dddaa1b76d7b44dbbdbed98cd6699cc200e47387d9012779c67ec5cd376208d889028069461d6f049b2b76b4fa69651720f3e67da715d4d9462da5f2a5fc4c4471c93b4b79897143903ba8404e158721cd203efd3b17e03a3a41189e827ec03f27d92a75cb295323e49431ce5b410174a2fc228cc05f4feb76250e7c3d1f0d2552ea78b89fb7e851229b7faa020a62c9714581e73e56a361d2bab4c54bf430cd84ab9fd329c0d85859210c7b0c4c14ae929174a7f325094558038ac941fb9ae37411847ced87115a3a02b2a07c0384e0b3e17793154a88477db54e7c440f71252047181b20d5bb6f516323a7ad70bbdb61f769ab617eae0791daf6da3a6a7fb5d0bacc0035455e0b276998f529276c13643309b2db3d916197ae8876d1d2c4f6f59b6e7e9b6df01648119a85b85cdfe3ccf14731860961186b74d576f678e3b5cbab3c5e4b2ef0eab670f91e8e8a0a43f3ef9d191b8685295f64f6d794594514c0454315e67e20e67fd4bd7b9a96088bb368208f9ebf9a3bc6d218a191cb211450970a06312c8e1a8d7d3b9e33ad3497f745028aecff52e9289b0ef7bd8c399aa6aee3a3b1e75",
      "3985d22a315b965af16dce4eaadca0383f21f3b435abc69146ed84dabfd00de410ff1fced44dbdae9b6213fc8672fbf5b35629a28afdb1a553bf2e86b36f32b7f049cf0c42a090fa87b26f784132b174bf653f8af8ddb29229625fed01181766f19a7d7628ef5328df364eca8914822da36d5a566b272812297f1dd132777be2f5c292b5208194ef9a512eaeb2939b23a4bc8253a4c970f11627cee473015fdbd47e01bf68dcec77060000",
    ],
    [
      "ETag",
      "F/+14DM1ID7aP8Sl5fyibw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1592525998233"
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
      "4d51d16e8230147de72b48f7e8480435c1253ecc856c26c439d4a7c5988a1786162e6b8b8b31fcfbda02ca0bed39e7dede7b0e37cbb6c9392b8ee4c526872cfdad805f9f52905ffa1281a89814ea28b110409e7535489aea6a58bbe70b8b06587a9fe847837985fe2a9dcd9a2a11ff404e55dd4d2185930cd85128fc6db0ddf2462b680efac5fd9e9b81e6855693d7d2688be526780fa2be94e3d148cb6d18becec380b4526dce9dfad66695131e2248804311c363a192e30962b930ce05cd4b068ec08ac720da21bab191538e554939a2a328c71d8e1d7732f526de643af5bdd1a8ab6718539961a15bb66b725f40a2a42cc23f6d9fb84d3ebc814d1a5d1624e905d48f484917ddec913b55b7b79dd5a1dd63d8fc2a41ac382a33028c85b13f245d1a6fa8dd4a1d86e415183aa6ea877d645271096502acdafa0713b4435a1c020000",
    ],
    [
      "ETag",
      "eS1kvlR+op2Oo8R+Buo8Pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "ff1dcfdb6e82300000d07fe9b398d20994bd01a322ca90801b7d22a56d0049e452c665cbfe7d66e70fce0f609c4ba58aa96be503bc828d217bcff7e70ebbd091dca227b5982b4c5854c69bc1af58777418b8e9917a99be4cd72b4b098c076ec6663269e3db6c7ee1cc0f0fc1bdcd21c50bac0d72c8674ed13721a815581424d5363bf55b243c7f8e2c2311b5ab022aa53f9c57d7c1371c36dac9e3de43db0a660ca9567fe8dd8a96f072bfe48143442fde6f958f335826d367b4567958c59b1c1152e571e893b0ec2c0ac10ec8b56f46a98ae6397b316c7b07fe9bc5b4f5f27975251be5087eff000cc0297b05010000",
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
      "Fri, 19 Jun 2020 00:22:53 GMT",
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
      jobId: "grouparoo-job-105-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d545d6fa240147df75710f6b50aa20836315b63694b22d8456cb3d96cc8300c745a642833d8d8c6ffbe33e007accd6edfe0de7bce3df763ee474792e4179c45f2a5248738792d51b1fdf64c42f94278100389f0a86f94e41bc5ce9decfefdd1ceb6eff0f6ee6d32a9a37085a6609da7a84b495940442f57cb5e5290320705215d4ed8edab7ab7af8f355dd3c763531b0c6a3045693cc7d98ba078622ca7978a7210d24b08495204724c7b90ac8f7665a32979419e11645469e755782aaafc27f3f79440c030c926ab65ada2a4a808d01ae054e838c1a3f0aacddfc360dd4b78f4064304202465c684b69a06922cc6495954e49ce9831bb9b9127dfc6d18e4a535b766be04495aaeb320036b7421458081806d7324dd780b47b2dd9b85e74c7d7be106cbd99de54c7bb3c57ce5b84be9f1cef22c8981304515569a4857d59fcb7f2a4555b6085186b34a932fbc0d25dcbb6fa4fdc9108f148284aba2681f1618ea08f44d751cc6a1016373a087b18ac2d00c0d1d0c42158e876818850834192a65351e6424d386d1c840d0080cc35483a1190e03733002417f004c15ea2688c2a1bc47ef8eb5bc1598a16b4c7342f1bec9f2a367fb56e07b2b7736f5ad66dd312853765d2b6f57dd2a87f1063595feab25678af202132eaa1aa7edfa96379df9f6434306dfad394a00dc2e5fc576c520a5e88406059f15438543223118d99d3ad6f5095c6dcafd2188f2885f479da77278a0987f55cbd9fcdb797cbe58ad56d4b3a9adf2d2f76cf7566e38779fd33c80b4fc8467b337cb39efd613ef306d7175fefefadd69e490f963ddcb937fac2cefa7c0563ee1f1508c0a94c153d62facae00d6eeaf1c231e7fb80c02c28fc3510065dccc9f11a4a7f4b040f5a3c275eb6bc251df180cfbda8190030b761e31d2c68788b3eb2072a135cad8a119f595a83bb96b492a1b722a9808e70fc1dd4f71d7d975fe00cc16a141e4050000",
    ],
    [
      "ETag",
      "0wsopv/IpMnPzWInyzcGHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1592525998233"
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
      "0000000002ffc554d14ec230147ddf5790fa2824800cc5840714d425880223311a42ca7687c56d77b69d8618feddb61bb217cc12497c597bef39b767bdede99755a9903716fbe4b242966cf59e02df9cac408ef56402220da5504382b10052d56c9074a5d9cdf1f393f376dd9ab1fe69c7c6e775a3bf64e36e376309ef1522aa785f2a5271c020f4858a5f4c5cc9f3068b69047a450fc3348a1726acee61b9490c3c7527cee8b68844e81b64341b0e7b57c301c9a16df5b0884f255d9825ff2661c6b9958b91352e27100087d883fdae138e6bf0a463da2b689484501398720f442ea20b3378c5314d2847aca954ad51b76b0dbbd3b49b76a773d13c3bdbf143f4a86418eb92d994fcfc804449c3097eea1e937676083c0bb396ef7a4182c229145ba4a00f5dcc7cf293db567f213a23b7dd2a70f3d9dc2a54965655ad0a58088b7f525767f24ad5152fa79ddf932389d308d3589694be193ef48eb8716587b29beef7dcc1b16485546628a9eb3af783a9dbbb7f3c28aebef3bd09ae3612c42347653201c65a8d7aebc23e6fd7c9ceaad7a8ad28b553254fc1a43daa9eac3b26552ea0a1006b6b7d031315d9fc1e050000",
    ],
    [
      "ETag",
      "2QZXIkC4UiD+95oZj1DbiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` > ? LIMIT 1",
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
      jobId: "grouparoo-job-106-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad945b6f9b3014c7dff329107bd9a42631100289147551ca3ab4dc9a9056dd45890143dd0226d864aaaa7cf7d9900b51b3ad9af606e7f23f3f9f639f979a24c94f38f1e5ae24bb385ce7287b7ef7485cf942781083a1f05cafb5219b92354abf280f9b1b15d8fdfbf64daf5746e1229bc2388d509d923cf310ed2ee68d3023790a3342ea5cb0ae80765dd13baaaeea9d8ea96a5a994c51140c71f224241e184b69b7d9dc83344242c208c114d38647e283bdb9519b69461e91c768f3b46e9397a2cdbf54be8c88071926496f312f29728ab2258a218e04c731dd773f9eea37308c1b218fde600f41cf2379c2045b29e39124c0619e15e25ce9851bb9b9803efc560cf2dc1a5a03471a4c1663e7fd0ac6426ef54182545a2e3344f388499f669391b44a79f50748115d49779fad99c52d1909708496d85f493de952ea8faf24694519c75d49df730034c4ad437b643b9252e015a57d44194e0a4007ba11aa6071efaeabf699891e248408649c6517b634401b2a26e8b8816b7881a9e96e0090eb9aaea143cd055ea7855abe8b60558189da653e4c4802f416d04c10b480e1fad03001f4cdb61b185a4b85baeeab1dc334ddb661ca3b85ede13c3f33ccd015a629a178d775f96e663bd6d2992dc683be6355cf1e40ded2ab92fef4e4274762bc4955da3fb5e515519a61c2a18af9da63c79af5078e7d5bc1e0976d8842e83dcfd7e2ba0530a2e8980d33182386b211f1c570e4e9646e3bf664dc1f1e158afb33dd47521ef6ed007b3c5355cd794e4f475d4ea1b40acc764baef8b61767556e61949f91d9ecccb272a2513ba3f62f748e3db2e64e7f34fd0f842a50411da87c1f388ada55b4aed26a0000befe067cf7f5a3562929f39db203966f16d6ec5ee4163ee199a1006528f18e106f785422b174bf6567f2f8fd0213297c871d00f8f367983f708f1ecb7b192a9f3b8ecb2115826dc5e8e826d80bf2c48cbd8e30757d1ff16a89895a284609db37a35c666527b727487905a74813e1fc798eedf175015fdbd67e01",
      "abf79dd58b060000",
    ],
    [
      "ETag",
      "Gq3LtPoqepK1hvQ20IAY6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:22:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1592525998233"
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
      "c1",
      "6e",
      "82",
      "40",
      "10",
      "bd",
      "f3",
      "15",
      "647b2d09626da089876a4cab21a660b9b431668581a2c0d0dda5ad31fc7b7717502fecbef76676e63dce866992635e25e4c924fb3cfb6e809dee321081ba84c09b427079d4587120f7aa1a04cd54b5ed057f73fbb84956ab68ef067ee956c147309d76553cfe8292cabab34412a739140997f85363b3e7b556d112d48bbb1dd303f50bbd264eb5d696ebf7c5cb22bc954a4cb4b48e7cff79e62f482fb5fadcca6fab5739e03e84141854315c17aa191e20164bed9cd3b22ec0e2d8b018783f44357672c6b0a92943b424658dec476b34f19c8933f13cd7198f87fa02632a72ac544bb4219705040a5a84f8abec9351970feb6097c69005496f02ba8d484a3faad92117aaed6f5b6340dbebb0d949007f6328cd70d0161e5c9b0c69cc51b9152a0cc11ad0744ce50f7bcd85e4525a70305ae31f5ffd158c1c020000",
    ],
    [
      "ETag",
      "09QxC0kSdJJUb8QLm8nQZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00d0bb642d4e0b954f77103ac84f101b05364ca01908c8471334e8f4ee75fa6ef09e00571561ace0634706f009162c1beb6aed8fbaf56692549b741f694234922367f943f9a2f014c56de2dcbb5c6a38aa176e56e64373624edd314ffc3233e9f64289da233695c79badb559a3d9587ddf8904ba8a232d73176c0e2abff01f180cb80e645a327d4e2cc34cbfabbd734af6b1e1d57d81422cf2b47764ec6662b06f8736963044cdced23db56167b4bde4196af761189dbd8f48f47cb615f7de1d4d08a1c4c00a1031d12b61057dcd948d61acc07fb3e0cb445e578be02bb982df3f7f3c05ae05010000",
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
      "Fri, 19 Jun 2020 00:23:00 GMT",
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
      jobId: "grouparoo-job-107-1592525998233",
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
      "0000000002ff8d54ef6fda3010fdce5f11651f57201052a0125a114d0b15842e8456d33445b6b9a46e93388d9d4e55c5ff3e3be14732aaaddf92bb7befdebdb3fdded034fd99261bfd42d3310d5f72c8debe3c31ac9fa90c0814aa4c743b6553eb6b00cfdeddd3cdc230d9c430c2d1a8aca2059aa3388da0c9599e11e017eb552bcc589ea28cb1a6246c768c7eb3630dbb56d71a0e075dd32cc11ca2604e936745f12844ca2fdaedbd9056c85818014a296f11161fe2edd76e3bcdd81310c1dbf5be6dd98ab7ffd3f95bc408129425a3f5aa549173c87c88118d948e237c832febfc2d8ae25628ab5f29014408cb13a1b495348425010df3ac20974cef3228c385e8c36f25a0afecb93df134c2a23c4efc04c570a66d9040be784b41bb76970b6de65c2fddc5d89b2d1d7f3599da8b716bb29caf17ce4a7b98daaead09842328b0da48bb2cfe1cf953282aba6d800b9a149a3c95ad2891d99d91b30f9678a050245215875d99df37ce5167600c7180fb241898160e0cc07880fb1632b141863de86d30a02a43a1acc4a384253d08ac8e74d0ef0596e5f7ba70ee63304d1fa33e1e58060eac1ed677e8ed6196df1915704579ca38dd99ac3fb833cff63d77ed4cc69e5d9d3b407924ae4ae5f5a96be308695055e9bf2c39519466944951c53a678e67bbe38937bbafc890676b0e21226fab1775ba02147138a251267725205bb08d5a8cee8c17f6d5115c9c94bb7d1197153f0f3a8fe3c842b5ff629693fdd7fb78f260d5ac28775346f595e7ce9c1bbd92dc7e4c738fa2fc039ed75d584fa55b8fd2615ee36afcfdf5ab51e9a1cbcbba93a77f5fdbee0f852d722ae342001924e4d8f513475701cbf4671e2359bf7f1914443e0e07015cc8b0bc46841fdb930cca4b454beb4bc273792ffa86b52794c04c9c560cbac6bee2e47550bd208644eccd285f89d2c96d4d525e9153c054b9bc08ce6e8bdbc6b6f10784e182cae4050000",
    ],
    [
      "ETag",
      "lJHoH5+fekTPjGM03oC00g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1592525998233"
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
      "5d4fc230147ddfaf58ea2b247c2b263cf0a5ce20ca1841630829dbdd186ceb6c3b0d31fc77db6ec05e304b24f165edbde7b467bdb7a7df9aaea3ad1f39e856472bdffb4880eeae3ce013393181250167628849c40095241b38f6247bc69dd7f9042cfcf846275b736ed4fb8399d7e9a42c66af21c482f72d2211bb3e040e13f1bb8af52cafb008872077b4499084d15285a513cc77b182a796698ceff348481c858c67a351b7371aa20cda97ce8b3898e3a5daf26f126a5c689918da9095092e50886c389d3aa6640336375479190ee300ca8c24d4069689c88529ec5192c498125216a972b5725dae36dbb566add96edfd4eaf5033f2036e63e89540ba6e8f8039c701c98e44bd618b5d226d0344c4b7ea80572735dc89748409f72b1efa0636e5ffa85688cad5623c7cd660b2db7b2b0aa2895eb07b0fc2775d193351657bc9876764f2e248e439244bca0f4dde8b97bc1830b3b143df4a06b0d2f25cbb83043415dcb781a4eadeed3cb5971f15d9c4cd0db71602f9408933150d6aa561a37cdeb56051dacda27d28a5c3a95d30454dac6e2c97af0b9c8b93860a0edb51f2256c2ce1e050000",
    ],
    [
      "ETag",
      "UtdXWQeTaJYrQkRWI3CDUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` > ? LIMIT 1",
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
      jobId: "grouparoo-job-108-1592525998233",
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
      "000002ffad94db6e9b401086effd1488deb4526d73301847b252cb2129926327368e55b595bd2c03d90458c282db28f2bb77177cc08adb4655ef600eff7c33bb3b2f0d49921f49e2cb6792ec91f0a980ecf9dd03f5e48fc203390a85671d4f17d6d5c3c37091067af0138a623cb16efbfd2a8a94d90cc569044d468b0c033b9bcf5a61468b14659436b9605355aca66af43443337a3d4bd3f52a9941148c48f22824eef33c6567edf60ea415521a468052c25a98c67b7b7badb5d38c3e00ce59fbb86e9b9762edbf543e8f284639a1497f3eab280a06d912624422c17148f7bd4fc7fa2d82e256c8a3d70403c29816492ed82a194c93808445568a73a5176ee4e6127aff5b33c8337b640f5d6938998fddf72b140bb9d507093169b9cc8015512e5d4e27d7d22ae5d5ef1103b692169feda9cd2d190d48044be2afa4be742e0dc61792b49390be158aa203378f9c6bc795d492afaced03cb495212bac88ba0c6c5bddbb13a278e742f214450ce61b661cbae6222d5527a5ee0757160e9861728e07996d73590ee29b8d7818eef01aa2be4a276958f129af8a6d50bfcae6168a01b9a8a7dac18b8a3e98a89c1570225005503d451e5adc266dfcf8f8ce47041584a19d98e5d5e4c1dd75ebad3f9783870ed7aef01e233bda8e88f3b3f6a29e743aad3fe692caf88d28c500e551eb03376ede960e83a77350c7edb461022fc3c7b12f72d4011834336ca500c3964d7d4178723df4c668eeb4cc683d141a1bc4037bb48c6c3beee610f3dd5d5dce7f4f8a8ab53a8ac02d3ecc835dfe6e349953b14152764d65bb3ac1e69344ea8fd0bdde56832f84f7c2da3f31bc4edd7f7464d5ee6eb638b26dfceede917915bfa84670a016490e043c1373c1f9158b9dfb21e79fc6e578914beaef6002ce766fe94313b94c719540f9bc455bba5a0a95aaaa19b3b419e98e5af234c53db45",
      "bcda57a216c490e4bb61547bab9ae4e608a9a8e19469229c3fc4b133be2ae11b9bc62f69c32b8a76060000",
    ],
    [
      "ETag",
      "vmRW8GjjCWpf3fxeuuNO8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1592525998233"
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
      "0002ff4d51c16e824010bdf315647bb4248ab5294d3c6863d4c4184bb597c69815068a0586ee0e35c4f0efdd5d40bdb0fbde9bd999f7b858b6cd7e923c64af363b26f16f09a27a8881def5c50759a624d551602e813dea6a201eebeae7cdba3c7a8bde6748bd33cdb7a7aa973d4dc6e3a64a06df907155775148e1288134940a7f196cb7bcd1729e817ef1701066a079a1d5a82a8cb65c6f67f3997f2f65181a69bd5bad26d3d58cb5526dcebdfad66695131e7d8840401ec06da142e009025a1ae79267450a8ec4520420db21bab191638165c105a2a32867d07f710623cf1db923cf7b7187c3ae3ec5805382b96ed97db0eb0284c4531fcfda3e1b34f9880636697459b0e82ea0fb8894f4a79b5d76a5eaf6b6b73ab4bf0d9b56047223509991602c0cdd3eebd27843ed967418244a3074c0d50f5b24a4b888a712acdafa07b1fc9f451c020000",
    ],
    [
      "ETag",
      "6PNub9H+Vdt+wtGTjy+m4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ff1dcfdb7243400000d07fd9e7c8b018b66fa4a16225159b522f6667b3ee45ac28e9f4df9be9f983f30328635c886cea1bde8117b05288b66cebf7a62d5bf9e4365956a60cf6631eac076fe98d1933591a22c38f13ed4a8ed0b62715b772441477bed0831ee6aa6749ce5af3744f5a93505b4b9caa80ab8aaa699f22a54f22b116a712c6c931da99892beaab683a1fde6e2e23ca05bf8ac98ab5f21e5e160a0be384d8fbdb3c97928ebbfa2bc6f3f963c0d5e777a838356ab3c026ea40ac070c3d640a2db8f307cc77300fc106f065a8462eb2ea3953758436e0bf994debc09f579bd3918fe0f70f7633949d05010000",
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
      "Fri, 19 Jun 2020 00:23:04 GMT",
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
      jobId: "grouparoo-job-109-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6e9b40107df75720fa1a1b5f203691acc6754863c9c60dc689aaaa42cb324b36c12c61974469e47fef2ef80275d4f60d66e69c3973d9796f699afe44d348bfd0f490c6cf05e46f9f1e59a89f290f08142b4f426ea9f965f83a9f4eefa25fdd67e39e22128fc755142dd11c6db204da9c1539067eb15e75e29c1519ca196b4bc276af6bb77b96ddb7fa966d8ffa834105e69090394d9f14c5831019bf308cbd904ecc589c00ca28ef60b639d88d97be91e5ec11b0e04633af215371e31f993f270c2341593a5eaf2a1505873c800da289d2718447e16593bf43d1a613cbe8178a0161cc8a54286d150d6629a1719197e492e95d1aa5b9147df8ad19f4953377a6be8659526cd220451b38d322245020de32d0aebde5429bb9d74b6f31f1674b37584d6f9cc5a4335dced70b77a5dddf389ea30914265062b5b17659feb9f2a75454668b800b9a969a7ce5ad2991de5d23671f0cf140a148a42a0ebbb060d83d47bd51d70e4938c46434b042d285301c85430b0dc22eb64d30a310509da15456e151ca523cb02c42cc6180431b05261012d8d01b053d1350444cdcb7a381be436f0fb5bce654c015e519e374d764fdde9bf94ee07b6b773af19d7add041589b8aa9437ab6e94236483ea4affd6921345594e9914558e73e6fa8e3799fab3bb9a0cb95b7388117e5b3dabed2228e17044a35cce4a40be60911a8cee4e16ced5115c6ecab77d1097113f0e3a8fe5c84035ffb29693f937f3f872b11aada8665359f595efcddcaf7acdb9fd98e60e25c5073c2f3bb39ec96e3dc80ef30657ebcfaf9fad5a0e5d3ed69d3cfd76ed78df15b6f4298f07047248f131eb7facae0256eeff3946327e7f1914441e8783002ea4593e23cc8fe9710ed5a3a255eb2bc2f3dec81cf4cd3da104e6e234c21af6f61127d741e5820da462df8cea4a549ddc3624153539254c85cb87e0eea6b86d6d5bbf0173adabe4e4050000",
    ],
    [
      "ETag",
      "lfQi4B7wLCCVdz0q/Wiafg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1592525998233"
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
      "000002ffc5545d6bc230147defaf90ec5105bf67073ee8745b419dab15064324b6b75ad7365d92ea44fcef4bd2aa7d711426eca5c9bde7dc9ce6262707ad50409f5ee8a087025a7aabaf18e8fe6e05fc4d4e4c60b1cf99182212324025c9068e57925dec7f6f6dee4445f39dce0ca7be1bb088ee3a9d84c5ec350458f00e2212b1eb81ef30117fa8b890e61516e200e48a36f1e3205ca8b07481f93e52f0d4328df173160988a390f16c38ecf686039442c7d275110773bc504bfe4d428d732d15431bb234c1050aa10d975d47946cc0e6866a2fc341e443999198dac052115998c02b4ae2085342ca2255ae56f472b5a9d79ab5a6aeb76bf5fa89ef131b738f84b2643645e71fe08463df243bd963d44a0e812661d2f2532f909b39856c8b04b495c59e83ceb963e917a231b65a8d0c379dcdb54c656e55d12ad7f361f14feae24cd6585cf17cdae93db991380e481cf29cd24fc3d7ee0d372eec9077d3fdae35b8952ce3c20c39752d6334985addd1e4aab8f8ce2f26e8ed39b00925c2640c94b5aa9546bb79dfaaa093551f89b422974ee5340695b6b178b25e3c2e722ef6196847ed07e279d98e1e050000",
    ],
    [
      "ETag",
      "+Dxvctdp+RXrUId3wEsprw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` < ? LIMIT 1",
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
      jobId: "grouparoo-job-110-1592525998233",
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
      "df",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "df",
      "f9",
      "2ba2ec65930a244008a9843a44591789420ba16cda26709c4bea3689533b69852afef7d94980a0b2ad6f7b4beec7f73e77b6efb5a628ea23893df55c515d123c65c0361f1ea8ab9e490fa428909e8db61c2c37e1edcbd5cb0dffa67bf781794f06fd7e1145f26c8ea224843aa719c3c0cf17f346c068962046695d08d6755dabeb86d5325a8665f55aed7691cc21f4c7247e9412f7699af0f3667307d208280d424009e10d4ca3bdbdf9dc6a268c3e004e79f3b86e5394e2cd7f54be08294629a1717f312f28320e6c051122a1e438a47beee763fd0641512310d1cf0403c29866712ad90a194c639f0419cbc585d2ab300a730ebdffad18d4f9683c1a3aca70ba98381fd7289272eb4f0ae2ca6ac5806761aa7c994daf957522aadf230e7cad2cbf8e66236161d42721ac88b756faca8532985c2aca5afefdcc34ad8d85696c5fdb8ea2e76c795d0f784ae29cce416e081526e12d476a9f38cebd841441a90029c356a6d6457a4fb35cdf35b1df6b1baeaf81ebf65cd3406d57c356073a9e0ba8aa90cada453e8a696c195d4f47464f471674a1eb61ac99e0bb5acfc0baaf75fc4e1bbaa610574b85edbe9f174652b8243ca19c9423579733db19ad9cd962321c38a36aef3e12f3bc2ce88f3b3f6a291543aad2fe6d2c6f881246a880ca0fd79e38a3d960e8d877150c71d3c61020bc",
      "993fc9bbe6a390c3211b3114410aec9a7af270d49be9dc76ece964303e28e497e76617c945d88f3deca1a7aa9ab3498e8fba3885c22a31bb1db5e2db9e9d54b943617642e6b934abfa9146ed84da7fa533fe80577efdaa55c455b1364a2cf576319a7d97b9b94f7a66e00383181fcabde3e9c8c4c2fd9eb528e2773b4aa68835b507e0a9308b678cf9a13c66503c6a1295cd4ac1aede333b96b51314892c7d1b61b68c5dc49b3d256b410471ba1b46b1af8a496e8f90b20a4e9e26c3c5239cd893ab1cbeb6adfd067b77399b6e060000",
    ],
    [
      "ETag",
      "y0WAWylQwGwPsX1dhg7hiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1592525998233"
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
      "147de75790ee7524a292e8121f7461ce84988d8d641f31a6960bc30197b565c619fefbda02ea0bed39e7dede7b0e27cbb6c97756c6e4ce26bb2cfda9811f6f5290cffa1282a87329d451612980dcea6a9034d5d5fec3c45b46c13caec6e17ece3ee85bf8fe7798cdda2ac1bea0a0aaeea490c24906792c14fe34d8ee78a395b400fde276cbcd40f342a7c96365b4d5fad55ffae1b554606ca4751404f345e0934e6accb951dfc6acb2c75d08097028195c16aa38ee81c995712e6851e5e008ac3903d10dd18dad9c72ac2bca111d4539ae3b705c6f3af486de743a198e467d7d8e8cca0c4bdd12bd90f3021225cd433c68fbc46df3e12d6cd3e8b320c95540d71129e957378fc8996abadbc6ead1e6326c7194209e382a33028c85f16440fa34ee51bb953a0cc96b3034a3ea873d66527109cd05588df50f2c4a9f821c020000",
    ],
    [
      "ETag",
      "EF85GULAdp4RjAcZaXRYzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "82300000d0bb64ad0e1110e98e8f4881d4868f60374c06429282804015dae9ddebf4dde0fd005214741cf3a9ab690b5ec042b6faa6d8f8ddde948c1227c65728ded2de4d2e092d4784f8f9ac30c41fefd1a1328e5e35a7a431ef32d4d9a9734e494fc9b72bb071f12da7554b39b2aff17c375f15b8de5a4c56055e880be901ca6d362bae25b0576953dc96c53eb46e452d8285da5a0621d21aa76781b4936e3c48d71f03658e74758f7017a5c88e48c0daf5e08db19a787ec73f238eb1df701f3959ad6a53318508ac009d7b31d03117cf99aceafa0afc37f369e9e9f36a5232d001fcfe013a6fc62505010000",
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
      "Fri, 19 Jun 2020 00:23:08 GMT",
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
      jobId: "grouparoo-job-111-1592525998233",
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
      "0002ff8d54db6e9b40107df75720fad8d880af3892d5580e691cd938059c28aa2ab42c03d904b3845d524591ffbdbbe00bd4519b37989973e6cc65e7bda528ea334943f55c510312bf1490bf7d79a2817a263dc0512c3df74f5346e9b346bfa29b2ba243f230bc0de3c9a48a22259aa14d96409bd122c7c0ced76e27ce6991a19cd2b6206c1b86d13606e3eea03b188fcd6eaf57811924d182a4cf92e291f38c9d6bda5e4827a6344e0065847530dd1cecda6b57cb72fa049833ad995713a998f69fccdf128a1127349dacdd4a45c120f761834822751ce16170d1e4ef10b4e9c422fa95604018d322e5525b4583691a91b8c84b72c1f42e8cc25c8a3efcd60caa6b2dac99a7609a149bd44fd106ce941071e4f3b70c942b67b554e6f6d5ca594ebdf9caf6ddd9b5b59c7666abc57a69bbcafdb5e5580a4741022556992817e59f2d7e4a4565b610182769a9c993de9a12e1dd3572fec1100f149244a862b00bf347fa1019a63e0ea2608423b33708221d82c00c4603d40b743cee433f0c00d5194a65151ea534ed0580433c1af97a0f83df37c3ae6f9a91e177913eee47fa481f0c237587de1e6af99d130e97846594915d93d57b67ee59bee7acedd9d4b3ea7547a848f865a5bc5975a31c2e1a5457faaf969c28ca724285a8729c73dbb39ce9cc9bdfd56488dd5a408cf09bfb22b72b420983231ae562561cf2250de560547bbab42e8fe072536ef7414c44fc3ce83c962302e5fccb5a4ee6dfcce389c56ab4a29a4d65555dcf99dbdfd59a73fb31cd1d4a8a0f785e77663513dd7a141d660daed6df5fbf5ab51caa78ac3b79ea8fb5e53c486ce9931e0722c821c5c7ac9f585d09acdc9f3946227e7f1924441c878300c685593c23cc8ee9710ed5a32255eb2bc2a1619a03bdbb2714c09c9f460c8de13ee2e43ac85cb08194ef9b51",
      "5d89aa93db86a4a226a784c970f110ecdd14b7ad6deb0fefcaf8fbe4050000",
    ],
    [
      "ETag",
      "WjAsook/o+aJFi0elY6Pdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1592525998233"
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
      "d1",
      "4ec230147ddf5790fa2844060cc5c487a92824803886893184d4ed0e37bb75b61d8610feddb61bb217cd12497c5977ef39b767bdb7675ba35643ef61e2a3cb1a7a0d571f19b0cdc90ac4a37a7180674470b9a434e180ea8a0d02af14bb2bda01acd7d1f8f96c00a74e97dccfa227fbea2a6771ef0d622c795b19c9380881f85cc62f3aae15798d253806b5a3474916274b1dd60fb0d8a41a9eb9ce70725f4662ea6b64321f8deceb511f15d0aefeb3888f055eea2dff26a1d7855188a188be3a100083c483c3a9534623f0c450b797e33825d0e034631ef0424415e6f08ad12cc58cd2864c354cd36c9856af65b5ac5eefa2d56eeff9847a5884345125f319fafe004105260efde47a36f910581ee62ddff70205a529945b24a1b52a0e7df49ddbd57f210e276eb753e2166f0ba354595955b62a08092cff495dcee40dcb2b5e4dbbb8274712c731cd125151fa6ef4601ff1e0d20e550f7d6bbbfd63c97221cd5051d71d8efb33d71e4f7f1497cfc5c104d71b017ccaa83419076d2db3d9b9b0cebb4db4b7ea0d555614caa98265a0d31e96bfac4128642ec08483b133be00560200511e050000",
    ],
    [
      "ETag",
      "6t3fevvjMY/He+R6lGSjVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-112-1592525998233",
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
      "0000000002ffad945b6f9b3014c7dff329107bd9a425dc42422a455d96b2162d97869056d53625060c750b98da902aabf2dd670349889a6dd5b4373897fff9f91cfbbc3404417c44892f9e09a28bc2a71c92cdbb07ec8a1fb9076620e49ef1d5a5f57330933ecfd7b75f879bc5ecee4a7e9ef5fb65142ab22988d3083629ce8907e9d962de0a09ce5340306e32c1a6a2a84d45efa9baaaf77a86aa69653285513042c92397b8cfb2949e49d20ea415621c4610a488b63c1cefedd25a9552821fa09751e9b8aec44a51e92f95cf23ec810ce1a4bf98971439856409638022ce7148f7dd4fc7fa2d04e256c8a2d7c883c0f3709e649cad94f17012a030278538537a6146662ea0f7bf3583383747e6d01186d3c5c479bf0231975b7d100015964b02691e65c2177b3a165629ab7e0f28a42be1f6cab44d66213840115c227f25f485736130b9100e712be17b2ecb9ac71c236b6c3982521016d57d483394148c0e7023582363deaab1d689a1ee25b808c858992a6cd9953b4031e49e1bb85d2f3034dd0d64e8ba86dbd581e6ca5eaf0ddbbe0b415d21e3b5cb7c90e0c4f03b5d55038a0a81ab18dd20d0141de872db682b1af081dcd5ba0af45445ac14b6fbf33c1394c10b44534c51d578f1d6b61c73e9d88bc970e098f5b3078075f5a2a43f3ef9d19132d6a43aed9fdaf28a28250833a862c4d6c431edc1d0b16e6a18ecbe8d6008bccdfc89dfb80044141eb2010131cc2019639f0f47bc9ece2dc79a4e06a383427185ae779194857ddbc31ece54577336e9f1a8cb2994568ed9698b35dff6e349951b10e52764d69559548e341a27d4fe856eeed8d6e4f23fe00d5236b8df20565f3f1a357d912d900a4d9c2d4cfb8ee7163eeeb16100094cbc43c5373c1f9e58badfb22059fc6e5bf114b6b0f600346366f6943d7a28ef11583e6c1497e328043b8ad1d3d4dd0ae089247b1dd1eee8bb88571b8bd782314cb25d33ca",
      "cd5576727b8494d7708a341ece1ee2a49ae0b6b16dfc0247fdb50b78060000",
    ],
    [
      "ETag",
      "MHGIzAQ/BSvWKCyUQYH0wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d51d16e8230147de72b48f7b8910c1c9b2cf1612e6c3331c6b1194d16636abd301c70595b34c6f0efb605d417da73cebdbdf71c8e966d93bfb4d890679bacd3e4bf027eb849407eea4b04a2caa4504789850072a7ab41d24457d3f9ad9fcf937007c3643f7d1b6d1f170bb61f0c9a2ac17e21a7aaeea890c2710ad94628fc63b0ddf2462b680efac5d58a9b81e685569387d268a3c977f81e46d7528e1b234d66e3f1cb701c9256aacdb954dfdaacb2c57504317028185c162a396e81c991712e685e66e008ac3803d10ed18d8d9c70ac4aca111d4539aeeb39ae1f78bee70741dfebf5bafa0c19952916ba65f645ce0b4894348b70afed13b7c98737b049a3cb82c457015d47a4a49d6ebe2767aa6e6f4bab43cbcbb0e141829872546604180b0ffd27d2a5f18adaadd461485e81a119553fec23958a8b6926c0aaad13cabd59f61c020000",
    ],
    [
      "ETag",
      "aW+5mWgEveBgwPFIj6XXcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ff1dcf4b5283300000d0bb645d3a52be71578ac5004a425b2a6c18c014908160c220a1e3ddedf86ef0eea0a82a2a443eb18e0ee019c86207b7d53660b6f3b4ff54eb13feeef43d14927584500d2f9ec6336f84b06741e7aea6db78f9507372216dff56201f77e1c4079b5c6783d2a9b651062d27b0848ca6e45c4aab99c361d5d6f180144b9538aafb5b92bcf70798e4f1cf8e40f5922d3e0e1bb312fe919d757c353f0c5d795526e48ca615d016b1b04c63619f8e88cd88a7e557a5dca2d8552dc51d6d4fedd3179870b7061b4097b1e554e4ed63a619106ec07f339fe4481f5787169c72f0fb07d30980c505010000",
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
      "Fri, 19 Jun 2020 00:23:10 GMT",
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
      jobId: "grouparoo-job-113-1592525998233",
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
      "7df75720fa1a5fb8c510c96a2c873448366e304e5255155ad60bd90458b2bba48a22ff7b77c117a8a3366f3033e7cc99cbce7b4f51d4675c6cd40b458d71fa5221faf6e589c4ea99f4200e52e9f1280133ebfc2137afc7d983b6a88ce75b309d4c9a285ca319c8cb0cf519a92844ec62bd1aa4945425a084f405615fd38cbe6639baa55b8e63eb86d18019ca92392e9e25c523e725bb180ef74206292169864089d90092fc601fbeeac392922704391b76f30e452a36fc4fe6af19818063524cd6ab4645c5108d500e7026751ce19bf8b2cb3fc0201fa422fa154304202455c1a5b686069222c169456b72c1f42e8cc25c8b3efcb60ceaca9dbbb3508124abf2222a408ece940de020e26f2552ae83e542f1fceb65b09886ded28f56b31b77311dcc96f3f5c25f29f7376ee02a1cc419aab1ca44b9acff7cf1532baab36d10e3b8a83585d2db5222bcbb467a1f0cf1402149842a867661d178740e347be4c4493c86896d58713242716cc7630b18f1083a26323731026d865a5983070529ec44736203d8918da01999b13e8e6c4bdb44a6054c3dd162d336137587de1e6af94d314757989584e15d93d5fbc00bdd280cd6fe6c1abaedba135065fcaa51deadba530e170d6a2bfd574b4e1495141321aa1ea7e7876e309d85de5d4b86d8ad394a017c5bbdc8ed4a40c6d0110da89815477441367230aa3f5db8574770bd29dff7414c44fc3ce83c962302e5fceb5a4ee6dfcd138ac5eab4a2994d6355",
      "5761e0f9dfd49673fb31cd1dc8aa0f785e7766b514dd7a141d661daededf5fbf7aad1caa78ac3b79eaedda0d7e486ced939e002588a2021eb37e627525b0717fe61889f8fd659010711c0e02181766f18c203ba68714358f0a37ad6f08cf3567a48fcd3da100527e1a611afa3ee2e43ac85c284705df37a3b9124d27b71d49554b4e0d93e1e221f8bb296e7bdbde1f8f9b7877e4050000",
    ],
    [
      "ETag",
      "IroaC56Xm4F7lX1Mu3kQaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1592525998233"
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
      "00000002ffc5545d6f8230147de75798ee719acc0ffc58e2036ebab138758a2f5b8ca970411c506c8b8b31fef7b505272f2e2433d90bedbde7dc1e7adbd383562aa14f3f72d07d09ad7c6f9b00dddf78c0dfe4640a2c093813434c2206a82cd9c0b127d986bed9cefbba698e770307bfbfdcb65acdd0eb765316b3d71062c13b8848c4ae0f81c344fca1e2529657588443902bda2448c268a9c2f219e6fb58c1336b6a8e9ef248481c858ce6c3a1d11bf651061dcb97451cccf1522df93709352eb44c0c6dc86a0a2e50886c38ef3aa664033637557b190ee3002a8c24d4069689c8c214f62849624c09a98854a55aad57aa7aa7a6d7f44ea75dabd74ffc80d898fb249225f319faf9014e380ea6e44bf61835d343a06998b6fcd40be4e64e21df2201ed64b1efa09fdcb1fc0bd11c59cd468e9bcd165aaeb2b0aa6895eb07b0fc277571266b2cae7831edec9e5c491c8724897841e9c1706c5c71e3c20e4537fd6858fd6bc9322ecc5050d7325ffb33cb789d5c1417dfc5d904bd3d0736a144988c81b256f5aed1d65bcd3b74b2ea039156e4d2a99c26a0d236164fd6b3cf45cec50103eda87d036e85e2721e050000",
    ],
    [
      "ETag",
      "A5jqUE5IIOvFdaZJ+776mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-114-1592525998233",
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
      "ad945d6fda301486eff9155176b349857c110895508768b645a2d085d076da26701c27759bc469ec50a18aff3e3b091054b655d3ee92f3f19ec7e7d8e7a52549f2234e03f95c927d1c3d1528dfbc7b20be7c263c88814878746805037c37b26ccfba7b5cdfe91b656c3d0f8755142eb32948b218b529297288e8f962de897252642027a4cd05db9ad66d6be64037757330b074c3a892298ac3094e1f85c43d63193d57941d482722248a11c830ed4092ecedca5a57b29c3c20c8a8725c57e1a5a8f297ca1731818061920e17f38aa2a0285fa204e058701cd203ffe3b17e0783a413f1e835860840488a9409b64a069234c4519197e25ce9851bb9b984deff360cf2dc9ed8634f1acf1653effd0a24426ef54102545a2e73448b98499fdcd995b4ca78f57b40115d49b75f6cd7e6969c8438464b1caca4a174218da697d2216e25fd2854d580dc3171ae1c4fd24ac2b27a8028c369c9e8013f460d32eead1beb9c18ea5e428800c6cbd461cbbeda039aa50efcd0efc3d0324c3f5491ef5b7edf0486afc2411775031f81a60213b5ab7c90921401cb5043b5dbeb06860e7513685dcd8021d0806184be894ce4839eaa9a72adb0dd9fe739c70c5d629a118aebc6cbb7aee3d94bcf5d4cc723cf6e9e3d04bcab9715fdf1c98f8ec478939ab47f6acb2ba22cc78443952376a69eed8ec69e73d3c0e0f76d82220037f32771e342105374c80639481043f91509c470e4ebd9dcf19cd9743439289457e87a174979d8f73dece14c4d356f931d8fba9a42651598bdaedcf06dcf4eaadc80b83821b3aecdb276a4d13aa1f62f7473cf75a69fff031ec8f8e07e83587ffd6c35f465be406a34f9ebc276bf89dcd2273c2e0a518e5278a8f8",
      "86e723122bf75b16248fdf6d2b91c217d61e80326ee64f19d2437998a3ea61e3a41a4729d8d3069adaefef047962ce5e47e89abe8b78b5b1442d94a094ed9a516daeaa93db23a4a28153a68970fe10a7f504b7ad6deb17993e6d8778060000",
    ],
    [
      "ETag",
      "2c8d9iXA8ET8XkvX2y/C8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1592525998233"
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
      "4d",
      "4fc24010bdf75734eb511b2d1f0a261cc034822144aa78d010b2946929b69dba3bd500e97f7777db0297eebef76676e6bd1e2ddb66df71b6618f365bc7d14f01627f1501cdf5c507592424d591632681dde86a201ee9eabb036dc57c82d743997a9f1f8771f832ba1d0e0655950cb6907255775448e13086642315fe32d8ae79a3653c05fde26a25cc40f342add13e37da64f6ee3d7bfea594e2c648b3c5743a1c4d3d564ba53997ea5b9a5576b8f62104015900e78572813b0868629c4b9ee60938120b1180ac87e8c64a8e04163917888ea21cd7ed386eb7dfeab6bafd7eafd56e37f509069c62cc74cbe28d9d1620249ef8f8a7ed33b7ca4754b04aa3c9828517015d46a4a45fdd7ccf4e5459df96568396e761a33d817c15a8cc4830163abd07d6a4f184da2de930481460e880ab1f368e4971214f2458a5f50f69152e2e1c020000",
    ],
    [
      "ETag",
      "0zthrQIo+AsmEZVzHfJB/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "516e82300000d0bbf4db1810cae8fe00333a8ba20304f7d354569400050a55c1ecee337b37784fc0f29c0f031ddb8a0bf00e26b642cb7c495adbd59c1c63a80258613597aea49160f7b131b4a9dcce84288bd81f8e671cea2a0922a4a29af7c1509fbf74e953572a7141a1c978e368a96fa5ed4e1cf4cd869e426bad5ff724f576ea0cedf988592abe4b31285b4dec361eab5be3a24f5ce9ab2e89dd0b21b037fd7b38c7c556b65e60a6f3407c5bc49930de3c58e0fd3aeba3c2ccf46b2d4e92fa8ff6e7e00475938005e08fae947ca0e56b66408416e0bf49c7a9e3afabcb99e412fcfe0105fd256305010000",
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
      "Fri, 19 Jun 2020 00:23:11 GMT",
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
      jobId: "grouparoo-job-115-1592525998233",
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
      "9b40107df75720fa1a1b83c13691acc672488364e30670a2a8aad0b22c64136009bb24b222ff7b77c117a8a3366f3033e7cc99cbce474f92e4179c47f2a524873879ad50b9fdf64c42f94278100389f050a30271aadeddd324b6978fdb97cc55a2f7d9ac89c2359a82ac48519f92aa84885e6ebc415292aa0025217d4ed85755a3af1aa6666886694eb5d1a8015394c64b9cbf088a27c60a7aa92807218384902445a0c074004976b42b6f9a5294e4194146956e5e85a7a2ca7f327f4f09040c937cb6f11a1515456580328053a1e3048fc2ab2eff00836c90f0e8370c118090543913da1a1a48f2182755599373a60f6ee4e65af4f1b765903d6b692d7c0992b4caf2200719ba9022c040c0b605926edcf54ab29d9bb5bb9afbf6da09bcc5adb59a0f16ebe566e578d2c3ade55a1203618a6aac3493aeea3f87ffd48aea6c11a20ce7b5265f785b4ab877df48fb93211e2904095745d13e2c980cc7409d0ecd300e27309e8e8c301ea2309c8613038cc2213475a44721026d865a59830739c9c7fa78a8aa7a1884a60e025d37a260aa6a2840233d32c6aaaac59350dea377c75ade4bccd035a605a178df64f9c1b57d2bf0dd8db398fb56bbee185429bb6e9477abee94c37883da4affd592334545890917558fd3767ccb9d2f7cfbbe2583efd61225006ebd57b15d3148293aa141c967c550b92291188ceccc57d6f5095c6fcacf4310e511bf8e3a4fe5f04031ffba96b3f977f3f87cb13aad6866d35865cf776de787dc72ee3ea7b90769f509cfdbde2c17bc5b4fbcc3b4c3d5fbfbeb77af95",
      "43e68f752f4fbedb58eea3c0d63ee171518c4a94c353d62facae0036eeaf1c231e7fb80c02c28fc3510065dccc9f11a4a7f4b044cda3c24deb1bc2b16aaae6787a20e4c0929d4568dad038449c5d07910b65286787663457a2e9e4ae23a96ac9a961229c3f04673fc55d6fd7fb0387ce9bd6e4050000",
    ],
    [
      "ETag",
      "s5uafl1QVsgfILYykmR/dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1592525998233"
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
      "00000002ffc554d14ec230147ddf5790fa2824800c9d090fa82824131546883184d4ed0ea6dbee683b0d1afeddb61bb017cc12497c597bef39b767bdede9b751a990f720f6c86585bc068b550a6c7db200f1a42623e06928b81c128c3990aa6283a00bc56e59ed87e7afa935e9dbf5e074bac44f58d59f3a9d8cc5dd254454f2be6524633f80d0e3327ed17125cf6b2ca611a8155d0cd3289eebb0ba87c53ad1f0d8190d86774524424f23c3896d77afec1ec9a14df5b08847059deb25ff26a1c799918b91377c1d810f0c6217f6bb4e18be812b06babd9c464908358e297381e722aa3083170cd38432c49a4cd51a0db3d630ada6d9342deba27976b6e587e8521160ac4a2663b2fb0181828623fc543d26edec105816662ddff682f8855328b648421faa38f0c82eb7a9fe421c0c9d76abc0cd6733a350595a55b6ca0f4298ff93ba3c93259557bc9c767e4f8e244e234c635152fad67ee81e71e3d20e65377dd3757ac792e5429aa1a4ae33b8ef8d9deefde34171f99ded4d70b516c01f194a9371d0d66ad45b17e679bb4eb656bd466545a19c2a580a3aed52f964f50321733e0d39181be307d122699c1e050000",
    ],
    [
      "ETag",
      "496OYzW9UHL0i+Whoweq0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` < ? LIMIT 1",
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
      jobId: "grouparoo-job-116-1592525998233",
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
      "0000000002ffa5945b6f9b3014c7dff329107bd9a42681900b548aba28cd36a45cba84b4eb2e4a8c39a46e0153dbb4abaa7cf7d9900b51b3addadee05cfee7e773ecf35cd134fd8e24817eaae93e59dd67c09ededc525f3f511e1068a53c7d7f34ffe285ec7adec45fb910f3bb2bebe763b75b44913c9ba3388da0ca69c630f0d3f9acb662344b11a3b42a05aba6d9ae9a2da7d16ab41cc76e585691cc210a8724b953123742a4fcb45edf82d45694ae224029e1354ce39dbdfed0a8a78cde0216bc7e58b72e4bf1fa5f2a9f4514234168d29dcf0a8a8c035b408c48a438f6e981fffe50bf46505c5bc9e8078201614cb34428b64206d32424ab8ce5e252e9591aa53987defd960cfa6c301cf43dad3f998fbdb74b142bb9e53b0d716db160c0b348681fa69391b64c65f51bc4812fb5ab4f83e9405a180d49040b122cb5ae76a6f5c6e79ab60c9080a5f63d330c0b4be3d01db99e66e67479e500b82049cee7213f821295f46e9aea1e19e84e428920215136618b8ed146a66d387ee87770685b2d3f34c0f76dbfd342966f60a709cdc007545610aa76918f129a389665829c4c00cd30301dcb0e3b280c033fb0a538187ed3761c07db48df28ac77e7796444c039e129e564d374fd6aea7a8385379d8ffb3d6f503e7b886447cf0bfac3931f1c49c8269569ffd496174429235442e5e375c7de60daeb7bee650943deb521ac107e9addabdb16a288c33e1b3114830036a2811a8e7e3199b99e3b19f7867b85fcfa5c6c23b90cfbb683dd9fa9ace63da587a32ea650581566bba9977ceb93a32a9728ca8ec83c6cccba79a05139a2f62f74e76a88ff0fd7301a46d568c84df01bcacdd78f4aa9882ef7c7864eff3c1f4caf556eee539e2984c020c1fbb2af78412ab170bf663fcaf8edb25229725fed00b89066f99a31df97c70c8ab74de26222b960db741a4eabbd1594894cbc88b00cbbb98d78b1b0542d882111db66148bab",
      "e8e4fa00292be1e4692a5cbec5b13bfe98c357d6955f0325fb5977060000",
    ],
    [
      "ETag",
      "CbMUXTfrYU4cZsttUkW3xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1592525998233"
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
      "0002ff4d51d16e8230147de72b48f73a92217393253eccc56d2ec4389c3e6c31a6d40bc30197b565460dffbeb680fa427bceb9b7f79ec3d1b26df293161bf26093284d7e2be0fbab04e4bbbe8420aa4c0a7594580820d7ba1a244d74f5eeed7eb9f4fc60968507f92c0fd167c4b6bbe1b0a912ec1b72aaea8e0a291ca7906d84c25f06db2d6fb482e6a05f5cafb919685e6835b92f8d36997e8c5fc6e1a594e3c648d345103c8e823169a5da9c2bf5adcd2a5b8c42888143c1e0bc50c9710b4c4e8c7341f332034760c5198876886e6ce4846355528ee828ca71dd3bc7edfbbd7eafeffb839ee775f519322a532c74cb624e4e0b4894340b71a7ed13b7c98737b049a3cb82c417015d46a4a43fddec911355b7b795d5a1d579d8682f41cc382a33028c85dbc10de9d27842ed56ea3024afc0d08caa1ff69a4ac5c5341360d5d63f1482bcf31c020000",
    ],
    [
      "ETag",
      "wJ7VV39LPlRztFtzbZbcjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "cf4b7282300000d0bb642d0e20287417a8fc3fd5d212d83021041b61e42b084eef5ea7ef06ef0930217418b2b1a9e80dbc81058bea966cdd46d17858f8e6bdb1cae000a9842ddfd72ea8668805b5f33ee97bc7e6343deeb988d2c98d3b61fea638f2d92e30cc24cfcb9393aef5857886aa7f558a11a376f9845e4ece752c91fd78429dc08b325f499dcda68f194ad7c01571c5f54d2105923dc37399999115421612abab8f490da301e2c47ba051f03856e083104e69728dd7e167c5c28dac0ad6718aeef41ecbe2116c007db4aca743c65eb39dacaa1bf0dfccc6a5a5afab46714f7bf0fb07d39ddbe905010000",
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
      "Fri, 19 Jun 2020 00:23:13 GMT",
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
      jobId: "grouparoo-job-117-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d54db6e9b40107df75720fa1a5f30609b48566339a4b114e314e3445555a1ddf54036c12c61175751e47fef2ef80275d4e60d66e69c3973d9796f699afe42d3b57ea9e998c6af05e46f5f9e19d62f9407048a95274bad7bb47d1a0c62ef26b99fe2676a4e683c1e5751b44473b4c912687356e404f8e56ad9897356642867ac2d09db86316c1bb6d3b7fbb6e38cfaa659813924d11d4d5f14c5931019bfec760f423a3163710228a3bc43d8e668ef6efbdd2c67cf4004ef36f376652adefd4fe6af09234850968e57cb4a45c1210f618368a2749ce06b7cd5e4ef50b4e9c4327a4b09204258910aa5ada2212c8d685ce425b9647a9746692e451f7f6b067de9deb9d340232c29366998a20d5c686b245028de32d06efcc55c9b79370b7f3e09660b2f5c4e6fddf9a4335ddcade6de527bbc757d571308275062b5b17655fe79f2a75454665b0317342d3505ca5b5322bdfb46ce3e18e291429148551cf661e1b03740c6a8e7e0080f4934326d1cf500e3111edac8c43de25860ad31a03a43a9acc2a394a58e3540083beb101c30436be85821c6a613c2d022f6100c643ba6be47ef8eb5fccea9806bca33c6e9bec9faa33f0bdc30f057de7412b8f5ba235424e2ba52deacba518e900daa2bfd574bce14653965525439ce9917b8fe641acc1e6a32e46edd418cc8dbf2556d5784120e2734cae5ac04e473b65683d1bdc9dcbd3e81cb4db93f047119f1f3a8f3548e0c54f32f6b399b7f334f2017abd18a6a3695555f06feccfba6d79cbb8f691e50527cc0b3dd9bf54c76eb49769837b85a7f7ffd6ad572e8f2b1eee5e9df57aeff43614b9ff2f810410e293965fdc4ea2a60e5fecc3192f187cba020f2381c057021cdf219117e4a4f72a81e15ad5a5f110e0cc71c19a303a104e6e22cc2327af621e2ec3aa85cb081541c9a515d89aa93bb86a4a226a784a970f910bcfd1477ad5deb0f302317c4e4050000",
    ],
    [
      "ETag",
      "pn4Pavh66gNFlPCbji3Aig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1592525998233"
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
      "c9",
      "6e",
      "c2",
      "30",
      "10",
      "bde72b907b05897da9d443d85aaab087435521649249489bc4a9ed8010e2df6b3ba1e44215a948bdc49e796ffce2b19f4f5aa1803ebdd0468f05b4f5dcaf18e8f1c1053e979305b0d8e74c0c110919a0a26403c7ae644fa7ae376ebdf5973dfd6b6fcf07c6b0f6ba3b3c3d252c66ed20c082771291881d0f7c9b89f85dc58534afb010072057b4881f07e14685c52bcc8f918297e6623479ce2201b11532591986de35062885cec5db2236e678a396fc9b841ad75a2a863ec876010e50082db8ee3aa2e4032c3e52ed6538887c283112530b582a220b13d8a5248e3025a42452a54aa555aa343ad546b5d1e9b4abb5da85ef130b738f84b264b5443f3fc009c7fe821c648f513339049a8449cb2fbd404ee614b22d12d05e167b36fac99d8bbf104713b359cf70d3d95acb54e65615ad723c1f36ffa42ece6487c515cfa79dde933b89e380c421cf293d34a6fa1d372eec9077d37ddd1cdc4b967161869cbae6683c589afa7876535c7cd75713748f1cd88c12613206ca5a9572bddd6835cbe862d51e9156e4d2a99cc6a0d216164fd68bc745cec13e03edac7d032dec047c1e050000",
    ],
    [
      "ETag",
      "OOgiM7YDSCAqvdQELF3Jhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` < ? LIMIT 1",
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
      jobId: "grouparoo-job-118-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffad945b4fdb3014c7dffb29a2ec65d368eb5c4ad34a885590b148bdb03605b18b5a27390986340eb6034288ef3e3be925156c43d3de9273f99f9fcfb1cf5343d3f45b92457a5fd30392dc15c01edfddd0403f501e1038519eab31bbb1cfb2087f1cf2e4ec6a6ec745963f1c1d5551a4cce67895a7d0e4b46021f0fe7cd64a182d72cc286d4ac1a661384da3d3333b66a7d7734ccbaa9239a4f19064b74ae25a889cf7dbed0d482ba1344901e784b742badadadbf7663b67f40642c1dbfb75dbb2146fffa5f2714a432c08cd8ee6b38aa2e0c016b0c224551cbbf428f8b4afdf2278d54a64f43d090187212d32a1d82a99906631490a568a4ba5276994e6127afb5b33e83377e89ef8dac9643ef6df2ff14ac92d3f68986b8b05035ea442fb3c9d8cb4652eab5f630e7ca95d7e71a7aeb4301a931416245a6a47dab136189f6ada920b89bbd47e140859a1b40ebd91e76b468957968e800b9295803e0e52a86149efbaabde2b13dd4a28112c24cb3a6cd14587d870502f88836e183b56278811048113743bd80a50d8b3c18e02c07505a16a57f938a3193263c74128302c33082c0c76cf416005a6d935a3c8801e444647f61be96b85e7ed791e1811704a784e3959775dbf9c7abebbf0a7f3f1c9c077eb678fb16ce96945bf7ff2bd2309d9a43aed9fdaf2822867844aa872beded877a78313dfbba861c8cb368404878fb33b75dd629c72d86563865720808d68a486a39f4f669eef4dc683e14ea1bc3fe79b482ec3be6f617767aaabf98ff9fea8ab295456857968eb35dff3c1ab2a17382d5e91b95f9b75634fa3f18adabfd0f9dec89df983d1f97f203491899ac894fbc037ccbe61f50dbb8510faf61bf0f5d7cf46ada42e77ca1a58ff3a77a7572ab7f429cf14626090853b88373c2a9558b9dfb23365fc6681a914b9c3b600f2f90b221f78c877e54306d57327ab6a48a5e0a1d1b3bb8ebd1194894cbc88e8207bb33a5e2e31550b5690894d33aa655675f2790fa9a8e194692a5c3ecfb1373e2be11bcf8d5f9efe5fa98b06",
      "0000",
    ],
    [
      "ETag",
      "YNrj4Gnda+LsgGYU4funpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1592525998233"
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
      "0002ff4d51d16e8230147de72b48f73a32c191e0121fc6349b89718ee9d3624c850b4381dbb565c618feddb680fa427bceb9b7f79ec3d9b26d72c8ab84bcd86497677f35f0d34306f24b5f22107521853a185602c8a3ae06493353fdc9f2098f26e12159ae9e068c2702a3e378dc5689f8174aaaeace0a299ce6502442e11f83ed8e375a454bd02f6eb7dc0c342f749a3c31a3cd16abe9fb34ba974a4c8cb458cfe7afe17c4a3aa931e7467d1bb3ca1e7711a4c0a18ae1b610e3b88758ce8c73414b568023b0e631886e886e6ce58c63cd28477414e5b86ee0b8fec8f33d7f340abce1b0af2f30a632c74ab7acbfc97501899216111eb57de2b6f9f016b669f45990f42ea0fb8894f4af9b87e44a35dd6d63f568731b169e24882547654680b1f01c0c489fc61b6ab7528721790d868ea9fa611fb9545c4a0b0156635d00fce4d8a51c020000",
    ],
    [
      "ETag",
      "bOpiDrRDBkdPT/0prdsoRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "db7243400000d07fd9e7c8b8240d7d5b894b6a8be810eb65075d9741ac65049dfe7b333d7f707e409ae7741cc9d437f401dec19acada3edf3bbdaa8bb0787a598cd3c0aa3d999143e735f95d1fae4586cff0d35cd8d15fbcb6949faaaf85e64552db260ad9c9f748de45c825d712b6c92cf126b07b99399b99c0152aa78cd9a5cb71d19dbb1e9b06222d9f48d07ef40d46558e1d55fc42095b06d825762a89e3a10a8ab4b2be93cea8a3edf27c5bf02d140c57161a731e90102a717f43e3f8a0de9c4d359f372bbefb10ec005d58cde948ead74c396ada0efc37c9b432fabaea34e59483df3fdd2bc80f05010000",
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
      "Fri, 19 Jun 2020 00:23:15 GMT",
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
      jobId: "grouparoo-job-119-1592525998233",
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
      "5b",
      "6f",
      "9b30147ecfaf40ecb509b9d140a568cd52baa2256425a4d5344dc83807ea96606a9b4e5595ff3e1b7281a5dafa669f73beef7ce762bfb5344d7f22d95abfd0f48824cf05b0d74f8f34d2cf9407044a9407fa19c676efdb975b624c3199bac01634198fab2852a239dae429b4392d18067eb15a7612468b1c314adb92b0ddebd9ed9e69f7cdbe69db567f30a8c01cd27846b22745f12044ce2f0c632fa493509aa48072c23b986e0e76e3a56fe48c3e0216dc68e635642a6efc27f3e794622408cdc6ab65a5a2e0c042d820922a1d47f83aba6cf27708da741219fd4230208c699109a5ada2c1348b4952b0925c32bd49a33497a20fd79a415f3a33671a6898a6c5260b33b481336d8d040ac56b0edab5bf986bae77bdf0e793c05d78e1727ae3cc279de962b69a7b4bedfec6f11d4da0288512ab8db5cbf2e6c94ba9a8ccb6062e48566a0a94b7a6447a778d74df19e281429148551c7661e1a87b8e7a56d78ee26884636b60467117a2c88a46261a445d6c0f61b88e00d5194a65151e65341bc4e743b48ee3100dad6138c4962d4f6614c6d160609aa63400d677e8eda196df8c08b8223ca79cec9aacdffb6ee08481bff2a693c0a9d71da322155795f266d58d72846c505de9bf5a72a22867844a51e5385d2f70fcc93470ef6a32e46ecd2041f875f9acb62b462987231a31392b016c4ed76a30ba37993b574770b929dff7415c46fc3ce83c962303d5fccb5a4ee6dfcc13c8c56ab4a29a4d65d59781ef7a5ff59a73fb3ecd1d4a8b77785e76663d97dd7a901de60daed6dfa75fad",
      "5a0e5d3ed69d3cfd76e5f83f14b6f4298f0f3130c8f031eb075657012bf7473e2319bfff1914447e0e07015c48b37c46981fd36306d5a32255eb2bc2f39e6d8eacee9e500299388db06c7b1f71f23ba85cb0814cec9b51fd125527b70d49454d4e0953e1f22178bb296e5bdbd61fe2908e9ee4050000",
    ],
    [
      "ETag",
      "e2ncc91KBQi/CciCIerOog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1592525998233"
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
      "ffc5545d6f8230147de75798ee5513517163890fead866e2b7f8b02cc654b8280e286bcb1662fcef6b0b2a2f2e2433d90bedbde7dc1e7adbd38356a9a00f3f72d163056dfced670234bddb029fc9c91c581270268698440c5055b281e3ad649bae536fb69b46b28789f996f6adfabe65cd3a9d8cc59c1d8458f00e2212b1e743e03211bfabb892e71516e110e48a0e0992305aabb07a81791a2b7861cf07e3972212125721e3e570d8ed0d2d9443c7ea75111773bc564bfe4d428d2b2d17437bb29983071422072ebb8e29d983c307aabd0c877100354612ea00cb456461066f2949624c09a989544dd7cd9a6e980da36198e643a3d93cf103e260ee9348962c17e8fc039c701cccc9b7ec316a678740b3306bf9a917c82b9c42b14502fa92c5be8bceb963f517e2606cb75b056e3e5b6985cad2aaa2559e1fc0fa9fd4c599ecb0b8e2e5b4f37b7223711c9224e225a59f8793ee0d372eec5076d34f5ddbba952ce3c20c2575edc1c85ad8ddd1f4aab8f8ae2e26e8a51cd89412613206ca5a7abdf560dcb7ebe864d53e9156e4d2a99c26a0d20e164fd6abcf45cec30103eda8fd00eafc2f381e050000",
    ],
    [
      "ETag",
      "9dc03635ujeO9YyCE0j4EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` < ? LIMIT 1",
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
      jobId: "grouparoo-job-120-1592525998233",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad945b6f9b3014c7dff329107bd9b426010249a8547528a51b539a7484b4da4d893186ba054c6dd3aaaaf2dd67432e44cdb66ada1b9ccbfffcceb17d9e5b8aa2dee13c528f1535c4c97d89e8d39b5b12aa47d2833848a4472f6f6e3f7f8c1d9bbd37c3d9ecdba33f721de7e4a48ec25536035991a236232585881dcf679d8492b2009490b6106ceb86d6d62ddbb00ccbb68746af57273394c6639cdf49891bce0b76dced6e403a0921498a40815907926c6bef3e18dd82925b0439ebeed7ed8a52acfb97caa729818063929fcc673545c9105da00ce05472ecd2a3f0c3be7e0783ac9388e8070c1180909439976cb50c24798c939256e242e9591885b982defe360ceacc1dbba340194de793e0ed1264526ef94e014c592c286265ca95737f7aa12c0b51fd0630c496caf527d77785859218a76881a3a572a29c2acee44c513612ca8f52d37a5098c7de8517287ac557d58e10e338af080310a6a8c125bcebb17a078e742b2145001730ebb0c540eb037da8d9611c0e603cec5961aca1301c86030bf4420dda2632a31081a60297b5eb7c90935c374ccb0a0dd38c903588cc61047ae6c01e9a9111db304456dcef0da00e2375adb0daf6f348314767981584e1f5d8d56bdf0bdc45e0cf272327709bbdc740ccf4aca6dfef7caf252e86d4a4fdd3585e1015141301551db037095cdf1905de550343dcb6314a007c9addcbfb168394a15d36a020431cd10b12c9c3512fa7332ff0a61367bc53a82ed0e5269289b0ef5bd85d4f4db5e0a9d83feafa146aabc4ec9b6ac3b73a3aa87205d2f280ccc3daacea7b1aad036aff42773e9e3aff89af6399bf415c7ffd6c35e455b13ed668ea97b9eb7f95b9954f7a7c14238a72b82bf88ae723136bf76bd6a388dfec2a9922d6d516807161164f19b25d794851fdb07156b75b09f60d4d37fbd646502452fe32a23fd036112ff695ac853294f3cd30eabd554f72b587543670aa34192e1ee2c49b7cace05babd62fbcdcbe1776060000",
    ],
    [
      "ETag",
      "1uhjJGfA9s+4bSSZwRCEAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1592525998233"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d51d16e8230147de72b48f7b8912986642ef1612c669a3133712e5916622a5e1007dcae2d33c4f0ef6b0ba82fb4e79c7b7bef399c2cdb263f59b9238f36d966e96f05bcbe49412ef5250451e552a883612980dce96a9034d5d5f5fe78cb96dee7fd6beacfe4fcadf0bf02769c4cda2a11efa1a0aaeea490c24906f94e28fc6db0ddf1462b6901fac5cd869b81e6854e933533da7cf1317d9986d752813b232dd641f0e40753d2498d3923f56dcc2a07dc869000873286cb428ce301623937ce052d580e8ec08ac720ba21bab195538e15a31cd15194337407ced01bbb9eeb8dc70fee68d4d7e718539961a95bd62b725e40a2a47988476d9f0cdb7c780bdb34fa2c487215d075444afad3cd2e39534d778bac1e4597617e2d41bc73546604180b237740fa349e51bb953a0cc92b30744cd50f9b65527109cd05588df50f558a543f1c020000",
    ],
    [
      "ETag",
      "yhw+pQ5V/KgBHtIMmBYLpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Jun 2020 00:23:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
