const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1620919035659";

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
      "82",
      "30",
      "1400d07fc95a1c3450a43b3050c2c38e6080b26134dc02528521541e9dfe7b9d7ec2393fe8cc3908910f6d0377f48ae6f3565ff3b5d7edccbc84e8f4aebd69049f764e151b8f6c99e2ab649b75432f123da60a6fc3e952639b854a9987c7593319f125c37578648b96e34cfd6c05732a0a49529125083f9cf171602aa32694a9cbf4dade83bc79216e71cdb062a5f82493a0e3f160e8a15b6e0c7609273ccb0fec9126002ad5365e9251d6d456f430c587fd7730c67a83bdb1e8543f5922792b6e24b76e9e5714f87ed4ac0d55b225f63a9f5689fc855608a6aeee41e4f5938b555d5fa17f7b3ecc1d3c034c38f7d0a3df3f19224fb91a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-1-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6fda3014fd2b91f75a20400209125a114d572412b624b4daa629b28d93ba0d318d1da6aae2bfefda298caa52fb14dbf79c7bcefdc80b7ae4d5064d10e1c553c3eae72f0f82a00bc4142ee075e83769bc4f8ad1e6e6f1de7197bfea950a67d32920b86649bcdd95ac234553532627eba45bd4a2d9e15a880e24eaf43bfdd1c0f6fbbe3d7447ae0f34c9ca7cc9ab4720df2bb593935eef28dd2d84284a86775c76a9d89ede7bfb416f578b074695ecbd55ec8188ec7da8f9b514142b2eaae93a01fd46b23a635bcc4b70f09fb821976f337739de760b00ef39659852d1544abb82145454392f9ada64459317645c9e1d50122c83796a515136db2aabf0965d581bac70a69e77ccba8e57a1b588ae5771384b17ab284be6374138ebce57cb751825d6dd4d100796c2a464866b4dad4b738be002fa1b2615af8c7aaa9fb5f26b7f16ef87a209202d591bccc6f608f73ddb273919d3dc1bba24b719211e19bb78486cea3bccd910868167440d0b57a2a2d81df4478e9f8d1d9f648e331e65de100f32e20e09259eab59e87081fed65cb12b2e7742f2b643e82e5ea44196c6eb683e4b0353428e9b525db5c67401e71e151408a00f6a3ae82817a0a4dbbd88d2209ecdd3c56dd04e78c90a4c9f932798718e4bc9008d6b689e62752836d03014cdc2e00ac06662df8f418926bf5f90eeb97671d6f2133d85016abbca7c5192c68be89bb17344dce2b231907d7bd065e4bcd4a60f7f00082bda26413fd641fc13b54f31cb59cd2afaf930016c029ffd68c7b507282c3ea8480577d81c2ab506ad59bb41dc147b627bb6677e53856bf52e36f0bc63cf740e9d916d59a55e0b6ad71eea6cc51a79024110861f995e1dfe01117f1cfc74040000",
    ],
    [
      "ETag",
      "39uTRvSg6dHkh45LZrOtMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010c7bf8bf74ab4d036d982d407b2661b13255d42b587a9428e7d30a7c6a6b6c91445f9ee3bbb5d5aad93e80bdc9d7f27eefefe7320f7427192908d681e7a30fb770db8ef3e5881eda5b3f8eab4b24022028e3648deae9b871fefbfcd54561693223bdb6eeeaf8af4f21209cb7e414b497220b500c92d497e1e88a22d601bd3b26f5515b288b87de78beb7295155f306f35f779719be7e93c5f9063746ae4d4d12af06f68bb3b4664ab372ba8c18062e067e98cde0273995fd3d2b69330b2ba370c2c097038688cee3b6ab41e6165148fe2e9d97816cfc6e793e964869cd48c3aa1551000c7234e3b2a57fa372e49e273244c8871e13a3c7758173c2ce2c3ac28a71761be9700654cf7ca5583602d8c758fe2fd059f44f89794f48d20de94904350038a8319a2445751ce0d583b486a5bd1ae3b61f3e5327fad8ae2460b3e0ceec40020ddee047cce97e9ffa4457f3d6b7595968b578475e89a135266d78b75995edf78eeeec908f3bd037b63349aca82f7533cbef838f9301d3f5aec93f6b6c3ef24cef4101146f14ff92a1c496a2a2d1cff004cb9702d87030000",
    ],
    [
      "ETag",
      "USgqW/J9nITN5NI2jbkDNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:19 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `first_name` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553796f9b3014ff2ac8fb67d37290830422555d96b28d29251d21adaa694a8c7930b70453dbb48aaa7cf73da0e9b14aad8400fb77bccbbe27d73c8fc984443cbd2941ee3e5c8988b408689ae26e6ce6ec737a123a908772f6f39ace85e3dc1d1d2183572a45b745066d254ac9404d56cb4e2a45595029441b8ddafd766fd4379d9e630eac91e5a04c4196cc797e8de2bf5a176ad2ed1e42775221d20c68c1558789ede37ef7b6df2da4b802a655f765c42e0651dd37631e678251cd457eb45a62fc52815cc396f20c337812c6d19797ce1d4eb79d14c9b79c01654c94b9aeb2420b26f284a7a5ac5dc9e49ed4593efb214b77eece42639370a9f43aa75bd8185419ebb5045566ba656c78fcb0535c1bdf82c5a9b1c10a139e81da18173fdcc0351a8ee71b2bdf7797a1f1f1f893f13d58acce8caf9735d67ae18f79c5a034cfebac421a655065f4d037eff5b02a01d5544103aec7e688f66cd3899268cc127b60458909516447638b0e2293394318c61150d4e9cabd56d15ce4b63d76a2ded0b22935c7a635b606fdb10dbdd88a46602540471663900c6db26f913bc9359c705508c59bee918bc00bdd7518acfcd93474eb32128a4d3a6992ab8a789ea7c62291f4465dfb0ae5022355a3f0fcd00da6b3d03b779be9cf21a56cb7bcc1f9273453806c2ab1831ae4a988b169e46cb1f4426fe14fe7a8a8477a76602832f97dff24087745dd655d7fc93408a697a8a152d2dd7f18e6311a92fdfe59b8739a9535a5e6d7abc6ffb601480f6b795af5c9fecf1e9f16c153deb8935f2b37b824cd56000948c8d9fb7347720dbc77570f3707a97877308ad2b8c643c654158349680e1bdfd6d91ed4f8b2484d96fa1536340787ae561e95236c21d70f053537a7ee530595ea9184209e11dff3bf23fa0f73f0baefb7040000",
    ],
    [
      "ETag",
      "d0nc+gDT9enTrCJkaLo99w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "41",
      "6f",
      "c2",
      "30",
      "0c85ff8b776d35e8065291765851c5ba21340a9c2684426a4a206db224dd8410ff7d4e98340ebb24b6f33debbd9ce128da0a46b015f56787e67457a39bfba244db4967e9d2aab50811a0633591d2b4fa317bb3afc5c0dd9b6cbc4f2b23e74f4f4458bec786c1e80c3b81b2b230fa3843cb1a24d96663c246c2dc49fbc9625916b309f58daa7c3f5b4da7cfd934874b74a3d2c73f45315be693bcfc4fb2be447050db127768b0e5e84d68a30ec85de1f359d66889b1559de16821c0e1a136aad3cc2815d3244ee2fe30e9a5fdb4f730180e52e2a4e2cc09d512ba5a903570ca3159aa6f4a0709012694147417ce2f1ae7466048e19b7e3077fb3c665cc81b22f1c4fa7773767268df8d229716bdc1ded5ec58f9008e8239d361049cd167bf0877ed2f3fe73a2e81c9010000",
    ],
    [
      "ETag",
      "lrnp4BKsJI5t/rBCh9drlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:19 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b7282300000d0bb646d1d85f0497762412154a0f2df64f804451049b022747af73a3dc27b3f202b0a3a0ce47e6b6807dec1940968592c71af6ae454b2f2d6559275d343265fc945dfc5b96b377a02059fb575b0de6a5c8436cf4a5918ebc8689b04cbde8a3d0fd176160666918f194247bdb43135d3d61b57290edc435d0422a2b8b3999da5fe43f5e82e16147f73fc94b519e743edb76f7194b0828be77980caddc19942a3d4940cdb9ae9c321cc897c6804a837b8194ce1f55485df892e9e4c75dfb8b3fa25add1d9c59b3c3f275572f4a02eb4fb3145be0416803efb9ad381d42fae2821b400ff76729f7afa0ad068c62907bf7f9438de181a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-3-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "40",
      "10",
      "fc",
      "2b",
      "d6",
      "f5356013638391504389d35081498d49d45695753ed6ee25c6e7f8ce4951c47feffa1c68a248c913bedd999dd90f9ec81d2f366444129eddd750ed3edd8a849c105034c3e84fd973a32f93b5f4bed903f7b1be3277177f1fc76344f08625e9b6cca123455d3190a3f5aa9b55a22e692544070b75ec4ecf3db5bc9e67d98eeb78489390a7735edc21f98f52a51c99e641ba9b0991e5404b2ebb4c6c8f71f3e1d42c2b710b4c49f3b5a28922d27c57f3732e18555c14e3f50af56b09550c5bca7374f09fb849ce5e57ee72baed66087ee00c2863a22e54e30a4b3051a43cab2b5d958c9e8876f9e283acfcb93f8d0c26f27a5bc405ddc289b1a18ac66a578271112e17c62cb858868b49345b06f16a7ae92f26dde972be5e042be3e6d20f7d43d12407cd35c6c6997e05f840fd0d48c50bad1e35e146f9793eb3b74b6908282da14dc603cba5bda1e525693260e9d07692d4822419260387da89c5bc3ef4370950e46951cda285287a43703c6a5b71620d4fe3be438771421d3776c0c5087353cf1e92fd0979acb882732e4b21793b217213ce223f8ec275309d44be6e21a575aece5b634d032f3d2a6c1041eff4b46fb25ca05233ee5910f9e1641acdaefd76c373c828dbadee71c729cd25209a56383c05d5426c706024982cfc7304eb8d5d1d92928c7e3d9166e68d8b17233fd2235c606357e95fb28ac259f055db3920ae695e6bc843fbd1b491f2bc31bdff8d403cd1b608f9bef6c31fa40d8590420505fb789908d6898ffe6887b347281e3eaa48856fbc1c261b0d56417b415c377b60f7addec0261a5ca937395be78ee7de54842d14eab9a1f6ecb1cf56ac964710",
      "2671f9819ed5fe1f2c16be2074040000",
    ],
    [
      "ETag",
      "Zs16TBAUs9J376wuP/yFxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93616fda301086ff8bfb3568504a3a22f50374b4b0a6d0412a4d9aaac8b52fa999e3cb6c078a10ff7d97b463d35a29fd92dc9d9f53ee5ebfd9b39fca4816b14795ffaac0ee4e72f0dfea6009aed2ded1ab44e380050c3ccf89bc7abef93eceb67a7a1eaea7b27f7af3e969f7757b714184134f507016ed59a6404bc7a21f7b667801d426505785499b2c607e57d6c555b29ccdaf292f50d6f9fc3e8e47e378c20ec1b15172cfd386ff40dbc321606b7c5c4206168c807a96d2e21a849fd56b3a5e941a3a0e2b2bc0b1066e0e728b55c92d62872a9d7ea7179e7687bd61b73f080743e2340aee151a42ef57341ef3e8b95ee2969664bd3e11b68969e1ac796ea8ae64b3481dcee64978d6ccf72fc085c0caf8b415cc9475fe45bc3fe0ab08ff939a7f10a49b52ba0dcac148b06d942a532ea505e75a4974292fcb23365e2ce2b7aa186951c97670a35a00ed3747e02a5e8cde9396fcf557ab2fa364f286709e5c734492d9ed64958c6eef6aeee1d508e39d077767914ce5a0f653af7bf679701e765f2c7689b5ede83b91b715044c70fa53a6cab328e3dac1e1371988207287030000",
    ],
    [
      "ETag",
      "FxKXBfwlH76jHd32K/hyJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:21 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `ltv` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da",
      "30",
      "147e95c8fbb3695c120857a9ea689b754c34d0105a55d3048e7392b90d716a3b6cace2dd7792402fabd44a48c1fe2ee73bc7f603b9e369488624e0f17d0e72fbe15604a44640d31877b76e70325322e4edf8fb9f741a647fa79f2f2e8f8e90c10b95a2eb2c81ba12b964a0868b79239622cfa814a28e4675bb6e755be6c01a98ed4eb733409982249af0f40ec5bfb4ced4b0d93c946ec442c409d08cab0613ebc7fde6a6d5cca4b805a655f365c5261651cd376b1e278251cd457ab49863fd5c815cc29af204133c09c3e0cb4be706a7eb468ce40d6740191379aa8b5468c1441af13897a52b193e9032e5b33f64ee4c9c53df58257ab332a832964b092a4f74cd58f170bf93dd195fbde985b1c2d6229e805a19d7df1ccf312aced83516aeebcc7de3e3f127e3dc9b2e66c6c94d89d52a634c1282d23c2d73f83448a0c8b09fd4f8f5f11402aaa9820a5cf6cc2eb5fae62088821e8bfaed4e10991004fda0d7a1edc064031bec30008a3a5db8972a9a8a3400cb1af47abd2eb34c9b5976df0a2d0b3a6610f528d82d0b1843020dc9ae467e4baee18cab4c285ecd8b5c7b63df59fadec23d1df94ed94644713a6755b8a289e739353689a437fada15281758a918fed8f51d6f74ea8faf9ceabc271053b69ddfe389473451806c2ae91a34c80b11e2d0c86c3a1ffbe3a93b9aa0a23cc4d981a1c8f0c7c393c0df66e59475f92523cf1bdda0864a49b7ff6198a36b93ddee59b92b9ae425a5e497abca7f5301c4c25e9e562db2fbb9c35f8de0bdaedcc9e5c2f16e48b5e541041252f6feb923b904de7b9d87b782547c2d5845695ce32563aaa8c12454978dafcbb47bb56dd9a6454ab2d4afb06edb3a4cb5f0281c610da9de3754bd95724e0594ab4712827847dcb17b8ee83ff227bcffa9040000",
    ],
    [
      "ETag",
      "yNbBPsodi3gJxnObpzO+MQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "78",
      "6d092d94a4241e4051491ad40a8989216469875a683b65772b3484ffeeec62948397dd9d99ef4ddedb13ecf22a8521acf36cdfa06c6f32d4afe611a36a0aadf8aaa952080ea01619936970acee0ff41e36e5be6e8a75daeee5f1707bcb844a3eb114303cc126c7225530fc3841254a64d96a25ed46c6745b9bce43f43c9a7359526acad9228a46e3680267e74a54effe04d3d97cf23889ff932ccf0e6c691de3062556091a0fb5a42d267a6ae22951d605ba8a1a99a0020bdb4126a9a9852472b9e3f65d6fe077432fecf682411032575022744e15a38b37b6069ab428623a7038f01990f6c93937f6fc32ed20ec78becd614acfdabb06c27ea737f89dfb66befcd93c6e35aa1749ec52a131d8bd98bd23134073302d1b742011fcd74fb9bed4e76fcc6a2222c8010000",
    ],
    [
      "ETag",
      "d5xnDwoX9umqpulbdyqrxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:21 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ff1dd0c97282300000d07fc9d971400885de484459048950592e0c4b5844ca12b0d24effbd4e3fe1bd1f90e639652c99fb967e8277b0a63b659b6fad41464995cbd21c613fd6bc0b977d4df124297016c4206cb3120ea9ab5408dbb7e2c2f6223969561aad27dc09f7c5e31cf1bb41f271a2446832384247efc8d3ac3b74554d099b3dcc98c11dcff8435743fb508f0472c62a67f42eb4e4a1b5c4c176874452f058948bc5f18ac3cc06562dd575f7d0ad317c5b341cedf5abccb7c6dea57ed497ca29ab423fd6ad33ab0bd5e6961b1fd47e59203f182456c35ad46f2ed800fa1c9a89b2a4797105a8281bf06f4fe675a0af0044d3894ee0f70f67c09cbb1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-5-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbdabc210991a2354ae91a2d211d90760f4dc83817e696608a4dbaaaca7fdfb569ba5695da2f807dcfb9e7dc078fe496175b322109cfee6aa81e3edd88849c105034c3dbfa67b15dd3d178f6fdfeeb258b2eec7efa37b89f4e11c1354bd25d99434b8aba6220279bb09d55a22e6925440b13b59c566fd8efba3db73b70868e8b340979bae4c52d92ff2855ca49a773946e67426439d092cb3613bbe7fbcebedf292b71034cc9ce6bc50e8ac8cebb9a9f73c1a8e2a2986e42d4af255431ec28cfd1c17fe236397d9db9cde9ae9d2178cf1950c6445d28ed0a533051a43cab2b93954c1e8971f9e28384ded29b47161379bd2be282eee0c4da524563f55082751eac57d6c23f5f07ab59b458fb7138bff056b3f67cbddcacfcd0babef002cf5234c9c170ada9756a4e3e1e507f0b52f1c2a847fa5a2b3ff567f176289a80d2129a603cea0e696fdc75933419b1743c7092b40b49324e460e1d245de6da606f13a0c833a286450b51741ddb71c0edc5835ecf8e6d1b1f94f52066c3b1dd1fbaccc184e47042ee2baee08ccb5248de74885c078bc88ba360e3cf6791674a48699dabb3c6982ee0a547850522e89d9a0e3aca052ae9762ffcc80b66f36871e535135e4246d9437887334e692e01d1b4c2e629a856628b0d23fe6ce59d21d84cecf2189464f2eb91e89e6b172f5afe4c8f7080daae326f1246c1c2ff62ec1c115734af0d64df7ce832529e6bd387df08c4156d92906f1b2ff8419aab0052a8a0601f0f13c126f0d18f765c7b84e2e2a38a5478c6cd61526bb00a9a0de2a6d823dbeef76df39b2a5aa937317be81e7ba673e88cb083423d15d4ac3dd6d988d5f21984411cbe6f7a75f807f996a18774040000",
    ],
    [
      "ETag",
      "uZndOa78AXwKPcTH42fxRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93516fda3010c7bf8bfb1a5418858d487d081bdbd0027410b487aa8a5cfb92b9737c99edd051c477df39edd8d44e4a5f92bbf3ef94bbbfff39b01fca4816b35b55fe6cc0eecf4af05f43b006d768efe855a371c022069e97449e270b0ddbe1c39792ff92f7df86d387d9ae4c2e2f8970e23b549cc5075628d0d2b1f8fac00caf80da04eaa632799b45ccefeb50dc64ebf9f213e515ca902fb7699a4cd3193b46a746c93dcf5bfe156d37c788dde1ed1a0ab0600484596a8b7720fc3cace978556be8396cac00c75ab83d282d3635b7883daaf446bdc1f84d7f3298f487a3f168429c46c1bd4243e87643e3318f9eeb35ded3926c3024c2b6312d5cb4cf1dd5956c1709e17c998d2fdaf9fe05b810d8189f778285b2ce3f8af7077c12e139a9f92b41ba29a5bba0128c04db45a93ae7525a70ae934497f3ba3e61d3d52a7da98a911695ec0677aa03d07e77023ea6abe47fd292bffe6af521c9662f08e7c93527249b2f669b2c595c05eee6c908d3bd077765914ce520f869d0bf78377a3bee3f5aec3d06dbd177626f1b8898e0f4a77c569ec505d70e8ebf016cc1494f87030000",
    ],
    [
      "ETag",
      "/AMleU3zKgaxdwW3BzEvgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:23 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `ios_app` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10fd2a91f7cf26f547d236695209b10e3216a9a490a630344dade33899218d83ed3055a8df7d17a7501812489552fbbd77f7eecef788ee5899a2094a587e5f53b1fd74cb13d44154e11c6e7fcaed65ed96332f8de4e930c847f3a424f9d1113058a392785315b42b792d089593e5a2970b5e575870de85405da76b3903d3b33c73683bb60732498b6cc6ca3b10ff51aa92937eff29752fe73c2f28ae98ec11be79beef3f0cfa95e0b79428d97f9db10f4964ffdd9cc7052758315e1e2d1790bf9654ace806b3021c1c8469f2f575e41ec39b5e0ee40746282684d7a56a5c4108c2cb8ce5b5d051d1e41169972ffea0853ff34f6263cdb85ce1aa5a1b581aab95a0b22e5407aed3fd4d75677c8fe6e7c61acacb5841e5dab8fee147bed17282d05886a1bf888dcfc75f8cb368bebc30bedd68ac73080e8e522a152bb59f1827056dbcec3b16bc1d5323c00a4bda82abb1e960cb35bd244bc62473877692993449dc646ce36162126f4447694231e854135dab70c94bdb1dd92e692456eab823e2e1b1498636b6dd6cec38c334f52c0b67d610ed3ae8af608a9e325971c9dabea1eb2888fd551c2dc39369eceb32320c1d3a6dcd3545bcf4a9a04820bd53d7ae4119874ccd108230f6a3e9491c5cf9eddc6734c764bbb887c967b89014d858e00d55549cf3149a862ee68b200ee6e174060a3dcc8b278644935f8f0741bcad749795fea269144d6f408385c0dbff30f0e18cd06ef722dd152e6a4dd17c7d6ae33fb400b2a096c3698076bf77f0eb2078df6d7474b9f4a31bd45e4534a38296e4e3b90359031f6de9d3ce0015b606b2480567786444363988a0ed63631bed76af1e0d5d73803459a83798075de81c76a5894837b454fb82da9dd17d6aa05a3e930084371206e119a0ff00",
      "46015547b1040000",
    ],
    [
      "ETag",
      "XsyQu8nL9dRsD3Ig4Obncg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "50",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "fd",
      "2f",
      "d7",
      "d7",
      "2d01942523e1017451e2009d92180d2165dccdc1b65bdbce4908ffdddb62020fbeb4bde7e3e69c1e6057d41b18c0bac8bf1a54fbab1ccdb37d24a89bd268be24d51ac1033422676510deb48f3aff799f8cbea7d4caf8ae7d9bb6c3212b74fa899580c101b202cb8d86c1c7016a5121db562be536b2cceca545c6f3791c8d660c54b4b1c06c11c7a3711cc1d1bbb0c9ddd93299bd46f751f29f6579f4604beb04335458a7685348455b4ccdc416d4a29225fa9a1a95a206277644aea8914211f98cf881df0d7a9db01b76aefb413f645d49a93005d52c5dbc70343064449950cbf5a0c702e59edc3473e737c34635e85ad8a1ebc25dd29928f599ef597ef9b777bc37a89f1471468d365ee714f5966c7cc3b5ec6e0f52c17ffd5098d37cfc055f1da118c8010000",
    ],
    [
      "ETag",
      "694wKsgxZIAvMowpLDwXMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:24 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb64ad8ef2d1d05d500c1a8162e9d8ae321a43448dd07c5aa2d3bbd7e911de7b803d635c6b6ada0bbf8117e0f65e346223d2c1988a23b9b713a6aef5349ccbd8cf137991f966bb4bacf88e22b1d264e795eba5d409cc6939ae0f02a638cddd161de83126beb197dbc9ac16106712ddcbda779bebec16e2fa6cda82924457cd279cfd845485ebee6d15244d35b9a7432f405f3cb005c2d90e42bb388d0d733a91d746f5c613e3b09566438a0a2d2b55e35e1515462e9bcce37ef8d18aec9cc2736bede21dbd1227b508a6595f308b993d0dc100f0be6b14d7b47972fd308a06e0df4e8debf83320e67bc515f8fd031eb017781a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-7-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da3014fd2b91f771850408e121a11541ba4682b086d06a9aa6c8313799db10d3d8a1ea2afefbae9dd2b5aad47e8aed7bce3de73ef244ee78b9256392f2fcbe86eaf1cbad48c9190145737cbdbeb4bdbf419e565f879d3abe13b3c566fe70359920826b96a4bb7d012d29ea8a811c6fd6edbc12f59e5642b430516bd0ea785d67d41939bdbed71f214d42912d787987e43f4aede5d8b64fd2ed5c88bc00bae7b2cdc4eee5dd3e74ed7d256e812969bf55b45144da1f6a7e2b04a38a8b72b259a37e2da14a604779810efe13b7e9f9dbcc6d4e77ed1cc107ce803226ea52695798828932e3795d99ac64fc448ccb5707b2f617fe2cb69828ea5d9994740767d6962a9aa8c73d5817d16a6905e1c52a5a4ee3601526ebd9a5bf9cb667abc56619aead9b4b3ff22d45d3020cd79a58e7e616e205f5b720152f8d7aac9fb5f2737f82f743d1049496d0049381e3d1ced019a5593a60d9b0d74f3307d274980efab4973a6ce482bb4d8122cf881a162d45e9760783de96b124ed78a3c4751c9a0cfb2e24acef663d36e87b8ed325c733f2507105732ef742f2a643e4260a623f89a34d389bc6be2921a375a1e68d315dc06b8f0a0b44d007351d75940b54d2ed0ec2d88fa6b338b8f69b092f20a7ec717d8f33ce682101d1b4c2e629a896628b0d23e174e9cf116c26f6e3149464fceb89e89e6b17af5afe428f7180daae325fb28ea320fc6eec9c10d7b4a80de4d01c7419192fb4e9e36f04e28a3649c8d5c68f7e92e629820c2a28d9e7c344b0097cf6a39dd61ea1b8f8a82215de717398d41aac826683b829f6c4765dcf73880157ea5d6ce8754e3dd3397446d841a99e0b6ad61eeb6cc46af902c2200e3f34bd3afe039c33e0e374040000",
    ],
    [
      "ETag",
      "VH/6zIgbr+81uTkoCLUDwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614fdb301086ff8bf73595dad1161a890f2deb46b4d0d2364c48138a8c7dc9cc1c5f663b4555d5ffce39b082c6a4f025b93b3fa7dcbd7eb367bf95912c66f7aafcd380dd7d2ac1af42b006d768efe855a371c022069e97816c5697093f1baef0f6c7fcbbdb29bce5178fe7e74438f10b2acee23d2b1468e958fc73cf0caf80da04eaa632799b45ccefea50dc64eb64f18df20a65c81737693a9da57376888e8d927b9eb7fc07daee0e117bc0fb351460c10808b3d4161f40f824ace978556be8396cac00c75ab83d282d3635b7883daaf44e7b83f1e7fe6430e99f8cc6a309711a05f70a0da1371b1a8f79f45caff19196648313226c1bd3c245fbdc525dc9769110268b6c3c6ce77b0b7021b0313eef040b659d7f16ef2ff822c2bfa4e61f04e9a694ee824a30126c17a5ea9c4b69c1b94e125dceebfa88cd96cbf4bd2a465a54b21bdcaa0e40fbed11f89a2ea7ff9396fcf5aad59769367f47384fae3922597235df64d3abebc0ddbd1861b6f3e0ae2d92a91c043f0dfac3b3d1e9b8ff6cb10b0cb6a3efc4de361031c1e94fb9549ec505d70e0e4fe0265a0f87030000",
    ],
    [
      "ETag",
      "buQHIa84QoXVEKsyioXaCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:25 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `date` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8553eb6e9b30147e15e4fdd9a45c80040891aa2e6d59879492969056d53425c618e68660824da7a8cabbef60925e56a9952211fbbb9cef1cdb4f68cd8a048d51ccb26d4dabdd97071ea30ea21267b09bfbb667ada31b5b4fb65b039fe9b36ccbb2931360b04625f0a6cc6957f0ba22548c17f35e56f1bac415e75d30ea8eba866deaaee1ea03cbb65c90099aa75356ac41fc47ca528cfbfd63e95ec67996535c32d1237cf3bcdf7f34fb65c51f2891a2ffb6621f8a88fe87354f734eb064bc3859cca17e2d68b5a41bcc7248f0224ce2ef6f9d7b0c6f7a19901f19a198105e17b2490516841729cbea4ab9a2f11352295ffd41736fea9d47da2ac192ae342cb4e5b2a2a2ce65475bb1e4b053aeb51fe1ec4a5b416f29cba95869773fbdd0d35a8e1f688b20f0e691f6f5f49b7619ce16d7dad9bdc23a0767c892502159a1924438ce6993e2302bfffd0135022cb1a02db874741b1b23dd8dd3d821e96860c5a94ee378143b161ec43a71877498c414834e36ee4a850b5e0c4cc371cd211eea96435cd3a1ba81edd8c5c4c669628e06a6650cd298a668df417f2b26e905132517ac9d18ba0bfdc85b46e122389f449e6a23c5309e8b365cd3c4eb9c129a04d2077ded1b9471a8d48cdf0f222f9c9c47feadd79ef8946698ece65b38f314e782021b57784325adae78024343d7b3b91ff9b3603205853ac6eb2343a0f1afa71741b42bd594a5faa249184eee4183ab0aeffec320873d44fbfdab72b738af1545f1d5aaf57f6c0164402f2f2b13ed7fefe1d74170b35b7774b3f0c27bd46e8534a5152dc8e7e70e64057cf63e8faf05a8f05ea08a90b0864b4644538354b4bd6c6ca3d21ed443cb724ca4c8957c8739867d9c6ae3d138d20d2de4a1a1f6b5a83935502d9e4900c21d09fce012d07f53af1a0aab040000",
    ],
    [
      "ETag",
      "lI6E5kTQ60dqq1aB0Ogqig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f",
      "4f",
      "c2",
      "30",
      "14",
      "c5",
      "bf",
      "cbf5d12de9c69f08090f20134908d109d1c41052b6bbb9b1adb3ed2493f0ddb92d467de0a5bdf7f477db737a847d56c530845d967e3628db9b14f5b32942544da1156db5a8148203a8794ae4edf7f4b59b54b3a48d1fba5ebe7b637927388c4644a8e8034b0ec323241916b182e1fb112a5e228d6db7d2de48986e6ba34cc7ab80ba52c4a65bae178bf16411c0c9f93753effff8f97215cc82f0dac8e6e4402e76212628b18ad058a8a5c831d273934ef1b22ed055a291112ab0b03d48a5686a2e85704971ef5cafefb38137609d5ebf3720ae1011d799a8085dbf9035d042f3221407ca063e01d2961433b1eb979199cf5ce6bbccb3598ce4598b5721ff17f20db4f97962d26a544f52905d85c629bbb8be172689a6845a36e840c4e9cf1f337de94f676cb33225d0010000",
    ],
    [
      "ETag",
      "+zDW4fnGfydF41jbX0j3Ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:26 GMT",
      "Server",
      "ESF",
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
      "bb642d0ef24f77042ad1a00ce26774c3601a28080182c8a7d3bbd7e911defb0109a5acebe267fd601c7c802951e0922e4963a138a35a9f5d64c8ab23e7b3a4857d39d790c8892acb3a946daf364ee2c653d7211bf3deaf15470ab887b221bc4661a0e7c3b07227cf2932e2b45fca9ac7f070ebb5ed48a26bf2c029bee43edebf86dcb87a0f7cc74f6aaa48b78ac2f75ca3f509225c0b8f528a5db9dfcf28a5cd5e3fcfebfe158d4794fa7cf247bb5468fbb9a53767579e37814285e5cc874254b89a57c5694584c94afa6deeaa564fcc62b2c102b0b1c905ebe2fccd55750817e0df1e3fa786bd03104b0413e0f70f625d1aca1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-9-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbd826212f1222456b94d21529212b9056d33421632ecc2bc129369da22aff7dd7a6e95a556a3f61fb9e73cfb90f9ec83daf323223292f1e1aa80f5ffe88949c1350b4c0d73e95779b12e4963ef8f763af3a3b3b5cf76fe6734470cd9274b72fa12345533390b36dd42d6ad1ec692d44071375dc4edf19d86edfb5876367ec224d4299af78758fe4df4aede5acd73b49770b218a12e89ecb2e13bb97f7dee3a0b7afc51f604af6de2af65044f63ed4fc5a0a461517d57c1ba17e23a14e604779890efe13b3f4e26de62ea7bb6e81e047ce8032269a4a69579882892ae745539bac64f6448ccb570712792b6f195b4c94cdae4a2aba83732ba38a26eab007eb2adcac2d3fb8da84eb45ec6f82245a5e7beb4577b9596dd74164dd5d7ba167299a9660b8d6dcba30b7002fa89f8154bc32eab17ed6cacffdf1df0f4513505a421b4c26b643fb53db4df374c2f2e9709ce636a4e9349d8ce930b5993b82519602459e11352c5a892a9b384ecadc7e6283eb26233b85643a183a494601a6e3091bd2d421c773f2b7e60a2eb9dc0bc9db0e91bbd08fbd240eb7c172117ba6849c36a5ba6c8de9025e7b545820823ea8e9a8a35ca0926eb71fc45eb858c6feadd74e7805056587e801679cd35202a2698dcd5350af45860d23c162ed5d22d84cecfb2928c9ece713d13dd72e5eb5fc851ee300b55d65be248a433ff866ec9c10b7b46c0ce4b13de832725e6ad3c75f08c4156d93909bad17fe20ed530839d450b1cf87896013f8ec473bad3d4271f151452abce3e630a935580ded067153ec893d7246833131e05abd8b397de7d4339d4367841d54eab9a076edb1ce56ac912f200ce2f003d3abe33f5c3915ab74040000",
    ],
    [
      "ETag",
      "1asWOlesUaqIk5En++yH1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "86ff8bf735a8300a2b91fa21b46c634aa185304d9aaac8d897ccccf165b6c38410ff7de7b463d33a29fd92dc9d9f53ee5ebf39b2efca4816b3ad2a7f34600f6f4af00f2158816bb477f4aad138601103cf4b22e59533bb8bedf0739928d8dcde7cfae22e460fd7d74438f10d2acee2232b1468e958fcf5c80caf80da04eaa632799b45cc1fea505c67abf9e203e515ca902f36699a4cd3193b45e746c93dcf5bfe156d8fa788ed70bb82022c18016196dae20e849f87351daf6a0d3d878d15e0580bb707a5c5a6e616b14795dea43718bfed4f0693fe70341e4d88d328b8576808ddac693ce6d173bdc29fb4241b0c89b06d4c0b17ed734f7525db4542385f64e3cb76bebf012e0436c6e79d60a1acf34fe2fd069f45f897d4fc9520dd94d25d50094682eda2549d73292d38d749a2cb795d9fb1e97299be54c5488b4a76837bd50168bf3f03efd365f23f69c95f7fb4ba4db2d90bc27972cd19c9e677b37596dcdd07eef1d908d38307776f914ce520f869d0bfbc1abd1bf79f2c7683c176f49dd8db06222638fd291f956771c1b583d32f3d300e2b87030000",
    ],
    [
      "ETag",
      "d8snj/b3VgAieUDCJXs/5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:27 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `stamp` as __result, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b4010fc2be8faa595fc0063e38714a56e42522a073b18278aaaca3e60a1d70047b823a915f9bf7739ec3c1a29919080db99d9d9dddb4772cbf2884c48c092bb0acaeda73f3c202d029226789abb5e71f623f5166c39e8ffed9f5f668bbbd5c3d1112258cd12342b52680b5e952188c96ad9494a5e15b4e4bc8d426d436f1b564f1f1b63dd1c588331f204a4f18ce5b7c8fe2d652126ddee217727e13c4981164c74429e3d9d77ef7bdda2e47f2094a2fb3a6517b388eefb498f531e52c9787eb45aa2814a40b9868cb2142d3c33a3e0eb6be90ea3592741f03d0b818621af7259db428990e7314baa52a992c92351365f7c90a53db34f7c6d23246a6e342ab4f5ba0451a5b2a56d58b43f296eb5336f7ea16db0ba98a52036daf577dbb3b506e3b8daca75eda5af7d3efea29d7bf3d542fb76a362ad8334ba894048962b2f3e0d52a87decdbe5bc1d524da0920a6882eba16e5163a48f83381886f1c81c04b10e41300a86036a067a38ee433f0a80224fd6ea8a45739e87d4d4616c59a66150d3307b23132c2b1c80318e8610459635882118197db26b918792493865a2e082353d23d79ee3db6bdf5bb92753df5665c414fb73da98ab8b78e9536291087aa7ae5d1d651c33d503705cdff6a627be736537339f4142c3edf20ea71ed35400a269493390505ef0089b4616f3a5e33b73773a43861ae4e2801064f2f3f199e06f0bd565a9de64ea79d31be4d0b2a4dbff62e8c3c216ec5ea4bba269a5200aaffe1afdfb26400cace5f9af4776bf76f8b4085eee469d5cae6cef8634471ec450421e7e3c7704abc0873b7a5818c4e2ca601abc6b92e12d0b459d242ca1b96d2c5376f7ecfed0d2d5864b5aca37b191a11fda5a6bd48a90412ef715350ba31a55872af104c2205e12d771cf31fa0fd5c90d64b0040000",
    ],
    [
      "ETag",
      "nNRpFJlRPiS54x4GQmPqUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2",
      "301086ffcbede3ec689d152bf8414751419dab0a832112dbb356db5e97a41311fffb2e713061fb925cde3c7779df5ce098950974619ba59f35caf3438afacd1411aa3ad78ab78a4a85d000d42265f2757112fb2408c97d6ca9e1bbdfdf764659daeb31a1e23d1602ba17d86598270aba1f17284581dcb6d9483b91317dae8cb21c4fc3c5b23f9db3545062a4d96a32e90f26215c1b778dd5f1b7693c5b86c330faaf657d6dc081b611ee506219a3f151493a60acc726a2124595a3a3a896312ab0b0bd4825d59590440e2b8ee73a5ebbe9065ee03efb6d3f6030a758e88c4a66570bf6069ab4c8233a71426832206dc9617776fd62d97bf23baeeff3985618d83c56b536ff70ed1693f75cd370eb9f8706678d6a2e895d2b3486dd9bf91732813407d5b2c606c482ff7f94e9dbf9fa0d8eb84e79dc010000",
    ],
    [
      "ETag",
      "OSwahd9Eo0+4sGX5Ab8Hig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:28 GMT",
      "Server",
      "ESF",
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
      "2d0ef251e80e28883f2c0822dd303149c1b4601220423bbd7b9d1ee1bd1f0011225d57f6f74fd282173041cd9ea3f98e596e5921bf8885814768d03da19bcea2c15b76160a8dbc816b9b78417c85ac714a2fdf79aec90036a45e7eb57a72466ad0393e0d17cd54acd3b8314fd73533aa284dbdc46f95d552de335c4837aaed03af102f067d423ec78f7da6dc64b32de4f0cea05a260feb30ee30b4850a73eff5985997936e7d10eb28f4d68407168565e8a8999909d92746c3f37e6f1b1c437a6eaf1e66f9dd09cc7a3bf0be96fecac56006c8c86e8274e5edc9d54ddb9e817f7bd94f8c3c035c020511e0f70f4d2338dc1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-11-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da",
      "30",
      "10fd5722ef6b21e1472820a11541da2291b086d0aa9ba6c8712e99db10b3d8a14215fffbce4ee95a556a3fc5f6bd77efeedde5993cf232256392f0fc6f0dd5e1db8348c8190145737cbdbad93fddfb07dbf1a34d6dffec0dbabdab793e9920826b96a4db5d012d29ea8a811c6fd6edbc12f58e5642b43051abd36975065d67d419393d77e08e9027a1c896bc7c44f61fa576726cdb27ed762e445e00dd71d96662fbfa6eefbbf6ae120fc094b4df4bdaa822edcf45bf178251c54539d9acb1805a4215c396f2024bf8cf4c938bf7a9db9c6edb3982f79c01654cd4a5d265610a26ca8ce77565b292f1333165be3990b5b7f46691c544516fcbb8a45b38b352aa68ac0e3bb02ec3956f2d82cb55e84fa3c52a88d7b36bcf9fb667abe5c60fd6d6ddb5177a96a24901866b4dac0b730bf082fa2948c54ba31ee967adfc62d0e2e3583401a52534c1f8dc19d0ced019255972ceb261cf4d32079264989cbbb497386cd4877e9a00459e11352c5a8a728486a623368c33ead0b8dfeda771e2d26e0c144683becb58929e93e31979aab88239973b2179e310b90b17911747e126984d23cfb490d1ba50f3a630ddc0db1a153688a04f7a3aea2817a8a4ed5e0491174e67d1e2d66b26bc849cb2c3fa2fce38a3850444d30acd5350f92245c34830f5bd3982cdc47e9c82928c7f3d13edb9aee28de5aff40807a8cb55e64bd651b808ae4c3927c42d2d6a03d93707dd46c60b5df4f1370271479b24e466e385f7a4790a21830a4af6f530116c025ffe6aa7bd472c6e3eca4885775c1d26b508aba059216eba3db1fbb8112e31e04a7d88b98e7b324de7d019610ba57ae9a8d97b6cb411abe52b088338fdc09875fc076a54de4477040000",
    ],
    [
      "ETag",
      "GQvwYMy/0MTUu/Z3623GDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d936f6f9b3010c6bf8bf772440acb9f2d487d41b6ac43a3499650b5d25421d73ea83be3a3b6c91445f9ee3b689b4eeb24fa06eecebf13778f1f0eec97329245ec56950f0dd8fdbb12fc8f36d8806bb477f4aad138600103cf4b22c75757d5baaa46ef1feecaefd7e749b2dd2faee3b333229cb8838ab3e8c00a055a3a16fd3c30c32ba03681baa94cde6501f3fbba2d6eb34db23ca7bc42d9e6cbcb348de7e9821d8353a3e49ee71dff86b69b63c0eef1760305583002da596a8bf7207cd2aee978556b18386cac00c73ab83b282d3635b78803aa0cc270104e3f0c67e16c389a4c273302350aee151a622fb7341ff3e8b9dee06fda928523226c17d3c645f7dc515dc96e93364c96d974dc0df837c085c0c6f8bc172c9475fe51bd67f049857f49cddf08d25529dd07956024d83e4ad53997d28273bd24ba9cd7f5099baf56e96b558cb4a8643fb8533d80f6bb13f0355dc5ff93960cf6a2d597385bbc229c27db9c902cb9586cb3f862dd72374f4698ef3db8b545729583d650e170fc69f2713a7cf4d8676c7d47df89bc6d206082d3aff24d7916155c3b38fe01dfcdabbc88030000",
    ],
    [
      "ETag",
      "4WWmPmm3+qhgKXGIISyEXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:29 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `first_name` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3010fd2bc8fbb249690249482152d5662ddd90529211d2ae9ba6c418c39c124c6d932daaf2df7798a66d56a9959000bff7eede9def1ed01d2b12344431cbee2b2ab61f563c462d4415cee034bfdc6cecefe1789ee64ef7fac76a1a6353642727c060b54ae27599d323c92b41a81cce67ed4cf0aac482f323087464758fac41d7742dd7ecd903db059da4793a66c51da87f2b55ca61a7b3cfddce38cf728a4b26db84af9fce3b9b6ea7147c4589929dc3941dc8223b6f273dcd39c18af1e2643e030395a46241d798e560e15999c46787a1db0cafdb1990378c504c08af0a55db8210841729cb2aa1a3a2e103d2365f7ca09937f6ce2363993221d5a2c06bba34b034160b416595ab96b1d40e1e0fcb3be3329c5c194ba8326539954be3e6ab177ac613cd0f8c791078b3c8f878fac9f8124ee653e3f3ed1e6e1d24028309958a15da5e84e39cd6d61e3be8bfbeb75a801596b40117c7e6005b8ee9c6697c4c52a767c7a949e3d8898f6ddc8b4de2f6693f8929069daaa36b152e78610ff0c0e9110bf7cd18983d9c5871d2756cc724e9c0b45c622529b1ec14ed5ae88f608a5e305972c99a36a29bd08fbc4514ce83f351e4e932520cddba68ccd545bcf4a9a04820bd51d7ae4619874cf59df841e485a3f3c8bff69a3118d30c93edec1e0621c5b9a4c0c6023aa8a8b8e209340d4d27333ff227c1680c0a7db7d33d43a2e1cf876741b42d7597957ea351188e6e418385c0dbffb05914fac117b4dbbdc8778df34a73b440ff3509360d80e80a069133699ed1bfba483d8abbd63303865451eb10feb583a785602b1a0fe8dbdc0b6f517314d2940a5a90f7a703c81a7877b9f79b065cd835482315fcc32c12592721823633c9d6b599bdbaeff66c0769b250af30bbe7ee9b5fc7a823d2352dd46345cda6e96ed650259f4800c228054dafff01c08596d7e9040000",
    ],
    [
      "ETag",
      "lFvv5XRLUfl82VZjPba0rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "ff",
      "97f395e9368504121201892e2144a7c418434829b759d876b3ed4024fcef5e8b0fc4275fdabbebf7b5df2f3dc046552be8c152e59f0deafd458ef6c915299aa6b086b79a2a83d002b4226765517f273a7bbbb9db9589aa5e879d5d7c45837e9f15467e6029a077804c61b132d07b3f40254a64db62a1fd8d2cb3fbda4d9e5fd2647acf7d492bd74f6793c9603819c3b175e6aa37ff71cc8f2d58d332c50c3556125d865ad31aa54d1c9e11655d6060a8d1120d78b13fc83535b5d044014f82280ea24e1c76a36e78ddeeb4bb2c2c480aaba862edec99a381252b8a94764c07310bb42f1934f3eb96c763add053b806d7a8b7a44c788b5f3ec5a5a4d2273eb78c8454c5994ba2b018fdb5cc7f9f1fee2d9a474dcc62d0618427a41139b5657cab1b6c8114fc230fca9efae30f77ba9010ee010000",
    ],
    [
      "ETag",
      "lpzIrfY4DwmIinWB6w2/oA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:29 GMT",
      "Server",
      "ESF",
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
      "02ff1dd0cb7282300040d17fc9da3a9a8421766752208082c054281b2660482922c8a38a9dfe7b9deeefe6dc1f208a420e4336b6b5bc8057300bb859164bb72334539269a99a02ca0f355c372ad1fbe681556284b1670ea7dc6df6bb2840ce45953d5605e62865679d3c236838968f02da7e8c047ef59f4562d9685a8b637514247ac4383a4da97c1016a0b211fa614b240befb3be7d89b153a7106362dcda207d8b951d6bfc3856c9ec99f62e92e40071e95bacf42b4e6b6ae6ee55ecbf9d5d3eef23d61a57b1a26d1832efc67956c4b5bf9ab3779bc39657c9794216580079efaa5e0e59f5e4226db359807f7b36ce9d7c0ea052f4b207bf7f615c62a51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-13-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "a3",
      "30",
      "10",
      "fd",
      "15",
      "e4",
      "7d",
      "6dae84042245db28a55ba484740969f7a2153230b06e09a6d8a48aaafcfb8e4dd36d55a97dc2f69c33e7cc852772cfca944c49ccf28706eac3973b1e93330292e6f85aedbdbb1fee2dd86b179c83ed5ade8dfcf5389b21822996a0bbaa808ee04d9d80986e37ddbce64d456bce3b98a833303b83f1b0ef0c9cbe698d2d0779028a6cc9ca7b64ff95b212d35eefa4ddcd39cf0ba01513dd84ef5ede7bfb61afaaf91d2452f4de4af65045f43e16fd5af0844ac6cbd97683061a0175043bca0ab4f09f99c6e76f537719dd757304ef5902344978534a650b5324bccc58ded43a2b993e116df3d5816cdca5bb088d8417cdae8c4aba833323a59246f250817119ac5786e75fae83d53cf4d67eb4595cb9ab7977b15e6e57fec6b8bd7203d790342e40738d9971ae6f3e5e503f052159a9d543f5ac949f1be4bd1f8b22a0b48036184dfa633ab0fb4e9cc59324b34d2bcefa10c7763cb1a819f7136704a334068a3c2daa59b4e4a5995267308ac7d1c071cc68348eed28b6b334b286766a9a43b026a6458e67e4b166122e98a8b8606d87c86de0856e14065b7f310f5d5d42469b425eb4c65401af3d4a2c10411fd4745451c65149b5dbf34337982f42efc66d27bc849c2687cd03ce38a3850044d31a9b27a15ef1141b46fcf9cabd40b09ed8f52928c8f4f713513d572e5eb5fc851ee200955da9bf6413069eff4ddb39216e68d168c8be3da832325628d3c73f08c41d6d9390ef5b37f849daa70032a8a14c3e1f268275e0d35fedb4f788c5cd471921f18eab93082592d4d0ae10d3d59ed8567f3898100daee5bb98694d",
      "4e4d53395446d841299f2b6af71e0b6dc51af102c2204edfd7cd3afe03adc9486f77040000",
    ],
    [
      "ETag",
      "pvIjXEWe8OEe9y8E5IVtZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010c6bf8bfb96486169d206a92fc89ab551c99f2654da3455c8b50fead4f8986d324551befb0eda65d33a89be81bbf3efc4dde387037b5146b2883da9e2470d767f5680bf6f8235b85a7b47af0a8d031630f0bc20f2ebe6c52de2bb6fabb828af9fef06dbe1fded3cbeba22c2896728398b0e2c57a0a563d1f70333bc046a13a8ebd2646d1630bfaf9ae2265dcf16379497289b7cf19024f12499b263706a94dcf3ace53fd0f6780cd8169fd690830523a099a5b2b805e167cd9a8e9795869ec3da0a70ac85db83c2625d718bd8a34a2f1cf4c2d1a7fe381cf707c3d1704ca046c1bd4243ecc386e6631e3dd76bfc495bb27040846d63da386f9f3baa2bd96ed284b3453a3a6f07fc1be042606d7cd609e6ca3affaade6ff04d857f49cd3f08d25529dd05156024d82e4a551997d282739d24ba8c57d5099b2c97c97b558cb4a86437b8531d80f6bb13f02559c6ff93960cf647abeb389dbe239c27db9c9074369f6ed278be6ab8c737234cf61edcca22b9ca4163a8b07f7e39bc18f55f3df6191bdfd177226f6b0898e0f4abdc2acfa29c6b07c75f6f1b69a688030000",
    ],
    [
      "ETag",
      "XSksNAKYPAgmDhK3j5QHMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:30 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `ltv` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b6f9b4010fc2be8faa595fc00bfb11425ae431354c74e304e6455957d070bbd0473843b9c5a91ff7b9723cea391120909b89dd999dddb7d24773c0dc990301edf1790efbedc0a466a04148df1747075f7f3dc9fc9e5f67c7bb170fbe333d91e3f1c1d2182972c4937590275298a3c00395ccc1b712e8a8ce642d43151ddead4ad5ecbb42ddb6c777b5d1b79129268c2d33b64ff512a93c366f3a0dd88858813a019978d406c9ecf9bdb5633cbc52d044a36df4a365145363f163d4e44401517e9d1628e060a09f90a36942768e18519b293b7a91b9c6e1a3182b73c001a04a24855690b5304228d785ce43a2b193e126df3d507993b1367ec1beb446dd70695c66a95832c125533d65afae930bb337e78b30b638de5453c01b9366ece1dcf319e61eed4584ca7cedc37be1e7f33cebcd9e2d2f8be3c846b95025a0a412a9e6a433e650994669e7ae6bebfa9924015955005577db347ad8169b388f58368d0eeb2c804c606acdfa56d660676073a21038a3c5566d72c9a8ab4dfb623d6b39809fdd0669d283481422b6a61e3ed560f6c1658663bb481ec6be421e70a4eb9cc84e455e3c88de7facecaf716d3f1c877741911c5369d56e6ca225efb545824823ea86b5f46b940a5f216dca9ef78a3b1ef5e3bd5c54f20a6c16e7e8f571fd14402a2694e37a020bf1021368d5ccee6aeefcea6a30932f46d5e1e10920c7f3dbe10fc5da6bbacf49b8c3c6fb4440ecd73bafb2f36f73d777a46f6fb577ad73429344613f45f25b0ad02046e71f40497e609fcd545eae1dbd75e1038960aacb7e1df7b7c6a04f7a0f240ae168eb724d5910711e490069f4f078275e0d3753eec166271bb50462afcc7590c642912e450cd24df94660eecae852fa2c1b97a176bb53b87e69739ca8cb081543d5554ed96ee66192ae4330883384ad3aad7ff00f2d900aadb040000",
    ],
    [
      "ETag",
      "8QkKHTOsYvHvMUI7CGs3Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "c2",
      "301486ff4bbd74231b5f66242482f1035d500778630829dbd92c6c3bb3ed4024fc774f8b5162bc69cf397ddff67dd23d5b8b32613db614d97b0d727796817e364504aaceb5a2adc252017318689e9132f1664de13da49e3cbfffac4789808b17b9edf749a1e2372838ebed592a204f14ebbdee59c90b20db6221ed8d24d3bbca4c6ec2c7c194da0213d38e6761381886d7ece09c98aaf5af61328d46e3dbff1cf383c356b88c200509650c2642257105b11e193ac58b2a0757612d6350cc8aed4126b1aeb8447469e2fa6dd7ef36bdc00fbc56a7db09489863ccb5c092b4b30945631a35cf23dc121c6b9240da923853bb6eccb81334fca6e5302dac406e5028ef123e6c8e468c85cd7c6a0ada8d56f7c71303d7e0ff35ccbf9f1fee34a82789c4a2c0607847a42b346a4df85ad6e0b098d387dc097dec0f5f6c2109b8ed010000",
    ],
    [
      "ETag",
      "d0U2i0Kf0r+JzuIdie7Vrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:31 GMT",
      "Server",
      "ESF",
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
      "00d0bb646d1d05e2407780d4f0fffa810d2331622c202601c54eef5ea74778ef071c31269c97e2f64d3af009a6a3a4cdf1dced55a3acb17fe89b482777c30d610c9fb2538b2bafdc6583f8a9e543bed834a1fa31e6c57e92d5cc70570a42b6e5584f378d93915f25bf5d43893b6b6e6e141e8f698c19b3a2ecf560e9c666855a2dbe2e035949c5c528993e74222992b2a7d1fe21d74177b6cff8609bf9f2e5b66a3db0208499a9fb581337b9caa254d1a50ab5969f7a9e4e4f5e6753692be01d21d3634824bb6d975bc9a5b0a05a8c614069b00333409e3d658497f4cd95a1a6cdc0bfbd14534fde01063932c2c0ef1fd67c01181a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-15-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b5c13421a488814ad514ad7ac09e90869374d133270616e01536c3a5555fefbae4dd3b5aad43e61fb9e73cfb91f3c925b56a5644a6296dfb5d03c7cbae131392220698eafdf46767573515f7f9ed03ccecacba1b7f97191cf6688608a25685917d013bc6d1210d3ddb69f37bcad69c3790f13f52cbb6739c3816bb98363dbb15de40928b215ab6e91fd47ca5a4c4df3a0ddcf39cf0ba03513fd8497cfefe6fdd0ac1b7e038914e66b49135584f9bee897822754325ecd765b34d00a682228292bd0c27f661a9fbc4edd67b4ece708be6709d024e16d25952d4c91f02a6379dbe8ac64fa48b4cd1707b2f556de2234125eb4651555b4842323a59246f2a106e32cd8ac8da57fb609d6f370b9f1a3ede2dc5bcffb8bcd6ab7f6b7c6f5b9177886a471019a6bcc8c137df3f182fa2908c92aad1eaa67a5fcd4a0e5dbb128024a0be882d178e0506b3270e32c1e27d9e4d88eb301c4f1241edbf4381e24ee0846690c14795a54b368c52b445067ec3ad1c8b2dc683472683419d8a308c0013b4d1d6b98ba647f44fe364cc229133517aceb10b90e96a11785c1ce5fcc434f9790d1b690a79d3155c04b8f120b44d03b35ed5594715452ed5efaa117cc17e1f2caeb26bc829c260fdb3b9c71460b0188a60d364f42b3e629368cf8f3b5778a603db1cb435090e9af47a27aae5cbc68f9333dc4012abb527fc9360c96fe576de780b8a245ab21f7dd419591b14299deff4620ee6897847cdf79c14fd23d0590410355f2f13011ac031ffe6a87bd472c6e3eca0889775c9d442891a4816e8598aef6c0b6adb163110d6ee49b986b8d0f4d5339544628a1924f15757b8f857662ad78066110a7efeb66edff01233a412077040000",
    ],
    [
      "ETag",
      "J45njKpW+8agbfmP2EOXKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d93614fdb301086ff8bf9b8546a06c968243eb4a38c4ea1a5693aa44d2832f1253338b9cc768aaaaaff7de7c00a8249e14b72777e4eb97bfd66c71e642d58c4ee64f9a705bd3d2ac12e5d9080699535f46ab036c03c06969744063fd6d5f432792cbf7fba39ff896df8705a2d9767674498fc37549c453b564850c2b0e8d78ed5bc026acb51b5559d7599c7ecb671c5559acce6df28af50b87cbe8ee3f1249eb2bd776814dcf2ace33fd076bbf7d83dde255080863a07374ba3f11e723b736b1a5e350a06065b9d83611ddc1d941adb866bc40155067e30f0c3cfc3913f1a1e076130225061ceadc49ad8f58ae663162d57093ed296cc3f264277316d5c74cf0dd5a5e83671e16c9e8627dd80af019ee7d8d636eb050ba98d7d52ef1ff8acc25b52f10f82745552f54125d402741f259b8c0ba1c1985e124dc69be6804d168bf8bd2ab5d028453fb8913d80b29b0370112fc6ff93960cf6a2d5f9389dbe238c25db1c907476355da5e3ab6bc7dd3e1b61b2b560ae3592ab0c3843f9c393d3e04b387cf2d85774bea3ef4456b7e0b19cd3af72292d8b0aae0cecff023bc3160588030000",
    ],
    [
      "ETag",
      "5VUmEHRwgJ+WDZou6k8mQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:32 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `ios_app` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "c8fb67d3d20492407e48559ba5ac434b490ba455374d898183b9259862d32daaf2dd7798a66957a9959000df7bf7de9def1ec82dcb633226214bef2a28371f6e78485a04244df1f4b337c983b3efd399e9bb7df8d19b99e18dbc383c4404ab5982ae8b0c0e04afca08c478e1b7d39257052d393fc0440786854f571f1923bd675ae6087902b264c6f25b64ff96b210e34e67a7dd4e394f33a00513ed88af9fce3bf7dd4e51f21b88a4e8bc94eca08ae8bc2d7a94f1884ac6f3c3858f062a01e512d694656861cf8cc3e397a9db8caedb2982ef5904348a7895cbda16a688789eb0b42a5556327e20cae6b30fe2db337b1a682bc6c59216c54aa3425b2e4b1055265bda4ac93f1e16b7da576f7ea6adb0c484652056dad537dbb3b52798e36a0bd7b5fd40fb78f4493bf5e68b73edcbf52edcdaaba0b5188464b93216d03083dad463ef9cd7375613a8a4029ae072a05bd418eaa33009075132ec9961a243180ec381497ba11e8dfad08f43a0c8937576c5a239b6231a5a60e866388c132b347523ee59a1dea7666c8ecca1d9b70ca3df8f4643b26d913f259370c244c1056b1a48ae3c27b09781b770a793c0566524145b75d298ab8b78ee536291087aa3ae6d1d651c95eadb70dcc0f626d3c0b9b49b0198414aa38d7f872390d04c00a26949d720a13ce331368d9ccf7d2770e6ee64860c75abe73b8420e39f0f7b42b0295497a57a9389e74dae9143cb926efe8bf981e7b8a764bb7da67749b34a611441fd3502f74d80c00d8e2067423f86bfaa483584dbd61e81e329c17819feb5c5a745701f1a0fe462617bd7a439f2208112f2e8fde940b00abcbbd6bb1d432c6e19ca0889ff388b91",
      "a845a2129a9964ebdacc8e6d764dcb220a5cca57b181d5dd35bfce51678435e4f2b1a266c75437eb50259e4018c451729b5eff03c7225a36e3040000",
    ],
    [
      "ETag",
      "+RAnTMKCL5SN4eZ3L5bjtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d916d6bc2301485ffcbddc7d55115dd1484a91327743aeb848d2112dbdbaef6e57649ea26e27fdf4d1c286310da9bd3e7a4e79003a4491142173649fc59a1dc5fc5a8e766f051559956fc2aa950080ea0163193f3bbb9978ec4dbe2b5354e6fddf07ad87c7ae8f77a4ca8e0037301dd03440966a182eefb010a9123dbd66b694f644cef4ba30c66336fd49fb290536884e9d2f3fa036f0447e7c256a667cbe2c59f4cc7ff39564707b6b4f13142894580264429698b819e987e4ae465863545950c508185ed875852550a495463a5566ff36ab89d7ac76db6daad0e83190542275430bb5c7034d0a445e6d317d7830603d28edc34b2cf1dcb5a56685b980d6e51ee2851ee3d7edb143701e536f1a52512993a7b02141aeb7f0dabdf9f0ff61ad5b3246ea2d094704f85866468cde54d000702c117f298e8d3fef803ca61a405ed010000",
    ],
    [
      "ETag",
      "Q8QLkEaYSX5Gk70d+C3MDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:33 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b8e82300000d0bb742d264240989d1d229f4610b4fc36044a157480527e8299bb8f9923bcf7061921b4efd3a17dd2067c812513b52dd922a6c2f44ef3ab9dafd2282d169ea243aa5fb9c3d7c427c8f36acdc06b882c88fb901a97d141c6fd1bafeda5e3937383c2d804367f96b35d99c742b7c233a5a95e88ed7e77adbd2a42278514fb232a0df1a716335877b3e933a59b25b78b275d4864da22acc86e1378ea323ed4e4200b3e44621640ab564bb39e140baa9a2edda45e24a736627d83f31d1a4adc04b1e3462854392ae350789c7de63b3c145ec10a3680be58c5699f561fae246bda06fcdbd36161f4130069c62907bf7f9c5420361a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-17-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b91f75a20102080845604e9ca04610ba1d5344d91636e32b7499cc64e2b5af1df77ed94ae55a5f629b6ef39f79cfb912772cb8b3d999098a7773554872f3722266704144df17523f3bbef330590a78a1f1e179bd1ed45f8309d22826b96a47999414b8aba622027bb6d3bad445dd24a8816266a75dd5677d8b3c7ddb1ed0c868331f22464c98a17b7c8feab5429279dce49bb9d0a9166404b2edb4ce42fef9dfb5ea7acc40d30253b6f253ba8223b1f8b7ecd04a38a8b62badba2815a4215414e798616fe33f7f1f9dbd46d4ef3768ae07bce803226ea42695b98828922e1695d99ac64f2448ccd5707b2f556de3cb498c8eabc880a9ac399b5a78a46ea508275116cd6d6d2bfd804eb59b8dcf8d1767ee9ad67edf966b55bfb5bebfad20b3c4bd13803c3b5a6d6b9b9f97841fd3d48c50ba31eea67adfcdca0e5fbb168024a4b6882916b0f6977648fe32476593272067162431c8f6277409dd866e33ef4f73150e41951c3a285285c77efb84902913d1af7a37e62d3284e7add08c66eaf37b46dc054e478461e2aae60c16529246f3a44ae8365e84561b0f3e7b3d0332524b4ced4a231a60b78ed51618108faa0a6a38e72814abadd4b3ff482d93c5c5e79cd8457905276d8dee18c139a494034adb0790aaab5d863c3883f5b7b0b049b89fd38052599fc7e22bae7dac5ab96bfd0431ca0b6abcc976cc360e97f33764e882b9ad50672df1c741909cfb4e9e31f04e28e3649c8cf9d17fc22cd5300095450b0cf87896013f8f4573bed3d6271f351462abce3ea30a9455805cd0a7153ed893d701cb74b0cb852ef6203c73e354de7d0192187423d57d4ec3d16da88d5f20584419cbe6f9a75fc0781ed2b5d77040000",
    ],
    [
      "ETag",
      "OsmqJAteemgtiyzDO8kFTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93614fdb301086ff8bf735959241c31a890f29ed205248599b0aa109456e7c0906c736b6d3a9aafadfb90428d39814be2477e7e794bbd76ff6e4894b4622b2e1f5730b66f7ad06f7ab0b96605be12cbeb492168847c0d11ac9f86ef6a4c3d0df3c6736c8e61797b3db641d9f9f2361cb07682889f6a4e2209825d1ef3d91b4016c2b95681b59f49947dc4e77c555be4cb24bcc1bc5ba3c5ba7693c4de7e4e01d1b1975b4e8f92fb4dd1f3cf2a8364ba8c0802ca19b451bf508a54bba352d6db4809155ad29c1921eee0f6aa35a4d8d5223ac8c82b351107ef727c1c43f1987e309824295d47125915daf703ee294a362a9fee096243841c2f4316e5cf5cf2dd639eb37e9c224cbc3d37ec0bf015a96aa95ae18042b6eac7b55ef1d7c53e15f52d02f8278555c0c413548066688e2baa08c19b0769054b6a05a1fb1e962917e564532a3381b06b77c00106e7b047ea68bf87fd2a2c13eb49ac5f9fc13611ddae688e4c9f57c95c7d7371d77ff6684e9ce81bd310a5d65a13354e09ffe189f85feabc72e54e73bfc4ee44c0b1e2929fe2a57dc91a8a2c2c2e1053c08c43d88030000",
    ],
    [
      "ETag",
      "AYDkp660bqNs1NECGDWIUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:34 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `date` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b6fda4010fc2bd6f54b2bf1306f8314252e71291531c498a45155c1f958bb97189fe33bd3a088ffdef519f268a444b2847d3bb333bbb7cb23b9e3c99a0c48c0a3fb1cb2dda75b11900a0145233c7df803a378f6e33a1d9a97dec87eb8b4b7e73fed931344f08225e9268da12a459e319083c5bc1665224f6926441513551b56b5d16d9afd46df6c75ba9d3ef224c4e1842777c8fea3542a07f5fa51bb160911c540532e6b4c6c9eceebdb663dcdc42d3025ebaf25eba822ebef8b9ec68251c54572b298a3815c42b6840de5315a7866ae83b3d7a96b9c6e6a1182b79c01654ce4892a6c610a2692904779a6b392c123d1365fbc90b9337186beb15a53052b834a63b9cc40e6b1aa182bad7d384cef8c6fdef4c258617d218f41ae8cebef8ee7184fb0b16b2c5cd799fbc6e7d32fc6c89b2e66c6d79b63b8729040536b908a27da924f83180a3b87ae8ddfde5541a08a4a2883cb9ed9a50dcbec0761d063a1d5ea04a109416005bd0e6d0526ebb7a1bd0e80224f15d9358b262281a6c57a61af499b8c4168aec36e83d2366556d8b3d6dd2e0d68d8edf42c8bec2be46fc6159c73990ac9cbd6916b6fec3b4bdf5bb843db77741921c53e9d97e68a225efa54582482dea96b5f44b940a5e21ec6aeef78f6d01f5f39e5d54f20a26c37bfc7cb0f692c01d134a31b50905d8835368dcca6f3b13f9ebaf60419fa3e67478424835f8fcf047f97ea2e2bfd4b6ccfb36f9043b38ceefe8bcd7d6fec8ec87eff42ef8ac6b9c66882fe2a05b66580c02d0e9fe0d23c83075da41ebf7de5198183a9a0f13afc7b8f4f85e026941ec8e5c2f16e4879e441081924ece3e940b00e7cb8d0c7ed422cee17ca4885df388b4c16222c837226f9a630736477da2d4bff1d289aa937b14eb37d6c7e91a3c8081b48d4a1a272bb74378b502e9f4018c45172cb5eff0347eb2186dd040000",
    ],
    [
      "ETag",
      "xheGlPJWpC0QRGAxQAvDXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "6d91514fc2301485ff4b7d7433dd08044848644a8404890e78d11052bacb1c6cbbb3ed4024fc776f8b51637869efbdfd4e734e7b64dbac4c5897adb2f4bd0675b84ac13cdb22065de746d35661a981790c8c4889bc0ef6e1e3b51aca3c687c466d7849b2e8d0eff588d0f20d0ac1ba47b6ce204f34ebbe1e59290a20d972a9dc8d8499436527f7fdd980ba0213db4de6e3713f1a0fd8c9fba3a9b6bffc74168f260f97148b93c736b88a610d0a4a09d641a57003d28c6c382d8a2a075f63ad2468e66077902aac2ba1107d9af841db0f5a21ef041dde68b69a1d027394c26458123b9f923566d0883cc63d65632101ca951473edd69d1df390fb3cf479e0b2d8116c40ed30d3fc163e9c971b8985f37d5118fe08250803c17fd5e2db477430a09f1452280d360f3f67bb434b1b7a07a36af09814f431c3cc9cfbd317a7f9e445f5010000",
    ],
    [
      "ETag",
      "+1w2M+rHcl13zB8eZdiByA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:34 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd0c97282300000d07fc9d9384596426f2c6a11290808c60b4369d89798000a4effbd4e3fe1bd2748d21433160f7d8d3bf001e664a3acd3b545642dceb3e5a433e3884cf7cb1dd179eb59e453bffbb62f8dda4c14712e8207e3acb76457f1bebe634825c71e6edb48fcd685917f475d7a809d0063d6c5f04ea3f390aa75ce27e206de67231c72840cbdaf64c31fcc0387d5969a3bee3636611b7841e196d496bd7304b566a9b87d235daec2cdda67cea315dcc0ac16685ad6a828f5d0d9d3b62f7e2abb26dae4d25a8a2e28331dce09d5f22a4ca7bde485d49fa55e072b801fa4a498c5e58bcb8b8ab202fff67898097e056838a19882df3f9809b82b1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-19-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d12484a0291a2354ae91aa9211b21adb66942c65c985b82193699a22aff7dd7a6e95a556a9fb07dcfb9e7dc0f1ec903af323225292ffeb4d01c3edd8b949c1150b4c0d7fa471eb0dad90a79d88feffd15af46a15bcc6688e09a25e9ae2ea12745db3090d3eda65f34a2ad6923440f13f51cbfe78c87b6eff8f6c81dbb3ef22494f90daf1e90fd5ba95a4e07839376bf10a22881d65cf699d83dbf0ff6c341dd887b604a0e5e4b0e50450ede17fd5c0a461517d56cbb4103ad8426811de5255af8cfccd28bd7a9fb9ceefa0582f79c01654cb495d2b630051355ce8bb63159c9f491189b2f0e6413dc048bd862a26c775552d11d9c5919553451871aacab68bdb296e1d53a5acde3e53a4c368beb6035ef2fd637db55b8b1eeae8328b0144d4b305c6b665d985b8817d4cf402a5e19f5583f6be5a7062ddf8e4513505a42174c26f6983a9eeda7793a61b93772d3dc8634f5d2894b47a9cdfc7338cf52a0c833a286452b518d26d4773d3b4b72c783e4dc1b670905cf4ec6e3899f7afed071d8901ccfc8df862bb8e4b21692771d2277d1320e9238da868b791c981272da96eab233a60b78e9516181087aa7a6a38e72814abaddcb300ea2f9225ede06dd846fa0a0ecb0f98333ce692901d1b4c1e629685622c3869170be0a2e116c26f6f5149464faf391e89e6b172f5afe4c8f7180daae325fb289a365f8c5d839216e69d91ac8be3be832725e6ad3c75f08c41ded92906fdb20fa4ebaa7087268a0621f0f13c126f0e1af76da7bc4e2e6a38c5478c7d561528bb006ba15e2a6da13db756dd72306dca837b191eb9e9aa673e88cb0834a3d55d4ed3d16da89b5f21984419c7e689a75fc0743be4dee77040000",
    ],
    [
      "ETag",
      "pZfEcp1Uosyv6j9Min3N5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d936f6f9b3010c6bf8bf79648b026d982d417c99a7668347f08915a4d1572ed83ba3336b34daa28ca77df997669b54ea26fe0eefc3b71f7f8e1407e09c5494cee45f5bb05b3ff54815bfb2003db4a67f1d568658104041cad904c56ee21aca2edf0aabc5ddfcc36f2c72a5baccfcf91b0ec016a4ae2032905486e49fcf34014ad01db98966dad8a2e0b88db37beb8c9b364718579adb9cf17db349dced2393906a7464e1d2d3afe036d77c7803ceafb0c4a30a018f8591aa31f81b9c4af6969dd481858dd1a06967470775019dd36d4683dc0ca209a0ca2f1e770124dc2b3d1783441506a469dd00ad9ed06e7234e3b2a33fd845b92e80c09d3c5b871d93d775817bcdbc487c9221f0fbb01df029431dd2a57f482a530d63dabf7177c51e15f52d20f82785542f64115280ea68f124d413937606d2fa96d419be684cd96cbf4bd2a8a1b2d783fb8133d8074bb1370992ea7ff93160df6aad5c5349fbf23ac43db9c903cb99e6ff2e9f5ca73772f4698ed1dd895d1e82a0bde505138fc3afa320e9f3df64d7bdfe17762675a0808a3f8ab7c178ec42595168e7f0095a11ec288030000",
    ],
    [
      "ETag",
      "IPth0g1U4GfYQXBSlKPRNQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:35 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `stamp` as __result, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
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
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b4fdb3014fd2b91f76593fa48fa4e25041d0456090aa429884d536bbb37c1348d83edb055a8ff7d370ee53124902ab5f53de79e735f8f6425b22519122692fb02d4e6cb9d64a446c0d0045f973f557276f563d33d1aac7ac77eb16ca5f9ede5de1e2244c9d2749da750d7b2501cf470366d244a16395552d63151bde5d6bd5ecbf53ddf6d777b5d1f791ad2f854642b64df1a93eb61b3b9d36e24522629d05ce80697ebe7f7e643ab992b7907dce8e65bc926aae8e6c7a2fba9e4d40899edcda668a0d0a0e6b0a622450b2fcc253b789bba21e8ba9120f84170a09ccb2233a52d4cc165168ba450362b193e126bf3d50f320d4e83c3c859688339170ed5ce7cae4017a9a9390b2bfef498af9ce3f0fccc596081b148412f9ceb1f411838cfb0f1c4994d26c13472beee7f734ec2f3d985f3fd6617aeed34d0d612b41199351551964269e8a96fe3f7d32a09d4500d5570de777bd41bb83e8b599fc7837697c52e303660fd2e6d3397fb1de82c1950e49932bb65d10c5be132d6e55dcff35a7dbfe531df6db563de6e81d7f67d60dea0b7e49441876c6be48f12068e84cea51655f3c875388e827914ce2687a328b065c4141b7554992b8b78edd3609108faa0ae6d19151295ca498c2751108e0ea3f155500dff1412ca37d37b1c7f4c530d88a68aaec1803a934b6c1ab9389f8ea3f1f964748a0c3bd18b1d4293e1afc71742b4c96d978dfd26a3301cdd20872a4537ffc5a651389e9c90edf695de154d0b8bb104fbaf1278a80204ee70fda4d0ee01fcb545da05dcd65e10b89a06bcb7e1df5bfcd408de42e5815cce82f086544f21c4a020e39f6f07826de0d393dedd1762f1c2500637d208dc45ae4b11aea0da49b12ecdecd8dd9eebf789052bf32ed6ee7476cd2f739419610d9979aaa8ba2fdbcd3254e867100671952655afff013ce216b9df040000",
    ],
    [
      "ETag",
      "dZrgMVHy5D8k6F9ud2lphQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6b",
      "c2301885ff4b766ba575b6ac82301571b2ea5cadec6288c4f8b656db264b529d88ff7d6fe260b2ed261f27cf09e72467b2cfab0de990759e7dd4204f7719e857b38841d5855638095e29200d029a6648e6816e0fd2e3f376047ef2d617227a81e4d8ed22a1d8164a4a3a6792e6506c14e9bc9f49454b40db6a25ed8d88e993304a329e0ce7496f3243a9e41b234d1751d4eb47437269dc18c5fec7344fe2f174f49f637969901d5fc79082848a81892124df01d363d350d15214e0285e4b068a58d81e6492d7824ace1d549c96eb7841cb0dbdd0bdf7033f44b0e08cea9c57c82ee6188d68ae6911f32316242d04a45d62d7d48e0794bda6ffe0fa3e5ed31e86b68e516107f2c073e53ec2a78dd364bcb4d1ff788336ba6fbd0ca806efb771f99da67fd2a06692633505a6957b6d38e086d6f81a5ad6d0208ce21f3de5fababf7c011d77263900020000",
    ],
    [
      "ETag",
      "i6t4CfwKhGe5TWBppLOeTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:36 GMT",
      "Server",
      "ESF",
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
      "1dd04b7282300000d0bb64ad4e090d98eee463a002625aa9b0615012440aa41004757af73a3dc27b0f909d4eacef53d956ac016fe09641bc382d366269a4059f2c914d5c13871e2952877ba217d5cbe043c35b452a53be929026f5d90e69bbc7b5ef988df2396c211d8d8de5dc2f26fee053610b95ec8680b996a6f58ddcb54d09e5b739ae75ed7dd28917a38ae6bdeeb86b92a360d7c5a68a861635115f720d9643b3a5f394761e23634daa38b95e564e2e25273fc75719a67c1b6645617b930b47f77ac7e6591c4911f8f3b8adcd7c34ba4c9ce7791c2937971d3098013689b2637d5a3eb92ac27806feeda9bc09f60c3058d6b10efcfe019981e0b01a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda242490a714ad694ad7a8095981b4daa6091973a16e08a6d874abaafcf75d4cd3a59bd47ec2f63de79e731f3c932dcf633221114f1f2a289f3edd8b889c105034c5d7fbed7725a2ab336bf3fb8e5d5babb3ad655ecda65344f09a25e9aec8a02545553290938ddf4e4b5115b414a285895abd6eab3be899e3eed8b4fa83fe187912b264c9f32db2ef942ae4a4d33968b75321d20c68c1659b89ddeb7be7b1d7294a710f4cc9ce5bc90eaac8cefba29f33c1a8e2229f6e7c3450492843d8519ea185bfcc383a7d9bbacde9ae9d22f89133a08c892a57b52d4cc1449ef0b42a7556327926dae6d181f8ced29907061359b5cbc39ceee0c488a9a2a17a2ac0b8f0d62b63e15eacbdd52c58acddd09f5f3aab597bbe5e6e56ae6fdc5e3a9e63281a65a0b9c6d438d537172fa81f83543cd7ea41fd5c2bbf3468f1ff586a024a4b6882e1d01cd0eec81c47493464c9c8ea47890951348a867d6a45261bdb60c71150e46951cda239d64cadd190f586a10d1087f620e98711d8ddb03ba0cc84c4eeda6091fd09f9557205e75c1642f2a643e4d65b044e18781b773e0b1c5d4242ab4c9d37c6ea028e3d2a2c1041efd4b4afa35ca052ddee851b38de6c1e2c6e9c66c24b48297bf21f70c609cd24209a96d83c05e54ac4d830e2ce56ce3982f5c4be1e82924c7e3c93bae7b58ba396bfd2031c606d57e92ff1036fe17ed1760e881b9a551af2d81c488196efb03674bdff89485cd2260bb9de38de37d23c7990400939fb789a08d6810fffb5c3e22316571f65a4c23bee0e93b5082ba1d921aecb3db0fb83b169130d2ed5bfb1a1690f0e5dab73d4196107b97aa9a8597c2cb411abe42b0883387e57776bff077c7868d378040000",
    ],
    [
      "ETag",
      "jkZtobKB3UxhcQ3MBk30KA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7b",
      "0b0958a595c40b6cb5c5a855c4a46963cc0a03a2c0d2fdb131c677ef2cb5b6699bb437cbccf0cd70e6b007b2cdca98b86495a52f0af8fe220539d5410042e552e0a362a5006210903445d2511155dbcdd3a43978ccbafda94507edddb4d34142446b2828710f24c9208f05719f0fa4a405605bc4725594cb3a3388dc57ba380b037f7c8779c1629d8fe7c3a1d71df6c8d13837c654d265cdffa36d7134c886ad024880431981d65271b68148fa7a4d418b2a075330c52310a486eb172967aaa29c31132b66c3366da761b5edb675d9725a6d0473165199b112d9f90cf511c924cd03f62ab42708f03ac48593fadc61398beb4574e88f43a759ebfb0aa0b424cb61f937887ad7147fc30776b2e03b470ba64a79a6fac307efb771e8e9e7a85b2fecfd208444a7ce48e88f7ab3d01b4d34b738eddedd4b1013ced04801da43db6a5eb7ae1cebddd61ba6adc6efb8922b304844f176dc6792b809cd051cdf00985228d77b020000",
    ],
    [
      "ETag",
      "6ucaukjZP4JXiBFQ0aJ9vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:37 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4edb30147e95c8fb035269d3fb45422c948c059514d2b4084d53eb3827c1348d83ed3055a8efbe9384021dd2902aa5f67739df39b65fc89aa721199180c74f39c8edb74711901a014d63dc7d1a87eddbae7fbebe12d45cb32bf0b6170bebf41419bc5029bac912385122970cd4683eabc752e41995429ca0d149ab75d2ecb5cc617368b6bbbdee10750a9268c2d335aa1fb4ced4a8d1d8d7aec742c409d08cab3a139bb7fdc673ab9149f1084cabc661c90656518dff173d4b04a39a8bf4743ec300b902b9840de50946785786c1f743eb3aa79b7a8ce467ce803226f25417b1d0828934e2712e4b57327a2165cc0f7fc8cc9ed863df184fad893d1bdb47d6e2f268453785c7eab86698c70655c6722941e589ae192b6c2fe2092c79b8aa906c6dfcf0a6d788609807aa40ad8cbb9fb6671b8764c735e6ae6bcf7ce3e8ecd8b8f4a6f31be3fcfe80838143509aa7655c9f060914515f27ea7c3ec7424035d6acc065dfecd1e6c01c0651d067d1a0dd0d2213826010f4bbb41d986cd8814e1800459d2edc4b154d45daa3414023d66d456108cdbe4987ed266d0f023a84281cf65bc03a3db4606457237f24d770c1552614afc64aee3cc7b797be3777c7966f976d4414e77551852b9af89853639348fa4f5fbb02e5022b1567e4b8beed5963df59d8d5b598404cd976f6841723a2890264534937a0415e8b1087466ea633c777a6ae35414579d6377b8622a35f2fef027f9b9553d6e597589e67dda3864a49b7ff6098a3d721bbdd87720b9ae425a5e497abcaffb90248137b795fb5c8eef70e7f3582f7bf7227b773dbbb27d59607114848d9d7e78ee412f8f219efdf1472f1556119a5718db78ca9a2089350dd36be29e3beaabbfdbed9252559ea4fd8a0d7df8fb5f0281c6103a97eeda87a53e5a00a28576f2404f192b88e7b89e85f6c5df845d3040000",
    ],
    [
      "ETag",
      "qCd3Q5TBkJoa0kcJeRyDVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d905f6f823014c5bfcbdd2b2c8011a7890fb8b9cd843045dd4c16632a5c190a94b545638cdf7db775892e591fe8fdf33b700e27d8e5550a3d58e7d97783e27897a19ae82246d9144ad255f34a2258808a6544faefd1249f0541147fa4dbf162e18fd8eee9d0ef1321932f2c19f44eb0c9b14825f43e4f50b11249b65a09f346c2d4b1d693e7f02d98515bf254b7d13c0c83413884b37523aa7757c1289a0d5f86f17f92e5d9822d5fc7b841815582da432df8161335d2f1242beb026dc91b91a004039b4526785333c1b94d13dbf36cd7f79caedb755a6dbfdd25b0e0095339af889d4fc91b28ae5811f303a5038f00614a0aba31cf3d8dddfb878eefdc9c9609b5370aedf52fdcb9ae5dbd5efe7e64705428c782936389daac7331fec8751845219568d08284d17f7fcdd5a53fff00bb470ab5d4010000",
    ],
    [
      "ETag",
      "6VNQiTAANRWdjPXX6IakDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:38 GMT",
      "Server",
      "ESF",
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
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00d07fc9da3a0a0381ee00792988225a65c3047ac1a89048427d4dffbd4e3fe19c172255054214929da1439fe84114735c8d17dcb08ba6beea98a98ba7c622f6d300deaf663ca717f23c35754bda4eaf945510a6c99909cd37f0717be88eca34c3f0e89d4edfdc27d4f8c0207d1cd2e0b2365248d3836fc55f2ed76cc3825ab63c0e3bc5b41b169372369c853ef41b335f04a51b39dfbecc379e75a054deae493871a7224c5c119d926576e3436d93754b9c5dec86d9362a96baf0f6b2d455efd264feb19b6db9cd7b0b27f30ce63b964de22aba076884e0ce690fa2a06faeaa99e608fddb0bf9e0f00eb081f4d0a3df3ffe4973d01a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "a34014fd2b64f6ab2dd8d267d2ac4d8b2b494b9552cd66b32133c305472983cca031a6ff7d2f83753526fa8999b9e7dc73ee8317722f8a844c0913d9430dd5f38f3bc9c809014d337c1dc06a5d3d38b66f5f89852d962c71f953369b2142342c45f7650e1d25eb8a839aeeb6ddac9275492b293b98a8d3eb774e873d67723a71fa83e160823c0579ba12c53db26fb52ed5d4b68fdadd4cca2c075a0ad5e572fff66e3ff6ecb29277c0b5b23f4adaa8a2ecaf457fe692532d6431db6dd140ada08a614f458e16fe331376f6317557d07d3743f0a3e040399775a11b5b9882cb2215595d99ac64fa428ccd7707b2f556de22b2b8cceb7d1117740f275642358df57309d679b8595b7e70be09d7f3c8df04f17671e1ade7ddc566b55b075bebe6c20b3d4b539683e15a33ebccdc02bca07e024a8bc2a847cd73a3fcda20fff3581a024a2b6883f1c819d2d3b13361291bf174dc1fb0d401c6c66c34a07de6f0890b6ec28022cf881a162db06680a13366693cee392c765dda8bd93049e23ea618a7e03aa37e9f1c4ec85325342c852aa5126d87c84de8475e1c85bb60318f3c53424aeb5c2f5b634d01ef3d6a2c10415fd47468a242a252d36e3f88bc70be88fc6baf9df00a32ca9fb70f38e394e60a104d2b6c9e866a2d136c1809e66b6f896033b1cb635091e99f17d2f4bc71f1aee56ff40807d8d8d5e64bb651e807bf8c9d23e29ae6b5813cb60752a2e55bac0d5d1ffe221297b4cd42ae765ef89bb44f21a45041c1bf9f26824de0db7fedb8f888c5d54719a5f18ebbc35523c22b68774898728fecc1d81df4880157fa536ce8bac7ae35399a8cb08742bf56d42e3e16da8ad5ea0d84411c7f60ba75f8077501efe778040000",
    ],
    [
      "ETag",
      "5eLMrq0/I/QiC/iDbd4cwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d925b6f82401085ffcbf415136f5025f1415b6b49bc22b60f8d312b0c8a051677170d31fef7ce526b9bb649fb0233c337cb39074ef01aa501d8b08e36fb1c4571b34135d3858b328f95a45bc6538960002ab621d2dc3b83432def0d8256319814eef3ecc955c74e8708e96f3161609f208c300e24d82f27485982b4e6f3384fd255d919a08a4c0fe79eeb8c07d4273cd0fd78311c767bc33e9c8deb62c0145b95fc3fd6966703767ced628802531fb5964cf01dfacad136254bb2182b92e7c24709255c3ed8089e674c705ea149a5dea8d4ac7ab55d6b571ba665b6098cb9cf54c453621773d2078a2b16bbfc482ec122409425190ecbeb81c651501ad1a533f6ac66a9ef2b40d2c228c6d5df20e9dd32fa0c1fd82582ef1c4b789eaa2bf5309c747f3b8e32fd3ceabeebf57f1052515257c47346fdb9d71d4d35b7bc78ef150ae554700a52a2ceb0566db6cc5babfa1eeb1dd751d37b6c257234c067f4773c460aec90c512cf6f1d28c2c07b020000",
    ],
    [
      "ETag",
      "5qIGv1uBGd8yGOyRWQVRtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:39 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8553fd4fdb3010fd5722ef1790fa9134e9a7845857328854524813109aa6d671ed6248e2d476d82ad4ff7d9784021d12489552fbbd77f7ee7cf78c1e79b6422314f3f5a6a072fbed41c4a881a8c66bb8757f928bbf17d926b257e9b575be2dcebcdee6fae40418bc54299ce6096d2a514842d5289ab7d65214399642342150b3e334ad5ec71c5a43d3eef6ba43d0299ab029cf1e417daf75ae46edf63e776b2dc43aa138e7aa4544fa7adf7eeab473291e28d1aa7d98b20d5954fbf3a4a789205873919d44733050282a1734c53c010b6fca55fcfd30748be3b4b506f213271413228a4c97b620041119e3eb425651d1e8195536dffd417377ea4e4263328bfcf06889d352bc3c36b032160b495591e886b1849a184fe882af9635923f1a3f83d92520e0e01e2baa96c6ed851bb8c621d9f38dc8f7dd79681c9d1e1be7c12cba327edc1d70c0e58a2acdb3ca6388e38496fe5edae87d7cbc528035e4acc145dfec616b600e6316f7091bd8dd9899348e0771bf8bedd82443873aab9862d0e9327aa5c299c83a2663666cda183bccee52ab673b0eee5ba633ec588c6112337bd0618e8d760df447724dcfb8ca85e2752fd16de085ee220c227f320eddaa0c86a15f67b5b9b288f73e351409a44feada95281790a97c18cf0fdd603c09bd1bb79e85295d63b29d6f601a184e1405369638a59aca4bb182a6a1abd9dc0bbd993f9e82a27ae0ab3d43a1d1afe73741b8cdab2eebea8bc64130be030d96126fffc3c047cf41bbddbb743738292a4ac5af4e75fca71a4016d4f276eaa0ddef1dfc1a0886be8e8eae2337b843f55540199534235fbf3b902be0cbdddd2f12706195208dd270862923aa4c4224ada78da795dd177577d8ed579bafb1d41fb0beedecdb5ac62823d29466faa5a27a91aa469550a15e4900c290f89e7f0ee83f7a99dddbc8040000",
    ],
    [
      "ETag",
      "EFcHxHnqU3dmQ1GyuDI6qQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "fd2f778f6b9975ab43c187e93a2788cc6ec26088c4f4dab5b6bd35491d22fdefdec4317cdc4b72733e2ee7e404bbac4a60009b2cdd37a88e37299a851d62d44d61345f35551ac103342265e532fa9c6095c8db38b90bf2f14bfab87f2e16c3212bb4fcc652c0e004db0c8b44c3e0eb049528916debb5721b59668eb545a6f38f6812c50c94945860be9ccd9e46b3085aefca56effe6559b51ee4b489718b0a2b893645ad284769a6b6a016655da0afa951123538b12352454d2d1491cf88df7df0835eb7d30ffa9dfbb017f65958901426a3ca767fe76c60c88822a61fee075d16283772d5ad3b0f0c87aec3c1096cb46baef7c705965bfd2e1c1d0dea37459c4ea30dd6b9841c930d6eb890510d7a2005fff26b662eeff60c48b3c218c2010000",
    ],
    [
      "ETag",
      "UEXGendc+Rd/1jCFg7qDlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:40 GMT",
      "Server",
      "ESF",
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
      "c97282300000d07fc9599c227b6f8094cd254669a5970c0361112331892876faef75fa09effd80a22c8910580e3db9807730150b675ece53667bb8a94735bfda4317e3856f65f659dc37df11b1f6ee53990e997c263af475936fef7dea2be21623b751eba5bcb8c6b56af1a9438f5a8f0e01c403856b63059dd126bc5a51bbdcac5ba9e64e63a1de16018b8f87f1837f4588dc9614a1a47e83323a475a714e2f0da504f36b4a1f7b455b2428da6acc6d355366555d9975d8748a977802c163c8f45d180fe62ef7b3e0b342b7d61d2b7a0a59a65a5eae4212146006c883759c08dcbdb89ae13833f06fc77262e415e09182130e7eff00b11982911a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2bc87b5c130881348914ad514a37a4842c405a6dd3846c63a85bc0149b6e5595ffbe8b69ba5695da276cdf73ee39f7834774cbab14cd11e1f95dcb9a874f3782a013c414cee1f5e7dfd4dc8d3f6f77cbfc26ae8b7474b1cbe56eb10004ef58129775c10652b40d6572be8f867923da1a37420c20d1c07607a3896dcd46336bec4edc19f0242bb235af6e817dad542de7a679d41ee642e405c33597432acae777f3de36eb46dc30aaa4f95ad2041569be2ffaa510142b2eaac53e0203ad644dc24acc0bb0f09f9992b3d7a9871c97c31cc0f79c324ca9682bd5d98214545419cfdb466745f347a46dbe38a0c85b7babd8a0a268cb2aa970c94e8c142b9ca8879a1917e17663f8c1c536dc2c637f1b24d1ea9bb7590e57dbf57e1344c6d5372ff40c8549c134d7581867fa16c005f4532615afb47adc3d77ca4f0df2df8ea52380b4647d3039b5267834b5662423a7349b8e5d92598c90293975f1985874e63027250c034f8b6a16ae4445a6a9e5b8d3342194d889635959829d899350ec109ba4e36c44283a9ca03f0d57ec9ccb5a48de77085d857eec2571b80f56cbd8d32564b82dd4796fac2be0a547050502e89d9a0e5d940b50eadaed07b1172e57b17fe9f5135eb31cd387e80e669ce1423240e3069aa758b31129340c05cb8d770e603db1efc7a044f35f8fa8eb79e7e245cb9fe9310cb0b3abf4174571e8075fb59d23e21217ad86dcf7075483e56ba80d5c1f7e031296b4cf82767b2ffc81faa79065ac6115fd789a00d6810fffb5e3e20316561f64a4823bec0e959d086d58bf435c977b644f2cdbb5900637ea4dcc19d9c7ae7539ba8cac64957aaaa85f7c28b4176be533088230fe4077ebf00fa2b477f278040000",
    ],
    [
      "ETag",
      "Zxd/Q3+OQAgjTpld1FQgsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4e83401045ff657ca549ab8296a40f54ab92202ac5348d699a15864a0b0cee2e364dd37f7716b51a35d1179819ce2cf75ed8c22aaf5270e1315f3c372837070bd477a688503585567caba9520816a0160b26c360624f27ab0b19273a98966b0a23bf5a0f064ca8e4094b01ee16b21c8b5481fbb0854a94c86b09154d59cddbce02bda9cd701c477e78c97d49a9e9c3fb20f086c10876d67e31155acc5bfe1f6bb39d054b7a8c3043895582464b2d698989f68d4d25cabac08ea24626a8a085db070b494d2d245187279d43bbd3730ebbfd5ebf7b643b769fc18212a173aa98bd1fb33ed0a44511d19a5d82c3806c4b369cb5d7171ee7696bc4947e183bc7adbeaf004bcbf202e77f83acf749f067f8c0de23f8ce89929a4aefa98be0c6fbed38cef4f3a8732f1efd2094e6a4f648ec5f8fc6b1777d6bb8d9bbf7e146a3ba95c4412a3419f6bac7a7f689d37d8bf58c4cd4fc1e57cb062d4804ff1d57b906371385c2dd2bce543ae67b020000",
    ],
    [
      "ETag",
      "NLW5YWkFrTctLYmwoNRInw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:41 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "eb6eda30147e95c8fbd34a5c92008120551da3591b0942978456dd34811d9ce036c4a9edb0a18a77df4952dab24aad8414ecef72be736c3fa10796add01011963c1654ecbedc73821a882a9cc06efef7e73a4cc5e3746bb92333b0ae6cb1e6c9d9193058a9927893a7b4297921222a87f3a095085ee45870de04a3a669350dcbd46dc3d63b3dab67834ed2349eb0ec01d46ba572396cb70fb55b09e7494a71ce642be29b97fdf6d66ce782dfd348c9f671c9365491ed8f8b9ea73cc28af1ec6c1e40804252b1a01bcc5288f0aa5c91afc7d62d8637ad04c85b16511c45bcc854190b2c229ec52c2944e58a864fa88af9e60f0a9c89330eb5f16c347182b17312cca7274bbc293d96a70d4d3fd5b0d4160b416591aa86b684f66296d2055b2d6b247fd0befbb3292010668d25954bedf6caf11ded98ec7adadcf39c20d44ece4fb54b7f36bfd6bedd1d7120f08a4ac5b22a6e88494acba8cf1375df9f6329c00a6ad6e0a2af5bd818e83689493f8a079d1e89754ac880f47bb843f4c8eed2ee8a500c3a55ba572a9cf1ccb2066480712fb2b161e2be6d9b519ff6067a8718dd98da5d42e8ca0423b46fa03f82297ac164ce25abc78a6e7d377416a13ff7c6a3d0a9da8831cceba20e5736f136a7822681f4415ffb12651c2a9567e47aa1e38fc6a17be3d4d76242131ced8247b818314e250536167843151553be82a1a1eb59e086eecc1b4d40519df5f58121d1f0d7d3ab20dce5d59455f54523df1fdd81060b8177ff6190c3eaa2fdfe4db91b9c1615a5e257abda7f5b03c8805e5e5726daffdec3af81e0fed7eee8c7dcf1ef50bde5d3980a9a459f9f3b902be0d3677c7853c085570565a48235dcb24896452241ebdbc63655dc67b565740d035564a1de61966e1ec65a7a948e744333f5dc51fda6aa419550215f4800c225f15cef12d07fc3a1c8b0d3040000",
    ],
    [
      "ETag",
      "pxZhTlrqMv6IA2S6H9rhog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "4f",
      "c2",
      "40",
      "10",
      "c5",
      "bf",
      "cb",
      "78",
      "6d490b8296840328024945ad70308690a54ceb42dba9bb5b4c43f8eece16a31cdc4377fefc5efb5e8fb097c516fab091e96785aabe4ad1bcd822425d6546f35552a1111c40235226bd420ee5b47ebb7f8c1693c9756a54928bafc180091d7f602ea07f844462b6d5d07f3f42217264d97aad9a373266ead24e1ec2a7e182db9cb6b69d2fc370380ac770722e44e5fe4f309b2fc69371f49f64757260479b08135458c4683d948a76189b998da7455e66e86aaa548c1a1ab859a48aaa52282297276ebbe7fabdb617f881d7e9f6ba018319c5c2482a985dbeb23730644416d117a7833603aa293968d23c0f3c0e5a9d9be0f234990e8dc05abd647dafd5b9fdddfb76bffaf9c8a836a89f15b1638dd6ac77367e47368ce1904655e8402cf8bf4fa539f7a76f46668a44d4010000",
    ],
    [
      "ETag",
      "0niAiHyYDMRTGG4gtrfmaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:41 GMT",
      "Server",
      "ESF",
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
      "52",
      "83",
      "30",
      "00",
      "00d0bb64dd76f8183eee1a0d02c58201acb0c9401a91a21053a00d8e77b7e311defb011563fc7ca6e3d0f11edc035519ee866d76c241b46147940dd3e749437b14ee45424e6929bd35949ad3fb2edcbabe16292f3dec26a41ee0d0968adfe99d174f81f6d818f43277969174f9f4ea47b82e53fc8525d745f02d2dd913959fb4eac93a6681274a2d9adf86b0de978630794ab0cd161b4523242174ea84995db085e1b37950fd3843d1cea4f5743f33d7766a30bd88ccd9a2d8bf2e8dc70b85e9bbf382f38f38a1539c2932ef122b2fea258e8b08ac00bf8a56f2336d6f5c13baee0afcdbe9a804bf05205e492ec1ef1fd9ec4c2a1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda3cc90322456b94d235524236425255d3848cb950b704536c324555fefbae4d13b5aad47dc2f63de79e731fbc92675e246442629ebdd4501dbf3d89985c115034c3d76c74ff303fecc64ee61d77f2a9bfde3d2fedd9748a08ae5992eecb1c5a52d4150339d96eda5925ea925642b43051ab3f6ef546fdaedb73bbf67034749127214f97bc7846f6a352a59c743a67ed76264496032db96c33b1bfbc770efd4e598927604a763e4a76504576be16fd9e0b461517c574bb4103b5842a823de5b92ef0c24ce2eb8fa9db9ceedb19820f9c01654cd485d2b630051345cab3ba3259c9e495189bef0e64e32dbd79683191d7fb222ae81eaeac842a1aa96309d66db05e590bff761dac66e162ed479bf99db79ab5e7ebe576e56facfb3b2ff02c45e31c0cd79a5ad7e6e6e305f513908a17463dd4cf5af9ad418bcf63d1049496d004a37177447b4ed78dd378cc52c71ec66917e2d889c7436ac75de60e6090c4409167440d8b16a2e83923371ddb2cea3a0e8d06bdc48edcc44d220a09f4636748c7719f9caec8df8a2bb8e1b21492371d22f7c122f4a230d8faf359e89912525ae7eaa631a60b78ef51618108faa2a6938e72814abadd0b3ff482d93c5cecbc66c24bc8283b6e5e70c629cd25209a56d83c05d54a24d830e2cf56de0d82cdc47e9e83924c7ebf12dd73ede25dcb2ff41007a8ed2af3259b3058f83f8c9d336247f3da400ecd819468f9116b43d7a73f88c4256db2905f5b2f7820cd5300295450b0ff4f13c126f0df7fedbcf888c5d54719a9f08ebbc3a4166115343bc44db967367e9c1131e04a7d8ad9f6e0dc359d4367843d14eaada266f1b1d046ac9617100671fcbee9d6e91f20f1788078040000",
    ],
    [
      "ETag",
      "g6WYCvV78gEyVsj2OVkL3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92dd4ec2401085df65bcb404ca4f91265c80a0120191961b0d214b3b2d85b65b77b79286f0eece5644a3267ad3ce4cbfd99e73da03eca2d4071bd651f892a3282e42548fba98a3cc6325e996f1542218808a8544eeaa0d07efebac3a9b98db8170c3a722bddc77bb44486f830903fb004184b12fc17e3e40ca12a4358fc77992aecace0055647ae8b8f3d1f496fa84fbba9f2ec6e35e7f3c84a3715ef49962ab92ffc7daf268c096afe718a0c0d443ad25137c8b9e1a699b9225598c15c973e1a184122e1f8482e719139c576852a9b72ba655af75cc4eadd1b25a1d0263ee3115f194d88543fa4071c5e239df934bb0081065498683f2fa4ae3c82f8de8723475ad66a9ef2b40d28228c6d5df20e9dd30fa0c1fd82982ef1c4b789eaa3375337ee8fd761c65fa79d4a0e70e7f1052515267c41d4d868edb9bcc34b73c79ef170ae54c700a52a2ced0ac35af5a6dabf61eeb35d751d37b6c257234c063f477dc450aec80c5128f6f44051b2f7b020000",
    ],
    [
      "ETag",
      "k/3SeK2a/PM1jDrTgZyn+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:43 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT MIN(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3010fd2a91f70f48a54d9336fd21215620834c25853485a1696a1dc70986240eb6c354a17ef75d1c0a744820554aedf7deddbbf3dd337a60458cc62862e96345c5fadb3d8f500b518553b8e52260b32bfff87178f6f3d816bfa285b33e9f1c1e0283d52a89f332a30792578250395eccdba9e0558905e70710e8c01a1e741dcb1c7547a6dd77fa23d0499a2553563c80fa4ea9528e3b9d6dee76ca799a515c32d9263c7fbdef3c599d52f07b4a94ececa6ec4016d9f93ce951c609568c17878b3918a824154b9a6396818537651c7ddf0ddd66386fa7407e628462427855a8da168420bc48585a091d158d9f91b6f9ee0f9abb53f724342e3c7f6f85f35abada37b034964b416595a996b1828a1296d1258b570d523e183f82d9052090ff0e4b2a57c6cdb91bb8c62ed9f38d85efbbf3d0d83bda37ce82d9e2d238bedde180c7984ac50aed30c451466b772f4df43e3e5d2dc00a7236e072603ab83b344751120d4832b4fb5162d2281a46833eb623938c7ab4174714834ed5d1b50a17bcb0ac614ccd248e479145a1fde66068453d1bc83821ddd881980332e88dd0a685fe0aa6e829932597ace924ba09bcd05d86c1c23f9984ae2e23c1d0afd3c65c5dc47b9f0a8a04d227756d6a9471c8543f8be7876e303909bd6bb79984294d3159cf1f6116129c490a6c2c704e1515173c86a6a1cbd9dc0bbd993f9982423fefe59621d1f8f7f39b205c97bacb4a7fd1240826b7a0c142e0f57f18f8707a68b37997ee1a6795a668be3e35f19f1a0075a196b79385367f36f06b2118f9263aba5ab8c12d6aae029a50410bf2f5bb0359035f6eee768d800b8b0469a482334c199175122268336d2cd7765fd48e6df71ca4c9427dc01cbbbf6d6b1da38e48735aa8978a9a35d28daaa14abe92008421f13dff0cd07f7f688684c6040000",
    ],
    [
      "ETag",
      "orRiOQNBq8GJB3rXbU6yHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "41",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcb786d495b05a109075040b441ac100f8690a50cb5d076eaee164308ffddd9c528072fbb3b33df9bbcb747d865e51a425865e9678df27095a27e318f18559d6bc55745a5427000b548991c3d3ef5de906a3dedef9af7237f1c0de361daed32a1920f2c048447d86498af1584ef472845812c5b2ea5ddc8983e54a6338c9e7b332e0b5a9b72328fa25e3f1ac0c9b91055bb3fc178321b8c06f17f92c5c9812dad62dca0c43241e3a192b4c5448f4d3c258a2a4757512d135460613b4825d59590442e77dca0edfaadc0ebf81defbad96a7618cc29113aa392d9f92b7b034d5ae4317d713a081890f6c94137f6dc73db6bdcb66d8cbd658cbbcbb1dfb8097ec7be192f7ed6f60f1ad554127b5468ec7967ab7764ec6b8ea5658d0e24827ffa21d3e7faf40dec1179dbc6010000",
    ],
    [
      "ETag",
      "GJKAWeoutPBk5DG1ILFRFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:43 GMT",
      "Server",
      "ESF",
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
      "ad0e05c1a43bf0438481882005360c924814a129a108767af73a3dc27b3fa0284b2665de7fd6ac05ef602a54b42817ae80565e51f238adebd6afb94eeea96ffb17d2e255da1d549325766c1e87ec2c1c19e135e59ecd03322f61d5472159e9e8f8956d8d03a4df8182ef654b79f4303fac2522fe7836ae2683c5c60b94e412566f95d099e7a68ded2a56a6215f21306e5422b49d0395c694089338d9e09d3325eb717078dd2bb5819931274b4e43dff04430543c6cf737d999a7685f6edd816a3b71ab63a93d65241a6d89038c6862811960a3b8764ce6d71757d3119a817f7bde4f82bd022c5674ac03bf7ffd19f1a71a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-29-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fa34014fd2b64f6ab6d297dd2a4599b8ada4d4b77816ad6cd860cc305c70283cca031a6ff7d2f83753526fa8999b9e7dc73ee8367b2e7454c6624e2e97d0dd5d3b73b119113028aa6f8ca7e04c17abfbfc980e7bbc9857f73f5288ac7f91c11bc61499a971974a4a82b0672b6f3bb6925ea925642743051c7b23bfdb165da7ddb1c8cc6231b7912b264cd8b3db26f952ae5acd73b6a775321d20c68c9659789fcf5bdf760f5ca4adc0153b2f75eb2872ab2f7b9e8f74c30aab828e63b1f0dd412aa1072ca33b4f09f1947a7ef537739cdbb29821f3803ca98a80bd5d8c2144c14094feb4a6725b367a26dbe3910df593bcbc06022abf3222c680e27464c150dd55309c6b9b7dd182bf77ceb6d16c16aeb86fef2d2d92cbacbed7ab7717de3fad2f11c43d12803cd35e6c6a9beb97841fd18a4e285560f9ae746f9a541ab8f636908282da10d8613734cfb53d38e9268c292e96014252644d1349a8ce82032993d84611c01459e16d52c5a88c2eef707537b3c09ad911d87c37ec4427b341d85d6640c142c33a61690c30979acb882332e4b2179db2172edad02270cbc9dbb5c048e2e21a175a6ce5a634d016f3d2a2c10419fd47468a25ca052d3ee951b38de6219acae9c76c26b48297bf2ef71c609cd24209a56d83c05d546c4d830e22e36ce1982f5c47e1e8392ccfe3c93a6e78d8b372d7fa50738c0c6aed25fe207decabdd0768e882b9ad51af2d01e4889966fb136747df88b485cd2360bf9b573bcdfa47df220810a0af6f53411ac035ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b648f87963d251a5ca90fb161df3e76adc9d164841c0af55251bbf858682b56cb57100671fcaeeed6e11f69ad416978040000",
    ],
    [
      "ETag",
      "cJTTLkkZleimU7GSZVwonw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6e82401085df657a8b897f6025f1425bdb9aa8b582578d312b0c88051677871a637cf7ce526b9bb6497b0333c337cb39078ef092e421b8b04ee25d89ea7015233d99628eba4c49f3ad90b946b00049c44cda8359d3a3c12eb6c37096b784a6b243fb5e8f091d6c3013e01e214a300d35b8cf47c84586bc16c8b4ccf255d5594087c20c3d7f3e9ade739fc9d0f4d3c578dc1f8c8770b22e8ba120b1aaf87fac2d4f166ce57a8e112acc03345a0a25b718d0c8d8d4222b52ac6959aa00355470f52056b22c8492b2c6935ab35b6b38cd7ab7d1adb76cc7ee3298ca4050227366171eeb039224d2b9dcb34b70185055c986a3eafacae324ac8c987234f59d76a5ef2bc0d2a224c5d5df20ebdd08fe0c1fd83982ef9cc86499d385ba1b3ff67f3b8e33fd3ceab6ef0f7f109a38a90be28f2643cfef4f66865b9ebd0f0e847aa62407a9d164d8a8b7afed8e537f8ff5469aa8f93d2ea9122d0804ff1d0f09811b8954e3e90d03ccfdd87b020000",
    ],
    [
      "ETag",
      "5BP2StBqg5ddPn3astu7tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:45 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT MAX(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "e2",
      "40",
      "10",
      "fd",
      "2a",
      "cdde3f1a058ad0f223311ea73daf09162d45cf5c2eb0dd4e71b5ed96ddad8618befb4d5b5139134d48caee7b6fe6cdeccc3379e059448624e4cb550172fded5e84e49080a64bbc1dd8c9f513acaece8ba7f16a7290df1d44abf1e8f81819bc54299ae6093494282403359c4d9b4b298a9c4a211a18a8d1311b6dfbc81cb40766c7b2ad01ea1424f198670fa8bed33a57c3566b9bbbb914629900cdb96a3291bedeb71e8f5ab914f7c0b46aeda66c6116d5fa3ce9492218d55c64c7b3291a2814c839a4942768e14d1985df774337394d9b4b243f720694315164bab4852198c862be2c6415950c9f4965f3dd1f3275c6ce69605c8c7eef2d685a4a17fb0655c67c2e4115893e34165851cc1398f3685123f983f1d39f5c2082f9efa802b5306e7e39be63ec925dcf98799e330d8cbd937de3dc9fcc2e8d1fb73b1cf41881d23cab1c06344ca074f7d244f7e3d39502aa31670dce7ba64ddb7d7310c6618fc5fd8e15c62684613fec59b4139a6cd0856e1402459d2ea3572a9a892cea4571b767b6bb7d165ac0222b8acc5e6876a8cdbaa665db9451665b9491cd2179925cc31957b950bcee24b9f1ddc09907fecc3b1d054e55464cb15f67b5b9b288f73e351689a44feada94281798a97c16d70b1c7f741ab8d74e3d09635852b69eae7016629a2840369534050df24244d834723999ba813bf146635454cf7bb9652832fcf3fc2608d679d5655d7dc9c8f747b7a8a152d2f57f18fab0bb64b37997ee9a264545a9f8d5a98eff5803a48db5bc9d8ec8e6ef067f870447be8e4eae668e7f4bea2b1f629090b1afdf1dc915f0e5e66ed708b9b8489846693ce3943155266112ea69e36965f7456d",
      "5b56a74f2ab2d41f30bbdfdfb6b58c5146841432fd5251bd4655a34aa850af240471483cd73b47f41fc87058b8c6040000",
    ],
    [
      "ETag",
      "96lVweqQGuwLqO+ph+dqLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff6d505d4fc23014fd2fd7d70df6212490f0000604b3a04e48348690d25dc6605b47db6108d97ff7b618e5c197b6f77cdc9cd30b1cb232813e6cb2f458a33cdfa5a85fcd234655e75ad15589522138809aa5a47c9f74261f3b3f39b4dbf2184f79f994619e0e06a4507c870583fe05b684250afa9f17285981645bafa5dd48327dae0c32899e870b1a0b919871be8ca2e1281a43e3dc98aac39f61365f8c1fc7f17f9655e3c05e6c62dca2c492a3c95049b147ae67a69e624595a3ab442d392ab0624ba452d4159342b884b8a1e7faddc0ebf93d2fec743b3d12e682339d8992b4cb37ca065a6896c7e28bda414002699f54746bcf13c161cbbfb7354e5663d2ddd2412b087f69dfd0ab9fb5a3b346f52205655468e279d7a80fc2c4d7544bcb1a1de08c7e7a9ae9ebdc7c03288ad506c6010000",
    ],
    [
      "ETag",
      "XF5FYh1dk//rqRHcnJielg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:46 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb64ad8e2234a43b3eca4f6ba90cc82a0324b5a0402089129ddebd4e8ff0de1314554539c7a2bfd00ebc03556868512d2266daf84c53c592e6f691b7e80ad32111ace554968db93e366f9e0863691fa5eee353e94abd3f28bc0f82d10aa0bbc5a421c5d58567fd91eadd60ccc567e1967d8efc6cf0204927367f6cabef6c6f3911451d53db8bdfaacbf2161de2655284932636abd6d2a21466bbd1d9c73f2b3d94736733768e8ccd245fd776cb0743de6dad0da76c72575c78b54e203b43a94c7562de447869851aeeef5fbbb82328dc9000cc009d583d528eeb17776d203403ff762c14a3af009b16231dc1ef1f8e162b341a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-31-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fdb3014fd2b91f795b6e9fb2155a32a61546b534853d098a6c8766e82218943ec001dea7fdf8d431908093ec5f63de79e731f792677220bc9843011df9750ecbedd4a468e08681ae3eb757afda49677bbbfc5726e5f3c853f3b8ffefd6c3a4584a8588aa679020d25cb82839a6c37cdb890654e0b291b98a8d16d37da838e3d6e8fed6e7fd01f234f41122d457687ec1bad733569b50edacd58ca38019a0bd5e4327d7d6f3d745a79216f816bd57a2fd94215d5fa5cf47b2239d54266d3ed060d940a8a00522a12b4f09f19b2e3f7a99b82a6cd18c10f8203e55c9699ae6c610a2eb348c46561b292c9333136df1cc8c6593a73dfe23229d32cc8680a475648350df42e07ebd45bafac857bbaf656337fb17683cdfccc59cd9af3f572bb7237d6d599e33996a62c01c3b5a6d6b1b9b97841fd1094169951f7abe74af9a5418b8f63a90828ada00e06437b40db237bcc2236e4d1a8db67910d8c8dd8b04fbbcce6e31ef44206147946d4b0682633d6ebf77b8cf20020a2416f308882719bb320ec8cec61cf0e29ebf4c8fe883c1642c38950b954a2ee10b9f216be13f8ded69dcf7cc79410d132d127b5b1aa80b71e351688a04f6ada57512151a96af7c2f51d6f36f717974e3de125c494ef36f738e388260a104d0b6c9e866225436c1871672be704c16662e787a02293dfcfa4ea79e5e24dcb5fe93e0eb0b2abcd976c7c6fe1fe30760e884b9a9406f2501f488e966fb03674bdff83485cd23a0bb9d83ade2f523f7910410119ff7a9a0836812fffb5c3e22316571f6594c63bee0e5795082fa0de2161ca3db00783eea84d0cb8d01f62fdeef0d0b52a47951152c8f44b45f5e263a1b558a95e4118c4f1bba65bfb7f9978447b78040000",
    ],
    [
      "ETag",
      "ZmZxsLkyzrLC0QxdK2wTqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f82401085ffcbf48a0956a14ae201ad6d49d05ac45363cc0a836281a5bb4ba931fef7ce526b9bb6497b8199e19be5bd0707784a8b181c58a79be70ac5fe6283ea411701ca2a53926e252f248201a8d8864834f3d75ed2eba4753cab47bd38bf7723ab1e0c8890d1167306ce019214b35882f3788082e5486b11cfaabc58359d016a5feae13c0cbce92df5398f753f5df8be3bf4c77034ce8b31536cd5f0ff585b1e0dd8f17580090a2c22d45a4ac17718294fdb942c2f336c495e8908253470f36023785532c1798b26ad4ebbd5b62fcd7ebb6f762cdbea1398f188a99417c42ee6a40f14572c0b784d2ec126403425194e9aeb0b8dd3b831a24b6f1adadd46df5780a4256986abbf41d2bb65f4193eb05304df3996f3aa5067eac6bf777f3b8e32fd3ceada0dc73f08a928a933127a93f13c742733cd2d4fde877b8572263805295167d836bb3debca36df631d711d35bdc751a2420322467fc75daac0495826f1f806b419e99b7b020000",
    ],
    [
      "ETag",
      "e0mx8f83iwdPwC8dmOAc5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:47 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553fd4fdb3010fd5722ef17d0da26fdfe9010eb4a60914adaa529884d536b2797e036894bec1475a8fffb2e09053a24902239f67befeeddf9fc44d63cf1c980301e3e6490eebeac042315028a8678faebebaa1efc5dc7f183bedd855383aff4cbdbc7b33364f05c2569bc89a02a45967a2007f3592d4c45b6a1a910550c546d36aaf54ec3e8d7fb46b3dd69f75127210ac63c59a3fa5ea98d1ce8fa21772d14228c806eb8ac79227e39d7b70d7d938a15784aeac72975cc22f58f939e47c2a38a8be46c3e43039984740131e5115a7855faecdb71e81aa7712d44f2967b403d4f6489ca6d61084f24010fb3b4884a064fa4b0f9e687ccccb13972b5d1646ebb274b9f2a589e6a546a8b450a328b54455b6245018f60c1fd65896cd6daa533b94604f3df530972a9ddfe301d533b265bb636b76d73e66a27e7a7da9533994fb5ef77471cf4e883543c291cba944590bb7b6ea2f5feea72015598b304175da343eb3da3cf02d6f5825eb3cd020318ebb16e9b3699e1f55bd0f21950d4a93c7aa1a28948dabd2e345a06eb1a3e05d6f43bac6504f9e23518ed5084fa7506ad16d957c863ca155c70b91192979d24b78ee59a0bd799dba3a16b16650414fb75519acb8b78eb53619148faa0ae7d8e728199f26bb16cd7748623d7ba31cb49184348bdddec016721a0910464d394c6a020bd163e368d4c2733cbb526f6708c8ae27aa707862483df4faf0277b729baac8a950c1d6778871a9aa674f71f863e3ad882fd9b743734ca0a4ac12f7665fc6d09903ad6f2ba6b90fd9f3d7e1582235f46273fe7a67347ca2307024821f13ebf772417c0a72ff7f08c908b0f09d348857b9c324fe649bc14ca69e37161f759dde9b65b4d529053f50eebf4fb87b6e631f2881043a29e2b2a9f51d1a81ccae40b09411c12dbb2af10fd07a14f703ec6040000",
    ],
    [
      "ETag",
      "Z+j1fzkmmq/vygP0ij/FWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcb786d23945203090731554910b5cac910b26ca7b5d076eaee1645d2ffeeec620c472fbbb36fbe99bcb747d815750a63d814f9478bea7091a379b64582ba2d8de6aba15a23788046e44ca69befdb5928aeda69f075993d3e84910c17f964c28496ef5809181f212bb04c358cdf8e508b0a796cbd566e2363e6d05865b6788defe284858a522b2c96f3f9f5741e43e79d8d35bb7f8dac3a0fb6b449304385b544eba251b445696636a0165553a2afa955123538d83572456d231491cf8a3f08fc7e14f446fd516f308c8623064b92c2145433bb7c616f60c88832a14fce070103ca951c3573e79ee5a1cbb07780b576de8bfe7a7ddb5bfd2e9c1e0cea2745ec4ea335d63b99bc216bdc7020a35af4400afee5fbc29cdedd0f9c2c7ba6c2010000",
    ],
    [
      "ETag",
      "dbzFI4a7uB2x/fOM46c4Ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:47 GMT",
      "Server",
      "ESF",
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
      "d1",
      "96",
      "42401800e07799ebea28d1d83b6c8876a31275e3307ec6b6c6ac41ec9e7df7edec237cdf0f4a09012192aeb903432f684a57da822c3c8e8da48426dfbd575febf43158af768b3f1c110873badc68385498d6897f5e6e70e7641bef3352709cadd49bdd4f2ac57eaf6f3b5514de44f7c738939cfa1a70f34264ede0952a756bd9b4b6fba811baefd515cb85aa38a5a3f9eb7500ae11b0ebe9385a9c9c0e6fe25b92231000991cef49b10c6e7326c55d95ba706c48efd088298490c10ae5f062e8b64a793f8ae6be2bac69c859c13d9f0d73c9e52448c2339a211879d58248aa275756346d86feed49377178061890b6d0a2df3f3b07ef761a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-33-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553db6e9b4010fd15b47d8daf180c96acc6b249e3cac62dc689aaaa42bbeb816c8259ca2ea9d2c8ffde6189d344919227b333e7cc3973f123b913c59e4c0813d9ef1aaa874fb7929133029a661895f6781857f4af33f4bcafd7ccb7e70bbe9a4da788100d4bd143994347c9bae2a026bb6d37ab645dd24aca0e16ead87667e00efbfec0efdb8eebf8c85390a72b51dc21fb46eb524d7abd9376379332cb81964275b93c3cc77bf7c35e59c95be05af55e4bf65045f5de17fd9c4b4eb590c574b74503b5822a810315395af8cfdcb3f3d7a5bb821eba1982ef0507cab9ac0bddd8c2125c16a9c8eaca54259347626cbef820db6015cc638bcbbc3e1449410f7066eda9a6897e28c1ba88366b6b195e6ca2f52c5e6ec2643bbf0cd6b3ee7cb3daadc3ad757d194481a529cbc170ada9756e5e213e507f0f4a8bc2a8c74db8517e1ad0f2ed5a1a024a2b6893c9b8efd281d7f759cac63cf56c87a57d60cc636387daaccffd118cf60c28f28ca861d14216dcf31c18ba69b21f709a8cec819b60c04dd8d8a7c07c1778cac9f18cfca984868550a554a29d10b98e967190c4d12e9ccfe2c0b490d23ad78bd658d3c04b8f1a1b44d03b3d1d9bac90a8d48c7b19c641349bc7cbaba0ddf00a32ca1fb6bf71c729cd15209a56383c0dd55aee7160249cad830582cdc6be9d928a4c7e3e9266e68d8b17237fa6c7b8c0c6ae36bf641b47cbf08bb173425cd1bc3690fbf6839468f9067b43d7c75f88c4236dab90efbb20fa41da5004295450f08fb7896093f8f0bf763a7cc4e2e9a38cd2f8c6dbe1aa11e115b437244cbb27b6ebd9f6801870a5dfe4468e739a5a53a3a9080728f45347ede163a3ad58ad9e4198c4f587665ac77f31957d1e78040000",
    ],
    [
      "ETag",
      "o372Traz5288JWb93CDcLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92614f82501486ffcbe92b2c4dc564f3039aa54dcd106bae3977850362c0c57b2f35e7fcef9d4b66addaea0b9c7378cee57d5fd8c3739c0560c32a8eb6058add5984ea5e172eca2251926e39cf248201a85844e463badd36abb7d6f96a1ee40fae53cbe6fd6ed46e1321fd35a60cec3d8431268104fb690f194b91d67c9e1469b62c3b03d42ed7c3a9e70ec637d4a73cd0fd78361c3a9d610f0ec66931608a2d4bfe1f6b8b83011bbe72314481998f5a4b2ef8067d35d036254bf3044dc90be1a384122e1f44821739139c9b34316b35b36a5d545ad556a5d6b01a2d0213ee3315f38cd8d994f481e28a252e7f2597601120ca920c87e5f585c671501ad1e560ec59f552df5780a4857182cbbf41d2bb66f4193eb06304df3996f2225327ea7a78e7fc761c65fa79d495e3f57e1052515227c41b8c7a53cf194d34b7387aefec14ca89e014a4449d61b552bf6c34adca7bac5daea3a6f7d84a146880cfe8efe8c70aec9025120f6f3063c5687b020000",
    ],
    [
      "ETag",
      "Wmqq71J6/bYdpVRA3nYHCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:49 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT MIN(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "a34010fd2a64ef1f4d6aa13f28a589f17a8a7724957a4035e672697761c155607177a9d733fdee3780557b269a34a1bbefbd9937b3334fe89e15319a20c2d2878a8acd973b4e5007518553b895c53acfce87591005eaefd5e34037f5fe9fe9f1313058ad92382f337a247925222a278ba09b0a5e9558707e04818e06c3a3dea86fd83ddb189823d3069da4593263c53da86f952ae544d777b9bb29e7694671c96437e2f9cbbdbeeeeba5e077345252df4fa94316a97f9cf424e311568c17c78b000c54928a25cd31cbc0c2ab32265ff7437719cebb2990d72ca2388a7855a8da1684887891b0b4124d543479428dcd377f50e0cc9cd350bb70bd83558c155d1d6a586acba5a0b2ca54475b413d09cbe892c5ab1629efb5737f7e010864bfc592ca9576fdc3f11d6d9fec7adac2f39c20d40e4e0eb5effe7c71a97dbbd9e380c3984ac58ac65f8849466b6fcf2d74df3f5c2dc00a72b6e0d23246b837366c92102b4ac60393240625644c2c130f8811d9433a8c09c5a05375f446850b5e18496c5949d28bb08d7b49cf1cf489351819a69160da3749df22233236b089b61df42898a2674c965cb2b68fe8da77436719fa0bef741a3a4d1909867e9db5e6ea22defa545024903ea86b5ba38c43a6fa515c2f74fce969e85e39ed1ccc688aa34df0009390e04c5260638173aaa8b8e031340d5dce033774e7de74068ae6712f770c8926bf9e5e05e1a66cbaac9a2f9afafef406345808bcf90f031fa321da6edfa4bbc259d5501a7e736ae3af5b00f5a096d7531f6d7f6fe1d74130f06d74f473e1f837a8bdf26942052da2cfdf1dc80df0e9deee9608b8b04690462a38c39445b24e1209da4e1bcb1bbbcfea916dda266ac842bdc3aca1bd6b6b1da38e48735aa8e78ada256a1a5543957c21010843e2b9de7740ff0116bd68e9c4040000",
    ],
    [
      "ETag",
      "snvmlF4lScStzVw3/5/2xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff6d905f6bc23014c5bfcbdd6b0b6d5d05051ffc5336417456fb308648acd75a6d7b6b926e14f1bbef268e6d0f4248724f7e3739275738e7d51efab0cbb34b83b27dca502fcd2646d5145af15253a5101c402d3226e33c6c1793d53269927011ae8e171cbf67c3c18009951eb114d0bfc221c762afa0ff71854a94c86ddbadb43732a6dbda2893e13ae2aaa4bda9e6c96c361ccd22b839ff7aeaf31f3f9dafa397287ed4b2b93970a25d8c079458a5682cd4924e98eaa949a7445917e82a6a648a0a2c6c0f32494d2d2491cb8adb7976fd6ee0f5fc9ed709bb618fc18252a173aa984d56ec0d346951c4f4c5e1206040da2de73cd8f9d3c85ee0b95ec0c386b192f5f810f27f21df409b9f2746ad46f52689fd2a3456bdbbed3199289a236ad9a003a9e04f7fcdf5bdbe7d038787923bd1010000",
    ],
    [
      "ETag",
      "Ri5yODSQUuU5O5ShqeCYgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:50 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd0dd5682300000e077d9b57a408441770ee227d08a24d11bcea40d0918b829b8757af73c3dc2f7fd005c964488e2da3784812720f1d259948b78b05151d1b59f1f6f551b4499eeedd0764b5d23472c6116657e66f469fb2d8f56b79f46daee9ff3b6d1debdc435a9b8e30e8d7724d40d8d9e1820b1ed5084e1b983069cc789ba0478a5658e0a06729a5b906b59f915d3740393ec535ed9e10386fa86bda997baa2a35b4f53e9cb8eb46e8925a49618e2a94ed75180dd893bb0d157a9306ff01c5aa7ce8ea243a2693b865e55c0e7176a463d634abf2cf7caa6199801721f6a4e44513fb886e93833f06f2fae72208f004430271cfcfe01f9015ab01a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-35-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb82610027949d11aa5748d94908d9056d33421e35ca813c0149b4e5195ffbe8b69ba5695da4fd8bee7dc73ee832772e0c58e4c48ccd3871aaae397bd88c9050145537c85f961d97387627fb0f3afaea4d7967ddca7d3292278c392342f33e84851570ce464bbe9a695a84b5a09d1c1449dbedbe90d6c6bdc1b5b7d77e08e9127214b96bc3820fb5ea9524e4cf3acdd4d854833a025975d26f29777f3d136cb4aec812969be953451459a1f8b7ecb04a38a8b62badda0815a4215414e798616fe3377f1e5dbd45d4ef36e8ae047ce803226ea4235b630051345c2d3bad259c9e489689baf0e64e32dbd79683091d579111534870b6347158dd4b104e33a58af8c857fbd0e56b370b1f6a3cdfcc65bcdbaf3f572bbf237c6dd8d177886a271069a6b4c8d4b7df3f182fa3b908a175a3d6c9e1be5e7062dde8fa521a0b48436180dad01ed8dac719cc443968cfa6e9c5810c7a378e8d27e6cb1b103ce2e068a3c2daa59b4100575d8c085d889ac218c2367d4ef4774e45a51ecec6c178390d0849c2ec8df8a2bb8e2b21492b71d2277c122f4a230d8faf359e8e912125a67eaaa35d614f0daa3c20211f4414da726ca052a35ed5ef8a117cce6e1e2d66b27bc8494b2e3e601679cd04c02a26985cd5350adc40e1b46fcd9cabb42b09ed88f735092c9ef27d2f4bc71f1aae52ff41007d8d855fa4b3661b0f0bf6b3b67c42dcd6a0d796c0fa444cbf7581bba3efd41242e699b85fcdc7ac12fd23e0590400505fb7c9a08d6814fffb5f3e22316571f65a4c23bee0e938d08aba0dd21aecb3db387963d18100daed4bb9863dbe7ae35399a8c9043a19e2b6a171f0b6dc56af902c2208edfd7dd3afd036a60ee2278040000",
    ],
    [
      "ETag",
      "eCkL157ojk2m+5saF02yjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bca509b5052d891755ab36a13f523431a669b630201618dc5dd4daf4dd9d45ad464df40666866f96730e6c6095953178b0ccd2871ae57a2f457d698a00559d6bc5b78a4a8560016a91324941a74843898ef48bc9cb4a3d5f2f6feccba3232654748785006f03498679acc0bbdd40290ae4b588f2ba28174d67815e5766380b83e1f89cfb8262d38faf7cbf7fec0f606bed1663a1c5a2e1ffb136df5a704fcb001394584668b45492ee31d243635389a2cab1a5a896112a68e0e6412aa9ae84246af1a4d5715a6d77dfeeb57b76c7719d1e833945426754327b35637da0498b3ca02776092e03b229d970d25c1f799cc58d11530ec7a1db6df47d05585a92e5b8f81b64bd77823fc307f61ec1774e1454977a479df993fe6fc771a69f479df6c3c10f42694e6a8784c3d16016f64753c3cddfbd1faf35aaa9240e52a1c9b06d770f9d03d77e8bf5844cd4fc1e4fcb1a2d8804ff1d1799062f11b9c2ed2b0d5116757b020000",
    ],
    [
      "ETag",
      "oR3mgTre5rLmOzksxVbY0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:51 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT MAX(`date`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8553616fda3010fd2b91f7a5952884101240aa3a46c31609421742bb769ac0719cd46d8853dba14315ff7d97a4b465955a0929d8efbdbb77e7bb2774cfb2080d50c89287828aed973b1ea206a20a27703bf9ab5fdd909bc7e978334e786a8f47b9719b9c9e0283952a89d7794a4f242f04a172b0983713c18b1c0bce4f20d049c73a695b86de6ff7f54ed7eaf64127691a4f58760fea5ba5723968b5f6b99b09e7494a71ce6493f0f5cb7d6b63b472c1ef2851b27598b2055964ebe3a467292758319e9d2ee660a090542ce91ab3142cbc2aa3f0eb61e826c3eb6602e40d231413c28b4c95b62004e159cc92425451d1e0095536dffc417367e28c026d3afc75b48ab0a2ab630d4b6db9145416a96a682ba82766295db2685523f9bd36f667534020fb2d9654aeb4ab1f8eef688764d7d3169ee7cc03ede8ec58fbeecf1617dab7eb030e388ca8542cabfc05384c69e9edb985eefb872b055841ce1a5cdaba85db3dbd1fc6a14de25ea71bc63a0dc35e68777127d449dfa46614520c3a5546af5438e359649b663b8ee3c808233b360dc3e8d998b66dc30a6d3dd2c31eb14cd3223ada35d0a3608a9e339973c9ea3ea22bdf0d9c65e02fbcd13070aa32620cfd3aafcd9545bcf5a9a048207d50d7ae4419874ce5a3b85ee0f8c351e05e3af51c4c6882c976fe009310e35452606381d7545131e511340d5dcce66ee0cebce10414d5e35eec19120d7e3fbd0a826d5e7559555f34f4fde13568b01078fb1f063e2c13ed766fd25de2b4a82815bf3ad5f1373580da50cbebc940bb3f3bf835100c7c1d1dfd5c38fe35aaaf7c1a534133f2f9bb03b9023edddbfd120117d608d2480567983222cb2444d07adad8bab2fbacb6dba6596dbdc242bdc3ac6e6fdfd632461991ae69a69e2baa97a86a540915f28504200c89e77adf01fd07420d0477c4040000",
    ],
    [
      "ETag",
      "Lx0WZcZwMFvFgol7FCp2hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4f",
      "c23010c6ff97f3754bb611d091f000ba28c94264824b348494719b836d37db4e2484ffdd6b31ea832fedddd7dfb5dfd713eccb660b43d894c57b87f27855a09e9b2241d5555af1d652a3101c402d0a267b69777db8c9d3a6f6d367d13fc42f69fd391f8d9850d91bd6028627c84bacb60a86af2768448d3cb65e4b7b2363fad81ae56ebc88b8ab696bbad9328ec7933882b3f367a6ddfff2d3d922ba8f92ff4656670776b4493047894d86c6422b6987999e9a744ad46d85aea24e66a8c0c2f6a090d4b54212b9acb8bd81eb0f022ff443afd71ff443062bca842ea96176f9c4de4093165542070e070103d2969c33b7eb8791bdc073bdc0f5431bc64ad6e37f50e0fd40be8156df4f4c8e1ad5a324f6abd058f52eb66fc944d11c51cb0e1dc8047ffa43a92ffdf90b7e59b3c1d1010000",
    ],
    [
      "ETag",
      "3Wu7w8fWnm1WVa5wLZWmxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:52 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dd0d19642400080e17799ebeab498327b9792862d3285dc388c49cc16860a7bf6ddd7d937f8bfff07c494b2a689da92b307f8047d2ca1199d5995aa4519abfc77f8a17281dd8dab0735a2da325bed792d5ff2f5a0844b9c06f556e157b34b6d552524c2811ddf7727c116c9de437cfeb65dd787fa11993addfa2f67ad58fc9615d695d0d31d127d339854840b6d283d09431c94ce76fef27b39f1e7aba2c53789789256bc98e05f8b30df2570f80e4be81c5cf9744135120133922e330cb383cbf489af4f723ec3c3ce8b15c9eea764ac2f0b9e07a6d2d6d1b47d203001acab72c19a281fb932446802feed51db576c1ca0b15830017eff00c447b1b41a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-37-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda3c204f22456b94d035534236421a4dd3848cb950b7802936a9b22aff7d17d374ad2ab59fb07dcfb9e7dc074fe49ee711999090270f1594c72f7722241704144df0b55c647fe5e6f17161c7fb397b38ee8be1f74d329d2282d72c49b32285961455c9404e76db76528aaaa0a5102d4cd4ea8d5ae6d0eadaa6dded0d86031b7912d278c5f37b64df2a55c849a773d66e27422429d082cb3613d9cb7be760758a52dc0153b2f356b2832ab2f3b1e8d75430aab8c8a7bb2d1aa82494016494a768e13f330a2fdfa66e739ab513041f3803ca98a87255dbc2144ce4314faa5267259327a26dbe3a90adb372e6bec1445a657990d30c2e8c882a1aa86301c695b7591b4bf76ae3ad67fe72e306dbf9b5b39eb5e79bd56eed6e8dfdb5e33986a2610a9a6b4c8d4b7d73f182fa1148c573adeed7cfb5f2738396efc75213505a42130c46dd2135c75d3b8cc3118bc7bd411877210cc7e168407b6197d97de8472150e46951cda2b9c8a3fed8ee8de338e832cb0cfa368520b44c33805ed8b7e8d034ada8474e17e4b1e40a165c1642f2a64364ef2d7d27f0bd9d3b9ff98e2e21a655aa168db1ba80d71e151688a00f6a3ad5512e50a96ef7d2f51d6f36f797374e33e11524941db70f38e398a612104d4b6c9e82722d226c1871676b6781603db11fe7a02493df4fa4ee79ede255cb5fe83e0eb0b6abf4976c7d6fe97ed376ce881b9a561a72680ea440cbb7581bba3efd41242e699385fcdc39de2fd23c7910430939fb7c9a08d6814fffb5f3e22316571f65a4c23bee0e93b5082ba1d921aecb3db347963518130d2ed5bb58df1a9ebb56e7a8334206b97aaea8597c2cb411abe40b0883387e5777ebf40fc05f144d78040000",
    ],
    [
      "ETag",
      "rDmzsOwwD9fWCcqyWp6JOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcb78a509688b96a48756ab92b6585bf4624cb3c28054607077696d9afe776751ab5113bdc0ccf0cdf2de832d3c65650c1e3c64e9738d727390a2be36c50c559d6bc5b78a4a8560016a9132e9bc4434f24741e90683dbd5eda43db19787eb5e8f09153d6221c0db4292611e2bf0eeb6508a02792da2bc2eca45d359a0379519cec3991f5c705f506cfae0663cee0fc643d859fbc55868b168f87facddef2c58d2c30c1394584668b45492961869dfd854a2a8726c29aa65840a1ab879904aaa2b21895a3c691d1db71cf7d0ee3a5dfba8e376ba0ce614099d51c9eccd9cf581262df219add925b80cc8a664c349735df1388b1b23a6f483d06d37fabe022c2dc9725cfc0db2de47c19fe1037b8fe03b270aaa4bbda7cec757fddf8ee34c3f8f3aeb87c31f84d29cd41e09fdc9701ef62753c3ddbf7b1f6c34aaa9240e52a1c9d0b1db279d63d77e8bf5944cd4fc1e4fcb1a2d8804ff1d9799062f11b9c2dd2b85df567f7b020000",
    ],
    [
      "ETag",
      "1xcoKIKNn6NBVvVM4M0j2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:53 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85547f6fa24010fd2a64ef9f36f107888a9a981e67698f9cc51e621b73b9e80203dd8aac65171bd3f8dd6f80dad6b4d72624b03befcd7b333bcb1359b1342403e2b3f821876cf7ed9efba44640d21877578f89674ca46a9ba63d56bd87f9d6fd75110f878860054bd0f52681bae079168018cca68d38e3f986669cd731515defd5b56e4bed6b7d55ef743b7de40948a2314b57c8be93722306cde641bb11731e2740374c3402be7ed96f6e5bcd4dc6ef2190a2792cd94415d1fc5cf42ce101958ca7c3d9140de402b205ac294bd0c22b33f4bf1fa76e30ba6ec408deb2006810f03c95852d4c11f03462719e9559c9e0899436df7c90a935b6469e329acc1cef6449d7057979aa50a12c1619883c9135658935452c81050b975564b3522edcc91546d0c11d152096caed4fcbb51465598086ca99623ae7ca31d5769499e358534f39393b552eddc9ec5af9313fc2a0e710846469e9d8a37e0285dbe7a6daef8fb22050890eaae0c250bb54eba97d3ff28d20eae91d3f52c1f77bbed1a1baaf06fd36b4431f28f26491bd64d194a75da0b4ebeb1ab434a34dfb61abdff643e8f4352d004307daa351a8aa6d20fb1a79cc98847326365cb0aab3e4d6b53d6be1b93367647a56594644b17be795b9a288b73e251689a04feada1751c651a93826dbf12cd71c79f68d554dc618621aeca60f381b114d04209a66740d12b22b1e62d3c8f5646a7bf6c431c7c8288ffbfa801064f0e7e995e0ed36659765f92eb4baed52ff00b8a1495e22b6d507d13a64bfaffd3f85e9bae61c656996d1ddc7e93fcc5fe2cb5565f1458f146a87558becffeef1a911bc455576f27b66b973526db910410669f0f5e820b80c7cf93338dc4cc4e2dd441921718d831a884224c8a01a58b62eed3eb30dbdddd34809cee4bb98a1e9879329721419610da97caea8ba9965a38a502e5e4018c439736ce712a3ff002f13247f19050000",
    ],
    [
      "ETag",
      "kwlT7Ot0IAAIL0TqYvRKFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f",
      "6b",
      "c23014c5bfcbdd6b0bed4499820f73745a2632bb153686488cd7dabfb74b524729fdeebba93eec712fcdcde9ef24e7a4833cad8e3083439a7c37a8dabb04cdd60e11eaa6309a979a2a8de0001a9130b9cc8a0f0c75bb52f253e5cf17fffcb28db7f339135a9eb11430ebe0946271d430fbeaa01225b26dbf57c3898c99b6b64ab8790f9641c44249472b6ce2f5fa71b10ea077fed8eafc5f965def404687084fa8b0926853d48a329426b405b528eb025d4d8d92a86180871f89a2a6168ac865c51d3db8fee4de9bfa536f349e8ca70c16248549a962367ee36c60c88822a21fee073e036a18b9ea69f85e06d976b84dbb7e77332d5a83fa551127d0682ff7ae419ec886331cdaa8061d90825f72959aebbeff05ed725c08a6010000",
    ],
    [
      "ETag",
      "GjlXeIsyHrcYrkFv1hKQUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:54 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd0497282401400d0bbf45a2c696280ec5a6689016488714341fb6550061b08432a778f9523bcf783124aa1ebe2beb9418dded09c60794dd7762bede28cc644c1a9e0dbfbfc312e759e66199f8f2062df21c54cb477cfc0c2d898c20e4793f4557c5f585c6613919c56d78f24104db61fcfbd6188ae2a59ddc5f23c621a8ebb193da5c22f52742f15ffc3f5b46bdd1a8d9fb991c6550cd7a91d54e4e11c98470f96e5cf909437ba8472484da806c7fe6470e28dbe6fa3610159a3ceed7e0e757225895ac0511d4a8e6796eef224d2071c0caff70d979db6c7a66cd00ac1d4160cbab8787285ad2cafd0bf3deee7169e013b481830f4fb0730c47f7d1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-39-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b4fa34014fd2b64f6ab6da9f49d346b53716dd2d215688dd96cc8cc70c151ca2033d4a8e97fdfcb605d8d897e82997bce3de73ee085dc8b3c2613c244fa5041f9f4e34e32724240d3146ffd7cb8dd0f6fc2e7c738b09f61fb5cce37e26a3a4584a8598aee8a0c5a4a56250735d904edb49455414b295b98a8e58c5bddc1a93dee8e6da73fe88f91a7204b9622bf47f6add6859a743a47ed762a659a012d846a73b97bbbefec4f3b4529ef806bd5f928d94115d5f95af4672639d542e6d34d80062a0565043b2a32b4f09f19b3b38fa9db82eeda2982f78203e55c56b9ae6d610a2ef344a45569b292c90b3136dfbd90c05dbaf3d0e232ab767994d31d9c5831d534d24f055817fe7a652dbc8bb5bf9a858bb51705f34b77356bcfd7cbcdca0baceb4bd7772d4d5906866b4dad3373f2f080fa31282d72a31ed6d7b5f26b83169fc75213505a41138c86f6807647f698256cc89391d367890d8c8dd8b04f1d66f3710f7a31038a3c236a5834c79abb098b216611b71d887a03bb1b8d926e3f727a89338c93d1a00b8c1c4ec86329349c0b5548259a0e916b7f11ba51e86fbcf92c744d0909ad327dde18ab0b78ef51638108faa2a6431d151295ea762fbcd0f567f370b1759b092f21a5fc2978c01927345380685a62f334942b1963c388375bb9e7083613fb7d0c2a32f9f342ea9ed72edeb5fc8d1ee2006bbbda3c4910fa0bef97b173446c695619c8be7921055abec5dad0f5e12f2271499b2ce46ae3fa37a4b9f221811272fefd34116c02df7e6bc7c5472cae3eca288d67dc1dae6a115e42b343c2947b640f7bce78440cb8d49f62fdd1e9b16b758e3a23ec20d7af15358b8f853662957a03d5bf938de7996e1dfe014754587a78040000",
    ],
    [
      "ETag",
      "Rn7Vv7YTzwdS0zeVzrCUiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92416f82401085ffcbf48a8956a585c4835a6c49942ae2a1698c5961402cb0b8bbb435c6ffde596a6dd336692f30337cb3bcf7e0004f6911810deb34d95528f61709aa992e7c9455a624dd4a5e48040350b18448dfe976369b91b72b462e269d87613a735e67bd1e1132dc60cec03e409c621649b01f0f50b01c692de4599517abba3340ed4b3d9c07beebdd529ff348f7de623cee0fc60e1c8df362c4145bd5fc3fd6964703b67ced638c028b10b59652f02d86cad53625cbcb0c1b9257224409355c3f4804af4a26386fd0a4d1b61a2df3b269b5ac66bb6b762d02331e3295f282d8c59cf481e28a653e7f2197601220ea920cc7f5f599c669541bd1a5eb0566a7d6f7152069719ae1ea6f90f46e187d860fec14c1778ee5bc2ad4991a8deffbbf1d47997e1e75d30f9c1f845494d41909dc89330ffa93a9e69627ef83bd4239159c8294a8336c353bd7dd2bb3f91eeb90eba8e93db612151a1032fa3bee520576cc3289c737c4a94b307b020000",
    ],
    [
      "ETag",
      "RE54hhFNqnFIeg4YCiQExQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:55 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3010fd2ac8fba7d5f2832484904851c752da654b490b2455344d892186ba2598daa65354e5bbef304ddbac5b2b21817defdd7b773ef388ee68b6460314d2e4be207cfbe99685a88688c409ec4e7d1ecf474934f9617c4f178e39bfa2679fede11010b46409bcc9535217ace011118399df48382b72cc19ab43a2baa1d75b665befb7fa7aa76b76fbc013248d2734bb03f68d94b918349b7bed46c25892129c53d188d8e679bff9d06ee69cdd92488ae6a164135444f37dd19394455852960d673e182804e14bb2c134050b2fcc75f8e5307583e24d2301f0038d088e225664b2b405292296c53429b8ca8a068f48d97cf5817c67e28c026d349db9c1d10a6f4af2ea58c3425b2e3911452a6bda0a6a8a694a9674bdaa22f99d76e64d2f20020e6eb02062a55d7f733c477bd95a6943ed44b3dd53ed30c1d8d566aeebf881767472ac9d7bd3d9a5f675718001e76b2224cd94ef008729293d3fb576fcf6404b0296205a05973dddc42d4bef8771d88b62abd30d639d84a115f6bab813ea51df20c63a241878b2ccae58386399deeee8a4d383a7db368cc868e35e1f781d2bee58ba15f775ab4d7a56cb44bb1afacda924a754e44cd0aabfe8da1b07ce32f066eec80e1c55468ca187a795b9b288d73e251409a077eada9551ca40a93cacb11b389e3d0ac673a79a8f094970b4f5ef6142629c0a0268ccf18648c22fd81a9a862ea7fe38184f5d7b020c75e8977b8440839f8f2f84609bab2e4bf5467ee08ddd7365608f98e3b4509087ea03d9397845bb5dedff696ccfb317208d39c7dbbf62508e6994f47f4828bc5a5536f7922d54aaed576db4fbb583a786e03e55d9d1d5ccf116a8daf2484c38c9a28fc707c02af0e16f617f47010bb714648484350c6b244a9188936a68e946d97d62f7ba66a7851498cb3731ab6dee",
      "4fa7cc5166241b92c9a78aaa3baa1a55860af10c8220cc9aab0e6af707ada2c51123050000",
    ],
    [
      "ETag",
      "OSrfVCgcLK4JlYE6VQiF+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90416bc2401085ffcbf49a408cd53682076d830988d8b4164a1159e3248d269974776315f1bf3bbb96e2b197ddd937df0cefed097645bd8101ac8bfcbb4579bccb51bf982241d5965af1d550ad101c402d72263f1ea2f961f2fefcb8ef66f1dc5751501ea2d170c8844abfb0123038415660b95130f83c412d2ae4b1d54ada8d8ce963639478f6164ec284858a3646982da6d3d1781ac2d9b9196b76ff1a599e1dd8d23ac10c25d6291a178da42da63a360195a89a125d45ad4c5181856d2397d4364212b9acb8f79edbe9fb5ed009bc6eafdf0b182c2915baa09ad9c52b7b034d5a9409fd703ef01990b6e4a8993df72c776d86bd058cb5db9effd7eb98def277e1f8a851cd25b13b85c6987735f944c6b8e6405ab6e8402af897a3425fdfe70b648b7c0cc2010000",
    ],
    [
      "ETag",
      "Y7HPxGVD8v3fIP2sH9lxHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:56 GMT",
      "Server",
      "ESF",
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
      "4d",
      "7282301800d0bb64ad4e1502d21df8533bc9b46011ab9b0c81af104b20069060a777afd323bcf783d22c83b6655df30d357a4663baf066d98ca865c08a5ce106fa9a05d82face32025eb2fd48edeaaf6029d69dc53e3eeaacc4f0a325c55e62c9b727195735c19e2dceebbf3e67d755c2565b9ed43f7557666af2a9ac7ee61c02b1ee0ed005e4e9f8a829b5144cc5551c005fbacfa7b40e3bd4e2c1e0a1b87757ff1e1b0a1ce3a69f5d7501be71ecb28947c2ae2799c9e985bda7629750e37fec2657a36899ed6d6b89dc71921addff375443e281111ac738a26088c121a5a261e5c0b7bde04fddb59372a780404906ad0e8f70f1510a9801a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b4fa34014fd2b64f6ab7db7409b346bd3e25ad3d25d4a359bcd860cc3054781416650abe97fdfcb605d8d897e6266ee39f79cfbe099dcf23c221312f2e4ae8272ffed4684e48480a209bece65f4b4ef5ff81799256fad355f3c3dda4f0fd3292278cd92342b52684951950ce464b76d27a5a80a5a0ad1c244ad61afd533fbdd716fdc1d8cccd1187912d278c5f35b645f2b55c849a773d46e27422429d082cb3613d9eb7be7bedf294a71034cc9ce7bc90eaac8cee7a2df53c1a8e2229feeb668a092500690519ea285ffcc283c7d9fbacd69d64e107ccf1950c64495abda16a660228f7952953a2b993c136df3cd816c9d9533f70d26d22acb839c6670624454d140ed0b30cebccdda58ba671b6f3df3971b37d8cecf9df5ac3ddfac766b776b5c9d3b9e63281aa6a0b9c6d438d537172fa81f81543cd7ea7efd5c2bbf3468f9712c3501a52534c1c0ea9ab46777c7611c5a2cb607a330ee4218daa135a283b0cbc64318462150e46951cda2b9c8a3d8b22318f582011b8f8261dc8f021bfa66600dcc31b3067168db8c1c4ec843c9152cb82c84e44d87c895b7f49dc0f776ee7ce63bba849856a95a34c6ea02de7a545820823ea9e95047b940a5badd4bd777bcd9dc5f5e3acd84579050b6dfdee18c639a4a40342db1790acab588b061c49dad9d0582f5c47e1e83924cfe3c93bae7b58b372d7fa5fb38c0daaed25fb2f5bda5fb43db39222e695a69c87d7320055abec6dad0f5e12f2271499b2ce4d7cef17e93e6c983184ac8d9d7d344b00e7cf9af1d171fb1b8fa282315de717798ac455809cd0e715dee916d9943734834b8541f6266bf77ec5a9da3ce0819e4eaa5a266f1b1d046ac92af200ce2f85dddadc33fbf0e549d78040000",
    ],
    [
      "ETag",
      "Csdzy2JTJm7sk7MiDzx8zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92d153824010c6ff97ed1567b01493191f30ad984133c4971ac73961410c38ba3b2cc6f17f6f8fcc9a6aa65e6077f9edf17d1fece1292d22b0619d26cf158afa2c4175af0b1f65952949b7921712c100542c217286a37c3b725ee2c0dbf45e1f5c55ef42950c0644c8708339037b0f718a5924c17edc43c172a4b59067555eac9ace0055977a380f7c777a437dce23dd4f179ee70cbd311c8cd362c4145b35fc3fd6960703b67ced638c028b10b59652f02d86cad53625cbcb0c5b92572244090ddc3c4804af4a26386fd1a4d569b7dad6b9d96ff7cd8baed5ed1398f190a99417c42ee6a40f14572cf3f90bb9048b00d19464386eae3b1aa751634497ee34b03a8dbeaf00498bd30c577f83a477c3e8337c60c708be732ce755a14ed4b577e7fc761c65fa79d4c809c63f08a928a91312b893f13c702633cd2d8fde87b54239139c8294a8336c9b9dcb6ecf32df63bde23a6a7a8fad448506848cfe8edb54811db34ce2e10dccdd28857b020000",
    ],
    [
      "ETag",
      "PeDmjDAwfTLh7xZItyvctg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:57 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd6f9b3010fd5790f74babe5838f0492485197a574454a494b48ab6c9a12430c750b9862d329abf2bfef304dd3ac5b2b21817defdd7b773ef384ee69b6460314d0f8a124c5e6d31d0b5003118163d8357fe7e5b9d5b7acb3dbefd3ce822facbbcffc6a380404ad581ca779429a9c954548f8603e6bc5052b735c30d68444cd8eded44c5ded6b7dd5e89add3ef03849a209cdee817d2b44ce07edf64ebb1533162704e794b74296beecb71ff5765eb03b120ade3e946c830a6fbf2f7a92b0100bcab2e17c06064a4e8a2549314dc0c29eb90ebe1ca66e519cb662003fd290e0306465262a5b9022645944e3b29059d1e009499baf3ed0cc9ed8635f194fe7ae7fb4c269455e1d2b982bcb654178998886b2829a229a90255dafea487eaf9c79d30b8880835bcc095f2937e7b6672bfbad9532544e94917baa1c26705c65eebaf6cc578e4e8e956fde747ea97c5d1c60c0f99a704133e9dbc741422acfcfad75de1e6845c00244ebe0d2524dacf5d47e10055618f58c6e10a924087a81d5c546a086fd0ee9ac03828127aaec92853396414057312646a4f7744bd7ba5ac7d0ccb5d6b574d3b0822854ad9e117635b46da05f0515e494f29c715af717dd788e6f2f7d6fee8e47be2dcb8830f4f0b4365715f1daa7802201f44e5ddb2a4a19285587e5b8beed8dc6be736dd7f33121310e37b307989008279c001a1738258214176c0d4d4397d399e33b53773401863cf4cb1d82a3c18fa73dc1dfe4b2cb42bed1ccf71cf79b34b0435ce3a49490c7fa03e11cbca2edb6f1ff3423cf1b2d401a1705defc158372cc4e45ff8784c4cb556d732759757ebfd2d1f6e7169e0682fb5467475773db5ba07acb23112948167e3c3e0096810f7f0bbb3b0a58b8a520c305ac6158435e898405a98796a6d2ee33dbb20ca38324b8106f621dcbdc9d4e95a3ca48529289e78aea3b2a1b55854afe028220cc9a2b0f6afb07567d51ac23050000",
    ],
    [
      "ETag",
      "6zpuH7977FhZO4YsY7j+sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "83",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f4aa60520d24904352240d58496d84422861b34eac893a7677a488f8df3ba639f4d8d3eebcf9e6ed9bede15ad4192ce054e45f2d9aee21477e1d2f09dab6642b4743b545700059e5426e3477fbd4536d10beec2aff3d8d4bdfae964b21acfec44ac1a287738165666171e8a15615cad8f1686e8e8271d78cca36de879b3011a1a26c14e2348a56eb2884c1f933d65cff35f2313870a153826734586b1c5334862ea8793b2e6855d594e85a6a8d460b37f8d6c80db58d3244ae28ae3f7527b3a9379fccbdc76016cc052c492b2ea816367d936cc0c4aa4ce85bf6030feef5ba63b43b43626e31bb77c4f189c67759f2b069d101ade4939e0bfead871f88179d1e81010000",
    ],
    [
      "ETag",
      "GctyTU0au5EMPm4XUNl4sA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:57 GMT",
      "Server",
      "ESF",
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
      "64ad8e52d0d01d90d260041d3001564cc080f2110444a0d3bbd7e911defb013c4944d7457d5d883bf8041397d455b2220dd4a32cad0e3e5ca6973a6047cb486747a40e2774a007097fb74fbeae9ee6e80ef54bb3c28ecac8f5902dd570d2362782474bbb22a11a70b3b39763e9a1c8cc778e618ba2251327d751877e1857488d951da32cd4978f0bd9247b92f5836ceb2e3d8db9e50e5f32cf1aac1ddbf57c3e3f1e7ee96f0f46bdedf346c19c99e59dcd551a040cd7c149e1101d9dfdbdc785543979a9d1397af558f1504c5d96146e0816408ccdad155d747b733f14555d807f7bd44f8d7807e882b7a205bf7fdc2bd03a1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-43-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2bc8fbda2414f28048d11a2574899490959056db3421e35ca85b82a96d3a5555fefb2ea6e95a55ea3e61fb9e73cfb90f9ec93d2ff7644c529e3fd4209fbedc89949c11d034c7d795adebbb85d43f838d1c56e515bb992faae9648208deb0143d54057494a8250335de6dbbb9147545a5101d4cd4e9bb9df3a163fbe7beed0e86031f790a8a6cc5cb7b64df6a5da971af77d2eee642e405d08aab2e1387d7f7dea3d3aba4b803a655efbd640f5554ef73d1af85605473514e765b34502b90091c282fd0c23fe63ebd789fbacbe9a19b23f89133a08c89bad48d2d4cc14499f1bc96262b193f1363f3cd816c8355308b2d268afa5026253dc099b5a79a26faa902eb32daacad6578b989d6d378b90993ed6c11aca7ddd966b55b875beb66114481a5695a80e15a13ebc2dc42bca0fe1e94e6a5518f9be746f9a541cb8f63690828ada00d26237b48cf3ddb4fb374c432cf1da4990d69eaa5a30175539bf97de8ef53a0c833a286454b51da34a50c5c48f674e0247dd7f312df71dcc485e1c8f501fa7dcf23c733f247720d73ae2aa178db2172132de32089a35d389bc6812921a375a1e7adb1a680b71e351688a04f6a3a36512e50a969f7328c83683a8b97d7413be115e4943d6d1f70c6192d14209a4a6c9e06b9167b6c1809a7eb608e6033b1efa7a022e35fcfa4e979e3e24dcb5fe9310eb0b1abcd976ce368197e33764e886b5ad406f2d81e4885966fb136747dfc8d485cd2360bb9da05d10fd23e4590818492fd7f9a083681fffe6ba7c5472cae3eca288d77dc1da61a1126a1dd216eca3db1479eedd8c480a5fe10739cfea96b4d8e26231ca0d42f15b58b8f85b662b57a056110c71f9a6e1dff02c52b7b7978040000",
    ],
    [
      "ETag",
      "L0tujHrtZEOr6pnQcWDHpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92dd6e82401085df657a5948fcc54ae285b6b662d42a62d2a431668501b1c0d2dda5d618dfbdb3d4daa66dd2dec0ccf0cd72ce81033cc5590036ace3e8b940b1bf8850cd74e1a22c1225e996f34c2218808a45443e0cfbcabd6c45eeec7ef8bacb07d5c166518b3a1d22a4bfc194817d8030c62490603f1e206329d29acf9322cd56656780dae77a38f75c6772477dca03dd4f16a351b737eac3d1382f064cb155c9ff636d793460cbd72e862830f3516bc905dfa2af1c6d53b2344fd094bc103e4a28e1f24124789133c1b94913b35137ab56add2aeb62bf5a6d56c1398709fa99867c42ee6a40f14572c71f98e5c824580284b321c96d7171ac741694497cec4b31aa5beaf00490be304577f83a477c3e8337c60a708be732ce545a6ced4ede8befbdb7194e9e751375dafff83908a923a239e33eecfbdee78aab9e5c97b6faf504e05a72025ea0cab95c655b36555de63bde63a6a7a8fad448106f88cfe8e41acc00e5922f1f806a32fdca07b020000",
    ],
    [
      "ETag",
      "XJEtR+7gRQOJxwpH1HhU2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:59 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8554fd6f9b3010fd5790f74b2be583847c1129ead294754c29e90869544d5362cc91ba054cb1c91455f9df7740d336ebb64a4860df7bf7de9dcf3c91079e0464487cbe79cc21db7dba173ea911507483bbb96d34732fccbf2d8365eeb3ddf9396cedf16884085eb0248dd308ea52e41903395ccc1b9b4ce429cd84a863a27aa7536ff5dabad93275a3dbeb9ac8931085539e3c20fb4ea9540e9bcd83766323c426029a72d960227ed96f6edbcd3413f7c0946c1e4b36514536ff2f7a1609461517c968314703b9846c0531e5115a786506fee7e3d40d4ee3c606c15bce803226f24415b630051349c83779566625c32752da7cf341e6d6d49a78da64b670bc93358d0bf2fa54a3525bad329079a46ada1a6b0a79042b1eacab48faa07d7167571841077754825c6bcbaf966b69da3aa00ad6da483bd3c6ce85764cb61d6de138d6dcd34ece4eb54b77b6b8d6ce6f8f30e83a00a978527af6a81f41e1f7b9adf6fbc32c0854a1872ab8eaeb3dda1ae8a61ffa7d160e8cae1feae0fb03bfdfa586af33b3039dc0078a3c55642f593411c9a0151a86df33180c0c83f50c18f44cc6ba7dbf1f046dda323a9db01376cd80ec6be457c6155c70990ac9abde92a56b7bd6ca7317ce64ec59651921c5fe5d54e68a22defa54582482fe53d7be8872814ac541d98e67b9e38967df58d56c4c6143d96efe88d311d24802a269466350905d89009b46ae6773dbb367ce788a8cf2c0af0f0849863f9e5e09de2e2dbbacca37b9280ad8bf497843a3bc046cab0fd2d6db7a5d6fd75b5db2dfd7fe9d69ecbae35b54a75946777fc4b0a25ea7a0ff45a7c497abcae941b7450ab5171764ff738f4f8de075aab293ef0bcbbd25d5960b216490b08f2708c165e0c3bfc2e18a22162f29ca48856b9c57260b11964135b73c2eed3eb3fb26368c94e04cbd8b0dfac6e1808a1c4546882151cf155557b46c5411cae50b0883386e8eed5c62f437c788fac722050000",
    ],
    [
      "ETag",
      "uI3/uTfuJWdWubcyBBevIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:17:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "83",
      "40",
      "10c5bfcb781492524b234d7ab00dd15ad2285a63344db38501297f0677170969f8eeced21e3c7a61671fbfb7fbde9e20cfaa186670c8d2ef06657795a27e364388aa29b4e2a5a64a2158805aa44cae6f13e9a55eb076afd78fed5b1ebf7f8c97ed7cce848abeb014303b419261112b987d9ea01225b26dbf97c3898ce9ae36ca6af3eadffb210b25c546d86c83e06e11f8d05b7f6c75fe2fcbaeb7e0488710139458456852d4928e18e99529a8445917682b6a64840a0678f8914a6a6a21896c56ecc9c476a6e391e778a31b77ea7a0c1614099d51c5ecf685b381262d8a905aee070e037218b96a327c7f06d974b84cbb7e77312d3a8dea49122750682e1f9d832cc984d31c5acb062d8804bfe443a6cffbfe17c4f76f9ba6010000",
    ],
    [
      "ETag",
      "K8fr9g9LK5+KJwVkdXZ2Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:00 GMT",
      "Server",
      "ESF",
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
      "41",
      "7282301400d0bb64ad4e85524877c44109ad5629069b4d26c81714a110920ae3f4ee757a84f7ee481e8fd0f7427f57d0a057344a0bcf8eb3b7d623a2c8fda72d78dd682ecf3a1072bedfb785bb4a97b42c58c187e080df43cbee2a666abf88767c84a85ece3f9b25cfbc536ce656a36d2bb8f925619ac8040c65ddcaba5a533bb733fcc189db2826babef6dd0526eb4e9bcd949d48b897eb0b6ca268156509850aa0bcca36763674985293e930ec14bf45754ccf2c508237e0e74e82e3c561eb620eceae5a972fa99bfce40de9d59747d3213603c6897f411304437b56d08bf3836b3b184fd0bf5de8b185470001a940a1df3f694f16431a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-45-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc8fbb82690077949d11a2574654ac80aa4d53a4dc83686ba054cb0c95455f9efbb98a66b55a9fd84ed7bce3de73e78420fbc88d10c119eee6b563d7eb917049d21a6700aafeaba7f7b2896fbd5c5ae1f5e25c1adfafa637d359f0382372c89f332631d29ea8a3239db05ddb41275892b213a90a833b43bbd51df9af6a6d6c01ed953e04996256b5e3c00fb4ea952ce4cf3a4dd4d854833864b2ebb54e42fefe6a16f9695b8675449f3ada4092ad2fc58f45b2628565c14f35d00066ac9aa88e5986760e13f3326e76f537739cebb29800f9c324ca9a80bd5d882145414094feb4a6745b327a46dbe3aa0c0593bcbd0a022abf3222a70cece8c182b1ca9c7921917fe7663b8dec5d6df2c4277eb45c1f2d2d92cbacbed7ab7f102e3e6d2f11d43619231cd35e6c6b9be797001fd9849c50bad1e36cf8df27383dcf7636908202d591b8cc6d608f726d69424644c93c9c02689c5089990b18d07c4a2d3211bc68461e06951cdc2852806fd64d4eb0dec08db937134b4891d1142fbd1049a3cb587e3e1c88ad1f10cfdadb8622b2e4b2179db2174e3bba11385fece5b2e42479790e03a53abd65853c06b8f0a0a04d007351d9b2817a0d4b4dbf542c75f2c43f7da6927bc6629a68fc11e669ce04c3240e30a9aa758b51131340c798b8db302b09ed8cf5350a2d9ef27d4f4bc71f1aae52ff41006d8d855fa8b82d077bdefdace09718db35a430eed019560f90e6a03d7c73f8084256db3a0ab9de3ff42ed93cf1256b1827e3e4d00ebc0a7ffda69f1010bab0f3252c11d7687ca468456acdd21aecb3db127963de8210daed4bbd8c81e9dbad6e46832b29c15eab9a276f1a1d056ac962f2008c2f83dddade33f68d1",
      "289878040000",
    ],
    [
      "ETag",
      "tV2ZvnCqDFU2TQfSZt+JLQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82",
      "50",
      "14",
      "c6bfcbe92d6e5048cae60b2d4d37ff85d86acdb90b1c14032edd7bc999f3bb772e99b56aab3770cee1772ecff3c01e9e923c02178264f55ca2d89dad50ddeac24359a64ad2ade0b9443000155b116907dddecebc7f0d26b796d9081ea475e7f7b7ad1611325c63c6c0dd439c601a49701ff790b30c692de46999e5cbaa3340ed0a3d9cf9de607c437dc623dd8fe7c361bb33ecc2c1382d464cb165c5ff636d713060c3030f63149887a8b514826f3054036d53b2ac48b1267929429450c1d58395e065c104e7359ad4ec7acd72cecda6d5342fea4ebd4960ca43a6129e133b9f913e505cb1d4e35b72090e01a22ac9705c5d5f689c4495115d0ec6be6357fabe02242d4e525cfe0d92de35a3cff0811d23f8ceb18c97b93a51bde1a4fddb7194e9e751d76dbffb83908a923a21fe60d49df9edd154738ba3f7ce4ea19c0a4e414ad4195aa6dda85f3ae67bac575c474def719528d18090d1dfd14f14b8314b251ede00b7bff4547b020000",
    ],
    [
      "ETag",
      "4bEFy0XzbOQ108bYs1VTHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:01 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "db",
      "40",
      "10fc2bd6f50b4849fc8a9d8784681a0c580a0e751c10adaae4ecacc381e30b77676884f2dfbbb6098fd28264c9cecdcceeecde6e1ec92dcb17a44f62b6bc2b406cbedcf098340828bac453189d5abf4f7b5331d17b6ea63f1c7b2e840f0707c860a54ad2d53a83a6e4854840f6a793d652f0624d05e74d0cd46cbb4dd3b58c9ed9336cc7757aa89390a52396dfa2fa5aa9b5ecebfa2e776bc9f93203ba66b295f0d5f3b97e6fe96bc16f2051527f9b52c72c52ff38e961c613aa18cf0fa6133450481033585196a18517e522fefa36748bd1556b89e47b96004d125ee4aab48521129ea76c59882a2ae93f92cae6ab0f32f146de30d286e36910edcde9aa14cff7352ab5d94c802c32d5d0e65853ca3298b1c5bc46d6b7da71383e43041d5c530972ae5d9e7aa1a76973a9d0dd5c3bd00eb54170a4bd55fb81360d026f12697b87fbda49389e9e6bdfaede70d0f602a46279653aa27106a5e1a7befaef6fb3145085266a70d6315c6a768d5e9cc69d24edda4e9c1a10c7ddb8e3503b36925e1bda8b1828ea5419bd52d19ce79da4d305a3e3b86e1b6248ad459b3a2618a693da7162bba6d585d4eed205d936c883600a8e985c73c9eae692cbd08fbc59144e83e120f2aa32528a0d3caacd9545bcf6a9b048247d50d7b64419c74ce54df941e4858361e45f78f5708c604993cde40ec723a5990464534157a0409cf105368d9c8f277ee48f83c10815d58d9fef1892f47f3ebe08a2cdbaeab2aade24f2cff08e0667e795871de9826645c5baaf3f88655846d3b09aa6139956dfb4fb66bb6518c60fb2dd36fe1f7c1086832b344485a09bbf302cd26d97f27f64adf8d5afdafcce8549ca6ccf9ec8f6d7169f06c115aba393ef532fbc22f551082908c893cf870ac915f0e93fc56e6d918b8b8b69700514c311",
      "4e64992411508f325b55769fd45dd3366c5291857a8739a6bdbbb3324619115690aba78aeab5ad1a5542857c2621881318f8c109a27f0089fd0b7a36050000",
    ],
    [
      "ETag",
      "eLH2xH9UrS/96l/wFE6eRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d90416f82401085ffcbf40a09b69544120fd5d8d684988aa51763cc0a034581d9ee2e1242f8ef9d450f3df6c2ce3ebeb7fbdef67029ea14023815f94f83aa7bc8d16ced10a16e4aa37991546b0407d0889c492f95d35dd566f1f52b8dfc70132fb7afd7763e674227df5809087ac80a2c530dc1be875a54c8b6e3518d2732663a6995f5e673f5b68a58a828b5c2260ec39745b882c1f96393977f590e8303673a4598a1c23a419b422a3a6362d6b6a016952cd1d5d4a804358cf0f82357d448a1885c56dc67df9df88fde6c32f39ea6fe74c66049893005d5ccc63bce06868c28236ab91f4c1850e3c855b3f17b1d65dbe13e1d86c3ddb4e80cea0f459c40a3bddcbb0559920d6738b4510d3a90087ec9f7c2dcf6c32fa92bbc0ca6010000",
    ],
    [
      "ETag",
      "0dp5SmwfUvVdR6LNUCQFvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:01 GMT",
      "Server",
      "ESF",
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
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9b318a0abb37be3161014461074bc34501bed10e905f1b2ecdf67f609e7fc808652a63519878e5dc0077834369ed37922962e3952db34d936cf0b985695c4ded9b15c2f299f70e0fdf61edf1a7a365787763b9ac7401f2fc409bf2c4c51addac0b23b15cbbc9b0ece144d590b55192de05857a71b9275c1afa62cb45fc8b673974976f59ffd2e1c2c6f239c3ee13aaf8c89ef08dc4044fd1532906c8b55e518f7f780c4622d58101a37343e83ef93341a52edca38f4530f4792a7eb4d48b1b283480b161b535eefdd3afb7cc3e162e8f76006d85d70c534e12f2e4418cfc0bf9d8c0fc15e012e6b1453e0f70f429ac85b1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-47-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f79536e98bb495aa5195302ab52924296c4c5364bb37c190c669ec7442a8ff7d370e652024f814dbf79c7bce7de4993c8a7c43c68489745741f9f4ed4132724240d3145fabbbdb2b9def7e2a37bd1b74b3fdcdd55d7f713d992042d42c45b745062d25ab92831aafc3765acaaaa0a5942d4cd4eabbadce69d71975464e6f703a18214f41962c44fe88ec7bad0b35b6eda3763b9532cd801642b5b9dcbebedbfbae5d94f201b856f67b491b5594fdb9e8f74c72aa85cc27eb100d540aca18b6546468e13f73c3cedea76e0bba6da708de0b0e947359e5bab68529b8cc139156a5c94ac6cfc4d87c7320a1b7f06691c565566df338a75b38b13654d3583f15605d04aba535f72f56c1721acd577e1cce2ebde5b43d5b2dd64b3fb46e2fbdc0b334651918ae35b1cecccdc70bea6f4069911bf5a87eae955f1a34ff38969a80d20a9a60ec3aa7b43374462c612e4f86bd014b1c606cc8dc01ed31878ffad0df30a0c833a2864573ac39717b0324c709a2e27eafefc4b4cb783ce22337d980c39c64480e27e46f29349c0b5548259a0e91db601e797114acfdd934f24c0909ad327dde18ab0b78eb51638108faa4a6431d151295ea76cffdc80ba6b3687ee335135e404af953b8c31927345380685a62f334944bb9c186117fbaf4ce116c2676750c2a32fefd4cea9ed72edeb4fc951ee1006bbbda7c49180573ff87b17344dcd0ac32907d7320055abec7dad0f5e10f2271499b2ce47aed05bf48f314400225e4fceb6922d804befcd78e8b8f585c7d94511aefb83b5cd522bc8466878429f7c81e763bae4b0cb8d41f62fd8e73ec5a9da3ce085bc8f54b45cde263a18d58a55e4118c4f1fba65b877f79e52e7878040000",
    ],
    [
      "ETag",
      "uZWPtnqXs7gZ52lvVPZ4LQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401085df65bc2db1201469c2455154c28f58aa8931862ced14aa6da7ee6e4542787767aba25113bd6967a6df6ccf39ed161e933c021716c9f2a944b93958a2be32858faa4cb5e25b41b942b000b55832e9df603b99be34c82b8be1ead63e5c4f86fd75b7cb840a57980970b7102798460adcbb2de422435e0b292db37c5e7516e84d6186b3c01f4cceb9cf2832fde47a34f27aa33eecacfd6224b49857fc3fd6ee77163cd0c2c71825e6211a2d85a4070cf5c0d854222b52ac292a65880a2ab87ab09454164212d578526bb66b75a76177ea1dfba8e5b43a0ca6140a9d50ceecf58cf581262d529fd6ec121c066455b2e1b8ba3ef338892a23a61c4c02a759e9fb0ab0b4384971fe37c87a57823fc307f61ec1774e6454e67a4f9d8d2ebddf8ee34c3f8f3af582fe0f42694e6a8f0483717f1678e3a9e1eedfbdf7361ad5541207a9d06458b79bc7adb663bfc57a42266a7e8fab6589168482ff8e8b44831b8b54e1ee15b0fdead97b020000",
    ],
    [
      "ETag",
      "RVe7iPx2oAupKhY0/wNKEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:03 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "547f6f9b3010fd2ac8fba795f20342482052d46509ed9052d211d2ae9aa6c41843dd129c62d32daaf2dd7798a66dd6ad9590c0bef7eebd3b9f7944772c8fd100452cbd2f69b1fd74cb23d44054e21476af6ec5fd59e7776f3e2e3b93d8f7a2f23bc9d2e11010ac6209bcde64b4297859102a068b792b2d78b9c105e74d48d4ecda4da3d7d11dc3d14dab6739c013344ba62cbf03f68d941b3168b7f7daad94f334a378c3448bf0f5f37efba1d3de14fc961229da87926d5011edf7454f324eb0643c1f2ee660a014b458d2356619587861c6d1e7c3d42d86d7ad14c00f8c504c082f7359d9821484e7094bcb4265458347a46cbefa407377ea8e436d3c5bf8e1d10aaf2bf2ea58c3425b2e0b2aca4c36b415d494b08c2e59bcaa239b3bed34989d43041cdc6041c54abbfaea06aea6ed736843ed441bf913ed90eef9dac2f7dd79a81d9d1c6b67c16c71a17db93ec080ef980ac972e53ac451462bc74f8df5de1e6745c0125cd4c1655fef61c3d69d2889fa24b14d2b4a741a4576d4b7b019e9c4e9d26e1c510c3c5965572c9cf3dc36bb0eb63a16b10cc3326247d789d18d7ad834fb5d2bee247dea5023b26cb46ba05f059374c2c4860b5677175d055ee82ec360e18f47a1abca48307470529bab8a78ed534291007aa7ae5d15651c94aaa3f2fcd00d46e3d0bb74ebe998d21493edfc1ee623c199a080c6055e53498b731e43d3d0c56cee85decc1f4d81a18efc628f1068f0e3f185106e37aacb52bdd1e974360a7b5de5600fb9c459a9300ff507325a1620768dffa71905c1e81aa47151e0ed5f3128a7a7e8ff505078b5aa6d3e2ba24a6dbfeaa0ddcf1d3c0d04b7a9ce8ebe2ddce01ad55b014d684173f2f1f80058053efc29ec6f2860e18e828c90b0866125a2122105ad8796ad95dd27b66d9aba8d14b8906f625ddbdc9f4e95a3ca48d734974f15d5375435aa0a95e21904419835dff3cf20fa0767304be621050000",
    ],
    [
      "ETag",
      "WjsqG2x6SCu2DdNIbuXclg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d504d4fc24010fd2fe3b58d148408090741623184488593216429432dfd98ba3b5591f4bf33bb18c3d1cbeeecfb98bcb727c8d2720703d8a6c9478dfa7893202fec10a1a973367255541a040f905522ca1f5ae2f363b8c874f69d73686ec79d5e980c87a230f13b160a0627d8a798ef0c0cde4e50aa02c5b6d968b751647cac2c329d2f274f93488082761698af66b387d16c028d7765abb27f59d68d0707da46b8478d658c3645a5e980314f6d41a38a2a47df50ad6334e0c48e4834d595d244be20feddbd1ff4daad7ed06f75babd6e5f8439c58a532a45bb7a956cc0c42a8fe84bfa415b04da8d5275efce4f07db0e760a5cb46b2ef8e3da965bff2e1c1d19cd8b264967d0066b5d428ec9066729c4ba460f6225bf1ca67c793767b6cab3e8c2010000",
    ],
    [
      "ETag",
      "zoTeJDHQkrkxltHs/C36Hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:03 GMT",
      "Server",
      "ESF",
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
      "ff1dd0d95283300040d17fc973edb0d4427c030c8885b214a4f092811814d9494b1b3afebb8cf70fce7d809c10ca18bef435edc00be0b904b7647b18541d7f912ef14bc460ab2f12b5c7e63d33dd51b849544caecc1cb95192942268d5ddd0b0002b9a8ed2503f89fd935ca0faad7cf5187205c7bd66f201861666029f6f82cbd46aaf35160de35121f4838f3b2f52447f6d868b62f9cbb99c6dd538c2bc8871f9999abecd933edfa9ea376685d7a4c96ce62d6ab9ed2b419709fa29464eb2e79a3d43a431dfec836e3a9ad9cf3247f82e91c5718de47c456313810da0f7a19a28c3d5ca959f21dc807f3bbef081ae03749a4f7402bf7f13aef6361a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-49-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b4fa34014fd2b64f6a3b6d0373469d6a6e25a6de90a5463361b32330c384a1964866a63fadff732585763a29f98997bce3de73e78410f3c8fd118119e3e56acdcfdb817041d23a6700aafcfc1e5dd457e71746b5f1f3df7ecedd36515df5c4d2680e0354be24d91b196145549991caf83765a8aaac0a5102d48d4ea3badceb06b391dc7ea0d860307789265c982e70fc0be53aa9063d33c68b75321d28ce182cb36159bb77773db358b52dc33aaa4f951d20415697e2dfa3313142b2ef2c93a0003956465c436986760e13f3326271f53b739deb453006f3965985251e5aab60529a8c8139e56a5ce8ac62f48db7c774081bb7067a14145566df228c71b766cc458e148ed0a669cf9aba531f7ce56fe721ace575e14cccedde5b43d5b2dd64b2f306ece5ddf35142619d35c63629ce89b0717d08f99543cd7ea61fd5c2bbf3668fe792c3501a4256b82d1c81ae28e6d392421239ad8bd01492c46884d4603dc231675faac1f138681a745350be72227ac6fd956124771dfe946fd247122a74bed8858c3381992c1d0a643b43f464f2557ec94cb4248de7408ddf8f3d08d427fedcda6a1ab4b487095a9d3c6585dc07b8f0a0a04d01735edeb2817a054b77bee85ae3f9d85f36bb799f082a598ee824798718233c9008d4b689e62e552c4d030e44d97ee2980f5c47e1f82128dffbca0bae7b58b772d7fa38730c0daaed25f1484fedcfba5ed1c10d738ab3464db1c500196efa03670bdff0b4858d2260bba5abbfe2d6a9e7c96b092e5f4fb69025807befdd70e8b0f58587d90910aeeb03b54d622b464cd0e715dee816df7ad51076970a93ec57a83cea16b758e3a23dbb05cbd56d42c3e14da8855f20d044118bfa7bbb5ff076429100578040000",
    ],
    [
      "ETag",
      "xSKhJnJ+Y8V+x38vwKudWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401085df65bc2d0928b4d2848ba2a0447e14ca952164d94ea1b8edd6ddada412deddd98a68d4446fda99e937db734ebb87a7248bc08755b27e2e5095676b340fb698a22e84d174cb65a6111c40c3d644aabedb77bd57ef2e2d4534e17dafe41eee3a1d2234df60cac0df439ca08834f88f7bc8588ab4c6a528d26c59750e9832b7c359381d8c6fa84f6564fbf17c380cbac31e1c9cd362c40c5b56fc3fd6160707b67235c51815661cad965cc92d7233b036354b7381352d0bc5514305570fd64a16395352d668526bb66b0df7bcde6eb4eb172db7d5265048ce4c223362e733d207461a26a672472ec125405525198eabeb0b8d93a83262cbc138749b95beaf00498b1381cbbf41d2bb61f4193eb06304df3996ca223327aa3f9c04bf1d47997e1e751d84bd1f843694d4090907a3de2c0c46f7965b1cbd774b83fa5e490a52a3cdb0516f5eb63cb7fe1eeb95b451d37b7ca30a748033fa3b6e13037ecc84c6c31bbff390317b020000",
    ],
    [
      "ETag",
      "rF6F67z7KmyldOcF7yc7ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:05 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "7d",
      "4f",
      "a3",
      "3018ff2a5cef1f8d7b810d062c59bcdde43ce264ca9866b95cb60205ab409116cd62f6ddef019cbae869b26494e7f7f6b44f794277340bd110f934be2f49b1f97ecb7cd44244e018de2ef9d134bc5c527ce69d45e4d13f5265c6e2d10810b462719ce6096973561601e1c3c5bc1317accc71c1581b84da9adc56063dd9544cb9af0d3413789c24d1946677c0be1122e7c36e77e7dd89413c2138a7bc13b0f4e57df7a1d7cd0b764b02c1bbfb965d70e1ddcf4d8f1316604159365acc2140c949b12229a60944786586fe8f7de90ec5692706f0030d080e025666a28a051201cb221a9745ad8a864fa88ef9e601cdada935f1a4c96ce178076b9c56e4f5a184b9b45a1584978968496be829a20959d170dd54f23be9973b3b870a24b8c19cf0b574fddb722d495a57a06f23e9581a3b27d23ed776a485e358734f3a383e944eddd9e242fab9dcc340e8907041b33ab287fd8454719f77d57e7f9615010b88d01457ba3cc08a219b7ee4eb4164f4353f9289ef1bbeaee1be2f07a64ad4d0271878a252af59386399111a7a4f0fb1a647a6a69af240355453d175c5e899baaa2b26564ca29921dab6d063410539a13c679c365b8bae5ddbb3569ebb702663cfaadb88306cdf4913ae6ae26d4e014d02e893beb655953270aacec9763ccb1d4f3cfbca6a46634a621c6ce6f7301c114e3801342e704a0429ce59089b862e6673dbb367ce780a8cfabc2f76088e867f9e5e09de26af7759d4ff95d740adfd77802b9c9435e2a179408a86b6dbd6ff25c6ae3b5e822d2e0abcf958fe43fd1a5faf9a882f7ea872dbad7a68fb770bbf16826bd4a8a3cb85e52e51f3ca25112948167c3d3a00ae0b5f7e0d765713b07039c1860b58c3a006bc32090ad20c2c4debb8cf6c43eb37df12810bf1aea61983ddc9541a95224949269e3b",
      "6aae66bd5155a9e42f2028c29c39b6730ad57fba6b1c6d1a050000",
    ],
    [
      "ETag",
      "Ys+LdQYiaKTKfewb+40oog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d93a22906120e6010890d42916830842c65a80b6d67dddda20de1bf3bbb78f0e0c1cbeeec9b6f26efed090eb2da42173632ffa851375739da992b523475610d5f8a2a8310005a9133f9f57a9c37f2b6ff285f46cba52a66f74fc934eff59830d93b9602ba27d8492cb606ba6f27a844893cb65e6bbf9131db28a78c27cfc3d13065a1a4ad13268b24e90f92219c835f63eaf0af91d539803d6d52dca1c62a43e74269da6366c72ea011a52a303454eb0c0d78d837724db5129a2864258ca3b0d5be8e3aad4e7413b7e30e830565c24aaa985dccd91b58b2a248e993f3c13503da971c75e7cf23cbb1cf70f480b3f677afe57aab9f8583c6a2996a6277069db1e862f28e9c71cb81acae31804cf02f3f487b799fbf0115bf1952c2010000",
    ],
    [
      "ETag",
      "xXvSyi7AKiWGZZplQFOLPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:05 GMT",
      "Server",
      "ESF",
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
      "51",
      "6e",
      "82",
      "300000d0bbf45b0c5041d89f5051298a38a6939fa6e9aaab80148a81baecee333bc27b3f8032c695227d53f23b78039adafe944db1f40272658f0f75507bc3a4797c2fcef064da1b91291d478d75d0dd678cbe4c170fdef63ddce50b3cafdd448f8681b69cdd89a09b74d6c1f97a8c244cacf691580ecaf6e6135ec9c673f0992e7dd7ac8f296c350a582abdefc78e56991d5e7015894ab9b6d8a34b9d9ed01191eb21bb452bc26fecb92e90d518b9191842ce97c36d1c86a2aca88605eee5a0ea7ca1a91374a1139768415b075f8ea52f5334ab572198003e4ad17145c48b0b1ddf9f807f3be9b5e4af8080d38e77e0f70f706b65441a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-51-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d4fa34014fd2b64f6555b2ab49426cddaadb876d35205aa319b0d19860b8e528632831b63fadff732585763a24fcccc3de79e733f78260fbc4cc984243cdf35503f7dbb17093922a0688eaf3b33b2cfc10977970fbfaccd8fd16d3150c1d5748a08deb224dd56051c4bd1d40ce46413f6f25a3415ad8538c644c7c3c1f1607462ba03d7b486a3a18b3c0945b6e4e503b2ef94aae4a4df3f68f77221f20268c5658f89edeb7bfff1a45fd5e21e9892fdf7927d5491fdcf45bf178251c54539dd8468a09150c7b0a5bc400bff996972fa3e758fd36d2f47f023674019134da95a5b98828932e37953ebac64f24cb4cd3707127a4b6f1e194c14cdb68c4bba852323a58ac6eaa902e33c58af8c857fbe0e56b368b1f6e3707ee1ad66bdf97ab959f9a17173e1059ea1685280e61a53e354df7cbca07e0a52f152ab47ed73abfcd2a0c5c7b1b4049496d00563c71cd1c1d874932c715836b686496642928c136748adc464ae0d769a00459e16d52c5a8a92a626e21d3bceb213886d70589cb8ae1b3b76ea38d66860d9ce88ec8fc8df9a2b38e3b21292771d2237c122f2e228d8f8f359e4e91232da14eaac33d616f0d6a3c20211f4494dfb36ca052ab5ed5ef89117cce6d1e2daeb26bc849cb2a7708733ce682101d1b4c6e629a85722c586117fb6f2ce10ac277679084a32f9fd4cda9eb72edeb4fc951ee1005bbb4a7f4918050bffa7b673405cd3a2d190c7ee402ab47c87b5a1ebfd1f44e2927659c8d5c60b6e49f71440063594eceb69225807befcd70e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7c01e8f06438b6870ad3ec42cdb3a74adcdd166842d94eaa5a26ef1b1d04eac91af200ce2f87dddadfd3fc3ec463a78040000",
    ],
    [
      "ETag",
      "q0T4Fe7SqPkJ3UB6Yl1tRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d925153824010c7bfcbf518ce600926333ea0993a8366882f358e73c28218b07477d498e3776f8fcc9a6aa65e8edde5b7cb7fffdc9e3da645c41cb64e93a70ac4ee2c0175a7031f649529498f120b09cc60a07842a43decab597b3e7b2d477df7beb73bc7ab18936e9708196e20e7ccd9b338852c92cc79d8b382e7406d2166555eaceacc606a57eae23cf0c7d321e539463a9f2e3ccfed790376304e8d11577c55f3ff685b1e0cb6c5b50f31082842d05a4a815b08d558af29795e66d09058891024abe1fa4522b02ab9406c50a561351b4dfbc2ec343be6a5655b1d02330cb94ab1207631277d4ca1e2998f2f527b4280a8435a38aecf672aa751bd880ec7d3c06ed5fabe02242d4e3358fd0d92de0da7dff0811d2df8cef11cab429da81befd6fd6d1c79fa39eada0d063f08a9c8a913128c278379e04e669a5b1e77efed14c89940325282f6b069b6aeacb66dbedbda476d357dc751a20283859c6ec72855cc897926e1f006ef9931cb7b020000",
    ],
    [
      "ETag",
      "6GCtP7SPzpHCAZBy+o8fog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:07 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8554fd4fdb3010fd5732ef17d0fa917e37952ad6958c452a292429a89aa6d6719c6048e3603b4c15eaffbe8b43818e0da448897defdd7b773ee711ddb12c422314b2e4bea062fbf99687a886a8c209ecde79a688f22f72bb4d3a4b99dc775b893fbf1c8f01c14a96c49b3ca575c90b41a81c2dfc4622789163c1791d12d57bed7aabdf36ad9665767afd9e053c49d378c6b23b60df2895cb51b3b9d76e249c2729c539930dc237cffbcd87763317fc9612259b87924d5091cdf7454f524eb0623c1b2f7c3050482a567483590a165e9851f8f5307583e14d2301f003231413c28b4c95b62005e159cc9242e8ac68f488b4cd571fc8b767f63430a6f3851b1cadf1a624af8f0d2c8dd54a5059a4aa66aca1a698a574c5a27515c9ef8cefdefc1c22e0e0064b2ad7c6f50fdbb38d97adb5f1696c9c1813f7d438cce0b8c6c2756d3f308e4e8e8d336fbeb830be2d0f30603da252b14c1b0f7098d2d2f4536f9db7275a12b002d52ab81a987ddc1a9a56188703120f3bbd303669180ec3410f774293585dda8d428a81a7caec9a85339e85611461ab135ac3c8ea11b3338c7b51d48f3a11a68308476dda26342496857635f45b30454f99ccb9645583d1b5e704f62af016ee7412d8ba8c1843134f2b736511af7d2a281240efd4b52ba38c8352795a8e1bd8de641a3857763520339a60b2f5ef6144629c4a0a682cf0862a2ace79044d431773df099cb93b9901439ffac51e21d1e8e7e30b21d8e6bacb4abf911f788e7ba60dec1157382d34e4a1fa40931cbca2ddaef6ff3413cf9b2c411a0b81b77fc5a09c7eb7a4ff4342e3f5aab2b9976ca1526dbf6aa3ddaf1d3c350417aaca8e2e17b6b744d59647632a68463e1e1f00ebc087ff85fd25052c5c5390910ad630ac44962244d06a68d946db7d620f071d73803458a837b1eeb0b73f9d324799916e68a69e2aaa2ea96e54192ae4330882306bae3ea8dd1f4915562624050000",
    ],
    [
      "ETag",
      "kR0rdp+syyg3Ysgq41gSOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2f",
      "e3d1368122c49270104525a9a815f060085996692db49db2bbd5340dffddd9c5188e5e7667dfc7e4bd6d619f955b18c2264b0f35aae62245f36a8718759d1bcd5745a546f0008d485999c8eb657417df37efc2844f4bf53cbf3cf4d2d188155a7e622160d8429261bed530fc68a11405b26dbd566e23cb4c5359643a9b4f1e263103056d2d305b44d1cd389ac0d13bb355fb7f5956470f76b489314185a5449ba252b44369a6b6a0164595a3afa956123538b123524575251491cf88df0ffcee20e884ddb0d3eb0ffa210b7392c26454b276f1c6d9c09011794cdfdc0f0216283772d5c49d5f0c5fb90e76eaba68e75cf0c705965bfd2e1c3706f58b224ea7d106eb9c42de920d6eb89051357a2005fff263664eefe30f97a3c679c2010000",
    ],
    [
      "ETag",
      "fc8VLDRFyWat9MVrOT+q3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:07 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0db7243400000d07fd9e7c89420f48d90a94b1b62bb212f3b8b951a715dc1caf4df9be9279cf30424cb2863786c2bda8077c089a46fb3add76926be154654da573c4cfe41d3584f6764e17db24a47e911a353013912c59f24b0d0b29f1c1eae3562dd053bb3d773216feef58ccebed584699a93ea103aba2cf37ae85b6bf9fe587bb731c5315dd75d3d15158c6cae869fad9227d8f702125d199166174ff223b2174203278ead5c21dadbd14de0494e441f32b1b92c025d15da08f1392a2438de4703aafa3441b7eef26ec8ea48350af70bf15b6612479c4bb00174e9ca81325cbeb83b45d737e0df8e47ded1578049c94007f0fb07099c46641a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:07 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-53-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85546b6f9b3014fd2bc8fbda24e4452052b446295d9112b211d26a9b2664cc85ba054cb1695755f9efbb98a66b55a9fd04f63de79e731ff0446e79999039897976d740fdf8e546c4e48480a219de0681b72a4227995dfe552ab79deb5fd3d2592e1688e02d4bd2a2caa12745533390f3fdae9fd5a2a9682d440f13f5a6e3ded01a99ced031c7536bea204f429eae79798bec6ba52a391f0c8edafd4c882c075a71d967a278b91fdc8f06552d6e802939782b39401539f858f46b2e18555c948bfd0e0d3412ea080aca73b4f09f99c4a76f53f7392dfa1982ef3903ca98684ad5dac2144c9429cf9a5a6725f327a26dbe7a213b77edae428389bc29caa8a4059c18095534528f1518e7c1766378fef936d82c436feb47bbd585bb59f657dbf57ee3ef8cab0b37700d45e31c34d75818a7fae4e301f513908a975a3d6caf5be5e70679efc7d212505a42178c66a64587b6e9c4693c63a93d9ec6a909716cc7b3291dc7267326304962a0c8d3a29a454b510e87636ab261124dc6c9289a58132b72d299154d590af16c36b28139e470421e6aaee08ccb4a48de75885c055ee84661b0f757cbd0d525a4b4c9d55967ac2de0b547850522e8839a0e6d940b546adbedf9a11b2c57a177e976135e4346d9e3ee0e679cd25c02a2698dcd53506f44820d23fe72e39e21584fecfb3128c9fcf713697bdeba78d5f2177a88036ced2afd24bb30f0fc6fdace117149f34643eebb1752a1e56bac0d5d1ffe201297b4cb427eecdde027e9ae0248a186927d3e4d04ebc0a7dfda71f1118bab8f3252e1197787c95684d5d0ed10d7e51ed9b66d5a36d1e05abd8b0d1debd8b536479b110a28d57345dde263a19d58235f40edef64effbba5b877f6f4c7ec378040000",
    ],
    [
      "ETag",
      "RRICmT9d7Vxttl89hZ5n9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92614f82501486ffcbe92b6c984ac9e60734354bcd10b7b6d6dc150e8a0297eebd98e6fcef9d4b66addaea0b9c7378cee57d5fd8c33ace4270601e2f9e0b14bbb305aa7b5d78288b4449bae53c930806a0620b4dd6bccdb65b79b869ac6f37d66bafe5b78baddb6c12218325a60c9c3d443126a104e7710f194b91d6029e1469362b3b03d42ed7c389eff5473dea531eea7e341d0cdcd6a00307e3b41832c56625ff8fb5a783012b3ef730428159805a4b2ef80a03d5d736254bf3044dc90b11a084122e1f2c042f722638376962d6ab66c53eb71a958655addbf50681090f988a7946ec7442fa4071c5128fbf904bb00910654986a3f2baa1711c964674d91ff976add4f7152069519ce0ec6f90f42e197d860fec18c1778ea5bcc8d489ea0eeedcdf8ea34c3f8fba72fdce0f422a4aea84f8fd6167e2bbc3b1e69e8ede5b3b85722c380529516758b16a97f50bdb7a8fb5cd75d4f41e4789020d0818fd1dd7b102276289c4c31b3545af867b020000",
    ],
    [
      "ETag",
      "b4RvxF1XJ9kKv0zGBTCuxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:08 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85547d6f9a4018ff2aecf64f9bf98256114d4ce72ceb582c5ac436ddb2e80107bd1638bc3b5c4ce377dfc351dbda6d6d6222dcf37b7b9ebbe301ddd32c4403e4d3785d10befd78c77c544344e218562f9dab73b6fe7159e0cee6d3f5f7d93ac4ac1f0f8780a0254be0344f485db08207440c16f346cc599163ce581d84eadd4ebd65b4f57eabaf9f748d6e1f788224d18466f7c0be953217836673efdd88198b1382732a1a014b9fd69b9b7633e7ec8e0452340f2d9be0229a6f9b9e262cc092b26cb89843804210be2429a60944786686fee743e906c5692306f086060407012b3259c602898065118d0bae54d1e001a9982f1ed0dc9a58634f1b4f178e77b4c269495e1d6b5868cb2527a248644d5b414f114dc89286abaa92df6b5fdde9055420c12d1644acb4eb6f966b69cf4b2bedc3503bd546ce9976a8603bdac271acb9a71d9d1e6be7ee7431d3bedc1c60207a4884a4990aee613f2165e8c7d9da7fef6849c0125cabe2b2a71bb865ea7d3ff27b41649e74fd4827be6ffabd2e3ef1f5a0df219dd0271878b254572c9cb1ec84904eaf6362df8c7a6d1d044243ef6350330ddf348db66fb630310303ed6ae837a7929c51913341ab01a36bd7f6aca5e72e9cf1c8b3541b1186219e55e1ca265ee694d02480dee86b57562903a772b76cc7b3dcd1d8b3afacea804c488c83ed7c0d4724c2892080c61ca744127ec142181a9a4de7b6674f9dd104186ad7677b8440839f0fcf046f9bab294bf58fe69e6b3be72ac01e718593424136d503c2396445bb5dedff3223d71ddd8035e61c6f5fd5a01da353d2ff61a1f0eaad8ab9b76ca1d26dffd646bb5f3bf8d5105ca84a1d5d2e2cf706554b2e89082759f0fef101b02abcfb5dd85f52c0c235051b21e11d0e6b204a938093ead0d254c57d649ba6d933910273f9bad6d75bddfdee941aa5224949261f3baa2ea91a54592ac413088a70d61cb551bb3f95640a4e24050000",
    ],
    [
      "ETag",
      "QNVGoqZQua4v+WJPqdao9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "6a",
      "c2",
      "40",
      "10",
      "85df657a9bd0c43601035ed412aa10c4c64aff1059e3248d2699b8bb51447c7767d752bceccdeeec996f8673f604dbb2594304abb2d875288f7705ea5753a4a8ba4a2bbe5a6a148203a845c1e4cc97f3fcfeebf37d320d463b1c87f147521e06032654f683b580e8047989d55a41f47d8246d4c863cba5b41b19d3c7d628e3c95bfc12a72cd4b436c2649e244fc32486b37333d66eff35b2383bb0a1558a394a6c32342e5a491bccf4d80454a26e2b74157532430516b68d4252d70a49e4b2e2068fae1ff6bcbedff71e8230e83358512674490db3f3197b034d5a54291d381ff41890b6e4a8b93df72c0736c3de02c6da6d2ffcebf9a6b7f85d383c6a545349ec4ea131e65d4d3e9331ae3990961d3a9009fee551a9afeff30596d7448fc2010000",
    ],
    [
      "ETag",
      "S1rUf/ZYWNP5HqeI6EXLiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:09 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb64ad8e7c85eef8478152448461935188881408e163b0d3bbd7e911defb01973cc7c380c6aec62df800cb855737f9c6258a8ecac2b47398f142b55be746bd95219ad6dfb3edd0a2721fc5416a02df749fcb4b886f44d6845147a491b545a39da15ca538617de8a49eb52be12b39dfa5b2b947c76330b2078cfa64a6bb93716b69700d14a763d533e45ace63a7b4f09fa9782ec47b7d2c8bb9899343638fc1e7c120725425dbf035a90977d2227d0f17d572fc057a22ef9ad8f662cbcfa23df184fdba9c10135167f761aa3ebeb6a1ee9a90cbae6005302315c503aade5c4152d515f8b7a37121f81da0e30bc514fcfe01adfa14d61a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-55-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6fda3014fd2b91f75a2001020409ad88a66b24086b08ada6698a6c7393ba0d711a3b4c55c57fdf8d53ba5695daa7d8bee7dc73ee479ec9832876644a98c81e6ba89ebedd4b46ce08689ae1eb4d05c1f6dea571c14a7ba1afa234d077d7b3192244c352745fe6d051b2ae38a8e976d3cd2a5997b492b283893aaedb71467ddb733c7be08e5c0f790af274298a0764df695daa69af77d2ee66526639d052a82e97fbd7f7dea1df2b2b790f5cabde7bc91eaaa8dee7a2df73c9a916b2986d3768a0565025b0a722470bff993b76fe3e7557d07d3743f04170a09ccbbad08d2d4cc165918aacae4c56327d26c6e69b03d9f84b7f115b5ce6f5be480aba87336b47354df45309d665b45e594178b98e56f3385887c96671e5afe6ddc57ab95d851bebf6ca8f7c4b539683e15a33ebdcdc42bca0fe0e941685518f9be746f9a541c1c7b134049456d00693b13da2cec4f658cac63c9d0c5c96dac0d8848d5d3a6036f78630dc31a0c833a286450bacb9cfbc31676962bbe3413274683fa15edf4d6c98385eea8c1c67ccc9f18cfcad84860ba14aa944db21721b05b19fc4d1365ccc63df9490d23ad717adb1a680b71e351688a04f6a3a36512151a9697710c67e345fc4c18ddf4e780919e54f9b479c714a730588a615364f43b5923b6c1809e72bff02c166623f4f4145a6bf9f49d3f3c6c59b96bfd2631c6063579b2fd9c45110fe30764e881b9ad70672680fa444cb77581bba3efe41242e699b855c6ffde817699f2248a182827f3d4d049bc097ffda69f1118bab8f324ae31d7787ab468457d0ee9030e59ed813cfed0f890157fa436c32724f5d6b723419610f857ea9a85d7c2cb415abd52b088338fed074ebf80f62f2d05b78040000",
    ],
    [
      "ETag",
      "VreIUj5aTnbp0CtHRfIthQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d13105ba5091745418905f92989c610b2b453286cbb6577ab21847777b6221a35d19b7666facdf69cd3ee6193e63178b04897db12e5ee6c897a648a31aa926b45b742e40ac102d46c4964516e9ed6d37677d8481632dd6d0be7d1bd1fb55a44a8688519036f0f498a3c56e03def216719d25a247899e5f3aab340ef0a339c84e3dee096fa4cc4a61f4c83c06f071d3858a7c5986936aff87faccd0e16acc5628c094acc23345a0a29d618e99eb1a9585670b4952865840a2ab87ab094a22c9814c2a689ed3876dd3daf35ebcd5ac3719d26815c444ca72227763a217da085667c2c5ec925b804c8aa24c349757da1711a57464cd91b84ee45a5ef2b40d29294e3fc6f90f4ae187d860fec18c1778e65a2ccf589ea060ffe6fc751a69f47ddf861e707a134257542c25ebf3309fdfed070b3a3f7f64ea31a4a41412a3419d66b1757cea55b7b8ff55a98a8e93d9e96255a1031fa3bee520d5ec2b8c2c31b280831747b020000",
    ],
    [
      "ETag",
      "pukYjUBFP3fbriyqp5X6KQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:10 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8554fd539b4010fd57e8f5179dc9078490af998c4d152d35122544eb743ac9712c784ab8c81db6a993ffbd0bf815dbea4c6602b7efed7bbbb7cb3db9e169480624e0f16d0ed9fae3b508488d80a2319e76cddf5f27bfbe45f2e4f8d8b20fe3b32e3b8b46c3212278c19274b94aa02e459e319083d9b41167225fd14c883a26aa5b9dbad169e97da3af9b56c7ea234f42128d797a83ec2ba55672d06c3e6a376221e204e88acb0613cba7f3e65dabb9cac43530259bdb924d5491cdb745f712c1a8e2221dcea668209790cd61497982169e9961f0693b7583d3652346f01d6740191379aa0a5b98828934e2719e9559c9e09e94365f3c90a93db6f77d6d7f3273fd9d055d16e4c5ae46a5369f6720f344d5b405d614f104e63c5c5491d58d76e84d4e30820eaea804b9d02ebed89ead698b902a58681f86da9e36720fb46db6e36a33d7b5a7beb6b3b7ab1d7993d9a9f6f9720b83b643908aa7a5699f060914861ffaeafc7d9b05812a345105e75dbd438d9ede0fa2a0cba29e6905910e41d00bba1635039df5dbd00e03a0c85345f692455391b67a96154696d9ed43a89b601a666058811e765908ed3633cc085a3ab50cb2a9919f195770c0e54a485e35975c788e6fcf7d6fe6ee8f7cbb2c23a2d8c083ca5c51c44b9f0a8b44d01b756d8a2817a854dc94e3fab637daf79d73bb1a8e31c494ada7b7381e114d24209a6674090ab2131162d3c8e964eaf8cec41d8d9151def8e9234292c1f7fb6782bf5e955d56e53f39280ad8bc48784e93bc04dc550fa4a5b7f4badeaa1b16d96c6affcf34f2bcd125aad32ca3eb5731aca8d32ee8ffd029f1e55be5f451b768fe0b1764f36383bf1ac17daab293b399ed5d92eac883083248d9fb1384e032f0ee67e17147118b5b8a3252e13bce2b938508cba09a5bbe2ced3eb0fb7aaf6b91129ca9d731c3c499aa3def6691119690aa878aaa1d2d1b558472f904c2208e9bebb84718fd032e6cfe7923050000",
    ],
    [
      "ETag",
      "73zJOxXfsMKK5EFgQ7cQfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d904f4fc24010c5bfcb78b44d0ada1a483888a90543885489898690a54c6ba1edd4fd0321a4dfddd9c583070f5e7667dffc66f2de9e615f365b18c2a62cbe0ccad355817a618b1495a9b4e2aba5462178805a144c0673612626c145f4747d7b878bb7f7e4f0781c8d9850d927d6028667c84bacb60a861f6768448d3cb65e4bb791317d6aad329dbfc6499cb250d3d60af3e56c763f9ec5d079bfc6dafdbf46569d073bdaa498a3c42643eba295b4c34c4f6d4025eab6425f9191192a70b06b14924c2b2491cf8a1f467e2fea0783de20b809a370c0604599d02535cc2e5fd81b68d2a24ae9c8f9a0cf80742547cddd79603974190e0eb0d6feeef56c6ff5b3707cd2a89e25b13b85d6587031f940d6b8e6405a1af42013fccb93525fdedd37225e0d25c2010000",
    ],
    [
      "ETag",
      "0NauHuGeQ6J+47eQWZGvFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:11 GMT",
      "Server",
      "ESF",
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
      "00d0bb64ad0e4544d29d54050105fc64c44d0642204ac5107e814eef5ea74778ef07c484d0bac6cdaba025f80443acc21999b9dc30714e2c2d9c16e1ca714dc750f90d695f07db1af4936606b227a575390e6db9bb25d9e1a521a342f596fa6e6567468af657d4666c4c37575b89d683751ee935f184f84070cdf7c9c982bd1c227c621d7fe8aefbc8f96e85f79b65d57e17081f75c15a2f3a17b1af3841984311bcbc5b44db5a9684ddd9f8f4bb8e2d54ec2d64b5e687a7dc6e61952685ba9465368d1ea4d772bfef143ce6ac992bce6579de293a07134025bf0b5ae3fb9b3b5f403801ff76dc0c9cbe034c1a0b2ac0ef1fc9374b351a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-57-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2bc8fbb82690070422456b94d03552425620adba6942b631d41dc1149b765595ffbe8b69ba5695da4fd8bee7dc73ee8327f48797299a22c2f3bb86d58f5f6e05412788299cc3eba5bcbeb2cb7373f9d7fe5a35c5c35d4ed73f2f663340f09625f1be2a584f8aa6a64c4e77513faf4553e15a881e24ead993dec0195adec0b346b6637bc093acc8d6bcfc03ec1ba52a3935cda3763f17222f18aeb8ec53b17f7937ef8766558b5b469534df4a9aa022cd8f45bf158262c54539db4560a091ac4ed81ef3022cfc67a6e4f46dea3ec7fb7e0ee07b4e19a65434a56a6d410a2aca8ce74dadb3a2e913d2365f1d50e4affd456c505134fb3229f19e9d18295638518f1533cec2edc6580567db70338f57db208916e7fe66de5f6cd7bb4d101957e77ee81b0a938269ae31334ef52d800be8a74c2a5e6af5b87d6e959f1bb47a3f969600d29275c164623978e05a1ec9c88466eec82699c50871c9c4c62362516fccc6296118785a54b370294a32a62332c8acc41bb95932b627a3c465433771b1e70c0713ec3829418713f45073c5965c5642f2ae43e82a5cc57e1287bb60318f7d5d42869b422d3b636d01af3d2a2810401fd47468a35c8052dbee5510fbe17c11af2efd6ec26b9663fa18ddc18c335c4806685c43f314ab37228586a160bef19700d613fb710c4a34fdf584da9eb72e5eb5fc851ec3005bbb4a7f511487abe0bbb673445ce2a2d190fbee802ab07c03b581ebc36f40c2927659d0c5ce0faf51f714b28cd5aca49f4f13c03af0e9bf765c7cc0c2ea838c547087dda1b215a135eb7688eb728f6c6f68d90ed2e05abd8b8d2ce7d8b536479b91ed59a99e2bea161f0aedc41af90282208c3fd0dd3afc037904c22c78040000",
    ],
    [
      "ETag",
      "VsYW5nH/Dx5+pulwqgcLZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5382401086ffcbf55198c1144a66fc8065c684a688ce348de39cb020061cdd1d39e6f8dfdb23b3a69aa92fc7eef2ecf2eecbedc9535a44c426ab3479ae80efce12901315f820aa4c0a7c94ac104034029226485a775673366f3cb4e683d630705e1b51633b9974bb4888700d3925f69ec429649120f6e39e1434076c0b5956e5c5b2ce342277a52a4e03df1d0d30cf59a4f2d1ccf39c9ed72707edd41851499735ff8fb6c541231bb6f221060e45084a4bc9d90642e9aa3505cdcb0c74c12a1e8220355cbf4838ab4aca19d3b1a29b177ad33a373acd8ed1322db38360c6422a5356203b9ba23e2299a499cfb642798200af435c38aecf172ca751bd880add5160b56b7d5f019416a7192cff0651ef9ae26ff8c08e167ce768ceaa429ea81befdef96d1c7afa39eada09fa3f0821d1a91312b8c3fe34708663c52d8ebbf77612c49833345280f2b069b42fcd0bcb78b7f58a29abf13bb6e4156824a4783b6e5349ec9866020e6f251bad957b020000",
    ],
    [
      "ETag",
      "6K61UV+Y3VG3MTAz+d+wQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:13 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "547f6fa24010fd2adcde3f6de20f505031313d6bb91e39458bd8a677b9e82e2c762bb0945dda338ddffd06a86dbddeb50909b8efbd9937b3333ea20d4b02d44784adef729a6d3fdf72826a884abc86d3dfd3a1669c27ce26b4bf8f6e160f34bd3d4d2f060360b04225709c46b42e789ef954f417f3c63ae3798a33ceeb10a86ef4ea5aa7a59a9aa9b68d8e61824ed0281cb36403ea1b2953d16f36f7b91b6bced711c529130d9fc7cfe7cdfb5633cdf82df5a5681ea66c4216d17c3fe949c47d2c194f068b3918c805cd9634c62c020b2fca807c390cdd60386eac817ccf7c8a7d9fe7892c6c41089f27215be7591915f51f5169f3d5079a5b636be429a3e9c2f18e56382ec4ab63050b65b9cca8c8235953565053c822ba64c1aa42d28df2d59d4e000107375850b152aebe59aea5282b21c1dd4af934504e94a173a61cca6d4759388e35f794a39363e5dc9d2e66cae9f501077c0754489694ae3d4c225a387e6aacfdf63a0b0196e0a202975db583b59e6a929074fdb0d73648a852427aa46be036517d53a77a4028069d2ca2972a9cf0240874cde89a5d0d9b7a2fc0bd7687981ad155a367b47ba44d5a8146baa181d1ae861e3226e919132917acea2eba726dcf5a7aeec2190d3dab2c23c4d0c1b3ca5c51c46b9f128a04d23b75ed0a9471c8545c95ed78963b1c79f6a5554dc798aeb1bf9ddfc17c84381214d838c33195349bf0009a8666d3b9edd9536738064579e5b33d43a0fecfc71781b74dcb2ecbf28d3c7b0277349ccc4a0f7bd2258ef292755f7da096da52eb6aabae199ed6ea6bedbea6375455fd8176bbdaff830f5d77780d867096e1ed5f1814d9d10bf93fb296fcf257657eef424345b6674f68f76b074f0dc18e55d1d1c5c272af5175e4d2906634f13f1e2a2097c0877f15fbbd052e6c2ea4811d900c46d81745123fa3d528b3b8b4fba436db86de412539936fb0aeaeeeefac885144a4314de45345d5de968d2aa05c3c93008409746ce71c",
      "d03f070edd4237050000",
    ],
    [
      "ETag",
      "xOA15GnNkfIKChUwepjBpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90414fc2401085ffcb78b44d5ab00448388041c110d42a2743c8b20cb5d076eaee142584ffeeece2c183072fbbb36fbe99bcb727d8e7d506fab0ceb38f06cdf12a437e76458ab629d8ca555365110240569990cf193f60947d4dae1ff33bddeeb6e2fde86638180861f53b960afa27d8e6586c2cf4df4e50a912656cb5327ea3607cac9d329dbf8eefc7a908256d9c305fcc66c3d16c0ce7e0d758bdffd7c8f21cc08ed6296ed160a5d1b9a80ded50f3d405b4aaac0b0c2d3546a3050ffb4666a8a995210a4509936e18775a512fee45eda493f4042c482bcea91276f122de80895591d2a7e4839600c6971275ebcf83c889cf70f080b3f6772f76bde5cfc2d191d13e191277169db1e862f2969c7196406c1a0c402bf9e549ce97f7f91b3365a6fdc2010000",
    ],
    [
      "ETag",
      "QgtJe0gxH+OiFc3821kB4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:14 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd0db6e82300000d07fe9b318eb40cbdeb88d056c8bd7082f0d966294151ad0d1b2ecdf67f609e7fc809273310cecd135a205efc0944b77cee7a9423ebb56e71a228599ae53398a45f794d3aedf9af5847c35258628ba78a045b35d617b0aa0e41b4bb5b861471287907bbb3442f2792103b1ba5c7a31aaa8ffe9d3954f5d5f5e0839c00f127221e2b246d998e7ce97577443aee1d884869d0ec3194f99bdf7f446c368d57c17511ea789d4c1c52a4c7614665c9b0426912dcb02d7f6c9614b17063a6ea9c25566f02dbcef55cbafd53dba5b94a6c8a90a300342ab5b2f06767b71df1cd79d817f3b7b18255e01be287bd183df3f0c4fb4e51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-59-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fa34014fd2b64f6ab6da9945a9a346b5371ad69e92e0fdd473664182e384a1964064d63fadff732585763a29f98997bce3de73e782277bc4cc994243cbf6fa0de7db915093922a0688eafd7d15d7ee95f8643f99b2d86bb88a682fdcc673344f09625e9b62aa02745533390d328e8e7b5682a5a0bd1c3443ddbe90dc7c7a633744ccb1edb0ef22414d98a9777c8be51aa92d3c1e0a0ddcf85c80ba015977d26b62fef8387e341558b5b604a0ede4a0e50450e3e16fd5a08461517e52c0ad04023a18e614b798116fe33d3e4f46dea3ea7db7e8ee007ce8032269a52b5b630051365c6f3a6d659c9f489689baf0e247057ee223498289a6d1997740b47464a158dd5ae02e3dcdfac8da577bef1d7f370b9f1e26071e1aee7fdc56615adbdc0b8be707dd750342940738d9971aa6f1e5e503f05a978a9d5c3f6b9557e6ed0f2fd585a024a4be882f18939a6c389e9245972c2b289652799094932494e6c6a25267346304a13a0c8d3a29a454b51326a52c734599c8263c5a3c44963c7b226f1646c8d183d069bd109d91f91c79a2b38e3b21292771d22d7fe3274e3d08fbcc53c747509196d0a75d6196b0b78ed51618108faa0a67d1be50295da762fbdd0f5e78b7079e576135e414ed92eb8c71967b49080685a63f314d46b9162c388375fbb6708d613fb7e084a32fdf344da9eb72e5eb5fc851ee2005bbb4a7f4910fa4bef9bb673405cd1a2d19087ee402ab47c83b5a1ebfd5f44e2927659c88fc8f57f91eec9870c6a28d9e7d344b00e7cfaaf1d161fb1b8fa282315de7177986c45580ddd0e715dee81ed8c2c6b4834b856ef62b63d3a74adcdd166842d94eab9a26ef1b1d04eac912f200ce2f83dddadfd3fea82c97c78040000",
    ],
    [
      "ETag",
      "WUkgJRJT1sZcC1yUadocXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb782d1110aa6dc2a1086813402de5600c214b3b2dc56db7ee6e3548f8efce5644a3267a6967a6df6cdf7bed0e1eb32206175659fa54a1dc9ea4a8ef4c11a0aab856742b45a1102c40cd522223d5f69d51dac9425e9df65f87036fbdb9f77a3d2254b4c69c81bb8324431e2b701f7650b01ccd9ae0555e2cebce02bd2dcd701606fef48afa5cc4a69fcec763af3f1ec2de3a2ec64cb365cdff636db1b7602356012628b188d06829a5d860a47d6353b1bce4d850a292112aa8e1fa412a455532294483268daed368d9eda6d3729a675dbbeb10c845c474260a62e733d2075a68c603f1422ec12640d625194eeaeb338db3b836624a7f1ada9d5adf5780a42519c7e5df20e95d33fa0c1fd82182ef1ccb4555e823351adf78bf1d47997e1e35f0c2e10f42694aea8884fe64380bbdc9ade11607effdad46752b0505a9d064d86a762ebae776f33dd64b61a2a6f7b85a566841c4e8efb8ce34b809e30af76f9fae5e847b020000",
    ],
    [
      "ETag",
      "cs2I9Fg4iTlu/BzEDAhjYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:15 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "547f4fa34010fd2adcde3f9af407d4424b93c6ab8a5e73957a946acce5d22e30e02ab0955dbcf44cbffb0d8b557bde694202bbf3debc37b3b33c923b964764400296dc9750ac3fdff2803408489ae0eeefdb6fe2f2f4bcddb94a8fbc20d3a351308364384404ab588266ab149a8297450862309fb59282972b5a70dec4444d4b6f1a5647b70d5b3f302dd3469e80349eb0fc0ed93752aec4a0ddde6ab712ce9314e88a8956c8b3e7fdf643a7bd2af82d8452b47725dba822daef8b1ea63ca492f17c389fa1815240b1808cb2142dbc30a3e0cb6eea16a3592b41f0030b8186212f7359d9c21421cf63969485ca4a068f44d97cf54166cec439f6b5e3e9dcf5f79634abc8cb7d8d0a6db1284094a96c684bac2966292c58b4ac23ab3bedd49b9e63041ddc500162a95d7d753c47d3b639b44f43ed501bb927da2e7fec6a73d77566beb677b8af9d79d3f9857674bd8341e31108c97265dba7410a95e5a7ce8edf9e6745a0126dd4c1454fb7a8d1d7ed200e7a61dc3f3083588720e8073d931e047a6877a11b05409127abec8a45739e5b60597adfee753b86de894db04c4ac328b4fa06ed8361401005a61d75fb64d320bf0a26e184891517ac6e2fb9f2c6beb3f0bdb97b3cf21d55464cb18527b5b9aa88d73e251689a077eada5451c651a93aabb1eb3bdee8d81f5f3af5784c20a1e17a768f0312d35400a269413390509cf3089b462ea6b3b13f9ebaa30932d4995f6c11820c7e3cbe10fcf54a7559aa37399d4c47bed5550eb6904b9a960af3507f10a3652262d3f87f9a91e78dae519a16055dff15c3722c45ff8782c2ab556df35991546adb55876c7e6ef06910bc4e7576f27dee78d7a4def2208602f2f0e3f141b00a7cf857d85e51c4e225451921718dc31a8a4a242ca01e5a9629bb4f6cdbecd82651e042be89754d637b3a558e2a236490cba78aea2baa1a55854af10cc220ce9a3b76cf30fa07e42c281d22050000",
    ],
    [
      "ETag",
      "zjKsVFM/2WlBRbm0dAbSeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "30",
      "0cc5bf8b775c2b95312a81c4614c6c20101a1d9c268442704be91f7789cb8410df7d4ed861871d76499ce79fadf7728122aff730805d9e7db668ce7719f2d21509dab6642b5743b5450800596542da974937e619ad46bbfb993eadf3435a14cbe15008ab0f5829185c20cdb1dc5b187c5ca05615cad8766bfc46c1f8dc3865ba588d5fc7890815ed9db058cfe74fa3f918aec1afb1a6f8d7c8e61ac0917609a668b0d6e85c34868ea879ea025a55352586965aa3d182877d2333d436ca1085a284711476e287a8dfe947dd5edceb0b5892569c532decfa5dbc0113ab32a12fc9070f02185f4ad4d49f27911f7d8693079cb5bf7b1dd7dbfc2c1c9d19ed9b217167d1198b6e269fc9196709c4a6c500b4925f9ee47c7b5fbf015374c391c2010000",
    ],
    [
      "ETag",
      "sFH36tKoTBb+KcvUihfkkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:15 GMT",
      "Server",
      "ESF",
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
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "7fc95a1d480a98ee4a952a0ef29a8a749381782329159087119cfe7b9d7ec2390f94710e5dc7faba840abda231c374c117bb6669b3b3a8bfda300abbc1966ea2f9dfbaa2f4a439ebc0763d2a5ecc008c5b2783d5a76318c7bd2270fcb89cd2a0106f413db7cbe466096201215ba2a234ea98765d8d6a185c0c491329e792150968d3e54e7b9d336fa8611af1e1ca9910a399c5d34f9ce6d41a42a926b289f25cba623739cc3d57de814bc8ce45fc8eddaa396ce6a585f7b40a63ff269c7eabfcf590726cea6daeca18132b1f4dba94f951a219827b235be8987c728941e90cfddb593f36f00cb0216ba145bf7fe920b8d91a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-61-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f7953ed2d0472a55a36ac3e8d6a65b9a82a6698a1cf726189238d80e50a1fef7dd38948190e0536cdf73ee39f7912772cb8b1d199398a77715c8fd971b119313029aa6f8fa38df5ebadffb523dca0bf923dfe705383a9d4c10c16b96a27999414b894a3250e3eda69d4a5195540ad1c244ad81ddb207bdae6bbb5da73fe8bbc85390254b5edc22fb5aeb528d3b9da3763b1522cd80965cb599c85fde3bf7bd4e29c50d30ad3a6f253ba8a23a1f8b7ecd04a39a8b62b2dda0814a818c20a73c430bff99bbf8ec6dea36a7793b45f03d6740191355a16b5b98828922e169254d56327e22c6e6ab03d9784b6f165a4c64555e4405cde1c4da514d23bd2fc13a0fd62b6be19faf83d5345cacfd6833bbf056d3f66cbddcaefc8d7575e1059ea5699c81e15a13ebccdc7cbca0fe0e94e685510febe75af9b9418bf763a90928ada00946c3ee80daa3ae1b27f1902523a71f275d88e3513cec5327ee32f7144e773150e41951c3a28528c066c364b4838875934184182772597c1ab9ce28b17bb4d74b9c01399c9007c935ccb92a85e24d87c855b008bd280cb6fe6c1a7aa6848456999e37c6ea025e7bd45820823ea8e95047b940a5badd0b3ff482e92c5c5c7acd84979052b6dfdce18c139a29403495d83c0d722576d830e24f57de1cc166623f8f4145c67f9e48ddf3dac5ab96bfd0431c606d579b2fd984c1c2ff66ec1c119734ab0ce4be3990122d5f636de8faf01791b8a44d16f26beb05bf49f3144002120af6f934116c029ffe6bc7c5472cae3eca288d77dc1da66a1126a1d9216eca3db2dd81dd1b110396fa5dac37748e5dab73d4192187423f57d42c3e16da8855ea0584411cbf6fba75f8070dc8d00278040000",
    ],
    [
      "ETag",
      "xDUV9J5rsxrHrKmymne3tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcb782d4951a9d28403282a11104af5620859db2916b73b7577ab41c27f77b62a1a35d14b3b33fd66fbde6b37f090ab1442b8cb978f15eaf5de12edd415119a4a5ac3b7929441f000ad5832e99bf4293abdf42fdad307f53292ea86569369a7c38449eeb110106e20cb51a606c2db0d285120af2524ab422deace03bb2edd70164783f139f705a5ae1f5f0f87dddeb00f5b6fb7980a2b1635ff8fb5f9d68315dd4598a14695a0d3526a5a616207cea6114529b161a8d2091aa8e1fac15253550a4dd4e0492368369ac1bedf6eb6fd8356d06a332829113627c5ecf58cf581252b6444cfec120206745db2e1acbe3ef1384f6b23ae1c8ce3e0b0d6f7156069592e71f137c87aef057f860fec3d82ef9c28a85276479d0dafbabf1dc7997e1e75da8dfb3f086339a91d120f46fd59dc1d4d1c377ff7de5b5b34134d1ca4419761d33f3c6e1d05fe5bac27e4a2e6f7845657e84122f8efb8c82d84999006b7afe5298ed37b020000",
    ],
    [
      "ETag",
      "0sdvRDK0H9QknzMlnVojPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:16 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3010fd2b962704686dd3165ad64a8815c8b68c9274690aea26d4b8899b1a9238d80e5285fadf777628ac82b18f9322c5e77bf7def39d93477cc7f218f7f19c25f72515ab0fb77c8e6b982a92c0eecfe5c7c355b3e81cd847d25aadbe5f8865de191c1f0382e92a49b222a575c94b1151d99f8c1b89e0654104e77520aa77dbf556b7ddecb57acd834eb7d3833a49d3c590e57750bd54aa907dcbda683712ce93949282c946c4b3e77deba16d1582dfd248496b5bd2021569bd2f7a92f28828c6f3e3c9180c94928a19cd084bc1c24b653cffbc4ddd60246b24007e60112551c4cb5c695b4011f17cc192521856dc7fc4c6e61f0b3cb687f65980cebc891bec8524d3c5e13e2212cd6682ca32553514c299162ca533168755a6b8435f7cef1232e06049249521bafe66fb364243efdaf6f74280eea3a17361a3133470cfd13689e3a289ebdae300ed9deca3afbe3719a1d3e91606dcc77441c0c03951a0a0b4ebb85a3a7aa48a4a05a0a77e3bafa78cd73acbb8604a9fd47103db1f9c05ce955d3577481312adc6f7d0de05492505341124a38a8a4b1e532819796327703c7730840ad3b1d1062171ffd7e34b41b02aa836a8cc5b6b750f8dfe067045d2d2201eaa05de697576f07a5dfb3bc9c0f7075310264290d5db026f2a18bc892a931bc516d66a9ba88dd7376b786a18ae62c58e7f4c6c7f8aab2d9f2ea8a0796428df69b2019bc43fbfa8cdf5062c5c7090910a62a95824b54824a849072c33769faa7b47cd4e0b1bb050af739f9afa2f90c76f669e344ac34f85e0c237775a87a0268d1796434fe02f51c3199592249a6692c3492425f394223378f4dc67148688e5480f0285c17464cfcc30c21a3a25316454f7109926f7919ef166bdab835dedc8f8a846f39f3cdc546dd122e79e6bc33dfa0d014c07e25f050000",
    ],
    [
      "ETag",
      "Zh+4y0p53E7s/yyJKrhn5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:17 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "1800d0bb642d4e8802a63b547e43c53aa0c286414cd150e58320163abd7b9d1ee1bd1f9417059732ebea8adfd11b1a7242a7c594c1629995050d124cdcc729ac9368b0f6a597babacae6c6681f1cdf58d167c9fa4bacf4490ef799697e26958e19e020b5b67b7103e14579b1197ba237956b96d5a95f6d4345ed8814ef44b8db66581bf83c9a1084b1d891d661a74063d6c665c2315300c0ca62f9947238c6cdce8a708add2378cfb3127dac77f41e16fea63b3e6eb9c6bc2a8aeb56ae6acb9e8f8e2dc49725714c9db90ab54fb4d8808b67f7e9014d10ff866bcb65767d71671aa513f46fcfba01f82b60c9f396b7e8f70f2f7d48961a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-63-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6fda3014fd2b91f7b54078241024b4229aae48104608adaa698a6c7393ba0d711a3b4c5dc57fdf8d53ba5695da4fb17dcfb9e7dc479ec983c877644c98481f2b289fbedd4b46ce08689ae2eb3a729ddb9bbff7999bae17535f85620bb09e4c10216a96a2fb2283969255c9418db79b765acaaaa0a5942d4cd472fbadaedbb3bdae67f71dd7f190a7204b16227f40f69dd6851a773a27ed762a659a012d846a73b97f7def1c7a9da294f7c0b5eabc97eca08aea7c2efa3d939c6a21f3c97683062a05650c7b2a32b4f09fb963e7ef53b705ddb753041f0407cab9ac725ddbc2145ce68948abd26425e367626cbe39908dbff06791c56556edf338a77b38b37654d3583f15605d86aba5350f2e57e1721acd5741bc995df9cb697bb65a6c97c1c6bab9f243dfd2946560b8d6c43a37b7002fa8bf03a5456ed4a3fab9567e69d0fce3586a024a2b6882f1d0766977647b2c61439e8cfa0e4b6c606cc4860eed339b7b0318ec1850e41951c3a2b9cc1d7bd8636ce8c65d6fd48b0714784c19e531a3ae87945d7fd075c8f18cfc2985860ba10aa944d3217213ce233f8ec26d309b46be2921a155a62f1a6375016f3d6a2c10419fd474aca342a252ddee7910f9e17416cdaffd66c20b48297fda3ce28c139a2940342db1791acaa5dc61c348305dfa17083613fb790a2a32fef54cea9ed72edeb4fc951ee1006bbbda7cc9260ae7c10f63e784b8a659652087e6400ab47c87b5a1ebe36f44e2923659c87aeb87b7a4790a21811272fef534116c025ffe6ba7c5472cae3eca288d77dc1dae6a115e42b343c2947b627bc3be6b13032ef58798d3ed9eba56e7a833c21e72fd5251b3f858682356a957100671fc81e9d6f11fee06037478040000",
    ],
    [
      "ETag",
      "QT65YWzjl6gQLAEsRiUeeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bca509558b96a417a0559bb4a894c644639a2d0c485d58dc1f9bdaf4dd9d45ad464df40666866f96730e6ce0b1ac33f06151164f06e57aaf407d6d8b1895e15ad1ad11b5427000352b88bc0c4f9661bc9a98176ea268bab8756fb2b3d56040844a1fb062e06f202f91670afcbb0dd4ac425a4b0537553d6f3b07f4bab1c369128fa273ea2b91d93e9a8dc741381ec2d6d92d664cb379cbff63ed7eebc0522c62cc51629da2d5d248b1c4548fac4dc5aa86634709235354d0c2ed83420ad330294487261defa0d3f5f6dd7eb7ef1ef4bc5e9f402e52a64b51133b9b923ed042331e8b15b9048f00d99664386fafcf342eb3d6882d4751e21db6fabe02242d2f39ceff0649ef03a3cff081bd47f09d639530b5de5167e3cbe0b7e328d3cfa34e8364f883509a92da21c968329c26c1e4ca72f7efdec3b54675250505a9d066d8750f8f7b479efb16eb89b051d37b7c2d0d3a9032fa3b2e4a0d7eceb8c2ed2b013b3cd77b020000",
    ],
    [
      "ETag",
      "OBCjBRwMuzluNNSbZ0WdFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:18 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "0b",
      "4f",
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "91",
      "272490fa7ea44d25c44a092ca24d599a82d034b58ee304431207db0155a8ff7d1787f2181b489112fbbec7ddf99c2774c7b2108d50c0e2fb828acdb75b1ea01aa20ac7b07b1e84e3e2f134f2e7a1338cf9ecf87496cac7c34340b09225719a27b42e79210895a3e5a2110b5ee458705e07a1bad9abb7cd4ecb6a5bad6edfec5bc0933489a62cbb03f68d52b91c359b3bef46cc799c509c33d9203c7dd96f3e749ab9e0b79428d97c6fd90417d9fcdcf428e1042bc6b3c3e502122824152b9a6296400aafcc30f8fe5ebac170da8801fcc008c584f02253655a20417816b1b8105a158d9e904ef3cd075ad8537be21b93f9d2f5f7d7382dc9eb03034b63b512541689aa196ba82962095db1705d45f23be3d49bcf200219dc6049e5dab8fa617bb6614ce757b6b7ff1200ada9736e1b47c6d83d31de4b39aeb1745d7be11bfb4707c699375f5e18c7d7ef30504348a56299aec0c74142cbec9f9bec7c3cda9280151857c1d5a065e2f6b06505513020d1b0db0fa2160d826130e8e36ed022568ff6c28062e0a9525db370c6b3413f8c48afd3b506985861d089dad630e8d056075b940c4cd3eaf6a30813136d6be85130454f98ccb96455a7d195e7f8f6caf796ee64ecdbba8c0843374faae4ca22dee6a9a048007d52d7b68c320e4ee5b139ae6f7be389ef5cdad5a44c698cc966710fb312e1445240638153aaa898f1109a862ee60bc777e6ee780a0c7dfc173b8444a35f4faf047f93eb2e2bfd460bdf73dc339dc00e71899342431eaa0fb487f37c0f6db7b5ffcb8c3d6f7c0dd65808bcf92b06e598bd92fe0f0b8dd7ab2acd9d651b956ebb55076d7f6fe1a921b8",
      "59953afab9b4bd6b546d7934a28266e4ebf101b00e7cf983d8dd56c0c27d051ba9600dc34a64694204ad8696a53add67b635ec985da4c1427d88f57beddde9941aa5224d69a69e2baa6eab6e54192ae40b0882306bae3ea8ed1f3a532e4b2d050000",
    ],
    [
      "ETag",
      "KbdAuwFfTOdI8goMBFMmsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d90416fc2300c85ff8b776da5520613481cc654b14a151b659c1042a1b85d4b5b8724654388ff3e274c13c75d12e7f9b3f55e2e7028db3d8c615716c70ed5f9a140b3b0458abaab8de64b52ab113c40230a26974112e54f7195ca6a17c6c7d972f676f85e4c264ce8ec131b01e30be425d67b0de3f5055ad1208f6db7ca6d64cc9ca555e2f947348b52161ada5b61be4a92e76912c1d5bb1b93877f8d6cae1e54b44b3147856d86d68554546166621b508b46d6e86bea54861a1cec1a85a24e0a45e4b3e20f1ffdde300c46bd51d01f0c0723066bca8429a96576b5646f60c8883aa52fce072103ca951c3577e789e5becb707280b576df0bff7a3ddbdbfc2e9c9e0dea7745ec4ea33516dc4cbe90356e3890511d7a9009fee5d7d2dcded71ffc32b9b7c2010000",
    ],
    [
      "ETag",
      "S0LEf7IjRpjb2IqGSGOkxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:18 GMT",
      "Server",
      "ESF",
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
      "db",
      "6e",
      "82",
      "30",
      "0080e177e9b531e0406477a2dd3819a888386e9a5abb4241cee765ef3eb317f893efff018452d6b6b82b3356807730938dbea66ba7da19983f9670cb75f445fdf641d4c98291e879be2f6a2756fdcb614271299fa7de2445d252e106c93993ae7bfe6a8d96a7d8cb2517e838deba656b4672050397b172849b6bfd619d94744a149b79e814efefaebcbd4bb67510fec3d0acdbcee1441562e108636f9c9ffdac2378f9f4c22e34fd2755c41945a5ed0f4a2fd91a548ec8eb4c0725d4c550e2b4a3573640a1b5ae350f7120d59e9657e31c9ae43b032bc0a62a6d588bd317f74dd5f515f8b7e36eaed86b80c148c31af0fb07e84817621a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-65-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4014fd2b64f6d5b6b40a2d4d9ab5a9b8926de90a5463361b324c2f380a0c32836b63fadff732585763a24fcccc3de79e733f7826f7bcdc92294978f6d040bdfb762712724440d10c5f9d9fcc5feefcfbcadf2463f70a6e6ee8d3d3e56c8608deb2242daa1c7a5234350339dd84fdac164d456b217a98a8675bbda13d329da1631e5bb6e5204f429e2e79798fec5ba52a391d0c0edafd4c882c075a71d967a2787d1f3c8e06552dee802939782f39401539f85cf47b2e18555c94b34d88061a09750c05e5395af8cfdc26a7ef53f7392dfa19821f3903ca98684ad5dac2144c9429cf9a5a6725d367a26dbe3990d05dba8bc860226f8a322e690147c6962a1aab5d05c679b05e199e7fbe0e56f3c85bfb71b8b87057f3fe62bddcacfcd0b8be7003d75034c941738d9971aa6f3e5e507f0b52f152ab47ed73abfcd220efe3585a024a4be882f1d8b4e970623a499a8c593a39b692d484249924638b1e2726734ee0649b00459e16d52c5a62cd943a8e6d5bb133b22631a2c631c2cdd81a4e86d41cd9136659647f44fed65cc119979590bceb10b90ebcc88da360e32fe691ab4b486993abb3ce585bc05b8f0a0b44d02735eddb2817a8d4b6dbf32337982f22efcaed26bc848cb25df880334e692e01d1b4c6e629a857628b0d23fe7ce59e21584fecd72128c9f4f733697bdeba78d3f2577a84036ced2afd25611478fe0f6de780b8a279a3218fdd815468f9166b43d7fb3f88c425edb290cb8d1bdc90ee2980146a28d9d7d344b00e7cf9af1d161fb1b8fa282315de7177986c45580ddd0e715dee81ed608221d1e05a7d888d4eac43d7da1c6d4628a0542f15758b8f8576628d7c056110c7efeb6eedff0122ced6d978040000",
    ],
    [
      "ETag",
      "9KcNLyNkpNUb7EVeYYaxxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92414fc2401085ffcb782d49515aa50987a2a8248808e5640859da692db49db2bb0509e1bf3b5b118d9ae8a59d997eb37defb57b58a545041e2cd2645da1dc9d25a89f4c314655655af1ada4422158805a244c3ac3627569bf26eb5b5a2f9dd174d5ed6dfc6da7c3840a5f3017e0ed214e318b1478cf7b28448ebc165256e5c5bcee2cd0bbd20c27c1b83fbce33ea7c8f4c3e960e077073d3858a7c5486831aff97faccd0e162c6931c6182516211a2da5a42586ba6f6c2a919719361455324405355c3f482455a590440d9e345ca7d174cfed76b36d5f38aed36630a350e8940a66a713d6079ab4c8c6b46597e03220eb920dc7f575c3e334aa8d98b23f0cdc56adef2bc0d2e234c3f9df20eb7d11fc193eb06304df39915355e813753b78f47f3b8e33fd3ceac60f7a3f08a539a91312f41f7a93c07f18196e76f4dedd695423491ca4429361d36e5d3997aefd1eeb3599a8f93d9e96155a100afe3bee530d5e2c328587375c544cc67b020000",
    ],
    [
      "ETag",
      "5Nnk70xgqFoqj5PUkBEvAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:20 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "8d",
      "4f",
      "a3",
      "30",
      "14",
      "ff",
      "57482f269a6c837dc15862bcdd440f6f328f318db95cb6520a5619455a348bd9ff7e8fe2d49d779a9040fb7e1fefbdbef284ee5816a1210a59725fd262fde59687a881a8c409ec0e8c3c7cd4b3b3707ec22e65909e7527ba991c1e0282552c8157794a9b829705a162389fb5928297392e386f8250d3349b6db363d86ddbe8f6cdbe0d3c41d378c2b23b60df48998ba1ae6fbd5b09e7494a71ce448bf0d5cbbefed0d1f382df522285be6ba9838bd03f363d4a39c192f1ec703e83044a418b055d6196420aafcc28fcba2bdd6278d54a00fcc008c584f03293555a20417816b3a42c942a1a3e2195e69b0f347326ce38d0c6d3b917ec2ff1aa222f0f342cb4c5a2a0a24c65435b424d314be98245cb3a92df6927fef41c2290c10d16542cb5abef8eef68da647ae5f8fb2f01d09ab83f1ced481b79c7daae94eb6973cf736681b67f74a09dfad3f985f6ed7a07033544544896a90a021ca6b4cafeb9c9eefba3ad085882711d5c588689db03c30ee3d022f1a0db0f638386e120b4fab81b1ac4eed15e14520c3c59a92b16ce7866f5a398f43a5ddbc2c48ec24edcb60761871a1d6c536299a6ddedc7312626da34d063c1243d6622e782d59d4657be1b388bc09f7be351e0a832620cdd3cae93ab8a789ba7842201f4415d9b2aca383855c7e67a81e38fc6817be9d49332a10926ebd93dcc4a8c5341018d0bbca29216e73c82a6a18be9cc0ddca9379a00431dffc51621d0f0d7d32b2158e7aacb52bdd12cf05def5425b0455ce2b4549087fa03ede13cdf439b4de3ff3223df1f5d83352e0abcfe2b06e598bd8afe0f0b8557ab3acdad651b556edb55076d7e6fe06920b859b53afa3977fc6b546ff934a605cdc8e7e3036015f8f407",
      "b1bdad8085fb0a3642c21a869588ca8414b41e5ab652e9d6ecb66174071652e042be8bf5fbd6f6742a8d4a91ae68269f2baa6fab6a54152ac50b0882306b9e3aa8cd1f4ce932ce2d050000",
    ],
    [
      "ETag",
      "80pbw/nJbUFiVtTlJ3L/6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d90dd6ac2401085df657a9b803f1850f0428b5841ac4d2b9696226b3289d12493ee4e222abe7b67d752bceccdeeec996f8673f60287ac8c6100db2cfdae519f1e52e4175b8468ea9c8d5c159506c10364950af93c3d37fc3e5a8ed7f1b9099378f7b1d6741c0e8530d10e0b05830b2419e6b181c1e7054a55a08c6d36da6d148c4f9555668bb7c974128a50506c85c56a3e1f8de713b87a7763d5e15f235f570ff6b40d31418d6584d645a5698f11cf6c40a38a2a47df50ad2334e060d74835d595d244be287e10f8eda0d3eab7fbad6e2fe8f505cc29529c5129ecea55bc0113ab3ca4a3e4838e00da95123571672372d765681c60adddf73a7fbdb6ed7dfd2e1c9f18cd5293b833688db56e261fc91a6709c4ba460f2225bffc94f1ed7dfd01f469042fc2010000",
    ],
    [
      "ETag",
      "OGzvtXAPBWdzvRfdhZWrow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:20 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0dd6e82300040e177e9b51807dac2ee04411107c2a6c26e1a848e9606ad94bf6ed9bbcfec054ef29d1f901705911277774e6ee015a85cb7e6c53c10a68dab92ca7e40f6885d78ef767a72520fdf7a312e8eef5d3974385699b639973bc954883da46564a5b7073fdd9d1174975fb61d2d8775d90f8b53ad718ea9fb40a648e3c1a11bf7b830218a8bf72292aa5b18a8d9de54ff4c4c0c5e45d0186d5de0b432cbb419cc1ce7a3e55da2b1a20cc7723d8642b807130a2dd33c6b6a3c52f1a0dec7741f8e8db33d7ef6df705325b4446f09cceac860bcf4a8ca3e2898013209d61289d9936bac2c6b06feedb853823c07d8246f490b7eff003267280a1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-67-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc8fbda2410f22252b446096d9112d20169374d1332e642dc129c61d3adaaf2df77314dd7aa52fb09dbf79c7bce7df044ee799992294978febb86eaf1cb9d48c8190145737c9de4cb4956ec2e8b9db7b0cdbebafe3e0fffce673344f08625e9fe5040478aba6220a7dbb09b57a23ed04a880e26ea8cc61d6bd4371dcb31ede168e8204f4291ad78798fec9d520739edf54edadd5c88bc007ae0b2cbc4fee5bdf7d0ef1d2a71074cc9de5bc91eaac8dec7a25f0bc1a8e2a29c6d4334504ba862d8535ea085ffcc34397f9bbacbe9be9b23f88133a08c89ba548d2d4cc14499f1bcae7456327d22dae6ab0309dd95bb880c268a7a5fc625ddc39991524563f57800e322d8ac0dcfbfd804eb79e46dfc385c5cb9eb7977b1596dd77e68dc5eb9816b289a14a0b9c6cc38d7371f2fa89f8254bcd4ea51f3dc283f37c87b3f968680d212da603c3647d49a984e922563964dec619299902493643ca476623267008334018a3c2daa59b414e5600ca9ddcf9238b52c271e58c3514c9dcc8c87d63861b6ed3860dbe47846fe545cc192cb8390bced10b90dbcc88da360eb2fe691ab4bc8685da8656bac29e0b547850522e8839a8e4d940b546adaedf9911bcc179177e3b6135e414ed963f81b679cd14202a26985cd5350ad458a0d23fe7ced2e11ac27767d0a4a32fdf9449a9e372e5eb5fc851ee1001bbb4a7f4918059e7fa9ed9c1037b4a835e4a13d90035ade616de8faf80b91b8a46d16f26deb063f48fb1440061594ecf3692258073efdd74e8b8f585c7d94910aefb83b4c3622ac827687b82ef7996d9996399c100daed4bb587f649dbad6e46832c21e4af55c51bbf858682b56cb17100671fcbeeed6f11f6d40b88b78040000",
    ],
    [
      "ETag",
      "8gD8flhGlhIC302tPXASxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92414fc2401085ffcb78b42445a195261c40513180d8162f8690a59d4261dbadbb5b0821fc77672ba25113bdb433d36fb6efbd760feb348fc18379ba782d51eece16a89f4ce1a32ab956742b44ae102c40cd16443e070d37f3b118ab876893962b37599f6fb6ed36112a5a62c6c0db4392228f15782f7bc85986b416095e66f9acea2cd0bbc20c83d0ef8feea8cf446cfad16430e874073d3858a7c5986936abf87fac4d0f16acc4dcc70425e6111a2d85142b8c74dfd8542c2b38d6942865840a2ab87ab090a22c9814a246939ae3d6eace85ddaab7eccba6d36c11c845c4742a72622701e9032d34e3bed8924b70089055498693eabaa1711a57464cd91f854ea3d2f715206949ca71f637487a978c3ec307768ce03bc73251e6fa44dd0e1e3bbf1d47997e1e75d3097b3f08a529a91312f687bd20ec0cc7869b1ebd77771ad5580a0a52a1c9b06e37ae9aae63bfc77a2d4cd4f41e4fcb122d8818fd1df7a9062f615ce1e10d96ec53467b020000",
    ],
    [
      "ETag",
      "VS47mRepPsJcviuj7fk+vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:22 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b96f705b43e68191ded84588100d1daa42429ac42a835891b5c9238b59d4e15ea7fdfb5d3d2756cecf3a44a8d7dcf39f7dc875ff033cb22dcc18f2c9e17542c3fccf823ae60aa480cb7cecdf2fa72e1b8bd6e7bf9f1b2f979f67dd69aff38390104d32c49d23ca155c90b1152d919fab558f0222782f32a08555bc7d546ab79d06eb40f0e8f5a476de0499a4c7b2c7b06f69352b9ecd4eb9bdcb598f338a12467b216f2f4f5bebe68d673c1673454b2be9bb20e5964fdfda4a7090f89623c3b19fa60a090548c694a580216b6cce8f1ebae748d91b4160378c1424ac2901799d2b64022e4d994c58530aab8f3828dcd5f3eb06ff5acf3009dbb4327d89b90549327fb8848341e0b2a8b4455d0046a9ab2848e59342923f933baf4dc3e44c0c11391544ed0ddb5e55908f5dc3bcbdb9b48051e41a8677fb3d029ea3a176857c776d0d0712c3f407ba7fbe8ca7387037436dac14001119d12f07041142451da78547eda7aaa8a4a05a075cbedb783c62b1d655c30a58bb59dc0f2bae7817d6b95fdedd198844b7f0e1d9e92445240134152aaa8e8f3880265e0fa7660bb4eb7070cd3b4c1062171e7fe654b089639d50695f9c781dd87e2bafd015ead2a7f87753daf3b0269220459fe1603bbad4f9abe65df92a430108337a7d2c6a20ce006d6d936a7265e3dace057c1b06fa53abe195ade0897571e9d5241b3d048bed3460336817f3e9bcd0e0316b618d2c0262826150ba54e120a6ac2014b8ddd92dd38687e6a1e620316ea4deca8a163348bfe1859e7288c3e15820bcf2cae3e423669bcb00c7ac2a21bb3f63b2ee7ebab944a49622def709412153eb12c4692c519680b8aa65ca06991859a566eb9b922222e529a29a48726",
      "3be875ee35e41779ce85a2d1560500e503f103cf76aef6bfac8f67a3c0f2e1d92974dfe81c371f7451a69472baff6f190fe570b49f0bd7b1609b7f0238c00f40ca050000",
    ],
    [
      "ETag",
      "NQyHFvNOLA9y+F27jXj6qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:22 GMT",
      "Server",
      "ESF",
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
      "d0bb646d1d3e06a53be260a3628314ebe026134204441402844fa777afd323bcf70318e7a26968fb2cc403bc839119f69ccff7d50ad1947737535c3cfd5eeb9ef4830986cf94e0f2127f5b15bc16a88dda913e4683b2052f8c5dbcd978ce22c6b7c8e5ce601c7cd674468a7104e10a8e96ac74a85dc9a396304fa6c9fcecd26383b44e1cf8327ccb54b9546e790bea10313f3b6db38f4983e21c92164f76e8580121dad08b03317b77598fd02009a647a87d2d7c8f9d56a25c477b85a27ee8cf55ac63752f92946fcfc1bd59e7f14ec12e462a073320862a97a2a1f98b6b42db9e817f3b6dc74abc0290605248f0fb070fa7b73d1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-69-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc87b6d0224210991a2354ae9ca96900d48bb699a90710c750b98629329aaf2df776d9aaedda4f609dbf79c7bcefde011ddb36a87662865f9434b9bc3873b9ea2334425cee1757bb5fd7e28c3e166e59b4ddcdeede3cf832f8bf91c104cb1042eeb82f6046f1b42c56c1bf5f386b7356e38ef41a2ded8edd9e381e5daae3574c68e0b3c418b6cc5aa7b60df4a598b99699eb4fb39e7794171cd449ff0f2f9dddc0fccbae177944861be96344145986f8b7e2c38c192f16abe8dc0402b6893d012b3022cfc65eed2f3d7a9fb0c97fd1cc07b46282684b79554b62005e155c6f2b6d159d1ec11699b2f0e28f256de3236082fdab24a2a5cd2336387254ee4a1a6c665b8591b7e70b909d78bd8df0449b4bcf2d68bfe72b3daae83c8b8b9f242cf90382da8e61a73e35cdf02b880fe8e0ac92aad1eab67a5fcd420ffffb12802480bda05938935c6f6d472d32c9d906c3a74d2cca2693a4d270e1ea616714774b44b29069e16d52c5cf1ca725c6787273871acd13819d9033b495d679438f6c4990e327b349d0cd1f10cfd6e98a4174cd45cb0ae43e826f4632f89c36db05cc49e2e21c36d212f3a63aa80971e251408a0376a3aaa28e3a0a4daed07b1172e96b17fed75135ed11c9343f40033ce702128a07103cd93b459f31d340c058bb57701603db1afa7a040b39f8f48f55cb978d1f2677a0c035476a5fea2280efde093b673425ce3a2d5907d77403558be85dac0f5f117206149bb2ce8dbd60b7fa0ee29a4196d6845de9f268075e0dd7fedb4f8ea4f8e948c907087dd2142899086763bc474b94f6cdb1a4c4736d2e046fe1b1b5aae73ea9acaa132d29256f2a9a26ef1a1d04eac15cf2008c2f803ddade31fd184460c78040000",
    ],
    [
      "ETag",
      "UHUXymR3OLI/rTujvTJ2KA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f83401085ffcb78a509554b2d490f54ab9250d496f6624cb385a1a502437717b569fadf9d45ad464df40233c337cb7b0f76f0989509b8b0c8969b1ae5f66889face14635475ae15df2a2a158205a8c592c9d9ecece5b92bedf07a1dd0c61e0e9eb2cdccebf79950f10a0b01ee0ed20cf344817bbf835214c86b31e57551ce9bce02bdadcc70128dfdf08afb8212d387d320f006c110f6d66131115acc1bfe1f6b0f7b0bd6b418638a12cb188d964ad21a63ed1b9b4a14558e2d45b58c514103370f9692ea4a48a2164f5a4eafd5768eed5ebb679f749c4e8fc19c62a1332a999d4e581f68d2221fd333bb048701d9946c386dae4f3cce92c68829fd30724e1b7d5f0196966639ceff0659ef4af067f8c0de23f8ce8982ea521fa8cbe0c6fbed38cef4f3a80b2f1afe2094e6a40e48e48f8693c81bdd1aeee1ddfb60ab51dd4ae220159a0cdbf6e959a7ebd86fb19e93899adfe36a59a305b1e0bfe33ad3e0a62257b87f055cffac977b020000",
    ],
    [
      "ETag",
      "VV8xw7r0NHjLoq0EBviqVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:24 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "4f",
      "db",
      "3014fd2b96f705b4be798d4e88b590b168695af2007508b5267182471207db61aa50fffbae9d96ae63639f27556aec7bceb9e73efc8c1f5811e33ebe63e96345c5e2dd777e871b982a92c2adf56df8def1d5c12076166e389c54bd78f2233d390104d32c49f232a34dc92b1151d90ffd562a785512c17913849a479d66f7b0d739ee1e77f60e0e0f8e8127699638ac7800f6bd52a5ecb7dbebdcad94f334a3a464b215f1fce5befdd46b97827fa79192eded946dc822db6f273dcd784414e3c549e883814a5231a339611958d830e3bb4fdbd22d46f2560ae02716511245bc2a94b60512112f129656c2a8e2fe3336367ff9c0bee55867013a1b876eb03327b926cf7711916836135456996aa039d494b08cce583caf23e503faec8d47100107f744523947d75f2ccf42c8195f5bdece5c2af008428efdd542a768e09ea36d1ddb45a1eb5a7e80764e77d185370e276838ddc24001314d087838270a92286d3cae3f6d3d5545a502d0aae5f6eb41e3a58e322e98d2c5da6e607983b3c0beb2eafe3a3425d1c27f840e27249314d044909c2a2a463ca640998c7d3bb0c7eec0018669da648d90b87ff3bc21048b926a83cafce3c01e417183d1042f978dbfc3069e3798823411822c7e8b81ddc37d4ddfb0af48561988c19b536de3a90ee02ed6d9d6a71e5ede2ee1d7c0b06fb53abe0c2d6f8aeb2b8f2654d02232926fb4d1804de09fcf66bdc380852d8634b0098a49c522a99344829a70c07263b766773bfbddbd236cc042bd8aed773afaa917f11f23ab1c95d1a74270e199c5d547c8268d1756404f587c69d67ecbe5e3ea2aa7529254cbbb1ce54445f7ac4891646901da82a2840b945445a469f5969b2b22d22aa785427a68b28f5ee6de427e55965c281a6f5400503f103ff06cf762f7e3ea389c06960fcf4e",
      "a19b6eff43ef5617654aa9a7fbff96715b0f47fb391fbb166cf34f4e790f8bca050000",
    ],
    [
      "ETag",
      "EZB+LSt5AdLyNUBPu2dPwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:24 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b7282300000d0bb642d0e2022744714a85aa158089f0d13432c1f956820089ddebd4e8ff0de0fc08450cef3ae6de80dbc8111abe69cccf7cc80f93759215126dd578a68ac15efeea977b7c3d4d6f5e148b99b555a81c2eb5024aa9b44c8b23c7920f74012f6a5f260506e9cc90f5976f602abe7b96f2f4f8b69ed05b1c994203a96186233b546ad94f54e39ab3bae49e13ecbf58d88a7be155c1002a55e1b76ebd4d3f4c3019e4d7471b793434af1192d5c3fbc22e648210f3f58819b22d2eb8b4cac7b6713e1dfe05a8281baaa1a621bfdb5a9cbbd825a038319a04f563d28cfab1777b134cd19f8b7e7ddc8e82b0052fca00ff0fb07805585001a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-71-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2bc87b5c134842208914ad11a51b524256425a4dd3846c63a85bc0049b4e5595ffbe8b69ba5695da276cdf73ee39f7832774cfab142d10e1f9a165cde3973b41d019620ae7f07ae5daeed783e71d48b8379da6cddd360c57cb252078c792b8ac0b3690a26d28938bfd6e9837a2ad7123c400120ddcd160e48cadf9686e4da6ce740e3cc98a6ccdab7b60df2a55cb85699eb487b91079c170cde5908af2e5dd7c189b7523ee1855d27c2b69828a343f16fd56088a1517d572bf0303ad644dc24acc0bb0f09f9992f3b7a9871c97c31cc00f9c324ca9682bd5d98214545419cfdb4667458b27a46dbe3aa09dbff6bdd8a0a268cb2aa970c9ce8c142b9ca8c79a1997d1766304e1e536daace2601b263bef87bf590dbded7abf0977c6cd0f3ff20d8549c134d7581ae7fa16c205f4532615afb47adc3d77cacf0d0ade8fa52380b4647d30712d078f66d69c64c4a5d96c322599c5089911778a27c4a2739bd9296118785a54b37025aa994da694dae3c49d3a93c49ea4764248e626e92c9b1027cd2c9b3ae87886fe365cb10b2e6b2179df21741305b19fc4d13ef456b1af4bc8705ba88bde5857c06b8f0a0a04d007351dbb2817a0d4b53b08633f5a797170edf7135eb31cd3c7dd01669ce1423240e3069aa758b31129340c85ab8d7f01603db19fa7a0448bdf4fa8eb79e7e255cb5fe8310cb0b3abf417ede22808bf6b3b27c4352e5a0d79e80fa806cbb7501bb83efe01242c699f055dedfde817ea9f2296b18655f4f3690258073efdd74e8b0f58587d90910aeeb03b547622b461fd0e715dee337b64d9cecc461adca877b1d9787cea5a97a3cbc84a56a9e78afac587427bb156be802008e30f75b78eff001e43347178040000",
    ],
    [
      "ETag",
      "Q747+qCCqbNU/6rug7uNNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085df65bd2db1281469c24551d4c682fc146234842ced148a6da7ee6e250de1dd9dad88464df4663b33fd667ae67477ec39ce4266b365bc7a294094272b50231d8c41168992f4c83193c00c068aaf88b47a969c9d9adb12e5e32cb86b3dccc47d63d4e910218335a49cd93b16c5908492d94f3b96f114a82dc0a448b34595194c95b92e4efcb13bb8a13cc550e783a9e7395dafc7f6c6b131e48a2f2afe1f6df3bdc136b81c430402b200b4965ce00602e5ea35254ff3046a120b118064155cbd58092c722e106b54a9b5eab5ba7566b6eb6df3bc6935db04261870156346ec7442fa9842c593316ea5f684005185b470549daf548ec36a111dba03df6a54fabe02242d8a1358fc0d92de35a7dff0811d2cf8cef1148b4c1da96befdef96d1c79fa39eacaf17b3f08a9c8a923e2bbfddec477fa43cdcd0fbb774b057228908c94a03dac9b8d8b66cb32df6dbd446d357dc756a20083059c6ec76dac981df144c2fe0dfc6a35307b020000",
    ],
    [
      "ETag",
      "6E6sV/0wyosZVcK7XVrO4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:25 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5547f4fdb3010fd2a96270468fd414bcba01262a5849111929226a06a428d9bb8c190c4c576902ad4efbeb343810ec6fe9c14293edfbbf79eef9c3ce17b5624b887a72c7d28a9587cb9e3535cc354911476c9d9ae675da55f7f7692161d76af6783e9f9e8f2f010104c574992cf335a97bc143195bd70d448052fe744705e07a2fab776bdb5d7de39681decec76f7ba07502769367358710fd5b74acd65afd95c693752ced38c9239938d98e72ffbcdc776732ef81d8d956cae4b364145363f173dca784c14e3c561380203a5a4624273c232b0f05a994cbfaf533718c91b29801f594c491cf3b250da1650c4bc98b1b4148615f79eb0b1f966814796630d0234f04237d88a48ae8ba36d44249a4c049565a66a288233cd5846272c89aaccfc1e9dfade0564c0c12d915446e8faccf22d841cefdaf2df3039f6b9858e50df3d41eb44b68b42d7b54601da3ada463f7c2f1ca2e3f11a064e90d01901132744818ad2ce936a69ebb12a2a15809e7b6ebf9f345eea2ce382297d5adb0d2cbf3f08ec2bab6ab04353122f460fd0e219c92405341124a78a8a0b9e5028197a233bb03db7ef4085e9da708590b8f7ebe9b52058cca936a8cc1b9f3a5e3fd8eb18072bc815c94a8379ac1678a3d5e87636f07259fb3b51dff7fb6310274290c51f39389096f850c3e04d54195d69b6b0565b456dbcbc59c253c370252b767c195afe18575b3e9d51418bd8507ed2680336897f7e59ab6b0e58b8e8202315c452b1586a915850930e586eec56d5ad9dee7e77171bb050ef73fb1dfd3728920f33cf1aa5e1a74270e19bbbad435093c60b2ba027f0b7a8e19c4a49524d1316701249c934a3c80c1fbdf41945116205d2834051301e5a93e7894735744c1294f05257993ef75035e855b459859bda98b1534de8ff5ab9a99aa4b54e3cd7825bf51bf22325fc75050000",
    ],
    [
      "ETag",
      "aH3OEVg+J4d1eP5WfCbKSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:25 GMT",
      "Server",
      "ESF",
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
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00",
      "d0",
      "bb",
      "646d1d4d8a92ee802a1451a422081b26e0a785587e428c309ddebd4e8ff0de0f6245017d9fc986438dded0c8309d16d34dab9bd915c086b4de2bafd6b6ada12f1863efe6236492e0448a70733f14e549e11057d6da99f9cce4173e57fecddd9ff388beea6b37eeca613e90263e3873b2eb74b53a512f253c90c45a6dd4cd8a0d7b1915db9dc5a4161b5625dac4f3f35572b40f63a8cdaaf43bb23e8f300eaa482e461eca054eeb17dccc3885ccbbf611d777cbdce04d2662bfab5c22827377c4ee7d54955186c1d9769c8f6a6dc3e28b51c7461304435b0ae8b3f2c9251aa513f46fcfe4d8c233c0042640a0df3f6cf86cbd1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-73-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14",
      "fc",
      "95",
      "c8",
      "fb4adb5c9adea46aa9da0091da14d214b45aad22db7582218d43ec1421d47fdf6387b2ac90e029b6cfcc993997bca2475eeed004119e3f35ac7ef9f120083a434ce11c5e23195f0ec3abe79cf2834dae17abcbea6978339d02826b96c4fbaa601d299a9a3239d96eba792d9a0ad74274205167e8759c816b8f9db1edf9037f0c3cc98a6cc9cb4760df2b55c949af77d2eee642e405c315975d2af6efefbd83dbab6af1c0a892bdff257ba0227b5f8bfe2c04c58a8b72badd808146b23a657bcc0bb0f08fb923e7ffa7ee72bcefe6003e70ca30a5a22995b60529a828339e37b5c98a26afc8d8fc70409b6019cc138b8aa2d9976989f7ecccda618553f55231eb225eafac30ba58c7ab5912aea37433bf0a56b3ee7cbddcaea28d757715c481a5302998e15a53ebdcdc22b880fe8e49c54ba39ee867adfcd6a0f0f3583401a4256b83e9d01e6067648f494686341b793ec96c46c8880c7dec119b8efbacbf230c03cf881a162e45497cdf76478e978ec7cc4dfb64e8a5c4c36eea0e7c6760f7b1eb131b1dcfd073cd155b705909c9db0ea1bb384c823489b7d17c9604a6840c37855ab4c674011f3d2a2810405fd474d4512e4049b73b8c92209ecd93f0366827bc6439a62f9b279871860bc9008d6b689e62f54aec985eedd92a5800d84cecfa149468f2fb15e99e6b171f5afe4e4f6080daae325fb449e230ba34764e885b5c340672680fa802cbf7501bb83efe01242c699b05dd6c83f8176a9f6296b19a95f4fb6902d804befdd74e8b0f58587d90910aeeb03b546a115ab37687b829f78dedd803d7759001d7ea53acef7aa7aee91c3a23dbb352bd55d42e3e14da8a35f2",
      "1d0441187f64ba75fc0b7a7ed94978040000",
    ],
    [
      "ETag",
      "NsRG7IHwgciv0bPDMGpq7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085ffcb782d11040a34e150b46a1340847232842cdb2914b7ddbabbd520e1bf3b5b118d9ae8a59d997eb37defb57b784cf3183c58a5eba712d5ee6c8de6de1653d4a5309a6e85cc35820368d89ac8f63829c273a15f833210a1bbe9068a73bfdf2742f30d660cbc3d24298a5883f7b0879c65486b5c8a32cb9755e780d91576388ba6e1f886fa4cc6b61fcf87437f300ce0e09c166366d8b2e2ffb1b63838b095ab2926a830e768b5144a6e919bd0dad42c2b04d6b42c15470d155c3d582b59164c4959a349add3ac35dc8b7aafd1ab37db6ebb47a0909c9954e6c4ce67a40f8c344c4ce50bb904970055956438a9aecf344ee3ca882dc371e4b62a7d5f019296a402977f83a477c3e8337c60c708be732c93656e4ed4f5f0ceffed38caf4f3a82b3f0a7e10da505227240a47c12cf24713cb2d8ede073b837aa22405a9d166d8a8b7baed8e5b7f8ff552daa8e93d9e51253ac019fd1db7a9012f6142e3e10d2e08930f7b020000",
    ],
    [
      "ETag",
      "5NfpI/lszEuElI6h8ErccA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:27 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10fd2a962704486dd396fe1895102b908d6825e9d214d44da87113371892b8d84ea50af5bbefec105805637f4e8a149fefdd7bcf774e9ef003cb633cc00b963c16546c3eddf305ae61aa4802bbc34bc6baa3e0e7cdd1572fef77c6eb451e89e1c9092098ae92245ba5b42e7921222a07d3492311bc5811c1791d88eafd4ebdd56b378f5bc7cda36eaf7b0c7592a6cb11cb1fa0fa4ea9951c5856a5dd48384f524a564c36229ebdec5bebb6b512fc9e464a5abb9216a848eb63d1d3944744319e9f4c2760a09054cc6946580a165e2be3c5975dea0623592301f09a459444112f72a56d0145c4f3254b0a6158f1e0091b9b7f2cf0c41ed9e7013af7a66e7010924c1787878848349f0b2a8b54d55008675ab294ce591c9699d503faea7b5790010777445219a29b4bdbb7111a7937b67f1002f410b95e8046ce771b9da2a17b8176891c174d5dd79e04e8e0f4107df3bde9189dcd76307082982e0998b8200a5494761e974b478f5551a900f4dc73e7eda4f1566719174ce9d33a6e60fbc3f3c0b9b6cb068f6842a2cde4115abc24a9a480268264545171c5630a25636fe2048ee70e475061ba36ae10120f7e3dbd16049b15d50695796bad5ec7e857806b921606b12e1778afd5ddc3db6dedef2443df1fce4098084136ef0bbcab60f0262a4d568a2dacd5aaa88db7b75b786a18ae63c98e7f4c6d7f86cb2d9f2ea9a07964283f68b2019bc43fbfaaea8a03162e39c84805b1542c925a2412d4a4039619bb6575abd96f7fee630316ea4deea8d9d27f823c7e37f3ac51187e2a0417beb9d73a043569bcb01c7a027f8a1acea89424d134d31c4e222959a41499c1a3973ea330442c477a10280c66637b6e8611d6d0198921a37a1d649a3c407ac6d57a5f07fbda91f1518ee63f79b8",
      "2ddba2452e3cd7867bf41b5d2ff47d63050000",
    ],
    [
      "ETag",
      "AHii5LTZW3FOn74PvbncrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:27 GMT",
      "Server",
      "ESF",
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
      "49",
      "72",
      "82401400d0bbf45a2d2320747636718200299066d850083f0c8d80cd24a672f75839c27b3f284e12e8baa86f18d4e81dcdf106af9295de2a24caa0fc0255a8662950245f10c2e624cdf6b7e157dbce9444833924d08eedc9c06aaee4eb482784eef678d974fd72d2ce4140cbe193ccaec5c33101e6859e3d0e8309729aa47eb6d5af4fb1cc8baa7c2bc3f110f4549105c733f1c6b95b47f0b62560e230eb23648eb6a357f19cebc29418e355e68f3da4b948386ffadabe176b9a2d71d653ddb5864a6517fba6ab1df65dfb70642127d3c9a4625ddd2ea98316081e6dc1a18b8a175790305ea07f7bd4cf2dbc0208c41c38fafd03a32e65b31a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-75-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "d826401e3c22456b94d21529212b9056d33421630c750b9861d3adaaf2df77314dd7aa522b3e807dcfb9e7dc074fe89ed5195aa09415bf3bda3e7eb9e3293a4554e2026e4f8a2ab0eff76baf312fff3627eec62a1aff6ab90404eb5902574d494782772da162b18fc645cbbb06b79c8f20d1c89e8f4c6b62b8a66b4ce7d6dc059ea065be61f53db06fa56cc442d78fdae382f3a2a4b861624c78f572af3f4cf4a6e5779448a1bf95d44145e81f8b7e2d39c192f17ab98fc04027689bd00ab3122cfc6766e9d9dbd46386ab7101e0074628268477b5ec6d410ac2eb9c155dabb2a2c51352365f7da0c8db78eb5823bcecaa3aa971454fb50c4b9cc8c7866a17e16eabf9c1c52edcae627f1724d1fad2dbaec6ebdd66bf0d22ede6d20b3d4de2b4a48aab2db533750ae000fa191592d54a3deeaf7be5e706f9efc7d213405ad02198d886854dc770d33cb549ee4ce7696ed03475527b8ea7a941dc199d6529c5c053a28a856b5e67d67462cf9c59e2b8a695cc2cd34c5c623889e1cc2981678267193a9ca23f2d93f49c89860b367408dd847eec2571b80fd6abd85325e4b82be5f960ac2fe0b547090502e8839a0e7d947150eadbed07b117aed6b17fed0d13ded00293c7e837cc38c7a5a080c62d344fd276cb3368180a565bef1cc06a62df8f4181163f9f50dff3dec5ab96bfd06318606f57aa378ae2d00fbe293b47c4352e3b0579183e5003966fa136707df8054858d2210bbada7be10f345c8534a72dadc9e7d304b00a7cfaaf1d171fb0b0fa2023249c617788e845484b871d62aadc67b669d89635410adcca7731db768e",
      "5deb73f41969456bf95cd1b0f850e820d68917100461fc81ead6e11f9eca481e78040000",
    ],
    [
      "ETag",
      "+gmN7kUCEp1Hxp+9L6gpIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92dd4ec2401085df65bc2d09081469c205206893f2239418630859da69296ebb75778b41c2bb3b5b118d9ae84d3b33fd667bce690ff094642138b04ee2e702e5fe22467d678a19aa826b45b75c640ac102d42c2672c2eaf1ce1b46eee4d55eacfbf71cb7970f71a743840a369832700e1025c84305cee301329622ad05821769b62a3b0bf43e37c3b93f73c737d4a72234fd78e179dd9e3780a3755e0c9966ab92ffc7daf268c156ac6718a1c42c40a32597628b81768d4dc5d29c6345894206a8a084cb07b11445cea410159a545acd4acdbeacb66bed6abd6937db047211309d888cd8c59cf481169af199782197601320cb920c47e57547e3242c8d98d21dfb76a3d4f715206951c271f537487a378c3ec307768ae03bc7525164fa4c0dbd49f7b7e328d3cfa3aebbfee007a1342575467c773498fbddd1d470cb93f7de5ea39a4a41412a3419d6aa8dab66cbaebec7da17266a7a8fa3658116048cfe8edb44831331aef0f806764431817b020000",
    ],
    [
      "ETag",
      "Oa3gvLFfIOz6UbCWlej2Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:28 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85540b4fdb3010fe2b91272490fa481fe94b42ac2b19cb565296a6a06a9a5adb758221898bed802ad4ffbe8b43818e0da448897ddfe3ee7cce23bae5d90a0d10e1f15dcee4e6d38d20a88298c631ecfe9ca5e3ef3732c65cdabc39bf6ef7b83f7e383e06042f580aa7eb845595c825656a309bd66229f23596425441a8daed541b9da6dd6ff4ed96d371fac0532c89c63cbb05f6b5d66b35a8d777deb55888386178cd558d8af479bf7edfacafa5b86154abfabe651d5c54fd7dd3934450acb9c88e67534820574c2e588a790229bc3057e4f3be748de3b41603f89e5386291579a68bb440828a2ce2712e8d2a1a3c2293e6ab0f3475c7ee28b44693991f1e2e715a9097471656d6622199ca135db1965053c413b6e0ab651959df5a5f83c9394420836bac985a5a57dfdcc0b5acf1e4ca0d0e9f03a0e54f426becfd70ad136be89f5afb729e6fcd7cdf9d86d6e1c99175164c6617d697f91e06ea5831a57966aa0831495851c153a3bdb7c75b10b006f332b8e8da1ddce8d97d12912e8d7a2d87443623a447ba0e6e119bf6dbacbd220c034f17ea86853391f59d3ea651d46b3ab465372362779d68653719a184b41acd3e21b8d5b2db186d2be84172cd4eb95a0bc5cb6ea3abc00bdd4518ccfcd130744d1911868e9e96c91545bcce534391007aa7ae6d11e5029c8aa3f3fcd00d86a3d0bb74cb6919b318d3cdf40ee625c2896280c612a74c33792e56d0347431997aa137f18763609811b8d821141afc7a7c21849bb5e9b2366f340d03cf3f3309ec109738c90de4befc400742e2ec006db795ffeb0c836038076f2c25defc15837a3aed82fe0f0f8337ab32cf9d6703156ebb55136d7f6fe1a920b85ea53afc19dc608ecaad80454cb28c7e3c3f0036810fff12bb2b0b58b8b460a334ac615aa92a4ca864e5d4f2d4a45bb21b76afdd7390014bfd26d66938bbe329340a4596b24c3f55545e59d3a82294ab67100461d87c7352db3faaf1ff6232050000",
    ],
    [
      "ETag",
      "QUmLJjrgair0i2Yh48iNLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d90dd4ac3401085df65bc4db0a9a692422f8c8436108a460ba294b24d273f6d9289bb9b4a287d7767b722bdf46677f6cc37c3397b8243d5ee600adbaaf8ea510e3705ea1753a4a8fa5a2bbe3a6a158203a845c16452067a1f79877219e7617cfb3e1f3e1679319b31a1b2121b01d313e415d63b05d3cf13b4a2411edb6ca4ddc8981e3aa3c4cbb7681ea52c34b433c27295248f6112c1d9b91aeb0eff1a599f1dd8d336c51c25b6191a179da43d663a36019568ba1a5d45bdcc5081856da390d4774212b9acb80f13d79b8c4781178ceefc891f3058532674452db3ab57f6069ab4a853fae67c306640da92a3e6f63cb2ecdb0c470b186bd7bdfbbf9e677aebdf85e1a0513d4b62770a8db1d1c5e41319e39a0369d9a30399e05f5e54faf23eff009cde3cb0c2010000",
    ],
    [
      "ETag",
      "Lh9tjE1khNIfBI/XGyZHfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:28 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b7282300000d0bb64ad0e5a0aa43b02c8277ca422bf4d868941535bc84050d1e9ddebf408ef3d4143291b4722fb0bebc007989b0d5cd115160622a7e3a10ec5e48ca56a888db84c94a664474def3197fefed833952736eeb83e5648787104b3e9d19a318a064741decd77a49259d7ee60cdb5911595a608d7292b9728a8850fcdfcd1e2996e0b1de27b15b838a902b2fe2eee4b8e74cf266987f74e988436b6a0d549fe1975cbdab45ddfcdfb8c97db405777a93f6039ce3b191b695d8644accf457e8a0e2d09a49f7d39e7c1cd5ba5efafd736615c4bbd1b580076177c6023e12feedb3b840bf06f277216ec15805833b001fcfe015e8b2bf51a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-77-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d0224908448d19a25748d94900d48ab6a9a90ed18ea1630c5a65554e5bfef629aae55a5f609dbf79c7bcefde019ddf3728fa688f0eca161f5e1db9d20e80c318533788dd7cbc36e7b63faf7373f227b62295a8dc97c3603046f59121755ce7a5234356572ba8bfa592d9a0ad742f420516f3ceed9a381e5d99e357447ae073cc9f274cdcb7b60df2a55c9a9699eb4fb991059ce70c5659f8ae2f5dd7c1c98552dee1855d27c2f69828a343f17fd9e0b8a1517e56c17818146b23a6105e63958f8cfdc93f3f7a9fb1c17fd0cc08f9c324ca9684ad5da8214549429cf9a5a6745d367a46dbe39a0c85ffb8bd8a0226f8a322971c1ce8c3d563851878a1917e17663ac828b6db899c7ab6d90448b4b7f33ef2fb6ebdd26888ceb4b3ff40d8549ce34d79819e7fa16c005f4f74c2a5e6af5b87d6e955f1ab4fa38969600d29275c1646c8d30ccd2232919d3743274496a31422664ece221b1a8e730674f18069e16d52c5c8ad24bdd9133b2ed043b9e9338138724c4b2260975dca10b79acc978808e67e8a9e68a2db9ac84e45d87d075b88afd240e77c1621efbba841437b95a76c6da02de7a545020803ea9e9d846b900a5b6ddab20f6c3f9225e5df9dd84d72cc3f4103dc08c539c4b06685c43f314ab37620f0d43c17ce32f01ac27f6eb149468fae719b53d6f5dbc69f92b3d8601b67695fea2280e57c14f6de784b8c279a3218fdd015560f9166a03d7c7bf808425edb2a0df3b3fbc41dd53c85256b3927e3d4d00ebc097ffda69f1010bab0f3252c11d7687ca5684d6acdb21aecb7d61db963718e93f55e15a7d883943fbd4b536479b9115ac542f15758b0f8576628d7c054110c61fe86e1dff012eeec70978040000",
    ],
    [
      "ETag",
      "TLDyUOY/EkYBS180tcp7bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb78b4242050a00987a2556a00a1948331842ced148a6db7ee6e2148f8efce5644a3267a6967a6df6cdf7bed019ee32c040b96f1eaa540b1bf58a19ae8c24359244ad22de799443000155b11d95ebaaf595fddf7264bafbe7546c2993e5eeeba5d2264b0c69481758028c62494603d1d206329d25ac09322cd16656780dae77a38f53d7774477dca43dd8f668381dd1b387034ce8b21536c51f2ff589b1f0dd8f0a587110acc02d45a72c137182857db942ccd13ac485e8800259470f96025789133c17985269556ab5233afaa9d5aa75a6f9acd0e81090f988a7946ec6c4afa4071c5128fefc825980488b224c35179ddd2380e4b23ba7447bed928f57d05485a1427b8f81b24bd6b469fe1033b45f09d63292f3275a66e070ff66fc751a69f47ddd8bef383908a923a23be3b74a6be3d1c6b6e7ef2dedb2b9463c12948893ac35ab5d16eb6ccea7bacd75c474defb19428d08080d1dfd18f1558114b241edf00d97d78c57b020000",
    ],
    [
      "ETag",
      "8bIznHtJBQbR3vENrESY+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:29 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "0b",
      "4f",
      "db3010fe2b91272490fa4853fa4825c4ba1246b692b234e5a1696a6dd7092e695c6c87ad43fdefbb3894c7d8408a94d8f73deecee7dca31b9ecd510f119edce64cae3f2c044115c4344e6077f1fbcb8573793467c7bf2eedf3c1e0e474b15824070780e0054be1e52a655525724999ea4dc6b5448a7c85a5105510aa76bad546dbb1dd866b375bed960b3cc5d278c8b31b605f6bbd52bd7a7deb5d4b84485286575cd5a8583eeed7ef9cfa4a8a05a35ad55f5ad6c145d5df363d4c05c59a8bec6032860472c5e4942d314f218527e69c7c7c295de378594b007cc729c3948a3cd3455a20414516f324974615f5ee9149f3d9071a7b436f105983d124887667785990677b1656d6742a99ca535db1665053cc5336e5f3591959dd58c7e1e8142290c135564ccdac8b132ff42c6b38baf0c2ddc7006805a3c81afa5f3debd0ea0747d64b393fb02641e08d236bf770cffa1c8e2667d6a7ab1718a863ce94e699a922c2246545050f8df65f1f6f41c01acccbe0b463b771a36bbb24261d1a779b2d12db8c902ee9b47093d8d4dd67fb73c230f074a16e58381399db72318de3aed3a24ddb8989dd69c573db618412d26c382e21b8d9b4f731da54d04fc9353be26a25142fbb8d2e423ff2a651380906fdc83365c4183a7a54265714f13c4f0d4502e88dba3645940b702a8ece0f222fec0f22ffdc2ba765c8124cd7e35b989718a78a011a4bbc649ac9533187a6a1b3d1d88ffc51d01f02c38cc0d916a150effbfd13215aaf4c97b579a37114fac16793c016718ed3dc40eeca0fb42324ce76d06653f9bf4e3f0cfb57e08da5c4ebbf62504f7bbfa0ffc3c3e0cdaacc73ebd94085db76e5a0cd8f0d3c1504d7ab5447df265e7885caad90c54cb28cbe3f3f00368177ff12db2b0b58b8b460a334ac615aa92a4ca864e5d4f2a549b764371ab6dde9200396fa55cc",
      "69dadbe329340a45b664997ea8a8bcb2a6514528578f2008c2b005e6a4367f009883c0a532050000",
    ],
    [
      "ETag",
      "jzJW2XDdeFxX0VCCHMjjjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "78b44d0ab648493808215ad310ad9098184296765a0b6da7ee6e5124fc77671763387ad99d7df3cde4bd3dc2ae6c3218c1a62c3e3a9487ab02f5b32912545da5155f2d350ac101d4a26032faf2620c96cadfbe86d7913ffc7ed4d3ac188f9950e93bd6024647c84bac3205a3b72334a2461e5bafa5ddc8983eb44689e68bd9fd2c61a1a6cc08f3651cdf4de2199c9c8bb176f7af91d5c9812d6d12cc516293a271d14ada62aa23135089baadd055d4c9141558d8360a495d2b2491cb8a7b3b747b83be17f642ef261804218315a54297d430bb7c616fa0498b2aa14fce077d06a42d396a6ecf3dcb81cdb0b780b176d9f3ff7a3dd35bfd2e9c1c34aa2749ec4ea131e69d4d4ec918d71c48cb0e1d4805fff243a9cfefd30f19900b32c2010000",
    ],
    [
      "ETag",
      "Ix0Le5Us4jX9+I48zJtCdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:30 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0dd9642400000e07799eb74ec48b17751243f4972ac1b67306311263389f6ecbb6f671fe1fb7e00ca73cc58cafb0677e013cc08aacb7c6953454bcbdc5d6fa2a414c448971b8c088a4465ec438f0f7acfced9f561947523174e4536fb9541e6262e039dba93c4327a684d42ac677014d6fc78dd2999205ce45df7a02cbc98f2a5f72756728326cc0ad8f9db2271ec7121697d0625779ec75b68d043534cd9bd96beeef7ec0acd828f6e5da01724f628aad0db6e538f0e45e2a3b11a9c06ca5a154c9d1ac7a79b6f5463f05a097efdf00dbc85ecc376f6f389b46001f044ab01b3b47a7325595517e0df9ef299e2778086d18007f0fb0716be09c01a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-79-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fa34014fd2b64f6ab2d60ed8326cddab4b892b4d405aad96c3664182e384a196406d7c6f4bfef65b0aec6443f3133f79c7bce7df04cee799992294978fed040bdff762712724240d11c5fd3a7bc5c2fcd7de5b2e180dfdc7b97e2e96a3e9b2182b72c497755013d299a9a819c6ec37e5e8ba6a2b5103d4cd41b3b3d7b746a39b6630d86a3a1833c0945b6e2e53db26f95aae4d4348fdafd5c88bc005a71d96762f7fa6e3e9e9a552dee802969be973451459a9f8b7e2f04a38a8b72b60dd14023a18e6147798116fe33d3e4fc7dea3ea7bb7e8ee047ce8032269a52b5b630051365c6f3a6d659c9f499689b6f0e247457ee223298289a5d1997740727464a158dd5be02e322d8ac0dcfbfd804eb79e46dfc385c5cbaeb797fb1596dd77e68dc5cba816b289a14a0b9c6cc38d7371f2fa89f8254bcd4ea51fbdc2abf34c8fb38969680d212ba603cb646d49e584e922563964d06c324b3204926c978480789c59c33384b13a0c8d3a29a454b510e1cb0e8c462f184594e7c969e2631c247719a596c623b0ef6da228713f2b7e60a965c5642f2ae43e426f022378e82adbf9847ae2e21a34da1969db1b680b71e151688a04f6a3ab4512e50a96db7e7476e305f44deb5db4d78053965fbf001679cd14202a2698dcd5350af458a0d23fe7ced2e11ac2776750c4a32fdfd4cda9eb72edeb4fc951ee1005bbb4a7f4918059eff43db3922ae69d168c8637720155abec5dad0f5e10f227149bb2ce4e7d60d7e91ee29800c6a28d9d7d344b00e7cf9af1d171fb1b8fa282315de7177986c45580ddd0e715dee0bdbb6adf1784834b8561f62cec43e76adcdd166841d94eaa5a26ef1b1d04eac91af200ce2f87dddadc33f2343a6f278040000",
    ],
    [
      "ETag",
      "dxgnMD/ypEc53iWkIHoxPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92dd4ec2401085df65bc6d23201469c245415412fe298989216469a7a5b8ed96ddad4a08efee6c45346aa237edccf49bed39a73dc0539285e0c23a897705cafd458c7a6a8a19aa826b45b75c640ac102d42c269277bde92eafbea8796d1bbca697c3f8613cf4da6d2254b0c194817b8028411e2a701f0f90b114692d10bc48b355d959a0f7b919cefd597f74477d2a42d38f168381d719f4e0689d1743a6d9aae4ffb1b63c5ab015eb194628310bd068c9a5d862a0fbc6a66269ced156a290012a28e1f2412c45913329844d13bbd9b2ab4eadd2aab62a570da7d122908b80e94464c42ee6a40fb4d08ccfc40bb9048700599664382aafcf344ec2d28829fb23dfa997fabe02242d4a38aefe0649ef86d167f8c04e117ce7582a8a4c9fa9dbc1d8fbed38caf4f3a81bcfeffd2094a6a4ce88df1ff6e6be379c186e79f2ded96b54132928488526c36aa57edd683a95f758bbc2444def71b52cd08280d1df719f687023c6151edf00a33f84747b020000",
    ],
    [
      "ETag",
      "lCAQqp1wsS2jcxm/MgXOMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:31 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ef",
      "4f",
      "db",
      "30",
      "10",
      "fd572cef0b48a5bf800a3a215620b0b0924092823a845a935c82471207db4162a8fffbce4e192bdbd8e749951afbde7bf7eecef74cef7999d021bde5d9430df2e9c337714b5b1434cbf096f52bfff4feb8bbb5351da45f63f8ce4aef34dbdb4304372cc58a2a870d256a19831a4ec27626455d3129c4060a6dec74377a837e77b7b7dbdddc1e6cef224f419e8e79798fec3bad2b35ec745e72b73321b21c58c5553b16c5cffbce63bf5349f10d62ad3aab293b984575de4fba9f8b98692ecabd4988066a05720605e3395a786526b79f56a5db9c15ed0cc18f3c0616c7a22eb5b18512b128539ed5d2aad2e133b5367ff9a0a133760e2372e84fbc686dce0a439eaf13a6c86c2641d5b96e9139d694f21c663c993791ea9e1c07fe1946d0c11d53a0e6e4eab31338848cfd2b27589b274c03ea787e44c6ee1787ec9391774456a55c8f4c3ccf0923b2b6bf4e4e027f724e0ea62b18ac218194a18d23a6318f36de93e6d33583d5a03482965d777f9f355d982817926b53afeb454e303a8cdc4ba769f11832163f850fd8e494e50a10cd242b40833c130920e5dc0fddc8f5bdd11819b66fe72f084587d7cfaf84e8a9026350db7f7a348a1cba58b4fe8e1805c1688aaa4c4af6f426864e075b86fecabe64796d21166f4f8d83c726407bd4647b39f5e9e26681bf16c5d7d6a8d38b89134c697315400a12cad84abed3410bb6817f2ecdcb0b462cbe614ca3349e95e6b132496209361cf1c2da6dd8bd5e6f777b875ab0d46f63fd6e7fd32c7a99fc31b2cc515b7d9052c8c03e5b73c46cca7ae125f6842717f6d1afb87c585e15a014cb8cbc2748c1747cc7cb8c289e95a82d81a44292b42e63436bdeb8bd6232ab0b2835314353436246de26615d55426a48",
      "5e0530d66c461805ae77b2fe71793c98464e88fba6c9756fb8d3bf31f5d82a9ac1fe9715dc3423b12be07b66057e00d1481748be050000",
    ],
    [
      "ETag",
      "a2pOJkF044Y6fZcezanNJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:32 GMT",
      "Server",
      "ESF",
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
      "d0c97282300000d07fc9591c45a0d21bc81251114116b964520c9bc892a0084effbd4e3fe1bd37c0494218437d732335f80623e6e57932dfb56b156549d458947b5e68d0225c2a8df61ae23c322bef88c7d27220ea2243ba0961f0f5c3ab24ef65c3e57505fb1b232ce36a8beac62d7209a607d2f0e335de3bfa5211179281ce9ea6591072c27d5a1eed2eb3157ed02bf3f42c26bfb26c7ab1760bf37c0d93f4eebc865dabf7357b1ea1e7730a3232a13b6cc36cdaf8d0661d8df7a3f2801de70a227b9cf4209792475a3bacb47479d548d2e8ade51c472e99b69a0a6680bcda8212868a0f7725caf20cfcdb513fb6e413a0124c0905bf7f8e8958e61a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-81-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fa34014fd2b64f6ab7d97429b346b5351c9b67417a8c66c3664182e380a0c3283c698fef7bd0cd6d598b89f98997bce3de73e7821f7bc4cc882c43c7b68a07efe762762724240d10c5fcbb4500f617e39bbc86ee885fde4263fb2ec69b944046f599216550e3d299a9a815cec837e568ba6a2b5103d4cd4b347bdd16c3c9c8fe6c3893933e7c89390a71b5ede23fb56a94a2e0683a3763f1322cb81565cf69928dede078fe341558b3b604a0e3e4a0e50450ebe16fd9e0b461517e5721fa08146421d4141798e16fe3193f8f463ea3ea7453f43f023674019134da95a5b98828932e55953ebac64f142b4cd770712381b671d1a4ce44d5146252de0c448a8a2917aaec038f7775bc3f5ce77fe7615ba3b2f0ad697ce76d55fef36fbad1718d7978eef188ac63968aeb1344ef5cdc30bea2720152fb57ad83eb7caaf0d723f8fa525a0b4842e1859c3191dd9c3799cc6164bed8919a74388633bb64c3a89876c3e85691203459e16d52c5a8ad2b6633381741a4dad491c4d676047b1655951321b836526cc4c128b1c4ec853cd159c715909c9bb0e916bdf0d9d28f4f7de7a153aba849436b93aeb8cb505bcf7a8b040047d51d3a18d72814a6dbb5d2f74fcd53a74af9c6ec21bc8287b0e1e70c629cd25209ad6d83c05f55624d830e2adb6ce1982f5c47e1e83922c7ebf90b6e7ad8b772d7fa38738c0d6aed25f1284beeb5d683b47c415cd1b0d79ec0ea442cbb7581bba3efc41242e699785fcda3bfe0de99e7c48a18692fd7f9a08d681fffe6bc7c5472cae3eca488577dc1d265b115643b7435c97fbca1e8dc6d3b14934b8569f62a6353c76adcdd16684024af55a51b7f8586827d6c837100671fc9eeed6e12f767b7f2878040000",
    ],
    [
      "ETag",
      "nfmtqTlH6GgYaG8wIdKggw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "df65bcb42445a042132e405149f851280989216469a7a5d876eaee5621847777b6221a35d19b7666facdf69cd3eee129ce0270611547cf05cadd5984fac114135445a215df72ca148205a845c4a43ddfd2bcd7c49df066e7d3f1d6e9b66a5ed46e33a1fc35a602dc3d8431268102f7710f994891d77c4a8a345b969d057a979be1d49bf447b7dca714987e341b0c3add410f0ed66931105a2c4bfe1f6b8b83051b5a4d304489998f464b2e6983beee1b9b4aa47982154585f4514109970f2249452e245185279566b552752eec56b565d71a4ea3c56042bed03165cccea6ac0f3469914ce8955d82c3802c4b361c96d7171ec74169c494fd91e7d44b7d5f019616c6092eff0659ef5af067f8c08e117ce7444a45a64fd4cd60dcf9ed38cef4f3a8eb8ed7fb4128cd499d10af3fec4dbdcef0de708ba3f7ee4ea3ba97c4412a341956ed7ab371e9d8efb15e91899adfe36a59a005bee0bfe32ed6e08622517878039ad452a37b020000",
    ],
    [
      "ETag",
      "0XxoXE8eyaTU+SOx6B93Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:33 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffd5535d6fda3014fd2b96f7d24a4080ae8832551d6db32e2b2434096d5155819b98e0358983ed744215ff7dd74e2963ddbae74948c4bee79c7bee879ff123cb63dcc30f2c599654ac3e7ce70fb886a92209dcde46c9cdb279abbe258b8b2e257e9bfa97d68fe3634030cd92242b525a97bc141195bd71d048042f0b2238af8350bddbaeb73aede651eba87970d8393c029ea4e97cc0f247602f942a64cfb236b91b09e7494a49c16423e2d9ebbdf5d4b60ac1bfd348496b37a50559a4f57ed293944744319e1f8f0330504a2aa634232c050b5b66fcf07957bac148d64800fcc4224aa28897b9d2b64022e2f99c25a530aab8f78c8dcd5f3e70600fecb3109d796337dc9b914c9367fb8848349d0a2acb54d5d00c6a9ab3944e593cab22c523fae27b43888083059154ced0cd57dbb7111a7837b6bf37930a3c8290eb8568e05cdae804f5dd73b4abe5b868ecba7610a2bd937d74e17be3113a9dec60a08898ce09f838270a12296d3eae3e1d3d5945a502d04bdb9db7c3c66b1d655c30a50b76dcd0f6fb67a1736d573d1ed08444ab60095d9e93545240134132aaa818f2980265e4054ee8786e7f000cd3b8d1062171efee794b085705d50695f9c7a13384e2fac3115eaf6b7f87f57dbf3f0169220459fd1603bb9d8f9abe655f93b434108337a7cac65315c02dacb36d4e6dbcbe5fc3af8661e72a757c35b6fd09aeae7c3aa782e691917ca78d066c02ff7c3a9b3d062c6c32a4816d504c2a16499d2412d484439619bb15bbd53a38e836b1010bf52676d8eee8e79ec77f8cbce4288d3e15820bdf2caf3e423669bcb01c7ac2e22bb3fa3b2e972f57199592245adee528232a5ab03c41922539680b8ae65ca07999479a566dbab9222229339a2ba487267be875ee0d149445c185a2f1560500d5230942df712ff63fbd1c4f27a11dc0d353e8aed5ebb6ef7551a6946abaff6f19f7d570b49f73cfb5619b7f02debd59e1ce050000",
    ],
    [
      "ETag",
      "XcgWq0XtJghG8eaR2eRK/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:33 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd0516e82300000d0bbf4db194a07c2feaca04114956da2fe34c05aa836e05aa49465779fd911defb01795952a548d7de6803de80c96d7f5a4ee3bb8749c54ef0f4cd5f44cddd8788f7c7b09f4914acb14ada43e3699765c78fa275020513a3fa34ba9ce9d6ae2a4b714fcc460d35f11b571465efe66819b683144b12193c0b2d23f7cb9a429f5c11a9a159859d6273cd7aa85d4434b59dd53cca122e518950a2f390acf7f9d53838b0db0d8e6f51fa100bafc4c17b6dc68c6fe0ae58ef7a61155f9fc978e843ed559e7b3912e66ce3077b15115f642c3dd70398003adcb9a48af0271739be3f01ff76d2993b7d06609a4b2ac1ef1f906c381f1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-83-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fbda8410f28048d11aa5748d94900d48ab6d9a90712ed42d608a4da6aaca7fdfc5345dbb49ed276cdf73ee39f7c113b9e7e59ecc48c2b38706eac74f772221670414cdf015ee8af0c7831b9957f75365995b7b6a2e77d97c8e08deb2242daa1c7a5234350339db85fdac164d456b217a98a8e7d83d6b321cb8963bb0c793b18b3c0979bae6e53db26f95aae4cc344fdafd4c882c075a71d967a27879370f43b3aac51d3025cdb79226aa48f37dd1cfb960547151ce77211a6824d4311494e768e12f739f9cbf4ddde7b4e867083e70069431d194aab585299828539e35b5ce4a664f44db7c7520a1b7f69691c144de14655cd202ce8c3d5534568f151897c17663acfccb6db05944abad1f87cb2b6fb3e82fb7ebddc60f8d9b2b2ff00c45931c34d7981be7fae6e305f5f720152fb57ad43eb7cacf0d5afd3f969680d212ba603c1d4ca8e50cdc244da62c75ec71920e20499c643aa6763260ee0846fb0428f2b4a866d1529483896b51eab278e84c927864b94eec32b0e2fdc876c76c32b56c3624c733f2bbe60a2eb8ac84e45d87c84db08abc380a76fe721179ba849436b9bae88cb505bcf6a8b04004bd53d3b18d72814a6dbb577ee4058b65b4baf6ba09af21a3ec317cc019a7349780685a63f314d41bb1c786117fb1f12e10ac27f6f5149464f6f389b43d6f5dbc6af90b3dc201b67695fe92300a56fe176de784b8a679a32187ee402ab47c8bb5a1ebe32f44e2927659c8b79d177c27dd530029d450b28fa789601df8f05f3b2d3e6271f551462abce3ee30d98ab01aba1de2badc67b665d98e6b130daed5bfb191654d4f5d6b73b419a180",
      "523d57d42d3e16da8935f20584411cbfafbb75fc0315ae713d78040000",
    ],
    [
      "ETag",
      "ejmSZq9T/Hk7t1/O37/CUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92416f82401085ffcbf48a8956a14ae2412d5613b516f1d418b3c280d885c5dda5c618ff7b67a9b54ddba4bdc0ccf0cdf2de8313bca479042e6cd2645fa23cde24a89f4ce1a32ab956742b44ae102c40cd12220f23bedfd91e2be6ed623498b6679e3dd449b74b840ab79831704f10a7c82305eef309729621ad85829759beae3a0bf4b130c345e08f670fd4672232fd6c3999f4fa130fced67531629aad2bfe1f6babb3053bb1f13146897988464b21c50e433d363615cb0a8e35254a19a2820aae1e245294059342d468526b376b0de7b6de6974ea4ddbb13b047211329d8a9cd8e582f481169a715f1cc8253804c8aa24c371757da5711a55464c399e054eabd2f715206971ca71fd37487ab78c3ec3077689e03bc73251e6fa4a0d278fbddf8ea34c3f8fbaef05de0f42694aea8a04e3a9b7087ad3b9e15617effda346359782825468326cd45b6dfbcea9bfc73a10266a7a8fab658916848cfe8e51aac18d1957787e037c868e6b7b020000",
    ],
    [
      "ETag",
      "wHlqj5EapP8pHCM8NE5Ftg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:34 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5547f4fdb3010fd2a96270448fd41a12db4126285069651922e4d61d5841a3771834b1207db41aa50bffbce0e053a18fb7352a4f87cefde7bbe73f284ef5916e12e9eb1f8a1a062f965c167b882a92231ec5ecc6fdaad9fa219f7cf2fafefbea7fe82f8a4777c0c08a6ab2449f38456252f444865773caac5821739119c5781a87ad4ac36dafb7b9d4667efa0d56e75a04ed2643e60d93d54df2995cb6ebdbed6aec59cc709253993b590a72ffbf5c7fd7a2ef882864ad63725eba022eb9f8b9e243c248af1ec783c020385a4624a53c212b0f05a19cdbe6e52d718496b31801f59484918f22253da1650843c9bb3b8108615779fb0b1f9668147d6c03af3d1993b76fc9d80a4ba38d84544a2e954505924aa820238d39c2574caa2a0cce4f7e8dc73af20030eee88a4324037df2ccf4268e0de58de1b26c7f5d1c0beb4d009ea397db449663b68ec38d6c8473b27bbe8c273c743743ad9c0c029223a2760a44f142829ed3e2a97b61eada25201e8b9eff6fb69e395ce322e98d227b61ddff27a67be7d6d954d1ed09884cbd103b4794e1249014d0449a9a2e28a47144a86eec8f66dd7e90da0c2746eb84648dcfdf5f45ae02f73aa0d2af3c6e703b7e7b79bc6c11a724d92c2601ecb05de6ad45acd2dbc5a55fe4ed4f3bcde04c4891064f9470e0ea4253ed43078139546d79a0dacd5d6d13e5eddaee0a960b896253bfe31b6bc092eb73c3aa78266a1a1fca4d1066c12fffcbad6571db070d941462a88a562a1d422a1a026edb3d4d82dab1b8d66e7f0001bb050ef734787fa8f90451f669e350ac34f85e0c233f75b87a0268d1796414fe08f51c1299592c49a669cc1492425b38422337cf4d26714048865480f0205fe64684d9f271e54d0298950c40b5d65fadc45e5a0d7d176196e6b63c64e39a1ff6be5b66c92d6eabb8e05b7ea37d61bc99379050000",
    ],
    [
      "ETag",
      "GfW65Xr4gDFKVhJmTjaTaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:35 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb642d0e847f77a0d508a9681444370c92103ee5d3805aecf4ee757a84f77e409a656c1892b1ab590bdec094427b9ecdfdde72134e631736ded443281ebda9495c3fc5ad725c754a1c87a7d1fa8216628e4c60686c8984225eebc362e7538ed0c650a8e0f7e7c7936a4faa1ef465c70f9d06b54d14e065469c7385c7ded9e25afab4ccc318387bcc726cc917bcbbda48457223b807334fb9b60ba27a2d399222a7e56eb33693ad99eee3cb714252be96172b5d6ae81d3b8511e0c032caf7a80c12d6dcec9b5f909cc34a84553406e7db25146006d8775f0a3624e58babeab63d03fff6649c7af60a70592a9800bf7f7192e2cf1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-85-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "5d6f9b3014fd2bc87b5c939010128814ad5942d74809690969554d13b28da16e00536c325555fefb2ea6e95a556a9fb07dcfb9e7dc0f9ed19e17319a20c2d3c79a554fdf1e04416788299cc2eb901cdc3df9b9fffe30e3578fa3eb6a71e9dea5d3292078c392382f33d691a2ae289393ddb69b56a22e7125440712751cbbd31f0d4cb7ef9a963db25de04996252b5eec817daf542927bdde49bb9b0a91660c975c76a9c85fdf7b8741afacc403a34af6de4bf64045f63e17fd91098a1517c574b70503b56455c472cc33b0f09f1993f3f7a9bb1ce7dd14c0074e19a654d4856a6c410a2a8a84a775a5b3a2c933d236df1cd0d65b79f3d0a022abf3222a70cece8c182b1ca9a7921917c1666d2cfd8b4db09e85cb8d1f6de797de7ad69d6f56bbb5bf356e2fbdc033142619d35c636a9ceb9b0f17d08f9954bcd0ea61f3dc28bf3468f9712c0d01a4256b83d1d81ce1be63ba2421639a38964d129311e290b18d2d625277c886316118785a54b370210a2b2634b62c3722f1c88a8603c78cdc7ee244e678e462920cdcd8b5d1f10cfdadb8620b2e4b2179db21741b2c432f0a839d3f9f859e2e21c175a616adb1a680b71e151408a04f6a3a36512e40a969f7d20fbd60360f97375e3be1154b317dda3ec28c139c4906685c41f314abd6228686217fb6f61600d613bb3a05259afc7e464dcf1b176f5afe4a0f61808d5da5bf681b064bff97b67342dce0acd690437b402558be87dac0f5f10f206149db2ce87ae70577a87d0a58c22a56d0afa709601df8f25f3b2d3e6061f541462ab8c3ee50d988d08ab53bc475b92fec7edf1e8c1da4c195fa101b3af6a96b4d8e2623cb59a15e2a6a171f0a6dc56af90a82208cdfd7dd3afe03b852c3df78040000",
    ],
    [
      "ETag",
      "4bv9kbBk+jAiPq6QrDH9Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ffcb782db1285468c2a1202a11b040890743c8d24e4b71dbadbb5b9510febbb315d1a8895eda99e937dbf75ebb83c7348fc085559a3c9528b72709ea8929a6a84aae15dd0a912b040b50b384c8c6e9ebd8e789cd1bdd046ffddebda3fd70d2e910a1c235660cdc1dc429f24881fbb0839c65486ba1e065962fabce02bd2dcc70164c07e36bea3311997e3c1f0ebdeeb00f7bebb81831cd9615ff8fb5c5de828d584d3146897988464b21c506433d303615cb0a8e35254a19a2820aae1e245294059342d468526b356b75e7cc6ed7dbf679d369b609e422643a1539b1f319e9032d34e353f1422ec121405625198eabeb338dd3a83262cac138701a95beaf00498b538ecbbf41d2bb66f4193eb04304df39968932d747ea6a78e7fd761c65fa79d4a517f47f104a53524724188cfab3c01bf9865b1cbc77b71a952f0505a9d06458b71bade68563bfc7da13266a7a8fab658916848cfe8e9b54831b33ae70ff06c8e8e5ad7b020000",
    ],
    [
      "ETag",
      "4/xNPlg0l4BgeKPCW6tPcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:36 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10",
      "fd",
      "57",
      "90",
      "f74babe503f24142a4a8cb12b632a5a423a455344d898123750b9862d32eabf2bfef80a66dd4ae9590c0bef7eebd3b9f7920372c09c880786c739b43b6fd74cd3d522320e906772797be6cdd4cf23fe6e8f38f531bfe76cdd9f27e3844042b5882c6690475c1f3cc073158cc1b9b8ce729cd38af63a27a5faf6b7a4b3534436d77f5ae813c01513865c90db2afa44cc5a0d9dc6b37369c6f22a029130d9fc74ffbcdbb5633cdf835f852340f259ba8229aef8b9e44dca792f164b898a3815c40b68298b2082d3c3303efcb61ea06a3716383e03be603f57d9e27b2b085297c9e846c93676556327820a5cd171f646e4ecdb1ab8c670bdb3d5ad3b820af8f152a94d52a039147b2a6acb1a69045b062c1ba8aa437ca37677686117470450588b572796a3aa6a2ac0bd050395146f64439a45ab6b2b06d73ee2a4727c7ca7767b63857be2e0f30e839002159523a76a91741e1f6b1a9d6eba32c0854a2832ab8eaa93ad5faaae1855ecf0ffbedae17aae0797dafd7a56d4ff58d0e74020f28f26491bd64d184273a50aa7b6d0d5a5aaf438da06574bc00ba86a6f9d06b03edd33050d50e905d8ddc674cc28489940b5675965c3a966bae5c67618f47ae59961152ecdea4325714f1d2a7c42211f44e5dbb22ca382a15c764d9aee98cc6ae7561569331850df5b7f35b9c8d904602104d331a8384ec8c07d834723e9b5bae35b347536494c77dbe470832f8f5f04c70b769d96559be0b2dbd53eaef011734ca4bc45df541b42ed9ed6aff4f31729cd112656996d1eddbe9dfcc5fe2cb5565f1498f146afb558bec7eeff0a911bc455576f273613a4b526d3910420689fff1e8",
      "20b80c7cf833d8df4cc4e2dd441921718d83ea8b42c4cfa01a581697762bb6a6e9384ba40467f255ac6da8fb93297214192186443e5654ddccb2514528174f200ce29cd996fd1da3ff004ba424d719050000",
    ],
    [
      "ETag",
      "DWct2kDuxEA+JHNez5EOYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82",
      "40",
      "10",
      "85ffcbf40a89d8488a89876ab09a125a69bdd818b3c2802830dbdda5c618fe7b67d1438fbdb0b38fefedbeb75738954d0663d897c5778beaf250a059d92141dd5646f322a9d1080ea0110593c3f92690d16696e5af87d562eec743f526ce9309133a3d602d607c85bcc42ad330feba42236a64db6ea7fa13193317699565fc19be84090b35655688d751f43c8d42e89c3f3679fa9765db3970a47d82392a6c52b429a4a223a666690b6a51cb0a5d4dad4a51430ff73f0a45ad148ac865c57df25dcf1f0e022f183c8efc51c06045a9302535ccae3f381b1832a24ae8ccfdc06340f52357cdfbef4f2fdb0ef769db6defa6e9c5a07e57c40934dacb07b72033b2e10c8736aa450752c12fb928cd6ddffd023bbb3ad6a6010000",
    ],
    [
      "ETag",
      "2FZ9pLZCdfKhQHF6N2rOaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:36 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b5283300000d0bb645d3ab4e113dcf1295fd152a8a09b0cd0486305d22452d0f1ee763cc27b3fa06e5b220496e3850ce0012cf5d65ab7eb842107772d2c3bfc14779df4182bd426120a8c90eef58c28093678bf77dcabae1e6fee8dc9d40b0c82bf0fa7f6ec620cb7143679bc49d5bd1dd53b191fb8ab8920a372b4ed49098bcadebe9cd1809691aa4229a6b2ec8d86f2c427d672f94aa1153996ffa1849ffa4e4be639eb1a2d22c7009a65fee67565acbb6335ea13b48534054a4dafd9d4c5a3bb5c39d2880f93749cb2e519c2d73c1c2a49e7294027f51dac009919e544607ae742ddb256e0df8ee5c2c83dc02135271cfcfe01101543581a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-87-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b6f9b3014fd2bc8fbb8e6415e8448d11aa5748dd4908d9056db3421db5ca83bc0149b565995ffbe8b69ba7693da4fd8bee7dc73ee8347f24b1431991126d2bb1aaafd875bc9c809014d537cfd7df131dff3d2f14ae6c4cef7a10f37bbd1c37c8e08d1b014cdcb0c3a4ad6150735db6dbb6925eb92565276305167ea74ecc9a0efda6e7f389e8c5de429c8924b51fc42f68dd6a59af57a47ed6e2a659a012d85ea72993fbff7ee07bdb292b7c0b5eabd96eca18aeabd2dfa29939c6a218bf96e8b066a0555043915195af8cb8cd9e9ebd45d41f36e8ae07bc181722eeb4237b63005974522d2ba3259c9ec91189b2f0e64eb5d7acbd0e232abf3222a680e27564c358df4be04eb3cd8acad957fbe09d68b70b5f1a3edf2c25b2fbacbcde56eed6fadeb0b2ff02c4d5906866bcdad5373f3f182fa31282d0aa31e36cf8df2538356ff8fa521a0b482361839fd09b5a77d9725cce1c9743866491f189b32674c87accfdd118c6206147946d4b068218b41c238b8d48eec78d88f46a30144cc9df2c886643286219d3a8311399c90874a683813aa944ab41d22d7c12af4a230d8f9cb45e89912125a67faac35d614f0d2a3c60211f4464d87262a242a35ed5ef9a1172c96e1eaca6b277c0929e5fbed1dce38a1990244d30a9ba7a15acb181b46fcc5da3b43b099d897635091d98f47d2f4bc71f1a2e5cff41007d8d8d5e64bb661b0f23f1b3b47c415cd6a03b96f0fa444cb37581bba3efc44242e699b857cdd79c137d23e05904005057f7f9a08368177ffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca7d62dbf6c4c5391a70a5ff8d39f6607aec5a93a3c9083914faa9a276f1b1d056ac56cf200ce2f87dd3adc31f22d51fb478040000",
    ],
    [
      "ETag",
      "zH+mycp7Epb7d7Z3NehU4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92d14ec2401045ff657c2d09281468c24311541410a1441343c8d24e4b71dbadbb5b1009ffee6c45346aa22fedccf4ccf6dedbeee0294e0370601147cf39caed4984face14635439d78a6e9948158205a85944e4fdeba013bdd8c3d5f2e67ae3f2ea649d3d2c37ad1611ca5f62c2c0d94118230f14388f3b485982b4e60b9e27e9bce82cd0dbcc0c27deb837bca43e1181e987d37edf6df7bbb0b78e8b01d36c5ef0ff589bed2d5889c518439498fa68b46452acd0d73d6353b124e3585222973e2a28e0e24124459e3129448926a546bd54b14fcbcd4ab37c56b36b4d02b9f0998e454aec7442fa400bcdf8586cc825d804c8a224c361715dd3380e0a23a6ec0d3dbb5ae8fb0a90b430e638ff1b24bd4b469fe1033b44f09d6389c8537da42efab7ee6fc751a69f47755caffb83509a923a225e6fd09d78ee6064b8d9c17b7bab518da4a020159a0c2be56aa356b7cbefb19e0b1335bdc7d132470b7c467fc755acc1091957b87f03e0dcf7607b020000",
    ],
    [
      "ETag",
      "WzMDgx6NjhKJwAl4SvpXhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:37 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10fd2bc8fbd24a694280242452d4b1946d4829c980b48aa62931c450b70453db748aaafcf71da6699b756b2524b0efbd7befce671ed11d2d366884629add5784ef3eddb218b510913883dd2b9bcdddde7d141a8e6fa76584bd25df38e3312068cd12785be6e44cb08a27448c16613be3ac2a3167ec0c129dd9f659b76fe8c3ee50377bfdde107882e4e9941677c0be91b214a34ee7a0ddce18cb72824b2ada09db3eef771e8c4ec9d92d49a4e81c4b76404574de173dcf59822565c5781182814a10be225b4c73b0f0c2dcc49f8f53b729deb633003fd084e0246155216b5b902261454ab38aabac68f48894cd571f2874a7ee24d226b3851f9dacf1b626af4f352cb4d58a1351e5b2a5ada1a694e6644537eb2652de695f83d92544c0c10d1644acb5ebef6ee06a2f5b6b6dac9d6b8e7fa11d27f07c6de1fb6e186927e7a7dab760b6986b5f96471870be2142d242f98e709c93daf3536bbdb7075a13b004d126b81ae87ddcb5f5619cc68324b5cd5e9cea248eed78d0c366ac27438b589b9860e0c93abb62e18215ba61eac41cc0d3332c2bb10c3c1802cfb453d3d6ed74a8db0619d8dd3edab7d06f4e25b9a0a2648236fd45d78117b9ab2858f8132772551929861e5e34e6ea225efb94502480dea96b5f472903a5fab03c3f7203671279576e331f5392e16417dec384a4381704d098e32d91845fb20d340dcd67a1177933df9902431dfafc801068f4f3f18510ed4ad565a9de288c02cfffa60c1c105738af14e4a1f9404e095ed17edffa7f1a27089c254863cef1eeaf1894d3b76afa3f24145ead1a9b07c92eaad50e2b03ed7fede16921b84f4d76f463e1064bd46c0524259c14c9c7e3036015f8f0b770b8a380855b0a3242c21a863511b548c24933b474abec36ec6e3d8c16",
      "52602edfc4ccae75389d3a479d916c49219f2a6aeea86a541daac4330882306bbe3aa8fd1ffdcd2a2123050000",
    ],
    [
      "ETag",
      "V8oPE5qTS2AN8fpTaIYrdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d504d4fc24010fd2fe3b54d2804429b70106db40941ad7232842cedb4967e4cd9dd824dc37f77763186a397ddd9f731796f07288b268500f6457eec50f67739ea3733c4a8ba4a2bbe5a6a148203a845cecacdf74b2f64f45856a23c46b94fd4f7de79b160854abeb016100c901558a50a82cf011a5123db763b6937b24cf7ad41a2f547f814c60cd4941a60bd59adee97ab102ece8dad2dff65d95e1c38d03ec60c2536099a14ada403263a320595a8db0a5d459d4c5081155b2297d4b54212b98cb8f3b9ebcdc623dff34793e96ceab3b0a244e8821ad3fd9db381262daa98cedc0fc62c9076e4aa993d4f0c4f6c8793159868b7dcf88ff30cb7fd5db8ec35aa57499c4ea10936ba867c20135c73212d3b742011fccbcf85bebe2f3f915c5b52c2010000",
    ],
    [
      "ETag",
      "UxOyarIDklakqIg9ooyy1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:38 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0db9243300000d07fc973dba1c5ac7da3ab4331a158cb8b090d154ac4654867ff7d3bfb09e7bc002a0a3c8ed9d437b8039f604347f5501c6cfaa16755b128ada8f1fd3e8c6a06b5648130d74bc9e4ebd0a3f5792a8d9f7cf12451d9e230a5516ef033bd92509e137b995d635e51eab5c473f25abf34a595b5e965f21d91dd2541bcf2a7ac0f9b15c5c7874b3cb74fcda4cbf598b301267eac36b3da4dd903f9a51dd09bc94552dd5a389f5949e004cb9ea89a2f2a491aacdf5f896722c1ecb6c145e41e58754f7db3b3dc76193b81b8411a2ab46aa88379007600afb46678ccea37f724abea0efcdbb369a3f81da063c43003bf7f477a57ba1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-89-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4f",
      "a3",
      "40",
      "14",
      "fd2b64f6ab6dc1bea049b33615b59b96ae946acc664386e182a3944166e8c698fef7bd33585763e27e82997bce3de73ee0853cf232251392f0fca981faf9db8348c809014573bc0d076b180e2fefe4238cf63fd6b7fb7b8f5e5d4fa788e09a25e9ae2aa0234553339093eda69bd7a2a9682d440713755cafe38c4e6dcff1ecfe7034f49027a1c896bc7c44f6bd52959cf47a47ed6e2e445e00adb8ec32b17bbbefed4f7b552d1e8029d9fb28d94315d9fb5af47b2118555c94d3ed060d3412ea1876941768e11f334dce3ea6ee72baebe608de73069431d1944adbc2144c9419cf9bda64259317626cbe7b211b7fe9cf238b89a2d9957149777062a554d1583d57605d84eb95b5082ed6e16a162dd641bc995ff9ab5977be5e6e57c1c6babdf243df523429c070ada975664e011e503f05a97869d4237dad955f1bb4f83c164d4069096d301edb23eab8b69764c998656e7f98643624899b8c87b49fd8cc1bc0204d8022cf881a162d45d94f07fd51e2d1d8190f9378c04649eca6991d67e9d886b1e3d8de78440e27e44fcd159c735909c9db0e91db7011f971146e83f92cf24d09196d0a75de1ad305bcf7a8b040047d51d34147b94025ddee4510f9e16c1e2d6efc76c24bc8297bde3ce18c335a484034adb1790aea9548b1612498adfc73049b89fd3c062599fc7a21bae7dac5bb96bfd1231ca0b6abcc936ca270115c1a3b47c40d2d1a03d9b72fa442cbf7581bba3efc46242e699b855c6ffdf08eb45721645043c9fe3f4d049bc07fbfb5e3e22316571f65a4c233ee0e935a84d5d0ee1037e5beb21dc775fbe64b55b4569f629ee71dbba673e88cb08352bd56d42e3e16da8a35f20da47f27db2030dd3afc05df06bebe78040000",
    ],
    [
      "ETag",
      "R4Oe55GYske6vJOWvh9aHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92414fc2401085ffcb782d11140a6dc20114b511104bf1620859da69296ebb65772b2184ffee6c45346aa2977666facdf6bdd7eee125cd23706199269b12e5ee2c41fd680a1f55c9b5a25b21728560016a9610196c66ded379a748da7e63c3ee9d22629c6dbb5d2254b8c28c81bb8738451e29709ff790b30c692d14bcccf245d559a07785194e03df1bdf529f89c8f4e3d970d8eb0f0770b04e8b11d36c51f1ff589b1f2c588ba58f314acc43345a0a29d6186acfd8542c2b38d6942865880a2ab87a904851164c0a51a349ade3d41af645dd6938f5cb96dd7208e422643a1539b1b329e9032d34e3bed8924bb00990554986e3eafa4ae334aa8c98d21b0776b3d2f715206971ca71f137487a578c3ec307768ce03bc73251e6fa44dd0c1f7abf1d47997e1e75dd0b063f08a529a9131278a3c134e88d26869b1fbdf7771ad5440a0a52a1c9b0516f765a6dbbfe1eeb953051d37b5c2d4bb42064f477dca51adc9871858737c7175b137b020000",
    ],
    [
      "ETag",
      "TqUIV/8pg7R1qaK9pdalaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:39 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85547f6f9b3010fd2ac8fba795f203480849a4aacb12da21a5a425a455364d890143dd02a6d8648aaa7cf71da6699a756b2524b0efbd7befce679ed123cd4234443e8d9f4a526cbf3c301f35101138865d3dc97f5c2c4d239d4cba79686c7c6c7af8e6ec0c10b462719ce6096972561601e1c3c5bc1517accc71c158131235076a53ebe9ea401ba81da3670c80c749124d69f608ec7b21723e6cb7f7daad98b1382138a7bc15b0f475bfbdd1db79c11e482078fb58b20d2abcfdb1e879c2022c28cbce167330507252ac488a6902160eccd0ff7a9cba4571da8a01bca101c141c0ca4c54b62045c0b288c66521b3a2e1339236df7ca0b935b5c69e329e2d1cef648dd38abc3e55305756ab82f032110d650d354534212b1aaeeb48fea85cb8b32b8880837bcc095f2b77df2dd7520e5b6be54c395746ce44394e603bcac271acb9a79c9c9f2a97ee6c71ad7c5b1e61c07948b8a099f4ed613f2195e797d6daef0fb4226001a2757065aa3dacf5d5811ff96610f53b861fa9c4f7fbbe69e08eaf06832ee9863ec1c0135576c9c219cb20a0ab18934ea4f77553d70caddbd17aa166987aaf63fa51a09afd4e606868d740bf0b2ac884f29c715af717ddb9b667ad3c77e18c479e25cb8830f470529bab8a78eb53409100faa0ae5d15a50c94aac3b21dcf724763cfbeb5eaf998921807dbf9134c4884134e008d0b9c12418a2b1642d3d0f56c6e7bf6cc194d81210ffd7a8fe068f8f3f940f0b6b9ecb2906f34f75cdbb99406f6885b9c9412b2a93f10cec12bdaed1aff4f3372ddd112a47151e0ed5f3128a7d7ade8ff909078b9aa6dee25abce1f563adafddac1d340709feaece86661b94b546fb9242205c982cfc707c032f0e96f617f47010bb71464b880350c6bc02b91a020f5d0d254daadd99aaeaa9a8e24b810ef623069fbd3a9725419494a32f152517d4765a3aa50c95f4110845973e441edfe00fb2707b823050000",
    ],
    [
      "ETag",
      "2lpZFY75mDD4pd5vba7TaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d90416f82401085ffcbf428446ca304120f5a496b424c4bf5d434665d460a02b3ee2e3184f0df3b500f3df6b43b6fbe79fb663bb8e4750a219cf2ecdaa06e1f32b4efc32541d394d6f0a1a836080ea0151993c5c69feca7d7663ff1a3a99f67d56de315abe5920923bfb112107670ceb14c0d849f1dd4a2421e3b1ef5e8c8986dd5a06c77fbe8254a58a8281d84dd218e57eb3882def933a62eff1af9ea1d28e894e01935d61287144a5381d26e87058da85489aea1464b3430c26323d3d428a1895c56dcc073678b472f9805ded37c310f182c490a9b53cdece183b381252bca846ebc1f7870afd7ad45f3a689cd0da6f70e3b3ed3f0aee53c5637e88014fc49afb9fdadfb1fc65d89f381010000",
    ],
    [
      "ETag",
      "jD7+T/quT+7E/7igmwD0jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:40 GMT",
      "Server",
      "ESF",
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
      "dd",
      "76",
      "43",
      "30",
      "0000e077c975dba38ddfddd176365194947193836446432d8cdacede7d3d7b84effb017959b26120e3edca3af004967c676cca0dea758b54a5cea6a63827f151476921652dbed046c6816636bce8de3e856d84a9277725753f883ae0e8806cdb7e4db7f57b4f4b746ca13a277cacafc199c4d8299e63b3d88e7e101b17ef547d457ec895567aa14d2b54d2ad5940f3acd2a45382d3bd2bafddf014ed7d98574546e05a47a314a1494b68029781ca937a1750e535ac66d7f42e9d3285c14e59f6f8b8e4366fb7d872a45b306568febeb9981f9c46c807b002ecded7820da47e70a162182bf06f27e3d2b34780c572c104f8fd03666b26411a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-91-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fa34014fd2b64f6ab6da12fa049b33615d76e5aaa403566b321c3f482a394a1cca031a6ff7d2f83753526fa8999b9e7dc73ee8317f2c08b2d99908467fb1aaae71ff72221270414cdf075cfa291b875fc27b8ccefdddf37d593f2f757d3292278c3927457e6d091a2ae18c8c926ec6695a84b5a09d1c1441dd7ea58e3bee95aae39188d472ef224e4e992170fc8be53aa94935eefa8ddcd84c872a025975d26766fefbdc77eafacc43d30257b1f257ba8227b5f8bfecc05a38a8b62ba09d1402da18a6147798e16fe33b7c9e9c7d45d4e77dd0cc18f9c01654cd4856a6c610a268a946775a5b392c90bd136df1d48e82dbd79643091d7bb222ee80e4e8c2d553456cf2518e7c17a652cfcf375b09a458bb51f87f30b6f35ebced7cbcdca0f8d9b0b2ff00c45931c34d7981aa7fae6e305f5b720152fb47ad43c37caaf0d5a7c1e4b434069096d30b6cd31b51cd34dd2c466a9331825a90949e224f6880e1293b943186e13a0c8d3a29a450b51509bd1be39b6637b6cdaf1d076d2d861961bdbae930e5dcbea6f6d208713f2547105675c9642f2b643e42658445e1c051b7f3e8b3c5d424aeb5c9db5c69a02de7b54582082bea8e9d044b940a5a6dd0b3ff282d93c5a5c7bed84979051f61cee71c629cd25209a56d83c05d54a6cb161c49fadbc3304eb895d1e83924cfebc90a6e78d8b772d7fa34738c0c6aed25f1246c1c2ffa5ed1c11d734af35e4b13d90122ddf616de8faf01791b8a46d1672b5f1825bd23e0590420505fb7e9a08d6816fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb7d655b7dd3760644832bf529e63ae6b16b4d8e2623eca050af15b58b8f85b662b57c036110c7efeb6e1dfe0169d2283f78040000",
    ],
    [
      "ETag",
      "qcT5oY8NwePlj9JWrwtNqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53",
      "825010c5bfcbf60a93a45230e303969933fe0bb11e1ac7b9c2a21870e9de4bea387ef7f6925953cdd40bec2ebfbd9c73600fcf491e810b8b64f952a2d89d2d51ddebc24759a64ad2ade0b9443000155b1239d8fa5977b27592f376b179b0a2c76ddd1f79ad1611325c61c6c0dd439c601a49709ff690b30c692de46999e5f3aa3340ed0a3d9c047e6fd8a53ee391ee87d37edf6bf73b70304e8b11536c5ef1ff589b1d0c58f3858f310acc43d45a0ac1d718aa9eb6295956a4684a5e8a10255470f56029785930c1b94913d3b14ccbbea8399653ab37eda64360ca43a6129e133b9d903e505cb1d4e71b72093601a22ac9705c5d5f699c4495115df68681dda8f47d05485a9ca438ff1b24bd2b469fe1033b46f09d63192f7375a26efb23efb7e328d3cfa36ebca0f383908a923a21416fd09904de60acb9d9d17b7ba7508e05a72025ea0cad5ae3aa7969d7de63bde63a6a7a8fab448906848cfe8ebb44811bb354e2e10d898bc4147b020000",
    ],
    [
      "ETag",
      "MxRmGSx9i/BpwV1dWx3ROA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:41 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd4fdb3010fd5722ef1710fd489a7ea552c5ba92b14a25853485a1696a1de7520c695c620754a1feef3b2714e8d8408a94d8f7debd77e7739ec81d4f23d223215fdee7906dbedc8a90540828bad4bbd1630097eecfd6f0ca999a9b23f3e8c2bcbde8f711c1354bd2d53a81aa1479c640f666d3da3213f99a6642543151d56954ad76c3742cc7b45bed96833c09493ce6e91db26f945acb5ebdbed3ae2d85582640d75cd69858bdecd71f1af575266e812959df97aca38aac7f2c7a9c08461517697f364503b9846c0e2bca13b4f0ca8cc2affba96b9cae6a4b043f7006943191a74adbc2144ca4315fe6599195f49e4861f3cd0799ba63771818c3c9cc0b0e1674a5c98b43834a633ecf40e689aa180bac29e609cc79b42823eb3be3bb3f39c3083ab8a112e4c2b8fae1faae612c22aa6061f48d6363e09d18fbe49167cc3ccf9d06c6c1f1a171ea4f66e7c6b7eb3d0cba8e402a9e169e031a26a0fd3eb775f4fe3035812af45006e71db34dadaee98471d86171d76e85b10961d80d3b2d6a8726739ad08c42a0c8533a7bc1a2a948bb566cdb61db66d0b56dd6b6a1db76186b75c24e1435a865379b71336e3911d956c863c6159c70b9169297bd2557fe2870e7813ff38683c02dca8829f6efa434a78b78eb53619108faa0aead8e72814afaa0465ee0fa836130ba74cbd918c392b2cdf41ea723a6890444d38cae40417626226c1a399f4c47c168e20dc6c8280efc7c8790a4f7ebe995106cd6459755f12627ba80ed9b849734c90bc043f9411a66c3ac9a38bf2db2dd56fe9f69e0fb836b54a75946377fc5b0a27653d3ffa153e08b55e974a76b11adf6e2826c7f6ff1a910bc4e6576723173fd6b526ef910430629fb7c82105c043efd2becae2862f192a28c54b8c67965528bb00ccab9e5abc26ec9b61a56c7ea90029ca977b16edbde1d90cea133c20a52f55c5179458b46e9502e5f4018c471f346de2946ff00a4db466322050000",
    ],
    [
      "ETag",
      "bdwTeVEX5CW9S0y+0+Q0jQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d90cd6ec2301084df657b2491f8114841e2002d6a91106d5368a5560899b0490d89d7d80e5514e5ddbb0e1c7aecc55e8fbfb167b78693540718c35e66e7124d7597a17bf5458cb6cc9de54d93b20801a0131993bdd96747d1407e5cce368ddfb3cdf343673d9d4c98b0c9371602c635a412f38385f1570d4a14c8b6ddceb42f32e62aed95c56a3d7f9cc72c1474f0c26ab35c4e67cb3934c11f9b3efdcbb26d0238d23ec6140daa047d0a6de888895bf806ad28748ea1a5d22468a185db8bcc50a985210a5909a37ed81bf5bb512fea0e86a361c4604e89709214b39b37ce068e9cc863fab17e1a0c98b6e456d376bdb4b2efe1566d9bedcd34ab1cda17439cc0a2ffbc7b0d724f3e9ce3d0ce9418402278924fd25dcfcd2f783328e3a6010000",
    ],
    [
      "ETag",
      "1BZ+no3iWvqsfRVgUOD+TA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:42 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0dd7243400040e177d9ebc80451f42e24a25dbb0d45c88d51962276d74f12d2e9bbd7f409ce7ce707a459468621195943287805732ae9eb6c0db96624650e391c42b5408d64d09061f913213d3f15d7da9a8474c8ece8a9692758c51f1771bf11749af5b08fe5b6e94cd5e101f6c5d2bef951547fe532babc6cdc681c995fcdb2751acf8f5b1c0fdebb55d214da59dd4682bf57729515b9648641252af0e0747b96e329419d641d6dcabc0a3b22e76f14974f393cee9874d6ddbb98a2b648b69ed05f0d0c5940bacbb931bf91bfa48598d2c7fde9b85b0f1f4a5e83152013af7a3224d5c295155d5f817f7b32ce9c2c030c92f6a407bf7f09fabc541a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-93-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b5c134848428814ad514ad74881ac84b49ba60919e742dd114cb1c91655f9efbb98a66b55a97dc2f63de79e733f7824bf79b1251392f0eca186eaf0e95e24e48c80a219be829f25fb83f53714fefde7ab6b73f95dbae5f5748a08deb024dd953974a4a82b0672b25977b34ad425ad84e860a28e6b777aa3bee5f65ccb1e8e862ef224e4e99217bf917da7542927a679d2ee66426439d092cb2e13bbe77773df37cb4adc0353d27c2d69a28a34df17fd920b461517c574b34603b5842a861de5395af8cfdc26e7af537739dd753304ef3903ca98a80bd5d8c2144c1429cfea4a67259347a26dbe3890b5b7f4e691c1445eef8ab8a03b3833b654d1581d4a302ec3956f2c82cb55e8cfa2c52a88d7f32bcf9f75e7abe5c60fd6c6ed95177a86a2490e9a6b4c8d737d0bf082fa5b908a175a3d6a9e1be5a7062dde8ea521a0b48436183bd688f6c6969ba489c3d2b13d4c520b92649c38436a2716730730d8264091a745358b16a2009b51b73f84980e474e3cb0fb033c0d686cd9e3be6303a4ce78448e67e44fc5155c70590ac9db0e91db70117971146e82f92cf2740929ad7375d11a6b0a78e9516181087aa7a66313e502959a762f82c80b67f36871e3b5135e4246d961fd80334e692e01d1b4c2e629a87cb1c5869160e67b1708d613fb760a4a32f9f9489a9e372e5eb4fc991ee1001bbb4a7fc93a0a17c1576de784b8a179ad21fbf6404ab47c87b5a1ebe32f44e292b659c8f5c60b7f90f62984142a28d8c7d344b00e7cf8af9d161fb1b8fa282315de7177986c445805ed0e715dee13bbd7ef0f070ed1e04abd898d46eea96b4d8e2623eca0504f15b58b8f85b662b57c066110c71fe86e1dff0170c3331778040000",
    ],
    [
      "ETag",
      "eMgbvy0xRoMj+HQ/LXs9pQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92416f82401085ffcbf48a2956a585c483b66a49d05ac4f4d018b3c28028b07477a931c6ffde596a6dd336692f30337cb3bcf7e000dbb488c081559abc5428f61709aa475df828ab4c49ba95bc900806a06209912d6bbdbd0cec9dffb4554377e445b9390f936e970819ae3167e01c204e318b2438cf0728588eb416f2acca8b65dd19a0f6a51ece02df9d8ca8cf79a4fbc9dcf37a7d6f0047e3bc1831c59635ff8fb5c5d1800d5ff918a3c02244ada5147c83a172b54dc9f232c386e4950851420dd70f12c1ab9209ce1b3469d8ad46d3ba32eda66db63a56c72630e32153292f889dcf481f28ae58e6f31db9048b0051976438aeafaf344ea3da882edd4960b56b7d5f019216a7192eff0649ef9ad167f8c04e117ce758ceab429da9a1f7d0fbed38caf4f3a8bb5e30f8414845499d91c01d0f66416f3cd5dce2e4bdbf5728a78253901275864db37dd3b9b6ccf7586fb98e9adee32851a10121a3bfe33e55e0c42c93787c0395b134417b020000",
    ],
    [
      "ETag",
      "36hk/T9wRWktFIGLdm0Ucg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:43 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8554fd4fe24010fd579abd5f34c7473f801612e271d0d32650b0148d77b9c0b64c71b174b1bbd510c3ff7ed35654ce3b4d4868f7bd37f36676a64fe48e254bd221015bdd6790eebeac79402a04245de1a9808b6466f6a3e957e3520ed6eb814eaddd63b78b0c96ab04dd6c63a80a9ea52188ce6c5a5ba53cdbd294f32a06aab61b55ada5ab6dadad1acd56b38d3a01713464c91daa6fa5dc8a4ebd7ec85d5b71be8a816e99a8857cf3725e7fd0ebdb94af2194a27e9cb28e5944fde3a467310fa9643ce9cea668201390ce6143598c165e95cbe0db71e81aa39bda0ac90f2c041a863c4b646e0b43843c89d82a4b8ba8a4f3440a9b6f1ec8d41eda7d5fe98f67ae7fb2a09b5cbc3855a850e6f3144416cb8ab2c09a2216c39c2d1725b2bd537e78e31122e8e0960a100be5fac2f66c45590889ee164a5739537aee4039563bae32735d7bea2b2767a7cab9379e4d94ef37471cb4bd0421595298f66910436ef8b9afcefbdbcc0554a289129c9b6a8b6a96da0ea2c00c23cb6806910a41600566931a811ab61bd05806405127f3e8858a263c3143d302d56cb65a0d0820d2970ddad440d59a911184464bd32d880c8b2ec9be421e532661c0c4960b5636975c7b8e6fcf7d6fe6f67bbe5d9411516ce0a0349717f1d6a7c42291f4415dfb1c651c33e537e5b8beedf5fabe736597c33184150d77d37b1c8f88c602904d53ba0109e9882fb16964329e3abe33767b435414373e393004e9fc7a7a15f8bb6dd16559fc13df19e11df54693c2c3817445e3ac603d940f445775b5aaea55ade96b7a47333a5aa3a6aaea4fb2df57fe1fbce779bd1b3444d394eefec2b0c8562397ff236bc12fde4af307171ac9b3bd7822fbdf7bfc5508ae58199d5cce6cef8694471e449042127e3e54482e804fbf1487b5452e2e2ea6c115900c473814799230857294d9a6b05baa35dd68e9c57746d254bec34cab7db8b33c461e113690c8e78acab52d1a9543997821218813e83aee39a27f00d5e7725636050000",
    ],
    [
      "ETag",
      "seHnU7CfS+3QtDjjD2a8yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d905f4bc33014c5bfcbf5b5854edda0833d58193a28533b0bc218234b6f6bd63fb726a9524abfbb37dd1e7cf4a5b939fd9de49c0c50aa2683259c54f1d5a1ee6f0ab46f6e48d0749535bcb4d418040fd08a824959a55d94671f91aa1727d5042fc9ae54c56ac584919f580b580e902bac3203cbfd008da8916dc7a39e4e64ccf6ad5336dbf7f5d33a61a1a6cc09db348e1fa2780da3f7c7d696ffb21c460fce744a30478d8d4497a2d574466937aea011755ba16fa8d3120d4cf0f4a3d0d4b54213f9acf8e1bd3f5bdc06e12c0ceee68b79c860455258450db3e98eb381252baa847eb81fcc18d0d3c855f3e9fb3dc9aec3753a8c87ab29ea2d9a574d9cc0a0bb3cb804792417ce7268ab3bf4400a7ec967652ffbf117e42c513aa6010000",
    ],
    [
      "ETag",
      "clUuBfdXBim6bin0ORSkig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:44 GMT",
      "Server",
      "ESF",
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
      "1dd04d6f82300080e1ffd2b39a01b2c86e141461111a0a547621582bb04628d4cac7b2ff3eb3fb7b79de1f5052caa42c1e1d672df80073a95b1bbaf9143b5854545bd6f4aa875cf06bea44e419d6092e51d2f6679f6639a43687ca8bf174806f68d677378f248eda2670285817adef95e19f4bf7d15d2f64f10f64bff69f4aab65a45e6d7eaf831035081e2bdc74de98ef08b65dad09faaa539abc2ca629a631b2f9e564047e7b8b4988396ee57e5e5cb404d96826f5d87fb9f49d97014ab99790f4744f433160cc6de6e85648acefa847e95146d9562919a78e002bc026d10c4c16cd8b6b9896b502fff6e2310bf61a005939b001fcfe011a8346791a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-95-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553ef4fa34010fd57c8de476d29b4d4d2a4399b8a27494b3d4a3597cb852ccb80ab944576f134a6fffb0d8bf53426faa9eccc7bf3defce833b9e3654aa624e1f97d03f5d3b75b919063028ae6187d3c9a483fbf1109c8bbcb4501f6e35191cf673344f09625e9ae2aa02745533390d3eda69fd7a2a9682d440f0bf55ca7678ded816bb983a133765ce44928b2252fef907da35425a7a679d0eee742e405d08acb3e13bbd7b8f9609b552d6e812969be973451459a9f8b7e2f04a38a8b72b6dda08146421dc38ef2022dfc67a6c9e9fbd27d4e77fd1cc10f9c01654c34a56a6d610926ca8ce74dadab92e933d136df7c908db7f41691c144d1eccab8a43b383652aa68ac9e2a30cec3f5caf083f375b89a47fe3a88378b0b6f35ef2fd6cbed2ad818d7175ee8198a260568ae31334ef52bc007eaa720152fb57ad4865be59701f91fd7d212505a42978c4f06636a4d066e9225272c9b0c9d241b40924c9213870e93017347304a13a0c8d3a29a454b518e27d9c87659165b6e96c6237768c5c9206131b51d960e31665b0ed91f93bf355770c6652524ef2644ae433ff2e228dc068b79e4e91632da14eaac33d636f0d6a3c20611f4494ffb36cb052ab5e3f683c80be78bc8bff2ba0d2f21a7ec69738f3bce682101d1b4c6e129a85722c5819160bef2ce10ac377679484a32fdfd4cda99b72ede8cfc951ee1025bbb4aff924d14fac10f6de780b8a245a3210fdd07a9d0f20df686aef77f108947da55213fb75ef88b74a11032a8a1645f6f13c13af1e57fed70f888c5d34719a9f08db7c3642bc26ae86e88eb765fd8963db26d876870ad3ee446967b985a5ba3ad083b28d54b47dde163a39d58235f4198c4f5077a5afb7f1f44324d78040000",
    ],
    [
      "ETag",
      "x+8sIghobeskPCle2x+lgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f40a095aa195c4835a8b2668ade2a1698c5961401458babbd418e37fef2cb5b6699bb4179819be59de7b70845d5a44e0c23a4d5e2a1487ab04d5a32e6628ab4c49ba95bc900806a0620991cdf1de2ba5e7ad7bfeeec96915fd7cb8db269d0e1132dc60cec03d429c621649709f8f50b01c692de4599517abba33401d4a3d9c07b3d1c4a33ee791ee270bdfeff6fc019c8ccb62c4145bd5fc3fd6962703b67c3dc3180516216a2da5e05b0cd548db942c2f333425af4488126ab87e90085e954c706ed2c46cdb66c3695aed46dbbab61dbb4d60c643a6525e10bb98933e505cb16cc6f7e4121c02445d92e1b8bebed2388d6a23ba1c4d02a755ebfb0a90b438cd70f537487a378c3ec307768ee03bc7725e15ea42ddfb0fdddf8ea34c3f8fbaeb06831f845494d4050946e3c13ce88ea79a5b9ebdf70e0ae554700a52a2ceb061b56eed1bc77a8fb5cf75d4f41e57890a0d0819fd1dc354811bb34ce2e90dc4b420be7b020000",
    ],
    [
      "ETag",
      "2MwGpsGGbBLkY64nCmHkjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:45 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd",
      "2ac8fba79592f023210991aa2e4de98a94928c40bb6a9a120386ba2598629329aaf2dd7798a66dd6ad9590c0bef7eebd3b9f79420f348fd10885347dac48b9fd72cf42d44244e01476fd697e699ccd43acea5eb0b1aaccfb71f9989e9c0082d62c8ed74546da9c556544f8285874d29255052e196b43a2b6d56feb7d43b3744beb9a7dd3021e275932a5f903b0ef8428f84855f7da9d94b13423b8a0bc13b1f5cbbeba31d4a264f724125c3d94544185ab1f8b9e662cc282b2fc245880818a937249d6986660e19519875f0f5377285e7752006f68447014b12a17b52d4811b13ca16955caac68f484a4cd371f68614fed89af4c6681eb1fadf0ba26af8e15cc95e5b224bcca444b59414d09cdc892c6ab26523c2817deec0a22e0e00e73c257cacda5edd98ab2cfa19c28a7cad83d570ee98eab04ae6b2f7ce5e8f458f9e6cd82b972767b8001df31e182e6d2b58fc38cd48e9f1bebbc3fce9a8005b86882cb81d6c7fa50b3c2241c44c9b06b868946c270180e4cdc0db5c8ea915e1c120c3c5167972c9cb37cd8ed59d834ccc8d475538f2d4d8bf45ed8c7ddeea067c646322016d1437388762df4bba4829c535e304e9beea21bcff1eda5ef05ee64ecdbb28c044307cf1b7375116f7d0a2812401fd4b5aba39481527d548eebdbde78e23bd776331d5392e268bb7884f94870c609a07189d74490f28ac5d034349f2d1cdf99b9e32930e491cff7088e463f9f5e09feb6905d16f28d2ea6b3b1dfef49077bc835ce2a89d9341f48ef9880d8b5fe9f66ec79e35b90c66589b77fc5a09cbea4ff4341e2e5aab1f9a2886ab5fdca40bb5f3b785a086e53931d7d0f6cef16355b1e494849f2e8f3f101b00c7cfa53d8df50c0c21d05",
      "192e600dc31af15a242a4933b4742ded366cdd308de100497029dec57a436b7f3a758e3a2359935c3c57d4dc50d9a83a54f117100461d65cc7fd06d13ffed0b21c21050000",
    ],
    [
      "ETag",
      "TLnH2BPba/1RUv9ulRXHqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "40",
      "10",
      "fd",
      "2f",
      "e3",
      "b5",
      "8d1402494938886914528914b9680859da692d6c3b75772b2984ffeeec620c472fbbb3ef63f2de9ee150d6198c6157165f2daaeeae40b3b44382ba9546f3d550ad113c40230a569ee6efdda9d5f3fb17b9a2582e936c904f8f93092b74fa899580f119f21265a661fc71865a54c8b6ed56b98d2c335d6391d9e22d7a8a12062aca2cb058c7f1c3348ee0e2ddd89ac3bf2c9b8b077bda2598a3c23a459ba251b4c7d4cc6c412daa46a2afa955296a706247148ada4628229f113f1cf9c1a8df0b83b037188e86210b25a5c29454b376bde26c60c80899d091fb419f05ca8d5c3577e7b7836d073b052eda2d17fc717dcb6d7e174e3b83fa5511a7d36883f5ae211fc906375cc8a8163d4805fff27369aeefcb0fb9a6aa77c2010000",
    ],
    [
      "ETag",
      "zJZyzusJ/MlSoLlQRd3fBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:45 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ff1dd0c97282300000d07fc9591d2052426f0504d94a3ab2954b266090ad4883c4a5d37fafd34f78ef07d0aa62f34c2ee79e8de015dca9a26faa8d3f21839cd80d3207d3aa20f1b6f9d827c29508317bff2ae487e4975e669b9975867df51e1ade8346df36a1d6e8cbe5f14d0b0f2e5533b35da7575e42a4a707358cf1929f5f94acce97b20bb1aad45665ef700703856cf5c693ca4bba772872326f27691089a6f852fc088d5addb1213846eb936f205a58299cd4b22e8a6450e231178bb04574f85cc25b5b139e0445365b040f365a63939bb3ab8a56f678d3193a5801769b5ace66d23eb950d5f515f8b793cb7d62cf008351ce38f8fd03cebd0f1f1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-97-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbda2490070991a2354be98694901548bb6a9a903117ea96608a4da7aaca7fdfc5345dbb49ed276cdf73ee39f7c113b9e3654ae624e1f97d03f5e3a75b919013028ae6f89a7da97f8c66c21d49117ad67d115c672bf362b140046f5992eeab027a5234350339df85fdbc164d456b217a98a8e74c7b963d341dcb3147137be2204f4291ad797987ec1ba52a391f0c8edafd5c88bc005a71d96762fff23e78180eaa5adc025372f05672802a72f0bee8e74230aab82817bb100d3412ea18f6941768e12f334d4edfa6ee73baefe7087ee00c2863a229556b0b533051663c6f6a9d95cc9f88b6f9ea404277edae228389a2d9977149f77062a454d1583d56609c07db8de1f9e7db60b38cbcad1f87ab6fee66d95f6dd7bb8d1f1a57dfdcc035144d0ad05c63619cea9b8f17d44f412a5e6af5a87d6e959f1be4fd3f969680d212ba603c356d6acd4c27c99229cb66a34992999024b3643aa1a3c464ce18c6690214795a54b368294a668e13c71ab2381933168f6d0be2c41e3a718a4918a493d4b667e470427ed75cc119979590bceb10b90abcc88da360e7af9691ab4bc86853a8b3ce585bc06b8f0a0b44d03b351dda2817a8d4b6dbf3233758ae22efd2ed26bc869cb2c7f01e679cd14202a2698dcd53506f448a0d23fe72e39e21584fecfb3128c9fce713697bdeba78d5f2177a84036ced2afd25611478fe576de788b8a445a3210fdd815468f9066b43d7875f88c425edb2908b9d1b5c93ee29800c6a28d9c7d344b00e7cf8af1d171fb1b8fa282315de7177986c45580ddd0e715dee33db1a4e9cee4f55b456ffc66c6b363a76adcdd166843d94eab9a26ef1b1d04eac912f200ce2f87dddadc31f06b3ef5b78040000",
    ],
    [
      "ETag",
      "fBrX38oE3soSI1qlRYfC0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92414f83401085ffcb78a509d5422d490f54abd6d05a5b8c07d3345b18280a0cdd5d344dd3ffee2c6a356aa2179819be59de7bb083a7ac8cc18355966e6a94dba314f5ad2966a8ea5c2bbe55542a040b508b94c9fbf5da3e1e4c0272c61ba70c57d1f5e5d4f7fb7d2654b4c64280b78324c33c56e03deca01405f25a44795d94cba6b3406f2b339c87b3d1e492fb8262d34fee82c01f0443d85b87c55868b16cf87fac2df6163cd26a86094a2c23345a2a498f18e991b1a94451e5d85254cb08153470f3209554574212b578d2ea755b6df7d8eeb57bf689e33a3d06738a84cea864f66ecefa409316f98c5ed825b80cc8a664c349737de6711637464c399a846ea7d1f71560694996e3f26f90f5ae057f860fec3d82ef9c28a82ef581ba086efcdf8ee34c3f8f3af7c3e10f42694eea8084a3f1701efae3a9e116efde075b8d6a2a89835468326cdb9d53a7ebda6fb19e91899adfe36959a30591e0bfe32ad3e0252257b87f0558e8565a7b020000",
    ],
    [
      "ETag",
      "Whh02BNLo5Mq5nTbcJGPAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:47 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd",
      "2a",
      "c8",
      "fb",
      "a795f283849084485597a56c434a494748bb6a9b12638ed40de0149b545995efbe039ab651bb564202fbdebbf7ee7ce681ac781a920109f8f22e876cfbe95604a44640d125eec278cc26e73ffdf1d5d0db84ad1593d7f77f87272788e0054bd2641d435d8a3c632007b3696399897c4d3321ea98a86ef5ebad6e5bb75a966e985dd3429e84381af37485ec1ba5d672d06ceeb51b4b219631d035970d2692a7fde6a6dd5c67e2169892cd43c926aac8e6fba2a7b1605471919ecca668209790cd21a13c460bcfcc30f87c98bac169d2582278c31950c6449eaac216a660228df832cfcaac64f0404a9b2f3ec8d41edb235f1b4d66ae7fb4a049415e1c6b546af37906328f554d5b604d118f61cec3451559afb4afdee41c23e8e0864a900bedeabbedd99ab62840bf735d37403bd586ee9976c8775c6de6baf6d4d78e4e8fb56fde6476a17db93ec0a0f110a4e26969dba7410c85e5c7ce3aafcfb320508536aae0bca77769abaf5b4114f458d437cc20d22108fa41cfa446a033ab039d30008a3c55642f593415a90166d4ed877a10e89665b6986958ed4ec7a4dd08c28e41f54ebf6bb05ecf20bb1ab9cfb882332ed742f2aabde4ca737c7bee7b337734f4edb28c88620bcf2a7345112f7d2a2c1241efd4b52ba25ca05271568eebdbde70e43b9776351e635852b69ddee18044349680689ad1041464e722c4a6918bc9d4f19d893b1c23a33cf38b3d4292c1af876782bf5d975d56e5bbd0ea764afd3de092c67989d8541fa46592ddaef6ff1443cf1b5ea32ccd32ba7d3bfd9bf94b7cb9aa2c3ee991426dbf6a93",
      "dd9f1d3e358257a9ca4e7ecc6cef9a545b1e449041ca3e1e1d0497810fff08fbeb8958bca0282315ae7150992c445806d5c0f2a4b45bb15bed5ebb55fe4f14cdd4ab986119fb93297214192181543d56545dcfb2514528974f200ce29cb98efb0da3ff00c8237d941e050000",
    ],
    [
      "ETag",
      "eLLcOMXTLWARvd1kcsYwzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d50cb6ec23010fc97ed3511af8208128712451489229a16f550216492250d24d9d4deb4a2887f676d38f4d0432ff678766635e3131cf22a85116cf3ecb3417dbccb909f2d88d134051bb96aaa0c8207c82a13653a1d86bc6ffd84837cf2d45b52bf95bddd67e3b1284cf281a582d109763916a981d1fb092a55a2d8361bed368a8c8fb565668bd7681ac54294945a62b19acf1f26f308cede2f5b7df897657df6604fdb1877a8b14ad0a6a835ed31e1992d68545917e81b6a7482069cd80d324d4dad34912f8c1f0cfdcea0db0e3a41bbd71ff40311169428cea912edea45b20113ab22a66fe9075d116807a5eace9d5f8eb61d6e686df15fb38e9dad6f0b274746b3d424e90cda60ed6bc8906c709642ac1bf42051f2cb8f395fdfe70b43f37452c2010000",
    ],
    [
      "ETag",
      "dG8Ctj/zC6iBM3Po5/gW4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:48 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0d97282300040d17fc9b338b880a46f42d9458b2c95be64080d9046110841d1e9bfd7e917dc39f709f2a2209ca3e1ca4803dec0942fe1bc98fbada6a3aadc3bd9c2472112a950ed6272d64ceedc8dfc99dc25135fd4d21e59850d4f5dc85ecb63c389c7f7639d1a3028be4d41363ff2233a869bb5cd44bc8cdcbea91f8a82a56cb063753cab979bef63eaf18b1094e0fc7a0f4f1a0d684f5654461fe9d993f6d6ae83ba08604706aee514ee22e7d464a58f7b6a5570c7f096df2a776b258bfda149cec8693a29a809de06759798a6965c43162829e1baf1b5628709cc00b9b7af0447f4c55d2910cec0bf1d0d534b5e037492f7a407bf7faba5b99c1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-99-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d6fa24014fd2b64f6b52aa85830315ba3b86ba2b845ac69361b320c173a2d309619da6d1afffb5e86da6dd3a47d6266ee39f79cfbc133b9e36542c624e6d97d0dd5d3b75b119333028a66f8fa77b558ccddbd6bd5fbc72b7b5d5fabe27e7439992082372c498b430e1d29ea8a811cefb6ddac12f5815642743051c7753bd6a86fba966b0eec91ed224f429eae787987ec1ba50e72dceb9db4bb9910590ef4c0659789e2f5bdf7d0ef1d2a710b4cc9de7bc91eaac8dee7a2df73c1a8e2a29cecb668a096504550509ea385ffcc24be789fbacb69d1cd10fcc01950c6445daac616a660a24c7956573a2b193f136df3cd816cbd95370b0d26f2ba28a3921670662454d1483d1dc058049bb5b1f4179b603d0d971b3fdace7e7aeb6977b659edd6fed6d8fff402cf5034ce41738d8971a16f3e5e503f01a978a9d5c3e6b9517e69d0f2e3581a024a4b6883d1b939a29663ba711a9fb3d419d8716a421c3bf1b94d07b1c9dc210c931828f2b4a866d15294b66d398e0969940c06341a326b183914cc68e858710aa384f5cd981ccfc863c515ccb93c08c9db0e917db00cbd280c76fe6c1a7aba8494d6b99ab7c69a02de7a545820823ea9e9d844b940a5a6dd4b3ff482e92c5c5e79ed84579051f6b4bdc719a7349780685a61f314546b9160c3883f5d7b7304eb89fd3a052519ff7e264dcf1b176f5afe4a0f71808d5da5bf641b064bff87b673425cd1bcd69087f6400e68f9066b43d7c73f88c4256db390cb9d175c93f62980142a28d9d7d344b00e7cf9af9d161fb1b8fa282315de7177986c445805ed0e715dee0bdbea3bb6e3100daed487d8b9eb9cbad6e468324201a57aa9a85d7c2cb415abe52b0883387e5f77ebf80ffb48f44878040000",
    ],
    [
      "ETag",
      "xLFFD9W91uWwV5MuYtmq6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2401085ffcb786d1340586d130e455049a062292743c8d24ea1d076ebee162584ffee6c45346aa2977666facdf6bdd71e609b1631b8b04c57cf15cafdc50af5a329025455a615dd4a5128040b50f315917e9ba90d4bb76cbbe4afb2dfda57bbc9abd7ed12a1a235e61cdc03242966b102f7e90005cf91d622915579b1a83b0bf4be34c369180cfd3bea73119bde9f8d465e6f3480a3755e8cb9e68b9affc7dafc68c1462c034c506211a1d1524ab1c1480f8d4dc5f332435b894a46a8a086eb072b29aa924b216c9ad88e633759abe1349dc66587751c023311719d8a82d8d994f481169a6781782197c0089075498693fabaa3711ad7464c39f443d6aef57d05485a9266b8f81b24bd6b4e9fe1033b45f09de3b9a80a7da66e470fde6fc751a69f47f5bd70f083509a923a23e1703c9886de7862b8f9c97b6faf514da4a020159a0c9b8df675e78a35de63bd11266a7a8fab658516449cfe8efb54839bf04ce1f10d326631507b020000",
    ],
    [
      "ETag",
      "N46sj6ik6kbaxrD2yuvPxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:49 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10",
      "fd",
      "57",
      "90f74b272501f2413ea4aa4b53d621a52425d0aadaa6c48049dd00a6b6699555f9df7798a66dd66d9590c0bef7eebd3b9f79421b9ac7688442babe2f09df7eba63216a2022f11a7689959f467af9ab174cacfcf2716ebac2de5c1e1f0382562c81b322254dc14a1e11310a16ad3567658139634d48d4340da3695a6d63680e8d4ecfea0d8128489a4c69be01faad948518e9fa5ebcb5666c9d125c50d18a58f6b2af3fb4f582b33b1249a11f6aea2023f40f544f52166149597e1c2cc04129085f920cd3143cbc52e3f0cb61ee16c5596b0de0071a111c45accc65e50b52442c4fe8bae42a2b1a3d21e5f3cd075ad8537be26b9359e0fa472b9c55e4d5670d0b6db9e44494a96c682b282aa12959d27855478a8df6d59b5d40041cdc6241c44abbfe667bb6f6bab5d27e9486d121da893676cfb4c32c8eab05ae6b2f7cede8e4b376eecd82b9767a738001fb311192e6cabc8fc39454c69f1becbc3fd78a802528d7c165dfb0b03930866112f6a364d0e9858941c27010f67bb8131ad1b04bba714830f064955db170cef23e362c336e837733ee102334bb181a3be80f93a8d73506716c9949dfb2ba68d7408f9c4a724645c104ad9b8cae3dc7b797be17b893b16fab32120c8d3cabcd5545bcf529a14800fda7ae5d15a50c94aa13735cdff6c613dfb9b2eb219992358eb68b7b189304a782001a739c1149f8058ba169683e5b38be3373c75360a8939fef11028dbe3fbd12fc6da1ba2cd51b2d7ccf71cf95813de20aa7a5823cd41f685c8057b4db35fe9d66ec79e31b90c69ce3ed1f3128a7eae45f25145ead6a9b7b4913556afb551bed7eeee06920b85575767419d8de0daab73c92104ef2e8e3",
      "f101b00a7cfc77d8df5400c35d051d21610dd31a894a25e2a49e5a9a29bf35db6c0f7b6d13293097ef627dabbd3f9e2a479591642497cf25d5375575aa0a95e20504411836579dd4ee37e169b5e32b050000",
    ],
    [
      "ETag",
      "e6nBc/uz5UC6nQwP1NsEkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d505d6bc23014fd2f77af2db4dd9429f8a04336a588eb148663488cd75a6d7bb3249d14f1bfef268ee1e35e929bf3713927673816f516fab029f2af06757b97a37d754386a629ade14b516d1002402b7256ae4eabf747db46723adde7f542edd3749e0d07035618b9c74a40ff0cbb02cbad81fec7196a5121dbd66bed37b2ccb6ca2193d962fc3cce18a868eb80d9324d87a3740c97e0c6a68effb27c5e0238d026c31d6aac25ba144ad301a59db8824654aac4d050a3251af0624fe49a1a253451c848184751187793a817f7a2fb4eb7d363654952d8826a162fdf381c58b2a2cce8c405216181f62377ddf9f39be1075fc24db1cf76cb257f5ce2b8cfdf85a3d6a2996be278065db2e89af2895c72cb8dac6e300029f89b5f0a7b7d5f7e00ccbc5a26c3010000",
    ],
    [
      "ETag",
      "ZwZX8ty0cJJhgnTphLLPRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:50 GMT",
      "Server",
      "ESF",
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
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00d07fc9d93a4265496fac65a9c8522278611043266584c8524c3afdf73afd84f77e40dd34789aaa79e8700fde00af65b86db621d3cd8ae0402f747537f2583d1a06b5dd8464dfa67280d0a0e764baeea27c0d1acd81dd27a60b133d1f43e2c6ab48a18b64eab7a58c7a2bddab6478a0759911afb3f6245d482c44a87908c937ad1854cf2186b333ee83bb4f33ef14cc2a11d77351cec6bb735efad01593332d2c2e5e22c9ed6c72a8a2dc5c9882a3d2b23e6afc75e79274f7d83eef8bd10f6cefe21f8f66235afb7aa3fae94194640d511a943d071b801f8c8e78aae893fbaa40b801fff66ae60c3f034c5c8f7804bf7f063d4b261a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-101-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc87b6d1228490891a2354a691b2d211d9056d33421632ed42dc1149b565195ffbe8b69ba7693d6276cdf73ee39f78317f2c0cb944c49c2f3c706eafd977b919013028ae6f8bad8db57557e99a6a15704ebc9b7526eb3fa793643046f5992eeaa027a5234350339dd86fdbc164d456b217a98a8679956cf1a9f9aaee59af6683c729128a1c856bc7c40fa9d52959c0e0647f17e2e445e00adb8ec33b17b7b1f3c9d0eaa5adc035372f05173803272f089ead74230aab82867db101d3412ea18769417e8e10f354dce3ee6ee73baebe7087ee20c2863a22955eb0b533051663c6f6a9d954c5f88f6f9ee40426fe52d228389a2d9957149777062a454d158ed2b302e82cdda58fa179b603d8f961b3f0e1757de7ade5f6c56dbb51f1ab7575ee0198a260568ae3133cef4cdc70beaa720152fb57ad43eb7caaf1d5afe3b989680d212ba60ec98636a4d4c37c9128765137b94642624c9247146d44e4ce60e6198264091a745358b96a24cc10177688fe2341bb218514e3c715327b62c2773274e92a6594a0e27e4b9e60aceb9ac84e45d87c86db08cbc380ab6fe621e79ba848c36853aef8cb505bcf7a8b04004fda7a6431be50295da762ffdc80be68b6879e375135e414ed93e7cc41967b49080685a63f314d46b9162c3883f5f7be708d613bb3e062599fe7c216dcf5b17ef5afe468f7080ad5da5bf248c82a57fa9ed1c1137b46834e4a93b900a2ddf616de8faf00b91b8a55d16f27deb053f48f71440063594ecf3692258073effdb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7956dd9e6c41d130daed5df31cbb2ed63dbda1c6d46d841a95e4bea361f2bedc41af906c220cedfd7ed3afc068f0d8e717b040000",
    ],
    [
      "ETag",
      "Cy3HpgGddSElRM8KnsUfrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5f53825010c5bfcbf60a13949032e3039a95939a7ff0a9719c2b2c880197eebd648ee3776f2f9935d54cbdc0eef2dbcb3907f6f094161178b04a93e70ac5ee2c4135d1c51465952949b7921712c100542c21d2e936e2b03929bbf2dcb95ff5fc328decd76dbb4d840cd79833f0f610a7984512bcc73d142c475a0b7956e5c5b2ee0c50bb520f67c1b43fbaa53ee791ee47f3c1c0ef0c7a70304e8b11536c59f3ff585b1c0cd8f0d51463145884a8b594826f30547d6d53b2bcccd094bc12214aa8e1fa4122785532c1b94913d3b66cd3762fac96ddb22e1dd7691199f190a9941704cf67241014572c9bf22dd90497005197e438aeaf2f344ea3da892efba3c06dd402bf02a42d4e335cfe0d92e035a3eff0811d33f8ceb19c57853a51378307ffb7e328d4cfa3aefda0f783908aa23a21417fd89b05fe70acb9c5d17b67a7508e05a72425ea106dabd174ae5ceb3dd72ed759d37b3c252a342064f47bdca50abc9865120f6f6732f4f87c020000",
    ],
    [
      "ETag",
      "5C4fc8QpCs/5KbEApid1xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:51 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85546b4fa34014fd2b64f68b267df068e923316eadac4b52a94ba9c6ec6eda815eea28309419dc34a6ff7d2f8355eb3e4c4860e69e73cfb977eef0441e58b6224312b2f5a68462fbe99e87a44140d235eea6679d8d7e365959e97d5a6e2c2b4ba8198d4e4e10c12a96a0699e4053f0b288400ce7b3d6bae0654e0bce9b98a869e866d3b04d7d600c74ab6b7707481490c413963d20fd4eca5c0cdbedbd786bcdf93a019a33d18a78fab2df7e34db79c1ef2192a27da8d94619d1fe40f534e111958c6727f3193a2805140b48294bd0c32b75157e3eccdd62346dad11fcc822a051c4cb4c56be3045c4b398adcb426525c327a27cbef9203367e28c036d3c9d7bc1d192a6157979ac51a12d16058832910d6d8945c52c81055b2deb48fea07df1a797184107775480586a375f1ddfd15eb796da8f52d72dd04eb59177ae1d66713d6dee79ce2cd08e4e8fb50b7f3abfd2ce6e0f30687f0542b24c990f68984065fcb9c1ee9fe75a11a844e53ab8e8e93635fafa208cc35e14f7ad6e18eb1086fdb0d7a556a847830e74562150e4c92abb62d18c6786dea351d708c1b081766868f78d15f4ad9082650f42e880398875d302b26b905f059370ce44ce05ab9b4c6e7c377016813ff7c6a3c05165c4141b795e9bab8a78eb53629108fa4f5dbb2aca382a5527e67a81e38fc6817bedd4433281358db6b30d8e494c130188a6054d414271c957d83472359db9813bf5461364a893bfda2304197e7f7a2504db5c7559aa379905beeb5d28037bc4354d4a0579ac3f08cdd12bd9ed1aff4e33f2fdd12d4ad3a2a0db77312cc7ee54f4bf4828bc5ad536f79206a9d4f62b93ec7eeef06910bc557576f26deef8b7a4def2218602b2e8e3f141b00a7cfc77d8df5404e35d451d21718dd31a894a252aa09e5a962abf35dbb08c816d10052ee4fb986998fdfdf15439aa8c9042269f4baa6faaea54152ac50b0883386c9e3aa9dd6f4daa46b92b050000",
    ],
    [
      "ETag",
      "mB4q0BLd3mjmuq33nla2cA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d904f6b834010c5bfcbf4aa605292622007934a2bd8d0da86044a09ab4ed4f867b6bb2b2504bf7b674d0e3df6b43b6f7ef3f6cd5ea0aeba1c169056c5778fea7c57a079b3970475df18cd87a44e23388046144c967bfdf2905210ad8275b9d9758fbbaade17cb25133a2bb115b0b8c0b1c226d7b0f8bc40275ae4b1c3418d8e8c99b3b44ab4f9089fc2848596722b6cb6711cace21006e7cf98acff35f2353870a234c1232aec32b429a4a2136626b20b6ad1ca065d4dbdca50c3088f8d42512f852272597127ded49dcca79e3ff1bdfbd97ce633d950264c451dc3db770e07868c6812fae105c1835bbd3a1bd4af8ad85d637eebb0e59aecc3860319d5a30399e05f7aaeccb51e7e01a4f9f32e82010000",
    ],
    [
      "ETag",
      "hXsM7boAIBAChNWnDWikXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:52 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb642d8e0215e80eb0e1e32806285036991462f9098100a24eef5ea74778ef09489651cef1d8d5b405efe04e446d9dad0f4c35f04f8e7009fd32253b94584b7f982d57c6e1e10ca36b3dd9a6802ce53b0a3e443f425f4c8ea28b8c1535f31fe206b642cd79bc8f3c0de6b62d1f25ccf4527c6c4f7658a817a2c62611607af36e6eef78cc33167e744e8da47079d64cfdbadfc6e1f059b84baf551baf1b0834ba566a4aba73503192ca9708c92d3970bc16f997bce1f9549dab764c7a48a48443de05d33d6c8a791ef55d67d618d7294b2707ac005d5839508ecb17577ad3b415f8b7e3f1cee82bc0a064a003f8fd03774e88821a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-103-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2bc8fbda24109a0791a2354a688b16c806a4d5364dc83686ba054cb1695555f9efbb98a66b5569fd147cef39f79cfbc833bae3558a1688f0fcbe65cdd3975b41d009620ae7103d9781e7fa56b1a3de656c979b5ffefdc5b77cb90404ef58129775c10652b40d6572b18f867923da1a37420ca0d0c032ed81351d9b8ee598f6643a71802859916d797507f41ba56ab9188d8ee2c35c88bc60b8e6724845f91a1f3d8c4775236e195572f45e73043272f489ead74250acb8a896fb081cb49235092b312fc0c33f6a4aceded71e725c0e73003f70ca30a5a2ad54e70b4a5051653c6f1b5d152d9e91f6f9e60345eed65dc70615455b5649854b7662a458e1443dd5cc380f77bee105e7bbd05fc5de2e48a2f5a5ebaf86ebdd76ef0791717de986aea1302998e61a4be34cbf0278807ecaa4e295568fbb70a7fc3221efe3623a02484bd627939939c5d6dc74484666349bdb1392998c9039994db04d4cea9cb2d394300c3c2daa59b812152533dbb14d9298d9c44e4e8993253835a7894520486d878eed393a9ca0c7862bb6e1b21692f71342d7a117bb491cee83f52a76750b196e0bb5e98d750dbcf5a8a04100fda7a74397e50294ba717b41ec86ab75ec5db9fd86b72cc7f429ba871d67b8900cd0b881e129d6f8228581a160e5bb1b00eb8d7d3f26255afc7e46ddcc3b176f46fe4a8f61819d5da57f5114875e70a1ed1c1157b86835e4a1ff403558be81dec0f5e10f20e14afb2ae8c7de0d7fa23e14b28c35aca29f6f13c03af1f9bfed78f90086db071da9e00dc74365a7421bd61f11d7fdbeb02d7b3c9d8c910637ea436e3e9e1cc7d6d5e82ab29255eaa5a5fef2a1d35eac95af2048c2fe033daec35facafa0b67b040000",
    ],
    [
      "ETag",
      "FsNIEM1lOcIHT3mDZMqGKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92dd6e82401085df657a594cb02a2a8917d86a4b823f55bc681a635618100bbb7477d118e3bb77a0d6366d93f60666866f96730e1ce125e121d8b04ee2d702e5e12a46fd5816335445aa15dd72c1158201a8594ce4a46d369e76d7d66854702b1e469d438eed7daf47840a369831b08f102598860aece723709621ad05222d32beaa3a03342dd170eecfdcf13df59908cb7ebcf03ca7ef0de0645c1643a6d9aae2ffb1b63c19b015eb1946289107586ac9a5d862a0ddd2a662599e624d894206a8a082ab07b11445cea410359ad4ea66a356b76ecc6ebd6b365a56ab4b642a02a613c1095ecc492068a1593a137bb2091601b22ac971545d77344ec2ca4959ba63df6a5602bf02a42d4a525cfd0d92e00da3eff0819d33f8ceb14c145c5fa8a137717e3b8e42fd3ceacef1073f08a529aa0be2bba3c1dc7746d3925b9ebdf70f1ad5540a4a52611962dd6c765a6dcb7ccff5569459d37b6c2d0b342060f47b3c241aec88a50a4f6f40b1cc717c020000",
    ],
    [
      "ETag",
      "O703Yv+6MMun6gFf8ype7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:53 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554694fdb4010fd2bd6f60ba8397cc4b92444d3c4a59182038e038ada2a59afc761c1f11aef9a2a45f9ef1ddb0448698b1429f6ce7b6fde1ceb4772c79390f449c0d7f73964db0fb7222035028aaef174046757d6c285e9c75f53d708dadd905ad6e5c9092278c1927493c6509722cf18c8fe7cd65867224f6926441d85ea86deaa1b6d53ef193dddb2db760f8912e268c2933ba4df2895ca7eb3b94fde580bb18e81a65c3698d83c9f371fcc669a895b604a360f7336318d6cbe93f534168c2a2e9293f90c1de412b2256c288fd1c30b350c3e1d6a3738dd34d6087ee00c2863224f54e10b25984822beceb35295f41f49e9f3d50399391367e86bc3e9dcf58f5674539057c71a95da729981cc6355d3565854c46358f2705545d23bed8b373dc7083ab8a112e44abbfeea788ea6ad42aa60a57dcf75dd02ed541bb823ed5061ec6a73d77566be76747aac9d79d3f985f679718041eb2148c593d2b84f83180ad34fcd1dbf9d6941a00a8d54c165476f53a3abf78228e8b0a86bd941a4431074838e4dad4067bd16b4c20028f254a15eb268229256cbe85a466819669bda1d9b599119998013d259c7d2ed300c7bb6c158487635f233e30a465ca642f2aac1e4da1bfbced2f7e6ee70e03b651911c5268e2a734511af7d2a2c1241ffa96b5744b9c04cc5b4c6aeef7883a13fbe72aa0599c09ab2edec1e5724a2b10444d38c6e4041762e426c1ab998cec6fe78ea0e26c828a77eb14748d2fff6f842f0b769d96555fe935151c0ee95e0158df312f0503d105337f5ba6ed60d9bec76b57f2b0d3c6fb0c0ec34cbe8f68f1856d46e15f4bfe429f1e55be5749fd72045b6671764f76387bf1ac14b55a993cbb9e32d4875e441041924ecfd0d42701978ffe3b0bfa808c6ab8a79a4c2775c58268b2c2c836a71f9a6f45bb10dcbea583629c1997a13ebf68cfd840a8d42113690a8a792aa8b5a76aa08e5f2198441dc3777ec9e61f437786706552a050000",
    ],
    [
      "ETag",
      "DeGV3YNeO+zON1b68da33Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d50c14ec24014fc97e7b58d2d0a09241ca469144388542146d390a57dd485b6afee6e6bb0e9bffbb670f0e0c1cbeeecbc9997996de128cb1426b093d9678dea7495a1595910a1ae73a3f9aaa8d4080ea011192bc58cde827c78fdfa5837b299cb28d87c8f56d3292b74f2818580490b7b8979aa61f2de42290a64db76abfa8d2c33a7ca32f3e54b781f464c14945a62b95e2cee668b103ae797ad3afecb12770e1c6817e11e159609da1495a20326666e0b6a515439ba9a6a95a0865edc0f324575251491cb8ceb7bb7ae3f1a78637fecdd0c47c3312b734a849154b278fdcce1c0901179445f5c10062c503de4aefbfe6c7ada96b8a0d8e2bf66be9dc59785b39341fda488e369b4c9bc73ca806c72c38d8caad18144f0373f48737e773f911e8a39c3010000",
    ],
    [
      "ETag",
      "aBoZCl5/XJuvivIiRCVz6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:54 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd04d7282300040e1bb646d1cd19186eeca5f510123820537190841200a184101a7772fd303bcc5f7de20a6943d1ea4ad39abc02718e2a532a7f35d835472a1693ae2619416bae86b64fa8e62195bb159a3bcbf392c5d0da894dd44fc345f3bdc0b1b62e4c7f2e2e99f487e8e2de9105419d78e74d519f8c33eaa03fb368bb3ccbb0e274ad496978c5fbdbabd65c3498feea4ecae54c19e4a97fb9b7b0f30a75d1dec61cae1d32d0c53f85394db3ad5248985ad58a3202baac36b2357ae51c13267cc5986d8ba24b86934bcf55e471e4670534087248635e234abee600658df14823d483171576b4599817f3b6987864d0354160b26c0ef1fcec01bb61a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-105-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6fda3014fd2b91f75a2029040a125a11a46ba412d6105a6dd31439e626759bc469ec50a18affbe6ba7a05695d6a7d8bee7dc73ee475ec9132fb76442129e3d3750efbf3d8a849c115034c3d76c2456bb47761fa8dbf96a3f58f8b2707ebf4ca788e09a256951e5d091a2a919c8c966ddcd6ad154b416a283893a8eed769ce1b93d76c676df1dba63244ac8d31b5e3e21fd41a94a4e7abda378371322cb81565c7699284eefbddd79afaac52330257b1f357b28237b5fa87ecf05a38a8b72ba59a38346421d434179ae4b3c51b7c9e5c7dc5d4e8b6e86e01d674019134da9b42f4cc14499f2aca94d56327925c6e7bb03597b37de3cb298c89ba28c4b5ac099b5a58ac66a5f817515ae96961f5cadc2e52cf25741bc9e5f7bcb5977bebad92c83b5757fed859ea5689283e15a53ebd2dc02bca0fe16a4e2a5518ff4b3567eeb90ff79309a80d212da603cb287d4b9b0c7499a8c587ad17793d48624b948462eed27361b0f60b04d8022cf881a162d45e9f4c1765dc7c60cce361e8cfa6e4c47308c91391a2669ea401fc8e18cbcd45cc182cb4a48de7688dc877ee4c551b809e6b3c83325a4b4c9d5a235a60b78ef51618108fa4f4d071de5029574bbfd20f2c2d93cf2efbc76c2379051b65f3fe38c539a4b4034adb1790aeaa5d862c348305b7a0b049b89fd3c062599fc7925bae7dac5bb969fe8110e50db55e64bd651e8073f8c9d23e28ee68d81ecda03a9d0f203d686ae0f7f11895bda6621b71b2ffc45daa71052a8a1645f4f13c126f0f5df76dc7c04e3eea38e5478c7e56152abb01ada25e2a6de37b6d31fb8e70362c0b5fa141b8e9d63db740e9d110a28d55b49ede663a5ad58234f200ce2fc03d3aec33f83a5da137b040000",
    ],
    [
      "ETag",
      "g7oOvjcWNtQCOy4DIsm1Zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f48a09b48295c483b66a4dd05a440f6d8c5961402cb07477a931c6ffde596a6dd336692f30337cb3bcf7e000cf6911810beb3479a950ec2f12540fbaf051569992742b7921110c40c5122283643a5c7856806cb0be799cb79c85bddb259d0e1132dc60cec03d409c621649709f0e50b01c692de4599517abba3340ed4b3d9c05fe6832a43ee791ee2773cfebf6bc3e1c8df362c4145bd5fc3fd6964703b67ced638c028b10b59652f02d866aa46d4a9697193624af4488126ab87e90085e954c70dea049c332ed86e55c9a6dab6d5ed98edd2632e32153292f089ecf482028ae58e6f31dd90487005197e438aeafaf344ea3da892e4793c069d602bf02a42d4e335cfd0d92e00da3eff0819d32f8ceb19c57853a5303efbefbdb7114eae751b7dda0ff83908aa23a23c168dc9f05ddf15473cb93f7de5ea19c0a4e494ad4215a66f3da6e39e67bae375c674def7195a8d08090d1ef71972a706396493cbe01221059637c020000",
    ],
    [
      "ETag",
      "TgPGVL1TeaFbCZU76V5wwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:55 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85546b4fa34014fd2b64f68b267d0c7dd04762dc6e6595a4a595528dfb483bd00b8e520699a16e63fadff70256edbabb2624d0b9e79c7bee63fa44ee79bc227de2f1f0218374fbe94e78a44240b1104f21bc4cf8d69f5c9c0f2eadee26ba9effca82c7931344f09c25d93a89a02a4596fa20fbf3592d4c4596b054882a0a55756a5475a3417b7a8f36db46bb8744095130e2f13dd26f954a64bf5edf27af85428411b084cb9a2fd62fe7f54da39ea4e20e7c25eb8739eb9846d63fc87a1a099f292ee293f90c1d6412d205ac198fd0c32b75e57d3ed4ae71b6ae8508de701f98ef8b2c56b92f94f0451cf0304b0b55d27f2285cf371f64668ecca1ab0d2773db3d5ab2754e5e1e6b4c6a8b450a328b54455b6251018f60c157cb3292dc6b5f9dc91823e8e09649904bedfac2744c4d5b4a85ee96da8f8cd22668a7dac03ed30e252c5b9bdbb63973b5a3d363eddc99cca7da979b030c7a5f81543c2e9cbbcc8b2077fddc5debfd50730253e8a40c2e3ad4607a97f6bcc0ebf841b7d9f6020a9ed7f53a6dd6f4a8df6b416be501439ecad50b168b45dc097014aca3d3158ea60d4d6852a3d35be90da31d18dd20f0216831a3d725bb0a794cb982332e132179d96172ed58aeb9709db93d1cb8665146c0b08b67a5b9bc88b73e151689a0ffd4b5cba35c60a67c5c96ed9ace60e85a5766b921230899bf9d3de08e042c92806896b2352848c762854d23d3c9cc72ad893d1821a318fb748f90a4fffde995e06e93a2cbaa7813d71ae38c06e369e1610fba625156a036e50769d006add246556fbb7aa3af37fb7aab4629fd4676bbcabfc5078e33b841432c4dd9f68f181669b472fa5fb216f8e257697eef422779b6174f64f773874f85e0452bd5c9e5dc746e4879e4400029c4fec74b85e022f0f11fc6fef22218af2fe6c18ba038eeb02ff32c7e0ae52ef375e1b764ebc8ee1aa400a7ea5dac478dfdd0728d5c11d610abe792cacb5b742a0f65f20584415c41dbb2cf31fa1b8e0c619a3e050000",
    ],
    [
      "ETag",
      "egQpiycOHGAQI8vlWUxufw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c1",
      "4e",
      "83",
      "40",
      "14fc97e75148a006629bf4d02a69314d559483314db3c003698187bb8ba636fc7bdfd21e3c78f0b23b3b6fe665668fb02f9b0c269094c56787f27055a07e362042d5555af1d552a3102c402d0a5612a97b2fac6771b658de960f8f3f71f2763d9b4e59a1d20fac054c8e909758650a26ef4768448d6cdb6ee5b09165fad01a265cbf068b2062a2a6cc10eb78b59acd5701f4d62f5bbbff9765d35bb0a324c21c2536299a14ada41da63a340595a8db0a6d459d4c51c1201e0685a4ae1592c866c6761ddf76fd913376c7ce8de77b635656940a5d52c3e2f885c381262daa88beb9208c582007c85df3e1fc1a6853e2823606ff3573cd6c7359383f68544f92389e4293cc39a7bc23935c73232d3bb42015fccdcb529fdffd09c97a487fc3010000",
    ],
    [
      "ETag",
      "oosD5ImAUdGH8iJOzUbY+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:56 GMT",
      "Server",
      "ESF",
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
      "90",
      "d9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "ff",
      "25",
      "cf",
      "e2a086ab6f62b92fc728425f322984436c888023e0f4dfcbf4077676f70d4896d1bec743db50063ec044b6da3a5b7b5cd571994fd09ece2c7ceddc9f5b9e365e6ef8a87d3298caf2510c95604f37b6da4c776e9c86e2bb62c6f11e0766fb54e6eaf692840026c8be3412814e6687d788b949da7ba5ef198f520e04d67897ba2733b4fcb47cd587f9ecb4b2509fbf904a3f113c1aa21ac9cca1a3b8eb86877532318af9408a6d3ad8615c668bb6c946518f8483f774dd2be27ba355300a930582c76a1f6f2dad8822471436896efa07a88015a023af3bdae37ac9dd499ab602ffed7898385d06e89474b403bf7f2c9d4e011a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-107-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b6d1208019248d11aa574654b4807a4dd344dc81843dd02a6d8b4caaafcf75d4cd3b5aab43e61fb9e73cfb91f3ca13b56a5688e1296dfb7b4d97fbae5093a4154e21c5ef7ec8f7139b6cdc0b8fe5195b7f75fcb487c7b5c2c00c13a96c0655dd081e06d43a898efc261def0b6c60de703483430746760d8637d66cc74d3b2ad1910052db235abee807e23652de6a3d1517c98739e1714d74c0c092f5fde470fe351ddf05b4aa418bdd51c818c187da0fab9e0044bc6abc52e0407ada04d4c4bcc0af0f08f9a26a76f730f192e8739801f18a19810de56b2f3052908af3296b78dca8ae64f48f97c7540a1bb7657914678d196555ce1929e6829963896fb9a6ae7c176a379fef936d82c236febc7e1eac2dd2c87abed7ab7f143edfac20d5c4de2a4a08aab2db45375f3e102fa291592554a3dea9e3be5e70e79ef07d311405ad03e183bba8d8da93e4bb2c421d9d4b4924ca749324d1c0b9b894e66133a49138a81a744150b57bc9ad1699666ba13133d35e389ad9b31b609898d896ee9638b8e2dc7408713f4d83049cf98a8b9607d87d075e0456e1c053b7fb58c5c554286db429ef5c6ba025e7b94502080fe53d3a18b320e4a5dbb3d3f7283e52af2aedc7ec26b9a63b20fef61c6192e0405346ea07992361b9e42c390bfdcb867005613bb3c06059aff7a425dcf3b17af5afe428f60809d5da9be288c02cfffa2ec1c1157b86815e4a13fa01a2cdf406de0faf01b90b0a57d16f47de7063f51ff14d08c36b4221f4f13c02af0f1df76dc7c00c3ee838e907087e521a253210ded9788a97a9fd986695b8e8914b891ef628e611fdbd6e5e832d29256f2b9a47ef3a1d25eac152f2008c2fc7dd5aec35f3af955207b040000",
    ],
    [
      "ETag",
      "yiz1P263R1WXnmjqJmTsKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92416f82401085ffcbf4584cd02a56120f686d4ba256110f4d63cc0a03a2c0e2ee62638cffbdb3d4daa66dd25e6066f86679efc111b6491e820dab24de95280e5731aaa92e3c9465aa24dd0a9e4b040350b198c89d6836ace9e6b0595d47db76d47ff61bee7edaed12218335660cec234409a6a104fbe50839cb90d6029e9659beac3a03d4a1d0c399efb9e307ea331eea7e3c1f0e9dde700027e3b21832c59615ff8fb5c5c9800d5f7918a1c03c40ada5107c838172b54dc9b222c59ae4a508504205570f62c1cb8209ce6b34a9d5cd76ad6e35cc4ebd63deb4ac5687c894074c253c27783e2381a0b862a9c75fc926580488aa24c75175ddd338092b27ba74c7bed5ac047e05485b94a4b8fc1b24c16b46dfe1033b67f09d63192f7375a1ee874fce6fc751a89f47dd39fee00721154575417c773498f9ce68a2b9c5d97befa0504e04a72425ea10eb66f3b6d5b6ccf75cfb5c674defb19528d18080d1eff19828b023964a3cbd018121e4e27c020000",
    ],
    [
      "ETag",
      "qr426Qjyjb+fk7fCYT2IvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:57 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91f70f68a54d7f26ad84582981452b294b5310daa6d6769c6248e2623ba00af5bbefe250a0631b52a4c4bef7debd3b9ff384ee781ea301227c795f30b9fe742b08aa21a6f11276d7d9b8d1f7cf3e8f8fef3bdf1eef2e0219f1d6e3e1212078c952385ba5ec40894252a606b3697d2945b1c2528803103a68daee41b3d7b2fbcdbeddeef6ba7d202a9626639edf01fd46eb951a341adbe4f5a510cb94e11557752ab297fdc643abb192e29651ad1abb391b9046353ec87a940a8a3517f9e16c0a0e0ac5e49c6598a7e0e1951a932fbbda758eb3fa12c00f9c324ca928725dfa02092af2842f0b6954d1e009199f6f3ed0d41b7ba3c81a4d6641b4b7c059495eec5b5859f3b964aa4875cd5a4051094fd99cc78b2ab2bab34ec3c93944c0c10d564c2dacabaf5ee859d656c3fa59d8769b5947d63038b17635fcc09a0581378dacbda37deb2c9ccc2eace3eb1d0c988f99d23c37d6234c5256da7e6eaffffe544b02d660a50ace1dbb879baedd27097168e2b6bb24b119212e71bab84d6cdaefb04e4c18069e2ed50d0be722a72db74dbac4656e2bee2524eedac4499afd16b163d7a56dca3a3dc7769a31dad4d0a3e49a9d70b5128a572d4657a11f79f3289c05a361e49932120c6d3ca9cc9545bcf5a9a14800fda7ae4d19e5023295e7e50791170e47917fe9552332664b4cd7d37b189204a78a011a4b9c31cde4b988a169e86232f5237f120cc7c030e77eb1452834f8f1f44a88d62bd3656ddee8743c1946bd8e71b0855ce2b4309887ea0335eb5d406c6aff961986e1f01a526329f1fa8f1894d333f4bf643078b3aa6cbe644465b6edaa8536bf36f0d410dca94a1d7d9f79e135aab642",
      "9630c972faf1f800d8043efe376cef2980e1a6421ea5610dd34a5599854a564d2dcf8cdf8add6c3b1da7870c58ea7731a76d6f8fa7d4281559c672fd5c52754f4da7ca50a15e401084610bfce00ca2bf0151223e5829050000",
    ],
    [
      "ETag",
      "ymL/9IG+LBq4KwkPNrTi2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d50c16e824014fc97d72b2460a3a9261e6a635b136a04a597c698151f08026fbbbbd858c2bff72d7ae8a1875e7667e7cdbccc6c0ba7bc3ec004f679f6d9a0badc6568420b22d44d69345f926a8de0001a91b1328de4faf81cca95889b4df1fd1ebe05b373389db2422747ac044c5a48732c0f1a261f2dd4a242b6ed76aadfc832739196592c37f39779c44445074b2ce320789c0573e89c5f3679fa9765db3950d03ec21415d609da145251818959d8825a54b2445753a312d4d08bfb41a6a8914211b9ccb8bef7e0faa38137f6c7defd70341cb3b2a444989c6a16c76b0e07868c2823fae282306081ea21774dfbf3dcd3b6c40d6d2dfe6be6dbd9f6b6707631a8578a389e469bccbba67c229bdc7023a31a742011fccdafb9b9bebb1f62ba68eac3010000",
    ],
    [
      "ETag",
      "fRpShFQpPaUuTjzVQMLBvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:58 GMT",
      "Server",
      "ESF",
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
      "646d1d2418a03bc028f251fc40914d062140001503d660a777afd323bcf703d22ca37d4f865b43afe0138ca9ac4fb3a9db69262973328fdb0c2d657fff4a5ff0a0973a93e14723493b4731ccad26147a4a2ef622161bcc0eb5e94496bf58236c9315ec365fce53e2cd59d41aaa6fe12bc809b352c9501f174e1ff72098f124aa5c8e51605964286926eaa7d39690e3c0aec53143c568a5e5c9576ce956b1ad7d4cc26bc1e07ac4bd9454553108aeb1c2f0ce5b43155e8ebd7e1473b98e9877872d1d56f98cefd1320c54f61d77e1eee9fa184c00151de3b427eccd85735d9f807f3b19c68ebe034c9a72cac1ef1f764c33041a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-109-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2bc8fbda04421e9048d19aa574654ac84648ab6a9a90712ed42d608a4dabaaca7fdfc5345dab4aeb276cdf73ee39f7c133b9e3e59ecc48c2b3fb06eaa72fb72221270414cdf0d5b928ddf3ebcb6fd623ab38bf516af5a3a1d97c8e08deb2242daa1c7a5234350339db6dfb592d9a8ad642f430516f604d7b83896d4d07536b389e8ca7489490a72b5ede211d135672669a47f17e26449603adb8ec3351bcbe9b0fb659d5e2169892e67b4d1365a4f989ead75c30aab828e7bb2d3a6824d4311494e7e8e11f759f9cbecfdde7b4e867087ee00c2863a22955eb0b533051a63c6b6a9d95cc9e89f6f9e640b6deca5b46061379539471490b3831f654d1583d55609c879bb5e107e79b70bd88fc4d106f9717de7ad15f6e56bb75b035ae2ebcd033144d72d05c636e9cea5b8017d4df8354bcd4ea51fbdc2abf74c8ff38989680d212ba60ec58133a70ad6992260e4bdde138492d48123771c67498586c3a82d13e018a3c2daa59b4c49a29b55d2761b1bd9f403ca2691253cb19c5ee9451668fc643db9d90c30979acb982332e2b2179d7217215fa911747e12e582e224f9790d22657679db1b680b71e151688a0ffd47468a35ca052db6e3f88bc70b18cfc4baf9bf00a32ca9eb6f738e394e612104d6b6c9e827a2df6d830122cd6de1982f5c47e1e8392cc7e3f93b6e7ad8b372d7fa54738c0d6aed25fb28d423ff8aeed1c1197346f34e4a13b900a2ddf606de8faf00791b8a55d16f26be785d7a47b0a21851a4af6f93411ac039fff6dc7cd4730ee3eea4885775c1e265b155643b7445cd7fbc21e0c5d7be8100daed587d8d0991cdbd6e668334201a57a29a9db7cacb4136be42b088338ff40b7ebf017786b8b8c7b040000",
    ],
    [
      "ETag",
      "7Hn8FYVB0wcpiihttLJuag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92dd4ec2401085df65bc2da12854db840b1054c28fd8962b43c8d24ea1b8edd6dd2d8410deddd98a68d4446fda99e937db734e7b8097348fc18365ba7a2d51ee2f56a89f4ce1a32ab956742b44ae102c40cd56440ec3619cb80ab7bd89cf839d5d7793babb6bb78950d11a3306de01921479acc07b3e40ce32a4b548f032cb17556781de17661884fe60724f7d2662d34f66a351a73beac3d13a2fc64cb345c5ff636d7eb46023963e2628318fd06829a4d860a407c6a66259c1b1a64429235450c1d583951465c1a410359ad41ab65b6b3897b6db70edab96d37289e422623a1539c1b3800482169a715fecc8263804c8aa24c74975ddd2388d2b27a61c4c42a75909fc0a90b624e5b8f81b24c16b46dfe1033b65f09d639928737da6ee468f9ddf8ea3503f8fea75c2fe0f42698aea8c8483713f083be3a9e1e627efddbd46359582925468426cd8cd9bd6b563bfe77a2b4cd6f41e4fcb122d8818fd1e0fa9062f615ce1f10dab2a74817c020000",
    ],
    [
      "ETag",
      "KTKdf9sevDNRlSw0/9f/9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:59 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85547f4fdb3010fd2a91f70f88d22684a66925c43a082c1aa490a630d8a6d6712fc590c6c5764008f5bbef9c507e0836a448897defdd7b773ee791dcf0624a7a24e5b3db12e4c3976b919206014d6766777479721fee6f5cfd3cdeb83c3e0862f9e3f6e074670711dcb0149d2f72d854a2940c546f346ccea42817540ab18989361dc7de74bc2dbbeb746db7edb5bb4854906747bcb841fa95d60bd56bb556e2cd9910b31ce882ab2613f3e7fdd6dd566b21c53530ad5a6f355b28a35a9fa8eee68251cd45b1331aa28352811cc39cf21c3dbc50a7e9d7b7b99b9cce9b3304df710694315116daf8c2144c14199f95b2ca4a7a8fa4f2f9ea830c83a3602fb1f606a328599bd0b9214fd62daaacf158822a73ddb0265854c67318f3e9a48e2c6eac8378708c1174704515a88975fe3d8803cb9a18d0efd2b65d66ed5afd68df7acb0f236b1445c130b1d676d7adc378303ab1be5dbcc1a0f12928cd8bca7642d31c8ce5a7d686ef4fd410a8461b7570dcb13deaf87637cdd20ecb7cb79d6636a4a99f76dad44d6dd6dd86ed690a1479da64af58b41045ea67be3d75c173a63e3899eb53605dcff3fdcc43b8dff132e6bb1d70c9b241ee25d7b0cfd542285eb7979cc761128c937814edf593a02a23a3d8c2fdda9c29e2b54f8d4522e83f752d4d940b54326715464910f7f792f02ca8c7e30866943d0c6f7140329a2b403495740e1ae4b19862d3c8c9601826e120ea1f21a33af393154291deafc71742f2b0a8baacabb7d1f2b62bfd15e08ce66585b8ab3f88d326cb65e3df29fa71dcbf40592a257df838fd87f92b7cb5aa2d3eeb11a3b65a6d91e59f253e0d8277a9ce4e4e47417c41eaad18329050b0cf4707c155e0f37fc2ea7e22186f28ea288d6b9c54a68c0a93504f2c9f577e6bb6e376b71d975460a9dfc53c776b75342687c9087328f45349f5fdac3a6542a57a066110072d0aa3438cfe057fcdab8321050000",
    ],
    [
      "ETag",
      "bUZPwID+hXM+ZMFERrKqFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff8b776db516045291388cadda90108332364d134221b85da1adb3240521c47f9f1376d861875d12e7f9b3f55eceb02f9b2d0c6053165f2dead34d8176ee8a0c4d5b59c397a2c620048056144cf677325d2e660ff931bb4d5e9f5591be99f7f970c884919f580b189c212fb1da1a187c9ca11135f2d87aadfd46c6ec4939653c7d491fd38c859ab64e982e2793bbd124854bf06b4cedff35b2ba04b0a34d86396a6c243a174ad30ea51dbb8046d4aac2d050ab251af0b06f149a5a253451c84a18c75118f73b51122751b7d7ef254c5624852da96178b9607360c98a2aa32307840e03da979c35f7e781e5ae0f71f080f3f6772f76bdd5cfc2d1c9a29969627b069db3e8eaf29e9c73cb89ac6e310029f89b9f4a7b7d5fbe014e8ffb35c3010000",
    ],
    [
      "ETag",
      "6jcEUSPDfwR/9VOpgEWsYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:18:59 GMT",
      "Server",
      "ESF",
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
      "bb642d0ef28be90e4a28d4a60854a4d9303144c0a27c55c0e9ddebf408ef3d00e35cf47d3ad43fe2025ec0c414b4e4cb4db3b6d23cdbfa7d92987bf81618fe6d8c710c19f9c821b961bbf83c0c540a8b5291abca6e8ec4399d2319d2c33bcc487e1563b2ce569652efb2864512bf6b3898748c5d6424570722a9a46ae7f1aacb745250bd72a3adc5a0c889355e6acc4eaa71844a51b6e7164f5cc6ad999aed7df60a7f25be79a0c5b65479f6b8de6b74a61be6c0e66accafdba36c873ed1ca9de798fde49a5f3484ee98f37658a16970831a2c80189bb2137d5a3eb9aa8ed002fcdbd3616ac433c012ac131df8fd03a72693fe1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-111-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda24409e448ad628a56ba484b484b4aaa609d9e642dd12ccb0c95455f9efbb98a66b5569fd84ed7bce3de73e78214fa248c8943091fdaea17afef628193923a06986aff5e1eeba7fcbf24b1bae64541e142deeaf6f6633448886a5e8becca1a3645d7150d3ddb69b55b22e6925650713751cc7e93823d7f61ccfee0f47430f890af274258a27a43f685daa69af7712ef66526639d052a82e97fbb7f7dec1ed95957c04ae55efa3660f6554ef0bd5efb9e4540b59cc765b74502ba862d85391a3877fd4849d7fccdd1574dfcd107c101c28e7b22e74e30b537059a422ab2b93954c5f88f1f9ee40b6feca5f44169779bd2fe282eee1cc4aa8a6b17e2ec1ba0c376b6b195c6ec2f53c5a6e8278bbb8f2d7f3ee62b3daad83ad7577e587bea529cbc170ad99756e6e015e503f01a54561d4a3e6b9517eedd0f2f3601a024a2b6883f1d81e5167627b2c65639e4efa4396dac0d8848d87b4cf6cee0d609030a0c833a286450b595044250397c6e3893b8c07036f107b0e67b1c7123e76199fd87d971ccfc89f4a68b810aa944ab41d2277e132f2e328dc058b79e49b12525ae7faa235d614f0dea3c60211f49f9a8e4d5448546adabd0c223f9c2fa2e5addf4e780519e5cfdbdf38e394e60a104d2b6c9e866a2d136c1809e66bff02c16662d7a7a022d39f2fa4e979e3e25dcbdfe8110eb0b1abcd976ca37019fc30764e885b9ad70672680fa444cb0f581bba3efe42246e699b85dcecfcf09eb44f21a45041c1bf9e26824de0ebbfedb4f908c6dd471da5f18ecbc355a3c22b689748987a5fd9cec076dc0931e04a7f8ab9a3d1a96d4d8e2623eca1d0af25b59b8f95b662b57a036110e71f98761dff0238d6e3d87b040000",
    ],
    [
      "ETag",
      "uvWP3VblF0eHoTpvsanYPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92d14e83401045ff657ca549d1162d491fa85625c1aa2d1aa331cd16064a05067717b536fd7767b156a326fa0233c399e5de0b2b78c8ca185c9865e9638d72b993a2be34c518559d6bc5b78a4a8560016a913219dceed2cdedcbc27f75d26baf53ceaf9f66e8f5fb4ca8688e85007705498679acc0bd5b41290ae4b588f2ba28a74d67815e56663809c7fee884fb8262d38fae82c01b0443585bdbc55868316df87facddaf2d58d06c8c094a2c23345a2a490b8cb46f6c2a515439b614d53242050ddc3c4825d59590442d9eb46cdb6ed9ce6ebb67f7da7b5da7db6332a748e88c4a86af262c103469918fe9996d82c3806c4a769c34d7271e6771e3c494fe28743a8dc0af006b4bb21ca77f832c782ef83b7c609b0cbe73a2a0bad45bea3838f77e3b8e43fd3ceac80b873f08a539aa2d12fa67c349e89d5d18ee7ee37db0d4a82e2471920a4d8876bb73d0dd77daefb91e92c99adfe36a59a30591e0dfe334d3e0262257b87e03a08ac0fe7c020000",
    ],
    [
      "ETag",
      "LZ2oXZxjIz6gVA4nhVvbeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:00 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8554796f9b3014ff2ac8fba795720049c821555dd6b00ea9252d21edaa6d4a8c31d42d606a9b1eaaf2ddf7304daf1d952205fc7ed77bb67944d7ac88d104452cbda9a878f874c523d44254e11456f3ecfed4ea5d39df7d67ee09713e4beeed9bbbbd3d40b09a25715e66b42d7925089593e5a2930a5e955870de06a1b665d96dcbb1cdb135367b03673006a2a45972c48a6ba05f2a55ca49b7bb35efa49ca719c525931dc2f3e7f5eeaddd2d05bfa244c9ee5bcf2ed8c8ee07aefb192758315eec2d1790a09254ac688e5906195ea871f4f9ad7687e1bc9302f896118a09e155a1ea5c20417891b0b4125a154d1e91cef9ea012ddc23f720340ee64b3fdc59e3bc26af770d2c8dd54a505965aa65aca1a9846574c5e2755329af8dafc1fc182a90e0124b2ad7c6f93737708d97a5b5f1b332cd1e31f68da93f33deaa78beb1f47d77111a3bfbbbc661305f9e185f2ede60207e4ca562850e1fe228a375f0a7017b7fee6b4dc00a9c9be26a683ad81a99e32889862419f5065162d2281a45c301ee452619f7693f8e28069eaad5350b17bc18da511c932126763c8a1d128fcde1c0366d0727043447fd3ea8399135409b16ba134cd119932597ac19323a0fbcd05d85c1d23f9886ae6e23c130c85913ae6ee2754e054d02e83f7d6dea2ae3e054ef98e7876e303d08bd33b739244734c5e4617103c724c199a480c602e7545171cc63181a3a992fbcd09bfbd32360e89d3fd922249afc787c21840fa59eb2d2ff6811069e7fa8036c116738ab34e4b67940d312b2a2cda6f56f9969104c2fc01a0b811fded5a01da75fd3ff62a1f1faad89b9b5b450edb67db3d1e6d7067e2d04b7aa5147a74b37b840cd5240132a68413e3e3e00d6858fbf0edb9b0a60b8abe02315bcc36925b276218236a796e53a6fc3b6fae6d83691060bf5be6659bde1767b6a8d5a91e6b4504f2d3537554faa2e55f2190445386cbedea9cd6f5234dd122b050000",
    ],
    [
      "ETag",
      "mlxQ13j6XN6OIrrWDfx2qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d90416f82401085ffcbf4584800a3a9261ed4184b42acc56a93368d5961a42830dbdd210d21fcf70ed6438f3dedce9b6fdebed9162e7995c2048e79f655a369ee32e4e7fe12a3ad0bb67268aa2c8203c82a1352ef576fe93ef45e9f1e02afbedf2cb6039e65d3a91036f9c452c1a485538e456a61f2de42a54a94b1c3c15c1d05e346f74ab87e59ae96b10825a5bdb0de45d16c1e2da173fe8ce9cbbf463e3a07ce748cf18406ab04fb14dad019130efb05ad2a7581aea5da2468e10a5f1b99a15a2b43e48ae2fa7ee0faa3c01bfb636f301c0dc742169428cea91278b79570c0c4aa88e95b16040f6ef5bc61b41b43e26e31bd75c47241fdc32c81d8d4e840a2e4971e73feadbb1f0680e8fd82010000",
    ],
    [
      "ETag",
      "pVGZdVI0WO820u+PCS3tAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:01 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb64ad0e030992ee04195ab160952ab8c944081f058c099a60a777afd323bcf703689e3329c970bdb01ebc81919a7896cf42eeb8a4cac9a25e2d477b8310f1bf8f78481ae54b445d0fc1b690dc0be9d7f46e59d5c2f043333b394f58a1865eb69b2bbde0a252a76a6c6daf5c1da254411b87d3b3b9467547773ad2696177b8e7cba9f1944ee23941af51398703136ae5af19bc7989f0b9ab3f3885fb7d4b237b5ef766f128e236d0c9e7f69dc5c43199b46cf2b86fa0a4e276c85265c4b548d5f971181b182b1994fa98ed83aecb6ed1517030014cf34630499a17d742184fc0bf9d0c2367af009751c104f8fd032fbef01b1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-113-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbda2490900791a2354ae88a94900e48ab699a90712ed42dc1149b545195ffbe8b69ba5695d64fd8bee7dc73ee8317f2c88b1d999284674f3554c76f0f2221170414cdf0d5bf79489dabe5c41b6c6c3176ece3215cf59f673344f08625e9becca123455d3190d36dd8cd2a5197b412a283893a9635e858a3bee9588e39188e860e1225e4e98a178f48bf57aa94d35eef2cdecd84c872a025975d26f66fefbd43bf5756e2019892bd8f9a3d9491bd2f54bfe78251c54531db86e8a09650c5b0a73c470fffa8bbe4f263ee2ea7fb6e86e0036740191375a11a5f98828922e5595de9ac64fa42b4cf770712ba2b7711194ce4f5be880bba870b6347158dd5b104e32ad8ac0dcfbfda04eb79e46dfc385c5cbbeb7977b1596dd77e68dc5dbb816b289ae4a0b9c6ccb8d4371f2fa8bf03a978a1d5a3e6b9517eed90f779300d01a525b4c1786c8ea835319d244dc62c9d0c86496a42924c92f1900e12933936d8bb0428f2b4a866d142140327351dc71ac5a94d9dd84e6d88e9909a714aedb133e9270cfa949c2ec873c5152cb92c85e46d87c85de0456e1c055b7f318f5c5d424aeb5c2d5b634d01ef3d2a2c1041ffa9e9d444b940a5a6dd9e1fb9c17c1179b76e3be11564941dc3279c714a730988a615364f41b5163b68967bbe769708d613bb39072599fe7e214dcf1b17ef5afe468f70808d5da5bf248c02cfffa1ed9c11b734af35e4d01e488996efb136747dfa8348dcd2360bf9b975835fa47d0a20850a0af6f53411ac035fff6de7cd4730ee3eea4885775c1e261b155641bb445cd7fbcab66c6b341c120daed4a7d8c4999cdbd6e46832c21e0af55a52bbf958692b56cb37100671febe6ed7e92fdbace6447b040000",
    ],
    [
      "ETag",
      "NPjf9FD8I3O4o794yvSL2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f82401085ffcbf41513f04295c407add704ac457c6a8c5961502cb07477a9b1c6ffde596a6dd336695f6066f86639e7c0099e923c020736c9f6b94471bcd9a27ad0858fb24c95a45bc1738960002ab62572e08d169b6c609aedc164332ee46bfdb5e91dba5d2264b8c38c81738238c13492e03c9e206719d25ac8d332cbd75567803a167ab808fce96c4c7dc623ddcf96aedbebbb43381bd7c58829b6aef87facadce06ecf9c6c71805e6216a2d85e07b0cd554db942c2b52ac495e8a10255470f5602b785930c1798d2635cb6ad42cbb6e76ac8ed968d9ad0e91290f994a784ef07241024171c5529f1fc826d80488aa24c771757da17112554e74399d0576b312f815206d7192e2fa6f9004ef187d870fec92c1778e65bcccd5951ab9f7bddf8ea3503f8f1af482e10f422a8aea8a04536fb8087ade5c73ab8bf7fe51a19c0b4e494ad4215a66b3ddbab5cdf75cefb8ce9adee32851a20121a3df6392287062964a3cbf0153e35c977c020000",
    ],
    [
      "ETag",
      "DMFSbmD008DHbGpsz2z4Mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:02 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8554fd6f9b3010fd5790f74b2be58310f229555d96b09629252921adaa6d4a8c31d40d608a4da7b4caffbec3346db36eab8404f6bd77efddf9cc13dab0344043e4b3e8bea0f9f6d31df7510d518923d89d3eda23326f5f4ee2f34df392751fe3f41b8d4e4e00c14a96c04916d3bae0454ea8182e178d28e7458673ceeb90a8de6a99f556d7d007ad81deee743b03200a1a8753966e807e2b652686cde65ebc11711ec514674c34084f5ef69b0f4633cbf91d2552340f359b20239a1fa89ec69c60c9787ab25c808342d07c4513cc62f0f04a0dfccf87b91b0c278d08c00f8c504c082f5259fa821484a7218b8a5c6545c327a47cbef9400b6b6a8d3d6d3c5b3aded11a2725797dac61a1ad563915452c6bda1a8a0a594c572c5857916ca37d756717100107b75850b1d6aecf2dd7d25eb7d6da8f42d7db443bd546ce443bcc623bdad271ac85a71d9d1e6b67ee6c39d7bedc1c60c07e408564a932ef613fa6a5f1e706dbefcfb5246009ca5570d5d3bbb8d5d7077ee8f748d86f77fc50a7bedff77b1ddcf6753230a919f814034f96d9150ba73c1df858eff4024a024075029318a6d91df8866f0e8c36ee767a46afdf0a0d8a7635f42b67924e98c8b8605593d1b56b7bd6ca7397ce78e459aa8c1043232795b9b288b73e251409a0ffd4b52ba38c83527962b6e359ee68ecd957563524531a61b25ddcc39884381614d038c7099534bfe001340dcd670bdbb367ce680a0c75f2f33d42a0e1f7a75782b7cd5497a57aa385e7dace9932b0475ce1b8509087ea03e10cbca2ddaef6ef3423d71ddd8034ce73bcfd2306e574cd92fe17098557abcae65eb2854ab5fdca40bb9f3b786a086e55951d5d2e2df706555b2e0d694e53f2f1f80058053efe3bec6f2a80e1ae828e90b0866925a2542139ada69625ca6fc56e996dbdab2305cee5bb98d133f7c753e62833d284a6f2b9a4eaa6aa4e95a142bc802008c3e6a893dafd06899bbcfa2b050000",
    ],
    [
      "ETag",
      "LzIAcP3QDlHk/Qi6zlnJeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d90d14fc23010c6ff97f3d12dd9d0815bc283188210b2c8946834849471ccc1d69b6d872184ffdd6b3186475fdaeb77bfbb7c5f8fb02be51a125895c5578bea7055a099d92243dd5646f3d590d4081ea01105934a5e8feae87524de2693224def7ae93bf566fd3e133affc45a4072844d89d55a43f27104296ae4b1e552b98d8c9943639571fa321c0d33166a5a5b219d4fa7f783e9104edec558b3fbd7c8e2e4c19656196e50a1ccd1ba68146d3137631b508bbaa9d0d7d4aa1c3538d8350a456d231491cf8a1f86b77ed8ed047118073751378a99ac2817a624c9f0fc99cd812123aa8cbe3920741850aee4ac1b77ee598e5c88bd03acb7cb5ef7af17dadee277e1e060503f29627b1aadb3e0ecf281ac73c3898c6ad1835cf0373f96e6fc3efd00c4aed1d9c3010000",
    ],
    [
      "ETag",
      "rn+Gm5WGaXJJgNN87NZo7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:03 GMT",
      "Server",
      "ESF",
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
      "ff1dd0497282401400d0bbf45a2d1099b20395310e485071d3459adfcc834090d6cadd63e508efbd504408f43d1e9a026af48158b4541764e1b68a8e13fab5d6c740916d7bce4bda74c54a9bec7267bf4ef6ad65ac39ee507a7414382c7447380fc79f1d319852a6552e47c4712e0f6bb7ec93edd61ecb8758b378655653c379725a73b42b4e53d03cc54057b5db438aa5fb408ab0b759e2db313900a5a326eb37dfb4f696a91a9ba0e2e9e5aac9279d95e1737e78e6a35f32ed067cf3895d4b584e2beefc3dda0a84392d27c303560c1b8d1a96db77ab5494f37b06219a2198daac831e676fae20aaea0cfddbf1c05a7807e81075d0a1df3ffb509b771a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-115-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbda84771222456b94d23552423620edaa6942c618ea1630c5a65d55e5bfef629aaedda4f513b6ef39f79cfbe019ddb13a437394b2e2bea3edd3a75b9ea21344252ee055e4d2cdc8febbbe24b65dfe6aaeaff568f5b8580082f52c81aba6a423c1bb965031df47e3a2e55d835bce479068649aeec89c5886677a86ed4e5c0f888296f986d57740bf91b211735d3f8a8f0bce8b92e2868931e1d5ebbbfe60e94dcb6f2991427fafa9838cd03f50fd5c728225e3f5621f81834ed036a115662578f843cdd2d3f7b9c70c57e302c00f8c504c08ef6ad9fb821484d7392bba566545f367a47cbe39a0c8dff8ab5823bcecaa3aa971454fb40c4b9cc8a7866ae7e16eabad83f35db85dc6eb5d9044ab0b7fbb1caf769bfd3688b4ab0b3ff43589d3922aaeb6d04ed52d800be8675448562bf5b87fee955f3ab4fe77303d01a4051d82c9d49860736678699e4e493eb3dd3437689aced2a98bedd4209e439d2ca518784a54b170cd6b975a56663b5e6219a69338869d25a9eb5a896519993171ac7ce2ccd0e1043db64cd233261a2ed8d0217415ae633f89c37db05ac6be2a21c75d29cf06637d016f3d4a281040ffa9e9d0471907a5beddeb20f6c3e52a5e5ffac38437b4c0e429ba8719e7b81414d0b885e649da6e79060d43c172eb9f01584deceb3128d0fcc733ea7bdebb78d3f2577a0c03eced4af545511cae832fcace117189cb4e411e86036ac0f20dd406ae0f3f01095b3a6441dff67e788d86a790e6b4a535f9789a0056818fffb6e3e60318761f7484843b2c0f11bd0a69e9b0444cd5fbc2361d7be6cd9002b7f2ef98634ced63dbfa1c7d465ad15abe94346c3e543a8875e2150441987fa0da75f80d8bb4d2407b040000",
    ],
    [
      "ETag",
      "sft5dcUX/Ac33lxpYY/SCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92dd4e83401085df65bc9426455bb424bde8bf44acb5a5de98a6d9c240a90b8bbb8bda347d7767b156a3267a0333c337cb390776f098e611b8b04a93a712e5f624417d678a29aa926b45b742e40ac102d42c2132c97bf7c360d33f2dc6d7bdd7c443eef9a3a4dd2642856bcc18b83b8853e49102f7610739cb90d642c1cb2c5f569d057a5b98e12c987ae311f599884c3f9efb7ea7eb0f606f1d1723a6d9b2e2ffb1b6d85bb011ab29c628310fd16829a4d860a83d6353b1ace05853a294212aa8e0ea412245593029448d2635db6ed66ce7acdeb25bf5f3a6d36c11c945c8742a7282e73312085a68c6a7e2856c824380ac4a721c57d7671aa751e5c494de38701a95c0af00698b538ecbbf4112bc66f41d3eb04306df39968932d7476ae8df767e3b8e42fd3caadf09063f08a529aa231278378359d0b999186e71f0dedd6a5413292849852644bbdeb86c5e38f5f75c7bc2644def71b52cd18290d1ef71956a7063c615eedf009f8106197c020000",
    ],
    [
      "ETag",
      "gnCVFTjD+pNKCxgIelILGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:04 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "79",
      "6f9b3014ff2ac8fba79572003989547559caba4829e90869951d4a8c7950b704a7b6c91455f9ee7b40d363dd562952c0ef77bd679b0772c7b3880c48c893fb1ce4eec3ad08498d80a609aede4bd1bce697364c86bb6924be2da260b24d4e4e10c10b96a2eb4d0a752572c9400de6b3462245bea152883a0ad52dab5bb7bab6e9588ed9ea743b0e1215a4f184677748bfd17aa306cde6c1bc910891a440375c3598583fad37b7767323c52d30ad9aaf3d9b68a39aefb89ea68251cd4576329f61825c815cc29af214333c53a3f0e36bed06a7eb4682e02d6740191379a68b5c28c14416f32497a52a193c9032e78b07327327ee283046d3b9171cade8ba20af8e0daa8ce55282ca535d3356d854cc5358f26855553677c6677f7a81154c704315a89571fdc5f55dc3584554c3caf8919b668b19a7c6d03b335e2b8c3d63ee79ee2c308e4e8f8d737f3abf343e2d5e61307a044af3ac0c1ed0308522f4e370c76ff7b420508d41aae2b26776a9d5379d300e7b2ceeb73a616c4218f6c35e87b64293396d68472150e4e942bd64d14c64ac6b39603acc6985acef403fb4fbd06d85ed5ebb6de16a9fda2863598cec6be497e41aceb8da08c5ab01936b7f1cb8cbc09f7ba361e0966dc414877856852b9a789953639308fa4f5ffba2ca053a15bb35f602d71f8e82f1955b1d90092494ed66f77844629a2a403495740d1ae485887068e4723a1b07e3a9379c20a3dcf5cb034291c1f7876742b0db9453d6e53f392b1ad8bf10bca2695e02b6d503b14ddbac9b76ddea90fdbef66fa5a1ef0f17e84ea5a4bb3f6ad851b75dd0ffe253e2cbb72ae9c1d72285db530ab2ffb9c75f8de0a5aad4c9d7b9eb2f48b5e4430c1232f6fe0942705978ffe370b8a808c6ab8a3e4ae33b1e58a60a1726a13ab87c5de6add856bb63f63ba4044bfda666f7ba871d2a340a455843a61f5baa2e6a39a9a294ab271016f1bc",
      "7963ef1cabbf019af0e16d2a050000",
    ],
    [
      "ETag",
      "qro/WiP2eLAyOdoZYdTLvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82",
      "401085ffcbf40a894824d1c48336d49a505bb1d6a48d312b0c88024377171b62fcef9d5d7be8a1875e7667df7c33796f2f702aea1446b02ff2cf16657797a35e9a2246d5965af1d550ad101c402d7226437a7e7f382f9f569b191d36f4a6fc81e826e331132a396025607481acc0325530fab8402d2ae4b1dd4eda8d8ce9ae31ca7cf11acec298858a52232cd651349946215c9d5f63cde95f23dbab0347dac798a1c43a41e3a29174c444cf4d4025aaa64457512b13546061dbc825b58d90442e2baee705ae17f47b436fd8f307c160c8644989d005d50caf576c0e346951c6f4c501a1cf80b42567cdec7966d9b721ce1630defeee79a6b7fd5938ed34aa17496c4fa171d6bbb9bc27e35c73222d5b742011fccd8f85bebdafdfabf10907c3010000",
    ],
    [
      "ETag",
      "EoOZFvQMSWGohWoVs35ayA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:05 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb642d0e2001d35dc136050afe180b6c1848221fab84f0a7d3bbd7e911defb012921ac6d93aebeb107780173aaa23559bb7c6b2639a9fab0ffbed4d43ff4ae6e51823d38c97a5e89b650e87199601c20c76fdc40bc399918fb60f6e8976b7bf78e0d8b4917fe51191ad15a2c0df9d90a21297da262d5c67a4e5833d57ecccc7847836277d8471c6a1ec1e1dd38f268f4b148244b3edf88adca1649544447450a736d601e8c87f17d5223db6bf8762978b99771ed779fe326ca2eb989a07d0da46ba56442680f549cd2da686c832dce2b022bc0265e0ad626e593bb8108adc0bf3de966ce9e01264b0513e0f70f4f28f9451a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-117-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6fda3014fd2b91f75a20141208125a194d5734086b08ada6698a6ce726751be23476baa18affbe1ba774ed26ad4fb17dcfb9e7dc8f3c917b5124644298c81e6aa8f61fee2423270434cdf0f5a6f8e5787ee852ed46cea72fb6a3e77b7e359d2242342c4577650e1d25eb8a839a6c37ddac9275492b293b98a8d3ef8f3a7df7d4f6fa9e3d705cc743a2823c5d8ae21ee9b75a976ad2eb1dc5bb9994590eb414aacbe5eee5bdf778da2b2b79075cabde5bcd1ecaa8de3baa1f73c9a916b2986e37e8a05650c5b0a322470f7fa8093b7b9bbb2be8ae9b21f85170a09ccbbad08d2f4cc165918aacae4c56327922c6e7ab03d9f84b7f1e595ce6f5ae880bba83132ba19ac67a5f827511ae57d622b85887ab59b45807f1667ee9af66ddf97ab95d051bebe6d20f7d4b539683e15a53ebccdc02bca07e024a8bc2a847cd73a3fcdca1c5bf83690828ada00dc623dba5fdb1edb1948d783a1e382cb581b1311b3974c06cee0d619830a0c833a286450b59f0be97d894a5314f3d160f2149628fa6344e5c6f3c845396406a93c309f959090de742955289b643e4265c447e1c85db603e8b7c53424aeb5c9fb7c69a025e7bd4582082fe53d3a1890a894a4dbb1741e487b379b4b8f6db092f21a37cbf79c019a7345780685a61f334542b9960c348305bf9e7083613fb7a0c2a32f9fe449a9e372e5eb5fc851ee1001bbbda7cc9260a17c16763e788b8a6796d208fed819468f9166b43d7871f88c42d6db390abad1f7e23ed5308295450f0f7a789601378ff6f3b6e3e8271f7514769bce3f270d5a8f00ada2512a6de67767fe88c072e31e04aff1d736dc73db6adc9d164841d14fab9a476f3b1d256ac562f200ce2fc03d3aec36f6ba91e6b7b040000",
    ],
    [
      "ETag",
      "Wnx59ER6at6T5BK05tCycQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcb782d091528d284435194268008e582216469a7586c3b7577ab41c27f77b6221a35d14b3b33fd66fbde6bf7f098e411b8b04e364f25caddd906f59d29a6a8ca542bbe15942b040b508b0d93341a5ceb4ee3355a0c7436906d7f11cc22afdb6542850f980970f7102798460adcfb3de422435e0b292db37c557516e85d6186b360ea8f6fb8cf2832fd783e1c7abd611f0ed66931125aac2afe1f6bcb83055b5a4f3146897988464b21698ba1f68d4d25b222c59aa25286a8a082ab071b49652124518d2735db6ed76ce7bcdeb13bf546cb6975984c29143aa19ce1f98c0582262dd229bdb04d70189055c98ee3eafacce324aa9c98d21f074eb312f815606d7192e2ea6f90053f08fe0e1fd83183ef9cc8a8ccf589ba1ede7abf1dc7a17e1e75e505fd1f84d21cd50909fc517f1678a389e19647efbd9d463591c4492a3421daf5e645abedd4df73bd249335bfc7d5b2440b42c1bfc720d1e0c622557878033952fb287c020000",
    ],
    [
      "ETag",
      "oMHFt93zdZHtmHr7IZTSdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:06 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2a91f70f48fde1b4699b5442ac2b81456bd392a620d8a6d6719c6248e2123bb00af5bbef9250a0631b52a4a4bef7debd3bdff509ddf134447d14f0d57dceb2cda75b11a01a628aace0f4d2f8ea5df7babff8b751ee3e8ee8e92c7db4ce8f8e00c10b9624c93a667529f28c32d99fcf1aab4ce46b92095107a1baae9b75bddbc2966ee176a7dbb18028591c8d787a07f41ba5d6b2df6cee92375642ac6246d65c36a8485ece9b0fade63a13b78c2ad9dccfd98434b2f941d6e35850a2b8488fe63370904b962d5842780c1e5ea961f0795fbbc149d25801f8815346281579aa0a5f2041451af1559e95aaa8ff844a9f6f3ed0cc1ed9435f1b4ee6ae7fb02449415e1e6a446a8b45c6641eab9ab684a2221eb3050f9755647da79d7a933144c0c10d914c2eb5cbafb6676bda522a70b7d47ee418b7a976ac0ddc136d5fc271b5b9ebda335f3b383ed4cebcc97caa7db9dac380f79049c5d3d2b94f829815ae9fbbebbcbfd482401438a9828b1eee12ddc45610053d1a99ed4e1061160466d0eb907680a96530230c18019e2ad44b1649454a5a189b5d9332dc090826816186049b94747b96118601b1b0de0d2ddd40db1a7accb862275cae85e45587d1a5e7f8f6c2f7e6ee70e0db651911812e9e54e68a22defa54502480fe53d7b6887201998aeb725cdff60643dfb9b0ab0919b115a19bd93dcc484462c9004d329230c5b2b108a169683a9939be337107236094d73edd2124ea7f7f7a25f89b75d96555be91ef8ce18e06e369e96107ba20715ea21eaa0fd4c22d5cc7adbadef1f5565f6ff775a38131be46db6deddfe203cf1b5c8121926564f3470c8aec1a05fd2f594b7cf9ab32bf73a1a322db8b27b4fdb985a78660d12a75743eb7bd2b541d792c62194be9c74305",
      "e032f0f11fc66e79010ceb0b796011148719a6b2c8423356cd324f4abf155b377a58efa0129ca977b156dbdc5d5aa15128b284a5eab9a46a79cb4e15a15cbe80200823e83aee19447f03f8ea13043e050000",
    ],
    [
      "ETag",
      "W4HRZ76xiKLuNwLcFSnw9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f6f824010c5bfcbf40a09683495c4436d4835a1a68224fd13635618280a0cdd5d6cacf1bb7776eda1871e7ad99d7df39bc97b7b8643d5e610c0ae2a3f7a94a79b12f5ca1431aabed68aaf8e5a85e0006a513299545fa94c5291afe743efe5f9317d6d07c7d574ca84cadeb111109ca1a8b0ce15046f676845833cb6dd4abb91317dea8cb258aec3873066a1a1dc08cb348aee66510817e7d75877f8d7c8e6e2c09e76311628b1cdd0b8e824ed31d30b135089a6abd155d4cb0c1558d8364a497d272491cb8aebfbb7ae3f1e78137fe20d47e3d184c99a32a12b6a194e1336079ab4a863fae480306040da92b316f63cb23cb4218e1630defeeef9a6b7f959383b69544f92d89e42e3ccbbbabc27e35c73222d7b742013fccdf34a5fdf976fcd04a50cc3010000",
    ],
    [
      "ETag",
      "SizUrSUadTH30YXMUZn2vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:07 GMT",
      "Server",
      "ESF",
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
      "c9",
      "72",
      "82",
      "30",
      "0000d07fc9599d425ca0373205171a16ab58b9640204084e144290a5d37fafd34f78ef07d034656d4bd4e3c6eee01d8c543717e9c2ad0d448a9c0eb9e77f5f44119782344e7091791fc9f569d432195b636549f85c9b0cf59ab90e6c8eb75e093b1d19bdbf779c835bcad1986bb059567e3dc51a1e5c1e9e3b638af79ff674de0fbd7ae0371bb34414250d431267e1e90437aba3624f99f8e82be952916eab4c9c7772b2597e5daa5ba7c447b6e128a7fdaebb6347a0e5f1185d5831722b930707e22bd9b85e34d74c43ef23ba2adaa409798054802c30036ca8b9642de12f2e5c99e60cfcdb891a6bf60a408c4a26c1ef1f09d93a241a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:07 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-119-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b6f9b3014fd2bc8fbdabc490291a2354a691b2d211d21ada66942b6b950b704536c326555fefb2ea6e9da4d5a3f61fb9e73cfb90f9ec9a3c86332214ca44f1594874f0f929133029aa6f87abffa658f937c54945faa4a04cb9b2befe9904ea78810354bd15d91414bc9aae4a026db4d3b2d6555d052ca16266af57a6eab37ea77dd9edb1d0c474317890ab26429f2c73abdd6859a743a27f1762a659a012d846a73b97b7defecfb9da2940fc0b5eabcd7eca08cea7ca0fa39939c6a21f3e976830e2a0565043b2a32f4f0871ab3f3f7b9db82eeda2982f78203e55c56b9ae7d610a2ef344a45569b292c933313edf1cc8c65b7af3d0e232ab767994d31d9c5931d534d28702accb60bdb216fee53a58cdc2c5da8f36f36b6f356bcfd7cbedcadf5877d75ee0599ab20c0cd79a5ae7e6e6e305f563505ae4463dac9f6be5970e2dfe1d4c4d4069054d301a7747b4e7745d96b0314f9cc190255d60cc61e3211db02e776db06306147946d4b0682e733a6203c77621020e3cb2e3b1133170e2c8ed0f46ae1ddb498f71723c233f4ba1e142a8422ad17488dc058bd08bc260ebcf67a1674a486895e98bc6585dc05b8f1a0b44d07f6a3ad6512151a96ef7c20fbd60360f17b75e33e125a4941f364f38e384660a104d4b6c9e867225636c18f1672bef02c1666237a7a02293efcfa4ee79ede24dcb5fe9210eb0b6abcd976cc260e15f193b27c42dcd2a03d9370752a0e57bac0d5d1f7f2012b7b4c942be6ebde01b699e0248a0849c7f3c4d049bc0c77fdb69f3118cbb8f3a4ae31d9787ab5a8597d02c9130f5beb07bf6d8b147c4804bfd77cce90efaa7b6d539ea8cb0835cbf94d46c3e56da8855ea1584419cbf6fda75fc0dfc9af0ca7b040000",
    ],
    [
      "ETag",
      "hMz47fn6prKuuiRLPGEqyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92515382501085ffcbf68a93949230d30396158d9a293e358e7385452960e9de8be638fef7f6525953cdd40bec2edf5ece39b083a7b488c18345ba7cae506e8f96a8ef4d314655655af1ada4422158805a2c99745b978bf878bdf6d5e0f622e938f2f925a0cdf939132a5a612ec0db419262162bf01e7650881c792da2acca8b79dd59a0b7a5194ec27130bce63ea7d8f4c369bfef77fb3dd85b87c5586831aff97faccdf6163cd2628c094a2c22345a4a498f18e9c0d854222f336c28aa64840a6ab87eb094549542123578d2b06db7613b274dd7769ba76da7ed32995124744a05c3d3090b044d5a6463dab04d70189075c98e93fabae6711ad74e4c190c43a7550bfc0ab0b624cd70fe37c8825782bfc307f69ec1774ee45415fa405df5effcdf8ee3503f8fbaf4c3de0f42698eea8084c1a03709fdc1c870b377efddad463592c4492a3421dacd56a77de634df72bd209335bfc7d3b2420b22c1bfc74daac14b44a670ff0a9a9ad8fd7c020000",
    ],
    [
      "ETag",
      "94Dbd/vvAsMJCf86rqxIow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:08 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT COUNT(`amount`) as __result, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
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
            parameterValue: { arrayValues: [{ value: "1" }, { value: "2" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8554616f9b3010fd2bc8fbd24a6902091012a9ea684a37a49474045a55db941830a95bc029369da22aff7d67d3b4cdbaad1212d8f7debb77e7334fe89e56191aa384ae1e1a526f3eddb1047510117805bb71d0c4966d6633e69fdaf8e27a7e4a9cc23d3e0604952c8ecb75418e386bea94f0713cefae6ad6ac71cdd811081d197dfdc8b0fbfac818e903cbb64640e4a4c8a7b4ba07faad106b3eeef576c9bb2bc65605c16bcabb292b5ff67b8ffddeba66772415bcb79fb3076978ef83ac27054bb1a0ac3a8ee7e0a0e1a45e9012d3023cbc52b3e4f3be7697e2b2bb02f0234d094e53d65442fa02899455395d35b55245e327a47cbef940736fea4d226d328b83e860894b495e1e6a986b8b454d7853888eb684a2725a9005cd966d647daf9d87b30b8880835bcc095f6ad75fbdd0d3b49d86f6a3d1f541aa9d686e70a6ed6bf881160781378fb4839343ed4b388b2fb5d39b3d0c98cf0817b452d6239c1444da7e6eaffffe5425010bb0d2061743ddc686a38f923c19a6b933b0925c2749e224430b0f123d1d99c4cc12828127a4ba62e18a5523082659068742ac3c3175dbc912a33fc4f9207792c1c832f3d4c9067d0b6d3be8574d0539a37ccd386d5b8cae433ff2165118071337f254193986369eb5e664116f7d0a281240ffa96b2ba3944126795e7e1079a13b89fc2baf1d912959e174337f8021c971c109a0718d4b22487dc132681aba9ccdfdc89f05ee1418eadc2f77088ec6df9f5e09d166adba2cd41b9d4f676e649bcac10e72858b46611edb0f64742d406c3bff9671c3d0bd81d4b8aef1e68f1894632bfa5f3228bc5ab5365f3222996db7eaa3edcf2d3c1d0477aa5547df622fbc41ed56487252932afd787c00ac021fff1b76f754fe7ae6320f17b086694db9cc92d6a49d5a5a2abf2ddb309da1612005aec5bbd8a86fee8e476a484552924a3c97d4de53d529196af80b0882306c811f7c81e86f20b62c5829050000",
    ],
    [
      "ETag",
      "UNuU564dOoIB6aMWSBe8lA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d90cb6ec2301045ff65ba4da424085490580042942a42252d6c2a848c998490c7a4b6c343887fefd874d14517ddd8e33b7746e7fa06455eef6100bb3cfb6a515d9f32344b5b24a8dbd268be1aaa3582076844c6ceeabc5e5e8ad9ebe5b00c8af57347d0494e46c3213bb43c602560708334c772af61f079835a54c863dbad721bd966ae8d55e68b8fe96c9ab050d1de0a8b551c8fc6f114eedeafb1a6f8d7c8e6eec1917609a6a8b09668291a454794666e036a513525fa9a5a25518333bb46a6a86d8422f259f1c328f0c35e14f4c37ed0e9f6ba7d76962485c9a966f3ea9de1c090116542670e08111b942b396beace93936d085b858eedef5e647b9b9f85e3ab41fda688f1345ab2e04139214b6e3891512d7a20057ff34b6e1eeffb37b45b1e0cc3010000",
    ],
    [
      "ETag",
      "mwVQxkGJxhQ0kV83aovcCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:09 GMT",
      "Server",
      "ESF",
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
      "02ff1dd0d97282301400d07fc9b33891c548df9a6151100571a8e52503f426acb259053bfdf73afd84737e509265308eecd65670456f684e647d992ddd6e439980dc2c99d393cc16bdb53d9dd29d945be2c00d9ee2262172e5c6011d8efed9a8cf0af38f17f5b0237a336a7be9bd57c136cb306f24a2e8809dfa512a6b1f26ffbee2541359f4a88c62cf0397d62d170d3dcb47db7f7c818a830f19ca99a45829bd52f2a19949c8c5fd2ab978cb77e9f4c9f21eeab17d469137d37c1de0ceb16cabbdc4ded466e9c14dfa68261636bf436f730ae36a53cb6208a9b19557688160ea8a014656bcb88aa6eb0bf46f67b7b983570085648001fdfe01dabc57241a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-121-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2b64f6b58aa0289898adb1744ba2d8456cd36c3664182e745a642c3374d334fef7bd0cda6dd364fb02ccdc73ee39f78357f2c8ab8c4c49ca8ba706ea976f0f22256704142df0f6ce1b07a665072acdc6105daf9e16f79216b3192278cb9274b72fa12745533390d3eda65fd4a2d9d35a881e26ea59b6d5b3c6f6c0b3bcc1d0193b1e122594f992578f48bf576a2fa7a67912ef17421425d03d977d26766ff7e6b36dee6bf1004c49f3a3a68932d2fc42f57b2918555c54b3ed061d3412ea04769497e8e11f354bcf3fe6ee73baeb17087ee60c2863a2a954eb0b533051e5bc686a9d954c5f89f6f9ee836cfca5bf880d26ca66572515ddc19991514513f5b207e3325aaf8c20bc5c47ab791cacc364b3b8f257f3fe62bddcaec28d717be547bea1685a82e61a33e35c9f423ca07e0652f14aabc7ed75ab7cec50f079302d01a52574c164321853cb1d78699e4e58ee0e9d341f409abae9c4a1c374c0bc118cb21428f2b4a866d14a5494e5b6331ad264e4baf8b02779e24ec04e06de70ec8e5c07327b420e67e44fcd155c70b91792771d22b75110fb491c6dc3c53cf67509396d4a75d1196b0b78ef51618108fa4f4d8736ca052ab5ed0ec2d88fe68b38b8f1bb092fa1a0ec65f38433ce692901d1b4c6e629a85722c3869170bef22f10ac27767d0a4a32fdf54ada9eb72edeb5fc8d1ee3005bbb4abfc9268e82f087b67342dcd0b2d190e7ee831c97074d1f7e231097b44b427e6efde88e745711e45043c5be1e268275e0eb9fedb4f808c6d5471da9f08cbbc364abc26ae87688eb728f6c6be43996fe5515add5a7d8c4b14f5d6b73b4196107953a96d42d3e56da8935f20d84411c7fa8bb75f80b260683bd7a040000",
    ],
    [
      "ETag",
      "Y96I/12Itbd6eRPMqChsag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "c2",
      "301486ffcbf176241b1f13967081c48f198232c08418424a7736875b3bdb4e8384ffee6945638c17deace79c3d27799ff600cf854821826d91bf34a8f667399a992d12d44d69341db5141ac103342c27f22ae3b7b3d5fc61bc7a17f1ac7b37167d5c8d864322347fc28a417480acc032d5103d1e40b00a698dcbb2a9c4c6751e987d6d87f345124fafa9af646afbe97232195d4c2ee1e87d2fa6ccb08de3ffb1b63e7ab093db0433542838da2cb5923be426b69a9a5575892d2d1bc5518383dd8f5cc9a6664aca164d5a413b680561db1f0403bfd30b7b03224bc99929a4207839a78060a4616522df48133a0428579271e6beaf342e526762cb78ba08bb2ee04fc0397e2127addf4c5d32f107b33e25b8d81bd4f74a928f46ab12f8dd7eef3cf43fedc6d21a1bba09a31af480337aa49bc24094b152e3f1037e71bcf902020000",
    ],
    [
      "ETag",
      "FfcJQYSVCYznIQ4OCn8eYA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:10 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd04d7282301800d0bb64ad8e1252a03b7f084aaa1501053799247c628a0504a5d24eef5ea74778ef0709a5a06df9ad2aa044afa8178633522356db339eab83b7c6ecf2090617073e5d1a176967699e9ca9a0b1beee44d15587206405cc1ba77ddf469979f1cf614df2ad47866a9af559bc16775899a529bfcb9e6b99adb4c4989a49a5665d940609b83639b91f4bb6d9bfec034b626b380edc47da4cc2883ad46c4ffe902f0c0221237ec654598cbf1e9697baba336bca377dec2ee078648cd2c009582c22cfb0e6984bb92bb0aaf4d9a7d6dcbe4fac0db9a66f6880e051eb065aae9f5c4c1c6780feedfcd6d7f00c988168a041bf7facfe0cd21a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fbda04f2200991a2354ae99a2a900d48ab6a9a906d0c730b38c3a65357e5bfefda245dab4aeb276cdf73ee39f7c1337ae07586e688f0e257cb9aa74ff782a033c4142ee0d50ffea8bcbecec9fdd5a5badbd941b913d7cbc502105cb324aef625eb49d13694c9f92eee178d68f7b811a207897a83e1b037980c1d6fe0392377e27a4094accc37bc7e00fa4fa5f6726edb27f17e21445132bce7b24f45f5f26e3f0eed7d23ee1955d27eab69838cb43f50fd5c0a8a1517f56217838356b2266515e62578f847cdc8f9dbdc7d8eab7e01e0474e19a654b4b5d2be20051575ce8bb63159d1fc19199faf0e28f637fe2ab1a828dbaa4e6b5cb1332bc30aa7ea69cfaccb681b58ebf0721b05cb64bd0dd37875e507cbfe6abbd905616cdd5ef9916f294c4a66b8d6c23a37b7102ea09f31a9786dd413fdac958f1d5abf1f8c2680b4645d309d3a133c98391ec9c994e6b3914b728711322353178f8843bd311b678461e01951c3c2b5a8e970389a8e1d379d8ebc2c1d032fc513274fc960968db3d974ea11820e67e877c315bbe0722f24ef3a846ea375e2a749b40b57cbc43725e4b82dd545674c17f0daa3820201f49f9a0e3aca0528e976afc3c48f96ab647de37713deb002d3a7f817cc38c7a56480c60d344fb1261019340c85cbc0bf00b099d8d75350a2f9f767a47bae5dbc6af90b3d81016abbca7c519c44ebf08bb17342dce0b23590c7ee808ecb03a60f3f00084bda2541df767e7487baa788e5ac6135fd78980036818f7fb6d3e20318561f74a4823bec0e955a8536acdb216eca3db207eec019bbc8801bf52e36729c53d7740e9d9155ac56c792bac5874a3b",
      "b156be802008e30f4db70e7f014734c0a67a040000",
    ],
    [
      "ETag",
      "EMztfnJfbjHFtYU/MlUoJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d91514bc33010c7bfcbf9da42dbadd515f6e064687114573710648cacbd769d69529374638c7d77af718a880fbe3477d7dfc1ff979ce0ad1605c4b0a9abf70ed5f1aa4233ef8b0c75c78da6a395422338808655444e45d70c5e9276f11864fbc370c9c3745bccc7632274bec586417c82b2465e68885f4f205883b4964bde35626d3b07ccb1ed87cf8b2c49efa96f64d1f7e97236bb9dcca67076be170b66d8daf2ff585b9d1dd8c94d86252a1439f6595a2577989ba4d7d4ac6939ba5a762a470d16b63f2a25bb9629295d9ab87e10b87e1478237fe40dc2281c11c965ce4c2d05c1cb670a08461ac63379204d1810a06c49c6a5fdee695c17d6a42f9374110d6dc09f8075fc422e5abf999633f107b3ba24981c0dea2725c94763afe27bc39bf03af23eedee646f6ce8268cead0819cd1233dd406e292718de70febeff77702020000",
    ],
    [
      "ETag",
      "Enum3XIpTK2Rvw4Ul5NhdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:13 GMT",
      "Server",
      "ESF",
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
        query:
          "SELECT `name` as __result, `id` as __pk FROM `accounts` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `name`",
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
      jobId: "grouparoo-job-123-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8553eb6eda30147e95c8fbb3494012204090aa8ed1b4cb04a10da1159a26701c87b90d716a3b4ca8e2dd77e2402fabb44a9192f8bb9cef1cdb4fe881e5091aa2986d1e4b2af69fee798c1a882abc81d5682706bdcbe9f8c78579f7380ddda5f402f7e6ec0c18ac5249bc2d32da94bc1484cae162deda085e165870de04a3a6ddee34ed5edb726dd7ea383dc705a1a4593a61f903c87f2b55c8a1699e8ab7369c6f328a0b265b846f9fd7cd5ddb2c04bfa74449f36d4d13ca48f383aae7192758319e9f2de690a09454ace816b30c32bc4893f8eb5bef16c3dbd606c83b4628268497b9aa728105e179ca36a5d0ae68f88474ce571f68ee4dbc7164ac73bca56b034b63b5125496996a186b961c578a07e3329c4d8df5d15dae8dbbef5ee81935c70f8c451078f3c8f87cfec5b80a678b6be3db52638da3336449a8542cd749221c67b44a719c96ff7e932a015658d21a5cf5ad1eb607961ba7719fa4838e13a7168de341dc777027b688dba5dd24a61874aa72d72a9cf3dcc6d426edd4b69318938e6d398ed34fadeea0d74e709ab838b52cd2ef271d7468a03f82297ac164c125ab2786ee423ff25651b808c6a3c8d36da418c6735187ab9a789d53419340fa4f5f870a651c2a55e3f783c80b47e3c8bff5ea1d9fd00d26fbf923ec798a3349818d054c505131e5090c0d5dcfe67ee4cf82d104147a1baf4f0c89863f9f5e04d1bed05356fa8d4661385a82060b81f7ff6090a3d74587c3ab72b7382b3545f3f55fedbfab0164a3c3af033c0d04a7b9f643370b2f5ca27a29a4291534271fef349035f0f1ad3cdd1020c31d813a52c13f1c2c22ab2a44d0fa80b1ad4e58ab6da7d3ed3a4893857a87f506f669929547e548b73457c796ea1ba2675341a57c260108e722f0832b40ff021ad9661da3040000",
    ],
    [
      "ETag",
      "Tvr86FMCJD/WqMR9YsEN9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d905f6bc23014c5bfcbdd6b0b565150f0618ee20411adcad8444a1aaf5db5edcd92d43f88df7d3771b03dec25c9bdf99d9b7372836351ef600059917f35a8af4f39da853b24689ad21ade14d5062100b42267f27c91c7a5f8482e6f8b5e9de5f3acfb4e72311c3261e42756020637d81758ee0c0c3637a845852c4b53ed273266afca7596ab64321b735dd1ced5b3f574fa3c9ac6700ffea8d4f1573199ade2719cfc27d9de03385096e01e35d6129d09a5e980d24e5c3e232a556268a8d1120d78d85fe49a1a253451c89d306a77c2a8d76ef5a37eabd3ed75fb4c9624852da86678bd647360c98a32a133e7838801ed8f1c75efd7937bae51a8d30a73914ad2ca473a799c9d6e7f468cae16cd5c131b32e8bcb41ebe5ec879b59cc1ea06039082fff5b5b08ffafe0d67de2072b4010000",
    ],
    [
      "ETag",
      "wxckSaZRxWQ6nbgPb5YocQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:13 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dd0c97282300000d07fc9d93a34c8d61b200eb238b28970c94408126d491a90c54effbd4e3fe1bd1f80ab8af43d1ad89d74e0032c181aeb6aed73dd42d7665753536bdcf34186e139b03bd7847b323ebe8634aa065c873793e119c5bb409158a1da6d9024b36b29913fc61be734f9d2f269b325ad3154b238dfe7e39450f5e99e1c585c47a4d7f74bfe0dc5b57bf7cabef553432be82452d237dbe2d41c25891fb5c87970e7e66921f5166bf0e5f87290370873588476d54a9dedcfba4e9b7cf7165842d04d864bc65bb52ecfe56297e59c6d23d2b1e06e29313b986005c8cca9203da22faeac18c60afcdbd1b070f20ab008164480df3f7007250f1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-124-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b4fdb3014fd2b91f795b6e9232da9548daa04a8d4a62c4d61304d91eddc6486342eb10342a8ff7dd70e6520a4f129b6ef39f79cfbc80bb917654ac68489fca186eaf9db9d64e48880a639bede9c47417aa36ecfab4b5afcf47be9c52d15f964820861588a6e7705b494ac2b0e6abc59b7f34ad63b5a49d9c244ad6e6fd0ea0e7baedff5ddbe37f47c242a28b28528ef91fe47eb9d1a773a07f1762e655e00dd09d5e672fbf6de79ec757695bc03ae55e7a366076554e70bd5ef85e4540b594e366b74502ba812d85251a0877fd4949d7cccdd1674dbce11fc283850ce655d6ae30b5370596622af2b9b958c5f88f5f9ee40d6c12298c50e9745bd2d93926ee1c849a9a6897ede817316ad96ce3c3c5b45cb693c5f85c97a76112ca7edd96ab159866be7fa22880247535680e53a13e7c4de42bca07e0a4a8bd2aac7e6d928bf7668fe79308680d20a9a60327287b47becfa2c63239e1df73d96b9c0d8311b79b4cf5cee0f609032a0c8b3a296454b59b29432cf4fbda44f812583011d25ccef0d1300d64dfba38c53df25fb23f254090da742eda4124d87c875348f83248e36e16c1a07b6848cd6853e6d8c9902de7bd4582082fe53d3de44854425d3ee791807d17416cfaf8266c20bc8297f5e3fe08c335a284034adb0791aaaa54cb161249c2e835304db895d1e828a8c7fbd10d373e3e25dcbdfe8310ed0d8d5f64bd671340fcfad9d03e28a16b5853c36075346260a637aff1b81b8a44d12f263134437a4798a20830a4afef530116c035fff6c87c54730ae3eea288d77dc1dae8c0aafa0d92161cb7d6577bd4177e8110baef4a7d8a0373c74cde43019610ba57e2da9597cacb411abd51b088338fed0766bff1762b4425e7a040000",
    ],
    [
      "ETag",
      "YGREdYsZGrPalX92dHZaig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d3",
      "30",
      "1086ff8bf9482a356b1b68a47d484b814a593bda4c4c4253e4d997e0e2d89eed14aaaaff9d73363ac490b22fc9ddf939e5eef59b23f921142729b917f5430bf6f0a606ff25041b70adf40e5f462b072422e0698de4e861677e35c98c7d3573b91523763b7f5b6497974838f61d1a4ad223a90448ee48faed48146d00db98966da3ca2e8b883f9850dc169be5ea13e68de6215fdde47936cb17e4149d1b39f5b4ecf857b4dd9d22b2d3f71ba8c0826210663156ef80f96558d3d1c6481838dd5a068e747077505bdd1a6ab51e6065105f8c077172319cc6d3e168924ca6484acda8175a217cb3c50189d79eca8dfe896b92788484ed625cb9ea9e7bac0bdead12c2e5aa48c6dd847f039431dd2a5ff68295b0ce3fcaf7077c92e15f52d25782785742f64135280eb68f12a6a49c5b70ae97d4aea4c69cb1d97a9dbf544571ab05ef07f7a207907e7f063ee6ebec7fd2a2c39eb5fa90158b1784f3e89b33522caf16db22bbba0edcdd931166070feeda6ab49583e0a878387e3f79970c1f4d36d7c178f89dd4db1622c228fe2b9f85276945a583d36f86c923b089030000",
    ],
    [
      "ETag",
      "3qjpxm6BcWpClSi3cXC+TA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:15 GMT",
      "Server",
      "ESF",
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
      "300000d0bb642d0e83a2d09da068520141acca26934014fc4012a2804eef5ea74778ef0d4896b1a6c1aabeb20a7c819e18f6301b7e73cbc167f620798463339b5d0a0f52b3dde3d57eec5097a62d4cf2e825e6011a4da4db89f038df5cb83e55bef68c17bee66f6f8b66ebf5901e1fe1ebac148ec2a3763f38a5510b112c3d34d350046fe8d4b769b11a57b3ea893d1eca6bfc7327f31dd111b7fd2295b121ea75d235302507d44f5cc177c27e591dde244bb3742f415e26eb6d61b8ea808252d7454a2dcad5c4ba56b9a4b7bdaba066a11afaa7b54ca6600058c74bc91a5c7eb823d3b607e0df8e55cfd927c0614432097eff00a42041e61a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
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
      jobId: "grouparoo-job-125-1620919035659",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b6fda3014fd2b91f7b540028497845644d39509c21642ab699a22dbb9c9dc8698c64e2b56f1df77ed94ae55a5f513f1bde7dc73ee83277227ca944c0813f97d0dd5e1d3ad64e48c80a63946d7de958c98e8315d8ee14ffdb59b5d1eb2c7e91411c2b014dded0b682959571cd464bb69e795acf7b492b285855a5ed76f7983ae3bf6c66ecf1ff863242a28b2a528ef90fe5bebbd9a743a27f1762e655e00dd0bd5e672f712ef3c743bfb4ade02d7aaf356b38332aaf381eae74272aa852ca7db0d3aa8155409eca828d0c33f6acacedfd66e0bba6be7087e101c28e7b22eb5f18525b82c3391d795ad4a264fc4fa7cf54136c13298c70e9745bd2b9392eee0cc49a9a6893eecc1b98cd62b67115eaea3d52c5eacc36433bf0a56b3f67cbddcaec28d7373154481a3292bc0729da9736e5f213e503f05a54569d5631336cacf135abc5f8c21a0b48226990cdd01f546ee98656cc8b351cf67990b8c8dd8d0a73de6f2711ffa29038a3c2b6a59b494653a1c65dcf5fb494a533fe977fb59427b1e4dbcd108038361c67c8f1ccfc86325345c08b5974a34132237d1220e9238da86f3591cd816325a17faa231661a78ed51638308fa4f4f4793151295ccb817611c44b379bcb80e9a0d2f21a7fcb0b9c71d67b45080685ae1f034542b99e2c048385b051708b61bfb764a2a32f9f944cccc8d8b57237fa1c7b8406357db5fb289a345f8c5da3921ae69515bc843f361dac844614c1f7f21108fb42942be6f83e807694211645041c93f5e26826de2e33fdbe9f0118ca78f3a4ae31b6f872ba3c22b686e48d8769fd99eef0fdc3eb1e04abfcb8dbde1696aa686a9083b28f5734bcde163a78d58ad5e4098c4f587765ac7bf91b9c00a7a040000",
    ],
    [
      "ETag",
      "O1HoRbi3btn9ezuJ2fFyfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1620919035659"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93516f9b3010c7bf8bf74a24689b6c41ea43d2661b134dd2843e4c53855cfb606e8dcdec235314e5bbef4cbb6c5a27d117b83bff4edcfdfde7c09e94912c650faafed181dbbfab016f43b001df69f4f46aadf1c02206c86b229baf4f18177bbdca0c5e2fbe6caf205eaeebcb4b22bcf80e0d67e981550ab4f42cfd76608637406dc2eaae31659f450cf76d286e8b4db6fc44796365c89777793e9be70b768c4e8d92232f7bfe0d6df7c7883dda870d54e0c00808b3b4ce3e82c02cace979d36a1879db39019ef5707f503bdbb5dc593ba2ca28391b8f92c9593c4da6f1f978329e12a9ade0a8ac21f86e4b0332b4c8f5c6fea43559724e84eb635ab9ea9f3baa2bd9af12c26c594c2efa09ff06b810b633580e8295721e9fe5fb0dbec8f02fa9f91b41ba2ba587a01a8c043744a9b6e4523af07e90b4bee46d7bc2e6ab55fe5a15239d557218dca90140e3ee047ccc57b3ff494b0efba3d5f5ac58bc223c926f4e4891dd2cb6c5ec661db8fb1723ccf7087eed2cd9ca437054125f7c18bf9fc4cf26bbb2c178f49d145d0711139cfe95cf0a595a71ede1f80bae7032af89030000",
    ],
    [
      "ETag",
      "mYkt0TylOIntDEJSCe0NPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 13 May 2021 15:19:17 GMT",
      "Server",
      "ESF",
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
