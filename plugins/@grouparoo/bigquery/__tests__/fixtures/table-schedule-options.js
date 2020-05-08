const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1588955387743";

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
      "0002ff1dcfdb6e82300000d07fe9b333da82a57b13c30830406012e085d4522eab085298a0d9bfcfecfcc17902ca1897321f3bc1afe01d2c1492355b3b9da62f150fefe44c3299502db110de9681952abb285d4eeade290d19e88e7e2927cbdf51dbb3274819eea649a9e6de6b488cc8b13ea68cb2e1fac8c639c78752293e5ae886c59718f1777311726f64b51a695b32f1db129e542df4bb7340cc9fa4f28a7474d1a3cb3ce425a8f5b33a5aaa107e1e1a535a9b5847019e1d44cc02f6452d0d61bbed2d82b170c4db06e33b032bc0e7be19b8cc9bd70ca984acc07f331f979ebfae3aa7031fc0ef1f1ed649a705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:29:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-1-1588955387743",
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
      "cfaf40ec716dc817012a456b94901629211b21ada66942c618ea86608a4daaaaca7f9f6df2014bd5ed0dee3de7dc73afaffdde52147583b348bd51d410272f252adebe3c9350bd1219c4402232786ddd699bafb374d94bdc8df7bc19ef40f77534aa5058b229d8e629baa6a42c20a237eb553b2948998382906b2e78ddbdeeeaa669e97adf348c41bfa25294c6739c6d84c0136339bdd1b4a38d76424892229063da86647b8a6bbb9e9617e4194146b566558d17a2daa775bfa504028649365aaf2a0f25454580b600a7c2c5991c85b74df53606db76c2d13b0c118090941913ce2a1948b218276521c5b9d23b0ff2b0b47cfaad05d4953db727be02495a6eb320035b74a544808180bde5489979cb85e2b8b3a5b718fbced20d56937b7b316e4f96f3f5c25d298ff7b6672b0c8429925c65a4dcca3f97ff4847b25a8428c399f4e48b6ccd09cf1ec6e87c7080270921c25d51748005466708ba66c70ae3d080b1d9d7c3b883c2d00c0d1df4c30eb40668108508d415a4b38a0f3292819ea1772d330e3a03a4070308ba81694451301cf6c208a25ecf1a76d5037b7fea0516083034c53427141fa6ac4e3c7becdb81330b5cdb9edad373ebaf05be403f7a0e07fbdeda9d70567d4c31285336ad1a6d0ea9d13de3f3ac37f6d9042f1ac80b4cb82979fa8eebdbde78e23b0f351b7c15e72801f06df5229631062945673628f8d132542c4824ce5175c78b7abf72b1be1f4194237e9d7c9edbe140b12eb2978b7569d6f1f91e3646511d65155557bee7b8776a2db9ff58e601a4e5073abb43",
      "58cdf9b49ef8846943abf5f7d7ef56ad86ca6ff6c19efa636d7b3f0557e644c643312a5006cf55ff63d305b14afffbdde2e8e3332208fc253995a78c87f99d83f45c5c2eaeb881b81afc49d034f5e15190130b7689b00ceb88b8784a442db445193b8ea27a52aa39ee1b96ca9a1d4913707e0ddcc319ee5bfbd61ff10b7a410d060000",
    ],
    [
      "ETag",
      "iU9G/k+FlO2gNkRjkAva1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:29:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1588955387743"
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
      "00000002ffc5545d6bc230147defaf90ecb5c29c9f1bf8a0ae6e6eeafca8301822b1bdd5bab4e9927422e27f5f9256ed8ba330612f4dee3de7e6706f72ba370a05f4e9872e7a28a0a5bffa8a81ed6e5620c66a33011e13c1e512d1900332151b045e297637f05e4a771dd7de96fdd799b5eeb6c9f47ddc6c262ceeac21c092b797918c3d1f88cb65fca1e3429ad758880350273a94c441b8d0a17986c52ed2f0d49ef4864f5924a0ae4686b37ebfd5ee5b28850ee66511170bbcd047fe4d42af732315431bba9c80070c4207ce5d478c6ec0113d3d5e8e83884091d39839c053115598c02b46e308334a8b32552c154bd546e3be5a2d37eaf54af9c826d4c1c2a7a12a984dd1495e5081c9846ed584512db9029684c9c08f93405ee60eb20392d0b72af65d74ca1dcc5f88bda15dab64b8e96e6e642a73abca41793e81c53fa9cb1b5963f9c0f369a7afe44ae238a07128724a77fb6fad2b362ecd90b7e9c7966d5d4b960b69859cba766f604dedd66074515c7ee76713b47702f8885169310eda58a5db4aa35aafdda2a3513b541951289f0a16834e3b58feb09e7d21731e261c8c83f103e3e18bcd1c050000",
    ],
    [
      "ETag",
      "FmfJ12CdTw3iKUEhFBlSXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:29:49 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT * FROM `purchases` ORDER BY RAND() LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1588955387743",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d535b6f9b30147ecfaf40ec659b96404248a052b56509ed98d254256453f7428f1d43dd02a6d874caaafef7d9900b59a76ee2099ff35dceeda9a369fa3dcdd7fa89a6239a3c54a4dcbcb96348ffa0224440a222a3af298987f997956ffc487f411cdc65d4b93a3d6db2688de6901529e972569598f093d5b29794ac2aa064ac2b09bb836edf761cd7b62d673c1e5a0d9493349ed3fc5e11dc0a51f013c3d8d9e8258c25298182f21e66d9fedd781c1845c9ee0816dc385635a410375ed5fd98320c82b2fc74b56c3c549c9411c980a6cac501bc469f8ed97b14b25e22b31f29268031ab72a19c353498e5314daab226974c4ff2513ed796f7bfad077de9cdbd69a8bdd7ce82cb0beda6901ab7c009bfd12e839917689fafb560b298bd7da7cdfd0b3fd4fa662d5493ac091734afa54240296909c8e8b63bfe5fe6b2a7502420a4de362d1a9b23e83ba68b6234c6b163d9283609420e1adb602113bb43325c23026d06a1b41b3ce42c1f3bc8746c401158a34134b45c14b9004e6461704d0b811dbba06fd1cffb5a7049409019e505e374db3c7d1a7893d08bfcb368e179336f7628fd67495f647f0f7c991c06abc554a2da6d8aa14ac5ac29f4b84947d50bd9cf7661af75f0450145499934550fd55f845e309986feb7960db961739200de2c1fd48ec59072d26971e8724fc34da1a6a85fadbce05a69d4311509484c4a92e3c390ff63c00ad884ff7d85327b77140a20ef622fcf857c96ab86f941bc9e975a3c9ad58ef784aefc768412588a3f335cd31c0c77192f0e4369918ce462d78ae6409a7e3f1f59aa5a766a984a97d35ff88bf3da7ce7b9f31bc08a443edb040000",
    ],
    [
      "ETag",
      "6Jlef4nHUI/ZlzafRjmi8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:29:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1588955387743"
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
      "000002ffcd574d8fda3010bdf32b507a2c203b1f24a9b407d8a62c12cb52c81eaa0a5526183634c4a9ed14b12bfe7b9d105854d1d54484b697241e3fcf4c9edf4ce2975abdae7d0fe3b9f6a1aecdc2e58f94f2edbb25959fb3873115692485ba252c16546b64682ac93243afee9f57a1b81d0d7bd472bd2fa3f777c9b3beb9b9d9a344f044d744e15ed4488d17218de6428dbfe6e37a61cfe762b2a699c7709eaf2dac729be4d6fed0f77adef8746acde6f9d4f07130e874079e564ced1a7f769e70b60823faedba41521e3c9182a9df424cfc717fd8bb340259b33496e7fc7f1a3c74fc4bddcf893c9bfcc78eef5dea5b48b24ece39f7fbf7dec4efdc8f4011f2fbb456c4d2566c36a60bca691cd057b9a9dd5ed140f6735d0b1537a24dc1d4ee505104c916eea7979ca509e18c3595a9a937b1e538ae65198e6d9bc6011db180c890c5d982c789760c2f9924d1986d32696b18edc5cff7e3bdd40f4c688b13f59f12a4a67e66ab5ded68da35dec09940dc88120e84a296ed00a13ad25113e94d044d17b72c07eb16325cd33b5d533c4d6b271ec05c6168ba1888eb46299d51ceb7501a5aba51923178ce8a31b5c8762b650cba5f3a10d749545101b1460b43557b64ab8cbe748ccd6af5d5ae98adeb162338ddbc181dcbc2959205ad0428ee81937809d5166e99d04d38d2054d24a7cb72ad4a2bd1fe8785a85ea86c212268be3959c8b6ad4ab5058d0eddd289e46453aed3a3b2f22ac5986be24a1983ee2f14f717be8c089a4b4618520dacd25e0fee9dff49f742659a3d725d5c69b3877e9aa01ab876f72af3d38571db78bbd5abebf4f5bfbfbb95548c3853a70a41f3b384dbb6b5c3b1e49665c70e999d4a244f696e0e883a17df8552d9162412b4b6abfd028c20379f830f0000",
    ],
    [
      "ETag",
      "jMzjisCPNGe59EYP+Hpz2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 08 May 2020 16:29:50 GMT",
      "Server",
      "ESF",
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
