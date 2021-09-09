const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631152720168";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffedd34b7282300000d0bb642d8cf291a43b29168b0ee52348d9641208042c0df2a960a777afd36bd47787f70d4896b1bec78338b34ff00466a2203993f72d34ad6b555b1b06c558961984f9327e316a21c54e1868f8a2a806730aed26b2c68ca7647730991a8f87d93bb9be44488357415d0baa5585b6ccf5512dd0e5bd318e384a4b9106e554ed903605d80ee179e621c1fcd5bfb43a6f46de52dac61635b931d74a68d367dbdf46274f4975cfb19c60358c939ff2c1adba0f4609cdd365b727b9b79db9b4aedfd4f42b998e098c90bd17986f50e2a2e186ddf51a4b852d3f3cfc5f6001d8d4561deb7175dfaeea082dc05f7d3ccc2dbbff3719e958077e7e01b9a7913f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1631152720168",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6fda3014fd2b91f7718590002520a115d1744582b086d0eea12972cc4dea368969ec307515ff7dd74e61ad2ab59f62fb9e73cfb98f3c917b5e6ec888243c7ba8a17afc742712724240d10c5f3f1777b7de759a5c05f9f7320bff0ee54f9867e33122b866495a6c73684951570ce468bd6a6795a8b7b412a285895a4ecb39ed3a4edf1db81de7d4439a843c9df3f21ec9b74a6de5c8b60fd2ed4c882c07bae5b2cd44717cb777aebdadc41d3025edd78a368a48fb5dcd2fb9605471518ed72bd4af2554311494e7e8e03f71939cbdcedce6b4686708de7106943151974abbc2144c9429cfeaca6425a327625cbe3890953ff7a791c5445e17655cd2024eac0d5534568f5bb02ec2e5c29a0517cb70318966cb205e4d2ffdc5a43d5dced78b6065dd5cfaa16f299ae460b8d6d83a33b7002fa8bf01a97869d423fdac959ffb337b3b144d4069094d301e744ea9e37586499a0c58ea75fb49da8124f192419f76930e1bf6a0b7498022cf881a162d45d9ef74376eafe3c4837ecf8d7b8c79b197ba2c1e269482c35c46bd01d99f903f155770cee55648de7488dc84b3c88fa3701d4c27916f4a48699dabf3c6982ee0a547850522e89d9af63aca052ae976cf82c80f27d36876ed37139e4346d9e3ea01679cd25c02a26985cd53502dc4061b4682c9c23f47b099d8b7435092d1af27a27bae5dbc68f9911ee100b55d65be641585b3e0abb173405cd3bc36905d73d065a43cd7a6f7bf11882bda2421576b3ffc419aa71052a8a0641f0f13c126f0d18f76587b84e2e2a38a5478c7cd61526bb00a9a0de2a6d823dbed397d62c0957a13ebf7ba879ee91c3a231450aae7829ab5c73a1bb15a1e4118c4e107a657fb7f15f61a4174040000",
    ],
    [
      "ETag",
      "+mjh8VfbQNlXngRz9sZeLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631152720168"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d",
      "93514fdb3010c7bf8bf79a8aa64041917848b7b2550a2d4dc35e261419fb929939becc768aaaaadf7de7c0ba0990c24b7277fe9d72f7f73f7bf64b19c912f6a0eadf1dd8dda71afc3a0439b84e7b47af168d031631f0bc2632455c9f1430a9abf5d3f713585d6f723f5f5f5d11e1c44f68384bf6ac52a0a563c98f3d33bc016a13a8bbc6947d1631bf6b437153e48be557ca1b94215fde65593acbe6ec101d1b25f7bcecf90fb4dd1f22f6880f395460c10808b3b4161f41f84558d3f1a6d53072d859018ef5707f505bec5a6e11475419c5a3787a1ac7e7938bc9389e5e12a75170afd0107ab7a1f19847cf758e4fb4248b4f89b07d4c0b57fd734b7525fb4542b85816d3b37ebeff012e0476c6978360a5acf3cfe2fd055f44784d6afe41906e4ae921a80623c10e51aa2db994169c1b24d195bc6d8fd86cb5cadeaa62a4452587c1ad1a00b4df1e81eb6c95be272df9eb9f565fd262fe86709e5c73448ac5cd7c53a437b781bb7f31c26ce7c1dd5a245339087e8ac76797e717d3f1b3c53e63b01d7d27f1b68388094e7fca37e5595271ede0f00798f7a61687030000",
    ],
    [
      "ETag",
      "AooQ/Te2gfQwV/eOFSRtEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-2-1631152720168",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8553796f9b3014ff2ac8fb679b9ac484022152d54509ddd0728d9046bb94d88e616e01a7d8b4ebaa7cf73da0e9a14aad6409cbef77bc8b3b7429f22dea232a92ab9217b7ef2e244547886b92c02b16a351f2f76cfe355d25f8df68187757e1e0e6e40410a2622992ed52de52b22c1857fde5a29d14b2dc9142ca1608b5ba2dd3b14cd3eeba5d6c3a3da0299ec663915f02f98fd63bd5ef740ed6ed44ca24e56427549bc9ece1bd73ddedec0a79c199569de78e1d30519d573d4f53c98816323f592ec0bf54bc58f38c88143278246ee9a7e7ca6d41b27602e06bc138614c96b9aeb2020926f358246551aba2fe1daab37c72410b7fec0f2363385b4e23e3fdc70fc66061acd7b5867116ce26c606ea8945cad5c6587df143dfd8280df61be35789b1c58d53b0d972a5455e9b4484a6bc32b86f43f0b2f7158168a278135cbbd821660f7b34a62e8b7b964d63cc29ed51d72616c5cc3be6c75bca09f074a55eb3480ea5e19e6dbb1eb0a9637a8e637bc4a65dcfdc7aac6775a9c3b6aeeb72db42fb23745308cd4742eda4124d33d02a0c227f1d85cbe97010f975193129533d6a92ab8a789aa7862201f44a5dfb2a2a2438559d0da6911f0e865170ee37c31cf384b0dbc5158c3326a9e2802605c9b8e6c5446ea169683e5b0451309b0ec6c0a827343f2014eaffbc7b2444b7bbbacbbafea22898f88b683099d7391c40e7242d6bd4757341a6e7e21636e14418f7ebd3c618ff40fbfd6f20c24a36bae8dbd20fbfa3e629e4312f78cede9e2a80ebc05b3fd661cd010a8b0e2eb0515ac00a315579b08237ab24b23ae903dbb22c17d5e042bf881dbbcea1679546a5c8339eebfb829a35873a1bb3523d8020081b300da69f21fa1f0ecf9e4664040000",
    ],
    [
      "ETag",
      "0iDDgxFPKlWg0zDCf2WRAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1631152720168"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90614fc2301086ffcbf995850d2390257c008342c405074413434829b731dc76b3bda964d97ff73afdd25ede3eedfba40d7c64e509423866e9678de67a9322bfb821465be76c65aba8b4083d4056a990bc79fee93f2c66857e7b5a47a3a9e2fef9753a990861f5190b0561034986f9c942f8de40a90a946b8783a6ba64a1f85ab960196de78ff35882824e2e8876abd574b69a43bb6f7b70a1638c091a2c35ba172b4317d4bc74b25615558e9ea5da68b4d0c1dd416aa8ae9421f224f1065e30bc0d82bbc168e007c3b1703969c5199582ee36202d4cacf298be451502014c378a75d2ad5f2ef69dd0fe9f9d5d19edda90f45a749563ffafff9e9c138b2b9b1a7ba0957cc622630813955b6c7f01e2dd8a1e6a010000",
    ],
    [
      "ETag",
      "tSMx/FHBmcXKPN7Aat/hWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-3-1631152720168",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "ef6f9b3010fd5790f7714d0224253fa4688d52ba464ac806a4d5344dc89883b92538c5265555e57fdfd93459bb492d5fc0bef7eeddbd3b9ec93daf323221292f1e1aa89f3edd89949c1150b4c0db59741b0dd3cffe7e7de7f92be68592e5aa984e11c1354bd2edae848e144dcd404e3651b7a845b3a3b5101d4cd4e9771cafef38e7eed0b51d6f84340965bee4d53d927f2bb593935eef28dd2d84284aa03b2ebb4c6c4ff7bdbddbdbd5e20e9892bdb78a3d1491bd7735bf948251c54535dd44a8df48a813d8525e62057f89597af1367397d36db740f09e33a08c89a652ba2a4cc14495f3a2a94d56327926a6ca571f24f297fe3cb698289b6d9554740b675646154dd4d30eacab70bdb216c1d53a5ccde2c53a48a2f9b5bf9a75e7ebe5661544d6edb51ffa96a26909866b4dad0b730af080fa1948c52ba31eeb6badfce2cfe2ffa168024a4b6883c9d0f6a833b2c7699e0e593eea9fa7b90d693a4a87e7b49fda6c3c80419602459e11352c5a89caf51c0732d74decfec04b06d9d04ba8c3ec840d5c860f1dbbd4268733f2587305975cee84e4ad43e4365cc47e12879b603e8b7dd3424e9b525db685e9065ed7a8b04104bdd3d34147b940256df72288fd70368f17377e3be12514943d450f38e39c9612104d6b344f41bd12191a4682d9cabf44b099d8b7635092c9cf67a23dd755bcb2fc448f7180ba5c65de248ac345f0d5947344dcd0b231907dfba1dbc879a98b3efc4220ae689b847cdff8e10fd25e8590430d15fb78980836818f7eb4e3da2314171f55a4c2336e0e935a83d5d06e1037cd9ed8fdf178480cb856ffc6068eeb1e3dd3397446d842a55e1a6ad71efb6cc51a79026110871f18af0e7f00d90a338074040000",
    ],
    [
      "ETag",
      "ASWS7b+EvOj6EMc6Rscftg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1631152720168"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "8bf79a4a0da50545e221651d540a2da4e1650845c6be043327e7d94ea652f5bbef12a0a03129bc2477e7df29777fffb363bf542d59c41e54f9bb01bbfd5682bfe982145ca3bda397c1da010b18785e1219633a37e737e1cf568759fbfc7c81c9b48dcfce8870e2112acea21d2b1468e95874b76335af80da04eaa6aaf33e0b98df9aaeb8c9d2e5ea82f20a6597af6e93249e270bb60f0e8d927b9ef7fc17daeef7017bc287140ab0500be86631169f40f865b7a6e395d13072d858018ef5707f505a6c0cb78823aa8c26a3703609c3e9d1c9d1389c9d12a75170afb026f47643e3318f9eeb14ffd0922c9c1061fb98162efa674b7525fb45ba70b9ca66c7fd7c1f012e0436b5cf07c14259e75fc47b035f45f897d4fc8b20dd94d2435009b5043b44299373292d383748a2cbb931076cbe5e279f55a9a5452587c1560d00dab707e047b28eff272df9eb5dabef71b6f844384fae3920d9f26ab1c9e2abeb8ebb7f35c27cebc15d5b245339e8fc148e8f4fa727b3f18bc5ceb1b31d7d27f2b68180094e7fcaa5f22c2ab876b0ff0b9e18cfad87030000",
    ],
    [
      "ETag",
      "AoRBpCQ1Zvl1TvzzGoL5vA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-4-1631152720168",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "69",
      "6f",
      "9b3018fe2bc8fbb2a3490c819044aaba28a52b5a8e369056bb94d8c630b780536cba5555fefb5ea0e9a1aaed87494820bfcff15ee6165d8a3c424344457255f2e2e6dd85a4680f714d12388d39b543697dfd14c47f2d9a758faebcf8f8747f1f10a26229926d52de52b22c1857c365d04e0a596e4821650b845a76cbec754dd3b15c0b9bbd3ed0144fe389c82f81fc5beb8d1a763a3beb7622659272b211aacd64767fdeb9b63a9b425e70a655e7a963074c54e755cf835432a285ccf79701f8978a172b9e119142060fc4887e7eaadc16246b2700be168c13c66499eb2a2b9060328f455216b52a1adea23acb471f28f026de3834c6f3e52c34de7ffc608c0263b5aa358ca3c57c6aaca19e58a45cad8df3636fe1196ba5c17e6dfc2c31ee72e3c018cd0e0d632da2978f987100c9445c6991d7a98484a6bc4ae3ae59fef3095504a289e24d70e5e21e31fb784063eab2b8df75688c39a57dea3aa44b311bd8dc8e2827c0d3957acd22b9cca3786099c4c13dce986be22876dc88d97d27b248cf7628a5b64dadb8db43db3df4a7109a1f0ab5914a342d43e70b3ff456e162391b8f42af2e232665aa0f9be4aa221ee7a9a14800bd52d7b68a0a094e55fffd59e82d46e3d03ff39a914f7842d84d7005438f49aa38a0494132ae79319511340d9dcc033ff4e7b3d10418f51c4f760885863f6e1f08e1cda6eeb2aedf28f4a75e108ea627750e3bd01949cb1a75dd7c2073e0e21636e109311ed64f1b63fc1d6db77b2f8b43213dfb7561fbbf155c50f80508b83c0d199d2ebdc537d41c2d78cc0b9eb3b7370bc075e0ad5fc0ee420214ae24b8c0ee6b016bcc54e5c10adeacb3c8eac6edd80eb606a80617fa59cc74f06e6e9546a5c8339eebbb829a0b5975aa0e95ea1e0441d8c2993ffb02d17fa88302e3",
      "0e050000",
    ],
    [
      "ETag",
      "feb4To2K+Sfx2bm3FqEfHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1631152720168"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2301486ffcbf15216e944344bb8104390b8101c124d0c21a59ccdb1ad67f60343c8febba7d39bf6e4edd3be4f7a81aad40748605f16df1ecdf9aa40f71a860cadaf9de5ad256d1106804e164ce6f3f76b5d3437d53ac6eab44a5f46c27f14930913567d612321b9405e627db0907c5e40cb06f9da6ea7c86bc7943bb721582cdf66f359c6414387102c3769fa384d67d06dbb011c699f618e06b5c2f0626be888ca2d82ac954d5b6364c91b85167ab83f280cf9561aa28893681489f1ad1077f17d3c14e307e66a52d295a419ddac815b1c395967f4c3aa201830fdc8d679bf9e388e83cff61f9d9e1dda9521aeb5181ac578f8d7ff44c1c9b1ab331e07a0247fc673e920c9656db1fb05b9ab54ec6a010000",
    ],
    [
      "ETag",
      "fGW+ngm/kS2ekvPLK41uXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "7282300000d0bb646d1d4a05497706915f11854ad50d9386a00146310906747af73abd467d7778778009a142e4f25cd313780703d6e1988cc3d64273c526b2d574efd0dc7c29e8e61455be2226391676bfbe916ec0de39f3593d9de3b2e34633386ab775b5d0b51716e4cc34434acce3769a7e668544d0411fdee55675b3905dab106ea57e40addd14c544f8c9573a384cb763bae94b3e8b8e9d552bbc8f9326e5fbccce022d6c4e5315bfaad93232bf5d1cf982d7bba5aa866e811229cfab9732b85ad449d6bb0bafaad27027298a83b9b5127900e38d6cd65920c74f4fff171801dab78c5391b3c7f63703c211f8ab9fcba1a58fff88624e39f8f90500bfc3df19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1631152720168",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f77185f00a5024b4229aae4810da10da4dd314d9ce4dea36c4103b9dba8affbe6ba7b05695da4fb17dcfb9e7dc479ec983281232224c64bb0acaa72ff7929113029a66f8ea5efd9dae8bec474becee76c505ff2adbd737d9788c0861588a6eb6393494ac4a0e6ab45e35b352565b5a4ad9c0440dafd1ee77db6daf33e8b4dafd21d214e4e95c140f48bed37aab46ae7b906e66526639d0ad504d2e37c777f7b1e36e4b790f5c2bf7ada28b22cafd50f35b2e39d54216e3f50af52b05650c1b2a7274f09f98b0b3b7999b826e9a19821f0507cab9ac0a6d5c610a2e8b54645569b392d133b12e5f1dc8ca9ffbd3c8e132af36455cd00d9c3809d534d64f5b702ec2e5c2990517cb70318966cb205e4d2ffdc5a4395dced78b60e5dc5efaa1ef68ca72b05c67ec9cd95b8017d44f40695158f5c83c1be597feccde0fc510505a411d8c07ad3e6d0f5ba72c65039e0ebb1e4b5bc0d8900d3cda652d7eda835ec28022cf8a5a162d64e1b59261bf37a4314ba817f77add4eccfad08969bb93a6fd41afc7fa29d99f903fa5d0702ed4562a517788dc86b3c88fa3701d4c27916f4b486995ebf3da9829e0b5478d0522e8839af6262a242a9976cf82c80f27d36876e3d7139e4346f9d36a87334e69ae00d1b4c4e669281732c1869160b2f0cf116c277675082a32faf54c4ccf8d8b572d3fd2231ca0b1abed97aca270167cb7760e881b9a5716f2581f4c19a9c88de9fd6f04e28ad649c8f5da0f7f92fa2984144a28f8e7c344b00d7cf6a31dd61ea1b8f8a8a234de7173b8321abc847a83842df6c8f606f56faa69a9dfc586dee9a1672687c9081b28f44b41f5da639db558a58e200ce2f003dbabfd3f567197c374040000",
    ],
    [
      "ETag",
      "/PzCUngX0iqhqnFc+o1QVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1631152720168"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f9b8544a801614890fed5646a5b485269590108a5cfb12cc1c5f663b9dbaaaff7d9700651a93c297e4eefc9c72f7facd9efd5046b2986d54f9b301bb3b29c1dfb5c10a5ca3bda3578dc6010b18785e12f9e53efcad37d745314f8be55394cd93741dde5d5d11e1c413549cc57b5628d0d2b1f861cf0caf80da04eaa632799705ccefeab69866abd9e23be515ca365fac93643c49a6ec101c1b25f73ceff84fb43d1e02f68c9b151460c1086867a92d3e83f0b3764dc7ab5ac3c061630538d6c1dd4169b1a9b9451c5065301c44a3b3281a9e5e9c86d1e892388d827b8586d0754ae3318f9eeb15fea22559744684ed625ab8e89e5baa2bd92dd286b345363aefe6fb1be04260637cde0b16ca3aff22de1bf82ac2bfa4e69f04e9a694ee834a30126c1fa5ea9c4b69c1b95e125dceebfa884d96cbe4a32a465a54b21fdcaa1e40fbed11b84e96e3ff494bfe7ad7eadb389b7e209c27d71c916c369fa6d9787edb728faf4698ec3cb85b8b642a07ad9fa2f0fc7278310a5f2cf6155bdbd177626f1b0898e0f4a7dc28cfe2826b07873f6821d5d487030000",
    ],
    [
      "ETag",
      "+X0zlbFffMSfOh1TMLSU0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
        query: "SELECT COUNT (*) AS __count FROM `records`",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1631152720168",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "52",
      "6d",
      "6f",
      "da",
      "30",
      "10",
      "fe",
      "2b",
      "c8fbb24d852404c28b843644b329122f03c2b67ea2b673c94c9338b59d4e55d5ffbe73a0ac55a5f60352b87b5eeef1dd03b9116542c68489ecb60675ffe12019b920606886d57ab1b8eac6a3f5ca64c3697d487f2b93ccd69309228465695a5439b4b5ac15073dde6d3b9992754595946d146a076d2ff03dafdf1d745d2f18224d439ece457983e43fc6547aec384fd69d4cca2c075a09dde1b238d79dbbae532979006eb4f3d2d14113edbce9f925979c1a21cbc96e8bfeb506b587828a1c27f84f4cd8d797ca1d418b4e86e03bc181722eebd2d8a95082cb321559ad1a55327e20cd94cf3ec8369c87b3b8355bed9671ebe3e74fade9b6b5df371aad6f9bd5a2758d79529183be46bd04b41165a316539683553ae58d5e3fb2255043351c9bfb811b506fe88e58ca063c1dfa7d96bac0d8900dfad4672e1ff5a09730a0c83356bd61d1529603cf07b73fe80f7dcf4d5cc638f4f1170481db4501ee739ef4ba413a228f17e4af12062e85aea416c7d4e4d7268ac37dbcd92d67d3386c62a4b4cecde571381be2f99c064322e88d5c8fb62b243ad9278c9671b899cee2e86778dcda1c32caefb7b7b8b794e61a104d152dc0805ac8041f8dfc586da3385a2da773ab85a710df57b6bede859bab536903292828f9fb8f8ce0a6f1de413f9d1742f1c0d0451bfc8f1be5da7a7005c7cd8ac2ce726607813f220d5899573d5c0af6ce676515a180d29c021dcf8b3c9ecc6a7d06611317b28c96dfb1fb0fdb5c4b8ddc030000",
    ],
    [
      "ETag",
      "uMMY2T9QOtg8AujfXrtdCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1631152720168"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2301486dfe578cb120611cc122e0659145d884eb8328494723687ddce6ccf30b0ecdd3d9ddeb4277fbff6ffd20ebecafa04111ccbe2bb457bbd2b90dffc90a16b0d3bd91aaa1dc208905521e465be6ca6b171abdb39db86b7e78b552f265e2c8470fa132b0551077989e6e420fae8a05615cab5c341535bb3507c6d7cb0de6c93c72493a0a2930f36bb348d976902fdbe1fc1998e19e668b1d6e85f6c2c9d51f3dacb3a5535060347add5e860808783c252db284b144812cc8270360dc3fbc97c320e670fc219d28a4baa05ddbd83b430b13219fd882a8402d86114eb7c582f3e1e7ba1fd3fbbbc32ba574bd2ebd0578effea57e4955854d9b63802ade42f9e4a862857c661ff0bdacb52d069010000",
    ],
    [
      "ETag",
      "v7Bp3AlsCzjRT1zJvraKlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
