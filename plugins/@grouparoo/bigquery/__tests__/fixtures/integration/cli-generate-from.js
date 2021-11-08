const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335949768";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6e82300000d07fe9b3104285c1de90c82538449481bc348416a80842a95c34fbf799fdc63cff709e20cb73320c88df6ad2824fb064b22ee6a2d7691babaccc30c243730876459529d7e6017798d3d8d6270c7b64ec5ddc1d8793eaa6bdc9d87443b76a96d7d3d98554ad789cdfed2d64d1321a8937f5a9900949ec24814cd3baa5cdd8fb1f97c21d669ab3ac94423964707fe1896f95215ad657c13f078e70aa91058546aa74cf8b506b4b8daecc58f3fc36c2117f50ad5f5a81722a158d815b626b3efb566b9c6ac7717b576a73724ec9c1b3d897d12b493456e2dbdbff055680cc1d656440f4b51d2ababe027ff5115f3af2fabf2119230cfcfc0288778ada19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
        query: 'SELECT "grouparoo" as message',
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636335949768",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8552ed6f9a4018ff57cced6b15107933315ba76471b33655dcb2a589b93b1ee8b5c0217774338dfffb1e406d9b26ed37b8dfdbf3f6441e441193316122ddd550ed3fdd4b462e08689ae2eb8fef8b22f73d517efd7377f5ef5ad4ebebd9ee6632418668548ae665067d25eb8a831a6fd683b49275492b29fb68d4b7fa966bbbb6ed04a3c0737d9429c89285281e507ca775a9c686718a1ea452a619d052a80197f9f9dd781c1a6525ef816b65bc4e34304419ef667ece24a75ac862b259637eada0da424e4586153c0b63f6e5b5f340d07c9022f95170a09ccbbad04d5568c1659188b4ae5a57327e226d952f3ec83a5c84d3a877fb1c704b7a54f572508aa6801e31282d8ad621a22c83467dec71fe76b08d806aaaa003b79ee952cb370396308f27beedb0c404c67ce639d466260f46308a1950d4e9c6bd55d14216be03961307e00623d7358781cf7c8a26a61f5b5e30f4b9e5bab6432120870bf2b7121a6642955289ae53f26b358fc26db4da2ca79751d8b691d03ad3b3aeb8a68997756a6c1249eff47568502131a919db7c1985abcb6934ff19769b5a404af97ebdc35d2534538074dc70b42f715ee46613ae7e93ee6905095450f08fe788e416f8e84e4f578354bc1b4c511aff71695c3519bc826e79226f6a39a91dcbf487a42557fa0d66050e62e76b691c2187421f1beaae861c8e61b53a9310c4992fe7cb6f88fe070ffca016b3030000",
    ],
    [
      "ETag",
      "KJLnm87ipBZhMxOiuSODqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335949768"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d90414f83401085ffcb7885a415c5b6490f6d63b44aaa521b634c0f5b18561018dc593495f0df9da51ebcecceccbe79efcb76f091d729cce090ebcf16cdf14ca37d72458cdc9696e56aa866040fd02a2d4a7d1fbd640f7779f9ba58ac7eb898a8f391d2f3b9283879c74ac1ac832cc7326598bd7550ab0a65ad4266a59d8f3d366eb07d8ed79b1be92b4a5dbfd945d162195d43bfef3d28e810638606eb049d6163a8c0c4ae1d2babaa29d1676a4d820c837878d086da4619225f26fed81f8741180497d38be95538115d4989b239d522dd6d41522c5955c6f42da4301681194a81ce86f3ebbfa7e3daffad2c8f16f9d190c433bae4d18962458ecc0ab1352d7a9028f991dbdc9efafe170bbf69116e010000",
    ],
    [
      "ETag",
      "gKLWfOJilYAACzsj8a20ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
          "select count(catalog_name) as __count from INFORMATION_SCHEMA.SCHEMATA",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636335949768",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "6f9b3014fd2b91f7b2490d24851012a9dad2946e4829dd12b2a97b41b6b930b7802936ada22aff7dd79046ad2ab54f189f73eeb95f7e2277a24ac99c3091dfb7d0ec3edd4a464e08689ae36d7ea37f9e0741e684e7e77fa3e56e797991c3e2ec0c19c2a8142deb02864ab60d0735df6eacbc916d4d1b29871868783a1c7b8ee73893993b9b7a3eca1414d94a547728fea775ade6b6fd6c6de552e605d05a288bcbf2786f3f9cda75236f816b65bf76b4d144d9ef7a7e2d24a75ac8ea6cbb41ff56419340494561ca3b0a53f6ed75644bd0d2ca91fc203850ce655b69931586e0b2ca44de365d54327f225d962f0ea6484c76d0893ea33b2d649e54b4842f03aa0649d20183ac91e5208c2eafd7578b38bc8e92cdf24770b5b0fa4fbc40ab1494165567145356803139b4227cdb7f234033053d984c471e1dfba319cbd89467be3361d90818f3d974421d36e23317dc9401459d36d13b15ad6405a9e73ae3519ab08cfb899bba5ee2bb63483c3a99f9d30970eaccc8fe843c3642c38550b554a26f06f9b30ee32089d7db68b98883ae848cb685bee8133305bccc516381487aa7a6bd41854427d3d9308a83f5621987bf837e982bc829df6dee719c192d14201d9720ded5d82bf26b1bac6f487fb5860c1aa8f8c73d4472077cb4cacf8b85545c2d74511aff71605c190fde403f38519a5c9ed5133c740f41d346bfc1a61d765c2813114aa8f4a1a04db00a9631d91fcc5a752421883d8fc2e83ba2ff013a2ccbf6d6030000",
    ],
    [
      "ETag",
      "gYtPBEEf3IBBZNCyCFDgeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636335949768"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb",
      "6e",
      "c2",
      "30",
      "10",
      "45",
      "ff",
      "65",
      "ba",
      "6c22f10c108945a0a84545a884d24d859071262134c9a4f6840a21febde3b41b7b747dec7be41b7ce55502211cf3ecbb41737dc890376e88d136055bd96aaa2c8207c82a1372a3871ffa29a85f4f9db389068f9712e751349d0a61f5094b05e10dd21c8bc442f879834a9528d70e074d4dc542f1b576c172fdbe785ec4129494b860bd5bada2d96a01f7fddd83331d634cd160a5d1bd581b3aa3e6a593b5aaac0bf42d3546a385166e0f32434dad0c912f89dff3bb413fe8f78793c164148c852b482bcea91274b70569616255c4f423aad015c0b4a358a7ed7a91b8e77cf6ffe8ecca68df0c49ad45d7d8ed0cc6c351d0f993989313631166d3a0075ac98fbce40c61aa0a8bf75fa3b978076f010000",
    ],
    [
      "ETag",
      "Qc5VcD6pKh0jrA4+vmeCAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd34b7282300000d0bb64ad8c2850d39d807cd541281ad96400c3d706088a06a777afd36bd47787f704719a92bec7d7a626147c021ecfa1900a6ebb548dbca0ae668e1f99921dfd7c550cb41267253c2ad9a97713c49440b30b1b97ad73f6d51a9a532df0d7688a0c44b5b038343b7cc9d36f6fab8fcc5adf92fd7d81a495cdbe06292ec684dc87688baf70c7c34ef2886af240cfe46d4c365d670cce4c4615e6a64579e271844667e331c711e79a18404469a3ca7caf1a6252c9484176d54551691ab27e585cea6538178f6c6ad58fa091cca6b82d4fe741c31096bef0f6f67f8109208fb664a4c7e56bfb42867002feeae32b6fc9ebbf4a624618f8f905bd99093119040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test/tables")
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffb5955d4fc2301486ff4bbdf423fdd8ba76091768bc00b932245e1843ca2863b8ada3ed3448f8ef1e40d48889cb32ef96d3774fce93d3b36dd07356ce508ca659baaab55d9f7935cdf528731e5d20ed550a67e9035eaeea60988f86fd627973f732785b9cf77b3d48ecd30ec58f9bdf4110c97655a78a2ad797ced436d12ef6daf92b9524a62ebd3b62eef55c5b5d261ac51b5459b3d4891f9cbe0cf199f2cae9c3e10e7524ec0b9fd82d54d715d0d0b87f3dba855062b5f29929c759b12b134e31978c06981206f1160e89b25df7bf47fedd7b282991821349a46cd7fbc2a4afca7a37a99deedce207bc890fc638e4820b46dbf940b3f30c6e23c11dbb7c0337f0105114312e022c704b0f785e40375d8fe48bdb603318678c5119863c6a67617562ecac6b8723b5a941140821c3760687dae4bfc671826fe084296704a402d2722aae32b6f32fee07b4d16e88dd62501ec14c9e206fbcca075e17f00b11db7756e8dab38d060000",
    ],
    [
      "ETag",
      "gW0jqu4JlLJAmjCKvIzh+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-3-1636335949768",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6fda3014fd2b91f7b5101e0921486865345d51216c21b49aa62972cc4de636c4d476a850c57fdf8d53ba5695da4fb17dcfb9e7dc479ec83d2f376444529e3f54200f5fee444ace08689ae3eb37bedf5f4fb3e06eb0908fced5b57de845bd7c3c4604af598a6e7705b494a82403355aafdab914d58e4a215a98a8d56f7507fd41bfeffa8eef0d8648535064735ede23f9afd63b35b2ed93743b17222f80eeb86a33b17d79b7f73d7b27c51d30adecb78a368a28fb43cdaf85605473518ed72bd4af14c804b69417e8e03f71939ebfcddce674dbce11bce70c2863a22a75ed0a533051663cafa4c94a464fc4b87c7520ab601e4c638b89a2da964949b770666da8a6893eecc0ba8c960b6b165e2ea3c5249e2dc36435bd0a1693f674395f2fc295757b154481a5695a80e15a63ebdcdc42bca0fe0694e6a5518febe75af9b93fb3f743a90928ada009265e6740bbc38e9f66a9c7b261df4db30ea4e930f55cda4f3bcc77c0d9a4409167440d8b9658f3d0634eea7493d4e9d1c481a19bf8aeeb2430f499e7b9beefb88c1ccfc8a3e41a2eb8da09c59b0e91db681607491cadc3e9240e4c0919ad0a7dd118ab0b78ed51638108faa0a6631de50295ea76cfc2388826d378761334139e434ed961f58033ce68a100d15462f334c885d860c34838590417083613fb710a2a32fafd44ea9ed72e5eb5fc851ee3006bbbda7cc92a8e66e17763e784b8a1456520fbe64024302137e8f9f80771b8a14d0ef2731d44bf48f3144106124af6f92c116c029ffd67a7ad4728ee3daa288d775c1ca66a0d26a159206e6a3db1dddea0df21062cf5bb98d7eb9e5a56e7a833c2164afd5c50b3f558672356a917100671f6a169d5f11f8236f1f173040000",
    ],
    [
      "ETag",
      "BivvKCfEj6Mrw4HK/y2R2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636335949768"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb301086ff8bf99a4a74690344e2430adde8165a48c3c4985064ec4b7071eccc763a5555fffbce81153426852fc9ddf939e5eef59b2d79128a93983c88ea570b66735081bbf64106b695cee2abd1ca020908385a21f9e33c7b4abe47b5bdfbf6753abe5ba517ebdb4fd7a7a74858f6083525f196940224b724feb9258ad6806d4ccbb656459705c46d1a5f5ce6d96cfe05f35a739fcf6fd23499a453b20bf68d9c3a5a74fc07daee770159e9870c4a30a018f8591aa357c0dcccaf6969dd481858dd1a06967470775019dd36d4683dc0ca201c0ca3300ac3f1c9e8e4283a464e6a469dd00ad19b258e479c765466fa372e49862112a68b71e1b27baeb12e78b7880f67f33c1a75f3bd052863ba55aee8054b61ac7b16ef2ff822c2bfa4a41f04f1a684ec832a501c4c1f259a82726ec0da5e52db8236cd1e9b2c16e97b5514375af07e702d7a00e9d67be073ba48fe272dfaeb55abf3249fbe23ac43d7ec917c76395de6c9e595e7ee5f8c30d938b05746a3a92c783f0d0f47c7e3a3e8f0d96267dadb0ebf133bd3424018c53fe542381297545ad8fd010efd9b8787030000",
    ],
    [
      "ETag",
      "YDRkAV6msZKJE5ZjLHvX2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
