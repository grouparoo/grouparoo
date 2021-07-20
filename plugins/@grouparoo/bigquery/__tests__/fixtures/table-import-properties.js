const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1626817014049";

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
      "0000000002ff1dd0516e82300000d0bbf4db1a1415d89f80612050a1e8809f0649e9104106c5d12ebbfbcc8ef0de0f28ca928e23e18f8676e00d88626d2ccbe5b1d74d6b5f7b0a6ccef0b693429a3217b32a2b136d9432f3933b4c77d3532379acdb4d1d72e5d0c9aa1532a6e73b94ec4abe69847149e76da867b91ff09aa24b67ca8bbd6f92c62b242c3f623c057cc41439a8959f6babf556119e6e4528ae246047ebce44164d761dbbf8c0b82a8bd551e9dd778b057dfe60301a34e40ecc46167435143a1a9b375f384d0876ed0abb2deb797b1a2d716acde639723f7572b00074eeeb818ea47e71d5ad612cc0bf9d70d1d35780498b810ee0f70fd0ff16131a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-1-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6fda3014fd2b91f7b51028af80845604e98a56c21642ab6d9a22dbb9c9dc26318d9da2aae2bfefda29ac55a5f5536cdf73ee39f79167722fca844c0813d9430dd5d3a73bc9c819014d337c95ec32eafff4d4d7f97d8fedf785bbaf166e369d22421896a2c52e87969275c5414db69b7656c97a472b295b98a8d56d7587e743af3bea74fb9dfe18690af2f45a94f748fea3f54e4d5cf728ddcea4cc72a03ba1da5c16a777f7f1dcdd55f20eb856ee5b45174594fb5fcdcfb9e4540b594eb71bd4af1554311454e4e8e01f3161176f33b7052dda19821f0507cab9ac4b6d5c610a2ecb54647565b392c933b12e5f1dc8c6bff6e791c3655e17655cd202ce9c846a1aeba71d3897e17ae52c83cb75b89a45cb75106fe657fe6ad69eafafb7ab60e3dc5ef9a1ef68ca72b05c67ea5cd85b8017d44f4069515af5c83c1be597fe2cdf0fc510505a41138c479d21ed7a9d314bd988a75e6fc0d20e30e6b1d180f658878ffbd04f1850e45951cba2a52c799aa6ac3ba071e2d124ee27bd713ce61d16f752180d3df046c361971ccec8be121a1642eda4124d87c86db88cfc380ab7c17c16f9b68494d6b95e34c64c01af3d6a2c1041ffa9e960a242a29269f73288fc70368f96377e33e16bc8287fda3ce08c539a2b4034adb0791aaa954cb0612498adfc0582edc4be1d838a4c7e3d13d373e3e255cb4ff4080768ec6afb259b285c065fac9d23e286e6b5853c360753462a7263faf01b81b8a24d12f27deb873f48f314420a1594fce36122d8063efad18e6b8f505c7c54511aefb8395c190d5e41b341c2167b620f7b3d8f5870a5dfc5067defd83393c36484024afd5250b3f658672356ab13088338fcc0f6eaf01789c297c274040000",
    ],
    [
      "ETag",
      "obFT4Z8sKCk3bwwm/wrD/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93616f9b301086ff8bfb9548b0664987d40fa4cbda4c34e90895564d1572ed8339331cb34daa28ca7fdf9976e9b456a25fe0eefc9cb87bfdb267bf542359cc1e54f5bb03b33ba9c07df34106b6d3ced2abc5c6020b18385e11b90cf3ede9f4719398bbeceb4a5db99df99e56e7e74458f1136acee23d2b15686959fc63cf1a5e03b509d45ddd147d1630b76b7d719d678be525e5354a9f2f6fd33499a57376088e8d923b5ef4fc3bdaee0f01dbe0430625186804f8595a831b106ee1d7b4bc6e358c2c764680653ddc1f5406bb961bc4115546d1289a7c989c45d3301a87e34fc46914dc296c08bd5dd378cca1e33ac3475a9245a744983ea685cbfeb9a5ba92fd223e5c2cf3c9b89fef5f800b815de38a41b054c6ba27f1fe82cf22fc4f6afe4e906e4ae921a882468219a2545b70290d583b48a22d78db1eb1d96a95be56a59106951c06b76a00d06e7b04bea4abe42d69c95f2f5a7d4ef2f92bc23a72cd11c917d7f3759e5cdf78eefed908b39d037b63904c65c1fb290ac7671fa793f0c96217e86d47df899de9206082d39f72a51c8b4bae2d1cfe005dbd28a287030000",
    ],
    [
      "ETag",
      "N0Tv37wjArYRJOiHtyrXLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "4fe23014ff5796de2f77093236060312e3a1eebc2538740c0d77b940d775bbea5867db6188e17fbfb74e54ce441312d6becfb7f7da3ea17b5624688462963d54546cbfdcf118b510553883ddd2fd152ea2013117d7bdcd96d9e3ea348e1e8f8f01c16a96c4eb32a74792578250399acfda99e0558905e7472074641f597dbb3fb0dc8ee5749c21d024cdd3092bee81fc57a9528e4c736fddce38cf728a4b26db84af5ff6cd8d6d9682df51a2a479e8688289343ff43cc939c18af1e2783e03ff4a52b1a46bcc7248f04a4ce2ef87ca6d86d7ed0cc01b462826845785aa538104e145cab24a6855347a423ae59b0f34f326de5964ac5226a45a16784d572d63c5929581a5b15c96f7c68f707a69aca0ab94e554ae8cdb9f5ee8190dc60f8c791078b3c8f87af2cdb808a7f32be374a16bad034dc89250a958a1934438ce699de27956fefb03aa095861499be2d2edf4b135e80ce33476493ae8f6e2b443e37810bb3ddc8d3b64e850278929069eaad5350b17bce861c7a503bb471c8a132bb6bb038b241db74bed74d8b513ec80087cba68d7428f82297ace64c9256b26866e433ff29651380fcec691a7db487195abf3265cddc4db9c0a9a04d0077dedea2ae3e0548fdf0f222f1c9f45fe8dd79cf88466986c670f70e629ce25053416304145c5254f6068e86a3af3237f1a8c27c0d0c778b5474834fafdf44a88b6a59eb2d2ff681c86e30570b01078fb5f0d72f41db4dbbdb1bbc179a5211aaf578dfea629200b7a795dd907ab3edafdd9c1af85e09e375ee87aee850bd46c8534a58216e4f35b00605df8ecb5eedf0e40e1f5808b54b0862b4764ed41046dae1e5bebec7bb6eb580ed260a1ded57a6e7f3fe35aa356a46b5aa8e7869ab7a3a756972af9028222dc98c00f2ea0fa0f15553971b9040000",
    ],
    [
      "ETag",
      "p7ZRYT8c/YQ5vyi2AuBbTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff6d51d16ac23014fd97bbd716ac139d820fd375ae5044ab6e0f4324c6db1a6d932e491511ff7d377538617b4972ee392739879c612fe4067ab016d95785faf490a19dba4382a6caada1ad54d22078809665a49cb4a6526eb749273e94ef1faf363a764d9cf5fba4307c8b0583de195281f9c640eff30c921548b65468635735f0c09e4a379bcd93683c225ca88dc3e3451c3f0fe2102edecdb75a95fb5f47349e87a330f9cfb2bc78b053eb0453d42839ba18a5563be436720d0d2bca1c7da32acdd1402dae894cabaa645a299f267ed30fdacdf653d06904ad46ab4bba5c71668592245dcc281a5865599ea823f5834712e8fa4855d37a3dd038d402eb160e0475b87bfa05a5b8d1ed3ff4907191df5dd0748ae5cfc383934533d18a4a1874f91bd72e43e5fa59ea6d75851e7046bff126ec155fbe014dd1fe06ea010000",
    ],
    [
      "ETag",
      "P4QnnhhR7LvpVWFtIw9sLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb642d0e0a11e98e9f83208a1495b2c98410cacff00922d8e9ddebf408effd004c08e51c0d4d4519f800335eab4bb274dbad6e68dfb08eb0b115f7528d44b843f143e7ca254b64861f4d95f94946d257a5a0a2f3d3c9b6f44a71a5fa2eb12b3bda63eee8da54ca456ef5ee10b1432068ecfe151a111348935e56e3c11a7271b4bac4bb6eab67f83250a4751a12c38070baff348733ac480c53a8daa7ccda88a147b353306afe553fc278640687bb5506f3d7f9d61153104a67e539b6e9fb695de2f526ed641ad5b8a6b7d1f6fc19c2f96953b000746a8b9e7254bcb91254d505f8b7a3616ee93b40a7b8a73df8fd033600f2761a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-3-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4e",
      "e33010fd95c8fb4a2f69d2ab542d55094ba536853405a1d52a729c4930a4711a3b2084faef3b76689715123cc5f69c33e7cc256fe489170999909867fb1aaad71f8f2226670414cdf075503bf5be1cf629dcdbeb87ebfd4be827ec663a4504d72c4977650e2d29ea8a819c6c37edac1275492b215a98a8e5b4ec416f30b2875ddbedba63a449c8d3252f9e90fca05429279dce51ba9d0991e5404b2edb4cec4eef9de75ea7acc42330253bff2b76504476bed4fc990b461517c574bb41fd5a4215c18ef21c1dfc2326f1f9ff99db9ceeda19829f3903ca98a80ba55d610a268a94677565b292c91b312e3f1cc8c65b7af3d06222af774554d01d9c5909553452af255897c17a652dfccb75b09a858bb51f6de657de6ad69eaf97db95bfb1eeaebcc0b3148d73305c6b6a9d9b9b8f17d44f402a5e18f5503f6be5f7fe2c3e0f4513505a42138c86dd01b547dd719cc643968e9c7e9c76218e47314ed989bb6cec829bc4409167440d8b16a2709d7e928c07c388babd5ee4a64e3f1a274337a2636627b43748468e4b0e67e4a5e20a2eb82c85e44d87c85db008bd280cb6fe7c167aa68494d6b9ba688ce9023e7a54582082bea8e9a0a35ca0926ef7c20fbd60360f17b75e33e1256494bd6ef638e394e612104d2b6c9e826a25126c18f1672bef02c16662d7c7a02493df6f44f75cbbf8d0f2133dc4016abbca7cc9260c16fe2f63e788b8a5796d20cfcd419791f25c9b3efc4120ae689384dc6cbde09e344f01a45041c1be1f26824de0bb1fedb8f608c5c54715a9f08e9bc3a4d66015341bc44db127f6c8765d62c095fa1473baf6b1673a87ce083b28d47b41cdda639d8d582d4f200ce2f07dd3abc35fbb3b6ebf74040000",
    ],
    [
      "ETag",
      "6u3uqp75aeY1OhPqwTNdcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "86",
      "ff",
      "8b",
      "f791544a46d6b2487c68b76eab485b68838436a1c8d897ccccb13ddb6955aafe77ce8195694c0a5f92bbf373caddeb377bf24b284e327227eadf2dd8ddbb1afc550856e05ae91dbe8c560e4844c0d31ac9edc34d72d13627e67b959a930bba9d8f1ee2abf373241cfb090d25d99e5402247724fbb1278a36806d4ccbb651659745c4ef4c28ae8bd56cf115f346f3902faef37c3cc9a7e4101d1b39f5b4ecf837b4dd1e2272afef56508105c520cc62acbe07e667614d471b2361e0746b1938d2c1dd416d756ba8d57a8095c1e92019be1f9e25a33849e3f423725233ea8556885eaf713ce2b5a772a5b7b824494e91b05d8c0b57dd738375c1bb4542385b14c3b49bef6f8032a65be5cb5eb012d6f927f1fe80cf22fc4b4afa46106f4ac83ea806c5c1f651c29494730bcef592da95d4982336592ef3d7aa286eb5e0fde046f400d26f8ec0977c39fe9fb4e8af17ad3e8f8be92bc27974cd112966f3e9ba18cf2f0377fb6c84c9ce83bbb41a4de520f82989d3b30fa361fc64b14f3ad80ebf9379db424418c53fe59bf024aba874707804bcf2a90687030000",
    ],
    [
      "ETag",
      "wzX1Kum+pZf4p+KawM7z0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8553fd6f9b3010fd5790f7cb2625e1230442a4aacb5ada22a5a423a41f9ba6c480a16e01536c324555fef71da6e9c72ab5522462bff7eedd9def1ed13d2d13344111cd1e1a526fbfdcb108f5101138835b7c72771d25d7be7ab5756fcf36c9f5afcc7e981e1c0083b62a8e8b2a277dce9a3a267cb25c0cb29a3515ae19eb43a0bed9d72dc31aebb6a69b9ae9808c933c9dd1f21ec4b742547ca2aa7beb41c65896135c513e8859f17caf6e0cb5aad91d890557df3aaa60c2d50f3d0f731663415979b05c807fc349bd2205a63964f0224ca2ef6f230f282e061990373426388e59538a362b0811b332a55953cba868f2886496affea0853b738f42659d8bcdbaa7ac69b256305756abea5e3909e6e7ca1aca49694ef85ab93a730357e9389eaf2c7ddf5d84cad7c36fca69305f5e283f6e24d6eb82817b42b8a0a5f40e719493d6f7a93bdefb27690558604e3a70656b16d6c79a13a5911da7e3e1284a351245e3c81ee161a4c58e49cc24221874a28d2e55b864658c9d91638e52d38a924827c9c8301dc3c4e391a38fc850b30d1ddb4343d3d1ae87fed6549063ca2bc669d723741578a1bb0a83a57f340d5d59468a9b5c1c77c9b545bcce53409140faa0ae5d8b52064e6dc33d3f7483e951e85dbadd1bcf4886e3ede2015e39c53927c0c6352e8820f5394ba069e862bef0426fee4f67a0900f77b1677034f9fdf82208b795ecb2905f340d82e90d68705de3ed7f18e4619968b77b657789f34652245f9ebaf89b0e406dcb5e4ec69b9385767f76f0eb2198ecce0bfd5cbac10deaae0292929a94f1e7530064097cb69ffb6d012aec0bb870016718b998b71e714dbad1a385cc7daf760ccb46925c8b7798695bfb1eb731da88a420a5782aa8db16d9b5166af83309409818dff34f01fd07ba061b7cab040000",
    ],
    [
      "ETag",
      "aFjXbdXN/WyEhHvdXZg7qA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d915d4fc2301486ffcbf1928db00f0723e1421414b2a04cb8104348198739d8d6d976e842f8ef9e0e83317ad3f6ed794e4e9ff408fb24df4017d649fc5ea2a8ae6254537d085196a992b4153c970806a06231910b310e9cecb3d1f0169d976a38f693bbf974daeb1121a337cc18748fb04d30dd48e8be1e216719525baa0e44a8aad061183cdecc28667ca3e3641e0437fd600027e3c2af56c5fea76134990dee07e17f2dcb93013bbe0e718b02f308f5f842f01d466aa4cd24cb8a144dc94b11a1841aae0bb1e065c104e726dd98ae6979b6d7b1da2dcb6db93e71298f984a784ee8fc999e068a2b9686fc83bcc02140d44752dcd6eb81aeed6bbf69d9b5878e56fdbc5f40db69fa9d0be0fd017cb7e97897baadebcbefd1fd4aa17c129c34246a83d6d9e6966b4345e64a946840c4e81f1e1275cea72f26c09a91e4010000",
    ],
    [
      "ETag",
      "ZrJL3mx++6Z8YyFJ9iDUQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ad0e0282e98e043520467006946e183e4145e49758483bbd7b9d1ee1bd1f90e639e33c11ed8335e003c854858b7cb1efd6085b77b730b694c3d7be8fa062b696a99aa872f44d49f16b1e908d1736fc9672cacffbdc37622c52fb6b5aad6154e18bf7780a5feb645c4602fa9478b623c771fbcc847abaeae5ba35322df20f93e4359df70a518fdd68b9678ccabe89187197bbabe7983430be9d7ad7ead678252b065180ec3a83b8ae4fda45afe49206451512d4ab737253bc22182c91c7a428dd89d4342c5d891fcfcfca530e475c340698013675f781f1e4fee66a2b0867e0df9e08d9b1770062e9c006f0fb0741f63eaa1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:36:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-5-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda248426e421456b96d20e29211b9056d33421e35c985b822936e9ba2aff7dd7a6e95a556a3f61fb9e73cfb90f1ec92d2fb7644a529edf35503f7cba11293921a0688eaf5faaa57ff7d7bfdcac2efe5c4cf6d170e106cdfd6c8608ae5992eeaa023a5234350339dd44ddbc164d456b213a98a833ecf45dc71df747767f600f26489350644b5ede22f9b752959cf67a47e96e2e445e00adb8ec32b17b7eefed9d5e558b1b604af65e2bf65044f6ded5fc5c08461517e56c13a17e23a14e604779810efe13b7e9d9ebcc5d4e77dd1cc17bce8032269a52695798828932e379539bac64fa488ccb170712794b6f115b4c14cdae4c4aba83136b4b154dd44305d645b85e597e70b10e57f3d85f0749b4f8eaade6ddc57ab959059175fdd50b3d4bd1b400c3b566d699b9057841fd2d48c54ba31eeb67adfcd41fffed503401a525b4c16464bbb43fb62769968e58363e1da6990d693a4e47437a9ada6c3280c136058a3c236a58b41465dfce9cb1334c13d7d94232988c9c64920ddd6432182363e4b8ee38238713725f7305e75c5642f2b643e43af4632f89c34db098c79e2921a34da1ce5b63ba80971e151688a0776a3ae82817a8a4dbed07b117ce17b17fe5b5135e424ed943748733ce682101d1b4c6e629a857628b0d23c17ce59d23d84cecdb3128c9f4e723d13dd72e5eb4fc991ee300b55d65be248a433fb834768e882b5a3406b26f0fba8c8c17daf4e117027145db24e4fbc60b7f90f629840c6a28d9c7c344b0097cf4a31dd71ea1b8f8a82215de717398d41aac867683b829f6c8766cfb74440cb8566f62f83df64ce7d0196107a57a2aa85d7bacb3156be433088338fcc0f4eaf00fcfb5f85874040000",
    ],
    [
      "ETag",
      "BpLIqzIGUMFxF9vS5C6Nuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c6bf8bf736d59a514a178917edd6b24ea18136bc400845c6be64668e9df94f5857f5bbef1ca09b0029bc49eecebf53ee1e3fd9919f427192903b51fdf260b61f2a7097215883f5d2597c355a59201101472b24271fd99fed039cb50bffdb5fc78bef6db6c82e4f4f91b0ec07d494243b520a90dc92e4664714ad01db9896be56459745c46d9b50dce4ebe5ea0cf35af390afaed2743a4be7641f1d1a3975b4e8f877b4ddee2372afefd6508201c520ccd2187d0fcc2dc39a96d68d8481d5de30b0a483bb83ca68df50a3f5002b83e3413cfe349ec427c378341c7d464e6a469dd00ad1ab0d8e479c7654aef5032e49e223244c17e3c265f76cb12e78b7480897ab7c3ceae6fb1fa08c69af5cd10b96c258f728de33f824c24b52d27782785342f64115280ea68f124d413937606d2fa96d419be680cdb22c7dad8ae2460bde0fb6a20790ae3d008b349bbe252dfaeb9f565fa7f9fc15611dbae680e4cbf3f9269f9e5f04eef6c908b3ad037b61349aca42f0533c1c4d8e4fc6c3478b7dd1c176f89dc4190f116114ff946fc291a4a4d2c2fe2fa8329e6187030000",
    ],
    [
      "ETag",
      "8/czyweGvFuxuY1FJvOFOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85537f6f9b3010fd2ac8fb6793f203082510a9ead296754829c90869574d53628ca16e01536c3a4555befb0ed334ed2aad1212b6df7bf7eecee72774cfca044d50ccb28786d6db4f773c463d4425cee0d40cc6d3422fc8e9cca28b9fb3dbcad2a387e9f1313058ab12b8a872da17bca9091593d57290d5bca970cd791f02f5edbe619bb6638c75c3d22d176482e6e98c95f720be95b21293e1706f3dc838cf728a2b260684172fe7c3477358d5fc8e1229866f1d87602286fff53cc939c192f1f278b504ff46d07a4d0bcc72c8e0204ce2af6f230f182e0619901f19a19810de94b2cd0a42105ea62c6b6a15154d9e90caf2d5022dbd997716691bc6c51a57d5a607cb64a361a1add7d5bdf62d9c5f6a1b28296539151bedfabb177a5ac7f1036d1504de32d23e9f7cd12ec2f96aa19dde28ac7708085924544856aa1c221ce7b4f57fee92fffe6a5a019658d00e5c8f751b1b8eeec6693c26a9333a8a539dc6b1138f8ff028d6896b512b8929069d6ca32b152e79e9a431360d9b1ac420ae19272e26a6815dd7b04c9c1aee088f92718a4d07ed7ae84fcd243d67a2e28275bd42d7a11f79eb285c0567d3c85365a4b8c9e579975c5bc4eb3c251409a4ffd4b56b51c6c1a96dbc1f445e383d8bfc2bafbbeb19cd30d92e1fe0b6539c0b0a6c5ce3824a5a5ff2049a8616f3a51ff9f3603a0385bac0c59e21d0e4d7d341106d2bd565a9fe681a86d31bd0e0bac6db7f30c8c3b6d06ef7caee0ae78da228beda75f11f3b001950cb6167bed9d968f77b075f0fc184775ee8c7ca0b6f507714d294d6b4241f4f019015f0d13bddbf1aa0c2bb011721610f234744eb416ada8d1e2b54eecf6ad330474748916bf90eb36c67dfe336461b9116b494cf0575af4675ad851af14202102626f0830b40ff0287813eabb3040000",
    ],
    [
      "ETag",
      "2N7Am0mcBL4ePXLhp40TqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff75515d4fc23014fd2fd7579630c0a9243c80591033413678d11052c6dd186cbbb5ed4042f8efde0e230fea4bdb7b3eda73d213ecb2720d5d5865e94785ea7893a299da4388baca8de64d52a9111a8046a4ac142fd17cb88966e5dbe73ec2e7e9e1d6b40ffd5e8f153ade6021a07b8224c37cada1fb7e825214c8b68cf45248c92a739416184c2681df1f3350d0da02e37910f407810fe7c68f6bb994bbab65349ef9433ffccbb23837604bab10135458c6684348455b8ccdc8f6d3a290393a9a2a15a3865a5c13a9a24a0a45e430e2788eebb5bc7bf7aee9769a9d07d6e5140b9351c9d279c4d1c090117948076e076d16a8fac845937add336c5485750b3bb875b87f69ef179d885c5ff996e517dfcf0e8e06f5ab22aea0d1a66f5e9a3c926d67b8b5bdbb01b1e09f78cacc653e7f01b790f437e6010000",
    ],
    [
      "ETag",
      "aMSUGhSTnZxvSeJQw5t3wA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1f8b08000000000002ff1dd0db6e82300000d07fe9b31aec28d2bd71316c8109d609c117c2a502d24a6deb54ccfe7d669f70ce1394754d952af438d03378078f12e245bd0885ed7a4ebf23d5b4260163776fde4ac8d57446e386d4439671560e9c39aa48b09b878f6dae2e5b345a6d68f52b567501f9c86df32029df2f9df108973f1a7f776de1a33142b72c5d33b4accce96607a76b4426e3cbe7ec72c093ddec1352433def64d542fd793d09e88dc4e44198942aded1b09286502532e218a6a930222bb9b88dc446aa62bdcaf5f69e5810bb01f79b617236737a4d2b2a909ffa47c13598017a17bda4aae85fdc3784f10cfcdb0bfd10f415e0d25252097eff00ce8eff9f1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-7-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3014fd2b91f74adbb44dd3b45235a212a05a9b8e34054dd31439ee4d6648e2123b2084fadf77ed50064282a7d8bee7dc73ee479ec91daf76644a529edf37503f7dbb15293921a0688eaf7e0ae16de6aae6e6c2297ff47d7137aab3abd90c115cb3242df70574a4686a0672badd74f35a347b5a0bd1c1449d71a7ef0e5caf3fb6fb8eed4c9026a1c896bcba43f25fa5f672daeb1da5bbb910790174cf659789f2f5bdf730e8ed6b710b4cc9de7bc51e8ac8dea79adf0bc1a8e2a29a6d37a8df48a81328292fd0c17fe22e3d7d9fb9cb69d9cd11fcc01950c6445329ed0a533051653c6f6a93954c9f8971f9e64036c13298c7161345535649454b38b17654d1443dedc13a8fd62b6b119eafa3951f2fd661b2995f062bbf3b5f2fb7ab7063dd5c065160299a1660b8d6cc3a35b7102fa8bf03a97865d463fdac955ffab3f838144d4069096d3019db2eed7bf624cdd231cbbce128cd6c48532f1d8fe830b5d9c401679702459e11352c5a896a04d924f34676b203db491c77344e26d46389376183c1d89db82e78e470421e6baee08ccbbd90bced10b989167190c4d1369cfb71604ac86853a8b3d6982ee0ad47850522e8939a0e3aca052ae9762fc23888fc79bcb80eda092f21a7ec69738f33ce682101d1b4c6e629a85762870d23a1bf0ace106c26f6f3189464fafb99e89e6b176f5afe4a8f7180daae325fb289a3457861ec1c11d7b4680ce4a13de832325e68d3873f08c4156d9390ab6d10fd22ed530419d450b1af87896013f8ea473bae3d4271f151452abce3e630a935580ded067153ec913d18f4871e31e05a7d880dfbf6b1673a87ce082554eaa5a076edb1ce56ac91af200ce2f043d3abc33f12faec6e74040000",
    ],
    [
      "ETag",
      "AbeNjf6tuWG4mK1Aok5rfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93614fdb301086ff8bf7359592adb410890fed28a35268591b40684291b12f99c1f165b6d3a9aafadf770eaca031297c49eececf2977afdfecd8933292a5ec4155bf5ab0db4f15f8ef2158816bb577f46ad038601103cf2b22cfeacdc58d724f32b6ed2c3eb9bdcbaa1b5e9d9e12e1c44fa8394b77ac54a0a563e98f1d33bc066a13a8dbda145d1631bf6d42719dafe68b6f94d72843beb8ceb2c9349bb17d746894dcf3a2e33fd076bf8fd8233eaca0040b464098a5b1f808c2cfc39a8ed78d8681c3d60a70ac83bb83ca62db708b38a0ca603c48469f47c7c9384e86f1f084388d827b8586d0eb358dc73c7aae57f89b9664c917226c17d3c265f7dc505dc96e9110ce17f968d8cdf716e042606b7cd10b96ca3aff2cde5ff045847f49cd3f08d24d29dd07556024d83e4a350597d28273bd24ba8237cd019b2e97d97b558cb4a8643fb8513d80f69b03709e2d27ff9396fcf5aad5d9249fbd239c27d71c907c7e395be793cbabc0ddbf1861baf5e0ae2c92a91c043f25f1f0f8683c8a9f2df61583ede83ba9b72d444c70fa532e946769c9b583fd1f393186de87030000",
    ],
    [
      "ETag",
      "DmvHViskd0ruE09WYLgVag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553fd6f9b3010fd5790f7cb26e503c81744aaba2c652d5b4a3a42da55d39418b0995bc0049b545195ff7d8749fab149ad1489d8efbd7b77e7bb4774cff2188d51c8924d45cadd873b1ea216221227707bcd77fa74f3904d373fadefc9b7d0586cc5c5e4e40418ac56099c1529690b5e951111e3e5a29394bc2a70c9791b02b5adb63134879631d28dbedeb74126484a672cbf07f11f290b31ee768fd69d84f32425b860a213f1ece9bebb35bb45c9ef482445f7b563174c44f74dcfd3944758329e9f2c17e05f0952ae4886590a193c0be3f0f3ebc81d86b34e02e42d8b088e225ee5b2ce0a42443ca72ca94a15158d1f91caf2c51fb47066ce34d0d6319664ddd2d62c5e6b5868ab5571af7df5e797da1aeaa12c2562addd5c38bea3351cd7d3969ee72c02ede3e927eddc9f2fafb42fb70a6b1da2817f4c8464b9720f709892daf9d01ff7ff47a9055862411a7035d287d8b0743ba4e128a2566f10529d84a1158e06b817ea91dd27fd38241874b28eae5438e7b90dd71635a9655083d8e1d0a636213ddbd6434a07863ea0b81ff74c1ba37d0b3d944c9233260a2e58d32574e3bb81b30afca5379d048e2a83e22a95674d7275112ff394502490dea86b5fa38c8353dd72d70b1c7f320ddc6ba779e5194970b45b6ce09d294e0501362e714624292f790c4d4357f3851bb8736f3203857abaab2343a0f1afc76741b02b5497a5faa289ef4f6e4183cb12effec1208f611fedf72fecae715a298ae2ab53137fdb00c8805a9e4fe6abd310ed7fefe1d74230db8d17fab174fc5bd45cf9849292e4d1fb53006405bcb7a1c77d012a6c0cb808096718b948d41e51499ad16399cafda0367b7adf448a5ccaff3073641f7b5cc7a823928ce4f25050b32faa6b35548927128030319eeb9d03fa17031e52d3ad040000",
    ],
    [
      "ETag",
      "Voy0CqwmCqX8KgJb1SvsHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff7591df6bc2301080ff97db6b0b69279d2bf8a05b998213577f301822b1bdd66a9bd4249d88f8bfef52877b712f49eef25d725f72867d2152086153e48706d5e92147f3611731eaa6349aa65a0a8de0001a9e13391c2eb79f4b649998958bf743ba14c7e334eff588d0c9162b0ee119b202cb5443f87506c12ba4b2941b7b8839d5367aedcf238a2a99da68b2188ffb83710417e7c6afd7f5fe8f1f4de6d15b14df2b595d1cd8c94d8c192a1409daeb6b257798989135d3bcaa4b74b56c54821a5ab8ddc8956c6aaea47429e3765d2ff083aef7c4bc0eeb3c1357ca849b420a4217336a0d8c34bc8ce591bce09100d52e49316bc76f4afbcc672ef35de6b52e36e5b52dde85821b14fc0ff937c8b7d0eab78fc1c9a09e2a494e1aad0ebbaabd48ab4b6f1d1ad5a00309a74f1916e61a5f7e0066a3232ef1010000",
    ],
    [
      "ETag",
      "HHVhXVe0fnSlUMqdVnwwPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dd0dd5682300000e077d9b57824188eee64a248fc891ad0cd0ed1d0410ab235589dde3d4f8ff07d3fa0ac2aca39115d4b6fe019a8f2c99e57f3971e397875be26be28f12ecc199229b4b264b708ddda789379ba342e72d5d5a286fa7d1bf6971c8e71919cac43222ef157f09d0a6d9da1be9a28f7f035f83c41ad7d5d1bcadf68034f7227ab6f9c32273c7ec046523b8e0e8532a7b3af8ef57827386656b38d062d68b196991d92444fbd48ecbb850fb96d4a52384c43e67d83b763c2749d9dae66b07c6f1611c69e3be0eebc8aa6a61e6dd52a14748a2a171d750166804e3d1b2827ecc135a06dcfc0bf9d08d5d3478043cb810ee0f70f90b2eab31a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-9-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91f7b54008af80845644d31509429b84b6eb34458eb9c94c434c6387aeaaf8efbb764ad76e52fb29b6ef39f79cfbc833b9e7c59a8c48c2b3870acaa72f1b919013028a66f87a7b9bfe0e568bebe4eeeef272f3e85ecd55bab91a8f11c1354bd2ed2e87861455c9408e5661332b45b5a3a5100d4cd41836da7da7efb60776bb6b7787489390a7735edc23f997523b396ab58ed2cd4c882c07bae3b2c9c4f6f5bdb5775abb526c8029d97aafd84211d9fa50f36b2e18555c14e35588fa958432862de5393af84b5c27a7ef333739dd363304ef3903ca98a80aa55d610a268a94675569b292d133312edf1c48e8cdbd6964319157db222ee8164eac355534564f3bb0ce83e5c29af9e7cb603189664b3f0ea717de62d29c2ee7ab851f5a37175ee0598a263918ae35b64ecdcdc70beaaf412a5e18f5483f6be597feccfe1f8a26a0b4843a180fec3e6dbbf6304993014bdd4e2f496d48123719f46827b1d9b00bdd7502147946d4b068210a66b77bf680ade3aeeb76e26e2f4de3a1edf4627028b4999df69d2e258713f2587205675cee84e47587c84d308bbc380a56fe741279a6849456b93aab8de902de7a545820823ea8e9a0a35ca0926ef7cc8fbc60328d66d75e3de13964943d850f38e394e612104d4b6c9e827221d6d830e24f16de1982cdc42e8f4149463f9e89eeb976f1a6e5aff40807a8ed2af3256114ccfc6fc6ce11714df3ca40f6f5419791f25c9b3efc4420ae689d845cadbce03ba99f0248a184827d3e4c049bc0673fda71ed118a8b8f2a52e11d378749adc14aa837889b628f6ca73374cc6faa68a9fe8d6166fbd833",
      "9d4367842d14eaa5a07aedb1ce5aac92af200ce2f07dd3abc31fd590e72c74040000",
    ],
    [
      "ETag",
      "XXfxRUMVbZZPPjw8QLtfjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93614fdb301086ff8bf771a994ac5d0b91f890426195d296354120211419fb92993976b09da2aeea7fdf3940370152f892dc9d9f53ee5ebfd991df427112937b513db660b65f2a703f7db006db4a67f1d568658104041cad90bc4e26f570bab8f8fa273bcb6ec29bc7531a0d939313242cfb053525f18e940224b724bedd11456bc036a6655baba2cb02e2b68d2f66f97abebcc0bcd6dce7cbab344da6e98cec834323a78e161dff89b6bb7d401ef4fd1a4a30a018f8591aa31f80b9b95fd3d2ba9130b0ba350c2ce9e0eea032ba6da8d17a8095c1f1201a7f1b1f4593301a85a363e4a466d409ad10bdca703ce2b4a372ad9f7049120d91305d8c0b97dd738375c1bb457c385fe6e35137dfff00654cb7ca15bd60298c75cfe2bd822f22bc2525fd24883725641f5481e260fa28d114947303d6f692da16b4690ed874b54adfaba2b8d182f7831bd10348b73900e7e92af9485af4d73fadce927cf68eb00e5d7340f2f96296e5c9e2d273772f46986e1dd84ba3d15416bc9fa27074f47d320e9f2d76aabdedf03bb1332d048451fc537e0847e2924a0bfbbfe21869d187030000",
    ],
    [
      "ETag",
      "WA7m3BMG+zSDSX0XqCa13A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85537b6fda3010ff2a91f7cf26f148424800a9ea18cdba6834b421b442d3047670529710a7b6d309557cf75d9cd2c72a751252b0eff7b83bdf3da22d2b36688408cbee2b2af69fee38412d4415cee0763210a9b3f4ee667253665b759bff746f075727278060354be25d99d3b6e49548a81c2de69d4cf0aac482f33608b52db36db9b63bb03cd3724c67083c49f374ca8a2db06f952ae5a8db3d7a7732ceb39ce292c94ec277cff7dd07bb5b0a7e471325bb6f2dbbe022bb1f9b9ee63cc18af1e2643187042a49c58aee30cb218517e6867c7d2bdd6178d7c900fcc0128a93845785aad30289841729cb2aa155d1e811e9345ffd41737fea4f62632d1568ae5bc69a6dd60696c66a556e8defd1ecc258434529cba95c1b373ffcc8371a4c101a8b30f4e7b1f1f9f48b711ecd1697c6b7a58eb58e7290c1864ac50aed1f6392d3dafba945c1fb87a9095861499be0ca335d6c0dcc21498997a4835e9fa426256440bc3eee1133193ad4d9108a81a76a75cdc2052f686a53dc4b3026d81c3a3dc7b47b8eebf53c4252cff12cdb4afbb63700e2a185fe08a6e819932597ace913ba8982d85fc5d1229c8c635f9791e22a57674d727511aff3545024803ea8eb50471907a7bae94118fbd1781207d77ef3ce539ae1643fbf87974e712e29a0b1c03baaa8b8e01b681aba9ccd83389885e32930f4e35d1e11128d7e3dbe10e27da9bbacf4178da368bc040e1602efff89411eae830e875776d738af3444e3f5a9d17f6802c8825a5e4ef69b938b0ebf0ff06b2118efc60b5d2dfc68899aab88a654d022f9ff14005807febba5c795012c2c0dd8c0e429063397c8da2411b4993db6d3c93fb16dc71bf690060bf52e3674fbc726d71ab522ddd1423d55d4ac8c6e5b1daae4330882303261109e43f42fd28c4858b2040000",
    ],
    [
      "ETag",
      "C8rf4Y7jOsdpgkthlK6h8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "915f6f823014c5bf4bf7282c94215a131f64611b8b1a87ba2c598ca978652850d6161763fceebbc5657f325fdaded3df69ef698f6497956bd223ab2c7daf411eae52d04f661183aa73ad70aa44a9805804344f917433c154eb917aadbaf3123d077b16dcb9837e1f0995bc41c149ef483619e46b457aaf4752f202d0a6342f2a64f4a132e52c1a85d3d9603441a9106b238de7c3e1201886e4647dbb96cb6af7638ac6b3f03e8c2f5916278b6cc52a860d482813304d54526c21d191c9a7f0f61c6c256a9980220ddc6ca452d4159742d8a8d8d4b1a9effa5dda71a8e7780cc15c245c67a244763ec5de88169ae7b1f8c078e40601d92c31e9a619f728d3eb76d769b719655ec89a3c8ddab4f98f638cfee5fccb9cefe189bf39d7708baf86828306359102d32930c19c73c85b61826b7c102d6bb048c2f1931e327dae4f9fd3611fc301020000",
    ],
    [
      "ETag",
      "2io9s+J14+u7XIVBv9BF2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dd0db6e82300000d07fe9b3980012616f820885a220938b2f84351518d0620b0a2efbf7997dc2393fa0c49808518cac25147c80a5548c355efb836e5abb2a9fa2c0531a79a667848474effb3955338e61263fd22528dd9d6b9843bca44dd2c5236ae5e0147fd3c7b1c598664b7167f5353a4ff99e566eec76fce54cb72bb7d4d078eea431c9d9d3134f9b8ad3211cce2c513482ea8c6e12874cbeb87b9a4a216265ef1e196c10b4a8be894c8329aad743e5abb3f5cbc53291f739f87c5fcd360c7dccc250b6600417473a9caaa48e5d44bcad7dc4db9ba4f1bc032b40e6a1e14414cd9bab6a86b102fff6625c06f20e3049c90907bf7ff87db9041a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-11-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f7b54042784b684590ae4810ba105a75d31439e6267549621a3bed50c57fdfb553ba5695da4fb17dcfb9e7dc479ec98e175b3222314f1f2a280fdfee454cce08289aead7277198ed7e756fdde2efd3ee70c7f39c25e9788c08ae5992e6fb0c1a5254250339daac9b6929aa3d2d856860a286e3349c5ebb3770fab6d3b13b43e449c892052f76c8be536a2f47add649bb990a916640f75c3699c85fdf5b8fedd6be14f7c0946cbd976ca18a6c7d2efa3d138c2a2e8af1668d062a09650439e5195af8cfdcc6e7ef533739cd9b29821f3903ca98a80aa56d610a268a84a75569b292d1333136df1cc8da5b78d3d06222abf2222a680e67d6962a1aa9c31eac8b60b5b4e6fec52a584ec2f9ca8fd6d34b6f39694e578bcdd25f5b37975ee0598ac61918ae35b6cecdcdc70bea6f412a5e18f5503f6be59706cd3f8e4513505a421d8cfa768f3a037b1827719f2503b71b2736c4f120ee77a91bdb6cd881ce36068a3c236a58b41045dfe90dd90086d1d671dca8d371922806771851bb6727ed9edd75694c8e67e4a9e40a665cee85e47587c84d300fbd280c36fe74127aa6848456999ad5c674016f3d2a2c10419fd474d4512e5049b77bee875e309986f36baf9ef00252ca0eeb079c7142330988a625364f41b9145b6c18f1274b6f866033b1ab535092d1ef67a27bae5dbc69f92b3dc4016abbca7cc93a0ce6fe0f63e784b8a65965208ff5419791f04c9b3efe4120ee689d84fcdc78c12da99f0248a084827d3d4c049bc097bfda69ef118b9b8f3252e11d5787492dc24aa857889b6a4fec76b7db76890197ea43acd7e99f9aa673e88c9043a15e2aaaf71e0badc52af90ac2204edf37cd3afe03b951771577040000",
    ],
    [
      "ETag",
      "bwoyDkZ5Y3nxwkyhimmcfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93616fda301086ff8bf735486465b48bd40fb0d20e35400741533755916b5f3253c797da0e1343fcf79dd38e4eeba4f44b72777e4eb97bfd66cf1e94912c61f7aa7c6cc0eede95e0bf846009aed1ded1ab46e380450c3c2f8974df36d75f7fddc6970f57b3d97a717d61f1f1a43c3f27c2891f507196ec59a1404bc792ef7b667805d426503795c9db2c627e5787e22a5b4ee757945728433e5fa7e9689c4ed8213a364aee79def26f68bb3b446c83f74b28c082111066a92d6e40f86958d3f1aad6d073d858018eb5707b505a6c6a6e117b54e9c5712f1ebe1f9ec5a7fd78d01f7c2450a3e05ea12176bda2f99847cff5127fd2962c3e21c2b6316d5cb4cf2dd5956c3709e1749e0d07ed807f035c086c8ccf3bc14259e79fd4fb033eabf02fa9f91b41ba2aa5bba0128c04db45a93ae7525a70ae934497f3ba3e62e3c5227dad8a911695ec06b7aa03d07e7b042ed3c5e87fd292c15eb4ba1865935784f3649b23924d679355369add04eeeed908e39d077763915ce520182aee0fce3e9c0efb4f1efb84c177f49dc4db06222638fd2a9f956749c1b583c36f9ebf159488030000",
    ],
    [
      "ETag",
      "sZjKWzY1FkGMMUOKDroq3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f6cb6ed207a54f9a18ed56d625a95429d598cda61de0825329536706ddc6f4bfef65b06ad7ac2624c09c73ee3df7314fe48ee531199290a5f70588ed97150f498d80a2299e8af5f975a77b99aec6dc3bcd7b56384d58f27874840c56aa245d6f32a84b5e8808e4703e6ba482171b2a38af63a07acbaab77a566fd0ea9bad8ed9b15127214b262cbf43f5ad521b396c36f7b91b29e7690674c36423e2eb97f3e683d5dc08be8248c9e661ca266691cd8f931e673ca28af1fc683e43038504b1803565195a7855c6e1c961e806a3eb468ae40716018d225ee4aab48521229e272c2d848e4a864f44db7cf34166cec41907c6326142aa454ed7b0ac194b9d756950692c169b3be3873f3d37965859c232904be3faa7e33bc60bcdf58cb9e739b3c0f87afccd38f3a7f30be3fbcd1eae1d0447533148c5726d29a06106a59de7aeb9ef67550aa8a2122a70d1377bb43530ed3009fb51326877c3c484301c84fd2e6d87666477a013874051a7cae85a45739e836977c3566cdb9dc4b6a3ee208e23cb1ed826f4fa74005668b6da1d0b11b2ab9147c1149c32b9e19255ad23d7be1b388bc09f7be351e0e832125a64eab4325716f1d6a7c22291f4415dbb12651c33957370bdc0f147e3c0bd72aad14f20a5d176768fc34f682601d95460071588731e63d3c8c574e606eed41b4d50a1e779b1674832fcf5f42a08b61bdd65a5df64e4fba31bd45021e8f61f6c16f8ae774676bb37f9ae6856688e16e8bf2ac143051058e1f27126cd13f8a38bd4ebb7abbd32703115b4fe0be37cd42d8843fcf70e",
      "9f1ac19b5279249773c7bf21d5910f0908c8a3cfb707c91af8f4c2ef6f1f72f1fe611aa9f01f77359265924840b5b36c5d9ad9abad1e7e104d16ea1dd6efb7f7c329639411610db97aaea8ba7dbadb2554c8171282b86a5e358bbf38c1cd8cfd040000",
    ],
    [
      "ETag",
      "rmMW45QgjCoNDn62bOfifw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d91514fc2301485ff4b7ddd645b082809894250d185c890c4600829e56e766cbbb3ed5042f8efde1663884fbeb43db7e7a4e74b0f6c2bab0debb1b5cc3e1a50fb8b0cccd41e12d04d61346d35561a98c7c0f08c9c7722eace9e5af0d8b4168bf9e4358a9bdc4cfb7d7268f10e2567bd034b25141bcd7a6f0756f11228964aa5cdca098f997d6d67b397643cb9275de2c6eac93c8e6f07f1881dbddfdc6a556fff93581e3d96e33a81141454026c8b5a610ec28c2da0e6655d80afb151023473667791296c6aae107d9af861e4879da873157683b01db4afc958a0e0466245def98caa31838617097e121f8bc8a0dc915053b7ee683c52121c85159083daa1d4c10d7cb91697024bd7f83c32e44216672901dc40f837b2fc797eb037a09f15128b068b119c908668dd86f08d6ac06382d39f3c4873d2c76fffd9be44f0010000",
    ],
    [
      "ETag",
      "Fc27SK/eJu/ZZUNX2LujtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bb646d1d50f9a43b54c6523eca902076c3a424961885f0090a4eef5ea74778ef094851b0aecbfb5ab00abc83912ce0bc98fbd25e6f9c32ee1c15ad6e79b1cc4ac7653cb1630acbbec4dbd0384aa3511b88937a905f1685bdc88837ba82a18b17467eaaef4c1a3d2edf615341ae37554c5527dca3969993c6032c8c3b65f774eff1e0f431d64674d127cd62f8e04d2ed98e3921046ff05089130f947b76ed4c57e2ad56fa6e179b98a4f246fcecc70ea6eaf37c6dd13e1fae112bf62b992044511b59d0a295324f07aa6134e8fd620812d48219600fc95bd6e5fcc55d1a10cec0bf3def47c95e016b465ad682df3f0c629d4b1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:07 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-13-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da3014fd2b91f7b84202094d40422b82742041584368354d53643b4ee636c434769850c57fdfb553ba5695daa7d8bee7dc73ee479ed003af32344284178f0dab8f5fee05411788295cc06be4de3bf3615eccc3634d66378fe5245a7dbd198f01c1354be2ddbe641d299a9a3239da6eba452d9a3dae85e840a24ecfedf42efb9741cf777a9ee30d812759992f79f500ec3f4aede5c8b6cfdadd4288a26478cf65978addcbbb7de8dbfb5adc33aaa4fd56d20615697f2cfaad14142b2eaaf17603061ac9ea94ed302fc1c27f6646aedea6ee72bceb16003e70ca30a5a2a994b60529a8a8725e34b5c98a464fc8d87c75409b70194e138b8ab2d955698577ecc2cab0c2a93aee99751daf57d622ba5ec7ab49b25847e9663a0f5793ee74bddcaea28d75370fe3d0529894cc70adb175656e115c403f6352f1caa827fa592b3f3768f17e2c9a00d292b5c1d4772e712f708624273ecd03774072871112107f805de2d0a1c7bc8c300c3c236a58b81295ef39d8cf483fcd5cdf4b3d870629cef2614a68eeba241ff402d747a70bf4b7e68acdb8dc0bc9db0ea1bb78918469126fa3e924094d09396e4a356b8de9025e7b545020803ea8e9a4a35c80926ef7224ac278324d16b7613be1252b303d6e1e61c6392e250334aea1798ad52b9131bdda93553803b099d88f7350a2d1af27a47bae5dbc6af90b3d81016abbca7cd1268917d17763e78cb8c565632087f6a0cbc879a94d9f7e031076b44d826eb661fc13b54f31cb59cd2afaf930016c029ffe6ae7bd072c6c3ec8480577581d2ab508ad59bb42dc547b66f77d2ff09001d7ea5d6c3074ce4dd3397446b663957aaea8dd7b28b4156be40b088230fdc834ebf40fde25961777040000",
    ],
    [
      "ETag",
      "N3j0H9fgHEyrbDQqlANM+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93516f9b3010c7bf8bf74aa4b024b443ea03e9b22d154d5a429fa60ab9f6c19c191fb54dba28ca77ef41bb6c5a27d117b83bff4edcfdfde7c07e2a2359cc1e54f5d882dd7fa8c0df764106aed5ded1ab41e380050c3caf88dcb96afe6b7679150939bb9d3c45d9e3d536492e2e8870e207d49cc507562ad0d2b1f8fb81195e03b509d46d6d8a3e0b98df375d719367cbd557ca6b945dbeba4bd3649e2ed83138354aee79d1f3ef68bb3f066c8b0f199460c108e866692c6e41f865b7a6e375a361e4b0b5021cebe1fea0b2d836dc228ea8320a27a330fa189d8767e3703a9e7e2250a3e05ea121f66e43f3318f9eeb0c9f684b164e88b07d4c1b97fd73477525fb4dba70b9caa3693fe0df0017025be38b41b054d6f917f57e83af2afc4b6afe4e90ae4ae921a80223c10e51aa29b894169c1b24d115bc694ed87cbd4edfaa62a4452587c19d1a00b4df9d802fe93af99fb464b03f5a7d4ef2c51bc279b2cd09c997d78b4d9e5cdf74dcfdab11e67b0feec622b9ca4167a8703c3d9f9d45e3178f5d62e73bfa4eec6d0b01139c7e956fcab3b8e4dac1f119296bacea88030000",
    ],
    [
      "ETag",
      "vsgBx5CJ6cd5Q3w6RqJjAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fdb3014fd2b91f76593fa48df0f094107a18b565296a620344dad9ddc04431ab7b65356a1fef7dd3894c7d086142989cf39f79efbf023b9e759448684f1649383dc7dba138c5408689ae069fb76d3183f7876ea9d77c57822a36cd3fb9e1c1d2183172a4557eb14aa4ae43204359ccf6a8914f99a4a21aa18a8da68571bdd66b7dfe8d98db6dd1ea04e411a4f78768fea5badd76a58af1f72d712219214e89aab5a2856cfe7f56db3be96e20e42adea6f53d6318baaff3fe9712a42aab9c88ee63334902b900b58519ea2851765c44ede86ae71baaa2548def21068188a3cd3852d0c118a2ce6492e4d54327c24c6e6ab0f327326ce69602d53bd5d56aca549b7b4a8b2168bf5bd75ee4f2fac259614f314d4d2bafee6f88ef54c733d6bee79ce2cb03e1f7fb1c6fe747e697dbd39c095322ada8840699e191301652914069efae4be9f4e21a09a2a28c145cfeed246df1eb098f5c2b8dfeab0d806c6faacd7a12d66878336b423061475ba886e54341319eb860cec98b2288a9a2d3b6af75b36b459a319f768afd7e9b278d0e974fb40f615f220b98633aed642f1b259e4da77036711f873ef741438a68c98e6a93e2bcd1545bcf6a9b14824fda7ae7d817281998acebb5ee0f8a3d3c0bd72ca614f20a1e16eb6c171c73455806c2ae90a34c80b1161d3c8e574e606eed41b4d5061267879602832fcf9f82208766bd3656dde64e4fba31bd45029e9ee2f6c16f8ae3726fbfdab7c5734cd0dc708cc5f99605b0204ee70dd0457f609fc36459a85db575e18b88a1a1aff84713efa16e45bfcd71e9f0ac1bb517a243fe68e7f43ca231f629090851f6f0f920df0e1153fdc37e4e28dc3344ae33fee6aa88a24a1847267f9aa30735037fbcd4e8b18b2d4efb056b775184e11a388082bc8f45345e57d33dd2ea05c3d9310c455f3ca59fc014dcaf382ef040000",
    ],
    [
      "ETag",
      "4hq1GwN0lNF6oGLrdnq7Kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff6d916f4fc23010c6bf4b7dbbe18a1385844430fe2199a8034c8c21a474c71c6cbbd17643247c77afc3a031be69efb9fe9edc3de98ead923c621d364fe275096a7b128379b64508ba4c8da6abc05c0373181811138949de8f5e4bf950a9ea74d2e39ff1e665bde97689d0f21d32c13a3bb648208d34ebbced582e32205b6a2a22ccb6b0e23678ec8d49661859399c0441af1fdcb0bd73e467b362f563188dc3c1f0ee3fc774efb025ce435880825c829d5e285c8234031b4c8bac48c1d5582a099ad570fd102b2c0ba1105deab8dc7779abd9bae4171ef73dbf4d608a529804736227235a8d1934220d7143b958930055971471519f956d9fb71bbc59e7b01296a02a4cb477051ff51e0d8959bdf36f53db6f9cb58e1e09c200ff6b987e8fef6f0de827859445838de11d225da3a50dc537aa048749417f719f9883de7f01b4834220e8010000",
    ],
    [
      "ETag",
      "oinBdYucMvrv/UA1zgwVqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1f8b08000000000002ff1dd04b8e82300000d0bb742d466904991d2882821fe214d14d536ba99d2a54286863e6ee63e608efbd01a194b52dd6b56415f80286d8de900e13350d663ecfd6e1f29a1d48ecf5e5a4f2b32a7614bee928a7e18826f71196f1c9e976af5edea07be0fed18a0b6f810ade7153ec8df98e5aa41363d5e2a8a1722fd0e6774c96f9d82a46f31f94cc1db2b5c9538830b567eea341da5d97f5f905599f09212335b5a25519047edf6cad8d5bd1d54a9d2af948d999cfb1274a24d2e38ec1714be1cc598840e6a17b8df67754c61b839135e5495c6c2e3aabd35d173e251800f652a2612d161f2e9c78de00fcdbb1368a7d0202461ad680df3f29c584ad1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-15-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2b91f75a4802141224b4229aae6810b610da4dd31439e626739bc43476a8ba8affbe6ba774ed26b54fb17dcfb9e7dc8f3c925b5e6dc998a43cbf6ba07ef8702352724240d11c5f7fc167cf5d2d46fbc0def417dfa2dfee6270379d4c10c1354bd2725740478aa66620c79b7537af45b3a3b5101d4cd4714f3beeb037f4dc91e30e9c818f3c0945b6e0d5adceaed44e8e6dfba8ddcd85c80ba03b2ebb4c94cfeff6be67ef6a71034c49fbb5a48d2ad27e5bf4632118555c5493cd1a0d3412ea044aca0bb4f097b94dcf5ea7ee725a767304ef3903ca98682aa56d610a26aa8ce74d6db292f12331365f1cc83a5804b3d862a268ca2aa9680927d6962a9aa8871d5817d16a69cdc38b55b49cc6f35598ac6797c172da9dad169b65b8b6ae2f8328b0144d0b305c6b629d995b8817d4df8254bc32eab17ed6ca4f0d9aff3f164d4069096d30193943ea7a8e9f66e988655eff34cd1c48532f1d9dd27eea307f00836d0a147946d4b06825aabeebf63d1fbc847ace30190c294bd291eb273d6f347069c6fa2cf5c9e184dcd75cc139973b2179db21721dcde32089a34d389bc6812921a34da1ce5b63ba80971e151688a0376a3ae82817a8a4db3d0fe3209acee2f955d04e780139650feb3b9c71460b0988a635364f41bd145b6c1809a7cbe01cc166625f8e4149c63f1e89eeb976f1a2e5cff41807a8ed2af325eb389a879f8c9d23e28a168d81ecdb832e23e385367df88940dcd13609f9ba09a2efa47d8a20831a2af6fe30116c02effe6ac7bd472c6e3eca4885775c1d26b508aba15d216eaa3db27b9e3ff48801d7eadf98eff8bd63d3740e9d114aa8d45345edde63a1ad58239f4118c4e987a659873f13b49f7377040000",
    ],
    [
      "ETag",
      "heK81OL7vE/U3LXRz1L4qA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93614fdb301086ff8bf735951a088145e2430b1d540b2d4b838434a1c8d897ccccf165b6d3a954fdefbb04286820852fc9ddf939e5eef59b2dfbad8c6409bb57d59f16ece64b05fe471764e05aed1dbd1a340e58c0c0f38ac8effcf1ec006f4d7d19e51753a10ff3591657a7a74438f10b6ace922d2b1568e958f273cb0caf81da04eab636459f05cc6f9aaeb8cab3f9e282f21a65972f6ed274324d676c17ec1b25f7bce8f94fb4dded02f680f7199460c108e866692c3e80f0f36e4dc7eb46c3c8616b0538d6c3fd4165b16db8451c5165141e8dc2f8203e098fc761348ebe12a85170afd0107bb3a2f99847cf75867f694b161e1261fb98362efbe79aea4af69b74e17c91c7513fe05b800b81adf1c520582aebfc937a2fe0b30aff939a7f12a4ab527a08aac048b043946a0a2ea505e7064974056f9a3d365d2ed3f7aa186951c96170ad0600edd77be05bba9c7c242d19ec55abf3493e7b47384fb6d923f9fc6ab6ca2757d71d77f76c84e9c683bbb648ae72d0192a1c472747c7f1f8c96367d8f98ebe9378db42c004a75fe5527996945c3bd8fd03970cb03188030000",
    ],
    [
      "ETag",
      "KazC2oXnmH4TGBcl3TER6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f765d34a9b36a12f0941573216a9a490a6a06e9a5a27bd092e691c6c0756a1fef7dd3894c2d0408a94c4e79c7bcf7df891dcb26c49fa2464c95d0162f369c5435223a06882a73fd9d7d3f33c4c824b35eb39d3e16aa6d2cdc3d1113258a992749da7702079212290fde9a49e085ee454707e80810e9a6d7c5aed6eb363366dd3eea14e421a8f58768bea1ba572d96f3476b9eb09e7490a3467b21ef1f5f379e3bed5c8055f41a464e375ca0666918df7931ea73ca28af1ec683a4103850431873565295ad82b97e1c9ebd07546d7f504c9f72c021a45bcc854690b43443c8b5952081d95f41f89b6f9e2834c9c91330c8c05e3724ef37c5133163ae5c2a0d298cff35be3bb3f3e37165856cc52900be3fa87e33bc633cdf58ca9e73993c0f87cfcc538f3c7d30be3db6c07d7f691d1ce12a462993613d03085d2c853bfdcb7532a055451091538ef986ddaec9abd300e3b51dcb50ec3d88430ec869d436a8566d4b3c15e864051a7cae85a45339e757ab41d1d763a6664d1b615d3b8dd6c01503b6eb6ecae6d2d2d6c7e8b5a31d9d6c883600a4e99ccb96455d3c8b5ef06ce3cf0a7de701038ba8c9816a93aadcc9545bcf4a9b04824bd53d7b64419c74ce5045c2f70fcc13070af9c6ae8234868b499dce1d8639a4a403615740d0ac4395f62d3c8c578e206eed81b8c50a12779b16348d2fff5b817049b5c7759e93719f8fe60861a2a04ddfc834d02dff5cec876fb22df154d0bcdd102fd5725b8af00022b5c3bcea479027f74917af1b6b53d03575241f3bf30ce47dd80788dffdee2532378472a8fe472eaf833521df91083802cfa787b90ac810faffaeede21176f1ea6910aff71572359268904543bcbd6a5999dda32cd6e9768b2506fb0966ded8653c62823c21a32f5545175ef74b74ba890cf240471d5bc6a167f01d495ce6af7040000",
    ],
    [
      "ETag",
      "Zi+DMpbgTQtY9EUCjYtlyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff6d916d6bc2301485ff4bf671756bc5f906c274c82694eaeadc3e0c91186f6b6bdb1b93b44ec4ffbe9b3ab63106212f27e790f39013db25c586f5d93a89f725a8e3550ce6d96e42d06566342d120b0dcc6160784c4e9cbd5d77ee5e27bd7d75bb0dd259b7d3abaac360400e2db69073d63fb128816ca359fffdc40a9e03c512d42b2e25b9cc515a61349dfae36140428e1b2b040bdf1f8efc313b3bdfa9d54aee7e22f39770123cfe97589e1d96e23a84081414026c07a930056126164ff35c66d0d0582a019ad5e6fa2256584aae101ba434bc368d66bbeb755cafe5b67a64cc5070936041dec59caa31838667211e888e35c9a0ea2d8146f55c916c540935853d400aaac244bbf7f051b7b81198d78d7f47229ee99f8c006ec0fb1b587e3d3e3a1ad0338544a2c142b817a007b46e43f0b680c304a7ff784acce57cfe04ae28d5b2ec010000",
    ],
    [
      "ETag",
      "oPW+75VI9qv/hNjP879vvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bb642d0e6203a1bb122d0545e52fab8ca581f03334a0103bbd7b9d1ee1bd1f70c9733a0c64e40dbd8257202f9ab9cc97bb1e59f8ad769013404debbbcd7c83a1ad2806f36cd5b7aac01fee066ac33d9f587c3bd4a916ad99c2d5a44959227829d4d40f4460449cd4d74c3a9e67d83046d3dcbcfb0586a6b0cfe9e0dc514d5efc5bb2a372ebba66c464839530e854687dcc4847ec53e4112f1ba2a06381d0b4c9c8572561ac67c8289ccc294fb5495aa2c1e4ac628fc9d5a9cbe1e847a15e3ea26f8cb7fd1eb7657c70d9960ff228561358003af795a003a99edc3534cd05f8b79351f6f41960d18ba002fcfe013e8b6abe1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-17-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc8fbda04f2808448d19aa5b48d94901548bb6a9a903186ba054cb1c95455f9efbb364dd7aa52fb09dbf79c7bce7df08c1e5895a2194a58fed8d2e6e9db3d4fd009a212e7f06a5fdc4829f6f7cb5f773fa2abb2b66fd7e1653e9f03822996c0655dd09ee06d43a898edc27edef0b6c60de73d48d41b4c7a0367e84c07136b30b6c62ef0042db235ab1e807d27652d66a679d4eee79ce705c535137dc2cbd777733f34eb86df532285f95ed20415617e2efabde0044bc6abf92e0403ada04d4c4bcc0ab0f09f9926a7ef53f7192efb3980f78c504c086f2ba96c410ac2ab8ce56da3b3a2d933d236df1c50e8adbd6564105eb4651557b8a427468a258ee5534d8df360bb3156fef936d82ca2d5d68fc3e5a5b759f497dbf56ee387c6cda5177886c4494135d7981ba7fae6c305f4532a24abb47aa49e95f24b83561fc7a208202d68178c2796830753cb4db26442b2e9c84e328b26c93499d8789458c41dd3719a500c3c2daa59b8e21519b9437b4a9c789cd9381e5b23374ed2e1244e33c721ae856d3c49d1e104fd6d98a4674cd45cb0ae43e82658455e1c053b7fb9883c5d4286db429e75c654016f3d4a2810409fd4745051c64149b57be5475eb05846ab6baf9bf09ae6983c858f30e30c1782021a37d03c499b0d4fa161c85f6cbc3300eb89fd3c06059afd7e46aae7cac59b96bfd22318a0b22bf5178551b0f22fb49d23e21a17ad86ecbb832a236385327df80340d8d12e09bada79c12dea9e029ad18656e4eb61025807befcd58e7b0f58d87c901112eeb03a442811d2d06e8598aef6c81e59d3c1086970233fc45cdb39364de5501969492bf95251b7f7506827d68a57100461fabe6ed6e11f358c894777040000",
    ],
    [
      "ETag",
      "5GWttsvjCXhBTQmp5YLSHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "30",
      "10",
      "c7",
      "bf",
      "8bf74a24e832d222f521d9b22d2a096d42fa3255c8b50fe6cef8a86d324551be7b0fdaa5d33a89bec0ddf977e2eeef3f07f64b19c91276afaac716ecfe4305fea60bd6e05aed1dbd1a340e58c0c0f38ac8db557c51d657f368ff186e975976b6bc4a673797974438f1136ace92032b1568e958f2e3c00caf81da04eab636459f05ccef9baeb8c9d78bd537ca6b945dbedaa6e97496ced93138354aee79d1f3ef68bb3b06ec01efd750820523a09ba5b1f800c22fba351daf1b0d2387ad15e0580ff70795c5b6e11671449551341945f1597c1e4dc2681c8e2f08d428b8576888dd6e683ee6d173bdc6dfb4258b3e1261fb98362efbe78eea4af69b74e16295c7e37ec0bf012e04b6c6178360a9acf3cfeafd015f54f897d4fc9d205d95d243500546821da2545370292d383748a22b78d39cb05996a56f5531d2a292c3e04e0d00daef4ec0d7349bfe4f5a32d8ab565fa6f9fc0de13cd9e684e48be57c934f97d71d77f76284d9de83bbb648ae72d0192a0ac7e79f2671f8ecb1cfd8f98ebe9378db42c004a75fe5bbf22c29b976707c02dcf4563688030000",
    ],
    [
      "ETag",
      "VN69fmKE1yq0UMOO2MKLBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3014fd2b91f765d3fa485adaa6951014082c5a69214d41689a5adbbd2986342eb60354a8ff7d370ee531b421454ae273cebde73efc446e4536273dc2c4e22e07b5fe722319a910307481a707c7eb8bb9ff533dc8f83b6b741a8feabc2d1e767791210a95a6cb550a552d73c541f726e3da42c97c459594550c54f5fcaad76eb47dafe37a3bee4e17751ad26420b25b545f1bb3d2bd7a7d9bbbb6907291025d095de372f9725ebf6fd4574ade0037bafe3e651db3e8faff93eea592532364b63b19a3815c839ac2928a142dbc2ae76cff7de89aa0cbda02c9f78203e55ce699296c61082eb3442c7265a392de13b136df7c907130080e636736a70666156766f3cd1caa9de97475eb1c47a3536786352522053d732e7f0451e0bcd0c2a133190e8371ec7cddfbe69c44a3c9997370b5852bcf61d1c81cb41199b51153964261e1b953e1c7f914026aa886129c76dc36f57cb7cb12d6e189df6cb1c405c67cd669d1267379770776e60c28ea4c11ddaa682633d6658d792369b778cb777deaba9da6dfee24e032eeb91e6b34bbdcf75b4d976c2ae44109034742afa41665bbc86514c6c1348e26c3c37e1cd832129aa7e6a8345714f1d6a7c12291f49fba36052a24662a7a1f0ee320ea1fc6e145508e7b000bcad7e33b1c7842530dc8a68a2ec1803a95736c1a391b8dc3381c0dfb0354d8199e6d199af47e3dbd0ae2f5ca76d9d837e94751ff0a355429bafe0b1bc751383c219bcd9b7c1734cd2dc70aec5f99e0be0408dce0c249a1dd7d78b445da95db545e19b88c06bc7fc2381f730dea3dfe7b834f85e0ed283d92f349105d91f22882041464fcf3ed41b2053ebde4db1b875cbc7398461bfcc75de5ba48c215943b2b968599adbae9b53b1eb164653e60bedbda0ea7885144842564e6b9a2f2c6d96e1750ae5f4808e2aa0dcb59fc",
      "01b1c4dc55f1040000",
    ],
    [
      "ETag",
      "BFyVd8KrwoT+b272xrQ6iw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "6d91616bc2301086ff4bf671ed483b71ae204ca7734291d9eaa72112d3b356db5e97a44e11fffb2e7538187e49ee2ecf9bdc7b39b15d56262c60ab2cfdaa411def5230531b44a0ebdc68da2a2c35308781112991f038dddc8f7d33e8aff66f2323e2383cccd26e97082d375008169cd83a833cd12cf83cb1521440b244187b893956361bf46643ca0a4c6c36998761af1f0ed9d9b9f2cb65b5fbe3e359349e8c6e291667876d7115c11a149412eceb95c22d4833b6c6b428aa1c5c8db592a059033707a9c2ba120ad1a58aeb755cafedb73bde13f75abcf54c608e52980c4b62e731b5c60c1a9147f84dbe984f806a42b2b86ed6bd2d739fbbdc77b9d778b125d882da63a6f90b1c9a5e1e24164ddf3785fe55288146e6fd572d7efbe81f0de80f85644a83f5c32fde5ed1d234ebc0a81a1c26057dca7b662ef9f9078e9c8d43f1010000",
    ],
    [
      "ETag",
      "e3Qh+I2tDBbvFGtaSSLxTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dd04b7282300000d0bb642d4e0151d29d421510464184c60d132104904f0c503e4eef5ea74778ef05701c93b68dbae6416af009262cc165bc3c3275a76de934090a9ac5420c9eed318dbe9065b66bf1507fcb41854e42ffd3e4d7a9c34d331bd22a3d93223375b6f18c6d6585daf8e80793cd7d0b3d935636f3f6656c989204fd53f21cb0c2435adc37a1ea887646d74d7aabaa3ae1974337583bb4714d279321bd8f76921b63b55752b570d94ad0aed8ab7d34db86ab9f43e20e38d405ab574ba7b1238a023f0834780a328c4b59e4e8d2dd3e24ae1e0b3d52f6890716808c2ce7a48df2375756205c807f7bd44d8cbc03760473c2c1ef1fa292c9551a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-19-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b91f74adbb40d695aa91a5d092c124d479a82b6698a6cf72633a471891d2686fadf77ed50064282a7d8bee7dc73ee471ec9ada83664429828ee1aa81f3edd48468e08685ae0ebdd59ac7e842c3e87082e677fc378ae875f66d32922846129badd95d051b2a939a8c97ad52d6ad9ec682d65071375fae34edf1ff8417fe4f63dd71b234f41995f88ea16d9bfb5dea949af77d0ee16521625d09d505d2eb7cfefbdfb416f57cb1be05af55e4bf65045f5de17fd5c4a4eb590d574bd42038d823a832d15255af8cfdcb093d7a9bb826ebb0582ef0507cab96c2a6d6c610a2eab5c144d6db392c923b1365f1cc82abc08e7a9c365d96cabaca25b38723654d34c3fecc0394b960b278acf96c9629646cb385bcdbf868b5977bebc582fe29573fd354c4247535682e53a53e7c4de62bca0fe06941695554fcdb3517e6a50f4762c8680d20ada6036727dda0fdc31cbd988e7c1f098e52e3016b0d1311d32978f3df0360c28f2aca865d14a5663df1b7b3ee5991b8c82cce3a351c636ae9fe121f0dc613066fe80ec8fc89f5a6838156a2795683b44ae93280db33459c7f3591ada1272da94fab435660a78e9516381087aa7a6bd890a894aa6dd519c86c96c9e4657613be10b28287f58dde18c735a2a4034adb1791aea85dc60c3483c5b84a708b613fb76082a32f9f9484ccf8d8b172d7fa6a738406357db2f59a549149f5b3b07c4152d1b0bb96f0fa68c5c94c6f4fe17027147db24e4721d26df49fb94400e3554fce36122d8063efcd50e7b8f58dc7c94511aefb83a5c19115e43bb42c2567b600f075e3f20165ceb3731df3d3e34cde43019610b957eaaa8dd7b2cb4156bd433",
      "088338fdd8366bff0fbfac219277040000",
    ],
    [
      "ETag",
      "qFNsZEbNGeIeQAzENCt3BA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c7",
      "bf",
      "8bf79a6ac9c80a44e2211d053a8596b5e91342916b5f323327176ca7a8aafadd770eac9b60527849eecebf53eefefe67cf7ea946b2846d54f5d481d97daac0fdf0c1126ca79da5578b8d05163070bc22f27abd8da74f9f3bfefc7d7303271b17f2f522bdb820c28a9f507396ec59a9404bcb92fb3d6b780dd42650777553f459c0dcaef5c555be9ccdaf29af51fa7cbeceb274924dd92138364aee78d1f31f687b3804ec11374b28c14023c0cfd21a7c04e1667e4dcbeb56c3c862670458d6c3fd4165b06bb9411c5165149d8fa2f197f159741a4671189f13a85170a7b02176bda2f99843c7f5129f694b169d1061fa98362efbe796ea4af69bf87036cfc7713fe0bf001702bbc6158360a98c752feafd015f55784b6afe4190ae4ae921a882468219a2545b70290d583b48a22d78db1eb1c96291bd57a59106951c06b76a00d06e7b04aeb245fa3f69c9607fb5ba4cf3e93bc23ab2cd11c967b7d3559edede79eee1d508939d037b67905c65c11b2a0ae3b3afa7e3f0c563dfd0fb8ebe9338d341c004a75fe5463996945c5b38fc06518d0c3588030000",
    ],
    [
      "ETag",
      "GUv4Eq/uawJbHe3bt0aUOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fe24014fd2bcdec97dd84474b2bafc428ab5ded8aa0a5e8b29b0d4c87db3a503ad899ea12c37fdfdba9f858b39a900073ceb9f7dcd70359f2744eba24e4f16d0ed9e6d34284a44240d1185fef7fa467679e79b9386b9d9e5cfd5c7ebfb1262adedf47062f5492aed60954a5c83306b23b1ed5e24ce46b9a0951c540d58659b59a8d66db6a9996633a1dd44948a23e4f97a8be516a2dbbf5fa2e772d16224e80aeb9ac31b17a7aafdf35eaeb4c2c8029597f9db28e5964fdfda4078960547191ee8f47682097904d61457982169e95f3f0f075e81aa7ab5a8ce43bce803226f25415b630041369c4e33cd35149f781689b2f7e9091db778f02632615c69c558c994e3833a834a6d3f5d2f8e60fcf8d191615f104e4ccb83e757dd778a27903633c18b8a3c0f87cf0c538f187e30be3eb6407577671d1ca1ca4e2a93612d03081c2c463afbcb7132a0454510925386d994d6ab5cd4e18852d16b5edbd3032210cdb616b8fdaa1c93a0e38f31028ea54115dab682a52c76e7598d36066d376f69a91d9b1daacd569a3ac633722336c36da7607a206d956c87dc6151c73b91692970d23d7be17b8d3c01f0f8e7a81abcb88689ea8e3d25c51c44b9f0a8b44d23b756d0b940bcc5474df1b04aedf3b0abc2bb71c781f62ca36a35b1c79441309c8a6195d8182ec5cccb169e46238f2026f38e8f551a1a778b16348d2fdf5f02c08366bdd65a5bf49cff77b13d4d02ca39b7fb051e07b8313b2ddbec87745935c73b440ff2b13dc95008105ae9ce0d23c843fba48bd74dbca3303d75181f55f18e7a36e207b8dffdee2a742f03e4a8fe472ecfa13523ef910410629fb787b90ac810fcf7c7773c8c5abc334b8b18ae3ae3259246119943bcb5785999ddab69d96453439536fb0a6b5b71b4e11a388082b48d56345e5cde96e17502e9f4808e2aa0dca59fc057f7ba816f3040000",
    ],
    [
      "ETag",
      "wXnKKI0QjK7HGVZkJh1Ytg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff6d915f4fc23014c5bf4b7dddc84a066e242402213a0502037c3184947219836d77b61d8884efeedd306ad497fe39fd9df49cf6ccf671b6662db68aa3d702d4e9260233291721e822319aa61c330dcc626044446434197aa36deffd71c59f839ec78f4fb2c8a3769b082db7900ad63ab34d0cc95ab3d6cb99652205b26923d29c1873cacbed2c18f6a7b3ce704c528aeb521acd07834e77d06717ebcbb55ce6fb6fd3741606a3fbff1c8b8bc576b80a61030a320965865ce10ea409ca7a9a2e4fc0d65828099a55707510292c72a1106d52ecba63f366bde9f15b87bb8eeb1398a01426c68cd8f994a231834624211ea91dab13a0aa2515dd54e381645e6b784ea3e173dfedfb559d52851da803c6dab983b72a4e4d625a45ffe36dbae4fee995200cf0dfc6c5679aeec9801e2ba46a1aca56ceb5610f4bdad06b185580c5a4a00f7a88cd757ff900d83a65e7fd010000",
    ],
    [
      "ETag",
      "gQM8NhCzJb1VIC81wKcupg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bb642d8e8074a43b5011e55b8a5ad930698c0152202422493bbd7b9d1ee1bd1f0011c24294f79ee20ebc02050d7b8ee6015bb96ba7be7cc782d7dd9b322b63571457b2d8a603af5e34dbc3a66c8e2175913386545fe6b295556eb4526dac9cdfe372e8967411c9f8b6f51c622a7f8a07ef46043ca8633b5e5ce5564c0bced17865a4d6736d2ad067976505e4e9637f6852f205bb64487c27e3db0fcbbc9cf664739ad040d7753f1811b19b237d9c15c991c874688709a9b211fb055efa899882f0fd961762d7a7015fac60c6d2546f566b628019c092d51c8bb27e724dcbb667e0df5ede15c3cf0017438e39f8fd030d8b839c1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-21-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbda0448c8538ad628a52d5a425620adb66942b631d42d608a4da7aeca7fdfc5345daa4aed276cdf73ee39f7c133bae76582e688f0eca161f5d3973b41d009620a67f0fa3334d5cded15fe960ce4e8dcaeec8beaef70b9580082b72c898b2a673d299a9a3239df85fdac164d856b217a90a837b07bf678309eda13cb762c67063cc9f274cdcb7b60df2a55c9b9691eb4fb991059ce70c5659f8ae2f5dd7c1c98552dee1855d27c2b69828a343f16fd9a0b8a1517e56217828146b23a6605e63958f8cf4cc8e9dbd47d8e8b7e06e0474e19a65434a56a6d410a2aca94674dadb3a2f933d2368f0e2874d7ee2a32a8c89ba28c4b5cb01323c10ac7eaa962c679b0dd189e7fbe0d36cbc8dbfa71b8ba7437cbfe6abbde6dfcd0b8b97403d75098e44c738d8571aa6f3e5c403f6152f152ab47ed73abfcd220effd585a02484bd605e38935c6f6d49a91944c683a1d8e486a3142a66432c24362d199c39c84300c3c2daa59b8146562cf4609a3a3d88168ec8c87349e0d66249e4c2c4c1c421d6261b43f417f6aaed819979590bceb10ba09bcc88da360e7af9691ab4b487193abb3ce585bc0b147050502e8839af66d940b506adbedf9911b2c579177ed76135eb30cd3a7f001669ce25c3240e31a9aa758bd1109340cf9cb8d7b06603db1ef87a044f35fcfa8ed79ebe2a8e5aff40806d8da55fa8bc228f0fc0b6de780b8c679a3218fdd015560f9166a03d7fbdf808425edb2a0ab9d1bfc40dd53c05256b3927e3e4d00ebc0a7ffda61f1010bab0f3252c11d7687ca5684d6acdb21aecb3db0878e3d99220daed5bbd8d0b20e5d6b73b41959c14af55251b7f8506827d6c857100461fcbeeed6fe1ffe98889c78040000",
    ],
    [
      "ETag",
      "ZS/tWhQaKd2s5F1p1Gpz3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "657ca529984a2b491f5aad5a83b5528c1a639a1586160b0cee2ed6a6e9bf3b8bb51a35d1179819ce2cf75e58c3222d62f0e0319d3d5728577b33d457a608505599567c2ba9500816a0163326cf97b781db899b37e42ceeda8ba3e6b8085e97dd2e132a9a632ec05b439262162bf0eed750881c792da2acca8b69dd59a057a5194ec260383ae53ea7d8f4a36bdfeff5fd016cacdd622cb498d6fc3fd61e36163cd16380094a2c22345a4a494f18e9a1b1a9445e66d85054c90815d470fd6026a92a85246af0a4b1ef341c77dfed386ddb69d9ad4306338a844ea960f67ac2fa40931659404b76092e03b22ed970525f5f789cc6b511530e47a1dbaaf57d05585a926638fd1b64bd73c19fe103db46f09d13395585de5127fe65efb7e338d3cfa38e7be1e007a13427b543c2e1c56012f62ec6867bd87aefaf34aab1240e52a1c9d0b15b9d83b66bbfc77a44266a7e8fa76585164482ff8eb3548397884ce1e60d177a95e77b020000",
    ],
    [
      "ETag",
      "JwXR68d/Wo1kY7kC/PnRxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b",
      "cd",
      "de174d104aa96d21315e0fabc7058b9682a7970b6c97695d2d5dec6e35c4f0df6fda8aca9968425276df7b336f66679ec93dcf16a447229e3c1490afbfdd89883408289ae0ede92fdb7972fdf360c82e274ffacdc3ef787a931c1d2183972a4997ab140ea4287206b2371937935c142b9a0b7180810e0ce3a06d1996d3b6f5b6a99b5dd44948e321cfee517dabd44af65aad6dee66224492025d71d96462f97adf7a345aab5cdc0153b2b59bb2855964ebf3a4c7a9605471911d4dc668a09090cf6049798a16de948be8fb6ee826a7cb6682e447ce8032268a4c95b630041359cc9322afa292de33a96cbefb43c6ded0eb875a7fe40ebd71dfdb73a7677b73ba2c63ccf71b9abeaf51a96d2f1ada1ccb8b790a33be9897c86cb6bad74e83d1392268e6964a9073edeaa71778da2e79e06b13dff7c6a1b677bcaf9d05a3c985f6e37a878386172015cf2abb218d5228adbe7474f0f11d4b015598b30667b66ed1b6a377a338b259ec740ea35887287222fb9076229d754d30171150d4a9327aa5a299c80c4b67ccb01d1b3aa6c5c0e9426cea96e57480c1021cc7340d601d5b279b0679cab982132e5742f2baade42a1884de2c0c267edf0dbdaa8c9816a93aa9cd9545bcf7a9b048247d52d7a644b9c04ce51b0dfcd00bdc7e38987af5580c21a16c3d7ec0c188692a01d934a74b50909f8b05368d5c8cc6837030f2dd212aaab7bed83224e9fd797e1384eb55d565557d891b04ee356a689ed3f57f18fab04cb2d9bc4b37a56951512a7e75aae33fd60069632d6f2763e76491cddf0dfe1a04b7a1ce",
      "452e275e704deaab0062c821635f4f01922be0cba5de6e187271c7308d5478c69963b24cc272a8678f2f2bf32feace61bbdd211539571f30c3e96c9b5cc62823c21232f55251bd6155db4aa890af24047164fc817f86e83fdbfd0363e1040000",
    ],
    [
      "ETag",
      "FJ78wANMRLcQUw0ZqXfVZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "83301485ffcbf5150cb0b94d923d804e9d41e6704b4cccb274ec8230a0ac2d3364d97ff7168dd3c43eb4f7f67e273da747d865d5165cd864e9be41d15ea4a8e6ba885036859274d4bc920806a062299133db7bdde7ec2a5f3ef5c3dda3086f7dcf9f8fc744c8f81d4b06ee11920c8bad04f7ed08152b9164ace44da508526dadfbbb60e62da82df956b7e132083c3f98c0c9f891acd7f5ee2c98868bc9fd24fa4fb23a1990f34d84090aac62d40e6ac1738cd5548793acac0b34256f448c123ab81ba4823735139c9b74633a8e690f9cc1c81e5a76dfea5f1358f098a98c57c42e5fc81b28ae5811f10fca060e01a22b2966d2ed07bab62f47c381f56bf5ba50874ea1bdfe8587e7b1adc7abef47fc56a17c169c1c4bd4667b8ef565fd86eb388a622ad1a00131a37f7fc814b8092b249e3e01d8cf408ad5010000",
    ],
    [
      "ETag",
      "O1AXqja5jUM4NkJrNDBABQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dd0cb7282300040d17fc9da380252a13bb0a20d1d6a7d5460c3a410210602048c894effbd4ef77773ee03e03c27c3908d2d231cbc028d4d779a4fc3cef197dec5c02f26854c89b21b494bb732a14a9f60403669b259d1e49a4a5d409460fbfd937d575dba3fc522b345e5f05b70becebef471e10e5e19c08f3747b3a409d63faab112af2bb455d5558ff74d7c0bfba8e8bdf2b03d2279f72dae581d0cd2d0a3a0d2f1e6310af73af36d9852755fcde0a2416d642ccb72bd8306c743eaac4b49c395a9792d6284aed1897208253a1ece8d42cc569767be33199fdb600288eaa82043469f5ccb76dd09f8b767a3eec873804fb02002fcfe01c06003c31a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-23-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4014fd2b64f66b55c007d6c46c5da5ad89e216d16677b321035ce8b4c8d099c1c634fef7bd0cb5dba649fb8999b9e7dc73ee8367f2c08a848c48c4b2c70ac4e1db3d8fc8190145337cdd655b611fb64f57fbd5fd0f71332b4d61ff9e8cc78860354bd25d99434bf24ac420479b753b13bc2aa9e0bc85895a76b7650decc1d0724cab67f6ce9127214f17ac7840f69d52a51c753a27ed76c67996032d996cc77cf7faded9db9d52f07b8895ecbc97eca08aec7c2efa3de731558c17e3cd1a0d541244083bca72b4f09f994417ef53b719ddb53304ef590c348e7955a8da16a6887991b2ac123a2b193d136df3cd81acdd853b0d8c98e7d5ae080bba833323a18a86ea508271e9af96c6dcbb5cf9cb49305f79e17a7aed2e27ede96ab1597a6be3f6daf55d43d12807cd35c6c685be797841fd04a46285560feae75af9a541f38f63a909282da109868e39a0d6d03c8fd2c889d361b71fa52644d13072fab41b99f1790f7a490414795a54b368c10b331a58fd28e985409d7ed84bd3241c0e7a560810d989d5776c6b00e478469e04533063b2e492351d22b7fe3c70c3c0df78d349e0ea12525ae56ad618ab0b78eb51618108faa4a6631d651c95ea76cfbdc0f527d360be759b092f20a3f161fd88334e692e01d15460f31488254fb061c49b2cdd1982f5c47e9e82928cfe3c93bae7b58b372d7fa50738c0daaed25fb20efcb977a5ed9c105b9a571ab26f0ea444cb77581bba3efe45242e699385dc6c5cff17699e7c484140117f3d4d04ebc097ffda69f1118bab8f3252e11d772796b5482ca0d921a6cb3db1bb03db7688060bf521d6759c53d7ea1c7546d841a15e2a6a161f0b6dc42af90ac2208edfd3dd3afe03d667dbdf78040000",
    ],
    [
      "ETag",
      "mgVr2yVwGvOjBrQDp0r2ZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92dd4ec2401085df65bc2db16029d8840b508446407e0ac6184296760ac5b65b77b72221bcbbb315d1a889deb433d36fb6e79c760f4f511a8003cb68f59ca3d89dad508d74314699c74ad22de3a9443000155b11f93cbb9d752ad6f9b6527d7d085af7b36e3bab8e1a0d22a4bfc68481b38730c23890e03cee216509d29acfe33c4917456780da657a38f1c6eea0437dc203dd0fa6bd5eb3d56bc3c1382d064cb145c1ff636d7e3060c397630c5160eaa3d69209be415fb9daa66449166349f25cf828a1808b072bc1f38c09ce4b3429552e4a65bb62d7cb35b36c99d6258131f7998a784aec7442fa4071c5e231df924bb00910454986c3e2fa42e328288ce8d21d78b655e8fb0a90b4308a71f137487ad78c3ec307768ce03bc7129ea7ea44ddf4ee9abf1d47997e1e75ddf4da3f08a928a913e2b9fdf6c46bf6879a9b1fbdb7760ae550700a52a2ceb06c5af56acd36df63bde23a6a7a8fa3448e06f88cfe8e6ea4c009592cf1f0061dcec7767b020000",
    ],
    [
      "ETag",
      "qVKVG24/w25xYdBWVHEp5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53616fa24010fd2b64ef4b9ba88022a849d3f32cd723b1e821b6672e175d96856e0b2cb24b7ba6f1bfdf00b5add7a44d4c70f7bd37f36676e609ddb32c442314b0785bd262f7e58e07a885a8c431dce2bf73aaceb6bfec6cc5c241d2ebbb7ea23f9e9d0183552a81d33ca16dc1cb8250315a2e3a71c1cb1c179cb72150bb6bb475b36b0e744bd30dcd18824ed0249ab2ec1ed4b752e662a4aa87dc9d98f338a13867a24378fa72af3e74d5bce0779448a11ea754218b503f4e7a9e708225e3d9d97201064a418b354d314bc0c2ab320cbe1e87ee309c7662203f30423121bccc64650b42109e452c2e8b3a2a1a3da1dae69b3f68614fed89af4c664bd73fd9e0b4126f4e152c94c3a1a56ca0a6882574cdc24d85acd7f9bdf2dd9b5d01020e6eb1a062a3dcfcb03d5b39263baeb2745d7be12b27e7a7caa5375bce956fab230eb80ca9902cab3dfa384868e5efb98dcefbc7ab045842ce065c5b9a89f581360ca2c022d1a0d70f228d06c120b0fab81768646850230c28069daca2d72a9cf14cd78cae1944c69058c341681a619f58b8a75bd1906a383223530b29d10711dab7d063c124bd6022e78235bd44379ee3db6bdf5bba93b16fd76544b84ce44563ae2ae2ad4f094502e983baf615ca3864aa1ec6717ddb1b4f7ce7da6e66614a634c768b2d4c43841341818d0b9c52498b2b1e42d3d07cb6707c67e68ea7a0a81f787e600834fafdf42af07779dd65597fd1d8f3c62bd0e0a2c0bbff30f0611a68bf7f93ee1a27654da9f9f5a989ffd00048875a5e4fdda39389f67ff6f06b2158812617fab9b4bd156aae3c1ad18266e4f32900720d7cbac987b5022e2c16a41112ce307344544948419bd963696dfe59ddb3f4be816a7221df613dd33a34b98a5145a429cde47345cd5ad56daba052bc90008491711df712d07fd8c06713d6040000",
    ],
    [
      "ETag",
      "axPe/OqXEnYid8l35NTl1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d905b4fc2401085ffcbf8da26b462d1263c8856c5108422f1c110b22cd352683b752f1842f8efcc56437cf4652fe77cb339678fb02bea35c4b02af22f8bea7095a399ba438ada9646f3d650ad113c402372262bfd51c862fcb67f7dda88494f268f331b4dfb7d26b4dc6025203e425660b9d6107f1ea11615f298a8c8d686217368dc7d387e4f9e9394858ad64e18cf47a3fbc128819377195a2e9bddbf4616270fb6b44a314385b54497a151b4456986ae9e165553a2afc92a891a5ab8357245b6118ac867c50fbb7e1085d16dd0eb04dd4ef78ec192a43005d5ccce679c0d0c1951a6f4cded206440b5472e9ab5eb9ee59bb6c3be055cb4bf5e74f102e72d7e1f1c1c0cea89224ea7d105bb0e3b3f311fc845375cc9288b1e48c1bffc52188833516a3c9d01e9932fc1c3010000",
    ],
    [
      "ETag",
      "msWiciNOvJFhaP7cEDSu6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dd0db6e82300000d07fe9b3355c44eade286b64a9a01005dd4b53b003e4562e3260d9bfcfec13cef9013c4944dfb3a129440ddec0ccb5dd3a595389b06d65d4372dece3c7bcff4e1b8e7b6ab6212ab5d4c97115f4a4ba0fa85333e29ad5e6123c4da7415fe5292575aaf2ebe216d84d4e86728cf21a3a68269095fea1bd367cd0f458970ecef228be4c653b2dedfcf40a5f37e0e3a379faef0719de47c31e9967421aabb5328c4662de8351aa5cf1ae953b2f0dd56e14de08a7085ad516b591806783869f1181db6a0a8fda699f6d94607978f64d3a6d400a1630b002629279277a96bfb8bab1dbadc0bf9d0db314af002c78273af0fb07c2098d7c1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-25-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d4fa34014fd2b64f6d5b6b4d0963669d6a6a292b47405aad96c3664182e384a1964068d31fdef7b19acab31d12766e69e73cfb91fbc907b5ea6644e129e3f34503fffb813093921a0688eafd145934693086c411faebd99575f99f7fe72b140046f5992eeab027a5234350339df85fdbc164d456b217a98a8371af78693d1c4194ecda16dda33e44928b2352fef917dab5425e783c151bb9f0b9117402b2efb4cecdfde078fa341558b3b604a0e3e4a0e50450ebe16fd5908461517e56217a28146421dc39ef2022dfc67a6c9e9c7d47d4ef7fd1cc18f9c01654c34a56a6d610a26ca8ce74dadb392f90bd136df1d48e8aedd5564305134fb322ee91e4e8c942a1aabe70a8cf360bb313cff7c1b6c9691b7f5e37075e96e96fdd576bddbf8a17173e906aea1685280e61a0be354df7cbca07e0a52f152ab47ed73abfcda20eff3585a024a4be882f1d49cd0a163ce922c99b2ccb1c64966429238c9744cadc464331bec34018a3c2daa59b414a543c19aa6433b4e33cb8aed099dc6c9189c783c9999f668e458cc9e90c30979aab982332e2b2179d721721378911b47c1ce5f2d23579790d1a650679db1b680f71e151688a02f6a3ab4512e50a96db7e7476eb05c45deb5db4d780d3965cfe103ce38a3850444d31a9ba7a0de88141b46fce5c63d43b09ed8af635092f99f17d2f6bc75f1aee56ff40807d8da55fa4bc228f0fc0b6de788b8a645a3218fdd815468f9166b43d787bf88c425edb290ab9d1bfc26dd530019d450b2efa789601df8f65f3b2e3e6271f551462abce3ee30d98ab01aba1de2badc23db724696fe5315add5a718468f5d6b73b419610fa57aada85b7c2cb4136be41b0883387e5f77ebf00fe3fc2f3478040000",
    ],
    [
      "ETag",
      "TGudT6Te4oaqVI9IrQ0kNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92d14e83401045ff657c94c6622a56121f68adb649ad2dc518639a660b03a2c0e0eea2ad4dffdd59acd5a889bec0cc7066b9f7c21a1ed32202171669f254a15ced25a827a6f0515599567c2ba9500816a0160993af51cf59dc76fb13ffc68fc5c17e42e3e5d23b3d654285f7980b70d710a798450adcbb351422475e0b29abf2625e7716e8556986d3c01f8c2eb8cf2932fde87a38f43ac31e6cacdd6224b498d7fc3fd6661b0b1e68e1638c128b108d9652d203867a606c2a919719361455324405355c3f482455a590440d9e340e8f1ab673e8b4ede3a6dd6ab64e18cc28143aa582d9eb29eb034d5a643ebdb04b70189075c986e3fafacce334aa8d9872300a9c56adef2bc0d2e234c3f9df20ebbd17fc193eb06d04df39915355e81d753ebcf27e3b8e33fd3ceacc0b7a3f08a539a91d120c2e7bd3c0bb1c1b6eb6f5de59695463491ca44293a1dd6cb58f8e9de67bac5d3251f37b5c2d2bb42014fc77f4530d6e2c32859b3763f1acea7b020000",
    ],
    [
      "ETag",
      "zdE6bYCHQRWRfa/+goPxxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a3",
      "40",
      "10",
      "fd2a64ef1f4dfa0b5a696962bc5af10e53690fa89eb95cda6559701558dc5d348de977bf01acda33d1a449bbfbde9b79333bd36774cff2088d51c89287928acdb73b1ea216a20a2770fb9417867546a69bf3d38bc542f094d9bf2f92e36360b04a257156a4b42d79290895e3a5df49042f0b2c386f43a0b661b675d33047fab0a70f7a030b7492a6f18ce5f7a0be55aa90e36e7797bb93709ea414174c7608cf5eefbb8f46b710fc8e1225bbfb29bb9045763f4f7a92728215e3f9f1d20703a5a4624533cc52b0f0a68cc2effba13b0c679d04c88f8c504c082f7355d9821084e7314b4a514745e36754db7cf703f9f6cc9e06da743e99d9fed43ef09797076b9c5531d6872dad77a861a9ed2e5ada1aca8b594a572c5a57c86a55dc6be7defc121030738b25956bedfaa7edd9da3ed971b5a5ebda7ea01d9c1c6a3fbcf972a19ddeec71c07044a562796d37c0614a2bab2f1d753ebe6325c00a7236e06ad833b13eea59611c0e493cea1f85718f86e1281c1ee17ed823d6800ea29062d0a92a7aadc239cfcd501ff60d4bd7e3a11e467df368301ac5fd616c5a94d2380e07448f621262b46da127c1143d63b2e092356d45d79e13d8abc05bbad34960d765c4b84cd55963ae2ae2bd4f054502e993bab615ca3864aadec87103db9b4c03e7ca6ec66246134c36fe030c468c5349818d05cea8a2e29247d034b498fb4ee0ccddc90c14f55b2f760c89c67f9edf04c1a6a8bbacea6f34f1bcc90d68b01078f31f063ecc01da6edfa5bbc26959536a7e7d6ae23f3600d2a196b793b17732d1f6ef163e2d04dbd0e442bf96b677839a2b8fc654d09c7c3d0540ae812f977ab761c0851d833452c119668ec82a",
      "0911b4993d96d5e65fd47d4b37eabf048585fa801996b96b7215a38a48339aab978a9a0dabdb5641a57c25010823e33aee0f40ff01d047e53ae1040000",
    ],
    [
      "ETag",
      "wnp29DcCyFBJPProliEXJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff6d905f6f823014c5bfcbdd2b287f8c0a890fbae07423ba31795a8ca978612850d6168d317ef7ddb2c5f9b03eb4f7f6fe4e7a4e2f70c8ab1df8b0cdb3af06c5f92143f5a68b086553284947cd2b8960002a9611399dc5ae3d1e9ee3e0f9e03956285fbacbee69342242269f5832f02f90e658ec24f81f17a858892463256f2a45903ad7ba9f86cbf18ada92ef74bb88c3703c0903b81a37c966531ffe04f3c52a780aa2ff24ebab017bbe8d3045815582da412df81e1335d7e1242beb024dc91b91a084166e0799e04dcd04e726dd984edfb4fb4e7f680f2cbb67f53c020b9e3095f38ad8f89dbc81e28a15113f51367008106d4931d3763fd2b5d77107defd6a331d5b81b67acfda56c71ddee6b69eaf7f1f999c15ca57c1c9b1446dd675ac1feb8f5cc751145389060d4818fdfb2c57e0a7ac9078fd069af9e198d5010000",
    ],
    [
      "ETag",
      "FHU31A8yUEJk920LsK/O/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fe9b31a042fedde409c1604260e4878696a29a1a0b5b1558465ff3eb34f38e70750c6b8d6c4dc3a2ec10718a88d666c162ae86d5cb1b630a45fb77619edb5797a8bb84ab2a6a865f228f73292d6d30d71d88aac72dcacf45d7f98ceeb6f96f464b46d9c72b38e25519542e7044b09eb90c283a98ad34657a2bfe86b106ee778977fe6450c2324e8eb0aa33620e339a5e9b4b0bbcb3acd1f67a62ee3d15581bf624ed39d8408c8001b8c78b83d981ed7f5d22f7746069de3b1483a3ae9f3fdea9aa2786ceb238b9b64d112cb615143fb299800fe52e2ce35116faeb3446802feedc40c8abf033c4eeffc0e7eff003b91c07a1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-27-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6fda3014fd2b91f75a20849400125a19841509c21642ab699a223bb9494d439cc60e6d57f1df77e394ae55a5f629b6ef39f79cfb912772cbf3988c08e3e95d05e5e3979d60e48c80a229beeebec17cee3e983baae6b77f53e0feac7cb81f8f11c16b96a4fb228396145519811c6d37edb41455414b215a98a86539ad6edfea0fba8ed9b54d7b883c0959b2e4f92db26f942ae4a8d33969b75321d20c68c1653b12fb97f7cec1ea14a5d841a464e7ad64075564e763d1af9988a8e2221f6f3768a0925086b0a73c430bff9931bb789bbacde9be9d22f8c023a05124aa5cd5b6304524f284a755a9b392d113d1365f1dc8c65dbad3c0884456edf330a77b383362aa68a81e0b30e6fe7a652cbcf9da5f4d82c5da0b37d34b7735694fd7cbedcadb18d797aeef1a8ab20c34d7181b17fae6e105f563908ae75a3da89f6be5e7062dde8fa526a0b48426183a669f7607e69025cc899241ef9c2526303660ce39ed31331ada60c70c28f2b4a866d15ce40e8dfb2cb6baa1d9b76868d3de301cf4e3384c6c873166c576d71990e319b92fb98219978590bce910b9f617811b06fed69b4e02579790d02a53b3c6585dc06b8f0a0b44d007351deb2817a854b77be105ae3f99068b2bb799f012521a3d6eee70c609cd24209a96d83c05e54ac4d830e24d56ee0cc17a623f4e414946bf9f48ddf3dac5ab96bfd0031c606d57e92fd904fec2fbaeed9c105734ab34e4d01c4881966fb036747dfc83485cd2260bf9b975fd5fa479f2218112f2e8f3692258073efdd74e8b8f585c7d94910aefb83b91ac45a2129a1de2badc13db36ad738b6870a9dec57a03f3d4b53a479d11f690abe78a9ac5c7421bb14abe803088e3f774b78eff003bbbdf2378040000",
    ],
    [
      "ETag",
      "jBeFFEx0jatFkzgeiRDrxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53",
      "82",
      "40",
      "10",
      "c6",
      "ff97ed1567c02134667c40b3c2d412f1a9719c1316c580c3bb23c71cfff7f6c8aca966ea057697df1edff7c1019ed322061796e96a5ba1d85fac504d7411a0ac3225e956f2422218808aad88dcf9cbb5fd9a24e6b81758c56cd0bcdf0e06934e870819ad3167e01e2049318b25b84f0728588eb416f1acca8b45dd19a0f6a51e4ec3c01fdf529ff358f7e3d970e875877d381ae7c59829b6a8f97faccd8f066cf832c0040516116a2da5e01b8c94af6d4a9697193624af4484126ab87eb012bc2a99e0bc419346b3d5b09ca6d3b65aa6659bf61581198f984a7941ec6c4afa4071c5b280efc825380488ba24c3497d7da1711ad74674e98f43c7aef57d05485a9266b8f81b24bd6b469fe1033b45f09d6339af0a75a66e860fde6fc751a69f475d7b61ff072115257546427fd49f86dee85173f393f7ee5ea17c149c8294a833b44cbb7dd972ccf7587b5c474def7195a8d08088d1df71972a701396493cbe01e7d9b0427b020000",
    ],
    [
      "ETag",
      "wIbh4zff0NCR1nUJ2KqJJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85547f6fda3010fd2a91f74f2b517e8424244855c7da6c8b46030ba155354de0844bea12e2d4763ab18aefbe4b52dab24aad8404e77befdebbf39947b266f98a0c49c4d2fb12c4f6d31d8f488b80a2299ef275f8c39ce67f2f2634f0d2b56728713b1d9d9e2282552c493745062792972206399ccfdaa9e0654105e72758e844b74f7a966ed9bd41b767740d077912b264ccf235b26f952ae4b0d3d96bb753ced30c68c1643be69be7f3ce83de2904bf8358c9cea164075564e77dd1b38cc754319e9fce6768a0942016b0a12c430b2fcc55f4f9b0749bd14d3b45f0038b81c6312f7355d9c21231cf139696a2ae4a868fa4b6f9ea0799b963f73cd42e3dff684937157579ac51a9ed8396b6c48e1296c182ad965566b128d6dad760728919d4bfa512e452bbfeee06ae7608f67c6deefbee2cd48ece8eb56fc1643ed5bedc1c60d0e30aa46279ed30a4510695bba7217a6fafae2250859a4d7231e85ab467779d2889067162f7cd28e94214d9d1c0a4fda81b3b0618ab0828f25455bd66d19ce796e998a69e98fd3ee840bbc8336dc7b64137fba6654586e35860c48e49762df2473005174c165cb26692e43af04277110673ff7c14ba751b092d3375d198ab9a78ed536193087aa7af5d95651c95aa6bf1fcd00d46e7a177e5369b308694c6dbd93dee4242330988a6826e4081b8e42b1c1a994e665ee84dfcd11819f5f54ef7084986bf1e5f08e1b6a8a7acea6f320a82d10d72a81074fb5f0e7d5806d9ed5ec95dd1acac2135be8e9afa0f4d82f4b09797483f882cb2fbbdc34f8be00368b4c8cfb91bdc90e628800404e4f1c75b80e03af1e13bde3f2ac4e2b34219a930c69d8b6525120b68768f6d6af34f6ca3d71bd4ff028a0af526d7d7f5fd90ab1a5545d840ae9e3a6a1e553db62a55ca67102671657ccfff86d97f05090b4cd4040000",
    ],
    [
      "ETag",
      "okTK5PnzDOaRIgkI4trhPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff6d905f6f823014c5bfcbdd2b1860061d890fe8d866429c324db62cc654bc3014686d8b0b317ef7ddb2c5ed612fedfdf33bcd393dc3a1a87710c0b6c88f0dcaf62647bd304582aa29b5a24bf05a2158809ae544ce435dbffa93fbe34c446d1c7efa8bf0adcd47232254fa811583e00c5981e54e41f07e869a55483256f1a6d604e95698fe217e0e97d4567c67dad92a8ec3711cc1c5ba4a361b71f8154c67cbe8314afe93ac2f16ecf936c10c25d6291a0742f23da67a6ac2295689126dc51b99a2820eee16b9e48d6092739b26b637b45ddff387eec071fb4eff8ec092a74c17bc2676f542de4073cdca847f5236f008905d4931b3ee3cd1d8e90d865d8c53c718777fd76eafef5dd7ae59af7f9e1db71ad55c72f2a8d0d8bbf59c6fb3136e02680aa6658316a48c7efaa9d01064ac5478f9021ac013d2c7010000",
    ],
    [
      "ETag",
      "PAtnX6CDqNpEyLAw6QAYyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb64ad0e4210d29da142c016108d7c360cd5483128906825edf4ee757a84f77e4075383029cb5bc7d915bc0055e9687698ad7b1b3bcb5aa78dbb2259aa7d8e792861b2690da1b688eb09645ed41583624dda3ab14c54320f16d920ddfb89db8fe3e3180dbe9ac3a9b50983333662c2631ebd521e885d7d8aba51d387c8db3bf9e24a6a1b8a875df04a997b0bafc39efb55676432b85c4890a5c5b6d44e6f1a2cb2554e1c37d497d3ae27ee2df2cecdbda6b4c31fdb24e5317aff4229ed691bb2854bb985e7d9c6ab95591ad6cef283ef14de050213c0c6be114c96cd936b98084dc0bfbdbca99e3d0330ab0413e0f70f7a2192f61a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-29-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b4fdb3014fd2b91f795366d481fa9548daa8411a94d479ac2a6698a6cf72618d238c40ea842fdefbb71280321c1a7d8bee7dc73ee23cfe45e145b32214c640f3554fb6f77929113029a66f8eaebfbe2975bcc822c48ebc8b3d9becafcabe91411a26129ba2b73e82859571cd464b3ee6695ac4b5a49d9c1441dc7ebf487ce70dc1ff5fa6ecff590a7204f17a2b847f6add6a59ad8f651bb9b4999e5404ba1ba5cee5edfed47c72e2b79075c2bfbbda48d2acafe5cf47b2e39d54216d3cd1a0dd40aaa047654e468e13f73cbcedea7ee0abaeb66087e141c28e7b22e74630b537059a422ab2b93954c9e89b1f9e640d6fec29fc7169779bd2b9282eee0c4da524d13bd2fc1ba88564b2b082f56d1721607ab3059cf2ffde5ac3b5f2d36cb706ddd5cfa916f69ca72305c6b6a9d995b8817d4df82d2a230ea71f3dc28bf3428f838968680d20ada6032ea0d697fdcf358ca463c1d9f0e58da03c6c66c34a0a7acc73d17dc2d038a3c236a58b49085ebf0fe70ccbda4cfd23471291d251e633c613de7743480d1d045d2e1843c5542c3b950a554a2ed10b98982d84fe26813ce67b16f4a48699debf3d65853c05b8f1a0b44d027351d9aa890a8d4b43b08633f9acde3e0da6f27bc808cf2fdfa01679cd25c01a26985cdd3502de5161b46c2d9d23f47b099d8cf635091c99f67d2f4bc71f1a6e5aff41807d8d8d5e64bd67114843f8c9d23e29ae6b5813cb60752a2e55bac0d5d1ffe221297b4cd42ae367ef49bb44f11a45041c1bf9e26824de0cb7fedb8f888c5d54719a5f18ebbc35523c22b68774898728f6cd7715c871870a53fc4dc41ffd8b5264793117650e8978adac5c7425bb15abd823088e30f4db70eff001cca3a4978040000",
    ],
    [
      "ETag",
      "EtknX4nAIgIfuR9/byrgEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0b895a8a4ae205b65a4dfc2b6262d318b3c2805860e9ee52638cefde596a6dd336696f6066f86639e7c0119e933c04073649fc52a2385cc5a81e74e1a12c5325e956f05c2218808ac544e6d347af9f2cddf9402cb7d664138fc3ebf1bed32142065bcc18384788124c4309ced311729621ad053c2db37c5d7506a843a18773df1b4eeea9cf78a8fbc9623472bba31e9c8ccb62c8145b57fc3fd6562703767ce3618402f300b59642f01d066aa86d4a9615299a9297224009155c3d88052f0b263837696236da66dd6ed8ad7ab356b76a569bc094074c253c277631277da0b862a9c7f7e4126c02445592e1a8babed238092b23ba1c4e7cdbaaf47d05485a94a4b8fe1b24bd5b469fe1033b47f09d63192f7375a1faa3a9fbdb7194e9e75177aedffb414845495d107f38eecd7d773cd3dceaecbd7b502867825390127586f59ad5ba69dab5f7586fb98e9adee32851a20101a3bf6390287022964a3cbd0164bb25037b020000",
    ],
    [
      "ETag",
      "nOYRFiXASHrXh4NbgMd3Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85537f4fdb3010fd2a91f70f48fd95364dd34a887590b16c2585348555d3d4dae925b82471881da60af5bbef9250a0436252a5d4bef7eebd3bdf3d917b9eaec988301e3d14906f3f6d04230d028a46781b8a7b66fdf8ae58b6e92fb60fca32e9465c9f9c2082972c49932c86a614451e801ccd67ad2817454673219a98a8d9eb3475b36b5afaa0a31b1d63883c097138e1e93db2ef94cae4a8ddde6bb72221a21868c6652b10c9cb7dfbb1dbce72b18140c9f6a1641b5564fb63d1d358045471919ecc6768a090902f21a13c460bafcc35fb7c98bac569d28a10fcc803a041208a5495b6304520d29047455e6525a32752d97cf387ccec897de66b97e39f472b9a94d4d5b146a5b63f34b4155614f218967cbd2a23cb6576af7df5a6971841fd3b2a41aeb4db6fb6676b8760c7d5e6ae6bcf7cede8f458bbf0a6f32bedcbe200831ed720154f2b873e653194ee9e9be8bc7fba9240156ad6c1e5a06352ddea0c59c8064168f5fa2cec0063161bf4698f7582a101c69a01459e2ab3572c9a8a945934ec33d0fb7adfb4c27eb81e86c3810181ae83d1350cdde8f77ae6d018905d83fcc9b982732e332179dd4972eb39bebdf4bdb97b36f6edaa8c9016b13aafcd9545bcf5a9b048047d50d7ae8c72814ae5b338ae6f7be333dfb9b1eb4998404483edec016721a4b10444d39c26a020bf146b6c1ab99ace1cdf99bae30932aae7bdda232419fd7a7a25f8dbaceab2aabe64ec79e30572689ed3ed3f31f4611a64b77b237743e3a28254f8ea54e77fac0344c75a5e4fdd83934976bf77f86b105c805a8b5ccf6d6f41ea2b0f42c8210dfe3f0508ae02ffdde3fd522116d70a65a4c233ce5c204b9120877af67852997f661b3de4930a9cab77b19e3ed837b9cc5166840452f55c51bd5455dbca50215f4018c491711df702a37f019844e678d4040000",
    ],
    [
      "ETag",
      "fokb8KJtbpj5Yyqt86ajoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff6d905b4fc2401085ffcbf8da622f048184073045491ac0020fc610b2b4d35a683b75778b2184ffee6c35e8832fbb73f9cee69cbdc031af1218c23ecf3e1a94e7bb0cf58b2922544da1155f35550ac102d42263f2350954d25fac26c980b2e9f17e3958162fd968c4848adfb11430bc409a63912818be5da01225b24c94d4549a217dae4d3f0d17e335b72525a69d6fc2703c0903b85a37c96e571f7f05b3f93a780aa2ff24dbab0507da4798a2c42a46e3a09674c058cf4c3825caba405b51236354d0c2ed2293d4d44212d93cb17dc7767b5eafef3e386ed7e90e182c28163aa78ad9cd8abd81262d8a883e391b780cc8b6e498697b9e78ec77dc6e1be3d432c6dddfb5d7f1fcdbda35ebedcfb393b346b594c41e151a7bbee77c9b7d24134073302d1bb42016fcd3cfb986612a0a85d72f0b0fe7f4c7010000",
    ],
    [
      "ETag",
      "YdEsd8OSBd9ogFk/P9PlQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c98e82300000d07fe9590d281d656e501c084b8aa86c1702a51415d96533f3ef63e613de7b839810da75515f3d6809bec11c6fc50dd918f54146520e0fa7ad83172620d9da219599bbb1cff9c14a0ae8e77bf2b4dd3155b4a80b922db6ef82ac944b33f138235e3dfef84fbb5817dc7516ad69a818e3739c220ec68169d8ac4faf6773ad32559f03867a237d78fa52cdcd409cb6929ca08a30545c4d21f8eabd9ae494422b484203738b30d5658406ffe23447ee7ece333929f6666cabe65a9772fd0b4f1039ce25ac9bf0a8655326f524e02fdaf8125d3a8015a0537d6b6917dd3edc1d14c515f8b747fd5cd34f804ce396b6e0f70fc5f4b55d1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-31-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fa34014fd2b64f6ab7dd0d2074d9ab55b716dd25217a866b3d99061b8e02830c80c6a63fadff732585763a29f98997bce3de73e782677bc88c98c443cbdafa1da7fbb15113921a0688aaff5f9fee9f2472ca74fee60e200a57d77281ee77344f08625695e66d091a2ae18c8d9ceefa695a84b5a09d1c1449da1d931c783f1d49cf44dab6fd9c89390256b5edc21fb46a952ce7abda376371522cd80965c7699c85fdf7b0f835e59895b604af6de4bf65045f63e17fd9e09461517c57ce7a3815a4215424e798616fe33e3e8f47dea2ea7793745f0036740191375a11a5b98828922e1695de9ac64f64cb4cd3707e23b6b6719184c64755e8405cde1c488a9a2a1da97609c7bdb8db172cfb7de6611acb66ee82f2f9ccda2bbdcae771bd737ae2f1ccf31148d32d05c636e9cea9b8b17d48f412a5e68f5a0796e945f1ab4fa38968680d212da6038e98fa939eddb51124d58321d8ea2a40f51348d26233a8cfaccb6c08a23a0c8d3a29a450b514ccdf1d41a457198d8561c5a91658794c576180fe89826963db14c208713f2587105675c9642f2b643e4da5b054e18783b77b9081c5d4242eb4c9db5c69a02de7a545820823ea9e9d044b940a5a6dd2b3770bcc532585d39ed84d79052b6f7ef71c609cd24209a56d83c05d546c4d830e22e36ce1982f5c42e8f4149667f9e49d3f3c6c59b96bfd2031c606357e92ff1036fe5fed4768e882b9ad51af2d01e4889966fb036747df88b485cd2360bf9b573bcdfa47df220810a0af6f53411ac035ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b645b96391e110daed487d8c0b68f5d6b723419218742bd54d42e3e16da8ad5f21584411cbfabbb75f807aa26a6fe78040000",
    ],
    [
      "ETag",
      "uFyxPBds8xN27Eeaa0N3ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "cb",
      "782d912a166dc20114b0092042f1a0216469a7506c3b75772b6908ffddd98a68d4442fedccf49bed7bafddc1739c85e0c2325ebd1428cb9315ea7b534c501589567ccb29530816a0162b26f54cd1238a72ec2c7b33efa1d71fcad3d1b6d56242056b4c05b83b88624c4205eed30e329122af05941469b6a83a0b74999be1d49f78a33ef72985a61fcd06837667d085bd755c0c85168b8affc7da7c6fc18696138c506216a0d1924bda60a03d635389344fb0a6a890012aa8e0eac14a52910b4954e349eddcaed9ce99736937eb76a3deb86230a140e89832666753d6079ab44826b46597e03020ab920d47d5f595c771581931a537f29d46a5ef2bc0d2a238c1c5df20eb5d0bfe0c1fd82182ef9c48a9c8f491ea0deedabf1dc7997e1e75d3f6bb3f08a539a923e27bc3eed46f0fc7869b1fbc774a8d6a2c8983546832b4eb8dcb8ba6537f8ff59a4cd4fc1e57cb022d0804ff1db7b106371289c2fd1b850244ea7b020000",
    ],
    [
      "ETag",
      "tUsoZeayP6bFUIVFGMr/Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8554fd6f9b3010fd5790f74b2be58324242491aa2e4b598796928c9056d53425c61cc42d60824daba8caffbe03fa954e5a2524b0efbd7befec3b9ec83d4f0332263e8f7605e4fb2f77c2270d028a46b8bbbbbbdc59ba3bdfde4f92c94fb6308c62eb3e9e9d2182972c49932c86a61445ce408e57cb56948b22a3b9104d4cd4ec759b9d417730ec987ac7d08d11f224c4e18ca7f7c8de2a95c971bbfda2dd8a848862a019972d2692d7fdf643b79de5e20e9892ed63c936aac8f6ff45cf63c1a8e2223d5b2dd14021215f4342798c16de9881fff538758bd3a41521f88133a08c892255a52d4cc1441af2a8c8abac64fc442a9bef3ec8d29a59534f9bce578e77b209a882cda946a5567f36b40dd613f218d63cd894fbeb7576af7d77e7571841f52d952037dacd0fcbb5b463b0ed682bc7b1969e76727eaa5dbaf3d542fb767b8441870148c5d3ca9f47fd184a6fcf4768ff7b7125812ad4ac836b531fd0ce501ff9a16fb270d8ebfba10ebe3ff4cd3eedf93a1b1960043e50e4a9327bc5a2a948fdde2034983eea1b0140b73b64a6ee9b609a6110f4d990f6190cfb3db31b9243833ce65cc105979990bc3e4772e3da9eb5f6dc95339d78565546488b585dd4e6ca22defb54582482fe53d7a18c72814ae5a5d88e67b993a9675f5b751fcc20a26cbfdc612784349680689ad30414e45722c043238bf9d2f6ecb9339921a3badcc50b4292f1efa73782b7cfaa5356d59b4c5c77728b1c9ae774ff21863e0606391cdec95dd3b8a82015be5ad5f91fea00e9602d6fabeed16a400e7f0ef83408b67fad457ead2cf796d45b2e849043ca3eef020457814fa7f865a4108b43853252e11a7b8ec95284e550f71e4f2af3cf6cc3188daa7f80a2b9fa18eb77aaccafa35466840452f55c513d52d5b195a142be8230882de3d8ce2546ff027993cf56d2040000",
    ],
    [
      "ETag",
      "qjGqE0ROhkAmAKcP44uhRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d50c16e824010fd97e9151240ab95c4835a62498c512abd34c6ac30501418babbd810e3bf779636a6c75e7667de7b33796fae702eea147c3816f9678bb27bc8516f4d11a16a4badf86ba8560816a016392bb7e35dd82ea3d938dcd1227b7eebf2c926cea75356a8e4032b01fe15b202cb5481ff7e855a54c863a9d06689ee1ad385eb5db00c22062a4a0db08e57abd97c15c0cdba8f1c0ecdf95f23fb9b05273a4698a1c43a41e3a09174c24487269c125553a2ada895092ae8c53d914b6a1b21896c46ec8167bb236ff4e48e1d77e80c272c2c2911baa09ab5f12b7b034d5a94117d7136f05820fb926366fd7b61f8b1cf70e905c6da5f6e74e75cc3ed7f17ce3b8d6a2389dd2934c6069ef3637341c63a9fced7b2450b12c1377e2934f8992815debe010aeac425c1010000",
    ],
    [
      "ETag",
      "Q7TIuGRA7IToCfDVyg9PUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dd0cb7282301400d07fc9da3822f248770982c843a5c676ec8641bc2182230854889dfe7b9d7ec2393f28cb73e8bab4af2bb8a137a4b23999e6d3b0b199438b01e8ed1e50134723d7f87be20ec76d02a55c96c083d85d278750ee9dab7c624ffacddc330875f7a35e4457f9bdd2a33be34e67cf747fe5d4dbb122e4b8d1f496537fb51671f121a8d63ecc4e85b731abd49a5905b6ce8d6022e10b6fde0463ea1fa32da61b2b3ad97c60415f5e76713de4e6acc6577d900afa5090cfa05a2ccb3394e48155b4c3466e9b2779f018f51f560eb511bbd54e2891685f369a20189b4b0b5d7a797175839009fab7a7bd6ae015c0206ba145bf7fbf4b26be1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-33-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b64f6d5b660a1ad4d9ab5a9b8125bea52aad96c3664182e380a0c3283a631fdef5e06eb6a4cf48999b9e7dc73ee07cfe49e9709999298670f0dd4bb1f772226470414cdf0f572bebc4f58ceac271a78579785eb3bbbf5d36c8608deb2242daa1c7a5234350339dd6efa592d9a8ad642f430516f38ec59a3e3d1c41a9b966dda27c89390a74b5ede23fb56a94a4e078383763f1322cb81565cf69928dede078fc783aa1677c0941c7c941ca08a1c7c2dfa33178c2a2ecad97683061a09750405e5395af8cf4ce2d38fa9fb9c16fd0cc18f9c01654c34a56a6d610a26ca94674dadb392e933d136df1dc8c65dba8bd060226f8a322a6901474642158dd4ae02e33c58af0ccf3f5f07ab79e8adfd68b3b87057f3fe62bddcaefc8d7173e106aea1689c83e61a33e354df7cbca07e0252f152ab87ed73abfcda20eff3585a024a4be882d1d81c516b629ec4693c66e964e8c4a909713c89c70e1dc6263bb1c14e62a0c8d3a29a454b512614a86d5a2c7286a34964d3c48a62244523d331633b76c0b152b23f224f355770c6652524ef3a446e022f74a330d8fa8b79e8ea1252dae4eaac33d616f0dea3c20211f4454dfb36ca052ab5edf6fcd00de68bd0bb76bb092f21a36cb779c019a7349780685a63f314d42b9160c3883f5fb96708d613bb3a042599fe7d266dcf5b17ef5afe460f7180ad5da5bf6413069eff4bdb3920ae69de68c8637720155abec5dad0f5fe1f227149bb2ce4f7d60dfe90ee2980146a28d9f7d344b00e7cfbaf1d161fb1b8fa282315de7177986c45580ddd0e715dee816d8fcce311d1e05a7d8a598e7de85a9ba3cd080594eab5a26ef1b1d04eac916f200ce2f87dddadfd0b8eac1c5678040000",
    ],
    [
      "ETag",
      "KALkdclc1waRIPKmEN5yOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d925b4f83401085ffcbf84a136a2b55923eb45a2bf6a2521a138d69b63020bab0b817b569fadf9dc55a8d9ae80bcc0cdf2ce71c58c3635e26e0c332cf9e0ccad55e86faca16212ac3b5a25b254a85e0006a96116946091f7947c3f357fedabf19ae8c5b65d759b74b848aefb160e0af21cd91270afcdb3594ac405a8b053745b9a83b07f4aab2c3591406d321f585486c3f9d8fc7bdfe78001b67b79830cd1635ff8fb5bb8d030f6219628a12cb18ad964a8a078c75606d2a56541c1b4a1819a3821aae1f6452988a49211a3469b45a8da6b7ef1d363b6eb3edb68f08e422663a1725b1f319e9032d34e3a1782197e01120eb920ca7f5f599c679521bb165308dbc76adef2b40d2d29ce3e26f90f4de33fa0c1fd83682ef1c2b8429f58e3a1d5ff47e3b8e32fd3ceaa4170d7e104a53523b240a268359d49b5c5aee6eebbdbfd2a82ea5a02015da0c9b6efbf0a0e3b9efb11e0b1b35bdc7d7d2a00331a3bfe32cd7e0a78c2bdcbc018789a5b27b020000",
    ],
    [
      "ETag",
      "uKdlK69GJxlxBZGyu0pgWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85537f4fa34010fd2a64ef1f4dfa83165a4a13e3f594f3485aea51aa672e9776810157814576517ba6dffd06b06abd4413127677de9bf76676f689dcb22c2463e2b3f8ae8462f3e586fba44540d2184f8d99f978e3ab9a7901a9f3ebc17bd4f3bff07074840856b1044df304da8297450062bc5c74e28297392d386f63a2b6a6b77bc3fe70d433d49eaeea26f20424d19465b7c8be963217e36e77a7dd89398f13a039139d80a72fe7ddfb7e372ff80d045274f725bba822ba1f8b1e273ca092f1ec68b94003a58062052965095a786586fed7fdd41d46d34e8ce07b16000d025e66b2b28529029e452c2e8b3a2b193f91dae69b05595853ebc45366b673b00ea984f5a14285d22c5bca1aab8958022b16aeabf3d52abf55bebbf3194650fb9a0a106be5f287e55aca3ed87694a5e3580b4f39383e54cedcf9f25cf976b587417f2108c9b2da9d47fd042a67cf0db4ffbfb68a40256a36c195a10e696fa49a7ee41b4134d2067ea482ef8f7c6340355f0d4c1df4d0078a3c5965af5934e3d9c0d4061135c0ef45261d189a36300c550f066018615f33a3c1c834c13474b26d91878249386522e782355d2497aeed592bcf5d3a2713cfaacb886899c8d3c65c55c45b9f128b44d007756dab28e3a8545d89ed78963b39f1ec0bab998229c434d82cee700e229a0840342d680a128a190fb169e47cbeb03d7bee4ca6c8a8aff67c871064fcfbe995e06df2bacbb2fe9389eb4eae90438b826edec5d0c7105bb07d23774193b286d4f87ad7e4bf6f02a487b5bceefa7bbb21d9fed9e2d72238fc8d16f9b9b4dc2bd21cb910410159f0f91420b80e7cfa86770f0ab1f8a4504648dce3cc05a212090a68668fa5b5f967b63e1cf50d52830bf93e86c947bb265739aa8c9042269f2b6a1e54ddb62a548a17100671641cdb39c3e83f137d197fd0040000",
    ],
    [
      "ETag",
      "7M9xjb039VemNXwTx4pzew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "4f",
      "c2301086ffcbf9754bb6415097f001641184109943130d2165bbcdc1b69b6d2710c27ff73a0d7e2169dabbeb73bdf7ed09767995800f9b3cfb6a501e6f32d40b1384a89a422b3e6aaa148205a845c6e4d376eabe576f7146a3a89ed2e470781d2ff6fd3e132afec452807f8234c72251e07f9ca01225725b22b479441f6b938d0651c0594989c9e6cbd96c309c0570b62efc7a5deffef9c93c0a1e83f05acbea6cc1963621a628b18ad18caf256d31d613e34c89b22ed056d4c81815b4707b91496a6a21896caed89daeedf6bcde9d7bebb85da77bcf6041b1d03955cc2e5f581b68d2a20869cfc6c06340b6217b4cdbfddb941dcfb11d8f576ba62db51aaf42ee05720db4fa1b313c6a54cf9258af4223b5e339bfc21fc898e19ff4b56cd08258f0978f730d7e2a0a85e71f41736144d0010000",
    ],
    [
      "ETag",
      "JjK1ZnWcgoDTpKoIxxVHQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dd04b7282300000d0bb642d4e27829aee04440502583050379980e1ab4009554ca777afd323bcf70358967121e8d835bc05efe0c9209a6773a75febc6a6ee9a73219dc2ee709877694fc2cabb1019e3b23ac664f2a2ad8c8200c1f164ab6eb56788af36f83646f49ba49dc84f972bc2ebc98d976a59403561d0cef27c5a22a887aaae6c3fdeac6c4f212ecdb4e49c4d7b7b3778e80b1d6b48287e94feade081db14d67d79be2a49d22e88a11952425f958bdd9dd6fefd71687dd7220d5993ea5260bb530e1a5f9969cc7cc5842472c428ad674cc46d433f831e8319e0535f0d5cd0eac55d6808cdc0bf9d8ecf9ebf0274ce063e80df3f1c96c8121a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-35-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc8fbda04d2900791a2354ae9ca9490869066d33421db18ea1430c5a65554e5bfef629aaedda4f613b6ef39f79cfbe019ddf32246134478fa50b3eaf0652f083a434ce1145ef9ce35aff737db1f878775fe5dad87c17ef7b49e4e01c11b96c47999b18e147545999c6c37ddb41275892b213a90a8d31f747ac3f3e1b837b27ab6653bc0932c4b16bcb807f69d52a59c98e649bb9b0a91660c975c76a9c85fdfcdc773b3acc49e5125cdf79226a848f363d1af99a05871514cb71b30504b56452cc73c030b7f9931b9789fbacb71de4d01fcc829c3948aba508d2d48414591f0b4ae7456347946dae69b03dab80b771e1a5464755e4405ced999116385237528997115ac9686e75fad82e52cf4567eb4995fbbcb5977be5a6c97fec6d85dbb816b284c32a6b9c6d4b8d0371f2ea01f33a978a1d5c3e6b9517e6990f7ff581a02484bd606a39135c4bdb1e590848c6832ee0f48623142c66434c07d6251c766764c18069e16d52c5c8802db048fe341121167701ed931c611eeb138b29d64447b0e71ac918d8e67e8a9e28a5d72590ac9db0ea15de0856e14065b7f3e0b5d5d4282eb4c5db6c69a02de7a545020803ea8e9d844b900a5a6dd9e1fbac16c1e7ab76e3be1054b313d6c1e60c609ce240334aea0798a554b1143c3903f5bba9700d613bb3905259afc7a464dcf1b176f5afe4a0f61808d5da5bf6813069eff4ddb39216e71566bc8637b402558be83dac0f5f137206149db2c68bd75839fa87d0a58c22a56d0cfa709601df8f45f3b2d3e6061f541462ab8c3ee50d988d08ab53bc475b927b63d1a0ffa48832bf56f6c6c59fd53d79a1c4d4696b342bd54d42e3e14da8ad5f215044118bfafbb75fc035b67241878040000",
    ],
    [
      "ETag",
      "iWE/HjPUXyqQmJtQ6RjWwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53",
      "82",
      "4010c6ff97ed15272d4463c607292a66c412b197c6714e5810038eee0ecb71fcdfdb23b3a69aa917d85d7e7b7cdf073b78caca186c5866e9738d627b92a29ae8224059e74ad2ade2a5443000154b891c9f3e98deab70fc62a36a5138e976e2fae96040848c565830b077906498c712ecc71d94ac405a8b785e17e5a2e90c50db4a0fa761e08d6fa82f78acfbf16c341a3a2317f6c67131668a2d1afe1f6bf3bd016bbe0c30418165845a4b25f81a23e5699b9215558e2dc96b11a184066e1ea482d715139cb768d23aefb63ad699d5eff4da1db36d5e1098f388a98c97c4cea6a40f14572c0ff80bb9048b00d194643869ae1b1a6771634497de38b4cc46df5780a425598e8bbf41d2bb62f4193eb04304df3956f0ba5447ea7a7437fced38caf4f3a8ab61e8fe20a4a2a48e48e8f9ee341cfaf79a9b1fbc3b5b85f25e700a52a2ceb0d336fbdd9ed57e8ff592eba8e93db612351a1031fa3b6e330576c27289fb3753dc86cd7b020000",
    ],
    [
      "ETag",
      "N/V4IxrBMmvturmBgyQEMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fe24010fd579abd5f3441fa412985c478a85589085a8a1f77b9c0763bc5d5d2adddad1762f8df6fda8a8a9768d2a4bb3befcd7b333bfb421e791a911e09f9e2a9807cf5e34184a44140d1059e0a9dadb2e4ecb07bae9fa763a57eb526b72757fbfb88e0254bd26596c09e1445ce40f6a693e6221745467321f630d15ecbd9331dcb71cd8e61da86dd459e84241ef2f411d9f74a65b2a7eb1bede64288450234e3b2c9c4f2ed5c7fb6f42c170fc094d4b725755491fad7a2078960547191ee4f2768a09090cf6049798216de9951f8733b7593d3657381e067ce8032268a5495b630051369cc17455e6525bd1752d9fcb020136fe81d05da45ff76671e5105f35d8d4aad5e36b4395613f304663c9a97e7b359f6a89df8e30b8ca0f63d9520e7dacd99e77bda367830d2a6a3913709b49d835dedd41f4f2fb5c3bb2d0cfa8b402a9e56ee021a26503a7b6de0e0ff6b2b0954a1661d9c750c879aaed10de3b0c362b7d50e6303c2d00d3b6dda0a0dd6b5c18e42a0c85365f68a4553ec89c9cca8d58d216cdb5da76d5b8e63bba61d196018961582c3c2c8a29643d60df237e70a8eb9cc84e47517c98d3f08bc59e04f4747fdc0abca886991a8e3da5c59c4479f0a8b44d01775adcb2817a8545ec96014787eff28185c7bf5140c6141d96af2847310d34402a2694e97a020bf1011368d5c8e278360301ef587c8a8aef6728390a4f7fbe59d10acb2aacbaafa93beeff7ef9043f39cae3ec5d0876393f5fa83dc354d8a0a52e1ab5d9dffb90e10136b79df595b3b6ce79f357e0d82c35f6b91aba9e7df91fac887187248d9f75380e02af0ed1bde3c28c4e2934219a9708f33c76429c272a8678f2f2bf3af6cdb755b1d528173f539d635dbeea6c9658e32232c2155af15d50faa6a5b192ae41b08833832a3c1e814a3ff00d8a53e8fd0",
      "040000",
    ],
    [
      "ETag",
      "o/cyplHB9K/KnOttZ3SXFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff6d90514fc23010c7bfcbf9e816b781204b78005d94b81099108d8690b2dd66615b67dba90be1bb7b6d0cbef0d2de5d7fd7fbffef007b5e6710c296179f2dcaeea240bd304182aa2db5a2ab11b5427000352b888ca2792f1b5e57ecedf52a7e9cfd5c2ace5f16e331112afdc08a4178809c63992908df0f50b30aa92d63da7ca2bbc6647793654459253293cd57713c99c6111c9d13bfd934fb7f7e365f46f75172ae657d746027b609e628b14ed18c6fa4d861aa67c699625553a2ab442b53546061fb5048d1364c0ae152c5ed0d5c7f100c6efca1e7f7bdfe88c052a44c735113bb7a266da085666522bec9180404481b92c7dc9e5fa6ec059eeb05ae3fb2666cc96a3c0705de09f20db4fe1b31ed34aa272948af4223b547a4157e2b8c19da64a8658b0ea48c56fec03584392b151e7f01fc93401ad0010000",
    ],
    [
      "ETag",
      "EEN3d75maZX/LKIx+siiWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ffedd44b7282300000d0bb642d0c084c4a7782080504ea50a16e180891ff37b1013bbd7b9dee7b03df21de374811c284247468700f5ec19a6e551ef1cef8a2e9bb3a3d659325dc3525ee0bc87012f8a231aa2cab57f2be72c14d1e9643bc0ac5d1744bce2975185ffc7d249ba674fd6ce28317668573e9a61912df36699f0d76e5da81c169e1ac40acebd7406bb7fe998943729ac29bdb3bfd5e72a49cd477a8c8992f5613b5d94724b4bb1debd0bd666735f3c2a40cad686e61ee9704e915971bb4110a8673e875bdb594b6e052793fe22f32bda1e518786114537345478b7f7a7afa1fd800bc8cd58c49523d3e901455dd80bf1c12ba8ef8318486d319cfe0e717fea905633b040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-37-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2b64f6d51668a1a54d9ab5a9b83669a94ba966b3d99061b8e02865901934aee97fdfcb605d8d893e3133f79c7bcefde099dcf132255392f0fcbe81fae9dbad48c8090145737c5d45d13c19ff2d1fabc9c53002f33cba4ef3f96c8608deb224dd5705f4a4686a0672badbf6f35a3415ad85e861a2de70dcb3478391678f2ddbb19c09f22414d98a9777c8be51aa9253d33c6af77321f20268c5659f89fdebbbf93030ab5adc0253d27c2f69a28a343f17fd5e08461517e56cb745038d843a863de5055af8cf4c93d3f7a9fb9ceefb39821f3803ca98684ad5dac2144c9419cf9b5a6725d367a26dbe3990adbff21791c144d1eccbb8a47b383152aa68ac9e2a30cec3cdda5806e79b703d8f969b20de2e2efcf5bcbfd8ac76eb606b5c5ff8a16f289a14a0b9c6cc38d5b7002fa89f8254bcd4ea51fbdc2abf3468f9712c2d01a52574c1786c8da8ed5993244bc62cf3866e925990245e3276e930b1d8c401274d80224f8b6a162db166b0a86b8f9cd81da56eec0c262c4e287563cfcb1cd71ea4d98479e470421e6baee08ccb4a48de75885c87cbc88fa370172ce691af4bc86853a8b3ce585bc05b8f0a0b44d027351dda2817a8d4b67b19447e385f44cb2bbf9bf00a72ca9eb6f738e38c1612104d6b6c9e827a2d526c1809e66bff0cc17a6297c7a024d3dfcfa4ed79ebe24dcb5fe9110eb0b5abf4976ca37019fcd0768e882b5a341af2d01d4885966fb036747df883485cd22e0bf9b9f3c35fa47b0a21831a4af6f53411ac035ffe6bc7c5472cae3eca488577dc1d265b115643b7435c977b64bb966dbb44836bf52136709d63d7da1c6d46d843a95e2aea161f0bedc41af90ac2208e3fd0dd3afc03b5959b33",
      "78040000",
    ],
    [
      "ETag",
      "LTTAb7znwp9H3Te/FTWdgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcb78a42445b160130ea0a8848208e5640859da69296cbb65772b6908ffddd98a68d4442fedccf49bed7baf3dc036c942706195c4bb02657911a37e36c51455c1b5a25b2e328560016a1613b9e5fbf678581b661e4f829d3d2fc2b296c69d0e112a5863cac03d4094200f15b82f07c8588ab416085ea4d9b2ea2cd0656e86337f3a183f509f8ad0f4e3b9e7757b5e1f8ed67931649a2d2bfe1f6b8ba3051bb19a628412b3008d965c8a0d067a606c2a96e61ceb4a14324005155c3d88a528722685a8d3a47ed5aa379c4ba7dd68d98da6ddbc21908b80e94464c4ce67a40fb4d08c4fc59e5c824380ac4a321c55d7571a276165c49483b1ef342b7d5f019216251c977f83a477cde8337c60a708be732c1545a6cfd4bdf7d4fded38caf4f3a8bbaedfff41284d499d117f30eacffcee6862b8c5c97bafd4a8265250900a4d860dbbd9be6e39f67bacb7c2444def71b52cd08280d1dff198687023c6151edf008a4beef77b020000",
    ],
    [
      "ETag",
      "klw8NK+KnLlicq0Uudy+mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85547f6f9b3010fd2ac8fba7d5f28b102089147559ca36a4946484b4aaa62931c6a46e01536c326555befbced0b48ddab512129cefbd7befec330fe88e65111aa2906dee4b5aec3eddf2103510957803ab72726759919cdf7efe9beba9671b93ede26a3c1a01822996c0699ed0a6e06541a8182e17ad4dc1cb1c179c37a150d3e83775ab6bf575bba3f73abd01f0044de229cbee807d23652e86edf641bbb5e17c93509c33d1223c7d5a6f6fbbedbce0b79448d13e966c838a68bf2f7a96708225e3d968b90003a5a0c58aa6982560e19919855f8e4bb7184e5b1b006f19a198105e6652d98212846731db944555150d1f5065f3c5075a385367126893d9d20b4ed63855e4f5a9868576081ada1a7a8a5942572c5aabcc6a95df69dffcd90564c0c10d1654acb5ab1f8eef68da5a8146da9936f6ceb563aaeb694bcf731681767276aa7df767cbb9f6f5fa08039e232a24cb2ac7010e13aadc3e6eaafbfa2815014b7050275776c7c27abf3308e3d02671df30c3b843c3b01fda2636c20e19f4682f0a29069e54d52b16ce786684383674a3af13c3b6ac18e3a8dbb54283843d53ef983da3dbb375621a36da37d09f82497ace44ce05ab77165df96ee0ac027fe94dc68153b511e33291e7b539d5c44b9f129a04d03b7ded5596715052c7e47a81e38f27817be9d49331a51b4c768b7b988d182782021a1738a59216173c824d43f3d9c20ddc99379e02a33aeef90121d0f0d7c33321d8e5d52ecbeaadb4ac5ea57f005ce2a4ac10dbfa03e926daef1bff2f31f6fdf135c8e2a2c0bbb7cbbf59bfc257516df1490f29b543d43d8a2cb4ffbd87a781e04ed55ae8e7d2f1af51bde4d3981634231f0f1280abc487bf86c33d052cdc5490111262185b22940829683dbe2cadcc3fb24ddd18f451052ee4ab9c69ea8773523554459ad24c3e7654dfd36adb54aa144f2048c2d479aef71db2ff00a3bc652a27050000",
    ],
    [
      "ETag",
      "tCk66dtPj+zp1mN73CvSWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d90514fc2301485ffcbf5754b98129c4b7810254a824427241ab39032eec6a0dbedda0eb290fd776e27f1d997f6f6f43be9393dc3a1a8b610c1a6c8eb06757b93a3fd70438ca691d6f0a6a832081ea01539936150d7792195dcd5cfcb63fb2df06bf9761a8f9930e90e4b01d119b202e5d640f473864a94c83651525359866cabdc79b6584e5fa6310b256d9db058cde78f93f9143aefcfb45eabc3bf2c49e7c19e363166a8b14ad165509af698da99ab6744a924fa861a9da2811eee2f724d8d129ac867c5bf0bfd60743b0a83fb41301c0c1f1894940a5b50c5ecea93b381252b644c276e070103ba1fb968d6afc75e761dae53d22557d3a4b568de35710283eef16138f88df2442e9ee5d85637e8412af8275f0b0b5126a4c1ee022bf9e1bfa7010000",
    ],
    [
      "ETag",
      "81qqgilplhqDTvyYaeXTMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dd04b7282300000d0bb642d0e1129d21d20340a6218b4c22a032148a002f233e8f4ee757a84f75e20a194f53d199a8ad5e013ccc94a5fd2a5db6e4ccb28bcb91c71ae69d91cf8fc5646658668f374c9e9b01be35a76c4aec9e005f2f49b08ff7cc361eeaeb7e48267718dfb7e4b90c78766bb77acb51457c2adb955743758270edcf8e3de75d153b6adae833480e6aad61f15d9c7d70085eb0fef40f113e136ca147b934ddecf493127c73f089ee4a13ec9674b1cef95a588e81862e98eb434a057cdfed252678a6c83266d39a1d020952aadd48240aad7c5c01f6001986879c77ac2df5c45d5f505f8b793616ed93bc06449c73af0fb07d0ae2b181a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-39-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3014fd2b91f7953ed2579a4ad5a84a806e6dca9214344d5364bb37c12c8d43ec7402d4ffbe1b8732d824f814dbf79c7bce7de489fc12f9964c0813e97d05e5c3a73bc9c809014d537cbdfaf238df0772d84dae1ebf5ef4aa59c106ce6c3a4584a8598aee8a0c5a4a56250735d984edb49455414b295b98a8d5775bf6a8371adb4ed71e74072ef21464c952e4bf907dab75a1269dce51bb9d4a9966400ba1da5cee5ede3bfb5ea728e51d70ad3a6f253ba8a23aef8b7ece24a75ac87cba09d140a5a08c6147458616fe32b7ecf46deab6a0bb768ae0bde040399755ae6b5b9882cb3c1169559aac64f2448ccd5707127a4b6f1e595c66d52e8f73ba83136b4b358df54301d679b05e590bff7c1dac66d162edc7e1fcd25bcddaf3f572b3f243ebe6d20b3c4b539681e15a53ebd4dc7cbca0fe169416b9518feae75af9b9418bffc75213505a41138c9dee88dae3aecb12e6f064dc1fb2a40b8c8d9933a47dd6e5ee00065b06147946d4b0682e7387392c19f5dd38b169120f46c063d663369ed8808db8ed8ec709399c90dfa5d07026542195683a446e8245e4c551b0f1e7b3c8332524b4caf45963ac2ee0b5478d0522e89d9a0e75544854aadbbdf0232f98cda3c5b5d74c780929e50fe13dce38a1990244d3129ba7a15cc92d368cf8b39577866033b1ab635091c98f2752f7bc76f1aae52ff4080758dbd5e64bc22858f817c6ce11714db3ca40f6cd811468f9166b43d7879f88c4256db2906f1b2ff84e9aa700122821e71f4f13c126f0e1bf765c7cc4e2eaa38cd278c7dde1aa16e125343b244cb947f6b0e73ae64fd5b4d4ffc6faf6b877ec5a9da3ce083bc8f57345cde263a18d58a55e4018c4f1fba65b873ffad0d99078040000",
    ],
    [
      "ETag",
      "PJzCvRo50fPzKG2uApb47A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92dd4e83401085df65bca549ab485b925e80456dfaa785a617a669b630505a607177d1344ddfdd59acd5a889dec0ccf0cd72ce8103ecd222021bd669f25ca1d85f24a81e75314359654ad2ade485443000154b88dc4e13c71dbad1a2f2fc8debeeb6657f31747a3d2264b8c19c817d8038c52c92603f1da06039d25ac8b32a2f56756780da977ae807b3c1e48efa9c47ba9fcc4723c71d797034ce8b11536c55f3ff585b1e0dd8f2f50c63145884a8b594826f3154036d53b2bcccb0217925429450c3f58344f0aa6482f3064d1a57dd46cbbab43aad76b36536cd2e81190f994a7941ecdc277da0b862d98cbf924bb00810754986e3fafa42e334aa8de87230092cb3d6f7152069719ae1ea6f90f46e187d860fec14c1778ee5bc2ad499ba1d4d9ddf8ea34c3f8fea3b81f783908a923a23c160ecf981337ed0dcf2e4dddd2b940f825390127586ada6d9b96e5bcdf7586fb88e9ade632b51a10121a3bfe33e5560c72c93787c031e1343277b020000",
    ],
    [
      "ETag",
      "jOgABKBdWuEShBBkjpDWKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85547f6fda3010fd2a91f74f2bf12381100212ea18a42d1b0d348456d53481631cea12e234769850c577dfc569dab26ead142939df7bf7ded9e73ca10d8b57a88b02b67ecc68bafff2c003544154e235ac6e86f6f7e8c1de9d5f063f9af27c9a58d665ebbad70304cb59026f93885605cf524245773eabad539e2538e5bc0a85aaa65e35ac86651b6ddd3075b3033c41a370cce20db0efa54c44b75e2fb56b6bced711c5091335c2b72febf55da39ea4fc811229eac792755011f58f45cf224eb0643ceecd67602013345dd02d6611587865ae82afc7a56b0c6f6b6b00ef18a198109ec532b70525088f43b6ce525515759f90b2f9e603cd9cb133f0b5c164eefa274bbccdc9cb530d0bad0c2ada127a0a5944176cb5cc338b45b2d1cebdc91564c0c13d16542cb5db4bc773b4d7a5a5d6d3ceb4be3bd48e0b8c5c6deebaceccd74ece4eb50b6f329f6adfee8e30e07c458564b1f2ede320a2b9e7e7ad1dbd3fd09c80258816c9455bb7b061eb9d200cda24b49bad20d46910d841bb859b814e3a26355701c5c0937975c5c2318f5756473748a343ed150902dc69da7acb6c62a3d936a9a5876d6c345a86111274a8a0df299374c844c2052bf617dd7a23df59f8dedc1df47d47b511e22c92c3c25cdec45b9f129a04d0077d1df22ce3a0941fd6c8f51daf3ff047374e311f63bac6643f7b840909712428a0718ab754d2f48aaf60d3d074321bf9a389db1f03431dfab44408d4fdf9f44af0f789da65a9de68e67b23f7421928113738ca1464577ca07e025ed1e150f97f99bee7f5ef401aa729deff9583762c33a7ff4342e15554d82c250d94ab9551e328b2d0e1d7019e0a82db5568a1ebb9e3dda162c9a3214d694c3e1f2600abc4a73f89f2c60216ee2cc80809318c2e11b908496931c26cabcc3fb35ba6de369002a7f25daed1d0cbb3ca6be415e996c6f2b9a3e2c6aa6dcb53997801411226cf55c776f803356ea65231050000",
    ],
    [
      "ETag",
      "kD8Jlj8vFHbK3tFPp66H5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90dd4ec2401085df65bc6d138a15b00917a20d9210225524d110b26da775a1edd4dd6d0d12de9dd96a8897deeccf39df6cced923ec65954200b1cc3f1b5487ab1ccdd21e22d44d61346f35551ac101342267722d67dff1b495af3729eefcf58317b56fb81c8f99d0c9079602822364128b5443f07e844a94c863a2a4a6320c99436defb3c54b380d23164a4aadb058cde77793790827e732b4ddd6fb7f8d6c4e0eec288e30438555823643ad68878999d97a5a947581aea64625a8a1833b2357d4d44211b9acb87ecff506fdc1c81bf63cbfe7df325850228ca48ad9d5336703434614117d713be833a0ba2317cdbab565f9baebd076808df6d7eb5f3ccf7a9bdf07270783fa4911a7d36883f9a3e14fcc7bb2d10d5732aa410712c1bffc280d049928349ece65f1342fc3010000",
    ],
    [
      "ETag",
      "WiIzbGviV5dej4WD1RvZeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dd04b7282300000d0bb64ad8e1215d25d02020a2308148a9b0c60e4138d7c15dae9ddebf408effd8024cb58d7d1fec199001f604a24b4c81656ad1015e763f25ddcd72eb79ca2b1a964c035ad3fa5953d0f7b683fd4741f4d4f7beb706c6fabd4340c3f6d729f0d526c85e6860e1985b238d65d7efebaf4779116e5cabcebf9e01f6ef5e915c7d540ce4123873236527c841865aa50d297a7f19020451ee0610c3831264b8bf4e5b312ded1dccf3d37df5db930083aab8d1247842bedab0c8addf526a073e95c7d13cdf1a9a99630d67159f4aa46c3c25a4f68d420980136d665cb3a5abeb97083d00cfcdb693fd5ec1d4058d2b216fcfe01c0ccf63f1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-41-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda2490405e52b446295d2335a403d26a9a2664cc85ba054cb1c91455f9efbb98a66b55a9fd84ed7bce3de73e78268fbc4cc89cc43c7b6aa03e7c7b10313923a06886af41b9cbeafd414e6665b3d917ee4d314a59b6582082b72c498b2a879e144dcd40ce77413fab4553d15a881e26ead956cf1a0fc7536b625ab669cf9027214faf79f988ec7ba52a391f0c4edafd4c882c075a71d967a2787d1fec8783aa160fc0941cbc971ca08a1c7c2efa3d178c2a2ecac52e40038d843a8282f21c2dfc6726f1f9fbd47d4e8b7e86e03d674019134da95a5b98828932e55953ebac64fe4cb4cd370712b8d7ee2a3498c89ba28c4a5ac0999150452375a8c0b8f4b71b63ed5d6efdcd325c6fbd28585db99b657fb5bdde6dbcc0b8bb727dd75034ce41738d8571ae6f1e5e503f01a978a9d5c3f6b9557e69d0fae3585a024a4be882d1c41c536b6acee2349eb0743a72e2d484389ec613878e6293cd6cb0931828f2b4a866d15294a3b16543eab028195a93c8b6533b9a26168d2630644e9cd8e9d8b4c9f18cfcadb9820b2e2b2179d72172e7af43370afd9db75a86ae2e21a54dae2e3a636d016f3d2a2c10419fd4746ca35ca052dbeeb517bafe7215ae6fdd6ec2d7905176089e70c629cd25209ad6d83c05f54624d830e22d37ee0582f5c46e4e4149e6bf9f49dbf3d6c59b96bfd2431c606b57e92f09427fedfdd0764e885b9a371ab2ef0ea442cbf7581bba3efe41242e699785fcdcb9fe2fd23df990420d25fb7a9a08d6812fffb5d3e22316571f65a4c23bee0e93ad08aba1db21aecb3db11dc71c3a44836bf521664d9d53d7da1c6d4628a0542f15758b8f8576628d7c056110c7efe96e1dff019400f74c78040000",
    ],
    [
      "ETag",
      "SnUgrvys79nuMvmEPm3fcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92416f82401085ffcbf48a09188a96a407acd69aa0b58ae9a131668501b10b8bbb4b1b63fcef9da5d6366d93f60233c337cb7b0f0ef09c9709f8b0ceb35d8d727f91a17e30c50c55cdb5a25b254a8560016a9611d9e3fdf630dc7bd92074c68b696f379d3c62767d4d848a375830f00f90e6c81305fed3014a5620adc582d745b96a3a0bf4be32c379341b4d86d4172231fd641186412f1cc0d13a2f264cb355c3ff636d79b4602bd6334c516219a3d15249b1c5588f8c4dc58a8a634b895ac6a8a0819b07991475c5a4102d9ab45ca7e5786dafeb746cc7b5dd2b02b98899ce4549ec624efa400bcdf84cbc924bf008904d4986d3e6fa42e33c698c987234893cb7d1f715206969ce71f537487a378c3ec307768ae03bc70a5197fa4cdd86f7c16fc751a69f47f58368f083509a923a23d1683c9847c1786ab8e5c97b6faf514da5a020159a0c1ddbed5e763cfb3dd61b61a2a6f7f85ad66841cce8efb8cb35f829e30a8f6f11adbd087b020000",
    ],
    [
      "ETag",
      "BlD2GLy6gEL1MUPBqPNWeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd2ac8fba795f203480249a4a84b13d631a5a423a455354d893186ba259862d32aaaf2dd7798a66dd6ad9590e07cefdd7b679f7942772c8bd010852cb92f69b1fd72cb43d44054e204561fe786fe283d624f7ee4dfedece674ca59918c468060154be04d9ed2a6e06541a8182e17ada4e0658e0bce9b50a8d9359b86655a7dc3d68daede1d004fd0349eb1ec0ed83752e662d86eefb55b09e7494a71ce448bf0cdcb7afbc16ce705bfa5448af6a1641b5444fb63d19394132c19cf46cb051828052d567483590a165e9951f8f5b0748be14d2b01f003231413c2cb4c56b6a004e159cc92b25055d1f009299b6f3ed0c2993993409bcc975e70b4c69b8abc3ed6b0d0f641435b434f314be98a45eb2ab35ae577da377f7e0e1970708305156bedeabbe33bdaebd25a1b6927dad89b6a87055c4f5b7a9eb308b4a39363edcc9f2f2fb4d3eb030c388fa8902c53be031ca6b4f2fcbcb5eefb03ad085882689d5cd9ba858dbe3e08e3d02671bfd30b639d86613fb47bb813ea64d0a5dd28a41878b2aaae5838e399159268109b3d0bd308777a38347433a471a76f747aa6d1312362d1583774b46ba0c782493a6522e782d5fb8bae7c37705681bff426e3c0516dc4b84ce5b4365735f1d6a7842601f4415fbb2acb38285587e57a81e38f27817be9d4f331a30926dbc53d4c488c5341018d0bbca19216e73c824d4317f3851bb8736f3c03863af48b3d42a0e1afa75742b0cdd52e4bf5468bc077bd3365608fb8c469a9200ff507c2397845bb5de3ff65c6be3fbe06695c1478fb570edab1ba15fd1f120aafa2dae65ed24095da3e320f220bed7eefe06920b85db516fab974fc6b542ff934a605cdc8e7c304",
      "6095f8f427b1bfb180853b0b3242420ca34b4425420a5a8f30db28f3cfec9ea5db3652e042becb752c737f56558daa22ddd04c3e7754df58b56d55aa142f2048c2e479ead8767f0065e6879731050000",
    ],
    [
      "ETag",
      "wO10wtNc7CJpH7nhBDoirg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d904f4fc24010c5bfcb786d630b15b0090721a89806b1c2c918b294a196fe99ba3b8dd6a6dfdd59349e3dedcedbdf9b79b31de459758010f659fadea06e2f52e4277b89d134051b396aaa0c8203c82a15f2ea36f6679f69fbc597c361b07ec8378f732f9d4e8530c91b960ac20e8e19160703e14b07952a516caaa4a66281b8ad6dbd5c6d16778b5884920e56586da3e866162da077fe4cbb5d9dffcbf2da3b70a27d8c47d458256833d49a4e98f0d2ae67545917e81a6a748206cef0f921d5d4d44a13b9a2b8c1c0f54783d1c41f7b7ee005d702169428cea81276fb2cd980895511d3876c071efcd6b396d1ac35497383b66f3019ff4c99939dcc928875830e244a3ee93e63088faa30d87f03bb90063c82010000",
    ],
    [
      "ETag",
      "5FR1Bxgyzt/334PJkTOC0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dd0c96e82400000d07f99b3180b48a437b602b22f8a70992019600ae23040594cffbda69ff0de0be4458186018ecf0675e013ac392bee8bbd454eb222555f1f82afcc8cddb5d8873146e5d2f5f1208c69d6f567b967837895686a68587302d1d5930bdf7e0f448b667891d5a92463c0cfae2dde8224651bd67fe0cd44bcb9ba8e44f975854ea8d2935bc74c5da3d49f9c6bcad5572f2fd1e6792d699690d7efb63a4fd952e632d5a5a32ee98f0e726e72170ccb504506335e1b567c12d955a197cedc938334fd04079a7137997b769ca62cd3d92cc71459d1326e6007d042304503c46f2e7714c51df8b7c37125e81d20a39c220a7eff00554be2c51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-43-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6fda3014fd2b91f75a20102080845644d39509c29a8456db34458eb9c9dc86388d1dbaaee2bfefda295dbb49ed536cdf73ee39f7238fe496175b322109cfee6aa81e3edc88849c105034c3d78d37bbd92fbddb6fbfe0d23bb767bf2ffccf703f9d22826b96a4bb3287961475c5404e36613bab445dd24a8816266af59d5677d81b8ebaaeddeddbfd31f224e4e99217b7c8fea95429279dce51bb9d0991e5404b2edb4cec9edf3bfb5ea7acc40d30253baf253ba8223b6f8b7ecc05a38a8b62ba09d1402da18a6147798e16fe32b7c9e9ebd46d4e77ed0cc17bce803226ea42695b98828922e5595d99ac64f2488ccd1707127a4b6f1e594ce4f5ae880bba83136b4b158dd54309d679b05e590bff7c1dac66d162edc7e1fcc25bcddaf3f572b3f243ebfac20b3c4bd12407c3b5a6d6a9b9f97841fd2d48c50ba31ee967adfcd4a0c5ff63d1049496d00463d71ed2eec81e2769e2b274e40c92d486241925ee803a89cdc67de86f13a0c833a286450b5100866c709dd871991bf707298dc7c9a01723dea1fd5e4a53ea90c309b9afb882332e4b2179d321721d2c222f8e828d3f9f459e2921a575aece1a63ba80971e151688a0376a3ae82817a8a4dbbdf0232f98cda3c595d74c780919650fe11dce38a5b90444d30a9ba7a05a892d368cf8b39577866033b12fc7a02493ef8f44f75cbb78d1f2677a8403d47695f992300a16fe2763e788b8a2796d20fbe6404ab4fc136b43d7871f88c4256db290cb8d177c25cd5300295450b0f7a789601378f75f3b2ebefe93432d2315de717798d422ac826687b829f7c81eb8bda14d0cb852ffc6465dbb7bec9acea133c20e0af55451b3f858682356cb67100671fcbee9d6e10ffdc1fcd578040000",
    ],
    [
      "ETag",
      "UEAjvLEkZxeQEF0AzHNJew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92414fc2401085ffcb78b424544b81261c40119b0062292743c8d24e4b71dbadbb5b0921fc77672ba25113bdb433d36fb6efbdf600cf59118307eb2c7da950ee2f52d48fa60850555c2bba95a2500816a0662991be7d198eb0d55e64dd562a9db98d0bae77bd1e112ada60cec03b4092218f15784f0728588eb416095ee5c5aaee2cd0fbd20ce761e04f47d4e72236fd74311ef707e3211cadf362cc345bd5fc3fd696470bb6621d6082128b088d96528a2d46da373615cb4b8e0d252a19a1821aae1fa452542593423468d270ae1bb67be576ec76d3769a4e97402e22a6335110bb98933ed042331e881db904970059976438a9afaf34cee2da8829fd69e83ab5beaf00494b328eabbf41d2bb61f4193eb05304df39968baad067ea6efcd0ffed38caf4f3a8db7e38fc41284d499d91d09f0ce7617f3233dcf2e47db0d7a8665250900a4d8676d3e9b4da6ef33dd61b61a2a6f7785a566841c4e8efb8cf347809e30a8f6fdd4eb5df7b020000",
    ],
    [
      "ETag",
      "I1+TGe57Ui95gr4S1eUltw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85547f6f9b3010fd2ac8fba795f283248440a4a84b53d621a52423a45d374d8931867a059c62d32daaf2dd7786a66dd6ad9590c0bef7eebd3b9f7940b72c8fd010852cb92b69b1fdf09387a881a8c409ecbaa7bf2fe2d29f17fe578b9c7eebdf9c2fec20198d00c1144be06c93d2a6e06541a8182e17ada4e0e506179c372151d3309a1db36b5a9d81de3174c3069ea0693c65f92db06fa4dc8861bbbdd76e259c2729c51b265a84674ffbedfb6e7b53f09f9448d13e946c838a68bf2d7a92728225e3f968b90003a5a0c58a6698a560e19919851f0f53b718ce5a0980ef19a198105ee652d9821484e7314bcaa2ca8a860fa8b2f9e2032d9ca93309b4c96ce905476b9c29f2fa58c342db2f1ada1a6a8a594a572c5aabc86ab5b9d53ef9b30b8880831b2ca8586b579f1ddfd1b47584255d6b23ed441b7b67da21d9f5b4a5e7398b403b3a39d6cefdd972ae9d5e1f60c07544856479e539c0614a95dfc7b6baaf0f5311b0040f757035d04ddcb1743b8cc30189ad5e3f8c751a865638e8e35ea813dba04614520c3ca9b2572c9cf3dc20bd81d5e99b38c4517710da769fe8149b031c469dd83663135b51b76feb68d740bf0a26e919131b2e58dd5b74e5bb81b30afca53719074e55468ccb549ed5e654112f7d4a2812406fd4b55351c641491d94eb058e3f9e04eea553cfc69426986c1777301d314e0505342e7046252d2e78044d43f3d9c20ddc99379e02a33af0f91e21d0f0fbc33321d86eaa2ecbea8dce5401bb17092f715a5680fbfa0375f5aeded4bbcd4e1fed768dff671afbfef81ad47151e0ed5f31a8c83414fd1f3a15be5ad54ef7ba1da4d49e5c1cac4cb4fbb183a781e072d55ae8cbd2f1af51bde5d398163427efcf1380abc0bbff88fd85052c5c59901112d630bd44281152d07a8a5956997f64f72dabdb4315b890af6276cfd81f97caa132d28ce6f2b1a2fac2566d53a1523c812008c3e7b9de3944ff006350961230050000",
    ],
    [
      "ETag",
      "IBxMfuRPrRX8cBZ5hGS9Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5b",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ffcbf80a0928692b491f5ad3d46ad358b4899734cd1606a40506f7a245c27f77161b9f7dd99d3dfb9dec39dbc231af1208619f671f06657391a15edb2142650aad78aba952080ea01619932f77a7ec79382fa7ebd7d37a787fe599c9b7ccc6632654fc8ea580b08534c7225110beb5508912d9264a3295664837b53d2f564fb3f92c62a1a4c40aabcd7239992e67d0397fa6ddae3efecbb2ed1c38d03ec214255631da0cb5a403c67a61eb2951d605ba8a8c8c51410ff7179924530b49e4b2e20681eb0f2e07237fe8f981175c3358502c744e15b39b47ce069ab42822fae276e03320fb918ba6fdfad9cbb6c379da76dbb369da68540f92388142fb7830f27ea3dc908da739b696061d8805ffe46dae214c45a1b0fb014bfb78eda7010000",
    ],
    [
      "ETag",
      "YJxgX7GmBQZxQ7K30uAzrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bb64ad0e2018e88ecfc8cfc060a9053619d0b422c827a024e9f4ee757a84f77e40793e9369c273df900ebc015e2ac6e6bc0907ddb2cddabf64f913c57950f58d37f6caf53045b7b6f17a79fd4c671ef8d4cc830ebaef313e5e0abe78c31ec27be6aa5b44bd04322cd01e25861a68282fef75facdc2e7c34a64c71bdb5c5b77e8c311c30ef2b84fa6304a2bce3327d3d594aecb36b2ef056566211d70ab8baf4cd3173b2d945e7629521d7108a5ab542d70916fee4e34388e8e6c08e88cc405fae3099e14bdb1e9c3f0b9a8afc1ed5363b6adb46005081b6a4a265cbfb85bcd3056e0df8e673e905780454a4a28f8fd03c11d2dd91a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-45-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6f9b3014fd2bc87b5c13484a128814ad594ad76c09690969354d1332e642dd124cb1e91655f9efbb98a66b55a97dc2f63de79e733f782477bc48c898c43cbbafa1da7dba15313922a06886af17de8fdb9df85b96bbefce927ba3cfd5d773eb723241046f58926ecb1c3a52d4150339deacbb5925ea925642743051c71e747ac3fed0e98dac9e6dd92ef224e4e9821777c8be51aa9463d33c68773321b21c68c9659789edf3bbf9d037cb4adc0253d27c2d69a28a34df17fd920b461517c564b34603b5842a822de5395af8cf4ce293d7a9bb9c6ebb19821f3803ca98a80bd5d8c2144c1429cfea4a6725e347a26dbe3890b5b7f066a1c1445e6f8ba8a05b383212aa68a476251867c16a69ccfdb355b09c86f3951fad67e7de72da9dad169ba5bf36aecfbdc033148d73d05c63629ce89b8f17d44f402a5e68f5b0796e949f1a347f3b968680d212da6034b286b4e7586e9cc623963ac78338b5208e9d7834a0c7b1c55c1bec24068a3c2daa59b41085d31ff4fb6e92464e1a0f223b498fa3d876875192f62d0a0e1d0e8609d91f913f155770ca6529246f3b44ae8379e84561b0f167d3d0d325a4b4ced5696bac29e0a547850522e89d9af64d940b546ada3df7432f98cec2f995d74e78011965bbf53dce38a5b90444d30a9ba7a05a8a041b46fce9d23b45b09ed8c52128c9f8d723697adeb878d1f2677a88036cec2afd25eb3098fbdfb49d03e28ae6b5863cb40752a2e51bac0d5def7f231297b4cd422e375ef093b44f01a45041c13e9e268275e0c37fedb0f888c5d54719a9f08ebbc36423c22a687788eb720fec81ebf4f49faa68a5dec4dc7eefd0b526479311b650a8a78adac5c7425bb15a3e833088e3f775b7f6ff00b70845d478040000",
    ],
    [
      "ETag",
      "PEKjyoxppyJ8MiE7+rBH0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92614f82501486ffcbe963b8614354363fa869d1d41471ad35e7ae70400cb874efc5e69cffbd73c9ac555b7d81730ecfb9bcef0b07784ef2101c5827f14b89627f11a39ae9c24359a64ad2ade0b9443000158b893417ae1c5e6677beb77b7c6807ed18ad7e6fd6e91021830d660c9c034409a6a104e7e90039cb90d6029e9659beaa3a03d4bed0c3b9efb9931bea331eea7eb2188dbabdd1008ec67931648aad2afe1f6bcba3015bbef630428179805a4b21f81603e56a9b9265458a35c94b11a0840aae1ec4829705139cd76852b31ab5ba7d65b7ea4db36e99569bc094074c253c277631277da0b862a9c75fc925d80488aa24c35175ddd138092b23ba7427be6d55fabe02242d4a525cfd0d92de0da3cff0819d22f8ceb18c97b93a53c3d17df7b7e328d3cfa3aebbfee00721152575467c773c98fbddf15473cb93f7de5ea19c0a4e414ad419d64dabd568dae67bac7daea3a6f7384a946840c0e8efb84d1438114b251edf00427773f27b020000",
    ],
    [
      "ETag",
      "0UIsF+mJTRvYW9c9ge4CBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8554fd6f9a4018fe57c8ed9736513910f123311db3ac255174886ddcb2e88187bd1639ca1d76aef17fdf0bd4b6ae5b9b90c0ddfb3ceffbbc5f3ca23b96ac500f056c7d9fd36cf7e99607a886a8246bb8b5f8fd65f27bd289c7783e7af835df6ed5247ae8f701c10a96209b34a675c1f32ca4a2379b36d619cf5392715e074775c3ac6ba66e76b436d60c6c748127681c0d597207ec1b2953d153d543ecc69af3754c49ca4423e49be77b75abab69c66f6928857a1c528528427d3fe859cc4322194ffab32908c805cd167443580c125e98abe0f3b1eb06239bc61ac05b165212863c4f64210b5c843c89d83acf4aafa8f7884a99af3ed0d41eda035f198c67ae7fb2249b82bc3c5588500e879ab2849c2216d3055b2d0bcb6291de295fbdf1082ca0e086082a96caf5a5edd98ab21412d42d95be72a658eeb972cc765c65e6baf6d4574ece4e950b6f3c9b285fe6471890bda242b2a414ed9320a685e0a7ba3a6fbb59108804119571d1c626d13ab81b44413b8c3acd5610611a049da0dd22cd00875d831aab8012e0c9c27bc922094fbadda08523bdade9066de1665bd70ddc6c6938d0db66731576b560a5459a11a27d0d3d644cd27326522e58555c74ed39bebdf0bd993bb07cbb4c2322792ccf2b714512af754a481240efe4b52fac8c43a4a2538eebdb9e35f09d2bbb1a8e215d937037bd87f188482c28a049463654d26cc457503434194f1ddf19bbd6101865c727078440bd1f8f2f047f97965596e51bf9ce087a648d26a58603e88ac47989da561f48c73aae63bdaeb57c4def69cd9e663430c6dfd17e5ffbbf73cbf3ac3908225946767fd92049d328e8ff885ae2cb5325fea0424345b4674d472713ed7feee1a92158b82a16fa36b3bd39aaae3c1ad18c26e1c72306e0d2f0e17fe3b0c48085358630b01092c14087a2081266b41a6cb629c53fb14d6cea1d548233f9c606f377e860e1a3f0483734914f19554b5c96",
      "ad30e5e21904469847d7712fc0fa070a26818a44050000",
    ],
    [
      "ETag",
      "AoqHnzP8lO0YMwxYvv/nfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d90dd6ac2401085df657a9b80a9c19f8017b5042b88b4a952b088acc9248d26997477a204c9bb7736955ef76677f6ec77d873f606e7bc4a2080639e7d37a8db870cf9cd0e119aa660235b4d954170005965420e2f536fb7f0935d3a4c3ff276bc497971bace664298f80b4b05c10dd21c8bc440f079834a952836555253b140dcd6f6bc5c6fc245188950526285f576b57a9aaf42e89c3fd3e1509fff65d9770e9ce818618a1aab186d865ad309635eda7a46957581aea146c768a087fb8b4c53532b4de48ae2fa23d71b3d8e26de78e0f9037f2a6041b1e29c2a61b7ef920d985815115da51d7802e87e94a269bf5e7ad976b84ffb6e7f37cd5b46f3aa491218b48ffb93c16f9467b2f15862b36ed08158c94fbee40c41aa0a83dd0f76d2ecdaa7010000",
    ],
    [
      "ETag",
      "3v91ZG4dZf3fWiy7TftGjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0db6e82300000d07fe9b31862d1c1de8a5c8532b413535e0862b18a42a55520cbfe7d669f70ce0f28ab8a4959a8ae612df80453b9b0e6d53c12a6bd46dcc337ca9011bf28217a185fafc8c834d4e2d4154e12e45b71c597eafc85d300d6349d3239320d6d19878d7e12aa837e701b2d25138ec7589ba26593ef39f7f26762daf73a6d42f59cf0506f50497c6ef5aed9920ced1de9772fb9cab996844715f96b2b2ecb20da6c9d3174380906dab91fd23d18b980f415caf3614777abef7058f4b63954d4f02b1f3dbcf6569fc8fd880b22782c3af8d03d48c00cb0515c7a268bcb9b0b97963503fff6424d82bd036c56f6ac07bf7f759806421a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-47-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fa34014fd2b64f6ab6de98b9626cdda545c495aba0b54b36e3664182e380a0c3283c698fef7bd0cd6d598e82766e69e73cfb90f9ec91d2f13b22031cfee1ba89fbedd8a989c105034c3d7e07a663f5a5779d1a4d7f66a679fcb1d771f974b44f096256951e5d093a2a919c8c53ee867b5682a5a0bd1c344bdc9ac37b446d67c383387137362234f429e6e787987ec1ba52ab9180c8edafd4c882c075a71d967a2787d1f3c8c06552d6e812939782f39401539f85cf47b2e18555c94cb7d80061a09750405e5395af8cf4ce2d3f7a9fb9c16fd0cc10f9c01654c34a56a6d610a26ca94674dadb392c533d136df1c48e06c9c7568309137451995b4801323a18a46eaa902e3dcdf6d0dd73bdff9db55e8eebc28585f38db557fbddbecb75e605c5d38be63281ae7a0b9c6d238d5370f2fa89f8054bcd4ea61fbdc2abf34c8fd38969680d212ba6034332d3a9c9b769cc63396cec7d33835218ee7f16c4ac7b1c9ec094c921828f2b4a866d15294f6786acdcdb11dc188a6d1644687919d266964275306666ca5361b91c30979acb982332e2b2179d72172e5bba11385fede5baf42479790d22657679db1b680b71e151688a04f6a3ab4512e50a96db7eb858ebf5a87eea5d34d780319654fc13dce38a5b90444d31a9ba7a0de8a041b46bcd5d63943b09ed8cf635092c59f67d2f6bc75f1a6e5aff41007d8da55fa4b82d077bd1fdace117149f346431eba03a9d0f20dd686ae0f7f11894bda6521bff68eff9b744f3ea45043c9be9e268275e0cb7fedb8f888c5d54719a9f08ebbc3642bc26ae87688eb728f6c6b389d4d8806d7ea43ccb2c7c7aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd3dd3afc036360529178040000",
    ],
    [
      "ETag",
      "SZ79w6WlmufZ9AO9FsOiIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcbf8284d8a415a49fa50b4daa6177ba10fc698668501a9c0e0eea2d6a6ffdd59d46ad4445f6066f86639e7c016eed322020f6ed3e4a142b9394850cf4c314755655af1ada4422158805a244cbed8896a5d1de6431af6fd6a19fbfeb356b34e870915de612ec0db429c621629f0aeb750881c792da4acca8b55dd59a037a5192e82f96072c17d4e91e927cbd1a8eb8f7ab0b3f68b91d06255f3ff58bbd959b0a6db39c628b108d1682925ad31d403635389bcccb0a1a892212aa8e1fa4122a92a85246af0a4e1b41ab67be4b6ed56d3769ace0983198542a75430bb5cb03ed0a44536a72776092e03b22ed9705c5f1f799c46b511530e2681ebd4fabe022c2d4e335cfd0db2de3bc19fe1037b8fe03b2772aa0abda7ce4797dddf8ee34c3f8f3aeb06bd1f84d29cd41e0906e3de22e88ea786bb79f7ee6f34aaa9240e52a1c9d06e3aede396db7c8bf5944cd4fc1e4fcb0a2d0805ff1dfd5483178b4ce1ee1569d6ce2f7b020000",
    ],
    [
      "ETag",
      "z1gs7Y+mKoKHBuUfBBxtsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010fd2ac8fba795f20312022452d46509cd9852d212d2aa9aa6c43826754b30c5a65356e5bbef304ddaacdb2a21c1f9debbf7ce3ef38c1e58ba423d14b1f56341f3eda77b1ea11aa212af6175d4f9f66b80ad34c2e3613bc1d9f5dc1e4faffa7d40b09225f0264b685df0222754f4e6b3c63ae7458673ceeb50a86e3a75c36a598e61eb86a99b5de0099ac413963e00fb4eca4cf49acdbd7663cdf93aa13863a241f8e6b0de7c6a35b39cdf532245f358b2092aa2f97fd1b384132c194ffbf319182804cd1774835902165e99abe8f371e906c39bc61ac04f8c504c082f5259da821284a7315b17b9aa8a7acf48d97cf38166eec41d86da703af7c39325de94e4e5a98685b60f6ada127a8a5942176cb52c338b45f6a09d07d30bc880833b2ca8586a375fddc0d50e34adaf9d69037fa41dd33d5f9bfbbe3b0bb593b3536d1c4ce797da97db230cf85e512159aa5c87384a68e9f86563bdf7c75912b00417557261eb16361cbd1bc5914d62a7dd89629d469113d91ddc8e74d235a9b98a28069e2cab2b164e79da31bbb8dd6ec78ed1ed588e631aa6a11b71cb895b2b4cba0477dbb86593968e7635f43367928e98c8b860d5eea29bc00bdd4518ccfde12074551b312e1239aacc954dbcf529a14900fda7af5d99651c94caa3f2fcd00d06c3d0bb76abe998d03526dbd923cc478c1341018d73bca192e6177c059b862ea7332ff4a6fe60020c75e4977b8440bdefcfaf84709ba95d96ea8dce27d3416899cac11e728d9342619eaa0f64343a80d8d5fe5d661004835b90c6798eb77fe4a01d4bd1ffa2a0f02aaa6c1e1451a9b68f5a479185763f76f0d410dcad4a0b5dcddde016554b018d694e53f2f1300158253efc45ecef2b60e1c6828c9010c3e812518a909c5623cc36cafc0bdb6a99968d1438",
      "97ef721dc7de9f5559a3ac483734952f1d55f7556d5b992ac4010449983cdff3c790fd0dd9e09d662f050000",
    ],
    [
      "ETag",
      "D5JzAa6nbaGC3lapVU7GOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcb78a44d6825589a701043948410ada2268690653bad856da7ee6e8186f0df9dad8678f4b29dbef7cde6bd3dc1aea852886153e45f0deaf62a47fbe486044da3ace14f4d9541f000adc89954ef51b4906fed7134eaed8f3ac55eb37b3d8cc74c18f989a580f80459812a35107f9ca01225f29a28a9a92c43b6adddff6cf132bd9f262c94943a61b19ccf6f27f3299cbdcbd27a5deffeb5b23a7bb0a54d82196aac24ba0cb5a62d4a3b73f58c286b85bea1464b34d0c19d916b6a6aa1897c56fc41e407c370180537fd60d01f8c185424852da86276f9ccd9c092152aa103b7839001dd8d5c34ebce7d27bb0e6e0aba687fbde0e285ce5bfd5e38692d9a474d9ccea00b761df67f62de918b6eb992d50d7a2005bff2436121ce843278fe06a06864bbc3010000",
    ],
    [
      "ETag",
      "lX88NcWyx99+vxrde+ukVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cb",
      "72",
      "82301400d07fc95a9c0101a1bb824a8be525f272c3407aad8102810425d3e9bfd7e9279cf3832a8c81b1920f2df4e805894a31d7787da48665bf3678d8be39f238d0aff913bb52e2a97578ecc622137e5c511cf610d0dd5d9076bae5b93ce229fcce0bbb49d2f4ccef0b27dbd6336fb48f4f4e51b3a66b88db695c89334b79b73ece922b3bfeae27986b17afdcb4819dd12c37d4a28e0ddd3a18b9038b23da65ce4021b5eaf0ab9feaf69eeb1733105d3cf955f0907da646b30e0fd535c55596022d3a35d42b4b0d8c710f510d3ed1d9e9d018b9ab2f095a215828998095e4c9dd68a6b942fff6920b0acf000baa0926f4fb070e9d7a621a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-49-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ab6da9a5cfa45949456db6a52e50ddcd664366860b8e52069941634cfffb5e06eb6a4cf453997bcfb9e7dc479fc99d281232234c64f735544fdf6e2523470434cd30fa23affae7a3dbd5a304f7fa32dcfc12774370e773448886a5e8aecca1a3645d7150b36dd8cd2a5997b492b283853aceb4d31f1d8f26fdb1dd776c678a3c0579ba12c51db26fb42ed5acd73b68773329b31c68295497cbdd6bbcf770dc2b2b790b5cabde7bc91eaaa8dee7a2df73c9a916b2986f4334502ba862d85191a385ffcc849dbc2fdd1574d7cd10fc203850ce655de8c61696e0b248455657a62a993d1363f3cd0709bd95b7882c2ef37a57c405ddc19195504d63fd548275166cd6d6d23fdb046b375a6efc385c5c786bb7bbd8acb66b3fb4ae2fbcc0b334653918ae35b74ecccbc707ea27a0b4288c7ad4841be597012d3faea521a0b48236198fed11ed4fec294bd998a793c190a536303661e3211d309b4f1d701206147946d4b068210b064932181ef7e3e198b1d899501a4f4713160f19461d46c73ca1647f441e2ba1e154a8522ad14e885c07cbc88ba360eb2fdcc8332da4b4cef5696bac69e0ad478d0d22e8939ef64d5648546ac6bdf4232f7017d1f2ca6b37bc828cf2a7f01e779cd25c01a26985c3d350ad65820323bebbf64e116c367679482a32fbf34c9a99372ede8cfc951ee1021bbbdafc92300a96feb9b173405cd1bc369087f6839468f9067b43d7fbbf88c4236dab909f5b2ff84dda5000295450f0afb7896093f8f2bf76387cc4e2e9a38cd2f8c6dbe1aa11e115b437244cbb",
      "07f66830184f880157fa436e68db87a935359a8ab08342bf74d41e3e36da8ad5ea1584495cbf6fa6b5ff07acb0a27f78040000",
    ],
    [
      "ETag",
      "Klr1G6jLwoeAWPSOXik5eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "cb",
      "78",
      "b424c5d4224d3ca08236014428170d214b3b2d956da7ee6e3584f0df9dad8a464df4d2ce4cbfd9bef7da1d6cf23281005679f654a3da1e6568ee6c31455d4ba3f95651a9111c402332264fc2c93d0e36a524ac3277dcb99e47c7ddecfc9c091dafb11010ec20cd51261a82871d94a2405e8b49d645b96c3a07ccb6b2c359340dc7d7dc1794d87e3c1f0e7b17c33eec9dc362228c5836fc3fd6167b071e6935c5141596315a2d95a2478c4d686d6a5154125b9a6a15a386066e1e648aea4a28a2164f5a5eb7d5f64ffcb376c76d7baed76550522c4c4e25b3f319eb034346c829bdb04bf019504dc986d3e6facce33c698cd8321c47bed7e8fb0ab0b43497b8fc1b64bd6bc19fe1037b8fe03b270aaa4b73a006c3dbde6fc771a69f475df5a2fe0f421b4eea8044e1a83f8b7aa389e516efde2fb606f5441107a9d166d876bdb3d38eefbec57a49366a7e4f60548d0ec482ff8e9bdc40900aa971ff0aa8bb4e147b020000",
    ],
    [
      "ETag",
      "2IPZeFknloepg0N7GUT+9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85547f4fa34010fd2adcde3f9aeb0f5a5b0a4d1aaf57390f53a952aa31974bbb2c0bae0516d9c54b63fadd6f16acdae8694202b3f3debc37bbb33ca235cb423444018bef4b5a6cbedef1003510953886d5626675a641f4cd1c9b67d93d09d797d767d9e5680408a65802a779429b829705a162b898b7e28297392e386f42a1665f6f768cae6176067aa7a7f72ce0099a445396ad817d2b652e86edf64ebb15731e2714e74cb4084f9fd7db0fdd765ef03b4aa468ef4bb64145b43f163d4e38c192f16cb498838152d0624953cc12b0f0c20c83effba55b0ca7ad18c00f8c504c082f33a96c4109c2b388c565515545c34754d97cf581e6f6d49ef8da64b670fd83154e157975a861a1ed8286b6829e2296d0250b572ab35ce66beda7373b870c38b8c5828a9576fdcbf66c4d5b29d0979176ac8ddd136d9febb8dac275edb9af1d1c1f6aa7de6c71a1fdb8d9c380e9900ac9b2cab28f83842abb4fbbeabc3d4b45c0122cd4c9e5403770c7d4ad200a0624328ffa41a4d3203083411f1f053ab17ab4170614034faaea150b673cd3a31ed5add0c03ae9f7f1c0a28669129374a3ae812d4b0f8e4283f6bb2141db06fa5b30494f98c8b960f5d6a26bcff1eda5ef2ddcc9d8b7ab36225c26f2a436a79a78ed53429300faa0afadca320e4aea9c1cd7b7bdf1c477aeec7a34a634c66433bf87e188702228a07181532a6971ce43d83474319b3bbe3373c7536054e77db1430834fcfdf842f03779b5cbb27a2b2da357e9ef005738292bc443fd813a7db4dd36fe5f62ec79e31b90c5458137ef977fb77e85afa2dae2b31e526abba8bb171968fb670b4f03c1a5aab5d0e5c2f66e50bde4d1881634239f0f1280abc4a7ff86dd45052c5c5590111262185b22940829683dbe2cadcc3fb18d5ea76ba20a5cc837b9aea9efce49d55015694a33f9d4517d51ab6d53a9523c83200953e73aee2964ff014470711c28050000",
    ],
    [
      "ETag",
      "rO91Lbf+8A8JnqcdkQWJnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "4f",
      "c2",
      "40",
      "1086ffcb786d9396f065130ea0a02404b58a261a4296edb416da9dbabb0509e97f77b61a4f1ebcecc7cc339be7dd33ec73954004db3cfba8519f2e32b40fee10a3a90b6b78ab4819040fd08a8cc9d94caabd9d278317d1b9fb3cbc1eafc7cfe9783462c2c8772c05446748732c1203d1db19942891c74449b5b20cd953e5eef3e5d3f4661a73a1a4c41596abc5623c594ca1f17e87369b6affaf9175e3c18eb631a6a85149740e95a61d4a3665d288b22ad037546b89065ab86d649aea4a68229f2b7e2ff0c37ea73f0c0741d80dba970c162485cd4931bb7a6437b0644511d391d3418701dd1e3968daae072ef7da0c8716706a7ff742d75bff3c38395934f79ad8cea013eb0e836fcd2b72ea9623595da30752f02fdfe616a25414069b2f9cc6b3c8c3010000",
    ],
    [
      "ETag",
      "FFcnktId7Wa2OxvZwDAVfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ffedd4497282401840e1bbf4da583683d0d9818d0419c4805abaa11aec14cda0bf8004b472f758d9e7067e1778bbf7402ccb78db26dda5e467f48e462691693675413717860801279a618c84f1b26769e482f2ad7a36cc92f3cdf2ec4a40dd519b0908367d8ec7f532cc09056c06b941a5622c3fafc606bce3fdf8d67f1cb673a638ad462d4b2ead8bec177a102bbed88743458f0a6b82955be8b8cdc8d72a033af05d5c6d47a80eca39bd0d6add4b8670623bcd3b8938cf4ae45b553b049aef62bea58e4c6036d7d3eb1a079dbf9348942ca2e5a90ef72755f3b0ebb9d78bbabe4f5f5e5efe8726880f201ade26e2f90359256482fee6907423f0e7214cce1adea09f5f0bea932f3b040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-51-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda249027448ad628a16bb484ac84b49aa609d9c650b780a96db25555fefb2ea6e95a556a3f61fb9e73cfb90f9ed03d2f13344584670f35938f5fee04416788699cc1ebf26f39b88f1cd7bbbaa90a52f8a190f47b369b0182372c858b2a671d256a49999aee77dd4c8abac252880e24ea8c9c8e33ee8f5d67623b437be8014fb13c5df3f21ed8b75a576adaeb9db4bb991059ce70c555978ae2e5bd77e8f72a29ee18d5aaf756b2072aaaf7b1e8d75c50acb92867fb1d18a81593312b30cfc1c27f6642cedfa6ee725c7433001f386598525197bab10529a828539ed5d26445d327646cbe3aa09dbff6179145455e17655ce2829d5909d638d68f15b32ec2edc65a0517db70338f56db20de2d2efdcdbcbbd8aef79b6067dd5cfaa16f694c7266b8d6cc3a37b7002ea09f30a57969d4a3e6b9517e6ed0eafd581a02482bd606e3893dc68e6b7b2425139aba8311496d46884b26233c2036f5866c9810868167440d0b97a2f4b03bb61d97428651120f9d6410e3fed08b47e3091993147bfd81838e67e88fe49a2db9aa84e26d87d04db88afc380af7c1621ef9a68414d7b95eb6c69a025e7bd45020803ea8e9d844b900a5a6ddab20f2c3f9225a5dfbed84d72cc3f471f700334e71ae18a0b184e6692637228186a160bef197003613fb710a2a34fdf5849a9e372e5eb5fc851ec1001bbbda7cd12e0a57c13763e784b8c6796d2087f6802ab07c0bb581ebe36f40c292b659d0d5de0f7fa2f629642993aca49f4f13c026f0e9bf765a7cc0c2ea838cd27087dda1aa11a192b53bc44db927f678e4f487c880a57e17eb7b8353d79a1c4d4656b0523f57d42e3e14da8ad5ea050441187f60ba75fc074b8e581378040000",
    ],
    [
      "ETag",
      "Dxn3kT189QWpmbmERorcKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "657a8b8934884ae2055adb9aaab588176d63cc0a036281a5bb8b3f31be7b67a9b54ddba4bd8199e19be59c03077849f2101c5826f16b89627f11a37ad08587b24c95a45bc1738960002a1613f9b8b566b3ddd63527f15df7a91dae775e6fb3ed748890c10a3306ce01a204d35082f37c809c65486b014fcb2c5f549d016a5fe8e1d4f706e31bea331eea7e3c1b0eddeeb00f47e3bc1832c51615ff8fb5f9d180355f7a18a1c03c40ada5107c8d811a689b9265458a35c94b11a0840aae1ec4829705139cd768526b9835d3beb45b66b36e5a75ab4d60ca03a6129e133b9b923e505cb1d4e35b72093601a22ac970545d37344ec2ca882e0763dfb62a7d5f01921625292efe0649ef8ad167f8c04e117ce758c6cb5c9da9ebe1bdfbdb7194e9e75157aedfff414845499d117f30ea4f7d7734d1dcfce4bdbb57282782539012758666dd6a359a76fd3dd61ed751d37b1c254a342060f477dc260a9c88a5128f6f76dfda4a7b020000",
    ],
    [
      "ETag",
      "Yw4UUxwA1PgKBZ9djxRCvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85546b6f9b3014fd2bccfbd24a79401ee421455d96d00e2d211d21ada2694a0c18ea1630c5265d54e5bfef624adbac5b2b21c1f53de79e73ed6b1ed11d4d7c34442e0def7392ed3fdf3217d510113884d5c09c7f9ff2b9bff8dd99b488e9ac77c179f8301a0182162c8ee3342275cef2cc237cb85a36c28ce529ce18ab43a17ab755d7f496ded77aaad6513b03e0711205339adc01fb4688940f9bcd4abb1132164604a794373c163faf3777ad669ab15be209de3c966c820a6fbe2f7a16310f0bca92d16a0906724eb20d89318dc0c20bd377bf1c976e501c374200efa847b0e7b13c11852d28e1b124a0619ec9aa68f888a4cd571f6869cc8c89a34c162bcb39d9e2b8206f4f15cc952aa8295be829a011d9507f5b64369bf44e39b71773c880831bcc09df2ad7df0cdb505e96b6caa79172a68cada9725cc1b4949565194b4739393b552eecc5ea52f9ba3ec280759f70411369dcc16e440ad34f7b6bbe3dd1828005a896c94d4fd5b1d657076ee0f6bca0dfeeba814a5cb7eff6bab8edaadea0433abe4b30f044515db270c212bddd6efbbda0ddd27cbd1304ed81d6c6aadae9aaaaeaaaadbe1f0c020ca57ae850430f1915644a79ca382d37185ddba6636c1c7b654dc68e21db08701e896969ae68e2b54f014d02e89dbe0e459632502a4ecbb41cc31e4f1cf3ca2807644642eced97f73022018e380134ce704c04c9e6cc874d43978ba5e9980b6b3c03863cf5cb0ac1d1f0e7e30bc1d9a77297857ca3a5639bd685345021ae70944bc8aefc40e314bca2c3a1f6ff3263db1eaf411a6719deff958376f44e41ff8784c4cba8b459496aa850aba2d651a4a3c3af033c3504d7abd4423f5686bd46e5924d029291c4fb7898002c131ffe25aa2b0b58b8b420c305c430ba1e2f44bc8c94234c6369fe89adebaa2eff310267e24daea575abb32a6a1415494c12f1d4517965e5b615a99c3f8320099367c9633bfc01e3f142a732050000",
    ],
    [
      "ETag",
      "fIMKDsMdOx4C2eITYvfFgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90dd4ec2401085df65bc6d93b6297f4dbc00838812a20512a3216429d35a683b7577aa12c2bb3b5b0df1d29bedf49c6f36e7ec090e79b58308b679f6dea03e5e65c84f7688d134051bf9d454190407905526e4d7f3433c19b0370a6e17aa33f2ee5f96a51a5e5f0b6192372c15442748732c7606a2d71354aa4459532535150bc4c7dafe4fe7cbf1641c8b50d2ce0af3d56c361ccdc670762e4b9b4d7df8d7cafaecc09eb631a6a8b14ad066a835ed31e1a9ad67545917e81a6a7482065ab835324d4dad34912b8adb095cbf1b74fb7ecff3432f1c085850a238a74ad8d542b20113ab22a64f69078100ba1da568da9e1f22876d073bf96db4bf5e70f102ebad7f2f1c1d19cda3264967d0060bfbbd9f983764a3b35462dda003899257becb19a2541506cfdfec6094d4c3010000",
    ],
    [
      "ETag",
      "xXKRG9t0B2FSa5B0JZTmaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0bb642d8e20bf74274a1d28a87c47d864084689209f605a82d3bbd7e911de7b81a22cc938a2675793167c00512870592ebf7ad3da6ee8aaf6a7e7d0bb777b15aa419b36c3e723e16d9f6fae710025d52a5b615068512faa9bc474ae28e43b432850ad035e216df203cef49fc0a972254e4d8c6874abe4f0d0a46e944d833ea47672f80e86f158b6a7559a583b47ecc37ade6e46dbb0f7172d566f13f6184a6186193c3ff2c6436edcf9b13b2bb8b14d89296743da717d8e71afac8f0e36704eefb294093f2bac8e535df692564317a93e097e010b40a69e323222fae6ae350817e0df8e9ea227ef008b148c30f0fb07a86104981a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-53-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbda24e44d22456b94d23653201b21e9a66942c65ca85b8229369da22aff7dd7a6e95a556a2524b0ef39f79cfbe089dcf322215312f3eca186eaf0e54ec4e48c80a219deaa03777f66df4aefdb6e7817178ebadaa5f36c364304d72c49f7650e2d29ea8a819c6e37edac1275492b215a98a835ecb7baa3dec8e98eedeec01e4c9027214f57bcb847f6ad52a59c763a27ed76264496032db96c33b17fb9ef3cf63a6525ee8029d9792bd94115d9f958f46b2e18555c14b3ed060dd412aa08f694e768e13f3389cfdfa66e73ba6f67087ee40c2863a22e94b685299828529ed595c94aa64fc4d87cf54136eeca5d84161379bd2fa282eee1cc4aa8a2913a94605d066bcf5afa97ebc09b87cbb51f6d16d7ae376f2fd6abade76fac9b6b37702d45e31c0cd79a59e7e6e4e301f513908a17463dd4d75af9b941cbf763d1049496d004a3b13da25dc79ec4693c66a9d31fc6a90d71ecc4e321edc7369b0c6090c4409167440d8b16a2a0e3d8998cbabd0812bb1b0de2094493047ad168e00ce9204d8793c421c733f2b7e20a2eb82c85e44d87c84db00cdd280cb6fe621ebaa68494d6b9ba688ce9025e7b545820823ea8e9a8a35ca0926ef7d20fdd60be08973bb799f00a32ca0e9b079c714a730988a615364f41e589041b46fcb9e75e20d84cecfb2928c9f4f713d13dd72e5eb5fc851ee200b55d65de6413064bffcad839217634af0de4b1f920255abec5dad0f5f10f2271499b2ce4c7d60d7e91e62a80142a28d8e7d344b0097cfaaf9d161fb1b8fa2823159e717798d422ac826687b829f7c41ee9871870a5dec57a76ffd4359d4367843d14eab9a266f1b1d046ac962f200ce2f87dd3ade33f6aa9ff1078040000",
    ],
    [
      "ETag",
      "tyiEXgJpMJV5jbn8tGVfAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd6e82401085df657a8ba9b68896c40b6cb525f1a7454c348d312b0c8a051677178d35be7b67a9b54ddba4bd8199e19be59c03077889b3106c58c4cb4d81627fb144f5a40b0f65912849b79c6712c100546c49e4da1d7527f9743f6c5eaa6cf2ba9d7aebe666d76a11218315a60cec03443126a104fbf900194b91d6029e1469362f3b03d43ed7c391efb9837bea531eea7e30eef59c76af0347e3bc1832c5e625ff8fb5d9d180355f7818a1c02c40ad25177c8d8172b54dc9d23cc18ae48508504209970f96821739139c576852a95f576ad695d5ac35aa35b36ade1098f080a99867c48e47a40f14572cf1f88e5c824580284b321c95d72d8de3b034a24b77e05b66a9ef2b40d2a238c1f9df20e95d31fa0c1fd82982ef1c4b7991a933d5ed0d9ddf8ea34c3f8fba73fcce0f422a4aea8cf86ebf33f29dfea3e66627efedbd42f928380529516758ab9acd7ac3aabec77acb75d4f41e5b89020d0818fd1d0fb1023b6289c4e31b2f5afdf37b020000",
    ],
    [
      "ETag",
      "jISFXpYyO8/tnXzvYRj8qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85547f6f9b3010fd2accfba795f203d28490485197a5ac454b494648ab6a9a12e318ea1630c5265354e5bbef30a56dd6ad9550c0bef7eebdf39df388ee59ba414314b0e8a1a0f9eef31d0f5003518923d8bd2878ef5cf64dfd76e06fe7dfbb224d7c331a8d00c14a96c04916d3a6e0454ea8182e17ad28e7458673ce9b90a8d9eb360db3635a465f37ba7a77003c41e370cad27b60df4a998961bb5d6bb722cea398e28c8916e1c9f37e7bdb696739bfa3448af6a1641b5444fb7dd1d398132c194f47cb05182804cd5734c12c060b2fcc4df0e530758be1a4150178cb08c584f02295a52d4841781ab2a8c85556347c44cae6ab0fb4b0a7f6c4d726b3a5eb1fad715292d7c71a165abd68686ba82964315db1cdba8cac56d9bdf6cd9b5d42041cdc6241c55abbbeb03d5b7bd95a6b9f46daa93676cfb4c30c8eab2d5dd75ef8dad1e9b176eecd9673edebcd0106ac6fa8902c55c67d1cc4b434fd74b6cedb8e96042c41b50aaefaba890d4b1f0461d027a175d20b429d068115f47bf824d0c9a04bbb9b8062e0c932bb62e194a72420c6c0ea98d4e8867dab6fe99de024dc60d320a44781190ea053616f80f60df43b67929e319171c1aa0346d79ee3db2bdf5bba93b16fab32425cc4f2ac325716f1daa7842201f44e5dfb32ca382895dd725cdff6c613dfb9b2ab0199d20893dde2014624c4b1a080c6394ea8a4f925dfc0a1a1f96ce1f8cecc1d4f81a1ba3eaf11020d7f3ebe10fc5da64e59aa375af89ee39e2b0335e20ac785826cab0f8433f08af6fbc6ffd38c3d6f7c03d238cff1eeaf189463764bfa3f24145ead2a9bb5a4814ab57ad539589968ff6b0f4f03c1f5aab4d08fa5eddda06acba321cd694a3e1e2600abc087ff12f595052c5c5a901112d630ba44942224a7d508b344997f62c38fa52305cee59bd889d1ab7b55e62833d284a6f2a9a2eacaaa632b43857806411026cf556ddbff01bc6411fb32050000",
    ],
    [
      "ETag",
      "Huo5Gt760h9TvPK4snmT6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5b",
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4",
      "350163e32de0831669a5226d6c68a188ac719246939d74776211f1bf77362dd2c7beece59c6f9673f60c8742ef20826d917f36684e3739f2b33bc4689b92ad6c35698be001b2ca851ceadb3977df5661d8ab92fd74f43ad08fcd643c16c2a61f582988ce901558ee2c44ef67d0aa42195315359a05e253edeef3e5cbec7e168b50d1ce09cb64b1984c1733b878d7a1cda63efc6b647df1604fdb183334a85374196a437b4c79eeea5955d525fa961a93a285166e8ddc50532b43e48be2f7423fe877fbc360d009c24e3812b0a45471415ad86425d980895519d397b483ae00a63d4ad1ac5d8f22f7da0ec71670d1fe7afdab17386ffdfbe0f4c4689f0c493a8b2e58381cfcc4bc23179da5129b063d4895fcf243c11065aab478f90600821c9cc3010000",
    ],
    [
      "ETag",
      "8n3It2XS445mUjB9W7nKuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9591d1111e82decb24c6513e492a13195e06032092ed0e9bfd7e927bcf7035a8c899468645772031f606a37e60aaf226e5836a4f6585f59e79716baeba983e273dc1b955e58c341890bf3f18d4f7e9608d533a6dd4bd1b6d52066adf04ac5fdac1e6310a54d2def49d33ce73884b1e01974ece0b9d9b0e5ee1822888e971e659de828746867f758994b2a188d601b47dc190e282dc73a5a92794eddbb96b5721d9e4976240255bd17e4fe63487b75efb7ba086eb5870717b2fd85d5deb6e009cd4f92a38389cb2fc687b59a48ace73d5800f2e2541089e89bab6aa6b900ff76344e9cbc032cd20a22c0ef1fab99fafa1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-55-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fa34014fd2b64f6d5165a29a54d9ab5a9b83669e90a5477b3d99061b8e028659019348de97fdfcb605d8d893e3133f79c7bcefde099dcf332255392f0fca1817affed4e24e48480a239be86fcee97ad9405f3f0c1a36bb7d85f79174fb3192278cb92745715d093a2a919c8e936ece7b5682a5a0bd1c344bdd1a83770868e3b185b03dbb227c89350642b5ede23fb56a94a4e4df3a8ddcf85c80ba015977d2676afefe6e3d0ac6a71074c49f3bda4892ad2fc5cf47b2118555c94b36d88061a09750c3bca0bb4f09f992667ef53f739ddf573043f72069431d194aab585299828339e37b5ce4aa6cf44db7c7320a1b7f21691c144d1eccab8a43b383152aa68acf6151817c1666d2cfd8b4db09e47cb8d1f878b4b6f3def2f36abedda0f8d9b4b2ff00c45930234d7981967fae6e305f553908a975a3d6a9f5be597062d3f8ea525a0b4842e188f2d870e5c6b9264c99865eee928c92c481237198fe86962b1890d769a00459e16d52c5a8a72980e6cd74d9c38cb864e6cbb232776b38cc593813da063db3d1da616399c90a79a2b38e7b21292771d2237c132f2e228d8fa8b79e4e91232da14eabc33d616f0d6a3c20211f4494d8736ca052ab5ed5efa9117cc17d1f2daeb26bc829cb27df88033ce682101d1b4c6e629a8d722c586117fbef6ce11ac27f6f3189464fae799b43d6f5dbc69f92b3dc201b67695fe92300a96fe0f6de788b8a645a3218fdd815468f9166b43d787bf88c425edb290abad17fc26dd530019d450b2afa789601df8f25f3b2e3e6271f551462abce3ee30d98ab01aba1de2badc23dbc1798e8806d7ea436ce85ac7aeb539da8cb08352bd54d42d3e16da8935f21584411cbfafbb75f80775dc5abc78040000",
    ],
    [
      "ETag",
      "SijX4tt0eASqEaM8lyQEFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92416f82401085ffcbf48a8928a29278d0d65a13a58a78308d312b0c8a0596ee2e35c4f8df3b4bad6dda26ed0566866f96f71e9ce039ce4270601bef5e0a14e5cd0ed55c171eca2251926e39cf248201a8d88ec8aee8ae9ab86cbb817f288fab91d9406cce7b3d2264b0c79481738228c62494e03c9d206329d25ac09322cd365567802a733d5cf8ded81d519ff250f7ee7232e90f2643381bd7c59029b6a9f87facadcf061cf8d6c3080566016a2db9e0070cd458db942ccd13ac495e8800255470f56027789133c1798d26b556ab66da0dbb63b6eba655b7ba04263c602ae619b1cb05e903c5154b3c7e2497601320aa920c47d5f595c6715819d1e5d8f56dabd2f7152069519ce0e66f90f4ee197d860fec12c1778ea5bcc8d495ba9f3cf67f3b8e32fd3ceaaeef0f7f1052515257c41f4f870bbf3f9d696e7df13e2815ca99e014a4449da159b73aadb65d7f8ff596eba8e93d8e12051a1030fa3b1e62054ec41289e7374c1a7c577b020000",
    ],
    [
      "ETag",
      "9r9Y3eU7NcTjywYG12ee3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85547f6f9b3010fd2accfba7d5f20368802452d46529eb9052d212d2aa9aa6c480215e01536c326555befbced0b44db7b51212d8f7debd77e7330fe88ee6111aa28026f71529b71f7fb200b5101138815d352937bf6fd6b6bebd22c9a770e0acddea7c3c1a01824a16c759919236675519123e5ccc3b49c9aa02978cb52151db30db9aa99b7dcd52b59eda1b008f93349ed2fc0ed86b210a3eec76f7da9d84b12425b8a0bc13b2ec69bfbbd1bb45c97e9250f0eea164175478f76dd1d394855850968f1673305071522e4986690a169e9951f0f9307587e2ac930078434382c39055b990b62045c8f2982655596745c30754db7cf181e6f6d49ef8ca64b670fda315ce247975ac60aeec172d650535c534254b1aad6464b92cee94afdeec0222e0608d39e12be5e69bedd98ab28ab0202be5c3483955c6ee9972c8765c65e1baf6dc578e4e8f95736fb6b854bedc1e60c07644b8a0796ddac7414aa4e1c7be3a7f9fa6246001269ae0d2524dacf5d54110075618f74f8c20564910f403cbc027811a0e7aa4170504034fc8ec350be72cd7a2181b018e42cd0c3403ab96a5f6070631cd28b6ccd8e85b8661c141e968d742bf4a2ac819e505e3b4692ebaf11cdf5efadec29d8c7dbb2e23c6552ace1a73b288973e051409a037eadac92865a0244fca717ddb1b4f7ce7da6e86634a121c6ee7f7301e314e3901342e714604292f58044d4397b3b9e33b33773c05467de2977b0447c3ef0fcf047f5bd45d16f51b9dc902762f125ee3b4aa019be603e9aaaeb655bdad1968b76bfd3fd3d8f3c6b7a08ecb126f5fc5a022b327e9ffd0a9f1f5aa71bad7d590547b7271b032d1eec70e9e1682dbd568a1ab85eddda266cb233129491ebe3f4f00ae03effe24f63716b0706741860b58c3f4865c8a842569a69866b5f947b63918e83aaac1a57815b354f564b03f2e9943662419c9c56345cd8daddb2643157f02411086cf75dc7388fe012ed1935931050000",
    ],
    [
      "ETag",
      "0grvzWhE2yQeg+c9IhNuGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d904f4fc24010c5bfcb78b48d94f0cf261cc4102121040a8889316429d35a683b7577162484efee6c359e3c78d99d7df39bc97b7b814356ee20846d967e58d4e79b1479ee8a088dcdd9c8555169103c4056a990e3e7ee5defd6e2c92e3e5f66eb6839c2f56adeef0b61e2772c1484174832cc7706c2d70b94aa40195305d99205e273e5dee3e972f8348c442868e784e96a3279184c8670f57e87369beaf0af91b7ab077bda4698a0c63246e7a1d2b4c798c72e9e514595a36fc8ea180dd470dd4835d94a69225f14bfddf1834eb3d30bba8da0d568dd0b9853ac38a352d8d542bc0113ab3ca293a483a600ba2e2568529f4791db7586630d386b7ff702d77bfb593838339a99267167d0196bf51adf361fc9596789c4daa207b1925f1e650c61a27283d72fe074b92cc3010000",
    ],
    [
      "ETag",
      "IV7/8+uewuSxXPWRTHeWUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dd04b7282300000d0bb642d8ec422d29d20844fd1d2417e1b06625a086a204081747af73a3dc27b3fa0c098f47d3eb0863cc02b580aa8adf1da6bf7ba71a844e47e632b0a7da4f8417f3bee328897fb4c591e277d758c99ac8e34478e4260278c641c5b73bed8d7623b50d1bfa96936672183d721a25cd1a743ac3f027bef6eeab2b327472a1b99a34e82fe55a29afc328da70bb620a15ef3ae3629dfdd61e37cb02f299af74627d88e8f6ae857895f4b4513c4e8d3b7b3b3774e19a5e70909ea6af0e695ce83d6a9046f4298d590cd085986d9ddbb41de9c2286c10a90b9ad39e9f3fac9dd2a9ab602fff67c585af20cd049c10907bf7f011d93d11a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-57-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fdb3014fd2b91f74adba46d9a52a91a5d09a3529b8e3405c13445b67b130c691c62a70ca1fef7dd3894c126c1536cdf73ee39f723cfe45ee41b32224ca40f15944f5fee24234704344df1f5c6cf6e361757bbe4dbefc5f57dae83f5c44d2fc66344889aa5e8b6c8a0a564557250a3f5aa9d96b22a6829650b13b55cafe50cba83a1e3d94edfee1f234f4196cc457e8fec5bad0b35ea740edaed54ca34035a08d5e672fbfaded9753b4529ef806bd5792fd94115d5f958f46b2639d542e6e3f50a0d540aca18b6546468e12f73c34edea76e0bba6da708de090e947359e5bab68529b8cc139156a5c94a46cfc4d87c73202b7fee4f238bcbacdae6714eb770646da8a6b17e2ac03a0b970b6b169c2dc3c5249a2d8378353df71793f674395f2f82957575ee87bea529cbc070adb175626e015e507f034a8bdca847f573adfcd2a0d9ff63a90928ada009c69e3da0ced03e6609f37832ecb92cb181b121f35cda63363fee437fc38022cf881a16cdb1668f32180c7ab19b7493b86f3b83980e5837e68e4b19ed790ef738d91f91c752683815aa904a341d2257e12cf2e3285c07d349e49b12125a65fab4315617f0d6a3c60211f4414dfb3a2a242ad5ed9e05911f4ea6d1ecd26f263c8794f2a7d503ce38a1990244d3129ba7a15cc80d368c0493857f8a6033b11f87a022a39fcfa4ee79ede24dcb5fe9110eb0b6abcd97aca270167c37760e884b9a5506b26b0ea440cbb7581bbadeff42242e6993855cacfdf09a344f21245042ce3f9f26824de0d37fedb0f888c5d54719a5f18ebbc3552dc24b68764898720f6ccf1e7a2e31e052ff1b736cdb3d74adce5167842de4faa5a266f1b1d046ac52af200ce2f803d3adfd1ffe4e1ce078040000",
    ],
    [
      "ETag",
      "ZElZdQWvfBxMYkntNUA5gQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85df657a0b09b68896c40b6d6d25c19f2aa6178d312b0c8a024b77171b6a7cf7ce526b9bb6497b0333c337cb39070eb04bf2085c5825ebe7124575b146f5a08b29ca3255926e05cf258201a8d89ac8e6c8f7ae0a5bbd56d5782077fbc7b88afc974e8708196e3063e01e204e308d24b84f07c85986b416f2b4ccf265dd19a0aa420f67c1d41bdd539ff148f7a3b9ef777b7e1f8ec67931628a2d6bfe1f6b8ba3015bbe9a628c02f310b59642f02d86cad33625cb8a144dc94b11a2841aae1fac052f0b2638376962365b66c3b974da8d96d5b02dfb9ac094874c253c27763e237da0b862e994bf904b700810754986e3fabaa77112d54674e98d02c7aef57d05485a9ca4b8fc1b24bd1b469fe1033b45f09d63192f7375a6eefc71f7b7e328d3cfa36ebb41ff072115257546026fd89f05dde144738b93f75ea5504e04a72025ea0c1b96dd6eb61ceb3dd61baea3a6f7b84a946840c8e8ef18240adc98a5128f6fcf02e4bc7b020000",
    ],
    [
      "ETag",
      "5NLI3p4tzyyOHskvWfydLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85546b6fda3014fd2b99f7a5957824298180843a06699709020ba15d374d603b0e751b621a3b74a8e2bfef26296d59b7568a94d8f79c7bcf7de501ddf224441d44f8f22e63e9f6e38d20a88298c24bb81d92a13f1d1a83b3ed66e37e0defef7f4797df7bdd2e2078ce9278b58e59558a2ca54c7666d3da3215d91aa74254c151d5b2ab46d36cda464b371a7aa30d3cc9e268c8935b605f2bb5969d7a7d1fbbb614621933bce6b246c5eae9bebe31ebeb54dc30aa64fd30641da2c8fadb414f6341b1e222e9cea62020932c9db315e63148786686e4d3a1eb1ac7abda12c01b4e19a6546489ca65810b2a92882fb3b4f08a3a0fa890f9e2034d9da1d30fb4fe78e605470bbccac98b630d4b6d7fa8680bc829e2319bf370915be6f3f5ad76e68f47600105d75832b9d02ebf38bea3690ba940dd42fbd0d54eb59e37d00ee9aea7cd3ccf9906dad1e9b176ee8f6713edf3d5010674874c2a9e14aa034c62962b7e2cacfbba9d39012b50511ae72dbd890d5b6f9388b468649f5824d21921366959f884e8b4dd608d90300c3c957b2f5838110931a3a86d4561bb65ea61dba2ba65850dc3a0c436492bd21bcc20ac79422db4aba0fb942b36e0722d242fab8b2e7d3770e6813ff3fabdc029d2887016ab41292e4fe2a54e054902e88dbc76b9950b8894b7caf502c7eff503f7c229a763c896986ea777301f118e2503344ef18a29968e4408454393f1d40ddcb1d71b02a368f9648f90a8f3f3e199106cd7459555f146813b821ef5469342c31e7481e3ac406dca0f64eaa65ed5cdaa610586d9314e3a46a3a6ebfa0fb4db55feefbce7fbbd2b1084d3146fffb24192cd464eff47d4025f9c4af17b1506caa33d693a3835d1eed70e9e0a828d2b63a16f33c7bf42e595cf2296b284be3f62002e0ceffe38f65b0c58d86308031ba1380c349579109ab272b0f9aa10ffc86e194ddb44053855af6cb66eef3b98fbc83db2154bd46346e5161765cb4d997c028111e6d173bd73b0fe010bd18d1645050000",
    ],
    [
      "ETag",
      "LbLRSL1DFyvvIJdwwxfWXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d904f4fc3300cc5bf8bb9b6523bed6f250e2b1a30691ad0b10b689ab2d62ddddaba24ce609af6dd710ae2c4814be23cff6cbd97331cca2683087665f16e519fae0ae4275724686cc546ae961a83e001b22a840cd7f128983c64abac485e3ef9362e87564dafaf8530e91bd60aa233e425569981e8f50c8daa51c6544db66181f8d4baf77cf93cbb9b2522d4943961b95e2ca6f1620617ef7768bb6d0fff1ad95c3cd8d32ec11c3536293a0fada63da63c77f18caadb0a7d4356a768a083bb46a1c9b64a13f9a2f883b11f0e7bc371380ac27ed09f085851aab8a446d8f54abc0113ab2aa10f49073d0174574ad0bc3b8f220fba0cc70e70d6feee85aeb7f959189f18cda3267167d019eb8f836f9b37e4acb344626dd18354c92fdf970c51ae2a83972f7338dc78c3010000",
    ],
    [
      "ETag",
      "1UB709OdSdgRZxtFBi6uaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dd0db7243401800e077d9ebc838a5a9de392454248276a81b83fd9db6d8da1064faeecdf411beef81d23c07c6925b4fa0436f684945659b6f4ff455d3d5265edd9ed996bef3dd95ffa4a41be7d013a759a0e50b0751d772d9e5478f6b873b7b0e3ede406dc4807723f363ef643114e76f39c432cee72b39e66c34545289d1c0847743902373be14a3a40b4492b84330715d0ec684cbb66d2d4d2a07cf49efb682d5d50b4ec62438d783e14401b156b986acc24bb887b1f02e35b1cf16dbcbbdd07c2d7661f8e3dc2819d178d3c5ba489a8486cabdaf2c6afb6210a10d8299d603b0a47e72a59da26cd0bf3db92d149e011aa4030ce8f70f39cc78ca1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-59-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fa34014fd2b64f6d5b650dad23669d6a6a2926da94ba966b3d99061b8e028302c33688ce97fdfcb605d8d893e3133f79c7bcefde099dcf332217312f3ec6f03f5d3b73b119313028a66f8ba91e5d5c5f891d9b73fdcb80a67372bcf9b658b052278cb92b4a872e849d1d40ce47cbfeb67b5682a5a0bd1c344bdf1ac674d8693a9e598d6c81ccd9027214fd7bcbc47f6ad52959c0f0647ed7e26449603adb8ec3351bcbe0f1e8683aa1677c0941cbc971ca08a1c7c2efa3d178c2a2ecac57e87061a09750405e5395af8cf4ce2d3f7a9fb9c16fd0cc10f9c01654c34a56a6d610a26ca94674dadb392f933d136df1cc8ce5dbbabd060226f8a322a6901274642158dd45305c679b0dd189e7fbe0d36cbd0dbfad16e75e96e96fdd576bddff83be3e6d20d5c43d13807cd3516c6a9bef97841fd04a4e2a5560fdbe756f9a541dec7b1b4049496d00523c79c506b6acee23476583ab5c7716a421c4f63674cedd864b3118c921828f2b4a866d1126b9e38b3616ac5d1689824d1c8013b9a261644a69598e394820db64d0e27e4b1e60aceb8ac84e45d87c84de0856e14067b7fb50c5d5d424a9b5c9d75c6da02de7a545820823ea9e9d046b940a5b6dd9e1fbac172157ad76e37e13564943dedfee28c539a4b4034adb1790aea8d48b061c45f6edc3304eb895d1d8392cc7f3f93b6e7ad8b372d7fa58738c0d6aed25fb20b03cfbfd0768e886b9a371af2d01d4885966fb136747df883485cd22e0bf9b977835fa47b0a20851a4af6f53411ac035ffe6bc7c5472cae3eca488577dc1d265b115643b7435c977b643b43c79a100daed587d8743c3c76adcdd16684024af55251b7f8586827d6c857100671fcbeeed6e11f5c4500f278040000",
    ],
    [
      "ETag",
      "MsnPG5wc3hKEbpT9WCII9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92414f83401085ffcb789426602a5a921ea8ad8aa1555bbc689a660b034581a1bb8ba669fadf9d45ad464df40233c337cb7b0fb6f094570978b0ccb37583727390a1be35c514555368c5b79a2a8560016a91317978bf0cae56ebe124bbb6c90f5f9c51245759bfcf848a57580af0b690e658240abc872d54a2445e8ba968ca6ad17616e84d6d86b3681a4c2eb82f2931fde42e0cfd4138829db55f4c84168b96ffc7da7c67c1232da798a2c42a46a3a596f488b10e8c4d25cabac08ea246c6a8a085db0799a4a61692a8c393ce71afe3b847eea973623b5dbbdb63b0a058e89c2a66ef66ac0f3469514ce9855d82cb806c4b369cb6d7671ee7496bc494c12472bbadbeaf004b4bf302177f83ac7725f8337c60ef117ce744494da5f7d47978edff761c67fa79d4d08f463f08a539a93d1205e3d12cf2c737869bbf7b1f6c34aa1b491ca44293a163774f8f4f5cfb2dd6333251f37b3c2d1bb42016fc775ce61abc54140a77af8a0d3bcd7b020000",
    ],
    [
      "ETag",
      "+ZbIJhqDNgO0oALw1ETrhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85546b6f9b3014fd2bccfbd24a799017794851972634434a494a6055354d893186ba219862d329aaf2df77314ddaac5b2b21c1f53de79e73ed6b9ed18625011a209f458f39cd765f1fb88f2a884a1cc16ae079e1e54644e9c49bca76673abe193716d170080856b004dea631ad0a9e67848a81b7ac4519cf539c715e85425543af368ca6d16b74f5465b6ff78127681cce58b201f6bd94a918d4eb07ed5ac47914539c3251237c7b5caf3f35eb69c61f2891a27e2a59071551ff58f422e6044bc693a1b70403b9a0d98a6e318bc1c22b33f0bf9d96ae31bcad45007e62846242789ec8c21694203c09599467aa2a1a3c2365f3cd075a9a3373ec6ae3b967bb676bbc2dc8eb730d0bed1054b435f414b298ae58b02e32ab55bad1ae9cf93564c0c13d1654acb5dbefa6636a479af665a85d68237ba29df22d5bf36cdb5cbadad9c5b93675e6de42bbbc3bc180f1800ac91265dbc57e4c0bcb2f3b6bbd3fcf828025d82893abae6ee0464feffba1df2561afd5f1439dfa7ecfef7670cbd749bf4ddb814f31f064515db170c29346af0d87d1698538c0586f1a4137d07b0131822068913ef509e90621e985685f41bf3326e98489940b566e2fba752cd75cb98e678f47aea9da08711ecb4969ae68e2ad4f094d02e883bef6459671502acecab25dd3198d5deb87598ec78c4698ec968f3020218e050534cef0964a9a5df300360d2de64bcbb5e6f668060c75e68b0342a0c1cfe75782bb4bd52e4bf54657b3f9c835dacac101f203c7b9c23c951fa851eb00625ff97f9991e38cee401a6719defd9583760c45ff8782c2aba8b479544485da216a9e4406daffdac3534170b94a2d74e399ce1d2a971c1ad28c26e4f36102b04a7cfa8f385c58c0c2950519212186d125a21021192d47986d95f91776b7d5d15b488133f92e67748cc35915358a8a744b13f9d2517961d5b615a95c1c419084c9b32d7b0ad93fc5d1e0a330050000",
    ],
    [
      "ETag",
      "dUUfBksgpDUGt45GCQC1Pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcb78b48d2d92024d3888364a2444aa9c0c214b99d642bb5377a72821fc7767abf1e4c1cbeeec9b6f26efed09f6a5de420c9bb2786fd11c2f0ae4852b52b46dc556ae86b445f0005915422e2e1f0fc3ab6130fad4c920b91bed229a26c5782c84cddeb056109f202fb1da5a885f4fa0558d32a66a6a350bc4c7c6bda7f397e43e4945a869eb84f97236bb99cc12387bbf43eb75b3ffd7c8eaecc18e3629e6685067e83c34867698f1d4c5b3aa6e2af42db526430b1ddc350a436da30c912f8a1f057e18f5a2613808c27ed01f095851a6b8242decf259bc0113ab2aa50f49073d014c574ad0bc3b0f22f7bb0c870e70d6feee85aeb7fa59383932da2743e2cea23376dd0bbe6dde92b3ce12894d8b1e644a7ef9a164887355593c7f01b1b5f3b7c3010000",
    ],
    [
      "ETag",
      "Q+Kv8/809xnE7ED9j6oIEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dd0cb7282301400d07fc95a1c4514d29d528184d754c1229b0c0d7794221102f2b0d37fafd34f38e707659c43dbb2ee5e82406f68ca543ce773b73676e6f63be89ce00abecc9c1e476220f5506ba671f4f4737b23fb7b35b9d2eba058b883196fc8291aecb4b11282053dd815f9a05453c63aaf82549ea13af14cf4764a97b15a6d8331b9f8e5e373b157697f554c4be2f53449c1c3dce643be117499eda9c54a43f71fea298cdc276968733f3e2f2404057fd1dde433a9e9edca61d10087d42eae31bf79eb778dad3c5b787ad950f930ce4995e86641530b602bd00cc15817125a56bcb8ab35c633f46f67dd54c32b60079904897eff00f0816cdb1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-61-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95b6294d9f5235aa1258b63665490a9aa629b29d9b6048e3103b3084fadf77e3500642824fb17dcfb9e7dc479ec8ad281232234c647735548f5f6e2423470434cdf0f5c64f6f2f57c5150bf5b9f763f137fabee5170ff3392244c3527457e6d051b2ae38a8d936ec6695ac4b5a49d9c1449d51bfd31f1d8f26fdb1dd776c678a3c0579ba12c52db2afb52ed5acd73b68773329b31c68295497cbddcb7beffeb85756f206b856bdb7923d5451bd8f45bfe692532d6431df8668a05650c5b0a322470bff99093b799bba2be8ae9b21f85e70a09ccbbad08d2d4cc165918aacae4c56327b22c6e6ab0309dd95bb8c2c2ef37a57c405ddc19195504d63fd588275166cd696e79f6d82f522f2367e1c2ebfb9eb4577b9596dd77e685d7d7303d7d294e560b8d6dc3a31371f2fa89f80d2a230ea51f3dc283f37c87b3f968680d20ada603cb647b43fb1a72c65639e4e064396dac0d8848d8774c06c3e75c0491850e41951c3a205d67c4c9d74301cc68341da8f1dde4f62c6288fa78e3d4c8e47304d6c87ec8fc84325349c0a554a25da0e91abc08bdc380ab6fe7211b9a68494d6b93e6d8d3505bcf6a8b140047d50d3be890a894a4dbb3d3f7283c532f22edd76c22bc8287f0cef70c629cd15209a56d83c0dd55a26d830e22fd6ee2982cdc42e0e414566bf9f48d3f3c6c5ab96bfd0231c6063579b2f09a3c0f3cf8d9d03e292e6b581dcb70752a2e56bac0d5defff201297b4cd427e6edde017699f0248a182827f3e4d049bc0a7ffda61f1118bab8f324ae31d7787ab46",
      "8457d0ee9030e51ed86367609b3f55d34abf8b3983c9a16b4d8e2623eca0d0cf15b58b8f85b662b57a016110c7ef9b6eedff016bda9f2f78040000",
    ],
    [
      "ETag",
      "jNfkVLnWbStGIKAxTJUcPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92414fc2401085ffcb782d093550b00987a2a84d00b1142e8690a59d96e2b65b76b71a20fc77672ba25113bdb433d36fb6efbdf600cf5911830bab2cdd5628771729ea475304a82aae15dd4a5128040b50b394c8f9beed8c07419ba77be96c8379b0f3bb49daeb11a1a235e60cdc032419f25881fb748082e5486b91e0555e2cebce02bd2bcd701a06fef88efa5cc4a61fcf8643af3f1cc0d13a2fc64cb365cdff636d71b4602356012628b188d06829a5d860a47d6353b1bce4d850a292112aa8e1fa412a455532294483260dc76ed8cea5d3b53b4dbbd56c5d11c845c474260a626753d2075a68c603f14a2ec12140d625194eeaeb0b8db3b836624a7f1c3aad5adf5780a42519c7e5df20e95d33fa0c1fd82982ef1ccb4555e833753b7cf07e3b8e32fd3ceac60b073f08a529a93312faa3c134f44613c32d4edefb3b8d6a220505a9d06468375bdd76c769bec77a2d4cd4f41e57cb0a2d8818fd1df7990637615ce1f10d065f04287b020000",
    ],
    [
      "ETag",
      "Vz56NER5lgzr6qRVRyI8fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010fd2b962704686dd356a54025c40a649051922e4d40d5841a377533d3242eb653a943fdef3b3b0456c1d8c74991e2f3bdbbf77c77f6135eb07c867b78ca92c7828af5a7073ec5354c15496097868bc7b32ba7f9ebe0da5bc887d567ebdbf4b27f720208a6a324c99629ad4b5e8898ca5e386a2482174b2238af43a27ab75d6f75dbdda3d661b3d569768e214ed2743e60f902a27f2ab5943dcbaab81b09e7494ac992c946ccb3977d6bd5b696823fd058496b9bd20216697d4c7a9af29828c6f3937004020a49c5846684a520e1357236fdb29dbac148d64800bc62312571cc8b5c69599022e6f99c2585305971ef091b997f2cf0c81ed8e7013af74237d88b48a683a37d4424aa8c1a8ae04c7396d2099b45da33992c17e8abefdd800714fc2492ca08dd5dd9be8dd0c0bbb3fdbd08a0fb68e05cdbe814f5dd0bb49dc47151e8baf628407ba7fbe8d2f7c2213a1b6f6140fd8cce4991aa0ba2804169d5b372e9e8962a2a15809eebedbced32de682fe382297d52c70d6cbf7f1e38b77659dc014d48bc1e3d4279e7249514d044908c2a2a6ef88c42c8d01b3981e3b9fd0144988a0d2b84c4bd1f4faf01c17a49b54065fe9aabdb31fc15e096a48541acca05de691dece0cda6f6f7247ddfef8f81980841d6ef13bccb60f0c62a45568c2dacd92aabbd6575f1e67e035f0dc360965cf87b68fb635c6ef9744e05cd6343f041c90dd838fe79bfaa61072c8c3bd04805b6542c969a2416d4b8039619f1cfd18707ade3236cc042bdf1b55b4dfd26e4b3773dcf1c85c94f85e0c2a712064c9bc0268d1696434de0cda8e18c4a49129d26cce1249292694a911903f45275144588e548b70545c178684f4c6be0d69c91197854b7834c917b4877bc5aef6a63572b323aca46fd",
      "270df7655934c985e7da3055bf01aa0a66ab6d050000",
    ],
    [
      "ETag",
      "eUkqBHI0z5KOksjv+/JbGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9d93aec4b6f02ca1a1505c45e324c085641b684cd4effbd4e3fe1bd1f90614c2845ac29490d3ec19209fa1aaffd5633cccd4dd02bda852865194ad5abf5e05d6b0b059e5faac26a169c8d55088f27c30be95758a7fafe7b18b9c284bdb973556951347b18f03196c6f45ca14e8ba654d438d439be169c38dbf21c51c591df14cf11f77d14c2ba2ce40b74615e251bc5658fb1487cbb3159f02104f3545bb72d538227ffa2b994cb71c6455ef99a2f3b11437f4a54233933813a75771c1d1417a5e979114edaab0f0fcbd4f292a41ef66005c8dcde7b42d1fdcd15655d5f817f3b624b4bde0106c97ad283df3fda8d71ef1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-63-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6f9b3014fd2bc87b6d1292904022456b94d0355a4256425aadd3848cb950b78029369dba2aff7d17d374ad2ab50f08ec7bce3de77ef044ee7811932989787a5f43f5f8e55644e48480a229de7e5f0ecea39be22fbbba5e2fce92ebfcdefa9e5fcc6688e00d4bd2bccca023455d3190d3fdae9b56a22e692544071375c6c34e7f3c183b7ddbec5ba635419e842c59f3e20ed9374a9572daeb1db5bba9106906b4e4b2cb44fe72df7b18f4ca4adc0253b2f756b2872ab2f7b1e8d74c30aab82866fb1d1aa8255421e4946768e13f338e4edfa6ee729a7753043f700694315117aab185299828129ed695ce4aa64f44db7cf54176eeda5d040613599d17614173383162aa68a81e4b30cefcedc65879675b7f330f565b2fdc2dceddcdbcbbd8aef71b6f675c9dbbbe6b281a65a0b9c6cc38d5270f0fa81f8354bcd0ea4173dd283f3768f57e2c0d01a525b4c1d036c7b4ef989328896c9638c351949810454e648fe83032d9c4022b8e80224f8b6a162d44119b1348c67412da231b42cb1cc421658e154ec6937e442dc7b1c726399c903f1557b0e4b21492b71d2257fe2a70c3c0df7b8b79e0ea12125a676ad91a6b0a78ed51618108faa0a64313e502959a76afbcc0f5e78b6075e9b6135e434ad9e3ee1e679cd04c02a26985cd53506d448c0d23de7ce32e11ac27f6e3189464faeb89343d6f5cbc6af90b3dc0013676957e935de0afbc6fdace117149b35a431eda0f52a2e51bac0d5d1f7e231297b4cd422ef6aeff93b4573e245041c13e9f268275e0d37fedb8f888c5d54719a9f08cbbc36423c22a687788eb728f6c7b341af6890657ea5d0c9f63d79a1c4d46c8a150cf15b58b8f85b662b57c016110c7efe96e1dfe01adc6ed3178040000",
    ],
    [
      "ETag",
      "KD2HbhnzcWZLCFfZmq4KmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92d14ec2401045ff657cb424546bc1263c80a2620a42298989216469a7b0d076ebee5682847f77b6221a35d19776667a667bef6d77b0e6790c1eccf9e2b944b93d59a01e99224055a65ad1ad10b942b000355b10b95d9f3acdd76e3fb9cf1e797fa3781885c1a8d52242454bcc18783b4838a6b102ef690739cb90d6229196593eab3a0bf4b630c37118f406b7d4672236fd60e2fbed8edf85bd755c8c9966b38affc7da746fc14acc034c50621ea1d15248b1c248f78c4dc5b222c59a12a58c504105570f165294059342d4685273cf6bb67be636ed46dd76eace2581a98898e622277632267da08566692036e4125c02645592e1a4babed098c7951153f606a1eb54fabe02242de129cefe0649ef92d167f8c00e117ce75826ca5c1fa91bffa1fddb7194e9e751d7edb0fb83509a923a2261afdf1d87edfed070d383f7ce56a31a4a41412a3419da75a779d170ebefb15e091335bdc7d3b2440b22467fc71dd7e0252c55b87f0399cc83757b020000",
    ],
    [
      "ETag",
      "yk+48zEMfJmXiMwsiTcTRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85540d6f9b3010fd2bc853a556cb07e40342a4aacb12d6a1a6a423a451374d890193ba014cb1491555f9ef3b4cd336ebd64a4870bef7eebdb3cf3ca2354d43d4473e5ddd1724df7eba633eaa2122f00a561fbc8bee7aee63bde57efe799e6d723b1c6d07a7a780a0258be3248b499db3220f08efcfa68d55ce8a0ce78cd5a1505defd435bda5f73443d53a6ac7041e277134a6e91ad8b74264bcdf6ceeb51b2bc65631c119e58d8025cfebcd4dab99e5ec8e0482370f259ba0c29bef8b9ec52cc082b2f4743605030527f9822498c660e18519fa5f0e4b37284e1a2b006f68407010b02215a52d2811b034a2ab22975551ff11499baf3ed0d41a5b434f194e668e77bcc449495e9e28982bfba0a62ca1a788c66441c36599592cb2b5f2cd9d5c42061cdc624ef852997fb75c4b51c693b9e51e3f27a0d6d8beb0943365e08c94c352b6a3cc1cc79a7acaf1d98972ee4e6657cad79b030cf410122e682a3bf0b01f93d2fdd326db6f8fb6246001c2557261a83ad67aaae947be1144bd76d78f54e2fb3ddfe8e2b6af06668774429f60e089b2ba64e194a57acfd40ca3d7d33a5d35d43a3aa0a3764b575bba61b6a26e2fe89aa116c2a4ec6ae821a7828c28cf18a7d54ea3b96b7bd6c27367ce70e059b28d0817b11855e6ca265efb14d02480dee96b57662903a5f2d86cc7b3dcc1d0b3afad6a52c6648583edf41e6625c2312780c6394e8820f9250b61d3d0d5646a7bf6c4198c81218fff6a8fe0a8ffebf185e06d33b9cb42bed1d4736de75c1ad823ae715c48c8a6fa404738cb8ed06e57fb7f9981eb0e6e401ae739defe958376f44e49ff8784c4cba8b2b997d450a9b68f5a07918e76bf77f0d410dcb34a0bfd9859ee0daa965c12919ca4c1c7c3046099f8f077b1bfbb8085db0b325c400ca31bf05224c84935c23491e69fd886de363524c1b97893eb1ae6feacca1a65459290543c7554dd5db96d65aae0cf2048c2e439f2d8767f00f4ac3af03b050000",
    ],
    [
      "ETag",
      "wTK5kWba62R+ZGpvrIdDyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d905b6bc2401085ffcbf43501a3416dc0072da1b5b5d2a6150a45648d93b89a64b67b5144fcef9d4d8bf4b12f7b39e79be59c3dc35e361b48602dcb2f87fa7453a27df5870c8dabace14d51631002402b4a269f26445566c6c5a3941fd88b8c7bdeaae368c484c9b7580b48ce5048ac360692cf3334a2461e1335b9c632644fcadfa7f3f7f43ecd58a869e385f962361b4f66295c82ebd06aa5f6ff1a595e02d8d13ac302353639fa0c4ad30e733bf5f58ca85585a121a77334d0c2ad516a724a68a29095b01f8751bfdb1f46834e1477e25b062bca8595d430bb78e36c60c98a2aa323b7832e03ba3d72d1a25d0f2cf7da0e8716f0d1fe7addab17796ff9fbe0e464d1bc68e274067db07838f88979473ebae54a563b0c2017fccb0fd2425288cae0e51bf9b98182c3010000",
    ],
    [
      "ETag",
      "KBoolRsAfJiiXe31suMhpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dd04b7282300000d0bb642d4efd40a4bbf0ab4640402ce2261362f8a9881041e8f4ee757a84f77e00658cb72d11f70bafc02718e85c9db2e9b65e693a2abdabd31ae7162bc7b36318dc439dd947d9eda6f79ccc98bb46c22d625b3510b40b45d265b1a42e86c2c6f669b98dbf57af9d29b39d54aae96cec9b0c07dabcc396f42c056a081bed03dc9e0cb92cafdccf11ac21b1e642718ff13af6ef0f09cb7dae4a49546dd68bfd47e3c0d05f2cfd68ec1e583be4796cedc3f0927b230c6895ba66a433ea988948f64f54e18b88b3ab859ec366fc4ac7e0483d12f4069800feaa8b86b7a4787317b2aa4ec0bf9d88a1e6ef008dd38637e0f70ffa46e04a1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-65-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b64f6b52a288a9a98ad51da92286e11db6c361b320c173a2d329419dc348dff7d2f43356d9ab44fcccc3de79e733f78254fbc48c894c43c7baea17af9f12862724140d10c5f336e7a895a1787ebe1a3555f2fe7b756f07c3b9b2182372c49f7650e1d29ea8a819ceeb6ddac1275492b213a98a8331a76ac517f34b61cd3b24d7b823c0979bae2c513b21f942ae5b4d73b69773321b21c68c9659789fdf9bd77e8f7ca4a3c0253b2f751b2872ab2f7b5e8cf5c30aab82866bb2d1aa8255411ec29cf9b02cfcc24befc98bacbe9be9b21f8c01950c6445da8c616a660a2487956573a2b99be126df3dd816cdd95bb080d26f27a5f4405ddc38591504523f5528271156cd686e75f6d82f53cf4367eb45ddcb8eb7977b159edd6fed6b8bf7103d75034ce41738d9971a96f3e5e503f01a978a1d5c3e6b9517e6b90f7792c0d01a525b4c1c83147d41a9b93388d1d968e07c33835218ec7b133a483d864131bec24068a3c2daa59b410456c0f0613e827d198d141640f00a28965f7a391452d18db96c96220c70bf2afe20a965c9642f2b643e43ef042370a839dbf9887ae2e21a575ae96adb1a680f71e151688a02f6a3a36512e50a969b7e7876e305f84de9ddb4e780519652fdb679c714a730988a615364f41b51609368cf8f3b5bb44b09ed8af535092e99f57d2f4bc71f1aee5677a88036cec2afd25db30f0fc6b6de784b8a379ad2187f6404ab4fc80b5a1ebe35f44e292b659c8edce0d7e93f62980142a28d8f7d344b00e7cfbaf9d161fb1b8fa282315de7177986c445805ed0e715dee89ed3823d3211a5ca94f31c71e9cbad6e46832c21e0af55651",
      "bbf858682b56cb330883387e5f77ebf81f672715dd78040000",
    ],
    [
      "ETag",
      "gi0IdtMnvG5j1uGDAQ1RqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcbf868498a81024d78e0a656b9539e0c214b3ba5c56db7ee6e3184f0df9dad88464df4a59d997eb33de7b447784eb2105cd824db9702e5e16a8b7a668a39aa826b45b75c640ac102d46c4b64f6389b36ae3196fd6053efb562fb814ff6b3769b0815c49832708f1025c84305eed311329622ad05821769b62e3b0bf42137c3853ff7c677d4a72234fd78391c76bac3019caccb62c8345b97fc3fd656270b766233c7082566011a2db9143b0cb4676c2a96e61c2b4a14324005255c3ed84a51e44c0a51a149c5a957aace8dd3ac36ec6acdaeb508e422603a1119b1cb05e9032d34e373f14a2ec121409625198ecaeb9ec649581a31a537f69d5aa9ef2b40d2a284e3fa6f90f4c68c3ec307768ee03bc7525164fa42dd0e279ddf8ea34c3f8fea77fcc10f42694aea82f8de68b0f03ba3a9e15667efdd834635958282546832acdab566bde1d8efb1f684899adee36a59a00501a3bfe33ed1e0468c2b3cbd01f5e73be77b020000",
    ],
    [
      "ETag",
      "nKQP7+ehrDcb5C9h0JlOvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85540d6f9b3010fd2bc853a54e4b1348099048559725ac43cb4847606d344d893186b925986193a9abf2df7798a65df6d1494870bef7eebdb3cfdca35b5624688462967dab6975f7e286c7a883a8c419ac4e5fd16d34fc714db29ba8ee99442793eb6576760608d6b004de94393d11bcae0815a368d1cd2a5e97b8e2fc040a9d58d68961f52dc7b075c3d4cd21f004cdd3192b6e81fd55ca528c7abdbd7637e33ccb292e99e812be795cef6dfbbdb2e2379448d13b94ec818ae83d2f7a9e738225e3c559b40003b5a0d58a6e30cbc1c21333895f1f96ee32bce96600de32423121bc2e64630b4a105ea42cab2b55158dee91b2f9cb075ab83377126a9379e487c76bbc69c8eb971a16da3ee8686be82965395db164dd6456abf2567b1bcc3f40061c7cc5828ab576f5ce0d5c4d9bcdafdce0f83101b566de7b573bd7c6fe543b2ce5f95ae4fbee22d48ecf5f6a17c13cbad4de2c0f30d04342856485ea20c4714e1bf70f9becfd79b40d014b106e932b5bb7b0e1e8c3388d6d923aa78338d5691c3bb13dc0a7b14e862635939862e0c9a6ba62e182179633346cdb710c73a0278669013a3ded5b7adfb287fd74e090c130311298945d077daf98a453264a2e58bbd3e82af042771506913f1987ae6a23c5752ea7adb9a6895f7d4a681240cff4b56bb28c8352736c9e1fbac178127a9fdc76526634c3e46ef10d6625c5b9a080c615de5049ab0f3c814d4397f385177a737f3c03863afecb3d42a0d1e7fb27427857aa5d96ea8d1661e0f917cac01ef109e7b5826cdb0f7484cbf208ed769d7f971907c17809d2b8aaf0dd6f3968c7321bfa5f24145e45adcdbda4811ab57dd43f882cb4fbb283a783e09eb55ae863e4064bd42e0534a5152dc8ff8709c02af1dfdfc5feee02166e2fc80809318c2e118d08a9683bc26ca3cc3fb06dc7d475a4c095fc2337b04ff767d5d4682ad20d2de44347eddd55dbd6a46af10882244c9eaf8e6df713c31240013b050000",
    ],
    [
      "ETag",
      "D+evU9zXcgjUu/4c0cCXYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcb786d130aa42a0907340d9254a255121343c876196aa1dda9bb530c12febbb3c5108f5e7667de7cb3796f8fb02bcd1a469097c5678bf67055203ffb2243d756ece46ac8388400905521a4a1b7471c987c1ae545b28b55f5ad8b74321e0be1f407d60a4647d89458ad1d8cde8f60548db2a66a6a0d0bc487c6f7b3f96b324d32116a5a7b61be48d3c95d9ac029b82cad56cdee5f2bcb53005bca33dca045a3d17b682c6d51f3ccc773aa6e2a0c1db556a3830eee0685a5b651962814258ce3308afbf14d74dd8b86bde1ad801569c5251961172fe20d985855197d493ae80b60bb52826eba732ff2a0cbb0ef006fedefac7f99457eb6fc7df0eec0e89e2c893b87de58ef6cf29ebc7196406c5b0c402bf9e38792cffde90719c51e4fc0010000",
    ],
    [
      "ETag",
      "noXMe3nbG1bgEk6alzcgLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "41",
      "72",
      "82301400d0bb646d9d2a4243770262a142402c209b4c4c3f12150c0467804eef5ea74778ef0731ce4129dadfafd0a07734b2a539e7f34f892d7b5dd5e3b4febe0724c83723bc76e191b4816ccb454e7bff7126cad83685533471a179dbc8ec9b322774c27b5e60510d89b68b3ff284b5d5a17aa8287335bf2e214f8c645163cb92b76855ba1e31c2339cf6786a63cf3faf5ff4b4c3d98e0da758c0177ff1d3283d5e38ed96935693c0539a4e2f7636a4ee6a219c4686d868dfea966376233af89563b92491c2384cbd65a7d9110b3b2c98e9809aeee1e68a660806293a50543cb99a6e9a33f46fa7fd28e1196001eba043bf7f84676d1e1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-67-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6d0249492091a2354ae81a29212b9076d53421db18ea1630c526535be5bfef629aae55a5f609dbf79c7bcefde019ddf33241534478f6d0b0faf1db9d20e804318533785d6617f64343d3db9bd1afeb7d347caa1dfc74399b0182b72c898b2a673d299a9a3239dd85fdac164d856b217a90a837767a83f170ec0e1c6b605bf6047892e5e99a97f7c0be55aa9253d33c6af73321b29ce18acb3e15c5ebbbb91f9a552dee1855d27c2f69828a343f17fd9e0b8a1517e56c17828146b23a6605e63958f8cf4cc8d9fbd47d8e8b7e06e03da70c532a9a52b5b620051565cab3a6d659d1f419699b6f0e28f4d6de2232a8c89ba28c4b5cb01323c10ac7eab162c679b0dd182bff7c1b6ce6d16aebc7e1e2c2dbccfb8bed7ab7f143e3fac20b3c43619233cd3566c699bef97001fd8449c54bad1eb5cfadf24b83561fc7d212405ab22e183bd6180f5c6b4252e2d0d43d1d91d46284b8c419e15362d189cdec84300c3c2daa59b814e5d84ee960908ce35162e1d826891d9391338c2dd7a6ae9db8ee6942d0e104fdadb9624b2e2b2179d721741dac222f8e829dbf98479e2e21c54dae969db1b680b71e151408a04f6a3ab4512e40a96df7ca8fbc60be8856575e37e135cb307d0c1f60c629ce250334aea1798ad51b9140c3903fdf784b00eb89fd3c06259afe7e466dcf5b176f5afe4a8f6080ad5da5bf288c8295ff43db3922ae70de68c8be3ba00a2cdf426de0faf00790b0a45d1674b9f3821bd43d052c65352be9d7d304b00e7cf9af1d171fb0b0fa202315dc6177a86c4568cdba1de2badc23db998c5c076970ad3ec49ce1e4d8b536479b9115ac542f15758b0f8576628d7c054110c6efeb6e1dfe0176969b1978040000",
    ],
    [
      "ETag",
      "DgH4qucfhY5XWvT2zr7azQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:37:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92dd4e83401085df65bca549a995b624bda05a9584fe0834319aa6d9c240a9c0e2eea2699abebbb358ab5113bd8199e19be59c037b78caca186c5867e9738d627796a2bad3858fb2ce95a45bc54b8960002a961239422f3017c96c50df8f3b0fe579d4d9a14887432264b4c18281bd8724c33c96603feea16405d25ac4f3ba28574d6780da557a1884be3bbda1bee0b1eea70bcf7346de180ec66931668aad1afe1f6bcb83015bbef631418165845a4b25f81623e56a9b9215558e2dc96b11a184066e1ea482d715139cb768d2b27a2dd3ea587db3d736bbedee80c09c474c65bc247611903e505cb1dce7afe4122c02445392e1a4b9bed0388b1b23ba74a7a1d56df47d05485a92e5b8fa1b24bd1b469fe1033b46f09d6305af4b75a2aebd99f3db7194e9e751574e38fe414845499d90d09d8c83d099cc35b73c7a1fed14cab9e014a4449da1d9eef62f7a56fb3dd64baea3a6f7d84ad46840c4e8efb8cd14d809cb251ede003d4274d77b020000",
    ],
    [
      "ETag",
      "BeLS1UfO9uXE2Zn3c2yerg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "6f",
      "da3010fd2b96f7a5958000658c32551d6db32d1a049a8456a8aac04d4cea92c4c176a850c57fdfd98132d6adfb3c09899cefbd7befcee717bc605984bbf881c5cb828af58727fe802b982a12c36973b17abe18e716bb3d6dfbf5937a5cc4c5f2f9ec0c104cb32449f38456252f44486577ecd762c18b9c08ceab50a8daee541bed66bbd3f8546fb4eaad53e0499accfb2c5b00fb51a95c762d6ba75d8b398f134a72266b214f5fcfad55d3ca057fa2a192d6a1a4052ad27a5ff43ce121518c6767631f0c14928a294d094bc0c29e193d7c392c5d6324adc5005eb1909230e445a6b42d2811f26ccee24298aab8fb828dcd5f3eb06ff7edcb005d0ec76e703423a926cf8e1191681754d00c7a9ab3844e5934d399e9345fa0afde70001970f04824953374fbddf66c84fac35bdb3b9a49051ea150dff961a373d473afd0611dc74563d7b5fd001d9d1fa36fde703c421793030c3410d139291275451488286d3c2a3f1d7dab8a4a05a0edc89db7178d373acbb8604a37ebb881edf52e03e7c62ee7dba73109d7fe12263c2789a4802682a4545131e01105ca68e83b8133747b7d6098a18d760889bb772f7b42b0cea936a8cc3f0e9c0134d71b8cf06653f93bace779bd0994264290f56f39b0db6e69fa9e7d4392c2400cde44a58d5599c00dacd57651f3206ae3cdfd067e150cdb576ae1ebb1ed4d7079e4d13915340b8dc03b43356093f8e723da6d346061a74106f64231a95828b54828a849072c35e6b7ec4ebdd539c1062cd49bdcc7d38e7ef859f4c7cc56a330f5a9105c7854c20ae910d4a4f1c23298098baecd233870b9dc1ea5544a12ebf22e472951e123cb6224599c416d41d19c0b342fb250d3ca9d374744c4454a3385f415ca2e7add821af28b3ce742d1685f0500e573f103cf71bf1d7f",
      "de861793c0f6e1112a74d7e8769af7ba29d34a79d7ff6f1bf7e5e5683f5743d786ddfe095d682aa0d8050000",
    ],
    [
      "ETag",
      "2kvwBUp/iW96S030guguqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dd0c97282300000d07fc9d93a2c8d24bdb1585450c1bae185891016a1854920109cfe7b9d7ec27b4f409284721e774d457fc0079044c3f364eeb5c8b2cdc233f9c886bb7add4b643c1af5560d8ec8970e759437d323e6296c82a48284610f8607f2596eba5e047b1e29ca4164cbab9dd335ea5955444a284ebb2eb7bf2d74ecb5d574de4167bc40912cbfca065aeb344523967eaf2dd4fa9149981aeead26220a366a6ce5e68a4b32f912865db8ad59aedb95fe283344b08b225e64bbbb966aefe7612a72db174c5d150bc248d56f31358d895e42bf3302f7e85ec00cd0b12d19e571f9e2ea10e319f8b7c79d6ce92bc0a28451067eff00dcac62201a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-69-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6fda3014fd2b91f75a2014080109ad08d215a9842d09eda6698a6c7393ba0d711a3b9daa8affbe6ba774ed26b54fb17dcfb9e7dc8f3c913b51eec8943091df37503f7eba958c9c10d034c7d79bb88eb6835b7f99fbdf17e3f38b6ae9dfb8f3d90c11c2b014dd570574946c6a0e6aba8dbb792d9b8ad652763051c79b74fadea9e7f7c76e7fe80e27c853506497a2bc33d9b5aed4b4d73b6a777329f30268255497cbfdcb7befe1b457d5f216b856bdb7923d5451bdf7453f1792532d6439dbc668a05150a7b0a7a2400b7f993b76f6367557d07d3747f083e04039974da98d2d4cc1659989bca96d56327d22d6e6ab038983cb6091385c16cdbe4c4bba87136747354df56305ce79b4593babf07c13ade7c96a13a6f1e22258cfbb8bcde5761dc6cef54510058ea6ac00cb7566ce99bd857841fd1d282d4aab9e9867a3fcdca0d5ff6331049456d006d3b1ebd1beef4e58c6c63cf3072396b9c098cfc6233a602e9f0c61b863409167452d8b96b2a42ea35ee679a90fde281dba032f9d8c4790fa1eebc360e7326fec92c309f95d0b0d4ba12aa944db21721dad92204da26db89827812d21a34da197ad3153c06b8f1a0b44d03b351d4c54485432ed5e854910cd17c9ea2a68277c0939e58ff13dce38a3850244d31a9ba7a15ecb1d368c84f375b044b09dd8d7635091e9cf27627a6e5cbc6af90b3dc1011abbda7e499c44abf08bb573445cd1a2b19087f6402ab47c83b5a1ebc32f44e292b659c8b76d10fd20ed530419d450f28fa789601bf8f05f3b2e3e6271f5514669bce3ee706544780ded0e095bee918dab31748905d7fadf58df1d79c7ae991c2623eca1d4cf15b58b8f85b6628d7a016110c71fda6e1dfe003f5474e578040000",
    ],
    [
      "ETag",
      "hSrRU3j8Dg8XC7FHpD8h0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "10",
      "45",
      "ff657cb4242058a4090fa0a88d80584a62620859da2914da4edddd8a84f0efce5644a326fad2ce4ccf6cefbded0ed671168203f378f15ca0dc9e2c503f98c24355245af12da74c2158805a2c98acdfb9cdb0ebbe525657a7cdb5f7386a15ad4dbbcd840a96980a707610c598840a9ca71d6422455e0b2829d26c567616e86d6e8663df738737dca7149a7e38e9f73bdd7e0ff6d67131145acc4afe1f6bd3bd052b9a7b18a1c42c40a32597b4c240bbc6a612699e60455121035450c2e58385a4221792a8c2938addaad4ec33fba2d6acd61ad5468bc18402a163ca989d8c591f68d222f168c32ec1664096251b8ecaeb0b8fe3b034624a77e8db8d52df5780a5457182b3bf41d6bb14fc193eb04304df39915291e92375ddbfeffc761c67fa79d455c7effd2094e6a48e88ef0e7a63bf3318196e7af0dedd6a5423491ca4429361addab8386fdad5f7582fc944cdef71b42cd08240f0df711b6b70229128dcbf01a98a5a987b020000",
    ],
    [
      "ETag",
      "3KI7dBIxon3s+7kRXP9u9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "6f",
      "da3010fd2b96f7a5952801da51c6547594a65b34083409ad585581499cd46d12a7b6d30a55fcf79d1d2863ddbacf9390c8f9debbf7ee7c7ec10f2c8f70172f58f25852b1fc70cf17b886a922099c5a17b47dd5581ef6b3e7c5e18fcb7ce8f5eea3e793134030cd92242b527a207929422abb13bf9e085e1644707e00850e8e1b07cd76abdd691e379a478da34fc093348d072c7f00f69d5285ec5ad646bb9e709ea494144cd6439ebd9e5b4f2dab10fc9e864a5abb9216a848eb7dd1d3948744319e9f4c7c30504a2a6634232c050b5b66b4f8b25bbace48564f00fcc4424ac29097b9d2b6a044c8f39825a5305571f7051b9bbf7c60df1ed8fd00f5471337d89b934c93e7fb8848b4096a680e3dc52ca53316cd7566362b1ed085371a42061cdc1149e51c5d7fb33d1ba1c1e8daf6f6e6528147283470bedbe814f5dc73b45bc771d1c4756d3f407ba7fbe8ab379a8cd1d97407030d44342665aace890211a58d47d5a7a36f5551a900b41eb9f3f6a2f14a6719174ce9661d37b0bd5e3f70aeec6abe039a9070e93fc28463924a0a682248461515431e51a08c47be133823b737008619da788390b87bf3b22504cb826a83cafce3c0194273bde118af56b5bfc37a9ed79b4269220459fe9603bbed234ddfb2af485a1a88c19ba8b2f1542570136bb54dd4da89da7875bb825f0dc3f6555af872627b535c1d7934a682e6a1117867a8066c12ff7c449b8d062cec34c8c05e2826150ba516090535e98065c6fc9add69359a1fb1010bf526d76c75f4c3cfa33f66d61aa5a94f85e0c2a312564887a0268d1796c34c5874691ec18ecbc7f55146a524892eef72941115deb13c41922539d41614c55ca0b8cc434dab76de1c11919419cd15d25728bbe8750beac82f8b820b45a36d150054cfc50f3cc7fdbaff",
      "791d9e4d03db8747a8d04db3db69ddeaa64c2bd55dffbf6ddc5697a3fd9c8f5c1b76fb27c893bb4ed8050000",
    ],
    [
      "ETag",
      "/Fe6V0y3Cmwb3ZQnMRAjdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d0bb642d0e02a9d01d1f072c02151c01379904824511280918e8f4ee757a84f77e002e0aca18e2dd9db6e01dcc5831d6c5daef75cb366b23a1961720141e78b0e0f2f8e5de5af670e33bb1844cbd6cf14cd439e1623f47855c5253d15bef3ec261d724240b152922fcadf1f366a33e92e6ec4891986e31a42cd29ceaf94d357890fd59ec98eac7ce58d542dbb30e6f6292f0eb09ca1ff925d7640943fbc6d3b268f78506393c44f1846751996d2863215f4f9d2152342f219160f0e8b6e7dd79a8b2cf6cf01c8314ee34fb63504ec851b7c78b0e56808abe1e2843f58bab42c358817f3be2734f5f0116c5031dc0ef1fbf15cbca1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-71-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b91f7953ed257da4ad5e8da30aab5294b53109aa6c8766e82218d43ec0015ea7fdf8d431908093ec5f63de79e731f792677228bc8983091dc9750ecbfdd4a464e08689ae06bf6cba3d7f3d17eeedd973f1e9fceaf2e667e9a4c268810154bd15d9e4243c9b2e0a0c6db4d33296499d342ca06266a3876c31e740643db69dbbd766f843c0569bc14d91db26fb4ced5b8d53a6a3713299314682e5493cbddeb7beba1d3ca0b790b5cabd67bc916aaa8d6e7a2df53c9a916329b6c3768a0545084b0a322450bff99113b7d9fba29e8ae9920f84170a09ccb32d3952d4cc165168ba42c4c56327e26c6e69b03d9b84b7716585ca6e52e0b33ba83132ba29a867a9f8375e6af57d6c23b5bfbab69b0587be16676eeaea6cdd97ab95d791bebeadcf55d4b539682e15a13ebd4dc3cbca07e044a8bcca807d573a5fcd2a0c5c7b154049456500743a73da0f6b03d623173783cecf659dc06c686cce9d32e6bf3510f7a11038a3c236a58349359143b83b8cb2174fa5d087b0e74c211632c1c7606ed21efdbddbe1d91c309792c8486b950b954a2ee10b9f217811b06fed69b4d03d79410d332d5f3da5855c05b8f1a0b44d027351daaa890a854b57be105ae3f9d058b4bb79ef01212caf79b7b9c714c530588a605364f43b19211368c78d3953b47b099d8c531a8c8f8cf33a97a5eb978d3f2577a8003acec6af3259bc05f783f8d9d23e292a6a5813cd40792a3e51bac0d5d1ffe221297b4ce427e6f5dff9ad44f3ec45040c6bf9e26824de0cb7fedb8f888c5d54719a5f18ebbc35525c20ba8774898728fec61a7d7ed11032ef48758dfb18f5dab7254196107997ea9a85e7c2cb4162bd52b0883387ecf74ebf00fa1c5ef92",
      "78040000",
    ],
    [
      "ETag",
      "nKNaYD9yDNquBwxHWPCRlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2401085ffcb78b4249460d1261caa2262a022d493216469a750dc76eaee168384ffee6c55346aa2977666facdf6bdd7eee0312b12f061912d9f2a54dba3259a3b5b4c5057d268be9554680407d08825934ac95eb8b8591c675eb87ee9f75b9b9c3641b7cb848e57980bf077906628130dfec30e0a9123afc524abbc98d79d03665bdae1349a0cc23ef73925b60fef87c3e07cd883bd73584c8411f39affc7da6cefc09a16134c516111a3d5522a5a636c06d6a6167929b1a1a952316aa8e1fac15251550a45d4e049a3e3365cafe59dba9da6db6eb6cf1894140b9351c1ecfd94f5812123e4849ed925780ca8ba64c3697dddf0384b6a23b61c8491d7aef57d05585a9a499cff0db2de95e0cff081bd47f09d13395585395057c3dbe0b7e338d3cfa32e83a8f783d086933a20d160d49b46c1686cb9d9bbf7f3ad413d56c4416ab419bacdf6e949c76bbec57a41366a7e8f6f54850ec482ff8eebcc809f0aa971ff0ab1c091c27b020000",
    ],
    [
      "ETag",
      "rrlENbJb+i6NjzGG2vmovA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffc5546d4fdb3010fe2b962704487da1a5145609b102618b9626254d41d5841a37718321898bed802ad4ffbeb3d3001d8c7d9c54a93edf73f73cf7e23ce37b96c7b887672c7928a8587eb9e3335cc35491046e9d64311877e9a07bf844fa6d2b292e8f12f5747c0c08a6a324c91629ad4b5e8888cade78d448042f1644705e8744f5c376bdd56d778f5a877badce5ee72bc4499ace1d96df43f4ad520bd96b362bee46c2799252b260b211f1ece5bef9d86e2e04bfa39192cd4dca26b0c8e6e7a427298f88623c3f1e8f404021a998d28cb01424bc46c6b36f9ba91b8c648d04c08f2ca2248a78912b2d0b52443c9fb3a410262bee3d6323f3cd018f2cc73a0bd0993776839d90643a38dc4544a2caa8a1106a9ab3944e591c6acf74bab84717be37000f28b82592ca105dffb07c0b21c7bbb6fc37991cfba7854e50df3d479b896c178d5dd71a0568e764177df7bdf1109d4e363050414ce7a448d53951c0a2b4f2b83cda7aac8a4a05a075cfedf793c62bed655c30a5abb5ddc0f2fb67817d65950d766842a2e5e8015a3c27a9a480268264545131e0318590a137b203db73fb0e4498ae0d2b84c4bd5fcfaf01c17241b54065fef185e3f5836ec728a82057242d0ce6b13ce0ad56e3a0b38557abdadf13f57dbf3f0172220459fee1838234c5871c066fac5268c5d9c29aadb2da1b5617af6e56f0ab6158d0920b5f8e2d7f82cb2b9fcea9a07964083e69bb011bc73fdf59b5f48085b5071aa9c0968a45529344821a77c032237e1d7db4dfd933af5411a1defbf60ff4b7218f3ff4ac390a939f0ac1854f252c9936814d1a2d2c879ec0b7a386332a2549749a710e95484a6629456615d04bd751182296233d16140693a1355dcf1fdecf298951cc0b1d65fadc43e5d82b6bbb34b7b53023a79cd7ff9572533649739d7bae053bf61bbf90750283050000",
    ],
    [
      "ETag",
      "LgpMU6eM67waA2EguQ8gtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dd0db6e82300000d07fe9b3983890c1de848eeb404d91455e1aa8950996562857b37f9fd9279cf3043921b4ebb0e4356dc00798f337734dd6a1302c7bf763fbcef1917e062a84b1e4ef49511c025f2dc399453a1ff783e96b5629ef66e2c0f3de4730b1fc2feeeaed565334856d4a812657af764a7a8ad2234a659c5de198e5e379305190dd2f42b5d9243a292286ec68f10695849e56c6faa9c4d377e6c62e1538c7c3009dd65a5c8e702f1a79098b82345dc552076ba40f36c1a1e6169aafc6435be68d5ea3d1516ebde1c14a41dccd193baa118a7af2d0c10ad049dc5adae1db8bab6e4d7305feed58ce82be022c9ab7b405bf7ff4d36b211a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-73-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f771f491366dd24ad5a84a8048341d690a62d314d9ee4d30a471881d2684fadf77e350069b049f62fb9e73cfb98f3c937b516cc99430913dd4503d7db9938c1c11d034c3d7b3c1d9f9cd9d1dc0f8eb0fc7bfa66a35da5497b3192244c3527457e6d051b2ae38a8e966ddcd2a5997b492b283893aeeb0638f0763cf76fbb6d37726c85390a717a2b847f6add6a59af67a07ed6e266596032d85ea72b97b7def3d0e7a6525ef806bd57b2fd94315d5fb58f45b2e39d54216b3cd1a0dd40aaa047654e468e12f73cb8edfa7ee0abaeb66087e141c28e7b22e74630b537059a422ab2b93954c9f89b1f9e640d6fe85bf882d2ef37a572405ddc191b5a59a26faa904eb345a2dad203c5d45cb791cacc264bd38f797f3ee6275b159866bebfadc8f7c4b539683e15a33ebd8dc42bca0fe16941685518f9be746f9a541c1ff63690828ada00d266e7f4c6daf3f61297379ea0d472ced03631e734774c8fa7ce280b365409167440d8b16b2d8c2d071fb233b713cd7491c6e4f128f392c01cc42c1e5de64c8c8fe88fcae848613a14aa944db21721d05b19fc4d1265ccc63df9490d23ad727adb1a680b71e351688a00f6ada37512151a9697710c67e345fc4c195df4ef80232ca9fd60f38e394e60a104d2b6c9e866a29b7d83012ce97fe0982cdc4be1f828a4c7f3e93a6e78d8b372d7fa5c738c0c6ae365fb28ea3203c33760e882b9ad706f2d81e4889966fb13674bdff85485cd2360bb9dcf8d10d699f2248a182827f3e4d049bc0a7ffda61f1118bab8f324ae31d7787ab468457d0ee9030e51ed8de70e28d890157fadf98630f8687ae35399a8cb08342bf54d42e3e16da8ad5ea1584411c7f68bab5ff035bb80a1778040000",
    ],
    [
      "ETag",
      "G2GHYj1Ie6+Z4EWasO5UrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92dd4e83401085df65bc94c656912a492fa8a5daa4bf94ea85699a2d0c940a2cdd5d6c9aa6efee2cd66ad4446f6066f86639e7c01e5e923c041b9649bc2951ecce6254135d7828cb5449ba153c970806a062319117ce39eb76f2c749183e0dddd160e4c56cb36db58890c10a3306f61ea204d35082fdbc879c65486b014fcb2c5f549d016a57e8e1d4f77ac37bea331eea7e38ebf79d76df8583715a0c99628b8affc7dafc60c09a2f3d8c50601ea0d65208bec640f5b44dc9b222c59ae4a508504205570f62c1cb8209ce6b34a935af6a0debd2ba6934eb0db36ede1298f280a984e7c4cea6a40f14572cf5f8965c824580a84a321c55d7571a2761654497bda16f9995beaf00498b9214177f83a477c5e8337c60c708be732ce365ae4e54b73f727e3b8e32fd3caae3f8ee0f422a4aea84f8bd813bf59dc15873f3a3f7f64ea11c0b4e414ad41936eae6cd75d3aabfc77ac775d4f41e5b89120d0818fd1d0f89023b62a9c4c31b5b28138d7b020000",
    ],
    [
      "ETag",
      "/A+aFDnVQddWNEOMORgaqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc5547f4fdb3010fd2a96270448fd41bbd0964a8815c8b66825e9d204d44da8711337782471b11db40ef5bbefec105805637f4e8a149fefddbde7bbb31ff02d2b123cc40b96de9554acdffde00bdcc054911476a7f4f05b998fc4afd0e997ac5c1f1c79dd9fa3e36340301d2549beca6853f252c4540ec3692b15bc5c11c179131235fb56b3d3ebf6069dfe41c73ab08e204ed26c3966c52d44df28b592c376bbe66ea59ca719252b265b31cf9ff6dbf7ddf64af01f3456b2bd4dd90616d97e9bf424e331518c17c7e1140494928a39cd09cb40c27364b2f8b09dbac548de4a017ccf624ae2989785d2b22045cc8b254b4b61b2e2e1033632ff58e0a93db6cf0274e6856eb017915c0747fb8848541b0d14c199962ca3739644da339faf6ed147dfbb000f28b82192ca085d7db67d1ba1b17765fb7b1140f791eb0568ec7cb1d1091ab9e7683b91e3a2d075ed6980f64ef6d127df0b27e874b6858113247449ca4c9d13052c4a2b4faaa5a3dbaaa854007aacb9f3b2d378a3bd8c0ba6f4691d37b0fdd159e05cda5581c73425f17a7a07255e924c5240134172aaa8b8e009859089377502c77347638830559bd4088987df1f9e0382f58a6a81cafc3557cf32fc35e09264a541dc570bbcd339dcc19b4de3ef4946be3f9a01311182ac5f277895c1e08d5589ac193b58b3d55677cbeae1cdf506be0686e1acb8f0d7d0f667b8daf2e9920a5ac486e08d921bb071fcf38ed5030f581879a0910a6ca9582c35492ca871072c37e21fa307d6e07d1f1bb0502f7dd640bf0b45f2aae791a334f9a9105cf854c2806913d8a4d1c20aa809bc1b0d9c532949aad384059c4452b2c8283263809eaa8ea208b102e9b6a028984decb9690ddc9c53928047f52c648a3c44bae3f57a571bbb5a91d15135ea3f69b8aecaa249ce3dd786a9fa0d73c72ca871050000",
    ],
    [
      "ETag",
      "Se5ZumArzUI7uiuy09O2xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d4",
      "4b",
      "72",
      "82300000d0bb64ad0e1a51d29d7c44115a51060b9b0c4262827c82a025747af73addf706be43bc6f90a429695bdcd5575281372093199aa4939dd07463c5b4601a946711376785d6a674603f2eef76ed1dab0764c5a3355b03f39209b665510953435ad37cab737fe9f1fbf54be288abb3e1e826285f70e1640d76167e852c7fb72c03a98607bd0a0b8183f7d37008761b6fd892750e3b26f05c199b7ce1c6bd8de8dca4973dcb8ec87af074bd29cadaa19d401738a37aa55cf7534d2beca5d67a55d3996cbe92f433cca43540d32031a46e9e9ce4471ce9f65af1262f2f2fff0323407ac16fa4c5fcf90154111a81bf1c702705790ea193e4466ee0e7178b7bcf443b040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-75-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d6f9b3014fd2bc87b6d12a721098914ad514a57d4842c405a4dd3848c31d42d608a4db2a8ca7fdfc5345dab4aed13b6ef39f79cfbc1337ae4458ca628e2e953cdaac3b70711a133c41449e1f5e676bfd9e4f8e1c6e7f7fbbf6e60edc47e339fcd00c11b96247999b18e147545999c6efd6e5a89ba2495101d48d4190f3bfdd1f9c8ea8f71dfc4e604789265c992178fc0be57aa94d35eefa4dd4d854833464a2ebb54e4afefbddd79afacc403a34af6de4bf64045f63e17fd9e094a1417c56ceb83815ab22a6439e11958f8cf8ca38bf7a9bb9ce4dd14c03b4e19a154d4856a6c410a2a8a84a775a5b3a2e933d236df1c906f2fed45605091d5791116246767464c1409d5a164c695b75e198e7bb5f656f3c059bba1bfb8b657f3ee62bddcae5cdfb8bbb63ddb5024ca98e61a33e342df5cb8807ecca4e285560f9ae746f9a541cec7b134049096ac0d86633c227d0b4fa2241ad3c41a0ca304b328b2a2f1900c224c272633e38811e06951cd2205d46c46d88a07e330b1080e4d8ca3904c866688f1244e46636b48f0081dcfd0bee28a5d72590ac9db0ea13bcf09ec30f0b6ee621ed8ba8484d499ba6c8d3505bcf5a8a040007d52d3b18972014a4dbb1d37b0bdf922706eed76c24b96127af09f60c609c9240334a9a0798a552b1143c3903b5fd99700d613fb790a4a34fdfd8c9a9e372edeb4fc951ec0001bbb4a7f911f788efb43db39216e49566bc8ae3da0122cdf436de0faf80790b0a46d16b4d9dade2fd43e792c61152be8d7d304b00e7cf9af9d161fb0b0fa202315dc6177a86c4468c5da1de2badc13db1af6477da4c195fa101b60ebd4b526479391e5ac502f15b58b0f85b662b57c054110c6efea6e1dff012776b27f78040000",
    ],
    [
      "ETag",
      "KVwQQm0jKSihwxNT8vowQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92414f83401085ffcb78a50955a495a48756ab36c15a5beac534cd16068ac20eee2e6ad3f4bf3b8b5a8d9ae80566866f96f71e6ce121970904b0cab3c71ad5e6204373638b29eaba309a6f15498de0001a913179abc2a3cefc66f21293941751f7f6fa39c3acd76342c76b2c05045b48732c120dc1dd16a42891d7622aea522e9bce01b3a9ec70164d47e30bee4b4a6c3f9e87617f100e61e7ec171361c4b2e1ffb1b6d839704fab29a6a850c668b5548aee3136236b538bb22ab0a5a956316a68e0e641a6a8ae84226af1a4d5396eb5fd43bfdbeeb86dcff54e182c28162627c9ec7cc6fac09011c5949ed925f80ca8a664c369737de2719e34466c391a47bed7e8fb0ab0b4342f70f937c87ad7823fc307f61ec1774e94544bb3a7cec3ebfe6fc771a69f479df5a3e10f421b4e6a8f44a3abe12cea5f4d2cb778f73ed818d413451ca4469b61dbf5bac71ddf7d8bf5946cd4fc9ec0a81a1d8805ff1d97b981201585c6dd2be41fac777b020000",
    ],
    [
      "ETag",
      "VrL37UQPxconnGT8VOwgeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "81",
      "6e",
      "9b",
      "30",
      "10",
      "fd",
      "15",
      "e4",
      "a9",
      "522b2521240448a4aacb52d6a1a5a423a455374d8921867a014cb1691755f9f71da6b4cdbab512129cefbd7bf7ec330f6843b3351aa180c6b72529b61f7eb100b510113886552b5637f7dfcfd3336b9285d3cdef49badedec6c7c780a0158be3344f489bb3b208091f2de69db860658e0bc6da50a86d1a6dcde81996667635bdab0f81c749124d69b601f68d10391fa96aa3dd89198b138273ca3b214b9fd6d5bb9e9a17ec17090557f7255550e1eadba227090bb1a02c3b5ecca18192936249524c1368e199b90e3eee97ee509c766200dfd190e030646526aab6a044c8b288c66521aba2d103926dbef840737b6a4f7c65325bb8fee10aa7157975a460ae34414b5981a788266449d7ab2ab35ce61be5b3373b870c74708339e12be5ea8bedd98a329d5dd9dee153026ab9335f993a5f6de54419bba7ca7e39c75516ae6bcf7de5f0e44839f3668b0be5d3f51e067cac091734932e7c1c24a472f0b8d1ceebe3ad085880789d5c9a5d036b56771844811946567f10445d120456600e703fe886439de8eb8060e089aaba64e18c6558d30d121846d433822e36421d987a7f1045036b3008fa86a919c650370768d742f70515e494f29c715aef36baf21cdf5efadec29d8c7d5bda88709988d3bab9cac4cb3e059804d01bbe7655963250aa8ece717ddb1b4f7ce7d2aea7654a621c6ee7b7302f114e3801342e704a0429ced91a360d5dcce68eefccdcf1141872042e1a0447a31f0fcf047f9bcb5d16f28de6bee7b867b281067189935242eeea0f74c00a9c1da0ddaef5ff3a63",
      "cf1b5f83362e0abcfd2b077e0cbda2ff4343e26554f7d9686aa8526ba2de5e64a0ddcf1d3c2d0497add642df16b6778dea258f44a42059f8fe34015826defd67341718b0708541860b886176435e898405a96798a6b2f947b665683d034970215ee57ae6b039acaa465591a424138f8eea0b2cb7ad4a95fc090449183d579edbee0f44786c7840050000",
    ],
    [
      "ETag",
      "8g/kwZMmG8CncLkxCmdyqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "904f4fc24010c5bfcb786d134a6ac1261c4489903444aa5c34842c655a0a6da7eece6290f0dd9dad8678f4b27fdefbcde6bd3dc3a16cb610c3a62c3e2cead34d81bc7087148dadd8c8d65263103c405685905f3b0e83c7fc2dd91d7554d9693a637d588c4642986c87b582f80c7989d5d640fc7e8646d52863aa26dbb0407c6add7d367f9d3c4d52116ada3a61be4c92fb7132818b771d5aafdbc3bf4656170ff6b44931478d4d862e43ab698f19cf5c3da3eab642df90d5191ae8e0ce2834d95669225f147f10f941d48f86c1a01784bdf04ec08a32c52535c22e5f241b30b1aa52fa9476d017407747299a77eb51e4dbaec3b1035cb4bf5e78f502e7ad7e1f1c9f18cdb3264967d0050b87839f980fe4a2b354626dd1834cc92f4f4b86385795c1cb3711e8fbd0c3010000",
    ],
    [
      "ETag",
      "zht41DfZLhvr6luHRItrkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "516e82300000d0bbf45b0c0e29747f5204420595a0023f044b314544a018a1cbee3eb323bcf7030a4a9910f9f8bcb3167c83b9f8424bba249d69e10d37ecabc877cdbeda9027f5e4f1503c638dca50957b2a5452f42208e03979a7abb27d6b91edb4c853ce196c0632665e6faff5baecb7d03ec0d1cdea1261c4ef9704f13cf75fdb5d92be2493caa9a70e89d3b08ba970664ec40d12ef8203a6da9e435aa50cea47644043f6fe26a89ae831a5249c7036cfa676ad9a359fcc8399c2b85e1d6d1c84baab79f861dd0689f7456cbd644c4237c2ab5639211f2c009b3a3e3091f30f57d3115a807f7b3ece1dfb0458ac18d8007eff00fd60a17c1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-77-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553ff4f9b4014ff57c8edc769a1b51668d2ccaee2d6a5a58e52cdb22ce4ee78e029e5903b74c6f47fdfe3b04e63a20909dcbdcfe77d3eef0b8fe4469429191326f2db06ea874fd7929103029ae6787bf635ba67cee2f23ebcca87cddfeb73fbf30f673a992042b42c45b75501874a36350735deac7b792d9b8ad6521e62a243d73dec8f0623afef3afda133f491a7a0c816a2bc41f695d6951adbf65ebb974b9917402ba17a5c6e9fefedbb815dd5f21ab856f66b491b5594fdbee8974272aa852c279b351a6814d4096ca928d0c27f66ca4e5ea7ee09baede508be131c28e7b229756b0b53705966226f6a93958c1f89b1f9e283ac8345308b2d2e8b665b2625ddc28195524d13fd50817516ad96d63c3c5b45cb693c5f85c97af63d584e7bb3d562b30cd7d6e5f7200a2c4d5901866b4dac13730af180fa29282d4aa31eb7d7adf25383e66fc7d212505a41174c5c6744fb9ee3b38cb93cf38e8e59e600631e738fe91173b83f8461ca8022cf881a162d6549dd6c941e7b69e20e98970cb9e7277e9f0f121f1838237f34cac027bb03725f0b0da742555289ae43e4329ac74112479b70368d035342469b429f76c6da025e7ad4582082dea969d7468544a5b6ddf3300ea2e92c9e5f04dd84179053feb0bec51967b45080685a63f334d44b9962c348385d06a70836133bdf071519ff7e246dcf5b172f5afe4c8f7180ad5d6dde641d47f3f09bb1b3475cd0a23190bbee835468f90a6b43d7bb3f88c425edb2909f9b20fa45baab0832a8a1e41f4f13c126f0e1bfb65f7cc4e2eaa38cd278c6dde1aa15e135743b244cb97bb6878f430cb8d66f6203e768dfb536479b11b650eaa78abac5c7423bb1463d833088e30f4db776ff0027f403eb78040000",
    ],
    [
      "ETag",
      "FBRwb0LWwNhg4uxjP/+J0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "657ca549311594c407b0d59260b51413a3699a2d0c94bab0b8bb686ad37f7716b51a35d1179819ce2cf75ed8c2435967e0c1b22c1e5b949b8302f5d41431aa966b45b746d40ac102d4ac2092bbb77118bf8c1f651aa8e95d34f58745303d3d2542a52bac18785bc84be49902ef7e0b35ab90d652c1dbaa5e749d057ad398e12c89c3c905f595c84c3fb989223f8846b0b3f68b19d36cd1f1ff589bef2c588b658c394aac53345a1a29d698ead0d854ac6a38f69468658a0a3ab87b5048d1364c0ad1a349cf757bb673e81cdb6edf1ef40727047291325d8a9ad89b19e9032d34e3b1782697e01020bb920ce7ddf589c665d619316538499c41a7ef2b40d2f292e3e26f90f4ae187d860fec3d82ef1cab445beb3d751e5df9bf1d47997e1e35f493d10f42694a6a8f24e1e56896f897d7869bbf7b0f361ad5b51414a44293a1dd1f1c1fb94eff2dd63361a2a6f7785ab66841cae8ef18971abc9c7185bb57d56be75d7b020000",
    ],
    [
      "ETag",
      "l7XRIRzHqrcBsQZLQADgBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85540d4fa34010fd2b642f269af48b16286d62bc5a398fb352a5a0f12e9776a10bae028bec62d398fef71b16abd6bbd3840466e7bd79f376677942f7345ba2210a68fc509262fde58e05a88188c031ac9e263f26449d1efbabf6ddd9eae7d856cd6c75797808085ab1384ef38434392b8b90f0a13f6bc5052b735c30d68442cdbed9548dae61aafd8eaa75b401f03849a209cdee817d2b44ce87edf656bb1533162704e794b74296beacb71fbbedbc60772414bcbd2bd90615defe58f428612116946587fe0c1a283929e624c53481165e99cbe0eb6ee916c5692b06f0230d090e435666a26a0b4a842c8b685c16b22a1a3e21d9e69b0f34b326d6d853c653dff1f61738adc88b030573651b349405788a6842e674b9a832f3797eaf7c73a7e790810e6e31277ca15c7fb75c4b5126d36bcbdd7f49402d67ea2913fbcc528e949173a2ec96b31dc5771c6be629fb4707caa93bf52f94e39b1d0cf858122e68265d78384848e5e079a3edbf8fb7226001e27572deef1858353b83200afa6164f6f420ea90203083be8e7b41271c68445b0604034f54d5250b672cc3aa6690c030a2ae1174b0116ac0d47a7a14e9a6ae073da3af1ac640ebeb68d340ab820a724279ce38ad771b5dbbb667cd3dd777c623cf9236225c26e2a46eae32f1b64f012601f481af4d95a50c94aaa3b31dcf724763cfbeb2ea6999901887ebd903cc4b84134e008d0b9c12418a73b6844d4317d399edd953673401861c818b2d82a3e1afa75782b7cee52e0bf94633cfb59d53d9c01671859352421eeb0fb4c70a9ceda1cda6f1ff3a23d71ddd80362e0abc7e97033f8656d1ffa121f132aafbdc6aaaa852db46dd9dc8409bdf1b781a082e5bad852e7dcbbd41f5924b2252902cfc7c9a002c139ffe33b61718b0708541860b886176435e898405a96798a6b2f967b6d91f981a92e042bccf99aaae6e0fabaa51552429c9c4b3a3fa02cb6dab52257f01411246cf91e7b6f90310c8c44c40050000",
    ],
    [
      "ETag",
      "GlJLe1OBUw/jKwZCI18nwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f4fc24010c5bfcb786d2345e45fc2410c516243a4c2c910b26c8752683bebee142584efee6c31c6a397dd9937bfd9bcb76738e4550a43d8e4d9478df6749321cf7d91a0ab0b767219aa1c4200c82a1372b79bd39cf5576c1677b7ae6f5fa6793ac84623219cde61a96078866d8e45ea60f87e864a95286baaa4ba6281f8647c3f9d2d264f93448492522fcc9671fc308e2770097e97d66b73f8d7caea12c09e36096ed162a5d17b3096f6a879eae339559a024347b5d5e8a0819b4166a936ca1285a284bd7e1875dbdd7ed46b459d56672060415a714e95b0cb37f1064cac8a843e251db405b04d2941b7cd7914f9bec9706c006fedefacf33b8bfc6cf5f3e0f8c4e85e2d893b87de58eb6af291bc7196406c6b0c402bf9e3e79caffde51b008101cac0010000",
    ],
    [
      "ETag",
      "hhQoQtcxLpT3/s8rKIid9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dd04b7282300000d0bb646d1d0509d25d090a1810048751374c8c51a2c500e113ecf4ee757a84f77e00a1944999b7e2c19ee0138c44b3a6748aaba58dbe0a78f29fb22346c2330ff11c8a39c5b16626ba7d7ff657e2a68975e5f1aea467cc9177a3b6c08173d7a11b8e9b83170ea3752ce3fd5541bc88eee5c359517ea843e56c30ee94ebcf2f41182fa48aa323d2a29bf912a84e7c6ba6a5af6ffc2133e4f42e37a26ebc148310595954b8e929266e7590736d500135bb21a1a9d9478df4e0baad93e204fdf36abbd6bdc745ed57cc21c14883ded8d6cb99800d9800a62ade3099f33757372c6b02feed793b56ec1d6033d2b006fcfe0162fc64741a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-79-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553616f9b3010fd2bc8fbda0448d24022456b9ad2355a425620ada66942c639a85b82293699b22aff7d8769ba5695da4fd8be77f7debd3b9ec8032f36644c129e3dd650edbfdc8b849c105034c3d773d76261b8f96eefcddbbbf3b0dc857fafbe5f4f2688e04d96a4db32878e1475c5408ed76137ab445dd24a880e16ea38a38e3dec0d5ddbb1ec813518619e843c5df0e201b3ef942ae5d8348fdcdd4c882c075a72d96562fbf26eee7a6659897b604a9a6f294d6491e6c7a45f73c1a8e2a298ac4314504ba862d8529ea384ff999be4ec6de92ea7db6e86e01d6740191375a11a5958828922e5595de9aa64fc44b4cc5707127a0b6f16194ce4f5b6880bba85136343158dd5be04e332582d8db97fb90a96d368bef2e37076e52da7ddd96ab15efaa1717be5059ea1689283ce3526c699bef97841fe0d48c50bcd1e35cf0df3b341f3f7636912905a421b8c1d6b486dd71a2569e2b0d4ed9f26a90549e226ce29ed27161b0d60b04980629e26d559b41005f42105b73f8a5ddab3e381e3baf1c839edc58995babdbe9382958cc8e184fca9b8820b2e4b2179eb10b90de6911747c1da9f4d234fb790d23a5717adb0a681d71a153688a00f7a3a34512e90a9b17bee475e309d45f31baf9df00232caf6e123ce38a5b90444d30acd53502dc5060d23fe74e95d20584fecc73128c9f8d713693c6f54bcb2fc253dc201367295fe92300ae6fe372de788b8a179ad21bbf6404a947c87bda1eac36f44e292b655c8f5da0b7e92f62940732b28d8e7d344b00e7cfaaf1d171fb1b8fa482315de7177986c485805ed0e71ddee31db75878efe5315add4bb986bdb47d79a1a4d45d842a19e3b6a171f1b6dc96af902c2208edfd76e1dfe0183c6b1cb78040000",
    ],
    [
      "ETag",
      "B80cSSdK1y/WhBSpvSzHKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcbe963b0a12354363f6059d9d04ab1d99a73573820065cbaf75239e77fef5c326bd5565fe09cc3732eeffbc2161ed32202179669f254a1d81c25a86e75314659654ad2ade485443000154b886c79cbb63fbd9b5957afc7cdd9fdbae3777ad2eb768990e10a7306ee16e214b34882fbb08582e5486b21cfaabc58d49d016a53eae124180f4617d4e73cd2fd68eafb5ecfefc3ce382c464cb145cdff636dbe3360cd97638c516011a2d6520abec6500db44dc9f2324353f24a8428a186eb0789e055c904e7264dcc56c76c384da7dd68590ddbb23b04663c642ae505b1d309e903c515cbc6fc855c824380a84b321cd7d7671aa7516d44978351e0d8b5beaf00498bd30c177f83a477c5e8337c60fb08be732ce755a10ed4b97fedfd761c65fa79d49917f47f105251520724180cfb93c01bde686ebef7dedb2894378253901275860dcb6e9fb41ceb3dd653aea3a6f7b84a546840c8e8efb84c15b831cb24eede00cf23f2517b020000",
    ],
    [
      "ETag",
      "7Ab8LUVX0Jx+2XYj9L9BsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd553614fdb3010fd2b96f70534dad052bad209b102198b28092429ac42a8751327f548e2603b4c15ea7fdfd969d7756cecf3a44acdf9debbf7eeec7bc18fac88711fcf58fa5451b178f78dcff01ea68aa4706a0decf866f6752cdb82742edfa7644e93cbefc7c780609a25495e66b4217925222afba3a0990a5e954470de80428dde7ea3d56d777bad0ffbadce7ee708789266c990158fc09e2b55cabe65adb59b29e7694649c96433e2f9cf73ebb96d95827fa39192d6b6a4052ad27a5bf424e311518c17c7a3000c54928a09cd09cbc0c28619cf3e6d976e32923753003fb3889228e255a1b42d2811f1226169254c55dc7fc1c6e62f1f38b087f65988cebc911bee4c49aec9d35d44245a077b680a3d252ca313164f756632291fd167dfbb820c38981349e514dd7db17d1ba1a17767fb3bd398280a755c2f4443e7d2462768e09ea3ed528e8b46ae6b0721da39d94517be37ba46a7e32d0cf410d38454993a270a7494f61ed79f8ebe5845a502d06aeaceebbbc64b9d655c30a5fb75dcd0f60767a1736bd7231ed294448be009869c904c5240134172aaa8b8e23105cab51738a1e3b9832130ccdcaed70889fbf72f1b42b828a936a8cc3f3e1f84365e2ef7fe8e18f8fe600c55891064f15b0e9c763b9abe61df92ac3210833751ede0b94ee016d66aeba8bd1575f1f26109bf3d0c6fafd6c23723db1fe3fac8a70915b4888cc01bf3346093f8e70aaddf3360e145838c54104bc522a94522414d3a64b931bf62f78e0e8e0eb0010bf52ad7393cd46b5fc47fccac342a539f0ac1854f25bc1e1d829a345e58013361f18d59812d974faba39c4a49525ddee528272a9ab3224592a505d41614255ca0a42a224dab5fbc392222ad725a28a4af50f6917e004d145465c985a2f1a600e4ea3d0942df712f763faec2d3716807b07d0addb7fabdf683eec774515ff37fd9c1437d2566213c572fc40f2cb3f1aacc050000",
    ],
    [
      "ETag",
      "/AEdQbXYs2ra4K+gahefKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dd0c97282300000d07fc9d9382ca5406f0a2d9b2c0614e4c220040b611382089dfe7b9d7ec27b3f20cd323c8e09ed086ec10758524ede665bab97f6caae341b63b0d4c4908f4334a39ce9429e868f0abb24f0d5059d44d629e39198e742e320ebdebfb8516158953ba44539df95636a7a48d555e1aa85b1c1d328b0df3dd1d6adea91e757668ddad61e2e509f66e7da34b08f2f742ea4aa96cfa8bad46df70cd67e9d9cb3267e933744a703b47a8d95636e5d615039cde27110854498db6eafb8aecb7f0a5ac193f1a4dfe04425c3316f4be6fb496b496c81ea346ac006e0675f0e784cca179717647903feed095d7afc0ad8e374c003f8fd038f56d2761a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-81-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc87b6d1292900422456b96d23552202d9076d33421e35ca85b822936ada22aff7d17d374ed26b54fd8bee7dc73ee07cfe49e175b322509cf1e6aa8f65fee44424e08289ae1ebd570ffc31f5dda83f545ce56a6ef7dbbba2db2d90c11bc6149ba2b73e84851570ce4741376b34ad425ad84e860a28eddeff4c783b1dd9f987dcbb41ce449c8d3152fee917dab5429a7bdde51bb9b0991e5404b2ebb4cec5edf7b8f835e59893b604af6de4bf65045f63e16fd9a0b461517c56c13a2815a4215c38ef21c2dfc656e93d3f7a9bb9ceeba19821f3903ca98a80bd5d8c2144c1429cfea4a6725d367a26dbe3990d05db98bc86022af77455cd01d9c185baa68acf62518e7c1da3396fef93af0e6d172edc7e1e2c2f5e6ddc57ab5f1fcd0b8b97003d75034c941738d9971aa6f3e5e507f0b52f142ab47cd73a3fcd2a0e5ff636908282da10dc613734cfbb6e924693261a93d1c25a90949622793111d2626732cb0b60950e46951cda28528c0b2cc64e4a431247d27b646e3416c0fc62c66746c6e8730010b801c4ec853c5159c71590ac9db0e919b6019b971146cfcc53c72750929ad7375d61a6b0a78eb51618108faa0a64313e502959a762ffdc80de68b6879edb6135e4146d93e7cc019a7349780685a61f314549ed862c3883ff7dc3304eb895d1e83924c7f3d93a6e78d8b372d7fa54738c0c6aed25f1246c1d2ffaeed1c11d734af35e4b13d90122ddf626de8faf01b91b8a46d1672b571839fa47d0a20850a0af6f93411ac039ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b64dbcec4d17faaa295fa27e698a6691fbbd6e46832c20e0af55251bbf858682b56cb57100671fcbeeed6e10fcbbf088878040000",
    ],
    [
      "ETag",
      "Q3yXN5P82OHlcL0NMBQhng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92dd4ec2401085df65bc2d09552cd8840b4040943f4bb932842ced148a6da7ee6e2584f0eece5644a3267ad3ce4cbfd99e73da033cc759082eace2f54b81727fb146fd680a0f559168c5b79c328560016ab166f2be27ae46fdf861d293d194527fbbe94cc7bb669309156c3015e01e208a310915b84f07c8448abc165052a4d9b2ec2cd0fbdc0c67be3718f7b94f2934fd783e1cb6dac32e1cadf36228b45896fc3fd616470bb6b4f23042895980464b2e698b811e189b4aa479821545850c504109970fd6928a5c48a20a4f2a0dbb623b974ec3ae57ed5ab576c3604281d03165ccce67ac0f34699178b46397e03020cb920d47e5f595c771581a31e560ec3bb552df5780a5457182cbbf41d6bb11fc193eb05304df39915291e933d51b4e5abf1dc7997e1e75dbf2bb3f08a539a933e20f46dd99df1a4d0db738796fef35aaa9240e52a1c9d0aed61ad775a7fa1e6b874cd4fc1e57cb022d0804ff1d77b106371289c2e31b319f8d617b020000",
    ],
    [
      "ETag",
      "JFa3MGiKOFrfPomTjhCPNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffd553ef6fda3010fd572cef4b2bf1a3a08a51a6aaa325eda2424293d00a551598c449dd2671b09d6ea8e27fdfd98132d6adfb3c8104e77befdebbf3f9153fb33cc23dbc60c9b2a462f5e9892f700d534512383d72ed1f4335b82d17e5c4bdf4af99bbb873be9f9e02826996245991d2bae4a508a9ec4dfc4622785910c1791d0ad5bbed7aabd3ee745b9f8f5ac747c727c093348d872c7f06f6a35285ec359b5bed46c27992525230d90879f676de7c69370bc19f68a864735fb2092ab2f9b1e859ca43a218cf4f273e18282515339a119682851d335a7cdd2fdd60246b24007e61212561c8cb5c695b5022e479cc925298aab8f78a8dcd5ffe60df1a5a1701ba70274e7030279926cf0f1191681bd4d01c7a8a594a672c9aebcc6c563ca34bcf1d41061c3c1249e51cdd7db33c0ba1a17b67790773a9c0231472dc000ded6b0b9da1be3340fbb56c074d1cc7f20374707688ae3c773246e7d33d0c3411d19894a91a1005424a9b8faabfb6be5945a502d066ecf6fbcbc66b9d655c30a51bb69dc0f2fa17817d6b55331ed284842b7f09538e492a29a089201955548c78448132767d3bb05da73f048619dc788b90b877ffba2304ab826a83cafce2c01e4173fdd118afd7b5bfc3fa9ed79f4269220459fd9603bb9d634ddfb16f495a1a88c19ba8b2f15225700b6bb56dd4de8b3a78fdb0866f0dc306565af8666279535c1d7934a682e6a111f860a8066c12ff7c48dbad062cec35c8c06e2826150ba516090535e98065c6fc867d029f0e3660a1dee7ba6dfdf8f3e88f998d4669ea5321b8f0a88415d221a849e385e5301316dd9887b0e772b939caa89424d1e51d8e32a2c247962748b22487da82a2980b149779a869d5de9b23229232a3b942fa0a650fbd6d4103f9655170a168b4ab0280eac9f881673b57875f36e1f934b07c78880addb77addf6836ecab452ddf5ffdbc6437539dacfc0752cd8ed9fdc749b8adc050000",
    ],
    [
      "ETag",
      "0OIxLtDVubuUOFSKiObWNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dd04b7282300000d0bb64ad0e8a40d25d422928d896a222d9301052091f8df2133abd7b9d1ee1bd1f9030c69b266eaf25bf801730262bb4600b574262e21c9a757f5a326f8a56766ad5d4472cbbe56d14ba291dbc32d76c7557da3a66d05324adb36d5fb1797b73554cbbc35e7fdfc5bab30d758ba964455921be1ee424912ab6151367167019ae0be721dc0dff24f17ca88c005522fdf66aeb9476b81d8e91e61c6c9cc9e4ad5f4316064537054a26e66849f3ca37d43d5e9f8be350da70f2f34e184d668e90be5e2fd3fef09149341c711fdea0e19344d9905d0b66803fa4b8f326164faeaa213403fff6b81d257f06109edcf91dfcfe01c47e519b1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-83-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c8fbda0608794bd19aa5748d14484748ab699a906d2ed42dc10c9b4e5595ffbe8b69ba5695da4fd8bee7dc73ee8327722fca94cc0813f99f06eac72f77929113029ae6f87abf09727b9d05579c7dbbf464bddedda5c37c3e478468598aeeab024e956c6a0e6ab6dbf6f25a3615ada53cc544a713efd41df5471377ecb8036730459e82225b8bf21ed9b75a576a66db47ed5e2e655e00ad84ea71b97f79b71ffa7655cb3be05ad96f256d5451f6c7a25f0bc9a916b29cefb668a0515027b0a7a2400bff99293b7b9bba27e8be9723f84170a09ccba6d4ad2d4cc1659989bca94d56327b22c6e6ab03d9fa6b7f195b5c16cdbe4c4aba87132ba59a26fab102eb22da04d62abcd844c1225e6dc264bbbcf483456fb959ef82706bdd5cfa916f69ca0a305c6b6e9d995b8817d44f4169511af5b87d6e959f1bb47a3f969680d20aba60327646d49d385396b131cf26de90650e303661e321f598c3a70318a40c28f28ca861d15296fdf1c0e1434613179c6932703924b44f27894bd3a1eb79238ff5337238217f6ba1e15ca84a2ad17588dc44abd84fe268172e17b16f4ac86853e8f3ce585bc06b8f1a0b44d007351ddaa890a8d4b67b15c67eb458c6ab6bbf9bf01a72ca1fb77f70c6192d14209ad6d83c0d7520536c180917817f8e6033b1ab635091d9af27d2f6bc75f1aae52ff41807d8dad5e64bb671b40abf1b3b47c4352d1a0379e80ea442cbb7581bba3efc46242e699785fcd8f9d14fd23d4590410d25ff7c9a0836814fffb5e3e22316571f6594c63bee0e57ad08afa1db2161ca3db2a7aee7f48901d7fa5d6c301a1ebbd6",
      "e66833c21e4afd5c51b7f8586827d6a817100671fca1e9d6e11f405f740c78040000",
    ],
    [
      "ETag",
      "kOMg/LfMPcbBH3orLUjd5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614f82501486ffcbe963b0492a1a9b1f30addcd40c71cdb5e6ae70400cb878efc566ceffdeb964d6aaadbec03987e75cdef7853d3c2779080e2c937853a2d89dc5a8ee75e1a12c5325e956f05c2218808ac544d6d943736ed7e7af9b730bd7bdee361f377b6ea743840c56983170f610259886129cc73de42c435a0b785a66f9a2ea0c50bb420fa7be3718df509ff150f7e3d970e876877d3818a7c59029b6a8f87fac3d1d0c58f3a587110acc03d45a0ac1d718a881b6295956a4684a5e8a00255470f52016bc2c98e0dca489d9ae9b967d61b7ad56cd6ad41a9704a63c602ae139b1b329e903c5154b3dfe422ec126405425198eaaeb96c6495819d1e560ecdb8d4adf5780a445498a8bbf41d2bb62f4193eb06304df3996f1325727ea7a78e7fe761c65fa7954cff5fb3f08a928a913e20f46fda9ef8e269a7b3a7aefee14ca89e014a4449da1556bb49b2dbbf61eeb15d751d37b1c254a342060f477dc260a9c88a5120f6f5d16bc187b020000",
    ],
    [
      "ETag",
      "3aW5Y63Yzq+1ejDBvnN5DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010fe2b962704687da15d57a0126205c296ad24254d41d5841a377183db240eb603ab50fffbce4e0b7430f67152a4f87ccfddf3dc4bf288e72c8b70074f587c5750b1f830e3135cc15491186eafcf667759633ecbf72f3f3ef8bf6873fa69f1fde1e808104c474992e609ad4a5e8890cace70508b052f722238af42a2ea41abda6837db078dfdbd466baf7508719226d31ecbe6107dab542e3bf5fa9abb16731e2794e44cd6429e3eddd7ef9bf55cf0190d95ac6f52d68145d6df273d4e784814e3d9d17000020a49c598a6842520e139329a7cd94c5d6324adc500be67212561c88b4c69599022e4d994c585305971e7111b992f0e7860f5ac531f9dba43c7df0948aa83835d44245a1b1514404d5396d0318b02ed198ff3393af7dc0bf080825b22a90cd0f537cbb310eab9d796f72293e3faa867ffb0d031ea3a67683399eda0a1e358031fed1cefa2af9e3beca393d10606aa88e89414893a230a9894561f95475b8f5651a900b4eabbfd7ada78a9bd8c0ba674c5b6e35b5ef7d4b7afacb2c93d1a937031b883364f492229a089202955545cf0884248df1dd8beed3add1e4498cef5d708893b3f1f9f03fc454eb54065def8bce776fd76cb285843ae485218cc7d79c05b8ddae7d6165e2e2b7f4fd4f5bcee08c8891064f1870f0ad2146f7218bcb14aa16bce06d66c6babb961b5f1f266094f05c392965cf8726879235c5e79744a05cd4243f04edb0dd838fef9adad171fb0b0fa402315d852b1506a925050e3f6596ac4afa20f9bcdf61e3660a15efbf675669a456f7a561c85c94f85e0c2a312964c9bc0268d1696414fe0ff51c1299592c43acd30834a2425938422b30ae8a9eb280810cb901e0b0afc51df1aafe60fdfd0098950c40b1d65fadc41e5d8d7d676696e",
      "6b61464e39afff2be5a66c92e63a731d0b76ec37f59f6f6787050000",
    ],
    [
      "ETag",
      "WDjqn1kjp7Q+wTxe2f3yJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb646d1c9ba090ee021d54504a058cba71681a91384a4cf8084eef5ea74778ef0972ce8531c7baba881b78077d8ec8988f43e5b81e3d07928429bbb6eb296dd25d2b3f8a0df3866ffb5ced32f5599a44e2a4b7e5faa77af357fc810ac6205da438eeda786fd96ce856f206dd83ebc3ad434c18e996e7a11fcc60c2068fc57b3e29bbb585ba5285e9d706c222bf36580ed0bfe36d8ae6cbc38d7121fae9ce5828a21cdfb1d2015616ed126dfc5370ea56f11e67c65e722761d73aa293cb8246ba99cfc9a94ad20671640b228b99df664e9d8111100f556a618ee58b8ba7848cc0bffd58f74abc025c916ba1c1ef1fc127b93b1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-85-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b5c13480a0422456b94d2952d212b9056d33421db31d42dc1149b565595ffbe8b69ba5695da276cdf73ee39f7832774cbab2d9a22c28bbb96358f5f6e04414788295cc06b3877da87cbe39f4bcbfad13a4940cdafe1f262360304ef5812efea920da4681bcae474930c8b46b4356e841840a281e70c46eed8f546136b645bb60f3cc9ca7cc9ab5b605f2b55cba9691eb487851045c970cde5908addcbbb793f36eb46dc30aaa4f956d20415697e2cfaad14142b2eaad9260103ad644dc676989760e13f734b4edea61e72bc1b1600bee794614a455ba9ce16a4a0a2ca79d1363a2b9a3e216df3d50125c13258a4061565bbabb20aefd891b1c50a67eab166c659bc5e196174b68e57f3345c4759b2380f56f3e162bddcaca2c4b83a0fe2c05098944c738d9971a26f115c407fcba4e295564fbbe74ef9b941e1fbb174049096ac0f6613cbc523cff2494e2634f78e1d925b8c108f4c1c7c4c2ceadbccde128681a745350b57a21abba3dc230ec97cd71b67b6efe419f1467636761ddfc74e6e539fa0fd117a68b862a75cd642f2be43e82a0ed3204be34db498a7812e21c76da94e7b635d01af3d2a2810401fd4b4efa25c8052d7ee304a8378be48c3cba09ff09215983e267730e31c9792011a37d03cc59a95d842c350345f05a700d613fb75084a34fdf384ba9e772e5eb5fc859ec2003bbb4a7f5192c661f45ddb39202e71d96ac87d7f403558be86dac0f5fe2f206149fb2ce86213c4bf51ff14b39c35aca29f4f13c03af0e9bf76587cc0c2ea838c547087dda1b213a10deb7788eb720f6c7fecb813a4c18d7a17733dffd0b52e479791ed58a59e2bea171f0aedc55af90282208c3fd2dddaff03248d5b1a78040000",
    ],
    [
      "ETag",
      "IA5uwV3KL00Ju5SEc/+ILQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92dd4ec2401085df65bc2d4951a8d8840b404422a29612638c214b3badd5ed6edd1f0d12deddd98a68d4446fda99e937db734ebb86c742a410c2b2c89f2caad55e8ee6ca15116acb8da65b258546f0000dcb893c7ebdb1429cd9516eaecfe607830b23789677bb44e8e41e4b06e11ab20279aa21bc5d836025d25a22b92dc5a2ee3c30abca0d6771349e8ea82f65eafae97c32e9f52743d878bbc59419b6a8f97facdd6d3c7890cb0833542812745a2a251f3031636753b3b2e2d8d0d2aa0435d470fd2057d2564c49d9a049a3d36e3483fda0d33cf49b2dbf7544209709338514c4ce67a40f8c348c47f2855c424080aa4b329cd5d7671a17696dc495e3691cb46a7d5f019296151c177f83a4f79ed167f8c0b6117ce75829ad303bea6472d1fbed38caf4f3a8e35e3cfc41684349ed90787c3e9cc5bdf34bc7dd6dbdf75706f5a59214a4469761d36f75da8781ff1eeb40baa8e93da151163d4818fd1da7858130635ce3e60ddbfe96ee7b020000",
    ],
    [
      "ETag",
      "DzYunnKuGgtWKU3COtnlfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85547f4fa34010fd2a64ef1f4d6a5b0aa53f92c6ab95f3c855aa946a9acba55db60bae028becd24b35fdee372cb6dae8694202bbf3debc37bb333ca30796ae501f052c7a2c68bef976cf03544354e208769f1cffb6b8efa6e35ff3b375eba9bd36fd27e37a3000042b590227594c4f042f7242457f36ad47392f329c737e02894ebad6896eb5acaede69ea66d3ec014fd0381cb3f401d8775266a2df68ecb4eb11e7514c71c6449df064bfdf58b71a59ceef2991a27128d90015d1f85cf434e6044bc6d3c16c0a060a41f3054d308bc1c22b73157c3f4c5d6738a947005e33423121bc4865690b52109e862c2a729515f59f91b2f9e6034dedb13df2b5d164e6fa474b9c94e4e5b18685b65bd4b425d414b2982ed86a5946168bec41fbe14d2e21020eeeb0a062a9ddfeb43d5bd3962568a09d6a43f75c3ba43aae36735d7bea6b47a7c7da8537995d6967f3030c785e512159aa1cfb388869e9f6e5509df7575912b004075570d1695a58ef367b41187448d835da41d8a441d00d3a6d6c044dd233a9b90a28069e2cb32b164e796a04383474a3ab13a3635921c6ab56cb0a0c12986dbdd9368d96d9d149dbe8a06d0dfdcd99a4e74c645cb0ea64d1ade7f8f6c2f766ee68e8dbaa8c1017b13cafcc9545bcf529a148007d52d7b68c320e4ae53539ae6f7bc391efdcd855678c6984c966fa08bd11e2585040e31c2754d2fc92afe0d0d0d564eaf8cec41d8e81a1aefb6a8710a8fffbf995e06f3275ca52bd4b2dcb54fa3bc00d8e0b8558571f486fa3edb6f6ff1443cf1bce4116e739de7c9cfec3fc0aaf5695c5bd1e2ad576abd6c1ca42db3f5b786a0866aad242d733db9ba36acba321cd694abe6e2400abc097bf86dd9c0216261564848435b42d11a508c969d5be2c51e65fd83dc3e859488173f92ed65699f7f35966a4094de54b45d59caa632b4385d88320085de73aee0544ff01d5d5456727050000",
    ],
    [
      "ETag",
      "zITWuj8nLKYBv2z5v4Tz3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90c16ec2301044ff657b4dd4a4a22145e250aa0890102aa1eda542c884250d24ded4de504528ffde75403df762afc76fe4195fe054e83d8c6057e4df0d9af62e475eb92145db946c65ab495b040f90552ee4344ca28ff530c0c74a9f636e67f7c92acec763216cf6859582d1050e05967b0ba3cf0b6855a1d854458d6681b8addd79be7c4ba6492a42457b272cdf178be7c92281cefb336db7f5e95f964de7c19176291ed0a0ced065a80d1d31e3b9ab67555597e85b6a4c86167ab8bfc80d35b53244be287e1cf961f410c5e1300807c1e049c09232c5056961dfd7920d98589529fd483b080530fd28450ffd7aee65d7e1366dbacdcd346919edab214960d13d1e5c83bc900bc7129a4d831e644afe7156f0f5dcfd027c2cd3e9a4010000",
    ],
    [
      "ETag",
      "G1E6VS70e5mnv8tyH/EQ8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd44b7282300000d0bb642d0c5008d01d4a299829880aa29b0c904c0922209f083abd7b9dee7b03df21de03a4794efb1e0fcd99d6e01dcca9628ab9885a63b9b2caef1d42754e4834af19e37bf57c5acf659f85a7e17ea93ddf2661655127abec63300a4c0e25419813ef4809ce3cd6a03681f7ac70498dfcd1e9829cc3041eb60d27323212ac8776a0ec632d987cd5a886434a237fcb33c52ebeb8515e256c150d89cfdc82c14a20aa635e35bf0c63037f242ebce99bdabcc13842b5a26cb2510aee2b5ad863ab759fc364ef98af5db4eb04d74497b1b4916458b87c2cc4979797ff8105a053cb3ada63f6fce04d33cd05f8cb010f734b9f432c69dad10efcfc02536a5fba3b040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-87-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbb826402081448ad62ca16da6847484b47b6842b663a85b822936adba2aff7d17d374ad2ab59fb07dcfb9e7dc078fe886175b34428467b735ab1e3e5d0b828e10533883d7afab6ff569cffa6cdbcb5fce5fa7fe51cece27f7e3312078c3927857e6ac23455d5126479b7537ab445de24a880e24eaf85ec71ef406beed59b66bb943e04996a70b5edc00fb4aa9528e4cf3a0ddcd84c872864b2ebb54ec9edfcdbb9e5956e29a5125cdd79226a848f37dd12fb9a05871518c376b30504b56256c87790e16fe33b7e4f875ea2ec7bb6e06e03b4e19a654d4856a6c410a2a8a946775a5b3a2d123d2365f1cd03a5804d3d8a022af774552e01d3b32b658e1443d94cc3889564b631e9eaca2e5249eafc2643d3d0b9693ee74b5d82cc3b57179164481a130c999e61a63e358df42b880fe9649c50bad1e37cf8df25383e66fc7d210405ab2369878d600dbbe352429f168ea3b7d925a8c109f787dec108b0e5de66e09c3c0d3a29a850b5178ded0def6194dfa6ebf97b87e8f24be8569e2da7dc722033b757d82f647e8bee28acdb82c85e46d87d065348f83248e36e1741207ba8414d7b99ab5c69a025e7a54502080dea969df44b900a5a6ddf3300ea2c9349e5f04ed84172cc3f4617d0b334e712e19a07105cd53ac5a8a2d340c8593653003b09ed8f92128d1e8f7236a7adeb878d1f2677a0c036cec2afd45eb389a87a7dace017181f35a43eeda032ac1f215d406aef77f00094bda6641df3741f413b54f114b59c50afaf13401ac031ffe6b87c5072cac3ec8480577d81d2a1b115ab17687b82ef7c01eba3da78f34b8526f628ee71cbad6e46832b21d2bd45345ede243a1ad582d9f411084f187ba5bfb7f12d9230778040000",
    ],
    [
      "ETag",
      "BOJuG20+11MZ3z3uXpDPAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4e83401085df65bca50918a495a417f4472569b1b6346a4cd36c61a054607177519ba6efee2cd66ad4446f6066f86639e7c00e1eb33206175659fa54a3d89ea4a86e74314559e74ad2ade2a5443000154b890c94b74ea2d5ed7ac3ee5ffd6230a9eefa45daed1221a335160cdc1d2419e6b104f76107252b90d6229ed745b96c3a03d4b6d2c35938f5834bea0b1eeb3e988f465e6f3484bd715c8c9962cb86ffc7da626fc086afa698a0c03242ada5127c8391f2b54dc98a2ac796e4b588504203370f52c1eb8a09ce5b346975da2dcb39753a56dbb46cd33e2730e71153192f899dcf481f28ae583ee52fe4121c02445392e1a4b93ed3388b1b23baf483d0b11b7d5f01929664392eff0649ef9ad167f8c00e117ce758c1eb521da98bd1b5f7db7194e9e751032f1cfe20a4a2a48e48e88f87b3d01b4f34b73878ef6d15ca89e014a4449da165da9db3b663bec7dae73a6a7a8fab448d06448cfe8eab4c819bb05ce2fe0d8be8be717b020000",
    ],
    [
      "ETag",
      "NtAhfcbWhjaYxImDPpXCmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8554fd4fa34010fd57c8de2f9af403fa416913e3d58a1e49a54a41632e9776d92eb84a596497def54cfff71b16517bde694202b3f3debc37bbb33ca10796aed008852c7e2c68befd72cf43d44054e21856a393190e7f73fb7cb6497f5da567378163f2f8e80810ac6409bcce12da14bcc80915a360de8a735e6438e7bc09859a96d534cc8e691903dde8e9bd21f0044da2294b1f807d27652646ed76addd8a398f138a33265a84af5fd6db9b4e3bcbf93d2552b4f725dba022da1f8b1e279c60c9787a14ccc1402168bea06bcc12b0f0ca5c855ff74bb7185eb762006f18a198105ea4b2b40525084f231617b9aa8a464f48d97cf381e6f6d49ef8da6416b8fec112af4bf2f250c342ab8386b6849e2296d0055b2dcbcc62913d6867deec0232e0e00e0b2a96dacd37dbb3b5d7a5a576a41d6b63f754db2fe0b85ae0baf6dcd70e8e0fb5736f165c6a27b77b1870bea242b254f9f67198d0d2f3f3d63aef0fb4246009a2557231d04d6c58fa308cc20189ac6e3f8c741a865638e8e36ea893618ff65621c5c0936575c5c2294f57e65037486748ad1509433cec5a7abfd7c54677d0a3a61e0db0d1e91b4644d0ae817ee64cd25326322e58b5bfe8c6737c7be17b813b19fbb66a23c245224f2b7365136f7d4a6812401ff4b52bb38c835279588eebdbde78e23bd776351f531a63b29d3fc28444381114d038c76b2a697ec157b069e87236777c67e68ea7c050877e5923041a7d7f7a25f8db4cedb2546f34f73dc73d57066ac4354e0a05d9541f689c8157b4db35fe5f66ec79e35b90c6798eb77fe5a01db357d2ff21a1f02aaa6cd692062ad5eaa8b3179968f763074f03c1edaab4d055607bb7a85af26844739a92cf8709c02af1e94fa2beb180853b0b3242420ca34b442942725a8d305b2bf3cfec61dfe8ea488173f92ed7e9f7eab32a6b9415e99aa6f2b9a3eac6aa6d2b53857801411226cf55c7b6fb0397d2b60531050000",
    ],
    [
      "ETag",
      "fBOabzoEGOvnxQnFWUI6og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2401085ffcb786d23ad042b090731442140b4c84543c852865adaeed4dd29a412febbb3c5188f5e7667de7cb3796f4f90677a0b7dd864e9678da6b94a915f5c11a3ad0bb67255a42d8207c82a157292dacc4ec2eef55714368bb7599eebd9e138180861930f2c15f44fb0cbb0d85ae8bf9f40ab12654d95546b16889bcaf5e3f9ebe871148b50d2d609f3e5747a3f9c8ee0ecfd2eadd755feaf95d5d9833d6d62dca1419da0f35019da63c26317cfaab22ad0b7549b042db4703b480dd5953244be287e14f9412fec45c16d27e876ba7702169428ce480bbb5c8837606255c4749474100a60da5282eedaf320f24d9be1d002cedadf59f83b0bdc6cf5f3e0b061b4cf86c49d4567ac7331f940ce384b2036357a9028f9e3a78c2ffdf91ba0c93725c0010000",
    ],
    [
      "ETag",
      "JgsisJ24/z82ySZMkknMvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fe9b3182920b237c1e2923aae99882f4d03e56207741436cab27f9fd9279cf30368513029c93470d68317a02874b6c5168b83eb1d5bb9a22ebbf0ac5dede05c525e1fbc91095b857d6dc651e857c3e4646fbdd07c3deaa6a959ea293859760ef340c3c28e121c105f3f257b2cae2bcce31bd6ba59bed3bcde9dd1231c84d6041ee48acae3c79cce30ec1a3c7c5df7ad53c1f26ef4af4b5b1a4b78194d2d251e57c6e39306bcb8c7445364a763bd724a651a38c91e215dc68a237259a5822e322c393058ce28f57c3ffe4608dfb81929b0016c11edc824699f5cc3729c0df8b7934909f60c70191dd9087eff00869aacd51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-89-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a34014fd2b64f6ab16dad2074d9ab5a9a84d5aea52aa319b0d19860b8e0283cca05b4dfffb5e06ebea6ea29f98997bce3de73e7821f7bc88c984443c7da8a1da7dbb13113922a0688aaf67dde2f7f3ee26de3af9dd32be1c9bcfe7c5e0693a45046f5892e66506c752d4150339d96e3a6925ea9256421c63a2e3b173dc1df686e3eec8eada96ed204f42962c79718fec5ba54a3931cd8376271522cd80965c7698c8dfdecdc79e5956e20e9892e647491355a4f9b9e8f74c30aab828a6db0d1aa8255421e4946768e12f338e4e3ea6ee709a7752043f720694315117aab185299828129ed695ce4a262f44db7c77201b77e9ce038389acce8bb0a0391c1931553454bb128c337fbd3216ded9da5fcd82c5da0b37f30b7735ebccd7cbedcadb18d717aeef1a8a461968ae31354ef4cdc30beac720152fb47ad03c37caaf0d5afc3f968680d212da6038b286b43bb69c2889462c19f707516241148da3d180f6238b3936d8710414795a54b368210a180c8630188ec25edfa2a1dd8d68e830db099d04925ecfee47c35e97ec8fc853c5159c72590ac9db0e916b7f11b861e06fbdf92c70750909ad3375da1a6b0a78ef51618108faa4a67d13e502959a762fbcc0f567f36071e5b6135e424ad96ef380334e682601d1b4c2e629a85622c686116fb6724f11ac277679084a32f9f9429a9e372edeb5fc8d1ee0001bbb4a7fc926f017deb9b673405cd1acd690c7f6404ab47c8bb5a1ebfd2f44e292b659c88fadebdf90f6c987042a28d8d7d344b00e7cf9af1d161fb1b8fa282315de7177986c445805ed0e715dee81ed0c9cbe4534b852ffc68696631fbad6e46832420e857aada85d7c2cb415abe51b0883387e4f776bff079e0ff47678040000",
    ],
    [
      "ETag",
      "F1nxzyYdU9mjLdP8/zGn5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92dd6e82401085df657a8b89564524f1025b6b4dd1fa83e94563cc0a83a2c0e2eed2c618dfbdb35b6b9bb6497b0333c337cb39078eb04bf2085c5825eb7d89e270b54635d1c51465992a49b782e712c102546c4d641df7db8d576f8e1f1edbaba7ee6cb78afbcea4d32142861bcc18b84788134c2309eef311729621ad853c2db37c693a0bd4a1d0c359301d8cfad4673cd2fd68eefb5ed7efc1c9ba2c464cb1a5e1ffb1b63859b0e5ab29c628300f516b2904df62a806daa66459916245f2528428c1c0e6c15af0b26082f30a4d2a4ebb52b3af6da7d6aad61ad5469bc094874c253c27763e237da0b862e994bf924bb00910a624c3b1b9bed038898c115d0e4681dd30fabe02242d4e525cfe0d92de0da3cff0819d23f8ceb18c97b9ba5077fea3f7db7194e9e751b75ed0fb414845495d906030eccd026f38d6dce2ecbd7b5028c7825390127586b56ac369b6ecea7bac375c474def719528d18290d1df719f287063964a3cbd01e65313427b020000",
    ],
    [
      "ETag",
      "3eqjhA35PKO9bWBSkbfG8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85546b6f9b3014fd2bc8fbd24a79f048c8438aba34651d5a4a3a425a55d3941830d40d608a4db7a8ca7fdfc594b659b7564282eb7bce3de7dad73ca22dcd4234463e8def4b52ec3edd311fb51011388655ddf9ad957dd60fbfd1592fd14f4fc95633e2c90410b462719ce6096973561601e1e3d5b21317accc71c1581b0ab5476a5b337573a80d54ada7f646c0e32489e634db02fb56889c8fbbdd46bb1333162704e7947702963eaf771ff46e5eb03b1208de3d94ec820aefbe2f7a92b0000bcab2c96a09064a4e8a3549314dc0c20b33f43f1f96ee509c7662003fd080e0206065262a5b5022605944e3b29055d1f811499baf3ed0d29a5b334f992d568e77b4c16945de1c2b982b4dd05236d0534413b2a6e1a6caacd7f956f9e22e2e20030e6e31277ca35c7fb55c4b7959da2813e544993a67ca6101db51568e632d3de5e8e458397717ab4be5f4e60003ce43c205cda46f0ffb09a93c3f6dadfdf6402b0216205a27d703d5c4da501df9913f08a2a1d1f72395f8fed01ff4b1e1abc1a8477aa14f30f044555db270c632d30fc251a4f74d4c426cf4b1afa9ba4f2263a8197d5d33f4303049a46a2adab7d0af820a724679ce38adf7175dbbb667ad3d77e5cca69e25db88709988b3da5cd5c46b9f029a04d03b7dedab2c65a0541d96ed78963b9d79f69555cfc79cc438d82def6142229c7002685ce09408525cb010360d5d2e96b6672f9ce91c18f2d02f1b0447e31f8f2f046f97cb5d16f28d969e6b3be7d24083b8c24929210ff507c2397845fb7debff65a6ae3bbd01695c1478f7570eda317b15fd1f12122fa3da6623a9a14aad89f483c844fb9f7b785a086e57ad85beaf2cf706d54b2e894841b2e0e36102b04c7cf893686e2c60e1ce820c1710c3e806bc12090a528f304da5f927f66830307a48820bf126371c0e9ab3aa6a5415494a32f1d4517d63e5b655a9923f83200993e7c863dbff01d1667fbb31050000",
    ],
    [
      "ETag",
      "2Nx1u5o5dKiC4l2BBek13g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "416bc2401085ffcbf49a4014d12a78688a54210d35ad502845d6cd9846939d6477520921ffbd132b3df7b4fbde7c33fb663b38e72685051cf2ac6ed0b67719f276b824e89a829d1c151987e001b2ca845c87efdf7656a7756a88c671f8ec0e7a7b592e8570fa0b4b058b0e8e3916a983c547074695286daaa4c6b040dc5683dec46faba755224649e960c4bb287a08a315f4de5fd37e5f9dffd5f2d97b70a2438247b468340e192a4b27d4bc19d673aaac0af41d3556a3832b7c2d64969a4a59225f1c7f1ef8a3e9787a3f9a05a34930990b5890569c931176f72ad980895591d045b683006e3a6c19dd8b2519ee30bd5564e2230defb2e461dba0075ac917ad73fed5fd0fe5cd05fe7f010000",
    ],
    [
      "ETag",
      "HBXvr7qdqdnoo2NBMsbcQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dd04d7282301800d0bb64ad8e0202e90ea80a8aa4b6c2306c1888114131982ffce9f4ee757a84f75e28a39401a4925fd91d7da03153f08cce768d693b56357e6e86f64cfbba15e496defa7065798f2a50c1366ccbf74edc809c3c47bec675e81c4d9c312fbe32528943480ca90caa2b72fcc5bb29d85d758c74d5d332ad48b654ae7f9427596d3ad6d7cb07be3bdc7926398e5dbaec89550f24d9b5a6a7174e42b454c25439f9b2045f8fcffe605f94552117f961514039dfecbf5b5ff24319801181ee516e8228ba3e2356e7c6d38bd0d605ddee5d9807bbe88626880d4d2918a4e59bab2e319ea07f7b2ac786bd036c960926d0ef1f8407842f1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-91-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b64f6d596525b4a9b346bb7c5b5494b15a8ee66b321c370c151ca2033d418d3ffbe97c1ba1a137d6266ee39f79cfbc133b9e745422624e6d9430dd5d3b73b119313028a66f85ada8e59ce84c96eaa60f48b3d5e2e7e0cfdabe91411bc6149ba2b73e84851570ce4641b74b34ad425ad84e860a2ced8ea5876df76ac51cf1af40663e449c8d3152fee917dab542927a679d4ee66426439d092cb2e13bbd77773df37cb4adc0153d27c2f69a28a343f17fd9e0b461517c5741ba0815a4215c18ef21c2dfc6726f1d9fbd45d4e77dd0cc17bce803226ea4235b630051345cab3bad259c9e499689b6f0e247057ee3c3498c8eb5d11157407274642158dd45309c6b9bf591b4bef7ce3af67e172e345c1fcc25dcfbaf3cd6abbf602e3e6c2f55d43d13807cd35a6c699be797841fd04a4e285560f9be746f9a541cb8f636908282da10d46a39e4d2da7378ed378c452e77418a73d8863271e0de969dc63e3010c921828f2b4a866d14214b6dd77d20468640d2c88067d3b8e9cc472a2d37e0c0e1b3218f5637238218f1557b0e0b21492b71d2237fe3274a3d0df7af359e8ea12525ae76ad11a6b0a78eb51618108faa4a64313e502959a762fbdd0f567f37079edb6135e4146d953f080334e692e01d1b4c2e629a8d622c186116fb6761708d613bb3c062599fc79264dcf1b176f5afe4a0f71808d5da5bf2408fda5f753db3922ae695e6bc8be3d90122ddf626de8faf01791b8a46d1672b575fddfa47df221850a0af6f53411ac035ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b648f9d813d241a5ca90f31db1a1ebbd6e46832c20e0af55251bbf858682b56cb57100671fc9eeed6e11fd5d05d13780400",
      "00",
    ],
    [
      "ETag",
      "p68/pAo/cWrS7XcwPDB5RQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bc6d233558a0091745513080028598184296765a8a6db7ee6ef991f0eece5644a3267ad3ce4cbfd99e73da3d3cc759000e2ce2e8a540b13b8b500d75314259244ad22de799443000158b887c9583293e76eac3edb63fbd2bd678ee86fea6d92442fa4b4c19387b08634c0209ced31e329622adf93c29d26c5e7606a85dae87636fd41ddc529ff240f78349afe7b67a6d3818a7c58029362ff97faccd0e06acf86284210acc7cd45a72c157e8abaeb629599a27684a5e081f259470f92012bcc899e0dca489d9b04ccbbeb0eb56ad62552bd5068109f7998a7946ec644cfa4071c59211df904bb00910654986c3f2baa6711c944674d91d7876b5d4f7152069619ce0fc6f90f42e197d860fec18c1778ea5bcc8d489bae9ddbbbf1d47997e1e75ed7aed1f845494d409f1bafdf6d873fb0f9a9b1dbdb7760ae583e014a4449da155a9d62f6b76e53dd62baea3a6f7384a146880cfe8efe8c40a9c9025120f6f91574fce7b020000",
    ],
    [
      "ETag",
      "zsNVeXH8QxxMVJuve/Afcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "9b",
      "30",
      "10",
      "fd2bc8fbd26a4980944088147569c2ba4829e90869554d5362c0a46e08a6b6691555f9ef3b43d336ebd64a4860df7bf7de9dcf3ca135cd13d443115ddd97846fbfdcb1083510917805bb33f37e22462577cef4646d7da5b77e44bb8ffd3e20a86209bc2932d214ace43111bdf9acb5e2ac2c3067ac09899a6ebb69da6dbb6b3a866919960b3c41b27442f335b06fa52c444fd7f7daad1563ab8ce0828a56cc362ffbfa435b2f38bb23b114faa1a40e2a42ff58f43463319694e5fdf90c0c9482f005d9609a81855766127d3b4cdda278d35a01f881c604c7312b73a96c418a98e5295d95bcca8a7a4fa8b2f9e603cdbc89370cb5e174ee87474bbc51e4e5b18685b65f34b425d494d28c2c68b25491c5a2586bdf83e90544c0c12d16442cb5eb1f5ee069da32c1922cb5be76aa0dfc9176481efbdadcf7bd59a81d9d1e6be7c1747ea99ddd1c60c0754284a479e539c4514694dfe7b68edf1fa62260091eeae0c2316c6c760d374a23274ebb279d283548147523a7834f2223762d622511c1c0932a7bc5c239cbadf8c4e99a1d1b4738693b91eb76628360dbc15162a6ae9ddab89bb43bae81760df4c8a924232a0a2668dd5b741d8c436f1106737f3808bdaa8c1497991cd5e654116f7d4a2812401fd4b55351ca40491dd4d80fbd60300cc7575e3d1b13b2c2f176760fd391e24c1040638e3744127ec112681aba9ccec6e178ea0f26c0a80efc728f10a8f7ebe995106e8baacbb27aa3912a60f726e115ceca0af0507fa0b6d1369a06cc6f07ed768dff671a04c1e006d431e778fb570c2ab22d45ff874e85af56b5d3bdae8994da8b8b83958d76bf77f034105cae5a0bfd9c7bc10daab70292124e",
      "f2f8f379027015f8f41fb1bfb080852b0b3242c21aa637164a24e6a49e62baa9ccd76cd330daa6812a3097ef62966bec8f4be55019c986e4f2b9a2fac2566d53a152bc802008c3e78ffd7388fe01be858ef830050000",
    ],
    [
      "ETag",
      "S1qLsDur7B/dk4+ihNbi8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90414fc2401085ffcb78b48db42128241cc4542529042a44a3216469875a683b7577aa6948ffbbb38578f6b23bfbf67bd9f7f604c7ac4c6004bb2cfdaa51375729f2d20e119a3a67235b45a541700059a542be86413aa4ebc5cd2317b3d52a7cf39bd9fb723c16c2c49f5828189d609f619e18187d9ca054058a4d1554972c1037953d4fe7abe02988442828b1c27c1d86f7933080d6f9336db7d5f15f964debc0817611ee516319a3cd50693a60cc535bcfa8a2cad13554eb180d747077916aaa2ba5895c51dca1ef7a037f70e7ddf6bc7eaf3f1430a7587146a5b0eb17c9064cacf2887ea41d7802e86e94a2fb6efdee64dbe1326ddacdc5346918cd42932430681fef9d833c900dc7129a758d0ec44afef139e3f3b9fd05b880351ea4010000",
    ],
    [
      "ETag",
      "WLEg9o+P/FtmMTTLX2yMZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dd04b7282300000d0bb64ad8e12e5d31d44b0b4a0c00069d96480c6f03320a0109ddebd4e8ff0de13a4794e87818c6d4d3978032295b455befaec5403e96c86195f761aca99e9082dfc9ad2c4247e40147c8e5c2b0ef94790ba0c9f7c887fda6bcf901dd51eb12b292c2a535eab3eda5dac07b6779272e24da617db09edc53982fe2c2eeaf6a6e649e935012fdb69c07965a7095345132194f5d038cac7db86ca19441dd2e3f73248eeb1e42bf2360b6ba118ae650c0adf2c9dd8804d501cf6e470b73d5e591ededc5cc426a7ed115e33f33ac541314ff87b7c8c6001e8dc953d1d48f9e2c29da62dc0bf9d8ca2a3af0083a63dedc1ef1fe860467f1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-93-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a34014fd2b64f6ab2dd096be92666d2a2a494b7781ea3eb221c370c1712983cca031a6ff7d2f83753526fa8999b9e7dc73ee8327f2979729999384e7770dd48f5f6e45424e08289ae3ebeceac25d6f7fec6e9acb21f3efd476f78b390f8b052278cb92745f15d093a2a919c8f92eece7b5682a5a0bd1c344bdd9b0678f07e3a93db1ec91359a214f4291ad79f917d9374a55726e9a47ed7e2e445e00adb8ec33b17f7937ef0766558b5b604a9a6f254d5491e6c7a25f0bc1a8e2a25cec4234d048a863d8535ea085ffcc34397d9bbacfe9be9f23f89e33a08c89a654ad2d4cc14499f1bca97556327f22dae6ab0309ddb5bb8a0c268a665fc625ddc38991524563f55881711e6c3786e79f6f83cd32f2b67e1cae2eddcdb2bfdaae771b3f34ae2fddc035144d0ad05c63619cea9b8f17d44f412a5e6af5a87d6e959f1be4bd1f4b4b4069095d309e58636a4fad59922513964d874e92599024d364e2d06162b1d90846690214795a54b368294a2b730663cb19c5c349c6e21124693ccd662c1e0e9d6ccae82465594a0e27e4a1e60aceb8ac84e45d87c875e0456e1c053b7fb58c5c5d42469b429d75c6da025e7b545820823ea8e9d046b940a5b6dd9e1fb9c1721579576e37e135e4943d867738e38c1612104d6b6c9e827a23526c18f1971bf70cc17a62df8e4149e6bf9f48dbf3d6c5ab96bfd0231c606b57e92f09a3c0f32fb49d23e28a168d86dc770752a1e51bac0d5d1ffe201297b4cb42beefdce027e99e02c8a086927d3e4d04ebc0a7ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e53eb36dcbb61c9b6870addec5ecc9e0d8b536479b11f650aae78abac5c7423bb146be803088e3f775b70eff003f0cea0178040000",
    ],
    [
      "ETag",
      "9VGELOXUhuH3cNqtOUZc5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53824010c6ff97ed1567240d95191fb0346dd00cf1a9719c1316c480a3bbc3621cfff7f6c8aca966ea057697df1edff7c1019e923c041b3649fc5ca2a82e62540fbaf05096a992742b782e110c40c56222c766e456af5ea71cedbda5e5ece3ac95dfc5fd3e1132d862c6c03e4094601a4ab01f0f90b30c692de06999e5ebba334055851e2e7c6f32bba53ee3a1ee674bd77506ee108ec67931648aad6bfe1f6baba3013bbef130428179805a4b21f80e0335d13625cb8a141b9297224009355c3f88052f0b26386fd0a4d16b354cebd2ea9a9da6d96eb67b04a63c602ae139b1cb05e903c5154b3dfe422ec12240d425198eeaeb9ec649581bd1e564e65bed5adf5780a445498aebbf41d2bb65f4193eb05304df3996f13257676ae4de3bbf1d47997e1e75e3f8c31f845494d419f127d3e1c277a673cdad4ede07954239179c8294a833349bedee55c76abec77acd75d4f41e5b89120d0818fd1de344811db154e2f10db3f1d4ca7b020000",
    ],
    [
      "ETag",
      "H1fLyxR7uFvRU6Avgm3nJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14",
      "fd",
      "2b",
      "c8",
      "fb",
      "d24a49b009210f29ead294754809c90869d74d5362c0a46e094eb1699555f9efbb40d336ddd64a4860df73ee3df7c523bae569847a28e0abbb9c65db4f37224035c4145dc1ad3b61f462f2fd5adfd21923a7843fc8dfc943bf0f085eb0245d6f12569722cf42267bf3596395897c433321eae0a8de35ebc432ac0e69636262b30b3cc99278c4d35b605f2bb5913d5ddfc76eac8458258c6eb86c8462fd7cafdf1bfa2613372c54523f0ca94314a9bf1ff4241121555ca4fdf90c04e492650bb6a63c01092fcc28f87ce8bac1e9bab102f03d0f190d4391a7aa90052e4291c67c9567a557d47b44a5cc571f68668feca1af0d2773d73f5ad275415e1e6b546afb434d5b424e314fd88247cbc2b2586c6eb52fde640c1650704d25934bedf2abedd99ab6940ad42db5be76a20ddc33ed90edb8dadc75ed99af1d9d1c6be7de643ed54eaf0e30203b6252f1b414edd3206185e0a7ba3a7f77b3205005222ae3a28d2d4a3ab81bc4413b8c3bcd56106316049da0dda2cd00875d939951c028f054e1bd64d154a4dd6ed0c2b1d12686c95ab8d9360c13375b040746db6a4661970411898919a25d0d3d645cb1332e3742f2aab8e8d2737c7be17b737738f0ed328d98e6893aabc41549bcd6a9204900bd93d7aeb07201918a4e39ae6f7b83a1ef5cd8d5708cd88a86dbd91d8c474c13c9004d33ba668a65631141d1d07432737c67e20e46c0283b3edd2324eafd7c7c21f8db4d596555be91ef8ca14783f1b4d4b0075dd0242f51f7d50732b081ebd8a893964f8c1e69f688d9c018ff40bb",
      "5dedffce079e37b8024134cbe8f68d0d92b4cc82fe8fa825be3c55e2f72a082aa23d6b3a385968f76b074f0dc1c255b1d0b7b9ed5da1eaca6331cb581a7e3c62002e0d1ffe37f64b0c58586308030ba1380c74288b2061c6aac1e6eb527cc52698742c0b95e04cbdb5199858fb0e163e0a8f6ccd52f59451b5c465d90a532e9f41608479741df71cac7f0058fd45f744050000",
    ],
    [
      "ETag",
      "NOeaVOXh/yaSe1B1iwszlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d90dd4ec2401085df65bc6d134a2a7f091762889210d44aa3d110b2b4d35a683b6577aa34a4efee6c215e7bb33b7bf63bd973f60c87ac8c6102bb2c3dd6a89b9b14f9c50e019a3a67235b45a541700059a54236c39156b7a7b7f0bdbf3e9e3e9ef614f6fd743a15c2445f5828989c21c9308f0d4c3ecf50aa02c5a60aaa4b16889bca9e17abf5fc611e8850506c8555b85cdecd9673689d3fd3765b1dfe65d9b40eec691760821acb086d864ad31e235ed87a4615558eaea15a4768a083bb8b54535d294de48ae28e7dd71bf407236fd8f3fc9e3f1630a7487146a5b0e1ab6403265679403fd20e3c0174374ad1a45bbf3bd976b84e9b767335cd1a46f3ac491218b48ff72e41eec9866309cdba46072225fff898f1e5dcfe02d9e3bb4ea4010000",
    ],
    [
      "ETag",
      "y78ra5xWUX2TqxZOjoU24g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb642d8e8841e80e50824d510a08633719083102f2c71ae8f4ee757a84f77e4042291b06323625abc11b9892b5bea44bdc6aa665145164184563179bccc49eab8d1b99577b0e49216f0d9b229fcc6af43c6e4fb83c2028e03d3a4f37ea54ddd0cc1272eb18927398c6cf55256e56fc186b9566ebcf30d8244599d7d79930735a29978f8bfcd5a5984a55b443fb2e0879533078b8aab29dc509cecf827956e8c44843763afbacdaa2bd7ba964c147ebe088f4a1045d7abccffa20315c5e33f734cd5a5373ee8b778e8889956fb19357d03343b0004cb479cf0692bfb80ad4f505f8b793716ad92bc06449cf7af0fb07753819ee1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-95-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da24240d7949d11a25b48996900e48ab699a906d2ed42dc10c9b565195ffbe8b69ba5695da4fd8bee7dc73ee8367f220f2984c0813e9df0acac3b77bc9c819014d537cbd3a0c164be7feca563f141cae9dbbe5f5253c4da78810354bd17d91414bc9aae4a026bba09d96b22a6829650b13b5c64eab3be80d46dda1ddeddbfd31f21464c95ae40fc8bed3ba50934ee7a4dd4ea54c33a085506d2ef7afef9dc75ea728e53d70ad3aef253ba8a23a9f8b7ecf24a75ac87cba0bd040a5a08c604f458616fe336376f13e755bd07d3b45f0a3e040399755ae6b5b9882cb3c1169559aac64f24c8ccd370712b86b771e5a5c66d53e8f72ba87332ba69a46fa508075e96f37d6cabbdcfa9b59b8da7a51305fba9b597bbe5def365e60dd2e5ddfb534651918ae35b52ecccdc30beac7a0b4c88d7a583fd7ca2f0d5a7d1c4b4d4069054d301ada03da1dd96396b0214f46e70e4b6c606cc4860e3d67361ff7a11f33a0c833a28645739953dbb6797fdc8fa83384a81f8f8611eb321ac5c006b6dd3b8f6d674c8e67e4a9141a1642155289a643e4d65f856e14fa3b6f3e0b5d534242ab4c2f1a6375016f3d6a2c10419fd474aca342a252ddee9517bafe6c1eae6edc66c26b48293f047f71c609cd14209a96d83c0de546c6d830e2cd36ee02c16662d7a7a02293dfcfa4ee79ede24dcb5fe9210eb0b6abcd9704a1bff2ae8c9d13e2866695813c360752a0e53bac0d5d1fff201297b4c9427eee5cff17699e7c48a0849c7f3d4d049bc097ffda69f1118bab8f324ae31d7787ab5a8497d0ec90",
      "30e5beb0bb76cf199b3f55d3527f880d1de7d4b53a479d11f690eb978a9ac5c7421bb14abd823088e3f74cb78eff00fa57e7bf78040000",
    ],
    [
      "ETag",
      "Gy6DH5jG0sKseyP5hHPFew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d23281468c205200206909f12358690a59d4271dbadbb5b0821bcbbb315d1a889deb433d36fb6e79cf6002f5112800bcb68f59aa1dc5fac508f4d31419571ade8968a442158809aad88bc6edd3ddefbdbcb875d94d63a95eed3acc6b7e37a9d08e5af3166e01e208c90070adce703242c465af305cfe264917716e87d6a86536fd21b76a88f4560fae1acdf6f34fb6d385ae7c58069b6c8f97faccd8f166cc47282214a4c7c345a522936e8eb9eb1a9589c72b495c8a48f0a72387fb092224b9914c2a6895d2bdb45e7caa9162b8562a950aa11c885cf742412626753d2075a68c62762472ec12140e625190ef3eb96c651901b31656fe839a55cdf5780a48511c7c5df20e95d33fa0c1fd82982ef1c8b4596e83375dbbf6ffc761c65fa79d44dc36bff2094a6a4ce88d71bb4a75e633032dcfce4bdb9d7a8465250900a4d86c542a95aae3885f7585bc2444def71b5ccd0029fd1dfd18d34b821e30a8f6f19edda457b020000",
    ],
    [
      "ETag",
      "3CJXOcv/Wwip9G7HYU9lvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2b",
      "91f7a595282421840409750cd20e8986368456d53481631cea36892176dab18affbe8b536859b7560a4acef7debd77f69967f4c0b205eaa0882dd705cd375fee79846a884abc84d5270b0f16e3b3c6ef5f6bffbbaba717f686aeafba5d40b0922570ba4ae889e0454ea8e84c27f565ce8b15ce393f814227ae7d62d8a6ed186dddb074cb059ea0493c62d903b0efa45c894ea3b1d3ae2f395f2614af98a8139eeed71b8f666395f37b4aa4681c4a364045343e163d4d38c192f1ac3b9d808142d07c4653cc12b0f0ca5c445f0f4bd7194eeb4b003f32423121bcc864690b4a109ec56c59e4aa2aea3c2365f3cd079a7823af1f6afdf1d40f8fe6382dc9f3630d0b6d17d4b439f414b384ced8625e6666b3d58376168c2f20030eeeb0a062aedd7cf7024fdbd3b4ae76aaf5fc8176481ffadad4f7bd49a81d9d1e6be7c1787aa97dbb3dc080ef05159265ca7588a384968e5f3676f8fe384b0296e0a24acedaba8d0d4777a3386a93d869b6a258a751e444ed166e463a712d6a2d228a8127cbea8a85339eb52c17379bcdd831dc96ed38966119ba119b4e6c2e307109769bd86c135347db1a7aca99a40326565cb06a77d14d300cbd59184cfd7e2ff4541b312e1239a8cc954dbcf529a149007dd0d7b6cc320e4ae5510dfdd00b7afd7078ed55d331a24b4c369335cc478c1341018d739c5249f30bbe804d4397e3c9301c8efdde0818eac82f7708813a3f9e5f09e166a57659aa373a1b8d7ba16d29073bc8354e0a8579ac3e90516f01625bfb7f995e10f46e411ae739defc9583766c45ff8782c2aba8b2b95744a5da2e320f22",
      "1b6d7f6ee1a921b85b9516ba9a7ac12daa96021ad39c66e4f36102b04a7cfa17b1bbaf80851b0b3242420ca34b442942725a8d304b95f98a6de8cd56d3440a9ccb7739f8edceaaac5156a429cde44b47d57d55db56a60ab107411226cf1ffae790fd03cd0511ae2f050000",
    ],
    [
      "ETag",
      "w4aDdOF/zxqNH90mM6yeqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d504d6bc24010fd2fd3a30918115b050fda5aab5869d30a8522b26ec6184d327177b645c4ffded958a4c75e7667dec7f2de9e609f9509f4609da50787e6789322bffa2146eb72b67255545a840090552aca47339e26cf6eda681cbadb54b75d1a7f3c0cfa7d5158bdc54241ef049b0cf3c442eff304a52a506caa2057b288f858f97d327f1f8d47b10005251e982f66b3c1703682737035ad56d5fe5f96e539801dad63dca0c152a3cf5019daa1e689af675551e5185a7246a3855a5c13a921572943140a12763b61d46975eea2db66d46eb6bb22cc492bcea814ede24db20113ab3ca66f69072d11987a94a29bfafcaa61dfc14f511ded2f175db996e796bf0f0e8f8cf6c590a4b3e883352f21efc9076729c4c661005ac91f3f657cd9cf3f46059d2ac0010000",
    ],
    [
      "ETag",
      "FrGJdMuJ++q9hgc4ugRXDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ffedd4498e82400040d1bbd45a4804997a6781a84c6d210271430a2cc228580808a6efdea4f77d03df01fef2bf014e12d275d1b329c91d7c8109730a9bb0662b43755b78c6c860e9741cfb7e27d7595570c6a47ab653467e76b1148e3691811086417873f4c461c2417e1ebf095c8b6ee732b30603cfa7556f8554ec041e9941e64cc93e4dadb1c91da13e48a595af377b2d96390bdd2e573772055b807c9b55aff991f722e26f831e87e2780fc680e1b6db463ad9841bac43a1536156e4b4bf9ea71d93a4468c6a1d4a84399bb8d7d0a178b8055687c6dc2ce9d81fe3f64563c27e7c7cfc0fac0079b539255d942f3fe005455981bf3944cfa925cb2120c19450f0f30b5a4218373b040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-97-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b64f6b52a2a8a9898ad51da9a28ee02b6d96c3664182f745a602833b8318dff7d2f43edb669d23e3133f79c7bcefde0993cf2624fa624e6e9530dd5f1db8388c9050145537c3d5cf7e9b6760e2258e69ed95bacc7c7fbe37c3643046f5892e665061d29ea8a819cee826e5a89baa495101d4cd471ec4e7f3c184ffab6d9b74ccb419e842c59f3e211d9f74a9572daeb9db5bba9106906b4e4b2cb44fefade3b0c7a65251e8029d97b2fd94315d9fb5cf47b2618555c14b35d80066a09550439e5195af8cfdcc797ef537739cdbb29820f9c01654cd4856a6c610a268a84a775a5b392e933d136df1c48e0aedd45683091d579111534870b634f158dd4b104e3cadf6e8c9577b5f537f370b5f5a26071e36ee6ddc576bddb78817177e3faaea1689c81e61a33e352df3cbca0fe1ea4e285560f9be746f9a541ab8f636908282da10d46b639a6fd89e9c4496cb364321cc58909713c89ed111dc626732cb0f63150e46951cda2852806136b08b66d450e052bb2e8c4899cb14d2360140630eac7233b21a70bf2b7e20a965c9642f2b643e4ce5f856e14fa3b6f310f5d5d4242eb4c2d5b634d016f3d2a2c10419fd4746aa25ca052d3ee9517bafe7c11ae6edd76c26b48293b064f38e3846612104d2b6c9e826a23f6d830e2cd37ee12c17a623fce4149a6bf9f49d3f3c6c59b96bfd2431c606357e92f09427fe55d6b3b67c42dcd6a0d39b40752a2e57bac0d5d9ffe201297b4cd427eee5cff17699f7c48a082827d3d4d04ebc097ffda79f1118bab8f3252e11d7787c9468455d0ee10d7e5beb0fba6359c8c890657ea436c341e9ebbd6e46832420e857aa9a85d7c2cb415",
      "abe52b0883387e4f77ebf40f2a66065678040000",
    ],
    [
      "ETag",
      "vG1aOu9voSDmN0/CL6yhyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f82401085ffcbf415136d282a890f586f246abde04b1b635618145d58dc5dda1ae37fef2cb5b6699bb42f30337cb39c73e004fb248bc08575b23914288f371bd45353cc50155c2bbae522530816a0661b220f76677ff065fd91f55f79efd818e4c5613d6db58850e1165306ee09e20479a4c07d3a41c652a4b550f022cd566567813ee666380f66feb84f7d2a22d38f17c3a1d71e76e16c5d1723a6d9aae4ffb1b63c5bb013eb19c628310bd168c9a5d861a87d6353b134e75851a290212a28e1f2c1468a226752880a4d2acd7aa5e6dc3a8d5abd5ab3ab7693402e42a6139111bb98933ed042333e132fe4121c02645992e1b8bc3ed338894a23a6f4c7816397fabe02242d4e38aefe0649ef96d167f8c02e117ce7582a8a4c5fa9def0c1fbed38caf4f3a88e17747f104a53525724f047dd79e08d26865b5ebcb78f1ad5440a0a52a1c9b056b51b7775a7fa1eebbd3051d37b5c2d0bb42064f4770c120d6eccb8c2f31b95978fb47b020000",
    ],
    [
      "ETag",
      "q4DkqIr7ZaGxlFy8HpuqbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010fd2ac8fba7d5f203089010a9eab284b54829e90869556d5362c0a46e01536cba6555befbced0b48ddab512129cefbd7befec330fe896e6311aa290aeef2a526e3eddb010b51011780dab7f7467124f367c324f4f7bb7a15bf5ff7e3646474780a092c57156a4a4cd595546840f17f3ceba6455814bc6da50a86d0fda9aa55b03adaf6a866ad8c0e3244da634bf05f6b510051f76bb3bedce9ab1754a7041792762d9d37af75eef1625bb2191e0dd7dc92ea8f0eefba2c7298bb0a02c3f5accc140c549b92419a629587866c6e197fdd21d8ab3ce1ac0f73422388a58950b690b4a442c4fe8ba2aebaa68f8806a9b2f3ed0dc993ae34019cf165e70b0c29924af0e15cc955dd05256d0534253b2a4f14a6696cbe256f9e6cfce20030eae31277ca55c9e3abea3282b09fa59a96a8f28c7cac89b28fb7cd753169ee7cc03e5e0f85039f1678b73e5ebd51e068cc7840b9ad7b6031ca6445a7edc59f7f5794a021660a3492efbaa85b5816a8749d88f9241cf0c139584e120ec9bb817aa916d10230e09069e90d56b16ce59aec6d8d2896debbaa959c620516dd38c6ccbb2a301366cddb46313988686b62df4bba4824c282f18a7cdf6a24bdf0d9c65e02fbcf12870ea36125ca562d298934dbcf429a04900bdd3d756662903257956ae1738fe681cb8174e331e53b2c6d1667e070392e0941340e312674490f28cc5b069e87c36770377e68da6c0a8cffc7c87e068f8e3e199106c8a7a9745fd965a9651ebef001738ad6ac47df38134136db7adff9718f9fee80a647159e2cddbe5dfac5fe3eba8b1f8a487a4da2ed2f7220b6d7f6de16921b8588d16fabe70fc2bd42cf9242125c9a38f0709c075e2c3ffc3eeb20216ae2bc87001318c6dc4a5485492667c69569b6fd89a6a1a7d1dd5e052bcca599ab53b",
      "275943562419c9c56347cd65adb74da62afe0482244c9de77a2790fd07a35da2902c050000",
    ],
    [
      "ETag",
      "x2EDdDysDSlH3kbIu7z+4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "40",
      "10",
      "c5",
      "bfcbf4d8841a118d010f5aa41544dab41ea488aceb2446b399edfea988f8dd3b9b4a4f3df4b27979f39be5bdbdc0b16a7690c1b62a3f3d9af35d89ee35881cadaf9de58fa6c62244804e944c1e1ed4e0a46abf6ff4aa2b9d48e5fd71311e8d98b0728f4a407681a2c27a6721fbb8402314f29a50e41bc7903bebf03f5bbc4f9fa6391b8a76c1582ce7f3f1643e856bf4bbb4d9e8e3bf56d6d7080eb4cdb140838dc490411b3aa074b350cf0aa56b8c2d7923d1420bb783d290d7c210c5ecc4c3344efadd7e9a0c3a49afd31b32589314aea286d9e51b6703474ed4399db81d741930ade4a2457b7eb576e87053eba0ff9a2561b6be5d38393bb42f86389dc510ac97767e623e5288eeb892331e2390825ff9b9729015a2b678fd06499d4b65c3010000",
    ],
    [
      "ETag",
      "j/m7wmluhnpY2cta8c+kNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d0e201fe92eb10af22982d6201b069988110890a8209ddebd4e8ff0de0fc88b820891dddb8a30f0015eb96acd8bb9d72dd10a521fe28c4c71800d15deca3067e6f0aa4717d59ddd245f47b86ee2b065e9d592626aaeb5faa22cb5f0163075713f9e756d574bfb0b8e24e4e50976bc14eeceeed028fce909c331e58a4cb4c4e1f1f43c4729d787de31a2432c3b08bac546e57860816f5b06b2b24de227ba5e8c7af48d68dba44e29b336d91eb4d322b3b110b5142b0a6e1fd2068d95bafd6c57126c1e3ddd33bf980c835331c94d7f0d14300364ec282722a36fee42b7ac19f8b767f75747de0188e49c70f0fb07996971831a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-99-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b91f7b80281422048688d205d2341d84268d54d53e4989bd434c469ec30d18affbe1ba774ad2ab54fb17dcfb9e7dc8f3c917b9e6fc898c43c7da8a03c7cd98a989c115034c5d79bafb6e7ccb607e76ab1cd1e33dfd9dffe7a74261344f09a25e9aec8a02545553290e3f5aa9d96a22a6829440b13b56cbbd5b57ad6a83b34bb7db36f234f4296cc797e8fec3ba50a39ee744edaed548834035a70d96662f7f2ded9f73a4529b6c094ecbc95eca08aec7c2cfa2d138c2a2ef2c97a85062a0965043bca33b4f09fb9892fdea66e73ba6ba708de7306943151e5aab6852998c8139e56a5ce4ac64f44db7c75202b77ee4e438389acdae5514e7770666ca8a2913a14605c06cb85e1f997cb60e184ded28f56d32b77e1b4a7cbf97ae1af8c9b2b37700d45e30c34d7981817fae6e305f5372015cfb57a583fd7cacf0df2de8fa526a0b48426180d4d8b7647a61d27f19025a3f3419c9810c7a37838a0e7b1c9ec3ef4373150e46951cda2b9c8fb1b8bc1c01e46b60966d4b7475664b3512f4aa8ddb5d8a0d7b3ac01399e91bf255730e3b21092371d22378117ba5118acfda913baba848456999a35c6ea025e7b545820823ea8e95847b940a5badd9e1fba81330dbd6bb799f01c52ca0eab079c7142330988a625364f41b9101b6c18f19d853b43b09ed88f535092f1ef2752f7bc76f1aae52ff4100758db55fa4b5661e0f9dfb59d13e29a669586ec9b0329d0f21dd686ae8f7f10894bda64213fd76e704b9aa700122821679f4f13c13af0e9bf765a7cc4e2eaa38c5478c7dd61b2166125343bc475b9cfecae69f5ed21d1e052bd8b59dddea96b758e3a23ec2057cf15358b8f853662957c016110c7efeb6e1dff01324e5d9078040000",
    ],
    [
      "ETag",
      "W+9IADjyAHMjlzlNAvYZzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "657a8b515b4425f1425bdb9af88b78611a635618146559dc5d6a8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c12e4e43706115aff739cae3cd1af5c4141eaa3cd18a6e9948158205a8d99a489e8f46f379561f725d96077e57deed1bb549ab45840a36c819b82788624c4205eecb0952c691d60291e43c5d169d05fa9899e1d4f77ac327eab9084d3f9cf5fbed4ebf0b67ebba1832cd9605ff8fb5c5d982ad587918a1c43440a32593628b81ee199b8af12cc19212b90c504101170fd652e41993429468526a364b55e7d66954eb95aa5db19b042622603a1629b1b329e9032d344b3c712097e010208b920c47c5f595c671581831656fe83b76a1ef2b40d2a238c1e5df20e9dd30fa0c1fd82582ef1ce3224ff5957aec8fdabf1d47997e1ef5d0f6bb3f08a529a92be2f706dda9df1e8c0db7b878ef1c35aab11414a4429361b562376a75a7f21eebbd3051d37b5c2d73b42060f4773cc71adc88250acf6f77d0fdce7b020000",
    ],
    [
      "ETag",
      "muOOYYp7Nmt/rwm3/kq85Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10fd5790f74b2ba509e40b12a9ea58ca3aa494a484b4ea3e941862a85bc0149b4e5995ff7d6753da66dd560909ec7befdebbf399477447f30d1aa39026f71529b71f6e59885a88089cc06e7f4ecf9caffeed746ef73c2ffd75d1336637c9f13120a864719c152939e2ac2a23c2c7cb453b295955e092b123487464e8fa9131ec0e2dc3d48dbede1f019193349ed2fc0ee83742147cdce934e2ed84b12425b8a0bc1db1ec79bff3d0ed1425bb2591e09d7dcd0ec8f0ce3baa27298bb0a02c3f5e2ec041c549b92219a6297878a16ec28ffbb9db1467ed04c00f3422388a58950be90b52442c8f6952952a2b1a3f22e5f3d5075a385367126893d9d20b0ed63893e4f5a186b9d62c5ada1a8a8a694a5674b39691d5aab8d33efbb3738880831bcc095f6b575f1cdfd15eb6d6daf74ad77b443bd16cef54dbcfe27adad2f39c45a01d9c1c6a67fe6c39d73e5def61c0fe86704173653ec0614aa4f1a706bb6fcf5512b000e53ab832f521362c7d14c6a119c5566f10c63a09432b3407b817ead1a84ffa9b9060e009995db170cef250ef0e70d71a9896a17763633430cce1105a6bc5c4300783280c7b23bce9c668d7423f4b2ac829e505e3b46e32baf2ddc05905fed29bd881a3ca8871958ad3da9c2ce2b54f014502e83f75ed649432509227e67a81e3db93c0bd74ea2199920447dbc53d8c498c534e008d4b9c1141ca73b681a6a1f96ce106eeccb3a7c050273f6f101c8dbf3dbe10826da1ba2cd41b2d02dff5ce9481067189d34a411eea0f6417e015ed76ad7fa7b17ddfbe06695c9678fb470cca19f625fd2f120aaf56b5cd46d24052ad5975f75643b4fbb183a785e08ed55ae862e9f8d7a8def2494c4a9247ef0f1380",
      "55e0fd7f45736f010c371774b88035cc6ec4a54a54927a8669a6dcd76c43377b868e14b8146f6203c36a0e4be69019494672f154527d6f55df64a8e2cf2008c2e879eadc76bf01d49b719d39050000",
    ],
    [
      "ETag",
      "4PiGEZRjLPA3NNlzQ31Ohg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d904f4fc24010c5bfcb78b48d6d53019b7000d2284a88568d0743c8d24e4ba1edacfb474308dfddd96a88472fdbe97bbfd9bcb747d8d75d01096ceaeac3a23a5c54689edc90a1b68dd1fc91d469040fd0888a49f5b07d9b89ab6b9b16b8979783f07e47f3c978cc84ceb7d80a488e50d6d8141a92f72374a2455e132dd9ce30640ed2fdcf972fe96d9ab1d052e184e5eb6231992e523879e7a5f55aeeffb5b23a79b0a34d86252aec727419a4a21de666eeea69d1ca067d4d56e5a8a1877ba35264a550443e2b7e18047e388806a37018847110df30d9502e4c4d1dc3afcf1c0e0c19d164f4c5f5206240f523372dfbf393e5b82fe1a6b0cff6d78bce5ee4bcd5ef85d38341fda888e36974c9e2d1f027e78c5c76c39d8cb2e8412ef899ef6a0349291a8da76f0b55c0d8c4010000",
    ],
    [
      "ETag",
      "rKhWCa/5uEdekp+61JjoIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dd04b5283300000d0bb645d3b7c0203ee48c1f2d182153ac086e113101230046c1b1cef6ec723bcf703cabac6cb52ac5f044fe019885231f7f53e60063a58432993ed43a62496ae9371ba70689391a059f29962214d3da44def250b96f82d3fc1ed1c5a116c876b9f652d0f99489efacc1d22371dd6745d8c60ab844b2e9b91e1e998ebb69e8609a24e9ccdb03d4742405b1b4bda204a67954d897d979b36e972d6b4df0d0da062bdd8d141736e719a93c8c39b976eaec738652ecffd57e9f37895d52a18de3a968c7e46615dcd755c75f33821a2e88e780fcd19ec00beb39ee3a5e81f5c5533cd1df8b717ab60f8118070c93107bf7f20e8a6f81a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-101-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2bc87b6d1248082191a2354ae99a29210b21adb66942c65ca85b822936adda2aff7d17d374ad2aad4fd8bee7dc73ee07cfe4961709999098677735548f5f6e444c4e08289ae1ebc6daacbebbced3ddaf076bf604759dc3d8dd4ca788e00d4bd27d9943478aba622027bb6d37ab445dd24a880e26ea58a6d5b19cbee35a23d3b24d7b8c440979bae4c52dd2af952ae5a4d73b8a773321b21c68c9659789fdeb7befbedf2b2b71034cc9de7bcd1ecac8de27aa5f73c1a8e2a298eeb6e8a0965045b0a73c470fffa8497cfa3e7797d37d3743f03d6740191375a11a5f98828922e5595de9ac64f24cb4cf3707b2f596de3c3498c8eb7d1115740f274642158dd46309c679b05e190bff7c1dac66e162ed47dbf985b79a75e7ebe56ee56f8dab0b2ff00c45e31c34d7981aa7fae6e305f513908a175a3d6c9e1be5970e2d3e0ea621a0b48436188d4c875aae398ed378c45277308c5313e2d88d47433a884d36b6c14e62a0c8d3a29a450b518cedbec398398cfad6d08c6cd3b122373607d1880d208dad3471d331399c90878a2b38e3b21492b71d2257c122f4a230d8f9f359e8e912525ae7eaac35d614f0d6a3c20211f49f9a0e4d940b546adabdf0432f98cdc3c5a5d74e780919658fdb3b9c714a730988a615364f41b51209368cf8b3957786603db11fc7a02493dfcfa4e979e3e24dcb5fe9210eb0b1abf4976cc360e17fd3768e884b9ad71a72df1e488996afb136747df88348dcd2360bd9ecbce027699f0248a182827d3e4d04ebc0e77fdb71f3118cbb8f3a52e11d9787c9468555d02e11d7f5beb02dd31dda26d1e04a7d88394effd8b626479311f650a89792dacdc74a5bb15abe823088f3f775bb0e7f011c3cfc8b7b040000",
    ],
    [
      "ETag",
      "Q1QMJ86zqZw1Azeuule98Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d14e83401045ff657ca5110ca54ad28756ab25a9555b6a34c6342b0c480586ee2e364dd37f77166b356aa22f30339c59eebdb08197ac8cc187a72c5dd628d70729ea1b534c50d5b9567caba8540816a01629934b39c4fbc3cca1e56dd03ebf732f42b558a5dd2e132a7ac64280bf8124c33c56e03f6ca01405f25a44795d94f3a6b340af2b339c8693607cc17d41b1e9c7b3d1a8d71f0d606bed1763a1c5bce1ffb1f6b8b560414f134c506219a1d152495a60a403635389a2cab1a5a896112a68e0e6412aa9ae84246af1a4e5d84ecbf18ebc63a7633baeed9e30995324744625c3b3290b044d5ae4135ab14df018904dc98e93e6facae32c6e9c983218879edb08fc0ab0b624cb71fe37c8829f057f870f6c97c1774e1454977a4f9d8fae7abf1dc7a17e1e75d60b073f08a539aa3d1206978369d8bbbc36dce3ce7b7fad515d4be224159a101ddb3d6e773cfb3dd7533259f37b7c2d6bb42012fc7b0c330d7e227285db37c249f0f97c020000",
    ],
    [
      "ETag",
      "qrHeY/i1oqVI5FX4GTsjwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8554fd4fa34010fd57c8de2f9ad416282d6d13e3d5ca79c4967a946a7a1f69171870952fd9c5bbc6f47fbf0144adf7614202bbf3debc37b3b33c923b96f864445c16de17906f3fdca62e69111034c45dae1af9c5fd7676319b4eb4d5575f89f45fa7e3e36344b092c5699c4570c4d322f7808f968b7698a74546f3343dc244478aac1e297db53f507459d1646d88440e513065c91dd26f84c8f8a8d369c4db619a8611d08cf1b697c6cffb9d07b593e5e92d788277f6353b28c33befa89e44a947054b93e3e5021d141cf235c49445e8e185eabb1ff773b7198ddb21821f9807d4f3d22211a52f4ce1a549c0c222afb292d123a97cbefa200b636a4c1c69325f5acec186c625797328512e358b96b4c1a20216c19af99b32b25e6777d2277b3ec3083ab8a11cf846bafe6cd886f4b2b591be17b2dc05e9441a5b67d27e16d3929696652c1ce9e0e4503ab7e7cb4be974b58741fb3e70c192cabc43dd084ae34f0d36ff3cd79240052ad7c1b52ef7a93290876ee0ea5e30e8f6dc4006d71db87a8f765dd91b6aa0f92e50e489327bc5a209b68c7615aa2bbaeaabfdaeab2a5d0f40d341d57b7ad01bc810f47cd7d57d8dec5ae467ce049c319ea59cd54d26d7b6e9186bc75e5a93b163546504b488c4596dae2ce2b54f814522e83f75edca284b51a93c31d3720c7b3c71cc2ba31e922984d4db2eee714c021a714034cd690c02f259ea63d3c8e57c613ae6dc1a4f91519dfc6583e064f4edf185e06cb3aacba27a9385639bd67965a0415cd1a8a8200ff507a1197a25bb5debdf69c6b63d5ea134cd73ba7d13c372fa5a49ff8b4485af56b5cd465221a55ab352f7567db2fbb1c3a745f08ed55ae4cbd2b057a4deb221801c12effd6142701578ff5fd1dc5b04e3cd451d2e708db3ebf152c5cba19e611657ee6bb6220f87f59f46d05cbc8929b232e8358755e62833420c89782aa9beb755dfca50c19f4118c4d1b3aa73dbfd06ded378a239050000",
    ],
    [
      "ETag",
      "s2ErKqyMKMLC4YZd1l7xBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90416bc3300c85ff8b764d2029a1ed023d2ca36c8550b66ca587518a932a59dac44a6d99514afefbe46eecbc93ade7ef49cfbac2a9d50748a16c9bb34373b96b905ffda540eb3ab6720ca42d4200c8aa11322acb6da695dbceb2288f4c7b3e63a99ac542085b7d62af20bd42dd6277b0907e5c41ab1ec5a67a729a05e2cbe0ebd5fa7df9b42c44e8e9e085f526cf1fb27c0963f067daef87d3bf2cbb3180239505d6685057e8330c868e58f1ca7fcfaa7ee830b4e44c85166ef0eda131e40665884251c2389a84f174329dc7b3284ea2e45ec88e2ac52d6981376f120e985875057d59bf0cf8adb30ba37d3124dd2dfac6c97cf633e691fc6896486c1c065029d9d273cb90d6aab3387e03bc483d8e83010000",
    ],
    [
      "ETag",
      "0bbWBnauW7B0L0riqqebag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dd0cb7282300040d17fc95a9d2aa485eec0a046b44a4063dd64784405316008cf4effbd4effe09efb03c238e655c55471e7027c823e9c999378e296863db7d2459de4b63735445e188fa936f47e149d6f505b2951b1b4c8efe7d0dd39ed108de3a1eda890d6d074d2a6757bdb65cbf4ba37481250424c4aadf7658ebf43ec138266585141101ec3ad5746ec8ad17283ca6390343d712e4a9ee7ba75bf1c5a973db10bc59ad981969c1ad56af5d19f4de5e38986286330efbc0cc218174896786389b1e97e1883f3d4e5210d4eab6d1f478b62f3a5aff76f59e8791aedc108f0ae4c257fe5bfb81a34cd11f8b733d597fc35c0e6a1e412fcfe0112de49f81a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-103-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fdb3014fd2b91f795b6491bfa92aa519530a2b5294b53109ba6c8716e82218d83ed8018ea7fdf8d431908697c8aed7bce3de73ef24cee7899922949787e5f837cfa722b12724440d31c5f1d77213d6943faf3fa4f5eaefdd570f4f87d3e9b2182372c457755011d256ac9404db79b6e2e455d5129440713751c7bd07186fde1d819d98e6bbb13242a28b2252fef907ea375a5a6bdde41bc9b0b9117402baeba4cec5edf7b0ffd5e25c52d30ad7aef357b28a37a9fa87e2d04a39a8b72b6dda0835a818c614779811efe51d3e4e47dee2ea7bb6e8ee007ce803226ea5237be30051365c6f35a9aac64fa4c8ccf3707b2f196de22b29828ea5d1997740747564a358df55305d659b85e597e70b60e57f3c85f07f16671eeade6ddc57ab95d051bebeadc0b3d4bd3a400c3b566d689b9057841fd1494e6a5518f9ae746f9a543fec7c134049456d006e3913da4ced89e24593262d978709c643624c938191dd34162b3890b6e9a00459e11352c5a8ad2b587c718821846591abbd4863819a783d8b1d331cdfa6ee6da13b23f228f926b38e5aa128ab71d2257a11f7971146e83c53cf24c0919ad0b7dda1a6b0a78eb51638108fa4f4dfb26ca052a35edf683c80be78bc8bff4da092f21a7ec69738f33ce68a100d15462f334c89548b1612498afbc53049b895d1c828a4c7f3d93a6e78d8b372d7fa54738c0c6ae365fb289423ff866ec1c1097b4a80de4a13d900a2ddf606de87aff1b91b8a56d16f263eb85d7a47d0a21030925fb7c9a083681cfffb6c3e62318771f7594c63b2e0f538d0a93d02e1137f5beb01d0753997f5553a93fc49c49ffd0b6264793117650ea9792dacdc74a5bb15abd823088f30f4cbbf67f01caf714627b040000",
    ],
    [
      "ETag",
      "14CrEr0edZYzgnOIM67wKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53",
      "82401086ffcbf6319c81323466fc80a565a91962334ee338272c8801477747658effbd3d326baa99fa02bbcbb3c7fbbeb08187240fc18145123f9628d60731aa5b5d7828cb5449ba153c970806a0623191717bbaecbe467787136b6aca8ebcf65fae3cb7d52242064bcc18381b88124c4309cefd06729621ad053c2db37c5e7506a875a18763dfeb0d2fa8cf78a8fbe1a4df77dbfd0e6c8dfd62c8149b57fc3fd6665b03567ce1618402f300b59642f01506aaa76d4a961529d6242f4580122ab87a100b5e164c705ea349cd328f6b967d6437ad8669d5cdfa2991290f984a784ef0644c024171c5528f3f934db0091055498ea3eafa44e324ac9ce8b237f4ed7a25f02b40daa224c5f9df20095e32fa0e1fd82e83ef1ccb7899ab3dd5eddfb8bf1d47a17e1e75eefa9d1f845414d51ef17b83ced8770723cdcd76dedb6b85722438252951876899f5e649c336df733de33a6b7a8fa3448906048c7e8fcb448113b154e2f60d422dd8c37c020000",
    ],
    [
      "ETag",
      "gBYhFzfV+U1Y0sEsKTxJRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85546b6f9b3014fd2bc8fbd24a7940422189547569c23aa494b484b4ca1e4a8c31d40daf609329aaf2df770d4ddbacdb2a21817dcfb9e7dceb6b9ed09aa5011a209f459b9216bb4f8f998f1a880a1cc1eef5b43d32fdbbcb4d34a5dbcde5b775e9c78bdbf3734030c9e238c963dae4595910ca07f3592b2ab232c745963521515353f5a666748c9e66aa9aaeea7d20721a871396ae81fe2044ce07edf641bc15655914539c33de2259f2b2dfde76da79913d522278fb58b30d32bcfd81ea459c112c58969ecf67e0a0e4b458d204b3183cbc5203fff371ee16c3492b02f096118a09c9ca54485f90826469c8a2b2a8b2a2c113aa7cbef940336b628d3c65349d3bdec90a2792bc3a5530570e8b86b282a24216d3250b5632b25ce66be58b3bbd86083878c09cf29572ffd5722d45590558d095f2a354d52e552e94a133568e33d88e32771c6be6292717a7ca953b9ddf28978b230c580f28172cad8c7bd88fa934fddc5cfbfd994a021660a40e2e4dd5c05a4fedfba16f92b0d73df34395fa7ecf37cf70d757495fa77ae0530c3c21b3572c9c42bbf43e31425d35cd40554ddf0c7ba1de353562f60dac6343eb865433bb0146fb06fa553041c78ce719677583d1bd6b7bd6d273e7ce68e8595519212e6331aecdc922defa14502480fe53d75e4659064af2b46cc7b3dce1c8b3efac7a402634c26437dbc0888438e614d0b8c00915b4b8ce02681aba99ce6ccf9e3ac30930aa53bf3920381a7c7f7a2578bbbceab2a8de682c0bd8bf497887e3b2026ceb0fd4513b6a53ed34b533b4df37fe9d69e8bac305a8e3a2c0bb3f625091a14bfa5f742a7cb5aa9d1e743524d55e5c1cad0cb4ffb987a781e08ad55ae8766eb90b546fb934a4054dc9c7f304e02af0f1afe2706d010c171774b880358c2fe1528514b41e639654ee6bb6a6753add1eaac0857817d3b5dee1bc640e9991263415cf25d5d7b6ea9b0c95fc050441983ec776ae20fa1b4dc9f70038050000",
    ],
    [
      "ETag",
      "MO/C7bVBqgOevqBZkublYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d90414fc2401085ffcb78b44dbaa4416cc2010c519410a9540f86906d3b2d85b6b3ee6e3584f0df9dadc493072fdbd737df6cdedb131caa368708d2aafce8501faf4ab42b2762345d6d0d7f14b506c103b4b264522769be1246e4e97af0f4660eafd7ea7137198f9930d90e1b09d1098a0aebdc40f47e825636c86bb2a1aeb50cd9a372fff3e57a763f8bd9682877c632592c26d3c50ccedeefd276ab0eff5ad99c3dd8531a63811adb0c5d06a5698f999dbb7a4636aa46df50a73334d0c3fda0d4d429a9897c767c1184be180e862371138830086f99ac2993b6a296e1e485c381252beb98beb81e0c18d0bde4a6457f7ef6b62b71511ba7ff9a0937db5c2e9c1e2d9a674d1ccfa04b168e829f9c77e4b25bee6475871e64929ff9a1b21015b23678fe067cdf715dc4010000",
    ],
    [
      "ETag",
      "rUbdQ1s1dbT2KWskV+pJhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c9",
      "8e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fe9598d424becdc5866403403a4e07621955496b294b23b997f1f339ff0de0fa049c2ba2eee1bce6af00116aae04db2398abd61ea9935d7262a4ebd7de547fff122e740732fa373d8055e813e6fa96c9d69bae36ca017285f0e7f6681e9f93bb24e0d9d5939c990fd705181666a3cdd6650bca3a9b6519bc172ba6dd9e2b770a4e1b929c3d8cfd60d97104b8d468313703c6802caa20caed011423dd49c107b3b77a6329126bfba6a552f4a820f25e37871035b54bd111ab5ff7daab642498b49b7a2f44bbbab25d9c30235a966955635821560b3c825ebe2fccd5511c62bf06f8ffb45b07780c1a86412fcfe017fc3e1351a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-105-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6fda3014fd2b91f7b80209a10490d08a205dd9206c21b49aa629b29d9bcc6d88d3d861aa2afefb6e9cd2b5aab43ec5f63de79e733ff248ee449190096122bbafa17af8702b193923a06986af0b76fbc5d3377e72a0eb2bfbeb25abef3eaeb2e91411a26129ba2f73e82859571cd464b7ed6695ac4b5a49d9c1441dc73eef38c3fe70e478b633b00763242ac8d39528ee90fe5beb524d7abd9378379332cb81964275b9dc3fbff70efd5e59c95be05af55e6bf65046f5de51fd944b4eb590c574b74507b5822a863d15397af8474dd8c5ebdc5d41f7dd0cc107c181722eeb4237be300597452ab2ba3259c9e491189f2f0e64ebaffc79647199d7fb222ee81eceac846a1aeb8712accb70b3b696c1e5265ccfa2e52688b7f32b7f3debce37abdd3ad85a37577ee85b9ab21c0cd79a5a17e616e005f513505a14463d6a9e1be5a70e2ddf0ea621a0b48236187bf6903a237bcc52e6f174e49eb3d406c646cc3ba72eb3f97800838401459e11352c5ac822716d87520ab143fb493c60ae1b8f47c9384efadc65236fe0f5bd3e399e913f95d0b010aa944ab41d2237e132f2e328dc05f359e49b12525ae77ad11a6b0a78e951638108fa4f4dc7262a242a35ed5e06911fcee6d1f2da6f27bc828cf287ed3dce38a5b90244d30a9ba7a15acb041b4682d9da5f20d84cecdb29a8c8e4e723697adeb878d1f2677a84036cec6af325db285c069f8d9d13e29ae6b5811cda0329d1f26fac0d5d1f7f2112b7b4cd42beeffcf007699f4248a18282bf3f4d049bc0fb7fdb69f3118cbb8f3a4ae31d9787ab468557d02e9130f53eb11dc7ed3be65fd5b4d26f62eed03bb5adc9d164843d14faa9a476f3b1d256ac56cf200ce2fc03d3aee35fe7febf697b040000",
    ],
    [
      "ETag",
      "DbjJ7tWEdvaMH0KFbuk+Lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92414fc2401085ffcb782db13558b18987a288248858ca410d21cb760ac56db7ee6e4524fc77672ba25113bdb433d36fb6efbd76038f59914000b36cfe54a15a1fccd1dcda22425d09a3e956ca4223388086cd897ce578df5d8997a8c50fc7861f795d76578467674468bec09c41b08134439168081e3650b01c698d4b51e5c5b4ee1c30ebd20e4771d41b74a9cf6562fbc1b8df0fdbfd0e6c9dfd62c20c9bd6fc3fd6265b07967216618a0a0b8e564ba9e412b9e9599b9ae5a5c0869695e2a8a186eb077325ab9229291b346978ee71c3f38ffc9677e27a4db7794aa4909c994c16048f4724108c344c44724536c12740d525394eebeb338db3a47662cbde20f69bb5c0af00694b3381d3bf4112bc60f41d3eb05d06df3996cbaa307beab27f13fe761c85fa79d44518777e10da50547b24ee5d774671783db4dc64e7bdbd36a8874a52921a6d889edb6c1d9ff8ee7baee7d2664def098caad001cee8f7b8ca0c0429131ab76fa73730417c020000",
    ],
    [
      "ETag",
      "zceZGwlxR8c/Utc21GaYnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8554696f9b4010fd2b68fba5957c2c06e3438a52d7a1299283538c1bd96d652feb816e8259975d525991ff7b07a893b8572424d89df766de5c3c903b916dc8904422f95e40be7f752b23d220a05982b75e9225eceec65f2e97629e2cf6befeb1884767678810254bb1ed2e85a69245ce410de7b35692cb62c772299be8a86952a7693a1da76ff6a869537b804405693c11d91dd2bf69bd53c376fb18bc954899a4c07642b5b8dc3edeb7ef3bed5d2e6f816bd53e8dd9c630aafd42d4f35472a685cccee633545028c857b06522450d4fd44df4f6d4774bb06d2b41f0bde0c0389745a64b5de882cb2c164991575ec9f081543a9f7d90993b71c7a1319ecefdf0f59a6d4bf2fa8dc194713c348c3526158b145662b32e2dabd5eece781f4cafd0820abe31056a6ddc7c7003d730d64aa3bab5f1a5a0d402e3dc18f917c6a90bcf37e6beefce42e3f5f91be33298ceaf8d778b130c6adf80d222ab94872c4aa154fdabbade9f4d2d094ca392dab8ea5187997d3a88e2a8c7e3bed58d620a51d48f7a5d6645940f6cb0371130e4e9d27bc56299cc6c0656dc07d3b1a91599dd7e8fc60eef59dc1ab02eef9b4e6f03780d1d7268901fb9d07021d44e2a515798dc045ee8aec260ee8f47a15ba511b322d517b5b83289e73a352689a0ffe47528ad4262a4b25d9e1fbac1681c7a9fdc7a42269030be9f7dc7198959aa00d12c675bd0905fc90d168d5c4f675ee84dfdd1041955dbaf8f0845869f1f9e08e17e575559576f127a57d8a3d1d575a5e108fac4d2a242ddd71fa4433bb4493b4db31b9a9da1690d4dbb45295d92c3a1f16fe7a320182d5010cb73b6ffcd86493a7649ff4bd40a5f9d6af147152629a33d6a3a3939e4f0f5804f83e0dad5b1c8c7b91b2c487d15400c3964fce51143706578f9f7715c6504e332631c5c0b2d70a2b92aa3f01ceac916db4a7dcd364ddb1c50528173fd87cd729c630b4b1fa547d842a67fa554af7255b7d254a847101a71207dcfbf44eb4ffea6bd704c050000",
    ],
    [
      "ETag",
      "IgngakWNZZZiUgYyNtwYfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90416f82401085ffcbf40a0928b196c44355d29a1863a9a6260d312b0c145d18babbd418c37fef2c353df5d0cbf278f3cde6bdbdc2a9ac3308e150169f2daacb5d81e6c58a18752b8de64f43b54670008d28989c7ad930dbcd77f1f06db6968198cb526cce9309133afdc04a407885bc44996908dfaf508b0a794d54d4d686217369ecff62b5899ea2988d8a326bacb6cbe5e3741941e7fc2eedf7cde95f2b49e7c0910e31e6a8b04ed16668141d31350b5b4f8baa91e86a6a558a1a7ab81f148ada462822971dd7f746ae3f1a8cc6febde7075ef0c0a4a45498926a86b7af1c0e0c1921633a733d1830a07ac94df3fefcea6d5be2a612abff9af97696dc2e9c5e0ceab5228ea7d1260bc6de4fce19d9ec863b19d5a203a9e0677e2e0d84b9901abb6f28aae008c4010000",
    ],
    [
      "ETag",
      "B0d3dXDXR3WCPl4aDliaTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dd0db7243400000d07fd9e734830da26f48894b28317179d971d911562c5646e8f4df9be9279cf303f2b2c48ca19912dc834fb0e682b22ff7ce70d474b576cb4775eadae2bec9cb37f23f0ea617f97e8bdb3e8d2d15f2b2274d5faba3de0d3ff34cfe6c34451f982a2a29339d31706ffdacf557c7e4e0811d6017306b8ba95dc75242971389132208ec26197751cacf99cd42c85d273dbacc30e18b7459f5f4a52f95a63e2bfcb29bd81d1bda90d03b0a945396945c46e2a9cac37dfabe90675b1e8a169e4824c9351ae584c95915c26eb58b2ae3cfc576435c56831dc0afa1993043cd9b0b4545d9817f3b9ad701bf03349c4f7802bf7f6f29a36a1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-107-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbd826813cc8438ad628a52b52201b9056db3421e35ca85b822936a9a22aff7d17d374ad2aad9fb07dcfb9e7dc07cfe481175b322309cf1e6ba80e5fee4542ce09289ae1ebdecd5379b67a2aad81fd6b7c771386eccc5bcce788e00d4bd25d9943478aba6220679bb09b55a22e6925440713752c73dcb1ecbe3db1c6a635348753244ac8d3152f1e907ea7542967bdde49bc9b0991e5404b2ebb4cec5edf7bfb7eafacc43d30257bef357b28237b9fa87ecd05a38a8b62be09d1412da18a6147798e1efe51b7c9c5fbdc5d4e77dd0cc17bce803226ea4235be30051345cab3bad259c9ec99689f6f0e247456ce323298c8eb5d11177407e7c6962a1aab4309c655b0f60cd7bf5a07de2272d77e1c2eaf1d6fd15dae571bcf0f8ddb6b27700c45931c34d7981b17fae6e305f5b720152fb47ad43c37ca2f1d723f0ea621a0b48436188f4d9b5a13739aa4c998a593c128494d489249321ed14162b2e91086db0428f2b4a866d14214ac3f4a53b0fbb13d18f6e3e1683c8993d4eac753607632ea5b26db0ec8f19c3c555cc12597a590bced10b90ddcc889a360e32f1791a34b48699dabcbd65853c05b8f0a0b44d07f6a3a36512e50a969b7eb474eb05846ee8dd34e7805196587f011679cd25c02a26985cd535079628b0d23fec2732e11ac27f6fd149464f6fb99343d6f5cbc69f92b3dc201367695fe92300a5cff9bb67342dcd0bcd6907d7b20255abec3dad0f5f10f22714bdb2ce4c7c6097e92f62980142a28d8e7d344b00e7cfeb79d361fc1b8fba82315de7179986c545805ed12715def0bdbb246963d241a5ca90fb1813938b5adc9d164841d14eaa5a476f3b1d256ac96af200ce2fc7dddaee35fb4963e867b040000",
    ],
    [
      "ETag",
      "vIlfs+Lwp136Z7hVSSc+MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d925b6f82401085ffcbf4151368285a121fb4d5d6c42b62fad018b3c27051607177b1b1c6ffde596a6dd336695f6066f86639e7c011b66911820beb34de55280e5731aa992e3c9455a624dd4a5e48040350b198c8ed0465ff69dbdddb2cdcd99e78ed26c97ad66e132183047306ee11a214b35082fb7c8482e5486b01cfaabc58d59d01ea50eae1dcf706e307ea731eea7ebc180e3bdd610f4ec66531648aad6afe1f6bcb93011bbef630428145805a4b29f8060335d03625cbcb0c1b9257224009355c3f8805af4a26386fd0a46199cd86e55c3b2dab695ab669df1299f180a99417042fe6241014572cf3f80bd90487005197e438aaaf7b1aa761ed449783b1efd8b5c0af00698bd20c577f83243861f41d3eb07306df3996f3aa5017aa3f9c747e3b8e42fd3ceabee3f77e1052515417c41f8c7a73bf339a6a6e79f6de3d289453c12949893a44cbb45b374dc77ccff58eebace93dae12151a1030fa3d1e53056ec43289a7378774e5177c020000",
    ],
    [
      "ETag",
      "kOesFWkBv4adq4RrzBhhbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010fd5790f74babe603424248a4aacb5aba21a52423a45db54d89710c750b9862d32aabf2bfef304dda741f9590c0bef7eebd3b9f7942772c5ba1210a597c5fd262fde19687a881a8c431ec26d3f4de1c7c3bfa756ece71198c6e8f3aaef3787c0c0856b1044ef38436052f0b42c5703e6bc5052f735c70de84444d43b79b86d5b16ca3af1b5dbd3b00a2a0493466d91dd06fa4ccc5b0ddde8ab762cee384e29c8916e1e96ebffdd069e705bfa5448af6be661b6444fb1dd59384132c19cf8ee73370500a5a2c688a59021e5ea8abf0e37eee16c3692b06f003231413c2cb4c56be2005e159c4e2b25059d1f009299faf3ed0cc193ba781763a997bc1c112a7157979a861a16d170d6d0945452ca10bb65a5691c522bfd3cefdc90544c0c10d16542cb5ab2f8eef683b9af6a3d475936a27dac83bd3f673b89e36f73c671668072787da677f329f6a9faef730607e45856499b21ee030a195ede7f6ba7f9e6a45c012acd4c1455fb7b061eb83300afb24b2cd5e18e9340cedb0dfc366a8934197765721c5c0935576c5c219346cd01f58260949d7ee587d7d65524af4ee4aa7906a60743a3ddbe846762f429b067a2c98a4674ce45cb0bac5e8ca77036711f873ef741438aa8c0897893cabcd5545bcf629a14800fda7ae4d15651c94aaf372bdc0f147a7817be9d42332a63126ebd93d0c49841341018d0b9c52498b0bbe82a6a1e964e606eec41b8d81a1ce7dba450834fcfef44208d6b9eab2546f743e9e8c02abab1c6c2197382915e6a1fe4046ab07884de3df6946be3fba06695c1478fd2606e5588afe17058557abdae64e11556adb55676f65a1cdcf0d3c0d0437acd6425fe78e7f8dea2d9f46b4a019797f9800ac02efff29b6b716c0706f41474858c3ec1251a99082d633cc52e5be66",
      "1b466f601b48810bf936661986b93dac2a479591a63493cf25d5b756f5ad0a95620782208c9ee77a9f21fa1b4d8f954437050000",
    ],
    [
      "ETag",
      "lPmq39X+zF3UauTAj+2IEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcb786d93b61284261cc4206008d12a0763085996692db43bcbee562184ffce6c259e3c78d9bebef966f3de9e6057aa0da4b02e8b7d83e67853a07bf12243db54cef24793b20801a0130593ef89247d183e751ea3f1a1df8fcc44edbbc560c084959f580b484f9097586d2ca41f2750a2465e133535ca31e48edaff4fe76fa3f12863a3a68d37e68bd9ec7e381bc139f85d5aadf4ee5f2bcb73005b5a6798a34125d167d086b628ddd4d7b3a2d61586961a23d1420bb783c250a385210ad909e3a817c6dda4db8befa2b81375fa4c5624852b4931bc78e570e0c8892aa36fae070903a695dc346fcfafd6f625ae6ae9f55fb3d8cf96d70b874787f6d910c7b3e893dd26d14fce07f2d91d7772a6c100a4e0679e940ed25c5416cf17840f99ddc4010000",
    ],
    [
      "ETag",
      "Y2copxBJ4F0Gx990rHnq6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb64ad8e846fbae3375a33156c45904d264034f14331c108767af73a3dc27b3f80d635538af4df67d6823730528866f50c775e10fa22d65cc122ccb04b85e9794749ad9467d5427e182d4129be3eb82cb94ea816b9911f9fa91fc26c3917b010ab9b73c026c64ab9e5b938605bee5212af7d2757500b16f82b87ef87796f86eecd79de8bb864f7f2542b23d6f1d5aac436e2d53ea2bb41a3d65f3f475992c586db3bf384428f782769043d82793bdd0cef09d4abf1e29e23d8b3c7d2f01cb576a79feec1ccd1d66f6c2b2a93eaabb9344d0e26800d9d904c11f1e29a364213f06f27fdd8b15740c0a86412fcfe0117a044ff1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-109-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6fda3014fd2b91f75a20814002125a194d5724086b08ada6698a6c7313dc86388b9d5655c57fdf8d53ba5695d6a7d8bee7dc73ee479ec9bd2876644298c8fed4503d7db9938c9c11d034c3d779becff7ac90e36f3337babae6ee634aed6c3a458468588a1eca1c3a4ad6150735d96eba5925eb925652763051c7b1c71d67d41ff98e673baeed8e91a8204f97a2b847fa5eeb524d7abd9378379332cb81964275b93cbcbef71efabdb29277c0b5eabdd7eca18cea7da2fa35979c6a218be976830e6a055502072a72f4f08fba63e7ef7377053d7433043f080e94735917baf18529b82c5291d595c94a26cfc4f87c73209b6019cc638bcbbc3e1449410f7066eda8a6897e2ac1ba8cd62b6b115eaea3d52c5eacc36433bf0a56b3ee7cbddcaec28d757b154481a529cbc170ada9756e6e215e507f074a8bc2a8c7cd73a3fcd2a1c5c7c134049456d00613cf1e51c7b7c72c651e4ffdc190a53630e6336f4807cce66317dc1d038a3c236a58b490051ff8c3947bfd84f547347147dc4e281b3b899d0ec01b310f862925c733f258090d1742955289b643e4365ac4411247db703e8b0353424aeb5c5fb4c69a02de7ad4582082fe53d3b1890a894a4dbb17611c44b379bcb809da092f21a3fc69f307679cd25c01a26985cdd350ade40e1b46c2d92ab840b099d88f535091c9af67d2f4bc71f1a6e5aff41807d8d8d5e64b3671b408bf1b3b27c40dcd6b0379680fa444cb7bac0d5d1f7f2312b7b4cd42aeb741f493b44f11a45041c13f9f26824de0f3bfedb4f908c6dd471da5f18ecbc355a3c22b689748987a5fd88e33f25d871870a53fc4c69e7f6a5b93a3c9080728f44b49ede663a5ad58ad5e4118c4f987a65dc7bfa928abce7b040000",
    ],
    [
      "ETag",
      "Clhlhbno9BA4RHQc4wfa0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92414f83401085ffcb789426602856921e5aaddaa4addad27830a6d9c240d185a1bb8ba636fdefcea256a3267a8199e19be5bd075b78cccb044258e6d9ba46b539c8d0dcd8628aba9646f3ada25223388046644cbe18771e5cdcae653223bfef1f6697ed5c3d77bb4ce878858580700b698e32d110de6da11405f25a4cb22eca45d3396036951dcea2e97072c17d4189ed27f3d1a8d71f0d60e7ec171361c4a2e1ffb176bf73e08196534c516119a3d552297ac0d80cad4d2d8a4a624b53ad62d4d0c0cd834c515d0945d4e249cb734f5a5e701474bc63d7f35dff844949b13039950ccf672c100c1921a7f4cc3621604035253b4e9beb138ff3a47162cbe1240afc46e05780b5a5b9c4c5df200b5e09fe0e1fd87b06df3951505d9a3d753ebaeafd761c87fa79d4592f1afc20b4e1a8f648341c0f66516f7c6db9fb77effd8d417dad8893d46843f45cbfd33e0edcb75c4fc966cdef098daad18158f0ef71991b08532135ee5e017a7f39647c020000",
    ],
    [
      "ETag",
      "zt0U6GWqldSo4B4+gH5irw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3010fd2a91f70f48a58ddb262d9510eb20b04890429ac2d80fb58e7b291e691c62078650bffbce09052ad8902225e77befde3bfb9c477223b2391990582c6e4b281e3efd96316910d06c81ab4e7ea8e0e8fbb7e85cc7d19f7b0e5edf0f877b7b881086a5d8324f6147c9b2e0a00693717351c8326785943b586887527b87ba6db74f7b36eddadd5d242a48931391dd20fd5aeb5c0d5aadb5787321e52205960bd5e472f9bcdeba6bb7f242fe06ae556b53b38532aaf581ea7e2a39d342667b93313a28151453583291a28717ea3cfebc59bb29d8b2b940f09de0c0389765a68d2f2cc165968845595455c9e091543e5f7d90b177e21d44d6c16812445b33b634e4d9b6c594b50e1ad60c9b4a440a53319f99cc749adf5847e1e81433e8e09a295033ebf2ab177a963533a09fa56d77b8b56f0d83436b93ef07d62408bc71646ded6f5bc7e16872667db9dac0a0f139282db2ca76c4e2148ce5a7adf5df9ea821308d36eae4b467bb8cf6eddd38897b3ce9779c38b1218efb71cf619dd8e6bb5de8ce6360c8d3a67ac56299cc1cda86a4dd99dbb4c75d873ab46377a9db73dcdd769fcd7b2e755c608c025935c87d21341c0a954b25eaed2597a11f79d3289c0407c3c8abda485899eac3da9c69e2b54f8d4d22e83f7dad4c5648543267e50791170e0f22ffc2abc7e304168c3f8c6f714012962a40342bd8123414a7728e9b46ce46633ff247c1f00419d5999fad118a0c7e3cbe10a287bcda655dbd8d96dbadf4d7800b969615e2aefe20d421ab55e3df25866138bc42595614ece1fdf2efd6aff055545b7cd623466d1db5372297ac7eadf06910bc59b516399f78e115a9974248a0808c7f3c4808ae121fff21d6b715c1785f5147698c716eb9322abc807a7ec5b2725fb329edb96e9b54e042bfc9f569",
      "7b7d50a686a9084bc8f4534bf56dadf6cda44af50cc2248e5de007c798fd0be7bf21e92f050000",
    ],
    [
      "ETag",
      "5pDseFZXTQtbTxwceE8IRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d90414fc2401085ffcb786d93160960130e62aaa2a4d102316a0859cab416b63b75770b6908ffddd96a3c79f0b23bfbe69bc97b7b827da9b610c1a62c3e1bd4ed4581f6d915299a465ac3574dca20788056144cbec593c3eba27a54ad7c19be3ec8db244ee6c7f19809937d6025203a415ea2dc1a88de4fa044853c262a6a9465c8b6b57b4f93457c17a72c54b47542b29ccdae27b318cedeefd07a5defff35b23a7bb0a34d8a396a54193a0fb5a61d6676eae21951d5127d438dced04007778d4253530b4de4b3e28761e08783de60140e83b01ff4af989494095b92627839677360c90a99d291e3418f01dd959c34efce03cb975d884307386f7ff742d75bfd2c9cb416cd9326b667d039eb8f826f9f37e4bc5bce6475831e6482bff9beb410e5421a3c7f010c86d144c4010000",
    ],
    [
      "ETag",
      "ZEBvYTmKnylW7YJlFNENSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dd04b5283300000d0bb645d3b7c0621eea02d5a40182a11ec8649217c0a84103e421cef6ec723bcf703709691714ca7be2114bc800d2b709fed5d665807b3c44b74b6c53b1a0c18895a401cb28390eed64d18e810d122405cee8a2bb14bb8194daaccb60c2933f4fbd46b63ad5df25ecc145a83fb6572b94a92a5a8b843ba5e147e24c16db8d22e93917acab9ee389afc3ae0c94d241f15ab75a3e7529f4c16da24e3ec1955235424dcb6f1c9cca3968ce172d14a36ada63bcb43a57b246e12bfc8920fd5db3c69d66725f0d7cfe1fb788c9f54cab0f2d66111801d202bab3919d3fac155350877e0df9e4e1b238f008b604e38f8fd03dc37299b1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-111-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6f9b3014fd2bc87b6d022490a491a2354ae81a29212b21eda66942c65ca85bc0149b4c5595ffbe8b69ba5695d6276cdf73ee39f78367f2c0cb844c49ccb3c706eaa72ff72226670414cdf0b571c7eef0509857d958a8e687b71ce673ff7a3643046f599216550e3d299a9a819cee77fdac164d456b217a98a867db76cf1e0d46137b6cd98ee59c2351429eae79f980f43ba52a3935cd93783f1322cb81565cf699285edfcdc3c0ac6a710f4c49f3bda68932d2fc44f56b2e18555c94b3fd0e1d3412ea080aca73f4f08f9ac417ef73f7392dfa19820f9c01654c34a56a7d610a26ca94674dadb392e933d13edf1cc8ce5b7b8bd060226f8a322a6901674642158dd45305c665b0dd182bff721b6ce6e16aeb47bbc595b799f717dbf57ee3ef8cdb2b2ff00c45e31c34d7981917fae6e305f513908a975a3d6c9f5be5970ead3e0ea625a0b4842e188dad11b527d6799cc663964e866e9c5a10c79378ecd2616cb173079c24068a3c2daa59b4142563e08e188d236b30702207ac24a22317af2c766c364a2dc74ec8f18cfca9b98225979590bceb10b90d56a11785c1de5fcc434f9790d22657cbce585bc05b8f0a0b44d07f6a3ab6512e50a96df7ca0fbd60be0857375e37e13564943ded1e71c629cd25209ad6d83c05f54624d830e2cf37de12c17a62df4f4149a6bf9e49dbf3d6c59b96bfd2431c606b57e92fd985c1caffa6ed9c1037346f34e4d01d488596efb036747dfc8d48dcd22e0bb9de7bc14fd23d0590420d25fb7c9a08d681cfffb6d3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb7d61dbf6c4715da2c1b5fa1073c7cea96d6d8e36231450aa9792bacdc74a3bb146be823088f3f775bb8e7f010ede8d1f7b040000",
    ],
    [
      "ETag",
      "u5753vm/Hg7otuXED3lANQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "10",
      "45",
      "ff657c2d093558a0090fa080684128252131842cedb414dbddbabbd510c2bf3b5b118d9ae84b3b333db3bdf7b607784a79042e6cd2e4b944b9bf4850cf4ce1a32a33ade85608ae102c40cd1222977c166eef533ef497edddc063f9b07dc7924e8708156e3167e01e204e318b14b88f07e02c475a0b4556e67c5d7516e87d6186f3c01f4d86d4e72232fd64e179dd9ed787a3755e8c9866eb8affc7daea68c14e6c7c8c51220fd16829a4d861a847c6a6627991614d895286a8a082ab07891465c1a410359ad46cdbaed9cea5d3b29b75bb516fb489cc44c8742a38c18b3909042d34cb7cf14a36c121405625398eabeb0b8dd3a87262cad124701a95c0af00698bd30cd77f832478cbe83b7c60a70cbe732c1725d7676ae03d747f3b8e42fd3ceaa61bf47f104a53546724188dfbf3a03b9e1a6e75f2dedb6b5453292849852644bbde685d359dfa7baed7c2644def71b52cd18290d1ef719b6a706396293cbe01980812387c020000",
    ],
    [
      "ETag",
      "XnQchKinGRX9jFLamG9Jag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8554616fda3010fd2b91f7a5932824102020551da3699789061642bb6a9bc0761cea3689d3d869852afefb2e4e69cbbaad52a4e47cefdd7b679ff3886e7916a121227c7d57b262f3e14610d4404ce135ac26457adabf995ee763d7f9faf0dd3e7f1067b3d1d1112078c59238cd13762845595026878b79735d8832c785108750e8d0b2da8756afdd73acbe69d9a63d00a264493ce1d92dd0af95cae5b0d5da8937d742ac1386732e9b54a4cfebadfb762b2fc40da34ab6f6355b20235befa81e278262c54576b498838352b262c952cc13f0f0428dc8a7fdda4d8ed3e61ac0f79c324ca9283355f982125464315f9785ae8a868f48fb7cf581e6eec41d87c678baf0c383154e2bf2eaa381a5b10b1ac60a9a8a79c2963c5a5599e532bf354e83e93964c0c135964cae8ccb2f6ee01a2f4b2be367699a1d6a1c1b23ffc4d8afe2f9c6c2f7dd79681c1c7f34ce82e962667cbedac380fd8849c5336d3ec4246195f1a70df6de9e6b45c00a94ebe4b26ff6b0e5980312933e8d9d4e97c42623c421fd2eee10930e6c66478461e0a9aaba66e14c64a46399661c3b9619997637eeb409b64dd2650eed12cb8e6212e3c8a68e89b60df45070c54eb8cc85e4f526a3cbc00bdd65182cfcf12874751b312e1375529bab9a78ed53419300fa4f5fdb2acb05285527e6f9a11b8cc6a177e1d64332616b4c37f33b1893182792011a1738658a15e722824d43b3e9dc0bbda93f9a00439ffc6c879068f8e3f185106e72bdcb4abfd13c0c3cff4c1bd8212e70526ac87dfd8146397845db6de3df65464130ba02695c1478f3470edae9d915fd2f121aafa3dae64ed24295da2e6aef453db4fdb585a781e08ed55ae8dbc20dae50bd14b098152ca3ef0f138075e2fd7fc5eede02186e2ee8480531cc2e95950a2d583dc33cd5ee6bb6650dfa4e0f6970a1dee49c81b33bacaa465591a52c534f2dd5f756ef5b952ae5330892307abe3eb7ed6fae56523939050000",
    ],
    [
      "ETag",
      "lrmF7jOhpCE8JwX4MwoGPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "0c",
      "85",
      "ff",
      "8b",
      "776d258a10b04a1c8055800468eb0697694269305da18d4be26a5488ff3e874d3bef94f8e57bf673ae702acc1e62c88afcdca06d1f72e4177f49d135253b396a320e210064950b3934abd5ac9d27c965921797a7e939d3db6a3c1a09e1f427560ae22b1c0a2cf70ee2f72b1855a1d854458d6181b8ad7dbd58bf25b32415a1a2bd17d69be5723c5926700bfe4cbb5d7dfa97e5e316c091b2140f68d168f4196a4b47d4bcf0eb3955d525868e1aabd1c11dbe3fe4969a5a59a25094308aba61d4eff687d1a013f53abd47214bd28a0b32026f5e251c30b12a53fa92f5a003bff5a46574cf96a4bb43dfb8371cfc8c99921fcd12896d83016825bf342f18e2832a1ddebe01ee413acb83010000",
    ],
    [
      "ETag",
      "8nMMGyHEExBgixDCqbcVmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dd04b7282300000d0bb64ad0ee0a0a63b113028c8df50370c42a4861232a048d2e9ddebf408effd80a22cc930e48fae210c7c00516870512e8e7c63ecb654482e1d4d5bb37d825098994e9a43edbcf778e7ba056a3c643fad0977671f89fdb62b920afbceb5becc338a42d8b4ccd89c6f85326aeb96bf986f258d7b9846a1dc2c956e62f3325fa916a59ff6bd7f2d6d658c5f99ac2b878747f5e04fabc4d5294ea32ac055341a44f387f17465a7e024bd640a24ffbe882cd5952f5cca106f5bc8acd834c748524fa4cf100eb68a631bb52cd257b856eb2ae03b0866804cfcde9321bfbfb94b1dc219f8b7e70fc1c93bc020454f7af0fb0797f41fa01a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-113-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d4fdb3014fd2b91f74adba42d4da9548daa04a8d4a6234d41d33445b673931a9238c40eac42fdefbb712803218da7d8bee7dc73ee475ec883286232214ca48f3554fb6ff7929113029aa6f85aefaf201bfc795ea6e3ebdd20cf766af9bcbc994e11211a96a279994147c9bae2a026db4d37ad645dd24aca0e26ea38cea0e38cfaa3b1e3daced01e9e215141962c45f180f49dd6a59af47a47f16e2a659a012d85ea7299bfbdf79efabdb292f7c0b5ea7dd4eca18cea7da1fa3d939c6a218be976830e6a0555043915197af8478dd9f9c7dc5d41f36e8ae027c181722eeb4237be3005974522d2ba3259c9e485189fef0e64e32dbd79687199d57911153487132ba69a467a5f827519ac57d6c2bf5c07ab59b858fbd1667eedad66ddf97ab95df91bebeeda0b3c4b539681e15a53ebdcdc7cbca07e0c4a8bc2a887cd73a3fcdaa1c5e7c134049456d00623d71e51676c9fb184b93c190f4e5962036363e69ed201b3f9d9108631038a3c236a58b490453f714f47b61d4703c6dd68489913d164c8a2c48e47b6c3fbc353e692c30979ae84860ba14aa944db2172172c422f0a83ad3f9f859e2921a175a62f5a634d01ef3d6a2c1041ffa9e9d0448544a5a6dd0b3ff482d93c5cdc7aed84979052bedf3ce28c139a294034adb0791aaa958cb161c49fadbc0b049b89fd38061599fc7a214dcf1b17ef5afe460f71808d5d6dbe6413060bffcad839226e69561bc8537b20255ade616de8faf01b91b8a56d1672b3f5829fa47d0a20810a0afef534116c025fff6dc7cd4730ee3eea288d775c1eae1a155e41bb44c2d4fbca76fab6eb8c880157fa536cdcb78f6d6b723419218742bf96d46e3e56da8ad5ea0d84419cbf6fda75f80bc6d690207b040000",
    ],
    [
      "ETag",
      "uyGel3xwLg8Hh3mlhsLwLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d14ec2401045ff657c2d09552cd88487a2a83580584a6234842ced148adb6ed9dda248f877672ba251137d6967a667b6f7de760b4f691e830bb374be2a516e8ee6a8ef4c11a02ab956742b44ae102c40cde644beae7d7eb3ca1e3c9945a3e022f1ef672f43afdd2642450bcc18b85b4852e4b102f7710b39cb90d622c1cb2c9f569d057a5398e1280cfcc115f599884d3f18f77a5ea7d7859d75588c9966d38affc7da6467c152cc024c50621ea1d15248b1c448fbc6a66259c1b1a64429235450c1d583b91465c1a410359ad46cfba4663bc74ecb6ed6ed46bd7146241711d3a9c8091e8f482068a1190fc433d90487005995e438a9ae6b1aa771e5c494fe20741a95c0af00694b528ed3bf4112bc60f41d3eb07d06df39968932d707eab277ebfd761c85fa79d48517767f104a53540724f4fbdd51e8f587869becbd77361ad5500a4a52a109d1ae375aa74da7fe9eebb93059d37b5c2d4bb42062f47b5ca71adc847185bb377453a3f37c020000",
    ],
    [
      "ETag",
      "zvIlJqmZArmcSRDfIXbxPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8554fd4fa34010fd57c8de2f9af4030afd4c8c572be7612a554a35e6eed20ecb52d75216d945d398feef3780557bde9d0909ccce7bf3deeccef24c563c09c980047cf990b36cf3e55e04a446988225aeea2b38f34e4686307ddff1cdf3ef4fadf3d1d5d1112278c192b04e63569722cf289383d9b4b1cc449e4226441d0bd50dc3aa1b9d56a7677475c3d2ad3e12258ba3314f5648bf532a9583667327de580ab18c19a45c36a858bfae371f5bcd3413f78c2ad9dcd76ca28c6c7ea27a1c0b0a8a8be468364507b964d99cad81c7e8e18d1a065ff76b3738ac1b4b043f72ca80529127aaf08525a84822beccb3b22a193c93d2e7bb0f32b5c7f6c8d7469399eb1f2c605d9017871a486d17d4b4053615f198cd79b82832f379bad2be79930bcca0833b904c2eb49befb6676b6f4b0bed67aeeb26d58eb5a17baaed57715c6de6baf6d4d70e8e0fb5336f32bbd44e6ef730683f6452f1a434ef4310b3c2f8cb063b1fcfb5208042e52a39efea1d307a7a3f88822e8d7a663b88741604bda0db0633d069df62561830409e2aaa972c484462506a522b0a75d6eef6683788a06341d886b6159961cf32cc10ba3d13806c6be429e38a9d72990ac9ab4d26379ee3db73df9bb9a3a16f976d4490c7eab4325734f1dea7c22611f49fbeb645960b542a4ecc717ddb1b8e7ce7daae8664cc964037d3071c930862c9100d19ac9962d9850871d3c8e564eaf8cec41d8e91519efce50e21c9e0c7f31bc1dfa4e52eabf24da6bee7b867a5811de21ae2bc843c561f0452f44ab6dbdabfcb0c3d6f788bd29065b0f92387ed74ac82fe1789125f4695cd9da4410ab55dd4da8b3a64fb6b8b4f8de01dabb4c8d5ccf66e49b5e4b188652ca19f0f1382cbc4e7ff8addbd4530de5cd4910a639c5d2a0b159ab16a86f9ba745fb18d96d1a9fe340a32f521d7edb7778755d4282ab2354bd44b4bd5bd2df7ad48e5f21584491c3db73cb7ed6f8fe55b9339050000",
    ],
    [
      "ETag",
      "0kaGRBC1o3TTIT3JHw2JCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d904f4fc24010c5bfcb78b48d2ea9059a701025428244ab7831842c655a0b6da7ec4e2184f0dd9dad8678f4b27fdefbcde6bd3dc136afd610c12acf760d9ae35586fcea0e31daa6602b5b4d9545f0005967423e5f7f8445b8e9d4f3312bbbe37eae6f1e0f83811036f9c25243748234c7626d21fa3c41a54b94315d5253b1407cacdd7d327b1f3d8d62114a5a3b61369f4eef87d3119cbdcbd072596fff35b2387bb0a1558c291aac1274196a431b4c78e2ea595dd605fa961a93a085166e8dcc50536b43e48be22b15f82aec843dd5bd55c16dd017b2a044734e95c0f33709074cac8b980e520f3a0298f6284dd376dd8b7cd796d8b780cbf6d70b2f9e72dee2f7c1e191d1be189278165db2a0d7fdc9f9402e3b4b27360d7a9068f9e671ce10a5bab078fe06fbda43a8c4010000",
    ],
    [
      "ETag",
      "M+V6l6j2pUHt1sqt9ia/Dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0db7243400000d07fd9e7c8acb894bed935123434418417a3ba44c46dddb23afdf766fa09e7fc8034cbc83024635b9106bc0396eed46db6b53b0561ed5ed8c7efd5ac1ec173baad81953bca9b2fa051b3c58739e87e2e64e6a135b9097ef83dac595fc04553ba6b6454f5edac9a391d6b27e1ef68e57297d17314357674d9afd0c73aecad20e30de4eae1273db5b8a0e54c66a9ed629bc8c222ea123ee5a28486a6b23cf6e5703d6ea1185b73c6eae810467ec3669e1ecb92c5ee80d54e18f7428e962b76646781f2da4f0d1b53d14bd3b0e70ce9b2b3020fa96003c8b32b291992f2c5152455dd807f7b32b28ebc02104929a1e0f70ff4a02d311a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-115-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2bc8fbda2490278914ad694a17a486ac84b49aa609d9e642dd114cb1c95455f9efbb98a66b5569fd84ed7bce3de73e7826bf4591901961227baca17afaf220193923a06986afcee32ebf586dd2c9709d0c96073f0b56571737f3392244c352745fe6d051b2ae38a8d96edbcd2a5997b492b283893a8e33ea38e3fed87526b633b48753242ac8d36b51fc46fabdd6a59af57a27f16e266596032d85ea72b97f7def1dfabdb2920fc0b5eabdd7eca18cea7da2fa35979c6a218bf96e8b0e6a05550c7b2a72f4f08f9ab0f3f7b9bb82eebb19820f8203e55cd6856e7c610a2e8b54647565b292d933313edf1cc8d6bbf69691c5655eef8bb8a07b38b312aa69ac9f4ab0aec2cddaf283ab4db85e44fe2688b7cb95b75e74979bebdd3ad85a772b2ff42c4d590e866bcdad73730bf082fa09282d0aa31e35cf8df24b87fc8f83690828ada00dc6137b4c1dd79eb2944d78ea0e462cb58131974d4674c06c3e1dc23061409167440d8b16b298f6f9281d27769cc038898703368edd017763773c009bf5d998f527e47846fe5442c3a550a554a2ed10b90bfdc88ba370172c1791674a48699debcbd65853c05b8f1a0b44d07f6a3a36512151a969b71f445eb85846feadd74ef81a32ca9fb68f38e394e60a104d2b6c9e866a2d136c1809166bef12c16662df4f4145663f9f49d3f3c6c59b96bfd2231c6063579b2fd946a11f7c33764e885b9ad70672680fa444cbf7581bba3efe42246e699b85dcecbcf007699f4248a182827f3e4d049bc0e77fdb69f3118cbb8f3a4ae31d9787ab468557d02e9130f5beb09d7e7fe49a7f55d34a7f884d06cea96d4d8e2623eca1d02f25b59b8f95b662b57a056110e71f98761dff020c04fe1a",
      "7b040000",
    ],
    [
      "ETag",
      "1qUlBHOf74Md3CvIgNHFBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92614f82501486ffcbe92b6ed2108dcd0f5aa66c6a0ab8b69a73573828065cbcf79299f3bf772e99b56aab2f70cee13997f77de1004f491e8103cb64b52d51ec2f56a8a6baf05096a992742b782e110c40c556440ec6bbcc6cdebf78ade99675fd87bef5ea4e77ed3611325c63c6c039409c601a49701e0f90b30c692de46999e58baa3340ed0b3df403cf1df7a9cf78a4fbf16c38ec74873d381ae7c58829b6a8f87faccd8f066cf8d2c31805e6216a2d85e01b0c95ab6d4a961529d6242f4588122ab87ab012bc2c98e0bc46939a69366aa67d69b7cc66ddb4ead61591290f994a784ef0cc2781a0b862a9c77764136c02445592e3b8ba3ed338892a27ba74c7816d5502bf02a42d4e525cfc0d92e035a3eff0819d32f8ceb18c97b93a53b7c3bbce6fc751a89f47dd7482de0f422a8aea8c04eea8e7079dd14473f393f7ee5ea19c084e494ad4219a75abd568daf5f75cafb9ce9adee32851a20121a3df6390287062964a3cbe01467037d97c020000",
    ],
    [
      "ETag",
      "HNwm17WxR8QqaBSZG4zIQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "547d6f9a4018ff2ae4f64f9bf802a8a0264de7947664163bc436cdb6e8711cf62a70943bda98c6efbee7a0b675ddd6c4448ee7f7f6dc3dc713dab02c424314b2f57d498beda73b1ea206a212afe1edfd37b6b18dc5ed792959d0b3c85996c7a3c793134030c51238cd13da14bc2c0815c3c5bcb52e7899e382f32608350dc36a1a9669f50d5b37ba7a770044419378cab20dd06fa5ccc5b0ddde9bb7d69caf138a73265a84a72fefdb0f663b2ff81d2552b40f3ddb6023da1fb89e269c60c97876b298438252d0624953cc12c8f04a8dc2cf87da2d86d3d61ac00f8c504c082f33a9728104e159ccd66551a9a2e113aa72be79407367ea8c036d3c5b78c1d10aa78abc3ad6b0d0f68b86b682a66296d0258b56aab25ce61bedcc9f5d400512dc6241c54abbfeeaf88ea6ad222ce94afb59ea7a8768a7dac89b68870aaea72d3ccf9907dad1e9b176eecf1697da979b030c448fa8902cab8207384ca80afdbcb9eefb3355042c21485d5cdaba858dbe3e08e3d02671bfd30b639d86613fb47bb813ea64d0a5dd28a4187852a9572c9cf1ac4b2d9d76ad2804858e155213f77a463f1c5876d8332c1245a66dd951d744bb067a2c98a41326722e58bdc1e8da77036719f80b6f3c0a9caa8d1897899cd4e154136f734a681240ffe96ba7aa8c83933a2dd70b1c7f340edc2ba71e90295d63b29ddfc388c4381114d0b8c02995b4b8e0116c1aba9ccdddc09d79a32930aa53bfdc23041afe787a2504dbbcda6559fda3896a60f746f00a27650578a81f90a99b7a53379b460fed768d7f2b8d7c7f7403eeb828f0f68f1a74647515fd2f3e15be5ad549f7be06526e2f290e5616dafddac1af81e08ad55ee8fbc2f16f50fdcaa7312d68463e9e270057858f3f15fb6b0b60b8b8e02324ac617c89502ea4a0f518b3b44a5fb30db3d3d37554810bf9ae66d99dfd79290da548539ac9e796ea6b5bed9b2a95e2050445983ecff5cea1",
      "fa1bcaef4e8c38050000",
    ],
    [
      "ETag",
      "qKik71UhGutiT56cFnpfAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d631710b10907d0aa4424b6ca4543c8d24e6ba1ed94dd2da612febbb3d578f2e06577f6cd3793f7f608bbbc4ac0874d9eed1b54ed598626b44584ba298ce6aba64a23388046664cde50f6f9d83f7f486ff7af9ed884513b9d5c84e331133a7ec752827f8434c722d1e0bf1da19225f2982ca9a90c43a6aded7bb67809ee82888592122b2c96f3f9643a0fe0e4fc0eadd7f5ee5f23ab93035bda4498a2c22a46eba156b4c5d8cc6c3c2dcbba405753a362d4d0c15d2353d4d45211b9acb8420c5d31ec0d47e2d213036f70c56441b13439550c2f9fd91c1832b288e883e3418f01d5959c34edce03cbfd2ec4a103acb7bf7bc2f6563f0ba7ad41fda488ed69b4ce0623efdbe73559ef863319d5a003b1e46fbecf0df8a92c349ebe008e74dbccc4010000",
    ],
    [
      "ETag",
      "DogzM3/KfFqZ01bQRyBA5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0c97282300000d07fc9591d3005a43788ac2aa2b2a45e1896b884021993cae2f4dfebf413de7b81bc2c09e799e86ad2824f30e64b7d512e366c65228336f9de2cbe026688e4165be770ed4cc9061d6f2b9fe2341d13aa4ef8c7b787064ffdf7d43fbd606f130e43cf3fc43491e578778aaa8874bea8454bb9d0fa1e4631e2acf9703dc752606375a16664a1579014b65d7b604e136472545d5d4f2920be1464bee13b612f237442f2d8a9f1ce13ab83ac8e5280d201af5d649710d782e0815ee77a7cd9d695db44fd75383e7d8329f2d190ce50635b2a71cd07334006767f109edddf5ca8e8fa0cfcdb333132f20e3049fe200ff0fb07945a95a51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-117-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d6f9b3014fd2bc87b6d1248028448d11a25748d94908d9066d33421630c750b986293aaaaf2df776d9aae55a5f509dbf79c7bcefde019ddb32a455394b0fca1a5cdd3973b9ea00b4425cee1b5b47f7a8711bf769aa17f58dae626dcd7e1e36c0608a658029775417b82b70da162badff5f386b7356e38ef41a29e65b93dcb193a13cb35adb139f680286891ad59750ff45b296b311d0ccee2fd9cf3bca0b866a24f78f9fa3e380e0775c3ef289162f05e73003262f089ead782132c19af66fb1d3868056d625a625680877fd434b97c9fbbcf70d9cf017c64846242785b49e50b52105e652c6f1b9d154d9f91f6f9e68076feda5f4406e1455b5671854b7a61a458e2583ed5d4b80ab71b63155c6dc3cd3c5a6d8378b7b8f637f3fe62bbde6f829d71b8f643df903829a8e61a33e352df02b8807e4a856495568fd4b3527ee9d0eae3601401a405ed82b16b3ad89a985e92252ec926233bc94c9a2493c4b5f128318937a6e334a118785a54b370c5ab11b1278ee9a431b64c2f1e675e1a27136cc6eed8b2edd47349ea6274ba408f0d9374c944cd05eb3a840ee12af2e328dc078b79e4eb1232dc1672d9195305bcf528a14000fda7a6938a320e4aaaddab20f2c3f9225addf8dd84d734c7e469f70033ce702128a07103cd93b4d9f0141a8682f9c65f02584fecfb3928d0f4f733523d572edeb4fc951ec100955da9bf681785abe09bb67346dce0a2d5906377403558be85dac0f5e90f20614bbb2ce8c7de0f7fa1ee29a4196d68453e9f268075e0f3bfedbcf90086dd071d21e10ecb438452210ded9688e97a5fd8d6706c9b2ed2e0467e8839f6f0dc36954365a425ade44b49dde643a59d582b5e411084f907ba5da7bfed9373727b040000",
    ],
    [
      "ETag",
      "m5X9W3oH6r2EWD50MRUpRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92dd6e82401085df657a0b89548a96c40bb4564dd45ac5f42fc6ac30281658dc5d6aacf1dd3b4bad6dda26ed0dcc0cdf2ce71cd8c3739c85e0c2225e6e0a14bbb325aa5b5d8c5116899274cb7926110c40c59644365fbb77f6e6715b7b180cb1da1add7b58ed6c1b0d2264b0c29481bb8728c62494e03eed216329d25ac09322cde6656780dae57a38f1c7bd6187fa9487ba1f4efb7dafd96fc3c1382d864cb179c9ff636d763060cd17638c506016a0d6920bbec640f5b44dc9d23c4153f2420428a184cb074bc18b9c09ce4d9a989655332de7dca95bb58a6557ec4b22131e3015f38ce0e9840482e28a2563be259be01020ca921c47e5f585c671583ad1656fe83b7629f02b40daa238c1f9df20095e31fa0e1fd83183ef1c4b7991a91375ddbff17e3b8e42fd3ceacaf3db3f08a928aa13e2f706ed89ef0d469a9b1dbd37770ae548704a52a20ed1aad8f58b9a5379cfb5c575d6f41e5789020d0818fd1edd58811bb144e2e10defad5ff87c020000",
    ],
    [
      "ETag",
      "BzHW4qZw7YMNe3CPXAe3Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbd24a7900218446aa3ad6b20d29251d21adba8712db18ea86608a4daba8ca7fdf059ab659b7554202fb9e73efb92f1ed18ae7311a23c2d3bb8a959b0fb782a00e620aa770cbad87db6cc51d6e1fdda9e26cb322a972dde36340f09a25f1bac858578aaaa44c8ee7b35e5a8aaac0a5105d70d4350ca76bd8a6ed1823ddb074eb08889265c984e72ba0df2855c871bfbf0bde4b854833860b2e7b54ac9feffbf766bf28c52da34af6f763f6218cecbf13f52413142b2ef2e3f90c145492950bb6c63c030d2fd4987cdcf7dde378dd4b017ccf29c3948a2a57b52e7041459ef0b42a1baf68fc881a9daf3ed0cc9b78a791763a9d07d1c112af6bf2f250c352db1d3ada12924a78c6163c5ed696c5a258699fc3e9395840c10d964c2eb5abaf5ee869da522a50b7d47e56ba3ea0da89e60667dabe0b3fd0e641e0cd22ede0e450fb124ee717daa7eb3d0c688f99543c6f94479864ac56fd545dff6d536b0256a0a4352e46ba8d0d473f220919d1c4190c49a233421c321ae201d1e991c5ac98300c3c557b6f583817794c122b1e5227a1714ca145a32123d430cdc4769c1136cc98c4894e62136d3be8a1e48a9d715908c9db0aa3abd08fbc4514ce835337f29a34125c65eaac155727f15aa7822401f49fbcb6b5950b8854b7cb0f222f744f23ffd26b2764c2524c37b33b9891046792011a9778cd142bcf450c454317d3991ff9d3c09d00a369fbc50e21d1f8c7e30b21da144d9555f346917f0e3d72cf2f1a0d3bd025ceaa0675df7e205337f5ae6e768d61649863633036ac9eaeebdfd176dbf9b773370cdd6b1084cb126ffeb04192b655d3ff12b5c137a756fc4e8581ea68cf9af64e36dafedac2d341b0766d2cf46dee85d7a8bd0a59c24a96d3f7470cc08de1fddfc76e95010ccb0c",
      "71602d148789a6b28e424bd64e365f37ea5bb6610ead818d1a70a9ded86c7bb86b61eda3f6c8d62c574f29b5abdcd4ad3655f219044618c8c00fbe80f537e2c199ec4c050000",
    ],
    [
      "ETag",
      "i4wjlki8i69qtpDykbgtAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d931609d6261c4088628068958331842ced742db49d75770b691afebbb3d578f2e06577f6cd3793f7b68363516710c3be909f0deaf64aa27d764582a629ade14b516d103c402b2493d54c0522599d669356aee4e6ed7176ce56723c66c2a41f5809883bc80b2c3303f17b07b5a890c744454d6d19b2ad72efc5fa757e3f4f58a82873c27ab35c4ea6cb395cbcdfa1dd4e1dff35b2bd7870a07d82396aac53741e94a603a676e1e21951a9127d438d4ed1400ff70da9a9514213f9acf86118f9e168308ac29b201c06c35b264b4a852da86678f3c2e6c092156542678e070306745f72d2bc3f4f2c5ff7214e3de0bcfddd0b5d6ffbb370da5a344f9ad89e41e76c1805df3eefc879b79cc9ea063d48057ff3436121ce4569f0f205ab933a44c4010000",
    ],
    [
      "ETag",
      "mDp0aRMvDAygMgUYJDwdMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dd04b7282300000d0bb646d1dc71491ee800ac420886d10dd64f8044d414813188c9ddebd4e8ff0de0fc8cb92294587be611d78033a5f5af3728ec5da716d7e30d5f914fa270a71d28947b188ed457a7712a37533cd7af6151fc616993737b65695b7df8d346d7da33b938d03637d8bb6727bb80636969f1866e92522396fc67e7a897445a70f6fe4af5c9856efab4ed78fb54312e1f9857db1d5b7e1ee48501c833d8f9bbab86d49bd4e70d0a02ed844ed3b4741e8155855b45e86a86d8f1a09724d9739b2dd950b2181420e51adb2f4e1c8109f77cc4206aaf209cc00bb0b2e99a2fcc9858665cdc0bf9d0e5ab06780c372c924f8fd03198bf7d81a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-119-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3014fd2bc8fbda0448c8538ad628a56ba6405620ada66942b663a85bb0193699ba2aff7d17d374ad2aad9fb07dcfb9e7dc074fe8818b3d9a23c2f35f0dab1f3fdd4b82ce10d33887573b0ebe0a7525c603e6fc3988b23cb89bebebc50210bc65295c5605eb29d9d494a9f92eeee7b56c2a5c4bd983443dd79df5dcf1603c75278eeb39de0c888a15d9868b07a0df695da9b96d9fc4fbb99479c170c5559fcaf2e5dd3e0cecaa96f78c6a65bfd5b44146d91fa87e2e24c59a4bb1d8c5e0a051ac4e598979011efe51f7e4fc6dee3ec7653f07f081538629958dd0ad2f4841a5c878ded4262b9a3f21e3f3d501c5fec65f25169545538a54e0929d597bac71aa1f2b665d46dbc05a8797db285826eb6d98c6ab2b3f58f657dbcd2e0863ebf6ca8f7c4b635230c3b516d6b9b9857001fd3d539a0ba39eb4cfadf27387d6ef07d312405ab12e984e9c3176a7ce8c646442b3e97044328711322593111e1287ce3ce6ed09c3c033a286858514101bd2e1c04b1d2fcb526f3a1ba633d79ba4ce6036f506649f1182d1f10cfdaeb966175c5552f1ae43e8365a277e9a44bb70b54c7c5342869b425f74c6da025e7bd4502080fe53d3b18d72094a6dbbd761e247cb55b2bef1bb096f588ee963fc0b669ce1423140e31a9aa7591dc83d340c85cbc0bf00b099d8b75350a1f98f27d4f6bc75f1aae52ff40406d8dad5e68be2245a875f8c9d13e206178d811cba03aac0f21dd406ae8f3f01095bda6541d73b3ffa8ebaa78865ac66827e3c4d009bc0c77fdb69f3010cbb0f3a4ac31d9687aa5685d6ac5b226eea7d66bb83b1371a2103aef5bbd878383ab5adcdd166642513fab9a46ef3a1d24eac512f2008c2fc43d3aee35fbe0766447b040000",
    ],
    [
      "ETag",
      "/SMJnsHn62e0zvnmmv1LQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92414f83401085ffcb7894a660286d497aa05ab509ad48e9c998660b434b051677170d69fadf9dc55a8d9ae80566866f96f71eece1292b1370619d6d9e6b14cdd906d5bd2e429475ae24dd2a5e4a040350b10d9141e008d198ddc9792f8bbbb3a61a0e768e371a1121e32d160cdc3da419e68904f7610f252b90d6629ed745b96a3b035453e9e1220aa7f31bea0b9ee87ebef47d6fec4fe0609c1613a6d8aae5ffb1f6783060c7d721a628b08c516ba904df61aca6daa66445956347f25ac428a185db071bc1eb8a09ce3b34e958d6b0633917cec0ea9b966dda4322731e3395f192e0e5820482e28ae5217f259be01020da921ca7edf585c659d23ad1e5741e39762bf02b40dad22cc7d5df2009de32fa0e1fd83183ef1c2b785daa1375eddf79bf1d47a17e1e75e545931f845414d50989a6b3c922f26681e61e8fdec78d4219084e494ad4215aa63de8f51df33dd74baeb3a6f7b84ad46840cce8f7b8cd14b829cb251ede00c7528bca7c020000",
    ],
    [
      "ETag",
      "PP6rry0/E+5ic/Myp98j6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010fd5790f74babe503120249a4aa4b53ba21a52423a455f7a1c41843dd024eb1e91455f9df7798266dd66d9590e07cefdd7b679f7942f72c8fd010852c792869b1f970c743d44054e20456797cd39e5347b7eeaef937393b8b3e3a599c9c9c0082552c81b3754a9b829705a162b898b79282976b5c70de84424da3a3370dab63f50d5b374cdd1c0051d0349eb0fc1ee8b752aec5b0ddde89b712ce9394e235132dc2b3fd7afbb1d35e17fc8e1229da879a6d9011ed77544f534eb0643c3f59ccc1412968b1a41966297878a146e1a7c3da2d86b35602e0474628268497b9ac7c4109c2f3982565a1aaa2e113523e5f7da0b93371c681369e2ebce06885b38abc3ad6b0d07641435b4153314be99245ab2ab35caeefb50b7f7a091970708b05152bedfa8be33bda9ea6fd2875bd4bb4536de49d6b87355c4f5b789e330fb4a3d363edb33f5dccb4b39b030c988fa8902c57d6031ca6b4b2fdbcbdeedb53ad085882953ab9b4750b1b7d7d10c6a14de27eb717c63a0dc37e68f77037d4c9c0a46614520c3c5955572c9cf3dcc47d4b1fe0d0ec19916d98fdc8b4ac2eb129d13b2186b3b28c6e4cbaba8db60df4ab60929e33b1e682d55b8cae7d37709681bff0c6a3c0516dc4b84ce5796dae6ae2b54f094d02e83f7d6dab2ce3a0549d97eb058e3f1a07ee95538fc88426986ce60f3024314e0505342e7046252d2e79049b8666d3b91bb8536f3401863af7d90e21d0f0fbd30b21d8acd52e4bf5461793e928b04ce56007b9c269a9308ff507325a3d406c1bff2e33f2fdd10d48e3a2c09b3f72d08ea5e87f51507815d536f78aa852db459d83c842db9f5b781a086e58ad85be2e1cff06d54b3e8d694173f2fe30015825deff53ec6e2d80e1de828e9010c3ec1251a99082d633cc32e5be661b1dbb",
      "ab5b48810bf926679af6eeb0aa1a55459ad15c3eb754df5ab56f55aa147b102461f43cd7fb0cd9dfdaa8d28f37050000",
    ],
    [
      "ETag",
      "ofY/SeE06jWoZtPBd+Emfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90414fc2401085ffcb786d93b612d0261cc414252144ab78d010b294692d6c3b75776a45c27f77b61a4f1ebceccebe7933f9de1e615fd65b886153166f2d9ac359817cef8a146dabd9cad5506d113c4056853871a493a7a0eb66d7c9b0fc7c9e7e2438dd77e3b1386cf68a9582f80879897a6b217e3942ad2a943155515bb398f8d0b8f76cf198dc24a908156d9db058cee75793790227ef7768bd6ef6ff1a599d3cd8d126c51c0dd6193a86c6d00e339eb97856558d46df526b32b4d09bfb4661a86d9421f245f1c328f0c36134bc08474138080697e2d494292ea916f3f241e08089954ea993781089c1f4a524cdfbf3bd975d0857853ddbdfbdc8f5563f0b2707467b6748f02c3ab2f328f8e6bc26c7ce92894d8b1e644abef9b6648873a52d9ebe00691c38ddc4010000",
    ],
    [
      "ETag",
      "e7lEV0wwICE6izZFxEeFkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ffedd4c97282300080e177c9d93a4a90a537169106704b05271706635a509634804a3a7df73abdf70df81ee03ffedf20a394b56dda355756835730648a39a5d3801bb663e544e570161394084d95a91a99fe52cf507ef1e9465cb7444a1ee70fbf7f0f1508f9a777325e0237d90e5f5a64d89ceb47778ef7b573445e7b2834c7ad4af503d619c2f1feb29616d657373dbe6387ea65e55abb145547374fbaf9598b4ec823bcf116069a475d6387e8ee4376b377144a6cca3e389436e1f5a67bab022cebbeec0ba3204a4ca871f62f0f1c0fcf7066cd1c850a672f96b85884db76bd9a8e46a3ff8109600f5e08d6a6c5f30770619a13f03787b41b387b1ec266996002fcfc02871b55dd3b040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-121-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2bc8fbda244068f390a2354ae98a94900e48ab6d9a903117e616708a4dbbacca7fdfc5245dab4aeb276cdf73ee39f7c133b9e7554aa624e1f94303f5eed39d48c8090145737cfd5d3bdf2779b4db5dafbd2175ff48a8e5703e9b2182b72c49cb6d013d299a9a819c6ec27e5e8b664b6b217a98a867d956cf3ab3cfc6d6c8b41cd399205142912d79758ff45f4a6de57430388af77321f202e896cb3e13e5cbfbe0d11e6c6b71074cc9c15bcd01cac8c107aa9f0bc1a8e2a29a6d4274d0601931949417e8e11f354dcedfe6ee735af673043f72069431d154aaf5852998a8329e37b5ce4aa6cf44fb7c7520a1bb741791c144d194555cd1124e8c942a1aabdd168ccb60bd323cff721dace691b7f6e37071e5aee6fdc57ab959f9a1717be506aea1685280e61a33e35cdf7cbca07e0a52f14aab47ed73ab7ce890f77e302d01a52574c178649e516b6c4e922c19b16c3c3c4d321392649c8c4ee93031d9c401274d80224f8b6a16ad4465271367c8681a9be040ec58761a8f993d8a479693510b2634cb52b23f214f355770c1e55648de7588dc065ee4c651b0f117f3c8d52564b429d44567ac2de0b547850522e83f35eddb2817a8d4b6dbf32337982f22efc6ed26bc849cb25df88033ce682101d1b4c6e629a85722c586117fbe722f10ac27767d0c4a32fdf14cda9eb72e5eb5fc851ee1005bbb4a7f4918059eff45db39226e68d168c863772087e541d3fb9f08c425ed9290af1b37f846baa70032a8a1621f0f13c13af0f1cf765c7c04e3eaa38e5478c7dd61b2556135743bc475b907b6658f8723876870addec54e4df3d8b536479b114aa8d4a1a46ef1b1d2",
      "4eac912f200ce2f87dddadfd5fc777d4da7a040000",
    ],
    [
      "ETag",
      "xr4Z9gTyyPOI3aEzsers3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d916f4fc2301087bfcbf9d22d6138062ee1851aff904c94016a620829db6d0cba75b49d66217c77af158d31bef0cd7a777b2ef93ded1eb645954208ab22df3528db931cf5c41431aa866b45472d2a85e0006a96139904bd6cf29cb2def6e5747df3f014b5bb7b9c0c8744a8648d2583700f59813c5510beeea162259a35c19bb25adace01ddd666389dc5a3f12df5a5484d3f9e47d1c565740d07e77b31659a2d2dff8fb5c5c1818d58c598a1c42a4193a5966283891e194dc5ca9aa3ab442313546061fb2397a2a99914c2a589eb753dd70bbac1c0eb773cbfe39f13c945c274212a82e7530a085a68c663f14e9a704680b4251967f6fb46e322b526a61c8d67816f03fe04ace31772d4facdd49c557f308b6382cb56a37a94827c141a15afe30f7afda0f36977258cb1a69bd0b2410712468f7457680833c6151e3e00ec70c49e02020000",
    ],
    [
      "ETag",
      "c65fQWda5kX+hFOVLyqMeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ad8e1025a63b82821f1889201637190891529d48432cc44eef5ea74778ef07149c8bae63fa7e1512bc0153d878c227bb76413cb759e95a5fcbf01c0889c638c8661dbb715957595eaf067f3db808ab93611f0a6bc7c1ec90cef78a786757fafb4311f99c8668a0e366d19e02086fb7fe7efc26daf45c7b28728d65baa4742ce1a0e1a2f2692edfb7c75ea6f5571e5dab8b180ab97dd4b3f2b98c8230fda4d072219d739d8f9f44c2759890dd0625b49d6d6c5b3a6651ed02860a0ae34d3cbd2f15f5b2b227beb4594c323b368fda4216180131b48d121d6b5e5c38c77804feed4c9b56bc0288289450e0f70ff94a51851a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-122-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6fda3014fd2b91f7b53c02e11124b4221a5a34086d08add6698a6ce726731b62889d5655c57fdf8d035dab4aeba7d8bee7dc73ee23afe451e431191126d27d09c5cbb707c9c819014d537c2d6e02aaf78324d53fe4f34330bb9f5dde5fdf8cc78810154bd1ed2e83869265c1418d36eb665ac872470b291b98a861773a0dbbdfe90fed41db76da8e8b440559b210f923d2ff68bd53a356eb24de4ca54c33a03ba19a5c6edfde5b4f9dd6ae900fc0b56a7dd46ca18c6a7da1fa3d939c6a21f3f1668d0e4a0545045b2a32f4f08f1ab3f38fb99b826e9b29829f0407cab92c735df9c2145ce68948cbc26425a357627cbe3b90b5b7f0a6a1c565566ef328a75b38b362aa69a45f7660cd82d5d29afbb355b09c84f3951fada757de72d29cae169ba5bfb6eeaebcc0b334651918ae35b6cecdcdc70beac7a0b4c88d7a583d57cac70ecd3f0fa622a0b4823a180dda7d6a0fdb2e4bd88027c36e8f256d606cc8063dda656dee3ae0c40c28f28ca861d15ce631b57bc30e4f228775ba9193b86ee4ba1c22bb3d4cfa76b7df632c268733f25c080d1742eda4127587c85d300fbd280c36fe74127aa684849699bea88d5505bcf7a8b14004fda7a64315151295aa76cffdd00b26d3707eebd5135e404af9cb7a8f334e68a600d1b4c0e669289632c686117fb2f42e106c26767d0a2a32faf54aaa9e572edeb5fc8d1ee2002bbbda7cc93a0ce6fea5b17342dcd2ac3490a7fa408ecb83a60fbf11884b5a2721371b2ff849eaa700122820e75f0f13c126f0f5cf765a7c04e3eaa38ed278c7dde1aa52e105d43b244cb947b6dd711dbb4f0cb8d09f62bdae73ea5a95a3ca085bc8f5b1a47af1b1d25aac546f200ce2f87dd3adc35fcb7a83437a040000",
    ],
    [
      "ETag",
      "rQRatq7fgtKowjRFZFGZPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d91516bc23010c7bfcbedb542ab5dd5820f3ac62c48b155196388c4f6dad5b54997a41b4efceebb646e8cb187bd3477d7dfc1ff979ce0b9e23984b0afca970ee5f1aa449d982245d5d55ad1d10aae101c40cd4a22c7711305ef091bf3d8bd4fe6d3e9c3723d4826132254f6840d83f004458575ae207c3c01670dd25a26eaaee13bdb39a08fad19aed66914df51df88dcf4f166b198ce16b77076be1773a6d9cef2ff58db9e1d38887d8a054ae4199a2cad1407cc746434156bda1a7b4a7432430516b63f4a29ba9649217a34e979fd7ecf0bfac1c81bba9eeffa63226b91315d094ef0664501410bcdea54bc91260c0890b624e3c27e5f695ce5d6c49451bc0e7c1bf027601dbf908bd66fa6ad19ff83d95e12cc8e1ad5520af25168543cd71f5d0f03f7d3ee4618634d37a165870e648c1e695e69080b562b3c7f0093b8272a02020000",
    ],
    [
      "ETag",
      "9NmI6zQa9nN0WQHAAYPT3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `name`, `id` as __pk FROM `accounts` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `name`",
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
      jobId: "grouparoo-job-123-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e",
      "9b",
      "30",
      "14",
      "7e",
      "15",
      "e4",
      "fdd9a42440c80522555d9ad20e29251921adaa694a0c18e61630b54daba8cabbef60925e56699590007fb7738eed67744fcb044d5044b3879af0dd973b16a10e221267b07ae664aebe2a964f33cc733bb7bd0b3d4fb3931360d046257051e5a42b58cd632226eb552fe3acae3067ac0b465db36f75cd517f649b63c31c1803078482e4e99c96f720ff23652526ba7e0cef658c6539c11515bd98152febfa635faf38bb23b114fafb4c1d6284fe49ea69ce622c292b4fd62ba8a016846f4881690e35bc4a93e8fb7bef1ec5452f03f2238d098e635697b2a90b2c6256a634abb972459367a4ea7cf38156eedc9d85dab6c405d976b42d4db61a16da6653dd6b17c1e24adb1e1cc556bbf9e106aed6723c5f5bfbbebb0ab5afa7dfb4cb60b15e6a67b70aeb1cdc203f2142d252a58738ca49937c9890f771631a0196589016dc8c8d11366dc389d2681ca7b6358c528344911d8d87d88a8cd819904112110c3ad9b82b152e5939b206f6c871ccd4c1d870d2d4eadbce70388e9321c6e6183b5682fbc92832d0be839e3895e49c8a8a09da4e09dd045ee86ec260edcfa6a1abda48719dcbf3b6b8a689b7754a681248ffe96bdfa09441523372cf0fdd603a0bbd6bb7dde539c970bc5b3dc03ea7381704d898c30425e1572c81a1a1e562e585dec29fce41a1b66e79640834f9f5fc2a0877959ab2546f340d82e92d6830e778f70f06758c0668bf7f13778df35a51145ffdb5fe8f2d804cb4ffbd87a783e004b77ee8e7da0d6e51bb1490947052c69fef349015f0f94d3cde0a20c3bd801c21e11f0e562c9a94",
      "9893f680d14255d8aa4dcbe81b03a4c85c7ec0aca1759c64e3d138928294f2d0527b2bd46c1aa8162f2400e15cf89e7f09e85f2a489bfe97040000",
    ],
    [
      "ETag",
      "B9gE/SmPwCarl8l8IF/lfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ffcbf8da261411b4090f602a1209d1727931a459da692db49d752f2821fdefce56a32fbeecccec9eb3fb9dbdc0b16c3208615f16ef16d5f9aa40f3e29a18b5ad8ce622a9d1081ea011052b25ca53d04cb69f37d9287a320f96665b3d198f59a1d337ac058417c84bac320de1eb051a5123dbbae281394b37add6f17c39e3b9a6cccdcbcd6231992e2268bd5f4792c8e39f63be5c47b328fecfb26b3d38d03ec61c1536293a00a9e880a999bb6c5ad4b2425f9355296ae8c4dd41a1c84aa1887cdef183feb51f0cfbc3db60d40b06bdc11d2b2b4a8529a961f166c57060c8882aa60fce06010b54d772ccbc5b4fee392b51253516224949c92ed2a99333e9eee78ae9d9a07e56c4401a1dcb70f40d764f0ed67008a32c7a900afed4c7d240988b4a63fb05db6f5c2fb2010000",
    ],
    [
      "ETag",
      "pepv1nAVx5d7EKtFuoGVsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dd04b7282300000d0bb642d8e20f2e92e601044cd8856031b26c428942a9020089ddebd4e8ff0de0fa08c7129d3b62af9037c80816af6944dc3da725c7893fc46a2b620658ff312f7345794ee9e64deac76b6acba338243f7b8f356ca99968376dec3ecfb12182877bef87e3859639c7624378426f0188626ccec7eb8260f4d5933dc514cfd2b91508d8c6753318656342439f4ebcf1325d6b6693ad923d18dd0332f276d3357b144afe68edcdc97c1626690486fcdb5b7e1b61e23362c97ec80f467ef5ccb4dd157aa66ef62a1b25028d6d194b348243186019800feaa0bc1655abcb9f3856d4fc0bf3d6d879abf031c4e0517e0f70f48e887d51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:51 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-124-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da3014fd2b91f7b54002e129a115d1b4452b610ba1d5364d91e3dc64662106dbe95655fcf75d3ba56b5569fd14dbf79c7bce7de491fce255462624e5c5a106f9f0612b52724640d3025fe9b63cf8425d1d52f5692ba54be36ff44f319d22821b96a2bb7d092d256ac9404d36eb762145bda7528816266a795dbfe50dba839137743ddff5c7485450e637bcfa85f49f5aefd5a4d33989b70b218a12e89eab3613bbe7f7ce7db7b397620b4cabce6bcd0ecaa8ce3baa1f4bc1a8e6a29a6ed6e8a0562013d8515ea2877fd42c3d7f9dbbcde9ae5d20f89e33a08c89bad2c617a660a2ca79514b9b954c1e89f5f9e240d6c14d308f1d26ca7a572515ddc19993514d13fdb007e7325a2d9d4578b98a96b378b10a93f5fc3a58cedaf3d5cd6619ae9dbbeb200a1c4dd3122cd7993ae7f616e205f533509a57563d36cf46f9a9438bb78331049456d00493a13ba0dec81da7793a64f9a8d74f7317d274940efbb497ba6cec839fa5409167452d8b56a2ca06eeb0eb79fda4c706a3c4cf877e42bbb49fb034f3f22cf7fb0c7ae478467e4baee182abbd50bce910b98b167190c4d1269ccfe2c09690d3bad4178d3153c04b8f1a0b44d07f6a3a9a2817a864dabd08e3209acde3c56dd04cf8060aca1ed6079c714e4b0588a6129ba7412e45860d23e16c195c20d84eecf329a8c8e4fb23313d372e5eb4fc991ee3008d5d6dbf641d478bf0cada39216e69595bc87d733065e4bc34a68f3f10884bda24215f3641f495344f11e420a162ef0f13c136f0fecf765a7c04e3eaa38ed278c7dd61caa83009cd0e715bee13dbeb795e77402c58ea37b1ee707cea9ac96132c20e2afd5452b3f858692356ab67100671fca1edd6f12f9e8bf6be7a040000",
    ],
    [
      "ETag",
      "ajlq4osGqbsKjrr0aTZaxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614fdb301086ff8bf99a8a0642cb22f1a11d65ab96b6d006096d4291892f998be30bb6535455fdef9c03ebd09814be2477e7e794bbd76f76ec516ac162f620cba706ccf6a80477e38325d846394baf1ab505163070bc24f2c7cde36c68d3b35371bce6891edee14ff3f47c714184cd7f43c559bc638504252c8b7fed98e615505b8eaaa974d6660173dbda1757e9723aff467985c2e7f3db24198d9309db078746c11dcf5afe136df7fb80adf161090518d039f8596a836bc8ddd4af6979552be8596c4c0e96b5707b501a6c6a6e107b54e98527512f1c9c0ccec3613f8cfad1172215e6dc49d404dfae6840e6d071b5c4675a9385a7449836a6958bf6b9a1ba14ed2a3e9cced341d44ef81ee0798e8d765927584863ddab7c7fc03719fe2515ff24487725551754821660ba2859675c0803d6769268335ed7076cbc58241f55d1c2a014dde0467600ca6d0ec055b218fd4f5a72d85fad2e47e9e403611df9e680a4d3d964958e66d79ebb7f33c278ebc05e1b245b59f08e0afbd1f9d970d07f35d957f4c6a3efc4ce3410b09cd3bff25d3a16175c59d8bf00bab9529b89030000",
    ],
    [
      "ETag",
      "KQkM7sT53d/jaLn7XoZrqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dd04b7282300000d0bb642d8e02a6d81d4108958a96df0c6c327c2204a27c82d5d8e9ddebf408effd80bc2ca91064ee3b7a05ef40e6ea76592ebdc14096d934dd4aaae365ad569926f13c1ade97cf355a44f5fd439ea1a7700586f1c679aabaad0f17e7dc1a690f4fe16705157f27ddb6322ba3ff16eac385b3e0071e253d623e0f2609b10fcb68c7e3ea3292c35b9ff931591545710bd4605250dbd4fbf2ca889b28f0695a889eeef53ae46cf48ce3e12631b1e33d26ac8aba84c6026b7a6a5b21d79dc442114e90cef1913d7371cdbab14e79c01a085d259bc002d0c7c0262a087b71b5cd76bb00ff7632cb81be0210cd273a81df3f27670a921a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-125-1626817014049",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fdb3014fd2b91f795b669fa4a2a55a32a012ab5e94852d098a6c8769ccc90c425760a08f5bfefdaa10c84343ec5f63de79e731f7941f7bc4ad114119e3f34ac7efe7627083a414ce11c5eafca2cc717b7c3dbcde528f79ea29118dd3d3dce6680e09a2571b92b58478aa6a64c4eb75137af45b3c3b5101d48d4e93ba34e7fec8cddfec4ee0feda10744c98a6cc5ab7ba0ff516a27a7bdde51bc9b0b91170cefb8ec5251bebdf7f64e6f578b3b4695ec7dd4ec818cec7da1fabd10142b2eaad93602078d6475c24acc0bf0f08f9a92d38fb9bb1c97dd1cc07b4e19a6543495d2be20051555c6f3a63659d1f405199fef0e28f257fe22b6a8289ab24a2a5cb2132bc50a27ea79c7acf370b3b696c1f9265ccfe3e52648a2c5a5bf9e77179bd5761d44d6cda51ffa96c2a460866bcdac53730be002fa29938a57463dd6cf5af9b543cbcf83d1049096ac0d26137b8cfbaeed918c4c68e60e4624b319212e998cf080d8d41bb2614a18069e11352c5c898ae049ea78ae97b8ce384b865e9f245e36c20981561337b3094e1d7438418f3557ec8ccb9d90bced10ba0997b19fc4e13658cc63df9490e1a65067ad315dc07b8f0a0a04d07f6a3ae82817a0a4dbbd0c623f9c2fe2e5b5df4e78c5724c9fa3079871860bc9008d6b689e62f55aa4d03014ccd7fe1980cdc47e1c83124d7fbd20dd73ede25dcbdfe8310c50db55e68ba2385c0617c6ce11718d8bc640f6ed419791f1429b3efc06202c699b045d6dfdf0276a9f4296b19a55f4eb6102d804befed98e8b0f60587dd0910aeeb03b546a155ab37687b829f795dd1f3803c745065cab4fb1b1373c764de7d01959c92af55a52bbf850692bd6c837100461fc81e9d6e12fa72a263b7a040000",
    ],
    [
      "ETag",
      "QmfgaGZ4ZOH5g9xS5o5jxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1626817014049"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93516f9b3010c7bf8bf73822858e920ea90f244bb748347409d51ea60ab9f6c19c198ed9265314e5bbef4cbb6c5a27d117b83bff4edcfdfde7c8beab56b2843daafa470fe6f0a606f7d9071bb0bd76965e1db61658c0c0f19ac8458e37ebfc6d3cdb2d7687998da3f40b77f5f53511567c8386b3e4c82a055a5a967c3db29637406d0275dfb4e59005cc1d3a5fdc169bd5fa23e50d4a9fafefb32c9d674b760ace8d923b5e0efc2bda1e4e01dbe1e3062a30d00af0b374067720dccaaf6979d3699858ec8d00cb067838a80df61d378813aa4cc28bcb49185fc457e16c1a46d3e83d911a05770a5b82efb7342073e8b8dee04f5a9385ef8830434c2b57c3734f752587557cb85a1771344cf837c085c0be75e528582963dd937cbfc16719fe25357f254877a5f41854432bc18c51aa2bb99406ac1d25d196bcebced83ccfb397aab4d2a092e3e05e8d00daedcfc04d96a7ff93961cf647ab0f69b17c415847be3923c5ea76b92dd2db3bcf3d3c1b617e7060ef0c92ad2c784785d3e8ea72164f9f4cb6406f3cfa4ee24c0f01139cfe954fcab1a4e2dac2e9177e927bf889030000",
    ],
    [
      "ETag",
      "COoFNO+67jCjy7s64AWatg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 20 Jul 2021 21:38:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
