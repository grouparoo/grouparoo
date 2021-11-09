const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475664274";

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
      "417282300000c0bfe46c184588a437114441052d0e940b1320a5018b84a42076faf73afd46dd3fec3720794e8548e5b5a60d78012351b1922b5e6b98eba1f4dc147652d02de3f2d56ea39e31ecb29b03e5e2881da4e1cd48ab7d12d51ff51622f4753c75308ed090a9f119ae50743084c6b9115e622a67b1a55d78bf5dcb1d64f5beac3297133d5c58a6b0ed7b23ed1dabf27279cfb424193c82dc538fdb26e6853e3b045356bc41dfd9e5e9b10b4ba2abd65e77db20f59c3a4afcebfcd325731644c686a16478c776a2ea6a358df935e3abac398da2f2cfe6a5c895a7a7ff0b4c00bdb5aca322658fed731de309f8ab9fcab1a58fff26251dedc0cf2f5e3aa73519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-1-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6fda3014fd2b91f7b5bc42080f09ad0cd21509c21642db699a22c7b9c9dc8698da0e15aaf8efbb710a6b55a9fd14dbf79c7bce7de4993cf022212312f3ecb10479f8722f62724140d30c5fed5bd7ef3cee8577d7499dbb847e9b05f7876c3c4604af588a6e7739349428250335daac9b9914e58e4a211a98a8d16974dcaeebf47baeebd87d07690af274c18b0724ffd57aa746add649ba990991e540775c3599d89edf5b7bbbb593e21e9856adb78a2d1451ad0f35bfe68251cd4531deac51bf542023d8529ea383ffc424be7c9bb9c9e9b6992178cf1950c64459e8ca15a660a24879564a93958c9e8971f9ea40d6dec29b86161379b92da2826ee1c24aa8a6913eecc0ba0a564b6bee5fad82e5249caffc683dbdf69693e674b5d82cfdb5757bed059ea5699c83e15a63ebd2dc7cbca07e024af3c2a887d573a5fcd29ff9fba1540494565007a37edba59d417b18a7719fa5836e2f4edb10c783b8dfa3ddb8cd860e38490c147946d4b068218ac4e9c0c0a17664b77b2c72865d16c51d7b10f5bb696ad35ebbe70c5372bc204f926b9871b5138ad71d22b7c13cf4a230d8f8d349e89912525ae67a561bab0a78ed51638108faa0a66315e50295aa76cffdd00b26d3707ee3d5135e4046d961fd88334e69ae00d15462f334c8a548b061c49f2cbd1982cdc47e9c828a8c7e3f93aae7958b572d3fd3431c6065579b2f5987c1dcff6eec9c1037342f0d645f1f88042664829e8f7f10871b5ae7203f375ef08bd44f01a420a1609fcf12c126f0d97f76da7a84e2dea38ad278c7c561aad26012ea05e2a6d633db751c9b18b0d4ef62bd817b6a5995a3ca085b28f44b41f5d6639db558a9ce200ce2ec7dd3aae33f9205637673040000",
    ],
    [
      "ETag",
      "2W6N1qvoEX1f4XdaBDRjyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93616f9b301086ff8bf79548cd42c986d40fa4cbd24c34e9089db4551572ed83ba333e669b4c5994ffbe8376d9d44ea25fe0eefc9cb87bfdb267df95912c6677aafad182ddbda9c07fee820c5cabbda35783c6010b18785e1139dd2cb2e4d7e4d3b7449f7fad16e197ddfb85a8cece8870e21e6acee23d2b1568e9587cb36786d7406d02755b9ba2cf02e6774d57dce4d972b5a0bc46d9e5abeb344d66e99c1d8263a3e49e173dff8ab6db43c01ef02e83122c1801dd2c8dc507107ed9ade978dd6818396cad00c77ab83fa82cb60db78823aa8cc6a3713489c2e96914856fa721711a05f70a0da1d71b1a8f79f45c67f8939664e30911b68f69e1b27f6ea9ae64bf48172e577914f6f3fd0b7021b035be18044b659d7f14ef0ff824c27352f3578274534a0f411518097688524dc1a5b4e0dc2089aee04d73c466eb75fa5215232d2a390c6ed500a0fdf6087c4cd7c9ffa4257ffdd5ea4392cf5f10ce936b8e48bebc9c6ff2e4f2aae36e9f8c30db79705716c9540e3a3f8d4fc277a7d3e8e4d162e7d8d98ebe137bdb42c004a73fe5427916975c3b38fc06dc3ecd0a87030000",
    ],
    [
      "ETag",
      "7SGRAz3JZAlCYgG4Vy9Gcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `id` as __pk, `first_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3010fd2a91f7cf26f577d3a4ad845805190b2b294b53109ba6d6712e99218d83ed1475a8df7d978402dd24902aa5e7f7debdbbf3f991dcf12c226312f2e4be00b9fd702b42d220a06982a7e7d1e0f6c7d68a44f26df627dbdc9de767f7f9c3d1113278a952749da7d054a2900cd478316f255214399542343151b3d7ec5a7dcbb4079665f66c13650ad278cab33b14ffd63a57e3767b6fdd4a844852a039572d26d6cfe7ed4daf9d4b710b4cabf6a1631b4d54fb4dcfe35430aab9c88e1673f42f14c825ac294fb1821761147e3eccdce274dd4a90bce10c2863a2c8745915a660228b7952c82a2b193f92aaca577fc8dc993a2781b1e2d1caa0ca582ef3bb86b18ab9547a99d135ac8c2ffeecc258496042466a655c7f757cc7a805ae672c3ccf9907c6c7e34f681781d23cabcc021aa6501a3d8dc3fdff0e4a01d554410d2eed8e45bbc3ce288c439bc5c3fe208c3b1086c3d01ed07ed8612313cc28048a3a5d66af54341399494d3ab47a6607ec8139b2fab16dc57607fa111b9a2cea519b75e9d0b418d935c883e41a4eb9ca85e2f550c8b5ef06ce32f017dec92470aa36625aa4fab42eae6ce2759d1a9b44d21b7ded4a940b742a27ec7a81e34f4e02f7caa92f750a0965dbf93d5e6b4c5305c8a61247ad415e880887462e6773377067de648a8aeaa62ef70c45c63f1f5f04c136afa6acab2f99f8fee40635544abafd07c33a2c93ec76afecae685a54948a5f4575fe4d0d902ef6f212f50e22f320b2c8eed70e7f0d828b5d3b93ef0bc7bf21f5910f3148c8d8fb3b81e40a78ef79ee1f0b52f1b9a08bd218e30232557a3009f522f275d5c95e6d9b56875464a9ffc3acee683ff132479911d690e9a786eac752cdb0840af54c4210f7c773bd3344ff021d352996aa040000",
    ],
    [
      "ETag",
      "Jd5jZy6dogKOznvkJpGqpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "5d",
      "4fc23014fd2ff5758b7ccc61487880b10071121d108d869032ee6661db9d6da72184ffee6d318b89bcacf79e8fe69ceec40ea2dcb13edb8aecb30679bcc9403f9b210655e75ad15161a980390c34cf4819b446d3fb31468f2a0bebdb97b7e0a19bbf7e0f06a450c907149cf54f2c1590ef14ebbf9f58c90b20db66531d48a28f95d966f365380963020adc1960be8aa2e1280ad9d9692ca9904a6fecd21817cb78369f5cf3adcf0edbe3368614249409981895c43d247a661a2a5e5439b80a6b998062566c894c625d7189e812e276dcb6dff5bdde9def7b9d9e47ba1c13ae0596245d2d281fd3a8791ee337f5634620ed485553fbfd22b86d7b982994026cb8bfb4dfd06328c53fbad3d0014f447ee502af510c0baeb9e1d7bfc146470dea4922955460fab52e5d0334fd35bd8b9635382ce1f4b7a6425ff6f30fc51729750a020000",
    ],
    [
      "ETag",
      "C0BH8DoLMsgEu/WZCK3lXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "8b08000000000002ffedd3417282300000c0bfe46c192208a6c7508a82c154542c974c808028224244d0e9dfebf41b75ffb00fc09344b42d93e7a3a8c03b18f8182989e2d553fc79cb4fdb018d4bcea98f1781fe016f31cf455aeeeba8d35141bcf280b2de771ae69a2cb73349d4185b765eb9eee055133c656f77b884dfa67d82c7e02af77dd1f5591892266241697788dc2fa1038551a56ab22aafb8a3932594980d4433a02f7c27292ca15ea863ae0f698b5604677467dcaded59cea31d2d68da451bd6d6dd45a6c1da8967a1aea99b991aa375e5ccc7db26938bd4e63bfde899d0d6965fcacbcbff054640f475d1889615cfedda04a111f8abcfe4508be77f2c78231af0f30bd54c117019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-3-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b4fdb3014fd2b91f795b6294d9f5235ba3640b536ddd214c6a629b29d9b6096c6c5769810ea7fdf8d433b10127c8aed7bce3de73ef244fe88222123c244765f827afc7427193921606886afe68b909d81fc79e3cda2c5d71feee5c579743b198f11212a96a6db5d0e0d2d4bc5418f36eb66a664b9a34aca06266a741aed5ea7e7f5bbbd9e77daf790a6214f17a2f883e45b63767ad46a1da49b9994590e74277493cbedf1bdf570dada297907dce8d66bc5168ae8d6bb9a9f73c9a911b2186fd6a85f6a50316ca9c8d1c17f62c2ce5e676e0aba6d66087e101c28e7b22c4ce50a537059a4222b95cd4a464fc4ba7c71206b7fe14f2387cbbcdc167141b770e224d4d0d83ceec0390f574b671e9cafc2e5249aaf82783dbdf49793e674b5d82c83b5737de987be6328cbc1729db173666f015e503f016d4461d5a3eab9527eeecffced502a024a6ba88371dfedd1f6c01db294f5793ae87459ea026303d6efd20e73f9d0032f61409167452d8b16b2e8765d36807410b7f990c59e3b7463d67759dcedb104b30d3d9676c9fe84fc55c2c04ce89dd4a2ee10b90ee7911f47e126984e22df9690d23237b3da5855c04b8f060b44d03b35edaba890a854b57b1e447e389946f32bbf9ef00232ca1fd7f738e394e61a104d1536cf805aca041b4682c9d29f21d84eecdb21a8c9e8d713a97a5eb978d1f2233dc20156768dfd927514ce830b6be780b8a27969210ff58128e05225e879ff1b71b8a1750ef27de38737a47e0a21050505ff789608b6818ffeb3c3d62314f71e55b4c13b2e0ed7950657502f90b0b51ed983ce699f58b0326f625ea77d685995a3ca085b28cc7341f5d6639db558a98f200ce2ec03dbaafd3fa23d911373040000",
    ],
    [
      "ETag",
      "tBio38oZY4DTLKX0HGFThA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93516f9b3010c7bf8bf758a2350d2113521fc896ad48346913b297a9422e3e9833e363b6491545f9ee3bd32e9bd649f405eecebf13777fff39b21f520b16b34759ffecc01cded5e0ee7db006db2967e9d5a2b6c002068ed744de68b14fbfbe4f365717bb497eafb7e2621a3e5d5f1361cbefd070161f59254109cbe26f47a67903d456a2ea1a5df459c0dca1f5c54dbe4e975f286f50f87cb9cdb2649e2dd82938370aee78d1f36f687b38056c878f6ba8c0802ec1cfd21adc41e952bfa6e54dab6064b1332558d6c3fd416db06bb9411c516534198da34914cea651145ecd42e21496dc49d4846e37341e73e8b85ae3132dc9c613224c1fd3c255ffdc535d8a7e111fa6cb3c0afbf9fe06785962a75d310856d258f72cde6ff045847f49c5df08d24d493504d5a00598214ab60517c280b58324da82b7ed199baf56d96b55b43028c530b897038072fb33f0395b25ff9396fcf547ab4f49be78455847ae3923797abbd8e4c9ed9de71e5e8c303f38b07706c95416bc9fc697e187e92cba7cb6d847f4b6a3efc4ce7410b092d39f72231d8b2bae2c9c7e014abcd9ca87030000",
    ],
    [
      "ETag",
      "HndvIV/AS2+j3TQnUd+54w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `id` as __pk, `first_name`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85537f6fda3010fd2a91f7cf26f19b900052d521c8b66c346d4368554d13d88e93b98438b59d6eace2bbefe294b66c522b2185f37befdeddf9fc80363c8fd118119ede954ceededd0a821a88699cc2e99fdf9baf37de902f493a9f15dfa6b35b2c2fd3931360f04aa5f0b6c85853895252a6c6cb452b95a22cb014a209899a76b3ebf41ddb1d388edd736d90299625739e6f40fc53eb428ddbed83752b1522cd182eb86a51b17d3a6fdff7da8514b78c6ad53e766c83896abfea799a098a3517f9c97201fea56272c5b6986750c1b330261f8f33b738deb65220df73ca30a5a2cc755515a4a0224f785a4a93158d1f90a9f2c51fb4f0e6de34b2d63c5e5b5859ab55b16958eb844ba55739deb23544193e04d6a7f0fccc5a4b46858cd5dabafee2859e55abfdc05a0681b788acf7a71fc03b664af3dc38479864ac727d9c8dffff855402acb16235b8723b0eee0e3b2392109726c3fe80241d46c890b803dc271d3ab2991d138641a7abec468573913b034c5ddb76fbc351af930c3b839839497744312114e6ccfa4e1c9311eba37d03fd925cb319578550bc9e10ba0efdc85b45e132984e22cfb491e032d3b3bab8aa8997756a681248aff4b5af502ec0a91ab71f445e389946fe9557dff09ca598ee167770c709ce14033696306acde499886168e8e27ce147fe79309983c25cdbc581a1d0f8fbc3b320da1566cada7cd1240c2737a0c152e2dd3f18d4e1d868bf7f617785b3d2500cdf4475fefb1a405de8e539ea1d45f651e4a0fd8f3dfc1a08b6bc7646974b2fbc41f551c81226594edfde09201be0adb77a78394085b7032e4a430c0b4855e54125ab17916f4d2707f5a8db7591214bfd1fd6b3ddc3c4ab1c5546b665b97e6ca87e3966861554aa271280b03f811f7c06f42f0e193667b7040000",
    ],
    [
      "ETag",
      "zxkJYE8iUbgLDpKCDjarQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff95925f6bc23014c5bf4bf6dae2d4ae42c107ff14e710d1aa833144627adb45d3de2e49dd9cf8dd97d4d109c2602fc93d37bf136e0e39913dcf6312902d4fdf4b90c7bb14f4dc1611a8526865b6027305c421a0696ac8d58b08db336fd6283ffb5f40878ddd7387cfbb5d4328f6061925c189241c44ac48f07a2239cdc0d8369b626f107d2cac1a4f97e1288c4c23c3d836a6abc9a4d79f84e4ecd496844ba53795a88d8b65349e8efef609fa0fdbfaec901d6e23484042cec04e5f48dc01d3631b8ca25921c055584a068a547075904a2c0b2a115dd3713db7e9b77daff3e0fb5eabe3194e20a39a636e235b98f188464d45841f26166201599526a1a45a0fa6ddac9e61ab5072a8c513c80372550d7b8dfb3531849cd762c1a8e0f4866ed5c080322eaeee0fa9861bdcab8f7b19d5f4d78c1a548232b68ef5cfb3fa47d39c49341129b0e9dc5f921aa04dcfdc1e6859824318355fe491eb8b3e7f037a927b807f020000",
    ],
    [
      "ETag",
      "UYlE3P4P/uxBzeaD/jV7iQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00000002ffedd35d6e82300000e0bbf4590d8832d99b20bf0e07055a782295546d5028a506bb65779fd935e67787ef1b90a6a1e358cbbea51d78078a2cad45b3d8f38ded4daccec7ed7d67a4590f4d098f4bd47efae1479691a1449b34f15645c3dc7d32bfc4c430ed6aaf9138ff42a57e922b4107be9be302bad948ce9c3d6c17d304964919968a317544016e1d959b7939d5ba68a650d3fc40f7bbde89d840d28edd048216bec2ac42f01e9b9d304ed3509d93ce25c1dbb18059774df1617ca4708de25645d316d3ad9820ad447bf0146ea45344c6a5be7121992db9ce9d7ef1f2f27f8119a00fce041d6bf6dc6eac2d6b06feead75271fafc6f5322a8003fbfc152cdd219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-5-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbda3cda900091a2354ae91a29211b90b6db3421632ecc2dc1a96d327555fefb2ea6c9da4d6a3f61fb9e73cfb90f9ec83daf323226292f1e6a908f1fee444a4e08685a34afd1bcbc92b7f2e1ee9bf6ecd9faf7edcead8bc90411bc6129bad996d051a2960cd4781d750b29ea2d954274305167d8391d0d46b6331c8dec33c7469a82325ff0ea1ec93fb5deaa71af7790ee16421425d02d575d2636c7f7deeeacb795e20e9856bdd78a3d1451bd37353f968251cd45355947a85f2b90096c282fd1c15f62969ebfcedce574d32d10bce30c2863a2ae74e30a533051e5bca8a5c94ac64fc4b87c712091bff067b1c544596faaa4a21b38b132aa69a21fb7605d86aba5350f2e57e1721acf574112cdaefce5b43b5b2dd6cb20b26eaefcd0b7344d4b305c6b629d9b5b8017d4cf40695e19f5b8796e949ffb33ff7f280d01a515b4c1c4e98fe8a9dbf7d23c7558ee0e8669de87347553674807699f7936d8590a147946d4b068252a6f64bb2e7587c9003c2fb133c74e527a4693c1803a699eb18cc129d99f905f926bb8e06a2b146f3b446ec279ec2771b80e66d3d83725e4b42ef5456bac29e0a5478d0522e88d9af64d940b546ada3d0f623f9ccee2f9b5df4e780105658fd103ce38a7a502445389cdd3209722c3869160baf42f106c26f6f9105464fcfd89343d6f5cbc68f9911ee3001bbbda7c491487f3e093b173405cd3b236905d7b20129890197adeff401c6e689b837c59fbe157d23e859083848abd3f4b049bc07bffd961eb118a7b8f2a4ae31d1787a94683496817889b5a8f6ccff546c480a5fe27e6f4fbfde1a1654d8e26236ca0d2cf05b55b8f75b662b5",
      "3a823088b30f4cabf67f006f633b0b73040000",
    ],
    [
      "ETag",
      "bSIlHrXrqjZt94CUzXv8ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93616f9b301086ff8bf79548c94a4885d40f64cbba6834e9089d544d1572ed83b933b66b9b4c28ca7fef9976d9b44ea25fe0eefc9cb87bfd72203f85e22425f7a279ecc0f6ef1af05f435080eba477f8325a392011014f1b24eb6f8facffd2dfded6a6385f5cca696d20cb2e2e9070ec07b494a407520b90dc91f4fb8128da02b6312dbb5655431611df9b50dc95c57a738979ab79c83737799e2df3153946a7464e3dad06fe0d6d77c7883ce8fb026ab0a01884598cd50fc0fc3aace9686b244c9cee2c034706783868acee0cb55a4fb032994f66c959122fe64912bf5fc4c849cda8175a217ab3c3f188d79eca42ffc225c9ec0c093bc4b8703d3cf758177c582484eb4d99c4c37c7f039431dd295f8d82b5b0ce3f8bf71b7c11e15f52d237827853428e410d280e768c12a6a29c5b706e94d4aea2c69cb0e5769bbf564571ab051f07f76204907e7f023ee5dbec7fd2a2bffe68f5312b57af08e7d13527a45c5fad766576751db8bb17232c7b0feeda6a349583e0a7d9343e9f2f92e9b3c53ee8603bfc4eea6d07116114ff94cfc293b4a6d2c1f1095b15c6c387030000",
    ],
    [
      "ETag",
      "fVqcyKyYYfpR87Gl0fpeAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `id` as __pk, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553616f9b3010fd2bc8fbb2694920090112a9eab2966da8296d0969d74d53621bc3bc124c6dd329aaf2df7740d336abd44a91c8f9bd77efee7cbe4737bc48d004119edd564c6edefd11047510d33883d3137a218e2f74ce07b7df4333fbe19d581f3f670707c0e0b54ae17599b3ae1295a44c4d16f35e2645556229441712759d6edf193ab63b721c7be0da20532c4f67bcb801f16fad4b3531cd9d752f1322cb192eb9ea51b17e3c37ef066629c51f46b532f71d4d3051e6ab9e87b9a05873511c2ce6e05f2926976c8d790e153c0913f2693f738fe3752f03f21da70c532aaa42d755410a2a8a9467956cb2a2c93d6aaa7cf607cdfd997f141b2b9eac0cac8ce5b2bce918ab1c2bbd2cf09aad8c2fd1d9a9b1928c0a99a89571f5cd8f7ca3e507a1b108437f1e1bef0f3f805bc294e645e3156392b3dae7611ac1cb2ba8055863c55a70e95a0eee7bd698a4c4a5a9371c91d4628478c41de121b1e8d866764218069daeb3372a5c408763879021b1533a4cc9980e52978c68dfb6a9e5a569e2596c94588361df43db0efa2bb966c75c9542f17626e82a0a627f19478bf0681afb4d1b29ae727ddc165737f1bc4e0d4d02e995beb635ca0538d5030ec2d88fa6477170e9b7773a6319a69bf92ddc6a8a73c5808d258c5a33792a12181a3a3f9b077170164e67a0682eea7cc75068f2f3fe49106fca66cabaf9a269144daf4183a5c49bff30a8c3b1d176fbccee12e7554369f84dd4e6bf6b01d4875e9ea2c15e64ef450edafedac2af8360af5b6774b1f0a36bd41e452c659215f4ed9d007203bcf53a776f05a8f05ac04569886101a9aa3da864ed22f275d3c983dab5dcc1003564a95f609eeded265ee7a833b2352bf44343ed5b69665843957a240108fb1306e15740ff01f052d9aea9040000",
    ],
    [
      "ETag",
      "KcQoDQtli2qXN/gZ8K0+Bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d91516bc2301485ff4bf6da82ba5ab7820f538a7388cc561d630c89ed6d8db6bd35491d9df8df77534719b897e4e6dcef847b92333b8822661edb8af45881acef52d00b5304a0aa4c2bda4a2c14308b81e629919d87d5a308fb75bc7b8fcbefcefab85e4cde16c321112ada41ce99776689802c56ccfb38b382e740b6cda63c10a2ebd29ca6f3a53ff10312728c8d305fcd664fa399cf2e566bc9b8d29ba66e7de13298ce27ffd93e2f16dbe336800424141198294a897b88f4d404543c2f33b015563202c51ab869a412ab924b449b14dbb5bbeebdeb0cfaaeebf4060e7119465c0b2c085d85341ed3a87916e017c56306904d494993663d91dc6d6298ea05e409856ae6fb4bb82d11463c13fc06e8b580cf35dcb49db63d460d2a41191be6f377bc514de2ab448aaac0a4ec5c138fd1bc02dde7695981c5224e5ff62cf4f57cf90189da87960f020000",
    ],
    [
      "ETag",
      "08U9iS5ydhYdpz0VqVQGWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "30",
      "00",
      "00",
      "d0",
      "bbe4db3042b40dfd63d1a2b8319462fcc93024c86e0c288bd3bbd7e935eabbc37b80288e79d3d0f652f01a7c8021d27425565c81cd6597d675b4656251c58e658dc952238d4754efbe1adf6778c1d43228cc39f3dffa3ef072bc333cd90d711ea662df642e0cea1b71d31b677bbcfe2e50356e446a40ad63cc1a92a96a6f6bd8c36115ccc212425c2d3ad1d1f525336d1fb14db9b6369aeacc0c171fc2c3ca3502768212efcee84e559ae657ffcbb2475b9eab63f9999f92cc2199bc4557d67a07cd9dea32281c4674744d3c744c7ceab4c4181da4bcbcfc5f6002782f32c91b9a3db7a3b9ae4fc05f7dda0e823fff9b3c925c829f5f9e1e11a219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-7-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a2",
      "40",
      "14",
      "fd2b64f66b55544434315ba374eb46710bd8ee231b320c17765a642833b8691afffb5e86da6dd3a4fdc4ccdc73ee39f7c123b9e34542a624e6d97d0dd5c3a75b119333028a66f87ab15e88af7c0bc16ef973627dbf4a62ff30c8663344f08625e9becca123455d3190d35dd0cd2a5197b412a283893ae34edf1edad67864dbd6606c214d429eae797187e43f4a9572daeb9da4bb9910590eb4e4b2cbc4fef9bd7718f4ca4adc0253b2f75ab18722b2f7aee6e75c30aab82866bb00f56b0955047bca7374f09f98c4e7af337739dd7733041f3803ca98a80bd5b8c2144c1429cfea4a6725d347a25dbe3890c05dbb8bd06022aff74554d03d9c19095534520f251817fe7663acbc8badbf9987abad17058b4b7733ef2eb6ebddc60b8c9b4bd7770d45e31c34d79819e7fae6e105f513908a175a3d6c9e1be5a7feacde0ea521a0b48436188d4d9bf61d7312a7f198a5ce7014a726c4b1138f4774189b6c628195c44091a745358b16a2182489397068128d009cc84a6c339a98c334b29dfec449004c27b6c8f18cfcadb8822597a590bced10b9f157a11b85fece5bcc43579790d23a57cbd65853c04b8f0a0b44d03b351d9b2817a8d4b47be585ae3f5f84ab6bb79df01a32ca1e827b9c714a730988a615364f41b51109368c78f38dbb44b09ed8b7535092e9af47d2f4bc71f1a2e5cff41007d8d855fa4b82d05f795fb49d13e29ae6b5861cda03a980892a41cfc7df88c30d6d7390ab9debff20ed930f295450b08f6789601df8e83f3b6d3d4271ef51452abce3e230d968b00ada05e2bad6137bdcb7267da2c1957a13b3cdc9a9654d8e2623eca1504f05b55b8f75b662b57c06611067efe9561dff01a796801273040000",
    ],
    [
      "ETag",
      "FLCoJiOeSUDZ94XQdbRv2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93614fdb301086ff8bf99a4a740de916890fed5658b4d096364848138a4c7c09668e2fb39d4c55d5ffce39b00ec1a4f025b93b3fa7dcbd7eb367bfa4162c66f7b2fadd82d99d54e0ae7db001db2a67e9d5a0b6c002068e5744469dc45bf543a755578a042fe5f597f5a43a3f27c2160f507316ef59294109cbe29f7ba6790dd456a06a6b9df759c0dcaef1c56db649969794d7287cbebc49d3d93c5db043706c14dcf1bce73fd0767708d823de6fa00403ba003f4b63f0110a97f8352daf1b05238bad29c0b21eee0f2a836dc30de2882aa3e9681c4da2707a1645e1a769489cc2823b899ad09b2d8dc71c3aae36f8879664e30911a68f69e1b27f765497a25fc487c9328bc27ebed7002f0a6cb5cb07c1521aeb9ec5fb0bbe88f09654fc8320dd94544350055a8019a2649373210c583b48a2cd79d31cb1f96a95be57450b83520c839d1c0094eb8ec045ba9afd4f5af2d73fadbecdb2c53bc23a72cd11c992abc5369b5dad3d77f76284f9ce815d1b245359f07e1a9f869fcfa6d1e9b3c5bea2b71d7d2776a68580159cfe94efd2b1b8e4cac2e109a080cd6f87030000",
    ],
    [
      "ETag",
      "6vioXlKnLgvfdIoGiQ9P3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `ltv` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536d6f9b3010fe2bc8fbb2697923402091aa2e4ad98694928e9056d53425c618e61630b54dbaacca7fdf014ddbac522b4522e77b5eeecebe0774cb8a184d50c4d2bb8a8add871b1ea10ea20aa770caff2ccc805fd2bf8c879fd97d1eebf46e767f72020856b324cecb8c7625af04a172b25af652c1ab120bcebb20d475bafac81899b6351a9943db049aa4593267c52d907f2b55ca49bf7fb0eea59ca719c525933dc2f3a7f3fe76d82f05bfa144c9feb1631f4c64ff4dcfd38c13ac182f4e564bf0af24156b9a63964105cfc438fa72acdc6338efa500de32423121bc2a545d1548105e242cad44a38a260fa8a9f2c51fb474e7ee2cd4362cde68586aeb7579dbd13699da6eb4afc1e25cdb084ab888e546bbfaee06aed6223d5f5bf9bebb0cb58fa79fc027a652b1a271097194d1dae1710edeebe1d704acb0a46d726d0f46587706e328896c9238861525031a454e645bd88806646c52338e28069eaad51b162e78e1d89663d9033319c4a0611ace98e84e840d3dc1968375aa0f12c31c1b0eda77d0bd608a9e315972c9da69a0abc00bdd7518acfcd934749b36125c65eaac2dae6ee2659d0a9a04d01b7dedeb2ce3e0548fd6f3433798ce42efd26d6f734e534c76cb3bb8cf046792021a0b9c5345c5398f6168e862b1f4426fe14fe7c068aee8e2809068f2f3e19910eeca66caaaf9a269104caf818385c0bbff7250c7c844fbfd0bbb4b9c550da4c13751abbf6d1348875e9ea3e151641e4523b4ffb5875f07c18b6e9dd18f951b5ca3f628a00915b420efbf09003789f7f6f2b02500853d0117a92086074864ed41046d1f22cb9b4e1ed9f67068355badb050af7286e31c265e6bd48a34a7857a6ca8dd92668675aa924f2048c2fbf13dff1b64ff01abebefeca3040000",
    ],
    [
      "ETag",
      "oxO4RoVezioT+iwmd1eqCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d91dd6e82401085df657b0b4401414cbcd0d6aa0db52dea55630cc28828307477b121c677ef2c36dac4deeccecf37d973664fec901631ebb14d9a7c55c0eb8704e4870a02105526055d25160298c6408609912faf18d762eec2c4c36cfc948335df0d927e9f0811ed200f59efc4b62964b160bdcf132bc21c686cbd2e0f84c8ba54d974b6188d470115728c5561b6f4fdc1d01fb1b3761dc9e4f136f1ecbf0d16fff1abb3c6f6b809600b1c8a08d4f325c73d4472aa9c89302f33d005563c02c11ab869241cab32e4883a55f4aede762cc7763b8e639bae4d5c865128532c085dce49179328c32cc06ff2c514c09b902c6e9bf348e576a35f4566c733da6623ef2fe0dc00d732bcee1d605e01cf362ce7ae6f5ffb76d7335aaabffa9536ac2588778e64538072d8bab87d44b501499b91bc028d4521fdd3249597fcfc032ffae9d004020000",
    ],
    [
      "ETag",
      "JModysS7eH9olGDme3ShAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "000000000002ffedd3dd5682300000e077d9b5700ac258770c7f406560a2ab6e385336601b8582e2e8f4ee797a8dfcdee1fb06f470606d9b755f927d8217a0a905cd83b96c5c34eb2b6e27530fa2a36a92277f552e24deca45da2a3fcab0ced506b969c7821895ac70c60893ae162ebe789570e634d1c27f46162c096367017155da90f4f13b9a0646fed12a48a3a20bfb30aecffc38ecf8f671ac8357fd90e90b2f64b0e233b28cf337cdceb498372b495cecdbcad9592215c35028635cefa7f5ccebfa49d0bbe1b0c79e93af7b0ac3c93a8ca26d40b8a732694912ba1ba321c73231847977f77f811160d7a63ab136ab6edb6d07c211f8ab9f75ba61b7ff88d1133b819f5fcd78cdef19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-9-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbda8440087948d11aa5748d9490959056d33421632ecc2dc1a96d327555fefb2ea6e95a556a3f61fb9e73cfb90f9ec83daf323221292f1e6a908f5fee444ace08685ae0abfb77acd27aadd89caffd43ef72fee0e4f6f5748a08deb014dded4be828514b066ab2dd740b29ea3d954274305167dc71fcbeef0d07beefb9430f690aca7cc9ab7b24ffd67aaf26b67d92ee16421425d03d575d26762feff6c1b5f752dc01d3ca7eab68a388b23fd4fc5a0a463517d574bb41fd5a814c604779890efe13b3f4fc6de62ea7bb6e81e0036740191375a51b579882892ae7452d4d56327922c6e5ab03d904cb601e5b4c94f5ae4a2aba83332ba39a26fa710fd665b45e598bf0721dad66f1621d269bf955b09a75e7ebe576156eacdbab200a2c4dd3120cd79a5ae7e616e205f533509a57463d6e9e1be5e7fe2cde0fa521a0b48236980c7b3e7546bd719aa743968ffa8334ef419a8ed2e180f6d31e1b7be0652950e41951c3a295a8322ff5f3719627ae43fb8997655942ddac97003077ec789933a463723c237f24d770c1d55e28de7688dc468b3848e2681bce6771604ac8695dea8bd65853c06b8f1a0b44d007351d9b2817a8d4b47b11c641349bc78b9ba09df0120aca1e370f38e39c960a104d25364f835c890c1b46c2d92ab840b099d8f7535091c9cf27d2f4bc71f1aae52ff41807d8d8d5e64b3671b408bf193b27c40d2d6b0339b40722810999a1e7e32fc4e186b639c8f536887e90f629821c2454ecf35922d8043efbcf4e5b8f50dc7b54511aefb8384c351a4c42bb40dcd47a620ffb3ddf25062cf5bb9833704f2d6b7234196107957e2ea8dd7aacb315abd50b08",
      "8338fbd0b4eaf80f2ca7ee2573040000",
    ],
    [
      "ETag",
      "2z9sbuOscCiO6v0FCq1f/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93616f9b301086ff8bf79548c94a6043ea07d2651b124d5842a44a53851cfb60ee8c4d6d93298af2df77a65d36ad95e817b83b3f27ee5ebf9cc84fa13849c85e348f3d98e3bb06dc371f6cc0f6d2597c755a59200101471b24e78fd96edac67191f751581477fb3b38d0f4fa1a09cb7e404b497222b500c92d49be9f88a22d601bd3b26f5535640171c7ce17b7e5265b7dc1bcd5dce7ab5d9ea78b7c49cec1a5915347ab817f43dbfd39200f7abf811a0c28067e96cee807602ef36b5ada76122656f7868125033c1c3446f71d355a4fb032f9389945575118cfa3287c1f87c849cda8135a21badbe278c46947e546ffc225c9ec0a0933c4b8703d3c0f58177c58c487d9aa8cc261be7f01ca98ee95ab46c15a18eb9ec4fb033e8bf03f29e91b41bc2921c7a0061407334689aea29c1bb07694d4b6a25d77c116eb75fe5215c58d167c1c3c881140bac305f89cafd3d7a4457ffdd5ea535a2e5f10d6a16b2e4899dd2eb7657a5b78eefed9088ba3035b188da6b2e0fd349b861fe671347db2d88df6b6c3ef24cef4101046f14ff92a1c496a2a2d9c7f038f43bc7487030000",
    ],
    [
      "ETag",
      "5qIU0m77PLu64PPXbXevaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `id` as __pk, `ltv`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "616f9b3010fd2bc8fbb2494980402089547559cb3aa494b484b4aba62931c630a70453dba48aaafcf71dd0b4cd26b55224727eefddbb3b9f9fd03d2b12344631cb1e2a2a769fd63c461d4415cee07436c0b6f5cdb9f17f5e3fae2fccc4b4e4fa363b390106ab55126fca9c7625af04a172bc98f732c1ab120bcebb90a86b1a5dd3b11cdb1d388edd776dd0499aa75356dc83fa8f52a51cebfac1bb97719ee514974cf608dfbc9cebdbbe5e0abea64449fdd8520717a9bf6f7a9a738215e3c5c9620e0554928a25dd60964309afca24fe7a9cbac7f0a6970179cb08c584f0aa5075599082f0226559259aac68fc849a32dffc41736fea9d45da8a252b0d4b6db92cef3bda2a57db55fdc1522d0bbca12bed7b38bbd45682122e12b9d26e7f78a1a7b5323fd01641e0cd23edf3e917304da854ac682c231ce7b4b67b9e8affff5dd402acb0a42db8740d079b436314a7b14bd2a135885383c6f1307607d88a0d32b2a99dc414834ed5d91b152e78615aa99bd896430d821d03c8a3413f712d12c70635dc211ef68931726382f61df42898a2e74c965cb27634e836f4236f19858be06c12794d1b29ae7275de165737f1b64e054d02e99dbef635ca3838d573f683c80b2767917fe3b5573ba51926bbf9035c6e8a7349818d058c5a5171c913181aba9acdfdc89f059329289afbba3a30241aff7a7a1544bbb299b26abe681286933bd06021f0ee1f0cea706cb4dfbfb1bbc179d5501a7e13b5f9b72d804ce8e535ea1f45f651e4a0fdef3dfc3a08f6bb7546d70b2fbc43ed5148532a68413ede092037c087cff4f066800baf066ca482183690c8da8408da6e22db34ad3cab5d6b680e514316ea3f6c64198791d739ea8c74430bf5dc51fb669a21d650255f4800c202057e7001e85f4ff3e228b3040000",
    ],
    [
      "ETag",
      "O5a43B6VIXQwjG1d13sjWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "925f6bc23014c5bf4bf6aac53fb5da820f2ad529e2b6aa6c384462bdd66aedad49aa13f1bbefa68e3a70b097e4de93df0937875cd82e8c57cc61cb3038a420ce4f01a8375d7820d34849da128c25b00203c50322e5ec94cac387d80d427be337bebab349fc1e349b44487f037bce9c0b5b8710ad24733e2f2ce67b20db6291ec0851e74477fdd1c4edb91e097b5c6961341d0e5beda1cbae85dc12a9e3ddd11dbeb426fff05caa4556e7aef1c4eb8f7a7fd9e6d702dbe2d2833508887dd0532702b7e0abbe0e44f27d124151622a7c902c83b38340609a70815824a5582e15cb56d532eb35cb322b7593c0087dae428c899d8e693ea650f1c8c313e5c13420b292a25967eb91e472f60e5d556ab651aee4ed00c4114399cdfbdb60dd0df5aa6137f276ecf328e40ffcfd46db34aa77b7cb153cc0667e6c366ca394771d5420d72856da31ff7958fb4ce2ab404a49820ea8740bab833a40badd51228502f339fd8ee750ddfaeb376e92ce357a020000",
    ],
    [
      "ETag",
      "sZwusqXrkJi9hc8xFZTnWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00000002ffedd34b7282300000d0bb64ad8e1f50e82ee15788b52841281b064204058112f988d3bbd7e935eabbc37b808852c67978ab72568237708f96f28cce702d21bdbf0847fa7154892625359cc7edbdd4cc320cd4b5a928f08b88dcdfed8959792e92f1a573368576c87bf124a899ef8cdb3d7c37b21daeabb5bf5595a583337f1a17626f20bb9f132e16368ebb1ca688168e401731424a2eedb54313916b3bb838b161ea1ae6a51d0457efadaaf086ed090e28b9f2d0b42dcd3a2f460ead848e9f37f7b8ecec4d277552f01d3963e88df9904be830b67ea597299e922676c92a98bdbcfc5f6002d8509f1bc6c3f373fb4a94e509f8ab1fdeee357bfe472c6a58037e7e01532a666e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-11-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d4fdb3014fd2b91f738da34b44d4aa56a54258c486dcad214344d53e43837994b1a17db2962a8ff7d370e652024788aed7bce3de77ee489dcf12a236392f2e2be06f9f8652352724240d3025febfbd96c1efebd19d6b7fdcda60ae2bd7bfd753a992082372c45b7bb123a4ad492811aaf57dd428a7a47a5101d4cd4719c8ee3f6dd813774ddc1a937409e82329ff3ea0ed97fb4dea9b16d1fb5bb8510450974c7559789edcbbbbd3fb577526c806965bf95b45145d91f8b7e2b05a39a8b6ab25ea1815a814c604b798916fe33b3f4fc6dea2ea7db6e81e03d6740191375a51b5b9882892ae7452d4d56327e22c6e6ab0359f9737f165b4c94f5b64a2aba85132ba39a26fa7107d665b45c584178b98c16d3385886c96a76e52fa6ddd972be5e842bebf6ca8f7c4bd3b404c3b526d6b9b9857841fd0c94e695518f9be746f9b941c1fbb134049456d00613afe75267d43b4bf3d463f9a83f4cf31ea4e928f586b49ff6d8d90006590a147946d4b068252aea388e0b344d58e6f49301cb593272dd5ec2bc8c0e6986a4619f1c4ec883e41a2eb8da09c5db0e91db2888fd248ed6e16c1afba6849cd6a5be688d3505bcf6a8b140047d50d3a18972814a4dbb8330f6a3e92c0e6efc76c27328287b5cdde38c735a2a403495d83c0d7221326c1809a70bff02c16662d7c7a022e35f4fa4e979e3e255cb5fe8310eb0b1abcd97ace22808bf1b3b47c40d2d6b03d9b70722810999a1e7c36fc4e18ab639c88fb51ffd24ed53043948a8d8e7b344b0097cfaa71dd71eb1b8f828a334de7173986a4498847683b829f6c8f60643cf23062cf5bb98e79c1e7bd6e46832c2162afd5c51bbf658682b56ab17100671f8a1e9d5e11fb3c96ec276040000",
    ],
    [
      "ETag",
      "uqCCLNzV5uW3jjnITv6P+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93614fdb301086ff8bf771a9446848a7487c48b7c22a8516daa0094d2872ed4b66e6d89eed74aaaafe77ce013a0493c297e4eefc9c72f7facd9efc168a938c6c44f3a703bbfbd480bf09c10a5c27bdc397d1ca01890878da2039dee48bb5e19f2fdc2ebdbcbb810dbbfbd1e5e7e74838f60b5a4ab23da90548ee48f6734f146d01db98965dabaa3e8b88df99505c97abf9e212f356f3902f6e8b229f163372888e8d9c7a5af5fc07daee0f1179d09b15d460413108b318ab1f80f97958d3d1d6481839dd59068ef4707fd058dd196ab51e616514c7a3381da7c9e42c4d93d34982a0d48c7aa115b2b76b9c8f78eda95ce9bfb82589c748d83ec68debfeb9c5bae0fd26219c2fca34e9077c0d50c674a77c3508d6c23affa4de0bf8acc25b52d20f827855420e410d280e768812a6a29c5b706e90d4aea2c61cb1e97259bc574571ab051f06b76200907e7b042e8a65fe3f69d160ffb4fa9697b37784f3689b2352ceaf66eb32bfba0edcfdb311a63b0feeda6a74958360a8f824f97236494f9e3cf65507dfe177326f3b8808a3f8ab7c179e6435950e0e8f82fa3d6388030000",
    ],
    [
      "ETag",
      "3bANSpd+Fsy6GYQebcYWuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `ios_app` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85537b4fdb3010ff2a91f7cf26fa6e923e24c42a085b4449599ac2d034b5b6e364a6691c6c0754a17ef75d1c0a74484caad49ceff7b83b9f9fd09ae7311a23c2d3fb92c9eda73b415003318d53384d7f12777e3e20471717b3b55d8ec4d15dba7e3c3e0604af580a6f8a8c35952825656abc98b75229ca024b219a20d4ecf69a5db7efda03c775eddec0069e625932e5f91ad87fb42ed4b8ddde7bb75221d28ce182ab16159b97f3f643af5d4871c7a856ed43cb36b8a8f6c7a62799a05873911f2fe65040a9985cb20de659d5e00b33265f0fa55b1c6f5a29801f3865985251e6ba2a0b24a8c8139e96d2a8a2f1133265bef940736fea9d46d68ac72b0b2b6bb92cd60d88845ae2a25859e7e1ecd25a4946858cd5cabaf9ee859e55a3fdc05a0481378faccf275fc02b664af3dc38459864ac72791e86fffe0a2a02d658b13ab91c745cdc1d76462421039a0cfb0e493a8c90211938b84f3a7464333b260c034f57ea86857391631a0fbbf6c8ed907e3fee030bbebba042fb1d67c8888bf1b0d74d1c86760df428b966675c1542f17a22e826f4236f19858be0741279a68d0497993eab8bab9a785ba7862601f4415fbb2acb053855e3f583c80b27a7917fedd5373a6529a6dbf93ddc698233c5008d25de30cde4a5886168e86a36f7237f164ca6c030d774b5472834fef5f44a88b68599b236ff681286935be06029f1f69f1cd4e1da68b77b63778db3d2400cde44b5fe439d405de8e535ea1d44f641e4a2ddef1dfc1a08d6ba76463f165e788beaa390254cb29cfe7f27006c12ff7d9dfba70258782c60a334c4b08154552654b27a13f9c6b4f2cc1e38b6e3200396fa5dce19dafb91571a9522dbb05c3f77543f1533c42a55aa1710246181023ff806d9bfc3e2b394aa040000",
    ],
    [
      "ETag",
      "gXb6SF7b+KKOk4u9o+jgkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "7d",
      "51",
      "4d",
      "6b",
      "c2",
      "4010fd2fd3630d341a23153c681b5a21689beac522b22693349a64b6bb1b45c4ffded9586cc1d2cbeeccfb80f7768fb0cdab04fab0ceb3cf1ad5e12643f36a8708755d18cd97a44a23b4008dc85899cceeb3e476db59a85c95f14e2ddc47d1dd0f06acd0f1079602fa4748732c120dfdf72354a244b6ad5672cb127390761b4f66c153103150526281c93c0c87a3308053eb62c949af84943faed1741a06c3c95faee5a9051b5a4798a2c22a461b422ada606cc6b69f16a52cd0d154ab183534e286c814d55228228711c76d3baedff1bd5ed7f7bd76cf636141b1303955ac9dbf713c30644411d19eeb8115a866e4a66973ee18769b1a7632aac626dd6fdaff9f6e5fe85414fa9af7aeeccbef54a38341fda2882b6ab4edeece4d1fc8b637fc2ad6d18258f04f3de7e6bc9fbe00bb82738e06020000",
    ],
    [
      "ETag",
      "dT9gd+k3ZrirmcvrZ1Da5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "d34b7282300000d0bb64ad4cf944a0bb40a5040115ab55360cc4a804a1e12bb1d3bbd7e935eabbc3fb062921b46d93eeaba015780522554c89480b6e58ce8dad9d9eb75bbd3b461d4c5884ae758806ecfa4433e472efd65a156ef1ccb6667e918e9bc5fdd3653ad60c346868bc70333ab883386533c5566967a9733ff02cb4ecb7b9172a88403e42c514cc7ed120274de1605551e32552bcdb85a5767f29e3c085021f23217b45f55ee80865611d4e0f2a29779843d73f4c4f7abc0973c1f763659c77abf12abf716cc8d9fada6fce3aab3e92baa54317cc4bb65a6581f4f4f47f8109a023cf1bda26f963bb0a4d7302feea279de0f4f1dfa269431bf0f30b5bd5e73919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91f74adb94a4495ba91a5509ac539b429282a6698a1cf72633a471b11d5085fadf77e350064282a7d8bee7dc73ee479ec93daf36644c325e3cd420f7dfee44464e08685ae06b799de5de837b35faa9afedfd65f5e4edbdf0693241046f588a6e77257494a82503355ec7dd428a7a47a5101d4cd4e93b9dbee778ae3ff03cf7d47791a7a0cc17bcba47f65fad776adceb1db5bb8510450974c7559789edeb7beff1b4b793e20e9856bdf7923d5451bdcf45bf978251cd453559c768a0562053d8525ea285ffcc4d76f63e7597d36db740f0236740191375a51b5b9882892ae7452d4d56327e26c6e69b03898345304b2c26ca7a5ba515ddc289b5a19aa67abf03eb225a2dad7978b18a96d364be0ad378f623584ebbb3d562bd0c63ebf647100596a65909866b4dac33730bf182fa1b509a57463d699e1be59706cd3f8ea521a0b4823698fab647fb437b94e599cff2a133c8721bb26c98f903ea64361bb9e06e32a0c833a286452b5165f630773dd7491d7fc452d7f5584a29eda7233a1c0c3c9f517b08e470429e24d770ced54e28de7688dc46f3244893681dcea649604ac8695deaf3d65853c05b8f1a0b44d027351d9a2817a8d4b47b1e2641349d25f39ba09df0020acaf6f103ce38a7a502445389cdd3209762830d23e174199c23d84cecea185464fcfb99343d6f5cbc69f92b3dc1013676b5f9923889e6e1a5b17344dcd0b23690c7f64024302137e8f9f00771b8a26d0e72bd0ea25fa47d8a20070915fb7a960836812fffb4e3da2316171f6594c63b6e0e538d0893d06e1037c51ed9be776a3bc480a5fe10736cffd8b326479311b650e9978adab5c7425bb15abd823088c30f4daf0eff00e72003da",
      "76040000",
    ],
    [
      "ETag",
      "lQbf6q4P9JtQ0yGnw6y6Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f73695e81ad229122f5ad66e99420b69e0cd8422635f82c1b133ff292a55bffbce8195694c0a6f92bbf3ef94bbc74ff6e451284e5272279a5f1eccee5303ee2a0405582f9dc557a79505121170b4417299edeebdbffab13cbf797e528570423ee6cdd9191296dd434b49ba27b500c92d497fee89a22d601bd3d2b7aaeab388b85d178a9bb2c856df306f350ff9ea3acf67f37c410ed1b1915347ab9eff40dbed21220ffaae801a0c28066196cee807602e0b6b5ada761246567bc3c0921eee0f1aa37d478dd623ac8cc693d1389924f1f43449e2cfd31841a91975422b64af37381f71da5159e827dc928c2748983ec68debfeb9c5bae0fd2621cc566512f703fe0d50c6b457ae1a046b61ac7b51ef0ff8aac2bfa4a41f04f1aa841c821a501ccc1025ba8a726ec0da4152db8a76dd119bafd7f97b5514375af061702b0600e9b6476099af67ff93160df6a6d5d759b978475887b639226576b1d894b38bcbc0ddbe1a61be73602f8d46575908861a9fc45f4ea7c9c98bc7ce75f01d7e2775c6434418c55fe5bb7024ada9b470f80d32aff83288030000",
    ],
    [
      "ETag",
      "FIyhuuQJFCVzwnRitilkLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `id` as __pk, `ios_app`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85537f4fdb3010fd2a91f7cf26b54dd3e6475b09b10ab211ad0496a620344da9ed3899218d83ed802ad4efbe4b4281326948959af37befdeddf9fc84ee7899a219223cbfaf99dc7eba1504f510d33887d34059e31fb6754317293ebbe2f3dbb309311f8f8e80c11b95c29baa607d256a49999aad96835c8abac252883e24ea5b76df72c7aeed39ae6b8f3c1b748a15d9829777a0fea375a566a6b9f71ee442e405c31557032a362fe7e6c3c8aca4b865542bf3d0d2041765fedff4b810146b2ecaa3d5120aa8159309db605e4009afca947c3d4c3de07833c881fcc029c3948abad44d5990828a32e3792ddbac68f684da32df7ca0a5bff04f6263cdd3b581959124d55d0f22a1125c556bf82cb0d24989376c6d7c8b2ece8db56454c854ad8deb333ff28d4e1a84c62a0cfd656c7c3efe02c629539a97ad6d8c49c11acbe7c904ffde4723c01a2bd681893774b135194e49463c9a4dc60ec9868c9009f11c3c26433ab5999d128641a79becad0a97a274a62eb3d998126a93943a2e1e79132b6578ead8e3719a4d08a543dbc91cb4eba147c9353be5aa128a77e341d75110fb491cadc29379ecb76d64b82ef469575cd3c4db3a353409a4fff4b56b502ec0a9997510c67e343f89832bbfbbde05cb31dd2eefe182335c28066c2c61d49ac97391c2d0d0e5c53288838b70be00457b67977b8642b35f4faf82785bb553d6ed3f9a47d1fc0634584abc7d87411dae8d76bb377657b8a85b4acb6fa32eff4307200b7a798d4607917d10b968f77b07bf1e821def9cd1cf951fdda0ee28621993aca41fef04905be0c3a7ba7f37c0859703364a430c1b4855634225eb36916fda569ed59e3b9d7aa8254bfd1ef3acd1643ff2264793916d58a99f3beade4d3bc406aad50b094058a03008bf03fa1796cfcedcb7040000",
    ],
    [
      "ETag",
      "Is13K41YcLdaHViAjH8b/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "7d",
      "92",
      "51",
      "6f82301485ff4bf70ac9508609890f6a88732130511fb6c5900a178602b76b8b0b31fef7b5b8e012cd5ee8bd87efdcdc9ef4440e459d1297ec8afcab01de3ee42097ba884034a514ea60580b2006014973456edae1d079af265118469ba565bff9624027e3b12244f2091525ee89640594a920eec789d4b402658b637650886c99ee16c1da9b7b91122a4cb5106c7c7f32f53d72367a4b8122a68c5d5dd330f4bd49f0bfaba442c65dddfb56eb6811ccefd9b66783ec711741061cea04f4ee8ce31e12b9d0b1085ab1124c810d4f40900eee7ee41c1b4639a2a914d3b24dcb193af6e8c971ecc1c8566089099505d63ab195da8f4894b48cf05ba54234c0bb52059475dfa392adee1eba92bc81be79017ec44274dbfec59dfbf82aa165416fe8410f64b41457dca3126e60fbfee8194a1019f2541bb6bf779ab64a7ce5a80212a0b379bce434439d9d1aeeea190649a87a1ecf85bcf4e71f11f226ba7b020000",
    ],
    [
      "ETag",
      "Uy336ZmAROORUQ14YLs2aA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "300000d0bb64ad8e201fe9aec8d0e1272050810d938640218a216003747af73abd467d7778df00228487a1186f0477e005cc50d43668e3d0bd6ef23acc7df5dabd57f7ade9b51446b223c8d1b2f7f2da1558b884d86b6b58986489827bf55906b1712f62a834f180fb111904919bbd762e4ea92654ecccfca37f45899f94562cbb646765d956c4e110515d1c2d569f3c23205f27373e18c7deceb9aabd2df01a55674d618d64b59a9fe6bd2d847bfd3c2a2c99b811301e389c5f2424f95ee71533a28909f1e1489df458da997d5b4f8b0fd31c5e32a9e764bb797afabfc00ae089360c0f45f3d8be93356d05feea17e34cf1e3bf8e21c30cfcfc028e87e3aa19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-15-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc87b5c939090401a295aa384ae5409d90869554d1332e6c2dc024eb149d555f9efbb98a66b55a97dc2f63de79e733f782277bc4cc884c43cbbafa17afc722b62724240d10c5f6feae5c2f2f8a5e35dffe5f93e28ece4ebe56c3a45046f589216bb1c3a52d4150339d96eba5925ea1dad84e860a24e7fd4e9db963d7446b63d1c3843e449c8d3252fef90fd47a99d9cf47a47ed6e26449603dd71d965a27879efed07bd5d256e8129d97b2bd94315d9fb58f45b2e18555c94d3ed060dd412aa080aca73b4f09f99c4676f5377392dba1982f79c01654cd4a56a6c610a26ca946775a5b392c913d1365f1dc8c65dbaf3d06022af8b322a6901274642158dd4e30e8cf360bd323cff7c1dac66a1b7f6a3cdfcc25dcdbaf3f572bbf237c6f5851bb886a2710e9a6b4c8d337df3f182fa0948c54bad1e36cf8df27383bcf7636908282da10d468e69d3fed83c8dd3d861e9d81ac5a909713c8e9d11b562939d0e6198c44091a745358b96a284be19532bb5a3d1c81c44c3d3be1d8dc7cc89ac410ae3d83299e598e470421e2aae60c1e54e48de76885c075ee84661b0f5e7b3d0d525a4b4ced5a235d614f0daa3c20211f4414d8726ca052a35edf6fcd00d66f3d0bb72db092f21a3ec71738f334e692e01d1b4c2e629a85622c186117fb6721708d613fb710c4a32f9f5449a9e372e5eb5fc851ee2001bbb4a7fc9260c3cffbbb673445cd1bcd6907d7b2015305125e8f9f01b71b8a26d0ef273eb0637a47d0a20850a4af6f92c11ac039ffe69c7b5472c2e3eca488577dc1c261b115641bb415c177b643b8e639944832bf52e361e3ac79e35399a8c5040a99e2b6ad71e0b6dc56af902c2200edfd7bd3afc03571ff35476040000",
    ],
    [
      "ETag",
      "YuLD3IiJ7IWzilvRm6d+JA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da3010c7bf8bf71ad4d286d045ea0314d621a5d042fab2a98a5cfb929939be603b2084f8eebda41d9bd64ae94b7277fe9d72f7f73f07f65b19c962f6ac8a4d0d76ffa500ffd0044b70b5f68e5e151a072c60e07941e44ef01f6836725f9fdd5e4dcef2af9bf544eeaeaf8970e217949cc507962bd0d2b1f8e781195e02b509d47569b2360b98df574d71952e67f35bca4b944d3e7f4c92d13899b263706a94dcf3ace53fd1f6740cd81a9f9790830523a099a5b2b806e167cd9a8e9795869ec3da0a70ac85db83c2625d718bd8a34aaf3fe8f5a3cb281c0ea228bc1886046a14dc2b34c43eae683ee6d173bdc41d6dc9fa9744d836a68df3f6b9a5ba92ed264d389ba751d80ef82fc085c0daf8ac13cc9575fe55bd3fe09b0aff939a7f12a4ab52ba0b2ac048b05d94aa322ea505e73a497419afaa13365e2c92f7aa186951c96e70ab3a00edb727e05bb2187d242d19ecaf5693513a7d47384fb63921e9ec6eba4a4777f70df7f46684f1de83bbb748ae72d018aa7f1e5e0d86d1f9abc76eb0f11d7d27f6b68680094ebfca77e5599c73ede0f80233ac501088030000",
    ],
    [
      "ETag",
      "wcaZonqdyu/G8D/f9qjDdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `id` as __pk, `date` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7f6fda3010fd2a91f7cfa65120901f805475accdda48347421b4eaa6099ce492998638b51d3654f1dd77494a5b56a99522c1f9bd77efee7c7e20772c8fc988842cbd2f416c3fac78485a04144df114ce7fac06c52aff9b7fbd91e717a6bdf93c9d8e8f8f91c12a95a4eb228323c94b11811ccd67ed54f0b2a082f3234c74a45bf8f52dc3362dcbe8d906ea2464c984e577a8fead5421479dcedebb9d729e66400b26db115f3f9d7736bd4e21f80a22253b87961d74919db74d4f321e51c5787e3c9f6101a504b18035651996f0ac8cc32f87a9db8caedb2992372c021a45bccc555516a688789eb0b4147556327a2075992ffe909933714e036dc9e2a546a5b65814772d6d1953054bed9b3fbdd49602222e62b9d46e2e1cdfd11aaaeb6973cf736681f6f1e4131ac52015cb6b9b80861954168f93705fcfbf1250452534e0c2ee5a541f74876112da5132e89b61d285301c84b649fb61371a1a60c42150d4a92a7bada239cf0731f4ec38494cb0ac2436131a5bfdbede4bc25edf34f4618fea56a2d3fe80ec5ae48f600ace982cb864cd38c88def06ce22f0e7dee93870ea36125a66eaac29ae6ae2659d0a9b44d21b7ded2a947174aa66eb7a81e38f4f03f7da69ae7302298db6b37bbcd0846612904d055d830271c9631c1ab99acedcc09d7ae3092aea3bbada332419fd7c781604dba29eb2aa7fc9d8f7c7b7a8a142d0ed7f18d6611964b77b61774db3b2a6d4fc3a6af26f1a80e8d8cb73d43b888c83c822bb5f3bfc5a0477ba7126dfe78e7f4b9a231f12109047efef04926be0dda7b97f27c8c597823652618c1b18c9ca2412d06c225bd7ad3caaed8139b4494d16ea1566ebfa7ee4558e2a23ac21578f1d35efa41e620595f28984202e90e77ae788fe03c1d1b47ea7040000",
    ],
    [
      "ETag",
      "eGZj8pjnxnBWsGH57v+OOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff6d916f6bc23010c6bfcbed6d0bb5eb2a147ce19fe2449159f5c51822b13dbbd6b6d725e944c4efbe4b1ddba08390dc3df91db9e7728553562510c0214b3f1a94978714f5ca0411aaa6d08a8f9a2a8560016a9132399ee7a73c9bbeaa78b22ea7e97c75d6851c0e064ca8f81d4b01c1158e19168982e0ed0a952891cbf6fbfac488bed4269b2d37e1348c58282931c272bb580c478b106ed64f492234fe964c869bf03f7e77b320a74384479458c5689eaf25e518eb9971a6445917682b6a648c0a5ab8bd482535b59044362b76cfe7f5e87bfd27dff7dcbec76041b1d01955cc6ed7dc1868d2a288e8ccc6c000b20dd9e3b1dd3f59eeb5064ce43aae633baeedf4da1eff427e17f23b90db85dc0ee47521cf40bbef6647178dea45123b57684c3bf7018cc90c85c71b68d9a005b1e0af7bcef43dbf7d01623a296517020000",
    ],
    [
      "ETag",
      "CKjkjiGYscDSmGgKQwtlrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "1f8b08000000000002ffedd34d7282300040e1bb64ad0e5634a63b0474b43488fc49374c8801228a3128443abd7b9d5ea37ebb7780f70d08a5ac69d2dba5623578070ff28646749469c6bed5fa604b0c7dd54ab31f966dcd37d509f1b397131cdbb628f77139342cdb459e61f429acc4ba4ac9d6b976ce35803141272e2b79e98dd3e21a6587db33605c1ce4876565f25e20137b3396ab284cec3d160df1572e1581a2b80e92b0f58282376efd152924fd23ec26eeae531a756677a8bf4d4b8a55a8b229dcf6da3df1a27e791c868eb5fedc787e277c331ac3e48c3b512cb5b9e874ecf2dd384b509be7ba398f2f56337a79f977c0003025b8644dca9fb74fa6080dc0dffae9ed21d8f3ff05239249f0f30bcdc3666419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-17-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d6f9b3014fd2bc87b5c939042208914ad514a57d684ac405a75d3848c63985bc0d436dda22aff7d17d374ad2ab54fd8bee7dc73ee078fe88e555b344529cbef1b2a769f6e798a8e10553887d78b9bcff7a5ef5ae5c2be109113f16f3f767f2f673340b09625715917b42779230895d34dd4cf056f6a2c38ef41a2ded0ed0d1dcbb1dd91e3d8c7ae0d3c498b6cc9aa3b60ff56aa96d3c1e0a0ddcf39cf0b8a6b26fb8497cfef8387e3412df82d254a0e5e4b0e40450ede17fd52708215e3d56c138181465291d012b3022cfc676ed393d7a9fb0c97fd1cc00f8c504c086f2ad5da8214845719cb1ba1b3a2e923d2365f1c50e42dbd456c105e34659554b8a447c6162b9ca85d4d8db370bd32fce06c1daee6b1bf0e926871eeade6fdc57ab9590591717dee859ea1705a50cd3566c689be057001fd2d958a555a3d6e9f5be5a706f96fc7d212405ad22e98b8a6838763739266a94bb2b1354a3393a6e9387547d84a4d32b1a9bd4d29069e16d52c5cf1ca3127966d53333936c734b187e62499b8d628b12d1bb890d07409da1fa13f82297aca64cd25eb3a84ae433ff69238dc048b79ece91232dc14eab433d616f0d2a3820201f44e4dfb36ca3828b5edf683d80be78bd8bff2ba092f698ec92eba871967b89014d05840f314152bbe8586a160bef24e01ac27f6fd109468faf311b53d6f5dbc68f9333d8601b67695fea2280efde0abb673405ce1a2d19087ee8004255c6cc1f3fe17e06045bb1ce872e38537a87b0a694605adc8c7b304b00e7cf8a71dd61eb0b0f8202315dc6173886c4588a0dd06315dec81ed4eaca1833458a83731dbb20e3d6b73b41969492bf55451b7f6506827d6c867100461f881eed5fe1faba30d9d76040000",
    ],
    [
      "ETag",
      "KY+qmI73mC4KrS6SoJZyxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93516f9b3010c7bf8bf73822350b810da90f499b6d9168d212f23455c8b50feaccf8986d324551be7b0fda65d35a89bec0ddf977e2eeef3f47f65319c912f6a0aa5f2dd8c3870afc5d1764e05aed1dbd1a340e58c0c0f38ac8c36eb546f45fa693e9e63a738f6dfc516cef2e2f8970e2116ace92232b1568e958f2e3c80caf81da04eab636459f05cc1f9aaeb8c9b3e5ea1be535ca2e5f6dd374364f17ec149c1b25f7bce8f977b4dd9f02b6c3870c4ab0600474b334167720fcb25bd3f1bad13072d85a018ef5707f50596c1b6e114754198de3d1389a44613c8da2f0531c12a85170afd010bbddd07ccca3e73ac3dfb4251b4f88b07d4c1b97fd734f7525fb4dba70b9caa3b01ff05f800b81adf1c520582aebfcb37a7fc01715fe27357f274857a5f410548191608728d5145c4a0bce0d92e80ade34676cbe5ea7af5531d2a292c3e05e0d00daefcfc0d7743d7b4b5a32d85fadae67f9e215e13cd9e68ce4cb9bc5269fdddc76dcfd8b11e6070feed622b9ca4167a8f145f8791a4717cf1ebbc2ce77f49dc4db16022638fd2adf956749c9b583d313833fd00d88030000",
    ],
    [
      "ETag",
      "yjNOoot9535SDRshu7+cUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `date`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "a34010fd5764ef973bc887498c9a40e985d46b85346d8d6929c791aceb68b735aedd5d5342c9ff7ea336fdb8420f026676de9b37f376f6993cf03c266312f1f4b104b9fb762f22d222a0698aa770ba4cee68a0afcea6232859baedfbf2eee9e80811bc6229ba2932682b514a066abc5c745229ca824a21da58a8dd73db3d7b605bced0b6adbe63214f4196cc78fe80ec3bad0b35ee760fda9d548834035a70d56162f37adeddf6bb8514f7c0b4ea7e94eca28aea7e2d7a9c09463517f9d172810d940ae40a369467d8c21b338e7e7e2cdde174d34911bce50c2863a2cc75d5169660224f785acaba2a193f93bacd777fc8c29b79d3d058f3786d5065ac56c543cb58c754c31abf19557a95d30dac8d5fc1c5b9b196c0848cd5dab839f302cf6878fedc58cee7de2234be1fff40d51894e679ad19d228834aefc516fff3655404aaa98226b9724c9bf65c73142591c31277308c1213a2c88d9c211d44261b5960c51150e4e9aa7acda2394e6ac589edd0b8c79c98d94e9f8d868e639936982366ba68340c7b23d38dc8be459e24d770c25521146fbc2137811f7aab3058cea793d0abc7486899e993a6b96a88f77d6a1c12415fccb5afb25ca05265b43f0fbd60320dfd6bafb9db19a494ed168f78bb09cd14209a4ab45a833c17319a462e2f167ee85fcc273364d4177679402832fefdfc46087745edb2aebf641204935be45029e9ee9f1cf6615b64bf7f27774db3b286d4f83a6aea6f9b04e9e12c6f51ff43647d886cb2ffb3c75f8be08237cae46ae905b7a4390a20010939fbff4e20b84efcf79d1e1e0d62f1d9a08cd218e3063255893009cd26f24d3dca0bdb357bae4b6ab0d49f72fdd1e0607955a3aa081bc8f5cb44cda3a94dac52a57a0561121768eecf4f31fb1752668998b4040000",
    ],
    [
      "ETag",
      "eGUfhaRtQHC9eucgv2Irhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "7d",
      "92",
      "51",
      "4f",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "4b",
      "7d",
      "748b63e0304b78001c88218803e28321a46c7773b0ed8eb6c310c27ff7761866c4f8d2de7b7abef4f6a447b64df290b96c9dc4bb12c4e12606f5aa0b1f64992a495b81b9046630503c26e7209af4e3f4ee6dba6faa7830b87d81dd54753b1d72c8e00332cedc238b124843c9dcf723cb790684ad56c5962cea50e86e34997b43cf2721c3500b93c578dced8d3d76322e48c815d4c86377eefdef4fb954abaabe40b3b93f9a0cffc29627836d70ed430402f200f4d485c00d046aa403913c2b523025962200c92a7375100b2c0b2e104d52ccc683d9709a4eab7def382dbbdd22638a015709e6e45dcc683ea650f1d4c74fca836983a84a8a26aad63dc98dea1dbab22ddb322ddbb46ae919c41e1359cdfc1372aea15a9a053c4df815635f33b5e4e9c07f13ad6ba296faa8404628428d2dbf9fda3b90381548b949d09159e7f8faa823a52b5c254a3058c0e9bf3c25eadc9fbe00c0f38e868c020000",
    ],
    [
      "ETag",
      "FfNCgl/WPv3tgFF+OeqPtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0",
      "bb",
      "642d8e434148778202162a50e547364c8c9f122811422cb59ddebd4eaf51df1dde372294c23094f2d20047cfe846543ca553bf332d6764ac2ec8a93d1c1df73c4011b0408a6bbcd81a9bde8a67eec8ec769eaf81db17e6e71a491d857aa59a8aac915dbf8fcc6a91e8a7e8b673791e3a6d14da89026e58bb8a612a2f751bac46eb5888f152fb9db73672b5d28e2e94ef8ed2e8cb6a4513f5f0e6b16ac7bd463d157d1a40c02269d9d17eb680319c8fd88f4d42529d1e70764d8419179bfe9cbf564bdc7e68ba8da5c61d2ef3afeb3633424c878c4f1f1efe2f3441f0d9310143c9eedb9f748c27e8af7e296f1ddcff5b400408f4f30b7b8a507019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-19-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3014fd2b91f771f4491f49a56a542540259a8e34054dd314d9ce4d6648e3603b3cd5ffbe1b873210127c8aed7bce3de73ef24c6e449190096122bbad403d7ebb968c1c103034c3d7c143c5d4c353f1fd227b3a55fd4cf5cac4bf9f4e11216a96a6db3287969695e2a0279b753b53b22aa992b285895a3dafd51b1d8e06e3e16834e88f07c8d390a7e7a2b841f65f634a3de974f6daed4cca2c075a0adde672fbfadeb9eb774a25af811bdd792fd94115ddf95cf4472e39354216d3cd1a0d541a540c5b2a72b4f09f99b0a3f7a9db826edb1982ef0407cab9ac0a53dbc2145c16a9c82a65b392c933b136df1cc8da3ff7e791c3655e6d8bb8a05b3870126a686c1e4b704ec2d5d2590427ab70398b16ab205ecfcffce5ac3d5f9d6f96c1dab93af343df3194e560b9ced439b2b7002fa89f8036a2b0ea51fd5c2bbf3468f1712c3501a53534c178dc1dd19edbf558cac63c750f872ced02632e1b0fe921eb726f00838401459e15b52c5ac88232960c473d887b7cc8e301702f76dd9e17f36ebf0b7d006fcc47647740ee9530702c7429b5683a44aec245e4c751b809e6b3c8b725a4b4cacd7163ac2ee0ad47830522e8939a7675544854aadbbd08223f9ccda3c5a5df4cf81c32ca1fd7b738e394e61a104d1536cf805aca041b4682d9d23f46b09dd8cf7d5093c9ef6752f7bc76f1a6e5aff4080758db35f64bd651b8084ead9d3de292e69585dc3507a2804b95a0e7dd1fc4e18a3639c8c5c60f7f91e62984141414fceb5922d806befcd3f66b8f585c7c94d106efb8395cd7225c41b341c216bb67bb5dd71b120b56e643cc73bd7dcfea1c7546d842615e2a6ad61e0b6dc42afd0ac2200e3fb0bddafd03a2ba9cf576040000",
    ],
    [
      "ETag",
      "4xubrxzn+QgzGr2gr1pdEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "514fdb3010c7bf8bf79a4a7484b444e2211d65ab96b6d086bd2014b9f62533737cc176ba7555bffb2e817568208597e4eefc3be5eeef7ff6ec873292c56ca3cac706ecee4309fea60d56e01aed1dbd6a340e58c0c0f392c8dfd97cad7e7d5d1ae91eaf6e926fe3f27cbc492e2e8870e23b549cc57b5628d0d2b1f86ecf0caf80da04eaa632799705ccefeab6b8ce56b3c567ca2b946dbeb84dd364924ed92138364aee79def1ef68bb3f04ec01372b28c08211d0ce525b7c00e167ed9a8e57b58681c3c60a70ac83bb83d26253738b38a0ca60783e1846a751383a8ba2f0e3282450a3e05ea121f6764df3318f9eeb15fea42dd9f09408dbc5b471d13db75457b2dba40d678b2c0abb015f025c086c8ccf7bc14259e79fd4fb0b3eabf03fa9f93b41ba2aa5fba0128c04db47a93ae7525a70ae974497f3ba3e6293e5327dad8a911695ec07b7aa07d07e7b04aed265f296b464b07f5a5d26d9f415e13cd9e68864b3f9749d25f3eb96bb7f36c264e7c15d5b245739680d353c09c767a3e8e4c9639fb0f51d7d27f6b68180094ebfca17e5595c70ede0f0077bed5c5988030000",
    ],
    [
      "ETag",
      "zTMSixKOndsqFQAV8g98bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `id` as __pk, `stamp` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85537f6f9b3010fd2ac8fb67d3f283102069a4aa8b32b621a5b425a45d354d89318639054c6dd329adf2dd7798a66d56a9951060bff7eedd9dcf0fe88695099aa09865b73515db0f1b1ea30ea20a67b0fbd3d904f9c8f97c797d1f157c96de6fe617e6f4f81818ac51495c5439ed4a5e0b42e564b9e86582d715169c772150d732bb0377e8da23c7756d6b64834ed23c9db3f206d47f94aae4a4dfdf7bf732ceb39ce28ac91ee1c5d37effceea57826f2851b27f68d90717d97fdbf424e7042bc6cbe3e50212a825152b5a6096430acfca24fe7218bac770d1cb807cc708c584f0ba544d5a1082f03265592d74543479403acd173f68e1cdbd5964ac59b236b03456abeaa663aca50287b5f12d3c3b35d682122e12b936ae7e78a167b45c3f309641e02d22e3e3c927704aa854acd43e118e73da783cb6c27f7d008d002b2c690bae46a68b0763f3284ee31149c743274e4d1ac7e378e4e0616c92239bda494c31e854135dab70c94b731cbba983539b0e6c129bb6950c5d6b4c86d41cd89665c22e3e1aa7a983761df4573045bf325971c9da7ea0abd08fbc55142e83d934f2741929ae73f5b54dae29e2659e0a8a04d21b75ed1a9471706a9aeb0791174e67917fe9b5e739a71926dbc52d9c688a7349818d052ea8a2e29427d034747eb6f023ff2c98ce41a10fe97ccf9068f2ebe159106d2bdd65a5bf681a86d36bd06021f0f63f0cf2706db4dbbdb0bbc479ad299aaf576dfcbb164003a8e579651dacec83958b76bf77f074100c75eb8c2e965e788ddaad90a654d092bc3f1340d6c0bb77737f51800b57056c606015830924b2312182b693c80a5dcaa37a3c709d01d264a15e61f0dab7bc89d144a4052dd56345ed45d14d6ca05a3e910084010afce03ba0ff00a2acd73da8040000",
    ],
    [
      "ETag",
      "X5jNl75+VYzTmoCfzjLQ0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d91516f823010c7bf4bf70a8b282098f8801bd95cd430c4876531a6e2c950e0b02d5b8cf1bbef8acb36135fdabbebef7fb9fbf7c4f679b56103b6ceb34303e27897817ad5410cb22994a4abc64a023318289e1119e23417d963926565501ddea297220ac4eb7048844c3fa0e46c7062db1c8a8d6483f713ab7809245badea3d21ea58eb6c3c4bc2a730a642891b5d982d2693603409d9d9f89548c5cbfa4f938ca7e13c09a6d12dd5f26cb01dae63d882802a053d442d7007a91aebfd24b52ac094d88814246be1f62113d8d45c209a5431bb1dd3727baedd775cd7eef66d020b4cb9cab1227631a7f19842c58b18bf683da601d186b4e9b63d3fa96cb56bb4d1bde3751cc7b77c3bf4db31ff73ee35e7fbd66dae7bcdb93675b49d1ba07d0d7a96d723d0ed7b1776f933fde8a8404602c90a09da85cec59107d42e29724f89060c9672fad1e75c5df2f3378900a4892e020000",
    ],
    [
      "ETag",
      "EoMirgDTggmAnqYPJlPArQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00d0bb64ad0e13f1437788750cb4604684c22643d258011320fc8c9ddebd4eaf51df1dde37c818e36d4bbaaae412bc009d416bc6665ebddeecc6e2c3b2b33b7cc527b3f0048a8822efd7d16d20bca597298a3bba32d281890ef668df567d16e3ca12245130b513b7e8ec61d8326c45cacc259c232d3e9bf35d88f56eee1ea979d218ebe098498e1cbbf4dff25e1bddb488a3f3728a996a82c889b180db252c475f1f882394e1c74806aba090c32214fef8459ddb5ecbd6488f98220639f40ea6a0fd3a45e13557d4e705bb481c48348eb4adc364f6f4f47f8109e0b73a57bc25f963fb7c615913f0579f74bae68fff1b9e29aec0cf2fec1fbbaa19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-21-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbb8e64d088914ad514a1bb684ac84b4daa6091973616e09a6d8648aaafcf75d4cd3b5aad47ec2f63de79e731f3c927b9ec76442229e3e54501e3edd89889c115034c5d7cf0bb958f6cc4331d88eae7f1ea2e4dbd557f77a3a4504af5992ee8a0c5a5254250339d96eda6929aa829642b43051abdf6bf5ac81658e869665f64726f22464c992e7f7c8fea35421279dce49bb9d0a9166400b2edb4cec9edf3bfb7ea728c51d30253baf253ba8223bef8b7ec904a38a8b7cbadda0814a4219c28ef20c2dfc67c6d1f9ebd46d4e77ed14c17bce803226aa5cd5b630051379c2d3aad459c9e491689b2f0e64e32c9d7960309155bb3ccce90ece8c982a1aaa4301c6a5bf5e19ae77b9f657b3c05d7be166be7056b3f67cbddcaebc8d71bb707cc75034ca40738da971ae6f1e5e503f06a978aed583fab9567e6a90fb762c3501a52534c170d4b568cfee8ea3241ab1c41e0ca3a40b516447a3211d445d3636c18c23a0c8d3a29a457391830d3d2b621076136685a60976381e333b84416c9a83786c5346c9f18cfc2db9820b2e0b2179d32172ebbb811306fed69bcf02479790d02a53178db1ba80971e151688a0776a3ad6512e50a96eb7eb058e3f9b07ee8dd34c7809296587cd03ce38a1990444d3129ba7a05c89181b46bcd9cab940b09ed8f7535092c9af4752f7bc76f1a2e5cff4000758db55fa4b3681ef7a57dace097143b34a43f6cd8194c04419a3e7e36fc4e18a3639c8f5d6f17f90e6c987044ac8d9c7b344b00e7cf8a79dd61eb1b8f8282315de717398ac455809cd06715dec896df70756976870a9dec4cca179ea599da3ce083bc8d55345cdda63a18d58259f4118c4e17bba57c77fc1bd5a4b76040000",
    ],
    [
      "ETag",
      "+HsHL14yp3U7QZybfKGJIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93614fa3401086ffcbde579a588bd490f881f6ead9045b4b31e6620c59d9815b6f61e8ee52d334fdefcea2578d5e825f6066f69930f3eecb9efd95b560217b94e5a605bdfb51825db92001d32a6be8d5606d80790c2c2f894c56d3058e3677ed7473b97a9efe3ebf5bfa57d1c5051126ff031567e19e151294302cbcdfb39a57406d39aab6aab32ef398dd35aeb84e93f9e217e5150a972f6ee3389ac43376f08e8d825b9e75fc37da1e0e1e7bc2c7040ad050e7e06669343e416ee76e4dc3ab46c1c060ab7330ac83bb835263db708d38a0cae074381806a3c01f9f05817f3af6095498732bb126f6764df3318b96ab049f694b361c11a1bb98362ebae796ea52749bb870be4803bf1bf023c0f31cdbda66bd6021b5b1afeafd03df54f84c2afe4d90ae4aaa3ea8845a80eea3649371213418d34ba2c978d31cb1c972197f55a5161aa5e807b7b20750767b042ee365f43f69c960ef5afd8cd2d917c258b2cd1149e7d7b3751a5ddf38eee1cd08939d0573a3915c65c0196a78e29f9f8d8393578f4dd1f98ebe135add82c7724ebfca95b42c2cb8327078011a2dbe5088030000",
    ],
    [
      "ETag",
      "RQCNo3qWuCqFQwCY8WO4HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `id` as __pk, `stamp`, `last_name` FROM `records` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10",
      "fd",
      "2a",
      "91",
      "f7",
      "cfa6f5479aa6695a09b10ab22d5a0990a620344daded3899691a07db010aea77df25a140870452a4d87eefddbb3b9f1fd18ae7311a23c2d39b92c9cda76b41500b318d5338bdbcfa35ba7c18ddaf3667e1f98ce4f3fb07ffebddc1013078a552785d64acad44292953e3f9ac934a5116580ad186406dcb6af79cbe630f078e635b431b748a65c994e72b50ffd5ba50e36e77e7dd49854833860bae3a54ac9fcfbbb756b790e29a51adbafb965d7051ddf74d0f3341b1e6223f98cf20815231b9606bcc3348e14519936ffba13b1caf3b29906f3965985251e6ba4a0b425091273c2d651d158d1f519de6ab059a7953ef2832963c5e1a58198b45b16a194ba5c161098b0c2bbdc8f19a2d8defe1e989b1948c0a19aba571f9d30b3da311fa81310f026f16199f0fbf806dcc94e6796d1a6192b1caf0a92ffedbdba8045863c51a7031341ddc73cd1149c890266e7f40129311e292e100f789494736b363c230e87415bd56e11c4a351dc71aba985826895d823121d8262c19ba3dd6eb91c1c08448d42168db4277926b76cc5521146f9a832e433ff21651380f8e2691579791e032d3c74d725511aff3d4502490dea96b5ba15c8053d5693f88bc707214f9175e73b9539662ba99ddc0f52638530cd85842ab3593272286a6a1b3d3991ff9a7c1640a8afac6ce760c85c6bf1f5f04d1a6a8bbaceb3f9a84e1e40a34584abcf90f833c1c1b6db7afec2e7056d6949a5fef9af8b70d807a50cbcbcedadbd97b3b076dff6ce16b2198f0c6199dcfbdf00a3547214b986439fd7826805c031f3ed4ddab012ebc1bb081e9d51c2690aaca844ad64c225fd7a53ca9",
      "ddbe650e504d96fa0dd677fbbb965731aa886ccd72fd5451f36aea265650a99e4900c200057ef003d07f4580bbf7b5040000",
    ],
    [
      "ETag",
      "WYK9Wz9xkyPRQSbnUxzI+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "7d92514fc2301485ff4b7d148c1bdb60243e2859c608101ce3c91852b7bb391dbba3ed4024fc776f874188c697f6f6f47cb9b727ddb3f7bc4c589fbde4d9ba06b1bbca403dea220459174ad256612981b518289e917367a66b0c261f9bd1a7efdba21c6eb7d7517677470e19bfc28ab3fe9ea539148964fda73d2bf90a085b2eab77b2a85da54fc134f27c2f2461858916a68bf1f8fe61ecb143eb8448c557d50f1305136f1edd4f66ff5305976ad9d427721e85c1d4ff0b7b3eb4d81bbe8490828032063d7b25f00d6215e858244d50405b622d6290ac31371799c0bae202b14d4adb34db86d371acaeed3896d9b5c85860cc558e257917739a8f2954bc08714ba9306d104d4901a5cdba21d968ded1543776efd6b65dc3b53cf7a48e406c3097cdd8e79c73c9b9ae71c9cd635ee4fc17665e628e450d2dfb8cf3b8825f947549f58c5e8728a7db3b0307a840a628124d3f7fbffd6147e24c2005294167787bcc73803a63ead457a286168b397da361ae8ee7c317ca0357c5a3020000",
    ],
    [
      "ETag",
      "y2fqoIMxvJzGG5rnHww+Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00",
      "00",
      "02",
      "ff",
      "ed",
      "d3",
      "5b7282301400d0bde4db326010a57f12a4a4f8401e03f893411a10b48a37f1014ef75ea7dba8670fe781f2a2e0423079daf3237a475d3e349542f1da89e5dc2a3737bed229119a85dd62bf39acae3380c99d36e7fdbab50d8f05db251e93d88610efd6260b7dc9bb58238d9b0659906d8f63bca15d964535be8a69e01e9a7ec95c3de13e6d6220973a49030d6c0279e1dfc25da5ca440a0ce0ac2272dceae75ec58e37d7bffdabb7b03ba84b5ca8a21f89a1412e53522eb4b7c6f9a09f5534be6ce27c36313416362729b561c5cbd11c666bdaba25d7651f527ae81d5d7979f9bfd000f17b5b0317ac7e6ec723d31ca0bffa4c762d7ffeb7780e1cd0cf2fdd7dc1e219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda2424214f295aa3942e9112d20169344d13b2cd85ba019c62d3a9aaf2df77314dd7aa52fb09dbf79c7bce7df04c0ea288c99430913e54503e7dbb978c5c10d034c55780dbfb2cbfb9bb5e2e7a873d3b4c96f9fe219dcd10216a96a2f93183969255c9414d77413b2d6575a4a5942d4cd4eaf55bdd617fe88c06c3a1d31b39c85390256b511c907da7f5514d3b9db3763b9532cd801e856a7399bfbe771e7b9d6329ef816bd5792fd94115d5f95cf47b2639d54216b35d80062a0565043915195af8cf8cd9e5fbd46d41f3768ae047c181722eab42d7b63005974522d2aa3459c9f499189b6f0e2470d7ee22b4b8ccaabc880a9ac38515534d23fd7404ebdadf6eac9577bdf537f370b5f5a260b17437f3f662bbde6dbcc0da2f5ddfb534651918ae35b32ecdcdc30beac7a0b4288c7a583fd7ca2f0d5a7d1c4b4d4069054d301ad943da1ddb1396b0114fc6fd014b6c606ccc4603da67369f38e0c40c28f28ca861d14216bd01a3c309e3d1b00776e44092446c3cee46311dd8940ffa5d9b39e47441fe9642c3955047a944d321b2f757a11b85fece5bcc43d79490d02ad3578db1ba80b71e351688a04f6a3ad5512151a96ef7ca0b5d7fbe0857b76e33e135a4943f050f38e384660a104d4b6c9e867223636c18f1e61bf70ac1666237e7a022d3dfcfa4ee79ede24dcb5fe9210eb0b6abcd9704a1bff27e183b67c42dcd2a03796c0ea4042ecb183d9ffe200e57b4c9417eee5cff17699e7c48a084827f3d4b049bc0977fda79ed118b8b8f324ae31d3787ab5a8497d06c9030c59ed963c71e8f880197fa43ac37999c7b56e7a833420e857ea9a8597b2cb411abd42b0883387ccff4eaf40f6806196876040000",
    ],
    [
      "ETag",
      "eeVjlmPhFHC2kWbk9HmWqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "db",
      "30",
      "10",
      "86ff8bf6d581a4769d62e80727cbb60c27691377304631aa74f6d4c9922ac91921e4bfefe476d95807ee17fbeef41cbe7bf5fa487e08c549461e44f3d4813dbc6bc0df86600bae93dee1cb68e58044043c6d908cd5d3cadf5ef92f8cbaf9d7f9da8cf9e738bfbe46c2b1efd052921d492d407247b26f47a2680bd8c6b4ec5a55f55944fcc184e2aedc2ed71f316f350ff9faae28f259b120a7e8dcc8a9a755cfbfa1edfe149147fdb0851a2c2806611663f52330bf0c6b3ada1a0923a73bcbc0911eee0f1aab3b43add623ac8c2ee2d1248dd3647a99a6c9c53441506a46bdd00ad9bb1dce47bcf6546ef54fdc924c62246c1fe3c675ffdc635df07e93102ed7659af403fe0d50c674a77c3508d6c23affacde6ff045857f4949df08e25509390435a038d8214a988a726ec1b94152bb8a1a73c6669b4df15a15c5ad167c18dc8b0140fafd19f8506cf2ff498b06fba3d5fbbc5cbc229c47db9c9172b95aecca7c7513b8fb1723cc0e1edc8dd5e82a07c15093717275394dc7cf1e9bebe03bfc4ee66d071161147f954fc293aca6d2c1e9178334049188030000",
    ],
    [
      "ETag",
      "3nqMtQ8tVcasCYCNp0dJ3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `first_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b6f9b3014fd2bc8fbb249791108d048551bb56ccb94d2969056d53425062ed429c1d436ddaa2aff7d17d3f4b1aaab8414f039e79efb721ec80d2b53322631cb6f6b10f79fd63c261d028ae6787afe630db96305b3bb729ec665981ddd56f9f9fe3e3258a392745315d095bc1609c8f162decb05af2b2a38ef62a0eed0ee9a8ee5d8eec871eca16ba34e4291cd587983ea6ba52a39eef777debd9cf3bc005a31d94bf8e6e9bc7f37ec5782af2151b2ffdab28f2eb2ff7fd383822754315eee2fe698402d412c61435981293c2bd3f8f075e81ea39b5e8ee43b96004d125e97aa490b4324bccc585e0b1d958c1f884ef3c50b99fb33ff283256da676550692c97d54dc758654c48b52ce90656c6d7f0f4c4580948b848e5cab8fcee87bef1a49906c62208fc79647c3ef882a62948c54a6d19d1b880c6eeb12bd3b7b368045451092db874070e35bdc15e9cc56e9279d628ce0610c75eec8ea8150f923d1bec34068a3ad544d72a5af2d21a5adec874f7861eb53dd3314d2ff56cd389916c65b6e3ba7b6099903a64db21bf055370cc64c5256b5b432ec369e42fa370111c4d225f9791d1ba50c76d724d112ff354582492fe53d7b6411947a7a6cfd320f2c3c95134bdf0dbd1ce20a7c9fdfc16879bd14202b2a9c06e2b10273cc5a691b3d3f9349a9e0693192af4bcce760c49c63f1f9e05d17da5bbacf42f9984e1e40a3554087aff0f368fc269f08d6cb72ffc2e68516b8e16e8afd6e0ae0508ac71b938938343f8a38bd4ebb5ed3c3370f11498efc2381f750de27d3ce1d8d00cd7cb7acdf9b5c5a743f0b6b47590f3851f5e91f628840c0494c9c71b86640d7c78e9773710b97807d1462afcc67d4e6463920868f79a6d9a64766a6f3418e8bf0c45857a8399d66837c0264613113650aac78ada1ba827d240b57c222188eb18b4f3fa0be68e7b5e01050000",
    ],
    [
      "ETag",
      "QJjeg63NLvnSdbnRfCqpgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "4b",
      "f6da0eab5d1d823075a282c8acca184324a6b75db4eded925427e27fdf4d1c630f3eec25c9b9f90eb9e7e6ccf6b24c58876d65f659833add6560e6f61083ae73a369abb0d4c03c06866744cef95bfc1ac5c7f4797e08027c1c89645c64dd2e115a7c40c159e7cc520979a259e7fdcc4a5e00d9369b6a4f883955562d96f16436225d6062f56c359df6fad321bb78bf8e542a6d364efcc3b7be786c87db185250500ab05d540a7720ccc406d4bca872f035d64a80660e761799c2bae20ad1a78adf0cfd206a4561fb218ac2663b243047c18dc492d8d5821a64060dcf633c523ed62240b923454ddd7aa032ec401d50eac6137cb987ef05162e9cbd1d2a09aee3bf1601dc4070931f7021f31b162ed0804e5125ad9bbe5ec10db7aef54fd3fd13f12f0a69021a6cf8c6751003b45e434333aa068f094e3f3996e6aa2fdff150008a26020000",
    ],
    [
      "ETag",
      "QaYRW6RwfDQv11o8GcdHmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d4fa34014fd2b64f6d596da42a14d9ab55b712569a94ba9c66c3664182e2c0a4c9d196a8ce97fdfcb605d8d893e3133f79c7bcefde099dc17754aa62429f28706c4d3b73b9e9013028ae6f83a1077f7cbc90f55aa41655ead6ffd72dfdc3cce6688285a96a4d5ae849ee48d6020a7db4d3f17bcd951c1790f13f58676ef743c1a5b8e3d1e5b43c7429e84325b16f53db2ff2ab59353d33c6af773cef312e8ae907dc6abd777733f347782df0153d27c2f69a28a343f17fd5e724655c1ebd97683061a0922868a16255af8cf4c93b3f7a9fb05adfa3982f70503ca186f6ad5dac2148cd7599137426725d367a26dbe39908db7f41691c178d954755cd30a4e8c942a1aaba71d1817e17a65f8c1c53a5ccd237f1dc49bc5a5b79af717ebe576156c8c9b4b2ff40c45931234d7981967fa16e005f55390aaa8b57ad43eb7ca2f0df23f8ea525a0b4842e183b83313d750793244b1c96b9233bc90690246ee2d874940cd8c4022b4d80224f8b6a16adb1e653c7b247e9247653e6c4969d5a31cd32271e8d1248c06190582e399c90475128382fe48ecba2eb10b909fdc88ba3701b2ce691a74bc86853aaf3ce585bc05b8f0a0b44d027351dda68c151a96db71f445e385f44feb5d74d780939654f9b079c71464b0988a6029ba740ac788a0d23c17ce59d23584fecea189464fafb99b43d6f5dbc69f92b3dc201b67695fe924d14fac14f6de788b8a665a321fbee4004302e52f47cf883385cd12e07f9b5f5c25bd23d859081809a7d3d4b04ebc0977fda71ed118b8b8f3252e11d3787c9568409e836a8d0c51ed9aeed0c6da2c1427d88b943f7d8b336479b112aa8d54b45ddda63a19d58235f4118c4e107ba57877f7072bae976040000",
    ],
    [
      "ETag",
      "0rjkL9Btlt0m/POYIlvuWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "10",
      "86ff8bf735956849d329121f5ad66d9d420b6d82d0261499f8929939becc768aaaaaff9d738082c6a4f025b93b3fa7dcbd7eb3677fa4162c6677b2fadb82d97daac05df9600db655ced2ab416d81050c1caf88c4a88d7e9ccf7f8e9aec3abbc914afd5707b757646842d7e43cd59bc67a504252c8b7fed99e635505b81aaad75de650173bbc61737e97ab1fc46798dc2e7cb2c49a6b364ce0ec1b15170c7f38eff40dbed2160f778b786120ce802fc2c8dc17b28dcc2af6979dd2818586c4d019675707750196c1b6e100754198cc68361741a8593711485a34948a0c2823b899ad86c43f331878eab353ed0966c784a84e962dab8ec9e5baa4bd16de2c3c5328dc26ec0b7002f0a6cb5cb7bc1521aeb9ed47b019f55f89754fc83205d95547d50055a80e9a3649373210c58db4ba2cd79d31cb1d96a95bc57450b8352f4835bd90328b73d025f93d5f47fd292c15eb5fa324de7ef08ebc83647245d5ccc37e9f4e2d273b7cf4698ed1cd84b83e42a0bde50c393f0f378129d3c79ec1cbdefe83bb1332d04ace0f4ab7c978ec52557160e8f907a0d8a88030000",
    ],
    [
      "ETag",
      "o6u6JCEZ2pUVUXUlaml1vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `first_name`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b4fdb3014fd2b91f765137da4cfb4951074906d914acad21484a6a9759c9b6048e3623bb00ef5bfefc6a13c8600a9526b9f73eeb92ff79e5cf33c262312f1f4a600b9f97425225223a0698ab7d7c3bd386a39fedfce44ee5d9c0dd3e1d729bbdbdf47062f558aaed619d495282403359acf1aa914c59a4a21ea18a8deeed75bfd4ebfebf4fafd6edbe9a24e41964c787e8dea4badd76ad46ceebc1ba910690674cd558389d5e37df3b6dd5c4b71054cabe64bcb26baa8e6fba6079960547391efcf679840a1402e60457986293c29e3e8f065e806a7ab468ae45bce8032268a5c9769610826f284a7853451c9e89e98349ffd203377e21e85d6d2f82c2daaacc5627d5db39609974a2f72ba82259e32ba3b58df82e989b594c0848cd5d23affe106aef518c0f3adb9efbbb3d0fa7cf005338841699e1bff90461994de0f2df25e0fa614504d1554e0c2b1fbb435b0875112392c19747a516243140d22a7473b91cd865de8c61150d4e932ba51d15ce49445bdb633ecc4031675c169452d3aa0ed9613c7f680256d3b6e7587712f6e936d8ddc49aee198abb550bcea13390fbcd05d84c1dc3f1a87ae2923a145a68fabe4ca229ee7a9b14824bd53d7b644b940a7b2e99e1fbac1f828f4cedc6ace134829dbcc6e70d209cd14209b4aecb6067922626c1a399dcebcd09bfae3092accf04e770c4546bfee9f04e1666dbaaccd371907c1f80235544abaf90f9b8581e77f27dbed33bf339a15866304e65419dc5600812bdc34c1957d087f4c9166d7b6b527066ea186d69b30ce475f827c1b67021b9ae07a755e727e6ff15323f874aa3ac8cfb91b5c90ea2a800424e4ece30d43b2013efc07d83d47e4e283441ba5f18cfbcc5469c224547bcd5765323bf5a0dfebf688214bfd0a736c7b37c0324619115690eb878aaae768265242857a242188ebe857f3fa074ffe3d520e050000",
    ],
    [
      "ETag",
      "k9+db17Nz3Lr+YV9g9BOcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "95",
      "52",
      "5d",
      "4f",
      "02",
      "31",
      "10fc2ff595337c1ee1121281108120ea010fc61052ca1e16ee6ecfb60712c27f775b1449e48597b6b39d99ed4e7a601b992e59c01672f59983dadfadc0bcda43083a8f8da62dc354032b30307c45cc5dd628c9e2f839ecd592caf465d078aa4dde76cd2631b4f88084b3e0c02209f152b3e0fdc0529e00c9e6f36c4314b3cf2c1a4fc2fee89170824b8b47d3e1b0d51e76d9b170564452693377e0265dcc6f90cd8e05b6c6450811284805d8c7670ad7204cdfe6a27992c5e069cc9500cd1cd95dac14e61957881e55bcb2ef95fc8a5fadd77cbf5aae578918a3e046624adce998dec70c1a1e87b8a358588508ca1d29a1c8ad5b2ac31ad416a52e3ec0976b7c2f3071b3d9dbae9270068313d34d706921801b285dd577b890f185459798fff45ca0011da15a56ae9ab4126ef89fe52fd9facc7e666cefa9f8a29002d360b32a9e72eba075a39e8151391498e0f45f7ad29cf0f11b06cdc0238c020000",
    ],
    [
      "ETag",
      "wp91i0SORH5m3UPJ9M5TYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00d0bbf4db1a0409b03f40080e514931203f4d65551a156aeba0d5ecee33bbc67c77784f409a864a89effd9976e00368627ad3669a723788c7f65a0dd7f60c5bd8d3920d9155186d0e59187b4e7cd1a53cb5150c2337c27b63a6c6682bf4f7cee879e7645ff78c740e9246bfba2ec30dea84da1a156e065be1d41aed0b458933c07913934c6667543ff46e31274e010996230bfdb57e50ba9c592a2f5685afe07cbb0c82aa168734dbfb353fd60f94f0c551b8c861a45fccb819f99fa64abab138656e3d2448c35b69a707ced6b7dcac715459f9a699bebdfd5f6002a8e24c5089d96bbb657bde04fcd5c777cde9eb7f4089a002fcfc026d3da39d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b4fdb3014fd2b91f795be689aa495aad195009dda94a6296c9aa6c8716e82218d8bed8010ea7fdf8d431908093ec5f63de79e731f792677bc4cc988243cbfaf403e7dbb15093922a0698eaf773f1f57ce55e4dae72b71f3ab7b3f3fff114d57e3312278cd5274bb2ba0a5442519a8d166ddcea5a876540ad1c244ad63b7d573fa8eed0e1cc73e766de42928b2392fef907da3f54e8d3a9d83763b17222f80eeb86a33b17d7def3c1c777652dc02d3aaf35eb2832aaaf3b9e8f74230aab928c79b351aa814c818b6941768e13f334d4edea76e73ba6de7087ee00c2863a22a756d0b533051663cafa4c94a46cfc4d87c73206b7fee4f238b89a2da967149b77064a554d3583fedc03a0b970b6b169c2dc3c5249a2d83783dbdf01793f67439df2c82b5757de187bea5695280e15a63ebc4dc02bca07e0a4af3d2a847f573adfcd2a0d9c7b1d4049456d00463b7ebd09ed71d2659e2b2cceb0f92ac0b49e225ee80f6932e1bda60a70950e41951c3a2a5281367987ae00de2dea0d78fedccf5620a5d1af71cda67b6970cdd618fec8fc8a3e41a4eb9da09c59b0e91eb7016f971146e82e924f24d0919ad0a7dda18ab0b78eb51638108faa4a67d1de50295ea76cf82c80f27d36876e537139e434ed9d3fa1e679cd14201a2a9c4e669900b9162c3483059f8a7083613bb3c041519fd792675cf6b176f5afe4a8f7080b55d6dbe641d85b3e0dcd83920ae685119c8437320129890297adeff451cae689383ac367ef89b344f216420a1645fcf12c126f0e59f76587bc4e2e2a38cd278c7cd61aa1661129a0de2a6d803db73edbe4b0c58ea0fb181631f7a56e7a833c2164afd5251b3f658682356a957100671f881e9d5fe1f349e2e9576040000",
    ],
    [
      "ETag",
      "kJwQ6VT74GQohX0qLGBTCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3010c7bf8b794d250a214591784859572aa52db4290f9b50e4da97cce0d89eed74aaaa7ef79d03eb2698145e92bbf3ef94bbbfff399017a13849c956d43f5bb0fbb31afc430856e05ae91dbe8c560e4844c0d31ac9e9f89b3166bbae1f374bba79ccb2b99f3ed437374838f6031a4ad203a90448ee48fafd40146d00db98966da3ca2e8b88df9b505c17abd9628a79a379c8179b3ccfc6f9841ca35323a79e961dff89b6a763449ef576051558500cc22cc6ea67607e16d674b43112064eb79681231ddc1dd456b7865aad0758195c8c06c3e43289475749125f8c6204a566d40bad90ddac713ee2b5a772a57fe19664788984ed62dcb8ea9e3bac0bde6d12c2d9a248e26ec07f01ca986e952f7bc14a58e75fd5fb03bea9f09e94f493205e95907d500d8a83eda3842929e7169ceb25b52ba931276cbc5ce61f5551dc6ac1fbc19de801a4df9d80aff932fb9fb468b0bf5a7dc98ac907c279b4cd092966f3c9bac8e6f7817b7a33c278efc1dd5b8dae72100c353c8fafaf46c9f9abc76e75f01d7e27f5b68588308abfca9df024ada87470fc0d184cc12a88030000",
    ],
    [
      "ETag",
      "GBZpppbSgVUOaUVAAMtGQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3014fd2b91f76593fa48daa62f094105d9c854024b53109aa6d6766f8a218d8bed302ad4ffbe1b87f21802a448497cceb9e7befc406e44be2043c2c4f2b600b5f9722d19a911307489a7cdebd1b1c78fee8fbf87a3f3fecf412fba4cdba3bd3d648852a5e96a9d415dcb4271d0c3e9a4b154b2585325651d03d55bfdbad76d773b3dbfdbedb47a1dd469c8d2b1c86f507d65cc5a0f9bcd9d776329e53203ba16bac1e5eae9bc79d76aae95bc066e74f3b565135d74f363d3fd4c726a84ccf7a6134ca0d0a066b0a222c3149e950b76f03a7443d0556389e43bc181722e8bdc946961082ef3542c0b65a392e103b169bef82093601c1c26cedcfacc1daa9dd96c7d5373e619d56696d315cc9deff1e9893357c0a55ae8b973711cc481f3240923671a45c12471beee7f43cf05682372eb98509641e9f6d894f0ed284a0135544305ce7a6e977a7d77c052d6e369bfedb3d405c6faace7d33673f9a0039d05038a3a5346b72a9acbdc1bb8d0638b4ea7e5b6a9c7177e37f5bb039f810fcc632d4a5d7fc07c9f916d8dfc55c2c091d06ba945d51972118749304be26974384a025b464a8bcc1c55c99545bcccd3609148faa0ae6d890a894e659bc32809e2d161129e07d564c7b0a47c33b9c5d9a634d3806caab0db06d4895c60d3c8d9e9244cc2d3683446851dd7d98ea1c9f0f7c3b320d9ac6d978d7d93511c8f2e514395a29bffb0491287d10fb2ddbef03ba75961395660ff2a83bb0a20708dbb2585760fe0de1669b76b5b7b66e0de19f0de85713ee60ad4fb3897d8d014d7abfd9af3678b4f8de065a9ea20bfa6417c49aaa318525090f3cf370cc916f8f4ceef2e2072f10aa28d36f88ffbcc7569c215547b2d5665323b75bfdff23c62c9cabcc1da6e6b37c03246191156909bc78aaa0b68275242857e222188eb1855f3fa07e0f1ee0500050000",
    ],
    [
      "ETag",
      "/jAH1cDxHFIAV8J97NYf3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d51ef4fc23010fd5fea4736f93104b384442044314864488c318694ee3637b6dd6c3b1408ffbbd7a2c6443ef8a5bd77efbdf4dd75cfd64911329fad92f8ad02b93d8b41cf4c1180aa32ade82ab150c01c069ac7a4ac75ebbba7c7b45e8f679079b55d12c7b5bb7eaf470a255e21e7ccdfb328812c54cc7fdeb382e740b6e5b25c93446f4b83e60fc1787a4d38c7d0e0e96232e90f262376707e1c19577a69eb7fd85e0e0e4b71154004120a012644293105a1c7663ec5f33203576125052866c5968825562597882e75dcd6a5dbec789d76f7a2d369b7ba6d126628b84eb020ed624ef99846cdb300df693ce69140da92268decb9a136a4203798a8c6157cd887cf05e67636c3de1e491bfab74b00d7d03c691911f347cf056a5011cad03b691a7ed3c6f9f2157cb0a5e6bd44da8202b380c6711943347e7ac5d7b20287094e9f7993e8233e7c02e954e0c929020000",
    ],
    [
      "ETag",
      "+7/zYWj//gQel3+zigg+MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "14",
      "00",
      "d0",
      "bb",
      "64",
      "ad0e8254e8aea05805911250719309216a00e58b0a924eef5ea7d7a8ef0eef1b51c6f8f54a6e55c1cfe81d755435076ce0826139ed61aa3ad1b2a92977ca0a449b1817a9a4f818d8ec04f382d61b412e5544e55cee0a90528f242cddb9c1805d4a5ba48b5d980538f126c3add060ed077969b438e8436b8d469d7e1396c60b1f878633c3671d67eee62326d1f8a0ec832fcaa313d1a693f018a42953e345d6ac4743cf85c738aeb5beb71adb4de5276a9adffde9dbfe53fafa8c285bcb4c9639368bbce09952bafe70c5d3bb05891777b0e9eb839797ff0bf5107f80a8f99588e7764d37cd1efaab4f6e1df0e77f8bd39ad7e8e717da43484c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-29-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbb8e64d80448ad62ca16ba48474401a4dd3848cb930b704a7d8a48aaafcf75d4cd3b5aad47ec2f63de79e731f3c917b5e24644c629e3d54501ebfdc89985c105034c3d7fc3e5cda4761fa8f4c1eb65fa7df7bdb60fe38992082d72c4977fb1c5a5254250339de04edac14d59e9642b43051ab3f6af5ac8165da43cb32fbb6893c0979bae4c53db2ff2ab597e34ee7acddce84c872a07b2edb4cec5ede3b877e675f8a3b604a76de4a765045763e16fd960b461517c56413a0814a4219c18ef21c2dfc6726f1e5dbd46d4e77ed0cc107ce803226aa42d5b630051345cab3aad459c9f889689baf0e247097ee2c3498c8ab5d11157407174642158dd4710fc695bf5e190bef6aedafa6e162ed45c1ecda5d4ddbb3f572b3f202637bedfaaea1689c83e61a13e352df3cbca07e0252f142ab87f573adfcdca0c5fbb1d4049496d00423bb6bd19ed31dc5696cb3d4190ce3b40b71ecc4f6900ee22e1b9960263150e46951cda28528baccb287436647310cfb91d9a369e48c1c1a25161b8065d1b49758e474411e4bae60cee55e48de74886cfd45e846a1bff166d3d0d525a4b4cad5bc315617f0daa3c20211f4414da73aca052ad5ed5e78a1eb4f67e1e2d66d26bc848cb263f080334e692e01d1b4c4e629285722c186116fba72e708d613bb39072519ff7e2275cf6b17af5afe420f7180b55da5bf2408fd85f743db39236e695e69c8a1399012982813f47cfa83385cd12607f9b971fd5fa479f22185120af6f92c11ac039ffe69e7b5472c2e3eca488577dc1c266b115642b3415c177b663b8e63f6890697ea5d6c645ae79ed539ea8cb083423d57d4ac3d16da8855f20584411cbea77b75fa0785c1779776040000",
    ],
    [
      "ETag",
      "lkTL7yo4RwcsvW+AB1WSDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93514fdb3010c7bf8bf7b854a234a41089879675ac5268a10d2f452832f6253538b6673b9da2aadf7de7c0ba09268597e4eefc3be5eeef7ff6e445284e52f224aa9f0dd8f64b05fe2e042b708df40e5f462b072422e06985e468f3f57cab36d9f642a9ab59bb316dab767797974838b6859a92744f4a01923b923eec89a235601bd3b2a955d16511f1ad09c575be9a2fae31af350ff9e23ecb26d36c460ed1b191534f8b8eff44dbe32122cffa69052558500cc22cc6ea67607e1ed674b43612064e379681231ddc1d545637865aad0758199c5e0c86c92889c76749129f8e6304a566d40bad90bd5fe37cc46b4fe54affc22dc9708484ed62dcb8ec9e3bac0bde6d12c2f9224fe26ec07f01ca986e942f7ac15258e75fd5fb03bea9f09e94f493205e95907d50058a83eda3842928e7169ceb25b52ba831476cba5c661f5551dc6ac1fbc19de801a4df1d81efd972f23f69d1607fb5fa36c9671f08e7d13647249fdfccd6f9e4e636708f6f4698b61edcadd5e82a07c150c393f8fc6c9c9cbc7aec4a07dfe177526f1b8808a3f8abfc109ea425950e0ebf01b211306188030000",
    ],
    [
      "ETag",
      "3Z+8hnZLh9nnCEyZpyynvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `ltv` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010fd5722ef974d6a9ba4dfad84a0828c452b85a529084d53ebb897e2368d83ed7414d4ff7d1787f23104489192f8bd77efce77f740563c9d933e89f8e23607b9fdb21411a910d07481a7f3e4ba759ad9ab4ef37e79773aa8ffbcbd5fc1e0e00019bc5029bace12a82a914b06aa3f19d71652e4199542543150b5e154dd76a3ddecb4daed66bdd3449d82241ef27485ea1bad33d5b7edbd776d21c422019a71556362fd746e6fea7626c5129856f66b4b1b5d94fdb1e9612218d55ca407933126902b905358539e600acfca7974f43a748dd3756d81e40d6740191379aa8bb430041369cc17b9345149ff8198345f7c90b137f48e436b667c661655d6749aad2ad62cd19b99f53d383fb3661298907335b3ae7e7881673d91fd9135198dbc71687d3dfc866e73509aa7c62ba4510285cfe375f86f9b5008a8a60a4a70da71dad4ed3abd288e3a2cee365a51ec401475a34e8b362287f59ad09c474051a78be8464553915237a2dd86db76a308629739b44e23606db7d5e8d6eb8e5beff468bd45e7407615f257720d275c6542f1f24ec855e087de340c26a3e341e89932629a27faa44cae28e2659e1a8b44d20775ed0a940b742a2ed81f855e30380efd4bafece91016946dc7b7d8d598260a904d255d8306792630cb3eb9381ffba17f3e1a0c51611a75b16728d2fffdf02c08b799b9656dde641004836bd45029e9f63f6c1c06fee894ec762ffc2e69921b8e1198bfd260530204963855822be708ee4c9166ae769567064e9c06f75d18fba36f40be8f3381171ae378355e73feecf0a9105c93b20ef26be205d7a43c0a20060929fb7cc2906c804fb77dbf7ac8c5e5431ba5f11fe799a9c2844928e79aaf8b64f6ea6eafd56d134396fa0dd671bafb0616318a88b086543f5654ae9ee94801e5ea8984208ee3a8ecd73f312baa41fa040000",
    ],
    [
      "ETag",
      "dlY5Gp/k74zjxGA2KqzkeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d91614fc2301086ff4bfde8201b1bc39190c88c2886280ef8a221a474c7186cbbd9762812febbd761d444beacbdf679d27b6f07b64d8b9875d9324dde2a90fb8b04f4b3d944a0aa4c2b5a4a2c14308b81e60991db201e8871f8d2b97c7044f03968ade3304d7a3d22945843ce59f7c0562964b162ddd7032b780ea42d16e59610bd2f4d359946c3c73baa738c4dfd381b8dfae1e8961dad1f23d3bb5f61307aea4fcff1f3a3c536b88c6005120a01e6f552e206841e9a608ae765060d859514a0580dd71789c4aae412b141270dd76e38beeb7b9db6ef7bad8e47608682eb140b6267136a8c69d43c8bf09d72319700596f29e2aafeeee818362077982afb1a3eea879b02f33a94b96db583a6d3aa7bfe2b09e01a9cb346e0355dff9fc0056a502b94b17bd6f2ae82a66dacf977d3e19ef8b1449a800213de3e0de2068dab69685a566031c1e90fdea7fa541fbf00e7d47f671e020000",
    ],
    [
      "ETag",
      "k9dFcPBZ7+J1c9zF2hdBig==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00",
      "00",
      "02",
      "ff",
      "ed",
      "d35b7282301400d0bde45b9caaa513fa2722af48e459941f06f01281aa082810a77bafd36dd4b387f340499641dbc6dda58233fa44633297a6d994d45856fba32884186fd3c059715b0677e4cc5df5b79d6fadb1137a7ba338317285158edd868f87ad6b7343b933f0e6acf2b558848ba26347380be2726159a1400383a6a24ab56f9cb7fdd5a923edeb5e46119d6937b6d11a0ff2d9d92ef52ca095475a6a2621c1a2c4c9c1dbaf938a1e75ac979bfc02f82d22f3eedebbc6b0c37efe5e930f4b57582f0b374a43d93819b952d98cc8f9d2f48177fe26edc9601275faf2f27fa10982a12e1a68e3e2b97d214ad204fdd58fbbb186e77f1992061af4f30b7b051f9c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-31-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6f9b3014fd2bc87b6d4212124822456b94d23552423642da4dd3848cb950b704536cba4555fefbae4dd3b5aad4bd00f63de79e733f7822f7bc4cc994243c7f68a03e7cba13093923a0688eb7b7f48f1a7faf1e1e68bfdf8c77133bbd1d1df2d90c115cb324dd570574a4686a0672badb76f35a3415ad85e860a28ed3eff45dc71d7a23d71d0ebc21f22414d98a97f73abb52959cdaf649bb9b0b9117402b2ebb4cec5feeedc7815dd5e20e9892f65b491b55a4fdb1e8e74230aab82867bb2d1a6824d431ec292fd0c23f669a9cbf4ddde574dfcd11fcc81950c644532a6d0b533051663c6f6a93954c9f88b1f9ea836cfd95bf882c268a665fc625ddc3999552456375a8c0ba0c376b6b195c6ec2f53c5a6e8278bbb8f2d7f3ee62b3daad83ad7573e587bea5685280e15a33ebdc9c023ca07e0a52f1d2a847fa5a2b3f3768f97e2c9a80d212da60ecf55cda1ff7264996782c1b3ba324eb41928c136f449da4c7264318a60950e41951c3a2a528bd89ebf598e7c60e9d4ce2a1eba4314d07f870c0c9fa994b699292e319f95d7305175c5642f2b643e4265c467e1c85bb60318f7c5342469b425db4c67401af3d2a2c10411fd474d4512e5049b77b19447e385f44cb6bbf9df00a72ca0edb079c71460b0988a635364f41bd1629368c04f3b57f816033b1afa7a024d39f4f44f75cbb78d5f2177a8403d4769579936d142e832fc6ce09714d8bc6401edb0f520313758a9e8fbf10872bdae620df767ef883b45721645043c9fe3f4b049bc07fffb4d3da2316171f65a4c2336e0e935a84d5d06e1037c59ed893dec0f58801d7ea5d6cd81b9d7aa673e88cb087523d57d4ae3d16da8a35f20584411c7e607a75fc0bb30c33de76040000",
    ],
    [
      "ETag",
      "haxt8Xpqqa11u8U9/dh5yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93616fd3301086ff8bf99a8a95a6298ab40f2d145ac8daadcd00094d91675f8287e30bb6d3a954fdef9cb3511043cabe2477e7e794bbd76f0eecbb3292a5ec56553f5ab0fb1715f8ab106cc0b5da3b7a35681cb08881e715912f3f2fe47822ab9fed974f8b0f5a8daafdf8e3d5f939114e7c839ab3f4c04a055a3a967e3d30c36ba03681baad4dd16511f3fb2614b7f966b97a4f798d32e4abeb2c9bceb2393b46a746c93d2f3afe196d37c788dde1ed064ab0600484591a8b7720fc32ace978dd6818386cad00c73ab83ba82cb60db78803aa0c46c3c1301925f1649c24f1ab494ca046c1bd4243ecf596e6631e3dd71bbca72dd9704484ed62dab8ec9e3baa2bd96d12c2e52a4fe26ec0bf012e04b6c617bd60a9acf30feafd061f55f897d4fc99205d95d27d50054682eda3545370292d38d74ba22b78d39cb0d97a9d3d55c5488b4af6833bd50368bf3b01efb2f5f47fd292c1fe68f5769acf9f10ce936d4e48bebc986ff3e9c565e06e1e8d30db7b709716c9550e82a18667f1ebf124397bf0d81b0cbea3efa4deb61031c1e9575928cfd2926b07c75f98c01a9188030000",
    ],
    [
      "ETag",
      "/WHd57dgzuXVHJli3gy5KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `ltv`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c8fbb2496920404212a9eaa28e6e91ba64236455354d896d2ed42dc1cc36ddaa2aff7d17b3f4b169ab8404f89c73cf7df99edc882a2353c244f1bd0175f7ea5a32d223606881a7cbc03d0b47ee957b567967799d15a5bba4c5f1313244abd274579770a465a338e8e97ad52f946c6aaaa43cc24047817f341805a3301a8e46a11f85a8d350e6e7a2ba41f59531b59ebaeec1bb5f485994406ba1fb5cee1ecedd5bdfad95bc066eb4fbdcd24517edfedff4a4949c1a21abe3f50a136834a80deca82831854765c6de3e0fdd1774d72f907c2b3850ce655399362d0cc165958ba251362a99de139be6930fb28acfe3d3d4d95a9fad43b5b3d9d4373d675b9adb6dfba2da6c2aba83ad73962c3f3a5b055caa4c6f9d8b0f71123b0fcaf9c2592f16f12a755e9fbc41eb0cb41195354e292ba135fddd9bf9df136905d4500d1db889bc111d8cbd09cb59c4f3713064b9078c8d5934a401f3f824843063405167dae856452b59b1a11745cc0f7d4e7d3689280b2699ef7990b1c130f4f271e60763c68290ec7be4871206de095d4b2dba06918b649ec69b34592f4e67696ccbc869539a775d726d114ff334582492fe53d7be458544a7b6dbf3451a27b3d374fe25ee067c0e05e577abef38e29c961a904d1576db80fa28336c1af9b45ccdd3f972313b47859ddaa7034393e9d7fb47417a57db2e1bfb26b324995da2862a45effec05669325fbc27fbfd13bf2fb46c2cc70aec5f6770db0104ae71c5a4d0de5bf8698bb44bb6ef3d3270fd0c0cfe09e37ccc15a87fe35c6243735cafe039e7db1e9f1ec13bd3d5413eafe3e492744709e4a0a0e22f6f18922df0e2d53fdc43e4e24d441b6df01ff799ebd6842be8f65aecda640e",
      "eac920f02362c9cafc8585fef030c036461b11765099df1575f7d04ea4851afd404210d771d1cdeb1765cbe74007050000",
    ],
    [
      "ETag",
      "O3/F46/h/Fn0Ffpdgl/Oag==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92db6ec2300c86df25bb05046d29070969c0d860423b14b8d98450086e6969eb92a46c08f1ee73cac6260d69bb69fc3b9fedf8570f6c13a62bd666cb30d8e620f75701e8671378a0f2582b3a324c15b01203cd03226f1acdb5bd8dd228a96fa7fe6098bef89917743a4428b18684b3f681f921c42bc5daaf0796f204a86cb1c83684e87d66d464ea8d1eee4827b832fa61361e777be3013b96ce15b1de7d17dc8e1fbbd33f78aef4a288ff31667e2cb108971ef8202115601e9d498c40e891f143f1248ba1ac309702142be0e2229098675c22962953b6ad72cdb55da751775dc76a3804c628b80e31257636a1f7318d9ac71ebe911dcc2640162139e317df1da52102b9c35055afe1bd185c119814bb995babdeaad4acb3bc3fb1c50e3f9b08e01a6a173bb49c8aed9ed580b85fd55ca006e5a35cd9175b38cd56a57a56fd2fd8f4997feed8db53f2492219a6c078553df9d647d38d66b6b5cca1c404a7ff6418ea933e7e004a81f03884020000",
    ],
    [
      "ETag",
      "D78h3qjnjm5qTfEHnZfpRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffedd3417282300040d1bb646d1d5a4492ee888276024a11d476c3048c0411080953219ddebd4eaf51df05feea7f039ae74ca9b46f2bd6805730d21734cda74440ecdd8aec94f14417e2588a65cd3addb65b5c2d140cf9a5ca9da0ba0ef0c265e620d331ca9be77c2edc1537c9a955b17e5e6e9a4091dd00b7e94744b9210f732856e3a6b6ca731747e3be7f3bbddb7beee2822b23ea68aa12b3bdc7f2a01bd7beab6acfbe5ab6779cc5b0f25771837b02eb5da1d7da133884913c6b8e9a2cd0dc9715b58eb13e6ceb0419c4fe72c97cd9423483f1de9c4b9f944f0d946148a70f0fff179800368852329596f7db4d0ba109f85b3fed47c1eeff63462593e0e717a0f727d019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-33-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6fda3014fd2b91f7b5101e212148684590b64810b610da55d31439e626751b626a3b4c55c57fdf8d53ba7693da4fb17dcfb9e7dc479ec9032fb76444529e3f56209fbedc8b949c11d034c757bbef1dd4e17ea6c5813edceabb20943f2e27e3312278cd5274b72fa0a5442519a8d166ddcea5a8f6540ad1c244ad7ebfd575fbaee30d5cd7e9790ef21414d982970fc8bed37aaf46b67dd26ee742e405d03d576d2676afeff6a167efa5b807a695fd5ed24615657f2cfab5108c6a2ecaf1668d062a0532811de5055af8cbdca6e7ef53b739ddb573041f3803ca98a84a5ddbc2144c9419cf2b69b292d1333136df1cc83a5804d3d862a2a8766552d21d9c595baa69a29ff6605d44aba5350f2f56d17212cf5761b29e5e05cb497bba5a6c96e1dabab90aa2c0d2342dc070adb1756e6e215e507f0b4af3d2a8c7f573adfcd2a0f9ff63a90928ada009265ec7a5dd61c74fb3d463d9b03f48b30ea4e930f506b49f7698ef80b34d8122cf881a162d45e9f8c07a90fa493674ba89d34f59321cb241e2fa2c1b000cdd1e78e478467e4bae61c6d55e28de7488dc44f33848e268134e2771604ac86855e85963ac2ee0ad478d0522e8839a8e75940b54aadb3d0fe3209a4ce3f975d04c780139654feb479c71460b0588a6129ba7412ec5161b46c2c9329821d84cecdb29a8c8e8e733a97b5ebb78d3f2577a8c03aced6af325eb389a8797c6ce09714d8bca400ecd814860426ed1f3f117e270459b1ce4fb26886e49f3144106124af6f92c116c029ffe69a7b5472c2e3eca288d77dc1ca66a1126a1d9206e8a3db1fdaeef7bc480a5fe37d6eb76dc53cfea1c7546d841a95f2a6ad61e0b6dc42af50ac2200e3f34bd3afe019982b5b676040000",
    ],
    [
      "ETag",
      "/37vsvjDtovakYthENrXGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93516f9b3010c7bf8bfb4aa466103221f521e9b2351249ba843c4c53855c7c3077c6c76c938a45f9ee3dd32eabd649f405eecebf13777fff39b29f520b96b07b59fd6ac1741715b8af3ed8826d95b3f46a505b600103c72b22bfed74363fc82eccea55eaa26eb2daff7eacaeae88b0c50fa8394b8eac94a08465c9f723d3bc066a2b50b5b5cefb2c60ae6b7c71976d97eb2f94d7287cbedea7e96c9e2ed82938370aee78def3ef68bb3b05ec01efb75082015d809fa531f800855bfa352daf1b05238bad29c0b21eee0f2a836dc30de2882aa3301c8de3308ea693388e3e4c23021516dc49d4c4ee77341f73e8b8dae2236dc9c62111a68f69e3b27f1ea82e45bf890f97eb2c8efa015f03bc28b0d52e1f044b69ac7b56ef0ff8a2c2bfa4e2ef04e9aaa41a822ad002cc10259b9c0b61c0da41126dce9be68ccd379bf4ad2a5a189462183cc80140b9c319f89c6e66ff93960cf657ab4fb36cf186b08e6c7346b2e56ab1cb66ab5bcfddbd1861de39b0b706c95516bca1c697d1c7c934be7cf6d8357adfd17712675a0858c1e957b9918e252557164e4fc6f3a8c888030000",
    ],
    [
      "ETag",
      "YSnTBviy3TmMLt4y5MUzwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `ios_app` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b6f9b3014fd2bc8fbb2697990007949559bb56c434b494748ab6a9a120397cc2dc1d436e9a22aff7d17d3f4b1aaad8404f63de79efbe48e5cb33c212312b1d54d0962fbe18a47a44140d115de06905a9f7f5c0adbdfd093703ee55f78f7eaf6e00011ac6249ba2e32684a5e8a18e4683e6bad042f0b2a386fa2a3a665373b3dab67f79d5ecfeef66de449c8d209cbaf91fd47a9428edaedbd766bc5f92a035a30d98af9fae1bebde9b60bc1af2056b2fd5cb28d2ab2fdb6e861c663aa18cf0fe6330ca0942016b0a62cc3101e994974f4dc758bd1756b85e00d8b81c6312f735585852e629ea76c550aed958cee880ef3c90799b913f73834965a676950692c16c575c358322e17b42896c6d7607a6a2c05c45c2472695c7c7703d7782078be31f77d77161a1f0f3fa1620252b15ceb8534caa0d2ba2f89f7b21115812a2aa1362efa668f7606e6304aa37e9c0e2c274a4d88a241d477a81599f1d0063b8980224f55de358be63cb79cb4ef988819243d6ad35ed7a426584e62555e52b0692772928119915d83dc0aa6e084c9824b56d7855c045ee82ec260ee1f8f4357a791d2325327757055124fe354982482dec86b57591947a5aac89e1fbac1f838f4ceddbaaf1358d1783bbbc1cea6349380682ae81a1488539e60d1c8d974e685ded41f4f90a19b75b6474832fa75f74808b785aeb2d26f320e82f12572a81074fb9f6d16069eff8dec764ff4ce69566a8c26e8532db0a90d04ae70b23893e611fcd549ead9da351e1138750a3aaf9ab13fea0f88d7ed31c782a6385ed673ccef1d3e0d82ab52e7417ecedde092d457b8f120208fdf9f30046bc3bb1bbf5f3fc4e202a28c5478c6798e6525120ba8e79aadab60f6ec6177603b4483857a611b0ebafb06563e2a8fb0865cdd6754af9fee48652ae503a8faa9e166d5fdfa07ef7ed55dfe040000",
    ],
    [
      "ETag",
      "Ref3+KYr4NvaDTUOoBo2jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "7d",
      "91",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "86",
      "ff",
      "4b",
      "bddd14dc1c090989a00449169001de18424a773607db4e6d3b3e24fc774f8751138937edf978de9cf3b647b6c9ca98b5d92a4bdf2b5087ab14ccc40611e82a379a2e89a506e630303c2532d1371f79b632b3fe6098f8e2c54c82fde3aed321428b3728386b1f5992411e6bd67e3db2921740b2e5526e08310769b3e92c1a8e06941718db7c340fc36e2fecb393f3adc8502fb9943fa2de781cf6bba34baac5c9616b5c459080825280dd412a5c8330436b4ff342e6e06aac9400cd6ab86ea40a2bc915a24b15d7f3dd66e0057eeb2e08fcdb964f608e829b0c4b62e7535a8f19343c8f7047ee984780aa43329ad4e796cab006b5c54c37ee615f0fbe1658d4d66cd7a80aea8d7f4b047003cd8b7cc273fd57c0051ad009aad8fb77cae26be3de81f06785645f8375de38bfc2035aa9a117b30a87094e9ff89499737efa0499da394121020000",
    ],
    [
      "ETag",
      "fs/zlibtTEGIf4cVtQ6xDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "0000000002ffedd34b7282300080e1bb642d8cd89684ee8cd61a30419087b07128440c2a28c8b3d3bb97e935ea77807ff77f83288e79551d1ec599e7e01df4d14c9363d9b821bc6a857b8c53315c3dfad5bda68c35fa822a2a8c292bb21a37116c8e3b7eb7d5662d05cc25b9754ff6b1c122df9afb6ebd52b768e9ec558d8468d85e4c82caf5d0fa1ce59a8e21839b7937d513716af42b399b27699b2c0c4d877acd6a177b2274a827658f8d3d6c1207f1990f83c29c2915a9f7a4a48aeddba13d86d2405469e652cbe8d5d493766d1fe0dc99564b5c10b466e4a29a1fa6e1879fadd21d7bf9e9e9ff0213c0bb9b28797510e3ed2f6f9a36017feb1f1efd8d8fff631e95bc043fbf6d30939a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-35-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b91f7953e93b469a56a54258c4e4d0a690a9aa629729c9bcc90c6c5766008f5bfefc6a10c84343ec5f63de79e731f792677bccac894a4bcb8af413e7db915293921a06981afd5dd7c3e4affb86efcfdf26a106c79ec6eaf1e673344f086a5e86e5f4247895a3250d3eda65b4851efa914a283893ab6db198cec913376472367387690a7a0cc57bcba43f66fadf76adaeb1db5bb8510450974cf559789ddeb7bef61d8db4b710b4cabde7bc91eaaa8deff45bf968251cd4535db6ed040ad4026b0a3bc440bff98597afa3e7597d35db740f0036740191375a51b5b9882892ae7452d4d56327d26c6e69b03d9f82b7f115b4c94f5ae4a2aba83132ba39a26fa690fd679b40eac6578be8e8279bc5c87c96671e107f3ee62bdda06e1c6bab9f023dfd2342dc170ad99756a6e215e503f03a57965d4e3e6b9517e69d0f2e3581a024a2b6883c9b83fa203af3f49f374cc72cf76d3bc0f69eaa56397da699f4d1c70b21428f28ca861d14a5436b319e499934c529b25ce64e8259ee74d12d71bf787432fed0fec09399c9047c9359c71b5178ab71d2237d132f69338da868b79ec9b12725a97faac35d614f0d6a3c60211f49f9a0e4d940b546adabd0c633f9a2fe2e5b5df4e780505654f9b7b9c714e4b0588a6129ba7410622c38691701ef867083613bb3c061599fe7c264dcf1b176f5afe4a8f71808d5d6dbe641347cbf09bb173445cd3b2369087f64024302133f47cf885385cd13607b9dafad10fd23e459083848a7d3e4b049bc0a77fda71ed118b8b8f324ae31d3787a94684496837889b628fec898d0762c0527f888d1df7d8b3264793117650e9978adab5c7425bb15abd823088c30f4daf0e7f01e1d20c3876040000",
    ],
    [
      "ETag",
      "nkAA6bx55TJPQ1MUiT5UQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010c7bf8bf7b854a2344da7483cb4ac749542cbd2f0845064ec4b66e6d8aeed945555bffbce81150493c24b7277fe9d72f7f73f07f25b284e52f220ea6d0b76ffa506ff330439b8567a872fa395031211f0b446d238b1a5d5762416f9eef2cfd7829ee78baba78b0b241cfb050d25e9815402247724bd3b10451bc036a665dba8b2cb22e2f726143745be5c2d306f340ff9ea36cba6b36c4e8ed1a991534fcb8eff44dbfd31228ffa21870a2c2806611663f52330bf0c6b3ada180903a75bcbc0910eee0e6aab5b43add603ac0c46e3c1301925f1649c24f1f92446506a46bdd00ad9db0dce47bcf654e6fa09b724c31112b68b71e3aa7beeb02e78b7490897ab2289bb01df029431dd2a5ff68295b0ce3fabf70f7c51e13d29e92741bc2a21fba01a1407db47095352ce2d38d74b6a5752634ed86cbdce3eaaa2b8d582f7833bd10348bf3b0157d97afa3f69d160af5a7d9f16f30f84f3689b13522cafe79b627a7d13b8fb1723ccf61edc8dd5e82a07c150c3b3f8db78929c3d7bec5207dfe177526f5b8808a3f8abfc109ea415950e8e7f014b2e81bc88030000",
    ],
    [
      "ETag",
      "psiqafq3iGRvCx+Ta2RGFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `ios_app`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f76593fa0a6d9ab412820ab2ad5269599ac2d034b58e73134cd338d80e5b85fadf77e3501e4380142989cf39f7dc97efc99ae731199288a7b725c8eda71b119106014d533c9dad932dd73f61ee9db2c9b557c6811fc4e9e1213278a552745364d054a2940cd470316fa55294059542343150b3db6fdafd6ebfe73afd7eefc0eda14e41964c78be46f5b5d6851ab6db7bef562a449a012db86a31b1793c6fdf1db40b296e8069d57e69d94617d57edff428138c6a2ef2c3c51c132815c8256c28cf308527651c1dbf0cdde274d34a917cc71950c64499eb2a2d0cc1449ef0b494262a19de1393e6b30f32f727fe4968ad8ccfcaa2ca5a2e8b75c35a71a196b42856f89951a59739ddc0cafa1accceac95042664ac56d6e5773ff0ad47f5786a2da6537f1e5a9f8fbea07d0c4af3dc988734caa0327ee8cff8f5542a01d554410d2edd4e9fda5e67102591cb12afeb444907a2c88b5c8776a30e1bf4a017474051a7abe8464573917b3402cf19f481da2e3b703b6eecd9b1eb80ddb1294a6cdbf6ba5d481cb26b903f926b38e5aa108ad74d2297c138f49761b0989e8c42df9491d032d3a775725511cff3d4582492dea96b57a15ca053d5f1f134f483d14938bef0eb214f20a56c3bbfc531273453806c2ab1db1ae49988b169e47c361f87e3d97434418599dcf99ea1c8f0d7fd9320dc16a6cbdabcc928084657a8a152d2ed7fd83c0cc6d36f64b77be67741b3d2708cc0fcd506773540e006d74c70d53986bfa648b368bbc61303575083fd268cf3d1d720dfc699c08626b85edd979cdf3b7c1a04ef4d5d07f9b1f0832b521f059080849c7dbc614836c087d77f7f17918bb7116d94",
      "c67fdc67a62a1326a1de6bbea992d9ab073dc77688214bfd0aebf79cfd00ab185544d840ae1f2aaaefa299480595ea918420aee3b49ed73f37a985a30b050000",
    ],
    [
      "ETag",
      "OkfyitXeS8DcLh8udRERdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "52",
      "61",
      "4f",
      "c2",
      "30",
      "10fd2ff5a3c380c311979008842866820c89464396526eb8b1ed66dba140f8ef5e87828946fdd2de5ddf7b77f7d20d5b44d98cb96c1acd5f0a90aba339e8a1097c5045a2155d39660a98c540f339211f3bdde9228b3d689c27c7f64d6b8deb87fb61b34908259e21e5ccddb0308264a698fbb461194f816841902f08a257b9c946777eaf7f49798a3393f7c79ed76a7b5db6b5f68c0855c0f3fc406a0f065eb7d5ff9d9570a58332fe47b3c9d662314e7d08414226c08c9e4b8c41e89e7145f1344fa0a2b09002142bc1e5c35c6291738958a14ac5762a35c776ea8d33c7a99f36ea044c50701d6146d8f188e6631a354f7c7c2553984d005986e44f589e4b2a430c728991aa5ec05bd9f844605aee665eb52c609f5cef90e5065f2504700db51ff9214fd441a04bb86f6c2e50830a51ceecbf47e87c628dcce463c1f68a8ab712c92d05c6a8eaceb40e1a316ae91a0d8b094e5fe52ad2bb7cfb0e00c4959787020000",
    ],
    [
      "ETag",
      "ZCEbknjLe79l+3MAzozXWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "82301400d0bde45b1c1179a47fd168a5f2102a55fc61e0368d88d51804834ef75ea7dba8670fe78e720056d7d9e554b1237a415d3ec47de82f84339e5d7954b5400fda29d47377da39d31194a66faf5d99318d8b22bc45a14ce33a29bf6e6405785f5c5746f849bc9ba84cb9d5135d2a88137c5c50b5ea3c6244fba651cc691aebdddebe4264cc71f616e42af5d310461639ee5caa7b67a7b037da773cf5d7760e7c76955c11c29667935bed6848e353e97a6a5725f371c735479a746b04b543c1c7bb8f25135cca78d01c641a9059d05a422b2e9b0905b00793fed3d3ff857a8829514a5667e563bb6162dc437ff5b34b27d8e3ff98e59249f4f30b1f3e0ab319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-37-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fa34014fd2b64f6ab7d092d6d93666d2aae4d2c554ad5cd664386e182a3c0e0cca0694cfffb5e06eb6a4cf4133373cfb9e7dc072fe4819709999298678f35c8dd8f7b119323029a66f8fa1ceeb67723b8ac8adbcbea76004e9cefeeaf663344f086a56851e5d051a2960cd474bbe96652d4159542743051c7763b83913d72dce168e41cbb0ef214e4e9052f1f907da775a5a6bdde41bb9b0991e5402baeba4c146fefbda7e35e25c53d30ad7a1f257ba8a27a5f8bfecc05a39a8b72b6dda0815a818ca0a03c470bff99497cf2317597d3a29b21f88933a08c89bad48d2d4cc14499f2ac96262b99be1063f3dd816cbc0b6f115a4ce4755146252de0c84aa8a691de55609d05eb95b5f4cfd6c16a1e2ed77eb4599c7bab7977b1bed8aefc8d7573ee059ea5699c83e15a33ebc4dc7cbca07e024af3d2a887cd73a3fcdaa0e5e7b134049456d00623b73fa283717f12a7b1cbd2b13d8cd33ec4f1387687d48efb6ce28093c4409167440d8b96a24c5862bbc70e8b92a1d38f9cbe9b4463702611a52e1d8c1c3b4de898ec8fc8b3e41a4eb9aa84e26d87c84db00cbd280cb6fe621e7aa68494d6b93e6d8d3505bcf7a8b140047d51d3be8972814a4dbb977ee805f345b8bcf6da095f4046d96ef388334e69ae00d15462f334c89548b061c49fafbc53049b895d1e828a4cffbc90a6e78d8b772d7fa38738c0c6ae365fb20983a5ffcbd83920ae695e1bc8537b20129890097adeff451cae689b835c6dbde037699f02484142c9be9f25824de0db3fedb0f688c5c54719a5f18e9bc35423c224b41bc44db107f66468db1362c0527f8a39c3c1a1674d8e26231450ead78adab5c7425bb15abd813088c3f74daff6ff00e70aadbe76040000",
    ],
    [
      "ETag",
      "wTyUh6ePpmXPpX1e4blyjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93616f9b301086ff8bfb9548cd424985d40f24cbd64c24b40995264d1572f141dd1a1fb34da628ca7fef9976d9b44ea25fe0eefc9cb87bfd7260cf520b16b30759ffecc0eccf6a70b73ed880ed94b3f46a515b600103c76b2267d99c4ff6dfbe77d942e7abcbc62673296eafae88b0e523349cc507564950c2b2f8c78169de00b595a8ba46177d1630b76f7d719b6f96ebaf9437287cbebe4bd364962ed83138350aee78d1f31f68bb3f06ec091f365081015d829fa535f804a55bfa352d6f5a05238b9d29c1b21eee0f6a835dcb0de2882aa3c974348e265138bd88a2f0d334245061c99d444decdd96e6630e1d571bfc455bb2f18408d3c7b471d53f775497a2dfc487cb751e85fd807f03bc2cb1d3ae18042b69ac7b55ef37f8a6c2bfa4e21f04e9aaa41a826ad002cc1025db820b61c0da41126dc1dbf684cdb22c7daf8a1606a51806777200506e7702bea459f23f69c9607fb4fa9ce48b778475649b13922f578b6d9eac6e3c77ff6684d9de81bd3148aeb2e00d353e0f2f2fa6d1f9abc7e6e87d47df899de9206025a75fe55a3a16575c5938be00b723492d88030000",
    ],
    [
      "ETag",
      "BOCa3yJXuOEnTM8msACidQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `date` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f76593fa489b367d48082ac8a052092c4d61689a5ac7b90986340eb6c356a1fef7dd3894c71020454ae273ce3df7e50772cbf3988c49c4d3bb12e4e6cb8d88488380a6299e7a8ec3d6eee6e4ae3b3cea2d4ee931ff996dd2bd3d64f04aa5e8bac8a0a9442919a8f162de4aa5280b2a856862a0a6336c765cc7ed0dfaaedbeb0e7aa8539025339edfa2fa5aeb428ddbed9d772b1522cd80165cb598583f9db7efbbed428a1b605ab55f5bb6d145b53f36ddcf04a39a8b7c6f31c7044a0572096bca334ce159194707af43b7385db75224df7306943151e6ba4a0b433091273c2da5894ac60fc4a4f9e283ccbd9977185a2be3b3b2a8b296cbe2b661ad62aa61657d0fce4ead95042664ac56d6e5891778d6137bea5b0bdff7e6a1f575ff1bdac5a034cf8d5948a30c2aa3c77e4cdf4ea112504d15d4e07260bbb433b44751120d583274fa516243140da3419f3a91cd463de8c51150d4e92aba51d15ce4b133ec3336728676e474a2eec8eebbc9b0db81be3dea759cd1a8ef46b4e3f629d936c81fc9351c715508c5eba690cb601a7acb3058f88793d0336524b4ccf4519d5c55c4cb3c351689a40feada562817e8547578ea875e30390ca7175e3dd419a4946de67738d684660a904d255d8306792a626c1a393f9b4fc3e9993f99a1c24cea7cc75064fcebe159106e0ad3656dde641204932bd45029e9e63f6c1e0653ff986cb72ffc2e68561a8e1198bfdae0be0608dce05a09aeec03f86b8a348bb56d3c3370e53474de85713efa1ae4fb3813d8d004d7cb79cdf9bdc5a741f09ed475901f0b2fb822f551000948c8d9e71b8664037c7add77770fb978fbd04669fcc77d66aa326112eabde6eb2a999d7ae476ba5d62c852bfc11cdbdd0db08a51458435e4fab1a2faee99895450a99e4808e23afaf5bcfe016a5e4206fb040000",
    ],
    [
      "ETag",
      "E33cm6yHq28D4UMaGiXlyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff7d91614fc2301086ff4bfd2833639b03494804452559161d90180d21a5bbc160dbcdb64317c27ff73a8c9a68f8d2f6aeefd3bbf7ba67dbb488598f2dd3d55b05b23e5b817e328708549569455b898502d662a0f98a94eb329483fc259ce5fabcbe7aee4ebdbb3018f4fba450620d3967bd3d4b52c862c57aaf7b56f01c085b2cca2d49745d9a68328dc6e13dc539c6260e67413018062376687d1331d7f043dc0ea6a3fff4f3438b6d70194102120a01a67a297103428f8d31c5f332034b61250528d6889b8b95c4aae412d1a28ce576adb6effa5ee7d2f73da7e3913043c1758a056967136a8c69d43c8bf09d7c319704b23992c5a4597794860dc81da6cabe868fa6f085c0bc31656e1ddbb12ddbb1ec76d3f76f5000b96d9fa69c3f1417a841252863f734ea1974fe65615813f42891e6a1c08cc23e8ee506cd0334f49e9615b498e0f49f0fa93ec6874feefb40b22c020000",
    ],
    [
      "ETag",
      "hpNrAmZNUmt+y9X8T4FNLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "000000000002ffedd35b7282301400d0bde45b9d8e4c2cf48f04507cf0064b7f32945c0a581121bc74baf73add463d7b387794a429b42d13971354e80d4dc95259a48b5d2d1363286cba2527f5d59ef3de77e47ad2b2a8cfd6f442ba41e2629fbbdcafd8552aa33ef6bf40f44b6a7da6f1f9ea60acd26d700bb10a220c5812172155d7223fcf39f3460fd891be87131e41fe1edc68b08c0a67a6d4f58e7d8a36bbd82b75db572ece7ab90970ab8331d79dd06f63ab54ba23217576a056b4daaac9e1c673b3f69b91eb695115f0a1a59230c56e439420e65ad9e5ab975c3657d2959ddd6ed82f9e9efe2f344330d645032d2b1edb25ac2833f4579f89a986c77f0249030dfaf905f098a0eb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-39-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f7953ed286b6a9548daa84d1a94d479a82d03445b6739319d238d80e1342fdefbb7128834d1a9f62fb9e73cfb98f3c937b51a6644a98c81f6a504f9fee242327040ccdf1f56aae82dbdd2a70f3ea7664beb28167a4379fcd10211a96a6fbaa808e96b5e2a0a7bb6d3757b2aea892b283893a43bfe38e86236f7c3a1a7983b1873c0d45b612e53db27f1a53e969af77d4eee652e605d04ae82e97fbd7f7dee3a057297907dce8de7bc91eaae8deff453f179253236439db6dd140ad4125b0a7a2400b7f98293b7b9fba2be8be9b23f85170a09ccbba348d2d4cc1659989bc56362b993e136bf3cd816c8355b0881d2e8b7a5f2625ddc38993524313f3548173116dd6ce32bcd844eb79bcdc84c9767119ace7ddc566b55b875be7e6328802c7505680e53a33e7ccde42bca07e0ada88d2aac7cd73a3fcd2a0e5bf63690828ada10d26e3fe88ba93becf3236e6d96478cab23e303661e3533a647dee7be0a50c28f2aca865d15296dc732703e6b2243bed43e265ee2099b89025d477d3cce743974e32723821bf9430702e7425b5683b446ea2651c2471b40b17f338b02564b42ecc796bac29e0ad47830522e83f351d9aa890a8d4b47b19c641345fc4cbeba09df00a72ca9fb60f38e38c161a104d1536cf805acb141b46c2f93a3847b09dd8b7635093e9f767d2f4bc71f1a6e5aff41807d8d835f64bb671b40cbf583b47c4352d6a0b796c0f4401972a45cf871f88c3156d7390ab5d10dd92f629820c1494fce35922d8063efcd38e6b8f585c7c94d106efb8395c37225c41bb41c2167b64fb237fe0130b56e6efd8b83f9c1c7bd6e46832c21e4af35251bbf658682b56eb57100671f8a1edd5e13705387f5e76040000",
    ],
    [
      "ETag",
      "QArEYULE1gpY6tJb24to4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93516f9b3010c7bf8bf74aa464a16443ea0369d22e12255d421ea2a9428e7d30678663b6c99445f9ee3b689b4eeb24fa0277e7df89bbbfff9cd80f554916b29d2a7e36608e1f0a705fdb6005b6d1ced2abc6ca02f318385e107987bbfd36d9fef64793591d6f4472dcce86d1f53511567c8792b3f0c472055a5a167e3bb18a97406d02755356599779cc1debb6b84e578be48ef212659b279b388ea6f19c9dbd4ba3e48e671dff8eb6c7b3c7f6b85b410e062a01ed2cb5c13d08b768d7b4bcac350c2c364680651ddc1d14069b9a1bc4015506e3cf8351300efcc95510f81f273e811a05770a2b62376b9a8f39745caff0176dc94663224c17d3c679f73c505dc96e93365c2469e07703fe0d7021b0a95cd60be6ca58f7a4de0bf8acc2bfa4e6ef04e9aa94ee830aa824983e4ad51997d280b5bd24da8cd7f5059b2e97f15b552a6950c97ef0a07a00ed0e17e0365e46ff93960cf6aad52c4ae76f08ebc83617245ddccfd76974ffd0728fcf46981e1dd80783e42a0bada14643ffd3d524183e79ec065bdfd17742671af098e0f4ab7c518e8539d716ce7f0063f3393188030000",
    ],
    [
      "ETag",
      "GobjYNYz417DpLUcNyYD0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `date`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3014fd2b91f765934a9f69d35642d041b6452a8525290c4d53eb3837c190c6a9edc03ad4ffbe1b87f2181a489192f89c73cf7df99edcf03c266312f1745d82dc7cb816116910d034c5d34deb737a3c3c77d777d9684483f5e887eefc49f7f791c12b95a2ab22833d254ac9408de7413395a22ca814620f03edd9edbdcea037b09dfe6060771d1b750ab264caf31b545f695da871abb5f36ea642a419d082ab2613abc7f3d66db75548710d4cabd64bcb16baa8d6dba6079960547391efcf034ca0542017b0a23cc3149e947174f8327493d3553345f22d6740191365aeabb430041379c2d3529aa8647c4f4c9acf3e48e04edda3d05a1a9fa54595b55814370d6b19530d4b7c6754e9454e57b0b4bef8a727d652021332564bebe29bebbbd6a3d49b59f3d9cc0d42ebe3c127f48e41699e1be790461954ae0fcdf15e8fa412504d15d4e0c2690f6867d81e4549e4b064d8eb47491ba26818397dda8bda6c64831d474051a7abe846457391c370d86536ea1c68f746835ed74edab1439d38e933a703c930b2fb3644946c1be44e720dc75c1542f1ba43e4c2f7427711faf3d9d124744d19092d337d5c275715f13c4f8d4522e98dbab615ca053a55edf666a1eb4f8e42efdcad273c8594b24db0c619273453806c2ab1db1ae48988b169e4ec34f042ef743699a2c28ced6cc75064fcf3fe49106e0ad3656dde64e2fb934bd45029e9e61f2c087d6ff6956cb7cffcce69561a8e1198bfdae0b606085ce38e09aeda87f0db1469b66cdb7862e0fe69e8fc17c6f9e82b90ffc799c08626b85ebd979c5f5b7c1a042f4d5d07f93e77fd4b521ff99080849cbdbf614836c0bb777f7711918b57116d94c67fdc67a62a1326a1de6bbeaa92d9a9478e3318124396fa1536ea39bb015631aa88b0825c3f54545f4433910a2ad52309415cc7593dafbf85df6b1908050000",
    ],
    [
      "ETag",
      "y/BgD8VEqwl99aSq9Xt1zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d52514fc23010fe2ff595e91813cc12120189a06864802f8690d2ddc660db8db60391f0dfbd0e45e303f1a5bdfbfadd77775fba67ab380b98c7e671b42e40ee2e22d04313f8a08a442bba72cc14b00a03cd2362ee8693285a2f1eb73d31be7a7a8df023bb495acd2631945840ca99b767610c49a098f7b667194f81ca66b37c4514bdcb4d361afbfde77bca530c4cfe3c190c5aed41971d2aa78a806bf8a9b86b8dbbe7f909577a56c6ff68333d54d812e73e842021136086ce252e41e8bef143f1344fc0525848018a95e4f2219258e45c225a8458ae6d55ebb5badbb8aed75da7e1123141c1758c197127239a8f69d43cf1714b76b01a116419923361796e088625c80dc6cabe85f7b2f1a5c0b4dccdbc3ab6635bb663d9d513f470e4977bfc161240a655cfab3827a86b1cfe2bc1056a5021caa0765ec73d419def0a2336fddab8bd23f04522d9a7c038671f5deca091a4c69e96055498e0f46b7ab13ee6874f33615c9192020000",
    ],
    [
      "ETag",
      "yQUggqhKwHcT/MVgozn8lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "02",
      "ff",
      "ed",
      "d3",
      "5d",
      "6e",
      "82",
      "30",
      "0000e0bbf4590c8a08dd9b2010e69480068497a642810aa3fc4335bbfbccae31bf3b7c4f80e398741dea59412af001385ec365bc3cd4aa664eb452bfe891abdad56f4ac5183cdbb4b742b7c3a511a15ce9e4a350b49236cbfae8b8be982a0ceaa567d9f99cde4b433f48b857021125273c7e06bb1aa5390e110f9a35852c15fcad4ca193257b11c1de8e8a227484c7d6f427c642ced8e5f8387fa34db61aea00df12a5481447e77ae35e6669c2d731ac370d8befb32552d1ad1263c3852cdca3952779c2c0cff9181527d3ba47b7957159f3d4dbc7432a2edfdefe2fb00064ae694b3a445fdb2519c205f8ab8f7a5e93d77f8de096b4e0e717e3d51c6219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b91f795bed2b4692b55a32b618b44d391a6b0699a22c7b90986242eb60302d4ffbe1b873210127c8aed7bce3de73ef2446e7895921949787e5b837cf8722d12724440d31c5fedf2dba33e7d9cc05558ffbacab6e78ff72bff7e3e47046f588a96bb023a4ad492819a6d37dd5c8a7a47a5101d4cd471069dc1783876dcd178ecd8ae833c054576c6ab1b645f69bd53b35eefa0ddcd85c80ba03baeba4c942fefbd3bbbb793e21a9856bdb7923d5451bd8f45bf168251cd4535df6ed040ad40c650525ea085ffcc34397e9bbacb69d9cd117cc71950c6445de9c616a660a2ca785e4b9395cc9e88b1f9ea4036de99b78c2c268abaace28a967064a554d3583fecc03a0dd72bcb0f4ed7e16a11f9eb20de2c7f78ab4577b93edbae828d75f9c30b3d4bd3a400c3b5e6d6b1b9057841fd1494e695518f9ae746f9b941fefbb134049456d00663b73fa683497f9a6489cbb2c97094647d489249e28ee830e9b3a9034e9a00459e11352c5a898ada0348d3493fee8f6c27769c64104ffba91da7ee94d943770423674af647e45e720d275ced84e26d87c865e8475e1c85db60b9883c534246eb429fb4c69a025e7bd45820823ea869df44b940a5a6dd7e1079e16219f9175e3be133c8297bd8dce28c335a28403495d83c0d7225526c1809162bef04c166623f0f4145667f9e48d3f3c6c5ab96bfd0231c6063579b2fd944a11f7c37760e880b5ad40672d71e880426648a9ef77f11872bdae620e75b2ffc4ddaa710329050b1cf67896013f8f44f3bac3d6271f1514669bce3e630d5883009ed067153ec813d9d8c07363160a9dfc55c6770e85993a3c9082554fab9a276edb1d056ac562f200ce2f003d3abfd3f1e14575676040000",
    ],
    [
      "ETag",
      "2mBztFz8ehRuXhfUQzwMIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "86ff8bf73548b0863045ea07a0748b14a085a04d9aaac8b52f993b2797d90e1542fcf79ed38e4d6da5f44b72777e4eb97bfde6c87eab5ab298ddabf24f0be6f0a90477eb830dd8563b4baf066b0b2c60e0784964b56caf7fe0588c337bf57d98ccf7bbdb397fbcbc24c28a5f5071161f59a1404bcbe29f4756f30aa84da06eab3aefb280b943e38bdb6c93acbe525ea1f4f96a97a6d359ba60a7e0dc28b9e379c77fa0edee14b007bcdf4001066a017e96c6e0030897f8352daf1a0d038bad116059077707a5c1b6e10671409541381a8ca28b289c8ca328fc3c0909d428b8535813bbdbd27ccca1e37a838fb4251b5d1061ba98362ebae79eea4a769bf830596551d80df83fc085c0b676792f582863ddb37a7fc117155e939a7f10a4ab52ba0f2aa19660fa28d5e45c4a03d6f6926873de34676cb65ea76f55a9a54125fbc1bdea01b4db9f81eb743d7d4f5a32d83fadaea6d9e20d611dd9e68c64c972b1cda6cb1bcfddbd18617670606f0c92ab2c78438d86e197f1241a3e7b6c8ede77f49dd89916022638fd2adf946371c1b585d313f6c44d6f88030000",
    ],
    [
      "ETag",
      "mMuFXo5c5TsDW0ICvUQCaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `email` as __pk, `stamp` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fdb3014fd2b91f765934a9bb4495f128202d916ad0d2c4d41689a5ac7b92986346e6d878150fffb6e1cca630826556aeb73ce3df7f9406e7891922149f8725382bcff742d12d220a0e9125f8fd448cd263fd2ee6472747a1b6ebcf6e6ce1eedef2383572a4557eb1cf694282503359c4d9b4b29ca359542ec61a03db7bde7743b5db7e775bb6ebbe7a24e419e8d797183ea2badd76ad86aedbc9b4b219639d035574d26564fefaddb766b2dc53530ad5aaf2d5be8a25a1f9b1ee48251cd45b13f9b6202a502398715e539a6f0ac4c93c3d7a19b9cae9a4b24df720694315116ba4a0b433051647c594a13950c1f8849f3c50f32f5c7fe716c2d8ccfc2a2ca9acfd7370d6ba1349a2cacafd1e9c45a486042a66a615d7cf723df7aa207a1350b437f1a5b9f0fbea05f0a4af3c2b8c534c9a1727a6c48f0760c95806aaaa006e73dbb4b9dbe3d48b2a4c7b27ec74b321b92a49ff43cda496c3670c14d13a0a8d35574a3a28528fa1e788ed363e0327be05267c06c274ded8eeb6157bb2cb33b4e97ba4e9f6c1be48fe41a4eb85a0bc5ebae908b2888fd791ccdc2e351ec9b32325ae6faa44eae2ae2659e1a8b44d207756d2b940b74aa5a1c84b11f8d8ee3e0dcafa73a862565f7d30dce35a3b90264534957a0414e448a4d2367a7d3200e4ec3d118156654673b8622c35f0fcf82f87e6dbaaccd371945d1e81235544a7aff0f368da320fc46b6db177ee7342f0dc708ccbfdae0b606085ce35e09aeec43b833459acdda369e19b8731a9c77619c8fbe02f93ece043634c3f5eabce6fcdee2a741f050ea3ac8cf991f5d92fa29820c2414ecff1b866403fcf7de77c7875c3c3fb4c10bd01cf799a9ca8449a8f79aafaa6476eac1c0753c62c852bfc1bcb6bd1b6015a38a082b28f46345f5f199895450a99e4808e23a86f5bcfe02358a969dfc040000",
    ],
    [
      "ETag",
      "BsAsUMKd6MMBOvNq52qx0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff75916d4fc23010c7bf4b7dcb70836d3c242482122501441e5e19424a779b836d37db0e9d84efee7518f505bc697bd7ffef7affeb91ede32c605db68da3f702647913817e318739a822d18ab61c3305acc640f3c828bf06fe787ffb00dbe7e91ef8f4d0699476bfd72385126f9072d63db230862450acfb7a64194f81b0cd26df934497b98916cbf968fa48718a8189a7abf1b83f180fd9a9f64b28cdd3fc0f598e26c3c5b23f995da2d6a71adbe1760e2148c804981e72893b107a64ec292a9580a5b0900214abc4d54524b1c8b944b42863b90dcbf19bbedbf27cdf6db45c122628b88e3123ed6a41ed318d9a2773fc2077ac4902591dc96858ad074ac30ee4016365dfc167f5705d605a5933b74edd6bdb9ed7713aeeb053b5fe9f15c03538d741df25d4f52e905ca00615a20c9ad7f1b6d36e12eeb7dae70aeb1f438392d899449a8e023318fb3ca47b3475340d54cb026a4c70fae3a7589fe3d33764c66abc40020000",
    ],
    [
      "ETag",
      "bzB6Lk/DebONkeaNv92y0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00",
      "02",
      "ff",
      "ed",
      "d3",
      "5d7243400000e0bbec7364fc5566fb168b1a151222512f86b549045996c1eaf4eecdf41acd7787ef1b641893be4f075a910778073c93e11aaf73711b8fe272f4767414c6b8591cc99c8cea5a187ee9172e4d74b373b91af47b8130b9f2479d46472778f819a537a14d46536b919ad5bb0d52d364f11438c9d99c7a771e579dc1b03ad93bb31084fd81df1583dea123878d6d4c8be81a932b9db8145970f8b253a7cfe3cfa9b14269292df320d9e70e5bb677ee3ec8c822a5b96eb6deb089685e3128d705be26d55e43c8c217126a8dea6a376168cb133ad5415de8d6e538f33342877efdf2f2ef801520735b32d2a7e573bbf206e10afcd54f07de92e77f9d648c30f0f30b4b74db5819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-43-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fa34014fd2b64f6d5b6b4d0529b346b53716dd252056ab3d96cc8305c7094327566d018d3ffbe97c1ba1a137d6266ee39f79cfbc10bb9e755462624e5c5430df2f9c79d48c909014d0b7c8dae2f2397ddf207d987a76d31f6bdabeda8984e11c11b96a2bb7d091d256ac9404d3651b790a2de5329440713755ca7d31f3923d71b8e46eec07391a7a0cc97bcba47f6add67b35e9f58edadd4288a204bae7aacbc4eeedbdf738e8eda5b803a655efa3640f5554ef6bd19fa5605473514d37111aa815c80476949768e13f334bcf3ea6ee72baeb16087ee40c2863a2ae74630b533051e5bca8a5c94a262fc4d87c772091bff4e7b1c54459efaaa4a23b38b132aa69a29ff7605d84eb95b5082ed6e16a162fd64112cd2ffdd5ac3b5f2f37ab20b2b6977ee85b9aa62518ae35b5cecc2dc00bea67a034af8c7adc3c37caaf0d5a7c1e4b434069056d30f1ec11ed8fedd3344f3d968f9d619adb90a6e3d41b5227b5d9a90b6e9602459e11352c5a89ca76fa9937644e62bb29242ecdec2485312403e6d1111b66b99bd9e470429e24d770ced55e28de76886cc345ec2771b809e6b3d83725e4b42ef5796bac29e0bd478d0522e88b9a0e4d940b546adabd08623f9ccde3c58ddf4e78090565cfd103ce38a7a502445389cdd3205722c3869160b6f2cf116c2676750c2a32f9f3429a9e372edeb5fc8d1ee3001bbbda7c4914878be097b17344dcd0b23690c7f64024302133f47cf88b385cd13607b9def8e16fd23e859083848a7d3f4b049bc0b77fda71ed118b8b8f324ae31d3787a94684496837889b625fd99e6d0f1c9b18b0d49f62cee9e8d8b3264793117650e9d78adab5c7425bb15abd813088c30f4caf0eff006bb32f7f76040000",
    ],
    [
      "ETag",
      "SQHS4chiqr1ewWg8E7PW6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93616bdb301086ff8bf6710e348deb0c433f245bb606dca4891d6819c528d2d95527eb3c494e0921ff7d67b74bcb3a70bfd877a7e7f0ddabd707f64b19c962b655e5ef06ecfe53097ed5066b708df68e5e351a072c60e07949e453bad28b7404e79fafb6b7ca6eee5cfac05797974438f1001567f181150ab4742cfe79608657406d02755399bccb02e6f7755b4cb3f57cf183f20a659b2f364932992633760c4e8d927b9e77fc07daee8f017bc4ed1a0ab06004b4b3d4161f41f879bba6e355ad61e0b0b1021cebe0eea0b4d8d4dc220ea83208478361348ac2f1451485e7e390408d827b8586d84d4af3318f9eeb353ed1966c3822c276316d5c74cf1dd595ec3669c3f9228bc26ec0b70017021be3f35eb050d6f967f5fe822f2afc4b6afe4190ae4ae93ea80423c1f651aaceb994169ceb25d1e5bcae4fd874b94cdeab62a44525fbc19dea01b4df9d80efc972f23f69c960af5a7d9b64b37784f3649b1392cdaf676936b9be69b9fb17234cf71edc8d45729583d650c3b3f0cbc5383a7bf6d8576c7d47df89bd6d206082d3af72a53c8b0bae1d1cff00a9a43aab88030000",
    ],
    [
      "ETag",
      "wSQlNS3e2+HbXirUYsShaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `email` as __pk, `stamp`, `last_name` FROM `records` WHERE  `email` IN UNNEST (?)",
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
                { value: "another@example.com" },
                { value: "acotesford3@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6fda3014fd2b91f765932884574291aa16d17443a2290da15d354de0981b308438b51d3654f1df77e3943e56b595904872ceb9e73e1fc89aa773d225115fdce720775f56222215029a2e8aaffe7239eaad2f46e3fef5f5cffb5ab25d2db3dec9093278a15274932570a4442e19a8ee645c5d489167540a7184818e5aada3bad3745a6edb715a0db7853a05493ce4e91ad54bad33d5add50eded585108b0468c6559589cdd3f7dab651cba45801d3aaf6dab2862eaaf6b1e9692218d55ca427933126902b9053d8509e600acfca7974f63a7495d34d7581e42d6740191379aa8bb430041369cc17b9345149f78198345f3c90b137f4faa135333e338b2a6b3acdd6156ba6349accf021a14a4f53ba819975115c5d5a33094cc8b99a59b73fbcc0b39eb403df9af8be370eadafa7dfd07c0e4af3d45887344aa0b07deccee0ed4c0a01d55441094e5ddba1f58e7d1cc591cbe24eb31dc53644512772dbb419d9ecb805ad79041475ba886e54341569c7899a6ebb1dbb8d4ebb0573c0184e1483edd4a9dd6cb8cc69b0d869366cb2af903f926b38e72a138a972d22b7c120f4a66130f1fbbdd03365c4344ff479995c51c4cb3c351689a40feada172817e854f47be0875ed0eb87831baf1cf1101694edc6f738e498260a904d25765b83bc14736c1a195d8d07e1e0caef0d5161e6363a3014e9fe7a781684bbcc74599b7fd20b82de1d6aa89474f71f360e8381ff9decf72ffc6e68921b8e1198b7d2605b020456b864822bfb0cfe9a22cd9aed2bcf0c5c400df577619c8f5e827c1f67021b1ae37a355f737eeff157217835651de47ae20577a4fc14400c1252f6f98621d9009f1effe112918bb78836780e9ae33e3355983009e55ef34d91cca3dab5ebf5864b0c59ea3758b3533f0cb0885144840da4fab1a2f212cd440a28574f2404711dfd725eff004bdf20f709050000",
    ],
    [
      "ETag",
      "bNhhPAkFPSCQQXq/lvjhpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d52ef4fc23010fd5fea47c130f683416222904541203af08331849472ccc1b69b6d8712c2ffee752892188c5fdabbeb7befee5eba63eb385bb0169bc7d15b01727b11817e344108aa48b4a22bc74c01ab30d03c2264223697fdfb3c547ef1289fe761bd68a7afd1f5352194788594b3d68e2d6348168ab55e762ce329106d36cbd704d1dbdc64e349d81bdd529ee2c2e4a3a7c1a0dd19046c5f393294e669fe4399f486c178d21e3efccd4ab8d2b332fe47b3e9bec256380f610912320166f45ce20a84ee1957144d904055612105285682cb87486291738958a54ad571aa96677b4ec3f53ca7de700898a0e03ac68cb04f639a8f69d43c09f19d4c6136016419923fcbf2dc501956203718abda0d7c948daf04a6e56ee6d5ba72fd9aeb36ada613348fd5fe8152ae72aa25806bb0ce0b790e4939ee895240845f325ca006b544b9b0cf6bf9966f9396d7f04fe4badf44a339fddabfb3a5e28344325381f1b176f0b48b4699fab7b42ca0c204a79f7417eb43beff04da561f88a6020000",
    ],
    [
      "ETag",
      "lcv+JKpRs8uQrYbR2uAmhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "02",
      "ff",
      "edd34b7282300000d0bb642d0c9aa613ba03052d0422e207d93010530bc837543e9ddebd4eaf51df1dde378819e342445d95f312bc81315ea83293ed1aeb669f568b3cb904f1484d130564958d769fec0e5318eaa96729fbbb16e049f0eb5e3ff9e8b38b35b795a862f5467254afd0ca43db1ed6aec732fea54dba54100f7535326e4d9ec34e9ce9aedc9819132fe705f637380f08b722cbf65fe706b10bb87625c758964e79dc18040e5b5c0787c66b28b690df6ff1e95cdc25ef82d12a8caabd42951b840efd20fed214eb9125ce14cf5bfcee112dd55967469419a3233f3dfd5f6006f850a72d1751fad80e91aacec05ffda81b6bfef8aff3b8e52df8f905370cd0dd19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-45-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f74adba46d9252a91a550910a94db734054dd31439ee4d30a471163b2084fadf77ed5006428297d6f63de79e733ff24cee79b5235392f1e26f0bcdd3b73b919113028a16f81af1bbcbe07a5d4edc1b81e730b97dcc2f1e67334470cd92745f97d093a26d18c8e976d32f1ad1d6b411a287897a63b7e778236fecbb9e371efa63e44928f325afee917dab542da783c151bb5f085194406b2efb4cec5fdf070fc341dd883b604a0ede4b0e50450e3e17fd5e0a461517d56cbb4103ad8426853de5255af8cfdc6567ef53f739ddf70b043f70069431d1564adbc2144c54392fdac66425d367626cbe39904db00c1689c544d9eeabb4a27b38b17654d1543dd5605dc4eb95154617eb78354fc275946e1657c16ade5fac97db55b4b16eae8238b014cd4a305c6b669d995b8417d4df8154bc32ea897ed6ca2f0d0a3f8e4513505a42174c7ddba3cec43ecdf2cc67f964e466b90d5936c97c978e329b9d8e61bccb8022cf881a16ad448501cf76a9978e1d27c31f1f529ab95eea9d3ace904ed8d0ce7c7238218f0d5770ce652d24ef3a446ee23009d224de468b7912981272da96eabc33a60b78eb51618108faa4a6838e72814abadd619404f17c9184d74137e12514943d6dfee28c735a4a40346db0790a9a95d8815eedf92a3847b099d88f635092e9ef67a27bae5dbc69f92b3dc1016abbcafc934d1287d1a5b173445cd3b2359087ee406ab47c8bb5a1ebc31f44e2927659c8cf6d10ff22dd530c393450b1afa7896013f8f25b3b2e3e6271f551462abce3ee30a9455803dd0e7153ee0bdbb787b63b2206dca80f31c7758f5dd3397446d843a55e2aea161f0bed",
      "c45af90ac2208e3f32dd3afc03dc72fad378040000",
    ],
    [
      "ETag",
      "NijGEVOl85WoNijIThwfFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "401086df65bc2d096229a689179c040ca2d272650859dae901da4eddddaa84f0eece5644a3267ab39d997e339dffefee619b1621b8b04ee3a70ae5ee2c46fd608239aa2ad38a1f25150ac102d42266f269dbaa46373d9d2483edab485a7733af3f8eafae98504182b900770f518a59a8c07ddc432172e4b680b22a2f56756681de95a6e8f9f3c96cc4794ea1c9678be9b4db9b0ee1609d1a43a1c5aae6ffd1b63c58b0a1f51c23945804687629256d30d013235389bcccb0a1a892012aa8e1fa452ca92a85246a70a561b71be7ce856377da8e63b73a3683190542a75430bbf0783fd0a44536a71756090e03b20e5970549fcf5c4ec35a88092733dfb1ebfdbe02120392e1ea4faee47513c17fe1033b3af09d133955853e51d7d3bbee6fe3d8d2cf5183ae3ffc4128cd469d107f723bf4fceeedbde19647e9bd9d46752f897d54682c3c6fda97ed8ed37c77b54fc669fe8eab65851604822fc738d5e0462253787803aee291bb7a020000",
    ],
    [
      "ETag",
      "qk2uGJBthhDkxah2ONSCHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT * FROM (SELECT `record_id` as __pk, `purchase`, ROW_NUMBER() OVER (PARTITION BY `record_id` ORDER BY `stamp` DESC) AS __rownum FROM `purchases` WHERE  `record_id` IN UNNEST (?)) AS __ranked WHERE __ranked.__rownum = 1",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85546d4fdb3010fe2b96f705b6d2d7242d95102b90b14890b23405b1696a1de7123cd238d80e0ca1fef75d12dad14ddaa44aedf99e97bbf3b92ff45ee4311dd348a40f25a8e7773f64445b140c4bf134ed7eb56efd0ff1e824ff5974e15c76a69e7c3a3a4284a8589aad8a0c0eb42c15073d9ecfdaa99265c194940728746039073d67e05843db71acfed0429e862cb910f93db2ef8c29f4b8d3d978b75329d30c5821749bcbd5f6bcf3d8ef144afe006e7467d7b2832ebaf36fd3e34c726684cc8fe6332ca0d4a016b06222ab1adc32e3e8e3ae745bb0553b45f0a3e0c03897656eaab25082cb3c1169a96a553a7ea175996f7ed0997be19e86e43df9144c2fc9de6bb854c0a58a17225e12a6c96251dcb7c8b240bb3ba661d922c1f466e1cf2f4fdc606f9f4cafdd80ec5d4d82d00bbda94f4e6e7704a6c119e6ab436db0f025397367a7fb6432435d259ff272d5986ff5f592dc7c760397ecc8783e99fbbe3b0bc9def1fe86cef27b885fd19bb0bd953d223d1c420cda88bc1e41c8a20caaf65f6fc9fb7b372a02335845935c0cbb0eeb8dba8751120d79321ad851d285281a45439b0da22e3fb4c08a2360c833957acd62b9cc7bcc8e2306e024a39e6db141cc6c9bdbf1d061368f22bb9b1cf606fd184674dda24f4a183813ba905a3457456f022f74176130f74f27a15bb791b03233674d7155136feb34d82482fed1d7baca0a894ed5bd7b7ee80693d3d0bb769b55bb8094f1e7d9032e5bc2320d88668aadc080ba94310e8d5e4d67f5fd4e2e9051efcfd506a1e9f8dbcb6f42f85cd45336f5379d04c1e416394c29f6fc470eeb702cba5ebfb1bb665959436a7c1d35fa8f4d82f6b097df517f27b2762287aebfaff1d3a2f8de1a67fa65ee06b7b4390a20010539ffff4e20b84efcf76f63f386118baf186d70e98dc00de4ba32e10a9a4d14abba95863decf64776fda76398327fe50e47ce66e49546a5082bc8cd6b47cda3ad8758a54abd05611217c8f7fc73ccfe02e9e02f1c43050000",
    ],
    [
      "ETag",
      "g0Z4YN+d8Bnxp0eGo/OIow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "d1",
      "6a",
      "c2",
      "40",
      "10",
      "fc",
      "97ed6b028dc6a4087dd092aa456c1b95428b84f3dcc46892bbde5d2a22fe7bf7a295f645fa92db9b9de1662607d8e6d50abab0ccb3cf1ad5fe2643f36a8718755d184d8714954670000dcb88191a1d799df43dde4f79eb890fc3c73b95edeeef89a1f91a4b06dd03a439162b0ddd8f0354ac44922589dc12c5eca5bd8d26b36810c50494626581c97c3ceef5c7111c9d8b44d68aaf59f3f659369dc5a3c9e0ba2a4994d85575f9afc7164707366219638a0a2b8ed6bb546283dc8c6c2d9a95b240570bb2821a1a72b3c894a8255342b884b87ee07a413bf0c34e10f8add02762213833b9a8883b9f923f30c2b022163b6a05da4450cd4805a5cdf78b60bfc961a7376650955890fe07f21ab7bfe9de65f7ac5895e1156aebb2eb490af497b9389bebef0dea172528a9461bf2f614f841d8120c9563548d0e7046ff79989bd3fdf80d4326b91044020000",
    ],
    [
      "ETag",
      "7tsE15fZRySc2JcH7F8rgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9",
      "b310e4e2606fab0a295421a045f742b8545260dc9716cdfe7d66bf31cf3f9c0748f39c4e533277356dc13b5852d59273d9eb4d68f3aa8a0d74fbd691282b0b75e212738f7e26a608eeaee88adda23a4323d4b920925b069e8e91720bfc4dedd3ca415e88497c1cce6ab4ddec15ce51cf970f16e15ebbc01d71245b619e966df5030caf6a5b9bb35e87256ec969af640939665f5d31729237d5f95e305aa4b53be40e9322e6f87b8ee79bfbb6d6c5d58276af4cd9b269ea7594f99e11968ed105b035ad352a8c131eed836912a8456113602abfbcfc5f6005a8e8d948a7843db76b8665adc05ffd645e7afafc0f693ad211fcfc02861c76d819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-47-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6d12d2100891a2354be99a29212b9076d33421632ed42dc1149b765595ffbe8b69ba5695ba276cdf73ee39f7832772cbcb944c49c2f3bb06eac74f372221470414cdf1f55bfae5c2fcb1e1bcf90305e33e9d97c1f8613643046f5992eeaa027a5234350339dd86fdbc164d456b217a98a86739bda13db22d676cdbd6b163214f4291ad78798bec6ba52a391d0c0edafd5c88bc005a71d96762f7f23eb83f1e54b5b801a6e4e0ade40055e4e063d1cf8560547151ceb6211a6824d431ec282fd0c23f669a9cbc4ddde774d7cf117ccf1950c64453aad616a660a2cc78ded43a2b993e116df3d58184deca5b44061345b32be392eee0c848a9a2b17aacc0380b366b63e99f6d82f53c5a6efc385c9c7beb797fb1596dd77e685c9d7b8167289a14a0b9c6cc38d1371f2fa89f8254bcd4ea51fbdc2a3f3768f97e2c2d01a52574c1d8316d3a9c986e92250ecb26a3719299902493c419d3516232d7022b4d80224f8b6a162d45699b8cb98e6bc5d41c27b1e5586e9c4c68169be6105c66b274e802d91f91879a2b38e5b21292771d2257c132f2e228d8fa8b79e4e91232da14eab433d616f0daa3c20211f4414dfb36ca052ab5ed5efa9117cc17d1f2d2eb26bc829cb2c7f00e679cd14202a2698dcd5350af458a0d23fe7ced9d22584fecfb2128c9f4d713697bdeba78d5f2177a84036ced2afd2561142cfdafdace0171498b4643eebb03a9d0f235d686aef7bf11894bda6521175b2ff849baa70032a8a164ff9f268275e0bfffda61f1118bab8f3252e11d7787c95684d5d0ed10d7e53eb31d73349ed844836bf52e66dbeea16b6d8e3623eca054cf15758b8f8576628d7c016110c7efeb6eedff02a2f7c8cd78040000",
    ],
    [
      "ETag",
      "JdBQ0XOiiuxelciNaAnR5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92514fc2400cc7bf4b7d1d11750cb2840744c419401de3811843ce5b81c1b6cebb9b4a08dfddde44346aa22fb7b6fbb5ebffbfdbc23ac963f0e131593c95a836470b347736085197a9d1fc2828d7080ea0110b26af9369749c2a4ff645b86e05d3d7ae7e3e7b69b799d0728999007f0bf304d358837fbf855c64c86d92d232cb6755e680d914b6388ec260d4e73ca3d8e6a3c960d0391ff460e71c1a6361c4ace2ffd1f6b07360458f21ce51612ed1ee52285aa1348195a94556a458d3542a891a2ab87ab15054164211d5b852739bb513efcc739b0dcf734f9b2e8329496112ca999d8c793f3064441ad20bab048f0155852c785e9dcf5c4ee24a880d8351e4b9d57e5f018592543cfb932b78dda5e0bff081ed1df8ce898ccadc1ca8cbc14de7b7716ce9e7a88b4ed4fb4168c3461d902818f6c65167786bb987bdf4f38d417dab887dd4682d3ca9bbad46d3abbfbbda25eb347fc737aa4407a4e0cb719518f0e722d5b87b032d930fc87a020000",
    ],
    [
      "ETag",
      "JiYT/lr6cGaRk8IYxCsv3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT * FROM (SELECT `record_id` as __pk, `purchase`, ROW_NUMBER() OVER (PARTITION BY `record_id` ORDER BY `stamp` ASC) AS __rownum FROM `purchases` WHERE  `record_id` IN UNNEST (?)) AS __ranked WHERE __ranked.__rownum = 1",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d6fda3010fe2b91f7854ebc04080490509742daa1d1d085d0ae9a26701c87ba4de2d476daa18affbe4b02b4ac522ba1d2f33d2f77e7332fe88125011a209fad1f332a365feeb98faa882abc86537d733e5696d3bc085acedf1fad46dfbaf8859f874340b09c25719c46b4267926089583c5bcbe163c4bb1e0bc064235a3576b76db5dc3ec74bb46cb34802769144e59f200ec3ba552396834f6def535e7eb88e294c93ae1f1e1bcf1d46aa482df53a264e3d8b2012eb2f1b1e969c409568c27c3c51c0ac824154b1a63164109afccc0ff762c5d6738aeaf01fcc408c584f02c51795920417812b275260a5534784145996ffe41737b6a8f3cedab76eece2eb5ca2e5c094ab808962c5869586acb65fa50d55629d8dd61495755cd9ddd2c9dc5e599ed564eb4d9b5ed6a952bcbf526de64e66867b7470233770cf9fc502a287ca559f3d109fc0159c19f932c2ebd0ff272a5dd7cb75d5b3b529938dac271ecb9a7554e4ff6749c3cd06087de87f583ec506bc20c022a154b8a0978d88f68defdee9226ef57232760055594c9a5a97771b3a7f7fdd03749d86b77fc50a7bedff3cd0e6efb3ae91bd4087c8a81a772f58285139ef8a14968ab1d365bd40c839090aede2704777cbfad93d068f602df0c9b6180b655f42c98a26326532e597953e8c69d78f6d27317cec8f2eca28d1067911a97c5e54dbcad53419300faa0af6d9e651c9cf26b9f389eed5a236f726d979b36a56b4c36f347d8b5104792021a0b1c5345c5250f6068e86a362faed79a02a3589fab3d42a2c1ef975782b7498b29abe21b59ae6bdd02070b8137ffe5a08eae81b6db3776d738ca0a48812fa252ffa94ca026f4f21ab58e22e328eaa2ed9f2d7caa089e5be98c7e2e6cf71695472e0da9a009f97c27005c243efdd5d83f61c0c223061bd879c5600389cc4d88a0e526b2b868a5649bbad1d64d5480857a97338cd67ee4b946ae48639aa85d47e59b2d8698a732790041",
      "1216c899381790fd07cdda2d8642050000",
    ],
    [
      "ETag",
      "0yFDtAN1Gd2NxK2/9AGXaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "86",
      "ff",
      "4b",
      "770bd950868b89173899628871a8578b21b51e1105dab5658e18fffb4ed190edc6eca63d1fcf49dff3f64c8e59b9257db2c9d2cf0a64fd90827e37410caacab5c24bf05201b108689a2219751fa75376084745507ae974347963df8e3f1820a1d81e0a4afa67b2cb20df2ad2ff38939216806349228e88e85a982c9c2d83711063a1e05b5398ada2c81f4601b958ed88a824dbd3e6eddbd8621987b3f1fda92491fc5456c5bf1e5b5f2c72e09b187620a16460b40bc90fc074686c51b41039d88aa31450a4819b462a7925a8e4dcc68aedbed88ed7f5dcdeb3e7b99d9e8b60ce19d5192f915d2d501fd15cd33ce62774857411904d8806ed9af30bcb9d660f13cd81ca36711a9dbf41b7ed0df30a3620657d8776da9e2f709bbfe4faa66c586b5073c9714d0566c3a7ebb6afdc38a0d1192d2bb008a3f8c9934c5ff3cb0fe8712d9b41020000",
    ],
    [
      "ETag",
      "L3/JJcjIDmEn6gJDHFcx1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:35:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4b7282300000d0bb646d190c88d01dbf8aa6b6d128021b2660305484088ac14eef5ea7d7a8ef0eef1bd03c675d975e9a23abc12b1828b4945cc9543bead5fb069f4f855ed383afcfd29d495c751942eeda3cb0da203f0e215ef950e8e7205413c9ef55b9ba69ad1b122ef2da95024507d3ac368e91378df0964bb29e9221d6d60bbd97f1d8d53358bb64ed2141263da71e9a1b9fcdbe8a3b682c48d223f632cd6cb39af732c163666b36a990145112a31ba6da6a76e27703a59ac184301785f536c685a859e5a8781e645bfc55c0165ed341c67e1ded3edeaf657cecac3ddfd0c8d82a4f4fff0e18012645d9b22e2d1fdbb589658dc05ffdf43208f6f8ef30dab216fcfc02eda79af119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-49-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbb8262109842452b446295d9912d201e963d3846c63a85b822936a9ba2aff7d17d374ad2ab59fb07dcfb9e7dc074fe88e17099a22c2b3fb9a558f5f6e05414788299cc12bbe3477d6d58feb5fbb41987c75e928bcfa6b3fcc6680e00d4be26d99b38e147545999c6ec26e5689bac495101d48d4b1269dfe6838b21c7b34b2068e053cc9f274c98b3b60df2855ca69af77d0ee66426439c325975d2ab62fefbddda05756e29651257b6f257ba0227b1f8b7ecb05c58a8b62b609c1402d5915b32de63958f8cf4cc8f1dbd45d8eb7dd0cc03b4e19a654d4856a6c410a2a8a946775a5b3a2e913d2365f1d50e82edd45645091d7db222ef0961d19095638568f25334e83f5caf0fcd375b09a47deda8fc3c599bb9a7717ebe566e587c6e5991bb886c224679a6bcc8c637df3e102fa09938a175a3d6a9e1be5e70679efc7d210405ab236183be608f7c7e684a4c4a1e9786893d464848c8963e32131e9c462564218069e16d52c5c8862629a969df6c7b13db1acd8a298c6c4b148ccd23e9d4ca843a83d44fb23f45071c54eb82c85e46d87d065e0456e1c051b7f318f5c5d428aeb5c9db4c69a025e7b545020803ea869df44b900a5a6dd9e1fb9c17c1179176e3be125cb307d0cef61c629ce250334aea0798a552b9140c3903f5fb92700d6133b3f04259afe7e424dcf1b17af5afe428f60808d5da5bf288c02cfffaeed1c101738af3564d71e5009966fa03670bdff034858d2360bfab971836bd43e052c65152be8e7d304b00e7cfaaf1d161fb0b0fa202315dc6177a86c4468c5da1de2badc67b663dafde1186970a5dec5069679e85a93a3c9c8b6ac50cf15b58b0f85b662b57c014110c6efeb6eedff0121df841a78040000",
    ],
    [
      "ETag",
      "aW0v4XJYZv2Sd+Ec6SXz5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f83400c86ff4bfdca1254c694c40f4ce724b2a90c138d31cb0d3ac6048a77876659f6dfede19c464df4cbd196a7a5efcbade129af52f0609667cf0dcad55e86fac60411aaa6d08a1f35550ac102d422637268df1ff9ea7234b3ed00fb8b7199dd3583ece48409952cb014e0ad619e63912af01ed6508912b92da1a229ab699b59a057b5294ee228180f392f2935f9f8360cfd7e38808db56b4c8516d396ff47dbe3c68225cd229ca3c42a41b34b2d6989890e8c4c25cabac08ea24626a8a085db1799a4a61692a8c3958e73dcd9770f5da7d7755de7a0e730585022744e15b3b713de0f34695144f4ca2ac16540b6210b9eb7e70b97f3b41562c2601cbb4ebbdf57406242329dfec9d5bcee42f05ff8c0b60e7ce744494da577d47978e5ff368e2dfd1c75e6c7831f84d26cd40e8983d16012fba36bc33d6ea5f7571ad5b524f651a1b170df768eba3dd77e77f5948cd3fc1d4fcb062d48045f8e8b5c83371785c2cd1b2781c4397a020000",
    ],
    [
      "ETag",
      "G0Y8AsKMb00IeBhNmgXuEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, `purchase` FROM `purchases` WHERE  `record_id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da3010fe2b91f765938024101240aa3ad4a62b120d5d08adaa6902db7152b7214e6da71dabf8efbb24a594556a25a470bee7e5ee7c7e46f73c8fd108119e3e944c6ebedc09825a88699cc229d7663e5dfc3dfb33c30f3de77c207bdefcfce9e80810bc6229bc2e32d656a29494a9d162de49a5280b2c85688350bb6fb56db7e73a5edf759daee7004fb12c99f2fc1ed8b75a176a649a3bef4e2a449a315c70d5a162fd7a6e3e76cd428a3b46b5320f2d4d7051e6c7a6c799a05873911f2de65040a9985cb235e61994b067c6e4fba17487e3752705f023a70c532aca5c576581041579c2d352d6aa68f48cea32dffc41737fea9f44c64a322a64bce4f1cac0ca582e8bfb96b12a40ff162bb632cec2d9c53e562be3fadc0f7de38037098c4510f8f3c8f87afc0dcc63a634cf6beb08938c55b62fd399bcbf938a80358837c9a567b9d81e584392108f26835e9f2416236440bc3eee118b0e1de6c48461e0e94abd66e15ce4304e426dcfb1ba1ef386c3c4f658ec5a98d8fdc4219e950c878492ae3540db167a925cb353ae0aa1783322741d4e227f19858be0641cf9751b092e337dda145735f1b64e0d4d02e883beb655960b70aae63d09223f1c9f44932bbfb9e2294b31ddcc1fe092139c2906682cf19a69262f440c434397b3f9249acc82f11418f5bd5dee100a8d7e3def09d1a6a8a7aceb2f1a87e1f80638584abcf92f0775b80eda6edfd85de1acac2135be8e1afdc726816ce8651f750f22e72072d1f6f7167e2d047bde38a39f0b3fbc41cd51c81226594e3fdf0900d7894f9febeeed00165e0fd8280d316c2055950995acd944beae5b69d8b06476cf433558ea77b96edfde8dbcd2a814d99ae5faa5a3e6edd443ac52a57a054112162898043f20fb0fb7864024bb040000",
    ],
    [
      "ETag",
      "it/nLUzFxOaq34H8r37SHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "52",
      "d1",
      "6ac23014fd97ecb565ea6a05610f761457569c56ddd886488cd75a6d9b98a41b45fcf7dd5499033761f325b9b9e79ce4dc70b6649de473d226b324de1420cbab18f4c01411a822d50a37c17305c422a0698ccca7d07fd85c87e540bf32eabfc83c6a065e7c7b8b0cc5969051d2de924502e95c91f6db96e43403944da7628d145d0a730a7a23bfeb47d8c8f8dc347ae330ec78a14f76d6974414922d69f5f641361c4541affb936ab2b3c88acf225880849c813121245f01d381994fd14ca4602b8e77822215b90262c90b4125e73676ec66cdaebb37aed36abaaed36839484c39a33ae13972c743b44734d7348df8078e47ea2e326455e3a88b6a7dc77ea39ac3541d81ef56fefe82d72fd43b17de7fc41f25cde37f108e0e9ea90699418a5ff83ba90f942dcfe05e5ac00ca42ccf38b98cd3f8ee459eb77a0a9faa2787a478a506d5971c63a7c024aeb64fdf1d3789d498542d0bb008c30f80fb44efcfbb4f8c8c17009a030000",
    ],
    [
      "ETag",
      "VLEKq/LyQtZcaEYrnR5IBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "1f8b08000000000002ffedd34b7282300000d0bb646d1d54e4d325a051a162a40874930998e12b044840ecf4ee757a8dfaeef0be014912daf7983725adc13b98c8529f27739b69c6764c5d0f613286f9b697aba0351af3a28b8d0805bc86a6b6ea8e85c71943b27256c54db3cefe27d2ea31f32166eea90924d59e4a4fb914adb986c9150f306b42bee58a155b6e1189bbefbfc562b454f9cb53cf1f0817093587feb822de40ca6a115a811bf9c3a9d8b95d84f669a90f323665ae36bb413c9804175a3c06ce924eed9138fb1b0c9943e58336a2943c18adb34d5ab5be14d9d241e188e80a44f39797ff0bcc00bdb3bca33dce9fdb576b5d9f81bffa984f8c3eff1b9474b4033fbf6db31cb019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-51-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbda2424214f295aa394ae4c09d90869f7d0848cb910b704536c325555fefbae4dd3b59bd47ec2f63de79e731f3c923b5e24644a629eddd7503d7cb815313923a06886afbb1ddf5dd73f26bdcfdfae3c6750c5b7db49309fcd10c1354bd27d99434b8aba6220a7db4d3bab445dd24a8816266a0dbaadeeb03f744683e1d0e98d1ce449c8d3252fee7476a54a39ed744edaed4c882c075a72d96662fffcde39f43a65256e8129d9792dd94115d9795bf4632e18555c14b3ed060dd412aa08f694e768e12f3389cf5fa76e73ba6f67083e7006943151174adbc2144c1429cfeaca6425d347626cbe38908dbb7417a1c5445eef8ba8a07b38b312aa68a41e4ab02e83f5caf2fccb75b09a87deda8f368b2b77356f2fd6cbedcadf5837576ee05a8ac63918ae35b3cecdcdc70bea2720152f8c7aa89fb5f25383bcffc7a209282da10946237b48bb637b12a7f188a5e3fe204e6d88e3713c1ad07e6cb389034e1203459e11352c5a88623cb0e361974134e9d949e4246912c5e99846d4813eedc128b5fb29399e91df155770c16529246f3a446e022f74a330d8fa8b79e89a12525ae7eaa231a60b78e9516181087aa3a6a38e72814abadd9e1fbac17c117ad76e33e12564943d6cee71c629cd25209a56d83c05d54a24d830e2cf57ee0582cdc4be9c82924c7f3e12dd73ede245cb9fe9210e50db55e64b3661e0f99f8c9d13e29ae6b5811c9a0329d1f20e6b43d7c75f88c4256db290af5b37f84e9aa70052a8a060ef4f13c126f0eebf765a7cc4e2eaa38c5478c7dd61528bb00a9a1de2a6dc2736aec7c4991003aed4bfb191dd1f9cbaa673e88cb087423d55d42c3e16da88d5f21984411cbf6fba75fc03953824da78040000",
    ],
    [
      "ETag",
      "hhihVuZ92JXHI45rbjU9RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bc2d094829a6091745119b00f2532e8821646987526c3b7577ab41c2bb3b5b118d9ae8cd7666facd74cee91ee031c92370619dc44f25cafd458c7a628229aa32d58a1f05e50ac102d42266329793c6e255939462b85e4cd64ed1eca3d7e930a1c22d6602dc036c124c2305eec301729121b785949659beaa320bf4be30c55930f5477dce338a4c3e9a0f065e77d083a3756e8c8416ab8aff47dbf268c18ed653dca0c43c44b34b216987a1f68d4c25b222c59aa25286a8a082ab17b1a4b21092a8c6955aab516b384dc76eb71cc7be6cdb0ca6140a9d50ceec7cc6fb81262dd229bdb04a70189055c88237d5f9cce524aa8498d01f058e5dedf7159018928c567f7205afbb15fc173eb09303df39915199eb33753bb8f77e1bc7967e8ebaf182de0f426936ea8c04feb0370bbce1d870cb93f4ee5ea31a4b621f151a0b1b75fbaad576eaefae5e93719abfe36a59a205a1e0cb71976870372255787c031f90180f7a020000",
    ],
    [
      "ETag",
      "nrQ1YztorraMbYQb6p3GeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COALESCE(AVG(`amount`), 0) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553614fdb3010fd2b91f705a4d2a66d9aa49510eb4a606125853405a1696a1dc7091e491c6c87a943fdefbb24145a268114a9b5efbd77efce77cfe881e5111aa190258f2515eb2fbf79885a882a9cc02df92b481e1561717156263f5cfb42ac2ffcebe36340b08a257156a4f448f252102a478b793b11bc2cb0e0fc08848e06bda3aed9370d6b609a46cf328027691a4f59fe00ec7ba50a39ea74b6b9db09e7494a71c1649bf0ecf5bef3d4eb1482ffa644c9ce7eca0e64919d8f939ea49c60c5787ebc9883815252b1a419662958786346e1d77de936c3593b01f013231413c2cb5c55b64082f03c6649296a55347a46b5cd9d3f68ee4c9d49a0ad04255c444b16ad342cb5e5b278686993d978eacc27cec1f8e6fc6085b34a7875d8d2f4c30ab3bdd0cefcd9a5b62ac0cb3d9654aeb4dbef8eef687b9aaea72d3ccf9907dac1c9a176eecf1657dab7bb5d08b88da8542cafbd06384c69e5f3a59deeff8f5811b0828c4d7069e926eedafa308c438bc4767f10c63a0d433bb406b81fea646850230a29069eaad46b16ce791e767503f7493fa6d80a87d1d086af678583a145ba3d8c49dc1f7675dbe8a24d0bfd114cd153260b2e59d35374ebbb81b30cfc853719074e5d468ccb549d36e6aa22767d2a2812401fd4b5a9a28c43a6ea815c2f70fcf124706f9c6626a634c1643d7f84a988712a29a0b1c01955545cf2089a86ae6673377067de780a8cfaa1afb60889463f9fdf08c1baa8bbacea5f34f6fdf11d70b01078fd2e063e4c036d363be96e705ad6901a5f9f1afda72680aa96bd9d7a7b2763ef64a2cdaf0d7c2d048bd16446d70bc7bf43cd954f632a684e3e9f0900d7814ff77bbb6c808575833452c1192690c82a0911b4994496d5a5346c4bb76ccb443558a8f7315b37cc6dcb2b8d4a916634572f1535cb5637b10a95f21504411820cff5ce21fa0f4ceac8c5ec040000",
    ],
    [
      "ETag",
      "czrcndpbpJFugKI8JryJRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91",
      "dd",
      "4e",
      "c2401085df65bc2d86426995840b20889806b4c28d8690a59d9642db29bb5b0d21bcbbb3c568139d8bddf9f94e3267f70c87b488a00fdb343956284f3709ea179304a8aa4c2bbe4a2a148205a845c2e4d36e112d76d368144819ebf1b0a4b7a39d0c064ca87087b980fe19e214b34841fffd0c85c891659b4d7960449f4a53cde6cbc974127023a7c834e62bdf1f8efc095cac1f89c8a92af4afe8c15f0c97ff49d6170bf6b40d3046894588668352d21e433d33e694c8cb0c5b8a2a19a2821aae0789a4aa1492a8c59d56afd3b2ddaeeb783dd7753a9ec36046a1d02915ccae5e7937d0a44516d0277b832e03b24ed9665c9f1fdceed41e4c66dfde796ebb11dd7ad7266c3760efefd8698c1dcfbb6fc49d81d7df1b8d4e1ad5b324b6a7d0386b5f5d8ec938d7fc225a56684128f88b1e537dad2f5f2dd8e1e2ff010000",
    ],
    [
      "ETag",
      "JhOdOhGdBRrrftCApoZq1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "edd34b7282300000d0bb64ad0ee59feea0835ae3000a2874c3c490467e12087ea2d3bbd7e935eabbc37b004c0815221fbb9a9ec03b905885333243dc76e757b65438ff08312e724b51acc6868b8b7ef174b3b1b65b41f609b532e2b46ad4ad6f2e197be17aacd5822a753205aa4d014fc3ca2e9d2eabdd34423b9e6ec6363bac7d9b7a52d8c949dd232cfc63cd8fdc304d47f80a6d99f6b688ca1cc501be6ee21005d361e82b29198dda439baec6202fe7156459fcb9bb97523fd79c2d037638c7467d4541779766966811742f453145e42b0d1da3ae1adc1bdf6312ce5e5efe2f3001f4c6cb818abc7c6ed70c0827e0af7e3e4a4e9fff5d8a073a809f5f09d6e82719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-53-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fa34014fd2b64f6e3da87b414daa4599b8a2b494b15a8aed96cc8305c70141864866e1ad3ffbe17b0aec6443f3133f79c7bce7df04c1e791193198978fa5443b5fff62022724240d1145f9dedafbb6b637a951b55b1df45d3c4fb1ef88bf91c11bc61499a9719f4a4a82b0672b6f5fb6925ea925642f43051cf18f54e27a3c9d8342693b16e8e9127214b56bc7844f6bd52a59c0d0647ed7e2a449a012db9ec3391bfbe0f76faa0acc403302507ef2507a822079f8bfec804a38a8b62bef5d1402da10a21a73c430bff997174f63e759fd3bc9f2278c71950c6445da8c616a660a248785a576d56327b26adcd3707e2db2b7b19684c64755e8405cde1448ba9a2a1da97a05d789bb5e6b8171b6fbd089c8d1bfacb4b7bbde82f37abeddaf5b5db4bdbb33545a30c5aae36d7ceda9b8b17d48f412a5eb4ea41f3dc28bf34c8f938968680d212ba60680e27f4d41a4ea3243259628d8c28194214599169d0513464d3318ce30828f25ad196450b514cc0d261ac5b611c9b108ee114c26914eb21d50d06ccd447463c248713f2b7e20aceb92c85e45d87c8ade7047618785b77b908ecb68484d6993aef8c3505bcf5a8b040047d52d3a18972814a4dbb1d37b0bdc532706eec6ec22b4829dbfb4f38e3846612104d2b6c9e826a2d626c1871176bfb1cc1edc4ae8e414966bf9f49d3f3c6c59b96bfd2031c606357b55fe2079ee3fe6ced1c113734ab5bc8ae3b90122ddf636de8faf00791b8a45d1672bdb5bd3bd23d7990400505fb7a9a086e035ffe6bc7c5472cae3eca488577dc1d261b115641b743bc2df7856d0e2dcbd0490baed487d8d49a1cbbd6e46832420e857aa9a85b7c2cb413abe52b0883387eb7edd6e11f169603fc78040000",
    ],
    [
      "ETag",
      "IUXYQ59Pm5rnyvb9fR+TSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92db4e83401086df65bc9426d6526a48bc68ed41925a2dc543629a660b03a50283bb8bda347d776751ab5113bd5966866f86f97f760b0f6911810bcb3479ac506e0e12d45313f8a8aa4c2b7e945428040b508b84c9e631b55eee969378e43d0637cee17ad81fdd4e4f4f9950e10a7301ee16e214b348817bbf8542e4c86d2165555e2ceacc02bd294d7116f8de64c4794e91c927d7e371b7371ec0ceda3746428b45cdffa36dbeb3604d4b1f6394588468762925ad31d49e91a9445e66d85054c91015d470fd22915495421235b8d268b71a4da7e5d89db6e3d8c71d9bc18c42a1532a98bd9ef17ea0498bcca76756090e03b20e59705c9f4f5c4ea35a8809bd49e0d8f57e5f018921c968f12757f2ba2bc17fe1037b77e03b2772aa0abda786e3cbee6fe3d8d2cf51fd6e30f84128cd46ed91c0bb18cc82eec595e1e6efd27b1b8dea4a12fba8d058d83cb24fda1de7e8cdd533324ef3775c2d2bb420147c39ce530d6e2c3285bb57f6dc41fd7a020000",
    ],
    [
      "ETag",
      "12o3xXbNfGIqTV6+jFDGWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "10",
      "fd",
      "2a91f74f2bf12340480252d5319a759168e84268d54d13388e93b94de2d476d850c577df25292d74522b21c1f9de7bf7ee7ce6093db03c426314b2e4b1a462fbe99e87a885a8c2099caafbc8feb1d85a74234979b549ece1df4b999c9d0182552c89b322a56dc94b41a81c2f179d44f0b2c082f33608b58746bb670e4cc31a9aa6d1b70ce0499ac633963f00fbb752851c77bbfbda9d84f324a5b860b24378f672deddf4bb85e0f79428d93d2ed9852ab2fb7ed1f39413ac18cfcf960b30504a2a5634c32c050bafcc28fc7c2cdd6138eb2400de30423121bccc55650b2408cf639694a25645e32754db3cf88116cecc9906da5a50c245b462d15ac3525bad8a8796369d2fbde0648db34a717d5a25f681f6d59f5f69eb020cfcc692cab576fbcdf11ded48c8f5b4a5e7398b403b393fd52efdf9f25afb727708018b11958ae5b5c1008729adcc3dcfd0fdffe62a025650b149ae2cddc43d5b1f85716891d81e0cc358a7616887d6100f429d8c0c6a4421c5c053957acdc239cf75d3a02313261f0e49bf67e831eddbb81f1bc41ee8a31ea196d5b7ad9e1da35d0bfd114cd10b260b2e59334874ebbb81b30afca5379d044edd468ccb545d34e6aa260e7d2a681240eff4b5abb28c43a5ea565c2f70fcc934706f9c66116634c164bb78845588712a29a0b1c01955545cf1088686aee70b3770e7de64068cfa76aff70889c63f9f5e09c1b6a8a7acea6f34f1fdc91d70b01078fb26073e4c03ed7607e56e705ad6901a5f478dfea649a01ef4f21af58f22e32832d1eed70e3e2d04afa1a98cbe2f1dff0e35473e8da9a039f97827005c273e7cd4fb170658786350462a88610389ac8a10419b4d6459dd4ac3b6f4d16850ff25282cd49b5c4fd787fa",
      "7ee49546a548339aabe78e9a17560fb14a95f20504495820cff52e21fb0f467335fee1040000",
    ],
    [
      "ETag",
      "tjd8ZSy7evscuMvg85xGsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "4ec24010fd97f1b54db8b4c590f00086609306a58a891a4296765a0b6da7ee4583847f67b618a2f1c597dd9973c99eb307d815750a43d814f9bb41b9bfca512fec10a332a5567c35542b0407508b9c9583d4cc5e165f49f8dcb9bbce9ea2c61f87f5623462854adeb012303c405660992a18be1ea01615b26dbd6e762cd1fbc66ee1fc713a9bc60c54945a60be8ca2f1249ac2d1b9584445a6d6ff32ad8e0e6c6913638612eb046d8646d216131dda7a4a544d89ae22231354d08a5b2297641a21895c465cdf73bb413ff0067e1078bd81c7c29212a10baa59bb7ce074a0498b32a64f6e077d16c876e4a2597b7e30dc6b5bd8c96fa3fde4ba172ef8c379bf7dabefc7267b8dea5e122757684377ce056ec896d25c564b830e2482ffffb6d0e7fd7802098e4e09dc010000",
    ],
    [
      "ETag",
      "7duGZQzcIY0O8fVLp5AInQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "edd34b7282300000d0bb646d19078598eef89816a920df163719c420608110fe3abd7b9d5ea3be3bbc3b889384b62de9ea2badc02b986311098960b28d8ac7ac1e4ba537c95465e7c46707b55d4eae2c6997759cb378cda24209eceadb6a888c94243adb04e1aa1e2c0739c7c6ac3cbdb7b7da15377c73ea8295e49763c7d19e403a4123b53ecadb8bf149f6105ff4bd1884ae928bda0045c312dbb759854b7be77d6d71900ceda53875198c9555083de5e084ef5eefee4a4b72b2ba2173aa176664f7728a237fd0a3b128f322f36ec7503b58c8d75988426ef26b27d25e787afabfc002d089e59cb6247f6c5f49082dc05f7dd2cd8c3efeab34e694839f5f65344a1b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-55-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda2434e191468ad62ca52b5a423620a9a66942b663a85bc0049b545195ffbe8b69ba5695da4fd8bee7dc73ee8327f4c0cb2d9a20c2b35dc3eac3977b41d019620a67f07af8410a3edf459bcd7e363b98b9b9aaed6f8fd3292078cb92b8a872d693a2a929939375d4cf6ad154b816a207897ab6dd3b77468ee5da8e630d5d0b7892e5e982970fc0be53aa9293c1e0a4ddcf84c872862b2efb54142fef83fd7050d5e29e5125076f2507a022071f8b7ecd05c58a8b72ba8ec04023599db002f31c2cfc676ec9e5dbd47d8e8b7e06e03da70c532a9a52b5b620051565cab3a6d659d1e409699baf0e28f216de3c36a8c89ba24c4a5cb033638b154ed4a162c675b85a1a7e70bd0a97b3d85f054934bff196b3fe7cb5582f83c8b8bdf142cf5098e44c738da971a96f015c407fcba4e2a5568fdbe756f9b941fefbb1b4049096ac0b26aee9e0f3b1794152e2d2743cb2496a3242c6c4b5f18898f4c262d696300c3c2daa59b814a563626aba164de898d88945c930c1c3e130315d677c4128b6f018a3e3197aacb962575c5642f2ae43e836f4632f89c375309fc59e2e21c54daeae3a636d01af3d2a2810401fd4746ca35c8052db6e3f88bd70368ffd8dd74d78c1324c0fd10e669ce25c3240e31a9aa758bd145b68180a664bef0ac07a623f4f4189267f9e50dbf3d6c5ab96bfd06318606b57e92f8ae2d00fbe6b3b27c406e78d86ecbb03aac0f21dd406ae8f7f01094bda6541bfd65ef81b754f214b59cd4afaf93401ac039ffe6ba7c5072cac3ec8480577d81d2a5b115ab36e87b82ef799ed9ec38c1da4c1b57a171b5ba353d7da1c6d4656b0523d57d42d3e14da8935f2050441187fa0bb75fc0724200adf78040000",
    ],
    [
      "ETag",
      "yKbmiCqSVVvAAy0l0Or5Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d925d4fc2500c86ff4bbd1d89c236c8122e5050490005468c18430e5b99c36d9de7438284ff6ecf54346aa237676df7b4ebfbeeece0312d62086099264f06e5f628413db6c10495c9b4e2474985427000b548989c9a7932a7e5c6dcb46ebd97fafa563c36bae3769b09153d602e20d8c12ac52c5610dceda01039725b4499c98b459539a0b7a52d4ec3497f74c1794eb1cd47b3c1a0733ae8c1de3934c6428b45c5ffa3ed7eefc09a96135ca1c42242bb4b29698d91ee5b994ae4658635454646a8a082ab178924530a4954e34acdf36a277ec3779b9eefbbf5a6cb604691d02915cccea6bc1f68d2229bd0865582cf80ac4216bcaace672ea77125c486fd51e8bbd57e5f018911c978f12757f2ba0f82ffc207f6eec0774ee4640a7da0ce07579ddfc6b1a59fa3ba9db0f783509a8d3a20617fd89b869de1b5e5eedfa59f6e35aa6b49eca3426be1c9b1dbf29afef19bab67649de6ef045a1a7420127c392e530dc14a640af7afc5581b867a020000",
    ],
    [
      "ETag",
      "SuZgZobwuW8Y5z2jYak3DQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COALESCE(SUM(`amount`), 0) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10",
      "fd",
      "2a",
      "91f70f68fd95264dda4a887525dbb295149214d44d53ebb84e312471b01d5085fadd774928b44302a9526adf7befde9def9ed01dcb56688822b6be2fa8d87cbae5116a20aaf01a6ee5e365c87fdabfe35f67b3acbb99df7851fff3e8e40410ac64499ce6096d4a5e0842e57016b4d6821739169c3741a8d9b39aba6558a6ddb32cb36b9bc0933489272cbb03f68d52b91cb6dbbbdcad35e7eb84e29cc916e1e9cb7dfba1dbce05bfa544c9f661ca366491edf7939e269c60c57876320bc04021a958d014b3042cbc3257d19743e916c3696b0de0074628268417992a6d8104e159ccd685a854d1f0095536f7fea0c09938e3505b0a4ab8582dd86aa961a92d16f95d431b4f471327183b47c1ecfc6889d3527879dcd03ac7256677a17df3a7e7da32072f375852b9d4ae7f38bea31d68ba9e36f33c2708b5a3d363edbb3f9d5d685fe7fb1070bba252b1acf21ae228a1a5cfe776ba6f1fb124600519ebe0c2ee5858ef7706511cd924ee1bbd28eed028ea47760f1b51870c4c6aae228a81a74af58a85339e457ad4e9d8b131e8ad0c3336a86112d38a067d438f4d0bdb36c6a64d88de43db067a144cd13326732e59dd5374edbba1b308fd99371e854e55468c8b449dd5e6ca22f67d2a281240efd4b52da38c43a6f2815c2f74fcd13874af9c7a2626748dc926b887a988712229a0b1c02955549cf315340d5d4c033774a7de68028ceaa12f760889867f9e5e09e126afbaacaa2f1af9fe680e1c2c04defc17031f9689b6dbbd745738292a4885af4eb5fe431d403ad4f27aea1e9ccc839385b67fb7f06b20588c3a33ba9c39fe1cd5573e8da9a019f97826005c053edcefddb20116d60dd248",
      "0567984022cb2444d07a12595a9552b36d5def1916aac042bd89595677d7f252a354a429cdd47345f5b2554d2c43857c01411006c873bdef10fd074692b955ec040000",
    ],
    [
      "ETag",
      "swQToJ7ZfKDUn2yYhNb8+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91",
      "cd",
      "6e",
      "c2",
      "30",
      "10",
      "84",
      "df",
      "657b4d1090107e240e80428b14d136854b2b844cd8a481241b6c878a22debdeb50d14aad0ff67af71b69c63ec33e2db630804d9a1c2a94a7bb04f5b329425455a6151f25150ac102d42261f21837a707e92df69363ef33775fdb5ee6cbd170c8848ade31173038439c62b65530783b43217264d97a5dee19d1a7d2dc66f3857fef87dcc8696b1af365108cc6810f17eb2611395585fe114d83c7d1e23fc9ea62c18e3621c628b188d0382825ed30d233134e89bcccd05654c90815d4703d482455a590443677ec8e67b73cc773bb1dcf73db5d97c18c22a1532a985dbeb037d0a44516d2076703870159971c33aef723b7db750653f51b4eb7ff7bd5567fb3ad1bdb6a369cde9fb97b9b771b4e2d5f7d7b189f34aa27491c48a1c9d2bce69a90c9aaf90db4acd08248f0a73ca4fa7abf7c0181a367a6f1010000",
    ],
    [
      "ETag",
      "vf0Fqr6TkCv8zm4Z26lErA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00",
      "00",
      "02ffedd3cb5283300040d17fc9ba65782ab82b051c4b90772b6c18840c42da1079063afebb8cbf61cffe2eef1de44581fa3e1b5a8c0878014b2e6a5cc1d954d5adb999c36850b593160602c9a38f20c5ba1afa5ddccb661d99f51642378df09c785963ec857192cecdfbb1c4bcc453084b5ff1c69bfe5c2c4e12421ee3765575657165d8b0695d5b66daa58c90e8212fa697ec2963952bbecdcb35b11dff8ac9d989aaf812a4a4a5e8d33b926fa6a7b34dad43d1382cb6945375f8928cb08a72169009f1b014c4c18cf310939b6107662a11a8aa76d52e06a35dac8cfb57eee1e1ff023b8018ad3bd467f576bba468da0efcad9f0d0b45dbff3aca3bd4819f5ff9055ae819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-57-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b64f6ab7d43699b346b53519b58ba0b54f7910d19860b8e52069941e39afef7bd33585763a29f98997bce3de73e7822b7bc4cc98c243cbf6ba07efc722312724440d11c5fafcf7ec96ac1af4710267fa9fa51178af71fe6734470cd92745715d091a2a919c8d936ece6b5682a5a0bd1c1441dc7ed0cc6a3b1ed3ae3b13d746de44928b20b5edeeaec4a5572d6eb1db4bbb9107901b4e2b2cbc4eee5bd773fec55b5b801a664efad640f5564ef63d1af8560547151ceb7211a6824d431ec282fd0c27f669a1cbf4ddde574d7cd117ccf1950c644532a6d0b533051663c6f6a9395cc9e88b1f9ea4042efc25b46161345b32be392eee0c84aa9a2b17aacc03a0d366b6be59f6e82f5225a6dfc385c9e7beb4577b9b9d8aefdd0ba3af702cf523429c070adb9756c6e3e5e503f05a97869d423fdac959f1bb47a3f164d4069096d3076fb633a98f4a74996b82c9b8c9c24eb43924c12d7a1a3a4cfa636d86902147946d4b06829ca846519751c164f9cac1fdb788ba753278da94d810d327748d321d91f91879a2b38e1b21292b71d2257c12af2e228d8facb45e4991232da14eaa435a60b78ed51618108faa0a6bd8e72814abadd2b3ff282c5325a5d7aed842f20a7ec31bcc31967b49080685a63f314d46b9162c388bf587b27083613fb76084a32fbfd4474cfb58b572d7fa14738406d57992f09a360e59f193b07c4252d1a03b96f0fa442cbd7581bbadeff41242e699b857cdf7ac14fd23e0590410d25fb7c9a0836814fffb5c3e22316571f65a4c23bee0e935a84d5d0ee1037e53eb3ddc170341a1203aed5bb986df70f5dd3397446d841a99e2b6a171f0b6dc51af902c2208edf37dddaff03e303c17a78040000",
    ],
    [
      "ETag",
      "hGZspAih3eSbzatXrlti0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c7bf4b7d7444d07190253c20222c0222cc2743c8b915186eebb8bb4908e1bbdb9b88464df4e5d676bf76fdff777b7889b3083c788e979b02d5ee6c89e6c10613d44562343f72ca34820368e492c9b5b8e89ce77797f166d327d18c5686fcdeb6d56242872b4c25787b58c498441abca73d6432456e0b2929d26c5e660e985d6e8bd360e28f7a9ca714d97cf43818b4af075d3838a7c6481a392ff97fb4cd0e0eace979820b5498856877c915ad3134be95a9659a2758d154a810359470f962a9a8c8a522aa70a5526f546ae24ab88dba10ee65c36530a1509a9832661fa7bc1f18323299d0965582604095210b5e94e72b97e3a81462437f1408b7dcef2ba0302415cdffe4725e7725f92f7c604707be7332a5223327ea7670dffe6d1c5bfa39eaa61d747f10dab0512724f087dd69d01e8e2d373b4abfde19d46345eca3466b61adea36eb0d517d77b543d669fe8e6754810e84922f473f36e02d64a2f1f0062f47929c7a020000",
    ],
    [
      "ETag",
      "j6/C+pK2iqqHo68dhtoIGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, MIN(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85537b6fda3010ff2a91f74fab15c2230f40aa3ad6665d24082c8456d53481e338c16d12a7b6d309557cf75d92d2c22ab5125238dfef71773e3fa3079647688442963c96546cbfdcf3109d21aa7002a75ff14d94188fa13edc0c36727a7be5f5e6787c7e0e0856b124ce8a94b6242f05a172b45cb413c1cb020bce5b20d43207adaed5b70cdbb42ca3671bc093348d272c7f00f646a9428e747defdd4e384f528a0b26db8467afe7fa534f2f04bfa74449fdd8520717a97f6c7a91728215e3f9f972010594928a15cd304ba1843766147e3b966e339cb513003f31423121bccc55551648109ec72c2945ad8a46cfa82ef3e00f5a3813e732d0d682122ea2158bd61a96da6a553c9c6953d73b59e3acd25b9f56c7fb40fbe1cfa6daba00fb0d9654aeb5db9f8eef684732aea72d3dcf5904dac9c5a976edcf9673edfbdd21040a8ca8542cafcb0b7098d2aab49709baefefad2260058e4d7265772cdc1d7486611cda241ef4cd30eed0301c84b689fb61870c0d6a4421c5c053957acdc239cf49641b463c342989ac9ed137fbb84b626c87e670101ba010db703c080db43b437f0553f48ac9824bd68c11ddfa6ee0ac027fe95d8e03a76e23c665aaae9ae2aa260eeb54d024803ee86b57651907a7ea4e5c2f70fcf165e0de38cd1a4c6882c976f1088b10e3545240638133aaa898f2088686e6b3851bb8336f3c01467db7f33d42a2d1efe73742b02dea29abfa8bc6be3fbe030e16026fffcb411d168c6077607783d3b286d4f83a6af49f9a04ea422f6f51ef28328e220bedfeece07786e02d34cee8d7d2f1ef5073e4d3980a9a93cf7702c075e2d327bd7f5f808517063652410c1b48646542046d369165752b0ddbee5a9dae896ab050ef725dabb71f79a55129d28ce6eaa5a3e67dd543ac52a57c05411216c873bd6bc8fe03a5a39197df040000",
    ],
    [
      "ETag",
      "+aVdg4qb/9h8hsMWDN2PaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51db6ac24010fd97ed6b221a6322820fb6d85608b64dbd508ac89a4cd26892897bb10de2bf7736165bb02fbb33e7c29ec31ed92e2b6336609b2cdd6b10f54d0aeac50c21489d2b495785a5046631503c25a55ec6e13ef1a7cbb7f8ab9b1da2451d2e9cd170480a197d40c1d9e0c8920cf258b2c1fb9195bc00b2add7d58e24aaaecc3699cec60fe390800263034ce74130ba0dc6ec645d2cbc405daa5fd37df0349afd67599d2cb6c54d080908282330092a815b88d4c49493bca872b0256a1181648db8215281bae202d126c4eef5ed8ed7f55cbfe779aee3bb24cc31e22ac392b4f357cac6142a9e87f849dd589704a219a966d29c07829da68399da2dbfdfa4fb4b772e74a7e53a57b47be55efdbc7a5b2b90cf02a9820493be7d6e7287a69da2d64a68b058c4e91b1e3375de4fdfa469f1dbe3010000",
    ],
    [
      "ETag",
      "uWdRqf7NWYdx3ivcVyRV2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "edd3db6e82300000d07fe9b323c1a2a17b431d1214355a1cf0d2145a15905b5be462f6ef33fb8d79fee13c014d122e255155ce4bf009063a455aa26d6a73617729c9cecc591b2c0cd698a10aca25ed8ba6a9ae416b92d276c6d8c1c41d1c9e9ff223d5e77096dc6e4ba824bbebba575ccfdf7e6f64ba22ab74655dec16a3c4cf4237b28e63d72055efe7ae57d467d1e19957885d1975cd477837a4da31dd9b1e0e5718a61ef4f17a9b5bf1d83177ff105ec5d1e88a1657b7369242857bda73549f8c6cfbb834e810c3ad6b5bec18b4d1c6ec07546233a0dd5788d4729e6b6f6fff179800ded7a9e092a4afed7086d004fcd5276aa8f9ebff8253c105f8f905a9cd1ce019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-59-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b3014fd2bc8fbda3c9a040291a2354ae99a2d211b21edaa6942b6b950b704536c3a7555fefb2ea6e95a556abf00f63de79e731f3c925b5124644298c8ee6aa81e3edd48468e08689ae1ed15b8dafef93708d6dc3bbffe567e4d5709cba653448886a5e8aecca1a3645d715093eda69b55b22e6925650713756caf73ec0c9dd1d8769cd1603c429e823c5d8ae216d9d75a976ad2eb1db4bb9994590eb414aacbe5eef9be773fe89595bc01ae55efb5640f5554ef7dd1cfb9e4540b594cb71b34502ba862d85191a385ffcc849dbc4edd1574d7cd107c2f3850ce655de8c616a6e0b248455657262b993c1263f3c507d9f84b7f1e595ce6f5ae880bba83232ba19ac6faa104eb2c5cafac4570b60e57b368b10ee2cdfcdc5fcdbaf3f572bb0a36d6e5b91ffa96a62c07c3b5a6d68939057840fd04941685518f9aeb46f9a9418bb763690828ada00dc6e3be438fddbec75236e6a93bb459da07c65c36b6e990f5b9378251c28022cf881a162d6461db03c7731d88999db8f1c8e6107b1ef3f0610f93613ae2ae9d92fd11f953090da742955289b643e4325c447e1c85db603e8b7c53424aeb5c9fb6c69a025e7ad4582082dea969df448544a5a6dd8b20f2c3d93c5a5cf8ed84979051feb0b9c319a7345780685a61f334542b9960c348305bf9a7083613fb7e082a32f9f5489a9e372e5eb4fc991ee1001bbbdabcc9260a17c11763e780b8a0796d20f7ed0729d1f235d686aef7bf11894bda66213fb67e7845daab1052a8a0e01f4f13c126f0e1bf76587cc4e2eaa38cd278c6dde1aa11e115b43b244cb94fecf1b133f6cc9faa69a5dfc45c6f70e85a93a3c9083b28f45345ede263a1ad58ad9e4118c4f107a65bfb7f360a88c878040000",
    ],
    [
      "ETag",
      "Ye8t5XzNNOc9HhKpJfMdbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92dd4e83401085df65bca5f18f5225f182daaa44ac95d21b4dd36c61a8b4c0e0ee62d3347d7767b156a3267ab3cc0cdf0c730ebb81655626e0c22c9bbfd428d70773d40f260851d5b956fca8a8540816a01673261f9d93c3eb659852cfeb2dfd5badd53905ab8b0b2654fc8c85007703698679a2c07dda40290ae4b698f2ba28a74d66815e57a6388a427f70cd794189c907e320f0ba411fb6d6be31115a4c1bfe1f6d93ad050b9a8598a2c43246b34b256981b1f68d4c258a2ac796a25ac6a8a0819b177349752524518b2badf679ebd83975ec4edb71ec938ecd604eb1d01995cc8e47bc1f68d2220f69c52ac1614036210b4e9bf395cb59d20831a13f881cbbd9ef2b203126994cffe42a5ef759f05ff8c0760e7ce7444175a9f7d45570effd368e2dfd1cd5f3a2fe0f4269366a8f44fe5d7f14797743c34d76d2bb6b8d6a28897d54682c3c3eb2cfda1de7e8ddd54b324ef3775c2d6bb420167c396e320d6e2a7285db3718b685057a020000",
    ],
    [
      "ETag",
      "Z62/GkRfoDADkIKtts9oLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, MAX(`amount`) as `amount` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536d4fdb3010fe2b91f70534daa6214dd24a8815c8b64a252d690a63d3d43a8e130c491c6c87aa42fdefbb2414da218154293ddff372773e3fa3079647688042963c9654acbfdcf3101d21aa7002a7c1caff7d617d2daffce9991dcdf9caea0a637572020856b124ce8a94b6242f05a172309fb513c1cb020bce5b20d4b2f456d73ab64cbb6759a6619bc093348dc72c7f00f69d52851c743a5bef76c27992525c30d9263c7b3def3c199d42f07b4a94ecec5b76c045763e363d4d39c18af1fc643e83024a49c5826698a550c21b330abfed4bb719ceda09809f18a198105ee6aa2a0b2408cf639694a2564583675497b9f307cddcb17b1e684b410917d182454b0d4b6db1281e8eb4cbe1af8325ce2abde56175bc0db4effee4525b16607f8725954bede6a7ebbbda9eccc8d3e69ee7ce02ede0f450fbe14fe653edec7617020546542a96d7e505384c6955dacb0447efefad2260058e4d7261eb16ee3a7a3f8c439bc4ce712f8c751a864e68f7f071a893be49cd28a41878aa52af5938e779cfb08d3e8d1c338e09b0fba6deb37b3d9b74ad50777483f41dc3b1bb511f6d8ed04a30452f982cb864cd18d18d3f0adc45e0cfbdf361e0d66dc4b84cd545535cd5c46e9d0a9a04d0077d6daa2ce3e054ddc9c80b5c7f781e8caedd660dc634c1643d7b844588712a29a0b1c01955545cf2088686a693d928184dbce11818f5dd4eb70889067f9edf08c1baa8a7acea2f1afafef016385808bcfe2f07755826da6c76ecae715ad6901a5f478dfe5393405de8e52d32f622732fb2d0e6ef067e4708de42e38caee6ae7f8b9a239fc654d09c7cbe1300ae139f3ee9edfb022cbc30b0910a62d840222b132268b3892cab5b69d876d7ee990eaac142bdcb59b6b11d79a55129d28ce6eaa5a3e67dd543ac52a57c05411216c81b793f20fb0f8b9dcc5edf040000",
    ],
    [
      "ETag",
      "TwRZD6+uQRPB7dUow61r2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "5d4fc23014fd2ff5910dd9875b42c2c33053891371c29321a48ccb186cbbb5ed3084f0dfbd1d064df0a5bdf77ca4e7a447b62bea15ebb365917f36200f3739e83733a4a09a522bba04d60a98c540f39c94f8dcd938ae162fb34ebcbfcdcb280c276134189042651ba838eb1fd9ba8072a558ffe3c86a5e01d9160bb123893e08b38dc6d3f8314e09a8706580f12c49a26112b39375b1f00a9b5aff9a1e92d768fa9f657eb2d8169729ac41429d814920246e21d323534ef14a94602b6c64068ab5e296c82536824b449b103be8d94ee0057e781704be1bfa242c31e3bac09ab4b377cac6346a5ea6f845dd984702d98e5473dd9e7b82ddb68399bcaee3b7e9fed2ce8576bbae7745fb57f4fce7d5e141839a48a40a0a4cfadeb9c93d9a769a5a6bd980c5324edff054e8f37efa066bec2e7de3010000",
    ],
    [
      "ETag",
      "oK+h12tpMU+Ev/glA77P7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "02ffedd34b7282300000d0bb64ad0ec5404977681124c8289182ab4c8811101508289f4eef5ea7d7a8ef0eef1b30ce45d3d0b62cc40d7c8081a968c6678962c60f65dcfb1621aa20c8a31773bdf217f1701778632148aefe2e646e468fab1acb1af2c3bbe7f2b3d4123b1cd9bcebbe826ca39eec5c3a37eb3a2d23235a0541e9634f8be325d63c9c5f110f9cd180163f05645c2227726da32ce9208e05f1586f51c58d58ced53cf4c8beb213592846749c668d7180fcc24eeb514f3fcfd506e233efa2b657edae36339fdc751fcee1f846b64b2a4b236925d6d3c74eeab80deb6daad985a6cc5e5efe1d3001a2af72291a9a3fb7cf358426e0af3e6d874a3cff2f049342829f5f9fe6f38e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-61-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b64f6a3f60905daa4599b8a2b9b962aa59acd66438661c051607066d018d3ffee65b0aec6443f3133f79c7bce7df08cee5895a2194a587edf50f1f4e39627e81851857378bd12eec5e5ee5c1e1dd1dfa3db26702dc1c9e37c0e08d6b2242eeb82f6246f04a172b6dbf673c19b1a0bce7b90a8678f7a23dbb42d6762dbd6d8b180276991ad587507ec1ba56a391b0c0edafd9cf3bca0b866b24f78f9f63e78180f6ac16f295172f05172002a72f0b5e8cf8213ac18afe6bb2d18682415312d312bc0c27f669a9c7c4cdd67b8ece7007e608462427853a9d616a420bcca58de089d15cd9e91b6f9ee80b6deca5b4606e145535671854b7a6ca458e1583dd5d4380b376bc30fce36e17a11f99b20de2ecfbdf5a2bfdcac76eb606b5c9f7ba167289c1454738db971a26f015c403fa552b14aab47ed73abfcda20fff3585a02484bda05636768e3913b9c2659e290cc35274936a449e226ce049bc9904c2d6aa509c5c0d3a29a852b5e4d53d3749cd1342613d789adf118c789399dc4a6354dec710a34c746fb63f42898a2a74cd65cb2ae43e83af4232f8ec25db05c449e2e21c34da14e3b636d01ef3d2a2810405fd4b46fa38c8352db6e3f88bc70b18cfc2baf9bf08ae6983c6def61c6192e24053416d03c45c59aa7d030142cd6de2980f5c42e0e4189667f9f51dbf3d6c5bb96bfd12318606b57e92fda46a11ffcd2760e882b5c341af2d01d500d966fa03670bdff074858d22e0bbadc79e11fd43d8534a38256e4fb69025807befdd70e8b0f58587d90910aeeb03b44b62244d06e87982ef795ed8cdcf1c4441a2cd4a79869ba87aeb539da8cb4a4957aada85b7c28b4136be41b088230fe40776bff026735888478040000",
    ],
    [
      "ETag",
      "Vr8PQUHs++eJ1juN84rocw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92614fc2400c86ff4bfd3a129131cc123f4c9cb0888830228921e4d80a0cb775dcdd3448f8eff626a25113fd726bbba75ddf77b783a7248fc18579b2dc9428b7274bd4f72618a22a53adf85150ae102c402d964c06dbd746583c6f46b23369775f27fecd837fe35d5c30a1a2156602dc1d2c124c6305eee30e729121b7459496593eab320bf4b630c551380cfa1dce338a4dde1ff77ade65cf87bd756c8c8516b38aff47db746fc19ae6435ca0c43c42b34b21698d910e8c4c25b222c59aa25246a8a082ab174b49652124518d2b35a75eab3b0dc76e351dc73e6bd90ca614099d50ceec78c4fb81262dd221bdb04a70189055c88217d5f9cce524ae849830e8878e5dedf7159018918c677f7205afbb12fc173eb08303df39915199eb2375ddbbf37e1bc7967e8ebaf242ff07a1341b7544c2e0d61f85deedc070d383f4cbad463590c43e2a3416d64fedf366cb397d77b54dc669fe8eab65891644822f4737d1e02e44aa70ff062adccdc47a020000",
    ],
    [
      "ETag",
      "Iyz3TpvqSrGXCHzXEKWEKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "57",
      "22",
      "ef17d0fa9536cd4725c4ba92b1a092429a82d034b58ee3148f240eb6c354a1feefbb24145a268154a9b1efbd7befce77cfe881e5311aa188ad1f4b2a365ffef008b51055780db7339aa59ca88b5be7dcfe4a06c1c5cc48eeaf4f4e00c12a96c45991d2b6e4a520548e16f3ce5af0b2c082f336246a9bfdb66e0e4cc31a9aa6d1b70ce0499a2653963f00fb5ea9428ebadd9d7667cdf93aa5b860b24378f67adf7dea770bc1ff50a264f750b20b2ab2fbb1e829948015e3f9c9620e064a49c5926698a560e18d1947df0e537718ce3a6b003f31423121bccc55650b52109e276c5d8a3a2b1a3da3dae6de079abb5377126a2b410917f192c52b0d4b6db92c1e5ada64b6f0c3a3558c155d1d57d7cda7f623985d6aab02c4efb1a472a5ddfe7403573b48e2f9dac2f7dd79a81d9d1e6be7c16c71a57dbfdb8780bd984ac5f2da5c88a39456c65efae7fdff6a15012b506c824bab6762ddee3951125924b107c328e9d128b2236b8807518f380635e28862e0a92a7bcdc239cf63c7b69c7e4f378791dd37a931b47553b7e2d888074e44123a707a491c2543b46da1bf82297ac664c1256b9a886e032f749761b0f027e3d0adcb487099aab3c65c55c4be4f054502e883bab655947150aa5ec4f34337184f42efc66d86604ad7986ce68f3006094e2505341638a38a8a4b1e43d3d0d56cee85decc1f4f8151bfecd50e21d1e8d7f31b21dc14759755fd8fc64130be030e16026fdec5c08769a0ed764fee06a7650da9f1f5a9c9ffd404900eb5bc9dfa0727e3e064a2edef2dfc5a0836a15146d70b37b843cd5540132a684e3e9f0900d7814f177ab75d8085fd0219a9e00c1348642542046d",
      "26916575290ddbd26dc7b4500d16ea7dcce939faaee5558e2a23cd68ae5e2a6ab6ab6e62152ae52b08823040bee79f43f41fed1776fadd040000",
    ],
    [
      "ETag",
      "OemloctJW9G8+c3RJO4fhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d504d4fc24010fd2fe3b50d02a5244d3880344a82a855121343c8763bad85b65377b72221fc77668b211a2f5e7667de47f6bd3dc036af120820ceb38f06d5fe2a43f3648708755318cd574d954670008dc858397d083b9de9b8bf53937bf12565fcba5994e3d188155abe63292038409a63916808de0e508912d9b65ed75b96987d6db7d9e225bc0d23064a4a2cb058cee7e3c93c84a373b124c2e0bf2caba3031b8a234c516125d126a8156d509a992da7455917e86a6a94440dadb82532454d2d1491cb88ebf7dcaedff7bde1c0f7bdded063614152989c2ad62e9f391b1832a28868c7dda0cf02d58e5c336dcf4f867b6d073b0dda683fb9ee85f3ff70de6fdfeafbb1c9dea07e54c4c935dad0d7e70237644bf10f054635e88014fcfb77b939efc713dfc45720da010000",
    ],
    [
      "ETag",
      "DOE//DA3wrBMaxccbXjNmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "8b08000000000002ffedd34b7282300000d0bb64ad4ef908a4bb865fa54c5054846c18c0f0299840a2a3b6d3bbd7e935eabbc3fb0645555129f333ef2903afe05ea870512d3e460b79d7966ef8c575dac043b5ef07d1d7beb72089148744d955bb2dad4ddd100387297175ffd4992e0c92a9916a4963f2a9e8c76e6ed69e9eac858ed4e91297078c1d1eec14b6b3fa81296b6b99dac3747524d9ceb1b10d8f7d762ea6f6e5aee731cffdc6d03d95a5d1f8ae1d423be31d0b065c31085dbc89245fb1a671de76716b1c5648734f916da24bb9af5682601196716d16ee80929897b4d1125bc8e9682f9e9efe2f3003f4367682cabc7b6cd79610cec05ffdfc7c1fe9e33fa285a002fcfc020ee0d89719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-63-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda843cc9438ad628a16ba484ac401a4dd3848cb950b7802936e9a22aff7d17d374ad2ab55f00fb9e73cfb90f9ec903cf233225214f1e2b288fdfee45482e08289ae06d36f74527f1fe1ec2c77d9a2f7bfbe1fdf1e966364304af599266450a2d29aa92819ceebc76528aaaa0a5102d4cd4b2faadaed5b706a3a1650d7aa301f224a4f19ae70fc8be53aa9053d33c6bb71321921468c1659b89ecf5de3cf4cca214f7c09434df4b9aa822cdcf45bfa78251c5453edb7968a092500690519ea285ffcc28bc7c9fbacd69d64e107ce00c2863a2ca556d0b533091c73ca94a9d954c9f89b6f9e68378f6da5ef806136995e5414e33b83022aa68a08e051857ee7663ac9cabadbb99fbabad13788b6b7b336f2fb6ebddc6f18cfdb5edda86a2610a9a6bcc8c4b7d72f080fa1148c573adeed7d7b5f24b83561fc75213505a42130c461d8b76c79d49188723168ffbc330ee40188ec3d190f6c30e9b0c6010854091a745358be6228fe810badd3e0b681786c120ee4e020ab41ff4875144bb93113e2272ba204f2557b0e4b21092371d227b77e5db81efee9cc5dcb7750931ad52b56c8cd505bcf5a8b040047d52d3a98e72814a75bb578e6fbbf385bfbab59b09af21a1ece83de28c639a4a40342db1790aca8d88b061c4996fec2582f5c47e9e83924c7f3f93bae7b58b372d7fa5fb38c0daaed26fe2f9eecaf9a1ed9c11b734ad34e4d07c90022ddf616de8faf40791b8a44d1672b3b3dd5fa4b97221861272f6f53411ac035ffe6be7c5472cae3eca488567dc1d266b115642b3435c97fbc21ee1247b16d1e0527d88e1be9cbb56e7a8334206b97aa9a8597c2cb411abe42b0883387e4777ebf40f4ad6627a78040000",
    ],
    [
      "ETag",
      "mATo0gSxvbqWlnD2W5jywQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614f83400c86ff4bfdca1275ec30247e603a7506a76e2c3131cb7283824ca07877a8cbb2ff6e0fe7346aa25f8eb63c2d7d5f6e0d8f7995800f8b3c7b6a50adf63234b73618a36e0aa3f95153a5111c40233326fbb7cbf3f4eeb5e99d084ab4aabd6571e965c7c74ce8f8014b09fe1ad21c8b44837fbf864a96c86d31154d59cddbcc01b3aa6d71128d87a373ce4b4a6c3e9a8661d00f07b071768d893472def2ff689b6d1c58d2628c292aac62b4bbd48a96189ba195a9655917d8d1d4a81835b470fb2253d4d4521175b8d211ddce81e80ad7eb09e11e7a2e8305c5d2e454313b9df07e60c8c8624c2fac120403aa0d5970da9ecf5cce9356880d87a348b8ed7e5f018531a964fe2757f3ba0f92ffc207b675e03b274b6a2ab3a3cec2ebe0b7716ce9e7a8d3201afc20b461a3764834bc1a4ca2e0eac672b3adf4fecaa0be51c43e6ab4161eecbb473d4fecbfbb7a42d669fe8e6f54830ec4922fc7456ec04f65a171f3062da9f74a7a020000",
    ],
    [
      "ETag",
      "BQjGfXxu5C6odsrp7jlJ7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, MIN(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536d4fe24010fe2bcdde174d10289416488cc769d52658b5148db95c60bb9de26ae9d6ddad1734fcf79bb6a270269a90d0dd795e6666675ec923cf623224115f3c1520573f1e44441a04345de0edbd739a7b37e2d1d3abf1cb8ba5ec8b7373757d7888085eb2145de6291c285148066a389d341752143995421ca0d0816d1d9876d7b69c9e6d5b1dc7429e823419f3ecb154d73a57c3566be3dd5c08b14881e65c359958bedfb79e3bad5c8a07605ab5762d5be8a25a5f9b1ea58251cd4576389d60028502398325e529a6f0c18ca39fbbd24d4e97cd05829f3903ca9828325da685124c64095f14b25225c35752a5b9f54126eed83d0e8db90426643ce3f1dca0ca98cdf2c78671e1f97bf3986a98ef9797f5a7711a5c5e18f31cadefa90235376ecfddc03576243cdf98fabe3b098dbda37de32cb89c5e19bfeeb621985c0c4af3ac4a2da4510a655a6fddf33ebf5949a01a1debe0cc69dbd4ecb7075112392ce9777b51d28628ea474e8f76a3361b5860c51150e4e952bd62d14c641d3b323b49bf6742ecc4b669f68141dced3348584c59db1ed8891375063db26e90bf926b38e12a178ad72d24b78117bab33098fac7a3d0adca486891ea933ab9b288ed3c351689a02fea5a97512ed0a97c0fcf0fdd60741c7a376e3d02635850b69a3ce11024345580682ae91234c80b1163d3c8d5e5c40bbd4b7f344646f5ae571b8422c3dfaf1f847095575dd6d53f1905c1e80e39544abafa2f8679d81659afb7ec6e685a54900a5f9d6afde73a404cace5e3d4d939593b279bacffacf1d720b807b533b99ebac11da9af02484042c6be9f090457816fd779b35b88c5ed421ba5f18c13c85469c224d493c897552935dbe9b42dbb4b2ab0d49f623ddbdcb4bcd428156109997eaba8deadaa8965a850ef200ce200f99e7f86d17fd68c2324db040000",
    ],
    [
      "ETag",
      "h7FpIVokItyLzz4s6MH1yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91",
      "51",
      "6bc2301080ffcbed712db4b55628f850b7b2c94466d5a72112db6b576d9b9aa48e4efcefbbc4b10d1c84e472f98edc979ce150361984b02b8b6387a2bf2b502d7490a0ec2a2569697923112c40c50a22dd7478bfcc83a67f399e86c541749f2c6a16e33111327dc79a417886bcc42a9310be9da1613552d976db1e08517dab77d3f92a7e8a134ad43cd389f97a368b26b3182ed64f49c614fe963c46abf83f7e73b160cf7709e628b049515fdf0abec7544db59964755ba12d792752946060735008deb54c706e53c60e7cdb0d06813f1a0681ef8d7c022b9e3255f286d8f5921a03c515ab12fe416230204098901c73339f28ed190113399e633b1e0dd3e35fc8bd85dc1bc8bf857c0d6dbefb98f40ae5abe0242551fb3857b707ae7de9e542253ab42065f42bcfa5baee2f5ffce99d57f2010000",
    ],
    [
      "ETag",
      "1c5+Sf6nyKqv5gkruzaAnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "72",
      "82",
      "30",
      "0000d0bb642d0ea084a43b11432d28088aca26133015cb2ff229d04eef5ea7d7a8ef0eef1bb024e14d43db2ae32578012353f13499da0219a4bf46d0405d506a5f7de64bd606a7ca10bc3a45a4b3b0704f176a9a2a9c61ab85d53dd38cc0ae040ceb748054511cfa76d2e747334242138aeda13db95cf5f223601d5defcb6489e1f916c7bb773c4f8fd5a22b88d94ad1b669a5389ff939da12a9b5ecd8143dd3ce06ead515faa444dea4ca2a2bdcd292f339ca59c2339f4401dc25073fbfb3a10a43a81fb428abd6f2c2736482bc510a17ee49f59769989ad3a7a7ff0b4c001fc4ade60dbd3db6cf348c27e0af3e6d47c11fff0dce6a5e839f5fc96e309d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-65-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2bc8fbb8e64d208d14ad514a57a684ac405a4dd3848cb950b780293699aa2aff7d17d374ad2ab59fb07dcfb9e7dc074fe49e9709999398670f0dd48f5fee444c4e08289ae1ebd7f447be5eae559088ebbbec7e246e86aabe5a2c10c15b96a44595434f8aa66620e7bba09fd5a2a9682d440f13f5ac696f644d2cd39e5a9639b64de449c8d3352fef917dab5425e783c151bb9f0991e5402b2efb4c142fef83fd7850d5e20e989283b792035491838f45bfe58251c545b9d80568a091504750509ea385ffcc243e7b9bbacf69d1cf10bce70c2863a229556b0b533051a63c6b6a9d95cc9f88b6f9ea400267edac428389bc29caa8a4059c18095534528f151817fe7663b8dec5d6df2c4377eb45c1ead2d92cfbabed7ab7f102e3e6d2f11d43d13807cd3516c699be797841fd04a4e2a5560fdbe756f9b941eefbb1b4049496d005237b68d1d16c781aa7b1cdd2d9641aa74388e3596c4fe9241eb25313cc24068a3c2daa59b4c49a2912ad142248523332adf1289a4dc7764469629dcee8786cc716399c90bf355770ce652524ef3a446e7c3774a2d0df79ab65e8e81252dae4eabc33d616f0daa3c20211f4414d8736ca052ab5ed76bdd0f197abd0bd76ba09af21a3ec3178c019a7349780685a63f314d41b9160c388b7dc38e708d613fb790c4a32fffd44da9eb72e5eb5fc851ee2005bbb4a7f4910faaef75ddb3922ae69de68c8be3b900a2ddf626de8faf00791b8a45d1672b573fc5fa47bf221851a4af6f93411ac039ffe6bc7c5472cae3eca488577dc1d265b115643b7435c97fbccb6c7a3c96c4234b856ef62d39179ec5a9ba3cd080594eab9a26ef1b1d04eac912f200ce2f83dddadc33fc79468a778040000",
    ],
    [
      "ETag",
      "+fJlLALtSdoVjgk1oW0trQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92514fc2400cc7bf4b7d1d09c81864090f0341898008e3c91072dc0a0cb675dedd3484f0dded4d44a326fa726bbb5fbbfeffbb23ece32c021f56f1e6b94075b8daa079b4c114759118cd8f9c328de0001ab161b25e0be2969cf5bbbdfb7e9abaa29934f6d5a0dd6642cb2da602fc23ac634c220dfed311329122b7494a8a345b969903e690dbe22c9c0ec6b79ca714d97c3c1f0e83ceb00727e7d21809239625ff8fb6c5c9811dada6b846859944bb4bae6887d20cac4c2dd23cc18aa64249d450c2e58b8da222178aa8c2958ad7a8d4bcbae7361b9ee75e375d061392c2c494313b9ff17e60c888644aafac123c065419b2e07579be70398e4a21361c8c43cf2df7fb0a2894a4a2e59f5cceeb6e05ff850fececc0774ea45464e642f5870fc16fe3d8d2cf513741d8fb4168c3465d907030eacdc26034b1dce22cbd7330a8278ad8478dd6c25ad56d359a5ef5ddd52e59a7f93bbe51053a20055f8ebbd880bf1689c6d31b373be4eb7a020000",
    ],
    [
      "ETag",
      "31Ai8cSFCEKFmm4a7l5k0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, MAX(`date`) as `date` FROM `purchases` WHERE  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010fd2a91f70f48a53fd3a4ad84580719cb545296a6b06a9a5ac77182218983ed1455a8df7d1787423b249022c5e77befdeddf9ee193db03c422314b2e4b1a462f3e59e87a881a8c209dc2e82deba9de1de5c664ff94f9f75986bdbe3d35340b08a257156a4f444f252102a47f3593311bc2cb0e0fc04029d58d649c7ea59a6ddb72cb36b9bc093348d272c7f00f69d52851cb55a3bed66c27992525c30d9243c7bbd6fadbbad42f07b4a946c1d4ab64045b63e163d4b39c18af1fc743e83044a49c5926698a590c21b330abf1e866e329c351300af19a198105ee6aa4a0b42109ec72c29858e8a46cf48a7b977403367e29c07c64a50c245b464d1cac0d2582e8b87867135fe7db48ab0a2abe3eab23e1adffde995b12a40fa0e4b2a57c6ed0fc7778c8310ae67cc3dcf9905c6d1d9b171e94fe7d7c6b7c53e04928ba8542cd7a905384c6995d64bf7dcf76f5611b002c5dab9b4db16ee0cdac3300e6d120f7afd306ed3301c84761ff7c236199ad48c428a81a7aae89a85739e47961512bb1f9af6a03b20fd6838ecd018d0f1d0eac011a2b523ab1d53b46da027c114bd60b2e092d52d44b7be1b38cbc09f7be7e3c0d165c4b84cd5459d5c55c47e9e0a8a04d007756d2b2fe3a054bd87eb058e3f3e0fdc1ba71e81094d30d9cc1e6108629c4a0a682c70461515573c82a6a1ebe9cc0ddca9379e0043bfebf50e21d1e8cff31b21d814bacb4affd1d8f7c70be06021f0e63f1fe4619968bbdd93bbc169a9211aafad3afeba76a00ed4f266750f2cf3c0b2d0f6ef16be06823da895d1afb9e32f507de5d3980a9a93cf6702c0daf1e93aef760bb0b05d202315d8308144562244d07a1259a64ba9d976b7dbb5874883857ae7eb0d07bb965731aa8834a3b97aa9a8de2dddc4ca55ca57103861803cd7bb04ef3f8b6c6b13db040000",
    ],
    [
      "ETag",
      "YT3v0ma3UsmwnJRi1iI77A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff6d91df4fc2301080ff97f3758bdb18232ee101744108419d101f0c21653bc6d88fceb6c32c84ffdd6b316a822fedddf5bbf4bef604455ea710c236cf3e5a14dd4d86ea450731cab65492b686d712c102542c237250bc95b349fe342bdcdb8ef5fbd1f638d967c3211132d963c5203cc12ec7329510be9fa0661552db66d31484a8aed1d974b18c26514c858aa7bab058cde7a3f13c82b3f5d3923285bf2d0fa365f41fbf3e5b70e0db187728b04e505fdf087ec0444db599645553a22d792b12946060739009de364c706e53c50e02db0d7a813fe80781ef0d7c024b9e3095f39ad8d52b0d068a2b56c6fc93c4a04780302139eecc7aa4b267044ce4788eed78b67b6766fc0bb95790e75c41fe35e46a68fd3dc7b853289f05272989dac7b9b8dd73ed4b2f172ad1a20509a35f79ccd5253f7f0192dcb5dcf2010000",
    ],
    [
      "ETag",
      "7kWlJGiOJk1/ya55EbvGhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00",
      "0002ffedd34d7282300040e1bb642d4ce5a74a77808811a110a0809b0c608a412d4882809ddebd4eaf51bf0bbcd5fb06795912c6306f4ee40bbc81299734b1149d7669ac879a3ad6e12a5c22ba614caf9d0c99fd6ad23de2eec3c04f0675882ba41c5eedd5e2bcde3451a8732f69ee71521f536831365c1b661aa966c036acf9095e4b4c7191d9b532c978cea96b769a0bddedd20e8ab168559cf9bbedbbb5b73b217572bc90d6659422bfe09f7031c476150a58a26753eeadb157c6614b1fbdf02385f2ad42c740aa9a5d7f17fc8deac28be761a9e7289f8e06d25ee6f96527fb4aa4884f4fff17980132b6b4230cd3c7edb2aa6933f0b73ee6534b1eff1b24ef48077e7e01b162abb719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-67-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d4fdb3014fd2b91f738daa66dda3495aa51953022d1744b53609aa6c8766f82218d43ecc010ea7fdf8d431908099e62fb9e73cfb91f7922b7a2d892296122bbaba17afc7223193922a06986affedff924701fecc9d5201a7837eccafe6afbf3d90c11a26129ba2b73e82859571cd474b3ee6695ac4b5a49d9c1449db1dbe98f8763c71d8dc7cec07590a7204fcf45718bec6bad4b35edf50edadd4cca2c075a0ad5e572f7f2debb1ff4ca4ade00d7aaf756b2872aaaf7b1e8b75c72aa852c669b351aa8155409eca8c8d1c27fe6961dbf4ddd1574d7cd107c2f3850ce655de8c616a6e0b248455657262b993e1163f3d581acfd737f115b5ce6f5ae480aba83236b4b354df46309d669b45a5a4178ba8a96f3385885c97a71e62fe7ddc5ea7cb30cd7d6e5991ff996a62c07c3b566d6b1b9857841fd2d282d0aa31e37cf8df2738382f763690828ada00d26ae3da6fd89edb194b93c9d0c472cb581b109734774c86cee39e06c1950e41951c3a2852c465ecafaa9038933f1bcc4b15d9eb0e1c04e5c271d7a7d8f3a3071c9fe883c5442c38950a554a2ed10b98c82d84fe268132ee6b16f4a48699deb93d65853c06b8f1a0b44d00735ed9ba890a8d4b43b08633f9a2fe2e0c26f277c0e19e58feb3b9c714a730588a615364f43b5945b6c1809e74bff04c166623f0e4145a6bf9f48d3f3c6c5ab96bfd0631c6063579b2f59c751107e37760e880b9ad70672df1e488996afb13674bdff83485cd2360bf9b9f1a35fa47d8a20850a0afef934116c029ffe6b87c5472cae3eca288d77dc1dae1a115e41bb43c294fbcc7607437bd827065ce977b1fec83974adc9d164841d14fab9a276f1b1d056ac562f200ce2f843d3adfd3f848a7c8f78040000",
    ],
    [
      "ETag",
      "ExA8I7w08X2R29jbX0+0EA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92514fc2400cc7bf4b7d1d09e01866890f0341898008233e18428ead8cc1b68ebb9b8a84ef6e6f221a35d1975bdbfddaf5ffdfed61136721b8b088a36d81727716a1be37c118559168c58f9c328560016a1131d9c6d7977ab796daadcdc3aeb3dd46edede236babc6442052b4c05b87b58c698840adcc73d6422456e0b2829d26c5e6616e85d6e8a137fdc1b5e739e5268f2e1b4dff75afd0e1cac536328b49897fc3fda66070bd6b418e3122566019a5d72496b0c74cfc85422cd13ac282a64800a4ab87c11492a7221892a5ca938cd4acd3977ec66c371ec7ad36630a140e8983266a713de0f3469918ce9995582c3802c4316bc2ccf272ec76129c484bda1efd8e57e5f018901c970fe2797f3ba2bc17fe1033b3af09d132915993e51ddfe9df7db38b6f473d495e7777e104ab35127c4ef0d3a13df1b8c0c373b4a6fed34aa9124f651a1b1b056b52f1a4da7faee6a9b8cd3fc1d57cb022d08045f8e9b5883bb1489c2c31bf6914aa37a020000",
    ],
    [
      "ETag",
      "Cezx2F1m4BkWyEqqgCqbKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2a",
      "91f70f68fd11da34492b21d6956ceb56524853109ba6d671dc6048e2603ba00af5bbef9c50a01b03295272be77efbdb3cf7940372c8fd100452cb92da9587fb8e6116a20aa7002abc376967f1c25f247797e7532f17ef6d6f7c3ef6787878060ba4ae2ac486953f252102a07f3592b11bc2cb0e0bc09444ddb6d1ed85ddb727ab66d751c0bea244d571396df40f59552851cb4db5bed56c27992525c30d9223c7b5a6fdf75da85e0d79428d9de956c838a6cbf2d7a94728215e3f9e17c06064a49c5826698a560e1b9328e3eed52b718ce5a0980ef18a198105ee64adb020ac2f3154b4a51b1a2c103aa6cbef840336fe28d42632928e1225eb0786960692c16c54dc3184de77eb8b7c499665ceeebc43630be04d313635980812b2ca95c1a17dfbcc0338ca56638348e8ca17f6cecd08e7d63eefbde2c34f68ef68dafc1747e6a7cbe7c0901c331958ae595dd104729d5561f7774fcef39ea02ac40bf4e2e1cd3c607aed98f569143566eb717ad4c1a456ee4f470373249dfa2561c510c754ab3575538e739e9bab68bfb666c9b7ddbb46837ea7768cf8e5c629b91e510a743e841ec12b469a07bc1143d66b2e092d5db8a2e8271e82dc260ee8f86a157b5b1c265aa8e6b73ba89973e153409a037fadae82ce3a0a4cf68ec875e301c85e373af1e8b094d3059cf6e613056389514d058e08c2a2a4e780c9b864ea7b371389efac3095454677dba454834f8f5f05c10ae8b6a9755f5d65ab655e96f01e7382d2bc45dfd810e7a68b369fc9f621804c34b90c542e0f5ebf4aff257f82aaa2d3ee921adb68d3a3b91b513d968f37b034f03c1f5aa95d1d9dc0b2e51bd14d015153427ef8f1580ab",
      "c4bb7f89ed95052c5c5a90910a62186222b50811b41e669655add4d54ea7ebd6ff188585fa3b67997d677b6a9a4333d28ce6eab1a3faca569ba853a57c02411266d01ffb5f21fb07eb5b532f32050000",
    ],
    [
      "ETag",
      "A/mn+CgsKuVhMLEZ5ywAJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90514fc2301485ffcbf5d12d11c5614878005d9064121d62480c2165bbccc1b63bdb5b11c9febbb783f8ec4b7b7bfa9df49c1e61975729f4619d679f16f5e122437e71438cc6166c64aba932081e20ab4cc8a770fcb0cd66431d9ab7456a17973fd177bc1f0c8430c907960afa47d8e458a406faef47a85489625badea9d207ca8dd69327d0dc7612c4249a913a6f3281a8ea2101aefcfa24ab215ffcbb46c3cd8d23ac60d6aac1274196a4d5b4c78e2ea1955d605fa86ac4ed0400bb71799265b2b4de48be207777e27b809babddb20e85ef7ba02169428cea912763e9374c0c4aa88692feda023806e4729ba69d7af56762dced3b2599e4da303a379d624090cbac7af4e41eec9856309cddaa20789927f7cccf9746e7e01cd6ed42ba4010000",
    ],
    [
      "ETag",
      "MEGDjgSArEsVXduX+zLxRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00d0bb64ad8e18a0d01ddfa92804b4e5b76124060da040c008767af73abd467d7778dfe08031e9fb6c682a7205ef603aacd4055ee44b2de6cbc727fa4ac45c2452ca7d0b11bd6a4a645179bc9fa6e1ca39731d1e7acd4e5e9fa29626b753e921d6a5715c8dda3cd222cf3790c9ce72ac8994c110a6f2c7dc5d29ee59c85084dd294e4d5dad45c8056c144ee3c0bdcbb1ac5d02d4b91ce5a23465426aab5bbcf115c3088423ad4393946a771ef5e8b26f606f98cb60ceec6065973b4541c51bda5a4547070a8fc14486843875dbd9b752de18d2fabea99da4aa2c0185e2e2e5e5df013340c69632d267f4b91d4aaa3a037ff5b3616ac9f3bf4e0e8c30f0f30ba234a6e819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-69-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc8fbda3c2184448ad688d23553425642da4dd3848cb9507704536cda6555fefb2ea6e95a556abf00f63de79e731f3c92dfbc48c894c43cbbaba1da7fba15313921a06886b797577fdc0713cef7d7ded787fdc5f7bfeb3d75e7b3192278c3927457e6d091a2ae18c8e976d3cd2a5197b412a283893af6a433b04ddb1a8f6cdb1a8e2de449c8d3252f7e23fb46a9524e7bbda376371322cb81965c7699d83ddff7ee87bdb212b7c094ecbd96eca18aecbd2ffa39178c2a2e8ad97683066a0955043bca73b4f09f99c4a7af537739dd753304df730694315117aab185299828529ed595ce4aa68f44db7cf14136ded273438389bcde1551417770622454d148ed4b30ce83f5ca58f8e7eb60350f176b3fdab817de6ade75d7cbedcadf18d7175ee0198ac63968ae31334ef5c9c703ea2720152fb47ad85c37ca4f0d5abc1d4b434069096d301af76d3a70fa93388dc72c75cc519cf6218e9d783ca266dc67130bac24068a3c2daa59b4108539a0b64d133b72f01959e3fe20a2c9c08acc49421d6699ccb1811c4ec843c5159c71590ac9db0e91eb60117a51186c7d771e7aba8494d6b93a6b8d3505bcf4a8b04004bd53d3a18972814a4dbb177ee80573375c5c79ed84979051b6dfdce18c539a4b4034adb0790aaa9548b061c49fafbc3304eb897d3b062599fe7c244dcf1b172f5afe4c0f71808d5da5df6413060bff8bb673445cd1bcd690fbf6839468f9066b43d7875f88c4256db390cbad17fc20ed5500295450b08fa789601df8f05f3b2e3e6271f551462a3ce3ee30d988b00ada1de2badc27f6786839a321d1e04abd894d46d6b16b4d8e2623eca0504f15b58b8f85b662b57c066110c7efeb6e1dfe01567e84b678040000",
    ],
    [
      "ETag",
      "QVxCw3eFyWEJwyHXzOyaCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65",
      "bc",
      "85d82a6e2b8917ad5625a9fdc52bd3345b18280a0cee2e9aa6e9bb3b8bb51a35d19b6566f8669873d82d3c65650c3eacb2f4b946b5394ad14c6d30435de746f3a3a25223388046a64cb6022127dde2f9fa7895486c99fee6663c9e5e5c30a1a3351612fc2d2419e6b106ff610ba52c90db22caeba25c3699036653d9e23c9c05a31bce0b8a6d3eba1f0e7bfde10076cea13196462e1bfe1f6d8b9d038fb49a61820acb08ed2e95a2478c4c60656a595439ba9a6a15a186066e5ea48aea4a2a22972bae3877dbe254789d3321bc938ec7604e91341995ccdecf793f3064643ea35756098201d5842c3869ce172e677123c486c128145eb3df574061442a5efec955bcee5af25ff8c0f60e7ce7644175690ed4f570dcfb6d1c5bfa39eaaa170e7e10dab05107240cee06f3b07737b1dc622fbdbf31a8278ad8478dd6c276cbeb9e7544ebddd54bb24ef3777ca36a7420927c396e33037e22738dbb3708bfeb9c7a020000",
    ],
    [
      "ETag",
      "0I6aP8mqF/bfae0tByGOOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "91",
      "f705a4be374dda4a88759041a692429a82d034b58ee314431a07db2962a8ff7d6787021d1b4895eaf33d77cf732fce13ba637982862866cbfb928ac72fb73c463544155ec2ed5db2f66e4f6717bffba7e307767ffc437937270f070780603a4ae25591d1bae4a520540e67d3c652f0b2c082f33a24aabbad7adbe93ab6db731cbbe3da102769968e597e07d1374a1572d86c6eb91b4bce9719c505930dc2572ff7cd75a759087e4b8992cd5dca26b0c8e6c7a487192758319e1fcca620a09454cce90ab30c24bc4626f1d7ddd40d86578d2580d78c504c082f73a565410ac2f3942d4b61b2a2e1133232df1cd0d41b7b4791b510947091cc59b2b0b0b4e6f3e2ae661d4d6641b4b7c02b9d71b1af1d5bc3fa1e4eceac4501026eb0a472615d9d7aa167bd5e2dac03ebd01a05c7d64e723fb06641e04d236bef70df3a0927b373ebdbf55b08c84ea8542c37a2231c67540b7eeeabff7e9a3a002ba0ac9c73b7e5e076bf3588d3d82569bfdb8bd3168de37eecf670376e91814ded24a618e294ce6ea270ce7337ed0ddac46db5d381d32724c69892fea01b0f12aa4fad1eb4d776b18d3635f42098a2c74c165cb2aab9e82af4236f1e85b3e0681479a68c1497993aaec4e922deea545024803ea86ba3bd8c03939e941f445e383a8afc4baf5a8e315d62f238bd87f548712629a0b1c02baaa838e309340d9d4fa67ee44f82d11822ccc4cfb70889863f9f5e03a2c7c27459997f348d423f383102b6884b9c9506b2ae0e68548056b4d9d4fe9f661486a36ba0c642e0c7bf7c508e63ebf07f5018bcb12a995bca36d26c5babb363d93b968336bf36f0ab2178681533ba98",
      "79e135aaae429a524173f2f96a01d8383efd5e6c1f2f60e1f9028d5460c32213a94988a0d542b39529a58a763b3dd77191010bf5ced7ef77b693d3397446baa2b97aaea87abca689da55ca171038610f0333c4cd1fc51a82423c050000",
    ],
    [
      "ETag",
      "kdvEjHUQz8HLwiqDJtEhGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401085ffcb786d2385520c090731a88d0dc12a2743c8528652683b75770a3684ffee6c31c4c48b97dd9979df64dfdb13ecb3720d435865e9678dbab949915f6d11a3a973367255541a040790552aa4379e07a1da8751f3d26c1f57fddb59fa75771c8d8430c9160b05c3136c32ccd706861f27285581b2b65c567b41b8a96c174edf274f93580605aded603a8fa2fb713481b3735d5105d525ff6b6971766047ab1837a8b14cd07aa834ed30e1d0c633aaa872740dd53a41032ddc0aa9a6ba529ac895893be8b85ed00bfc413f08fceec01730a7447146a5b0f33771074cacf2988e920e7a02e8b694a09bf63cc8b8dba638b480b5f65bf3ae5af78fe65f35cf6a8b9fc7c60da3996912e706ade9ce25c003d9502c6159d7e840a2e4ff9f33bef4e76f55e39d8cdc010000",
    ],
    [
      "ETag",
      "1BU6IakILyKyhFb5/Pgx8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-71-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b91f795367de4d156aa4655c28846d391a630344d91e3dc04431a87d86143a8ff7d370e652024f814dbf79c7bce7de489dcf132253392f0fcbe81faf1cbad48c8110145737cadbeffbd747e9a83c82fcad3a2bef0ade9f56a319f2382b72c497755013d299a9a819c6d37fdbc164d456b217a98a8e70e7b4367ec58aeed38d6c8b59027a1c8ce797987ec1ba52a3933cd83763f17222f80565cf699d8bdbc9b0f23b3aac52d3025cdb79226aa48f363d1af8560547151ceb71b34d048a863d8515ea085ffcc34397e9bbacfe9ae9f23f88133a08c89a654ad2d4cc14499f1bca97556327b22dae6ab03d978e7de323298289a5d1997740747464a158dd56305c669b85e197e70ba0e578bc85f07f16679e6ad16fde5fa7cbb0a36c6d599177a86a249019a6bcc8d637d0bf082fa2948c54bad1eb5cfadf27383fcf7636909282da10bc6eec0a1c3c9609a6489cbb2c9d84eb20124c924716d3a4e066c6a8195264091a745358b96a27406b66b8d121a673099c4d6d4b1634a2d882d279d4eedb165b33421fb23f2a7e60a4eb8ac84e45d87c855e8475e1c85db60b9883c5d42469b429d74c6da025e7b545820823ea869df46b940a5b6dd7e1079e16219f9975e37e173c8297bdcdce38c335a484034adb1790aea9548b1612458acbc1304eb89fd38042599fd7a226dcf5b17af5afe428f7080ad5da5bf6413857ef04ddb39202e69d168c8437720155abec1dad0f5fe37227149bb2ce462eb85d7a47b0a21831a4af6f93411ac039ffe6b87c5472cae3eca488577dc1d265b115643b7435c97fbcc76478e3d9c100daed5bb9833760f5d6b73b4196107a57aaea85b7c2cb4136be40b088338fe40776bff0f1e17884d78040000",
    ],
    [
      "ETag",
      "pKxV6X/0TIlnFlrQI49YMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92dd4ec2401085df65bc2d096029da848b8aa84da0fcb45c1943d676c042dba9bb5b0d10deddd98a68d4446fb633d36fa6734e770f9bb448c085c774f55ca1dc9ead504f4d304355655af1a3a4422158805aac981ccb7eb1ddf8d9a5bf6b8749d00c6e77184e7b3d2654fc84b900770fcb14b344817bbf8742e4c86d3165555e2ceacc02bd2d4d318c667e70cb794e89c983f970e85d0d0770b04e8d89d06251f3ff687b3858b0a6c7192e516211a3d9a594b4c658fb46a612799961435125635450c3f58b95a4aa1492a8c19546b7d56839e78edded388eddeeda0c66140b9d52c1ec3ce4fd409316d98c5e5925380cc83a64c1cbfa7ce1729ad4424ce8079163d7fb7d0524c62493c59f5cc9eb3e09fe0b1fd8d181ef9cc8a92af489ba198ebddfc6b1a59fa3aebd68f083509a8d3a21913f1a8491379a18eee128fd6aab514d24b18f0a8d85ada67dd1e93acd7757fb649ce6efb85a5668412cf872dca51adca5c8141ede00e77476697a020000",
    ],
    [
      "ETag",
      "OrCnykIl9Iz2SdN0NGzeSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8554fd4fdb3010fd5722ef17904a3fd27cb4952a564a60dd4a0a690a42d3d43a8e5b0c491c6ca75385fabfefe250a06303295272bef7eebdb3cf79420f2c8b510f456cf55850b1f972cf23544354e115ac9efd587f53d757be1b04e4ec24cdc7e1ddf76cd0ef0382952c89d33ca14792178250d99b4deb2bc18b1c0bce8fa0d0916b1eb59cb663b9b6e358a66b014fd2643966d903b0ef94ca65afd1d869d7579caf128a7326eb84a72feb8db5d9c805bfa744c9c6be64035464e363d1e38413ac18cffab32918282415739a6296808557661c7ddd2f5d6738adaf00bc668462427891a9d21694203c5bb255217455d47b42dae69b0f34f5c6de30341682122ee2398b170696c67c9e3fd48ce164e687070b9c961517876562171867c1e4c258e460e00e4b2a17c6cd372ff08cd7a585d1378e8d817f6aec151ff9c6ccf7bd69681c1c1f1ae7c16476699cdcbe8580ed984ac5326d3ac451424bc3cffb3a7a7f9a25012b90ac9273b7e9e056a7d98d96914b969db61d2d9b348a3a916be376d4245d8b5a714431f054595db370c633d7b5edd86975edc8a2368e9b8ed3b2a9139b5d6ab55c27b61db3dd249d8e89b635f45b30454f99ccb964d5e6a29b60147af33098f9c341e8e93696b848d46965ae6ce2ad4f054d02e883beb6659671502a4f6ae4875e301886a36baf1a8e315d61b2993ec2782c712229a0b1c02955545cf018360d5d4ea6a37034f1076360e813bfdc2124eafd7c7a25849b5cefb2d26f340d83917fae0dec10d7382934645d7d209c8357b4ddd6fe5f661004835b90c642e0cd5f3968c7b14afa3f24345e4795cd9d640b956abbc8dc8bacbdc841db5f5b786a082e5aa58cae665e708baaa5802ea9a019f97cb400ac139ffe2f769717b0707d41462a886190892c4588a0d540b354b752b15dd335bb4da4c142bdcbb5bbceeee4ca1a65459ad24c3d77545d5ebd8965aa902f2048c21cfafa10b77f006061708a3c050000",
    ],
    [
      "ETag",
      "FKvHtVQN7RRcFBmpLThJnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c5",
      "bf",
      "cb",
      "f4",
      "0a492b1413130fb5c13f092115eba931665d468ac20edd1d6a88e1bb77b0a6e79e76df9bdfccbed92b9c4b93c3040e65f1d5a2ed1e0ae4f570c9d0b5153b391a320ec10364550819d0f725d0b6d6e996e60b33dfe8c22cd7d3a9104e7f62ad607285638955ee60f27105a36a94b6fdbe390bc25d33a855fa1e2fe24c8c9af2c148b749f2324b62e8bdbf1655536bf85f4dbbde83131d323ca245a371c8d0583aa1e6d5b09e537553a1efa8b51a1ddce05ba1b0d436ca12f9e2f8e391ff140551387e8ea270340e05ac482b2ec908bbdd483a606255657491ede011ee7ad631ba374b32dc617eafc8c4571ade65c9c3b6450fb4922f5a96fcabfb1f13d22c1b7f010000",
    ],
    [
      "ETag",
      "3ovw3crmcNUoFGnFScgnHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "72",
      "82",
      "300000d0bb646d1d946fba841201116146d466c3f08985048521fc42a777afd36bd47787f70dd23c279c277dc3c803bc03916ee13a5fef5bc3441345c43d3514079bdaac25a5bb271966689f69d0bc58a2c6eacef5ef7d5018372e7d1e8571624a64876a880f475a314743d2dbd05e200ec5e146932a18cb29cbcf5b1eb1b1f047ca7696d52d7888c2d9c7b103bfe67690fd6a734f19533f7c270b0c186b577b62815c0b5a205644aca6ae879a9b52dac6191a936823cf56a6c58b071d2e9b6b5784ca3183c52c6d47ac87b86c787f7e98f52e7aa43a62eb9797ff0bac0099dbaa233ca99edb6515c215f8ab9ff4a225cfff26493bd2819f5ffc4ff82219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-73-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b4fdb3014fd2b91f7953e93b6a15235aa368c4a6d0a490adaa629b29d9b6048e3103b4c0cf5bfefc6a10c84c43ec5f63de79e731f7926f7a248c89430913dd4503d7db9938c9c10d034c3d764fb6777a9f3eaf4c7f95538dfdab51bdc2eb3d90c11a26129ba2f73e82859571cd4741776b34ad625ada4ec60a2cec4ee0cc6f6d8998cc66367387190a7204fd7a2b847f6add6a59af67a47ed6e266596032d85ea72b97f7def3d0e7b6525ef806bd57b2fd94315d5fb5cf46b2e39d54216b35d88066a05550c7b2a72b4f08f99b0b3f7a9bb82eebb19821f0507cab9ac0bddd8c2145c16a9c8eaca6425d367626cbe3990d05b7b8bc8e232aff7455cd03d9c5809d534d64f2558e7c17663adfcf36db09947abad1f878b0b6f33ef2eb6ebddc60fad9b0b2ff02c4d590e866bcdac3373f3f182fa09282d0aa31e35cf8df24b83561fc7d210505a411b8c27fd311db8fd5396b2094f5d7bc4d23e30e6b2c988daaccf4f1d701206147946d4b068218b11633048691a0f1deec40e1b0e63175237a6d4b61d3aec434a29399c90df95d0b014aa944ab41d2237c12af2e228d8f98b79e49912525ae77ad91a6b0a78eb51638108faa4a643131512959a76affcc80be68b6875edb5135e4346f953f880334e69ae00d1b4c2e669a83632c186117fbef196083613bb3c061599fe7c264dcf1b176f5afe4a8f70808d5d6dbe248c8295ffcdd83922ae695e1bc8637b20255abec5dad0f5e117227149db2ce46ae705df49fb14400a1514fcffd344b009fcf75f3b2e3e6271f5514669bce3ee70d588f00ada1d12a6dc17f664e8f647e64fd5b4d21f628351ffd8b526479311f650e8978adac5c7425bb15abd823088e3f74db70e7f012cfe2cb178040000",
    ],
    [
      "ETag",
      "dOzUPtlr9ZFQSAO3u8RhDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92614f83400c86ff4bfd284b3665cc90ec032aba253895b16834cb7242c750a078776870d97fb7873a8d9ae897a32d4f4bdf975bc3435626e0c25d963ed6289b9d14f5a509425475ae153f2a2a158205a845ca64e3f9fef9f4aae98d82aceaeedebc5c7b972a1d0e9950f10a0b01ee1a9619e68902f7760da52890db62caeba25cb49905baa94c711a85e3c929e70525269fcc82c03b0c7cd858dbc64468b168f97fb4cd3716dcd35d884b9458c66876a924dd63acc746a61245956347512d6354d0c2ed8b54525d0949d4e14a67b0dfe939fb8e3de83b8ebd37b019cc29163aa392d9d994f7034d5ae4213db34a7018906dc88297edf9c4e52c698598703c891cbbddef2b203126992cfee42a5e7725f82f7c60ef0e7ce7444175a9b7d44970eefd368e2dfd1c75ec45fe0f4269366a8b44e3337f1a796717869bbf4b3f6c34aa0b49eca3426361af6b1ff4074ef7cdd523324ef3775c2d6bb420167c39469906772972859b574292f0157a020000",
    ],
    [
      "ETag",
      "yAEEOSWy1HLip0+ZzXAQsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54fd6f9b3010fd572cef974dca07210492485597b5b48b94928e904dd53425c618e685606a9b4e5995ff7d6768da661fad8404e77bf7de3bfbcc3ddef022c1631cf3ecb66272f7e68788710b334d3258fd3edb7c62136a31328f2eec4ddfbd8aab5fd9c90920b8a952645be6acad44252953e3e5a293495195440ad106a2b6e7b47b6edf75bc81eb3ab6e7409d62793ae3c5c6b06b5daa71b77bd0ee644264392325571d2ab68febdd3bbb5b4af18351adbac7925d5051dd97454f734189e6a238592ec040a5985cb12de1395878aa4ce2f7c7d41d4eb69d0cc0779c3242a9a80a6d6c01051545cab34ad6ac787c8f6b9bcf3ef0c29ff967115a4b46854c563c5923a2d06a556e5ae86cbe0ca2b76bb2358ceb77267108d04538bf42eb120c7c278aa935faf2d10f7d84d609d16c8d4ed0299a04e7e888781aa06510f88b08bd3d7d872ec3f9f21a7db8790e01cb09539a17b5e188c43933661ff674faf7499a02a2c141935c79964b7a436b14a7b147d3617f10a7168be361ec0d483fb6e8c8614e12330275dab0d755a41005f57a29a523774462cf1d5abd5ed2072227715d6fe85903d7f292c48e470cef5bf8a7e49a9d73550ac59b8dc55fc269e4afa270199c4d22bf6e232555aecf1b73a689e73e353409a017fada9b2c17a0644e691a447e38398ba69ffd6630662c2374b7b885d14849ae18a089245ba699bc12096c1abe9e2fa6d1741e4c6650519ff6f501a1f0f8ebfd5341b42beb5dd6f51b9f9b06f6cf083f93bcaa0177cd07b62ddb6a5b76bb37c0fb7debff4c93309cdc803a9192ecfec84147ae63caffa153e3eba8717ad0ed61a3f6e8e228728e2217efbfede16961b8678d32feb4f4c31bdc2c852c659215f4f5e902709d78f57771b8bb8085db0b324a430cb34c9511a1923533cdb7752b4db5670fbdd108d760a9ffca8d6cfb707886c330b22d2bf44347cdddad37d1a42af50882248c62300d2e21fb1b3c052b663b050000",
    ],
    [
      "ETag",
      "hLkQeAc0eaOTF2k36Mbuzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d90516bc2301485ffcbdd6b0bba7515041fea1015445c37d94044d27adbb5b6bd5d723311e97fdf4d953def25b939f90e3927573815cd11c69014f9b7457d79c8915fdd10a3b1151bd95a6a0c8207c82a171207e798a33cb2589ee66ab3fd48169f6134990861d22fac158caf9015581d0d8c775768548d623b1cda93207c69dd69b97e9fcd67b108351d9db0deae56d1743583cefbb3a89a6cc3ff32ed3b0f4a4a62cc506393a2cbd06a2a31e5a5ab6754dd56e81bb23a45033ddc5fe49a6cab34912f8a3f0afc61f81406a3e7300c1e47818015a58a0b6a84ddbe493a606255c5749676301440f7a314cdfaf5a7975d8bfbb4eff677d3f4c268369a248141f7f8e016e4855c3896d0ac2d7a902af9c745c1b773f70ba35fcabfa4010000",
    ],
    [
      "ETag",
      "e0wRtAgAuejkGaPUWbHX6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "08000000000002ffedd34b7282300000d0bb642d4e4554d25d298d6154a44447ca26c327c4df400209bf4eef5ea7d7a8ef0eef1b2459c69a86aaeac64af00a86c484d36cba11b683baf3b1353e66ea7de78d4eadb7add623dd46b4be0aeb8b068ee4322f2c928f7eee06959b26bb76bd5ea2988a9ec6e8def46bbb0bc939a361b41a02b5f125bc9281472779a88d25419e557283e0612c67da7cf36ff78abc1ce75e5cbaa468b00ef3d3010f7eb7c5e691d805eee4a2c25697869b3691469a21c955abe7e8a4caaae09fc26c04ec1d1399d755c8fd347647c5f61eab520e71bf8ad25ec3fdf4e9e9ff0213c07a71a959432f8fedf3058413f0579faa41b0c77f872535abc1cf2f6cf0307619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-75-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "536b4fdb3014fd2b91f771f4491e6da56a64258c686dbaa5290ca62972dc9b6048e3103b9d10ea7fdf8d431908093e39f63de79e731f792477bcd890094978765f43f5f0e95624e48880a219be9e5d7dcfae7defebe7f2da3ebdb5ddd48d76bfdce91411bc6149ba2d73e84851570ce464bdea6695a84b5a09d1c1441dc7ea0cec63db742cdb36878e893c09793ae7c51db26f942ae5a4d73b68773321b21c68c9659789edf37b6f37ec9595b805a664efb5640f5564ef7dd12fb9605471514cd72b34504ba862d8529ea385ffcc4d72f23a7597d36d3743f08e33a08c89ba508d2d4cc14491f2acae7456327924dae68b0fb2f2e6de2c3298c8eb6d1117740b47c6862a1aab87128cb370b930fce06c192edcc85f06f16a76ee2ddcee6c395f2f82957179ee859ea1689283e61a53e344df02bca0fe06a4e285568f9ae746f9a941fedbb134049496d00663a76fd3c1a83f4ed2c461e9e8d84ad23e24c928712c7a9cf4d9d804739300459e16d52c5a886290b0e1d83187b189676c9ae6261e3990c4d66860f7870e637db34ff647e46fc5159c72590ac9db0e91cbd08fbc380ad7c1cc8d3c5d424aeb5c9db6c69a025e7a54582082dea969df44b940a5a6dd7e1079a13b8bfc0baf9df01c32ca1e56f738e394e612104d2b6c9e826a2136d83012b80bef14c17a623f0e414926bf1f49d3f3c6c58b963fd3231c606357e993aca2d00fbe693b07c405cd6b0dd9b51fa444cb37581bbadeff41242e699b85fc5c7be115699f4248a182827d3c4d04ebc087ffda61f1118bab8f3252e11d7787c9468455d0ee10d7e53eb19de1d8b22ca2c1957a13c3e3d0b526479311b650a8a78adac5c7425bb15a3e833088e30f74b7f6ff00c18652fc78040000",
    ],
    [
      "ETag",
      "FYKgZIEB+pZ6Dj6AfATvXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4e83401085df65bca569ab401b925e50ad4ad23f298d17c6342b4c910a0cee2e9aa6e9bb3b8bb51a35d19b6566f8669873d81d3c6565021e3c64e9738d727b92a2be314188aaceb5e24745a542b000b5489974929b763f6ddf46ce30984e92b06ccf6e237f306042c58f5808f076b0ce304f1478773b284581dc16535e17e5aac92cd0dbca141751184caf382f2831f974391efbc3f108f6d6b131115aac1afe1f6df77b0b36f410e21a2596319a5d2a491b8c7560642a515439b614d53246050ddcbc4825d59590442daeb47a4eabeb9eb976cf715dfbb4673398532c744625b3cb05ef079ab4c8437a6595e032209b9005af9bf385cb59d2083161308d5cbbd9ef2b20312699acfee42a5ef751f05ff8c00e0e7ce7444175a98fd4e578e6ff368e2dfd1c75e147a31f84d26cd4118982c96811f993b9e1ee0fd2875b8d6a2e897d54682cec76ecbed3733befae9e93719abfe36959a305b1e0cb719d69f0d62257b87f037522745b7a020000",
    ],
    [
      "ETag",
      "5dQ/8g/WT5BINMdRn/OWTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10",
      "fd",
      "57",
      "2c",
      "ef1790fa91af26a5126205028b54524853189ba6d671dc6248e3603b2084fabfef9250a0631b52a4c4bef7debdf39df38cef789ee2014ef8f2be64f2e9cbad48700b334d96b0fbb897442786f86e5f51e6d92763531bf78717fbfb80e0154b915591b1b612a5a44c0da693ce528ab22052883608b53db76dbab6eb783dd7752ccf019e62d962c4f33b60df685da841b7bbc9dd590ab1cc1829b8ea50b17addef3e58dd428a5b46b5ea6ea7ec4216d5fd7fd2834c50a2b9c8f7a71330502a26676c45780616de9869f2755bbac3c9aab304f003a78c502aca5c57b640828a7cc197a5ac55f1e019d736df7de0893ff28f6234978c0a99ce783a4744a1d9acb86ba1a3f1348c77e6645529ce77abc066814ea2f1199a1760e08628a6e6e8ea9b1ff908cd95067373b48f0ed0303c465bca4188a661e84f62b473b08b4ea3f1f41c1d5ebf8780e79429cdf3da714c928c556e5f0e35f8d8ca8a403458688233cf7089d937f69245e2d145dfee250b8325493ff17ac44e0cbae730274d18019eaed46b16c9459e9a7dcfed39bd3465ac67d2c4ed5bc47453688c61f440ccb2a96d2709c1eb167e945cb363ae0aa17873b2f82a0a627f1647d3f06818fb75190b5266fab8315715f1dea7862201f49fbad655940bc854b52908633f1a1ec5c1a5df4cc6882d097d9adcc36c2c48a618a089242ba6993c13291c1a3e1f4f82381887c31130ea769f6f100a0f7e3ebf11e2a7a23e655dbf711c9c418b8667e7b5870de89264658d7a683eb0655846dbb0da662f36ad81690f4ca76318c60fbc5eb7fe2d3e8ca2e13518225292a73f6250a4eb54f4bf64adf1f5aa31bf7161e22adbaba7ad95b3",
      "b572f1fad71a9e1686bbd764c617533fbac6cd56c4164cb29c7e3e7000ae039ffe4236f719b070a3210d5c0ecd61bca9aa9250c99a31e7abba9486edd986d5b7710d96fa43cc31dd4d3f2b8d4a91ad58ae5f2a6aee737d8855a854af2008c2748641780ad1dfe08ccd394f050000",
    ],
    [
      "ETag",
      "w9bRF0oX3Wce73FO1t0qBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c1",
      "6e",
      "c2",
      "30",
      "10",
      "44ff657b6c2295364d24240e80500b45b4a470aa1032c9920692acb1374511cabf771d50cfbdd8ebf11b79c61738e6550a7dd8e5d9a946d3dc65c84b37c468eb82ad6c9a2a8be001b2ca841c9f7918f149bfc76ff7c170d9ccd2d8cece83811036f9c65241ff02fb1c8bd442ffeb02952a516cdbad3e0ac28d76a7e962357999c42294943a61b19ecf87a3f9045aefcfa24aaa2bfe9769d37a70a05d8c7b345825e8326843074c78eaea5955ea027d4bb549d04207771799a15a2b43e48be247a1df0b9fc2207a0ec3e0310a042c28519c5325ecfa53d20113ab22a6b3b4839e00a61ba5e8be5b7f3ad9b5b84d9b7673338d1a46fb61481258748f3f5c838cc9856309cda6460f1225fff89af3f5dcfe028b9f3f6ea4010000",
    ],
    [
      "ETag",
      "CwtA7tqpORK+4AQyJdRsJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "5d",
      "6e",
      "82",
      "30",
      "0000e0bbf45908c844d9db1a04a4287fe29097a6a96580808cb254baecee33bbc6fceef07d034229e31c4fb72bebc12b98c9d252a98a860d7444a57469317be81d55993378ad453d779d585aacdc48a373e78ea66b28f5e2030ed6d7617f94912e46b6b247f7b8de76114c6b6d7ff673e1c7da8b1ccd22cbb75834bd8b0d5e905d54e634297185528978ef75cc8e91088343590798d4922651d32bd238afdba23c49dd959f913699271ee26007dfecebcd8717c44e7155b5a8ba104c58ae65818ff7077ecfc265ea98936290923429f6048cc586eabafaf4f47f810560f7a11e19c7f563bbb1b2ac05f8ab8fa779608fff9091918de0e7179f18cf3019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-77-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b3014fd2bc8fbda843c78a491a2354ae91a29211b9056db3421632ed42dc1149b545d95ffbe8b69ba5695da4fd8bee7dc73ee832772c7cb944c49c2f3fb06eac72fb72221270414cdf1f5cafeb5dd0f470f174e31fe4b4d7b158e928b7c3643046f5992eeaa027a5234350339dd86fdbc164d456b217a98a8e7babda133762cd7761c6be45ac89350642b5ede21fb46a94a4e4df3a8ddcf85c80ba015977d26762fefe67e6456b5b805a6a4f956d24415697e2cfab5108c2a2ecad93644038d843a861de5055af8cf4c93b3b7a9fb9ceefa3982f79c01654c34a56a6d610a26ca8ce74dadb392e913d1365f1d48e8adbc4564305134bb322ee90e4e8c942a1aabc70a8c8b60b33696fec52658cfa3e5c68fc3c5a5b79ef7179bd576ed87c6f5a5177886a249019a6bcc8c337df3f182fa2948c54bad1eb5cfadf2738396efc7d212505a42178cdd81438793c16992252ecb26633bc906902493c4b5e93819b0530bac34018a3c2daa59b4c49aa93b9cd899159f5a991b5b16b3e2894bed18d2b18b97945a964d0e27e4a1e60aceb9ac84e45d87c875b08cbc380ab6fe621e79ba848c36853aef8cb505bcf6a8b040047d50d3a18d72814a6dbb977ee405f345b4bcf2ba09af20a7ec31bcc71967b49080685a63f314d46b9162c3883f5f7be708d613fb7e0c4a32fdfd44da9eb72e5eb5fc851ee1005bbb4a7f4918054bff9bb673445cd1a2d1907d7720155abec1dad0f5e10f227149bb2ce4c7d60b7e92ee29800c6a28d9e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c45580ddd0e715dee33db1d0f478e4334b856ef62f83d76adcdd166841d94eab9a26ef1b1d04eac912f200ce2f87dddadc33f7efcb37d78040000",
    ],
    [
      "ETag",
      "V5ZUv12wF6l3za/5LS2bFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd4e83401085df65bca5b1550443d20baad536e92fa5371ad3ac30a554607077a9a94ddfdd59acd5a889de2c33c337c39cc3eee0292d62f0e0314d9e2b94db9304f5d40401aa2ad38a1f25150ac102d42261b2371edfbd9e06ce24b9ed8e566bdca8d94a4ddb6d2654b4c25c80b783658a59acc0bbdf412172e4b688b22a2f16756681de96a6380b83fee896f39c62938fe68381df1974616f1d1b63a1c5a2e6ffd1f6b0b7604d8f012e516211a1d9a594b4c648f78d4c25f232c386a24a46a8a086eb1789a4aa1492a8c19586eb365aceb963bb178e639fb93683194542a754303b9ff17ea0498b2ca01756090e03b20e59f0b23e375c4ee35a8809fba3d0b1ebfdbe02122392f1e24faee4755782ffc2077670e03b2772aa0a7da46e0663ffb7716ce9e7a86b3fecfe209466a38e48d81f7667a13f9c18eee120bdb3d5a82692d84785c6c256d3bebc709de6bbab57649ce6ef785a56684124f872f4520dde52640af76f46e0263c7a020000",
    ],
    [
      "ETag",
      "HOOZz/R6PgGENhjevsShsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54fd4fdb3010fd5722ef17904a3ff3512a55ac2b81452a294b53109aa6d6719c629ac4c1766015eaffbe8b43818e0da448c9f9debbf7ce3ee709ad591ea3018ad8eabea462f3e58e47a881a8c22b581de5adfc36e94c7e3fe2f53aa7713f2954ef71380404ab581267454a8f242f05a172309f3557829705169c1f41a123a77fd4b17bb6e958b66d761d137892a6c984e56b60df2a55c841abb5d36eae385fa514174c3609cf5ed65b0fdd5621f81d254ab6f6255ba0225b1f8b9ea49c60c5783e9ccfc04029a958d00cb3142cbc32e3e8eb7ee926c3597305e0074628268497b9aa6c4109c2f384ad4aa1aba2c113d236df7ca0993b71c7a1b1149470112f58bc34b034168b62dd30c6d3b91f1e2c7156555c1e56895d609c05d30b635980815b2ca95c1ad7dfddc0355e0143e3c418f9a7c65e69cf37e6beefce42e3e0e4d0380fa6f34be3dbcd5b08988ea9542cd796431ca5b4b2fbbcabdefbb3ac085881873ab970da36eef4dbc751123924e9f7ac2869d328ea478e857b519b1c9bd48c238a81a7aaea9a85739e77a33eee5b1dc7228ee574935e6411eae0c482a538c24e62773135092168db408f82297aca64c125abb7165d075ee82ec260ee8f47a1abdb487099aad3da5cd5c45b9f0a9a04d0077d6dab2ce3a0549d93e7876e301a87de955b8fc684ae30d9ccee6138129c4a0a682c70461515173c864d4397d399177a537f3401863eefcb1d42a2c1cfa75742b829f42e2bfd466793e928b44ded6007b9c269a9310ff507ea342d406c1bff2f330a82d10d486321f0e6af1cb4636bfa3f14345e47b5cd174554a9eda2ee5e64ee4536dafedac2d34070cd6a65f463ee0637a85e0a684205cdc9e7a305609df8f46fb1bbba8085cb0b3252410c834c64254204ad079a65ba959aedf4baedbefed7282cd4bb5cb7d3db9d5c55a3aa48339aabe78eeaabab37b14a95f20504499843dff3cf21fb07b3dbdb463a050000",
    ],
    [
      "ETag",
      "An/nhf1Lxwakkned8fpt3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d504d6bc24010fd2fd36b023549132b7850512b04a969a5601159d7491a4d32e9eea645c4ffded958a4a5975e7667de07fbde9ee090573be8c136cfde1b54c79b0ccdc20e09eaa6309aaf9a2a8de0001a91b1321d4c476af5e2f9dd89f26470bf0a8b89bfe8f759a1e51b96027a2748732c761a7aaf27a844896cdb6cea034bccb1b6db6cfe3c9e8e13064ada5960be8ce3c1301ec3d9b95a44494d65fe655a9f1dd8d336c1141556126d865ad11ea599d97a5a947581aea64649d4d08a5b2253d4d44211b98cb851d7ed847e18447761187851c0c282a4303955ac5d3e713a30644491d027b7039f05aa1db968da9e1f0c77da1676f2da683f39efca75fe70c16f6efdfdd8f068503f2ae2e41a6de8db4b8111d95286cb1ad5a00352f0ff3fe4e6b29fbf0033121996dc010000",
    ],
    [
      "ETag",
      "fAGCrZW238Fr2c49Z6lF3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "08000000000002ffedd34b7282300000d0bb642d4ef9684977a02005c4aa20b0ca448c18b112122482d3bbd7e935eabbc37b005c144408d4d615b9820fd0630d8e8b71c04cdb95677f685231e889f83ce9c9718357dab2dff5dc87d3f3009585c7f6f58caa057654b789fa0e4d298783ec6cae593cf3ec469465f4ae9952de9641d92507668515da8b86ba79665dba8b8230f456f96161f8d6b5c99666bb766d2cf32a52e78a9e7e239f38b72a9dc3c18b68b033e8f114ad94c95686ae4921a3fa046f2eeb7519ee12635be74adcd130ecc3b72a56ebfb80d85746e2d951b65c73daad11f07cfcf2f27f81112077463911883eb7eb130847e0af3e6a7b469eff6d8239e1e0e7174af8fb8419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-79-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda8434e44122456b94d09629211b9056db3421632ed42dc1149b4e5195ffbe8b69ba5495da0f08ec7bce3de73e78260fbc48c894c43c7baca1da7fb917313923a06886b7f6a599f5bf5d4daeafc25f32c8a15eba7b2f9bcd10c11b96a4bb32878e1475c5404eb74137ab445dd24a880e26ea8c279df391351a8c87a3d1a03f1e204f429eae78f180ec3ba54a3935cda376371322cb81965c7699d8bdde9b4f7db3acc43d3025cdb79226aa48f363d1afb960547151ccb6011aa8255411ec28cfd1c27f66125fbc4ddde574d7cd10fcc41950c6445da8c616a660a2487956573a2b993e136df3e48304ceca5984061379bd2ba282eee0cc48a8a291da97605cfa9bb5e17a971b7f3d0fdd8d17058b6b673def2e36abedda0b8cdb6bc7770c45e31c34d7981917fae4e101f513908a175a3d6cae1be59706b9efc7d210505a421b8cc6bd113db77b93388dc72cb5ad619cf6208eed783ca456dc6393010c921828f2b4a866d14214163d67fd1e63d16408c36830a149640f591ae10309b3873d6b9490c319f95b71054b2e4b2179db2172ebbba11385fed65bcc43479790d23a57cbd65853c0a947850522e8839a0e4d940b546adaed7aa1e3cf17a17be3b4135e4146d93e78c419a7349780685a61f314546b9160c388375f3b4b04eb897d3f062599fe7e264dcf1b17272d7fa58738c0c6aed26f1284beeb5d693b47c40dcd6b0d796a3f488996efb036747df883485cd2360bf9b175fc9fa4bdf221850a0af6f93411ac039ffe6bc7c5472cae3eca488567dc1d261b115641bb435c97fbc21e5b56dfb2890657ea5dcceaf78f5d6b7234196107857aa9a85d7c2cb415abe52b0883387e4f77ebf00f5b77560d78040000",
    ],
    [
      "ETag",
      "8F/g2JG9HGTZsSleuDIyNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2400cc6bf4b7de94814e6a64b7831047509a08ee19f1842ceade0705be7dd0d4308dfddde44346aa26f6e6df76bd7e7d9ade1392d12f0e0319dbf5428577b73d4d7260851559956fc28a9500816a0167326ef97fb77834ee0ca34bce9b616cd3c5d46b77ebbcd848a9f3017e0ad6196629628f01ed650881cb92da6acca8b699d59a057a5298ea230189e739e5362f2e1b8dff73bfd1e6cac5d6322b498d6fc3fda261b0b16f418e20c2516319a5d4a490b8c7560642a919719361455324605355cbf984baa4a21891a5c69b8278d43a7e5d8ee91e3d84dd76630a358e8940a66c723de0f34699185f4ca2ac16140d6210b9ed5e792cb69520b3161308c1cbbdeef2b203126994cffe44a5ef749f05ff8c0b60e7ce7444e55a177d459ffd2ff6d1c5bfa39aaeb47bd1f84d26cd40e8982416f14f9832bc34db6d23b2b8dea4a12fba8d0587878601f1fb9cec1bbaba7649ce6ef785a5668412cf8725ca41abc99c8146ede00393953b57a020000",
    ],
    [
      "ETag",
      "Yv+XMBI7riRVD3j2mivTWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "10",
      "fd",
      "5732ef9756e22394247c48a863906d4834b421b443d3048ee350b7499cda4e3754f1bfef9c94b66c5d2b2191cbbd7befddf99c0774cbb208f551c836770515db8f373c44354415dec0dbe9fcf7f5f262fc7d7a1d27398e466d1944f670300004d35512a77942eb92178250d95fcc1b1bc18b1c0bceeb4054ef9af596d376ac8eed38d649c7823a499378cab25ba8be562a97fd6673afddd870be4928ce996c109e3ebd6fde9f3473c16f2851b27928d90415d97c5bf434e1042bc6b3c1620e060a49c58aa6982560e1b9320a3f1d5237184e1b1b00df33423121bcc894b60514846731db14a26445fd0754da7cf180e6eed41d05c65a50c245b462d1dac0d258adf2db9a319a2dbce0688d53cdb83ed6897d607cf16767c63a0703d75852b936aebeb9be6b186bcdf061609c1a436f6c1cf04e3c63e179ee3c308e4e8f8daffe6c716e7c5ebe8480e3884ac5b2d26f80c3846aaf8f239dfc7b90ba002b305025571dd3c1adaed90be3b043e26edb0e6393866137ecd8b81d9aa467512b0a29863aa5d9cb2a9cf12ca20e691187c69884b68d9d2ee9da1d33ee59761ce2b6d9ebf5e08c7aa18d7635f44b3045c74ce65cb26aaee8ca9f04ee2af017de6818b8651b312e1235aecce9265efa54d02480dee86ba7b38c83923ea48917b8fe70144c2edd6a2fa67483c9767e079b11e3445240638153aaa838e3110c0d9dcfe6936032f38653a8280ffb7c8f90a8ffe3e1b920d8e6e59455f9afb51cabd4df032e71529488fbea01b5600cbbdaff2986be3f5c822c16026f5fa77f95bfc4975165f1490f69b57d74721059079183763f77f0ab21b85f9532ba58b8fe1255af7c1a534133f2fe5a01b84cbcfb99d8df59c0c2ad0519a92086",
      "2526528b1041ab656669d94a55dd69b77b8e894ab0507fe7ac9665ee4f4d7368469ad24c3d7654ddd972883a55c82710246107bd89f715b27f001966f62733050000",
    ],
    [
      "ETag",
      "LSxhYQDXLhflpadC3sTd5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d50db4ec24010fd97f1b54db89442487828a651140856095143c852865a683b7577aa41c2bf3b5b8cd117e3cbeeccb964cfd923ecd362037d58a7c96b85fa709120dfd9214253656ce42aa930080e20ab44940b9a3ca95948f83169dff4e6b78fc1a287c160200a13bf60aea07f846d8ad9c640fff90885ca516cab55b917091f4abb8da60fe155180990d3c602d3f9781c0cc7219c9c6f8bcaa92af85fa6e5c9811dad23dca2c622469ba1d4b4c39847b69e517999a16ba8d2311aa8c5359168aa4aa5895c41dc5ec36dfa6ddfeb767cdf6b753d1166142b4ea910edfc5ed20113ab2ca27769076d11e87a94a2dbfa7c13b855b7b053a78ef6936bfec179bfb9e5d763c303a3996992e4066de8c6b9c025d9522c655957e840ace4ffaf533eefa74f76dcdae3dc010000",
    ],
    [
      "ETag",
      "WoMZaPEoezM3J8UKYAW8eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "0002ffedd34d7282300040e1bb64ad0e8205e92e8814958013a952360c421401c36f0a89d3bbd7e935ea7781b77a0f102709e9baa8af0a42c13be0b1accf92d9ae5e1ad69013936d2114e7ce8e47ebb32eb2742cb578433c7c75978d974c8381256228a56399ef5533c01f4870b94a5981a7d0f2b79a92123a87883007b5f4cc9090ec8a5772c6f5412dfc48e8956b6a8700da8b5c918e8e280c51d01d553b8be72ea657c9cd9b3c09c38dd267dece31d668fe35bd0b9b4accc329bdb4ab8bbf12a443e72b8cd7f024ed5dd6d4d4198ecf8a7afb468705e555d8e3fbe5e4b02c98bdbcfc5f6002c858df5ad245b7e7edca9bae4fc0dffa51cf6bf2fcdf20714b5af0f30be5c8249019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-81-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fa34014fd2b64f6ab7d51fa4c9ab5dbe2b6494b574ad5cd664386e182a3c02033541bd3ffbe97c1ba1a13fd02ccdc73ee39f7c133b9e75948c624e0f14309c5e1db9d08c819014563bcbd29d3c5e53c7c829b2733ff71580417d25b3c4e2688e0154bd2344fa02145593090e3ddb61917a2cc692144031335869d46a7dfed5b835ebf6f99030b79129268c5b37b64df2a95cb71ab75d26ec642c409d09ccb2613e9eb7d6b6fb6f242dc0153b2f55eb2852ab2f5b9e8f74430aab8c826bb2d1a2825143ea4942768e13f330ccedfa76e729a366304ef3903ca98283355d9c2144c64118fcb426725e367a26dbef9205b7b65cf3c8389a44c333fa3299c192155d457871c8c0b77b33696cec5c65d4fbde5c6f1b7b385bd9e36679bd56eed6c8deb85edda86a241029a6b4c8c737d72f080fa2148c533adee55d795f24b83961fc75211505a421df407ed3eed0cdba3200a062c1a767b41d486201806831eed066d36b2c00a03a0c8d3a29a4533919981095697f67d366a53df1a0d2c7f64b19e3fec757ba1d50f211a99e478461e0bae60ce652e24af3b44aedda567fb9ebb736653cfd62544b44cd4bc365615f0d6a3c20211f4494dc72aca052a55ed5e3a9eed4e67def2caae27bc8298b2c3f601671cd14402a26981cd5350ac45880d23ce746dcf11ac27f6eb149464fce799543daf5cbc69f92bddc3015676957e93ade72e9d9fdace097145935243f6f507c9d1f22dd686ae8f7f11894b5a6721973bdbfd4dea2b17222820635f4f13c13af0e5bf765a7cc4e2eaa38c5478c6dd61b2126105d43bc475b92fec013e3b26d1e0427d88f54cf3d4b52a47951152c8d44b45f5e263a1b558295f4118c4f13bba5bc77f4b44a3bd78040000",
    ],
    [
      "ETag",
      "XumHQDdxeXx2pByHbFsTHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd4ec2401085df65bc2d41a42cd2848b2aa82415f9a9578690a51d6ab1edd4ddad4a08efee6c55346aa237db99e937d339a7bb8387b488c183559a3c56a8b647099aa90d66a8abcc687e9454680407d0c88449bff99208d1c1cbde6670d1eeaea6c1aad77ceef799d0d13de612bc1dac53cc620ddedd0e0a9923b745945579b1ac3307ccb6b4c579381b8d2f39cf29b6f9f83608fcb360087be7d0184b239735ff8fb6c5de810dad66b846854584769752d1062333b232b5cccb0c1b9a2a15a1861aae5f248aaa522aa206571aa7ad464bb485dbed08e19e745d06338aa449a960f676cefb812123b3193db34a100ca83a64c1ebfa7ce2721ad7426c381a87c2adf7fb0a288c48c5cb3fb992d7bd97fc173eb07707be7332a7aa3007ea22b8f17f1bc7967e8e1af8e1f007a10d1b7540c2d1f5701efad713cb2ddea59f6d0dea8922f651a3b5b075ec9e76bae2f8cdd573b24ef3773ca32a7420927c39ae5203de5a661af7af7d303ffe7a020000",
    ],
    [
      "ETag",
      "A/xg665eG9jDF37bQLb9/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2a99f70f48fd9d34692b55ac948c552a294b53109aa6d6719c6048e3603b4085fadd777128d0b181142939df7bf7ded9e73ca15b964568804296dc15546cbedef010d51055388155e7ac3f6e373bfc387cdccc9db6357d4c82d1c370080856b2245ee729ad4b5e0842e560316f24821739169cd7a150bdd7a9b76dd3b69cae6d5b1dc7029ea4693c65d92db0af95cae5a0d9dc693712ce9394e29cc906e1eb97f5e67da7990b7e438992cd7dc926a8c8e6c7a247292758319e0d17733050482a96748d590a165e9951f86dbf7483e1752301f03d231413c28b4c95b6a004e159cc9242e8aa68f084b4cd371f68ee4edd7160ac04255c444b16ad0c2c8de532bfad19e3d9c20b0e56785d565c1d96895d607cf76767c62a0703d75852b9322e7fb8be6bbc2ead8c2f43e3c8187927c65ef589672c3ccf9d07c6c1d1a171eacf16e7c6f1d55b08f88ea8542cd3ae031ca6b474fcbcb193f7c75912b002cd2ab9745a366ef75afd300e1d12f7cc6e18b76818f642a78bcdb045fa16b5a29062e0a9b2ba66e18c67fdb8db8b63db0ebbc4ec9ba1653a26b569147749a71bb54327ee5207f77b26dad6d083608a9e309973c9aadd4597fe24709781bff0c6a3c0d56dc4b848d54965ae6ce2ad4f054d02e883beb6659671502a8f6ae205ae3f1a07930bb79a8e294d30d9ccef603e629c4a0a682cf09a2a2ace78049b86ce67f349309979a32930f4919fef10120d7e3dbd12824dae7759e9379a07fec43bd50676880b9c161a725f7da0510e5ed1765bfb7f9991ef8fae401a0b81377fe5a01ddb2ae9ff90d0781d553677926d54aaeda2ce5e64ed4536dafedec2534370d32a65f473e1fa57a85af2694c05cdc8e7a305609df8f487b1bbbd8085fb0b3252410c834c64",
      "294204ad069aad752b15db319d76df441a2cd4bb9cd969ed4eaeac5156a46b9aa9e78eaadbab37b14c15f205044998434f1fe2f60f01192bdf3d050000",
    ],
    [
      "ETag",
      "7M9C1/2oBbxyS714LxgTAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2f",
      "d3",
      "a3",
      "09d518a3043c542b55b0a2693d1591751dd3689289bb1b4b14ff7b6763919e4a2fbb33ef837d6f2f7048f22d84b049e26389aa7a88d12cec10a12e53a3f92a28d7080ea011312b17f3e3b8ea9c9a8dc1f36b63f878eecde4791cf7fbacd0f2133301e1057609a65b0de1c705729121dbd6ebe2c0125315769bccde472fa388818cb616982da7d3a7c1740457e76e111995b9f997697575604f9b0877a830976833148af628cdc4d6d3222b527435954aa2865a5c13b1a2b2108ac865c4ed796e2b68077eb71304bed7f55998921426a19cb5cb374e07868c4823fae276d06681aa472ebaabcf13c3adba859dfc3ada6fceff83f3ee9c67b9d5cf6383caa09e2be2e41a6de8e6adc0906c29c3658d2ad10129f8ffc789b9edd76faa79958edc010000",
    ],
    [
      "ETag",
      "QPqHy5v0+BDM+C/z8NczHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "ffedd34b7282300000d0bb64ad8e209fd01dc182146c85201f374c74a27c5a028180dae9ddebf41af5dde17d03723ad1becf0756d306bc801b918dc569e1b510d953d97186b77c0e215b3a9978c523ec7c3fb1b7fe2645192e10aad29a995ae412ab31af6a015d6c7912a5e762db5ae5e7128eb144144996433a04f377e57e144977ad843a5aacd1a87c71f58bfd61c0dd57efc0d8c66f6b8c3c36d6a97ae8b2d6cf09499449dca3cd5cc72dccc514eed719f6f440870dd20e43acecb5bbe7ab66c882f3b0e21116c55edb393ab4a36c7394a1d94dbc426117363e29e33c593c3dfd5f6006e8b52d39edf3f2b17da51ac60cfcd5cf875b4b1fff11259c72f0f30b60458af619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-83-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "30",
      "14fd2bc8fbdabc1a5e8914ad514adb4809590969b54d1332e642dd124cb1499555f9efbb98a66b37a9fd04f63de79e731ff04c1e789190318979f65843b5ff722f62724240d10c6f03eb7af7fbe2e66179695fcd02f6e369c54a994d2688e00d4bd26d9943478aba6220c79b7537ab445dd24a880e26eab8c3cec01edaa663d9b679ea98c89390a70b5e3c20fb4ea9528e7bbda376371322cb81965c7699d8bedef776a7bdb212f7c094ecbd97eca18aec7d2cfa35178c2a2e8ac9668d066a0955045bca73b4f09799c467ef537739dd763304ef3803ca98a80bd5d8c2144c1429cfea4a6725e367a26dbe79216b6fe1cd428389bcde165141b770622454d148ed4b302e82d5d298fb17ab60390de72b3f5acfaebce5b43b5b2d364b7f6ddc5e798167281ae7a0b9c6c438d3271f0fa89f8054bcd0ea6173dd28bf3468feff581a024a4b688391d3b7e9c0ed8fe2347658ea0ead38ed431cbbb163d161dc672313cc24068a3c2daa59b410c58059f1c0627694bac92032532b8e5cd749a23e034c62bb298c127238214f155770ce6529246f3b446e8379e84561b0f167d3d0d325a4b4ced5796bac29e0ad47850522e8839a0e4d940b546ada3df7432f98cec2f98dd74e78011965fbf523ce38a5b90444d30a9ba7a05a8a041b46fce9d23b47b09ed8b7635092f1cf67d2f4bc71f1a6e5aff41007d8d855fa49d66130f72fb59d23e286e6b586ecda1752a2e53bac0d5d1f7e211297b4cd42ae375ef09db45701a45041c13e9f268275e0d36fedb8f888c5d54719a9f08cbbc36423c22a687788eb725fd8ced0199916d1e04afd1b73fbe6f0d8b526479311b650a8978adac5c7425bb15abe829adfc9c6f775b70e7f00aa11cf6a78040000",
    ],
    [
      "ETag",
      "R5QvzFVkMG6HCRcZwOcpsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c6bf4b7de94840c6204b78010aba64fc114662620839b602c36d9d77379410bebbbd8968d444dfdcdaeed7aecfb33bc0539c45e0c2325e3f1728f7176bd4f72698a02a12adf89153a6102c402dd64cd69ab34195fcfde5b6bf59f676d351d77b78bd6fb79950e1065301ee015631269102f7f100994891db424a8a345b9499057a9f9be2349878c35bce538a4c3e9cf97ea7ebf7e0689d1b23a1c5a2e4ffd1363f5ab0a5e5045728310bd1ec924bda62a83d235389344fb0a2a890212a28e1f2c55a52910b4954e14aa555afd49cba63371b8e635f356d06130a858e29637636e5fd409316c9845e5825380cc83264c1abf2dc71398e4a2126f486816397fb7d05248624a3c59f5cceeb6e04ff850fece4c0774ea45464fa4cf5fd51e7b7716ce9e7a89b4ed0fb4128cd469d91c01bf4a641673036dcfc24bdbbd7a8c692d84785c6c25ad56e359a4ef5ddd56b324ef3775c2d0bb420147c39ee620dee4a240a8f6f27bf0a917a020000",
    ],
    [
      "ETag",
      "17UM0oLy+jFhbEvSOBIXxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "99",
      "f705a4d23669dab495102b25db2a410a690a42d3d4daae530c691c6c87ad42fdef3b3b14e8d8408a949cefdd7befec731ed11dcf17a88f085fde974cae3fdf0a826a8869bc34ab7848887838bec87f0f9384b9d9f1b12a07878780e0a64ae15591b103254a4999ea4f27f5a5146581a510074074d0f50fdc4eabe307ed4ec7f7021fea14cbd2539edf41f58dd685ea371a5bedfa528865c670c1559d8ad5f37ae3c16b1452dc32aa556357b2012aaaf1bee8512628d65ce487d3091828159333b6c23c030b2f950bf26597bacef1aabe04f003a70c532aca5c1b5b4041459ef265292d2bea3f226bf3d5079a84a7e13071e69251211733be983b5839b35971577386e36994eccdf1ca30cef74d621b385fe3f199332fc0c00d564ccd9dabef611c3a2f4b73e7d3a173e40ca21367877d1439d3280a2789b377b4ef7c8bc7d373e7f8fa35047c2f98d23cb7ae134c32661c3f6dece8ed719a02ac41b34ace826607bbdd668fa424a069b7d526699311d225411bb74893f67ce62f08c350a70dbbadc2b9c83d12049ed76d3137a56ed37381a7d776718f11dc7259b3d9a601f171d3439b1afa25b966275c1542f16a77d1553c4ac259124fa3e120096d1b292e337d5299334dbcf6a9a14900bdd3d7c664b900257354a32809e3c130195d86d5749cb225a6ebc93dcc478a33c5008d255e31cde49958c0a6a1f3f164948cc6d1e0142aec919f6f110af57f3cbe1424ebc2eeb2b66f3449e251f4cd1ad8222e71565ac843f58170015ed16653fb3fcd208e07d7208da5c4ebbf72d04ec737e5ff90b0781b5536b7922e326adbc8db89fc9da883363f37f0d410dcb44a195d4cc3f8",
      "1a554b314b996439fd78b4006c131ffe30b6b717b0707f414669886190a9322254b26aa0f9cab6525507ad6ee07ac882a57e93eb7adef6e40c8761642b96eba78eaadb6b37d1a44af50c8224cc61640f71f307c6f92b0c3d050000",
    ],
    [
      "ETag",
      "baCbbovBQnxCTTe1lBBsuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d504d4fc24010fd2fe3b54d044a21241c8aa9425289563919429632ad2d6d67dddda295f0df9d2d8668bc78d99d791fd9f7f608fbbcdec104b679f6d6a06aaf32348f76885137a5d17c49aa3582036844c6ca8f607bdffbec17e3e830bf95a144bfdd57c174ca0a9dbc622560728434c772a761f272845a54c8b6cd46ee59625a69b7c5f239bc0b63062ada5960b98aa260168570722e165151539b7f99d627070adac698a2c23a419b412a2a30310b5b4f8b4a96e86a6a54821a3a7147648a1a291491cb883bf6dc9e3ff0bdd1d0f7bdfec8636149893039d5ac5d3d713a30644419d33bb783010b543772d1b43b0f0cf7bb16761a76d17e72bd0be7ffe1bcdfbef5f763b3d6a07e50c4c935dad0d7e70237644b192e6b54830e2482ff7f9e9bf37efa025af989a4dc010000",
    ],
    [
      "ETag",
      "xAbM1z2j8LvHFpEpe6ykmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00000002ffedd34b7282300000d0bb64ad8e42a94d7704e523d64a0a11bac904889f4201938880d3bbd7e935eabbc3bb0196655c4aaaea8257e015f44c83936ce2372fc8be1e63330c43d24f91d0c7f3a5e5a864fa551ab98537dd39f416d795fd365474a6f68a6c24c66c1b282ef2a0350a981efca0185c4d83b15dcd86b4474107ab9ea84542b19d8539319fd65131f6fc4b117abbe3aed2e5dea963ddd551a3acf82cf9da28f14c6e1d9b461a725873980f354aad953927b475291356775162597acd876d42137f53977fe28bda911a9220f68f75fb7c2aadf7228a184eb23c6ed7938787ff0b8c00ef9a93e0929eeedb7503c211f8ab4f55dff0fb7fc499e002fcfc020c2ad0ed19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-85-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3014fd2b91f711dab4342f2a55a36ac388d6a6234d41d33445b6e304431287d86143a8ff7d370e652024f814dbf79c7bce7de409ddf12a455344787edfb2e6f1cbad20e81831857378bdbd2c8edadc9d377f27d77726fd6e9e64cba3f96c0608deb1242eeb820da4681bcae474b71de68d686bdc0831804403cf1e8c9d8963b9b6e35827ae053cc98a6cc5ab3b60df2855cba9691eb487b91079c170cde5908af2e5dd7c3831eb46dc32aaa4f956d20415697e2cfab510142b2eaad96e0b065ac99a8495981760e13f3325676f530f392e8739801f38659852d156aab30529a8a8329eb78dce8aa64f48db7c75405b7fe52f62838aa22daba4c2253b3652ac70a21e6b669c479bb51184e79b683d8f834d986c1717fe7a3e5c6c56bb75b835ae2ffcc837142605d35c63669ce95b0817d04f9954bcd2ea71f7dc293f3728783f968e00d292f5c1c41d3978ec8d4e49465c9a79139b64234688475c1b4fc8889e5acc4a09c3c0d3a29a852b5159cec41ea59e976419b1120b3b6e426cdb4ac623cbb1d3d4834404ed8fd19f862bb6e4b21692f71d42d75110fb491cedc2c53cf67509196e0bb5ec8d7505bcf6a8a040007d50d3be8b72014a5dbb8330f6a3f9220eaefc7ec22b9663fab8bd871967b8900cd0b881e629d6ac450a0d43e17ced2f01ac27f6e3109468faeb09753def5cbc6af90b3d8601767695fea26d1c05e1376de780b8c245ab210ffd01d560f9066a03d7fbdf808425edb3a0cb9d1ffd44fd53c432d6b08a7e3e4d00ebc0a7ffda61f1010bab0f3252c11d7687ca4e8436acdf21aecb7d66bb93537bec200d6ed4bb9863bb87ae7539ba8cac64957aaea85f7c28b4176be50b088230fe50776bff0fe251d76578040000",
    ],
    [
      "ETag",
      "jQl+ug7Arx3Wk/cK/2fD+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92614fc2400c86ff4bfd3a12d031c8123f80a212070a8c44620839b66e0cb775dedd300be1bfdb9b8a464df4cbaded9e767ddfdd1e9e923c0417d649fc5ca2ac4e62d413134c5195a956fc2828570816a0163193fdcad914bb62715ddd2c4e93875c79b70fcf93f3732654b0c14c80bb8728c13454e03eee211719725b406999e5ab3ab340578529cefce9707ccd7946a1c9c773cfebf5bd011cac636328b458d5fc3fda96070bb6b49e628412f300cd2e85a42d067a68642a911529361495324005355cbf8825958590440dae34baed46cb3973ec4edb71ecd38ecd604a81d009e5ccce67bc1f68d2229dd20bab04870159872c38aacf1d9793b01662c2e1d877ec7abfaf80c48064b8fa932b78dd8de0bff081bd3bf09d131995b93e5257de5defb7716ce9e7a8cb9e3ff84128cd461d117f381accfcdee8de70cb77e9fd4aa3ba97c43e2a3416b69a76b7dd719a6fae5e90719abfe36a59a20581e0cb7193687023912a3cbc02866f031d7a020000",
    ],
    [
      "ETag",
      "By6hpvpYGyHY2iXnsLKXqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ed",
      "6e",
      "db38107c151eef4f0bf843b664c93110a4be44d7184de554961be40e854d512b97892caa24953608fceeb794e2246e7b2d20402277766676b9d403bd1565462734159b2f35a8fb3f6f644a3b140cdbe0eee2e6fa9fd87977ae3fa86f49757e1e1a60575f8f8f11216c9666dbaa80ae96b5e2a027cb456fa3645d3125651789ba63bf3bf05ddf0b46beef0d030ff33414f985286f31fbb331959ef4fb7bedde46ca4d01ac12bac7e5f669bf7f37ec574ade0037ba7f28d94715ddffb5e8492139334296c7cb051aa835a8156c9928d0c2736696be39a4ee09b6ed6d107c273830ce655d1a6b0b29b82c73b1a955c34a270fb4b1f9e2832ec28bf034216b055caa6c25b235619aac56d56d879cce9751f26acdb69671fdda06f60bf2773c7f4fd6151af8cc34e835b93a0fe3909075c60cacc91fc7e4844ca33372c03c8bc8328ac245425e9dbc266fe3f9f292fc75fd12829e33d046948de384a50558b78f4d9dfd7894368119b4d0065781e3b3c1d8394af334e0f9d81da5b903693a4e83117353871f79e0652930cc3396bdc96225f68943ee061e647c94a57e908d791ab883cccbc7e37c344e9da177e47aae0374d7a15f953070267425b5683b4bafe25912ae9278199d4e93b02923677561ce5a73b688973e0d1689a05fd4b5b3512151c91ed32c4ac2787a9acc3e86ed645cc086f1fbc5179c8d9c151a10cd14db8201f55e66d8347a395fcc92d93c9a5e604673dc977b84a6937f1f9e1392fbaae9b269def4cc16b07b41f891157503b86b3fe8d0193a5d67d81d8ce86ed7f97fa6691c4faf519d29c5eebf8b6145be67d37fa2d3e09b55eb74af3ba056edc9c5c1ca3b58f974f769874f87e2456b95e98765185fd3762b861c1494fcf7d385e026f0dbffc5fef22216af2fca68836b9c65aead0857d0ceb4d836a5b4d981e7b8ae4f1bb0323fc4bca3e1fef02c",
      "8765842d94e6b1a2f6f2364db4a15a3f813088a318cda2b718fd0feffa632c3c050000",
    ],
    [
      "ETag",
      "SjYZR0KHsQrxTpHHEteaWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d50db4ec24010fd97f1d136115a8a21e101b451122452256a0c21cb322d85b653f7a221a4ffee6c31465f8c2fbb33e7923d678fb0cfab0d0c609d676f16d5e12c4333774382da1646f35553a5113c40233256cabb6753c4dbe07a9c064f2fb6de8df01ce7c3212bb4dc622960708434c762a361f07a844a94c8b6d5aadeb3c41c6ab74d668ff14d9c3050d2c601b3c5743a1a4f6368bc6f8b28c956e65fa665e3c18ed609a6a8b092e832d48a7628cdc4d5d3a2ac0bf435592551432b6e894c91ad8522f219f12f23bf130551d8ef4551d8ed872c2c480a9353c5dac503a703434614097d703b0858a0da918ba6edf9ce70b76de1a65e1bed27d7f9830b7f73cbafc7c60783fa5e1127d7e8425f9c0a5c912b65b8ac51163d9082ffff3637a7bdf904096d42f5dc010000",
    ],
    [
      "ETag",
      "cMXtlEh3DBf3WYupjAe+eQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00000002ffedd34b7282300000d0bb64ad0e0822e94e6a052c3258312a9b4ca01153f9091892747af73abd467d7778df806419ed3adcd7575a811720c9144eb249aa2d8e5c53f1a6d6776b54c978a190e1e665daf57b99eda27b590626d2d7bc6e7429cd3c29609b8d69d8df6c8c42abdad698ec95bf2da29c1c98ef9e58f5dad845c0549dc268e6c33bc96b8ad8e97c5386399834eddceaea60e3b011dc27c78136c9797e995e171487853bb6bc64b5e1e81ca7cb7910bf872212065317c12f9e266d38fb749ad51de64e6029cdce92e380860f510aee5ab7dd9baea2a5203a4fc6a6ff15799ece737bf2f4f4ef8011a0a2612ded307b6c3766108ec05f7ddccb863efe3b94b4b4053fbfc5794e9319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-87-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2bc8fbb8e641424212295aa394ae4809d90869b74e1332e642dd02a6d8a4eaaafcf75d4cd3b5aad47dc2f63de79e731f3c913b5ec46446229eded7503d7eba15113921a0688aaf7faed58f34bf9eeccf1ff2cbd1e7e42248a7e9623e47046f5892e665061d29ea8a819cedb6ddb41275492b213a98a833b13be67838b6ecd1786c0d6c0b7912b264c58b3b64df2855ca59af77d4eea642a419d092cb2e13f9cb7b6f3fe89595b805a664efad640f5564ef63d12f9960547151cc775b34504ba842c829cfd0c23f661c9dbe4ddde534efa608de730694315117aab185299828129ed695ce4a664f44db7c75205b67e52c038389acce8bb0a0399c18315534548f2518e7fe666db8def9c65f2f0277e385dbe585b35e74979bd56eed6d8dab0bc7770c45a30c34d7981ba7fae6e105f563908a175a3d689e1be5e706b9efc7d210505a421b0cedfe989a93fe344a229b2593e1284afa104593c81ed161d467530bac38028a3c2daa59b41005a5d486a19984637bc042cb3269180d180b47d3a11d9bd33e24d3881c4ec843c5159c71590ac9db0e912bdf0d9c30f077de721138ba8484d6993a6b8d3505bcf6a8b040047d50d3a18972814a4dbb5d2f70fcc532702f9d76c22b48297bdcdee38c139a494034adb0790aaab588b161c45bac9d3304eb897d3b062599fd7a224dcf1b17af5afe420f70808d5da5bf641bf8aef755db39222e69566bc8be3d90122ddf606de8faf01b91b8a46d16f27de7f83f49fbe443021514ecffd344b00efcf75f3b2e3e6271f551462abce3ee30d988b00ada1de2badc67b66d99e654ffa98a56ea5d6c680e8f5d6b7234192187423d57d42e3e16da8ad5f20584411cbfa7bb75f80bd1db101778040000",
    ],
    [
      "ETag",
      "zZtXgmZ8vFwmV5+fHTg9gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92514fc2400cc7bf4b7d74248063e0121fa6a22e414436e28321e4d8ba31dcd67977d310c277b737118d9ae8cbaded7eedfaffefb6f0949531b8b0ccd2e71ae5e628457d6f8229aa3ad78a1f15950ac102d42265f20103cff127a7a2373c4e30488f9fbd6e727f76c6848a56580870b7906498c70adcc72d94a2406e8b28af8b72d16416e84d658a4138f5c7d79c17149b7c3c1b8dbcf3d11076d6a131165a2c1afe1f6df39d056b5a4e314189658466974ad21a23ed1b994a14558e2d45b58c504103372f5249752524518b2bad41bfd5714e1cbbdf731cbbdbb719cc29123aa392d959c0fb81262df229bdb24a7018904dc88293e67ce1721637424ce88f43c76ef6fb0a488c48c68b3fb98ad75d09fe0b1fd8de81ef9c28a82ef581ba1add79bf8d634b3f475d7ae1f007a1341b754042ff761884deedc470f3bdf4f38d463591c43e2a341676daf6a0d777daefae5e90719abfe36a59a30591e0cb7193697013912bdcbd019bf905c37a020000",
    ],
    [
      "ETag",
      "WeSA6IP9a5E+feSg+qA2fQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6fd33c14fe2bc67c01d14bd2a64d5669da5bd600812d1d690a1aaf50ebb827c12c8d33db194c53ff3b27091d2b57a9526d9fe739e739b7dcd12b516ce8842622bbae40dd3efe2c13daa1605886affc7a91cd8aace8fb5f33f759357bbdb97e6365c7c78810354bb36d994357cb4a71d093e5a2972959954c49d945475dcfebdae3e1d87147e3b133701de469c8d333515c21fb9331a59ef4fbfbd8bd4cca2c07560adde3727bffdebf19f44b253f0337ba7f18b28f5174ffef414f72c99911b2385e2e5040a541ad60cb448e127e3037c97f87ae7b826d7b19826f0407c6b9ac0a53cb42175c16a9c82ad578a5933bdac87c70a00bffcc3f8dc95a01976ab3129b35619aac56e555879cce9761fc64cdb6b5c7f5d3dab0bf9017d1fc9cac4b14f08969d06bf2fe951ff984acb541716bf2e8989c9069382307ae83902cc3d05fc4e4c9c953f2329a2f2fc8f3cb871014bd016d44d1488e5992432df77b55835f7b591398410dad71e55a63667bd65192262e4fbde128492d48122f71476c9858fcc801679300439ea9bd372c56c882010c1267943a2903ef888335f2c66cc8b9c7ec2419a5e0b9784e1ca0bb0efda2848199d0a5d4a22d2d7d1f05b1bf8aa365783a8dfd268d9455b999b5e2ea241eea34982482fe92d7aeb60a8991ea3e0561ec47d3d33878e7b7a3710619e3b78b6b1c8e94e51a10cd14db8201752e3758347a315f0471300fa767c868fa7db147683af9ffee0721be2d9b2a9be69fc6c139b6687a7ed168d883deb1bc6a5037ed810eac81d5b5065d7b14db83893d9cd84ecfb2ac0f74b7ebfcd9f9348aa697288829c56e7fb2619263a7a6ff266a836f6eadf8bd0a9bd6d1ee351ddc9c83db98ee3eeef0d7a1b87c6d64fa76e94797b47d8a20050505fff7c021b831fcf31bb25f68c4e24a6318dc0e2370bcb9ae837005ed988b6d934acb761dfbc81dd206accccfb6816d79fb7ed63e6a8fb0",
      "85c27ccfa85de8a688b5a9d2f72034e2748641f812addf00951f140050050000",
    ],
    [
      "ETag",
      "cqSgDngn/Exg7+uDJdqK0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "4e",
      "c2",
      "40",
      "10fd97f1b54db89482243c88214a0422154c88216429432db43b652f6a21fcbbb3c5187d31beecce9c4bf69c3dc13e951be8c23a4d0e16557995a099ba21426d33a3f92a486a040fd0888495254ec763696b1f0fcfcdc6020f74bc5ecca6bd1e2b74fc8ab980ee09b629661b0ddd9713489123db56ab62cf1253166e1b4e6683bb41c4404e1b074ce6a3d14d7f3480b3f76d11395969fe655a9e3dd8d13ac22d2a9431ba0c85a21dc666e8ea69911719fa9aac8a514325ae8844912d8422f219f13b1dbf1e36c3a0dd0ac3a0d10e5898512c4c4a92b5f3274e07868cc8227ae776d06481aa462ebaadce37861b550b37b5aa683fb9fa1f5cf09b5b7e3dd62f0dea47459c5ca30b5dbb14b82557ca7059a32c7a100bfefffbd45cf6f327edd52f7fdc010000",
    ],
    [
      "ETag",
      "yeQMMnu0xKV32Yeqoz9YTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "8b08000000000002ffedd3595283300000d0bbe4bb300cb46afc6319ca62816129a63f99001101259445121cef6ec76bd87787f70d4859d269c233eb680f9e81202a944bd91f9e0c7bad1fa852d199b535b622b388192bb29ee69d922b7dbbecf16c2c912656136a49e27b109baa931ed2156d36ae82bc78afb2236196e8fc731b0a67f6781c0fbe0fa3e9f4e67e88a695481caab0099bbe7d344869f10209e6e46bb3a826d4e19e4e9f977833ce5fd429a5ea4470bd06a18d162e4125ad520b21cba9334947da96e58e4256a61faf9725b87aaf95cb2269420577b162272fbc9c97b020be7c77f77f811da07c68463ae1e6b65d3b40b8037ff5f12c067afb6f5032d211fcfc02d4f7765919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-89-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a2",
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f6",
      "6b15540a6a62b646696ba2d802ea3eb22133c340a7458632839ba6f1bfef65a8dd364dda4fcccc3de79e731f3ca3075e24688c08cf1e6b563d7dbb17049d21a67006af21ff6567d57cbbbd727fdcee4860ee0e16994e2680e00d4be27d99b38e147545991c6fc26e5689bac495101d48d4198e3a3d67e0d8eeb9e3d87dd7069e6479bae4c503b0ef942ae5d8344fdadd4c882c67b8e4b24bc5fef5dd3cf4cdb212f78c2a69be973441459a9f8b7ecf05c58a8b62b209c1402d5915b33de63958f8cf4cc8c5fbd45d8ef7dd0cc0074e19a654d4856a6c410a2a8a946775a5b3a2f133d236df1c50e82dbd59645091d7fb222ef09e9d19095638564f25332e83f5ca58f897eb60358d166b3f0e67d7de6ada9dad979b951f1abb6b2ff00c8549ce34d7981817fae6c305f41326152fb47ad43c37ca2f0d5a7c1c4b430069c9da60ec5a0eee0dad1149894bd3e1e09ca416236448dc733c20161dd9cc4e08c3c0d3a29a850b5160ea60b78fd3b837a44e0cfd75e3916d0fe304d3bed31b60e258093a9ea1bf15576cce6529246f3b8476c122f2e228d8f8b369e4e912525ce76ade1a6b0a78eb51418100faa4a66313e502949a762ffcc80ba6b368b1f5da092f5986e953f808334e712e19a07105cd53ac5a89041a86fce9ca9b03584fece6149468fcfb19353d6f5cbc69f92b3d8201367695fea2300a16fe95b673426c715e6bc8a13da0122cdf416de0faf80790b0a46d1674bbf1829fa87d0a58ca2a56d0afa709601df8f25f3b2d3e6061f541462ab8c3ee50d988d08ab53bc475b92f6c17c843fda72a5ca90fb191659dbad6",
      "e46832b23d2bd44b45ede243a1ad582d5f411084f1fbba5bc77fba76f2e378040000",
    ],
    [
      "ETag",
      "SiZ4grDVVG7XQWbR/Wv0bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff4bfd3a12d43174891f40504800750c351a438e5b99d36d9d7737cd24fc777b13d1a8897eb9b5ddd3aeefbb5bc1639247e0c322899f4a54d54e8ce6c20601ea32359a1f05e51ac101342266f27a4f54c54db53f18f75e7bc15512cba7cb597c74c48496f79809f057b04c308d34f8b72bc84586dc26292db37c5e670e98aab0c569180c27a79c6714d97c321b8d3add511fd6ceb6311246cc6bfe1f6d776b071e6811e01215e612ed2e85a207946668656a9115293634954aa2861aae5fc48aca4228a206571a07878d5d6fdf73db2dcf73f7da2e8329496112ca999d4d793f3064441ad00bab048f0155872c78599fcf5c4ea25a880d8793d073ebfdbe020a25a968fe2757f0baf782ffc207b671e03b27322a73b3a54e46679ddfc6b1a59fa37a9db0ff83d0868dda22e170dc9f869df1b9e5ee36d2bb95417dae887dd4682ddc6dba07adb6d77c77f598acd3fc1ddfa8121d90822fc72031e02f45aa71fd06929134477a020000",
    ],
    [
      "ETag",
      "X2aypZy3HMDzDRWigcqVUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` != ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85547f4fdb3010fd2a99f70f48a54d7fa5b412621d64235349bb3405a1696a1de79219d238d80e1b42fdeebb3814e8d886142939df7bf7ded9e73c901b9ec76444229ede9620efdf5f8b883408689ae2eaecd7ed993cf754b713cce6e7c2ff727d96ccd2a32344f08aa5e8bac8e04089523250a3c5bc994a5116540a7180850e86f641dbe93abd41df717a9d410f790ab264c2f31b64ffd0ba50a3566babdd4c854833a005574d26d64febadbb4eab90e21a9856ad5dc916aaa8d6ff458f33c1a8e6223f5accd140a9402e614d7986169e9971f461b77493d3753345f01d6740191365ae2b5b5882893ce169294d55327a20c6e68b0f327727ee4968ad243021e3258f571655d67259dc34ac93e9c20ff756745d555ced57896d607d0aa6e7d6aa40033fa802b5b22ecfdcc0b59e01ef8eac636bec9f5a3bb53ddf5af8be3b0fadbde37deb73305dccac8f572f21e83a06a5796e3c8734caa0f2fbb8addeebc3ac0854a3893ab91cd80e6d1fdac32889062c39ecf6a3c486283a8c067dda8d6c36ec412f8e80224f57d50d8be622a77d1a43cce2ce301ec6d1d0b129b387346af7230a6c683b7617fad01f74c8a6417e4aaee194ab42285eef2db90cbcd05d86c1c23f1987ae6923a165a64f6b7355132f7d6a6c1241ffe96b5365b940a5eaa03c3f7483f149e85db8f56c4c20a5ec7e7e8bd391d04c01a2a9a46bd020cf450cd5a598cebdd09bfae30932cc81cfb6084546df1e9e09e17d6176599b37f934998e43a7671c6c2117342b0de6aefe20ed661f119bc6bfcb8c83607c85d2544a7aff470edb710cfd2f0a066fa2dae69322a9d4b6516727eaed440ed97cdfe0d32078cf6a65f275e10657a45e0a200109397b7bb4106c126ffe2eb67717b1787b5146698c719099aa4498847aa0f9dab452b307bdae63b789014bfd2a37e876b62757d5a82ac21a72fdd8517d77cd2656a9523d81308973e87bfe67ccfe0676156e7e3b050000",
    ],
    [
      "ETag",
      "PxqHrMIs32RPSMoNJjHfPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d504d4fc24010fd2fe3d136e1a39648c2414ca3248468b1f1600859b6432db49db23b1591f0df9d2dc6e8c578d99d791fd9f7f608dbbc4a6108ab3cdb35680e1719f2a31b62b44dc156ae9a2a8be001b2ca44f99174fadb4badc7bb701e0d78973ccfdf7bfbd1481456bf62a9607884758e456a61f872844a9528b6e5b2de8a840fb5db26b3a7e82e8a05282975c02c994e6fc6d3084edeb74595d454fc2fd3e2e4c1865631aed160a5d165a80d6d50f3c4d5b3aaac0bf42d3546a38556dc1299a1a65686c817c4bfeef8ddb01f0683ab300c7a8340840569c53955a24de6920e98581531eda51df44560da518aaedbf34de05edbc24d411bed27d7fd830b7e738bafc7c60746fb6048925b74a13be702b7e44ab19465d3a0075ac9ffdfe77cde4f9f77a917ecdc010000",
    ],
    [
      "ETag",
      "zU03k+ccBq6SE7tqUWSx2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "59",
      "72",
      "82",
      "30",
      "0000d0bbe45b99512a4b3f51404019d604f9c900133617020902edf4ee757a8dfaeef0be4156148431ccbb2b79804fb0645b552804872a9a31b5b1c3ed7a63a5397e9c2ad807049edd8dc72e7933dea8d68da9d48c1977ac3d43f181858e757930a8f38ec666aac1980c1ff5808d20504a71f12a0fe1d0c0fe552fe5a62d73bc96a837d7ac9aa084a61ee146ba1931970f6439edef7d2e1e65a7b8d3e7331d6b78534c34257a120c1296d66bd1f6bb32ece6449d271376546df15e71f3737bbedabba311895f5894dd58db729ea368bb1890f8d08a90f0f6f67f811520336d06c270f3da2eee547505feea63be50f2faaf916c2003f8f9056a9adec719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-91-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fa34014fd2b64f6ab6da93c6a9b346b53519bb45481ea6e361b320c171ca50c32438d31fdef7b19acab31d14fcccc3de79e731fbc90075ea66442129e3f36503fffb817093922a0688eafb0bede9569b51e3ff1f12f93b9eceac25dcea65344f09625e9b62aa02745533390934dd8cf6bd154b416a287897ae3616fe85aae3d725cd73e1ed9c89350644b5e3e20fb4ea94a4e068383763f17222f80565cf699d8bebd0f76c783aa16f7c0941c7c941ca08a1c7c2dfab3108c2a2ecae92644038d843a862de5055af8cf4c93d38fa9fb9c6efb3982779c01654c34a56a6d610a26ca8ce74dadb392c90bd136df1d48e82dbd7964305134db322ee9168e8c942a1aabe70a8cf360bd3216fef93a58cda2c5da8fc3f9a5b79af5e7ebe566e587c6eda5177886a249019a6b4c8d537df3f182fa2948c54bad1eb5cfadf26b83169fc7d212505a42178c47a64b8727e638c99211cb4e2c27c94c48929364e4502b31d9d8063b4d80224f8b6a162d45999816359dcc8aed14ecd8b64d88699238b1995a6c38b66c77040ed91f91a79a2b38e3b21292771d22b7c122f2e228d8f8f359e4e91232da14eaac33d616f0dea3c20211f4454dfb36ca052ab5ed5ef89117cce6d1e2c6eb26bc849cb2e7f011679cd14202a2698dcd5350af448a0d23fe6ce59d21584fecea109464f2e785b43d6f5dbc6bf91b3dc201b67695fe92300a16fe85b67340dcd0a2d1905d7720155abec3dad0f5fe2f227149bb2ce47ae305bf49f71440063594ecfb69225807befdd70e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7953db26dfbd8241a5cab4f31c7b10e5d6b73b419610ba57aada85b7c2cb4136be41b0883387e5f776bff0f9cade2f578040000",
    ],
    [
      "ETag",
      "eOQvndpO9wi9X0c6cPG6LA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92514fc2400cc7bf4b7d1d89e81cba8487a1a88b8832467c30841c5bc1cddb3aef6e1242f8eef626a251137db9b5ddaf5dffffdd069eb332051fe6d9f2a546b53e58a219d920425d4ba3f95151a9111c4023964ca6e1432d8f269ebc7a2947c37c7553dde4eeaadb6542274f5808f037b0c850a61afcc70d94a2406e4b48d645396b3207ccbab2c5711c85c32bce0b4a6d3e9c0c06416fd087adb36f4c8511b386ff47db74eb404ef30817a8b04cd0ee5229ca3131a195a94551496c69aa55821a1ab879b15454574211b5b8d23a6bb7dadeb1e7764e3ccf3deab80c4a4a84c9a8647632e6fdc0901132a215ab048f01d5842c78d19caf5cced246880dc361ecb9cd7e5f018509a974f62757f1ba4f82ffc207b673e03b270aaa4bb3a72e0777c16fe3d8d2cf511741dcff4168c346ed9138bced8fe3e0f6de72d39df4dedaa0be57c43e6ab416b60fddd3938e77f8eeea3959a7f93bbe51353a9008be1cd799017f21a4c6ed1b26971c487a020000",
    ],
    [
      "ETag",
      "dIWul2U6lGqnQNjwKpKj4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10",
      "fd",
      "2a",
      "96",
      "27",
      "0448fd214a9ab24a8895926dd14adaa529084da8711337189238d84e5985fadd77760850c1d89f932ad5e77bf7decbdd258ff88ee531eee3054bee4b2ad69f6ef9023730552481dbae5866ebdf8e7574ab86ea68649f4687ab8787e36340305d254956a4b4297929222afbb3692b11bc2c88e0bc0944cdcf9de6817d685bbdae6d5b9d9e057592a6cb11cbefa0fa46a942f6dbed5abb95709ea494144cb6229e3ddfb7579d7621f82d8d946c6f4bb64145b63f163d49794414e3f9f16c0a064a49c59c6684a560e1a5325e7cd9a66e3192b51200af58444914f13257da1650443c5fb2a4148615f71fb1b1f9ea80a7cec81906281434e2229eb3384444a2f9bcb86ba0e178e6057b21c93463b8af137580befae373141660e086482a4374f9ddf11d8446e34bc7df0b81671f8ddc1f0e3a4103ef0c6d09b81e9a799e330dd0dec93efae68f6713747af51a02d663ba2465aace88027ea52dc7d5d1d5f354542a003d35db7d3b62bcd159c60553fa315d2f70fcc130702f9caab3239a90683dbd87de2e492a29a089201955549cf39842c9643c750377ec0d465061da35a91112f77f3dbe1404eb826a83cafc6b2ddb32fa35e082a4a541acaa03de39e8eee0cda6f1779281ef0fae40980841d6ef0bbcab60f026aa4cd68a0758abd551672bb2b6221b6fae37f06b60d8d14a19ff9c39fe15aeae7cbaa482e69191fb6000066c12ff7cd5eabd072c6c3ec84805b1542c925a2412d4a403969947a9aa7b56b7d33bc4062cd4dbdc51577f1ef2f8ddcc934669f8a9105cf854c2bae910d4a4f1c272e8097c3e1a38a3529244d3cc72781249c922a5",
      "c82c057a9e010a43c472a48784c2e06ae2cccda0c2063a253164946d21d3e43ed2f3afcfbb3ad8d58e8c8f6a6cffc9c375d5162d7236f61cd8b13fef02640378050000",
    ],
    [
      "ETag",
      "5rfmyxE48jtCt8L6Bc3vww==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00000002ffedd34b7282300000d0bb642d0e1011e84e04e288c8476cd04d06308e10c59068053bbd7b9d5ea3be3bbc6f5054159592dcae8cb6e0030c856e8fab71c02dc77f9cd4f2784bd5329f64b14ff4ad622429d66a58344182218bb74387c58219bd20ad1799ddc942c5b26af6585588aa373b72ec5b5e0fb28f3fc3c3228a724bb93c100f58eaaef0ca9530344aedd0aeefe7d99cd9a80ccf6536641d8ab032db25f69d6efac0d5a0164fc43a4dcc337e56fa7ce32cf38d0ea7a1987251c86763b08867cf61dff8ed170a3acb542e6687fa95f4d4545078456bcfabb5c8b112e68fdfdefe2f3002b4e7b5a092d4afedd0b0ed11f8ab4f6e03a7afff0e2d0415e0e717a7b3d70319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-93-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fdb3014fd2b91f795be689a3ea46a941246b436dd921484a629b2dd9b6048e3103b650cf5bfefc6a10c84049f62fb9e73cfb98f3c913b916fc8843091de57503e7eb9958c1c11d034c5d7e8c6fb73372fc36bb7e7fe85d9e96277fa3d7b984e11216a96a2db2283969255c9414dd6613b2d6555d052ca16266a8dfbad9ed377ece1c071ece3a18d3c0559b210f91db26fb42ed4a4d33968b75329d30c6821549bcbedcb7b6777dc294a790b5cabce5bc90eaaa8cec7a25f33c9a916329fae433450292863d85291a185ffcc0d3b799bba2de8b69d2278273850ce6595ebda16a6e0324f445a95262b993c1163f3d58184eec29d47169759b5cde39c6ee1c8da504d63fd5880751eac9696e79faf82e52cf2567e1cce2fdce5ac3d5f2dd64b3fb4ae2edcc0b534651918ae35b54ecccdc70bea6f4069911bf5a87eae959f1be4bd1f4b4d4069054d301e761dda1b75c72c61439e8cfa03967481b1111b0e689f75f9d8067bc38022cf881a16cd65ce1d9b21bc1f3318f5621bfa2c1e0ff8267606dc86d190254e9f93fd117928858633a10aa944d321721578911b47c1da9fcf22d79490d02ad3678db1ba80d71e351688a00f6adad7512151a96eb7e7476e309b47dea5db4c780129e58fe13dce38a1990244d3129ba7a15cca0d368cf8b3a57b866033b11f87a022935f4fa4ee79ede255cb5fe8110eb0b6abcd978451e0f9df8c9d03e292669581ec9a0329d0f20dd686aef7bf11894bda64213fd76e704d9aa700122821e79f4f13c126f0e9bf76587cc4e2eaa38cd278c7dde1aa16e125343b244cb9cfeca13d70c6c7c4804bfd2e361a740f5dab73d419610bb97eaea8597c2cb411abd40b0883387edf746bff0f2b38e49a78040000",
    ],
    [
      "ETag",
      "ThIxkCrSYE1EzeABLvBKlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "40",
      "0c",
      "c7",
      "bf",
      "4b",
      "7d85c4293225d903d3e988db740c7dd098e584824ca07877b82ccbbebb3d9cd3a889be1c6df9b5f4ffe7d6f09c570978f098672f0dcad55e867a6a8210555368c58f9a2a8560016a9131e904c3acdb596977ba4cefb2d9e5edb2a9177eafc7848a9fb014e0ad21cdb1481478f76ba84489dc1653d194d5bccd2cd0abda146751184c2e382f2931f9e46634f2fba3016cac5d6322b498b7fc3fda1e36162ce831c4142556319a5d6a490b8c7560642a51d605da8a1a19a382166e5f64929a5a48229b2bf6c9a1dd710f5da77be4bace41d761b0a058e89c2a666f66bc1f68d2a20869c92ac16540b6210b4edbf395cb79d20a316130895ca7ddef2b20312699ccffe46a5ef749f05ff8c0b60e7ce744494da577d4f9e8caff6d1c5bfa39eacc8f063f08a5d9a81d1205e3c12cf2c7d7867bd84aefaf34aa6b49eca342636167df393eeabafbefae9e92719abfe369d9a005b1e0cb31cc3578a928146ede00e4f69d8f7a020000",
    ],
    [
      "ETag",
      "4IHg71yt6QwfZgSKVwupjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85540d4fdb3010fd2b912724904adb3469fa2121d695c0a29514d214c4a6a9751c2718d238d80e1343fdefbb3814e8d8408a949cefbd7befec731ed12dcb633444114bef4a2a1e3eddf0083510553885d5739797df6f26f7c7bdeeec722ac393f16fd24b0f0e00c12a96c4ab22a3fb92978250399ccf9aa9e0658105e7fb50687f60ef9b8ee5d8bdaee3d89d9e0d3c49b364c2f25b605f2b55c861abb5d16ea69ca719c505934dc257cfebadfb4eab10fc8612255bdb922d5091adf7450f334eb0623c3f98cfc04029a958d0156619587861c6d1e7edd24d8657cd14c0f78c504c082f7355d9821284e7094b4ba1aba2e123d2365f7da0993b71c7a1b1149470112f58bc34b034168be2b6618ca7733fdc5de2555571b957253681711c4c4f8d650106aeb1a472695c7e7503d73026d34b37d87d4e006be27d738d4363e41f195b329e6fcc7ddf9d85c6eee19e71124ce767c697abd7106820a652b15cdb0f7194d1cafad30e7b6fcfb5226005b27572d16b3bd8ecb7075112f548d2b7ba51d2a651d48f7a5d6c456d32b0a91d4714034f55d5350be73c8f4d6276b06559ed8ee99883c4c15db34f2c2789ad8135e80eac7e3bb1ba18a37503fd124cd123260b2e59bdcde832f042771106737f3c0a5ddd4682cb4c1dd5e6aa265efb54d02480dee96b5d651907a5eacc3c3f7483d138f42edc7a4c2634c5e46176078392e04c5240638157545171ca63d83474369d79a137f5471360e8b33fdb20241afe787c21840f85de65a5df6816069e7fa20d6c1017382b35e4befe403bb82876d07addf87f9951108cae401a0b811ffeca413b8e5dd1ff21a1f13aaa6d6e244d54a96da2ce56646f450e5aff5cc3d34070e56a65743e77832b542f0534a182e6e4e3d102b04e7cf8e7d85c63c0c2450619a920864126b2122182d603cd56ba959addb31ddb3191060bf526e7b4cdcdc95535aa8a744573f5d4517d8df52656a9523e83200973e8eb435cff01f791eb0a46050000",
    ],
    [
      "ETag",
      "QEouZjLvF75SWOsTGCzc7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d90414fc2401085ffcb786da3855a94848398464948d5227a30842ccb500aed4edddd422ae1bf3b5b0c31f1e2657766de37d9f7f600db5c2da10f8b3cfbac51371719da1757a468eac21abe2a5206c103b422633231fb9bb7af61b3be7c9f04328d0daae4e96e3060c2c8359602fa0758e5582c0df43f0ea04489bc369f575b466c53b96e94bcc60f71ca8392966e904cc7e3bbe13886a3775e1125d5cafe6b6976f460438b1457a85149741e2a4d1b9476e4e219515605fa866a2dd1400bb742a6a9ae8426f279e2df867e1075a3b0771d4561a717325890143627c5ec74c2eec09215454a7b4e075d06745b72d0557bee78dc6953ec5ac059fbad0567adf3470bcf5ae0b4d9cf63c3c6a279d6c4ce0d3ad357a700f7e442590e6b758d1e48c1ffff98db537ffc06c6c847c0dc010000",
    ],
    [
      "ETag",
      "Nsw8VzByh/WS1cREsenNOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "ff",
      "ed",
      "d3",
      "59",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bbe45b1d16b7f42f5802a5455994ed27c3120aa288841a62a777afd36bd47787f70dd23ca78c91e1d2d016bc00912a7096cfdebbb586799557fde82a4102f542504d126111f39befb093914ab2280fb293c47c19287e7241721da3e9d585e5c996c479e7f907b61dbde453b7f1dbbef147b16fc27abeb11354f31d67f1dc2491f94acab37f477b9df09b0b45b042683016dad771c38f53eaf38f1c660ddcf6cbd8d6745c94177e1fb16955aea7e22bf7149cb5831d3a566456d14a35ef6da6b316cad8b9752444085aa83144c82d675caf13cb2d664f4fff1798003a76754f19a91fdbd5058413f0579f0ca2a38fff1a4d7bda839f5fdb18e44a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-95-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6fda3014fd2b91f75a2081400009ad8ca62b12842d8456d334458e7393ba0d71663bad50c57fdf8d53ba5695daa7d8bee7dc73ee479ec83d2f53322509cfffd6200f5fee4442ce08689ae3eb619c6a9d4a47dff26f13996d1e3775c6f2d90c11bc6129baaf0ae828514b066abadb767329ea8a4a213a98a83319769cd160e47ac3d1c8ed7b2ef21414d98a97f7c8bed5ba52d35eefa4ddcd85c80ba015575d26f62fefbd877eaf92e20e9856bdb7923d5451bd8f45bf168251cd4539db6dd140ad40c6b0a7bc400bff996972fe367597d37d3747f0036740191375a91b5b98828932e3792d4d56327d22c6e6ab03d9fa2b7f11594c14f5be8c4bba87332ba59ac6fa508175196ed6d632b8dc84eb79b4dc04f17671e5afe7ddc566b55b075bebe6ca0f7d4bd3a400c3b566d6b9b9057841fd1494e6a5518f9ae746f9b941cbf763690828ada00dc69e3da2ced89e2459e2b16c3c1826990d49324ebc211d24369bb8e0a60950e41951c3a225d6eca43072fa107b8eebc5ae3db163ca321a3bfd893da1b6dbcf062e399e9147c9355c705509c5db0e919b7019f97114ee82c53cf24d0919ad0b7dd11a6b0a78ed51638108faa0a66313e502959a762f83c80fe78b6879edb7135e414ed961fb17679cd14201a2a9c4e669906b9162c348305ffb17083613fb710a2a32fdfd449a9e372e5eb5fc851ee1001bbbda7cc9360a97c17763e784b8a6456d200fed815468f9166b43d7c73f88c4256db3909f3b3ffc45daa710329050b2cfa7896013f8f45f3b2d3e6271f5514669bce3ee30d5883009ed0e7153ee33db73bdbee7100396fa5dcceddba7ae35399a8cb087523f57d42e3e16da8ad5ea0584411c7f60ba75fc07807b246478040000",
    ],
    [
      "ETag",
      "y8dttdr1thiB9rfOwOufcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d926f4fc2400cc6bf4b7d3b227fc6d025bc188a4a02086324248690632b30d8d67977d310c277b737118d9ae89b5bdbfddaf5797607d8c559042e2ce3f57381727fb1463d36818faa48b4e2474e9942b000b5583339cb372fb3ddd568336cd42f6b9e7c1c8cb3c16bbbcd840a37980a700fb08a318914b84f07c8448adc165252a4d9a2cc2cd0fbdc142781df1bde739e5264f2e1b4dff73afd2e1cad736324b45894fc3fdae6470bb6b4f4718512b310cd2eb9a42d86ba67642a91e609561415324405255cbe584b2a7221892a5ca95c372b35a7e1d8ada6e3d8f596cd6042a1d03165cc4e27bc1f68d222f1e9955582c3802c4316bc2acf172ec75129c484bd61e0d8e57e5f018921c968f12797f3ba1bc17fe1033b39f09d132915993e5377fd47efb7716ce9e7a85b2fe8fe209466a3ce48d01b7427813718196e7e92ded96b542349eca3426361ad6a5f355b4ef5ddd51b324ef3775c2d0bb420147c391e620dee4a240a8f6f2c372fa47a020000",
    ],
    [
      "ETag",
      "XphvXk8PhN32/1ArOMQnMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85540d4fdb3010fd2b91272490fa95a64d3f24c44a9bb1682565690a42d3d43a8e534c9338d80e08a1fef75d1c0a746c20454acef7debd77f6394f68c3b2080d51c8d67705158f5f6e79886a882abc86d587f6e9c326bdf4c2783a626342497f22fa0fc7c78060254be2344f685df242102a878b79632d789163c1791d0ad50776ddb42dbbd3ebda76a7ddeb004fd2249eb26c03ec1ba572396c3677da8d35e7eb84e29cc906e1e9cb7af3beddcc05bfa544c9e6be64135464f363d1938413ac18cf8e17733050482a9634c52c010bafcc28fcba5fbac170da5803f89e118a09e145a64a5b5082f02c66eb42e8aa68f884b4cd371f68ee4c9d7160ac04255c444b16ad0c2c8de532dfd48cf16ce105872b9c9615574765621718dffcd9b9b1cac1c00d9654ae8cabef8eef18c67476e5f8872f09604ddd1f8e71628cbc89b127e37ac6c2f39c79601c9e1c1967fe6c71619c5ebf85400311958a65da7e80c38496d69f77d87d7fae25012b90ad92cb5ecbc666bf3508e3b047e2bed50de3160dc37ed8eb622b6c91418776a29062e0a9b2ba66e18c679149cc36b62cabd5366d7310dbb86bf68965c79135b006dd81d56fc5561763b4ada107c1149d309973c9aa6d4657be1b38cbc05f78e351e0e836625c246a52992b9b78eb53419300faa0af6d99651c94ca3373bdc0f147e3c0bd74aa3199d235268ff33b1894182792021a0b9c5245c5398f60d3d0c56cee06eecc1b4d81a1cffe62879068f8ebe995103ce67a97957ea379e0bbde9936b0435ce2a4d090fbea031de03c3f40db6dedff6546be3fba06692c047efc2b07edd89d92fe0f098dd75165732769a2526d17b5f7a2ce5e64a3edef2d3c350457ae52463f178e7f8daa259fc654d08c7c3e5a00d6894fff1cbb6b0c58b8c8202315c430c844962244d06aa059aa5ba9d8bd4edf6c5b4883857a976bdbe6eee4ca1a65459ad24c3d77545d63bd8965aa902f2048c21c7afa10b77f00efb0f1e046050000",
    ],
    [
      "ETag",
      "w2BwkmVNbfLAiCcec8Dr8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcb786d130bb544120e601ac510c422f1600859ca500b6da7ee4e5120fdefce16d39878f1b23b33ef4df67d7b867d5a6ca00feb34f9a8501faf12e4675b4468aa8c8d5c251506c10164958873e17d99d75332e3f094f88f4f0a8314e7c3c1401c267ec75c41ff0cdb14b38d81fedb190a95a3acad56e55e2c7c2c6d379ebe84f76124839c3676305d4c26c3d12484da6957544e55c1ff5a5ad60eec681de116351631da0ca5a61dc63cb67846e56586aea14ac768a0313742a2a92a95267265e2de06ae177403bf7713047ea7e78b31a358714a85259f4b3a60629545f42974d015836e4a01dd36e741c69d86e2d0186cb4df9ad76a9d3f9adf6a9ed5963f8f8d8e8c66a649921bb4a1af2f007764a158605957e840ace4ff1f52bef4f537fa162b7cdc010000",
    ],
    [
      "ETag",
      "U1xsWzgPtEzg4JOae6ieSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "4b7282300000d0bb642d8ed5114977fc0b02453e7ed86420060928a40125dae9ddebf41af5dde17d831c63d2f768e81ad2827770cfe7708aa76ba668d658e50e35e1556e9636a7e182f9ba10bddb6de3b4ab0afbd8e98dd348ee69fda6c975b083a29cd5586eca79154437145f469a248af087918f37b28a12d17f486a6c8735848f31c107a97a64f9d193cf344e5369b332b63c15979d8464b5ab39f912574dd96243a5ce5a41b313476566d5a6454f850c0f8ce966ec41a1750d0addca296e9f46bbf12c76de73c3cc42ac0407d246b1bf27aa033926eeae45fdf4e5e5ff02134004a39cf4883eb72f96104ec05f7d34dc1979fed748ce09073fbf0b16bd4d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-97-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6fa24014fd2b64f6b58a22829a98ad6be9d644b1456cb3d96cc8305ee8b4c82033d898c6ffdecb50bbed6ed23e3133f79c7bcefde0993cf27c434624e6e9ae82f2f0ed41c4e48c80a229be7abb1f37ebb2dcdd1ed8d284bd675df7c287a7f11811bc6649ba2d32684951950ce468bd6aa7a5a80a5a0ad1c244ada1dbea3a3dc776fb8e635bae8d3c095932e7f923b2ef952ae4c8344fdaed548834035a70d96662fbf66eee2db328c5033025cd8f9226aa48f373d1ef99605471918fd72b3450492823d8529ea185bfcc4d7cfe31759bd36d3b45f09e33a08c892a57b52d4cc1449ef0b42a7556327a26dae6bb035979736f1a1a4c64d5368f72ba85336343158dd4a100e332582e8c997fb90c169370b6f4a3d5f4ca5b4cdad3e57cbdf057c6dd95177886a271069a6b8c8d737df3f182fa1b908ae75a3dac9f6be5d706cdfe1f4b4d4069094d30723b0eed0e3ac338895d960c7afd38e9401c0f62b74f7b71870d6db0373150e46951cda2b9c8693f19c0308108fa4316d95dcb8aa81543d44dfa9663395d009b91e319792ab9820b2e0b2179d3217217cc422f0a83b53f9d849e2e21a155a62e1a637501ef3d2a2c10419fd474aca35ca052ddee991f7ac1641ace6ebd66c27348293bac7638e3846612104d4b6c9e82722136d830e24f16de0582f5c4ae4f414946bf9f49ddf3dac5bb96bfd1431c606d57e92f5985c1ccffa9ed9c10b734ab3464df1c488196efb136747dfc83485cd2260bb9597bc12fd23c0590400939fb7a9a08d6812fffb5d3e22316571f65a4c23bee0e93b5082ba1d921aecb7d65bbf660e83844834bf56f6cd871dc53d7ea1c7546d842ae5e2b6a161f0b6dc42af906c2208edfd7dd3abe008163a3d678040000",
    ],
    [
      "ETag",
      "EqBQUrrqVycO/evE2P3Tjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d926f4fc2400cc6bf4b7dc9087f1c4397f00214950410c7484c0c21c75660b0ade3ee262184ef6e6f221a35d137b7b6fbb5ebf3ec0eb089d2105c9847cb6d8e727fb144fd64020f551e6bc58f8c528560016ab164b2b41954e2ed2ed7cf152c5536a37a5797fc5dabc5840a569808700fb088300e15b82f07484582dc16509c27e9acc82cd0fbcc14c7bed71bde739e5068f2e1a4df6f77fa5d385ae7c65068312bf87fb44d8f16ac69eee10225a6019a5d32496b0c74cfc85422c9622c2bca65800a0ab878b1949467421295b952be6e966bcea563371b8e63d79b36833105424794323b19f37ea0498bd8a31dab04870159842c78519caf5c8ec24288097b43dfb18bfdbe02120392e1ec4f2ee3755782ffc2077672e03b2712ca537da6eefa8feddfc6b1a59fa36edb7ef707a1341b7546fcdea03bf6db8391e1a627e99dbd463592c43e2a3416d6aaf655a3e954df5dbd21e3347fc7d532470b02c197e321d2e02e44acf0f80690465ec37a020000",
    ],
    [
      "ETag",
      "+kM/lqwutX/e+/kP2Et+Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffd553ef4fdb3010fd572cef0b68fd4159974227c40acd58b43629490aaa106a4de2068f240eb653a9a0feef3b3b2da563639f27556acef7debd77e7f3337e60798cbbf88e258f2515cb0f3ff91dae61aa4802a7995036172eb19f9e161f3d3639b2fb8b83dec90920986649921529ad4b5e8a88caee386824829705119cd7a150fdf8a8deb23e59edce67cb6a1f76dac093349d0f58fe00ec7ba50ad96d3637da8d84f324a5a460b211f1ece5bcb9386c1682ffa49192cd5dc926a8c8e6fba2a7298f88623c3f190760a094544c6946580a16b6ccf8eeeb6ee90623592301f082459444112f73a56d418988e7739694c254c5dd676c6cbefac0813db0cf43341334e2229eb278868844d369f15043e7ded80df76624d31567fb3ab109d037df1ba2590106ee89a47286aebfdbbe8dd0c0bbb6fdbd995460112803e7878d4e51cfeda31d0dc74563d7b58310ed9deea30bdf1b8fd0d9e43504dcc7744eca54f5890209a55dc7d5a7a3af5451a900b49eb7f3f696f14a6719174ce94e1d37b4fdde79e85cd9d570073421d1327884f1ce492a29a089201955540c794c8132f20227743cb737008699d8688390b87bf3bc2584cb826a83cafce3d019426fbde108af56b5bfc37abedf9b4069220459fe9603bb565bd3b7ec2b92960662f026aa6c2caa046e61adb6890e77a2f64e64e1d5ed0a7e350c8b5829e3cbb1ed4f7075e4d33915348f8cdc3b23366093f8e77bda2c376061bd4106764431a95824b54824a849872c33ad54ec4efbb873d0c2062cd4db9ca52bd33cfe6366ad519afa54082e7c2a61a174086ad2786139cc84c597e63decb87c5c1f65544a92e8f22e471951d13dcb13245992436d41d19c0b342ff348d3aafd3747442465467385f485ca2e7ad989060acaa2e042d1785b0500d5d30942df712ff6bfacc3b3496807f0f414ba69758f5ab7ba29d34a75f3ff6f1bb7d5e5683f7dcfb561d37f0137c95e4ce3050000",
    ],
    [
      "ETag",
      "mrtEorNaEzzv+OiY8EDv0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad8e0202e94e04c796bfb5485799100285a8c404844ca777afd36bd47787f70d3021544ad4778c5ec10b5058830bb2f0b9edecc63a198dcf31bec23bf6dc253bd5217ab58cc2c26e24957d343676dca45d168a6890c2f3e15677b765432ccee429aaacc3bb3af707ff43cdcf696b5662376cd8cd34ed3c71f49b35565c1b32a8c248c5a5a70adac55570eb368c407e38deb5205bb100aff5ba0f903e25f37429b163a2a6d3684b86a4d8b791ab2669f497a909f3af5384c84592f38a439fb77b28629de46fad9915d7a3e1ae4a962e6b962f9e9efe2f300374e28da012358fedfa1ac219f8ab8f7ac5e9e3bf43b1a002fcfc02f7d4f4ca19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-99-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d4fa34014fd2b64f651db424ba16dd2ac4d456db6a52ba5ba66b321c3f482a3944166d0744dfffb5e06eb6a4cf48999b9e7dc73ee07cfe49ee71b3222314f1f2a2877dfee444c8e09289ae2ebafa3a3dd8fbf32bd75aee685b93bbf4c6fb2793a1e2382d72c49b745062d29aa92811cad57edb41455414b215a98a8351cb62ca7e7d86edf71ecae6b234f4296cc797e8fec5ba50a39ea740edaed548834035a70d96662fbfade79ec768a52dc0153b2f35eb2832ab2f3b9e8f74c30aab8c8c7eb151aa82494116c29cfd0c27fe6263e799fbacde9b69d22f89133a08c892a57b52d4cc1449ef0b42a7556327a26dae69b035979736f1a1a4c64d5368f72ba85636343158dd4ae00e32c582e8c997fb60c169370b6f4a3d5f4c25b4cdad3e57cbdf057c6f585177886a271069a6b8c8d137df3f182fa1b908ae75a3dac9f6be59706cd3e8ea526a0b4842618b9a643ad81398c93d865c9a0d78f1313e27810bb7dda8b4d36b4c1dec44091a745358be622375d6b6853b31751c781c8b6066e1443d28f92016556d2b56dcb8dc9fe983c955cc129978590bce910b90e66a11785c1da9f4e424f9790d02a53a78db1ba80b71e151688a04f6adad7512e50a96ef7cc0fbd60320d67575e33e139a494ed560f38e3846612104d4b6c9e82722136d830e24f16de2982f5c47e1e82928c7e3f93bae7b58b372d7fa58738c0daaed25fb20a83997faeed1c105734ab34e4b13990022ddf626de87aff0791b8a44d1672b9f6821bd23c0590400939fb7a9a08d6812fffb5c3e22316571f65a4c23bee0e93b5082ba1d921aecb7d61bb7dd31aba44834bf521d61df60f5dab73d419610bb97aa9a8597c2cb411abe42b0883387e5f776bff0f4a0ced6378040000",
    ],
    [
      "ETag",
      "X++yKzsgh6VLp0yGQgYlLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92514fc2400cc7bf4b7d1d09e81cb0840754d4258830467c30849c5b19d3db3aef6e28217c777b13d1a889bedcdaeed7aeffff6e0b4f5991800f0f59fa5ca1da1ca5682636085157d2687e9454680407d08894490c6457beae0761873a61abf53c99dc35a769afc7848e57980bf0b7b0cc50261afcfb2d1422476e8b495679b1a83307cca6b4c5691406a32bce734a6c3e9a0d87fdb3e10076cea13111462c6afe1f6df39d038ff410e212151631da5d4a458f189bc0cad4222f253634552a460d355cbf481555a550440dae34badd46cb3bf1dcf6a9e7b9c76d974149b1301915cccea6bc1f18324286f4c22ac16340d5210b5ed6e79acb59520bb161308a3cb7deef2ba03026952cfee44a5e7725f82f7c607b07be7322a7aa3007ea7278dbff6d1c5bfa39eaa21f0d7e10dab05107240a6e06d3a87f33b6dc7c2ffd6c63508f15b18f1aad85ada6db396d7bcd7757cfc93acddff18daad08158f0e5b8ce0cf84b2135eede00bb78f5ad7a020000",
    ],
    [
      "ETag",
      "eIl9lxvER8o8R11qQQW0Sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54",
      "6d",
      "6f",
      "da",
      "30",
      "10fe2b96f7a5d5ca6b29b44c554769d645834093d08a551598c449bd9238d80e13aaf8ef3b3b504af7d2cf9390e07ccf73cf73e733cff889a5216ee3198b173915ab0f3ff80c1f61aa480ca7fde5f7d3a47ae27decce52d2138be8a7bb68c5e7e780609a254992cd6949f25c0454b6475e39163ccf88e0bc04854ab56ab5546b1e371bad9366b3516f358028e93ceab1f409e88f4a65b25da96cc5cb31e7f19c928cc972c09397f3cab25ec904ff4103252bfb9a1590919577542fe63c208af1f47ce481835c5231a1096173f0b0a386b3cffbb5cb8c24e518c04b165012043c4f95f60525029e462cce85a98adbcfd8f87cf5037b56cfeafa682a68c0453861e11411892693ece908750723c73f989244579c1eeac436405fdc411f4d3330f04824955374f7d5722d847a833bcb3d984a051681d2b3bf59e802759c2bb4a7613b68e43896e7a3838b4374ed0e464374397e0d01f7218d483e5757448184d2aec3e2a7ad2f5551a900b419b8fdfb3de3b5ce322e98d29dda8e6fb99dae6fdf5ac5707b3426c1ca5bc07823329714d04490842a2afa3ca440190e3cdbb7074ea7070c33b1e1162171fbfe7947f05719d50695f9c6bedd87de3afd215eaf8ffe0eebb86e670ca5891064f52607769b0d4ddfb16fc93c371083375161635924700d6bb56d54df8b1a7b5113af1fd6f039c2b0898532be1959ee1817472e8da8a06960e4fe3162033689f75fd476bb010cfb0d3ab0248a49c502a95502414dda6789e9a560b74eaa67ad636cc042bdcdd5aaf533fd3790867fcc6c3472539f0ac1854b256c940e414d1a2f2c85a1b0f0c63c883d978bcd5142a524b12eef709410153cb2344692c529d41614455ca0284f034d2b1e80392222ce139a2aa46f54b6d1cb529491976719178a86bb2a0028de",
      "8ee7bbb6737df869135e8e7dcb83b7a7d07dad7d5a7bd04d99568aabff7fdb78282e47fbb91a3816acfa2f533d637ee6050000",
    ],
    [
      "ETag",
      "MvZ8m05S+CbnaLrqfwRq7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "bb64ad4c8aa8d05da04a15511448c10d93604034ca278240a7772fd36bd47787f70d481c3321a2477e6577f00e3a226b522c51888206f6ded6dc770de2f6d6a68be7cac30a3159fa66b4fbd3698d53cb29e616e51aadc7075c319124f8005d56a865e8de8473accf324ac3de6c83e44b367447cc4ae44f8d6463e4c8d6e9472eb7f6ae80d035920bdc958d7ef59f18cb77733ebf69f8d33bda4d18a6467e6928d3d4252d794dea7ea17a354ddb9928d535c92bcb3af85c952717e8c02c3aab8a89dde9f6eed25db09cad2a2eb2cd1ae9312f9e6385fb444f7cc22b24bdbcfc3b6004585b6443d5281bb64fa69a36027ff5a34757b0e1bfce48c52af0f30b6f51801019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-101-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7b5c9390044212295ab3947654816c84b49aa60919e742dd124cb149d555f9efbb98a66b55697dc2f63de79e733f782277bcd892294978765f43f5f8e95624e48480a219bed65fff5c3e5010c3ec727971eef99f8b6a1fcc673344f08625e9aecca123455d3190d3cdba9b55a22e692544071375fa66bfd31f0d4796638f46d6c0b19028214f97bcb843fa8d52a59cf67a47f16e264496032db9ec32b17b79efed07bdb212b7c094ecbdd5eca18cec7da0fa25178c2a2e8ad9668d0e6a09550c3bca73f4f08fba4d4edfe6ee72baeb6608de730694315117aaf185299828529ed595ce4aa64f44fb7c75206b77e92e228389bcde1571417770626ca9a2b17a2cc1380f57bee105e7abd09f47de2a88d78b6fae3fef2e56cb8d1fac8deb6f6ee81a8a263968ae31334ef52dc00bea6f412a5e68f5a8796e949f3be4bd1f4c434069096d3076cc11ed8fcd4992260e4bc7433b494d489271e2d87498986c6281b54d80224f8b6a162d4431ea8f1d0c4f6233b107b1e598104f0693241e52d3b2b7963db4529b1c4ec843c5159c71590ac9db0e91ebd08bdc380a37c1621eb9ba8494d6b93a6b8d3505bcf6a8b04004fda7a64313e502959a767b41e486f345e45db9ed84979051f6b8bec719a7349780685a61f31454bed862c34830f7dd3304eb897d3f062599fe7a224dcf1b17af5afe428f70808d5da5bf641d855e70a1ed1c115734af3564df1e4889966fb036747df88d48dcd2360bf9b171c39fa47d0a21850a0af6f13411ac031fff6dc7cd4730ee3eea4885775c1e261b155641bb445cd7fbcc76ecbed51f120daed4fbd864726c5b93a3c9083b28d47349ede663a5ad582d5f4018",
      "c4f907ba5d87bfd32b89917b040000",
    ],
    [
      "ETag",
      "uBzJwaeo3gJLGFIM+nrvNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "40",
      "0c",
      "c7bf4b7d94259b2233247b608abac8a632f6b018b39cd0211328de1d5bc8b2ef6e0f751a35d197a32dbf96feffdc169eb33201171eb3f4a546d91ca4a8ef4c10a2aa73adf85151a9102c402d5226e7e9a1575ccc9ba3e12438f7aed7eb951ff5378301132a7ec24280bb85658679a2c0bddf42290ae4b698f2ba28176d66816e2a539c46e16872c9794189c927b320f086810f3b6bdf98082d162dff8fb6879d052b7a0c718912cb18cd2e95a415c67a64642a5154397614d53246052ddcbe4825d59590441dae747add5ea7e71c3b76ffc471eca3becd644eb1d019950ccfa6bc2068d2220f69c332c16140b6212b5eb6e79acb59d22a31e168123976bbe05740624c3259fcc955bcef93e0dff081bd5bf09d1305d5a5de5317c18df7db38f6f473d4b917f93f08a5d9a93d128dc6fe34f2c6b7867b78973e6c34aa5b496ca442e361af6b9f9ef49dee9bad6764ace6efb85ad668412cf8765c651adca5c815ee5e019493679d7b020000",
    ],
    [
      "ETag",
      "Yg+AmFYy2BNLDAKvvjET7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10",
      "fd",
      "2a96270448fdb196b6a04a8815085bb4929434a1aa26d4b8891b4cd338d80e5387fadd777608d0c1c69f9322c5e77b77eff9eeec47bc64598cfb78ce92fb828af5a73b3ec7354c154960b77b743f19b5d7ade04a4c96bfd677ddabcb83f9cfe36340301d25c92a4f695df2424454f683712311bcc889e0bc0e89eaadcfed7aab77d0eb1c767bbd4efbb0038192a68b21cb96107eab542efbcd6645de48384f524a72261b115f3def371fdacd5cf03b1a29d9dce66c028d6c7ec07a92f28828c6b3e3600c0a0a49c58cae084b41c34b683cffb29dbbc1c8aa9100f881459444112f32a575418a88670b9614c264c5fd476c74be5ae0b135b4ce7c140a1a7111cf581c2222d16c962f6be8cc0d1c7f2f242b9d31dcd78eca40179e7b89c21c04dc1249658826df2ccf4268e84e2cef55ccd0fe6ea1133470ced11689eda0c071acb18ff64ef6d157cf0d46e874fa1a02f263ba2045aace89020ea565c7e5d2d65d55542a003d55dc7edb68bcd15ec60553faa8b6e35bdee0ccb7afadb2ba439a90683dbe87fa2e482a29a089202baaa8b8e4318590913bb67ddb7506438830251b550889fb3f1e5f02fc754eb54065fef862e80efc5ec728a820d7242d0ce6a15ce09d56a3dbd9c19b4dedef89069e379802391182acfff0c18134c5bb1c066fac5268c5d9c29aadb2da5b5667cbeae1cdcd06be1a86612d99f1556079535c6e79744105cd2243f78f2618b0717c7ce9aa0b0060b802c02315d852b1486a964850e3f6d9ca9ca58c3eecb65bbd163660a1defa8e7afaa5c8e2773d4f1c85c94f85e0c2a312664e9bc0268d16964151e025a9e1159592243a4d90c1512425f394223319e8b909280c11cb90ee120afde9c89a3d8d435843a724",
      "46312f749429741f95535059bba5b9ab85193965fbfeaf949bb2489aebdc752c18b9dffc3c1d8091050000",
    ],
    [
      "ETag",
      "58qWP2y1UQrWkzyj5QM3bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "ffedd3417282300000c0bfe4ac0e0920d29b808802629406f1c2440c8a168c8001ecf4ef75fa8dba7fd86f40d394d575d2dcaeac041fa0a7481fa5a38334dd09e919ae9d31c62771628440654eed188bbca06de439677ef526bdb82c5de4c067ab5fc2a87848c16e29afb568a5118b737701a5d645a6d0ca22dbfa29e6f9d1f4c713326752e8d89b40ce20d12d7f3b3d42a2ba5ad71864117fd299d5ab5ea8d98da8ab36b0270dbaaa068f4319a304a5c835a3e43cc3a5f2a52af0f1b44a6f1f0d2f0912c3ea5e8cb1999721bc0f6fb2ef7b870ac641adae029beeb7bbc8703baa6419499dd3e8ededdf0103c03a9e57ac4ef2d77659d5f501f8ab9f343d67afff06a315abc0cf2fe53cdcbe19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-103-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbda843c088f48d11aa5748d94908d9056db3421632ed42dc1149b4e5995ffbe8b69ba5695d64fd8bee7dc73ee832772cfcb944c49c2f38706eac3a73b919033028ae6f8baf01ffe88cd4de95dfd684607f360e73573e7b3192278cb92745f15d093a2a919c8e96edbcf6bd154b416a287897ac3c1b837b4c7b6e54c6cdb1a3916122514d98a97f748bf55aa9253d33c89f77321f20268c5659f89fdcbbbf93832ab5adc0153d27cab69a28c343f50fd5c08461517e56cb745078d843a863de5057af8474d93f3b7b9fb9ceefb39821f3903ca98684ad5fac2144c9419cf9b5a6725d327a27dbe3a90adbff21791c144d1eccbb8a47b383352aa68ac0e151897e1666d2c83cb4db89e47cb4d106f1757fe7ade5f6c56bb75b0356eaefcd037144d0ad05c63669ceb5b8017d44f412a5e6af5a87d6e959f3bb47c3f989680d212ba60ec0c6c3a74075e92250ecbdcf124c90690246ee24ce8381930cf022b4d80224f8b6a162d45697b605b088959e665b135612c4ebccc8b471eb3ece1d01ab8e9841ccfc8ef9a2bb8e0b21292771d2237e132f2e328dc058b79e4eb1232da14eaa233d616f0daa3c20211f49f9a8e6d940b546adbbd0c223f9c2fa2e5b5df4d7805396587ed03ce38a3850444d31a9ba7a05e8b141b4682f9dabf40b09ed8d7535092e9cf27d2f6bc75f1aae52ff40807d8da55fa4bb651b80cbe683b27c4352d1a0d79ec0ea442cbb7581bba3efe42246e6997857cdbf9e177d23d8590410d25fb789a08d6818fffb6d3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb7d663b93d1c4d5ffaaa2b57a17b35de7d4b636479b11f650aae792bacdc74a3bb146be803088f30f74bb8e7f01bc0f1f957b040000",
    ],
    [
      "ETag",
      "CEqzoOWn9HZu2y/y6grc8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bf4b7d1d09c83670890fa0a8c3810ae3c918726cdd186eebbcbb6908e1bbdb9b8a464df4e5d676bf76fdff773b78ccca183c5865e9538d727b94a2be33c10c559d6bc58f8a4a8560016a9132e9f7d34d57042763915e38fdf1e469e59c5cdf9d9e32a1a2351602bc1d2419e6b102ef7e07a52890db22caeba25c3699057a5b99e23c9cf9d34bce0b8a4d3e5d04c160188c606f1d1a63a1c5b2e1ffd1f6b0b76043ab192628b18cd0ec5249da60a47d235389a2cab1a5a896112a68e0e6452aa9ae84246a71a5d569775b1db7ebda3dc775ede39ecd644e91d019950c2fe6bc2068d2229fd10bcb049701d984ac3869ce672e6771a3c484fe3474ed66c1af80c48864bcfc93ab78dfb5e0dff081bd5bf09d1305d5a53e5017c1cde0b771ece9e7a8f34138fa4128cd4e1d90d09f8ce6e160726bb88777e9c3ad46752b898d54683cecb4edbed373db6fb69e91b19abfe36959a30591e0db719569f012912bdcbf0245766e917b020000",
    ],
    [
      "ETag",
      "I8gj3aL9JagF58JMqb59KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc5547f4fdb3010fd2a96270448fdb196904a95102b906d1125e9d214544da8711337b84de3603b6c15ea77dfd92140051b7f4e8a943bdfbb7bcf77973ce215cb13dcc77396de97546c3e2df91c3730552485d32e934bdfbd1c9f7597fc3a5b5dfeb27fdf25e9c9092098ce92645d64b4297929622afb93712b15bc2c88e0bc09859a9dcf56b3631fd956efd8b6ad6ecf824449b3c590e52b48bf53aa90fd76bb266fa59ca719250593ad98af9fcfdb0fdd7621f892c64ab67739db4023db1fb09e663c268af1fc64320605a5a46246d78465a0e12535997fd9addd6264dd4a01fcc0624ae29897b9d2baa044ccf3054b4b61aae2fe23363a5f1978ec0c9df3104582c65c243396448848349b15ab063af7275e781091b5ae181dea40eda0af817f85a20204dc114965846ebe3b8183d0d0bf71828308ea1c22cf0fd1d0bd74d0291a78176887c4f5d0c4f39c71880e4e0fd1b7c09f8cd0d9f43504e4277441ca4c5d10051c4acb4e2ad3d55355542a003d75dc7d3b68bcd551c60553faaaae173ac1e03c74af9daabb439a927833be87fe2e482629a089206baaa8b8e2098594913f7643d7f70643c8302d1bd50889fb3f1f5f12c24d41b54065de9acbb60c7f0db8265969100f9581f73ac77b78bb6dfcbdc82008065320264290cdfb04ef3218bcf12a913563076bb6daebee78d68e67e3eded169e068645ad98f18f89134c717514d00515348f0ddd3f0660c026f0f107572f3f8061fd81472af0a562b1d42cb1a0261cb2b5b94b95dd3b3e3a3ab2b1010bf53666f5f45f224fde8d3c7194a63e15828b804ad837ed029b345a580e4d81bf4803afa99424d56526395c455232cf28325b819e8780a208b11ce929a1289c8e9c999954d44067248188b22d64badc477a016a7b5f3bfb5a91d151cded3f69b8addaa2492e7ccf8125fb0355f91a6d7f050000",
    ],
    [
      "ETag",
      "2isjOIKSB2joVlkKw6xhdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "00d0bb64ed3080a0d09d60918f501844301b2686502336099faae0f4ee757a8dfaeef01e00614cfabe1c784318780323524d094b81302ce7466de64efb440d5b94f9f720c05a83ebda5e8511bc685e5db5a3a27c694ada24b2d340a2ac72549a429537fbb9bbbe1ddb775cec840b593926951cdd4c3af088e2fb056745d862859fd38a5d3b42cfa703db3a887c2653ea9ca09f8738fda8faa59ab30e0632dfcddd28ef9c543b6c475bc4d96e93b46cc9f592fb1705cae2bc588bc84a615b5871289041ae6156d7facae59ec1be6b5aa8f162983cef68482f2fff1798017217b4237d499fdbe7ba69cec05ffd72180579feb708ea48077e7e0197b222da19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-105-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95bed3a6ad548dae04e8d4a6234941689a22dbb90986340eb1c343a8ff7d370e6520a4f129b6ef39f79cfbc80bb913794ca68489f4be82f2f9dbad64e48880a629bed2eba7f1769b3e76cfd94ff7eaacb7f9913e3a17b3192244cd52745764d052b22a39a8e93668a7a5ac0a5a4ad9c244ad5e77d8ea8d0623db198e4676dfb191a8204b5622bf43fa8dd6859a763a07f1762a659a012d846a73b97b7bef3cf43b45296f816bd5f9a8d94119d5f942f57b2639d542e6b36d800e2a0565043b2a32f4f08f1ab3e38fb9db82eeda29821f0407cab9ac725dfbc2145ce68948abd26425d317627cbe3b90c05db98bd0e232ab767994d31d1c5931d534d2cf0558a7fe666d2dbdd38dbf9e87cb8d17058b73773d6f2f36abedda0bacab73d7772d4d5906866bcdac6373f3f082fa31282d72a31ed6cfb5f26b87969f075313505a41138c9cee88f6c6dd094b98c393f160c8922e303666ce900e58974f6cb06306147946d4b0682ef389331e0d26e324b2996d47b6d3a7118b87fd68c4630a716f4279ec90fd11792c858613a10aa944d32172e52f43370afdadb79887ae2921a155a64f1a637501ef3d6a2c1041ffa9695f478544a5badd4b2f74fdf9225c5ebacd84579052fe1cdce38c139a2940342db1791acab58cb161c49bafdd13049b89fd3a041599fe7e2175cf6b17ef5afe460f7180b55d6dbe2408fda57766ec1c109734ab0ce4a13990022ddf606de87aff0791b8a54d1672b175fd6bd23cf990400939ff7a9a083681afffb6c3e62318771f7594c63b2e0f57b50a2fa1592261ea7d653bc3813370880197fa536cdc1f1eda56e7a833c20e72",
      "fd5a52b3f958692356a937100671fe9e69d7fe2f7cddb27d7b040000",
    ],
    [
      "ETag",
      "aYx8UUgw0HbJEWG1OBgw7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92514f83400cc7bf4b7d65c950c60c890f3837c5b0a91bfa62cc7283c29840f1eed0cc65dfdd1ece69d4445f8eb6fc5afaff731b78ccab043c58e4d95383727d90a1be31c114555368c58f9a2a8560016a913139aaabd93a5c76efae5e0779e0d897a97b78ee9f9c30a1e2259602bc0da439168902ef7e03952891db622a9ab29ab799057a5d9be22c9a069373ce4b4a4c3eb90d43ff341cc2d6da3726428b79cbffa3ed616bc18a16534c516215a3d9a596b4c2580746a612655d604751236354d0c2ed8b4c52530b49d4e14ac7eef63ab67be43afd9eeb3a877d87c98262a173aa18be9df182a0498b624a2f2c135c06641bb2e2b43d9fb99c27ad12130693c875da05bf02126392c9fc4faee67d97827fc307b6b3e03b274a6a2abda746e195ffdb38f6f473d4991f0d7f104ab3537b240ac6c359e48faf0df7b0937ebad6a8ae25b1910a8d8776d739eef5ddeebbad033256f3773c2d1bb420167c3b2e720d5e2a0a85db378387c1c77b020000",
    ],
    [
      "ETag",
      "FpnSyLh0VOzCiI41Jf62GA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85540d4fdb3010fd2b96272490fadd34299510eb4a06d14a0a690aaba6a9755cb7189238d84e1143fdefbb3814e8d886142939df7bf7eecb79c2773c5de01e8ef8ea3e67f2f1d3ad887005334d5670fa6b7d7996dc9e4f07dde9f0645d7ff83ee10beff2e80810bc6029926431ab2a914bca546f32aeada4c8332285a842a06ab361579b76dbb69c8e6d5b2dc702a262f172c8d33ba0df689da95ebdbe15afad8458c58c645cd5a8485eceebeb563d93e29651adeabb9a759051f50f548f634189e6223d9a8c21835c31396309e131e4f04a5d449f7763d738496a2b00af3965845291a7bac80b4250912ef92a97262aee3d6193e79b0f3c7687ee204473c9a8908b195fcc11516836cbee2a68309af8e1fe9c2445c4f941e1d81ae86b303a47f30c12b8218aa939ba3e730317a1e1e8da0df65f1cc0f247211a7adf5c748cfafe09da91f27c34f17d771ca2fde303741a8c2617e8cbf42d048a5830a5796a4a084914b322fde7367befa75b108806e9d239731a3669761b87d13272e8b2dbee44cb068ba26ee474483b6ad0438b598b8811e0e922ba619154a4dda8d920a46d3549ab4159d36294b522a7ed745a9da8dbb2ec961d394ea36de14d053f48aed909579950bc6c35be0ebcd09d85c1c41ff443d794b12479ac4fcae48a22dee6a9a14800fda7ae4de1e502948ab9797ee806fd41e85db9e5aa0cd98ad0c7f13d2ccb92c48a019a489230cde4b95840d3f0c568ec85dec8ef0f8161e67fb14528dcfbf1f44a081f33d3656dde781c069e7f6a12d822ae489c1bc8bafcc07b4292740f6f36957fc7e907417f0ada444af2f8870feab1ad82fe170d83375699e756b3890bb5add5dab1ac1dcbc69b9f1b782a182e5ea98c2f276e30c5e551c0964cb2947ebc5b00368e8f7f20dbcb0c60b8cea0a334d8b0ca54152a54b272a579626a29d94ec7b20e3bd880a57ee7eb1c76b7b32b62141159c252fd5c5279994d170b57ae5e40e0844df4cd1837bf0144b8f5bc4e050000",
    ],
    [
      "ETag",
      "zvQHmjMYC8YLDv/wXUidIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4d6bc24010fd2fd36b42fd88910a1eb4482bb562a39e4a91358e31319b89bb138b88ffbdb3b1484b2fbdeccebc0ff63df60cfbb4d8400fd66972a8d09cee12e437374468ab9cad5c251516c103649588f2b06ba42a981e97fa3ecb5e5fe60f473d5b0cfa7d51d878875a41ef0cdb14f38d85defb190aa5516cab55b917099f4ab78da78bd1d3281240d3c601d3e56432184e4670f16e16a5a92af85fa68f8b0719ad23dca2c1224697a1349461cc6357cf2a5de6e85baa4c8c166a714d2486aa5219225f10bfd908fd66d80e836e270c83563710654eb1e2940a112fe7120f9858e5117d4a3d688bc0d4a334ddd6e751e0565dc34d9d3adb4fae79e3823f5cf0dbf7f1fdd8f0c468678624ba4597ba716df048ae154b5b36157a102bf980e794affbe50b6b56d0b7dd010000",
    ],
    [
      "ETag",
      "qh0ia4NvUm/jjMKS9vmPTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "000002ffedd3597282300000d0bbe45b1c91b2f5afc6a1628a5071017e32818445aa2c4149ecf4ee757a8dfaeef0be01c932c6391e9a9a5dc02b90646e4fb3296aad85331651910edd1141cca94aebf886c23324b88896256d2dae39797fc02aedd3907fa41b29aca3cb33b8f5f4a0513ab47dd7773e6eec22b3c86c5ddfe24e2892cbb03228819557cab825aaf7c676f96a1f8ecede33859fdf7c41094ad66af492ee4cf7d2064718bb63a76d8353626a97d0738bb9502a7f353686d04753d3ee5f57f38af275ddc4fee1bc99554b373564529e3a298a00a1d14c7209afd6a07c06d3a7a7ff0b4c00136dd5338eabc7764db7ed09f8ab8f07d9b2c7ff05233debc1cf2f81e1658819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-107-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d0249082191a2354be89a29212b21ada66942c65ca85b822936adda2aff7d17d374ad2aad4fd8bee7dc73ee07cfe4961709999098677735548f5f6e444c4e08289ae16b7d719dfd90bebbc807174f4fdf1cc77c6241369d2282372c49f7650e1d29ea8a819cecb6ddac1275492b213a98a8d3b3469d9e3370ecd1d071ecfec846a2843c5df1e216e9d74a9572629a47f16e264496032db9ec32b17f7d37effb6659891b604a9aef354d9491e627aa5f73c1a8e2a298eeb6e8a0965045b0a73c470fffa8497cfa3e7797d37d3743f03d6740191375a11a5f98828922e5595de9ac64f24cb4cf3707b2f556de3c3498c8eb7d1115740f274642158dd46309c659b0591b4bff6c13ac67e172e347dbf9b9b79e75e79bd56eed6f8dab732ff00c45e31c34d7981aa7fae6e305f513908a175a3d6c9e1be5970e2d3f0ea621a0b48436188d2c87f65c6b1ca7f188a5ee6018a716c4b11b8f8674105b6c6c839dc44091a745358b16a218db094de3318d9cd461916d3910b9b63b8e1c87d9496233d7e9537238210f1557b0e0b21492b71d2257c132f4a230d8f9f359e8e912525ae76ad11a6b0a78eb51618108fa4f4d8726ca052a35ed5efaa117cce6e1f2d26b27bc828cb2c7ed1dce38a5b90444d30a9ba7a05a8b041b46fcd9da5b20584fece73128c9e4f733697adeb878d3f2577a88036cec2afd25db3058fadfb59d23e292e6b586dcb70752a2e56bac0d5d1ffe2012b7b4cd422e765ef08bb44f01a45041c13e9f268275e0f3bfedb8f908c6dd471da9f08ecbc364a3c22a689788eb7a5fd8a3e1b0e73a44832bf52136b0fa",
      "c7b635399a8cb08742bd94d46e3e56da8ad5f21584419cbfafdb75f80b2f9543707b040000",
    ],
    [
      "ETag",
      "uQhgJsN8Dl3QzzB66/zcRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b7d1d11746c66090f431197000a0c1f34841c5b07c36d9d77370d217c777b13d1a889bedcdaeed7aeffff6e074f69118307cb74f55ca1dc9eac508f4d304155655af1a3a4422158805aac98bcefb77ac1837b2a12df517d8c6d7cda0cc79d0e132a5a632ec0db419262162bf01e7750881cb92da2acca8b459d59a0b7a5294ec34930ea739e536cf2d16c30f0bb831eecad63632cb458d4fc3fdae67b0b36b49c6082128b08cd2ea5a40d463a303295c8cb0c1b8a2a19a1821aae5fac2455a590440dae345a4db7d172ce1ddb6d3b8e7de6da4c6614099d52c1f06cca0b82262db209bdb24c70189075c88a93fa7ce1721ad74a4c188c42c7ae17fc0a488c48c68b3fb992f75d0bfe0d1fd8c182ef9cc8a92af491ba1edcfabf8d634f3f475df961ef07a1343b7544c260d89b86fef0ce70f383f4ee56a3ba93c4462a341eb69af645db759aefb65e92b19abfe36959a10591e0db71936af0129129dcbf0188d752e97b020000",
    ],
    [
      "ETag",
      "VG1EIZ7/afA6sGed4ekjMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8b",
      "4e",
      "db",
      "3014fd15cb1312487da46d9ab49510eb4a60d14acad21484a6a9755cb7982671b01d2684faefbb712850f6408a945cdf73eeb92fe7096f78b6c4031cf3f57dc1e4e3a73b11e31a669aace1747345d230dd14fd8ce59b343dbbdc5cdbcde1f1312078c95224cd135657a29094a9c16cda584b51e4440a518740f596d5abb79c8e63bb5dc7b1dbae0d44c592d598671ba0df6a9dab41b3b9136fac8558278ce45c35a8485fce9b0fed662ec51da35a35f7359b20a39a1fa89e248212cd45763c9b4206856272ce52c213c8e195ba8c3fefc76e709236d6007ee094114a4591e9322f084145b6e2eb429aa878f0844d9e6f3ef0d41b7ba3082d24a3422ee77cb94044a1f93cdfd4d068320ba2c30549cb888ba3d2b133d05938b9408b1c12b8258aa905bafeea851e42e3c9b5171ebe3880154c2234f6bf79e8040d8353b427e507681604de3442872747e83c9ccc2ed1979bb7102862c994e69929212271c2caf49fdbecff39dd9240344857ceb96b39a4d5b3faf12a76e9aad7e9c62b8bc5712f76bba4135bb46f337b1933023c5d46372c9289ac17b72c423a768bb42dca5a36a3ac1dbb1db7dbeec6bdb6edb49dd875ad8e8db735fc4b72cd4eb9ca85e255abf175e847de3c0a67c1681879a68c1529127d5a255716f1364f0d4502e83f756d4b2f17a054cecd0f222f1c8e22ffcaab5665ccd6843e4eef61595624510cd044929469262fc4129a862f27533ff227c1700c0c33ffcb1d42e1c18fa75742f4989b2e6bf3c6d328f4837393c00e714592c2401eaa0f7c2024c90ef0765bfb779c61180e6f409b48491edff9a01ec72ee97fd13078635579ee345bb854db59ed3dcbdeb31cbcfdb985a786e1e255caf8fbcc0b6f707514b215932ca31fef16808de3e31fc8ee320318ae33e8280d36ac3255a50a95ac5a699e9a5a2ab6dbed",
      "f6bb2d6cc052bff73956c7d9cdae8c51466429cbf47349d565365d2c5d857a01811336313063dcfe06a2bb7c1a4e050000",
    ],
    [
      "ETag",
      "kVamRmku9nepkmmFPkW4/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d514d4fc24010fd2fe3b54d0a946248388034829246aa3d1843c85286526877eaee168384ffee6c3144e3c5cbeeccfbc8be973dc13e976be8c32acfde6b54c79b0ccddc0e31eaba309aaf8aa44670008dc858e97993c3c3a754d13619eb79183f46edd7f1703060854eb7580ae89f609363b1d6d07f3b811425b26db9acf62c31c7ca6ed3e825bc0f63064a5a5b204a66b3e16816c2d9b95a4449b534ff322dce0eec6815e30615ca146d864ad10e5333b5f5b428ab025d4db54a5143236e884c515d0945e432e2b6bc5bb7157402bfd70d02bfddf35959502a4c4e92c5c933c703434614317d703de8b040352337dd34e781e17653c34edd26db4fae75e5fc3f9cffdbb7f87e6c7434a89f1471748d36b577697047b695e1b646d5e8402af80326b9b9ece72f7c3154ffdd010000",
    ],
    [
      "ETag",
      "00HvJznrNhUDsQERKN2YDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "72",
      "82",
      "300040e1bb642d8c8088e94e4450a04140d061c3d0104ab40308293f717af732bd46fdf66ff99e20c398745dcaea3ba9c01b9832198a58749a8d6e0e34b6ae5a7fd8a1a5992b300e5095ef5d6a30ca4e658c84ce79e4facda2c8b29121f377bb516ccd37473ec7c12405dfbd4b57a5620c02896c145f22cca2eb411b8dcc57880c1f113c785f955b269e824b976beab01d1d2b83777d37d6e3aaf6cce2b4dbdc4e7bf5c3ae25696b59c2a68a617b2681174c7ccd6a7ac1c3512b125798125dba3bed318c421296b9c75b9543f2c0a690a2282cfcf327ea97682dbebcfc5f6001c8d8d09674299d6f57540817e06ffd944d0d99ffd749d69216fcfc023b91fae519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-109-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d6fda3014fd2b91f75a4852020124b422483724085b08ada6698a6c7393ba0d711a3b6ca8e2bfefc6295dab4aeb536cdf73ee39f7234fe441143b32264c648f3554c74ff792910b029a66f8daabe776ee0e1f0fa9a3f99fc23dde6e5d279b4c10211a96a2fb32878e9275c5418db79b6e56c9baa495941d4cd4719d51c71df4069edf1f0cbc4bdf43a2823c5d8ae201e9775a976a6cdb67f16e266596032d85ea72b97f79b70f977659c97be05ad96f356d9451f607aa9f73c9a916b2986c37e8a0565025b0a722470fffa83b76f5367757d07d3743f04170a09ccbbad08d2f4cc165918aacae4c56327e22c6e7ab03d904cb60165b5ce6f5be480aba870b6b47354df4b104eb3a5aafac4578bd8e56d378b10e93cdec6bb09a7667ebe576156eacdbaf4114589ab21c0cd79a5857e616e205f577a0b4288c7adc3c37cacf1d5abc1f4c434069056d30f19d017587ce88a5cce7e9b0d767a9038c0d99dfa73de6f09107de8e01459e11352c5ac802e880a5fe609830eaf5136fc4594277dc4dfc9ee739bd74947a2927a70bf2bb121ae642955289b643e4365ac4411247db70368d0353424aeb5ccf5b634d01af3d6a2c1041ffa9e9d4448544a5a6dd8b300ea2e92c5edc04ed849790517edc3ce28c539a2b4034adb0791aaa95dc61c348385d0573049b897d3b071519ff7c224dcf1b17af5afe428f71808d5d6dbe6413478bf08bb17346dcd0bc3690437b20255abec3dad0f5e91722714bdb2ce4fb36887e90f62982142a28f8c7d344b0097cfcb79d371fc1b8fba8a334de7179b86a547805ed120953ef331bf9fd91f95735adf4bb98ef7ae7b635399a8cb087423f97d46e3e56da8ad5ea0584419c7f68da75fa0b8e4e37617b040000",
    ],
    [
      "ETag",
      "3uD/l18qvf0tcxn1yWU10g==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85df65bca5912ad24ae205d5aab53f564a6f34a65961a028307477d1344ddfdd59d46ad4446f9699e19b61ce6137f094953178f090a5ab1ae57a2f457d638200559d6bc58f8a4a8560016a913229aaeef0d69e65f5d5b23ddcef3c6517abc04f4f4e9850d1120b01de06920cf3588177b7815214c86d11e575512e9acc02bdae4c71160683c905e705c5269fcc4723bf37eac3d6da35c6428b45c3ffa3ed7e6bc1233d0498a0c43242b34b25e911233d30329528aa1c5b8a6a19a182066e5ea492ea4a48a216575a6dfbb8d5760f5da773e4bace41c76132a748e88c4a86e7335e1034699107f4c232c1654036212b4e9af399cb59dc2831e16012ba4eb3e057406244325efcc955bcef52f06ff8c0de2df8ce8982ea52efa8f3d1b5ffdb38f6f473d4991ff67f104ab3533b241c8cfbb3d01f4f0d77ff2ebdb7d6a8a692d84885c6c3b6ed748f3aaefd66eb2919abf93b9e96355a1009be1d9799062f11b9c2ed2b833838ec7b020000",
    ],
    [
      "ETag",
      "ap8KZ0SiuJh1K/7kiGqRAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffd5546d4fdb3010fe2b96f705a4bed052cae88458693316ada490a4a00aa1d624d76068e2603ba00af5bfefecb42b1ddbf83ca55272bee7b9e7ee7cd757fac8b39876e81d4f9e0a908b4f0fe28e56286896e069bf17edf7d2dcf56747d74ed77981ec08c62fc7c788e086a5589acfa1aa442123509d51504ba428722685a862a06aa3b1576db4f7dbadc38376bbd53c6c2151c17c36e0d923d2efb5ce55a75e5f8bd712219239b09cab5a24d25fe7f5e7663d97e20122adeadb9a759451f50f544fe622629a8bec781460068502398194f139e6b0a1c6775fb763d7384b6b09829f79042c8a449169931786884436e349216d54da79a536cf371f3470064e2f2453099190f184c753c214994cf2c70ae90d475eb83365a98938dd358eb541bef9c37332cd31817ba6404dc9f577c77708190caf1d7f671a330dc8f0862119b83f1c7242ba5e9f6cc9b81e19799e138464e764979cf9c3d105391dbf85600131cc5831d77da651459bc4e3f2d335f7aa416904ad7aeebebf6aba345e2e24d7a658d70b1dbfdb0bdd2ba7ecef0012162d8227ecf08ccd15209a49968206792e6240cac530704377e87507c8b04dbb582314eddcbc6e08e1220793a0b66fdaef860e5d2e2b7f47747dbf3bc6a84c4ab6f8cd8799b65b86be615fb1796121166fad3283e7d2411bd4a8adade696d5dab2da7479bbc45f85e21c96caf472e4f8635a1ef93003095964e5fed15d0bb68e8ff7693ddb08c6e9461da5d1569a47caa84412ac3be4a9ada564e3d36a34a8054bfdce77b0d7347f0259fc47cf4aa3b0f1414a217d50384cc644356573e1193685c797761db6b27c5a1da5a0144b4c784f9094e9e89e6709513cc930b604321392cc8a2c32b472fced1193499142a689b951d521661e6a2428f25c480df12600facaa50942dff5ce76bfacccd371e804b8749adc343a9f1bb7a61e5b4579ebff6505b7e595d8fd187a663f7e021ae99d10da050000",
    ],
    [
      "ETag",
      "DCc3CmpIRf9WEAEwen9eYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "0000000002ffedd34b7282300000d0bb64ad0c1f29a43b41b12a88a08861c3a0a48a2949800062a777afd36bd47787f70db2f319374d2a18c114bc832153a17496d6dcb49cfe46903b08fb708d732127154cfccffb579ec2dc4e8cfdc9d5e590b93526befa765a960175239598b2ca103f2c2613c4e04433511b76743e23158d1485f23e571cb9f37c43bf30232ac786f0b61a4d1cf8a1ce5abaefb320520ebb6ed7f0182d70c5348b287ed8d8ccbc3243a5be5ce26d1f6bcaa2bc5cf4041e4565b269805745a7ad6e286d4924aacd833de66b8b6f4eb94777768e968f718ddae3e057baf4f2f27f8111c0775ed4b8498be7764d877004feeaa762e0f8f9dfc2598d6bf0f30bf6c547db19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      jobId: "grouparoo-job-111-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f9b3014fd2bc8fbda3c681e8448d19aa564454a484748db699a903117ea1630c5265354e5bfef629aaedda4557c00fb9e73cfb90f9ec9232f623225114f9f6aa80e9f1e4444ce08289ae26db24faf5361e577eea3b5bcfbb284bea9209dcd10c11b96a4799941478aba6220a7bb6d37ad445dd24a880e26ea98a6d931c783f1d01a8dc7c3736b88440959b2e2c523d2ef952ae5b4d73b89775321d20c68c9659789fcf5beb73fef95957800a664efbd660f6564ef03d5cf9960547151cc765b74504ba842c829cfd0c31f6a1c5dbccfdde534efa608de730694315117aaf185299828129ed695ce4aa6cf44fb7cf341b6ceca59040613599d17614173383362aa68a80e25184b7fb3365c6fb9f1d7f3c0dd78e17671e5ace7ddc566b55b7b5be3f6caf11d43d12803cd3566c6853e797840fd18a4e285560f9aeb46f9a543eebf836908282da10d86567f4ccd49df8e92c862c964308a923e44d124b2467410f5993d84611c01459e16d52c5a88c2a4a609f1d80e630485d85f3bb4477d3b1cd88cc66045761401399e915f155770c96529246f3b446e7d3770c2c0df798b79e0e812125a67eab235d614f0d6a3c20211f49f9a8e4d940b546adaed7a81e3cf17817be3b4135e414ad961fb84334e682601d1b4c2e629a8d622c686116fbe762e11ac27767d0a4a32fdf14c9a9e372edeb4fc951ee0001bbb4abfc936f05defabb67342dcd0acd6907dfb414ab47c8fb5a1ebe34f44e296b659c8b79de37f27ed950f095450b08fa789601df8f86f3b6d3e8271f751472a3ce3f230d9a8b00ada25e2bade17363ef644ffab8a56eaefd8a43f199cdad6e46832420e857a29a9dd7cacb415abe52b0883387f4fb7ebf81be7eca9887b040000",
    ],
    [
      "ETag",
      "fvgPgo7mXIk7FXBFe01teg==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92614fc2400c86ff4bfd3a12a763e8123f0c4525022a8c44620c39b732a6db75dcdd3048f8eff626a25113fd726bbba75ddf77b786e74c2610c063962e2a54abbd14cdad0d86a8abdc687e94243582036844cae471d1999f4ec4d512ef5e8fd3859c2c65f3363c396142c7732c04046b986598271a82fb35485120b7c59457859cd699036655dae2281a7607179c1794d87c30eef5c276af031b67d7980823a635ff8fb6878d034ff438c4192a9431da5d4a454f189bae95a94551e6d8d054a91835d470fd22555495421135b8d2705db7e1fa87bed76afabe77d0f298cc29162623c9f078c40b822123f221bdb04cf0195075c88a67f5b9e47296d44a6cd81d44be572ff8155018934aa67f7225ef3b17fc1b3eb0ad05df39515025cd8e3aef5d87bf8d634f3f479d8551e707a10d3bb543a26ebf338ac2fe8de51eb6d2db2b83fa46111ba9d17ae8ee7b47cd96bfff6eeb2959abf93b8151153a100bbe1d9799816026728d9b3731944e9b7b020000",
    ],
    [
      "ETag",
      "9mEhCYaKveXz9gqnYvn5QA==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd554ef4fdb3010fd572cef0b48fda17625659d102b90b18c36699314d621d49ac40d1e491c6c87a942fddf77765a4ac7363e4faa549fefbd7befec739ef03dcb63dcc3b72c7928a958befbc16f710d534512d80d3f64973f9d6fe38bef87729a9c7f9d44ad911c1f1d01826996245991d2bae4a588a8ec4d824622785910c1791d0ad55bad76bd65bdb73add03cbeab4bb1d204a9a2e062cbf07fa9d5285ec359b1bf146c27992525230d98878f6bcdf7c6c370bc17fd048c9e6ae66136464f30dd5e3944744319e1f4d0270504a2a6634232c050f5b6a7cfb69b7768391ac9100f891459444112f73a57d418988e70b9694c254c5bd276c7cbe58e0c01ed8a7219a0b1a7111cf583c4744a2d9acb8afa1536fe2867b7392e98af37d9dd804e8b3ef0dd1bc00037744523947575f6cdf4668e05dd9fede5c2ab00814d70bd1c0b9b0d131eabb676847c771d1c475ed20447bc7fbe8dcf7262374327d09810e62ba2065aace880219a59dc7d5d2d117aba854005a1fbaf3faaef14a6719174ce96e1d37b4fdfe69e85cdad5010f6842a265f00047bc20a9a480268264545131e43105cac80b9cd0f1dcfe0018e6d4461b84c4bdeba72d215c16541b54e61f87ce107aeb0f4778b5aafd1dd6f7fdfe144a1321c8f2b71cd8b53a9abe655f92b4341083375165e3b14ae016d66a9ba8bd137576220baf6e56f0ab6198c64a198f27b63fc5d5964f1754d03c3272ff3862033689b75fd566c2010c330e3a30288a49c522a95522414d3a6499e9a56277adf681d5c5062cd4ab1c2cf4a7208fff98596b94a63e15820b9f4a98281d829a345e580e87c2e2b179143b2e1fd65b19959224babccb51465474c7f2044996e4505b50b4e0022dca3cd2b4ea11982d229232a3b942fa46650f3d0f450305655170a168bcad0280eafd04a1efb8e7fb1fd7e1c934b403787f0a5db77a87ad1bdd9469a5bafaffb78d9bea72b49f33cfb561d47f0199755e50ea050000",
    ],
    [
      "ETag",
      "T9mVwIXQKZ8sYgGJUc1PsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "edd34b7282300000d0bb646d1c3f48a13b1095afc51801d9642204452c7f11e2f4ee757a8dfaeef09e8046116b1ad21619cbc12718e84c1e4763ab94d4f5e36ac692eeb8dc9e50b74fb839d3a4cb7132c173d7df3830e529e9ad4b8e0c3b14f593e2a230ac90af13f57adcfaa5164375910732cd2c7c0ea71df58a1cdb0234b679d2b44ab8bb8bb1823aa26518d9ae2248dd2e290e55baacb2fe00cd16d5b9705b8b91d828dc386d161f44181249dfdb55a67a6751c0780fb9cf7ba79f72016e11bb2b3733c0e557fb0d8b6ca9a6d747b4d202ea1224aeb8375f7bb32118bfbdfd5f6004585fa6356b48fada3e5fc8f208fcd527ed50b2d77f95d19ad5e0e7171d5b728219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
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
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-113-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d6f9b3014fd2bc87b6d1292104823456b9ad23652423620ada66942c65ca85bc0149b4c5d95ffbe8b69ba7693d6276cdf73ee39f78367f2c0cb84cc48ccb3c706eaa74ff72226270414cdf075e242363a9fb2f5fed7557dbebb1657d9aecce67344f096256951e5d093a2a919c8d92ee867b5682a5a0bd1c344bde170dc1bda63db7226b66d8d1c0b8912f274cdcb07a4df2955c9d9607014ef67426439d08acb3e13c5ebfb603f1a54b5b807a6e4e0bde60065e4e003d5cfb960547151ce77013a6824d4111494e7e8e10f3589cfdee7ee735af43304ef3903ca98684ad5fac2144c9429cf9a5a6725b367a27dbe3990c05dbbcbd060226f8a322a6901274642158dd45305c6a5bfdd182bef72eb6f16e16aeb45c1f2dadd2cfacbed7ab7f102e3f6daf55d43d13807cd35e6c699be797841fd04a4e2a5560fdbe756f9a543ab7f07d312505a42178c1cd3a6c3a9791aa7b1c3d2e97812a726c4f1347626741c9becd4022b8981224f8b6a162d45895d1d8da86346b63934236b983a117586d3c8b4a83d81c4b1e9744c0e27e467cd155c705909c9bb0e915b7f15ba51e8efbce522747509296d7275d1196b0b78eb51618108fa4f4d8736ca052ab5ed5e79a1eb2f96e1eac6ed26bc868cb2a7e011679cd25c02a2698dcd53506f44820d23de62e35e20584feccb3128c9ecfb33697bdeba78d3f2577a88036ced2afd2541e8afbc2b6de788b8a179a321fbee402ab47c87b5a1ebc30f44e2967659c8d79deb7f23dd930f29d450b28fa789601df8f86f3b6e3e8271f751472abce3f230d9aab01aba25e2bade17b6638f4e6d876870adfe8e8d4dcb3eb6adcdd16684024af55252b7f9586927d6c857100671fe9e6ed7e13766ac68af7b040000",
    ],
    [
      "ETag",
      "5Eeg2B8cLvzGrBUHoGgUng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2400cc6bf4b7d3b122663e8125e80222ee18fc008318690632b30dcd67177d310c277b737118d9ae89b5bdbfddaf5797607788eb3083c58c6eb5d81727fb1463d32c118559168c58f9c328560016ab166f251d5aebb23ad668e2fd3616d6717d3597fd46c32a1c20da602bc03ac624c2205ded301329122b785941469b628330bf43e37c54930f6075dce538a4c3e98f67aad76af0347ebdc18092d1625ff8fb6f9d1822d2dc7b84289598866975cd21643ed1b994aa479821545850c514109972fd6928a5c48a20a572ab65dabd86ecd751a75d7752e1b0e93098542c794313c9df082a0498b644caf2c135c066419b2e25579be70398e4a2526f40781eb940b7e05248624a3c59f5ccefb6e04ff860fec64c1774ea45464fa4cddf586addfc6b1a79fa36e5b41e707a1343b754602bfdf9904adfe83e1e627e9edbd46f520898d54683cb4abce55bde156df6dbd2163357fc7d3b2400b42c1b7e33ed6e0ad44a2f0f806dcdba0a07b020000",
    ],
    [
      "ETag",
      "Ys39GQtsW4IrmO3q1uUWMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "4f",
      "db",
      "30",
      "10fe2b962704487d5921b45325c40a0d5b4649ba340555136adcc40d86240eb653a942fdef3b3b04e860e3e3a44af1f99ebbe7b917f711dfb33cc67dbc60c94349c5fad31d5fe006a68a24703b762691bd7667bd0bee9374f9e3f0361d9e27c7c780603a4a92ac486953f2524454f6a7935622785910c1791312353b1dabd9e91e76adde51b76b1df42c0894345d8e587e0fe1b74a15b2df6ed7e4ad84f324a5a460b215f1ecf9bebd3a681782dfd148c9f636671b6864fb03d693944744319e1f4f27a0a09454cc6946580a1a5e42e3c5d7eddc2d46b25602e0158b2889225ee64aeb821411cf972c2985c98afb8fd8e87c75c0137b649f05281434e2229eb3384444a2f9bcb86fa0336fea067b21c974c6705f3b6a039dfbde250a0b10704b249521bafe6efb364223efdaf65fc5b85e8046ce858d4ed0c01da22d22c74553d7b52701da3bd947df7c6f3a46a7b3d7102821a64b52a66a4814f0282d3dae8e8e9eaca25201e8a9ebcedb61e38df6322e98d2e53a6e60fb83b3c0b9b2ab0e8f6842a2f5e4017abc24a9a480268264545171c963aa97cb9b3881e3b983114498b68d6b84c4fd5f8f2f01c1baa05aa0325f7c3ef20641d7320a6ac815494b83595507bcd3691d593b78b369fc3dd1c0f7073320274290f51f3e284853bccb61f0c6aa84d69c1dacd96aeb60cbb2b6ac2ededc6ce0d7c0b0b01533fe39b5fd19aeae7cbaa482e691a1fbc7100cd8383e7e78f52300303c03e0910a6ca95824354b24a871072c33b554d13df87c39c4062cd41b5fefb3f6d13c7ed7f3c4519afc54082e7c2a61e7b4096cd26861393405fe4d1a38a3529244a799e6508aa46491526436033d0f0185216239d2534261301bdbf3a775081be894c428e6a58e328deea36a0b6a6bb73277b53023a71adf",
      "ff9572533549730d3dd78695fb0d3f22740995050000",
    ],
    [
      "ETag",
      "PIScEyNY7KoRalfJ3hlDFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb642d8e4410d39d01a12315694b29b06152121502127e62e8f4ee757a8dfaeef0be01c932d675695f7376014f401288e6d9dc156b6c8f2753a05acb34bdf2b5acf880a35b39ae3bd612b7d174807b65486959d2b551e6f112af8447e5c0b75ffc1a6e066a19a6df6369425e07129fdafa79b9b348cc82243adf3632098d235f28042e4e93542934f475b52fec280acbb878ed21fcb4444fafb8a8b867537e195ecc73e25d86e27d3ff57417ae0ed356eb202ca74c0b5a6793f8012a1d325ab9aaa67ea3d87ec7052ad4e66d5ac48dc9184157e5387f78f8bfc00cb09bc85bd6a5f97dfb52476806feeaa7bd14ecfe1f33d2b216fcfc02024b500219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:04 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-115-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91f7953e4293bea46a746d804a6d3ad214c4a629b29d9b6048e3103b2084fadf77e3d00e84343ec5f63de79e731f79250f228fc99830913e5650be7cbb978c9c10d034c5d72bbbbabd0eddaef3ebe2e1c7a09a17ab510fae261344889aa5e8aec8a0a564557250e3eda69d96b22a6829650b13b56cdb6dd9fd5edf19b8fdbe733a7090a8204b96227f40fa9dd6851a773a07f1762a659a012d846a73b93bbe779e4e3b4529ef816bd5f9a8d94119d5f942f57b2639d542e693ed061d540aca08765464e8e11f3566671f73b705ddb553043f090e947359e5baf68529b8cc139156a5c94ac6afc4f87c77201b6fe9cd428bcbacdae5514e777062c554d348bf14609d07eb95b5f0cfd7c16a1a2ed67eb4995d7aab697bb65e6e57fec6bab9f402cfd2946560b8d6c43a33371f2fa81f83d22237ea61fd5c2bbf7568f179303501a51534c168d0ed537bd81db1840d7832ecb92ce90263433670698f75f9c8012766409167440d8be6321ff15ed705ca22ec471239c398472c8edd2866cc7568d2ebbbf688ec4fc8732934cc852aa4124d87c84db008bd280cb6fe6c1a7aa6848456999e37c6ea02de7bd4582082fe53d3be8e0a894a75bb177ee805d359b8b8f69a092f21a5fc65f388334e68a600d1b4c4e669285732c686117fbaf2e6083613fb79082a32fefd4aea9ed72edeb5fc480f7180b55d6dbe6413060bffc2d83920ae695619c8537320055abec3dad0f5fe0f22714b9b2ce46aeb05b7a4790a20811272fef534116c025fff6d87cd4730ee3eea288d775c1eae6a155e42b344c2d4fbc61ef41ddb1d12032ef5a75893f9b8f17546d841aedf4a6a361f2b6dc42a75046110e7ef9b76edff022d4d78a3",
      "7b040000",
    ],
    [
      "ETag",
      "Q1uYVT504ZGkB7uDpM93eQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b",
      "fde888a2e3304bfc30147509a08c19a38690632b38dcd67977d320e1bfdb9b88464df4cbaded9e767ddfdd0a1ed322010fa6e9fca942b5dc99a319da20445d6546f3a3a44223388046ce2db97b3715a345b017f66f6ee955f8979d65383c3e6642c70f984bf056304b314b3478f72b28648edc165356e5c5a4ce1c30cbd2164751180cce39cf29b1f9e0bad7f33bbd2eac9d6d63228d9cd4fc3fdac66b0716340d71860a8b18ed2ea5a205c626b032b5cccb0c1b9a2a15a3861aae5fcc1555a554440dae349acd56a3290e85db6e09e11eb45d26338aa549a960f87ac40b822123b3905e58260806541db2e2597d3e73394d6a25360c069170eb05bf020a6352c9e44faee47d1f24ff860f6c63c1774ee65415664b9df52efddfc6b1a79fa34efda8fb83d0869dda2251d0ef8e22bf7f65b9f1467a6769505f296223355a0f9bfbee51ab2df6df6d3d216b357fc733aa420762c9b7e32235e0cd64a671fd06736eea607b020000",
    ],
    [
      "ETag",
      "b+Zb6SjI/RMWYoz6AOByRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554fd4fdb3010fd5722ef1790fa91b649fa2155ac2bd916a9a490a620364dade3b8c190c4c1764015eaffbe7342810a36a448c9f9debdf7ce3ee709ddb13c462314b1e4bea462fbe59647a881a8c209aca6bfe69ee8ce497bcb8771a797de7ac9637e311e0382e92a89b322a54dc94b41a81c2d17ad44f0b2c082f32610353b1da7d9717a8ed5b71dc7eaf62d289434ddcc587e07e5374a1572d46eefc55b09e7494a71c1648bf0ec65bdfdd06d1782df52a264fb50b30d32b2fd89ea49ca09568ce7e3e5021c94928a15cd304bc1c36b691c7d3de46e319cb512003f30423121bccc95f6051484e71b9694a26245a32754f97cf38116eecc9d86c65a50c245bc62f1dac0d258ad8abb86319d2ffdf0688d33cdb83ed6897d607c0fe667c6ba0003375852b936ae7eba816b186bcd30364e8c897f6a1cd07abeb1f47d77111a4727c7c68f60be3c37be5dbf8580e1984ac5f2ca6e88a3946aabcf5beabd3f495d8015e8d7c955df747067600ea34dd4279b41cf8e36268da241d4b7712f32c9d0a2561c510c754ab3575538e739e90d9c011e9ab1630e1dd3a2bd68d8a5b6130d886346569ff4bb8476e20141bb067a144cd153260b2e59bdade82af0427715064b7f3a09ddaa8d0d2e53755a9bd34dbcf5a9a04900fda7af9dce320e4afa8c3c3f7483c934f42edd7a2c6634c164bbb887c1d8e0545240638133aaa838e3316c1a3a9f2fbcd09bfb93195454677dbe474834fafdf45a106e8b6a9755f5d65a8e55e9ef0197382d2bc443fd813a36daed1affa69804c1e41a64b11078fb31fd87fc15be8a6a8b2f7a48abeda3ee41641d440edafdd9c1d34070bf6a6574b174836b542f05744305cdc9e76305e02af1f97f627f67010cb71674a48218a69848ad4204ada79965552f7575dfb14ddb461558a877b95ecfdc1f9be6d08c34a3b97a6ea9beb3d52eea54295f40908421f43dff0764ff02f655649535050000",
    ],
    [
      "ETag",
      "lZOIr2Oc/yo9d13ljIgwnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d90514bc3301485ffcbf5d116acd64e067bb063e8600cad6e083246daddd56e6d6e96dc2a63f4bf7bd30d9f7d496e4ebe43cec909f695dec010f2aa3cb4688f5725f2ab1f32746dcd4e3643da210480ac4a211f961c7f64697ac88dae17cbeb74dcccf3723412c2155fd828189e605b61bd7130fc3c81560d8a6dbd367b41f868fc693a7f9f3c4d32111ada7861be98cd1ed3d904bae0cfa21a6a35ffcbb4ea02d8519ee1162dea027d06636987054f7d3da71a5363e8a8b5053ae8e1fea2b4d41a65894251c2284ac228b94be2c17d92c4b78358c89a0ac5156981176f120f9858d519fd483d8804b0fd284db7fdfaddcbbec6655a75ab8b293d32ba174b12c1a17ffde69c644c3e1d4b6ab62d065028f9c8e78acfe7ee17ae4db7c8a5010000",
    ],
    [
      "ETag",
      "8Vt4XRBBqbpnlUV+BCmNbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "7282301400d0bde45b1854caa39f61081d53a83a80c2cf1d0ca9a150c1f01070baf73add463d7b38779431c6db16babae417f48aa66c65ab4ca58d85c9ed7cc563354dd517db145527cda2d71ca1271fa60b0e8b8eaed309007edd2a646c451042e19e1251ce893c0ee0996e3bbc8d09dbeb3288c2ea72d5d74913532f152bbf0f8cb6b66edb6c37e7a99f62627f8f86429588364694e7ddd4d734ce09ee4da1ed42609a55132d7038a573ea2efd7790c4f607180fe91ec4c90ff920e29094875b6d24674dd9f0907f5671268d9d58c2ec65a56bf79e85b5bdfaf4f47fa105e2635348de42f1d8be7eb1ed05faab0fddd4f0c77fcc33c925faf9053f002c2419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-117-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6fda3014fd2b91f7b540521e0124b4229a6e4c10ba241475d31439e6267509716a3bad50c57fdf8d53ba7693d64fb17dcfb9e7dc479ec98e175b322609cf1e2a90874ff72221670434cdf07573fd24e96e76f8b1d9c9d1e6bcc7a7df6ebbd3c90411bc6629ba2f7368295149066abc0edb99145549a5102d4cd4721cb7e50cba839edb1f0c7ae76e0f890af274c18b1dd2efb42ed5b8d33989b73321b21c68c9559b89fdeb7be7f1bc534a710f4cabce7bcd0ecaa8ce07aa9f73c1a8e6a298ac437450299031ec29cfd1c31fea36b9789fbbcde9be9d21f89133a08c89aad0b52f4cc14491f2ac92262b193f13e3f3cd8184dec29b45161379b52fe282eee1ccda524d637d28c1ba0a564b6bee5fad82e5349aaffc389c7df596d3f66cb5582ffdd0da7cf502cfd234c9c170ad8975616e3e5e507f0b4af3c2a847f573adfcd2a1f9bf83a90928ada009c6ae3da0ced01e2569e2b274d8ed27a90d49324cdc3eed26361bf5a0b74d8022cf881a162d4461a75d485ddb896db7cfe2de361dc5740810a714d89039aee3c0881ccfc893e41a2eb92a85e24d87c82698475e1c056b7f368d3c53424aab5c5f36c6ea02de7ad4582082fe53d3b18e72814a75bbe77ee405d35934bff19a092f20a3ec103ee08c539a2b403495d83c0d7229b6d830e24f97de2582cdc4ae4f4145c63f9f49ddf3dac59b96bfd2231c606d579b2f09a360ee7f31764e881b9a5706f2d81c488996efb036747dfc8548dcd2260bf9bef6825bd23c05908284827d3c4d049bc0c77fdb69f3118cbb8f3a4ae31d9787a95a85496896889b7a5fd8eea03f7287c480a5fe3b36706ce7d4b63a479d11f650e897929acdc74a1bb14abd823088f3f74dbb8ebf01350d54457b040000",
    ],
    [
      "ETag",
      "WPwrakCyZWkr9W24iAJY3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92514fc2400cc7bf4b7d1d09e83ccc121f40416700654c7d30861c5b99d36d3def6e2a217c777b53d1a889bedcdaeed7aeffff6e0d0f799542008b3c7bac51af7632b453174468eac21a7e28aa0c82076865c6a41fedb595781887d9f5d9cb50f5af8452d3e9e1211326b9c35242b086658e456a20b85943254be4b6848abaace64de6815d29579cc5513839e1bca4d4e593cbd1a8d71f0d60e36d1b5369e5bce1ffd176bbf1e09e16112e516395a0db4569bac7c4864ea691a52ab065a8d6091a68e0e645a6a9565213b5b8d2ea74baad8ed8137e775f087fb7eb335950226d4e15c397335e102c595944f4cc324130a09b90152f9bf389cb79da287161388985df2cf815d098904ee77f728af7bd93fc1b3eb0770bbe73b2a4bab25b6a383aeffd368e3dfd1c75dc8b073f0863d9a92d1287e3c12cee8d2f1c77fb2ebdbfb2682e34b191069d879db67fb0df15ed375b8fc859cddf09acaed18344f2ed38cd2d044b5918dcbc02086491f37b020000",
    ],
    [
      "ETag",
      "4R30p6kMIgWJxFpBV6ppQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "6f",
      "da",
      "30",
      "10fe2b91f7a59578272480843a4ad32d130d5d08adaa6902c738d46d8853dba16215ff7d67a7b465dd5609099fefb97b9e7b719ed03dcb96a88f62b67a28a8d87ebae331aa20aaf00a6ebd7cc3926f76eb42feea9dd3280a63de3a7d1c0c00c17494c4eb3ca555c90b41a8eccfa6b595e0458e05e75548546d36bbd5a6d3766cb7e33876cbb52150d23419b3ec1ec26f95ca65bf5edf93d7569caf528a73266b84af5feeeb9b563d17fc8e1225eb879c75a091f50f584f524eb0623c1bcca6a0a09054cce91ab31434bc862ee3cf87b96b0caf6b2b006f18a198105e644aeb82148467095b15c26445fd276474be39a0a937f64691b5109470b19cb3e5c2c2d29acff3fb8a359acc82e86881d73ae3e2583bf686751e4e2eac450e026eb1a472615d7ff542cf7abd5a5803ebc41a0667d641723fb06641e04d23ebe8e4d8fa124e6697d6e9cd5b08c85e52a958664447384ea916fcdc58fffd3c75005640593ae76ec3c1cd6ea31727b14b926ebb13270d1ac7ddd8ede076dc203d9bdacb986288533abb89c219cfdca4d36b12b7d14c7a4e979018634ababd76dc5b527d6a74a0bdb68b6db4aba047c1143d6332e79295cd45d7a11f79f3289c05a361e49932125ca4eaac14a78b78ab53419100fa4f5d3bed651c98f4a4fc20f2c2e128f2afbc7239c67485c976fa00eb91e05452406381d7545171c197d034743999fa913f098663883013bfdc2324eaff787a0d88b6b9e9b232ff681a857ef0c508d823ae705a18c8a63ca0610e5ad16e57f9779a61180e6f801a0b81b77ff8a01cc7d6e17fa13078639532f7944da4d9f656ebc0b20f2c07ed7eeee05741f0d24a66f47de68537a8bc0a694205cdc8c7ab0560e3f8f88bb17fbd0086f70b3c52810d9b4ca4662182961bcdd6a69632da759c6edb",
      "41062cd43b5fafdbd88f4ee7d019e99a66eab9a4f2f59a2e6a57215f40e084450ccc1477bf010dc7d3d33f050000",
    ],
    [
      "ETag",
      "EpvifJ42Msz9FeTTRbo2Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "6a",
      "c2",
      "40",
      "10",
      "85",
      "df",
      "65",
      "7a",
      "69028da651042faad8561069d38aa545644dc6349a64b6fb13b1e2bb77361629f4a637bb3373be61cf618fb0cbab14fab0ceb34f8bea7095a17972458cda1646f325a9d2081ea011199332dfcf3aad7ad14b5b5f2369176fad3bf1ba1f0c98d0c9079602fa47d8e458a41afaef47a84489bcb65ac91d23e6205d3799bd8cefc7310f4a4add60369f4e6f87d3319cbccb8a28c956e65f4bcb93075b5ac7b841855582ce8354b4c5c44c5c3c2d4a59a0afc9aa0435347023648aac148ac8e7891f043d3f883a51d8bd89a2b0dd0d992c281126a78ae1f933db0343461431ed391e7418504dc94937cd59f3b8ddc4a81bc079fbad0517adfd470b2f5ae0b4e5cf63c38341fda888ad6b74aeafcf0946e452194e6b94450f12c11ff0909b737ffa0694aa2545dd010000",
    ],
    [
      "ETag",
      "piwN3+vW8d+zCpuWZ+FaXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ffedd3417282300000c0bfe4ac8e2814e98d1415622c8a01810b2310102c429388a49dfebd4ebf51f70ffb0d4e5946394f447ba157f00ae469664cb2c9a65bc0d5bd9626bce1664ab2305fc03250764d393b5ca795bb50d2f8cbdcb62cd159fb062daf6abdc4aa1ad357f0312abc42aebb0b92fa3afa6c10a601dfba1cd51b3f8cb23db909d5264271f5b943b64b11611612acc73e1ff6047e38cb151f1fc491f7b1ac95c0cc780e196b7abb3f7b63d592acef42e489bc132fcd2e27a90f51f55ee3d2a8d1051f3c23d0f494ac8a3eb186ab13085b2bd5b3bd49613cb86a38797afabfc008d0a1ab18e549f5d83ed70c6304feea274276f4f11fd213a30cfcfc027bf622a019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:07 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-119-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbdabc804012295aa394ae9112b211d2aa9b2664cc85ba05ccb0e91655f9efbb98a66b5569fd02d8f79c7bce7df0441e789990198979f6ab81faf0e95ec4e48c80a219de1e6eadcdcd9f712c43ffbe2eaebf8f268c9a8bf91c11bc65495a5439f4a4686a0672b6dff5b35a3415ad85e861a2de6834ed8d1ccbb1ddb1e3d8a66b2351429eae79f980f43ba52a391b0c4ee2fd4c882c075a71d967a278b91f3c9a83aa16f7c0941cbcd51ca08c1c7ca0fa39178c2a2ecaf97e870e1a09750405e5397af8474de2f3b7b9fb9c16fd0cc18f9c01654c34a56a7d610a26ca94674dadb392d913d13e5f7d909db7f696a1c144de146554d202ce8c842a1aa94305c665b0dd182bff721b6c16e16aeb47bbe595b759f497dbf57ee3ef8c9b2b2ff00c45e31c34d7981be7fae4e301f513908a975a3d6caf5be5e70eadde0fa625a0b4842e18b943878e26c3699cc62e4b27d6384e8710c793d81d532b1eb2a90d761203459e16d52c5a8a32a16033779c4409e0c31e8eed681a332702d31a99237338b42c871ccfc8ef9a2bb8e0b21292771d2237c12af4a230d8fbcb45e8e91252dae4eaa233d616f0daa3c20211f49f9a8e6d940b546adbbdf2432f582cc3d5b5d74d780d196587dd2f9c714a730988a635364f41bd1109368cf88b8d7781603db1afa7a024b31f4fa4ed79ebe255cb5fe8210eb0b5abf49becc260e57fd1764e886b9a371af2d87d900a2ddf616de8faf81391b8a55d16f26def05b7a4bb0a20851a4af6f13411ac031fff6da7cd4730ee3eea4885675c1e265b155643b7445cd7fbcc761dd7b12da2c1b57a17734df3d4b636479b110a28d57349dde663a59d58235f4018c4f9fbba5dc7bf94f608f07b040000",
    ],
    [
      "ETag",
      "yY3MWx5bsTNjrmVZ18ca2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b",
      "fd3a22e818ba840f5341c10908233131841c5b19c36d9d77370d21fc777b13d1a8897eb9b5ddd3aeefbbdbc2539247e0c222899f4b949ba318f5bd09c6a8ca542b7e14942b040b508b98c9a86ff7e531a67e77ddb1879874bd87f8366eb79950e10a3301ee169609a69102f7710bb9c890db424acb2c9f5799057a5398e22418f706d79c6714997c30f57defc2efc0ce3a3446428b79c5ffa36db6b3604d8b312e51621ea2d9a590b4c650f78c4c25b222c59aa25286a8a082ab17b1a4b21092a8c6955aa3715e6b38a78edd6a3a8e7dd2b2994c29143aa19ce1e98417044d5aa4637a6599e03020ab90152fabf385cb49542931616f103876b5e057406248329affc915bcef4af06ff8c0f6167ce7444665ae0f54d71f7abf8d634f3f475d7941e707a1343b754082de5d6712787723c3cdf6d22f361ad548121ba9d078d8a8db67cd96537fb7f5928cd5fc1d57cb122d0805df8e9b4483bb14a9c2dd1b8ebcf4e57b020000",
    ],
    [
      "ETag",
      "dJ4Jr/elLFjE4OeiFAXgKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8554fd6fda3010fd5722ef9756e223403e00097514b28e8a061a423b344de02426751be2603bdd50c5ffbe8b53dab26eab142939df7bf7ded9e73ca1079a46a88b021a6f73c2779fee59802a88481cc3eaf66e3bec5cde5f4ef9f5afc937791e2f2ee2e675af07085ab004de6409a90a96f39088ee7c568b39cb33cc19ab42a16aa3a9571b56cb326cd3b28ca66d005190643da6e903d0efa4cc44b75e3f88d762c6e284e08c8a5ac8362febf5c7663de3ec9e8452d48f35eb2023ea1fa89e252cc492b2b4379f81835c10be241b4c13f0f04a8d82cfc7b56b146f6a31801f69487018b23c95852f2811b2744de39cabaaa8fb8494cf371f68e68c9d81afad3809198f96345a695868cb65f650d10693b9eb9facf0a6a8b83a2d128740fbe24daeb4550606eeb02062a5dd7e753c477b5d5a693ded4cebbb43eda8f8c8d5e6aeebcc7cede4ec54bbf026f3a976be780b01db111192a6cab48f838414869f3776f4fe3c0b029620592697b66ee1465bef04ebc00ed7ed9619ac751204edc036712bd0c38e418c28201878b2a8ae583865a96d9b6664353a6660101347ba65354c6245cd0e311ab6159956b3a587ed7613ed2be827a7920ca9c898a0e5e6a25b6fe43b4bdf9bbb83beefa836d6384fe4b0345734f1d6a7842601f49fbef6459632502a4e6ae4fa8ed71ff8a31ba71c8e318971b89b6d613cd6381104d098e30d91845fb108360d4d27b3913f9ab8fd3130d4894f0f0881badf9f5e09fe2e53bb2cd51bcd7c6fe45e280307c40d4e7205792c3f10cec02bdaef2bff2ed3f7bcfe02a431e778f7470edab18c82fe170985575169f320d94085da216a1e45c65164a1fd8f3d3c150437ad5446d773c75ba072c9236bc2491a7e3c5a0056898fff1887db0b60b8bfa02324c430c9a12854424eca89a61bd54bc9b6adb6d1d0910273f92e67eafae1e88a1a4545b221a97c6ea9bcbd6a178b542e5e4090844174d529ee7f03982b95603f050000",
    ],
    [
      "ETag",
      "qhqD9JjJPrQxOXtBgYGg2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f6bc24010c5bfcbf4d80462b411021e6a116b11a951f1508a6c9231cddfd9ee4e5a42f0bb7762a5e79e76df9bdfccbed91ecabc49218438cf3e5b34dd5d86bc1d2e11dab6622b87a6c6223880ac3221c7c592e34cef5eca63b757ec17a577ffb59dcd84b0c907d60ac21ece3956a985f0ad8746d5286da7932e05e14e0f6ab5d92f968b488c9ad2c1d81cd6ebc7f97a0117e7af45d5d436fcafa6f78b0305c5119ed16093e090411b2a30e1d5b09e55b5aed0b5d49a042d5ce16b2133d46a65885c71dc91efb9a3601c4ca60f4130f1a713212b4a14e7d4087cd8493c60625545f42deb8107373def18edab21996e31bd5564e4130d0fb30462d3a20389923f7acef9575f7e008929772980010000",
    ],
    [
      "ETag",
      "3jGtbgpSJkWyTat2jk0+vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "417282300000c0bfe46c992846a537a013ac6041a156b930498882d82610c140a77fafd36fd4fdc37e03c218572abb8a8a7f8167d093896530c3970b07df8a8dbd3bf0b7007a5aadc429329779dd05aa8a094d2667ff764afbeec2a53ad33851ba13bacc758e5db699399aa56cba47ee34ac9fdc7969217b5ed02aec2ac8fabdff1a232f39c2cf95daa255d293f134ee82b5e33578a7ea36f5fdb1765eb02b284e04a1c77cf38ea3008a1685b2cdaa35c1f6a21e3a6b704d594f0e7008da3682ee2c503c3197d5797d41170e0fa9947449bcb828dadd47963241a1f1f0f07f8111e05a960d575979df6e22cb1a81bffad9b597fcfedfe1a4e10df8f90500999bce19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-121-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc8fbdabc299048d11aa574cd94900e48bb699a903117e294608a4daaaaca7fdfc5345dab4aeb276cdf73ee39f7c133b9e745422624e6d9430dd5d3979d88c9190145337c15e6d6cbed9bf916beabdd6ae7df6f963faf1ea75344f08625e9becca123455d3190934dd0cd2a5197b412a283893a83e1a033b04696699f5b9639b44d244ac8d3252fee91be55aa94935eef24decd84c872a025975d26f6afefbdc3b0575662074cc9de7bcd1ecac8de27aa5f73c1a8e2a2986e0274504ba822d8539ea3877fd424be789fbbcbe9be9b21f8c01950c6445da8c617a660a2487956573a2b993c13edf3cd8104eed29d87061379bd2fa282eee1cc48a8a2917a2ac1b8f2d72b63e15dadfdd52c5cacbd28985fbbab5977be5e6e565e60dc5dbbbe6b281ae7a0b9c6d4b8d0370f2fa89f8054bcd0ea61f3dc28bf7468f171300d01a525b4c1c8ee5b74e0f4c7711adb2c7546e771da87387662fb9c8ee23e1b9b60263150e46951cda285281cbb3fb64dd38ea8ed40645a96138d53278d583a4ced78643a83644c8e67e4b1e20a2eb92c85e46d87c89dbf08dd28f437de7c16baba8494d6b9ba6c8d3505bcf5a8b04004fda7a66313e502959a762fbcd0f567f37071ebb6135e4246d953f080334e692e01d1b4c2e629a85622c186116fb6722f11ac2776730a4a32f9fd4c9a9e372edeb4fc951ee2001bbb4a7f4910fa0bef9bb67342dcd2bcd690437b20255ade626de8faf80791b8a56d16f263e3fabf48fbe4430a1514ecf3692258073effdb4e9b8f60dc7dd4910aefb83c4c362aac827689b8aef7856d5be3c1a84f34b8521f62c3b1736a5b93a3c9087b28d44b49ede663a5ad582d5f4118c4f97bba5dc7bfe811ddbf7b040000",
    ],
    [
      "ETag",
      "o4hNl7PCheJtjMjRkULXFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92614fc2400c86ff4bfd3a12267390257c9808ba041161448c21e4dcca186eebbcbba984f0dfed4d45a326fae5d6764fbbbeef6e070f69118307f769f258a1dc1e25a8af4d304155655af1a3a4422158805a244ccee7e25636fda2657706c1bcd77918cc5e6e926e970915ad3117e0ed609562162bf0ee7650881cb92da2acca8b659d59a0b7a5294ec349303ae73ca7d8e4a3d970e89f0efbb0b70e8db1d06259f3ff685bec2dd8d0fd045728b188d0ec524ada60a403235389bcccb0a1a892112aa8e1fa4522a92a85246a70a5611fdb0ddb6db94efbc4759de3b6c3644691d029150ccfa6bc2068d2229bd033cb0497015987ac78559f4f5c4ee35a89098351e83af5825f018911c978f92757f2be6bc1bfe1037bb7e03b2772aa0a7da006c32bffb771ece9e7a8333fecff209466a70e48185cf6a7a17f3936dce25dfae956a31a4b6223151a0feda6d33969bbcd375b7b64ace6ef785a56684124f8765ca41abc95c814ee5f01fef6a4117b020000",
    ],
    [
      "ETag",
      "XXaYr0An318FIXC8kFUxWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554eb4edb30147e15cbfb33b45ed2364d9a4a8815c8584597b23405b1696a1dc72986340eb6c354a1befb8e931528bb20556a9cf3dd8e7d9c477cc7f3040f71cc57f725939b77b722c60dcc3459c1db5bef436f6a33eff81b9f67de398f3b9bf387af878780e086a5c8bac85853895252a686f3596b25455910294413849a9d6eb7d9717a8eedf61dc7eeba361015cbd209cfef807ea375a186edf6cebcb5126295315270d5a262fdf4befdd06d1752dc32aa557bdfb30d36aafd86eb512628d15ce487f319242815930bb6263c830ccfd424feb8afdde264dd5a01f8815346281565ae4d2e90a0224ff9aa94952a1e3ee22ae78b073cf327fe49849692512193054f968828b45814770d74329d07d1fb25591bc5e58129ec16e85338fd82960504b8218aa925bafaec873e42cb8468b64487e8088d8253b4273c0ed03c08fc5984de1f1da0b3703abf40c7d72f211039614af3bc0a1c91386326ecef4d1dff799686403424a88b0bd77248676079711abb341df4fa716ab1381ec46e9ff4628b7a36b3939811e069a35eb1482e72ea76524a3dc723b1eb0cac4e27e981909d388e3b70adbe63b949d28d3d86b70dfc5372cd4eb92a84e2f5c6e2ab701cf98b289c0727a3c8afda484999e9d33a9c69e2654e0d4d02e83f7d6d4d950b7032a7340e223f1c9d44e34bbf1e8c095b11ba99ddc368a424530cd0449235d34c7e11096c1abe98cec6d1781a8c26c0a84efb62875078f8fdf199106d8a6a9775f58f4f4d03db178297242b2bc043fd80bb56d76a5a30bc7dbcdd36fead340ac3d135b81329c9e6550d3a726c43ff8b4f85af5675d29d6f071bb7a7147b2b7b6fe5e0ed8f2dfc1a182e5aed8cbfcefdf01ad7af429632c972faf67401b82abcfdc1d85d5e00c3f5051fa5610dc34c9571a192d543cdd7552f35db753cafdfc31558ea5735d7b2faf6eef48c8651646b96ebdf2dd597b7da45532ad513088a308bc1383883ea2f6479b3593e050000",
    ],
    [
      "ETag",
      "j9+3O4e9BZiUl9Kib1yKvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "6b",
      "c2",
      "30",
      "14",
      "85ffcbdd6bcbac7315041f7494cd5174ab13842112eb6dadb6b95d72bb21d2ffbe9b2a7bde4b7273f21d724e2e702af41e46b02bf2af06cdf92e477e774382b629d9ca5693b6081e20ab5cc89e5d2cb9c8e2fb43920cd7c1eb82349ac9782c844d0f5829185d202bb0dc5b187d5e40ab0ac5b6ddd62741f85cbbd36cfe113d47890815ed9d305fc5f1641a47d07a7f165551a3f95fa64debc1917609666850a7e832d4868e98f2ccd5b3aaaa4bf42d3526450b1ddc5de4869a5a19225f143fe8f7fd207c0807c3c7301cf48703214b4a1517a4055e2d251e30b12a13fa917a100860ba519a66ddfaddc9aec66ddab49b9b697a66b46f86248245f77aef9ae4895c3a96d46c1af42055f2912f055fcfed2f27df0d94a5010000",
    ],
    [
      "ETag",
      "0sOStifL/hRR7X1JOonerA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bb646d1d2b0992ee403e2ad54114d3b2c90426ca372a107e4eef5ea7d7a8ef0eef01581cf3baa6cd35e7027c8081cdf1349eba37cdb0bbd463c9e144661d1d5a745dd4fa22445184349cc9a614fdc98f5922eedbfc223b72593ae790e6c50c2615ea375bfbdd5fa2029bb56ef58c8484e4c76ea75ad1ca35d7485c4e877116eaf7d60f88b23a67a12e835d066958ea6362dedb7d267d15266a54efb4c85aafc66f8fb9722316d00bb872744aa31aadcf3347a37da5656492233464bade3778ceb1d044d1965be83baa5470e0e95f55d3bf8d2e2cfce9cbcbff052680f7b7b4e2354d9fdb1584f104fcd5a7cd70e3cfff066715afc0cf2f58018bf619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-123-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbda843c81468ad628a52d524236425a4dd3848cb950b78029369db22aff7d17d364ad2aade203d8f79c7bce7df0421e799990198979f6d440bdfff22062724640d10c6fd7aeb283f1de01d7bbbbbe17577415fcf116f3392278cb92b4a872e849d1d40ce46cb7ed67b5682a5a0bd1c344bde168dc1b5a636b624f2d6b32b227489490a72b5e3e22fd5ea94ace4cf328decf84c872a015977d268ad3bdf93c32ab5a3c0053d27caf69a28c343f51fd9a0b461517e57cb745078d843a8282f21c3dfca326f1c5fbdc7d4e8b7e86e067ce8032269a52b5be30051365cab3a6d659c9ec85689f6f3ec8d65db9cbd060226f8a322a6901674642158dd4be02e32ad8ac0dcfbfda04eb45e86dfc68bbbc71d78bfe72b3daadfdad7177e306aea1689c83e61a73e3429f7c3ca07e0252f152ab87ed75abfcda21efe3605a024a4be882913db0e8d0199cc7696cb3d4194fe3740071ecc4f6948ee3013b9fc0248981224f8b6a162d4539b560c4ced9288ac7164413604ee4b00144b69dd8d6d0a6301c0fc9e18cfcaeb9824b2e2b2179d721721778a11b85c1ce5f2e42579790d22657979db1b680b71e151688a0ffd47468a35ca052db6ecf0fdd60b10cbd5bb79bf00a32caf6db279c714a730988a635364f41bd1609368cf88bb57b89603db16fc7a024b39f2fa4ed79ebe24dcb4ff41007d8da55fa4db661e0f9d7dace11714bf346439ebb0f52a1e57bac0d5d1f7e2112b7b4cb42beefdce007e9ae0248a186927d3e4d04ebc0e77fdb71f3118cbb8f3a52e1199787c95685d5d02d11d7f5beb26d7b800fd1e05a7d88393a76daf836231450aad792bacdc74a3bb1469e4018c4f9fbba5d87bff9b400337b040000",
    ],
    [
      "ETag",
      "MEt7R3y8eEIWGhoFaLRzIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401086df65bc2d0987524c132f408b3401e450128d21646987526c3b7577ab21847777b6221a35d19bedccf49be9fc7ff7004f491e810beb247e2e51ee2f62d45313cc5095a956fc2828570816a0163193f703dff3f29ddf9fdabd077f5e8efd5d63145f5d31a1c22d6602dc036c124c2305eee301729121b785949659beaa320bf4be30c57930f3c7b79c6714997cbc180ebbbda10747ebdc18092d5615ff8fb6e5d1821dad67b841897988669742d20e43ed1b994a64458a3545a50c514105572f6249652124518d2bb546b3556b382dc7eeb41dc76e766c26530a854e28677831e705419316e98c5e5926380cc82a64c59bea7ce17212554a4ce88f03c7ae16fc0a480c4946ab3fb982f7dd0afe0d1fd8c982ef9cc8a8ccf599ea0fefbabf8d634f3f47dd7403ef07a1343b7546027fe4cd83ee6862b8e5497a6faf514d24b1910a8d878dba7dd9ee38f5775bafc958cddf71b52cd18250f0ed18241adc8d48151edf0055b042a77b020000",
    ],
    [
      "ETag",
      "XHIEEnjIFQ4BYISuNIj1Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-124-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b6fd33014fd2b96f902521f79a7549a46d90204b6b44b536020d43a8e53ccd238b39da132f5bf7393ac63e535295262df73ce3dd7f73ab7f88a97191ee394afaf6b26b74fbe8914f730d3640dbb8eb2bcabb7db6dfed12d3c46f4bb8f3f66d5c5d1112078c352645315acaf442d2953e3c57cb096a2ae8814a20f427dd372faa6677b8eef7a9e63f90e10152bf2335e5e01fdabd6951a0f87fbe483b510eb82918aab01159bfbfde18d35aca4f8c6a856c3c39c4348a3868f643d2e04259a8bf268310707b56272c9368417e0e117354b5f1c6a0f38d90cd600bee194114a455deac617485051e67c5dcb56158f6f71ebf3c1079e0767c1498256925121b325cf568828b45c56573d74325d44c9d315d9348aab674d60bf40afe2e9395a5560e02b514cadd08737411c20b4521accadd0113a4693e8141d2887115a4451304fd0d3e367e8753c5dccd0cbcb8710f09c31a579d93a4e485ab0c6eddda9867f36b321100d16bae0d2373c628e8ce7699efa341fd96e9a1b2c4d47a9ef123b35e873873959ca08f074a3deb24829cacc1cf99eebb859c6986bd2d41b59c4f432688c61b82066d9d4b6d394e05d0f7f975cb353ae2aa17877b2f8431c26c1328917d1c92409da32725217fab433d714f1d0a7862201f49fba764d940bc8d4b4298c92209e9c24e1fba09b8c33b626743bbf86d9c849a118a089241ba6993c17191c1a9e4de761124ea3c91930da76cff60885c79f6f7f11926dd59eb26edf3809cfa14593f359eb610f7a4f8aba45dd741fd8322ca36f587dd34d4c6b6cda63d3191886f109ef76bd7f8b4fe278720986889464fb5b0c8af49c86fe97ac2dbe5d75e6f72e4cdc64bbf774b0720e561ede7dd9c1d3c370f9baccf86211c497b8db8a59ce242be9e30307e036f0f84f647fa1010c571af2c0edd01ce69baa260b95ac9b73be696be9d8be6f7bb68f5bb0d47fc47ccbda37b4d16814d98695faaea4ee42b7a7d8846a750f82208c671446af21fa135b6f40fd52050000",
    ],
    [
      "ETag",
      "4s26kJyyfX5l6eatKXzPpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90414fc2401085ffcb786d138ba524241c00ab62482355bc18429632d442db5977a79a4afadf9dadc4b397ddd9b7dfcbbeb7673815f51ec6b02bf28f064d7b9523afdc90a26d4ab6b269aa2d8207c82a17f2b1add2ef6434b4bb60bd7a4df4dded2c9e4f2713216cf68e9582f1190e05967b0be3b733d4aa42b16db7fa2408b7da9d16c94b7c1fa72254b47742b25e2ea7b3650c9df76751153535ffcbb4e93c38d22ec5031aac337419b4a12366bc70f5acaa7489bea5c66468a187fb8bdc50a39521f245f18341e807d14d148e8651140e46a19025658a0baa055e3f4b3c606255a6f425f52010c0f4a3343df4eb672fbb1a9769d36d2ea659cb689f0c49048beef5ebdf247372e95852b369d0834cc9473e14fc7bee7e0081b4cb09a5010000",
    ],
    [
      "ETag",
      "JymRzN75sb1UQVNpFDBECA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34d7282301800d0bb64ad0e4211e9ce108594282816854d26856f5414c580fc757af73abd467d7778df4824099425af6e67b8a277d409d51c2523b798e24593a52bbd64b4a93fcb0f42bc6ea84c6928399b05eed8b8ec644c3ccfc2969f4f4330e255d6e76c9ce6a13a8f931373b2f546b9e7fba566e8f3335e44bddf6f455003c777f37828b6931954dbfa61595aedd3851c42a40ae57a4b288b7048333fbc73c5ce6c1273635c277b53ba5d707000ec1ed387cadd92b56f7d40d7cd856996e7cdaaeae8d3aac9a9ee51461eeab2112909762d892651f8a5398188edd1cbcbff850608dae224a1e4a7e7764d37cd01faabcfabae80e77f0c4282443fbff1b307c419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-125-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbb8262481f08814ad514ad768095981b4aba60919e742dd124cb1e91655f9efbb40d3b5aab47ec2f63de79e731f3c917b5e6cc984243c7ba8a1da7fba13093921a06886af4eb0873be9ea0f7f7edc7c1bac3e0f9925c3cbe91411bc6149ba2b73e84951570ce46413f6b34ad425ad84e861a2de7034ee0d2dc332edb1659923db44a2843c5df2e21ee9b74a9572a2eb47f17e264496032db9ec33b17b79d71f477a59893b604aea6f35759491fa07aa5f72c1a8e2a2986e4274504ba862d8519ea3877fd46d72fa36779fd35d3f43f0236740191375a11a5f98828922e5595db559c9e489b43e5f1d48e82dbd79a43191d7bb222ee80e4eb42d553456fb12b4f360bdd216fef93a58cda2c5da8fc3f985b79af5e7ebe566e587daf58517789aa2490e2d579b6aa7edcdc70bea6f412a5eb4ea51f3dc283f7768f17e300d01a52574c1d81e5874e80cdc244d6c963ac638490790244e628fa9910c986b82b94d8022af156d59b4100535c6060647b16140129baeebc60e584e3c4a986bdb8e4b2d6a93c309f95d7105675c9642f2ae43e43a58445e1c051b7f3e8bbcb68494d6b93aeb8c3505bcf6a8b04004fda7a64313e502959a762ffcc80b66f36871e575135e4246d93e7cc019a7349780685a61f314542bb1c586117fb6f2ce10dc4eecfb3128c9e4e713697adeb878d5f2177a84036cecaaf64bc22858f85f5b3b47c415cdeb16f2d81d4889966fb136747df88548dcd22e0bb9dc78c10de99e0248a182827d3c4d04b7818fffb6e3e62318771f75a4c23b2e0f938d0aaba05b22ded6fbccb66dd3301dd2822bf52e661aa363db9a1c4d46d841a19e4bea361f2bedc46af902c220cedf6fdb75f80bb0712c617b040000",
    ],
    [
      "ETag",
      "8Ryejs9/qxXYK0M+1c6sSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92614fc2400c86ff4bfd3a12c031cc123f0c442502c218898921e4d80a0cb675dcdd5042f8eff626a25113fd726bbba75ddf7777804d9c45e0c23c5e6e0b94fb8b25ea91097c5445a2153f72ca148205a8c592c922f7557db4dbb5374fbe1e0c6bdbfe83f73ababe6642852b4c05b80758c498440adce7036422456e0b2929d26c566616e87d6e8ae3c0ef0eee384f2932f960d2eb79ad5e078ed6b931125acc4afe1f6dd3a3056b9afbb84089598866975cd21a43dd35329548f3042b8a0a19a282122e5f2c2515b9904415ae546af546a5e65c3a76b3e13876bd6933995028744c19c393312f089ab4487c7a6199e03020cb90152fca73c7e5382a9598b03b081cbb5cf02b20312419cdfee472de7725f8377c60270bbe7322a522d367eab6f7e8fd368e3dfd1c75e3059d1f84d2ecd41909bafdce38f0fa43c34d4fd25b7b8d6a28898d54683cac55edab46d3a9bedbda2663357fc7d5b2400b42c1b7e33ed6e02e44a2f0f806d227e77f7b020000",
    ],
    [
      "ETag",
      "upRs2QvvCkXRtNP1qMKAxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` = ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-126-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85547f6f9b3010fd2ac8fba795f293044823455d96d09529251d21adaa694a8c63a85bc0d4369da22adf7d8769da66dd560909cef7debd77f6992774cff20d1aa288250f2515db4f773c420d44154e60955ddd2e636b3c3d3723b9fd662db2fcfa3c4c462340b08a257156a4b42979290895c3e5a295085e165870de8442cdae6937bb76cfee3b966df74da70f4449d378c6f27ba0df2a55c861bbbd176f259c2729c505932dc2b397f5f6a3d92e04bfa344c9f6a1661b6464fb03d5d39413ac18cf47cb05382825152b9a6196828757ea26fa7c58bbc570d64a00fcc808c584f03257952f2841781eb3a414ba2a1a3e21edf3cd075ab83377121a6b4109179b15dbac0d2c8dd5aab86f1893f9d20f8fd638ab2aae8fabc43e30ce82f985b12ec0c02d9654ae8deb7337708d57c0c83835c6fed43828edf9c6d2f7dd45681c9d1e1b5f83f9f2d2f872f31602a637542a966bcb218e525ad97dde56effd695604acc0439d5c391d1b77079d93288e1c120f7a56147768140d22c7c2bda8434efab4bf8928069eaaaa6b16ce796e46033cb0ba8e451ccb31e35e6411eae0d882a54d849dd83631ed1342d0ae817e09a6e894c9824b566f2dba0ebcd05d85c1d29f8c4357b711e33255d3da5cd5c45b9f0a9a04d07ffada5559c641a93a27cf0fdd603c09bd2bb71e8d194d30d92e1e6038629c4a0a682c70461515177c039b862ee70b2ff4e6fe78060c7dde977b8444c31f4faf84705be85d56fa8dce66f37168f7b5833de40aa7a5c63cd61fa8dbb200b16bfcbbcc3808c637208d85c0db3f72d08eade97f51d0781dd5365f1451a5b68fcc83a87f10d968f773074f03c13dab95d1f7a51bdca07a29a0311534271f8f168075e2e3ffc5feee02186e2fe84805314c3291950a11b49e6896e95e6ab6e358dd4e1769b050ef72a679b23fbaaa465591663457cf2dd57757ef62952ae50b08923088bee77f85ec6f50c256233d050000",
    ],
    [
      "ETag",
      "iVhUf5ADH2bsyJ5SmnWHTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d51db4ac34010fd97f1d104cca52914fa6035d642a81a5b04a5944d328d692e1377379652faefcea652145f7cd99d3917f61cf60065d1643082a4c83f3a94fb8b1cf5931962545da5155f2d350ac102d42267653478d9ddde2d4ab77c987a4922b697eeabb31b8f59a1d277ac058c0eb029b0ca148cde0ed0881ad9b65eb7254bf4be35db6cbe08a761cc404d9901e6cb28ba9e44211cadb345d4d435fa5fa6d5d1822d25316e506293a2c9d04ada62aa67a69e12755ba1ada893292ae8c53d914bea5a21896c466cc70d6c27f0027f380802df1dfaacac2815baa086c5cb678e079ab4a862da713df05820fb919b6efaf39361a7af6126b7cff69373cf9cf387f37f73abefc7267b8dea5112475768525f9d1adc9069a5b9ad961d5a900afe80fb429ff6e3172c75cfc5dd010000",
    ],
    [
      "ETag",
      "L5WwDFTk2kOG3bbaj+2Z1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34b7282300000d0bb64ad0e628aa43b01a1c60a08c3a76e9808e1ab183e22a1d3bbd7e935eabbc3fb06248e69d745fdada23578079c8868112ff64c56f447b1e2a2eee9eb4b87f19248ad808d6edeb3d276c4eded4a8e5bfd709752e8ddaaabba616be8bb27dbb10f93397c05cdd928463b9c649c8829c17a296cdab338ecc6603748d0e5f813fb469a5b02ad79c44c356c2c3a87572d4bab9d8251dd2f037b7f6adca3a239d3066d91a57815eb9a603011814e765065cdbc8ba5298fb111ae53d718864a2aab95e6696a9285d985bbd0b7a65a4ff2dcf6e398c30f375fbcbcfc5f6006e8c88a967651f1dcbe7a436806feea473d67f4f95fa1a4a52df8f905088dcf5519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-127-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6f9b3014fd2bc8fbda3c49208914ad514ad74c09690969354d13b2cd85ba05ccb0e91455f9efbb98a66b5569fd84ed7bce3de73e78268fa288c98c3091feaea13a7c79908c9c11d034c5d7f8d0bf61f521bfbedc5355a7810fdfd3653a9f2342342c45f332838e9275c541cdf6bb6e5ac9baa495941d4cd4190cddcec0b19d913b769cd1d01d21514196ac45f188f47bad4b35ebf54ee2dd54ca34035a0ad5e5327f7def3d0d7b65251f806bd57bafd94319d5fb44f56b2639d54216f3fd0e1dd40aaa08722a32f4f08f1ab3f3f7b9bb82e6dd14c14f8203e55cd6856e7c610a2e8b44a47565b292d933313edf1cc8ce5b7bcbd0e232abf3222a680e67564c358df4a104eb32d86eac957fb90d368b70b5f5a3ddf2cadb2cbacbed7abff177d6dd95177896a62c03c3b5e6d6b9b9f97841fd18941685510f9be746f9a543ab8f83690828ada00d466edfa183497fca12e6f264628f59d207c626cc1d539bf5f97404a39801459e11352c5ac862e238539b4dfa111fd84934e26c1c4d075327b2ddb8ef0c1d66dbd309399e913f95d07021542995683b44ee8255e84561b0f7978bd0332524b4cef4456bac29e0ad478d0522e83f351d9ba890a8d4b47be5875eb05886ab5baf9df01a52ca0fbbdf38e384660a104d2b6c9e866a23636c18f1171bef02c16662d7a7a022b39fcfa4e979e3e24dcb5fe9210eb0b1abcd97ecc260e57f33764e885b9ad506f2d41e488996efb136747dfc8548dcd2360bb9d97bc10fd23e0590400505ff7c9a083681cfffb6d3e62318771f7594c63b2e0f578d0aafa05d2261ea7d61bbee78e20c890157fa436c3a1e9fdad6e46832420e857e29a9dd7cacb415abd52b0883387fdfb4ebf8171f935a107b040000",
    ],
    [
      "ETag",
      "dy0QbuymPFUasugRNeJgCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92514fc2400cc7bf4b7d1d09e01c64090fa0a84b00718c2743c871ebe6645be7dd4d4308dfddde44346aa22fb7b6fbb5ebffbfdbc3362b63f06193a5cf35aadd598ae6de0621ea3a379a1f15951ac1013422657244525f4d937e10d6db6599ee6691376da78301135a3e6221c0df4392611e6bf01ff6508a02b94d525e17e5bac91c30bbca16175118cc6e382f28b6f96c39990c4793311c9c53632c8c5837fc3fda5607079e681362820a4b8976974ad1134a1358995a14558e2d4db592a8a1819b17a9a2ba128aa8c59556a7db6b75bc73cfed5d789edbedb94ce62485c9a86478b9e005c190117948af2c133c065413b2e2a4395fb89cc58d121b06ec93db2cf815502849c5eb3fb98af77d14fc1b3eb0a305df3951505d9a13753db91bfe368e3dfd1c75358cc63f086dd8a9131205d3f1221a4ee7965b1da58f7606f55c111ba9d17ad869bbfd8b9ed77eb7f592acd5fc1ddfa81a1d90826fc76d66c04f44aef1f00688eb8eda7b020000",
    ],
    [
      "ETag",
      "BocsDMf8IRukUngyNT6M0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-128-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3010fd5722ef17d0fadd341f9510ebda8c552a69972630f6a1d6499c6048e3603b4c15eaffbe7342810a36a44acde5debdf7ee7cce03baa5798c8628a4e95d49f8f6c30d0b5103118953789bdbc16099b417dfcfc73f8837f978c7cbeb203d3901045555026f8a8c34052b7944c43058b652ceca0273c69a40d4ecf6ac66d7e81bba39300cbd67ea50284896cc687e0be5d7521662d86eefc55b296369467041452b629ba7f7edfb5ebbe0ec864452b40f35db2023daefa89e662cc292b2fc245882835210be221b4c33f0f05c1a879f0eb95b146f5a2980ef69447014b13297ca1750442c4f685af28a150d1f50e5f3c5035a3a3367ec6b6b4e22c6e3158dd71a16da6a55dc36b4f13c70fda335de28c6f5b14aec03ed8b373fd7d60518b8c68288b576f9d5f11c4d5b2b865f65a7d327daa9367227da01f7d4d502d77596be76747aac9d79f360a17dbe7a0901d7311192e695671f8719517e1fe73a7d7d9caa004b3051275766c7c05dab638749684689d51f84498784a1159a03dc0f3b91ad133d0e09863aa9d8ab2a9cb3dcb001a7eb666899ba6d586460db466cf62d62f7133824db34632be9d903b46ba03f9c4a32a1a26082d6b34597ded47756be17b8e391ef546d24b8cce4a436a79a78e953429300fa4f5f3b95a50c94d4414d5ddff146637f7ae1d4bb3123298eb6cb3bd88e046782001a73bc2192f07316c3d0d062be9cfad3b93b9a414575e08b3d42a0e1cf87e7027f5b545396d5bfd232f44a7f0fb8c0595921eeeb07d48531ec1affa61879dee80a6431e778fb36fd9bfc15be8a6a8b4f7a48a9eda3de41a41f4406dafddec1af81e092d5cae85be07857a87ee59184709247efaf1580abc4fb1f8bfdc505305c5dd0111262d8e248289588937a9be9a6eaa5ae364d6360f55005e6f255ceec74f6c7a6381423d9905c3eb6545fdc6a8a2a558a2710246109dd",
      "a97b06d9bf7a0d8b4e3a050000",
    ],
    [
      "ETag",
      "n9U5Sf/PXMCZeRD+qruhUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d51d14ec24010fc97f5d136b1508b36e1011a822404b5c89321e4284b39686febdd556d08ffee5e211a5f8c2f77b333b3b999dc110e526d2086b5ccdf6ad4cd558ef6d981144d5d58c35745ca20788056e4ec94aa3b3eec168f4d92cc93fbbc09e4f5ee73d0efb3c3643b2c05c447d84a2c3606e2d723285122afad56d5812db6a9dc3499bd8cc6a3948992368e982da6d3c1703a8293f7bd224aaa95fdd7d2f2e4c19ed6296e51a3cad065a834ed31b31357cf88b22ad03754eb0c0db4e656c835d595d0443e337ed0b9f383a81b85bddb280a3bbd909d0565c24a526c5ecc391e58b2a248e983eb41970dba85dc74db9eef4c77da1a17b474f8470bfed0c2dfdaf2f2d8b0b1689e347174832ef5cdb94142ae95e5b656d7e84126f8031ea43dcfa72f2a232577dd010000",
    ],
    [
      "ETag",
      "in3GkhUOyCCSC9gy1i+hxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "76",
      "82",
      "30",
      "0040d1bd642c1c05a4496742815244c1f2314c721002280a94f06d4ff75edb6dd4bb8237795f204e12ca18e9ea9256e019ccb180f884b71aa8e8639e2dcba176dc6a0b9d0bd7050ab98afbbca5d314e93ac389e35591413eb8d0deba22643b3c2381d324cd2241b3dc14d301be5bf429b076edecc3a02f4d13a2fc8870aeaaceb0925ea89bb96d9f9abab13105b2e68a51b40bfb1a7eca91e58601e9e3fee8fb581970aeabc3e98c6fa3c131f9a236a3125b415aff861bb5fa9a320c7354e8e2be1e90447097c991e787b27d4271a85d95f0b672df348f94fcc3c3ff0516804ecdb9a58c9cefb78b6b8416e06f7dd2cd0dbdffafd0b8a52df8fe016da3b8f419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-129-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fa34014fd2b64f6ab2d7d50689b346b53716d52a802d598cd860cd30bce0a0c3283ab31fdef7b19acab31593f3133f79c7bce7df042ee79b9277392f0eca181faf9db6f919013028a66f87ae1f9cba7fbfd43712e97ee2dbf0c9f56e9ddd5628108deb2242daa1c7a5234350339df85fdac164d456b217a98a8371ccd7a437b6c5bcec4b6ad91632151429e6e78798ff43ba52a3937cda3783f1322cb81565cf69928dedecdc79159d5e2373025cd8f9a26ca48f30bd5efb9605471512e76213a6824d4311494e7e8e11f759f9c7eccdde7b4e867087ee40c2863a22955eb0b533051a63c6b6a9d95cc5f88f6f9ee404277e3ae228389bc29cab8a4059c187baa68ac9e2b30ce83ad67acfdf36de02da3f5d68fc3d585eb2dfbabed66e7f9a17173e106aea1689283e61a0be354df7cbca0fe1ea4e2a5568fdae756f9b543ebcf836909282da10bc6cec0a6c3e96096a489c3d2e97892a403489269e24ce83819b09905d63e018a3c2daa59b414e5643848666348e374361cc59645ad78ea8cd298d9136702b663a7338b1c4ec89f9a2b38e3b21292771d2237c13a72e328d8f9ab65e4ea1252dae4eaac33d616f0dea3c20211f49f9a0e6d940b546adbbdf6233758aea2f5b5db4d78031965cfe103ce38a5b90444d31a9ba7a0f6c41e1b46fca5e79e21584fecf2189464fef385b43d6f5dbc6bf91b3dc201b67695fe92300ad6fe0f6de788b8a679a3218fdd815468f90e6b43d7875f88c42dedb290ab9d1bdc92ee2980146a28d9d7d344b00e7cfdb71d371fc1b8fba82315de7179986c55580ddd12715def2bdb711ccbd2ffaaa2b5fa149bd8e363dbda1c6d4628a054af25759b8f9576628d7c036110e7efeb761dfe02c701ad087b040000",
    ],
    [
      "ETag",
      "HMNAxkdqmFsAEYiPSxCfhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bc2d51a41469e24541942688fc942b63c8d24e4bb5edd4ddad4208efee6c45346aa237db99e937d339a7bb83a7b488c085559a3c5728b72709eaa90966a8aa4c2b7e945428040b508b84c96eb2daa8bbbeb7718aee699cb4d2539f86d3cb4b2654b8c65c80bb8338c52c52e0deefa01039725b48599517cb3ab3406f4b539c07337f7cc3794e91c9c78bd1c8eb8d06b0b78e8d91d06259f3ff687bd85bf048ab19c628b108d1ec524a7ac450fb46a612799961435125435450c3f58b4452550a49d4e04aa379de6d349d966377da8e639f776c26330a854ea9607831e705419316d98c5e5926380cc83a64c5717dbe70398d6a2526f4c78163d70b7e05248624a3e59f5cc9fbae05ff860fec60c1774ee45415fa485d8feebcdfc6b1a79fa3aebc60f083509a9d3a22817f3b9807deedc4700f07e9bdad463591c4462a341e36cfec8b76c7397bb7b54fc66afe8eab65851684826fc730d5e0c62253b87f0360472aed7b020000",
    ],
    [
      "ETag",
      "9gbxsOCAx6n9/fg3i/IoHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-130-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fe24010fd2acdde3f9a4328b4b440623c4e7b4aa2454b91783f02db32c5d5b65b77b75e3cc377bfe95654cebb332181d9796fde9b9d591ec92dcb97644022b6ba2b413c7cb8e1116910507485a7d651360bee825beb3cfa68a6f6d7e3935fb38b8bfd7d44b08a256956a4b0277929629083e9a4b912bc2ca8e07c0f0bedb52d73afed588eed761dc7eeb8361225a4c929cb6f917ead542107add646bcb9e27c95022d986cc63c7b3e6fdd775a85e037102bd9dad66ca18c6cbda37a90f2982ac6f3fde9041d9412c41c32ca52f4f0425d469fb66b3719cd9a2b04dfb318681cf33257952f2c11f33c61ab52e8aa64f048b4cf573fc8c43bf50e43632120e6623967cb8541a5319f17b70de3703cf5c39d05cdaa8a8bdd2ab1098c2fc1f8cc581468e09a4a900b6376e2059ef172b430be97a6698171600cfd23634b61e41b53dff726a1b173b06b1c07e3e9b9f1f9ea3504bd2f412a966be7218d52a85c3fddeee8ed502b0255a85b27e7aee9d076cfec4749e4c649cfea46890951d48bdc2eb52233eedb602f23a0c8535575cda239cfbbd0eed9b1d94e968965d23e42a0679a1d17204a5c27e925a68333ebba64dd203f055370c464c125ab6f98cc8251e8cdc360ea1f0e434fb791d0325547b5b9aa89d73e153689a0fff4b5aeb28ca35235ae911f7ac1f0301c5d7af5869cc28ac60f933bdc9184a612104d05cd408138e34bbc34723e9e8cc2d1d81f9e22438ffd7c839064f0edf185103e14fa9695fe26933018f9c7dac0067149d35243eeeb1f6458a057b25e37fe5d661804c32b94a642d0873f72d88e6357f4bf4868bc8e6a9b1bc936a9d43651672bb2b72287ac7facf1d320f8dc6a657231f5822b521f059080803c7e7fb510ac13efff6d6c9e3082f111a38e5418e326c7b2528905d41bcd32dd4bcd76dd9ed5ee130d16ea4dceee7436a3ab6a541521835c3db5543f617d8b55aa94cf",
      "204ce222fa7a8aebdf27b9982044050000",
    ],
    [
      "ETag",
      "3DmWRqRk3Pb+0l4ZGHzWQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "db",
      "6a",
      "c2",
      "40",
      "10",
      "fd",
      "97",
      "e9",
      "6b",
      "025ed208820f5a62b584d4a6f5a988ac714c739d7477d222e2bf77368af4a9f46577e65cd873d8131459bd8731ecb2f4b3457dbc4b915fec10a3694b367235541b040790552acaf9543f174fb35514e6f35c6b0f97e5c24f27135198e4032b05e3131c322cf706c6ef27a8558562db6e9b42247c6cecb68cde82c72016a0a2bd05a275184e67610067e7665115b535ffcbb4393b90d32ec6036aac13b4191a4d3926bcb4f58caa9a125d43ad4ed04027ee885453db284de40ae2f6873db7ef0f7d6f74effbde60e489b2a4447146b588d7af120f985895317d4b3d188a4077a3343d74e797c0fdae869dbc2edb6fcefb831bdcb881e536d7c7664746b3d224d10ddad4bd4b8307b2ad58dab26ed18144c9072c32beece71f5e8a0514dd010000",
    ],
    [
      "ETag",
      "FArOkJBPNLjFjrr4eIlH6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ffedd34b7282300080e1bb642dce10e491ee2a55aac2805010d930112252b02404c2a3d3bbd7e935ea77807ff77f039c6584f3b46b2af2055ec084215a66cb0335d6dbe1f62a5d23dcc302798d6f84f02634ef0a85706767a6a53d0634d9100443184ef987e0b2efeee57437566662e5be1645bc194fda265a996e697eee8a95bf1d1e853cb1da152a7424c9fcec18ef70509cbab9b48c7545c86dd53adef1204fcaec5c5473b2a2a3de52e59e3855bd3dbd09560a916979a6da2a73031d3b631355b211eb35bedc0eaac9626fb699b4f7ab80e4635f4be7754c7a7690fb2adbc5cba7a7ff0b2c001969d9129e968fdb1515a105f85b3fed264a1effaf096e490b7e7e0177b3303019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-131-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d6f9b3014fd2bc87b6d42080442a468cd12ba22256423a455354dc81843dd02a6d8a4eaaafcf75d4cd3b5aab43e61fb9e73cfb91f3ca37b56a5688612963fb4b479fa72c7137486a8c439bcba87e99f72755ddf6c02efb0328da2fee657f97c0e08d6b1042eeb820e046f1b42c56cbf1be60d6f6bdc703e804403c33406866dda9633b16d6bec584014b4c8d6acba07faad94b598e9fa497c98739e1714d74c0c092f5fdff5c358af1b7e478914fa7b4d1d6484fe89ead782132c19afe6fb1d3868056d625a625680877fd434397f9f7bc87039cc017c60846242785bc9ce17a420bcca58de362a2b9a3d23e5f3cd01edbcb5b78c34c28bb6ace20a97f44c4bb1c4b17caaa976116e379a1f5c6cc3cd22f2b741bc5b5e7a9bc570b95def37c14ebbbef4424f933829a8e26a73ed5cdd02b8807e4a856495528fbae74ef9a543fec7c174049016b40fc6cec8c6c674e42659e2906c6a4e926c4493649a38136c2623e25ad44a138a81a744150b57bc32c6a3f1d4b6b3d8c62e8e2d173b31b6d3247689e19ad84a47664ad0f10c3d364cd215133517acef10ba0efdc88ba3701f2c1791a74ac8705bc8556fac2be0ad47090502e83f351dbb28e3a0d4b5db0f222f5c2c23ffcaeb27bca639264fbb079871860b41018d1b689ea4cd86a7d030142c36de0ac06a623f4e418166bf9e51d7f3cec59b96bfd22318606757aa2fda45a11f7c57764e882b5cb40a72e80fa806cbb7501bb83efe06246c699f05fddc7be10dea9f429ad18656e4f3690258053effdb4e9b0f60d87dd01112eeb03c44742aa4a1fd123155ef0bdb715c6332410adcc80fb1b16d9ddad6e5e832d29256f2a5a47ef3a1d25eac15af2008c2fc03d5aee35fedc256787b040000",
    ],
    [
      "ETag",
      "9v8zmDWpYMNEvD31lpBIng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92514fc2400cc7bf4b7d1d09c8d874090f43104900718cf8600839b602c36d9d773709217c777b13d1a889bedcdaeed7aeffffee00cf491e8307cb64fd52a2dc5fac513f98204055a65af1a3a05c2158805aac990c6df7fab1e906ddba68e5bbc904755f3abb769b09156d3013e01d6095601a2bf09e0e908b0cb92da2b4ccf2459559a0f785294ec36030ee739e516cf2f16c38f43bc31e1cad73632cb45854fc3fdae6470bb6b40c708512f308cd2e85a42d467a60642a911529d61495324205155cbd584b2a0b21896a5ca9359a8d5ac3693ab6db721cfbd2b5994c29123aa19ce1d99417044d5aa401ed5826380cc82a64c5abea7ce57212574a4c3818878e5d2df8159018918c177f7205efbb11fc1b3eb09305df39915199eb33753bbcf77f1bc79e7e8eeafa61ef07a1343b7546c2c1a8370dfdd1c470f393f4ce5ea39a486223151a0f1b75fbaae53af5775b6fc858cddff1b42cd18248f0edb84b34782b912a3cbe015af43a697b020000",
    ],
    [
      "ETag",
      "T479W37RD0a5nwPPetGr6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-132-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85547f6fda3a14fd2a91f7cfa6510824248054758c661d5217fa42d8d6fd10d88e93790d716a3b9d50c5777fd7ce58cbdedb2a21c1f53de79e73afafb94737bccad004115edc364cee9e7d17047510d3b880d3d9c797179f74f071b88b670371bb7b3925f175717a0a086e580a6feb929d28d148cad464b5ec1652343596429c40a193be3738e9075ee087c320f007a10f44c5cafc92573740ffa675ad26bdde41bc5b0851940cd75c75a9d8fe3aefdd0d7ab514df19d5aa77acd90319d57b42f5ac14146b2eaad3d5121c348ac935db625e8287076a465e1dd7ee72bced1600bee394614a455369e30b4a5051e5bc68a4ad8a26f7c8fa7cf4032da3cb68963a1bc9a890d99a671b072b67bdae6f3ace6cb18ad3e71bbc3515372f4ce210386f92c53b675383816f5831b5713ebc8d92c87938da385f1ad7f59873e64ce373e748611e3bab388e96a9f3fcec8573912c5657ceebebc710f09e31a579659da79894ccb8fe39ddf97f2fd510b006dd36b90edd00f747ee98e424a4f9c81b92dc65848c4838c41e71e9d8677e4618069e36d52d0b57a2eafb7e3ef4b2301c8f5de27b19213ec9f3d198850397fa41e87a74803daf8ff61df44372cdceb9aa85e2ed84d187649e46eb3459c5b3691ad93672dc94fabc35679a78ec53439300fa4b5f7b93e50294cc75cde3344aa6b374fe3e6a37e4921598ee96b7b023392e1503349678cb3493ef44064343578be53c9d2fe2e92530ecb55f1d100a4d3edf3f10d25d6da7aced375aa6c93cbeb0060e88f7b86c2ce4aefd81700d5ed17edff9739969924caf411a4b8977bfe5a09dc037f4ff91b0781bb5360f9266f20fd1e028f28fa200edbfeee1d341f0dc5a65f4cf2a4aae517b94b09c4956d1a7570bc036f1f4dfc6e10903181e31e8280d316c325546854ad66e34dfda5e5ab659366f882c58eadf7223b7df1f1caeced43015d99655fa674bed13b65334a946fd0241121631b6b7b8ff171cac270944050000",
    ],
    [
      "ETag",
      "CX+GZt6X5yNC2oqy+AbNYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcb788528052192f4500cd146d254b4178d69b630455a60e8eea02184ffee501bcf9e76df9b6f66dfec00c7b2c921845d599c3ad4fd5581fc3c5d52345dc5468e961a836001b22a8474c88d9fdcaf75744d4e11c4f876eae96e319f0b61b24fac158403ec4bac7203e1fb008daa51dab6dbf62808f7eda496abd7f8214ec5a8299f8cd52649165112c368fdb5a89aba86ffd5f4315a70a05d8a7bd4d864386568351d30e3e5b49e51755ba16da8d3191a38c3e742a1a96b9526b2c5b11d77663bbeeb7bc1adef7bb3c013b2a24c71498dc09b1789074cacaa94be653db8818b8e7a46b3d624d30de6978a8cbca7e9619640ac3bb42053f2478f25ffeaf1075332f68f80010000",
    ],
    [
      "ETag",
      "1o3EK3vPB/o1g7EeZqyo9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1f8b08000000000002ffedd3d15682300000d07fd9b378b4c974bd6580180293c4c6d30e8ec91682320c814eff9ea7dfc8fb0ff71ba49c8ba661d773212af00cfaf4098ff9d8bb2c96ce4d35e1be35c204d78b7091eeaae31c3b656246644f2dc33712e3c3e5b18378d66739929b4c9e07b5c63ba810ac83755fe116c6fe5b358d5a6e853ddd40b99d74307ad91e2ca760b7941e6603c3c768ea76f3325ceb21f73ff121b635229ded11541f4b22f7b5d470db3409a55407c4b34d657bca9c59c4e3ab2f591646ec9e6e2b88f2ddb5ea50d64a57bc323af1491006d3f2b48cca3c7db2181f0af43e7e78f8bfc00888eea2b46898ba6f8726c623f0579f5dfb8bb8ff5f8a540b0d7e7e01cdd1425a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-133-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da3c494212295aa394369112b20269374d1332e642dd12ccb0e9d655f9efbb364dd6aad2fa09dbf79c7bce7df04c1e789190298979f6b386eae9d3bd88c9190145337cf5fe6c37d7cb749d05f3e5e4ebefabdb78e1de5ccf6688e09a25e9becca125455d3190d35dd0ce2a5197b412a285895a3ddb6ef546f668e00c47a341df192051429eae79f180f43ba54a39ed748ee2ed4c882c075a72d966627f7aef3cf63b6525ee8129d979abd94119d9f940f5732e18555c14b35d800e6a0955047bca73f4f08f9ac4e76f73b739ddb733043f7206943151174afbc2144c1429cfeaca6425d367627cbe3a90c05dbb8bd06222aff74554d03d9c59095534524f255897fe7663adbccbadbf9987abad17058ba5bb99b717dbf56ee305d6edd2f55d4bd13807c3b566d6b9b9797841fd04a4e285510ff5b3567ee9d0eafd603401a52534c1c8e98e686fdc9dc469ecb0746c0fe3b40b713c8e9d21b5e32e9b0c6090c4409167440d8b16a2e8d90c26d01f465d3a48a2819df4233a845144fb1306badf492f268733f2abe20a2eb82c85e44d87c8adbf0add28f477de621ebaa68494d6b9ba688ce9025e7b54582082fe53d34147b94025ddee9517bafe7c11ae6edc66c26bc8287b0a7ee28c539a4b4034adb0790aaa8d48402ff77ce35e20d84ceccb3128c9f4fb33d13dd72e5eb5fc440f7180daae325f1284fecabb32768e881b9ad706f2d81c488996efb036747df88148dcd2260bb9deb9fe37d23cf990420505fb789a0836818fffb6e3e62318771f75a4c23b2e0f935a8555d02c1137f5beb09d71d77186c4802bf52e3636994f",
      "1baf33c21e0af55252b3f958692356cb130883387fcfb4ebf01771ab08e37b040000",
    ],
    [
      "ETag",
      "NzOMQHfLgSAH9XxGWbCEVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4e83401085df65bc9426ada5b421e905add536e99f80371ad3ac30b454607077d1d4a6efee2c6a356aa237cbccf0cd30e7b07b78488b185cb84fd78f15caddc91af595097c5455a6153f4a2a148205a8c59ac96bc7cfe69b9738192fbca14fc1ec66db3bf5fa7d2654b4c15c80bb8724c52c56e0deeea11039725b44599517ab3ab340ef4a530c427f32bfe43ca7d8e4f3ebe9d41b4c4770b08e8db1d06255f3ff68bb3b58b0a57b1f13945844687629256d31d213235389bcccb0a1a892112aa8e1fac55a52550a49d4e04aa3d56e375a4edbb1bb1dc7b1cfba3693194542a754180b025e10346991f9f4cc32c16140d6212b4eeaf389cb695c2b31e1641e3a76bde057406244325efdc995bcef46f06ff8c0de2df8ce899caa421fa98be9c2fb6d1c7bfa39eadc0b473f08a5d9a923124e66a320f4664bc3ddbd4b1fec34aaa5243652a1f1b0d5b47b9daed37cb37548c66afe8eab65851644826fc738d5e02622537878058d93ab057b020000",
    ],
    [
      "ETag",
      "U6RlNhzdfHOACRoSMZj8+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-134-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554ff8f9b3614ff572cef9756ca17921002914eb72c47bb4829b911d2eab44d898107750398dae6aea753fef73d4373bbacdb4e8a14ccfb7c7bf6334ff4c8ab94ce69ccf3af0dc8c79fbe8898f6286896e3db7cf14d35eb87f2b8dc35774ef16ec9bd63fe707585086e588a9575017d251a99809aefb6835c8aa66652883e0af54713bb3f72268e3d9b3a8e3d9ed9485450646b5e1d91fe59eb5acd87c3b3f92017222f80d55c0d12513ebf1fde8f87b5145f20d16a78e939441b357cc5f5ba1009d35c5457bb2d266814c83d948c17a6c5676a1aff7ca93de0ac1ce408bee709b024114da54d2e94484495f1bc91ad2a9d3fd136e78b07baf5d7fe322207098990e99ea707c214d9efeb638f2c37bb207a7360a5513cbc3585f382bc0b371fc8a1c6009f990275209f7ef5439f9043ca341cc81f8d654d805c934570432ed45701d90581bf8dc89bebb7e47db8d9dd925fee5e4230770a4af3aa4d1db1b80093f8fbceae7e3c5043601a6374c5fdcc72d8c8b5bc388b6749e64ea67166411cbbf16cca26b1957836d8690c0c79daa8b72c5689ca8ebd09cb92e9c8b13dcf052bb3270ed8ccf132187bb69bbae9c4b5edd1989e7af441720d375cd542f16e77e9a77015f9fb28dc05cb45e4b76d64ac29f44d17ce34f132a7c62611f43f7d9d4c950b743247b50a223f5c2ca3d547bf9b8e35e42c79dc7ec5f9c858a100d14cb21234c80f22c54da3b79bed2a5a6d82c51a19ed91df9e118ace7f7ffa9b103dd6ed2eebf69fde98064e2f043fb2a26901f7dd031d5b63ab6f8dfba3293d9d7affadb408c3c51dba3329d9e33f6ad891631bfabff8b4f876d5253dfb8ea8717b4e71b1b22f560e3dfd79c25f8fe26deb9ce96f3b3fbca3ddab1032905025af4f1782dbc2eb5f8df30d4630de61f4511ad738cc89322e89846ea879d9f6d2b167ee686a79b4054bfd43cd99bae7d3331a46114aa8f4f796ba1bdceea22935ea1984459cc56015bcc7ea5f16c0e3dc43050000",
    ],
    [
      "ETag",
      "gAxsuLwmkCUuY6lFCi9kgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d51d14ec24010fc97f5b54d2cd49290f020a64194a054f1c510721c4b29b4dd72b75509e1dfd92b44e38bf1e56e76663637933bc0362b97d0854596ee6a34fbab1479e24082b6ced9ca555169113c4056a938d3a745845a47fcf0f8b6ddad075f413ac149af270eabd75828e81e609561beb4d07d3f40a90a94b5f9bcda8a85f7959b86e3d77810274214b474c4783a1addf647311cbdef1555505df2bf9666470f36b4487085064b8d2e436568839a87ae9e554595a36fa9361a2d34e646480dd5953244be307ed00efd206a4761e7268ac2562714674e5a7146a598a72f120f9858e5097d4a3d688bc134509aae9af343e85653e382660eff68c11f5af85b9b5d1eebef19edb321896ed1a5be3e37b823d78aa52d9b1a3dd04a3ee03ee3f37c3c01ea41035edd010000",
    ],
    [
      "ETag",
      "gOb6ecc6tJKVkqhGx1gQeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ffedd34b7282300000d0bb64ad0e7f4277c43f1901a56071c3f089428a8a4900d1e9ddebf41af5dde13d419ae784f3445cbfc9057c802155ac493ec10d448b9e9e7b8d96451cb8777f3d28e95172a8238b9be0facc909c36d55094a0ca88a7aa12349f9cc2d2775563013b2fa7743f23a74386afdbbeed2ea913cc37e5d55eead63cd2f799c1c47155620c45bcc3bee6f9b4c3acf82acca25b74703d1d586d192b2dcc4f367463d66f6a81c6da9653b57525f306b39a2bd2a376434f0af7e6ed5cb507657956efe8d1aab00a775616991da501f64be6dbb3319f66bdecc993b7b7ff0b8c00b93715233ca95edb55ddb246e0af7e228686bcfe239232c2c0cf2fd1c36a3d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-135-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda843c202491a2354ae88ad6900d48ab6a9a903117ea9460864da7aeca7fdfc5345dab4aeb276cdf73ee39f7c113b9e7654ae624e1f9af06eac74f7b919033028ae6f8fac7fbba0f9d6c381885f56a23f6ebdbbdb9ca170b44f09625e9a12aa02745533390f35dd8cf6bd154b416a287897ac3b1dd1b4ec613cbb127136be4584894506457bcbc47fa9d52959c9be649bc9f0b9117402b2efb4c1c5edecd879159d5620f4c49f3ada68932d2fc40f5732118555c948b5d880e1a09750c07ca0bf4f08f9a26e76f73f7393df473043f70069431d194aaf585299828339e37b5ce4ae64f44fb7c7520a17be5ae228389a2399471490f7066a454d1583d56605c04db8de1f917db60b38cbcad1f87ab4b77b3ecafb657bb8d1f1a37976ee01a8a260568aeb130cef5cdc70beaa720152fb57ad43eb7cacf1df2de0fa625a0b4842e183b83091d4e07b3244b1c964dc776920d2049a68963d3713260330bac34018a3c2daa59b414654213c6609ac60eb567b135a2344ea68371eca436000cb2b6ebe478467ed75cc19acb4a48de7588dc045ee4c651b0f357cbc8d52564b429d4ba33d616f0daa3c20211f49f9a8e6d940b546adbedf9911b2c579177ed7613be829cb2c7f017ce38a3850444d31a9ba7a0de88141b46fce5c65d23584fecdb2928c9fcc713697bdeba78d5f2177a84036ced2afd25611478fe176de784b8a645a3210fdd815468f90e6b43d7c79f88c42dedb290ef3b37b825dd530019d450b28fa789601df8f86f3b6d3e8271f751472abce3f230d9aab01aba25e2bade67b6331d8d6d9b6870addec52c6b766a5b9ba3cd080728d57349dde663a59d58235f4018c4f9fbba5dc7bf395733807b040000",
    ],
    [
      "ETag",
      "zIKjS7f102SrCMojDYj/Cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b",
      "fd",
      "e84844c7304bf830141403a863c41063c871eb60b8adf3eea62184ff6e6f2a1a35d12fb7b67bdaf57d775b784c8b187c58a4cba70ad5e66089e6d60621ea2a339a1f25151ac1013462c964729eafe538beebf7c22b7774773a93fdd961d0e930a1e50a7301fe169214b358837fbf8542e4c86d92b22a2fe675e680d994b63889c2c1f882f39c629b8fa7c361d01df660e7ec1b6361c4bce6ffd1f6b073604d8b1013545848b4bb948ad628cdc0cad4222f336c68aa94440d355cbf582aaa4aa1881a5c69344f5a8da677e2b9ed96e7b9c76d97c98ca43029150c4f27bc201832220be9856582c780aa43569cd4e73397d3b85662c3c138f2dc7ac1af8042492a9effc995bcef4af06ff8c0de2df8ce899caac2eca9fef03af86d1c7bfa39ea3c887a3f086dd8a93d120d46bd49148c6e2cf7f02ebdbb31a86f14b1911aad87cd23f7b4d5f68ede6c3d236b357fc737aa4207a4e0db71991af0139169dcbd024b582ad37b020000",
    ],
    [
      "ETag",
      "fDmjcNdWFERJ4MW8YcFY+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-136-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2b96f7a59592f04c4822555dd6b20da9251d21dbda6d4a8c31a95782a96dda4555fefb2ed074cd5e9590c0bee7dc7bee8b077cc38b148f71c257b715939b57df45823b9869b2825b690569beb9be327e24f79f6f8cecd27604bf3f3a0204af598aaccb9c7595a824656a3c9ff556525425914274c151d772065d6be00c5caf3f18b8b6e70251b13c3be3c50dd0afb52ed5d83076c17b2b2156392325573d2ad64ff7c69d6d94527c67542b633fa6016194f142d4e35c50a2b9288ee63350502926176c4d780e1a7e51d3e4f5beef1e27ebde0ac0779c3242a9a80a5deb02175414195f55b2f18ac70fb8d1f9ec03cffc33ff24464bc9a890e982a74b44145a2cca9b0e3a99cec3f86049d6b5c7e5616dd81dd0db687a8e962508b8268aa925faf4de8f7c84964a83b825fa5a99a6c3d0319a84a768cf7d10a27918fab3181d1c1fa277d1747e81de5c3e8780f09429cd8b46764c929cd5921f4b1bfcd9d19a4034e8688d0bcf1c106b688e922cf1683674fa4966b22419265e9f388949472e73d38411e0e9da7bc32285283c4a9dc4a1ae957923cf1ad98e33b49d3ea19edd771c6f6439763aeaf72d0f6f3bf85e72cd4eb92a85e26d79f1a72888fd451ccdc39349ec376964a4caf5692bae4ee2b94e0d4902e83f796d6b2b1710a9ee5510c67e343989838f7e3b1e676c45e866760b0392915c31401349d64c33792e52281abe98ce82389886933360343dbfd821141e7f79f8458837655365ddbc711c9c438b26e7178d861de823c9ab0675d77e60dbb4cdae6977ad7e6cd963cb195b6ecf34cd2bbcdd76feed7c1245934b1044a4249bdf6c90e4c0ade97f89dae09b532b7ea7c2c275b4274d7b2777ef34c0db6f5b783a1836b08d8c3fccfde812b75711cb9864057d79e000dc185efe93ecb61ac0b0d71007564473986faaea2854b276cef9bac9a5657b43c7f46cdc",
      "80a5fec3660dad5d436b1fb547b666857e4ca9ddeaa68ab5a9524f2030c2788641f80eac3f011f3ce4e257050000",
    ],
    [
      "ETag",
      "r1IdlyhZ/xbwXk/fY23oiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "d1",
      "6a",
      "c2",
      "40",
      "10",
      "fc",
      "97",
      "ed6b02d5a411051f5442b504d1589f4a90f3b2c668924def2e2d41fcf7ee4569e94be9cbddeccc2c37c35de09c57298c609f67ef0daaf62143b3b62046dd1446f35553a5111c402332760e36b4cc8672b5381d67db70ee45c3fee4653d1eb343cb239602461738e458a41a466f17a84489bcb6dbd567b698b6b6d362f91a3e87311325a596586ea368328d42b83adf2ba2a4a632ff5a4aae0e9c681fe3011556126d865ad109a559d87a5a947581aea64649d4d0993b2153d4d44211b9ccb83d2f707b8117f883a720f0fb039f9d05496172aad8bcdd703c30644411d327d7038f0daa83dcf4d09d1f4cf7bb1a779458fca3f5fed0fcdf5a727f6cda1ad42b451c5da34dfd786b3023dbca705ba31a74400afe80796e6ef3f50bd2f07a37dd010000",
    ],
    [
      "ETag",
      "7SoNg9cPIjhCUEH3L92AJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd3cb7282300085e177c95a1d8a5642779001d1104181a26c3288c1461130dcedf4ddcbf435eabf3d8bb3fabe419c24acaa685ddc580e3ec010cbea2c99e112ea66771db67c8dda5e7b76a67b60a7de656f11d4d96678f08c86d7543a498186f109ad2e5276467bc4da43b2b1832a86867fe0ddeaeed885265ab96f9701d9750be779a6c74ca97144e8400a6f67bb38d6092451710fd656673565985f7c4971a556f9f4a6d7f4e632ef08b98d842b07c59c2267f335ad6ebaed947e3f3e0fb5576ccf14e63d69a4a5d13c4ccb792c42a7d54ca8e4a968d471bd68e6a232728e67af5efddfc004b0bee48255948fdae7efaa3a017ff4693d946cf4afb35830017e7e01ef10bdde19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-137-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc8fbd82681bc4822456b94d035534236425a4dd3846c73a16e09a6d864abaafcf75d4cd3b5aab47ec2f63de79e731f3c917b91c7644298481f2a281f3fdd4946ce09689ae2eb83ed5c656707faa738fb2a0b7658dc5f57ce6c3a4584a8598aee8b0c5a4a56250735d96ddb6929ab829652b63051cbe9b92d67d81bf6ddc170d8efba7d242ac89295c8ef917eab75a1269dce49bc9d4a9966400ba1da5cee5fde3b876ea728e51d70ad3a6f353b28a33a1fa87ece24a75ac87cbadba2834a4119c19e8a0c3dfca3c6ece26deeb6a0fb768ae083e040399755ae6b5f9882cb3c1169559aac64f2448ccf5707b2f556de3cb4b8ccaa7d1ee5740fe7564c358df46301d665b0595b4bff7213ac67e172e347dbf995b79eb5e79bd56eed6fad9b2b2ff02c4d5906866b4dad0b73f3f182fa31282d72a31ed6cfb5f2738796ef075313505a41138c5c7b489d913d6609737932ea0d5862036323e60e688fd97cdc877ecc8022cf881a16cd650e6ecc062eb0a8cf6227ea272e8dc63ddb8e9c6434e8dae0265d1892e339f95d0a0d0ba10aa944d32172132c432f0a839d3f9f859e2921a155a6178db1ba80d71e351688a0ffd474aca342a252ddeea51f7ac16c1e2eafbd66c22b48297fdc3ee08c139a2940342db1791acab58cb161c49fadbd0582cdc4be9d828a4c7e3e91bae7b58b572d7fa18738c0daae365fb20d83a5ffc5d83921ae695619c8a13990022ddf626de8faf80b91b8a54d16f27de7053f48f314400225e4fce36922d8043efedb4e9b8f60dc7dd4511aefb83c5cd52abc84668984a9f799ed8e7a23c725065cea77b17177786a5b9da3ce087bc8f57349cde663a58d58a55e4018c4f9fba65dc7bf969abdb37b040000",
    ],
    [
      "ETag",
      "q01Hl+vaxp+JopbvDkVu1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd4ec2401085df65bc2d919fd292265c1445c5000a9444630859da01aa6da7ee6e31487877672ba25113bd6967a6df6ccf39ed0e9ee22c020f16f1eab940b93d59a11e99628caa48b4e25b4e9942b000b55831a9ddce68516fe112ddebfbfae9ddeb68f3447ebbcd840ad7980af076b08c318914780f3bc8448abc165252a4d9bcec2cd0dbdc0c27c1b837bce43ea5c8f4c369bfef77fa5dd85bc7c54868312ff97faccdf6163cd262ccea2466211a2db9a4470c75cfd85422cd13ac282a64880a4ab87cb09254e44212557852a935dc4acd6938b6db741cbbeeda4c26140a1d53c6f074c202419316c9985ed826380cc8b264c7cbf2bae1711c954e4cd91b068e5d0afc0a480c4946f33fb99cf5ae057f860fec10c1774ea45464fa485df46ffcdf8ee34c3f8f3af783ee0f42694eea8804bd417712f8835bc3cd0ed63b5b8dea561207a9d06458abdaada6eb54df633d231335bfc7d3b2400b42c17fc755acc15b8a44e1fe0d4df7bf5b7b020000",
    ],
    [
      "ETag",
      "t7BQb28efe7JY2/XzQvkoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` > ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-138-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85546b4fe33010fc2b91ef0b487d3fd28784b85202542a29a429a8ba3bb5b6b32986340eb603aa50fffb6d120af4b83ba448c97a677666ed755ec8838803d2274cac1e53509b6ff7929112014357b81ad79bbd792467971720e849e37990d85e7a7d74840891b1345d271194b54c1507dd9f4d2b2b25d3842a29cb58a85c6f76cb75bb69b73a6ddb6e353a2d246a88c2b1881f907e674ca2fbd5ea4ebcb2927215014d84ae70b97e5baf3e35aa8992f7c08daeee6b56514657bf503d8e24a746c8f868364507a906b5803515117a78a706ecfb7eed8aa0ebca0ac14f8203e55ca6b1c97c61092ee350ac52955725fd1792fbfcf041a6ced819fad65201972a58886069516d2d16c943c91a4e66ae7fb0a4ebace2f2304bec02ebcc9b5c5acb040ddc510d7a69dd5e389e63bd037ea6b55a13ac636be09e5a7bf547ae35735d67ea5b07c787d6b937995d5927f38f10741e803622ce7dfb944590797edddbd1e723cd08d4a09122b9e8d46c5aefd67a2c641d1e769b6d16d680b12eebb46993d578af05ad8001459ec9aae72c1acb9806cdb0d3aeb78171c6c066c0bb21ef844ddea634ec068cb17a1806bc46b625f2ac848153a113a945b1bfe4d61bf9cec2f766ee70e03b791b214d23735a98cb9af8e8d3609308fa4f5fdb2c2b242a658735727dc71b0cfdd18d53ccc71856946fa68f3821218d34209a2aba0603ea5206b869e46a321df9a3893b1823233ff4ab1d4293fe8f977782bf49f25d36f99b9c8d2703df6ee50e76901b1aa539e6a9f820f54a1b11dbd2bfcb0c3c6f304769aa14ddfc91c376ec9cfe17851c9f4785cd374592a9eda2c65ed4da8b6cb2fdb5c5a744f0b215cae47ae67873522c79108282987f3d5a08ce135fff34761718c1788551471b8c7192b9ce54b88262a2c53aefa56077baad76f1cb3154994f39bbd7d81d5d5623ab086b88cd6b4bc505ce77314ba5fa0d84491c4477e49e63f637baf864fd42050000",
    ],
    [
      "ETag",
      "n139YloUMHeiaB2wAp6RuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "d1",
      "4e",
      "c2",
      "4010fc97f5b54d2cadc590f0208628092152411e0c2147596aa1ed9e775b1509ffce5e2118e38b2f77b3b333b999dc1eb679b5820e2cf3ecbd46b3bbca90c70e2468eb82ad5c9a2a8be001b2ca4419bcccc681a672d6d3df21b75b03ad265f59b72b0a9bbe61a9a0b387758ec5ca42e7750f952a516c8b85de8a8477da4d83d1a4ffd04f842869e588d17438bceb0dfb70f02e1655525df1bf4cf383071b5a26b84683558a2e8336b4c19407ae9e55a52ed0b7549b142d34e2669119aab53244be307e10defa411cc651fb268ea3563b126541a9e29c2a114f9f251e30b12a12fa947a108ac034509aae9bf343e85653e38ce60effeca2cb2ef8b30b7efbe6e7c77a3b46fb6448a25b74a9af4f0deec9b56269cba6460f52251ff098f3693e1c016e23a5f2dd010000",
    ],
    [
      "ETag",
      "1VWQ1pomWBpz3t72IpaTxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd3dd7243401800d077d9ebc4485442efc45fadb0680c931ba3f2118d58bb4868a7efde4c5fa339ef70be515e14d0f7d9402fd0a25734e76b552804b75376d6bd2eac97ebc48fd90c4669b20d3bdf3e7d9e849bea94f8761c5823d6c9b6949c7325cfab986c45032b3449c9cd6fd6fcc031ec07c539a4cb68ef93d8866d63e6c46eed119315f9d2026daa65724cdfcb8b1baf7618c6548dafe0738f9a1eced2c934aca3bf11c55862f254d41d68d4334e6615b2d0e9a8398d018d68cfd8475d39ed9294fd5b390c2eeb75bb6ab114cdeaa949c8ad701b9ddf19639ed70a4f4fff175a2098ba9a439fd58fed92acaa0bf4573f1be60e1eff779073e0e8e717f5d0314e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-139-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbdabc032491a2354ae98a94901548ab699a903117ea1630c5265555e5bfef629aae55a5f513b6ef39f79cfbe0853cf032210b12f3ecb181faf9dbbd88c9190145337c35ddc4e2a360deb0ebc9939fc1b0bedaabd5728908deb2242daa1c7a52343503b9d807fdac164d456b217a98a8379acc7b236b624d6dd3b2a6637b8a440979bae1e503d2ef94aae462303889f73321b21c68c5659f89e2ed7d70180faa5adc035372f05173803272f085eaf75c30aab82897fb001d3412ea080aca73f4f08f9ac4e71f73f7392dfa19820f9c01654c34a56a7d610a26ca94674dadb392c50bd13edf1d48e06c9c7568309137451995b4803323a18a46eab902e3d2df6d0dd7bbdcf9db55e8eebc28585f39db557fbddbecb75e60dc5e39be63281ae7a0b9c6d238d7370f2fa89f8054bcd4ea61fbdc2abf76c8fd3c989680d212ba60640f2d3a9a0de7711adb2c9d4dcc381d421ccf62dba49378c8e65398263150e46951cda2a52893c4b266f3198d86e9388db0bf2c9adb711ad1e998268c4d46233627c733f2547305175c5642f2ae43e4d67743270afdbdb75e858e2e21a54dae2e3a636d01ef3d2a2c1041ffa9e9d846b940a5b6ddae173afe6a1dba374e37e10d64943d078f38e394e612104d6b6c9e827a2b126c18f1565be702c17a623f4f414916bf5f48dbf3d6c5bb96bfd1431c606b57e92f0942dff57e683b27c40dcd1b0d39740752a1e53bac0d5d1fff2012b7b4cb42aef78eff8b744f3ea45043c9be9e268275e0ebbfedb4f908c6dd471da9f08ecbc364abc26ae89688eb7a5fd9f6cc9cd833a2c1b5fa143387e6a96d6d8e36231450aad792bacdc74a3bb146be813088f3f774bb8e7f01109793727b040000",
    ],
    [
      "ETag",
      "5Id6i1S9ucQ3wRge0rHUtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92614f83400c86ff4bfd288b4e1953123f309d8e64cec9588c31cb7242614ca07877a8cbb2ff6e0f751a35d12f475b9e96be2fb78687ac8cc185fb2c7dac51ae7652d4d7260850d5b956fca8a8540816a01629932f0bdd5eede9a97f7e43bddd6cef6c709b84dec909132a5a6021c05d4392611e2b70efd6508a02b92da2bc2eca799359a05795294ec2c01f5d705e506cf2d17438f47ac33e6cac6d632cb49837fc3fda661b0b96741f608212cb08cd2e95a42546da37329528aa1c5b8a6a19a182066e5ea492ea4a48a216575aedc3e356db3974ec6ec771ec83aecd644e91d019950c4f27bc2068d2220fe8996582c3806c42569c34e71397b3b85162427f143a76b3e057406244329effc955bcef42f06ff8c0de2df8ce8982ea526fa9f3e195f7db38f6f473d49917f67f104ab3535b24f42ffb93d0bb1c1b6ef62ebdb7d2a8c692d84885c6c3f6be7dd4e93afb6fb69e92b19abfe36a59a30591e0db31c834b889c8156e5e01dc2a087c7b020000",
    ],
    [
      "ETag",
      "xht1y/tUIFWoB+i/DHYfTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `id` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-140-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8554fd4fdb3010fd5722ef17904a9bb6f9682b21d641b6552a294b5310fb506b3b4e312471b01d1042fddf774e2850c186142939dfbbf7ded9e73ca21b5e246884085fdf564c3e7cba1604b510d3780dab2c26893bbfbe4fd305bdcb7fc6672c96b7e3c343407053a5705e66ec40894a52a6468b797b2d45556229c401101d741dfba0ebf53dc7773dcfe9f90e142a96a5535edc40f995d6a51a753a5bf1f65a8875c670c9559b8afc79bd73d7eb94525c33aa556757b30332aaf381ea512628d65c14878b3938a814934b96639e818797d2847cdee56e739cb7d700bee394614a455568e30b28a82852beae64cd8a468fa8f6f9ea03cd8369701c5b2bc9a890c992272b0b2b6bb92c6f5ad6f16c11c67b2b9c1bc6d5be496c03eb6b343bb5562518b8c28aa99575f13d8802cb5a1986df956df7a975648dc3136b877b125a8b300ce6b1b577b46f7d8b668b33ebcbe56b08b84e98d2bca83dc79864ccf87ddad7c9dbe3340558838926b9f46d0f7707f690a4c4a7e9a0ef92d466840c88efe23eb1e9d0614e4218863a6dd8eb2a5c8882f5dd047bb66f27ee70e0f7fd94f4dda1977ad823430235bda1d325aee3a14d0bdd4baed90957a550bcd95b74114de26019478bf0781c07751b29ae327dd298334dbcf6a9a14900fda7af8dc972014ae6a026611c44e3e378721e34b331656b4c1fe6b7301d29ce1403349638679ac95391c0a6a1b3d97c124f66e1780a15f5819f6d110a8d7e3dbe14c40f65bdcbba7e1b2dcfa9f5b780739c5535e2aef9405d176d36ad7f538ca3687c09b2584afcf03efdbbfc35be8e1a8bcf7ac8a86da3de4ee4ec44703e7f36f0b4105cb24619fd5804d1256a96229632c90afaf15801b84e7cfcb3d85e5c00c3d5051da5218629a6caa850c99a69e679dd4b53ed0fbcaee7a21a2cf59b5ccff7b7c766380c23cb59a19f5a6a2e6ebd8b2655a96710246108c349f80db27f01c9632c6b3a050000",
    ],
    [
      "ETag",
      "eTbd5SjwffUcvmZTPeTrqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d914f6bc24010c5bfcbf49ae0bf3482e0418bb4a1229ad65c8ac8ba8e6934c9a4bb138b88dfbdb3514a7b29bdeccebcf90dfb1e7b8643566e61009b2cfda8d19cee52e4852b62b475ce56ae8a4a8be001b24a854c36ad2c796e132e4694a47a1eb5229e2d864321ac7ec742c1e00cbb0cf3ad85c1db194a55a0acadd7d541103e55ae8b66af93c7492c42415b27cc96d3e9683c9dc0c5fb5e5105d525ff6b6975f1604f9b187768b0d4e83c5486f6a83972f1ac2aaa1c7d4bb5d168a1819b416aa8ae9421f245f13b41dbef84bd30e8df8761d0ed0742e6a41567540abc7c117bc0c42a8fe953e2414f00d3949274d79c4791bb4d8c6303386f3f679d3f66c1efd9eaf6d8f8c468e786c4ba45e7ba7d4df0402e154b5a36357aa0957cc053c6d7fef205c05cba55dd010000",
    ],
    [
      "ETag",
      "Vb/iVK0oeQAoVgcPI/ItNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34b7282300000d0bb642d0e2480a63b4123054bfda0d81513681045209014839ddebd4eaf51df1dde37a059c684486453b21abc8081423ccec6019f3ae476311c68a4779ff741248fa1fad270b12c73cf6e5d93629e6a33599d608a0ecba53d9b2fb09271f9e65425d742bd8d214164e31e8a8e4c9bf5d065111aa2da8da7038ed0365ea5d816fdfbaac56a2f564241ff829afa947679a835a2ed8b70a61d9b633031920fe2578a9b3532f43549af13cbf5fa83be85bb855e4056f984537cabe555ee6d3a5f27415e5d33ae7d52cfdc7b56a464665b669c6fc4eef5327e7afabfc00830c5cf1d13c9f9b11d59188fc05ffd440e9c3dfe3b8c76ac033fbfc8daa6dd19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-141-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6c1348424212295ab3946e9112b20169354d1332e642dd0226d874aaaafcf75d4cd3b5aab43e61fb9e73cfb91f3c917b5e26644e629e1d1aa81f3fdd89989c135034c3d71d0bae4667bca82669faa53a5b1d96b707335b2c10c15b96a44595434f8aa66620e7fba09fd5a2a9682d440f13f506f6a037988c26b6339e4ceca1632351429e6e78798ff45ba52a3937cd93783f1322cb81565cf699285edecd87a159d5e20e9892e65b4d1365a4f981eae75c30aab82817fb001d3412ea080aca73f4f08f9ac4176f73f7392dfa19821f3803ca98684ad5fac2144c9429cf9a5a6725f327a27dbe3a90c0ddb8abd060226f8a322a6901e74642158dd46305c695bfdb1a6bef6ae76f97e17ae745c1ea9bbb5df657bbcd7eeb05c6cd37d7770d45e31c34d7581817fae6e105f513908a975a3d6c9f5be5e70eaddf0fa625a0b4842e1839d6840ea6d62c4e6387a5d3d1384e2d88e369ec8ce928b6d8cc063b8981224f8b6a162d45899d1dcc9cb115d9ce701cd933874533875a913370460c20b51348c8f19cfca9b9824b2e2b2179d72172e3af43370afdbdb75a86ae2e21a54dae2e3b636d01af3d2a2c1041ffa9e9d846b940a5b6dd6b2f74fde52a5c5fbbdd84379051f6181c70c629cd25209ad6d83c05f55624d830e22db7ee2582f5c4be9f8292cc7f3d91b6e7ad8b572d7fa18738c0d6aed25f1284fedafbaaed9c10d7346f34e4a13b900a2ddf626de8faf81b91b8a55d16f263effa3f49f7e4430a3594ece3692258073efedb4e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef799ed4c1d6b38251a5cab77b1c1d03eb5adcdd166",
      "84024af55c52b7f9586927d6c817100671fe9e6ed7f12f414671627b040000",
    ],
    [
      "ETag",
      "OcSF3+imp6ffBp+CqAhq/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92514fc2400cc7bf4b7d74244ce7304b78180a4a321061f8620839b66e4cb775dedd3084f0dded4d44a326fa726bbb5fbbfeffbb1d3c67650c1eacb2f4a546b93d4951df9b608aaaceb5e24745a542b000b54899b4479b87e4e15406bd59b8ea5c4fd2756f70ea77bb4ca8688d85006f07498679acc07bdc41290ae4b688f2ba28974d6681de56a6380ba7c3f10de705c5261fcf83c0ef057dd85bc7c65868b16cf87fb42df6163cd16a8a094a2c2334bb54929e30d243235389a2cab1a5a896112a68e0e6452aa9ae84246a71a5653b76cb76cf5da773e1bace59c76132a748e88c4a86e7335e103469914fe9956582cb806c42569c34e786cb59dc2831e1701cba4eb3e057406244325efec955bcef5af06ff8c00e167ce7444175a98fd420b8f37f1bc79e7e8ebaf6c3fe0f426976ea8884c3517f16faa389e11607e9bdad463591c4462a341eda6de7f2a2e3b6df6dbd2263357fc7d3b2460b22c1b7e336d3e0252257b87f037f1e03d07b020000",
    ],
    [
      "ETag",
      "1MvVfV+rLBSTb7DPghBF+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-142-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3010fd5722ef1790fa91a4695a2a21d6950c329514d214c43ed43a8e534cd338d80e08a1feefbb3814e8d88654a93ddf7bf7def9ce7d422b9627688062b6bc2ba978fc74cb63d44054e1259c7e5bf9d6d983df612bf7de61e6f7d39b32f72f0e0f01c12a96c4eb22a34dc94b41a81ccca6ada5e0658105e74d28d4b41cbb69b91dd7e9755dd7b17b0e1025cdd231cb5740bf51aa9083767b2bde5a72becc282e986c11be7e396fdfdbed42f05b4a946cef6ab64146b63f503dca38c18af1fc70360507a5a4624ed79865e0e1959ac49f776bb7185eb79600be678462427899abca1794203c4fd9b214ba2a1a3c21edf3cd0f34f5c6de28321682122e92394b160696c67c5eac1ac668320ba2bd055e571517fb55621b185fc3c999b128c0c00d96542e8cab532ff48cd7a385f1b334cd0e318e8c61706cec28f881310b026f1a197b47fbc64938999d1b5faedf42c07b42a562b9761ee138a395ebe7dbf5df0fb5226005ba7572de335d6cf5cd83388d7b24ed77ba716ad238eec7bd2eeec4263970a893c414034f55d5350be73c4f7a89139b760a0321d83253bbd777acd4eec650a09b742cd74dba342509da34d083608a1e335970c9ea1b4657a11f79f3289c05a361e4e936525c66eab8365735f1d6a7822601f49fbe3655967150aac6e50791170e47917fe9d51b32a64b4c1ea777b02329ce24053416784d1515673c814b43e793a91ff993603806861efbf91621d1e0c7d32b217a2cf42d2bfd8da651e80727dac0167189b35243eeeb1f68588057b4d934fe5d661886c36b90c642e0c73f72d08eeb54f4bf4868bc8e6a9b5b490b556adbc8de899c9dc8459b5f1bf834103cb75a195dccbcf01ad547214da9a039f978b500ac131fff6d6c9f3080e111838e5410c3261359a91041eb8d666bdd4bcdeef5fb9665230d16ea5dce763adbd15535aa8a744d73f5dc52fd84f52d",
      "56a952be8020098b18e8296e7e030e4a31d344050000",
    ],
    [
      "ETag",
      "JkI1MwI3ik6v4i0ZHhunIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83401085ffcb7814a2ad0886a4075b896d42aaa5f6644cb3c01469590677071b42fadf1d6ae3d9d3ee7bf3cdec9bede150d639849096c5578ba6bb2a9057c32541db566ce568a8b6080e20ab42c8a79b99d6f33c7ad1985e7f77c1f1418ffcd5642284cd3e512b087bd89558e516c2f71e6aa551dab6dbe6200877cda016cbb7e8394ac4d0940fc67213c78fd3388293f3d7a234b535ffabe9e3e4c09ed2047768b0ce70c8d018da63c68b613dab7453a16ba935195a38c3e74261a86d942172c57147ded81df977be17dcfbbe370e3c212bca1497540bbc594b3c606255257494f5e0162e7ada31da574332dd627ea9c8c8190d0fb30462d3a20399923f9a97fcab4f3fc70e786080010000",
    ],
    [
      "ETag",
      "D/CmmHdEOmeb+vy7w8m16Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ffedd35b7282301400d0bde45b1c5e0af40f4ae3d4a01504157f9c0c5e051f243c04924ef75ea7dba8670fe71bd12c83a639b4ec0a257a4382eace381b136e7bb82f7844529acfcd1b8bb4a97ab78e252161899b80ba2430e3adae769fadefc74dba92d3b5bdd569c867fb4e46b9707a07ac6325f63d9fb1ed0d7cb5eabcaf3ba789e12a38dc2991d4b27895b63614099e25f582a6f144627bffa15dcaf74bd7b92e23f972480379564126d448124dc70b2db6a85c2acdce6fc9c0f4e39cf22adf140ffb7c4dadcdc952d76064e0e66c684f66a663d763e5fca18288c5468c5f5efe2f344230f0a286e6503cb71b13c719a1bffa87567078fef780d650a39f5f2c75f8cb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-143-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6c134842028914ad51425bb4403620ada66942c618ea94608a4da6a8ca7fdfc5345dab4aeb13b6ef39f79cfbc1337a64658a662861f95343ebe3971d4fd025a212e7f07af32d08f5ecb8bbd81d3cda1cbeb92bfd822de67340b09625f0be2a684ff0a62654ccb6613faf7953e19af31e24ea0dcc516f30194d4c6b3c999843cb04a2a045b666e523d01fa4acc44cd7cfe2fd9cf3bca0b862a24ff8fef55d3f0cf5aae63b4aa4d0df6bea2023f44f54bf169c60c97839df86e0a011b48ee91eb3023cfca3a6c9d5fbdc7d86f7fd1cc0074628268437a56c7d410ac2cb8ce54dadb2a2d933523edf1c50e8ac9d65a4115e34fb322ef19e5e6a29963896c78a6ad7c1c6d35cff7a13788bc8ddf871b8bc75bc457fb9596f3d3fd4ee6f9dc0d1244e0aaab8da5cbb52371f2ea09f522159a9d4a3f6b9557ee990fb71302d01a405ed82b1654cf0c036a649965824b347e324336892d88935c6a3c42053939a694231f094a862e19297c321b66c6ca6716a66d3d834c6496c1b298d8d2c9be241928c2783013a5da23f359374c544c505eb3a84ee033772e228d8facb45e4a81232dc1472d5196b0b78eb51428100fa4f4da736ca3828b5ed76fdc80916cbc8bd73ba09af698ec9317c821967b81014d0b886e6495a7b3c8586217fe1392b00ab897d3f07059afd7a466dcf5b176f5afe4a8f6080ad5da9be288c02d7bf5176ce883b5c340a72e80ea802cb0f501bb83efd06246c699705fdd83ac14fd43d0534a3352dc9e7d304b00a7cfeb79d371fc0b0fba02324dc6179886855484dbb2562aade17b665dbf6d4400a5ccb0fb1a9659ddbd6e66833d23d2de54b49dde643a59d58235e411084f9fbaa5da7bfa077d7e17b040000",
    ],
    [
      "ETag",
      "GKRS/fyj+jvMeuvKID/+iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92514fc2400cc7bf4b7d1d09c81866890f20539600c2184f8690632b30d8d679771309e1bbdb9b88464df4e5d676bf76fdff7747d825790c2e2c93f57389f270b5463d314180aa4cb5e24741b942b000b55833e979fb9d1cb7bc4da65e93be4f221cf582c9ed2d132ada6026c03dc22ac13456e03e1d211719725b446999e58b2ab3401f0a539c86813f7ae03ca3d8e4a3d960d0e90e3c385997c65868b1a8f87fb4cd4f166c6919e00a25e6119a5d0a495b8cb46f642a911529d61495324205155cbd584b2a0b21896a5ca935ec66ade1341dbbdd721cfbba6d33995224744239c3b3292f089ab44803dab34c70189055c88a57d5f9c2e524ae9498d01f858e5d2df8159018918c177f7205efbb11fc1b3eb0b305df39915199eb0b753f78ecfc368e3dfd1cd5eb84de0f426976ea8284fed09b869de1d870f3b3f4ee41a31a4b6223151a0f1b75fba6d576eaefb6de91b19abfe36a59a20591e0dbd14f34b82b912a3cbd013ced95247b020000",
    ],
    [
      "ETag",
      "EEwkrP5EhmsxiHIoaTNDRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `purchase` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-144-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85546d6fda3010fe2b91f7a5952804084941aabab4cd3a36082c247dd13681e338d46d8853dbe9842afefb2e4e69cbbaad524472bee7ee79eec53ca23b9627688062b6bc2fa9587fb8e5316a20aaf0124eaf38c797d38be82a70c75fbf4463b77c38f1dca32340b02a4ae25591d103c94b41a81c44b3e652f0b2c082f3034874d0b6ac83b6ddb52da767db56c7b12050d22c1db1fc0ec26f942ae4a0d5da9237979c2f338a0b269b84af9ecf5b0f9d5621f82d254ab676395b40235befb01e679c60c5787e14cd404129a998d31566196878094de28fbbb99b0caf9a4b003f30423121bccc55a50b52109ea76c590a9d150d1e91d6f9ea03cdbc91771a1a0b410917c99c250b034b633e2fee1ac6e924f2c3bd055e551917fb95636b189f82c9d8581420e0064b2a17c6e5672ff08c97a385f1a334cd2e318e0dd73f33761886be11f9be370b8dbde37de33c984453e3e4fa3504b427542a966be5218e335aa97eeaeef0ed50ab00ac80b776ce1dd3c6ed43b31fa7b143d2c36e2f4e4d1ac787b1d3c3ddd8247d8b5a494c31c4a92abb8ec239cf6d9a7692ae4d49cf6eb7896913a7dfb7cd36a58e9974d376d7825f687382360df44b3045cf982cb8647587d165300cbd791844fea91b7aba8c1497993aabc55545bcd6a9a04800fda7ae4de5651c98aa710dfdd00bdcd37078e1d51b32a24b4cd6b37bd891146792021a0bbca28a8a314fa069683a990dc3e1c4774710a1c73edd22241a7c7f7c0908d785eeb2d26f340b83a17fae056c1117382b35e4a1fe40b800ad68b369fc3b8d1b04ee35506321f0fa0f1f94635b55f85f28345e5bb5cc2d651b556c5babb363593b968d363f37f034105cb79a197d8bbce01ad547014da9a039797fb500ac1defff6d6caf3080e112038f5460c3261359b11041eb8d662b5d4b1ded1cf6ed4e1f69b0506f7c4ea7b71d5d95a3ca485734574f25d5575877b17295f219044e58445f4f71f31bfd59cd6a44050000",
    ],
    [
      "ETag",
      "XooaWPVUXRAMKJUMAuvBEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d514d4fc24010fd2fe3b54d04da9290700042b04a502ac4832164d90eb5d076ea7e6890f0df992d8668bc78d99d791fd9f7b247d8e7550a3dd8e4d9bb4575b8c9d0ccdd90a0b685d17cd55469040fd0888c95723e895f4698dac7fdc2445f6178ff10db41bfcf0a2ddfb014d03bc236c722d5d07b3d42254a64db7a5def59620eb5dbe2d9623c19270c94943a60b69c4e07c3e9184eded5224ab295f9976975f260479b04b7a8b092e832d48a76284decea6951d605fa9aac92a8a1113744a6c8d64211f98cf8ad20f05b51270aba611405ed6ec0ca82a43039552c5e3e733c30644491d027d7830e0b543372d36d737e30dc6e6ab8296cb2fde45a572efac305bf7dabefc7860783fa491147d7e852df5e1a8cc8b532dcd6288b1e48c11f70979bcb7e3a030b028efbdd010000",
    ],
    [
      "ETag",
      "cQGIWCeduOkTt6z55JKIuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ffedd35d6e82300000e0bbf4d919a514ebde842182a82841325f9a8616e4475a290a6876f7995d637e77f89e802609578ab4a2e435f80403d5e6e364bc96d85c76997632677eec77f21ecf8a20ec568a6dbca5bd72a31a11ad9bdc1a1b56d95079d20a8662ba66de211313560a97de982ff77db4135e36c85084264a7baf9d4c4fba93acabab6e3e96c6c75ef1f31d07906f84590414572e7e7cb9abdc28b652598aa5dcb7af3468113aabdaca948175e439a265f6eed2c2455cd3e610fb4eaa93ac27252ca140b0cadda34630650bfb72dc122bb91b64e346580b7bf83d7e7bfbbfc008f05ee60d57247f6d87683e1f81bffaa41d247ffd37396d78037e7e0111cb358219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-145-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6fa24014fd2b66f6b50a28889a98ad6be99644b145ac69361b328c173a2d329419ba318dff7d2f43edb669b27d6266ee39f79cfbc10b79e4c58e4c48c2b3a71aaac3b707919033028a66f8aa36dbeae018feddcdf65a51e9deff70e03a9b4e11c11b96a4fb3287ae1475c5404e36eb5e5689baa495105d4cd4b56ca76b0d0743db758643bbefda489490a70b5e3c22fd5ea9524e0ce324decb84c872a025973d26f66fefc673df282bf1004c49e3a3a68132d2f842f57b2e18555c14d3cd1a1dd412aa18f694e7e8e11f75979c7fccdde374dfcb10fccc1950c6445da8c617a660a2487956573a2b99bc10edf3dd81acbd85378f3a4ce4f5be880bba87b3ce8e2a1aab43099dcb70b5ecf8c1e52a5cce227f15c4ebf995b79cf5e6abc56619ac3bdb2b2ff43a8a2639686e67da39d7b7002fa8bf03a978a1d5a3e6b9517eed90ff79300d01a525b4c1d83587d41a99e3244d5c968e064e929a9024a3c475e82031d9d8067b9700459e16d52c5a8882390e58488807a66bc5f68099f1a86ff7631853d366bbc4b6ac841ccfc89f8a2bb8e0b21492b71d22dbd08fbc380a37c17c1679ba8494d6b9ba688d3505bcf7a8b04004fda7a66313e502959a76fb41e485b379e4df7aed8417905176583fe18c539a4b4034adb0790aaaa5d861c348305b7a1708d613bb3e052599fc7a214dcf1b17ef5afe468f70808d5da5bf641d857ef053db39216e695e6bc8737b20255abec7dad0f5f13722714bdb2ce466e38577a47d0a21850a0af6f53411ac035fff6da7cd4730ee3eea4885775c1e261b155641bb445cd7fbca76c7e660d4271a5ca94f317b649ddad6e46832c21e0af55a52bbf958692b56cb37100671fe816ed7f12f35544bb87b040000",
    ],
    [
      "ETag",
      "tUWry5/IYQWPtas7hB5ePg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4bfd3aa2e836c8123f80a262101186261a43ce5bc7a6db3aef6e1042f8eff626a25113fd726bbba75ddf77b78697b4882080a774fe5aa15aedcdd1dcd8608cbaca8ce64749854670008d9833d94e92dbfd7b1497325c34bde4707a74970d97c7c74c6899602e2058439c621669081ed650881cb94d5256e5c5acce1c30abd21627e1b83f3ce73ca7c8e6c3e960d0e90e7ab071768d91306256f3ff687bdc38f04c4f638c516121d1ee522a7a4669fa56a6167999614353a5246aa8e1fac55c51550a45d4e04aa3e97a8da67fe4bb2dcff7ddc396cb64465298940a86a7135e100c19918d69c932c16740d5212b8eeb73c1e534aa95d8b03f0c7db75ef02ba050928a667f7225ef9b08fe0d1fd8d682ef9cc8a92acc8e3a1b5c777e1bc79e7e8e3aed84bd1f8436ecd40e09fb57bd49d8b91a59ee712bbdbb32a8478ad8488dd6c3e681dbf65afec1bbad2764ade6ef044655e880147c3b2e5203412c328d9b370ebcf4cb7b020000",
    ],
    [
      "ETag",
      "8hhV/ZeaJcTv15h2U3WlNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `date` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-146-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554eb6e9b30147e15cbfbb34ab9404848885475594b3bb68c7484b4ea2e4a8c31a95b82a96d3a5555de7dc7b074cd6e95220573bedbb18f79c4b7bc48f118277c7d5731f9f0ea4624b88599266b78eb05cee987c2bd78ffee4ce9c9cd87cfd33b5f4f0e0f01c10d4b914d99b3b61295a44c8d17f3ce5a8aaa2452883608b5edbedbb65dc7ed0f07aedbef0dfb40542ccfa6bcb805fab5d6a51a77bb3bf3ce5a8875ce48c955878acdd3fbee7daf5b4a71c3a856dd7dcf2ed8a8ee0bae47b9a04473511c2ee690a0524c2ed986f01c32fca2a6c99b7ded0e279bce1ac0f79c3242a9a80a6d7281041545c6d795ac55f1f811d7399f3de0b93ff58f63b4928c0a992e79ba4244a1e5b2bc6da1e3d9228c5fafc8c628ae0e4c61b740a7d1ec235a9510e09a28a656e8f29d1ff908ad52a2d90a7dad2ccba1e8084dc213b4a71e84681186fe3c46af8f0ed059345b9ca3b757cf21903b654af3a24e1d93246726f1cf9d0dfe3c5043201a6234c5e5d072893db2bc244b86341b398324b358928c92e180388945bd3eeba70923c0d346bd669142148425bdcc610ea5432f71a8e30ca943899d26bdd188799e677bb6e3928ce06d0b7f975cb313ae4aa178b3bbf8320a627f19478bf07812fb751b19a9727dd284334d3ccfa9a14900fda7afada972014ee6a88230f6a3c9711c5cf8cd744cd99ad087f91dcc474672c5004d24d930cde44791c2a6e1f3d93c888359389902a33ef2f31d42e1f197c75f84f8a1ac7759d7fff8c434b07d267841f2aa06dc370fb867f5acb6d56bdb03bcddb6fead3489a2c915b81329c9c36f35e8c8ed1bfa5f7c6a7cbd6a92ee7c6d6cdc9e52ecadfa7b2b176fbf6de1d7c270db1a67fc69e14757b87915b18c4956d097a70bc075e1e5afc6ee060318ee30f8280d6b1866aa8c0b95ac196abea97b69d843cfb6070eaec152ff51eb8d9cdde9190da3c836acd03f5b6a6e70bd8ba654a92710146116c3203c83ea0f884cbf8d43050000",
    ],
    [
      "ETag",
      "9I3FKn6VJHGstAjKZLqEtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-146-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "41",
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "d8048ca611040f5a422388b46995421159e3248d26997477a204f1bf773696d25e4a2fbb336fbe61df63cf70c8ab1d8c609b671f0deaf626437eb2458ca629d8c8555365101c405699906de8bd9e96144f57b745949e561147b3de643c16c224ef582a189d21cdb1d81918bd9da15225cada66531f04e1b6b6dd6cf1123e84b10825edacb058cee793e93c848bf3bda24a6a2afed7d2fae2c09eb631a6a8b14ad07aa835ed31e1998d67545917e81a6a7482063ab81b649a9a5a69225714d7f303d70b06813fbc0b02bf3ff4852c28519c5325f0f259ec0113ab22a693c4838100ba2b2569da9d4791fb5d8c6307586f3f67de1f33fff76cfdf5d8b465348f9ac4ba41ebba774d704f36154b5ad60d3a9028f98028e76b7ff904cde53d72dd010000",
    ],
    [
      "ETag",
      "yE1XwUoRBV+lHfwVHtHI0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d35b7282301400d0bde45b190b8591fe493b29a2b12a8696fc64025e04798442caabd3bdd7e936ead9c3f946228ea16db9923954e8098d42b7b558dbd44b07f7a91be8d503e1cf0ce88b15f4ab2521817b4df773b2c0a7d0dcb13a3d88f222cd85551487121bd00dfe58ad04c33acbfbb35829e9a791092c97348b83d119328e3deaf5d3da5a2f8fd3877a4db8ddd5d7dd250f3f613a72cfed5852b4e501276f7144a3475708254e5257acdb4757d96357e534adad73e37c1525cece7268a92128b6215d6493f089153409bc7bc77d58ae37c4ace6a6b39dc6ad1511a5ddddfd5f688660a8b3065a9eddb61ba66dcfd05f7daec61a6eff1d100d34e8e7171dce693019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-147-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2bc87b6d1248480891a2354be91a35900d48ab699a906d0c750b9862d3aaaaf2df77314dd76ed2fa84ed7bce3de77ef08cee7895a205223cbf6f59f3f4e95610748298c239bc36b3ea113be3f2c6a769f5e85e5e465f145d2d9780e01d4be2b22ed8408ab6a14c2ef6d1306f445be3468801241a58b633b0669399ed4c67337becd84094acc8b6bcba03fa8d52b55c8c4647f1612e445e305c7339a4a27c7d1f3d8c4775236e195572f45e73043272f481eae74250acb8a896fb081cb49235092b312fc0c31f6a4a4edfe71e725c0e73003f70ca30a5a2ad54e70b525051653c6f1b9d152d9e91f6f9e680226febad63838aa22daba4c2253b3152ac70a29e6a669c873bdfd804e7bbd05fc59b5d9044eb0bcf5f0dd7bbedde0f22e3fac20b3d43615230cd3596c6a9be057001fd9449c52bad1e77cf9df24b8736ff0ea62380b4647d3071cc19b6e6a64b32e2d06c3e9992cc6484cc8933c5136252d766764a18069e16d52c5c896a426d93596c9298ccb412db252421531b27eed4b16c37b52d4ce6e870821e1baed81997b590bcef10ba0e37b197c4e13e58af624f9790e1b65067bdb1ae80b71e151408a0ffd474e8a25c8052d7ee4d107be16a1d6faebc7ec25b9663fa14ddc38c335c480668dc40f3146b7c9142c350b0f2bd3300eb897d3b06255afc7c465dcf3b176f5afe4a8f61809d5da5bf288ac34df055db3922ae70d16ac8437f403558be81dac0f5e11720614bfb2ce8fbde0b7fa0fe2964196b58453f9e268075e0e3bfedb8f90086dd071da9e00ecb4365a7421bd62f11d7f5beb01dd7722d136970a3fe8e8dc753f7d8b62e47979195ac522f25f59b0f95f662ad7c054110e61fe8761d7e031c49c0057b040000",
    ],
    [
      "ETag",
      "r6nwa72mhMcdnw9KKSBtcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-147-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "514fc2400cc7bf4b7d744490b199253c0c05450111c69321e4d80a0cb675dedd2484f0dded4d44a326fa726bbb5fbbfeffbb3d6ce22c020fe6f1f2a540b93b5ba27e32c108559168c58f9c328560016ab164527736bbf37b7aa8e56e5b252b1f1bf5e1c5b6d96442852b4c05787b58c498440abce73d6422456e0b2929d26c566616e85d6e8ae360d41ddc729e5264f2c1a4d7f35bbd361cac536324b49895fc3fdaa6070bd6341fe1022566219a5d72496b0c75d7c85422cd13ac282a64880a4ab87cb19454e4421255b852a9d96ea5e6d41ddb6d388e7de9da4c26140a1d53c6f064cc0b82262d92116d5926380cc83264c58bf27ce5721c954a4cd81d048e5d2ef8159018928c667f7239efbb12fc1b3eb0a305df39915291e913d5e93dfabf8d634f3f47ddf841fb07a1343b7542826ebf3d0efcfed070d3a3f4d64ea31a4a6223151a0f6b55fbaae13ad5775bafc958cddff1b42cd08250f0edb88b35780b91283cbc01f49f7dea7b020000",
    ],
    [
      "ETag",
      "tFky+JoK1p7EslhAe53P/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `stamp` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-148-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b6f9b4a10fd2babbd5f52c90fc0183fa428d737a1b954094e306e94fb90bd2c83bb0966e9ee922a8dfcdf3b409dc67d454282dd3967e6cc8b277a2f8a944e6922361f2b508f7fdcc984762818b6c1db6b58dc96676f1d7ff2797467f7c3f39b78f2eed3f1312244cdd26c5be6d0d5b2521cf474b9e86d94ac4aa6a4eca2a3aeed8ebbb637f0dcd1d0f35c67e42251439e5d88e21ee91f8c29f5b4dfdf07ef6da4dce4c04aa17b5c6e9feffb0f4ebf54f20eb8d1fdc3987d0ca3fbaf443dc9256746c8e278b940059506b5822d13396af8464d933f0f7df704dbf636087e101c18e7b22a4cad0b5d7059646253a9c62b9d3ed146e78b0fbaf02ffcd398ac1570a9d29548d78469b25a95f71d723a5f86f1d19a6d6b8feb37b5617f206fa3f925599728e003d3a0d7e4e66f3ff209596b83e2d6e4bfcab2069c9c905978460edc07215986a1bf88c9d1c91b721ecd9757e4afdb9710149e8236a26864c72cc9a196fcb5b4c18f1dad09cca08ed6b81a591eb3c7d624c99211cfc6836192599024e364346483c4e21317dc3401863c537b6f58ac900507c7ce1218022292cc858905cec4cb86f670c4786a5b8334b10659e6d05d877e52c2c099d0a5d4a22d2fbd8982d85fc5d1323c9dc57e9346c6aadc9cb5e2ea245eea349824827e93d7aeb60a8991ea5e0561ec47b3d33878efb7e371011bc61f171f714032966b4034536c0b06d4a54cb168f46abe08e2601ece2e90d1f4fc6a8fd074faefd33742fc58365536cd9bc6c125b6687679d568d883deb3bc6a500fed07752cc7ea5a4ed71ec6b633b50753dbed5996f50fdded3abf763e8ba2d92d0a624ab1c7ef6c98a4e7d6f49f446df0cda915bf5761d33adab3a683937b70f2e8eeff1d3e1d8a1bd846a6d74b3fbaa5ed55041928c0397875e010dc185eff93ecb71ac1b8d7180757c4089c6faeeb285c413be762dbe4d2b24713673c69fe438629f3bd6d6079e37d436b1fb547d84261bea6d46e7553c5da54e967101a713cc3203c47eb17b286f64d57050000",
    ],
    [
      "ETag",
      "QeSYpDF2E9z7j1/NGWT9Jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-148-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "4e",
      "c2",
      "40",
      "10",
      "85",
      "df",
      "65",
      "bc",
      "6d53815a080917a0449b10d40a12630859ca500b6d67dd1f4c437877678b317a63bcd99d39f34df69cec11f679b5813eacf3ecdda2aa2f32348fae4850dbc268be24551ac1033422633290f3dee2a50e6e621b8ceca27a0ee27b391c0c98d0e91b9602fa47d8e6586c34f45f8f508912796db5927b464c2d5d174f67e3db71c242491b274ce793c9703419c3c9fb5e1125d9cafc6b6979f26047eb04b7a8b04ad179908a76989ad8c5d3a29405fa9aac4a51430337834c91954211f9acf8adb0e7b7a24e1476afa2286c7743260b4a85c9a96278fec4f6c0901145421f1c0f3a0ca8a6e4a4dbe63cb0dc6e621c1ac079fb396bfd310b7fcf965f8f8d6a83fa41115bd7e85c5f9e135c934b6538ad51163d48057fc05d6ecefde913252b2446dd010000",
    ],
    [
      "ETag",
      "/pU8WYy/DIu/BuWnV/IOpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bb646d18c6004277d2291f415b0888b8c9401a30503e92b48a9ddebd4eaf51df1dde37282865421039b4ac074f602e9696429560346de7725243aea2b0d36ece6e6b1eaa431ae72292c70f5eb988c9514fa0dcdb827524daf48eefded4a42f57bedb619ce0f0fc99619ee2a08f591f555aa5c7cdf09aa12fa835b64d63b7f569d0e5aa57e72423c13b2cda3ee56fa57ecd847e323986eb66ebe45bc4a9bd4f4d7589b144d9f0d284cd7222176f5d87a32c5bc310d868ad0ddbef0e9e4e1a189367981e8768955f6ef5b5549157cfeef9ec67216a0de5e1e1ff020bc0ae239f9820fcbe1de996b5007ff5899c4776ff6fb3626213f8f905913c1d7319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-149-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a34014fd2b64f6ab7dd3963669d6a6c595a4a50a54b3d96cc8305c70141864861a63fadfbd0cd6d598ac9f18e69e73cfb98f79210fbc88c99c443c7daca17afe712f22724640d1146faf8a72fa1453ebc2baea5fef145587b57fb85e2c10c11b96a4799941478aba6220e77bbf9b56a22e69254407137506e6ac33988c26e6743c9998c3a989440959b2e1c503d2ef942ae5bcd73b89775321d20c68c9659789fcfdbe7718f6ca4adc0353b2f759b38732b2f78deacf4c30aab828167b1f1dd412aa1072ca33f4f08f1a47e79f737739cdbb29820f9c01654cd4856a7c610a268a84a775a5b392f90bd13e3f1c886f6fec55603091d579111634873323a68a86eab904e3c2db6d0dc7bdd879db65e0ecdcd05f5ddadb6577b5dbecb7ae6fdc5eda9e6d281a65a0b9c6c238d77f2efea07e0c52f142ab07cd75a3fcd621e7eb601a024a4b6883e1b43fa103ab3f8b9268ca126b348e923e4491154dc77414f5d9cc04338e80224f8b6a162d4411473103065108308a4333867e686193c3c1683240f69026e33e399e91a78a2b5873590ac9db0e915bcf09ec30f0f6ee6a19d8ba8484d6995ab7c69a023e7a54582082fe53d3b18972814a4dbb1d37b0bde52a706eec76c21b48297bf61f71c609cd24209a56d83c05d556c4d830e22eb7f61ac17a6257a7a024f33f2fa4e979e3e243cbdfe9010eb0b1abf497f881e7b8bfb49d13e28666b5861cda0329d1f21dd686ae8f7f11895bda6621d77bdbfb4dda2b0f12a8a060df4f13c13af0fd6b3b6d3e8271f75147e22be6b83c4c362aac827689b8aef78d3d9d8d2c734234b8525f62b3a1756a5b93a3c9083914eaada476f3b1d256ac96ef200ce2fc5dddaee32b9c1117cc7b040000",
    ],
    [
      "ETag",
      "Pnp7wda8F8P0QOtatvDSvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-149-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92514f83400cc7bf4b7d94256e2228c91e98a22e615337e68366596e50260a14ef0e752efbeef6704ea326fa72b4e5d7d2ff9f5bc1435626e0c13c5b3cd628973b0bd4572618a1aa73adf85151a9102c402d164cee2edd9b9760f01abaee839a5c773a4feea3ef77bb4ca8f80e0b01de0ad20cf3448177bb825214c86d31e57551ce9acc02bdac4c711c8dfac333ce0b4a4c3e9c84a1df0b03585bdbc64468316bf87fb44dd716dcd37c84294a2c6334bb5492ee31d67d235389a2cab1a5a896312a68e0e6c542525d0949d4e24aab6d1fb5dacebe63bb078e63775c9bc99c62a1332a199e8c7941d0a4453ea26796090e03b2095971da9c4f5cce92468909fbc3c8b19b05bf02126392c9ec4faee27def04ff860f6c63c1774e1454977a4b9d8617fe6fe3d8d3cf51277e14fc209466a7b648d41f04e3c81f5c1a6eba91de5b6a549792d84885c6c3f69e7d78e03a7befb61e93b19abfe36959a305b1e0db719e69f052912b5cbf01e1552bed7b020000",
    ],
    [
      "ETag",
      "+y7ZxEMzL77ksUV22v7qAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `record_id` as __pk, COUNT(`amount`) as `amount` FROM `purchases` WHERE  `amount` < ? AND  `record_id` IN UNNEST (?) GROUP BY `record_id`",
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
            parameterValue: {
              arrayValues: [
                { value: "1" },
                { value: "2" },
                { value: "4" },
                { value: "6" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-150-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2a",
      "91",
      "f7",
      "0f48a54ddb34692b21d64160914acad214c67ea8751c27189238d80e5385fadd777128d0b10d296a72bef7eebdb3cf7d4477ac88d118452cbdafa8587fb8e5116a21aa700aabdcfb76f6f5b4b216dd69afc7f3485c095ba687878060354be2bccce881e49520548e17f3762a785562c1f901143ae80ecc83aeddb72d6760db56cfb1802869964c597107f41ba54a39ee74b6e2ed94f334a3b864b24d78febcde79e8754ac16f2951b2b3abd90119d97947f528e3042bc68bc3c51c1c54928a25cd31cbc0c30b358e3eeed66e339cb753003f30423121bc2a54ed0b4a105e242cad84ae8ac68f48fb7cf581e6eed43d0e8d95a0848b78c9e29581a5b15c96772de378b6f0c3bd15ceeb8aabfd3ab10d8cd360766eac4a30708325952be3eab31bb8c60be047659a7d621c1913ffc4d8a9eff9c6c2f7dd7968ec1ded1b67c16c71617cba7e0d01e731958a15da7788a38cd69e9ff6d67b7ba435012b30d224978e69e3eed01c4549e49064d81f448949a368183903dc8f4c32b2a8154714034fd5d5350b17bca04e372623331e3ad6a80fbf718c716f44cc24ea8e069109cbf1003b30209b16fa2598a2274c965cb2667fd155e085ee320c16fef12474751b09ae3275d298ab9b78ed53419300fa4f5f9b3acb3828d587e5f9a11b4c8e43efd26de6634a534cd6f37b9890046792021a0b9c5345c5398f61d3d0c56cee85decc9f4c81a10ffd628b9068fcfdf18510ae4bbdcb4abfd1e97436096ddde833e4126795c63c341fa8db1e0062d3fa779949104cae411a0b81d77fe4a01d5bd3ffa2a0f13a6a6c3e2ba25a6d1bf576226b",
      "27b2d1e6e7069e1682cbd628a32f0b37b846cd5240132a6841de1f2d00ebc4fb7f1adb0b0c60b8c2a02315c430c944d62a44d066a259ae7b69d8cec8b28703a4c142bdc90dcddef6e8ea1a75459ad3423db5d45c60bd8b75aa92cf2048c220fa9e7f06d9df429091d342050000",
    ],
    [
      "ETag",
      "oIZGXFu4U1L22ombrWr6sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-150-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d515d6bc23014fd2f77af2df3a356107cd0addb0411ed74830d9118af5db5cded927452c4ffee4d1db2b197bd24f79e0f720e39c23e551be8c13a4d3e4bd4d54d8276e686184d9959c35741ca2078805624acecdcabe96de3e5558755345f1c1e70f0b693b37e9f15467e602ea077846d8ad9c640effd084ae4c8b6d5aad8b3c45685db469379f418c50ce4b471c064311e0f86e3084eded522722a95fd976979f26047eb18b7a8514974190a4d3b9476e4ea19911719fa864a2dd1402dae89445359084de433e2373b0dbf19b6c3a0db09c3a0d50d589991143625c5e2c533c7034b5664311db81eb459a0eb919b6eebf38be1665dc34dad3adb4f2eb872ed3f5cebb76ff9fdd8b0b268a69a38ba4197ba71697047ae95e5b65697e88114fc014fa9bdeca7339d571cf6dd010000",
    ],
    [
      "ETag",
      "5DnP/0VWr6yETUwFeAZjcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "5283300000d0bbe4bb30022d8b7f65dfec664b819f0c4bc000160ca12c8e77b7e335ecbbc3fb064996a1be87b4add10dbc8239e1153663bd4e56cdb1f219455cd2d884d1187c8c438a67fdde78ef8c131ea382a4656d0797a872784388e48957d338f60834f6840fc470c88b4a9c775d58f28709d1bd5362c693dc965bc89b5853518ae8d5ef69c879db961b726e4f95aad182d38b24686d8bb462124f96eae2ed60ec64573699f53a676e5ddafb16140e034c1d0bdded8b5ed536891be63a2dc5981b670399c167b1c183aaa33ea79566b7ce59b2e22589be16cc3e3dfd5f6005d0d461827a881fdb858da2acc05f7d48e70e3dfeab282188809f5f38ac047f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-151-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b64f6d5b6d0524a9b346b5351d9b474a554a39b0d19a617761498ca0c1a63fadff732b4aec6647d6266ee39f79cfbc12b79e0e5964c48c2b3c71aaa976ff72221270414cdf0f5b6bebbf84187dc0be7778b6dd5f78bfea0bc9a4e11c11b96a4c52e878e1475c5404e36eb6e56897a472b213a98a8630dad8ee50c1c7b34741cbb3fb29128214f17bc7c40fa1fa57672d2eb1dc5bb9910590e74c7659789e2edbdf7d4efed2a710f4cc9de47cd1ecac8de17aadf73c1a8e2a29c6ed6e8a09650c550509ea3877fd46d72fa317797d3a29b21f88933a08c89ba548d2f4cc14499f2acae7456327925dae7bb03597b0b6f1e194ce47551c6252de0c4d8524563f5b203e33c5c2d0d3f385f85cb59e4af82783dbff496b3ee7cb5d82c83b57173e9859ea1689283e61a53e354df02bca0fe16a4e2a5568f9ae746f9d021fff3601a024a4b6883f1c874a8e59ae3244d462c7507c324352149dc6434a483c464631bec6d0214795a54b368294ad74e93be959ab1eda4566c0f6d3b1ebb265e61088e655bd47119d99f90e78a2b38e37227246f3b446e423ff2e228dc04f359e4e912525ae7eaac35d614f0dea3c20211f49f9af64d940b546adaed079117cee6917fedb5135e4046d9cbfa11679cd25c02a26985cd53502dc5161b4682d9d23b43b09ed8cf635092c9af57d2f4bc71f1aee56ff40807d8d855fa4bd651e80717dace11714df35a439eda03392c0f9adeff46202e699b845c6dbcf096b44f21a45041c9be1e268275e0eb9fedb8f808c6d5471da9f08ebbc364a3c22a687788eb720fecd118139844832bf529e69af6b16b4d8e26231450aa4349ede263a5ad582ddf4018c4f107ba5bfbbf29fe12407a040000",
    ],
    [
      "ETag",
      "YuZGJa5iERCZLdr2Im23nQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-151-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d91514fc23010c7bfcbf93a122665e8121ed02892c082031e8c21a474b731ecd6d9761a42f8ee5e2b1a637cf065bdbbfd2ef9ffda23bc947506316ccbe2b5457db828d03eba2245d34a6be868546d100240cb0b2267dd6b16b17bbe154dc2e6b3f13edc3dad46c3211146ecb0e2101f212f516606e2e723d4bc425a134ab655bdf15d00f6d0b8e162994e9231f595ca5c9faca6d3d1cdf40e4ec1f762c62ddf78fe1f6beb53007bb54d31478db54097a5d16a8fc24e9ca6e15523b16354ab051af0b0ff5168d5365c2bd5a14927ec879d30ea456cd08f22763960444a25b82d554df06a4101c12acb65aade49137a04685f9271eebf6f342e336fe2ca49b28c980ff813f08e5fc859eb37d3485effc1accf096e0e16cd5c2bf231e854c22ebbea0fa2eea7ddad72c6966ec2ea1603109c1ee9a1b410e75c1a3c7d0083440e1602020000",
    ],
    [
      "ETag",
      "M09464FabcpN4PMGj1hYUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd3db6e82300000d07fe9b31aa8a5d0bd010a32640c5122bc34d0d470b75c0218b37f9fd96fccf30fe70952c6f830d0f15ef1167c80470ac9866d5ca119d65c2ace4260d24ce66cb9baa4681d6a61b2e349808e67e5344d8b8a3da4d10c919a75b184cbaa36c99c35997328a86cbbd97e1d3355f99c6a2d8e6d62d7e7102e6a58de2325f0899d0ec39c4b4de45dbecc71bb4621c12aee27ad6527282845be0ba1d75d64fbbb3bb6d7daa946dd82428eabfd3a98fb9b1f62390feec6410c377cc9039bb48624988f4d242585a36a965e5c9ba6ebe4bcf57611a7bb68f3f6f67f8115e08b287a3ed0e2b57dab10b2027ff5e9f810fcf5dfe069cf7bf0f30b2697f56719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-152-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90",
      "f7b54d4842c80f295aa394ae68095981b4aaa609d9e6606e094eb1e91455f9df7798a46b5569fd80c0bef7eeddbd3b5ec8a3285332254ce44f3554fb2f0f929133029ae6785bdbd9feb14897fefd3c76568b9bf43b2ba27c36438468588a6e77059c2b59571cd4741375f24ad63b5a49798e89ce7bc3fe79cf1db8ce68e8ba4e7fe4205141912d45f988f4df5aefd4b4db3d89777229f302e84ea80e97dbd7fbee73bfbbabe40370adbaef35bb28a3ba9fa87e2d24a75ac872b689b0825a4195c0968a026bf8474dd9c5fbdc1d41b79d1cc1cf8203e55cd6a56eeac2145c9699c8ebca6425d31762ea7cf341226fe92d628bcba2de964949b77066a554d344ef77605d85eb95e50757eb70358ffd7590448b6b6f35ef2cd6cbcd2a88acbb6b2ff42c4d5901866bcdac0b730af080fa29282d4aa31e37d78df2d121ffe3601a024a2b6883c9c876696f6c4f58c6463c1b0f862cb381b1311b0de980d97ce2809332a0c833a286454b593ab63be833374d8603e6264e2f1b2763bb4f137cec31071b0def93c319f953090d9742eda412ad43e42ef4632f89c34db098c79e6921a375a12fdbc29a06ded6a8b14104fda7a743131512951abbfd20f6c2f922f66fbd76c24bc829df474f38e38c160a104d2b344f43b592291a4682f9cabb44b099d88f535091e9cf17d278de54f1c6f2577a8c036ccad5e64da238f4836fa69c13e29616b5813cb71fe4b83c58f4e117027149db24e466e385f7a4bd0a21830a4afef930116c029fff6ca7c54730ae3eea288d67dc1dae1a155e41bb43c2b47b648f26eec8ee1303aef4c7d8647c72adc9d164842d94fad852bbf8d8692b56ab57100671fc",
      "8171ebf017af1e483c7a040000",
    ],
    [
      "ETag",
      "u0fykldLIYAT4MCQdKblSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-152-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "4f",
      "c2",
      "401086ffcb786d130afd204d388801c520d10207630859da692d6cbb75770b12c27f777645638c072fdd99e933c9fbec9e6057d619c4b0298bb716e5f1aa40fd648a0455cbb5a2a311b5427000352b88ec07b2da8df07e9c44c3796ffffe3c3e7a0f87c1800895be62c5203e415e22cf14c42f27a85985b4960ade56f5da760ee8636386f3453299dd525f89ccf4b3e5747a3d9c8ee0ec7c2f664cb3b5e5ffb1b63a3bb0159b04739458a768b234526c31d513a3a958d570749568658a0a2c6c7f1452b40d9342b83471bda0eb7a612ff4a3200cfd6ee413c945ca74296a8297730a085a68c61371204de811206d49c6b9fdee695c66d6c49493d922f46dc09f8075fc422e5abf9986b3fa0f667549303c6a548f52908f42a3e275fc7e10859d4fbb1b618c35dd84962d3a90327aa4bb52439c33aef0fc0162e47b0802020000",
    ],
    [
      "ETag",
      "85rmkEeJFR7BS3vxYFy1Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT `id` as __pk, `name` FROM `accounts` WHERE  `id` IN UNNEST (?)",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-153-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553796f9b3014ff2ac8fb67d37291702491aa2e6ad98694928e9056d534250f63985b82a96dda4555befb1ed0f458a5554202fc7ec7bbfc406e789190298979765b31b9fb702d62d2214c4386a7fee745b858fc1994e016e95502f6c4ccecece80811bc6629d89639eb2a5149cad474b5ec655254254821ba28d435ed51d774468ee5da8e630d5d0b898ae5e99c173748ffad75a9a6fdfec1bc970991e50c4aae7a546c9fcefb77c37e29c535a35af55f7bf6d146f5df713dce0505cd4571b45a6206956272cdb6c073cce1999ac45f5e6bf7386c7b1982ef386540a9a80a5de78512541429cf2ad9a892e90369f27cf14196dedc3b898c0d4f36062863bd2e6f3ac6a6802ddb185fc3c599b17954541be3f2bb177a468bf503631504de32323e1e7f42a78429cd8bc627823867b5c7632ffcb723a809a041b136b876070e98e3c1244e6397a6e3911da70316c7e3d8b561140fe8c462561233409eaed51b1614a2a0346189359a8c1c884d6adac3b16542123ba96d0f5d6ac1c44c1d98b826d977c8bde49a9d72550ac5db7e90cbd08fbc7514ae829359e43565a450e5fab44dae2ee2659e1a8b44d07feadad7512ed0a96eae1f445e383b89fc0baf9de79c654077cb5b9c680ab962880689bdd64c9e89049b46ce174b3ff217c16c8e8c6648e7078422d39f0fcf846857365dd6cd9bccc27076851c901276ffc4300fc722fbfd0bbb0bc8ab06d2e09bbf56ffae0d106cd9af3d3e1d82bbdaea911f2b2fbc22ed51c852265941df9f34829bc0fb77eeb0ff08c61b803e4ae33f2e1655b50b95ac5d30be6d326cd9eec4b5462e69c052bf89d99673e864ad512bb22d2bf46349edfe37bda943957a026110f722f0836f18fd0bee0b46b681040000",
    ],
    [
      "ETag",
      "I+OROOx0pa7nfYda591g5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-153-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff6d50d16ac24010fc97ed6b02b56a2c820f55820642a851a1b448382f6b1a4db2d7bb4b4b10ffbd7bb1f8d497dbd9b99963e62e702e9b1ca670288baf1675f750a05d3b90a2692b6b78286a0c82076845c1caf72889df9231ad68b2b0cf5d3c6f64b258cf66ac30f2136b01d30b1c4bac7203d38f0b34a246b665993ab3c476ca6d51b20d9761ca444db923925d1cbfcce310aededdd28fbb65b34da364f99f637ff5e04487148fa8b191e802284d27943672dd8ca85585bea1564b34d08bfb8b4253ab8426f299f107e3a13f0886c168320e82d1d364c4ca8aa4b025352cde6d381b58b2a24ae987bbc18005ba875cf3d89fdf3ded3a38645a853aabb1109924ad5cd2fddf13f3cea279d5c4810cba2c8fb75c0b72592d77b0ba450fa4e03f5d95f6b65f7f01218b8842b0010000",
    ],
    [
      "ETag",
      "ZINLXN5oHo7Ct8yLBncNCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "642d4e4150d29dd809b5803f2ca01b864f528101521212c0e9ddebf41af5dde1dd41926598b198b7156ec02b18130dceb3b9434d0bc952a3ad5664ab6595965e21b8b85d781fec1d79e90cfdea1e8ca05c922eec855489899b858f085bf9767d1a39843993e2fba805ea943bea87903652b01cd30c455bfab97dd960cfdc35ced92b123d1d223b6cd63ebeb5684a15e492284fbdbc21efd6d496e88d27ba6a53c55c8ca13c3a96150ab7ac25bcde0ee5ae981ae4d221eb050fdb6d1011a8af3715abf945370419e8390eaefee98bf1fd649368fef4f47f8119c0032d3acce2e2b17d614038037ff5633e52fcf86fe1a4c31df8f905aca5a76b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-154-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fdb3014fd2b91f7953e68d336ad548dae8451ad4d479a82aa698a6ce72633a471b01d1042fdefbb712803218d4fb17dcfb9e7dc479ec99d281232214c64f715a8a72fb7929113028666f8aa766bb89a55bb6e76f303c69ede957ef2ed6a3a4584a8599aeecb1c5a5a568a839e6c37ed4cc9aaa44aca16266a9d0edcd6e9b03f744783e1d0ed8d5c246ac8d3a528ee90fec798524f3a9da3783b9332cb819642b7b9dcbfbe771e7a9d52c95be04677de6b765046773e51fd9a4b4e8d90c574bb4107950615c39e8a1c3dfca326ecec7deeb6a0fb7686e007c181722eabc2d4be300597452ab24ad9ac64f24caccf3707b2f197fe3c72b8ccab7d1117740f274e420d8dcd5309ce45b85e398be0621dae66d1621dc49bf9a5bf9ab5e7ebe576156c9c9b4b3ff41d43590e96eb4c9d337b0bf082fa0968230aab1ed5cfb5f24b87161f075313505a43138c47dd213df5ba6396b2114fbdfe80a55d60cc63a301edb32e1fbbe0260c28f2aca865d142162c1da7c37e97c7839ee7c52ef70631456c7d4a20657dc6c79c1c4ec8a31206ce852ea5164d87c84db888fc380ab7c17c16f9b6849456b9396f8cd505bcf568b04004fda7a6431d151295ea762f82c80f67f36871ed37135e4246f9d3e61e679cd25c03a2a9c2e619502b9960c348305bf9e708b613fb790c6a32f9f54cea9ed72edeb4fc951ee1006bbbc67ec9260a17c1776be788b8a67965210fcd8128e05225e8f9f01b71b8a34d0e72b5f5c31d699e42484141c13f9f25826de0f37fedb8f708c6cd471d6df08eabc375adc215342b246cb52fecd1d8ebf5ed9f6aa8321f626ed73b36adce5167843d14e6a5a466efb1d246acd2af200ce2f403dbacc35f6786dd1679040000",
    ],
    [
      "ETag",
      "rYOeQAuY0gWKe98sYpEdBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-154-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93516f9b3010c7bf8bf74ab4b2103221f521d9b22d1a255d42fbd0a942ae7d30b786a3b6491445f9ee3bd32e9dd649f405eecebf13777fff39b007d54896b03b553d7660f6ef2a703f7cb006db6967e9d5626381050c1caf88bc7eff18a7bb6c73a36e1ebe971c16e34c86bbf37322acf8053567c981950ab4b42cf979600daf81da04eaae6e8a3e0b98dbb7beb8c9d7cbec2be5354a9f6757693a9ba70b760c4e8d923b5ef4fc1bda6e8f01bbc7bb359460a011e067690dde83704bbfa6e575ab6164b133022cebe1fea032d8b5dc208ea8320a27d1288cc771349dc471f4611a11a95170a7b021f86a430332878eeb35ee684d168e89307d4c2b97fd734b7525fb557cb8ccf238ea27fc1be04260d7b862102c95b1ee49be3fe0b30cff929abf11a4bb527a08aaa091608628d5165c4a03d60e92680bdeb6276cbe5aa5af5569a4412587c1ad1a00b4db9e802fe96af63f69c9612f5a7d9ee58b578475e49b13922f2f169b7c7671e9b9db6723ccf70eeca541b29505efa8f02cfa3899c6674f26fb84de78f49dc4990e022638fd2bdf946349c9b585e36fd6c293a689030000",
    ],
    [
      "ETag",
      "V/q6LwNSZiZkKfaeE3Nd1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bb642d8e2260d25d41a1d5488b3fc40d13422ce123919f844eef5ea7d7a8ef0eef1b104a595d874d99b12b780192a8684cc76b014dfb9ea4747e907589e785e5c9e8edddb9efa0a3c80cbf2acdb46a31b17383e4d62228ae99f46d3814c1ad32ea4da71f872f73537b43ca7361adf6fc947005767ae2cf7b7fd965e195ab062b53971b4a9a52dc0453ada5eefad383b61b6a711fdac7d90786c24743e37844ef55c1046e95caf576e440e35b6ca3485b732dd64e892c83491b9db79b76a2e26389bafd0a455e3738e6f2ecfa8aa95e02482f56b1c8c74f4fff171801d60b5eb13ae48fed331da111f8ab1f3652b0c77f93918a55e0e7174f84c8c719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-155-1636475664274",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91",
      "f75a0814420009ad08d21689842d04aa6d9a22c7b9c9dc8698da0e1baaf8efbb714ad7aad2fa14dbf79c7bcefdc81379e0654ac624e1f96305f2f8e95e24e48280a639be160fd3ef37999b6cb77f7c2e8efe705ed99b7c324104af598aeef605b494a8240335deacdbb914d59e4a215a98a8d5759c5677d01bf45d6730e85fba7d242a28b2252f1f90fe4bebbd1adbf659bc9d0b911740f75cb599d8bdbcdb874b7b2fc53d30adecb79a36ca28fb03d5cf85605473514e366b7450299031ec282fd0c33f6a9a5cbdcddde674d7ce117ce00c2863a22a75ed0b533051663cafa4c94ac64fc4f87c75206b6fe9cd228b89a2da957149777061a554d3581ff7605d872bdf5a04d7abd09f468b5510af67b79e3f6dcf56cb8d1facadbb5b2ff42c4d93020cd79a5857e616e005f553509a97463daa9f6be5e70e2dde0fa626a0b4822618bb9d01ed0e3ba3244b5c960d7b4e927520498689ebd05ed261a33ef4d30428f28ca861d152941d9a5148a01b5f76464edc87ee30a689d38ba1078edb4d7b9465949c2ec86fc935ccb9da0bc59b0e91bb70117971146e82d934f24c0919ad0a3d6f8cd505bcf6a8b14004fda7a6531de50295ea762f82c80ba7b368b1f59a092f21a7ecb87ec41967b45080682ab1791aa42f526c1809a6be3747b099d897735091f18f2752f7bc76f1aae52ff4080758dbd5e64bd651b8086e8c9d33624b8bca400ecd81486042a6e8f9f41371b8a34d0ef275e385df48f3144206124af6f12c116c021fff6be7bd47306e3eea288d775c1da66a1526a159216eaa7d66bba351bf63fe544da57e1f1bf5ce4dab73d4196107a57e2ea9d97bacb411ab",
      "d40b088338fdc034ebf4175eaf881c79040000",
    ],
    [
      "ETag",
      "lkAZGf7bVVxMioyM8Du/Ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-155-1636475664274"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "616fd3301086ff8bf9482aad5b92a248fb9042592bb276b419124353e4da97e0e1d8c6760a55d5ffce391b0531a4ec4b72777e4eb97bfde640be09c54946b6a2f9de81ddbf6ac07f0cc11a5c27bdc397d1ca01890878da20b997af3f5fdde5e7ecd39c09136f939ff3bb0ff9e525128e7d859692ec406a01923b927d3910455bc036a665d7aaaacf22e2f7261437e57ab1bcc2bcd53ce4cbdba2c8a7c58c1ca35323a79e563dff82b6fb63441ef4760d3558500cc22cc6ea07607e11d674b43512464e779681233ddc1f345677865aad4758198d9364344e2fd27892a4697c3e8991949a512fb442f876830312af3d956bfd03d724e30b246c1fe3ca75ffdc615df07e95102e96651af713fe0d50c674a77c3508d6c23aff28df6ff049867f49495f08e25d09390435a038d8214a988a726ec1b94152bb8a1a73c2a6ab55f15c15c5ad167c18dc890140fadd09785facf2ff498b0efba3d5bbbc9c3d239c47df9c9072713ddb94f9f54de0ee9f8c30dd7b703756a3ad1c04478dcfe237c9243d7b34d95b1d8c87dfc9bced20228ce2bf32179e6435950e8ebf006aaa010b89030000",
    ],
    [
      "ETag",
      "yl+YGZA2cVHcip4b5xHZKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:36:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
