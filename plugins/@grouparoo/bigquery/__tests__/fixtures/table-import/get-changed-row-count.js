const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1642552551468";

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
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d07fe9b31a501ce9de201a409439830abe34a52d97564ab9a880d9bfcfec37e6f987f3049810d6b6a8ab0493e0130c780e676496685674d7c670afdc6508c7e30995424f068e6f9c7ad3a3d4b5f9c3086fc1d216c1dcbcc51575be7093db486e3adf480f594de2d8b52dc3ddf5aa16914e551ae58b83146e5965d4aa766e8fb2fcf2014fa726c806be2521dde5fa99079d1ba4e555330e655daca7ad995a97ade9613e5d0b154749771e5322f7234385457dbfb744bdda7a1a79e8650fbf49a507c72bbd2bc8b963b3d565510d1e928ebf09b1194b1fc14e8828718cd9dbdbbf032680f5aa68588b8ad7f6c512c209f8ab8fba41b1d77f9be18635e0e717149f59c019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-1-1642552551468",
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
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2a",
      "c8",
      "fb734d0221e49714ad514adb48095981b4daa6091963a85bc0d436a9a22adf7d8769b256955a0909ec7befdeddbbe3053db232415314b3eca9a662ffed81c7e80c518533b8ad6e95fffdf7e3d5b01f38fbcc95d7bbc2babf99cd00c11a96c44595d38ee4b520544eb7413713bcaeb0e0bc03893a56c71a0efa8e038f35188e8126699eae58f908e47ba52a39edf58ed2dd8cf32ca7b862b24b7871baefedfabd4af0074a94ecbd57ec8188ec7daaf923e7042bc6cbd93600fd5a5211d102b31c2af84f4ce2f3f799bb0c17dd0cc03b46282684d7a56aaa8214849729cb6aa1b3a2e90bd255bef94081bb7217a141785e176554e2829e1909563852fb8a1a97fe666d2cbdcb8dbf9e87cb8d17058b6b773def2e36abedda0b8cbb6bd7770d85e39c6aae3133cef5c98303e827542a566af5b0b96e945ffd597e1c4a43006949db60343287d81a9b93388d47241ddb4e9c9a348ec7f1c8c1766c92c9800e929862e06951cdc2252fedfe70989a168e92896d47033b25d1241dd9913970122b36e3519226e870869e0553f482c98a4bd63a84eefc65e846a1bff516f3d0d52da4b8ced5455b58d3c0db1a153408a04f7a3a3451c641a9b17be985ae3f5f84cb5bb79df08a6698ec832798718a7349018d0598a7a858f3040c43de7ced5e00584fece73128d1f4cf0b6a3c6faa7863f9891ec2009b72957ea320f497de952ee788b8c579ad21bbf603094ab848a0e6c35fc0c186b639d0cdd6f57fa1f6caa72915b4245fcf12c03af0d57f76dc7a80c2de838a547086c521b2d12082b60bc474af27b6ed5813a4c1427d880d0793a3654d8e26232d68a95e1b6ab71efa6cc56a79024110",
      "66ef69ab0eff00334240be73040000",
    ],
    [
      "ETag",
      "pVtR+ZkG62S5ygEsHvm1hQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1642552551468"
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
      "93616f9b301086ff8bf771442a2bc92aa47e48b67443a3499bd00fdd5421d73e9833e363b6c99445f9ef3bd3369dd649544270773c27ee5e5eefd90f65244bd9bdaa7f7660776f6af0d7215881ebb477f468d138601103cf6b22e38b0c4fe50693b7bf6d3eff5accaebfdcded6e7e74438f11d1aced23dab1468e958fa6dcf0c6f80da04eaae31659f45ccefda505c17ab6cf189f20665c81737793e9de57376888e8d927b5ef6fc2bdaee0e11dbe0fd0a2ab0600484595a8b1b103e0b6b3adeb41a460e3b2bc0b11eee5fd416bb965bc4115546f1289e24efc663bae26472469c46c1bd4243e8cd9ac6631e3dd72bfce58224a744d83ea685abfebea5ba92fd2221cc16c524e9e7fb1be04260677c390856ca3aff20de13f828c2bfa4e6af04e94f293d04d56024d8214ab52597d282738324ba92b7ed119b2d97f94b558cb4a8e430b8550380f6db2370912fa7ff9396fcf5acd5c769317f41384fae39224576395f17d3cbabc0dd3d1a61b6f3e0ae2c92a91c043fc527c9d9f8fde4e4c1621f30d88ebe937adb41c404a793f2597996565c3b38fc0114d5500087030000",
    ],
    [
      "ETag",
      "1FIo3djo4+zrLEZTBQKYYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:54 GMT",
      "Server",
      "ESF",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-2-1642552551468",
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
      "000002ff8553794fdb3014ff2a91f7cf36d1366d9a5e1262156410ad073429686c536b3b2f99218d83ed7442a8df7d2f09e51012489662f9fd8e77e581dc8a2c2223c244725780baff7423193920606882afee8fb3883bd43fc9af03793ab80d53fb747b7178880851b234dde42934b42c14073d5a06cd44c922a74aca060a353a8d76afdb715d3ced6e6f80340d693c11d92d92ff1a93eb51abb5b76e26522629d05ce826979ba7f7d6b6d3ca95bc016e74ebb5630b4d74eb5dcfa354726a84cc0e9701fa171ad40a3654a498c1333162df5e2b3705dd3413046f0507cab92c32536685125c66b1480a55a992d103a9b27c71218137f18e43eb78be9c85d6e7af5fac7160ad569586f57d319f5a6b055caa48afadab336fe1596b6dd07d6dfd2e6cdb01eb085d22d04664954748590aa5fe6317fcb7ad2f09d4500d7570d5b77bb43db0872c667d1e0f1c97c5363036607d973acce6c32e7423061479a654af5834935997b96cd8899c2872dc1868dfa1718c0a51af43dbe052e602a74ebf47c9ee80fc53c2c089d0b9d4a2ee05b95af8a1b70a17cbd9f138f4aa32625aa4e6a44eae2ce2659e068b44d03b75edcaa890e85436d69f85de627c1cfa975e3dcb092494df077738cd98a61a104d15dd8001359511368d9ccf033ff4e7b3f10419d580cef7084d46bf1e9e09e17d5e75d9545f12fa532f08c7d3f32a873de892a64585dad617d21ef6ed86ddc613daf6a83a4ddbb6afc96ef70789b891b52eb9587a8b9fa47e5a400c0a32fef154115c053efaaff65b8e50dc7374c18d32025788ebd2832ba857496caaa4f7ec6e7760930aaccc9b983b18ee7b566a948ab081cc3c16546f39d6599b15fa098441dc80993f3bc5e87f95b9eb5163040000",
    ],
    [
      "ETag",
      "5KHdc3aIDpZSoG8kTl0GvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1642552551468"
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
      "00000002ff2d90616bc2301086ffcbedab0515eb9ce0073b8a0a4566b77e1a2231bdd66adbeb92abae88ff7d973a0897bb374ff2bee40e97a24e610ec722ff69d1742f39f2ce3531dab6642b5b43b5451800b2ca859ce5ebe234beecba643abbfeae8257ffed7c5b2e1642587dc24ac1fc0e5981656a61fe7d875a5528d70e074d6dcd4271d73861b3fd0a57612c4245a913b649142d832884c7fe3180331d63ccd060add1bdd8183aa3e68d0b6b55d594e8596a8d460b3ddc1fe486da4619224f146fec8da693b1efcb1a4da633e14ad28a0baa054d3e415c98589531dd242a8c04307d2ba9b3be5e9d3c7481f6ff6cd031da0f43e26bd1590e9ff6efe422b14465d3e200b492bf5817fc9c1f7f1249528d68010000",
    ],
    [
      "ETag",
      "8gHih2kQyU68vxGB759jwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:55 GMT",
      "Server",
      "ESF",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-3-1642552551468",
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
      "2b91f7b54028900624b4229aae4810d610da4dd31439ce25731be2d4765869c57fdfc529ac55a5568a94d8f7debdbb77976772cf8b848c48ccb3870ae4eecb9d88c909014d33bcbddf0d97ddddd3625eac1f13efa9f7e8fcc876d7e3312278cd527453e6d052a2920cd468bd6a675254259542b43051abd7ea3afdd3c1009f6edf7191a6204fe7bcb847f21fad4b35ea740ed2ed4c882c075a72d5666273bcef6c4f3ba51477c0b4eabc55eca088ea7ca8f935178c6a2e8af17a85fa950219c186f21c2bf84f4ce2f3b799db9c6eda1982b79c01654c5485aeabc2144c1429cf2a69b292d1333155befa202b6fee4d438b89bcda1451413770622554d348ef4ab02e83e5c29af997cb603109674b3f5a4dafbcc5a43d5dced70b7f65dd5e798167691ae760b8d6d83a37271f0fa89f80d2bc30ea617d5d2bbff8337b3f949a80d20a9a6074663bb4ebdac3388dcf58eaf606716a431cbbf1d980f6629b0dfbd04f62a0c833a286450b5138e882ddedc71150c78dfae0b2880e9d344aecd44dba31602e97ec4fc85fc9355c70550ac51b87c86d300bbd280cd6fe74127aa6859456b9be680aab1b785da3c60611f4414ffb3aca052ad576cffcd00b26d37076e335139e4346d96ef580334e69ae00d154a2791ae442246818f1270bef02c16662df0f414546bf9e49ed795dc52bcb8ff410075897abcd9bacc260e67f33e51c103734af0c64db7c10094cc8046bdeff461c6e6893835cafbde02769ae02484142c13e9f25824de0b3ffecb0f508c5bd4715a5f18c8bc354adc124340bc44daf47f6e0d4b589014bfd2e86ef8365758e3a236ca0d02f0d355b8f7d3662953a823088b3f78d55fb7f8ca70aa173040000",
    ],
    [
      "ETag",
      "ky9O1yzMLnUxdEz3x6XgyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1642552551468"
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
      "d3",
      "30",
      "10c6bf8b79492ab52c2d53a4bd685981b0f40f6d265ea029f2ec4b70717cc1768aaaaadf9d73b6758821655294dc5d7ea7dc3d797c643f95912c61f7aafad5823dbca9c07f0dc1065cabbda34783c6018b18785e11f9edda943737f3f48b88abfddb385e2f76d9b0baba22c2891f5073961c59a9404bc792ef4766780dd42650b7b529ba2c62fed084e236dfa4cb4f94d72843bebccdb2e92c9bb353746e94dcf3a2e35fd176778ad80eef375082052320ccd258dc81f06958d3f1bad13070d85a018e7570f7a2b2d836dc220ea832b8188c26f1bbf198ae513cb9244ea3e05ea121f4764be3318f9eeb0dfea625d9e88208dbc5b470d9ddf75457b25b2484e9329fc4dd7c7f035c086c8d2f7ac15259e71fc47b021f45f897d4fc9520fd29a5fba00a8c04db47a9a6e0525a70ae974457f0a63963b3d52a7ba98a911695ec07f7aa07d07e7f063e66abe9ffa4257f3d6b753dcde72f08e7c93567244f17f36d3e5dac0377f76884d9c1835b5b245339087e1a0de3cbf1fbc9f0c1621f30d88ebe9378db42c404a793f2597996945c3b38fd01ee63f47287030000",
    ],
    [
      "ETag",
      "WDnfKKEIJc4gv+44PMjL0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:56 GMT",
      "Server",
      "ESF",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-4-1642552551468",
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
      "54",
      "6b",
      "4f",
      "db3014fd2b91f7659b68eb96a4692a21564ad822b5296b53d8d8a6d6719c6048e3623b9d10ea7fdf8d437908011f26598a75ef39e73e9d3b74cd8b04f551ccb39b92c9db0f5722467b88699281f5480517e73f4e42dbbfccddd2e3c3cd11cd07070780e0154b91d53a670d254a4999eacf67cd4c8a724da4100d106ad88d76d7ee380e9cb6dded014db13c1df1e21ac8975aaf55bfd5da856e66426439236bae9a54ac1eecad4da7b596e28a51ad5acf23b620886abd19f3301794682e8a83f90ce2978ac9055b119e43068fc424fef25cb9c9c9aa990178c32923948ab2d0555620414591f2ac944615f5ef90c9f2c905cdfc913f8cace1641e46d6c7cf9facc1cc5a2c8c8675329d8cada56454c8442dadf36ffed4b7964a43f4a5f5bbc4789f5987d6203cb6ac254f5e3751eb10724998d2bc30994424ce5995c57daf829703aa084413c56ae7c2c55dd2ee612f4e6397a6bd7d274e318be35eec3a643fc6d4b3999dc48c004f57ea86450a5124a9edf45ccf4eba943a764a3d30a41e4e3b4eda2618b713a7cb3cd775d1760ffd955cb363aed642f1ba63e87c1a44fe229acec3e120f24d192929737d5c275715f1344f0d4502e88dbab695970b8854b53f08237f3a1846c1995f4f7cc432426f673730f394e48a019a48b2629ac9b148a069e874320ba260120e46c030633cdd2114eaffba7b2444b76bd3656dbe280ac6fe2c1a8c4f4d0e3bd019c94b83dad417d4f65cdcc06d3811c67d739a18e30bb4ddeebd2e0e8574edb785edff5680216dff0002de4e4d46dfe7fef427aa4d539632c90afafe6601d838defb03ecde2340e1454214d87dcd618da9aa6250c9ea75e62bd3b81dbbdbb1f791014bfdc267f7f06e6e9546a5c856acd0f705d5efb1ea947195ea01044ed8c23008bf82f71f797199a20d050000",
    ],
    [
      "ETag",
      "BsIZWXFN4Ehl7u9iCvBclA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1642552551468"
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
      "30",
      "10",
      "86",
      "ff",
      "cb",
      "ed",
      "ab852ad549c10f5a6493159d9d7e1291989e5d5d9beb92eb8648fffb2e75102e776f9ee47dc91dbe4a93430ce7b2f86ed1de9e0ae4ad6f32746dc54eb6868c431800b22a840c27cfe7b0dab87db299ee4c9260f666b6f3d94c08a73fb15610dfe15262953b880f7730aa46b9763a696a0d0bc5b7c60babf56ef9b2cc44a829f7c27a9fa6f345ba84eed80de04ae70c2f68d168f42f3696aea879e5c33a553715068e5aabd1410ff70785a5b651962810258882e1241a8dc7b286d1642a5c455a714946d0fd07880b13ab2aa35f890a43016cdf4aea4b5f7f441ef93cc77f74716374ef96c4d6a1770c1fee09f9442c49d9b63800ade42b5e4b7eccdd1fbe4efb5267010000",
    ],
    [
      "ETag",
      "067b0lOsUCO8TnCCeRKnQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:56 GMT",
      "Server",
      "ESF",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-5-1642552551468",
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
      "a3",
      "40",
      "10",
      "fd",
      "2b64efab6da92da53669cea6e24962a952aa31970bd95d066e2bb0955d348de97fbf61b13dbd4b342181dd796fdecc9be1953c8a322113c244f65443b5fbb6918c9c10d034c3dbdbddd257eee649dc142f0f0b956db43bcc67d3292244c352b4d8e6d051b2ae38a8c97ad5cd2a596f6925650713759c4e7f343c751c7cfac3d118690af2f45a948f48feadf5564d7abd8374379332cb816e85ea72591cef7bcfa7bd6d2537c0b5ea7d54eca188ea7daaf93d979c6a21cbe97a85fab5822a86828a1c2bf84b4cd8f9c7cc5d418b6e86e067c181722eeb523755610a2ecb54647565b292c92b3155befb202befda9b471697795d9471490b38b112aa69ac775bb02ec3e5c2f283cb65b89845fe328857f32b6f31ebce97d7eb45b0b2eeafbcd0b334653918ae35b5cecd29c003ea27a0b4288d7ad45c37ca6ffef8ff0fa521a0b4823618bbf688f6c7f6194b99cbd3f1c061a90d8c8d99ebd001b3f9d9108609038a3c236a58b4946562f71dc61d37ee8f07763c64368b19e710a72318f4ddbe3b70539bec4fc84b25345c08b5954ab40e91fbd08fbc380ad7c17c1679a68594d6b9be680b6b1a785fa3c60611f4494ffb262a242a3576fb41e485b379e4df79ed84af21a37cb77ac219a7345780685aa1791aaa854cd03012cc16de0582cdc46e0e4145263f5f49e37953c53bcb8ff40807d894abcd9baca2d00f7e98720e883b9ad706f2dc7e900ab8ac12ac79ff0b71b8a16d0e72bbf6c207d25e8590420525ff7a96083681affeb3c3d62314f71e5594c6332e0e578d06afa05d20617a3db24767ce801870a5ff8db9f6d83d58d6e468324201a57e6ba8dd7aecb315abd51184419c7d60acdaff01c5c2446773040000",
    ],
    [
      "ETag",
      "QyOIs7jqiPmwYMsgjt74lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1642552551468"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93616fda301086ff8bf77141822db02a523f8495ad482914089fa62a32f62533737cc1769810e2bfef9c766c5a27a55294dc5d9e53eedebc3eb31fca4896b09daa0e2dd8d3bb0afc2a046b70adf68e1e0d1a072c62e07945242e4fabfdfda63eaceee2e16e28df6fe190ae6e6f8970e23bd49c2567562ad0d2b1e4db99195e03b509d46d6d8a2e8b983f35a1b8c9d7f3c557ca6b94215f6cb32c9d66337689ae8d927b5e74fc1bda9e2e11dbe36e0d25583002c22c8dc53d083f0f6b3a5e371a060e5b2bc0b10eee5e5416db865bc4015506e3c168127f188fe91ac5931be2340aee151a42b71b1a8f79f45caff1272dc9461f89b05d4c0b97ddfd487525bb4542385fe493b89bef6f800b81adf1452f582aebfcb378bfc11711fe25357f23487f4ae93ea80223c1f651aa29b894169ceb25d115bc69aed874b9cc5eab62a44525fbc1a3ea01b43f5e812fd932fd9fb4e4af3f5adda5f9ec15e13cb9e68ae4f387d9264f1f1e03f7f46284e9c9837bb448a67210fc341ac637e34f93e1b3c53e63b01d7d27f1b68588094e27e55e7996945c3bb8fc0246c48d3987030000",
    ],
    [
      "ETag",
      "oOyQjHSmqQD40b0d+UeqAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:57 GMT",
      "Server",
      "ESF",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1642552551468",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85525b4fa34014fe2bcdeccbeec696520bb44dcc6e53714352a9025db3fb526786033b0a0cce0c35c6f8df3dd0dad59868c2c370ce7739b747722baa94cc0813f95d03eae1cb8d64e48880a1394627175b7d69ff8da23092576771320c0a767b7f728208d1b2342deb02fa5a368a839eade341ae64535325651f85fa6edf76c723c7c1cf1ebb13a46928b2a5a86e91fccf985acf2cebc57a904b9917406ba1075c9687b8b51d59b59237c08db6de3a5a68a2ad0f3d7f149253236475b28ed1bfd1a0365052516005ff8929fbf95679206839c811bc151c28e7b2a94c5b154a705965226f54a74a668fa4abf2d583c4fed25f24bdc56a1d26bdafdfbff5e6716fb3e9347a67d1eabc77ad804b95ea6b944b411b517562096505b442fb7683f7336e09d4500dbbe4c61bbad49e0ca72c631ecf26c70ecb86c0d884790e3d66433e1dc338654091675af58e452b59a5ccf63c2f75c039ced2114cc743ee7828e550466d6f9472673465cc76c9d311b957c2c0a9d0b5d462d734b98a82c4df24d13a5ccc13bf6b23a34d614e77c5b54dbcaed3609308faa0afa7362b243ab5130cc2c48fe68b24f8edef96b6849cf287f80ed796d14203a2a9a2251850e732c5a1918b551c24c12a9c2f5b2dbc84e4a16ee3976b3ffab30f459081828a7f3e64047789cfeef9e5ba108af7852edae03f6e94ebd6832bd86d56946d2d07b6371979a4032bf32e37755dcc1daeaa5584122ab36f68775de4696fd6e8030893b89030087f61f619fce8b6a5db030000",
    ],
    [
      "ETag",
      "8PvsQ1ZRRNRoWFST0Ilbkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1642552551468"
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
      "4b",
      "c3301086ffcbf9d1165ad98a0cf6c149d1c156b573e09031b2f4563bdb5e4daece52f6df77e98470b97bf324ef4b7af82eea0c26b02ff29f164d779323bfb92645db966c656ba8b6081e20ab5cc8a00a6f79b95ce5c9e663f3d7cc838e5fe2d3742a84d55f582998f47028b0cc2c4c3e7ba85585726db7d3d4d62c14778d13e6c97bfc14a72254943921592f160fb3450ce7edd98323ed533ca0c15aa37bb1317444cd7317d6aaaa29d1b7d41a8d16067838c80db58d3244be287ee487d1e86e3c96158ea27be14ad28a0baa055daf405c985895299d242a840298a195d487a1fe3a397081b6ffecac63b4af86c4d7a2b30caef68fe422b14465d3a2075ac95f3c177c9dcf17195cbfae68010000",
    ],
    [
      "ETag",
      "0m1+tMMSgNYXYxpI0ytOEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:58 GMT",
      "Server",
      "ESF",
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
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb642d4e0445d31d88f803c50f15574cc4a080869810023abd7b9d5ea3be3bbc17c049428488abb220147c8116eba89b744fd08a6af8dc074b2dbcdc99283489edd4d9ec65c1034152659dcd6f2bcc1076956936e3eb82ab806fa491d651cf39ca67c64894964316382155db96b8dea187ee4573494623075355e059946a2ef4cdacb7bdb779b19af44ffedc5eb9ebd6cca87bc0fef3ba2e8f7b446ca82c79cb53da8e3d43b3c434f0eaba3fd6a166f207bbc8465543a6c9b9e1c709ace81466d45acefaae384f54eeed76485f2c36855ea6a6af23fb2173fd3608bb1f1fff0ee800d2b08c131167efedc600a10ef8ab1f572d23efff36c19c70f0f30b25146cda19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-7-1642552551468",
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
      "537f6f9b3010fd2ac8fbb3cdaf86008914ad514ad768095981b49ba609197330b70427d8648baa7cf71da6c95a556a2524b0efbd7b77ef8e27f2c88b848c48ccb36d05e5fed38388c939014533bc5deef6c1ee62fa17aee7fe43fef56c3b3ffb6edd8ec788e0354bd2f52687961455c9408e56413b2b45b5a1a5102d4cd4b25b3dcbbc180cf0e99996833409793ae7c523927f2bb591a34ee728ddce84c872a01b2edb4cac4ff79ddd4567538a07604a765e2b76504476ded5fc9c0b461517c57815a07e25a18c604d798e15fc2726f1e5ebcc6d4ed7ed0cc13bce803226aa42d555610a268a946755a9b392d113d155bef820813b77a7a1c1445ead8ba8a06b383712aa68a4f61b30aefde5c29879d74b7f3109674b2f0aa637ee62d29e2ee7ab851718f737aeef1a8ac63968ae31362ef5c9c303ea2720152fb47a585fd7cacffeccde0ea526a0b4842618d95d8bf69cee304e639ba54e7f10a75d886327b607b41f77d9d004338981224f8b6a162d4461db49ea383d2b4a865d33324d8b463175fa517f30046aa7bd989a29399c933f255770c5e54648de3844eefd59e846a1bff2a693d0d52da4b4cad5555358ddc0cb1a153688a0777a3ad4512e50a9b67be685ae3f9986b33bb799f01c32caf6c116679cd25c02a26989e62928172241c3883759b85708d613fb760c4a32faf9446acfeb2a5e587ea28738c0ba5ca5df2408fd99f745977344dcd1bcd2905df3414a60a24cb0e6c32fc4e1863639c8edcaf57f90e6ca87144a28d8c7b344b00e7cf49f1db71ea1b8f7a822159e717198ac355809cd0271ddeb89ed0cac21d1e052bd895976ff68599da3ce086b28d47343cdd6639f8d58254f200ce2ec3d6dd5e11f4b75542473040000",
    ],
    [
      "ETag",
      "OvySv2CxeFLRjlK+qL+X6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1642552551468"
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
      "9b",
      "30",
      "10",
      "86",
      "ff8bf7954861055a21f543d2655d269ab409952a551572f141dc191fb34dba28ca7fef9976d9b44ea21282bbe33971f7f27acf7e482d58ca1e65fdb303b3fb5483bbf1c10a6ca79ca5478bda020b18385e1389617497c57737279bf8d2eaefe35f9bdd2c793e3f27c2961b68384bf7ac92a08465e9fd9e69de00b595a8ba46177d1630b76b7d719dafe68b4bca1b143e5fdc66d9649acdd82138360aee78d1f31f687b3804ec091f575081015d829fa535f804a59bfb352d6f5a05238b9d29c1b21eee5fd406bb961bc4115546a7a330893ec7315d61949c11a7b0e44ea226f4764de331878eab153ed3922c3c21c2f4312d5cf5f72dd5a5e817f1e17c9127513fdfdf002f4becb42b06c14a1aeb5ec5fb0dbe89f02fa9f80741fa53520d413568016688926dc1853060ed2089b6e06d7bc4a6cb65f65e152d0c4a310c6ee500a0dcf6087ccd9693ff494bfefaa3d597493e7b475847ae3922f9fc6ab6ce2757d79e7b7833c274e7c05e1b245359f07e0ac7d1597c9a8c5f2d7681de76f49dd4990e0256723a29dfa46369c59585c30bf869239387030000",
    ],
    [
      "ETag",
      "o14XL5XQ3h5GsnJ0xhyE6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:59 GMT",
      "Server",
      "ESF",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1642552551468",
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
      "00000002ff85525b6fda3014fe2bc87bd9a642484a0820551b826c4a476183b0db0bb59d93e0368953dbe95655fcf71d07ca5a556aa53c38e77c9773bb27d7a24cc8883091ddd4a0eede5c49464e08189a61f40b73c3f3adfff3f76236bd1d6cff7a49169f676767881096a56951e5d0d6b2561cf468bdea644ad6155552b651a83d68bbfd9ee7fbf8b9bdfe00691af27426ca6b246f8da9f4c8711eac3b9994590eb412bac365718c3bb79e53297905dc68e7a9a38326da79d1f3432e3935429667eb15fad71ad4060a2a72ace03f31611f9f2a77042d3a19826f0507cab9ac4b63ab42092ecb5464b56a54c9e89e34553e7a9055380b27716bb258cfe3d6dbf7ef5ae3556bb369345a9f968b8bd6a5022e55a22f512e016d44d988c594e560850eed46cf676c09d4500dfbe426e8f6a93be80e59ca029e0e4e7d967681b1010b7c7acaba7cd8835ec28022cf58f586454b5926cc0d8220f1c13f4d130f86bd2ef70394f229a36ee025dcf7868cb97db23b217f94303015ba925aec9b263f96511c6ee2e57a3e19c761d3464aebdc4cf7c5d9261ed769b04904bdd0d7ce668544273bc1681e87cbf1248ebe87fba5cd20a3fc6e75836b4b69ae01d154d1020ca80b99e0d0c8d7c52a8aa3c57c3cb35a7809f15d65e3dfd6e1f2d721b484141494fcf52123b849bc76cf0fd78550bc2f74d106ff71a35c5b0fae60bf5951d85a8eeca11f0c490356e6592ef03ccc1dafca2a4201a53934b4bf2eb23b98d5fa08c2242e641ecd3f63f61fc4ff11b4db030000",
    ],
    [
      "ETag",
      "Kb1EJh5XZOLDv8hx2dgTJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:35:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1642552551468"
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
      "0000000002ff2d90d18ac2301045ff65f6d5b2555444f0414556a116adfab488c438adedb69d6e327111f1df7752853099b939c9bde4013f797d81319cf3ecd7a1b97f64c85bdf24685dc956b6866a8bd001649509d9dc8a4def76b82ee3792f9c7faef7eb5d31dd4e2642587dc54ac1f801698ee5c5c2f8fb01b5aa50ae9d4e9a5ccd42f1bdf1c22ade2fbe168908155dbc101fa2683a8b16f03c3e3b50d039c1140dd61afd8b8da10235af7c58abaaa6c4c092331a2db4707b9019728d32448128c128e80efbbdc14056b73f1c095792569c532de86107e2c2c4aa4ce84fa2425700d3b6923a6debcdcba10f747cb3b33ba3dd18125f8bde327cd9cfc9476289cac66107b492bf58e6fc9a9fffbc7fe33368010000",
    ],
    [
      "ETag",
      "pvjP2vUhHNC20C/MTMSjAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 00:36:00 GMT",
      "Server",
      "ESF",
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
