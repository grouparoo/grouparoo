const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1620919001862";

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
      "00000002ff1dd0417282300000c0bfe4ac0e862ad21b54078915284a452f991003c688c6440ac1e9dfebf409bb4f4028655ae3c74db02b780786407744472b39f371755c86fbee94fc307b9e951b8d862c96568192fd579ded77416eae9168c756dc569775a95b64927c5b70f96dd841c9763153f7c6a251161e1a53c2b2d34eae446de3992aa775ddc3b1e7f026d461e8c37401d19d1ccf2242257d6b11f505f396452f02e49caba1ddaf373427b7e37cf1184b7149b71fc492fdfae4ad4c469db8e66953cb2b3f4c8bc05dc2dd6735e12a906974eef40427770cbd2e0d48acc100b04e72c534e62fae3d71dd01f8b7e38791ec15e033a29802bf7fa1f206001a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-1-1620919001862",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb826409a1791a2354ae99a2d211b9056d33421632ecc2dc1293699aa2aff7dd7a6c95a55ea3e61fb9e73cfb90f9ec83daf323221292f1e1aa81f3fdc89949c1150b4c0d73c12ee470e55167eb1f7b2eed55f19f366d32922b86649badd95d091a2a919c8c926ea16b56876b416a283893a6ec71df61ccff51cc71d0f7b489350e64b5edd23f9b7523b39b1eda374b710a22881eeb8ec32b13dbddbfb9ebdabc51d3025edd78a368a48fb5dcd4fa5605471514d3711ea3712ea04b69497e8e01f314b2f5e67ee72baed1608de73069431d1544abbc2144c54392f9ada64259327625cbe3890c85ffaf3d862a26cb65552d12d9c59195534518f3bb0aec2f5ca5a0457eb70358b17eb2089e6d7fe6ad69daf979b551059b7d77ee85b8aa62518ae35b52ecc2dc00bea672015af8c7aac9fb5f2737f166f87a209282da10d26236748ddb1e3a5793a62f9f87c90e60ea4e9381d0de879ea30af0ffd2c058a3c236a58b412957b3ea4d900dc84e6039af4119ea4c058c23cc61875d2d4ed0dc8e18cfca9b9824b2e7742f2b643e4365cc47e12879b603e8b7d53424e9b525db6c674012f3d2a2c1041efd474d0512e5049b77b11c47e389bc78b1bbf9df0120aca1ea3079c714e4b0988a635364f41bd1219368c04b3957f896033b16fc7a024939f4f44f75cbb78d1f2133dc6016abbca7c4914878be0b3b17344dcd0b231907d7bd065e4bcd4a60fbf10882bda2621df377ef883b44f21e45043c5fe3f4c049bc0ff7eb4e3da2314171f55a4c23b6e0e935a83d5d06e1037c59ed8fde168440cb8566f629e3738f64ce7d019610b957a2ea85d7bacb3156be40984411c7e607a75f80b4f23df1d74040000",
    ],
    [
      "ETag",
      "fSo1+iendRJ/vsr2rKcc9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1620919001862"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb301086ff8bf73595120a0122f1a1ddcaa8145ad6063431a1c88d2fc1e0f832fbd2aaaafadfb10374d39814be2477e7e794bbd76f76ec596ac112b692d5ef16ccf64b05f4c3070bb0ad22eb5e0d6a0b2c6040bc72644432a6a139b9ff39247d35bc5f5dde3d6e3617178eb0c523d49c253b564a50c2b2e4d78e695e836b2b50b5b5cebb2c60b46d7c71992da6b3ef2eaf51f87c769ba6a3713a61fbe0d02838f1bce33fd1f6b00fd813ae165082015d809fa531f804054dfd9a96d78d8281c5d614605907770795c1b6e10671e02a836810c547e179741e86d1597ce43885052789daa1b74b371e2324ae16b8b15e92a1234c17bb85cbeeb9767529ba457c389d65f17137dfdf002f0a6c35e5bd60298da557f1dec13711fe2515ff24e86e4aaa3ea8022dc0f451b2c9b91006aced25d1e6bc690ed8783e4f3faaa2854129fac1b5ec0114ad0fc0653a1ffd4f5ae7af3f5a7d1b65930f8425e79a03924daf27cb6c747de3b98737238cb704f6c6a0339505efa7283c3e3b398dc3578b7d456f3bf79d844c0b012bb8fb53ae24b1a4e4cac2fe050d9c8aaf87030000",
    ],
    [
      "ETag",
      "1ti6t3r5ZX3tnH3ZbFVhww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT COUNT (*) AS __count FROM `profiles` WHERE `stamp` > ?",
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
      jobId: "grouparoo-job-2-1620919001862",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "7b",
      "4f",
      "db",
      "30",
      "10ff2a91f7cf1eb4759ad2b49510eb580691fa60490ada4bade35c32431a97d80131d4efbe8b43790809244bb1ee7e8fbbf3e58e5c8a222123128becaa82f2f6dd858cc91e01cd328c42f7e45fd1eb85dabf3cf932bf0832c98e3fdd1c1c2042d42cc5d69b1c5a4a562507355a84edac94d5869552b650a8d56dd9fd2e1dda434aed41bf8b3405793a11c52592ff6abd51a34e6767ddcea4cc72601ba1da5cae1fe29deb6e6753ca0be05a759e3b76d044755ef53ccc25675ac8e26011a27fa5a05cc29a891c2b782426f1e7e7ca6dc1d6ed0cc1d78203e35c5685aeab42092e8b5464556954c9e88e982a9f5c48e84dbca3c83a9a2f6691f5fee3076b1c5acba5d1b0be05f3a9b5c27e5291835a59e7275ee0592ba5d17e65fdae2875c03a449b049416853189589c436d703f06ffe5ec6b02d34c41935cbab4cfec011dc669ecf274e0ecc72985381ec4ee3e7362ca873de8253130e4e95addb058210b37755cbb0b0e77f7637bc89d840d9c1e4d381da6188cfb090cd2a43748c9768fdc9442c357a13652896618e43cf0236f19058bd9d138f24c1b29ab72fdb529ae6ee2699d1a9b44d02b7d6debac90e8544fd69f455e303e8afc33af79cc09648cdf8657f89c29cb15209a956c0d1acaa94c7068e4741efa913f9f8d27c8302f74ba432832fa75f748886e3766cada7c49e44fbd301a4f4f4d0d3bd019cb2b83ba6e2ec41ebab4456d3c11a52373da94d29f64bbfd83445cc946977c5f78c10fd2840248a18482bffdaa083689b77eacdd9a2314171d5d70a3b4c015e2aaf6e02534ab24d6a6e81dbb6fbb941870a95fe49c5e7737b35aa356843514fabea166cdb1cfc6ac520f204ce206ccfcd93166ff033512cb3d64040000",
    ],
    [
      "ETag",
      "e2Hzn44StIkHBOjRgoaG+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1620919001862"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e",
      "c2",
      "30",
      "10",
      "45",
      "ef32dd1229618120128b82108d142108b0aa1032ce2484269ed49eb4a488bb779c76638fbe9ffd9ffc808fcae410c3a52a3f3bb4fd4b89bcf34386aeabd9c9d6927108234056a590ebccf49be53639aca73fd7f69edf8fd9bed8cde742387dc54641fc80a2c23a7710bf3fc0a806e5daf9aca9332c14f7ad0f92cd61b55e65123494fb60734cd3d745ba82e7e939821b5d322cd0a2d1e85f6c2ddd5073e2659d6ada1a03479dd5e860808783d252d72a4b1448128c8368320e67d12c0ca3e9642c5c4d5a714546d0e31ea48589559dd1b7a84224801d46b12e86f5cbc7a1173afdb38b9ed16d2d49af435f390dfffa97e49d585cd9763802ade433de2a86b850b5c3e72fa5e2d6906a010000",
    ],
    [
      "ETag",
      "GRnyNCPITG8zhpxdxURSfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
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
      "ad0e20d8d01d4a41f9ffb16c3204c35701812ac1e9ddebf408efbd409a65641cd1d435a4059f80a69cb8c9367a0ff7a8c8a37c2df7b25f2e507de2e9612802e36a2cd319f970a9bb8fa2c5c4e6d9210defb68f9f0132621a46c7b3ec947ea273917bd27788c4bc969b6de91c25f58776e476674a99c3ec16aea3fcbaa45ee0b8156e9e9e9f1fe079fea238ae39dbb204e9fc70989b4a23a53a0470078742e067456b82fa621afc5ee43c3fe9e282ce8134d557ea368b3cb9d176769d53884fdfb24e42abd3938b853413cf65059356052b40e6be1ac888aa37772b88e20afcdbd1447bf20ed893742003f8fd03b327c1351a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-3-1620919001862",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553ef6fda3010fd5722ef6b8190f22320a115d1b44482b085d06a9ba6c8712e99db1043ec744215fffbce4e61ad2ab59f62fbdebb77f7eef24c1e799992314978beafa13a7c791009b920a0688eaff372bfb8bf09eb9ffee3dcf7375ef76e7fb89d4e2688e09a25e97657404b8aba6220c79b753baf44bda395102d4cd4ba6c75078e3dea8e6cbbeb0e1ca44928b2052f1f91fc47a99d1c773a27e9762e445e00dd71d966627b7eef3c399d5d251e8029d979abd84111d9f950f36b2118555c9493cd1af56b09550c5bca0bace03f314daede666e73ba6de7087ee20c2863a22e95ae0a533051663caf2b93958c9f89a9f2d581acbd85378b2c268a7a5bc625ddc2859552456375d8817513ae96961fdcacc2e534f25741bc9ecdbde5b43d5b2d36cb606dddcfbdd0b3144d0a305c6b625d995b8017d44f412a5e1af5483f6be5177ffcf743d1049496d004e3a13da05dd71e25593264997bd94f321b92c44d867d7a99d86cd4835e9a00459e11352c5a8a7244a99b8d6c274e8760c7bd810b311d39fd38b36dd7b1d30c4d1f90e305f95b7105d75cee84e48d43e43ef4232f8ec24d309b469e6921a375a1ae9bc27403af6b54d820823ee8e9a8a35ca092b6db0f222f9cce22ffce6b26bc809cb2c37a8f33ce682101d1b442f314544b91a26124982ebd6b049b897d3b052519ff7a26da735dc52bcbcff40807a8cb55e64bd651e807b7a69c13e28e16b5813c3507dd46c60b5df4f1370271459b24e4fbc60b7f90e629840c2a28d9e7c344b0097cf6a39dd61ea1b8f8a82215de717398d41aac826683b869f6cc1edabd3e31e04abd8b39cef0e499cea133c2164af5d250b3f6d8672356cb33088338fcc07875fc074d52f2d874040000",
    ],
    [
      "ETag",
      "HnqLWFRuZIkHIIUE1VqyGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1620919001862"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93516f9b3010c7bf8bf74a3468bbb441ea03d9b20d892659a04f55855cfb604e8d8fd9265514e5bbefa05d56ad93e80bdc9d7f27eefefe73608fca4816b30755ffeac0ee3fd4e07ff4c1065ca7bda3578bc6010b18785e13b9ce7d63a259fa98541f217fba54db66d124d7d74438f1131acee203ab1468e9587c77608637406d0275d79872c802e6f76d5fcc8b4dbafc467983b2cf97b75996ccb3053b06a746c93d2f07fe1d6df7c7806df1610315583002fa595a8b5b103eedd774bc69354c1c76568063033c1cd416bb965bc4095526e793687a16cea259184657d333e2340aee151a426f731a8f79f45c6ff0899664d13911768869e16a78eea8aee4b0481fa6cb627a31ccf71ae04260677c390a56ca3aff2cde1ff045847f49cddf09d24d293d06d56024d8314ab52597d28273a324ba92b7ed099baf56d95b558cb4a8e438b8532380f6bb13f0355b25ff9396fcf557ab2f49b17843384fae3921457ab3c88be466dd73f72f4698ef3db8b545329583de4f517871f5e9721a3e5bec33f6b6a3efc4de761030c1e94ff9ae3c8b2bae1d1c7f03c0994f3287030000",
    ],
    [
      "ETag",
      "PStmn19IkAf/eSw7ijmEmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT COUNT (*) AS __count FROM `profiles`",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1620919001862",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db",
      "6e9b4010fd156bfbd256b5c11873b114b5ae432b2407d736b4ca93b30bb374136009bb24b2a2fc7b07ecb88922256fb0732e7366e681dc882a2333c2447edb42b3ff702d19f94240d31c5fe5fe2e49a2efebf5b51d2fcafde5da6db2f9fdd9192244c752b4ac0b182ad93629a859b21de58d6c6bda483944a1a13d1c3b96e98f7dd31c7b8e853405055f8aea06c97fb5aed5cc309eac47b9947901b4166a94caf2f46edc5946ddc86b48b5325e3a1a68a28c373dbf1632a55ac8ea2cd9a27faba0d9414945811dfc2766ecdb4be591a0e52847f09d4881a6a96c2bdd758512a9acb8c8dba65725b307d277f9ec836c8365b088078b5512c5838f9f3f0de6dbc16ed76b0c7e6c5617832bccc34501ea0af532505a54bd5a4c59019dd2316ff87ac81d816aaae050dcb9a643c79ee933cedc947b9329e32630e631774a27cc4c7d1bec8c01459eeed47b16ad64c52c9371072cdb9d3a138b73caa94b5180d9eec49f663ee79ee339539f3c7e21f78dd0702e542d9538a4267f36611cece24d122de671d0c7e0b42df4f9a1b92ec4f33e358644d01bb91ebbaa90e8d48d308ce260335fc4e1efe0b0b525e434dd6f6f716f9c160a104d1b5a8286e642663834f26bb50de37015cd979d169e42bcafbbf775126c2e8f4f1be0d04095be3f6404f785f70efae9bc108a07862e4ae33f6e34559d47dac061b3a2ec7a39b13d6bec921edce85735dbb6b1763aab4e114aa8f431d0e1bcc8e3d1ac5527101671215118fdc4ea3f397b9a12dc030000",
    ],
    [
      "ETag",
      "oyvUUNBQQj4TCmyYQ7rdAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1620919001862"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1086ffcbf951966c8410b7840f8ea0922c442788d11052ca6d0eb7dd686f9241f8ef5ea75fdacbdba77d9ff402df45bd870876457e6cd1743739f28b1b52b46dc956b6866a8b300064950b79bbee3ea6a761710e8fc96819bfbdd3f921cc271321acfec24a417481acc0726f21fabc40ad2a946bdbada6b666a1b86b5c305f2c678fb354828af62e58ac92e43e4e6670dd5c0770a05d8a191aac35ba171b4307d43c77b256554d899ea5d668b4d0c3fd416ea86d9421f224f1465e301efa6110fa7e70371e0a5792565c502de8ea15a485895599d249542110c0f4a35867fdfae362df096dfed9b863b4cf86a4d7a2abf4ffeaa7e4945854d9b43800ade42f9e0a862853a5c5eb2f28a760b669010000",
    ],
    [
      "ETag",
      "+WyZCw2iz9qL4TBVXozF9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:16:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
