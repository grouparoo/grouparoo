const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636336119791";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "300000d0bb646d190521a4bb022af2291f4b51374c0a11049b48a048e8f4ee757a8dfaeef0be01ce73d27559cf1a42c133105846522eb957dd5897953e866f21ccb738e3f502560da27b05c589b0d849d5fa5af12d1c193664b8f5a0426914451b516f3fc450b9634a90161367599b4531c910b34fc31b3c6fbaa063d2c6b4290fc32a7ee5b9be9b8eb25a6e9e6c2b6e764aecf3ba399eaa978573989706d66cb80c93c05ca19b5f84731eae9ba1427dc4a95386290b64e4ab9ec5d2a2dd268be0abbae07d6d8ead0bbb9626b623a24e94e612bbea3bd302597a78f8bfc00c90f17ae6a4cbcef7ed8a8ad00cfcd5cf7a7125f7ff06c19c70f0f30bd2e6fffb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "ef",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90",
      "f7714d8042f34b8ad628a56ba4847484b4daa60919e7606e01a7b649d556f9df7798a66b37a9fd04f6bd77efeeddc113b9e5d5868c48caf3bb1ae4c3a71b919223029ae6781bd9e1e3e77ed6cb77bc3fbdf47e6465c0e17e3c46046f588a96db023a4ad492811aad57dd5c8a7a4ba5101d4cd4713b6ecfeb795ecf7587fda18b34054536e7d52d927f6bbd5523db3e48777321f202e896ab2e13e5cbbdbd3bb6b752dc00d3ca7eab68a388b2dfd5fc5208463517d578bd42fd5a814ca0a4bcc00afe1237e9e9dbcc5d4ecb6e8ee01d6740191375a59baa30051355c6f35a9aac64f4444c95af5ec82a9807d3d862a2a8cb2aa9680947d6866a9ae8872d58e7d17261cdc2f365b498c4b36598aca617c162d29d2ee7eb45b8b2ae2f8228b0344d0b305c6b6c9d9a538807d4df80d2bc32ea7173dd283ffb33fb7f280d01a515b4c1a4eff4a83b70866996f65936f04ed2cc81341da4fd13eaa50e1bfae06f52a0c833a286452b51313495317790302f83c4777d9a50eafa89e7fbe052ff049c2190fd11b9975cc319575ba178eb10b98e667190c4d13a9c4ee2c0b490d1bad0676d614d03af6bd4d82082dee969df44b940a5c6ee591807d1641acfae8276c273c8297b58dde18c335a28403495689e06b9101b348c84934570866033b1cb435091d1cf27d278de54f1caf2177a8c036ccad5e6495671340bbf9a720e882b5ad406b26b5f880426e4066bdeff421c6e689b837c5b07d177d25e459081848a7d3c4b049bc047dfd961eb118a7b8f2a4ae3191787a94683496817889b5e0fec637730ec130396fadfd8b1e33807cb9a1c4d4628a1d2cf0db55b8f7db662b57a01357f9275181a",
      "abf67f00ab9063f273040000",
    ],
    [
      "ETag",
      "R/Nz+7f6gvi7CP3ZfmEiew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93614fdb301086ff8bf99a4a44edc288c48794859129b4d0866dd28422635f328393f36ca7a8aafadf7709ac4c6352f892dc9d9f53ee5ebfd9b147d54a16b37b55ffeac06e8f6af0377db002d769efe865b075c002069ed744268fcb34fdf6fdc998cc7f8d0067b32fdb8b9bb333229cf8090d67f18e550ab4742cfeb1632d6f80da04eaae69cb210b98df9abeb82e56d9e233e50dca3e5fdce67932cf53b60f0e8d927b5e0efc3bdaeef6017bc0fb155460a115d0cf622c3e80f059bfa6e38dd13071d859018e0df070505bec0cb78813aa4cc249184da3e9340ac3d393d390388d827b852da1b76b1a8f79f45caff0899664e194083bc4b470353c3754577258a40fb34511cd86f9fe06b810d8b5be1c052b659d7f16ef0ff822c2bfa4e6ef04e9a6941e836a6825d8314a99924b69c1b951125dc98d3960f3e5327fab4a2b2d2a390e6ed408a0fde6005ce4cbe47fd292bf5eb5fa9414e91bc27972cd0129b2ab745d2457d73d77f76284f9d683bbb648a672d0fb293c9e7dfc70121d3f5bec1c7bdbd177626f3b0898e0f4a75c2acfe28a6b07fbdf0ef92ae987030000",
    ],
    [
      "ETag",
      "AkOEEWXwppItV6eo44JyFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-2-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53614fdb3010fd2b91f795364dd3264da58ab192b148a5409b82a6696aede49219d238d84e1143fdef3b27948190e0531cdf7bf7eede9d9fc81d2f5332268ce7f735c8c72fb7829123029ae678bb2a07bcfe3badbef187ddd995236c1980b89a4c10c10d4bd16d554047895a26a0c6ab653797a2aea814a283893afd8ee3b99eeb7a8e13f8818334054536e3e51d92ff685da9b16d1fa4bbb9107901b4e2aa9b88edcbbdbdebdb9514b7906865bf55b45144d91f6a1e1722a19a8b72b25aa27ead40ae614b798115fc27a6ecebdbcc5d4eb7dd1cc13b9e004d125197da5485291251663caf6593958c9f4853e5ab035986b3701a5b9b8c4ba5d725ddc2c6a2ca5aaf25a8bad0d6f7c5c5b9b591900899aa8d75f3235c8496b5e1e9c69a58c7d62c3a8f62cbb89582d2bc6c8462ca0a3022cf5644effd3704aaa98236b8f67b1e7546bd8065cc4fb2913b64590f181b317f485dd64b82010c52061479da646f58b414651030df0b066ce80e53c8180b3cc7cfdc21f8c07ac391377283e100113db23f220f926b38e5aa128ab786909b451487eb78b19a4f4fe2b06923a3d8f7695b9c69e2759d1a9b44d0077ded4d940b5432ee46f3385c9c4ce3e83a6c073a839c268fcb7b1c69460b0588a6124dd720cf458aa691cb8b65144717f39319329a295d1e108a8c7f3dfd27c48f55e3b26ebe46cb1b34fa07c0352dea06b16b0fc421fbfd6f44e0eeb56472b50a173f497bb5800c2494c9e7a3437013f8ec051df6d93ccfa551511aff714f1265341209edbef06d53dd33bbdff79d3e69c052bf8b8dfac1c11893c364842d94fab9a1769fb1cf56ac562f200ce298e7d1fc0ca3ff00c637daba4d040000",
    ],
    [
      "ETag",
      "Un4iuzCpBiwvGQ1o/r9eoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "40",
      "0c",
      "80",
      "ff4b7d8544246181640f4e175d2453992446b32c071464038abdc30597fd777bcc97bbb6f7b5fd722738d45d01116475f53d208f57159a571b24a887c668b97aea34820368542564fff194764b7ebf4ff9b7c0503fcf0ed9b19acf85d0f917b60aa2139435368586e8f3049d6a51da763b9e260a66c6de56366fc96afd20794b85cdd7691cdf2ee2259cb76707f6942558226397a39dd833ed31372b2bab55db37e86a1a38470d133c3d544c43af98c8958a7be37a811ff87ee079e12cf4846b2857a6a64ed07403b2c590514d424751050bf0148a75399d3f525e728d5669fb4f2f4683fa8549366bb44baf2f027764a58cc81a1ed0815cc96f3cd6e6929fff00aeed854a6a010000",
    ],
    [
      "ETag",
      "pZKUnErXDUrzde9sO7kbwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00d0bb642d8c1210e852418cd2a0385160c3207e2468254154b0d3bbd7e935eabbc3fb46599ec3f59ab6f5092ee803f59966abb9ba14d66476e424eaedbb2757d68a3bc196f2b6de8cd309951e2b9c27e615142466ab302bfbc8d29d6ce18b51592b213d5b2df5f735696eb85ef8a35a96f4616b5fcb166fa7872d932c8a86a4d3368a3b3f1847ac17fbcfe1da4c78e819dd6e7f7f8006e4b4bb85b22473bd3058255992ea6b7c0adce0fcb8154911ec948319b3d9e5dc56a3b13f067a8f49125219c3d1df64222f2da82eb471dc293645ca9485f0a666aebebdfd5f6880a013bc816bca5fdbb161db03f4573f6d7b01afff13c81a68d0cf2f04b1fdf919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536d4fdb3010fe2b91f771b4e94bfa2aa15195009dda742429689aa6c8762e99218d8bed8018ea7fdfc5a10c8404ca87c4bee7b9e7eeb9cb13b915654aa68489fcae02f5f8e546327244c0d01c6fbf5f74c34bef61fd155c769547e3f3defc2f3c1c1f2342d42c4db7bb025a5a568a839e6ea276ae64b5a34aca16266af55bdd617fd8ef0fbbddc968d2459a86225b8af216c97f8cd9e9a9eb1ea4dbb99479017427749bcbedcbbd7bdf73774ade0037da7dabe8a288763fd4fc56484e8d90e5f12642fd4a834a604b458115fc27a6ece46de6b6a0db768ee07bc181722eabd2d455610a2ecb4ce495b259c9f489d82a5f7d90c85ffaf3d8e1b2a8b66552d22d1c39293534318f3b70cec2f5ca590467eb70358b17eb2089e617fe6ad69eaf979b551039d7177ee83b86b2022cd739764eec29c003eaa7a08d28ad7a5c5fd7cacffe2cde0fa526a0b48626988c3a43da1d77262c63239e8dfb03967580b1311b0d689f75f8c4032f65409167452d8b96b244001b8ca99770361e255ecabb09fa3b49bc21efd1e16890e143f647e4410903a742efa4168d43e43a5cc47e12879b603e8b7ddb4246abc29c3685d50dbcaed1608308faa0a77d1d1512956abb1741ec87b379bcb8f29b092f21a7fc31bac31967b4d08068aad03c036a2553348c04b3957f8a603bb11f87a026d35f4fa4f6bcaee295e52ff4180758976bec9b4471b808ce6d3907c4152d2a0bb96f3e88022e558a35ef7f230e37b4c9412e377ef89334572164a0a0e49fcf12c136f0d97f76d87a84e2dea38a3678c6c5e1bad6e00a9a0512b6d703bbd7f7bc09b16065dec506def860599da3ce085b28cd7343cdd6639f8d58a55f4018c4d907d6aafd3f62c2d00273040000",
    ],
    [
      "ETag",
      "JH1RQ4wO+e/bVgS8G2Czew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d93514fdb3010c7bf8b794d25a274618dc4433a0a8b165ad686a70945c6be6406c736b6d3a9aafadd390728d398145e92bbf3ef94bbbfffd99347a138c9c8bd689f7ab0bb9316fccf10acc1f5d23b7c19ad1c908880a72d924f6e662eaacbcd6e5a563f1c35fc4aac8afcfc1c09c77e434749b6278d00c91dc97eed89a21d601bd3b2ef543d6411f13b138a9b6a5d2caf30ef340ff9f2b62cf379b92087e8d8c8a9a7f5c07fa2edee1091077dbf86062c2806611663f503305f84351ded8c8489d3bd65e0c8000f07add5bda156eb095626c9244e933449d2389e9dcd62e4a466d40bad10bddde078c46b4fe55affc125499c20618718176e86e716eb820f8b84b05856e97498ef6f8032a67be5eb51b011d6f917f1dec05711fe2525fd24883725e418d482e260c728616acab905e74649ed6a6acc119baf56e5475514b75af071702b4600e9b747e0b25ce5ff9316fdf5aed5455e2d3e10cea36b8e48555c2f36557e7d13b8bb5723cc771edc8dd5682a07c14ff1e9f4eb97b3f4f4c562df74b01d7e27f3b68788308a7fca77e149d650e9e0f00c89d10fb887030000",
    ],
    [
      "ETag",
      "qs9pDTFSy4LTKsapdGiOIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-4-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535b4fdb3014fe2b91f7387a09499bb652c5aa12b648a5409a82b6696a6de72418d238d84e11a0fef79d24948b90e0298ecf7739373f915b91c764449848ef4a500fdf6e242307040c4df1f6fa4f7a3dbf4fc3c19c3fc6cb93ef37bd496f7a311e2342542c4d3745062d2d4bc5418f968b76aa64595025650b855a6ecbee3b7dc7e9dbf6d01bda48d390253391df56e2c6147ad4e9ecaddba9946906b410bacde5e6e5beb33dec144ade0037baf3deb18326baf3a9e75126393542e6e3e502fd4b0d6a051b2a32cce09518b31fef95db826eda2982b78203e55c96b9a9b242092ef344a4a5aa55c9e889d459be3990853ff3a791b5cecc766d516dad560a749919eb243c3bb5d60ab854b15e5b57bffcd0b7acb588d7d6d83ab266c1691059559b62d046e4b54344590695fa730f828f8daf08d4500d4d70e575fbd41e74872c611e4f064e8f255d606cc0bc1e7558970f5d7063061479a652af59349739edb141ec785d3618b2987a1eb79dd8867e4287ddb8dfa54942a9dbe30e27bb0372af848163a10ba945d30972150691bf8ac2e57c3a89fcba8c8462ddc74d7255116ff3345824823ea96b57458544a7aaadc13cf2c3c9340a2efd66923348297f58dce12c139a69403455740306d4a98cb169e4fc6c1144c1d97c3243463d9ef33d4293d1dfa75742f450d45d36f5b7f2eabbb5ff1e7049b3b2466c9b03b1c96ef70f11b8740d995c2cfdf03769ae42484041cebf1e1d82ebc0574f67bfc808c55546176df01ff784ebca832b68f6456ceaec9ed987eea1eb911aaccc8798e33afbc6541a95226c2037cf05358b8c753666a57e016110c73c0fe63f31fa1faa5cb0eb46040000",
    ],
    [
      "ETag",
      "hZghNwgR8NczdUF+j5A5CQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d906d4fc2400c80ff4bfdcad431e52de103188dc64570484230841c473737b7f5b8eb3484f0dfed0dbfdcb5bda7ed933bc1775eef6104bb3c3b34688f5719f2bb0f12744dc94e2e43b543e800b2ca845cadcde266b07e9d73df0e8a55a4675176988cc74238fd859582d109d21ccbbd83d1e7096a55a1b46db7b69d28181f8daf3cc5b3c987a415ed7dfab68ce3c9347e84f3e6dc81827609a668b1d6e8071a4b056a7ef1ae4e55a6c4c05163353a68e1f621b3d418658902a9047741d88b7a51d40bc3617f180a5792569c532de87201b285895599d0af9882076c1b8a74da9e3f52eede0fafc3ae97dafcf3d323a39b5b92dd0efddadb8bc203792d165db60d76402bf98ee79c2ff9f90f0ee367b86b010000",
    ],
    [
      "ETag",
      "XZpS/8ZKPt7r8jX3cO3gqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb64ad8e202874d7a85590827c447193418831807c122a814eef5ea7d7a8ef0eef1bc4498239476d95e312bc813e96f54932d9d51afc201949df77db8172bfe83a3dbf20d993892aa0d318ccacf87d3924e3d45d2873e32ca01461f9e454414ac4cc65d428e3cf3dd34ab349ccc8a7b57dcc37c1461bf36c117c21312c43981f7c0396f395d9cb966db1e21406b1777c448fc8be1f58489bac2aec87e90c9eaeb579cb15225f6f7b53759dee2e1072a5f335dbfa87569348be1215098d2ba2ea7a7d62a286c7b34e94a6e5342aa697a97593ec78698d272f2fff1718012c6aca3047f4b97da6eafa08fcd5476d5fe3e77f88638619f8f905b49d80bb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f795be4bfa90aa51950099da744b53189aa6c8766e32431a17db8155a8ff7d370e654548f029b6ef39f79cfbc833b9174542c68489eca104b5fb7227193921606886aff422bb097e5efaca88fb6f4fddbfbbde2d554f93092244c5d274b3cda1a165a938e8f17ad5cc942cb75449d9c0448dd346c7edb9bd9edbe98c06a30ed234e4e95c14f748fe63cc568f5bad8374339332cb816e856e72b9797d6f3d765b5b25ef801bdd7aabd84211ddfa50f36b2e3935421693f50af54b0d2a860d15393af84f4cd8d9dbcc4d4137cd0cc18f8203e55c9685a95c610a2e8b5464a5b259c9f89958974707b2f2e6de2c72b8cccb4d11177403274e420d8dcd6e0bce45b85c387e70b10c17d3c85f06f16a76e52da6cdd972be5e042be7e6ca0b3dc7509683e53a13e7ccde02bca07e02da88c2aa47d573a5fcd21ffffd502a024a6ba883f1a0edd2ceb03d62291bf074d83b65691b181bb2c129edb1361ff5a19f30a0c8b3a296450b5974db69dae303168fa8cbe37e3a74e3216369cc920eb89da1db6ff739d99f9027250c9c0bbd955ad41d2237a11f797114ae83d934f26c09292d73735e1bab0a38f668b040047d50d3be8a0a894a55bbfd20f2c2e92cf2afbd7ac273c828dfad1e70c629cd35209a2a6c9e01b59009368c04d385778e603bb1ef87a026e35fcfa4ea79e5e2a8e5aff4080758d935f64b5651e80797d6ce01714df3d2421eeb0351c0a54ad0f3fe37e27043eb1ce4c7da0b6f49fd14420a0a0afef92c116c039ffd6787ad4728ee3daa6883775c1cae2b0daea05e20616b3db0bbfde1a84d2c589977b1d1a07f685995a3ca081b28cc4b41f5d6639db558a95f4118c4d907b655fb7f88f8dab173040000",
    ],
    [
      "ETag",
      "aFgWNXGIrtikJw2xy3Yarw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93514fdb3010c7bf8bf79a0aa2423222f1d06ea5eb14dad2a64f0845c6be0433c7f66ca7a8aafadd390728684c0a2fc9ddf977cadddfffecc91fa138c9c8bda8ffb66077df6af0372158816ba577f8325a392011014f6b24e572fa7b9a1a969ea44bfbb4dd3c98716e6f2e2f9170ec011a4ab23da90448ee4876bb278a36806d4ccbb651659745c4ef4c28ae8bd56c3ec5bcd13ce4f34d9e8fc6f9841ca26323a79e961dff85b6bb43441ef5fd0a2ab0a01884598cd58fc0fc2cace96863240c9c6e2d03473ab83ba8ad6e0db55a0fb032381fc4c930190e9338be482f62e4a466d40bad10ddac713ce2b5a772a59f7049120f91b05d8c0b57dd738b75c1bb4542389b17c95937df478032a65be5cb5eb012d6f917f1dec05711fe2525fd22883725641f5483e260fb28614acab905e77a49ed4a6acc111b2f16f9675514b75af07e702b7a00e9b747e02a5f8cfe272dfaeb5dab9fa362f289701e5d73448ad9f5645d8cae9781bb7b35c278e7c12dad465339087e8a4fcfbe9fa7c9e98bc57ee8603bfc4ee66d0b116114ff945fc293aca2d2c1e119174fb28987030000",
    ],
    [
      "ETag",
      "lPGJG7pc7/7PrwvUhpBLrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-6-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b64f6d596525a2e4d1ab751d625a9d56da9ee66b36987e180a3c0e0cc50634cfffb1ec07a89893e31ccf92ee7364fe48e970999909867f735c8c76fb72226470434cdf0f66c90a4963bab7e8f44e1bbe5e94e96e39b87e91411bc61295a5439f494a825033559affa99147545a5103d14ea393dcbb11ddb762ccb777d0b690af274cecb3b24df685da989691eacfb9910590eb4e2aacf44f1726fee866625c52d30adccf78e269a28f353cfe35c30aab928a7eb15fad70ae4060aca73cce09598c4dfdf2bf7392dfa1982779c01654cd4a56eb2420926ca9467b56c55c9e489b459be399055300f4e2263cb85dad0aada1a54199b8d0455e7daf8b1bc3837b612989089da1ad73f8365602036d91a53e3d89887e7616434ad4a40695eb62e118d73681c9efb107e6c7e43a09a2ae8821b77e050cb1bf8711abb2cf5ec719c0e208ebdd81d533b1e307f04a324068a3cdda8b72c5a8ad26216a4566c0f87766c39de00752019dbdec062001612a9efbbd44bc9fe883c48aee194ab4a28de75835c2fc328d844cbf5e26416056d1929c5ba4fbbe49a22dee6a9b148047d52d7be8972814e4d6bc345142c672751781574d39c4346d9e3ea1ee799d25c01a2a9a4056890e722c1a691cb8b551885178bd91c19ed882e0f0845267f9f5e09d163d57659b7dfc6cb19b5fe07c015cdeb16b1eb0ec422fbfd3f44e0e27564f26b1d2cff90ee6a09294828d9d7a343701bf8eaf91c9619a1b8cee8a234fee39e30d5783009ddbef0a2cdee993d1c3b9e4b5ab0d41f62ded03a34a6d16814a180523f17d42d33d6d999d5ea0584411cf3225c9c61f43fddaca0bf4a040000",
    ],
    [
      "ETag",
      "G0df17ApX4om97nDvrn5hw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6a",
      "83",
      "40",
      "1086df657a598558c160201731959e24690cb9282584cd3a5a5375eceeda20e2bb77d6f4660fff7e33f3b1037c974d060b3897c54f87aabf2bd0ecec2145dd5546f3d652a3111c40230a26dff2f8f1611d7ed0fd2cd1fb997c9deffaa7eb72c984965f580b580c909758651a169f0334a2462e3b9dd4d49131d3b73689b6db245e6d38a829b3c1e69024ab2889613c8e0e5ce89c628e0a1b89b665abe882d2bc585b2deab6425753a7246a98e0e9a150d4b54211b99cb881eb057ee0fb81e785f3d063ae22294c490da3873df014434654295dd9152ca0a6236be7d3facbb1511d5aa5e33f1df506f5bb229eacd10e9ddd04d664a50ccbda0a07a4e0ef782ecded3efe01423604af6b010000",
    ],
    [
      "ETag",
      "KfED2C9Yo+0LsS0cJ7QyGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bb64ad0c465b4897d840e5573b68236e981012888182c12ae8f4ee757a8dfaeef06e8032c6fb3e3bb58a7f81173052880c66049dedb865b996c37e86af48f9b96562acc491aac5a6a090d9f18156cdeb6791e13a877ec72bbb3aa8e47b5d7d740e0c76e6266d3c126088cb51172b93c88814fbb9778634dfa5877605ab0cae481f6e67e7a358f4d180911fb198916727adc4e9bdb85e50a40936138b7b35c929efbc72b124cd85b9f94e2eb752e4298c93b35e8796103894765b932912d3d0c1ccca4c9fbc0d2ad672eb2601f59579246de81a0f0fff1798003e7452f33e93f7edf3278426e0af7e761a3b7effef70aab9063fbf1bfd079e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b6fda3014fd2b91f7b5bc1f09486845345d9120ac21b49ba629b29d9bcc5d88c1769858c57fdf8d53ba5695da4fb17dcfb9e7dc471ec96f5124644c98c8f625a8e3a707c9c8050143337cddc35d743cdc26df36fbf65f7f78b3677bf0a693092244c5d274bbcba1a165a938e8f166ddcc942c775449d9c0440db7d119f686bddeb0d319b9a30ed234e4e94214bf91fccb989d1eb75a67e96626659603dd09dde472fbfcde3a745b3b251f801bdd7aadd84211dd7a57f3732e3935421693cd1af54b0d2a862d15393af84f4cd8e5ebcc4d41b7cd0cc107c181722ecbc254ae300597452ab252d9ac64fc48accb1707b2f617fe2c72b8cccb6d1117740b174e420d8dcd7107ce75b85a3af3e07a152ea7d17c15c4ebd98dbf9c3667abc56619ac9dfb1b3ff41d43590e96eb4c9c4b7b0bf082fa0968230aab1e55cf95f2537fe66f875211505a431d8cddf69076bcf688a5cce5a9d71bb0b40d8c79cc1dd01e6bf3511ffa09038a3c2b6a59b490c500a18cf5dd384d3b34ee43b71bb38e97c6dcf5bc2eefb6919d90d305f9a384812ba177528bba43e43e9c477e1c859b60368d7c5b424acbdc5cd5c6aa025e7a34582082dea9e954458544a5aaddf320f2c3e92c9adff9f5841790517e5cef71c629cd35209a2a6c9e01b59409368c04d3a57f85603bb1afe7a026e31f8fa4ea79e5e245cb9fe9110eb0b26bec97aca3701e7cb176ce883b9a971672a80f4401972a41cfa79f88c30dad7390db8d1f7e27f55308292828f8c7b344b00d7cf49f9db71ea1b8f7a8a20dde7171b8ae34b8827a8184adf5ccee0e7b6e9758b0326f62fde1e0dcb22a479511b65098a782eaadc73a6bb1523f833088b30f6cab4eff00cf48ac9073040000",
    ],
    [
      "ETag",
      "qeVTyvQdXUq0zE6Hqbqe8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93516fda3010c7bf8bfb1a2422586823f501364a995260903e6c5315b9f62573e7f832db614288efbe73dab1699d94be2477e7df29777fff7364df95912c658faafad1823d5c54e03f85600baed5ded1ab41e380450c3caf88c42f7cb1390c670bfbf976f751aef5f852f8eafa9a0827be41cd597a64a5022d1d4bbf1e99e135509b40ddd6a6e8b288f943138abb7cbb5c2d28af51867c759f65d3593667a7e8dc28b9e745c7bfa1ede114b1277cdc4209168c80304b63f109845f86351daf1b0d0387ad15e05807770795c5b6e116714095c1641027a364344ae2f86a721513a75170afd0107abfa3f19847cff5167fd2922c1e1161bb98162ebbe79eea4a768b8470b9ca937137dfdf0017025be38b5eb054d6f967f17e832f22fc4b6afe46906e4ae93ea80223c1f651aa29b894169ceb25d115bc69ced86cbdce5eab62a44525fbc1bdea01b4df9f819b6c3dfd9fb4e4af3f5a7d98e6f35784f3e49a33922fefe6bb7c7ab709dcc38b1166070f6e63914ce520f8291e8e2fdf4d92e1b3c5de63b01d7d27f5b68588094e7fcaadf22c2db97670fa05815067f487030000",
    ],
    [
      "ETag",
      "oZaGPy0BGrYHSJdOl48ctg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-8-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fa34014fe2b64f6d5964b5ba04d1ad7282a49a5da528dd96cda6138b0a394c19941634cfffb1ec07a89893e31ccf92ee7362fe49e9729999084e70f35c8e75f772221070434cdf136888353b68caeaac83d774c2d22f7f6cc7e9a4e11c11b96a2dbaa809e12b564a026ab653f97a2aea814a287423dbf67bb037730706d7bec8d6da42928b2192fef91fc4feb4a4d4c736fddcf85c80ba015577d26b66ff7e6a3635652dc01d3cafcec68a28932bff53c2c04a39a8b72ba5aa27fad40ae614b798119bc13d3e4f767e53ea7db7e8ee047ce803226ea523759a1041365c6f35ab6aa64f242da2c3f1cc8329805c7b1b149a9868d4195b15e4b5075a18dd3c5fcc2d8486042a66a63dc9c078bc030363cdd1853e3d0988517616c347d4a41695eb616314d0a68e45f9b107eed7c43a09a2ae8826bcf72a9ed5be3244b3c96f98351925990247ee28de820b1d87808c334018a3cdda8b72c5a8ad24d07239725d680820fc36ce48da9e3bbfe1060e8d99e653bae3ba2341d91dd0179925cc309579550bc6b05b9598471b08e17abe8f8280eda32328a759f74c935457ccc53639108faa6ae5d13e5029d9abe86511c2c8e8ee3f03ae84639839cb2e7e5030e33a38502445349b7a0415e88149b462ee7cb300ee7d1d10c19ed7c2ef70845267f5ede09f173d57659b7dfc6cb1db6fe7bc0352dea16f1d81d884d76bbbf88c0adebc8e46a152c6e4977b5800c2494ece7d121b80dfcf476f69b8c50dc6574511aff714f986a3c98846e5ff8b6cdee95ed78d6d8212d58ea2f31c71aed1bd368348ab08552bf16d46d32d6d999d5ea0d84411c7314466718fd0fd6f4a5fc47040000",
    ],
    [
      "ETag",
      "ETEFcSNQpN6H2/toN6YG1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90514fc2301080ffcbf9284d56665096f0309404c9440509898690528e39d876b3edd465e1bf7b1dbeb477d7efeebeb4855356ee21825d967ed5689aab14ddab0f1668ebdc59be2a2a2d420fd0a994c9d9faba98afe569394d7e9f9f66cdbb9ddd503c1a3161f527160aa2160e19e67b0bd1470ba52a90dbb65bd34d64cc3595af3cc46f13ce0adafb6cbe4a92789c4ce0bc39f7e048bb051ed060a9d1cfab0c1d51bb47af6a5551e5282cd546a3850eee1e524375a50c91e08ab81372100ec27020e5f0762899cb492b9751c9e86a09bcc59153f9827e58143c60ba909d0fddf9cde57ed00f44d01781f4629bff9e71e3d0be18e2fd16fdeae0a2714f5ecdb1b23335f6402bfe9169e62ef9f90f4211c1e86e010000",
    ],
    [
      "ETag",
      "JW+mNW1kSHLxOMJyZsJ4oA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "417282300000c0bfe46c1d3522d05b50908a5481342a970c860851409a582576faf73afd46dd3fec37c818e34ad1cbf9c41bf00a7436b2fbac1fb496e3158247eb55e0e1a429630de3d3d996898a4ba3131536b7a18f0ae296e17853e3cd7b604d03094f57c251b8adf9c0db0e22b93826b3c3fdeb96eff6c470874aa59620c7694e52e88fabcaa25176753fb0cbeea24de94d1bab515b753ae76c3f490aecaf502867707c0f87a3b559269b298c1688992fc76513d6f0ada04d3ed76e3a64a6d6f602ceeb1d9aa0b4a6c6d23f7413a1d29de3e0027938cb09f9d4cebcfff4f47f811ee05d2b2457543cb643c3b67be0af3ebde8963ffe3b3c935c829f5f632ec75e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fdb3014fd2b91f70a6dd3b44d5ba91aa584d1a94d479a82a6698a1ce7261892b8d80eac43fdefbb71280321c1536cdf73ee39f7234fe48e970919939867f715c8dd975b119323029a66f87ae97777ea7c71da39f58aef7fba7faf6f06823e4e2688e0354bd1629bc3b1129564a0c69b752b93a2da5229c431263a1e1ddb0367e03803db1eb9231b690af274c1cb3b24df68bd55e376fb20ddca84c872a05bae5a4c142fefed876e7b2bc52d30adda6f15db28a2da1f6a7ecd05a39a8b72b259a37ea5404650509ea383ffc4243e799bb9c569d1ca10fcc01950c64455eada15a660a24c79564993958c9f8871f9ea40d6dec29b85161379559451490b38b212aa69a4775bb0ce83d5d29afbe7ab60390de72b3f5acf2ebce5b4355b2d364b7f6d5d5f788167691ae760b8d6c43a31371f2fa89f80d2bc34ea61fd5c2b3ff767fe7e283501a51534c1c8ed0ca83dec8ce23476593a74fa71da81381ec66e9f3a71878d7ad04b62a0c833a286454b51268ed3edf753371adaae1df5925e12c53dbb1bb93624fd6e6790b8b143f647e451720d675c6d85e24d87c875300fbd280c36fe6c1a7aa6849456b93e6b8cd505bcf6a8b140047d50d3be8e72814a75bbe77ee805d35938bff29a092f20a36cb7bec719a7345780682ab1791ae45224d830e24f97de1982cdc47e1c828a8c7f3d91bae7b58b572d7fa18738c0daae365fb20e83b9ffcdd83920ae685e19c8437320129890097adeff461c6e6893835c6ebce027699e02484142c93e9f25824de0b3ffecb0f508c5bd4715a5f18e8bc354adc124340bc44dad0776d7756d8718b0d4ef62c34effd0b23a479d110a28f57341cdd6639d8d58a55e4018c4d9fba655fb7f7a83581473040000",
    ],
    [
      "ETag",
      "QN2ysFLB0BEmJx2zWh6oaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93516f9b3010c7bf8bf74ab42032ba20f52159b335134d5a421ebaa942ae7d3077c6c76c932a8af2dd77d02e9dd649f405eecebf13777fff39b09fca4896b07b55fd6ac1eedf55e06fba2003d76aefe8d5a071c002069e57448e2fdf6752df6ebf6ed38bfd2452f1b7aa8c6ececf8970e207d49c2507562ad0d2b1e4fb81195e03b509d46d6d8a3e0b98df375d719367cbd517ca6b945dbedaa6e96c9e2ed83138354aee79d1f36f68bb3b06ec01ef3328c18211d0cdd2587c00e197dd9a8ed78d8691c3d60a70ac87fb83ca62db708b38a2ca683a0ae3288ea2380ca767d390388d827b8586d0ed86c6631e3dd7193ed2922c8c88b07d4c0b97fd73477525fb45ba70b9cae3493fdfdf0017025be38b41b054d6f927f1fe80cf22fc4b6afe46906e4ae921a80223c10e51aa29b894169c1b24d115bc694ed87cbd4e5fab62a4452587c19d1a00b4df9d80cfe97af63f69c95f2f5a5dccf2c52bc27972cd09c997578b4d3ebbbaeeb8bb6723ccf71edcb545329583ce4fe178f2f1c3593c7eb2d827ec6c47df49bc6d216082d39f72a93c4b4aae1d1c7f03b829f14287030000",
    ],
    [
      "ETag",
      "0H/RdlYUJULDy43i6Zgf3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-10-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536d6fda3010fe2b91f7b59084979020a1aea2d99689d20e42ab6e9ac0762e9921c4d4765aa18affbe4b52faa24aed2722dff372f7dcf14836a248c8903091dd95a0f65fd6929113028666f89a979bee3e5dff5e7b766faccfd9cf87f5e6361b8d10212a96a6db5d0e2d2d4bc5410f17f376a664b9a34aca160ab55ca7e57a5dafdbf55c3718042ef234e4e944141b64ff3366a787b67df46e67526639d09dd06d2eb7cfeff67dc7de29b9066eb4fdd6d246176d7f6c7a9a4b4e8d90c56831c7064a0d6a095b2a726ce18599b0af6fa5db826edb1982ef0507cab92c0b53b585125c16a9c84a55ab92e123a9db7cf541e6e1241cc7d64a1bd45c59545bcba5025de6c6fa36bbbcb0560ab854895e59373fc25968592b91acac91756a4da28b28b6aaa412d04614b5474c590e95fe530cd1fbf02b02355443535c0e1c8fbabe13b0940d78ea77fb2c7580319f0dfab4cb1c1ef4a09730a0c833957acda2852cdcc0a17d8020e8f114dc84397dca9d24f13dd649dc6e32e8271d3f48d20e399c9007250c9c0bbd935a3459909b591487cb78b6988ecfe2b01e23a538f779d35c35c4eb3e0d0e89a00fe63a545521d1a90a369ac6e1ec6c1c47d761b3cb096494efe777b8cd94e61a104d15dd82017521130c8d5c5dcea338ba9c9e4d90512fe8ea88d064f8e7f18510ef7775caa6feadbcbc5eed7f045cd3bcac11f7cd0771c9e1f0171178770d99fc5a84b35bd23ccd20050505ff7c7508ae0b9ffe7d8eb78c58bc66b4c10b33020f85ebca842b680e466cebf69ed81dbfe707a4062bf3aee6753ac7642a8d4a11b65098a7899a5bc6411bb3523f83b0887b9e46d3ef58fd0f2fd1f3b74b040000",
    ],
    [
      "ETag",
      "luk3yfjZj6/4CsDbJwjkYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "46df657a0b8d84428b8917d8d060a3d6a2269ac6981547ba0a0cdd5dda18e3bb3b8bbdd99f6fcfcc9cec054eb2de431f76b2f869519d1f0a349ff690a16e4ba3796ba8d6080ea011059371b24e8b75937dacded3b7449e82e94a96f160c084cebfb112d0bfc04162b9d7d0ffba402d2ae4b2ed56751d1933e7c6268bd124992fe2c98ca38af6369a2ec7e378384ee0bab93a70a45d86075458e7689b368a8e989b91f5d5a26a4a7435b52a470d1ddc3d148ada4628229713d7ebb95ee887be1f7a5ef41c790c96940b23a9667639071e63c88832a33fd6050ba8eec8e6876efdb5f163f0d20b82c88b9e92c8ca6dfecb8667837aa6881d34daf1bdbbca2b593dc3da46b5e8402ef86b5269eef7eb0dd0f64ea877010000",
    ],
    [
      "ETag",
      "AEYHgYpROXJHFEik5NXilA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "2d0ee0a7d09d24a08d884118286e324153e4d388fc049cdebd4eaf51df1dde03b0d389d7356dae3917e01d0c4cd5a7a7e9b6d40c2b497d074592193bf65c57971797dc874040e9d05d9496647b9c670bd7179be8ceefe11bda418f54c5878cc2d8b4e594fa67dc64f5792712e5d352a91205cbb9f79df19ecec786799220ab40118d9399f1cc60d763bdc54a58b97bbc80476e1964970c887cb59d2d14226d676bb859c683398e85215f2dd463d469512ca224bf252c3f38b6e9f9ee58de56ed5ae3aa5c241574d8b9d8600c353f6c020a791f4c5f5efe2f3001bc2fd38ad7347d6e9f2d747d02feead36628f9f3bfc159c52bf0f30b4b6483cf19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fdb3014fd2b91f7953ed236e943aa465702546ad391a6c0344d91e3dc6486242eb6c343a8ff7d370e652024f814dbf79c7bce7de499dcf232211312f3ecae02f9f4ed46c4e48880a619befe282ebbcef5d975bacc974e555e64a3c7c762369d2282d72c458b5d0e2d252ac9404db69b762645b5a3528816266ad976cb76fb6ebfefdaf67838b691a7204f97bcbc45f65fad776ad2e91cb4db9910590e74c7559b89e2f5bd73dfebeca4b801a655e7bd64075554e773d1efb9605473514eb71b34502990111494e768e13f33898fdfa76e735ab43304df730694315195bab685299828539e55d264259367626cbe39908db7f4e6a1c5445e156554d2028eac846a1ae9a71d58a7c17a652dfcd375b09a858bb51f6de6e7de6ad69eaf97db95bfb1aecebdc0b3348d73305c6b6a1d9b9b8f17d44f40695e1af5b07eae955f1ab4f838969a80d20a9a6034ecbad41e75c7711a0f593aea3b71da85381ec54387f6e32e1b0f6090c4409167440d8b96a24c5c07fa3dd78d86cec0890609d028765837827e9c24091da67602647f441e24d770c2d54e28de74885c058bd08bc260ebcf67a1674a486995eb93c6585dc05b8f1a0b44d02735edeb2817a854b77be1875e309b878b4baf99f01232ca9e367738e394e60a104d25364f835c09743921fe6ce59d20d84cece721a8c8e4f733a97b5ebb78d3f2577a8803aced6af3259b3058f867c6ce017149f3ca40ee9b0391c0844cd0f3fe0fe270459b1ce462eb05bf48f314400a124af6f52c116c025ffe6987b5472c2e3eca288d77dc1ca66a1126a1d9206e8a3db07b63db1d130396fa43ac37181c7a56e7a8334201a57ea9a8597b2cb411abd42b0883387cdff46aff0f1122857876040000",
    ],
    [
      "ETag",
      "BmV05XGXfLlL5unQg8xxmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93616bdb301086ff8bf6d58118676e6be887a44b3b839b7489b3324631aa747695c99226c91921e4bfefe4b6d95807ee17fbeef41cbe7bf5fa407e08c549461e45f3b303bbffd080ff128215b84e7a872fa395031211f0b441725cb793cd79fbcddca779adaed8d3f66b123797974838f6042d25d981d402247724fb7e208ab6806d4ccbae55559f45c4ef4d28aecb55beb8c1bcd53ce48b4d514c67c59c1ca35323a79e563dff8eb6876344b6fa71053558500cc22cc6ea2d309f87351d6d8d8491d39d65e0480ff7078dd59da156eb115646713c8ad3244d92348e2fce2e6204a566d40bad90ddac713ee2b5a772a57fe196244e90b07d8c1bd7fd738775c1fb4d42982fca74d20ff8374019d39df2d520580bebfcb37aafe08b0aff9292be13c4ab1272086a4071b043943015e5dc827383a4761535e684cd96cbe2ad2a8a5b2df830b8130380f4bb13705d2ca7ff93160df647ab4fd372fe86701e6d7342cafc76be2ea7b777817b7831c26cefc1dd598dae72100c158f27e71fcfd2f1b3c7ae74f01d7e27f3b68388308abfca67e1495653e9e0f81b62468ee888030000",
    ],
    [
      "ETag",
      "0fm4U8mYpW6IfnCchjV31g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-12-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535b4fa34014fe2b64f6d5b650da429b34ea567697a4ad4aa9c6dd6cda1938e02865eacce06a4cfffb1e06eb2526fa04cc7cb773e189dcf2322523c2787e57817cfc7623183920a0698ea7d7d7bf67d07d08a1b83bcb2793efd9a5cfafcec76344f09aa5e8665b404b894a26a046cb453b97a2da5229440b855a4eb7e50cdc81eb0e1c67e80d1de42928b2292f6f6b75adb76ad4e9ecbddbb910790174cb553b119b97f3ce7db7b395e20612ad3aef2d3be8a23a9f9b1e1622a19a8b72bc5c60804a815cc186f20223bc325376f45ebacde9a69d23f89e2740934454a5ae63a14422ca8ce79534aa64f4444ccc372f64114c83496cad332e955e9574036b8b2a6bb592a0aa425b3fa2d399b596900899aab575f92b8802cb5a9b586b6b6c1d5ad37016c656ddb11494e6a5f18a292ba0f6796e47f8710835816aaaa0b95c79f6803abe3d6419f392cc77fb2cb381319f797dea323b19f6a09732a0c8d3b5ba61d152945dcff67a69cf4ffbfd2eb3fbb4eff80e4bc1cb5cdb1bf45cb7e70f52bfcf1cb23b20ff24d770c2d55628def4845c46611cace268399f1cc7812923a358fa4913ae2ee26d4e8d4522e893ba76f52d17e85437389cc741743c89c38ba099e914729a3c2eee70aa192d14209a4aecbb06391329368d9c9d2ec2383c9d1f4f91610675b6472832faf3f44a881fb7a6cbda3cc9228ec2f94f13608fb8a0456520f7cd0b811b5c14c1957d040f26b75995ddee2fb270291b4572be0ca22bd21c4590818432f97a9e0836175ffe5bfb45472cae3ada288ddfb83d89aa4d1209cd16f14d1d66cfee0efda14d0c58ea0f7743dfdbb7abd6a8156103a57eaea859742cb431abd40b082f71f873d3b9dd7f0797453068040000",
    ],
    [
      "ETag",
      "hhZMe2xIelqPgCCBfW8iYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "40",
      "0c",
      "80",
      "ff",
      "4b",
      "7d",
      "1d89484421d98333d361c8746cf341b32c3728c804caee8a862cfc777bcc97bbb6f7b5fd7267f82e9b0c423894c5a943dd5f15c82b1b2468ba8a8d5c2d35066102c8aab024275157074fe67ef1f27152b74abd06efabe95408937e61ad203c435e629519083fcfd0a81aa56dbfd7e344c1b86f6d65bd49a2e5b3e43565365f6ee3f86116cf61d80d1338d221c11c353629da89ada623a61c5959a3eab642c750a7533430c2e343a1a96b952672a4e2b8378eeb7bbee7f9ae1bdc05ae8015a58a4b6a84ddae41d630b1aa12fa1557b0801e43d1cec7f347ca735da275dafdd3b39ed1bc6992d506edd6eb8bc123592b165bd61d4e2055f21d8b922ff9f007bbeb92026b010000",
    ],
    [
      "ETag",
      "btRIum9Fs8HJZqa5aaO9VQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "300040d17fc95a9cf80895eec00a624291e0ab6e18c0b4441181240874faef75fa1bf5aceff67e83384d991091bc5d58015e41178f8d613a4ca0796860bff16089cb233305a7294e34e9ad08cc5307c97003033c7796519d2d7aa555e123ecc53bf9f0a80f918dddbde8097f6b3bb588d7b0c8c6ae6d98c9d2d70e7dd6cea29b73ddd2f97ec7e539c91c9d2c4697604375a8cf543ecf5063c87bb6132a3469a12adbfcf2265d458e98d2f57ae77a9542894f73850e6671999d9a16f3be195b0209bcca116fae536b4b6ee7caf2656973e68ec8a72eb5d1dd0efdd3f12598166d307c7afa77c000b0b6e43513117fdc3e418631007feb47b22bd9e37f8bc535abc1cf2f9b8fbd1019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91f74a9b84d0b4a9548daa8451ad4db73405b1698a1ce72633a471b11d1042fdefbb71280321c1531cdf73ee39f7c34fe496d73919938c97770dc8c72f3722234704342df176b949ecd565a8d82f7a5ddeda78ab83ef0f93092278cb5274bbaba0a7442319a8f166dd2fa56876540ad1c3443dd7ebb9bee77b9eefbac1307091a7a02a16bcbe45f65fad776a6cdb07ed7e29445901dd71d56762fb726fdf1fdb3b296e806965bf95b45145d91f8b7ead04a39a8b7ab259a38146814c614b798516fe33f3ecf46dea3ea7db7e89e07bce8032269a5ab7b630051375c1cb469aac64fc448ccd5707b20e17e12cb198a89a6d9dd6740b47564e354df5e30eacf378b5b4e6d1f92a5e4e93f92a4ad7b38b7039edcf568bcd325a5b5717611c5a9a661518ae35b14ecd5f843fa89f83d2bc36ea497bdd2a3f3768fe7e2c2d01a51574c174e8f8d41d3941566443568cbc4156389065a36c38a05ee6b0e0044ef20c28f28ca861d15ad49eef07c1c0cbd3cca7909eb8ec38a55e40d320cf46c76ee6381e38647f441e24d770c6d54e28de75885cc5f3244c937813cda649684a286853e9b3ce585bc06b8f1a0b44d00735eddb2817a8d4b67b1e25613c9d25f3cbb09bf0024aca1ed77738e382560a104d25364f835c8a1c1b46a2e9323c43b099d88f435091f1ef27d2f6bc75f1aae52ff40407d8dad5e64bd6493c8fbe193b07c425ad1a03b9ef0e4402133247cffb3f88c315ed72909f9b30be26dd550c0548a8d9e7b344b0097cfad20e6b8f585c7c9451f87c396e0e53ad0893d06d1037c51ed89e33f0cc3bd554ea7731df090e3d6b73b419610bb57eaea85b7b2cb4136bd40b088338fcc8f46aff0f0693c00d76040000",
    ],
    [
      "ETag",
      "MUT/OVEscZaYgk/etat9Kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93516f9b3010c7bf8bf74ad43032b220f58174d91a89265d42b787a942ae7d50b78663b6c91645f9ee3bd32e9bd649f405eecebf13777fff39b047d54896b03b557defc0ecdf54e03efb6003b6d3ced2abc5c6020b18385e11b9ff3ae1675fa6178f3f2f67e1dbb12eedfde42c3d3f27c28a7ba8394b0eac54a0a565c9b7036b780dd42650777553f459c0dcbef5c56dbe59ae3e515ea3f4f9ea26cbd279b660c7e0d428b9e345cfbfa2edf618b007bcdb4009061a017e96d6e00308b7f46b5a5eb71a46163b23c0b21eee0f2a835dcb0de2882aa3301a85711447511c86b3e92c2450a3e04e6143eccd96e6630e1dd71bfc415bb23022c2f4316d5cf6cf1dd595ec37f1e17295c7937ec0bf012e04768d2b06c15219eb9ed4fb0d3eabf02fa9f92b41ba2aa587a00a1a096688526dc1a53460ed2089b6e06d7bc2e6eb75f65295461a547218dca90140bbdd09f898add3ff494b06fba3d587345fbc20ac23db9c907c79b5d8e6e9d5b5e76e9f8d30df3bb0d706c95516bca1c2f1e4fdbb693c7ef2d8057adfd17712673a0898e0f4ab5c2ac792926b0bc75f14e1db3d88030000",
    ],
    [
      "ETag",
      "yW4a/V7CkxH9120lfsh4/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-14-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4010fd2b64efab2da5202d4d1a3596bb23a9d5a3547377b9b4cb32705b295b7797aa31fdef372cd6d398e82760e7bd796fde0e4fe4965719199194177735c8c72f6b919223029a1678fa6bdd9f3cc4d75e703f9c38f72abc9a45c15d311e2382372c4537db123a4ad492811a2de6dd428a7a4ba5101d6cd471bc8ee3bbbeebfa8e130c0207790aca7ccaab5b64ffd57aab46b67dd0ee16421425d02d575d26362fe7f6ae6f6fa55803d3ca7e2b69a38ab23f163d2905a39a8b6abc98a3815a815cc286f2122dfc6766e9e9dbd65d4e37dd02c13bce803226ea4a37b6b0051355ce8b5a9aae64f4448ccd572f641e4ec3f3c45a957ab7b2a8b2964b09aa2eb5f535bebcb056129890995a5937dfc338b4ac95f1b3b2c6d689358d2ea2c46aa2ca40695e199184a6253402cf3944efd36f085453056d7139e8f9d419f682344f072c1fbac769de83341da68363eaa63d1678e0652950e4e9a6bb61d14a543ea31e73727fe8434621c7047de606ccedf77cbfef66c334076f483d9fec8fc8bde41a265c6d85e26d18e4268e927099c48bd9f959129a31728aa34f5a73cd10af7d6a1c12411fccb56faa5ca052936c344bc2f8ec3c89aec3f632a75050f638bfc3ebcc69a900d154d20d68901722c3d0c8d5e53c4aa2cbd9d91419e686ae0e084546bf9ffe1392c7ad49599b2799277134fb660c1c10d7b4ac0d64d7be1058e38608ae7aa7f0607c9b1dd9efff200bb7b1ed487e2cc2f827698f62c84142c53ebf4f049bc2a73fd561c3118b3b8e324ae3376e0f538d0893d06e11df34660e6cd77107e697d454ea77b563af7788abe9d174840d54fa79a276c371d056ac562f202ce2e5cf4c72fb7f779c6f3861040000",
    ],
    [
      "ETag",
      "Zj2DxRV49w8D1wsEPNI9qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d906d4fc2400c80ff4bfdca84814e21e103188998f902bac4c41072dcba31d8d679d7a193f0dfed0dbfdcb5bda7ed933bc23e2b6318c1264bbf6a34cd458abc70c1126d9db395aba2d222740059a542ee7f6e8bed4794cde68bc7c35337e971d4fd9d8cc74258bdc542c1e8084986796c61f479845215286debb569270ac64de52ab3f065f22e6941b14b9fa3309c4cc37b38ad4e1dd8d16689091a2c35ba8195a11d6a9e3b57ab8a2a47cf526d345a68e1f621355457ca107952f1fc2bcf0f06c16010f8fef066e80b9893569c51296cf406b2868955bea46f510507983614eba43d0f52ee5f0f2ffdbeb35afdf3d386d1be1a92e516dddeded9e18e9c178b2f9b1a3ba095fcc743c6e7fcf4078bb62cfc6c010000",
    ],
    [
      "ETag",
      "kx8mhXUiFIQJvM/f0tU/zA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d0bb64ad4e2418a43bc55050e45714709381180ac156868f084eef5ea7d7a8ef0eef0112c678d3d0f65af26ff006864452676c96c255748363e0fa911752ec93ba6f34617bc121efcdf554d390d5ed7767840263f06479ab5c1ce72e627e3b4d210c2aaa8f2e6265b8d0b7fa852742325372698d56d46e590c3a4ca3a49a4b3c1cf0f2fd8a098e8fa9af927cd365863cfa6cbfdec95a0ead834ff369e98449d1af9413b5ef9818cabc5ff0a3e38e81927958c0133edbf5c86d2c2fb5f8a3259f9dd405223353ebcb6255c63adf8cd03e46861835c93e6e0e2bd24a9be5ece5e5df0113c0ef5551f38616cfed68a1aa13f0579fb643c59fffd73ca9790d7e7e01b9202dea19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-15-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91f7953669d3572a55a36ac3e8d6a690a6a06d9a22c7b9c90c695c6c078450fffb6e1cca4048f029b6ef39f79cfbc813b9e5654ac624e1f95d05f2f1cb8d48c809014d737c9d5d5ecc7fcd690fbe7712db9e2a98873fee1e261344f09aa5e86e5f404b894a3250e3eda69d4b51eda914a285895a9d7eab337007ae3be874bca1d7419e82225bf2f216d97fb5deabb16d1fb5dbb910790174cf559b89ddcbbb7ddfb5f752dc00d3ca7e2b69a38ab23f16fd5a08463517e564bb4103950219c38ef2022dfc67a6c9e9dbd46d4e77ed1cc1f79c01654c54a5ae6d610a26ca8ce7953459c9f889189baf0e64e32ffd5964315154bb322ee90e4eac946a1aebc73d5867e17a652d82b375b89a468b75106f66e7fe6ada9ead97db55b0b1aecffdd0b7344d0a305c6b629d9a5b8017d44f41695e1af5a87eae959f1bb4783f969a80d20a9a603c7406b43372bc244b862c1bb9fd2473204946c9b04fddc4615e0f7a6902147946d4b068294a27f53c6f30ca62374dddb8c746a378d4a35eec3067d8cf0086dd24218713f220b98639577ba178d321721d2e223f8ec26d309b46be2921a355a1e78db1ba80d71e351688a00f6a3ad4512e50a96ef72288fc703a8b16577e33e125e4943d6eee70c6192d14209a4a6c9e06b91229368c04d3953f47b099d8c531a8c8f8f713a97b5ebb78d5f2177a8403aced6af3259b285c04df8c9d23e28a169581dc370722810999a2e7c31fc4e18a3639c8e5d60f7f92e629840c2494ecf35922d8043efdd38e6b8f585c7c94511aefb8394cd5224c42b341dc147b64bbddae63fe534da57e17734dec65ddeb8cb083523f57d4ac3d16da8855ea0584411c7e607a75f80788b6abb8760400",
      "00",
    ],
    [
      "ETag",
      "CQPDZDa4eJ1b//AseDRKqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93516f9b3010c7bf8bf7382205d1d214a90f644dd64834e912f23455c8b50fe6ccf8986d324551befb0eda65553b89bec0ddf977e2eeef3f47f65319c912f6a4aa5f2dd8c3a70afcb72e58836bb577f46ad038600103cf2b228d2871bebddb4d6ec7f3bc9da479f499dbf4e68608277e40cd597264a5022d1d4bbe1f99e135509b40ddd6a6e8b380f943d31537f97ab1fc4a798db2cb97db2c4ba7d98c9d8273a3e49e173dff81b6c753c076f8b486122c1801dd2c8dc51d08bfe8d674bc6e348c1cb65680633ddc1f5416db865bc4115546e1e5288ca3388ae230bcbeba0e09d428b8576888dd6e683ee6d173bdc6dfb4250b23226c1fd3c665ffdc535dc97e932e5c2cf3f8a21ff035c085c0d6f862102c9575fe59bdbfe08b0a6f49cd3f08d255293d04556024d8214a350597d282738324ba8237cd199bae56d97b558cb4a8e430b8570380f6fb3330cf56e9ffa42583fdd3ea36cd67ef08e7c93667245fdccf36797affd0718f2f46981e3cb8078be42a079da1c2f1c5e4f22a1e3f7bec0b76bea3ef24deb61030c1e957b9539e2525d70e4e7f00afe18c5088030000",
    ],
    [
      "ETag",
      "ncfoFUHj8D0FTu8AT3+arA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-16-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda0612921022456dd7b20d294d5b429a4dd394187361ee08a6b6691b55f9efbb98a68f4d6a25248cef39f79cfbe091fce1654ac624e1f96d0d72fbe94624e48080a639def26c6953996caf66f72a5cd61bdbfdfcfde16a3241046f588a6eaa020e95a82503355ecc3bb9147545a5108798e8b03bc4c71dbaeeb0dbf53dbf8b3c054536e5e51f64ffd6ba5263dbde6b777221f20268c5558789cdf3bd7dd7b32b296e806965bf95b45145d9ef8b1e158251cd453959ccd140ad40ae60437981165e986972fc367587d34d2747f01d6740191375a91b5b98828932e3792d4d56327e24c6e6ab039907d3e034b6d65ca815adaab54595b55a495075a1ad2fd1c5b9b596c0844cd5da5a7e0ba2c0b2d6c6d3da9a5847d6343c0f63ab69570a4af3d208c53429a01179ea45f8ff041a02d554411b5c79ce9076478e9f6489c7b2913b4832079264947803ea260ef3fbd04f13a0c8d34d76c3a2a528132f1d8c52b7eff7d251d27507c374e8b0ccf57cc83c3f6590a5d4f386bd3ed91d907bc9359c715509c5db86906514c6c12a8e16b3d39338306564144b3f6bcd3545bcf6a9b14804bd53d7ae8972814a4d77c3591c4427a771781db4039d424ed9767e8b23cd68a100d154d20d6890e722c5a691cb8b79188717b3932932cc942ef70845c63f1f5f08f1b6325dd6e64de67114cebe1a037bc4352d6a03b96b0f046e704b0457ce313c18df664f76bb5fc8c28d6c3392ab4510fd20ed5504194828d9c7f344b0097cf863edb71cb1b8e728a3347ee3f630d5883009ed16f14d6366cf767bbed727062cf5bf31d7f19d7dbb9a1c4d46d840a99f2a6ab71c0b6dc56af50cc2200e7f663ab7fb0bab923d0265040000",
    ],
    [
      "ETag",
      "ifW/arbyQNwsIWum/3BXxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cbedab859582c3821f74081b74da55dc0787488cd7ae5ddbabc96552c5ffbe4b15427279f3dcbd2fb9c26fd91e218643599c1c9afea940fef44586d6d56ce5e8a8b5082340568590aec8a2ba8ab6e7f5659b5edcc7e9ebe2d2d9742a84d53fd82888af9097581f2dc4df57685583d2b6df9b61a260dc775e99af56c962b614a1a1a317969b2499cd9305dc76b7115474c8304783ad463fb23354a1e6779fd6aaa6ab31b0e48c460b033c3c14865ca70c51204a108e6545e3281a87e1e465120a5893565c522bec660d62c3c4aacee82c61c103662825773eec7f22b371e833ed1ef4bc67b4a921b1b6e85d9fef095ec9a76249eb3b46a095fcc75bc9f7fbed1f4aa8d8146c010000",
    ],
    [
      "ETag",
      "ugR3lj3ZwSzZPzuMqVzuPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb642d0c0401d31d714019bf885860c3841849402ae527e8f4ee757a8dfaeef09e8050ca9a26696f05fb021f602410c9544e152bec95c7718bf203c56e9e5d0e7c9ef538c312944ee5da4d4c6e18538d9fa52ba9e278abbbbc57ba7b669b1d79e000cd0c4f5c36b372b99eae93bb935fe7d262b6748f63f46dd8b550ad0c0686947a3dbdc052fbcc51615a43e8d97b1af24e15a94f6e65411daf5cc492662b9dd7550ca9beb9da09bc6c4e2374b05d17858b2b665782e64a6445466e06ab1d53d36880889be43074fb51bf6716f2e3284d34a8345c3db79b26f05df9ededdf0113c0864ad4ac49c46bbba62334017ff59376acd8eb3f66a46635f8f9055f03405219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-17-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b6f9b3014fd2bc8fbb8268490b714ad514a5ba4846c40da4dd3846c73616e094eb1695555f9efbb98a66b55a9fd80c0bee7dc73ee8327722bca94cc0813f95d0dd5e3971bc9c809014d73bc150bf8594eb6b65fb32bdafbea9437172c7a98cf11211a96a2bb7d011d25eb8a839a6da36e5ec97a4f2b293b98a8e38c3bcec81db9eec871a6e3a9833c0545b612e52db2ff6abd5733db3e6a777329f302e85ea82e97bb977bfbbe6fef2b79035c2bfbada48d2acafe58f45b2139d54296f36d84066a0555023b2a0ab4f09f99b2d3b7a9bb82eeba3982ef0507cab9ac4bddd8c2145c9699c8ebca6425b327626cbefa2091b7f296b1c56551efcaa4a43b38b152aa69a21ff7609d879bb5e507e79b70bd88fd4d9044cb4b6fbde82e37abed3a88aceb4b2ff42c4d5901866bcdad53730af080fa29282d4aa31e37d78df27383fcf763690828ada00d26e3de883a93de94656cccb3893b64590f189bb0f190baacc7a70318a40c28f28ca861d152967d379bbaa374928cb9cb92c188f713d6ef4f123a749de9b0470713674c0e27e4a1121ace84da4b25da0e91ebd08fbd240eb7c172117ba6848cd6853e6b8d3505bcf6a8b140047d50d3a1890a894a4dbbfd20f6c2c532f6afbc76c22bc8297f8cee70c6192d14209a56d83c0dd55aa6d830122cd6de1982cdc4be1f838acc7e3f91a6e78d8b572d7fa1c738c0c6ae366f12c5a11f5c183b47c4152d6a03b96f3f48055c56297a3efc411cae689b83fcd87ae12fd25e8590410525ff7c960836814fffb4e3da2316171f6594c6336e0e578d08afa0dd20618a3db2f1e9b9c4802bfd3e36758f3d6b7234196107a57eaea85d7b2cb415abd50b088338fcc0f4eaf00f59494b2f76040000",
    ],
    [
      "ETag",
      "iAeXn8U/IubVa0+1njGbSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93514fdb3010c7bf8bf79a6a4485b444e2212d81550a2d6bc3cb261419fb12cc1c5f663bddaaaadf9d4b60dd3490c24b7277fe9d72f7f73f7bf64319c962f6a0aa9f2dd8dda70afcd72e58836bb577f46ad038600103cf2b2297d3cdee9b9daaedf5fc770ae91c1fa3cf5572714184138f507316ef59a9404bc7e2ef7b66780dd42650b7b529fa2c607ed774c54dbe5e2caf29af5176f9f22ecb925996b243706c94dcf3a2e73fd0767f08d8133eaca1040b4640374b63f109845f746b3a5e371a460e5b2bc0b11eee0f2a8b6dc32de2882aa370320aa371341e4761783e390f09d428b8576888bddbd07ccca3e77a8dbf684b168e89b07d4c1b97fd734b7525fb4dba70b1cca3d37ec07f012e04b6c6178360a9acf32feafd015f55f89fd4fc83205d95d243500546821da2545370292d383748a22b78d31cb1d96a95bd55c5488b4a0e835b350068bf3d0257d92a794f5a32d85fad2e933c7d43384fb63922f9e226dde4c9cd6dc7ddbf1a61b6f3e06e2d92ab1c74860a4f4ea76793e8e4c56373ec7c47df89bd6d216082d3aff2457916975c3b383c031ee2ba2588030000",
    ],
    [
      "ETag",
      "N8SyZr8ivGCxEeECoh6/gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-18-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553ef6f9b3010fd5790f7b50910080991a2b66bd98696a62d21ada6694a8c39985b8253db74abaafcef3b4cd31faab47e027cefdd7bf77c3c925b5ee76442325ede35201f3edd888c1c10d0b46c4f93cfe5a52b16763928d460c4cad9ddf7a09c4e11c15b96a29b6d053d251ac9404d968b7e2945b3a552881e36eab9e39e1b7881e705ae1b8e4217790aaa62c6eb5b64ffd67aab26b6bdd7ee97429415d02d577d2636cfe7f6fdc0de4a71034c2bfbada48d2acafebfe8612518d55cd4d3e5020d340ae40a36945768e1859967476f5bf739ddf44b04df73069431d1d4bab5852d98a80b5e36d274259347626cbe7a218b68169da4d63aa71ad61655d66a25413595b6be24e767d65a021332576bebfa5b944496b53686d6d6d43ab466f1599c5a6d563928cd6ba392d2ac8256e12988f87dfc2d816aaaa02bae464e40ddb11366453662c5d81b6685035936ce4643ea650e0b7df0f30c28f274dbddb0682deadc1b0579508485e38c33e6794e18b0820df2d0777d3f1f8683c178c886994f7607e48fe41a4eb9da0ac5bb34c87512a7d12a4d96f393e33432631414473fedccb543bcf6a9714804fd67ae5d5be50295da68e3791a25c727697c1575b7398392b287c51dde67412b0588a6926e40833c133986462ece17711a9fcf8f67c8305774b1472832f9f9f842481fb626656d9e649126f1fcab31b0475cd1aa3190fbee85c00dae88e0ca3982bfc6b75992ddee17b2701dbb8ee47219253f4877944001126af6f17d22d8143efcabf62b8e585c7294511abf717b986a4598846e8bf8a635b3677bbe37f489014bfdaee607fe3eaeb647db113650eba789ba15c7413bb1463d83b088973f37c9edfe015c9f5b4f62040000",
    ],
    [
      "ETag",
      "bRBgQ1oS/g2fs27cgLqK6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c16ec2300c40ffc5bbb652432518481c6063625337b16e5c98100ac174eddaba242e0821fe7d4ee192d8ceb3fd940bfce5f50e46b0cdb3438bf6fc90217ffa2045d796ece46aa876080120eb4cc89457d961a05e4cd3becd078bea58d4abf7d3782c8433bf5869185d609f63b97330fab940ad2b94b6cdc6761305e373e32bcf93ef996415ed7cf6b14c92c93499c1757d0da0a06d8a7bb4581bf4f31a4b051a7ef5aa4e574d89a1a3d61a74d0c1dd4366a96db4250aa512aac750f5e37e1cf7951a0e864ac0928ce69c6a61975f206b985897299dc4143c60bb50a4f7dd7994722fea4561d40b23e5cdd6f79ee999d12d2c898043bf3bba793c9177637166db620046cb97cc73bee5d77f0039c95e6f010000",
    ],
    [
      "ETag",
      "RtZgq71FcpuJH7PmvjnZMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d35b7282301400d0bde45b1c0b6242ffa4285512a9a2e2f8c3f0b8520479052269a77bafd36dd4b387f38dc23806ce83aecaa144af4886aa318ec74e4dcc657aed179edf1493febd68ef9a8a0fdd621a1179d8f592d815db6dcfa1559bcb8f405557a1f992f395fa95e15cd9587311256c4db6a722d18e56527a42f0f098029ce69ed1bc55b35b697276c9b5c699d1433a305b91caa70052e28e0a79af803a6e0a910f43ee78be6e118a7b625d5a91ece1d84da375bcdf2dd4e99c3552b94d28ae982bb2fb126f6c97bae6f57aa6995de82baea7fee04e587b5236d89ab1f1d3d3ff854608863a6b8107d963bba61bc608fdd50f3a59c3e3bf09610b2dfaf90522a08f4119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-19-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fdb3014fd2b91f7953e42dbb4a9548daa845189a62c4941689a22dbb9c90c695c6c078650fffb6e1cca6093e0536cdf73ee39f791677227aa8c4c0913c57d0deae9cbad64e48880a105bec6b4af72769fd7e6f8fce6d2fcd6972b3f7c9ccd10211a96a6db5d091d2d6bc5414f3771b750b2de5125650713755cbfe37a036f30f05cd71ffb2ef23494f985a8ee90fdcb989d9ef67a07ed6e21655102dd09dde572fbfade7b38eeed94bc056e74efbd640f5574ef63d1afa5e4d40859cd36311aa835a814b6549468e12f336327ef537705dd760b043f080e94735957a6b18529b8ac7251d4ca6625d367626dbe399038b8081689c365596fabb4a25b3872326a686a9e76e09c45eb95b30ccfd6d16a9e2cd7611a2fce83d5bcbb585f6c5661ec5c9f0751e018ca4ab05c67e69cd85b8817d4cf401b5159f5a4796e945f1ab4fc7f2c0d01a535b4c174dcf7a83be9fb2c67639e4f062396f781b1091b8fe880f5b93f8461c68022cf8a5a16ad64056ec6fbc3499652ea4dd221a32ca5230ea93bf03c8f523f073622fb23f2a8848153a177528bb643e43a5a26419a449b70314f025b424eebd29cb6c69a02de7a345820823ea869df448544a5a6ddcb3009a2f922595e05ed842fa0a0fc29bec719e7b4d48068aab07906d44a66d83012ce57c12982edc42e0f414da63f9e49d3f3c6c59b96bfd2131c6063d7d82f899368197eb3760e882b5ad616f2d01e88022e55869ef73f11872bdae620df37417443daa708725050f1cf6789601bf8f44f3bac3d6271f151461bbce3e670dd887005ed06095bec813d18fae36362c1cafc1b1bf5fde1a1674d8e26236ca1322f15b56b8f85b662b57e056110871fda5eedff000ac4670176040000",
    ],
    [
      "ETag",
      "Sa0rfbqfut2HYPtxsPM9Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d93614fdb301086ff8bf7359588028146e243ca3a5629b45d1b3631842237be646e9d5c663b4555d5ffce3940996052f892dc9d9f53ee5ebfd9b38dac058bd84a967f5bd0bb2f25d81f2e5880699535f46ab036c03c069697442ee374bd297e5d9ccdf5f5ddefd5a60a5afcf978794984c9ff40c559b4678504250c8beef7ace615505b8eaaadeaaccb3c66778d2b2ed3c5647a4d7985c2e5d3db248947c9981dbc63a3e096671dff89b68783c7d6b85a40011aea1cdc2c8dc635e476e2d634bc6a140c0cb63a07c33ab83b2835b60dd78803aa0cfce1c00f83300842df1f9e0f7d0215e6dc4aac89bd5dd27ccca2e56a818fb425f303227417d3c645f7dc525d8a6e13174ea66978da0df82fc0f31cdbda66bd6021b5b1cfeabd822f2abc2715ff24485725551f54422d40f751b2c9b8101a8ce925d164bc698ed868364b3eaa520b8d52f4835bd90328bb3d02df9259fc3f69c9606f5a7d8dd3f107c258b2cd11492737e3651adfcc1df7f06284d1ce82996b2457197086f24f4e2fcecec393678f5da1f31d7d27b2ba058fe59c7e95efd2b2a8e0cac0e109e20a17ad88030000",
    ],
    [
      "ETag",
      "SATjkfW85PrGYZbkm3uoVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-20-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553614fe24010fd2bcdde578196026d49887adaf39a206a299acbe502dbedb42e962eee6e3d8de1bfdf742b7ac6443fd1ecbc37efcdcce399dcf12a236392f2e2be06f9f46d2d52724040d3025f7bf4f63b5b4ffb737de689e9a3bda6f1497d35992082372c4537db123a4ad492811a2fe6dd428a7a4ba5101d6cd4e9db1d67e48e5c77e438811738c85350e6535edd21fb56ebad1af77a7bed6e21445102dd72d56562f3fade7be8f7b652ac8169d57b2fd94315d5fb5cf4b0148c6a2eaac9628e066a0572091bca4bb4f0c6ccd2a3f7adbb9c6eba05821f3803ca98a82bddd8c2164c54392f6a69ba92f1333136fffb20f3701a9e24d64a69ecb9b2a8b2964b09aa2eb5f523be38b756129890995a59373fc338b4ac9571b4b226d6a1358dcea3c46a969581d2bc3232094d4b68245e36117ddc7f43a09a2a688b4bcf1e51c7b783344f3d96fbee30cd6d48533ff586d44d6d160c6090a54091a79bee86452b51a5b91ff4a917d051967ae0b3d4f521a036ebf707ceb0ef0d82e1007c3773c8ee80fc955cc329575ba178bb0e72134749b84ce2c5ece43809cd1839c5d14f5b73cd10fffbd43824823e996bd754b940a566b7d12c09e3e39324ba0edb734ea1a0ec697e8f07cd69a900d154d20d6890e722c3a591cb8b79944417b3e32932cc8d2ef70845c6bf9fdf08c9d3d66c599b5f324fe26876660cec11d7b4ac0de4a1fd20b0c68c08aeec237834be4d4a76bb3fc8c23cb61dc9d5228c7f91f629861c2454eceb7b22d814befc5bed338e584c39ca60f234c7f430d58830096d8af8a631b367bb436f60130396fa43cdf79cfdba9a1e4d47d840a55f266a338e83b662b57a0561118f3f339bdbfd0393e6193263040000",
    ],
    [
      "ETag",
      "/ahBcjL2StG7oLx0jaRCuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "1046df65bca586528b96840b402298a208343131842c655a0b6d67dddd0a4dc3bb3b5bbcd99f6fcfcc9c6c03a7ac3cc000f659fa53a1aaef52341ff6b0425de546f326a9d4081d402352262f93775f7e46a77548bd97289c3d4b99bc9e87432674fc8d858041034986f941c3e0ab815214c865bb9d6a3b32666a6993cd7c315d6f468b2547051d6cf41685e1681c4ee1babd76e048fb1526a8b08cd136958a8e189bb9f5d5a290393a9a2a15a386166e1f524595148ac8e1c4e9751db7eff53dafefbac163e03298532c4c4625b3d11a788c2123f2159d59172ca0da239b27edfa6be37bffa9ebfb811b3c4c032bb7fd2f1bd706f552113b68b4e3bb379509593dc3da4655d88158f0d7cc3273bb5fff00ea1b9fa177010000",
    ],
    [
      "ETag",
      "xCO5pXUkSLo2GULHDppfJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ffedd35b7282301400d0bde45b9df252e81f14d06a5182b6067e329978918702428c42a77bafd36dd4b387f38d18e7d07554d42554e815f54cb5267cb26a4cc73f66377295878cc80bbfeab55ddf9dd5f8e496374f7a3d7c063c9fcdb1ed38899115dba54b02b6d02b8ef78a7b6e449bcc0d85d380d0429d9aa19a42b5b4d865b6b75ee0633b687a9d0886951d2dcaea3cdd11ed2d8b23396e52ace05c5974055fd0c88f58e7ae638d8417d397213f6704cb6616f94e0a9b7c7e54324f305a7a6edc1e93d317a81b210f4350c23b3e6ced210d8d646d1afb411feffa52c4f675f2f4f47fa111827b93b7d0d1fcb15d332c6b84feea53d137f0f8ef006ba1453fbf17f79ed219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-21-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85545d6f9b3014fd2bc87b6d1208690891a215a5b48d94900d48ab699a90ed18ea96608a4da6a8ca7fdfb569ba5695da27b0ef39f79cfb01cfe891575b344584174f2d6b0edf1e04416788295cc06d1c3dedef6e92320aaebd89b39f3bf523b90a66334070cd92785797ac2745db5026a79ba45f34a2ad7123440f12f5864ecf19bb63d71d3b8eeff90ef0242bf325af1e817daf542da783c149bb5f0851940cd75cf6a9d8bdde0ff6c341dd880746951cbc971c808a1c7c2efabd14142b2eaad9260103ad644dc676989760e13f734b2edea7ee73bceb1700de73ca30a5a2ad94b60529a8a8725eb48dc98aa6cfc8d87cf382927019ce538b8ab2dd55598577ecccda62853375a8997515af57d622ba5ac7ab205daca32c99df84aba03f5f2f37ab28b1ee6ec238b4142625335c6b665d98530407d0df32a97865d4537dad955f1ab4f838164d0069c9ba60e6d963ec4c6c9fe4c4a3f9c43d27b9cd089910ef1cbbc4a6fe888db68461e01951c3c295a83cdf1b13dff7b221b327d9c8de7a993ff19dcc1d8d5cd7b687c30971d1f10cfd6db862975cd642f2ae43e82e5ea46196c69b681ea4a12921c76da92e3b63ba80b71e151408a04f6a3aea2817a0a4dbbd88d2300ee6e9e236ec26bc6405a687e409669ce3523240e3069aa758b3125b68188a825578096033b11fa7a044d3dfcf48f75cbb78d3f2577a0a03d4769579a2248d17d1b5b17342dce2b235907df7826ab07c0fb581ebe31f40c2927659d0cf4d18ff42dd55cc72d6b08a7e3d4d009bc097dfda69f1010bab0f3252c11976874a2d421bd6ed1037e59ed8ee78e4b9c8801bf52136b6dd53d7740e9d91ed58a55e2aea161f0aedc45af90ad2bf934d14996e1dff016b418b5c78040000",
    ],
    [
      "ETag",
      "RNqvWHSlNAG781vC1pkbFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "514fc2400cc7bf4b7d1d09139cba840740d4250365cc2743c8792b63b0adf3eea612c277b737158d9ae8cbaded7eedfaffef76b0c9ca047c78c8d2c71ad5f6284533b54184bace8de64745a54670008d48991c47c3974e5a7a9b699d0b2f91c3f5f6f169daeb31a1e50a0b01fe0e9619e68906ff7e07a52890db24e575512e9acc01b3ad6c711647c1e48af382129b4feec2b03f0847b0770e8d893062d1f0ff689bef1d58d343844b54584ab4bb548ad6284d60656a515439b634d54aa286066e5ea48aea4a28a216575ac76ecbf53a5ea7e3b9eef9e9b9cb604e52988c4a66ef66bc1f1832228fe8995582c7806a4216bc6cce272e674923c486c124f6bacd7e5f01859254b2f893ab78dd95e0bff081bd3bf09d1305d5a5395097e14dffb7716ce9e7a88b7e3cfa4168c3461d9038188f66717f7c6bb9f9bbf4c1d6a0be55c43e6ab416baedeed9c9a9d77e737548d669fe8e6f548d0e48c197e33a33e02f45ae71ff0a66431db67a020000",
    ],
    [
      "ETag",
      "MRCx3gn6kQula6dcCjyqvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-22-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535b6fda3014fe2b91f7d24a2d01020941421da25997894207816e9a26709c93d434c4a9edd05515ff7d2749e94595daa7383edfe5dcfc486e7916913e09797257807cf8b211213921a06982b796e72c37e7bbf10ffa4fdc6fa6996945bfaeef070344f092a5e8364fe15489423250fdc5bc914851e4540a718a42a7edf669cbb66ccbb25b2dd7715bc85390c6639edd22fb46eb5cf54df3e0dd48844852a039570d26b6cff7e6ae6de6526c806965beb534d145991f9b9ea58251cd453658cc318142815cc196f21453786146e1d7b7d20d4eb78d04c13bce8032268a4c9769a1041359cc934256aaa4ff48aa345f1dc8dc1b7ba3c0184d87636f3ef28e86cb8ba335dd961aebe313a3796c5065ac561254916ae3db6c7a69ac73b4bda10ad4dab8feeecd3cc3584b6042462b1ead8d8171668cfd4b3f30ca2e46a034cf2aff80862994de4f2df2df0fa624508dd27570e5346ddaea35dd300e1d16f7ac6e1837210c7ba1d3a556d8646e073a51081479ba54af583413990b2130dbeaba51b7d7b15cb70db6437b4ed8b38131cb72c0ed8610b729d99f907bc9359c73950bc5eb3e91eb991f78ab60b6988c8681579511536cc0799d5c59c4eb3c351689a00feada97512ed0a96cba3f09bcd97014f84baf9ef31812ca1ee67738e998a60a104d25dd82067929226c1ab99acefdc09f4e86636454c3bb3a2014e9ff797c21040f79d5655d7d4b2fbb53f91f004b9a161562571f488becf77f11813b5993c9cf8537fb4deaab19c42021639f8f0ec155e0d3a775d873c4e2a6a38dd2f88f8bc25469c224d40bc3b7557a4f6ccb6963251558ea7731cb760f9d29354a45d842a69f2aaaf71c0badcd0af50cc220ce79e24f2e30fa1f2bab941867040000",
    ],
    [
      "ETag",
      "3E7VjDvLJaxowjOn/3dXWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90514f83301080ffcbf93a8c8c8465247b60c6450c0e659b219a65e9ca812070d816cdb2ecbf7b65beb477d7efeebef40c5f55974300c7aafc1e509d6e4a34af3648510f8dd17cf5d4698409a01125934f6992d56be147abf7ed5b94b5d3e72cd9848b05135a7e622b2038435161936b083eced08916b9ed7050e344c6cca9b795559c845b4e5bca6dbadec571b88c1fe0b2bf4ca0a6638a052aec24da81bda21aa589acab166ddfa0a3695012358cf0f8502a1a7aa1881cae38d3a9e3fa9eef79beebce677397c186a4301575ccee36c06b0c19d1a4f4cbaa600135866c5d8ce78f2ddfce3cebb4ffa7972783fa4511afd668b7de5d0deec95a19b6356ac00948c1bff158996b7ef9033bc42b4b6a010000",
    ],
    [
      "ETag",
      "JROXjNa6IFZTVIXm2MXOSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ffedd3597282300000d0bbe4db322c9a86fea10382295550b6fe6458c2aa10032ee0f4ee757a8dfaeef01e204e53daf764e81ada820f30c6b22aa40266686914e5978391d86f6ed03059baef066dc9b550aded319d7b73021bd7a7249f90753b5108bb60b5b082ecbd4708aff80dde2f0dee022c96539c116bd0cc2b57768edd1e33dc775dbe0ef8c5af953a504751f7f8869dead00eabfd1149d380e4a665db7b58256d2c2b522816bb411e45c9f88eac434926db2f0eaebe76cda47278b44a928cc0fd5be2e78e860d74be9eeb85859dcfad221d986ee45075c6f31479a5f0f2f27f8119a0775671da93eab95d59a8ea0cfcd527c3c8e8f3ff92c69c72f0f30b2dc3e8d419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-23-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fa34014fd2b64f6d51628424b93666d2a2a494b77816acc66438661c0516090196a8ce97fdfcb605ddd4df48999b9e7dc73ee072fe881d5199aa394158f1d6d9fbfddf3149d202a7101af99bcb9349f1cab7dbcbccfae1e6e9f36fb8b6eb9580082f52c81aba6a423c1bb965031df45e3a2e55d835bce47906834b146a6633996e598a63b754de0095ae66b563f00fb4eca46cc75fda83d2e382f4a8a1b26c684576feffa7ea2372dbfa7440afda3a40e2a42ff5cf47bc909968cd78b5d04063a41db8456989560e12f334bcf3ea61e335c8d0b00ef19a19810ded5b2b7052908af735674adca8ae62f48d97c774091b7f656b14678d9557552e38a9e6819963891cf0dd52ec2ed46f3838b6db859c6fe3648a2d595b7598e57dbf56e1344dacd95177a9ac4694915575b6867ea16c005f4332a24ab957adc3ff7caaf0df2ff1f4b4f006941876032351c6cce0c37cdd329c967969de6064dd3593ab5b1951ac43da5a7594a31f094a862e19ad7869dbb0ec676925b39494ea7ae91a413cb4a6c7332b1496e5bc4cdd1e1043db54cd273261a2ed8d0217413fab197c4e12e582d634f9590e3ae94e783b1be80f71e251408a04f6a3af451c641a96fb71fc45eb85cc5feb5374c784d0b4c9ea34798718e4b41018d5b689ea4ed8667d030142c37de3980d5c47e1c8302cd7fbda0bee7bd8b772d7fa3c730c0deae545f14c5a11f5c2a3b47c4352e3b05d90f07d480e53ba80d5c1f7e03129674c8827eeebcf0160d4f21cd694b6bf2f53401ac025ffe6bc7c5072cac3ec8080977d81d227a11d2d26187982af7c8b680ec20056ee5bfb1996119c7aef539fa8cb4a2b57cad68587c287410ebc41b088230fe4075ebf007e3b42fb978040000",
    ],
    [
      "ETag",
      "dtWG1w63rqGjdHkYwMvFuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "86ff4bfdca1271ca1cc93e4c452561736eccc49865b941411428de1d5bb665ffdd1eea346aa25f8eb63c2d7d5f6e0bcf5919830b8b2c7da951ae0f52d4b72618a3aa73adf85151a9102c402d5226579e4ad26ae16deeefbdf0ee3c89d56659af7a3d2654f4888500770b498679acc07dd842290ae4b688f2ba28e74d66815e57a63809c7fef08af38262930fa741d03f0b3cd859fbc65868316ff87fb4cd76163cd1628c094a2c2334bb54929e30d2be91a94451e5d85254cb08153470f3229554574212b5b8d23a6ab76ca7edb4db8e6d773b5d9bc19c22a1332a999d4e783fd0a4453ea615ab048701d9842c3869ce2597b3b81162427f183ac7cd7e5f018911c978fe2757f1ba8f82ffc207f6eec0774e1454977a4f5d0637fddfc6b1a59fa32efaa1f783509a8dda23a13ff026617f3032dcec5dfad95aa31a49621f151a0bedc3e3d3938e73f8e6ea3919a7f93bae96355a1009be1cd799063711b9c2dd2b827a1fc07a020000",
    ],
    [
      "ETag",
      "wEsfgpbEzYYETVCfdszvuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-24-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "10fd5790f765939a100a252152d44529dbd8d2a44b48a3699a12db1cd41dc1d4369daa2afffb0e68fa4395da4f18df7bf7eede9defc95f5124644898c86e2a50771fae252347040ccdf0767ac5725bfd606b7b193aa1597e67b3f57a3c1a2142d42c4d77650e1d2d2bc5410f57cb6ea664555225650713758ebd8ee3bbbeebfa8e13f40307791af2742a8abfc8be32a6d443db3e68773329b31c68297497cbdde3bd7d7b6c974a5e0337da7e2969a38ab6df163dcd25a746c862b45a62019506b5811d153996f0c44cd8e797a9bb82eeba19826f0507cab9ac0a53978529b82c529155aac94a86f7a429f3d9812cc3693889adc97c358b3f6ee9ae266f3f59545b9b8d025de5c6fab2989f5bdb12b5aea806bdb5d6dfc24568595b055caa642392ad35b24ead69741ec5566d5d02da88a2118d29cba1167cf0257a3d8d9a400da66e839b7ecfa7cea017b094f5793a704f58da03c606ac7f425dd6e381075ec28022cfd4d91b162d64e1bb8143b9cfbc843adce1417fe0791e3ac2780203ea786910308fa59cec8fc83f250c9c095d4a2d5a73c87a11c5e1265eac6693711c366da4140d386b8bab9b785ea7c12611f4465ffb3a2a242ad54e47b3385c8c27717419b6c39d4246f9ddf206c79bd25c03a2a9a23b30a0ce6582a6918bf9328aa3f96c3c454633b18b034293e1effb27427c57362e9be65b6bf95ea37f005cd2bc6a10b7ed813864bfff83085cc4964c7eaec2c52fd25e2d200505057f7f74086e02efbea7c3722316d71b65b4c17f5c14ae6b11aea05d18b16bca7b60bb033f38210d589957b1c1b17b70a6ce5167841d14e6a1a376b9b1d156acd28f200ce29c67d1ec2b46ff03fdce0cd85c040000",
    ],
    [
      "ETag",
      "Lhbl/rKbW/SE1EtSJbNWWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90d14e83401045ff657c1412118b29491fa84169421a45ab89a669b630502a30b8bbb421847fef2cf56567f6eed9b93733c06fd964e0c3be2cfe3a94fd4d81facd3409aaaed28a4b4b8d42b000b52898ec9243e8de46e7d32cfc0e82e72ffa4c6651b05830a1d203d602fc01f212ab4c81ff3340236ae46fbb9d9c2632a6fbd628abf547f812262cd4941961bd89e3601987306e470b8eb44f3047894d8a66642be988a95e99b44ad46d85b6a24ea6a86082a7874252d70a4964b362df3fd88ee77aaeeb39cefc71ee3058512a74490db39b77601b4d5a54099d392c18404e2de7cea7f3c4b267026dffd165af51bd4a625f85c6f2ee6aff442692e6a85a7668412a781951a9aff7f102bd9ce57269010000",
    ],
    [
      "ETag",
      "uRhE3+Hwv5EZAAFWoVR5HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d0bb64ad0e120bd21ddf8a2011416ad96400034644c3c720747af73abd467d7778df20c932d2b6b8bb95e40adec19088ca2c9b396ca959c589651724b332da2741e81ad554a0621cf7675bac0cbfe65313affd00f14f73e495bb73247b0b7b2f4c1d23a7c7074717cc478166e39d5d03219813e445565de5dac24707b8321d7669779bea4b773b39f66c890b5ee4ee970acc5353950a351edcd8d0d1116f4b14d5a95234544e4f1879b0d7d51c4777c5b985b9edb0b35eb73ddc0a2b6b80737e5a68a885c2631d93f54d54971427fd41ecc6ca4f3e36b39797ff0b4c007930da9016d3e776f8a62813f0571f770323cfff1a491ad2809f5fb22417e219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-25-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fb9a6721e421456b94d21529211b9056db3421e35ca85bc0149b546d95ffbe8b69fa50a5f613b6ef39f79cfbe089dcf262476624e6e95d0dd5c3b71b11930e0145537c2dbd8bc76b77e5d7e3cbc7bdfd87d5754d6f16f3392278c392342f33e84a51570ce46c1bf4d24ad425ad84e862a2eec9a83bb44ddb34ede1703a9e0e9127214b56bcb845f6b552a59cf5fb47ed5e2a449a012db9ec3191bfbcf7f727fdb21237c094ecbf97eca38aec7f2efa3d138c2a2e8af9364003b5842a829cf20c2dbc3277f1e9fbd43d4ef35e8ae03d6740191375a11a5b98828922e1695de9ac64f644b4cd370712382b67191a4c64755e4405cda163eca8a2917a28c138f7376bc3f5ce37fe7a11ba1b2f0a9617ce7ad15b6e56dbb5171857178eef188ac61968ae31374ef5cdc30beaef402a5e68f5b0796e949f1be47e1c4b434069096d301a0f6c3a9c0ca671128f59323147713280389ec4e31135e3019b5a60ed62a0c8d3a29a450b5198890527e600a291354a222bb1ad6862531a25539a50dba271321e904387dc575cc11997a590bced10b9f2ddd089427feb2d17a1a34b48689da9b3d65853c05b8f0a0b44d027351d9a2817a8d4b4dbf542c75f2c43f7d26927bc8294b287e00e679cd04c02a26985cd5350adc50e1b46bcc5da3943b09ed8cf635092d9df27d2f4bc71f1a6e52ff41007d8d855fa4b82d077bd1fdace117149b35a43f6ed819468f91a6b43d7877f88c4256db3905f5bc7ff4dda271f12a8a0605f4f13c13af0e5bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b947b639352723a2c195fa10b370c69dd7856f32420e857aaea85d7c2cb415abe50b0883387e4f77ebf01fd035127278040000",
    ],
    [
      "ETag",
      "pNHzhILRu7Vzv6ZcuuuajA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7d",
      "9425c36d4c497c409d936443ddf0c998e5068531e18a77876659f6ddeda14ea326fa72b4e5d7d2ff9fdbc2632153f06159e44f0daacd418ee6d60633d44d69343f6a921ac101342267723cbd5dcaa03f8c9e641867e1e17c5c54517e7aca844e565809f0b7901558a61afcfb2d485121b7255436955cb499036653dbe23c9e85d198f38a529b47779349703619c1ced937a6c28845cbffa3ed61e7c09a9633cc50a14cd0ee522b5a6362422b538baa2eb1a3a951096a68e1f645aea8a98522ea70a57334e8b85ecfebf53cd73d199eb80c969408539064f66ecefb812123ca19bdb04af018506dc882b3f67ce67291b6426c1846b1d76ff7fb0a284c48a58b3fb99ad75d09fe0b1fd8bb03df39515123cd9eba9c5c07bf8d634b3f475d04f1e807a10d1bb547e2703a9ac7c1f4c6720fefd2cf3606f58d22f651a3b5d0edf68f0743affbe6ea3959a7f93bbe510d3a9008be1c5785013f13a5c6dd2bdeb1219c7a020000",
    ],
    [
      "ETag",
      "GMQbnA47NqnITfI+SGimNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-26-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536d4fa34010fe2b64ef8be66c0ba505dac4784de53c2e7df10ad55c2e97765906ba0a2cb28bc633fef71bc0fa1213fd54ca3c2f33cf0c0fe49ae71119939027371594f75fae44488e08289ae0dbabea675fbffba73bbb0aa6f6fa6ca7dff85f27c7c788e0354bd2ac48a12345553290e3b5df4d4a5115b414a283429dbed5312cd3324dcb3046f6c8409e84349ef1fc1ad93ba50a39eef5f6dedd448824055a70d965227b7edfbbedf78a525c0153b2f7d6b2872eb2f7b1e9492a18555ce4c76b1f1ba824941bc8284fb1851766147e7b2bdde534eb2608bee50c2863a2ca55dd164a3091c73ca9ca46958c1f48d3e6ab07e2bb33771a68d3e564e6fa53f7c05fcf0fb634ab35b687479a7ea851a96d3625c82a55daf7d572ae6d0bb4dd510972ab5dfe7057aea66d4b60a28c363cda6ac7da8936f3e65ea0d529462015cf1bff808629d4de4f1179ef175313a842e9b6b8b1758b1a8e3e0ae3d066b1630ec358873074427b48cd5067a3010ca21028f254addeb0682ef2e17010c5fd811d8526a31105d3b18756c44696e398761c39c388011b3906793c2277255770ca6521246f7322972b2f7037c16abd984e02b71923a618c069db5c3dc4eb3e150e89a00fe67aacab5ca0531dbab708dcd5641a78176ebbe7192494ddfb37b8e998a612104d4b9a8182722e220c8d9c2f7d2ff0968bc90c19cdf2cef70849c67f1e5e08c17dd1a4ac9adfdacb1a34fe7bc0054dab0671db3e104ce1f12f22f0265b32f9b57657bf49fb6a05319490b3cf5787e0a6f0e9a7b5bf73c4e2a5a38d54f81f0f85c9da8495d01e0ccf9af69ed803dd180d49032ed5bb9a69e8fb646a8d5a1132c8d5d344ed9de3a0ad59259f4158c43d2fbcc51956ff03e684b86a67040000",
    ],
    [
      "ETag",
      "juJ20wz08hueC7UGh0qS+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "0c",
      "80",
      "ff",
      "4b7dddccc69229243c80e2245954863c1843c871ebc6705be75da72184ff6e6ff872d7f6beb65fee0c5f559bc304f655f9dda339dd94c82b176468fb9aad5c1db516c10364553ab259aeabc322247efc18254913eb24d8aca65321ac3e60a3607286a2c23ab730f93c43ab1a94b6ddce0c1305e353e72a4fe9ebec5dd2867297be6cd274364f1770d95e3c38d23ec3020db61addc0ced011352f9dab554d57a36fa9371a2d0cf0f0501aea3b65887ca9f8a3d80fe3288ea2380cc777e350c09ab4e28a5a61376b90354cacea8c7e45151c608650ac8be1fc71e5e036ba7752db7f7c7e62b46f8664b745b736b82a3c90d362d165d3a3075ac9773c577ccd2f7f7b47a06f6b010000",
    ],
    [
      "ETag",
      "bmISihE1otDY2GGm6cG0UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "72",
      "43",
      "40",
      "00",
      "00",
      "e0",
      "bbec739a31567eb66f21d95a0495c1242f46d612a42c96a0d3bb37d36b34df1dbe6f1053caba2e1275c92af00ea658464bba34f956c559768a34a5acb8ed8df7e21a8c46684a3bd1124b8823f60cfbce94b01a92890cfcd6efe966f00b0dfa655e26ceb6a9b156988e6440d959056b63f5207b9cf4b2051528d50251fc115d5387eb7a70c2aed6cd861d1c622a6485c03e4ced35dadd8877f4267fa7c3191be9a1393572985dfcc41af3d17c7cbe256dd3e7b4c9ba0617ee05b954b6371e2f6c53973486da3855c9453993d90daac19270fa45cfcb9797ff0b2c001b79deb22eca9fdbe10aa105f8ab1f8989b3e77f95c52d6bc1cf2f780aae9d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-27-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda3c08348448d11aa5b48994900d48bb6a9a90712ed42dc10c9b6c5195ffbe8b69ba5695da4fd8bee7dc73ee8327f2c88b2d19938467bf6ba80e5f1e4442ce08289ae1ab79b3b4ea3be7b09f67d77faddb1ff65c94e7d3c90411bc6149ba2b73e84851570ce4781376b34ad425ad84e860a2cec0e998436b685943d3741dd7449e843c5df2e211d9f74a9572dceb9db4bb9910590eb4e4b2cbc4eee5bdb71ff4ca4a3c0053b2f756b2872ab2f7b1e8d75c30aab828269b100dd412aa187694e768e13f739b5cbc4ddde574d7cd10bce70c2863a22e54630b533051a43cab2b9d958c9f88b6f9ea40426fe9cd228389bcde1571417770666ca9a2b13a94605c05eb95b1f0afd6c16a1a2dd67e1ccee6de6ada9dad979b951f1ab7732ff00c45931c34d7981817fae6e305f5b720152fb47ad43c37cacf0d5abc1f4b434069096d3076fa436a8efa6e92260e4b47d67992f621494689734eada4cf5c1bec6d0214795a54b368218a0175dd64449d98da03886d4868ec52cb8cede130eddba939749c841ccfc89f8a2bb8e4b21492b71d22b7c122f2e228d8f8b369e4e912525ae7eab235d614f0daa3c20211f4414dc726ca052a35ed5ef891174c67d1e2c66b27bc848cb243f81b679cd25c02a26985cd5350adc4161b46fce9cabb44b09ed8b7535092f1cf27d2f4bc71f1aae52ff40807d8d855fa4bc22858f8d7dace097143f35a43f6ed819468f91e6b43d7c75f88c4256db390ef1b2fb823ed5300295450b0cfa789601df8f45f3b2d3e6271f551462abce3ee30d988b00ada1de2badc13dbee8f4c876870a5dec55cb37fea5a93a3c9083b28d47345ede263a1ad582d5f4018c4f1fbba5bc77f88ff086b78040000",
    ],
    [
      "ETag",
      "1VL3uY7yvHgGx3WX4Hop5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b7d74244e70c0121e00a7920c5418be18428ead1bd36d9d77370d12bebbbd8968d4445f6e6df76bd7ff7fb785c7b488c085559a3c5528374709ea5b134c51559956fc28a9500816a016099352afee12df3b0eca4c765e078f577ef77998f47a4ca8708db900770b718a59a4c0bddf422172e4b690b22a2f96756681de94a6380ba6a3c925e73945269fcc7dbf3ff03dd85987c64868b1acf97fb42d76163cd06a8a314a2c4234bb94921e30d423235389bcccb0a1a892212aa8e1fa4522a92a85246a70a571da6ed84ed369361ddbeeb6bb3683198542a754303b9ff17ea0498b6c4a2fac121c06641db2e0b83e9fb99c46b510138e2681d3aaf7fb0a480c4946cb3fb992d75d0bfe0b1fd8de81ef9cc8a92af481baf0affbbf8d634b3f479df703ef07a1341b754082d1d89b05fdf18de1167be9838d467523897d54682cb44f5a9db3b673f2eeea908cd3fc1d57cb0a2d08055f8eab54831b8b4ce1ee0dbdc7550a7a020000",
    ],
    [
      "ETag",
      "rtbVgLE+Tplr8zBkHL9vCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-28-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc87bd9a4268440c8458abaa8651b5392b684b49ba629b1cd81ba054cb1e91455f9ef3b40d38b2ab54f189fef726e7e20b7228fc8843091dc5550ee3edd48468e08689ae0ad7f1f9a1779c07ecd763fc1595d9fdbbab02ea65344889aa56856a4d051b22a39a8c97ad54d4a5915b494b283429dfea863b9b66bdbae658d87630b790ad2782ef25b645f6b5da889691ebcbb8994490ab410aacb65f6746fdef7cda29437c0b5325f5b9ae8a2ccf74d8f53c9a916329fae579840a5a0dc4046458a293c3323f6f5b57457d0ac9b20f85e70a09ccb2ad7755a28c1651e8ba42a1b553279204d9a2f0e64e5cdbd93d058f8cbcf5b9ad5d4ed17832a63b3294155a936be05670b635ba0d33555a0b6c6d50f2ff00c635b029765b411d1d6981ac7c6dc5ff8a151372e02a545de588694a550db3d76c57f3b8b9a40354ab7c1cdb0e7526bd41bb3980d793cb2072cee016323361c509bf5f8d80127624091a76bf5864573990f867dce1cce6c2bb647e311a57dd77606b1d5b7788f41ecb2a86fb9fdf180ec8fc8bf52683815aa904ab4ad2157811f7a9b30582f4f66a1d79411536cc0699b5c5dc4cb3c351689a077eadad75121d1a9eeb3bf0cbd607612fa975e3bda392494ef567738dc98a60a104d4b9a81867221236c1a393f5bf9a17fb69ccd91d1ccebfc805064f2e7e19910ee8aa6cbbaf9d65eaed3f81f009734ad1ac47d7b2016d9efff2202d7b025938bb517fc26ed5500319490f38f4787e026f0e16b3aac366271b9d14669fcc745e1aa36e125b40b23b226bd47b663b94e8f34e052bf890dddd1a133b546ad0819e4fab1a276b5b1d0d6ac524f200ce29c97fef23b46ff03a172f27e5a040000",
    ],
    [
      "ETag",
      "IvT/QnRbXAyJe4ShP3tp1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90514f83400c80ff4b7d0595a1d32dd9c3e670d310dda64b4cccb2dca0201328de150d12febb3de6cb5ddbfbda7eb9163eb33286311cb2f4ab46dd9ca5c86b1b6cd0d4391bb92a2a0d8203c82a157254afaf17c1229857e17679c1bf8ff3327f5b4f264298e8030b05e316920cf3d8c0f8bd855215286dfbbdee270ac64d652bf7e1f3f455d282629b3e6dc3703a0b03e8769d03473a6c30418d65847660a5e988113f5857a38a2a47d750ad2334d0c3fd43aaa9ae942672a5e20e6e5d6fe80f7d7fe879a39b9127604e91e28c4a61b72f206b9858e51bfa1155b080ee43b14efaf3db96cfaf06d669f74fcf1a46b3d224ab0ddaad9727833bb2562cb6ac6b742052f21bcb8c4f79f707b98dd9256a010000",
    ],
    [
      "ETag",
      "9uQ5GEGEDpLUH/tzJDnlXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d07fe9b3358e9b746f206010914b604c5e08854a2c636d5a14d1ecdf67f61bf3fcc37980ba698894d5c87af20ddec15c2b68d92c036eda5e4721d334273e46045fba60bb12e321dcdcf576d39706f72d41698bca60fca05b55a490b39d36c02a6cf36d6188cd9b2e30e21e4ca0a0dc769ca2152ebbf81733402d7426d510fbaf349cd687e4d6174e8addc235e61c65431859e32089645617deb5936aa2a3c2b5999fcaa95c25c7b3ff691e66037b82f985d4861425aeee47d62ecbd36b53c7d798e979e777fb7aed6576867bca5712274899b8d22c5f5efe2fb000e4c6cf82c8eafcdcaeea082dc05ffd6a9c3979feb7492d88003fbf429b9d8119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-29-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553db4ee33010fd95c8fb4aafe92d95aaa52aa1546a53364941abd52ab2dd496a48e2103b2084faef3b71280b4282a7d89e73e69cb9e485dc8b7c4fa68489e4a182f2f9c79d64e48c80a609beeae0b00cb3a57460690f0ec3a1733f1f2f9e663344889aa56856a4d052b22a39a8e92e6827a5ac0a5a4ad9c244adbed3ea8dec916d8f7a3d67ecf490a7208dd722bf47f641eb424d3b9d93763b913249811642b5b9ccdede3b8ffd4e51ca3be05a753e4a76504575be16fd994a4eb590f96c17a0814a41194146458a16fe33f7ecfc63eab6a0593b41f0a3e040399755ae6b5b9882cb3c1649559aac64fa428ccd770712b86b77115a5ca655964739cde0ccda534d23fd5c8075e96f37d6cabbdcfa9b79b8da7a51b0b87237f3f662bbde6dbcc0babd727dd7d294a560b8d6cc3a37370f2fa8bf07a5456ed4c3fab9567e6dd0eaf3586a024a2b6882d1b83ba2bd49d761311bf378620f59dc05c6266c3ca436eb726700833d038a3c236a5834973963d01fb3c93e7206368b068c0e23ca61120dfb36ed737b34993020c733f2540a0d1742155289a643e4d65f856e14fa3b6f310f5d53424cab545f34c6ea02de7bd4582082bea8e958478544a5badd2b2f74fdf9225cddb8cd84d79050fe1c3ce08c639a2a40342db1791aca8ddc63c38837dfb817083613bb3e051599fe792175cf6b17ef5afe460f7180b55d6dbe2408fd95b734764e881b9a5606f2d81c4881960f581bba3efe45242e699385fcdab9fe6fd23cf910430939ff7e9a0836816fffb5d3e22316571f6594c63bee0e57b5082fa1d92161ca3db1077dbb3726065cea4f318c9eba56e7a8334206b97eada8597c2cb411abd41b0883387ecf74ebf80fa58020bb78040000",
    ],
    [
      "ETag",
      "tShGTmGo9eG34h559kA7Cw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2400cc6bf4b7d3b12273864092f500189883ae6bf1843ce5b07d36d9d77371109dfddde44346aa26f6e6df76bd7e7d92de131c923f0e13e993e95a8165b5334e736085097a9d1fc2828d7080ea01153268fe5cd4d2f7adabd2ee8b51f1757d1cbe5f168de6e33a1e50c3301fe12e204d348837fbb845c64c86d92d232cb2755e6805914b6380e83c1a8cf794691cd4717c361677fd88595b3698c8411938aff47dbddca8107ba0f304685b944bb4ba1e801a51958995a64458a354da592a8a182ab175345652114518d2bb59d56cdf5ea5ebdeeb96eabd972194c490a9350ceecc598f7034346a401cd5925780ca82a64c171753e7339892a21361c8c42af51edf71550284945933fb982d79d09fe0b1fd8da81ef9cc8a8cccd86ea0d4f3bbf8d634b3f471d76c2ee0f421b366a83848393ee38ec9c9c59ee6e2d7d7f61509f29621f355a0bddedc6de6ed3db7e77f580acd3fc1ddfa8121d90822fc75162c08f45aa71f506dbe96eb87a020000",
    ],
    [
      "ETag",
      "KcYYFdq5XpozGfpWdxVKNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-30-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535b4fdb3014fe2b91f7b249b44d9a92924a15ab20dba2b585b5296c9aa6d6764e82218983ed8000f5bfef24a15c84044f717cbecbb9f9815c89222623c2447a5d81bafb742919d92360688ab721f3eee36550e63fefcdd57d1115cb5cfab7e3312244cdd2342f33e86859290e7ab45a765325ab922a293b28d471ed8ee3b99eeb7a8ee30f7d07791ab2642a8a2b645f1853ea51afb7f3eea652a619d052e82e97f9d37defa6df2b95bc046e74efb5650f5d74ef7dd3c34c726a842cc6ab25265069506bc8a9c830856766ccbebe96ee0a9a775304df080e94735915a64e0b25b82c129156aa5125a307d2a4f9e24096c134388aacd9e4f7e70dcd6beae68b45b5b55e2bd05566ac6f8b9399b529d1e9826ad01bebfc47b0082c6ba3804b15af45bcb1c6d6a1350d676164d58d8b411b513496116519d4768f5d09dfcea2265083d26d703db43dea1cd83e4bd8902707ee3e4b6c60ec800df7a9cb6cee0f601033a0c833b57ac3a2852c7812533f7139249ec712d789b9dd674876fc034e9dbeddf7067e9fd903b2dd23b74a183816ba945ab4ad21e78b300ad6d162353f9a4441534642b101c76d7275112ff334582482dea96b5b478544a7bacfe13c0a1693a3283c0bdad14e21a5fc6e798dc34d68a601d154d11c0ca8998cb169e4f4641946e1c97c32454633afd31d4293d1df8767427457365d36cdb7f6f29a329f006734ab1ac44d7b200ed96eff2102d7b025935fab60f187b4570b484041c13f1e1d829bc087af69b7da88c5e5461b6df01f1785ebda842b681746e44d7a8fec816b7b43d2809579137386feae33b546ad083914e6b1a276b5b1d0d6acd24f200ce29ce7e1fc3b46ff03e75453b45a040000",
    ],
    [
      "ETag",
      "Ib6zdSEpmKztkznTnSmo9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90db4e83401040ff657c14144a8229491f8ada5843bca0f541d3345b18900a0cee454b08ffee2cf5657766f6ccccc90ef055b53944b0afca6f83b23f2b513fdb2045656aadf8eaa855080ea0162593ef7521ee0b19f7e728d76fabe38d777934e562c184ca3eb111100d505458e70aa28f015ad120b7ed76729ac898ee3b5b59258fcb574e1bca6dfab04992659cdcc2b81d1d38d03ec50225b619da819da403667a6d5d9568ba1a5d454666a86082a7875292e9842472b9e2069eeb87411804a1efcfafe63e8335654257d432bb79015ea3498b3aa55f56050bc82964eb623a7fb83cbb9805d669fb4fc7bd46f52489572bb45bbd93c135592bcdb65a1a742013fc1b77953ee5e31f4a938e126a010000",
    ],
    [
      "ETag",
      "ZlfaJfrBy+erIVFxD0/xug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300000d0bbf45bcc404de9fe04b11626a40c56e5a741e8ac32050a82b0ecee33bbc67c7778df20cd32d134bc2d0b7105af60480d34cda65e655aeba3546312f8d98eee9ac8832ed46a2634518e7b7dbe7db7506f045fab659b3b67d3899686bfb5605ad56e57dacca864795f7cb250264cb7a4387dec7addd429f1a9eb8efe7ab0c71aa3c2f712bebafbc8b3e3203dbfc5946315d67cde75b2a31a45b8b1578d2230c4b07755dc6d0a27a43d97ce9ee197f50d15ecb6692f2824093946cee19043e1499bec4b3d9be5a311e628c39025a69b5c8c2b1c1664faf4f47f810910f7eaa444c34f8fedb3054213f0579fb743251eff2d912aa1c0cf2f6c7cb9f619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-31-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b64f6716d29851668d2ac4d456dd2d215a86677b321c330e02830c80c35c6f4bfef65b0aec6449f98997bce3de77ef08cee5995a2194a58fed0d2e6e9db1d4fd009a212e7f0ba1f5fa5bf7da28f1e274eee7e6f2f42cadcc7f91c10ac63095cd6051d08de36848ad92e1ce60d6f6bdc703e804403d3181853736a9a53c3706dd7009ea045b666d53db06fa5acc54cd78fdac39cf3bca0b866624878f9faaeefc77addf03b4aa4d0df4beaa022f4cf457f149c60c97835df8560a015b4896989590116fe33d3e4f47dea21c3e53007f09e118a09e16d253b5b9082f02a6379dba8ac68f68c94cd3707147a6b6f196984176d59c5152ee98996628963f95453ed3cd86eb4957fbe0d368b68b5f5e37079e96d16c3e576bddbf8a17673e9059e26715250c5d5e6daa9baf97001fd940ac92aa51e75cf9df24b83561fc7d211405ad03e18dba329369c919b64894d32c79c24d988268993d8136c2623e25ad44a138a81a744150b57bc4acc29c9d2a919a7b665c556e6dab13371dcd836c6d825666299ae830e27e8b161929e315173c1fa0ea19b6015797114ecfce522f25409196e0b79d61beb0a78eb51428100faa4a64317651c94ba76affcc80b16cb6875edf5135ed31c93a7f001669ce1425040e3069a2769b3e129340cf98b8d77066035b19fc7a040b33fcfa8eb79e7e24dcb5fe9110cb0b32bd5178551b0f22f949d23e21a17ad82ecfb03aac1f22dd406ae0f7f01094bda6741573b2ff885faa78066b4a115f97a9a0056812fffb5e3e20316561f6484843bec0e119d086968bf434c957b645ba63d9e20056ee4879833328f5deb72741969492bf95251bff850682fd68a57100461fcbeead6e11f7726c06278040000",
    ],
    [
      "ETag",
      "v2QdZNc/0w58g9+uGSei9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85df65bc2d09b558a4091780a84df8a778630859da010a6da7ee6e55427877672ba25113bdd9ce4cbf99ce39dd03ece22c020f96f1faa940b9bf58a31e9b6082aa48b4e2474e9942b000b55833a9760f37c570eadb186fb783f4b5b3b72fa371b3c9840a37980af00eb08a318914788f07c8448adc165252a4d9a2cc2cd0fbdc14a7c1c41fdc719e5264f2c1acd76bb57b5d385ae7c64868b128f97fb4cd8f166c6939c1154acc4234bbe492b6186adfc85422cd13ac282a64880a4ab87cb19654e4421255b85271ec8aed3aaee3b8b6dda8376c06130a858e29637636e5fd409316c9845e5825b80cc83264c1abf27ce6721c95424ce80f02b756eef7159018928c167f7239afbb11fc173eb09303df39915291e93375db1bb67e1bc7967e8eba6905dd1f84d26cd41909fc7e771ab4fa23c3cd4fd2db7b8d6a24897d54682cb4abb5ebabba5b7d77b543c669fe8ea765811684822fc77dacc15b8944e1f10d837626787a020000",
    ],
    [
      "ETag",
      "skVDuOSI1eijjNmxCy12dQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-32-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8553db6e9b4010fd15b47d69a5f882c136b664a5a94352245f528c135555652fcb40360696ec2e8ed228ffde01e25c14297962d93967cecc99d907b2e37944c624e4c96d09f2fecb8d08c911014d13bc3567e73df5c3517df72ecbe072bf3bfbb7db2793092278c552342b526829514a066abc5eb51329ca824a215a98a865f55ae6c01a58d6c03447c391893c05693ce3f90ed9d75a176adce91cb4db8910490ab4e0aacd44f67cdfd9f73a851437c0b4eabc95eca08aea7c2c7a9c0a463517f964bdc2024a05720319e52996f0c28cc2ef6f53b739cdda0982f79c01654c94b9aecac2144ce4314f4a596725e3075297f9ea4056eecc9d06c674b95e045fb711d5b0fd6650656c361254996ae3cc5fce8d6d814ad75481da1a573f5ddf358cad042664b4e1d1d69818c7c6cc9b7b8151191781d23caf25031aa650c93db9e2bd9f4545a01a5337c1cdb03ba0a6d31d85713864b163f5c3b80b61e884c33eb5c22e1bd960472150e4e92a7bcda2b9c8ed21363f02bb1f9a14a19663f72d67683b8ed58b586f005ddb36ed2e35c9e311b9935cc329578550bcb1865cf95ee06e027fbd989e046edd464cd180d3a6b8aa89d7756a6c12411ff4f55845b940a5ca676f11b8fec934f02edd66b4334828bb5fdde270639a2a40349534030d722e22348d5c2c575ee02d17273364d4f3ba38201419ff79782104f745edb2aebf95d6c0aef50f804b9a963562df1c08baf0f81711b8860d99fc5abbfe6fd25cf91083849c7d3e3a04d7814f5fd361b5118bcb8d324ae33f2e0a53950893d02c0ccfeaf29ed8b66d0feab7a8a9d4ef62fd917370a6ca5165840c72fdd451b3dad8682356aa67100671ce0b6f718ed1ffb38c59115a040000",
    ],
    [
      "ETag",
      "1LG2sB8s5EwmmeVvkFzkvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d90d14e83401045ff657c8544244521e983555231d858da4613d3345b18900a0cee2e3648f87767a92f3bb377cfcebd9901beca2683008e65f1dda1ecaf0ad46bd324a8ba4a2b2e2d350ac102d4a260927eef5edecf1546fea33b2b96d1f39b986dd6f339132afdc45a4030405e629529083e0668448dfced7090d344c674df1a255a6dc36598b050536684d52e8eef177108e37eb4e044c7047394d8a46846b6924e98eac8a455a26e2bb41575324505133c3d1492ba5648229b15dbbdb11dcff55cd7731cffd67718ac2815baa486d9dd06d84693165542670e0b069053cbb9f3e9fc61d93381f6ffe8a2d7a85e25b1af4263797db17f20134973542d3bb42015bc8ca7525feee31ffb89387d69010000",
    ],
    [
      "ETag",
      "oz8MXwleI9D35gGIJWa5SQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ffedd34b7282300000d0bb642d8c16b0a6bb9a94821f94a914ca2683102012f98420c64eef5ea7d7a8ef0eef1b24694afb9ec8a6a23578012a79827aaaafdbc5d22e4ed50532fbed9a9658babedae4e735c79c1fbc728a62abb17de56a3c3f0f5dd93e9744d9c34a58012998838b622ee1987d4a0feddd68c5b61f0ddb1a5584bd58738a418ab58176ce5e19d71a8dfdfbd15fed589acd71808f5dec8ce19e0733d4d570662ad3b15fbded617a28c5092a0df69786c552755ff9c9dc5c707b1b4b2ea66e98a7d5a2de04fc4c72122615aa5188eac68b4cb36fb5ca1f66220b98fef0f07f8109a0d79609da1376df6e58104ec05f7d22554befff97341154809f5f6985014619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-33-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d4fa34014fd2b64f6d5b6206d699b346bb7e24a52e82ea5ba9bcd860cc305472983cca051d3ffbe97c1ba1a137d6266ee39f79cfbc113b9e1654a6624e1f96d03f5c3976b919023028ae6f8ca3dd379047e297c56cb9b5f525467df1ef3f91c11bc6549baab0ae849d1d40ce46cbbe9e7b5682a5a0bd1c3443ddbee59637b6cdb63cb9a3a530b79128a6cc5cb1b645f2955c9d96070d0eee742e405d08acb3e13bb97f7c1ddf1a0aac5353025076f2507a822071f8b7e2d04a38a8b72bedda08146421dc38ef2022dfc67a6c9c9dbd47d4e77fd1cc1779c01654c34a56a6d610a26ca8ce74dadb392d913d1365f1dc8c65db9cbc860a26876655cd21d1c19295534560f151867e1da37bce06c1dfa8bc85b07f16679eefa8bfe72bddafac1c6b83c7743d750342940738db971a26f015e503f05a978a9d5a3f6b9557e6e90f77e2c2d01a52574c1d831c7d49a98d3244b1c964dec519299902493c419513b31d97408c334018a3c2daa59b414a5e3b0e3845a696c66348b8774348aa76606f188d174923a4306e631d91f91fb9a2b38e5b21292771d2297a117b971146e83e522727509196d0a75da196b0b78ed51618108faa0a67d1be50295da767b41e4868b65e45db8dd84579053f6b0b9c51967b49080685a63f314d4be48b1612458f8ee2982f5c47e1c8292ccfe3c91b6e7ad8b572d7fa14738c0d6aed25fb289422ff8aeed1c1017b46834e4ae3b900a2d5f616de87aff1791b8a45d16f273eb86bf49f71442063594ecf3692258073efdd70e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7c01e8eacf1846870addec56cd33a74adcdd166841d94eab9a26ef1b1d04eac912f200ce2f803ddadfd3f261f63bf78040000",
    ],
    [
      "ETag",
      "iI07zeiWoMcrskXsopFBzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83400c86ff4bfd288b129429891fe69c4ac2e636303131cb72426138a0787768e6b2ff6e0fe7346aa25f8eb63c2d7d5f6e0dcbbc4ac083873c7b6a50aef632d413134c51358556fca8a9520816a01619937db158e2fee275387427fd3bff293c18fbc1e4ec8c09152fb014e0ad21cdb1481478f76ba84489dc1653d194d5bccd2cd0abda14c368ea8fae382f2931f9e836087ae7c10036d6ae31115acc5bfe1f6db38d058ff430c5142556319a5d6a498f186bdfc854a2ac0bec286a648c0a5ab87d91496a6a21893a5ce9384ec7761dd7715cdb3eed9eda0c16140b9d53c5ec6dc8fb81262d8a29bdb04a7019906dc882d3f67ce6729eb4424ce88f22f7a8ddef2b20312699ccffe46a5e7721f82f7c605b07be73a2a4a6d23bea32b8e9fd368e2dfd1c75d18b063f08a5d9a81d12f9c34118f58663c3cdb6d2cf571ad55812fba8d058681f1e9d1c77ddc37757fb649ce6ef785a3668412cf8725ce71abc54140a376fd3d50d6b7a020000",
    ],
    [
      "ETag",
      "Cahke+hzMM6QCXIqS/PILQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-34-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fe2b91f7b249b44dc8adad543104d916ad2dd0a6b0699a5ac7390986240eb6538450fffb4e123a4048f014c7e7bb9c9b1fc92d2f13322631cfee6a900f9f6e444c0e08689ae12db786c5ad699b89abfd0bf1ab963fb7c2ba9f4c10c11b96a24595434f895a3250e3d5b29f495157540ad143a19eedf42ccff66cdbb3ac913fb290a7204fa7bcbc45f6b5d6951a0f067bef7e26449603adb8ea3351fcbf1f6c0f07951437c0b41abcb61ca08b1abc6f7a940b463517e564b5c4046a05720d05e539a6f0cc4ce2afafa5fb9c16fd0cc15bce803226ea523769a1041365cab35ab6aa64fc48da345f1cc83298062791310be79f3709d5b0f9625065acd712549d6be3dbe26c666c2af4b9a60ad4c6b8fa112c02c3d8486042266b9e6c8c8971644cc35918194ddb12509a97ad6144e31c1ab3a79e846f27d110a846e92eb8f64d8f5a437314a7b1cfd2a1edc6a909713c8c7d97dab1c9460e38490c1479ba516f59b414a5e95b7ee2c030b653d7048fda4384fbb63b64e03aae7be827ae63c614c8ee80dc4baee194ab4a28de35865c2dc22858478bd5fce4380ada32528a0d38ed926b8a7899a7c62211f44e5dbb26ca053a355d0ee751b0383e89c2cba01bec1432ca1e967738da94e60a104d252d40839c89049b46cecf9661149ecd8fa7c868a775be472832fef3f84c881eaab6cbbafd365e9ed3faef019734af5bc4b63b108bec767f11814bd891c9c52a58fc26ddd502529050b28f4787e036f0e15bda2f366271b5d14669fcc74561aa316112ba85e1459bde13dbf14cd7242d58ea37b143cbdc77a6d16814a180523f55d42d3616da99d5ea3f088338e77938ff8ed17fe227f46458040000",
    ],
    [
      "ETag",
      "i18mk030d5t7QoXurKvo1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0c",
      "40",
      "ff",
      "c5",
      "bb52ada55311481c60abc4a46adaa0ec82100ac1edcadaba4b1c2684faef73ca2e89ed3cdb4fb9c177d59e6006c7aafc7168ae0f25f2870fd6685dcd56ae8e5a8b300264550a996f3edd51e7e9a3cb78b20d37c9ca5df2723e17c2ea2f6c14cc6e5054589f2ccc7637685583d276389861a2607ced7ce56591a7923574f2d9db36cb16cb2c857edf8fe04cc7351668b0d5e8e77586cea8f9d5ab5ad5743506969cd16861808787d290eb94210aa412c44f4194c4491c2751349d4c23016bd28a2b6a85dd6e40d630b1aad7f42ba6e0013384225d0ce745cae3701c06e13808236fb6ffef595e19edbb2111b0e87787778f67f26e2cce6c1c8e402bf99255c5f7bcff03ac158edf6f010000",
    ],
    [
      "ETag",
      "TSVubcTE/uLt7U0S6HuvTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd34b7282300000d0bb642d0e08d8a63b6980a9c122c847b361f8a41014890144ecf4ee757a8dfaeef0be419ae7b4eb92be3dd233780353ba80f37c8ef9ab61952c944e248bf1855cf7765bc1a419198ababb6ba33851c7c816bec9084e173dea8cab7739d9e6b15e36b06253e52f1d0f8f3b7845c1e8387d2eb84c9a8e9f4bf41572ad8d169fe6fae6615dd286f45ddbc6f24e1e94c37054cb5ca1be57e9863c8cd6860bec9405253bab0ebd138debadbdbaa8aadc0eacdf077737c2f98b0315124a9bc4b8e9853eaeca2c835a6c7e1c6217659ca0621215b6c260ed05cefce9e9ff0233406f9c09da25ecb15dd5219c81bffa493f71faf86fd05450017e7e01ccd612e919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-35-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbda3c28794bd19a25b4cd9490959074d33421632ed42dc1d4369da22aff7d17d374e926b59fb07dcfb9e7dc07cfe481e731199188a78f25c8fda77b119133029aa6f82ad32fdecdbedbb5afb6fecced6dbfdf7f95d9643c4604af588aee8a0c1a4a9492811a6dd6cd548ab2a0528806266a38dd86dd737a8ed3b3ed617f68234f41962c78fe80ec3bad0b356ab58edacd548834035a70d56462f7fade7a3a6f1552dc03d3aaf556b2852aaaf5bee8e74c30aab9c8c79b351a2815c81076946768e12f338e2edea66e72ba6ba6087ee20c2863a2cc75650b533091273c2da5c94a46cfc4d83c3990b5bb70a781c54456eef230a73b38b362aa69a8f7055897fe6a69cdbdcb95bf9c04f39517aea7d7ee72d29cae169ba5b7b66eaf5ddfb5348d32305c6b6c5d989b8717d48f41699e1bf5a07aae945f1a34ff7f2c1501a515d4c1b0dfee517bd01e4649d467c9c0e946491ba26810f5bbd489da6cd8814e1c01459e11352c9a8b7c4823763e8c218c1c606187759d706843120efaac0b513f89cf01c8e18cfc965cc38cab42285e7788dcfaf3c00d037fe34d27816b4a486899e9596dac2ae0d4a3c60211f44e4d872aca052a55ed9e7b81eb4fa6c17cebd6135e404ad97efd88334e68a600d15462f334c8a588b161c49b2cdd1982cdc4be1d838a8c7e3e93aae7958b9396bfd2031c6065579b2f5907fedcbb32768e882dcd4a0379aa0fa440cb77581bba3efc42242e699d85dc6c5cff07a99f7c484042ce3e9e26824de0c37fedb8f888c5d54719a5f18ebbc35425c224d43bc44db94776a7371838c480a5fe37d66fdbed63d7aa1c5546d841ae5f2aaa171f0badc54af50ac2208edf33dd3afc01df474ba678040000",
    ],
    [
      "ETag",
      "rgBNQy551GVRDE6VXjJrlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92614f83400c86ff4bfdca92914db691f881e9540c9bbab1686296e50685a140f1eed0cc65ffdd1eea346aa25f8eb63c2d7d5f6e0b0f5919830bab2c7dac516e0e52d4d72698a2aa73adf85151a9102c402d5226af5f36177d7f7cd3ef0d7c6f94a7fa54df1ea747474ca8688d8500770b498679acc0bddb42290ae4b688f2ba28974d6681de54a6380ba7fee48cf38262934fe641e00d8311ecac7d632cb45836fc3fda163b0bee6935c5042596119a5d2a49f71869dfc854a2a8726c29aa65840a1ab879914aaa2b21895a5c69750e5bb6d3713a1dc7b607bd81cd604e91d01995ccce67bc1f68d2229fd233ab048701d9842c3869ce272e677123c484fe2474bacd7e5f018911c978f92757f1ba6bc17fe1037b77e03b270aaa4bbda74e834befb7716ce9e7a8132f1cfd209466a3f648e88f47b3d01b5f196ef12e7db8d1a8ae24b18f0a8d8576bbdb3fec39ed37578fc938cddf71b5acd18248f0e538cf34b889c815ee5e017af7210d7a020000",
    ],
    [
      "ETag",
      "QzyJ8IMW879IAElgtFtXCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-36-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b91f7b269f492a64dda4a15ab4ac6b2b585b5296c9aa6d6764e82218d83ed8000f5bfef24a1c084044f717cbecbb9f9815c892c2243c244725d80bafb7029193920606882b717b7eef7fba3e8de3dfe11fa413a919fc3cbcbdbd10811a26469bacd53686859280e7ab85a3613258b9c2a291b28d470dc86ed3aaee3b8b63df00636f234a4f1546457a5ba31b91eb65a7bef6622659202cd856e72b97dba6fdd745ab99297c08d6efd6fd94217dd7adbf430959c1a21b3d16a8909141ad41ab654a498c23333625ffe976e0aba6d2608be111c28e7b2c84c99164a7099c5222954a54a860fa44af3c5812cfda93f09add9f8d7c74d440d6c3e59545bebb5025da4c6faba3899599b1c7d2ea806bdb1cebff90bdfb2360ab854d15a441b6b641d5ad360168456d9b608b41159651852964269f6d893e0f5244a0235285d07d75edba576bf3d6031f378dc777a2c6e03637de6f5a8c3da7cd0856ec48022cf94ea158b66328b064ebb43b943c1b61de6b176db8ea34e1c39b1ed7aaccb079cc7bd8ecbc9ee80dc2a61e048e85c6a5137869c2f82d05f878bd57c320efdaa8c9862038eeae4ca225ee669b04804bd51d7ae8c0a894e65978379e82fc6933038f3ebc14e21a1fc6e798da38d69aa01d154d12d1850331961d3c8e9c932088393f9788a8c6a5aa77b8426c33f0fcf84f02eafba6caa6fe9e5762bff3de08ca64585b8a90fc426bbdd5f44e012d664f273e52f7e93fa6a013128c8f8fba343701578f72ded171bb1b8da68a30dfee3a2705d9a7005f5c2886d95de23bbeb79bd01a9c0cabc8af5fbeebe33a546a9085bc8cc6345f56263a1b559a19f4018c439cf83f93146ff01ea733bb258040000",
    ],
    [
      "ETag",
      "hw6JzDdz6GKTEIlCo+Tjjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90df6b83400c80ff97ec55c11fe050e883ed846dc8e85c7d1aa59c1a9d9d1a77776e88f8bf2f67fb7297e4be241fb7c0773b541041d1363f13caf9a141fd6e820cd5d469c5d7488342b000b568980c6237cf5f8bc40d4f4799c870aa8bea10ef764ca8f20b7b01d102758b5da520fa5c60103d72dbe522b7898ce9793495a7f89470d65365b2b73c4de37d9ac07a5e2db85291618d128712cdbc51d2154bfd625495e8c70e6d45932c51c1066f0f8da4691492c8e68aed07b61bf881ef07ae1b3e862e831d9542b734309b7f00afd1a44597d11f9b8201e416b274bd9dbf5cf61ccfb11dcff61c6376bef7ec678dea288905149addcecde340c64db3b396135a500afe92e756dff2f51f44fccd186f010000",
    ],
    [
      "ETag",
      "6A1UUJbE19TPrEr9ufbdCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd34b7282300000d0bb64ad0ebf14d21d981241505114e286e1138541e41354b0d3bbd7e935eabbc3fb06719a32cea3be2ed9157c823196d02c9d25821ede85a7bf92fa851dfac67cb7b95968853eec6391ad860697dceddaccdb892aa6860c83bccdeeb7006ae56d909451940db8ac14cf56d76a8b6b9ef018ca276a9a0f8e24df87999ee95d3e98870bd5d4d45a140ed9a23dbe889b0bd142120bf329b1f6cb72a7e3bd6b50bb3f175b462bd9940f5150e96c10aea744f95a56768b454f8975c50934da72faec83ab4b1c970bd3e09ed60426cc22697e241b3f3fd94d88cf42b826aa48676f6fff0e9800363445c77854bcb6cb10a109f8ab1ff563c35eff0d1677ac033fbfe1ebe6d319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-37-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6d1252124222456b9ad22d5a423a425a4dd3848cb950b78029369dd22aff7d17d364ad2ab54fd8bee7dc73ee07cfe49e1731999088a70f3554bb2f7722222704144df1757e9ed7c3f3a75d1d8da40357e26977f5239e4da788e00d4bd2bccca023455d319093eda69b56a22e692544071375ac51a76f5bb665d9fdfe7834ee234f42962c79718fec5ba54a39e9f50edadd548834035a72d965223fbef71e4f7b6525ee8029d97b2bd94315d9fb58f46b2618555c14d3ed060dd412aa1072ca33b4f09f1947676f537739cdbb29821f3903ca98a80bd5d8c2144c14094feb4a67259367a26dbe3a908dbb74e781c14456e74558d01c4e8c982a1aaa5d09c6a5bf5e190bef72edaf66c162ed859bf9777735ebced7cbedcadb1837df5ddf35148d32d05c636a9ce99b8717d48f412a5e68f5a0796e945f1ab4783f968680d212da6038326dda77cc719444239638d6304a4c8822271a0da915996c3c80411c01459e16d52c5a882236d9a9353e35439b9a7138b06c1a3a100d433618f64dc7a6cc721cb23f217f2baee082cb5248de7688dcf88bc00d037febcd6781ab4b48689da98bd65853c06b8f0a0b44d00735ed9b2817a8d4b47be105ae3f9b078b6bb79df01252ca769b079c7142330988a615364f41b51231368c78b3957b81603db1ab435092c9ef67d2f4bc71f1aae5477a80036cec2afd259bc05f78dfb49d03e29a66b5863cb60752a2e55bac0d5defff201297b4cd427e6e5dff17699f7c48a082827d3e4d04ebc0a7ffda61f1118bab8f3252e11d7787c9468455d0ee10d7e51ed80367e0d844832bf52e36d4998f0bdf64841c0af55251bbf858682b56cb230883387e4f776bff0f7cc1f57878040000",
    ],
    [
      "ETag",
      "CBmu5Bzyub7s8ePozyPKdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0cc7bf4b7d1d09cb70c8121f40514900618c0735841c5b81e1b6cebb1bb810bebbbd8968d4445f6e6df76bd7ff7fb787e7388bc08345bc7a295096672bd46313f8a88a442b7ee49429040b508b1593d9304a3bdb96ea6e46232778787cf5f371b9bbbc6442856b4c05787b58c698440abca73d6422456e0b2929d26c5e6516e83237c549e0f786b79ca714997c38edf7db9d7e170ed6a931125acc2bfe1f6db383051b5af8b84489598866975cd20643dd33329548f3046b8a0a19a2820aae5eac2415b9904435aed49c66cd761dd7715cdb6e355b3683098542c794313b9df07ea0498bc4a71dab04970159852c78599d5b2ec75125c484bd61e036aafdbe02124392d1fc4f2ee775d782ffc2077674e03b27522a327da26efaf7eddfc6b1a59fa3aedb41f707a1341b754282dea03b09da8391e16647e99d52a31a49621f151a0bed7ae3e2bce9d6df5dbd22e3347fc7d3b2400b42c197e32ed6e02d45a2f0f0067d6159fd7a020000",
    ],
    [
      "ETag",
      "nNdmBv9sEjPP3TYZxRpQyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-38-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffa5535b6fda3014fe2b91f7b269050281049050c768ba45a3d04268354d1338ce097597c4a9ed305515ff7dc749e94595da873dc5f1f92ee7e2734ffef03c264312f1ed6d09f2eec38d88c811014db778bb9a5ee4a7e2ebe7ce8fc2b6bdb0e3453b7777311a21821b96a25991424389523250c3d5b2b995a22ca814a281420da7df68bb8eeb386ebb3df0066de429489329cfff20fb5aeb420d5bad8377732bc436055a70d564227bbc6fed3aad428a1b605ab55e5ab6d045b5de363d4e05a39a8b7cb45a6202a502b9868cf214537862c6d19797d24d4eb3e616c13bce803226ca5c9bb45082893ce1db5256aa64784faa349f1dc8d29ffa93d09acc57b3f0e3866686bcf9645165add71254996aeb74313fb336057a5d53056a635d7df717be656d243021e3358f37d6c83ab6c6b313bc3cfc4d83b320b44c2363509ae7550a218d5230f60f5d0a5ecfc610a846a33ab8f66c97b6fbf6204a228f257da717253644513ff27ad4896c36e842378e80224f1bf58a457391b7fbd0b52387f507d04390dbb36deaf618a3fd1eb0ee20a1498c61a743f647e4afe41a4eb82a84e275abc8d52208fd75b858cd26e3d0afca4828b6e3a44ece14f13c4f8d4522e88dbaf626ca053a99be07b3d05f8c276170e9d7a39ec296b2bbe52d0e3ba1a90244534933d020cf448c4d23e7f3651006f3d9788a8c6a7ee7078422c35ff74f84f0aea8baacabaff172bb95ff017049d3b242ecea036993fdfee8ff147a28f11b21f8b26b36b958f98b9fa4be5a40021272f6fef4115c05de5dd0c3b698f55f1a1ba5f11fdf1a53c68449a8df1ccfaafc1ed8dd41c7abd65b53a95fc51caf7368aed1308a9041ae1f2aaab7c5f4aa0a95ea1184417c2ab360f60da3ff00e374ce20ad040000",
    ],
    [
      "ETag",
      "ULQnFoB+2Kp007T27bv6vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d90616b83301086ffcbede31426829d423fb4c36d0591d5cd4119a5a47a3a3bf55c12d789f4bfef92ee4beef2e6c9bd2f37c357d39710c1b1a9bf4794d34d8d7a6b9a0cd5d86ac565a05e2138805ad44c76bbf6fdf6b153e8e7ab5fa176a95884e7ed72c9842a3eb11310cd5035d8960aa28f197ad1217f3b1ca49dc8989e06a36cd2b7f829ce58e8a834429a27c96a9dc470d95f1c38d131c30a25f6059a9183a413167a63d22ad10d2dba8a4659a0020bdb875ad2380849e4b2e2faf7ae17f881ef079e172e428fc1960aa11bea99cd5f816d3469d16674e6b06000695bce5dd9f3c7ca1c68ff8fae278dea4512fb2a34967757fb0732913447d57244070ac1cb786ef4f57ef9037b7ee2bd69010000",
    ],
    [
      "ETag",
      "mYlV+Fmse3UAxasYNa79wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1f8b08000000000002ffedd34b7282300000d0bb64ad8c5051e84eb44c9182fc32201b066208900a317c049cdebd4eaf51df1dde03a408e1b64dba86e21abc8329955401092653349d94017418bb417bcd95aab1b3f94ca35e6cbb51734f833c049be6b2dfcee2a5f397866bf7b257431e058ab1958601d138f28fe65db4619a4d457ef0c59d3935dc8b76ba9bc334304387c4cb7df8a17ad6bab895ad39576e51c449c2839e35b913630b6edaf048b2f3958b23a1df90caf042d1813003e5679a5e6fb5524bc61d69274fd5c79ac8859aacacb0ae76e357233b6475ed2de68fec33d6b727b7f224e1e5e5ff020b80475672dc26e573fb9bacaa0bf0573fe926869fff359c72ccc1cf2f495b8d6619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-39-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535d6f9b3014fd2bc87b6d4248428048d11a25748d9490959056db3421db18ea1630c5a65556e5bfef629aae55a5ee09dbf79c7bcefde019ddf33241534478f6d0b0faf0e54e10748698c219bc5e25eec2722c2e87832630ff2c0fd6e667f1349b0182b72c898b2a673d299a9a3239ddeffa592d9a0ad742f420516fe4f5acc968321a4d2ccb733c0b7892e5e99a97f7c0be55aa9253d33c69f73321b29ce18acb3e15c5ebbbf93834ab5adc31aaa4f95ed20415697e2efa3517142b2ecad97e07061ac9ea981598e760e11f3321e7ef53f7392efa19801f39659852d194aab50529a828539e35b5ce8aa6cf48db7c73403b7fed2f22838abc29cab8c4053b3312ac70ac0e15332ec2edc6580517db70338f56db20de2d2efdcdbcbfd8aef79b6067dc5cfaa16f284c72a6b9c6cc38d7b7002ea09f30a978a9d5a3f6b9557e69d0eae3585a02484bd605636730c1963bf0484a1c9aba239ba40346884b1c1b8fc8807a63364e08c3c0d3a29a854b5192919d78ae6bc5b66d27f1d821768c87ce30268432170f496a0f313a9ea1a79a2bb6e4b21292771d4237e12af2e328dc078b79e4eb1252dce46ad9196b0b78eb51418100faa4a6631be50294da76af82c80fe78b6875ed77135eb30cd3c3ee01669ce25c3240e31a9aa758bd1109340c05f38dbf04b09ed8f75350a2e9af67d4f6bc75f1a6e5aff40806d8da55fa8b7651b80abe693b27c435ce1b0d79ec0ea802cbb7501bb83efe06242c6997055dedfdf007ea9e4296b29a95f4ffd304b00efcf75f3b2d3e6061f541462ab8c3ee50d98ad09a753bc475b927f6d8733d0f6970ad3ec43ccf3975adcdd16664052bd54b45dde243a19d58235f411084f107ba5bc7bfe84c913478040000",
    ],
    [
      "ETag",
      "Qd8C171is20uN/zDy1MZmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "ca9221131d891f50a723d9706e688cc62c3728c8048a7787cbb2ecbfdb439d464df4cbd196a7a5efcb6de029af12f0609167cf0dcaf55e86faca0453544da1153f6aaa148205a845c664ffae0cc7486ab8df9d84e3dbece26895ddf8c7c74ca8f8114b01de06d21c8b448177bf814a94c86d31154d59cddbcc02bdae4d71164d83f082f392129387d7a3917f321ac0d6da3526428b79cbffa3ed616bc19216534c516215a3d9a596b4c4580746a612655d604751236354d0c2ed8b4c52530b49d4e14ac7e9776cd7711dc7b5edfe61df66b0a058e89c2a66af67bc1f68d2a298d28a5582cb806c43169cb6e70b97f3a41562c2208cdc5ebbdf5740624c3299ffc9d5bceea3e0bff081bd3bf09d13253595de51e7a34bffb7716ce9e7a8333f1afc209466a37648148c07b3c81f4f0cf7f02efd64ad514d24b18f0a8d8576b7777470e876df5c3d25e3347fc7d3b2410b62c19763986bf0525128dcbe0215894c367a020000",
    ],
    [
      "ETag",
      "9ZmNMeosH20PNMXgG8wgVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-40-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536d6f9b3010fe2bc8fbb2694d420a212152d445295b9952d212d26a9aa6c49883ba2598daa65355e5bfef80a62faad67e0af13d2f778fcf0fe486170919939867b715c8fb4fd72226070434cdf0f43cfeeafc34cd93617411c1edf15511b0ebe574324104af598a6ecb1c3a4a5492811aaf96dd4c8aaaa452880e0a756cb3d3772cc7b29c7edf1dba7de429c8d3392f6e907da575a9c6bddedebb9b0991e5404baeba4c6c9fce7b7787bd528a6b605af55e5bf6d045f5de373dca05a39a8b62b25a62039502b9862de539b6f0cc4ce26fafa5bb9c6ebb1982ef3803ca98a80a5db785124c1429cf2ad9a892f10369da7cf14196dedc9b45c66cb10aa2cf1bbaadc99b2f0655c67a2d4155b936be878b536353a2d71555a036c6e589177a86b191c0844cd63cd91813e3c89806c7c633ae3d9bfba77e64d47126a0342f9a46221ae75037f19895fff6866a02d528d316d743d3a1fd91e9c6693c64e9c81ac4a909713c8a87036ac526736db0931828f274addeb068210a7748d3c48d2ddb1d24033761960dc092be459d51cc2ccbb5ebfc0f6d467607e4afe41a8eb92a85e26d60e432f4236f1d85ab60368dbc668c946228c76d73f5102ffbd4382482de996b5757b940a73a7d3f88bc703a8bfc0bafbdf0396494dd2f6ff1ca539a2b403495740b1ae4a948303472b658fa91bf08a6736434b778b6472832fefdf04c88eecb2665ddfcd65e8eddf8ef011734af1ac45dfb41fa64b73bf8bfc2320afde0c7fb12d312a745993f88c21d6f15c8f9ca0b7f91f62884142414ece30d407053f8f0a9eedf0d62f1e5a08dd2f81ff78da9da844968f78e6f9b291fd903d3315dd280a57e531b9aa37dc0b546ad085b28f4e344edbba9f36a4a957a026111d7256892dafd037126f635b7040000",
    ],
    [
      "ETag",
      "Qb+6J00H7TVTeqDhnNcjSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "416fc2300c85ff8b77a51a5da74e207100845626c4a0c00e9b100aa9db95b57597b89baa8aff3ea7ec123b2f5ffc9edcc1575e253086739e7d3768dabb0c79eb9a186d53b095525365110680ac3221f7f3e855976d12f3c6ee666fd1fbcb36b99f4e264258fd89a5827107698e456261fcd141a54a946fa793e9270ac66ded94e57abf785ec422949438617d58ada6b3d502aec7eb002e748e314583954637b2367441cd4b97d6aab22ed0b3d4188d167ab87fc80c35b532449e28dee3d0f3c3200c82d0f7474f235fc082b4e29c2a610f3b101b2656454cbf12161c60fa5672a7fdf923f2830b74fc47672da3dd18125f8bce7278b39f938bc412954d8303d04a9611e57cbb5fff008a8b563f69010000",
    ],
    [
      "ETag",
      "TCHOcmydRtPsSBVHZJQd/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "2d8c8209a43b908fdfc2480ae88681342258347c8248a777afd36bd47787f70d524a59db26ddedc2aee00d3c5205cb54de70dd74f29c7c90328a0b8fe0e4528dd586e650371891ba26375a18fa83d849f6716b96cedc155af2857d5865fb752d41c32f424666adc71d2f5be845ac07e78d3364ee919fea925eb171b2621aaa4a3f5eb7a92922c86ba49988ce6e9aa1ad466472b18c5d359da25d12a2d67fef2152eb99cd051e48c4d0425132ee2def9fd5e5385561733859d9d99662f24857fe19057d1f8f3bab5c444274c19accf75be9300cf2cbcbff0526800dbc68589b14cfed2ac47802feea27dd83b3e77f93a50d6bc0cf2f001854b319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-41-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f9b3014fd2bc8fbda3c685e10295aa394ae48095981b49aa60919e742dd0266d874abaafcf75d9ba66b55a9fd84ed7bce3de73e7822f7bcda93394979febb85e6f1cb9d48c9090145737cddddb5426cd36da9dc0bc5fe4e7c5feebdabc502115cb3242deb027a52b40d0339df45fdbc116d4d1b217a98a837b67bf674341d8da6b6edce5c1b79128a6ccdab7b64df2a55cbf96070d4eee742e405d09acb3e13e5cbfbe0e1745037e20e989283b792035491838f45bf168251c545b5d84568a095d02450525ea085ffcc7d7af636759fd3b29f23f88133a08c89b652da16a660a2ca78de36262b993f1163f3d58144deda5bc51613455b5649454b38b1f654d1443dd6605d84db8de50717db70b38cfd6d9044ab4b6fb3ecafb6ebdd2688ac9b4b2ff42c45d3020cd75a5867e616e005f5f72015af8c7aac9fb5f27383fcf763d1049496d00593d9704a6d67e8a6593a6399339aa4d910d2d44967133a4a87cc1dc3789f02459e11352c5a890ac6e36c0a769ab8299d25e3f18425cecca1c9c4a5ce94b9ee2964437238217f1aaee09ccb5a48de7588dc847eec2571b80b56cbd8332564b42dd479674c17f0daa3c20211f4414d071de5029574bbfd20f6c2e52af6afbd6ec26bc8297b8c7ee38c335a4840346db0790a9a8dd863c348b0dc78e7083613fb7e0c4a32fff94474cfb58b572d7fa1c738406d57992f89e2d00fbe193b47c4352d5a0379e80ea446cbb7581bba3efc42242e6997855cedbcf007e99e42c8a0818a7d3e4d049bc0a7ffda71f1f59f1c6919a9f08ebbc3a416610d743bc44db947f6c43e9d8d880137ea5d6ce438c7aee91c3a239450a9e78abac5c7423bb156be803088e30f4cb70eff0082f2317c78040000",
    ],
    [
      "ETag",
      "UjuooObOmt9Ftcx5IIsdEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92614fc2400c86ff4bfd3a12263864091f4051898032068931841c5b81c1b68ebb9b0409ffddde44346aa25f6e6df7b4ebfbeef6b08ed2105c98458b4d8e7277b6403d3081872a8fb5e24746a942b000b55830699faf9f96eb6433aab576e35e783fa641ed75db6830a182252602dc3dcc238c4305eef31e529120b70514e7493a2d320bf42e33c5a1ef75fab79c27149abc3fea769bad6e1b0ed6a931145a4c0bfe1f6d9383052b9a79384789698066974cd20a03dd31329548b2184b8a7219a082022e5e2c24e599904425ae94aa76c9762a4ea5e2d876bd56b7198c29103aa294d9d190f7034d5ac41e6d5925380cc82264c1f3e27ce1721416424cd8e9fb4eb5d8ef2b203120194effe4325e7729f82f7c604707be7322a13cd527eaa6fbd0fc6d1c5bfa39eabae9b77f104ab35127c4eff4da43bfd97b34dce428bdb5d3a81e25b18f0a8d8576b97a795173caefae5e91719abfe36a99a30581e0cb71176970e722567878035c6af2da7a020000",
    ],
    [
      "ETag",
      "12kYhkmqU7ByVMdKVoQ7zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-42-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91",
      "f7",
      "6593ca4b088480843a44b32d12051a42bb6e9ac0762ed46d8853dbe95455fcf75d92d217556b3f117ccfcbdde3f303b911594c868489ed6d01eafed3b564e48880a15b3cbd59fc845fd7578b3439ef9da9cb45d6c926edf168840851b234dde52934b42c14073d5c2d9b5b258b9c2a291b28d4e8761ab6ebb88ee3daf6a03fb091a7214da622bb41f69531b91eb65a07efe656ca6d0a3417bac9e5eee9bc75d769e54a5e0337baf5dab2852ebaf5bee9712a39354266a3d5121b2834a835eca848b1856766ccbebe966e0aba6b6e117c273850ce659199b22d94e0324bc4b650952a193e90aacd171f64e94ffd49644de6ab59f47943772579f3c5a2da5aaf15e82235d6b7707e6a6d72f4baa21af4c6baf8e187be656d1470a9e2b58837d6c83ab6c6b313eb19579f4d83d320b2ca3863d046645523116529944d3c6615bcbda192400dcad4c575bfed52db6b0f58c2fa3cf19c1e4bdac098c7fa3deab0361f74a11b33a0c833a57ac5a299cc3c3e7030606edb94ba89cd78d74e7a3d64f639630e03af13b3beeb02d91f91bf4a1838113a975ad481918b3088fc7514ae669371e4576324144339a99b2b8778d9a7c12111f4ce5cfbb22a243a95e907b3c80fc7932838f7eb0b9fc296f2fbe52d5e7942530d88a68aeec0803a9531864616f3651005f3d9788a8cea1617078426c3df0fcf84e83eaf5236d56fe9e5762bff03e09ca64585b8ab3f884df6fba3ff2b2ca330987d7f5f82e6382dcafc4114ee78ad40ce567e7849eaa310125090f18f3700c155e1c3a77a783788c5978336dae07fdc37ae4b13aea0de3bb1aba67c64f73a1dcf23155899",
      "3735c71b1c022e354a45d841661e27aadf4d9957552af413088bb82eb32aa9fd3f29e698a7b7040000",
    ],
    [
      "ETag",
      "kPXeZjhPlfV5QrYPn2nC0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f83301086ffcbf97524320c3a927d7086b81932273aa331cb52e0402670d8961142f8efbb56bfb4d7f79ebbf74d47f8299b0c0248cae2b743395c15a85f4c11a3ea2aadf86aa9510833402d0a26e7e7a4df154f0bffae5fc7cfdb4ff151bd77fd72c9844abfb116108c909758650a82af111a51238f1d8fd26e644c0fad5136dbb7f0318c59a82933c2761f45f7ab2884e930cde044498c394a6c52342b5b49274cf5c6a455a26e2b74147532450516b68d4252d70a49e4b0e2dccc1dd7f77ccff35d7771bb7019ac2815baa486d9fd2bb08d262daa987a0e0b0690b6e4dcb93dcf2c5f9b40877f743568543b49ecab30b35d6bff402692e6a85a76388354f067ac4bfdf79e2e734b3f6d69010000",
    ],
    [
      "ETag",
      "2vbwPgJ968wHRONYaXlVuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0040d1bb642d0e8dc1427732a8298a2255a46e1808a9028221c910a0d3bb97e935ea5bffedff0609215488583e4a5a8337d027d09a92e98699f6ea5ad84322a2b3ca86082f0e85135d48111f84ab774c6b557eab777b29a16ab32ede6595674a1d97516b63bc768fcd58a54dcc977441380a863bbe32cdf2cea9cfdbd7729f1ca00b5bd859c1ca8728090c04d73ef248402aa7316f6a8bc2aa37d07b69966d760ad5b2b89b529e9ae212e63a36e64485d7463f7e66ac120fe7eb6596b2ceaff40d9aa7e6d6f76af171e69d9b9dfcb9160e06db337c5485c4d3a7a7ff0b4c00ed58cea988f3f1f699615913f0b77e2c7b46c7ff6d9a70cac1cf2f840d118619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-43-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6f9b3014fd2bc87b5c13482081448ad688d29529211d21adaa6942c618ea1430c5a65357e5bfef629aaedda4f609dbf79c7bcefde009ddb12a457394b0fcbea5cde3a73d4fd009a212e7f0ea1897fbc937b3748c5b778ff5d0bdf9fd799d2f1680601d4be0b22ee840f0b62154cc77db61def0b6c60de7034834b0ccc1686a4e4d733a1acdecd908788216d98a5577c0be95b216735d3f6a0f73cef382e29a8921e1e5cbbbfe30d6eb86ef2991427f2ba9838ad0df17fd52708225e3d562b70503ada04d4c4bcc0ab0f0979926a76f530f192e8739801f18a19810de56b2b3052908af3296b78dca8ae64f48d97c75405b6fe5b9914678d196555ce1929e68299638968f35d5cec3cd5af383f34db85e46fe2688b7ee85b75e0eddcd6ab70eb6daf585177a9ac4494115575b68a7ea16c005f4532a24ab947ad43d77cacf0df2ff1f4b47006941fb606c1b533c728c59922536c91c739264064d1227b127d84c0c32b3a8952614034f892a16ae78e54033499a8d63734aadd81a132bc6c6781a3bb6913a866d8f9cc90c1d4ed0af86497ac644cd05eb3b84ae433ff2e228dc05ee32f25409196e0b79d61beb0a78ed514281007aa7a64317651c94ba76fb41e4854b37f2afbc7ec22b9a63f2b8bd871967b81014d0b881e649daac790a0d43c172ed9d01584decf2181468fee309753def5cbc6af90b3d82017676a5faa26d14fac15765e788b8c245ab200ffd01d560f9166a03d7879f808425edb3a0ef3b2fbc41fd534833dad08a7c3c4d00abc087ffda71f1010bab0f3242c21d7687884e8434b4df21a6ca3db227e39935410adcc87f63a6614d8f5deb72741969492bf95c51bff850682fd68a17100461fc81ead6e10fa146164378040000",
    ],
    [
      "ETag",
      "80Pj5J3m80hCja/RCYz+Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d926f4fc2400cc6bf4b7de94898e0c025bc00052501e4cf48480c21c756c6705be7dd4d2084ef6e6f221a35d137b7b6fbb5ebf3ec0ef01ca501b8b08cc2971ce5fe22443d32c118551e6bc58f8c528560016a1132391b5dd572b99b76eafdec32d9f5139c75b661a3c184f2d79808700fb08a300e14b84f07484582dce6539c27e9a2c82cd0fbcc1427deb83bb8e73ca1c0e48369afd76cf5da70b4ce8d81d06251f0ff689b1f2dd8d0728c2b9498fa6876c9246dd0d75d235389248bb1a428973e2a28e0e2452829cf84242a71a554ad946ca7e2542a8e6ddfd46e6c0663f2858e2865763ae1fd409316f198b6ac121c066411b2e05571be72390a0a2126ec0e3ca75aecf71590e8930c167f7219afbb16fc173eb09303df3991509eea33d5e93d367f1bc7967e8eba6b7aed1f84d26cd419f1bafdf6c46bf687869b9fa4b7f61ad55012fba8d0586897abf5eb9a537e77f5968cd3fc1d57cb1c2df0055f8e874883bb12b1c2e31bf0c935827a020000",
    ],
    [
      "ETag",
      "XQ27urxUF8Mp+mxMmeXFwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-44-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554ed6e9b30147d15e4fdd9b426814080448aba28611b5a4a3a42524dd3941863a85bc0149b6e5dd577df3534fd50b5f617e07b3eee3db6b94597ac4cd004c52cbb6a687df3ee82c7e808518933580db7db3f5799f5d7c3897ee992e1d7ecdbc73c9b4e01c1144be0a2ca694ff0a626544c36eb7e56f3a6c235e73d10ea5956cfb04ddb346dc3183b63037882e6e9929597c03e97b21293c1e0e0ddcf38cf728a2b26fa84170feb83ebe1a0aaf90525520c9e5b0ec0450c5e373dce39c192f172ba5943038da0f58e1698e5d0c22333893f3d97ee335cf433005f33423121bc29a56a0b24082f53963575ab8a26b7a86df3c90b5a7b4b6f1e69f3d52688deef71a1c8fb0f1a16da6e5753d1e452fb1cae4eb47d055ee75850b1d7cebe7aa1a769fb9a125e273b96ecb5a976accd82052c2658d2ee7be99ff891a6a24ca890ac6c9b88709c53d5c07d4efecbdd51042cc1aa2bee1cddc686ab8fe3347648ea9aa338d5691cbbb133c266ac93b145ad24a6187852a9b72c5cf25227b1613a89455d9318d6387586698a6d6cbb046303449cd8704d5d37d0dd11fa5d3349174c545cb02e2c7416fa91b78bc24d309f455e3b468a219045d79c1ae2699f128604d02b73dda92ae3e0a492f783c80b67f3c8df7add662f6986c9cdfa0ab63bc5b9a080c6352ea8a4f5094f203474ba5afb91bf0a664b60b43b787a400834f979fb48886eaa3665d93e95976db5fe07c016e74d8bb8ee5e10a47077f47f85858ae05581a13ed47bfab0678c40e91740e1887722e8fbc60b7fa06e29a429ad6949de3e04006e0b6fded4c3b5012c5c1cb01112bee1c811a14c484dbba3c78a76d07bf6c8744c1bb5e05abea8b9967bc8586928455ad052de4fd45d1b15595b6ac40348fd8c3641e0075fa0fa0f5017dd50b6040000",
    ],
    [
      "ETag",
      "RVVxqg4zEad0k8c2HgK+lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d90d14ec2401045ff657c6d23055203090f85102522816a138d216459865a6c3b7577aa364dffddd9e2cbceecddb3736fa685cfac3cc1148e59fa55a3696e52e49d6b62b475ce564a45a545f00059a542f260fe16bd0e8fc3e8b6f81d274fc9227ddcee663321acfec042c1b4857386f9c9c2f4bd85521528df0e07d34f148c9bca29abcdcbf27e198b50d0c9099b64bd8ee6eb2574fbce830b1d633ca3c152a31b5919baa0e6954b6b5551e5e85baa8d460b3ddc3fa486ea4a19225f147f3cf68370148e4661104cee2681803969c51995c226cf20364cacf2987e242c38c0f4ade43ef7e7772f4ba0fd3f3a6f18edd690f85a749683abfd825c2496a86c6af4402b59c643c6d77bf707917780ac69010000",
    ],
    [
      "ETag",
      "t0BYAX2b2A/mx4UMUCgKPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ffedd34b7282300000d0bb646d19949fe90e71408708964f11360c8488a9fc0ad1004eef5ea7d7a8ef0eef01328cc930a4acbd9206bc83295b41010b76b7de98e5054de7ba538a1c67279b843593745c4e2232ac16aba2e7b753e521631f1c1c84e5d0e06673cc67fd72e376b8491a51ea02634d291455cbe5b5ba43ada7f9c59d04e70f29d2f23dad9324b07c93b3b6aaeeca6194b1596f9d10790c3346e3d3ec94e26c0e52b492a19b6fbff0db329f6018634d7606f528dd62ae67e978edcbc467b4dc93a5a3d3ef19c2d83e7fe6e63c042b18ef0aca2b76345c2feab9f0f2f27f81052063477b32a4f4b95d52205c80bffa299b3af2fcbf21594f7af0f30bbecc2d4f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-45-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b4fdb3014fd2b91f771f49d3ea56a54258c4a6d0a490a9ba629729c9b6048e2103b4508f5bfefdaa10c84049f62fb9e73cfb98f3c937b5ec46446229e3ed4503d7dbb13113921a0688aafeeafb43f7cdcde4cce1f7afeb2de83ff3db7afe6734470cd92342f33684951570ce46ce7b7d34ad425ad846861a2963d6cf54683d16030eaf5a6e3690f7912b264cd8b7b64df2a55ca59a773d46ea742a419d092cb3613f9eb7b67dfef9495b803a664e7bd64075564e773d11f9960547151cc773e1aa8255421e4946768e13f338e4edfa76e739ab75304ef3903ca98a80ba56d610a268a84a77565b292d9333136df1c88efac9d65603191d57911163487132ba68a86eaa904ebdcdb6eac957bbef5368b60b575437f79e16c16ede576bddbb8be7573e1788ea5689481e15a73ebd4dc5cbca07e0c52f1c2a807fa592bbf3468f5712c9a80d2129a6038ee8e686fd29d46493466c964308c922e44d1241a0fe920eab2a90d761c01459e11352c5a8882f5298ca9dd0d2149baa11d4fbae114faa370184dfad1600200f1941c4ec863c5159c71590ac99b0e911b6f153861e0eddce522704c0909ad3375d618d305bcf5a8b040047d52d34147b94025ddee951b38de6219acae9d66c26b48297bf21f70c609cd24209a56d83c05d546c4a0577bb171ce106c2676790c4a32fbf34c74cfb58b372d7fa50738406d57992ff1036fe5fe34768e886b9ad506b26f0ea444cbb7581bba3efc45242e6993855ced1cef37699e3c48a082827d3d4d049bc097ffda71f1118bab8f3252e11d7787492dc22a6876889b728feca13d184f890157ea43cc1e0d8f5dd3397446c8a1502f15358b8f853662b57c056110c7ef9a6e1dfe01f90e0c4f78040000",
    ],
    [
      "ETag",
      "NXg25wOW8Fq1SCuveS+m4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d926f4fc2400cc6bf4b7d3b922dc08025bee09f42044418d1c410726c0586db3aef6e1042f8eef626a251137d736bbb5fbb3ecfee082f511a8207cb68fd9aa33c5cad513f9860822a8fb5e24746a942b000b55833d9dbd98f226f77706a3b779b7ad57eaaef96fbeb6b2654b0c144807784558471a8c07b3e422a12e4b680e23c49174566813e64a638f527fdd12de70985261fcd0683666bd0859375690c85168b82ff47dbfc64c19696135ca1c43440b34b26698b81ee1b994a24598c2545b90c504101172fd692f24c48a212574a956ac971cb6eb9ec3a4ea3d670188c29103aa294d9d994f7034d5ac413dab34a70199045c88257c5b9e3721416424cd81ff96ea5d8ef2b203120192efee4325e7723f82f7c606707be7322a13cd517ea6670dffc6d1c5bfa39aad3f4bb3f08a5d9a80be2f787dda9df1c8e0d373f4b6f1d34aab124f651a1b1d0b12bf56acdb5df5d6d93719abfe36999a30581e0cbd18b34782b112b3cbd01559b49957a020000",
    ],
    [
      "ETag",
      "Hv0WauCDeS01Kh850X8vbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-46-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "5b6fda3014fe2b91f7b2490572010248a86334dd2241e820b4daa6091cc749dd26716a3b54a8e2bfef3829bda85afb94c8e7bb9cf3f9f801ddb222462314b1f4aea262ffe98647e80451855338ad6e12f7dc0eaaaa28a68999553bebb6f7ed7e3c0604d32c89f332a32dc92b41a81cad57ed54f0aac482f31608b5bafd96d577fa8ed3b7aca13bb480276996cc58710bec6ba54a39ea748edeed94f334a3b864b24d78fe74ded9d99d52f01b4a94ecbcb6ec808becbc6f7a9a718215e3c578bd82062a49c586e69865d0c233338ebebe966e339cb75300ef18a198105e154ab705128417094b2b51aba2d103aadb7cf18356decc9b86c674b10ec2cf5b9c6bf2f68b81a5b1d9082aab4c19e7cbc5dcd896e0758d25955be3ea87b7f40c632b28e122deb0786b8c8d5363129cc1a154d05c7330f3e77e68e82c632a152bea2e421c655477f01894fff67a34012bf06a8a1bd7ec636b600ea324724932707a5162d2281a446e0f3b9149865dda8d238a81a7b47acdc2052f683c741cd37563d3ee0d88e3d8c910db04049c01244eb09b9891dd754c743841f782297ac664c9256bd242574b3ff436e1721d4c27a1578f916048e4ac694e0ff1b24f054302e89db90ebaca3838e9e8fd20f4969369e85f7acd6dcf688ac97e7507f79de04c5240638173aaa898f3184243178b951ffa8b603203467d8517478444a33f0fcf84705fd629abfaabbdfadddaff08b8c459552376cd0fb2d0e170f27f85d09f7bab7032bf785fc5366db365da2dab175af6c8724656b76d9ae66f10ff0b4458fb4617fd5c7bcb5fa8395ad2840a5a908ff702c075e1c3d77b7c4a8085c70436b0978ac11612a94d88a0cd36b2bc9efd91ddeb59b6836ab0506f6a76d73dc6ae35b422cd69a11e276a9e924eb12e55f209044558a2c00fbe43f51f69bc7bf2ca040000",
    ],
    [
      "ETag",
      "ujf7F2NuunnCf0luv1k5Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc3300c85ff8bb9ae82aaa8689576a050b1896d628571004d539679a55b5a97c40555d5fe3b4ec725765ebef83db9875359ef21815d597cb768bbab0279e59b1c5d6bd84969a8760823405685907af6c12635a731d275963fbe2fa6cf8b55319908e1f417560a921e0e259abd83e4b3875a5528dfb65b3b4c148cbbc62bb3e55bf694e52254b4f7c2723d9fdfa7f30cce9bf3088eb4cbf180166b8d7e6463e9889a673ead5355633070d45a8d0e067878282cb58db2448128c16d1c84711447511c86e3bb7128a021adb8a45ad8f52b880d132b93d3af84050fd8a195dc87e1fc196409b4f947d38ed1bd58125f87def2e662ff403e124b54b62d8e402b59c6b4e4cbfdfc07ae6d822469010000",
    ],
    [
      "ETag",
      "cIZtlBlk9eo/ERDVMHKMQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00d0bbf45b8d0818bb3f88162d4611ad083f4d85623b8d14280a98dd7d66d798ef0eef05589af2baa6bab8f23bf8021d9bc0513af2d5cc451729fa875faeb01425139bc0b9902656ad32119af4635e65f5d1f1d67b539dc2e42c1f040af1b4f5c2ccb41f742768408b90da2da231cdeed1751184471136ad602b2bcbc2f9b98ff33eb86caffb3c4a02b2a9bf8fbd6317661462cbc68720ee526ad2d4b569e7ab92b8891e4b69318df329ba19bd54ad15af9dfb02b3a99e0d3df274e06e6bcc0f5e7373105e167872f2e1dc53b3123668b9335218a1e1e8e3e3ff0203c05b252b5e53f9de6eda100ec05f7daa3bc5dfff5dce2a5e819f5fba677ba219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-47-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2b64f6d59622a59426cddab4b83669a94ba966b3d99061b8e0286590195c8de97fdfcb605d8d893e3133f79c7bcefde099dcf132251392f0fcbe81fae9dbad48c8090145737cf52f8aa41c99978fc1ea6671b5311f074e13cea65344f09625e9be2aa0274553339093ddb69fd7a2a9682d440f13f5866ecf1ad923db1e5996e77a16f22414d98a9777c8be51aa9213d33c6af77321f20268c5659f89fdebbbf9706a56b5b805a6a4f95ed24415697e2efabd108c2a2ecae96e8b061a09750c7bca0bb4f09f992667ef53f739ddf773043f70069431d194aab585299828339e37b5ce4a26cf44db7c73205b7fe5cf238389a2d9977149f77062a454d1583d55609c879bb5b10cce37e17a162d3741bc9d5ff8eb597fbe59edd6c1d6b8bef043df50342940738da971a66f015e503f05a978a9d5a3f6b9557e69d0f2e3585a024a4be882b13b18516b3cf0922c715936b69d241b40928c13d7a1763260de1086690214795a54b36829cab1471377600d63cbcbac7848d3d3d803d7891df0acccb6a9cb9c21399c90bf3557b0e0b21292771d22d7e132f2e328dc05f359e4eb1232da146ad1196b0b78eb51618108faa4a6431be50295da762f83c80f67f36879e577135e414ed9d3f61e679cd14202a2698dcd5350af458a0d23c16ced2f10ac2776790c4a32f9fd4cda9eb72edeb4fc951ee1005bbb4a7fc9360a97c10f6de788b8a245a3210fdd815468f9066b43d7873f88c425edb2909f3b3ffc45baa71032a8a1645f4f13c13af0e5bf765c7cc4e2eaa38c5478c7dd61b2156135743bc475b947b6e3b8de806870ad3ec4c6a3f1b16b6d8e3623eca1542f15758b8f8576628d7c056110c71fe86e1dfe018ff89a6e78040000",
    ],
    [
      "ETag",
      "EHlbn6/PxNLhDVO/x05uRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92514fc2400cc7bf4b7d1dd10518b28487a98844401c431f8c21e7ad83e9b6cebb9b8610bebbbd8968d4445f6e6df76bd7ff7fb781a7b488c1878774f95ca15a1f2cd15cdb20445d6546f3a3a442233880462c991c5cae0e6f0cdecacb642adbad81370ddb49d0eb31a1e50a7301fe069214b358837fb78142e4c86d92b22a2f1675e6805997b6388bc2e164c0794eb1cd27f3d1283819f561ebec1b6361c4a2e6ffd176bf75e0911e424c506121d1ee522a7a44698656a6167999614353a5246aa8e1fac55251550a45d4e04aa3d569b85ed36b363dd7ed76ba2e83194961522a989dcf783f30644416d22bab048f0155872c38a9cf172ea7712dc486c349e4b5eafdbe020a25a978f12757f2ba2bc17fe103db39f09d13395585d953e7a3abe0b7716ce9e7a8b320eaff20b461a3f648341cf76751309e5aee7e27fd646d504f15b18f1aad85ee51ebb8ddf18ede5d3d25eb347fc737aa4207a4e0cb71911af0139169dcbe017d5824287a020000",
    ],
    [
      "ETag",
      "GKh/VteWcKfPc54G6PR5fA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-48-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553db6e9b4010fd15b47d69a5f86e73b164a596431a2a1ba718276daacade85816c022c61974451e47fef00762e8ada3c19cf9ccbccd9dd2772cbb3908c09e3f15d09c5e3a71bc1c811014563ac2aef761e2ebe9b8b33fd2afe09c307f72abf8e271344f08a25699a27d092a22c0290e3f5aa1d17a2cc6921440b855a43b3d5d307fa60a0f77a9661f590272189e63cbb45f6b552b91c773a07ef762c449c00cdb96c07227dae77eefb9dbc10371028d9796bd94117d9f9bfe9712202aab8c826eb150e504a283690529ee0082fcc907d7d2bdde6346dc708bee701d0201065a6aab150221059c4e3b2a855c9f889d463befa202b7b6ecf7c6db65cbbfee72d4d2bf2f68b46a5b6d91420cb4469a7de72a16d73f4baa612e456bb3cb33d5bd3b60504a208373cdc6a13ed589bba2758dc4bd495b9b3707cad0a3304a978568fe153964035c23e29e7fdf95404aad0ac696e8cae4e7b66d762113382c81c8c58d405c64c668ce88075036b08c39001459eaad46b16cd70796b64302b1aea61d70463d4b7f4aec1748b8514ac3e63237dd0372353ef91dd117928b882132e7321791317b9f41cdfdef8deda9d4d7dbb5e23a218c949335cb5c4eb39152e89a0ffecb5abba5ca05395bde3fab6379df9ce85dd1cf71c621a3caeeef0c0239a4840342d680a0a8a8508313472be5c39beb374a77364d467787e404832fefdf442f01ff33a6555ff565efab0f63f002e6852d688fbe683600abba37f2b9cce97d38f35da2344ecfe20086f78a3407eac6def17694a1e445040167c7c03105c373e7ca8875783587c37682315fec7fb16c8ca2428a0b9773cad27dcb347fac818921a5ca8773d5d370e01571a9522a490a9fd46cdaba9f2aa5ba57c066113af8bebb8dfb0fb17ececa10eb5040000",
    ],
    [
      "ETag",
      "tRkLdMJ8MH6ZgXe4wNZphg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "416f82401085ffcbf4a824a5185b493c2821ad099a8ae5d418b32e23c50283bb431b63f8ef9dc55e7666df7e3bef656ef05d363984702c8b4b87e6fa50206f5d93a2ed2ab6525a6a2cc218905521e47a944cf41a953197f32eca16d188e3683b9f0b61f517d60ac21b9c4aac720be1e70d1a55a37c3b1ccc305130beb64e596d3ee2d73815a1a6dc099b2c4916cb24867edf8fe14cc7144f68b0d1e846b686cea879e5d25a55b7157a963aa3d1c2000f0f85a1ae5586c813c59bbc78fe349806c1d4f767cf335fc08ab4e2921a61b31d880d13ab2aa55f090b0e30432bb94fc3f923f2930bb4ff47975746fb6e487c2d3acbc7bb7d442e124b54361d8e412b59c65bc9f77bff074803347a69010000",
    ],
    [
      "ETag",
      "M+L4cMearrqjSCUAC+tECQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "d0",
      "bb",
      "f45b4c0411babf828850064804033f046a4150a1a315d465779fd935e6bbc3fb06052194f35cf467da810ff02864382773cc7463539f105170d26bb2a57b5fdb6a1df0b24eb45c4af71e525adf3ee374aa87203cb89f41151c46e8faa81bb756e9dccd1bcde2632e7035544b55b45184a695dd87ccc175148f3bcb340c59d93f6f8d4f82b4c109b506ab935d758c76e2b1c752acf3f4968e1dc5e134d9fca2b842c91d74592135833e3ceae6892cae6b1beeec667162ba76592638e3b1bc61e7b6d4b4b02bafa647a44d68c3434f9190192df1fcededff023340efac1928cf9bd77645857006feeae7e2c1e8ebbf418b810ee0e717981a6b5c19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-49-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda84574242a4688d12da464ac806a4d5344dc81843dd02a6d864aaaafcf75d4c93b5aad47e01ec7bce3de73e78418fac4ad10c252c7f6a69f3fced8127e802518973b83552dfc29b0d5b62eb3ae796bf7a620fc6623e0704eb58029775410782b70da162b60f8779c3db1a379c0f20d160e40e4cc7766cdb314d77e29ac013b4c836ac7a04f6bd94b598e9fa497b98739e1714d74c0c092fcff7fac1d2eb863f502285fe5e520715a17f2efabde0044bc6abf93e0403ada04d4c4bcc0ab0f09f992697ef530f192e8739800f8c504c086f2bd9d98214845719cbdb466545b317a46cbef940a1b7f196914678d196555ce1925e6829963896cf35d5ae82dd565bfb57bb60bb88d63b3f0e9737de76315cee36fbad1f6a77375ee069122705555c6dae5daa930f07d04fa990ac52ea5177dd29bf3668fd712c1d01a405ed83f1c470b03935dc244b26249bdae3243368924c93c918db8941dc111da509c5c053a28a852b5e1986e138d6d88d47ced886879dc6d3e9c48c0d8b5893cc1e8d52738c8e17e86fc3245d315173c1fa0ea1bb601d797114ecfde522f25409196e0bb9ea8d7505bcf528a140007d52d3b18b320e4a5dbbd77ee4058b65b4bef5fa096f688ec973f80433ce702128a07103cd93b4d9f2141a86fcc5d65b01584decc72928d0ecf70bea7adeb978d3f2333d82017676a57aa3300ad6feb5b27342dce2a2559043ff816ab07c0fb581ebe31f40c292f659d0cfbd17fc42fd554033dad08a7c3d4d00abc097ffda69f1010bab0f3242c2197687884e8434b4df21a6ca3db1c713cb75900237f243cc5699cf0bdf65a425ade46b45fde243a1bd582bce2008c2f87dd5ade33ff13a9b1978040000",
    ],
    [
      "ETag",
      "0dN2aLLiCa2Ggo2NDqij0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614fc2400c86ff4bfd3a220b3865891f064e25411418c6c41072dcba31ddd67977d310c27fb737158d9ae8975bdb3dedfabebb2d3c66650c3eacb2f4a946b53948d14c6c30455de746f3a3a25223388046a44cde4ef4206f8b647077329387819987e5a39e9c9e32a1e51a0b01fe16920cf358837fbf855214c86d92f2ba28974de680d954b6388ba6c3f105e705c5361fcf47a3a03f0a61e7ec1b6361c4b2e1ffd1b6d839f040ab2926a8b0946877a9143da034432b538ba2cab1a5a95612353470f3225554574211b5b8d2eaf65aaed7f13a1dcf757bc73d97c19ca4301995ccce67bc1f1832229fd20bab048f01d5842c3869ce672e677123c486c371e4759bfdbe020a25a978f92757f1ba6bc17fe1037b77e03b270aaa4bb3a7ce47d7c16fe3d8d2cf51674114fe20b461a3f64834bc0a6751707563b9c5bbf4fec6a0be51c43e6ab416baedeec9d1b1d77e737540d669fe8e6f548d0e48c197e33233e02722d7b87b05939a90677a020000",
    ],
    [
      "ETag",
      "VQsCl0afCX8Sc/AtUEnksQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-50-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffa553ef4fdb3010fd5732efcb26d12669fa5baa58573216a9b42c4d41d334b58e730986340eb6c38450fff79d133a4048f0619f12dfbd77efee9dfd406e789190318979765b81bcff782d62724440d30ca3ae5cde4869f7c293afd169ec5f07d57cc8b3c90411dcb014dd9539b494a82403355eafda99145549a5102d2cd4ea392db7eff53dafefbaa3c1c8459e823c9df3e206d9575a976a6cdb07ed76264496032db96a33b1fb17b7ef3a7629c53530adec979236aa28fb6dd1e35c30aab92826eb15365029901bd8519e630b4fcc24fef2b2749bd35d3b43f01d6740191355a14d5b58828922e55925ebaa64fc40ea369ffd90953ff76791355bae17d1a72ddd19f2f6b34595b5d9485055aead6fe1f2ccda96a8754515a8ad75f9dd0f7dcbda4a6042261b9e6cad89756c4d17271834a70fe6380fce82c8324e26a0342fea1e221ae760f41f6d0a5e2fc710a846a526b919387dea0e9d519cc603960ebd5e9c3a10c7c378d0a35eecb05117ba490c1479da54af59b4108513c7b4eba43072bbcced330ae835651ef31c180e1c4880b9dd51da4dc9fe88fc915cc30957a550bcf18a5c8641e46fa270bd984d23bf1e23a5e8c749d39c19e2799f1a8744d01b73ed4d960b5432c6078bc80fa7b328b8f09b5dcf21a3ec7e758bdb4e69ae00d154d21d6890672241d3c8f9721544c172319d23a35ee0f901a1c8f8d7c31321ba2f6b9775fd355afd6ead7f005cd0bcaa1177cd0f71c97e7ff47f157a58e23742f06a376cf263ed873f49130a210509057b7ffb08ae13efbed0c373412c3e1894511acf78d79832224c4273e7f8aeeeef91dd1bba9d0ea9c152bfca753ce760aea9612ac20e0afd3851f35c8c5775aa52ff4098c4abb20816a798fd0b08ad0a41ae040000",
    ],
    [
      "ETag",
      "1rOkrr/5RDBTGbEjIuL8ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "30",
      "10",
      "86",
      "ff",
      "cbed2b6432228b247e9886a809311367b26431a69683e180c3b6cc31c27fdf15f7a5777dfbf4de37d7c35751a710c2b9c8af2daaee2147b3b34d82ba2d8de6d250ad111c40237226d3f4b68caebbdff776ffb37a5425e6c5fa299fcf99d0f2132b01610f598165aa21fce8a11615f2b7d3498d1319335d6395cdf62d5a45090b15a556d81ee2f8651147301c07072e744e304385b5443bb2517441693636ad165553a2aba95512358cf0f8902b6a1ba1885c56dce9c4f5023ff0fdc0f366cf338fc192a43005d5cc1ef6c036868c2813ba7158b0801a5bce9d8de737cb531be8f88f2e3a83fa5511fb6ab49693bbfd926c24c3518d6ad101297819ebc2dcefc31fa160592569010000",
    ],
    [
      "ETag",
      "ddwCEqQzXuSxG/rlegiH2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb642d8e84cf407782fc6568d482b061f844205a49136c0d9ddebd4eaf51df1dde37a89a06735e4ee3195fc10b10153497cd32a286e576c4a65bdde88a0bf5a6c486099136770b1efd9154ee41d4ad27ec0c79edcda2233270ab8b304c49ed14d189ca59161ddae114d808766abef73df1eea9bcbda975d90ba16d040c995f941afc74d7b5e2187898a0fad16ff3529e1264f952c471b15799337f197c97228f09a358076fb97651ac95bb49c2518977314a778449573d98a259479a3a9bcaa1918fc7bbf31aa448eaaa3d5fcdbddc90f84c90132d9f9efe2fb000f84e078679393cb62b9a692ec05ffd7212143ffe5bb86298819f5f7487e72f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-51-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da3c80242491a2354be816a9212b9076d33421632ed42dc1149bac5595ffbe8b69a25695da4fd8bee7dc73ee836772cf8b844c49ccb3871aaaa72f772226670414cdf035938bc7fdc3d2b91f73cb7aac8ae0d7d5b7dbabd90c11bc6149ba2b73e84851570ce4741b74b34ad425ad84e860a2ced0ec98237b64db23d39c3813137912f2f49217f7c8be55aa94d35eefa8ddcd84c872a025975d2676a7f7dedeea9595b803a664efad640f5564ef63d1afb960547151ccb6011aa8255411ec28cf9b024fcc243e7f9bbacbe9ae9b2178cf1950c6445da8c616a660a2487956573a2b993e136df3d58104eea5bb080d26f27a574405ddc19991504523f5548271e16fd6c6cabbd8f8eb79b8da7851b0f8e1aee7ddc5e672bbf602e3e687ebbb86a2710e9a6bcc8c737df3f082fa0948c50bad1e36cf8df24b8356efc7d210505a421b8c9cfe889ae3fe244e6387a5637b18a77d88e371ec0ca91df7d964008324068a3c2daa59b410451fc6563c76d2689098100d2081888263477d9399b6c506690216399c917f1557b0e4b21492b71d2237fe2a74a3d0df7a8b79e8ea12525ae76ad91a6b0a78ed51618108faa0a64313e502959a76afbcd0f5e78b7075edb613be848cb2a7e001679cd25c02a26985cd5350ad45820d23de7ced2e11ac27f6f3189464fae799343d6f5cbc6af9891ee2001bbb4a7f4910fa2befbbb673445cd3bcd6907d7b20255abec5dad0f5e12f227149db2ce46aebfabf49fbe4430a1514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c81e8e9d894534b852ef6213cb3e76adc9",
      "d164841d14eaa5a276f1b1d056ac9627100671fc9eeed6e13ffbcb053678040000",
    ],
    [
      "ETag",
      "gsCxvqD7k8i22xrnSXQBhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d926f4fc2400cc6bf4b7d3b12263264092f86a0920022cc3fd118726c650cb675dedd2084f0dded4d44a326fae6d676bf767d9edd0e567116820bb3387a2d506e4f22d4b72618a32a12adf89153a6102c402d22264f578be6fde3e6a1fb94e79d48adea8d75f3feb6d56242050b4c05b83b98c798840adce71d6422456e0b2829d26c5a6616e86d6e8a137fdc1b5e719e5268f2e15dbfefb5fb5dd85bc7c65068312df97fb4bdec2d58d26c8c739498056876c9252d31d03d235389344fb0a2a890012a28e1f24524a9c88524aa70a552b72bb653736a35c7b69b8da6cd604281d03165ccde4d783fd0a44532a60dab04870159862c785e9e6b2ec76129c484bda1ef9c95fb7d05240624c3e99f5cceeb2e04ff850fece0c0774ea45464fa485df66fbcdfc6b1a59fa33a9edffd4128cd461d11bf37e84e7c6f3032dccb417a7bab518d24b18f0a8d8576f5ecbcde70aaefae5e90719abfe36a59a00581e0cb711d6b70e72251b87f03ee803f3d7a020000",
    ],
    [
      "ETag",
      "2kh9VXwWEZppDgsk57v9VQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-52-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535b6f9b3014fe2bcc7bd9a4e642b9e422455d94d28d29251d21eda6694a8c31c42d606a9b4e5195ffbe63687a51b5f629c4e7bb9cf3f9f81eddb032416314b3ecb6a662f7f19ac7e80851853338f557b9ea6f537eb6dcc5dbd56efbf3f2fb55904d2680609a257151e5b423792d0895e3d5b29b095e575870de01a18e73dc315dcbb52cd734478391093c49f374ceca1b606f95aae4b8d73b787733ceb39ce28ac92ee1c5e379efeeb857097e4d8992bd97963d7091bdb74d4f724eb062bc9cac96d0402da958d302b31c5a786226f19797d25d868b6e06e03b46282684d7a5d26d8104e165cab25a34aa687c8f9a369f7da0a537f76691315bac82e8d306179abcf96c6069acd782ca3a57c659b838373615786db1a472635c7df342cf303682122e92354b36c6c43831a6c1a9f184db181ff4e1dc3ff72343e79950a958d97412e138a7ba8b87b0fcd757a40958814e5b5c0ffa2e3687fd519cc603920e2d274efb348e87f1c0c156dc27239bda494c31f094566f58b8e4a599580eb6a963da2e76fb31b5927460bab135c4c01f990e19623b499c63b43f427f0553f494c98a4bd62686ae423ff2d651b80a66d3c86bc64831a472da36a78778dea7822101f4c65c7b5d651c9c74fc7e1079e17416f9975e7be3739a61b25bdec29da7389714d058e0822a2ace7902a1a18bc5d28ffc45309d03a3b9c68b0342a2f1effb2742b4ab9a9455f3abbd5cbbf13f002e715e3788bbf6039968bf3ffabfc2320afde0ebdb12d30aa605993f8082256f15d08f9517fe42ed5148532a6849dedf0000378577dfeae1e100169e0ed84805ff61df88d42644d076ef58d14cf9c07646aedd470d58a857b5813d3804ac35b4222d68a91e266a1f8eceab29d5f21104455897a0496aff0fb872dd9ab8040000",
    ],
    [
      "ETag",
      "IUlt0hfoFSybhUyhXVJWNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82",
      "40",
      "1085ffcbf40a49291595c4835ad2da10d3a29e1a63561c28b230b0bbb421c4ffde59ec6567f6edb7f35e6680b2a82f10c2b9c8db0e55ff90a3f9b44d82ba93467369a8d6080ea011399333d9eedb7d25cbe964b27e69eb52efde67cbc582099d7e6325201c202b505e34845f03d4a242fe763aa9712263a66facb2d9eea3d72861a1a28b15b687385eaee2086ec79b03573a2798a1c23a453bb25174c5d46c6c5a2daa46a2aba953296a18e1f12157d4354211b9acb89327d70bfcc0f703cf9b4fe71e839252610aaa993dec806d0c192113fae5b0600135b69c3b1bcf1f969f6da0e33fbaea0dea0f45ecabd15a3edeedd76423198e6a54870ea48297f15698fbfdf6071eabc8e569010000",
    ],
    [
      "ETag",
      "8lqTqTmlk755CDqnksSJ8A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ffedd35d6e82300000e0bbf4d9992814cadeec1893e1d455c49f17526a294894d2e268b3ecee33bbc6fceef07d03ca18d73aefdb865fc133b0741a8cd938910847e2fc66ba78702929905b267a575d9da5c386817adcc0033e2e7a93c7451d8ad569d21461162ae227935dd920bef145c4d091e06c4ac258eff76e815557c00896d656811608878485feb271e050b75e9a62c43b0f4995eba7d51496399ecb7e613231c4b7970df1daebdab709ade0d996fce4655bbd6e63b1febabd7e1ec54ece6870b037c6a3e272f910a64beb2dd9ae4c39b809c2e42067fdfbac9aabf1c3c3ff0546801b592baef3fabedd814130027ff5f3de4a7eff8f39555c819f5ffeb1ca1319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-53-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "a34014fd2b64f6ab2da5b4f491346b53716dd25217a8c66c3664182e384a1964064d63fadff732d8aec6443f3133f79c7bce7df04a1e799190298979f65443b5fff12062724640d10c5ff38751a22e5f86abab9bbbfd756a26569585d96c8608deb024dd953974a4a82b0672ba0dba5925ea9256427430516768772cc7766cdbb1acc96862214f429eae78f188ec7ba54a3935cda376371322cb81965c7699d89ddecde7be5956e2019892e647491355a4f9b5e8cf5c30aab82866db000dd412aa087694e768e13f3389cf3fa6ee72baeb66087ee60c2863a22e54630b533051a43cab2b9d954c5f89b6f9ee400277e52e428389bcde1551417770662454d148ed4b302efdcdda587a971b7f3d0f971b2f0a1657ee7ade5d6c56dbb51718b757aeef1a8ac63968ae3133cef5cdc30bea2720152fb47ad83c37ca6f0d5a7e1e4b434069096d301af51c6a8d7b93388d472c1ddbc338ed411c8fe3d190da718f4d06304862a0c8d3a29a450b51f406890d632b8d06b69344036aa7d164301e46b143fb43e8a70e0c27e470465e2aaee082cb5248de7688dcfacbd08d427feb2de6a1ab4b48699dab8bd65853c07b8f0a0b44d017351d9a2817a8d4b47be985ae3f5f84cb1bb79df00a32caf6c113ce38a5b90444d30a9ba7a05a8b041b46bcf9dabd40b09ed8f53128c9f4cf2b697adeb878d7f2133dc401367695fe9220f497de2f6de788b8a179ad21cfed819468f91e6b43d787bf88c4256db390df5bd7bf23ed930f295450b0efa789601df8f65f3b2e3e6271f551462abce3ee30d988b00ada1de2badc23dbe9f52dfda72a5aa9cf319df9b4f04d46d841a1de2a6a171f0b6dc56a79026110c7efe96e1dfe014adbcecb78040000",
    ],
    [
      "ETag",
      "lj7dtFw5LHVYyPf/d1rgTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92514f83400cc7bf4b7d658964ca1c890f4c712ec13937f664cc7283c29840cfbb435d967d777b38a751137d39daf26be9ffcf6de1b1a853f06159e44f0daacd518ee6ce0653d44d69343f24d51ac101342267723e9093fc95e6452965d30f8791b73e5b07e7e74ce8648595007f0b598165aac1bfdf422d2ae4b684caa6aa176de680d9485b9cc5d3d178c87945a9cdc7f3280a0651083be7d0980a23162dff8fb6879d036b5a4e31438575827617a9688d891959995a54b2c48ea64625a8a185db17b9a2460a45d4e14ae7b4db71bdaed7ed7aaedbeff55d064b4a8429a8b60ecc783f30644439a51756091e03aa0d5970d69ecf5c2ed256880d47e3d83b69f7fb0a284c48a58b3f39c9ebae04ff850f6cefc0774e54d4d4e6405d45b7c16fe3d8d2cf5197411cfe20b461a30e483cba0967717033b1dcc35efa6063504f14b18f1aad85eef1c9d969cf3b7e77f582acd3fc1ddfa8061d48045f8eebc2809f8952e3ee0d9918e9557a020000",
    ],
    [
      "ETag",
      "UBpPgxoUilppu9EGL6j8jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-54-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535b6fda3014fe2b99f7b2490592421382843a06e916894207a1dd4513d88e93ba4be2d4769850c57fdf71527a51b5f689e0f35dcef97c7c87fef022460344787a5b31b97b7f23083a424ce3144e973fbdf22c3c26dbddcefe7c397154f6bdc7d2e11010dcb014cecb8cb594a824656ab05ab65329aa124b215a20d43ae9b51cb7eb76bbaee3f89eef004fb12c99f2e20fb0afb52ed5a0d33978b75321d28ce192ab3615f9c379677bdc29a5b86154abce73cb0eb8a8ceeba6a799a05873510c574b68a0524cae598e79062d3c3263f2e9b9749be3bc9d0278cb29c3948aaad0a62d90a0a248785ac95a150dee50dde6930fb40ca6c138b2c6f3d52cfab0c1b9216f3e5a5859ebb564aacab475b6989f5b9b12bcaeb1626a635d7d0d1681656d24a342c66b1e6faca1756a8d6613eb11b7b1de99c369781e4696c933664af3a2ee24c22463a68bfbb0c29757640858834e535c7bb68b9dbeed93847834e9774f48623342fac43bc15d6253bfc77a31611878daa8d72c5c88023b1ef58efbc4b13d3b21be1f275e0c8c38895d821decda18c76ecf75d1fe08fd955cb30957a550bc490c5d2dc22858478bd56c3c8a827a8c04432a93a63933c4d33e350c09a057e6da9b2a17e064e20f6751b0188da3f032686e7cca524c77cb5bb8f304678a011a4b9c33cde4b988213474315f8651389f8da6c0a8aff1e2805068f0ebee9110edca3a655dff1a2fb757fb1f009738ab6ac4b6f9400edaef8ffeafb08c16e1eccbeb12b8846941e637a060c91b05f46d152c7ea0e668c112265941dfde0000d78537dfeae1e100169e0ed8280dff61dfa8322654b266ef785e4f79cf76ed7edf473558ea1735df770f011b0da3c87256e8fb899a8763f2aa4b957a004111d6655627b5ff077a0e2bb2b8040000",
    ],
    [
      "ETag",
      "SZ7pFI2bvyy0BVD1slX4eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90416b83401085ffcbf4aa5031b144c82109920a22ada9875242d8e8684cd5b1bb6b1b2bfef7ce9a5e7666df7e3bef31237c566d0e3e9cabf2ab47393c94a85f4d93a0ea6badb874d42a040b508b92c95b93dce25dbf08bbf4373e5ceafdd27dc7cd7acd84ca2ed808f047282aac7305fec708ad6890bf9d4e729ec8981e3aa384f15bb00f12161aca8d10a751b4d946014cc7c9822b9d132c50629ba119d949ba62a643935689a6abd156d4cb0c15ccf0fc504aea3b21896c56ece5c2763cd7735dcf71564f2b87c19a32a12b6a994d0fc0369ab4a813fae1b0600039b79cbb98cf6f963d13e8f88f6e078dea4512fb2a34968f77fb1d99489aa36ad9a30599e0653c57fa7e9ffe004594ad5569010000",
    ],
    [
      "ETag",
      "xmRxNCu4IpUzNShlG53YeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "bb642d8e9546a43b821a7f5b0d5a844d26c287a23640020a747af73abd467d7778df48441168cdcbec0212bda146f4ed6ed45de4433239a6213d05ccddc462a9a17213c7c4379509eacfc476e01d6dc93c09516d38379de2c1c44bb276d9124c67edee3d68f85740c3fea4c9e8cce7c3455eb6bd22d072395af38cc1d938d3844daf4e95d75b0faf2f2ccc78b00bc3ab74851891a238a9e662b86c3cf0e998ec3121c661e7cdadf38bb46ae366c9eb5db9f158ad3ead6a5f88a1df7b1d7dac750c503ace9d9d0e89994e89326875d8426de278356fabeed3d3ff853a08ea3c55a079fad86e62dbeea0bffabc6c7278fc27201428f4f30badc0d72419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-55-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbda3c28097948d19a25748d9490969056d33421632ed42dc1d43699a22aff7d17d374ad2ab5e203d8f79c7bce7df04c1e799190318979f654813c7c7b10313923a06986b765310fe4f487d487ebf25117fd81efcc6f6e261344f09aa5e8aecca1a5442519a8f176d3cea4a84a2a856861a256bfdfb25dc7751cd7b64783918d3c0579bae4c523b2efb52ed5b8d33969b73321b21c68c9559b89ddeb7d677fde29a57800a655e7bd64075554e773d1efb9605473514cb61b3450299011ec28cfd1c27f66125fbc4fdde674d7ce10bce70c2863a22a746d0b533051a43caba4c94ac6cfc4d87cf34136ded29b85161379b52ba282eee0cc4aa8a6913e94605d06eb95b5f02fd7c16a1a2ed67eb4995d79ab697bb65e6e57fec6babbf202cfd234cec170ad8975614e3e1e503f01a57961d4c3faba567e69d0e2e3586a024a2b6882d1a0eb527bd81dc5693c60e9d0e9c76917e278180ffad489bb6cd4835e1203459e11352c5a88025277d8b593244afaa338ea310a111dba4ed465d4b67b3dd749472e399e91bf926b9873550ac59b0e91bb60117a51186cfdd934f44c0929ad723d6f8cd505bcf5a8b140047d52d3b18e72814a75bb177ee805d359b8b8f59a092f21a3ecb079c219a7345780682ab1791ae44a24d830e24f57de1cc16662d7a7a022e3dfcfa4ee79ede24dcb5fe9210eb0b6abcd9b6cc260e1ff34764e885b9a5706b26f3e488996efb136747dfc83485cd2260bb9d97ac12fd25c05908284827d3d4d049bc097ffda69f1118bab8f324ae3197787a95a84496876889b724f6c7c06e7c480a5fe101bb8f6a96b758e3a23eca0d02f15358b8f853662957a056110c7ef9b6e1dff0126ff753178040000",
    ],
    [
      "ETag",
      "pnDRrABrtyPpktn57N3DQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92dd4ec2401085df65bc2d090d50a48917055131fc09f5ca18b2b6d3526c77eaee5621847777b62a1a35d19bedccf49be99cd3ddc3632663f0e1214b9f2a54bb9314cd8d0d16a8abdc687e94243582036844cae4f225a1dd5676afd783cd73ff06e52cdfa6c1d919133a5a6321c0df4392611e6bf0eff6204581dc16515e157255670e985d698bcb70319a5e725e506cf3e9ed781cf4c7433838c7c65818b1aaf97fb4dd1f1cd8d0c30213542823b4bb948a3618999195a94551e6d8d054a90835d470fd22555495421135b8d2e8741aaed7f25a2dcf757bdd9ecb604e91301949666f97bc1f1832225fd00bab048f0155872c38a9cf672e67712dc486a369e8b5ebfdbe020a2352f1ea4faee475d782ffc207f6eec0774e14544973a42ec6b3e0b7716ce9e7a8f3201cfe20b461a38e48389a0c976130995beefe5d7a7f6750cf15b18f1aad856eb37ddae97acd375707649de6eff84655e84024f8725c6506fc44e41a0fafd00d8c3a7a020000",
    ],
    [
      "ETag",
      "Swfoyxn7JhCjvBQenOlxgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-56-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536d6fda3010fe2b99f765d30ae4852480843a04d99689420ba1d5344de0384eea2e8953dbe9862afefbce495f55adfd44b87b5eeece77b7e8372b13344231cbae6b2af6efaf788c8e10553883e8776ced4fcfc2bf9fbc6ba7b0caac0ef69975361e03826996c44595d38ee4b520548e36eb6e26785d61c17907843aaed7b13cc7731ccfb286fed0029ea4793a67e56f605f2a55c951af77efddcd38cf728a2b26bb84170ff1de8dddab04bfa244c9de73cb1eb8c8deeba6c7392758315e8e376b28a096546c6981590e253c3293f8f373e92ec3453703f00d231413c2eb52e9b24082f03265592d1a5534ba454d994f3ed03a9807d3c8982e378be8c30e179abcfb6860696cb782ca3a57c697d5f2c4d855e0758925953be3e25bb00a0c632728e122d9b264678c8d6363b2984130c18aee8c773a300f4fc2c8d0b34ca854ac6caa88709c535dc1dda0c297cfa3095881579bdcfaa687ad81398cd3d827e9c071e3d4a4713c887d173bb149867dda4f628a81a7b47ac3c2252f891dbb9615a7436af67dd7895d93f8a9e9536c0f1c7b006cdbf34862f5d1e108fd114cd119931597ac9d16ba588551b08d569bc57412054d1b298689ccdae274134feb54d024805ee9eba0b38c83931e7db88882d5641a85e741fbda739a61b25f5fc37ba7389714d058e0822a2a4e78024343a7cb751885cbc5640e8ce6094fef11128d7ede3e12a27dd54c5935bfdacb6bda7c009ce3bc6e1037ed07b2d0e170f47f85991ec1ab02b6699b1dd3ee582e28fd0228ec782b82ce36c1ea076a432b9a52414bf2f61200b849bc79aaf7770358b81cb0910afec3ca11a94d88a0edeab1a269f48eedd9fd7e73e80a0bf522e7f6fdfb196b0dad480b5aaabb8edabbd1236b52b57c0041123666112ebe42f61f5c2a6ec0b7040000",
    ],
    [
      "ETag",
      "Ja1yPQIx+6q3m1nguEyg1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff2d90414f83401085ffcb782d49918029490fc5d04a421a457ba8a669b63020756170775191f4bf3b4bbdecccbefd76decb8cf051b7058470aaabcf1ed57053a179b24d86ba974673e9a8d5083340232a267f6fd77b19ede5c65d65ebd779b2ffa93bbf5a2e99d0f93b3602c211ca1a65a1217c1ba1150df2b7e3514d13193343679564fb126fe28c85860a2b6c7769ba8ad2182e87cb0cce74cab044856d8e7664a7e88cb9496c5a2d9a4ea2a3a957396a98e0e9a152d477421139ac387ee0b88117785ee0ba8bbb85cba0a45c989a5a6677cfc036868c90197d7358b0809a5ace5d4ee717cbbe0d74f847a3c1a07e54c4be1aade5fc6a7f4f3692e1a846f538835cf0321e6a73bd5ffe00581afa9169010000",
    ],
    [
      "ETag",
      "z2FYlBYlG1ARFZ0IYxip5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "4b7282300000d0bb642d8e4019a13b18025a048bd14a570cc110438cfc21b4d3bbd7e935eabbc3fb06599e93ae4bfb8a933b780573a659cb7c19d4a6e351fa8e8ab7e8f4713bec603686d0e2b6a56b77b38958518f142af4eaf258ecacd1e5a1a256b08d0f1b11ae1329c2b2552b65b6c5c590888471426b877ffa2c301ab961a8ac4ada051e3eeda9348498c930c5ad36b9bc729b616a868d3c64e61a7af597232fd54ae2293aa37cbdba270edca2c68539c6ca963364ee27ff6647cc7911e3e0e37371747b4fdfa747d55791366ffb32c5a4b0af010fab04b3e5d3d3ff051680c89ab5a44bd963bb6e58d602fcd54ffbb9268fff0ec95ad2829f5f3020691d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-57-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc8fbb8e64148c843aad62ca52b5a423a425a4dd3848cb950b7802936a9a22aff7d17d374ad2ab59fb07dcfb9e7dc074fe49e1731999188a70f3554fb2f7722222704144df1f5feaef87eb15f99a3afaecd770f3f7346afe2c7d35344f08625695e66d091a2ae18c8d976d34d2b5197b412a283893aa371c7b42ddbb26cd39c8ea726f22464c99217f7c8be55aa94b35eefa8dd4d854833a025975d26f297f7de6ed02b2b71074cc9de5bc91eaac8dec7a2df32c1a8e2a238dd6ed0402da10a21a73c430bff997174f6367597d3bc9b2278c71950c6445da8c616a660a248785a573a2b993d116df3d5816c9ca5b3080c26b23a2fc282e67062c454d150ed4b302efcf5ca70bd8bb5bf9a07eeda0b378b4b6735ef2ed6cbedcadb1837978eef188a461968ae716a9ce99b8717d48f412a5e68f5a0796e949f1be4be1f4b434069096d301cf76d6a4efad32889c62c9958a328e943144da2f1885a519f4d87308c23a0c8d3a29a450b5158111b8c6ccac2be3d32c321c4349c8cc10e27746cc78378da8ffa16399c90c78a2b38e7b21492b71d2237be1b3861e06fbdc53c70740909ad3375de1a6b0a78ed51618108faa0a64313e502959a76bb5ee0f8f345e05e3bed84979052b6df3ce08c139a494034adb0790aaa9588b161c49baf9c7304eb895d1d8392ccfe3c91a6e78d8b572d7fa10738c0c6aed25fb2097cd7fba1ed1c11d734ab3564d71e4889966fb136747df88b485cd2360bf9b575fcdfa47df221810a0af6f93411ac039ffe6bc7c5472cae3eca488577dc1d261b115641bb435c977b64db96698d880657ea5d6c30181ebbd6e46832420e857aaea85d7c2cb415abe50b0883387e4f77ebf00feeb2098178040000",
    ],
    [
      "ETag",
      "kjnBFyM15+I6ivqKmcaPdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bf4b7d1d810519b2c487a1a84b1011667c30841cbb6e4eb775dedd1442f8eef6a6a251137db9b5ddaf5dffffdd161eb352820fab2c7daa516d0e5234d73698a1ae73a3f95151a9111c40235226e5855ecb954cd7493b10c3a85dde86dd41707ccc848eefb110e06f21c930971afcbb2d94a2406e8b29af8b72d9640e984d658bf368164ece392f48da7c72331e07c3f10876cebe510a23960dff8fb6c5ce81075acd304185658c76974ad103c626b432b528aa1c5b9a6a15a386066e5ea48aea4a28a216575abd7ecbf5ba5eb7ebb9eea03f7019cc291626a392d99b39ef07868cc867f4c22ac1634035210b4e9af399cb996c84d8309c44de61b3df5740614c4a2effe42a5ef75ef05ff8c0de1df8ce8982ead2eca9b3f155f0db38b6f473d469108d7e10dab0517b240a2f47f328b89c5a6ef12e7db831a8a78ad8478dd642b77378d4eb7b9d37574fc83acddff18daad18158f0e5b8c80cf889c835ee5e0151d1699b7a020000",
    ],
    [
      "ETag",
      "dHsxdbdgxf/AaBT/nWI39A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-58-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4010fd15ba7d69d5d8e6668c2d59a9e5d016c9c6898d932655652f30389b004bd8c5951bf9df3b409c8ba2264fa09d7399393b7b4f6e5916910109d8e6ae8462f7f18607e48880a41b3cdd5e7ef112cbbdbc61d6d5f7ece6ecef6ef9939d0d878860154bd0344fa0257859842006cb457b53f032a705e72d146a75ed9666199661589ad6eff535e40948e209cb6e917d2d652e069dcec1bbbde17c9300cd9968873c7d3cef6cf54e5ef01b08a5e8bcb4eca08be8bc6d7a9cf0904ac6b3e172810d94028a15a49425d8c213330abebe946e339ab63708deb2106818f23293555b2811f22c669bb2a855c9e09ed46d3efb210b67e28c7d653c5b7afea7354d2bf2fab34285b25a1520ca442adfe6b3a9b2ced1eb9a0a106be5e287337714655d40c88b68c5a2b532548e95917782874262736be543753271a7aeaf5461462024cbea367c1a2450b5f09094fbfa7e2a029568d614573dd5a29aadf68338e885b16d7483588520b0835e971a811af64d30a30028f264a55eb368c63330d5d8ec532d80483303cdd6c18a7403f960ebbd9e6e83a563fe6090fd11f9533009274ce45cb0262e7231777d67e5cf97de78e43bf51831c5484e9ae6aa219ef729714804bd31d7beaa328e4e55f6aee73bf3d1d877cf9de6ba27b0a1e16e7187171ed34400a269415390504c7984a191d3d9c2f5dd99379a20a3bec3d3034290c1affb2782bfcbeb9465fdadbc2cb3f63f00ce6952d6886df34334b2df1ffd5fc177a7cec21f4d4fdf56d1555d6da97a4bebfa9a3ed08c8166b65555bd42f1df48c4bd6f74c9d9d2995f92e6680e31149085efef0582ebc2bbcff7f096108baf096d703125c32d0c45651216d06c234bebd91fd89661777ba40617f255ad6fda87d82b8d4a1152c8e4c344cd5baa52ac4ba57804611197c873bdef58fd07530200b0cb04",
      "0000",
    ],
    [
      "ETag",
      "vY+Nl6IYji6ZGnjQzyUXiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d14e83401045ff657c85a404a12d491faca2369246691b634cd36c61402a30b8bb6828e1df3b4b7dd999bd7b76eecdf4f05dd42904702cf29f16657793a37e334d8caa2db5e2d250ad102c402d7226cf53f7a39c14b7cb97874d747e4c67dbf7d4cb170b2654f2859580a087acc03255107cf6508b0af9dbe120c7898ce9ae31ca6abd0d9fc298858a5223ac775174b78c4218f68305273ac698a1c43a4133b29174c244af4c5a25aaa6445b512b135430c2e3432ea96d8424b259b1bd99edf8aeefbabee3cca77387c19212a10baa99dd6d806d346951c6f4c761c100726c3977369ebf2c7b26d0fe1f5d761ad5ab24f655682c2757fb7b32913447d5b2450b12c1cb782ef4f53e5c00893852df69010000",
    ],
    [
      "ETag",
      "z73Yl0i4BKDSLzFd8TWd5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "82300040d1bb64ad0ca20874072a056271188a51360c8d41404b22099ae8f4ee757a8dfa4ef037ff014a8c09e785a027d28137a04ac3d1b00699edf9c7ba67f1fd7891f61a9ac8c9278af69ceef0aa5bdedc0ecea0372c824a4fa4e4fba4b1bf42917a27a72121ccc7f4eee298ae248dea8d31ec441554c910a20962d5ba6d8f55ba40cc98f9bc8d4a8fb84c2a3ece22d7479b00532347b57bd3f9728f0f75e75f5b371ed4fb5ac09b55cc915766b040d72e9c6dd3e9c9d6a57d607911e463f19d5cc4b3f2bc9531fe0c2dff9cc15499a1a4249e671faa2796a9bdbcfc5f600488644d4f78d13c6f9f9a8e33027feb174231f2fcdf23654f7af0f30be81a70dc19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-59-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbb8e655088148d11aa574454bc84a48ab6d9a903117ea96608a4db7aaca7fdfc5345dab4aed276cdf73ee39f7c123b9e5654aa624e1f95d03f5c3a71b919023028ae6f8baf879fd79786386b7f9dfd449c38bbb6f7ea6e6b3192278cb92745715d093a2a919c8e976d3cf6bd154b416a287897a63b737b24ddb34edd1c89db823e44928b2252f6f917dad5425a783c141bb9f0b9117402b2efb4cec9edf07f7c783aa1637c0941cbc961ca08a1cbc2ffaa5108c2a2ecad97683061a09750c3bca0bb4f09f992627af53f739ddf57304df73069431d194aab585299828339e37b5ce4aa68f44db7c71201b6fe92d228389a2d9957149777064a454d1583d54609c85eb95e10767eb70358ffc75106f16e7de6ade5fac97db55b031aecebdd033144d0ad05c63669ce85b8017d44f412a5e6af5a87d6e959f1ae4bf1d4b4b4069095d309e0c6d3a72866e9225139639e638c98690244e321953331932d7022b4d80224f8b6a162d45699bd9304d476e7ccccc616ca534899d3475e394a51300cbb16cd721fb23f2a7e60a4eb9ac84e45d87c855e8475e1c85db60318f3c5d42469b429d76c6da025e7a54582082dea969df46b940a5b6dd7e1079e17c11f9975e37e125e4943d6cee70c6192d24209ad6d83c05f54aa4d83012cc57de2982f5c4be1f82924c7f3d92b6e7ad8b172d7fa64738c0d6aed25fb289423ff8aaed1c1097b46834e4be3b900a2d5f636de87aff1b91b8a45d1672b1f5c21fa47b0a21831a4af6f13411ac031ffe6b87c5472cae3eca488577dc1d265b115643b7435c977b60db96e5d844836bf526369e5887aeb539da8cb083523d55d42d3e16da8935f21984411c7fa0bbb5ff07cd8c3b2478040000",
    ],
    [
      "ETag",
      "CZh+0j3Rkgxd8dRQqKIftA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "86ff4bfde8882ee090257e001cba041161241a43c8b17573b8adf3eea641c27fb737118d9ae8975bdb3dedfabebb0d3ca645042e2cd3e4a942b93e4850df986082aacab4e247498542b000b5480cf97aebf5edc01b5cdfb4f2bb711cb70f5f8f5ecece9850e103e602dc0dc429669102f77e0385c891db42caaabc58d499057a5d9ae23498f8a30bce738a4c3e9a0d87ddded083adb56f8c84168b9aff47db7c6bc18a96138c516211a2d9a594b4c250fb46a612799961435125435450c3f58b4452550a49d4e04ae3a4d3b09da6d36c3ab6dd69776c06330a854ea9607636e5fd409316d9845e5825380cc83a64c1717d3e73398d6a2126f44781d3aaf7fb0a480c49468b3fb992d77d10fc173eb09d03df39915355e83d35185e777f1bc7967e8e3aef06de0f4269366a8f04fe95370dba5763c3cd77d27b6b8d6a2c897d54682cb48f5ba7276de7f8ddd53e19a7f93bae96155a100abe1c97a906371699c2ed1bd29ef3987a020000",
    ],
    [
      "ETag",
      "bzXEC1TEFOQ4mYPff7+z/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-60-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2b99f765930a24bc0482843a04e9168986368476eb3481e338d46d12a7b6d30e55fcf79d13e88baab59f0877cfcbddf9ee11ddb23c464314b1cd5d49c5f6f30d8fd011a20a6f209a0f1c7ef3d3ffabb6f9d5d52c30cb93e9b9fd301a01826996c45991d286e4a520540e978be646f0b2c082f30608356cb361d91dbbd3b12dcbe93b16f0244d9319cb6f817dad542187add6c1bbb9e17c93525c30d9243c7b8ab7eedbad42f01b4a946cbdb66c818b6cbd6f7a9c728215e3f968b980024a49c58a6698a550c233338ebebd966e329c353700be6784624278992b5d1648109e276c538a4a150d1f5155e68b0fb47067ee243426f3a51f7e59e34c93d75f0d2c8dd54a5059a6ca3809e6a7c6ba00af6b2ca95c1b973fdcc0358cb5a0848b78c5e2b531328e8db13f85e05ec2f8a44333efd40b0d3dcd984ac5f2aa8e104729d535ec47e5bd7d204dc00adceae4aa6fdad81a984e94447d920c3abd283169140da27e0f772293385dda8d238a81a7b47ac5c239cfdb0e8ca46d5b711ff7bb4e4c06fda817c56dcb218e93b4a9494cabd31b9811da1da107c1149d325970c9ea79a1cbc00bdd55182cfdc93874ab36120c3399d6c5e9265ed6a9a04900bdd3d74e671907273d7ccf0fdd603c09bd0bb77eef19dd60b25ddcc18b27389514d058e08c2a2a4e790c434367f385177a737f3c0346f58867078444c3df8fcf84705b545356d5aff6b2bb95ff017081d3b242dcd71fc842bbddd1ff154e66f3f1c71acd1e20767f00042b5e2ba0f3a51bfc427528a0091534271f6f0080abc487977a381bc0c2e1808d54f01ff68d486d4204adf78e6555857bb6dd6b0faa3b5758a837b98e631f06ac35b422cd68aef61dd567a3e755a54af9048224",
      "ac8beff9df21fb0fc55586b7b6040000",
    ],
    [
      "ETag",
      "n89ojXNxtynZZLR0uFDQ6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "df657a0b89d44a238917b521d684108bf5aa31665d068a0586ee8fad12debdb3e8cdceecd96fe79c4c0fdf559b4304c7aafcb1a82e0f259a77d764a86d6d34978e5a8de0011a513279968fb355720d533bdbdabf6b29e3566fcac582092dbfb01110f5505458e71aa2cf1e5ad1207f3b1cd438913173e99cb24e3fe2559cb1d050ee847497242fcb2486613f7870a26386052a6c25ba919da2134ab37669b568ba1a7d4d5649d430c2e343a9c8764211f9acf8e1c40fc269389d8641307f9e070cd62485a9a86576b705b63164449dd12f870507a8b1e5dcc5789e597e7281f677747931a8378ad857a3b39cdcec5fc945321cd5288b1e48c1cb78abcced3efc03404367d069010000",
    ],
    [
      "ETag",
      "vc25GLz6Nu5SuxzgcEnsPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0bb645d3a948f0577669002f209b42065c3004d63f835023204c7bbdbf11af6dde17d83a2aaf038e6d3adc13d7806bc90f46db57d631a34094dcf0997ac2e885d6e4a06435c9cafc836bf7613e40b398442889913fa9ef82eb86246607a6ca3fe1a976d39fa549b4fe1caeb8f9a42aacebc563bb29a30a9ac5b2c4a16ef03851946372b48f9747d887642d39ee5574c0e926d48da34f1c54abca708ad3c18e44b9421c7effbec450ef2140ac9c9235e71dc67a270318435e7fbb22c7dfdea103bc960b3d05b5b0c49ead6ad27b212d1884ef9a59bb70f0fff17d800bc303ae031a7f7edb2aaeb1bf0573f9f38c3f7ff1017031ec0cf2f2f52f42e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-61-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2b91f74adba4a56953a91a550923529b8e3405b1698a6cf72618d238c40e0ca1fef7dd3894c126c1536cdf73ee39f723cfe44e145b32214c64f735544f5f6e2523470434cdf0f5f770cc0aa5b87b752d2eee02f7b6f07eac2ea653448886a5e8aecca1a3645d715093cdba9b55b22e6925650713755ca7e3b8037730701dc71b790ef214e4e9421477c8bed1ba54935eefa0ddcda4cc72a0a5505d2e77afefbd877eaface42d70ad7aef257ba8a27a1f8b7ecd25a75ac862ba59a3815a4195c08e8a1c2dfc656ed9c9fbd45d4177dd0cc10f8203e55cd6856e6c610a2e8b54647565b292c9333136df1cc8da5ff8f3d8e232af774552d01d1c595baa69a29f4ab0cea2d5d20ac2b355b49cc5c12a4cd6f3737f39ebce578bcd325c5b57e77ee45b9ab21c0cd79a5a27e616e205f5b7a0b4288c7adc3c37ca2f0d0afe1f4b434069056d3019d92e75c6b6c75236e2e9783064a90d8c8dd9684807cce6de311c6f1950e41951c3a2852c3c065e6a7b34f146fd34391eba7882214dfae3d475d8d6e36e9f92fd1179ac848653a14aa944db21721505b19fc4d1269ccf62df9490d23ad7a7adb1a680b71e351688a00f6ada37512151a9697710c67e349bc7c1a5df4e780119e54feb7b9c714a730588a615364f43b5945b6c1809674bff14c16662df0f4145263f9f49d3f3c6c59b96bfd2631c6063579b2f59c751107e33760e884b9ad706f2d01e4889966fb03674bdff85485cd2360bb9d8f8d135699f2248a182827f3e4d049bc0a7ffda61f1118bab8f324ae31d7787ab468457d0ee9030e51ed8eed073cc9faa69a5ff8db9b6ed1cbad6e46832c20e0afd5251bbf858682b56ab57100671fca1e9d6fe0feebadb5e78040000",
    ],
    [
      "ETag",
      "x58bnssc6WYiQkI6jn9ZOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92514fc2400cc7bf4b7d74441670c8121e4010414018e3c910726c0586db3aee6e1a42f8eef626a251137db9b5ddaf5dffffdd019ea334041796d17a97a3dc5fac514f4ce0a1ca63adf89151aa102c402dd64cf6bb9ed855ed163a97e2eaa19f647ae6b5278d06132ad86022c03dc02ac23854e03e1d201509725b40719ea48b22b340ef33539cfa5e6fd4e53ca1d0e4a3d960d06c0d3a70b4ce8da1d06251f0ff689b1f2dd8d2d2c3154a4c0334bb6492b618e89e91a94492c5585294cb00151470f1622d29cf84242a71a5e4d825dba938958a63dbf55add6630a640e88852666753de0f3469117bf4ca2ac1614016210b5e15e70b97a3b01062c2dec877aac57e5f018901c970f12797f1ba1bc17fe1033b39f09d1309e5a93e537783c7e66fe3d8d2cf51eda6dff94128cd469d11bf37ec4cfde6706cb8f9497a6baf518d25b18f0a8d8576b97a735d73caefaede92719abfe36a99a30581e0cb711f6970572256787c03ab3f52ca7a020000",
    ],
    [
      "ETag",
      "JGRaq41Be6+a/KJmptURDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-62-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "db",
      "30",
      "14",
      "fd",
      "15",
      "cb",
      "13",
      "02a4b6a1c082a854b1ae645ab4d0b23485b109356e721bdc2571b09d8a0af1efbb76280c31b1873d2c2fb17dcfb9e7e4f8e69efee4654a7b74ceb3db1ae4fadd52cc698b8266199e7e5baa612507c777cbe15aed65abdbc5f7bb3aebf711c10d4bb1a2caa1ad442d1350bde9a4934951574c0ad1c6466d77bfdd750fdc8303b7db3d3e3aee224f41be0878f913d9375a57aae7381bed4e26449603abb8ea24a2783a7756fb4e25c51212ad9c97920eaa28e76dd1935c244c7351f6a71334502b90332818cfd1c233339d7f78d9bac359d1c910bce209b0241175a98d2d6c918872c1b35adaaeb4774fadcddf1674e205de3022c3f17414edc4ac30e478973045663309aace35f9148ecf485ca1d60d53a06272f9d90b3d4262098990e98ca731e9931332189d12128c2fbd7027c6b35d12f85f3c3c0ffc333f2226d214160c3b9e328d8db4b191364bdfdc9106a511f418a0fffadae883a97221b936d6fd51e4858361e45f784d5a01642c594f6e31af05cb15209a4956800679265240caf978e247fe78340890612338df2014edfdb87f2644eb0a8c416ddf46cb3db4fa1bc005cb6b8b58350bdaa50f0fad7feab0d57dbf854dae1184e3d1f0e9d7a9175ed1e6288405482813cb7a23270bb685bf4ef966e4108b4387324ae35e699e28239248b0e58817f61b1fd92e3e7bd482a57e5d3bda377f6699feb1f2a851dbfe20a590a19d33b3453565bdf01243c13fb7450b508a65a6cdb4c42f51c0e639107b77e4294a12c78497c4444de2e8eadc9bd9b8e316f9c852ac68f790d8947bc484bc596f9bcdb671647d3423f09f3c5c37b1",
      "1891d3f1c8c339f8057da7ade3f3040000",
    ],
    [
      "ETag",
      "XjsCprA9xjCys0gvqfZxug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "80",
      "e1bb642d0e20cfee007938c1aa8c146193893196878680410b9ddebd4eaf51bf0bfcabff1b6042e8ed8644db5006dec088557b4ee6905b6ef0593a7bb18d8678633675d89d97277ac870d676b64d7223a7fafa22da6b718a8648f7b37ebd57893ac46ebd2aa7da389b70a5e9d1fb72f0ab583c18a4c9bdaddc5d515bccf1b24409c3eeb05053e8d89336fa91991ba1964a559946d44ba48d14cb0ba6c0a3b5c5c8e74cbf9a0a597f1c8303e7fbc7363eca9255c056f2af350904eff1b41b2eb28a4a97096f8364a5b19e89b613090ea781302d74e0dd43f39797ff0bcc00fde2554f6fa87adebed06d7b06fed64762e4f4f9bf4b714f7bf0f30bf9039d3d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-63-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fdb3014fd2b91f74a9b949434ad548daaa4a3529b429a82a6698a6cf72618d238c40ea842fdefbb7128834d82a7d8bee7dc73ee475ec88328b6644498c81e6ba8f6dfee2523270434cdf0d5b9eadf5c972b55eca7b360b19cd9309567d9788c08d1b014dd95397494ac2b0e6ab45977b34ad625ada4ec60a28ee7767a9eebb9aed7eb0d07c31ef214e4e942140fc8bed3ba5423db3e6a773329b31c68295497cbdddbbbfd746a9795bc07ae95fd51d24615657f2efa3d979c6a218bf1668d066a0555023b2a72b4f097b965e71f537705dd7533043f090e94735917bab18529b82c5291d595c94a462fc4d87c7720eb60114c638bcbbcde1549417770626da9a689de9760cda2d5d29a87b355b49cc4f35598aca797c172d29dae169b65b8b66e2f8328b034653918ae35b6cecd2dc40bea6f41695118f5b8796e945f1b34ff7f2c0d01a515b4c164e078b4e73b4396b2014f7df78ca50e30e6b3c1197599c3877de86f1950e41951c3a2852cfa0e4bfd1ee709737a2ce9fb2e4f7c67c093a103ae4b4f4f61ebf7c9e1843c5742c38550a554a2ed10b98de67190c4d1269c4ee2c09490d23ad717adb1a680f71e351688a04f6a3a34512151a969f73c8c8368328de737413be1056494efd78f38e394e60a104d2b6c9e866a29b7d830124e96c10582cdc4ae8e414546bf5e48d3f3c6c5bb96bfd1631c6063579b2f59c7d13cfc61ec1c113734af0de4a93d90122ddf616de8faf01b91b8a46d1672bd09a29fa47d8a20850a0afef534116c025ffe6bc7c5472cae3eca288d77dc1dae1a115e41bb43c2947b647bde70e01103aef4bfb181e33bc7ae35399a8cb08342bf56d42e3e16da8ad5ea0d84411c7f68ba75f803aa941f6a78040000",
    ],
    [
      "ETag",
      "0P4VQpOsnyCFELMF/eCo5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "0c86ff4bfd284b865374247ed814750943c7d09818b39cd0312650bc3b54b2ecbfdbc3398d9ae897a32d4f4bdf975bc1635626e0c243963ed5289b9d14f5c40421aa3ad78a1f15950ac102d42265f2c26b26af757ff7b6d90b50074fcfe18defa5c7c74ca8788185007705f30cf344817bb7825214c86d31e57551cedacc02dd54a6388dc25170ce794189c9836bdf1f0c7d0fd6d6b631115acc5afe1f6df76b0b96f410e21c2596319a5d2a494b8cf5c8c854a2a872ec28aa658c0a5ab87d914aaa2b21893a5ce938bd8eedf49c5ecfb1edfe61df6630a758e88c4a66afa7bc1f68d2220fe9855582c3806c43163c6fcf672e67492bc484a32072f6dbfdbe02126392c9ec4faee2751782ffc207b671e03b270aaa4bbda5cefccbc16fe3d8d2cf51a783c8fb4128cd466d916834f6a6d1607c65b8fb8df461a3515d49621f151a0bedeefed1c1a1d37d77f5848cd3fc1d57cb1a2d88055f8e8b4c833b17b9c2f51b020798097a020000",
    ],
    [
      "ETag",
      "HEyQxu9+Xy2NetNqvRVLEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-64-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85538d6f9a4014ff57c82d4dbaac8a544531319db16c23b36a116bb665d1e378d8eb80a377874bd3f8bfef01b51f69d62624c0bddfc7fbba7bf28767111990906f6f0b90771f6e44484e0868bac5d35ccc47c2b40a73beead89fbad64f67777d7d391c2282972c45d33c8186128564a006cb45732b459153294403851a76a761d96dbbddb62dcbe93916f21424f184677f907dad75ae06a679f06e6e85d8264073ae9a4ca48fe7e6eed4cca5b801a695f9d2d2441765be6d7a9608463517d970b9c0040a05720d29e509a6f0c48cc2cf2fa59b9ca6cd2d82779c01654c14992ed3420926b2986f0b59a992c13da9d27cf64116eec41d07c678b69c06c71b9a96e4cd47832a63bd96a08a441b5ffcd985b1c9d1eb9a2a501b63f5cdf55dc3d8486042466b1e6d8ca171668ca6e7863199ad5cfff8118d5213efbb8bd18977e10546d9d80894e659955240c304ca741ebae6bd9e5549a01aa5eae0bad7b2a9d56f39611cf658dc6f77c3b80561d80f7b5dda0e5bcce940270a81224f97ea158b6622a31163512774c2fe6914b52c1a776d081dbbedb0288e5a0e122d8880f6c8fe84fc955cc33957b950bc6e1d59f95ee0ae037f391d8f02b72a23a6d89ef33ab9b288e7796a2c12416fd4b52fa35ca05339076f1ab8fe681c78576e3dfa096c29bb5bdce2f0639a2840349534050df24244d834329f2dbcc09b4d47136454f39c1f108a0c7edd3f1182bbbceab2aedea597dda9fc0f802b9a141562577f108becf727ff575804be37fdfab6c411cdf32394f98d28dcf65a815c2e5dff07a98f7c884142c6dedf00045781772fede1062116ef10da288dffb86f4c95264c42bd773cadaa7c60dbfd96dd231558ea57317c0e0d2e354a454821d30f15d537a8ec57152ad4230883b82ed3aa53fb7fa34490a8c1040000",
    ],
    [
      "ETag",
      "poPAo/1u/PW46+51Z9vhhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83301086ffcbf971908828cb96ecc3665017c954b625266659ba7220081c6b8b0609ffdd2bf34beffaf6e9bd6fae87afbc4e600ea73c3bb7a8baab0ccd9b6d62d46d693497866a8de0001a9131f952fdbe17f9b9be7b96d3348c260fd16e922d170b26b4fcc44ac0bc8734c732d130ffe8a11615f2b7e3518d1319335d6395f566173e86310b152556d8eca368b98a42180e8303059d624c51612dd18e6c141528cddaa6d5a26a4a7435b54aa286111e1f32456d231491cb8a1bdcba5ee007be1f78de6c3af3182c490a9353cdec7e0b6c63c88832a61f0e0b165063cbb9d3f1fc66f9c6063afca3abcea07e55c4be1aade5f5c5fe9e6c24c3518d6ad1012978194fb9b9dc873fd5cfbc9469010000",
    ],
    [
      "ETag",
      "OmzXjiqn5Kc7fEL+FLT+gA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "db6e82300000d07fe9b3124070b0b7b1582730906be85343bbd6d0c92514e462f6ef33fb8d79fee1dc41492993120fed376bc02b584add56a8e27596032f02eeb9c19dd35e0813b518a7daea0ef5d1a0a1c89280d64bec84ab7f31b03b11773b12330986fa7056b7f104e3a079f332a8071faa87d2a19e0bc24594c033f2ed174dfbda0e96cc2dd95e754161854d2f973ed9f17eea5284b8f64961aa4db5f08dc3989696ea4efad2667548e0c9ba3573d1bc4f4d3bc2235bf39bc3921036e799d37d8a88cad7c8c4323ab905b13dbea268ad6233bf16762502e5e9e9ff021bc0e6aeea99c4d563fbceb4ed0df8ab8f87a5638fff0e2b7bd6839f5f5b55735519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-65-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "c87b6d4208092191a2354ae91a29211d21eda66942c65ca8538229369db22aff7d17d374ad2ab54fd8bee7dc73ee074fe49e1709999098670f3554872f3b119333028a66f87a739d2e7fec44d92f0eb3bfde6e6d2e93b9339b4e11c11b96a4fb32878e1475c5404eb69b6e5689baa495101d4cd471861dcbb11ddb762c6b3c1a5bc89390a74b5edc23fb4ea9524e4cf3a4ddcd84c872a025975d26f62fefe663df2c2bb103a6a4f956d24415697e2cfa35178c2a2e8ae97683066a0955047bca73b4f09f99c4e76f537739dd7733043f720694315117aab185299828529ed595ce4a264f44db7c75201b6fe9cd438389bcde175141f770662454d1481d4a302e83f5ca58f897eb60350b176b3fdaccafbcd5ac3b5f2fb72b7f63dc5e798167281ae7a0b9c6d438d7371f2fa89f8054bcd0ea61f3dc283f3768f17e2c0d01a525b4c168d473a8e5f6c6711a8f58eadac338ed411cbbf16848edb8c7c60318243150e46951cda2852818a4fd980d7a51324a86d1c072acc81d264e64b30462bbef0c93414a8e67e44fc5155c70590ac9db0e91db60117a51186cfdf92cf4740929ad7375d11a6b0a78ed51618108faa0a66313e502959a762ffcd00b66f37071e3b5135e4246d961f380334e692e01d1b4c2e629a85622c186117fb6f22e10ac27767d0a4a32f9f5449a9e372e5eb5fc851ee2001bbb4a7fc9260c16fe376de784b8a179ad218fed819468f90e6b43d7c7df88c4256db390ef5b2ff849daa70052a8009bfce93411ac039ffe6ba7c5472cae3eca488577dc1d261b115641bb435c977b623beec872890657ea5dcceddba7ae35399a8cb087423d57d42e3e16da8ad5f20584411cbf",
      "afbb75fc07f0bb883278040000",
    ],
    [
      "ETag",
      "VPfLXjop2nyAzEjO/LdC6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92514fc2400cc7bf4b7d1d91051cb0848729a8184084f1640c396e650eb775dedd3048f8eef626a251137db9b5ddaf5dffffdd0e9e923c021f9649fc5ca2da9ec468ee6c30455da646f3a3a05c23388046c44c8e83592f36a7a34dbc7d4d7019dfb4511671b7cb84968f9809f077b04a308d34f8f73bc84586dc26292db37c51650e986d618bb3703a185f719e5164f3f17c380cce877dd83bc7c64818b1a8f87fb43dec1d58d3728a2b54984bb4bb148ad628cdc0cad4222b52ac692a95440d155cbd88159585504435aed4bcb39aeb35bc46c373dd4eabe33298921426a19cd9f98cf7034346a4537a6195e031a0aa9005afaa73c3e524aa84d870300ebd66b5df5740a124152dfee40a5ef751f05ff8c00e0e7ce74446656e8ed4e5f036f86d1c5bfa39aa1784fd1f84366cd4110907a3fe2c0c4613cb3d1ca49f6f0dea8922f651a3b5d0ad37db672daffeeeea0559a7f93bbe51253a20055f8eebc480bf12a9c6fd1b7ee66f6d7a020000",
    ],
    [
      "ETag",
      "NASDgt/MvgyziebgJ8ecpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-66-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4e",
      "db",
      "30",
      "147e95c8131293e825b44d9b4a15abda6ccb565a4853109aa6d6714e82218983ed7462a8efbe938472111afc8ae3f35dcecd0fe4966721199280c77705c8fb4f3722204704348df1f6ba3f7553ffb6ebf1f46ffca3d5bdda8edbf47c3442042f598aa679020d250ac9400d57cb662c459153294403851a96d530ad8ed5e958a669f76d13790a9268c6b3db525deb5c0d5badbd773316224e80e65c3599489fee5bdbe3562ec50d30ad5aaf2d5be8a25aef9b9e248251cd45365a2d318142815c434a7982293c33c3e0cb6be926a7693346f09633a08c8922d3655a28c14416f1b890952a193e902acd1707b27466cec437268bd5dc3fdcd0b4246f3e1b5419ebb5045524daf8ea2d4e8d4d8e5ed75481da1897df1dcf318c8d042664b8e6e1c6181927c6783e358cd9e2d2f10e9fd02835737f3a189db9a7ae6f948d0d41699e5529f93448a04ce7b16beedb599504aa51aa0eaefb6d8b9a83b61d44419f45834e2f88da100483a0dfa39da0cdec2e74c30028f274a95eb16826321a321676033b181c8761dba451cf82c0b63a360ba3b06d23d18410689fec8ec81fc9354cb9ca85e275ebc8a5e7facedaf756f3c9d877aa32228aed99d6c99545bccc536391087aa7ae5d19e5029dca39b873dff1c613dfbd70ead1cf20a6ec7e7987c38f68a200d154d21434c8531162d3c8d962e9faee623e9e21a39ae7d91ea1c8f0d7c333c1bfcfab2eebea5b7a59ddca7f0fb8a0495121b6f5819864b73bfabfc2d2f7dcf9b7f7250e689e1fa0cc6f44e1b6d70ae47ce57857a4bef220020919fb7803105c053e7cb4fb1784587c4368a334fee3be31559a3009f5def1b4aaf2916dd9bdbe4d2ab0d46f629665ef1b5c6a948a9042a61f2baa5f50d9af2a54a8271006715de655a776ff0043342103c1040000",
    ],
    [
      "ETag",
      "h7DImTk4RimzgJ/4YvA0aQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "416f82401085ffcbf40a4929098d241ed05a3521a6d29a1e1a635618100466d95d6aa9f1bf77167bd9997dfbedbc97b9c2b96c3308e158165d8f6a7828d06c6d93a0ee6ba3b9486a3582036844c1e4eaf5247e265157752f97e8bcfc94f3fe37df4ea74ce8f4848d80f00a798975a621fcba422b1ae46f87831a273266066995f5e663b15c242c34945961b38be368162fe0b6bf3950d131c11c15b629da91525185a959dbb45a34b2465753af52d430c2e343a1a8974211b9acb841e07a811ff87ee07993e789c7604da93025b5cceede816d0c19512774e1b0600135b69c3b1fcf6f969f6ca0fd3f3a1b0cea3745ecabd15a3edeede76423198e6a548f0ea48297b12acdfd7efb0354357b7969010000",
    ],
    [
      "ETag",
      "HFhax9AqjqDwAkGWpCuzfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "642d0cb5404877f211c42f1fc1b2619218214614c12ad0e9ddebf41af5dde17d034c296bdbfc7611ec0c3e408fc748a6f2bc36cc69712446984954b70a7437e328aea85877aaee38653b5c5d86e0f6b48abdebb868d65301f9cdf1838d589092296e95aab094ceeab0b43b63ef952b8b34d131e2119f9993043e66ec7252e997dea3c790d892decf35d5944e188b03c1b9ae34d01ab4436c1036b1fdcf1af6fe46880bf1ce4b8b7713ad0bd388d8ad226999a3b8f6362d90a0d00839ded5c582fb416807bbe011baecedb0afd27b15fa6996cc55f9e5e5ff0223c0ba9a37accdf973fbbb86d008fcd5cf6f7dcd9eff4d861bd6809f5f0f46b5c819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-67-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "ab2da5b43c9a346bd3e2da6ca12b508dd96cc8300c384a1964065d63fadff732585763a29f98997bce3de73e784677accad00ca5acb86f69f3f4ed96a7e80451890b78b5fe5e5df8bba8aadcf1e47ae5fc24ba41e4623e0704eb5802efeb920e046f1b42c56c170d8b86b7356e381f40a281650f0ccbb44cd3320cd7760de0095ae61b56dd01fb46ca5acc74fda83d2c382f4a8a6b268684ef5fdff587b15e37fc961229f4f7923aa808fd73d1ef252758325ecd77111868056d12bac7ac040bff99597afa3ef590e1fdb000f003231413c2db4a76b62005e155ce8ab65159d1ec19299b6f0e28f236de32d6082fdb7d9554784f4fb40c4b9cc8a79a6a67e1d6d7d6c1d936f417f17a1b24d1f2dcf317c3e576b3f38348bb3af7424f93382da9e26a73ed54dd02b8807e46856495528fbbe74ef9a541eb8f63e908202d681f4cec91850d67e4a6796a93dc31a7693ea269eaa4f6149be988b8133ac9528a81a744150b57bcb22d33751d779c38b68593893b1a2569664c1342f09838749c39788a0e27e8b16192ae98a8b9607d87d055b88ebd240e77c172117baa841cb7a55cf5c6ba02de7a945020803ea9e9d0451907a5aeddeb20f6c2c5325e5f7afd8437b4c0e429ba8719e7b81414d0b881e649daf83c8386a160e17b2b00ab89fd3a06059afd7e465dcf3b176f5afe4a8f61809d5da9be288ac375f043d939222e71d92ac8437f403558be81dac0f5e10f206149fb2ce862e785d7a87f0a694e1b5a91afa7096015f8f25f3b2e3e6061f5414648b8c3ee10d1899086f63bc454b947b63d32c72652e0467e884d0cfbd8b52e479791",
      "ee69255f2aea171f0aedc55af10a82208c3f50dd3afc032f5d1a5678040000",
    ],
    [
      "ETag",
      "6xWQMUSnn924YD8Kc/1ctA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d926f4f83400cc6bf4b7dcb12c99439125fec9fba04a7028b8966596e47411428de1deab2ecbbdb439d464df4cdd1965f4b9f87dbc0435e25e0c32acf1e1b54ebbd0ccd950d42d44d61343f6aaa3482036844c66490c5c5e85147d75d29fae359ea96372f61767ccc849677580af03790e658241afcdb0d54a2446e93543465b56c3307ccbab6c5280ea7b353ce4b4a6c3e9b07c160184c60ebec1a1361c4b2e5ffd1b6d83a704fab1053545849b4bbd48aee519aa995a9455917d8d1d428891a5ab87d91296a6aa1883a5ce978bd8eeb75bd6ed773dd7eafef3258901426a78ad979c4fb8121238a909e5925780ca83664c1697b3e71394f5a21369cce62efa0ddef2ba050924a967f7235af7b27f82f7c60ef0e7ce744494d6576d4497031f86d1c5bfa396a3c88273f086dd8a81d124fcf27513c38bfb4dce25dfa706d505f2a621f355a0bddfd83a3c39eb7ffe6ea88acd3fc1ddfa8061d90822fc7596ec04f45a171fb0a0f398c3c7a020000",
    ],
    [
      "ETag",
      "LgTlCqsSW3ca9DNf1mZxRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-68-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5b4fdb3014fe2b96f702126d150a053a55ac836c8be88d241431845ad7394dcd9238d80e1243fcf71d3b2d0cb1b1e73dc5f1f96e3e3e7ea43f4491d02e5d88f4ae02f5f0e1562ee80e05c352dc2ddbdf57ede9d901ec15d9b8b89d4e7e2e1291f67a881096a5595e66d0d0b2521c74f7226aa64a562553523650a8d1396c789d76a7ddee78ded1c191873c0dd972208a1fc85e1953ea6eabb5f16ea652a619b052e82697f9f37eeb7eb7552a790bdce8d66bcb16bae8d6fba6c799e4cc0859f42e220c50695033c899c830c20b33597c7a2ddd142c6fa608be171c18e7b22a8c8d85125c164b9156caa9d2ee2375317f5bd0c81ff8273139195f8ce2ad39cb2d79be4d9826b399025d65867c09c743322fd16bc534e839b9fce6873e2173055caa64269239e99163d21f9d1232185ffae1d65c1b8c883a83e0ccc7d220180631b15d4d60c950f49419d4323649522f037b4d06b441d0ba87c1db9ba34fb62aa412c6a60f46b11ff64fe260ead70d1b40caf84374872d5bb24c03a299623918504399005226e3288883f1a83f4086ebc26483d0b47bfdf842881f4ab0018dfb5aafce9ef3df00a62cab1ce2be5e508f3e3dedfc5d210e867e14f7871384dda010ce408da0e7177e7845ebad1096a0a0e08ef94e271cd815fe39ca9bb9422c4e16dae0f518a18de0da9a7005ae1c8bdc9d62cd3ef0bcfd3deac0cabca9edeeefdbe757247facac3d2aa70f4a4915ba61b2bfe8a65d165160e34472ee46f155cabbf5560e5ab3d4ca8f24c999e12b51a4448bb4406d05642915595605b7b47af4dc165369954361886dbcee92e7c637495495a5540692171504d4531bc56130fabafd71fdfbf92af6237c0a865c7bdd43efc61eca1da59e93fff71837f5e5d83ca7e3918fd3f80bdccbdc245e050000",
    ],
    [
      "ETag",
      "p3Zh3VK7e4nlOnjVPzbdig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34b7282300000d0bb642d0e0216d25d502411a8543e4237991402e533ca4f043bbd7b9d5ea3be3bbc6fc09284f73d1d2e153f83573033092e93a5d568fa2e2f049f60d382757abf25d7293cad4eb128d6aa2097a351df361fc85b9d080c6d5253c30e0d6c1fc42ee5451549461e1d2ffb2ada9c1942763efb37580cebac1ceb21c701325c0d07ee387b9b636ad2f2eab6ecba6e5b737acbf6b18005c4e1a1dfe154fef21ce46da548ffac02a7ad079b6e4b8958e3ce7572a5a5646b454e7b7941ef992da702494cecdf0d2714583cc44a904fbe4ab4c0a7aaa21e58d6dc974f4fff1758003e3545c77b5a3cb6cb6b0817e0af3e1de6863ffeeb9c75bc033fbfb84a6d7b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-69-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fdb3014fd2b91f7953ed2b4e943aa4655c2a8d4a62349416c9a22dbbd0986340eb10303d4ffbe1b873210127c8aed7bce3de73ef24c6e45be2513c2447a5741f9f8ed4632724440d3145fb3bf57bda7f3a7e4e9fcf2b49b5489eb3e5cfd4aa75344889aa5e8aec8a0a564557250934dd84e4b5915b494b285895aeeb865bb8eeb38ae6d8f87631b790ab26429f25b645f6b5da849a773d06ea752a619d042a83697bbd7f7ce7daf5394f206b8569df7921d54519dcf45bf6792532d643edd8468a05250c6b0a322430bff995b76fc3e755bd05d3b45f0bde040399755ae6b5b9882cb3c1169559aac64f24c8ccd3707127a4b6f1e595c66d52e8f73ba83236b4b358df56301d669b05e590bff741dac66d162edc7e1fccc5bcddaf3f572b3f243ebf2cc0b3c4b539681e15a53ebd8dc7cbca0fe169416b9518feae75af9a5418b8f63a90928ada009c6c3ae4bed5177cc1236e4c9c819b0a40b8c8dd870401dd6e5e33ef4b70c28f28ca861d15ce68e4387bd3eedc75d3660711f38c4e311efc5f6806d81523e721923fb23f2500a0d2742155289a643e43258445e1c051b7f3e8b3c534242ab4c9f34c6ea02de7ad45820823ea9695f478544a5badd0b3ff282d93c5a5c78cd84979052fe18dee18c139a2940342db1791aca95dc62c3883f5b7927083613fb79082a32f9fd4cea9ed72edeb4fc951ee1006bbbda7c4918050bff87b173405cd0ac3290fbe6400ab47c8db5a1ebfd1f44e2923659c8f9c60bae48f314400225e4fceb6922d804befcd70e8b8f585c7d94511aefb83b5cd522bc8466878429f7c01eda83e64fd5b4d41f62ee6870e85a9da3ce083bc8f54b45cde263a18d58a55e4118c4f1fba65bfb7f8012609b78040000",
    ],
    [
      "ETag",
      "lxY2zQzfzQWF0fuf66wYZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "400cc7bf4b7d1d090b73c0121f06229200228c170d21c756c6705be7dd4d2484ef6e6f221a35d1975bdbfddaf5ffdf1de029c923f06095c4cf25cafd458cfade04535465aa153f0aca158205a845cca4aabfb6edf183934fba4eec47ad3ed6b7ddddd515132adc6026c03bc03ac13452e03d1e201719725b486999e5cb2ab340ef0b539c05d3c1b8cf794691c9c7f3e1d0ef0c7b70b4ce8d91d06259f1ff685b1c2dd8d26a8a6b949887687629246d31d403235389ac48b1a6a894212aa8e0ea452ca92c8424aa71a5e6b66bb6db701b0dd7b6dbcdb6cd604aa1d009e5ccce67bc1f68d2229dd28e5582cb80ac4216bcaece172e275125c4848371e03ad57e5f018921c968f92757f0ba1bc17fe1033b39f09d131995b93e5337c33bffb7716ce9e7a86b3fe8fd209466a3ce483018f566813f9a186e7192ded96b541349eca34263a15d775a974db7feee6a978cd3fc1d4fcb122d08055f8edb4483b716a9c2e31bc7b6b1407a020000",
    ],
    [
      "ETag",
      "s0x91NZ4nPC4gAd8Ge0jCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-70-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffd5535b4fdb3014fe2b96f70282b60450a19d2ad6956c44f44692c21042ad494e83218953dba95621fefb8e9d1686d8d8f39ee2f87c371f1f3fd1479ec7b44def78b22841ae3e3d883bba4b41b304775783a0b7f3131cb103d77afc63b977760e79b7d34104372cc5b222859a12a58c40b527413d91a22c9814a28642b5a3bd9ad33c681e1c341da775d47290a7209df779fe88ec7bad0bd56e3436def5448824055670558f44f6b2df58ee370a291e20d2aaf1d6b2812eaaf1b1e9492a22a6b9c83b930003940ae41432c6538cf0ca8cefbebc95ae7396d513042f79042c8a44996b130b252291cf79524aab4adb4fd4c6fc6d4103b7eff642d21b4d86e1d68c65863cdb264c91e954822a534dbef9a3019915e875cf14a819b93a737d9790998448c878cae319e99013d21d9e12d21f5db9fed64c698c883a7defdcc552df1b7821315d8d61ce50f49469d4d226495c2d3d734d1a9446d0ba87defb9ba3cfa6ca85e4daa4f786a1eb777ba177e9560deb43c2a255b0c096cd59aa00d14cb20c34c881880129e351e085de68d8ed23c37661bc4128dabe797a2584ab024c406dbfc6ab7968fd37804b969616b1ac16d4a1cfcfbb7f5708bd811b84ddc11861b72884335021e8c5c4f5af69b5e5c31c24e491657ed0090bb6857f8ef266ae108b938536783d9a2bcd23654c2209b61cf2cc9e62cd3eda3f6eed510b96fa5dad7578689e5f1effb1b2f628ad3e4829a46f87c9fca29bb259788e8de3f1851dc5372917ebad0c946289911f0a92311dddf33c218a27396a4b207321c9bccc2343ab46cf6e31999419e49a98c6ab3679697c9d04655108a9217e55414035b541e87bc3efdb9fd7bf5faf4337c0a7a0c98dd33e766ecda1ec51aa39f97f8f715b5d8ec9733a1aba388dbf00855188c25e050000",
    ],
    [
      "ETag",
      "yMSC+xe1o+eYtPXv0HKenA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34b7282300000d0bb642d0c0251e80e0444adc14f2a950d032122a5444a5252e8f4ee757a8dfaeef0be414608e53c15b79a32f004864cb755a26e5acb0dca6b8ae4767b80a1cff7d86beb792e06995fa6120faf9824ccdaadf448e2b1766a1677785e60d71b8fd7c06b489c5471d598591f7a33683a739fe98d2dc32b4649306df09a2391cb0417159bb91f7ad4d14444f16aaa743b084f02694ab6e426ef07cd2c9016bfb08d088d43ca143f3d48a70ccab5ab2dfaa565f2c6158bfc9923742c2f58a062b4607cb3c83b3daf4e441993f3e9d27b7a63c0b7cf598dd58787ff0b4c00fd6aab8ef2b4ba6f37a06d4fc05ffd540c2dbdff7769d6d10efcfc0281172e4d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-71-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f738da26a46dda4ad5a84a1885368534854dd31439ee4d6a48e2103b9d18ea7fdf8d431908099e62fb9e73cfb91f7922f73cdf90118978f25041f9f8e54e44e48880a209be5e5cfcd82ef9d7cbabe0ef3673b93cdf0137afc76344f09a256956a4d092a22a19c8d17ad54e4a5115b414a285895a8ed5b2fa76dfb6fb9635748616f224a4f19ce7f7c8de2a55c851a773d06e27422429d082cb3613d9cb7b6777dc294a71074cc9ce5bc90eaac8cec7a2df52c1a8e2221faf5768a092508690519ea285ffcc4d74f236759bd3ac9d2078c71950c64495abda16a660228f7952953a2b193d116df3d581acdcb93b0d0c26d22acbc39c6670646ca8a2a17a2cc038f3970b63e69d2dfdc524982dbd70353d771793f674395f2fbc95717beefaaea1689482e61a63e344df3cbca0fe06a4e2b9560feae75af9b941b3f763a909282da109868ed9a7d6c01c4671e4b07860f7a2d884281a444e8fda91c9865de86e22a0c8d3a29a4573915b43db1a583d2b346d07c26e6c3961d43ba621b5c1a4fd188e81f5c8fe88fc29b982532e0b2179d32172ebcf02370cfcb5379d04ae2e21a655aa4e1b637501af3d2a2c10411fd4b4afa35ca052ddee9917b8fe641acc6edc66c27348287b5c3de08c639a4a40342db1790aca85d860c3883759b8a708d613bb3a042519fd7a2275cf6b17af5afe420f7080b55da5bf6415f833efbbb67340dcd0b4d2905d7320055ade626de87aff1b91b8a44d1672bd76fd9fa479f221861272f6f93411ac039ffe6b87c5472cae3eca488577dc1d266b115642b3435c977b603bb66d9944834bf52ed6357b87aed539ea8c9041ae9e2b6a161f0b6d",
      "c42af902c2208edfd3dddaff031604a90378040000",
    ],
    [
      "ETag",
      "JJXhOi+KPTzhmEisHvei0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92514fc2400cc7bf4b7d1d91890e58c2c35084258038e69321e4dcca9c6cebbcbb2184f0dded4d45a326fa726bbb5fbbfeffbb3dacd32206171ed2e4b942b93b4950df9a204055655af1a3a4422158805a244cae47723d0ce4e9e6a273b60d27d7986e517bbd1e132a7ac45c80bb87558a59acc0bddf432172e4b688b22a2f96756681de95a6380f037f3ae43ca7d8e4d3bbf1d8eb8f0770b08e8db1d06259f3ff685b1c2c78a287005728b188d0ec524a7ac248fb46a612799961435125235450c3f58b4452550a49d4e04aa36d376ca7e5b45a8e6d77db5d9bc18c22a1532a98bd9bf37ea0498b2ca01756090e03b20e59f0aa3e375c4ee35a8809fd69e89cd7fb7d05244624e3e59f5cc9eb3e0afe0b1fd8bb03df39915355e823753dbef17e1bc7967e8ebaf2c2c10f426936ea8884fe64300fbdc9cc708b77e9fd9d463593c43e2a3416dacdf3ce45db69beb97a49c669fe8eab65851644822fc728d5e0ae44a6f0f00ac005fea27a020000",
    ],
    [
      "ETag",
      "kHrkGRr/v582xTMFeixetA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-72-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "27c426b50da5a51d952ad6d1b045a42d4b53189b50e326b7c190c4c5769010e2bfefda69f9101b3cee29b6efb9e71c1fdfdcd36b5e24b447173cbd2941de7db8120b5aa3a0598aa7839fa7c7c9b769539d254b7767b897edef747fa5fd3e22b8e9522c5f655057a29431a8de6cda48a528574c0a5147a27a77b7deecb43aad56a7d9dcefee37b14f41b6f479718ddd975aaf54cf7136da8d54883403b6e2aa118bfcf1dcb9dd7556525c41ac95f352d24115e5bc2d7a908998692e8afe6c8a064a05720e39e3195a78ea4c165f5e523738cb1b29826f790c2c8e455968630b2962512c795a4acb4a7bf7d4da7cb6a053d7770f437238998dc38f11cb4d73f4893045e67309aacc34390a262312ad50eb9229501139fbee062e21918458c864ce9388f4c901198c8784f89333377846e47bc72ed67c6fe485c4c49ac09221eb906924d3c64a522d3df34e1a9446d03a44eff5d3d10753e542726dec7be3d00d0687a177ea5689f990b2f86e7a83992d59a600d14cb21c34c89148005b4e26532ff426e3818f1d3686930d42d1deeffba786f06e05c6a0b65fa3d5695bfd0de09465a545dc560bdaa40f0fb57f331cf993c1bb1c5bcdc65e7b0b892e1086635271d01f333738a7d551004b9050c4b6ef8dac2cd816de9df6cde82116870f6594c6bdd23c5646249660cb21cfed3dd7dddd76abfd995ab0d4af6b9d1df38716c95f2b6b8dd2f28394420676decc16d594f5c20b8c05ffe01acd4129961a9a59813751c0161910fb7ee4314c12458417c4c44da2f0fcc49daf238f6ae42b4b48224ad365a3ee912ae9cd6ebbda6e1b63d64e350dffd7ca451592d11a4ec62e4ec51f24cdbb8c",
      "09050000",
    ],
    [
      "ETag",
      "AXVKdGS1sWdfE0D5l907Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "6e82300000e0bbf4590d2b3fdabd09689906508ba0bc340d56406281020e30bbfbccae31bf3b7c4fc09284370d6dcb820bf0090606d12c996dab85b94ef34c2a7e5f2c6ed629d66fd36b3d0d36fdbd3379c9347e8099d37d97c45c9bbe5c296da024e1484683ad7c72452d4b0dd929eab14e89cf61e9681772d13ce98e3a84a80deee5039e0e76e3d9b8d989c08bd0b0d33035fc88aef11c3dc4f268aa6ecc6a6df48c3a5e9c91b8a2cbde3de362a52343d8a1e630a2f2560a5c9de8ddc28f2cdf4761f165895eaf2cc5de7ca4f325d525842924e17e3b7838ce676f6fff179800de57b9e40dcd5fdb551da109f8ab4fdba1e2afff2667924bf0f30be3a5bc8a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-73-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2bc8fbb8e655921022456b96d23552425620eda66942c6b950b7800936d9a22aff7d17d364ad2ab59fb07dcfb9e7dc074fe491e71b3226114fb61594fb4f0f22226704144df0f5aba51e607ba37a726ffeddfd30edcfe7239e4c2688e0354bd2ac48a12545553290e3b5df4e4a5115b414a285895a96d9ea0dcda1690e7b3ddbb27bc89390c60b9e3f22fb5ea9428e3b9da3763b11224981165cb699c84eef9ddd79a728c50330253baf253ba8223bef8b7e4905a38a8b7cb2f6d14025a10c21a33c450bff999be8e275ea36a7593b41f08e33a08c892a57b52d4cc1441ef3a42a7556327e22dae68b03f19d85330b0c26d22acbc39c6670666ca8a2a1da17605c79aba53177af56de721acc576ee8cfae9de5b43d5b2dd64bd737eeae1dcf31148d52d05c63625ce89b8b17d4df80543cd7ea41fd5c2b3f3768fe762c3501a52534c1d0ea0e696fd4b5a338b2583c320751dc85281a45d6809a5197d97de86f22a0c8d3a29a4573910f46963dec0184b4cbe2b03f8807a14da3388c6d80610c98d78ec9e18cfc29b9824b2e0b2179d32172e7cd03270cbcb53b9b068e2e21a655aa2e1b6375012f3d2a2c1041efd474a8a35ca052ddeeb91b38de7416cc6f9d66c20b4828dbfb5b9c714c530988a625364f41b9141b6c1871a74be712c17a62df8f4149c6bf9e48ddf3dac58b969fe8010eb0b6abf497f8813777bf693b47c42d4d2b0dd9350752a0e57bac0d5d1f7e231297b4c9426ed68ef793344f1ec45042ce3e9e268275e0c37fedb8f888c5d54719a9f08ebbc3642dc24a687688eb728f6cab3fb46ca2c1a57a13b374ecb4f07546c82057cf15358b8f853662953c813088e37775b70eff000db5073a78040000",
    ],
    [
      "ETag",
      "B7tjeqQt1sy3xvX39+28ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f83400cc7bf4b7d658984c91cc91e704e45d99c1b8b0fc62c2794c904caee0ecd5cf6ddede19c464df4e568cbafa5ff3fb781a7ac4cc083876cb1aa51ae0f16a86f4c304155e75af1a3a2522158805a2c98bcecba5aa617a7c3d96bdff16ffb5745b6baf17b3d2654fc8885006f03698679a2c0bbdb40290ae4b698f2ba28e74d66815e57a6388d26c1e89cf38212938f6661e89f8403d85afbc64468316ff87fb4dd6f2d58d2c304539458c66876a9242d31d68191a94451e5d85254cb18153470f36221a9ae84246a71a5d5715ab6ebb88ee3da76b7d3b519cc29163aa392d9d994f7034d5ae4137a6195e032209b9005a7cdf9cce52c6984983018456ebbd9ef2b20312699ccffe42a5ef751f05ff8c0760e7ce7444175a9f7d45978edff368e2dfd1c75ea47831f84d26cd41e8982e1601af9c3b1e1ee77d24fd61ad55812fba8d058681fb68f8f3aeee1bbab7d324ef3773c2d6bb420167c392e320d5e2a7285db3759e606347a020000",
    ],
    [
      "ETag",
      "J96trfHDMUzC3AWCKmiqQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-74-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc553d14edb3014fd15cb130244db10286554aa188320a28586a529084da87193db6048e2603b4c08f1efbb76280c31b1873dec29b6ef39f71c1fdf3cd25b5e657448e73cbf6b403e7cba1173daa1a0598ea7a26205bbd9c884bb116fe427d36b6f6b53fe1c8d10c10d4bb1b22ea0ab44235350c3e9a4974bd1d44c0ad1c546dddd7ed71d6c0fb6b707aebbb7bbe7224f41b10878758bec6bad6b35749ca5762f17222f80d55cf55251be9c3bf75b4e2dc50da45a396f251d5451cec7a2fb854899e6a21a4d2768a051206750325ea085576636fff2b6758fb3b29723f89ea7c0d254349536b6b0452aaa05cf1b69bbd2e123b5367f5bd08917788731390ca7e3782d61a52127eb8429329b49504da1c971149e92a446ad6ba64025e4e2c48b3c421209a990d98c670919917d72303e2224082fbc682dc1b375320e6312f8df3cac05fea91f13136b060b865d8f98c666da58c9daa56fde4983d2087a0ed17fff74f4c954b9905c1bfbfe38f6a283c3d83ff7dac402c859fa30b9c3cc16ac5080682659091ae4a9c8002967e1c48ffd707c1020c3c670b644283afcf1f84a881f6a3006b5fd1aad41dfea2f01e7ac682ce2be5d50973e3d75fea9c38abbb3824dae108423d2f2e9f7a9175dd2f628820548a852cbfa20270bb685bf4efa72ec108b8387324ae35e699e2a23924ab0e59897f68ecfecdd9dfee701b560a9dfd57636fbe6efacb23f569e351adb1fa41432b2b366b6a8a6ac175e6128f8f77668094ab1dcb499567813056c5e00b16f475ea224494278454cd424892fcfbc998d3be990af2cc38a1ef4894d79484cc8cbf5aad9ac1a47d6473b02ffc9c3551b8b11390ac71ecec12f6b7e2666f7040000",
    ],
    [
      "ETag",
      "onalaj+do1+T+gHUhE20rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "dd",
      "6e",
      "82",
      "30",
      "18",
      "00",
      "d0",
      "77",
      "e9",
      "b531a02583dd4126a851d1399172d3d4faa950299556f959f6ee337b8d79dee17c23c639684d4d2540a277d4b19137e4c383e5a70fabff5a3f9c8ae23468a12436ee39b98c2f9bd95514acc2eb549671a6ecbba45858a3d3ea443404b6881ebc381ad75de0ba33227343a5f7cb8343832ed6566422325e7ef62ae025df9fedebc294320eb745928023179593cd679bddf1cd97b746f1ebdaa9d4c19f295679ca7c9d294956169d73194e5acc70ae265b31ddf7d34634763865a4389efdfbf266dd3ea270e7f96612d11ac83cd3ee266e01dbbacd75c22095cdf0e5e5df410304adca6bd0347f6e1f3b9e37407ff5a9e9143cff07c06aa8d1cf2fc7a9c87919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-75-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "c8fbd82684268110295a514257b4846c84b47b6842b631d42dc1149b565d95ffbe8b69ba5695da4fd8bee7dc73ee834774c3cb144d11e1f96dc3ea874fd782a063c414cee1d5faebd1ed72f1d5cbd4e0e868e92f7e04bfd4fd6c0608deb224de5505eb49d1d494c9e976d3cf6bd154b816a207897aceb867d9437b38b42dcb755c0b789215d9929737c0be52aa9253d33c68f77321f282e18acb3e15bbe777f3eec4ac6a71cda892e66b491354a4f9bee8e74250acb82867db0d186824ab13b6c3bc000bff9929397d9dbacff1ae9f03f88e538629154da95a5b90828a32e37953ebac68fa88b4cd1707b4f197fe3c36a8289a5d999478c78e8d142b9ca8878a1967d17a6504e1d93a5a7971b00e93cdfcdc5f79fdf97ab95d851be3f2dc8f7c43615230cd3566c6a9be857001fd9449c54bad1eb7cfadf2538382b7636909202d59174c9c818dadc9c02519716836198e493660844c8833c64332a0ee888d52c230f0b4a866e15294a3139292cc2289ebd89364349a8c12f7c47692516a0d898d6d3aa118ed8fd17dcd155b705909c9bb0ea1cb2888fd248eb6e1dc8b7d5d42869b422d3a636d012f3d2a281040efd4b46fa35c8052dbee208cfdc89bc7c185df4d78c9724c1f36b730e30c1792011ad7d03cc5ea9548a16128f456fe02c07a62df0e4189a6bf1f51dbf3d6c58b963fd36318606b57e92fdac451107ed1760e880b5c341a72d71d500596afa03670bdff034858d22e0bfabef5a39fa87b8a58c66a56d28fa709601df8f05f3b2c3e6061f541462ab8c3ee50d98ad09a753bc475b907b6339e0c1ca4c1b57a1373adf1a16b6d8e3623dbb1523d55d42d3e14da8935f2190441187fa8",
      "bbb5ff07b10cbbbd78040000",
    ],
    [
      "ETag",
      "1zAcULDKAft0++LEDXIZtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614fc2400c86ff4bfd3a121664e8123f4c455d321161468d21e4d83a98dcd679771309e1bfdb9b8a464df4cbaded9e767ddfdd06967999820fb37cfe54a35aefcdd15cdb6084ba9646f3a3a25223388046cc99cc5e863297f7cb205bc577b7e416e5b27bbd3a3a6242270b2c04f81bc87294a906ff6103a52890db129275514e9bcc01b3ae6c711c8fc2c139e705a5361fdc4451701cf561ebec1a5361c4b4e1ffd136d93af048b31166a8b04cd0ee52297ac4c48456a6164525b1a5a956096a68e0e6c55c515d0945d4e24aabd76db95ec7eb743cd73dec1dba0c4a4a84c9a964f666ccfb812123e48856ac123c065413b2e0ac399fb99ca78d101b8683d8db6ff6fb0a284c48a5d33fb98ad75d08fe0b1fd8bb03df3951505d9a1d75165d05bf8d634b3f479d0671ff07a10d1bb543e2f0b23f8e83cba1e526efd28fd706f55011fba8d15ae8b6f70fba3daffde6ea0959a7f93bbe51353a9008be1c17b9013f1352e3f6152fdb8b327a020000",
    ],
    [
      "ETag",
      "fxPlilYkAfwTXWo1mnk5Qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-76-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6f",
      "9a",
      "5014ff2ae42e4dbac4078e8a62623aa37423b3d821da2ccba21738d0db2117efbdd8d8c6efbe03d43ed2acfd4bbce7f738cf07f297651119908025db02c4fed32d0f488380a209beee2fa64b76d3df2e333abeb7dcdd76743f89ee864344b09225e9264fa1297921429083c5bc95085ee45470de44a166cf6c764cc3340cb3d3b17a56077912d278cab2bfc8be512a978376fbe8dd4a384f52a03993ad906f9ededbbb2fed5cf05b08956cbfb66ca38b6cbf6f7a9ef2902ac6b3e1628e091412c40a3694a598c233330abebe966e31ba692508deb1106818f22253655a2811f22c6649212a55327820559a2f3ec8dc9eda635f1bcf16ae7fbaa69b92bcfeac51a9ad560264912aedc29b5d6aeb1cbd6ea804b9d6aebfdb9ead696b012117d18a456b6da89d6b2377a269d3d9b5ed9d3ea151ca9df9dad4f9612362ea5c3abe56363702a95856a5e5d3208532a5c7ce396fe75512a842b93ab8eae926edf4752b88835e18f78d6e10eb1004fda0d7a546a087d6199c450150e4a952bd62d18c67baa51b5664183dcbb27a3aedf7696cea16e87127b0c0c2510005da8d283934c89d600a264ce65cb2ba7de4da737c7be57b0b773cf2edaa8c98628b26757265112ff354582482dea9eb50461947a772168eebdbde68ec3b4bbb1eff14121aeee75b5c8098a612104d05dd800271c9236c1ab99acd1ddf99b9a32932aa995e1d11920c7e3f3c13fc7d5e755955bfa5977956f91f014b9a161562577f900e391c1aff5798fb9ee37e7b5fe2840b9a9da0ce1f84e1cad712e4e7c2f67e91fac983180464e1c72b80e02af0e1e51ecf08b17848682315fec7850b6569120aa8178f6daa321fd93db36beaa4020bf5266662b71acfe7532ac20632f558517d4665c3aa50219f4018c47d71ab561dfe0195d3b6e0c6040000",
    ],
    [
      "ETag",
      "yFLVih8qVnaCz9NvqAzDdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "30",
      "1086ffcbf95188120ccb48f6c12dc42dc1a9e8628c5996ae1c08030edba241c27fdf95f9a5777dfbf4de3737c0a9685208e158e4df1daafe2a47f3629b04755719cda5a54623388046e44c0a71f34ef4e78bacd4f5f553f3b85a9f3ef2c582092dbfb016100e901558a51ac2cf011a51237f3b1cd4349131d3b756d96cdfa2872861a1a6d40adb5d1cdf2fe308c6fde84049c7043354d848b4235b45254ab3b169b5a8db0a5d4d9d92a86182a7875c51d70a45e4b2e2ce02d70bfcc0f703cf9bcfe61e831549610a6a98ddbd02db1832a24ae897c38205d4d472ee6c3a7f58beb381f6ffe8b237a89f15b1af466b797bb15f918d6438aa511d3a20052f635d98cb7d3c031a2f9e9569010000",
    ],
    [
      "ETag",
      "aa/Wooz3afjsm+OnMCHkYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d34b7282300000d0bb642d4cf8da74272d415144a9b6c22683247c1a3e69402cedf4ee757a8dfaeef0be419a65acefc9d071d6824730a53a5233752d1e1c5c141a26759b97b5c53885b0e9d885b498e4456b0878917e57d5d07ec2e7dcd5ac6521953669f493ef7f74760af5b533451e81c85fd981f98af7755ba2d3170e4de78cf9a1eabc98466eeabe8bf479d0a81817737cdcc44934d4329cb27155783abf44718fcc7e2ef22adfb9b079db6ab667841249996de891eb594da65804342997d772e0a1de1462fba28cd6ae539c801f924512b97e43e9351f430fedd4bbbbff0bcc00fb1495643da96edb0d0ba119f8ab4f8649b0db7f87a59249f0f30b8f5cbbdf19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-77-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6d4268522091a2354be81a2d211b21ada66942c65ca853c0149b6e5595ffbe8b69ba5695da276cdf73ee39f7834772cbcb844c48ccb3bb06ea874f7b119313028a66f8eae6dfeaf197c2ddcf17e14cfdddab7cf14dcda65344f096256951e5d093a2a919c8c96edbcf6ad154b416a287897a8ed3b3eca13d1cda963576c616f224e4e98a97b7c8be51aa9213d33c6af73321b21c68c5659f89e2f9ddbc3f35ab5aec812969be963451459aef8b7ece05a38a8b72badba28146421d4141798e16fe3393f8fc75ea3ea7453f43f03d674019134da95a5b98828932e55953ebac64f248b4cd1707b2f556de3c3498c89ba28c4a5ac08991504523f5508171116cd6c6d2bfd804eb59b8dcf8d1767ee9ad67fdf966b55bfb5be3fad20b3c43d13807cd35a6c6b9bef97841fd04a4e2a5560fdbe756f9a941cbb7636909282da10b46cec0a6963b18c769ecb0d41d9ec5e900e2d88d9d333a8c076c3c82511203459e16d52c5a8a32b69c519cda56c4a86347a3c4a1d1387120a2d86beb3471ce92d3941c4ec89f9a2b58705909c9bb0e91eb60197a5118ecfcf92cf47409296d72b5e88cb505bcf4a8b04004bd53d3a18d72814a6dbb977ee805b379b8bcf2ba09af20a3ec617b87334e692e01d1b4c6e629a8d722c186117fb6f61608d613fb7e0c4a32f9f548da9eb72e5eb4fc991ee2005bbb4a7fc9360c96fe576de788b8a279a321f7dd815468f9066b43d787df88c425edb2901f3b2ff849baa70052a8a1641f4f13c13af0e1bf765c7cc4e2eaa38c5478c7dd61b2156135743bc475b947b6e358ae4b34b8566f62c3817dec5a9ba3cd080594eaa9a26ef1b1d04eac91cf200ce2f87dddadc33f5f01decc78040000",
    ],
    [
      "ETag",
      "8lKr9Bm8jCDTAtxjtlDKtA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614f83400c86ff4bfd284b8653a6247e409d73094e65ccc418b39c50187a50bc3bd465d97fb787731a35d12f475b9e96be2fb784c7a24ac187fb227f6a502db672345736885037d2687ed454690407d0889cc9f155775f6e3f65451dc9d7201cde04d78f3bf9e121133a996329c05f4256a04c35f8b74ba84489dc96906cca6ad6660e98456d8b93381a8d879c9794da7c3c0dc3e0281cc0cad934a6c28859cbffa3ed6ee5c003dd4798a1c22a41bb4bade8011333b232b5286b891d4d8d4a50430bb72f72454d2d1451872b9d7ebfe37a3dafd7f35cf7a07fe032282911a6a08ad9e984f7034346c8885e5825780ca83664c1597b3e73b9485b21361c8d636fb7ddef2ba0302195cefee46a5e772ef82f7c606b07be73a2a4a6321bea34bc087e1bc7967e8e3a09e2c10f421b366a83c4a3f3c1240ece2f2d77b7967eb430a82f15b18f1aad856e77777fafef75df5d3d26eb347fc737aa410712c197e3ac30e067426a5cbd01282d77e37a020000",
    ],
    [
      "ETag",
      "NQ08l+qfipRlxALGYAVk2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-78-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85537d4f9b4018ff2ae41613176d0bd61668d2b8a6b28dac52a554b72c4b7bc0433d050eef8ebac6f4bbef01ac2f5ba67f71dcf37b79deee81dcb23c260312b2d55d0962f3e18687e49080a22bbcdd58bfd7ebf1985db2f303b636bcefe5c5f4e07e384404ab589266450a2dc94b11811ccc67ed95e0654105e72d146a9956cbe877fbdd6edf306cd3369027214d262cbf45f6b552851c743a3beff68af3550ab460b21df1ece9beb33eea1482df40a464e7b565075d64e76dd393944754319e0fe7334ca0942016905196620acfcc38fcf45abacd68d65e2178cd22a051c4cb5c5569a144c4f384ad4a51ab92c103a9d37c71203367e28c036d3c9d7bc1fe92661579f951a3525b2c04c83255da677f7aa62d0bf4baa612e452bbfaeaf88ea62d05445cc40b162fb5a176a28dbc534d9b4caf1c7fff098d52de34d026ee37071113f7cc0db4aab93148c5f23aad80862954293d76cefd775e15812a946b820b53ef53c3d2ed3009cd28b1babd30d1210cadd0ecd16ea847f6311cc72150e4a94abd66d19ce7baad77edb8db356ddb36756a5934e9eb36e88911da60e3288002edc5946c0fc9bd600a4e992cb8644dfbc895ef06ce22f0e7de781438751909c5169d36c95545bccc536191087aa3ae6d15651c9daa59b85ee0f8a371e05e3acdf827b0a2d16676870b90d05402a2a9a0192810673cc6a691f3e9cc0ddca9379a20a39ee9f90e21c9e0e7c33321d814759755fdadbcfac7b5ff0e7049d3b246ac9b0331c8767bf87f8559e0bbde97b725f6b8a0f91eeafc4218ae7c23412ee68eff8334573e2420208fde5f0104d781775feeee1921161f12da4885ffb87091ac4c2201cde2b1ac2ef3916d9af6518fd460a1fe8e59badedf75b8d2a81421835c3d56d43ca3aa6175a8944f200ce2be7875abb67f00ed420970c6040000",
    ],
    [
      "ETag",
      "y8xvvCCiViP+iv1NXuQO+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83301086ffcbf9159211141cc93e38256e3a1787dba231cbd2950399c0615b5cc8c27ff7cafcd2bbbe7d7aef9b3bc37751a710c1a1c87f5a54dd558e66659b04755b1acda5a15a23388046e44cae5e6eded37531ebb6db271c7d2c1f9ef3707c9a4c98d0f20b2b01d119b202cb5443f479865a54c8dff67b354c64cc748d55e6cb75fc18272c54945a61b9592ceea68b18fa5defc0910e0966a8b0966847368a8e28cddca6d5a26a4a7435b54aa286011e1e72456d231491cb8a1bdeba5ee007be1f78de381c7b0c96248529a86676f3066c63c88832a11387050ba8a1e5dcd970feb27c6d03edfed1696750bf2a625f8dd67274b1bf271bc97054a35a74400a5ec6ac30977bff07661e128469010000",
    ],
    [
      "ETag",
      "QM5XdTiHyVVJe0YNDKg79w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ffedd3dd9642400000e07799ebea20c4de454b66b0e98f71e33086fc5442fef6ecbb6f675f63fbdee1fb062121b46982f65ed01bf80063c8c90bb24095a468697ec3514213d656517b1133e968153107a164c573f5939598609f873cc3f952545849f1657865c71b3e8e06c1dd466369e013a130561041a37ec7643d69d07ec6fda5c6c7302fb5dd7580fe913ac670305c9b98573b7a9e7a25e6c4b5be719ef27dcec40875abbceb193df31e41dba0892d794d84ad97fa420dcf89ea3e682ada8d55794bb7317a3c4da69832ea649bbbf1b0f143b26aabb3c20bb9a3ccf176f1f6f67f8119a04395d5b409b2d7f6a520cb33f0573f68c78abefe2b34ac690d7e7e01e418f32319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-79-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbda843012f290a2354ae81a2d212b9076d33421dbb9507704536cda5555fefb2ea6e95a556a3f61fb9e73cfb90f1ec91f51ecc8843091ddd6503d7cba918c9c10d034c357e776fdad7f71bf98bbcc9e87d77f59b419feb89f4e11211a96a2fb32878e9275c5414db65137ab645dd24aca0e26ea0cc71dc7733dd7f51c673c1c3bc85390a72b51fc41f6b5d6a59ad8f651bb9b4999e5404ba1ba5cee9fdfedbbcf7659c91be05ad9af256d5451f6fba25f72c9a916b2986e2334502ba812d85391a385ffcc1d3b7d9dba2be8be9b21f84e70a09ccbbad08d2d4cc165918aacae4c56327924c6e68b0389fc953f8f2d2ef37a5f2405ddc389b5a39a26faa104eb2cdcacad6570b609d7b378b90992687eeeaf67ddf966b55d07917575ee87bea529cbc170ada9756a6e015e507f074a8bc2a8c7cd73a3fcd4a0e5dbb134049456d0069361cfa3cea83766291bf274e40e58da03c6466c38a02eebf1711ffa3b06147946d4b068210b670c74c47a6ee22035e97bbb5132eebb2ce9a50370d880b33ef5c8e184dc5742c342a8522ad176885c85cbd84fe2701bcc67b16f4a48699deb456bac29e0a5478d0522e89d9a0e4d5448546adabd0c623f9ccde3e5a5df4e780519e50fd12dce38a5b90244d30a9ba7a15acb1d368c04b3b5bf40b099d8f7635091c9af47d2f4bc71f1a2e5cff41807d8d8d5e64ba2385c065f8d9d23e292e6b581dcb50752a2e56bac0d5d1f7e231297b4cd422eb67ef893b44f21a45041c13f9e26824de0c37fedb8f888c5d54719a5f18ebbc35523c22b68774898728fece168e078c4802bfd26e6398363d79a1c4d46d843a19f2a6a171f0b6dc56af50cc2208e3f30dd3afc032a2bf81f78040000",
    ],
    [
      "ETag",
      "1qMK4QwDC3b/CRhxbSO7Xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92516f82400cc7bf4bf78a8944c549e2036e3a4dd429e2c3b2187342551428bb3b5c8cf1bbafc79c5bb625dbcbd1965f4bff7fee04fb388bc08555bc7929501e6f36a8a726f051158956fcc829530816a0161b26c319eefdbc973546dd71bf57ef3f6172d84edb6d2654b8c554807b82758c49a4c07d3e412652346d941469b62c330bf43137c559e00fc60f9ca714997c3c1f0ebdceb00b67ebda18092d9625ff8fb6c5d9821dad7c5ca3c42c44b34b2e6987a11e18994aa479821545850c514109972f36928a5c48a20a572acd56c5766a4eade6d876abd9b2194c28143aa68cd9f98cf7034d5a243ebdb24a70189065c882d7e579e0721c95424c3818074ebddcef2b203124192dffe4725e772bf82f7c601707be7322a522d357aa377cf47e1bc7967e8ebaf782ee0f426936ea8a048351771678a389e11617e99da3463591c43e2a3416dad5fa6da3e954df5dbd23e3347fc7d5b2400b42c197a31f6b70d72251787e03394cb5f97a020000",
    ],
    [
      "ETag",
      "cSekRpFn5MENHF4HYelvhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-80-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffd5535d4fdb3014fd2b56f602126d08dd0a64aa5847c396511248521043a835c94df048e2603b4c0cf1df77edb463888d3def29b6eff9b8be3e79b06e589d59ae75c58adb16c4fd9b6ffccadab040d1024fed1f6133c907879b5f0fbef8e362381e3893f0fb688408a65992564d093dc95b9182746771bf10bc6da8e0bc8742bd9dcd9e331c0c0783a1e3ec6eef3ac89350e65356df20fb5aa946bab6bdf2ee179c1725d086c97ecaab5fe7f6dd96dd08fe0d5225ede79636ba48fb75d3bd92a754315e8f663136d04a1073a8282bb185276676f5e1b9749fd1aa5f20f88ea540d394b7b5d26da144caeb9c15ad30aa96fb6099367f5b58b137f5f613b21fce82646d412b4d5eac132ac97c2e40b6a52207517844160d7a5d53097241ce3e7b9147c84240ca453667d9828cc81e19071342a6e19917ad2d32aa006582302153ffd0c3ead43ff213a2079b414e51774215ca29dd4cd62d7dfd520aa442d0728cfecbc7b31e759571c194be801f245e34de4ffc53af9bd9140a9adec7b738b59c9612104d05ad408138e21920e5388cfdc40f83f114196610c72b84b4dc8b87274272df806e5099aff61abe35fe2bc0292d5b83b8eb1696633d3e6efc5d61324e3c445ca20626a02b5a27332f3ab7baa308721050a786f4ca100cd814fe19e455aa108bb9421ba9702f154ba53649059872c22a7381257b7b776bf8ce3260a15ed4069bba0675f6c7cad2a335fa200417918992dea29b34bdb01a67c6b21313c4675dde2e8f2a9092165a3ee0a4a22abd667541242b6ad41640722e48ded6a9a675c1334754146d05b5227ae6d2257ae67d12b74dc38582ec49006b5d5ce324f2834febef97db8fe78917e33fa0c885e3ee3897fa3ee6165d3afecb1b5c764f623218063a833f010dcbcf1252050000",
    ],
    [
      "ETag",
      "/zOpDf3K0ZFJIAg6A31DOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0002ffedd34b7282300000d0bb646d1d1510d29d31580a969f4249364cc4c8489046100d767af73abd467d7778df801505efbafcf22578035ec1c066705c8c3d69a15559de0711f6d4631806abecae9dcbbdbfd22a83850ec7d79d903e0d55d947f686c6cbf57c71f07aa1889bf855cf3d240e466cd583692a1d3b3ab149a2a6e9c6a96f708ddc8e6116c9a0bf0fa76c6fc6370b7e9edb49bd4b037530d3facae678065f744b6c6d9fc6efdad60fdf48899206f156e14a69bb40469782222f6526f9d884bc11c974beccbb4536b81346714b0c9ac8e53acb9de6444ce556a83c8d9f9efe2f30025cc963cbbbfcf8d8ae19108ec05ffdfc3248fef88f386b790b7e7e014458293319040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-81-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6f9b3014fd2b91f7b8268426242452b466095d3325a403d26a9a2664cc85ba054cb1495555f9efbb98a66b55a97dc2f63de79e733f782277bc88c994443cbdafa17afc722b22724240d1145fbf1ac3fe72b9839fb94f2fafbfefcfd3dc771f663344f08625695e66d095a2ae18c8e9ceefa595a84b5a09d1c5445ddbec9aa3c168301899e6643c319127214bd6bcb843f68d52a59c1ac651bb970a9166404b2e7b4ce42fefc6fed4282b710b4c49e3ada4812ad2f858f45b2618555c14b39d8f066a09550839e5195af8cf8ca3b3b7a97b9ce6bd14c17bce803226ea4235b630051345c2d3bad259c9f489689baf0ec477d6ce22e83091d57911163487934e4c150dd563099d736fbbe9acdcf3adb79907abad1bfa8b0b6733ef2db6ebddc6f53bd7178ee774148d32d0dcceac73a66f2e5e503f06a978a1d583e6b9517e6ed0eafd581a024a4b6883e1b83fa2a6dd9f44493466893db0a2a40f516447638b0ea23e9b0c6118474091a745358b16a280d88c231659e1a96ddbe1d08a2621358766c8cc044c6b4c81d97d7238210f1557b0e4b21492b71d22d7de2a70c2c0dbb98b79e0e812125a676ad91a6b0a78ed51618108faa0a64313e502959a76afdcc0f1e68b6075e5b4135e434ad9a37f8f334e682601d1b4c2e629a83622c6861177be719608d613bb3c062599fe79224dcf1b17af5afe420f70808d5da5bfc40fbc95fb43db3922ae68566bc8be3d90122ddf606de8faf01791b8a46d16f26be778bf49fbe441021514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c81e4f46d629d1e04abd8b8d2debd8b5264793117228d47345ede263a1ad582d5f4018c4f1bbba5b877f6a926e0e78040000",
    ],
    [
      "ETag",
      "+/40DDUeJmSaPWBvFgmSNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92514fc2400cc7bf4b7d1d090b3070890f5311d1893ae69321e4bc7530dcd679775391f0dded4d45a326fa726bbb5fbbfeffbb0ddc6765023edc658b871ad57a6f81e6da0611ea3a379a1f15951ac1013462c164f72c7de9f78ecf4321cf9ff3d151345c3d5c0707074c68b9c44280bf8134c33cd1e0df6ea01405729ba4bc2eca79933960d6952d4ee3683c19715e5062f3c94d180687e110b6ceae311146cc1bfe1f6db3ad032bba8b304585a544bb4ba56885d28cad4c2d8a2ac796a65a49d4d0c0cd8b85a2ba128aa8c595d6c06db95ec7eb743cd7ddefefbb0ce62485c9a864f666cafb812123f2889e5825780ca82664c169733e72394b1a21361c4f62afdbecf71550284925f33fb98ad75d0afe0b1fd8bb03df3951505d9a1d75125e06bf8d634b3f471d07f1f007a10d1bb543e2f1c5701a071757969bbd4b3f5c1bd4578ad8478dd642b7dd1df4fa5efbcdd523b24ef3777ca36a74400abe1ca799013f15b9c6ed2b5f94c65a7a020000",
    ],
    [
      "ETag",
      "4Jfz75DKLacKxlGCREjqQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-82-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ffd5535f4fdb3010ff2a56f602126d698b3ae854b1ae642c5a9ad224054d08b5ae730986240eb6c38410df7d67a7852136f6bca73877bf3f77e7f3a373cbcbc4193a6b9eddd5201f3edc88b5b3e780a61946e73fcbe47c7d1aa7f3a427a6259cee2ff627d96884086e588a16550e2d256ac9400d17513b93a2aea814a28542adc35eab3be80ffafd41b77bf4f1a88b3c0579eaf3f216d9d75a576ad8e96cbddb9910590eb4e2aacd44f11cefdcf73a951437c0b4eabcb6eca08beabc6f7a9c0b463517e568116101b502b98482f21c4b786126ebcfafa5db9c16ed0cc1f79c01654cd4a53665a1041365cab35a5a5567f8e8d8327f3b3891ebbb93984c668b20de59d1c29057bb842ab25c4a5075aec9d7703625ab0abdaea902b52217dfdcd02564258109992c79b22223724cc6c10921feecc20d77564a6389a813cc62e27bdf5d4cfbded48b89996c022945e113aa514f9b6a92e6e899abd2a034823673f4dede9ef364b25c48ae4d075e10bbe178127be76e33341f32ca1ea23b1c5b4a730588a69216a0414e450248399b455eeccd82b18f0c3b89b32d4239c3cbc71742fc50812950dbaff11a1c58ff2de09ce6b545dc3707a7eb3c3dedfd5d21f6a66e148fa76708bb4221dc8306e1cc176ef8c3694221a420a16496f9ce242cd826feb9cedbdd422c6e17dae01569ae3467ca983009361df3c276b1611fee1ff40f1c0b96fa6deea8679e6099fc31b3f1a8ad3e4829646817cafca29bb2b5f01207c793b95dc75755de6d4205284533231f085250cdae799911c5b312b52590544892d62533b466fd6c88caac2ea0d4c40c5e0dc9f3e0db24aaab4a480dc98b0a029acd8de2d00b4e773f6d7ebffc88dd089f832697dde161f7ca34655b69f6e4ff6de3aab91c53cfc92c70711b7f0140e0042662050000",
    ],
    [
      "ETag",
      "QwndVbGTfQd2oMneG0U0Cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd3cb7282300085e177c95a1c84884977d0226aa288d26ad9309006440cd0c40e974edfbd4c5fa3fecbb338bbef1b248c71a5e27b5df20a3c813e31f0944d49839c657ea9dfb2af459bea8ccf589b858785757336f2462a4ea55aa3735807416f1a3d7e6e6b057d74823a840145eb5d646adca4e7b9a7f0ad0a5c7239b7c567b127a4d9abb45c7a992306bbcee526b28c57cb7b9779595fe1f8885c4123457177b5dcc8cf6c320e5b83eb1f2fe1c0d8cade8a83963a6423f2ed1271a3b1f704e6c2b25d7f45dbce48c4912643373bcd3c0d85a9ddea9af0635c95f098ee3277fae8d1ff0d4c00ef9a42721517a376738ef104fcd18fef7dc347ff0e4f2497e0e7175c5c2be919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-83-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b4fdb3014fd2b95f711da26a4e451a91a5509a3124d479a82a6698a1ce72635a471889d6e0cf5bfefc6a10c84049f62fb9e73cfb98f3c917b5ea6644c129e3f34503f7eb913093926a0688eaf7f4eaee56c2d8f367054d777bbbfc6c6ca46f9648208deb224dd5605f4a5686a0672bc5e0df25a3415ad85e863a2be6bf54ddbb22dcb364dcff14ce44928b22b5ede237ba35425c7c3e1417b900b9117402b2e074c6c5fde87bb9361558b3b604a0edf4a0e51450e3f16fd5a08461517e564bd42038d843a862de5055af8cf4c93b3b7a9079c6e073982779c01654c34a56a6d610a26ca8ce74dadb392f113d1365f1dc8cabff267518f89a2d9967149b770dc4ba9a2b17aaca077112e17bd7970b10c17d368be0ce2d5ecd25f4c07b3e5d57a11ac7ab7977ee8f7144d0ad0dcdea477a66f015e503f05a978a9d5a3f6b9557e6ed0fcfd585a024a4be882b163d8d4740d2fc9128765ae759a640624899b38a7d44a0ce68d6094264091a745358b96a20433733ccf33620627108f3c3b8dddc4ca62e3d4316dd34e8d2431c9fe98fcaeb982732e2b2179d721721bce233f8ec275309b46be2e21a34da1ce3b636d01af3d2a2c10411fd4b46fa35ca052dbee7910f9e17416cd6ffc6ec2579053f6b87ac01967b49080685a63f314d40b9162c348305df8e708d613fb7e084a32fef944da9eb72e5eb5fc851ee1005bbb4a7fc92a0ae7c1376de780b8a145a321bbee402ab4bcc1dad0f5fe17227149bb2ce47aed873f48f71442063594ecf3692258073efdd70e8b8f585c7d94910aefb83b4cb622ac866e87b82ef7c0760dc7758806d7ea5dccb5ad43d7da1c6d46d842a99e2bea161f0bedc41af902c2208e3fd0dddaff038a35789d78040000",
    ],
    [
      "ETag",
      "x2QsCUs+he+rrjvz0h3f4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d925d4fc2500c86ff4bbd74244c60c0122f405197000acc0b6308396e1d0cb7759e0f0d12febb3d13d1a889de9cb5ddd3aeefbbb385c7b488c1878774f964506e8e96a8273698a2329956fc28a950080ea0164b4b9ad7c0bd30adf571f724692ab9aa37fb7793d3532654b4c25c80bf8524c52c56e0df6fa11039725b4499c98b459539a037a52dcec26930bee43ca7d8e6e3dbe1b0d71f0e60e71c1a63a1c5a2e2ffd136df39b0a687292628b188d0ee524a5a63a4032b5389bcccb0a6c8c808155470f56229c9944212d5b852eb346aaed7f01a0dcf75bbedaecb604691d02915ccdece783fd0a44536a51756091e03b20a5970529dcf5c4ee34a880d8371e835abfdbe02122392f1e24faee4755782ffc207b677e03b277232853e5017c3ebde6fe3d8d2cf51e7bd70f083509a8d3a2061301accc2dee8c672f3bdf4fe46a3ba91c43e2ab416baf566a7d5f6eaefae9e91759abfe36b69d08148f0e5b84a35f889c814eede0049ea72337a020000",
    ],
    [
      "ETag",
      "buzI1Fu5j+92f4srh04BYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-84-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5536d4fdb3010fe2b9627c426b50da5d041a58a7510b4686953da14c426d4b8c935189238d80e5285f8ef3b3b2d2f62838ffb14dbf7bc9c1f5f1ee82d2f12daa30b9ede5520579f6ec48236286896e2e9e5ead7305ceeee761327ec94d5f86ce7ece664d0ef23821b966279994153894ac6a07ab3692b95a22a9914a28942cd83bd66bbdbe9763add76fbf0eb611b790ab2a5cf8b5b645f6b5daa9ee36cbc5ba9106906ace4aa158bfce9dcb9df754a296e20d6ca796de9a08b72de373dca44cc3417457f36c5062a05720e39e319b6f0cc4c16df5e4bb738cb5b2982ef790c2c8e455568d3164ac4a258f2b4925695f61ea86df3c5824e5ddf3d0ec971301b859f23961b72f4853045e67309aaca34399d04431295e875cd14a8885cfc70272e21918458c864ce9388f4c911198c4e08f1830b77f242681484c4f77eba58f7bda11712136d024b86ca274ca3a036ed24f5d2336fa5416904ad83f4de3e1f7d34552e24d7e60ade28742783e3d03b77ebd47c4859bc9ade616e4b96294034932c070d72281240ca38987aa1178c063e326c14e30d42d1deef876742b82ac134a8edd77875f7acff0670ceb2ca22eeeb056dd3c7c7c6bf154efd60f0a1c656bbb5bfb785425708c351a935e8d9cc9d5cd2fa68024b9050c496f74e56166c0b1f4efc66fc108b0388364ae35e691e2b63124bb0e590e7f69e6bf6417bbfb3432d58eab7b57da30c45f2d7cadaa3b2fa20a590133b73668b6ecaf6c20b8c05ffe206cd4129961a9959813751c0161910fb7ee4294c12458417c4c44da2f072ecced791470df29d2524119561d9a87ba44e7ab3dbaeb7dba631db4e3d0dffb795ab3a24e375128c5c9c8a3f16e6a0070d050000",
    ],
    [
      "ETag",
      "YyZMTf226d/T3puPQ0QjDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ed384a459aee402013050511826e188134e00702a111e8f4ee757a8dfaeef0bec139cba81049575f69053ec07056e0349b6ef8bb61b3cbdc76e2510a2b97e37cab15959f913c60ccb15187892107dd8b5c426ac51d0e44b3307313b8425487b3fe747d44d7287fdbb9a6166dc2cfdb7e2d3b187e31c44724e358286ba6dc106f54b5aab8e38ac0c4fee214c1b408d7c150603ce61ca6c48cd9f231a337bd5cc9e650dae67d191b7bdfca5316347a837ba4fa4de5850ef4842661fb488fbb0beb6b44b7eda82f2ae8ddad2529b6e9fd78c475397d79f9bfc004d09e972d1549f9dcfea64238017ff5936ee0f4f9dfa0e796b6e0e717b0d32a2b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-85-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "3014fd2b91f7953eb2be924ad5e84a804e6d3a92740ca62972dc9b6048e3103b4508f5bfefdaa10c84049f62fb9e73cfb98f3c913b5e6cc898243cbbafa17afc722b12724440d10c5fc3ab45ff61b73cebba0e5c7fdfd1dfd703f7c7c5648208ae59926ecb1c5a52d41503395e87edac1275492b215a98a8e50c5af6b037ecf586b6ed8e5c1b7912f274c18b3b64df2855ca71a773d06e67426439d092cb3613db97f7ceee6ba7acc42d30253b6f253ba8223b1f8b7ecb05a38a8b62b20ed1402da18a614b798e16fe3337c9f1dbd46d4eb7ed0cc13bce803226ea42695b98828922e5595d99ac64fc448ccd5707127a0b6f16594ce4f5b6880bba85236b43158dd56309d669b05a5a73ff74152ca7d17ce5c7e1ecdc5b4edbb3d562bdf443ebf2dc0b3c4bd12407c3b526d6b1b9f97841fd0d48c50ba31ee967adfcdca0f9fbb168024a4b6882f1a83ba4b6d375933419b1d4e90d92b40b49e224a301ed255de6f6a1bf498022cf881a162d44e138cc4d87a37e6cd3811df753da8f5d3be9ea846cc3984e06647f441e2aaee084cb5248de74885c06f3c88ba360edcfa691674a48699dab93c6982ee0b547850522e8839af63aca052ae976cffdc80ba6b368fecb6b26bc808cb2c7f01e679cd25c02a26985cd53502dc5061b46fce9d23b41b099d8cf435092f19f27a27bae5dbc6af90b3dc2016abbca7c49180573ffccd839207ed1bc36905d7320255abec1dad0f5fe2f2271499b2ce462ed0557a4790a20850a0af6f934116c029ffe6b87c5472cae3eca488577dc1d26b508aba0d9216eca3db01ddb19f5890157ea5dcc758687aee91c3a236ca150cf15358b8f853662b57c016110c7ef9b6eedff0177e443fc78040000",
    ],
    [
      "ETag",
      "SYL4wvMG098eZBvaXZ59JQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "400cc7bf4b7ddd121660e2121f06a292c05418fa600839b76e0cb775dedd3448f8eef626a251137db9b5ddaf5dffffdd161eb332060f1eb2f4a946b9394a51df98608aaaceb5e24745a542b000b54899ecfa67bdb5ba729e6e5f83d9733799147783203d3d6542452b2c04785b4832cc6305defd164a5120b74594d745b96c320bf4a632c559381d05179c17149b3c988fc77e7f3c849d75688c8516cb86ff47db6267c19a1ea698a0c43242b34b25698d911e19994a14558eb6a25a46a8a0819b17a9a4ba1292c8e68addebda8edb76db6dd7714e8e4f1c06738a84cea864763ee3fd409316f9945e5825b80cc82664c149733e73398b1b21261c05a1db69f6fb0a488c48c6cb3fb98ad75d09fe0b1fd8de81ef9c28a82ef5813a1f5ff9bf8d634b3f479df9e1f007a1341b7540c2d164380bfdc9b5e1167be9fd8d46752d897d54682c745a9d5ef7d86dbdbb3a20e3347fc7d3b2460b22c197e332d3e0252257b87b032b521ed57a020000",
    ],
    [
      "ETag",
      "5AD8jsO1qVzNSv5fMmWCNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-86-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5b6f9b3014fe2bc87bd9a4e64a202452d44509dd90726913d2689aa6c49803710b98daa65355e5bfef004d2faad43eec0973ce773917fb91dcf22c244312f0f8ae00f9f0e54604e48c80a63146b79bf9d5cd411cb6b3eec1ea6efabe77114daf462344f092a5689a27d050a2900cd470b36ec652143995423450a8e1d88d8e6ddaa669773a83fea0833c054934e3d92db20f5ae76ad86a9dbc9bb110710234e7aac944fa1c6fdd775bb91437c0b46abdb56ca18b6a7d6c7a9e08463517d968b3c6020a05720729e50996f0c20c83ef6fa59b9ca6cd18c1f79c01654c14992ecb420926b288c785ac54c9f0915465be3a90b53b7327be31596e16fed73d4d4bf2fe9b4195b1db495045a28d8bd5726eec73f43a50056a6f6c7fba2bd730f6129890e18e877b63649c1be3c51483a7bf9937f77ca31c64084af3ac2ac1a74102a5fdd394bcf7bb290954a3519ddcf5db36ed38ed4110057d1639a615446d080227e85bd40cda6cd0835e1800459e2ed52b16cd44d671a0d70e4ce60cc042906db5dbd4b618a38e05ac3788681462daec92e319f92bb9862957b950bc1e15d9ae3cdfddf9abcd6232f6ddaa8d88e238a675716513afebd4d824823ee8eb5866b940a772eedec27757e389ef5dbbf5aa671053f6b0bec36547345180682a690a1ae45c84383472b95c7bbeb75c8c67c8a8f67779422832fcfdf842f01ff26acabafa965e76aff23f01ae69525488fbfa403ae4783cfb3f050b25fe20046f76cd26571b77f58bd4a115442021639f6f1fc155e2d3077a7a2d88c5f782364ae33fde35a64a1326a1be733cadea7b623b5ddbec910a2cf5bb5cbfd73d0db7d4281521854c3f7554bf96725655aa50cf204ce25559788b1f98fd078ff3c274ad040000",
    ],
    [
      "ETag",
      "WUMQjhohWL2h52U7TIFfDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90dd4ec2401085df65bca5090da60a0917822825fc688168620859da692db69dba3bd5340defeeece2cdceecd96fe79c4c075f7995c0084e79f6dda06e6f32e457db44689a828d949a2a83d003649509f976bb0efdcdfc7dba5a0d9ffa8f65b2d86d16d9782c84893fb15430ea20cdb1480c8c3e3aa85489f2ed78d46ea260dcd65609d7bbd9f32c12a1a4c40aebfd72f93059cee072b8f4e04ca70853d458c56847d69ace187368d31a55d6057a861a1da30107bb874c53532b4de489e2dd079e1f0c82c120f0fde1ddd017b0a058714e95b0fb2d880d13ab22a25f090b16d0ae95dca93b7f9c2c810effe8a465342f9ac4d7a0b5ec5feda76423b14465dd600f6225cb98e77cbd5ffe004fc847a969010000",
    ],
    [
      "ETag",
      "W4NI1OHXCMM9F0DmdJTOJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000000002ffedd34b7282300000d0bbb016478d41e80e0ca088da0a231d3619d40412e59b680a9ddebd4eaf51df1ddeb7969dcf44082ceb2ba9b437adcf66d6f83cde34a6e3e56c3819faba00c51a837ddfee2a9386e9e17d0021fbb01f4b1ac85c78bd338307b277936d825d55398ae67a53e697d4f6111f42dfb0e42638ddb96e79c77a13b7904e0bd6a14e67dd90dfe724bcc05b02b841a7026ea34c8ad89e0788c735b8b5a8351277a18e2abd2dddd4539f5564ca60652e4b5f1911e42d5fe07ef228ae10d10954ec1147b611fa2b948acb14873b8fb83540aadc5ad22b2967d7f1cbcbffa58d34f2d5b08e08cc9edb01b4ac91f6571fcbbe21cfff0ec93ad2693fbff70c834419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-87-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "c8fbb83681bc8048d11a2574cd9490959056d33421632ed42dc1149b4c5195ffbe8b69ba5695da4fd8bee7dc73ee8327f2c08b848c49ccb3c71aaac3977b119333028a66f83af71feb43f6c3b9b3dd9bafb01f0dc55215d793092278c3927457e6702e455d3190e3eda69355a22e6925c439263a77ec736bd41ff5fb23cb726dd7429e843c5df2e201d9774a9572dced9eb43b9910590eb4e4b2c3c4eee5bdbbef75cb4adc0353b2fb56b28b2ab2fbb1e8b75c30aab82826db0d1aa8255411ec28cfd1c27f66125fbc4ddde174d7c910bce70c2863a22e54630b533051a43cab2b9d958c9f88b6f9ea4036ded29b85061379bd2ba282eee0cc48a8a2913a94605c06eb95b1f02fd7c16a1a2ed67eb4995d79ab6967b65e6e57fec6b8bdf202cf5034ce41738d8971a16f3e5e503f01a978a1d5c3e6b9517e6ed0e2fd581a024a4b6883916d8ea8e5986e9cc6364b9dfe304e4d886327b687b41f9bcc1dc0208981224f8b6a162d4431189a4e125b66445d368c06bd7814d19e6947ae09238b250e658e4d8e67e46fc515ccb92c85e46d87c86db008bd280cb6fe6c1a7aba8494d6b99ab7c69a025e7b545820823ea8e9d844b940a5a6dd0b3ff482e92c5cdc78ed8497905176d83ce28c539a4b4034adb0790aaa9548b061c49faebc3982f5c47e9e82928c7f3f91a6e78d8b572d7fa18738c0c6aed25fb2098385ff5ddb39216e685e6bc8be3d90122ddf616de8faf80791b8a46d1672bdf5825fa47d0a20850a0af6f93411ac039ffe6ba7c5472cae3eca488577dc1d261b115641bb435c977b623bfdbee5120daed4bbd8a0373a75adc9d164841d14eab9a276f1b1d056ac962f200ce2f87dddade33f0f2246dc780400",
      "00",
    ],
    [
      "ETag",
      "DNquygJ8h79V+ev65oLtnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bf4b7d74244c70c0121e86a22c0144182f1a428eadc0605be7dd4d4208dfddde44346aa22fb7b6fbb5ebffbf3bc036ce22706111af5e0a94fb8b15ea47138c51158956fcc829530816a0162b264797796f6b5f5d2efc3ad5768dea4e268327afdd6642856b4c05b80758c698440adce7036422456e0b2929d26c5e6616e87d6e8a9360ec0fef394f2932f970daef7b9d7e178ed6b931125acc4bfe1f6db3a3051b5a8c718912b310cd2eb9a40d86da37329548f3042b8a0a19a282122e5fac2415b9904415ae549a8d8aedd49c5acdb1ed56a36533985028744c19b3d309ef079ab448c6b46395e03020cb90052fcbf395cb71540a31a13f0c9c7ab9df57406248329affc9e5bcee5af05ff8c04e0e7ce7444a45a6cfd45dffc1fb6d1c5bfa39ead60bba3f08a5d9a83312f883ee24f00623c3cd4ed23b7b8d6a24897d54682cb4abf5e675c3a9bebb7a43c669fe8eab65811684822f472fd6e02e45a2f0f806b49007347a020000",
    ],
    [
      "ETag",
      "P+pHk12+bI4o3w70wrlMZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-88-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536d6f9b3010fe2bc8fbb269cd0b81241029eaa2946d4c09e90869354d53628ca16e0153db74aaaafcf79da1695a556b3f85f89e97bbc7e70774c3ca044d50ccb2db9a8afb0fd73c4627882a9cc1697a335c86ae2abc4b7191ff083f07e54c0e67d329209866495c5439ed485e0b42e564b3ee6682d715169c7740a8e3381d73648d2c6b649aeed8358127699e2e587903ec2ba52a39e9f50ededd8cf32ca7b862b24b78f174debb1bf42ac1af2951b2f7d2b2072eb2f7b6e969ce09568c97d3cd1a1aa825155b5a6096430b4766127f7929dd65b8e86600be63846242785d2add1648105ea62cab45a38a260fa869f3d9075a7b0b6f1e19f3d526883eee70a1c9bb4f0696c6762ba8ac73657c0d574b635781d7159654ee8ccbef5ee819c64e50c245b265c9ce981aa7c62c38338eb8f66ce12ffdc8d07126542a56368d4438cea96ee2312bfff50d69025620d316b7e3fe089b4edf8dd3784c52c71ac6699fc6b1138f87d88afbc4b5a99dc414034f69f586854b5eba639c266e6cd9ee3019ba09b16c4a49625a78e4c4c4b25c5be73fb009da9fa0bf82297ac664c5256b034397a11f79db28dc04f359e43563a41842396b9bd3433cef53c190007a63aebdae320e4e3a7d3f88bc70368ffc0bafbdf005cd30b95fdfc295a7389714d058e0822a2a963c81d0d0f96aed47fe2a982d80d1dce2f90121d1e4f7c39110dd574dcaaaf9d55e23bbf13f002e705e3788bbf6039968bf3ff9bfc23a0afde0dbdb12b30aa605993f80821d6f15d0cf8d17fe42ed5148532a6849dedf00003785779feae1dd00165e0ed84805ff61df88d42644d076ef58d14cf9c8766c73e0a0062cd4abdac01e1c02d61a5a9116b4548f13b5ef46e7d5946af9048222ac4bd024b5ff07e36b2bdfb7040000",
    ],
    [
      "ETag",
      "fk5MR9tmEWrVlJR+NnAs5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d90616f82301086ffcbed2b24632428267e988e4d13621c1b897131a69683a1c0b1b6cc10c37fdf15f7a5777dfbf4de3777834bd96430835359fc74a8fa8702cdbb6d12d45d653497961a8de0001a513039796de572bfebb00fd37c95ef8bfa657bb9cee74c68f98db580d90df212ab4cc3eceb068da891bf1d8f6a9cc898e95babac379fd15b94b0505366854d1ac7cf8b3882e1303870a65382392a6c24da91ada2334ab3b669b5a8db0a5d4d9d92a86184c7874251d70a45e4b2e24ea7ae17f881ef079e174e428fc18aa4302535cca61fc036868ca812ba7258b0801a5bce9d8fe72fcb4f36d0e11f5df406f55611fb6ab4968f77fb25d94886a31ad5a10352f03256a5b9df873f4db74da169010000",
    ],
    [
      "ETag",
      "7FpcCZXuey9UfHfZgmDPkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d0bb642d8efca47427d220411a5074904d26621450200614d0e9ddebf41af5dde13d014d53d634a4adcfac029f60a08a394ec71effb0e0a9e0ed16db6b235bf31ddd3855104382a23e76f1b6f6ebc1eb16cc7a206e43e5ce8ab519e4b3509fdf4ec9c1093a11f1013bee32501533bd4b8886b25ca7a5e6b02e391c49262ff68bee4124165da4306bab498c103463059d26b7edaa54cb46523439c647984143930e284ad4af8b1fa657cf2197a15aad4a2cf2336ddc70de61baac11ac12ec0a656fcf67d3fe6e617d5314bbabe60b6c4886e745a1ff3d1dbfbdfd5f600458cf73c11a92bfb6abba698ec05f7dd20e9cbdfe5b8c0a26c0cf2fe74d0f9f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-89-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbda3c2109448ad628a16bb4846c84b49aa609d9e642dd12ccb0695555f9efbb98a66b55a9fd84ed7bce3de73e782277a248c8943091fdada17afc722b193923a06986afb5929eef254bd87fb76d7e39af963772f4309b2142342c450f650e1d25eb8a839aee77ddac9275492b293b98a8e37a9dc1d81edbf67830f026de00790af2742d8a3b64df685daa69af77d2ee66526639d052a82e978797f7defdb05756f216b856bdb7923d5451bd8f45bfe692532d6431dbefd040ada08ae140458e16fe331376fe367557d0433743f0bde040399775a11b5b9882cb2215595d99ac64fa448ccd5707b2f3d7fe22b2b8cceb431117f400675642358df56309d645b8dd58abe0621b6ee6d16a1bc4bbc5a5bf997717dbf57e13ecaceb4b3ff42d4d590e866bcdac73730bf082fa09282d0aa31e35cf8df2738356efc7d210505a411b8c27fd311db87d8fa56cc253d71eb1b40f8cb96c32a236eb73cf012761409167440d8b16b2b0872cb56104f170d4776367e4b2d8b5879338619ee370cf1b0c9c941ccfc84325342c852aa5126d87c875b88afc380af7c1621ef9a68494d6b95eb6c69a025e7bd45820823ea8e9d8448544a5a6ddab20f2c3f9225a5df9ed84d79051feb8fb8b334e69ae00d1b4c2e669a83632c1869160bef197083613fb710a2a32fdfd449a9e372e5eb5fc851ee1001bbbda7cc92e0a57c13763e784b8a2796d20f7ed819468f9066b43d7c73f88c4256db3909f7b3ffc45daa71052a8a0e09f4f13c126f0e9bf765a7cc4e2eaa38cd278c7dde1aa11e115b43b244cb927b6eb4c5c871870a5dfc5dcb17dea5a93a3c9080728f47345ede263a1ad58ad5e4018c4f107a65bc77fce62587778040000",
    ],
    [
      "ETag",
      "uso9E9dDeUK33cHArDho5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "4f",
      "c2",
      "30",
      "10c7bf4b7de94858c0014b78310474c9401e4688318494ed3686db6eb49d8610bebbd78968d444dfb477d7df5deffeed913d2779c86cb649e27d09e27015839a6a6306b24c95a4adc05c023318281e13692daf9dd4dcf5c55c7ac3c7cdeb728f9139ed768990c11632ceec238b124843c9eca723cb79069416605a66f9baf20ca60e850ecefd993bbe233fc350fbe385e7393d6fc04ec62531e48aaf2bfe1f69ab93c176b899410402f200742f85c01d04cad5634a9e1529d424962200c92ab83a880596051788358ad4da9d9a6935ac46c332cd4eab63129862c0558239b18b39f5c7142a9ecef0556a4d081095490347d5fa42e124ac06d1a63bf6ad66d5df57404080225cffc915d4ee96d32b7c606705be733cc33257176ae83d38bf9523493f4bf51d7ff083908a84ba20be3b1acc7d6734d1dcea3c7aefa0404e04928e12b48466bdd9be6959f577556f512b4df7d84a9460b080d3e7b84f14b3239e4a38bd011e468fc67a020000",
    ],
    [
      "ETag",
      "6W+Al1jDrSsLFYbwWqof1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-90-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6fda3014fe2b91f7b2492d2105c245421da2d91609421b0255354d603b4eea92c4a9ed307515ff7d274ee945d5ba2782cf7739e7f3f123daf122462344787a5f31f9f0e94e10748298c6299caeed4097ddbd3b59bb7fb2f96e77b39ebafbabf11810bc66299c97193b55a29294a9d16ad94aa5a84a2c853805a1d361fbd4713b6ea7e33aceb03f7480a75896cc78b103f6add6a51ad9f6d1bb950a91660c975cb5a8c89fcfedfd995d4a71c7a856f65b4b1b5c94fdb1e9792628d65c14e3d5121aa814931b96639e410b2fcc987c7d2bdde2386fa500de73ca30a5a22a74dd16485051243cada45145a34764da7cf58196decc9b46d674b10aa2cf5b9cd7e4ed170b2b6bb3914c5599b6be858bb9b52dc1eb162ba6b6d6f50f2ff42c6b2b191532def0786b8dad736b125c582fb8e66ce6cffdc8aae38c99d2bc308d449864ac6ee2292bfffd0dd504ac41a6296efa6d173b83f69024a44f9341a7479236236440fa3ddc216d3aecb26e4c18069eaed50d0b17a218d0610702a68e83b19b3884769da4d703669f12d2216c701693beeb32743841bf25d7ec82ab5228de0486ae433ff23651b80aa693c83363241842b9689aab8778dda7862101f4c15c87baca0538d5e9fb41e4859369e4afbde6c2672cc5f461790f579ee04c3140638973a6999c8b184243978ba51ff98b60320386b9c5cb2342a1d1cfc71742f4509a94b5f9adbddcaef13f02d638ab0c62df7c20071d0e27ff565846a11f7cff580297302dc8fc0214ec78a380ae565e78839aa390254cb282fe7f03006c0aff7daac7770358783960a334fc877da3aa36a192357bc77333e5137bd0eb0e07c880a57e5773dbee31e05aa35664392bf4d344cdbba9f332a54a3d83a008eb1298a40e7f012ad086b8b7040000",
    ],
    [
      "ETag",
      "V/Ntp4v6AV6zlMkkYVC6vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "614f83301086ffcbf9159211e2cc48f6612c642e2e8ba28b8a59960e6ec82c1c6b8b0b12febbd7ea97f6fade73f7bee9005f55534004c7aabc74a8fa9b12cd932d52d49d349aaf961a8de0011a51327939c6cb6cf570fb9a2d26b2cbdee4fb8faeaef339133affc45a4034c0a9425968883e0668448d3c763828b79131d3b756596f5f925592b250536185ed6eb359c49b04c6fde8c1998e299e506193a35dd92a3a636ed636ad16752bd1d7d4a91c3538d8354a455d2b1491cf8a3f9bf8c1349c86e134086677b3804149b9301535ccee9e816d0c192153ba7258b0807225e73eb9f39be5890db4ff47e3dea07e54c4be1a0bd775f64bb2910c4735aa430f72c19f715f99bff7f80b8be5c02269010000",
    ],
    [
      "ETag",
      "qbBCZGK5WZA0luZXlYzsiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1f8b08000000000002ffedd34b7282300000d0bb642d8e4211e80eec50050aa3404bdc3018827c34048201d2e9ddebf41af5dde17d830c21cc583ab40d26e015cc996c2cd1d2a5ba655f2eb846dc33312b828daba2d4497251c7fbb68c843bbb5d699dc8a11f2f42274a48461f5a7b79f4f8bab279f842737a5f9909c351eda5dc3e949972da87d1668ab59d43b7a17415104b75678a7bde6a660b833c506f9fce78ce6446639b3790c3446e0e2c49df8e92c845016b0d59fe50491049779f0cab9e5f9dad62bf575ba4ae57c1e851cef4931615eec72435e46816bbd04b3a559191c8fdaff3cd583e3dfd5f6001f044ab1eb3b47a6c5754c35880bffae93053fcf86fe1acc73df8f90517a79bd119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-91-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "2bc8fbda3c08090991a2354ac99229211b21ada66942c65ca85b822936e9a22aff7d17d374ad2ab59fb07dcfb9e7dc074fe49ee731199388a70f1594c72f7722221704144df175b6a07377f377f07d65dd2ecae3dc8ebd47ff71324104af5992ee8b0c5a5254250339de6ddb6929aa829642b43051cb315ba66dd996659ba633744ce449c89215cfef917dab5421c79dce59bb9d0a9166400b2edb4cec5fde3b875ea728c51d30253b6f253ba8223b1f8b7ecd04a38a8b7cb2dba2814a4219c29ef20c2dfc67c6d1e5dbd46d4ef7ed14c107ce803226aa5cd5b630051379c2d3aad459c9f889689baf0e64ebaedc5960309155fb3ccce91e2e8c982a1aaa6301c6dcdfac8da537dff8eb69b0dc78e176b670d7d3f66cb3daadbdad71b3707dd75034ca40738d8971a96f1e5e503f06a978aed583fab9567e6ed0f2fd586a024a4b6882e1b06b5373d475a2241ab264640da2a40b51348a86036a455de6f4a11f474091a745358be6221f5a03c749ec38ecb1110dfb7404a133b29cb01f0d6c9b76c1644e444e17e4b1e40aaeb82c84e44d87c88dbf0cdc30f077de6c1ab8ba84845699ba6a8cd505bcf6a8b040047d50d3a98e72814a75bb975ee0fad359b0bc769b09af20a5ecb87dc01927349380685a62f314946b1163c388375dbb5708d613fb710e4a32fefd44ea9ed72e5eb5fc851ee0006bbb4a7fc936f097de376de78cb8a659a52187e6400ab47c8bb5a1ebd31f44e2923659c8cf9debff22cd930f099490b3cfa789601df8f45f3b2f3e6271f551462abce3ee30598bb0129a1de2badc337b64f77a36d1e052bd8b59e6f0dcb53a479d11f690abe78a9ac5c7421bb14abe803088e3f774b74eff005df407b978040000",
    ],
    [
      "ETag",
      "CHaFEOx5JL3hHryF6dNwRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff4bfde84898e090257e18884204c431a3d118726c0506db3aee6e2a21fc777b53d1a8897eb9b5ddd3aeefbbdbc22ace2270611acfd705cacdc11cf5b5097c5445a2153f72ca148205a8c59cc9ebfbf12106eddbaeef1fadb3f6dde5f465157ba7a74ca87081a900770bb318934881fbb0854ca4c86d2125459a4dcacc02bdc94d711cf8bde105e72945261fdef4fb5eabdf819db56f8c84169392ff47dbe3ce82254d7d9ca1c42c44b34b2e6989a1ee19994aa479821545850c514109972fe6928a5c48a20a572a4dbb623b35a756736cbbd968da0c26140a1d53c6eccd98f7034d5a243e3db34a70189065c88267e5f9c4e5382a8598b0370c9c7ab9df57406248329afcc9e5bcee42f05ff8c0de1df8ce89948a4cefa9f3fe95f7db38b6f473d49917747e104ab3517b24e80d3ae3c01b8c0cf7f82ebdb5d1a84692d84785c642bb5a3f396e38d53757db649ce6efb85a16684128f87274630dee4c240a77af2fca900f7a020000",
    ],
    [
      "ETag",
      "QZS+eTCWHRR2qnCXKbxkiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-92-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536d6f9b3010fe2bc8fbb2497981900289147551c236a6346913d2aa9ba6c49823750b98daa66b55f5bfef80a62f9bd67ec2f89e97bbf3dd3db9e2794c8624e2bbeb12e4dd874b119116014d77780bea7ba295974d6ebd625c9c79e7b797fcc7c96884085eb114cd8a14da4a9492811aae579d9d146541a5106d146a0f7a6dcbb11ddb762c6be00e2ce429489319cfaf907da175a186ddeedebbb3136297022db8ea30913ddd776f7add428a4b605a755f5b76d14575df363d4c05a39a8b7cb45e6102a502b9818cf214537866c6d1e7d7d21d4eb3ce0ec1379c01654c94b9aed2420926f284ef4a59ab92e13da9d37c71202b7fe64f4263b258cfc38f5b9a55e4ed27832a63b391a0ca541b5f968b23635ba0d70555a0b6c6d9377fe91bc656021332def0786b8c8c43633c9fe2654c3534ffb3e028088daa953128cdf33a8990462954093cf629f8f7752a02d568d50437aee950cb33075112b92cf1ec832831218abcc83da07664b2411ffa71041479ba52af593417b9c922cb76e33e7836b3fa83c4ed250975a8e3314a2d147123cbb34dd3220f2df25b720d53ae0aa178d32c72b60c427f132ed7f3c938f4eb32128a0d9936c95545bccc536391087aa3ae872aca053a559d0fe6a1bf1c4fc2e0d46f1e7b063bcaee56d7f8dc094d15209a4a9a81067924626c1a395eac823058ccc73364d42f78bc472832fc79ff4c08ef8abacbbafe565e4ebff6df034e695ad6889be640b00b0fadff2b4cab16bc29d0337b66dbc4913e40a55f08c5116f44c8c9da5f9e93e66a090948c8d9fb4380e03af0eea6eed706b1b83868a334fee3c83155993009cde8f1ac2ef491ed3903ab476ab0d47fc75c13cb683daf4ba50819e4fab1a2666daa96d5a1523d81308813330fe65f31fa07fc30e2a2b6040000",
    ],
    [
      "ETag",
      "esJfts8mCx8pApW8YxjiZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7c8558c46021e9836d886d828d824413d3345b18900a0cee2e1a42f8f7ce525f7666ef9e9d7b33237c576d0e019caaf2a74739dc94a85f4d13a3ea6badb874d42a040b508b92c9ae729769826effbc5cbcd3ed36919b8ffb72b56242655fd8080846282aac7305c1e708ad6890bf1d8f729ec8981e3aa3ecf66fe15318b3d0506e847d1a458feb2884e9305970a6538c054a6c3334233b4967ccf4cea455a2e96ab415f5324305333c3f9492fa4e48229b15dbbfb31dcff55cd7731cffc17718ac2913baa296d93401b6d1a4451dd31f870503c8b9e5dcc57cfece32073afca3eb41a37a91c4be0a8de5e26abf21134973542d7bb42013bc8c6da5aff7e9020c8703bb69010000",
    ],
    [
      "ETag",
      "pi38USe3uM80Wo/HSrCX4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb642dce40444d7720268af803a1c10dc3273a40854c404de8f4ee757a8dfaeef0be419ae7aceb92bead59033e804a0d34cec71b3eb7f1b58ce45c3f3ef7d9494aec922f39f8744132cb42b88385c6290e5c9d5ad9569b99706d33631f071d4d746caa5e38911bac0fed39266aa7235eb0baf4a3d8af34876e66f776521b2b7e990c9feb0b21860d37ceeeeab026b52b522a7398d556986aa767b31449e85188d5e06f9df8e689c7a4ad7a2af3a9908eeb515dda305fe9286ceb8551ddcf2a5cc903234574f59630beb98f6953f17e8f07b485e171fcf6f67f8111609297827549f9da0e4d8446e0af7ed22bce5eff6d960a26c0cf2fbbfca64519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-93-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b4fa34014fd2b64f6ab7dd9274d9ab5a954495aaa406bcc664386e182a3c02033d4a8e97fdfcb605d8d897e6266ee39f79cfbe0953cf03c225312f2e4b182f2f9d7bd08c9090145137c7d105bb5bb552f17bb65a1ae969b976be53b4fb3192278cd92342b52684951950ce474ebb5935254052d856861a296d96ff546fd51bf3feaf5ccb1d9439e84345ef1fc01d9774a1572dae91cb5db8910490ab4e0b2cd44f6feded99f768a52dc0353b2f359b2832ab2f3bde8ef5430aab8c8675b0f0d5412ca0032ca53b4f09f1985679f53b739cdda0982f79c01654c54b9aa6d610a26f2982755a9b392e92bd1363f1c8867adac856f309156591ee434831323a28a06eab90063e96ed686ed2c37ee7aeedb1b27f01697d67ade5e6c56dbb5e3193797966b198a862968ae3133cef4cdc10bea472015cfb5ba5f3fd7ca6f0db2bf8ea526a0b48426188cbb23da9b74cd300ec72c9ef48761dc85309c84e321ed875d660e6010854091a745358be6221f0e199823330ad88445c1601cb1808e60184491697601e253c626e470429e4aaee09ccb4248de7488dcb8b66f05bebb751673dfd225c4b44ad57963ac2ee0a347850522e89b9a0e75940b54aadb6d3bbee5ce17bebdb39a09af20a1ecd97bc419c7349580685a62f314946b1161c388335f5be708d613bb3a062599fe792575cf6b171f5afe4ef77180b55da5bfc4f35ddbb9d0768e881d4d2b0dd9370752a0e53bac0d5d1ffe221297b4c942aeb7967b4b9a2717622821673f4f13c13af0e3bf765c7cc4e2eaa38c5478c7dd61b2166125343bc475b947f6643c1c0c880697ea4b0c3fc7aed539ea8c9041aede2a6a161f0b6dc42af90ec2208edfd1dd3afc03b111767678040000",
    ],
    [
      "ETag",
      "koUtVYtzGVFptPFOzQtTNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4b7ddd22cb60b8253c0c4525011418f1c110726c0586db3aef6e1a42f8eef626a251137db9b5ddaf5dffffdd1e9ed222810096e9fab942b93b5ba31e9b6082aacab4e247498542b000b5583389d1545136d31a1fce9762d98afc685c8e3b1d2654bcc15c40b087558a59a22078dc432172e4b698b22a2f16756681de95a6388d26fdd10de73925261fcd0683b03be8c1c13a3526428b45cdffa36d7eb0604bcb09ae506211a3d9a594b4c558f78d4c25f232435b5125635450c3f58bb5a4aa1492c8e68aedbbb6e3b99eeb7a8ee3b77d87c18c62a1532a989d4d793fd0a44536a15756091e03b20e59f0aa3e5fb89c26b51013f64791d7acf7fb0a488c49268b3fb992d7dd08fe0b1fd8d181ef9cc8a92af489ba1edc85bf8d634b3f475d8551ef07a1341b7542a2feb0378dc2e1bde1e647e9dd9d46752f897d54682c741acd8b56db6bbcbb7a49c669fe4ea0658516c4822fc76daa2158894ce1e10db0fb91247a020000",
    ],
    [
      "ETag",
      "eTSsolUtteW/bab5T9TQpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-94-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535b6fda3014fe2b91f7b2490572014290504769d665e23608add66902c7715297244e6d870e55fcf79d24a517556b9f12f97c97733e1f3fa02dcb42d447018bef0a2af69f6e79804e10553886d3e5f5d9765bec2f7fb0e1fc4ce4f7f9aefdf7221e0c00c14a96c4699ed086e4852054f657cb662c789163c17903841a4ebb6174adae65750dc3b11d03789226d198655b60df2895cb7eab75f46ec69cc709c539934dc2d3a7f3d6ce6ce582df52a264ebb5650b5c64eb7dd3d38413ac18cf06ab253450482ad634c52c81169e9961f0f5b57493e1b4190378c708c584f02253655b20417816b1b810952aea3fa0aacd173f68e98edd91af8d66aba9ff7983d392bcf9a261a9add782ca2251dab7c56ca26d72f0bac192ca8d76f5dd5db89ab611947011ae59b8d106daa9369c9ec3a154d05c7d30f6269eaf955986542a96555df8384868d9c16350dedbeb29095881575d5cdb7a171b3ddd09a2c02651cfea04914e83a017d81d6c053a71dab41d0614034f95ea150b673ca3a16359ba6d87bad9e911cb3223079b0404ac1e244eb01de981d9b674743841f782297ace64ce25abd342570bcf77d7fe62351d0d7db71a23c290c879dd5c39c4cb3e150c09a077e63a9455c6c1a98cde9bfaee6238f2bd4bb7beed318d31d92fefe0be239c480a682c704a1515131e4268683e5b7abe379b0ec7c0a8ae707e4448d4fffdf04cf0f77995b2aabea557b75df91f019738292ac4aefe41063a1c4efeafe07b1377e90f27f3f7554cddd41bbad9303abe61f60dab6fb49bbaae5f83f81f20c2dad7bae8e7ca5dfc42f5d1824654d08c7cbc1700ae0a1fbedee353022c3c26b081bd540cb690c8d284085a6f234babd91fd9bd9ea53ba8020bf5b6e658c7d84b8d5291a634538f13d54fa94cb12a15f209044558a2a937bd80ea3fbf53e01eca040000",
    ],
    [
      "ETag",
      "SZBkkuyVJiAPBrpwpv4xGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff2d90414f83401085ffcb782d51c4a090f4404d5389a4516ce3c134cd16a6940a0cee0e3684f0df9da55e7666df7e3bef6506f82e9b1c423894c54f87babf2990df6d93a2e92a36525a6a0cc20c905521e4e549479f7a93e3eb69759b0471cef7b11fcde74298ec84b58270806389556e20fc1aa05135cab7fd5e4f1305e3beb54abcde2c57cb54849a722bacb749122d92258cbb7106673aa478448d4d867664abe98c19c736ad51755ba163a8d3191a98e0e9a1d0d4b54a1339a238c183e3fa9eef79beeb068f812b604599e2921a61b71f20364cacaa942e12162ca0a756721fa7f3779225d0ee1f5df48ce64d93f81ab4967757fb67b29158a2b2ee7006999265bc947cbd8f7f7022550269010000",
    ],
    [
      "ETag",
      "w8rAWrTdeKhG/L9Idt2I6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ffedd3597282300000d0bbe45b1ccb6afa47300804c5c10dfac3200608b207373abd7b9d5ea3be3bbc6f102709e53c1a9a0badc12778c6229c2653d2ce91996577a7989579c6c76a11d6427d50e42030adf684eb5c345ca49e7cc1b1ad501af33d3670e55452e05967820c88f5393f185ad816759a69dea314eeebca293c8af3d85388daedadcb4694b35983b7eb41e6c22af44b1ab09d8264bf3ba6d07653622aee82919dbdbc7a57451d51b9848deba2db705e70261e8f41936e88de746969c3ea806dbdd474759b70dfb805e7655e5b9d297491433ebe985631ad5d9da66f6fff179800fa68594f79c45edb2505c209f8ab1f0dcf96befe231af7b4073fbf046f54e219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-95-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "7b6d1252d21022456b94d00529908d9056d33421632ed42d60864da7aaca7fdfc5345dab4aed13b6ef39f79cfbc113b9e7554ae624e1f99f169ac72f772221670414cdf175c37c7b9351fb26282bf00fe95a7857d7cbc50211bc63495ad6050ca4681b06727ed80ff346b4356d841860a2817331184fada9654dc763c776c6c89350645b5edd23fb56a95ace47a393f63017222f80d65c0e99285fde470fe7a3ba1177c0941cbd951ca18a1c7d2cfab5108c2a2eaac5618f065a094d0c25e5055af8cf4c93cbb7a9879c96c31cc10f9c01654cb495ea6c610a26aa8ce76da3b392f913d1365f1dc8deddbaabc860a268cb2aae680967464a158dd5630dc655b8f30d2fb8da85fe32f27641bc5f6d5c7f395cedb6073fd81b371b37740d45930234d7581897fa16e005f553908a575a3dea9e3be5e70679efc7d211505a421f8c6d734ac733d349b2c466d9ccba483213926496d817d44a4ce64c6092264091a745358b56a202939d4fe9c489ed89c5e289639ab103368dc1b1a80d99857420c733f2b7e10ad65cd642f2be43e426f422378ec243b05a46ae2e21a36da1d6bdb1ae80d71e151688a00f6a3a76512e50a96bb717446eb85c45deb5db4f780b39658ffb3f38e38c1612104d1b6c9e82c61729368c044bdf5d23584fecfb2928c9fcd713e97adeb978d5f2177a8403ecec2afd25fb28f4826fdace09714d8b56431efa03a9d1f22dd686ae8fbf11894bda67213f0e6ef893f44f2164d040c53e9f268275e0d37fedb4f888c5d54719a9f08ebbc36427c21ae87788eb724fecd96ce64c880637ea5dcc999d9fbad6e5e8324209957aaea85f7c2cb4176be50b",
      "088338fe4077ebf80f3242584b78040000",
    ],
    [
      "ETag",
      "HcM7Hfa7WNmneMUdDoIFVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92614fc2400c86ff4bfd3a121660c8123f0c412501441826c610726c1d1b6cebbcbb6108e1bfdb9b88464df4cbaded9e767ddfdd01b6491e820bab64fd52a2dc5fac513f98608aaa4cb5e24741b942b000b5583319f7e2289b779fb6ab4739cb65bc53ceb6e15d5d31a182183301ee01a204d35081fb7c805c64c86d01a565962fabcc02bd2f4c71e64f07e35bce330a4d3e9e0f875e77d887a3756e0c8516cb8aff47dbe268c18656538c50621ea0d9a590b4c1400f8c4c25b222c59aa25206a8a082ab176b49652124518d2bb54eab663b0da7d1706cbbd3eed80ca614089d50ceec7cc6fb81262dd229bdb24a70189055c882a3eadc7139092b21261c8c7da759edf7159018900c977f7205af1b0bfe0b1fd8c981ef9cc8a8ccf599ba19de7bbf8d634b3f47f53cbfff83509a8d3a23fe60d49ff9de6862b8c5497a77af514d24b18f0a8d8576bd79d96a3bf57757afc938cddf71b52cd18240f0e5b84b34b89148151edf001abdb77a7a020000",
    ],
    [
      "ETag",
      "hDhfmUBYkbVrSnrhvs6k3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-96-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536d4fdb3010fe2b91f76593e87b9b36952ad69500914a0b6d0adaa6a9b5934b302471b01d1042fdef9c939617a1c1a7a677cfcbdd63fb89dcf22c2443c2787c57807cfc7623183920a0698cd5bb8be6e9c9f51f98647c2c7e751fce815e5e3d8c4688e086a5689a275053a29001a8e16a598fa528722a85a8a150cdb16b2dbb63773a76abe5f49d16f21424d19467b7c8bed63a57c34663ef5d8f858813a03957f540a42ff5c67dbb914b710381568df7960d74518dcf4d0f131150cd45365a2d718042815c434a798223bc3243f6f3bd749dd3b41e23f89e0740834014993663a14420b288c7852c55c9f0899463bef9204b77ea4e7c6b325fcdfcef1b9a1af2e6874595b55e4b5045a2ade3c5fcccdae4e8754d15a88d7575ea2e5ccbda4808840cd73cdc5823ebd01acf8eb0b893282b53efccf32d1366084af3ac1cc3a72c0133c22e29efe3f91802d5685635d7fda64d5b83a6c322d60fa241a7c7a226303660fd1eedb066e074a11b32a0c8d346bd64d10c97777a7de6445d3b6c0ea0df6b3b76b3cf6c8785149c36633dbbd31e4403bb45b607e441720d475ce542f12a2e72b5f07c77ed2f56b3c9d877cb35228a911c55c39925decea97149047db2d7d674b9402793bd37f3ddc578e27b976e75dc538869f0b8bcc3038f68a200d154d21434c833116268e47cbef47c6f3e1b4f91519ee1f91ea1c8f0efd32bc17fcccb9475f96bbcec6ee9bf075cd2a42811f7d507c114b607ff57389ecec75f6bd47b88d8fe4310def04a815cacdcc56f5295161081842cf8fa0620b86c7cf950f7af06b1f86ed04669fc8ff72d50c6249050dd3b9e9613eed84e6bd06e93122cf5871e76f7011b0da30829647ab751f56a4c5e65ab502f206ce2759979b313ec3e030ca9b874b5040000",
    ],
    [
      "ETag",
      "qQ0HGhZeCniAoB4wPeaVWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90414f83401085ffcb78852812a934e9c11aa28d4da3d472314db35d06a40283bb830d36fdefce522f3bb36fbf9df73227f8aada1ca6b0afcaef1ecd705522bfb92645dbd76ca574d45a040f9055296456aefbe1eee5fa30fc46f779887a72ccb2e36c2684d59fd828989ea0a8b0ce2d4c3f4ed0aa06e5db6e67c68982f1d03965b17a4f9e925484867227ac36cbe5c37c99c0797bf6e040fb140b34d86a74233b4307d4bc7069ad6aba1a7d4bbdd1686184c787d250df2943e48be2c7911f446114865110c4933810b026adb8a256d8cd1ac48689559dd251c28203ccd84aee623c7f44be7581b6ffe87c60b4af86c4d7a2b3bcb9d83f928bc412954d8f1e6825cb78aef8723fff01db34348969010000",
    ],
    [
      "ETag",
      "VgSuy5K/jyz68d3ec7wVVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d0bb64ad0c880a74571154080222206e1888198cf1139314c44eef5ea7d7a8ef0eef1b540861214a79a3f80a3e405f8d2c05293e33676ed36450cd6406b35c844885b4a0a9bdb2e902525d5becb498958d6d78978e92bb7f6e35798e1c2df409ea760739277d0663ab549dbd5b53c33b0591382c960974cd271c5b41dd9a866461347ce6aad8164f3277cc9ae369daa75e760c09b73b2ee550dfa3b1644b386936c57534c6496fdab0fdd4daca99ada3e9a5f388b8f15ce7c9971e7363151cfc655276383c4645b2c1e271d483fc4ed5f6be4eb7f8a4bcbdfd5f6000f083118e45495edbf589650dc05ffd52f60cbffecf70c531073fbf8217427b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-97-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b95f7953ed247d256aa46d786d1a94d599282b6698a6ce72618d238c40e08a1fef7dd38948190e0536cdf73ee39f79127722bf2984c0913e95d05e5e3971bc9c809014d537cfde65ff47df8fd109c31cafa3767c98fa5481f663344889aa5e8bec8a0ad64557250d35dd0494b5915b494b28d89da13a76dd9037b30b02d6be24c2ce429c892b5c86f917dad75a1a6ddee51bb934a9966400ba13a5cee5fdebbf7fd6e51ca1be05a75df4a765145753f16fd9a494eb590f96c17a0814a4119c19e8a0c2dfc67c6ecf46dea8ea0fb4e8ae07bc181722eab5cd7b63005977922d2aa3459c9f489189baf0e2470d7ee226c719955fb3ccae91e4e5a31d534d28f05b4cefceda6b5f2ceb6fe661eaeb65e142cceddcdbcb3d8ae771b2f685d9dbbbedbd2946560b8ad59ebd4dc3cbca07e0c4a8bdca887f573adfcdca0d5fbb1d4049456d00423a767536bdc9bb084393c190f462ce9016363e68ce880f5f86408c39801459e11352c9a63cd233a1e436c457d3b1944c3a1c5223670ec88398e65d9311ff592981c4ec84329342c852aa4124d87c895bf0add28f477de621ebaa6848456995e36c6ea025e7bd45820823ea8e950478544a5badd2b2f74fdf9225c5dbacd84d79052fe18dce18c139a2940342db1791aca8d8cb161c49b6fdc2582cdc42e8e4145a67f9e48ddf3dac5ab96bfd0431c606d579b2f09427fe57d37768e884b9a550672df1c488196afb136747df88b485cd2260bf9b973fd5fa479f221811272fef934116c029ffe6bc7c5472cae3eca288d77dc1dae6a115e42b343c2947b644ffa43c726065cea77b1d17874ec5a9da3ce087bc8f57345cde263a18d58a55e4018c4f17ba65b877fdb4c6a8478040000",
    ],
    [
      "ETag",
      "BRP2ReZwSFbab2jFfJDigw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92614fc2400c86ff4bfd3a121670c0123e80a29200228c98600839b63207db3aee6ee224fc777b53d1a8897eb9b5ddd3aeefbb3bc0364a0370611585bb1c657116a2be33c104551e6bc58f8c528560016a1132799116fae53968ccabf3eafd56d6c2ebe62edab7db4c28ff111301ee01d611c68102f7e100a94890db7c8af3245d969905bac84c71ea4dfaa36bce130a4c3e9a0d069deea00747ebd418082d9625ff8fb6c5d1820dad26b84689a98f66974cd2067ddd37329548b2182b8a72e9a382122e5f8492f24c48a20a572aad46c5766a4eade6d876abd1b2198cc9173aa294d9d994f7034d5ac413dab34a70189065c882d7e5f9c4e528288598b03ff29c7ab9df5740a24f3258fec965bceea3e0bff081bd3bf09d1309e5a93e515783dbce6fe3d8d2cf51971daff783509a8d3a215e7fd89b7a9de1d8708b77e9dd42a31a4b621f151a0bed6abd79de70aa6fae5e90719abfe36a99a305bee0cb71136970d72256787c0584a212b57a020000",
    ],
    [
      "ETag",
      "Cnytzxd7Z0Z0Wkr3gG8qiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-98-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c87bd9a436814002448aba28651b529ab40969556d5362e040dd124c6d93a9aaf2df770c4dd7aa52fbb027cc39dfe55cec4772c7ca940c49ccf2fb1ac4c3a75b1e9323028ae618bdb90b0b35df890be5b9d7eef4be0e9309bf188d10c1344bd26d55c0b1e4b548400e57cb4e2e785d51c1f9310a1dfbdeb135b007b63db02cdff52de44928b2292befb4ba52951c76bb07ef4ece795e00ad98ec247cfb1cefee7add4af05b4894ecbeb6eca28becbe6f7a52f0842ac6cbd16a8905d412c41ab6941558c23f661a7f7d2ddd6174dbc911bc6309d024e175a974592891f03263792d1a55327c244d992f0e64194c8349644ce6ab59f47943b79abcf9625069acd702645d28e3db627e666c2af4baa112e4c6b8fa112c02c3d80848b848d72cdd1823e3c418cf4e31a8ff7ed5a6690386a6e15918197a9a2948c5caa68e88c605e81a9e4615be5d902650856e6d72ed9a036a79a61f67b19b649edd8f3313e2d88bdd3eb56333f11d70d21828f294566f58b4e4a5037dc7f27d2bf67d4a1d3feb7903d7a156cff23d6f60f61da7ef3aa96b02d91f913f82293865b2e292b5f322578b300ad6d162359b8ca3a06923a33893d3b638ddc4cb3a153689a077fadaeb2ce3e8a4871fcea260319e44e165d0ee7b0a394d1e96f7b8f18c1612104d05dd820271c6531c1a399f2fc3289ccfc65364344b3c3f202419fe7cfc47881eaa66caaaf96aaf81d3f81f0097b4a81bc4ae3d108becf747ffa7d04789df08c1ebddb2c9c52a585c9336b4800c0494c9c7db477093f8f0951e9e0c62f1d1a08d54f88f772d91da2411d0de39b66dea7b62fb760f5b69c042bdc9d9be7f18aed6d08ab085523d75d43e193dab26",
      "55cb671026f1aaccc2d977ccfe05d5020718b2040000",
    ],
    [
      "ETag",
      "hkIltOvrQt87Y7LquIcCoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90414f83401085ffcb78141229582d490fd6106d426a457bd134cd02030581c1dda1a669fadf3b4bbdecccbefd76decb9ce0a7ea720821adcadf01f5f1a6447eb74d826668d848e9a933080e20ab52c8fbe53aceeb4d90bea5c11e6f8349f7551fcaf95c0893edb155109ea0a8b0c90d84df27e8548bf26db7d3e344c1f8d85b65b9fa8c5ea2448496722bac3671fcb48823386fcf0ed4942658a0c62e433bb2d75463c64b9bd6a8b66fd03534e80c0d8cf0f8506a1a7aa5895c51dcd9a3eb4dfda9ef4f3d6ff630f3046c28535c5127ece603c486895593d09f84050be8b195dcc5781e449ed840db7f747164346b4de26bd05ade5ded9fc9466289ca7a40073225cb78adf87a3f5f00898bc15f69010000",
    ],
    [
      "ETag",
      "5IPLdjU4bOb4he+42nZjvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "d0",
      "bb",
      "f45b0d826cb24f44444765106c909fa662e96ad116da29b8ecee33bbc67c7778df805415d51a1b29e805bc8181d8dea49abcabb91f32b6b22f7db2cae3cdb03bcd200ba63b1819b90c7cf6913acb97faeac499fee4b12068917548683aa7eb7918563e9fb6b2b0a468dd5ee79e753c935b5566e3a832073b6b64bf86c5d1777284eb80073636b1847019875dddc9b84db6cce5426f8b4196fbc84126c73892e5bd807b4a928371a981e7cb364d7cc4c6aad08aa55cb4ead4aa2f6b311557326b1acbb26e87a6442675767096d46bf29a6ed0e4e9e9ff0223407bc53baa317f6c775ccf1b81bffad80c8a3efefb9474b4033fbf12283b4919040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-99-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "14fd2bc8fbdabc4a9a8448d11a11ba3025a405d26e9a2664cc85ba239862d329aaf2df77314dd6aa52fb09dbf79c7bce7df04cfef022215312f3ecb1866affe541c4e48c80a219be7af618b2fd55c27f78374bd75c7c5f5e2776369b2182372c4977650e1d29ea8a819c6e836e5689baa495101d4cd4b1acce60648e4c73341858636b803c0979bae2c51f64df2b55ca69af77d4ee66426439d092cb2e13bbd37befe9bc5756e2019892bdb7923d5491bd8f45bfe68251c54531db0668a0965045b0a33c470bff99497cf9367597d35d3743f0136740191375a11a5b98828922e5595de9ac64fa4cb4cd570712382bc70e0d26f27a574405ddc19991504523b52fc1b8f2376bc3f5ae36fe7a1eba1b2f0aeca5b39e77edcd6abbf602e36ee9f88ea1689c83e61a33e352df3cbca07e0252f142ab87cd73a3fcd220f7fd581a024a4b6883d1b83fa28349df8ad378ccd2897911a77d88e3493cbea066dc67d61086490c14795a54b368218a093006e7fd61948ec6e36898d2348a47691201b5fa3499c0e47c6091c319f95b71050b2e4b2179db2172e7bba11385fed6b3e7a1a34b48699dab456bac29e0b547850522e8839a0e4d940b546adaed7aa1e3cfedd0bd75da09af20a36c1f3ce28c539a4b4034adb0790aaab548a059edf9da5920584fecfa189464faeb99343d6f5cbc6af9891ee2001bbb4a7f4910faaef74ddb39226e695e6bc8537b20255abec7dad0f5e137227149db2ce466ebf83f49fbe4430a1514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7c8b64c6bd0271a5ca9f7319df9b4f04d46d841a15e2a6a171f0b6dc56a79026110c7efe96e1dfe01d388232878040000",
    ],
    [
      "ETag",
      "NC7egyFdiXNQHI3DJHPdCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd6e82401085df657a8b8944c542e2855adb92a8f507af1a635618110506779736c6f8ee9da5d6366d93f6669919be19e61cf604fb248fc08375121f4a94c79b18f5d404335465aa153f0aca158205a845cca43b6a4de3b15ff40fd37d7e1c685fec164edce930a1c22d6602bc136c124c2305def309729121b785949659beaa320bf4b130c57930f3c70f9c6714997cbc180ebbbde100ced6b531125aac2afe1f6dcbb3053b5acf708312f310cd2e85a41d86da373295c88a146b8a4a19a2820aae5ec492ca4248a21a576aae5bb39d86d36838b6edb65d9bc19442a113ca995dcc793fd0a4453aa35756090e03b20a59f0a63a5fb89c44951013fae3c06956fb7d05248624a3d59f5cc1eb6e05ff850fece2c0774e6454e6fa4add0f9fbabf8d634b3f47dd7583c10f426936ea8a04fe68300fbaa389e19617e9bda3463591c43e2a3416daf5e66dabedd4df5ded93719abfe36959a205a1e0cbf19868f0362255787e03ee0bec087a020000",
    ],
    [
      "ETag",
      "9M5QgNIpCqQknyEtIajU6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-100-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fe2b91f7b249b44d48499b4a152b6dd8a29596b529686c53eb3827c590c4c1768a00f5bfef24a15c84064f717cbecbb9f9815cf32c223d12f2f54d01f2eed39508c91e014dd7787b3439fe253bcabb981fdd6fa617a3d34be7c7fd6dbf8f085eb2144df3041a4a149281ea2de6cdb514454ea5100d146a58a6d9b01cdbb16dc7b2dc8e6b215141128f79768df44bad73d56bb576e6cdb510eb0468ce559389f4e9beb5d96fe5525c01d3aaf5dab38536aaf581eb612218d55c64fdc51c332814c825a4942798c333350abfbed66e729a36d708de700694315164bacc0b2598c862be2e64a54a7a0fa4caf3c581ccbdb1370c8ce17431093eaf685a92575f0caa8ce552822a126d1ccfa627c62a47af4baa40ad8cf3efdecc338c95042664b4e4d1cae81b87c66032329e712be34f619a366060ec9ff88151363502a579566513d030813293c78ef96f075512a846ad3ab8ec980eb5baa61bc66187c55dfb208c4d08c36ed839a0766832b70ded28048a3c5daa572c9a898cd9fb11b836b4add089e97ed8b6ad36eb806346cc7423b34b0f62d7726844b67be456720d23ae72a178dd35723ef3036f19cc1693e120f0aa32628a9d19d5c99545bccc536391087aa7ae6d19e5029dca11f893c09b0d86817fe6d5531fc39ab2bbf90dce3da6890244534953d0204f44844d23a7d3b91ff8d3c9608c8c6a94a73b8422bddf0fcf84e02eafbaacab6fe9e5b42bff1de08c264585d8d4076291ed76efff0af360e64fbebd2f31c8b15a94f98b28dcf45a81fc5c78b35fa4be9a410c1232f6f10620b80a7cfc6277af07c1f87ed04769fcc78563aa746112eac5e36955e623db6d3b6e9b5460a9dfc4bab6b9eb70a9512a420a997e2ca97e3d65c3aa50a19e4018c47d9954addafe03862db40bbf040000",
    ],
    [
      "ETag",
      "BNFYr7sEZSBzvOZDPh6Kzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90414f83401085ffcb782d11525303490f5689adc146c11ed434cd1606a4024377071bd2f0df3b4bbdecccbefd76decb9ce1b76c3208605f16c70e757f5320bfdb2646d3556ca4b4d418840920ab42c8e4f518f92f4b957d554fb794a8903ef9749acf8530e90fd60a8233e425569981e0fb0c8daa51beed767a9c2818f7ad5556eb8ff0398c45a829b3c27a13450f8b2884613b4ce040fb1873d4d8a46847b69a0e98f2caa635aa6e2b740c753a4503233c3e149aba5669224714c7735dc79b4d67d3e9ccf3fc7bdf13b2a25471498dc09b04c487895515d349d28205f4d84af07c3cff44beb389b6ffe8a267346f9ac4d8a0f574affe8f6433b16465dde1045225db58967cbd0f17ee663a276a010000",
    ],
    [
      "ETag",
      "SMqL9JHadZlD/oSaEoYtww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "7282300000d0bb64ad0e04aca43bb06a94521403836c183e5104211a6c68d2e9ddebf41af5dde17d83ac2868dfa777d6d00ebc029941342926b966c74253c4d37407b9b82589c20c6e886cde949cd9dde13e0b9b21ec2e660efdc8080c7fc74f63aab17ca8568ec36e87a5cb6229b83a6d1d6f1b99efb921f26eace3089aedd1d72bc8ca0462b265455bba6dbd402441eea7ac5fd28d0c3d73ce0b04c7eaf421e25960e18522b5383479af36f2e26bba1fccabf5aaca65888d92ec3c51b6d9319a86fb041372b1d1ba8e6391d88a19924ab6972b9d5b59e4de92c04a356b391d264f4fff0e1801fa753d73daa7e7c776638ad008fcd54feff24a1fff1d9a71cac1cf2fc1eecd9b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-101-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda3c08843ca4688d52b2466a484b48aa6a9a90ed5ca85b82193699a22aff7d17d374ad2aad9fb07dcfb9e7dc072fe459e43b32264ca4bf2b288fdf9e24231704344df1d5ee3f1c9773779e4fb75b6fd83ba465792bee261344889aa5e8bec8a0a564557250e3cdba9d96b22a6829650b13b5ecaeddb23dc7731ccfb64783918d4405597223f267a43f6a5da871a773166fa752a619d042a83697fbb7f7cea1d7294af9045cabce47cd0ecaa8ce17aadf33c9a916329f6cd6e8a05250c6b0a722430fffa83b76f931775bd07d3b45f04170a09ccb2ad7b52f4cc1659e88b42a4d56327e21c6e7bb0359fb37fe2cb2b8ccaa7d1ee7740f17d68e6a1aeb6301d63c5c2dad45305f85cb69b45805f17a76ed2fa7edd9ea66b30cd6d6fdb51ffa96a62c03c3b526d6a5b9057841fd1d282d72a31ed5cfb5f26b87169f075313505a41138c075d8fdac3ee88256cc093a1d3674917181bb2419f3aaccb472eb83b06147946d4b0682e73e6f64790b8769c785d277687308819008f9d5e623bb4c71297f5c9e982fc2985862ba10aa944d321721f2e223f8ec24d309b46be2921a155a6af1a637501ef3d6a2c1041ffa9e954478544a5badd8b20f2c3e92c5a6cfd66c23790527e5cffc61927345380685a62f334944bb9c3869160baf4af106c26767b0e2a32fef942ea9ed72edeb5fc8d1ee1006bbbda7cc93a0a17c10f63e78cd8d2ac3290437320055a7ec4dad0f5e91722714b9b2ce46ee3870fa4790a21811272fef534116c025fff6de7cd4730ee3eea288d775c1eae6a155e42b344c2d47b668ffaae3d24065cea4f31cfb3cf6dab73d419610fb97e2da9d97cacb411abd41b088338ffc0b4ebf417639b5d7e7b040000",
    ],
    [
      "ETag",
      "15YyMF4FnAVV682vgrrPiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92514fc2400cc7bf4b7d1d090b3064890f53404900718c2763c8792b30d8d67977c34cc277b737158d9ae8cbaded7eedfaffef0eb04bf2187c784cd64f25aaea6c8de6ce0621ea32359a1f05e51ac1013462cde4b057c9f6b0dfdb4ff661d4a95e64a7d875828b0b26b4dc6026c03fc02ac134d6e0df1f201719729ba4b4ccf2659d3960aac216e751389a5e739e516cf3e9623c0e2ec703383aa7c65818b1acf97fb43d1c1dd8d263882b54984bb4bb148ab628cdc8cad4222b526c682a95440d355cbf582b2a0ba1881a5c69b84db7e17a2dafd5f25cb7d7edb94ca624854928677831e705c190116948cf2c133c06541db2e2557deeb99cc4b5121b8ea691d7ae17fc0a2894a4e2e59f5cc1fb6e04ff860fecdd82ef9cc8a8cccd891a8e6f83dfc6b1a79fa3fa4134f84168c34e9d90683419cca36032b3dcc3bbf4cbcaa09e296223355a0fdd66fbbcd3f59a6fb65e91b59abfe31b55a20352f0edb8490cf82b916a3cbe02037f9a6e7b020000",
    ],
    [
      "ETag",
      "F9yc4FD9vMvRT5yzc5pk5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-102-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535b4fdb3014fe2b91f7b249d0266d492f52c54ac958a492b224054ddbd43ace49302471b01d3686fadf7792502e4283975c7cbecbb9f99e5cf322261312f1f4a60279f7e14a44648f80a6299e865e30aba2a35120a2ab7474f237fd73b93c4aa75344f09aa5685e66b0af442519a8c92ae8a45254259542eca3d0be65f6f62dbb6ff7fbb6658d87630b890ab264c18b6ba45f6a5daa49b7bb33efa442a419d092ab0e13f9e379f7b6d72da5b802a655f7a567176d54f71dd7c34c30aab928a6ab0033a814c835e4946798c313358e3ebfd4ee709a775204df720694315115bace0b259828129e56b25125937bd2e4f9ec8304cec29987c67cb9f2c28f1b9ad7e4cd27832a63bd96a0aa4c1b5ffce5a9b129d1eb922a501be3e2abe33b86b191c0848cd73cde1853e3d09879c7c6136e63fcac4cb30f1858b8a76e68d44d8d41695e34d98434caa0cee4a163eeeb41d504aa51ab0dae87a64dad91398e9268c89251ff204a4c88a251343ca0fdc864e3010ce20828f274addeb068210adb8e636b60d38119db3d1699bd3eb54ddb8441629a89c5a08792633c23db3df25b720dc75c9542f1b66be4c27743671dfa2b6f3e0b9da68c8462678edbe4ea229ee7a9b14804bd51d7b68e72814ef5085c2f74fcd93c74cf9d76ea0b4829bb0b6e70ee09cd14209a4a9a8306792a626c1a395b066ee82ebdd90219cd28cf760845263fee9f08e15dd9745937efdacb1e34fe3bc039cdaa0671db7e108b6cb77bff570842dff54ede96a025568b32bf10859bde2a906f2bc7ff4eda231f129050b0f73700c14de0fd1bbbbb3d08c6fb833e4ae33f2e1c53b50b93d02e1ecf9b321fd8637c0e490396fa556c30b0761dae356a45c8a1d00f25b5b7a76e5813aad4230883b82f5ed3aaed3f5d2cd52ebf040000",
    ],
    [
      "ETag",
      "TNSAubB8Sobjg8GzgxhOBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cbeda32d98152a16fc3087a85064d6091b2212db6b57d7f66a926e76d2ffbe4bb62fc9e5bde7ee7dc91d3ecb268308ce6571ed50f50f059aad2d12d45d65345f2d351ac10334b260f2369a8faeab6d3f59eedee3b7f12dff51a22f66332674fa81b584e80e798955a6213adca19135f2d8e9a4dc46c64cdf5a65bd795d2c17090b356556d8ece3f8691e2f60380e1e5ce89c608e0a9b14edca56d10553b3b669b5acdb0a7d4d9d4a5183835da350d4b55211f9acf862fce88b3008832014623a990a262b4aa529a96178bf03f631646495d037a7050b285772f0dc9d5f2c8f6da2e33f3aef0dea17456cac31735de7ff4c3693e1ac4675e8412af93756a5f97b0fbfad9e81ea6a010000",
    ],
    [
      "ETag",
      "x+B+qHQy7GSYLX0xfzr1yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb64ad0c2220e94efe422305c51636198c413e0a1110814eef5ea7d7a8ef0eef1b2484d0b6c55d5dd20abc8131112047389729aa793e0f370f9fa2bec362557c91b4ecdd759d6b111c58d67fc0b10a5dffe8f792d2f88e67dacc330f9019c8f5d078e20369b79571765de7a66f3b9779b2722d81daef81570f77798ad8a376f89026d04095a25ee6fc76ad2d76c779ca6722517dabf0f5cf8d65514dbe06c24872296d87bde4a09291d828e5b81751cca6f0b00cb5944ccd5d0f6e5634c83a5bb10eda0b64a418467b1165c5462c0832e4be5a9adccbcbff0566800e2c6f688bf3e7f6a504e10cfcd5c7ddc8e8f3bf4a938636e0e7175354184619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-103-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85546b6f9b3014fd2bc8fbda3ca109448ad628a52b5b425642da4ed3846c63a85bc0149b6e5595ffbe6bd374ed26ad9fc0bee7dc73ee039ed01daf52344384e7f72d6b1e3fdc0a828e10533887db48a52458655f3e3be4dabd0e77bfee9c865ccce780e09a25715917ac2745db502667bb6d3f6f445be346881e24ea8d86766f34b127b63d198dbca93702a26445b6e2d51dd06f94aae56c303888f77321f282e19acb3e15e5cbfde0613ca81b71cba89283b79a0390918377543f168262c54535df6dc1412b5993b012f3023cfca1a6e4e46dee3ec7653f07f003a70c532ada4a695f90828a2ae379db98ac68f6848ccf572f68ebaffc656c5151b4659554b86447568a154ed463cdacb368b3b682f06c13ad1771b00993edf2dc5f2ffacbcd6ab70eb7d6d5b91ff996c2a460866bcdad13730ae100fa29938a57463dd6d75af9b943c1bf83d1049096ac0b26d3e1048fdca1473232a5996b1f936cc80871c9f418db64483d87392961187846d4b070252a4653371be36942c6999338eed84b5c371d43c2b1739c4ea664e878687f847e365cb1532e6b2179d721741505b19fc4d12e5c2e62df9490e1b650a79d315dc06b8f0a0a04d07f6adaeb2817a0a4db1d84b11f2d967170e977135eb11cd3c7ed3dcc38c3856480c60d344fb1662d5268180a176bff14c066625f0f418966df9f90eeb976f1aae52ff41806a8ed2af344db380ac24fc6ce0171898bd6401eba175483e51ba80d5cef7f0012b6b4cb822e767ef40d755711cb58c32afafe34016c02ef7f6d87cd0730ec3ee8480567581e2ab50a6d58b744dcd47b607b13cfb1910137eaefd874e88c0f6dd339744656b24a3d97d46d3e54da89b5f205a4ff28bb3034eddaff06c91532207b040000",
    ],
    [
      "ETag",
      "RtdbILfKJ4bX8XNUxk4rbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8d92614f83400c86ff4bfd2824232853927d409dba64a2632c2e31cb72833251a0787768c8b2ff6e0f751a35d12f475b9e96be2fb781c7bc4ac18755be7e6a50b67b6bd4131344a89a422b7ed45429040b508b359375e839c1fe7c2efaabd60da9bd95132f9e0c064ca8e41e4b01fe06b21c8b54817fb7814a94c86d09154d592dbbcc02ddd6a6388da35178c17949a9c9c3d9781c9c8c87b0b5768da9d062d9f1ff685b6c2d78a05584194aac1234bbd4921e30d123235389b22ed056d4c804157470f7622da9a98524b2b9623b3dd7763cd7735dcf718efbc70e93052542e754313c9bf282a0498b22a21796091e03b20b5971d69dcf5cced34e89094761ec1d740b7e05242624d3e59f5ccdfbde0bfe0d1fd8bb05df39515253e91d753ebe0e7e1bc79e7e8e3a0be2e10f4269766a87c4a3abe1340eae6e0cb778977ed26a543792d84885c643a7777074d8f77a6fb69e92b19abfe36bd9a00589e0db71996bf0335128dcbe02c8a7028a7b020000",
    ],
    [
      "ETag",
      "pN61A+XXa7by3NoyWrQ6TQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-104-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "b4",
      "7d",
      "69a5d8e66283b164a58e4d5b54c74e304e54b595bdc040360196b04b2a37f2bf77803817454d9e8c67ce65e6ecee3db9617944462460c96d05e5eec3350fc811014913acfaac185ce7e2f646f3ecf9ecfbc94e9ee87fcfc76344b09a256856a4d011bc2a4310a3f5aa9b94bc2a68c97907853a9adaef68a6611a86a969b6656b481490c67396df20fd4aca428c7abd837937e13c4981164c74439e3dd67b777aaf28f9358452f45e7af6d046f4de713d4e794825e3f978bdc2092a01e50632ca529ce1891a059f5f6a7719cdba0982ef5808340c7995cb7a2e9408791eb3a42a1b5532ba27cd9ccf3ec8ca993b535f992ed70bffe396663579fb49a142d96c4a10552a952fdef254d916e875450588ad72f9cdf11c45d99610f232dab068ab8c956365b2986131a212b6caaf4a550dc0e2dc3d757da50e34022159de4ce2d320857a8a87b4dcd7875413a844bfb6b9b154936a43d50ee2c00ae3a13108621582601858036a046a68f7a11f054091276bf58645739e9b41640232237b180c0d30079146a16f599a6599966de8c3a16e534357c9fe88fc29998419130517ac4d8c5c7aaeef6c7c6fbd984e7ca75923a698caac1dae5ee2f99c129744d01b7bedeb2ee3e854c7ef2e7cc79b4c7df7c2694f7c0e090d77ab5b3cf398a602104d4b9a8184f29447181a395bae5cdf5d2e26736434c77876400832fa79ff44f0774593b26c7e6b2fb3dff81f001734ad1ac45dfb4134b2df1ffd5f615647f0a680aeea6a47d53bda00957e23142f7a2b42ced78ef783b4250f6228210fdfbf04086e1aef3fd8c3e341303e1ff41112ffe39d",
      "0b45ed1296d0de3d96359b3eb06dcbeaeba40197f2556fd8570f21d71ab5226490cb8795dac75367d6b42af108c2265e9985bbf88add7f702123dfbe040000",
    ],
    [
      "ETag",
      "Tip5jnsqk1R9LDKBytB2zQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "414fc3300c85ff8bb9aea2a1a5639376605060624c50d8094d5396baa523ad4b923255d3fe3b4ec725765ebef83df908df5593c3147655f9d3a1e92f4a746fbec9d076da592e2d35166104e864c9a4eaafcb4b3dce847d89a39b583c870ff7fa309b3161d517d612a647282ad4b985e9e7111a59237fdb6ecd309131d7b75e59ac3ed2c73463a1a6dc0babf572793b5fa670da9c46b0a75d86051a6c14fa91ada13d2ab7f069adac5b8d81a5ce28b430c0c34369a86ba5210a5809441807228992284a84988c2782494d4aba8a1a86d7efc03e8e9cd4191d382d78c00c2d072f86f397e52b9f68f38fce7b87f6d5101b5bf49ee1d9ff8e7c26c7599de970044af2369e2a77be9ffe00a119d3dd6a010000",
    ],
    [
      "ETag",
      "cy5g/l7R1sM43841K0FDlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ffedd34b7282300080e1bb646d9941c492ee78141168114a81ba61420c24e02303192238bd7b6daf51bf13fc9bff0610c664184a71e9c819bc80092da18295801b96dbb4f20457fe7ead4e639ef6366ada701ba7436ed77b9f3febc2d3986e7e5ea4c41f5e238b90f6cc1da799f2983bd9565d47ebce43c92eb27689cb9aea82ebcaa7519704d09c5de3288e4131c645acc550d2113e19bc2c671e3a6ddee66ab6d1a7d71345fd17b5376f512358ce204c2536c3f9586781f4df79972c57a835dd5a3d672b6d2eac6be71c449e347277d8fe461e1cec85957e0aae8665746d42958787ff0b2c00b972d693a164f7db351dc205f85bbf141327f7ff2d827ad283ef1f66d3cb3219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-105-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2bc8fbda2410c88348d11aa5b4cb144807a4dd344dc83817ea96608a4dabaaca7fdfc5345dab4aeb276cdf73ee39f7c133b9e3e58ecc48caf3fb06eaa72fb72225270414cdf1b51edf5d8e963f2f023f2e8666f4dd59c6fce6713e47046f5992eeab027a5234350339db46fdbc164d456b217a98a86799a39e35b6c7b63db62c77e25a489450646b5ede21fd46a94ace0683a3783f17222f80565cf699d8bfbe0f1e8683aa16b7c0941cbcd71ca08c1c7ca2fab5108c2a2ecaf93642078d843a813de5057af847dda5a7ef73f739ddf773043f70069431d194aaf585299828339e37b5ce4a66cf44fb7c732091b7f696b1c144d1eccba4a47b38317654d1443d55609c871bdf5805e79bd05fc4ab4d9044cb6f9ebfe82f37ebad1f44c6f5372ff40c45d30234d7981ba7fa16e005f57720152fb57adc3eb7ca2f1d5a7d1c4c4b4069095d309998636a4d4d37cdd209cba6f628cd4c48d3693a19513b3599eb80b34b81224f8b6a162d4539312ddb711c37b1c7d938711c6a26ee68344c1c664e2d36ca76301d92c30979acb982332e2b2179d721721dae622f89c36db05cc49e2e21a34da1ce3a636d016f3d2a2c1041ffa9e9d046b940a5b6ddab20f6c2c5325e5d79dd84d79053f614dde38c335a484034adb1790a6a5fecb0612458f8de1982f5c42e8f414966bf9f49dbf3d6c59b96bfd2631c606b57e92f89e270155c683b47c4152d1a0d79e80ea442cb37581bba3efc41246e699785fcd87ae12fd23d8590410d25fb7c9a08d681cfffb6e3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb3db2dda9edda44836bf521e64cad63dbda1c6d46d843a95e4aea361f2bedc41af90ac220ce3fd0ed3afc054d1fbaee7b040000",
    ],
    [
      "ETag",
      "r6kP5CXGNMTl20SJ4CTihw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:49:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c23010c7bfcbf93a22131db28487a153964cc4311f8c21a46e070eb6dd6c3b0d10bebbd7a968d4445fdabbf677edfdffed16565999820b0fd9e2a946b93e58a0be314184aaceb5e2a9a2522158805a2c98cc364777a51f05c36adc0b0fa58c37aba7daebf79950c9231602dc2dcc33cc5305eefd164a5120972594d745396b320bf4ba328b93380a46979c17949a7c741b86de20f46167ed0b53a1c5ace1ff5136dd59b0a48708e728b14cd0f452495a62a203235389a2cab1a5a896092a68e0666321a9ae84246af14acb6e9fb46ca7e3743a8e6df7ba3d9bc99c12a1332a19be9d7083a0498b3ca21796090e03b20959f1bc199f8d5769a3c484c128768e9b06bf02121392e9ec4faee27e1f053fc307f66ec1774e1454977a4f5d84d7de6fc7b1a79f479d7bb1ff83509a9dda237170e54f62ef6a6cb8e9bbf4c15aa31a4b6223151a0fedf6f1e949d769bfd97a46c66abec7d5b2460b12c1bf63986970e72257b87b05cb14e5ad7b020000",
    ],
    [
      "ETag",
      "iz2YnERIHpP9L/rrTzkquA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-106-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553eb6fda3010ff5722efcba615e2102004097588666b341e2d04aabd048e31a9db244e6da75355f1bfef9c943e36ad553ec4bafb3deecee77b74cdf32deaa3982737259377efae448c8e10d32431517b752e4fe555e76396de7c95e52a2e6c990c0680e086a54856a4aca144292953fde5a299485116440ad100a18683bb0da7eb765db7eb38bee73b40542cdd8d797e0df44bad0bd5b7ed8379331122491929b86a52913dc6eddb965d4871c5a856f64b4f1b6c94fd86eb712a28d15ce483e5022a2815936b96119e420d4fd46dfce9a5769393ac9900f8965346281565ae4d5d204145bee349292b55d4bf47559dcf0e68118c8351648d66cb69f47e433243de7cb088b2d66bc954996aebf37c36b13605785d12c5d4c6ba380de681656d24a3426ed77cbbb106d6b1359c9e405069286e63fd2c31761944c7e1248c2c33d12d539ae7552911895366ca781857f8ef2d1902d1605827d71eee12a787fd78177b74d7733bf10eb338eec55e87b831a67e9bb5b73123c0d346bd62911c0610777c4c3d0c1ff57b9e8b2180db1dafebb5e2b651621eddfaad18ed8fd06fc9353be1aa108ad7234317f3300ad6d17c391d0da3a06a6347602c277571a689e7756a681240aff4b537592ec0c9cc3f9c46c17c388ac255505ff9982584de2d6ee0d27724550cd044928c692627620b434367b3451885b3e9700c8cea1ecf0e0885fa3fee9f08d15d514d59577fe3d56d57fe07c08aa46585b8ad0fc841fbfdd1ff15a270122ca2e1e4ec7595166ee1066e359c4ee4b4fa8edb77da4d8cf17710ff054458fe5a179d2f83f9375487e66cc724cbe9db7b01e02af1f6233e3c2800c393021fd84ecd610da9322e54b27a1d7956355fb3a17adf6ba10a2cf5df39177bde61ee46c328b28ce5faa1a5fa41993156a9523d8220095b340da75f20fb0740a17c74d2040000",
    ],
    [
      "ETag",
      "b/VQrHrj5+mlqKruVbp/rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "30",
      "10",
      "86",
      "ff",
      "cb",
      "f9518843226624fb20067509210eb7186396a5830341e8b1b66808d97ff7cafcd2bbbe7d7aef9b9be0bb96058470acabd3806abcaad06c6c93a11e5aa3b9f4243582036844c524be9f641b7d5cdfa91bd5c435a5d2db3e6d562b2674fe859d807082b2c6b6d0107e4e204587fced7050f344c6ccd85b659d6ee3e73863a1a3c20ae92e491ea22486f3feec4043c70c4b542873b4237b450de6666dd36ad1f52dba9a0695a386199e1f2a45432f1491cb8aeb2d02d70bfcc0f703cf5bde2f3d265bca85a94932bc7b03f63164449bd12fa7050ba8b9e5e0e57cfeb07c6b13edffd16834a85f15b1b146ebb9b8f83f92cd6438ab51033a900bdec64b6d2ef7f31f4e5c50006a010000",
    ],
    [
      "ETag",
      "eWqnlBY+5r/rjEioNn1TFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ffedd34b7282300000d0bb642d0e60f8759788830848a551c00d033196c847f954c04eef5ea7d7a8ef0eef1ba494b2ae4bfa6bc16af006a65436e6749e8928ba8b0fe2298d2fe4910149789427a89f05c111cd4bd59e52e5a4dde2bdd48dcb6caaba032cfc28fbc2ba75fdc0a1b317086c0ae9523b263fb0becc93383adbae3b0d8d19ee6850ad7bdc0f86a6956aac6a26b3aa129105aa87c9aeeb3bad956c849c1fb1b575b6cbd04e832af0b8f330ec4c2c2c936c882fe26b2bdd033979f7458d5a3be822b589b54330aecc7693275131e46baa876a84372b4439fc3ccb27db5ba21559b8db62fef2f2ef801960e38db7ac4bf873fb42318c19f8ab9ff4d38d3dff6396b6ac053fbf42f87ea019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-107-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da2490072491a2354ae9ca94900d48ab699a903117ea96608a4daaaaca7fdfc5345dab4aeb276cdf73ee39f7c133b9e7654ae624e1f94303f5d3973b919033028ae6f8ea89b5ad66b7e67733dcacef76d3e98d05abc7c50211bc6549baaf0ae849d1d40ce47c17f6f35a3415ad85e861a29e653a3dcb1ed9a3916d5933676621514291ad79798ff45ba52a391f0c4ee2fd5c88bc005a71d96762fffa3e380c07552dee80293978af39401939f844f56b2118555c948b5d880e1a09750c7bca0bf4f08f9a26e7ef73f739ddf773041f3803ca98684ad5fac2144c9419cf9b5a6725f367a27dbe3990d05dbbabc860a268f6655cd23d9c19295534564f151897c1766378fee536d82c236febc7e1eacadd2cfbabed7ab7f143e3e6ca0d5c43d1a400cd3516c6b9bef97841fd14a4e2a5568fdae756f9a543dec7c1b4049496d00563c7b4a93535674996382c9b8e26496642924c1367424789c9666318a70950e46951cda2a5281d46c7cc7686f1c449b3786c27c33849c18e47d3d4492709668519399e91c79a2bb8e0b21292771d22378117b97114ecfcd532727509196d0a75d1196b0b78eb51618108fa4f4dc736ca052ab5edf6fcc80d96abc8bb76bb09af21a7ec297cc01967b49080685a63f314d41b9162c388bfdcb81708d613fb710a4a32fffd4cda9eb72edeb4fc951ee1005bbb4a7f4918059eff4ddb3921ae69d168c8a13b900a2ddf626de8faf80791b8a55d16f273e706bf48f71440063594ecf3692258073effdb4e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7853d3431c3906870ad3ec41ccb39b5adcdd166843d94eaa5a4",
      "6ef3b1d24eac91af200ce2fc7dddaee35f847f291d7b040000",
    ],
    [
      "ETag",
      "IoL6t9h0J0SMLjU88W1eCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92614fc2400c86ff4bfde84858c0014bf8008a8a023218d1c410726c0506db3aef6e2a21fc777b13d1a8897eb9b5ddd3aeefbbdbc1264a4370611e2d9f7294db93256acf04235479ac153f324a158205a8c592c9d3d7e8be66dfc6f66a98ddcc37de83e7d5c96b369950c10a1301ee0e1611c6a102f77107a94890db028af3249d1599057a9b99e2d81f7507579c27149a7c30e9f55aed5e07f6d6b131145acc0afe1f6dd3bd056b9a8f708112d300cd2e99a43506ba6b642a9164319614e5324005055cbc584aca3321894a5c29d9e55ac9762a4ea5e2d876a3d6b0998c29103aa294e1c99817044d5ac4237a6199e030208b90152f8af399cb515828316177e03bd562c1af80c4806438fb93cb78df95e0dff0811d2cf8ce8984f2541fa9cbde5debb771ece9e7a88b96dff94128cd4e1d11bfdbef8cfd567f68b8e9417a7bab510d25b1910a8d8776b95a3fab39e5775bcfc958cddf71b5ccd18240f0edb88e34b80b112bdcbf01518bd5177b020000",
    ],
    [
      "ETag",
      "+xiW71Kl1hPpJbkQXQQ8oQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-108-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535b6fda3014fe2b91f7b2690542028120a10ed1748b44a10ba1d5b44d603b4eea92c4c176a8aa8affbe93a4acadaa8d27c239dfe5dcfc84b63c8fd008119eec4a261f3fdc0b82ce10d33881a8b3153b112c0683d5e7dd43e159abfdf5d69b8cc780e0154be1ac48594b895252a646ab653b91a22cb014a20542adae396c751ddbb16da7db75076e17888aa5f18ce75ba0df695da851a773346f27422429c305576d2ab2bff1cedeea1452dc33aa55e7ad67076c54e784eb792a28d65ce4e3d5122a2815936b96619e420d2fd4887c79abdde6386b2700de73ca30a5a2cc755517485091c73c2965ad8a464fa8aef3d5075a7a336f1a1ad3c56a1e7edce0ac226f3e195819ebb564aa4cb571192cae8c4d015e775831b5316ebf798167181bc9a890d19a471b636c9c1b93f905049f258c5fa569da0cc233ffca0f8d6aa411539ae7752d212629abea789e97ff7e4d15016b706c92eb81e9e0eed074494c06341eda7d129b8c902119f4b14d4ceaf6582f220c034f57ea350be722b786966bf701c41cdbc2436c911e655144e2c8b5716c3a049361dcef0dd0e10c3d48aed905578550bc9919ba0dfcd05b87c16a3e9d845edd468c612e174d715513afebd4d02480fed3d7a1ca72014ed502fc79e8059369e8df78cdce672cc1f471b983adc738550cd058e28c6926af44044343d78ba51ffa8bf964068c7a91d7478442a39f4f2f84f0b1a8a7acebdfcacbe9d5fe47c00d4ecb1ab16f3e50171d0e67ff56b89c2d26a735da7d401c7e0308eebc5140df575ef00335a180c54cb29c9ebe0000d789d3eff5f876000caf077c9486ff707054552e54b2e6f0785697d8b02db367bb2eaac152bfcbf56deb38e14aa3526419cbf5734bcddba90656a74af5170449b897b93fff0ad93f3a06938dbd040000",
    ],
    [
      "ETag",
      "6koqoRO77U+qwpE2UvPkEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d35ba4a1d20711813db2a5508ca38b009a110dc2cacadbb241daa50fffb9cb24becbc7cf17bf215be757d82291cb5fa69d174770addda3739dab674964b43b54508009d504c9a5cdf67938fcd65ddec5e644ae3dd4a69359b3161e5175602a657283496270bd3cf2bd4a242fe763898612263ae6bbc922edf17af8b9c858a4e5e586eb3ec699e2da0dff7019ce9986381066b897e6463e88cd2a53ead1555536268a935122d0cf0f0a00cb58d3044212b61341a87511227719c44d1e47112315992144e53cdf07603ece3c88932a70ba7050f98a1e5e0c570feb2fce013edffd179e7d0ae0cb1b145ef39baf93f93cfe438ab332d0620056fe34dbbdbbdff03d32969c96a010000",
    ],
    [
      "ETag",
      "rRi/L9ZSwQpYFcIo8YPgig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb642d0e8828e90e880866b0044611370cc668d022e1279f4eef5ea7d7a8ef0eef1ba494b2ba4e9ae2ce1ee0030ce90c4ee9140bddb4af9c3b51d944478bb12dd1474f3ed9cd200d08127a09cd7d0cf58e5fe53bb5e8282e51868f5b7ba561c7429ceac5a9dfe59e9f9de7a72a0f1fa262014f50abfa867e7d420fb9bc2e0f22f2bb7cb3968de59c0cf166a9e4a1c48ba183792acc07d2ccfed08c2e5ce0983b651bdcb87a2672af1168d86ab078fae8d35594dd6d0d7bc57008d168b9cf0cb80ae64e77f4b1e5d518b55fbb553c2b8a42baa7b89bbebdfd5f6002582fb28ad549f6daae6a104ec05ffda419047bfd37595ab10afcfc02d2f8a29a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-109-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "f771b44de83395aad1953022b5e94853d0344d91eddc04431a87d80155a8ff7d370e6520a4f129b6ef39f79cfbc833b9174542a68489eca1866affe54e32724240d30c5ff7c1c3a818daaef355064bf91dcfe327ff6a36438468588aeeca1c3a4ad6150735dd6eba5925eb925652763051c7b1dd8e33ea8ffafd91e3b863d741a2823c5d8ae21ee9b75a976adaeb1dc5bb9994590eb414aacbe5eef5bdf778da2b2b79075cabde7bcd1ecaa8de27aadf72c9a916b2986d37e8a05650c5b0a322470fffa8093b7b9fbb2be8ae9b21f85170a09ccbbad08d2f4cc165918aacae4c56327d26c6e79b03d9784b6f11595ce6f5ae880bba83132ba19ac67a5f827511ae57961f5cacc3d53cf2d741bc595c7aab7977b15e6e57c1c6bab9f442cfd294e560b8d6cc3a33b7002fa89f80d2a230ea51f3dc28bf74c8ff38988680d20ada603cb647d499d82e4bd998a793fe90a536303661e321ed339bbb0318240c28f28ca861d14216900cfa033671e2fec01ec6033e716396523b662c751267324e211d90c30979aa848673a14aa944db217213fa911747e13658cc23cf9490d23ad7e7adb1a680b71e351688a0ffd47468a242a252d36e3f88bc70be88fc6baf9df01232caf79b079c714a730588a615364f43b59209368c04f395778e6033b19fc7a022d3dfcfa4e979e3e24dcb5fe9110eb0b1abcd976ca2d00f7e183b47c435cd6b03796c0fa444cbb7581bba3efc41246e699b855c6dbdf017699f4248a182827f3e4d049bc0e77fdb71f3118cbb8f3a4ae31d9787ab468557d02e9130f5beb04fede1e9d825065ce90f31fc1edbd6e46832c20e0afd5252bbf958692b56ab5710",
      "0671fe8169d7e12f88693f2c7b040000",
    ],
    [
      "ETag",
      "yNq6n5091+oNLoB6n57wIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92614fc2400c86ff4bfd3a121670c0123ea0a22e01449889d110726cdd186eebbcbba993f0dfed4d44a326fae5d6764fbbbeef6e0b0f491e820bab247e2c51564731ea6b13cc5095a956fc2828570816a016319314c9a18cef5e6fbddb974a3cea974ea5bbcffd3e132a586326c0dd4294601a2a70efb7908b0cb92da0b4ccf2659d59a0abc214e7fecc9b5c709e5168f2c9cd683438190d61671d1a43a1c5b2e6ffd1b6d859b0a1d50c23949807687629246d30d09e91a94456a4d85054ca0015d470fd22965416421235b8d2b09bbd86edb49c56cbb1ed5ea76733995220744239c337735e10346991cee8996582c380ac43561cd5e7139793b05662426fe23bed7ac1af80c48064b8fc932b78dfb5e0dff081ed2df8ce898cca5c1fa8f3d1d5e0b771ece9e7a8b3813ffc4128cd4e1d10df1b0fe7fe603c35dc622ffda4d2a8a692d84885c643bbd9ee1e779ce6bbada764ace6efb85a96684120f8765c261adc48a40a776f43483c637b020000",
    ],
    [
      "ETag",
      "ofrErgZzXIXxyaqtx7yt8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-110-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "db",
      "30",
      "14",
      "fe",
      "2b",
      "91f7b269b44de8bd52c5aa92b16ca5656d0a9ab6a9759ce36048e2603b4c08f5bfef38a15c84341ef614e79cef722ef63db916794c462412c94d09eaeedd958cc8010143138c96eb2bffdbd722ea774fbc9b41c83f8652a9643c4684b02c4db322858696a562a047eb553351b22ca892b281420dcf731b5eafdd6bb77b9e37ec0f3d246a48f94ce4d748bf34a6d0a3566b6fde4ca44c52a085d04d26b3c778ebf6b055287905cce8d64bcf16dae8d61bae47a964d408998fd72baca0d4a036905191620d4fd438faf452bb2968d64c107c2b1850c664991b5b174a3099739194aa5225a37b52d5f9ec4056fecc9f86ce74b19e87efb734b3e4ed07876a67b351a0cbd4389f978b53675ba0d725d5a0b7cec5177fe93bce5601932ade8878eb8c9d2367323fc6a0fdfb55ba6e9b6168169c06a163c719833622afea08699482ade16156c1eb15590235e85627377db747bd813b8c78d4677cd0ee46dc85281ae0c6693b72d9b0039d38028a3c63d52b16cd654e077d3e8cbdceb0ef72977386c481cb631878dcebc4e07523f7103a3d4e7607e48f12068e852ea416f5bcc8c53208fd4db85ccfa793d0afdae01467725c17679b785ea7c12611f48fbe76362b243ad9e107f3d05f4ea66170eed7fb9e4142d9ddea0637ce69aa01d154d10c0ca85319e3d0c8d9621584c1623e9921a35ae2d91ea1c9e8e7fd1321bc2baa299bea6bbd7a9dca7f0f38a76959216eeb03f1c86e77f07f0a5d94f88d10bcdf359b7c5ffbcb1fa40e2d8183829cbdbd7d045789b7dfe9fecd20185f0dfa6883ff78d998b62e4c417de944561558b30fdd9eebbaa4022bf32ae775dafbe95a0dab0819e4e6a1a5facdd86155a9523f",
      "82308977651ecc4f30fb17fb5797c9b5040000",
    ],
    [
      "ETag",
      "uUjEKJpb75G1q8Tf+Torrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "82",
      "40",
      "10",
      "85",
      "ff",
      "cbf45849d8926a24f1a0d55412625a5a4f8d312b8c880586ee0e3684f0df3b8bbdecccbefd76decbf4f05dd41984702af29f164df79023bfbb2641db966ca534545b840920eb5c485fed2b56cbdbec42915d3f6eaba7e76e9d2f1642d8f4829586b0877381656621fceaa1d615cab7e3d18c1305e3ae714ab4fbdcbc6e12112aca9cb0dbc7f172156f60380c13b8d229c1331aac5374231b43574c397269adae9a123d4bad49d1c2088f0fb9a1b6d186c813c553caf7d4349806c154a9f96cae842c29d55c502df0fe03c487897599d0afa4050798b195e0e7f1bc891cb844877f74d531da3743626cd179fa77ff17729958b2b2697102a9966d6c0bbedf873f5b012ca46a010000",
    ],
    [
      "ETag",
      "01Umt1Av7hoIsD+Hm25yDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d0bb64ed3880624c77342023548581fa61c38418208a0a81f0737af73abd467d77784f402865751d378f2bbb830f30100d4de934518c63ab8ce14ecd653f5b4282c771c13322737c2a6c7ebec2146a2ba98783d719503ccec331caabe4a87ef96bda07525b59842027687dcbe9f26d69652739373d06f74e9145e1305fa04351298b2df26e8893c24eaeee25dde18be286b38d65f27beded68e3a778d3eb58b3dbc8147707b7890595a4127cd9b06f925588e24292437adecbcc45b4dc1aaabb768328e8f67d19cdc7ac6b697c33ac9b0aedb4d72f83a82253535bd79fbebdfd3b6002585f72c1ea98bfb6cf748426e0af7edc0c257bfdff644430017e7e0130103b5e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-111-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2bc8fbb826405e9048d19aa5748d96900d48bb699a90712ed42d608a4da7aaca7fdfc5345dab4aeb276cdf73ee39f7c123b9e5e59ecc48c2b3bb06ea870f372221270414cdf0b5da7edc0ddc1f89d77cfedaa8a169dd9636cbe67344f096256951e5d093a2a919c8d92eec67b5682a5a0bd1c3443ddbb67bf66438190e27b63d75a6361225e4e99a97b748bf56aa9233d33c8af73321b21c68c5659f89e2f9ddbc1f98552d6e802969bed63451469aefa87eca05a38a8b72be0bd14123a18ea1a03c470fffa8fbe4f475ee3ea7453f43f03d674019134da95a5f98828932e55953ebac64f648b4cf1707127a6b6f19194ce44d51c6252de0c4d8534563f55081711e6c37c6ca3fdf069b45b4dafa71b8bcf0368bfe72bbde6dfcd0b8baf002cf5034c941738db971aa6f3e5e507f0f52f152ab47ed73abfcd4a1d5dbc1b4049496d00563c79a50dbb5a6499a382c7587e324b52049dcc419d36162b1e90846fb0428f2b4a866d152942e38f668e0a4f1d8a5d37834195bb19b4e4771bab79de1c8a16c94527238217f6aaee08ccb4a48de75885c05abc88ba360e72f1791a74b486993abb3ce585bc04b8f0a0b44d07f6a3ab4512e50a96df7ca8fbc60b18c56975e37e13564943d847738e394e612104d6b6c9e827a23f6d830e22f36de1982f5c4be1d8392cc7e3d92b6e7ad8b172d7fa64738c0d6aed25f1246c1caffa2ed1c1197346f34e4be3b900a2d5f636de8faf01b91b8a55d16f27de7053f49f714400a3594ecfd69225807deffdb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7893db026eec0221a5cab37b1a9ed1edbd6e668334201a57a2aa9db7cacb4136be4330883387f5fb7ebf0172e718a697b040000",
    ],
    [
      "ETag",
      "pO+U28XbEuBKut3/0kn1cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "40",
      "0c",
      "c6",
      "bf",
      "4b",
      "7dcb925da6cc91f882fd5149b6a983451363961b74c8048a7787ba2cfbeef650a751137d73b4e5d7d2e7e1b6f090950978b0ccd2c71ad5e6204573658319ea3a379a1f15951ac10134326552f8c7eecbcd207d589bf5309877fc30e85e3f9f9c30a1e37b2c24785b586598271abcdb2d94b2406e8b29af8b72d1640e984d658b61340ba6679c1794d87c3a1f8ffdfe78043b67df984823170dff8fb6bb9d036b5ace70850acb18ed2e95a235c626b032b52caa1c5b9a6a15a386066e5ea48aea4a2aa216575a428896703b6ea7e30ad1ebf6049339c5d26454323c0f79413064643ea36796092e03aa0959f1aa399fb89c258d121b06d3c83d6c16fc0a288c49258b3fb98af7bd97fc1b3eb0770bbe73b2a0ba347bea747ce1ff368e3dfd1c35f4a3d10f421b766a8f44c1641446fee4d27277efd2fb1b83fa52111ba9d17a28da87c7475db7fd66eb80acd5fc1dcfa81a1d8825df8ef3cc80b792b9c6dd2b6acc6ce67b020000",
    ],
    [
      "ETag",
      "1A86xXCgkjtjDIU3ASI7Ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-112-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535b6fda3014fe2b91f7b24985c4041240421d826c8b44a10da1557711388e93ba0d716a3bad58c57fdf49527a51b5f689e0f35dcef98efd806e781ea3218a787a5b32b9fb742d2274849826299cde77ae4976559af2e7e2ec72c77ad9e5eddfe9d96804085eb114d916196b29514acad470b56ca75294059142b440a88571a7851ddbb16d07e3813bc040542c4b663cbf01fa95d6851a9ae6c1bc9d0a91668c145cb5a9d83e9d9b771db390e29a51adccd79e26d828f303d7e34c50a2b9c847ab2574502a26d76c4b78063d3c53e3e8eb6bed3627db760ae03b4e19a15494b9aefa02092af284a7a5ac55d1f001d57dbef8404b6fe64d4263b258cdc3cf1bb2adc89b2f0651c67a2d992a336d7c0b1627c6a600af2ba298da18173fbcc0338c8d6454c878cde38d31328e8df17c6a3ce336c6efd2b26c0a85997fe28746156acc94e679dd4d48a28c559d3c26e6bf5d5445201ab49ae2dab51c82fbd6204a2297267dbb1725168ba27ee4f6881d5974d065dd38620478ba52af592417b91bbb9163634c23cbb6bbd8497a49a7cf925ec57412dc4fe27e8409c6687f84ee25d76cca5521146f524317811f7aeb3058cd27e3d0abc7480824336d9aab8678d9a7862101f4ce5cfbaaca0538552bf0e7a1178c27a17fee355b9fb194d0ddf216f69e904c31401349b64c33792262080d9d2e967ee82fe6e31930ea559e1e100a0d7f3d3c13c25d51a7acebdfcacbe9d6fe07c039c9ca1a71d77c2048617ff47f856518f8f3efef4b8c0b981664fe000a6e7aa380ce565e70899aa380254cb29c7e7c03005c173e7eb187d70360783fe0a334fc870b4755e542256b2e1edfd66336ec8ee5f6b08b6ab0d46f6a0eb60e09571a9522dbb25c3f8ed4bc9e2ab0ba54aa271014e1becceba8f6ff00752ca5ecbf040000",
    ],
    [
      "ETag",
      "w2jalhu/rZOQYye5lYqzDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90416f83300c85ff8b77056980c454a41eda896d9558d5b1f53455550a86d1020e4968852afefb9c6c97c479feecf7943b5c9abe84044e4d3d8ca8a6871acd872d72d4636b345f927a8de0011a5133b91b5e86ad9cb2156ec2cbfb79ec9be91ade964b2674f1839d80e40e55836da921f9be432f3ae4b1e351b98d8c99495a65b3fd4a5fd39c858e4a2b6cf759b65a6729cc87d983339d72ac50615fa05d29159db1301b9b568b4eb6e86b1a55811a1cec1ab5a2510a45e4b3e20741e807711447511c048ba745c0644b85300df50cef3f817d0c19d1e674e3b46001e54a0e5eb9f3caf2a34d74f847d79341bd53c4c61a4bd775fecf643319ce6ad4881e14827fe3ad317feff91756928a4f6a010000",
    ],
    [
      "ETag",
      "PqFqNpyLAeI2kMjuniyv2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34b7282300000d0bb64ad8e882074079a283060a1229f4d06420484568428269ddebd4eaf51df1dde37c808a1c380d9a5a15fe00df06ca1cfc82c9f1bf17d2e0e9e3fe5a92c7d5aa8b60f816910f568918895f9ce47b706898f1ccaf179696b4de48a505d78f9badbbb8b8d351a52849406e63053ba53820bb33ed2ad48fde2bada1fcc5b36ae5827cc876dd970bbda738f13a8b4d865bd5437a7eaeea2d4a18a2667c21b70b18b3d69532424447ee908126ab40eefb00a28c73c6a97a7b6f4d4403dda573971caf0aae9ebeafcc0aa3504ef9791452ddca1ca301c3bc64c1ea64ba15bb397977f074c007d74754f075c3fb7cb8aae4fc05f7dcc78479fff4d9af5b4073fbf0879f87d19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-113-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fd2bc87b6d02849440a468cd52ba32256403d26a9b26648ca16e01536c5a4555fefb2ea6e95a555a9fb07dcfb9e7dc0f9ed01dab333447292bee3bdaee3fddf2149d202a7101affb5f79bdb71fa33ba3fbe67ce5e665f3e5362b160b40b09e2570d594742478d7122ae6bb685cb4bc6b70cbf908128d4cd31a99b6655b966d9aeecc3581286899af597d07f41b291b31d7f5a3f8b8e0bc28296e9818135ebdbceb0f13bd69f92d2552e86f35759011fa07aa9f4b4eb064bc5eec2270d009da26b4c2ac040fffa8597af636f798e16a5c00f881118a09e15d2d7b5f9082f03a6745d7aaac68fe8494cf570714796b6f156b84975d552735aee88996618913b96fa876116e379a1f5c6cc3cd32f6b74112ad2ebdcd72bcdaae779b20d2ae2fbdd0d3244e4baab8da423b53b7002ea09f512159add4e3feb9577eee90ff7e303d01a4051d82c9ccb0b1e9186e9aa733923bd6699a1b344d9d74768aadd420ee944eb39462e02951c5c235af273380b89695e0097193299e3a8933b1cdc4496d97d8d353cbb5313a9ca0c796497ace44c3051b3a84ae433ff69238dc05ab65eca91272dc95f27c30d617f0daa3840201f49f9a0e7d947150eadbed07b1172e57b17fe50d135ed302937d740f33ce712928a0710bcd93b4ddf00c1a8682e5c63b07b09ad8f76350a0f9ef27d4f7bc77f1aae52ff41806d8db95ea8ba238f483afcace117185cb4e411e86036ac0f20dd406ae0f7f00095b3a64413f765ef8130d4f21cd694b6bf2f13401ac021fff6dc7cd0730ec3ee8080977581e227a15d2d2618998aaf7993d311cd3b49102b7f25d6c621ac7b6f539fa8cb4a2b57c2e69d87ca87410ebc40b088230ff40b5ebf017fa9644447b040000",
    ],
    [
      "ETag",
      "yZfny6wSk0uJ8Go1HpBjdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d926f4fc2400cc6bf4b7d3b22131cb0841743514900f93312a321e4d8ca186eebbcbba984f0dded4d44a326fae6d676bf767d9edd0e1ee32c04179671f454a0dc9e44a8c72698a02a12adf89153a6102c402d2226c78de1e9fd6bdd6e6e5aa95a264ee7aeeb9f45ed36132a58632ac0ddc12ac62454e03eec201329725b404991668b32b3406f73539cfa93def09af39442930f67fdbed7e977616f1d1b43a1c5a2e4ffd136df5bb0a1e5045728310bd0ec924bda60a07b46a612699e60455121035450c2e58b4852910b4954e14ac5b66b15dba939b59a63dbad46cb6632a140e898328667535e103469914ce8856582c3802c4356bc2acf672ec761a9c484bda1efd4cb05bf02120392e1e24f2ee77dd7827fc30776b0e03b27522a327da4aefab7de6fe3d8d3cf51979edffd4128cd4e1d11bf37e84e7d6f3032dcfc20bdb3d5a84692d84885c643bb5a6f9e379ceabbad1764ace6efb85a16684120f876dcc41adc954814eedf00106bbcb67b020000",
    ],
    [
      "ETag",
      "Q7N/Zx418j9msbl6BXET2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-114-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536d6fda3010fe2b91f765930a79818680843a46b32d12850e42db699bc0712ea9db244e6da75355f1df77494a5f54adfd44f03d2f77cfd9f7e49a1731199188a73715c8bb0f5722220704344df1341e5e84459142986581637ec92f2e6e7c48c76344f09aa5685e66d051a2920cd468bdeaa652542595427450a863dbfd8eedf6dc5ecfb5ede1606823514196cc78718df44bad4b3532cdbd79371522cd80965c7599c81fcfcd5bc72ca5b802a695f9d2d3441b65bee37a9409463517c578bdc20e2a05720339e519f6f0448da3cf2fb5bb9ce6dd14c1b79c01654c5485aefb4209268a84a7956c54c9e89e347d3efb202b7fe64f4363ba58cfc38f5b9ad7e4ed27832a63b391a0aa4c1b5f978b13635ba2d72555a0b6c6f9777fe91bc656021332def0786b8c8d2363323f369e705be37765593d868559701284461d6a0c4af3a2e926a4510675270f8905af175513a846adb6b819582eb53d6b1825d180255eef304a2c88222f1a1cd25e64b1611ffa71041479ba566f58b4c00c9c28725d3b8e3d8b3aec90b1883ae0b8dec0c643660de3e4d019787d9bec0ec85fc9351c73550ac5dbd4c8f93208fd4db85ccfa793d06fc648282673dc36570ff1bc4f8d4322e88db97675950b74aa5710cc437f399986c199df6e7d06296577ab1bdc7b42330588a692e6a0419e88184323a78b5510068bf964868c6695a77b8422a35ff74f84f0ae6c52d6cd6fede5f61bff3de08c665583b86d3f08a6b03bf8bfc22a5c06f36f6f4bd012a745993f88c29bde2a901f6b7ff993b4474b484042c1debf01086e0aefbfd8fdeb4130be1ff4511affe38563aa766112da8bc7f366cc96ed589e87893460a95fd586036b9f70ad512b420e857e18a97d3d75604da9528f202ce27d993751edfe01ec8fc8bebf040000",
    ],
    [
      "ETag",
      "d9XTnngeTllI2/BmXXqEeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90416f82401085ffcbf40a49098606130fb592d6d4d08ae5648c5961a028307477b03184ffde59ec6567f6edb7f35e66804bd5e630875355fef4a86f0f25f2d636099abe6623a5a3d6203880ac4a21f3ddf6a379afaf9738ed388c57c16c1544dbc54208937d63a3603e4051619d1b98ef07685583f2ed78d4d344c1f8d659651d7f45af51224243b915e274b3795e6e22180fa303673a2558a0c636433bb2d374c68cd736ad514d57a36ba8d7191a98e0e9a1d4d4774a13b9a2b89e3773bdc00f7c3ff0bcf029f484ac29535c512b70ba03f161625527f42b69c1027a6a2578319d5791039be8f08f2e6f8ce65393181bb49e8f77ff17b29958b2b2eed1814cc936de2abedfc73f7d32f3746a010000",
    ],
    [
      "ETag",
      "dSQOmKlvkNUpt9ND64D6EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00c0bfe4ac4e41a0496f20880a693b05b5e1c200461028898090d0e9dfebf41b75ffb0df20c932da7571cf2ada80172013152db285c7a1b5ce0b2874e6343d51dd68684ff97c54d97b1935552c35543358c0ac1976a83e1382c3dbdce48a4c08dcfbf395b071981a5552d050d4c2d8d8c5cac9a767a5bb623fafc5c8f695bd91b837acdb61486bd50985185dd548df46e636e5813f7996dfaddb7dc0cf473962edca144861f515c85a43bb310d5e274dd1c3b69b4e78f2846a0ea5b9c52e6a0e03d91c7b9dfb99472e7abffcc0b6b58ccccf6d49bc70b77878f8bfc00c50c12f2dede2cb7dfb52476806feeac7bde4f4fedfa2494b5bf0f30bd211b00e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-115-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "da2410f22252b446095d2325a403d2aa9a2664cc85ba25986293aaabf2df77314dd7aad2fa09dbf79c7bce7df0421e789190298979f65843f5fced5ec4e48c80a219bec2e2cfd2ba5af69910c1d04e0e96749ddb6c3643046f5892eecb1c3a52d4150339dd05ddac1275492b213a98a86359c38e35b247b63db22c67ec58489490a76b5e3c20fd4ea9524e7bbd9378371322cb81965c7699d8bfbdf70efd5e59897b604af63e6af65046f6be50fd9e0b461517c56c17a0835a4215c19ef21c3dfca326f1f9c7dc5d4ef7dd0cc107ce803226ea4235be30051345cab3bad259c9f485689fef0e2470d7ee223498c8eb7d1115740f674642158dd47309c685bfdd182bef62eb6fe6e16aeb45c1e2d2ddccbb8bed7ab7f102e3e6d2f55d43d13807cd3566c6b9be797841fd04a4e285560f9be746f9b543abcf836908282da10d46637344ad89e9c4693c66e9c41ec6a909713c89c7436ac7267306304862a0c8d3a29a450b518069f6ed816945d62075a20135ed281ef7ad88811d5be9c01ab10925c733f25471054b2e4b2179db2172e3af42370afd9db79887ae2e21a575ae96adb1a680f71e151688a0ffd4746ca25ca052d3ee9517bafe7c11aeaedd76c26bc8287b0e1e71c629cd25209a56d83c05d54624d830e2cd37ee12c17a6257a7a024d35f2fa4e979e3e25dcbdfe8210eb0b1abf49704a1bff27e683b27c435cd6b0d39b40752a2e53bac0d5d1f7f2312b7b4cd427eee5cff96b44f3ea45041c1be9e268275e0ebbfedb4f908c6dd471da9f08ecbc364a3c22a689788eb7a5fd97dd3193a43a2c195fa14c3899fdad6e46832c21e0af55a52bb",
      "f958692b56cb37100671fe9e6ed7f12f698f964b7b040000",
    ],
    [
      "ETag",
      "eCzD1PD2cooS53dv1sE9Yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92dd4ec2401085df65bc2d090d50a0091745113180fc942b43c8d24e4bb1edd4ddad8610deddd98a68d4446fb633d36fa6734ef7084f491e820bdb247e2e511eae62d473132c5095a956fc2828570816a016319398d5ebcbfb79d31b74b4d3df6f8b61738e5eafc7840a769809708f102598860adcc723e422436e0b282db37c536516e843618a4b7f319a0e39cf2834f974351e7bfdf1004ed6a531145a6c2afe1f6deb93057bda2e3042897980669742d21e033d323295c88a146b8a4a19a0820aae5ec492ca4248a21a576ab6ddaad94ec369341cdbeeb6bb3693290542279433bc5af282a0498b7441af2c131c066415b2e2a83a5fb89c849512138ea6bed3ac16fc0a480c48869b3fb982f7dd09fe0d1fd8d982ef9cc8a8ccf585ba1d3f78bf8d634f3f47dd78fee007a1343b7541fcd164b0f4bdc9cc70ebb3f4fe41a39a496223151a0fed7ab3d36a3bf5775bafc958cddf71b52cd18240f0edb84b34b89148159ede001f3b3d5d7b020000",
    ],
    [
      "ETag",
      "em00SJQ4AE8t6BjbpG4QeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-116-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "91",
      "f765930a49200482843a04d91a894207a1d5b44de03897d46d8853dba1aa2afefb2e49e95a556b3f11ee9e97bbc7f623b9e5794c8624e2e95d09f2e1d38d88c809014d53aceef76705dc8fe3dc49d8e4aa6376137997a4a3112278c552745764d052a2940cd470bd6aa75294059542b450a865db6ecb76bb6eb7ebdab6d7f76c242ac89219cf6f917ead75a186a679346fa742a419d082ab3613bbe7bab9ef98851437c0b4325f7b9a68a3cc0f5c4f33c1a8e6221fad573841a9406e6047798633fca3c6d1d7d7da6d4e77ed14c17bce803226ca5c5773a1041379c2d352d6aa64f848ea395f7c90953ff327a13159ace7e1e72ddd55e4ed17832a63b391a0ca4c1bdf968b73635ba0d73555a0b6c6d599bff40d632b8109196f78bc3546c6a9319e4fb118530d5be37769595d86c559701e844615680c4af3bc9e24a45106d5144f69056f0fa922508d7e4d73d3b75c6a0f2c2f4aa23e4b06dd5e9458104583a8dfa3ddc8629e034e1c01459eaed46b16cd450e7d3ba209b5bc4e02c8f15c8b592c71a9e7b024f1064e3fee39839875c8e184dc4bae61ca5521146f122357cb20f437e1723d9f8c43bf5e23a198cab419ae5ae2e59c1a9744d03b7b1daa2e17e854c51fcc437f399e84c1a5df9cf80c52ca1e567778e609cd14209a4aba030df25cc4181ab958ac823058ccc73364d4c77871442832fcf5f88f103e1475cabafeadbc5ca7f63f022e6956d6887df3416c72389cfc5f615a45f0ae40c7ea582dabd3b27ba8f407a178d11b11f263ed2f7f92a6b4840424e4ece34b80e0baf1f1833d3e1e04e3f3411fa5f13fde39a62a1726a1b97b7c576fdab03bb68512a4064bfda6e7f4",
      "9c63c89546a5083bc8f5d34acde3a932ab5ba57a066113afcc3c987fc7ee5ff760611ebe040000",
    ],
    [
      "ETag",
      "vvHpewAdn4fcCW2/3frqfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "df",
      "c5dcae125151512bed82a10a26950185b10b344d59ebfe8cb6ce9274a8aafaee381d37b173f2c5e7c823fcd45d0e111cebf2dca31e6e4ab4efae49d1f48d355c14750661016865c964f27a36d5cb1dc94bd1ed2afc6a941261b95c3261b20a5b09d108458d4d6e20fa1ea1932df2b7c341cf1319b38372ca7af3193fc5290b2de54ed86c93e46195c430eda7059ce89862811abb0cdd48a5e984995dbbb446b6aa41cf50af333430c3f343a9a957521379ac7842049e08fcc0f70321c2fb5030d950266d4d1dc3db0f601f4b563629fd725a70809e5b0e5ecce78565df25daffa3abc1a279d3c4c6069de7edd5ff915c26cb59adee710199e46d3cd7f67a9ffe00500fb4356a010000",
    ],
    [
      "ETag",
      "LOqshM4oavfnWheVlpp19g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "d0",
      "bde45b1d14c4a47fbe401111e810d41f06f036bca490c40a76baf73add463d7b38df284e531022929f25d4e80df5f1848cd2d1aec10b8315e4a2b7fe7a3376e6ac2ad4be3b53bf7cbfdbbeb550ec7d71002adccde35c5773969c5da2188f5088f0eb64b124c96665c63479ba4833d177b3805c2b870fc98edbaee3505a89b9976aaac602460f5b7e0f705e7bc6fe7034c34e09f52e2c625ab4f636ef3f3275b506a9c5c67165caba6d1409c33d5e42781907c720aad98d573a75718d2bc0a59f9a632b6bad40dd66d3a13751962d10f36adc68962a78f4f2f27fa10182aec93988287f6e57a7840cd05ffd48f60d3cff2f20e6c0d1cf2ff9ae8c9119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-117-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fa34014fd2b64f6ab2da50f284d9ab5565c1b5bba02d5b89b0d19a6171ca50c3283c698fef7bd0cd6d5dd64fdc4ccdc73ee39f7c10bb9e7c5964c48c2b3871aaae72f772221470414cdf0f5a938a9e172242ec2e0c7cdc5050bcc13e77c369d2282372c4977650e1d29ea8a819c6cc26e5689baa495101d4cd4b12ca763d9037b30b02dcb755c0b8912f274c98b7ba4df2a55ca89691ec4bb9910590eb4e4b2cbc4eeeddd7cec9b6525ee8029697ed43451469a9fa87ecd05a38a8b62ba09d1412da18a6147798e1efe50b7c9f1c7dc5d4e77dd0cc18f9c01654cd4856a7c610a268a946775a5b392c90bd13edf1d48e82dbd79643091d7bb222ee80e8e8c2d553456cf251867c17a652cfcb375b09a458bb51f87f3736f35ebced7cbcdca0f8deb732ff00c45931c34d7981ac7fae6e305f5b720152fb47ad43c37caaf1d5afc3b988680d212da60ecf46c6a8d7b6e92260e4bc7835192f62049c68933a283a4c7dc210cb70950e46951cda28528ac417f34e8db76bc65c9301e3a7d2b76537063643aac6f8d9cb16393fd1179aab882532e4b2179db21721d2c222f8e828d3f9f459e2e21a575ae4e5b634d01ef3d2a2c1041ffa969df44b940a5a6dd0b3ff282d93c5a5c79ed84979051f61c3ee08c539a4b4034adb0790aaa95d862c3883f5b79a708d613fb7e084a32f9f9429a9e372edeb5fc8d1ee1001bbb4a7f4918050bff9bb673405cd1bcd690c7f6404ab47c8bb5a1ebfd2f44e296b659c8e5c60b6e48fb14400a1514ecf3692258073effdb0e9b8f60dc7dd4910aefb83c4c362aac827689b8aef795ddb77aaeed120daed4df31abe78c0f6d6b7234196107857a2da9dd7cacb415abe51b0883387f5fb76bff1bc106a4c87b040000",
    ],
    [
      "ETag",
      "wnBueQ5oKSRZYKKcR/B7HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7d",
      "856464ca1cc91e3645c56c73327c50b32c27144481e2dda199cbbebb3d9cd3a889be1c6df9b5f4ffe7d6f0985709787097674f0dcad55e86fad20421aaa6d08a1f35550ac102d42263f2645a0667af3a5c45f9b93fe989e0f4fa26cd060326547c8fa5006f0d698e45a2c0bb5d43254ae4b6988aa6ac966d66815ed5a6388fc2607aca794989c9a757e3f17034f66163ed1a13a1c5b2e5ffd1b6d858f0407721a628b18ad1ec524b7ac0580746a612655da0ada891312a68e1f64526a9a98524b2b9623b4ecf76dcaedbedba8ed3eff51d260b8a85cea962f86ace0b82262d8a905e5826b80cc83664c5697b3e73394f5a25260ca691bbdf2ef8159018934c967f7235ef7b2ff8377c605b0bbe73a2a4a6d23bea647c31fc6d1c7bfa39ea7818f93f08a5d9a91d1205137f1e0d2733c32db6d2472b8d6a26898d54683c743afb87073db7f36eeb1119abf93b9e960d5a100bbe1d67b9062f1585c2cd1be61686407b020000",
    ],
    [
      "ETag",
      "FNmIHztRyTiJEM7aIGYZfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-118-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b3014fe2bc87bd9b426c11008891475514a37b45cba84b4da4d893186ba054cb1499755f9ef3b40d38baab54fa073becbb9f90e5df32c440314f0f8a664c5eedd9508d011628ac410fdf8a7f3e56f946ee7e3d8726f77e3d39bafb93f1a0e01c12b9624699eb096146541991cac96edb810654e0a215a20d4c2d86961dbb44dd3c6b8dfeb63204a9644139e5d03fd52a95c0e3a9d83793b16224e18c9b96c53913ec43b5ba39317e28a51253bcf3d3b60233b6fb81e278212c545365c2da18252b262cd52c213a8e1911a069f9e6bb73949db3180b79c3242a9283355d505125464118fcba25645833b54d7f9e4072ddd893bf6b5f17c35f3df6f485a91371f3422b5f5ba60b24c9476ba984fb54d0e5e974432b9d12ebeb80b57d33605a3a208d73cdc6843ed581bcd4e20281514b7d17e95ba6e52884ebca9e76bd544432615cfea527c1224ac2ae37e5cdecb2d5504a2c0b049ae7bba4db0a3f78328e8d1c831ad20d259103841cf2266a0d37e9775c38011e0a94abd66914c64b66106a46b6227ea3a8e1e599141229b187a807148ed28b42d6c596618a2fd11ba2db862275ce642f26664e862e1f9eeda5fac66e391efd66d4404c672d2145735f1b44e054d02e895bef655960b70aae6efcd7c77311afbdeb9dbac7cc2624277cb1b587a4412c9004d0a9232c58aa9086168e86cbef47c6f3e1b4d8051eff1ec809068f0f3ee91e0eff27acaaafe565e76b7f63f00ce4952d6886df38330daef8ffeafe07b5377e98fa667afab18baa1b774a3852d1f1b036c0e70b7adebfa0f10ff0d4438fe46177d5bb98befa8092d58c40a96d1b7ef02c075e2ed477c7850008627053e709d8ac3195259b9d08235e7c8d3baf9866d60dc331d54830bf522e7f4f4c3dc2b8d4a91a52c53f72d350faa1a639d2ae50308927045336ff619b2ff007ef6a74cd2040000",
    ],
    [
      "ETag",
      "+x/HzfmvOCg5EwyCFqKpTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "30",
      "10",
      "86",
      "ff",
      "cb",
      "ed",
      "abc282e056a11fd64d3a41ca6a5bc618a5a4f17476eab924ae88f8df77b1fb92bbbc7972efcb8df05db5394470aeca9f1ef57057a2ddba2643d3d7d670e9a835081ea09525932f69b25b97f8d108d104e1fbb64bd5beba2e974c18f5858d846884a2c23a37107d8ed0ca06f9dbe9a4e7898cd9a1734ab2d9c7eb3863a1a1dc099b439a3eadd218a6e3e4c185ce1916a8b155e846769a2ea86ce2d21ad97435fa867aadd0c00ccf0fa5a6be939ac867c517e2d1176110064128c4e2612198ac49495b51cbf06107ec63c9ca3aa32ba70507e8b9e5e0c57cfeb21cb844c77f743558346f9ad8d8a0f3bcbff93f93cb6439abd53d7aa0246fe3b5b2b7fbf40756de922b6a010000",
    ],
    [
      "ETag",
      "DLISGgeYm11m36WQpLcTiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd34b7282300000d0bb64ad0e48c1d29d44034a318102966e183e29820a24a0049ddebd4eaf51df1dde1d245946bb2eee9b23adc11b1893b93ecb6676fb6aa0a29c0719752db89525213535642827b92bb033781ebf1d9493a1ec895415de0df3ef164d8705df8f6717af88dfd50cf72a0b0bcc90773c5c9356d0294fa6a386769070884a82b7cb78c3d2cd8bff6ed7d6d732859418d059f86618f68e56e4f66587ad8ea3eaf3230e5cb1968714458e228b7e956aad8081bf5fdcfc40761bc38faeee909b5ac8cd6a9e1eaa523d9b1d11f8c48e173babd69147b996b261f6f4f47f8109a0a22d39ede2f2b15d51757d02feeac7fdd8d2c77f83269c72f0f30bbe22516f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-119-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fbb8e641204f295aa394aed102d90869354d13b2cd85ba259862d3adabf2df77314dd7aad2fa09dbf79c7bce7df0486e459190196122bbaba17af87023193921a06986af17a2bfd38bea4fd167ce17f8e8e75f7e3b6c319f2342342c45f7650e1d25eb8a839aedb6ddac9275492b293b98a863dbd38e3d72468e33c2e3786a2351419eae45718bf46bad4b35ebf58ee2dd4cca2c075a0ad5e572fffcdebb1ff4ca4ade00d7aaf75ab38732aaf78eeaa75c72aa852ce6bb2d3aa8155431eca9c8d1c33f6ac24e5fe7ee0abaef6608be171c28e7b22e74e30b537059a422ab2b9395cc1e89f1f9e240b6deda5b46169779bd2fe282eee1c44aa8a6b17e28c13a0f37beb50ace37a1bf88569b20de2e2f3c7fd15d6ed63b3fd85a57175ee8599ab21c0cd79a5ba7e616e005f513505a14463d6a9e1be5a70eadde0ea621a0b48236188ffb236a4ffa5396b2314f27ce90a57d606cc2c643eab03e9fbae0260c28f28ca861d1421690ba5360e349cc274e12bb43e6c674dab7e3419a8e266ec2a7439791c309f955090d6742955289b643e42a5c455e1c85bb60b9883c53424aeb5c9fb5c69a025e7ad4582082fe53d3a1890a894a4dbb5741e4858b65b4baf4da09af21a3fc617b87334e69ae00d1b4c2e669a87c9960c348b0f0bd33049b897d3d061599fd78244dcf1b172f5afe4c8f70808d5d6dbe641b85abe0b3b173445cd2bc3690fbf6404ab47c8db5a1ebc34f44e296b659c8b79d177e27ed5308295450f0f7a789601378ff6f3b6e3e8271f7514769bce3f270d5a8f00ada2512a6de27f6c01eb8c31131e04abf890dc7f6b16d4d8e2623eca1d04f25b59b8f95b662b57a0661",
      "10e71f98761dfe02812ad4647b040000",
    ],
    [
      "ETag",
      "Hi0UtArzn0b3Ke+MlKx3bA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ec2401086df65bc2d091529d8840b908398821c8a5c1843d67628c5b65377b71a427877672ba25113bde9cecc7eb33bffbfddc3539c85e0c2631c3d1728776711eaa90966a88a442b5e72ca148205a845c46430ad3747de6469d76fba77cb7327ef633e885a2d2654b0c15480bb87758c49a8c0bddf432652346d941469b62a330bf42e37c5b93f1b8e079ca7149a7cbcf0bc76c7ebc1c13a3586428b55c9ffa3ede160c1961e67b84689598066965cd216033d34329548f3042b8a0a19a082122e372249452e2451852b15dbbeacd84ecda9d51c0e1b973693090542c79431bc98f380a0498b6446af2c131c066419b2e275f97de1721c964a4c381cfbce4539e057406240325cfdc9e53cef46f0337c60470bbe7322a522d327aaefddb67f3b8e3dfd3caadbf67b3f08a5d9a913e20f47bdb9df1e4d0cf77094ded9695413496ca442e3a15dbd68d61b4ef5ddd62b3256f33dae96055a1008fe3bae630dee5a240a0f6f80efe6327b020000",
    ],
    [
      "ETag",
      "cQ58MLPW15JDVW26pFepGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-120-1636336119791",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535b6fda3014fe2b91f7b2492d24844b40421d82b48d44a183d06ada26b01d27354de2d4765aa18affbee3a4f4a26ae38970ce7739373fa37b9e476880084f1e4a26775fb682a013c4344e20dac6dec5a5ff7469efc8b53f996fb36db21b8f86434070c352382b5276aa4429295383d5b291485116580a710a42a74ecb3e75ba6ed775bb8ed3eff51d202a96c6539edf03fd4eeb420d9acd837923112249192eb86a5091bdc69b8fad6621c59651ad9a1f3d9b60a39a475ccf5241b1e6221fae965041a9985cb30cf3146a78a346e4fb47ed06c7592301f023a70c532aca5c9bba40828a3ce649292b55347846559def3ed0d29ffae3d01acf57b3f0eb066786bcf9666165add792a932d5d6f9627e656d0af0bac38aa98d757be92f7ccbda4846858cd63cda5843ebcc1acd26107c91b07e97b6ed52084f83ab20b4cc4823a634cfab5a424c5266ea789957f0794d86803538d6c975cfee62c7b3fb24263d1a7b6e87c43623c423bd0e76894dfb6dd68e08c3c0d346bd62e15ce46e8b7a7dc268cb631e8dba5055c7c136a59d0e6ec71e21fdd8716337eaa0fd097a925cb309578550bc9e19ba5d04a1bf0e17abd97814fa551b3186b94ceae24c13efebd4d02480fed3d7de64b90027b3806016fa8bd1380c6efc7ae7539660ba5b3ec0d6639c2a06682c71c63493572282a1a1ebf9320883f96c340546b5c8eb0342a1c1afe73742b82baa29ebead77875db95ff017083d3b2423cd61fc841fbfdc9bf15cea7f3d1718d460710fb3f00823baf15d08f95bff889ead082c54cb29c1ebf00005789e3eff5f076000caf077c9486ff70705419172a597d783cab4aacd92dc76dd91eaac0527fcab96eef3061a3611459c672fdd252fd76ccc0aa54a95e4190847b9905b30bc8fe0563a09624bd040000",
    ],
    [
      "ETag",
      "4a8GHEwH0ybPEDOjmjgyCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1636336119791"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2",
      "40",
      "1045ff657ca59142aca1090fd6344a028d16891a43c8b21d6ab1ed94dda9a469f877678b2f3bb377cfcebd991e7e8a3a8310f6457e6ad1743739f2ab6b52b46dc9564a43b5451801b2ca85e4c4aea2f78fcfd3ea7692691b27c1dd627d9ecf85b0fa1b2b05610f8702cbcc42f8d543ad2a946fbb9d19260ac65de39445f2163fc5a90815654e4836cbe543b48ce1b2bd8ce048fb140f68b0d6e84636868ea879e1d25a5535257a965aa3d1c2000f0fb9a1b65186c813c5f32763cf0fa6c1741af8feec7ee60b5992565c502df0660de2c3c4aa4ce92c69c101666825f861387f459eb844db7f34ea18ed8b2131b6e83cc757ff47729958b2b26971045ac9369e0bbede2f7f4ab53fc46a010000",
    ],
    [
      "ETag",
      "tNsMBWXYqM/2dcsEN65ISw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:50:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
