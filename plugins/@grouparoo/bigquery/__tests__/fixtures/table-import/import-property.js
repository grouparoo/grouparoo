const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475664267";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffedd3417282300000c0bfe46c184588a437114441052d0e940b1320a5018b84a42076faf73afd46dd3fec3720794e8548e5b5a60d78012351b1922b5e6b98eba1f4dc147652d02de3f2d56ea39e31ecb29b03e5e2881da4e1cd48ab7d12d51ff51622f4753c75308ed090a9f119ae50743084c6b9115e622a67b1a55d78bf5dcb1d64f5beac3297133d5c58a6b0ed7b23ed1dabf27279cfb424193c82dc538fdb26e6853e3b045356bc41dfd9e5e9b10b4ba2abd65e77db20f59c3a4afcebfcd325731644c686a16478c776a2ea6a358df935e3abac398da2f2cfe6a5c895a7a7ff0b4c00bdb5aca322658fed731de309f8ab9fcab1a58fff26251dedc0cf2f5e3aa73519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-1-1636475664267",
    },
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
      "14fd2bc8fbb8262421210f295aa394b64809d980349ba609d9c650b78053db74aaaafcf75d4c93b5aad47ec2f63de79e731f3ca37b5ea5688608cf1f6a269fbedc0982ce10d33887d79fd1aef677be6fabeceb6d7e45b8bd2e37f97c0e08deb0142ef705eb28514bcad46c1b757329ea3d9642742051a7dfe9bb8e3b1c8f5c773870c74053acc856bcba07f2add67b35b3eda3743717222f18de73d5a5a23cbddb8f037b2fc51da35ad96f156d1051f6879adf0a41b1e6a29a6f23d0af1593092b312fc0c17f624acedf66ee725c7673003f72ca30a5a2ae74e30a525051653cafa5c98a66cfc8b87c754091b7f296b1454551975552e1929d5929d638d14f7b665d869bb5e507979b70bd88fd4d9044cb6b6fbde82e37abed3a88acddb5177a96c6a460866bcdad73730be002fa29539a57463d6e9e1be597fef8ef87d210405ab136988c7b2eee4f7a53929131cd26ce88643d46c8848c47d8213d3a1db2614a18069e11352c5c892a75c870da73c6c9008f8609a09c64eaa434c946381b117730e8bb2e3a9ca1bf926b76c1d55e28de7608ed423ff69238dc06cb45ec9912325c17faa235d614f0daa3860201f4414d8726ca052835edf683d80b17cbd8bff1da09af588ee953f40033ce70a118a0b184e66926d7228586a160b1f62e006c26f6fd185468f6fb19353d6f5cbc6af9891ec3001bbbda7c5114877e7065ec1c1137b8a80de4b13d20c9a89029783efc011c6c689b03fdd87ae12fd43e852c639255f4f35902d8043efbcf8e5b0f50d87b50511aeeb03854351a54b27681b8a9f5c406fa0419b0d4ef62a3a1736c5993a3c9c84a56e99782daad873a5bb15a9d401084d907a655877f1f729aeb73040000",
    ],
    [
      "ETag",
      "XSWuIWII/sf+hgGbi/MmOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475664267"
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
      "000002ff8d93614fdb301086ff8bf99a4a740dc914890fed28ac5a684b9b6a420845c6be04332797d94ea7aaea7fe71c58996052f892dc9d9f53ee5ebfd9b35faa962c610faafcdd82d99d94e06e7cb002db6a67e9d5606d81050c1c2f89bc5adf14f132ba0d773fb3f8c706371797f351797e4e84158f507196ec59a1404bcb92bb3dab7905d42650b7559d7759c0dcaef1c575b69acdaf28af50fa7cbe49d3f1249db243706c94dcf1bce33fd1767f08d8133eaca00003b5003f4b63f009849bf9352daf1a0d038bad116059077707a5c1b6e106714095c170308c4651189f4551f8258a89d328b8535813ba59d378cca1e37a857f6849361c1161ba98162ebae796ea4a768bf87036cfa2b09bef5f800b816dedf25eb050c6ba17f1fe82af22bc2735ff244837a5741f54422dc1f451aac9b99406aced25d1e6bc698ed864b1483faa524b834af6835bd50368b73d0297e962fc3f69c95f6f5a5d8cb3e907c23a72cd11c966d7d37536be5e7aeefed508939d03bb3448a6b2e0fd343c0dbf9ec5d1e98bc5bea1b71d7d2771a68580094e7fca77e55852706de1f00c4180b45287030000",
    ],
    [
      "ETag",
      "GSQf7P6Y4yWT7KUoUDFN3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:27 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-2-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536d6fda3010fe2b91f7b540206f80843a46b32d12850e42bb699ac0762e99db1053dba1ea2afefb2e49e98b2ab59fe2f89ee79ebbe7ce0fe4461409191226b2db12d4fda76bc9c809014333bcb5eddbf47a32e9cdbf98d93f87655d7fffd31d8f468810154bd3ed2e879696a5e2a087ab653b53b2dc5125650b13b57aadaeeff86ee0f9bedbf303a469c8d3a9286e90fcd7989d1e763a47e97626659603dd09dde672fb74dfd9f73a3b25af811bdd79add84111dd7957f334979c1a218bd16a89faa506b5862d153956f04c4cd8e7d799db826edb1982f78203e55c9685a9aac2145c16a9c84a556725c3075257f9e24096e1349cc4d626154a9b7541b7b0b1a8b6d66b05bacc8df575313fb7360ab85489de5857dfc34568591b916cac91756a4da3f328b6ba28958036a2a88562ca72a8441ead88defa5f11a8a11a9ae03ab07ddaeddb0396b280a77dc763a90d8cf559e05187d97ce0829b30a0c83355f69a450b590c062cf0072ef31c2f8194b181df0d52c7830098edf5fdbe33f05c44d8e47042ee94307026f44e6ad11842ae16511caee3c56a3619c761dd464ab1efb3a6b8aa8997751a6c1241eff475a8a242a252e56e348bc3c5781247976133d0296494df2f6f71a429cd35209a2a34dd803a97099a462ee6cb288ee6b3f11419f5942e8e084d86bf1f9e09f1fdae76d9d4df4acb776bfd23e092e6658dd83707d22587c31f44e0ee3564f263152e7e91e66a01292828f8c7a343701df8e8051df719a1b8d1a8a20dfee39e705d697005cdbe886d5ddd911d388e4f6ab0326f626edf391a53e5a832c2160af3d850b3cfd8672356ea27100671ccb368f60da3ff019bdb58ca4d040000",
    ],
    [
      "ETag",
      "00qfjCC2OBtNz3bg16vX4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475664267"
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
      "6d",
      "6b",
      "c2",
      "400c80ff4bf6b585a95d65821fa6c8e62832eb44c61039cfb49eb64dbd978a14fffb72755fee92dc93e4e15a38abea0023d8abfce250df9e72b44b1fa4685c610d5f3555062100b42267727a71af1317fdcc9b41939d7b9fe9f2b8395ec763268c3c622960d442a6b0381818fdb6508912b96db7d3dd44c6ecadf695d5773a5fbc735ed2c1e78b7592bc4d9219dcb7f7004eb44f31438d95443fb1d6744269e75ed688b22e3034e4b444031ddc3de49a5c2d3451c895b01ff6e2411c0d5fe238eac743e60a92c22aaa185daf80b758b2a248e9caaad0634077215b67ddd97079a6157aa5ed3f3db959345f9a78b341bff4f92130252f6559d66a870148c1bff1a1ec23bfff018c998bb66a010000",
    ],
    [
      "ETag",
      "Cqu9Bu4YIv3vfk1JRQhWhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:27 GMT",
      "Server",
      "ESF",
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
      "41",
      "72",
      "82300000c0bfe46c192208a6c7508a82c154542c974c808028224244d0e9dfebf41b75ffb00fc09344b42d93e7a3a8c03b18f8182989e2d553fc79cb4fdb018d4bcea98f1781fe016f31cf455aeeeba8d35141bcf280b2de771ae69a2cb73349d4185b765eb9eee055133c656f77b884dfa67d82c7e02af77dd1f5591892266241697788dc2fa1038551a56ab22aafb8a3932594980d4433a02f7c27292ca15ea863ae0f698b5604677467dcaded59cea31d2d68da451bd6d6dd45a6c1da8967a1aea99b991aa375e5ccc7db26938bd4e63bfde899d0d6965fcacbcbff054640f475d1889615cfedda04a111f8abcfe4508be77f2c78231af0f30bd54c117019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-3-1636475664267",
    },
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
      "000002ff8553db6ea33010fd15e47d6d121208b948d1364ae9365242ba40dabd68858c1958b780136c5a5555fe7d07d3645b556a9fb03de7cc3973e199dcf332215312f36c5f43f5f4e54ec4e48c80a219be8e9c62622a73fe63623e067b67bf366f7e8de7b3192278c392b4d8e5d091a2ae18c8e936e86695a877b412a283893a56a7ef588e3d1a3a8e3d7046489390a72b5ede23f9af523b39edf58ed2dd4c882c07bae3b2cb44717aef3d0c7abb4adc0153b2f756b18722b2f7a1e6d75c30aab82867db00f56b09550405e5393af84f4ce2f3b799bb9c16dd0cc10f9c01654cd4a56a5c610a26ca946775a5b392e933d12e5f1d48e0aedc45683091d7451995b4803323a18a46ea6907c6a5bf591b4bef72e3afe7e172e345c1e2ca5dcfbb8bcd6abbf602e3f6caf55d43d13807cd3566c6b9be797841fd04a4e2a5560f9be746f9a53fcbf7436908282da10d4623d3a1fdb13989d378c4d2b1358c5313e2781c8f86d48a4d36b1c14e62a0c8d3a29a454b51524a93218c9d68422d2bb26dd38cc6d4a1117352c74a6dbb0f034a0e67e4b1e20a2eb8dc09c9db0e915b7f19ba51e86fbdc53c74750929ad7375d11a6b0a78ed51618108faa0a64313e502959a762fbdd0f5e78b7079e3b6135e4146d953b0c719a7349780685a61f314546b9160c388375fbb1708d613bb3e062599fe7e264dcf1b17af5a7ea28738c0c6aed25f1284fed2fba6ed1c113734af35e4a13d900a98a812f47cf88338dcd03607f9be75fd9fa47df221850a4af6f92c11ac039ffd67c7ad4728ee3daa4885775c1c261b0d5641bb405cd77a628ffb964d34b852ef62036b786c5993a3c9080594eaa5a076ebb1ce56ac9627100671f69e6ed5e11f522acfbb73040000",
    ],
    [
      "ETag",
      "76m90t0AX90wSq6qM0VZ8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636475664267"
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
      "02ff8d93516f9b3010c7bf8bf73822354b4a56a43e244dd62291a425f4a9aa908b0fe6cef8886d326551befbceb44ba775127d81bbf3efc4dddf7f0eec87d48245ec4956db16ccfe5305eece0729d856394baf06b505163070bc2272b8e4e9767bf1f93a9eb75b7de56e7ecd371777979744d8e23bd49c4507564a50c2b2e8e1c034af81da0a546dadf32e0b98db37beb8c9d278754d798dc2e7abfb2499ce92053b06a746c11dcf3bfe036d8fc7803de3530a2518d005f8591a83cf50b8d8af6979dd2818586c4d019675707750196c1b6e100754198c06c370148e27e76138fe124e885358702751137abfa1f19843c7558a3fad97644484e9625ab8ec9e3baa4bd12de2c3789585e36ebebf015e14d86a97f782a534d6bd88f7077c15e15f52f10f82745352f541156801a68f924dce8530606d2f8936e74d73c266eb75f25e152d0c4ad10fee640fa0dcee047c4bd6d3ff494bfe7ad36a3ecd16ef08ebc83527248b978b4d365dde7aeef1d508b3bd037b6b904c65c1fb697836fe7a3e09cf5e2c7685de76f49dc89916025670fa536ea46351c99585e36f90b8123d87030000",
    ],
    [
      "ETag",
      "1MaRqq9+GIDuqnCtHzDS9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:28 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-4-1636475664267",
    },
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
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7b5c93404320891475554b57a4246d0969354d53629b03730b38b14da6aaca7fdf019a5e36a97dc2f87c9773f31379106542c684896c5b817afc722f193922606886b7d72284ebf26638db3ace20fb2a2ea38b1dcb261344889aa569b1c9a1a365a538e8f172d1cd94ac365449d941a18edb71bcbee7fa03cf738f3d1f691af2742aca0724ff3666a3c7bddec1ba9b4999e540374277b92c5eee7bbbe3de46c97be046f7de3bf6d044f73ef43cc925a746c872b25ca07fa541ada0a022c70c5e8909fbf65eb92b68d1cd10bc131c28e7b22a4d9d154a7059a622ab54a34ac64fa4c9f2cd812c826970165bebdcecd616d5d66aa54057b9b12ea2ab99b556c0a54af4dababb0ca2c0b2d622595b13ebc49a86b330b61cf448401b51360e316539d4eacf3d08ff6f7c4da0866a68832bdff6a833b4472c653e4f87fd014b6d606cc8fc01ed339b8f5c7013061479a6566f58b494251db061d2f76d361cb184fa3e77fa89035e4a4776e2d9344d297507bccfc9fe88fc51c2c0b9d01ba945db0972178571b08aa3e5fcec340e9a32528a759fb7c9d545bccdd3609108faa0ae7d1d15129deab686f338884ecfe2f036682739858cf2c7c5166799d25c03a2a9a2051850339940bdc0578b300eafe6a7536434e3b93e203419ff7c7a25c48f9ba6cba6f9d65e9edbf81f00b734af1ac4ae3d1087ecf7bf10814bd792c9cd32887e90f62a82141494fcf3d121b8097cf6740e8b8c505c6574d106ff714fb8ae3db882765f44d16477600f4758480356e6dfd8c8b1fd43636a8d5a110a28cd7341ed22639dad59a55f4018c431cfc3f9778cfe057c6e859a46040000",
    ],
    [
      "ETag",
      "PiIePnQ8Mq115g+iHRFvbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636475664267"
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
      "0002ff2d90516f82400c80ff4bf70adb40c48cc4075c66b68538a7732f8b312714c40185bb434308ff7d3ddccb5ddbfbda7eb91e7ef32a81008e79d6b428bbbb0cf5a70936a8da422bbe6aaa148205a845c6e4f5ddcd9c6f92cb95bb6e4e0fce0527d484f339132a3e612920e821cdb14814043f3d54a2446e3b1ce4389131ddd5a6b28c3ec22f4e4b4a4cbada4551b8885e60d80f169ce9b8c1142556319a81b5a433c6facdb82a51d605da8a5a19a382111e1f32496d2d2491cd15dbb31d7fe27bb3a9ef7bae3f63aea058e89c2a46775be02d9ab4283674655370189063c8d2e9785eb8ec4e9fee1dd748edfff945a751ad25f16e8566ede34de1998c96665d2d5bb42016fc1dafb9bee5c31f6d668ef66b010000",
    ],
    [
      "ETag",
      "wJ2g1VorFN2Pqh/1ve3oqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "ESF",
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
      "d0bb64ed38141049772d054186544434ba6110a2f24b28c198d8e9ddebf41af5dde17d83bc2808e7d9c81a42c12b50b90ea7c5f4a8bd61a1dd372b78350fd97db1673a1c4ae61eba26853ddd09cf445b1a844bbf46b073d4698edd8c08973a2837bddbad8c225955ceec92c405a69a2f2cfd7ac22f617e775b140437753a17966e6ff5c3e24b13216ecb63f4f129125fd174edcb75dd658ebd95ad6de2a57d19c39e47f33325cc60a38c51d2781ba2563cdc1765ce51573b96c7cf69d0b6b136d4da6c346de3087dddb0768b92c806a558268a592b41cc865531dfb8d3a7a77f074c00917d35109e558fedc60cc209f8ab9f8daa278fffef241fc8007e7e01d5bd93c319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-5-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f7953e68d3a4ad548daa0d50a94d599a82b6698a1ce7261892b8d80e88a1fef7dd38b40321c1a7d8bee7dc73ee232fe49e9709199398670f15c8e76f772226270434cdf0f5feeff9f257efb60fd5f28acf2f064f55d6ef6693092278cd52b4d8e5d052a2920cd478bb696752543b2a856861a2d6a075eaf41ddb1d388edd735ca429c8d3252fef917cabf54e8d3b9d83743b1322cb81eeb86a33511cdf3b8fbdce4e8a3b605a75de2b765044753ed5fc9e0b463517e564bb41fd4a818ca0a03c4707ff89497cf63e739bd3a29d21f89133a08c89aad4b52b4cc14499f2ac92262b19bf10e3f2cd816cbca5370b2d26f2aa28a3921670622554d3483fefc03a0fd62b6be19faf83d5345cacfd6833bbf456d3f66cbddcaefc8d7573e9059ea5699c83e15a13ebccdc7cbca07e024af3d2a887f573adfcda9fc5c7a1d4049456d00423b7ebd0d3617714a7b1cbd2617f10a75d88e361ec0e683feeb2910d761203459e11352c5a8ad205e88d46713f725de646364bd3284ec18ed2f49432e8da69421db23f214f926b9873b5138a371d2237c122f4a230d8fab369e89912525ae57ade18ab0b78eb51638108faa4a67d1de50295ea762ffcd00ba6b37071ed35135e4246d9f3e601679cd25c01a2a9c4e669902b9160c3883f5d7973049b895d1d828a8c7fbf90bae7b58b372d3fd2431c606d579b2fd984c1c2bf30760e886b9a5706f2d81c88042664829ef77f10871bdae4203fb65ef093344f01a420a1645fcf12c126f0d57f76d87a84e2dea38ad278c7c561aad660129a05e2a6d6237be4dae62fd554ea0fb1e1707068599da3ce080594fab5a066ebb1ce46ac5247100671f6be69d5fe1ff8f18bc573040000",
    ],
    [
      "ETag",
      "kzFLZ2h3euLPiDG5wug30g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636475664267"
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
      "6fd3301086ff8bf99a8a96b5298ab40f2d94519436a3cd10084d91675f32af8e2fd84e5155f5bf73ce46410c29fb92dc9d9f53ee5ebf39b29d329225ec4e553f5ab0875715f8cf21d8806bb577f46ad038601103cf2b22575fa6bb6febaf62771f5f1d8699c8469fe6afabcb4b229cb8879ab3e4c84a055a3a967c3f32c36ba03681baad4dd16511f3872614b7f966b9bea2bc4619f2f54d9acee6e9829da273a3e49e171dff82b6db53c41ef06e0325583002c22c8dc507107e19d674bc6e340c1cb65680631ddc1d5416db865bc401550693c128be88c7d3491c8fdfc453e2340aee151a426fb6341ef3e8b9dee04f5a928d2e88b05d4c0b97dd734f7525bb4542b85ce7f1b89bef6f800b81adf1452f582aebfca378bfc12711fe25357f214837a5741f54819160fb28d5145c4a0bcef592e80ade34676c9e65e973558cb4a8643fb8573d80f6fb33f021cd66ff9396fcf547abf7b37cf18c709e5c7346f2e56ab1cd67abebc0dd3e19617ef0e0ae2d92a91c043f8d86e3b793693c7cb4d83b0cb6a3ef24deb61031c1e94ff9a83c4b4aae1d9c7e0172c6625487030000",
    ],
    [
      "ETag",
      "MV7kYNXckh6Gy0OcO1JB/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:30 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-6-1636475664267",
    },
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
      "40",
      "14",
      "fe",
      "2b64f6d516e805da268d6b147789b52aa575379b4d3b0c071c050667064d63fadf3d80f512130d0f0c73becbb9f144ee7811930989787a5f81dcfeb815113920a0698ab7f2546eaffdd3c79bed997356aefedc3a6a7576359d2282d72c45f332838e129564a026cb453795a22aa914a283421da7633b7d67e00e1d67d0735ca429c892192fee907ca375a926a6b9b7eea642a419d092ab2e13f9ebbdf9d0334b296e8169657e7434d144995f7a1e668251cd45315d2ed0bf5220d790539e61066fc438faf951b9cb69de4d11fcc01950c64455e83a2b9460a248785ac946954c9e4893e5bb03597833ef3834365ca8352dcb8d4195b15e4b5055a68dd3e0e2dcd8486042c66a635cfff602cf406cbc31a6c6a131f3cffdd0b0d12706a579d1b88434caa07678e983ffb9f935816aaaa00dae5dcba1f6c81a4749e4b264d41f46890551348adc21ed47161b0f6010474091a76bf586450b51d8cc86c48efabd5e3fb29d91853a100ffb23cb66003612e978ecd251427607e451720d275c9542f1b61be43af0436f1d06cbf9f151e835652414eb3e6993ab8b789fa7c62211f4455dbb3aca053ad5adf5e7a1171c1d87feca6ba7398394b2ede21ee799d04c01a2a9a4396890e722c6a691cb8b851ffa17f3a319329a115dee118a4cfe3dbd11c26dd9745937efdacb1934fe7bc08a66558378680fc426bbdd7f44e0e2b56472b5f482bfa4bd0a20010905fb7e74086e02dffd3efb654628ae33ba288ddfb8274cd51e4c42bb2f3c6fb27b61bbd6703c200d58ea4f317cf68da9356a45c8a1d02f05b5cb8c75b666957a056110c73cf7e7bf30fa0c2f79a8164a040000",
    ],
    [
      "ETag",
      "rFryWIFwhyK6KpVXj6sVKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636475664267"
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
      "0000000002ff2d90dd4e83401046df65bc85686d0b91a417a5a9d1848262b9324db3c08054607077d110c2bb3b4b7bb33fdf9e9939d911beab36070fd2aafce9510e7725ea77738851f5b556bc75d42a040b508b92c9d695e92e5a0feed3f2787876ef8f7e981ccacd8609957d6123c01ba1a8b0ce15789f23b4a2412e3b9fe5dc91313d7426f1a328d86f430e1aca4d102641b0f5833d4ca7c9820ba5311628b1cdd0b4ec245d30d3afc65689a6abd156d4cb0c15ccf0fc504aea3b21896c4e6cc75e384b67e5ae1d67f5e8b8ccd594095d51cb68f2013c459316754c7fec0a0b06e47c64ed625e7f39d6b247a374bad1fea051bd49e2c90acdd087abc08e8c94665953614126f83b5e2a7dbd4fffad94e1136b010000",
    ],
    [
      "ETag",
      "n7rbCO5y793TMF7/TBNUMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:31 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd3597282300000d0bbe4db3042b40dfd63d1a2b8319462fcc93024c86e0c288bd3bbd7e935eabbc37b80288e79d3d0f652f01a7c8021d27425565c81cd6597d675b4656251c58e658dc952238d4754efbe1adf6778c1d43228cc39f3dffa3ef072bc333cd90d711ea662df642e0cea1b71d31b677bbcfe2e50356e446a40ad63cc1a92a96a6f6bd8c36115ccc212425c2d3ad1d1f525336d1fb14db9b6369aeacc0c171fc2c3ca3502768212efcee84e559ae657ffcbb2475b9eab63f9999f92cc2199bc4557d67a07cd9dea32281c4674744d3c744c7ceab4c4181da4bcbcfc5f6002782f32c91b9a3db7a3b9ae4fc05f7dda0e823fff9b3c925c829f5f9e1e11a219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-7-1636475664267",
    },
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
      "f77185501e0920a195d1b02241584368374d53e43837a9db10a7b6c35655fcf7dd38a56b55a9fd14dbf79c7bce7de491dcf122216312f3ecbe02f9f0e956c4e48480a619befe1ddc549f67ea47a9be4a6fdebf2decfd7c7b39992082d72c4577650e2d252ac9408db79b762645555229440b13b5dcd6a9d373faeec071fa5dc7459a823c5df2e20ec9375a976a6cdb47e976264496032db96a33b17b7eb7f75dbb94e2169856f66b451b4594fdaee6975c30aab92826db0dea570a64043bca7374f09f98c467af33b739ddb53304ef3903ca98a80a5dbbc2144c1429cf2a69b292f123312e5f1cc8c65b7ab3d06222af764554d01d9c5809d534d20f2558f360bdb216fe7c1daca6e162ed479bd985b79ab667ebe576e56faceb0b2ff02c4de31c0cd79a5867e6e6e305f513509a17463dac9f6be5a7fe2cde0ea526a0b4822618b91d879e0e3ba3388d5d960e7b8338ed401c0f6377407b71878dfad04f62a0c833a286450b510c207187c9a817b9a9db8dfaaee34423066e940c3b9d74e8c6dd2eed92c309f923b98673ae4aa178d321721d2c422f0a83ad3f9b869e2921a555aecf1b6375012f3d6a2c1041efd474a8a35ca052ddee851f7ac174162eaebc66c24bc8287bd8dce38c539a2b403495d83c0d7225126c18f1a72bef1cc16662df8f4145c6bf1e49ddf3dac58b963fd3431c606d579b2fd984c1c2ff66ec1c115734af0c64df1c88042664829e0fbf11871bdae420975b2ff8499aa700529050b08f67896013f8e83f3b6e3d4271ef514569bce3e230556b3009cd027153eb91ed9e76872362c052bf89f5dcd1b165758e3a23eca0d04f05355b8f7536",
      "62957a06611067ef9b561dfe0164b5aea573040000",
    ],
    [
      "ETag",
      "x5hu+CsXpsBrEF4jn/vFUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1636475664267"
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
      "8d936f4fdb3010c6bf8bf736d5e81fd229122f52e8585168210dd3348422635f32774e2eb39da2aaea77df39b06e1a48e14d7277fe9d72f7f8c99efd54b564117b54e5af16ccee4309eed60729d8563b4baf066b0b2c60e07849e4f06a8cdfd34c14a3d5d5e8dbd7cdd3c7dbcb323e3b23c28a1f507116ed59a1404bcba2fb3dab7905d42650b7559d7759c0dcaef1c575962e96979457287dbebc4b927896ccd92138364aee78def1ef687b38046c838f291460a016e067690c6e40b8855fd3f2aad130b0d81a0196757077501a6c1b6e100754194c07c3701c4ea6a76138198553e2340aee14d684dead693ce6d0719de293f5928c89305d4c0b17dd734b7525bb457cb85866e1a49bef5f800b816dedf25eb050c6ba67f1fe802f22fc4f6afe4e906e4ae93ea8845a82e9a3549373290d58db4ba2cd79d31cb1d96a95bc56a5960695ec07b7aa07d06e7b043e27abf82d69c95f7fb5ba88b3f92bc23a72cd11c916d7f375165fdf78eee1c508b39d037b63904c65c1fb697832f9743a0d4f9e2d768ede76f49dc89916022638fd295f946351c1b585c36fe0c87eb787030000",
    ],
    [
      "ETag",
      "1J3oZRTcf2OJ2XVjw/QGgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:31 GMT",
      "Server",
      "ESF",
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
          "SELECT `date` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-8-1636475664267",
    },
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
      "14fe2b91f708bda4cd8d4a1543258c8c52589a82a6696a1de724189238d80e1342fdef3b49281721c1531c9fef726e7e2277bc4cc884c43cbbaf413e7ebb1531d927a06986b7f2a79499b9b777175fcd2e6f6f7c75723a3bcba65344f086a56851e5d053a2960cd464b5ec6752d4159542f450a8e7f54c67ec58aeed38d6c87191a6204fe7bcbc43f28dd6959a0c063beb7e26449603adb8ea3351bcdc0f1e46834a8a5b605a0dde3b0ed0440d3ef53ccc05a39a8b72ba5aa27fad40aea1a03cc70c5e8949fcfdbd729fd3a29f21f88133a08c89bad44d5628c14499f2ac96ad2a993c9136cb3707b2f4e7fe2c323609d5b031a832d66b09aaceb571125e9c1b1b094cc8446d8ceb533ff40d63c3938d31350e8d79701e448689260928cdcbd622a2710e8dfc7313828f9d6f085453055d70ed0e1d6a7ac383388d5d967a633b4e8710c75eecda741c0fd98105561203459e6ed45b162d45e92463db61f1704cc1032bb5dd033af21ccf02b05cd31d9a23c7b1294d6cb2dd27ff24d770cc552514ef5a41aec320f2d751b85acc8e22bf2d23a558f771975c53c4db3c351689a04feada36512ed0a9e96bb088fcf0681605577e37ca3964943d2eef719829cd15209a4a5a8006792e126c1ab9bc58065170b1389a23a39dcfe50ea1c8e4cfd32b217aacda2eebf6db783956ebbf035cd1bc6e110fdd819864bbfd8b08dcba8e4c7eadfcf037e9ae42484142c9be1e1d82dbc0576f67b7c908c55d4617a5f11ff784a9c68349e8f685176d76cf6c7734b43dd282a5fe1033bdd1ae318d46a3080594fab9a06e93b1ceceac562f200ce29817c1e20746ff0322147c0e47040000",
    ],
    [
      "ETag",
      "rJrrg1++kbVCPjhEsFHCKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1636475664267"
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
      "02ff2d90514f83301080ffcbf93a12406466c91e862e710959dc94a831cbd2c18145e06a5bd485f0dfbd325fdabbeb77775f3ac0a7ec0a58c049565f3deaf3558576e7823d9abeb1862f459d4198015a5131996c92a6de4aa5f07557a45516bdfdbec8dd72c984c93fb015b018a094d8140616ef0374a2456e3b1ef53491317b56ae72bf7a5e73d652e1b26d96a6ab245dc378186750d3698f256aec7274f394a61a73bb71aa46b4aa41cf50af733430c1d343a5a9574213795cf16ebd20be8ea3f94d1c47613c67aea15c58491da3d913f0164b56347bfa61510818d053c8cee5747e7339f443dff343cf0f9cd8e1bf27395b348f9a78bf41b7dabf68dc9153b3ac6c758f33c805ffc883b4977cfc03605e31206e010000",
    ],
    [
      "ETag",
      "BIBljNippeXQdLgU4YxWiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "ESF",
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
      "dd5682300000e077d9b5700ac258770c7f406560a2ab6e385336601b8582e2e8f4ee797a8dfcdee1fb06f470606d9b755f927d8217a0a905cd83b96c5c34eb2b6e27530fa2a36a92277f552e24deca45da2a3fcab0ced506b969c7821895ac70c60893ae162ebe789570e634d1c27f46162c096367017155da90f4f13b9a0646fed12a48a3a20bfb30aecffc38ecf8f671ac8357fd90e90b2f64b0e233b28cf337cdceb498372b495cecdbcad9592215c35028635cefa7f5ccebfa49d0bbe1b0c79e93af7b0ac3c93a8ca26d40b8a732694912ba1ba321c73231847977f77f811160d7a63ab136ab6edb6d07c211f8ab9f75ba61b7ff88d1133b819f5fcd78cdef19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-9-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6fda3014fd2b91f75a20a59000125a194d0b13842e8456d334458e7393b90d716a3b74a8e2bfefc6295dab4aed536cdf73ee39f7234fe49e1709199198670f15c8fd973b119313029a66f87af5ad4a768bee7e96fb0033db2dff7ebf9e64e3312278cd52745be6d052a2920cd468b36e675254259542b430516bd83a75ce9c9edb779c5ed77191a6204f17bcb847f21fad4b35ea748ed2ed4c882c075a72d56662fbf2ded9753ba51477c0b4eabc55eca088ea7ca8f935178c6a2e8af1668dfa950219c196f21c1dfc2726f1f9dbcc6d4eb7ed0cc13bce803226aa42d7ae30051345cab34a9aac64f4448ccb5707b2f616de34b498c8ab6d1115740b275642358df4be04eb32582dadb97fb90a969370bef2a3f574e62d27ede96ab159fa6beb76e6059ea5699c83e15a63ebdcdc7cbca07e024af3c2a887f573adfcdc9ff9fba1d4049456d00423d776e8e9c01ec669ecb27470d68f531be27810bb7d7a16db6cd8835e1203459e11352c5a88a29f3a760f6237721270a21ef49d8826ae1b0d07094bfaa7833e4b1d7238218f926bb8e0aa148a371d22b7c13cf4a230d8f8d349e89912525ae5faa2315617f0daa3c60211f4414d873aca052ad5ed9efba1174ca6e1fcc66b26bc808cb2fdfa01679cd25c01a2a9c4e669904b9160c3883f597a17083613bb3e061519fd7a2275cf6b17af5afe420f7180b55d6dbe641d0673ffcad839226e685e19c8ae3910094cc8043d1f7e230e37b4c9417e6cbce027699e02484142c13e9f25824de0b3ffecb8f508c5bd4715a5f18e8bc354adc124340bc44dad47b6db75870e3160a9dfc58676f7d8b23a479d11b650e8e7829aadc73a1bb14abd803088b3f74dab0eff002d37263d73040000",
    ],
    [
      "ETag",
      "GBudvL2yHlNeeH07pxJPAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1636475664267"
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
      "000002ff8d93514fdb3010c7bf8bf79a6aed5ad22d120f2d14d629b4344d5f402832f6259839b6673b6555d5efbe7360dd0448e125b93bff4eb9fbfb9f3df929142709b917d5af06ecee53057e15820c5c23bdc397d1ca018908785a21f97079b15a8bdf3759b35dfd38fb3c349b9b4dffe9f41409c71ea0a624d9935280e48e24b77ba2680dd8c6b46c6a55b45944fcce84e23acfe68b4bcc6bcd43bed8a4e9649acec8213a3672ea69d1f21f68bb3b44e451df67508205c520cc62ac7e04e6e7614d476b23a1e774631938d2c2ed41657563a8d5ba8795deb7de201ec6a3f1491c8fbec463e4a466d40bad10ddac713ce2b5a732d34fb824190c91b06d8c0b97ed738b75c1db4542385fe4f1a89def7f8032a61be58b4eb014d6f967f1fe822f22bc2625fd2088372564175481e260bb28610acab905e73a49ed0a6acc119b2e97e95b5514b75af06e702b3a00e9b747e0225d4ede9316fdf54fabf3493e7b43388fae3922f9fc6ab6ce2757d781bb7b31c274e7c15d5b8da67210fc34e88fbe9e8ce3feb3c5ce74b01d7e27f1b68188308a7fca77e1495252e9e0f0078654107987030000",
    ],
    [
      "ETag",
      "hGFQSixZRuvQJC/3pUZU0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:33 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp` as __result FROM `records` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-10-1636475664267",
    },
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
      "4fa34014fe2b64f6d5b6d072294d1ab72abb4b52ab02d56c369b76180eec2865706670634cfffb1ec0ba1a137d6272ce7739379ec81daf323223292fee1b908f5f6e454a8e08685a6054d4cd557852c4b7f204546c3a991fc5f6623e47046f598aeeea12064a3492819aade3612145535329c40085069639b0dc896b7b8eebda63d7439e82325ff2ea0ed97fb4aed56c343a780f0b218a1268cdd59089dd4b7cf4301ed552dc02d36af4d672842e6af4b1e9712918d55c54f3758c05340ae40676949758c27f66967e7d2b3de474372c10fcc01950c64453e9b62c9460a2ca79d1c84e95cc9e4857e6ab07898365709a185ba551736b50656c361254536ae35b74716e6c25302133b5356e7e045160185b9e6d8db9716c2cc3f330312c74c940695e751e094d4b68f59fc710be1f7e4ba09a2ae8931bcf74a93535fd344f3d964f274e9a9b90a6d3d473e82435996f839da54091a75bf58e452b5159be491d00dfb7590e56969a0e6566964ddd749c5993cc73b2f1d4cff231d91f91bf926b38e3aa168af7b320375198049b245aaf4e1749d0b59153ecfbac2fae6de2759d1a9b44d0077deddb2c17e8d40e365c2541b4384dc2eba0dfe5120aca1ee37bdc664e4b0588a692ee40833c17190e8d5c5ec461125eac164b64740bba3c201499fd7afa4f481eeb6ecabafbb65eaeddf91f00d7b46c3ac443ff2016d9ef7f2302efae2793ab7510fd247d28821c2454ecf3d521b84b7cfafb1c6e19b178cd688317a6391e0a53ad0993d01f0cdf75e53db3bd8933b5490796fa5dce1bfb87c9b41aad22eca0d2cf1df5b78c8df6668d7a016112f7bc0a57df31fb0f1c70ba744b040000",
    ],
    [
      "ETag",
      "opuQIBgSjrBesS05d9RS4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90dd6e82401046df657a2b8db4804ae2851a929a68a3a817b5316659068a0586ee2eb5c6f8eece626ff6e7db3333277b85efa24e2184a4c87f5a5497a71ccdda1e62d46d69346f0dd51aa1076844cee47016edeb6d1c0d9374ff372dce895c7e88f578cc84965f580908af901558a61ac2cf2bd4a2422e3b1e55d7913173696cb29d2fa3cd76b25c7154516aa3f7dd6231992e22b81d6e3d38511263860a6b89b669a3e884d2ccadaf165553a2a3a95512357470f7902b6a1ba1881c4e1cb7efb8c16be00dfc20f05e8201832549610aaa99dd6d80c71832a28ce9ccbae032a0ba239b67ddfa6be3677fd8f7fd913bf2a291953bfc974d2f06f54a113b68b4e3fb0f9519593dc3da46b5d80329f86bde0af3b8dfeefc8d2baa77010000",
    ],
    [
      "ETag",
      "8CEZnTRE8bdZxBiwbcMYaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "ESF",
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
      "d34b7282300000d0bb64ad8e1f50e82ee15788b52841281b064204058112f988d3bbd7e935eabbc37b808852c67978ab72568237708f96f28cce702d21bdbf0847fa7154892625359cc7edbdd4cc320cd4b5a928f08b88dcdfed8959792e92f1a573368576c87bf124a899ef8cdb3d7c37b21daeabb5bf5595a583337f1a17626f20bb9f132e16368ebb1ca688168e401731424a2eedb54313916b3bb838b161ea1ae6a51d0457efadaaf086ed090e28b9f2d0b42dcd3a2f460ead848e9f37f7b8ecec4d277552f01d3963e88df9904be830b67ea597299e922676c92a98bdbcfc5f6002d8509f1bc6c3f373fb4a94e509f8ab1fdeee357bfe472c6a58037e7e01532a666e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-11-1636475664267",
    },
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
      "536b6f9b3014fd2bc8fbda3c28843ca4688d52ba22356405d26a9b2664cc85ba014cb1e95455f9efbb98a66b55a9fb84ed7bce3de73e78267b5ea56441129e3fb4d03c7db917093921a0688eafde7af3f3a280f5de4a42c7affdfdaabc83ebe51211bc63495ad6050ca4681b0672b10b877923da9a36420c30d1c03407a66339f674e238f6a933459e8422bbe2d51ed9774ad572311a1db587b9107901b4e672c844f9fa3e7a3c1dd58db807a6e4e8bde40855e4e873d1af85605471512d77211a6825343194941768e11f334dcedea71e725a0e73043f72069431d156aab3852998a8329eb78dce4a16cf44db7c7320a17be5ae238389a22dabb8a2259c18295534564f351817c1766378fec536d8ac226febc7e1fad2ddac86ebedd56ee387c6eda51bb886a249019a6b2c8d337df3f182fa2948c52bad1e75cf9df24b83bc8f63e908282da10fc6d3b143cdd9789e64c99465336b926463489259329d502b19b3b90d769a00459e16d52c5a89ead47298659b563c33cd596c5b4e16cf92491a5b63db4ae778a5a6450e27e44fc3159c73590bc9fb0e91dbc08bdc380a76fe7a15b9ba848cb6853aef8d7505bcf5a8b040047d52d3a18b72814a5dbb3d3f7283d53af26edc7ec2579053f6143ee08c335a4840346db0790a9a8d48b161c45f6ddc7304eb897d3f062559fc7a265dcf3b176f5afe4a8f70809d5da5bf248c02cfffa6ed1c1137b46835e4b13f9006986852f47cf88d385cd13e07b9deb9c10fd23f0590410315fbff2c11ac03fffdd38e6b8f585c7c94910aefb8394c7622ac817e83b82ef6c89eda9639261adca88fb1f9ecd8b32e4797114aa8d44b45fdda63a1bd582b5f4118c4e1fbba5787bf1523625b76040000",
    ],
    [
      "ETag",
      "ICMZFleCk3bS6NpNkAmheQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1636475664267"
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
      "ff8d93616f9b301086ff8bf79548654dc886d40f64cdb64834e9089526551572ed83b9331cb30d5d1ae5bff74cbb745a27d12f70777e4edcbd7ed9b39faa912c66b7aafad581d9bdabc07df34106b6d3ced2abc5c6020b18385e1129b28fbf937efbfd6107e7e241cfea5e74f7d5d9191156fc809ab378cf4a055a5a165fef59c36bf06da8bbba29862c606ed7fae236cf56eb2f94d7287dbebe4ad364912ed92138364aee7831f06f68bb3904ec0e6f3328c14023c0cfd21abc03e1567e4dcbeb56c3c46267045836c0c34165b06bb9419c5065128693303a8da6f359144ddf477302350aee1436c45e6d693ee6d0719de13d6dc9c25322cc10d3c6e5f0eca9aee4b0890f57eb3c9a0e03fe0d7021b06b5c310a96ca58f7a4de1ff059857f49cddf08d255293d0655d0483063946a0b2ea5016b4749b4056fdb23b6d86cd2d7aa34d2a092e360af4600edfa23f039dd24ff93960cf6a2d579922f5f11d6916d8e48beba586ef3e4e2d27337cf4658ec1cd84b83e42a0bde50e1c9f4c36c1e9d3c79ec137adfd17762673a0898e0f4ab7c558ec525d7160e8f3ab023b088030000",
    ],
    [
      "ETag",
      "cR9xAvSXzyeDczl5mvcuwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-12-1636475664267",
    },
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
      "85536b4fdb3014fd2b91f79536499b17952a40256cd14a8134054dd3d43ac94de692c6c5766008f5bfefc6a13c84049fe2f89e73cfb90f3f915b56e764445256de35201ebfad794a0e08285ae26df573e224e6155f8bfaacb006ec4ac537eb87f11811ac6549bad956d093bc1119c8d162de2f056fb65470dec3443d7bd0b3bda1e7f8aee73903cf479e84aa98b2fa16d97f95daca9169eeb5fb25e7650574cb643fe39b977bf37e606e055f43a6a4f95ed24415697e2e7a54f18c2ac6ebf1628e061a0962091bca2ab4f0caccd3e3f7a9fb8c6efa2582ef590634cb7853abd616a6c8785db0b2113a2b193d116df3cd81ccc36938498c55c18454cb9a6e606550692c9702645329e32cbe38375602322e72b9326e7e847168182b6d6b658c8d23631a9d478961a35a0e52b15a6b2534ada0d5796e47f471082d812a2aa10b2e7dcba376601da645ea67453074d3c282340d52dfa5c3d4ca0e1d70f21428f2549b5db368cdeb816ff94eee04b9eb0e52cba5ae1dd8690e7e31b47ccf190e9dc0cb0337b5c9ee803c08a6e094c92d97aceb09b989a3245c26f162363949425d4641b1f4d3ce5c5bc45b9f0a8b44d02775edda28e3a8d436389a25617c3249a2ebb09be9144a9a3dceef70aa05ad24209a0aecbb0271ce736c1ab9bc98474974313b9922430fea728f9064f4fbe995903c6e759795fe92791247b3efdac01e714dab4643eebb0381352e0a67d23a867fdab75e95ddee0fb27029bb8ce46a11c6bf487715430102eaeceb79225807be7c5bfb45472cae3aca4885ffb83d996c453201dd16b14d6b66cff65ddb7288060bf52136b00ff7ed6a73b4196103b57aaea85b742cb4136be40b088338fc99eedcee3fdd618f4968040000",
    ],
    [
      "ETag",
      "lKC4T/QojrnFf02iQtRWjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1636475664267"
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
      "02ff2d90514fc2400c80ff4b7d65899b389484075054cc2432e0c118428e51c6605b67afd310b2ff4e6ff872d7f6beb65fee0cc7acdc421f3659fa53239f6e5294990b62b4752e56af8a4a8bd00114932af9bc5fbc3f4a11f2d7f0a13efa81e18f97593a182861933d1606fa67d865986f2df4bfcf509a02b56dbde676a26272aa5c65be8827d357cd0bdaba7cba8ca2e1281a43b36a3a70a04d8c3b642c1374132ba603263271b2d614558e9ea59a13b4d0c2ed43ca545786893cad787ee0f9e15dd8eddd876137087b0ae69418c9a8547639075d2324268fe94f5dc15780db50b577edf9abe53167e89c56fff4e824683f9974b545b7f5f66af044ce4ad456b8c60e2446bfe32d936bde5c0008184fa56b010000",
    ],
    [
      "ETag",
      "DhTJ9tm6rYA8uk12arMFQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "ESF",
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
      "0000d0bb64ad0ce19fee804aada4820a826e9890060d9f8a7c44e8f4ee757a8dfaeef0be01a194b56dd25d0af6055ec048242450c1ad0dcb19f2788fd1dc37d25eaaf011b68775e6d17191a35acc6e9614c1f4746445b95add42c5a08ae62a7ca74ddde7f2ea8ac1c1edd5686be8e26db1f4b1bd4bb40cf6711785f9c6894fc924ea1e31dd16d94e400d72d7d63ccb2fb0d05f03986a1d142b226eae7344828d51cdcbcaa39dff31c4d86eda535a0e75a94e7854bca66436377b16c66f8bf8da9c213d632ea140d575b950a77b65e277f9b2f738c7c9d15a0a4f4fff17980176af79c3da843fb6cb2a4233f0573fe9c69a3dfe5b8c34ac013fbff1641a8519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-13-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fdb3014fd2b91f74adbb44d9bb65235b212a0124d479a82a6698a1ce726332471b19d4e0cf5bfefc6a10c84044fb17dcfb9e7dc8f3c917b5ea56446129e3fd4201fbfdc89849c10d034c7d7bddd0fcac1757f999ddb920dfade85f7f79b379f2382372c45cb5d011d256ac940cdb69b6e2e45bda352880e26eaf4879dfe783876dcd178ec0cc62ef21414d915afee91fd5beb9d9af57a47ed6e2e445e00dd71d565a27c79efed07bd9d1477c0b4eabd95eca18aea7d2cfab5108c6a2eaaf97683066a05328692f2022dfc67a6c9e9dbd45d4ecb6e8ee03d6740191375a51b5b9882892ae3792d4d56327b22c6e6ab03d9f857fe22b29828eab28a2b5ac28995524d63fdb803eb3c5cafac6570be0e575eb45c07f16671e9afbcee627db55d051bebf6d20f7d4bd3a400c3b5e6d6a9b9057841fd1494e695518f9ae746f9b941cbf763690828ada00dc6ae3da6fd893d4db2c465d964384a321b926492b8233a4c6c3675c04913a0c833a286452b5151db1d4136a2f174301cc60e65699cf4611a678e334906ced47107237238217f24d770c6d54e28de7688dc86cbc88fa3701b2cbcc8372564b42ef4596bac29e0b5478d0522e8839a0e4d940b546adabd0c223ff416d1f2c66f277c0539658f9b079c71460b0588a6129ba741ae448a0d2381b7f2cf106c26f6fd185464f6f389343d6f5cbc6af90b3dc2013676b5f9924d142e830b63e788b8a1456d20fbf64024302153f47cf885385cd13607b9defae10fd23e859081848a7d3e4b049bc0a77fda71ed118b8b8f324ae31d3787a94684496837889b628f6c77e4bae63fd554ea77b1a9ed1e7bd6e468324209957eaea85d7b2cb415abd50b088338fcc0f4eaf00f72bcaed676040000",
    ],
    [
      "ETag",
      "v01Nm2Q1IfF0rc21AGAzBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1636475664267"
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
      "8d93516f9b3010c7bf8bf74aa4a601b221f52159d30d89245d429fa60ab9f6c19c19dbb34da228ca77ef9976d9b44ea22f7077fe9db8fbfbcf89fc148a938c3c89e65707f6f8a101ff2d041b709df40e5f462b072422e06983e4c3f55d92dce6cb43bd33bbf453124bb177879b1b241cfb012d25d989d402247724fb7e228ab6806d4ccbae55559f45c41f4d286ecb4dbefa8279ab79c8570f45319b170b728e2e8d9c7a5af5fc3bda1ecf11d9e9a70dd460413108b318ab77c07c1ed674b43512464e779681233ddc1f345677865aad4758198d27a3713a49e36992a6f1753a45506a46bdd02a28b0c5f988d79eca8d3ee096643c41c2f6316e5cf7cf3dd605ef370961be2ad3b81ff06f8032a63be5ab41b016d6f917f57e83af2afc4b4afa4e10af4ac821a801c5c10e51c25494730bce0d92da55d4980b365faf8bb7aa286eb5e0c3e05e0c00d2ef2fc05db19efd4f5a34d81fad6e67e5e20de13cdae68294f972b12d67cbfbc03dbe1a617ef4e0eead46573908861a5fc51f93697af5e2b1cf3af80ebf9379db414418c55fe5abf024aba974707e06684389cf88030000",
    ],
    [
      "ETag",
      "U2F55DIMwfjpj6954livsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:36 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-14-1636475664267",
    },
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
      "14fd2b91f7b51002c10124d4566db645a39485d087a6091ce726731b626a3baca8e2bfef26295dab4aeda738bee7dc73eec34fe45e1409199158640f25a8dd973b19932302866578dbb71f8a1fb7a93389663733ba739df4717d938dc78810154bb3f526879696a5e2a0478b793b53b2dc3025650b13b51cb7e5d01e75bd3ea56e977ac8d390a71351dc23fb8f311b3db2ed83763b9332cb816d846e73b97eb9b7b75d7ba3e41d70a3edb79236aa68fb63d1e35c7266842cc68b391a2835a825ac99c8d1c27f66129fbc4ddd166cddce10bc151c18e7b22c4c650b537059a4222b559d958c9e486df3d581ccfd897f1659abdc6c5716d3d672a94097b9b1be869717d64a01972ad12bebfabb1ffa96b5aafdacacb1756c4d828b20b21c9449401b51d422118b73a8049efb10bcef7e4560866968824baf439933e80ce334f6783ae8f5e3b403713c88bd3eebc51d3e74c14d6260c83355f69ac50a5950ce5ceea474402161907a4387f2de90f7ba1d4abbbd6410a7e00e984bc9fe88fc55c2c0b9d01ba945d30c721d0691bf8cc2c5f4ec34f2eb325286a59f37e6aa225efb345824823ea86b5f458544a5aab3c134f2c3d3b328b8f29b614e20637c377fc071a62cd78068a6d81a0ca80b9960d3c8ec721e44c1e5f474828c7a42b3034293d1afa7ff8468b7a9bb6cea2f99476130fd561b3820ae585ed6906d732070871b2285ee9cc063edbbde91fdfe37b2701b9b8ce4e7c20f6f497315420a0a0afef93c115c073e7d54870d472cee38ca6883ffb83d5c57225c41b345625d9939b03ddaf7faa4062bf32e4687dd43bbaa1c55465843619e2b6a361c0b6dc44afd02c2200e7f5a776eff0fa87df0d561040000",
    ],
    [
      "ETag",
      "5/qnKYf1LTPXP6y41fxmXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1636475664267"
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
      "00000002ff2d904d6f83300c40ff8b772dd3a014b44a3db4d3be24b4b5dd7a9aaa2a0d86c100d3c46cea10ff7d0edd25b19d67fb293d7c154d0a733816f9a94373beca91372ed8a2ed2ab672b5d458840920ab5cc8d3f458d6eb65c676fd5b8471f968021d6d160b21acfec45ac1bc87acc02ab530ffe8a151354adbe160c68982f1b9759587e475f92e694da94b5f7649b25c25f730ec87099474dc6286061b8d6e606ba844cdcfced5aabaadd0b3d4198d1646787cc80d75ad32449e543c3ff4fc681a85f12c8ac2208a05ac482b2ea81176f706b2868955b5a51f51055f003386629d8de7b79483d9edb51f38abfd3fbf3a33dab521596ed1edbdb938dc91f362f165d3e104b492ff782af8920f7ff229d3e96c010000",
    ],
    [
      "ETag",
      "q3bjmPAftsPzi47jGr2c6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:37 GMT",
      "Server",
      "ESF",
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
      "0000d0bb64ad8e201fe9aec8d0e1272050810d938640218a216003747af73abd467d7778df00228487a1186f0477e005cc50d43668e3d0bd6ef23acc7df5dabd57f7ade9b51446b223c8d1b2f7f2da1558b884d86b6b58986489827bf55906b1712f62a834f180fb111904919bbd762e4ea92654ecccfca37f45899f94562cbb646765d956c4e110515d1c2d569f3c23205f27373e18c7deceb9aabd2df01a55674d618d64b59a9fe6bd2d847bfd3c2a2c99b811301e389c5f2424f95ee71533a28909f1e1489df458da997d5b4f8b0fd31c5e32a9e764bb797afabfc00ae089360c0f45f3d8be93356d05feea17e34cf1e3bf8e21c30cfcfc028e87e3aa19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-15-1636475664267",
    },
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
      "9b3014fd2bc87b6d1292104823456b94d01629212b9056d33421630c730b38b54da6aaca7fdfb569ba5695da276cdf73ee39f78367f4c09a1ccd50c6cac7968aa76ff73c4367882a5cc2eb4e616755bb0f57cbfb0329d4f53a50627c339f03826996c4f5bea23dc95b41a89cede27e2978bbc782f31e24ea0d27bda13b761d6fe2bacec8f580276955ac59f300ec3f4aede56c303869f74bcecb8ae23d937dc2ebd7f7c16134d80b7e4f899283f79203509183cf45bf579c60c57833dfc560a09554a4b4c6ac020bff997976f13e759fe1ba5f02f8c008c584f0b651da16a420bc2958d90a9315cd9e91b1f9e680627fed2f138bf0aaad9bb4c1353db372ac70aa9ef6d4ba8cb61b2b082fb7d1669104db308d97d7fe66d15f6ed7bb4d185b77d77ee45b0a6715355c6b6e5d985b0817d0cfa954ac31ea897ed6ca2f0d0a3e8e4513405ad22e987ab68b8753fb3c2b328f14d3f1242b6c9a65d3cc9be071669373873a794631f08ca861e1066aceedb18b6991ba39c1a9331a7ae974e44e52920f1d371b52dbcb5d743c437f055374c5e49e4bd67508dd4541e2a749b40b978bc4372514b8add4aa33a60b78eb51418100faa4a6a38e320e4abadd4198f8d1629904b77e37e1352d31798a1f61c605ae24053416d03c45c586e7d030142e36fe0ac066623f4e418966bf9e91eeb976f1a6e5aff40406a8ed2af345711205e195b17342dce2aa359043774082122e72f07cfc0d3858d12e07bad9f9d14fd43d45b4a08236e4eb5902d804befcd34e6bafffe358cb480577d81c22b50811b4db20668a3db13dcfb1a7c88085fa109bd8dea9673a87ce486bdaa8978abab587423bb156be822008c30f4daf8eff00582159a076040000",
    ],
    [
      "ETag",
      "Uta4Dm6kGCjvcftHLItr3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93514fdb3010c7bf8bf7b854a2d02653241e5ad6d1a0d0421bb4078422d7be64664e2eb39d8eaeea77df39b0328d49e125b93bff4eb9fbfb9f3dfbae6ac962b651e58f16ccee4309eed6072bb0ad76965e0dd61658c0c0f192c85f9be4f4ea697675f9f563ca2fe6d5f8369a47e5f93911567c838ab378cf0a055a5a16dfef59cd2ba03681baadeabccb02e6768d2faeb355b2b8a4bc42e9f3c55d9a4ea6e98c1d8263a3e48ee71dff8eb68743c01e71b382020cd402fc2c8dc147102ef16b5a5e351a06165b23c0b20eee0e4a836dc30de2802a83e178300ccfc251340ec3d1691811a85170a7b026f66e4df331878eeb15fea42dd9f08c08d3c5b471d13db75457b2dbc487c9220b47dd807f035c086c6b97f7828532d63dabf7077c51e15f52f3778274554af74125d4124c1fa59a9c4b69c0da5e126dce9be6884d97cbf4ad2ab534a8643fb8553d8076db23f0255d4efe272d19ec55abcf936cf686b08e6c7344b2e47ab6ce26d7379e7b7831c274e7c0de18245759f0861a9e8c3e8da3f0e4d96317e87d47df899d69216082d3af32578ec505d7160ebf011f4144bc88030000",
    ],
    [
      "ETag",
      "zbI2JxEJGW+LaCHm5Q7H7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:38 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-16-1636475664267",
    },
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
      "02ff85536b6f9b3014fd2bc8fbd8362f124822456dd4b20d29251921adb6694a8cb930b70413dbb4abaafcf75d4cd3872ab51212c6f79c7bce7df0486e799190318979b6ab403e7cb911313926a06986b7f2be671fa5bf0200652fe6aeda2d8e82ebe96482085eb314dd96399c285149066abc5ab63229aa924a214e30d149d7c1c776faeec071fa3dc7459e823c9df1e216d97fb52ed5b8dd3e68b73221b21c68c9558b89edf37dfbaed72ea5b801a655fbad641b5554fb63d1d35c30aab92826ab251aa814c8356c29cfd1c20b3389cfdea66e71ba6d6508bee30c2863a22a746d0b533051a43caba4c94ac68fc4d87c75204b6fe69d47d6860bb5a665b9b1a8b2d66b09aacab5f5359c5f5a1b094cc8446dacebef5ee859d6c678da5813ebd49af9977e6475512a01a5796184221ae7508b3cf5c27f3f819a403555d004d76ec7a1dd616714a7b1cbd2a13d88d30ec4f1307607d48e3b6cd4877e1203459eaeb31b162d4411bbc96098d8fd512f19c65d7be0244e87a5b63b82d41d250cd284baaed3eb93fd31b9975cc30557a550bc6908b90efdc85b47e12a389f469e2923a558fa4563ae2ee2b54f8d4522e883baf675940b54aabbeb0791174ecf23ffca6b063a838cb287e50e479ad25c01a2a9a45bd0202f45824d238bf9d28ffc79309d21c34c6971402832fefdf842881e4ad3656dde6419857ef0cd183820ae685e19c85d732070835b22b8ea9cc13fe3dbecc97eff0759b8914d46f263e5853f497315420a120af6f93c116c029ffe58872d472cee39ca288ddfb83d4cd5224c42b3457c5b9b39b0dd61af53ef1982a57e17b37beea15d758e3a236ca1d04f15355b8e853662957a066110871f98ceedff03ee9952d465040000",
    ],
    [
      "ETag",
      "rw23+fZNees3PO7sqP+NWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1636475664267"
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
      "6f82301086ffcbedab2453140c891f64d1b884e0c0f86931a6c08138e0585b6608e1bfef8a264d7b7dfbdcbd6f3ac04fd964e0415216bf1dcafead401d992246d5555af1d152a31066805a144cbaabc7c96ebb5bbc4e0e61b4b0f7a1dcafa3cd860995deb016e00d909758650abcef011a5123b75daf729ac898ee5ba3f8c763b0db862cd49419213c07c1d60f76305ec619dc29893147894d8a66642be98ea9fe346995a8db0a2d459d4c51c1044f0f85a4ae1592c862c59a3bbc6c67e9ae1c67b9705c062b4a852ea961f67c02b6d1a44515d383c3c29c0139959c3b9ff63f96b5ecd064babc68bfd7a8be24b1b542e3fafe4cf0412695e6b4a66306a9e0ff3894fa791fff019873fd7c6c010000",
    ],
    [
      "ETag",
      "75wS3puhR8bHNQ23FNrF8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:38 GMT",
      "Server",
      "ESF",
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
      "02ffedd34b7282300080e1bb642d0c15a4d09d5011104479a5bac90426066a24bc2a48a7772fd36bd4ef02ffeaff0638cf49d7a19e5f4905dec0032f75311777b56658433132578059767c10a5688f8dceb6e12509e28f57bcb3aca684c51ecb9bf496278d26c8052c7364e75299a44b9fb75c0b1c9e3a8965d2d409d7e79bfbf279e0a7e87d62d74a8e6f763599fe56f36ae6c58ee584ae6954e7dedd443841432d702370a04ff93ea1831936dee518c648caa4cb74678abd5d7db91ea6160c367e44f6a5aa7635f5ee3653e041ed35d69a6334077d4a7c04d5a1af4e93509dee547c7afabfc00290b12e5bd2a172be5d5ee9fa02fcad8ffa474de6ff0d825bd2829f5f726dfeb019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-17-1636475664267",
    },
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
      "b826e4052491a2354be91a29211b9076d53421630c730b98daa65555e5bfefda345dbb49eb276cdf73ee39f7c113ba657586e62865c55d4bc5e3871b9ea21344152ee075ef6671f070ee7eb659fad1be197caf56d7c172b10004d32c89aba6a43dc95b41a89cefa37e2178db60c1790f12f5865e6fe88edd89e7b8ee64e47ac093b4cc37acbe05f62fa51a39b7eda376bfe0bc28296e98ec135ebdbcdbf723bb11fc861225edb79236a848fbffa29f4a4eb062bc5eec2330d04a2a125a615682853fcc2c3d7d9bbacf70d52f007ccf08c584f0b656da16a420bcce59d10a9315cd9f90b1f9ea80227fe3af628bf0b2adeaa4c6153db132ac70a21e1b6a9d87bbadb50ece77e17619af774112ad2efcedb2bfda6df6db20b2ae2efcd0b7144e4b6ab8d6c23a35b7002ea09f51a9586dd463fdac959f1bb4fe772c9a00d29276c1c41bb878381dccd23cf5483e1d3b693ea0693a4d3d078fd301994de8244b29069e11352c5cf3da7547d8198c86c96cea4d928983a7499ab96ee2e498b843279f39d4438713f42098a2674c365cb2ae43e82a5cc77e1287fb60b58c7d53428edb529d75c67401af3d2a281040ffa9e9a0a38c83926ef73a88fd70b98ad7977e37e10d2d30798cee60c6392e25053416d03c45c59667d030142cb7fe1980cdc4be1e8312cd7f3c21dd73ede255cb5fe8310c50db55e68ba2385c075f8c9d23e21297ad81dc77072428e12203cf879f808315ed72a06f7b3fbc46dd5348732a684dde9f25804de0dd3fedb8f6fa3f8eb48c547087cd21528b1041bb0d62a6d823db9bcec63364c042fd1d9b0ddce1b1673a87ce482b5a",
      "abe78abab587423bb156be802008c30f4caf0ebf01f72c187576040000",
    ],
    [
      "ETag",
      "U6dTNwF6B/ib+/j0XmCYNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1636475664267"
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
      "ff8d93616fda301086ff8bf735486505b345ea07d8d81694420ba93469aa22635f32532797da0e1542fcf79dd38e4deba4f44b72777e4eb97bfde6c81e74ad58ccb6ba7c6cc11ede95e06f43b006d71aefe8d560ed80450cbc28895cb48fedf7dd6cbc78f8b8c294ef1632e1dba7ab2b229cfc099560f191151a8c722cfe7164b5a880da249ab6aaf32e8b983f34a1b8c9d6c9f22be515aa902fefd2743a4be7ec149d1b95f022eff837b4dd9f22b6c3ed1a0ab0504b08b3341677207d12d674a26a0c0c1cb65682631ddc1d9416db4658c4015506c3c960c82ff96832e67cf49e4f08342885d758137bb7a1f998472fcc1a9f684b36bc24c276316d5c74cf3dd5b5ea360961b2ccf8a81bf06f4048896dedf35eb0d0d6f967f57e832f2afc4b1af14690ae4a9b3ea8845a81eda374930ba52c38d74ba2cb45d39cb1d96a95be56a55616b5ea07f7ba07307e7f06bea4abe9ffa42583fdd1eaf3349bbf229c27db9c912cb99e6fb2e9f54de0ee5f8c303b78703716c9550e82a18617a30fe309bf78f6d8270cbea3efc4deb6103129e857f9a63d8b0b611c9c7e018a02528a88030000",
    ],
    [
      "ETag",
      "JuquXjB5Jk9OoL6jJcI6bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:39 GMT",
      "Server",
      "ESF",
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
          "SELECT `date` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-18-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fdb3014fd2b91f771b44dd334692b5580208c68a5409a82a6696a1de7267349e3d676d818ea7fdf8d437908093ec5f13de79e731f7e2477bc4cc988243cdf56201fbeac44420e08689ae3edea2cb80e72889cf4ebf67bd0bb3983ecdf793e1e2382d72c45d79b025a4a5492811acd67ed5c8a6a43a5102d4cd4ea0e5a5dafe7b97edff35cc7f391a7a0c826bcbc43f66fad376ad4e9ecb5dbb910790174c3559b89f5f37de7dee96ca45801d3aaf356b2832aaaf3b1e8612118d55c94e3f90c0d540ae402d6941768e1859926476f53b7395db77304df730694315195bab685299828339e57d26425a347626cbe3a905930094e626b99520d4b8b2a6bb190a0aa425b67d1e585b594c0844cd5d2ba3d0fa2c0b296c6d0d21a5b87d624bc0863ab8b3a2928cd4ba312d3a4805ae1a911e1fbf6d704aaa98226b8f06d8f7607f630c9129f65835e3fc96c489241e2f7692fb1d9d005374d80224fd7d90d8b96a24c7bbe977ad930b3ed41c27a3d7be8b18c39e9d0edba6eda1f3acea0cffa894b7607e48fe41a4eb9da08c59b6e90db288c83451ccda727c77160cac828967eda98ab8b78ed53639108faa0ae5d1de50295ead686d338888e4fe2f02668a639819cb287d916e799d14201a2a9a46bd0202f448a4d235797b3300e2fa7c7136498115ded118a8c7e3ebe10e2878de9b2365f328ba370facd18d8236e685119c87d7320b0c215115cd947f0d7f8364bb2dbfd4216ae6393915ccf83e80769ae22c84042c93e9f27824de0d357b55f71c4e292a38cd2f88fdbc3542dc224345bc4d7b5993ddb1ffa5d9718b0d4ef6203c7d9b7abce5167843594faa9a266c5b1d046ac52cf200ce2f0a7a673bbffa678675e62040000",
    ],
    [
      "ETag",
      "jFEQEgeR2d+qKE3VFefzHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90516f82301080ffcbed1512608a0b890f324d664296e9e6d3624c8593a1c0617b3895f0df77c5bdb4bdeb77775fdbc1a9a83388605fe4e716f5ed29475ed9c31a4d5bb291ada1da203880ac7221fde4741e07cbec125f71ced7fbbcbe93594da74298f4072b0551078702cbcc40f4dd41ad2a94b2dd4e0f1d05e35b6333f3d9d742a28a321bbd6f926416270be8b7bd0347daaff1801aeb146dbf46d311535e5a55a3aaa644d750ab533430c0c345aea96d94267225e3fa2fae1f3e87a3c9380c47413811b0a4547141b5b09b4f90314cacca35fd1afb2e01f47014e9c3b05e241d7881e77a81ebf9d66cfb5f13df18cd8726113068677b0f8f57b26e2cceac5b742055f2256f053fe2fe0f929215f66f010000",
    ],
    [
      "ETag",
      "1Lkq52IdvBxeDtxzDnzosQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:40 GMT",
      "Server",
      "ESF",
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
      "4d",
      "7282301800d0bb642d8e434148778202162a50e547364c8c9f122811422cb59ddebd4eaf51df1dde372294c23094f2d20047cfe846543ca553bf332d6764ac2ec8a93d1c1df73c4011b0408a6bbcd81a9bde8a67eec8ec769eaf81db17e6e71a491d857aa59a8aac915dbf8fcc6a91e8a7e8b673791e3a6d14da89026e58bb8a612a2f751bac46eb5888f152fb9db73672b5d28e2e94ef8ed2e8cb6a4513f5f0e6b16ac7bd463d157d1a40c02269d9d17eb680319c8fd88f4d42529d1e70764d8419179bfe9cbf564bdc7e68ba8da5c61d2ef3afeb3633424c878c4f1f1efe2f3441f0d9310143c9eedb9f748c27e8af7e296f1ddcff5b400408f4f30b7b8a507019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-19-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f795bed3472a55a36b0344a229a429689ba6c8716e82218d83ed3055a8ff7d370e652024f814dbf79c7bce7de4993cf022215312f3ecb102b9ff762f62724240d30c5f0b2ffbf5a3bfbcf6f6eb73ff627d57a621bf9acf6688e0354bd15d99434b894a3250d3eda69d495195540ad1c244ad9ed3ea8d06237b3c1c8decfe688c3c05797ac98b0764df695daa69a773d46e67426439d092ab3613bbd7f7ce53bf534a710f4cabce7bc90eaaa8cee7a2df73c1a8e6a2986d3768a0522023d8519ea385ffcc243e7d9fbacde9ae9d21f88933a08c89aad0b52d4cc14491f2ac92262b993e1363f3cd816cdc4b77115a4ce4d5ae880aba83132ba19a467a5f827516ac5796e79fad83d53cf4d67eb4595cb8ab797bb1bedcaefc8d757be106aea5699c83e15a33ebd4dc7cbca07e024af3c2a887f573adfcd220efe3586a024a2b6882d1b83ba2bd49d789d378ccd2c96018a75d88e3493c1ed241dc658e0d761203459e11352c5a8862d273e2783c4822d677fa913db059e4b0388d121826e0c0c019250e399c90bf926b5872550ac59b0e91dbc00bdd280cb6fe621ebaa6849456b95e36c6ea02de7ad45820823ea9e95047b940a5badd9e1fbac17c117a376e33e14bc828db6f1e71c629cd15209a4a6c9e06b91209368cf8f395bb44b099d8d531a8c8f4f733a97b5ebb78d3f2577a8803aced6af3259b30f0fc7363e788b8a17965204fcd8148604226e8f9f00771b8a24d0e72bd75839fa4790a20050905fb7a960836812fffb4e3da2316171f6594c63b6e0e53b50893d06c1037c51ed993ae6d7789014bfd2136b49d63cfea1c7546d841a15f2a6ad61e0b6dc42af50ac2200edf37bd3afc034986e5a976040000",
    ],
    [
      "ETag",
      "nIgZB2DQIyOGNHOhpfTiPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1636475664267"
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
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f7",
      "b1412a2b0d6ba47e808d0da414180475d25445ae7dc9cc1c5f663b5414f1df774e3b3aad93d22fc9ddf939e5eef59b03fba98c6409bb57e5af06ecfe5d09fe6b0856e01aed1dbd6a340e58c4c0f392c8b3cd59b5cd268fcbab47b998ea787ffb6dba2cafaf8970e207549c25075628d0d2b1e4fb81195e01b509d44d65f2368b98dfd7a1b8ce56b3f917ca2b94219f6fd274344e27ec189d1a25f73c6ff937b4dd1d23b6c5fb151460c10808b3d416b720fc2cace978556be8396cac00c75ab83d282d3635b7883daaf4fa57bd7e7c110f8697713c781f0f09d428b8576888ddac693ee6d173bdc207da92f52f88b06d4c1b17ed73477525db4d42389b67f1a01df06f800b818df179275828ebfc937a7fc06715fe25357f234857a5741754829160bb2855e75c4a0bce7592e8725ed7276cbc58a4af5531d2a292dde04e7500daef4ec0e77431fa9fb464b017ad3e8db2c92bc279b2cd09c96637937536ba5906eeeed908e3bd07b7b448ae72100cd53f1f7cb81cc6e74f1efb88c177f49dc4db06222638fd2a53e5595270ede0f81b99dfbb7388030000",
    ],
    [
      "ETag",
      "+U+mjTEzP9zdOHl6yWXHPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:41 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp` as __result FROM `records` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-20-1636475664267",
    },
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
      "02ff8553614fa34010fd2b64efab164a29d0268d1ac53b2e6df528d55c2e977659065c05b6ee2e7a3dd3ff7e03584f63a29f4a76de9bf766e6f589dcf12a256392f0fcbe06b9fd722b12724040d31c5f47b3fb3277e7df6316f6afb737e6f95f07d4e3648208deb0142d37051c2a514b066abc5cf47229ea0d95421c62a343db3aecbb03d7f186aeebd8ae873c054536e5d51db26fb4dea8b169eeb57bb910790174c3558f89f2e5dd7cb0cd8d14b7c0b432df4a9aa8a2cc8f458f0ac1a8e6a29a2c1768a056205750525ea085ffcc34397edbbac769d9cb11fcc01950c6445de9c616b660a2ca785ecbb62b193f91d6e6ab0fb208a6c1696cac95c69e6b832a63b592a0ea421be7d1c5cc584b6042a66a6d5c7f0ba2c030d6ada3b531318e8c69380b63a38f422928cdab5626a649018dc4f326c2f7fb6f085453055d71e5592eedfbd628c9128f65fe6098641624899f78433a482c3672c04913a0c8d34df796452b5125993fb2a937a26e9a78e0b364e0c3885accb69dfed0f69cd1d0017f90f6c9ee803c4aaee18cab8d50bc5b07b98ec23858c5d1727e7a1207ed1819c5d1cf3a73cd10af7d6a1c12411fccb56baa5ca052b3db701e07d1c9691c5e05dd39a79053b65ddce341335a28403495b4040d7226525c1ab9bc58847178313f9922a3bdd1e51ea1c8f8d7d37f42bcddb45bd6ed2f59c45138ffda1ad823ae6851b79087ee83c02d664470651dc39fd6779b92ddee37b2308f5d47f26319443f49f7144106122af6f93d11dc163efd5bed338e584c39ca60f234c7f430d58830095d8a78d998d9b3fdbe6df9a4054bfdae3618fafb75353d9a8e5042a59f27ea328e837662b57a0161118f3f6f37b7fb07e6c8f4bc63040000",
    ],
    [
      "ETag",
      "9Mqmg6NJTcI1Wyh/Fz4esw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1636475664267"
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
      "dd6e82401046df657a596950018b8917d29294045b45bd6a8c59d7916281a1bb8bc61adfbdb3d89bfdf9f6ccccc95ee1bba8f730865d91ffb4a82e0f399a853d64a8dbd268de1aaa35420fd0889c493f48699844ae7cfd788cbc5d783ae7d1ef62326142cb2fac048caf7028b0dc6b187f5ea1161572d976abba8e8c994b639355328b97abe96cce51457b1bbdafd3741aa531dc36b71e1c6997e10115d6126dd346d111a549acaf165553a2a3a95512357470f7902b6a1ba1881c4e9c81ebf48361e08dfc20f006c188c192a43005d5ccae97c0630c19516674665de833a0ba239b1fbaf564e327ffd9f5fdb01f7a7168e536ff65d1c5a09e2b62078d76bc7b577921ab6758dba8167b20057fcd5b61eef7db1f45cc979577010000",
    ],
    [
      "ETag",
      "56Lo3IB0cDO+B4b9vwgBzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:41 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd34b7282300000d0bb64ad8c46c4d29d5268c2570545dc6430464105c2472438bd7b9d5ea3be3bbc27882965754d9ae2ca72f009440c55894a16ff58188fe4eac0a107916e8c573cb3f84e3c38eca848bc060e7b79a1f7eec131b20c1f4cadb5f41c235389a913a02f868ce159c96858c036ba47e9a872eeea4dacbbec98462142fd721b0b1c6cc3bd22acf3deae5b32b9fb05e7cbdcce0cb124fbf038c7686eb2f0241b9b75e85ef051ecce3e74a65a59963adfcc567a7115ad0b67a7d1772bf737454b7a6f9c44b15df801c30d81178a651240dfeda666545aba5c4b6f6fff171800d6f1b46235495fdb2753551d80bffaa4119cbdfe2f585cb10afcfc02518e769b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1636475664267",
    },
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
      "3014fd2bc8fbd8e6451e9048d11aa5748d1ac84648ab699a903117ea1630c5a65b55e5bfef629a2edda4f613b6ef39f79cfbe099dcf322263312f1f4a186eae9d39d88c8290145537c0d1657a62b73755299d3e14971755bfc0e9cc57c8e08deb024cdcb0c3a52d4150339db6dbb6925ea925642743051c71c740693e164648d27939139b19027214bd6bcb847f6ad52a59cf57a07ed6e2a449a012db9ec3291bfbef71ecd5e59893b604af6de4af65045f6de17fd9c09461517c57cb74503b5842a849cf20c2dfc65c6d1d9dbd45d4ef36e8ae047ce803226ea4235b630051345c2d3bad259c9ec99689b4707b275d6ce323098c8eabc080b9ac3a911534543f5548271e16f5c63e55d6c7c7711ac365eb85d5e3aeea2bbdcac77aeb7356e2e1ddf31148d32d05c636e9ce99b8717d48f412a5e68f5a0796e945f1ab4fa7f2c0d01a525b4c1d0ea4fe8c0ee4fa324b258620fc751d28728b2236b4c87519f4d47308a23a0c8d3a29a450b518ced249ac6491c5ac80847436b12529b0d429b4d07a3c884849a7db23f25bf2aaee09ccb5248de7688dcf8abc009037fe72d1781a34b48689da9f3d65853c0b147850522e89d9af64d940b546adabdf202c75f2c83d5b5d34e780d29654fdb079c7142330988a615364f41e58a181b46bc85eb9c23584feceb2128c9ecc733697adeb8386af92b3dc001367695fe926de0afbc2fdace01714db35a431edb0329d1f22dd686aef73f11894bda6621df768eff9db44f3e245041c13e9e268275e0c37fedb0f888c5d54719a9f08ebbc36423c22a687788eb720f6c7b30b54ca2c195fa3766f66df3d0b5264793117228d44b45ede263a1ad582d5f4118c4f17bba5bfb3f4ff2c79e78040000",
    ],
    [
      "ETag",
      "TAK2Msmt+r293+nKhnxTEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd6e82401085df657a8b895ac586c40bacd89af82f5e35c6ac30201618babbd818e3bb77965adbb44dda9b6566f8669873d8133c2779080e6c93f8a54479bc8951cf4db04055a65af1a3a05c2158805ac44cf6d52aec4cbd69315fead9241b0c9ae2308ebb5d2654b0c34c80738228c13454e03c9d201719725b406999e59b2ab3401f0b535cfa8be1e481f38c42934f56a391db1b7970b6ae8da1d06253f1ff685b9f2dd8d37681114acc0334bb1492f618e8a191a94456a4585354ca00155470f5229654164212d5b8526b366a0dfbd66e75dab6dd6ada1d06530a844e286776b5e4fd409316e9825e5925d80cc82a64c151751eb89c849510130e27beddaaf6fb0a480c48869b3fb982d7dd09fe0b1fd8c581ef9cc8a8ccf5951a8ca6ee6fe3d8d2cf517dd7f77e104ab35157c41f8ebda5ef8e67865b5fa4f78e1ad54c12fba8d058d8a8b7eeda1dbbfeeeea3d19a7f93b8e96255a1008be1c8f89062712a9c2f31bd4c7bbbd7a020000",
    ],
    [
      "ETag",
      "DsUd7OEOpQStPNmFF2avMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:42 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-22-1636475664267",
    },
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
      "535b4fdb3014fe2b91f7021abd264dd24a15ab4a60d14acbda14344d536bbb27c590c6c1768a2ad4ffbe93847211123cc5f1f92ee7e627722fd215e91126d60f39a8ddb73bc9c8090143d7787bcfb6678db67fe618e3ec1e59d2fe45bf9f3ff6fb8810054bd34d96404dcb5c71d0bdf9acbe5632cfa892b28642b576bbd6726dd7f13aaeebb45d0f791a927824d27b64df1a93e95ea371f0aeafa55c274033a1eb5c6e5eee1bdb762353f20eb8d18df7960d74d18dcf4d4f13c9a91132edcf679840ae412d6043458229bc3257ecc77be9baa09bfa1ac15bc181722ef3d41469a10497692cd6b92a5549ef899469be399059300a8691359c0c46c16c181c0dae2f8e967453682c8f4face6b145b5b55828d07962acf3e9e4d25a66687b4b35e8a575f333980696b554c0a55a2dc46a69f5ad536b145e8691d5c20c56a08d484bff88b2040aefe716851f075310a841e92ab8f09a2e6df9cd2e8b99c763dfeeb0b8098cf9cceb509b3579d70167c58022cf14ea258ba632ed0203eeda9deeaae33b76b7db06d7a3bec77c1738b76d0fba1d06719b92fd097954c2c099d099d4a2ea13b9998651b088a6f3f1701005651931c5069c55c91545bccdd3609108faa4ae7d1115129d8aa687e328980e8651781d54731ec19af2ddec01271dd34403a2a9a21b30a02ee50a9b46ae26b3300a27e3c10819e5f0ae0e084d7a7f9f5e09d12e2bbb6cca6fe1e53aa5ff01704d93bc446cab036991fdfe1f2270272b32f93d0fa67f487535851814a4fcebd121b80c7cf9b40e7b8e58dc74b4d106ff7151b82e4cb8826a61c4a64cef99eddbcda64b4ab0321f622ddb3974a6d028146103a979aea8da732cb432cbf50b088338e77138bec0e87f662e445567040000",
    ],
    [
      "ETag",
      "kbvD/28D4tt4ywbl2Ka+Fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1636475664267"
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
      "906d6bc2301080ffcbedab1d5a3542c10f2a1bdb289b8d0a832112e3d9d5b5bd2e2f1b9df8dfbdd47d49ee2ecfdd3de40c5f457d8004f645feedd1b47739ba2c0412ad2f9de5aba1da22f4009dca999472315a7af1beb6f19f18af5e64bbee67d974ca84d59f582948ce702cb03c58483ece50ab0ab96db733dd44c65cdb84ca63fa365b735ad121a4af9b349dcdd307b86c2f3d38d15ee2110dd61ac3c0c6d009b57b0eae56554d8991256f345ae8e0ee2137e41b658822ae44711c0dc4508c26632146b19830589256aea09ad9cd0a788d23a74a49bfac0a03064c17b2f5b13b7f42f97e320c4edb7f7ade3ab44b43bcda62d8dabf192c285839b675c6630fb4e2df782adc2dbf5c0130ceabc26a010000",
    ],
    [
      "ETag",
      "RRC4Pu6XTs2z65SJRyT0QQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:43 GMT",
      "Server",
      "ESF",
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
      "000002ffedd35b7282301400d0bde4db326010a57f12a4a4f8401e03f893411a10b48a37f1014ef75ea7dba8670fe781f2a2e0423079daf3237a475d3e349542f1da89e5dc2a3737bed229119a85dd62bf39acae3380c99d36e7fdbab50d8f05db251e93d88610efd6260b7dc9bb58238d9b0659906d8f63bca15d964535be8a69e01e9a7ec95c3de13e6d6220973a49030d6c0279e1dfc25da5ca440a0ce0ac2272dceae75ec58e37d7bffdabb7b03ba84b5ca8a21f89a1412e53522eb4b7c6f9a09f5534be6ce27c36313416362729b561c5cbd11c666bdaba25d7651f527ae81d5d7979f9bfd000f17b5b0317ac7e6ec723d31ca0bffa4c762d7ffeb7780e1cd0cf2fdd7dc1e219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1636475664267",
    },
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
      "6b4fdb3014fd2b91f771f441daa469a56a546d1895da744b53d0344d91eddc04431a87d80131d4ffbe1b873210127c8aed7bce3de73ef2446e459190096122bbaba17afc7223193921a06986af7fe98ce619a5b5c71ec4da2f165f57bccca653448886a5e8becca1a3645d715093ddb69b55b22e692565071375ec41e7d41db8c391e3ba43db1d214f419eae44718bec6bad4b35e9f58edadd4cca2c075a0ad5e572fff2debbb77b65256f806bd57b2bd94315d5fb58f45b2e39d54216d3dd160dd40aaa18f654e468e13f3361676f537705dd773304df0b0e94735917bab18529b82c5291d595c94a264fc4d87c75205b7fe5cf238bcbbcde177141f770622554d3583f96609d879bb5b50cce37e17a162d3741bc9d5ff8eb5977be59edd6c1d6babaf043dfd294e560b8d6d43a33b7002fa89f80d2a230ea51f3dc283f3768f97e2c0d01a515b4c178d477e9a9d71fb3948d78ea0d1c96f681318f8d1c3a607d3e1ec23061409167440d8b16b2486ccf4e526071ead9100f3d2789bdf178143b3062ae43b937b407e470421e2aa16121542995683b44aec265e4c751b80be6b3c83725a4b4cef5a235d614f0daa3c60211f4414d87262a242a35ed5e06911fcee6d1f2d26f27bc828cf2c7ed1dce38a5b90244d30a9ba7a15acb041b4682d9da5f20d84cecc731a8c8e4f713697adeb878d5f2177a84036cec6af325db285c06df8d9d23e292e6b581dcb70752a2e56bac0d5d1ffe201297b4cd427eeefcf017699f4248a182827f3e4d049bc0a7ffda71f1118bab8f324ae31d7787ab468457d0ee9030e51ed9dec01d7bc4802bfd2ee69d3ac7ae35399a8cb087423f57d42e3e16da8ad5ea0584411c7f60ba75f807ab73d00478040000",
    ],
    [
      "ETag",
      "zaAalgaau8bwiMEnD+Lcpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1636475664267"
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
      "0002ff8d926f4fc2400cc6bf4b7d3b12fe0eb2c4171ba02e19883062a221e4d80a0cb775dedd3484f0dded4d44a326fae6d676bf767d9edd019e923c060756c9e6b944b9bfd8a0be33c11455996ac58f82728560016ab16172e2cb240ff7fda1ee0dbcfb55f0d0f4765df7f29209156d3113e01c609d601a2b701e0f908b0cb92da2b4ccf2659559a0f78529cec2a93fbee63ca3d8e4e37910b85e3084a3756e8c8516cb8aff47dbe268c18e56535ca3c43c42b34b21698791f68d4c25b222c59aa25246a8a082ab171b49652124518d2bb566abd6b05b76bbdbb1ed76d3ee32985224744239b3f319ef079ab448a7f4ca2ac1664056210b5e57e70b9793b81262427f1cdaed6abfaf80c48864bcfc932b78ddade0bff0819d1cf8ce898cca5c9fa9abe0d6fd6d1c5bfa396ae086c31f84d26cd41909fdd17016baa389e11627e9de5ea39a48621f151a0b1bf576afd3b5ebefaef6c938cddf71b42cd18248f0e5b84934386b912a3cbe0111d89aa77a020000",
    ],
    [
      "ETag",
      "PIrinTyCEt8DBWbLZ2Bj7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:44 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-24-1636475664267",
    },
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
      "ff85535b4fdb3014fe2b91f7b249f492364d2f52c5aa9241a4d2b23685a1696a6de724189238d80eac42fdef3b49281721b1a7383edfe5dcfc44ee441692116122be2f40edbedc4a468e08181ae3ed29d06e7cf69817bf76f3c925fd2bb2eb4b118fc78810254bd3344fa0a165a138e8d17ad58c952c72aaa46ca050a3e3346cb7eb3afd9eeb3a1db78f3c0d493413d91db26f8cc9f5a8d53a78376329e304682e7493cbf4e5bef5d069e54ade0237baf5deb2852ebaf5b9e9712239354266e3f50a132834a80da4542498c22b3364dfdf4b37054d9b31821f0407cab92c3253a685125c6691880b55a992d113a9d27c73202b6fe64d036bba58cf83af5b9a96e4ed378b6a6bb351a08bc4583f968b736b9ba3d70dd5a0b7d6d599b7f42c6bab804b156e44b8b5c6d6b135f3cffdc0b2d136046d445699069425501a3ef7c5ff388d92400d4ad7c14dbfed527bd01eb288f57934e8f658d406c606acdfa35dd6e643079c9001459e29d52b16cd64e6768736e52e73426a739b0ffb03c771b0238c8730a0b6130d87cc611127fb23f2a8848113a173a945dd1c72b5f4036f132cd7f3e924f0aa32228a0d38a9932b8b789ba7c12211f4495dfb322a243a959df6e781b79c4c03ffd2ab873b8398f2ddea1ec71bd14403a2a9a2291850e732c4a6918bc5ca0ffcc57c32434635b18b034293d1efa75742b0cbab2e9bea5b7ab94ee57f005cd2a4a8100ff581d864bfff83085cc49a4c7eaebde535a9af961081828cff7f7408ae02ff7d4f87e5462cae37da6883ffb8285c97265c41bd3022add27b660f9c5ea74b2ab0321f626ec73d74a6d428152185cc3c57542f37165a9b15fa0584419cf3dc9f9f62f41f471d77d45c040000",
    ],
    [
      "ETag",
      "Gea3gHwpuXyNAVaxinYVig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1636475664267"
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
      "301086ffcbed2b2453191a123fcc8538336236d4b86c31a6c2c17085636d192184ffbe2bee4beffaf6e9bd6fae87efa24a21804b91ff34a8babb1ccd9b6d62d48d349a4b4d954670008dc8995cb7e1cb31ef1672f65e85fb76871f7281f972c9844ebeb01410f4901528530dc1670f952891bf9dcf6a9cc898e96aab6cb6fb701dc62c94945a617b88a2c75514c2701a1cb8d225c60c155609da91b5a22b266663d36a51d6125d4d8d4a50c3088f0fb9a2a6168ac865c59d7aeec49ff9defcc1f7bda93f675052224c4115b3871db08d2123644c2d878509036a6c3977369ebf2cfb36d0e91f5d7506f5ab22f6d5682def6ff64f6423198e6a54830e248297f15c98db7df803e508d95a69010000",
    ],
    [
      "ETag",
      "GwEKWgy8l3XnETwSeZl8eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:44 GMT",
      "Server",
      "ESF",
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
      "41",
      "72",
      "82300000c0bfe46c9c290895de042482152d080817264022a85542682171faf73afd46dd3fec1de0b2249ce7fded4caee00d08ac18d372ba6ee7a633d49e82a3f4720efc97a223b51a698ddb7bde22f593424aa1879420abd9283383c39dc221b6d2b089394a7c55d8fa75dc5beb8fa8f0619ee00c9a7acd02b44ad97e41254ac7388ed9eac83394bea35b31568996af75d896cec0567922da8d7bf1a8757b951b590ef42c4ed7166ac1c1c9d4664b4e98615ab2d9b73528618d94ad5df5e36e3fa7aee7a9d15248b63d56cbf0d0d34e72177eda475dad0be76bfaf4f47f81092063db7484e7cd63bbaa19c604fcd5cf7bd192c77f93e08e74e0e717b9c6601519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1636475664267",
    },
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
      "000002ff85536b6f9b3014fd2bc8fbda242401f290a2354ae98a94900d48ab6a9a90712ed42dc1149b745195ffbe8b69ba5695da4fd8bee7dc73ee8367f2c08b2d999284678f3554876ff72221670414cdf0d51a2e5ddbae2ff7be657a7fd7b7eac9b5613e9b2182372c4977650e1d29ea8a819c6ec26e5689baa495101d4cd419d89dbe3374ac91ed38d6c019214f429e2e79f180ec3ba54a39edf54edadd4c882c075a72d96562f7fadedb0f7a6525ee8129d97b2fd94315d9fb5cf47b2e18555c14b34d88066a09550c3bca73b4f09fb94dcedfa7ee72baeb6608de730694315117aab185299828529ed595ce4aa6cf44db7c7320a1bb741791c1445eef8ab8a03b3833b654d1581d4a302e83f5caf0fccb75b09a47deda8fc3c595bb9a7717ebe566e587c6cd951bb886a2490e9a6bcc8c737df3f182fa5b908a175a3d6a9e1be59706791fc7d210505a421b8c47a643fb637392a4c988a5e3a19da42624c93819d97498986c6281b54d80224f8b6a162d44d1a7a60913c78eede180c6d6a4df8fe984b2980e603b61f660e2a429399e91a78a2bb8e0b21492b71d22378117b971146cfcc53c72750929ad7375d11a6b0a78eb51618108faa4a66313e502959a767b7ee406f345e45dbbed8497905176081f71c629cd25209a56d83c05d54a6cb161c49fafdc0b04eb89fd3c052599fe7e264dcf1b176f5afe4a8f70808d5da5bf248c02cfffa1ed9c10d734af3564df1e488996efb036747dfc83485cd2360bf9b571835bd23e0590420505fb7a9a08d6812fffb5d3e22316571f65a4c23bee0e938d08aba0dd21aecb3db1c738499b6870a53ec4acbe79ea5a93a3c9083b28d44b45ede263a1ad582d5f4118c4f1fbba5bc77f2f525aad78040000",
    ],
    [
      "ETag",
      "43LE55uFvN40IxOYtwE5eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1636475664267"
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
      "c2",
      "400c86ff4bfde89600c24196f8612a083a1161441363c8b9151c6eebbcbb6190f0dfed4d45a326fae5d6764fbbbeef6e038f491e8307f7c9e2a944b5de5ba0b9b2c11875991acd8f82728de0001ab960b2f722fa817f5edc5cef9fadfa467594ee255787874ce8e8013309de06e609a6b106ef7603b9cc90db224acb2c9f559903665dd8e2241c0f86a79c6714db7c380d02ff28e8c2d6d935c6d2c859c5ffa3ed6eebc092eec73847857984769742d1122333b032b5cc8a145d4da58a504305572f168aca422a22972b6ea3e5d6c58168b65b42341ba2cd604a913409e5cc4e27bc1f1832321dd333ab04c180aa42163cafce159793b81262c3c13014cd6abfaf80c288543cfb932b78dd07c97fe1037b77e03b27332a73b3a37ac1a5ffdb38b6f473d4891f767f10dab0513b241c5c7427a17f31b2dcddbbf4a3b5413d52c43e6ab416d66bcd4eab2d6a6fae1e93759abfe31955a20391e4cbd14f0c7873996adcbe0280934cee7a020000",
    ],
    [
      "ETag",
      "Fz6HLAKpXW+JvHtr8rsFiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:46 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-26-1636475664267",
    },
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
      "4f",
      "db4010fe2bd6f6052472fb4aa488a6c150573948e280685525ebf5d82cd85ee35da78a10ffbd639b7008099ee278be63e69bf123b9e7694006c4e7d14301f9fedb9df0c9090145237cdbdea98b1fddc522d9b3fef9efd14db0bfe2bf16c3212278c99234c962684851e40ce460bd6a46b928329a0bd140a146d76c74cc9ea95b8669ea5dd3429e84389cf0f41ed9b74a6572d06a1dbc9b9110510c34e3b2c944f2f2beb5ebb6b25cdc0153b2f5deb2852eb2f5b9e9692c18555ca4c3f50a1b2824e41b48288fb1855766e07f7f2fdde434694608de7106943151a4aa6c0b259848431e1579a54a068fa46af3cd0359391367ec69e3f968e2acc6ced16a3d3ddad2a4d4d81e9f68ed638d4a6db3c94116b1d2ce97f3a9b6cdd0f6964a905bedfaa7b374346d9b031379b0e1c1561b6aa7dac49dba9ed6c10e02908aa795bf47fd184aefe788dc8f8b290954a1745ddc586d9376ec76df0f7d8b8576cff0c336f8beed5b06edf96dd6d7410f7ca0c853a57ac5a2a9480d430fc2ae6e057e8fd18042cfc69003d6376dbb6785816d040c58dfee90a713f22fe70aceb8cc84e4754ee47ae97acec65bae67e391e7546384140338ab9b2b8778dba7c22111f4c95c4f65950b742a4377679eb31c8d3df7caa9f73c8188b2fdea01371dd25802a2694e1350904f4580a191cbf9caf5dcf96c344146b5bccb034292c19fc75782b7cfaa9455f55b7a997ae57f005cd1b8a810bbfa81600a4f7f1181375993c962ed2c6f48fd6a0921e490b2af5787e0aaf0e5a775b873c4e2a5a38d54f81f0f85c9d284e5501f0c4faaf69ed9b6d9b374528173f5a166748d4332a546a90809a4ea79a2face71d0daac902f202ce29e67eeec02abff01124de42167040000",
    ],
    [
      "ETag",
      "0vtGB2QQmyc9FZAYdyViJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1636475664267"
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
      "6d",
      "4f",
      "83",
      "40",
      "0c",
      "80",
      "ff",
      "4b",
      "fd3a746f8292ecc366343323ea984b4cccb2dc8e824ca078575cc8c27fb7c7fc72d7f69eb64fee0cdf79954008873cfb69d0b45719f2da0531daa6602b574d95451800b2ca845ca5d947cc372b9dd46a1d2ce3ecbe99b4a7d94c08abbfb054109e21cdb1482c849f67a85489d2b6df9b7ea260dcd6aef214bdcedf252d2971e9cb368ae68be811ba5d3780231d624cd160a5d10dac0d1d51f3b373b5aaac0bf42c3546a3851eee1f32434dad0c9127156fec7b237fe24f835bdf9f8efd40c082b4e29c2a61b71b90354cac8a984ea20a23014c1f8a75da9fbfae3cbc9edc39a9dd3fbe6819ed9b21d96dd1ad1d5e141ec869b1e8b26970005ac9772c73bee4dd1ff9bfc8c86b010000",
    ],
    [
      "ETag",
      "KfgXRt/KcdpaQ7HRg9u3yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "ESF",
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
      "516e82300000d0bbf4db1a0409b03f40080e514931203f4d65551a156aeba0d5ecee33bbc67c77784f409a864a89effd9976e00368627ad3669a723788c7f65a0dd7f60c5bd8d3920d9155186d0e59187b4e7cd1a53cb5150c2337c27b63a6c6682bf4f7cee879e7645ff78c740e9246bfba2ec30dea84da1a156e065be1d41aed0b458933c07913934c6667543ff46e31274e010996230bfdb57e50ba9c592a2f5685afe07cbb0c82aa168734dbfb353fd60f94f0c551b8c861a45fccb819f99fa64abab138656e3d2448c35b69a707ced6b7dcac715459f9a699bebdfd5f6002a8e24c5089d96bbb657bde04fcd5c777cde9eb7f4089a002fcfc026d3da39d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1636475664267",
    },
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
      "a24014fd2b64f6b52a28829a98adb1b83551dc056cb3d96cc8305ee8b4c85066d0348dff7d2f43edb669d23e3133f79c7bcefde0993cf062472624e1d9630dd5d3b77b91900b028a66f87ac8060b953fac64c5026bb4e0111c07f3e3748a08deb024dd973974a4a82b0672b20dbb5925ea925642743051a7ef762c67e0d8eed071ecbee3224f429eae78f180ec3ba54a39e9f5cedadd4c882c075a72d96562fffade3bf47b6525ee8129d97b2fd94315d9fb5cf47b2e18555c14d36d88066a09550c7bca73b4f09fb94b2edfa7ee72baef66083e700694315117aab185299828529ed595ce4a26cf44db7c7320a1b7f2e691c1445eef8bb8a07bb8307654d1583d95602c82cdda58fa8b4db09e45cb8d1f87f36b6f3debce37abedda0f8ddb6b2ff00c45931c34d7981a97fae6e305f57720152fb47ad43c37ca2f0d5a7e1c4b434069096d30764d875a23739ca489cbd2d16098a42624c92871877490986c6c83bd4b80224f8b6a162d44613af6d072d8301e0f2c886dc74ae31173589cc278ecb23e98a96593d30539565cc11597a590bced10b90d96911747c1d69fcf224f9790d23a5757adb1a680b71e151688a04f6a3a35512e50a969f7d28fbc60368f96375e3be11564943d858f38e394e612104d2b6c9e826a2d76d830e2cfd6de1582f5c47e9e83924cfe3c93a6e78d8b372d7fa54738c0c6aed25f1246c1d2ffa1ed9c113734af35e4d01e488996efb036747dfa8b485cd2360bf9b5f582dfa47d0a20850a0af6f53411ac035ffe6be7c5472cae3eca488577dc1d261b115641bb435c977b668f5ca76f120daed487986bf5cf5d6b723419610f857aa9a85d7c2cb415abe52b0883387e5f77ebf40f853763fb78040000",
    ],
    [
      "ETag",
      "vg3FtlkLsrcR18FiTew3Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1636475664267"
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
      "83400cc6bf4b7dcbe2dc1f30247bc174ea9239276389c62ccb0d0a6302c5bb435d967d777b38a751137d73b4e5d7d2e7e1b6f0981611b8b04c93a70ae5e628417d6b021f559569c58f920a8560016a913019d3f4353a5d0559bb5bdc799573ec4fee2749afc7840a57980b70b710a798450adc872d1422476e0b29abf262516716e84d698ad3c01f8e2f39cf2932f978361a79fdd10076d6a131125a2c6afe1f6df39d056b5afa18a3c42244b34b29698da11e1a994ae465860d45950c51410dd72f124955292451832b8d96d338b1db76c7e9da76a7653b0c66140a9d52c1ec6ccafb81262d329f5e5825d80cc83a64c1717d3e73398d6a21261c8e03bb53eff7159018928c167f7225afbb12fc173eb0bd03df39915355e8037531baf17e1bc7967e8e3af782c10f426936ea8004c3ebc134f0ae27869befa5f7371ad54412fba8d05878d2ec9c761dbbf9eeea1919a7f93bae96155a100abe1c57a906371699c2dd1b56907beb7a020000",
    ],
    [
      "ETag",
      "foSxd8hTl35nXAu7/RPYPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:48 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-28-1636475664267",
    },
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
      "85535b6f9b3014fe2bc87bd9b4e602214022455dd4b20589a45d425a4dd394d8c650b780896dda7555fefb0ed0f4a24aed13c6e7bb9c9b1fd00d2f62344684a7bb8ac9fb4fd782a023c4344ee17696bae1ee6be6ecdc3cdccdf8bf991dffbd9a4e2680e0354be1bccc5847894a52a6c6eb553795a22ab114a203421dcbeb98cec0b1dda1e3d896e3024fb12c09797103ec2bad4b35eef50ededd54883463b8e4aa4b45fe74dfbbb57aa514d78c6ad57b6dd90317d57bdff43813146b2e8ac97a0509548ac90dcb31cf208567664cbebd96ee729c775300df72ca30a5a22a749d16485051243cad64a38ac60fa849f3c501adfcd03f898c79b0f8bcc5794ddd7e31b032361bc9549569e3fbf26c6e6c4b70bac28aa9ad7139f397be616c25a342c61b1e6f8d89716c84c13c880c134c63a6342f1acb08938cd5768f5d09decea226600dd26d70e3f61d6c7afd1149884b136f3024499f11e211778807a44f4736b363c230f074addeb070218aa16b5162533230938137f230b69c813d4c4ccba47dc21287c496e958a321da1fa13bc9353be5aa148ab7ad4197cb20f237d172bd3899467e534682a101a76d7275112ff3d4502480dea96b5f47b900a7bacfc122f297d39328b8f0dbd1862cc5f47eb583e12638530cd058e29c6926e72286a6a1f3b3551005678b69088c665ee7078442e3df0fcf84e8be6cbaac9b6fede5d88dff017081b3aa41dcb60764a2fdfe0f20600d5b32fab9f697bf507bb5640993aca01f8f0ec04de0c3d774586dc0c272838dd2f00f8b42556d42256b1786e74d7a8f6ccf73dce62d6a2cf59b186cc9a133b546adc87256e8c78adad586425bb34a3d812008735e048b1f10fd0f23bc87ea5a040000",
    ],
    [
      "ETag",
      "Hg7Lq+l6q7mLqHizH4dxhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1636475664267"
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
      "6d",
      "6b",
      "c2",
      "40",
      "0c80ff4bf6d58eb57675087e50d9d84671f38d0d86c8d9a6b5ae6dcebbd451c4ff6eaeeecb5d927b923cdc197e8b3a8521ec8afcd8a069ef72e4b90b16689b92ad5c9a6a8bd00364950bf95e4c677a3d3ff9a7fd8457fde3f28bbe553e1a0961933d560a8667c80a2c530bc39f33d4aa4269db6e4d3751306eb5abbcc41fe395a415a52e9dade3783c899fe1b2b9f4e040bb056668b04ed00dd4860e98f09b73b5aad2257a961a93a0850eee1e72438d5686c8938a173c797ed48fc2c1631485413410b0a4447141b5b0eb25c81a2656e582fe44157c014c178a75d69d2757be0f03e7b4f9a7272da3fd3424ab2dbaad0f378329392b165b360df62051f21baf05dff2cb152370cfc76a010000",
    ],
    [
      "ETag",
      "JiCNpUQv1vhBtT3qSWoXag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:49 GMT",
      "Server",
      "ESF",
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
      "000002ffedd35b7643400000d0bdcc77e26818a57f26a1251a04f1f8718c4ec388106f72baf7e6741bcdddc3bd83244d49dbc65d55902b780373b2919894d9d72252c7bc22858cdcd23f2de176540a79ec95bacad0ba809ced4ca2515d3e0c4ab56a3da4eacec2aee112c76cd127a7c11b8b53f11c72816ae2b1fc9e9df3c44e3de58fba915de1ce2edb03e92f48cda837bc9a06a6384a2895681b65ec7ee6468c12fd85127f21ba5c60cdac2c21f56e5ee378388f6c14443eec05f8d574ac6a0b5808353ef0fc4310584a0c07bc09a0748a94edb17166546e3c7551defb9c3798a7a7ff0bac0099eabc216d9c3fb673509256e0af7edccd3579fc47246948037e7e010b16dbb919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-29-1636475664267",
    },
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
      "ff85535d6f9b3014fd2bc87b6d4212480891a2354ae91a2d212b9056d33421632ed42dc1149b4e5d95ffbe8b69ba5695da276cdf73ee39f7832772c7cb94cc48c2f3fb06eac72fb72221270414cdf1d5cffff270e4abfcfc3b6c2f2ff9948d1d73319f2382b72c49f755013d299a9a819cedc27e5e8ba6a2b5103d4cd41bb9bde1c49ad8ce7832b147130779128a6ccdcb3b64df2855c999691eb5fbb9107901b4e2b2cfc4fee5dd7c1899552d6e812969be953451459a1f8b7e2d04a38a8b72be0bd14023a18e614f798116fe33d3e4f46dea3ea7fb7e8ee007ce8032269a52b5b630051365c6f3a6d659c9ec89689baf0e24f4d6de323298289a7d1997740f27464a158dd56305c679b0dd182bff7c1b6c16d16aebc7e1f2c2db2cfacbed7ab7f143e3fac20b3c43d1a400cd35e6c6a9bef97841fd14a4e2a5568fdae756f9b941abf7636909282da10bc6ce604287d3819b6489c3b2a9354eb20124c93471c6d44a06ccb5c14e13a0c8d3a29a454b51b2c1d01d8eec2476122b8b6d6708f1141c37ce6c7b68d96e9adaa9450e27e44fcd159c715909c9bb0e91eb6015797114ecfce522f27409196d0a75d6196b0b78ed51618108faa0a6431be50295da76affcc80b16cb6875e575135e434ed963788f33ce682101d1b4c6e629a837228576b5171bef0cc17a623f8e414966bf9e48dbf3d6c5ab96bfd0231c606b57e92f09a360e57fd3768e882b5a341af2d01d4885966fb036747df88d485cd22e0bb9dc79c14fd23d0590410d25fb7c9a08d6814fffb5e3e22316571f65a4c23bee0e93ad08aba1db21aecb3db2a7ae655b44836bf52e668fac63d7da1c6d46d843a99e2bea161f0bedc41af902c2208edfd7dd3afc034febc72978040000",
    ],
    [
      "ETag",
      "NgziS2NtgFKeOQQi8c57/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d11b1146dc205286a957fca9531646987526c3b65772b41c2bb3b5b118d9ae8cd7666facd74cee9eee039ce4270611e47eb02e5f624423d32c118559168c58f9c328560016a1131f91c3de4f7afbd7470b9eedb8353efcedb6cf4a8d96442054b4c05b83b58c498840adcc71d6422456e0b2829d26c566616e86d6e8a137fecf56f394f2934797fdaedb6dadd0eecad636328b49895fc3fda9ef616ac683ec6054acc0234bbe492561868cfc85422cd13ac282a64800a4ab87c11492a7221892a5ca9d42e2b67ceb96337ea8e63d79c0683090542c794313b9df07ea0498b644c1b56090e03b20c59f0a23c5fb81c87a510137a7ddfb1cbfdbe02120392e1ec4f2ee7759782ffc2077670e03b27522a327da46eba83d66fe3d8d2cf51d72dbff383509a8d3a22bed7eb4cfc566f68b8a783f4f656a31a4a621f151a0bcfaaf645bde154df5dbd22e3347fc7d5b2400b02c197e32ed6e02e44a270ff0674765e6d7a020000",
    ],
    [
      "ETag",
      "kgKpJzMmO9qN4O/IHIwwtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:49 GMT",
      "Server",
      "ESF",
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
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-30-1636475664267",
    },
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
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c87bd9b4258184908b1475594b37d45c5a42da4dd3941873a06e0153dbb4aaaafcf71da0e94595da278ccf7739373f906b9e47644c429edc9420ef3f5d89907c23a06982b7f98969df9db0ee71b4ecf3a31fe6d7452ece92c90411bc62299a1529b494282503355eafda89146541a5102d146af5cc96e5f41c7bd0771cbbeb0c90a7208d673cbf46f6a5d6851a773a7bef76224492022db86a33913ddd776ebb9d428a2b605a755e5b76d04575de373d4805a39a8b7cb25e6102a502b9818cf21453786646e1f7d7d26d4eb37682e05bce803226ca5c5769a1041379cc9352d6aa64fc40ea345f1cc8ca9db98781319ffefebca55945dd7e31a832361b09aa4cb571ec2fe7c6b640a74baa406d8d8b5faeef1ac656021332daf0686b4c8c0363e6cdbdc0b0d03402a5795e5b06344ca1b27bec8af7761615816a946e829b81e9506b688ec2381cb078d8eb87b10961380c077dda0b4d36b2c18e42a0c8d3957acda2b9c8591cd151dc63103b4e18f7ac8899dd10c9d668c8a8d535bb8e3dea86a64d76dfc89de41a8eb82a84e24d6bc885ef05ee26f0d78bc369e0d665c4141b70d4245715f1324f8d4522e89dba7655940b74aafaec2d02d79f1e06deb9db8c76060965f7ab1b1c6e4c530588a69266a041ce45844d23a7cb951778cbc574868c7a5ea77b8422e3bf0fcf84e0bea8bbaceb6fe5e5d4653e01ce695ad688dbe6402cb2dbfd4304ae614326676bd7ff439a2b1f629090b38f4787e03af0e16bdaaf366271b9d14669fcc74561aa3261129a85e1599dde237b649af690d460a9dfc42cbbbfef4ca551294206b97eaca8596d2cb4312bd513088338e785b7f889d1ffd94ea0805a040000",
    ],
    [
      "ETag",
      "nK04wKc2FdO5iDB0+NnoQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1636475664267"
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
      "000002ff2d906d6b83301080ffcbedab8e563b05a11fead8d8c0bdb91506a394544f67ab3997971511fffb2e765f92bbcb93bb2719e1d4c812123834f58f45355cd568de5c90a3b6add1bcf5243582076844cde436d858fc8c4f6dad68782214a954745eaf99d0c53776029211aa06db5243f23582141df2b5fd5ecd1d193343ef2af7d9cbe683d38e4a973e6fb36c93667730ed260f8e74c8b14285b240d7b05774c4c23c3a572dbabe455f9355056a98e1f9808d6c2f1491cf153f5cf8cb288c56f14d14ad822866b0a5429886a47bc63bf0184346b4399d5915960ca83964eb6a5e7fb91c5c07a173dafdd3e96050bf2ae2d11addd4c5c5e0969c95615ba32c7a5008fe8d87c65cf2e90f74b528706a010000",
    ],
    [
      "ETag",
      "U2AueX7klgroyMoeaBnrow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:50 GMT",
      "Server",
      "ESF",
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
      "5b",
      "7282301400d0bde45b9caaa513fa2722af48e459941f06f01281aa082810a77bafd36dd4b387f340499641dbc6dda58233fa44633297a6d994d45856fba32884186fd3c059715b0677e4cc5df5b79d6fadb1137a7ba338317285158edd868f87ad6b7343b933f0e6acf2b558848ba26347380be2726159a1400383a6a24ab56f9cb7fdd5a923edeb5e46119d6937b6d11a0ff2d9d92ef52ca095475a6a2621c1a2c4c9c1dbaf938a1e75ac979bfc02f82d22f3eedebbc6b0c37efe5e930f4b57582f0b374a43d93819b952d98cc8f9d2f48177fe26edc9601275faf2f27fa10982a12e1a68e3e2b97d214ad204fdd58fbbb186e77f1992061af4f30b7b051f9c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-31-1636475664267",
    },
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
      "ff85536b6f9b3014fd2bc8fbb8e64d428814ad5942d76c816c84b4daa6091973a16e09a6d8648aaafcf75d4cd3b5aad47ec2f63de79e731f3c903b9ec76442229ede57501e3edc8a889c115034c5d7afd24fe305b3cbd5c5ecd722d97ffbe8ba9fd3e91411bc6649ba2b32684951950ce464bb69a7a5a80a5a0ad1c244ad41afd51b0d46a6351c8dccfec8429e842c59f1fc0ed9374a1572d2e99cb4dba9106906b4e0b2cdc4eee9bdb3ef778a52dc0253b2f352b2832ab2f3b6e8a74c30aab8c8a7db0d1aa8249421ec28cfd0c27f661c9dbf4cdde674d74e11bce70c2863a2ca556d0b533091273cad4a9d954c1e88b6f9ec4036ceca9907061359b5cbc39ceee0cc88a9a2a13a14605cf86bd7587a176bdf9d05cbb5176ee6978e3b6bcfd7abadeb6d8ceb4bc7770c45a30c34d7981ae7fae6e105f563908ae75a3da89f6be5c7062d5f8fa526a0b48426185add11ed8dbb769444164bc683619474218ac69135a483a8cb6c13cc38028a3c2daa5934c79a59cf326333092119b3d01cf7a3d0b6c67198d87dd3eedbb1657687e47846fe965cc182cb4248de74885cfbcbc009037febcd6781a34b486895a94563ac2ee0b947850522e88d9a8e75940b54aadbbdf402c79fcd83e595d34c7805296587cd3dce38a1990444d3129ba7a074458c0d23decc751608d613fb7e0a4a32f9fd40ea9ed72e9eb5fc891ee0006bbb4a7fc926f097de176de784b8a259a521fbe6400ab47c83b5a1ebe31f44e2923659c88fade3ff24cd930f099490b3f7a789601d78f75f3b2d3e6271f551462abce3ee30598bb0129a1de2badc13dbee5afd21d1e052bd8a8d87d6a96b758e3a23ec20578f15358b8f853662957c026110c7efe96e1dff01b9d71c4178040000",
    ],
    [
      "ETag",
      "JsRgdDc9rLFAZDfvK+MMBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1636475664267"
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
      "c2",
      "40",
      "0c",
      "c6",
      "bf",
      "4b7dbb45101c66892fa6802c01e4cf4834869063ebe6705be7dd4d4208dfddde54346aa26f6e6df76bd7e7d9ede1292d2270619d26cf15cadd49827a6a8219aa2ad38a1f25150ac102d42261f2fed45f67fd417197048dc9762abb8bcd9df02e2f9950e123e602dc3dc429669102f7610f85c891db42caaabc58d599057a579ae23c98f9e31bce738a4c3e5e0c87ded5b00707ebd818092d5635ff8fb6e5c1820dad6718a3c42244b34b296983a1f68d4c25f232435b5125435450c3f58b4452550a496473c56e35eda6d372da9d73c7699f391d06330a854ea9607631e7fd409316d98cb6ac121c06641db2e0b83e5fb89c46b51013fae3c069d7fb7d05248624a3d59f5cc9eb3e0afe0b1fd8bb03df39915355e823d51fde7abf8d634b3f4775bda0f783509a8d3a22813feacd036f3431dcf25dfad54ea39a48621f151a0b9b8df6c579c769bcb97a4dc669fe8eab65851684822fc720d5e0c62253787805b52e94ee7a020000",
    ],
    [
      "ETag",
      "Y/IblFHnXgT0PwQrDUjXaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:51 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-32-1636475664267",
    },
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
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7b",
      "d9a426844020891475594a57a434e912d26a9aa6c49803754b30b54db6acea7fdf019a5e54a97dc2f87c9773f33db9e5794c8624e2e95d0972ffe94644e48880a629de9eecf5ccfebb73ce4ecb7fde379a5ae379779c8e4688e0154bd16d91414b89523250c3d5b29d4a5116540ad142a196dd6d59aeed3a5ecf759daeeb214f41964c797e8bec6bad0b3534cd83773b1522cd80165cb599d83edd9bbbae594871034c2bf3b5a5892eca7cdff438138c6a2ef2d16a8909940ae41ab6946798c233338ebebe966e73ba6da708de7106943151e6ba4a0b2598c8139e96b25625c37b52a7f9e24096fed49f84c664be9a859f3731d5b0f9625065acd712549969e374313f3736053a5d53056a635c9df90bdf3036129890f19ac71b63641c1bd3e03c080d0b4d63509ae7b56548a30c2abbc7ae046f675111a846e926b8f63a2eb5fa9d4194441e4bfa762f4a3a1045fdc8eb513beab081034e1c01459eaed46b16cd45ee7858fc009c5e645184da7da767f73da7dfb7bb31ebbad0711ccbe9508b3c1c913f926b38e1aa108a37ad21578b20f4d7e162359b8c43bf2e23a1d8809326b9aa8897796a2c1241efd4f55045b940a7aacfc12cf417e349185cfacd68a79052b65fdee170139a29403495740b1ae4b988b169e462be0cc2603e1b4f9151cfebe2805064f8ebfe9910ee8bbacbbafe565eae53fb1f0097342b6bc4ae3910ecc2c36f44e01a3664f263e52f7e92e66a010948c8d9c7a343701df8f0351d561bb1b8dc68a334fee3a23055993009cdc2f06d9dde237b60f51c9bd460a9dfc45cc73d74a6d2a814610bb97eaca8596d2c",
      "b4312bd513088338e75930fb8ed1ffc888ead35a040000",
    ],
    [
      "ETag",
      "DytN3xv4HFuz7Bag1AO2Ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1636475664267"
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
      "000002ff2d90616b83301086ffcbed6b85d5762908fdb00e718294cdb53018a5a4f1743af55c125744fcefbbd87ec95dde3cb9f7e546f829db0c02b894c56f8f7a7828d0bebb2645d3d7d670e9a835080b402b0b26932cfc14246232857f882b3f2a4d545db75b268cfac6464230425e629d1908be46686583fced7cd6f344c6ecd03925de1fc2284c59682873c2fe9824cfbb2484e9342da0a24b8a396a6c15ba919da60a958d5d5a239bae46cf50af151a98e1f9a1d0d477521379ac782bdf5b8a95586f9e8458fb62c3604d4ada925a668f1fc03696acac53ba72585832a0e79673e7f3f9c7b270814e77743758346f9ad8d7a0b37cbcd9bf908b6439aad53d2e40495ec66b696ff7e91f1491a96269010000",
    ],
    [
      "ETag",
      "LdEX6o6Iosg2TIj2GisGjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:51 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd34b7282300000d0bb642d8c062949770d6dca277c44e874d83014a3460cc6c808d8e9ddebf41af5dde17d83ba69f8e552f5a79677e0194c35c46663860a113aec8bb7ce3d04e4687d2c628ad3da53ec4657ca28dd5d3a0e2c73a7c399e550ec460987b073a86f941d0e0b6af7a19dd0d3576ba00d63e741439c96914593f0b8849970a47c8a5661a2d7dbd683197ced159e43c2b23a72ad512ed135b879ebd5a44edbab45e05a069f4474058b0cd66d260cfd7cf02352be8fc8299ca250c868b57018cc83d8af7c5a92bd76d98beaa53cc43c5fb816cad13cdd79c27c78f8bfc00cf05109cd2f95b86fb76c8c67e0af7ed54f8adfff135e6baec1cf2f447af33819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-33-1636475664267",
    },
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
      "535d4fa34014fd2b64f6d5b6d852689b346bd3e25ad3520b54b3d96cc80c5c709432c80c1a63fadff732585763a24fcccc3df79c733f7821f7bc48c884309e3dd4503dffb8138c9c105034c3d75b77e45c2d9ca7346797b0352fb7ccbcb4b7d32922789325e9becca123455dc52027bba09b55a22e69254407893a8341e7d41ed89633b46dab6f3b9827214f57bcb86fd8952ae5a4d73b6a773321b21c68c9653716fbb7f7de63bf5756e20e62257b1f257ba8227b5f8bfecc454c1517c57417a0815a4215c19ef21c2dfccf4cd8d947ea2ea7fb6e86e0471e038d635117aab18514b128529ed59566259317a26dbe3b90c05db9f3d088455eef8ba8a07b383112aa68a49e4b30cefdcdda587ae71b7f3d0b971b2f0ae617ee7ad69d6f56bbb517183717aeef1a8ab21c74ae3135cef4cdc30bea2720152fb47ad83c37caaf0d5a7e1e4b9380d212da60e498363d1d99639632274e4783214b4d606cc49c211d30331e5b60250c28e669519d450b5124d466c3940ea3e1d872220b19a2b1354e22469d611f1c13fa89490e27e4a9e20a165c9642f2b643e4c65f866e14fa3b6f3e0b5d5d424aeb5c2d5a634d01ef3d2a2c10415fd47468a25ca052d3eea517bafe6c1e2eafdd76c22bc868fc1c3ce08c539a4b4034adb0790aaab548b061c49baddd0582f5c4ae8e4149267f5e48d3f3c6c5bb96bfa58738c0c6aed25f1284fed2fba5ed1c11d734af35e4b13d90122ddf626de8faf01791b8a42d0bd9ee5cff37699f7c48a18222fe7e9a08d6816fffb5e3e22316571f65a4c23bee4e2c1b91b8827687b82ef7983deef76d936870a53ec5acb179ec5ac3d130c21e0af55a51bbf858682b56cb37100671fc9eeed6e11ffd0fef6178040000",
    ],
    [
      "ETag",
      "hE87PD7wflbJeQ0JQb0J6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1636475664267"
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
      "8d92514fc2400cc7bf4b7d1d09c81cb88487a1a88b0371cc2763c8712b30ddd67977d310c277b737118d9ae8cbaded7eedfaffefb6f0949529f8b0c856cf35aacdd10acdad0d62d4756e343f2a2a35820368c48ac9d3da5de7c5958cb3eb3454d1bae8f7c78b60306042cb351602fc2d2c33cc530dfefd164a5120b749caeba29c3799036653d9e22c89c3c925e705a5369fdc4551308c46b0730e8da93062def0ff687bd839f0488b1897a8b0946877a9143da234a195a94551e5d8d2542b891a1ab879b15254574211b5b8d2ea765b1dafebb9bd13cf738fbd1e83394961322a99bd9bf17e60c8883ca65756091e03aa0959f0b2395fb89ca58d101b8693c4739bfdbe020a25a974fe2757f1ba6bc17fe103db3bf09d1305d5a5395017d14df0db38b6f473d479908c7e10dab051072409c7a359128ca7967bd84b1f6e0ceaa922f651a3b5b0d376fb273daffdeeea1959a7f93bbe51353a20055f8eabcc80bf14b9c6dd1b9fe58b9c7a020000",
    ],
    [
      "ETag",
      "9u4hlmHcRiKdIrLhm88MbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:53 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-34-1636475664267",
    },
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
      "0000000002ff85535b6fda3014fe2b91f7b2490502b95124d45534db2201ed4268374d1338ce496a1ae2d476a8ba8affbe93a4f4a24aed531c9fef726e7e2037bc48c888c43cbbad40de7fda88981c11d034c35bb65cf07f9b4de54cd8cc0d2e7e9945384cefc66344f09aa5e8b6cca1a3442519a8d172d1cda4a84a2a85e8a050c7b23b7dd7726dcf715d7be07ac85390a7535edc20fb5aeb528d7abd8377371322cb81965c7599d83eddf776835e29c5069856bdd7963d7451bdf74d4f72c1a8e6a2182f179840a540ae604b798e293c3393f8eb6be92ea7db6e86e01d6740191355a1ebb450828922e559251b55327a204d9a2f0e64e14ffd4964cc82f9e7754235acbf185419ab950455e5daf8169ecf8c75893ed754815a1b573ffcd0378cb5042664b2e2c9da181b27c634980591d147cb0494e6456318d13887daecb127c1db49d404aa51ba0dae3cd3a5fda1791ca7b1c7d2a1e5c4a909713c8c3d875ab1c98e6db0931828f274addeb068210ad3eb7b890dc3d84a1d135c6a0d11ee59ce9081633bcec04b1cdb8c2990fd11b9935cc31957a550bc6d0cb90a83c85f45e1723e398dfca68c946203cedae4ea225ee6a9b14804bd53d7be8e72814e75978379e487a79328b8f4dbc14e21a3ec7e718ba34d69ae00d154d22d6890339160d3c8c5f9228882f3f9e91419cdb42e0e0845467f1e9e09d17dd9745937dfdacbb51bff03e092e65583d8b507d227fbfd5f44e012b664f273e987bf497b15420a120af6f1e810dc043e7c4b87c5462cae36da288dffb8284cd5264c42bb307cdba4f7c83eb6067d873460a9dfc42ccf3e74a6d6a815610b857eaca85d6c2cb435abd413088338e77930ff8ed1ff3f871d4958040000",
    ],
    [
      "ETag",
      "cUSizjju5CcM6IPX0nR8fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1636475664267"
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
      "df",
      "6f",
      "82",
      "40",
      "0c",
      "80",
      "ff",
      "97",
      "ee",
      "71920032c84c7c5067f62366d9dcf0618b31c751190e28bb2b5b88f17fb7877bb96b7b5fdb2f7784efb2c961025959fc7468faab02f9d5056bb45dc556ae961a8b3002645508b949a27cf911c6f7b9be4e37d9935e70723b9b4e85b0fa0b6b059323ec4bac720b93cf2334aa4669dbedcc305130ee5b57b99bbd2f25ab2977d973ba5acde6ab259cb6a7111c285be31e0d361addbcd6d001353f3a55abeab642cf5267345a18e0e1a130d4b5ca107952f1c69117c4e3384a6ee2380ae344c08ab4e2921a61d33790354cacaa35fd89290402982114e9fd70fe4a39f443dff343cf0f9cd9f6bf67de33da17432260d1edf62f1e0b726e2cce6c3a1c8156f2250f255ff2d319a94708ad6f010000",
    ],
    [
      "ETag",
      "V74dEZ26Gdc+UVbJcCt79A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:53 GMT",
      "Server",
      "ESF",
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
      "80e1bb642d8cd89684ee8cd61a30419087b07128440c2a28c8b3d3bb97e935ea77807ff77f83288e79551d1ec599e7e01df4d14c9363d9b821bc6a857b8c53315c3dfad5bda68c35fa822a2a8c292bb21a37116c8e3b7eb7d5662d05cc25b9754ff6b1c122df9afb6ebd52b768e9ec558d8468d85e4c82caf5d0fa1ce59a8e21839b7937d513716af42b399b27699b2c0c4d877acd6a177b2274a827658f8d3d6c1207f1990f83c29c2915a9f7a4a48aeddba13d86d2405469e652cbe8d5d493766d1fe0dc99564b5c10b466e4a29a1fa6e1879fadd21d7bf9e9e9ff0213c0bb9b28797510e3ed2f6f9a36017feb1f1efd8d8fff631e95bc043fbf6d30939a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-35-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda3c792591a2354be91a29211d21eda66942c6b950b780293699a22aff7d17d374ed26b59fb07dcfb9e7dc074fe481173b3221314f1f6ba80e9fee454cce08289ae2ebf72f957739dbafa4bcde6eedd0bfe90779924ea788e00d4bd2bccca023455d319093eda69b56a22e6925440713754cbb33704cc7726dc7b1868e8b3c0959b2e4c503b2ef942ae5a4d73b69775321d20c68c9659789fce5bdb71ff6ca4adc0353b2f756b2872ab2f7bee8e74c30aab828a6db0d1aa8255411e4946768e12f73179fbf4ddde534efa608de730694315117aab185299828129ed695ce4a264f44db7c75201b6fe9cd438389acce8ba8a0399c193baa68a40e251897c17a652cfccb75b09a858bb51f6de657de6ad69daf97db95bf316eafbcc033148d33d05c636a9ceb9b8f17d4df8154bcd0ea61f3dc283f3768f1ff581a024a4b688391db77e860d41fc749ecb26464da71d287381ec5ae4dcdb8cfc61658bb1828f2b4a866d14214c36410334a21628cb991659ac368c4ec71e49a63eaf66d6768398c1ccfc8ef8a2bb8e0b21492b71d22b7c122f4a230d8faf359e8e912125a67eaa235d614f0daa3c20211f44e4dc726ca052a35ed5ef8a117cce6e1e2c66b27bc8494b2c3e611679cd04c02a26985cd5350adc40e1b46fcd9cabb40b09ed8f52928c9e4e713697adeb878d5f2177a88036cec2afd259b3058f85fb59d13e28666b586ecdb0329d1f21dd686ae8fbf10894bda6621dfb65ef083b44f01245041c13e9e268275e0c37fedb4f888c5d54719a9f08ebbc36423c22a687788eb724fecb1391eeb3f55d14afd1bb306fdc1a96b4d8e2623e450a8e78adac5c7425bb15abe803088e3f775b78e7f00d310c7d678040000",
    ],
    [
      "ETag",
      "XBrEFAvMssPUU5TNV0Rmfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1636475664267"
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
      "000002ff8d92514fc2400cc7bf4b7d1d89280cb2c487a1a84b2622ccf8600c39b63286db3aef3a1509dfddde54346aa22fb7b6fbb5ebffbfdbc07d5626e0c13c4b1f6ad4ebbd14f9ca06133475ce461e159506c10164950a79d3e6c159ffb95d9e87ab659073c0e1cb383d3a12c2c44b2c14781b5864982706bcdb0d94aa40698b29af8b72d6640ef0bab2c56934094667921794d87c741d86fe201cc2d6d935268ad5ace1ffd176b7756045f3092e506319a3dda5d2b4c298032bd3a8a2cab165a8d6311a68e0e645aaa9ae94266a49a575d86db5dd43b7d3ebba6ee7c0ed099853ac38a352d8eba9ec074cacf2093d894a7005d04d288217cdf928e52c6984d83018456ea7d9ef2ba031269dccfee42a5977a9e42f7c60ef0e7ce7544175c93bea34bcf47f1b27967e8e3af1a3e10fc2b018b543a2e062388dfc8bb1e5eedea50fd68c66ac497c34682d6cef77fadd9ebbffe6ea3159a7e53b1eeb1a1d88955c8ef38cc15ba8dce0f615945a36c27a020000",
    ],
    [
      "ETag",
      "W1tBG8x1nHLjhIltItLzPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:54 GMT",
      "Server",
      "ESF",
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
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE  `record_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-36-1636475664267",
    },
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
      "a24014fe2b64f66537a9228278494cd758b64ba2b6556cb7d96c74180e745a647066686b1afffb1ea0f69226ed0b0c73becbb9f144ee781691010979b22d40eebedd8a901c11d034c1db478b26f185737e7ab9dd39e29add8dcd6df1301c2282972c4537790a0d250ac9400d968b6622459153294403851ab6dbb05cdb75ba1dd775da6e17790ad278c2b33b64df689dab81691ebc9b8910490a34e7aac9c4e6e5debc6f9bb914b7c0b432df5b9ae8a2cccf4d8f53c1a8e6221b2e179840a140ae6043798a29bc32a3f0e77be926a79b6682e07bce8032268a4c9769a1041359cc934256aa64f044aa34df1cc8c29b78e3c0988efe7c5f4754c3fa874195b15a495045aa8d5ff3b3a9b1ced1e7862a506be3eab737f70c632d810919ad78b43686c6b131f1a77e6058681981d23cab0c031aa6509a3df7c4ff38899240354ad7c155b7e552abd7ea8771d86571cfee84710bc2b017763bd40e5bacef8013854091a74bf58a453391457dbbd5a6cca6605976d80d5b2d2b8eda7164c796db0d1dd6672ceeb45d46f647e441720d275ce542f1ba31e46aee07de2a982f67e351e05565c4141b7052275716f1364f8d4522e893baf665940b742abbeccf026f3e1a07fea5570f76020965bbc516471bd35401a2a9a41bd020a722c2a691f3b3851ff867b3d10419d5b4ce0f0845067f9f5e09c12eafbaacab77e9e53a95ff017049d3a242dcd7076291fdfe1f2270096b32b9587af36b525fcd21060919fb7a7408ae025ffe4b87c5462cae36da288ddfb8284c95264c42bd307c53a5f7cceee3a34d2ab0d41f62bd9e73e84ca9512ac20632fd5c51bdd858686d56a817100671ce337f768ad1ff5e1a023958040000",
    ],
    [
      "ETag",
      "x1agfQ4PGVqy4oYckC/quw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1636475664267"
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
      "90516b83301080ffcbedb532b5ce52a10f762d6c206373eb608c52523d9dce782e892b22fef75dec5e92bbcb77771f19e1bb6a7388e05c953f3daae1a644f362831475df18cd5747ad4658001a513279093c2f4d5bbdfe10bbdb5cc9f5bbaccb78b36142675f28054423141536b986e873845648e4b6d349cd13193343672bbbf86dcf99a4dc664f872489b7c91ea6e3b4809ace2916a8b0cdd0ceeb14d5989947abaa85ec1a7434f52a430d333c3f948afa4e2822872bce3274bc701906abbb300cfc70c56043993015b5cc1e5e81d71832a249e9c2a6e031a0e690a58bf9fce5b2effaaee3fa8eef5ab3e37fcf7630a89f15b18046bbdbbd7adc937533ec6c548f0bc8047fc94365aef9f4078b37da496f010000",
    ],
    [
      "ETag",
      "w411RRns9YaD/drm9VmjgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:55 GMT",
      "Server",
      "ESF",
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
      "02ffedd35b7282301400d0bde45b1c1179a47fd168a5f2102a55fc61e0368d88d51804834ef75ea7dba8670fe78e720056d7d9e554b1237a415d3ec47de82f84339e5d7954b5400fda29d47377da39d31194a66faf5d99318d8b22bc45a14ce33a29bf6e6405785f5c5746f849bc9ba84cb9d5135d2a88137c5c50b5ea3c6244fba651cc691aebdddebe4264cc71f616e42af5d310461639ee5caa7b67a7b037da773cf5d7760e7c76955c11c29667935bed6848e353e97a6a5725f371c735479a746b04b543c1c7bb8f25135cca78d01c641a9059d05a422b2e9b0905b00793fed3d3ff857a8829514a5667e563bb6162dc437ff5b34b27d8e3ff98e59249f4f30b1f3e0ab319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-37-1636475664267",
    },
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
      "536b4fdb3014fd2b91f7953685b4e943aa46958651a94d210fd8344d91ed38c190c62176ba21d4ffbe6b87321012fb14dbf79c7bce7de4193df02a43334478f1d8b2e6e9cbbd20e80431850b78bdf3f287e8d26eff5cc57b91dc7f5f4a2f595ccfe780e09a25f1ae2e594f8ab6a14cce92a85f34a2ad7123440f12f59c71efd475dce178e4bac333770c3cc9ca7ccdab079d5da95ace6cfba8dd2f84284a866b2efb54ec5edfedfd995d37e29e5125edf79236a848fb73d1afa5a0587151cd93080cb4923529db615e82857fcc8c9cbf4fdde778d72f00bce794614a455b296d0b525051e5bc681b9315cd9e91b1f9e680227fed7bb14545d9eeaab4c23b76626558e1543dd5ccba08b71b6b155c6cc3cd225e6d8334f22efdcda2ef6dd7c92688acdb4b3ff42d8549c90cd79a5be7e616c005f4332615af8c7aac9fb5f24b83561fc7a209202d59174cc703179f4e0653929331cd27ce88e40346c8848c47d821033a1db2614618069e11352c5c898a6693d33c1fb9297347d37448a667e9c4758629713242c659362184a0c309fadd70c5965cd642f2ae43e8365cc57e1a8749e02d62df9490e3b654cbce982ee0ad47050502e8939a0e3aca0528e976af82d80f175ebcbaf1bb09af5981e953f40833ce712919a07103cd53acd9880c1a8682c5c65f02d84cecea189468f6f319e99e6b176f5afe4a8f6180daae325f14c5e12af866ec1c1137b86c0d64df1d500d96efa036707df8054858d22e0bba4efcf007ea9e4296b38655f4ffd304b009fcf75f3b2e3e6061f541462ab8c3ee50a94568c3ba1de2a6dc237b3a1a4e07c8801bf521e6baceb16b3a87cec876ac522f15758b0f857662ad7c054110c61f986e1dfe02c4f9ba9578040000",
    ],
    [
      "ETag",
      "hCfkSH/uxPTvoUjXDsCUAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1636475664267"
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
      "000002ff8d92614f83400c86ff4bfd288b53110c891f50e7c4e0a60c4d8c599613cac6048a77877359f6dfeda14ea326fae568cbd3d2f7e556f098572978f0904f9f1a94cbad29ea6b1344a89a422b7ed45429040b508b29937a36ec2ffa3bdbb7555f9def5ddcbe6cfbf1dde2e8880995ccb014e0ad20cbb1481578f72ba84489dc9650d194d5a4cd2cd0cbda144771140cfa9c97949a7c701386fe71d883b5b5694c85169396ff47db786dc19c1e22cc506295a0d9a59634c7440746a612655d604751231354d0c2ed8ba9a4a61692a8c395cebedbd975f61ddb3d701c7bcf71192c28113aa78ad99b11ef079ab428225ab04a7018906dc882b3f67ce6729eb6424c180c62c76ef7fb0a484c48a6933fb99ad79d09fe0b1fd8bb03df39515253e90d75160efddfc6b1a59fa34efdb8f783509a8dda207170d91bc5fee595e1c6efd28f971ad59524f651a1b170b76b1f1eb84ef7cdd513324ef3773c2d1bb420117c39ce730d5e260a85eb570ad4983e7a020000",
    ],
    [
      "ETag",
      "thOGwG/+VnGsH2JVx+ATYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:56 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-38-1636475664267",
    },
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
      "9b3014fe2bc87bd9a4262109101229eaa294756829e90869554d5362cc81ba054cb1495555f9ef3b40d38b2ab50f7bc2f87c9773f323b9e579442624e4c95d05e5c3971b119223028a26786befdc7ce727235ffc8aced7a7dee9d57c38bf9f4e11c16b96a4599142478aaa642027eb5537294555d052880e0a758676a76f0d2d63645a9631b046c89390c60b9edf22fb5aa9424e7abd83773711224981165c7699c89eef7bbb41af28c50d30257b6f2d7be8227b1f9b1ea78251c5453e5daf30814a42b9818cf21453786146e1f7b7d25d4eb36e82e01d6740191355aeeab45082893ce6495536aa64f2489a345f1dc8ca5938f3409b2fd75ef0754bb39abcfda651a96d3625c82a55da0f7f79a66d0bf4baa612e456bbfce9f88ea66d4b60a28c363cda6a53ed589b79277879f85bb8676ea0f5318908a4e279934240c3146afba72eb9ef675313a842a336b819e916eddbfa388cc3118beda119c63a84a11d8e4c3a0c753636c08842a0c853b57ac3a2b9c8fb36187a3864f6184c0459a6ae53cb648cda2630631cd338c2f07040f647e4bee40a4eb82c84e46dabc8a5ef06ce26f0d7de7c16384d1931c5769cb4c9d545bcce53619108faa0ae7d1de5029deabebb5ee0f8b379e05e38eda8179050f6b0bac361c7349580685ad20c14946722c2a691f3e5ca0ddca5375b20a399dff90121c9e4cfe30b2178289a2eabe65b7b5946e37f005cd0b46a10bbf640fa64bf3ffa3f051325fe220437bb6593df6bc7bf22ed950f319490b3cfa78fe026f0e9033dbc16c4e27b411ba9f01f778dc9da8495d0ee1ccf9afc9ed8636b60d75b89e052bd8b19fae0d0dc5aa356840c72f55451fb5aea5e35a14a3e833088abe2b9de2946ff01ff69da2ead040000",
    ],
    [
      "ETag",
      "8vInvRg7RoKdPUGNGYC3Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1636475664267"
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
      "5b",
      "6b",
      "83401085ffcbf455a126a916210fa6489b126c6b1be88510363a1ae365eceeda20e27fcface9cbceecd96fe71c6680b26852f0e150e4bf1dcafe2647fd669a18555769c5a5a5462158805ae44c5651f03c6bc2b2f58ece77f955be64e7f433582e9950c9116b01fe00598155aac0ff19a01135f2b7fd5e4e1319d37d6b9475f4113e86310b35a54688b69b4db0da8430ee460b4e74883143894d8266642be984895e9bb44ad46d85b6a24e26a86082a7875c52d70a4964b362cfef6dc79dbb0befce751733d763b0a244e8821a66b7efc0369ab4a8623a735870189053cbb9b3e9fc9b640eb4fb4757bd46f52a897d151acbdbabfd0399489aa36ad9a10589e0653c15fa7a1f2faafb935069010000",
    ],
    [
      "ETag",
      "lNAJ2nEkp7h1ZkYkOfwdXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:56 GMT",
      "Server",
      "ESF",
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
      "edd35b7282301400d0bde45b9d8e4c2cf48f04507cf0064b7f32945c0a581121bc74baf73add463d7b387794a429b42d13971354e80d4dc95259a48b5d2d1363286cba2527f5d59ef3de77e47ad2b2a8cfd6f442ba41e2629fbbdcafd8552aa33ef6bf40f44b6a7da6f1f9ea60acd26d700bb10a220c5812172155d7223fcf39f3460fd891be87131e41fe1edc68b08c0a67a6d4f58e7d8a36bbd82b75db572ece7ab90970ab8331d79dd06f63ab54ba23217576a056b4daaac9e1c673b3f69b91eb695115f0a1a59230c56e439420e65ad9e5ab975c3657d2959ddd6ed82f9e9efe2f344330d645032d2b1edb25ac2833f4579f89a986c77f0249030dfaf905f098a0eb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-39-1636475664267",
    },
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
      "0002ff85536b6f9b3014fd2bc8fbda04d204f290a2354ae81a29211d9056db3421632ed42d608a4da7a8ca7fdfc5345dbb499df800f63de79e731f3c93075e266446629e3d36501f3edd8b989c115034c35b47d9abc3a3309defd7055c1dec7db611c1623e47046f599216550e3d299a9a819ced837e568ba6a2b5103d4cd41b4e7b0367e88cc6b6e38cce9d31f224e4e986970fc8be53aa9233d33c69f73321b21c68c5659f89e2f5de7c3a37ab5adc0353d27c2f69a28a343f16fd9c0b461517e57c1fa08146421d4141798e16fe3093f8e27dea3ea7453f43f013674019134da95a5b98828932e55953ebac64f64cb4cd371f247037ee323498c89ba28c4a5ac0999150452375a8c0b8f4775b63ed5deefced225cefbc28585eb9db457fb9dbecb75e60dc5eb9be6b281ae7a0b9c6dcb8d0270f0fa89f8054bcd4ea617bdd2abf3468fdef585a024a4be882d1d872e860624de3341eb37432b4e3d482389ec4639b0e638b4d47304a62a0c8d3a29a454b5152db069a9ea7119d26c36834193811b50676448783c48aed985923468e67e457cd15acb8ac84e45d87c8adbf0edd28f4f7de7211baba849436b95a75c6da02de7a545820823ea8e9d846b940a5b6dd6b2f74fdc5325cdfb8dd8437905176081e71c629cd25209ad6d83c05f55624d830e22db6ee0ac17a62d7a7a024b31fcfa4ed79ebe24dcb5fe9210eb0b5abf49b04a1bff6be683b27c40dcd1b0d79ea3e488596efb036747dfc89485cd22e0bf9ba77fd6fa4bbf221851a4af6ff69225807fefbaf9d161fb1b8fa2823159e7177986c45580ddd0e715dee893dc5674434b8567fc7c6d6c43a75adcdd16684024af55251b7f8586827d6c857100671fc9eeed6f1375e86a8ca78040000",
    ],
    [
      "ETag",
      "6t5Dyqo/6ZPmeHy5UgLoSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1636475664267"
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
      "00000002ff8d926f4fc2400cc6bf4b7de9484060e8125ea080928c3f8e91680c21e7d68de1b6cebb9b4a08dfddde54346aa26f6e6df76bd7e7d9ede021c94370e03e891f4b94dba318f5b5093c5465aa153f0aca158205a845cc6478338dd2e397ac390e87f96ddf4d2617de71dced32a1823566029c1d4409a6a102e76e07b9c890db024acb2c5f5599057a5b98e2dcf746934bce330a4d3e59b86eefdc1dc0de3a3486428b55c5ffa36db9b76043f71e4628310fd0ec5248da60a04746a6125991624d5129035450c1d58b585259084954e34aad79566bd84dbbd569db76ebc4ee30985220744239b38b39ef079ab4483d7a6695603320ab900547d5f9c4e524ac84987034f1ed56b5df57406240325cfdc915bcee5af05ff8c0de1df8ce898cca5c1fa8a13bedfd368e2dfd1cd5eff9831f84d26cd401f147e3c1dcef8d67865bbe4b3fdf6a543349eca3426361a3de3a6d77ecfa9bab17649ce6ef385a96684120f8725c251a9c48a40af7af08589f2f7a020000",
    ],
    [
      "ETag",
      "dXOfl+xm3MdFnYDLiNCR+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:57 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-40-1636475664267",
    },
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
      "c8fbb269cd5b2124448abaaca52b5a9ab484b4daa62931e6a06e0153db64eaaafcf71dd0f465d3da4f18dff37277bebb27373c8fc888843cb92d41debdbb1621d923a06982b75fd52ddbd816fcbef878f2d95b98293b2ebf9f8fc788e0154bd1ac48a1a5442919a8d172d14ea4280b2a8568a150cbeab67ab6695b83be6d5bfbf600790ad278caf31b645f695da851a7b3f36e27422429d082ab3613d9e37d67b3df29a4b806a655e7a565075d54e775d3835430aab9c8c7cb0526502a902bc8284f31852766147e7a29dde6346b2708de7006943151e6ba4a0b2598c8639e94b25625a37b52a7f9ec4016eed43d0c8cc3f97216bc5fd3ac22af3f185419ab950455a6da38f6e7a7c6ba40af2baa40ad8dcb13d7770d632d810919ad78b436c6c68131991d194fb8e66eea9d7a81d1c35422509ae77522010d53a89278e895f7ef0b5504aa51a609ae065d9bf6865d278cc3018b87663f8cbb1086c370d0a766d8658e05561402459eaed46b16cd45ee0c681c39a16939fda8ef44ccb40058d433a93d0c99693a96699be6bec5c8768ffc925cc311578550bc6918b9f4bdc05d05fe72763809dcba8c9862538e9ae4aa229ee7a9b14804bd52d7b68a72814e55f7bd59e0fa93c3c0bb709b079f4242d9dde2169f3ca6a90244534933d0204f45844d2367f3851778f3d9648a8cfa15cf760845463fee9f08c15d517759d7dfcacbb66aff1de082a6658dd83407d223dbeddeff151681efcdbebc2e3129b05a94f989289cf146819c2f5dff1b69ae7c884142cede9e0004d781375775b73788c5cd411ba5f11fe78da9ca844968e68e6775950f6c673034eb45d754eabf63c3aed5df35b8d2a81421835c3f54d4ec4dd5",
      "af3a54aa471006715c6675a7b67f00a0d0432fb7040000",
    ],
    [
      "ETag",
      "Ksqcv64ezV+HBIS3lcFuZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1636475664267"
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
      "83",
      "401085df657a1b213fc680908b46240d88a4b6814209615d47ab55c7eeae09127cf7ce9adceccc9efd76ce61eef05bb619f89096c55f8f6a7829d0bcdb2641ddd74673e9a8d5083340230a26837295574b115ca3f8f8e58964bd4ff3d36dbb6542cb1f6c04f877c84bac330dfef71d5ad1207fbb5cd434913133745639c49fe13e4c586828b3427c8aa2d75d14c2781e6750519a608e0a5b897664a7a842690e36ad164d57a3a3a95712354cf0f45028ea3ba1881c561c77ee2cbc95e76ed69ee72ebd0d833549614a6a993d7d00db1832a24ee8c66161c1809a5ace9d4fe795e5a50d747ea2bbc1a03e2a625f8dd672feb00fc846321cd5a81e6720052fe3ad348ffbf80f654e912069010000",
    ],
    [
      "ETag",
      "Ci3fj2aCvLNPX6aR5GbfUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:58 GMT",
      "Server",
      "ESF",
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
      "02ffedd35d6e82300000e0bbf4590c8a08dd9b2010e69480068497a642810aa3fc4335bbfbccae31bf3b7c4f80e398741dea59412af001385ec365bc3cd4aa664eb452bfe891abdad56f4ac5183cdbb4b742b7c3a511a15ce9e4a350b49236cbfae8b8be982a0ceaa567d9f99cde4b433f48b857021125273c7e06bb1aa5390e110f9a35852c15fcad4ca193257b11c1de8e8a227484c7d6f427c642ced8e5f8387fa34db61aea00df12a5481447e77ae35e6669c2d731ac370d8befb32552d1ad1263c3852cdca3952779c2c0cff9181527d3ba47b7957159f3d4dbc7432a2edfdefe2fb00064ae694b3a445fdb2519c205f8ab8f7a5e93d77f8de096b4e0e717e3d51c6219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1636475664267",
    },
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
      "0002ff85536b6f9b3014fd2bc8fbda04c893448ad628a12b52425620adb66942c6b950b704536c525555fefb2ea6e95a556a3f61fb9e73cfb90f9ec93d2f76644a129e3dd4503d7dbb13093923a06886af76618a22dc96bf2bf00e8fcb4945172be76a3643046f5892eecb1c3a52d4150339dd86ddac1275492b213a98a833b03bf6a83f1a8c87a3d1a0371a234f429eae78718fec5ba54a3935cd9376371322cb81965c7699d8bfbe9b879e5956e20e9892e67b491355a4f9b9e8f75c30aab82866db100dd412aa18f694e768e13f73979cbf4fdde574dfcd107ce00c2863a22e54630b533051a43cab2b9d954c9f89b6f9e6404277e52e228389bcde177141f77066eca8a2b17a2ac1b808366bc3f32f36c17a1e791b3f0e1797ee7ade5d6c56dbb51f1a37976ee01a8a263968ae3133cef5cdc70beaef402a5e68f5a8796e945f1ae47d1c4b434069096d301e5b236a3bd6244993314b9dfe30492d481227190f693fb1d86400835d0214795a54b3688135a7369b380e8b9de190c683a163c54962d9781a0ffa763ab6ec1e90e31979acb8822597a590bced10b909bcc88da360eb2fe691ab4b48699dab656bac29e0ad47850522e8939a8e4d940b546adaedf9911bcc179177edb6135e4146d953f880334e692e01d1b4c2e629a8d662870d23fe7ced2e11ac27f6f3149464fae799343d6f5cbc69f92b3dc201367695fe92300a3cff87b673425cd3bcd690437b20255abec5dad0f5f12f227149db2ce46aeb06bf48fb14400a1514eceb69225807befcd74e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c49e3823cb261a5ca98fb149efd4b526479311f650a8978adac5c7425bb15abe823088e3f775b78eff001674ae1278040000",
    ],
    [
      "ETag",
      "1n/onSUpZreIvwD9raCL8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92514fc2400cc7bf4b7d1d09e838cc121e864e850022cc07630c396e05a6db3aee6e1a42f8eef6a6a251137db9b5ddaf5dffffdd0e9ed222810016e96a53a1de1eadd0deb8608aa6caace147498541f000ad5c31199d4b1a4c06d5da74c4266af5ce547b7b1776bb4c18b5c65c42b083658a596220b8df412173e43645599517f33af3c06e4b579cc5d3fef892f39c12978f6f87c3b0378c60ef1d1a1369e5bce6ffd1f6b0f7e09116535ca2c642a1dba5d4f488caf69d4c23f332c386a14a2b3450c3f58b95a6aa949aa8c19586df6ab4c489f03b6d21fc63d1613023256d4a05b3b733de0f2c59994de98555826040d7210b5ed6e73397d3a416e2c2fe38167ebddf5740a3229dccffe44a5e772df92f7c60ef0e7ce7644e55610fd4c5f03afc6d1c5bfa39ea3c8ca31f84b16cd40189fba3681687a389e31edea5f7b616cd4413fb68d059d86afaa7ed8e68beb97a46ce69fe4e6075851e28c997e32ab5102c656670ff0a0ffb54aa7a020000",
    ],
    [
      "ETag",
      "EDaoJPJuhs76qE1BCc5yYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:59 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-42-1636475664267",
    },
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
      "da3010fe2b91f765930a21041240421da2d99689421b42bb699ac0769cd45d12a7b6d3a9aaf8efbb38a52faad67e22f89eb73b9fefd11f5e26688208cf6e6a26ef3e5c0b828e10d33883532ef371365ceb451979d4ff7136b32fc6dfcfa75340f086a57051e5aca3442d295393cdba9b495157580ad101a1cea0df713cd71bf843cf1bf43d1f788ae5e982977f807da575a526b67df0ee66426439c315575d2a8ac773fbb66f57525c33aa95fdd2d2061765bf6d7a9c0b8a3517e574b38600b56272cb0acc7388f0c44cc8e797d25d8e8b6e06e05b4e19a654d4a56e6281041565cab35a1a5534b94726e6b30fb40e16c13cb6e6abcd32feb8c34543de7db2b0b2b65bc9549d6beb4bb43ab57615785d61c5d4cebafc16448165ed24a342265b9eecaca9756ccd9627d613ae3d5b84a7616c391025614af3d2048931c95913e26156e1eb1b6a0858834c5bdcfa3d0f3ba3de98a4c4a7e9c81d92b4c70819117f885dd2a3e3011b248461e0e946ddb07029ca111dbbaeeb51c7c1d84b1d42074e3a1c02d3a784b8848dfa09f13d8fa1fd11fa2bb966275c5542f17660e8320ae3601b479be57c1607a68d14c3504eda704d13cf736a6812406ff4b56faa5c805333fd701907d16c1e8717417be10b96617ab7be812b4f71ae18a0b1c405d34c9e8a048686ce56eb300e57cbd90218e616cf0e088526bfee9f08f15d65a6accd6fe3e50d8cff017081f3da206edb0fe4a0fdfee8ff0aeb380a975fdf96c015740b32bf01053bde2aa0f34d10fd44ed51c452265949dfdf00009bc2bb4ff5f06e000b2f076c9486ffb06f54352654b276ef7861ba7c608fc7eea8870c58ea57b561cf3b0cb8d1681459c14afdd051fb6e9a799952ad1e41508475599a49edff01091cf8dab7040000",
    ],
    [
      "ETag",
      "irl9g5StLnR6c7XPA/V9JQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1636475664267"
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
      "85ffcb78852815a969d28335a84d48a32827d3340b0c48050677872a21fdefceae5e7667df7c33ef6567f86cfa12569037f5d7887abaa8915f6c91a2195b36720dd41b040f90552d647dcb7c991129737af8a9f2a0c72051f57a2d84293eb053b09aa16ab02d0dacde67e8558732763868b751309e06ab6c776ff1639c8ad05169855d9624779b2486f3feecc191f2142bd4d81768570e9a8e58f0d6a635aa1b5af40d8dba40030e768d5ad338284de48be2870b3f88aea370791345e1225a0ad852a1b8a15ed8ec15c48689559bd2b784854000ed4ac95db9f324f2950db4ff473713a379d624be064bd775f6f76423b144653da2078592cf786af8ef7dfe051fa1111369010000",
    ],
    [
      "ETag",
      "g8tt/UooasvFxfb1ne1Lag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:59 GMT",
      "Server",
      "ESF",
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
      "0002ffedd35b7282301840e1bde4591c6e46e91b14a88c522f4029bc3034fc428c0286288ad3bdd7761bf55bc17939779413025d978986418d5ed02d578d31192fda99e5f6d412c0fc7c839b2631e78ae227b72a75fd9543747cd660699fe8256a354ff5ea9d86494cda127b82c37b6f444e92c7a2de8791312be9d7415d847a99c16430571c9ff53d3e054d50d236218dc53f525dca8ccf035da6785abe56ce5edd3a452cc5512ffbd43127c7f39117feae09c4a65a575886b91c782e9b6e6dfb9299acde898b35b0eb2c78937f0b8e78ca1296a7102907a2d4c5d0697d41d652a88f9f9efe2f3442706d29872ea38fdbb589618cd0dffa99b8b5f0f8df829c0347df3fd321c27919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-43-1636475664267",
    },
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
      "000002ff85535d6f9b3014fd2bc87b5c13a02190448ad634a56ba484ac405a4dd3848c31d42d608a4dbaacca7fdfc5345daa4aed13b6ef39f79cfbc1337a606582262866d96343ebdd977b1ea3134425cee0b564e3f3edf55f6cf2afe7424fff106377693c4da780602d4be0a2ca694ff0a626544c36413fab7953e19af31e24ea59839e690f6ccb19dab6756a3bc013344f97ac7c00f69d949598e8fa41bb9f719ee514574cf4092f5edff5eda95ed5fc9e1229f4b7923aa808fd63d16f392758325e4e3701186804ad235a60968385ffcc243e7b9bbacf70d1cf00bc658462427853cad616a420bc4c59d6d42a2b9a3c2365f3e8800277e9ce438df0bc29caa8c4053dd1122c71247715d52efdf54a5b78976b7f350b176b2f0ae657ee6ad69faf979b951768b757aeef6a12c739555c6daa9da99b0717d04fa890ac54ea61fbdc2abf3468f17e2c2d01a405ed829163d8d81c19e3388d1d928e06c33835681c8f62678807b141c616b5929862e02951c5c2252f8d24b14fcdb113a5239c461631ed080fcc6134248e458dc41c39f610ed4fd053cd24bd60a2e282751d42b7fe2274a3d0df78f359e8aa1252dce4f2a233d61670ec51428100faa0a67d1b651c94da762fbcd0f567f37071e376135ed20c935df008334e712e28a0710dcd93b45ef1041a86bcd9cabd00b09ad88f4350a0c9af67d4f6bc7571d4f2577a08036ced4af54541e82fbcefcace017183f34641b6dd015560f90e6a03d7fbdf808425edb2a0eb8debff44dd934f535ad3927c3e4d00abc0a7ffda61f1010bab0f3242c21d7687885684d4b4db21a6ca7d613b8661383652e05abe8b998e75e85a9ba3cd480b5aca978abac587423bb146bc822008e3f754b7f6ff00e7c9c36178040000",
    ],
    [
      "ETag",
      "ni9BvQza1o+Bs/fxc0yF0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92514fc2400cc7bf4b7d1d09ea3874890f4341d1890ae3c91072de3a186eebbcbb6908e1bbdb9b8a464df4e5d676bf76fdff771b78ccca040278c8164f35eaf5de02ed9d0bc668eadc1a7e54541a040fd0ca0593c7323e8a8f07cf519d5eaa9765264eafa6ddf0e48409a39658480836906698270682fb0d94b2406e5394d745396f320fecba72c5493c1e8ece392f2871f9681a45612feac3d6db3526d2ca79c3ffa36db6f560450f634c5163a9d0ed52695aa1b24327d3c8a2cab165a8d60a0d3470f362a1a9aea4266a71a5e51fb6f6c5a1f0bb1d21fc03d1653027256d4625b3d309ef0796acccc7f4c22a4130a09b9005a7cdf9cce52c6984b870388a85dfecf715d0a84827f33fb98ad75d4afe0b1fd8bb03df3959505dda1d35886ec2dfc6b1a59fa3cec2b8ff8330968dda21f1f0ba3f89c3eb5bc7cddea5f7d616cdad26f6d1a0b370bfed1f75baa2fde6ea2939a7f93b81d5357aa0245f8e8bcc4290cadce0f615225507327a020000",
    ],
    [
      "ETag",
      "9aT8T9FvLufJcwhi6CKU7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:00 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-44-1636475664267",
    },
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
      "00000002ff85536d6f9b3010fe2bc8fbb2494d02844012a9eaa284766c69d225a455354d893107754b30b54da6aeea7fdf014d5f54adfd84f13d2f778fed7b72c3f3980c49c4d3db12e4dda76b119103029aa6b8bb3bb3563bcff6ff8e27d18f989e5cfadf8f8f47878788e0154bd16d91414b89523250c3d5b29d4a5116540ad142a196e3b42cb7eb3a5ecf751ddbf590a7204ba63cbf41f695d6851a763a7bef762a449a012db86a33b17ddaefecec4e21c53530ad3aaf2d3be8a23aef9b1e658251cd457eb85a6203a502b9862de519b6f0cc8ca3afafa5db9c6edb2982779c01654c94b9aeda420926f284a7a5ac55c9f09ed46dbe5890a53ff5c7a1319eaf66e1e70ddd56e4cd17832a63bd96a0ca4c1bc78bf9a9b129d0eb8a2a501be3e29bbff00d6323810919af79bc310e8d2363349be0664c3534ffd3e034080d0bdb8841699ed74d8434caa06ae031a7e0ede95404aad1aa29ae3dd3a556df1c4449e4b1a4dfed45890951d48fbc1eed46261b38e0c41150e4e94abd66d15ce4268bacae173bd0ef32cb19249e9d24d4a56e9f516aa1881759fdae695ae4e180fc915cc384ab4228de84452e1641e8afc3c56a361e857e3d4642319049d35c35c4cb3e350e89a077e67aa8aa5ca053957c300bfdc5681c06e77e73d8534829bb5bdee27127345380682ae91634c853116368e46cbe0cc2603e1b4d91519fe0d91ea1c8f0d7fd3321bc2bea9475fdadbc5ca7f6df03ce6956d6885db32098c2c3c1ff15265504ef0ad8a66db64cbb65f550e93742f18a3722e4e7ca5f5c92666b010948c8d9c79700c175e1c397ba7f3688c58783364ae33f5e39a62a1326a1b97a7c5b0fdab03dd3ecdb2ea9c152bfa90d9cde3ee34aa352842de4fa71a2e6d95491d5a5523d81b088376616cc4eb0fa0f2bbedde0b6040000",
    ],
    [
      "ETag",
      "vP1Uv72EzCDbKdaGYEJFFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1636475664267"
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
      "d1",
      "6e",
      "82",
      "40",
      "10",
      "45",
      "ff65fa5848b42236243e68435a2d92166b93a63166c1816281a1bb4b0d12febdb3d8979dd9bb67e7de4c07df7975040fe23cfb6950b63719ea57d344a89a422b2e35550ac102d4226372bade86934d3c6a9fdf6f57e9fd877fbe6cd68bf99c09957c6129c0eb20cdb1382af03e3ba84489fced7090c344c6745b1b6515bef98f7ec44249472384bb20582c031ffa7d6fc189e208539458256846d6924e98e89549ab445917682b6a64820a067878c82435b59044362bb6e3d86377e23ab3a9eb3a77ee8cc18212a173aa98dd6d816d3469514474e6b03066400e2de74e87f3779039d0fe1f5db61ad58b24f655682c4757fb0732913447d5b2410b12c1cb78caf5f5deff01f330d06c69010000",
    ],
    [
      "ETag",
      "5JSN3Mb0yKV+If8YEwzMJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:01 GMT",
      "Server",
      "ESF",
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
      "02ffedd34b7282300000d0bb642d0c9aa613ba03052d0422e207d93010530bc837543e9ddebd4eaf51df1dde378819e342445d95f312bc81315ea83293ed1aeb669f568b3cb904f1484d130564958d769fec0e5318eaa96729fbbb16e049f0eb5e3ff9e8b38b35b795a862f5467254afd0ca43db1ed6aec732fea54dba54100f7535326e4d9ec34e9ce9aedc9819132fe705f637380f08b722cbf65fe706b10bb87625c758964e79dc18040e5b5c0787c66b28b690df6ff1e95cdc25ef82d12a8caabd42951b840efd20fed214eb9125ce14cf5bfcee112dd55967469419a3233f3dfd5f6006f850a72d1751fad80e91aacec05ffda81b6bfef8aff3b8e52df8f905370cd0dd19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-45-1636475664267",
    },
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
      "000002ff85535d4fa34014fd2b64f651db424ba16dd2ac4dc5b5494b9552cd66b321c3f482a3c02033681ad3ffbe97c1ba1a137d6266ee39f79cfbc10b79e0c58e4c48ccd3c71aaafd8f7b119353028aa6f8ea8993b1b54d5d39a6f19e5ee58fb7109f5c4fa788e00d4bd2bccca023455d319093eda69b56a22e692544071375ec61c772068eed0e1dc7ee3b2ef22464c992170fc8be53aa94935eefa8dd4d854833a025975d26f2b7f7de53bf5756e21e9892bd8f923d5491bdaf457f668251c54531dd6ed0402da18a20a73c430bff99bbf8ec63ea2ea7793745f0136740191375a11a5b98828922e1695de9ac64f242b4cd7707b2f196de3c3498c8eabc880a9ac3a9b1a38a466a5f827111ac57c6c2bf5807ab59b858fbd1667ee9ad66ddf97ab95df91be3f6d20b3c43d13803cd35a6c699bef97841fd1d48c50bad1e36cf8df26b83169fc7d210505a421b8c5cd3a1d6c81cc749ecb2643418c68909713c8add211dc4261bdb60ef62a0c8d3a29a450b5138bb51dfb54c2b722c7b18d9609ad188c58368dc771d70198c13cb268753f25c7105e75c9642f2b643e43658845e14065b7f3e0b3d5d4242eb4c9db7c69a02de7b54582082bea8e9d044b940a5a6dd0b3ff482d93c5cdc78ed84979052b6df3ce28c139a494034adb0790aaa95d861c3883f5b79e708d613bb3a062599fc79214dcf1b17ef5afe460f71808d5da5bf6413060bff97b67344dcd0acd690a7f6404ab47c87b5a1ebc35f44e292b659c8f5d60b7e93f62980042a28d8f7d344b00e7cfbaf1d171fb1b8fa282315de7177986c445805ed0e715dee2bdb352dd7d67faaa295fa141bd9f6b16b4d8e2623e450a8d78adac5c7425bb15abe813088e3f775b70eff00a96fec1578040000",
    ],
    [
      "ETag",
      "Eo+91Ug7s9abyaPmqWeb+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1636475664267"
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
      "4f",
      "c2",
      "40",
      "0cc7bf4b7d744b40c7d0253c0c455d82a830f4c110726c1d4cb775dedd44207c777b53d1a889bedcdaeed7aeffff6e038f69118307b374fe54a15cedcd51df986088aacab4e247498542b000b59833b9beb8ed1e57a7adb633f683fda0b9542f77eb65a7c3848a16980bf03690a498c50abcfb0d1422476e8b28abf2625a6716e855698aa370180cce39cf2936f960dceffbdd7e0fb6d6ae31165a4c6bfe1f6d93ad050f341b6282128b08cd2ea5a4078c7460642a919719da8a2a19a1821aae5fcc2555a5904436576ca76537dd43d769b75cd73970db0c6614099d52c1ec78c4fb81262db2212d5925b80cc83a64c1497d3e73398d6b21260c06a1ebd4fb7d05244624e3e99f5cc9eb2e04ff850fecdd81ef9cc8a92af48e3aeb5ff9bf8d634b3f479dfa61ef07a1341bb543c2e0b2370afdcb6bc34ddea577571ad5b524f651a1b1b0d9708e5a6db7f1e6ea0919a7f93b9e96155a1009be1c17a9062f1199c2ed2bea2f4f807a020000",
    ],
    [
      "ETag",
      "zHVB9uD574UAI+I1wsxWzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:05 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-46-1636475664267",
    },
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
      "9b3014fe2bc87bd9b426e1164822455d94b20d2d979690b6db3425c618ea0e30b54db7a8ca7fdf019a5e36ad7d02f97cb7737c7c877eb222462314b1f4a6a262f7e69a47e808518553389de7e17bc70baece2ab2bafcfd65872f33679e8ec78060354be2bccc6847f24a102a47eb553715bc2ab1e0bc03421ddbe9188ee5d86edf716cd37181276996cc58f113d8574a9572d4eb1dbcbb29e7694671c96497f0fce1bc776bf64ac1af2951b2f7dcb2072eb2f7b2e971c609568c17e3f50a0254928a0dcd31cb20c223338e3e3c97ee329c775300df32423121bc2a541d0b24082f129656a25145a33bd4c47cf28356decc9b86da74b95e846fb738afc9db771a96da6623a8ac32a57d0c96736d5b82d71596546eb58bcf5ee069da5650c245bc61f1561b6bc7da647102875241b8f660e6cffd503320474ca562459322c45146eb04f783f2ffbd9e9a801578b5c58dab3bd818e8c328895c920cac7e94e8348a0691dbc756a493a14ded38a21878aa566f58b8e0058d8796a5bb6eac9bfd01b12c33196293808035308c21c16ea247a66de9687f847e09a6e809932597ac9d16ba08fcd0db84c17a319d845ed346826122276db8ba89a739153409a017fadad755c6c1a91ebdbf08bd60320dfd73afbded194d31d9ad6ee0be139c490a682c704e1515731ec3d0d0e972e587fe72319901a3b9c2d30342a2d1f7bb4742b82b9b29abe65b7b3976e37f009ce3ac6a10b7ed0f32d07e7ff47f85d09f7bab70323f7d59c5d44dbda39b1da31f1ae6c8b04686ddd575fd1b88ff0022ac7dab8bced65ef015b547014da8a005797d2f00dc145e7dbd87a70458784c60037ba9186c2191b50911b4dd469637bdb76c57ef0f614c0d58a8bf6b8e3e340f63af356a459ad342dd77d43ea57a8a4da9920f2028c2122dfcc527a8fe01f9702056ca040000",
    ],
    [
      "ETag",
      "MmT+6ERhQucSXxKyaXl6Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1636475664267"
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
      "02ff2d90614fc2301086ffcbf9754b9862d1257c102148b2109d60a28690d2dde660dbd5b6839085ffee75f8a5777dfbf4de37d7c1a16c3288615716bf2d9af34d81eecd3729dab672968ba6c62204804e164cead5219a4e8f0f8ff987f894a7c1bcfa5259311e3361d50fd612e20ef212abcc42fcdd41236be46fdbade92732e6ceda2b8be56a369fa52cd4947961b94e92a7493283cbe612c09e7629e668b051e8476a437b546ee1d35a59eb0a434bad5168a187fb87c250aba5210a590987228cc49d188eee8518de8a11831529e94a6a985dbf03db3872b24ae9c4612162c0f42de7cefbf3d8cb1c68f38f4ece0eedab21f6b5e82d0757fb67f2911c4775a6c50094e465bc94ee7abffc01a51923e369010000",
    ],
    [
      "ETag",
      "pTk1DDv89fV6Yaw0GlZcdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:06 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ffedd34b7282300000d0bb646d1d54e4d325a051a162a40874930998e12b044840ecf4ee757a8dfaeef0be014912daf7983725adc13b98c8529f27739b69c6764c5d0f613286f9b697aba0351af3a28b8d0805bc86a6b6ea8e85c71943b27256c54db3cefe27d2ea31f32166eea90924d59e4a4fb914adb986c9150f306b42bee58a155b6e1189bbefbfc562b454f9cb53cf1f0817093587feb822de40ca6a115a811bf9c3a9d8b95d84f669a90f323665ae36bb413c9804175a3c06ce924eed9138fb1b0c9943e58336a2943c18adb34d5ab5be14d9d241e188e80a44f39797ff0bcc00bdb3bca33dce9fdb576b5d9f81bffa984f8c3eff1b9474b4033fbf6db31cb019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-47-1636475664267",
    },
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
      "6fa24014fd2b64f6b52a2a829a98adb1d89a28b6806d369b0d19860b9d1619ca0c6d4ce37fdfcb50bbdd34699f98997bce3de77ef04a1e799190298979f6544375f8f12062724640d10c5f97d76e72103796b85dfbcb9a0f7d655e5ebdcc6688e00d4bd27d9943478aba6220a7bba09b55a22e6925440713752ca7d3b787b6e58c6cdb1ad80ef224e4e99a178fc8be57aa94d35eefa4ddcd84c872a025975d26f6efefbde741afacc40330257bff4bf65045f6be16fd990b461517c56c17a0815a4215c19ef21c2dfc6326f1f9ffa9bb9ceebb19829f3903ca98a80bd5d8c2144c1429cfea4a6725d357a26d7e3890c05dbb8bd06022aff74554d03d9c190955345287128ca5bfdd182b6fb9f537f370b5f5a26071e56ee6ddc576bddb78817177e5faaea1689c83e61a33e35cdf3cbca07e0252f142ab87cd73a3fcd6a0d5e7b134049496d00623c7b4697f6c4ee23476583a1e8ee2d484381ec7ce880e63934d2cb0921828f2b4a866d1421463e8db497f34890603c789ac899546637b328acc3e359391139b696a93e31979a9b8820b2e4b2179db2172e7af42370afd9db79887ae2e21a575ae2e5a634d011f3d2a2c10415fd4746ca25ca052d3ee9517bafe7c11ae6edd76c26bc8283b044f38e394e612104d2b6c9e826a23126c18f1e61bf702c17a62d7a7a024d3dfafa4e979e3e243cbdfe9210eb0b1abf49704a1bff22eb59d13e296e6b5863cb70752a2e57bac0d5d1fff201297b4cd426e76aeff8bb44f3ea45041c1be9f268275e0db7fedb4f888c5d54719a9f08ebbc36423c22a687788eb72dfd8b81ecec0221a5ca94fb1f1c03c75adc9d164843d14eaada276f1b1d056ac96ef200ce2f83dddade35fab4debff78040000",
    ],
    [
      "ETag",
      "FPEdyoQ4oVLRFui3Rt0GHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1636475664267"
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
      "4f",
      "c2",
      "40",
      "0c",
      "c7bf4b7d1d09e07690253e4c455d0228307d31841c5b99936d9d77370d12bebbbd8968d4445f6e6df76bd7ff7fb785755626e0c3324b9f6a549ba314cdc40653d4756e343f2a2a3582036864cae495e789d7f1a41f9a6e74395a7be1faeed54d4f4e98d0f1031612fc2dac32cc130dfefd164a5920b7c594d745b9683207cca6b2c559340dc7979c1794d87c7c3b1c06a7c301ec9c4363228d5c34fc3fdae63b071e6939c5152a2c63b4bb548a1e3136a195a96551e5d8d254ab18353470f3225554575211b5b8d2727bad8e38166ecf13c2ed8a1e8339c5d26454327b3be3fdc09091f9945e582508065413b2e055733e73394b1a21360cc791709bfdbe020a6352c9e24faee2751f24ff850f6cefc0774e165497e6405d0caf83dfc6b1a59fa3ce8368f083d0868d3a2051381acca2607463b9f95efae9c6a0be51c43e6ab41676da6edfeb89f6bbab67649de6eff846d5e8402cf9725c6506fc95cc35eede00ff0fa7a57a020000",
    ],
    [
      "ETag",
      "H556zNQ8It2TGMk5IkVz4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:07 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-48-1636475664267",
    },
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
      "0000000002ff85535b6fda3014fe2b91f7b2492d09902b12ea104dbb4814ba108aa66902db7152b7499cc60e13aaf8ef3b494a2faad63e11cef96ee7d87e44f7bc88d108119e3ed4acda7fb913049d20a6700a557dbf37e82dedaf99bb0ec57069f1ddfa321d8f01c11b96c47999b15329ea8a32395a2d7b6925ea1257429c82d0a9e99ef6eda16d3a966d9b03db019e645932e3c53db06f952ae548d78fdebd54883463b8e4b24745fe5cd77703bdacc41da34aea6f2d757091fac7a66799a05871518c574b08504b566d588e7906115e9831f9fe56bac771de4b01bce394614a455da82616485051243cadab56158d1e511bf3d5075afa337f1a69d3c56a1e7ddde2bc216fbf69586a9b4dc5649d29ed225c5c69db12bc6eb16472abad7ff8a1af69db8a5151c51b1e6fb5b176a64de6e7507c92682bb3e02a88b43e04899954bc6863449864ac89f0b4a9e0fdf93404acc0ac6b6e1cc3c67dd7f048421c9ab8438b240623c4258e8587c4a09ec9cc98300c3cd5a8b72c5cc0f09ee5102f31edd87099630d3cdb7088ed9118336f4088650f076ee2da7d7438417f2baed83997a590bc5b175a8741e46fa270359f4e22bf1d23c1b092f32e5c33c4eb9c0a8604d007731d9a2e17e0d4ec3e98477e389946c18ddf1df78ca598ee970f70e009ce240334ae70ce14abae440c4b43d78b6510058bf964068cf60caf8f088946bf1f5f08d1be6cb7acdadfc6cb365bff23e00667758bd8751f08b67038f9bfc2c56c31f95ca36701e2f0074070c33b05f473e587bf50570a59c22a56d0cf6f0080dbc6a70ff5f86a000bef066ca482ff70dfa86c4c68c5ba7bc7f33661c7760cc7743cd4822bf5ae67b9ee71c18d46a3c87256a8a789ba57d3ecab6dd5f219044db82ef3607e09dd7f61d2a931b5040000",
    ],
    [
      "ETag",
      "/yy0chc1We8WRo3S5ivWGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1636475664267"
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
      "90416fc2300c85ff8b776da5c158d92a7180a90c2484b60eb4c38450086e5768eb2e71d9aaaaff1da7ec123b2f5ffc9edcc2392b8f10c2214b7f6a34cd5d8afcee9a186d9db395525169113c4056a990769ee44d1c259bf352f162fe99eacbdff3743211c2ea6f2c14842d2419e6470be1570ba52a50beedf7a69f281837955396eb4df41ac522147474c27abb5a4d67ab08ba5de7c1890e312668b0d4e84656864ea879e9d25a555439fa966aa3d1420ff70fa9a1ba5286c817c51f3df983e021188d1f8360340cc602e6a41567540abbfd00b1616295c7f42b61612080e95bc99df4e745e4a10bb4fb47670da37d3324be169de5fdcdfe855c2496a86c6af4402b59c622e3dbbdbb020d94964169010000",
    ],
    [
      "ETag",
      "sFflyREfTkIatHFWgcvx9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:08 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb64ad0ee59feea0835ae3000a2874c3c490467e12087ea2d3bbd7e935eabbc37b004c0815221fbb9a9ec03b905885333243dc76e757b65438ff08312e724b51acc6868b8b7ef174b3b1b65b41f609b532e2b46ad4ad6f2e197be17aacd5822a753205aa4d014fc3ca2e9d2eabdd34423b9e6ec6363bac7d9b7a52d8c949dd232cfc63cd8fdc304d47f80a6d99f6b688ca1cc501be6ee21005d361e82b29198dda439baec6202fe7156459fcb9bb97523fd79c2d037638c7467d4541779766966811742f453145e42b0d1da3ae1adc1bdf6312ce5e5efe2f3001f4c6cb818abc7c6ed70c0827e0af7e3e4a4e9fff5d8a073a809f5f09d6e82719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-49-1636475664267",
    },
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
      "535d6f9b3014fd2bc87b6d4252080991a2354a68cb94901548ab699a906d0c750b9862d3a9aaf2df77314dd7aa52fb84ed7bce3de77ef08cee7995a239223c7f6859f3f4ed4e10748298c239bcfe50b335bd7ac823665e381569f2ebfbb17fb5580082772c89cbba600329da863239df47c3bc116d8d1b2106906860bb83b16339f674e238f6a933059e6445b6e1d53db06f95aae5dc348fdac35c88bc60b8e6724845f9fa6e3e9e9a7523ee1855d27c2f69828a343f17fd5e088a1517d5621f818156b2266125e60558f8cf4cc9d9fbd4438ecb610ee0474e19a654b495ea6c410a2aaa8ce76da3b3a2f933d236df1c50e46dbc556c5051b4659554b86427468a154ed453cd8cf370b735fce07c176e97b1bf0b926875e96d97c3d56eb3df06917173e9859ea1302998e61a0be34cdf02b8807ecaa4e295568fbbe74ef9a541fec7b174049096ac0f26d39183c7b3914b3232a5d9cc9a906cc4089991e9045b64445d9bd9296118785a54b370252a020cea9034a1b64b133b1d67c96c3a4913d772b06b59403cb5d1e104fd6db8626b2e6b2179df217413fab197c4e13e582d634f9790e1b650ebde5857c05b8f0a0a04d027351dba2817a0d4b5db0f622f5cae62ffdaeb27bc6139a64fd103cc38c3856480c60d344fb1662b5268180a965b6f0d603db19fc7a044f3dfcfa8eb79e7e24dcb5fe9310cb0b3abf4174571e80717dace11718d8b56431efb03aac1f22dd406ae0f7f00094bda6741577b2ffc85faa79065ac6115fd7a9a00d6812fffb5e3e20316561f64a4823bec0e959d086d58bf435c97fbc29e8e66d6788c34b8511f62f6d83d76adcbd1656425abd44b45fde243a1bd582b5f411084f107ba5b877f74b2ae9378040000",
    ],
    [
      "ETag",
      "Jt8DcQqgSe/G6nbrgVk1IQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1636475664267"
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
      "c2400cc6bf4b7d3b12d03174092ff8272e01541831c410726c656c6eebbcbb6908e1bbdb9b88464df4cdaded7eedfa3cbb3d3cc579082eace3e8b944b93b8b50df9b608aaa4cb5e24741b942b000b588984cd2c45bf4670fbd31be8cf324897a8b61ffb5dd6642055bcc04b87bd8c498860adcc73de422436e0b282db37c556516e85d618a337fea4d869c67149a7c321f8d3addd1000ed6a931145aac2afe1f6dcb830509ada7b841897980669742528281f68c4c25b222c59aa25206a8a082ab1791a4b21092a8c6959a7d556b38178edd6a3a8e7deeb4184c29103aa69cd9f98cf7034d5aa4537a6595e03020ab90056faaf385cb71580931a137f11dbbdaef2b20312019aefee40a5e772bf82f7c604707be7322a332d727ea7a74dbf96d1c5bfa39aadff1073f08a5d9a813e27be3c1ccef8cef0cb73c4aefee34aa3b49eca3426361a36e5f365b4efdddd51e19a7f93bae96255a1008be1c37b106772352858737f152c49a7a020000",
    ],
    [
      "ETag",
      "jljIYDSWCMevMnjjgCYGDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:08 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` != ? LIMIT 1",
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
      jobId: "grouparoo-job-50-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffa5535b6f9b3014fe2bcc7bd9d4264042c8458aba28a51b5a9ab40969d74d5362cc21750b9862d329aaf2df770c4d2faab43eec097cce773917fb81dcf22c220312f2cd5d09c5f6e38d08c92101453718fd7e706399dbd1c149af65fe38bf8a83eb9f323e1f0e11c1354bd2344fa0214559309083e5a2b9294499d34288060a353a56c376dbaed3edb8aed372bbc89390c4139edd22fb5aa95c0e4c73efdddc08b14980e65c3699489fe2e67dcbcc0b71034c49f3b5a5892ed2fcb7e9512218555c64c3e5020b2825142b48294fb0846766147e792ddde4346d6e107ccf1950c64499295d164a3091c57c5316952a193c90aacc173f64e14dbc71608c67cb69f0694d534d5e7f36a83456ab02649928e3643e3b35d6397a5d5309726d5c7ef3e69e61ac0b60a288563c5a1b43e3c8184d8f31a84f1ff471e29ffa816163151148c5b3aa8680860968ffc731f96f97a30954a1539d5c752d97da3dab1fc66197c5bd76278c2d08c35ed8edd07668b1be034e1402459ed2ea158b6622b3c2903a560c7ddb61b6cb28e0ac296bb3b605bdae051130dbe9c74e4c7687e44fc1151c73990bc9eb5991cbb91f78ab60be9c8e478157b511539cc7715d9c6ee2659d0a9b44d03ffadae92c17e8a407ef4f036f3e1a07fe8557ef7a021bcab68b3bdc764c130988a6054d4141712a221c1a399b2dfcc09f4d471364540b3cdb232419fc7a782604dbbc9ab2aabedacb752aff3de082266585b8af7f884d76bbc3ff53e8a0c46f84e0d5aed9e47ce9cdaf481d9a430c0564ecfded23b84abcfb42f7cf05b1f860d0462a3ce35d63529bb002ea3bc7d3aabe9addb5fab6dd2215b8506f722db7bf1faed6d08a9042a61e3baa9f8b9e55952ae51308937855a6fef42b66ff02596e3723ae040000",
    ],
    [
      "ETag",
      "K+j0/yA+F82/XQYfThZsfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1636475664267"
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
      "00000002ff2d90d16ac2401045ff65fa6a40db6485800f5a422b155b638562115993498c4d3271675391e0bf7736f66567f6eed9b997e9e0a7a85308e150e4e716cdf52147bb724d8cdc9696a5345433c200d0ea5cc8cbf9109dd65f6aa5fce9f69ddfb647569c4f26427072c44a43d8415660993284df1dd4ba42f9b6df9b7ea260f6da3865befc8c5ea258848a52272c378bc574b688e0b6bb0de044871833345827e84636864e98d8b94bcbba6a4af4985a9320430ff70fb9a1b6d186c813c50b86de483d297f1c28e53faab1802525da16540bbb5983d858b2ba8ce92261612480e95bc99df5e7afc8810bb4fb4767578bfc61487c199de5f06eff4c2e9295a8d6b4388044cb325e0b7bbfdffe0022b7c5e469010000",
    ],
    [
      "ETag",
      "wqbEjSX6Q64AZOsKZhs6sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:09 GMT",
      "Server",
      "ESF",
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
      "d0",
      "bb",
      "64",
      "ad0c5f91ee484d0b958a087e370cc42088082448824eef5ea7d7a8ef0eef01128c0963715797e40adec090a89684a57933851f3cdfad11e50c27622ea2cc5eda318975e1e732a3473df0757edf9aa80aeed38901cfe102b5caea20df5ad3e3a1e76dd4600831bf39bae12a17ad5e5cbc7e505dbeba689d407e4ed26e9bf705f3cc50aedfaf63e6ef55044f939d299faa2a747b1df74bb4df34490b6bbbdc64c9971b8dc37594b5e91009965762a66895e7e03b4ecf853acb58bc485bd2f80a2cd3258cd8d1ba31e3507f3b6b99faf9a74111975e5efe2f3002443405252c2e9edb35c3b246e0af7edc0d0d79fe8724a184829f5fc7bae4e519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-51-1636475664267",
    },
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
      "14fd2b64f6716d292d05daa4599b8a6e93962aa59addcd860c70c1516090196a8ce97fdfcb605d8d893e3133f79c7bcefde099dcb332215312b1eca181fae9db1d8fc8090149337c85cbd4fe2d6fdd667231fabe1f78c5a39e9d5fcd6688602d4bd0a2caa1277853c720a6bb6d3fab7953d19af31e26ea8d8d9e618d2cd31e5b9639b46ce409c8d3152bef917d2b6525a6ba7ed4ee679c6739d08a897ecc8bd7777d3fd4ab9adf412c85fe5e524715a17f2efa23e731958c97b3dd160d3402ea100aca72b4f09f9944a7ef53f7192dfa1982f72c061ac7bc29656b0b53c4bc4c59d6d42a2b993e1365f3cd816cdd95bb08b498e74d5186252de0444ba8a4a17caa403bf7376b6de99d6ffcf53c586ebc70bbf8e9aee7fdc566b55b7b5bede6a7ebbb9aa4510e8aabcdb45375f3f082fa0908c94aa51eb4cfadf24b83961fc7d212505a40170ced81450d673089d2c88e5367348ed201449113d9633a8a06f1c404338980224f892a162d796924297592a113d2948e42d3b2acd0310d234c811ae6d81c1bd4b1c8e1843cd64cc219131517aceb10b9f197811b06fece5bcc03579590d22697679db1b680b71e251688a04f6a3ab451c651a96df7d20b5c7fbe0896d76e37e11564347eda3ee08c539a0b4034adb17912ea354fb061c49bafdd3304ab895d1e83824cff3c93b6e7ad8b372d7fa50738c0d6ae545fb20dfca577a1ec1c11d7346f1464df1d4885966fb136747df88b485cd22e0bb9dab9fe2fd23df990420d65fcf53411ac025ffe6bc7c5472cae3eca088977dc9d58b422710ddd0e3155ee0bdb1e4c9ca1fa5325ade587d864383976adcdd16684024af95251b7f8586827d68857100671fc9eead6e11fba2c5d5d78040000",
    ],
    [
      "ETag",
      "ePf7ZthEu9G3+v0Nmw/gFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92514fc2400cc7bf4b7d1d09281cbac4071054e2401dd31743c8b17573b8ade3ee8612c277b737158d9ae8cbaded7eedfaffefb6f0941611b8b0489355856a7390a0b9b5818fbaca8ce64749854670008d4c988cbd4bec64b72b3d10f7e95a0efc9793ee55727aca840e1f3197e06e214e318b34b80f5b28648edc165256e5c5bcce1c309bd216a7813f9a5c709e5364f3c99de7f5fade1076cebe319246ce6bfe1f6db39d034b5af818a3c22244bb4ba96889a11959995ae665860d4d950a51430dd72f124555291551832b8d4eabd11247a2dded08d13e145d06330aa549a960f66ecafb812123339f9e59250806541db2e0b83ed75c4ea35a880d479340b4ebfdbe020a4352d1fc4faee4751f25ff850fecdd81ef9ccca92acc9e3af7ae7bbf8d634b3f470d7ac1f007a10d1bb54782d178380d7ae31bcbcddea5f73706f58d22f651a3b5b0d56c1f77baa2f9e6ea1959a7f93bae51153a104abe1c97a901379699c6dd2b93228f0c7a020000",
    ],
    [
      "ETag",
      "fLHe5lQqsD6VivaDRx97Kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:10 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-52-1636475664267",
    },
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
      "eb",
      "6f",
      "9b",
      "30",
      "10",
      "ff",
      "5798f765939a07e19187147551ca56a434e90869554d5362cc41bd124c6dd32dabf2bfef80a68f4d6b3f85f87eaf3b9fefc90dcf633222114f6f4b90bbf73f44448e08689ae2e969af58ddf8d695f35b5aa7bbd35fdee462e8a5e3312278c552745b64d052a2940cd468b56ca75294059542b450a8e5f45aa66bb976df715dbbe7f691a7204b663cbf41f6b5d6851a753a07ef762a449a012db86a33b17d3cefdcf53a85143f8069d57969d94117d579ddf438138c6a2ef2f16a89014a05720d5bca338cf0c48ca34f2fa5db9c6edb2982ef3803ca9828735dc5420926f284a7a5ac55c9e89ed4319f7d90a537f3a6a1315dace6e1870ddd56e4cd47832a63bd96a0ca4c1b9f83c599b129d0eb9a2a501be3f2d40b3cc3d8486042c66b1e6f8cb1716c4ce627c6136e63bcab0e67fe991f1a26668941699ed749421a6550a5781896ffef155504aa51a729aefb5d979a83ee304aa23e4b069613255d88a241d477a81575d9d0063b8e80224f57ea358be6223763cba13638a6ed52b71b8115277dd38dac0145fed074d880da71ecf4c8fe88fc945cc309578550bc9918b90cfcd05b87c16a3e9d845edd4642712a274db8aa89e739353689a057fada57552ed0a91abf3f0fbd60320dfd0bafb9f119a494ed96b778e709cd14209a4aba050df24cc4383472be58faa1bf984f66c8a8aff1fc805064f4edfe8910ee8a7acabafeadbc5cbbf63f002e6856d688bbe6839864bf3ffabfc2320cfcf997d7252605768b32df11854bde2890af2b2fb822cd51000948c8d9db1b80e0baf0e65b3d3c1cc4e2d3411ba5f13fee1b53950993d0ec1ddfd65d36ecbed91dba035283a5febb6676dde161c09546a5085bc8f54347cdc3a9e655974af508c222",
      "aecbbc9ed4fe0fd714b800b8040000",
    ],
    [
      "ETag",
      "H2pUkI3Y5zr3HyHxEAV9Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1636475664267"
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
      "d1",
      "4e",
      "83",
      "40",
      "10",
      "45",
      "ff",
      "65",
      "7c2d498b9426247db086d826a4b158d46a9a660b035281c1dd4544c2bf3b4b7dd999bd7b76eecdf4f09957097870ceb3af06657793a1de992644d5145a71a9a9520813402d3226bb68e766ebb7fcf7d939b4f6cba19dbefeecdbe59209157f6029c0eb21cdb1481478ef3d54a244fe763ac9712263baab8db2d9eefd073f64a1a4c408db2808ee56810fc37198c085ce21a628b18ad18cac255d30d61b935689b22ed052d4c818158cf0f890496a6a21892c56acb96dcddc5bd759cc5dd7b1dd058305c542e754311b3d01db68d2a208a9e5b03063408e2de74ec7f39b65c7043afea3ab4ea37a94c4be0a8de5f46a7f4f2692e6a85a36388158f032d6b9bede873f3c446e7a69010000",
    ],
    [
      "ETag",
      "yUQ6gHZizV4Yw2WYw0XxTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:11 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3cb8e82300040d17fe9da1a90f7ecd000830f402941bb21a52d8820228f209af9f731f31be359dfed7d014229efbaa4bf95bc065f60220b634ee79b465fdae3055e89cbab3e7f6ad58d0872988edb43181a451b7b8eaf79e686a2314b82551f9ba56949d8c60369227b81a3de310eccc5a23356a36e4a5bd4c7de00e1061d83f09d0c88d5123c914b7e62526c1e94eff35158a35d93ec9145637c87c2bea3a27b2eefbbe0e97821d6455f4eaf77797fc96ae19cde8e8a6d296c6869ced05a8551a7c07cfdd07c1f462b5d0d022ca75190ae32b56a044f8325ab26d616f38f8fff0bcc007f3445cbbba478df2e298631037feb27fdd4f0f7ff4b4e5ade829f5f1f085cc219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-53-1636475664267",
    },
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
      "9b3014fd2bc8fbb82690f04a23456b94d23552201b9056d33421630c750b9862d32eaaf2df77314dd7aa52fb09dbf79c7bce7df084ee589da1394a5971dfd176ffe596a7e80451890b78cd8cc7cca9fdfcdeb9dd5bd7a5f0bf5efd9d3e2e1680603d4be0aa29e948f0ae2554cc77d1b86879d7e096f311241ad9e668e2988ee5da8e634d1d17788296f986d577c0be91b211735d3f6a8f0bce8b92e2868931e1d5cbbbfe30d59b96df522285fe56520715a17f2cfaade4044bc6ebc52e02039da06d422bcc4ab0f09f99a5676f538f19aec605801f18a19810ded5b2b7052908af735674adca8ae64f48d97c754091b7f156b14678d9557552e38a9e6819963891fb866a17e1d6d7d6c1c536f497f17a1b24d1ead2f397e3d576b3f38348bbbef4424f93382da9e26a0bed4cdd02b8807e468564b5528ffbe75ef9b941ebf763e909202de8104c5cc3c19399719ae6a94bf29969a7b941d37496ba363653839c5ad4ca528a81a744150bd7bc9e9953625bb33c3132c3482c6c4e9353c3218991db04e7ae3d3132071d4ed063cb243d67a2e1820d1d42d7e13af69238dc05ab65eca91272dc95f27c30d617f0daa3840201f4414d873eca3828f5ed5e07b1172e57f1faca1b26bca10526fbe81e669ce3525040e3169a2769ebf30c1a8682a5ef9d03584decc73128d0fcf713ea7bdebb78d5f2177a0c03eced4af545511cae83efcace117185cb4e411e86036ac0f20dd406ae0f7f00094b3a64413f775ef80b0d4f21cd694b6bf2f93401ac029ffe6bc7c5072cac3ec8080977d81d227a11d2d26187982af799ed4e268e35430adcca7731d7318f5deb73f41969456bf95cd1b0f850e820d68917100461fc81ead6e11f351454ee78040000",
    ],
    [
      "ETag",
      "d0wd6nMfq6jy4WlsM+Vx2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1636475664267"
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
      "4f83400cc7bf4b7d6589537618121f706e4a32a732f660ccb2dca04336a07877689665dfdd1ece69d4445f8eb6fc5afaff735b58e7550a3e2cf2ecb941b539cad0dcdb2042dd1446f3a3a64a23388046664c462baf3b6cfa62edddcb7545b99bbf840fd9f939133a79c25282bf85658e45aac17fdc42254be4b6848aa6ace66de680d9d4b63889a3707cc57949a9cdc7d3d128b8180d60e71c1a5369e4bce5ffd136db39b0a245844b5458256877a915ad3031a195a9655917d8d1d4a80435b470fb2253d4d4521175b8d2e99d76bae254b85e4f08f744780c1694489353c5ec74c2fb8121238b885e59250806541bb2e0657bbe70394f5b21360cc7b170dbfdbe020a1352e9fc4faee6759f24ff850f6cefc0774e96d454e6400d47b7c16fe3d8d2cf5197413cf84168c3461d9038bc194ce2e0e6ce72b3bdf48b8d417da7887dd4682dec1ebb673d4f1cbfbbda27eb347fc737aa410712c997e33a37e02f65a171f706e9064a037a020000",
    ],
    [
      "ETag",
      "Rj71FuC6k7Qaknoi4ivIYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:12 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-54-1636475664267",
    },
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
      "00000002ff85535b6fda3014fe2b99f7b269e512080920551da2d91689421742bb6a9ac0719ce02e8953dbe9862afefb8e9dd28baab54f049fef768e8fefd06f5626688c6296ddd454ecde5ff3181d21aa7006a73f66e9df5938d96dd3fea71ea1c9d5745bf627c7c780609a257151e5b425792d0895e3d5b29d095e575870de02a1d6c069d96edf75bc81eb3a3dd7039ea4793a63e56f606f95aae4b8d33978b733ceb39ce28ac936e1c5c379e7b6d7a904bfa644c9ce73cb0eb8c8ceeba627392758315e1eaf9610a09654ac6981590e111e9949fcf9b9749be1a29d01f896118a09e175a9742c9020bc4c59560ba38ac677c8c47cf28196fecc9f46d674b19a471f36b8d0e4cd470b4b6bbd1654d6b9b2be848b336b5381d7164b2a37d6e5373ff42d6b2328e12259b364631d5b27d6647e6a3de236d63b7d380bce82c8b2214b42a562a54912e138a73ac5fdb0829757a40958814e535c7b5d17dbc3ee284e638fa4c3fe204ebb348e87b137c0fdb84b460e75929862e029ad6e58b8e425b63de2f586b1ddf5ba693c1a25a9970023491337c63676bb1827aee3ba687f84fe08a6e829931597ac9918ba0c83c85f47e16a3e9d44be6923c53095d3269c6ee2694e054d02e895bef6baca3838e9f107f3c80f27d328b8f09b1b9fd10c93ddf206ee3cc5b9a480c60217545171c613181a3a5f2c832858cc273360986b3c3f20241affbc7b2444bbca4c59995fede53ac6ff00b8c0796d10b7cd07b2d17e7ff47f85651406f3afaf4be00aba05995f8082256f14d0f7951f5ea1e628a42915b4246f6f00804de1cdb77a78388085a7033652c17fd83722b50911b4d93b56982e1bb667f79c5e1f19b0502f6a83c1e03060ada11569414b75df51f370f4bc4ca9960f2028c2bacccda4f6ff00d378e066b8040000",
    ],
    [
      "ETag",
      "XLfxLRAyhf3+2cedYChn3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1636475664267"
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
      "2d90416f82401085ffcbf40a49b58886c4436d48352146683935c6ac30521418ba3bb42584ffde59ec6567f6edb7f35e66805bd9e410c0b92cbe3ad4fd43811cdb2641d3556ca4b4d418040790552124e7d1aa586debf63755b7f9220d633e50bc5e0b61b24fac1504035c4aac7203c1c7008daa51be9d4e7a9a2818f7ad5576fbf7f0354c44a829b7c23e8da2e74d14c2781c1db8d239c10b6a6c32b4235b4d57cc7867d31a55b715ba863a9da181099e1e0a4d5dab34912b8abbf0dc99ffe47bcb85ef7b737f29604599e2921a61d337101b265655423f12166602e8a995dc97e9fc16d9b7818effe8a66734074de26bd05a3edeed5fc8466289caba43073225cbd8967cbf8f7f4f2fec7569010000",
    ],
    [
      "ETag",
      "tdL8g8HmpxUak25UEQtPoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:12 GMT",
      "Server",
      "ESF",
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
      "02ffedd34b7282300000d0bb642d0e5f85ee4007286007a158eb2693402810d040a07c9cdebd4eaf51df1dde1da034259cc3fe46c915bc8019c9c63a5dfb4cb7ecb1d4ac991c244db9b4f2663855580e96cb22264eed35356cc4b2405a926c7dcaf1475779d11bcb5def3a25c24d53fb2c2a644cc7a1e131e5f6671d5a8aa29ecca0b50f6e6aeacdce382668cf7cd77c5f7011b7a5c99a62470427d6dd917c5703ad2ecee0e64ca11e3ec653dc66a92c35d22b1db37a33ebe74c98b13b97fcbcdfee2d356c09ca262587b62119d2449c68d25018082d16bf22116e76164499b07e7afabfc00a9089951de1b07c6c5734c35881bffab09f1979fcb708ea48077e7e013a677d2319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-55-1636475664267",
    },
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
      "fbda3c4802a491a2354a689b29211b9056db3421e35ca83bc0149b4c5995ffbe8b69ba5695da4fd8bee7dc73ee8347f29b173b3221314f1f6aa80e9fee454cce08289ae26bff20b63fccabf8afbf4f58c5c497c55d3e4aa75344f08625695e66d091a2ae18c8c936e8a695a84b5a09d1c1441dcbea98f6d01e39966d8f06b6833c0959b2e2c56f64df2955ca49af77d2eea642a419d092cb2e13f9f37b6f3fe89595b807a664efb5640f5564ef7dd1cf99605471514cb7011aa8255411e4946768e13f73175fbc4edde534efa608de730694315117aab185299828129ed695ce4a268f44db7c712081bb72e7a1c14456e74554d01cce8c1d55345287128c4b7fb33696dee5c65fcfc2e5c68b82f9b5bb9e75e79bd576ed05c6edb5ebbb86a271069a6b4c8d0b7df3f082fa3b908a175a3d6c9e1be5a7062ddf8ea521a0b4843618397d9b9ae3fe799cc40e4bc6432b4efa10c7e3d8b1e830eeb3f3118c763150e46951cda285286097503aee0fa21812331a59098d686c8e22e60c0626b5ade1d8b4c8f18cfca9b8820597a590bced10b9f597a11b85fed69bcf42579790d03a538bd65853c04b8f0a0b44d03b351d9b2817a8d4b47be985ae3f9b87cb1bb79df00a52ca0ec103ce38a1990444d30a9ba7a05a8b1d368c78b3b5bb40b09ed8d7535092c9cf47d2f4bc71f1a2e5cff41007d8d855fa4b82d05f7a57dace097143b35a43f6ed819468f90e6b43d7c75f88c4256db3906f5bd7ff4eda271f12a8a0601f4f13c13af0e1bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b94f6cc71c9a639b6870a5dec4068e75ea5a93a3c9083914eaa9a276f1",
      "b1d056ac96cf200ce2f83dddade33fe18ea52078040000",
    ],
    [
      "ETag",
      "0yoUZ1GbzRvfcrcoJDhm4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1636475664267"
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
      "85df65bca589d5766b487a41b56a7fad05bdd034cd16a614050677170d69faeecea256a3267ab3cc0cdf0c730ebb85c7248fc08555123f95a8aa8318cdb50de6a8cbd4687e14946b0407d0c898c9db8dbfc2bb7815ebaad91f0dfd6c28c4c8eb7699d0e1063309ee16d609a69106f77e0bb9cc90db424acb2c5fd69903a62a6cd10fe683e905e71945369fde8cc75e6fdc879db36f8ca491cb9aff47db62e7c003ade6b846857988769742d103866660656a9915293634952a440d355cbf8815958554440dae34daed46531c8b56a72d44eb4874184c299426a19cd91b9ff7034346a6737a619520185075c882d7f5f9cce524aa85d870300d44abdeef2ba03024152dffe40a5e7723f92f7c60ef0e7ce76446656ef6d4f9f8cafb6d1c5bfa39eacc0bfa3f086dd8a83d120c267d3ff02633cb2ddea5f72a837aa6887dd4682d6c1eb64eda1d71f8e6ea2959a7f93bae51253a104abe1c978901772d538dbb577f79f1467a020000",
    ],
    [
      "ETag",
      "VhSbeZgbgsy1EKJSmJ66KA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:13 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` != ? LIMIT 1",
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
      jobId: "grouparoo-job-56-1636475664267",
    },
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
      "ff85536d6fda3010fe2b99f765d30a24011240421d82748b44a183d0ae9b26709c0b7597c4a9edb05515ff7d97a4f445d5da4f84bbe7e5eeb17d477ef32c220312f2ed4d01f2f6fdb508c911014db7583db96cafe053f45dc7f31f57979dbf324f7774341c2282972c45d33c8186128564a006ab65732b459153294403851a5da761396da7e3761da7633b2ef21424f19467bf917da575ae06add6c1bbb915629b00cdb96a32913ed45b3bbb954b710d4cabd673cb16baa8d6eba6c789605473910d574b1ca05020d790529ee0088fcc28fcfc5cbac969dadc2278c71950c64491e9722c9460228bf9b690952a19dc916acc271f64e94dbd71608ce7ab59f06143d392bcf9685065acd712549168e364313f3536397a5d51056a635c7cf5169e616c243021a3358f36c6d0383646b3091623aa6163bc2b0b53ffd40f0c0be78840699e555304344ca09ce03e28ffe5f19404aad1ab6eae5dd3a156cfec8771e8b2b8d7ee86b10961d80bdd2e6d8726eb77a013854091a74bf58a453391313bec5a5618f7c1c490db61d7646e6cba40ed5edbee21db761c16591db23f227f24d730e12a178ad769918b851f78eb60b19a8d478157ad11534c64520f572ef1744e8d4b22e895bdf665970b742aa3f76781b7188d03ffdcab4f7b0a5bca6e973778de314d14209a4a9a8206792a220c8d9ccd977ee0cf67a32932aa233c3b201419fcbc7b2404b77995b2ae7e4b2fa75af301704e93a242ecea0f6291fdfee8ff0a93328257056cd3361ba6ddb0baa8f40ba178c76b11f26de52d2e495d5a400c1232f6f6254070d578f3a91ede0d62f1e5a08dd2f81faf1c53a50993505f3d9e568bd66cd7ea98ae4d2ab0d42f7a56df39645c6a948a9042a6ef37aadf4d1959d52ad403089b786366feec0b76ff01f0aa5fd6b7040000",
    ],
    [
      "ETag",
      "FY3Ue+dXtfOZhY4xrpmvaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1636475664267"
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
      "02ff2d90d16f823010c6ff97dbab24ba41594c7cc08d3112e294cda7c5988a07ab038eb5658618fff75d712fbdebd75feffb7217f856ed11e67050d54f8f7ab8abd06e5c93a3e96b6bb874d41a8409a0951593224cda75b8794bcba9fff8123d477ea2d479b160c2145fd848985fa054581f0dcc3f2fd0ca06f9db7eafc7898cd9a1734abafa88933867a1a1a31356db2c8b96590cd7dd7502273ae458a2c6b64037b2d374c2c2a62ead914d57a367a8d7051a18e1f1a1d2d477521379ac7881f066e241f86120847f2f42066b2aa455d432bb7d07b6b164659dd399c3c28c013db69cbb1ccf5f96031768f78f2e078b66ad897d0d3acbe9cdfe895c24cb51adee710285e465bc2a7bbb5fff00e66eaba069010000",
    ],
    [
      "ETag",
      "67GnP7QOIf048FADA4Giiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:14 GMT",
      "Server",
      "ESF",
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
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0",
      "bf",
      "e42c4e0a82d09b381204a42228ca8509900206310d0a914eff5ea7dfa8fb87fd0638cf49d7a5b72b252d78070f2c1bd37cea32ddb4865a89ed402fb86eef7751c4f44a9d97774fb0e45e4b5216e5a1a73b7ba1625a4adac7b86ed3501c2bacad515508381bed8b5f7ee1a20df946f30f6899e0620d834d68693567c44734fae45e7375d59da9c5d06f16bddace665eb399af8475a40e74862bf3ed446724f0dd93d19326c934fa90a1dc3b52275f9c6a5b8df87c09d15d1171af74dd69794071b10dd0d12c619699f08d0e23cdabd502ed54ec9ea72f2fff1798002258cd4997d6cfed8a6a1813f0573fbd3d1879fe3709e684839f5f0881078319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-57-1636475664267",
    },
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
      "3014fd2bc8fbda3c2181448ad628a56ba6846c40da75d3848cb950b704136c5a5555fefb2ea6e95a556a3f61fb9e73cfb90f9ec81d2f12322531cff635548f5f6e454c4e08289ae1ebefd1af07f31a7c5597e6f73d0bfc2b3b9fcc673344f08625e9aecca123455d3190d36dd0cd2a5197b412a283893a23bb33189b63cb1e8dc7d6706c234f429eae787187ec1ba54a39edf58edadd4c882c075a72d96562f7f2debb1ff6ca4adc0253b2f756b2872ab2f7b1e8d75c30aab82866db000dd412aa087694e768e13f33894fdfa6ee72baeb6608bee70c2863a22e54630b533051a43cab2b9d954c9f88b6f9ea400277e52e428389bcde1551417770622454d1483d96609cfb9bb5b1f4ce37fe7a1e2e375e142c2edcf5bcbbd8acb66b2f30ae2e5cdf35148d73d05c63669cea9b8717d44f402a5e68f5b0796e949f1bb47c3f968680d212da6064f7c774e0f427711adb2c75cc519cf6218e9dd81e5133eeb38905561203459e16d52c5a882206d31cc1c88c266c984416f4693449c783c88a29b392a1d9776c871c4ec843c5159c71590ac9db0e912b7f19ba51e86fbdc53c74750929ad7375d61a6b0a78ed51618108faa0a64313e502959a762fbdd0f5e78b7079e9b6135e4146d963b0c719a7349780685a61f314546b9160c388375fbb6708d613fb710c4a32fdf3449a9e372e5eb5fc851ee2001bbb4a7f4910fa4bef9bb673445cd2bcd690fbf6404ab47c83b5a1ebc35f44e292b659c8cfadeb5f93f6c987142a28d8e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c445805ed0e715dee33db1e58b6e9100daed4bb98635ac7ae35399a8cb083423d57d42e3e16da8ad5f20584411cbfa7bb75f8075423caf278040000",
    ],
    [
      "ETag",
      "Z5Xw3YeRtup3JqcSRW7l9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92db4ec2401086df65bc2df1548a69c205282a49450ee54643c8ba9d4271dba9bb5b0921bcbbb315d1a889de6c67a6df4ce7ffbb5b78ce8a044278ca162f15eacdd102edc805633495b2861f251506c103b462e1c8e7ee6abd3e7f7851d1f14aaa38ed4e7c1ab5db4c18b9c45c40b88534439518081fb750881cb94d92aaf2625e671ed84de98a9378dc1fdc709e53e2f2c1348a3adda8073befd098082be635ff8fb6d9ce83153d8d31458d8544b74ba96985d2f69d4c23f25261c350a5251aa8e1fac54253550a4dd4e04aa3d96a9c06e781df6a06817f16b418542485cda860763ae1fdc092156a4c6b56090103ba0e59705a9faf5cce925a880bfb8338f0ebfdbe021a25e964fe2757f2ba4bc17fe103db3bf09d133955853d50d7d17de7b7716ce9e7a8ab4edcfb4118cb461d90b87fd79bc49dbba1e3667be9dd8d4533d4c43e1a74169e9ef817cd5670f2eeea2539a7f93ba1d5157a20055f8edbcc42980a6570f7067b683d637a020000",
    ],
    [
      "ETag",
      "bkBjww3ZqlL/jclTfBS4oQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:15 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` != ? LIMIT 1",
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
      jobId: "grouparoo-job-58-1636475664267",
    },
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
      "00000002ff8553eb4fdb3010ff5732efcb26d1e6d934ad54b1aa645bb43ea04d416c9a5a27b904431a17db0101eaffbe4b4279080d3e25f2fd5e773e3f902b5624a44f22965d9720ee3e5ff2881c105034c3d3d23f9f07bf12b8bf3ae3ce6d4f17f7fef58f93c10011ac6249bad9e6d092bc1431c8fe72d1ce042fb75470de42a156c76b99aeed3add8eeb3a96db459e843c1db3e20ad9174a6d655fd7f7deed8cf32c07ba65b21df3cdd3b97e63e95bc12f2156527f6da9a38bd4df373dcc794c15e3c560b9c000a504b1820d653946786626d1b7d7d26d4637ed0cc1372c061ac7bc2c54150b25625ea42c2b45ad4afa0fa48ef9e2872cfcb13f0ab5d16c390dbface9a622afbf6a546aab950059e64afb3e9f4db4f516bd2ea804b9d6ce7efa735fd3d602622e92154bd6da403bd486d3233c940ac3adb54fd5c9389804a166629004a462451d23a4510e5584c749056fefa7225085664d71d5355c6a7a462f4aa36e9c7a76274a0d88222fea76a81d1971cf01278980224f55ea358b16bc00c7489d1e3523484c27323d0bdcc4b2910f9ed5ed5a1eb896edda6093dd01b9154cc111935b2e59332e72360f427f15ce97d3d130f4eb36528a23396ac2554dbccca9b04904bdd3d7aeaa328e4ed5ec8369e8cf87a33038f59beb1e4346e3bbc5355e784a730988a6826e408198f00487468e678b200c66d3e11819f51d1eef1192f4ff3c3c13c2bb6d3d65557f2b2fd7a9fdf780539a9735e2a6f92126d9ed0efeaf1006137f110e27c7efab588665b40cab657642d3ea9b76df74da8661fc46f1bf48c4bd6f74c9c9d29f9f93e6680e290828e28ff702c175e1c3e7bb7f4b88c5d78436b8988ae116c6b232890534dbc83675ef0dbb6b763aae456ab0506f6aaeebedc75e69548ab081423d76d4bca56a8a75a9944f202ce2124d83e90facfe034c2c4bf3cb040000",
    ],
    [
      "ETag",
      "uEYRIKdezkWo4w9/rzEqGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1636475664267"
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
      "0000000002ff2d90616b83301086ffcbed6b8575ad7608fdd08a6c8294cdb5b0314a49e36975eab924b688f8df77b1fb92bbbc7972efcb0df0533429f8702ef2df0e55ff90a379b74d82baab8ce6d252a311668046e44c06697449c2cf525f378b00651a96c5feebb65e33a1e5056b01fe00598155aac1ff1ea01135f2b7d3494d1319337d6b9568b70f5fc284859a522bec0e71bcd9c6218cc77106259d13cc506123d18e6c1595284d64d36a51b7153a9a3a2551c3044f0fb9a2ae158ac861c5719f9db9b7f0962bd7f3964fde8ac18aa4300535cc1e3e806d0c19512574e3b03067404d2de7cea6f3cab26b031dffd16d6f50bf29625f8dd6f2f16e1f908d6438aa511dce400a5ec66b61eef7f10fd40ff6e269010000",
    ],
    [
      "ETag",
      "CdIhREXjsvA3CecdEjiTYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:15 GMT",
      "Server",
      "ESF",
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
      "ffedd3db6e82300000d07fe9b323c1a2a17b431d1214355a1cf0d2145a15905b5be462f6ef33fb8d79fee13c014d122e255155ce4bf009063a455aa26d6a73617729c9cecc591b2c0cd698a10aca25ed8ba6a9ae416b92d276c6d8c1c41d1c9e9ff223d5e77096dc6e4ba824bbebba575ccfdf7e6f64ba22ab74655dec16a3c4cf4237b28e63d72055efe7ae57d467d1e19957885d1975cd477837a4da31dd9b1e0e5718a61ef4f17a9b5bf1d83177ff105ec5d1e88a1657b7369242857bda73549f8c6cfbb834e810c3ad6b5bec18b4d1c6ec07546233a0dd5788d4729e6b6f6fff179800ded7a9e092a4afed7086d004fcd5276aa8f9ebff8253c105f8f905a9cd1ce019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-59-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fa34014fd2b64f6ab2d7d034d9ab5a9b83669a902b571371b320c171ca50c3283c698fef7bd0cd6d598e82766e69e73cfb90f5ec83d2f12322531cf1e6aa89e7fdc89989c105034c3d7c54de8ed7e67e9d5753e4fc2dd2acb33b3f7349b2182372c49f7650e1d29ea8a819c6e836e5689baa495101d4cd4193b9dfe64381959e3c964349858c89390a72b5edc23fb56a9524e4df3a8ddcd84c872a025975d26f66fefe6e3c02c2b71074c49f3a3a4892ad2fc5af4672e18555c14b36d80066a0955047bca73b4f09f99c4a71f537739dd7733043f720694315117aab185299828529ed595ce4aa62f44db7c772081bb7217a1c1445eef8ba8a07b383112aa68a49e4b30cefdcdda587ae71b7f3d0f971b2f0a1617ee7ade5d6c56dbb51718bb0bd7770d45e31c34d79819a7fae6e105f513908a175a3d6c9e1be5d7062d3f8fa521a0b484361859bd09eddb3d274e638ba5f6701ca73d88633bb6c67418f7983382511203459e16d52c5a88a26f8fed84422fb2c749128de8d0891c668da2a1d3b707603923bb6f93c30979aab882332e4b2179db21b2f397a11b85fed65bcc43579790d23a5767adb1a680f71e151688a02f6a3a34512e50a969f7d20b5d7fbe0897d76e3be11564943d070f38e394e612104d2b6c9e826a2d126c18f1e66bf70cc17a6297c7a024d33f2fa4e979e3e25dcbdfe8210eb0b1abf49704a1bff47e693b47c435cd6b0d796c0fa444cbb7581bba3efc45242e699b855c6d5dff86b44f3ea45041c1be9f268275e0db7fedb8f888c5d54719a9f08ebbc36423c22a687788eb725fd9567f3218da44832bf529361c58c7ae35399a8cb08742bd56d42e3e16da8ad5f20d84411cbfa7bb75f80748fa244478040000",
    ],
    [
      "ETag",
      "CYTNWZgfQVlAdTWLglg/0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92514fc23010c7bf4b7ddd125028ba840786a84b00618c18630829db6d0cb7dd683b0d217c77af13d1a889beb477d7df5deffeed9e3da745c41cb64a936d05727796809e1ac30755655ad15662a180590cb44888e4a2ef068f9d79c3db8eb378edbeba3c7f9876bb44a8700db960ce9ec529649162ced39e1522074a0b31abf262597b16d3bbd2046781ef8d6fc9cf3132fe783e1cf6dce1801dac536224b458d6fc3fd216078b6d70e5430c128a104c2fa5c40d84da33632a919719d80a2b198262355c1f2412ab5248449b2276fbca6ef20bdeeab4396f9df30e81198642a758103b9f517f4ca316998fafca684280ac4d1a38aed7170aa7513d8831bd71c05b757f5f010921ca68f9275752bb6b41aff0811d15f8ce891cab429fa89be17defb77224e967a9eb5e30f841284d429d90c01b0d66416f3431dce238babbd3a0261249470546c266a375d9eef0c6bbaa7d344ad33d8e9615582c14f439ee52cd9c58640a0e6f057e69647a020000",
    ],
    [
      "ETag",
      "6aCBTY7U0IqNlfhBwB6mWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:16 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` != ? LIMIT 1",
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
      jobId: "grouparoo-job-60-1636475664267",
    },
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
      "ccfbb2694d0234811029eab2946e68296913d26a9aa6c43686ba054c6dd3aeaaf2df7740d3974d6b3f85dc3d6f77b6efd1152f62344284a7d7159377ef2f05417b88699c42f532fcad2372fb85ce87f6f765602f6fe7d5a7d3f11810bc66299c9719eb285149cad468b5eca652542596427440a8e3981dcbd977faeec071fab6e3024fb12c99f1e20ad8175a976ad4ebedbcbba91069c670c955978afcb1debbb17ba514978c6ad57b69d90317d57bddf42013146b2e8af16a09012ac5e49ae5986710e1891993cf2fa5bb1ce7dd14c0379c324ca9a80a5dc702092a8a84a7956c54d1e81e35319f7da0a53ff3a791319dafc2e8c306e73579f3d1c0ca58af255355a68da3c5fcd8d894e0758115531be3fc9bbff00d63231915325ef378638c8d0363121e42f141c278579766c171101916248999d2bc6872449864accef0b0aae0df03aa0958835bdb5cbba683ada1e99184b83419ee0f4862324286c41de07d6252afcffa31611878ba566f58b81085edc14a6cc78a5decf6bd980e5d3220b16d79d4f3129b99d4b4f6074393a0ed1eba955cb343ae4aa178bb2f74be08227f1d2d56e17412f9cd1809869d1cb6e1ea219ee7d43024805e996b5b77b900a77af94118f98bc9340acefcf6bc672cc5f46e790d279ee04c3140638973a6993c16312c0d9dcc974114ccc3c90c18cd219eec100a8d7ede3f11a2bbb2d9b26e7e6b2fa7dff8ef006738ab1ac44dfb812cb4ddeefd5fe168369fbcadd11d0062fb0b4070c55b0574baf2173f505b5ab0844956d0b76f00809bc69b2f75f76c000b0f076c9486ff70dfa8aa4da864edbde37993b065bb96e339266ac052ffdd73cde160b7e05aa35664392bf4c344ed",
      "b3a9f7d5b42af50882265c973008bf42f70fa631adeeb6040000",
    ],
    [
      "ETag",
      "jNxtTbwBcO82KSI2SwOu+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90416f83300c85ff8b7705a9dd582a21f5302ab4764268a5eb619aaa2a05c3608059123a31c47f9f4377899d972f7e4f1ee1ab6c33f0e15216df3daae1ae40b3b74d82baaf8de6d251ab111c40230b26f731beffbe94d72a488a8317509e89eda658af99d0e9273612fc11f212eb4c83ff31422b1be46fe7b39a27326686ce2abbf82d7c0e13161acaac101fa3e8298842984e9303155d12cc51619ba21dd929aa30353b9b56cba6abd1d5d4ab1435ccf0fc5028ea3ba9885c565cb17097e24178ab4721bc7bb162b0a6549a925a668f07601b4346d609fd70585832a0e69673e7f37965d9b3814eff683018d4af8ad857a3b55cdcec376423198e6a548f0ea49297b12dcded3efd01e510ef6869010000",
    ],
    [
      "ETag",
      "QNeYzJivjBRgS4Bofd6HCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:17 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb64ad0e02b1d21ddf01290255e4b3c920447e22318122747af73abd467d7778df20cd32cc18eabb06dfc03b98525e5a652b9b6c15632c84594fccb8f6f4e3f96e667a20bdedfc63b9692785d55e7c0dc40e1ec42febaed22ede25fb75c14b61e58a5c145c0cd82211a69bc2c55d3b3506d28b8b2d87b6305af683dd0e581d8b563eaa53dd948a3ccebee136735eef42165d35ae4936db684d43d5af2c36ccc3d2388da794d3b52c1f72adbb7cf4e3def524aaf24e9cfbc42478ff79572abf0cce222f426e19e3a8721d6899c82a3987363d17dc4a48562f2fff175800fc2015c50c55cfed0294a405f8ab8ffa89e0e77f05a71453f0f30bac17988819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-61-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553db4ee33010fd95c8fb4aef69d256aa96aa84a5da36853405a1d52a729c49304de3103bac10eabfefd8a11508099e627bce9973e69257b2e345422624e6d9530dd5cb8f47119333028a66f89a658ef83dbc068fedee773d716bdb999fdd4ca788e09a25e9becca125455d319093eda69d55a22e6925440b13b59c5eabe70c1cdb1d3a8edd775ce449c8d3252f76c87e50aa94934ee7a8ddce84c872a025976d26f6a7f7ce73bf5356e21198929d8f921d54919daf457fe68251c54531dd6ed0402da18a604f79ae0b3c3193f8fc63ea36a7fb7686e067ce803226ea42695b98828922e5595d99ac64f24a8ccd7707b2f196de3cb498c8eb7d1115740f675642158dd44b09d665b05e590bff721dac66e162ed479bf995b79ab5e7ebe576e56facbb2b2ff02c45e31c0cd79a5ae7e6e6e305f513908a17463dd4cf5af9ad418bcf63d1049496d00423b7ebd0dea83b8ed3d865e968308cd32ec4f1287687741077d9d8063b898122cf881a162d44c1d2ae3b4a9271d4ef3b7164a7b61dd1d1a01f0d6d77d475076ebfd71b93c319f9577105175c9642f2a643e42e58845e14065b7f3e0b3d53424aeb5c5d34c67401ef3d2a2c10415fd474d0512e5049b77be1875e309b878b5baf99f01232ca5e364f38e394e612104d2b6c9e826a25126c18f1672bef02c16662d7c7a024933faf44f75cbb78d7f2133dc4016abbca7cc9260c16fe2f63e788b8a5796d20cfcd819468f9016b43d787bf88c4256db2909bad17dc93e62980142a28d8f7d344b0097cfbaf1d171fb1b8fa282315de717798d422ac826687b829f78dedf6dce178440cb8529f62ced83e764de7d019610f857aaba8597c2cb411abe50984411cbf6fba75f80f286e828278040000",
    ],
    [
      "ETag",
      "gg6oK5PeEckYk1oV44gNgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614fc2400c86ff4bfd3a12d07198257e0001250154d88c8931e4b89539ddd671775309e1bfdb9b8a464df4cbaded9e767ddfdd161ed32286009669b2ae506f0e12b4572e98a1a9326bf8515261103c402b1326fd68331f4e73f572935c871d15adfbc3c7a3e79313268cbac75c42b085558a596c20b8dd422173e436455995178b3af3c06e4a579c87b3d1f48cf39c62974fa3f1b8db1b0f60e7ed1b6369e5a2e6ffd176b7f3e08196335ca1c642a1dba5d4f480ca8e9c4c23f332c386a14a2b3450c3f58b4453554a4dd4e04a43b41a2d7124fc4e5b08ff507418cc48499b52c16c34e7fdc09295d98c9e59250806741db2e0557d3e71398d6b212e1c4d43e1d7fb7d05342ad2f1e24faee475ef25ff850fecdd81ef9ccca92aec9e1a8e2fbabf8d634b3f47f5bbe1e007612c1bb547c2d164300fbb934bc7ddbd4bef6d2c9a4b4deca3416761abe91fb73ba2f9e6ea2939a7f93b81d5157aa0245f8ef3d442b09299c1dd2b2a79dc0f7a020000",
    ],
    [
      "ETag",
      "4UySFNmcxXgVT7cUqDFk3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:18 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-62-1636475664267",
    },
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
      "0000000002ffc5536d4fdb3010fe2b962704686da3961250a58a31c8b66ca129690a42136adce41a0c491c6c070921fefbce0e852126f6611ff6a9f6dd3d2f797c7da037bccae8882e797edb80bcff702d96b44341b31cabf27bb33fbd90c38fb1137e9dabdb69a5f7fba7e3314e708352acac0be82ad1c814d4683eebe552343593427491a8eb0eba7d77c71deeedbaee70e0ee214e41b10a787583e82bad6b35729cb5762f17222f80d55cf552513ed79dbb81534b710da956ce6b49075594f3bee8412152a6b9a8c6f3191a6814c805948c1768e105992d3fbda6ee7156f6721cbee329b034154da58d2da44845b5e279232d2b1d3d506bf3b7039d7981771493a3703e89b712561a70b24d98228b8504d5149a7c89c21392d4a875c514a8849c7ff3228f9044422a64b6e05942c6e4801c4e8e0909c2732fda4ab0b64d02ff8787f5c03ff163d2473b19ac18321e338d44dad8c8daa36fde4883d238f414a0fff6d9e8a3e97221b936d6fd49ec458747b17fe6b5690590b3f47e768b79ad58a100a79964256890272203844cc3991ffbe1e43040848d60ba9e5074f4f3e10510dfd7600c6afb6bb4dca1d55f0f9cb1a2b11377ed81f6e9e363e79f1836fabb1b48728943b81e2d9e9ecebde882b6a5085620a14a2dea9d9cecb06dfc75cbd72b87b3b87428a334de95e6a93222a904db8e7969bfb145eff5f77706bbd40e4bfdb6b76398a1cafed879d2682c3f48296464f7cc5c514d592fbcc250f09fdba12528c5724333aff04b14b06501c4be1d798e922409e11531519324be987a0b1b77d2219f59861ded0e894d79444cc8ebf3a6b96c1a47d647bb02ffc9c3651b8b11390e271eeec12f8c390c1af3040000",
    ],
    [
      "ETag",
      "rJu8PYr4+T/OGUsqPnt81Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:18 GMT",
      "Server",
      "ESF",
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
      "ffedd3516e82300000d0bbf45b8d9451619f4559283a8c30047e08b4b5a1806350105c76f7995d63be3bbc6f9053cafb3e539f15bf825730e7d05ad195d79ad8b94975f4a703acc571d8f7ac9aeb41cec584b0fd7689c98e8965536c5e6ae6a388a65f7b91e2e9b04ccd4ed34b696ec303b4e890aa36dca6b67696a177754af80ea981103107529260941f1ef1b5b5419c93924da6eb8292f93eda84ec70941796805610b136246ea1b974bcf261cdf5718c6d3be903476ef2336e7cc8023baa7dd485d0bb085ac9c4ac4fe8d6f946c286635055cc543172b190da65f5f4f47f8105e0535b76bccfcac776ddb0ac05f8ab9fa9b9e58fff98e71defc0cf2f3deff91319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-63-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6fa24014fd2b64f6b52a2a0a9a98ad51ba35a9d8456c77b3d99061b8d06981a1cc60631afffb5e86da6dd3a47d6266ee39f79cfbc13379e0454ca624e2e9630dd5e1dbbd88c8190145537cb56f9fe2eb9bba8ecdbcff4b2d9dc7fd01443a9b2182372c49f332838e1475c5404e77db6e5a89baa495101d4cd4190f3bfdf1706cd9a3f1d81a8c6de449c8922b5e3c20fb4ea9524e7bbd9376371522cd80965c7699c85fdf7bfb41afacc43d30257bef257ba8227b9f8b7ecf04a38a8b62b6dba2815a4215424e798616fe33e3e8fc7dea2ea7793745f09e33a08c89ba508d2d4cc14491f0b4ae7456327d26dae69b03d9ba57ee223098c8eabc080b9ac399115345437528c1b8f0376b63e55d6cfcf53c586dbc70bbb874d7f3ee6273b55b7b5be3f6d2f55d43d12803cd3566c6b9be797841fd18a4e285560f9ae746f9a541ab8f636908282da10d86b639a67dc79c444964b3c4198ea2c4842872227b448791c9261658710414795a54b368218a082626a5132b64f63009add8198513bb6f8503d389cd413f19f5a9458e67e4a9e20a965c9642f2b643e4d65f056e18f83b6f310f5c5d4242eb4c2d5b634d016f3d2a2c10419fd4746ca25ca052d3ee9517b8fe7c11ac6edc76c257905276d83ee28c139a494034adb0790aaab588b161c49bafdd2582f5c4ae4f4149a67f9e49d3f3c6c59b96bfd2031c606357e92fd906fecafba1ed9c103734ab3564df1e488996efb036747dfc8b485cd2360bf9b973fddfa47df221810a0af6f53411ac035ffe6ba7c5472cae3eca488577dc1d261b115641bb435c97fbc2b6fb8e6d9a44832bf521e698cea96b4d8e2623e450a8978adac5c7425bb15abe823088e3f774b78eff00ba8c144978040000",
    ],
    [
      "ETag",
      "7WwdPVuud0m1XtD8qvyeog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1636475664267"
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
      "0000000002ff8d92dd4ec2401085df65bc2d09bf8b69c2052828b12094122f8c216b3b8562dba9bb5b0921bcbbb355d1a889de6c67a6df4ce79cee019e923c02171e93f573896a7fb64633b7818fba4c8de64741b94670008d5c33d9d91477233d8ae3f930bf6b7adda68c6f76bb5e8f091d6e3093e01e204e308d34b8f707c86586dc16525a66f9aaca1c30fbc21617813f9e5e719e5164f3e9d2f3fa036f0847e7d41849235715ff8fb687a3035b7af43146857988769742d1164333b632b5cc8a146b9a4a15a2860aae5eac159585544435aed444abd6102dd1ee768468374597c194426912ca995d2e783f306464ead38e5582604055210b8eabf385cb495409b1e1781a8876b5df574061482a5afdc915bcee46f25ff8c0de1df8cec98ccadc9ca89177dbff6d1c5bfa39eab21f0c7f10dab0512724184f868ba03f9959eee15dfa606f50cf14b18f1aad858d7afbbcd315f537572fc83acddf718d2ad18150f2e5b84e0cb8b14c351e5f014dcd63e07a020000",
    ],
    [
      "ETag",
      "5hpWFsFffQEnW2L72afKww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:19 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-64-1636475664267",
    },
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
      "da",
      "40",
      "18",
      "ff2acd2d262e93974a2994843882ddd60cc19522599605aed7a778d8f6eaddd5cd18befb9eb6821a33fd8b72cfefe5797d20373c8bc880847c735b80bcffb015213921a0e9065f9de2efe8e653e2864b4f6fe9761c996cc146c3212278c95234cd1368285148066ab098373752143995423450a8615b0dd3eed856af6bdbd6a9dd439e82249ef0ec06d9d75ae76ad06aedbd9b1b213609d09cab2613e9e1bd7577dacaa5d802d3aaf5d2b2852eaaf5b6e9592218d55c64c3c51c132814c815a4942798c213330a3fbf946e729a363708bee30c2863a2c87499164a3091c57c53c84a950c1e4895e6b30f327727ee3830c6b3c534385ed3b424af3f1a5419ab95045524daf8e2cf2e8c758e5ed754815a1bcb6faeef1ac65a0213325af1686d0c8d3363343d378cc96ce9fac707344a4dbcef2e4627de85171826261581d23cab520a68984099ce63d7bcd7b32a0954a3541d5cf5da3635fb6d278cc31e8bfb9d6e18b7210cfb61af4b3b619b39165851081479ba54af583413198d188bacd009fba751d43669dcb52174ec8ec3a2386a3b48342102da23bb13f247720de75ce542f1ba7564e97b81bb0afcc5743c0adcaa8c98627bceebe4ca229ee7a9b14804bd51d7ae8c72814ee51cbc69e0faa371e05db9f5e827b0a1ec7e7e8bc38f69a200d154d21434c80b1161d3c8e56cee05de6c3a9a20a39ae7e51ea1c8e0d7c31321b8cfab2eebeab7f4b2adca7f0fb8a2495121eeea0f6292ddeee4ff0af3c0f7a65fdf9638a2797e8432bf1185db5e2b901f0bd7ff49ea271f629090b1f73700c155e0dda3dd5f1062f186d04669fc8ffbc65469c224d47bc7d3aaca9add331dab536e2682a57e15eb56ca87cb291521854c3f56545f50d9af2a54a8030883b82ed3aa53",
      "bb7fcc57a515c1040000",
    ],
    [
      "ETag",
      "9uxAk+lEbWItjajCd1cUcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1636475664267"
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
      "ff2d90416f83300c85ff8b771c486bc752a9520fb4421d1aaa36b69ea6aa4ac15028609684750cf1dfe7d05d62e7e58bdf9307b8144d0a4b3815f95787aabfcbd1bcd92646dd55467369a9d1080ea09139937edc5fcab015f8bbbddfbcfc9c233f2baefe6ac5844ece584b580e901558a51a969f0334b246fe763caa692263a66fad12ee3e826d10b350536a85dd3e8afc7514c078181d28e91463860a9b04edc856518989096d5a2debb6425753a712d430c1d343aea86ba52272597185e7cec4a3f0164f427873b160b0a2449a821a66f7efc036868cac62ba72589831a0a6967367d3f9cdf2dc063afca3ebdea07e55c4be1aade5c3cd7e433692e1a84675e840227919cf85b9ddc73fd2414ed969010000",
    ],
    [
      "ETag",
      "ARykjIp6ezG+CKxhLAfiwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:19 GMT",
      "Server",
      "ESF",
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
      "d0",
      "bb",
      "64",
      "ad8e2008e90ea4680ba8d482ca26832196944f43f825767af73abd467d7778df20c598b42deabe0a528327205315cef0cc63a6ed8eb9152371f195a8f1f7b556c7fbf0d569a7b45b9c587ab5fc767d6c332ee46dde4c4d1e50a919262ab7a61c9cc075e9c9397f563271966a7409f5adabc09e7a7d00b3a83cd11b659a19ae863edfc0e61894e3705d17f89d9d5d97336ce084af028be645ac57c910bc65a37d90bd57d97e2e3750330c841721b3930e8e057ee1b2567a5b4b9b7ca9925d8ca6db6cc78560676d3e3e678e385cf323d19b8fb0983d3cfc5f60028860949316d1fbf6850ee104fcd5479d64e4fedf2629271cfcfc021a97c47e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-65-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda3c48082491a2354ae91a29212b21ada66942b6b950b704336c5a4555fefb2ea6e95a556a3f61fb9e73cfb90f9ec983281232254c647f6ba80edfee2523670434cdf0b590836b769b07abe86ae5c1eae1b01b3e3dcc6733448886a5e8becca1a3645d7150d3ddb69b55b22e692565071375dc51c77687aee38d5cd719b81ef214e4e94a140fc8bed3ba54d35eefa4ddcda4cc72a0a5505d2ef7afefbdc741aface43d70ad7aef257ba8a27a9f8b7ecf25a75ac862b6dba2815a4115c39e8a1c2dfc6726ecfc7deaaea0fb6e86e047c181722eeb4237b6300597452ab2ba3259c9f499189b6f0e64ebaffc45647199d7fb222ee81eceac846a1aeb4309d665b8595bcbe07213aee7d17213c4dbc595bf9e77179bd56e1d6caddb2b3ff42d4d590e866bcdac73730bf082fa09282d0aa31e35cf8df24b83961fc7d210505a411b8cbdbe4bed717fc252e6f1743c1cb1b40f8c8d9937a243d6e713079c8401459e11352c5ac8c266f6c0e90f69ec259e1d3b1377123367e4c4a9c7dca16d27dcc6091fcfc85325345c08554a25da0e91db7019f97114ee82c53cf24d0929ad737dd11a6b0a78eb51638108faa4a663131512959a762f83c80fe78b6879e3b7135e4146f961fb17679cd25c01a26985cdd350ad65820d23c17ced5f20d84cece729a8c8f4f733697adeb878d3f2577a84036cec6af325db285c063f8c9d13e286e6b5813cb60752a2e53bac0d5d1fff201297b4cd42ae777ef88bb44f21a45041c1bf9e26824de0cb7fedb4f888c5d54719a5f18ebbc35523c22b68774898725fd8dea06f7b2e31e04a7f880d07e353d79a1c4d46d843a15f2a6a171f0b6dc56af50ac2208e3f30dd3afe034014dadd78040000",
    ],
    [
      "ETag",
      "no2QbWlNLTHL7eLkyU3wkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1636475664267"
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
      "c2",
      "40",
      "0c",
      "86",
      "ff",
      "4bfdba05d071e8123f0c052541d431438c31e4d80a0cb775dedd3448f8eff6a6a25113fd726bbba75ddf77b78187b448c08759ba78ac50adf71668ae6d10a2ae32a3f95152a1111c4023174cdee0fef9d1f8b61325cb55d39b34c2fe4b63121c1f33a1e325e612fc0dcc53cc120dfedd060a9923b7c594557931ad3307ccbab4c571140e46679ce794d87c74331c06dd610fb6ceae3191464e6bfe1f6df75b0756340b718e0a8b18ed2ea5a215c66660656a999719ba9a2a15a3861aae5f2c1455a554442e575cd1765be240789db610debee83098512c4d4a857560ccfb812123b3909e59250806541db2e0797d3e71394d6a21361c8c22e1d5fb7d0514c6a492e99f5cc9eb2e25ff850fecdd81ef9ccca92acc8eea0f2f83dfc6b1a59fa34e83a8f783d0868dda21d1e0a2378e828b2bcbddbf4befae0dea2b45eca3466b61abe91db63ba2f9e6ea0959a7f93bbe51153a104bbe1ce7a9017f2e338ddb57760810e47a020000",
    ],
    [
      "ETag",
      "Ue2H9SY7Tdhj04W/RFz/WA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:20 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-66-1636475664267",
    },
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
      "02ff8553796f9b3014ff2ac853a54e6a0ed2841c52d4a509dbd812d212d26e9aa6c49807f50a98daa65355e5bbef014d0f556bffc2f8fd8e77f99e5cf32c242312f0f8a60079f7e18f08c811014d63bc3d77e88d3bfbe175af92a1e4a7fa5b345d9cc6e3312278c95234cd1368285148066ab45e3563298a9c4a211a28d4b0ac86691d5bdd7ecfb2ba1dab8f3c054934e7d935b2afb4ced5a8d5da7b376321e20468ce559389f4f1be75db69e552fc01a655eba5650b5d54eb6dd3934430aab9c8c6eb15265028901b48294f30852766187c7a29dde4346dc608bee50c2863a2c87499164a3091453c2e64a54a46f7a44af3d981acecb93df58de972edfa875b9a96e4ed47832a63b391a08a441b9fbde5c2d8e6e8754515a8ad71f9d5f66cc3d84a6042861b1e6e8db171624cdc9961cc9797b677f88846a9b9f3ddc6e8dc5938be6162522128cdb32a259f060994e93c74cd793dab9240354ad5c14dbf6d5173d01e0651d067d1e0b817446d088241d0efd1e3a0cd865de8860150e4e952bd62d14c6434642cec06c360d009c3b649a39e05c1d03a1eb2300adb43249a1002ed93dd11f92bb9861957b950bc6e1db9f41cdfdef8deda9d4e7cbb2a23a2d89e599d5c59c4f33c351689a037eada95512ed0a99c83e3fab63799face855d8f7e0e316577ab1b1c7e44130588a692a6a0412e44884d2367cb95e33b4b7732474635cfb33d4291d1affb27827f97575dd6d5b7f4b2ba95ff1e704193a242dcd6076292ddeee8ff0a2bdf73dc2f6f4b1cd03c3f4099df88c26daf15c8f9daf67e92faca83082464ecfd0d40701578f7d1ee5f1062f10da18dd2f88ffbc65469c224d47bc7d3aaca9addef98edf6805460a95fc5cc4e67dfe052a354841432fd5051fd82ca7e55a1423d823088ebe2569ddafd033e42a494c1040000",
    ],
    [
      "ETag",
      "QIaqNDXR4hl9riBtJfCMBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1636475664267"
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
      "000002ff2d90416fc2300c85ff8b776da5c158d09038c084281362a31bda61422814d385a575495c2656f1df71ca2e89f3f2d9ef250dfc98720703d89afc58a33bdfe5c8cb50a4e86bcb5eb68a4a8f1001b2ce85ecfe9963f2644fc74f3d1dbd8ec9142f49b21c0e85f0d937161a060dec0dda9d87c15703a52e50da361bd74e148ccf5550668b8fc974928a50d02e088bd57c3e1acf2770595f2238d036c53d3a2c330c232b4707cc7816d27a5d5416634fb5cbd0430bb717b9a3bad28e281625562aeea807d5eb3f2ad5ebaabe809632cd864a6157ef20364cac6d4abf12163a02b8b694dcfb763d85178740eb7f747c66f46f8ec4d763b0bcbfd93f5388c412955d8d11645a3e23317c3b5faeafd91f4969010000",
    ],
    [
      "ETag",
      "2ziqH9lvqWaGAOBoimJHHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:21 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb642d0ea084a43b11432d28088aca26133015cb2ff229d04eef5ea7d7a8ef0eef1bb024e14d43db2ae32578012353f13499da0219a4bf46d0405d506a5f7de64bd606a7ca10bc3a45a4b3b0704f176a9a2a9c61ab85d53dd38cc0ae040ceb748054511cfa76d2e747334242138aeda13db95cf5f223601d5defcb6489e1f916c7bb773c4f8fd5a22b88d94ad1b669a5389ff939da12a9b5ecd8143dd3ce06ead515faa444dea4ca2a2bdcd292f339ca59c2339f4401dc25073fbfb3a10a43a81fb428abd6f2c2736482bc510a17ee49f59769989ad3a7a7ff0b4c001fc4ade60dbd3db6cf348c27e0af3e6d47c11fff0dce6a5e839f5fc96e309d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-67-1636475664267",
    },
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
      "00000002ff85536b4fa34014fd2b64f6ab7df3a84d9ab55b712569a90b54b3d96cc8305c709432c80c3e62fadff732585763a29f98997bce3de73e7826b7bc4cc98c243cbf6ba07efa762312724440d11c5f1f82e3fa62637bdef2919e3bdee4eec7a31a3fcce788e02d4bd25d55404f8aa6662067dbb09fd7a2a9682d440f13f56ca737b227b6e958b66d8e6d0779128a6cc5cb5b645f2b55c9d96070d0eee742e405d08acb3e13bbd7f7c1fd7850d5e206989283f79203549183cf45bf178251c54539df8668a09150c7b0a3bc400bff996972f23e759fd35d3f47f03d674019134da95a5b98828932e37953ebac64f64cb4cd370712ba2b7719194c14cdae8c4bba832323a58ac6eaa902e32cd8ac0dcf3fdb04eb45e46dfc385c9ebbeb457fb9596dd77e685c9dbb816b289a14a0b9c6dc38d1371f2fa89f8254bcd4ea51fbdc2abf34c8fb38969680d212ba60ec0c6d3a9a0e8f932c7158369d584936842499268e4527c9901d9b60a60950e46951cda2a5289d119b0eb3a11d5b430762d31cd13849cc2c6656ea581393d1c98891fd1179a8b982532e2b2179d721721578911b47c1d65f2e22579790d1a650a79db1b680b71e151688a04f6adab7512e50a96db7e7476eb05846dea5db4d780539654fe11dce38a3850444d31a9ba7a05e8b141b46fcc5da3d45b09ed8c52128c9eccf33697bdeba78d3f2577a84036ced2afd25611478fe4f6de780b8a445a321f7dd815468f91a6b43d7fbbf88c425edb2905f5b37f84dbaa70032a8a1645f4f13c13af0e5bf76587cc4e2eaa38c5478c7dd61b2156135743bc475b92f6c673cb21d8b6870ad3ec41c7b74e85a9ba3cd083b28d54b45dde263a19d58235f4118c4f1fbba5bfb7f18f2e83178040000",
    ],
    [
      "ETag",
      "wR9rPO6IICxaH7I3qBxt2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1636475664267"
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
      "ff8d92614fc2400c86ff4bfde84810f1304bf80088b808a830a2d118726edd186cebbcbb4908e1bfdb9b8a464df4cbaded9e767ddfdd1656491e820b4f49fc5ca2da1cc4686e6c30415da646f3a3a05c23388046c64c96a1e8897bff30ded46f6f57837163d0b8bc5bb7db4ce860819904770b518269a8c17dd8422e33e4b680d232cbe755e680d914b638f527de78c07946a1cdc7b3e1b0d31df661e7ec1b4369e4bce2ffd1f6b87360494f138c50611ea0dda550b4c4c07856a6965991624d53a902d450c1d58b585159484554e34a4db46a47e258345b2742341ba2c5604a813409e5cccea6bc1f1832329dd09a5582604055210b8eaaf385cb495809b1a137f645b3daef2ba0302015ceffe40a5e7721f92f7c60ef0e7ce76446656ef6d4f9f0aaf3db38b6f473d459c7efff20b461a3f688ef8dfa53bf33bab6dce3bbf4eec6a0be56c43e6ab4161ed59ba7272d517f73b547d669fe8e6b54890e04922fc74562c08d64aa71f70a42a1c03e7a020000",
    ],
    [
      "ETag",
      "ud6C6ZT+gy0WWkGN2G2KXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:22 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-68-1636475664267",
    },
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
      "0002ffd5535f4fdb3010ff2a56f60212346ad715e854b152c2162d4d4b92821042ad71aea9591207dbe98410df7d67a7852136f6bca738bedf3f9fcf8fce0f5ea64edfb9e5d97d0df2e1c39db875f61cd034c3ddfcc40daf26e7173fd9d41b056baed5eaec68381820821b96a24595c3be12b564a0fab3b895495157540ab18f42fbbdc3fd76ef63af7bf0a9d7eb767a07c853902f035efe40f64aeb4af55d77ebddca84c872a015572d268ae77d77dd712b29ee8069e5beb674d145b9ef9b1ee78251cd453998c518a05620e750509e638417667afbe5b5748bd3a2952178cd1950c6445d6a130b259828973caba55575fa8f8e8df9dbc289bdc01b2564349985c9ce821686bcd8255491f95c82aa734dcea2c9982c2af45a51056a412ebf799147c8420213329df3744106e4980cc3534282c9a517ed2c94c688a813f8df3d2c05fed84f481b13a5b0a4287a4a356a6993246d96beb9260d4a2368d343ffedcd394fa6ca85e4daa4f7c3c48b86a3c4bff09a86059051f610df63cb96345780682a69011ae458a48094e924f6137f120e0364d82e4cb708e5f4af1f5f08c9430526a0b65fe3d5eb5aff2de082e6b545ac9b85d3769e9ef6feae90f8632f4e86e329c26e500867a04138e7332fba729aad089620a16496f94e272cd816fe39cadbb9422c4e16dae0f568ae3467ca983009b69cf0c29ea2611f743add8eb932044bfdb67678649e5f99feb1b2f1a8ad3e4829646487c9fca29bb25978898de3e9b91dc55729ef375b05284533231f0a5250cd56bccc88e25989da12c85248b2ac4b6668cde8d92d2ab3ba805213d378d527cf8d6f91b8ae2a2135a42f2a0868a6364e223ffcbafb79f37b729578313e054daedbfdc3f68d39943d4a3327ffef316e9acb31794e27a187d3f80b41c57eb15e050000",
    ],
    [
      "ETag",
      "lB/NYOQVwcPECLvitshF9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:22 GMT",
      "Server",
      "ESF",
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
      "000002ffedd34d7282300040e1bb642d4ce5a74a77808811a110a0809b0c608a412d4882809ddebd4eaf51bf0bbcd5fb06795912c6306f4ee40bbc81299734b1149d7669ac879a3ad6e12a5c22ba614caf9d0c99fd6ad23de2eec3c04f0675882ba41c5eedd5e2bcde3451a8732f69ee71521f536831365c1b661aa966c036acf9095e4b4c7191d9b532c978cea96b769a0bddedd20e8ab168559cf9bbedbbb5b73b217572bc90d6659422bfe09f7031c476150a58a26753eeadb157c6614b1fbdf02385f2ad42c740aa9a5d7f17fc8deac28be761a9e7289f8e06d25ee6f96527fb4aa4884f4fff17980132b6b4230cd3c7edb2aa6933f0b73ee6534b1eff1b24ef48077e7e01b162abb719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-69-1636475664267",
    },
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
      "6b6f9b3014fd2bc8fbd8e609812452b446096d9112b212926a9a26649c0b754b30c5265b55e5bfef629aaedda4f613b6ef39f79cfbe0993cf07c47c624e6e96305e5d3977b119373028aa6f87afd7be87957d6d9f6beba9c9f0d1c2fdefae6cd6482085eb324dd1719b4a4a84a0672bc59b7d35254052d856861a2963d6af56cd3b69c816d5b7ddb419e842c59f0fc01d9774a1572dce99cb4dba9106906b4e0b2cdc4fef5bd73e8778a52dc0353b2f35eb2832ab2f3b1e8d74c30aab8c8279b351aa8249411ec29cfd0c25fe62ebe789fbacde9be9d22f8c01950c64495abda16a660224f785a953a2b193f136df3cd81acdd853b0b0d26b26a9f4739ddc3b9b1a38a46eaa900e332582d0dcfbf5c05cb69e8adfc683dbb7697d3f66cb5d82cfdb5717bed06aea1689c81e61a13e342df7cbca0fe0ea4e2b9560febe75af9a541deff63a909282da109464ed7a6bd61771427b1c392a13988932ec4f1307606d48cbb6c6481b58b81224f8b6a16cd45ee584e1fec8119b1ddc889acaed98f68af4fa3816d250963c3a1dd05723c27bf4aae60ce6521246f3a446e032f74a330d8f8b369e8ea12125a656ade18ab0b78eb51618108faa0a6631de50295ea767b7ee806d359e86ddd66c20b48297b5a3fe28c139a4940342db1790acaa5d861c3883f5dba7304eb897d3b052519ff782675cf6b176f5afe4a0f7180b55da5bf641d069e7fa5ed9c105b9a551a72680ea440cb77581bba3efe44242e699385dc6cdce03b699e0248a0849c7d3e4d04ebc0a7ffda69f1118bab8f3252e11d7787c95a8495d0ec10d7e5beb09d7e7f3832890697eadf98d9ed99a7aed539ea8cb0875cbd54d42c3e16da8855f21584411cbfafbb75fc03c2ada78c78040000",
    ],
    [
      "ETag",
      "Hx8IIG4+VjuFD+57IbVN3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1636475664267"
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
      "00000002ff8d92514fc2400cc7bf4b7d7424a278e8121f26a2904c84317c31861c5b87936d9d77371009dfddde54346aa22fb7b6fbb5ebffbfdbc0222d62706196ce9f2a54ebbd399a910d02d45566343f4a2a34820368e49cc9a0e7af96b7379d49677139f383e479ff05f74767674ce8e8017309ee069214b358837bb78142e6c86d1165555e4cebcc01b32e6d711c06fdc115e739c5361f4c7cdf3bf7bbb075768db134725af3ff68bbdf3af048b30013545844687729153d6264fa56a6967999614353a522d450c3f58bb9a2aa948aa8c19586386d34c59168b58f85681d8a36831945d2a454303b19f37e60c8c82ca015ab04c180aa43169cd4e792cb695c0bb1617f108a56bddf574061442a9efec995bcee83e4bff081bd3bf09d93395585d95197fe8df7db38b6f473d48517767f10dab0513b24ec5f77c7a1773db4dcfdbbf4f3b5413d54c43e6ab416360f5a27c76d71f0e66a87acd3fc1dd7a80a1d88245f8e5e6ac04d64a671fb0ad67883e87a020000",
    ],
    [
      "ETag",
      "RHLwvVOCUCkFbLRfx+ze+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:23 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-70-1636475664267",
    },
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
      "5b",
      "4fdb3014fe2b96f702126d5760e9d6a9621d6423a31748521042a835ce696a48e2603bd500f1df77ecb430c4c69ef714c7e7bbf9f8f881de8822a15d7a25d2db0ad4ddbb6b7945b7281896e2eed99117dc2452dc9ffe5c1e2eef9345a17fe4fd5e0f11c2b234cbcb0c1a5a568a83ee4ea266aa645532256503851a9df78db6b7e3ed763e78deeeb6d7419e866c3e10c50db217c694badb6aadbd9ba9946906ac14bac965feb4df5a6eb74a25af811bdd7a69d94217dd7adb742f939c19218bde24c200950635859c890c233c3393ab2f2fa59b82e5cd14c14bc181712eabc2d85828c165311769a59c2aed3e5017f3b7058dfc81bf1f93fdf164146fcc586ec9b34dc234994e15e82a33e45b381e9259895e0ba641cfc8d9a11ffa84cc1470a992a94866a447f6487f7440c8607ce6871b336d3022ea0c82231f4b836018c4a48d89129833143d6006b58c4d92d4cbc05e93016d10b4ea61f0fae6e8a3ad0aa984b1e98351ec87fdfd3838f5eb860d2065fc2ebac596cd59a601d14cb11c0ca8a14c0029c7e3288883f1a83f4086ebc2f11aa169f7e2e19910df9560031af7b55edeaef35f034e595639c4b25ed0367d7cdcfabb421c0cfd28ee0f8f11768942380335829e4cfcf09cd65b21cc4141c11df38d4e38b02bfc7394d77385589c2cb4c1eb31421bc1b535e10a5c3916b93b45cdee6cef789d4fd481957955ebec7cb0cfaf48fe585979544e1f94922a74c3647fd14dbb2ca2c0c689e4c48de28b94b7abad1cb466a9951f499233c317a24889166981da0ac85c2a32af0a6e69f5e8b92da6d22a87c210db78dd254f8d6f92a82a4ba90c24cf2a08a8a7368ac360f47df3f3eaf7eb79ec47f8140cb968773fb62feda1dc51ea39f97f8f71595f8ecd73301ef9388dbf0090b84ec45e050000",
    ],
    [
      "ETag",
      "WK6IkdoizVxvHvzdhnsJmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:23 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd34b7282300000d0bb64ad4ea980d25d000916844a1c2d6c9800914fc5447e013bbd7b9d5ea3be3bbc6f40d294b66ddcb12f7a056f6022afda225d387cad5ba2e2db1585544d426b8b870b3142732959535688a0ec1b7b1d1b7de466d83365f37add14c5dda8893ebdcb39f27c45ce239f8d353918420b7576481a477cdacabe4b25d565a1cf3a0183286a5faac951572536773861f38b76b98ba4411ca224e833eab04eb9451fe3d229e1fc8cb92d413c7057472c1367cbaec2019b9b5cd6e128428ce7772665a769e79d8e29aad9a6363d15d2c1ca6e1572dc23418ba7a7ff0bcc001d79d9d0362e1fdb978aa6cdc05ffdb89b387dfcd7296968037e7e01e01dc4bc19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-71-1636475664267",
    },
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
      "536b4fa34014fd2b64f6ab7dd052689b346b5371c5b454816a369b0d19a6179c4a1964068d31fdef7b19acab31d14fcccc3de79e731fbc907b5e6cc994243c7ba8a17afeb113093921a06886af976b510dd3a7f35d3fb8becd1e86a577b9bbba9ecd10c11b96a4fb32878e1475c5404e376137ab445dd24a880e26ea3866c7b487b6e58c6cdb1ad80ef224e4e99217f7c8be53aa94d35eefa8ddcd84c872a025975d26f66fefbdc741afacc40e9892bd8f923d5491bdaf457fe68251c54531db8468a09650c5b0a73c470bff99dbe4f463ea2ea7fb6e86e047ce803226ea4235b630051345cab3bad259c9f485689bef0e247497ee223298c8eb7d1117740f27c6962a1aabe7128cf360bd323cff7c1dace691b7f6e37071e1aee6ddc57ab959f9a1717be106aea1689283e61a33e354df7cbca0fe16a4e285568f9ae746f9b541dee7b134049496d00663a76f5373dc9f2469e2b0743c1c25691f92649c38233a4cfa6c6281b54d80224f8b6a162d443130a9c360348947cc61b105cc8a27a9358e4d0cd84027137b34208713f2547105675c9642f2b643e436f022378e828dbf9847ae2e21a575aece5a634d01ef3d2a2c10415fd47468a25ca052d36ecf8fdc60be88bc1bb79df01232ca9ec3079c714a730988a615364f41b5125b6c18f1e72bf70cc17a6257c7a024d33f2fa4e979e3e25dcbdfe8110eb0b1abf4978451e0f9bfb49d23e286e6b5863cb60752a2e53bac0d5d1ffe221297b4cd42ae376ef09bb44f01a45041c1be9f268275e0db7fedb8f888c5d54719a9f08ebbc36423c22a687788eb725fd9cec032fbfa4f55b4529f6203d33c76adc9d164843d14eab5a276f1b1d056ac966f200ce2f87dddadc33f92febefd78040000",
    ],
    [
      "ETag",
      "JOor3fwFj0RQWgq3pIJjPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1636475664267"
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
      "00000002ff8d92514fc23010c7bfcbf93a12401866090f43869200221b4f8690b2ddc660dbcdb6d310c277f73a118d9ae8cb7a77fd5d7bff7f77847d5a44e0c0264d9e2b9487ab04f5a30916a8aa4c2b5e4a2a148205a845c2e4e4c155d3f6689afb7b3c94732fd1c3f9d6edf79950e1167301ce11e214b34881f3748442e4c86d2165555eacebcc027d284dd10f16e3d91de73945269f2d27137730f1e0645d1a23a1c5bae6ffd1b63a59b0a3cd026394588468662925ed30d463235389bcccb0a1a892212aa8e17a23915495421235b8d2e8b51a2dfbdaeef4bab6dd69db3d06330a854ea96076e9f37ca0498b6c41afac126c06641db2e0b8febe70398d6a21261ccf02bb53cff7159018928cd67f72258fbb15fc0a1fd8d981ef9cc8a92af4851af15bfd761c5bfa79d4d00dbc1f84d26cd40509c653cf0fdce9dc70abb3f4c141a39a4b621f151a0b5bcdce4db76737df5dbd25e334dfe36859a105a1e09fe33ed5e0c42253787a03e37ecf3c7a020000",
    ],
    [
      "ETag",
      "LOAsM2FMmSkeypPEgtDPhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:24 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-72-1636475664267",
    },
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
      "000002ffc5535d4fdb3014fd2b9627c426b5cd5a4aab55aa5806618d9636d0a62034a1c64d6e53431217db414288ffbe6b87f2213678dc536cdf73cf393ebeb9a7d7bc4ce9802e79765381bcfb742596b44141b30c4f8fd7d2f37e46b95b8c4e433e72d7e9c5d9d81d0e11c14d9762c52687a612954c400de6b3562645b5615288261235fb9d66bbb7d7ebf6f77bbd6ea7d7c73e05f92ae0e53576afb5dea881e36cb55b9910590e6cc3552b11c5d3b973db7136525c41a295f35ad24115e5bc2f7a908b84692ecae17c86062a05720105e3395a78ee4c97df5f53b7382b5a19826f79022c4944556a630b291251ae785649cb4a07f7d4da7cb1a0332ff00e237218ce27d1e79815a639fe4298228b850455e59a1c4fc3318937a8b5660a544cce47ded42324969008992e781a93213920eee48890203cf7a62f8802ff9787b5c01ffb1169a3a514560c598f9846326daca4f5d237efa44169043d86e8bf7d3afa60aa5c48ae8d7d7f127953f730f2cfbc3ab1003296dccd6e30b315cb15209a4956800639162960cb4938f3233f9cb80176d8184eb6084507bfef9f1ba2bb0d1883da7e8d56af6bf5b78033965716715b2f689b3e3c34fecd701c84ee871c3bedd67e7707892e1186635273d0d3b937bda0f5d1145620a14c6cdf3b5959b02d7c38eddbd1432c0e1fca288d7ba579a28c4822c196235ed87bd6ddfd4ef75be72bb560a9dfd6f6f6cc1f5aa67fad3c6a54961fa414726ae7cd6c514d592fbcc458f00f6ed002946299a199977813056c9903b1ef479ec224714c78494cdc248e2e4ebcc563e47183fc6029494565ba6cd4035227bdddedd6db5d63ccdaa9a7e1ff5ab9ac43325a47e1c4c3a9f8038622b6e809050000",
    ],
    [
      "ETag",
      "FhrEEGTlAmHQOiHAhdYVMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:24 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd34b7282300000d0bb64ad0c0a06d39da01104a10893123619c0a8a9e523a07c3abd7b9d5ea3be3bbc6f9064196f1ad696575e80373024732465925d2d75dc5d2ccc0c45ed8b3b65da9cda181dd2709a99fbc01d3c3f0fa08f3f87cda2118703bcddaf8f2e1a28f26c646ac7876edb675fe3be67942b199a584483688da421f5daa9118b765eeb6dcd7737d917cad699e65516a2dd31e2a731842ae18fb3e843654c2dd718ef318929f4acc6710348456ba5d67e46568ebd8e3b236741b62e665f2adb106dc41497186af0b4546f843b51f711a3ae2df3c5453eaf64a5935e5efe2f3001bcaf44cd1b269edb95054213f0579fb543c59fff759ed4bc063fbf3256063619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-73-1636475664267",
    },
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
      "fd2bc87b6d429a044823456b96d2952d211b9056db3421632ec42dc1149b565595ffbe8b69ba5695da276cdf73ee39f7834772c3cb944c49c2f3db06ea874fd72221470414cdf1d564615af8eadbf7ad4ae7d797db2f8efa9ddccf6688e02d4bd25d55404f8aa66620a79bb09fd7a2a9682d440f13f59c51efd81ed963c7b2edf1d0769027a1c896bcbc41f656a94a4e4df3a0ddcf85c80ba015977d2676cfefe6ddd0ac6a710d4c49f3b5a4892ad27c5ff4732118555c94b34d88061a09750c3bca0bb4f09f9926a7af53f739ddf57304df71069431d194aab585299828339e37b5ce4aa68f44db7c7120a1bb741791c144d1eccab8a43b383252aa68ac1e2a30ce83f5caf0fcf375b09a47deda8fc3c585bb9af717ebe566e587c6d5851bb886a249019a6bcc8c537df3f182fa2948c54bad1eb5cfadf25383bcb7636909282da10bc6cec0a6c793c14992250ecb26232bc906902493c4b1e82819b093318cd30428f2b4a866d1529448cc86c3811d8f2d9ac4634aadf8241d002664c3419639ccce18d91f91fb9a2b38e3b21292771d22578117b971146cfcc53c727509196d0a75d6196b0b78e9516181087aa7a67d1be50295da767b7ee406f345e45dbadd84979053f610dee28c335a484034adb1790aea9548b161c49fafdc3304eb89fd38042599fe79246dcf5b172f5afe4c8f7080ad5da5bf248c02cfffaaed1c1097b46834e4ae3b900a2d6fb13674bdff8b485cd22e0bf9b971835fa47b0a20831a4af6f13411ac031ffe6b87c5472cae3eca488577dc1d265b115643b7435c97fbc47686d6d0b18806d7ea4d6ce41c1fbad6e66833c20e4af55451b7f8586827d6c867100671fcbeeed6fe1f907eed2778040000",
    ],
    [
      "ETag",
      "/cSdlNtJKhtdAjVhB7tZbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92614fc2400c86ff4bfde8884c6098257c18884204441889d110726c0586db3aef6e2821fc777b13d1a8897eb9b5ddd3aeefbbdbc1539486e0c23c5a3ee728b7274bd4772618a1ca63adf89151aa102c402d964c9ee9b4a55f656c6fc7f6cde6f4815af779c76b349850c10a1301ee0e1611c6a102f77107a94890db028af3249d1599057a9b99e2d81f7507d79c27149a7c30e9f5bc66af0d7bebd8180a2d6605ff8fb6e9de8235cd47b84089698066974cd21a03dd35329548b2184b8a7219a082022e5e2c25e599904425ae94ea9592ed549c6abde638d573a7ce604c81d011a5cc4ec6bc1f68d2221ed10bab04870159842c78519c1b2e476121c484dd81ef548bfdbe02120392e1ec4f2ee3755782ffc2077670e03b2712ca537da4ae7ab7de6fe3d8d2cf51979edffe4128cd461d11bfdb6f8f7daf3f34dcf420bdb9d5a88692d84785c642bb5cbda8d59df2bbab2d324ef3775c2d73b420107c393a910677216285fb370d8357387a020000",
    ],
    [
      "ETag",
      "/tnCtxrl1yS1Kv+ZoCXuHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:25 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-74-1636475664267",
    },
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
      "fd",
      "2b",
      "96",
      "2704d3fab1b23615952ac6201bd94203690a43136adce436189238d80e8221fefbae1d0a434cec610f7b8aed7bce3dc7c73777f49297291dd105cfae6a90b76f2ec482b6286896e1e9cfefbdfa26089cfdc197f4e65dfdf59c9ff68647e33122b86129565439b495a865026a349b763229ea8a4921dad8a83decb77bce07a73f1c384e7fd319224f41bef4797989ec73ad2b35ea7657da9d4c882c075671d54944f178debddeec56525c40a255f7b964175554f775d1ed5c244c73518e675334502b90732818cfd1c213335d7c7cdebac359d1c9107ccd13604922ea521b5bd82211e59267b5b45de9e88e5a9bbf2de8d4f5dddd88ec06b349b411b3c290e3b78429329f4b5075aec9e730382071855ae74c818ac9c9be1bba84c4121221d3394f633226db6467b247881f9cb8e1468c676fc9248888ef7d73b1e67b075e447a68298525c3ae7b4c63336daca4cdd233efa44169043d84e8bd7c3a7a6faa5c48ae8d7d6f12b9e1ce6ee41dbb4d623e642cb99d5e61664b962b403493ac000df240a48094c360ea455e30d9f1916163385c21141dfdb87b2244b7151883da7e8d96d3b7fa2bc031cb6b8bb86e16b447efef5bffd461ad3758c3266708c21169f8f468e686a7b4390a610912cac4b25ec9c9826de1af93be1a3bc4e2e0a18cd2b8579a27ca8824126c39e285bd63c31e6e3aef875bd482a57e59db1a98bfb34cff5879d0a86d7f9052c8d0ce9ad9a29ab25e7889a1e0dfdba20528c532d36656e24d14b0450ec4be1d798c92c431e125315193383a3d74e736eeb8453eb1142bdae9139bf288989057eb75b359378eac8f6604fe9387b3261623b2174c5c9c835f333dfc05f7",
      "040000",
    ],
    [
      "ETag",
      "zX1uxOO6H5Gdx+uJhiY17Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:26 GMT",
      "Server",
      "ESF",
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
      "d34b7282300000d0bb642d4c2b104c778d562a0a8a10032b864ff80848f814814eef5ea7d7a8ef0eef1b0451c4baceefeb82ddc01b988225122371cf57787b4f65b81c330787268d27a322ad12bce0e54df657c7afb55b5ea55d32b357f87163a758abf54364a8bc2c242dd128242433c240ba28c93c575041307632dddd97b65a9e9b8142cfdc40db90ab64438a775b157acb43d4d369e3a9c2b12f0b7d5571ec3b70da56f72c86496a1db4a1d34d21b4eee6ee333747a80611495355c2923714a445246f36549f39929dab1b6906ebd05a385d2e5819427974a6b55d8b4f4fff17580036f2bc659d9f3fb64b0a420bf057dfef27ce1eff310b5ad6829f5f3c77036919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-75-1636475664267",
    },
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
      "535d4fdb3014fd2b91f7086d5ada26a55235aa12a0529b8e24054dd31439ce4d30a471b01db60af5bfefc6a10c84044fb17dcfb9e7dc8f3c93075ea66442129e3fd62077dfee45428e09689ae32bdc6df88c557297cbddd1657dfbb7387296d7d3292278c352745b15d051a2960cd46413767329ea8a4a213a98a8e38e3a7d67e00cdd91e30c4f1c17790a8a6cc9cb0764df695da9896d1fb4bbb9107901b4e2aacbc4f6f5dd7e3ab12b29ee816965bf97b45145d99f8b7e2f04a39a8b72ba09d140ad40c6b0a5bc400bff996972f63e7597d36d3747f0136740191375a91b5b98828932e3792d4d56327926c6e69b0309bda5378f2c268a7a5bc625ddc2b195524d63bdabc0ba08d62b6be15fac83d52c5aacfd389c5f79ab5977be5e6e567e68dd5e798167699a1460b8d6d43a33371f2fa89f82d2bc34ea51f3dc28bf3468f1712c0d01a515b4c1d8ed39b43fee9d2659e2b26c3c1825590f92649cb8233a487aec7408c334018a3c236a58b414258cfa7d3761e3b89766e378e8422fa6837e1a672ceb0dc72ccdfad421fb63f247720de75c5542f1b643e43658445e1c051b7f3e8b3c534246eb429fb7c69a02de7ad45820823ea969df44b940a5a6dd0b3ff282d93c5adc78ed84979053b60b1f71c6192d14209a4a6c9e06b91229368cf8b395778e6033b11f87a022935fcfa4e979e3e24dcb5fe9110eb0b1abcd978451b0f02f8d9d03e28616b5813cb50752a1e53bac0d5def7f231297b4cd42ae375ef093b44f016420a1645f4f13c126f0e5bf76587cc4e2eaa38cd278c7dd61aa116112da1de2a6dc17b67be20c476362c0527f888ddcc1a16b4d8e26236ca1d42f15b58b8f85b662b57a056110c7ef9b6eedff0100a8ded578040000",
    ],
    [
      "ETag",
      "ehUiAcprygry+GuWxl+6LQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1636475664267"
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
      "000002ff8d92514fc2400cc7bf4b7d1d09286c66890f20a80b3071cc170d21c756c6705bc7dd4d8384ef6e6f221a35d1975bdbfddaf5ffdfede0292d62706191269b0ae5f624417d678200559569c58f920a8560016a913029e387cdeb60e217433f3c1bae7a7dcf9904c9c505132a5a612ec0ddc132c52c56e03eeea01039725b44599517f33ab3406f4b539c8681e75f739e536c72ff7e34eaf64603d85bc7c6586831aff97fb4cdf616ac6911e0122516119a5d4a496b8cb467642a919719361455324205355cbf482455a590440dae349c4ea3659fd96da763dbed53db6130a348e8940a66efa7bc1f68d2220be8855582cd80ac4316bcaccf672ea7712dc4849e1fdaed7abfaf80c488643cff932b79dd95e0bff0811d1cf8ce899caa421fa9abd16df7b7716ce9e7a87e371cfc209466a38e48e88d07d3b03b9e186e7690dedb6a541349eca3426361abd93eef3876f3ddd54b324ef3775c2d2bb420127c396e520dee52640af76f8d9021b57a020000",
    ],
    [
      "ETag",
      "rdZqzEPNnKNT3KhBDI7PRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:27 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-76-1636475664267",
    },
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
      "6d4fa34010fe2b642f265e620b95164a93c66b2a77470e5ba554632e977681a1ae521677975e1ad3ff7e03d8aa31a79f58769e9799d99927f2c0f2840c48c4568f2588ed977b1e9113028aaef0f636f22fc34cbfa269c137776abcf5b253fd6a384404ab5892ae8b0c5a929722063998cfda2bc1cb820ace5b28d4b2ad56c732adaeddb3aceea965234f4296fa2c7f40f69d52851ce8fadebbbde27c95012d986cc77c7db8d737a77a21f83dc44aea6f2d757491fac7a667198fa9623c1fce67984029412c604d598629bc3093e8db5be936a3ebf60ac11b16038d635ee6aa4a0b25629ea76c558a5a950c9e489de6ab0399b9be3b0eb5f1743e098f97745d91975f352ab5c542802c33a57d0fa617dab240af3b2a412eb59b9f6ee06ada5240cc45b260c9521b6a67da6872ae69fef4c60d8e0f68949a4c43cdf77eb988f0bd0b2fd43a98580252b1bc4e2ba45106554acf9df3debf5745a00ae59ae0c2362cdae91b4e9446769cf6cd5e941a1045fdc8ee51333262a70bdd24028a3c55a9d72c9af3dc700cd3494cd3761cc73668bf4f53cb70c0483b91038e69994081f6124a7627e4af600ace992cb8644dfbc84de085ee220ce693f12874eb32528a2d3a6f92ab8a789da7c22211f4415dbb2aca383a556fe14d4237188d43efda6d9edf87158db7b3471c80946612104d055d830271c1136c1ab99ccebcd09b4e463e32ea37bddc232419fc7e7a2184dba2eeb2aabf9597d5adfdf7806b9a953562d31c4887ec7627ff5798858137f9f1b1c41117343f429d3f08c3916f24c8d5dc0d6e497315400a02f2f8f31140701df87473f76b84585c24b4910aff71e0625999c4029ac163ebbacc866d9fdaa6d9253558a877b16ead7c589f4a11d690abe78a9a35aa1a56874a79006110e76552b76af70f94158afcc6040000",
    ],
    [
      "ETag",
      "YbLPTl/QafpovhtCyIl2/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1636475664267"
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
      "c2",
      "30",
      "0c85ff8b776d25d8a068481c60aab64a888d6e3d208450484d17d6d65d9c6e20d4ff3ea7ec123b2f5ffc9e7c852f53e730858329be5bb497bb02ddda3729725b3a96d250cd0801a05385909bd7052767361bd6991d9466fcb83e9bf96c2604eb4fac144caf703458e60cd3ed156a55a17cdbef6d3f51307769bc92ac3ee2e73815a1a2dc0bab6cb99c2f963174bb2e80131d523ca2c55aa31fd9583aa176894fcbaa6a4a0c995aab91a187fb87c252db284b148a124ea270183d44a3c9388a46f7d144c092b472866a61b377101b474e9529fd4a58180a60fb56721ffbf347e4910fb4fb47171787fc66497c19bde5e066ff443e9293a8ceb6188056b28c17e36ef7ee0f1549ff8069010000",
    ],
    [
      "ETag",
      "YOBsIxsiYscUr0li59QxiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:27 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb646d1d946fba841201116146d466c3f08985048521fc42a777afd36bd47787f70dd23c279c277dc3c803bc03916ee13a5fef5bc3441345c43d3514079bdaac25a5bb271966689f69d0bc58a2c6eacef5ef7d5018372e7d1e8571624a64876a880f475a314743d2dbd05e200ec5e146932a18cb29cbcf5b1eb1b1f047ca7696d52d7888c2d9c7b103bfe67690fd6a734f19533f7c270b0c186b577b62815c0b5a205644aca6ae879a9b52dac6191a936823cf56a6c58b071d2e9b6b5784ca3183c52c6d47ac87b86c787f7e98f52e7aa43a62eb9797ff0bac0099dbaa233ca99edb6515c215f8ab9ff4a225cfff26493bd2819f5ffc4ff82219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-77-1636475664267",
    },
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
      "db3014fd2b91f738da94364dda4ad5a84ad82ab529a429304d53e43837c190c621769818ea7fdfb5431908099e62fb9e73cfb91f792277bc4cc984243cbf6fa07efc722b12724440d11c5f83af67974d792e83eb6b8f7ad54563afff5617d32922b86649baab0ae848d1d40ce464bbe9e6b5682a5a0bd1c1441dcfeb1cbb03d7f186aeebf45d0f79128a6cc9cb3b64df2855c9896d1fb4bbb9107901b4e2b2cbc4eee5dd7ee8db552d6e812969bf95b45145da1f8b7e2b04a38a8b72badda08146421dc38ef2022dfc67a6c9c9dbd45d4e77dd1cc10f9c01654c34a5d2b630051365c6f3a63659c9e489189baf0e64e32ffd7964315134bb322ee90e8eac942a1aabc70aacb370bdb216c1d93a5ccda2c53a8837f31ffe6ad69daf97db55b0b1ae7ef8a16f299a1460b8d6d43a31b7002fa89f8254bc34ea917ed6cacf0d5abc1f8b26a0b48436187b3d971e8f7ae3244b3c968d06c324eb41928c126f4807498f8d1d70d20428f28ca861d152940e8c9de391338c879e97c44ed677e36430f2623a48598209d2fe7840f647e44fcd159c725909c9db0e91ab7011f971146e83f92cf24d09196d0a75da1ad305bcf6a8b040047d50d35e47b94025ddee4510f9e16c1e2d2efd76c24bc8297bdcdce38c335a484034adb1790aea954841aff66ce59f22d84cecfc109464f2eb89e89e6b17af5afe428f7080daae325fb289c245f0ddd839202e69d118c8437b20155abec1dad0f5fe37227149db2ce462eb873f49fb1442063594ecf36922d8043efdd70e8b8f585c7d94910aefb83b4c6a115643bb43dc94fbccf6faa35e6f400cb856ef6323f7d0359d4367841d94eab9a276f1b1d056ac912f200ce2f803d3adfd3f5db9b8fe78040000",
    ],
    [
      "ETag",
      "N+FVunPsNXX7a7pQu/OzpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1636475664267"
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
      "c2",
      "40",
      "0c",
      "86",
      "ff",
      "4bfd3a22e8b899257c188aba04106144a331e4dc0a4eb775dedd2084f0dfed4d44a326fae5d6764fbbbeef6e032f6991800f8fe9e2b542b53e58a0b9b6c118759519cd8f920a8de0001ab960b24de2f0e6d4bd5eb59ae1727a1b157783d571d0e930a1e327cc25f81b98a798251afcfb0d1432476e8b29abf26256670e9875698b93681c0e2f38cf29b1f970daef07dd7e0fb6cebe319146ce6afe1f6d0f5b079ee9718c735458c4687729153d636c422b53cbbcccb0a1a952316aa8e1fac54251554a45d4e04ac3f31a2d712c5caf2d847b243c06338aa549a960763ae1fdc09091d99856ac120403aa0e59f0bc3e975c4e935a880dc36124dc7abfaf80c2985432fb932b79dd27c97fe103db39f09d93395585d953e7fdabe0b7716ce9e7a8b320eafd20b461a3f648140e7a9328188c2cf7b093de5d1bd42345eca3466b61abe99eb43dd17c77f594acd3fc1ddfa80a1d88255f8ecbd4803f9799c6ed1b209d6b9d7a020000",
    ],
    [
      "ETag",
      "5o6/WC4Qw10IvUXTnZMw3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:28 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-78-1636475664267",
    },
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
      "537b4fdb3010ff2a91272426d136256d1e9510e391b1682565690a9aa6a9759c4b30a471b01d3684fadd7749780a0dfe8ae3fb3deece77f7e49a9729999084e73735c8bb4f5722213b0434cdf1d61fb0bf151b9fc4ee30be0d757c78b828c6f9de1e2278c352745d15d053a2960cd46431efe752d4159542f450a8e7b8bda16dd923676cdba35ddb419e82229bf2f21ad9975a576a32183c7af77321f20268c5559f89f5d3fde07677504971054cabc16bcb01baa8c1fba6fb8560547351ee2de69840ad402e614d7981293c33d3e4cb6be93ea7eb7e8ee05bce803226ea523769a1041365c6f35ab6aa64724fda345f1cc8dc9ffa47b171345b84f1f68aae1bf2eab34195b15c4a5075a18dafd1ecd45855e8754915a89571f1cd8f7cc358496042a64b9eae8c3d63df38088f0d633abbf0a3ed27344a85b3d89806df7d444c83d320368698580a4af3b24d2ba649014d4a0f9d0bdebe5743a01ae5bae0d2316d3a744d2fc9128765ae354e321392c44d9c31b51293792318a50950e4e946bd65d15294a6675a5e6a598ee7798e495d9766b6e981990d130f3ccbb680021da7946c76c81fc9351c735509c5bbf6918b2888fd651c2dc2a383d86fcbc828b6e8b84bae29e2659e1a8b44d03b756d9a2817e8d4bc4510c67e74701407e77ef7fc53c829bb9bdfe00064b45080682ae91a34c8539162d3c8d96c1ec4c12c3c9822a37dd3b3478422935ff7cf84f8ae6abbacdb6fe3658f5aff47c0392dea1671db1dc8906c363bff5798c751109ebc2fb125242db750e737c270e43b09f263e1473f4977154106124af6f10820b80d7cb8b98f6b84585c24b4511aff71e0986a4c98846ef0f8ba2db3633bbbaebb6b91162cf59b98d72a3fad4fa3086b28f54345dd1a350d6b43b57a026110e7256c5bb5f90723e6c125c6040000",
    ],
    [
      "ETag",
      "E/cxpc5GT81TvNtTBBUl5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1636475664267"
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
      "401085ffcb788568158190f4600d2a0d692cb5979aa6d9c2802030b8bbd410c27f77967ad9997dfbedbc9719e1bb6c3308e05c163f3dcae1a640bd354d82aaafb5e2d251ab102c402d0a2677223ad05aadf3db0bf9fef650b551f8b25d2e9950e91736028211f212eb4c41f039422b1ae46fa7939c2732a687ce28d1e6237c0d13161aca8cb0d9c7f1d32a0e613a4e1654744e3047896d8a666427a9c2544726ad124d57a3ada897292a98e1f9a190d4774212d9acd89e6f2fdc07d7f11e5dd7b9773d066b4a852ea96576bf03b6d1a4459dd02f87850503726e39773e9f17961d13e8f88fae068dea5d12fb2a34967757fb6732913447d5b2470b52c1cb782bf5f53efd012c8224ee69010000",
    ],
    [
      "ETag",
      "SaIZoJsJf/vo88QZjnIEFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:29 GMT",
      "Server",
      "ESF",
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
      "d0",
      "bb",
      "64",
      "2d4e4554d25d298d6154a44447ca26c327c4df400209bf4eef5ea7d7a8ef0eef1b2459c69a86aaeac64af00a86c484d36cba11b683baf3b1353e66ea7de78d4eadb7add623dd46b4be0aeb8b068ee4322f2c928f7eee06959b26bb76bd5ea2988a9ec6e8def46bbb0bc939a361b41a02b5f125bc9281472779a88d25419e557283e0612c67da7cf36ff78abc1ce75e5cbaa468b00ef3d3010f7eb7c5e691d805eee4a2c25697869b3691469a21c955abe7e8a4caaae09fc26c04ec1d1399d755c8fd347647c5f61eab520e71bf8ad25ec3fdf4e9e9ff0213c07a71a959432f8fedf3058413f0579faa41b0c77f872535abc1cf2f6cf0307619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-79-1636475664267",
    },
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
      "4014fd2b64f6ab7dd24269d2ac4d456db6d095525db3d99061b8e028659019ba31a6ff7d2f83753526fa8999b9e7dc73ee8367f2c08b844c49ccb3c71aaaa76ff72226270414cdf0750ed5f076ef5cfcf89554a11b33e1ad9477359b2182372c4977650e1d29ea8a819c6e37ddac1275492b213a98a8633b9d81655a237b6c59a3a165234f429eae78f180ec3ba54a39edf58edadd4c882c075a72d96562f7fadedb0f7b6525ee8129d97b2fd94315d9fb5cf47b2e18555c14b3ed060dd412aa087694e768e13f33894fdfa7ee72baeb6608de730694315117aab185299828529ed595ce4aa6cf44db7c73201b77e52e428389bcde1551417770622454d1483d95609c076bcf58fae7ebc09b87cbb51f6d1697ae37ef2ed6abade76f8c9b4b37700d45e31c34d79819a7fae6e305f513908a175a3d6c9e1be597062d3f8ea521a0b4843618d97d8b0e267d274e639ba513731ca77d88e3496c8fa919f7993382511203459e16d52c5a88221950b0cc34891233b6a3513236a3786043341839e6c49ad0c4190cc9e184fcadb882332e4b2179db2172132c43370a83adbf9887ae2e21a575aece5a634d016f3d2a2c10419fd47468a25ca052d3eea51fbac17c112eafdd76c22bc8287bda3ce28c539a4b4034adb0790a2a4f24d830e2cf3df70cc17a623f8f4149a6bf9f49d3f3c6c59b96bfd2431c606357e92fd984c1d2bfd0768e886b9ad71ab26f0fa444cb77581bba3efc41242e699b855c6ddde096b44f01a45041c1be9e268275e0cb7fedb8f888c5d54719a9f08ebbc36423c22a687788eb725fd8f6d0193b13a2c195fa10b347e6b16b4d8e2623eca0502f15b58b8f85b662b57c056110c7efeb6e1dfe01768f771678040000",
    ],
    [
      "ETag",
      "Aer2Yv9GKXdrTEbcoMLtMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1636475664267"
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
      "4f",
      "c2",
      "50",
      "0c",
      "86",
      "ff",
      "4b",
      "bd1d09080c5dc205202a095fc2881a43c8612b63b0adf37c6808e1bfdb33118d9ae8cd59db3dedfabe3b7bd8c659081e2ce3e8d9a0dc9d45a8ef6c30416512adf89153a6101c402d22263bd1d2bf1f9aed72943d741e775551894d1c359b4ca8608da9006f0fab18935081f7b4874ca4c86d012526cd1645e680dee5b638f527bde10de72985361fcefafd56bbdf8583736a0c85168b82ff47dbfce0c08696135ca1c42c40bb4b2e698381ee59994aa4798225454606a8a0808b179124930b4954e24aa97159aab855b7d6a8bb6eeddc6d30985020744c19b3b329ef079ab44826f4ca2ac1654016210b5e15e70b97e3b01062c3ded0776bc57e5f018901c970f12797f3ba6bc17fe1033b3af09d1329994c9fa8ebfea8f5db38b6f473d455cbeffe209466a34e88df1b74a77e6b30b6dcfc28bdbdd3a8c692d84785d6c24ab976516fb8e577573b649de6ef785a1a7420107c396e630dde4a240a0f6fa07386397a020000",
    ],
    [
      "ETag",
      "CgbTWNukbOnXCYy3a1iuig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:30 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-80-1636475664267",
    },
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
      "4fdb3014fd2b56f602126d5a6029ea54b1ae645bb4924292d221845ad7b90d86240eb6c35421fefbae9d760cb1b1e73dc5f63d1fd7d7278fce1d2f53a7ef2c79765f835cbfbb154b67cf014d33734addfcbb5714ebd96876b4d6b7977e67a97f0c0688e086a56851e5d052a2960c547f1ab73329ea8a4a215a28d43aeab4bade8177d87bef7987fb5e0f790af2d5989777c8bed1ba527dd7dd7ab73321b21c68c5559b89e2d7b9fbb0ef5652dc02d3ca7d69e9a28b72df363dce05a39a8b72308db1815a819c4341798e2d3c33d3e5c797d26d4e8b7686e007ce803226ea529bb650828972c5b35a5a55a7ffe8d8367f5b38b13ff64709194da661b2b3a085212f760955643e97a0ea5c93cfd1e4942c2af4baa10ad482ccbefa914fc8420213329df3744106e4980cc31342c693991fed2c52aa0165c24942c6c1371fabe3e0344848179b4a614551f7846a94d3a699b45906e6a534288da0cd1883d78fe73c992a17926b7381204cfc68384a820bbf99d91832cad6f13d4e6d45730588a69216a0419e8a149072368983249884c33132ec20ceb608e5f4af1e9f09c9ba02d3a0b65fe3e51d5aff2de082e6b5453c340ba7eb3c3dedfd5de16498f888b8460d4c405374cea77e74e9344711ac4042c92ce98d2158b02dfc33c8db5421167385364ae35e69ce943161126c39e185bd40c3ee1d74de773a8e054bfdbad6f3cccf57a67fac6c3c6aab0f520a19d928992dba29db0b2f71663c3db7417cd1e5fde6a800a56866e443410aaad90d2f33a27856a2b604b21292acea92195a133c7b44655617506a6266aefac4ccbc4de2baaa84d4903e0b60ad896b9c4441f865f7c366fbe932f163fc0734b9eaf68fbad7e63ef6164d3afecb1b5c374f623338094d067f02ad30de1c52050000",
    ],
    [
      "ETag",
      "ba/lX6mmyWCW8ytjYE0btw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:30 GMT",
      "Server",
      "ESF",
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
      "cb",
      "72",
      "82",
      "30",
      "0040d17fc9da7102f2a8dd4114ac052a902275c38418e461407919ecf4dfebf437ead9dfe5fd068452d67549df54ac06af6022f2724ee72934e211deb11750dd68498edfeb7a1fa68d3439f6072ecacc825ceb1d6d700e2942569695beecd477f518f2559adf1e99e2918c476bc9735771d8a140f3f4c4d9be0da77d10e0f02cfba1892a5386ed75ddbb1b6ba165fa3651cf611a087ab3853244d9d029962b286d4e96e0a6e09ced5f3c5f65ae300e6e80bf22ab902be513c9a359dd220447d4e76eb9b14b292949abed7c0831378f142a2cbf22da10633bc5232ece3b51cd9f9efe1d30034c5c8a967549f1b87da12e9733f0b77ed24f17f6f8df64a4652df8f90539b596f019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-81-1636475664267",
    },
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
      "2bc8fb9826902749a46865095d2305d211926a9a26641b43dd02a6d8b4aaaafcf75d4cd3b59bd47ec2f63de79e731f3ca33b5ec4688e084fef6b563d7db915049d21a6700aafd5ed37af8e9dc743a7d3b9280ee674d549ef9cc50210bc61499c9719eb4a515794c9f97ed74b2b5197b812a20b89bad37eb73f194e46f67832190d2636f024cb920d2fee807da35429e7a679d2eea542a419c325973d2af2d777f361609695b8655449f3bda4092ad2fc58f46b2628565c148bfd0e0cd4925511cb31cfc0c25f664ccedfa7ee719cf752003f70ca30a5a22e54630b525051243cad2b9d15cd9f91b6f9e68076eec65d860615599d175181737666c458e1483d95ccb808b69eb1f62fb681e784ebad1fed9697aee7f496dbcddef377c6f5a51bb886c224639a6b2c8c737df3e102fa31938a175a3d6c9e1be59706adff1f4b430069c9da60645b13dc9f5a3392109b26d3e198241623644aec311e128bce466c14138681a745350b17a2e813328ee9308ec6d0dd68341924d18cd8c36864612b9ed9437b3618a0e3197aacb8622b2e4b2179db21741dac43370a83bdbf7442579790e03a53abd65853c05b8f0a0a04d007351d9b2817a0d4b47bed876ee02cc3f5c16d27bc6129a64fbb7b98718233c9008d2b689e629527626818f21dcf5d01584fecea149468feeb19353d6f5cbc69f92b3d8401367695fea25d18acfdefdace0971c059ad210fed019560f9066a03d7c7df8084256db3a01f7b37f889daa78025ac6205fd7c9a00d6814fffb5d3e20316561f64a4823bec0e958d08ad58bb435c97fbc2b687d6cc1e230daed4bfb1be359d9ebad6e46832b29c15eaa5a276f1a1d056ac96af2008c2f87dddade31fb82d01a478040000",
    ],
    [
      "ETag",
      "rjBMudAwV+++FnV/8D+gkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1636475664267"
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
      "8d92514fc2400cc7bf4b7d1d09280cb3c48781a88b0315467c30869c5b3707db75dedd5442f8eef626a251137db9b5ddaf5dffffdd0656b94cc083873c7baa51ad0f3234373698a2ae0ba3f95191d4080ea0111993435fd23abc7d9dccdbabcbf454cbc3deb8ba39396142c78f580af03690e658241abcbb0d485122b7c554d4a55c349903665dd9e22c9a069373ce4b4a6c3e9987a13f0847b075f68d893062d1f0ff68bbdf3ab0a48729a6a850c66877a9142d31368195a9455915d8d254ab18353470f3225354574211b5b8d23aeeb43aee91dbedf75cb77be8f6192c28162627c9ec7cc6fb8121238a29bdb04a7019504dc882d3e67ce6729e34426c184c22b7dbecf7155018934a167f7215affb28f82f7c603b07be73a2a45a9a3d75165ef9bf8d634b3f479dfad1e807a10d1bb547a2603c9a45fef8da72f73be983b5417dad887dd4682decb4bbc7bdbedb7e777548d669fe8e67548d0ec4822fc7456ec04b45a171fb0687af5fee7a020000",
    ],
    [
      "ETag",
      "CAnoyLWxNU0kKfDsn25MpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:31 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-82-1636475664267",
    },
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
      "d5535f4fdb3010ff2a56f602126dd5525adaa9621d645bb4342d490a9b106a8d730d86240eb6c3d421befbce4e0b436cec794f717cbf7f3e9f1f9c5b5e24ced0b9e2e95d0572fdee465c397b0e689ae2aeef97b3db836f3f3aeb9f83c920bf117db6df4d47234470c352342f3368285149066a388f9aa9145549a5100d146a1c761aedde7eafdb3fe8f5ba9d5e1f790ab295cf8b5b645f6b5daa61abb5f56ea642a419d092ab2613f9d37eebbed32aa5b801a655eba5650b5d54eb6dd3a34c30aab92846f30803540ae40272ca338cf0cc4cae3ebc946e729a375304df730694315115dac44209268a154f2b69559de1836363feb67022d7778f63723c9d07f1ce92e686bcdc255491c54282aa324d3e85d3095996e8754d15a82539ffe2862e214b094cc864c19325199123320e4e08f1a7e76eb8b3541a23a24e308d89ef7d75b1ec7b132f266d4c95c08aa2f009d5a8a74d9aa45e7ae6aa34288da04d1fbdd7b7e73c9a2a17926b73022f88dd707c1c7b676edd341f52cad6d11db66d45330588a692e6a0414e440248994d232ff6a6c1d84786edc46c8b50cef0e2e19910af4b3001b5fd1aaf5ed7fa6f016734ab2ce2be5e386de7f171efef0ab13771a3783c9921ec1285700e6a84733a77c3ef4ebd15c20a2414cc32dfe88405dbc23fc7793b5b88c5e9421bbc22cd95e64c191326c196639edb53d4ecfe7ebb7f30702c58ea57b541af639e6091fcb1b2f1a8ac3e4829646807cafca29bb25978818de3c9a91dc71729ef365b39284553231f089253cdae799112c5d302b525909590645515ccd0eaf1b35b54a6550e8526a6f16a489e1adf24515596426a489e5510504f6e14875ef079f7fde6f7e3f7d88df0396872d11e1eb62fcda1ec51ea39f97f8f71595f8ec973320d5c9cc65f8438dfe562050000",
    ],
    [
      "ETag",
      "LLpPk5Xw2yz9M9mjo7c34g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:32 GMT",
      "Server",
      "ESF",
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
      "ffedd3597282300000d0bbe45b196513fa470065530b366c3f0c4258641a62c041717af73abd467d77784f9017051e866cec3b4cc00778e4bcca159c4b15b89d2e68c91a56783c85a4244e2bf9ed54c8c4bb86a67e1d1294d95877afd1092d1bd13ae811f9b2aa4d3fa9fe6567ace5b3711ea42420475cadd2c16c3a3b0e0ead20a250a2fd3e3bee95c37872e3d641f56395f715d4e35e0e3fad1b144349e4ef30f7d92d62e57713a1dc543c6546589bc349a65a7f19d7e5b94c2aaa5ab56c7569a0870291f9cab503d18591b1d1eafb26d0a82d6c7769e3275b9588c5ecacb9b7b7ff0b2c00bed396e1216b5fdb05495517e0af7e363e287efd87386798819f5f0a1443a119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-83-1636475664267",
    },
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
      "0000000002ff85536b4fdb3014fd2b91f771f49d2669a56a54258c4a6d3ad214344d53643b37c190c621764008f5bfefc6a10c84049f62fb9e73cfb98f3c933b5124644a98c8ee6ba89ebedd4a464e08689ae1ebda7632b8da7cb76f534e5d6f52147ae15dce6688100d4bd17d994347c9bae2a0a6bb6d37ab645dd24aca0e26ea78a3cec01939b63b761c7be8b8c85390a72b51dc21fb46eb524d7bbda376379332cb81964275b9dcbfbef71e86bdb292b7c0b5eabd97eca18aea7d2efa23979c6a218bd96e8b066a05550c7b2a72b4f09f99b0d3f7a9bb82eebb19821f0407cab9ac0bddd8c2145c16a9c8eaca6425d367626cbe3990adbff21791c5655eef8bb8a07b38b112aa69ac9f4ab0cec3cdda5a06e79b703d8f969b20de2e2efcf5bcbbd8ac76eb606b5d5ff8a16f69ca72305c6b669d9a5b8017d44f40695118f5a8796e945f1ab4fc38968680d20ada60ecf61d3af0fa13963297a7de68ccd23e30e631774c47accf2736d809038a3c236a58b4908567270ee36c100f98cb62db71d2d8e3a3713c6109b3bdc900bf237238218f95d07026542995683b44aec365e4c751b80b16f3c83725a4b4cef5596bac29e0ad478d0522e8939a0e4d5448546adabd0c223f9c2fa2e595df4e780519e54fdb7b9c714a730588a615364f43b59609368c04f3b57f866033b15fc7a022d33fcfa4e979e3e24dcb5fe9110eb0b1abcd976ca37019fc34768e882b9ad706f2d01e4889966fb036747df88b485cd2360bb9dcf9e16fd23e8590420505ff7a9a0836812fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca7d61bba3a16d3bc4802bfd21361ef68f5d6b723419610f857ea9a85d7c2cb415abd52b088338fec074ebf00fff40849978040000",
    ],
    [
      "ETag",
      "M46geVO+4jfca789nntC8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92614f83400c86ff4bfd0ac974c826c93ea04eb7383705969818b3dca0301428de1deab2ecbfdb439d464df4cbd196a7a5efcb6de021af12f06099678f0dcaf55e86fada0401aaa6d08a1f35550ac102d42263f262e407fd298a97233d736699bfea746fc2e7c1800915afb014e06d20cdb1481478b71ba84489dc1653d194d5a2cd2cd0ebda14c328184fcf392f2931f9743e99f8c793216cad5d6322b458b4fc3fdaeeb616dcd332c0142556319a5d6a49f718ebb191a9445917682b6a648c0a5ab87d91496a6a21896caed8fdaebdef765da777e8bace81db63b0a058e89c2a66e721ef079ab428027a6695e03220db9005a7edf9c4e53c698598703c8d5ca7ddef2b203126992cfee46a5e7725f82f7c60ef0e7ce744494da577d4d964e6ff368e2dfd1c75ea47c31f84d26cd40e89c697c330f22faf0c77f72efd78ad515d49621f151a0bf73b4effb0e776de5c3d21e3347fc7d3b2410b62c19763946bf0525128dcbe02a07546d27a020000",
    ],
    [
      "ETag",
      "KHAR8Neax9tO4OgAh03XSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:33 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-84-1636475664267",
    },
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
      "6d",
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "9627c426b5cd0aa59d2a55acd0a0454b1b6853189a50e326d7609ac4c1769000f1df7776282f62838ffb14db77cf8b1f5feee99a1709edd3254faf2b90b79faec49236286896e2a9cbd6e538bebbf37f6507e7ed9173ba567971321860073728c5f23283a612958c41f5e7b3562a455532294413899adf3acd7677b7dbe9ed75bb9d9d6e0f710ab295cf8b35a22fb52e55df7136daad548834035672d58a45fe74eedcec38a51457106be5bc9674504539ef8bee6722669a8b62309fa1814a815c40ce7886169e91c9f2fb6bea1667792bc5e61b1e038b635115dad8428a58142b9e56d2b2d2fe3db5365f2ce8ccf5ddc3901c06f349f83962b901475f085364b190a0aa4c93a369302651895a974c818ac8d90f77ea12124988854c163c89c880ec93e16444881f9cb9d31744932024bef7d3c5baef8dbd90b4d156022b86cc23a691501b3b49bdf4cc5b69501a9b1e83f4de3e1f7d30552e24d7e60ade2474a7c3c3d03b75ebd47c48597c3bbbc6dc562c5380dd4cb21c34c8b1480021c7c1cc0bbd6032f41161a338de7428daff7dff0c086f4b3006b5fd1aad6ec7ea6f1a4e5956d98e9b7a41dbf4e1a1f16f86233f187ec8b1d56eed75b690e802db70546a0e7a3277a7e7b43e9ac20a2414b1c5bd93956db6850f277e337ed88b0388324ae35e691e2b23124bb0e590e7f69e35bab7bbdbeed9ff4533a9dfd476beee99bfb448fe5a79d4a82c3f4829e4d4ce9cd9a29ab25e7881b1e05fdca03928c55243332ff0260ad8320362df8f3c8549a288f08298b849149e1fbb8bc7c8a3063960094944655036ea3ea993deecb6ebedb63166edd4d3f07fad5cd42119ad513071712afe0063a83f040d050000",
    ],
    [
      "ETag",
      "EakpMczzLXlBY1D/VksmnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:33 GMT",
      "Server",
      "ESF",
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
      "0002ffedd34b7282300000d0bb642d4ef9684977a02005c4aa20b0ca448c18b112122482d3bbd7e935eabbc37b005c144408d4d615b9820fd0630d8e8b71c04cdb95677f685231e889f83ce9c9718357dab2dff5dc87d3f3009585c7f6f58caa057654b789fa0e4d298783ec6cae593cf3ec469465f4ae9952de9641d92507668515da8b86ba79665dba8b8230f456f96161f8d6b5c99666bb766d2cf32a52e78a9e7e239f38b72a9dc3c18b68b033e8f114ad94c95686ae4921a3fa046f2eeb7519ee12635be74adcd130ecc3b72a56ebfb80d85746e2d951b65c73daad11f07cfcf2f27f81112077463911883eb7eb130847e0af3e6a7b469eff6d8239e1e0e7174af8fb8419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-85-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda24343c13295aa394ae4809d90869354d13b21d43dd02a6d8a48aaafcf75d4cd3b5aad47ec2f63de79e731f3ca3075eedd014119e3fb6ac397cbb17049d21a6700eaf7362dd14c20e0fabfbaa0c89d33c8e17cba7d90c10bc63495cd6051b48d13694c9e97633cc1bd1d6b81162008906be3338772dd7f61cd7b5c7ae073cc98a6cc9ab0760df2955cbe96874d21ee642e405c33597432acad7f7d17e3caa1b71cfa892a3f792235091a3cf45bf178262c54535db6ec0402b5993b212f3022cfc67eec8c5fbd4438ecb610ee03da70c532ada4a75b620051555c6f3b6d159d1f419699b6f0e68132c8345625051b4659556b86467c60e2b9caa43cd8cab78bd32c2e86a1dafe649b88ed2cde23a58cd878bf572bb8a36c6ed75100786c2a4609a6bcc8c0b7d8be002fa3b2615afb47ad23d77ca2f0d0a3f8ea52380b4647d30f54c179ffbe68464c4a3996f39243319213ef11c6c11934e6c66ef08c3c0d3a29a852ba839f3ccb1e3dbe96462d9a9ed987eea53d34d3366fa269978e7d4b5d0f10c3d355cb14b2e6b2179df21741b87499026f1365acc93409790e1b65097bdb1ae80b71e151408a04f6a3a76512e40a96b771825413c5f24e14dd04f78c9724c0f9b479871860bc9008d1b689e62cd4aeca061289aaf824b00eb89fd3c05259afe79465dcf3b176f5afe4a4f60809d5da5bf6893c461f443db39216e70d16ac8be3fa01a2cdf416de0faf81790b0a47d16f46b1bc4bf51ff14b38c35aca25f4f13c03af0e5bf765a7cc0c2ea838c547087dda1b213a10deb7788eb725fd89e653913176970a33ec43ccb3d75adcbd1656425abd44b45fde243a1bd582b5f411084f147ba5bc77f1cd06a7878040000",
    ],
    [
      "ETag",
      "Ab3Vlo4IyMjnmIb5rq2CLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1636475664267"
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
      "4fc2400cc7bf4b7ddd12d46d98253e4c052401c4315e34869cb782c36d1d77379010bebbbda968d4445f6e6df76bd7ff7fb783e7ac4c2184c76cb1aa516d8f16686e6d10a3ae73a3f95151a9111c4023164c6e5e9ed7adde3ac7eeddd22f566319b546dee6fc9c092d9fb01010ee609e619e6a08ef77508a02b94d525e17e5acc91c30dbca162749dc1ff5382f28b5f9683a184417830eec9d43632a8c9835fc3fda1ef60e2ce931c6392a2c25da5d2a454b94a66f656a515439ba9a6a25514303372f168aea4a2822972bee99ef1e07a781d7f683c03b09da0ce62485c9a864763ae1fdc09011794c1b56090103aa0959f0bc39d75cced246880dfba324f09afdbe020a25a974f62757f1ba4f82ffc207f6eec0774e145497e640750737d16fe3d8d2cf515751d2f94168c3461d90a43fec4c926838b6dcc3bbf48bad413d56c43e6ab4161eb7bc33bf1db4de5cbd24eb347f2734aa4607a4e0cb719d1908e722d7b87f05d01267377a020000",
    ],
    [
      "ETag",
      "wxkv0GvleFZj5mqPcA0N4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:34 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-86-1636475664267",
    },
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
      "000002ffa5535b6f9b3014fe2bc87bd9a4262109101229eaa294ad4c29e912d26a9aa6c49803750b98daa65355e5bfef004d2faad43eec09e3f35dcec5e781dcf022261312f1f4b60279ffe95a44e48880a629dece677231d06e689e8eddfc4731bb70f57a339b4e11c16b96a279994147894a325093cdba9b4a5195540ad141a18eeb74faced0b146b6e3580367843c0559b2e0c50db2afb42ed5a4d73b78775321d20c68c9559789fce9be7737e895525c03d3aaf7dab2872eaaf7bee9712618d55c14d3cd1a13a814c82de4946798c233338ebebe96ee729a775304df710694315115ba4e0b259828129e56b251259307d2a4f9e240d6dec29b87c67cb909c2cf3b9ad7e4dd17832a63bb95a0aa4c1bdf56cb336357a2d71555a076c6e5a9b7f20c63278109196f79bc33a6c6b1310b4ef0f2f0b7f0cffcd0e863123128cd8b2685904619d4f68f5df2dfcea626508d466d703b321dda77cd7194442396b8433b4a4c8822371ad97418996c6c8115474091a76bf586450b51f45db0cc68c8dc31d808726cd3a48ecd18756d60d638a1498ce1e180ec8fc85fc9359c70550ac5db5691cb951f7adb70b509e6b3d06bca4828b6e3a44dae2ee2659e1a8b44d03b75edeb2817e854f7dd0f426f359b87fe85d78e7a012965f7eb5b1c7642330588a692e6a0419e89189b46ce976b3ff497c16c818c667ee707842293df0fcf84f0be6cbaac9b6fede5588dff017041b3aa41dcb507d227fbfdd1ff29d828f10721f8b25b36f9b9f156bf487bb582042414ece3e923b8097cb8a0876d412cee0bda288dfff8d698aa4d9884f6cdf1bcc9af658f86963568d65b53a9dfc4ecc1f0d0dc5aa356841c0afd5851bb2d75af9a50a59e4018c4a712f8c1778cfe035c6318f6ad040000",
    ],
    [
      "ETag",
      "CArL2t8T0H98mJnAV8tSUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1636475664267"
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
      "0000000002ff2d90dd4ec2401085df65bca5892016d3840b3055d142b44ab830842cdb695d683bedfe601ac2bb3b5bbcd9993dfbed9c9339c351d51944b05745eb50773705da0fdfa4685c690d97866a833000b4a260522ad78edab47b7acdd4323ebe6d4e6eb9994da74c18f9839580e80cb9c23233107d9fa11615f2b7dd4ef71319b35de395c5ea2b7e8e53162acabcb05a27c96c9ec470d95e0670a07d8a396aac25fa918da6034abbf0698da89a1203434e4b34d0c3fd43a1c935421305ac040f61300cefc2f1e43e0cc7a370c2604952584535b3eb4f601b4b569429fd72581832a0fb9673e7fd79ea650eb4fd47e79d45f3ae897d0d7acbdbabfd23f94896a35aed700052f0325e94bdde2f7fceecc03d69010000",
    ],
    [
      "ETag",
      "ciuq2qRyFJdiMEkKWvuMWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:34 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd34d7282301800d0bb646d9d5404f9ba33968894824ab5c286414c91ff40100d9ddebd4eaf51df1dde378ae29809117675ce2af482643481713c7ee33aa1d75467b66704eb39c180fd123ff53be53c2c1b39c489b9874e970a4eadd5c2cd3f3e4b9c12d7e9eacbcc62b4c9a456f95b67db5bb828ccc9fe9af161614fcdd5465ef11035005591169467327f9616b5ece4500595e75e9ab59f870aa8f0851312c05e3df6a51a137b8adf85795eb467c37197f50eb0475f4ff59167213dd430df241b2922a33b01f345e878cc57561a0dd46ae60a4d3a04f3b6075533c60f0fff171a2176e369cb4498deb72b2ac008fdd50f3bc9d9fd3f6151cb5af4f30bde42f76319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-87-1636475664267",
    },
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
      "ab2d7d026dd2ac4d452569a90b54b3d96cc830bde058ca2033681ad3ffbe97c1ba1a13fdc4ccdc73ee39f7c10bd9f1624ba624e1d9630dd5e1c78348c8190145337cbd395cd9d1c3ce05dbd999979e73584c1e936c3643046f5892eecb1c3a52d4150339dd84ddac1275492b213a98a8e3d89dbe35b446f6d8b24603cb469e843c5df26287ec7ba54a3935cd9376371322cb81965c7699d8bfbd9b4f03b3acc4033025cd8f9226aa48f36bd19fb960547151cc36211aa8255431ec29cfd1c27fe63639ff98bacbe9be9b21f88933a08c89ba508d2d4cc14491f2acae7456327d21dae6bb0309dda5bb880c26f27a5fc405ddc399b1a58ac6ea50827119ac5786e75fae83d53cf2d67e1c2eaeddd5bcbb582f372b3f34eeaeddc035144d72d05c63669ceb9b8f17d4df8254bcd0ea51f3dc28bf36c8fb3c968680d212da606cf72cda777a93244d6c963ac37192f620499cc41ed361d26393118cb60950e46951cda28528c6ac3fb499e5c4f624857834b2593c71523bb6b6487506a3c1b89f90e31979aeb8820b2e4b2179db21721778911b47c1c65fcc23579790d23a5717adb1a680f71e151688a02f6a3a36512e50a969b7e7476e305f44deaddb4e7809196587f011679cd25c02a26985cd5350adc4161b46fcf9cabd40b09ed8cd2928c9f4cf0b697adeb878d7f2377a84036cec2afd25611478fe95b67342dcd2bcd690a7f6404ab47c8fb5a1ebe35f44e292b659c8af8d1bfc26ed5300295450b0efa789601df8f65f3b2d3e6271f551462abce3ee30d988b00ada1de2badc57b63d1cf7ac21d1e04a7d8af527cea96b4d8e2623eca150af",
      "15b58b8f85b662b57c036110c7efeb6e1dff01437fcb3f78040000",
    ],
    [
      "ETag",
      "PyG7TjkEe78k/FI8yC9qbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1636475664267"
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
      "0002ff8d925d4f83500c86ff4bbd8544ddc60c89174ca74e2722c3c4c42ccb1974c8048ae7435d96fd777b50a75113bd39b4e569e9fb72d6f050d419f8302ff2478372b593a3beb6418cca945af1a3a15a2138805ae496ece4bd8bdbcabc98305ec6bd288cf6cf4d7e78c8844aefb112e0af6151609929f0efd6508b0ab92da5d254f5accd1cd0abc61627493c0a4f39af28b37978331e0783f11036ceb631135acc5afe1f6dd38d034b9ac7b84089758a769746d212533db23295a89a125d4546a6a8a085db17b924d30849e472c53de8bb7b5ec7ebf67b9ed7ddf7fa0c96940a5d50cdeccd84f7034d5a94313db34af018906dc88217edf9c4e5226b85d87014265eb7ddef2b20312599cdfee41a5ef75ef05ff8c0de1df8ce898a4cadb7d4c9f82af86d1c5bfa39ea3848863f08a5d9a82d928c2e879324b88c2c377d973e5869549124f651a1b5706fb77bd0eb7bbb6fae1e91759abfe36b69d08154f0e5382b34f80b512adcbc029fc676c97a020000",
    ],
    [
      "ETag",
      "b3g5KXmuxuNRjR5PNP2Jug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:35 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-88-1636475664267",
    },
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
      "c8fbb2496d480ae12552d44529eb98d2a42324dd344d893107710b9862d3a9aaf2df7740d31755eb3e85f89eb73b9f1fc80d2f623222114f6f6ba8ee3f5c8b881c115034c5531599bb9de1aebfadcfaf61f743f773957be9788c08deb024cdcb0c8ea5a82b0672b45af6d24ad425ad843846a163c7391e588665da43cb324f2c1b7912b264c68b1b64ef942ae548d70fdebd548834035a72d963227f3ad7ef4ef4b212d7c094d45f5beae822f5f74d4f33c1a8e2a218af9618a096506d20a73cc308cfcc38fafc5abac769de4b117cc71950c6445da826164a3051243cadab56958c1e481bf3c507597a336f1a6ad3c56a1e7edcd2bc216f3f69546a9b4d05b2ce94f625585c68db12bd765482dc6a575fbdc0d3b46d054c54f186c75b6dac9d6a93f999f68cebce66fe851f6a038c128354bc68838434caa009f1382bffed0d3504aa50a62b6eecbe45074edf8d92c86689630ca3a40f51e444f6901a519fb9269871041479aa516f59b410856bd3247623c37487f1d08d996102b0786050cb899861b8a66119c689c9c8fe88fca9b882332e4b217937307215f8a1b70983d57c3a09bdb68d84e250ceba704d132f732a6c1241eff4b56faa5ca053337d7f1e7ac1641afa6bafbbf019a494dd2f6ff1ca139a494034ad680e0aaa0b11e3d0c8e562e987fe623e9921a3bdc5cb034292d1af876742785fb65356ed6fe36599adff01b0a659dd22eeba0f3220fbfdd1bf159661e0cfcfdf979894d82dcafc4614ee78a740beafbce027e98e0248a08282fd7f0310dc16fefb540fef06b1f872d0462afc8ffbc66463c22ae8f68ee76d971ddb3686ced0212db8526f6aae6d1c06dc68348a9043a11e3beade",
      "4d33afb654cb271016715de6eda4f67f01f77a87e5b7040000",
    ],
    [
      "ETag",
      "tb4hh39VJVGjehX/ImtmEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d90d16e82401045ff65fa5849c45a30243e54425a5b632ad5a64d63cc0a236281a1bb430d21fe7b67b12f3bb377cfcebd990ebef32a8500f679f6d3a06e6f32e4956d62344dc1464a4d95411800b2ca845ca59f2f18aaf7a35f9dc28fe1f3edd0b07b9e4e8530c9114b054107871c8bd440f0d541a54a946fbb9dee270ac66d6d95f9721d3d46b10825a556586e168b87d92282cbf6328013ed633ca0c62a413bb2d674c284e736ad51655da063a8d1091ae8e1fe21d3d4d44a1339a2389389e37a77ded8bff7bcf1c8f3052c28519c5325ece60dc486895511d359c2822b80ee5bc97de8cf5f914736d0f61f9db58ce65593f81ab496c3ab7d4836124b54d60d0e2051b28ca79caff7cb1f4145bf8069010000",
    ],
    [
      "ETag",
      "QdYKeCaVh7njCX0J+0st1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:36 GMT",
      "Server",
      "ESF",
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
      "4d7282300040e1bb64ad0e8205e92e8814958013a952360c421401c36f0a89d3bbd7e935ea7781b77a0f102709e9baa8af0a42c13be0b1accf92d9ae5e1ad69013936d2114e7ce8e47ebb32eb2742cb578433c7c75978d974c8381256228a56399ef5533c01f4870b94a5981a7d0f2b79a92123a87883007b5f4cc9090ec8a5772c6f5412dfc48e8956b6a8700da8b5c918e8e280c51d01d553b8be72ea657c9cd9b3c09c38dd267dece31d668fe35bd0b9b4accc329bdb4ab8bbf12a443e72b8cd7f024ed5dd6d4d4198ecf8a7afb468705e555d8e3fbe5e4b02c98bdbcfc5f6002c858df5ad245b7e7edca9bae4fc0dffa51cf6bf2fcdf20714b5af0f30be5c8249019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-89-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fa34014fd2b64f6ab7db7d03669d6a6a292b454816a369b0d19a6171c05069901e39afef7bd0cd6d598e82766e69e73cfb90f5ec803cff7644e229e3c56503effb817113921a06882af17cefa6fedd703e73abec8ea593db5af622b592c10c11b96a4599142478aaa6420e73bbf9b94a22a682944071375a6b3cec01c99636b629ae3a169214f421aaf79fe80ec3ba50a39eff58edadd448824055a70d965227b7befd5c35e518a7b604af63e4af65045f6be16fd990a461517f962e7a3814a42194246798a16fe33f7d1e9c7d45d4eb36e82e09a33a08c892a578d2d4cc1441ef3a42a7556327f21dae6bb03f1edb5bd0a0c26d22acbc39c667062eca9a2a17a2ec038f7b61bc371cfb7de6619385b37f45797f666d95d6dd7bb8deb1bb797b6671b8a462968aeb1304ef5cdc50beaef412a9e6bf5a0796e945f1be47c1e4b434069096d30b4fa261d4cfbb3288e2c164f479328ee43144d236b4247519fcdc630de474091a745358be6221f58fd3e8c07b3904d581c8e61360aa9456938dcc783fe884d198d87e470429e4aaee08ccb4248de7688dc7a4e608781b77357cbc0d625c4b44ad5596bac29e0bd47850522e88b9a0e4d940b546adaedb881ed2d57817363b7135e4342d9b3ff88338e692a01d1b4c4e6292837628f0d23ee72639f21584fecea189464fefb85343d6f5cbc6bf91b3dc001367695fe123ff01cf742db39226e685a6948dd1e488196efb036747df883485cd2360bb9ded9de2fd23e7910430939fb7e9a08d6816fffb5e3e22316571f65a4c23bee0e938d082ba1dd21aecb7d655b23d31a9844834bf529868b73ec5a93a3c90819e4eab5a276f1b1d056ac926f200ce2f85dddadc33f6b490dff78040000",
    ],
    [
      "ETag",
      "GILzvSv1IQfGmv9v8EPf7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bcb4242ab048132e8aa2922008d478610c59da692db69dba3f1a24bcbbb355d1a889de6c67a6df4ce79cee061eb232061f9659fa6851adf752345317cc50dbdc687e54546a040fd0c894c94958aee65db16fe36636b6054da7372f49daeb31a1a37b2c24f81b4832cc630dfeed064a5920b74594dba25cd49907665db9e23c9c0dc7e79c1714bb7c7c3d1a05fdd100b6deae3196462e6afe1f6d775b0f56b49c61820acb08dd2e95a2154666e8646a59543936345915a1861aae5fa48a6c251551832b8de36ee3503445abd316a275243a0ce614499351c9ecf59cf7034346e6337a669520185075c88293fa7ce27216d7425c381c87a255eff7155018918a177f7215af7b2ff92f7c60ef0e7ce76441b6343bea6c34097e1bc7967e8e3a0dc2c10f421b366a8784c3cbc13c0c2eaf1c77f72ebdbf36a8af14b18f1a9d858707ade376471cbcb97a42ce69fe8e6f94450f22c997e32233e02732d7b87d05ff4e47ab7a020000",
    ],
    [
      "ETag",
      "OTnjS96+ud3iNumoQQWzfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:37 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-90-1636475664267",
    },
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
      "5b4fdb3014fe2b91f7b269f492a64dda4a8855258c68bd409ac2a6696a6dc70986240eb6c38450fffb4e1cca4568f0d4d4e7bb9de3e30774c38b188d11e1e96dc5e4fda76b41d001621aa770ca07f3929fff105f4f2f82135f383fa3f4264f0f0f01c16b96c27999b1961295a44c8dd7ab762a45556229440b845aa36ecb761db7ef0d5cb7df733de0299625335edc00fb4aeb528d3b9dbd773b1522cd182eb96a53913f9d77ee7a9d528a6b46b5eabcb6ec808beabc6f7a94098a3517c5e17a05012ac5e486e5986710e19919936fafa5db1ce7ed14c0779c324ca9a80a5dc702092a8a84a79534aa68fc804ccc171f68e5cffc69644d97eb45f4798bf39abcfd6261656d3692a92ad3d649b89c5bdb12bcaeb0626a6b5d9efaa16f595bc9a890f186c75bebd03ab2268b63eb19d79ccd8279105936448999d2bc3041224c325687789c55f0f6866a02d620d314375ed7c5f6b03b2209f16832740624e9324286c41b608774e9a8cffa31611878ba56372c5c886248478ee3b8d4b63176139bd0be9d0c06c0f428210e61c35e4c3cd765687780fe4aaed93157a550bc1918ba0c83c8df44e17a319d44be6923c13094e3265cddc4cb9c1a9a04d03b7dedea2a17e0544f3f58447e389946c185df5cf88ca598deaf6ee1ca139c2906682c71ce34937311c3d0d0d9721544c172319901c3dce2d91ea1d0f8f7c33321ba2fcd94b5f9adbddcbef1df032e705619c45df3816cb4db1dfc5f611585c1e2fbfb12b8846e41e60fa060c71b0574bef6c35fa8390a59c2242be8c71b006053f8f0a9eedf0d60e1e5808dd2f01ff68daada844ad6ec1dcf4d970ddb733caf3b40062cf59bdab037dc0fb8d6a81559ce0afdd851f36eea799952a59e40508475599849edfe016d8d700db7040000",
    ],
    [
      "ETag",
      "i5MpiQKo+HVIFEo3XTgkmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1636475664267"
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
      "83401085ffcb788548a54224e9a135c436a955b11c8c699a2d0c08050677971ad2f0df9d5dbdeccebef966decb5ee15c75394470aacaef01e57853a27e3345826a68b4e2aba74e2138805a944c9e9fe5ed29fc58bf78d5de5ba6b5f22f3bbf5c2c9850d917b602a22b141536b982e8f30a9d6891c78e47693732a6c7de289bdd3e7e8a13165aca8db04bb7dbe56a1bc374981ca8e994608112bb0ccdca5e528d99de98b44ab47d83aea24166a8c0c2b6514a1a7a21895c56dc07cf9d057e300fef83607e17840c3694095d51c76cfa0e6ca3498b26a11f0e0b3306a42d397761cf0bcb9e0974f84757a346f52a897d15e6b66bed1fc944d21c55cb011dc8047fc6bad27fefe917a8e5cadf69010000",
    ],
    [
      "ETag",
      "kMr/b7YHO0iT0AUjs3vN3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:38 GMT",
      "Server",
      "ESF",
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
      "000002ffedd3417282300000c0bfe4ac0c0591a637902a4a054134ca85018c46010b245112a77fafd36fd4fdc33e40561498d2947d97f80a3e80c834a8148ad7bcdbd3fb8522226e89ecb8ab5af105eb47fd2433d2d77064f98919a62447cc726aede420036dc8716d987d129bade4019bb99f65b25ad349e310b362b1ee66945b42bc6d6d3c362f2515765b1e0cb89b465eb51b2e7cea5875151a991b7798df122e2aaeeef9dee21e2c6d95e4c678b69def97613796304886c124d78b70e36dd181b8fe3df254da23a9b1f53ca85bae89af6590db482e9829bc6814b8c5eada96cacbcbff050600f7cdb9c3343d3fb7eb068403f0573f65a2c1cfff36ce3adc819f5fe6dbb55c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-91-1636475664267",
    },
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
      "0000000002ff85536b6f9b3014fd2bc8fbdabc492091a2354a498396900d48ab699a903117ea96608a4dabaaca7fdfc5345dab4aed276cdf73ee39f7c133b9e345426624e6d97d0dd5d3b75b119333028a66f82a568b7a50b0e98f6bdf5dbb2bb80473b57e9ccf11c11b96a48732878e1475c540cef64137ab445dd24a880e26ea4c079dc1643431adf164620e2716f224e4e9861777c8be51aa94b35eefa4ddcd84c872a025975d260eafefbd8761afacc42d30257bef257ba8227b9f8b7ecf05a38a8b62be0fd0402da18ae040798e16fe3393f8fc7dea2ea7876e86e007ce803226ea4235b630051345cab3bad259c9ec99689b6f0e247036ce323498c8eb431115f400674642158dd45309c6cadf6d0dd75bedfced2274775e142cd7ce76d15dee36fbad1718d76bc7770c45e31c34d7981be7fae6e105f513908a175a3d6c9e1be59706b91fc7d210505a421b8cacfe840eecfe344e638ba5f6681ca77d88633bb6c67414f7d9d404338981224f8b6a162d44619bc39431d38a26744823d38251144fc756640efb763fa6f63485841ccfc863c5155c70590ac9db0e11dc9fd089427fef2d17a1a34b48699dab8bd65853c05b8f0a0b44d027351d9b2817a8d4b4dbf542c75f2c43f7ca6927bc818cb2a7e01e679cd25c02a26985cd53506d45820d23de62eb5c20584fece72928c9eccf33697adeb878d3f2577a88036cec2afd2541e8bbdea5b673425cd1bcd69087f6404ab47c83b5a1ebe35f44e292b659c8afbde3ff26ed930f295450b0afa789601df8f25f3b2d3e6271f551462abce3ee30d988b00ada1de2badc17b635b24d6b4434b8521f62637b78ea5a93a3c9080728d44b45ede263a1ad582d5f4118c4f17bba5bc77fb6c488d578040000",
    ],
    [
      "ETag",
      "oFAu1nc9KWRIHIFeGe4FHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1636475664267"
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
      "83",
      "40",
      "0c",
      "86ff4bfd28246e4ea6247e603a7519ce8db1c4c42ccb0d0a3281e2dd31b32cfbeff650a75113fd72b4e569e9fb725b78caca185c5866e9738d727390a29e98204055e75af1a3a2522158805aa44c26eb76d5eb2687f155757fe967c3e1a4ed05e9f939132a7ac44280bb8524c33c56e03e6ca11405725b44795d948b26b3406f2a539c86c16074cd7941b1c94733dff77a7e1f76d6be31165a2c1afe1f6df39d052b5a0698a0c43242b34b256985911e18994a14558eb6a25a46a8a0819b17a9a4ba1292c8e68a7dd6b25bceb1d3e99e384ea7ed7419cc29123aa392d9d994f7034d5ae401bdb04a7018904dc88293e65c73398b1b21261c8c42a7d3ecf7159018918c177f7215affb28f82f7c60ef0e7ce7444175a9f7d4957fe7fd368e2dfd1c75e985fd1f84d26cd41e0907b7fd69e8dd8e0d377f97dedb68546349eca3426361eba8737ad2758ede5cbd20e3347fc7d5b2460b22c197e326d3e0262257b87b05819848017a020000",
    ],
    [
      "ETag",
      "fv2pB7f+dFpXDLiKKQ2ARg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:39 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-92-1636475664267",
    },
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
      "30",
      "10",
      "fe",
      "2b",
      "91f765930a24409380843a0ad99689420781aa9a26709c4bea368953db61aaaafef75d92d217556b3f117ccfdb9dcff7e486e71119929027b725c8bb4fd722244704344df0b4b4279b53f1d35dedf3ab8d7773717a39d89c27a3112278c552342b526829514a066ab85eb51329ca824a215a28d41a745b96ddb3fbceb16df7bbb6833c05693ce3f90db2afb42ed4b0d33978b71321921468c1559b89ece9bcb3ef760a29ae8169d5796dd94117d579dff424158c6a2ef2d17a85014a05720b19e52946786646e1d7d7d26d4eb37682e03d6740191365aeab5828c1441ef3a494b52a19de933ae68b0fb2f266de2430268bf53cf8bca35945de7d31a832b65b09aa4cb5f16db9383376057a5d51056a675cfcf0969e61ec243021a32d8f76c6c83831c6f3291e465443f37fe69ff98161618c0894e6791d22a0610a5580c739f96f6fa722508d564d71eb9836b55c7310c6a1c362b7771cc62684a11b3ac7b4179a6cd0877e1402459eaed46b16cd456eb2d0ea39511fdc1eb3fa83d8e9c631b5a9ed324a2d147142cbed99a6451e8ec85fc9354cb92a84e2cdb0c8c5d20fbc6db05ccf27e3c0abdb88290e64da84ab9a7899536393087aa7af87aaca053a5593f7e781b71c4f027fe335973d8384b2bbd52d5e774c530588a69266a0419e89088746ce172b3ff017f3f10c19f50d9e1f108a0c7fdf3f1382bba29eb2ae7f2b2fbb5ffb1f001b9a963562df7c109cc2c3d1ff15a6d508de15e89a5db365e24a1fa3d21f84e28a3722e4d7da5b5e92e668093148c8d9c74b80e0baf0e14b3d3c1bc4e2c3411ba5f13fae1c53950993d0ac1ecfea461bb6d31b74316a0d96fa6dcd1d1c665c69548a9041ae1f3b6a9e",
      "4d35b2ba54aa2710167163e6fefc3b56ff012c7c45bab6040000",
    ],
    [
      "ETag",
      "u6CVBoJ8SvnhVEkWBY9VPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1636475664267"
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
      "82",
      "40",
      "10",
      "85",
      "df",
      "65",
      "7a5948d55a4c4dbc80865412625a2ce94563cc0a23458181fd69638defeeecda9b9dd9b3dfce3999331cebae8439ecea6a30284f7715ea77db64a84ca315979e3a85e0016a513139a4e9326fc3c3fddf3136d1e7e861582765b85830a18a6f6c05cccfb0afb12915ccbfced08916f9db762bdd44c6f4a9b74ab2fa885fe38c85964a2bacf2340da33486cbe6e2c1817619ee516257a01dd94b3a60a1139b5689b66fd0576464810a1cec1e2a49a61792c867c57f9ef8e3e03198ce9e82603a09660c3654085d53c76cbe06b6d1a44593d12f87853103d2b59c7befce1f2773a0cd3f1a9d34aa3749ecabd05a8e6ef62f6423698eaaa5410f0ac1cb58d6fa76bf5c017567ea2869010000",
    ],
    [
      "ETag",
      "qLLHUmAj+zkEuBW0/qSIdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:39 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb64ad8e42a94d7704e523d64a0a11bac904889f4201938880d3bbd7e935eabbc3bb0196655c4aaaea8257e015f44c83936ce2372fc8be1e63330c43d24f91d0c7f3a5e5a864fa551ab98537dd39f416d795fd365474a6f68a6c24c66c1b282ef2a0350a981efca0185c4d83b15dcd86b4474107ab9ea84542b19d8539319fd65131f6fc4b117abbe3aed2e5dea963ddd551a3acf82cf9da28f14c6e1d9b461a725873980f354aad953927b475291356775162597acd876d42137f53977fe28bda911a9220f68f75fb7c2aadf7228a184eb23c6ed7938787ff0b8c00ef9a93e0929eeedb7503c211f8ab4f55dff0fb7fc499e002fcfc020c2ad0ed19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-93-1636475664267",
    },
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
      "5c136848428814ad514a57a4405620ada66942c618ea1630c5a65355e5bfefda345dab4add13b6ef39f79cfbc133ba674d8e962863e5434fbba72f773c4327884a5cc26bede7b741d65d51113fdcefbf06e6e4da31af562b4030c512b86e2b3a12bcef0815cb7d3c2e3bdeb7b8e37c048946ae3d3a9ddbf3a9339bcfa793b9033c41ab62cb9a7b60df4ad98aa5691eb5c725e7654571cbc498f0faf5dd7c9c986dc7ef2891c27c2f69828a303f17fd56718225e3cd6a1f83815ed02ea535661558f8c7ccb3b3f7a9c70cd7e312c08f8c504c08ef1ba96c410ac29b82957da7b3a2e533d236df1c50ec6dbd4d62105ef5759336b8a627468e254ee5534b8d8b6817187e78b18b8275e2efc234de5c7ac17abcd96df741181b37975ee419126715d55c63659ce95b0817d0cfa990acd1ea897a56ca2f0df23f8e4511405ad021983ad61c9f2e2c372b3287140b7b961516cdb245e6ccb09d59c49dd2699e510c3c2daa59b8e14d9ee5b6634ddd9412cb49a76e4e525ccc6c95d09ae0cc9e4c2c1b1d4ed09f8e497ace44cb051b3a846e223ff1d224da879b75e2e9120adc57f27c30a60a78eb51428100faa4a6838a320e4aaadd7e9878d17a93f8d7de30e12d2d31798a1f60c605ae040534eea079927601cfa161285c07de3980f5c47e1c83022d7f3d23d573e5e24dcb5fe9090c50d995fa8be224f2c3efdace11718dab5e431e87036ac1f22dd406ae0fbf01094b3a6441577b2ffa8986a78816b4a30df9ff3401ac03fffdd78e8b0f58587d901112eeb03b442811d2d16187982ef785edd8ae3373910677f2436c319d1dbba672a88cb4a68d7c",
      "a968587c287410ebc52b088230fe5077ebf017930a776f78040000",
    ],
    [
      "ETag",
      "mIdhMbrQesSqkU+M/2V7/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1636475664267"
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
      "db",
      "4e",
      "83401086df65bca5893d482d8917a8ad6d7ab0a5f4ca98665da6480506771795347d776751ab5113bd5966866f86f97f76070f491e81077749fc58a2aa8e62340b1b04a8cbd4687e14946b0407d08898c9aadb9e0ab90a7ad5fc723018be8c5bf1d82ccece98d0f21e3301de0e3609a69106ef6607b9c890db24a56596afebcc015315b6b80c83d1ec8af38c229bcf5693897f3ee9c3de393446c28875cdffa3ed76efc096ee02dca0c25ca2dda550b445694656a6165991624353a9246aa8e1fa45aca82c84226a70a5d16b379a6edbed744f5cb7d372bb0ca6248549286776b5e4fdc090116940cfac125c06541db2e04d7d3e7139896a21361ccd42b753eff71550284945eb3fb982d7bd17fc173eb07707be7322a33237076a30b9f67f1bc7967e8ebaf4c3fe0f421b36ea8084a3697f19fad3b9e56edfa59f5706f55c11fba8d15ad83cee9c9e74dde337572fc83acddff18c2ad10129f8720c1303de46a41af7af3f1bb27e7a020000",
    ],
    [
      "ETag",
      "y73MacUR9yPDFFHxK2gKtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:40 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-94-1636475664267",
    },
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
      "eb6f9b3010ff5790f765d39af00e49a4a84b53ba31e5d125a4d5364d8931867a054c6d93aaaaf2bfef80a60f556b3f81eeeef7b8f3dd3dba66458c862862e94d45c5dd87bf3c4247882a9c4254b013b71fea27ae7d9d9d9d7d773fef6293dc8e4650c16a94c47999d18ee49520540ed7ab6e2a785562c17907883a03a763f6ec9ee3b9bd9e63f53cc0499a2553565c03fa4aa9520e75fda0dd4d394f338a4b26bb84e78f717d67e9a5e07f2951527f29a9838ad4df163dce38c18af162b45e81814a52b1a1396619587842c6d19797d45d86f36e0ac53b462826845785aa6d0105e145c2d24a34ac68788f1a9bcf7ed0ca9ffa93509b2cd6f3f0e316e73578fb49c352db6c049555a6b4b3e562a66d4bd0bac292caad76f9cd5ffa9ab6159470116f58bcd546dab1369e9f42502a30d706a6c12c0835137cc4542a56342e421c65b476f030a8e0f5f3d400ac40ab4d6e3ca387cdbe318892c82349df76a3c4a051d48f3c17db9141060e75e28862c0a99abd41e18217341ed8b6e179b161b97d62db5632c0160102bb6f9a0382bdc4882cc736d0fe08dd0aa6e829932597ac9d16ba5c06a1bf0997ebf9641cfa4d1b0986899cb6e6ea269efb54d02414bdd1d7bece320e4af5e88379e82fc79330b8f0dbd79ed21493bbd50dbc77823349a11a0b9c5345c58cc7303474be580561b0988fa780689ef0fc5021d1f0f7fd1320bc2b9b29abe65b6bf59c46ff507081b3aaa9d8b53fc844fbfdd1ff19c260e6afc2f1ecfc6d16cbb08c8e61754c3734ada1690f4da76b18c62f20ff034058fb9617fd58fbcb9fa80d2d6942052dc8fb7b01c54de2ddeb3d9c12d4c231810ceca562b08544d62244d0761b59def4dea23dc7e85bcded2b2cd4abdcc0740f63af396a469ad3423d74d49e523dc52655c9c72248c212cd83f957c8fe03b6479eb4ca040000",
    ],
    [
      "ETag",
      "riB58T/B53klFFJ5+vd1cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1636475664267"
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
      "0000000002ff2d90614f83301086ffcbf91512a7c822c93e8812b78ccc0db7986896a5838381d0c3b6b89085ffee95f9a5777dfbf4de377781ef526610c0b12c7e3a54fd4d8166639b0475571bcda525a9111c40230a267b7f293e3faaf5e96d338fb7327c392fa52a663326747ac246407081bcc43ad3107c5d408a06f9dbe1a0c6898c99beb5ca62b58d5ea3848586322bac7671fc14c6110cfbc1818a8e09e6a850a66847b68a2a4ccdc2a6d5a2696b7435752a450d233c3e148aba5628229715f7d17327febdef4d1f7cdfbbf3a70cd6940a53926476f70e6c63c8883aa133878509036a6c39773e9ebfa3cc81f6ff68d81bd46b45ecabd15ade5eed9fc946321cd5a80e1d48052f635e9aeb7df803bc3017f369010000",
    ],
    [
      "ETag",
      "y6KaZWjPhOQHLTnBDwKnrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:41 GMT",
      "Server",
      "ESF",
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
      "0000d0bb64ad0e1a40e80e1415a4087610ca261363a4f20b90501b3abd7b9d5ea3be3bbc6f8009a19c23c14ada801720f1c29c91d9be35eccd3d77630f36841561c07dd31a071a293971180a03a27c76114bcad00c2584db85a8fb8fca8b5ad23a467939999995ade2bda2a9106fec3ad3fb26d52aac75ca98deaaf1adb9268ac3a2f9605ceeefde8140c3a7fab02042ae79a1ca10574df6caf63a3f2650040ade5507ff547ae7a2763247afb7f1797a3e8cb218e6c885d76adaa72716adb2dc52d72eb562b60bee7680702a519724ea952eb910e1f258cc9e9efe2f3001f4abbdf594a3db633bd44c7302feea23215bfaf86f53dcd31efcfc02d6f7d96919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-95-1636475664267",
    },
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
      "b8e6414378448ad628a16ba6403a20adb66942c618ea1630c5a65554e5bfef629aae55a5f613b6ef39f79cfbe009ddb12a453394b0fcbea5cdfecb2d4fd009a212e7f0fa7bb50c2625df7bbee799e2c7d7345a4c9dc7f91c10ac63095cd6051d08de36848ad92e1ce60d6f6bdc703e804403673ad0cd89695853d3344e4d0b788216d9865577c0be91b216b3d1e8a83dcc39cf0b8a6b268684972fefa387d351ddf05b4aa418bd951c818a187d2cfaade0044bc6abf92e0403ada04d4c4bcc0ab0f09f9926676f530f192e8739801f18a19810de56b2b3052908af3296b78dca8a664f48d97c7540a1bb7197914678d196555ce1929e6829963896fb9a6ae7c1d6d3d6fef936f016d17aebc7e1f2c2f516c3e576b3f3fc50bbbe700357933829a8e26a73ed4cdd7cb8807e4a856495528fbae74ef9b941ebf763e908202d681f8cadb189757bec24596291cc9e4c936c4c93c44eac299e2463e218d448138a81a744150b57bc72eca9953896193bb6e1c4866e9ec60eb1ec58a7a66150db4c753b418713f4d83049574cd45cb0be43e83a58476e1c053b7fb9885c554286db42ae7a635d01af3d4a2810401fd474e8a28c8352d7eeb51fb9c16219adafdc7ec21b9a63b20fef61c6192e0405346ea07992361e4fa161c85f78ee0ac06a6297c7a040b33f4fa8eb79e7e255cb5fe8110cb0b32bd5178551b0f6bf2b3b47c4152e5a0579e80fa806cb37501bb83efc05242c699f05fddcb9c12fd43f0534a30dadc8e7d304b00a7cfaaf1d171fb0b0fa202324dc617788e8444843fb1d62aadc67b665e896a923056ee4bb98a35bc7ae7539ba8cb4a495",
      "7caea85f7c28b4176bc50b0882307e5f75ebf00f0e265f7678040000",
    ],
    [
      "ETag",
      "ZDCR3moyMNMM6sJ+dTA59w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1636475664267"
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
      "0002ff8d92514fc2400cc7bf4b7d74242270e0121e4051410484f1640839b63286db3aef6e22217c777b13d1a889bedcdaeed7aeffff6e074f511a800b8b287cce516d4f42340f3618a3ce63a3f99151aa111c402343262bc3bbd1e926bfcccab7bd57419568d1eb35c2669309edaf3091e0ee6019611c68701f7790ca04b9cda7384fd279913960b6992d4ebc717770c3794281cd07d37ebfd5ee7760ef1c1b0369e4bce0ffd136db3bb0a6c51897a830f5d1ee92295aa36fba56a6964916634953ae7cd450c0c58b50519e494554e24ae9a2562a8b8aa8d66b4254cf459dc1987c69224a999d4e783f3064643ca60dab04c1802a4216bc2cce172e474121c486dd8127aac57e5f01853ea960fe2797f1ba2bc97fe1033b38f09d9309e5a93952d7fd61ebb7716ce9e7a8ab96d7f94168c3461d11af7bdf9978adfb91e56607e9edad413d52c43e6ab41696cfaa8d5a5d9cbdbb7a49d669fe8e6b548e0ef8922fc76d64c05dca58e3fe0d6ae6e4bd7a020000",
    ],
    [
      "ETag",
      "3OKP+wuCp1HJx6o3ibJJ8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:42 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-96-1636475664267",
    },
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
      "6fda3014fe2b91f7b269e5da5c0812ea104db748105a0845d33481ed38a9db244e6d870d55fcf79d24a517556b9f083edfed1c1f3fa03b9e476888084fee4b26f79f6e05412788699cc0e9df6e1a06fbaf93ddbaa4e97aafccdbf96c7f351a0182572c85b322652d254a49991aae96ed448ab2c052881608b55cbbd5b34f6dd3b16cdbecdb0ef0144be329cfef807da375a1869dced1bb9d0891a40c175cb5a9c89ece3bbb7ea790e29651ad3aaf2d3be0a23aef9b9ea58262cd453e5a2d2140a998dcb00cf314223c3323f2edb5749be3ac9d0078c729c3948a32d7552c90a0228f7952ca5a150d1f501df3c5075a7a536f121a93f92a083f6f715691b75f0cac8ccd463255a6dab858cc67c6b600af1bac98da1aeb1fdec2338cad6454c868c3a3ad3132ce8c71700e878f12f5c9d49ff9a1d1832011539ae7758c10939455111e27e5bfbd9f8a80359835c58dd3b5716fd075494c1c1a0f4e2d1277192103e258f89474a96b3233220c034f57ea350be7d0bc6b39c48d4d3bea0e9863f55dbbeb10db2511666e9f10cb3eed0fe281dd438713f44772cdceb92a84e2cdb8d07ae187de265cac82c938f4ea36620c23396fc2554dbccca9a14900bdd3d7a1aa72014ed5ecfd20f416e349e85f7bcd754f5982e97e790f171ee3543140638933a6999c890886862ee74b3ff4e7c1780a8cfa0e2f8f088586bf1e9e09e1bea8a7acebdfcacb366bff23e01aa7658dd8351f08a67038f9bfc2c5743efe58a36d01e2f01b40b0e18d02ba5a798b9fa8395ab0984996d38f3700c075e1c3877a7c3580857703364ac37fd837aa2a132a59b3773cab13366cc7ec5b6eb5990096fa4dcd76cce3802b8d4a91652cd78f1d35afa69a575d2ad513088ab02e811f7c87ea3f2a4ffa44b5040000",
    ],
    [
      "ETag",
      "x0lTNy+CvWuclWys4jOMyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1636475664267"
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
      "000002ff2d90dd4ec2401085df65bcb44d04ea129b70014ab4a612a8e28d21646987bad876eafe681ad27777b678b33b7bf69b3967f70c5faa292086832abf1deaeeaa44bbf14586c655d6f0d652631002402b4b26c7c96a9288f78d7c162fd166bb76aabe7e98cf664c98fc136b09f1198e0aabc240fc718646d6c86dfbbd1e263266bbd62bc9ea6df9b8cc58a8a9f0c26a9ba6f345ba847ed70770a2438647d4d8e4e847b69a4e98dbc4a735b26e2b0c0d399da381011e2e4a4dae959a286425bc13e1484c4434bd15221a8b298315e5d22a6a98ddbe02db58b2b2cae897c3c288013d949cfb38ac3ffec53ed0ee1f5d7416cd5a13fb1af4963717fb7bf2912c47b5da6100b9e4cf7852f672eeff0041b1cd7369010000",
    ],
    [
      "ETag",
      "2IN3I6VQaJ6M4QUPuim+DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:42 GMT",
      "Server",
      "ESF",
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
      "0000d0bb642d0e28a07447e4634109d8a2c086a1929280d598e004ecf4ee757a8dfaeef0be41753c6221cafed2e13378016335b3a6c769c896d093a4cf7252e6b225cdfaf0e59b4c47e94855425bab77aa1bd662b8efaea199be328f4158fb7dedef72c75637ca19f14844096159b0b0bb0c696f57bb587890ecc549aeced8ba6fd3b8fc40cdfb6addca3b0fb41a8faab85a8a6e0609f1870ad1d62d96ba13067096ca5a5f5c1a7bee9f509299db2ea242d10e8c1e8a9d3b7357f6583b867b1bef6db76103c686a7d69287c39c9f8ae6732314897651ac25f1f4e9e9ff02138007463916257d6c9f1b9635017ff5cb7e64f8f11fe28a630e7e7e015492a1c519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-97-1636475664267",
    },
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
      "3014fd2bc87b6d1212480891a2354a688bd4900d48ab699a903117ea96e0149b4c5595ffbe8b69ba5695da276cdf73ee39f78367f2c0ab8ccc48ca8bc706eaa76ff722256704142df07564b9f797ab28f3fcbb7a7ab8a562650ea7c57c8e08deb224dded4be849d1d40ce46c1bf58b5a347b5a0bd1c3443dd7e90d27d6c476c693893d9a38c89350e6d7bc7a40f69d527b391b0c4edafd4288a204bae7b2cfc4eef57d70180df6b5b807a6e4e0bde40055e4e073d1efa560547151cdb7111a6824d409ec282fd1c27f66969ebf4fdde774d72f107ce00c2863a2a9546b0b533051e5bc686a9d95cc9e89b6f9e64022efda5bc6061365b3ab928aeee0ccc8a8a2897ada8371116ed6861f5c6cc2f522f63741122dafbcf5a2bfdc5c6fd74164dc5e79a167289a96a0b9c6dc38d7b7002fa89f8154bcd2ea71fbdc2abf34c8ff38969680d212ba60e298133a9c9a6e9aa70ecba7d638cd4d48d369ea8ca9959accb5c1ce52a0c8d3a29a452b5139198c6d736827d6d885c476dd2c7199394acca933b22dd7cc27a94d8e67e46fcd15acb8dc0bc9bb0e91dbd08fbd240eb7c172117bba849c36a55a75c6da02de7a545820823ea9e9d846b940a5b6dd7e107be16219fb375e37e16b28287b8a1e71c6392d25209ad6d83c05f55a64d830122cd6de0ac17a623f4e414966bf9f49dbf3d6c59b96bfd2631c606b57e92f89e2d00f2eb59d13e286968d861cba03d9a3e53bac0d5d1fff201297b4cb427e6ebdf017e99e42c8a1868a7d3d4d04ebc097ffda69f1118bab8f3252e11d7787c95684d5d0ed10d7e5beb01ddb1a0da744836bf5216659f6a96b6d8e3623eca0522f15758b8f8576628d7c056110c71fe86e1dff014fe11d9e78040000",
    ],
    [
      "ETag",
      "239jGDSdEIhr8vWaoD018g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1636475664267"
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
      "db",
      "4e",
      "83401086df65bc94c613d24ad20baa559bf424d01b4dd36c615aa9b083bb8b4dd3f4dd9d45ad464df4669919be19e6ffd92d3c6532051fe6d9f2b942b53958a2b9b34188baca8de6474952233880462c998cb26852b4c6a3fbc09574283a72b53a0ad7ed36133a79c44280bf85458679aac17fd8821405725b427955c8599d396036a52d4671d81bde705e506af3e1a4df0f3afd2eec9c7d632a8c98d5fc3fdaa63b0756340f71810a6582769752d10a13d3b332b528ca1c1b9a2a95a0861aae5f2c1555a550440dae342e9a8d13efcc739be79ee79e7a4d06734a84c948323b89783f3064441ed29a5582c780aa4316bca8cf172e67692dc486bd61ecb9f57e5f018509a974f62757f2ba8f82ffc207f6eec0774e145449b3a7aefba3e0b7716ce9e7a8ab20eefe20b461a3f648dc1b74a338188c2d377d97ded918d46345eca3466be1c9b1db3a6f7ac76fae5e92759abfe31b55a10389e0cb719b19f01722d7b87b05b993a61e7a020000",
    ],
    [
      "ETag",
      "SiSUm8POZA4no+aBnjj/Rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:44 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` > ? LIMIT 1",
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
      jobId: "grouparoo-job-98-1636475664267",
    },
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
      "0002ffa5535d6f9b4010fc2be8fad24a890d360663c94a2d8736a88e9d629c34692bfb80c5b904387c77388a22fff72e10e7439192873e71ecceeccceede3d905b96c7644042b6de9420ee3fddf0901c1050748dd11f97bf6ee69bd9addc9e9c6de02ab94c6657fedd70880856b124cd8a140e252f450472b098b7d6829705159c1f62a143a77f68585dcbb47b9665762c1b7912d264c2f25b645f2b55c841bbbdd76ead395fa7400b265b11cf9ee2ed6da75d087e039192edd7926d5491edf7458f521e51c5783e5cccd14029412c21a32c450bcfcc38fcfaba748bd1acb546f0964540a38897b9aa6c618988e7095b97a2ae4a060fa4b6f9e240e6eec41d07da78b698069f5734abc8ab2f1a95da72294096a9d2bef9b3536d55a0d635952057dac589ebbb9ab6121071112f59bcd286da91369a1e63b0fafb53ea7a173034f14ebd4033d0490c52b1bcf611d03085cac3e3a8bcb70baa0854a15a935cdaba458dbeee8449684749bfdb0b131dc2b01fda3dda0df5c831c18c43a0c85355f59a45739e9bd0330dc73142c7a1d474924edfb24d6a740ca7dfb7f49e69f66c33b67520bb037227988263260b2e59332f72e17b81bb0cfcc5743c0adcba8d84e24c8e1b7355132f7d2a6c1241eff4b5abb28ca352357c6f1ab8fe681c78e76eb3ef09ac69743fdfe0c6139a4a403415340305e294c7383472369b7b81379b8e26c8a89778b6474832f8fdf04c08ee8b7acaaafe565a9659ebef01e7342d6bc4b6391083ec7607ff57a18725fe2204af77c3263f17ae7f499a900f0908c8a38fb78fe03af1e12bdd3f19c4e2a34119a9f01fef5a242b91484073e75856fb6bd8b669763b3aa9c142bdc9995d733fdcaa46551132c8d56347cd93a96655a74af904c2245e95a937fd8ed97f270bd340b2040000",
    ],
    [
      "ETag",
      "KYXjSqOksvHPqeZfYfOZRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1636475664267"
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
      "d16e82401045ff65fa2ab1a2c54ae283186a4d88a9584d9ac69805068a0586ee2e6d09e1df3b8b7dd999bd7b76eecd74f0995709b810e5d95783b2bdcb50ef4d13a26a0aadb8d454298411a01619939bd334cad2f5eaf7c97b1b937d182f9a53ba5f2e9950f1079602dc0ed21c8b4481fbde41254ae46f978b1c2632a6dbda28dbddabbff143164a4a8cb03b06c1ca0b7ce8cffd08ae148598a2c42a4633b29674c5586f4d5a25caba404b5123635430c0c34326a9a98524b258b1168fd6c4993ab3f983e3cc6c67ce6041b1d03955cc1e0fc0369ab42842fae1b03061400e2de74e87f39b65db043affa35eab51bd48625f85c6f2fe66bf26134973542d1b1c412c7819cfb9beddfb3f6ae6f80e69010000",
    ],
    [
      "ETag",
      "GV3bgfCAxFBY/o2S/9uVfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:44 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb64ad8e8ae0d09d11caa7eaa046443719c0401022044834767af73abd467d7778df204e53d275b8af4b72031f40c55373948e92f12292e327dadc236e7a769b97bde787e86b3a0b30c3b108a9a12fe12cbc4fa59c0c2d59b81c13470ed1f922affab04c525ae18ba8ee141f357dc3921a0578ab6886b77bf8b4b8c542d7a82ae69c62715afba25f791bd91839cd82dd1a1a507811b7d22cce84f53ceb62e9b305721fa586c5958776a00eb7b9f6683376401c073bb3f692bdea27e6a7cd9b236c0ac4e80ace92b97525850a5a27a73baeea39713a3f121387b9dee8ededdf0103401e4dd1920e17afed9a6e9a03f0571ff7aa21afff90c42d69c1cf2f79a794c519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-99-1636475664267",
    },
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
      "14fd2bc8fbb8e64d428814ad514a57aa847484b4eaa6091973a16e0926d8a4aaaafcf75d4cd3b59bd47ec2f63de79e731f3c93079ec76442229eee2a289fbedc8b889c105034c5d7cb9de3aee0727775beffd9a78ea736b7975f1fa75344f09a25e9b6c8a0254555329093cdba9d96a22a6829440b13b56cbbd51b0d46a6351c8dccfec8429e842c59f0fc01d9774a1572d2e91cb5dba9106906b4e0b2cdc4f6f5bdb3ef778a52dc0353b2f35eb2832ab2f3b1e8b74c30aab8c8a79b351aa82494216c29cfd0c25f661c9dbe4fdde674db4e11bce70c2863a2ca556d0b533091273cad4a9d954c9e89b6f9e640d6cec29907061359b5cdc39c6ee1c488a9a2a17a2ac038f7574bc3f5ce57fe7216b82b2f5ccf2f9ce5ac3d5f2d364b6f6ddc5c38be63281a65a0b9c6d438d5370f2fa81f83543cd7ea41fd5c2bbf34c8fd7f2c3501a52534c1d0ea8e686fdcb5a324b258321e0ca3a40b51348eac211d445d669b60c61150e46951cda2b9c8fb268d7ac99885fdf1601c9a038b8676dcef855d1bec416c46dd78c8c8e1843c965cc119978590bce910b9f1ddc009037fe3cd6781a34b486895a9b3c6585dc05b8f0a0b44d007351dea2817a854b7dbf502c79fcd03f7da6926bc8094b2a7f50e679cd04c02a26989cd53502e458c0d23de6ce99c21584fecea189464f2eb99d43daf5dbc69f92b3dc001d67695fe9275e0bbde776de788b8a659a521fbe6400ab47c87b5a1ebc36f44e2923659c88f8de3df92e6c987044ac8d9e7d344b00e7cfaaf1d171fb1b8fa282315de717798ac455809cd0e715dee0bdb324d7b3c241a5caa7f63c3eec83c76adce5167842de4eaa5a266f1b1d046ac92af200ce2f83dddadc31f56cd573378040000",
    ],
    [
      "ETag",
      "JqEIOeJqPFvZ2aENtUYJ+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1636475664267"
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
      "0000000002ff8d92614f83400c86ff4bfd0ac954c61cc93e804ec5cca98cc5446396133a6402c5bb433397fd777b38a75113fd72b4e569e9fb722b78ccab143cb8cfb3a706e57227437d658208555368c58f9a2a8560016a9131a9fda3d77e70b338e9a008b36b0aa2b349ed0f064ca8e4014b01de0ae63916a902ef7605952891db122a9ab29ab599057a599be2248ec2f109e725a5261f4f47233f180d616d6d1b53a1c5ace5ffd176b7b66041f711ce516295a0d9a596b4c0448746a612655da0ada891092a68e1f64526a9a98524b2b962f7fbf6aebbef3abdaeeb3a7b6e8fc18212a173aa989d4e783fd0a44511d10bab049701d9862c78de9ecf5cced3568809c371ec3aed7e5f018909c974f62757f3ba0f82ffc207b671e03b274a6a2abda58e4717fe6fe3d8d2cf51477e3cfc4128cd466d91383c1f4e62fffcd270771be9c152a3ba94c43e2a3416ee769c836ecfedbcbb7a48c669fe8ea765831624822fc769aec19b8b42e1fa0d9ae228817a020000",
    ],
    [
      "ETag",
      "tADz9BZjG0eaIgWoBRJSpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:45 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-100-1636475664267",
    },
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
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7bd9a43640422089147559ca5aa494740969775562cc81ba054cb1e91455f9ef3b40d38baab54f189fef726ebe27373c8fc888843cb9ada0dc7eb816213920a06882b75f7e9ee4a7e1f626bb70fbfa79242ebf7f37fcc9788c085eb324cd8a140ea5a84a0672b45a76925254052d853844a143d3300e4dbb675b4edfb6adaeed2051421acf787e83f42ba50a39d2f5bd792711224981165c7698c81eeff5bbae5e94e21a9892fa4b4f1d6da4fe8eeb512a18555ce4e3d51233a824946bc8284f3187276a147e7ea9dde134eb2408bee30c2863a2ca559d174a3091c73ca9ca46958cee4993e7b30359ba33771a68d3f9ca0f3e6e685693379f342ab5f5ba0459a54afbba989f699b02bdaea804b9d12e4fdd85ab699b129828a3358f36da583bd226feb1f684db68bf2bc3e8010666de99176826e61381543c6fb2096898429dc943c7bcd783aa0954a1561b5c3b864dcd81310ce3d061f1a0d70f6303c270103a7dda0b0d36b4c08a42a0c853b57ac3a2b9c859af1bc1b0079619da31ed8656cfb49803b6113163181903da8f87a64d23b23b207f4baee098cb4248de768d5c2ebcc05d078b953f9d046e53464cb133c76d727511cff354582482dea86b5747b940a77a049e1fb88bc934f02edc76ea334828db2e6f71ee314d25209a96340305e59988b069e47cbef4026fee4f66c8684679be474832fa75ff4408b645d365d57c6b2fdb6afcf7800b9a560de2ae3d1093ec7607ff5758060bcf3f795b625260b528f30751b8e9ad02f9b672173f487bb580184ac8d9fb1b80e026f0fe8bddbf1e04e3fb411fa9f01f178ec9da8595d02e1ecf9a325bb663f56dc7260db854",
      "af62cec0dc77b8d6a81521835c3d94d4be9eba614da8928f200ce2bef84dab76ff00b8c59ce2bf040000",
    ],
    [
      "ETag",
      "BZGnHbykmVE5/PdoWXX0NA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1636475664267"
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
      "2d90d16e82401045ff65fa0a0954c494c4876ad0da1053694dda34c6ac305028307477b1a1867f7716fbb2337bf7ecdc9bb9c077d1a410c0a9c87f3a94fd5d8e7a679a18555769c5a5a5462158805ae44c4ecbe57af5f09e75cf7fa23d4f56b51b7e38bbf99c09957c612d20b8405660952a083e2fd0881af9dbf128c7898ce9be35ca66fb16aec398859a52236cf751f4b88842180e8305259d62cc506293a019d94a2a31d11b935689baadd056d4c904158cf0f8904bea5a21896c566cd7716cd79ff8de6ceafbdebd3f63b2a244e8821a86f7afc03e9ab4a862fae5b4e03220c7968367e37966d933890effe8a2d7a85e24b1b142e3e9dcfc97643269ceaa6587162482b7f154e8db7db802ed5ff1996a010000",
    ],
    [
      "ETag",
      "5jCGF9XfuJzapv3Fm1EY0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:46 GMT",
      "Server",
      "ESF",
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
      "ffedd34b7282300000d0bb642d0e2228e9122914ac20b4c36fc3a43160a20d94f08b9ddebd4eaf51df1dde3740181321cabeb9100e9e80441a5ce2e5be352d676211cd9b71a38b95b61254cf0d3f344ec2c69f75ab0ff468178ad9214e4f4e5c139966bb17c8f643c365cdf2f5f62803b59fdda4b2cf5e5be7dcad2e1cc2b0f49a291649e06659e0cc9e09e3ad610dbe8a992f5148771c8e6672b326c298e1946cf027de3f5b5f228ded42f24ac99262e5aecf11ba26f8a05eed926299beb1c8d385a68e99179bc8b51a5ec053f45ac587f12368e4a6ed4685b845f1be7c78f8bfc00290b9a51d1125bd6f5f1b102ec05ffdb2972db9ffb708ea48077e7e01f5a885d619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-101-1636475664267",
    },
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
      "85535d6f9b3014fd2bc87b5c13422190468ad628a16ba4846c84b49aa6091973a16e01336cda5555fefb2ea6e95a555a9fb07dcfb9e7dc0f9ec81daf52322509cf7fb7d03c7eba15093921a0688eafd67568d13f9fad79bb2cbc609157b76b533ecc6688e01d4bd2b22e602045db3090d3fd6e9837a2ad6923c400130dac9135b05cdb75bcb1eb3aa7ae87440945b6e6d51dd26f94aae5d4348fe2c35c88bc005a733964a27c7937ef4fcdba11b7c09434df6a9a2823cd0f54bf148251c54535dbefd0412ba189a1a4bc400fffa86972fe36f790d3729823f89e33a08c89b6529d2f4cc14495f1bc6d7456327d22dae7ab03d9f96b7f11194c146d59c5152de1c448a9a2b17aacc1b808b71b63155c6cc3cd3c5a6d8378b7b8f437f3e162bbde6f829d717de987bea1685280e61a33e35cdf02bca07e0a52f14aab47dd73a7fcdca1d5fbc174049496d007636fe4526b323a4bb2c463d9c41e27d90892649278636a272376e68093264091a745358b56a2b2b2530bc68915b33165b13349edf86c62d1381bdb3678d8ec51c6c8e1843c345cc192cb5a48de77885c87abc88fa3701f2ce691af4bc8685ba8656fac2be0b547850522e83f351dba2817a8d4b57b15447e385f44ab2bbf9ff01a72ca1e77bf71c6192d24209a36d83c05cd46a4d83012cc37fe12c17a62df8e4149a63f9f48d7f3cec5ab96bfd0231c606757e92fd945e12af8aaed1c1157b46835e4be3f901a2ddf606de8faf00b91b8a57d16f27def873f48ff1442060d54ece3692258073efedb8e9b8f60dc7dd4910aefb83c4c762aac817e89b8aef799ed39aeed8d880637ea5dcc71dd63dbba1c5d4628a152cf25f59b8f95f662ad7c016110e71fe8761dfe02790e67367b040000",
    ],
    [
      "ETag",
      "1WR1ax+1AuDl7NCgnjL/sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1636475664267"
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
      "00000002ff8d92614fc2400c86ff4bfd3a22280eb3840f43518988ca468c1a438ead6cc3ed3aef6e1242f8eff626a25113fd726bbba75ddf77b786e74cc6e0c12c4b5e2a54abbd04cdad0dc6a8abdc687e94243582036844c2e45d5a49217af162990687fbfe52a60f97f749b7cb848e522c04786b986798c71abcc735485120b7459457859cd699036655da62108e07a373ce0b8a6d3e9a0c877e6fd8878db36b8c8511d39aff47dbd3c68105cdc63847853242bb4ba96881911958995a14658e0d4d958a50430dd72f124555291451832b8d56b3d568b9876ebb73e4baed03b7c3644e913019498627012f08868cc8c7b46499e032a0ea9015cfebf395cb595c2bb1e16014baed7ac1af80c288543cfd932b79df54f06ff8c0b6167ce7444195343bea6c78edff368e3dfd1c75ea87fd1f8436ecd40e090757fd20f4af6e2cf7b495de5b19d4378ad8488dd6c356b37d7cd4719befb69e90b59abfe31955a10391e0db719119f0e622d7b8790366ae06607b020000",
    ],
    [
      "ETag",
      "WhunaaBdjwhS3/AwnhZKYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:47 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-102-1636475664267",
    },
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
      "14",
      "fe",
      "2b91f7b2490512080945421d826c8b44a10ba1683781e39c50b7214e6da75da9f8ef3b494a2faad63ec5f1f92ee7e67b72c5b398f449c437d705c8bb0f972222470434dde0eded2e81ddf2e7dfdd6cd9dd590b692f86637d3b182082972c45b7790a0d250ac940f517f3e6468a22a75288060a352cb3ddb09c8e63bb5dc7b1db8e8b44056932e1d915d22fb4ce55bfd53a983737426c52a039574d26b68ff7ad9b762b97e2129856ad979e2db451ad775c4f52c1a8e6221b2ce69841a140ae604b798a393c51e3e8f34bed26a7dbe606c1379c01654c14992ef3420926b2846f0a59a992fe3da9f27c7620736fe28d4263345b4cc38f6bba2dc9eb4f0655c66a254115a936be04b353639da3d70555a0d6c6f29b177886b196c0848c573c5e1b03e3c4184ec7c6136e6dfc2e4cb3031898f8a77e6858984f0c4af3acca26a4510a65260f1df35f0faa24508d5a7570e59a0eb57ae67194442e4b7a9d6e94981045bdc8edd24e64b2631bec38028a3c5daa572c9a89cc71e2d8b21d6a9bb1d36691d9ee50c7744cb013d34c2c066d943cc63bb23f22b7926b1873950bc5ebae9165e087de2a0c16d3d130f4aa32128a9d19d7c995453ccf536391087aa3ae7d19e5029dca11f8d3d00b86a3d03ff7eaa94f6043d9ddfc1ae79ed05401a2a9a45bd0204f458c4d2367b3b91ffab3e970828c6a9467078422fd5ff74f84f02eafbaacab6fe9e5d895ff01704ed3a242dcd4076291fdfee8ff0af330f0a75fdf96a039568b327f10859b5e2b90ef0b2ff841eaab00129090b1f73700c155e0fd177b783d08c6f7833e4ae33f2e1c53a50b93502f1edf5665d66cd7763bae492ab0d4af6276af77e870a9512ac21632fd5052fd7aca8655a1423d",
      "823088fb32ad5ab5ff0771222a54bf040000",
    ],
    [
      "ETag",
      "wzfezWZxzOW5z1Ur4UADtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1636475664267"
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
      "ff2d90dd6e82401085df657a5948c01f6c4cbc5043ad093596d6f6a2316685015160707769430cefeeecb637bbb367be9973b237b814750a533816f9b545d93de4a8df4c11a36a4badf86aa856080ea0163993abe593f77adafa5fc3e7f1675ae6c5f531bdcc6733265472c24ac0f406598165aa60fa7d835a54c8638783b41b19d35d6394f5e6235c85310b15a546d8eca268be8842e8f7bd03673ac698a1c43a41b3b29174c644af4d5a25aaa64457512b13546061dbc825b58d90442e2baeef0d5c3f1806a3c93808468360c2644989d005d50cefde817d346951c6f4cb69c16740da928367f6fc61d93389f6ffe8a2d3a8b692d858616abbd67f492693e6ac5ab6e84022f8375e0afdf7eeef1991a9336a010000",
    ],
    [
      "ETag",
      "GC80MhP1W3F5Vdlgiq+dkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:47 GMT",
      "Server",
      "ESF",
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
      "59",
      "72",
      "82",
      "300000d0bbe45b1d16b7f42f5802a5455994ed27c3120aa288841a62a777afd36bd47787f70dd23ca78c91e1d2d016bc00912a7096cfdebbb586799557fde82a4102f542504d126111f39befb093914ab2280fb293c47c19287e7241721da3e9d585e5c996c479e7f907b61dbde453b7f1dbbef147b16fc27abeb11354f31d67f1dc2491f94acab37f477b9df09b0b45b042683016dad771c38f53eaf38f1c660ddcf6cbd8d6745c94177e1fb16955aea7e22bf7149cb5831d3a566456d14a35ef6da6b316cad8b9752444085aa83144c82d675caf13cb2d664f4fff1798003a76754f19a91fdbd5058413f0579f0ca2a38fff1a4d7bda839f5fdb18e44a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-103-1636475664267",
    },
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
      "00000002ff85536b6f9b3014fd2bc8fbb826401e90468ad628a56ba6846c84b49aa609d9ce853a259860d3a9aaf2df77314dd7aad2fa09dbf79c7bce7df044ee45b12563c24476a8a17afcb4938c9c11d034c357b13ba42cb73fdfc4873cdb7df3323ffea6b3c90411a26129ba2f73e82859571cd478b3ee6695ac4b5a49d9c1441dd7e9775cafef0dfca1e70d7a9e8f440579ba10c53dd2efb42ed5d8b64fe2dd4cca2c075a0ad5e572fff26e3ff4ecb2923be05ad96f356d9451f607aa5f72c9a916b2986cd6e8a0565025b0a722470fffa85b76f1367757d07d3743f083e040399775a11b5f9882cb2215595d99ac64fc448ccf5707b20e16c12cb6b8cceb7d9114740f67d6966a9ae8c712acab68b5b4e6e1d52a5a4ee3f92a4cd6b3eb6039edce568bcd325c5bb7d74114589ab21c0cd79a5817e616e205f5b7a0b4288c7adc3c37cacf1d9abf1f4c434069056d30f11d8fba23e79ca5cce7e9a83f64a9038c8d983fa47de6f0f3010cb60c28f28ca861d142167d6c2aed9f43c246ee3019f823968c58df4d9cadc7a8e3c3c0497be47846fe5442c3a550a554a2ed10b98de67190c4d1269c4de3c09490d23ad797adb1a680d71e351688a0ffd4746ca242a252d3ee791807d17416cf6f8276c20bc8287f5c1f70c629cd15209a56d83c0dd5526eb161249c2e834b049b897d3f051519ff7a224dcf1b17af5afe428f71808d5d6dbe641d47f3f0abb17342dcd0bc369087f6404ab47c87b5a1ebe36f44e296b659c88f4d10fd24ed5304295450f08fa7896013f8f86f3b6d3e8271f7514769bce3f270d5a8f00ada2512a6de67b63f18b98e430cb8d2ef623dd73db5adc9d164843d14fab9a476f3b1d256ac562f200ce2fc43d3aee35fef07708f7b040000",
    ],
    [
      "ETag",
      "ijqfbl/+VTqlgjJ6g7TJtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1636475664267"
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
      "1085df65bc1492fe490d492f5aadda88b5167a618c6956182a1598edeea2364ddfdd59acd5a889de2c33c337c39cc36ee0292b13f0e1215bac2a54eb83059a1b1b4c5157b9d1fc90546a0407d0880593abc161782a656bf23ab9bc0eb3d6ed3a38912fbd1e133a7ec44280bf8134c33cd1e0df6da01405725b4c795594f33a73c0aca52d86d174343ee7bca0c4e6e35910f407c110b6cebe311146cc6bfe1f6df75b0796f430c514159631da5da4a225c66664656a51c81c5d4d958a51430dd72f168a2a291491cb15b7d968bb4dafed75ba479ed769795d26738a85c9a8647816f28260c8887c4a2f2c133c06541db2e2b43e9fb99c25b5121b8ec691d7a917fc0a288c4925f33f39c9fb3e0afe0d1fd8ce82ef9c28a82acd9e3a0baefbbf8d634f3f479df6a3e10f421b766a8f44a3ab6118f5af2696bbdf491fac0dea89223652a3f5b0d9e81c1f75bdc6bbad2764ade6eff84655e8402cf8765c6406fc54e41ab76f06aadee07b020000",
    ],
    [
      "ETag",
      "qB+SDpp2PxPKOSi2YyLCpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:48 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` > ? LIMIT 1",
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
      jobId: "grouparoo-job-104-1636475664267",
    },
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
      "b2494dc25b8044aaba2c611b5a9a7409693b6d5362e048dd02a6b6e91455f9ef3ba0e98ba6b59f3077cfcbddf97c4f6e5891902189d8f6b602b17b77cd23724440d12d4669928ecbc9adfec9dead46dee5b7f9e5bc2847c7c78860354bd2bccca02379256290c3d5b2bb15bc2aa9e0bc83421d43b73b866339b6db771cdb745c244ac8d2292b6e907ea5542987bddec1bcbbe57c9b012d99ecc63c7f8cf7eecc5e29f835c44af65e7af6d046f6de703dc9784c15e3c5f16a89155412c41a72ca32ace1899a441f5f6a7719cdbb5b04dfb118681cf3aa50755d2811f32265db4a34aa64784f9a3a9f1dc8d29ffae3501bcf57b3f0fd86e63579f341a3525baf05c82a53dae7c5fc54db94e8754525c88d76f1d55ff89ab611107391ac59b2d18eb5136d349b6030a10a36daaf4ad72dc0e034380d42cdc05a12908a154d25218d32a8ab789856f0ef25d504aad0af4dae5ddda186a70fa23472e3d4b3fa51aa43147991dba756a4c7031bec24028a3c55ab372c5af0c289120790990cbcc8b3c0e9270605db750dd775dc81657a9e39a096a993fd11f923988209932597ac9d18b95804a1bf0e17abd97814fa4d1b29c5a94cdae2ea269ed7a9b04904bdd2d7bece328e4ef5f88359e82f46e33038f7db1b9fc296c6bbe52dde794a330988a682e6a0409cf2048746cee6cb200ce6b3d11419cd359e1d10920c7fde3f11c25dd94c5935dfdacbb11bff03e09c665583b86b0fc420fbfdd1ff1526f5085e15307553efe866c7e8a3d26f84e2a2b722e4fbca5ffc206d6801290828e2b79700c14de2ed077b783c08c6e7833e52e13fee",
      "5c2c6b975840bb7b2c6f3a6dd9aeed79964d1ab050ffe40603e330e45aa356841c0af5d052fb78ea9935a94a3e8230892b330b665f30fb17f7da592abe040000",
    ],
    [
      "ETag",
      "adfCpDq0B4yUA8XKOXOnpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1636475664267"
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
      "83",
      "401085df657ad9089aa60a422e4c91fc20a1b50d819610369bd19aaa6377d71695bc7b674d6f7666cf7e3be730037c15f519423815f9778baabbcbd1bcd82645dd96467369a8d6081340237226e5aaef459f2da378bf0984bb09eed3e63d9acf99d0f2132b01e1005981e55943f831402d2ae46fc7a31a273266bac62aebed5bbc8c53162a3a5b61bb4b926891c4703d5c2770a1538a192aac25da918da20b4ab3b669b5a89a121d4dad92a86184c7875c51db0845e4b0e278eeccf1fc077f163cfafe6cea074c96248529a86678f70aec63c88832a55f4e0b1e036a6c3978369e3f2c4f6da2c33fbae80cea67456cacd17aba37ff27b2990c6735aac50948c1db5815e676bffe010714fcee6a010000",
    ],
    [
      "ETag",
      "cHzzazfGAEWJ7a0J7+RpZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:49 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb646d194450e84e84a0a8e307f9d40d0321101005032440a777afd36bd47787f70d228470d3846d75c30ff0098648d204246c6b55873cff885472140f3030fbb1d6ead1bf7798c1d19876564dbaf162a6aba158a1dedb9f48840a2e21e245fc704195a4ec837c71b4a927dbe5fcc45811d2c5723d9b254129b367a0569b345e29c4dfc58394ad31491669c977f1d437afee39fbeaac3982a756ca59c0b19b18ba032df894f8c5d99a8648f93e2356de339b72b53f3a09bc6598b8ad4a65cfadf0d919e75df9b053ad65a8f0eea2226fa6de756d70e1ededff021380fb3aa7b809f3d7f699a26913f0573f6c871abffeeb38a298829f5ff54854f119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-105-1636475664267",
    },
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
      "00000002ff85535d6f9b3014fd2bc87b6d12d2104822456b94d23652425620adb66942c65ca81b822936e9ba2aff7d17d374ad2aad2f807dcfb9e7dc0f9ec9961709999098670f35544f5fee454c4e08289ae1eda5bfa5b04d7e0ffefcf0aa245bfac272f6d7d3292278c3927457e6d091a2ae18c8c926e86695a84b5a09d1c1449dbe39ecf4ed816d3943dbb64e6d078912f274c98b2dd2ef942ae5a4d73b8a773321b21c68c9659789ddeb7d6f7fda2b2b710f4cc9de7bcd1ecac8de27aa5f73c1a8e2a2986e0274504ba822d8519ea3877fd4243e7b9fbbcbe9ae9b2178cf1950c6445da8c617a660a2487956573a2b993c13edf3cd0709dca53b0f0d26f27a574405ddc18991504523f5548271e1af57c6c2bb58fbab59b8587b5130bf7257b3ee7cbddcacbcc0b8bd727dd75034ce41738da971a64f1e1e503f01a978a1d5c3e6ba517ee9d0e2e3601a024a4b68839163dab43f32c7711a3b2c1d0d86716a421c8f62674807b1c9c61658490c14795a54b368210a96a4d888781859b1850fdb3c8dc67d80a83f86910d361d99c301399c90c78a2b38e7b21492b71d22b7fe2274a3d0df78f359e8ea12525ae7eabc35d614f0d6a3c20211f49f9a0e4d940b546adabdf042d79fcdc3c58ddb4e780919654fc103ce38a5b90444d30a9ba7a05a89041b46bcd9ca3d47b09ed8b7635092c9cf67d2f4bc71f1a6e5aff41007d8d855fa4d82d05f7897dace117143f35a43f6ed0729d1f21dd686ae0fbf10895bda6621d71bd7ff4eda2b1f52a8a0609f4f13c13af0f9df76dc7c04e3eea38e5478c6e561b2516115b44bc475bd2f6cc71a0f477da2c195fa1073faceb16d4d8e2623eca0502f25b59b8f95b662b57c056110e7efe9761dfe02d6df26a97b040000",
    ],
    [
      "ETag",
      "GRkaekdx3zZNrdgLRo47vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1636475664267"
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
      "0002ff8d92df4fc23010c7ff97fa3a223f37b384079009330305c603318494ed3606db6eb69d8610fe77af13d1a889beb477d7cf5defbeed91ed933c6436db24f17309e27015839a6a6306b24c95a4adc05c023318281e13695a8ee32f5bcda5bbdddfc72367b0185e5bd36e9708196c21e3cc3eb228813494cc7e3ab29c67406901a66596af2bcf60ea50e8e0dc9fb99321f91986da9f2c3cafd7f71c76322e8921577c5df1ff485b9d0cb6c3cd0c22109007a07b2904ee2050ae1e53f2ac48a126b114014856c1d5412cb02cb840ac51a4d6a8776a0db365b6ad8e69b69ba645648a015709e6042fe6d42053a8783ac357a945214054264d1c55eb0b8593b09a449beec437db55835f0101018a70fd275750bf5b4ecff0819d25f8cef10ccb5c5da83befa1f75b39d2f4b3d4a0e73b3f08a948a90be2bb6367eef7c68f9a5b9d47ef1f14c8478124a404ad61a3debee95866fd5dd65bd452d33db61225182ce0f43b46896276c45309a737eee4ac2d7b020000",
    ],
    [
      "ETag",
      "67EETY32YIhkJgHEDUG/7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:50 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` > ? LIMIT 1",
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
      jobId: "grouparoo-job-106-1636475664267",
    },
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
      "000002ff8553eb4fa34010ff57c8de97bbc4b60be5d13669bca6a292b4545baaf11e699765c15560915d34c6f47fbf01ac8f98d3f081cdccef31333bfb846e791ea1110a797257b1f2f1db8d08d101628a24105d5dcd7dec7ad9b9797d79637a27a7c7e77cf2301e0382d72c49b222651d29aa9232395aafba4929aa8294427440a8a363bba3db7ddb742cdb360ddb01a264693ce3f92dd0af952ae4a8d7db9b77132192949182cb2e15d94bbc776ff48a52dc30aa64efbd670f6c64ef0bd7c35450a2b8c8c7eb15545049566e5846780a35bc52a3f0e77bed2e27593701f03da78c502aaa5cd57581041579cc93aa6c54d1e8093575be39a0953b73a781365dacfde0fb96643579fb432352db6c4a26ab5469c7cbc55cdb16e0754d24935bedf2d45dba9ab62d191565b4e1d1561b6b87dac43f82a05450dc56fb5361dc67109d79732fd07428266252f1bc29252061caea329ec7e57dbca59a401418b6c98d836da20ff0308c4387c683be15c69885e120742cd20f311d9acc8c424680a76af58645721840680d3175307c743870fa1802d8b41cdb3142b356620e8d8646887607e8a1e48a1d715908c9db91a1cba517b89b60b9f6a793c06dda88098ce5a82dae6ee26d9d0a9a04d0277dedea2c17e054cfdff30377399906de85db5ef98c25843eaeeee0d263924a066852928c2956ce45044343678b9517780b7f320346738f677b8444a3df4faf84e0b168a6ac9a7fed659b8dff1e7041d2aa41dcb707a4a3ddeee0ff0a81377757c1647ef6b98a810ddcc14647b702dd18e9fd916e7631c6bf40fc2f1061f95b5d74be769757a80d2d59cc4a96d3aff702c04de2eb47bc7f50008627053eb09d8ac31a5259bbd092b5ebc8b3a6f996ed58b83fc0a80197ea43ceb2f4fddc6b8d5a91652c57cf2db50faa1e6393aae40b0892b045bee79f40f61f501c83eed2040000",
    ],
    [
      "ETag",
      "SYMN0EImQ4hWj4IGHFQiAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1636475664267"
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
      "d1",
      "4e",
      "83",
      "40",
      "10",
      "45ff657c14d2829546923e58436b1352156d4c344db3a553a40283bb830d21fcbbb3d4979dd9bb67e7de4c07df79758010f679f6d3a06eaf32e417db24689a828d949a2a83e000b2ca841c8d960b5d2ca2f7bbd1e223f1aed97f6ab2f36c268449bfb054107670ccb13818083f3ba85489f26db7d3c344c1b8adadb25abf45cb2811a1a48315d69b38be9fc711f4dbde8113ed133ca2c62a453bb2d674c2945736ad51655da06ba8d1291a18e0e121d3d4d44a13b9a2b8de3870bde026984c6f8360e20753210b4a15e75409bc7905f1616255247496b4e009a08756821f87f35764df26dafea3f396d13c6b126383d6737cf17f209b89252beb061d48956ce331e7cbbdff036e7edf286a010000",
    ],
    [
      "ETag",
      "//GFrlFEW9/FZR1+t2Ougw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:51 GMT",
      "Server",
      "ESF",
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
      "d0",
      "bb64ad0ef253ba2396088214450db0612004440511827c3abd7b9d5ea3be3bbc6f1011429b2664f72b2dc10718225e999199592d21eace84fb32e138b58df4689106e596affad2768e212d753c1d8b3c2f9e99cbd4e462a9f372a905dac9b9a59b7bbaa59d409c54ec64e79c06d94342ee6aa55eca1b47b65efb38f2976ad5493c46e141c450e858eb25026dfd4f435304ecd436e19e318d7d7eedda07e4b3606c95043ec779b15f0c15523339b798107b85ee39bdf14070b7912d6e5fb24136e0309a78614a65a6e9a83fc903536ddcad3de72adab3b7b7ff0b4c00edabbca64d98bfb60b92a24cc05ffd900d157dfd8734aa690d7e7e015ed0fdf019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:51 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-107-1636475664267",
    },
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
      "3014fd2bc8fbda8490102091a2354be91a29211b21ed1e9a90712ed41d608a4da6aaca7fdfc5345dab4aeb276cdf73ee39f7c123f9cdcb3d99928467f70dd40f1fee4442ce08289ae1ebb71f9be85355dead8657cda1498537671b2f9bcd10c15b96a44595434f8aa66620a7bb6d3fab4553d15a881e26ea5903b7673923c776c78e630f1d178912f274c5cbdf48bf55aa9253d33c89f73321b21c68c5659f89e2f9dd3c0ccdaa1677c094345f6b9a2823cd77543fe68251c54539db6dd14123a18ea1a03c470fffa8fbe4fc75ee3ea7453f43f08133a08c89a654ad2f4cc14499f2aca97556327d24dae78b03d9fa2b7f11194ce44d51c6252de0ccd8534563f5508171196ed6c632b8dc84eb79b4dc04f17671e5afe7fdc566b55b075be3e6ca0f7d43d12407cd3566c6b9be057841fd3d48c54bad1eb5cfadf25387966f07d312505a42178cdd81432d6f3049d2c465a9371a27e90092c44bdc311d250336b1c1de274091a745358b96a2f486238bc1681cdb3066b19d32279e3830895318d1c463560a9e458e67e44fcd155c705909c9bb0e919b7019f97114ee82c53cf27509296d7275d1196b0b78e951618108fa4f4dc736ca052ab5ed5e06911fce17d1f2daef26bc828cb287ed3dce38a5b90444d31a9ba7a05e8b3d368c04f3b57f81603db12fa7a024d39f8fa4ed79ebe245cb9fe9110eb0b5abf4976ca370197cd6764e886b9a371a72e80ea442cbb7581bba3efe42246e6997857cddf9e177d23d8590420d257b7f9a08d681f7ffb6d3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb7d62bb636be47a44836bf526664f86a7b6b539da8c5040a99e4aea361f2bedc41af90cc220ce3fd0ed3afe05ba9a97937b040000",
    ],
    [
      "ETag",
      "XZOTBpnjL2Huvufo8AcO8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1636475664267"
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
      "8d926f4fc2400cc6bf4b7dbb45c039c8125e80a2207f449826c610726cdd186eebbcbb6908e1bbdb9b8a464df4cdaded7eedfa3cbb1d3c2679081eac92f8a944b93d8a51df986086aa4cb5e24741b942b000b58899ec27d3c9dd857f7f3c6c38792b5a6f8657ad46dc6e33a182356602bc1d4409a6a102ef6107b9c890db024acb2c5f5699057a5b98e2dc9f0d26979c67149a7c723b1a75baa31eecad436328b45856fc3fda167b0b36b49a618412f300cd2e85a40d067a60642a911529da8a4a19a0820aae5ec492ca4248229b2b76bdd6b4ebee89eb344f5dd769b84d26530a844e2867f876ce0b82262dd219bdb04c70199055c88aa3ea7ce67212564a4c3898f8ae532df8159018900c977f7205efbb16fc1b3eb0770bbe7322a332d707ea6274ddf96d1c7bfa39eabce3f77e104ab35307c41f8c7b73bf339e1a6ef12ebdbbd5a8a692d84885c6c37acd699d36ddda9bad6764ace6ef785a96684120f876f4130d5e245285fb5703769f237b020000",
    ],
    [
      "ETag",
      "HiPNVFTY/K24n8fhjKJ82g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:52 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` > ? LIMIT 1",
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
      jobId: "grouparoo-job-108-1636475664267",
    },
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
      "0002ff85535b6f9b3014fe2bc87bd9a426211020891475514237a494b484b49ab629b18da16e09a6b669d555f9ef3b40d38baaad4f21e77c9773f323bae14582c688f0ecb662f2e1d3b520e808318d3388fe59df56d7bc3c9f25b8b2e64e1595277e783f990082d72c857765ce3a4a549232355eafba99145589a5101d10eaf4cd61a7efdaeec0735c7760b91e1015cbd3052f6e807ea575a9c6bddec1bc9b0991e50c975c75a9d83dc77b7756af94e29a51ad7a6f3d7b60a37a1fb81ee78262cd453159afa0824a31b9613bcc73a8e1859a90af6fb5bb1cefba1980ef386598525115baae0b24a828529e55b25145e347d4d4f9ea03adfc853f8b8dd9721dc69fb7785793b75f0cac8ccd463255e5da388996a7c6b604af2bac98da1a97dffdc8378cad6454c864c393ad31318e8d693887e09384f1ab324d9b4178119c06b1d1876a12a6342f9a5a624c7256d7f134afe0fd9a6a02d6e0d826379ee9e2fed01c919478341dda0e494d46c890780eb689494703364808c3c0d3b57ac3c28528aca135b21d0031d7b6f0105b64405992903419d938355d82c93075061eda1fa17bc9359b73550ac5db99a1cb2888fd4d1cadc3d934f69b36520c7399b7c5d54dbcae53439300fa4f5ffb3acb0538d50b08c2d88fa6b338b8f0db9d2f5886e9c3ea16b69ee25c31406389774c33792a12181a3a5bae82385886d305309a459e1d100a8d7f3ebe10e287b299b26e7e6b2f77d0f81f001738af1ac45dfb81fa68bf3ffab7c2c96239fd58a3eb0062ff1b4070e7ad023a5ffbd10fd486229632c90afaf10500b8497cfc5e0f6f07c0f07ac04769f80f074755ed42256b0f8fef9a125bb6e7587d6f841ab0d4ef72b6671d265c6bd48a6cc70afdd452fb76ea8135a94a3d832009f71206e137c8fe05b6d5df43bd040000",
    ],
    [
      "ETag",
      "zUqujipQCdau2D5uRpFENw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1636475664267"
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
      "c2",
      "30",
      "0c85dfc5bb5c2b51c6ca84c4054c68a055c0cab8982684d2e076656d1df233048877c729bb899d932f3e47bec06fd9ec600059591c1cead34381f6c337291a5759c34551631002402b0a26cf5f5572502bb570531cbd3f667ab13c37c7e19009237fb01630b8405e62b53330f8be40236ae46fdbad6e2732664fca2bb3f9e7e46d92b250d3ce0bf375928cc6c904ae9b6b007bca52cc516323d18f549af628edcca735a2561586869c9668a085db87429353421385ac8451e7258ce2a7b8d77f8ee35e37ee33599114b6a486e1f50ad8c79215554a474e0b1103ba6d3978de9e7f2c777da2cd3f3a3e59344b4d6c6cd07b76eefeafe43359ce6ab5c300a4e06d4c4b7bbf5f6f247a8e1f6a010000",
    ],
    [
      "ETag",
      "zYlLqpSpOuHeAK+brOPznw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:52 GMT",
      "Server",
      "ESF",
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
      "5b",
      "72",
      "82",
      "30",
      "14",
      "00d0bde4db3a528b40ffa08ac8cb071d0bfe30102f184482094a48a77bafd36dd4b387f38d328c81f3b4a36768d03b1ab257638cc75eab5b765f2ebd1028b795fba15e4bdbc9d821f0174c63e2f211cc063adfb1c45f7ee671c8d76fcc6b6432b050b70a77b5bd574579527c2055e124e6ba01d15f8f62539da879cc1332257dd4cf6baa2aa9e447c7ebc4ca7de92c372d2373826f44dd574c3b0701de9ebe6e38d70cde46beecfd4da4bbe10e6639c8ab164f8c765117b83d5f56fb8c6dec89a0121c6134e1d28aa508f630f4b51ed3a6549d5ba5109a8d9f9efe2f3442205ac280a7e4b17daa1ac608fdd54fbba185c77f0b32060cfdfc026a7127bb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-109-1636475664267",
    },
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
      "3014fd2bc8fbdabc80008914ad594a37a64036425aadd3848c63a85bc0149b565595ffbe6bd374ed26ad9fb07dcfb9e7dc074fe896d57b3447192bee3ada3e7eb8e1193a4154e2025e1fae77ebab4f952b82afebc435250ea7f9d572b10004532c81aba6a403c1bb965031df6d8745cbbb06b79c0f20d160329e0d268ee5d8eed4716cd37181286899af597d0bf46b291b311f8d8ee2c382f3a2a4b861624878f5f23eba37474dcb6f289162f45673043262f48eeac792132c19af17bb2d38e8046d535a615682873fd47d76fa36f790e16a5800f89e118a09e15d2d952f4841789db3a26b7556347f42dae7ab03dafa6b7f951884975d55a735aee889b1c712a7f2b1a1c679bc098d203adfc4e132093651ba5d7df1c3e570b559efc2686b5c7ef163df90382ba9e61a0be354df22b880fe9e0ac96aad9ea867a5fcdca1e0dfc12802480bda075377ece089379e6579e692dcb3a6593ea659e665ee145bd998cc6c6aef338a81a745350bd7bc9e7ac4b1a7f9389d98384b6dcbb35280efe1ea399e9913db9dd8e870821e5a26e919130d17acef10ba8c83c44f937817ad9689af4bc87157cab3de982ae0b547090502e83f351d5494715052ed0ea2c48f97ab24b8f0fb09af6981c9e3f60e669ce3525040e3169a27691bf23d340c45cbd03f03b09ed8b76350a0f9cf27a47aae5cbc6af90b3d81012abb527fd1368983e8b3b673445ce0b2d390fbfe801ab07c0db581ebc32f40c296f659d0f79d1fff40fd534c73dad29abc3f4d00ebc0fb7fdb71f3010cbb0f3a42c21d968708a5425ada2f11d3f53eb3dda939b34ca4c1adfc3b668d6dfbd836954365a415ade57349fde643a5bd58275e401084f947ba5d87dfd27ef5817b040000",
    ],
    [
      "ETag",
      "whULZBm7sIJLT72taM5fZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1636475664267"
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
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf4b7d1d09200c59c2c31094250311c69321e4d8ca186eebbcbb6108e1bbdb9b88464df4e5d676bf76fdff7747784ef2081c5827f14b89f27015a37e34c10c55996ac58f82728560016a1133391493fd7eb01879f566d7d751ded87b7114f77a4ca8708b9900e7089b04d34881f374845c64c86d21a56596afaacc027d284c711eccbcc93de71945269f2c7cdfedfb43385997c64868b1aaf87fb42d4f16ec683dc30d4acc4334bb149276186acfc854222b52ac292a65880a2ab87a114b2a0b21896a5ca935eadd5ac3beb65b9db66db79a7687c99442a113ca195ecc7941d0a4453aa35796093603b20a59f1a63af75c4ea24a8909bd4960b7aa05bf02124392d1ea4faee07db7827fc30776b6e03b27322a737da1eefc07f7b771ece9e7a8811b0c7f104ab3531724f0c6c379e08ea7865b9ea5f70f1ad554121ba9d078d8a8b76eda1dbbfe6eeb2d19abf93b8e96255a100abe1da34483b311a9c2d31b2718cc4d7b020000",
    ],
    [
      "ETag",
      "EaNvvDUHI029Ltdn1vIgdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:53 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `id` < ? LIMIT 1",
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
      jobId: "grouparoo-job-110-1636475664267",
    },
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
      "000002ffa5536d6f9b3010fe2bc8fbb2496d0209812452d44529db90f2d225a4d5b44d893147ea1630b54dabaeca7fdf199abea8d2fa619f3077cf73cf7377f603b9e645428624e6bb9b0ae4fd872b119323029aee30da9996bd60f6c75d84177039cd19f7cec6b3bbd10811dcb014cdcb0c8e95a82403355caf5a3b29aa924a218eb1d0b1e3d8c78ed7f55cbfe7796ec7f391a8204ba7bcb846faa5d6a51ab6db07f1d64e885d06b4e4aac544fe146fdf76daa51457c0b46abfd66ca38c6abfa37a9209463517c568bd42079502b9819cf20c3d3c5393f8f3ebda2d4ef3d60ec1b79c01654c548536beb0041345ca7795acab92e103a97dbe389055300d26913559ace7d1c72dcd0d79fbc9a2cada6c24a82ad3d697e562666d4bd4baa40ad4d6baf8162c03cbda4a6042261b9e6cad9175628de7a718347fbf2adbee320c4dc35918590e3a4940695ed43e221a67603c3cce2a7cbb2243a01ad59ae4c6b73deaf4ed419cc63e4bfbdd5e9cda10c7fdd8efd16e6cb3810b6e1203459e36d56b162d4441fb7e3a481c77e0dba99da60c897d3b4da0efa48e9b80d38bed0eb85e4af647e44e720da75c9542f1665ee4621946c1265aaee7937114d46da4146772da98334dbcf4a9b14904fda3afbdc972814a66f8e13c0a96e349149e07cdbea7b0a3ec7e75831b4f69a600d154d21c34c899487068e46cb10aa370311f4f91512ff1ec805064f8f3e19910dd97f59475fd355a9e5beb1f00e734ab6ac46d73200ed9ef8ffeaf420f4bfc4608deef864dbeaf83e50fd2849690828482bdbf7d04d789f7dfe9e1cd20185f0dea288dff78d998322a4c4273e9785e1b6cd87eafebf9e65a2258ea37397fe01ea66b6a988a9043a11f5b6ade8c19569daad41308937857e6e1fc2b66ff026ac407afb5040000",
    ],
    [
      "ETag",
      "2Lp5EMz4OIWehLmci6PAMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1636475664267"
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
      "c2",
      "30",
      "0c",
      "85",
      "ff8b77a5120556a64a1c568606a243d0d1d3845028a62ba47549dc4da8e2bfcf29bbc4cecb17bf27b77029aa23847028f26b83e6f694236f5c93a06d345b29355516a107c82a1772baa4835ea6dbfaf212e783ebc75cafa3b7cd642284cdbeb15410b6702a501f2d845f2d54aa44f9b6df9b6ea2607cab9db2586d67efb34484928e4e58a571fc1ac533b8efee3d38d321c1131aac3274236b4367cc78e1d25a55d61a3d4b8dc9d04207770fb9a1a65686c813c5f3fdbee707c360347e0e82d120180ba929535c502570fa09e2c3c44a27f42b69c117c074ad043f75e78fc8439768f78f463746bb3624c6169d67ffe13f259789252b9b067b9029d9c6bce0c7fdfe075254cf686a010000",
    ],
    [
      "ETag",
      "CKoblKUTpk8Lg2qMHlPBDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:54 GMT",
      "Server",
      "ESF",
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
      "db",
      "6e82301800e077e9b518ad41e9ee40a8112838f030b9696afd311c44e46031cbde7d66af31bf77f8be919012da9677b7022af4819e0293b11c7bb5615195abc863ddd176c3399b685405652e6e8f72b736edd485bdb43734853b614463e61447ec7c0cfd5eda8e7925ce27bf2e022d0b9332a1baaab6c6a9a760e0eed2f6c5c5f1577b3701df9a9e8621d55548ddf385363ddef88ebfbea58f7a99f732ccaac0591f1488a2d068a467ec1ee7d63e30246c8723afbb5ee0896a923856ab43807764fed869574cbdd350467122c4cc1c3673eebbdbc557bbf42a56f1f1dbdbff854608863a6ba0e5d96bfb4c276484feeaf3ee59c3ebbf05a28106fdfc02f543b8fe19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-111-1636475664267",
    },
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
      "000002ff85536b6fda3014fd2b91f7710512c80390d0ca205d9120b44968374d53641b277509711a3bad50c57fdf8d53ba5695d64fb17dcfb9e7dc479ed18e175b344684670f35ab0e5fee05416788299cc1abf3737771bd96787eb8bd7cf8fa1d2b7f37309f261340f08625f1becc59478abaa24c8e375137ab445de24a880e24ea5896d5b1dc816b7b8eebda7dd703a26479bae4c50ee8774a9572dceb9dc4bb991059ce70c965978afdeb7befb1df2b2b71cfa892bdf79a3d9091bd4f54bfe58262c54531d944e0a096ac4ad81ef31c3cfca36ec9f9fbdc5d8ef7dd0cc08f9c324ca9a80bd5f88214541429cfea4a6745e367a47dbe39a0c85ffab3d8a022aff74552e03d3b33b658e1441d4a665c84eb95b1082ed6e16a1a2fd64112cd2efdd5b43b5b2f37ab20326e2ffdd037142639d35c63629ceb5b0017d0df32a978a1d5e3e6b9517ee9d0e2e3601a02484bd60613cf74b135344724251e4d870387a4262364483c070f88494736b3b78461e06951cdc2852806c3fed0c47d37715caf9fd884d8c9c86156e298c3910bb92c623ae878869e2aaed89ccb5248de7608dd868bd84fe27013cca6b1af4b48719dab796bac29e0ad47050502e83f351d9b2817a0d4b47b11c47e389dc58b1bbf9df09265981ea20798718a73c9008d2b689e62d54a6ca1612898aefc3980f5c4ae4e4189c6bf9f51d3f3c6c59b96bfd26318606357e92f8ae27011fcd0764e881b9cd71af2d81e500996efa036707dfc0348d8d2360bbadef8e12fd43e852c65152be8e7d304b00e7cfeb79d361fc0b0fba02315dc6179a86c5468c5da25e2bade17b6e7d8b635441a5ca90f31c7724f6d6b723419d99e15eaa5a476f3a1d256ac96af2008c2fc03ddaee35f4eaf464c7b040000",
    ],
    [
      "ETag",
      "5XkFQOsaDyWHq+BatEk30w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1636475664267"
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
      "dd4ec2401085df65bcb4448b75314db840052541e4a75e194296760ad576a7ee6e1542787767aba25113bdd9ce4cbf99ce39dd2d3c662a811016d9f2a942bd3958a21dbb6082a6caade14749ca207880562e995caba3617028935eda7b14dda61217ebd48edb6d264cbcc24242b88534c33c3110de6f41c902b92da6bc2ad4bcce3cb09bd215a7d1a43fbce2bca0c4e5c3bbc1a0733ee8c2cedb3726d2ca79cdffa36db6f3e08116134c51a38ad1ed526a7ac0d8f69d4c238b32c786a14ac768a086eb174b4d55293551832b0ddff71bbe381141eb5488a0295a4ce6144b9b9162f86eca0b82252bf309bdb04c100ce83a64c5697d3e73394b6a252eec0f2311d40b7e0534c6a493f99f5cc9fbae24ff860fecdd82ef9c2ca852764ff506b79ddfc6b1a79fa32e3b51f707612c3bb547a2fe4d771a756e468e9bbd4b3fdf5834234d6ca441e7a17f1c9c9db6c4f19bad17e4ace6ef845657e8412cf9765c6716c254e60677afeaf138f37b020000",
    ],
    [
      "ETag",
      "xn/N4+adFfFk6E2n6CxftQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:55 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-112-1636475664267",
    },
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
      "db3014fe2b91f7b269f492b6494aa58a551058b4d2b224054ddbd4da8e1d0c491c6c078450fffb4e12ca4568f014c7e7bb9c9b1fd0b52812344144a4371553f79fae24417b88199cc26d343be1d1f9658ebf0e0c61f8c77129f9c9dd740a0851b334cecb8c75b4ac14657ab28abaa992558995941d10ead8f6a063bb4377e439ae3b1ab81e1035cbf85c14d740bf34a6d4935e6f67de4da54c33864ba1bb54e64ff7bddb41af54f28a51a37baf3d7b60a37b1fb81e6492622364315d459041a5995ab31c8b0c7278a626e4db6bedaec0793705f0ada00c532aabc2d479810495051769a51a553479404d9e2f0e28f2e7fe616c1d2e578bf8f306e73579f3c5c2da5aaf15d35566ace370796a6d4af0bac49ae98d75f1dd0f7dcbda2846a54ad622d95853ebc09a2d8eac67dcc6fa53f5fb430a8179701ac4960df9244c1b5134d9c49864accee4b163c1db41d5046c40ab0daebdbe8bed717f9f70e2513e1e3a84f7192163e2397848fa747fc44609cc1f78a6566f58b890859778c41dda3625fde17064bbdce18331e34ecd74b93de6c998d8d8b6d1760fdd2961d891d0a5d4a2ed1aba0883d85fc7e16a71388bfda60c8ea133476d7275112ff334502480dea96b5b478504a77a04c122f6c3d9611c9cfbedd4e72cc5f43eba81b9739c690668ac70ce0c53a73281a6a1b36514c4c172319b03a319e5d90ea1d1e4f7c33321be2f9b2e9be65b7bb9a3c67f0738c759d5206edb03822e6cf7feaf10c561b038795f625642b520f31750b0e9ad02fab9f2c35fa8bd0a19678a15f4e30d007013f8f8c5ee5e0f80e1fd808f36f00f0b4775ed42156b174fe44d992ddb739cd1be831ab0326f62ae6def3a5c6bd48a2c6785792ca97d3d75c39a50a59f4010847d5934addafe03ad10f4c0bf040000",
    ],
    [
      "ETag",
      "SAGfSVhma+2tbeaKFpofGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1636475664267"
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
      "0002ff2d90416f83300c85ff8b770569b08e4a483dac1d6abba1aa63e33455550a86d1026649184288ff3e27db25719e3ffb3d65825bd5e610c2a52abf7b94e35d89facd1409aabed68aaf8e5a85e0006a5132f95a1ffd78dbbe141b7fec6fcfbb74489b7c58ad9850d9173602c2098a0aeb5c41f839412b1ae4b1f359da8d8ce9b133cafef0116da384858672231cd2387e5ac711cca7d9812b5d122c50629ba159d949ba62a6f726ad124d57a3aba897192ab0b06d9492fa4e48229715d7f37cd70b1e82c5f23108167eb064b2a64ce88a5a86d377601f4d5ad4090d9c163c06a42d397861cf1f96ef4da2d33fba1e35aaa324365698dbaef5df90c9a439ab963d3a9009fe8d5da5ffdef32ff2d4750d6a010000",
    ],
    [
      "ETag",
      "KlP2LGnJfC2yukDHUwUmdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:55 GMT",
      "Server",
      "ESF",
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
      "ffedd34d7282300040e1bb642d8c8088e94e4450a04140d061c3d0104ab40308293f717af732bd46fdf66ff99e20c398745dcaea3ba9c01b9832198a58749a8d6e0e34b6ae5a7fd8a1a5992b300e5095ef5d6a30ca4e658c84ce79e4facda2c8b29121f377bb516ccd37473ec7c12405dfbd4b57a5620c02896c145f22cca2eb411b8dcc57880c1f113c785f955b269e824b976beab01d1d2b83777d37d6e3aaf6cce2b4dbdc4e7bf5c3ae25696b59c2a68a617b2681174c7ccd6a7ac1c3512b125798125dba3bed318c421296b9c75b9543f2c0a690a2282cfcf327ea97682dbebcfc5f6001c8d8d09674299d6f57540817e06ffd944d0d99ffd749d69216fcfc023b91fae519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-113-1636475664267",
    },
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
      "14",
      "fd2b64f6b58a888a9a98adb1744ba3b88bd8a6d96cc8305ce854642833d8348dff7d2f43edb669b27d6266ee39f79cfbc10bd9f122215312f3ecb186eaf9db8388c9190145337cadc687eba077bbba5ec4a5b9bedb3d7ac1e52e9bcd10c11b96a4fb32878e1475c5404eb79b6e5689baa495101d4cd4b12cbb638decd1c0198e4683fec841a2843c5df26287f47ba54a3935cd9378371322cb81965c7699d8bfbd9b87be5956e2019892e6474d1365a4f985eaf75c30aab82866db0d3aa8255411ec29cfd1c33f6a129f7fccdde574dfcd107ce00c2863a22e54e30b533051a43cab2b9d954c5f88f6f9ee4036eed25d84061379bd2fa282eee1cc48a8a2917a2ec1b80cd62bc3f32fd7c16a1e7a6b3fda2caedcd5bcbb582fb72b7f63dc5eb9816b281ae7a0b9c6cc38d7371f2fa89f8054bcd0ea61f3dc28bf76c8fb3c988680d212da60e4f446d41af726711a3b2c1ddbc338ed411c8f636748edb8c7260318243150e46951cda2852868620f13873951620f201ac0d08ee2c98446963d70fa0e4b2ccbea91e31979aab8820b2e4b2179db21721b78a11b85c1d65fcc43579790d23a5717adb1a680f71e151688a0ffd4746ca25ca052d36ecf0fdd60be08bd1bb79df01232ca9e378f38e394e612104d2b6c9e826a25126c18f1e72bf702c17a623f4f4149a6bf5f48d3f3c6c5bb96bfd1431c606357e92fd98481e7ffd0764e881b9ad71a72680fa444cbf7581bba3efe41246e699b85fcdabac11d699f0248a182827d3d4d04ebc0d77fdb69f3118cbb8f3a52e11d9787c9468555d02e11d7f5beb2916fd913a2c195fa14ebdbcea96d4d8e2623eca150af25b59b8f95b662b57c036110e7efeb761dff02dc6a67ad7b040000",
    ],
    [
      "ETag",
      "r8vJR0WMJCbp/OYkqIRFkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1636475664267"
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
      "83",
      "40",
      "0c",
      "86",
      "ff",
      "4b",
      "fdcae210c60c891fb63975099bca50638c596e50362650bc3b34cbb2ff6e0fe7346aa25f8eb63c2d7d5f6e034f5999800ff36cf15ca35c1f2c505f9b204455e75af1a3a2522158805a2c986cdbcf7783b4e35eb69df57d703877747f7c7b7d72c2848a975808f037906698270afc870d94a2406e8b29af8b72d66416e875658ad3281c4dce392f2831f9e426087afd60085b6bdf98082d660dff8fb6c7ad052b9a8798a2c43246b34b256985b11e19994a14558e2d45b58c514103372f1692ea4a48a216575ab6edb46ccff1dc6ec7f3dc23afcb644eb1d019950cdf4c7941d0a4451ed22bcb048f01d984ac386dce172e6749a3c484a349e4b9cd825f018931c964f62757f1be4bc1bfe103db59f09d1305d5a5de5367c165efb771ece9e7a8d35e34fc4128cd4eed9168341e4ea3def8ca708f3be9fdb5467525898d54683cb4dbee71a7ebb5df6d1d90b19abfe36b59a305b1e0db719169f053912bdcbe01a0230b6e7b020000",
    ],
    [
      "ETag",
      "01qWCf54O03yYL/b3tBMVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:56 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-114-1636475664267",
    },
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
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c87bd9d4260192401229eaa2847568b9b484b49ab629b18da1ee0053db74eaaafcf71da0e965d3da278ccf773937dfa39f3c8fd008119edc944cdebdbb16041d23a67102b767b3d35950868ba3a38bdfdd35f9e22cae8eecf3f11810bc62299c15296b29514acad468b36e275294059642b440a86559bd96e5749d9edb779c9eedb840542c8de73cff09f42bad0b35ea740ee6ed44882465b8e0aa4d45f678dfb9b53b8514d78c6ad579e9d9011bd579c3f52415146b2ef2f1660d19948ac92dcb304f2187276a443ebed46e739cb51300df72ca30a5a2cc759517485091c73c2965ad8a46f7a8cef3d901adbdb9370d8de96ab30cdfef705691771f0cac8ced563255a6daf814ac16c6ae00af2bac98da19979fbdc0338c9d6454c868cba39d31364e8cc972663ce176c6f7d234bb1402737fe1878605f9444c699ed7d98498a4accae4a163febf83aa0858835613dcbaa683ad8139243171693ce8f6496c324206c4ede32e31e9b0c77a11611878ba52af5938871ed884388e15450313dbb44f29c136b39d816bc125358751dcb7dd41cf42fb63f44b72cd665c1542f1a66be832f0436f1b069be574127a75193186cecc9ae4aa229ee7a9a14800bd52d7be8a72014ed508fc65e8059369e85f78cdd4e72cc1f46e7d03738f71aa18a0b1c419d34c2e44c4aa855fadfdd05f2d277360d4a33c3b20141a7dbb7f22847745dd655d7f2b2fa757fb1f0017382d6bc46d7340d085fdf1ff15d661e02f4f5f97c005540b323f00059bde28a0f38d177c45cd55c06226594edfde0000d781b75fece1f50018de0ff8280dffb07054552e54b266f1785697d9b0813f180e510d96faef986b5ad6a1c39546a5c832",
      "96eb87929ad75335ac0e95ea110441d89765ddaafd1fdad72b02bf040000",
    ],
    [
      "ETag",
      "PDGDRuTM++Vz3SbK6Mh+2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1636475664267"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90d14e83401045ff657c85442a5225e9436b506b0829d82626a669b630201518babb5809e1df9da5beecccde3d3bf76606f82e9b0c7c3896c5b943d9df14a863d324a8ba4a2b2e2d350ac102d4a230641f2f7f376fe16c7b7e6c2fcf1f31a9e8e1b25830a1d22fac05f803e425569902ff738046d4c8df0e07394d644cf7ad51d6d136780912166aca8c10edc270b90a0318f7a305273a2698a3c4264533b29574c254af4d5a25eab6425b5127535430c1d34321a96b8524b259b11dc7b51defce73e7f79ee7cebc399315a54297d430bc7b07f6d1a44595d085d382c3809c5a0e9e4fe70fcb9e49b4ff4757bd46b591c4c60a8de7edd5ff894c26cd59b5ecd08254f0365e4b7dbd8f7fff9196a86a010000",
    ],
    [
      "ETag",
      "byQAxPJL2Tq9pwFXQosN8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:57 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb64ad0c1f29a43b41b12a88a08861c3a0a48a2949800062a777afd36bd47787f70db2f319374d2a18c114bc832153a17496d6dcb49cfe46903b08fb708d732127154cfccffb579ec2dc4e8cfdc9d5e590b93526befa765a960175239598b2ca103f2c2613c4e04433511b76743e23158d1485f23e571cb9f37c43bf30232ac786f0b61a4d1cf8a1ce5abaefb320520ebb6ed7f0182d70c5348b287ed8d8ccbc3243a5be5ce26d1f6bcaa2bc5cf4041e4565b269805745a7ad6e286d4924aacd833de66b8b6f4eb94777768e968f718ddae3e057baf4f2f27f8111c0775ed4b8498be7764d877004feeaa762e0f8f9dfc2598d6bf0f30bf6c547db19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-115-1636475664267",
    },
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
      "0000000002ff85536b6f9b3014fd2bc8fbda3c081068a4688d52baa225a403d26e9a26648ca1ee08a6d8744aabfcf75d9ba66b5569151fc0bee7dc73ee8327f49bd5399aa18c95f71d6df79fee78864e1095b884dbc5776b959b13ffd1292ebdc7ab2b7fb3df7f2de7734030c51278d754742078d7122a66db7858b6bc6b70cbf900120d4cd31998536b6abbce746a4fa62e1005ad8a15ab7f03fd56ca46cc46a3a3f8b0e4bcac286e981812be7bb91f3d4c464dcbef289162f45673043262f481eae78a132c19afe7db181c7482b629dd615681877fd43c3b7b9b7bc8f06e5802f881118a09e15d2d952f4841785db0b26b7556347b42dae7ab0f14fb2b7f99188457ddae4e6bbca327468e254ee5bea1c645b4591b4178b189d68b24d88469bcbcf4d78be172b3daaec3d8b8b9f423df9038aba8e61a73e34c9f4238807e4e8564b5564fd4b5527eee50f07e308a00d282f6c1d41d4fb1e98d4fb3227349e1594e568c69967999eb602b1b93539bda794631f0b4a866e19ad78e939bd8cd71eab99693da99e7a5d872714a0a32b15defd435a7393a9ca03f2d93f49c89860bd67708dd4441e2a749b40d978bc4d72514b8abe4796f4c15f0daa3840201f49f9a0e2aca3828a9760761e2478b65125cfbfd8457b4c4641fdfc38c0b5c090a68dc42f3246dd73c8786a170b1f6cf01ac2776750c0a34fbf98454cf958b572d7fa12730406557ea378a932808bf683b47c435ae3a0d79e83f5003966fa136707df80548d8d23e0bfab6f5a31fa8bf8a68415b5a938fa709601df8f86f3b6e3e8061f741474838c3f210a154484bfb2562bade67b67a3c1b69702bdfc5dcb1756c9bcaa132d21dade57349fde643a5bd58275e401084f987ba5d87bf8bfe39fa7b040000",
    ],
    [
      "ETag",
      "AX3Ld12Ez5fH8zPPEOyyKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1636475664267"
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
      "0000000002ff8d92614f83400c86ff4bfdca926d326648f661ea7424383786d168cc7283c29840f1ee509765ffdd1eea346aa25f8eb63c2d7d5f6e0b0f5919830bcb2c7dac516e0e52d4331304a8ea5c2b7e54542a040b508b94c9f1f5dcb76fbb2f9b4375a26e02b1aebcfa71361830a1a2151602dc2d2419e6b102f76e0ba52890db22caeba25c3499057a5399e23c0cbcc939e705c5269f5cf9fef0d81fc1ceda37c6428b45c3ffa3ed7e67c19a96012628b18cd0ec52495a63a43d235389a2cab1a5a896112a68e0e6452aa9ae84246a71a5d5e9f45a1de7d0b1fb3dc7b1bb4e9fc99c22a1332a19be9af382a0498b3ca06796090e03b2095971d29c4f5ccee2468909bd49e8d8cd825f018911c978f12757f1be2bc1bfe1037bb7e03b270aaa4bbda7cefccbe16fe3d8d3cf51a7c370f483509a9dda23a177319a87c38ba9e1eedfa51f6f34aaa9243652a1f1b0d3b68f7a7da7fd66eb0919abf93bae96355a1009be1de34c839b885ce1ee1568dc4a1c7b020000",
    ],
    [
      "ETag",
      "HWSL4Z2xy3sCsXRajpIuqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:58 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `date` < ? LIMIT 1",
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
      jobId: "grouparoo-job-116-1636475664267",
    },
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
      "3010fe2bc8fbb2694d0209812452d44509eb9052d211d26adaa6c49883ba054cb1e91455f9ef3ba0595b556b3f61ee9e97bbf3f981dcf23c221312f2e4ae8272ffe14684e48480a2094663c73b2b0a95dd469f67eb4b703c7f5fad67d3292278cd92342b52e84851950ce464b3ee26a5a80a5a0ad141a18e61581dc31a58a63db42cb36fd9489490c64b9edf22fd5aa9424e7abda3793711224981165c7699c8fec57bf7fd5e518a1b604af65e7af6d046f6de713d4d05a38a8b7cba5963059584720b19e529d6f0448dc22f2fb5bb9c66dd04c1f79c01654c54b9aaeb420926f2982755d9a892c90369ea7c76206b67e9cc036dbeda78c1c71dcd6af2ee9346a5b6dd9620ab54695ffdd5b9b62bd0eb9a4a903bedea9be33b9ab62b818932daf268a74db5536de62d301851053bed57a5eb0386c1a57bee069a81b5442015cf9b4a021aa65057f1382df7f525d504aad0af4d6e6ddda2c6481f877168b378341886b10e61380aed211d843a1b9b60462150e4a95abd61d15ce4601b218da93eeec7809cb1a5339dc5161d9b2c8ec723d38e86e628627d7238217f4aae60c16521246f2746ae7c3770b681bff1e6b3c069da88294e65d1165737f1bc4e854d22e88dbe0e75960b74aac7ef7a81e3cfe6817be9b437be8484b2fdfa0eef3ca6a90444d39266a0a03c17110e8d5cacd66ee0aebcd91219cd355e1c11924c7e3e3c11827dd14c5935dfdacb321bff23e092a65583b86f0fc42087c3c9ff1516f508de14e8eb7dbda3f73bc610957e231417bd1521df378eff83b4211f62282167ef2f01829bc4fb0ff6f878108ccf077da4c27fdc39266b175642bb7b3c6b3a6dd9f67034d42dd2804bf53a37368f43ae356a45c820578f2db58fa79e5993aae43f102671653cd73bc3ec5fe8945f47be040000",
    ],
    [
      "ETag",
      "fENGpptmkd+ASVeENRyuSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1636475664267"
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
      "c3",
      "30",
      "0c",
      "85",
      "ff",
      "8b39b24a94950e55da81c10493a6692b9403689ab2d62bddda3a240ea89afadf713a2eb1f3f2c5efc96738556d0109ecabf2dba1e9ae4ae48d6f52b4ae662b45536b114680ac4a21237d1de9d3a6e588dfb3c2b9a7f5e2fea39c4e85b0f917360a92331c2aac0b0bc9e7195ad5a07cdbedcc305130eeb45716abb7f9f33c15a1a1c20bab6cb97c982de7d06ffb111c699fe2010db639fa91dad011735ef8b45635bac6c09233395a18e0e1a134e4b4324481284118c641188fe3687217c7d16d3c11b2a65c7145adc0d92b880f13ab3aa55f490ba100666825f861387f441efb44db7f74d631dab52131b6e83d6f2efe8fe433b16465e37004b9926dbc547cb9f77f9735382d6a010000",
    ],
    [
      "ETag",
      "4p+4pkQnt4tVUduuDPI8Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:58 GMT",
      "Server",
      "ESF",
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
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "d9",
      "e730895b6cdfea1a4ca526589e0c6bb74462054174faefcdf4379af30fe71be4189361c846d69016bc81472e401ef35ea76ad65cb963184a4e2c26985ecde2fd72859fa15568a2e2c15564570a9b59363297e2b2b226d139a6080f88e942bb9d1433da0bd9b90d0e9ded472b34c8762aceae834ffe47698c178b735c419a95e9b8d3915025657a3c2df61c16391b98aaed6241b653ae8e9ccc08dca5f24caa4025da7bdb34b851555e6f7bb19e588c3a3f5e1bc8ee738f510325dcd032f9a215b2acc03fdc89aafb2b2235d731bd6561cabfbcfc5f6003c8d2d53d19b2fab95d9421dc80bffad9f8e8c8f3bf46f29ef4e0e7178bea223619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-117-1636475664267",
    },
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
      "9b3014fd2bc87b5c134242428814ad514257a4403a425a4dd3846c63a85bc00c9b565595ffbe8b69ba5695d6a7e07bcfb9e7dc8f3ca37b5ea5688108cfffb4ac79fa7227083a434ce11ca28fd36d4bbfeedc5d705fa7d1e6aabd328bdbc7e51210bc63495cd6051b48d13694c9c5613fcc1bd1d6b8116200850696e50cacd964663bd3d9cc1ecf1c204a56645b5edd03fd56a95a2e4cf3243ecc85c80b866b2e875494af71f3616cd68db8635449f3bda60932d2fc44f55b2128565c54cbc31e1cb49235092b312fc0c33f6a4acedfd71e725c0e73003f70ca30a5a2ad54e70b4a5051653c6f1b5d152d9e91f6f9e603edbdadb78e0d2a8ab6ac920a97eccc48b1c2897aaa997111ed02c30f2f7651b08afd5d98ecd7975eb01aae77db4310ee8d9b4b2ff20c8549c134d7581ae7fa15c203f4532615afb47adc853be59709f91f17d311405ab23e9938a319b6e6239764c4a1d97c3225d988113227ce144fc888ba36b353c230f0b4a866e14a54c41ab9a993b9c99cb9a3c4766d2799db239240746c4f5d3cb1888d8e67e8b1e18a6db8ac85e4fd84d04de4c75e12478770bd8a3ddd4286db426d7a635d036f3d2a681040ffe9e9d865b900a56edc7e187bd16a1dfbd75ebfe12dcb317ddaff811d67b8900cd0b881e129d604228581a17015781b00eb8d5d9d92122d7e3da36ee69d8b37237fa5c7b0c0ceaed2bf681f477ef85ddb3921ae71d16ac843ff816ab07c0bbd81ebe36f40c295f655d08f8317fd447d2862196b58453fdf268075e2f37fdbe9f2010cb70f3a52c11b8e87ca4e8536ac3f22aefb7d613b53d7b2e648831bf521379e38a7b17535ba8aac64957a69a9bf7ce8b4176be52b0892b0ff508febf81737ddfc487b040000",
    ],
    [
      "ETag",
      "w5Luc+O9OMkpdRDPuP/lhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1636475664267"
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
      "4e83401085df65bc85a4ad2d35245e50ad95a4d6fea05e18d32ccb802830b8bb689aa6efee2c6a356aa237cbccf0cd30e7b05b78ccab047c88f3eca941b539c8d02c6cb044dd1446f3a3a64a23388046644c4ecee39ec41b3398abe00c652c47e9e23a3b3e6642cb7b2c05f85b48732c120dfeed162a5122b7492a9ab25ab799036653dbe22a5a86b309e72525369f5d4da7c1683a869db36f4c8411eb96ff47dbddce81078a9798a2c24aa2dda556f480d28456a616655da0aba9511235b470fb2253d4d44211b95c71bbdda1dbf50ebdfe70e079fd9e3764b220294c4e15c3572b5e100c19512ce9856582c7806a43569cb6e73397f3a45562c3701679fd76c1af8042492a59ffc9d5bcefbde0dff081bd5bf09d13253595d95367d3cbe0b771ece9e7a8d3201aff20b461a7f648145e8c57517031b7dcddbbf4d1c6a09e2b6223355a0fbb9dfed160e875de6c3d216b357fc737aa4107a4e0db719e1bf0535168dcbd02e608a7897b020000",
    ],
    [
      "ETag",
      "GHb2ceWt5PrAFecbcBfQVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:00 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `stamp` < ? LIMIT 1",
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
      jobId: "grouparoo-job-118-1636475664267",
    },
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
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7bd9a426e11e1a29eab2947668b97484b4eb2e4a8c31d42b608a4db2aeca7fdf019a5e54ad7d02f97cb7737c7c87ae591ea1010a597253d1f2f6dd6f1ea20344254ee0744b3f8db7d926d74e2e4fcdd36f7fbffcb9f46fb6c3212058cd12382b52da11bc2a091583e5a29b94bc2a70c97907843a9ae67434dbb0cdbe65dba66ef78128681a4f587e0df42b290b31e8f5f6e6dd84f324a5b860a24b78f670dedbe8bda2e4bf2991a2f7dcb30736a2f786eb51ca09968ce7c3e502125482962b9a61964286476a147e7caedd6538eb2600de30423121bcca659d0b2408cf63965465a38a0677a8c9f9e4072ddc893b0e94f17c390bdeaf715693d71f142c94d5aaa4a24aa572e2cfa7caba00af2b2ca8582b179f5ddf55947549092fa3158bd6ca50395246b363381412c2ad959f95aa1a044e27ded40b140dc2445448963751021ca6b48e713f2eefe52dd5042cc1b02daefaaa8d35473d0ce3b04f62c7b0c258a561e8847d0b1ba14a0e4d6a4621c5c093b57ac3c239cf6ddd08b169684e6c3a8e1a5bb18e631beb6aa86911b1e3c8b634cb32a208ed0ed0b664921e335170c1da91a10bdf0bdc55e02f67e351e0366dc418c672dc86ab9b789a534293007aa5af5d5d651c9ceaf97bb3c0f547e3c03b77db2b9fd00493dbc50d5c7a8c5341018d4b9c5149cb298f6068e86cbef0026f3e1b4d80d1dce3d91e21d0e0c7dd2321b82d9a29cbe65b7bd966e3bf079ce3b46a109bf6076968b73bf8bf42e04ddd45309a9ebdaea2abbada51f58e66059a3ed08c8166765555fd0ee2bf8008cbdfeaa2af4bd7bf44ed914f635ad29cbcbd17006e0a6f3fe2fd830230",
      "3c29f081ed940cd69088da8594b45d479635cdb7ecbead6a7d1b35e052bea8e98eb39f7bad512bd28ce6f2bea5f641d5636c4a9578004111b668e6cd4ea1fa0f19e77dcad2040000",
    ],
    [
      "ETag",
      "weBCwmvn1FYG4GXzKxYRqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1636475664267"
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
      "c2",
      "30",
      "0c",
      "85",
      "ff",
      "8b",
      "77",
      "a5d23abab02171a0ac6248151a659c1042a135a1acadb324656215ff7d4ed925765ebef83db983afb229600c87527db768ae0f0addca3719dab672968ba6c6220c009d544cc642fdced565a653b18a92b5566fafe5693a993061f313d612c61d1c4bac0a0be36d078dac91bfedf7a69fc898bb6aaf2c969fc93cc958a8a9f0c27293a6d3384de0b6bb0de04c870c8f68b0c9d18fd486ce98bb854f6b65ad2b0c2cb526470b3ddc3f2843ad968628602508c397201443118d9e85889ec488c98a72e94a6a18deac817d1c395965f4c3692164c0f42d073ff6e785e5a14fb4fb47e3ab43fb61888d2d7acfc7bbff8c7c26c7599d697100b9e46dbc97ee7ebffd015e76b8d86a010000",
    ],
    [
      "ETag",
      "B6gzGgvCpL6Q4ESpgD9ihA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:00 GMT",
      "Server",
      "ESF",
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
      "02ffedd35b7282301400d0bde45b1d5110e85f1841045111ed839f0c4d2e3130f20a3568a77bafd36dd4b387f38d324a414ad2d72554e805ddb2993da193b0b11c4f0978375a955f849bdecf10bb16af2d3f8b2b3ebe634d571f7eb93161ea05af9a4f9af154da617b92ba706d3eaf7011166922dac4357070bc1e751eb32f69985e5f17a405d66bbabe74e51a2fd86c37bb31acb1390e86f5fe725fae0adbf4820d758bd69cc64c55393b3609cfa94af7f009e3da81e82d3de3f8ba1bf0363fa9d0e74947226194f18252c11a62aaeec0b85f0e3d8e2ce7ccb7c3ca8c2e6af2f4f47fa11182a1111d48221edbe7866d8fd05f7dd2df1a78fc7720eba0433fbfa532737d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-119-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d0224818448d11aa574454ac80aa4d5344dc83686ba05ccb0e95455f9efbb98a66b37697dc2f63de79e733f78460fbcced012115efcec58fbf4e95e10748698c205bc06aec8acca55735c46f6d5216eb6c1a573bd5a0182f72c89aba6642329ba9632b93cc4e3a2155d835b2146906864dbdec876a7ee6ceeb8ee6ce2ce812859996f79fd00f43ba51ab934cd93f8b810a228196eb81c5351bdbe9b8f13b369c53da34a9aef354d9091e607aa9f4b41b1e2a25e1d6270d049d6a6acc2bc040f7fa819397f9f7bcc71352e00fcc829c3948aae56bd2f4841459df3a26b7556b47c46dae79b038afdadbf490c2acaaeaad31a57ecccc8b0c2a97a6a987119ed7746105eeea3dd3a09f6611a6faefcdd7abcd96f0fbb30366eaffcc837142625d35c63659ceb5b0817d0cf9854bcd6ea49ffdc2bbf7428f877303d01a4251b82e9dc72b1bdb03c929339cd175387e416236441e60e9e128b7a3336cb08c3c0d3a29a856b514f7066616f91a72473bc7446dc3cc5b38593ba844d26d4f6a63675d1f10cfd6ab962175c3642f2a143e8360a123f4da243b85927be2e21c75da92e06637d016f3d2a281040ffa9e9d847b900a5bedd4198f8d17a930437fe30e12d2b307d8a7fc28c735c4a0668dc42f3146b77228386a170bdf32f00ac27f6f5149468f9fd19f53def5dbc69f92b3d8101f67695fea2388982f08bb67342dce0b2d390c7e1801ab07c07b581ebe30f40c2960e59d0f5c18fbea1e12962396b594d3f9e268075e0e3bfedb4f90086dd071da9e00ecb4365af425b362c11d7f5beb0e7aee55916d2e056fd1db32ddb39b5adcfd1676415abd54b49c3e643a58358275f411084f987ba5dc7dfba5411257b040000",
    ],
    [
      "ETag",
      "I6od0m6t7alR1HUSpLIF5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1636475664267"
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
      "4f",
      "c2",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d",
      "1d11740c59c2c354d49981c0860f1a42ceade0745be7dd4d4208dfddde44346aa22fb7b6fbb5ebffbfdbc0735a24e0c243ba7ca950ae0f96a8c72698a0aa32adf85152a1102c402d964c8ec36e70dd3c3c966d3bbc5d776feffcd16ae8f57a4ca8f8117301ee061629668902f77e0385c891db62caaabc98d799057a5d9a62184dfce125e73925261f4e83c03b0dfab0b5f68d89d0625ef3ff689b6d2d78a287092e506211a3d9a594f484b1f68d4c25f232c386a24ac6a8a086eb174b4955292451832b8d56abdb6839c78edd693b8e7de47498cc28163aa582e169c80b82262db209ad5826380cc83a64c58bfa7ce5729ad44a4ce80f23c7ae17fc0a488c4926f33fb992f77d14fc1b3eb09d05df39915355e83d7511dc78bf8d634f3f479d7b51ff07a1343bb547227fd00f236f3032dc6c27fd74ad518d24b1910a8d87ada67dd2ee38cd775bcfc858cddf71b5acd08258f0edb84a35b80b9129dcbe018efac0d97b020000",
    ],
    [
      "ETag",
      "QS9LJ0/3r54SVy9VZIPwNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:01 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `record_id` = ? AND  `amount` < ? LIMIT 1",
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
      jobId: "grouparoo-job-120-1636475664267",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b6f9b3014fe2bc87bd9a4364008e422455d94d00d2d972e21eda66d4a6c63a85bc0d436ada22aff7d07687a51b5e529c4e7bbf99ce34774cbf3080d10e1c95dc9e4eec38d20e804318d1338c5d7c9e2477bf7adf330b11dd31b796296150fc3212078c552382b5276aa4429295383f5aa95485116580a710a42a776db3ab53dc7eb745dcfebb4bd2e10154be329cf6f817ead75a106a679306f25422429c305572d2ab2e773f3be6d1652dc30aa95f9d6d3041b651e713d4b05c59a8b7cb85e41825231b96119e6296478a146e4f35bed16c7592b01f03da70c532aca5c57b940828a3ce649296b5534784475ce571f68e54ffd71688c17eb79f8718bb38abcfd6460656c3692a932d5c6f9723133b605785d63c5d4d6b8faea2f7dc3d84a46858c363cda1a43e3cc18cd2770f82461fc2e2dcba1703c0d664168d89026624af3bcce126292b22ac753bf82f763aa0858836353dc742d0fdb3dab4f62d2a571cf71496c31427aa4eb628758b4df619d88300c3c5da9d72c9c8bdc69d35e9f30daeeb11e8d3c48e5dad8a2d4757127ee11d28f6d27762217ed4fd083e49a4db82a84e24dcfd0d53208fd4db85ccfc7a3d0afaf1163e8cba409575de2754e0d9704d07feeb5afaa5c80533580601efacbd1380c2efd66e6539660ba5bddc1d4639c2a06682c71c63493331141d3d0c5621584c1623e9a02a31ee4c501a1d0e0d7e30b21dc15759775fd5b79799ddaff00b8c4695923ee9b0f64a3fdfee4df0ae7d3c5e8b846cb05c4fe0f8060cf1b05f47ded2f7fa2e668c96226594e8f6f0080ebc2f1f77a783b0086d7033e4ac37f5838aa2a172a59b3783cab2336ecae677b7d0bd560a9dfd5ba7dfbd0e14aa3526419cbf5d3959ab75335ac2e95ea190445d8977930ff02d5bfc955c2a4bd040000",
    ],
    [
      "ETag",
      "ahgOX2yK4wD13/6A6oMmpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1636475664267"
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
      "c2",
      "30",
      "0c",
      "85dfc5bba512145610121703a181c6d856603f9a104a5bb70ba47597a4a0aae2dde794ddc4cec9179f233770924502638864f65ba1aeef32b46fae09d154ca1a2e251506a1036845c6e4fb697479e97f6d3ee5c768e1cf9ea3b37a0a2e93091326fec15cc0b88154a24a0c8cbf1b28448efced70d0ed44c66c5d3a65b9dece1fe7210b39254e58ef56ab87e96a0ed7fdb503478a424c516311a31b596a3a626c972ead1179a9d03354e9180db470fb9069aa4aa1893c56bc9edff57a413f180cef8360e007432615c5c24a2a18de6d807d2c59a142ba705ae831a0db9683a7ed7966d97789f6ffe8b4b6685e35b1b141e7d9bdf9cfc865b29cd5ea0a3b100bdec642dadbfdfa07929e4a136a010000",
    ],
    [
      "ETag",
      "Vk8wO3YSXiW8H2CMbvlK6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:02 GMT",
      "Server",
      "ESF",
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
