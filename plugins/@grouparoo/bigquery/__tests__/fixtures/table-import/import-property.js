const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631211780519";

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
      "301880e1bb642dce54c54277a24005153550b09b0cc52f0a4a09f911a3d3bbd7e935ea738177f5de515e14200491cd09bed11bd2f9c0ee17fd9059ceacab6c370a3263ae749b8852c7cbafccfb1426a7a77552855679e1344bfd53e751496b12c9d7da8cc44da97a917e6010ca2d965beb5047ef912b9dd5c053499c47301ae3c36a7a9d542ece6d6ae0a3af93d99e5f36edd05c913d6c3aca9c74c7763799c13c5c06fe14df2ca00c971aab36d50dc8c09b3c62466312ee6cdb73d5861db3cbd179d1bc1cfda3da9c851ced532162c287c6b8f1d67113b80e6dfb4f4fff17ea21b8b2928320e5e3f6a169db3df4b73e919ac1e37f07720e1cfdfc0254faaaa019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6fda3014fd2b91f75a48020402125a294d5724085b08ada6698a1c7393ba8498c64eb7aae2bfefda29acdda4f629b6ef39f79cfb9167b2e5e5868c48caf3871aaaa74ff72225670414cdf1b563db57375da8c2eec5f6ae9cfe762fb683301f8f11c1354bd2ddbe80961475c5408ed6ab765e897a4f2b215a98a8e5b6dc7ed7edb8eec0773c778834094536e7e516c9774aede5c8b68fd2ed5c88bc00bae7b2cdc4eef46e3f76ec7d25ee812969bf55b45144daef6a7e2e04a38a8b72bc5ea17e2da14a604779810efe1237e9f9dbcc6d4e77ed1cc18f9c01654cd4a5d2ae30051365c6f3ba3259c9e8991897af0e6415cc83696c3151d4bb3229e90eceac0d5534514f7bb0aea2e5c29a8557cb68318967cb30594daf83c5a43d5dced78b7065dd5e075160299a1660b8d6d83a37b7102fa8bf01a97869d463fdac955ffa33fb7f289a80d2129a603270fad4f59d619aa50396f95d2fcd1c48533f1d78b49b3a6cd883de26058a3c236a58b414a5c37a2eebf9c38466592fe931c093efb989e3f98ee36dbc7ec7f3c9e18cfcaab8824b2ef742f2a643e4369ac5411247eb703a8903534246eb425d36c67401af3d2a2c1041efd474d0512e5049b77b16c6413499c6b39ba099f01c72ca9e560f38e38c1612104d2b6c9e826a2136d830124e16c12582cdc4be1e83928c7e3c13dd73ede255cb4ff41807a8ed2af325ab389a855f8c9d23e28616b5813c36075d46c60b6dfaf01381b8a24d12f26d1d44df49f31441061594ece36122d8043efad18e6b8f505c7c54910aefb8394c6a0d5641b341dc147b62fbc34e9f1870a5fe8d0d9d41f7d8339d4367841d94eaa5a066edb1ce46ac9627100671f8a1e9d5e10fa4a5a59874040000",
    ],
    [
      "ETag",
      "2//FV3erN3BkhnCx1Bk7Ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93614fdb301086ff8bf99a4acd288545e243ba755ba5d0421b90d08422135f828be3f36ca7a8aafadf770eac209814be2477e7e794bbd76f76ec516ac112762feb3f2dd8ed510dfe2a044b70adf28e5e06b5031631f0bc2632bd6d9ee6a3f4717db55d1bb84d2dc2e8263d3f27c2950fd07096ec58254109c792df3ba67903d456a26a1b5d7459c4fcd684e22a5fcee63f296f50847c7e9d65e9249bb27d746814dcf3a2e33fd176b78fd81aef975081055d4298c5585c43e967614dc71ba360e0b0b52538d6c1dd416db135dc220ea8328807f1f838fe12c7a767c393f82b710a4bee256a42af57341ef3e8b95ae2132dc9e263226c17d3c255f7dc505d8a6e9110cee6f978d4cdf716e06589adf6452f5849ebfcb378ffc01711de938a7f12a49b92aa0faa410bb07d94340517c28273bd24ba821b73c0268b45f651152d2c4ad10f6e640fa0fce600fcc816e9ffa4257fbd6af53dcda71f08e7c93507249f5d4c57797a7119b8bb17234cb61edca545329583e0a778383a3b391d0f9f2df60d83ede83b89b72d44ace4f4a7fc929e2515570ef67f0105c0460b87030000",
    ],
    [
      "ETag",
      "AYmwN4AkjQyjpeYAroe4VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `first_name` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-2-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "90f7714d804080448abaae652b529ab60969354d53629c83ba054c6cd3aaaaf2bfef80a63f36a9fd84f1bd77efdeddf989dcf17243c624e1d9b606f9f8e55624e48080a619deaa07fe905eb0531e7c4dddede5e2eae6fba8c8261344f086a56851e5d053a2960cd478b9e86752d4159542f430516fd0b33dc71ed8b61f58437b843405793ae5e51d926fb4aed4d834f7d2fd4c882c075a71d567a278b937ef076625c52d30adccf78a268a28f343cdc35c30aab92827cb05ead70ae40a0aca73ace095b849bebdcfdce7b4e86708bee70c2863a22e755315a660a24c7956cb362b193f91b6ca3707b208a7e1716cac532e955e95b480b54195b15a495075ae8d1ff3f333638d9e529e835a1bd7a7e13c348c35dfac8d8971684ca3b328366cd4da80d2bc6c95629ae4d0a83cf722fa7f000d816aaaa00bae7ccba376608d9234f1591a38c324b5204982c41f5227b1d8c805779300459e6eb2b72c5a8a72b0b12ddbb57c873a8ee70f5cdf65607b9e351ca483c4f3872ef37d70d890ec0ec883e41a4eb8aa84e25d47c8f53c8ac3553c5fce8e8fe2b0b59152347ed215d798785ba7469308fac0d7ae8972814a4d7ba3591cce8f8ee3e82aec263a858cb2c7c516679ad25c01a2a9c4ae6b906762834d2317e78b288ece67475364b463bad8231419ff7e7a25c48f55db65dd7e1b2dcf6df5f7802b9ad72de2be3b109bec767f1081cbd791c9e5329cff22ddd51c529050b2cf4787e036f0d913da2f344271a5514569fcc73d61aad16012ba7de1455bdd9e3d0a460e69c152ff131b59961dec1bd3e468324201a57e36d42d34faecc46af5",
      "02c2208e7916cd7e62f42f99b5263a4e040000",
    ],
    [
      "ETag",
      "swiwfPcHi8+f4qQSVhB9mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d90516f82301080ffcbed1512719b73243e4c63061b3113f56931a69683d501876dd94208ff7d57dc4b7b77fdeeee4b7bf8567506219c55716d51777705daad0b52346d690d5f0dd506c103b4a2603233728eed5b1de7f2e17d759dea28c2d976b160c2c82fac04843de40acbcc40f8d9432d2ae4b6d3498f1319b35de32abb7d1a6f5e39af2873f9e690242fcb640dc371f0e042e71473d4584b74131b4d17943676b246544d89bea1564b3430c2e343a1a96d8426f2b9e24ffd60761f4c83e0693e790c9e992b490aaba866f4b003de62c98a32a55f568580013d866c9d8fe70f97d75aa1533afed3cbcea2f9d0c49b0dbaa5939bc08a9c946559ab5bf4400afe8d48d95b3efc01c49fa6946a010000",
    ],
    [
      "ETag",
      "dsc8euJnIfc4KCq2rHHe6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000000002ffedd34b7282300000d0bb642d0c0242d39d41a80e1f45a940374c08a1a620200425767af73abd467d7778df0013428721e36d451bf00a0456a14c64b77b41ab1bebfdbdb13063133796e47bcddabe8bea286852440a2e93aec36f7ad25c3c458f21cac52d400703ab259fa749e6d6152fd947bc14a15e30ef74d59acdbb604ae58ba916908eaac121fc74e62838d36628ce2b7d679d8975aadbc5d60e2f644309827e7adc044472c7e3ad362e368b6c358b224dd939f17e9b4bee645aee01f928b38a7579dff6daf54b75c4de8cf85252db385f85e908c76267f2f0a478a5293f3dfd5f6006e8d4b19e0e197b6cd71610cec05ffd8c8b8e3efe238a7bda839f5ff314b67119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91f7b540c2a31024b4329a5226085b12da4dd31439e626739bc434769850c57fdfb553ba5695da4fb17dcfb9e7dc471ec93d2fb7644c129e3dd4501d3edd89849c115034c3d7fb4336ffd273fcf9bca87f7cb5fd6116ae47d3c904115cb3242d7639b4a4a82b0672bc09db5925ea1dad846861a256afe59cf79caee30c47f6c0719126214f97bcbc47f21fa57672dce99ca4db9910590e74c7659b89e2f9bdb3ef767695b803a664e7b562074564e75dcdcfb9605471514e3621ead712aa180aca7374f09fb84d2e5e676e735ab43304ef3903ca98a84ba55d610a26ca94677565b292f123312e5f1c48e82dbd59643191d7451997b480336b4b158dd56107d655b05e590bff6a1daca6d162edc7e1ecda5b4ddbb3f572b3f243ebf6da0b3c4bd12407c3b526d685b9f97841fd2d48c54ba31ee967adfcd49fc5dba168024a4b6882f1d03ea7cec876933419b274d41b24a90d49324a8603da4b6ce6f6a1bf4d8022cf881a162d4569bb3605b675623a1ad971dfeeb258d362fbbc3b803e50c7edbae47846fe565cc125973b2179d321721b2c222f8e828d3f9b469e2921a575ae2e1b63ba80971e151688a0776a3aea2817a8a4dbbdf0232f98cea2c58dd74c7809196587f001679cd25c02a26985cd5350adc4161b46fce9cabb44b099d8b7535092f1af47a27bae5dbc68f9333dc2016abbca7c4918050b7f6eec9c103734af0d64df1c741929cfb5e9e36f04e28a3649c8f78d17fc24cd5300295450b28f87896013f8e8473bad3d4271f151452abce3e630a9355805cd067153ec89ed3a836e9f1870a5dec4f070ea99cea1",
      "334201a57a2aa8597bacb311abe5330883387cdff4eaf80f048a491174040000",
    ],
    [
      "ETag",
      "kygGB31NGGmuXJ0N7gSO8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff8bf735959a150a8bc487140a644b5b48d34dd38422d7be0433c7ce6ca75555f5bf730eac9bc6a4f025b93b3fa7dcbd7eb3273f85e224226b51fd6ac1ec3e54e0ee7d90816da5b3f86ab4b24002028e56487edfad67c376b1dad22f71764f3f2797df6ebe6e2f2e90b0ec116a4aa23d2905486e49f4634f14ad01db98966dad8a2e0b88db35beb8ccb3647e8379adb9cfe7ab348d27e9941c826323a78e161dff8eb68743409ef43a83120c28067e96c6e827602ef16b5a5a37120656b78681251ddc1d5446b70d355a0fb032180dc2f128fc188667e7c3d3f013725233ea845688ae96381e71da5199e92d2e49c21112a68b71e1b27b6eb02e78b7880f93793e3ee9e6fb1ba08ce956b9a2172c85b1ee45bcdfe0ab08ff9292be13c49b12b20faa4071307d94680acab9016b7b496d0bda34476cb258a46f5551dc68c1fbc18de801a4db1c81eb7411ff4f5af4d71fadaee27cfa86b00e5d7344f264365de6f1ecce730faf4698ec1cd83ba3d15416bc9fc2e1c9f9e9d978f862b14bed6d87df899c6921208ce29f722b1c894a2a2d1c9e01d5b3193987030000",
    ],
    [
      "ETag",
      "YybM0uOUwaKARQaJICWGVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ltv` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-4-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536d6f9b3010fe2bc8fbd82681405ea5a8eb5ab631a569979056dd3425b639985bc0d436e9a22aff7d07347d51a5f613e07b5eee391f0fe456e41119132692bb12d4f6d38d64e49080a1099e1607d7eae68b3f15793afb71cf1607e5afedbf64324184a8589a66450a2d2d4bc5418f978b76a264595025650b855a5ecbe9bb4ed7710643bbe78c90a6218d51ee16c97f8d29f4b8d3d95bb7132993146821749bcbece9bcb3e9760a256f801bdd79edd84113dd79d7f328959c1a21f3c97281fea506b5828c8a143b782646ecf36be5b6a0593b41f04670a09ccb3237555728c1651e8ba454b52a193f90bacb172f64e14ffd93d05aa766b3b6a8b6562b05ba4c8df5757e7e66ad314c2c52d06bebeabb3ff72d6b2da2b535b18eac69701684968326116823f2da22a42c854afe7108c1dbc957046aa886a6b81ad87dea0ced118bd980c743b7c7621b181bb2418fbacce6230fbc8801459ea9d46b16cd656e43dfed32dba5032fb223bbc77ab43f021872dee5430ea8093db03d8fec0ec9bd12064e852ea416cd28c8d53c08fd55385fce4e8e43bf8e11530c7eda34578578d9a7c190087a27d7aeaa0a894ed55c8359e8cf8f4fc2e0d26fae720a09e5dbc51d5e664c530d88a68a6660409dc90887462ece1741189ccf8ea7c8a8efe7628fd064fcfbe199106e8b7acaa67e565efd3ae613e092a6658dd8342fc421bbdd1f44e0d63564f273e9cfaf497334871814e4fce3ab43705df8e8dfd96f32427197d1451bfcc63de1baf2e00a9a7d1159dddd237bd4751d97d46065ded43cafbb1f4ca551294206b9790cd46c32e66ccc4afd04c2225ef32c987dc3ea7f1622e71a47040000",
    ],
    [
      "ETag",
      "p+YrjBELinlNJwbS+uZyxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "0c",
      "80",
      "ff",
      "97fa2833dc1405121e9871d1387f30e58118428ead9b9bdb3aef3a0d10fe777bc397bbb6f7b5fd7207f82a9a14a6b02df2ef0ecdee2c475eb82046db556ce56aa9b1080340d6b990013f6e9f56e758eaf1220e8b7d68a315cf6733216cf289b586e901b202abd4c2f4e3008dae51da361bd34f148c77adab84d1cbfc5dd29a52973e2fa3681e4477705c1f0750d236c60c0d3609ba81ada112137e70ae56d76d859ea5ce2468a187fb87dc50d76a43e449c5bbf2d4f5a5f295ba190f476a225c4589e6821a41976f205b98585731fd8a2928014c1f8a74d69f3f52f647930be53ba9f53f1fec18edab21d96dd1ad1d9e146ec969b1e8b2e970008996efb82ff8941fff00ec8aefc76b010000",
    ],
    [
      "ETag",
      "BtKbMY+eja8QRFizFsLYtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b",
      "7282300000d0bb646d196bb490ee64b08a88025504360cc4f0915f24c940747af73abd467d77780f90604c188b795791167c0299cc9082158b6aba31e4ecbcb7ecc8ba1ea91cca44cf7770b817a3351fe5103ab8aaa1dd46739c0fea594d23ffb0b2af42cf0ca35221ae5d7ae39eea2d17cc35ccd50955de87489be2aa99e9460b78669bea0513e79d1c5b129a45f75569d96279f3cb7577b80b5790b92bebe92c946f45366dd6cde0dd9b2dbf74ae68e106ad1dce625b955b21a8c931dde1d3b60f5000cf7b516e7c67968630473e0bba10faf1c5b1bf6b2b7191f2f2f27f810920232d7bc2e2f2b91d2e109a80bffa3197943cffeb24e9490f7e7e014fc44c6e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553616fda3010fd2b91f7b540028500125a114d5724085d12da4dd314d9e692ba0d318d1daaaae2bfefec94aedda4f6536cdf7bf7eede5d9ec9bd2837644c98c81f6aa89ebedc49464e08689ae3ebaa2e17fa365a55b3ee3aa6fdcc9bfeb8f21f27134408c35274bb2ba0a5645d7150e375dcce2b59ef6825650b13b5fa2d6fd0f3ba9ee70fddbe37429a82225b88f21ec9b75aefd4b8d3394ab77329f302e84ea83697dbd7f7cebedbd955f20eb8569df78a1d14519d0f35bf1692532d643959c7a85f2ba852d8525160057f891b76f63e735bd06d3b47f05e70a09ccbbad4a62a4cc1659989bcae6c56327e26b6ca370712078b6096385c16f5b64c4bba85136743354df5d30e9c8b68b574e6e1c52a5a4e93f92a4ce3d965b09cb667abc57a19c6cecd6510058ea6ac00cb7526ce99bd857841fd0d282d4aab9e9867a3fce2cffcffa118024a2b6882a9ef0ea83774472c633ecf86bd3ecb5c606cc8fc3eed31978f4ee174c38022cf8a5a162db1673618c0c0efa79ed71da5a774c05296f54629aec58081eb6dfc2e278713f258090de742eda4128d43e4269a27419a44eb70364d02db4246eb429f37859906ded6a8b141047dd0d3c14485442563f73c4c82683a4be6d74133e105e4943fc50f38e38c160a104d2b344f43b5941b348c84d365708e603bb1ab635091f1af67623c3755bcb1fc959ee0004db9da7e499c44f3f09b2de788b8a6456d21fbe660dac844618a3efc4620ae6893847c5f07d14fd23c4590410525ff7c9808b681cf7eb4e3da2314171f5594c63b6e0e57468357d06c90b0cd1ed9a3eec877890557fadf58cf1df68e9e991c26236ca1d42f0d356b8f7d3662b57a056110871f5aaf0e7f00b33d15f474040000",
    ],
    [
      "ETag",
      "OunLthROrC2USa5f1AXP7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10c7bf8b795caa3594161689879495ad53da421ac4c38422635f3233c797d94e5157f5bbef12584163527849eecebf53eefefe67c77e2a2359c4ee55f9ab01bb3d2ac15fb7410aaed1ded1ab46e380050c3c2f894cbe15cb8bd9e4439c26990a47d3c5ef8fb7fefafc9c08277e40c559b46385022d1d8bbeef98e115509b40dd5426efb280f96ddd16d7593a5f7ea1bc42d9e6cb9b2489a7c98ced8343a3e49ee71dff8eb6bb7dc01ef03e85022c1801ed2cb5c507107edeaee978556b18386cac00c73ab83b282d3635b78803aa0cc68370320a8fc3f0f46c380e3f11a75170afd0107ab3a6f19847cf758a8fb4240b4744d82ea6858beeb9a1ba92dd226d385f6693936ebed70017021be3f35eb050d6f927f1fe82cf22fc4b6afe4e906e4ae93ea80423c1f651aaceb994169ceb25d1e5bcae0fd874b54adeaa62a44525fbc18dea01b4df1c80cb6415ff4f5af2d78b569fe36cf686709e5c7340b2f962b6cee2c555cbdd3d1b61baf5e0ae2c92a91cb47e0a872767e3d3c9f0c96217d8da8ebe1379db40c004a73fe5abf22c2ab876b0ff03f4b6ce2187030000",
    ],
    [
      "ETag",
      "LJfNCE6+ARLTi13BMz/WtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ios_app` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-6-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "a34010fe2b64efab6d412a85268d6794f3b8f4c5a3b4e672b9b4bbcb80abc022bbd418d3ff7e03585f62a25f78d9799e79e699997d2277a288c9983091ded7503d7ebb958c1c11d034c5d36118ddace307b6362f834bf96bb9a3f6e2ee6132418468588ae665063d25eb8a831aaf96fdb49275492b297b98a8e7f42cc7b68e2d6be49a2796873405593215c51d926fb42ed578303848f75329d30c6829549fcbfce57cb03b1e9495bc05aed5e0bde20045d4e053cdd34c72aa852c26ab25ead70aaa0de4546458c12b3166dfdf67ee0b9af75304ef0407cab9ac0bdd548529b82c1291d6559b958c9f485be59b0fb2f4a7fe79646c85541b5a965b832a63b3a940d599367e848b99b1454389c8406d8deb9f7ee81b088eb7c6c43835a6c12c880c0b8562505a14ad4c4459068dc47323828fdd6f085453055d7033321d6ab9a6c71236e2896b9fb0c404c65c363aa13633b9378461cc80224f37d95b162d64c1bc51e20e69628f92d88e2d7b840f07181d7a8e6b719e70fc355d6e93fd1179a884860ba14aa944d70e721d0691bf89c2d5fcfc2cf25b1b0945e3175d718d89b7756a3489a04f7ced9ba890a8d4f43698477e78761e056bbf1be71452ca1f97f738d084660a104d2b9a83866a26636c1ab95a2c832858cccfa6c868677475402832fefbf44a881ecbb6cbba7d375aceb0d53f00d634ab5bc4aefb2016d9efff210237af2393df2b3ffc43baa31012a8a0e05f8f0ec16de0abfb73d86684e23ea38ad2f88f7bc255a3c12be8f645e46d75cf6ccf76bbdba769a53fc43cc73b34a6c9d164841c0afd6ca8db66f4d989d5ea0584411cf33c985f62f43f256ca7384b040000",
    ],
    [
      "ETag",
      "4RThVdwbV0GIGoJSva3Okw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90dd4e83401046df65bc8584b5b12a492f8a69c496b415d38bc634cd16060481c1ddc58610dedd59eacdfe7c7b66e66407f82e9a147cb814f94f87aabfcbd1bcdb438cbaab8ce6ada54623388046e64c96af5e24f66118442867de7ab36e8ec1e6ba5830a1932fac25f803640556a906ff738046d6c865e7b39a3a3266fad626c16e17ad965b0e6a4a6db03d44d1328856309e46074abac498a1c22641dbb255546262deacad96755ba1aba953096a98e0e92157d4b55211b99cb87357cc67e25e88c727ef413c335751224d410da3870fe029868cac62bab22b0806d47464ed6c5a7f3936aa43ab74faa783dea0de2be2c91aed50ef26f04256cab0acad702091fc1d61616ef7f10fe98d36906b010000",
    ],
    [
      "ETag",
      "jG0L1PHHBLea30JKJnYBKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "02ffedd34b7282300000d0bb64ad8e5a10e80e0b6242ac08a1d45526402810f914ac013abd7b9d5ea3be3bbc6fc09284f73dbd3682d7e0198c6c6d2c9285dbea5b4b7e64fbce4b992a90f9a24caf70c32fb5ea88846cce63126fe661b1f6089e44eb37e1fa53776c99292cb7ccb945e4480b7452f75a577243e0a059c93ec86373979686fd4697f0d2d614e567bc2c8df7340cf4c4475fc88c7ca14168656e2caf7e7fa34705ed77398e7429446c4e5339ac70716cc32c55b426ac9c5ab319d45715d107a2b85589ab08625739ccfb2d3b2049bce170b9a9214cc9f17cd2226ff1f0f07f8119e0435b74bca7c57dfb936a1833f0579f5ec796dfff6f39eb78077e7e01258935a219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553616f9b3010fd2bc8fbda2440931022456b94d2952e211d218daa6942b631cc2de0149b4e5595ffbeb369ba5695d64fd8be77f7debd3b9ed13daf33344584170f2d6b9ebedc09824e1053b880d7dfe1f7ddd535bbbedd6deb85ed5e7ae5eaca9fcf6680e03a4be26a5fb29e146d43999c6e37fda211ed1e3742f4a050cfeb39e353c7751c6f628f1c1fd2242bf325afef7571a5f6723a181ca9fb851045c9f09ecb3e15d5ebfbe0d11dec1b71c7a89283f78c03209183ff727e2d05c58a8b7ab6dd007f2b5993b20af31214fc4bccc8d9fbca7d8eab7e01e0474e19a654b4b5d2aaa0041575ce8bb63155d1f41919956f0e68132c8345625151b6559dd6b862275686154ed5d39e5917f17a6585d1c53a5ecd93701da59bc565b09af717ebe576156dacdd65100796c2a46426d79a5967e616c105f8332615af0d7ba29f35f38b3fe1c7a1e804a096ac0ba69e3dc6cec4f6494e3c9a4f4e4724b7192113e28df029b1a93f64c38c300c7986d464e15ad49321f56decfba9eb129a0e87cc4d09c99cd49b60df26e3ccf37d171d4ed09f862b76cee55e48de39847671980469126fa3c53c094c0b396e4b75de09d30dbcd5a8a04100fda7a7838e72014cdaee304a8278be48c29ba09bf09215983e6d1e60c6392e2503346ec03cc59a95c8c03014cd57c13980cdc4ae8f4189a63f9f91f65cab7863f96b7a0203d47295f9a24d1287d13723e788b8c1656b208fdd41b791f3528b3efc0220ac685704fdd806f12dea9e6296b386d5f4f36102d8043efbd18e6b0f50587c60910aeeb039546a0edab06e83b869f698ed0fc7aef94d156ed48798371a1d3dd335744556b15abd34d4ad3df4d991b5f2150441187e64bc3afc053d245b3f74040000",
    ],
    [
      "ETag",
      "hIKWJPePYWUnC02H7lMJ9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "301086ff8bf99a4acd809645e243ba15562db4a50d9ac48422d7be04774e2eb39da2a8ea7fe71c5899c6a4f0c5b9bb3ca7dcbd79bd67bf542559c436aaf8dd80694f0a70b73e58816db4b3f4a8b1b2c002068e1744aa6d0b3c4fbe2fef473fda8d5aa7e2a9886f2f2f89b0e2114acea23dcb15686959f473cf2a5e02b509d44d59655d1630d7d6beb84e57b3f935e5254a9fcfef92249e245376088e8d923b9e75fc07da1e0e01dbe266053918a804f8596a835b106ee6d7b4bcac350c2c364680651ddcbd280c3635378803aa0cc68370741a7e0ac3f1c5f03cfc4c9c46c19dc28ad0bb358dc71c3aae57f8444bb2f09408d3c5b470de9d3b2f95ec16f1e16c9e8ecebaf9fe06b810d8542eeb057365ac7b11ef0ff82ac2bfa4e61f04e94f29dd07155049307d94aa332ea5016b7b49b419afeb2336592c92f7aa54d2a092fde04ef500daed8ec055b288ff272df9eb4dabaf713a7d475847ae3922e9ec66ba4ee39ba5e71e5e8d30691dd8a541329505efa7707876713e1e0d5f2cf605bdede83b91330d044c70ba29df946351ceb585c33364eb756387030000",
    ],
    [
      "ETag",
      "ijyeafLKPZ6WybiSTcwgAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `date` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-8-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535b6f9b3014fe2bc87b6d02248140a4a8ab5ab631e5d211d2aa9aa6c43607e615708a4dbbaeca7fdf019a5e54a97dc2f87c9773f303b9166542268489eca686eafed31fc9c811014d33bc4dff7977d7b179f53d5f3adeac58cf87177fd9dd748a08d1b0142d7639f494ac2b0e6ab25ef5b34ad63b5a49d943a19ed7b3dda13db0edb16739b68f3405793a13e535927f6bbd5313d33c58f73329b31ce84ea83e97c5d3bd793b307795fc035c2bf3b5a38926ca7cd7f338979c6a21cbe97a85feb5826a0305153966f04c4cd8e7d7ca7d418b7e86e05bc181722eeb523759a10497652ab2ba6a55c9e481b459be389055300b4e63639b500d5b832a63b3a940d5b936be44cbb9b1c56a529183da1a97df8228308cad48b6c6d4383666e13c8c0d1b5d12505a94ad474c590e8dfe6317c2b7ad6f085453055d7033b65c6a7b96cf5236e6a93774586a01631e1b3b74c82cee8f609430a0c8d38d7acba2a52c0789c74648a6be93ba8ee78f13db7587693a18c3c0f7d3814db9e5703620fb237257090d6742eda4125d2fc86514c6c1268ed68bd3933868cb4829167ed625d714f1324f8d4522e89dbaf64d5448746a1a1b2ee2203a398dc38ba09be50c32caef573738cd94e60a104d2b5a80866a2e136c1a395faec2385c2e4e66c86807747e402832f9f9f04c88ef776d9775fb6dbcdc51eb7f005cd0bc6e11b7dd81d864bfff85085cbb8e4c7eac83e88a745711a45041c93f1e1d82dbc0478fe7b0ca08c5654617a5f11ff784abc68357d0ed8b28daec1ed9be331a5ba40557fa4dcc754687c6341a8d221450eac782ba55c63a3bb35a3d813088635e848baf18fd0f2275be7448040000",
    ],
    [
      "ETag",
      "fz8wkT/YJlO58LmUM3Vxbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90514fc2301080ffcbf9ca92764405121e1890685c880e79504348e96e63b8ed66db8993f0dfbd0e5fdabbeb77775f7a86cfa24e6102fb22ff6ad1743739ba171f2468dbd259be1aaa2dc200d0a99cc91f548bf5db70becec6bf6275904fd17baa4fd32913561fb0523039435660995a987c9ca1561572db6e67fa898cb9aef195c5ec75c95945a9cf569b389e45f1122edbcb008eb44f304383b5463faf317444ed1ebdaa5555536260a9351a2df470ff901b6a1b658802ae04a340de0d6528e5fd48dcca31732569e50aaa19ddac81b73872aa4ce8c4a22019307dc8ce597f7e733914a108441808e9c5b6ff3d51e7d03e1be2fd16fd6a71d598935773acec4c8b03d08a7fe4a170d7fcf20714567b6f6e010000",
    ],
    [
      "ETag",
      "xeaDSY3CSf9z0Nh1KBZdcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "1f8b08000000000002ffedd3417282300000c0bfe4ec381a0890dec0521369ad0201f492410c42ad10829568a77fafd36fd4fdc37e83bc2844dff3737b140d7802d71ce271310ea4e33d0ff530cb8876e1a9c991aca82fa764be3fdcf210421bf9d4b2bacb84318190bba9f067cbb257274dc8c7a0175187dcf8929869141da766570e3bd5ce06b65df0d50a9e7cea7b098ce20d6e206b97ebd2f699e1b7248869955f434c78aa57eb8c9a83fb7eeb4aa5f1d2e03aac2a4747e11bebad2aa3e94cdbe4d4c4126b34d98a304b2fe79703da3b5eb09b4f13c269ef45b790cf15372d89d4ce28b9fe1a3f3cfc5f60048496b5123dafefdb0d84f108fcd5e7e7ab14f7ff9ec89550e0e7177219927819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8553db6e9b4010fd15b47d8d2f80ef92d5583669acdab8c590a8ad2ab42c03d91458875d524591ffbdb34b9c268a943c999d3967ce998b1fc91f5ea56446129edf35503f7cba15093923a0688e513f08cbf1cd30725791d844beabca9ff5d7c57c8e08ae59929687023a52343503398bf6ddbc16cd81d64274b05067dab147aeedd8f678d21fda53a44928b20daffe20f946a9839cf57a27e96e2e445e003d70d965a27c8ef7ee9ddea116b7c094ecbd56eca188ecbdabf9b9108c2a2eaa79b447fd46421d434979810efe13d3e4fc75e52ea7653747f03d674019134da5b42b2cc14495f1bca94d55327b24c6e58b0fb2f736de32b498289ab28a2b5ac29995524563f57000eb22d86dadb57fb10bb68b70bdf3e3fdf2d2db2ebacbdd26dafa7bebfad20b3c4bd1a400c3b5e6d6b979f9f840fd14a4e295510f75582b3fcd67fd76299a80d212da643cee8fa83de94f932c19b36ce20e93ac0f493249c643ea267d361dc0204d8022cf881a16ad4435614e3f75d22c06d7cde241c69c7892259378e464d391cbc618b6c9f18cfcadb98215970721793b21721dac432f0e83c85f2e42cfb490d1a650abd6986ee0a547850d22e89d9e8e3acb052ae971affdd00b16cb707de5b51bde404ed9c3fe0e779cd14202a2698dc353506f450afab0175b6f8560b3b16fa7a424b35f8f44cf5cbb7831f2677a880bd47695f925fb3058fb5f8c9d13e28a168d81dcb71fba8d8c17daf4f13702f144db22e47be4053f481b0a20831a2af6f132116c121ffdd14e678f503c7c54910adf78394c6a0d56437b41dc347b624f478ee31003aed59b9c6b0f4e33d335744528a1524f0db5678f7db6628d7c06611297ef9b591dff01ef8f0d0274040000",
    ],
    [
      "ETag",
      "NRTm7h5U3DUoLUN3tmZrKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "936f4fdb3010c6bf8bf736951afe1488c48b160aab161ad6062131a1c8b52f9999e3cb6ca75b55f5bbef1c588706527893dc9d7fa7dc3d7eb2653f94912c612b55fd6cc16e3e55e0bf866001aed5ded1ab41e380450c3caf886cbf3c1c8cb2e1fdc498fbab95d672f9db65d5f939114e7c879ab364cb4a055a3a967cdb32c36ba03681baad4dd16511f39b261497f96236bfa6bc4619f2f95d9a8e27e994eda27da3e49e171dff81b6c75dc49e70b580122c18016196c6e213083f0b6b3a5e371a060e5b2bc0b10eee0e2a8b6dc32de2802a83b3413c3a8c0fe2f8e474781c9f11a75170afd0107ab7a4f19847cff5027fd1922c3e24c276312d5c76cf35d595ec1609e16c9e8f8ebaf95e035c086c8d2f7ac15259e79fc5fb0bbe88f03fa9f90741ba29a5fba00a8c04db47a9a6e0525a70ae974457f0a6d963932c4bdfaa62a44525fbc1b5ea01b45fef81ab341bbf272df9eb9f5697e37cfa86709e5cb347f2d9cd74998f6f6e03f7f86284c9c683bbb548a67210fc140f8f4e8f4f46c3678b5d60b01d7d27f1b68588094e7fca67e5595272ed60f707542af82987030000",
    ],
    [
      "ETag",
      "uKZ26O0WBnnWFblldSxsOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `stamp` as __result FROM `profiles` WHERE  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-10-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536d6fa24010fe2b64ef6b15505134313dcf727724bef414db5c2e17dd5d06ba2db0945dec99c6ff7e03d4bea449fb49b2f3bccc33333e923b918564449888ef4b280e5f6e25236704348df1b5b3c9fd6ff39ba53a4ca2e9de7197ece6df653c1e2342542c45d33c81969265c1418d36eb765cc832a785942d146ad956cbee77ed8e6d0f5ccbb187c85390443391dd21fb46eb5c8d4cf3e4dd8ea58c13a0b9506d2ed3e77773df31f342de02d7ca7c6b69a28b323f363d4f24a75ac86cbc596303a582620b291509b6f0c20cd9d7b7d26d41d3768ce0bde040399765a6abb65082cb2c127159d4aa64f448ea365f7d90b537f3a681b1531a35770655c6765b802a136d7c5f2de7c60ef3442201b533ae7f7a2bcf307622dc1963e3dc98f9733f306cb409416991d52601650954064f73f0df4fbf22504d1534c5edc0ea53dbb5862c62031eb95d87451630e6b28143bbcce2c31ef442061479ba52af5934935938e45d97755cc4f407b41b59431af580f3217328f49da8c36dce2d4ac9f18c3c1442c38550b954a21906b95ef981b70d569bc5741278758c8862f08ba6b92ac4eb3e358644d007b98e55554874aa26eb2f026f359906fe95d72c730631e587f53dae33a2890244d382a6a0a198cb1087462e976b3ff0978bc90c19f5862e4f0845467f1e5f08c121afa7acebdfcaabdfabfd4f802b9a943562df7c109b1c8f7f118187d790c9af8db7fa4d9aa715445040c63f5f1d82ebc2a7ff9fd3312316cf196df0c4b4c043e1aa32e105340723d2babd27f670d0b71c52830bfdae36e85aa7c9541a9522a490e9a744cd3163d0c6ac54cf202ce29e17fee20756ff03f9567dcf4c040000",
    ],
    [
      "ETag",
      "2UpIBMhOsyAfCv58ObhxPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d906f4fc2301087bfcbf97633ab0a7324bc00b344cc30734034318474e53687db6eb69d8610be3bd7e19bfef9f5b9bb273dc177d5ee61027955fef4a88f3725da3777c8d0f4b535bc75d41a040fd0ca92c997f7408cd379197e14aacf175dbe09e364369d3261d41736122627282aacf706269f276865835cb6dbe9a12363f6d8b964bd58c6abf56c9972d4d0de45af9b2499cd9318cedbb30707ca332c5063abd035ed341d50d985f335b2e96af40df55aa181011e1e4a4d7d273591cf892f025f8cefc59d10e163301211833529692b6a99ddac80c758b2b2cee88f754130a087239b17c3faebe2db11978f22113dc49193dbfe97cd8f164daa891d0cbaf1c155e5899c9e656dab7bf44049fe9ae7ca5eefe70b91a99fe477010000",
    ],
    [
      "ETag",
      "JW016PBg7XfcubIpbU7ELA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00000002ffedd35b7282301400d0bde4db3a8697a67f45841a19e4e138ca0f436222a0c285f88076baf73add463d7b38df28e75c28955d9b93a8d13b1a728d8cf9780533db7994837950ba46ab95a7dff8b19d60993277472e4595f84b5a3bc6e01f1b6e5a7da631c1a8e0a71b4986aed3a2e5c7fd1c06d7a8381412d6135d4fc320056a68de7d176f3b43b9b26249aac8946ec197bd9fccb0b38aebc55711980edfe0401810b706c3b724762df0bc761309bcb732308155fba52dc1c26fd52e9c030f402d62eca550d08b1464f129c369619fd7433a65739b4650360fb7ea2fb51cbfbcfc5f6884440f652754563eb7eb262123f4573fbb0e209eff6d9177a2433fbffce142c419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f7953ed2a634ad548daa84b5124db734054dd31439ce4d6648e2623b3084fadf77ed500642824fb17dcfb9e7dc479ec82daf333225292fee1a908f5f6e444a4e08685ae0eb72c4eb53addd8beaefd5835c4abaaeeefc87d90c11dcb014adf625749468240335dd6dbb8514cd9e4a213a98a8e3ba1df774e80e5c77ecf747ee04790acafc92d7b7c8fea3f55e4d7bbda376b710a22881eeb9ea3251bdbcf7ee07bdbd1437c0b4eabd95eca18aea7d2cfab5148c6a2eead96e8b061a0532818af2122dfc6766e9d9dbd45d4eab6e81e07bce8032269a5a1b5b9882893ae745236d56327d22d6e6ab03d90697c1227698289baa4e6a5ac18993514d13fdb807e722daac9d5578b189d6f378b50993ed6219ace7ddc5e672b70eb7cef532880247d3b404cb7566ce99bd857841fd0c94e6b5558fcdb3517e6ed0eafd580c01a515b4c164dc3fa5aedf9fa4793a66b93f1ca5791fd2d44fc7233a4cfb6ce28197a5409167452d8bd6a21efb8c7a5e3e4ebc8c0d128fe559e27b344dfa033af25836f2a10fe470421e24d770ced55e28de76885c47ab3848e268172ee671604bc86953eaf3d69829e0b5478d0522e8839a0e26ca052a9976afc23888e68b787515b413be8482b2c7ed1dce38a7a502445389cdd320d722c3869170be0ece116c27f6fd185464faeb89989e1b17af5afe428f7180c6aeb65fb28da355f8cdda3922ae68d958c87d7b3065e4bc34a60fbf11883bda26213f7641f493b44f11e420a1669f0f13c136f0e9af76dc7bc4e2e6a38cd278c7d561ca883009ed0a715bed913df1079321b160a9dfc586fee4d83493c364840a6afd5c51bbf758682bd6a817100671faa16dd6e11f7127366777040000",
    ],
    [
      "ETag",
      "H5in6tt1FmxVwrHraMmq8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bf8b794da57a4061917848a1639d425bdaf0304d2832f62573717299ed145555bf3be700651a93c24b7277fe9d72f7f73f3bf6a86bc562f6a0cb3f2dd8ed5109fe36044b70adf18e5e0dd60e58c4c08b92c8abc95ace1e2fdbb5f58b9f3f16fa499b647e7b71418493bfa1122cdeb14283518ec5bf76ac1615509b44d35675de6511f3db261457d9723abba6bc4215f2d95d9a26e374c2f6d1a151092ff28eff44dbfd3e626b7c584201166a096196c6e21aa49f86359da81a030387ad95e058077707a5c5b6111671409501e7033e3ae65f383f3b1f9ef2af041a94c26bac89bd5bd17ccca31766894fb425e3c744d82ea68d8beeb9a1ba56dd26219cceb2d14937e0df809012dbdae7bd60a1adf32feabd81af2afc4b1af14990ae4a9b3ea8845a81eda374930ba52c38d74ba2cb45d31cb0f17c9e7e54a55616b5ea0737ba07307e7300bea5f3e47fd292c1deb5ba4ab2c907c279b2cd01c9a637935596dc2c0277ff6a84f1d6835b582457390886e2c393f3d3b3d1f0c56397187c47df89bd6d216252d0aff25d7b1617c238d83f0330d6a94688030000",
    ],
    [
      "ETag",
      "DEjcNkCujrtPYJPiwilAOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `first_name` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-12-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b4fa34014fd2b64f6ab6d81b6409b346a1477496aeb52aa319b4d3b03177614189619ea1ad3ffbe97c1fa8889860fc0dc73ee39f7014fe49e97099912c6b3bf0dd48fdfee0423470414cdf03434875579bb8aee1e2eaeae9d9d7f532d0b99cd6688e02d4bd2a2caa1274553c720a7eb553fab4553d15a881e26ea5976cf7286966d59ae678ead09f224e4e99c97f7c8fea35425a783c141bb9f0991e5402b2efbb1285ece073b7b50d5e20e622507ef2507a822079f8b1ee722a68a8b72b65ea1814642bd8182f21c2dbc321376f23e759fd3a29f2178c763a0712c9a52b5b630452cca94674dadb392e913d136df3c90953ff7cf22639bf25aaa4d490bd81a541a9b4d0db2c99571112e2f8d2d1695f21ce4d6b8f9e187be616cb5afad31338e8d797019448685720948c54b2d165196432bf4dc8fe0e3145a0255544217dcb8a6432dcf9cb094b971ea0dc72c3581318fb9633a64663c19c128614091a7daec9a454b513aded0a6c988391e4b98e7da8e9b5a13c731bda4bdc6cc764c37b59d94ec8fc843cd159c735909c9bba6909b3088fc4d14ae1767a791afcb4829d67ede996b8b78eb53619108faa4ae7d1be50295da0e078bc80f4fcfa2e0daef863a878cc68fabbf38d694e612104d6b6cbc82fa5224d83472b55c0551b05c9cce91a1277575404832fdf5f44a881e2bdd65a5ef641585c1e2bb3670405cd3bcd1905df740e00e374570699ec03fed5befca7eff1b59b8955d46f273ed87b7a43b0a21851acaf8eb79225807befcb80e9b8e58dc7594910adf717b62d98ac435745bc48bd6cc813d990c6d976870ad3ec49cd1f0d0ae36479b110a28d57345dda663a19d58235f40edff63bd58e8ceedff0303af429a69040000",
    ],
    [
      "ETag",
      "R03pnYSTjwFPV6vEWpOmsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c1",
      "6e",
      "c2",
      "30",
      "0c40ffc53bae9508136343e24019db902ab4b5709a100aa9db15dab84bd24d55c5bfcf295c12db79b69fd2c3b9d419cce058163f2d9aeeae40f7e983046d5b39cb5743da2204804e164ce68536f6453534d5e936ba4f27e762f9ba98cf99b0ea1b6b09b31ef212abccc2ecab072d6be4b6c3c10c1319735de32be936596fde38af29f3f96617c78b285ec1657f09e044c7047334a815fa898da1132ab7f6b256d64d85a1a5d628b430c0c34361a86da4210ab9128a71281e1fc45888e9d368229e19ac4849579266769702af71e46495d01fbb8260c00c216be7c3f9cbe59529d13bed6f74d439b41f8678b545bf7574355892b7726ceb4c8b0128c9dff15eba6b7ef9076b3261e66b010000",
    ],
    [
      "ETag",
      "fgnrsDcpo7nSTB+S5kgCFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000000002ffedd34b7282300000d0bb64ad4c0b846a7750ad4440f917d86430060111c2477e9ddebd4eaf51df1dde378809a16d8bbbea4a4bf00ea6985f7384d3d84ad90cb9b284d6741ca4d636048acbd4ed2cf826de9785e944c7fa965783480bad75206e06c20fb3e40c8e169eed4c1a0f726fcbfdcb5effacbf4224215d3c6de9116591bbedd1ab423c16cbbbbe3a9bba506737f71404de1e611d06ae1af2570451935e12acf8179b249e1fd5ab514481044bd6a9b266241b6ced42368b7c2428eaaaccdaa2ba153e6f4e02f1ad4e97136ca57e6e98f1e123f6487f1766764785c43d3dfd5f6001e8c8b286b6387b6c17e07abd007ff5713731faf8afd0b8a10df8f905a2b1957519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3010fd5790f7b549a024e48714ad514ad74c096981b49ba609d9c630a704536c3aa555fef79d4dd3b5aad4f205ec7befdeddbbe309ddf132451344787edfb07aff652b083a414ce11c6eddc1f7cb1ff3c7edbe7a7482fa2ae4dfb7e5e67a3a0504d72c897755c13a5234356572b289ba792d9a0ad742742051c7713b8ee73aa78e331cd903670c3cc98a6cc9cb3b60ff51aa92935eefa8ddcd85c80b862b2ebb54ec5eee7b0fa7bdaa165b4695ecbd95ec818aec7d2cfab510142b2ecae92682021ac9ea84ed302fa084ffcc949cbd4ddde578d7cd01fcc029c3948aa654ba2c48414599f1bca94d56347942a6cc571f28f297fe3cb6a8289a5d999478c74eac142b9ca87dc5ac8b70bdb216c1c53a5ccde2c53a48a2f9a5bf9a75e7ebe5661544d6eda51ffa96c2a460866b4dad33730ae000fa29938a97463dd6d75af9d9a0c5fbb16802484bd60693a1ed6167648f494686341bb90392d98c9011190eb04b6c3aeeb37e4a18069e11352c5c8ad20137fb8e472143364afa039726c4f648e27a436f8c1d78488a0e27e86fcd153be7b21292b70ea1db7011fb491c6e82f92cf64d0b196e0a75de16a61b785da3820601f4414f071de50294b4dd8b20f6c3d93c5edcf8ed84972cc7741fddc38c335c4806685c83798ad52b9182612898adfc73009b895d1d83124d7e3d21edb9aee295e52ff41806a8cb55e68da2385c04df4c3947c40d2e1a0379683f741b192f74d187df00841d6d93a0eb8d1ffe44ed55c83256b3927e3e4c009bc0a7bfda71ef010b9b0f3252c11956874a2d426bd6ae1037dd3eb347b6ddf73c64c0b57a171b78e3a3693a87cec876ac54cf1db57b0f8db6628d7c014110a61f18b30eff00caaa085777040000",
    ],
    [
      "ETag",
      "35JHXCzjypz1NrPRiJjnUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3010c7bf8bf74aa4d0a4498bd407b2651b124dd2843c4c53855cfba0ee0c476c93298af2dd7ba66d36ad93e80bdc9d7f27eefefe7364bf542d59c41e54b96bc11c3e95e0ee7cb006db6a67e9d5606d81050c1c2f8984c71fab994af87837bde6e91696ab62ba8b6f6e88b0e2112acea2232b14686959f4f3c86a5e01b509d46d55e75d163077687c7193ad93c537ca2b943e5f6cd3349ea573760ace8d923b9e77fc07daee4f017bc287351460a016e067690c3e8170895fd3f2aad130b0d81a0196757077501a6c1b6e1007541984a341381985176138bd1a5e86d7046a14dc29ac89dd6e683ee6d071bdc6dfb4250b4744982ea68d8beeb9a7ba92dd263e4c16d964dc0df837c085c0b676792f582863dd8b7a6fe0ab0aff929a7f10a4ab52ba0f2aa19660fa28d5e45c4a03d6f6926873de34676cb65ca6ef55a9a54125fbc1bdea01b4db9f81afe932fe9fb464b03f5a7d89b3f93bc23ab2cd19c992dbf9268b6f579ebb7f35c2ece0c0ae0c92ab2c784385c3f1d5e574327cf1d867f4bea3ef44ceb41030c1e957f9ae1c8b0aae2d9c9e0160b17b1988030000",
    ],
    [
      "ETag",
      "ehYPBiIa4q79aLUeOPf7qA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ltv` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-14-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553ef4fa34010fd57c8de575bc0164a9b346a2ade616a554a357ab9b4cb3270abc05676e99d67fabfdfb0587fc4443f013befcd7bf3767822f7bc4cc888c43c7ba8a17afc762762b24740d10c4f6f6f2756f82f736f929bd39a4ffac7a7ece4fa723c46046f589216eb1c3a52d41503395accbb5925ea35ad84e860a38eddefd86ecfdeb7ed816739f6107912f274cacb7b64ff566a2d47a6b9d3ee66426439d035975d268a977373b36fae2b71074c49f3bda4892ad2fc5cf420178c2a2ecaf1628e066a09d5120aca73b4f0ca4ce2c3f7adbb9c16dd0cc11bce803226ea5235b6b0051365cab3bad25dc9e889689b6f5ec8dc9ffa93c858e56ab332a83496cb0a649d2be3243c3f3356384dca73902be3fa871ffa86b1d28656c6d83830a6c159101936ea2420152fb54a44e31c1a85e720828ff13704aaa884b6b81c582eb53d6b18a7f180a55ecf89530be2d88b070eedc5161bf6a19fc44091a79aee9a454b513a294d580a29733c466df01c482166b64b07699a30ead2be37dc1fba7db2dd237f2aaee098cbb590bc4d835c8741e42fa370319b1c45be1e23a538fb716bae19e2ad4f854322e893b9b64d950b546aa20d66911f1e4da2e0ca6f6f730a19658ff307bccf94e612104d2b5a8082ea4c24181ab9389f0751703e3b9a22435fd1c50e21c9e8e7d32b217a5ceb94957e92791406b3efdac00e7145f35a4336ed0b813b5c11c1a575087fb56fbd24dbed2f64e13ab61dc9e5c20f6f487b14629e1594ecebfb44b02e7cf957ed561cb1b8e42823157ee3f630d988b00ada2de24563e699ed59b6dbef110daed487dac0b17771353d9a8e5040a99e276a571c076dc56af902c2225efe4c27b7fd0f8fbdeecb62040000",
    ],
    [
      "ETag",
      "ZZC0Rzg6YdYJuiC4DJcFWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "0c",
      "80",
      "ff4bfd28331c2fea96f00144a3c9e2cb948831841ca31bc36d9d771d842cfbeff6865feedaded3f6c935f093955b086093a5bf359ad3458afce682086d9db395aba2d222f40059a74266bedf5f1e38fadc0dfdd13cf4bf2ee77a994e2642d878878586a08124c37c6b21f86ea0d4054adb7a6dba8982f1a9729587f065fa2169415b973e2fc2703a0befa15db53dd8d326c2040d9631ba8195a13dc6fce45cad2eaa1c3d4bb589d14207770fa9a1bad286c8938aa7469eba1eaa815237b7fdb1f205cc29d69c5129ece21d640d13eb3ca2a3a88212c074a15827dd7990f260ec5fa981b35afdf3b313a37d3524cb2dbabdfdb3c31d392f165f3635f620d6f21f8f199ff3f60f92541c3d6c010000",
    ],
    [
      "ETag",
      "i990XvtRWh394DL9Y+DaXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "dd",
      "72",
      "43",
      "40",
      "0040e177d9eb304309dbbbb5a4ca924156353746d9a62c2211bf9dbe7b337d8de67b817375be4196e7acefd3db99b3163c832593a1988b6ea71be674729b00da98c858caa275ad39571cbc9be671d2fb02923a2c04a60e08b9884784748adda89a2e536b6db746181dc8f153a328e32f51e3258d59d12ac7633521f972ae04671a69ecdbc17ba99aa1a4725f885e4b99c6434d86cca65eaf71f275bac7f69e2f49613d0414cf718f9087edd93bb80934865ae3c98ef8f6d1f9e816a860f7a8965e83df942db95852508da1a9b70edb27ad69f15c2bacbdf8f0f07f810d6073575e599f96f7db9f540837e06ffdf4b674ecfebfc1b22bbb829f5f1f877b3819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-15-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b91f795b6491fb4a9548daa0da3529bb224058d698aece42633a471881d1042fdefbb76280321c1a7d8bee7dc73ee23cfe48e97299912c6f3fb06eaa76fb7829113028ae6f87a775eeeaac5fafc86055797d1c47e4c97e14d3e9b21826b96a4fbaa808e144d9d809ceec26e5e8ba6a2b5101d4cd471461de774e0f41d673cb1478e8b3c0945b6e6e51db2ff2a55c969af77d4eee642e405d08acb6e22f6afefbd877eafaac52d244af6de4bf65045f63e17fd5e88842a2ecad92e44038d843a863de5055af8cf4cd9d9fbd45d4ef7dd1cc10f3c019a24a22995b685291251663c6f6a93954c9f89b1f9e640426fed2d222b1145b32fe392eee1c44aa9a2b17aaac03a0fb61b6be59f6f83cd3c5a6dfd385c5c789b7977b15def367e685d5f78816729ca0a305c6b669d999b8f17d44f412a5e1af5483f6be59706ad3e8e4513505a421b8cc7f6297526b6cb32364eb2c960c4321b189bb0f1880e989db84318a60c28f28ca861d1529490b829632c8b5d6744e3610a764c61e8c483c164ec0efbe3be9b66e470421e6bae60c96525246f3b44ae8355e4c551b0f317f3c8332564b429d4b235a60b78eb51618108faa4a6838e72814abadd2b3ff282f9225a5d79ed84d790d3e429bcc71967b49080685a63f314d41b9162c3883fdf784b049b895d1e83924c7f3f13dd73ede24dcb5fe9110e50db55e64bc22858f93f8c9d23e28a168d813cb4075d46c60b6dfaf00781b8a36d12f273e705bf48fb1440063594c9d7c344b0097cf9ab1df71eb1b8f9282315de717512a945921ada15e2a6da17f6c4eef75df3a32a5aab0fb1a1ed1e9ba673e88cb08752bd54d4ee3d16da8a35f21584419cbe6f9a75f8073be293",
      "a677040000",
    ],
    [
      "ETag",
      "kFnUpCLFZbRVPT80wdDSZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "616fda301086ff8bf73568a414da45ea07d8d816298502a9d46aaa22d7be64ee1c5fb01d2684f8ef3ba71d9bd649e997e4eefc9c72f7facd81fd5046b2843daa6adb82ddbfabc0af42b006d76aefe8d5a071c022069e57448ef2fcfd6ab9dade0fdb7b7997c2d9763bbb5b5d5d11e1c477a8394b0eac54a0a563c9b70333bc066a13a8dbda145d1631bf6f427193afd3c517ca6b94215fdc66d97496cdd9313a354aee79d1f16f687b3846ec091fd75082052320ccd2587c02e1d3b0a6e375a361e0b0b5021cebe0eea0b2d836dc220ea83288c78378328acfe2f8e272388e3f10a85170afd0107bbba1f99847cff51a7fd2962c1e1161bb98362ebbe78eea4a769b84305de493f36ec0bf012e04b6c617bd60a9acf3cfeafd065f54f897d4fc8d205d95d27d50054682eda3545370292d38d74ba22b78d39cb0d97299bd56c5488b4af6833bd50368bf3b019fb3e5f47fd292c1fe68f5699acf5f11ce936d4e489e5ecf37f9f4fa26700f2f4698ed3db81b8be42a07c150f1f0fc727c31193e7bec2306dfd177126f5b8898e0f4ab7c559e2525d70e8ebf00e85dc06688030000",
    ],
    [
      "ETag",
      "3TT/QOQqY0uYdXIe2qqBXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `ios_app` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-16-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f6abb6504a0b4d1a6d2aae24b555a09addcda61da617762a659019dc35a6ff7d2f83f511134d4880b9e7dc73ee639ec81d2f366444129eddd7503d7edb8a841c115034c3d3e53618b0c1f5e25c4e6bfeb398dc99e2ec221b8f11c11b96a4bb32876329ea8a811c2da34e5689baa49510c798e8d81ae0635b3dcb1abaa66379c89390a7335edc21fb8f52a51c75bb07ed4e264496032db9ec30b17b39ef3ef4ba6525b6c094ecbe97eca28aec7e2e7a920b461517c57819a1815a42b5821de5395a78656e92d3f7a93b9cee3a19821f3803ca98a80bd5d8c2144c1429cfea4a6725a327a26dbef920913ff3a7b1b1e642ae6859ae0d2a8dd5aa0259e7ca380f1797c61a2b4a790e726ddc5ef8a16f186b6d6a6d8c8d1363165c06b161a1d606a4e285568a699243a3f2dc8ce0e3081a025554421b5c0dcd01b55cd34bd264c852d77692d484247193a143edc4645e1ffa9b0428f254935db368210acfb6fb30187aced0f4ccbecd06eed0b5bcd4ed39d6c6ea3bcc32ed9eeb3a16d91f91bf155770c66529246f3b426ec320f65771b89c4f27b1afcb4829d67ed69a6b8a78eb53619108faa4ae7d13e502959af606f3d80f27d338b8f1db89ce20a3ec31bac799a6349780685ad11d28a82ec5069b46ae165110078bf964860c3da6ab034292d1afa75742fc58ea2e2bfd26511c06f3efdac0017143f35a431eda0f025b5c13c1a5790affb46fbd28fbfd6f64e14ab619c9f5d20f7f90f62884142a28d8d7f344b00e7c79b30e6bdedcdba891910aff717b986c445805ed16f15d63e699ede21cad3ed1",
      "e04a7d88d976efd0ae264793117650a8e78ada35c7425bb15abe803088c39febceedff032b9e4ad666040000",
    ],
    [
      "ETag",
      "UjI6c6QOFsCuiZnAk0oDHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6bc2301086ffcbede3148c639b16fc6037c141a75b871f6488a4e9595bdb5e975c2722fdefbbd441482e6f9ebbf7255738e5750a012479f6d3a2bddc65c89fbe88d1b5253b391aaa1dc200907526e4e9bc5c9af1fd641a9f92e2b5d81ee3f754cd6733219c3962a521b8c221c73275107c5fa1d6154adb7e6ffb8982f1a5f14ab85e478bf94a848a522fac3651340fa30574bb6e000525311ed0626dd08f6c2c1568f8cda775ba6a4a1c3a6aad41073ddc3f6496da465ba2a12843f524eb418d957a9e8c1ed554c0928ce69c6a61375f20364caccb98ce12169400b62f25f7a1df7f4566dba2cfb4fba7c30ba3fbb024d60ebdebe896e0857c2a96b4be630046cb7f2c73beddbb3f1390f6826c010000",
    ],
    [
      "ETag",
      "kwHHc2+89RkbjDjYhRMd1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd34b7282300000d0bb64ad0e428dd01d414a0b0308848f6c321843f8143f0147d0e9ddebf41af5dde13d404129eb7b329c5a7604ef602a646d4117ce59459b5b6daa656af7eeb73f60bf8bcac05877ab8c7e92904fa36a918241dde142b9efdf7adff439bd4848bf6d45a044bc390d5a68e3c034421cd024a14d617581e70e51b8396c911b37a289688ebfcc7cc94d2f9aa361671fe730265b23e798c2db213b1931ac7229bf9a6d9bee64f861df917fe1ae7cd1467d59bad8b2c751da671eb9ca55aaa04c811426728273e1954e7c4df1ce92d964858a55ae6b7f6e578b9797ff0bcc001bcfb5603da99fdb9595a6cdc05f7d324c67f6fc8f582198003fbf8441f5e219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-17-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc87b6d1208242491a2354de81a29211d9054db3421630c730b9862d3a9aaf2df776d9aaedda4f609dbf79c7bcefde009ddb12a453394b0fcbea5cde3a75b9ea0334425cee195ac0ee1cd756b5d3136b4bf8f2ee4a1ac2ff2f91c104cb1042eeb82f6046f1b42c56c1ff6f386b7356e38ef41a29ee5f6acb16d0d2dcb9d98236b0a3c418b6cc3aa3b60ff92b216b3c1e0a4ddcf39cf0b8a6b26fa84972fef8387e1a06ef82d25520cde4a0e40450cde17fd5c708225e3d57c1f828156d026a625660558f8cb4c93f3b7a9fb0c97fd1cc00f8c504c086f2ba96c410ac2ab8ce56da3b3a2d913d2365f1d50e86dbc6564105eb4651557b8a467468a258ee5634d8dcb60b735d6fee52ed82ea2f5ce8fc3e595b75df497bbcd7eeb87c6cd95177886c4494135d7981be7fae6c305f4532a24abb47aa49e95f27383d6ff8f4511405ad02e18bbe6185b13739a64894bb2893d4a329326c9247147d84e4c3275a8932614034f8b6a16ae783524d9145a91c6d968e8c68ee58ce3a96939719a8eddc4998c5c4c6d743c43bf1b26e98a899a0bd67508dd04ebc88ba360ef2f1791a74bc8705bc855674c15f0daa3840201f44e4d4715651c9454bbd77ee4058b65b43e78dd843734c7e431bc871967b81014d0b881e649da6c790a0d43fe62ebad00ac27767d0a0a34fbf18454cf958b572d7fa14730406557ea2f0aa360ed7fd1764e88032e5a0d79e80eaa8c8c15caf4f127006147bb24e8ebde0bbea1ee29a0196d68453e1e268075e0c35fedb4f78085cd071921e10eab438412210ded5688e96a9fd913d39eda16d2e046fe1b73ccb17d6a9acaa132d29256f2b9a26eefa1d04eac15",
      "2f2008c2f47dddace31f6a008d3077040000",
    ],
    [
      "ETag",
      "cDVSWPu1Hii23Z5BtVmpBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bf8bf7b8546b06b410898774eb58a7d0421a1ed88422635f3217c7176ca75555f5bb7309ac4363527849eecebf53eefefe67c71e94912c62f7aa7c6cc06e3f94e0afdb2005d768efe855a371c002069e9744a68bc78f9bd5fce26795fc58e15979fbe921de5c9f9f13e1c46fa8388b76ac50a0a563d1af1d33bc026a13a89bcae45d1630bfaddbe2324b67f30bca2b946d3ebf499278924cd93e38344aee79def1ef68bbdb076c85f7291460c1086867a92dae40f859bba6e355ad61e0b0b1021cebe0eea0b4d8d4dc220ea83208c7837074147e0ec3f1e9f0243c2350a3e05ea121f66649f3318f9eeb1437b4250b8f88b05d4c1b17dd734d7525bb4dda7036cf46c7dd80af012e0436c6e7bd60a1acf3cfeafd015f54f897d4fc9d205d95d27d50094682eda3549d73292d38d74ba2cb795d1fb0c96291bc55c5488b4af6836bd50368bf3e00df9245fc3f69c9607fb5fa1a67d33784f3649b0392cd2ea7cb2cbebc6ab9bb17234cb61edc9545729583d650e1f0f8f4643c1a3e7bec0bb6bea3ef44de361030c1e957f9ae3c8b0aae1dec9f003d554e0088030000",
    ],
    [
      "ETag",
      "ROq+wjNGZmLJjo9gY/kAwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `date` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-18-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da04287940a4a8ed52ba31e5d112da6a9aa6c43617ea16708a4db6aeca7fdf059a3e36a9fd84f13de79e731f7e2477a288c9883091de57503e7cba958c1c10d034c55b33fcb39d87b3fbb3c9f537bfbac92ff8e2f3241d8f11216a96a2f926838e9255c9418d2e97ddb494d5869652763051c7763bf6c0b10f6d7be85a7ddb439e822c998ae20ed9375a6fd4c834f7dadd54ca3403ba11aacb65fe7c6f6e0fcd4d296f816b65be9534514599ef8b1e6592532d6431be5ca2814a41b9829c8a0c2dbc306376fc367557d0bc9b22782b3850ce6555e8da16a6e0b248445a954d56327a248dcd5707b2f4a7fe2432d631d5b036a83256ab12549569e32c5ccc8c359693880cd4dab8feea87be61ac1b476b636c1c19d3601644868d4231282d8a4626a22c835ae2a913c1fffdaf095453056d7035b406d4762d8f256cc813d7e9b3c402c65c36ec538759dceb412f664091a7ebec0d8b16b27012e73076bc38f68051de638e1dd341420731f7a0c7e8c086fe90b1a1477607e45729349c0ab5914ab4ed20d76110f9ab28bc9c4f4e22bf2923a158fb696bae2ee2b54f8d4522e89dba7675544854aa7b1bcc233f3c9944c195df8e730a29e50fcb7b1c6842330588a625cd4143399331368d9c2f9641142ce627536434333adf231419fd787c21440f9ba6cbbaf992651406f32f8d813de28a665503d9b60702b7b8235228eb187e37be9b2dd9ed7e220bf7b1cd482e2efdf03b69af4248a084827f3c4f0437810f9fd57ec7118b5b8e324ae33f6e0f57b5082fa1dd2291",
      "d7669ed8aed573bd2169c0a5fe37d6b71c77dfae3a479d117228f45345ed8e63a1ad58a59e4118c4e1cf9bceedfe02827d8add63040000",
    ],
    [
      "ETag",
      "/RzvNRMqFCWJEuhmQcOBCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "6f83300c40ff8b770589b075fd907aa06ba56e42d5d6adda61aaaa94ba8c16304bcc1042fcf7397497c4769eeda77470cdca13cce098a53f359af62e457e73c1166d9db395aba2d2227880ac53211f3e999753de5c474db38e4bccaf2fe3369acf85b0c937161a661d9c33cc4f16665f1d94ba40693b1ccc3051306e2b5759461f2bc90a3ab96cb38be36811afa0dff71e5ce8b8c5331a2c1374f32a43174cf8d9a95a5d5439fa966a93a085011e1e524375a50d912f155f4d7cf578af42a5c69360a4a602e69468cea81476f70eb2868975bea5464c4109608650a4cfc3f92be53008033f08fd4039b3fd7fcfa265b4af8644c0a2db1ddc3c9ec8b9b138b3a9d18344cb97ac33bee5fd1ff763b06a6f010000",
    ],
    [
      "ETag",
      "4WttD9tNk5wwHLnelkJ7yA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd3516e82300000d0bbf45b0c0359617f02120d885501911f529b5a8a8840094297dd7d66d798ef0eef1b6042a81079ffb8d11a7c81096bd69cccfdc6b4dd67391eca3e9c56a88b0fd670530dd6975b179a2272210cab052317b51aa8e36a857cae147de71c2b86a2449e126542be08075f200c1945ad63347299eacfc52ebcdf3db98caff5c9c0fefebccf9ce25699d1f682f6ed076e3c8d18417df5579c9dc742b5cb472e95563fadd5c1e28119334fda30d56abccec7cda60d4c43e93924096310f3cfb55aa49948e35d6492811f2753cbf2c2abd13dcb82464ec9fcededff023340c7867754e4fcb55d372c6b06feeae7fdd4d0d77f9be28e76e0e717c133e0df19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-19-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbda3c08794bd19a2574454bc84a48ab699a90712ecc2de0149b6c5194ffbe6bd374ad2ab59fb07dcfb9e7dc0747f2c08b2d199398a78f1594874ff722261704144df1b5cfbe38b05d7496f36f9dfde16606b9f717a6930922b866499aef32684851950ce478b36ea6a5a876b414a281891af6a861f71dbb63db8361bb678f9027214b16bc7840f66fa57672dc6a9db59ba910690674c7659389fcf9bdb5efb476a5b807a664ebb5640b5564eb7dd1cf99605471514c366b3450492823c829cfd0c27fe636be7c9dbac969de4c11bce70c2863a22a94b685299828129e56a5c94ac647626cbe3890b5bb7067a1c54456e54554d01c2eac2d553452871d5857c16a6979fed52a584e436fe547ebd9b5bb9c3667abc566e9afadbb6b37702d45e30c0cd79a5897e6e6e305f5b720152f8c7aa89fb5f25383bcb763d10494965007a341bb4fed617b1427f1802543a717276d88e3613ce851276eb35117badb1828f28ca861d14214f66094f4fa09440e381075074e3fa2cca651b7178f3a8c75019c849c2ec89f922b9873b91392d71d22778117ba51186cfcd934744d0909ad3235af8de9025e7a54582082dea9e9a4a35ca0926eb7e7876e309d85dead5b4f7801296587f523ce38a1990444d3129ba7a05c8a2d368cf8d3a53b47b099d8f7735092f1cf23d13dd72e5eb4fc991ee200b55d65be641d069effd5d839236e695619c8be3ee832129e69d3a75f08c41dad93909b8d1bfc20f55300099450b08f87896013f8f0573bef3d6271f351462abce3ea30a9455809f50a7153ed137bd8eeb79d2131e052bd89d9ddeeb9693a87ce083914eaa9a27aefb1d05aac92cf200ce2f47dd3acd3",
      "3ff3fcde6d77040000",
    ],
    [
      "ETag",
      "6cB3edL2MDK2vyQCemIxeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c7bf8bf7b8546a462910898774edb66aa1654d789a5064ec4b6670ecccbe14aaaadf7de7c0ba694c0a2fc9ddf977cadddfffecd983329225ec4ed53f3b70bb7735e0b7106cc0771a3dbd5a6b3cb08801f29ac8c904e7d9aa489fbe8e4ddea1cfdf3fa8f9e3e525115efc8086b364cf2a055a7a967cdf33c31ba0366175d798b2cf2286bb3614f362b35c7da6bcb132e4ab9b2c4b67d9821da263a3e4c8cb9e7f43dbed2162f7f66e0315383002c22cadb3f7207019d6f4bc69358cbced9c00cf7ab83fa89ded5aeeac1d5165145f8ce2e949fc218ecfcec7a7f10581da0a8eca1a626f729a8fa145ae37f691b664f10911ae8f69e3aa7f6ea9ae64bf490897ab623ae907fc1be042d8ce60390856ca797c56ef37f8a2c2bfa4e66f04e9aa941e826a3012dc10a5da924be9c0fb41d2fa92b7ed119badd7d96b558c7456c96170ab06008ddb23f0295ba7ff93960cf647ab795a2c5e111ec93647a4585e2df222bdba0edced8b11663b047fed2cb9ca4330543c9e9c9f9e4dc7cf1efb6883efe83b09ba0e222638fd2a5f14b2a4e2dac3e117dc7230ee88030000",
    ],
    [
      "ETag",
      "44tDLNTAxK0nSutsS+kiDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT `stamp` as __result FROM `profiles` WHERE  `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-20-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6fda4010fc2bd6f56bc00f1e3648284189dbb8e2911893a8aa2a389fd7ee25c6477c676814f1dfbb3e873c1429f984753bb333bb3b3c917b5e246448629e3d54503e7ebb13313921a06886af3fedc1fcdadcdbcbfbe9bed807567a997bddf16884085eb324dd6c73684951950ce470b96867a5a8b6b414a2858d5a8ed5b2fb1ddbb16dd7b37af6007912f274c28b7b64ff556a2b87a679d46e67426439d02d976d26362fefe6ce31b7a5b803a6a4f95ed24415697e2e7a9a0b461517c568b94003958472051bca73b4f0ca4ce2b3f7addb9c6eda1982779c01654c5485aa6d610b268a946755a9bb92e113d136df7c90853ff1cf23632d15f65c1b541aab5509b2ca95f13d9c4f8d35ce93f21ce4dab8bdf443df30d6dad2da1819a7c62498069161a3520252f142eb4434cea1d6785e45f0f10035812a2aa129ae5cab4f6dcf1ac469ecb2d4ebf4e2d48238f662b7473bb1c5065de8263150e4a9babb66d14214605327b17a96dbb5a0dff53a5e1f1cdbf162e8c4ae35489d84b94e2f6536399c907dc9155c70b9159237fb20b76110f9ab285ccecec791afc74829ce7ed198ab8778eb53e19008fa64ae435de50295eae506b3c80fc7e75170e337f79c4046d9e3e2012f9ad25c02a2694937a0a09c8a049746aee68b200ae6b3f10419fa4857478424c3df4faf84e871abb7acf42f59446130fba10d1c113734af3464d77c10b8c390082ead33f8a77deb981c0e7f9085816c3a92eba51ffe22cd5308299450b0afef89605df8f27f750c396231e62883d1531cd3c3642dc24a6852c437b59967b667b9b6d3271a5caa0f35a73b38aeabee5177840d14ea79a226e438682356c9171016f1f833bdb9c37f2320277c64040000",
    ],
    [
      "ETag",
      "J19OQ/w1UkMwnwI0fHl84A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "6e82401086df657a2b8d4b8b16122fb0c16a82064f578d312b0c140b0cdd5d6c8cf1dd3b8bbdd9c3bfdfcc7cd91b7c974d06019ccae2a743757d2ad0aced6183baab8ce6ada546230c008d2c98fc985d56f3991b76b21eafdb8b1eb9894e8ac984099d7e612d21b8415e629569083e6fd0c81ab9ec78547d47c6ccb5b5c96eb18cb6bb709970545366a3d53e8ec3691cc1fd701fc0994e1bcc516193a26dda2a3a636a16d657cbbaadd0d1d4a91435f470ff5028ea5aa9881c4e1c77e888d18b708518bf0d3de13358512a4d490db3fb2df0184346561bfa655d100ca8fec8e679bf5e6cfcec71b9e70bff35f2addce1bf6c7a35a81345eca0d18e1f3e54dec9ea19d636aac301a492bf665e9ac7fdfe07235c5df277010000",
    ],
    [
      "ETag",
      "GFvNHF2Auam7Qpvs62PsPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ffedd35d6e82300000e0bbf459085445d91b15470444ea8c625f1a7eaa200aa5ed0664d9dd67768df9dde1fb06699e3329a96a6bd6803730a6d0d6733de04be4f6a5f150c30c32c694839dc32a72e71b032fc467569da00fdb8e23522f9c25aa7b2a2e5a10c124640216f4b6bccdada4f7a66a9611ad246dc0f734aeccf480e2937fc4f786ba5e5810f231e0b073f3774badcdeea2e5c733e9b9929ed8ca828c72b13aef8224bebab2189593268f284338dc0e17cfc34db7f1ad006b468c3abee3e117455a1ba67793fafded6a2a68dcf359708d35580f49998dcdfa84a0fef2f27f81096003af0493b47a6e9fce6d7b02feea533572f6fc8f582a98003fbf758e091a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-21-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "5c93402181468ad62ca51b5b4237425a6dd3848cb950b704536c5a5555fefb2ea6e95a556a9fb07dcfb9e7dc0f1ec835af323225292f6e5a68ee3f5c89941c1050b4c057b1f91c9ca6a573a702d7fc7ef9710bbfbf1577b3192278c792745b973090a26d18c8e9663d2c1ad1d6b4116280890687d6c09ad8d6a165b99e39b68e9027a1cc97bcba46f6a552b59c8e467bed6121445102adb91c32b17d7a1fdd1e8eea465c015372f45272842a72f4b6e8a75230aab8a8669b351a682534096c292fd1c27f66961ebf4c3de4743b2c107ccb1950c6445ba9ce16a660a2ca79d1363a2b993e106df3d981acfda5bf880d26ca765b2515ddc28191514513755f83711a9dad8c203c3d8b56f338380b93f5e2abbf9a0f1767cbcd2a5c1b175ffdc837144d4bd05c63661ceb5b8817d4cf402a5e69f5b87bee941f1b14bc1e4b474069097d3071cd09b53cf328cd5397e59e3d4e7313d2d44bdd31b553931d39e0642950e46951cda295a8acccc93d17ccc4a2139638cec44d284cf2c4a3b60313dbcec6a64d7607e4aee10a4eb8ac85e47d87c84514c47e12479b70318f7d5d424edb529df4c6ba029e7b54582082dea869d745b940a5aedd4118fbd17c1107e77e3fe1251494ddaf6f70c6392d25209a36d83c05cd4a64d83012ce57fe0982f5c47eec83924cff3c90aee79d8b672d7fa2c738c0ceaed25fb28ea320fca2edec11e7b46c35e4b63f901a2d5f626de87af71791b8a47d16f273e347bf48ff14410e0d54ecfd69225807defdd7f68b8f585c7d94910aefb83b4c7622ac817e",
      "87b82ef791ed99aeebd844831bf52ae6d9f6be6b5d8e2e236ca1528f15f58b8f85f662ad7c026110c71fea6eedfe012ce4d49c78040000",
    ],
    [
      "ETag",
      "oUBIFbl4wtI70Kh+meZJgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "cbe92b6e62a6c4e6072c2b3634436cb5e6dc150e880197eebda4cef9df3b97cc5ab5d51738e7f09ccbfbbeb083e7b488c086459abc5428b62709aa3b5df828ab4c49ba95bc900806a06209918e6515e634dd4423e761ad1ecbd6e45e6d9c5e8f08192e316760ef204e318b24d84f3b28588eb416f2acca8b79dd19a0b6a51e4e02df1d5d539ff348f7a3a9e7397d6f007be3b81831c5e635ff8fb5d9de80155ff818a3c02244ada5147c85a172b54dc9f232c386e4950851420dd70f12c1ab9209ce1b3469b4cc86d939355ba6d9b59a67e63981190f994a7941ec7442fa4071c5329fafc925740810754986e3fafa4ae334aa8de8d21d059d76adef2b40d2e234c3f9df20e95d32fa0c1fd82182ef1ccb7955a82375e5dd3abf1d47997e1e75e904831f845494d41109dce1601238c3b1e66607effdad4239169c8294a833349b6debacdb69bec77ac175d4f41e5b890a0d0819fd1d37a9023b6699c4fd1bdca2a8bc7b020000",
    ],
    [
      "ETag",
      "A88n1UixdNAXwtYp2SVtxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-22-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b4fa34014fe2b64f64513db425b286dd2b84d65956c6d5d4a35ee66d30e70c051607066a86b4cfffb1ec07a89893e01e77c9773e389dcb13c222312b0e4be04f1f8ed9607e48880a209467f9e72efba976d4126fcb7faa75f2f1667e6c3788c0856b124cd8a145a92972204395a2ddb89e0654105e72d146a75bb2dc3ea195dc318d8ba690c9127218d672cbf43f68d52851c753a7bef76c27992022d986c873c7b8977b6dd4e21f82d844a76de5b76d045763e373d4e794815e3f978b5c4024a09620d19652996f0ca8c82efefa5db8c66ed04c15b16020d435ee6aa2a0b25429ec72c2945ad4a464fa42ef3cd0b593a3367ea6bd3c564e62ca7cec1e4f2f46043b34a637378a4e9871a95da7a2d4096a9d27e788b736d53a0ed0d952037dad599e3391a86048f590a6b166db4b176accddc73d7d70c2c2102a9585e17e0d32085cafc7946eec7cd5404aa50bb49ae07ba450d5b1f0671300863bb6706b10e4160070393f6023d1cf6a11f054091a72af59a45739e9bc31e5871df00db8c874134b07bd4d4877a68eb9689717310599111d11ed91d9107c1149c305970c99a41912bcff59db5efade6d389efd46dc4142770d2145735f1b64e854d22e893be7655967174aaa6eece7dc79b4c7df7d269163d8384868fcb7b5c754c530988a68266a0409cf30887462e164bd77717f3c90c19f5f62ef60849467f9e5e09fe63514f59d5cfcacbead7fe7bc0254dcb1ab16d5e884176bbbf88c0a36cc8e4d7caf1ae4913f220060179f8f5ea105c27befcb7f6878e583c75b4910abff15042599984029a8361595d5ec3b675bb6f0f480d16ea43ced2adfd642a8d4a1132c8d57347cda163a38d59295f4098c43dcfddf92966ff03c1f17b2968040000",
    ],
    [
      "ETag",
      "KGoRY3mvesgoZtx0YOOH5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d906d6f82400c80ff4bf75516816d3a123fc8e65e12e236d425db62cc09e54581b2bb434308ff7d3ddc97bbb6f7b47d721d1cf32a060ff679fadba06caf52d41f2608513585567cd554298411a01629938f8bd3f3b471dc6cb976bf3e313bfa37c9f77936634245199602bc0e921c8b5881f7d341254ae4b6dd4e0e1319d36d6d2a4fc1db7ccd6949b149979b2098fbc102fa6d3f8203ed434c506215a119584b3a60a45f8dab12655da0a5a891112a18e0e12195d4d44212595cb11cc7b2ef5cdbb1edc9747c6bdf33585024744e15b39b15f01a4d5a14219d59156c06e410b275329c2753be9eb8c669fb4ffbad46f52e89572b345bc717830732569a6db56c700491e0df78c9f525efff00a7de70e56a010000",
    ],
    [
      "ETag",
      "DEvG8u23hNT3YVehkB4fZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "02ffedd34b7282300000d0bb64ad8cd268a5cb002285a245e4e326134280802285c8afd3bbd7e935eabbc3fb068452d6b658dc4a56813730125991a864d51ba4f53cc49b54deeec56573121d97b3ce81700975f76c6d2b58a5a9ae8f96d77be8ec5e912f623aaa9a63072d290ffb8576d9856aa6d275488271b86392b8c5346f8335bc7665f75a0cbedbe71aa693f00a6e1a41a1fb0e573d39b6223eda19c9f26adf8ae8763f4c277b3d2c271a1bf3a1740ccf3bca878f26fb5af8efa2222b3f29b119a15d42608a4cc12214d49fee1d1a0465428973dd2e6283c549cdceaaf4f4f47f81196043cd1bd662fed8feb2529419f8ab8fc558b3c77fc448c31af0f30b901f0bfb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-23-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6fa24014fd2b64f6b52a88556b62b646e99644718ba8d9dd6cc8305ce8b4c0506668631afffb5e86da6dd3a47d6266ee39f79cfbc133b9e7454c2624e2e9430dd5e1db9d88c8190145537c9ded68ba90de6ccf0eb1ca6e7eef77fe1a9ea65344f08625695e66d091a2ae18c8c976d34d2b5197b412a283893a7dbb630d6dab6f59a3b1796e5d204f42962c79718fec5ba54a39e9f54edadd548834035a72d965227f7def3df67b6525ee8029d97b2fd94315d9fb5cf47b2618555c14d3ed060dd412aa1072ca33b4f09f194797ef537739cdbb29821f3903ca98a80bd5d8c2144c14094feb4a67259367a26dbe39908db374e681c14456e74558d01cce8c982a1aaa4309c695bf5e19ae77b5f657b3c05d7be1667eedac66ddf97ab95d791b637fedf88ea1689481e61a53e352df3cbca07e0c52f142ab07cd73a3fcd220f7e3581a024a4b6883e1c81c526b6c5e44493462c9d83e8f1213a2681c8dcea91d99ec62008338028a3c2daa59b410c568088321d07e485944c341149b218d2dbc8ec11e24c3be6d278c1ccfc853c5152cb82c85e46d87c8de7703270cfcad379f058e2e21a175a616adb1a680b71e151688a04f6a3a36512e50a969b7eb058e3f9b07eece6927bc8494b2c3e601679cd04c02a26985cd5350ad448c0d23de6ce52c10ac27f6f3149464f2e799343d6f5cbc69f92b3dc001367695fe924de0bbde0f6de784d8d1acd690c7f6404ab47c8bb5a1ebe35f44e292b659c8cdd6f17f91f6c987042a28d8d7d344b00e7cf9af9d161fb1b8fa282315de7177986c445805ed0e715dee0b1b37c31a9844832bf521d6b7cd53d79a1c4d46c8a1502f15b58b8f85b662b57c056110c7efe96e1dff014a00ca3e78040000",
    ],
    [
      "ETag",
      "AVagDsNAWcydtlQZWVROew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401045ff657c2d492b5ab4090fa08824880805638c214b3b85c5b65377b72a21fcbbb315d1a889beb433d333db7b6fbb814799c710c05c2e9e4a54eb83059a1b5b8c5097a9d17c2b28d7080ea0110b26a3ee346977e3db21bede925b979ebc93d39b6693091d2d3113106c209198c61a82fb0de42243bb466999e5b3aa73c0ac0b3b1c87a3dea0cb7d46b1ed07937ebfd5ee7760ebec176361c4ace2ffb1f6b0756045f31126a8308fd06a2914ad30323d6b538bac48b1a6a954116aa8e0eac1425159084554e349edb05ef3fcba77e8798d13f7d83b6530a548184939b39331eb034346a4237a6197e033a0aa920d27d5f599c732ae8cd8b23708fda34adf5780a52532c5d9df20eb5d0afe0c1fd82e82ef9cc8a8cccd9ebae85fb77e3b8e33fd3ceabc15767e10da70527b24ec5d75c661eb6a68b9879df7f6daa01e2ae22035da0c3df7e8e4b8e1bbefb19e918d9adf131855a20391e0bfe3521a0812916adcbe016679e7ae7b020000",
    ],
    [
      "ETag",
      "cGVfBGdWPexWo03i1iYiVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-24-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f",
      "9b",
      "40",
      "10",
      "fe",
      "2b",
      "68fbd24ab10df8c058b252cba12dad8fd4c689aaaab29765209b024b7697446ee4ffde01e21cad943c793df31d73714f7ef33c222312f2e4a604b97f772d42724240d304a377fd49df99175db7bb1f7e73d67fce40de7c4dc66344f08aa56856a4d052a2940cd468b36e275294059542b450a865f75ad6a06bd996e50ccdbee5224f411acf78fe1bd9575a176ad4e91cbddb8910490ab4e0aacd44f618efdcda9d428a6b605a755e5a76d045755e373d4d05a39a8b7cbc596301a502b9858cf2144b786246e1c797d26d4eb37682e05bce803226ca5c5765a1041379cc9352d6aa64744fea329f3dc8da9b79d3c0982e378be0fd8e661579f7c1a0cad86e25a832d5c6a7d5726eec0af4baa20ad4ceb8fce2ad3c034352c43c852d8f76c6d8383566fedc0f0c0b7d23509ae7b56b40c3142ac787c1f8ffafa322508dda4d72eb98036a0d4d378c4387c5c36e3f8c4d08c361e8f469373499db835e1402459eaed46b16cd451edacc1cb8b61901b028742c9bd2900d6cb74f631b5fee20ee99bdaed52787137227b98633ae0aa178331d72b9f2036f1bac368be924f0ea36628a13386b8aab9a785ea7c62611f44a5f872acb053a55a3f61781b79a4c03ffc26bb63b8384b2fdfa06f71bd35401a2a9a41968907311e1d0c8f972ed07fe72319921a35ed9f911a1c8e8e7fd1321d817f59475fd5b790d7ab5ff117041d3b246dc360f6291c3e11722f0121b32f9bef1563f48135a410c1272f6f6ea105c27defca08ed78d58bc6fb4511affe3a13055993009cdc1f0ac2eaf61e319b8ae4d6ab0d4ffe42cd3b27bc7c9541a95226490eb878e",
      "9aebc6461bb3523d8230897b5ef88bcf98fd0b66c622115d040000",
    ],
    [
      "ETag",
      "w5A57Mp393y8K7SzDerqJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "df657a0b896b5b6b4dbc50435a1b824aeb5563cc0a03c50243f7474b08efde59eccdceecd96fe79c4c07df459dc20c4e45fe6351b577399a9d6b62d4b6349a4b43b546f0008dcc999495dc6ea2d5ef5b7add048b699367f612ece6732674f28595845907598165aa61f6d9412d2be46fc7a31a263266dac629ebe823780962162a4a9d10edc370b10c03e80fbd07673ac598a1c23a4137b25174c6c4ac5d5a2daba6445f9355096a18e0e12157641ba9887c56fcf1832f26f7622cc4d374f4289e192c2991a6a09ad9fd3bb08d2123cb98ae1c1604036a683977369c1796272ed0e11f5db606f55611fb6a7496a39bfd8a5c24c3518db2e841227919af85b9ddfb3f519b383f69010000",
    ],
    [
      "ETag",
      "amaPONCxJdwOEA8pgfuvEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000002ffedd3597282301800e0bbe4599d298b357d331294a2457185970c859f252ac64464717af73abd46fdeef03d5014c7a014bb5d8e50a20fd4461a1ec403578c8855f3f1ce08e7d7646dfb7ead3c7b06892cc292eff6ecbbafec1a3e876980f719052f9e1aa678772e5b39f5965962b973115f9cb1d0e3a165e402fb6bc73382f2ec0472ef2d726dac6d56c3727360d51c483e535ff91d9a82427a2e5846574d956616af5a19729b24fd94b45554d063a62ccd0c26fee66e1ea51e845da095a5ebf383ed74982ef5289f74a3fc8d2e6c559f18a3dc00c2d98924aedf8cf0d5d90e5e5efe2fd443d088428262c573bb6e62dc437ff5d9ad15f0fc4f209220d1cf2fada0d9aa19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-25-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbda04c80b1a295ab394b69912b20269374d13b21d9bba259862d329aaf2df77314d97aa52fb09dbf79c7bce7df08c1e44b141634444f658b36af7e55e12748298c619bc3a09deddfee43b7e17dadf8797be3f8bbe5d5e4f2680100d4be16d99b38e927545991aafe36e56c9bac495941d48d4e90d3beea8eff65cd7f39da17b0a3cc572be10c503b0efb42ed5d8b60fdadd4cca2c67b814aa4be5f6f5dd7eead96525ef19d5ca7e2b69838ab23f16fd9a4b8ab590c5641d83815ab12a655b2c72b0f09fb921676f537705de7633003f09ca30a5b22e74630b5250597091d595c98ac6cfc8d83c3aa0385804b3c4a232afb7455ae02d3bb13658e354ef4a665d44aba5350f2f56d1729acc57611acfae82e5b43b5b2dd6cb30b66eaf8228b0342639335c6b629d995b0817d0df30a54561d493e6b9517e69d0fcfd581a02482bd60653cf1961d7774e09271ee57e7f48b8c308f18937c47de2d0d3011b6c08c3c033a286850b59900119d11ee7a9e3609a0eb04b528c1d9afad8e39b1e1bf6b8c7d1fe04fdad8466e742955289b643e8369a27419a44eb70364d025302c775aecf5b634d01c71e351408a00f6ada37512141a969f73c4c82683a4be637413be105cb30ddc58f30638e73c5008d2b689e66d5526ea061289c2e8373009b89fd3804151aff7e464dcf1b17472d7fa52730c0c6ae365f1427d13cbc34760e881b9cd706f2d41e500996efa03670bdff034858d2360bba5e07d12fd43e458cb38a15f4f36902d8043efdd70e8b0f58587d90511aeeb03b543522b462ed0e0953ee0bdb779d91ef2303aef4bb98e7f50f5d6b723419d99615faa5a276f1a1d056ac56af2008c2f843d3adfd3f787e867e78040000",
    ],
    [
      "ETag",
      "0TayWXfyfhN/J5G88CRBGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd6e82401085df657a292662152d8917f8d3d644ad22264d1b635618100596ee2e35c6f8ee9da5d6366d93f60666866f96730e1c61176701d8b08ea39702c5e12a4235d3858bb24894a45bce338960002a161139ab8fb3cacc7cda1cb6bdfeae5258fbc7be13753a44487f832903fb08618c4920c17e3e42c652a4359f27459aadcace0075c8f570eeb9c3c91df5290f743f598c464e7734809371590c9862ab92ffc7daf264c096af5d0c5160e6a3d6920bbe455f0db54dc9d23cc1aae485f0514209970f22c18b9c09ceab34a9d69b55d3ba36eba6d96ad79ae60d8109f7998a7946ec624efa4071c51297efc925580488b224c361797da5711c944674399c7856a3d4f7152069619ce0ea6f90f46e187d860fec1cc1778ea5bcc8d485ba1d3d38bf1d47997e1ed577bcc10f422a4aea8278c3f160ee39e3a9e69667efdd834239159c8294a833346b8d76b365d5de63ed711d35bdc756a240037c467fc77dacc00e5922f1f4064f3e5dea7b020000",
    ],
    [
      "ETag",
      "Q2Mn+Q1ZhyjCDk+u6wXDAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-26-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8553596f9b4010fe2b68fb92488901dbf892acd475684ae5233538695555f6ee32904d8025ec922a8dfcdf3b409c4391922760e63be6e281dc882c2423c2447c5b4271ffe95a32724440d318a3ee17f3a777b35caf6f9767e12cf7ffcdbf17e9643c4684a8588aa67902c74a960507355afbadb890654e0b298f51e8b8dd3bb67b1dbb6ddbfd81e5d843e42948a299c86e907da575ae46a6b9f76ec552c609d05ca81697e953dcbc6b9b7921af816b65beb634d14599ef9b9e2492532d64365efb5840a9a0d8404a4582253c3343f6f9b5744bd0b41523f84e70a09ccb32d3555928c1651689b82c6a55327a2075992f5e88efcedc69604c979399eb4fdd037f3d3fd8d2b4d2d81e1e19d6a14195b1d914a0ca441b5f57cbb9b1cdd1f68a2a505be3f29bbb720d0c153212096c44b835c6c68931f3e65e60d85842084a8bac2e20a02c81cafc7146dedbcd5404aa51bb496efa568fda036bc822d6e7d1a0e3b0c802c606acefd00eb3f8b00bdd9001459eaed46b16cd64e6380ca270d01df643e674babc4ddbd089186db3d0e14e8fb71974238090ec8ec8df426838152a974a348322972b2f7037c16abd984e02b76e23a23881d3a6b8aa8997756a6c1241eff4b5abb242a25335756f11b8abc934f02edc66d1338829bff76f71d5114d14209a1634050dc55c86383472bef4bdc05b2e263364d4db3bdf231419fd7e782604f7793d655d3f2baf5eb7f6df032e6852d688bbe685d864b7fb83083cca864c7eacddd52fd2845610410119ff787508ae131ffe5bfb43472c9e3ada288ddf78285c5526bc80e660445a97d7b007b6ddb52c52830bfd26e758ddfd642a8d4a1152c8f46347cda163a38d59a99e4098c43d2fbcc51966ff037035e00168040000",
    ],
    [
      "ETag",
      "EB/XIkOUUqOGdLpSzMJrmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d90df6f82301080ff97dbab6c205190c4075d5cb684fd90e9d3624c2d074381636d996386ff7d57dc4b7b77fdeeee4b2f702aea14223814f9578baabbc9d1ac6d90a06e4ba3f96aa8d6082340237226fde2d90de546adabd5e92e98fd6c8349f67b9ecf99d0f2132b01d105b202cb5443f471815a54c86dfbbd1a263266bac6561ee2d7c586d38a529bbe6ce378b18c57d0effa111ce99060860a6b897660a3e888d23c59572daaa6444753ab246a18e0e12157d4364211395c71c653c79bfaded8f382d09d7833064b92c2145433bb7d075e63c88832a133ab82c7801a42b6ce86f3db96dd5b3fb452bb7f7cd919d46f8a78b746bbd6bd2adc93d532ac6b548b239082bfe3b130d7bcff03101c47056b010000",
    ],
    [
      "ETag",
      "3iM08cTrQmEk/79xU75fzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000002ffedd35d7243400000e0bbec73644a56d0372a09a21269107931bad66f08bb8ad5e9dd9be9359aef0edf378811c29446fdbdc20d78052c1694255aee5b59d3c77c12d76a04a3f9536d6035d2b3bd9358d55abc97c2b93661561e5935f0e18a51c41909af197e09155c0a7454453e2b541be62e4cd77413b9f6d51311728bfb30eb9d0befd7d0e18c62c7e7c3079653dfe7b02238961cdaf9d01d836c9d34f8b035276f5f5f1c7dc0159ca099fbc9289527224bd58be110e31674ef9be9983a4adfa8764e58add1b2b42c9f7d35e17cee395125da368b0f17a1bba12978db2d9f9efe2fb000786a0b8269543cb6af44455980bffa51cf5afcf8afe19860027e7e0123ad5ce819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-27-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f795364dd3f42555a36ac3a846d291a6a06d9a22dbbd091e691c62078450fffb6e1cca4048f029b6ef39f79cfbc813b915c58e4c0913d95d0dd5e397bf929113029a66f8fa2b3bb7c7df354d2f838765114ceebcf876389fcd10211a96a2fb32878e9275c5414db79b6e56c9baa495941d4cd4e98f3aced075fa8e331af73c67823c05797a218a5b64df685daaa96d1fb5bb9994590eb414aacbe5fee5ddbeefdb6525ff02d7ca7e2b69a38ab23f16fd9a4b4eb590c56cbb4103b5822a813d15395af8cfdcb1d3b7a9bb82eebb1982ef0507cab9ac0bddd8c2145c16a9c8eaca6425d327626cbe3a908d7fe12f628bcbbcde174941f77062eda8a6897e2cc13a8bd681b50acfd651308f57eb30d92ccefd60de5dac2fb641b8b1aecffdc8b734653918ae35b34ecd2dc40beaef40695118f5b8796e949f1bb47a3f968680d20ada6032ea0da933ee4d58ca463c1dbb1e4b7bc0d8988d3ceab21e9f0c60b063409167440d8b16b2a04377e438ee20f1bc214b064e8f25141c9eb843d71bf4b8c746fd31399c90874a68580a554a25da0e91eb6815fb491c6dc3c53cf64d0929ad73bd6c8d3505bcf6a8b140047d50d3a1890a894a4dbb5761ec47f345bcbaf2db095f4046f9e3e60e679cd25c01a26985cdd3500572870d23e13cf097083613fb710c2a32fdfd449a9e372e5eb5fc851ee3001bbbda7cc9268e56e13763e788b8a2796d20f7ed819468f9066b43d7873f88c4256db390cbad1ffd24ed5304295450f0cfa7896013f8f45f3b2e3e6271f5514669bce3ee70d588f00ada1d12a6dc67f6d8719da1470cb8d2ef62ae333876adc9d164843d14fab9a276f1b1d056ac562f200ce2f843d3adc33f78b28ef778040000",
    ],
    [
      "ETag",
      "ZgH/8KtafQMwDnM9q5Tk6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4ec2401085df65bc2d91227f36e1021491088850121343c8b69d9662db29bb5b0d21bcbbb315d1a889deb433d36fb6e79c760fcf711680035e1c6d0b94bbb308f5832966a88a442bbee59429040b508b88c9427962eb293abf9f909ddf094f0e1eeb51a7c384f2d7980a70f610c698040a9ca73d6422455ef32929d26c557616e85d6e867377369c0cb84f2930fd64311a757ba33e1cacd36220b45895fc3fd696070b36e4cd304489998f464b2e6983be1e1a9b4aa47982154585f4514109970f2249452e24518527955aab62372fec9a6db7dad5867dc96042bed03165cc2ee6ac0f346991cce8955d42930159966c382caf2f3c8e83d288298713b7592ff57d05585a1827b8fa1b64bd6bc19fe1033b46f09d132915993e5137a3fbee6fc771a69f475d77ddfe0f42694eea84b8c3717fee76c753c32d8fde7b3b8d6a2a8983546832b4abf576a3d5acbec77a45266a7e8fa3658116f882ff8edb5883138a44e1e10deee1c8ad7b020000",
    ],
    [
      "ETag",
      "usbaqbso/ONo1pKabrGX4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-28-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553596f9b4010fe2b68fbd24ab10dbec096ac344a688b6a3b898d13b55565ef2e03d90458b2bb388d22fff70e10e750a4e40998f98eb9782037228fc8983091dc96a0ee3f5d4b460e08189a6094ba9118fc3cff97fc567d9b46b9ba9a5ee67793092244c5d2342b526869592a0e7abc5ab61325cb822a295b28d4ea7a2d67d873ba8ee37af6c019214f431a4f457e83ec2b630a3dee74f6deed44ca24055a08dde6327b8a77b6dd4ea1e43570a33baf2d3be8a23bef9b1ea6925323643e592db18052835a4346458a253c3323f6f5b5745bd0ac9d20782b3850ce65999baa2c94e0328f4552aa5a958c1f485de68b17b2f4a7fe7168cd82f9e70dcd2aeae68b45b5b55e2bd0656aac6f8bd399b529d0e98a6ad01bebf287bff02d0c29198b14d622da5813ebd09a06b320b41c748d401b91d79e216529547e8f6309de2ea3225083da4d72edda43ea78f688c5cce5b1d71bb0d806c63ce60e688fd97cd4877ec48022cf54ea358be632b77b3ceef5a80d8eebb0910b71d7e67c301a32bbcf46c3aeeb455e1cf108c8ee80dc2961e044e8426ad1cc865c2e82d05f878bd5fcf828f4eb36628a1338698aab9a7859a7c12611f44e5fbb2a2b243a55830ee6a1bf383a0e830bbfd9ed1412caef97b7b8dd98a61a104d15cdc0809a49ac724cce4e9741189cce8fa6c8a81776b6476832fef3f04c08ef8b7acaa67e565ec37eedbf075cd0b4ac11dbe6853864b7fb8b08bcc3864cce57fee21769420b884141ce3f5e1d82ebc487bfd3feb6118bd78d36dae0371e0ad7950957d01c8cc8eaf21ab6e7f4edae476ab0326f72ce70b89f4ca551294206b979eca8b96d6cb4312bf5130893b8e77930ff8ed9ff52b47e315b040000",
    ],
    [
      "ETag",
      "a7di5KQxgZr40adnrhLWnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "6e",
      "c2",
      "30",
      "0c",
      "40",
      "ff",
      "c5",
      "7b6d37c26eac120f30318154ed02749336219416b794a57597a4635dd57f9f53f692d8ceb17d94163ef3720701c479f655a36ece32b42f2e58a2a995357c55541a040fd0ca8cc977358f8ef22d8fc5eb225eff5ecce6d1cf7e321e3361923d16128216d21cd5ce40f0d142290be4b6ed56f71319b34de52a0fe1d364cd69413b973e466138998633e8369d07078a9798a2c6324137b0d274c0c42e9cab9145a5d03754eb040df470ff9069aa2ba9897caef8c3912f6e2ec55088dbd1e05adc31a8289136a792d96805bcc692956a49475605c180ee43b64efbf3db95cfaf86ce69f34f4f1b8be65913af36e8b60e4e06f7e4ac2cdb5a5da30789e4df98e7f694777f6634ddca6a010000",
    ],
    [
      "ETag",
      "ZlHUwaWib1VIbTz/EHUxhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b",
      "72",
      "82300000d0bb646d1c0a08a43b1515ab7c7488c46e980041d01208a4e0677af73abd467d77780f40d394755d2ceb0be3e01ddca88ac6e978d358337b28f9d6be37ab24c8161c31bad1dd2c0cf10409055219f8b85956561005c25d135db312ffa330a6f3cc3bd69d1f18ced24abf2338357259f5a281c97a3ef0390e4e3c8e9c7ec3bfdef8e1a2a9a6ae388e77171e5193cf83c4be5fecf646b116c486c7eab827b540fa0ec657a8a015c9cd250ef3c52173092ff5ad274d92c0c17328334f8bc21356494ca5a08eacedaeedb3bb9bb7184dfb089f2b989d437ffcf2f27f811160d7a66c591797cfedda04a111f8ab1fcb5bc39eff678cb6ac053fbff9b9e5af19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-29-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b3014fd2bc8fbda0408799048d19a2574cb94900e48ab6a9a903186b825986293aeaaf2df776d9aae55a5f613b6ef39f79cfbe009ddb132451394b0fcbea1f5e3975b9ea0334425cee195ef7efe5d54dfeecb43b13baccccb1bef21aa66d32920986209bcaf0ada11bca90915936dd8cd6bde54b8e6bc03893abd71c71e3a76cfb647ae35b0c7c013b4c856acbc03f64eca4a4c4cf3a4ddcd39cf0b8a2b26ba84ef5fdecd43cfac6a7e4b8914e65b49135484f9b1e8d782132c192fa7db100c3482d631dd63568085ffcc34397f9bbacbf0be9b03f8c008c584f0a694ca16a420bccc58ded43a2b9a3c216df3d50185deca9b4706e145b32fe312efe99991628963f95851e322d8ac8da57fb109d6b368b9f1e370fec35bcfbaf3cd6abbf643e3fa87177886c4494135d7981ae7fae6c305f4532a242bb57aa49e95f2738396efc7a208202d681b8c47d610dbae354eb2644432d71924994593c44d4603ec241619f7693f4d28069e16d52c5cf2b2673b4ed61ba5b182c6fde1c08d13878c636768bb34ed5b03ab67a3e3197aa899a40b262a2e58db21741d2c232f8e82ad3f9f459e2e21c34d2117ad3155c06b8f120a04d007351d5594715052ed5efa9117cce6d1f2ca6b27bca239268fe13dcc38c385a080c635344fd27acd536818f2676b6f01603db1cb5350a0c9ef27a47aae5cbc6af90b3d82012abb527f5118054bffbbb673425ce1a2d190437b401558de416de0faf80790b0a46d16f46beb0537a87d0a68466b5a92cfa709601df8f45f3b2d3e6061f5414648b8c3ee10a144484ddb1d62badc67b66bf747560f69702ddfc55cdb39754de55019e99e96f2b9a276f1a1d056ac112f2008c2f87dddade33f080dc67978040000",
    ],
    [
      "ETag",
      "ohJxDpBqnvlhvL/PYEwTpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d153824010c6ff97ed319c115334667cc0b4a25133c4a7c6714e5814038eee0e9571fcdfdb23b3a69aa917d85d7e7b7cdf07077889b3106c58c6abd7024579b142f5a40b0f65912849b79c6712c100546c45e476ff302bbdf1cee9fb97bb28c4b2dc67a9d3ed12218335a60cec03443126a104fbf900194b91d6029e1469b6a83a035499ebe1d4f7dcf11df5290f753f9e0d874e6f3880a3715e0c99628b8affc7dafc68c0862f3d8c506016a0d6920bbec140b9daa664699e604df2420428a182ab072bc18b9c09ce6b34a935ae6ba67565364cb3dda9b7cc6b02131e3015f38cd8d994f481e28a251edf914bb00810554986a3eabaa5711c564674e98e7dab59e9fb0a90b4284e70f137487ad78c3ec307768ae03bc7525e64ea4cdd0e1f9ddf8ea34c3f8fea3bfee00721152575467c773498face68a2b9f9c97baf54282782539012758666bdd969b5adfa7bac375c474defb19528d08080d1df711f2bb02396483cbe010d25d0cf7b020000",
    ],
    [
      "ETag",
      "vxJUyRNwADT+wfdeyyxnmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-30-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535b6f9b3014fe2bc87bd9a4268110121a29eaa2966d4849da25a4dd344d896d0ed42d606a9b6e5d95ffbe0334bda852fb049cf35dce8d7b722d8a988c0913e94d05eaeec39564e48080a12946676e71bebaf8f73772233d8dbd4066c3349c4e268810354bd3bccca0a365a538e8f17ad54d95ac4aaaa4eca050c7b53bced075fa8e33f26dcf39449e862c9989e21ad997c6947adcebedbdbba9946906b414bacb65fe18efddf67ba59257c08deebdb4eca18beebd6d7a94494e8d90c564bdc2022a0d6a0339151996f0c48cd9e797d25d41f36e8ae05bc181722eabc2d465a104974522d24a35aa647c4f9a329fbd9055300b8e236b3efdf1714bf39abafd64516d6d360a749519ebcbf2746e6d4b74baa41af4d6baf8162c030b434a2622838d88b7d6c43ab266e13c8c2c075d63d046148d67445906b5dfc358c2d7cba809d4a0769bdc8cec21757cfb90256cc413dff5586203633e1b79d465363f1cc020664091676af586450b59f43deef65992c4fe88f7dd91ed31bf3f00b76fc7e0321f271d031fd8ee90ec0ec81f250c9c085d4a2ddad9908b6518059b68b95e1c4fa3a06923a1388193b6b8ba89e7751a6c12416ff4b5abb342a2533de8701105cbe971149e07ed6e6790527eb7bac1ed2634d38068aa680e06d45cc638347276ba0aa3f074319d21a359d8d91ea1c9f8d7fd1321ba2b9b299be6597b0d078dff1e704eb3aa41dcb62fc421bbdd6f44e01db664f27d1d2c7f9236b484041414fcfdd521b849bcfb3bed6f1bb178dd68a30d7ee3a1705d9b7005edc188bc29af65fb8e3718d5278560655ee53c7fb89f4cad512b420e8579e8a8bd6d6cb435abf4230893b8e745b8f88ad9ff804e65805b040000",
    ],
    [
      "ETag",
      "L3nVSWzxT3TsAd5Eol6gIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "400c80ff4bfd3adc806c2ac93e6c46a309f18539636296e5761464038a77650b59f8eff6985feedaded3f6c99de150d42944b02bf2df164d779523bfbb2041db966ce56aa8b608234056b99033ea0eddfa705c7d8d3f43bd0c92f0341d9fe67321acfec14a417486acc032b5107d9fa156154adb766b86898271d7b8ca63fcbaf890b4a2d4a52feb385e2ce307e837fd08f6b44b304383b54637b031b447cdcfced5aaaa29d1b3d41a8d16067878c80db58d32449e54bc70e2f9b3d00f7cffe67632f5ef042c492b2ea81676bd0259c3c4aa4ce824aae00b608650acb3e13c4a39b80e42e7b4f9a7971da37d3324ab2dbaad938bc13d392b165b362d8e402bf98da7822f79ff0732224c496a010000",
    ],
    [
      "ETag",
      "6oykyUkvSX/V3cB2R3w5/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "51",
      "6e",
      "82300000d0bbf4db1a4601e9fe400145711071507f9a420aa238b0141497dd7d66d798ef0eef1bb03ce75d476573e65fe01d8c4cc5d37cba6e4d7b713b667d3818814f83332b33ab12a2469b3c4d0b3d5b25e3c7bc5467f792b6c453141326ab268e95f5266cf73e49eecc35ac131e142b2287d848d4aa0f22e78a3a3385b8d434aaee2ae4e2c26c57c90097cd3e2d429d3491e321b1e5b7d421a2e45a04111b511dd8a7454035ce587f64576813efb24197de47426ef5b99468b73d44436590a516676e54876f331d2f03ff7120ba534b3f2ba0f5e9c3b32ca72f2fff1798007e6f2bc13b5a3db7231de309f8ab4fe5d8f2e77f9b33c105f8f90564b01f9519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-31-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbda84d084bca4688d12ba464ac84a48ab6a9a906d2ed42dc1149b4c5995ffbe8b69ba5695da2f807dcfb9e7dc07cfe451e431191326d2a70acac3b707c9c819014d53bcedceb57b69b387e57ec5efeeb2a4b3fd7bed4f271344889aa5e8aec8a0a564557250e3eda69d96b22a6829650b13b5ba4ecbe9779d73c7190c3bae33429e822c598afc11d9f75a176a6cdb27ed762a659a012d846a73b97bbdb7f7e77651ca07e05ad9ef256d5451f6e7a2df33c9a916329f6c3768a0525046b0a322430bff9931bb789fba2de8ae9d22782f3850ce6595ebda16a6e0324f445a95262b193f1363f3cd07d9784b6f165a5c66d52e8f72ba83332ba69a46fa50807519ac57d6c2bf5c07ab69b858fbd16676e5ada6edd97ab95df91bebf6ca0b3c4b539681e15a13ebc29c7c3ca07e0c4a8bdca887f575adfcd2a0c5c7b1d4049456d004a341a74f9d6167c41236e0c9b0ebb2a4038c0dd9c0a55dd6e1a31ef46206147946d4b0682e73b7d7459213479d2ed0a8c7582f1a028ca21ee7aecbfbdc899d981ccfc89f5268980b5548259a0e91db60117a51186cfdd934f44c0909ad323d6f8cd505bcf5a8b140047d52d3b18e0a894a75bb177ee805d359b8b8f19a092f21a5fcb079c21927345380685a62f334942b1963c3883f5d7973049b89fd3c051519ff7a2675cf6b176f5afe4a0f7180b55d6dde6413060bff87b17342dcd0ac32907df3410ab47c8fb5a1ebe36f44e2923659c8f5d60bee487315400225e4fceb6922d804befcd74e8b8f585c7d94511acfb83b5cd522bc8466878429f7853d74faf820065cea0fb173b77fea5a9da3ce083bc8f54b45cde263a18d58a55e4118c4f1fba65bc77f3a61377278040000",
    ],
    [
      "ETag",
      "3Dt5F/bjLvMcYYlf0UzQNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d925b4fc2401085ffcbf868492897824d7800456c04e452e283216469a7a5d876cbee566c08ffddd98a68d4445fda99e937db734e7b80e728f5c1867514ee7214c545886aaa8b19ca3c56926e194f258201a85848e4e3c22b8ac1f67ebcdf5d4e47f550b8bddaebb4d321427a1b4c18d80708228c7d09f6d301529620ad793cce9374557606a822d3c3b93b73c603ea13eeeb7ebc180ebbbd611f8ec679d1678aad4afe1f6bcba3015bbe9e618002530fb5964cf02d7acad136254bb2182b92e7c24309255c3e0805cf332638afd0a452372ba655376ba6d96a579be6158131f7988a784aec624efa4071c5e219df934bb0081065498683f2fa42e3c82f8de8d219bb56a3d4f71520694114e3ea6f90f46e187d860fec14c1778e253c4fd599ba1d3e747f3b8e32fd3ceaa6ebf67f1052515267c47546fdb9db1d4d34b73c79ef150ae544700a52a2ced0ac36dacd96557d8ff59aeba8e93db612391ae031fa3bee220576c06289c7372cb08c437b020000",
    ],
    [
      "ETag",
      "WUcyyGjKNwq+QM3grTB2xQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-32-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "a24014fe2b64f66537a9022aa226a6db58764b62b58bd84b361b1d86039d16193a33b4358dff7d0f507bd94dda27e09cef726e3c915b9ec76444229ede9520b75f6e44440e08689a62d45d5ecade7c79e2998fd9d5b69be9934b79f5301e2382572c453745062d254ac9408d968b762a45595029440b855add4ecbee77ed8e6dbb03cbb187c8539025539edf22fb5aeb428d4c73efdd4e854833a005576d26362f71f3be631652dc00d3ca7c6f69a28b323f363dcc04a39a8b7cbc5c6001a502b9820de51996f0ca8ca3efefa5db9c6eda2982ef3903ca9828735d9585124ce4094f4b59ab92d113a9cb7cf34216ded49b84c664be9c855fd731d5b0fe665065ac5612549969e347303f35d6053a5d53056a6d5c9c78816760488a8467b0e2f1da181b87c6d43ff543c346d71894e679ed19d22883caef792cfeffcba80854a376935cb9569fda036b182591cb9241d789120ba26810b90eed46161bf6a017474091a72bf59a4573915b8e6339fdce90c6960360d32e1d30cbb56dbbeb3a1d8b469d8826837e6c91dd0179905cc331578550bc990db908fcd05b85c17236390abdba8d84e2048e9be2aa26ded6a9b149047dd0d7aeca72814ed5a0fd59e8054793d03ff79add4e21a56cbbb8c3ed26345380682ae90634c85311e3d0c8d97ce187fe7c76344546bdb0b33d4291d1efa75742b82dea29ebfa5979f57bb5ff1e704eb3b246dc372fc426bbdd1f44e01d3664f26be90557a409059080849c7dbe3a04d7894f7fa7fd6d2316af1b6d94c66f3c14a62a1326a13918bea9cb6bd803bb3fb43ba4064bfd6fce45e9fd642a8d4a113690ebe78e9adbc6461bb352bd8030897b9ef9b39f98fd0b4f2685045b040000",
    ],
    [
      "ETag",
      "7UXr4OUHE/xlYy3ltHXrYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90416fc2300c85ff8b771c95288cb2217180a962481d826e1ca609a190ba5da1ad4be20ea18aff3ea7ec123b2f5ffc9edcc229af1298c021cfce0d9aeb4386bc714d8cb629d84aa9a9b2083d405699906a108f82b5568f4fe7d970fcce5ffdcb69b1994e85b0fa074b059316d21c8bc4c2e4bb854a9528dff67bd34d148cafb55396abcf7011c62294943861b58da2d93c0ae1b6bbf5e04887185334586974236b4347d4bc7469ad2aeb023d4b8dd168a183bb87cc50532b43e489e20d079e1f0cfd81ef8f9ffb23ff45c082b4e29c2a61b71f20364cac8a982e12167c014cd74aeeb43b7f450e5ca0dd3f3abf32dab521f1b5e82cfb77fb57729158a2b269b0075ac932de72bedf6f7fc09d68ad69010000",
    ],
    [
      "ETag",
      "a2R56Pca+4qA37MtY0wkGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b7282300000d0bb64ad8e4851e8ce0454a4c8283f71c3a44c4020044c503e4eef5ea7d7a8ef0eef0970921021e2b62e09039f60c00b6d96ccac46857a579469f9b1962f791645bcd875da1e6fbd8d0b2b86bf9695bdaf7638bd048e11fa65b48cbca3d75987a0e386f4f05752ae5803ad17016abeefb6bbd144069d061dbcbab82973c6e0989ba5c4af6d4f779c6eba2a5aca87334ab38ace8ffaa9972a53a081682473203a5fdb4517da4c8db60fe124d688720c5b796dd22219137d9a5dfd0109d759e9e191ea218d076266a7f86ea47dcb5c4325ce5457d37e759bbdbdfd5f600248dfe49c88387f6d97154d9b80bffa713b34e4f51f12cc09073fbfb8c0f0ed19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-33-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "e3",
      "30",
      "10fd95c8fb4a9ba6b7b495aaa52a61a9d4a690a420b45a45b63b0986340eb153c4a2fefb4e1cca8290e029b6e79c39672e79210f22df920961227daca07cfe712f193921a0698aaf6ed0bfb9a5f91edc446fecbf578f8564f74fd3292244cd52745764d052b22a39a8c9266ca7a5ac0a5a4ad9c244ad5eafe50c7b4ed771dc5167e08c91a7204b96227f40f69dd6859ad8f651bb9d4a9966400ba1da5ceededeed7dd72e4a790f5c2bfba3a48d2acafe5af4672639d542e6d34d88062a05650c3b2a32b4f09fb965a71f53b705ddb55304ef0507cab9ac725ddbc2145ce68948abd264259317626cbe3b90d05b7af3c8e232ab76799cd31d9c585baa69ac9f0bb0ce83f5ca5af8e7eb60358b166b3f0ee717de6ad69eaf979b951f5a37175ee0599ab20c0cd79a5aa7e6e6e305f5b7a0b4c88d7a543fd7caaf0d5a7c1e4b4d4069054d30763b43ea8c3a6396309727a3de80251d606cc4dc01edb10e1ff7a1bf65409167440d8be632df4277dc67e0c4ceb8338cfb3dda8de9d07163c619b874d877a13b208713f2540a0d6742155289a643e42658445e1c051b7f3e8b3c534242ab4c9f35c6ea02de7bd4582082bea8e950478544a5badd0b3ff282d93c5a5c7bcd84979052fe1c3ee28c139a2940342db1791aca95dc62c3883f5b7967083613bb3c061599fc7e2175cf6b17ef5afe468f7080b55d6dbe248c8285ffcbd83922ae695619c8be3990022ddf616de8faf00791b8a44d1672b5f1825bd23c0590400939ff7e9a0836816fffb5e3e22316571f6594c63bee0e57b5082fa1d92161ca7d658f1c77e09a3f55d3527f8a0dc7fd63d7ea1c7546d841ae5f2b6a161f0b6dc42af506c2208edf37dd3afc038510fc6e78040000",
    ],
    [
      "ETag",
      "7R4WYanve7ftU/zQqpobjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcbf85a12ca9d263c14452129c8a5bc680859b653286ebb7577ab2184ffee6c45346aa22fedccf49bed39a73dc2539245e0c126d93e17a80e575b34335bcc5117c268bae532d3080ea0615b22b3eebe339cf160ff506b8c75832f176278f07b3d2234df61cac03b429ca08834788f47c8588ab4c6a528d26c5d760e98436e878b703e9adc519fcac8f6936510f8fd600027e7b21831c3d625ff8fb5d5c981bddccc3146851947ab2557728fdc8cac4dcdd25c6045cb4271d450c2e583ad9245ce9494159a54eaf58adbaabb35d76d77aa4db74ba0909c994466c42e17a40f8c344ccce52bb9841601aa2cc9705c5e5f689c44a5115b8e2661ab51eafb0a90b43811b8fe1b24bd3b469fe1033b47f09d63a92c3273a16e837bffb7e328d3cfa36efc70f083d08692ba20e1683c5884fe786ab9d5d97bff60504f95a42035da0cdd6aa3d36cb7aaefb15e4b1b35bdc733aa400738a3bf639818f06226349ede0008d5c3817b020000",
    ],
    [
      "ETag",
      "n9j8HQcLjZ24Ms4cUSlHyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-34-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b",
      "91f7b2690362081090505741b64502da85d06e9a26709c93d46d8853db69d555fcf79d24a517556a9f30e77c9773cb3db912794cc62412e97509eaeec3a58cc8170286a518edba8332fb3765ae9edd7e9e852b18895fa7e964820851b134db1519b4b42c15073d5eafdaa99265c194942d146af59c161df46897d2a16bf7e908791ab2642ef22b645f1853e871a773f06ea752a619b042e83697bbc778e7a6db2994bc046e74e7a565075d74e76dd3a34c726684cc27eb1516506a501bd8319161094fcc38fafa52ba2dd8ae9d22f84670609ccb3237555928c1659e88b454b52a19df93bacc670fb2f2e6de34b416fef2e3366606b69f2ca6adcd46812e33637d0b4e16d6b6409f0ba6416fadf31f5ee05918523211196c44bcb526d69135f7177e6851f48c411b91d78e218b32a8dc1e86e2bf5e45456006b59be466680f1875ed519444439eb8bd7e94d810456e34ecb35e64f391034e1c01439ea9d46b16cb65deef718e5c77384c183e9d118d68b7ef46498fd2bee350db1d769d7e3726fb2fe456090333a10ba9453319721ef8a1b70983f5727a1c7a751b09c309cc9ae2aa269ed769b04904bdd1d7beca0a894ed598fd65e805c7d3d03ff39acdce2165fc6e758dbb4d58a601d14cb11d18500b19e3d0c8e9c9ca0ffd93e5f11c19f5ba4e0f084dc67fee9f08e15d514fd9d4bf95d7c0a9fd0f8033969535e2a679104af6fbbf88c02b6cc8e4e7da0b7e93261440020a72fefeea105c27defd980e978d58bc6db4d106ffe3a1705d997005cdc1885d5d5ec376a9db1bd9a4062bf32a37a083c3642a8d4a1176909b878e9acbc6461b",
      "b3523f8230897b5efacbef98fd0fce80868059040000",
    ],
    [
      "ETag",
      "286ulzCa8sDw+DTSe9iXPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "80",
      "ff",
      "cb",
      "f9",
      "ca423b742a090fa024181622282f1a42baee98c36d37db8e05c9febbd7e14b7b77fdeeee4b2ff09d57298c21c9b39f06cdf92643b7f6c1066d5338cb574d954518003a9531a94ebfd170a13f9649d4b6361a0e45bb5cad271326acfec252c1f802871c8bd4c2f8f302952a91dbf67bd34f64cc9d6b5f799ebecf392b29f5d96a1bc7d3593c876ed70de048c9060f68b0d2e8e7d5868ea8dd8b57b5aaac0b0c2c3546a3851eee1f32434dad0c51c09560741bc868244329ef1fc49d7c64b020ad5c4e15b3db37e0358e9c2a36d4b22948064c1fb2f4a13f4f5c0e4528021106427ab3dd7fcfececd0be1a62018b7eb7b87a3c917773ecec4c8303d08abf6491bb6bdefd01861a0aab6f010000",
    ],
    [
      "ETag",
      "avz6/HcZKb6wws6//0wKNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ffedd35b7282301400d0bde45b1d079421fd239597a28011d0fe303c02dca204011174baf73add463d7b384f1425096bdbb0e325abd0071a2301cf92d9a696c9ea0e7a672a41fe45763d58f69aa7969ddaf6d1bb7a7a99d2337524876ed48e92c1c2f9e2d3b5afe0f1d63b4172b3cc3c635baae8206c15b9fc9e5e1e041f5d8231548320261771cf19ef77ceada84a8863ae67cdbaf2edda1cc3c39c14fbc5b0148ca5e4964231977bd1a4550a91363d0d8f7ba71e5255e9251f2030fc4ea371a13e8c0293e6acdc88b7f0dc95e93a62037120f2c2d8d3acd4fc5488a65c99bdbdfd5f6882d85043c3da105edbc525c613f4573fecc69abdfe131635ac413fbfb307fdee19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-35-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2bc87b5c13a0491a12295ab394acd112b20269354d1332e642dd01a6d8748aaafcf75d4cd3b5aad43e61fb9e73cfb91f3c923fbc4cc894c43cbb6fa0de7fba13313921a06886af9b70791914f59e7ebdb2969f97df2781bb30b3d90c11bc65495a5439f4a4686a0672ba0bfa592d9a8ad642f430516f30ead96703fbd4b6c78e35b227c89390a76b5efe41f6ad52959c9ae651bb9f0991e5402b2efb4c14cfefe6c3a959d5e20e9892e66b491355a4f9bee8975c30aab82867bb000d3412ea080aca73b4f09f99c4e7af53f7392dfa19821f3803ca98684ad5dac2144c9429cf9a5a6725d347a26dbe3890c05dbb8bd060226f8a322a6901274642158dd4be0263e96f37c6ca5b6efdcd3c5c6dbd28585cba9b797fb15def365e60dc5cbabe6b281ae7a0b9c6cc38d7370f2fa89f8054bcd4ea61fbdc2a3f3568f5762c2d01a52574c1686c9d51dbb126711a8f59ea0c46716a411c3bf1784407b1c5264318263150e46951cda225d6ec000c5260913d1e3ad1904dac28769cb36832c2fbd9c886244dc8e184fcadb9820b2e2b2179d72172e3af42370afd9db79887ae2e21a54dae2e3a636d012f3d2a2c1041efd47468a35ca052dbee9517bafe7c11aeaedd6ec26bc828db07f738e394e612104d6b6c9e827a23126c18f1e61bf702c17a623f8e4149a6bf1e49dbf3d6c58b963fd3431c606b57e92f09427fe57dd3768e886b9a371af2d01d4885966fb136747df88d485cd22e0bb9dab9fe4fd23df990420d25fb789a08d6810fffb5e3e22316571f65a4c23bee0e93ad08aba1db21aecb7d623bf6c41e5b44836bf52636b086c7aeb539da8c5040a99e2aea161f0bedc41af90cc2208edfd3dd3afc034738c69b78040000",
    ],
    [
      "ETag",
      "MTFHSmryaBQ0F+FK9SEC/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2d09951fb58917455151402cf5c2184296760ad56da7ec6e51427877672ba25113bd6967a6df6ccf39ed069ed33c060f66e97c59a25a1fccd1dcd922405d4aa3f95650ae111c4023e64c66b241cbd79b4673b6282e83553dc187eb997f7aca848e169809f03690a428630ddee306729121af4524cb2c9f569d03665dd8e1380c7ac34bee338a6d3fbceff7fd4ebf0b5b67bf180b23a615ff8fb5c9d681279a0598a0c23c42aba550f48491e9599b5a6485c49aa65245a8a182ab077345652114518d27b546abe6b61beea1eb1e1dd75bee098392226152ca99bd1fb33e3064840ce8855d429b0155956c38a9ae2b1ea77165c496bd61d86e56fabe022c2d49254eff0659ef42f067f8c076117ce74446656ef6d445ffd6ffed38cef4f3a8733fecfe20b4e1a4f648d81b74c7a13f18596eb2f3de591bd423451ca4469ba15b6f1eb78edaf5f758cfc846cdeff18c2ad18148f0df71951af01221356edf0006a19cdc7b020000",
    ],
    [
      "ETag",
      "ml3oqxK34bhpGRv0feYJbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE  `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-36-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535b4fa34014fe2b64f66537b12d945ea049e33695dd2569ab52aa6b369b76180e384a199c19bcc4f4bf7b00eb2526fa049cf35dce8d4772cdf3988c48c4d39b12e4c3b72b119103029aa61835ef2f13310d1cd3be777b17212bef74787a3a1e2382572c45b745062d254ac9408d56cb762a45595029440b855af6a0650d6cab6b5943c7ec5b2ef21464c98ce7d7c8bed4ba50a34e67efdd4e854833a005576d26b62ff1ce6db7534871054cabce7bcb0ebaa8cee7a68799605473918f574b2ca05420d7b0a53cc3125e9971f4f3bd749bd36d3b45f02d6740191365aeabb25082893ce169296b55327a2475996f5ec8d29b79d3d0984ffe7edfc454c3e6874195b15e4b5065a68d5fc1f1dcd814e8734915a88d71fec70b3c034352243c83358f37c6d8383466fedc0f0d0b3d63509ae7b56348a30c2ab7e7a1f81f575111a846ed26b91e9a036a39a61b25d190258edd8f1213a2c889867d6a4726737bd08b23a0c8d3957acda2b9c87ba6d38dfa2e1df6868edb65a6e5d88e655ab1132740fba6358c629351c726bb037227b98623ae0aa1783319721ef8a1b70e83d5623a09bdba8d84e2048e9ae2aa26ded6a9b149047dd2d7aeca72814ed598fd45e8059369e89f79cd66679052f6b0bcc1dd26345380682ae91634c8b9887168e4e478e987fef162324346bdae933d4291d1bfc75742f850d453d6f5b3f21af46aff3de08c66658db86d5e884576bbff88c02b6cc8e474e50517a409059080849c7dbd3a04d7892f7fa6fd6523166f1b6d94c66f3c14a62a1326a13918beadcb6bd84ed7b4dc01a9c1527fc8d98ebb9f4ca55129c21672fddc5173d9d8686356aa17102671cf0b7ff11bb34f653db6d059040000",
    ],
    [
      "ETag",
      "0xhfoCR803x94YTcuwtTQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d90514f83400c80ff4b7d1d0930dd74c91e862e51833a36a70f66590e2808038a77c56521fbeff6982f776def6bfbe57a38144d0a33888bfca7437dbaca91231bacd174151bb95a6a0cc20890552e247f06f1f1f0ecb7c1f1252a576fd1f483aea3f95c08937c63ad60d6435660951a987df5d0a81aa56dbfd7c344c1f8d4dacac3e27d29594da9cd5eb761b808c2259c77e7119414af31438d4d82765eaba9c4849facaa51755ba163a8d3091a18e0e121d7d4b54a13395271c613c79b8c3ddff3a6b7ee8d7727604589e2821a61b71b90354cacaa351dc5143c01f4108a74369cbf52f65ddf755cdff15d6bb6fbef094e8c66a549040cdaddeec5e39eac1b8b33eb0e479028f992c7822ff9f90f66dee2ca6f010000",
    ],
    [
      "ETag",
      "tWBbwkJ2pBwMQjPOQ7Vo4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "ffedd3597282300000d0bbe45b1d59b4a47f328065ab0d8b2c3f19844015594c62593abd7b9d5ea3be3bbc6f90e539610cf3ae262d78055326c255beb27b45d586cbc10d2ec31b4a2ccab3cfd828a39749dc616fd67785b58c0dd5674c4eeed2d6b55132b89222c8aa2ca79533c2bc88a22624813099efbe1e5adc6cbdb68ecaa6dea3bdbb676eefa6338cab64ed4369599d0cc30ea69247a18011fa40e8187cb1396867ea2b1d4f43c7bb999aa8b1a42031f792a5a7c49d43d7852d8cb871f44e3c68a4b95c55593d5ce99c6db4bad2580a753bf2afd0ba0fce09cbf5717b5b3d3dfd5f6001c8d89f2961f8fcd82e6d205c80bffa984f3d79fc57494609053fbf270488a719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-37-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "d8264052088914ad514ad768816c84b47b6842b631d40dc1149b465595ffbe8b69ba7693d64fd8bee7dc73ee8327b4e5658a2688f0fcbe61f5e3873b41d029620ae7f0aa3e47276631fa663b6a1f94fb93adf763cbf7d3292078cb92785715ac2745535326279b753faf4553e15a881e24ea0d473ddb1dda03db1e7996638f812759912d79b905f6ad52959c98e651bb9f0b91170c575cf6a9d8bdbc9b0f03b3aac51da34a9a6f254d5091e6ff453f168262c54539ddacc14023599db01de60558f8c34cc9f9dbd47d8e77fd1cc00f9c324ca9684ad5da8214549419cf9b5a67459327a46dbe3aa0b5bff4e7b14145d1eccaa4c43b766aa458e1443d56ccb88c5681b1082f5751308b17ab3059cfaffc60d69faf969b205c1b37577ee41b0a938269ae3135cef52d840be8a74c2a5e6af5b87d6e959f1bb4f8772c2d01a425eb82c9c872b1ed5963929111cdbca143328b11e291918387c4a2e3337696128681a745350b97a2f45297788e3d482c878d9333e20e1332606e92120a7d7632cb755d743845fb9a2b76c1652524ef3a846ea245ec2771b409e7b3d8d72564b829d44567ac2de0b547050502e83f351dda2817a0d4b67b11c67e349bc78b6bbf9bf092e5983eaeef61c6192e240334aea1798ad58148a161289c05fe0580f5c4be1c83124d7e3ea1b6e7ad8b572d7fa1c730c0d6aed25fb48ea345f849db3922ae71d168c84377401558be85dac0f5e117206149bb2ce8ebc68fbea3ee296219ab5949df9f268075e0dd7fedb8f88085d50719a9e00ebb43652b426bd6",
      "ed10d7e53eb3bd81351eba48836bf577ccb69cd1b16b6d8e3623dbb1523d57d42d3e14da8935f2050441187fa8bb75f80dbff452ca78040000",
    ],
    [
      "ETag",
      "tKR+/l7X15twMnw+k8Zkiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85",
      "ff",
      "cb",
      "f8",
      "6849a8dc9bf000084a52904b890f8690a59d96d26db7ee6e3584f0df9dad88464df4a59d997eb33de7b44748e22c0007b671f45ca03c5c45a8e7a658a02ab85674cb45a6102c40cd2222d3a43ab0fbf32479447e48dccef568cae651b74b84f2779832708e10c6c80305ced311329622adf9821769b6293b0bf42137c3a5b7184fefa84f4560fae9ca757b7d770827ebb21830cd3625ff8fb5f5c982bdd82e304489998f464b2ec51e7d3d3636154b738e15250ae9a382122e1f445214399342546852a9b52a76b366dfd876ab5d6dd81d02b9f0998e4546ec6a49fa400bcdf842bc924b681220cb920c87e5f585c671501a31e578ea35eba5beaf00490b638e9bbf41d2bb63f4193eb07304df39968a22d3176ae43ef47e3b8e32fd3ceab6e70d7f104a535217c41b4f864baf3799196e7df6de3f685433292848852643bb5a6f375acdea7bac0361a2a6f7385a166881cfe8efb88f353821e30a4f6f8c818dc77b020000",
    ],
    [
      "ETag",
      "mk0C1BQkkWelykL9+FNaQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-38-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "14",
      "fe",
      "2b",
      "91f7b2698510202420a18e41ba65e2d24168554d13d88e93ba4de2d4768a50c57fdf49527a51a5f6614f71cef92ee7623fa05b9e856880088fef0a26f79f6e04412788691c43f4ebfe7b70773e391bf9d7e3dd2f4dccddecea66371c0282972c85d33c610d250a49991aac57cd588a22c752880608353a6ec3ea75acb665396ecbb6fac0532c89a63cbb05f6b5d6b91a98e6d1bb190b11270ce75c35a9489fe2e67ddbcca5b861542bf3b5a5092eca7cdff43411146b2eb2e17a0505148ac90d4b314fa084676648bebd966e729c366300df73ca30a5a2c8745916485091453c2e64a58a060fa82af3c501adbca9370e8cf1623d0f3e6f715a92b75f0cac8ccd46325524da385b2e66c63607af6bac98da1a973fbda56740488a88276cc3c3ad31344e8dd17c02d1e3dfd49ff98161411521539a67550d0126092bfd1fc7e4bf5d4e49c01a9ceae4c669f5b0e5b6fa24220e8ddc8e4da21623c4258e8d3ba445fb5dd60d09c3c0d3a57ac5c219744e48e846ed7618d9ac0f2ab44bec56188676e8b66d1a11d7e990c86945e8708276926b36e12a178ad7b342974b3ff036c1723d1f8f02af6a23c2308f495d5cd9c4cb3a353409a077fa3a94592ec0a91cbc3f0fbce5681cf8175ebdeb298b31ddafee60db114e1403349638659ac999086168e87cb1f2037f311f4d81512df0fc885068f0e7e19910ecf36acabafa965ebd6ee57f045ce0a4a810f7f50159e87038f93f051b24fe0204ae76cd46bfd7def20ad5a1258b986419fd78fb00ae121fbed0e373012c3c18b0511afee1ae51559a50c9ea3bc7d3aabe9aedb67bddbe8b2ab0d46f723dcb390e",
      "b7d4281559ca32fdd851fd5cca5955a9423d8120095765eecf7f40f61f50a15e83ae040000",
    ],
    [
      "ETag",
      "+yBTqPDFAIhCwJtb/wMYjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85",
      "df",
      "c5",
      "bba51219fb2995b818131a48804637ae268442ea96425b77890baa50df7d4ed94dec9c7cf139f20dce79954004873cfb6dd0b60f19f2c63731baa66027a5a6ca210c0059674286e4569727d51c91dbd5669e8ecbe4bcb84e26423873c45243748334c7227110fddca0d225cab7fddef61305e3b6f6ca62fd3dfb98c52294947861bd5d2edfa6cb1974bb6e00273ac498a2c5caa01f595b3aa1e1854feb74591718386aac41073ddc3f64969a5a5ba24094601406ea65a41e957a0d87cf6a2c604146734e95b0db2f101b26d6454c57090b4a00dbb7923bedcf4b2f4ba0dd3f3a6d19dda725f175e82d8777fb77f29158a2b26d700046cb32e639dfefdd1f94e42cf369010000",
    ],
    [
      "ETag",
      "8osMv41uhetyMQHf9mdkIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "59",
      "72",
      "82",
      "30",
      "00",
      "00d0bbe45b98015448ff202ae086d405e24f064200c1864d16e9f4ee757a8dfaeef0be4140296b1af22872c6c10778063214a9b8293563d1a728f41caead0fa4b89b85d18f1acf9ccd5146b616a0ea9c385417c65b6829196c2bbe455f0a8aadd28d0489d6766a9849bf3ce70a97f3b9e91d3aa3af047f8ed9c2c7039dfa50d8995da49053c5d4e5276e29d92d21f307b3e9d44b1cb7febdf13c7d3fb5f1461fae9d9427e3c8ab762abb2a31133746593a5ee4611527928782e8e458db319ef9c7edfa5a42b452b815e0b0c77528e1eacac33dcf7aac8b6f6fff1798003694b79a35e4f6daaecc209c80bffae4f12cd9ebbfc1829ad5e0e71772e62fbb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-39-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d4fa34014fd2b64f6d5b6504a699b346b53716d62a952aa71371b3203171c058665068d6bfadff732585763a24fcccc3de79e733f7826f7bc4cc88c309efd69a07efa7627183922a06886af7fe55de1f0c7e14f2716c5c50d98feceb52fe77344f096256951e5d093a2a96390b3ddb69fd5a2a9682d440f13f5ec69cf1adbd6d0b2dc89e95853e449c8d3735ede23fb56a94ace068383763f1322cb81565cf651eff57df0301c54b5b88358c9c17bc901aac8c1e7a2df731153c54539df6dd14023a18ea0a03c470bff99093b7e9fbacf69d1cf10fcc063a0712c9a52b5b630452cca94674dadb392d933d136df1cc8d63bf796a1118bbc29caa8a4051c19095534524f1518a7c1666dacfcd34db05e84ab8d1f6d9767de7ad15f6ece776b7f6b5c9f79816728ca72d05c636e1ceb9b8f17d44f402a5e6af5b07d6e955f1ab4fa38969680d212ba60e49a636a4dcc294b991ba713db61a9098c4d98eb509b99f17404a38401459e16d52c5a8a9239638b5989194da64e128d60caa289eb8ca3e9184c779cb8cc3653b23f228f355770c2652524ef3a44ae8355e84561b0f3978bd0d325a4b4c9d54967ac2de0ad47850522e8939af66d940b546adbbdf2432f582cc3d595d74df81c321a3f6dffe08c539a4b4034adb1790aeab548b061c45facbd1304eb895d1c8292cc7e3d93b6e7ad8b372d7fa58738c0d6aed25fb20d8395ff43db3920ae68de68c8437720155abec5dad0f5fe37227149bb2ce472e70537a47b0a20851acaf8eb69225807befcd70e8b8f585c7d94910aefb83bb16c45e21aba1de2badc17f664e85a8e4334b8561f62f6c83e74adcdd16684024af55251b7f8586827d6c857100671fcbeeed6fe1fa7bbbe5078040000",
    ],
    [
      "ETag",
      "zsjm5iw2Z5comPYe0NU73Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcb78b48d54a040130e0541218008e5600c214b3b2dc5b65b76b71a42f8efce5644a3267a6967a6df6cdf7bed019ee32c0007d671b42b50ec2f22540fba98a12c1225e996f34c2218808a4544d62e2bb63bdd6dae86fd6175fdd8dc7afbacebb6db44487f832903e700618c4920c1793a40c652a4359f27459aadcace00b5cff570eecd06935bea531ee87eb2188ddccea80747e3bc1830c55625ff8fb5e5d1802d5fcf304481998f5a4b2ef8167d35d036254bf3044dc90be1a384122e1f44821739139c9b3431ab2dd3b2abd6b565359a95bad52230e13e5331cf885dcc491f28ae5832e3afe4126c02445992e1b0bcbed0380e4a23ba1c4c3cbb56eafb0a90b4304e70f537487a378c3ec307768ae03bc7525e64ea4cf547f7ee6fc751a69f47ddb85eef072115257546bcc1b837f7dcf15473cb93f7ce5ea19c0a4e414ad4195a955ab3deb02befb176b98e9adee32851a0013ea3bfe32e56e0842c91787c03966d3d657b020000",
    ],
    [
      "ETag",
      "4+06APqh/JFJ3bY8jTynCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-40-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536d6f9b3010fe2bc8fbb2496d02212f2452d46529ebd0d2a423a4d1364d893107750b9862d3aeaaf2df7798a62faad67ec2dc3d2f77e7f33db9e279444624e4c97505e5dd874b119203028a2618fddb5d9eac826f4cfc4abf5c7fbff2d7853f58df8ec788e0354bd2ac48e1508aaa642047ab652b294555d0528843143aec9a8756dfb63a963570cc9e35449e84349ef1fc0ad9174a1572d46eefbd5b8910490ab4e0b2c544f6186fdf74da45292e8129d97e69d94617d97edbf428158c2a2ef2f16a89055412ca0d6494a758c213330a3fbf946e719ab51204df7006943151e5aa2e0b2598c8639e54a55625a37ba2cb7c76204b77e64e0363ba58cd838f5b9ad5e4ed27834a63b3294156a932befa8b53635ba0d7059520b7c6fa9bebbb06864a11f314363cda1a63e3c898cc8f8d2760139b79a75e6058584b0452f15c5712d03085ba8a876179afafa8265085324d723330fbd472cc61188703163b762f8c4d0843271cf4a81d9a6cd8856e1402459eaad5358be622b7e39e639a7667d8eb4267481930bb1bd9b41731133a30b4fb10d1217322b23b20b7255770cc6521246f2646d6be17b89bc05fcda793c0d56dc414a772dc145737f1bc4e854d22e88dbe7675960b74aac7efcd03d79f4c03efdc6d6e7c06096577cb6bbcf398a612104d4b9a8182f25444383472b6587a81b7984f66c8d0d778b6474832fa7dff4408ee0a3d65a5bfb557bfabfdf780739a561a71d31c884576bb83ff2b2c03df9b9fbc2d3129b05b94f983285cf24681fc58b9fe4fd2847c88a1849cbdbf0108d68977dfeafee120169f0eda4885ffb86f4cd626ac8466ef78a6bb6cd84ec731ed01d1e052bdca59bdc17ec0b546ad0819e4eaa1a3e6e1d4f3d2a94a3e823089eb32d793dafd03c5dfd03eb8040000",
    ],
    [
      "ETag",
      "x4SGUTHcoZlBqKkRWpR7Ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d90416fc2300c85ff8b77a512856d8c4a1c60aa80a942ac5b2f4c0885624a591b77893b5455fdef73ca2eb1f3f2c5efc92d7ce7fa04011cf3eca746d33c64c8efae89d1d6055b2915698b3000649509b95d72a8f524b2ab389eeec66f9c34b7cb7c3613c2a6172c15042d9c732c4e1682af16b42a51be1d0ea69f2818379553d69bcf7019c622947472c22689a2f9220aa1db7703b8d231c6331ad429ba9195a12ba6bc7669ad2aab023d4bb549d1420ff70f99a1ba5286c813c57b1c7afef3d81ff9fee465f8e44f052c28559c931636f900b1616255c47493b0e00b60fa56729ffbf357e4910bb4ff47170da3dd1a125f8bce7278b77f251789252a9b1a07902a59c62ae7fbbdfb03e5e6f5e469010000",
    ],
    [
      "ETag",
      "PGtEnn7LsHRR9Z3JtUywhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b",
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "bb645d180b12883b5a82084ea81db5960dc327fc5a024d6868ea78773b5ec3be3bbc6f90150515229d860365e009a8cc407aa147a3b3f2e66e170be1f5b32b15df1f1be5f4dbe8c5e8388c1cffa12f09935fd9eb795bba9f35e14dc39621c9772aae5a8b746e3e5c82508ed263ab101d9be1d17e36d0f9d2a39a8501b6cbcd590b07db9dac20be421f42ad324d826b56f0ba6aafb18dd70d4925c76d9da883d3715e2fab124f6ff824af762084845e6b986ad6588aa3d31e25a61fed90967f54059496bf9961429a70a96c3997a9f4e624ead6effaddddff0516805ec6965391b6b7eda685d002fcd54f2735d2dbff15cd38e5e0e71777875e2319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-41-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d6f9b3014fd2bc87b6d1248d20422456b94d23552425620ada66942b673a16e01336c3a7555fefb2ea6e95a556a9fb07dcfb9e7dc0f9ec8bd28f7644698c87e37503f7eb9938c9c10d034c3d7e9f516eef371f0b7d8302fbbbb89c2fdb0b89acf11215a96a24595434fc9a6e6a066bba89fd5b2a9682d650f13f5c64ecf998c9ca1e34c5dfbd4f190a7204fd7a2bc47f6add6959a0d0647ed7e26659603ad84ea7359bcbc0f1e8683aa9677c0b51abc951ca08a1a7c2cfa35979c6a21cbf92e42038d823a81828a1c2dfc67eed9d9dbd47d418b7e86e007c181722e9b52b7b6300597652ab2a63659c9ec89189baf0e24f2d7fe32b6b8cc9ba24c4a5ac089b5a79a26fab102eb22dc6eac5570b10d378b78b50d926879e96f16fde576bddb04917573e987bea529cbc170adb975666e015e507f0f4a8bd2a8c7ed73abfcdca0d5fbb1b4049456d00593a93da18e6b7b2c65539ebaa35396dac098cba6a774c46cee8d61bc67409167440d8b96b27486367568ca92940dd3649c7a76e2dacc4b6ccaed319db82e1f79e47042fed442c3b9509554a2eb10b90957b19fc4e12e582e62df9490d226d7e79db1b680d71e351688a00f6a3ab4512151a96df72a88fd70b18c57d77e37e13564943f46bf71c629cd15209ad6d83c0df546eeb16124586cfc73049b897d3f061599fd7c226dcf5b17af5afe428f7180ad5d6dbe248ac355f0cdd83922ae69de18c8437720155abec5dad0f5e117227149bb2ce46ae7873f48f714420a3594fcf36922d8043efdd78e8b8f585c7d94511aefb83b5cb522bc866e878429f799ed0edde964440cb8d6ef62eed43976adcdd16684024afd5c51b7f8586827d6a817100671fc81e9d6e11f7ef1a41378040000",
    ],
    [
      "ETag",
      "7VOekl4NzmMb9gjWSRd2mQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83401085df65bca549d1da56122f5aad8ae98f16ea8d699a2d0c94ba307477d1344ddfdd59d46ad4446f6066f86639e7c00e9eb222060f9659baa9506d8f5234f7b698a2aea4d17c2ba9d0080ea0112993c96ab3bc7d12fdd1832f8356b08d27ee86d2f3732674b4c25c80b7832443196bf01e7750881c792d2259e5c5a2ee1c30dbd20e8370ea8fafb9cf29b6fd78361cf6fac301ec9dc3622c8c58d4fc3fd6e67b07d6b49c62820a8b08ad9652d11a23e35b9b5ae4a5c486a64a45a8a186eb07a9a2aa148aa8c19346cb6db8ed13f7d8753bdde6a97bc6a0a448988c0a666701eb034346c829bdb04b6833a0ea920d27f5f599c7595c1bb1a53f0edbad5adf5780a52599c4c5df20eb5d09fe0c1fd87b04df39915355980375359cf47e3b8e33fd3ceab2170e7e10da70520724f4478320ec8dee2c377ff7dedf1ad4778a38488d3643b7d9ea9e76dacdb7582fc846cdeff18caad08148f0df719319f0122135ee5f0168dc16267b020000",
    ],
    [
      "ETag",
      "fhqbJkaBMVIlS4SydO1qog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-42-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85546d6f9b3010fe2bc8fbb2694d02212f2452d46529eb9012d212d26e9aa6c49883ba054cb1691555f9ef3ba0e98baab59f80bbe7e5ee7ce681dcf02c246312f0f8b68462f7e95a04e48880a23146d7d73dd6f7bd53f36ba25f47bfdcddf7def9e27e324104af5892a679022d29ca82811caf57edb810654e0b215a28d4ea755bc6c034ba8631b4f4be31429e84249af3ec06d9574ae572dce91cbcdbb110710234e7b2cd44fa14efdc753b7921ae8129d9796dd94117d979dff438118c2a2eb2c97a850594128a0da4942758c233330cbebd966e739ab66304df710694315166aa2a0b2598c8221e9745ad4ac60fa42ef3c50b59d9737be66bb3e5daf53f6f695a91b75f342ab5cda60059264afbe12d17da3647af2b2a416eb5cb9fb6676b182a44c413d8f070ab4db4636dea9e68cfc0263677168eaf19584b0852f1acaec4a7410255158fc372de1e5145a00a659ae466a80fa861e9a3200a862cb2cc7e10e910045630ec5333d0d9a807bd30008a3c55a9d72c9a898c866668767b43da0bf55168318b0dcd606441d764ba614160e816589825fb23725f7005275ce642f26662e4d2737c7be37b6b7736f5edba8d88e2544e9ae2aa265ed6a9b04904bdd3d7beca72814ed5f81dd7b7bde9cc772eece6c4e71053b65bdde29947349180685ad01414140b11e2d0c8d972e5f8ced29dce91511fe3d90121c9f8cfc333c1dfe5f59455fdacbc06759b4f800b9a9435e2ae792106d9ef8ffeafb0f23dc73d7d5f82e6d82dcafc45142e79a340ced7b6f79b34210f222820631f6f0082ebc48777f57071aa3fc1aab2910abf71df98ac4c5801cddef1b4eeb2615bdd51dfd0490d2ed49bdc60681c065c69548a9042a61e3b6a2e4e35af3a55ca271026715ddc7a52fb7f70dd5653b8040000",
    ],
    [
      "ETag",
      "Uj4c5TRG3+l0jfXNyB4QMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "30",
      "0c",
      "85",
      "df",
      "c5bb050d3af687d48b75425d2556ad6cbdd9545529184a071892c08410ef3e27db4de21c7ff639ca04df65934108a7b2e87a94e355817a678a04555f69c5574b8d427000b528981ce2324886b5f739e65d1714d7afe7dc93bbe59209959eb116104e909758650ac2af091a51238f1d8fd26e644c8fad5136db8f681d252cd4941961bb8fe3a7551cc17c981db8d029c11c2536299a95ada40ba67a63d22a51b715ba8a7a99a2020bdb4621a96f85247259718385ebdfddf80bdfbf7ff06efd47062b4a852ea96176ff0e6ca3498b2aa11f0e0b3e03d2969c3bb7e7c0b267021dfed1d5a851bd49625f8599ed5afb6732913447d5b2470752c19ff152eabff7fc0b5583c0bc69010000",
    ],
    [
      "ETag",
      "vLi4RvG0Zyfqq4g/Mhf0rQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "db",
      "7243400000d07fd9e7d40815bb7dabda41124b88db9361bbea92206e41a7ffde4c7fa339ff70be414229ebfb78682a568337b02402e2287768a1a2debf0ec51a3aa4ea45a6676e01733e4bad19068edabf5eb3f1a3b2b742245b1619d47cb88698d995b3c27455e2bd3b7b1e3ae5316f2b8b747aaffd9677465d3ee5865edecc54763bf38275728e284e34d8dc27de95a90b4d3396a2dbd6487582fa09d91ef68205399da1613fc3b591d445792c8239132ef5911e93d2d42e929b7a9f9838fc7e82d26a9f4bfa92568d5fed34419cf76d3875fa6ef4af65406cc23d3dfd5f6003d8dc161debe3e2b15d9410da80bffaf1b0b4ecf15f6149c73af0f30b87dd68e119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-43-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f74adb84344d5ba91a551ba0539b8e3405a1698a6ce7a618d238c40e1342fdefbb71280321b1a7d8bee7dc73ee475ec883285232264cec1e6ba89ebfdd4b464e0868bac3d7d4bbf53df8713fccbde5c54d9e0efadbe9fc6a32418468588aeecb1c3a4ad6150735de6ebabb4ad625ada4ec60a24edfed3803d739751c7f687bce08790af26c298a0764df695daa71af77d4eeeea4dce5404ba1ba5ceedfde7b4fa7bdb292f7c0b5ea7d94eca18aea7d2dfa3d979c6a218bc97683066a0555027b2a72b4f08f99b2b38fa9bb82eebb3b043f090e94735917bab18529b82c32b1ab2b93958c5f88b1f9ee4036c13298c5169779bd2f9282eee1c44aa9a6897e2ec13a8fd62b6b119eafa3d5345eacc36433bb0c56d3ee6cbddcaec28d7573194481a529cbc170ad8975666e215e503f05a54561d4e3e6b9517e6dd0e2f3581a024a2b6883896f0fa833b4472c633ecf86aec7321b181b32dfa32eb3f9a80ffd9401459e11352c5ac8c2776dff94f55902cec84efa8e4b1336744e130e8e9d79de60c41c9f1c4ec89f4a68980b554a25da0e919b681107491c6dc3d9340e4c0919ad733d6f8d3505bcf7a8b140047d51d3a1890a894a4dbb17611c44d359bcb80eda092f6147f9f3e611679cd15c01a26985cdd350ad648a0d23e17415cc116c26f6f3185464fceb85343d6f5cbc6bf91b3dc6013676b5f9924d1c2dc20b63e788b8a6796d204fed819468f90e6b43d787df88c4256db390ab6d10dd92f629820c2a28f8ffa7896013f8efbf765c7cc4e2eaa38cd278c7dde1aa11e115b43b244cb9afeca16b0f3c971870a53fc5fc8177ec5a93a3c9087b28f46b45ede263a1ad58adde4018c4f187a65b87bfefe1224378040000",
    ],
    [
      "ETag",
      "d5Y75eJj8l5LGWld64UADQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd4e83401085df65bca549b1bf92f4826aab18a8b5c5c4c434cd16064481c1dd45d3347d776751ab5113bd8199e19be59c033b78ccca181cd864e9538d727b94a2be36c502559d6bc5b78a4a8560016a9132297add601304d3db8cfccba96c97696fe8b9a311132abac74280b38324c33c56e0dceda01405f25a44795d94eba6b3406f2b335c860b6f76ce7d41b1e96737beef8efd09ecadc3622cb45837fc3fd6567b0b1e68b3c0042596111a2d95a4078cb4676c2a515439b614d53242050ddc3c4825d59590442d9eb4ba9d96ddefd8c7b63d18b67bf609833945426754327bb3647da0498b7c412fec12fa0cc8a664c349737de6711637464ce9cdc27eb7d1f71560694996e3fa6f90f5de0bfe0c1fd87b04df3951505dea0335f5afdcdf8ee34c3f8f3a73c3c90f42694eea80845e3059866e3037dceaddfb78ab51cd2571900a4d8676bb3bec0dfaedb7584fc944cdef71b4acd18248f0df7191697012912bdcbf0295a523267b020000",
    ],
    [
      "ETag",
      "a54MbMMFXioLJFr0ng58IA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-44-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "db3010fe2b91f7659368f3d677a96285665ba4d2429a82a6696aede4120c491c6c8709a1fef75d12ca4068f029ceddf372773e3f925b5ec46442184fef2a900f9f6e04234704344d311acee200e4c9e2249bdf99d9c6c966e06e2ea65344f09aa5685e66d051a29211a8c966dd4da5a84a2a85e8a050a7d7ebd803d7766c7b38b2faf618790ab264c18b5b645f6b5daa89691ebcbba9106906b4e4aa1b89fc396ede3b6629c50d445a99af2d4d7451e6fba6c79988a8e6a2986ed65840a5406e21a73cc312fe3163f6f5b57497d3bc9b22f89e4740a3485485aecb42894814094f2bd9a892c92369ca7c71206b6fe19d86c6e96ab30c3fef685e93775f0caa8ced5682aa326d7c0b5667c6ae44af6baa40ed8cab1f5ee019189222e1196c79bc33a6c6b1315bce311a530dedffc23ff343c3c63a62509a174d15216519d4153c0dca7f7b3d35816af46a93dba135a0f6c81ab3840da364e4f6596201632336ec539759d1b807bd9801459eaed51b162d44317629a36e4c13db4ad898d1d178c0865612f71db02da0fdc48e07961b45647f44fe48ae61ce5529146fa745ae023ff4b661b0599ece42af6923a13891795b5cddc4cb3a353689a077fadad7592ed0a91ebdbf0cbd60761afa975e7bdb0b4869f4b0bec3fb4e68a600d154d21c34c83311e3d0c8f96aed87fe6a395b20a3b9c2f3034291c9afc77f84f0a16ca6ac9b6fed35e835fe07c025cdaa0671df1e884df6fba3ff2bcceb11bc2be0588ed5b19c8edd47a5df08c51d6f45c8c5c60b7e9236144002128ae8e325407093f8f0a91ede0d62f1e5a08dd2f88f2b17a9da2492d0ae1ecf9b465bf6c8edf59de6a16b2af59bdc60681f665c6bd48a9043a19f3a6adf4d3db22655a9671026716396fef23b66ff02f13563adb7040000",
    ],
    [
      "ETag",
      "TAdRerBLBlDq/lU2lAe3UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90dd6ec2300c85dfc5bba512618c6d485c00425ba58e6dddb8d984501a4c7fd6d6254941a8eabbe384ddc4cec9179f2377f097d77b984292a7c716f5e52e45fbe99a184d5b5ac3a5a1da200c00ad4c990cd529391693f8e76dbe54d97b918ddaec9cce664c1895612561dac121c7726f60fadb412d2be46fbb9df61319b397c629e1fa7bf5b28a59a868ef84f5268ae68b6805fdb61f4041498c07d4582b74231b4d052a1bbab446564d8981a1562b34e061ff906a6a1ba989025682f13810937b3112e2f169f8209e192c49499b53cdece60bd8c69295654c670e0b8201ed5bce7df0e7c9cb1c68fb8f2e2e16cd8726f635e82c8737fb25b94896a35adde20094e465bce6f676efaff0d6ccd569010000",
    ],
    [
      "ETag",
      "Icvbqj6RZMACchOjh2uhwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "2d0e4a25d01d8845a4821141ea264331a404f934090aedf4ee757a8dfaeef0be4196e744082cdb8a34e0198cd9dc9ce653bf336ce7469dc13a87f645d7587ca4e7a3d4d2dd492d7081da01f27d24e0c18ff4c065252df56403d19e79a9409f0acf7a2c9433897ca95b74c349819d9e2b74bb4b5ca9de94353cd559dfd0187b6ca46b5217288a4a17dad9ea62e86f072a8b7458b9d5a2ae210fb7b3e47475ada0c6cec0d5d483cbbd1118a597bce3918557eebf2e9fbe8e39aee78a1cfdb868c5952134742aaab4c5471b13d6fb55f33253e3cbf4e1e1ff02134086aee444e0f2be5d5b98e604fcd5c772ecc8fdbf4d324e38f8f90530fe00b119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-45-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2bc87b5c934042028d14ad5142d74809590969374d1332ce85ba054cb1e91455f9efbb98a64b55a97dc2f63de79e733f78260fbcd891318979fa5843b5ff722f62724640d1145ff7e120b92e929fc59287a3afb6bcf7afe6d6743241046f5892e665061d29ea8a811c6f37ddb41275492b213a98a8630f3bd66860f52dcb71cda1758e3c0959b2e4c503b2ef942ae5b8d73b6a775321d20c68c9659789fcf5bdf7d4ef9595b807a664efad640f5564ef63d16f99605471514cb61b34504ba822c829cfd0c27fe62ebe789bbacb69de4d11fcc41950c6445da8c616a660a248785a573a2b193f136df3e44036ded29b850613599d1751417338337654d148ed4b302e83f5ca58f897eb60350d176b3fdaccaebcd5b43b5b2fb72b7f63dc5e798167281a67a0b9c6c4b8d0371f2fa8bf03a978a1d5c3e6b9517e69d0e2fd581a024a4b688391638ea8e59ae771123b2c7107c33831218eddd819d2416cb2731bec5d0c14795a54b368210aa7efb8161dba1185a11dd9ac3f8aa83334236a51d31d8cccc1ae0fe47046fe565cc19ccb5248de7688dc068bd08bc260ebcfa6a1a74b48689da9796bac29e0d4a3c20211f4414d8726ca052a35ed5ef8a1174c67e1e2c66b27bc8494b2fde611679cd04c02a26985cd5350adc40e1b46fce9ca9b23584fecc73128c9f8f733697adeb83869f92b3dc401367695fe924d182cfcefdace117143b35a439eda0329d1f21dd686ae0f7f10894bda6621d75b2ff845daa70012a8a0609f4f13c13af0e9bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b92f6c5c08cb1e110daed4bb587f303a76adc9d164841c0af55251bbf858682b56cb57100671fcbeeed6e11f1d7459af78040000",
    ],
    [
      "ETag",
      "yT3fQnfXnLiT6+4sjNHD1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92d153824010c6ff97ed319c915234667cc032a34122c51e6a1ce7844531e0e8eea81cc7ffbd3d326baa997a81dde5b7c7f77db085c7b488c18645ba7caa506c8e96a86e75314659654ad2ade485443000155b12c9164175edbfa677c360921fdfaf4d67d8b59c5e8f0819ad3067606f2149318b25d80f5b28588eb416f1acca8b79dd19a036a51e4ec2b1eb0fa9cf79ac7b7fea794edf1bc0ce382cc64cb179cdff636db63360cd17634c506011a1d6520abec648b9daa66479996143f24a4428a186eb074bc1ab9209ce1b3469b4da0dd33a354f4cb3d36db6cd3302331e3195f282d8e984f481e28a6563fe422ec12240d425194eeaeb338dd3b836a24bd70fad56adef2b40d29234c3f9df20e95d31fa0c1fd83e82ef1ccb7955a80375e9dd38bf1d47997e1e75e184831f845494d40109ddd160123aa34073b3bdf7fe46a10c04a72025ea0ccd66abdbee58cdf758cfb98e9ade632b51a10111a3bfe32a5560272c93b87b03e96169fd7b020000",
    ],
    [
      "ETag",
      "abPuJNxiVGPSm+Zj1AG86A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-46-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535b4fa34014fe2b64f66537b185e1de268ddb282a494bdd966a76379b76800147814166d034a6ff7d0f60758d597d829cf35dce6d9ed01d2b13344611cbee1b5aefbedcf2081d212a4906d10b717e7761dfab8fc574579d6956b0becee2e9640208d6b20429aa9c0e046fea988af17a35cc6ade54a4e67c004203d31e60dbc03ac68eab5978043c41f374c6ca3b60df485989b1aa1ebc8719e7594e49c5c430e6c54b5c7dd0d5aae6b73496427d6ba9828b503f363dce794c24e3e564bd82021a41eb0d2d08cba1845766127d7f2b3d64a41866007e60312571cc9b52b6658144cccb94654ddda9a2f113eacafce707adbc9977122a278b75107edd92a2256fbf2944289b4d4d45934be56cb9982bdb0abc6e88a062ab5c5f784b4f8150cd5396d30d4bb6ca443956a6c129448584eafac0cc9ffba182a190840ac9caae8c9044396d4b789e94ff7e3f2d814830eb931b47b30976b55194464e9cba8615a51a8d2237722c62445a3c32a9994494004fb6ea1d8b94bc742cdbb2756ca4a9eb264e821353774dc3192523c3188d7413eb8e6952cb46fb23f45833494f99a8b860fdb8d0f5d20fbd4db85c0727d3d0ebda48098ce4b42fae6de2df3a253409a00ffadab759c6c1a99dbd1f84de727a12fa575ebfee19cd48bc5bddc3c253920b0a685293824a5acf79024343978b951ffa8b603a0346b7c3cb0342a0f1efa75742b8abba29cbeedb7ad966e77f005c91bce9100ffd0fc268bf3ffabf42e8cfbd55389d5f7eaca26bba36d0f401b642ac8fb131c6e650d3b45f20fe078870f7bd2efab1f6963f511f5ad294d6b48c3fbf0b0077894f9fefe12d01165e13d8c05d4a0657188bd624ae697f8dace87aefd9ae31d24c1775e05abecb61db3a8cbdd5681569414bf9dc51ff96da2976a946bc8020094714f8c13964ff025ce81cc6cb040000",
    ],
    [
      "ETag",
      "HsGkH6q/wmAypF05NUWgcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90dd6ec2300c85dfc5bb5cab91fd3040e2824ed540ea60ebc6d5845048ddaeacad4b920e5555df1da7ec26764ebef81cb983dfbc4a6006873c3b35a8db9b0ced876b62344d610d979a2a83e0015a9931596ee8eda482466c6e83b69d4eee96a3b35ccce74c18f583a5845907698e456260f6dd41254be46ffbbd1e263266dbda29abf557f81ac62c94943861bd8da2451085d0ef7a0f8e748831458d954237b2d6744465572ead91655da06fa8d10a0d0cf0f090696a6aa9897c56fcc7b12fc60fe25e88e7c9e8494c192c48499b53c5ecf613d8c69295454c670e0b82013db49c3b1dcebf41e640bb7f34682d9a774dec6bd0598eaef62fe422598e6a75831e28c9cb58e6f67aef2f59cde06d69010000",
    ],
    [
      "ETag",
      "mOoMqcBu1O+Byy98/H0waA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "5b",
      "72",
      "82301400d0bde45b1d246aa17f44ab083e1814117e181e1707527925468cd3bdd7e936ead9c379a2384d81b188d7142af4891eb1aa8fd291dd6864712f7d9595f43c7496c231c00d15c599cc703d74ed7c65db3e0182af5655adcdb00dec79ee532f6362b7f1c5d054f1ad75177da5b57dfd50f495799429a1e05975775c5dc4613c55a9602c59269c62de84e35b9ec4f8eccd1a85b0bd6a79f322c799dcf2a8cf9c52024e4f656d650708a499057d03edb7260afee528dd55fa917197d49cec7176da7259716e1b51b059fbde622d8f94e8b9b65327e2f2618cdedefe2f3440d03745072c2a5edbf154d707e8af7ec41f0dbcfe13883be8d0cf2f86d00d7419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-47-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbb8e6d53c2091a2354be98a94908d40ab699a90712ed42dc1c436d9a22aff7d17d374ad2ab59fb07dcfb9e7dc078fe481171b322109cf7615c8c3a77b919033029a66f87ad81d3e47c1d5ac8c1e64f637f2e4ee6be266d3292278cd52745be6d052a2920cd4245ab73329aa924a215a98a835b05bbd51bf77deebd94e77d81b234f419e2e78f180ec3bad4b35e9744edaed4c882c075a72d56662fbfcded99f774a29ee8169d5792dd94115d5795ff44b2e18d55c14d3688d062a0532862de5395af8cfdc2417af53b739ddb63304ef3903ca98a80a5ddbc2144c1429cf2a69b292c92331365f1cc8da5db8f3d06222afb6455cd02d9c591baa69ac0f255857c16a6979fed52a58ce426fe5c7ebf9b5bb9cb5e7ab45b4f4d7d6edb51bb896a6490e866b4dad0b73f3f182fa1b509a17463dac9f6be5a706796fc75213505a41138cedee88f69cee3849139ba54e7f98a45d481227b187b49f74d97800834d02147946d4b068210a07201df787696cdb9b613c18f407f1381d8f62a40c6dc6face0812723c237f24d770c95529146f3a446e032f74e33088fcf92c744d0929ad727dd918ab0b78e9516381087aa7a6631de50295ea767b7ee806b379e8ddb8cd841790517658ef70c629cd15209a4a6c9e06b9141b6c18f1674bf712c16662df4f414526bf1e49ddf3dac58b963fd3431c606d579b2f598781e77f33764e881b9a5706b26f0ea444cb77581bba3efe46242e699385fc88dce027699e02484142c13e9e26824de0c37fedb4f888c5d54719a5f18ebbc3542dc224343bc44db94f6ca73fb67b2362c052bf8939b673ea5a9da3ce085b28f45345cde263a18d58a59e4118c4f1fba65bc77f6a1a124b78040000",
    ],
    [
      "ETag",
      "yqy+URFApUkrgxUIrqBbEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:23:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92dd4ec2401085df65bc2d912a146cc245514012407e8a171a4296edb414da6edddd4a08e1dd9dad88464df4a69d997eb33de7b407d8c659002eace2e8a540b9bf88504f4c314555245ad12d179942b000358b88dc3cee664fd1c45f6db7bd4b673def0e799d4f5a2d22145f63cac03d4018631228709f0f90b114698d8ba448b365d959a0f7b919cefc697fd4a33e1581e947f3c1c06b0f3a70b4ce8b01d36c59f2ff585b1c2dd888d51443949871345a722936c875dfd8542ccd13ac2851488e0a4ab87c104951e44c0a51a149a5d6a8d8ceb57d65db8d66b56edf109808ce742c3262e733d2075a68964cc58e5c8243802c4b321c96d7571ac74169c494fd91efd44a7d5f019216c6092eff0649ef9ad167f8c04e117ce7582a8a4c9fa9eee0c1fbed38caf4f3a83bcfeffc2094a6a4ce88df1f7666be371c1b6e71f2dede6b5463292848852643bb5a6bd61b4ef53dd65b61a2a6f7b85a16680167f477dcc71adc90250a8f6f7ea3fff37b020000",
    ],
    [
      "ETag",
      "jVwSZgQTbkkG/6hUFMc5cQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-48-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536d6fda3010fe2b91f765930a24244040421da2691789420ba1dd344d603b97d46d12a7b1c35455fcf75d92d217556b3f11ee9eb73bdb8fe44e6421191126e2fb128a872fb7929123029ac6585dc5a52707bbc092099fb8b7d23dfb79615d8ec78810154bd1344fa0a564597050a3f5aa1d17b2cc6921650b855a8edbb2fab6d5b5ac816bf6ac21f21424d14c6477c8bed13a57a34ee7e0dd8ea58c13a0b9506d2ed3e77a67d7ede485bc05ae55e7ad65075d54e763d3e34472aa85ccc6eb15062815141b48a94830c20b3364dfdf4ab7054ddb3182778203e55c9699ae62a104975924e2b2a855c9e891d4315f7d909537f3a681315dace7c1d72d4d2bf2f69b4195b1d914a0ca441ba7cbc5b9b1cdd1eb862a505be3fa87b7f40c2c153212096c44b835c6c6b131999f60f549a3aeccfc733f302c4c1282d222ab730494255065785a95fffe802a02d5e8d6343703b34f2dd71cb2880d78e4da3d1699c098cb063d6a33930f1d7042061479ba52af59349399ed9ace60d8030636e3cce9866e9787b6edf469c8a93b747bbdaed9efc390ec8fc8df426838112a974a34fb22d74b3ff036c1723d9f4e02af1e23a2b89393265c35c4eb9c1a8744d00773edabae90e8542ddf9f07de72320dfc2baf39ef19c4943faceef1c4239a2840342d680a1a8a7319e2d2c8c562e507fe623e9921a33ec48b034291d1efc71742f090d75bd6f56fe5d5776aff03e08a26658dd8351fc422fbfdd1ff154e678bc9e71aed1e22f67f108457bc5120976b6ff98b34a525445040c63fbf0108ae1b9fbed4c3b3412c3e1cb4511affe37de3aa32e10534f74ea475c286ed3a66dfb6490d2ef4bbdec0760e0bae342a454821d34f1335cfa6da57dd2ad533089b785de6fefc0cbbff001add880eb6040000",
    ],
    [
      "ETag",
      "SguEo7vT1olcA8jo8GXP1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d90414f83401085ffcb7885a454ab2d490fa2441bb1b5683dd434cd7619281518dc5d6c08e1bf3b4bbdecccbefd76decb74f09d5709f870c8b39f06557b95a159db2646dd144673a9a9d2080ea0111993e9eb31dc7e0613b59aadd68fe9364e5fb2e23c9f33a1e5114b017e07698e45a2c1ffeaa01225f2b7fd5e0d1319336d6d95c5f2237c0a63164a4aacb0dc44d17d1085d0ef7a074e748831458595443bb2567442691636ad16655da0aba95112350cf0f090296a6aa1885c56dc9ba9ebdd5e7b63cfbb9b8e26de8cc182a4303955cc6ede816d0c1951c474e6b0e031a0869673a7c3f9cbf2d806dafda3416b50bf29625f8dd67274b17f201bc97054a31a74400a5ec6736e2ef7fe0fa6c01ee769010000",
    ],
    [
      "ETag",
      "fMhEZVB5rO9OQDfZRfKglw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "59",
      "72",
      "82",
      "30",
      "0000d0bbe45b1c4165e99f88225b41402dfc3021131296b2a602767af73abd467d7778df0022848721614d896bf0066628284bb4b45a59d5c66293faeb9d576873d57d395c79f13cea8843630761664d06bc51288d55a5af64d76f4fd2e9ca7686ae103c92a3c569f478a171afcf649ff981de6d519506d71a9b888710a5f0d1140cdeeb887919de66f68e29a1614745c9a787d4a2f09125cebdcb85dc8f3127eae7fdb089a50399da4995914403f19107aadcb9ad9a7cd053ffeee084b34cbe145843cc957b2bb5b953094c6df66944536f3ba1e511b47c79f9bfc002e0a9cd7b3c24f973fb7aab280bf0573f61738b9fff550c7bdc839f5fb9abe2bb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-49-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fa34014fd2b64f6e3da027dd136695652716dd2d215a8c6dd6cc830bde0286590197cc4f4bfef65b0aec6443f3133f79c7bce7df04c6e79b1255392f0ecae86eae9db8d48c8110145337c1d72702fcfddc7abd2fded7f979e34cd8b47773643046f5892eeca1c3a52d4150339dd84ddac1275492b213a98a8339874ec51dfeed9b633b686f6047912f274c98b5b645f2b55caa9691eb4bb9910590eb4e4b2cbc4eef5ddbcef9965256e802969be973451459a9f8bfec805a38a8b62b609d1402da18a6147798e16fe33b7c9f1fbd45d4e77dd0cc1f79c01654cd4856a6c610a268a946775a5b392e933d136df1c48e82dbd79643091d7bb222ee80e8e8c2d5534564f2518a7c17a652cfcd375b072a3c5da8fc3f999b772bbf3f572b3f243e3f2cc0b3c43d12407cd3566c6b1bef97841fd2d48c50bad1e35cf8df24b83161fc7d210505a421b8c1d6b44edb13549d2c461e9b83f4c520b92649c3843da4f2c3619c0609b00459e16d52c5a88c272c6236b327162d8f6ed78304a8771620f7af1a44f8159c9d0e93940f647e4a1e20a4eb82c85e46d87c865b088bc380a36fedc8d3c5d424aeb5c9db4c69a02de7a545820823ea969df44b940a5a6dd0b3ff202771e2d2ebc76c24bc8287b0aef70c629cd25209a56d83c05d54a6cb161c47757de0982f5c47e1d82924cff3c93a6e78d8b372d7fa54738c0c6aed25f1246c1c2ffa9ed1c101734af35e4be3d90122d5f636de87aff1791b8a46d1672bef1822bd23e0590420505fb7a9a08d6812fffb5c3e22316571f65a4c23bee0e938d08aba0dd21aecb7d618f0776bfe7100daed487d8a06f1dbad6e46832c20e0af55251bbf858682b56cb57100671fcbeeed6fe1f64e62f4378040000",
    ],
    [
      "ETag",
      "5ieAWQAxYpAZN+sEs//VxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcb782d49ab50a0090740d446402c251e0c214b3b2dc56db7ee6e3584f0df9dad88464df4d2ce4cbfd9bef7da3d3c65450c1eacb3f4b942b93b4b51df9b22405571ade8568a422158809aa544dadbdbc0d52c8843be993c0c87611697edb4d72342451bcc19787b4832e4b102ef710f05cb91d622c1abbc58d59d057a579ae13c0cfce935f5b9884d3f5d8cc7fdc1780407ebb41833cd5635ff8fb5e5c182ad580798a0c42242a3a594628b91f68d4dc5f2926343894a46a8a086eb07a91455c9a4100d9a349add86e35e38e78ed3eed82da74b201711d39928885dcc491f68a1190fc42bb904970059976438a9af2f34cee2da8829fd69e8366b7d5f019296641c577f83a477c3e8337c60c708be732c1755a14fd4d5f8aeffdb7194e9e75197fd70f483509a923a21a13f19cdc3fe6466b8e5d1fb60a751cda4a020159a0c1dbbd969b55dfb3dd6a13051d37b3c2d2bb42062f477dc641abc8471858737c78e7a307b020000",
    ],
    [
      "ETag",
      "0jKR6taRdTlhMWCCTidp7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` != ? LIMIT 1",
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
      jobId: "grouparoo-job-50-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ffa553db6e9b4010fd15ba7d69a5d8065ff045b252d7a60d9263273624aaaaca5e60209b004b76175756e47fef2cc4b92852f2d027d89973e69c99d97d20772c8fc888042cb92f41ec3fdff2809c105034c1e8f7b5f2f6ed597ce633bfebe557c9eec2372fc7634430cd92342b5268485e8a10e4c85f3713c1cb820ace1b58a8d1331b96ddb1da96d51f983d6b883c09693c67f91db26f942ae4a8d53a6a3713ce931468c16433e4d953bcb56bb70ac16f2154b2f55ab2852ab2f5bee869ca43aa18cfc7fe1a0d9412c40632ca52b4f0cc8c826faf4b3719cd9a0982772c041a86bccc95b68525429ec72c294555958c1e4865f3c50f593b7367ea19d3a5bff0be6c69a6c9dbaf0695c666234096a9327eac96e7c6b640ad1b2a416e8deb3367e51818123c66296c58b435c6c6a93159cc30aa4f9ff471ee9ebb9e61a18d08a4627965c2a3410adac0e39cdcb7dbd104aa50aa4e6efaa64dad81390ce2a01fc6834e2f884d088241d0efd14e6086c32e74a30028f294ae5eb1688ead772840140d223bb62d338ec39e1d83d5ed98b1d9699bc3216d0f6cdaee77c9e184fc154cc18cc9824b560f8b5caf5ccfd9782b7f319d784ed5464c7120b3da9c6ee2a54f854d22e89dbe0e3acb382ae9c9bb0bcf594da69e7be5d4cb9e4342c3fdfa1ed71dd35402a2a9a0192810e73cc2a1918be5daf5dce562324746b5c18b234292d1ef876782b72faa29abeaabb5ecaacd27c0154dcb0ab1ab7f88450e8793ffabd0c3127f108277bb66934bdf59fd227568053108c8c38fb78fe02af1e1133dbe17c4e28b4119a9f08c772d945a241450df399655fe6af6a0dbb63b3d5281857a93eb0f87c7e1ea1aba226490abc78eeaf7a26755a54af904c2245e9585bbf889d97f6559f760af040000",
    ],
    [
      "ETag",
      "BStTy2DfHUiU4TnVgvPU0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90d16f823010c6ff97db2b24e08253121fa621d348ccc4191f16636a39190e7aac2ddb88e17fdf15f7d2bb7efdf5be2f7783cf52e510c3b92cbe5ad4dd438176eb9a0c4d5b59c3a52165103c402b0a2655badf29b5680eebd17a1c2de564fd2ba6dbd98c09233fb01610dfe05262951b88df6fa0448dfced74d2c344c66cd73865b5794b5e928c859a72276cf669fa3c4f13e88fbd07573a6778418d4aa21bd968baa2b42b97d688baa9d037d46a89060678782834b58dd0443e2b7e14f8e1f8311c85e1d32488c229831549614b52ccee77c03696aca832fae1b01032a08796735f86f39be5c8053afea3f3cea279d5c4be069d6570b75f908b6439aad52d7a20052f6359dafbbdff038bd9048f69010000",
    ],
    [
      "ETag",
      "nLUSnnCpWK2K65Hc8Kxa9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad0ca268d21d3f8904a40355b41b266a82849f7c2c60a777afd36bd47787f70de8f9ccda36eeaa8c95e00d8c5441d2592237a89bbd585ccc69b0da39d0f5ca9458c9f5535ee72829b8e205c525dcbe5f6615ec8f8eea789ead563a66661492231ca6fc3e9359dcefd3b054c7a65aecb7d8103c3b71855bf5269a435f34342bd3c0095757a1c877391fb4a2fa10d83fdad8b5f5034e20fa6ad9c1ece1bcef96b0d676be461f0faa38706951cdaadd01b6fa861b7ee174919b10754ca01063209fae36d96392e35a60948b2e920d4eeef640d6d2cbcbff0526800db7b4616d9c3eb7cf558426e0af7edc8d37f6fcaf33dab006fcfc02554a7ecf19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-51-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fbda3c48202191a2354b681b29900d48ab6a9a906d0c754b30c5a65d54e5bfef629aac55a5f60b60df73ee39f7c10b7ae04582a688f0ecb166d5fedbbd20e80c318533b8bdc2423c97fbbf1eb57ec8aabe1ccd97b7e6f36c0608deb024de9539eb48515794c9e936ec6695a84b5c09d181441ddbec98a3a13930cdb1d3b7cd09f024cbd3352f1e807da75429a7bdde51bb9b0991e50c975c76a9d89dee7b4f835e59897b4695ecbd97ec818aec7d2efa3d17142b2e8ad9360403b56455cc7698e760e13f3321e7ef537739de7533003f71ca30a5a22e54630b525051a43cab2b9d154d5f90b6f9e60385eeda5d44061579bd2be202efd89991608563b52f9971116c3c63e55f6c026f1ead367e1c2eae5c6fde5d6cd65bcf0f8d9b2b37700d8549ce34d79819e7fae4c301f41326152fb47ad45c37caaf0d5a7d1c4b430069c9da603cee8fb0e9f4272425639a3a439ba47d468843c6361e923e9d58cc4a08c3c0d3a29a850b51f4a939b1acd48ec9606cc75632c0b133c0437898fdc184d80e7112743843cf15576cc96529246f3b846e8255e4c651b0f517f3c8d525a4b8ced5b235d614f0d6a3820201f4494d8726ca052835ed5ef9911bcc17d1eada6d27bc6619a6fbf011669ce25c3240e30a9aa758e589041a86fcb9e72e01ac27f6f3189468fafb05353d6f5cbc69f9891ec1001bbb4abf5118052bff52db3922ae715e6bc853fb814ab07c07b581ebc31f40c292b659d0afad1bdca2f62a6029ab5841bf9e268075e0cb7fedb8f88085d50719a9e00cbb436523422bd6ee10d7e5beb21d6b3834474883",
      "2bf52166e9d869e19b8c6cc70af55a51bbf850682b56cb130882307e5f77ebf00f626b2e9578040000",
    ],
    [
      "ETag",
      "HaoowpyxMc4BsruG6ADY1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401086df65bcb424542887265c144125018452ae0c214b3b8542dbad7bc020e1dd9dad88464df4a63b33fbcdeefcfff608bb248fc08555b27ed6280e576b545313f82875aa242d05cf258205a8d89ac8b6dfdaea5787b6eb3a8c7bb5fd61e75c4f3b1d2264b8c18c817b8438c13492e03e1d216719525bc8539de5cb32b3401d0a539c05fe607c4f79c623938fe7c3a1d71df6e1645d1a23a6d8b2e4ffd1b63859b0e52b1f6314988768662904df62a80646a66459916245722d429450c2e5c65a705d30c179852a15c7aed88d9a7d63dbcd56d5b1db04a63c642ae139b1f319cd078a2b96fafc8554428300518624382ebf7b2a275129c4848371d0a897f37d0568b4384971f93748f36e183dc30776b6e03bc732ae7375a1ee868fde6fc791a79f47f5bca0ff83908a9cba20c160d49f05de6862b8c5597bf7a0504e042723251a0fed6abde5341bd5775b6fb9b19aee7195d06841c8e8ef784814b8314b259ede0016c548127b020000",
    ],
    [
      "ETag",
      "9R8juz5esu4ucfD3vyk5+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-52-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536d6f9b3010fe2bccfbb2494d0221242452d46509db9852d212d26a9ba6c43807750b9862d3aaadf2df7740d317556b3f61ee9e97bbf3f99e5cf26c4b4624e4f15509c5edc70b119203028ac618fd3ab77f5a77a9f42ece67379717d6efbb6c7172321e2382572c49d33c81961465c1408e56cb765c8832a785102d146a59dd96d1378dae610c6cdd3286c8939044739e5d22fb5ca95c8e3a9dbd773b16224e80e65cb699481fe39deb6e272fc40530253b2f2d3be8223b6f9b1e268251c545365e2db1805242b18694f2044b78626ec32f2fa5db9ca6ed18c1d79c01654c9499aaca420926b288c76551ab92d13da9cb7c76204b67ee4c036dba5879c1a70d4d2bf2e6b346a5b65e1720cb4469dffcc591b6c9d1eb9c4a901bedec87e33b1a860a11f104d67cbbd1c6daa136f166da1370a37da88273f7c80d34038bd982543cab4b0968984055c6c3b4dcd7775411a8429d26b91ee87d6ad8fa308cc2018b6cd30a231dc2d00e071635439d0d7bd0db864091a72af59a453391e97dc30efbe610a1d6d032ac816d9926eb42d8b3c03243d3a636f4d876407607e4a6e00a665ce642f26664e4cc7703671df82b6f3a099cba8d88e258664d715513cfeb54d82482dee86b5765b940a76afeae1738fe641ab8a74e73e5738829bb5d5ee1a547349180685ad014141447628b4323c78ba51bb80b6f3247467d8fc77b8424a33ff74f84e036afa7acea6fe5d5efd5fe7bc0294dca1a71dd1c884176bb83ff2b2c03dff5bebf2d31c9b15b94f98b28dcf246819cac1cff1769423e445040c6dedf0004d789771febfee52016df0eda4885ffb86f4c5626ac8066ef785a77d9b0ed5e4fd77ba40617ea550e3ffb01571a9522a490a9878e9a9753cdab4e95f21184495c17af9ed4ee1f8ecd7542b9040000",
    ],
    [
      "ETag",
      "BL8J5zmsNjhDwkj5ZznOQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6fc2300c85ff8b776da5868db2217118a8da2a5508cad00e1342a198aed0d62571d950c57f9f5376899d972f7e4feee054d47b18c3aec8cf2d9aeb438ebc744d8ab62dd94a69a8b6081e20eb5cc83cfc6cf93c0a67c1c95e56a36611abf07739990861b36fac348c3b381458ee2d8cbf3aa87585f26dbb35fd44c1f8da38259e7f446f512a42457b27ccd749f23a4d22b86d6e1e1c6997e2010dd619ba918da123661cbbb456574d89bea5d66468a187fb87dc50db6843e48be20f07be0a1fd540a9d17330542f029694692ea81676bd02b161625da6f42361410960fa56721ffaf322f2930bb4f947a75746bb3024be169d6570b79f918bc412954d8b1e645a96f15ef0fd7efb03900554a269010000",
    ],
    [
      "ETag",
      "g6Wutq76C0ksvS7pPI16xQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd34d7282301800d0bb642d0e4240e80e0a2aa848cb8fb0ca207c20a212081663a777afd36bd47787f78db23c07c6c8d03670456f8867923ecda76baa99d658ab5984b78bf935e7cae01c52b75f875d79169826c4d83c18232fb5c4db2c83a2e11608a15c47fbe401b15b11bceafa28b6f1cec7854cab45a2b52bd1706e9e24fab7969293fbe53c0ac1efc8a7e092d40aeecd6997c77c08d5d8306825cdb6fb7da81b33511ab4a177e3ebb815370eb0b2c18a72ae561761c7651f3705a8788ebda3652f44764ccb0b2c0f0a68b6572fcf89dd061f2c9dbde794769e43d674faf2f27fa109823bad7b60a47e6e97155d9fa0bffa64e0149eff4dc87ae8d1cf2fe254b7a619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:04 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-53-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b4fdb3014fd2b91f771b469fa4aa9548dae0d50a94d214d41d33445b673130c691c62a71342fdefbb71280321c1a7d8bee7dc73ee23cfe441e431191326d2c70acaa76ff7929113029aa6f83abd28ca656f555c74dcef573f6f54a5d5dcbe9e4c10216a96a2bb2283969255c9418db79b765acaaaa0a5942d4cd41af45aceb0e7741dc71d7506ce29f21464c952e40fc8bed3ba5063db3e6ab75329d30c6821549bcbddebbbbdefda4529ef816b65bf97b45145d99f8bfec824a75ac87cb2dda0814a4119c18e8a0c2dfc67c6ecec7deab6a0bb768ae0bde040399755ae6b5b9882cb3c1169559aac64fc4c8ccd3707b2f196de2cb4b8ccaa5d1ee5740727564c358df45301d679b05e590bff7c1daca6e162ed479bd9a5b79ab667ebe576e56facdb4b2ff02c4d5906866b4dac3373f3f182fa31282d72a31ed6cfb5f24b83161fc75213505a41138cdcce903aa3ce294b98cb93516fc0920e303662ee80f658879ff6a11f33a0c833a28645739923a90b0e8ba3d180c6519fb95d3cb99da807c36e371e38cc1939e47042fe9642c35ca8422ad17488dc068bd08bc260ebcfa6a1674a486895e97963ac2ee0ad478d0522e8939a0e75544854aadbbdf0432f98cec2c58dd74c780929e54f9b479c7142330588a625364f43b99231368cf8d3953747b099d8d531a8c8f8f733a97b5ebb78d3f2577a8803aced6af3259b3058f817c6ce117143b3ca40f6cd811468f90e6b43d7873f88c4256db290ebad17fc22cd5300099490f3afa7896013f8f25f3b2e3e6271f5514669bce3ee70558bf0129a1d12a6dc17f6a8dfc77112032ef587983b181ebb56e7a833c20e72fd5251b3f858682356a957100671fcbee9d6e11f45622ca378040000",
    ],
    [
      "ETag",
      "AGprL3MpG07+PBVsutsD/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd4ec2401085df65bc2d91f26f132e8aa29000622989c610b2b4d352dc76cbee5625847777b6221a35d19b7666facdf69cd3eee129c942706095c4db02e5ee2c467d670a0f55c1b5a25b2e328560016a161339f7c70fd3b53db97fe5355e0cce796d3bf5e26e970815ac3165e0ec214a90870a9cc73d642c455a0b042fd26c597616e85d6e8633df1b4e6ea84f4568fac97c34727ba33e1cacd362c8345b96fc3fd616070b3662e5618412b3008d965c8a0d067a686c2a96e61c2b4a14324005255c3e88a528722685a8d0a4d2ac57ec56ddaed976bb536dda17047211309d88cc2430237da08566dc132fe4125a04c8b224c351797da6711296464c399cf8ad46a9ef2b40d2a284e3f26f90f4ae197d860fec18c1778ea5a2c8f489ba1eddbabf1d47997e1e75e5fafd1f84d294d409f187e3fecc77c753c32d8ede7b3b8d6a2a0505a9d06468571b9d66bb557d8ff55298a8e93d8e96055a1030fa3b06890627625ce1e10d4d0afe937b020000",
    ],
    [
      "ETag",
      "UTMYPh1NXxl2luH/l2qPRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-54-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "57",
      "98f765939a07098f2452d44529db9028e90869b54d5362e0a06e0153db74aaaafcef3ba0e943d5da4f98bbdfe3ee7cbe27d7ac4cc88c442cbba941dc7dbce2113922a06886d1f24cdc78f0cb2baf376bdf1a5953bb48edc57c8e08d6b0242daa1c7a92d7220639dbacfb99e0754505e73d14ea99464fb7c6fa48d7edc9d0d4a7c89390a71e2baf917da954256783c1c1bb9f719ee5402b26fb312f1ee383dbd1a012fc0a6225072f2d07e822076f9b1ee73ca68af172be596301b504b18582b21c4b786226d19797d27d468b7e86e05b16038d635e97aa290b25625ea62cab45ab4a66f7a42df3d981ac1dcf5986da72b5f1c34f3b5a34e4dd678d4a6dbb1520eb5c695f83d5a9b6abd0eb924a903bede2bb13381a86044f590e5b96ecb4b976ac2dfc13ed09b8d33e3441cf3d75434dc76212908a956d29218d7268ca789896fbfa8e1a0255a8d325b7f6d0a2fa64388dd2c88ed3c9d88cd22144d124b24d3a8e86f1d400238980224f35ea2d8b96bc84e9d0a4863d06ddb6c09e8231490ccb30753d9d1a919ed8ba318c53339a90fd11f92b988213262b2e5937327211b8a1b30d838dbf5c844edb464a712c275d714d13cfeb54d82482dee86bdf641947a766feae1f3ac16219bae74e77e51e6434be5bdfe0a5a7349780682a68010ac4294f7068e46cb5764377e52f3c64b4f77876404832fb7dff4408efaa76caaafd365e96d1fa1f00e734af5bc46d77203ad9ef8ffeafb00e03d7fff6b604adb05b94f98328dcf24e81fcd838c14fd2850248414019bfbf01086e13ef3ed6c3cb412cbe1db4910aff71df62d998c402babd63",
      "45db65c79e18a6618c490b16ea55ced2478701371a8d221450aa878eba97d3ccab4dd5f21184495c17bf9dd4fe1fd853f119b9040000",
    ],
    [
      "ETag",
      "nPrqLeZLnkUSN62697mf7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d14fc23010c6ff97f3754b280aca121ec02c3232894c890f8690d2dde670dbcdb6c34cb2ffddebf0a577fdfaeb7d5fee025f459d4200c722ff6e51773739daad6b12346d690d97866a83e0015a9933f92b8c14eb557d7e16d1580bb9785fb7b3ed7cce84519f5849082e901558a606828f0bd4b242fe7638e8612263b66b9c126ddec2a73061a1a2d4099b5d1c2f967108fdbef7e044c70433d4582b74231b4d27543672698dac9a127d43ad5668608087875c53db484de4b3e24fee7c31bd156321ee1f46133163b024256d4135b3bb57601b4b569609fd7058100ce8a1e5dcd9709e599eba40fb7f74d959342f9ad8d7a0b31c5ded1fc945b21cd5ea163d509297b12aecf5deff010906dee969010000",
    ],
    [
      "ETag",
      "z1sa1JHnvM1I2r1aAWJu9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd3db7243400000d07fd9e7300d6bd0b7b86b08b50de5c5b82c1184b01164faefcdf4379af30fe701922cc3e31893aec617f00e968411e98cdef782a4dcab3a67e7ce9a3fd9f666655f76e1a4e4b072a5afb5babbbee58e4fe25ebb422b3a05cd51cf5686a0cb64ae2ef2cef28e4fb7e1d9b01a93c2bd429a6cd01bcd779abb3c9991ec571cb439a6a6a0bf389dcb0ceb189824357601552a08db3af2609a1b85e7d9a38c0ce7ea881d64a7552a6189d4b6845b89bfba7614c68b7b943ef2fda8926ff32694e141e478b73b2529c5d77d729e90102817a87a6da1ea15fdf2f27f810dc0735f0d788cabe7769613c50df8ab1f93a5c7cfff124e063c809f5fdc859f1c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-55-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "e3",
      "30",
      "10",
      "fc",
      "2b",
      "91ef95b609e9475aa93aaa12a0529b1e690a3a4ea7c87637c190c621765a21d4ff7e1b87722024788aed9ddd999dddbc9047916fc88830913e55503eff78908c9c10d034c5d73b7bd7775d7bed5d5e7b77850a2eaa3d0bf6e33122449da5e8b6c8a0a564557250a3f5aa9d96b22a6829650b0bb57abd96d3779d53c7197876cf19629e822c998bfc11b3efb52ed4a8d33972b75329d30c6821549bcbeddb7b6777da294af9005cabce47ca0eb2a8ced7a43f33c9a916321faf5728a05250c6b0a5224309ff3337ecec63e9b6a0db768ae09de040399755ae6b595882cb3c1169559aaa64f4428ccc7707b2f2e7fe34b2b8ccaa6d1ee7740b27d6866a1aebe702ac8b70b9b066c1c5325c4ca2d9328857d32b7f31694f97f3f5225859b7577ee85b9ab20c4cae35b6cecc2dc00bf26f4069911bf6a87eae995f0d9a7d1e4b9d80d40a9a603cb0fbd4f1ec214bd880279edb63890d8c796cd0a32eb3f9b00bdd0d038a7986d464d15ce61cba8875fbb1cbc089bbd4a5f1101216732f49921e1f0c5dbb470e27645f0a0de742155289c621721bce223f8ec275309d44be6921a155a6cf1b617503ef356a6c10415ff474a8a34222536df72c88fc70328d66377e33e139a4943faf9e70c609cd14209a96689e86722137681809260bff1cc16662bf8e4145467f5e48ed79ade29de56fe9110eb096abcd97aca270165c1a3947c40dcd2a03d9350752a0e47bec0d551ffe221297b4a942aed77ef89b344f212450029afced34116c02dffe6bc7c5472cae3ed2288d77dc1dae6a125e42b343c2b4fb9aed75fb4edffca99a96fa53ec",
      "74d03dba56d7a82bc21672fdda51b3f8d8684356a937100671fc8171ebf00f73954a6b78040000",
    ],
    [
      "ETag",
      "Z0v6330U8GQ8ZpsNFuwbNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10c6bfcbf97644a63070092f40514900f9b3bdd11052ba1b6c76eb6c3b9510bebbd78968d444dfac77d7dfb5f73ceb0e1e933c021f56c9faa944b53d59a399da6086ba1446d352c85c23388086ad894c2f269c37220c95e4e9783e3a0dc5ebfdb4d32142f30d660cfc1dc4098a4883ffb0839c65486d5c8a32cb9755e680d916b6380f6683f10de5998c6c3e0e87c36e6fd887bd736c8c9861cb8aff47db62ef402a57338c5161ced1ce5228992237032b53b3ac1058d3b2541c355470b5b156b22c9892b246955ab35973bd73f7cc755bed7ad3bd205048ce4c227362c339cd07461a2666f28554824780aa42121c57df672a275125c4868371e035aaf9be02345a9c085cfe0dd2bc1b46bfe1033b58f09d63992c7373a4ae8777dddf8e234f3f8fbaea06fd1f8436e4d4110906a3fe3ce88e26965b1cb4f7b606f5845e016a8dd643b7de68375b5efdddd64b69ada67b7ca34a7480337a1db789013f6642e3fe0d18705ebd7b020000",
    ],
    [
      "ETag",
      "j9Pcc4deUrocjNSM/UlxZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` != ? LIMIT 1",
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
      jobId: "grouparoo-job-56-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3010ff5798f765939af02810881475514237b43cda84f4354d893186ba054cb1495555f9df7740d3c7a6b59f3077bfc7ddf9fc886e591ea13e0a597257d1f2e1f30d0fd101a212271015dbe9f1557521ae4e4f2f735725173f7b32ba1f0c00c16a96c05991d28ee05549a8e8af96dda4e455814bce3b20d4b1ec8e6e1fea86aef71ccdd25de0099ac61396df02fb5aca42f45575efdd4d384f528a0b26ba8467cf71756ba845c96f2891427d6ba9828b50df373d4a39c192f17cb05a420195a0e59a6698a550c20b330abfbd95ee329c7513006f19a198105ee5b22e0b2408cf63965465a38afa8fa829f3d5012dbd89370a94d17c350bbe6c705693375f152c94f5baa4a24aa572bc984f954d015ed75850b151ce7f780b4f8150c96396d2358b36ca40395286b33144232ce946f9540726fed40f141d0a89a8902c6fca087098d2ba84a749f9ffde4f4dc012ccdae4baa7d9587734378cc31e899d432b8c351a864ed8b3f061a811d7a46614520c3c59ab372c9cf3dcb40f2dc33562d7d2b01993d034222bb61d07bbb66e86382436310c5bc7687780ee4b26e99889820bd68e0b9d2ffcc05b078bd56c340cbca68d18c348c66d717513afeb94d02480dee96b57671907a77af6fe2cf016c351e09f79ed754f6882c9c3f20e2e3cc6a9a080c625cea8a4e59447303474325ffa813f9f0d27c068eef0648f10a8ffebf185103c14cd9465f3adbd6cb3f1df03ce705a35886d7b403adaed0efeaf30ae47f0ae80a1195a47333aba054abf010a4bde8aa0d395b7b8446d6841635ad29c7cbc04006e121fbed5fdc3012c3c1db01112fe61e588a84d4849dbd56359d368cb764cdb716dd4804bf977aea719c67ec6b546ad48339acba78eda87538fac4955e2190449d898993ffb0e",
      "d93f09a6f2b8b8040000",
    ],
    [
      "ETag",
      "svMFZuXsZQQYn9/cXK7tdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "84",
      "40",
      "10",
      "86",
      "ff",
      "cbf455410b2f4fb80f67480972946504711cab8ee6a58eedae1d22fef766bdbeecccbefbecbc2f33c377d3971040ded43f23cae9a646fd629a14d5d86ac565a05e2158805ad44c3ae57be5fb629bf61fd9a50c73c729e361bfdb31a18a2fec040433540db6a582e073865e74c8df4e27b94e644c4f8351e2c35bf418a52c74541ae19025c93e4c22588e8b0567ca53ac50625fa01939483a63a1639356896e68d15634ca0215acf0fa504b1a0721896c566c6f63bb9b3bf7d675ef7dc773b70cb65408dd50cf6cf60a6ca3498b36a50b87059701b9b69cbb5acf5f963d13e8f88f869346f52c897d151a4be76aff402692e6a85a8e68412178194f8dbede973f6cb5e49b69010000",
    ],
    [
      "ETag",
      "0dVf88a9RnXUwdBb00dIpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4d7282301800d0bb642d0c2055e94e11b46018f911b11b26840fb508442242ecf4ee757a8dfaeef0be11a114384f6f4d09357a478268864c6597cd16cbfe8b783851c5447ae8a1f5a16345aa36c5e4b89cc6c1a50dd495ca2db80fea01f7e0143ee79d4294962656163a459e33d39bd738c9077d6e61ccad52e38738af443e4810378c073b9f9dab2052c835567d56da34e664bd1edbaae67e66a72c4b4577c1e53ef0bcdad6a8e4b495e3337d71a0bd79cab40d44acde837deccc3489447822bdd91b7757eb96623b63d93d29ae76b1d3c3be822d99768d89d72bf9e5e5ff422304033bb7c0d3f373fbf8cd3046e8af7e7a130c9eff17405a68d1cf2fc7fcc8dc19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:07 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-57-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6fa24014fd2b64f6b58a161135315b63e9d65dc55dc09acd664386f142a7050699a18d69fcef7b196ab74d93f60598b9e7dc73ee074fe49e173b3221314ff73554872f7722266704144df196b2c77d7ac8bfa7f7f58f41badd9ad67ab99e4da788e00d4bd2bccca023455d3190934dd04d2b5197b412a283893ab6d3e90fadfe79bfef8c7a767f8c3c0959b2e4c53db26f952ae5c4344fdadd548834035a72d965227fb9371fcecdb21277c09434df4a9aa822cd8f45bf668251c54531dd0468a096504590539ea185ffcc5d7cf1367597d3bc9b22f88133a08c89ba508d2d4cc14491f0b4ae7456327922dae6ab0f12b84b771e1a4c64755e4405cde1ccd85145237528c1b8f2d72b63e15dadfdd52c5cacbd28985fbbab5977be5e6e565e606caf5ddf35148d33d05c636a5ce8938707d4df8154bcd0ea6173dd283f3768f17e2c0d01a525b4c1c8e90d697fd41bc749ecb06464d971d283381ec58e4dadb8c7c60318ec62a0c8d3a29a450b51b024198e9c1e44c978c8a2411f1fd4b6cf23b00660ed9c31066d723c238f155770c96529246f3b44b6fe2274a3d0df78f359e8ea12125a67eab235d614f0daa3c20211f4414dc726ca052a35ed5e78a1ebcfe6e1e2c66d27bc8494b243b0c71927349380685a61f314542bb1c386116fb6722f11ac27f6f3149464f2e789343d6f5cbc6af90b3dc4013676957e9320f417de376de784b8a159ad210fed0729d1f22dd686ae8f7f11894bda6621bf36aeff9bb4573e245041c13e9f268275e0d37fedb4f888c5d54719a9f08cbbc36423c22a687788eb729fd9a381635b43a2c1957a171b3ad6a96b4d8e2623e450a8e78adac5c7425bb15abe803088e3f774b78eff004dfc78c278040000",
    ],
    [
      "ETag",
      "acwqgymJgkuK4gWW/3OLOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd4ec2401085df65bcb44d284281265c144520f227941b0d214b3b2dc5b65b77b71224bcbbb315d1a889deb433d36fb6e79cf6004f71168003eb387a2e50ec2f2254f7ba98a12c1225e996f34c2218808a4544b6c6d6a8b85c3fdc6569de0b5eab9d49bf3ad9b5db44487f832903e700618c4920c1793c40c652a4359f27459aadcace00b5cff570eecd06e31ef5290f743f5e0c876e67d885a3715e0c9862ab92ffc7daf268c096af6718a2c0cc47ad25177c8bbe1a689b92a57982a6e485f0514209970f22c18b9c09ce4d9a98f58669d95756d5b21acd4add6a1198709fa99867c42ee6a40f14572c99f11db9049b00519664382caf2f348e83d2882e0763cfae95fabe02242d8c135cfd0d92de0da3cff0819d22f8ceb19417993a53b7c389fbdb7194e9e75137aed7fd414845499d116f30eace3d7734d5dcf2e4bdb35728a782539012758656a5d6ac37ecca7bacd75c474def719428d0009fd1dfd18f1538214b241edf007c38de537b020000",
    ],
    [
      "ETag",
      "9N1Mu+bZKnmpGdz2BOH2Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` != ? LIMIT 1",
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
      jobId: "grouparoo-job-58-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535b6f9b3014fe2bcc7bd9a42618120889147551ca3ab684b40969b54d5362c050af802936dda22aff7dc7d0f4b269ed13e89cef726ebe43d7ac88d108852cbda969b57bfb9387e80851495288e6feacbc185c9f4e5c776796bbdf5fc867fd3c1d8f01c1144b90bccc6847f0ba8aa818ad57ddb4e275492ace3b20d4b19c8e61f70cd330060eb68c21f004cd92192bae817d25652946ba7ef0eea69ca719252513dd88e70f71fdd6d4cb8affa49114fa734b1d5c84feb2e971c62322192fc6eb1514500b5a6d684e5806253c32e3f0c373e92e23793705f02d8b2889225e1752950512112f1296d655a38a4677a829f3c90f5ab933771a68d3c5da0fde6d49aec8dbf71a11da665351516752fbb85cccb56d095e574450b1d52e3fb94b578350c51396d10d8bb7da583bd626fe09448584eab6da1b159979732fd00ca824a642b2a2a923206146550df7a3f2fe5d902210096e6d7233c036311c3c0c937010254ecf0a134cc3d0090716e985381af6693f0e29019e54ea0d8b14bcb0621ce2411c5b466c008b240eee9b519210426c33199ae6a01f9ad88ed1fe08fdaa98a4274c945cb0765ee872e905ee2658aefde924709b3612023339698b534d3cad534293007aa1afbdca320e4e6af89e1fb8cbc934f02edc76df339a9268b7ba818d27241314d0a4223995b49af3188686ce162b2ff016fe64068c668967078440a3ef778f846057365396cd5779d9fdc6ff00b82059dd206edb1f64a0fdfee8ff0a81377757c1647ef6b28a894ddcc166c7b002c31c19bd91d1ef628cbf81f80f20c2e1b7bae87ced2ebfa236b4a409ad6811bd7e17006e12afbedfc363022c3c27b081c3940cae3012ca24aa687b8d2c6f7a6fd94edfb12d8c1a7025ffca81ae8d0f63571a4a91e6b490f71db58f494db149d5e20104493822dff34f21fb0705c58169cc040000",
    ],
    [
      "ETag",
      "mNLpV7kGAEEy2pyxKaJ/Qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90414f83401085ffcb7885a4aba122490fb6215a4308a23d99a6d9c28020307477d120e1bf3b4bbdecccbefd76decb4cf05575390470aecacb806abc29d1bcda26453d344673e9a9d3080ea0912593755cee2eb856fa85aae490f4912fc56fb9d930a1b34f6c250413141536b986e063824eb6c8df4e27b54c64cc8cbd55f6f17bf814a62cb4945b213e44d1e3360a613ece0ed4744eb140855d867664afa8c6ccec6d5a2ddbbe4157d3a032d4b0c0cb43a968e8a5227259713ddf15eb3b712bc4bdbff2c403830d65d254d4317b7803b631646493d20f8705c1805a5ace5d2ce737cb9e0d74fc47b7a3419d28625f8dd67275b5df918d6438aa51033a90495ec67365aef7f90f06d9e14269010000",
    ],
    [
      "ETag",
      "jNgCqe6rsJoiPUPpL8a1zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ffedd34b7282300000d0bb64ad4c138436dd0111181c21454061c320869f964f8803b4d3bbd7e935eabbc3fb06599eb3714c4577652d78074b86b0944bbbfe4d275333bff8ea820472cb8eca8ae805277b156f20e146381a3a9a52882367dbf42eeda2d78a8443e0389487b4c64d87f2a29ce2cbad54f56c84548bc94cbd4e208b91203c6fcf4971a812f6e52955fcb1dfe4a552b7be668a399b4ad54e482230e98fca0eb9767db1340aefcb6db8a6431c40b8bbf268ed34fef1669629de925383d6817952a33110c6a6f6bdf6d3f464a7b003cdaaeef6cc0b189fd8fa60494f4fff17580136f73567635a3fb6cb0ac62bf0573f154bcf1eff759671c6c1cf2fcb82e0a519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-59-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8553db6ea33010fd15e47d6d2ee44a22455b94d02dab846c096955ad56c89881ba25986293a85be5df77304db755a5f609db7366ce9933c33379e0794ca624e2e96305e5d3b77b119133028aa6f86affb4977ff7b95a8c96ee61ed5cdd2afbc00eb31922789d25e9aec8a02545553290d3eda69d96a22a6829440b0bb586939639ea9b3dd31c5bdda139c13c0959b2e4f90366df2955c869a773e26ea742a419d082cb3613bbd7f7cebed7294a710f4cc9ce7bca0eb2c8cee7a4df33c1a8e2229f6d3728a0925086b0a33c4309ff33e3e8fc7de936a7bb768ae03d6740191355ae6a595882893ce16955eaaa64fa4cb4cc3707b27196ce3c3098c8aa5d1ee6740767464c150dd55301c685bf5e19ae77b1f65776e0aebd7033bf7456767bbe5e6e57dec6b8b9747cc75034ca40e71a33e35cdf3cbc207f0c52f15cb307f573cdfc6290fb712c7502524b6882e1b83ba2a6d59d4449346689d51f464917a2c88ac643da8fba6c3280411c01c53c4daab3682ef271ccd04e6a859378300e07bd1e9ecc1e0d693f4e201a4134a009399e9143c9152cb82c84e48d43e4c67703270cfcad37b70347b790d02a538b4658ddc05b8d0a1b44d0273d1deb2817c854dbed7a81e3dbf3c0bd769a092f21a5ec69f388334e682601d1b444f314942b11a361c4b357ce02c17a62bf4e4149a6bf9f49ed79ade28de5afe9010eb096abf4976c02dff57e683927c435cd2a0dd9370752a0e43bec0d551fff201297b4a942aeb68e7f4b9a271f122821675f4f13c13af0e5bf765a7cc4e2ea238d5478c7dd61b2266125343bc475bb2fd9d6b037ec5a44834bf52136ea9927d7ea1a7545d841ae5e3a6a161f1b6dc82af90ac2208edfd36e1dff010773eea078040000",
    ],
    [
      "ETag",
      "AJALzvntD6LIwOEQYtAwcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92414fc2401085ffcb78b42414a140130e55503005114a3c184296765a8adb6edddd6a08e1bf3b5b118d9ae8a59d997eb37defb57b784af3085c58a7c97389727796a0be37c50c55c9b5a25b21728560016a961039b11bcc6fe5fe90d7cbeec3b9ef2d6efb9ed7eb11a1c20d660cdc3dc429f24881fbb8879c65486ba1e06596afaace02bd2bcc701ecc46931bea3311997eb2f07defd21fc0c13a2d464cb355c5ff636d79b0602bd6338c51621ea2d15248b1c5508f8c4dc5b282634d895286a8a082ab07891465c1a410359ad45add9aed5cd80ddb6e77ea2dbb4b201721d3a9c8895dcc491f68a1199f895772090e01b22ac9705c5d5f689c469511538e2681d3acf47d05485a9c725cfd0d92de0da3cff0811d23f8ceb14c94b93e51d7fe9df7db7194e9e7517d2f18fc2094a6a44e48301a0fe681379e1a6e79f47eb9d3a8a65250900a4d8676bdd969b59dfa7bac57c2444def71b52cd18290d1df314c35b831e30a0f6fe886c8857b020000",
    ],
    [
      "ETag",
      "N12aL5nLHl0u9W+LAUJDAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` != ? LIMIT 1",
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
      jobId: "grouparoo-job-60-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536d6f9b3010fe2bccfbb2494d8042121229eaa2946e4869d225a4d5364d893107750b98daa65555e5bfef80a62faad67e0ab97bdeee6c3f906b5ec46444229ede5420ef3f5f89881c10d034c52acbae9cc9d0648519c9414f9c9c2d7e8b64321e2382d72c45f332838e129564a046eb553795a22aa914a283429dbed5b1fb8e7d68db03cfead943e429c892192fae917da975a946a6b9f7eea642a419d092ab2e13f953ddbc3d344b29ae806965beb634d14599ef9b1e658251cd45315eaf3040a5406e20a73cc308cfcc38faf65abacb69de4d117ccb1950c64455e83a164a3051243cad64a34a460fa489f9e283acfc993f0d8de9623d0fbf6c695e93b75f0daa8ccd4682aa326d9c2c17a7c6b644af4baa406d8d8b1ffed237b02445c233d8f0786b8c8d2363323fc6eaa386f1a92ecd82d320346c8c1283d2bc68828434caa00ef1b8abe0ed09d504aad1ae6d6e06569fda9e358c9268c012cfe945890551e445831e75228b0d5d70e30828f274addeb068210a9ad0d8b300fa9e4ded28717a49ecba8e9538ee009c439600b5ec280620bb037227b98663ae4aa178bb3072b10c427f132ed7f3e924f49b31128a4b396ec3d543bccca9714804bd33d7aeee72814ef5f68379e82f27d33038f7db039f414ad9fdea068f3ca1990244534973d0204f458c4b23678b5510068bf964868ce614cff60845467f1e9e09e17dd96c5937bfb557df6dfcf780739a550de2b6fd2036d9ed0efeaf70325b4c3ed6e8f610b1fb8b20bce3ad02f9b9f697bf485b5a4202120af6f10d4070d3f8f0a9eedf0d62f1e5a08dd2f81fef1b53b50993d0de3b9e37095bb6d7731cdb250d58ea373dcf72f70bae356a45c8a1d08f13b5efa6de57d3aad413089b785de6c1fc3b76ff013f0868a7b7040000",
    ],
    [
      "ETag",
      "clj3A9/cn/br75oFPOZofA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "3010c6ff97f3d12d59a7a090f0300c110c4198101e0c215d39e670ebcdb6d3e0c2ffee75f8d2bb7efdf5be2fd7c267a10f3084acc8bf1a34e79b1cddca3729daa674964b4dda2204804ee64c6e6f7f17f1325bc722d9be0e689af434bdac462326acfac04ac2b0856381e5c1c2f0bd052d2be46ffbbde92632e6ceb557668bf5e47992b250d1c10b8bcd7c9e8ce713b8ec2e019c284bf18806b5423fb2367442e5663ead95555d6268a9310a2d7470f7901b6a6a69884256c27e148afe9d888578788c7a62c060494aba8234b39b37601b474e9629fd7058100c98aee5dcc7eefc66f9de07dafda3e3b343bb34c4be16bd6574b57f221fc97154671a0c40495ec6b470d7fbe50fca1e5f4269010000",
    ],
    [
      "ETag",
      "W+zN2PbT21AWO9oHA5noJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd3497282400000c0bfcc592c4410c86d0406088b4082c45c2884914564d864b3f2f758f946ec3ff40344718cbb2eecc91557e00dcc1123aee3b5510b7b792c3e783f55d0005d3627544269c31122dac9ba9698a7fa687d17864ee70abb1354683059caa470a84eed8c769089de3719d313cf50918f183e9ab729b6884bfb5d692ad7448a16bd69b8218f4d2764a79b6d5163e1ea182e97c4d76233276ee5681efc1af47b232d54e57a369d8e5c803ba7941d641df7079bd733831364fdac5878b91cf8a9b82714e70908065eaf05a574903ecfe25812f5e68d9bcd28a1f5cbcbff0556004f75dee22ecc9fdbb79c28aec05ffdb09f6bfcfcbfc7518b5bf0f30b4ba1479d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-61-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da3c48202191a2354b691b29900d48aa6a9a90712ed42dc1149b4c5595ffbe8b69ba5695da4fd8bee7dc73ee8367f2c08b1d999284678f35544fdfee4542ce08289ae1ebdc756824b6a307f163eb8526bb0a6fcd41369b2182372c49f7650e1d29ea8a819c6ec26e5689baa495101d4cd419991d73343407a63976fab639419e843c5df1e201d9774a9572daeb9db4bb9910590eb4e4b2cbc4fef5bd7718f4ca4adc0353b2f75eb2872ab2f7b9e8f75c30aab828669b100dd412aa18f694e768e13f73979cbf4fdde574dfcd107ce00c2863a22e54630b533051a43cab2b9d954c9f89b6f9e6404277e52e228389bcde177141f77066eca8a2b17a2ac1b80cd69eb1f42fd781378f966b3f0e17d7ae37ef2ed6ab8de787c6cdb51bb886a2490e9a6bcc8c737df3f182fa3b908a175a3d6a9e1be597062d3f8ea521a0b48436188ffb236a3afd49922663963a433b49fb90244e32b6e930e9b38905d62e018a3c2daa59b410c5703030adc92889299ba4b1351a43ec50db8e6ddb1af4cd31b59d89498e67e46fc5155c70590ac9db0e919b6019b971146cfcc53c72750929ad7375d11a6b0a78eb51618108faa4a66313e502959a762ffdc80de68b68b975db09af20a3ec297cc419a7349780685a61f314549ed861c3883ff7dc0b04eb89fd3c052599fe7e264dcf1b176f5afe4a8f70808d5da5bf248c82a57fa5ed9c105b9ad71a72680fa444cb77581bba3efe41242e699b85fcdab8c12d699f0248a182827d3d4d04ebc097ffda69f1118bab8f3252e11d7787c94684",
      "55d0ee10d7e5beb01ddb1a0ef49faa68a53ec42c6b78ea5a93a3c9087b28d44b45ede263a1ad582d5f4118c4f1fbba5bc77f6340600178040000",
    ],
    [
      "ETag",
      "AE8aToV6koBVMS1cGSY12g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92414fc2401085ffcb782d095528d0844351d42605118a1743c8d24ecb62dbadbb5b9410febbb315d1a8895eda99e937dbf75ebb87275ec4e0c28aa7cf15cadd598afade14535455a615dd4a5128040b50b394c86197f3575fb75653dcf482207dd8623a4efb7d2254b4c69c81bb878463162b701ff750b01c692d12599517cbbab340ef4a339c85537f7c437d2e62d38fe741e00d82211cacd362cc345bd6fc3fd616070b3682a42528b188d06829a5d860a47d6353b1bcccb0a14425235450c3f583548aaa645288064d1a8eddb09d0bfbdcb63bdd66dbee11988988692e0a62e733d2075a68964dc50bb904870059976438a9af5b1af3b836624a7f1c3aad5adf5780a4253cc3e5df20e95d33fa0c1fd83182ef1ccb4555e813751ddc79bf1d47997e1e75e585c31f84d294d40909fdd170167aa389e11647ef839d4635918282546832b49bad6ebbe334df63bd14266a7a8fab658516448cfe8e5baec14d58a6f0f006d56d74f57b020000",
    ],
    [
      "ETag",
      "E8iixIt4bRej9LLgVvegNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-62-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffc553614fdb3010fd2b962704686dd3002d50a9628c665ab4d0b2342d42136adce49a1a92b8d84e2586f8ef3b3b148698d8877dd8a73877efdd7b79be3cd05b5ea6b447e73cbbab40de7fb81173daa0a05986d59f51b2e437797b39d89fbabcbd4ed79da38f59bf8f086e588a15ab1c9a4a543201d59b8c5b9914d58a49219a38a8d9dd6bbadd7d77cf750f8fda1df718790af245c0cb5b642fb55ea99ee36cb45b9910590e6cc5552b11c573dd59ef392b296e20d1ca792de9a08a72de173dc945c23417657f3246039502398382f11c2dbc30d3f9a7d7a35b9c15ad0cc16b9e004b125195dad8c2118928173caba49d4a7b0fd4dafced40c75ee09d45e46c3419463b312b0c39de254c91d94c82aa724dbe84a37312af506bc914a8985c7ef5428f60498a05cf61c6d398f4c909391d0e080946975eb813636d9704fe370feb817fee47c4453f292c188e1c308d93b4f191d647df5c9206a511f494a0fff6dee8a3e97221b936defd61e485a767913ff5eab802c858723fbec3c0162c5780682659011ae4b948012917a3b11ff9a3e169800c9bc1c506a168efc7c30b21ba5f8131a8edd368750facfe063065796511ebfa405dfaf8d8f8a7095b6e670b875c2308f7a3e6d3ef132fbca275298405482813cb7a27270bb68dbfaef966e7108b5b87324ae3bbd23c5146249160db112fec37d6eca34ec7edb6a9054bfdb6777c687ecd32fd63e749a3b2f3414a2143bb68e615d594f5c24b0c057fdd062d40299699319312bf44019be740ecdd91e728491c135e12133589a3ab0b6f66e38e1be4334bb1a3bb07c4a6dc2326e4cd79dbbc6c1b47d647bd02ffc9c3751d8b11198c861eeec12f43c23158f4040000",
    ],
    [
      "ETag",
      "zTchijl0hD3V1i0vdv58+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "8b08000000000002ffedd34b7282300000d0bb64ad8c2650497702b5620d6a948f6c988041280209a0423bbd7b9d5ea3be3bbc6fc09284b76dd4d505afc02b1818c44aa27c08ddb0eee7c01efb93c52d92837e8006e3279f7969b7b06c2b93aebf87ef011fe0ac27d8f6e871522522282b68cdc24d56c27d49cd3a701093ee703b7293aefa22b4d956932e4e6145e3b7ca8eb3b9c3775a868490eaa5272f7d475472b8cb3254d378cbcae2c235fdb4539d1691756ca0554de7a1c3e93537e18c2d3753dc95534cb3c9d85d7b8d68fb7dee21d3d1037426fea2f93aa16b213f976eb14c09c561ad3c3dfd5f6004782ff286b751fed88e348c47e0af7ed40d823ffe1b9c35bc013fbfb8350b8719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-63-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b4fdb3014fd2b91f771d0264d1f69a56a941220a84db734854dd31439ee4d30a471889d0243fdefbb71280321c1a7d8bee7dc73ee234fe496e76b3222314fef2a281fbfdc88981c105034c5570857dbe3bbfefc21fe7ae13d1c9f25177f7f2eeec76344f09a25e9a6c8e0508aaa642047ab652b2d4555d05288434c74d8b70fadbe6d752c6be0983d6b883c095932e3f92db2af952ae4a8ddde6bb75221d20c68c1658b89cdcb7b7bdb6917a5b801a664fbad641b5564fb63d16f99605471918f574b3450492823d8509ea185ffcc757cf436758bd34d2b45f09633a08c892a57b52d4cc1449ef0b42a7556327a22dae6ab0359ba33771a1a4c64d5268f72ba8103634d158dd46301c669b0981b9e7fba08e693d05bf8d1727aeece27ade962b69afb4be3eadc0d5c43d13803cd35c6c691bef97841fd3548c573ad1ed6cfb5f27383bcf763a909282da1094603b34f2dc71cc6493c608963f7e2c4843876e2418fdab1c9865de8ae63a0c8d3a29a4573ac79c82c06b11d99b6b58eba3ddb8986b1cda26e97766cb3433bcc76c8ee80dc975cc109978590bce910b90abcd08dc260e54f27a1ab4b486895a993c6585dc06b8f0a0b44d00735edea2817a854b7dbf34337984c43efd26d263c8394b2c7e51dce38a1990444d3129ba7a09c8b35368cf893b97b82603db1effba024a3df4fa4ee79ede255cb5fe8210eb0b6abf4972cc3c0f3cfb49d3de2926695866c9b0329d0f235d686ae777f10894bda64213f566ef08b344f01245042ce3e9f268275e0d37f6dbff888c5d54719a9f08ebbc3642dc24a687688eb729fd94eafd7b36ca2c1a57a17eb9bcebe6b758e3a236c2057cf15358b8f853662957c016110c7efeb6eedfe01abcb703a78040000",
    ],
    [
      "ETag",
      "eTUvBq6Mxb+JIxBGfJzXOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcbf85a122a50a0090f45104900b9146334842ced148a6db7ee054208ffddd98a68d4445fda99e937db734e7b8497380bc18555bc7ed5280e576b5413534c51ea4449bae53c930816a0626b22c7bdb1ee3c56b6a38ebd6b3e1d74751fd80f93568b08196c3065e01e218a310925b8cf47c8588ab416f044a7d9b2e82c5087dc0c67feb43fea519ff2d0f4a3f960e0b5075d385997c59029b62cf87fac2d4e166cf96a8a110acc02345a72c1b718a8beb129599a2758925c8b00251470f1602db8ce99e0bc4493925329d94ec5beb6ed7aa35cb39b04263c602ae619b1f319e903c5154ba67c4f2ec121401425198e8aeb8ec671581831657fe43bd542df5780a4457182cbbf41d2bb61f4193eb07304df3996729da90b753bb8f77e3b8e32fd3caae3f9dd1f845494d405f1fbc3eeccf78663c32dcededb0785722c380529d1646897ab8d5add29bfc77ac34dd4f41e57098d16048cfe8ebb58811bb144e2e90da16bb6b67b020000",
    ],
    [
      "ETag",
      "PGPuDX3jND1v9Zyu4wc1VQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-64-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85537d6f9a4018ff2ae496265d561510154d4c672cdbc8acb688ed9665d1031ee8adc0d1bbc3ad6bfcee7b80da97346bffe2b8e7f7f2bcdd1db9667944462460c94d09e2f6dd2f1e9023028a26782bb20fd7b615ff11dba13953ce5f3331bfa5e7e3312258c592342b5268495e8a10e468b56c27829705159cb750a8d5b75a46bf6b988631b0f59e31449e84349eb1fc1ad9574a1572d4e9ecbddb09e7490ab460b21df2ece1beb3353b85e0bf2054b2f3dcb2832eb2f3bae971ca43aa18cfc7ab2526504a106bc8284b31854766147c7c2edd66346b2708deb2106818f23257555a2811f23c6649296a5532ba23759a4f0e64e9cc9ca9af4d17abb97fb8a15945debcd7a8d4d66b01b24c95f6c95b9c6a9b02bdaea804b9d12ebf389ea3e195e0314b61cda28d36d68eb5c9fc44d3668b4bc73b7c80a3d6ccfdea6074e69ebabe6660561148c5f23a279f062954f9dcb7cd7d39ac8a40154a35c1f540ef53c3d687411c0cc2d8eef682588720b083418f76033d1c5a60450150e4a94abd66d19ce75d93821e776d0ba27e1c19fdc00c4d73689a10f7221a585d5db7eda11e0dc8ee88fc164cc109930597ace91db9f45cdf59fbde6a3e9df84e5d464cb13f274d7255114ff3545824825ea96b57451947a76a10eedc77bcc9d4772f9c66f633486878bbbcc1e9c7349580682a68060ac4298fb069e46cb1747d77319fcc90510ff46c8f9064f4e3ee91e0df16759755fdadbcfa56edbf075cd0b4ac11dbe6400cb2db1dfd5f61e97beefcf3eb1207b4280e50e627a270dd1b0572be72bcefa4b9f220060179f8f60620b80ebcf96af74f08b1f888d0462afcc77d0b6565120a68f68e6575950ddbeef5cd9e496ab0502f62dd81b56f70a551294206b9baafa8794255bfea50291f4018c47599d79ddafd03ad75ddf7c2040000",
    ],
    [
      "ETag",
      "rm+k84fxrv92LtEz2g2XlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d90614f83301086ffcbf9159215e7d425fb2048740999035d4c34cbd27537c6040edba2d908ffdd2bf34beffaf6e9bd6fae83afa2dec114b645fedda23e5de56853d76468dad21a2e0dd506c103b4326732d2c9e145058f4b3cbfa7224cc67174fe486733268c3a602561dac1bec0726760fad9412d2be46f9b8d1e2632664f8d53e68bb7f829ce58a868e784c52a491ec224867edd7b70a46d867bd4582b74231b4d475476eed21a593525fa865aadd0c0000f0fb9a6b6919ac867c59f8c7d31b9168110b777a31b71cf60494ada826a6657afc03696ac2c33fae5b02018d043cbb9f7c3f9c372e002adffd1f064d12c35b1af416739bad847e422598e6a758b1e28c9cb782eece5deff019458ad9f69010000",
    ],
    [
      "ETag",
      "CrLhOc2DPezWQ1BL4ECzZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd34b7282300000d0bb64ad0e0441e88e0c54cb57d00ab2612084126c10092d1fa777afd36bd47787770719c684f3b4bf5e48035ec094416d855776ab2263a8de20be75ee7438f81dacfcd180e589387e60bbcb84693e66af83c4b6304a60b92d902e0adcc99add8ce7413de6554fe37dcbcedc96cd424ec775884adffb708fb9ea8e9144f3f0f2257dda01b5ced63bab0d6b820c9a440c8c2cba2686c7d5f58d77df7b3d65c8a0f694eb4153ed86b86cc43a7484254a379199cc4bfd54388210a958a1721c62a4151b45aa5a258e04a70ebdaa60367459eb8e87d92a564f4fff17580032b6b4233ca58fed92ac690bf0573feda7963cfe239275a4033fbf7b258d9519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-65-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d6f9b3014fd2bc87b6d1268424222456b94b23553433a425a6dd3846c73216e09a6d834aaaafcf75d4cd3b59bd43e61fb9e73cfb91f3c913b5124644298c8ee6ba81e3fdd4a464e08689ae1ebfee7957b6bebed37ed5c24e55dc4ca6cbbdf4fa788100d4bd15d994347c9bae2a0269b7537ab645dd24aca0e26ea0cdd8e33ec3ba78e33f26cd719234f419e5e8ae20ed95bad4b35e9f58edadd4cca2c075a0ad5e572f7f2de7b38ed9595bc05ae55efad640f5554ef7dd1cfb9e4540b594c376b34502ba862d85191a385bfcc849dbd4ddd1574d7cd10fc203850ce655de8c616a6e0b248455657262b993c1163f3d581acfd4b7f1e595ce6f5ae880bba83132ba19ac6fab104eb4bb85a5a8be0cb2a5ccea2c52a88d7f30b7f39ebce57979b65b0b66e2efcd0b734653918ae35b5cecc2dc00bea27a0b4288c7ad43c37cacf0d5afc3f968680d20ada603cb287d4f1ec314bd988a75edf65a90d8c796ce4d23eb3f97800838401459e11352c5ac88225763ab4073cee3bcc8d0760f3989ef6bd78ec8d3c3e1c0f52e6d9e47042f695d0702e542995683b446ec245e4c751b809e6b3c83725a4b4cef5796bac29e0b5478d0522e89d9a0e4d5448546adabd08223f9ccda3c5b5df4ef81232ca1fd7f738e394e60a104d2b6c9e866a29136c1809664bff1cc1666257c7a022935f4fa4e979e3e255cb5fe8110eb0b1abcd97aca370117c35768e886b9ad706f2d01e488996b7581bba3efc46242e699b857cdff8e10fd23e8590420505ff789a0836810fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca7d667beed01b39c4802bfd6f0c97c73d76adc9d164841d14fab9a276f1b1d056ac562f200ce2f803d3adc31f856fbcef78040000",
    ],
    [
      "ETag",
      "wZP5j0thJt1HdpkTbpghww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d925f53825010c5bfcbf68a9398a231e30396958dffc5876a1ce70a0b62c0c57b2f36e4f8dddb4b664d35532fb0bbfcf672ce813d3c47a90f36aca2709ba328ce4254135d4c51e6b19274cb782a110c40c54222fd6d519b8c506ddd8dd7792d1e77e1f9c3fda4dd26427a6b4c18d87b08228c7d09f6d31e529620ad793cce9374597606a822d3c3993bed0d6fa94fb8affbe1bcdf773afd2e1c8cd3a2cf145b96fc3fd6160703367c35c50005a61e6a2d99e01bf4544fdb942cc962ac489e0b0f259470f920143ccf98e0bc42938ad5a898d6855933cd66abda302f098cb9c754c45362e733d2078a2b164ff90bb9048b005196643828af3b1a477e694497bda16bd54b7d5f01921644312eff0649ef9ad167f8c08e117ce758c2f3549da89bfec8f9ed38caf4f3a86bc7edfe20a4a2a44e88db1b7467ae33186b6e71f4de2914cab1e014a4449da159adb71a4dabfa1eeb15d751d37b6c257234c063f477dc450aec80c5120f6f5e5672047b020000",
    ],
    [
      "ETag",
      "dqy2QOetqTjcBzyZvg/YJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-66-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f",
      "9a",
      "40",
      "18",
      "ff",
      "2a",
      "e4",
      "96",
      "265d561550114d4c672cddc8ac76886db665d1031ee8b5c0d1bba38d69fcee7b80da97346bffe2b8e7f7f2bcdd03b9617944462460c96d0962fbe99a07e48880a209de6e6df3deb93ad57d4bbffafd4d645feead209c8cc78860154bd2ac48a12579294290a3d5b29d085e165470de42a19665b50cab6b988631b0f5be31449e84349eb1fc06d9574a1572d4e9ecbddb09e7490ab460b21df2ece9be7367760ac1af2154b2f3dab2832eb2f3bee971ca43aa18cfc7ab2526504a106bc8284b31856766147c7d2ddd66346b2708be6321d030e465aeaab45022e479cc9252d4aa64f440ea345f1cc8d29939535f9b2e5673ff7043b38abcf9ac51a9add70264992aedd45b9c699b02bdaea804b9d12ebf3b9ea3e195e0314b61cda28d36d68eb5c9fc44d3668b4bc73b7c82a3d6ccfde16074e69eb9be6660561148c5f23a279f062954f93cb6cd7d3bac8a40154a35c1f540b7a861ebc3200e06616c77fb41ac4310d8c1a04fbb811e0e7bd08b02a0c853957acda239cfbb26053deeda3d88ac3832acc00c4d73689a10f7231af4baba6edb433d1a90dd11b9174cc109930597ace91db9f45cdf59fbde6a3e9df84e5d464cb13f274d7255112ff354582482dea96b57451947a76a10eedc77bcc9d4772f9c66f6334868b85ddee2f4639a4a403415340305e28c47d83472be58babebb984f66c8a8077abe474832faf3f04cf0b745dd65557f2b2fab57fbef0117342d6bc45d732006d9ed8efeafb0f43d77feed7d89035a140728f31751b8ee8d02f9b972bc5fa4b9",
      "f220060179f8f10620b80e7cf86af74f08b1f888d0462afcc77d0b6565120a68f68e6575950ddbee0f067d8bd460a1dec4865d63dfe04aa352840c72f55851f384aa7ed5a1523e813088eb32af3bb5fb07d0572fd9c2040000",
    ],
    [
      "ETag",
      "y82wEhF0T60hZGrm+w6bcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd4ec2401085df65bca509c558b40917621a2522910a096a0859dae95a683bebfe684ac3bb3b5bbcd9993dfbed9c93e9e0583639c4b02fe5b743dd5e49b44bdfa4685c650d17458d4118005a21995c3eab7a234feee524dd7b1e99f1ec63759493091326fbc25a40dc415162951b883f3b68448dfc6db7d3fd44c66cabbc325bac92c72465a1a6dc0b8bf57c7e3f9d2770de9e0770a07d8a056a6c32f42395a6036676e6d31a51ab0a03434e6768a087fb07a9c929a189025682280ac2e83a1c85e1f8767813de315851266c490db3eb37601b4b565429fd72580819d07dcbb98bfefc6179e4036dffd1696bd1bc6a625f83de7278b17f201fc97254ab1d0e2013bc8ca7d25eeee73f3d94422069010000",
    ],
    [
      "ETag",
      "QKpmXgzuMzguYd6s7IZTkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd3516e82300000d0bbf45bcc043adbfdc1500157130504fc21050b82085d41a598dd7d66d798ef0eef016896b1ae4bfaf6cc1af0012455f1349bae3932ad7bc1234ef530f2cf398eed61177ba8ba594b2cdaee140b4d79cf74d5084224ab235c207238fb32baf46928aafc602cd624f8e62472735e5ddb58ac08af137232929952c363b4e1e92e9b9b01b2e7330f6a9b61b03525a6c60dc64eaadf8bc6913d529678bebed53aa16931524950543237d767fbc6df97f0e2d6d538aa8e4ac967b154e0dbd7d8eec2d388b5d6da3b9e63cad536dfb6beeb1ed175736fae893d7d79f9bfc004b08197827549f9dcae418c27e0af7ed24bce9eff4d460513e0e7174a4718a419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-67-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbb8e6415e9048d19aa5748d94908e9076dd34211b2ed42dc1149b4e5195ffbe6bd374ad2aad5f00fb9e73cfb90f9ec83d2f1232218c670f3554fb4f77829113028a6678eb38f5fdf9ec47f7e7e55e7cbdef435a39379fb3e914115cb324dd9539b4a4a8ab18e464bb696795a84b5a09d1c244ad91d3b2477dbb67db8edb1dda63e449c8d3252fee917dab5429279dce51bb9d0991e5404b2edbb1d8bddc771e7b9db21277102bd9792bd94115d9f9bfe8975cc45471514cb71b34504ba822d8519ea3857fcc849dbe4ddde674d7ce10fcc863a0712cea42695b98221645cab3ba3259c9e489189baf3ec8c65b7af3d08a455eef8aa8a03b38b112aa68a4f62558e7c17a652dfcf375b09a858bb51f6de617de6ad69eaf97db95bfb1ae2fbcc0b314653918ae35b54ecdc9c703ea2720152f8c7aa8afb5f2738316efc7a209282da109464e77446db73b662973e2d4ed0f59da05c65ce60c699f75e3f1000609038a3c236a58b410054d6cbbcfc08e067d46f131ec46e3543f4630749d3eed253d460e27e44fc5159c71590ac99b0e91eb60117a51186cfdf92cf44c0929ad7375d618d305bcf6a8b04004fda7a6838e72814abadd0b3ff482d93c5c5c79cd849790d178bf79c019a7349780685a61f314542b9160c3883f5b7967083613bb3c062599fc7a22bae7dac5ab96bfd0431ca0b6abcc9b6cc260e17f33768e882b9ad706f2d87c90122ddf626de8faf01b91b8a44d16f27deb0537a4b90a20850a8af8e36922d8043efcd78e8b8f585c7d94910acfb83bb1d4227105cd0e7153ee33db1dbac39e4b0cb852ef62a3c1f8d8359d4367841d14eab9a266f1b1d046ac962f200ce2f87dd3adc35f8d00728b",
      "78040000",
    ],
    [
      "ETag",
      "77ukFAX0ZPyoBk3efr7Y+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d926f53824010c6bfcbf51627294563c61768544c68fec137358e73c28218b07477d8388edfbd3d326baa997a73ec2ebf5d9e7db83d7b4e8b88d96c95262f1588dd59026aa28329c82a53921e25161298c140f18448cb7546836119dd47e703cf73ca96ff88db49af47840cd7907366ef599c421649663fed59c173a0b610b32a2f96756630b52b7571164cbdd12de539463a1fcd7ddfe9fb2e3b18a7c6882bbeacf97fb42d0e06dbe06a0a31082842d05a4a811b0895a7d7943c2f336848ac440892d570fd221158955c2036a8d2b03a0dd3ba342f4cb3d36db6cd2b02330cb94ab120763e237d4ca1e2d9145fa5f684005187b4705c9f5b2aa751bd880ebd5160b56a7d5f019216a7192cff0649ef9ad36ff8c08e167ce7788e55a14ed48dffe0fc368e3cfd1c75ed04ee0f422a72ea8404ded09d05ce70acb9c571f7fe4e811c0b242325680fcd66abdbee58cd775b07a8ada6efd84a5460b090d3edb84b15b3639e4938bc01e0c549267b020000",
    ],
    [
      "ETag",
      "6EANCMpdKd/CIIAp4LZovQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-68-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f",
      "4f",
      "db",
      "30",
      "10",
      "ff",
      "2a",
      "56f602126d96025de954b18e66235bda4292c21842ad9b5c82218983ed205588efbeb3d3c2101b7bde5392bbdf3f9f2f0fd62d2b13ab6f2d5976578358bdbbe14b6bc7024533acfef896ae86f9fee9c54f3bd8f3b3e3e5448ee470304004d32c498b2a8796e4b58841f667613b13bcaea8e0bc8542ad6eafe574779d8ee37ce8bddf770e9027214f7d56de22fb5aa94af66d7be3ddce38cf72a01593ed98174f75fbbe635782df40aca4fdd2d2461769bf6d7a98f3982ac6cbc12cc400b504318782b21c233c3393e5a797d26d468b7686e07b16038d635e974ac74289989729cb6a6154adfe836562fef66285aeef1e45e4683a9b445b0b5a68f2629b5049e67301b2ce15f9124cc76451a1d735952017e4fcd80d5c8225c15396c39c250b32208764381911e24fcfdd606b2115664421dffbee62cbf7c65e441c8c94404a517544158a291d25695e3d7d4f0aa442d07a88deebabb31e759771c1948eef4d2237181e45de99db4ccc878cc6abf00e6796d25c02a2a9a0052810639e00524ea6a11779d3c9d0478619c3c90621adfee5c333215a55a0032af3d45edd3de3bf019cd1bc3688fbe6c572acc7c79dbf2b44ded80da3e1f804615728844bd020acd3991b5c584d2980140494b161be310903368d7feef266b1108bab8536783d8a49c562a94d6201a61db1c29ca261f7f60f3a07faca102cd4abdeee6e57ff7f65f2c7cedaa336fa20041781d926fd896ed26461250e8e25a766175fa4bc5b970a9092665a7ec24941557ccdca8c489695a82d80a45c90b42e634d6b56cf94a8c8ea024a45f4e0659f3c0dbe4dc2baaa",
      "b850903cab20a0d9da300abcc9d7ed8febcfcf17911be2bfa0c8a5d3ef75aef4a1cc519a3df97f8f71d55c8ece339a4e5cdcc65f771049635f050000",
    ],
    [
      "ETag",
      "XJfyAl5QYZ/R4LgHbNsDsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "8b08000000000002ffedd34b7282300000d0bb642d0e9ff24977604414410914ac9b0c9f542c10825091e9f4ee657a8dfaeef0be419ae7b4efc9d05694815730a5325ce64b971b161a4b560b4a06c99a577b8c515bba273d53463dafcd44139ce0dd1eb42c6a62c7e48ec6451ce678ab87380cbf0c8fc994a1687b76cbdebdbfed1abb252c85a696de28fa10bccc3dd6ae654707aaacb27b070fd64be7efdb186bc83bf9bab14a892d4a28ebfaeb394e0a75846190ac1f5c08d9a5b025c63697a24eee2a922727269173488d41eae2717514c963c45b7f77626a9437e6a62d8358ae3e5b099675b07c7afabfc002d007bfde684faef37645857001feea9361e274fe6fd139e80dfcfc02f276a5ab19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-69-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fdb3014fd2b91f771f4913ed287548daa8451a94d479a82c63445b673130c491c6207c650fffb6e1cca4048f029b6ef39f79cfbc813b9157944a68489e4ae82f2f1cb8d64e48880a609be6e36577f6fce3db1de643aff0370f97571b548663344889aa56856a4d052b22a39a8e96edb4e4a5915b494b285895acea4653b7dbb67dba37177684f90a7208d5722bf45f6b5d6859a763a07ed76226592022d846a7399bdbc77ee7b9da29437c0b5eabc95eca08aea7c2cfa2d959c6a21f3d96e8b062a0565081915295af8cf8cd8f1dbd46d41b37682e07bc181722eab5cd7b6300597792c92aa3459c9f489189baf0e64ebaedc4560719956591ee63483232ba29a86fab100ebd4dfacada577baf1d7f360b9f1c2ede2cc5dcfdb8bcd6ab7f6b6d6e599ebbb96a62c05c3b566d6b1b9797841fd089416b9510feae75af9b941cbf763a90928ada00986a3ae43ed7177c26236e2f1b83f647117181bb3d190f659974f0630881850e41951c3a2b9cca13bec3b83010b7bfd68100ec6dc09d9880dc3c881c88ec636ebf506647f441e4aa1e144a8422ad174885cfacbc00d037fe72de6816b4a886995ea93c6585dc06b8f1a0b44d00735edeba890a854b77be905ae3f5f04cb0bb799f00a12ca1fb77738e398a60a104d4b6c9e86722d236c18f1e66bf704c166623f0e4145a6bf9e48ddf3dac5ab96bfd0031c606d579b2fd906fed2fb6eec1c101734ad0ce4be3990022d5f636de87aff1b91b8a44d1672be73fd9fa479f221861272fef934116c029ffe6b87c5472cae3eca288d77dc1dae6a115e42b343c294fbcc1e0f27ceb04f0cb8d4ef6223c73e74adce5167840c72fd5c51b3f858682356a917100671fc9ee9d6fe1fc9d4d79b78040000",
    ],
    [
      "ETag",
      "OOZzjQNiMOmtnxeeW+CZCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "86ffcbe92b6c5288cae6073433969a29ae596bee0a07c5804bf75e72cef9df3b97cc5ab5d51738e7f09ccbfbbeb087e7248fc08565b27a2951ecce56a8ee74314159a64ad2ade0b9443000155b11c976db4d6deeaf479bfefdc3dc16817dd3cdbc769b0819ae3163e0ee214e308d24b88f7bc85986b416f2b4ccf245d519a076851e4e83893fea539ff148f7a3d960e075063d3818a7c58829b6a8f87fac3d1d0cd8f0e50463149887a8b514826f3054beb6295956a4684a5e8a10255470f56025785930c1b94913d369999673619d5b56a359ab5b2d02531e3295f09cd8d994f481e28aa513be2597e01020aa920cc7d5f595c6495419d1a53f0a1cbbd2f71520697192e2e26f90f4ae197d860fec18c1778e65bcccd589ba1adc7abf1d47997e1e75e905bd1f845494d40909fc616f1a78c3b1e69e8ede3b3b85722c380529516768d5ec66bde1d4de63ed721d35bdc755a2440342467fc775a2c08d592af1f006afa265b87b020000",
    ],
    [
      "ETag",
      "aywj0YIhNjGWZY4rT4KCmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-70-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f",
      "4fdb3010ff2a56f602126d4907a5eb54b102618bd63690a46c08a1d6752ec190c4c176902ac477dfd96961888d3def29c9ddef9fcf9747e78e97893370963cbbaf41ae3edc8aa5b3e380a619566f7fd6dda3f34bb51fac4e03e6b907fb6cc946c32122b861295a5439b494a82503359845ed4c8abaa25288160ab50e765b6eefa3db75dd83feeebefb09790af274cccb3b64df685da941a7b3f16e67426439d08aab3613c573bdf3d0ed5452dc02d3aaf3dab2832eaaf3bee9612e18d55c94c35984016a05720e05e53946786126cb2fafa5db9c16ed0cc10f9c01654cd4a536b150828932e5592dadaa3378746cccdf5e9cc81b7bc731390e66d3786b410b435e6c13aac87c2e41d5b926a76130218b0abd6ea802b5203fbe79a147b02445ca7398f3644186e4908ca627848c831f5eb8b5501a33a2d0d8ffee616bec4ffc98b818298194a2ea09d528a64d94a479f5cd3d69501a41eb21fa6fafce79325d2e24d726be3f8dbd70741cfb175e33b1316494ada27b9c594a730588a69216a0414e440248390b223ff683e9688c0c3b86b30d423983abc71742bcaac004d4f669bc7a7bd67f03b8a0796d110fcd8be33a4f4f3b7f5788fd8917c5a3c919c2ae510897a04138e7332fbc749a52082948289965be33090bb68d7feef266b1108bab8536783d9a2bcd9932264c826dc7bcb0a768d8fddeee5ebfef58b0d46f7afbbdaef9ffcae48f9db5476df5414a2143bb4de613dd94cdc24b1c1c4fceed2ebe4a79bf2e15a014cd8cfc5490826a76c3cb8c289e95a82d81a44292b42e99a135ab674b54667501a52666f06a409e07df26515d55426a485e5410d06c6d1487fef4ebf6e7f5e7d165ec45f82f6872e50efadd6b73287b94664ffedf635c379763f29c04530fb7f1177ea9b10f5f050000",
    ],
    [
      "ETag",
      "jXu2BQYs5OyFOcE175cbcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "1f8b08000000000002ffedd35d7243400000e0bbec73185915f4cdda4891902af5f3628425a2d85813a4d3bb37d36b34df1dbe6f90e539612c1dfb8674e0152c1954f99cb7a982f0547d4d0c7f0c09353255c955c795333c5b59e1d975fcee7eee4ccd4cb8831ca0ee7e8e644d89da10efed869554d8dc2bba85ceb1a876151234b7ef62a311ae653e99ba2f9e0857dcc65d8170e840a69c0ec7de73da745cdf2e8136cfda2c28aace5cd17be3ae1b03ea8165b4b16f0c1c8af0cc31d19503fd92c7927884d0b452e925bc7975395d7b992c93ef2451b55fa35342b5b0f14a2c40334ce258de0a67fee9e9ff022b40665a0f84a5f563bb28a9ea0afcd54fc78592c77f44b2810ce0e7172c2e2fa119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-71-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f795b6491f7954aa4655c2e8d6a65b9a82a6698a1cf72618d238c44e01a1fef7dd3894c126c1a7d8bee7dc73ee234fe496175b322609cfee6aa81e3fdd88849c105034c3d787edd7ebc1322d1faccda8989afb6f03efee229b4c10c11b96a4bb32878e1475c5408e37eb6e5689baa495101d4cd471ac8e650facbe6539ae39b23ce449c8d3052f6e917dad5429c7bdde51bb9b0991e5404b2ebb4cec5ede7bfb7eafacc40d30257b6f257ba8227bef8b7ece05a38a8b62b259a3815a4215c38ef21c2dfc656e93d3b7a9bb9ceeba1982f79c01654cd4856a6c610a268a946775a5b392f113d1365f1dc8da5ff8b3c86022af77455cd01d9c185baa68ac1e4b30cec3d5d29807e7ab70398de6ab205ecf2efce5b43b5b2d36cb606d5c5df8a16f289ae4a0b9c6c438d5b7002fa8bf05a978a1d5a3e6b9517e6ed0fcffb134049496d00663c7b4a9e59a5e92260e4bddc128494d4812377146749098cc1bc2709b00459e16d52c5a8862d4072b313d27b687763f1e5aa917bb0ea3b16d836b8f6ccfa50e258713725f7105675c9642f2b643e42a9c477e1c859b60368d7c5d424aeb5c9db5c69a025e7b54582082dea9e9d044b940a5a6ddf320f2c3e92c9a5ffaed84179051f6b8bec319a7349780685a61f314544bb1c5869160baf4cf10ac27f6fd189464fceb89343d6f5cbc6af90b3dc201367695fe927514ce832fdace117149f35a43f6ed819468f91a6b43d787df88c4256db3901f1b3ffc49daa71052a8a0601f4f13c13af0e1bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cf6cd736",
      "3d734834b852ffc62c73303876adc9d164841d14eab9a276f1b1d056ac962f200ce2f803ddadc31f8da388f378040000",
    ],
    [
      "ETag",
      "xdJh3Mfpx1U5nA0vK39qHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92dd4e83401085df65bca549d19656925e5045db94fed378619a660b03a5024b77174d6dfaeece62ad464df40666866f96730e1ce029c943b0619dc4bb12c5fe224635d5c50c65992a49b782e712c100542c2672da9e4c869ed37878cd06aeb50b7aad723c98763a44c860831903fb0051826928c17e3c40ce32a4b580a76596afaace00b52ff470eecffaa37bea331eea7eb4f03ca7ebb97034ce8b21536c55f1ff585b1e0dd8f2f50c23149807a8b514826f31507d6d53b2ac48b1267929029450c1d58358f0b26082f31a4d6a2db3665a57e6a569b6daf5a6794d60ca03a6129e13bb98933e505cb174c65fc825580488aa24c351757da67112564674d91ff956a3d2f71520695192e2ea6f90f46e187d860fec14c1778e65bcccd599baf3c6ce6fc751a69f47dd3abefb83908a923a237e7fe8ce7d6738d1dcf2e4bdbb57282782539012758666bdd16eb6acfa7bac375c474defb19528d18080d1dfd14b14d8114b251edf002e6e95227b020000",
    ],
    [
      "ETag",
      "Q8PPMLA4WzmKE6qcH7uOKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-72-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffc5536b4fdb3014fd2b9627c426f5b1b052ba4a152b346851435bd2048426d4b8c96d302471b11d2486f8efbb76280fb1c1c77d8aed7bee39c7c737f7f49a9729edd325cf6e2a90779faec49236286896e1e9d093bd93e8f76ad4998d2bd797512e0fc6c3c10011dc742956ac73682a51c904543f9ab73229aa3593423491a8b9b7d374badf9c1dc7d9eb7ddd75be639f827ce5f3f21abb2fb55eab7ebbbdd16e65426439b03557ad44144fe7eddb9df65a8a2b48b46abf966ca38a6abf2fba9f8b84692eca413447039502b98082f11c2d3c77a6cb1fafa95b9c15ad0cc1b73c019624a22ab5b185148928573caba465a5fd7b6a6dbe58d0b9ebbb8721399c4693f073cc0ad31c7f214c91c54282aa724d8e82e93189d7a875c914a8989cfd740397e091142b9ec382a73119907d329c8c08f1a7676ef082c9f7c62ed67cefd80b89839e525831a41d318d6cda7849eba5671e4a83d2087a4cd17bfb76f4c154b9905c1bffde247483e161e89dba75643e642cb99bdf60682b962b403493ac000df258a4802db3e9dc0bbde964e86387cd61b64128daff75ffdc10deadc118d4f66bb4ba1dabbf019cb2bcb288db7a411dfaf0d0f837c3913f1d7ec8b1e5b4763b5b487481309c939a839e446e704eeba3005620a14c6cdf3b5959b02d7c38ee9bd9432c4e1fca288d7ba579a28c4822c196435ed87bd6ddbdaeb3d7e9510b96fa6daddb35bf6899feb5f2a851597e9052c8c00e9cd9a29ab25e7889b1e02fdca00528c5324313957813056c9903b1ef479ec224714c78494cdc240ecf67eee231f2b8410e584a5251992e1b759fd4496f76dbf576db18b376ea69f8bf562eea908cd6683a71712afe00e3c3902f0a050000",
    ],
    [
      "ETag",
      "AIr8QUzfD4PKuELrUlrBKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "49",
      "72",
      "82",
      "40",
      "1400d0bbf4da5020d24a76cca3016408644335f863104104149b54ee1e2bd788ef0eef1b91b28461c8c7730d2d7a45942c45a6649c6e23ab53c5bfa4e55972e589ebc365947b22514d62c63b815ed650b0f21dd6a3c125be4ef11c98a1d24fbda6d8c62d8fe577ff480721d8e0c4f32ecb53da62bffbc21ecec2e3a0679be0aacd0e59351e4721c953a5a1a7d439c430de3e389babe76ceb1c9a063a5e39ed5705796b1d4be20418cca22aac6b708c67fd1a7866c687a29b801549b2cdeec52971ad3a0e6cc1de6ae3cefa9cfd51d5da69ae5d6cb0028e52e6e9e9ff420b04f7aeea61c8abc7765e10c505faab9f8fb483c77f19480f3dfaf905b2d749db19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-73-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fa34014fd2b64f6ab7d505a4a9b346b5351495aba4ba9c66c3664182e384a196486aa31fdef7b19acab31d14fcccc3de79e731fbc907b5e24644a629e3dd4503dffb813313921a06886af0b1ef49f8aac5037fb8be4a9f2eaebc1da9acf6688e00d4bd25d9943478aba6220a7db4d37ab445dd24a880e26ea8cad8e695be6c034c74e7f644e9027214f97bcb847f6ad52a59cf67a47ed6e264496032db9ec32b17b7befed07bdb21277c094ec7d94eca18aec7d2dfa33178c2a2e8ad97683066a0955043bca73b4f09f99c4a71f537739dd753304ef3903ca98a80bd5d8c2144c1429cfea4a6725d317a26dbe3b908dbb7417a1c1445eef8aa8a03b383112aa68a49e4b30ce83f5caf0fcf375b09a87deda8f368b4b7735ef2ed6cbedcadf18d7976ee01a8ac63968ae31334ef5cdc70bea2720152fb47ad83c37caaf0df23e8fa521a0b48436188dfb36359dfe244ee3314b1d6b14a77d8863271e8fa815f7d96408c324068a3c2daa59b410853519a6e3c49e44ccb1ec683848d388dac3381a826ddbb1d51f58a6430e27e4b1e20aceb82c85e46d87c875e0856e14065b7f310f5d5d424aeb5c9db5c69a02de7b54582082bea8e9d044b940a5a6dd9e1fbac17c117a576e3be12564943d6f1e70c629cd25209a56d83c05d54a24d830e2cf57ee1982f5c47e1d83924cffbc90a6e78d8b772d7fa38738c0c6aed25fb20903cfbfd0768e882b9ad71ab26f0fa444cbb7581bba3efc45242e699b85fcdebac10d699f0248a182827d3f4d04ebc0b7ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e5beb21d7b8074a2c195fa143347e363d79a1c4d46d841a15e2b6a171f0b6dc56af906c2208edfd7dd3afc035e2e1faf78040000",
    ],
    [
      "ETag",
      "CiR0xngntYvGdxrIuW2O3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401085df65bc2d0955f9b1091745504900b1940b630c59da69296e3b6577ab21847777b62a1a35d19b7666facdf69cd3eee1292b62f06095a5db0ad5ee244573678b0075258de65b49854670008d4899acd6137f312882fbf27e855bb121b97393b4d76342476bcc05787b483294b106ef610f85c891d72292555e2cebce01b32bed701e06a3e935f739c5b69f2ec663bf3f1ec2c1392ec6c28865cdff63edf1e0c086560126a8b088d06a29156d3032236b538bbc94d8d054a90835d470fd2055549542113578d2e89c35dcf6997beaba9d6eb3e55e3028291226a382d9c59cf581212364402fec12da0ca8ba64c3497d7de67116d7466c399a86edf35adf5780a52599c4e5df20eb5d0bfe0c1fd87b04df3991535598237535bef57f3b8e33fd3c6ae087c31f84369cd411094793e13cf42733cb3dbe7befef0cea99220e52a3cdd06d9e775b9d76f32dd64bb251f37b3ca32a742012fc77dc6406bc44488d87570f54c4717b020000",
    ],
    [
      "ETag",
      "uhMAUDnRYpYbeqajoly1fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-74-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5535d4fdb3014fd2b962704486d43f85ea58a7534d3a28594a5290826d4b8c96d302471b19d3240fcf75d3b148698d8c31ef614dbf79c7b8e8f6f1ee835af32daa5539edfd420ef3e5c89296d51d02cc7537d9ede9ff5a57f7ffb733ad83c5f0ca6e14675dbeb21821b9662e5bc80b612b54c4175c7a34e2e453d67528836366aef6db7dddd2d77d375f7f63776dc8fc85350cc025e5d23fb52ebb9ea3ace52bb930b9117c0e65c7552513e9f3b8b4d672ec515a45a39af251d5451cefba207854899e6a2ea8d4768a056202750325ea085176636fdf4ba7587b3b2932378c15360692aea4a1b5bd82215d58ce7b5b45d69f7815a9bbf2de8c80bbcc3981c0ec761bc96b0d2909375c214994c24a8bad0e44b343c22c91cb52e99029590d3af5ee4113c9262c60b98f02c213d7240fae180906078ea456b099ead93701893c0ffe6612df08ffc98b8e8298319c3b603a6b19b365eb266e99b87d2a034829e52f4dfbe1d7d34552e24d7c6bf1fc65ed43f8cfd13af892c809ca577a31b0c6dc60a0588669295a0411e890c90723c1cf9b13f0cfb01326c0ec74b84a2dd1f0f2f84f86e0ec6a0b65fa3b5bb6df597801356d416b16816d4a58f8fad7feab0e2eeac60930b04e18c347cfa7dec4567b4398a600612aad4b2dec9c9826de1afa3be9c3bc4e2e4a18cd2b8579aa7ca88a4126c39e6a5bd63c3dec7cfd63eb560a9dfd6f0a2f87b56d91f2b4f1ab5ed0f520a19d961335b5453d60baf3014fc7d5bb404a5586eda8c2bbc8902362d80d8b723cf51922421bc22266a92c467c7dec4c69db4c867966145ef6e139b7297989097eb55b359358eac8f6604fe93878b2616233218861ecec12f496daf4ef8040000",
    ],
    [
      "ETag",
      "tZczYArIzwxbD2ZvDbN0nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd3495284300040d1bb64dd50740c4de38e41904910b1053714c420e98910662def2ee535ec7782bff9dfa0c098745dde37277205f76029a02a62d1637bdd9ce8e89269eca0b67787f9b32ed28b401b34cd43ecd06069979d77095fdc408ba79355735f468f1fe7ea5cabd727195bc84b23b5143a9b96aae17ab16b9a663e6746585b56f6ac09092a222fdcbed23219356b60ef0acaa01b497655269a3940bd8ac73763218bf510e2b4725872acb04e61c08d5e6b0883b89574e6a03124bec23c341f5a67ed2bba84d93cadb7b83ac424f743734e475f72e871a77c71f1e6e6ff021b40664639e972bade7e27abea06fcad9ff70b23ebff3a2938e1e0e717baf53d7d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-75-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc8fbda24e4052452b466295da3256405d2aa9b2664cc85ba259862d329aaf2df77314dd7aa52fb09dbf79c7bce7df044ee799190298979f65043b5ff722762724240d10c5feb095b6493e41bbdfe7591d9e90fbae7e1cde56c8608deb024dd953974a4a82b0672ba0dba5925ea925642743051c71e77fad6b03fe8f76dc71cf727c89390a72b5edc23fb56a9524e7bbda376371322cb81965c7699d8bdbcf71e07bdb21277c094ecbd95eca18aec7d2cfa35178c2a2e8ad9364003b5842a821de5395af8cf4ce2d3b7a9bb9ceeba19821f3903ca98a80bd5d8c2144c1429cfea4a6725d327a26dbe3a90c05db98bd06022af774554d01d9c1809553452fb128c737fb33696def9c65fcfc3e5c68b82c585bb9e77179bd576ed05c6f585ebbb86a2710e9a6bcc8c537df3f082fa0948c50bad1e36cf8df2738396efc7d210505a421b8c6cd3a27dc79cc4696cb3d4198ee3d4843876627b4c87b1c9262318253150e46951cda2852806a3c4b46c2b8e28857134722c164d2c6b10f5211d5a83d4b44d27218713f2b7e20aceb82c85e46d87c8b5bf0cdd28f4b7de621ebaba8494d6b93a6b8d3505bcf6a8b040047d50d3a18972814a4dbb975ee8faf345b8bc72db09af20a36c1f3ce08c539a4b4034adb0790aaab548b061c49bafdd3304eb89fd3c062599fe7e224dcf1b17af5afe420f71808d5da5bf2408fda5f75ddb3922ae685e6bc8637b20255abec5dad0f5e10f227149db2ce472ebfa37a47df221850a0af6f93411ac039ffe6bc7c5472cae3eca488577dc1d261b115641bb435c97fbcc76ac211e880657ea5dccb69c63d79a1c4d46d841a19e2b6a171f0b6dc56a",
      "f902c2208edfd3dd3afc039e730f5778040000",
    ],
    [
      "ETag",
      "u9cCg9dBaWZHg7fKayiTYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f",
      "53825010c5bfcbf60a33e0ff98f1014bcb5233441f6a1ce70a8ba2c0a57b2f95e3f8dddb4b664d35532fb0bbfcf672ce813d6ce32c040796f1eaa940b13b5ba1bad78587b24894a45bce338960002ab622729b59bddb871bff755aafcca270d89a556b85db6e13218335a60c9c3d443126a104e7710f194b91d6029e1469b6283b03d42ed7c389eff54757d4a73cd4fd683a18b89d41170ec66931648a2d4afe1f6bf383011bbef430428159805a4b2ef80603d5d736254bf3044dc90b11a084122e1fac042f72263837696236eba6dda8da15db6eb6acba7d4e60c203a6629e113b9d903e505cb1c4e32fe4121a0488b224c351797da6711c964674d91ff98d5aa9ef2b40d2a238c1c5df20e95d33fa0c1fd83182ef1c4b7991a913d51bdcb9bf1d47997e1e75e9fadd1f845494d409f1fbc3eec4778763cdcd8fde3b3b85722c3805295167685bb556bdd9b0de63bde03a6a7a8fa3448106048cfe8eeb588113b144e2e10d88dafcae7b020000",
    ],
    [
      "ETag",
      "kn0FKZJTxU52VfdM8V34uA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-76-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3010fe2bc853a54e6a1268121222455d9ab00e95908e9074dd3425c631d42d606a9b6e5195ffbe039abea85afb0973f7bcdc9dcf0fe896651b3440218bef0a2ab69f6e78888e1055388668fbf4747976f5d35dead324cfceff6e67a31f93783804042b5912a779421b921782503958cc9bb1e0458e05e70d106af4cc8661b68d63c3e8f5f5ae61014fd2247259760bec6ba5723968b5f6decd98f338a13867b24978fa146fdd1fb772c16f2851b2f5dab2052eb2f5bee949c209568c67c3c51c0a2824152b9a62964009cfcc4df8e5b57493e1b41903f89e118a09e145a6cab24082f02c6271212a5534784055992f0e686ebbf638d0c6b385171cae715a92d79f352cb5d54a5059244afbeacfa6da3a07af6b2ca95c6b97df6cdfd6202478c412ba629bb536d44eb49137d134777669fb874f70d0f26681e63ae736205c67ea049a01956da8542cabea0a7098d0b2a6c7d1396f2fac246005727572d5d34d6cf4752b8cc21e89faed6e18e9340cfb61af8bdba14eac0eed6c428a81a74af58a85339e59d8ea5b44a766d48ba24d871a56a76f74baa44b236c84d8d475f8b5ba18ed8ed01fc1149d309973c9eaf9a14bdf09ec55e02fbcf128b0ab36220c339ad4c5954dbcac534193007aa7af5d99651c9ccacb70bcc0f647e3c059daf5fdbb34c6643bbf830d88702229a0b1c02955544cf90686862e6673277066dec8054675a9177b8444835f0fcf84609b575356d5b7f4323b95ff1eb0c4495121eeeb0332d06e77f47f8579e03bded9fb12075ce0ec00747e030c76be9640df17b67f85ea904f232a68463e5e010057890f9feefe1d01165e12d84805ffb07044962644d07af1585ab559b3fb66c7348e510516ea4daed7eeee275c6a948a34a5997aeca87e47e5c0aa",
      "54219f4090847df1aa51edfe011f77ee09c7040000",
    ],
    [
      "ETag",
      "3BBVGYZLV0MlpnKxyOAXDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "30",
      "10",
      "86",
      "ff",
      "cb",
      "f9754b282a28091fc42c48b2109990680c21653be6e6b6abedcd6521fc77afc32fedf5ed73f7beed19be8b2683191c8bfca745dbdfe4c81b5f24e8da8a9d6c861a871000b2ce85dcb5a532ddb8cbb8df76ab8fc62cdfcb68339f0be1d22fac35ccce702ab0ca1ccc3ecfd0e81aa5ed70b0c344c1b8375e59adb7d1324a44a829f3c27a17c74f8b3882cbfe124049c7044f68b149d18f34964a4c79e5d33a5d9b0a4347ad4dd1c1000f17b9a5d6684b148a124e27a19adcaab152d387d1bd7a14b0a25473418d7fc81b880d13eb2aa14ec28212c00ea5e43e0debafc8773ed0fe1f5df48ceed592f83af496a3abfd33f9482c51d9b61840aae5335e0abe9e2f7f106b48dc69010000",
    ],
    [
      "ETag",
      "Uuj1pw2wdtyTwIYnpGXjEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ffedd3c97282300080e177c95998910a85de443683059545c9250369289b962568a0d377afd3d7a8df13fc97ff1ba484d061c0ecaba657f006a654d24422baadaa1bf74a9e333807e38ea5c62142a7cdd529858e3997a8c85da9e4b6910bf374b75cdf9ad563d1e853d76f6ed5c7de73208c15d7f4aac83c07ad87d11891b57479b53253db3afa16dacbf8ecb391d8d85c76f2fa733516bb3672d4532eabef0d4932e92684a8aa2695c699b1e6fe05e568f0940c564449c355ad75b893eb9023b8da9b2923fb096e9421e682e626a7364870a23c223c5f281aa9cbd54368d69c30f1e9e9ff020b40795bf674c0e5e3f61759d316e06f7dcca6963efed769dad31efcfc02ea6424d319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-77-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6f9b3014fd2bc87b5c132009218914ad5942d74c09d980b49ba609d9c650b704536cb25555fefb2ea6e952556a9fb07dcfb9e7dc0f1ed11d2f1234418467f735ab1e3edc0a82ce10533883d7fd75bd20ded71fc9e76c6dffdd2a55a99b8fd9740a08deb024de9539eb48515794c9c936ec6695a84b5c09d181441dd7edd8c3beddb36d776439f6187892e5e98a1777c0be51aa9413d33c6a773321b29ce192cb2e15bbe77773df33cb4adc32aaa4f952d2041569be2dfa2917142b2e8ae9360403b56455cc7698e760e13f3321e72f537739de753300ef396598525117aab10529a828529ed595ce8a268f48db3c39a0d05b79f3c8a022af77455ce01d3b3312ac70ac1e4a665c049bb5b1f42f36c17a162d377e1cce2fbdf5ac3bdfacb66b3f34ae2fbdc033142639d35c636a9ceb9b0f17d04f9854bcd0ea51f3dc283f3568f97a2c0d01a4256b83b16b0db13db2c624252e4d477d87a4162364445c07f78945c703364808c3c0d3a29a850b518c491f0f7a6e12a78edd8f07cea01f93347563ec60b767016d6cf5d0e10cfda9b8620b2e4b2179db21741d2c232f8e82ad3f9f459e2e21c575ae16adb1a680538f0a0a04d01b351d9a2817a0d4b47be9475e309b47cb2baf9df08a65983e84f730e314e792011a57d03cc5aab548a061c89fadbd0580f5c4be1d83124d7e3da2a6e78d8b93963fd32318606357e92f0aa360e97fd1768e882b9cd71ab26f0fa804cb37501bb83efc06242c699b057ddf7ac14fd43e052c65152be8fbd304b00ebcfbaf1d171fb0b0fa202315dc6177a86c4468c5da1de2badc27f668e80c7b16d2e04abd8ab983f1b16b4d8e2623dbb1423d55d42e3e14da8ad5f219044118bfafbb75f807d77786e578040000",
    ],
    [
      "ETag",
      "vWuDbEJXdBgM1xUttrth+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92416f82401085ffcbf40a89b42a96c483b6b62541b48aa7c6981506c42e2cdd5d6a8cf1bf77965adbb44dda0bcc0cdf2cef3d38c0735e26e0c13acf5e6a94fb8b0cf5a32966a86aae15dd2a512a040b50b38c4837deecf8a20e9330ebe9e17a3e493adccffa7d2254bcc18281778034479e28f09e0e50b202692d16bc2eca55d359a0f79519cea3991fde535f88c4f4e1220806c3600447ebbc9830cd560dff8fb5e5d182ad58cf304589658c464b25c51663ed1b9b8a1515475b895ac6a8a0819b07991475c5a410364d6cd7b59dee9573e9386eafd571ae09e422663a1725b18b39e9032d34e333b12397d025403625194e9beb2b8df3a431624a3f8cbaed46df5780a4a539c7d5df20e9dd30fa0c1fd82982ef1c2b445dea3375174c06bf1d47997e1e753b88463f08a529a93312f9e3d13c1a8ca7865b9ebc0ff71ad5540a0a52a1c9d069b57b1db7db7a8ff54698a8e93d9e96355a1033fa3b1e720d5ecab8c2e31b9323357a7b020000",
    ],
    [
      "ETag",
      "7chwlUuNdNg8tBbSOd5lIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-78-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10fe2bc853a54e6a02340981485197a56c45a3a123a4dd344d89710c750b98da265554e5bfef80a62faad67ec2dc3d2f77e7f303ba65c51a8d50ccd2bb8a8aeda71b1ea32344154e211a78fde1f6977b1618fab5f87aef9b83cdfd341d8f01c16a96c47999d18ee49520548e16f36e2a785562c17907843a43bb635a3df3d83487b631301de0499a253e2b6e817dad542947babef7eea69ca719c525935dc2f3a7b8be39d64bc16f2851527f6da9838bd4df373dc938c18af162bc98430195a4624973cc3228e199b98ebfbc96ee329c7753006f18a198105e15aa2e0b24082f129656a25145a307d494f9e280e6aeef4e236d1a2c66d1e10ae73579f559c3525b2e059555a6b46f6170aead4af0bac692ca957675e686ae0621c11396d1255bafb4b176a24d66a79ae607576e78f80407ad591069bef7c30584ef9d7b916642656b2a152b9aba221c67b4aee97174dedb0bab0958815c9b5c0e0d0b9bb6e1c4493c2489dd1bc48941e3d88e8703dc8b0de2f4697f1d530c3c55ab372c5cf0c2c18eed10835ac93049d67d6a3a7ddbec0fc88026d88cb16518f0eb0c30da1da17bc1143d65b2e492b5f34357a117b9cb285ccca693c86dda4830cce8b42dae6ee2659d0a9a04d03b7dedea2ce3e0545f86378bdc70328dbc4bb7bd7f9fa6986ce777b00109ce2405341638a78a8a73be86a1a18b60ee455e309bf8c0682ef5628f9068f4e7e199106dcb66caaaf9d65e56bff1df032e715635884d7b4026daed8efeaf308f426ff6fd7d89032e7071003a7f01063bdf4aa09f0b37fc8dda5048132a68413e5e010037890f9feefe1d01165e12d84805ffb07044d62644d076f158deb4d9b26dcb3ab60cd480857a93ebd9ce7e",
      "c2b546ad48735aa8c78eda77540fac4955f2090449d8975933aadd3fe28b5fa3c7040000",
    ],
    [
      "ETag",
      "OI47yXEHO0/hrBwL15vwCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d90416f82401085ffcbf42a29b4b558120fb521ad09510a726a8c5961401418dc5d6a08e1bf77167bd9997dfbedbc9719e052361978702c8b6b87b27f28507f9b2642d5555a7169a9510833402d0a26c3fe62dbc9638c4d17b8f36dbc3d5dc3f8b65c32a1d213d602bc01f212ab4c81f73340236ae46f87839c2632a6fbd628ebcdcefff423166aca8cb04982e07d15f830eec7199ce918618e129b14cdc856d21953bd366995a8db0a2d459d4c51c1044f0f85a4ae1592c862c5721796f3faec3c398ebbb0e7ce1b8315a54297d4309bc4c0369ab4a822ba715870189053cbb9f3e9fc65f9c504daffa3ab5ea30a25b1af426369dfed3fc844d21c55cb0e67900a5ec657a9eff7f10f1f714dbb69010000",
    ],
    [
      "ETag",
      "Pyk00U/SenuL75OSOhqPSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "00000002ffedd34b7282300000d0bb64ad8e4689d29d4083881f2aa8359b0c626862a1900062e8f4ee757a8dfaeef0be419c24acaa685d7cb22ff002740ccd4132f0cb99e5b4dc76151e11097da999fd7175f83df78481b2b5149b3b91b601cd7a3799ef0b72e52ddab5c3be5c39ab2dc523cd992ec6e416885286e8acc345aa2e01498f585dd6053bcaf0ddc22e9c68792845f3f68a365deb7a36e64180d2e9b9eb47393cbafdf0d45c92c89c40b2aca66e36f5f2a6216c23f7e856a0d3cdcabbf9365b37464db52fb138d0d3426bcda3453d1e1ab3ce9adb9a401a8c9ca5b78be2f43c787afabf400fb07b2914aba8786c1f1ba6d9037ff569ad4bf6f86fb15831057e7e016d67badd19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-79-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b91f7953ed2675aa91a551b46599b8e24054dd314d9ee4d30a471889da20af5bfefc6a10c84049f62fb9e73cfb98f3c9307916dc99830913c96501cbedd4b46ce08689ae06b7648027d35cf657173153eb19fced3263c5c4f268810154bd15d9e4243c9b2e0a0c69ba09914b2cc69216503133586a3863de8da1ddb1e3aedbe3d429e82345e8aec01d9775ae76adc6a9db49b8994490a3417aac9e5eef5bdb5efb4f242de03d7aaf55eb2852aaaf5b9e8f75472aa85cc269b000d940a8a087654a468e13f73cbcedfa76e0aba6b2608de0b0e94735966bab28529b8cc62919485c94ac6cfc4d87c732081bb7467a1c5655aeeb228a33b38b3b654d3481f72b02efcf5ca5a78176b7f350d176b2f0a6697ee6ada9cad979b951758b797aeef5a9ab2140cd79a58e7e6e6e105f5b7a0b4c88c7a583d57ca2f0d5a7c1c4b4540690575301ab607d476da2316b3218f9d6e9fc56d60cc61c33eedb2361ff5a0b765409167440d8b6632eb40cfe9f4593f8a6dcaa29ed31f442367308a063605eef4ec7e8739e478469e0aa1612e542e95a83b446efd45e846a1bff166d3d03525c4b44cf5bc365615f0d6a3c60211f4494dc72a2a242a55ed5e78a1eb4f67e1e2c6ad27bc8484f243f088338e69aa00d1b4c0e6692856728b0d23de74e5ce116c26f6eb145464fce799543daf5cbc69f92b3dc4015676b5f99220f417de0f63e784b8a1696920fbfa4072b47c87b5a1ebe35f44e292d659c8f5c6f57f93fac987180ac8f8d7d344b0097cf9af9d161fb1b8fa28a334de7177b8aa447801f50e0953ee0bdb190ced76971870a13fc43af6f0d4b52a4795117690e9978aeac5c7426bb152bd823088e3",
      "f74cb78eff00fc35999d78040000",
    ],
    [
      "ETag",
      "nygStJDporVJTwbK8wUTyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2d49ab50a00917a088187e148a5e184296765a8adb6eddddaa0de1dd9dad88464df4a69d997eb33de7b43b784cb2103c5827f15381b23c8951df9a6286aae05ad12d179942b000358b892cdcbbd7d21ea84569f3494bf69fafefa776dce910a1820da60cbc1d4409f25081f7b0838ca5486b81e0459aadaace025de66638f767c3c980fa5484a69f2c46a36e6fd487bd755c0c9966ab8affc7da726fc156ac6718a1c42c40a32597628b811e1a9b8aa539c79a12850c504105570f62298a9c49216a34a935db35c73d734e1da7d9b21b4e9b402e02a6139111bb98933ed042333e132fe4125c02645592e1a8ba3ed338092b23a61c4e7cb75ee9fb0a90b428e1b8fa1b24bd1b469fe1033b44f09d63a928327da42e47d3ee6fc751a69f475d74fdfe0f42694aea88f8c3717fee77c737865b1ebcf74a8dea460a0a52a1c9d0b1ebad46d3b5df633d17266a7a8fa7658116048cfe8eab44831731ae70ff06dc0afd207b020000",
    ],
    [
      "ETag",
      "u6Vxy0GsUy0lN8rEvJWO0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-80-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53db52db3010fd158dfb0233e4e2d0a6219d0c4d83296e131b6c074a192651ecb511d89691646628c3bf772527a5f4429ffb6469f7ec39bbabe307eb86958935b4562cbbad41dcbfbae62b6bc70245338c1e7e833eecce26c1407df9e49c89b9bf9a7c3d198d10c17495a44595434bf25ac42087f3b09d095e575470de42a2d6a0dbb2fbbb76cfb6df0eba6fec3dac9390a75356de60f59552951c763a1bed76c6799603ad986cc7bcf811efdcf53a95e0d7102bd9792ed94115d97959743fe731558c97a379880dd412c4020aca726ce1a93259bd7f4edd66b4686708be6331d038e675a9745b4811f33265592d0cab357cb04c9b3f1dacd0993a93884cfcb9176d2d69a18b97db844ab258089075aec861e0cfc8b242ad2b2a412ec9d9911338044382a72c87054b966444f6c9d83b2064ea9f39c1d632a10a90c7f32332753f3b989dba333722367695404a91f8802ae453ba9ba439bafaa9144885a0f51edddf5fcf7ad459c605537a02d78b9c603c89dc53a759da14321adf87b7b8b694e612104d052d408198f104b0e4d80fddc8f5bdf1142bcc268e3708690d2f1e9e0aa2fb0a7483ca7cb556ffb5d1df004e695e1bc45d73b06cebf171e7ef0c07e3c841c42572a0059aa47532778273ab09059082803236452f2cc1804de29f4eded80ab1682c94910aef52b1586a9158804947ac300334d583fea06b772d0316ead7dc5ecf1ee8bfaf4cfe98596bd4861f84e022305ed2575493a61756e2ce5872629cf8accbdb75a8002969a6e93d4e0aaae22b566644b2ac446e0124e582a47519ebb2c6782644455617502aa2772e8744efbc4dc2baaab850903c1160aeb16b1805aef771fbddfafae13c7242fc0914b9b08783dea59ec74cd1b8e3bf9ce0b27912e341dfd31efc0ec3bab1a053050000",
    ],
    [
      "ETag",
      "Fze6e3MCR8tXJEWrUObCZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd3597282300000d0bbe45b1c0417d23f43a0151ca1481cf48741086531242cb2d8e9ddebf41af5dde17d83288e69db861d2f6905dec01429701ecf6da1213ce41bbcb6d68ba2efae707b5eebf2e97a144ea995c5363b76064e9dd44ca47da0f7c5c1621e9fcc1666b26ca21bcb9a8d9e1b3b9e9f82603465adf2b294c44b46841ab8c3634c0c57f8815e1fea65bb301073075f903bded5096117a57b48973225a69ddcdfc389f39cba3e269f5f4572d88fab5b7589bca114558c2bb98f954cf58fab81ebf0cc044746bab56c883f46af2b90e432d73921b346a925201fe62f2fff1798013a8abca16d983fb7ab2b0867e0af7ed84d823eff231a35b4013fbfa7a64c2419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-81-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fa34014fd2b64f6d516b096d226cdda54d42696ae403566b321c370c151cab0cc50534dfffb5e06eb6a4cf48999b9e7dc73ee072fe4919729999084e77f1ba8773f1e44428e08289ae3ebe5f3f86eebd7cfdc09cd9dc7b315cd2f9eaea75344f09625e9a62aa027455333909375d8cf6bd154b416a287897aaeddb39d817d6cdb23d71ada63e44928b22b5e3e22fb5ea94a4e4cf3a0ddcf85c80ba015977d26366fefe6f6d8ac6af1004c49f3a3a4892ad2fc5af4672118555c94d37588061a09750c1bca0bb4f09f9926a71f53f739ddf473046f3903ca98684ad5dac2144c9419cf9b5a67259317a26dbe3b90d0bbf2e691c144d16ccab8a41b383252aa68ac761518e7c16a692cfcf355b09c458b951f87f34b6f39ebcf5757eba51f1ab7975ee0198a260568ae31354ef5cdc70beaa720152fb57ad43eb7caaf0d5a7c1e4b4b4069095d301e590eb55d6b9c64c98865ee6098641624899b8c867490586c7c0227690214795a54b368294a773c1eb8304ae381c58ee31307589c8c208b2dc74dd2e1d81ad88394ec8fc853cd159c715909c9bb0e91db6011797114acfdf92cf27409196d0a75d6196b0b78ef51618108faa2a67d1be50295da762ffcc80b66f36871e37513be829cb25df817679cd14202a2698dcd53502f458a0d23fe6ce99d21584fecd72128c9e4f70b697bdeba78d7f2377a84036ced2afd2561142cfc0b6de780b8a145a321dbee402ab47c8fb5a1ebfd1f44e2927659c8f5da0bee48f71440063594ecfb69225807befdd70e8b8f585c7d94910aefb83b4cb622ac866e87b82ef795ed3ae3e1d0211a5cab4f31c7710e5d6b73b4196103a57aada85b7c2cb4136be41b0883387e5f776bff0fd9d7e15578040000",
    ],
    [
      "ETag",
      "Hz9YvNrzi6S/yEifOagGwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82",
      "40",
      "10",
      "86",
      "ffcbf61527294563c60f586a366a869833358d73c28228707477588ee37f6f8fcc9a6aa6bec0eef2ecf1be2fec601d6701d8b088a3e702c5f6244275a70b1765912849b79c6712c100542c22d2efce7aa7b54d37acddc737eec32c7b0dd65da7d52242fa4b4c19d83b08634c0209f6e30e3296a25ee3499166f3b233406d733d9c786e7fd4a33ee581ee47d3c1c0690f3ab0378e8b01536c5ef2ff587bda1bb0e20b17431498f9a8b5e482afd0577d6d53b2344fb02279217c9450c2e58348f0226782f30a4d2a4db3625ae7e69969369ad5ba794160c27da6629e113b9d903e505cb1c4e52fe4122c02445992e1b0bc6e681c07a5115df6479e552bf57d05485a182738ff1b24bd4b469fe1033b44f09d63292f3275a4ba835be7b7e328d3cfa3ae1caff383908a923a225e7fd89978ce70acb9a783f7f656a11c0b4e414ad4199ad55ab3deb0aaefb15e721d35bdc756a240037c467fc775acc00e592271ff06987f399f7b020000",
    ],
    [
      "ETag",
      "cFWG/4vFf4ViJRZWnxdkFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-82-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "db",
      "3014fe2b56f60212bda4eda0eb54b18e665b469b4292721142ad9b9c048f240eb6d30921fefb8e9d1686d8d8f39e929cf3dd7c7cf260ddb222b606d68aa5771588fb773ff8cadab340d114ab5d5588ded839be687fef9caf957db0ea5dac7f0e8788609a25695e66d090bc1211c8c13c68a6825725159c3750a8d1ef34ecfdaeddb1ed837efbbdfd017912b264c28a5b64df2855ca41abb5f56ea69ca719d092c966c4f3a77a6bdd699582ff8048c9d64bcb16bac8d6dba687198fa862bc18ce030c5049100bc829cb30c233335e7d7a29dd64346fa6085eb3086814f1aa503a164a44bc48585a09a36a0d1e2c13f3b7172b7026ce51488e66732fdc59d25c9397bb844ab258089055a6c8177f3625cb12bd6ea804b924e7df1cdf2158123c61192c58bc2443724846de9890c9ecdcf1779652614614f2662199b8c70eb627eed40d898db16248282a8fa94241a5e3c4f5ababef4a815408da0cd27d7d7dd6a3ee322e98d24770bdd0f14747a17be6d4539b404aa3fbe00ee796d04c02a2a9a0392810531e03524e66811bba336f34418619c5c91621adc1d5c33321bc2f410754e6a9bdf67bc67f0b38a3596510ebfac5b2adc7c7bdbf2b84eed409c2d1f40461d728848b5023acd3b9e35f5a75c9870404149161be310903368d7feef376b9108beb853678458a49c522a94d2201a61db2dc9ca266f70fdadd6ed73260a15ef57a9db6fe078bf88f9d8d4765f441082e7cb351fa13dda4c9c20a1c1c8b4fcd3ebe4879b729e520254db5bcc7494e5574c38a94489616a82d80245c90a42a224dabd7cf94a848ab1c0a45f4e0e5803c0dbe4982aa2cb950103fab20a0dedc20f45defebeec7cde7e7cbd009f07f50e4ca1ef43bd7fa50e628f59efcbfc7b8ae2f47e719",
      "cf3c07b7f117f0857ce763050000",
    ],
    [
      "ETag",
      "3tnr4DEKX0J2Wvt17b4Xvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd34b7282300000d0bb64ad4e4b50a1bb520b12182082226e9c00b180c82f010c9ddebd4eaf51df1dde37204942193bf3fa4a2bf0060491d445b2b01a45db8c99bc4f56edbcb34ef7b0141656ac36923326d21cf37a5a4970b3a565e8389ffecd09a2c9bc0d7d4b14b2ae20d72a8d4bcebcc49726911c556bc4ce41b9a0142963ba4c8dee88f0658eb21222438f87602b0bb9ca127b5d7b38365f26e9c88db28828db0faf86eed99042dd3fc5e6f0a1843ef1e4badfc5bb2246467bf0b32fccaa6bca73b7ee033c40764fc93b22eee08e977d37b5a1bedaea7650078762f1f4f47f8119a0f726ef283be78fed70a9aa33f057ffcc45431fff354a3ada819f5f5fd3446619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-83-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2bc87b6d0234692091a2354ae99a29210b218da66942c65ca85bc0149b565595ffbe8b69ba7693da276cdf73ee39f7836772c7cb844c48ccb3fb06eaa72fb72226270414cdf035a5371b7fb31f419dcfcddba2d9ecebebefd9748a08deb2242daa1c7a5234350339d96dfb592d9a8ad642f43051cf1df4ecd1c03eb56dc7b5ceec31f224e4e9929777c8be51aa9213d33c6af73321b21c68c5659f89e2f5dd7c3835ab5adc0253d27c2f69a28a343f16fd9a0b461517e574b745038d843a8282f21c2dfc6526f1f9fbd47d4e8b7e86e007ce8032269a52b5b630051365cab3a6d659c9e499689b6f0e64eb2dbd7968309137451995b4801323a18a46eaa902e33258af8c857fb90e56b370b1f6a3edfcca5bcdfaf3f572b7f2b7c6feca0b3c43d13807cd35a6c6b9bef97841fd04a4e2a5560fdbe756f9a5418bffc7d212505a42178c1c6b446dd71ac769ecb0d41d9cc5a90571ecc6ce191dc4161b0f6198c44091a745358b96a2744e9d344eec24729da11d0d5d184663cb1d4660c563460769e20c527238218f355770c1652524ef3a44f6c122f4a230d8f9f359e8e91252dae4eaa233d616f0d6a3c20211f4414d8736ca052ab5ed5ef8a117cce6e1e2daeb26bc848cb2a7ed3dce38a5b90444d31a9ba7a05e89041b46fcd9cabb40b09ed88f635092c9af67d2f6bc75f1a6e5aff41007d8da55fa4bb661b0f0bf693b47c435cd1b0d79e80ea442cb37581bba3efc46242e6997856c765ef093744f01a45043c93e9f268275e0d37fedb8f888c5d54719a9f08ebbc3642bc26ae87688eb725fd8ae63b98e4b34b856ffc66ccb1a1dbbd6e668334201a57aa9a85b7c2cb4136be42b0883387e5f77ebf007404f9bbb78040000",
    ],
    [
      "ETag",
      "fahQNQW6erlC/jmuQWrVJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd4ec2401085df65bc2d09955f9b7001084a048452128d216469a750dc76cbee1602847777b6221a35d19b7666facdf69cd31ee1354a027060112d3719cafdd512f5d8142eaa8c6b45b754240ac102d46c49e4a63b586ff9d3f5f4e1d90fb6c5f6e1302e65bb468308e5af3066e01c218c90070a9c9723242c465af305cfe2649e7716e87d6a8613cfed0defa88f4560fae1b4df6fb6fa1d385997c5806936cff97faccd4e16acc5c2c51025263e1a2da9146bf475cfd8542c4e391694c8a48f0a72387fb094224b9914a2409342bd54b0ab25fbdab66bf562c5be21900b9fe94824c44e27a40fb4d08cbb62472ea14a80cc4b321ce6d72d8da3203762caded0ab96737d5f019216461ce77f83a477c5e8337c60e708be732c1659a22f54b7ffd8fced38caf4f3a8dba6d7f941284d495d10af37e84cbce66064b8d9d97b6baf518da4a020159a0ced62b95ea9558befb1b685899adee36899a1053ea3bfe33ed2e0848c2b3cbd015856ca037b020000",
    ],
    [
      "ETag",
      "qFMjvlX2UKYcdv0CzzQ3uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-84-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc5535b4fdb3014fe2b9627c426f5b24081ae52c53a1ab488b4296d0a42136adce434189238d84e2586f8ef3b762817b1c1e39e62fb9cefe2cf27f7f4861709edd1254f6f2b90779faec59236286896e2e96f3f60a757f1aa3cdf3fe98e9c493a947127edf7b1831b946279994153894ac6a07af3592b95a22a9914a28944cd6ea7e9ecef3a3b8e73d0fdbae77c439c826ce5f3e206d1575a97aad76e6fb45ba9106906ace4aa158bfce9bcbdde6997525c43ac55fbb5641b5554fb7dd1c34cc44c7351f4e733345029900bc819cfd0c23332597e7f4ddde22c6fa5d8bce631b0381655a18d2da48845b1e269252d2beddd536bf3c582ce5cdf3d0ac951301f879f23961b70f4853045160b09aaca34399e06231295a875c514a8889cff74a72ec12329563c83054f22d2278764301e12e207e7eef405d3380889ef9db858f7bd911712077d25b062483d641a19b5f193d44bcf3c9606a5b1e93149efedfbd10753e542726deee08d43773a380abd33b78ecd8794c577b35b0c6ec53205d8cd24cb41831c8904103209665ee805e3818f089bc564d3a168efd7fd3320bc2bc118d4f66bb4f63b567fd370c6b2ca76aceb0575e8c343e3df0cc77e30f89063cb69ed75b690e812db70566a0e7a3a77a717b43e9ac20a2414b1c5bd93956db6850f477e337fd88b1388324ae35e691e2b23124bb0e590e7f69e35ba7be0747777a86d96fa6d0daf8abf6991fcb5f2a851597e9052c8a91d3ab3453565bdf00263c1dfb84173508aa586665ee04d14b06506c4be1f790a934411e10531719328bc98b88bc7c8a306f9c1129288caa06cd43d5227bdd96dd7db6d63ccdaa9a7e1ff5ab9ac43325ac360ece254fc01922b763f0e050000",
    ],
    [
      "ETag",
      "zLOaQhcfpW6K8M1PgDrc4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd3cb7282300040d17fc9da71c0f880ee789580b550408a6e3224041a14ca4b4ae8f4dfebf437ea59dfedfd0629a5aceff1f07961357802225da94bbadc378a6e7e158432323b8ab6cf1d1b556b44e0f4aaab71227379f6231d7dbce15b7e1866634d76f5504a5917f646cc4f91405bb97db66f0585c6cc69c2835ccb24f2def8d9752c0bb73eb461c9b7f66cd647a41129f6bc6085851859e9b9ae555a695928f7ec18f7e3d9c2d71042ab4b64cf4797b3eaf32a3defa15679ae838dc95cab51abb40689e6cd2179f194933eb863ed67161c833ed892b68341767584a876cb8787ff0b2c009b1adeb11ef3fbed70a3aa0bf0b73e1e44c3eeffeb2ced58077e7e010bcaf55819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-85-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "c8fbb8e641027949d11a2574654a484748bb8726649c0b75039862d3a9aaf2df77314dd6aa52fb09dbf79c7bce7df044f63cdf91098978725f41f9f8e94e44e48c80a209be7e132edd479ff3dd6891eead1fe5afababc12a994e11c16b96a45991424b8aaa642027db4d3b294555d0528816266a8dec9639e89b3dd31c8ebab639469e84345ef27c8fec5ba50a39e9748edaed448824055a70d966223bbd771e7a9da21477c094ecbc96eca08aecbc2ffa25158c2a2ef2e97683062a09650819e5295af8cfdc45e7af53b739cdda09821f3803ca98a87255dbc2144ce4314faa5267259327a26dbe38908db374e681c1445a657998d30cce8c1d5534548f051817fe7a65b8dec5da5fcd0277ed859bf9a5b39ab5e7ebe576e56d8c9b4bc7770c45a31434d7981ae7fae6e105f5772015cfb57a503fd7cacf0d72df8ea526a0b48426180ebb036a8ebae3288e862c1ef5ed28ee42148da2a14dfb51978d2db0761150e46951cda2b9c8c72ca6d085381c0e6c2bb4c60308a96599616cc7fd9e3d8807f6d8228733f2b7e40a165c1642f2a643e4c67703270cfcad379f058e2e21a655aa168db1ba80971e151688a0776a3ad4512e50a96eb7eb058e3f9b07eeb5d34c780909658f9b7b9c714c530988a625364f41b9123b6c18f1662b6781603db1ab635092c9ef2752f7bc76f1a2e5277a8003aced2afd259bc077bdafdace11714dd34a431e9a0329d0f22dd686ae0f7f10894bda6421dfb78eff93344f3ec45042ce3e9e268275e0c37fedb8f888c5d54719a9f08ebbc3642dc24a687688eb729fd9a361af675944834bf526",
      "d6d7b1d3c2d71921835c3d57d42c3e16da8855f204c2208edfd3dd3afc0369b2c7f878040000",
    ],
    [
      "ETag",
      "JoIakb+nd8Dlk4XrZPP6Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614f82501486ffcbe92b6c628acae6072c2a37b5429cabe6dc150e880197eebde49cf3bf772e99b56aab2f70cee13997f77d610fcf69118103ab3479a950ecce1254f7baf051569992742b7921110c40c512227b13af6935edbc7257f3c744b112e7c9c3b6df2742866bcc19387b8853cc2209ced31e0a9623ad853cabf262597706a85da987d3c01f4eaea9cf79a4fbc96c347207230f0ec66931628a2d6bfe1f6b8b83011bbef231468145885a4b29f8064335d43625cbcb0c4dc92b11a2841aae1f24825725139c9b3431bb6dd3b2cfada66575ba8db6d52330e32153292f889d4d491f28ae58e6f32db9049b0051976438aeafaf344ea3da882e8793c06ed5fabe02242d4e335cfe0d92de35a3cff0811d23f8ceb19c57853a5157a35bf7b7e328d3cfa32eddc0fb414845499d906038f6a6813bbed3dce2e87db05328ef04a72025ea0cad46abdbeed88df7582fb88e9adee32851a10121a3bfe32655e0c42c93787803312a87bf7b020000",
    ],
    [
      "ETag",
      "9NE2126muAbWZgtapeWgYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-86-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "30",
      "14",
      "fe",
      "2b",
      "c8",
      "7bd9a4264012121229eaa284ad4809690969b54d53621b43dd02a6b6e95455f9ef3b40d3b59bd43eec0973ce773917fb11ddf222461344787a5731f9f0e14610748298c629440767e56211e28589d3d5fabb2956e79773e7623a0504af590ae765c63a4a54923235d96ebaa9145589a5101d10eab8c38e3decdb3ddb1eb996638f81a758962c79710bec6bad4b3531cda377371522cd182eb9ea52913fc7cdfb9e594a71c3a856e66b4b135c94f9b6e9692628d65c14d3ed060aa814933b96639e41097f9831f9fc5abacb71de4d017ccf29c3948aaad0755920414591f0b4928d2a9a3ca2a6cc1707b4f196de3c32e6eb6d107ddce3bc26ef3f195819bb9d64aacab4f1255caf8c7d095ed75831b537aecebcd033202445c233b6e3f1de981aa7c62c5840f4f8b7f4577e64d85045cc94e64553438449c66affa731f9ff2ea726600d4e6d7237b286d876ad3149c888266edf2189c50871c9c8c17d62d1f1800d62c230f074addeb070019d1312bb49af17270e1b830a1d10c78ae3d889dd9e4313e28efa241959093a9ca05f926bb6e0aa148ab7b34257a11f79bb28dc06f359e4356d2418e6b1688bab9b7859a7862601f4465f873acb0538d583f783c80b67f3c8bff4da5d2f598ae9c3e60eb69de04c3140638973a6995c89188686ced71b3ff2d7c16c098c6681e7478442931f8f7f08d143d94c5937dfda6b3868fc8f804b9c550de2be3d201b1d0e27ffa7e080c44f80c0d56ed9e862eb85df501b0a59c2242be8fbdb07709378f7851e9f0b60e1c1808dd2f00f778daada844ad6de39",
      "9e37f5b56c77d41bdb43d480a5fe3bd7b77ac3e3706b8d5a91e5acd04f1db5cfa59e5593aad43308927055023ff80ad9df950171fdae040000",
    ],
    [
      "ETag",
      "4HpDDRaD/agMOZ/oMPVC5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ede32cd8c9aa13fc3047d9ca4ad9ba09932112e3b5b6b6b92e49378af8dfbdc47dc95dde3cb9f7e54e70acd41ee6b0abca9f1ef57053a27d774d8ea66face1d291320823402b4a26a7c3e4a0a25b556732997d1dd7afcbf5382e170b268c3c602b607e82a2c2666f60fe7d02255ae46fdbadf61319b343e79424fb8c9fe39c8596f64ec85669fab84c63386fce23a8699763811a954437b2d354a3b4894b6b44db351818eab544031ef60fa5a6be139a286025984541184dc2bb309ccec6f7e103830d49612b52ccae3e806d2c59d1e4f4c761216440fb967317fefcf53207dafca3cbc1a279d3c4be069de5f86aff442e92e5a856f738022978192f95bddecf17edfcab0569010000",
    ],
    [
      "ETag",
      "7y3hn6+njNcI8XkYKBY0Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b7282300000d0bb64ad8e98509aee828005a2c858e5b361102302a234418438bd7b9d5ea3be3bbc0748b38c0991b4d78a5dc00718d2199e6413b779d78d7b91cf664496598ba3834d7aea95077f307c05b3445ae43457a3c22e16da8dd67bb93ecf3bc7e3049ddb1ceead75e286fe568f3982829a9f28627594aa36b22fa72daf20350ebd7945b2f2903c5ad32c88ea5543539eae1c251c4c5ba8c8b5babc12ac1d9f6eb71c2daa69ac2d37da8a7afb40d2b87694cef7e0b22183f4bbf00beb3b0887fa6dacc5eee678df960efcee166161e0200e9b80d842ee5c874d5e5efe2f3002ac6f0ace44523cb74315e311f8ab9fb443c39eff759672c6c1cf2f46d461e119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-87-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91f738daa4a46dd24ad5a84a18656dca9214344d5364bb4e30a471881d18a0fef75d3b948190e029b6ef39f79cfb912774c3cb0d1a23c2f3db86d50f5fae05410788299cc3eb3af94b9cecf1ec849e93af67f7853ffc71fa984f2680e09a25f1b62a58478aa6a64c8ed77137af4553e15a880e24eaf85ea737747b87bd9ee73b83de08789215d9829737c0be52aa9263dbde6b777321f282e18acb2e15db9777fbeed0ae6a71cda892f65b491b54a4fdb1e8b74250acb82827eb180c3492d529db625e8085ffcc0d397a9bbacbf1b69b03f88e538629154da9b42d48414599f1bca94d56347e42c6e6ab038a8345304b2c2a8a665ba625deb2036b83154ed543c5ac9368b5b4e6e1c92a5a4e93f92a4ce3d969b09c7667abc57a19c6d6e569100596c2a460866b4dac23730be102fa1b26152f8d7aa29fb5f27383e6efc7a209202d591b4c3d67887bbe332219f168e6bb0392398c109f7803ec12878efaacbf210c03cf881a162e45d96743e25297a423d7c1691ffb34c583fe28ed432a6740fa84c2847707e8bee68a1d735909c9db0ea1cb689e046912adc3d934094c09196e0a75dc1ad305bcf6a8a040007d50d34e47b90025ddee799804d17496cc2f8276c20b9663fa10dfc28c335c4806685c43f314ab9762030d43e174191c03d84cec7c1f9468fcfb09e99e6b17af5afe424f6080daae325f1427d13cfc6eecec1117b8680ce4ae3da00a2c5f416de07af70790b0a46d16f4731d44bf50fb14b18cd5aca49f4f13c026f0e9bfb65f7cfd27c75a462ab8c3ee50a94568cdda1de2a6dc67b6efb903df43065cab77b1e1a8b7ef9ace",
      "a133b22d2bd57345ede243a1ad58235f401084f187a65bbb7f4e3d59d478040000",
    ],
    [
      "ETag",
      "UTxb0fzJFcPb+Jwl86KHzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "10",
      "85",
      "ff",
      "cbf41553a9d792f88097aa0d5a458c0f8d312b0c880596ee2e6d8cf1bf77965adbb44dda179819be59ce397084a7380bc0826d1c3d17280e5711aab92e5c9445a224dd729e49040350b14893b551e4d6f6b3fbd56d0fafdbc3c8e9afe651a74384f4779832b08e10c6980412acc723642c455af37952a4d9a6ec0c50875c0f179e3b9e0ea94f79a0fbe9d271ecae33809371590c98629b92ffc7dafa64c09e6f5d0c5160e6a3d6920bbe475f8db54dc9d23cc18ae485f0514209970f22c18b9c09ce2b34a9b45b15b359336f4cb3d5ae36cc5b0213ee3315f38cd8e582f481e28a252e7f2597d024409425190ecbeb0b8de3a034a2cbf1d46bd64b7d5f019216c6096efe0649ef8ed167f8c0ce117ce758ca8b4c5da83be7c1feed38caf4f3a8beed0d7e1052515217c41b4f060bcf9ecc34b73e7bef1e14ca99e014a4449da159adb71bad66f53dd61ed751d37b2c250a34c067f4778c620556c81289a737d1c904647b020000",
    ],
    [
      "ETag",
      "b3HgR3jPJW9Ce/8GgLDWQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-88-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "40",
      "0cfe2be8f665939a0442482052d44529dbd8f2d211d2699da6e4380cbd1638ca1dddaa2aff7d069abea85afb29c47e5e6c9f7d47ae781e91310979725d4179fbee5284e48880a20946b3f0eb746ecdcffdbfd6fa9b75ceabd1829d2693092278cd92342b52e84851950ce478b3ee26a5a80a5a0ad141a18e6d778ca169f40d6364eb96e1204f421acf797e85ec0ba50a39eef50ededd448824055a70d965227b88f76efabda21497c094ec3db7eca18becbd6e7a9c0a461517f964b3c6022a09e51632ca532ce19119851f9f4b7739cdba09826f3803ca98a872559785124ce4314faab25125e33bd294f9e483acddb93b0bb4d96ab30cdeef685693771f342ab5edb60459a54afbe4af16daae40af0b2a41eeb41f5f5cdfd530548a98a7b0e5d14e9b68c7da7479a23d02dbd8dc5b788166602d1148c5f3a692808629d455dc0fcb7bf94435812a946993db913ea486ad3b611c8e586c9b5618eb10867638b2a819eacc19c0200a81224fd5ea0d8be6223763cbd675b3ef5803e83b940133079149ad88e9d007c71c42441d6647647f44fe945cc109978590bc9d18f9e17b81bb0dfccd72360ddca68d98e2544edae2ea269ed6a9b04904bdd2d7bece72814ef5f8bd65e0fad359e09db9ed8bcf21a1ec767d8d6f1ed35402a269493350502e44844323a7abb51778abe5748e8ce6194f0f0849c6bfee1e09c16dd14c5935bfb5d770d0f81f006734ad1ac44dfb410cb2df1ffd5f611df8def2f3eb12d302bb4599df88c2256f15c8f78debff246dc887184ac8d9db1b80e026f1e6ad1e0e07b1783a682315fec77d63b2366125b47bc7b3a6cb966d8f06a6d55cbaa2a57a911b38c661c0b546ad0819e4eabea3f670ea7935a94a3e803089ebb2",
      "6c26b5ff07c354bc81b8040000",
    ],
    [
      "ETag",
      "mbJAL5LZRx5SK5Ziu7McPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "414f83401085ffcb781462a15a91a487d61025214da5e5d098a6d9c2802030b8bb68b0e1bf3b4bbdecccbefd76decb5ce0b36c33f0e15c165f3dcae1a640fd669a18555f6bc5a5a3562158805a144c868bc46d94da1eee77c35d777b58fd36f3aa582e9950e9073602fc0be425d69902fffd02ad6890bf9d4e729ac8981e3aa3849b7df012c42c349419619344d16a1d05301e470b2a3ac798a3c4364533b2935461aa43935689a6abd156d4cb14154cf0f45048ea3b21896c566ccfb39dc5dc711de7d19b3d384f0cd6940a5d52cb6cb203b6d1a4451dd30f8705870139b59c3b9fce6f965d13e8f88fae078d6a2b897d151acbd9d5fe994c24cd51b5ecd18254f0325e4b7dbd8f7ff3710acd69010000",
    ],
    [
      "ETag",
      "I6U2mssPY4Sy/p+YAzm3jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0",
      "bf",
      "e42c0c60a0d09ba9a053b02a01042f99885110110828814eff5ea7dfa8fb87fd06344d59db92ae2ad80dbc83816a969cca6e6da2799f0f63d4b7d88b9870fd298abcf9263d57c814d7f2a2c6447748a67a0b051a4b3b1bb759a652d53b859b0262fb51569140b16e2168ae1f4b29c8f74a7197f094a79f97aceffd93b16b45d560ff7cc55b973734504203277a486ce8ababb12de647b2c6d71947851d2b03f25d67b69734e706adc5c7dd75ec841508e9e2186b6f7c97a4fa01f22f23705088b56398d1ae913a16f5f5ea84b1398c213c085aca2f2fff17980026ea9cb396e4cfed53ddb226e0af3ee9869a3dff234639e3e0e717ae90ce7919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-89-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2b91f738da266d43d34ad5a84a80686dbaa5298c4d53e43837c190c62176600cf5bfefc6a10c84044fb17dcfb9e7dc8f3c921b5e246442629eddd6503d7cba16313920a06886afa73fe0747879fa590d999d8b9f89f7a7fefaf77e3a45046f58926ecb1c3a52d4150339d9acbb5925ea925642743051c71977acc381d5b7ac9163dad6187912f274c18b1b645f2955ca49afb7d7ee66426439d092cb2e13dbe7f7de5dbf5756e21a9892bdd7923d5491bdf745bfe48251c54531ddacd1402da18a604b798e16fe3393f8e875ea2ea7db6e86e03bce803226ea4235b630051345cab3bad259c9e491689b2f0e64ed2edc79683091d7db222ae8160e8c842a1aa987128c9360b5343cff64152c67a1b7f2a3f5fccc5dcebaf3d562b3f4d7c6c5991bb886a2710e9a6b4c8d237df3f182fa0948c50bad1e36cf8df25383bcb7636908282da10d4623f3905a8e398ed378c4526760c7a90971ecc4239b0e62938d87304c62a0c8d3a29a450b515803135990448703b31f0d599a448ed9b7a37e3c1a382c1d9860a7647740ee2baee098cb5248de76885c045ee84661b0f1e7b3d0d525a4b4ced5716bac29e0a547850522e89d9a764d940b546adaedf9a11bcce6a177eeb6135e4046d9c3fa16679cd25c02a26985cd53502d45820d23fe6ce91e23584fecdb3e28c9e4d723697adeb878d1f2677a88036cec2afd25eb30f0fc536d678f38a779ad2177ed819468f90a6b43d7bbdf88c4256db390ef1b37b824ed5300295450b08fa789601df8f05fdb2f3e6271f551462abce3ee30d988b00ada1de2badc27b633b2cda1fe5315add49b98659bfbae35399a8cb085423d55d42e3e16da8ad5f21984411cbfafbbb5fb072ad6626878040000",
    ],
    [
      "ETag",
      "GXeG4YG+t4c5loZdIxuKzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcbf80a49b177923e506db5e9554a1b13d3345b18281558dc5d34b5e97f77166b356aa22f30337cb39c73e0008f7116800d9b387a2a50ec2f225477ba705116899274cb7926110c40c52222fb6ce9c456745f1f4ed572317b75abce7e18753a44487f8b2903fb00618c4920c17e3840c652a4359f27459aadcbce00b5cff570eeb983c90df5290f743f598c464e77d483a3715e0c9862eb92ffc7daea68c08e6f5c0c5160e6a3d6920bbe435f0db44dc9d23c4153f242f828a184cb0791e045ce04e7264dcc56dbb41a55ebd2b29aad4add6a1398709fa99867c42ee6a40f14572c71f90bb9840601a22cc970585e9f691c07a5115d0e265ea356eafb0a90b4304e70fd37487ab78c3ec307768ae03bc7525e64ea4cf54753e7b7e328d3cfa3ae1daff783908a923a23de60dc9b7bce78a6b9d5c97b77af50ce04a72025ea0cad4aad556f362aefb15e711d35bdc756a240037c467fc76dacc00e5922f1f8063da1dd847b020000",
    ],
    [
      "ETag",
      "FaVAi1gX5KOtVUPzR3AyKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-90-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d6f9b3010fe2bc8fbb2494d8090141229eab294ad6869d210d26a9aa6c49883ba054cb1e91455f9ef3ba0e98baab59f3077cfcbddf9fc406e791e91110979725741b9fb742342724440d104a3d2dbd1a57165c9b3254f96df68bcfa399493f11811bc66499a152974a4a84a0672b45e75935254052d85e8a050676874cc63cbec99a6ed180373883c09693ce3f92db2af952ae448d70fdedd448824055a70d965227b8aebf73dbd28c50d3025f5d7963aba48fd7dd3935430aab8c8c7eb15165049283790519e6209cfcc28fcfa5abacb69d64d107ccf1950c64495abba2c9460228f7952958d2a193d90a6cc1707b27267ee34d0a68bf53cf8bca5594dde7ed1a8d4369b1264952aedbbbf38d7b6057a5d530972ab5d9db9beab61a814314f61c3a3ad36d64eb4c9fc547b06b6b19977ee059a89b5442015cf9b4a021aa65057f1382cefed15d504aa50a64d6e6ce3989a8e310ce3d066b1630dc2d8803074427b40add060c33ef4a31028f254addeb0682e721a5991d5ebdbb41f19c3c8610eb3ad70e840cf6286e940681a0e389825fb23f2b7e40a4eb92c84e4edc4c895ef05ee26f0d7f3e924709b36628a53396d8bab9b7859a7c22611f44e5ffb3acb053ad5e3f7e681eb4fa68177e9b6373e8384b2ddea0eef3ca6a90444d39266a0a03c17110e8d5c2c565ee02de69319329a6bbc38202419fd7e782604bba299b26abeb5d771d3e613e092a65583b86f0fc424fbfdd1ff155681efcd7fbc2f410bec1665fe200a97bc5520cbb5ebff226dc887184ac8d9c71b80e026f1e15b3d3c1cc4e2d3411ba9f01ff78dc9da8495d0ee1dcf9a2e5bb6630f6c7b401a70a9dee41cdb3e0cb8d6a81521835c3d76d43e9c7a5e4daa924f204ce2bacc9b49edff01553a81ceb8040000",
    ],
    [
      "ETag",
      "sIyaQ0W3sHQigQBafSK9sA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90d14f833010c6ff97f3d111409d3a923d38833a43e686f260ccb274e5604ce0b02d2a2efbdfbd565fdaeb77bfbbef4b0ff05eb53944b0adca8f1ed57052a259d92245ddd746f3d551ab11468046944cbe66dbd3ef65eefb77f2e7e20977e3eed1c7723a6542cb1d3602a2031415d6b986e8ed00ad6890c7361be536326686ce2af3c54b7c1fa72c34945b619125c9cd2c89e1b83e8e604fdb140b54d84ab42b3b457b94666ed36ad174357a9a7a255183835da354d477421179ac7893c00b2fcfc3b330bcba0ec6e184c19aa43015b5cc66cfc036868ca853fae2b01032a05cc9b90b777eb21cd840eb7f743618d44b45ecab31775d677f4b3692e1a846f5380229f8331e2af3f73efe023b15af1f69010000",
    ],
    [
      "ETag",
      "YUb+xPd//Fcz4Oeh5pJ/eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb642d8e7c14e80ec52238d2567eca860998f28b3424c6009ddebd4eaf51df1dde3780458118cb6e5f2deac00b18a162ce8bf99e186b5b5477373dd3ed88adcd871dc46e411ddd15529a705f5163cd8ef04125abc8efe179e4649184cb5d7bb544921c4f3ae3a52c7691aebb435f624b4281786b2a685d4a65efa78bfa2472994f12333228f6d7c6c3b4c93655e9688d33f19c1564c2052ec391dfe0b266c755abf1731e53a271151fc6b895c83637dfc32938bc7a8abf883ce5b38b4fae14f752590d0eee9a955d3b77b3153249d24bda1bb287f2f9d3d3ff0566000da4a68865f563bbba34cd19f8ab9fdd46821effd7085244c1cf2f58edf48e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-91-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda3c08e19148d11a25748d44c84648ab699a906d0c754b30c5265155e5bfef629aae55a5f613b6ef39f79cfbe0193df03245534478fed8b0fae9dbbd20e80231857378750e16b78e347402b1bc5a0447dcc8203dce6680e02d4be27d55b09e144d4d999ceeb6fdbc164d856b217a90a837317ba6639923d374bda16d4e8027599105bc7c00f69d52959c0e0667ed7e2e445e305c71d9a762fffa3e388c06552dee195572f05e72002a72f0b9e8f74250acb82867bb2d186824ab13b6c7bc000bff9929b97c9fbacff1be9f03f8c029c3948aa654ad2d48414599f1bca97556347d46dae69b03dafa81bf880d2a8a665f2625deb30b23c50a27eaa962c655b4591babf06a13ade7f16a1326dbc5b5bf9ef7179b60b70eb7c6edb51ff986c2a4609a6bcc8c4b7d0be102fa29938a975a3d6e9f5be59706ad3e8ea52580b4645d3071870e36bde18464c4a59967d9241b32423ce2dad822433a19b3714a18069e16d52c5c8ad29ad8d6908c69e2389e9d8cadd44b26e6c84d5262a5a66d0fad74e4a0d3053ad65cb125979590bceb10ba8d56b19fc4d12e5ccc635f9790e1a650cbce585bc05b8f0a0a04d027359dda2817a0d4b67b15c67e345fc4ab1bbf9b70c0724c9fb68f30e30c1792011ad7d03cc5eab548a161289caffd2580f5c47e9e83124dff3ca3b6e7ad8b372d7fa5c730c0d6aed25fb48da355f843db39236e70d168c8a13ba00a2cdf416de0faf41790b0a45d16f46be747bf51f714b18cd5aca45f4f13c03af0e5bf765e7cc0c2ea838c547087dda1b215a135eb7688eb725fd89eeb58b68334b8561f62637774ee5a9ba3cdc8f6ac542f15758b0f8576628d7c054110c61fea6e9dfe0108860ce978040000",
    ],
    [
      "ETag",
      "6v3i3wcN6LoDFCLwausLdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83401085ffcbf84a93527b25e903b51789f44e9f4cd36c61a054607177d1b44dffbbb358ab51137d8199e19be59c0327788ab3002cd8c6d17381e27013a19aeb6281b24894a45bce338960002a1611d9519d6330aad9c7c6fca1ef8aa9531fb6db51b74b84f4779832b04e10c6980412acc713642c455af37952a4d9a6ec0c50875c0f97dec2998ca84f79a0fbc9ca75ed9e3b80b3715d0c98629b92ffc7dafa6cc09e6f1718a2c0cc47ad25177c8fbe72b44dc9d23cc18ae485f0514209970f22c18b9c09ce2b34a974cc8ad9bc356ba6d96a571b6687c084fb4cc53c2376b5247da0b862c982bf924b681220ca920c87e5f585c671501ad1a533f19af552df5780a48571829bbf41d2bb63f4193eb04b04df3996f22253576ae84eeddf8ea34c3f8feadbdee00721152575453c673c587af678a6b9f5c57befa050ce04a72025ea0ccd6abddd6835abefb1de711d35bdc752a240037c467fc77dacc00a5922f1fc0690187c807b020000",
    ],
    [
      "ETag",
      "9t9zdG2Az5QKDLrOI4F88g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-92-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536d6fda3010fe2b91f765930a24040841421d8274cb44a183d06a9a26b09d4bea3689d3d8e98b2afefb2e49e98baa759fe2dc3d2f77e7f323b9165948468489f8a684e2e1d39564e48880a63146fb17d3bbfb32157a3370efe76c7a6dfdb839b91b8f11212a96a2699e404bc9b2e0a0469b753b2e6499d342ca160ab5dc6ecb1ad856d7b29ca1d9b75ce42948a2b9c8ae917da975ae469dcec1bb1d4b19274073a1da5ca6cff1ce6db79317f20ab8569db7961d74519d8f4d8f13c9a916321b6fd65840a9a0d8424a458225bc3043f6f5ad745bd0b41d23f85670a09ccb32d3555928c1651689b82c6a55327a247599af0e64edcdbd69604c979b45f07947d38abcfb6250656cb705a832d1c6c96a796aec72f4baa40ad4ceb8f8eead3c0343858c44025b11ee8cb1716c4c16338c865443f33ff74ffdc0b0b08e109416595d4540590255054f83f2df5f4f45a01abd9ae4d63107d41a9a2e8b98c3a3a1dd6791098c0d99d3a73633b9db835ec880224f57ea358b6632736dcaa81dd2c83223e6323a7407cc31a3b0df05cb04da8fac7060da9c93fd11b92b84869950b954a29916b958f981b70d569bc5741278751b11c589cc9ae2aa265ed7a9b149047dd0d7beca0a894ed5e8fd45e0ad26d3c03ff79adb9e434cf9c3fa06ef3ba2890244d382a6a0a13895210e8d9c2dd77ee02f17933932ea2b3c3b201419fd7e7c21040f793d655d7f2baf41aff63f00ce6952d688dbe6402cb2df1ffd5b61568de04381aed9355b26ee741f95fe201477bc11213f37deea1769422b88a0808cff7f09105c27fefb540fef06b1f872d04669fcc795e3aa32e10534ab27d2bad1863d741ccb1e921a5ce877b9aedd3bccb8d2a81421854c3f75d4bc9b6a6475aa54cf204ce2c62cfcc537ccfe0549676398b7040000",
    ],
    [
      "ETag",
      "5WCwxumitU69xLbCk1JqFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90614f83301086ffcbf9752403e37424fbc014e712b24c7431c62c4b0707630257db222384ffee95f9a5777dfbf4de37d7c37751a7e0c3b1c87f1a54dd4d8ee6d53631eaa6349a8ba45a234c008dc8990c8b566e3f4fdeecb9b95c8272d5ca0fef29582c98d0c9092b017e0f598165aac1ffeaa11615f2b7c3418d1319339db4ca7af31eaec298858a522b6c7651142ca31086fd3081331d63cc50619da01d29159d31316b9b568b4a96e8686a54821a46787cc81535522822871567ee39eeecd6f55cf7fe617ae7ce192c2911a6a09ad9dd1bb08d2123ca985a0e0b2e036a6c3977369ebfa3cc81f6ffe8b233a8b78ad857a3b59c5eed1fc946321cd5a8062790085ec64b61aef7e10f954f8c0269010000",
    ],
    [
      "ETag",
      "EiwpPYh26FuxxAlGwpW2DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd3597282300000d0bbe45b9db228d03f9646444050a0e84f26c108947d11814eef5ea7d7a8ef0eef1be028a25d87fa2aa32578071366a555b4dad7a2a23de2802918727377258c52c56378417dfba4674492adcc45f79b1e347076e95849e1e3e25fbd59241724e45361cf45aad7a5eec4e4985607c63c33f054faaeea919d1878213cb899dcab02acccbb007b9b1cf7e2da4bf46ee098407694d9f38db219cac172e8e61cf1bb5077975736c39af661eeb74e239e4693b78cbc9531d2a6626459b1df70a84d1bac2e9331afdb98f74303876ae05b30f9b21bc7882d295bbdbcfc5f6001e858a72ded50fadccead256901feeaa37eaae9f3bf42714b5bf0f30b379dd76819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-93-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b91f7953e421f492b55a36ac3a8d6a6234d81699a22dbb90986340eb1d30da1fef7dd38948190e0536cdf73ee39f79127722ff2988c0913e94305e5e3973bc9c809014d537cbd99ce7920ed61faf77b795edde483ee7c505d4e268810354bd15d91414bc9aae4a0c6db4d3b2d6555d052ca16266a8d7a2d7bd8b34f6ddb71bb037b843c0559b214f93db26fb52ed4b8d3396ab75329d30c6821549bcbddcb7b677fda294a79075cabce5bc90eaaa8cec7a25f33c9a916329f6c3768a0525046b0a322430bff99313b7b9bba2de8ae9d22782f3850ce6595ebda16a6e0324f445a95262b193f1163f3d5816cbca5370b2d2eb36a974739ddc18915534d23fd5880751eac57d6c23f5f07ab69b858fbd16676e1ada6edd97ab95df91bebfac20b3c4b539681e15a13ebccdc7cbca07e0c4a8bdca887f573adfcdca0c5fbb1d4049456d00423a73ba4b6db1db184393c717b0396748131973903da635d3eea433f66409167440d8be6321f81d3a37408113f1dc4519f0dbb11e33d1ac52eeff706ee28a18c91c309f9530a0d73a10aa944d321721d2c422f0a83ad3f9b869e2921a155a6e78db1ba80d71e351688a00f6a3ad4512151a96ef7c20fbd603a0b17575e33e125a4943f6e1e70c609cd14209a96d83c0de54ac6d830e24f57de1cc166623f8e4145c6bf9e48ddf3dac5ab96bfd0431c606d579b2fd984c1c2ff66ec1c115734ab0c64df1c4881966fb136747df88d485cd2260bb9dc7ac14fd23c0590400939ff7c9a0836814fffb5e3e22316571f6594c63bee0e57b5082fa1d92161ca7d66bb8ee30ccd9faa69a9dfc546b67bec5a9da3ce083bc8f5",
      "7345cde263a18d58a55e4018c4f1fba65b877f21b5ed5078040000",
    ],
    [
      "ETag",
      "XADcRo16gxKrFuXn50D5uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92dd4ec2401085df65bc6d9356a060132e40513105f92924680859da2914da6eddddaa84f0eece5644a3267ad3ce4cbfd99e73da3d6ce32c041796f1eaa940b13b5ba11aea6284b24894a45bce338960002ab622726045770fb3d9564e97a9376dbcd62cbb2e86cd2611325863cac0dd431463124a701ff790b114692de04991668bb23340ed723d1cfba36eff86fa9487baef4f3cafd5f63a70304e8b21536c51f2ff589b1f0cd8f0e50823149805a8b5e4826f30505d6d53b2344fd094bc10014a28e1f2c14af0226782739326e645c5b49d8a7d6edbf58655b32f084c78c054cc33622763d2078a2b968cf80bb9048700519664382aafcf348ec3d2882ebb7ddfa996fabe02242d8a135cfc0d92de35a3cff0811d23f8ceb19417993a51d7de7debb7e328d3cfa3ae5a7ee7072115257542fc6eaf33f65bbd81e6e647efed9d4239109c8294a833b4ad6aa35677acf7582fb98e9adee32a51a00101a3bfe33656e0462c9178780344c3d7c07b020000",
    ],
    [
      "ETag",
      "P0fJZYYksVbmLV8x5017rQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-94-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "a34010fe2b64efcb5d62cb7b81268dd7abe891b45429d5dc5d2eed020bae024bd945634cfffb0d607d8939fd049999e76566671ed12d2d13344611cd760da91fbedcb0081d21227006517cdb64557c5a9d69891cf8bb05df2de51f17930954d016c57151e564c05953c7848fd7ab6156b3a6c2356303201a38c6401de9aaa6aa96ad98aa03384ef2744ecb5b405f0b51f1b12c1fb4871963594e7045f93066c5735cbed3e4aa663724165c7e2b29830a973f163dce598c0565e564bd02030d27f5861498e660e1059944dfdf520f292e861914dfd198e038664d295a5b4011b332a5595377ac68fc883a9baf7ed0ca9dbbb3509a2dd77ef8758b8b16bcfd26612e6d3635e14d2ea4d360b990b615685d634ef856bafae906ae04a19aa534271b9a6ca589742c4dfd13887201eefac0dc5b78a1a48291847041cbce4688a39cb4169e26e5bd7f9f16800588f5c98da58cb06a2b4e9446569cdaba19a50a89223bb24cac474aec18c448228201275af60e854b565ae6c81c69aa9ea6b69d58899a189a6de8969338baee389aa16a9661107384f647e8bea6829c505e314efb71a1abc00bdd4d18acfdd93474bb36520c2339e9cdb54dbcf629a04928faa0af7d9ba50c94dad97b7ee806d359e85dbafd73cf4986e387d50e1e3cc53927508d6b5c1041ea054b6068e87cb9f2426fe94fe780e8def0fc50c1d1f8cfe30b207ca8ba298beedb6a8d8c4eff507089f3a6abb8eb7f908af6fba3ff3384dec25d85d3c5f9c72c9aa22903451ba866a86a63551fabc6505194df40fe1780b0f73d2fba58bbc12fd4870292929a94f1e77b01c55de2d3f33ddc12d4c235810ceca5a0b085316f45e29af4db488baef71e6d5bb66974c72f702ddee5468671187bcbd132928294e2a9a3fe96da2976a9863f17411296c8",
      "f7fc33c8fe03cbe965fdcb040000",
    ],
    [
      "ETag",
      "akugpcFpG2d/RNqMsqO/BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90dd4e83401085df65bc85a468fd29492f5a25da489a82c5c498a6d9c2805b81c1dda50d12dedd59eacdceecd96fe79c4c0fdfb2cec087832c7e5a54dd558126b24d8cba2d8de6d250ad111c40230a26a3cd93384fc5a99489fcd51faf6154bd2f8af99c099d7e6125c0ef219758661afccf1e6a51217fdbefd5389131d3355659adb7c17310b3505166857512868b6518c0b01b1c38d221c61c15d629da918da223a66665d36a513525ba9a5a95a286111e1f0a456d231491cb8a3b9bbadedd8d77ed79f70f935b6fc66049a930926a669337601b434694319d392c780ca8b1e5dcf9789e469903edfed16567506f14b1af466b39b9d83f928d6438aa512d3a900a5ec68b3497fbf0075a43a49069010000",
    ],
    [
      "ETag",
      "QPDaw4avliUizsYKLQmVAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ffedd34b7282300000d0bb646d1c3e12a03b294a05e5a356a41b26428050a5247c043abd7b9d5ea3be3bbc6f809384344ddc7e7d920abc80114bfa3c993bb5669877ca77931c5216f275081d0de7f92b4a0c39525685a51ddd55df51b5720543eda4c025dd36db2b63ac0da3afd07e32717c5b783d3e2436da95caf9c2d072534ea56ed9661ac0bb68647e1e252c3d9f9800f7fbeab6564f921b3bc7b1e2139cbae3c5eb3ebc287d0f906d3b45d0896dcaf092b1d0f4cf3254171b3a58283d4882959fa6e16a6f99d857d0967dcec4a05f904cc8bdf0767d13106a5b27bbc3229a3f3dfd5f6006c850534e9a983eb6cb8aaecfc05ffdb81d6bf2f86f10cc09073fbfa6d9b37c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-95-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "7b6d1208218148d11aa5744d95900548ab6d9a903186ba054cb1e99455f9efbb98a64b55a97dc2f63de79e733f78460fac4cd014c52c7b6c68bdff72cf637486a8c419bc6e797ebdbdcc7fde8fad9d7d655cffdd376eb59dcd00c15a96c04595d39ee04d4da898ee827e56f3a6c235e73d48d473ac9e31368da1614c6cdd321ce0099aa72b563e00fb4eca4a4c0783a3763fe33ccb29ae98e8135ebcbe0f9e8683aae6f7944831782b39001531f858f46bce09968c97b35d00061a41eb881698e560e13f3389cfdfa6ee335cf433003f31423121bc29656b0b52105ea62c6b6a95154d9f91b279724081bb7217a14678de146554e2829e6909963892fb8a6a97fe66ad2dbdcb8dbf9e87cb8d17058b2b773def2f36abddda0bb4db2bd7773589e39c2aae36d3ced5cd830be8275448562af5b07d6e955f1ab47c3f969600d28276c168a28fb161eb4e9cc61392daa615a73a8d633b9e58d88c75e28ce8288929069e12552c5cf212db893d726c2b32f5844423934c2267649ad1303547436b8cb13db6d1e10cfda999a4174c545cb0ae43e8d65f866e14fa3b6f310f5d55428a9b5c5e74c6da024e3d4a2810401fd47468a38c8352dbeea517bafe7c112e6fdc6ec22b9a61b20f1e61c629ce050534aea17992d66b9e40c390375fbb17005613fb7e0c0a34fdf58cda9eb72e4e5afe4a0f6180ad5da9be2808fda5f74dd939226e70de28c85377401558be83dac0f5e137206149bb2c68bb73fd1fa87bf2694a6b5a92cfa7096015f8f45f3b2e3e6061f5414648b8c3ee10d18a909a763bc454",
      "b92f6c7be2400aa4c0b57c171bea9363d7da1c6d465ad052be54d42d3e14da8935e215044118bfa7ba75f807011bd7cd78040000",
    ],
    [
      "ETag",
      "QolJQFlZj65U8H1JzyuEpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "78",
      "a549b12d5a921ea8ad8ac16a5beac598660b035281c1dd45d334fdefce62ad464df40233c337cb7b0fb6f0949531b8b0cad2e71ae5e628453d35c50c559d6bc5b78a4a8560016a9132b999d255309cacb1d3791d3abdd19dd7f7cfd2c18009153d6221c0dd4292611e2b70efb7508a02792da2bc2eca65d359a0379519cec3993fb9e0bea0d8f493451078c3600c3bebb0180b2d960dff8fb5879d056b5acd3041896584464b25698d91f68d4d258a2ac796a25a46a8a0819b07a9a4ba1292a8c59356bfd7b29d8e7d6cdb27a7ed9edd6730a748e88c4a661773d6079ab4c867f4ca2ec1614036251b4e9aeb0b8fb3b831624a7f123add46df5780a525598ecbbf41d6fb28f8337c60fb08be73a2a0bad407ea3cb8f17e3b8e33fd3c6ae485e31f84d29cd40109fdebf13cf4ae6f0df7b0f73edc6854b7923848852643bbdd3ded9d38edf758cfc844cdef71b5acd18248f0df7199697013912bdcbd0156c724c27b020000",
    ],
    [
      "ETag",
      "yQoJLBNje33wB65DVA9ICg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-96-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "db",
      "30",
      "10fe2b91f7659368d3f4254d2a55ac2b61cb545ad6a620344daded5c82218943ec8018ea7fdf25a1bc080d3e35bd7bde7c3e3f906b9185644498886f4a28ee3f5d49460e08681a63157eb28b34bb58b897c2547af2ed741afc75efc66344888aa5689a27d052b22c38a8d17ad58e0b59e6b490b285422dd76e5976cfea5ad6d0e90c2c17790a926826b26b645f6a9dab9169eebddbb19471023417aacd65fa54376fbb665ec82be05a99af2d4d7451e6fba68789e4540b998dd72b0c502a283690529160846766c8bebe966e0b9ab66304df0a0e94735966ba8a85125c669188cba25625a30752c77cf14156decc9b06c674b19e079fb734adc8db2f0655c66653802a136d1c2f1727c63647af4baa406d8df31fded233b054c84824b011e1d6181b87c6647e84d5478dba32f34ffcc0b03049084a8bacce1150964095e17154fedb0baa0854a35bd3dc0c3b36b59c8ecb2236e491d31bb0a8038c396c38a03dd6e16e1ffa21038a3c5da9d72c9ac9ace774fa4377000c7a8cb37e3774ba3cecf5fa360d39755c6730e8766c1b5cb23b207785d07024542e9568e645ce977ee06d82e57a3e9d045e7d8c88e24c8e9a70d5215ee6d4784804bd73ae5dd515129daae1fbf3c05b4ea6817fe635f73d8398f2fbd50dde7844130588a6054d41437122431c1a395dacfcc05fcc273364d49778ba472832fafdf04c08eef37acabafeadbcec7eedbf079cd1a4ac11b7cd07b1c86e77f07f85e3d962f2b1467b8088dd1f04e18a370ae4d7da5b5e90a6b484080ac8f8c71b80e0baf1e14bdd3f1bc4e2c3411ba5f13fee1b5795092fa0d93b91d6091bb633749d6eb599082ef49b9edb1dee075c69548a9042a61f4fd43c9b6a5e75ab544f206c",
      "e2baccfdf977ecfe030c29cb6db6040000",
    ],
    [
      "ETag",
      "eJbYmnYO9hi/stABPCTz9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90614f83301086ffcbf95148e89c9b23d907874467c8b2a18b266659ba722013386c8b6659f8ef5e995f7ad7b74fef7d7367f82a9b0c423894c57787fa7455a0ddb82645d355d67069a931081ea0950593d7e3ec3d8adfc60f22a895799e6e37d13a2ae673268cfac45a427886bcc42a33107e9ca19135f2b7fd5e0f1319b3a7d629cbd56bfc18a72cd4943961b54d92fb451243bfeb3d38d221c51c35360addc856d311955dbab446d66d85bea14e2b3430c0c343a1a96ba526f259f167135f4c6ec44888e95d702b660c56a4a42da96176fb026c63c9ca2aa55f0e0b82013db49c3b1fce1f96472ed0ee1f5d9c2c9ab526f635e82c838b7d442e92e5a85677e88192bc8ca7d25eeefd1fea7f075e69010000",
    ],
    [
      "ETag",
      "+4dXCEW4D10mcsJ7UQCPCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "edd34b7282300000d0bb64ad4e6914a13b300d1f11ea842ab0c9000d060109891dfc4cef5ea7d7a8ef0eef0ef2b2644ad173dfb0137803d7fcd59c95b3b5306c3472bd5270c7eb2c941a09b241ed31090b92cda9677bd09a43db75c7be96f6141b2270628f4f95eed84e0413eccf6f6ed50d047de971f2b9c7c812a259b63d51b2f65317c567d4350276878e57e977ab79295e696abb5e153e3e718242518f2d3596c703ac1239a69b32f517e8d24446ac1a98b021c750b7d0a9ed3e4c7d69ad2c5ae44e3272dae30085ea3d4858778b7625e708bd6c372252c79dbcce9e9efe2f3001ec226ac914ad1fdbe1c23427e0af3e3d5f057bfcb7592e99043fbfb1a9802219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-97-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "95f738da342d6dd34a68542540a4361d490aaaa629b29d9b6048e32c76982ad4ffbe1b873210123cc5f63de79e733ff24c1e459190196122fb5343b5fff620193921a06986afd655b8ecb3efeae67a146ec37db265ded69b9f9d2142342c4577650e5d25eb8a839a6dc25e56c9baa495945d4cd49d4ebaf678680f6c7be2f447f614790af274298a4764df6b5daa99651db57b9994590eb414aac7e5eef5dd7a1a5865251f806b65bd97b45045599f8bfec825a75ac8e26c13a2815a4115c38e8a1c2dfc6726ecfc7dea9ea0bb5e86e027c181722eeb4237b6300597452ab2ba3259c9ec99189b6f0e247497ee22ea7099d7bb222ee80e4e3a09d534d6fb123a97c17ad5f1fccb75b09a47deda8fc3c5b5bb9af716ebe566e5879dbb6b37703b9ab21c0cb773d63937371f2fa89f80d2a230ea51f3dc28bf34c8fb38968680d20ada603ce98fa9edf4a72c65139e3ac3114bfbc098c326233a647d3e3d85d38401459e11352c5a60cd8cda894d696cdb031e9f0e81c69481134f6064a783b183514e0e27e46f25345c08554a25da0e91bbc08bdc380a36fe621eb9a68494d6b9be688d3505bcf5a8b140047d52d3a1890a894a4dbb3d3f7283f922f26edd76c24bc828df877f70c629cd15209a56d83c0dd54a26d830e2cf57ee0582cdc47e1e838acc7e3d93a6e78d8b372d7fa54738c0c6ae365f124681e75f193b47c42dcd6b03796a0fa444cbf7581bba3efc46242e699b85dc6cdc604bdaa70052a8a0e05f4f13c126f0e5bf765c7cc4e2eaa38cd278c7dde1aa11e115b43b244cb92f6cc7e98fed0131e04a7f884dc6c363d79a1c4d46d841a15f",
      "2a6a171f0b6dc56af50ac2208edf37dd3afc03027a273278040000",
    ],
    [
      "ETag",
      "/GSL0b+sQH5SYSydYbIYIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85",
      "ff",
      "cb",
      "f8",
      "5a92d60b97263c5440690288b418a3316469a75068bb652f1a24fc77672ba251137d6967a6df6ccf39ed0ed66911830bf374b1d128b6270b54b7a698a0d49992742b7921112c40c5164406af76d7d6fdf59d5eddcbd683ea74fce5c66bb78990d1127306ee0e9214b35882fbb88382e5486b11cf745eccaace02b52dcd300827fee89afa9cc7a61f4d0703ef72d083bd755c8c9962b38affc7dad3de82159f4f3041814584464b29f80a23e51b9b92e5658635c9b588504205570f1682eb9209ce6b34a9b51a35a77ee69c3a4ea3695f382d02331e3195f282d86940fa4071c5b2097f21975027405425194eaaeb338dd3b832624a7f14d6cf2b7d5f019296a419cefe0649ef92d167f8c00e117ce758ce75a18ed4d5e0c6fbed38caf4f3a8ae17f67e105251524724f487bd20f48663c33d1dbc5f6e15cab1e014a44493a1639f372f1a75fb3dd60e3751d37b5c25345a1031fa3bfaa902376199c4fd1ba219b7947b020000",
    ],
    [
      "ETag",
      "Sz0D0uHkVujXs9ZtCCIhqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` > ? LIMIT 1",
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
      jobId: "grouparoo-job-98-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffa5535b6f9b3014fe2bc87bd9a42681840488147551ca3ab484740969356d5362c381ba054cb1695555f9ef3b40d3cb26b50f7bc29cf35dcec57e20d73c8fc898309edc5450de7fb8128c1c115034c1a8f9cd3f5d9c1a57439fdf98d067734aefacbbc90411bc66499a152974a4a8ca10e478b3ee26a5a80a5a0ad141a18e63778cd1c0e81b8665eb43c3419e84349ef3fc1ad9974a1572dceb1dbcbb8910490ab4e0b21b8aec29debbedf78a525c41a864efb5650f5d64ef6dd3e354845471914f366b2ca092506e21a33cc5129e9911fbfc5abacb69d64d107ccb43a06128aa5cd565a14428f2982755d9a892f10369ca7c71206b77eece026db6dcf8c1c71dcd6af2ee9346a5b6dd9620ab54695f56cb85b62bd0eb924a903bede2abbb72350c9522e6296c79b4d326dab136f54f305afffdaa747d00189a7b0b2fd00c2c2502a978de14125096425dc4e3acbc7f375413a842bb36b9b5f411356cdd6131b3c2d81e0c59ac036336b38674c0f4d031c18c1850e4a95abd61d15ce491c16cdab7cd616846ba338a4656dfb1c1a1cc8a983eb058c850461f31b23f2277255770c26521246f07462e565ee06e83d5c69f4d03b76923a6389493b6b8ba8997752a6c12416ff4b5afb35ca0533d7dcf0fdcd5741678e76ebbf0392434bc5fdfe0ca639a4a40342d69060aca85887068e46cb9f6026fe94fe7c868b67876404832fef9f04c08ee8b66caaaf9d65e23b3f13f00ce695a3588dbf6400cb2df1ffd9fc210257e2304ef77cb26df37eeea0769432b88a1843c7c7ffb086e12ef3ed3c39b412cbe1ab4910afff1ae85b236094b68ef1ccf9afa5ab66d0f9cf6912b5aaabf73a66eea87e1d61ab5226490abc78eda3753cfaa4955f2098449bc2abee79f62f60f86e3bba0b3040000",
    ],
    [
      "ETag",
      "4KNGMG1j5Niq4e2bLaaw7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90616f82301086ffcbedab24a29953123fa841672466633359b61853cbc150e0b02d2384f0dfbde2bef4ae6f9fdefbe65ab8a645041e9cd3e456a16a9e1234efb609515799d15c4a2a34c200d08884c9c94e16dff52e5f5dbfb2352eea9b5e8f37f57cce8496bf980bf05a8853cc220dde4f0b85c891bf9d4eaa9fc898694aab6cf79ffec60f59c829b2c2fe10048b65e04377ec0670a17388312a2c24da91a5a20b4ab3b569b5c8cb0c1d4d9592a8a187fb874451550a45e4b0e2cca68e3b19bb23d77d990e9fdd1983194961522a983d7c00db1832220ba9e6b0e032a0fa9673c7fdf9c7f2c8063afea3cbc6a07e53c4be1aade5f061bf221bc97054a32a1c8014bc8cd7d43ceedd1dd9a3b85e69010000",
    ],
    [
      "ETag",
      "6KcnZwKmCkXlFeAwqsF3Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "41",
      "72",
      "82",
      "30",
      "00",
      "00",
      "c0",
      "bf",
      "e4",
      "ac0e04a2b5370129a01661140a1726a401d11881900276faf73afd46dd3fec37c0845021b2ee76a11cbc8211c3e58ccc36f58b61f595ad5e516e1f84571df3923b47a64bcf8c3b07a22931e6b01e34584a055721e7e8ddef154fc260753fbb4190077bf7b44e0c3d2a522549b4dc70754f92e496a256399466e4efeff37573321afb18bbe76c5794c576ea71918c1f9d60dbddd95a6c541446529a16cbc5db2d8bb571c504df30b9f09542b5be2e5b5f68d7640c55de33350da69f0db973549788998d6e92d8eab1c4118303763a533a0a1f674f4fff1798003ad4554b45563db66b68b99c80bffa5937d6f4f1dfa0b8a52df8f905b3303ae419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-99-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b64f6e3da07f6054d9ab5a9b83669a902d56c361b3233bde028302c33d418d3ffbe97c1ba1a13e50bccdc73ee39f7c1337910c58e4c0913e9df1aaaa76ff7929113029aa678fbddbdda6f95caafaf575ec9ee33d0c5cde47136438468588ae665061d25eb8a839a6ec36e5ac9baa495941d4cd471dd8e3d1ed8a7b63d71fa23db459e822c5989e201d9775a976adaeb1db5bba9946906b414aacb65fe7adfdb9ff6ca4ade03d7aaf75eb2872aaaf7b9e88f4c72aa852c66db100dd40aaa18722a32b4f09fb96367ef537705cdbb2982f78203e55cd6856e6c610a2e8b44a47565b292e9333136df7c90d05b798bc8e232abf3222e680e27d68e6a1aeba712ac8b60b3b696fec52658cfa3e5c68fc3c5a5b79e77179bd576ed87d6eda5177896a62c03c3b566d69939f97840fd1d282d0aa31e35d78df24b83961fc7d210505a411b8c27fd31b59dbecb1236e1893318b1a40f8c396c32a203d6e7ee10863b06147946d4b068210b0693a16bdb6edc87be1d0f478351ccf089077cc0c63b67e0d874480e27e4b1121ace852aa5126d87c86db08cbc380ab6fe621e79a68484d6993e6f8d3505bcf5a8b140047d52d3a1890a894a4dbb977ee405f345b4bcf1da09af20a5fc29fc8b334e68a600d1b4c2e669a8d672870d23fe7ced9d23d84cecea185464fafb99343d6f5cbc69f92b3dc2013676b57993300a96fe4f63e788b8a1596d20fbf6839468f90e6b43d7873f88c4256db390ebad17fc22ed5500095450f0afa7896013f8f25f3b2e3e6271f55146693ce3ee70d588f00ada1d12a6dc17b6e30c47439b1870a53fc4c6eee9b16b4d8e2623e450e897",
      "8adac5c7425bb15abd823088e3f74db70eff00b70c348478040000",
    ],
    [
      "ETag",
      "+9PvUssmQQLEpbjletnV7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92dd4e83401085df65bca549f1875a122fa856a5a1b5164c34c6345b182a76d9c5ddc5da347d7767b156a3267a0333c337cb3907d6b02844063ecc8af9738d6ab53747736d8b09ea9a1b4db74a0a8de0001a3627d28def06cb64c003a1c4ebacea84d9adb7084e4e88d0e923960cfc35e405f24c837fbf06c14aa4b554f2ba14d3a673c0ac2a3b8c934938baa0be9499ed47375114f4a23e6c9cdd62c60c9b36fc3fd61e360e3cc9d90473542852b45a2a259f3035a1b5a95959716c6959ab14353470f360ae645d3125658b26ad6eb7e57a07eebeeb768edb476e97402e53660a2988bd89491f1869189fc825b9048f00d59464386fae2f342eb2c6882dc351e21d36fabe02242d2f384eff0649ef23a3cff0816d23f8ceb152d6c2eca8f3e82af8ed38caf4f3a8b320e9ff20b4a1a47648120efb71120cc7967bd87aefad0ceab19214a4469ba1db3e3c3eea78edf7584fa58d9adee31b55a30329a3bfe3b230e0e78c6bdcbc01c94d64677b020000",
    ],
    [
      "ETag",
      "1SYJwTJlAnrnxbp7IdX6kA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-100-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535b6f9b3014fe2bc87bd9a42681900089146d51ca36a634690969b59b12630ed42d608a4db7a8ca7fdf019a5e54ad7dc2f87c9773f31db9e67944c624e4c94d05e5eedd9508c911014513bcd5ff1ab9f96d677ade75649f79ee0ffb422f92c90411bc66499a152974a4a84a0672bc5e75935254052d85e8a050c7d0f58e619946df306c471f1a23244a48e339cfaf917ea95421c7bddec1bc9b0891a4400b2ebb4c640ff7bddb7eaf28c51530257bcf3d7b68237b6fb87e4c05a38a8b7cb25e61069584720319e529e6f0488dc24fcfb5bb9c66dd04c1b79c01654c54b9aaf3420926f2982755d9a892f11d69f27c72202b77eece026db65c2f82f75b9ad5e4ed078d4a6db3294156a9d23efbcb136d5ba0d7259520b7dac557d77735bc2a45cc53d8f068ab4db48fda7471ac3d02b7daaf4ad74dc0c0dc3bf102cdc08422908ae74d3a010d53a853b96f99f7725235812ad46a831b5bb7a8e1e8a3300e6d163be6308c75084327b487d40c75361ac0200a81224fd5ea0d8be6d804b09d8145474644696cdaa165303dee1bd1c0d20d16d9a169e9fd58a723b23f227f4aaee098cb4248deb68d5cf85ee06e027fbd984d03b72923a6d89ae336b9ba88a7792a2c1241afd4b5afa35ca0533d036f11b8fe741678e76e3bf6392494ed563738f898a612104d4b9a8182f24444d83472ba5c7981b75c4ce7c86866797a404832fe79f748087645d365d57c6b2f6bd0f81f00e734ad1ac46d7b2006d9ef8ffeafb00a7c6ff1e575896981d5a2cc6f44e1aab70ae46cedfadf497be5430c25e4eced0d40701378fbc91e9e0f82f101a18f54f88f0bc764edc24a68178f674d992ddb71864367401a70a95ec46cc33974b8d6a81521835cdd97d43e9fba614da8920f200ce2be2c9a56edff01b4c55eaec0040000",
    ],
    [
      "ETag",
      "0x1n3Jy3IIkd7QIEZ7W0pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90614f83301086ffcbf91512ead429c93e38253a431645174dccb274e5602070ac2d2e84f0dfbd32bff4ae6f9fdefbe606f8299a1442d817f9b143dd5fe468df5c93a0e92a6bb8b4d418040fd0ca9c497558cfe463f9f9927df55d9cac8ef15ce8d362c1845107ac258403640556a981f07b8046d6c8df763b3d4d64ccf6ad5356eb8fe8294a58a82975c27a13c7f7cb3882713b7a50d23ec10c35360addc8565389caae5c5a23ebb642df50a7151a98e0e921d7d4b55213f9acf822087c7133139742cc6f836b71c764454ada821a8637efc03e96acac123a715a100ce8a9e5e0d974feb27ce5126dffd1656fd1bc6a626383ce3338fb3f90cb6439abd51d7aa0246fe3b9b0e7fbf807c6b6299c6a010000",
    ],
    [
      "ETag",
      "chN3aDjWJfXyuLRIqL71rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "8b08000000000002ffedd34b7282300000d0bb64ed308a0aa4bb02859410547ea21b0633a97c220450413abd7b9d5ea3be3bbc6f9051cafa3ebd3615abc11b78643294a88485a69b434192c8a21718289eb2382d4b72bf0f0ad212ee05c656e637fc085382825d6cbd4f56b8d98d6b76648d47f6aed2e22e9f021fce9718b96154c215be74e7b96e98359decd56d810441ea8434a71baabcf2635cf88dd8a292a817a314ba914d07835742d5ceb14c5bd9a9833af1bf02835b36b7bd83aeae06464cf7667f3851e967246ae251c50dbfb7951326e31c6f92d4b4dd9e3aa7bdfd098f223f9ee55c7a79f9bfc00cb051141debd3e2b97db9867006feeaa7d78760cfff3acb3ad6819f5f79c4db6019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-101-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6d0284249048d11aa574cd94900d48bb699a90712ed42dc1149b765595ffbe8b69ba5695d6276cdf73ee39f7832772cbcb1d999294e7770dd48f9f6e444a4e08289ae3ab5bfdf8b3b5fd2ab74333bd8b1e526bf0953fcc6688e02d4bd27d55404f8aa66620a7dba89fd7a2a9682d440f13f56ccbeed963c71ed8b6eb59237b82440945b6e2e52dd2af95aae4d4348fe2fd5c88bc005a71d96762fff26ede0fccaa1637c09434df6a9a2823cd0f543f178251c54539db46e8a0915027b0a7bc400fffa8bbf4f46dee3ea7fb7e8ee07bce8032269a52b5be30051365c6f3a6d659c9f489689faf0e24f257fe223698289a7d9994740f27c68e2a9aa8c70a8cf370b33696c1f9265ccfe3e52648a2c585bf9ef7179bd5761d44c6d5851ffa86a269019a6bcc8c537d0bf082fa3b908a975a3d6e9f5be5e70e2ddf0fa625a0b4842e98b8d698da9e3549b3d46599e78cd2cc8234f55277449dd46293210c772950e46951cda225d63c1adb0367c212b0bc513274066e42879371620f30d7c8f6326be290c30979a8b982332e2b2179d72172152e633f89c36db098c7be2e21a34da1ce3a636d01af3d2a2c1041ffa9e9d046b940a5b6ddcb20f6c3f9225e5efadd84579053f618dde18c335a484034adb1790aeab5d861c348305ffb6708d613fb760c4a32fdf544da9eb72e5eb5fc851ee3005bbb4a7f491487cbe08bb673445cd2a2d190fbee402ab47c8db5a1ebc36f44e2967659c8f7ad1ffe24dd530819d450b28fa789601df8f86f3b6e3e8271f751472abce3f230d9aab01aba25e2bade67b6e78d0743876870addec51cd73db6adcdd166843d94eab9a46ef3b1d24eac912f200ce2fc03ddaec35fd03ef4547b040000",
    ],
    [
      "ETag",
      "7pXxU1Epg1R/bqSwb02Jiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92dd4e83401085df65bca5b1d8da56122f50abd6d0da1f7aa1c634eb32201518dc5d6c9aa6efee2c6a356aa23730337cb39c7360034f691181070f69f25ca15aef256826b698a2ae32a3f95652a1111c402312268316ada44aaef6c38b91b82d6f27ba7d2357c7c74c68f988b9006f03718a59a4c1bbdb402172e435495995178bba73c0ac4b3b9c85d3c1e882fb9c22db8fe641e09f047dd83abbc54818b1a8f97facdd6f1d58d2c31463545848b45a4a454b9466606d6a9197193634554aa2861aae1f248aaa5228a2064f1a6ed36db89d967be0badd5ef3d03d623223294c4a05c3f3190b04434664535ab14de830a0ea921dc7f5f585c769543bb1e5601476dab5c0af006b8bd30c177f832cf851f077f8c0de33f8ce899caac2eca8f3e0daffed380ef5f3a8333fecff20b4e1a876483818f667a13f1c5beefeddfbc9daa01e2be22435da10dd66bb77d8ed34df723d259b35bfc733aa4207a4e0dfe33235e0c522d3b87d050681e3d37c020000",
    ],
    [
      "ETag",
      "L3owcrgJ/TGNaZpZQs4Ycw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-102-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fe2bc87bd9a426e19684448aba28612b6a4a5a42524ddb94183850b78029369dba2aff7d07687a51b5f609e3f35dcecd0fe486e51119938025b71594f79fae79408e08489ae06db2d64eddcd5c6c34412f64e4aefece4faa64324104ab598266450a1dc1ab3204315eafba49c9ab82969c7750a8a3a97a471b189aae69434bed6b23240a48e305cb6f907e256521c6bddec1bc9b709ea4400b26ba21cf9eee7b777aaf28f9358452f45e7bf6d046f43e703d4e794825e3f964bdc20c2a01e51632cad2bac4276a147c7daddd6534eb2608be6321d030e4552eebbc5022e479cc92aa6c54c9f8813479be389095bdb067be325bae5dfff38e663579f745a142d96e4b10552a956fdef24cd915e8754505889d7279627bb68257258f590a5b16ed948972ac4cddb9f20cdc29bf2a553500030be7ccf1150d138a40489637e9f83448a14ee5b165cedb49d5042a51ab0d6e87ea806a963a0ae26018c696d10f621582c00a867d6a046a3832c18c02a0c893b57ac3a239cf07a66958b1a646e648b720d6f44164a8ea50b7d4303683d8181aaa3630fb3ad91f913f25933067a2e082b56d23979ee3db5bdf5bbbb3a96f3765c4145b336f93ab8b7899a7c42211f44e5dfb3aca383ad533705cdff6a633dfd9d8edd81790d0f07e758b838f692a00d1b4a4194828cf78844d23e7cb95e33b4b77ba404633cbf3034290f1cf8767827f5f345d96cdb7f61a988dff01b0a169d520eeda03d1c87e7ff47f8595ef39eef7f7256881d5a2cc6f44e1aab70ae4626d7b3f487be5410c25e4e1c71b80e026f0f1933d3c1f04e303421f21f11f172e14b54b5842bb782c6bca6cd99635c41369c0a57c133374e3d0e15aa356840c72f95852fb7cea8635a14a3c813088fbe236addaff03b0c21303c0040000",
    ],
    [
      "ETag",
      "gU1KNVDsV1saQtdNSzDHug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85dfc5bba4950813fb41e2624c1d4302c43a90364d0885d62d85b6ee9294a9adfaee73b2dd24cef1679fa37470c9ca182670ccd2ef1a557393a279b34588bace8de6aba25223788046a64c5eabd36af0f95224f3f6324e3edac12a6b37e974ca848e4e58489874906498c71a265f1d94b2401e3b1c94dbc898692aab2cd6db601e842c14145b61bd5b2e9f66cb00fa7defc1998e2126a8b08cd0aeac149d31320b9b56cba2cad1d754ab083538d835524575251591cf8a2f86235fdcdd8a9110f70fc3b1786432a7489a8c4a8677efc03e868ccc43fae1b4201850aee4e0893baf2c0f6da2fd3f3a6b0cea8d2236d618bbaef37f269bc97056a36af42092fc1baf99f97bf7bf0677935e6a010000",
    ],
    [
      "ETag",
      "vphM+YFmfGzk5fXz+MizPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "ffedd35b7282301400d0bde45b1c0c8ad04fc1073ad42710f861d2ccad0501231701d3e9deeb741bf5ece17c132e0420a6cdf5021579230f4eeda1186ea43573bbeceeb8419f6cceab39e746fdd1538864897967f104f1be8ba6f9e118b8b492278fb634d4f212f5452b920c94d6e6be894bda6151eaecf03e568b72393ff68a995596c413c64c59b44e151ad3002c7f6b292f86fd992a43ac306af0d2fbf197e999ce989df85432a85470b4b5682db8b6f0f5d1fa11cf5c6b032c5c6ddd6e598f7b9136e1cdeb7c86bb4b824e91d1fd7ca40b286ef1ed5ac69f4a5ad1f0e5e5ff220302bdcc6ac0347b6e3726b63d207ff5d3e621e1f97f06bc869afcfc0248ede81f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-103-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbb826401e0d8914ad514ab748096981b4daa6091973a16e01536cba4555fefb2ea6e95a555a3f61fb9e73cfb90f9ec83d2f13322331cf1e1aa8f79fee444c4e08289ae12bbdfab3df7d6ed48f31f5c1b9dc9b71b02e16f3392278cb92b4a872e849d1d40ce46c17f4b35a3415ad85e861a29e6d0d7bf6e9d01ed8f6c4b1c6f6148912f274cdcb7ba4df2a55c999691ec5fb9910590eb4e2b2cf44f1f26e3e0eccaa1677c09434df6a9a2823cd0f54bfe48251c54539df05e8a091504750509ea3877fd4243e7b9bbbcf69d1cf10fcc81950c64453aad617a660a24c79d6d43a2b993d11edf3d58104eeda5d86061379539451490b383112aa68a4f6151817fe7663acbc8badbf5984abad1705cb6fee66d15f6ed7bb8d171837df5cdf35148d73d05c636e9ce99b8717d44f402a5e6af5b07d6e959f3bb47a3f989680d212ba6034b14ea9ed58d3388d272c7586e338b5208e9d7832a6c3d862d3118c921828f2b4a866d1529483a9938e86f6284ad8d08a46e9691a39a3c138029b318bb1c41e4c6c723821bf6baee09ccb4a48de7588dcf8abd08d427fe72d17a1ab4b486993abf3ce585bc06b8f0a0b44d07f6a3ab4512e50a96df7ca0b5d7fb10c57d76e37e1356494ed83079c714a730988a635364f41bd1109368c788b8d7b8e603db1cb635092d9cf27d2f6bc75f1aae52ff41007d8da55fa4b82d05f795fb59d23e29ae68d863c760752a1e55bac0d5d1f7e2112b7b4cb42ae76aeff9d744f3ea45043c93e9e268275e0e3bfedb8f908c6dd471da9f08ecbc364abc26ae89688eb7a9fd98e33716c876870addec7a6d363dbda1c6d4628a054cf25759b8f9576628d7c016110e7",
      "efe9761dfe02dc7f3bf37b040000",
    ],
    [
      "ETag",
      "aQxyU+utZ5aRe8Py/bSLmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d925b4f83401085ffcbf80a09486f92f4816a6fb137297d324db385a1a5051677179ba6e97f77166b356aa22f30337cb39c73e004fb248fc08575b27929511c6f36a89e74e1a32c5325e956f05c2218808a6d881cf8fb45dde939a2370db6a5d58fa78fca3ab4db44c8708b1903f70471826924c17d3e41ce32a4b590a76596afaace00752cf4701ef8c3499ffa8c47ba9f2c4623af33eac2d9b82e464cb155c5ff636d793660c7d73ec628300f516b2904df61a886daa6645991a2297929429450c1d5838de065c104e7264d4cdb724cbbe1d8b7b6dd6c5975fb8ec894874c253c2778312781a0b862a9cf0f64131a0488aa24c771757da57112554e74399c048d5a25f02b40dae224c5d5df2009de32fa0e1fd82583ef1ccb7899ab2bd51b4dbddf8ea3503f8f7af082ee0f422a8aea8a04c371771e78e399e69617ef9da34239139c9294a843b4ad5aabde6c58efb9de739d35bdc755a244034246bfc72051e0c62c95787e03c1603bbc7c020000",
    ],
    [
      "ETag",
      "HRkU53F3rFOThu0GfOKt0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` > ? LIMIT 1",
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
      jobId: "grouparoo-job-104-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536d6f9b3010fe2bc8fbb2a94d0209041229eaa2946e68296913d2ee55893107f50a9862d3adaafadf7740d317556b3f85dc3d2f778fed5b72c9f3888c49c893ab0aca9b77bf4548f609289a6055c15532fc6a7e3f5afb7bd95ef8f74b905f78a793092278cd92342b52e84851950ce478bdea26a5a80a5a0ad141a18ea19b1d633830fa86613bba658c9028218de73cbf44fa8552851cf77a3bf36e224492022db8ec32913dd47bd7fd5e518adfc094ec3df7eca18decbde17a900a461517f964bdc2092a09e50632ca539ce1911a851f9f6b7739cdba0982af3903ca98a87255cf85124ce4314faab25125e35bd2ccf9e483acdcb93b0bb4d962ed07efb734abc9db0f1a95da665382ac52a51d2d17c7dab640af0b2a416eb5f3cfeed2d5b0548a98a7b0e1d1569b6807dad43fc46a44156cb59f95ae0f008b73efd80b34038789402a9e37a304344ca11ee33e2eefe529d504aad0b06d6e6c7d480d471f857168b3d8195861ac43183aa16dd141a8b39109661402459eaad51b16cd456ef7193575db1e81e1441059d1481f98d6283263db0e47311b8476645b6090bb7df2a7e40a0eb92c84e46d64e47ce905ee2658aefdd934709b35628ab11cb6c3d54b3c9d53e192087a65afbbbacb053ad5f97b7ee02ea7b3c03b73db239f4342d9cdea0a0f3da6a90444d39266a0a03c161186464e162b2ff016fe748e8ce61c4f760849c63f6e1f09c14dd1a4ac9adfda6b6836fe3bc0194dab0671dd7e104ce16effff0a877504af0af4f5beded1fb1dc342a55f08c59bde8a90d3b5bbfc46dad212622821676f5f0204378db75feceef52018df0ffa4885fff1ce3159bbb012dabbc7b366d396ed388e655aa40197ea456f381cec42ae356a45c82057f72bb5afa7ceac6955f201844dbc32bee77fc2ee3fbcab1166bf040000",
    ],
    [
      "ETag",
      "teqg6X4ZFUN+m+bxKTnhIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90d16ac2401045ff65fa9a40d6d65a051fb4953610a4a6b5048ac89a8c6934c9a4bb934a10ffddd9d8979dd9bb67e75ee60cc7a2ce6002bb22ff6dd1747739f2ca3531dab6642ba5a1da227880ac73218351cd41bc0a13739cbd0c93e4cb8ee7f6349d0a61d31fac344cceb02fb0cc2c4cbecf50eb0ae5db766bfa898271d738255c7e2e5e17b10815654e58aea368368f1670d95c3c38d02ec63d1aac5374231b43074c397469adae9a127d4bad49d1420ff70fb9a1b6d186c817c557c183af1eefd540a9d153305463214b4a3517540bbcfe00f161625dc67492b4a004307d2bc1f7fdf927f2c025dafca3f38ed1be1b12638bce33b8f93f93cbc492954d8b1ea45ab6f156f0ed7eb90247b919ed6a010000",
    ],
    [
      "ETag",
      "07nt0RQIXrkAD5XXVs9Bsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "f45b891305ba3f1091150486a0e04fd391422a01a1501096dd7d66d798ef0eef1b902ca35d87fb7b496bf00e26b2865226398d669863a17c74e731bf20b7ad778cea5fb03186d15fed2c9989c23d84fca86fa1957bd94dec2a3bdd8c344521bcc888319350f311e89a1187b33f5b0511b5375f0845ae9d2d9553a5e20197f1d9848ea32a291adeb42cc77ecc45847ad5574ef1cadb577de0265dd8322aec867866d91eae4650a4fb0d67c9b54f7c34a073e2243c1443acf135d6c2cf7b15dd96f6438ee6adee05a3759cc4a862a7d68abe2c12e9e5e5ff020b401f0de3b4c3ecb95dde42b8007ff5713f35f4f9dfa084530e7e7e01fcf06a5d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-105-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b3014fd2bc8fbb824401ee421456b94d23552201b9056d33421db18ea1630c3a6555ae5bfef629a3e5469fd84ed7bce3de73e784277bc4cd002119efd6d587df8722b08ea21a67006afcee1cebb78147ed97cbd72f25bfef0b897c387e51210bc65495c5439eb4bd1d494c9c53e1c64b5682a5c0bd187447ddb9af46d67640f6d7b3ab326f61c8892e5e996977740bf51aa920bd33c890f3221b29ce18acb0115c5cbbb793f34ab5adc32aaa4f95ed30419697ea2fa2d17142b2ecae53e04078d6475cc0acc73f0f04a4dc8d9fbdc038e8b4106e07b4e19a65434a56a7d410a2aca94674dadb3a2c513d23edf1c50e86edd7564509137451997b8603d23c10ac7ea5031e322d879c6c6bfd805de2adaecfc385c5fbade6ab0de6df79e1f1ad7976ee01a0a939c69aeb134cef4cd870be8274c2a5e6af5a87d6e959f3bb4f938989600d29275c1786a39d89e59739292294d67a309492d46c88c4c2778442c3a1fb3714218069e16d52c5c8a92daa933b4ad699c8e1c1c8fa78e1de3649ec6632719ce31a16438b1d0b1871e6aaed839979590bceb10ba0e36911b47c1de5faf22579790e22657e79db1b680b71e151408a0ffd4746ca35c8052dbee8d1fb9c16a1d6daedc6ec25b96617a08ffc28c539c4b06685c43f314ab3d9140c390bff2dc7300eb89fd3805255afc7e426dcf5b176f5afe428f6080ad5da5bf288c828dff5ddb3921ae70de68c87d77401558be81dac0f5f10f20614bbb2ce8e7de0d7ea1ee296029ab59493f9f268075e0f3bfedb4f90086dd071da9e00ecb4365ab426bd62d11d7f53eb367b3b93dd6ffaac2b5fa106b87dc7bddf836232b58a99e4bea361f2aedc41af9028220ccdfd7ed3afe0339259bab7b040000",
    ],
    [
      "ETag",
      "6ykMFzoNnu+V6ljiwzUs2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d235528d88403282809a094020743c8d24e4b71dbadbb5b0d21fc77672ba25113bdb433d36fb6efbd760f4f691e8107eb34792e51eece12d41353f8a84aae15dd0a912b040b50b384c885bb18f1e9244e46bbeefc5c358b3aebcf93769b08156e3063e0ed214e91470abcc73de42c435a0b052fb37c557516e85d6186d3c01f8c6fa9cf4464faf16c38ec74873d3858a7c58869b6aaf87fac2d0f166cc5dac71825e6211a2d85145b0cf5c0d8542c2b38da4a94324405155c3d48a4280b2685b069623bb586edb897ce85e3345bb5867345241721d3a9c8099e4d492068a119f7c52bd90497005995e438aeae2f344ea3ca892907e3c0ad5702bf02a42d4e39aefe0649f086d177f8c08e197ce75826ca5c9fa8fef0bef3db7114eae751379da0f783509aa23a21c160d49b069dd183e19647efdd9d46f5200525a9d084e8d4eaad46d3adbde77a2d4cd6f41e4fcb122d0819fd1e77a9062f665ce1e10db16f7c8e7c020000",
    ],
    [
      "ETag",
      "W6WMlSQfgMyBV/s7p4aFVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` > ? LIMIT 1",
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
      jobId: "grouparoo-job-106-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535b6f9b3014fe2bc87bd9a4263124241029dab2946e4809e912d26a3725b631d42d608a4dabaaca7fdf019a5e36ad7d029df35dcecdf7e84ae4111a232a92eb8a9777ef2e254547886b9240f4faf6fcb30e6e695f2b67be2c4f3863c1c574320184a8598a6445ca3b4a5625e36abc59779352560529a5ec8050c7c4c38e39ec9b96698e1c6c9b2e10154fe3b9c8af807ea175a1c6bddec1bc9b4899a49c14427599cc1ee3bd1bab5794f29233ad7a2f3d7b60a37a6fb87e4c25235ac87cb259430595e2e5966744a450c31335a29f5e6a7705c9ba09806f04e3843159e5baae0b2498cc63915465a38ac6f7a8a9f3d90f5a7b736f161ab3e52608dfef485693771f0ca28cedb6e4aa4ab571b25a2e8c5d015e174471b533cebf7a2bcf8050296391f2ad8876c6c4f8684c8363882a0dd5ed8c5f15c67d0ed1b9bff043c3846a22aeb4c89b5a4242535ed7f1302fffdf35d504a2c1b14d6e4778484c07bb34a623163b7d9bc69853ead0914dfa143377c00711e50478ba566f582497b96bf161cc627b40ec684449d41f50d3768683185b6468ba237be4c4117128da1fa1db52687e2c542195686786ce577ee86dc3d526984d43af6923263097e3b6b8ba89e7756a681240aff4b5afb3428253bd003f08bdd57416fa675ebbf3394f08bb5b5fc3d663922a0e6852928c6b5e2e64044343a7cbb51ffacb603a0746b3c8d30342a1f1cffb274278573453d6cdb7f61a0e1aff03e08ca45583b8697f9089f6fba3ff2b84fec25b87d3c5e9eb2a16b670075b1dd30e4d6b6cf6c7e6a08b31fe01e2bf8108d7dfeaa26f1b6ff51db5a1158f79c973f6f65d00b849bcfd8a0f2f0ac0f0a6c007ae530b3843a66a1756f2f61c45d634dfb21dc7754d8c1a70a9ffcab970d6f661eeb546adc8339eeb8796da17558fb14955ea110449b8a2c00fbe40f60f6250407ad3040000",
    ],
    [
      "ETag",
      "qwWBtNwb3ts8LOrFeccNhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6e82401085df657a0b096b53db9a78512db126c4b4a8578d312b0c88c00edd9f1a427cf7ce626f7666cf7e3be76406a82b95c30c4e55f9e350f70f25da2fdfa4685c630d978e94410800ad2c993cbbc57257bfb75be55ceda222712b5a5fe773264c76c656c26c80a2c2263730fb1e40c916f9dbf1a8c7898cd9bef3ca7ab38b5771ca424bb91736fb24795b2431dc0eb7002e744ab1408d2a433fb2d374c1ccae7d5a23dbaec1d090d3191a18e1f1a1d4e43aa989425642114d43317d1413219e5fa227f1ca644399b4152986f75b601f4b5636295d392d0806f4d872f0623c7f599ef844877f74d15b349f9ad8d8a0f78ceefe4bf2992c67b5da610099e46d7c54f67ebffd011a5602396a010000",
    ],
    [
      "ETag",
      "huBCTkDmSnuuku0fLuGoIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ffedd34b7282300000d0bb642d8e88fcba23f21b229f3268259b4cc080c60a2854249ddebd4eaf51df1dde37a065c9fa9e0ced9935e00d4c7469cecb39ea0c688fa74acb06edcbda95a381e47565d55a1879feb1f25b71b0cfc26ef91068d8532b9864c5026e5834489ffb77ffd1efa528531594a1fb818f6442c6d921c872e94ebf72c78d11b7d2544d565593e4a14265a660d16d02bcc12474642174aa21275d15f8182eb763b4ddddc54770cd3227774aa173ad19535ec5714dd2d6922dc3c3ca92444500bdc551826ea8d8509d4c9fab6b5d947592d0265f5f2eb8bbcc5f5efe2f3003ecd19d6eac27a7e7764535cd19f8ab4f86a963cfff90d11bbb819f5fc87badb619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-107-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fa34014fd2b64f6e3da02d2076dd2acdd8abb4d5aaa4035eb664386e182a3944166d018d3ffbe97c1ba1a93f5133373cfb9e7dc07cfe48e9729999284e7f70dd44f5f6e45428e08289ae3ebf9f5636a7efdee1c6791731bdaabf5f5f9fde8623643046f5992eeaa027a5234350339dd86fdbc164d456b217a98a8675be39e3d72ec63db1ebbd6d09e20514291ad787987f41ba52a3935cd83783f17222f80565cf699d8bdbe9b0fc766558b5b604a9aef354d9491e627aadf0ac1a8e2a29c6d4374d048a863d8515ea0877fd43439799fbbcfe9ae9f23f88133a08c89a654ad2f4cc14499f1bca97556327d26dae79b0309bd95b7880c268a6657c625ddc19191524563f5548171166cd6c6d23fdb04eb79b4dcf871b8f8e9ade7fdc566b55dfba171f5d30b3c43d1a400cd3566c689bef97841fd14a4e2a5568fdae756f9a543cb8f836909282da10bc6636b446dd79a2459326699eb0c93cc82247193f1903a89c5260318a40950e46951cda2a5281d176c3b71d3d872c66e3c180d87b19b5856ccdc8165678371e64e80ec8fc863cd159c725909c9bb0e91ab60197971146cfdc53cf27409196d0a75da196b0b78eb51618108fa4f4dfb36ca052ab5ed5efa9117cc17d1f2d2eb26bc829cb2a7f01e679cd14202a2698dcd5350af458a0d23fe7ced9d22584fecfc109464fafb99b43d6f5dbc69f92b3dc201b67695fe92300a96fe0f6de780b8a445a3210fdd815468f9066b43d7fb3f88c42dedb2908bad17fc22dd530019d450b2cfa789601df8fc6f3b6c3e8271f751472abce3f230d9aab01aba25e2bade17b63bb1868e4d34b8561f62a3c1e0d0b636479b117650aa9792bacdc74a3bb146be823088f3f775bbf67f01c6ad19d17b040000",
    ],
    [
      "ETag",
      "PZwd/+B32fT3jS1LMZPq6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d925b4fc2401085ffcbf85a12aa5c9bf050b422e1a296f2a2216469a7506c77cbee168284ffee6c45346aa22fedccf49bed39a73dc04bc2237060912c3705cafdc512f5a3297c5445aa15dd72c1158205a8d992c86dafcbc7edcd2ecef2d7267ff276a36430703b1d2254b8c28c81738038c13452e03c1f80b30c692d146991f179d959a0f7b9194e02bf3fee519f89c8f4e3e970e876871e1cadf362c4349b97fc3fd666470bd662e1638c127988464b2ec51a43dd373615cbf2142b4a14324405255c3e584a51e44c0a51a149c5ae362b76e3cabeb4ed66ab5ab7db44a622643a119ce0e9840482169aa5bed8914d681020cb921cc7e5754be3242a9d98b23f0e1ab552e05780b4c5498af3bf4112bc62f41d3eb05306df39968982eb33753bbc777f3b8e42fd3ceac60dbc1f84d214d51909fa236f12b8a307c3cd4edebb7b8dea410a4a52a109d1aed65af566a3fa9eebb53059d37b1c2d0bb42064f47bdc251a9c98a50a8f6ff2e62bb47c020000",
    ],
    [
      "ETag",
      "vGBnN9qwfmpz7nZEwMiKKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` > ? LIMIT 1",
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
      jobId: "grouparoo-job-108-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553596fda4010fe2bd6f6a59512b0b139259452e2249608a46012556d05ebf5d8d9c4f69add35158af8ef1ddb2187a29627cccc77ccb54fe4916721199080c79b02e4eed38308c809014d638c66ceee2adc8a31eb7660f16d73e15f4ef866341c2282972c45d33c8153250ac9400d968b462c45915329c4290a9d5a66efd4ead856cbb2ba3db36df591a82089263c7b44fabdd6b91a349b07f3462c449c00cdb96a3091bec49bdb563397e2019856cdf79e4db451cd23ae6789605473910d970baca050205790529e600dafd430f8fa5ebbc169da8811bce50c2863a2c87459174a3091453c2e64a54a064fa4aaf3cd0759b81377ec1be3d972ea7f5ed3b424afbf185419ab95045524dab898cfae8d758e5ef754815a1b7757eedc35302445c41358f1706d0c8d3363343dc7e8b386f1ab304d1b303cf1ae3ddfb0b09c1094e659558c4f8304ca429e07e67ddc5349a01a2debe4aa6b76a8d533fb41147459d4b3db41644210f4826e9bda81c9fa0e3861001479ba54af583413590b5a16040eed8263d91d002bead25edbc46301163ad4b1706c2d3b08c9fe84fc915cc33957b950bc1e1ab99b7bbebbf2e7cbe978e4bb551b11c5c19cd7c5954dbcad53639308fa4f5ffb32cb053a951bf0a6be3b1f8d7defd6ad973e8198b2dd62836b8f68a200d154d21434c86b11e2d0c8cd6ce1f9de6c3a9a20a3dae4cd01a1c8e0e7d32bc1dfe5d59475f55b7a759ccaff00b8a5495121b6f507b1c87e7ff26f858bc96c745ca3d146c4fe3782f0d06b05f27de9ce7f903a3487082464ecf80520b84a1c7fb087c783607c3ee8a334fec78363aa746112eac3e3695562cdeef52ddb72480596fa43ceb19dc3844b8d521152c8f4734bf5e3290756a50af502c224decbd49b5e62f62f39052200be040000",
    ],
    [
      "ETag",
      "n4yHdvoCc76eSBqFTGLiqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90d14fc23010c6ff97f3754b568c38497800331d66129de0838690528e39dc76a3ed8465e17fe73a7ce95dbffe7adf97ebe037afb630824d9e1d1ad4ed4d86f6dd35299aa6b0864b4d9541f000adcc9834e530d491783d542ff1e2f4797ada7c4de2e378cc84513f584a1875b0cbb1d81a187d7750c912f9db7aadfb898cd9b676ca6cbe889ea3948592b64e982f9364324d2238afce1eec6993e20e35560addc85ad31e959db9b446967581bea1462b34d0c3fd43a6a9a9a526f259f14510fa62782b0642dc87c19d7860b220256d4e15c3cb0f601f4b5616291d392d080674df72f05d7ffeb13c708956ffe8b4b568de34b1b141e7195cfd1fc965b29cd5ea063d5092b711e7f67a3f5f00d8fd831d6a010000",
    ],
    [
      "ETag",
      "sm68rE1MqnJHTxVxFbZAHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0002ffedd3cb7282300040d17fc95a1d9388427710b080687d80821b26852801140c9457a7ff5ea7bf51cffa6eef37a051c4aa2aac8b8cddc11be8295226d16455ca9adef2da8f2fab6171531c6b6c5ccd3cdd445cc06e5af432e549c53718ca46a36f636110ec7628d7510a791204ad1f2bb3e1681dd15cdf6750730f3daaece11465697b08bb26e1981c682ae0d85f63124bf6bc0d8ebed190b1015d3bbb3bd9352df5e6f4f0b420253778b99a9e1aaaf1bbcbbc4fe8cbc6ce2afc3544e41c2d870591b67861d2991dd7ba7746eed7b353e98778a84591cf67553e2c7754c253c79dbcbcfc5f6004585772c1aa903f6fc792a28cc0dffa61dd97ecf9bfc6a86002fcfc02519f766f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:51 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-109-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbb826813c0a448ad628a52b534216425a55d3848cb950b704536c3a5555fefb2ea6e95a555a3f61fb9e73cfb90f9ec93d2f53322509cf1f1aa89fbedc89849c105034c7577baed6e6d09a5f7d5dddfcd80ceffcc8de849bd90c11bc6549baaf0ae849d1d40ce474b7ede7b5682a5a0bd1c3443dcb747bd6e9c81a5a96ed9813cb45a284225bf2f21ee9b74a55723a181cc5fbb9107901b4e2b2cfc4fef57df0381c54b5b803a6e4e0bde60065e4e013d56f8560547151ce765b74d048a863d8535ea0877fd434397b9fbbcfe9be9f23f89133a08c89a654ad2f4cc14499f1bca97556327d26dae79b03d97a4b6f11194c14cdbe8c4bba871323a58ac6eaa902e3225caf0c3fb85887ab79e4af8378bbb8f456f3fe62bddcad82ad717de9859ea1685280e61a33e34cdf02bca07e0a52f152ab47ed73abfcd221ffe3605a024a4be882b16d9e52cb31dd244b6c9639a349929990244e624fe82831993b86719a00459e16d52c5a8ad24ca8334901627708341e4f4eb3d899b81067a93d82896399a3f1901c4ec89f9a2b38e7b21292771d22d7a11f797114ee82c53cf27409196d0a75de196b0b78eb51618108fa4f4d8736ca052ab5edf683c80be78bc8bff2ba092f21a7ec69fb8033ce682101d1b4c6e629a85722c5869160bef2ce11ac27f6f3189464faeb99b43d6f5dbc69f92b3dc201b67695fe926d14fac1776de788b8a245a3218fdd815468f9166b43d787df88c42dedb290cdce0b6f48f71442063594ecf3692258073effdb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef785edb896e39c120daed587986b3bc7b6b539da8cb08752bd94d46d3e56da8935f21584419c7fa0db75f80bf6f8d26d7b040000",
    ],
    [
      "ETag",
      "7AtO021AV+MYJQ2jIT7QRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcbf80a49d15e49fa40b52a09bd519a684cd36c6168a9c0e2ee62d336fdefce62ad464df40566866f96730e1ce039c923b06199ac5e4a14bb8b15aa892e7c9465aa24dd0a9e4b040350b11591729c47d9031b8c1ef7bb706b39b37d30e94dba5d2264b8c68c817d8038c13492603f1d206719d25ac8d332cb17556780da157a380d7c7778477dc623dd0f679ee7f4bc3e1c8df362c4145b54fc3fd6e64703367ce9638c02f310b59642f00d86cad53625cb8a144dc94b11a2840aae1eac042f0b26383769625ab58e6935afac4bcb6ab56b0dab4364ca43a6129e133c9b9240505cb1d4e75bb2094d02445592e3b8babed238892a27ba748741b35e09fc0a90b6384971f1374882d78cbec30776cae03bc7325ee6ea4cdd7a23e7b7e328d4cfa36e9ca0ff83908aa23a23813be84f036730d6dcfce4bdb75328c782539212758856adde6eb49ab5f75cafb9ce9ade632b51a20121a3dfe33e5160c72c95787c03a40ab09d7c020000",
    ],
    [
      "ETag",
      "sPndmXaMOYzycw1AUzTQBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `id` < ? LIMIT 1",
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
      jobId: "grouparoo-job-110-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "6f",
      "da",
      "3010fd2b91f765930a240d9080843a04d99a09420ba1d5b44de03897d425c4a9ed74aa2afefb2e49595b555a3fec539cbbf7eebdbbb31fc98ee731199288a77725c8870fb722222704344d312a6757df4cb16345b69bf62f17ec7ceead82f16884085eb114dd1719b494282503355cafdaa9146541a5102d2cd4b22cb365f56debd4b21cd7ec5903242ac89219cf7748bfd1ba50c34ee728de4e854833a005576d26f67fe39dfbd34e21c52d30ad3aaf353b28a33aefa89e658251cd453e5aafd041a9406e604f79861e9ea971f4f975ed36a7fb768ae07bce803226ca5c57beb0041379c2d352d655c9f091d43e5f1cc8ca9b7993d0982cd641f8714bf71579fbc9a0cad86c24a832d3c697e5626e6c0bd4baa10ad4d6b83ef7969e812129129ec186c75b63649c19e3608ad1eaef67699a36c3d0cc9ffba161a1951894e6796d24a451069589a761f96f775411a846b926b971cc3eb55c73102591c312d7ee45890951e4464e8fda91c9065de8c61150e4e9aa7acda2b9c87bddbe3570a3d39e05914d6de6321838766c422f8e07896d752102873a31399c90df926b98725508c59b8191eba51f7a9b70b90e26e3d0abdb48280e65da98ab9a78e953639308fa475f872acb052a55d3f783d05b8e27a17fe5350b9f414ad9c3ea0e579ed04c01a2a9a47bd020e722c6a1918bc5ca0ffd45309e21a3dee2c511a1c8f0c7e333217c28ea29ebfa5b69f5bbb5fe117045b3b246dc37076291c3e1e4ff2af4b0c42f84e0056fd8e472ed2dbf9326b4840424e4ecfded23b84ebcff508f8f06c1f86c504769fcc7cbc654a5c22434978eef6b830ddb1dd87dc7253558ea3739d7748ed3ad6a5415610fb97e6aa97934d5b0ea54a9fe8230897725f083af98fd033c708b",
      "29b6040000",
    ],
    [
      "ETag",
      "rLVJ0okcplkD6QOcHMESNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4e",
      "c3",
      "30",
      "0c",
      "85",
      "dfc5dcb6d2c2c4dfa45d50286cd234416112129aa62cf54ab6a62e494a29d5de7d4ec74dec9c7cf139720f075de53081ad2ebe1bb4dd4581fe353419baa6f48e4b4d95438800bd2c985446ace88f0ec94cef971feda3e87e9f4c3b9d32e1d4171a09931e761acbdcc1e4b3874a1ae46f9b8d1d2632e6bb3a28f3e57bfa9c662c18ca83b05c2d16f7c92285e3fa18c19eb619eed062a5308cac2ded51f97948eba4a94b8c1d3556a183011e1e0a4b4d2d2d51cc4a2cc42816d7637129c4cdede84adc315992925e53c5f0ea0dd8c7939765462da705c1801d5a0ebe1bce1f96c721d1fa1f4d3a8feec5121b3b0c9ea3b3ff03854c9eb37adb60044af23666da9fefc713ae46508a6a010000",
    ],
    [
      "ETag",
      "cm1UozokBHijNXwD1yxFmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d34b7282300000d0bb64ad0ec8bf3b108a48299f28e02ac39008882826f2757af73abd467d77784f90e539610c3d6e35b9820f30656b6d95afdc5635cca11cad0d3c121b7d52e44042f92f1c097519ebda9cc96d7ff00392babbf82ae6151c611d76679def3db33fc059b81743638cb9cc4bdfc1ad9b39f5e4cde1ec98016283ca1d641b51bc6c70e72abe9241566001638e51273d61bac54bbb4e2676bad4fed03b17376ab7dbc20b9a742879ab8b6618ba71a00805891b7b1722d99307b15e16dcfa7e763c3342d2046d5d8992647fdca86252267bcb342d5ff6576f6fff17580032b615250c55afed82a4690bf0571f3da696bcfe1b24a384829f5f922cb0ed19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-111-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fa34014fd2b64f6e3da160a7dd0a4599b8a4ad2529752cdbad990617ac151ca2033e8baa6ff7d2f83753526eb2766e69e73cfb90f9ec91d2fb66442129eddd7503d7db915093922a06886afd75fcf7e8f5df7fe4f71bab8f3af6fae4d06178fd3292278c3927457e6d091a2ae18c8c966ddcd2a5197b412a283893a966575aca16df52d6b343607968b440979bae0c51dd26f942ae5a4d73b88773321b21c68c9659789ddeb7befa1df2b2b710b4cc9de7bcd1ecac8de27aadf72c1a8e2a2986ed6e8a09650c5b0a33c470fffa8dbe4f87dee2ea7bb6e86e007ce803226ea4235be30051345cab3bad259c9e499689f6f0e64ed2dbc79643091d7bb222ee80e8e8c2d5534564f2518a7e16a69f8c1e92a5cce227f15c4ebf9b9b79c75e7abc56619ac8dab732ff40c45931c34d7981ac7fa16e005f5b720152fb47ad43c37ca2f1df23f0ea621a0b48436188fcc21b5c6a69ba4c988a5637b90a42624c938190da89d98cc75c0d9264091a745358b16a218b8a963d98e1b03d866ec58e9301edb233b1e59663fb1ade1900e4cb23f228f155770c26529246f3b44ae423ff2e228dc04f359e4e912525ae7eaa435d614f0d6a3c20211f49f9af64d940b546adaed079117cee6917fe9b5135e4046d9d3fa1e679cd25c02a26985cd53502dc5161b4682d9d23b41b09ed8c52128c9e4e733697adeb878d3f2577a84036cec2afd25eb28f483336de780b8a479ad210fed819468f9066b43d7fb5f88c42d6db390ef1b2ffc41daa71052a8a0609f4f13c13af0f9df76d87c04e3eea38e5478c7e561b2516115b44bc475bd2fecb1ebd8fd21d1e04a7d8839cee8d0b6264793117650a89792dacdc74a5bb15abe823088f30f74bbf67f0136d104b17b040000",
    ],
    [
      "ETag",
      "Z+Gx899qznFLkIZhZ0cePw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085df65bc2d9115a8d8c40b50541244859298184396765a16b7ddba3f1a427877672ba25113bd6967a6df6ccf39ed069e449942040b913f3bd4eb831ced9d2f26689cb4866e952a0d420068794ee473a77b2f8ef24377e5c6c214b225c36cf07a7a4a84499658708836900994a981e86103252f90d612255d51ceeb2e00bbaefc701a4f86e34bea0b95fa7e3c1b8d7afdd100b6c17e31e596cf6bfe1f6b8fdb00566a31c10c3596097a2d95562b4cecd0db34bca824368c723a4103355c3fc8b57215d74a3568d2608c3558d862478c1d779b1d7642a45409b7429504cfa62410acb25c4ed42bd98490005d97e438abaf2f341669edc497c3711cb66b815f01d2960989f3bf4112bce4f41d3eb05d06df395e2857da3d7531bae9fd761c85fa79d4792f1efc208ca5a8f6483cbc1e4ce3def5ade71e77defb6b8be6562b4ad2a00f9135dbddce71d87ccff54cf9ace93d91d50e034838fd1e57c24294716970fb0605edaaaf7c020000",
    ],
    [
      "ETag",
      "q58Xi2g/uHuNisml3l6fEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-112-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14",
      "fe",
      "2b",
      "91",
      "f7b249d026bda6952a56956c8bd40b4b5310daa6d6764e82218983edb021d4ffbe93840e101a3cc5f1f92ee7e6077223f2888c0913c96d09eafec3b564e48880a109de5e5ece87e9683ef8b3599cdd0683a8739366de74324184a8589a66450ac75a968a831e6fd6ad44c9b2a04aca63143a769cceb133e83a1dc719ba76df192151431acf457e83f42b630a3d6eb70fe6ad44ca24055a08dde232fb77dfbeebb40b25af811bdd7ee9d9461bdd7ec7f524959c1a21f3c9668d19941ad416322a52cce1891ab1cf2fb55b8266ad04c1778203e55c96b9a9f242092ef35824a5aa55c9f881d4793e3b90b537f766a1355b6d96e1c71dcd2af2ee9345b5b5dd2ad0656aac2fc16a61ed0af4baa21af4cebaf8e6059e85574ac62285ad8876d6c43ab1a6cb53eb09b8b37e96b6dde51898fb0b3fb41c4c28026d445ea71352964295ca63cbfcd793aa08d4a05613dc0eed01755c7bc46236e4b1dbedb3d806c65c36ecd32eb3f9a807bd8801459ea9d46b16cd651ed101f47b1de0948f3ac0ba60c731b5bb719763eb699fd900cce5fd21d91f91df4a183815ba905a346d2317811f7adb30d82c67d3d0abcb8829b6e6b449ae2ae2799e068b44d01b75edaba890e854cdc05f865e309d85feb9d78c7d0e09e5f7eb5b1c7c4c530d88a68a6660402d64844d2367abb51ffaabe5748e8c7a9667078426e31f0f4f84f0bea8bb6cea6fe535e8d5fe07c0394dcb1a71d71c8843f6fba3ff2bacc3c05f7e7d5b625a60b528f30b51b8ea8d02f9bef1824bd25c051083829cbfbf0108ae03ef3fd9c3f341303e20f4d1",
      "06ff71e1b8ae5cb88266f1445697d9b0dd51df1e74480d56e655cc71dd43872b8d4a1132c8cd6349cdf3a91a56874afd0f8441dc9765ddaafd5f619d5965c0040000",
    ],
    [
      "ETag",
      "YYL7l9L6xUMPqR6d2klmEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d90614f83301086ffcbf9159215a353927dd80cea0c4ec79c3131cbd2c1814ce0b02d5b08e1bf7bad7e69afef3d77ef9b0ef05d36198470288b9f0e557f51a059db2241dd5546f3d552a3113c40230b26cf591f8bea1e3f5ed4f3f47d7e8ae2270ad6b319133afdc25a4238405e629569083f0768648d3cb6df2bb79131d3b75659aedea2872861a1a6cc0aab6d1ccf177104e36ef4e04887047354d8a46857b68a8e989aa54dab65dd56e86bea548a1a1cec1a85a2ae958ac867c51722f0c5f5a5088498de4caec42d9315a5d294d430bcdd00fb1832b24ae8cc694130a05cc9c173779e589ed844bb7f74d11bd4af8ad85863e6baceff8e6c26c3598dead08354f26f3c96e6ef3dfe02a4631be16a010000",
    ],
    [
      "ETag",
      "wdyL1lFeXOrM7VAvELJo2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "f45b8c52a0b03f2a3241990a4ac09fa62b15990bd2d6a165d9dd67768df9eef0be01658c2b45ae97336fc10bd0d4f4c66cbcec5c1cdc6a35b4ab0354e957329cda9b1085824756ecc35e38729f6d3ee2a087d3c242095c989c193b1ed795afd7342c6ce7a4db3280d23503316bcecb35cae92cea8d204ee683e356d1b93ff2d53b3427d1068afaeab36d655cca68479a921ff23dd935c8487da9df16731c3758eb32f3f43dcd394adc8cda21725cd799ce589d0b4a4958fa2c315f29c1a7cbc4422199a00c6f3e0d116fa56574a1a5b214e2dbf8e9e9ff0223c0ef5d23b922cd633bb43d6f04feea93abeef8e33fe65472097e7e01195c189919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-113-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b6d0224212491a2354ae9ca144807a4d5364dc83686ba259862d3aaaaf2df77314dd7aad2fa84ed7bce3de77ef08cee7895a10522bcb86f59f3f4e55610748298c205bcbad7e3cafb8e27b1c08fceaf8bd89c0797abc7e51210bc6349bcaf4b3690a26d28938b5d3c2c1ad1d6b81162008906b63d1ed8d3b13db26d776639f61c889295f986577740bf51aa960bd33c8a0f0b218a92e19acb2115fbd777f36164d68db8655449f3bda60932d2fc44f56b2928565c54cb5d0c0e5ac99a94ed312fc1c33f6a464edfe71e72bc1f16007ee094614a455ba9ce17a4a0a2ca79d1363a2b5a3c23edf3cd01c5dec65b27061565bbafd20aefd98991618553f55433e33cda06861f9e6fa36095f8db308dd7175eb01aaeb79b5d10c6c6f585177986c2a4649a6b2c8d537d0be102fa19938a575a3de99e3be5970ef91f07d311405ab23e98bad614db336b4e72e2d27c3676486e314266c475f09858743e61938c300c3c2daa59b8125536cead29b3b274865d3b9d8c723b2553e2a4048fa68e85333ab526e870821e1baed81997b590bcef10ba8efcc44b936817ae5789a74bc8715baab3de5857c05b8f0a0a04d07f6a3a74512e40a96bb71f265eb45a27fe95d74f78c30a4c9fe27b98718e4bc9008d1b689e624d203268180a57817706603db1cb6350a2c5ef67d4f5bc73f1a6e5aff40406d8d955fa8be224f2c36fdace117185cb56431efa03aac1f20dd406ae0f7f00095bda67413f765ef413f54f11cb59c32afaf93401ac039fff6dc7cd0730ec3ee8480577581e2a3b15dab07e89b8aef7853d9b3b53778234b8511f62eedc3eb6adcbd165647b56a99792facd874a7bb156be822008f30f75bb0e7f01ce16a9217b040000",
    ],
    [
      "ETag",
      "7W3nEJa4Soaw5ZHS/9MPAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d925b4fc2401085ffcbf8da265410b4090f5551315c14ca831a4396765a8adbddba170921fc7767aba251137d6967a6df6ccf39ed169e0a9142088b227fb6a83607399a5b574c505b6e34dd2a2934820768584ee47dc9736ec5f22c1a5b7187d9615598eb75b74b844e96583208b79015c8530de1c316042b91d612c96d29e675e781d9546e388d27fdd125f5a54c5d3f9a0d06d1e9a0073b6fbf9832c3e635ff8fb5c79d072bb99860860a45824e4ba5e40a13d37736352b2b8ebe965625a8a186eb07b992b6624a4a9f267e1034fda0dd0c0e83a073dc380a4e88e43261a69082e0d99404829186f1895c934d6813a0ea921c67f5f585c6455a3b71657f14b75bb5c0af0069cb0a8ef3bf4112bc64f41d3eb0f70cbe73ac9456983d75311847bf1d47a17e1e751ec5bd1f843614d51e89fbc3de348e86378e7b7cf77eba31a86f94a42435ba108346ebf8a8d36ebce57a265dd6f49ed0288b1e248c7e8fabc2409831ae71f70a00a2bde27c020000",
    ],
    [
      "ETag",
      "ZmlglunhCAOunYef2pitJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-114-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc87bd9a436402e84448ab62c611d529a7484b49bb629b19d03750b986293a9abf2df7780a617556b9f303edfe5dc7c47ae45b62543c2447c534271fbee4a32724440d3186f457a36189bd9eeba33fb7e334d4e644aff7e1e8f468810154bd1344fe058c9b2e0a086ab652b2e6499d342ca63143ab6edeeb1ed74ecb66df75dab670f90a820896622bb46faa5d6b91a9ae6c1bc154b19274073a15a5ca60ff7e6ae6de685bc02ae95f9dcd3441b65bee1fa31919c6a21b3d16a8919940a8a35a4542498c32375cb3e3dd76e099ab66204ef0407cab92c335de585125c669188cba25625c33b52e7f9e44096decc9b84c664b19a87ef3734adc89b0f0655c67a5d802a136d7c0916a7c62647af4baa406d8c8baf5ee0197855c84824b016db8d31323e1ae3f9d478046e8c5fa56575380666fea91f1a3626b405a54556a71352964095ca7dcbfc9793aa0854a356135cf72d87daae356011ebf3c8edf4586401632eebf76887597cd085ee9601459eaed46b16cd64460710b5db3d7023abc39c419bf38852c775283097776cbbc7d8d6e95b3db23f227f0aa1612a542e9568da462e023ff4d661b09a4fc6a1579711516ccdb449ae2ae2699e1a8b44d02b75edaba890e854cdc09f875e309e84feb9d78c7d0631e5b7cb1b1c7c44130588a6054d4143712ab7d83472b658faa1bf988f67c8a8677976402832fc79f748086ff3bacbbafe565e4eb7f63f00ce6952d6885d732036d9ef8ffeafb00c037f7ef2ba04cdb15a94f98d285cf546817c5b79c10fd25c05104101197f7b03105c07de7eb287e783607c40e8a334fee3c27155b9f0029ac513695d66c376074ed7ea931a5ce817b1",
      "9edd3b74b8d2a81421854cdf97d43c9faa6175a8540f200ce2becceb56edff015ea453a4c0040000",
    ],
    [
      "ETag",
      "imP9A/nvk3LXqDlGomazBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "657a0b89db1fad265ea825ad2d31946adaa431668181a2c0d0dda58612debdb3d89b9dd9b3dfce39990e4e7995c00ca23cfb6e50b557199a57db84a89bc2682e35551ac1013432633278a1683b39e5d3e661f5fe2cce1fbf2a0816f339133afec252c2ac8334c722d130fbeca09225f2b7c3410d1319336d6d95f566eb3d7a210b252556d8ec7c7fb1f43de8f7bd03478a424c516115a31d592b3a626cd636ad96655da0aba951316a18e0e12153d4d45211b9acb842dcba627c23ae8598dc8feec494c982626972aa18debd01fb1832b208e9cc694130a0869683a7c3f9c3f2d826daffa3cbd6a00e14b1b146eb39baf8afc866329cd5a8061d88256fe32937977bff07e768b3ff6a010000",
    ],
    [
      "ETag",
      "PKobT7ki9uDCWJ1wXzrPPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad8c8208760783b5949f144160c38424408a251050904eef5ea7d7a8ef0eef1b408448df6703ab49035ec01d8a3b010956abeac658794687cbad2a5f30f6db82a419b21c189ff6969f98f8a20e91b3e1c8b79c4d5acc3accafbc37a9a7257c1ee2a889dd34308728f6c22ea8bc35b3f7ed916f3fc979dd5837373ba7ce51d2dc76baadd9bb3ccce3a1c085aab3797354df1454df96f9324bf4fcde5df2c8f6357da984b1f201154ca73a9a8332a42cc75d405d29829584b4d1ac0ecdc4687962a2ddc9d7c24dbfec3a5cc92bf7d5336c490c6b51787afabfc00290a9a59cf4197d6c97e4dd6e01feea67c3bd258fff3a819c70f0f30b0a00fb9919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-115-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc8fbda2490474322456b96d23552423620adaa6942c65ca85b82a96d324555fefb2ea6e95a555a3f61fb9e73cfb90f9ec9232f53322509cf9f6a90872f0f2221670434cdf1d57e740777feb7210ff7db2adfcbe8b0a7723e9b2182372c457755011d256ac9404db7613797a2aea814a283893a8e33ea38e703a7ef3863d71e3913242a28b2152f1f917eaf75a5a6bdde49bc9b0b9117402baeba4cec5edf7bfb7eaf92e2019856bdf79a3d9451bd4f54bf168251cd4539db86e8a0562063d8515ea0877fd434b9789fbbcbe9ae9b2378cf1950c6445deac617a660a2cc785e4b93954c9f89f1f9e640426fe52d228b89a2de957149777066a554d3581f2ab0ae82cdda5afa579b603d8f961b3f0e17d7de7ade5d6c56dbb51f5ab7d75ee0599a260518ae35b32ecccdc70beaa7a0342f8d7ad43c37ca2f1d5a7e1c4c434069056d301edbe7d471ed4992256396b9835192d990246e321ed14162b3c910866902147946d4b06829cabe9dd1c41967b1ed386e3c1cf621a6139ac66edf1e51e6da83749c90e319f923b9864bae2aa178db21721b2c232f8e82adbf98479e2921a375a12f5b634d016f3d6a2c1041ffa9e9d844b940a5a6dd4b3ff282f9225ade78ed8457905376089f70c6192d14209a4a6c9e06b91629368cf8f3b577896033b11fa7a022d35fcfa4e979e3e24dcb5fe9110eb0b1abcd978451b0f4bf1b3b27c40d2d6a03d9b70752a1e57bac0d5d1f7f2312b7b4cd427e6ebde08eb44f016420a1649f4f13c126f0f9df76da7c04e3eea38ed278c7e561aa516112da25e2a6de17b63b19db7d9b18b0d41f628eed9edad6e46832c20e4afd5252bbf95869",
      "2b56ab57100671febe69d7f12f28d1bd1e7b040000",
    ],
    [
      "ETag",
      "0k83YNB4iSvUpgvrTyvarA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92414fc2401085ffcb782d0955406cc20110b5494184120fc690a59dd6eab65377b70a21fc77672ba25113bdb433d36fb6efbd760b4f59118307ab2c7dae506d8e523437b698a1aea4d17c2ba9d0080ea0112993eb44ac7c497a34e9b66e8fa741331cae65daeb31a1a307cc05785b483294b106ef6e0b85c891d72292555e2cebce01b329ed701ecefcc925f739c5b69f2c82a03f0846b0730e8bb1306259f3ff58bbdf39f048ab1926a8b088d06a29153d62647c6b538bbc94d8d054a90835d470fd2055549542113578d270dd76c3ed9cb8c7ae7bda6db6dd33262545c2645430bc98b3403064849cd12bdb840e03aa2ed971525f5f789cc5b5135bfa93b0d3aa057e05585b92495cfe0db2e007c1dfe103db67f09d13395585395017c175ffb7e338d4cfa3cefbe1e807a10d477540427f3c9a87fdf1d472f77bef838d413d55c4496ab421bacd56b77dda69bee73a249b35bfc733aa420722c1bfc75566c04b84d4b87b031a6530e97c020000",
    ],
    [
      "ETag",
      "xfabIlosEN84W2PL0TCxlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `date` < ? LIMIT 1",
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
      jobId: "grouparoo-job-116-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536d6f9b400cfe2be8f665d39a04f20689147551c23aa6346913d26edda6c480a1d70247b9a35355e5bfcf40d317556b3f71d8cf8bedf3ddb36b9e066cc83c1edd1498df7db8121e3b60a820a2687c6a7d171dfbf4a2fbf9c7c5253fea1b5efb3a1a8d08c14b9684248bb1214591fb2887eb5533ca4591412e4483841a86d16f18fd8ed1360cd3d27bc6808812e370c6d36ba25f2a95c961abb5376f4642443142c665d317c963bc75db6e65b9b8425fc9d64bcf16d9c8d63bae87b1f04171918ed62baaa090986f30011e530d4fd4c0fbf252bbc921694604bee53e82ef8b2255655d24e18b34e4519157aa6c78cfaa3a9f1dd8ca9ed913579b2cd673f7e3169292bcfda481d4369b1c65112bedeb7271ac6d33f2ba048972ab9d7fb397b646a15c843cc60d0fb6da483bd4c6f329450350b8d57e17badef12938738e1d5733a89800a5e269558a0b5e8c65190fe3725edf5249004586757263ea7d302c7de0859ee98756a7e7853a7a9ee5993de878ba3fe86237f01088a74af58a05a94803c308a1d70d43d0014ccf0a4cd403b30b1d0ca1dbe9f7c1343d5f079ded0ed8df9c2b9c729909c9eb91b1f3a5e3da1b77b99e4fc6ae5db511028d655a175736f1bc4e454d12e88dbe7665960b722ae7efcc5d7b399eb8ce995d5ff90c23f0ef563774e921c412090d3924a8303f16010d8d9d2c568eeb2ce6e31931aa7b3cd923241bfeba7f22b877593565557d4baf7eb7f2df03ce202e2ac46d7d6006dbed0efeaf302d47f0a6405b6feb0dbddd307aa4f487a0b4e9b5083b5ddbcb9fac0e2d31c41c53fffd2520709578ffc5ee5f0f81e9fd908f54f44f3be7cbd2c5cfb1de3d9e549dd66c6b609a9d1eabc0b97a95b37ad67ec8a546a98809a6eaa1a5faf59433ab52857c0451925666eecc8f28fb0f08f6b97bbf040000",
    ],
    [
      "ETag",
      "lQ8Jo3EQZ4+XZhiG61b2kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401085df65bca5090b8248c205605512825a253131842cedb4f677eaee54d290bebbb3c59b9dd9b3dfce39990be46915c11c4e69f2d3a0696f12e437d704689b82ad949a2a8b3000649d08b9ce26c5edb97d193ddaf1e730cf67d3881f968b851036fcc652c3fc02718a456461fe75814a9728df8e47d34f148cdbda299bdd87ffe4072294143961b7df6e97abad0fdda11b4046a70063345885e846d686320c79e3d25a5dd6057a961a13a2851eee1f12434dad0d91278aa7d4d453d3b11a2975371b4ed4bd9005859a53aa04debf83f830b12e023a4b5a500298be95e0717ffe8a3c76890effe8aa65b4af86c4d8a2f31c5efdd7e432b16465d3e000422ddb784ef97aeffe000ce6ceb46a010000",
    ],
    [
      "ETag",
      "Cj5l4wyO2Fs3X0kk86dtDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "d3",
      "4b",
      "7282300000d0bb646d180cd231ddf11350018b2505374cc458894a6800013bbd7b9d5ea3be3bbc6f408b82354dde8a33abc02b1829c24aa1aceab969f79fe492215f4be831d6379b45e2148617a12ff3462eee074aaf9a740d122f8c90925deba5251196c597e6dea9859f0ca1b07175aa675ed0e91c77c6014b8d0b22d2ae634e0dc397065e5d2af6f45e2d691bcd92c31b5743f85e6206fdd65dafe645cfe2dd59cda7a1b40723e3f665ad5970aa8f9b75a6f2d4bbcad3b0559144dee01ff9880e851c03c7ee4bcdb7b11378e4969cb704660b4e9627185979a03c3dfd5f6002d85097923579f9d8aee9184fc05ffdbc1d6bf6f86f322a99043fbfc2ea899019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-117-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8553614fa34010fd2b64efab2d506a4b9b34675351495a7a47a9c65c2e6417065c059663178d31fdef372cd6d3989c9fd8dd7933efcd9be1853cf02a2573c278fea785e6f9dbbd60e48480a239be9a796d3aeeb809f3b2b596b713975d32ff69b14004efb2242deb020652b44d0272bedf0df346b4356d841860a1816d4f07f6c4b1477870ad537b8689128a6ccdab074cbf53aa9673d33c920f7321f20268cde53011e5dbbbf93832eb46dc43a2a4f991d3441a697ec1fabd1009555c548bfd0e15b4129a184aca0bd4f02f3565671f6b0f392d8739821f79023449445ba94e1796484495f1bc6d7455327f215ae7bb03d9796b6f15198928dab28a2b5ac28991524563f55c8371116e37861f5c6cc3cd32f2b741bc5b5d799be570b55def37c1ceb8b9f242cf509415a0738d8571a66f015e903f05a978a5d9a3eeb9637e75c8ff3c982e01a925f4c1786a4da8ed5a3396b16992b9ce29cb2c60cc65d353ea302b998d619c32a098a7497516ad448586ce9c493a895d7026f17832b362779c423c72288ce8d8ca2c46c9e1843c355cc13997b590bc7788dc847ee4c551b80f56cbc8d32d64b42dd4792fac6be0bd46850d22e83f3d1dba2817c8d4d9ed0791172e57917fedf5135e434e93e7dd1f9c71460b0988a60d9aa7a0d988140d23c172e39d23584fecc73128c9fcd70be93cef54bcb3fc2d3dc201767295fe925d14fac1a59673445cd3a2d590c7fe406a947c87bda1eac36f44e296f655c8cfbd17de92fe29840c1aa892afa789601df8fa6f3b6e3e8271f791472abce3f224b263491ae89788eb7e5fb3dd99ebd82ed1e0467d8a8d1df7685b57a3ab082554eab5a57ef3b1d39eac956f200ce2fc036dd7e12f08062f0d7b040000",
    ],
    [
      "ETag",
      "/gp/384rRgmu0AY68bGbIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5b4fc2401085ffcbf85a0255ae4d78288848c24d2846630859da69296ebb75772b2184ffee6c45346aa22fedccf49bed39a73dc0739c06e0c03a8e5e7294fb8b08f59d2966a872ae15dd32912a040b50b388c856a3550e2769f7fe317ae0e375b86bcefb65b7dd2642f91b4c1838070863e48102e7e900294b90d67cc1f3245d159d057a9f99e1dc9b0dc67dea1311987ebc180eddceb00747ebbc1830cd5605ff8fb5e5d182ad58cf304489a98f464b26c5167d3d3036154b328e252572e9a382022e1e4452e4199342946852b2ed46c9ae5fd99754342b35bb4524173ed3b148095ecc492068a1199f891dd9843a01b228c971585c5f691c078513530ec65ebd5a08fc0a90b630e6b8fa1b24c11b46dfe1033b65f09d6389c8537da66e8613f7b7e328d4cfa3ae5daff783509aa23a23de60d49b7bee686ab8e5c97b67af514da5a024159a10ed4ab5596bd42befb97685c99adee36899a3053ea3dfe336d6e0848c2b3cbe011fc854f47c020000",
    ],
    [
      "ETag",
      "979/fOnCVYgXlNbfw8SG/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `stamp` < ? LIMIT 1",
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
      jobId: "grouparoo-job-118-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85545b6f9b3014fe2bc87bd9a426b1090949a4a88b52b6b125a423a4d16e4a8c63a83bc0149b545595ffbe0334bda85afb8040e77c9773b1b9437f45b64323148af8bae4c5edbb2b19a213c4358d21eab36f3c59657231fb6aafc5fe52cee5fa66321e0342542c45d33ce12d25cb8271355a2ddb7121cb9c1652b640a845c8a045fa5d6212620f708f0c81a87812cd44f617e8975ae76ad4e91ccddbb19471c2692e549bc9f421ded99b9dbc90579c69d579eed9011bd579c3f534918c6a21b3f16a0915948a171b9e5291400d8fd45df8f1b9765bd0b41d03782f18a78cc932d3555d20c1641689b82c6a5534ba43759d4f3ed0d29939d3c0982e565ef07e4bd38abcfd6050656c36055765a28d4ffe626e6c73f0baa48aabadb1fee2f88e01a1424622e11bb1db1a63e3d498786710551aaadb1abf4b8cbb0ca23377ee0606816a765c6991d5b504344c7855c7fdbcdc976baa0854836393dcd8b84fc9000fc328b45934e8f6c208f3301c84768f7643cc8616b77621a7c0d3957acda299cc2c4630b659c87ad6c0b2cc213cd466fd61dfee5ab81f85619f308b776d7438413785d0fc4ca85c2ad1cc0cad7d37703681bff2a693c0a9db8828cce5ac29ae6ae2699d1a9a04d02b7d1daaac90e0542dc0f502c79f4c03f7c269763ee33165b7cb6bd87a4413c5014d0b9a72cd8bb9dcc1d0d0f962e906eec29bcc80512ff2fc885068f4ebee9110dce6f59475fdaebcfa56ed7f045cd0a4ac11fbe6031174389cfc5f2170e7ce3298cccf5f5731b1895bd86c915e40cc11e98e88d5c618ff04f13f4084d3dfe8a2ef2bc7ff819a90cf235ef08cbd7d2e005c27debec5c71b0560b853e003a7530b38864c552eace0cd711469dd7cc31e0c87d8c6a80617fa45cec4f838f74aa352e429cff47d4bcd8daac658a74af500aafe542bcf73bdcf90fd07fe7e934bd3040000",
    ],
    [
      "ETag",
      "RcKelUnoOLJ7WivhoMoWwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90d14ec2401045ff657cb44d581a2b92f000865014891630318690a59dd662dba9bb530d21fc3bb3c5979dd9bb67e7decc09be8b3a8521ec8bfca74573bcc991df5c13a36d4bb6521aaa2d8207c83a17325d0779f4f29ef3f34770fb340bb3285cf5c7a3911036f9c24ac3f0045981656a61f879825a5728df763bd34d148c8f8d53e6cbf574368d45a82875c272b3588c278b299cb7670f0eb48f31438375826e6463e88009cf5d5aababa644df526b12b4d0c1dd436ea86db421f245f1951af82a0c545fa9fb41ef4e3d085952a2b9a05ae0cd0ac487897519d39fa4052580e95a099e75e7afc8814bb4fd47274746fb6a488c2d3acfded5ff915c2696ac6c5af420d1b28da8e0ebfd7c01b8fdcd806a010000",
    ],
    [
      "ETag",
      "dT3gHMVgtKY3+JG6fH6S2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "0000000002ffedd3417282301400d0bb642d0e06b0d01d08d562001514cb8649337f2a0a92120482d3bbd7e935eabbc3bb23ca180891b7f505aee815498aad299baeb9e9b87db1bf96495c057b2a2cfd78b3095df51ba34baa203a1111cf74cd06714b59ebd5259105185904b5d9271b73c0f39b6e864936e02a959d69fb4c2dc7d4c8ea9aaaf870e56120b3a3abaacdb9244629fcd52c0db66596bc61c569df7b37fc5ca89717a556b4532b49328c1dace73b8f599e8c39d090c4d21eb7073855aa8679cf9562b1b2c2201abf3ec8f7cef7143f3beb238b973b37bf78794c9c25e4f8307d7afabfd004c1c08b06445e3cb66b86654dd05ffdbc951c1eff1da00d34e8e717ec2e0a2519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-119-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc8fbda2490c70291a2354ae8ca94908d9056dd3421db5ca85b8229369daaaaff7d17d374ad2aad9fb07dcfb9e7dc078fe4569429991126f2bb06ea874f37929113029ae6f8ea9cd7fbeb6f61e04d56c1dd067eb2eceaf2229fcf11215a96a287aa809e924dcd41cdf6bb7e5ecba6a2b5943d4cd4731cafe77c1e3943c799baf6c4f190a8a0c8d6a2bc45fab5d6959a0d0647f17e2e655e00ad84ea737978791fdc0f07552d6f806b3578ab39401935f840f54b2139d54296f3fd0e1d340aea040e5414e8e11f3565a76f73f7053df47304df0b0e9473d994baf58529b82c339137b5c94a668fc4f87c75203b7fed2f638bcba2399449490f7062a554d3443f54609d45db8d158467db68b388836d98ec96e7fe66d15f6ed7fb4db8b32ecffdc8b734650518ae35b74ecd2dc40beaa7a0b4288d7adc3eb7cacf1d0ade0fa625a0b4822e984cedcfd4716d8f656cca33773461990d8cb96c3aa12366736f0ce39401459e11352c5aca928db3a1cbe824f1b2e12819db294dd834cd120a539a31eaa68c52f27442fed442c34aa84a2ad175885c4641ec2771b40f978bd8372564b429f4aa33d616f0daa3c60211f49f9a9edaa890a8d4b63b08633f5a2ce3e0c2ef26bc869cf287dd1dce38a3850244d31a9ba7a1dec8141b46c2c5c65f21d84cecfb31a8c8ecd723697bdeba78d5f2177a8c036ced6af325bb380ac2afc6ce1171418bc640eebb03a9d0f235d686ae9f7e2312b7b4cb427eecfde88a744f11645043c93f9e26824de0e3bfedb8f908c6dd471da5f18ecbc355abc26be89648987a9fd9aee7b9ce901870addfc53cdb3eb6adcdd166840394fab9a46ef3b1d24eac512f200ce2fc43d3aea7bf00aea9187b040000",
    ],
    [
      "ETag",
      "1HrUhJNI95DIqMeZbfYWVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:24:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "925b4fc2401085ffcbf8da262c0ad2263c80a092706f49bcc490a59d6275db2dbb5b0d21fc77672ba251137d6967a6df6ccf39ed0e9ed33c061f56e97a53a2da9eacd1cc6c31475d0aa3e956c85c23388086af89f4c2c5edc5a677335a4c98e7f546220aea77b3769b081d3d62c6c1df4192a28835f8f73bc87986b416495166f9b2ea1c30dbc20e83703e185f519fc9d8f6e3c570d8e90efbb0778e8b31377c59f1ff587bd83bf02457734c50611ea1d55228f9849119589b9a67854057cb5245a8a182ab076b25cb822b295d9ab88c792e6b9eb23a63e7ad5a8379440a197193ca9ce0454002c148c3c55cbe924d6812a0aa921c27d5f585c6695c39b1e5601c36cf2a815f01d296a402977f8324f891d377f8c00e197ce77826cbdc1ca9cbe1a4f3db7114eae751bd4ed8ff416843511d917030ea07616734b5dcc3c17b776b504f95a42435da1059edacd5386fd6de73bd90366b7a8f6f54890e449c7e8febd4809f70a171ff06b3e7e9c77c020000",
    ],
    [
      "ETag",
      "9TUYCqDXMUO199DMlcS2ZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:25:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE  `profile_id` = ? AND  `amount` < ? LIMIT 1",
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
      jobId: "grouparoo-job-120-1631211780519",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f",
      "9b",
      "40",
      "10",
      "fe",
      "2b",
      "68fbd24ab1cde94bb252d7212d9563c71827ea257b5906b229b0845d524591ff7b078873286af3643cf31d73ed3df9cdf3888c49c8939b0acabb77d722244704144d305ab153bb5aa541b2ba9e457ef6f5d3c8e7df5793092278cd92342b52e84851950ce478b3ee26a5a80a5a0ad141a18e61ea1da36f19a6610c86ba638c9028218de73cff8df42ba50a39eef50ee6dd448824055a70d965227b8cf76ecd5e518a6b604af65e7af6d046f6de703d4e05a38a8b7cb25963059584720b19e529d6f0448dc28f2fb5bb9c66dd04c1b79c01654c54b9aaeb420926f2982755d9a892f13d69ea7cf641d6eedc9d05da6cb95904ef7734abc9bb0f1a95da765b82ac52a59dfacb336d57a0d715952077dae517d777350c9522e6296c79b4d326dab1365d9c60f44143fb59e9bac5303cf7cebc4033b09c08a4e279534c40c314ea421e06e6bdde534da00a2ddbe476a0f7a931d447611c0e583cb49c30d6210c87e1c0a156a8b3910d761402459eaad51b16cd456e0d8da10d96c18c8145fb96e58063eb964d2dd3b462c7a29169f71db33f22fb23f2a7e40a4eb82c84e4edd0c8a5ef05ee36f0378bd934709b36628a8339698bab9b785ea7c22611f49fbef675960b74aa37e02d02d79fce02efc26d973e8784b2bbf50dae3da6a90444d39266a0a03c13110e8d9c2fd75ee02d17d339329a4d9e1f10928c7fdc3f1182bba299b26a7e6bafbeddf81f001734ad1ac46dfb410cb2df1ffd5be174be9cbeadd17510b1ff85203cf45681ac36aeff8db4211f622821676f5f00829bc4db0ff6f078108ccf077da4c2ff78704cd62eac84f6f078d694d8b247ba",
      "6e8f1cd2804bf52ad737cdc3846b8d5a1132c8d5434bede3a907d6a42af908c224decbc25b7cc6ec5f5dea440fbe040000",
    ],
    [
      "ETag",
      "ucF4uQlTgQjCdRmJB9RiZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:25:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1631211780519"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6ac2401085df657a6bc0556cabe04553420d04a9ab818288acc998c62699747f140979f7cec6deeccc9efd76ce613af8299b1c16702a8b5f87fafe54a0ddf846a27195355c5a6a0cc208d0aa82c978b64d4329a626de20adbee6d25d77745b2e9930d937d60a161d9c4bac72038b7d078daa91bf1d8f7a98c898bdb75e89d7bbe823922cd4947b619d26c95b9844d01ffa115ce824f18c1a9b0cfdc856d305331bfbb446d56d858121a7333430c0c343a1c9b54a1305ac0462320ec4f3544c8478791dcfc49cc98a32654b6a184eb7c03e96acaa24dd382d0806f4d072f0f3705e599ef844877f34bc5b349f9ad8d8a0f71c3ffcdfc967b29cd56a8723c8146f6355dac7bdff03645263666a010000",
    ],
    [
      "ETag",
      "I5SUBR13sIQeoHX9RuvTow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 18:25:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
