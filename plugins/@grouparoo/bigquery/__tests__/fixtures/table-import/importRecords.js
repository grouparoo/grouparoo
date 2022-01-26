const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1642558309587";

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
      "edd34b7282300000d0bb64ad0e2818d31d9f0ae553e4abb86180260e18014914b0d3bbd7e935eabbc3fb06795962c632de9e7103dec0942fd1a25c148272b80b8fc81b9247f8e55c844ef0730d868f1259493cbfe2ad0de5257c174ad9d82aeee5be21d4e8266dcd83244e99c37bed885374df9bddc8b86b487bdbebfbd6a48d17ac216137f1a32a68a52012db72b614e36312848591da0a4df59de41caccf429c4e8300495a4b1cc98c526fdcddd46254b5d386cc538347ab2822f5f16a925dd7d483a59f1b07efa5dabd4dd0170375caf3cc6a556a857a7b81cc197dd7e76674d08949dbc5cbcbbf0366008f5dd5639655cfed2b19a119f8ab9ff1a9c3cfff2ace7bdc839f5f7e45b06119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:51 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b91f7b540080402125a519ab64810d624b49aa629b28d93b90d31b39d56a8e2bfefec94ae55a5f6536cdf7bf7eede5d9ed103afb7688a082fff364c1ebedd0b82ce10d3b884d7bb43d08c1ec2411d52d73f9457cabf7f0a6f66334070c35278b7af5847894652a6a69bb45b4ad1ecb114a203893afd4e7f34f47c3f18b8133f18034db1aa58f2fa01c87fb4deab69af7792ee96429415c37baeba54ec5edf7b8f5e6f2fc53da35af5de2bf64044f53ed5fc5e098a3517f56c93827ea398ccd90ef30a2af84fdc92f3f799bb1cefba25801f39659852d1d4da540529a8a80b5e36d26645d36764ab7c734069b48cc2cca1a26a76755ee31d3b73b658e35c1ff6ccb94cd62b67115fae93d53c5bace33c0dafa3d5bc1bae979b559c3a77d75112391a938a59ae3373ceed2d860be86f99d2bcb6ea997936ca2ffe2c3e0ec510405ab136988fdd11ee07ee8414644c8b60e093c265840464ece30171e964c8865bc230f0aca865e15ad413cff548e015b9e74ebc7ce8fb833cf0f0241f9080b9848cbcf170808e67e84972cd2eb8da0bc55b87d05db2c8a23c4b367138cf22db42819b4a5fb4859906ded6a8a1c1dc75fb00fca4afa38972016ac6f2459c45c93ccc16b7513be5252b313da47f61ce05ae1403349660a0667225b6601a8ae7abe802c0766a3f4e4185a6bf9e91f1dd54f2c6f6577a064334256bfb4569962ce22b5bce09718babc6421edb03928c0ab9859a8fbf01075bdae640379b28f989daa784154cb29a7e3d4f00dbc057ffda69f3010abb0f2a4ac31d96872aa341256b9788db5e4fec7e7f1c18eb012cf587d864e49d2c33394c46b663b57e69a8dd7ce8b3156bd42b088230ffd85a75fc0769eac0567704",
      "0000",
    ],
    [
      "ETag",
      "Wy8u6kC3nCc05ygGs5jwCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93db6edb300c86df45bb758064cd69067ae174d996c2392c7181a145612812ed2993254d92530441de7d94dba5455bc0bdb149ea234cfefa7d247f84e224265b51feadc11e3e95e07f86600dae96dee1cb68e58044043c2d91bcdeccddf6d76e727dbb1cade4b774793b37dbe4f21209c77e4345497c248500c91d89ef8e44d10ab08d6959572a6fb288f88309c54db69e2dbe635e691ef2c54d9a2693744a4ed1b991534ff386ff40dbfd29223bbd5d4301161483308bb17a07cccfc29a8e564642c7e9da3270a4819b83d2eada50ab75072b9d5ea737ec7f1e0cc617dd2f83f10839a919f5422b446f36381ef1da53b9d60fb824e95d20619b18172e9ae71eeb82378b8470b6c886fd66be9700654cd7cae7ad6021acf38fe2fd079f44784d4afa41106f4ac836a804c5c1b651c2e494730bceb592dae5d4983336592ed3b7aa286eb5e0ede05eb400d2efcf003a35794f5af4d7b3565f936cfa86701e5d7346b2d97cbac992f92a70f74f46981c3cb895d5682a07c14fbd6e7f3c180dbb8f16bbd2c176f89dd8db1a22c228fe293f84277141a583d33fa97b786087030000",
    ],
    [
      "ETag",
      "JSMsbXjBJZO7PlFLOZMpbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-2-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6e",
      "9b",
      "40",
      "10fd15445fdaca36e01b60296a5d0737a8beb4805ba52f785906b231b0ceee92288af2ef1db09d268a94bca0d5cc9c3967660e0ffa8e55a93ed11396dfd420ee3f5cf344efe8a0488e51fe776964bb55f16370915bbb3b35bf9df3717e768615ac414952ee0be84a5e0b0a72b2097bb9e0f59e08cebbd8a8dbef5ae3617f347206a63b726c844928b205ab7608be526a2f278671a2eee59ce705903d933dcacba7b871db37f6825f0355d278c968208934dee4fc52704a14e3d5d92644fe5a8288a124ac4005ff8169f2f565e71e23652fc7e25b468150caeb4a35aab005e555c6f25ab45df5c983deaa7cf6d0436fe1cd22ed73470ba7732f9e4dc3e8e3562a24d86a446a6114f8abef9f9ae7368eafeecaad360fd64b6d2b807291caadb60ecebd40fb76a99d50d370d6d1b62c6d5fdac25ffa916699a6b69ecf432fd24c94958254ac6a45452429a011745c9bfffa560d802822e1908c6d734c2cc774932cb169e60c464966429238893d2283c4a4ee108669020471aae9dea248c5abc4a243d3b4077db0ed61e63a4e9fb8749cb8e96860439a996606167e89fed8d1ef045370cee49e4b76589efe27f0232f8e82cd6a368dbc768c8cd4853a3f886b8678ae53e190b1695a58f8c66c8f4d9671646baee1af222f98ce22ffb77730c0027242efc31bb440460a09584d0429418158f21417a7ff5c877ee4af57d345d30b5d15ddef9bf8af8d175c1e43016420a0a2ef2f1a8bdbc47bffc6c9a9588a5e45163cbe6278552a1b0e2ae0705d56365a4e68ab6f8fda3f4b11a15ee51cdbc5dc93439b8e5042a58e031d9caa3f1ec96af95484493cca0a8d8ad97f14e5df3b27040000",
    ],
    [
      "ETag",
      "oZM/fkNlK3Hg1kwtFvFo6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "97",
      "6d",
      "4f",
      "e3",
      "38",
      "10",
      "c7",
      "bfca29f7f26864c7ce832bad74050acb5e79b85274d29e569549dc36e0c63dc7ed1e427cf79b04c8c3d6e4d27d519a19cf88f9fdc7f6a4cfce639a25ced0b94f97ff6c857efa7529cc9fc5c354e45b6972f8daa82c17ce91230c5f42e4c88bef567f2567d9d7dbd3d9cd6e7aba32a3afcb4f9f20228f5762cd9de1b3b348854c7267f8f7b393f1b580b4348100f3b4299e2fae66e3f3f1141c6b95148eabbbc964743c193b2f4755028f63b5cdccfce0c445aa73332f8d2af17636bdb83aefce93fca7d280389587a52c4596087d584eba99f324d122cf0fcc53f99c6f3675d2f1f5f5643cbafa1ff1b344ab34f989cc5d7a688634bb3ae36c723d9a75c727dc345a743a9a8dbbe373c3d78d9a661797e3dbd9e8f2a63b6b3e5f7d5ff791fadbcb91f3a0eea76221b4c862516cff8d560f223617c5c9cae1bf4b31c8d556c7a2681e04970b4badb61bae951a8067e00d70403ddf8f08627e14429c543137a9ca20f4ee164a738c325c4ed57738570e4610a1cb6738638bf2efaef0970ceda7b14e45657c117aa7d2bcb2c5c3ab03fd2efe2d2b7563b5ae562fb9ac53b1ef7a347449e4865ee5347a5b472cb8cc857dc9f3998beb340f796880bc016a14ecfa11f27d86191d334be02fd81b6232c4f437844ad99bdc9e85fb84c7a96ca08f8b8df36ec4022c6c853e83232d9b951317d3c0a5d8f51ae576b0b697187549b0cfe3b5c1030ae8d4b7917b15b9eb2364a32716fa732d8c900d536d63153f568ee5f2cde3f512016337820e62e462420fee7e10442ed927236d0d428219681084361548438520b4a9402d2a8cd6dcf07a472823f285d249e5e1f1bb8bf4910133e2323805083e811df563838280681f8cb6458870444a11229b",
      "0ab4a54264df0e7e9d573d4d525debf045adb2dcc0d5f2ee900f6f1eda4785e2400445b12e637dbadf5e8abc227d1fcd6febc0100d5f75603621fcb610cc2a446011e254646965dcc65ca6b52e495eda7eafad00f7202618ae06b80f0f3f115e083b29dae70a7e5081e10feec3a0f33e0c2de49f855cd6ac7f48d11803abc7c20cfa8047c518885ca0f7233b5bc71140a1db68740513b6a8310a43df4e1d76524716ea73a14d63089c6cef5363ea5b302eedb057c761e3c28486ae17c7ff832677b43c8209422df0511b1e0784d9e1a34e7866819f6cb514a23ee7c7f0ca20643d15e4fdab23ea35038add0e631c24a0c48ed8a54500f235464745c5daf89e8f881d9f75e2e3fa6aad8b3b55daac9e2af3a275e9256961b23ee8b4d8f3d80d28dc5ca44fafdb4b1e43aebf3fff1a2597e88404a1151da31fd1bfbdbd0e1e3fc1f8bad10a5e2d73919432406fca97cc135550c12bcfb0a8ecc88939fc3cfb9c1a675816f7f21f4f27a7e6fc0d0000",
    ],
    [
      "ETag",
      "A2cUhWdFnZSDTPvRDhtAZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8e",
      "82",
      "30",
      "00",
      "00d0bbb0b606d18a9d1d55e427862a44c28660ed6805052916ab99bb8f996b8cef0eefa515943221f2ae2ed955fbd25461a0211dee752b95fa338ec674fd8d0ee98de595509dac89f2e1b3d5a7ea8aab89694f451fa407b898543732f717a3d11d12d7f2131b1f5d5dae2db5315d3314873a29fdd534e062e6c5205a5636d8456710268d3c717c0695f9b0259f37d4c17d64287d8b516fb82753ee78d0790b0443bc027b7e4acaad071be762dc8374e9e87d246f1b3a2fc61bccb28c208fc8eec2ec9dc8dc6ce2d11ace84f5bcee415c3a24cd62519dd991d40c38301c7e7cfc3bda40638f86b74ce4fcbd7d0c111a687ff5f34e35ecfd1fb3a265adf6f30b5cb4479319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda24e4414222456b96d20e29212b9056eb3421632ecc2dc1049b765595ffbe8b69ba5695da4fd8bee7dc73ee832772c78b84cc48ccb37d0dd5e3975b119313028a66f87ae1aea0beb9b9ba36f7a3328b1fe2e2dbfeefe57c8e08deb024dd953974a4a82b0672b60dba5925ea92564274305167d8e98f4703cbb287e6d4b227489390a72b5edc21f98f52a59cf57a47e96e264496032db9ec32b17b79efdd0f7a65256e8129d97babd84311d9fb50f36b2e18555c14f36d80fab5842a821de5393af84f4ce2d3b799bb9ceeba1982ef3903ca98a80bd5b8c2144c1429cfea4a6725b327a25dbe3a90c05939cbd06022af774554d01d9c18095534528f2518e7fe666db8def9c65f2f4277e345c1f2bbb35e74979bd576ed05c6f577c7770c45e31c34d7981ba7fae6e105f513908a175a3d6c9e1be5e7feb8ef87d210505a421b8c26e698f66d731aa7f184a5f6d08a5313e2d88e27161dc6269b8e6094c44091a745358b16a2b0630b68c29268d21f4fa3d1c0b6a26962a5d13819db934132eaf721258713f2507105675c9642f2b643e4da7743270afdadb75c848e2e21a575aece5a634d01af3d2a2c3032cd3e023fa8ebd044b940b5a6e5ae173afe6219ba574e3be51564943d067b9c734a730988a615365041b51609368d788bb57386603db51fc7a024b35f4fa4e97be3e455db5fe8210eb1b1acf49704a1ef7a17dace117145f35a43eedb03a980892a41cf87df88c32d6d7390cbade3ff24ed930f295450b0cfe789601df8ec5f3b6e3e4271f751452abce3f230d968b00ada25e2bad623bb3f9cd843a2c1957a179b0e86c79635399a8cb083423d17d46e3ed6d98ad5f20584419cbfa75b75f8079e829cf677040000",
    ],
    [
      "ETag",
      "GILeuZZVW0q4pgbwbnBqxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "6e",
      "db",
      "30",
      "0c",
      "85df45bb9c03c4cbef0cf4c2d9b235801ba7897b5514862ad1ae3259d224394310e4dd47b95d56ac03dc1b9ba43ec2e4d1f189fc108a93843c8afa670bf6f8a1067f1b822db8567a872fa395031211f0b446726d9efc22a79b6bd8c5a37dbacf61167facafae9070ec091a4a9213a90448ee48727f228a36806d4ccbb651659745c41f4d28ee8aed6afd1df346f390afefb22c5d644b728e2e8d9c7a5a76fc3bda1ece11d9ebc72d5460413108b318abf7c0fc2aace96863240c9c6e2d03473ab83ba8ad6e0db55a0fb032180de2e9f8d364321f0d3f4fe633e4a466d40bad10bddbe178c46b4fe556ffc225493c42c276312e5c75cf03d605ef1609e16a5d4cc7dd7caf01ca986e952f7bc14a58e79fc5fb03be88f02f29e93b41bc2921fba01a1407db47095352ce2d38d74b6a5752632ed822cfb3b7aa286eb5e0fde041f400d21f2ec0b72c4fff272dfaebaf565fd362f986701e5d73418ad5cd7257a4379bc03dbc186171f4e03656a3a91c043fc5c3f17c329b0e9f2df64507dbe177126f5b8808a3f8a75c0b4f928a4a07e7dfd18375a687030000",
    ],
    [
      "ETag",
      "NphtBOaPHeS13jAjOe71+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-4-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553db4ee33010fd95c8fbb2bba2add3a64d5209b1dd1276237adb2480d88b5ac79906431a97d80121c4bfef24a15c84044fb63ce7cc39339eb92757224fc890c422bd2ea1b8fb742963b24740b3145fe7295b744fa73f3c7770390b8ecff264e21cdfeeef2342542cc536db0c5a4a960507353c09db6921cb2d2ba46c61a296d5320756b7df777ad4ed3b36d21464eb89c8af907ca1f5560d3b9d9d743b9532cd806d856a73b9797aefdc743bdb425e02d7aaf35ab18322aaf3aee6412639d342e6fb2721ea970a8a256c98c8d0c1333189bfbdcedc166cd34e117c233830ce6599ebca15a6e0325f8bb42ceaac64784f6a972f2e24f426de3832beee19e1e8c85b8e4761f479a5340aac0ca68c300afcd98f2fd575b55c5edc6e56c651309f1aab02b82c12b532ce7e7a8167ec287f4b4a7bb06f1c18f3e0d00b8cefe74fa15138de335622a96fc6c49ffa9161526acc8f8e422f3228da4d406991d76623166750197d6ca7fff60f2b02d34c41135cda74c04c87baf13ab6f9dae9f5e33585387662bbcf7a31e5ae05561203439eaeb2d72c96638b6ccb1cc434716d6a273cb112cbeeba8ecb1d18d0c100c072fa2eb86e8f3cec91db426838146a2b95689a4ace023ff2965170321b8f22af2e63cdca4c1f36e6aa225efad458e492521381efd4f650458544b5ea97fc59e405a371e49f7acd604c2065fc2ebcc6d158b34c01a259c136a0a198ca041b4716f3d08ffcf96c344146fddb8b1d4291e19ffb674274b7ad3badeb9344fed40ba3d174517bd8814e5956d6a89be642bab44b5bb4dba276647687666f685a6d4ae96ff2f0f00f8938de4d5ef2ebc40bce49f314c01a0ac8f9c73f8be03af0d192ee5606a1b834a882d3a6058e115795062fa01927b1a9bcecd8a665d36ae0105ce83731c7a2bb9e5539aa8cb0815c3f16d4ac0cd6d98895ea0984419c82196e0c46ff039cf3d349b0040000",
    ],
    [
      "ETag",
      "OgaP2VMGE96jNRKWndL8Kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "956f6fda3010c6bfcae4bd1c4476fe40825469a1a52d2a858ed2bd992a649223b83531b39db6a8ea779f934d09ac59067d037ecef788fbddd9e6153db234463db460c9cf0ce4f67302fa5bbe9882cab856e66b235205a88540d3c464ae267628bf93d1156597fdc55a642fc3b0939c9c980c15ad604d51ef152d19f058a1de8f5794d235181b8b4d82de6ef2f5703c1b5c0ca626b016711e18df8d46617f34406fadd240a34864a99e1f6d5c32a9f4bc10a5f176361d8e2f9a7d9c7ec86688193fce92401a833ccec336731ac712943ad227d49c6e3695a93f998c06e1f83fcd4f632958fc01e7133bd6c1f553e5381f4dc259737e4cf5ce88cec2d9a0395f69badea96936bc1edccec2eb9b66d77cbe7a5e1fd2eafbb7167a108b292c41421a417efc37523c40a487f9cd52e6d739b495c86404f9f04c72b19148916da814a26d226db74d3aaeed79be8303cfef9a3c2e22aa99484deaddad290d69a1299f8a6773af906b1264b134576c597c3e9970b740c85776b9ba049ed0525d7160aa54abc75c76bec24b51a5158975b9776e4e368752fa9e65bbbee55bc4f3cba096191c205cdcb5b057d5866ddcc6761b57e512cbf309ee76bdc01d0435899f88dd234e8fb85f302e7abe4bedd7505f80d4acaae0345b30ad4b994485ee1e024e6cc73283b188834d07caf0927205ff507bf0be4b2cb706dedf87271d27a887f71be1831af8512639405aeabe392ac079a9f9e277c03f84df76889979609916b84e3d62532f3aa67d8efb9e2ad8c7b73decd4e3078df804978eaab83321f56a5bcaa1d2a26a46cc72191c82eee6679e581dd732d33964d6fb5b76802dcf7947b4537281ee389d6e2d3ac17fa3dfff7905fa5b0dea460af3a228888b3698d9146fcba9c8a9cc13d9cb2b6ba1889a7fe54ba651af28eeed174519b744f3070000",
    ],
    [
      "ETag",
      "hO2ArV1LKaiHBbmouxIA6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d1",
      "5682300000d07fd9b37a2696496f10a11bd32189402f3b8083a1362618313afd7b9e7e23ef3fdc6f90e6396f5b76ad4f5c8267a053c39ce4930c5a7107871d35f4f08128c7b30b3953e91d173d299296f99f4156c97430d7511176162ff5262de5c1ef17023ee5dd76c089a171b2527b22b846d09a97e30d7928d9d949dc21d159635169cfe0eef2ded6cb63b42cda6d8603143a4ee3f68b39cc96ddd50be3f3571161329ffa42bdba476ad34365aff909250cbde46d6c513f9e62a31689ede1d55e5de4d45361d5c48ae8372190bb620e1463c7e38ea43585a4832838455e6e4deeeefe1d3002bc5755c35b56ddb6cf1e4d7304feeab3ab56fcf6dfe669c31bf0f30b14c4102319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db",
      "30",
      "10",
      "fd2b91f795b629a44da8548daa8451d1a65b9282d834458e730986342eb6538450fffb2e0eed4048f029b6efbd7b77ef2e2fe4815719199194178f35c8e76ff722254704342df0b5761d79350db2adb8fa7dadb29bdb3bb6ac9ec66344f086a5e87a534247895a3250a355d42da4a837540ad1c1449d41a73f748e0703efc43e1d782ed21494f99c570f48bed37aa346bdde5eba5b08519440375c7599581fde7bdbe3de468a7b605af5de2bf65044f53ed5fc5e0a463517d57815a17ead4026b0a6bcc40afe13b3f4ec7de62ea7eb6e81e02d6740191375a59baa30051355ce8b5a9aac64f4424c956f0e24f2e7fe34b69828eb759554740d475646354df4f306ac8b70b9b066c1c5325c4ce2d93248a2e9a5bf9874a7cbf96a1144d6cda51ffa96a66909866b8dad33730bf082fa1928cd2ba31e37cf8df2ab3fb38f43690828ada00d26ae3da47dcf3e4df3d465b9773248731bd2d44bdd013d496d76ea8093a5409167440d8b56d87306796667fd64d8cfdcc4495d9aa0bfc3247798e77aae93e5ac4f7647e449720de75c6d84e2ad43e4269cc57e1287ab603a897dd3424eeb529fb785350dbcad516383896df711f8495fbb26ca05aa3596cf82d80f27d37876edb7539e4341d973f48873ce69a900d154a2811ae44264681a09260bff1cc1666a3ff74145467f5e48e37b53c91bdb0ff41887d894accd974471380b7e9872f6886b5ad606b26d0f44021332c39a777f11875bdae620bf567e784bdaa710729050b1afe7896013f8ea5fdb6f3e4271f7514569bce3f230d5683009ed1271d3eb9edd1f388e470c58ea0fb136f361e39b8cb0864abf36d46e3ef6d98ad5ea00c220ce3f3056edfe0182c38d1a77040000",
    ],
    [
      "ETag",
      "u74rKCNdvoKZVsdWYhcOnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93516f9b3010c7bf8bfb4ad4a4090943ea03e9d22e124d5a429fa60ab9f8604e0dc76c93298af2dd7ba65d36b595e80bdc9d7f27eefefe7360cfb2162c644fb2fcdd82de9f9560ef5d9080699535f46ab036c03c069697445e5d6cf17ae4df0716c7493a3b6f5793a08d2e2f8930f92fa8380b0fac90a08461e1cf03ab7905d496a36aab3aeb328fd97de38a9b3459ae6e28af50b87cf510c7d13c5eb0a3776a14dcf2ace3bfd0f678f4d8169f122840439d839ba5d1b885dc2edd9a86578d8281c156e76058077707a5c6b6e11a714095813f184d2717be1f8c87dffc60469cc29c5b8935a10f1b1a8f59b45c25f8879664a33111ba8b69e1a27beea82e45b7880b97ab743ae9e6fb1fe0798e6d6db35eb090dad857f1fe826f22bc2715ff22483725551f54422d40f751b2c9b8101a8ce925d164bc694ed87cbd8e3faa520b8d52f4833bd90328bb3b01d7f13afa4c5af2d73fadbe47e9e203612cb9e684a4cbdbc5268d6eef1cf7f86684f9de82b9d348a632e0fc341a4e027f361dbe5aec0a9dede83ba1d52d782ce7f4a7fc9096850557068e2f37bcfd8187030000",
    ],
    [
      "ETag",
      "C2joF15Q8to3RT7/uN48uA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-6-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d6f9b3010fe2bc8fbb24d4d62209017a9dab2946c6879e9806cda9b12630eea96e0149b6655d5ffbe03967655a5ed932ddff3dcf3dcf9ee8e5c89222163128becba82f2f6c5a58cc90901cd327cfdb83ab87bf7f6d7fa5a98076f369a1e2e7a55767a8a0851b314dbed73e82859951cd4781d76b352567b564ad9c1441db763ba7dcb7186361d39c301d214e4e95c145748bed07aafc6bdde51ba9b4999e5c0f64275b9dc3dbcf76eacdebe9497c0b5ea3d55eca188eafd53f34d2e39d34216a7eb10f52b05e506764ce4e8e09198c46f9f66ee0ab6eb6608be111c18e7b22a74ed0a537059a422abca262b19df91c6e55f17127a736f1a19af4f8c7032f336d34918bddc2a8d025b8329238c027ff9fe557ddd6e361787ddd69805ab85b12d81cb32515be3cb072ff08c23e54745a90da7c61b63159c7981f1eeeb4368124e4f8cad489a9b31f7177e6498941aabd92cf42283a2dd04941645633662710eb5d13fedf49fff614d609a2968839b01759939a4a3388d073c1dda4e9c5288e3613c70981d533eea433f8981214fd7d91b162b6461d97c0836e7264d5d9b25098cc07498ebf419e2076ce89a60253175c8fd09399442c399507ba944db54f225f0236f1305ebe57412794d1929ab727dd69aab8bf8dba7c62237949a08fc476df775544854ab7fc95f465e309946fe67af1d8c39648cdf86d7381a29cb15209a956c071aca854cb071e47c15fa91bf5a4ee6c8687efbfc885064fcfdee9110ddee9b4eebe62491bff0c268b2386f3c1c419f595e35a89bf6422c6ad10eb53aa61999d6d8b4c766bf4b29fd46eeef7f2211c7bbcd4b3eadbde02b699f0248a18482ffff6711dc04feb7a4c79541282e0daae0b4698163c455adc14b68c749ec6a2f47b6e9da8e451a70a99fc51c7374ec599da3ce083b28f49f82da95c13a5bb14a3d80308853b0c48dc1e86f54dea989b0040000",
    ],
    [
      "ETag",
      "KOw6p6yxUqi1wEF9Cwh/ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "4f",
      "c3",
      "30",
      "0c",
      "86",
      "ff4bb86ed2d8071f9576e85819436583aebb8050151ab74b49eb92a48c69da7fc705049c06dd298ef33eb6e3c45bf62c0bc11cf624d3970af4e628057b571b01984a59434b898501d66260794acafb17b7fbd6bdee24d952664930ce4e07e3de7a38248589579073e66c59224109c39c872d2b780e84494102bb296b7b3a0bbd8917902347513b664bdf7747bec776ad6f80c73156858d1a8389d4c6461f9b6f701106d3d9643fa7f84118dd58aa66480a8500dd8c9165c485d0604c430e4dc4cbf2071acde7bee7cefe687e21344a7100f92a9b12cabefe1097fedc0df7eb05b7bf9e68ec86de7ebdb13cff555338bdf116a17b73bb9f8aa2d53aff4fab1f772d96e1530009682862a8bf7fa93183d84eebc932945d41db60a563a81f8fc41f07a9c6aae41ab14d9ef649fbf8a4df1d0cce7a9df3c1d929e914c6dc4a2c48ba5c5069cca2e52ac035cd15ebb0affd6863c1dc6aa4d806eab0c79d7eef33cb05d699a9598ed515b458cc693eafa4654ec29581dd3b3e8ac04bfd030000",
    ],
    [
      "ETag",
      "ZqA2x2J0fjUijfRDj75D3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4b7282300000d0bb646d1c0475a43b291fc1bf0149dd3098094840941012a5d3bbd7e935eabbc3fb062921b46d13712b690d3ec033d5cd21199eb539965a1fee142f2a010b261a477da53bd1c37a7408dad063d135c3350e5ca2fbe3a4a92ac5aaa832ec292c158b723f3fe34076e328916e7cec820af3d875203fa1f06a255b24ba652d3793b55ab9b80f3339e6ce3acb31b994da120ba874e91db7b360a4dadbfee0e4c49b74e8a21dd16323d34f6d1667c6d336f2d047262c2ded445634e8f705f3e6cab44999f573a3614d3135f5950691bd88c4292ed5c2f4f71983bc476af8f6f6ef8001a08f7bc1699b14afedc6c43407e0af7e229e77fafa6fd194530e7e7e01f1cdcf8519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da3010fd5722ef630b84400820a115d1b44582b086d06a9aa6c8712e99db1067b6d3a9abf8df77714ad7aa52fb89f8eebd7bef7ef044ee799992294978febb06f9f8e54e24e49480a63946af16a3ddc9a5bed90db293c55f67accb35adae673344f086a5e8be2aa0a3442d19a8e96edbcda5a82b2a85e860a18ed7e98f868eeb8e07f6c41d7b485350642b5ede23f997d6959af67a47e96e2e445e00adb8ea32b17f89f71e9c5e25c51d30ad7a6f157b28a27a1f6a7e2d04a39a8b72b6dba27ead40c6b0a7bc4007ff896972f6b67297d37d3747f0036740191375a91b5758828932e3792d4d55327d22c6e5ab0fb2f557fe22b29828ea7d1997740fa7564a358df56305d645b8595bcbe06213aee7d17213c4dbc595bf9e77179bd56e1d6caddb2b3ff42d4d93020cd79a5967e615e003f553509a97463d6ac28df2f37c96ef97d210505a419b8c3d7b44fb637b926489c7b2f1c04d321b92649c782e1d24369b0c619826409167440d8b96a264b44f53277162a0ee301eba9e1d4f5892c4b637c038c5a26c440ea7e48fe41aceb9aa84e2ed84c86db88cfc380a77c1621ef9a6858cd6853e6f8d350dbcf6a8b1c1d8b6fb08fca0af4393e502d59a912f83c80fe78b6879e3b75b5e414ed9e3f637ee39a3850244538903d420d722c5a19160bef6cf116cb6f6ed985464fae38934736f9cbc1afb0b3dc2253696b5f925db285c0697c6ce1171438bda401eda0f22810999a2e7c34fc4e195b635c8f5ce0fbf9336144206124af6f93e116c129ffdd78e978f50bc7d54511adf783c4c351a4c427b44dcf47a64f73db7ef100396fa5d6ee438c79135359a8ab087523f37d45e3ef6d98ad5ea058449dc7f604675f807e11a2f7177040000",
    ],
    [
      "ETag",
      "HC6U+GtVU3f+Cz28tnMapQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93dd4ee3301085dfc5dca6da96fe6e242ed26dcb560a6d4903370845c69e048363676da7ab52f5dd771cd8829695c24d3233fe4699393e399067a13809c983287ed560f66705b86b1f24606be92cbe2aad2c908080a30592cf9bf379faedb15ed097597f723b8b1666945c5f5c2061d92394948407920b90dc92f0ee40142d01db989675a9b2260b88db57beb84d93e5ea12f352739faf6ee2389ac673720c4e8d9c3a9a35fc17daee8f0179d20f09e4604031f0b354463f01734bbfa6a56525a163756d1858d2c0cd4161745d51a375072b9d71a7371a9c0f87937ef7fb7032464e6a469dd00ad19b2d8e479c765426fa372e497a7d244c13e3c279f3dc615df066111f2e57e968d0ccf711a08ce95ab9ac15cc85b1ee55bcbfe09b08ff92927e11c49b12b20d2a4071306d94a832cab9016b5b496d335a55276cba5ec79f5551dc68c1dbc19d6801a4db9d8045bc8efe272dfaeb5dab5994ce3f11d6a16b4e48babc9a6fd3e86ae3b9fb37234cf70eecc668349505efa75e7730198e47dd578bfdd0de76f89dd0991a02c228fe293f8523614ea585e31f335f810f87030000",
    ],
    [
      "ETag",
      "kP2ET/huFazD38VDAFr6RQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-8-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2b887dd9d6243c420289546d594236a63c3a209bba2fc41843dd024e6d93aaaafadf774d92ae55a5f69b75ef39f79cfbf0837e43eb4c1feb292d6e1bc2ef3f5cb354efe844a202a20b6f69ff1c78ec873f73f617a3b3bfb38bfaac383f0704552c81aa5d49ba82351c1331de44bd82b3668738635d28d4f5bad6d0b10703af6f8e069e0b3441ca7c41eb1b205f49b91363c33849f70ac68a92a01d153dccaaa7b8b1b78d1d67d7044b61bc54344044186f6a7e29194692b2fa7c13817e23084f488568090efe13b3f4ebcbca3d8aaa5e01e03dc50461cc9a5a2a575002b33aa745c3dbaafaf8416f5d3e7be891bff0a7b1f6b9a34593b99f4c2751fc712b24086c3524b4280e83d5f74feab94d92abbb6aabcdc3f552db728219cfc4565b87333fd4be5d6a27d6249a76b42dcdda97b6089641ac39da7a3e8ffc5833c1544684a4756b29466949949de3d082d79b52042491208764e29a436479e628cd5317e75e7f90e62649532f7507a89f9a78e410274b09029e54d55b16aa596d21c719e2a1d577493f47d9d0c6eea06f620bd9a30cbbae65f6dddcb531d61f3bfa1da792cca8d831410fa3d3ff8441ec2771b8594d27b1dfb691a3a694b38339d5c4739f129a4c4cd302e01bbd3daa2c65a0a67611ac623f9c4ce3e0b77f58ff821408df47b77000392a050134e2a82292f025cb6070fac53a0ae260bd9a2c542db8a9f87ea7e2bf367e78790c8524279cd4f8fd4103b84dbcf7334e770a50b8545081d54b0a5bc54269604e0edba595f272625b9eedd97a0be6f255ceb1d5ac9eee53552415a9e5b1a1c39dea8f47b1463c8120094b59c19942f61f902297cf25040000",
    ],
    [
      "ETag",
      "L8M2J58oHED4vP9+ZDPn+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "14",
      "fd2b93f7b8d6b363274d2a21adb0d015b5859522ed43a832891b0c495c6cb7c010ff7d4e80341559477948e37b7d8e7acfb9bece03b816790cbae04224374baeee3f26dc7c2f1613ae97a9d1f6b590b9e6a005b86189454e4662cce8c91d191ca19f9ffb67ee9f1fecd7edde9e45e8e892670c741fc05cf034d6a0fbfb01e42ce39626620b30f78b623d184fc37e38b1894cc645627c361cf6f68721786c5504164572999bd9cec4b950dacccaa0229e4e2783717f3b2f65efa259c522dd8d92f03ce66a378e58cc581c2baef58e3ca9676cb15893f68f8f87616ffc1ff3f3584911bf83b912bb3252b35a330e87c7bde9767ccc4cad455f7bd3703b5e1b96d56a9a0e46e1e9b4373ad9ce9acd2e6fb3b7587dfed80257f262c2e75cf13ce2c5f15f2879c5233328264bdb7f4f795bcba58a78d13c0b2e371225970ba6a46cdb4cdb6f638f3aaeeb1314b87ec7e252193123646ea167a7b63460a461e944dedab902d40254b9b423362f7f57368d4b099bab50095e05475cada4d055ccaf9e12e80bbf2b0b8591ccaadd114bd754ec42877620f161c7a992462dd788394b356fde72dc00e235cd410e6a23a78d6a0543d747ae1be080864103f00376ba987431fd8450e97a5db7d3a0fb804522ad490f8b73f31244dc46b851f4a19de8b45e3981987a9062e8d4cadda275732ba09078aff5389bc23d6aa553b749b95329872e424dea4983fabee286a7b5502e23195d57892479ce386f320163e8db0e620431a13b77dff37c485e2b239b1e74080eac075ea7c9055273c1eb34b9401b5ce865ccb0f5899086ebb954719561d14b8abcc5061c1018d82940f6f19aa5fe3ba0d640f45a18dd34c1c73e294df09b5ca01b2ef8d571387fbe1df6efad9c1325ed4da37971c96044c9d39d73200b",
      "757604ba45552d1031fbb5fe260ce8968d7bfc0b25e1fddf0b080000",
    ],
    [
      "ETag",
      "RMiNa4Px3IJ0Y/GU5zXaZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ffedd34b7282300000d0bb642d4e50199aee04f949f14322029b0c606000453e418d9ddebd4eaf51df1dde3748b28c0d03e5d79a35e013886486a6d93485cbf0069fc4db6b4e234bee3e99c5437d093fec35ad3ca35115597558605a459f7a5c6e72add2fd9884554867475dd5b7d8dea1794456aa1c49180726c2d6c3e8da009d29d54bb1b8dbcf1b1911f4f44d3eba5fbb62dbec5879bd437f19e7dcc5e7b1d3d340b1dc031eacf8b93f29e7954b9cf6a0e47871b0d79b50e466ed8f828bb2cbea521ee7725c905e5cb2468af2854bfd3a24157378b7846b08e353c132e308dbbae0d2bd1ba66f6fff0e9800f668cb9e0db47c6d9f2b084dc05f7dca45cb5eff3596f4ac073fbf7369aafa19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc8fbda2450c8538ad628a16ba6846c40da4dd3848cb930b704a7b669d555f9efbb98a66b55a9fd84ed7bce3de73e782437bccac884a4bcb8ad413e7cba16293921a06981af6abbb875e40f372ab3ebbf29ff0a5775b8994da788e00d4bd1ddbe848e12b564a026dba85b4851efa914a283893ae38e33f04efbfd916b8ffba321d21494f98a573748fea3f55e4d7abda374b710a22881eeb9ea32b17b7eefdd9df6f6525c03d3aaf75ab18722aaf7aee6e75230aab9a8a6db08f56b0532811de5253af84fccd2b3d799bb9ceeba0582ef3803ca98a82bddb8c2144c54392f6a69b292c923312e5f1c48e4affc796c3151d6bb2aa9e80e4eac8c6a9ae8873d58e7e1666d2d83f34db89ec5cb4d9044f30b7f3debce37abed3a88acab0b3ff42d4dd3120cd79a5a67e616e005f533509a57463d6e9e1be5a7fe2cdf0ea521a0b48236980ced017546f638cdd321cb476e3fcd6d48d3513aec5337b5d9d8032f4b8122cf881a16ad44c598938efa9e9b8ca90789c7d828a1d9d8499cd3acefd92e7506434a0e27e45e720d0baef642f1b643e42a5cc67e1287db603e8b7d53424eeb522f5a634d012f3d6a2c30b16d0781efd47568a25ca05ad3f26510fbe16c1e2f2ffd76ca2b28287b886e71ce392d15209a4a6ca006b91619368d04b3b5bf40b099dab7635091c9af47d2f4bd71f2a2edcff41887d858d6e64ba2385c065f8c9d23e29296b581dcb50722810999a1e7c36fc4e196b639c8f7ad1ffe24ed53083948a8d8c7f344b0097cf4af1d371fa1b8fba8a234de7179986a3498847689b8a9f5c876c68e3b20062cf59b98eb78c79635399a8cb0834a3f15d46e3ed6d98ad5ea1984419c7f605a75f807f56f0cf177040000",
    ],
    [
      "ETag",
      "sUDq1rX3SldjzbiJeWuROA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:11:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93614fdb301086ff8bf771a9d4425bda487c48216c91425bda204d9a50e4da97ccccb183ed045555ff3be7c0ba6920852fc9ddf939e5eef59b03f92d142721d989f2a901b3ff5282bbf3c1066c239dc557ad9505121070b44492b7eb7867be46ab647e55d9f6c9c4d7eb1fcf97974858f60b2a4ac2032904486e49f8f34014ad00db98964da5f22e0b88dbd7beb8cd36c9f21be695e63e5fdea769b44863720c4e8d9c3a9a77fc27da1e8e0179d4bb0d14604031f0b3d4463f0273895fd3d2aa9630b0ba310c2ce9e0eea034baa9a9d17a8095c17c309a8ecf2693d9f9703e995d202735a34e6885e8fd16c7234e3b2a37fa199724a373244c17e3c245f76cb12e78b7880f9365361d77f3fd0b50c674a35cde0b16c258f72ade1ff04d84ff49493f09e24d09d90795a038983e4ad439e5dc80b5bda4b639adeb13b658add2f7aa286eb4e0fd602b7a00e9da137093aea28fa4457ffdd5ea3acae2778475e89a139225b7f1368b6ed79e7b7833c262efc0ae8d465359f07e1a0dc7b3c9c574f86ab12bed6d87df099d6920208ce29ff25d381216545a38be0022346e5387030000",
    ],
    [
      "ETag",
      "dvPEbr+AOI9CmsvqrEDPXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-10-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536d4fa34010fe2b64efcbbdb46581b6b44d8cd7abe891eb8b026af4eed22e30d455602bbb683ce37fbf01ac2f31d14fbbd9799e799e999db927573c8fc988847c7d5d4271f7e95284a44540b135beeabfaca383c233b3a373f3df21b5bea913433fdad94104af5892659b14da529445047274ec77d6852837ac10a28d89da066d1bfdaed9eb0d2c3aec0d6ce449489329cfaf907da1d4468e747dabdd590bb14e816db8ec44227b7ad76f4c7d53884b8894d45f4beaa822f5f74577531131c545be73eca3815242b1848cf1142d3c33e3f0fbebd41dceb2ce1ac1373c021645a2cc55650b5344224ff8ba2ceaac64744f6a9b2f2ec477a6ce24d0beb6347fbcef2c27633ff8bc920a05561a939a1f78eefce04b755d2d9717b7d94adbf716336d5540248a58aeb4d39f8ee7685bca9f92520b76b45d6de1ed399ef6e3ec2934f6272d6dc5e3faa64ddd991b685d6db1bfef3b8146d16c0c52f1bcb61ab03085cae66337ddb77f58119862129ae0d2a67d660ce8304c423b4a06562f4c2884e120b47bcc0a6934ec42370e81214f55d96b16cb451ef713308151c3667d8893c4605614c666c28656920c073d7bd003dbb66cf2d022b70557b0c7e54648deb4949c7a6ee02c03ef783e19074e5d46c2ca54ed35e6aa225efa5458e492520381efd4f65045b940b5ea8fdc79e078e349e09e38cd584c61cda23bff1a072361a90444b38265a0a09889181b470e17be1bb88bf9788a8cfaaf0fb7084946bfef9f09c1dda6eeb4aa4f12b833c70fc6b3c3dac31674c2d2b246dd3417625293b6a9d9a6ddc03047863532ba9d5edf3e270f0f7f9188d3dde42547c78e77469a270f1228208f3efe5904d7810f9774bb3188c59d41191c36c5718e225989440534f3c4b3cacc968deebbd5c421b8506f625dcbde36adca5165840c72f55851b33158682356ca271006710ce6b83018fd0fb13b1a5db1040000",
    ],
    [
      "ETag",
      "/K3QGrR2mQZ2zP03+tV1/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d555d53e23014fd2b3bd9c7854ed2ef76c69945ad828be002beec8ec3843640b4343549fd18c7ff6e52b505edb2e003e5de9b73e83d27b9e109dcd02c012198d1c56d41f8e3f70591bf753022a248a5505f39cb04012d40245e28e4edd968de29865df23093f9e551d7fd2367e2fee0402144bc242b0cc22730a7244d0408ff3e810caf88a2d14401e463aee3de60129d46235558b144170697fd7ee7b01f81e75645c071cc8a4c4ef726ce2917725a2615713c19f506a7db7929fe124d29a6e97e9405c912c2f7e3d07c8a93841321f6e43131c5795e930e87c37ed419fcc7fc2ce18c265f60ded17d19a9bcab1927fd6167b21d9f60b9b645c79d49b41d2f245eadf534e99d47e349e7fc623b6b3a5ddeaf76b1faeab905aed96c44e684932c26faf8e79c5d9358f6f46409f5f694b4052b784cf4e62970b9b0e0acc83167acad2a6d04dbc8b54dc7f12d1838bea780298bb1a42c53d8cbb1ea0d4826713a62f76ab080ad00bc0cd58ccdcbe75d59d61a7484aaa8b3c21257d9119344cc194faa0a8edf4bd64ff250b66bc46c55ad9fa8239e92fa8703cb080cd386eae35655c90bb24362fb8101abcc84266c43b30dd7da361c1ffac8b702db713d3f0a1ac0df9019222b44b6a12110fe80b0dc8775239c9a57457dca6b1fced8321352b9fb5e48afdf2af62e2e3896815cddac11d42dce712afe217c73c93735fdb33467d38700dadeab0f419311cea61141a3116e8311c724a355328e714a6b5f1251e6ce4e47c1f20d642103d9bee1d9bb08df58323d7592fccfbadc0f2e0408057693016e65409372af417997a48b5aebaf94505165cb1b9dbabb08f71d75f87d43a977fc666d5b46007ac6da465762bc0dd5087a9ed3acdafba8faeaed6a387c54737cc199ba6704d1570c82b6f57ae31c312d495d9ca1eea50562acfeabbb5482b0dc9fe717bc56f3b209080000",
    ],
    [
      "ETag",
      "qJRfAuOHexbtpUCH6Ztbsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34d7282300040e1bb64ed380a45a03be5cf58b56ab545364c12020414310911e8f4ee657a8dfa2ef056df374084502162792b69055e4187347b4cc678320fd5a43feea22c0e1bb3394e97cac0ce81dc7365dd22b62e0b8ade3398e53a2aaadc2e29e2a4525e70f1b430172c7225bc84eb07b91a5ab5dcd6dc5df497fb3e0d90759ef3f6bebfea874f6131fee1a73861db5c7c41d3da9681b56b61d27ab880eb5e1421ccfc40e945edd9cd6a7a6eb0dd69d54ace5e3caceddcb41f7eee0626c899180df2e7661d2ba3e1b255d7c47fbba5060da5225d6146b387e9304ddf67d1596ef029388d9f3dfb778111a06dcd3815311bb4eb866d8fc01ffd5876351dfc2f06c894839f5f6b1d94c219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d6f9b3014fd2bc87b6d0204d29048d19aa5b4cd94908d9056d53421632ecc2dc1149b4e5195ffbe8b69ba5695da276cdf73ee39f7832772cfcb944c48c2f38706eafd973b919013028ae6f8baff565dd837a60de2f6727e271bf5bdb911b3e91411bc6549baab0ae849d1d40ce464bbe9e7b5682a5a0bd1c3443ddbeed9a7ee6038f41c6b3cf446c89350644b5ede23fb8f52959c98e651bb9f0b9117402b2efb4cec5edecdc78159d5e20e9892e65b491355a4f9b1e8d74230aab828a7db0d1a6824d431ec282fd0c27f669a9cbd4ddde774d7cf11fcc81950c64453aad616a660a2cc78ded43a2b993c116df3d5816cfca53f8f0c268a6657c625ddc18991524563b5afc0b808d72b63115cacc3d52c5aac837833bff257b3fe7cbddcae828d7173e587bea1685280e61a53e34cdf02bca07e0a52f152ab47ed73abfcdca0c5fbb1b4049496d005e391754a6dcf1a2759326299e70c93cc8224f192d1903a89c5c62eb8690214795a54b368294aea50e67a741ca7ce28895dc785980e681a278e33006f6431cb73c9e184fcadb982732e2b2179d72172132e223f8ec26d309f45be2e21a34da1ce3b636d01af3d2a2c30b62c1b811fd47568a35ca05adbf24510f9e16c1e2daefd6eca4bc829db6f1e70ce192d24209ad6d84005f54aa4d83412cc56fe3982f5d47e1c83924c7e3d91b6efad93576d7fa14738c4d6b2d25fb289c24570a9ed1c11d7b46834e4b13b901a98a853f47cf88d385cd32e07f9b9f5c35bd23d8590410d25fb7c9e08d6814fffb6e3ea2316971f65a4c23b6e0f93ad08aba1db22ae8b3db207f660acff55456bf52ee6bac363cfda1c6d46d841a99e2bea561f0bedc41af902c2202e40a07b75f807e0c06cbf7a040000",
    ],
    [
      "ETag",
      "yBpF1W/1eoYGCjsutJuWoA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "6e",
      "db",
      "30",
      "0c",
      "85",
      "df45bbac03c4cd4f3303bd48b66c0de0249de35e0d85a14ab4ab56163549ce100479f7d16e970deb00f7c626a98f3079747c64cfca4896b00755fd68c01d3e5410beb54106bed1c1d3cba2f1c022068157443e3eeff9f8f206aac5c5dadb0c47179590d5f535115e3c42cd597264a5022d3d4bbe1f99e135509b40ddd4a6e8b28885836d8bbb3c5b6dbe525ea36cf3cd5d9ace17e9929da273a3e481171dff8eb6fb53c49ef02183121c1801ed2cd6e11388b06ad7f4bcb61a061e1b27c0b30eee0e2a878de50e714095411c0fe2e9f87232998d861f27b32b02350a1e141a62ef76341f0b18b8cef0276dc9e21111ae8b69e3b27beea9ae64b7491bae36f974dc0df837c085c0c684a2172c95f3e145bddfe0ab0aff929abf13a4ab52ba0faac048707d94b20597d281f7bd24fa825b7bc616db6dfa5615231d2ad90fee550fa0c3fe0c7c49b7f3ff494b06fba3d5e779be7c43f840b63923f96abddce5f3f56dcbddbf1a617108e06f1d92ab3cb4868a87e3d9e46a3a7cf1d8276c7d47df49826b206282d3af72a3024b4aae3d9c7e0165d6087688030000",
    ],
    [
      "ETag",
      "hkva42HegB+MspRo3+gcdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-12-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "db",
      "40",
      "10fd156bfbd256245e5f824324444330ada55ca86da0d056c97a3d365b1c6fea5d5321c4bf776c132e428227af3ce7cc3973bb23d7a24cc9882422ff5b4375fbe18f4cc80e01cd72fc3b851f87cef5f052ce12efd61a40796d3a66bebf8f08d1b0145b6f0ae82959571cd4e834eae795ac37ac92b287897a96ddb3765d7b30183a746f30f490a7a0c8a6a2bc46f695d61b3532cdad763f97322f806d84ea73b97efc6fded8e6a6927f806b65be94345145996f8b1e1492332d64b97f1aa1815a41b5843513055a7862a6c99797a9fb82adfb39826f0407c6b9ac4bddd8c2145c9699c8ebaacd4a4677a4b5f9ec41227fea4f62e3f38e118d8ffde5641cc51f574aa3c0ca60ca88e230987ffdd43c57cbe5d5bff5ca380e17336355019755aa56c6f9373ff48d2de5574da903fbc681b1088ffcd038bc780c8da3c98eb11269fb32a6c12c880dd7581c1f477e6c50349b82d2a26cadc62c29a0b1f9d0cde0f50c1b02d34c41175c7a74975943ba976489c7b3a13348320a49324cbc017312caf75c70d30418f27493bd65b1529629ec21cddbb5283829cd1cc63d8fda9439039eb943d7c501398ee366e47e87fcab848623a1365289aea5e43c0c627f1987a7f3c938f6db32325617faa833d714f1dca7c62297945a087ca3b6fb262a24aa35330ae6b11f8e277170e6776b31859cf1dbe82f2e46c60a058866155b83866a26536c1c395944411c2ce6e32932da599f6c118a8c7ede3d11e2db4ddb69dd7e491cccfc281ecf4e5a0f5bd0192bea1675d33d888d1dea51bb47bdd8b2479633b2dc3ea5f492dcdfff46226e7797977c3ff5c30bd2fd0a21830a4afefe6411dc06de3dd2edc520166f066570d9b4c03de2aa11e11574fb24d68d992ddbb6addd660208aef4ab984307dba635399a8cb08652",
      "3f54d45d0c16da89d5ea1184415c83391e0c46ff03b98cd204b1040000",
    ],
    [
      "ETag",
      "LeXB3k8ZoMb7y15enk/3/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff9d956d6fda3010c7bfcae4bd1c44761ec8835469d0528a46a1a5b4d33655c82407b83571663bed50d5ef3e279b02ac1983bd01ffcff717f7bbb3cd0b7a6469822234638bef39c8f5fb05e8eb6231069573adcc57265205a88140d385c94c479f47aca7796bfdf50eeec6832fab3c5d5e9f9c980c152f614551f482e60c78a250f4ed05a57405c6c61293a0d759b1ee0f27dd5e776c022b911481e1ed60d0ee0cbae8b55119681c8b3cd5d3a38d7326959e96a232de4cc6fd616fbf8fd3ffb21962c68fb32c204d401ee761d994268904a58ef40935a559b6317546a341b73dfc47f3d3440a96fc87f3891debe0fa69e3381f8cda93fdf909d55b233a6b4fbafbf395a6abad9a26fdcbeecda47d79b5df359d2e9f5787b4fafeb5811ec46c0c739090c6501cff4c8a078875bfb859cafc3a87a612b98ca1189e492e371652e4199542344da449ec2669b9b6e7050e0ebdc037895cc45433919adcdb1b531bd242533e16cfe66221d724c87269eed8bcfc7c3261bf64285676b5ba00bea095fac481a94a2d1f0bd9fa083fca32ad58acaabd7373b4395432f02cdb0dacc0225e5005b5cce100e162dfc2dea6366ce326b69b78532eb1bc8060dff742b71bd624be2376449c88b81f302e9bbe4d1dd450f7406ab6a9e0349f31ad2bb9884bed1f024e6cc73283b188834d07aaf09c72057f513bf0814b2cb7063ed885272d27ac870ff6c28735f0835c7280b4d21d735480f34af3d9af407008bfed1033f3d0322d709d7ac47dbd6899f639ee5baa7017dff6b0538f1feec527b8726c8a3b13522fd795ec2b2d36cd485821c343d0dde2cc13abe55a663a87cc7a77cb0eb1e5396f88b64a2ed11da7e5d7a213fc27fafdef57a0b3d6a0aea4304f8a82a46c83994df9b89c8a82cabc9151515903c5d4fc2d5f308da2b2b8d79fcfd80afff4070000",
    ],
    [
      "ETag",
      "nOWOiGtl6yZVeVRLYmunhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d34b7282300000d0bb64ad4c44bedd8122e3a7220a16d964424c494410083a04a777afd36bd47787f70498102a04ea6e05adc0079058b515a264d0491e70883e1bd87ef7ceede46da5c717f1b8f7d1b10c797e618731e330571d1aaed0b0bb57b3fb79a9f35aca095993881391c5d70d890e6c12466dd67b1b8ebb70238ea9563015ed079dd3a4b465b0c7ee5723a195c78ea54511abd326e3013235cb74934cacb46ae6158bb2ec44765f5e0add88cfa75e1a867f7de43ba319026ceaebb4e2419f703dad9c6995ce87824d9bddc4df5a2e65c505cab1494cd53c75f3f9368178e187cadbdbbf034680f6356fa940fcb57daadbf608fcd5479dace9ebbf4b714b5bf0f30b647350de19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b4fdb3014fd2b91f795b6499f49a56a74258c4e6dbaa529084d53643b3799218d43ec8010ea7fdf8d431908093ec5f63de79e731f7922b7a248c8943091ddd5503d7eb9918c9c10d034c3d75ad2eb3ad0dfc2cb8b1f23a6bc9b87be281f6633448886a5e8becca1a3645d7150d3ddb69b55b22e6925650713759c41c7190ffba3913bb0bd913b419e823c5d89e216d97fb52ed5b4d73b6a773329b31c68295497cbfdcb7befbedf2b2b79035cabde5bc91eaaa8dec7a25f73c9a916b298edb668a05650c5b0a722470bff99093b7d9bba2be8be9b21f85e70a09ccbbad08d2d4cc165918aacae4c56327d22c6e6ab03d9fa2b7f11595ce6f5be880bba87132ba19ac6fab104eb3cdcacad6570be09d7f368b909e2ede2c25fcfbb8bcd6ab70eb6d6d5851ffa96a62c07c3b566d6a9b9057841fd04941685518f9ae746f9b941cbf763690828ada00dc6137b4c1dd7f658ca263c75072396dac098cb26233a6036f786304c1850e41951c3a2852ca803c099ebc5f670308a87ee7812bb432789c7369bd0d476f8c04bc8e1843c5442c39950a554a2ed10b90a97911f47e12e58cc23df9490d23ad767adb1a680d71e351618dbb683c00fea3a34512151ad69f93288fc70be8896977e3be51564943f6eef70ce29cd15209a56d8400dd55a26d83412ccd7fe1982cdd47e1e838a4c7f3f91a6ef8d93576d7fa14738c4c6b2365fb28dc265f0ddd839222e695e1bc87d7b2015705925e8f9f00771b8a66d0ef26be787d7a47d0a21850a0afef93c116c029ffe6dc7d5472c2e3fca288d77dc1eae1a115e41bb45c2147b64f7078edd27065ce977b17edf3bf6acc9d164843d14fab9a276f5b1d056ac562f200ce20204a657877f3e283e057a040000",
    ],
    [
      "ETag",
      "uoaYuNtBRVHJ5bs9jw2ipw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93616fd3301086ff8bf9482a5ada7425d23ea450a0226b479b4948688a5cfb123c1c9fb19d4ea5ea7fe7928d821852f625b93b3fa7dcbd7e7364df95912c613b55fd68c01d5e54103eb7c1067ca383a79745e381450c02af88c42f9f766e777839b169fc7365bd28f357ebf4f292082fbe41cd597264a5022d3d4bbe1e99e135509b40ddd4a6e8b28885836d8bdb7cb35c7da0bc46d9e6ab9b2c4be7d9829da273a3e481171dff8cb6db53c4ee70b781121c1801ed2cd6e11d88b06cd7f4bcb61a061e1b27c0b30eee0e2a878de50e714095c1683c184d27afe378361ebe896717046a143c2834c4de6c693e163070bdc17bda928dc644b82ea68dcbeeb9a7ba92dd266db85ce5d34937e0df0017021b138a5eb054ce8707f57e838f2afc4b6afe4c90ae4ae93ea80223c1f551ca165c4a07def792e80b6eed199bafd7d953558c74a8643fb8573d800efb33f03e5ba7ff93960cf647ab7769be7842f840b63923f9f26ab1cdd3abeb96bb7d34c2fc10c05f3b245779680d351a4e66f1c574f8e0b1b7d8fa8ebe9304d740c404a75fe5a30a2c29b9f670fa053f7575d588030000",
    ],
    [
      "ETag",
      "oXKbrby+4pA5zNpscfT/OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-14-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6f9b3014fd2b96f7b24df980104212a9eab284744829e980b48ab629186352b7802936adaaaaff7d1768faa14aebc39eb07ccfb9e7dceb7b79c0d73c8ff114477c7f53b1f2fed3958870073345f670bb368a8d1b57c5d65eade836de9c8cdda2ba3b3a0204af59926445caba5254256572baf17bfb5254052985e842a2ae3eeceaa3e1c034c7863631c716f0244b9315cfaf817da95421a7fdfe41bbb717629f325270d9a3227bbeefdf0efa4529ae1855b2ff56b20f2ab2ff6fd1e35450a2b8c88f363e18a8242b772c233c050b2fcc38faf636758f93acb707f02da78c502aaa5cd5b620051579c2f755d964c5d307dcd87c75c0bebdb2e701fada41fe6c69efe6333ff81c4a0502212212f981e7b8275fea63b8db5dde65215a7aeb5314968c8a329621baf8617b3642218f43f4bbd23483a163347317afaf285cadbd85eda1ef5b74c83ef3e79d160327b4724e9d00e99a86d6cba56f074803fb31938ae78df9804429ab8d3ff5d779ffaa35812822591bdc59da88e8636d1225914593b1614689c6a2681c592631228d4e866c18478c004fd5d91b16c945ae336b10eb1121a66e595632669a39991893516444314d4cc3d059945883043f76f05dc9155b705908c9db26e30bcf09ec5de06ddcf92cb09b321252a56ad19aab8b78ed5341913b4dd301f88fda1eeb2817a056bf9ae306b6379b07ceb9dd0eca8aed09bdf76f605412924a066852928c29569e8a181a87cfd6be13386b77b60246f3fa670784c4d35f0f2f84e0be683aad9a6fad351a36fa07c03949ab0671db1e30841f3bff95c1820c7f00016bd192f1cf8ded6d717be5b184952ca71f0f00809bc087db7d5835c0c2b2810c4ca5e2306e54d622b464edd8f1ac3673600f86c6b0f9372852aa7731531b1c7a5be7a833b28ce5eaa9a276d5ea5635a14a3e832008d3e2c2a641f42f25aa38f3ea040000",
    ],
    [
      "ETag",
      "O3pUNdupYELLcYdUG8Npuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54",
      "6b",
      "6f",
      "9b3014fd2b93f77101615e01a44a232bed3291a44ba8d66daa900b4ee28c606a9b745994ff3ec352c8b62c4bfa05eee31c73eff1bd6cc03792a7c0030f64f65862b67e3dc3e263658c312f33c1e5aba039c7a003b0403389b469efeec797cf7783955d168fbefe292cfcd0bfb890089eccf112016f03a604672907ded70dc8d1124b1a492540ac8bcaee0fa3e03a18cbc092a65560781b867e2f0cc0b6d3105092d03217f1d9c429615cc4b5d31027d1b83fbc3ececbd08b68b263929d4799e13cc5ec3c0e296294a60c737e268ff21815454bea8d4661e00fff237e9e324ad2173057e45c4626562de32a1cf9d1717c8ac4de155dfa51701ccf055aeed514f507c124f20737c759713c7f5a9e22f5fdb60316f4618ca798e13cc1d5f8178c2e7022fad56671f9f50c2b9c962cc1d5e549709d98315a168851aac888024d05daa66e598ea1b996d395c08c2648109a4beced44d6060415281bd327b958409700569b72c7a6f57325c356ddc3aa063c5b2161a8713ed079ce853cf439902d7611f32dfe5ed7aa2674d9a4afe47c67b8712d438536542d4775dd263845196f218295f81f2947afe86d899aae299aae686dd5d5d19aab995dd7b4ecaee306ee01f42ba87bd0f0a0a9d618ed8da6d5f7b02f847d40884b9c93c699242823ad2e29af7deb1411a0e1a8d0802a341db56b9ed2f86f29bd6ba8aef3775ff61f2ab810bae62101ec46805de7f7bbd9e8ad05e6378cca41e3b89a31a899c6af917b47abaee4e678552d1d9020f9b37e4f04f0ea4ab73f014991181e0a060000",
    ],
    [
      "ETag",
      "6oBXzZYXMv6upqA2WLpALA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ffedd34b7282300000d0bb646d9d40014d7780107f2058d48e1b26840001470201153abd7b9d5ea3be3bbc6f40286552c65d5db12bf8000351d1944e13687edde018f9b911f7cd7830bcc2d61d339eb5f5da31ed222b4f78e5cbb351e2e2a868f1f0e666d79cd04a7adbb65bf583910c7998e1991a2d0273c774a875a1d07ad76b2e76cd659ad9c5cd2dd465b947bbb2eb3617f1993afe42a1281430af1ab29bef752ba175ebc19575d924b532721d42ff7e16d5c242ee1e67a77b907aac592fc903636a2a253fcc8f57268e34ba931c0db7070fe4b61f4fa3861d49826a3baa2947c809226ffaf2f2ef8009600fc15b2663fedcfeae2334017ff5e36e10ecf9df62a4652df8f9051e32be2519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-15-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d4fa34014fd2b64f6d51668a1ad4d9ab5697165d35297525db3d990617ac151cae0cc50634cfffb5ec0ba1a137d6266ee39f79cfbc133b9e7c5968c49c2b3870ae4d3b73b919013029a66f8ea9a97b3dbaa9cdf5c573f1ddfd994bfef06dee36482085eb314dd95397494a8240335deacbb99145549a5101d4cd4b1dd8e3d707aae3bea5ba7ee68883c0579bae0c53db26fb52ed5d8348fdadd4c882c075a72d56562f7fa6eee7b6629c51d30adccf79226aa28f373d1efb9605473514c366b3450299031ec28cfd1c27fe636397b9fbacbe9ae9b2178cf1950c64455e8da16a660a2487956c9262b193f93c6e69b03597b0b6f16194ce4d5ae880bba8313634b358df55309c679b85a1a7e70be0a97d3c85f05f17a76e12da7ddd96ab159066be3fac20b3d43d32487866b4c8cb3e616e005f5b7a0342f1af5a87eae955f1ae47f1c4b4d4069056d301e5a036a8facd3244d862c1df5dd24b5204946c9d0a5fdc462a70e38db0428f21ad186450b518c2c96a4d486783818d0d8b1c18e47940de2149ca165b9ae650f19399c9047c935ccb92a85e26d87c875e8475e1c859b60368dbca6849456b99eb7c6ea02de7ad458606c5936023fa9eb5047b940b5bae57e1079e17416f9575e3be50564943dad1f70ce29cd15209a4a6ca006b9145b6c1a09a64b6f8ee0666a97c7a022e33fcfa4ee7bede44ddb5fe9110eb1b6ac9b2f5947a11ffc68ec1c115734af1ac8be3d10094cc82d7a3efc451cae699b83fcda78e10d699f42484142c1be9e27829bc0977fdb71f5118bcb8f324ae31db787a95a844968b78837c51ed93db767d7bd47b0d41f627ddb39f6acce5167841d14faa5a276f5b1d056ac52af200ce202044daf0eff00a23209ae7a040000",
    ],
    [
      "ETag",
      "5/PChupDYWuJ4I4UpXj6Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c7bf8bf74aa464098121f521d9d22d124dda84ee65aa906b1fcc9de1886d52a551be7bcfb4cba675127d81bbf3efc4dddf7f8eec97aa254bd8bd2a772d98c38712dc8d0f36605bed2cbd1aac2db08081e32591711c0d0f97e32c93df778f3b114da3a7a7f6e6e282082b7e42c559726485022d2d4b7e1c59cd2ba03681baadeabccb02e60e8d2f6eb3cd72f595f20aa5cf57b7693a9ba70b760ace8d923b9e77fc3bdaee4e017bc0fb0d1460a016e067690c3e80704bbfa6e555a36160b135022cebe0eea034d836dc200ea832188583d174f2310ce3f1f0531847046a14dc29ac89bdddd27ccca1e37a838fb4251b8d89305d4c1b17dd734f7525bb4d7cb85c65d34937e0df001702dbdae5bd60a18c752feafd065f55f897d4fc9d205d95d27d5009b504d347a926e7521ab0b697449bf3a63963f3f53a7dab4a2d0d2ad90fee550fa0ddfe0c5ca6ebd9ffa42583fdd1eacb2c5bbc21ac23db9c916c79b5d866b3ab6bcfddbd1a617e7060af0d92ab2c78438d8693388ca6c3178f7d46ef3bfa4ee24c0b01139c7e956fcab1a4e0dac2e919397a68e888030000",
    ],
    [
      "ETag",
      "8870yF3TTdVqwqc767zzuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-16-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6e",
      "9b4010fd15445fdaca31606c635b8a5ac7c10d922f2de0b679826519c826c03abb4b2227cabf77c0769ab45222f1b09a3367ce990b8ffa0dab527da2272cbfad41ec3e5cf344efe8a0488e5173fefbf2e1ccd95c5cac93dbb3656ed83b7e959f9e62066b589294db024e24af050539d904dd5cf07a4b04e72758e8c41ae2d7ef0d0623db1c0f460ef22414d9825537c8be526a2b278671d4eee69ce705902d935dcacbe7b871d733b6825f0355d2782d69a08a34de16fd52704a14e3d5e9264003b504114149588116fe32d3e4ebebd25d46ca6e8ec9778c02a194d7956a6c6109caab8ce5b568abea9347bdb5f9e2a107eec29d85dae78e164ce76e349b06e1c7582a14883522b520f4bdd5b74fcd338ea2abfb32d6e6fe7aa9c5022817a98cb5b57feefadad9a576644d8359478b59dabeb485b7f442adafade7f3c00d35134da52015ab5a4b21490a68ec1ca6e6fdbfab86401491b00723c71c126b648e932c716836b207496642928c126740ecc4a4e33ef4d30408f25453bd65918a5716e9f7877468d90ed81949873dea0c6c935aa4374ea9e358a6ed644e8f52fda9a3df0ba6e09cc92d976c3f3afd97ef856e14fa9bd56c1aba6d1b19a90b75be37d734f1d2a7c22623d3b430f18dde9e1a9471546b76e1ad42d79fce42efa7bb5fff02724277c12d1e40460a09984d0429418158f21407a77f5f075ee8ad57d345530b8f2adc6d9bf88f8deb5f1e423e6420a0a2ef0f1a935be0dd7fe378a8988ba78a32b87bc570ad54362254c07ebdac6ccc1cd9bdc1d869ff2c4584fa171b5afd1e62cf07da5484122a75e8687fa8fad341ac96cf4908e2565678a788fe019901560528040000",
    ],
    [
      "ETag",
      "0FXYzB7UHHObqBMg/3yohg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff9d55ef6fda3010fd57a6ece3c0b2f38b04a9d2a04b3b260a2da5fb3255c8754c6a96c4d476e8aaaafffb2e691b829ab1528980effc9e72eff9ce3c5abf451e5b7deb46247705570f9f136e2ecac58ceb22351a7ed632d7dcea58dcd00490f7893c09b39fab492ea637820d47e9c5ddddc5d1112034bbe519b5fa8fd652f034d656ffd7a395d38c034dc400300feb723d9acca3d36806894cc6656272351e0f86e3c87aead404ca982c72b33898b8144a9b4515d4c4cbf96c3439ddcf4be98768a058a48751129ec75c1dc611eb058d63c5b53e9027f582aed75bd2703a1d4783c97fcccf632545fc01e6461cca48cd66cb38194f07f3fdf8989ac6117d1bcca3fd786d68d6a8693e3a8b2ee783b3f3fdacc5e2f63e7b8fd5d74f1d6b256f667cc915cf192fdb7fade48a33332a274bc3db53ded5b2508c978707e06a2351b25853256517325de2c3c7b53d2f7070e8053d00a6925123640ed8ab4ba8cd32d2d07426ef61b02c1700aa5ac28c2dabef0da449a561771529c1ebe007571b29741df3d573027fe57faa4a119359bd7b46d32d9578c8767bc80950cfae9346155bc492a69ab76fd95e88c89666631b77b1ddc58d82911760cf0b49e846610bf013b1fbc4e913f70bc695ed4ddd768bee63ca44da901e958df31a300e1169157d02239d362b7710717de4126437cadda375772b7491e3bfd563ef0af75d90ee7a6dcaed5a39f2306e53efb4a83f55dcf0b411ca8249f6bb4e24c94bc67e970984a0004e9060441cf7e0d3f7fd00396f9539bb1ef41c1282077eafcd05a7e182df6b73c16d7161905143b71d210dd74ba9e23a43d96bca798f0d247450085380e1f1dba5fe3b70c140fc5698bb6b424002a732216873c1dd7121a8dbe1fae576183e809c7325e1aad1bcbc65f0f38d732c4b69d0fffdb2a48ec528fc577f17e6397efa0b5e5dbb4e08080000",
    ],
    [
      "ETag",
      "wgoF9mVjNniObicBIlQqqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "2d8e8920a43b90aa05540c382a1b2640a4a90c84af924eef5ea7d7a8ef0eef1bd034656d1b77d58d95e00d8c14e1693a4d66e67998c9d05f046bdde5ae81b23bdb9a1fb9cfb07e4c9d42084eae1535ebfddd3fda6da6da86740c929e67f6fb55b797ab2c449505914589120f63f9b9dbf721a9abc7bc8ebaadb8e8bc64b858b14e6146d84a72c8117d78722ce24b5ec2a15d2eecb5741b836f6a187b4441b047bc4f6c1cf48416836f2a5bed4b7862b7898e7b0f732b439508887a5aa1e4365fab6c070b1e415954ce8d865e2243e89e16c4b1ae5a93d7813a7d79f977c004b087e00d6b63fedc3ed7309e80bffa71370af6fc6f31dab006fcfc02637e4a4f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-17-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc87b6d12d2404222456b949215a9211d21adb66942b673616e01336c5a5555fefb2ea6e95a556a9fb07dcfb9e7dc0f9ec89d28f7644698c8fe36503f7eb9958c9c10d034c3d7ab4d305e39552ed5ba18afb29f770f37abdb87f91c11a265295a5439f4946c6a0e6ab6dbf6b35a3615ada5ec61a2de70d21b8e9d53d7f546f6d4f526c85390a797a2bc43f61fad2b351b0c8edafd4cca2c075a09d5e7b278791fdc9f0eaa5ade02d76af05672802a6af0b1e8d75c72aa852ce7bb2d1a6814d4091454e468e13f73cfcedea6ee0b5af43304df0b0e9473d994bab58529b82c539135b5c94a664fc4d87c75205bffd25fc6169779539449490b38b1f654d3443f5660ada2cdda0ac2d5265a2fe2601326dbe585bf5ef4979bcbdd3adc5a37177ee45b9ab21c0cd79a5b67e616e205f5f7a0b4288d7adc3eb7cacf0d0ade8fa525a0b4822e984cec311d7af694a56cc2536fe4b2d406c63c3671e988d97cea80b367409167440d8b96b204f0260cd2719232c74e1c379d24d4c1d370ec3270478cda9e4b0e27e4a1161ace85aaa4125d87c84d14c47e1247bb70b9887d53424a9b5c9f77c6da025e7bd4586062db43047e50d7a18d0a896a6dcb8330f6a3c5320eaefd6eca979051feb8fd8b734e69ae00d1b4c6066aa8d7728f4d23e162ed9f23d84cedea185464f6eb89b47d6f9dbc6afb0b3dc621b696b5f9926d1c05e13763e788b8a6796320f7dd81d4c065bd47cf87df88c335ed7290ef3b3ffa41baa70852a8a1e49fcf13c126f0e9df765c7dc4e2f2a38cd278c7ede1aa15e135745b244cb147f6e978e24d8901d7fa5d6cea78c79eb539da8c5040a99f2bea561f0bedc41af502c2202e40687a75f80750c950bc7a040000",
    ],
    [
      "ETag",
      "POI6F4plosMm6FgZkwWFjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6fda3010c6bf8bf73648d0f26f91fa025abaa105e8209d365555e4da97ccccf165b6c3c410df7de7b463535b297d93dc9d7fa7dc3d7e72603f94912c660faaf85983ddbf2bc07f0ec11a5cadbda35785c6018b18785e10392efa57095f48936fbf2c7f7fbafe0adfce56c5c505114e7c8792b3f8c072055a3a16df1d98e125509b405d97266bb288f97d158a9b743d5f7ea0bc4419f2e56d924ca6c98c1da353a3e49e670dff86b6fb63c4b6f8b0861c2c18016196cae216849f87351d2f2b0d1d87b515e05803370785c5bae216b143954e6fd4e90dfb6783c1f8bcfb7e301e11a85170afd0107bbba1f99847cff51a7fd196ac774e846d62da386f9e3baa2bd96c12c2f9321df69b01ff07b810581b9fb582b9b2ce3faaf7177c52e139a9f91b41ba2aa5dba0028c04db46a92ae3525a70ae954497f1aa3a61d3d52a79a98a9116956c0777aa05d07e7702ae93d5e43569c960ffb4ba9aa4b31784f3649b1392ce17b34d3a59dc04eefec908d3bd077763915ce52018aad7ed8f07a361f7d16397187c47df89bdad216282d3aff2517916e75c3b38fe01cec8b2e288030000",
    ],
    [
      "ETag",
      "8g4DLaMdnfjVNzKFXeY2Og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 4",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6e",
      "9b",
      "40",
      "10fd15445f7ab10df802d852d4ba0eae681dbb019c284ff6b20c641360c9ee122b8af2ef1db09d268a94bcad66ce9973e6b28ffa2d2b137da2c72cbbab413c7cbae1b1ded141910ca34bebb212f2fc36730c75f1e7f7b75d5a127377728208d6b02429aa1cba92d782829cacc35e26785d11c179170b752db76bd9c3fe68e40eccf1c8759027214f17acbc45f6b552959c18c651bb97719ee5402a267b9417cf71e3be6f5482df0055d2782d69a08a34de17fd9e734a14e3e5c93a4403b504b18182b01c2dfc6726f18fd7a57b8c14bd0cc1f78c02a194d7a56a6c6109cacb9465b568abea9347bdb5f9e2a187dec29b45dad78e164ee7de66360da3cf5ba95060ab11a98551e02f7f7d699edbcde67a576cb579b03ad3b602281789dc6aabe0d40bb49f57da91350d671d6dcb92f6a52dfc333fd286da6a3e0f3d7ca0a904a462656b2922710e8d9dc3d4fcb7bb6a08441109fbe4c6316d62b9e6384e6387a6ee6014a726c4b11b3b2332884d3a1ec2308981204f35d55b16297939b02ceaa4a943fab6693aae69da6307acc1c0b6ec516cf6613800d74a86b1fed4d17782293865b2e292ed47a75f067ee46da260bd9c4d23af6d232575ae4ef7e69a265efa54d8e4c6342d04bed3db5393651cd59a5df8cbc80ba6b3c8bff0f6eb5f4046e84378870790925c02a28920052810673cc1c1e97f57a11ff9abe574d1d4c2a38a1eaa267ebef682ab432880140494f4e34123b84d7cf8378e878a583c5594c1dd2b866ba5b211a102f6eb654563e6c8ee3bf6b0fd598a08f526e7d84deef9409b8a5040a90e1ded0f557f3a88d5f2198449dcca12ef14b3ff001da9854d28040000",
    ],
    [
      "ETag",
      "N1WprsQkg7/tVKJ+wfna0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "53",
      "e2",
      "30",
      "14",
      "86ffca4ef672a193f433ed8c338b5a95155001af761c26b6a1444a539214d771fcef9b76dd16ddca82379073f2bee53ce734e1192c59168300dcb3645d50f1f435a1eaa65c8ca92c5225f557ce33494107504512adbc5cae87ecccca37cbb50d4f7ac9cde8d25cdf1c1d69858c16744540f00ce68ca6b104c1cf67909115d536166b817acacb757f340dcfc3b14eac785c2646b78341ef781082974e6d2051c48b4ccd0e36ce99906a5605b571321df747e7bb7d29f9944d13b3f4304b42b3988ac33c2c9f91381654ca037d5cce489e37a6e3abab41d81bfda7f9592c388b3fe1dcb0431da9da348eb3c1556fba5b1f13b535a2d3de34dcad978aacb66a9af687e164da1b5eef76cd668bc7d53eadbe7be980077e3fa6732a6816d1f2f5cf057fa091ea97274bea5f4f6957f24244b41c9e16571b89e0454e04e75d9de922dc45ae6d3a0eb6a0ef604f0b531e11c578a6b5b7135d1b505c9174cc1ff5c102b616886aa9cfd8bcfadce8b45331942bb35e0d982075f0832f32a9f443ff26d287d78cfd9dfeaa6a3522beaab7cff4fb9dd23a742c03b9c870b0e1fb75724e52d9489428e8075bd82ced4d89d0845d6876615375f968e843dbf36dc7f5b01ffa2dea2fc80c901520dba834f01b84d51cb61be1b634e29466ac0e26114959d3975856b1b34f1390850d642103d9d8f0ec7dc0df6c999e65f8f85f2ef75d177c847cbbad016edd803672af85fc82a649c37a995226eb68b12c43771f70ec18a666d6f40e6e67fb38b0a1676c0dba86f1de5023e8794e3bb5b7931ab7509f53a15853c14971cf94aac324aa626faf89eb17579f4d3d75a83bf0c190778c1cdbc8b05be0f15b78e45a7e3b3c7e0f7ff77a1d1c3f292aaf05d7778ba4e5b582a06dfdb965",
      "4e7889a52fcba0aca50322a2ff9f2f98024155e9cb6f42083981fd070000",
    ],
    [
      "ETag",
      "KkqMiF3pvkq40CAgQNK2qQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "300000d0bb64ad0e9f8995ee406910e5ff51bbc9408880a032894ac0e9ddebf41af5dde13d414608e51cdfae0dbd804f30648a3623b35cd2f70f698c5d0ddec755eff755eb2856b7e26e7ab4d6eeb44d7959543e91e31d3d7ae7432cf8c6982fa929d99ef01189686cb7a5d268eeb012f2c2472193c596f751615ae168aa704401bce0a84e44003d9b5194d9dbfec374a279c05acce444856976c216ea178d9e475bd494e7580add10e9377fa75d970fa54e6d66dcbfeeeaee24581e39e5c60bf26a3cacf7c554572d0392be2bc8e3fba44e9b791527d7a4c6195d38417738ae676f6fff0e98002aba9a518eebd776156ada04fcd5c7b7a1a3afff06cd1865e0e7177fdaef1319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-19-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbb82610929410295aa394b64809e90869f7d0846c63985b8253db648baafcf75d4cd3b5aad47ec2f63de79e731f3ca27b5e65688c082f1e6a26f79fee04412788695cc06bf5f9b2dc8536fb7bbdff71297d6ff92d9915c5640208deb014de6c4bd651a29694a9f17ad52da4a8b7580ad181449d9edfe99d0edce170d477fce1c8039e62653ee7d53db07f6bbd5563db3e6a770b218a92e12d575d2a36cfeff6ceb5b752dc31aa95fd5ad2061565bf2ffaa514146b2eaac97a05066ac564ca36989760e13f332367af537739de740b00ef386598525157bab10529a8a8725ed4d26445e347646cbe38a055300f66894545596faab4c21b76626558e354efb7ccba88970b2b8c2e96f1629a84cb285dcdae82c5b43b5bced78b6865dd5e057160694c4a66b8d6c43a33b7082ea09f31a57965d493e6b9517e6a50f8762c0d01a4156b83a9e79ce2dec8f1494e3c9a8ffa43923b8c9011f186b84f1cea0fd820230c03cf881a16ae44e57af494f96e3ff55dd74f07d9609812cfa5297108218e97f9a764840e27e88fe49a9d73b5158ab71d42b77198046912afa3d934094c0939ae4b7dde1a6b0a78e9514381a9e3f400f84e5d8726ca05a8352d0fa32488a7b324bc09da29cf5981e97ef50073ce71a918a0b184066a26172283a6a168ba08ce016ca6767d0c2a34fef9889abe374e5eb4fd999ec0101bcbda7cd12a89c3e8d2d839226e70591bc8ae3d20c9a89019783efc021cac699b037d5d07f177d43ec52c679255f4e37902d8043efcdb8eab0f58587e90511aeeb03d54352254b2768bb829f6c876479ee7220396fa4dcceff9c79e35399a8c6cc32afd5451bbfa50682b56ab671004610122d3abc33f3ecebad37a040000",
    ],
    [
      "ETag",
      "n+GlvI/exPyZGr97OXTCgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "3010c6bf8bfb36a850fe1422f545d8e84615a084f0aaaa2237bea4668eedda0e1b427cf79dd38e55eba4f44d7277fe9d72f7f8c991fce09291903cf1f2a50673b828c1ad7d9080ad85b3f8d24a5a200101474b245f2e93e9e4aedb2f4a5ddeedb6576b1a2d7ead6f6e90b0f93354948447527010cc92f0e14824ad00db7225ea4a664d161077d0beb84993f9f21be695623e5f6ee3389ac633720ace8d8c3a9a35fc27da1e4f01d9a9a7040a302073f0b368a37690bbb95fd3d24a0be858559b1c2c69e0e6a034aad6d428d5c14aa737e9f44683abe170dcef4e86e36b0485caa9e34a22bbdde07cc4294745a27ee296a4d747c234316e5c34cf3dd6396b36f1e17c998e06cd80ef019ae7aa962e6b050b6eac7b55ef0ff8a6c2bfa4a09f04f1aab868834a900c4c1bc575461933606d2ba96c46b53e63d3d52afea88a644671d60eee790b20dcfe0cdcc6abe87fd2a2c1fe6af5354a671f08ebd03667249d2f669b345adc7beef1cd08d383037b6f14baca823754af3b180faf47dd578f7d51de77f89dd0991a029253fc55be7347c2820a0ba7df133fc9f988030000",
    ],
    [
      "ETag",
      "q/RB9J03fgpgJjU2QaAMxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 8",
        types: [],
        defaultDataset: { datasetId: "test_001" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6e",
      "9b",
      "40",
      "10",
      "fd",
      "15",
      "44",
      "5f",
      "dac6176ce3802d45adebe014c9b15bc0adf204bbcb403601d6d95d125951febd03b6d3449192b7d5cc3973ce5cf6d1bce5556a4e4dcaf3bb1ae4eed38da066c7044d728cfac5095f9d8c4691b04e79f9f3aec87723323b3b43046f588a94db02ba4ad492819a6ec25e2e45bd2552882e16ea0eadeee0d41e8ec7eec89a8c5d07790a8a6cc9ab5b645f6bbd55d37effa8ddcb85c80b205bae7a4c94cff1fefdb0bf95e2069856fdd7927d5451fdf745bf158211cd4575b609d140ad40c650125ea085ffcc947e7f5dbac749d9cb117ccf1910c6445de9c6169660a2ca785ecbb6aa397d345b9b2f1e66e82dbd79647ced18e16ce1c5f359187d4e944681c420ca08a3c05f5d7c699e491c5f3f9489b108d6974622810999aac45807e75e60fcb8328eac5938ef18094fdb97b1f42ffdc8b08df562117a91e1a2a91494e6556b2922b480c6ce616afedb5d3504a289827d3276ac533270ad09cda8c3327734a6990594bad4199311b5d8c4063ba54090a79bea2d8b54a21a38769a92d48594da1919a5a943a9635b63c7b619b186c30cb249ea9289f9d4311f24d770ced55628be1f9df937f0232f8e82cd6a3e8bbcb68d8cd4853edf9b6b9a78e9536393b1650d10f84e6f4f4d960b546b76e1af222f98cd23ff8fb75fff1272c276e11d1e40460a0588269294a0415e8a140767fe5a877ee4af57b365530b8f2ada6d9bf8ef8d175c1d42016420a1621f0f1ac16de2c3bf713c54c4e2a9a20cee5e735c2b538d0893b05f2f2f1b3347f670820fb3054bfd26e7b836e69e0fb4a9082554fad0d1fe50cda78358ad9e4198c4adacf04e",
      "31fb0f2c440ccb28040000",
    ],
    [
      "ETag",
      "Il+iN+33To06imHqlgy3aA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54",
      "6b",
      "6fda3014fd2b93f77110e55d12a9d2604d5b240a2d0f4dda544526be096626ce6c870e21fefb9c6c4bd0d6b2d22f89eff539ce39d7f7668fbed19ca0102d69f6bd04b17b9f817aa8165390255352bf0a9e4b401d040a671ac93fcb74716baba97af892dc50c2b6ebb59f5d5e6a844c56b0c128dca394022312855ff728c71bd0344a3440ed8a6a3d1ccfa39b68aa131b4eaac478311af507a3081d3a0d0127092f73159f4d4ca9902aae8386389b4f87e39bd33c86df44d38e293b8f92414e409cc7a1458c091120e5993c2e635c142d6930998ca2fef83fc5cf89e094bc81b9a5e73298dab68cebd1a43f3f8d27581d5dd1557f1e9dc64b8537479ae6c3bb6836efdfdd9f66c5f1ea69f39a523f1e3a68cd97534841409e40d5fe85e06b48d4b09a2ca9bfcea02b792912a82e4f83eb8d4cf0b2c082f3aece746db36bf9aeed793dc70cbcde8506329e604579aeb18b99d6861457984df9931e2c646b80a8977ac6d2fab9d5e9a0f6b0ad017f56a3523080bc89079a078c35315bfe4af43ec28f5aac91f04db37bad1b9c417bac63199617189e67b84e9355a26c212966f2a5c8b71dc371dbd34ceddbb4bb66abdb32bc9e657ba613b851f00cf09d658796135aee07d3acab7f6cdf321b462bee8a0bb5da35e1502ade1683d02a0c5e63ddf50cdbb50cdf352cdf79c1df8942d8816978ce3f8e8e24d7d61dc7bf78d6ba65fe6dfdf1774b0c760ae4bde0babf2490ba0cfa6eea4efbc42b577a60c24a59072558ffa36fa942612deef0135eee221b01060000",
    ],
    [
      "ETag",
      "oWsfUH2tRtQZcGidlvjj6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "bb642d4ea4454d77096a052bfe22081b26c4201f0121c8c74eef5ea7d7a8ef0eef1b30ce85947e5da422071fa0672a1af26100f1a9810f6af573a59ccc58be496b62e33d513efbb8a3cdaaa50a97f7bccb0a2f4a5ca7ba8ce162a2ecd263ef1816d2ec7d6eb3b2b63474f3db1286a6ae3fbe5299db9b1027a3da5de7cd2aa0d1bc23e49d1e8ae470bdceeab9c4978059dbf63021a3d447911952dc5867cfe9f8bd1c1db5195da3d8ccdc20b5f194e9866a6a66b9e749e9b14444452bb70e2a3215db11f4c63131b365a1538555ea0935f7e5f4ec438340ec2e547e1cbebcfc3b600044778b2b21fdf8b9fd4d436800feeafb757f13cfff44b04a54e0e7177081691819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-21-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fa34014fd2b64f6ab6da1d067d2ac4dc595a4a54aa966b3d99061b8e02865eacca031a6ff7d2f83753526fa8999b9e7dc73ee831772cfab8c4c49ca8b871ae4f38f3b919213029a16f8dab765241fa2b11dd4b711cf83cb9570afe6b3192278c35274b72fa1a3442d19a8e976d32da4a8f7540ad1c1449dbed371865e7f3018bbf664301e214f41992f79758fec5badf76adaeb1db5bb8510450974cf559789dddb7befb1dfdb4b71074cabde47c91eaaa8ded7a23f4bc1a8e6a29a6d3768a0562013d8515ea285ffcc2c3dfd98bacbe9ae5b20f89133a08c89bad28d2d4cc14495f3a296262b99be1063f3dd816cfca5bf882d26ca7a572515ddc18995514d13fdbc07eb3c5aafac203c5f47ab791cacc364b3b8f057f3ee62bddcaec28d7573e147bea5695a82e15a33ebd4dc42bca07e064af3caa8c7cd73a3fcdaa0e0f3581a024a2b6883c9c81e52676c4fd23c1db17cec0ed2dc86341da7a30175539b4d3cf0b21428f28ca861d14a54d47107b93dcc930975f2c41b672ca19e3349d8d0f3b0451e73dd11399c9027c9359c71b5178ab71d22375110fb491c6dc3c53cf64d0939ad4b7dd61a6b0a78ef516381896d3b08fca2ae4313e502d59a960761ec47f3451c5cfbed94975050f6bc79c039e7b45480682ab1811ae44a64d83412ce57fe1982cdd42e8f4145a67f5e48d3f7c6c9bbb6bfd1631c6263599b2fd9c45110fe32768e886b5ad606f2d81e88042664869e0f7f11876bdae620575b3ffa4ddaa708729050b1efe7896013f8f66f3bae3e6271f9514669bce3f630d5883009ed167153ec91edda83914d0c58ea4fb191333cf6acc9d164841d54fab5a276f5b1d056ac566f200ce20284a657877f6ff3fb967a040000",
    ],
    [
      "ETag",
      "20rRrqR80IuhRifIPMo3QA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "30",
      "10c6bf8bf79648499a7f43ea0bd2a56d269274846893aa0ab9f860ee8c8fd9265514e5bbef4cbb6c5a27d1377077fe9db87bfc70643fa4162c648fb2fcd980397c28c17df14102b651ced2ab466d81050c1c2f890419dfee565f13ed86c3edb7954e669fab6974794984cdbf43c55978648504252c0bef8f4cf30aa82d47d5543a6bb380b943ed8bdb3459ae6f28af50f87cbd8be3681e2fd82938370aee78d6f2ef687b3805ec091f1328c080cec1cf521b7c82dc2dfd9a9657b5829ec5c6e460590bb707a5c1a6e606b14795de70d01b4c46c3f17876d1ff389e4d09549873275113bbdbd27ccca1e32ac167da920d2e88306d4c1b17ed734f7529da4d7cb85ca793513be0df00cf736cb4cb3ac1421aeb5ed4fb0dbeaaf02fa9f83b41ba2aa9baa012b400d345c93ae34218b0b693449bf1ba3e63f3cd267eab8a1606a5e806f7b203506e7f06aee34df43f69c9607fb4fa14a58b378475649b33922e578b6d1aadee3cf7f06a84f9c181bd3348aeb2e00d35e88f66e3e9a4ffe2b12bf4bea3ef84ce3410b09cd3af722b1d0b0bae2c9c7e011fd720aa88030000",
    ],
    [
      "ETag",
      "eiLHUMWRnt22SXMnR8Jm7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-22-1642558309587",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "6e9b4010fd95d5f6a5ad7c01638c6d294a5d1bb7488e9d024e945e649665219b004bd8c55114e5df3b409c8b2a250f7d623573ce9c33c3cc3dbee67984a738e4c94dc5cabb0f5722c41dcc144920ea9351fcb350a7ea5a14979bd9be18c763e3f6e80810bc6649921529eb4a519594c9e9d6eb25a5a80a520ad18542ddc1a0ab8f8603d31c1bdac41c5bc0932c8d573cbf06f6a552859cf6fb07ed5e224492325270d9a3227b8af7f7837e518a2b4695ecbf96ec838aecbf2d7a9c0a4a1417f9d1d603039564e58e6584a760e19919855f5e97ee7192f51200ef3965845251e5aab60525a8c8639e546553154fef7163f3c5037bf6ca9efbe8730779b3a5bd9bcf3cff63201508048848e4f9aeb3fef6a97e06bbdde56d16a0a5bb394141c9a8282319a0f3efb66b2314f02840bf2b4d33183a46b3f5e265884268e32e6c177dbd4087ea336fde6931f0422be7c4f191ae6968b35c7ab68f34b01f31a978de98f74998b2daf8e37c9d7fff6a4d208a48d62677963622fa589b847168515807338c351686e3d03289116a743264c328640478aaaedeb0482e729d5983480f093175cbb2e231d3ccc9c4988c42238c686c1a86cec2d81ac4f8a1836f4baed882cb4248de0e199fbb8e6fef7c77bb9ecf7cbb69232655aa16adb9ba89973e1534b9d3341d806ff4f65067b900b5faaf396bdf766773df39b3db4559b184d03bef06562526a964802625c99862e589886070f874e339beb359cf56c068fefee90121f1f4d7fd33c1bf2b9a49abe65b6b8d868dfe017046d2aa41ecdb0786f443e7bf2a5850e10f20e02c5a32feb1b5dd0bdc865c16b392e5f4fd0500709378f7ba0fa7065838369081ad541cd68dca5a8496ac5d3b9ed5660e6c431f6a63dc804bf54fce1c9a87d9d635ea8a2c63b97aeca83db57a544daa924f2048c2b6ace1d220fb17e00ba111ea040000",
    ],
    [
      "ETag",
      "Ta6fZptPtkophOAvp8f83w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1642558309587"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff9d54db72da3010fd958efa58702d5fc066263385c44969080470f2d2c9308abd065161b9928052867fafec10435b4a212ff65ece91778f76bd46df681aa3067aa6e3ef7310abf76350fddc18809c3325f52be3a9045441a0c85823fb3f5532086ffc8f6cbaba6d3d827cbc5c92fec58546c8680233821a6b945060b1448daf6b949219681a8d3540adb2dc6e77c3e02618e8c08cc779a0fbd0e9345b9d006d2a258144119fa76a743631a142aa51e194c4613868776f8ef31879134d774cd9799431a43188f338341b91381620e5993c2e4724cb76a456afd7099addff889fc682d3f80dcc053d97c1d462c7b8eef49ae1717c4cd4de155d35c3e0385e2a32dbab296cdf05c3b079777f9c351a4d96b353a47eda54d0943f0f2001016904f9f867824f2152ed7cb3a4fe3a83aae47311417e791a5c24c682cf332238afea48d5b2aab8e658aeebd9a6ef7a750d643c228af254631f86ba36a4b8226cc0977ab190a501a230f58e25c573a1c36ed1c3a200bc5a1d2a48e97ce193542a7de86b804db711e713fc286a35223e2bd3d77abe1994ae6b1bb8860dd7337cbf0c2684c91d448939fc23e559397d57a2699955d3aa9abbaaf3a34ddf74eabee3d6ea9e1ff807d0efb0d5c076033b4681313f9866710ffb42d40e087105292d9d614418dde912cbc2774f1101db9e816d6c60c733eace298dff96b2eab6e17b7ff755fb43051f63df392440ad1460dbf9d376365a2b05f25e703d6812f219335fe6ed92e72de9b569e485545044f49ffa33552ffee617310ad2da06060000",
    ],
    [
      "ETag",
      "QztfRTG9/ljyKBVesVCwaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 19 Jan 2022 02:12:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
