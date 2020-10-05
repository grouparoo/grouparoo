const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1601915598808";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dcfdd7243401800d077d9eb241396a27794aae818b12bd5dc18dd7ca9df601741a7efde4ccf1b9c1f94310642a4435bc10d3da325938d1ddbf9ad6ee13bd8dd24ea231edb53f4dd7c5aac499c7575c601340ee7d0c4b8ea813ff58247aa665e4a5f1df078ff500af7a01028ae919c34be1c74e5c9639e16e8f6b60ff34ce77e59b993f4351e54777417ee62f312ea2b312aba5518a5b5ba27ea10619193f8b593cb1cc8d9db27e5dbcb34497e9e4b52f8ee5c6b12b07066737ce454536eb23bdb11853e6b9bd43e6934461b047357701069f19861d53036e8bf990e4b078fab0519078e7eff008f2af1e705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-1-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "616f9b3010fd2bc8fbda04d2841422456b94d03552425642564dd3848c39985bc009369daa2aff7d67d374ad2ab59fb07defddbb7b773c917b5e676442525e1c5a681ebfdc89949c1150b4c0d745112e5bb7f23dc7bb85d5616eaf0eeaee663a4504d72c49ab7d093d29da86819cecb6fda211ed9e3642f430516fd01b8c9d813f705ddfc31c489350e62b5edf23f98f527b39b1ed9374bf10a22881eeb9ec3351bdbcdb0fe7f6be1177c094b4df2ada2822ed0f35bf968251c5453ddd6d51bf95d02450515e6205ff89597af936739fd3aa5f20f88133a08c89b656ba2a4cc1449df3a26d4c56327922a6ca5707b20d56c13cb69828dbaa4e6a5ac19995514513f5b807eb2adaacad6578b589d6b378b90993edfc3a58cffaf3cd6ab70eb7d6ed75100596a26909866b4dad4b730bf182fa1948c56ba31eeb67adfceccff2fd503401a52574c1e4c219d381e7f8699e5eb0dc1bba69ee409a7ae9854b87a9c3fc118cb21428f28ca861d15ad4632f1ba6ee394b7ccf1f252327f313ea642c41b79da1cbdc519603399e91bf0d57b0e0722f24ef1c22b7d1320e9238da85f3591c981672da966ad115a61b785da3c20611f4414f471de50295b4ddcb300ea2d93c5efe08ba09afa0a0ec717bc019e7b4948068daa0790a9ab5c8d03012ced6c102c16662df4f414926bf9e88f65c57f1caf2177a8c03d4e52af325db385a86df4c3927c40f5ab606f2d01d741b392f75d1c7df08c415ed92909b5d10fd24dd5304393450b3cf87896013f8ec473bad3d4271f151452abce3e630a9355803dd0671d3ec337bec0c9d0bf39b2adaa877b173cf3979a673e88c5041ad9e1bead61efbecc45af902c2200e3f345e1dff01a9dbc2ea74040000",
    ],
    [
      "ETag",
      "DgNIu5m9808WeLqC/LqtjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93516fda400cc7bf8bf71a24b2154a23f5015ab6310568213c4d15bae69cece8254eef2e5411e2bbd79776b45a27a52f89edfcacf3dff7cf011e542921827b953fd6689a2f39ba5b1facd0d6da597e55545a8400d0899cc95d3e7fda5c9be5377725cc3cf9d53c36f522bfbc64c2a67fb010101d2053a8a585e8f7014a5120b7a5a4eba2dcb65900aea97c719dac668b1f9c17247dbed8c4f178124fe1189c1aa57062dbf29f68bb3b06b0a3fb156668b04cd1cf5219da61ea665ea61545a5b167a936295a68e1f6436ea8ae8421ea71a517f6c2613fbc0807838bd1a83f624e532a9ca292d1cd9ac703474ee8153db14808bf3261da980567ed73cf75255b213e9c2d92e1593bdf7b2053c6ba979dfc055fb5fd4b6af149902f40e92e28c752a2e9a254b515521ab4b69324bb155575c226cb65fc0112a534a46437b8571d8076fb13f03d5e8effb75ab6cddbaeaec7c9f403611d9be18424b3f9749d8ce7379ebb7bbddf49e3d0de1862af58f43609fb67a3c1f9b0ffe29c2bf26ee27322676a0c2015fc03fc540ea24c688bc76758c465b25e030000",
    ],
    [
      "ETag",
      "jgMwUDrO3tCarMTJyqyuNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-2-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "10",
      "fd95c8fb4adb246dd28b54b10802442a01d2148456abd676265997342eb60342a8ffbe93847211123cc5f19c3367e6ccf885dc8b322513c244fe50817afeb5968c1c103034c7db225ab36b7ee69dc677fef9fa64f6109d8e174fd3292244cdd274b32da0a365a538e8c962decd95acb65449d9c1441db7e3f8b633763c6f3c1ad923a46928b29928ef91fccf98ad9ef47a7be96e2e655e00dd0adde572f376df7b747b5b25d7c08dee7d56eca188ee7dab7958484e8d90e5743147fd4a835ac2868a022b7827a6ecf7e7cc5d4137dd1cc18f8203e55c56a5a9abc2145c9699c82bd564259317d254f9e140e6c12c384eac55269436cb926e6065516d2d970a745518eb34bebcb056d853260ad02bebf63c88036b25d29535b50ead59781126968352296823ca4628a1ac805ae4d58af0abff35811aaaa10d2e87b64f9d913d66191bf26cd4f7586603632336f4689fd97c3c8041ca8022cfd4d91b162d65c911d767e0f294fb9ec786993df05c70619c39cc064add01b8beebd86477409e94307022f4566ad11a426ee330099649bc888e8f92a06923a3d8f7495b5cddc4c73a0d3689a06ffadad5512151a976378c92203e3a4ec29ba01de80c72ca9fe70f38d28c161a104d159a6e405dc8144d235797f330092fa3a319329a295ded119a4cfebcbc1392e76de3b269beb5963f68f4f7801b5a540de2b13d1087ec767f1181bbd792c9f52288ef487b1543060a4afef3e810dc047e7a41fb7d46286e34aa6883ffb8275cd71a5c41bb2f62d354d7b27d7be0fa43d28095f912f3fafede983a479d1136509ad786da7dc63e5bb14abf8130",
      "88638ec2e80ca3ff0107f862a94d040000",
    ],
    [
      "ETag",
      "lNjbQcG5FRY6HjDLqNF9Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90514f83301080ffcbf928243033c348f6c07451225914dc8331cbd2c1819dc0615b5c90ecbfefca7c69efaedfdd7de908dfb22d208483ac7e7a54c34d85e6cd0629eabe369aaf8e5a8de0001a513139fb681e6fd397bb2846af0f4e94457f32ae964b2674fe858d80708452625d68083f47684583dcb6dfab69226366e86c257b4fe3cd13e70d1536df6c93245a256b38efce0e1ce99062890adb1cedc44ed11173135b592d9aae465753af72d430c1d343a5a8ef842272b9e2ce5cffdef317fe7cbe08022f60aea65c18492da3db0c788b2123ea944eac0a3e036a0ad9ba9cce5f2eaf9544abb4fba7578341fdaa88376bb44bbdabc0035929c3b246f5e8402ef8379ea5b9e6e70b91b3248e6a010000",
    ],
    [
      "ETag",
      "2YmD+RK3AIe0u8woSAziIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcfdd7643300000e077c975d383d0c3ee4299615aacda931bc7245bfd944c32cacede7d3dfbdee0fb01655531210a39b4ac074f6029356b5b6dc3c1b4d1cc84e2cf6da75c87093acdee9b2665dfaae80e1b3fee168fee098e106f269e90b853704a3c08b53673a9902bd70f826bef17bf501a97644e2a607c4ccec792590ea9722b9228b862d57871038eebde4e0a5af7ebd218927c9e3d4d9f14e4c8c87f4643bade5e29cc9066d8975e1ce62ea7aaa9beedd7183b4ef8b5dea0d9cc71c63eb4536a0418eff4f004f3166c00bbf37a64a2a81f336458d606fc370bb970f6b8daac1cd9087eff0042633d2305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-3-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f771b449e92bad548daa8451a94d479282b6698a1ce72633a4711a3b2084fadf77ed500642824fb17dcfb9e7dc479ec81d2f53322509cff70dd48f5f6e45424e08289ae3ebe2f2eb55f9ebeaa6eedba3605b0df677a1377c98cd10c1354bd25d5540478aa66620a7dbb09bd7a2a9682d44071375fa9ddec8e94d7ac3e1c4751d1769128a6cc5cb3b24ff55aa9253db3e4a777321f20268c5659789ddcbbb7d7f6a57b5b805a6a4fd56d14611697fa8f9ad108c2a2ecad93644fd46421dc38ef2021dfc27a6c9d9dbcc5d4e77dd1cc1f79c01654c34a5d2ae30051365c6f3a63659c9f4891897af0e24f456de22b298289a5d1997740727564a158dd56305d645b0595b4bff6213ace7d172e3c7e1e2d25bcfbb8bcd6abbf643ebe6d20b3c4bd1a400c3b566d699b9f97841fd14a4e2a5518ff4b3567eeecff2fd503401a525b4c178ec8c68cf752649968c59e6f68749e64092b8c97848fb89c3260318a40950e41951c3a2a528810eb2c1a4073152b378307021a690f6633a712824e37442c7a7e470421e6aaee09ccb4a48de7688dc04cbc88ba360eb2fe691674ac86853a8f3d6982ee0b547850522e8839a0e3aca052ae9762ffdc80be68b6879edb5135e414ed963b8c71967b49080685a63f314d46b9162c3883f5f7be7083613fb710c4a32fdfd4474cfb58b572d7fa14738406d57992f09a360e97f37768e886b5a340672df1e7419192fb4e9c31f04e28ab649c8d5d60b7e92f629800c6a28d9e7c344b0097cf6a31dd71ea1b8f8a82215de717398d41aac867683b829f6993d72868e3324065cab77313c1d7ba673e88cb083523d17d4ae3dd6d98a35f20584411cbe6f7a75f8072a6451da74040000",
    ],
    [
      "ETag",
      "CH+QnZQWr3/6RUp4qkSE5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "e3",
      "30",
      "0c86ff8bf9da492b6ca354e243c7ed605036d88a0edd094d59e39640da74493a344dfbef38851be838a97c696df7b1e2d779bb85675172086129f2558d7a7390a3bd75c10c4d2dada157a54a83e0015a961339c0dff7e965ef707525ecedead7d23f0aea75747a4a84491fb160106e211328b981f0cf164a5620b5a54ad645b968320feca672c579321b4fce292f1477f9e42e8ea3613c829db76fe4ccb245c37fa3ed61e7c1935ace30438d658a6e964aab274cedd8c934aca824768caa758a061ab8f9906b55574c2bd5a14ae7a8e30fbafe89dfef9f044137204eaa9459a14a42efe6341e5865999ca9171209fe2111ba894970d63cd75417bc11e2c2f12419f49af93e0399d0c6beede42ff8aeed5f52b26f82740142b64139961c751b25aa05e35ca331ada4320b56557b6c389dc65f205672ad046f07d7a2059076bd077ec6d3e87fab25db7cecea47948cbe10c69219f64832be1ecd93e8fac6710feff73bdc5834375a91570c3a9bf8dd5ed03f1e74df9c73a69c9be89cd0ea1a3d4819fd0017c24298316970f70a699b83695e030000",
    ],
    [
      "ETag",
      "6eZXcJ42qKitQqWb138uvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-4-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "3014fe2bc87b6d1292000991a22e4ae8ca94a61d21edba694a6c73606e09a6d8a4abaafcf71da0e94595da278ccf7739373f925b914564449848ee4a281ebedc48468e08689ae0edcf5c9f4ecdd9e5bf136712d8bfacef7c3ebbbe1f8f11212a96a2db3c85969265c1418d56cb7652c832a785942d146a59adae6376ddae6dbbc3a139449a82349e8bec16c97fb5ced5a8d33958b713299314682e549bcbedf37d67d7ebe485bc01ae55e7ad63074d54e743cfe35472aa85ccc6ab25fa970a8a356ca94831831762c4bebe556e0bba6d2708de090e94735966baca0a25b8cc62919445ad4a468fa4cef2d5812cbdb9370d8d4daa771b832a63bd2e4095a9364e82f3336383c5c42205b531ae4ebdc0333622da1863e3d898fb677e6874d12302a545563b8494a550a93ff5c07fdff88a403555d004d703d3a1dda1e9b2980d783cecdb2c3681b1211bd8b4cf4cee5a60450c28f274a55eb3682633930d074e14f77b9cb1d8ea390ef228f4e33e8f9d9edbef590eef83cb1db23f22f785d030132a974a349d2057811f7aeb30582da693d0abcb8829d63d6b92ab8a789da7c62211f4415dfb2a2a243a556df517a1174ca6a17fe935939c4342f9c3f20e6719d35401a26941b7a0a1389311368d5c9c2ffdd03f5f4ce6c8a8c77371402832fafdf842081ff2bacbbafe565e8e55fb1f0097342d6bc4ae39902ed9efff200297ae21931f2b2fb826cd5500311490f1cf4787e03af0d9d3392c32427195d14569fcc73de1aaf2e00534fb22b675760ddb311dcbec911a5ce87731dbb50f8da9342a45d842a69f0a6a1619eb6ccc4af50cc2208e79e12fbe61f43f01fdc14c46040000",
    ],
    [
      "ETag",
      "XptHC0DVxF6AR5Z4JcLDYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90d14f833010c6ff97f315742c62c6923d30d4e82473e2f66496a5830399c0756dd110c2ffbe2bf3a5bdfbfaeb7d5fdbc34fd964308763599c5b54dd4d81e6c31609eab6329a37498d4670008d2898f464f51635ab6d2ccf9b75f4d8d2dd2a3c858b05133afdc65ac0bc87bcc42ad330ffeaa11135f2b5c3418d1319339db4ca73fc1e6eb9ad29b3ed7a17c7e1327e82613f3870a26382392a6c52b403a5a213a6e6d566d5a29615ba9a5a95a286111e0f0a45ad148ac865c5bd77bd87891778be1fcc6693197315a5c294d430bafb047631644495d09fb6ef62408d2587cec7f597e5a91fdc7a531b6affcf2f3b837aa388bd355adbc93542443696e1b846b5e8402af83b5e4a73ed870bb2961acb6b010000",
    ],
    [
      "ETag",
      "1plKCnJTLpqPNCDuo/JAjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dcfdb6e82300000d07fe9b31ae4a2eddeb8098540cc00197b21805d60022d2d20b0ecdf6776fee0fc80a2aa8810f9481fa4076f602d6474a80e3e8586f2ac686c7fa37322c2fa745d68d32d466a0909369777bf293579411f51d01115867671dabbfe76d42036b15afa75eadc93b38ca58ebbea0aad605ae486394c17d70cb2684bb1c6bca234f773bdc5651ad3c4092e19715b5c49dcae27cbce8628b6acb1a75360e98573ccd43e115e383c5ca494f62d7dce9eb20e506c7e7e9fbfd8e76d14bad6721431b3adbd8c63b00364610d27226f5e3345436807fe9bf9b832f2ba1aa4e08483df3f308376f205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-5-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbd82621cd8310295aa394ae68095909693b4d1332e6c2dc124cb1e9d455f9efbb364dd76e52f709dbf79c7bce7df044ee7899922949787edf40fdf8e15624e49880a239bed69e777974779edf14eb5ff46639feec2f5647f96c8608ae5992eeaa023a5234350339dd6eba792d9a8ad64274305167d4e98fedbedb1f8ddcc9c49e204d42912d797987e41f4a5572daeb1da4bbb9107901b4e2b2cbc4eee5bdf770d2ab6a710b4cc9de5bc51e8ac8debb9a1f0bc1a8e2a29c6d37a8df48a863d8515ea0833fc434397d9bb9cbe9ae9b23f88133a08c89a654da15a660a2cc78ded4262b993e11e3f2d5816cbca5b7882c268a6657c625ddc1b195524563f55881751eae57961f9cafc3d53cf2d741bc595c78ab7977b15e6e57c1c6babef042cf523429c070ad99756a6e015e503f05a97869d423fdac959ffbe3ff3b144d4069096d3076ec31ed4f6c37c912876593c128c96c489249e28ce820b1993b84619a00459e11352c5a62cd4e461dd74de384411a0f4f80c5ee7860c7cc1e409265d9d0a109d91f939f355770c66525246f3b44ae433ff2e228dc068b79e4991232da14eaac35a60b78ed516181087aa7a6bd8e72814abadd7e1079e17c11f9575e3be125e4943d6eee71c6192d24209ad6d83c05f54aa4d83012cc57de1982cdc4be1c82924cbf3d11dd73ede255cb5fe8110e50db55e64b3651e8079f8c9d03e28a168d813cb4075d46c60b6d7aff1d81b8a26d1272b9f5c2afa47d0a21831a4af6ff6122d804fef7a31dd61ea1b8f8a82215de717398d41aac867683b829f6993db6c7ae637e53456bf577cce9dbeea1673a87ce083b28d57341edda639dad58235f4018c4e107a657fbdf8d15873774040000",
    ],
    [
      "ETag",
      "rEEQ+kFgXlOzaXL6KICM+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "e2",
      "40",
      "10",
      "86",
      "ffcbfab524ad0184267e000f95a48240c9e95d0c59bbd3babaedd4dd6d9510fefbcd56e52ea749fdd2ce4c9fc9ce3bfb76c79e642158c8ee65f65c81de1e6560172e5882a99435f42ab130c03c06966744decccc7177bdf017bf746d7fbed6afcfc35b589c9e12619207c8390b772c95a08461e1ef1d2b780ed496a0aaf262d3641eb3dbd21557f1723abba03c47e1f2d93a8a46e368c2f6dea15170cb370dff8db6bbbdc71ef17e092968281270b3941a1f21b15327d3f0bc54d03158e9040c6be0e643a6b12ab946ec50a5d3eb047d3f1806bdde7030f007c4294cb8955810ba5ed178cca2e56a892f249205c744e82626c169f3aca92e4523c485d359dcef36f3fd0ba4521bfbb6930ff05ddbffa4e2df04e902a46a83322804e8364a961b2e8406635a49341b5e96076c3c9f479f205e088d52b483b56c0194ad0fc079341f7db55ab2cddf5dfd18c5934f84b1648603124faf26ab787475edb8bbf7fb1d6f2d986b8de41503ce2681df1df44efafe9b73ced0b989ce09adaec06309a71fe0525a16a65c19d8ff01246310295e030000",
    ],
    [
      "ETag",
      "XNs24UQ0QZrvtWxvxq9YeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-6-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53ef6f9b3010fd5790f7b549204d08448abaaa651b5292b60969364d53629b33730b9862d32aabf2bfef80a63f54a9fd84f1bd77efdeddf991dcca3c2663c264725741b9fb72a3183922606882b7ffae2377e71f67a37c9dccd7859889d9cff86a324184ac599a66450a1dadaa92831eaf96dda45455414ba53a98a8e3761cd7767c6738f43dcff690a621155399df22f9af31851ef77a07e96ea25492022da4ee72953ddff7eefbbda25437c08deebd55eca188ee7da879922a4e8d54f964b544fd4a43b9818cca142b7821c6ecebdbcc5d49b36e82e07bc98172aeaadcd455610aae722193aa6cb292f12369aa7c7520cb601a9c45d6562abda145b1b5a8b6369b1274951aebdbe262666dd1909029e8adb5fe112c02c4c65b6b629d58d370164696833a316823f34625a22c855ae1a90fe1fbe6d7046aa88636b819d92e753cdb67828db8f08e874cd8c098c746437acc6cee0f601033a0c83375f6864573953be08981178f7c87f9430ffa5c08bb3fb4a92f469c398e4b7de60ec1e6647f441e4a69e05cea4269d97683ac1761146ca2c56a7e761a058d0d41d1f7795b5c6de2759d064d22e8035ffb3a2a152ad5ad0de751b0383d8bc2eba09de61412ca77cb3b9ca7a0a90644d3926660a09ca9189b462e2f9661145ecc4fa7c868467479406832fefdf842887645d365d37c6b2d77d0e81f00d734ad1ac47d7b200ed9efff200217af2593ab55b0f845daab05082821e79f8f0ec14de0b3e773586684e23aa38a36f88f7bc275adc14b68f745664d752ddbb53dbb3f220db834ef62fdc1e0d0983a479d1132c8cd93a17699d1672b56e967100671ccf370fe1da3ff01af95cadb4a040000",
    ],
    [
      "ETag",
      "zVT6y93m7nWgNWpfMfMXdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90dd6e82401046df657a2b29246a80c40b6d8c6d42a4624d2f1a635618110586eeceb631c477ef2cf6667fbe3d3373b23d5cabb680188e55f96d51df9e4ae48d3b64686ccd46b68e5a83300264550a69ad1fad3e76fa3a2ecf9bd5f8d9a6e5f6733e9b0961f233360ae21e4e15d68581f8ab875635286587831e3a0ac6b7ce258b344d96f3b5040d152e58ef9264be489670dfdf4770a1638627d4d8e6e85a769a2e98f39bb335aae96af40c599da381011e1e4a4db6539ac893c49b7ac1d40fa2603289c2d00f85ab29575c512be86e0b328589559dd1afb84220801e8ea27d1ad61f89595b744afb7f7a716334ef9a64b24137d47f08bc90936291751523c8957cc76bc58ffbfd0f3633c50c6b010000",
    ],
    [
      "ETag",
      "uu09GTUrk4ghQG4/uOgSWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "7fc9b9ed8080186f2c2d04a4854e58860b9389691b51b680041cff5dc6ebbbbd1f4028654254635bb306bc82853cc1033d84ed8badcdb7a1afedd2141e5e52d4b7ef332eafdd5ad7925fa15114891e398e6f08946b7e5b7cee27a2e8ebb38b87b4916f0d9fe3aa6edc0c97f49e09cbb9786e5a92de64d5a8ecb3ac9bd15d62d5e521bd6a16b6da4e21dde9bc7e4f9723cd9123a6e4cb093d5bd5601398f281c23149e32026599c433dcaf3b3ea425f1747167de4e5699d6c19a082df98d13c02cd8011d801263b3e3051f16db611dc81ff66352e1ddbae3623031bc0ef1f7201407d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-7-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fe24014fd2bcdece30a14045a48c84aa0ae44286b299acd66d34ca7b775a474b033458de1bfef9da9b81a137deaccdc73ee39f7a3cf64c38b840c49ccb3fb0acaa76f772226270414cdf0b5ba1253caddfde636ec3c5e6597b7979be2fbc3688408ae59926e773934a4a84a0672b85e35b352543b5a0ad1c0440da7d1eedbed41bbd71bb8aeed224d429ece79b141f2ad523b396cb58ed2cd4c882c07bae3b2c9c4f6f5bdb5efb476a5b803a664ebbd620b4564eb53cd1fb9605471518cd62bd4af2494116c29cfd1c17f62129fbdcfdce474dbcc10bce70c2863a22a947685299828529e55a5c94a86cfc4b87c73202b6fee4d428b89bcda165141b770622554d1483dedc03a0f960b6be69f2f83c5389c2dfd6835b9f016e3e664395f2ffc957573e1059ea5689c83e15a23ebccdc7cbca07e0252f1c2a887fa592bbff467f671289a80d212ea60e4d87dda76ed419cc60e4bddd35e9cda10c76eecf4e8696cb34117ba490c147946d4b068210ab7db4bdd41a71f75a11347dd1ed811759c38ea254987c5a76ee2d8941c4ec843c9154cb9dc09c9eb0e919b60167a5118acfdc938f44c0929ad7235ad8de902de7a545820823ea9e9a0a35ca0926ef7cc0fbd603c0967d75e3de13964943dadee71c629cd25209a96d83c05e54224d830e28f17de14c16662bf8e4149867f9e89eeb976f1a6e5aff41007a8ed2af325ab3098f93f8d9d23e29ae69581eceb832e23e5b9367df88b405cd13a09b95a7bc16f523f0590420905fb7a98083681af7eb4e3da2314171f55a4c23b6e0e935a8395506f1037c5beb0fbb6db77dbc4804bf521e60c06c79ee91c3a236ca1502f05d56b8f75d662957c05611087ef9b5e1dfe017b5bc74f74040000",
    ],
    [
      "ETag",
      "uQoDai8vkhT2xQgKhKkn+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "e2",
      "4010c7bfcbdea325a117416cc243f1b8935840a13e1943d6eeb42c6e77eaee162584ef7eb3d5e38c9ad4977666fa9becfc67ffddb347a9058bd8832c9e6a30bb1f05b81b1f2cc0d6ca597a55a82db08081e3059127327b0a5fd47aada7cb0b782c4eaefa9b6d3c1c1261b335949c457b964b50c2b2e86ecf342f81da325475a9574d1630b7ab7c71992e26b33f9497287c3ebb4d9278948cd92138360aeef8aae1bfd1767f08d8061f169083019d819fa532b881cc4dbc4ccbcb4a41c7626d32b0ac819b0f85c1bae206b14395ce5927ec77c3f3b0d73b1f0cba03e21466dc49d484de2e693ce6d071b5c06712c9c29f44982626c179f3dc525d8a46880f27b3b47fdaccf71ec8a5b1ee7527ffc0376d1f49c5bf09d20548d50615a00598364a562b2e84016b5b49b42b5e55476c349f279f20ae854129dac1ad6c0194db1e81dfc93cfe6ab5649bffbbfa15a7e34f8475648623924ea6e3651a4faf3d77ff76bfa39d037b6d90bc62c1db24ec9e0e7a67fdeeab732ed0bb89ce899ca9216019a71fe0523a16e55c5938fc051f640b1f5e030000",
    ],
    [
      "ETag",
      "+icq1xlhhnMSCekg+K6jvA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-8-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "c87b5c93002909448abaa8651b5a2e1d21adba694a8c3930b78013db74adaafcf71da0e96593da278ccf7739373f901b5e266444629eed2a90f71fae454c8e08689ae1ed95fc78f5e3469de965f6ed2e5dc0ec2ed95593f11811bc66295a6c73e8285149066ab45a763329aa2d95427450a8e376ac81697996e378ae6bba485390a7535ede20f9b7d65b35eaf50ed6dd4c882c07bae5aacb44f174dfbbb57b5b29ae8169d57bedd84313d57bd3f324178c6a2ecaf16a89fe9502b98682f21c33782626f1a7d7ca5d4e8b6e86e05bce803226aa52d759a1041365cab34a36aa64f4409a2c5f1cc8d29ffaa791b149a8868d4195b15e4b5055ae8dcfe162666cb09a94e7a036c6e5573ff48d0d4f36c6d83831a6c12c880c0b4d12509a978d4544e31c6af9c72604ff77be26504d15b4c1f5d01c50cb35bd388d872c75fb4e9c9a10c76e3c74683f3699770cc7490c1479ba566f58b414a56d0385fec001e6d9b64d21a1e6d01e30d37521492cc71cd876dfb33c93ec8fc81fc9359c71b5158ab7ad20976110f9eb285ccd4f2791df949152acfbac4dae2ee2659e1a8b44d01b75edeb2817e854f73598477e38398d820bbf1de51432caee973b1c664a730588a69216a041ce44824d23e78b6510058bf9648a8c663ee7078422a39f0fcf84e87edb745937dfda6b70dcf81f001734af1ac46d7b2016d9ef7f2102b7ae2593ef2b3fbc22ed5508294828d9fba343701378efed1c3619a1b8cbe8a234fee39e30557b3009edbef0a2c9ae650f2cd3edf7490396fadf98655a",
      "cea131b546ad080594fab1a07693b1ced6ac524f200ce298e7c1fc0b46ff020ed205ba47040000",
    ],
    [
      "ETag",
      "Yr+YZksDtSgKxfOeMxdquA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "c2400c80ff4bf6b8965d05a50a3ea82b6c5064abfa3086c879a6b5da36dd5d3a11f1bf2f57f77297e4be241f778373d91c6002fbb2f8e9d05e9f0ae44f1f64e8ba8a9d5c2d350e2100645d08393abf24abafe1f9688e142f9ed77c19d965319d0ae1cc116b0d931be42556070793ef1b34ba4669dbed6c3f5130beb6bef23a5b2792d574f0d97293a6b3799ac07d7b0fe044fb0c73b4d818f4f35a4b2734fcee559daedb0a43479d35e8a087fb87c252d76a4b144a258cc368a4a271341c8ee358c5c255643497d408ba59816c61625d657411518804b07d28ce797ffe4a79a0062a548350455e6cfbdf33bf32ba0f4bb2dfa15fad1e1a0bf26a2cca6c3b0cc068f991b7921ff9fd0f2e4fffc46e010000",
    ],
    [
      "ETag",
      "6k/ESY5khcho8C+Ttw6rNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cfdd5682300000e077d9b57808e267dda910a11084d0809b1d1c4387369411383abd7b9ebe37f87e40450815020fdd9972f00264a5c12559ee3a7bad4f0d8fea8c299c99a4cbb7462c2fc4f4a6139a0c37e104dd4245de5c5840527edeb1e2c54a025fe1a01ba3f624dd6cfbdc5af925156f39f2c3be3d7093755fa3739e5a59db45b9579c00a91f8d9ea7bde96776e8912280f47d9e915fcea8da5453e61cf6919a38da51fbc6015b2127b3aa51d284c824c16caed3934d6c4e9be3cec2633c0a338fd4cd3c12bad20458007abfb29e0acc1e33dd807001fe9b789057fab8ae69d5d31efcfe0183912a3005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-9-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6fda3014fd2b91f75a20140209125a19a42b1a096b08adb6698a6ce3646e93388d9d76a8e2bfefda295dab4aed536cdf73ee39f7238fe896973b34418467770dabf79f6e04412788299cc1eba93b721cf250ed7f7eb95c15c1b7bf9741b1984da780e09a257151e5ac234553532627db4d37ab4553e15a880e24ea789dfec8ee7b7dc7f15cd7768126599eae78790be43f4a5572d2eb1da5bb991059ce70c565978ae2f9bd777fdaab6a71c3a892bdd78a3d1091bd77353fe78262c54539dd6e40bf91ac4e5881790e0efe1377e4ec75e62ec7453703f03da70c532a9a52695790828a32e559539bac68f2888ccb1707b4f157fe3cb6a8c89ba24c4a5cb0136b87154ed4be62d679b40eac6578be8e8259bc5c87c9667ee107b3ee7cbdda06e1c6babef023df5298e4cc70ada975666e215c407fc7a4e2a5518ff5b3567eeacff2ed503401a4256b83c9d81ee1be6b7b2425639aba0387a43623c42563070f884dbd211bee08c3c033a286854ba8793ca2c4198d93beebb064c83c3b21de70947883c16e4c1d07c8037438410f35576cc16525246f3b84aea365ec2771b40de7b3d83725a4b8c9d5a235a60b78e9514181007aa7a6838e72014abaddcb30f6a3d93c5e5ef9ed84572cc374bfb98319a738970cd0b886e629560762070d43e12cf017003613fb7e0c4a34f9f58874cfb58b172d7fa6c730406d57992fdac4d132fc6aec1c1157386f0ce4be3de832529e6bd387df0084156d93a0cbad1ffd40ed53c45256b3927e3c4c009bc0473fda71ed010a8b0f2a52c11d36874aad416bd66e1037c53eb147fdfe703044065cab3731c73d3df64ce7d01959c14af55450bbf650672bd6c867100461f8a1e9d5e11f1f92707974040000",
    ],
    [
      "ETag",
      "28655bwpyZBQLmMKxQMmDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fe2401086ffcbfab524d408d2267e000f85a482424dce1842d6eeb4aeb7edeced6e5142f8efce560f2fc725f54b3b337d263befecdb1dfb252bc162f6248bdf3598ed4901eece070bb0b572965e1a2b0b2c60e0784164c467d944bf4d1ef4796a4e23f9d32cf3e8f5e282089b3d43c959bc63b904252c8b1f77ace225505b86aa2eab759305cc6db52f2ed3c574764d7989c2e7b3fb24198e9231db078746c11d5f37fc37da56fb80bde0d30272305065e067d1065f2073532fd3f2522be858ac4d06963570f3a130586b6e103b54e9449db0df0da3b0d78b0683ee8038851977122b42ef97341e73e8b85ae02b8964e12911a6894970de3c375497a211e2c3e92ced9f35f3fd0de4d258f7b1933fe0a7b67f49c5bf09d20548d506155009306d94d46b2e84016b5b49b46baef5011bcde7c911c42b61508a7670235b00e53607e02a990fffb75ab2cdd7ae7e0cd3f111611d99e180a4d39bf1321ddedc7a6ef579bfa3ad037b6b90bc62c1db24ec9e0d7ae7fdee87732ed1bb89ce899da9216019a71f60221d8b73ae2cecdf01dc46723d5e030000",
    ],
    [
      "ETag",
      "9aNcHpxHYp7Tr29iXrSf9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `profiles` WHERE `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-10-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "a3",
      "40",
      "10",
      "fe",
      "2b64efab2d50ca5b93c66b9453925a15a8e672b9b40b0cb80a2cb28bc633fdef3780f52526faa964e779996766fa4cee5895921989597edf42f3f4e396c7e48080a439be9ee897eea25e68b119d27fa7e12915b737278bf91c11ac63095ad6058c046f9b04c46c1d8ef386b7356d381fa1d048d746baa5e9ae6e9aaee3680ef20414d9925577c8be91b2163355dd7b8f73cef30268cdc438e1e5ebbbfa3051eb86df422285fad1524517a17e6d7a58f0844ac6abf93ac4065a01cd064aca0a6ce18d99c63f3f4a8f192dc739821f58023449785bc9ae2d94487895b1bc6d7a55327b267d9bef3e48e82dbda348d90a899a5b850a65b36940b485547e05e767ca16f364ac00b155ae4fbdc053b62cdd2a73e55059fa677ea4e8e8928290acea3d221a17d0e9bf8cc1ff3cfc8e402515301437b66651ddd1dc388bed24730c33ce34886327b64d6ac45ae24e619ac64091273bf59e452b5ed9aea1d9964ba753132cc798649ae6b8a669595323730dc735527b62533a25bb03f2d83009c74cd45cb06116e43af0236f1305ebd5d122f2fa1819c5dcc743735d88f77d4a0c89a02f72edba2ae3e8d40dd65f455eb0388afc2b6fd8e512729a3c85f7b8cd8c1602104d1b5a8284e68ca7383472711efa917fbe5a2c91d12fe8628f1064f6e7f98d103dd5fd9465ffdb79597dcc57c0152dda1ef1307c109dec767f1181773790c9e5da0b7e93e129800c1aa892ef5787e0bef0eddf677fcb88c56b461bbc30c9f05012d199240d0c07c3cabebd816de9137362931edcc84f35cbb6f793e9343a4528a1922f",
      "89865bc6a083592b5e4158c43daffcd50956ff03283acdc84b040000",
    ],
    [
      "ETag",
      "G1Q9ApA0b5SazHSHasjhGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90db6a83401086df657a1b8b422d1ac845528406929073434b089bcd6835ead8ddd522e2bb77d6f4660fff7e33f3b11ddcd3f20663b8a6c94f8daa7d4ad06cec618bbace8de6ada252238c008d4898cc3e9ba33e464d76daccefed2aad5bf9116f261326b4fcc642c0b88338c5fca661fcd541290ae4b2cb450d1d19336d6593fd7c19edf6d3e59aa3826e365a1d168be96c11417fee4790d1758b312a2c25daa695a20ca5995b5f2d8a2a474753ad246a18e0e1215154574211399c389eeb78afae177abe1f06811b3098931426a592d9c30e788c2123f22dfdb22e780ca8e1c8e6f1b036367ef603975b78e14b145ab9f37fd9ac35a8d78ad841a31def3e54dec8ea19d636aac61148c15ff39e9ac7bdff03a3b4bbd777010000",
    ],
    [
      "ETag",
      "jZvVsVEvjXQIkyNiuycWfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dcf4b7343400000e0ffb2e724e319b637144d3d6a64eb918bf1586c34a8dd4174fadf6b7aff2edf0fc8cb12539ab1a1c33d7801cf5c80a7f2e40caa2e2e752b96d6ebaad633ad44e5ba224252a8f14e69c04d8963a37723df66fd5cb0caf427cea2d7a3653c1ad8098827b7ceec5119a1e69d8f72cf1eb563e3a5f7c14c035835f75a450d212d27b549a4e2295c92d899051acac9269f99f331f87323eb4adf77e8b1c5c5e54691f1cdd9c627525cf4f6d59eb3d0ead49a938ac4b5769b7281d46a298b3d1c5f9660ab077000781dc9846946f69928437800ffcd8c3d47bc5f759c4f7802bf7f55e70e0405010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-11-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbda3c58202191a2354ae89a29908e90760f4dc83817e696e0149b546d95ffbe6bd374ad2ab59fb07dcfb9e7dc078fe486971b322229cf6f6ba8ee3f5d8b949c105034c7d76f4139780867cb2a7be8ff0a7e14fbe9b96bdf8dc788e09a25e97657404b8aba622047eb553baf44bda395102d4cd4b2ed96ddefda43db75879ed7f59027a1c816bcbc41f65fa57672d4e91cb5dbb910790174c7659b89edf37b67ffb9b3abc43530253baf253ba8223bef8b7e2904a38a8b72bc5ea1815a4295c096f2022dfc676ed2d3d7a9db9c6edb3982f79c01654cd4a5d2b630051365c6f3ba3259c9e891189b2f0e64e52ffc696c3151d4db3229e9164eac0d553451f73bb0cea26560cdc3b365144ce2f9324c56d3733f98b4a7cbc53a0857d6d5b91ff996a26901866b8dad53730bf182fa1b908a97463dd6cf5af9a941f3b763d1049496d0049341b74f6daf3b4cb374c032afe7a65917d2d44b072eeda55d3674c0d9a4409167440d8b96a2ec7ac321cb5c27b107d4491c069050f09c840d5d2f757b99e7d87d72382177155730e37227246f3a44aea279ec2771b40ea793d8372564b42ed4ac31a60b78e9516181087aa7a6838e72814abaddf330f6a3c9349e5ffacd8417905376bfbac51967b49080685a61f3145481d860c3483809fc1982cdc42e8e414946bf1f89eeb976f1a2e5cff41807a8ed2af325ab389a875f8d9d23e29216b581ec9b832e23e385367df88340dcd12609f9bef6a39fa4798a20830a4af6f130116c021ffe6ac7bd472c6e3eca4885775c1d26b508aba059216eaa7d62f7ed5ecf75890157ea4dcc1d38c7a6e91c3a236ca1544f15357b8f853662b57c066110a71f9a661dfe01e814c4f677040000",
    ],
    [
      "ETag",
      "JMn7zNDOrfz6ZMXlvCH51w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93dd6edb300c85df45bb75b07848b2d4402f9c2d5d83393f4ddcaba208548b76d5c9a62bca298220ef3eca6dd3621de0ded824fd11e2a18e0fe28fae9488c49d2e1e1bb0fb2f05b82b1fac811ae3885f3556042210e064c1e4b50149f165b1a2abc1e3d7f0e97732a7323e3f6782b27b28a5880e22d7601489e8e6202a5902b765689ab2dab65920dcbef6c54dba9e2d7e715ea2f2f9e23a49e2493215c7e0d4a8a493db96ff44dbed31100f78b7861c2c5419f8596a8b0f90b9999749b2ac0df4081b9b0189166e3f14169b5a5ac41e577a61d80b47fdf02c1c0ecfc6e3fe98418399741a2bbf810dcf271c3a69d6f8c42a45f88d09dbc6ac386f9f3bae6bd52af1e16c918e06ed80ef815c5b72cf4b79055fc4fd4b1af949906f409b2ea8804a81eda274bd954a5920ea2491b6b2ae4fd864b94c3e40b25216b5ea0677ba03306e77022e9265fcbfd5b26fde76f5334ea71f0872ec861392cee6d34d1acf579ebb7db9dfc9de01ad2cb25908bc4fc2fe603cfc3eea3f5be7077a3bf13991b30d042293fc075c6a27a25c1a82e35f56bc29c65f030000",
    ],
    [
      "ETag",
      "UleasAHgPsQ4q/1wKLMsmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-12-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "a34014fd2b64f6ab6da1f4014d1a35157789b57529d56c369b76182e380a0c32838f98fef7bd0cd6474cf413c3dc73ee39f731cfe4961731999088a77735544f3f6e44440e08289ae2edcc83b3e5284dce4ecb47bee03c2fafd37e3a9d2282372c49f332838e1475c5404ed6ab6e5a89baa495101d4cd4b1fa1d6b645aae351cba8e633ac8939025735edc22fb5aa9524e7abdbd76371522cd80965c7699c85fef7bf7fd5e59891b604af63e4af65045f6be163dcc04a38a8b62ba5ea1815a42b5819cf20c2dbc31e3e8e863ea2ea7793745f03d6740191375a11a5b98828922e1695de9ac64f24cb4cd7707b2f2e6de2c34b609afa4da143487ad41a5b1d95420eb4c19a7c1f2dcd8625109cf406e8dab5f5ee0195b6d6b6b4c8d4363ee9ffba161a15a0c52f1426b8534caa0d1796987ff79080d812a2aa10d6ec6e6885a8ee94649346689630fa3c4842872a2f190da91c9dc010ce20828f254935db368210abbcfc01cd8b693c483d81d38d08f476c38b6e92071ad51ec52d3b6a3be0b6477401e2aaee084cb5248def6845c057ee86dc260bd981d879e2e23a158fa496bae29e2bd4f854522e88bba764d940b546a1aec2f422f389e85fea5d7ce740e29654fab3b9c6a42330988a615f65d41752e626c1ab958aefcd05f2e8ee7c8d083bad8232499fc7d7e23844fa5eeb2d25fb20a037ff1531bd8232e69566bc87d7b2070838b22b8348fe051fbd6abb2dbfd43162e659b91fc5e7bc11fd25e0590400505fb7e9e08d6816fdfd67ed1118bab8e3252e13f6e0f938d08aba0dd229e37665ed8236bd81fbb44832bf529361cd9fb7635399a8c9043a15e2a6a171d0b6dc56af90ac2200e7fa13bb7fb0fb3dc85ae68040000",
    ],
    [
      "ETag",
      "CEeKO6gfKFpxiNiimphg2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90516f82301080ffcbed1512d9a222890fc3b8cd8d910d66f6b01853e1c43ae0b02d33c4f0dfbde25edabbeb77775f7a815f59e710c04e16a716557757a0f9b44182ba2d8de6aba15a23388046144cbe4d42793877d3d7d353baf0dfdbe977183f9ce773267476c04a407081bdc432d710fc5ca0161572db76ab86898c99aeb195f42b59c5cf9c5794db3c5e47d163182da1dff40e1c6997e01e15d619da898da22366666565b5a89a125d4dadca50c3000f0f85a2b6118ac8e58aebddbbde64e4cdbcf178e6fb239fc192326124d5ccae53e035868c28133ab32b780ca82164edfd70fe7179a9245aa7cd3f1d7606f587225eadd16e1ddd0c1664ad0cdb1ad5a20399e0ef7891e696f7571198d8436b010000",
    ],
    [
      "ETag",
      "K6Bihwy7JqFSC8Mu7WBN3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcf4b7282300000d0bb642d0e6011d25d53f988451999486093410cfff249b096747af73a7d37783f20cb7326049d8796f5e0152c990ed7f9fa305868f3609d866080391f65fb3879708c5ec871ca4bccc95ed6d289935a3253f309ae5dfb6415c2c409cef0e4b6711a54a540debb1f33ad40b77cd7a457bd096430658ee89c146d2fc44c90b90f0851b5941a467fb742fa49a3515e7243392f652f3a55f1427e0bf9c2ee7eacd7f321f9202ee2c7a9872656aee3b49b3349dcb3db0ecad61e9aea1cd95faa5154e55b0b56807d8f356782d6cfd9c6807005fe9b745e46f6bc229671c6c1ef1f3d750ec705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-13-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda0468424222456b96d21529212b21ed1e9a906d0c730b38c5a65d55e5bfefda345dab4aed276cdf73ee39f7c123bae17586a688f0e2b665cdc3a76b41d011620a17f0fafdaf7b5f90b23ab35df9e5eae2f2e7b5f0ddf96c0608ae591257bb92f5a4681bcae474bbe9178d6877b811a207897aeea0e78e1c77e27adec4f71d1f789295f992d737c0fea3d44e4e6dfba0dd2f84284a86775cf6a9a89edfedbb637bd7886b4695b45f4bdaa022edf7453f978262c5453ddb6ec0402b5993b20af3122cfc6766e4e475ea3ec755bf00f01da70c532ada5a695b90828a3ae745db98ac68fa888ccd1707b40996c122b1a828dbaa4e6b5cb1232bc30aa7ea61c7acb378bdb2c2e86c1dafe649b88ed2cde23c58cdfb8bf572bb8a36d6d579100796c2a464866bcdac13738be002fa19938ad7463dd1cf5af9a941e1dbb16802484bd605d3b133c2aeef4c484ec634f7071ec91d46884fc61e1e10874e866c9811868167440d0bd7a21e8c08f15c8fa52ecd713a1c3b7e4abccc4f87c7c7638fb2dca70e41fb2374df70c54eb9dc09c9bb0ea1ab384c823489b7d1629e04a6841cb7a53aed8ce9025e7a54502080dea969afa35c80926e771825413c5f24e165d04d78c90a4c1f36b730e31c9792011a37d03cc59a95c8a061289aaf8253009b897d3b04259afe7a44bae7dac58b963fd31318a0b6abcc176d92388cbe1a3b07c4252e5b03b9eb0eba8c9c97daf4fe37006147bb24e8621bc43f50f714b39c35aca61f0f13c026f0e1af76d87bc0c2e6838c547087d5a1528bd086752bc44db54fec913b72276364c08d7a131bf88343d3740e9d9155ac564f15757b0f857662ad7c064110a61f9966edff0191427f9f77040000",
    ],
    [
      "ETag",
      "Xx1wgblmF/1sBWQVZjo81A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93dd4ee3301085dfc57b9b4a09d0d246e2a265bb4b45fa431b566211aa4c3c090627136ca7555bf5dd1907b6ac0029dc2433936fe439e3931d7b92856021bb97d973057af323037be58239984a5943af120b03cc63607946e4b6b7989dfef9bbbaf4f138bad96e376b3d1dafcfce8830c903e49c853b964a50c2b0f076c70a9e03b525a8aabc58d699c7eca674c5453c1f4d7e539ea370f9e43a8afa8368c8f6dea15170cb9735ff8db6bbbdc71ef17e0e2968281270b3941a1f21b12327d3f0bc54d03258e9040cabe1fa43a6b12ab9466c51a5151cb7828e1ff48276bbd7edfa5d021526dc4a2c88bd5ed07ccca2e56a8e6b52c9822322741d93e2b47eaea82e45adc485a349dc39a907fc1f48a536f67529ffc037711f49c5bf09d20d48d504655008d04d942c975c080dc634926896bc2c0fd8603a8d3e41bc101aa5680657b201507675007e45d3fe57ab25dfbcefea673f1e7e228c25371c9078341e2ee2fe78e6b8bbb7fb1d6c2c989946328b01e793c03fe9b64f3bfeab75ced1d989ce09adaec06309a73fe0425a16a65c19d8bf00e1a7c0a75f030000",
    ],
    [
      "ETag",
      "z9SP7VZvK0o3LYzzywrOMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-14-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b4fdb3014fd2b91f715da84a64d5ba9820ab22d5b2990a6a0699a5adbb9092e695c6ca71b42fdefbb71280f21c1a738bee7dc73eec38fe44e9429191226f2fb0ad4c3979564e48080a139de1a95de671df8e9cbf0f6763556d31f67e62a1f8d10216a96a6eb4d01875a568a831ece67ad5cc96a4395948798e8d0f30fbd9eeb0dbc6e77d0efbb7de46928b28928ef907d6bcc460fdbedbd762b97322f806e846e71b97ebe6f6f8fda1b2557c08d6ebf956ca38a6e7f2c7a5c484e8d90e5683e43039506b5803515055a7861a6ece46dea96a0eb568ee0ade040399755696a5b9882cb321379a56c56327c24d6e6ab03998593f034719685d92e1daa9dc54281ae0ae37c8d2fce9d2556938902f4d2b9f91ec6a1b3b47e96cec8397626d17994381ecaa4a08d28ad48425901b5c0531fa2f7ddaf09d4500d4d7011b83deaf5dd01cb58c0b37ea7cb321718ebb3a04b3bcce5031ffc9401459ea9b35b162d654953bfdf757927f57a5d7ac46827f3792f18783e30af0b2c60bd007aaeef91dd01f9ab848133a137528ba619e4268e927091c4f3e9e938096d1919c5d2cf1a737511af7d1a2c12411fd4b5aba342a252ddd9689a84f1f83489aec3669813c8297f98dde338335a68403455740d06d4b94cb169e4f2621625d1c5743c41869dd0e51ea1c9f0f7e30b2179d8d82e1bfb25b3248ea6dfac813de29a1695856c9b0381156e8814da3d817fd6b7dd91ddee0fb2701b9b8ce46a1ec6bf48731543060a4afef93c116c039f3eaafd862316771c65b4c17fdc1eae6b11aea0d922b1aecd3cb17b5e10b801b16065dec50681bf6f579da3ce086b28cd5345cd8663a18d58a59f4118c4e14f6de776ff0138670e7861040000",
    ],
    [
      "ETag",
      "trdqf3eK4oEhhjArNJDtQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90514fc2400c80ff4b7d74331b3a03243c0001c52ca8284f8690dbd1cdcd6d9d779d862cfbeff6862f776def6bfbe53af8caeb134c21c9b3ef16cdf92a437e75c10e6d5bb295aba1da227880ac322197d75b7d5b3eac9f92d5861639af82c246f3d94c08ab3fb15230ed20cdb13c59987e7450ab0aa5ed7834c344c1f8dcb8ca3a7e9ebf4b5ad1c9a5db7d1ccf17f10afa43ef4141c90e5334586b74031b43056ade3857abaaa644df526b345a18e0e12133d436ca10f952f1c33b3fbc0fc249184593f138180b5892569c532decfe0d640d13ab7247bfa20aa1006608c53a1dce1f298fa2c94d387256877f7e7166b42f8664b945b737b8382cc979b1f8b269d103ade43f1e73bee4fd1f0ab1509a6c010000",
    ],
    [
      "ETag",
      "C+Nc3lGFJbEIoBitE0js5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb646d9c367cd39d60ab882d1641821b26841410954f42f9747af73a7d37783f8032c68548645df13b7801134578c9966e6d5acac0a8dda7e15e72929b6e607c416b15cce99a4db57a8a7208c3468fe1ed2030bc6261c76b69d02e3dbf5eb685ab087ac866c6569a86e4d50b2432df76ac441b27dda7886d90574c264f7ac5b76cd99655e6f4437327fdd95133c7f6083deaee5ccc86c17d5d4b8a360fc5ec9da29db40a9f285b822ed5d8e6e38487271f3636295d8163151df9fbb775ab9e3fa24fb0007c6cca8e8ba47ccc140de305f86f26726af8e36a71daf10efcfe01dd6eb2ed05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-15-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbda2490404a22456b94d23552425a20ada66942c618e616706a9b3e56e5bfefda345dab4aed276cdf73ee39f7c133ba654d8ea62863e55d4bc5d3b71b9ea12344152ee175f1f7526493eca1a91f5d193eb6ab381059399b01826996c4f5aea23dc95b41a89c6ee37e2978bbc382f31e24ea395ecf19dbcec4f1bc89efdb3ef024ad8a156b6e81fd47a99d9c0e0607ed7ec9795951bc63b24f78fdfa3eb81f0e7682df50a2e4e0bde40054e4e073d1ef15275831deccb6311868251529ad31abc0c27f669e9dbc4fdd67b8ee9700be6784624278db286d0b5210de14ac6c85c98aa6cfc8d87c734071b00a16894578d5d64ddae09a1e59395638554f3b6a9d459bb5b50ccf36d17a9e2c37611a2fce83f5bcbfd8acb6eb30b6aecf8328b014ce2a6ab8d6cc3a31b7102ea09f53a95863d413fdac955f1ab4fc38164d006949bb607a6c8fb1e3db93acc88e49e18fbcacb06996f9d9b18747994d262e75f38c62e01951c3c20d6f3c6a0f0b977aa9ed38e3d4cd6d279d8c4693d421637b38b2f3a15b8cd0fe083d08a6e829933b2e59d721741d2d93204da26db898278129a1c06da54e3b63ba80b71e151408a04f6adaeb28e3a0a4dbbd0c93209a2f92e555d04d78454b4c9ee23b9871812b49018d05344f51b1e639340c85f375700a6033b18b4350a2e9af67a47bae5dbc69f92b3d81016abbca7c519c44cbf087b173405ce1aa3590fbeea0cb2858a54def7f031076b44b822eb741f413754f112da8a00df97a980036812f7fb5c3de0316361f64a4823bac0e915a8408daad1033d5beb0c78eeffa2e3260a13ec4c6def0d0349d4367a4356dd44b45ddde43a19d582b5f411084e987a659fb7f68c5e74077040000",
    ],
    [
      "ETag",
      "CzQrb9bwnmx4sNxuLSErbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a3",
      "40",
      "10c7bfcbde2b4dc0b315497ca05aef9a60ab943e19d36cd901d75b18dc5d6a48d3efee2c6acf9c97e00bcc0cbfc9ce7ff6cf9efd91b56011dbcaf2b905ddfd28c1deb92005d32a6be8d5606d80790c2c2f894ce3935dd7f995d8c6f639fe29d67e9c862f17174498fc112acea23d2b2428615874bf6735af80da72546d556ffacc63b66b5c7195a5f3c52fca2b142e5fac93249e263376f08e8d825bbee9f96fb43d1c3cf684db140ad050e7e06669343e416ee74ea6e155a36064b0d53918d6c3fd875263db708d38a2ca28188f82891f9c07e3f17918fa21810a736e25d6c4ae57341fb368b94af18554b2e08408ddc7a4b8e89f3baa4bd12b71e17c914d4efb013f0385d4c6be2de5037c17f72fa9f83741ba01a986a0126a017a8892cd860ba1c1984112cd8637cd119b2e97c91788d742a314c3e04e0e00caee8ec075b28cffb75af2cddf5d5dc5d9ec0b612cb9e18864f39bd92a8b6f6e1df7f07ebfd3ce82b9d5486631e07c12f8a7e1f86ce2bf59e7129d9de89cc8ea163c9673fa037e4bcba2822b038757d19eb4925f030000",
    ],
    [
      "ETag",
      "RA2vyy0mdbAtqA3dU0AR8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-16-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "2bc8fbda06c81322457db28d35495b425a4dd3941873614e01536cb25555fefb2ea6e943955a0909e37bce3de73e782477bc88c998443cbdafa17af8b211113920a0688ab7d5a9b9d9a449b1bd884f7f5ca4711e5d5348271344f08625695e667028455d3190e3e5a29356a22e6925c421263ab487f858b66b0f06aee3580ef22464c9941777c8fea35429c7a6b9d7eea442a419d092cb0e13f9f3bdb9ed9a652536c09434df4a9aa822cd8f458f32c1a8e2a2982c1768a09650ad20a73c430b2fcc383a7e9bbac369de4911bce50c2863a22e54630b533051243cad2b9d958c1f89b6f9ea4016ded43b0b8d35177245cb726d5069ac5615c83a53c6d7e07266acb1a2846720d7c6ed772ff08cb5f6b43626c69131f5677e68d828158354bcd042218d3268449e7ae1bf9f4043a08a4a6883ab9135a4b663b951128d58e2f4065162411439d168407b91c5dc3ef4e30828f254935db368210ac701b717772dd7b646cc8907ee28ea823564bd7e37eac3c81d3a83d84a90b83b207f2baee09ccb5248de3684dc067ee8adc260393f3b093d5d4642b1f4f3d65c53c46b9f0a8b44d00775ed9a2817a8d474d79f875e707216fa375e3bd029a4943d2cee71a409cd24209a56340705d54cc4d8347275b9f043ff727e3245869ed2d51e21c9f8d7e30b217c287597957e934518f8f36fdac01e7143b35a43b6ed81c006b74470691dc33fed5befc96ef71b59b8916d4672bdf4829fa4bd0a20810a0af6f93c11ac039ffe58fb2d472cee39ca4885dfb83d4c3622ac82768b78de9879620f6d",
      "77d8b5880657ea5d6ce4d8fb7635399a8c9043a19e2a6ab71c0b6dc56af90cc2200e7fae3bb7fb0f4a20a5de65040000",
    ],
    [
      "ETag",
      "rB/jjgfnvKdBJKgdmbQaeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90d16bc23010c6ff97db6b05fbd0d10a3ed8e1d8a0d4adae2f1b22319e5db5e975c95529e2ffbe4b154272f9f2bbfb3e728553ddee6106bbbafaebd10e4f15f2a72f0a747dc34e8e8e5a871000b2aa3c79fe5a47c56b88a6fcce9197a73c31d1653e17c2e95f340a665738d4d8ec1dcc7eaed02a83d2b6ddda71a2603c745e4957ab6cb9c84530b4f7425e66d922cd9670dbdc0238d2aec0035a6c35fa919da5236a7ef7699d325d831347bdd5e86084c787ca52df294b341165123ecb9a86491845491c4f63011bd28a6b6a852dd720364cac9a822e12164201ec584aeec3b89f4566dba3cfb479d0e9c0e83e2c89b543ef3abd2778219f8a25adef08402bf98fb79aeff7db3ffc0fac7f6c010000",
    ],
    [
      "ETag",
      "bvTS5RF1emUZNetEkN9m5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "dd",
      "76",
      "43",
      "30",
      "00",
      "00",
      "e0",
      "77",
      "c975f5d054b13be150628dd1cd71e5a0a99a74c9fc4ce8d9bbaf67df1b7c0f50d6351d8662e41dfd022f602977d6b6de626e2238d74ecc351212a20de3627e5e851b860c2686b3cea735b5f37045d1945f88186b91072a36d8f1430dee48c896f15b1335e6a5f21dbfd1afb36f7224b9bc7a194ef594dc3dd586526358515e97c6f5317f1f4e731fb707f7161da619294439b2b34cb2c07e8395dbedfc9fc45391c6bed5409b42486dcc8821a0a9e6fa22336c5b5d5c047c9feeab738a9463dd810da052b43d1d8af63983ba656dc07fb31817419f5744cb9ef6e0f70fa216ad5605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:40 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-17-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b4fdb3014fd2b91f795b6e93bad548daa84d1a94d599a82a6698a6ce726332471899d4e08f5bfefdaa10c84049f62fb9e73cfb98f3c917b5126644a98c81e6aa81ebfdc4946ce08689ae1ebb5ba8d8aefdecabfa5bb0282cbc35d1494f3d90c11c2b0142df639b494ac2b0e6abadbb6b34ad67b5a49d9c244adeeb8d51db9dd4977389c789eeb214f419eae44798fec3f5aefd5b4d33969b73329b31ce85ea83697c5cb7be7d0ebec2b79075cabce5bc90eaaa8cec7a25f73c9a916b29cedb668a05650c5505091a385ffcc849dbf4ddd16b46867083e080e94735997dad8c2145c96a9c8eaca6625d327626dbe3a90adbff21791c3655e17655cd202ce9c846a1aebc73d3897e166ed2c83cb4db89e47cb4d106f1757fe7ade5e6c56bb75b0756eaffcd07734653958ae3373ceed2dc00bea27a0b428ad7a649e8df2738396efc7620828ada009c6637744bb9e3b61291bf3d4eb0f59ea02631e1b0f699fb97c328041c28022cf8a5a162d6599f4266e3282514c198778d06783d84b783f66de7094d27e7732f618399e91bf95d07021d45e2ad17488dc86cbc88fa370172ce6916f4b48699deb8bc69829e0b5478d0522e8839a8e262a242a99762f83c80fe78b6879e337135e4146f9e3f601679cd25c01a26985cdd350ad65820d23c17ced5f20d84eecfa145464faeb89989e1b17af5afe428f7080c6aeb65fb28dc265f0cdda39216e685e5bc8a139983252911bd3c7df08c41d6d92901f3b3ffc499aa71052a8a0e49f0f13c136f0e9af76da7bc4e2e6a38cd278c7d5e1ca88f00a9a1512b6da67f6a8e7f6c64362c1957e171b8cbaa7a6991c26231450eae78a9abdc7421bb15abd803088d30f6cb38eff00ba98b51f77040000",
    ],
    [
      "ETag",
      "PsWTmJ8LEWaUmeNFvjTNnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93dd4ee3400c85dfc57b9b4a0da23f44e2a285ee52296da10d176885aa21e364a74ce2eccc24a8aafaee78027457cb4ae126b19dcf1a1fcfc9019e552921822795ffaed1ecbfe5e8ee7cb0465b6b67f9555169110240277226cde8eaba79688a9c92e71b6576a3c5be567797974cd8f4171602a203640ab5b410fd3c40290ae4b694745d94db360bc0ed2b5fdc24ebf9f207e705499f2fefe378328d67700c4e8d5238b16df92fb43d1e03d8d1d31a333458a6e867a90ced3075732fd38aa2d2d8b3549b142db470fb21375457c210f5b8d20b47bd70d80f2fc2c1e0623cee8f19d4940aa7a864f67ec3f3812327f49a5e582584674c983666c559fb6cb8ae64abc487f365323c6f07fc1bc894b1ee6d291fe0bbb87f492dbe08f20d28dd05e5584a345d94aab6424a83d6769264b7a2aa4ed874b58a3f41a2948694ec061bd50168d79c80eff16af2bfd5b26ffeecea7a92cc3e11d6b11b4e48325fcc36c96471ebb9c7f7fb9dee1dda5b436c168bde2761ff7c3c180dfb6fd6b9226f273e2772a6c60052c17fc08d721065425b3cbe02e79c08ad5f030000",
    ],
    [
      "ETag",
      "r7CDvYvmgoTkHirj7MyuiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-18-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8553ef4fdb3010fd5722ef2b6d93fe4c2b55804ab6452b85a529689aa6d676ce99218d43ec1410eaffbe8b431908093e25b97befdebdbbcb13b99579422684c9f4ae82f2f1cb8d62e48880a12946531f6216afdc5484bad23b2816e3d98ffbe91411b26669ba2d32686955951cf464b56ca7a5aa0a5a2ad5c2422dcf6f7943d71b7b83c1d8f75d1f791a323197f92db2ff1a53e849a773d06ea74aa519d042ea3657db977867d7ed14a5ba016e74e7ad64075574e763d1e34c716aa4caa7ab2536506928d7b0a532ab0dbe301376f2b6745bd26d3b45f04e72a09cab2a37755b5882ab5cc8b42a6d55327922b6cd572f6419cc8359ec6c126a60e350edacd725e82a33ced7e8e2dcd9a01d2133d01be7fa7b1005cec636b471a6ceb1330fcfc3d8f15027016d646e5562ca32a8159e0711be1f7f4da0866a6892eb913ba49eef8e9960232efcde80091718f3d968407bcce5e33ef413061479a6ae6e59345779d71bf7133116a3518ff6873d2afc64e833c119ed751331ea773d8cc16040f647e4be9406cea42e9496cd34c87514c6c13a8e568bd9691c581b82a2f5b3a6b9dac4eb3e0d9a44d007bef675562a54aa471b2ee2203a9dc5e155d06c730e29e58fcb3bdca7a0990644d3926ec14079ae121c1ab9bc58867178b1389d23c3aee8f280d064f2fbe93f217e2cec948d7d92651c858b6fb68103e28a669585ec9a17023778224a6af7041e6cdff648f6fb3fc8c2736c2a929fab20fa459a5004024ac8f9e7fb44b04d7cfa571d4e1cb178e428a30d7ee3f5705d8bf0129a2b92dbba9967f61017e9bbc4824bf32ee77bddc3b8ea1a7545d8426e9e1d35278e461bb14abf803089cb5fd8c9edff0176a558ce62040000",
    ],
    [
      "ETag",
      "g8eTbTU0gfIsusvepN9CKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d90514fc2301080ffcbf9ca9296888e253c804325598ca08b514348576e73b8ed66db4908d97ff73a7c69efaedfdd7de919becb660f116465f1d3a1395d15e8d63ed8a0ed2a67f96aa9b1082340a70a26efdff38fb490f12aecde1e627d7d5b1f33b39ecd98b0fa0b6b05d119f212abbd85e8f30c8daa91db763b334c64cc9d5a5f89e7af4bce6adafbec294d92f9225942bfed4770a06c83391a6c34fa79ada1036ab7f2aa56d56d8581a5ce68b430c0c34361a86b95210ab812c8309037424ee564320d431132589156aea486d9f405788d23a7aa0d1dd91424036608593a1fce5f2e8fc55804621c08e9cdb6ff3d8b9343fb6c88052cfadde2e27147decdb1b3331d8e402bfe92c7d25df2fe0fa20a76416f010000",
    ],
    [
      "ETag",
      "FYfZUg1DI8uWGDc47mwbrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff1dcf4b7282300000d0bb64ad0e3f8b7457a01902ad507e4536991812012b30e1afd3bbd7e9bbc17b004229eb7b3cb457d68057b012c5d8d19dd71e4c752e8e53a0b845eeaf2430a7d2c7486b0c8b3baa5e39cbd7dd506caf8e2f613a56f830caa7e81e433e320d112e7967b12092681fa76c9b661cb6a9d84e66babe77ae6cad88b0a6d2226c33bae0a674694b67ff5b67a115c24b6952676e51e82149b9bde8d76dd4259f69969e6123f771be0fa455978e893e71aed843518c4dcc59ae08f9e7364068e763cd35a77e031bc096ae12acc7d573a6ee0d6303fe9b78583bf6bc9a8c0826c0ef1f7f3d2a9e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-19-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6fda3014fd2b91f75a2081000109ad88a62b1a843509ada6698a1c7393ba0d71163b4c55c57fdfb553ba5695daa7d8bee7dc73ee479ec8032f77644a529eff69a07efc722f52724640d11c5ff9a02aaeb3f86e11c8ebf8fbe15eb937769ccf6688e09a25e9be2aa02345533390d36dd4cd6bd154b416a283893acea4e38c6c67e20c8713cfb33de44928b2152f1f907da75425a7bdde49bb9b0b9117402b2ebb4cec5fde7b877eafaac53d30257b6f257ba8227b1f8b7e2d04a38a8b72b68dd04023a14e604f798116fe3377e9f9dbd45d4ef7dd1cc107ce8032269a52695b98828932e379539bac64fa448ccd570712f92b7f115b4c14cdbe4c4aba87336b47154dd46305d665b8595bcbe07213aee7f1721324d1e2ca5fcfbb8bcd6abb0e22ebf6ca0f7d4bd1b400c3b566d6b9b9057841fd1d48c54ba31eeb67adfcdca0e5fbb168024a4b6883c9d81e51c7b32769968e59e60d866966439a7ae9784807a9cd262eb8bb1428f28ca861d1529474e80278d44d46ee689cb88e3d493cd7a54946d3f1a89fb9cece73c8f18cfcadb9820b2e2b2179db21721b2e633f89c36db098c7be2921a34da12e5a63ba80d71e151688a00f6a3aea2817a8a4dbbd0c623f9c2fe2e58ddf4e780539658fd11f9c71460b0988a635364f41bd163b6c1809e66bff02c166623f4e4149a6bf9e88eeb976f1aae52ff41807a8ed2af325511c2e836fc6ce0971438bc6400eed419791f1429b3efe4620ee689b845c6ffdf027699f42c8a086927d3e4c049bc0a7bfda69ef118b9b8f3252e11d5787492dc26a6857889b6a9fd9a37ebfef0e8801d7ea5dcc1d0c4f4dd3397446d843a99e2b6af71e0b6dc51af902c2204e3f30cd3afe03d8ccd55e77040000",
    ],
    [
      "ETag",
      "i3plQfThCNsQTKvjt4V0Tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a3",
      "40",
      "10",
      "c6",
      "bf",
      "cbde5b1a8bb1b590f8829e554968ebb598f827a6d9b203b7ba30dceed24bd3f4bbdf2c6a357a09be8199e137d979661f76ec595682856c2d8b3f0de8ed8f02ec2f172cc034ca1a7ad55819601e03cb0b22e3e3e83e59df96e7cfd11d06c1d1343a2a92e2ec8c0893fd8692b370c772094a18163eec58c54ba0b60c555356ab36f398ddd6aeb84c17f1ec92f21285cb673749128d9309db7b8746c12d5fb5fc37da1ef71e7bc2f50272d05065e066a9353e41666327d3f0b256d033d8e80c0c6be1f643a1b1a9b946ec51a5e7073d7fd8f7037f300846a3fe88408519b7122b626f96341fb368b95ae05f52c9fc6322741b93e2bc7d6ea82e45abc485f12c1d9eb4037e0472a98d7d59ca1bf82aee33a9f83741ba01a9baa0022a01ba8b92f58a0ba1c1984e12cd8ad7f5011bcfe7c917885742a314dde0467600ca6e0ec045328ffeb75af2cdfbaecea374f2853096dc7040d2783a59a6d1f4da718faff73bde5a30d71ac92c069c4ffcfec968703aecbf58e7273a3bd139a1d50d782ce3f4075c49cbc29c2b03fb7f8ba5618d5f030000",
    ],
    [
      "ETag",
      "I2AZLbXmDkAYo99/MA/gLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp` as __result FROM `profiles` WHERE `email` = ? LIMIT 1",
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
      jobId: "grouparoo-job-20-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "fe2bc8fbb8268110028914b551cb3aa624ed0869354d5362ccc19c024eb1695755f9ef3b4cd317556a3f01bee7edcec723b9e16542c624e6d96d0dd5c397ad88c9110145333c4dddf23cfac1ebaf96ebc489a9b65621e7d3c90411bc61495aec72e84851570ce478b5ec6695a877b412a283429dbed9b186a635b21c67e479a6873c09793ae3e50db2ff2ab593e35eefe0ddcd84c872a03b2ebb4c14cfe7bdbb7e6f57892d30257b6f2d7be8227b1f9b1ee78251c54539592d31402da15a4341798e115e98497cf256bacb69d1cd107cc71950c6445daa26164a3051a63cab2bad4ac68f44c77cf54296fecc3f8d8c8d54a8b931a834d6eb0a649d2be35b78313736d84fca73901be3fabb1ffac64627da1813e3d89805f320322c344a402a5e6a9b88c63934164f9308decfbf21504525b4c5b56b0ea9e599a3388d5d967ab613a726c4b117bb0eb563938d06304862a0c8538dba66d1529403b73fb28714697ddbf192d84ead3e1b8cf07b00f6c8b1c131139bba36d91f91fb8a2b38e37227246fc741aec320f2d751b85a9c4e235fb791526cfdac0dd734f13aa7c22611f4415ffba6ca053a35b30d16911f4e4fa3e0ca6faf730619650fcb5bbcd094e612104d2b5a80826a2e121c1ab9bc58065170b198ce90a1efe8f2809064fcfbf185103decf494957e926514068b731de080b8a279ad2177ed0b812dee88e0d23c817f3ab7de92fdfe0fb2701f5b45f273e587bf487b14420a1594ecf3fb44b02e7cfa5b1d761cb1b8e568839ba7386e0f938d09aba0dd225e34619ed8c3be6d7b43a2c1957a57733cfb30ae46a3",
      "5184024af5d451bbe3d8686b56cb671016f1f2177a72fbff6605763e63040000",
    ],
    [
      "ETag",
      "f7nGTJiu+175bd0tj1msMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "46",
      "df",
      "65",
      "7a0b0dd8d200891762686a8b8d55ec4d63cc0a23c5024377178d21bc7b67b137fbf3ed999993ede1a76c7208e15016bf1dcaeb5d81fac31cd6a8ba4a2bde5a6a148205a845c1e4f9edf339ba78133f8d4fafadf4e6c9f24114d329132afbc65a40d8c3b1c42a57107ef5d0881ab96cbf976347c6f4b53549ba58c69b74b65c7154536ea2f76d92cca2248661375870a2c31a8f28b1c9d0346d259d30d30be3ab44dd56682bea64860a46787c282475ad90443627f6c4b1dd27c70d5ccf0b7cdff119ac2813baa486d9ed06788c262daa355d58175c06e47864f3e3b89e4d7ceff90eb77083c7383072bbffb2e8aa51ad24b1834233deb9a9ccc9e869d6d6b2430b32c15ff352eadb7df8032edbd9c977010000",
    ],
    [
      "ETag",
      "vKVFBw528TEjJpr5CLM3ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dcfc97282300000d07fc9591d1601d31b749055adb8307061428896821092208bd37fafd3f707ef0510c684f34cb41569c007989002577815b41b4b1d0ae52ae2f62ee44ffdd26e597f4ced63f9454fdf43a76e243c3ad572fd983a34b2e96cc4d535904c18ab62a437fb61643e9afb92a54d31ccc3c8f97d2ea02659ba3b44d47477618df5544ae185bb817658233d099c3e577abf08e4d8a537efe4c986d617f9b33f0735a6cf32db4779e2d9c533e6792a2c33aef74ea3ff74b45cee0e216ab669329854b2abc837dd10830520232d19e159f99ea91a840bf0dfccc444c9fb6a11c40803bf7f15476e8305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "2b64f6b52aa8289a98adab74b5516c11db6c361b320c173a2d329419da348dff7d2f43356d9ab44fcccc3de79e733f78250f3c8fc998443c7daca07cf9712f22724640d1145fd3eea57d395facee9eaf6e7fad1e2c3b9f2dd2ebc90411bc6649ba2f32684951950ce478b76da7a5a80a5a0ad1c244adaed5b206a635b26c7be438a6833c0959b2e2f903b2ef942ae4b8d3396ab75321d20c68c1659b89fde9bdf3d4ed14a5b807a664e7a364075564e76bd19f99605471914f765b3450492843d8539ed5059e987174fe31759bd37d3b45f0136740191355ae6a5b9882893ce16955eaac64fc4ab4cd7707b27557ee2c3098c8aa7d1ee6740f67464c150dd54b01c685bf591b4bef62e3afa7c172e385dbd9c25d4fdbb3cd6ab7f6b6c6edc2f55d43d12803cd3526c6b9be797841fd18a4e2b9560feae75af9ad41cbcf63a909282da109864373402dc71c4549346489d3b3a3c4842872a2a14d7b91c9467de8c71150e46951cda2b9c81dcb1a38bd1184b133b4c27e9cb03072cc6e38a4c02c16d930e8f7c8e18c3c975cc19ccb4248de7488dcfacbc00d037fe7cda681ab4b486895a97963ac2ee0bd47850522e88b9a0e75940b54aadbbdf402d79fce82e58ddb4c780529652fdb479c7142330988a625364f41b91631368c78d3b53b47b09ed8d53128c9f8ef2ba97b5ebb78d7f2133dc001d67695fe926de02fbddfdace117143b34a439e9a0329d0f21dd686ae0fff10894bda6421d73bd7ff439a271f12282167df4f13c13af0edbf765c7cc4e2eaa38c5478c7dd61b2166125343bc475b96fec",
      "41b76f8e4644834bf529d6b57bc7aed539ea8cb0875cbd55d42c3e16da8855f204c2208edfd3dd3afc074947244a78040000",
    ],
    [
      "ETag",
      "g2J5JDHLhwPWBLk15nCHgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92414fc2401085ffcb782d911a406cc2a128280922d27232842cedb414b79dbabbc510c27f77b6221a35d14b3b33fd66fbde6bf7f09c153178b0cad2970ad5ee2c45f3688b19ea4a1acdb7920a8de0001a9132392fe5f9b624e306ebbbf65c0481c92f8769afc7848ed6980bf0f6906428630dded31e0a9123af4524abbc58d69d036657da6110ce46935bee738a6d3f998fc77e7f3c8083735a8c8511cb9affc7dae2e0c08656334c506111a1d5522ada606446d6a6167929b1a1a952116aa8e1fa41aaa82a85226af0a471e136dc4ed3bd72dbedab6eb7d9655052244c46854d20607d60c80839a35776091d06545db2e1a4be6e799cc5b5115b8e2661a755ebfb0ab0b42493b8fc1b64bd6bc19fe1033b46f09d133955853951c3f183ffdb719ce9e751377e38f84168c3499d9070743f0842ff7e6ab9c5d17b7f67504f1571901a6d866eb3d56d5f769aefb15e938d9adfe31955a10391e0bfe32e33e025426a3cbc01e82add087b020000",
    ],
    [
      "ETag",
      "Upl/vpot1ShH5UaSStm7Fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-22-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "7b69a526900408448aba28652d5b2e1d21ada6694a6c63a85bc0149b6e5195ffbe0334bda852fb049cf35dce8d4774c7f3088d10e1c97dc5cadd975b41d009620a2775d4b19c8b75f2e3d60adca4ffddb477ff743c198f01c16b96c45991b28e145549991cad57dda41455814b213a20d4e9f73b3ddbe8b93dcb721dc7708027591acf787e07ec1ba50a39d2f5837737112249192eb8ec52913dc7f587be5e94e2965125f5b7963ab848fd63d3d35450acb8c8c7eb15145049566e5886790a25bc3023f2f5ad7497e3ac9b00f8815386291555aeeab240828a3ce6495536aa68f4889a325fbda09537f3a6a1365d4e66de6aea1d4daece8fb638ab35b6c7279a71ac61a96d36259355aab46fc172ae6d0bb0bdc192c9ad767de1051e444a11f3946d78b4d5c6daa936f3e77ea8f5a0828849c5f3c63fc42465b5f7d388fcf78ba9095881749bdc0c0d1bf71cc3253119d2d81958243618210e195a78400cea9acc8c08c3c053b57ac3c2b9c86d62397d3726d48cdd989946342011714cd71c322722a615db36b56d3c40fb13f4b7e48a9d715908c9db39a1ebc00fbd4d18ac17d349e8356dc4180670d6165737f1ba4e054d02e883bef675960b70aa87ee2f422f984c43ffca6bf73c6309a6bbd53d6c3ac6a96480c625ce9862e55c44303474b95cf9a1bf5c4c66c068967779404834fafdf8420877453365d53c6b2fdb6cfc0f802b9c560de2a17d413db4dfff0104dc644b463fd75ef00bb5a180c5ac6439fd7c",
      "75006e129ffe5a873b072c5c3ad84805df702854d626b464edc1f0ac29af65db7dcb74eb930270a9dee56cab7f984cad512bb28ce5eaa9a3f6cea1d1d6ac92cf2048c29e17fee21cb2ff01e1f5b5e467040000",
    ],
    [
      "ETag",
      "b858HUgKj5R9g2J46yx/aA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff2d904d6fc2300c40ff8b77a513a5b0011207983631adda563e2e4c0885d42d656ddd25ee5085fadfe7945d12db79b69f7285efac8c610ac72cfda9d134772972e48215da3a672b5745a545e801b24a851c6e023d788b82f569785c267ca9764db48b663321ac3e61a1607a8524c33cb630fdba42a90a94b6c3c1741305e3a6729597f063be91b4a0d8a5efdb309c2fc26768f76d0fce745c6182064b8d6e6065e88c9a5f9dab554595a367a9361a2d7470f7901aaa2b65883ca9788381e73ff4fd893f1a4dc6e3fe58c09cb4e28c4a61b76b90354cacf2155d44157c014c178a75d29dbfae7cff1838a7fd3fbd6818eda721596dd16deddf0c9ec859b1d8b2a9b1075ac96f2c33bee5ed1fff753c746a010000",
    ],
    [
      "ETag",
      "4T3c2KQ3Sh4bHftwpZyQZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b7282300000d0bb642d0e0262e80e919f0a22a5026e981863495112fea0d3bbd7e9bbc17b018431699aac650529c1079890a4cdf17cc7e05a1e88aba6d061748b71711573f3fe94faf3492aa907b3f248bf56dfba898c4f18b144b5cac451ddb065328d6d69b3ba70d3ca47dd1cfde971e263705018430d5fa4399cbabebac44da757f75bc205bbac993d794120fc10a1d4ea70211c6af5b9f74709ef6e61678967c3cd7445c0328156e8bb7d546da3a21d965e9a0f48bfeec542941e10c7a6121fd3d149370e3744300364e4b4264d46df3379a96933f0dfccda8993f7754d504d6af0fb07af35c44c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "ab2dd0276dd2ac4dc595aca52ba59acd664386e182a3c02033b8aba6ff7d2f83753526fa8999b9e7dc73ee832772cbcb84cc49ccb3bb06ea872f372226470414cdf0d57b7c74ce8a71f93da02b79575f5dfc1d9b9be5628108deb2242daa1c7a5234350339df6dfb592d9a8ad642f430516f30ecd913cb9ed9e3f1cc712c077912f2f49c97b7c8be56aa9273d33c68f73321b21c68c5659f89e2e5ddbc1f98552d6e802969be953451459a1f8b7ecd05a38a8b72b1dba28146421d4141798e16fe3393f8f86dea3ea7453f43f03d674019134da95a5b98828932e55953ebac64fe44b4cd5707b275cfdd5568309137451995b4802323a18a46eaa102e334d8ac0dcf3fdd04eb65e86dfc68bb3a73d7cbfe6a73be5bfb5be3eacc0d5c43d13807cd3516c6b1bef97841fd04a4e2a5560fdbe756f9b941defbb1b4049496d005a3a935a1b663cde2349eb2d4198ee3d4823876e2e9980e638bcd46304a62a0c8d3a29a454b518e920130673488d2d914a29195b2289e511a0d639b4e66d628b14731d91f913f355770c2652524ef3a44ae022f74a330d8f9ab65e8ea1252dae4eaa433d616f0daa3c20211f4414dfb36ca052ab5edf6fcd00d96abd0bb74bb099f4346d9c3f60e679cd25c02a2698dcd5350af45820d23fe72ed9e20584fecc72128c9fcd713697bdeba78d5f2177a88036ced2afd25db30f0fc6fdace017149f34643eebb03a9d0f235d686aef7bf11894bda6521173b37f849ba",
      "a70052a8a1649f4f13c13af0e9bf76587cc4e2eaa38c5478c7dd61b2156135743bc475b9cfecc96062db13a2c1b57a171bdad343d7da1c6d4628a054cf15758b8f8576628d7c016110c7efeb6eedff010660b96c78040000",
    ],
    [
      "ETag",
      "Izz8Hm5nKRaCsqrWQx5/OA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "65",
      "7c2d09285468c203204813408462888690a59d42b1edd4ddad8410feddd98a68d4445fda99e999edbdb73dc0739406e0c02a5abfe428f7176bd4f7a698a0ca63adf89651aa102c402dd64cbaf3beec3c3cf652eaad1a433b9ce772d8d9359b4c287f838900e700618471a0c0793a402a12e4359fe23c4997456781de676638f526eee896fb8402d38f668341ab3de8c2d13a2f06428b65c1ff636d71b4604bab09862831f5d168c9246dd1d7aeb1a94492c55852944b1f151470f1602d29cf84242af1a4747955aad8e54aa352ab35eaf5729dc1987ca1234a999d4d591f68d2229ed08e5d82cd802c4a361c16d7571e474161c494eec8b3ab85beaf004b0ba318977f83ac7723f8337c60a708be7322a13cd567aa37b86bfd761c67fa79d44dcbebfe2094e6a4ce88e70ebb53af351c1b6e71f2dede6b5463491ca4429361a55cadd7aeedf27bac1d3251f37b1c2d73b4c017fc77f4230d4e286285c73719168a5e7b020000",
    ],
    [
      "ETag",
      "IXHrCVZFnoFb9M6fXurMCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-24-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8553596f9b4010fe2b68fbd24ab101c7186cc94a2d87b6483e528c935655652feb816c022cd95d924691ff7b0788732852f204cc7cc75c3c906b5eecc888c43cbda940de7fba12313922a0698a519fcecdbb092beeae8e7f058cc2bf1bc52793f11811bc66299a97197494a82403355aafbaa9145549a5101d14eaf4fa1d7b60d943db71869e6779c8539025335e5c23fb52eb528d4cf3e0dd4d854833a025575d26f2a7b879db334b29ae806965beb634d14599ef9b9e648251cd45315eafb0804a81dc404e7986253c3377f1d7d7d25d4ef36e8ae05bce803226aa42d765a1041345c2d34a36aa64f4409a325fbc90953ff3a791315dae17d1e72dcd6bf2f68b4195b1d9485055a68d6fe1726e6c4bf4baa40ad4d6b8f8e1873e46a44878061bbedb1a63e3c49805f320326cb4dd81d2bc684c231a67501b3ece2578bb8d9a40354ab7c98d6b0da8ed59c338895d9678c74e9c5810c75eec3af438b6d8b00ffd5d0c1479ba566f58b410c5204ea8ebba4e7f48876ec23c2b01c7ed79963b707ab1dd4b068ecd18b03ed91f913bc9359c72550ac5dbe1908b3088fc4d14ae17d349e4376d24140770da165737f1b24e8d4d22e89dbef675960b74aa271d2c223f9c4ca3e0dc6f973b8394b2fbd50dae37a1990244534973d020e76287432367cb551005cbc564868c666367078422a33f0fcf84e8be6ca6ac9b67ed3568da7c029cd3ac6a10b7ed0bb1c97eff171178882d99fc5cfbe16fd28642484042c13e5e1d829bc487ffd3e1b8118be78d364ae3371e0a53b50993d01e0ccf9bf25af6a0e7a20069c052bfc97976ff30995aa356841c0afdd8517bdcd8686b56a927102671cf8b60f11db3ff012af204375c040000",
    ],
    [
      "ETag",
      "EaM/wAcnwj3XIcaexqsiAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90d16f823010c6ff97db2b24b04d83243ec062a609631bd31717636a3d190eb8ae2d2e84f8bfef8a7be95dbffe7adf971be0bb6a8f10c3a12a7f3ad4fd5d89f6dd35059aaeb6868ba2d620788056944cb62f855299d94a9dcaf5e521489679ff9acce74c18f9858d8078805385f5d140fc39402b1ae46ffbbd1e2732667be59455be5e3c2f0a161a3a3a21df645992660bb8eeae1e9ce950e00935b612dd48a5e98cd2ae5c5a231a55a36fa8d3120d8cf0f8506aea94d0443e2bfefda31f4e8370164e26b3280a22066b92c256d432bbf900b6b164455dd02f878590013db69cfb349e1796a72ed0ee1f4d7b8be64d13fb1a7496c1cdfe895c24cb51adeed003297819cbcadeeed73f66e7804d69010000",
    ],
    [
      "ETag",
      "nMRppLsZcrBcTv30AHNyOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00d07fc9599c56109ade8a309832b2ca7ac9b0444a4301212cc1e9bfd7e9fb83f70059519071c4aca3a405ef806707b82ff666f7a68acbad6cd32da18d186df7116d1ae45f0a56a2b3810569c6d525708c5616dd367f756de73aa552c42c9c38a5a56e612ee013ce6b033214233d4528f0c6aa633a3ddeec2b845ddcccfa5449614b5d5a39e5fd0cd75c22ac2f34d3e49c7e08decb29a610259d667acbf41da54e989707cd80cac597270e7bc69d8acfbcf9243f280c697b582d3bf0279e85fea2ca12d801b2f6f540465c3f67e211c21df86f62c67bf2bcaa241bc8007eff0078e72b9b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "db3014fd2b91f795b669e823ad548dae04a8d6a65b9a82a6698a6ce726189238c40e0ca1fef7dd38948190e0536cdf73ee39f79127722b8a984c0913e95d0dd5e3971bc9c811014d537cf56f9dfeb92c65950ffe5e157c22cbe0fbb787d90c11a261299a97197494ac2b0e6abadb76d34ad625ada4ec60a28e33ecf447767fd21f0e27ae6bbbc85390252b51dc22fb5aeb524d7bbd8376379532cd80964275b9cc5fde7bf74eaface40d70ad7a6f257ba8a27a1f8b7ecd24a75ac862b6dba2815a4115414e458616fe336376f2367557d0bc9b22f85e70a09ccbbad08d2d4cc1659188b4ae4c56327d22c6e6ab03d97a2b6f115a5c66755e4405cde1c88aa9a6917e2cc13a0b366b6be99f6d82f53c5c6efc68bbb8f0d6f3ee62b3daadfdad7575e1059ea529cbc070ad9975626e3e5e503f06a54561d4c3e6b9517e6ed0f2fd581a024a2b6883d1d81ed1be6b4f58c2c63c718f872cb18131978d87f498d97c328041cc8022cf881a162d6411c3d876c1194723368ca34162b3883a031ab931a78cb2a133eac7647f441e2aa1e154a8522ad176885c05cbd08bc260e72fe6a1674a48689de9d3d65853c06b8f1a0b44d00735ed9ba890a8d4b47be9875e305f84cb4baf9df00a52ca1fb77738e384660a104d2b6c9e866a2d6368567bbef64e116c26f6e3105464fafb89343d6f5cbc6af90b3dc4013676b5f9926d182cfd7363e780b8a4596d20f7ed819468f91a6b43d7fb3f88c4256db3909f3b2ff845daa70012a8a0e09f4f13c126f0e9bf76587cc4e2eaa38cd278c7dde1aa11e115b43b244cb9cfec91e33a936362c0957e171b8c4687ae35399a8c9043a19f2b6a171f0b6dc56af502c2208edf37dddaff0354bb",
      "a13778040000",
    ],
    [
      "ETag",
      "Nk21Goporm4xWnc9opRKBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "df657a8b8958b14ae205b6d4127f5a057bd318b3c2a05060e9ee52638cefde596a6dd336696f6066f86639e7c0019e9322021bd6c9e6a542b1bfd8a09ae9628eb2ca94a45bc90b8960002ab62172344cfd4b73b45dece25690e633d7da0d1e77fd3e1132dc62cec03e409c601649b09f0e50b01c692de4599517abba3340ed4b3df483b9371d529ff348f7d3c578ec0cc62e1c8df362c4145bd5fc3fd696470352be9e638c028b10b59652f01443e5699b92e565860dc92b11a2841aae1f6c04af4a26386fd0a4d1b21a66a769f64ccbea75bbcd2e81190f994a7841ecc2277da0b862d99cefc825740810754986e3fafa4ae324aa8de8d29b069d76adef2b40d2e224c3d5df20e9dd32fa0c1fd82982ef1ccb7955a833753bbe777e3b8e32fd3ceac609dc1f845494d41909bc89eb07cee44173cb93f7c15ea17c109c8294a833349bedae75d569bec77acd75d4f41e5b890a0d0819fd1d7789023b6699c4e31b2dfede7b7b020000",
    ],
    [
      "ETag",
      "KGjS31KhUwf2TjmQE5wBVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-26-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "6f9b4010fe2b68fb9248890db6396cc94a5d87b4543e121b276aabca5e6020eb004b76174751e4ffde01e21c8a943e0133df31174fe48ee51119908025f72588c72f5b1e9013028a26183d5f5dfbbb9fcee505bfd86e7fa7fab787ab6dfe301c2282552c49b3228553c94b11821cac96ad44f0b2a082f353143aed58a786a51b7dc334fb8ea33bc89390c61396df21fb56a9420edaed83772be13c4981164cb6429ebdc4dbbb4ebb107c0ba192edf7966d7491edcf4dcf521e52c5783e5c2db1805282584346598a25bc32a3e0eb7be916a3592b41f08e8540c39097b9aaca428990e7314b4a51ab92c113a9cb7cf34296eec41dfbda783e9ab8cbb17bb45c4d8f3634ab3436c7279a7eac51a9add70264992aed62319f6a9b026d6fa904b9d16e7eb80b172382c72c85358b36da503bd326ded4f335032b88402a96d7fe3e0d52a8bc9f47e47d5c4c45a00aa59be4dad62d6a387a3f88033b8c9dae19c43a048113d826ed067ad8ef412f0a80224f55ea358be63c771c6a83dd8fbb866e77bb9163dba16d0636f4cc2eed9bbdc8b6a9658141c9fe843c08a6e09cc9824bd6cc89dc2c3cdf5dfb8bd56c3cf2ddba8d98e200ce9be2aa26ded6a9b049047dd2d7beca328e4ed5d0bd99ef2e4663dfbb769b3d4f20a1e1e3f21e371dd35402a2a9a0192810531ee1d0c8e57ce9f9de7c369a20a35edee50121c9e0cfd32bc17f2cea29abfa597959bddaff00b8a669592376cd0b31c87eff171178930d995caddcc52fd284161083803cfcffea105c27fefb6b1dee1cb178e96823157ee3a184b23209053407c3b2babc866d75fa56c7243558a80f39dbb20f93a9342a45c82057cf1d35778e8d3666a57c016112f73cf366df31fb0f49fc491967040000",
    ],
    [
      "ETag",
      "DUVTvJ8PFoFjjZl0BwQjnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "83",
      "30",
      "0c",
      "40",
      "ff",
      "8b771c4cb0ae1d45ea81564c9b84f6c1da5da6aa4ac1503ac090845508f1dfe7d05d12db79b69f32c04f51a7e0c3b1c8db0e657f93a3fe30418caa2bb5e2aba15a2158805ae44cb6edad770add3ede3e3e384190ab59f8b5b9ac564ca8e48495007f80acc03255e07f0f508b0ab9ed7090d344c674df98ca53f4166c39ad2835e9eb2e8a827514c2b81f2d38d331c60c25d6099a818da43326fac5b82a513525da8a3a99a082099e1e72495d232491cd15fb7e61bb0bc75dbaf3f9d2f31c8fc19212a10baa99dd7d02afd1a44519d38555c165404e215b67d3f96bcaceddcc3352fb7f7cdd6b54ef9278b742b3d6b92a6cc86869d6d5b2430b12c1dff15ce86b3efe018f7a2df96b010000",
    ],
    [
      "ETag",
      "qq+8hE1yRT740AAgs3EVCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "df",
      "56",
      "82",
      "30",
      "1c",
      "00",
      "e0",
      "77d9b57a501c4a7783109220fe44ba6e38347fe4b204b7e5189dde3d4fdf1b7c3fa8610ca4ac55778233ba43a659b833368bbbb567eb839358993b4f92d71c9877d2ae52abb6045ca585a72ed7694f847198a364e78b4f2a949f183cb6c22ee4946e23558e18e0d1da8524891eb6d2e6ed7d54aa30ccc850d1bdd4a4217a15c76c686995d2f7415dac85c573f3f102a35d9ad47a92cf3c9b6fdcac298b30d681b71cc9263bd6785f7c71bc53827579165691f663870630d5dfc743c183f3f026d64b344130f45c80acf96d6663d79da0ff66ad4c0fb7ab078d00817eff006061718005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "db3014fd2b91f795b649dfad548dae8491ad4d479202db3445b67b130c691c628709a1fef7dd38948190e0536cdf73ee39f79147722bf22d991226d2bb0aca874f37929123029aa6f87af56bf9ed1c54e19570bbfcbebdba380fbf6cd2d90c11a26629ba2b32682959951cd47413b6d35256052da56c61a25677d47286b633710683c9786c8f91a7204b9622bf45f6b5d6859a763a07ed762a659a012d846a73b97b7eefdc773b45296f806bd5792dd94115d5795ff4732639d542e6b34d88062a05650c3b2a32b4f09fb965c7af53b705ddb55304df0b0e947359e5bab68529b8cc139156a5c94aa68fc4d87c7120a1bb741791c56556edf238a73b38b2b654d3583f14609d06eb95e5f9a7eb60358fbcb51f878b3377356f2fd6cbcdca0fadcb3337702d4d5906866bcdac6373f3f182fa5b505ae4463daa9f6be5a706796fc75213505a41138c47f6903a637bc21236e2c9b83760890d8c8dd968407bcce6933ef4b70c28f28ca861d11c6b067b8c311a8343fb719fb17ecc8077e3219ee86044470973c8fe88fc2d858613a10aa944d321721978911b47c1c65fcc23d79490d02ad3278db1ba80971e351688a0776adad7512151a96eb7e7476e305f44de85db4c780929e50fe11dce38a1990244d3129ba7a15cc92d368cf8f3957b826033b11f87a022d3df8fa4ee79ede245cb9fe9110eb0b6abcd978451e0f95f8d9d03e282669581dc370752a0e56bac0d5defff201297b4c942ce376ef093344f01245042ce3f9e26824de0c37fedb0f888c5d54719a5f18ebbc3552dc24b68764898729fd8c39eedf4bac4804bfd26d61b3987aed539ea8cb0835c3f55d42c3e16da8855ea1984411cbf6fbab5ff079a3c1f",
      "6878040000",
    ],
    [
      "ETag",
      "XZLJQespIrekLKdXVQSBUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92416f82401085ffcbf48a09b68a4ae2015b5b49d05ac55363cc0a0362171677971a63fcef9da5d6366d93f60233c337cb7b0f8ef0921531b8b0ced25d85f27095a27e32c50c55c5b5a25b290a8560016a9612b9f077235e95fb6918d81be6756ef2b03579eaf78950d1067306ee11920c79acc07d3e42c172a4b548f02a2f567567813e9466380f67fee481fa5cc4a69f2c82c01b0443385997c59869b6aaf97fac2d4f166cc57a86094a2c22345a4a29b61869dfd8542c2f393694a864840a6ab87e904a51954c0ad1a049e3bad3683a76b3d76cb77bddaedd25908b88e94c14268139e9032d34e333b12797e01020eb920c27f5f595c6595c1b31a53f099d56adef2b40d2928ce3ea6f90f46e187d860fec1cc1778ee5a22af485ba0f1ebddf8ea34c3f8fbaf3c2e10f42694aea8284fe78380fbdf1d470cbb3f7c141a39a4a41412a341936ed56b7dd71ecf7586f85899adee36a59a10511a3bf6394697013c6159ede0087975eef7b020000",
    ],
    [
      "ETag",
      "UIqHlupwPTL0haA73mT4NQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-28-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553db6e9b4010fd15b47d69a5d8806d30b664a551425b24db49314e5a5595bd2c03d90458b2bb388a22ff7b07887369a5e609983997b9f1486e7999902989797657837cf8702362724440d30ca3693d58e8f1ce528b1d983bb8bb123f74703f9b2182372c458b2a879e12b564a0a6eb553f93a2aea814a28742bd81d7b35dcb9ed88e33f13ccb439e823c9df3f216d9d75a576a6a9a07ef7e26449603adb8ea33513cc7cdddc0aca4b801a695f9d6d2441765fedff438178c6a2ecad97a8505d40ae4060aca732ce18599c49fdf4af7392dfa1982779c01654cd4a56eca420926ca9467b56c55c9f491b465be7a212b7fee9f46c622587edcd2a2a16e3f1954199b8d0455e7daf8129e2f8c6d854ed75481da1a57dffcd0c7881429cf61c393ad31338e8d79b00822c346d30494e6656b19d13887c6ee692ac1bfbb680854a37497dc8c2d97da9e3589d378cc526fe8c4a90571ecc563870e638b4d46304a62a0c8d38d7acba2a52847e3b1330087513aa02388dd51da8c169c64e0d82e755c96a4d66868c7647f44ee25d770c6552514ef4643aec220f23751b85e9e9e447edb464a7100675d714d13afebd4d82482fed3d7bec972814ecd9c8365e48727a75170e977ab9d4346d9c3ea0e979bd25c01a2a9a40568900b91e0d0c8c5f92a8882f3e5c91c19edbe2e0e0845a6bf1e5f08d143d54e59b7cfc6cb1db5fe07c025cdeb16b1eb5e884df6fbdf88c033ecc8e4fbda0f7f922e14420a124af6feea10dc26defd9b0ea78d583c6eb4511abff150986a4c9884ee6078d196d7b1dda1ed392e69c152ff9d1b58def8309946a35184024afdd45177dad8686756ab67102671cfcb60f915b37f0054ba7fa55a040000",
    ],
    [
      "ETag",
      "fu2Mt7v0sMve/veqWoXtIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "82",
      "301080ffcbed151630d320890fc8345b42d8e6e65e16636a3910061c6b8b0b33fe77afb897f6eefadddd979ee1bb6c3308e150163f3daae1ae40f366830deabe369aaf8e5a8de0001a513019e77f7e7a8ab3f453af1e977d51cd8eeb2c5a2c98d0f2888d80f00c798975a621fc3a432b1ae4b6fd5e8d13193343672bebe425fae0b4a1cca6e93649a265b282cbeee24045870de6a8b0956807768a2a94e6d9ba6ad17435ba9a7a2551c3088f0f85a2be138ac8e58a3b095c7fe6f9737f3a9d07811730589314a6a496d9ed3bf01a4346d41bfa6555f0195063c8d6f9789e6cf9fe61629d76fff47230a85f15f16a8d76ab773388c95a19b635aa4707a4e0df782acd2dbf5c0145512fc36a010000",
    ],
    [
      "ETag",
      "Cfz1NvCdNVsEDBugj6hFdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb64ed38235884ee108b40a0808011369900b1418468f8b7d3bbd7e9bbc1fb01a42868d7e19ed7b405ef602192b62ed690ab7b792abd14f57668cfb973ba1972c08c0d756de2a32dd78ee96417f83a2bfe79848b211d966c6c36a7b617c3344dc80c76de815bcca1b952c0bbc51a0fab0be159aa3f51f85d2bad12c9a3044d2671a6df6cc8ce5d1c24c3d315c79d33f8a8bc4b4a905faa4e4e137ce57e8c45182c71e8304832345318252231a36dd990f073d0bf2c5b753faa711417d8a34c4e6ab002747e548276b87acde4374d5b81ff26ee97077d5df794082ac0ef1facb8e0aa05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-29-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6f9b3014fd2bc87b6d0224252191a2354ac98696900d48ab699a906d0c750b9862d3aeabf2df77314dd7aa52fb84ed7bce3de77ef0886e7895a239223cbf6d59f3f0e95a10748298c239bc7ebbdab4d3fb2a4ad7fbe08f73db363559ffbd5f2c00c13b96c4655db081146d43999cefa361de88b6c68d1003483418cd06f6c4b267b6e3cc5cd772812759916d787503ec2ba56a3937cda3f63017222f18aeb91c52513ebf9b7723b36ec435a34a9aaf254d5091e6fba29f0b41b1e2a25aec2330d04ad624acc4bc000bff9929397b9d7ac87139cc017cc729c3948ab6529d2d48414595f1bc6d7456347f44dae68b038abc8db78a0d2a8ab6ac920a97ecc448b1c2897aa899b10e775bc30fd6bb70bb8cfd5d9044abafde76395ced36fb6d1019975fbdd033142605d35c63619ce95b0017d04f9954bcd2ea71f7dc293f35c87f3b968e00d292f5c1646a4db0ed5a33929129cddcb143328b11e292a983c7c4a2b353769a128681a745350b57a29a669935195b38219464c9e928cd12d7194d9211a5764a6d37b3c6181d4ed07dc3153be7b21692f71d4297a11f7b491cee83d532f67409196e0b75de1beb0a78e9514181007aa7a64317e50294ba76fb41ec85cb55ec5f78fd84372cc7f421ba851967b8900cd0b881e629d66c450a0d43c172eb9d03584fecfb3128d1fcd723ea7adeb978d1f2677a0c03ecec2afd45511cfac1176de788b8c045ab2177fd01d560f90a6a03d787df808425edb3a01f7b2ffc89faa79065ac6115fd789a00d6810fffb5e3e20316561f64a4823bec0e959d086d58bf435c97fbc49e8c47cecc411adca837b1a93d3976adcbd1656425abd45345fde243a1bd582b9f411084f107ba5b877fbe10c49b78040000",
    ],
    [
      "ETag",
      "KhLu7wnSdFUNx5qurpbFzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d14ec2401045ff657c2d09554068c20368812680588ad1184296760a85b65b77b71242f877675744a326fad2ce4ccf6cefbded01b6491e8103cb64f552a2d85fac50ddebc24759a64ad2ade0b944b000155b11f9f2e8f6ae7cf530990eb652f4dde5fa89b15dbb4d840cd79831700e10279846129ce703e42c435a0b795a66f9c27416a87da187d3c0f7c67dea331ee97e3c1b0e3bdda10b47ebbc1831c51686ffc7dafc68c1862f7d8c51601ea2d65208bec15079daa66459916245f2528428c1c0e6c14af0b26082f30a4d2a97ad8adda8da2dbb5e6f359bd52681290f994a784eec6c4afa4071c5529fefc825340810a624c3b1b9bed238898c115d7ae3a05133fabe02242d4e525cfc0d92de35a3cff0819d22f8ceb18c97b93a53bde15de7b7e328d3cfa36e3b81fb83908a923a23813772a7416734d1dcfce4bdbb57282782539012758676b5d6ac5f37aaefb1de701d35bdc751a2440b42467fc72051e0c42c95787c035cc8c82b7b020000",
    ],
    [
      "ETag",
      "qXEF3RtVPSHksrGEbhYaaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-30-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553594fdb4010fe2bd6f6a59520b1c965478a6814dcd6521268e240abaa4ac6ebb159b0bd66770d4288ffdeb14d3884549eb299f98eb9fcc0ae4511b3318b447a53a1baff74252376c0d0404a51c5f3abdc9b453cbd9b65e05e4f41b9ce74322184a8591af232c3432d2bc5518f37eb4eaa64558292f290840e7bf6a133b41dcf190c3cd7b55de269cc92b928ae897d694ca9c7ddeedebb934a996608a5d01d2ef3e778f7f6a85b2a7985dce8ee5bcb2eb9e8eeff4d8f33c9c108594c366b2aa0d2a8b69883c8a88417661c7d7d2bdd1190775202df0a8ec0b9ac0a539745125c1689482bd5a8b2f1036bca7cf5606b7feecf426b31fdf57907794ddd7db1405bdbad425d65c6fab63a5d58bb929c2e41a3de59173ffc954f11251391e156c43b6b621d5bf36011849643a6316a238ac6328428c3daee692ac1fb5dd4043024dd26b7237b088e6b7b51128d78e2f60651626314b9d16800bdc8e65e1ffb7184403c53ab372c286401313f8a7b43003b41cf4b00e2c41b818b6ee23ace1038c68e77e4c40e7b3c60774a183c11ba945ab4a36117ab20f4b7e16ab39c4d43bf6923011ac0495b5cddc4eb3a0d3549a0fff4f558678524a77acec132f457d359189cfbed6ae79802bf5fdfd07213c834121a14e468502d644c436367a7eb200c4e97d339319a7d9ded119a8dff3cbc10c2fbb299b2697e6baf61bff1df03ce21ab1ac46dfb603485c7bf84a0336cc9ece7c65ffd666d6885092a2cf8c7ab237093f8f06bda9f3661e9b8c9461bfa4f87c2756dc215b60723f2a6bc963decf5e8c11ab032ef726edfdd4fa6d6a81531c7c23c75d49e3635da9a55fa194449daf332587ea7ec3fd40f33445a040000",
    ],
    [
      "ETag",
      "rcmjm9CbcgwCla8kAar81A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90616f82301086ffcbeda3b080c60548fca0cb962d213add34d916636a39180a1c6b8bd310febb57dc97f6eeedd37bdfb685635e2510c13ecf7e1b5497bb0ccdd2162bd44d61346f35551ac101342263d23f2ebccf34d19bd3e69c86f26b301f9c97cbc984092d7fb01410b590e658241aa2ef162a51225fdbed543f913173a9adf21c2fa61fdc9694d876be8ee3e92c7e826edb3970a0fd0a53545849b4036b450794e6d566d5a2ac0b7435354aa2861eee0f32454d2d1491cb8a3bf25cffc1f3437f3c0e83c00b182c480a9353c5ecfa1dd8c69011c58afeb47d1803aa2f3975daaf279687f7c391cdb4fda7671783fa4d115b6bb4aede2dc123d95486d31ad5a00352f06fbce4e6d67757215db3b16a010000",
    ],
    [
      "ETag",
      "1kO0YfdsVvVxf9cZ+N+xQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "72",
      "43",
      "40",
      "0000d07fd9e7c85434177db3894b84e9324bf162746ddc26c8b2169dfe7b333d7f707e4046081d8674ec1ada820fb0643b754bb6b7ee0415411c544e86db7f06fc4b60fb81a795e0e09a984c8be3752f15c9377e42fbf87e9b02ce7963ed8c484e63e486a8f59c794c6ab37f121e19412eb561864f87a53868c297c5acf96d2e2c1bea0fcf4f5d5f82eafd58f46f78143ba2dff56ae41795a20ad2a466398b8628d42b6b951d6fce66db17e7925c4b6b4a2efe22c99a87d18c73a786a88bce56ca1453695cb00174ee2b4687b47acd94bdaa6ec07f331d979ebeae90668c32f0fb071a353de805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-31-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b3014fd2bc8fbb82610204f295aa3846e9112b20269574d1332ce85ba25986293a9aaf2df77314dd7aa52fb09dbf79c7bce7df044ee79b1231392f0eca186eaf1cb9d48c8190145337c05e6b2edc27eb83fc8b2bf7042ebc6fefaeb723a45046f5892eecb1c3a52d4150339d986ddac1275492b213a98a8e3f43abd81d51bf7fafdf168648d9027214f57bcb847f6ad52a59c98e649bb9b0991e5404b2ebb4cec5fdecd836d9695b803a6a4f956d24415697e2cfa2d178c2a2e8ae9364403b5842a863de5395af8cfdc25e76f537739dd7733041f3803ca98a80bd5d8c2144c1429cfea4a67259327a26dbe3a90d05b79f3c86022aff7455cd03d9c193baa68ac1e4b302e82cdda58fa179b603d8b961b3f0ee73fbcf5ac3bdfacb66b3f34ae7f788167289ae4a0b9c6d438d7371f2fa8bf03a978a1d5a3e6b9517e6ed0f2fd581a024a4b6883f1d01ad0dec81a27693264e9c8e927a90549324a867dea24161bbbe0ee12a0c8d3a29a450b51c00eb143eac6433bb16397da108f6db062e62423779c3a497f08e47846fe565cc182cb5248de76885c07cbc88ba360ebcf6791a74b48699dab456bac29e0b547850522e8839a8e4d940b546adabdf4232f98cda3e595d74e780519658fe103ce38a5b90444d30a9ba7a05a8b1d368cf8b3b5b740b09ed8cf535092c9ef27d2f4bc71f1aae52ff40807d8d855fa4bc22858fadfb59d13e28ae6b5861cda0329d1f22dd686ae8f7f10894bda6621975b2fb821ed5300295450b0cfa789601df8f45f3b2d3e6271f551462abce3ee30d988b00ada1de2badc67f6c0711d47ffa98a56ea5dcc1dd8a7ae35399a8cb087423d57d42e3e16da8ad5f20584411cbfafbb75fc075c27721978040000",
    ],
    [
      "ETag",
      "ec4cUD2qkvsp5D3S0Y2+XQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92414fc2401085ffcb78b42454692d4d381445c40042292743c8b29d42b1edd6ddad8610febbb315d1a8895eda99e937dbf75ebb87a7b488c18755ba7eae50eeced6a8a7a60851559956742b45a1102c40cdd644268e2b9df18cf7cebd0b1ee67defdcbbcfa79d0e118a6f3067e0ef2149318b15f88f7b28588eb4c64556e5c5b2ee2cd0bbd20c67513818f7a9cf456cfaf17c380cbac31e1cacd362cc345bd6fc3fd616070bb662156282120b8e464b29c516b91e189b8ae565860d252ac951410dd70fd652542593423468d2b8b41bb6dbb4dbb6e3b43dafe9119809ce742a0a62e733d2075a689685e2955c824b80ac4b329cd4d7171aa7716dc4948371e4b66a7d5f019296a4192eff0649ef86d167f8c08e117ce7582eaa429fa8dbe143f0db7194e9e7513741d4fb41284d499d906830eacda2603431dce2e8bdbbd3a8265250900a4d8676b3e539576ef33dd66b61a2a6f7f85a56680167f477dca51afc84650a0f6fdc6fc7ae7b020000",
    ],
    [
      "ETag",
      "f56r5NScE+82cRmG8+8JmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-32-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "da",
      "50",
      "14",
      "fe",
      "2b",
      "cd",
      "dd972d13fa028542421cc16e6b445028eab22c707b7b5aaf96de72efad8b31fcf79db6a22e26faa9ed39cfcb79eb23b9e3794c8624e2e9ae04f9f0e95644e48880a62946af2f765f4faf9df354edbaab536a9593584dc7a3112278c552745b64d052a2940cd470b56ca75294059542b450a8d5715a76cfb207b6eb0e3ccff290a7204ba63cbf43f68dd6851a9ae6c1bb9d0a9166400baeda4c6c9fe3e6bd631652dc02d3cafcdfd2441765be6f7a9c09463517f968b5c4024a05720d5bca332ce1851947dffe976e73ba6da708bee70c2863a2cc7555164a3091273c2d65ad4a868fa42ef3d50b59fa537f121a93f96a167edec454c3e68b4195b15e4b5065a68def8bf999b129d0e9862a501be3eaa7bff0312245c23358f378638c8c63631a9c05a161a3690c4af3bcb60c69944165f73495e0ed2e2a02d528dd24d77dab476dcf1a4449d46789d771a3c48228f2a2be4b3b91c5065de8c61150e4e94abd66d15ce456c228eddb5e421d668195245ecfb36397310a2c0627622e8d9dbeeb90fd11f92bb98613ae0aa178331a72b508427f1d2e56b3c938f4eb36128a0338698aab9a785da7c62611f44e5ffb2acb053a55730e66a1bf184fc2e0d26f563b8594b287e50e979bd04c01a2a9a45bd020cf448c4323e7f3651006f3d9788a8c7a5fe7078422c3df8f2f84f0a1a8a7aceb67e5d5ebd6fe07c025cdca1a71dfbc109becf77f108167d890c9c5ca5ffc224d68010948c8d9c7ab43709df8f06f3a9c3662f1b8d14669fcc64361aa",
      "3261129a83e1dbbabc86ddebb89d9e456ab0d46f726e7770984ca55129c21672fdd45173dad8686356aa67102671cfb360f603b3ff008baacb8c5a040000",
    ],
    [
      "ETag",
      "XQq+KX2Pgsq4UKa0uCdsLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83300c85ff8b770509ba16b5483dac15eaaaa16aa3ad7698aa2a04c360805912365588ff3e87ee123b2f5ffc9e3cc057d96610425a16df3daadb4381e6cd3609eabe369a4b47ad4670008d28986c8279726ac94fe7d9416edf5f8efdae9a15eb35135a7e6223201c202fb1ce34841f03b4a241fe76bdaa692263e6d659657f3845bb2861a1a1cc0a87731c3f6de208c6cbe840456982392a6c25da919da20aa5d9dbb45a345d8daea65e49d430c1d343a1a8ef84227259711f67ae1f78feca5f2c56cba5b764b026294c492db3e723b08d2123ea847e392cf80ca8a9e5dcf974feb01cd840977f747333a85f15b1af466be9ddedb76423198e6a548f0e48c1cb782ecdfd3efe0117e89b0e69010000",
    ],
    [
      "ETag",
      "m64RTno1b4dNcCWKSuGj2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dcfdb6e83200000d07fe1b96d368d3af6a6cecbc4c62ed2a6f585a0a2a13845342a5df6ef6b76fee0fc005a556c9ac83c08d68377a0a9010fd5010d6f9eb936471e8b4c5a97a123c5d792863a0daffbe4bef8d27511162b534d5d50e944919147f6f99388ef7d09174af2cb18f6c6391bcd051afd63a812a523b485216e38ce0789c75619093ab538b23fcad31dd9d42f1e5d5edf10bc92b666c209c2cdf437e6ad1c59bce4e379a81deef630d50b837e40485c988527e6d7f8e8bb52765a54a9e1643735eaf5055b01d801b649aed844f873665a10eec07f93cc5ab2e7d5635431057eff008d3eb5db05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-33-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "6b4fa34014fd2b64f6e3da963e699b346bb7e2dad85205aad96c3664182e380a0c32434d63fadff732585763a29f98997bce3de73e78260f3c8fc894843c79aca0dc7fbb17213921a06882af3fb3f97067ba9757b795577d1f5da70397ef9f663344f09a256956a4d092a22a19c8e9d66b27a5a80a5a0ad1c244ad7ebfd51d99dd4977389c8cc7e6187912d278c5f30764df2955c869a773d46e27422429d082cb3613d9eb7b67d7eb14a5b807a664e7bd64075564e773d11fa960547191cfb61e1aa82494016494a768e13f330a4fdfa76e739ab51304ef3803ca98a87255dbc2144ce4314faa526725d367a26dbe3910cf5ed90bdf6022adb23cc86906274644150dd4be00e3dcddac8da573be71d7737fb971026f7161afe7edc566b55d3b9e717b61bbb6a1689882e61a33e354df1cbca07e0452f15cabfbf573adfcd2a0e5c7b1d4049496d00403cb1cd1eed89c847168b178dc1f86b10961380ead21ed87269b0c6010854091a745358be622b74cda8dad0882419f8d8381391906a16576835e043d2bb2fa83288ac9e1843c955cc119978590bce910b97597be1df8eed659cc7d5b9710d32a55678db1ba80b71e151688a04f6a3ad4512e50a96ef7d2f16d77bef097377633e1152494edbd479c714c530988a625364f41b91611368c38f3b57d86603db1ab635092e99f6752f7bc76f1a6e5af741f0758db55fa4b3cdf5d3abfb49d23e286a69586ec9a0329d0f21dd686ae0f7f11894bda6421d75bdbfd4d9a2717622821675f4f13c13af0e5bf765c7cc4e2eaa38c5478c7dd61b2166125343bc475b92fec517f649a3da2c1a5fa10eb5abd63d7ea1c7546c820572f15358b8f853662957c056110c7efe86e1dfe01d0964d5c78040000",
    ],
    [
      "ETag",
      "BmA5v0RKPWuSu+6Ql4Riyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92dd4ec2401085df65bcb44d407e84265c1444c51484522e8c216469a7a5d876ebee5604c2bb3b5b118d9ae84d3b33fd667bce69f7f014670158b08ca3e702c5f62c4235d1858bb24894a45bce338960002a1611c9d242ec7617e9eaf5ce198fbcf3dec366e26e3a1d22a4bfc29481b58730c62490603dee216329d29acf9322cd16656780dae67a38f5dcc1e886fa9407ba1fcd1cc7ee3a7d3818a7c58029b628f97faccd0f06acf9d2c51005663e6a2db9e06bf4d540db942ccd1334252f848f124ab87c10095ee44c706ed2c4acd5cc6ab3526d571b8d76ab55691198709fa99867c4cea6a40f14572c71f9865c429300519664382caf2f348e83d2882e0723af592ff57d05485a1827b8f81b24bd2b469fe1033b46f09d63292f3275a2ae9d7bfbb7e328d3cfa3ae6cafff83908a923a21de60d89f7af670acb9f9d17b77ab508e05a72025ea0cab957aab71d9acbcc7dae33a6a7a8fa5448106f88cfe8edb588115b244e2e10d387489927b020000",
    ],
    [
      "ETag",
      "amurzz2mhxJLPNT+CYwQRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-34-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "596f9b4010fe2b68fbd2aab101636c6cc94aa384b6b43e121b278aaaca5e96816c8259b2bb384a23fff70e10e750a4e40998f98eb97820373c8fc990443cbd2d41de7fba16113920a0698ad1f8e224bf8c07e3a2d3fb07bfefbc3b73f6ebebd96884085eb114dd1419b494282503355c2edaa9146541a5102d146a39dd96ddb3ec81edba03cfb33ce429c89231cf6f907da575a186a6b9f76ea742a419d082ab36139ba7b8b9ed988514d7c0b4325f5b9ae8a2ccf74d0f33c1a8e6221f2d175840a940ae60437986253c33e3e8db6be936a79b768ae02d6740191365aeabb25082893ce169296b55327c2075992f5ec8c21ffbc7a13109a69fd731d5b0fe625065ac5612549969e3fb7c3631d605fa5c51056a6d5cfcf4e73e46a44878062b1eaf8d9171688c8349101a365ac6a034cf6bc390461954668f3309de6ea222508dd24d72d5b77ad4f6ac4194447d96788e1b2516449117f55dea44161b74a11b474091a72bf59a457391336675ba3de8b8dd1892c48a3cda73a26ea7df4fbc0ee658dff5986dc709d91d903bc9359c705508c59bc1908b7910faab70be9c1e1f857edd46427100274d7155132febd4d82482dee96b5765b940a76acac134f4e747c76170ee378b1d434ad9fde216579bd04c01a2a9a41bd0202722c6a191d3d9220883d9f4688c8c7a5ba77b8422c33f0fcf84f0bea8a7aceb67e5d5ebd6fe7bc039cdca1ab16d5e884d76bbbf88c0236cc8e46ce9cf2f49139a43021272f6f1ea105c273efc97f6878d583c6db4511abff15098aa4c9884e660f8a62eaf61f79cbee33aa4064bfd26e73a9dfd642a8d4a113690ebc78e9ac3c6461bb3523d8130897b9e06d31f98fd0f8b9e4a3758040000",
    ],
    [
      "ETag",
      "dWDnYd9Lp26zeKw8w/OJ+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d90514fc2400c80ff4b7d9425371405121e40091a078129be18428ead9bc36d9d779db82cfc777bc397bbb6f7b5fd722d7c65650c633864e9778da6b94a91372e08d1d6395bb92a2a2d420f90752ae4f265b599fef2a2592ecafb75a8df17d7a7e034990861a34f2c348c5b4832cc630be38f164a5da0b4edf7a69b28183795ab3c4edfe6921514bb6cb50d82e92c98c37977eec1910e212668b08cd0cdab0c1d31e267a76a7551e5e859aa4d84163ab87b480dd59536449e54bc9b5bcfbf53fec81f0c46c3a11a0a9853a439a352d8ed2bc81a26d679482731055f00d385229d74e78f94fbaaaf3cd5f794efcc76ff3db386d1ae0d898045b75b5d3c1ec8b9b138b3a9b10791962f79caf8929fff0088d38f306f010000",
    ],
    [
      "ETag",
      "MKNQAxtGyMGn7PRaVG+wLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "72",
      "43",
      "40",
      "18",
      "00",
      "e0",
      "77d9ebc88853e81d0926141541ea6647f8d3ca62132b4e9dbe7b33fddee0fb4179510063b8a7045af486e65cd0d6c5daa5aa218ed7c5ad0f9d42c171f0d1124235ca867629233a3bd5530c1875e7badbf01e4997d37e80ed7848e6240db14d0cf9faf9dd58d87b4a345d8c52d0f7954bdb56ddf2f0e167373d2e029bf7552e91a1c4ee52e9d0dbc47e7c9dc1e1127b22a53482b09b2f843dccb009f28b705215ccccd8f2b3526839dd35b977bad979b94de26822b79aebf4781013c5b7a4e12c36125a2198ee55070c57af99286bda0afd37713fdfe1753520efa043bf7f4fffb3ec05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-35-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "14fd2b91f795b6e93ba9548d52c2a8d6a62c4d41d33445b673130c691c620704a8ff7d370e65b049f029b6ef39f79cfbc833b915794c268489f4ae82f2f1cb8d64e48880a629bef69ebc8b0797badb8b1371797bf2f0fd2cbf19cfa65344889aa5e8aec8a0a56455725093eda69d96b22a6829650b13b5fac356776477ddee70e83a8eed204f41962c457e8bec6bad0b35e9740edaed54ca34035a08d5e672f7fadeb9ef758a52de00d7aaf35eb2832aaaf3b1e8d74c72aa85cca7db0d1aa8149411eca8c8d0c25f66cc8edfa76e0bba6ba708be171c28e7b2ca756d0b5370992722ad4a93954c9e89b1f9e64036ded29b87169759b5cba39ceee0c88aa9a6917e2cc03a0bd62b6be19fad83d52c5cacfd68333ff756b3f67cbddcaefc8d7575ee059ea529cbc070ada9756c6e3e5e503f06a5456ed4c3fab9567e69d0e2ffb1d4049456d004a3b13da25dc77659c2c63c71fa4396d8c098c3c643da6736770730881950e41951c3a2b9cce3de3076a1c722eef47ad1c066e3883943371af5068cb90e4da8ed92fd117928858653a10aa944d32172152c422f0a83ad3f9f859e2921a155a64f1b6375016f3d6a2c10411fd4b4afa342a252ddee851f7ac16c1e2e2ebd66c24b48297fdcdce18c139a2940342db1791aca958cb161c49fadbc53049b895d1c828a4c7e3d93bae7b58b372d7fa58738c0daae365fb2098385ffcdd839202e695619c87d7320055abec6dad0f5fe372271499b2ce4c7d60b7e92e62980044ac8f9e7d344b0097cfaaf1d161fb1b8fa28a334de7177b8aa457809cd0e0953ee0b7bd41fbb831131e052ff1bc3c4cea16b758e",
      "3a23ec20d72f15358b8f853662957a056110c7ef9b6eedff00968208bc78040000",
    ],
    [
      "ETag",
      "2zEPw9a9UPBiVkBwKFnj7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:33:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92dd4e83401085df65bc14121a4b6d49bca8da2a49ad2dc52bd3342b0c480506f7476d9abebbb3a8d5a889dec0ccf0cd72ce812d3c14750a01dc15f9a341b939c851cf6d11a132a5567c6ba856080ea0163993fe79e38d9fc72f95999bc2aca794e4d5e1fce4840995dc632520d8425660992a086eb7508b0a792da1d254f5aaed1cd09bc60e1771144e2fb8af28b5fdf46632199e4e46b073f68ba9d062d5f2ff585bee1c58d35d84194aac13b45a1a496b4c74686d2a513525ba8a8c4c50410bb70f7249a61192c8e5897be4bb9d9ed719747c7fd0ef7b7d064b4a842ea866f666c1fa4093166544cfec127a0cc8b664c3597b7de27191b6466c194ee35eb7d5f71560695951e2ea6f90f5de0bfe0c1fd87b04df395191a9f59e1a4fae87bf1dc7997e1e753e8c473f08a539a93d128757a3453cbc9a596ef9eefd74a351cd2471900a6d861dafdbf78f7bde5bac6764a3e6f7045a1a742011fc775c161a824c940a77af5e41840d7b020000",
    ],
    [
      "ETag",
      "5Dp0FwFxmuQuiujNocgm+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE `profile_id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-36-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8553596f9b4010fe2b68fbd24ab1bd0463634b56ea26b445b29dd4c6490f55f6b20c641360c9ee922a8afcdf3b409c4391922760e63be6e29e5c8b2226631289f4a60275f7e14a46e4808061294645e88d2895b633baae56f0fbcb556967ab74324184a8599ae565061d2d2bc5418fd7ab6eaa645532256507853acea0630fa83db25d77e479d4439e862c9989e21ad997c6947adcebedbdbba9946906ac14bacb65fe18efdd1ef64a25af801bdd7b69d94317dd7bdbf428939c19218bc97a8505541ad4067226322ce18919479f5f4a7705cbbb29826f0507c6b9ac0a539785125c1689482bd5a892f13d69ca7cf64256fecc3f0eadf9f4e7c76dcc0c6c3f594c5b9b8d025d65c6faba3c9d5bdb127d2e9906bdb52ebefb4b1f234a2622838d88b7d6c43ab266c13c082d1b2d63d046148d61c8a20c6ab3879904af3751139841e936b919d201b33d3a8a9268c813cf71a384421479d1d0654e44f9a80ffd3802863c53ab372c56609b439b1fc6098d2803d7b123a73f1882dba7d4198c9c21e72eb539c36993dd01f9a7848113a14ba9453b1872b10c427f132ed78be369e8376d240c0770d2165737f1bc4e834d22e88dbe7675564874aaa71c2c427f393d0e8373bf5dec0c52c6ef5637b8da84651a10cd14cbc1809acb188746ce4e5741189c2ea6336434db3adb233419ffb97f228477653365d33c6baf41bff1df03ce59563588dbf685d864b7fb8b083cc2964c7eacfde52fd2869690808282bfbf3a04378977ffa5fd6123164f1b6db4c16f3c14ae6b13aea03d189137e5b5ec41df76fa943460655ee55c8fee27536bd48a9043611e3a6a0f1b1b6dcd2afd08c224ee79112cbe61f63f1ad1920258040000",
    ],
    [
      "ETag",
      "iT8900o139kuSeZBjp1lSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2300c40ffc57ba5525a4455907880d26993aa89717b99100aaddb15dabacb6508a1fefb9cb29724768eed933ce05ab539cce05c953f16d5fda544f3e90e1bd4b6369ab78e5a8d300234b2643208ed2eced78755b82dc7565f5fd3439cdce6732674f68d8d84d9038a0aeb5cc3eceb01ad6c90cb4e27357464ccdc3b97592d7609470de52efad8a7e9629926d01ffb115ce8bcc10215b619ba7e9da20b66e6dda96ad974357a9aacca50c3000f17a522db4945e471c61b879e1f0a7fea4f26d3281211833565d254d432bbdf028f316464bda11b9b82cf801a8e2c5d0cebaf7bae088427022f10ceecf85fb3bc1bd46b452ca0d1cd164f8f989c9b6167a32c8e2093fc256f9579c6fd1f2287ed876f010000",
    ],
    [
      "ETag",
      "26uTCdPVD6Sg3uskFLVCEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "7243401800e077d9eb6c46ca46f40e41256c24a15237c6e127a8ac538474faeecdf47b83ef074549027d1f0eac821b7a4773f4262d93e59e6d14fe91c9a9ff709a4073ae63f09912159fe94e3519c9e3c6ff4e30ace5d88c6e0a3358aaa7ab0f43b34e32a86d7c8f053b1ccf6e2cfabce07381af812e4fa1ccacd49e928d2dfa95fb3c72f4ab75da3aaf3cd7c6032401a8c7b5a731b3a3712719c4bab680f58c8dfb0375704bb6813b9675742c6735dbd9f8be0dea0b5d45a4c94f750907c32a5a8e7a8e385cd24ce8d102c1d4141df461f19af1449216e8bf190e7303afab0251071dfafd03fa6459d605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-37-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "2bc87b6d0224219048d19a25b48d16c806a455374dc81843dd02a6d874aaaafcf75d4cd3b5aad43e61fb9e73cfb91f3ca13b56a5688e1296dfb7b479fc72cb137482a8c439bc66faf7dbe67a7d9d9d5bdf7f79e74e29f0b7365f2c00c13a96c0655dd081e06d43a898efc361def0b6c60de703483418db03736a9833d3b2668e6338c013b4c8b6acba03f68d94b598ebfa517b98739e1714d74c0c092f5fdef587915e37fc961229f4b7923aa808fd63d1af052758325e2df6211868056d625a62568085ffcc34397d9b7ac87039cc01fcc008c584f0b6929d2d48417895b1bc6d5456347f42cae6ab030addadbb8a34c28bb6ace20a97f4444bb1c4b17caca97616ec3c6de39fed026f196d767e1cae2e5c6f395cedb67bcf0fb5ab0b3770358993822aaeb6d04ed5cd870be8a754485629f5a87bee949f1bb4793f968e00d282f6c1d836a6d8748c59922536c99cb19564064d1227b12d3c4e0c329bd0499a500c3c25aa58b8e2553a22a9698fcdd819db593c49e92c4e2c3b8d1d739a5833c3ca4cdb418713f4b76192ae99a8b9607d87d055b089dc380af6fe6a19b9aa840cb7855cf7c6ba025e7b945020803ea8e9d0451907a5aedd1b3f7283e52ada5cbafd84b734c7e431bc871967b81014d0b881e649da783c8586217fe9b96b00ab89fd3806059aff7e425dcf3b17af5afe428f60809d5da9be288c828d7faeec1c1197b86815e4a13fa01a2cdf406de0faf00790b0a47d16f473ef06d7a87f0a68461b5a91cfa7096015f8f45f3b2e3e6061f5414648b8c3ee10d18990",
      "86f63bc454b9cfece964645853a4c08d7c171b19d363d7ba1c5d465ad24a3e57d42f3e14da8bb5e205044118bfafba75f807e34ff17d78040000",
    ],
    [
      "ETag",
      "f/KjrYDYfG5KZMG8msaBug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d92414fc2401085ffcb78b42410a494261c50118905b4948331862cedb414db4edddd6a08e1bf3b5b118d9ae8a59d997eb37defb53b784a8b085c58a5c97385727b92a0be33858faacab4e25b498542b000b548983cf5ae3673412ba73b9ad9ed9bfbdcefa53ae9f79950e11a7301ee0ee214b34881fbb08342e4c86b2165555e2cebce02bd2dcd701ef8e3e988fb9c22d34f179e3738f786b0b78e8b91d06259f3ff587bdc5bb0a1958f314a2c42345a4a491b0cf5d8d854222f336c28aa64880a6ab87e9048aa4a21891a3c69b4bb8d96dd6cf55a9d4ecf719a0e83198542a75430bb98b33ed0a445e6d32bbb049b0159976c38aeaf2f3c4ea3da8829c7d3c03eabf57d05585a9c66b8fc1b64bd6bc19fe1033b44f09d133955853e5257de6cf0db719ce9e751978360f883509a933a22c178329c0783c9ade11e0fdecfb71ad5ad240e52a1c9b0d53c733a5dbbf91eeb0599a8f93dae96155a100afe3bae530d6e2c3285fb3747e5cd487b020000",
    ],
    [
      "ETag",
      "+LFjSaob87GO63KYmR9itg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-38-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffa5535b4fa34014fe2b64f66537b12d584a6993c66d2aab98daba2dd56c369bf6303de02830c80c6e8ce97fdf03582f31d1877d6298f35dce6d1ed9adc8b66cc84211df95583c7cb991213b60a821a6db0b0e7d737237392ba3d3f934e5c1f2fa241c8f468410154b419a27d852b22c38aae16ad98e0b59e65048d922a156d76d598e690dac5e6fe0baa64b3c85493415d92db1afb5ced5b0d3d97bb76329e3042117aacd65fa7cdfb93fece485bc41ae55e7ad65875c54e763d3a34472d04266a3d592122815166b4c412494c20b731b7e7f2bdd1690b66302df0b8ec0b92c335da545125c669188cba25665c34756a7f9eac096ded49b04c664be9a055f379056e4cd370394b15e17a8ca441b3f16f373639393d73528541be3ead45b787453c84824b816db8d31328e8cf1ecd83036fbbfa97fee078645496c516991d52904102658d93f75c97f3f9b8a009a8c9ae0ba6f3a60b9e6208cc23e8fdc6e2f8c4c0c4337ecf7a01b9a7c60a3bd0d1188a72bf59a051915ee385d174d1b608060f71122dbb52d1880eb6cad3e3a706846dce9db6c77c0fe1642e3b150b954a26915bb5af881b70e16abd9641c78751911503b8e9be4aa225ee7a9a948027d50d7ae8a0a494e55dffd59e02dc693c0bff49a514f3106feb0bca36147902824341490a2c6e25c6eb1daf1f9d20ffcf96c3c25463dbf8b3d42b1e1efc71742f090d75dd6f5b7f272ea329f0197909435e2be39308bed7607ffa7d023893f04a1cd6ed8ece7ca5bfc62cdd502232c30e39f4f9fc075e0d307ba7f2d84a5f742364ad33fed1a5795092fb0d93991d6f9356cc7ee761d93d5e042bf8bf5dcc1beb99546a5882966faa9a2e6b554bdaa43a57a0651905665e6cf4e28fa0fae202724ad040000",
    ],
    [
      "ETag",
      "Pca70CqCJufHOLmcTShGbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff2d905b4f83401085ffcbf80a11a25568d2076b88d69046d17a4dd36c6140ca65e8eed28612febbb3d4979dd9b3dfce39991e8abc4e600adb3cdbb728bb8b0cf58b6922546da91597866a8560016a9131597c5e9f3e8aafccefde6f9ba7fde5290cbf0fc7d98c0915ff622560da439a63992898fef4508b0af9db6623c7898ce9ae31ca62f9163c04110b15254658aec2f06e1e0630ac070b76b48d304589758c6664236987b15e98b44a544d89b6a256c6a86084c7874c52db084964b3625f79b67be3b8be3b99f89ee7780c96140b9d53cdecea15d84693166544470e0b2e03726c39773a9e8751e640eb7f74de6954cf92d857a1b174cef6f76422698eaa658b16c48297f198ebf37df803d230703f69010000",
    ],
    [
      "ETag",
      "kX4zWkYg9yV7pJq/zLLZvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7fd9e724c38a94be75c3529771ab94bcec609752b58ab8a4d37f6fa6e70fce0fc88a828d2399f827ebc033d832a81e8a83cd15242d2c8829cccfee9d38d7c2f3926a2eed687fb39af759884684c9ab4305681be25a8d410845794ff58b76465e7bc77d17726bda566e5e0cdb9052ac095a6f7f2f4be9be10d4cc5026e50d2ff0c95f8ea83e996a6429f10736a3caebcb96fb5a6c9b473f7123666d79aa2786ce62bfa32e541a7fa68aa8e0a5a141cbd31ad362cae18c42745a83a82fbf9c377e555db0036cedeb818da47ecc24595577e0bf49a6ad678f2b62d9c006f0fb07f062509305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-39-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda3c08242191a2354a69922d212b9056d33421e35ca85b822936ddaa2aff7d17d374e926b59fb07dcfb9e7dc07cfe49ee73b3226314f1f2a289f3edd89989c115034c5d7afe6e237cc670b60d917cb0ee6c5349cc3d56482085eb324dd1719b4a4a84a0672bc0dda6929aa829642b43051cb1ab5cc41d71c99fdfec871ba0ef22464c98ae7f7c8be55aa90e34ee7a8dd4e854833a005976d26f6afef9dc75ea728c51d30253b6f253ba8223bef8b7ece04a38a8b7cb20dd04025a18c604f798616fe3277f1f9dbd46d4ef7ed14c18f9c01654c54b9aa6d610a26f284a755a9b392f133d1364f0e247057ee2c3498c8aa7d1ee5740f67c68e2a1aa9a7028c4b7fb33696dee5c65f4fc3e5c68b82d9c25d4fdbb3cd6abbf602e366e1faaea1689c81e61a13e35cdf3cbca0fe0ea4e2b9560febe75af9a541cbffc75213505a42138c86dd01359dee284ee2214b1cab1f275d8863271ef6a91577d9c8067b1703459e16d52c9a8bdcb49d41df8a7bd19026bbc86666123923d389c0b606a69524bdd834c9e18cfc2ab9820b2e0b2179d32172e32f43370afdad379b86ae2e21a155a62e1a637501a71e151688a0776a3ad4512e50a96ef7d20b5d7f3a0b97d76e33e115a4943d050f38e3846612104d4b6c9e82722d76d830e24dd7ee0582f5c4be1d83928c7f3c93bae7b58b9396bfd2431c606d57e92f09427fe9cdb59d23e29a6695863c360752a0e55bac0d5d1f7e221297b4c942aeb6aeff9d344f3e245042ce3e9e268275e0c37fedb8f888c5d54719a9f08ebbc3642dc24a687688eb725fd803db1a0df59faa68a9fe8dd9bd61efd8b53a479d11f690ab978a9ac5c7421bb14abe823088e3f774b70e7f00964a1d2e78040000",
    ],
    [
      "ETag",
      "K1HxeGCHeclJ34SGpATGeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bca511625b5b925e50ad4a427fa4604c4cd36c6168d185c5dd45d3347d7767b156a3267a0333c337cb390776f0949729b8b0cad7cf35caedc91af5ad29425435d78a6e9528158205a8d99ac8b24eeffbe33889a3697be64ce7a7fcce476f302042251b2c18b83bc872e4a902f76107252b90d612c1eba25c369d057a5b99e13c0afdc935f585484d3f8983c01b0623d85bc7c59469b66cf87fac2df6163c8a5588194a2c13345a2a291e31d1beb1a95851716c2951cb04153470f3602d455d3129448b26adb37ecbe9da4edfe974fabd9edd23908b84e95c94c4c673d2075a68c643f14a2ea14b806c4a329c35d7171ae76963c494fe24eab61b7d5f019296e51c977f83a477c3e8337c608708be73ac1075a98fd45530f57e3b8e32fd3cead28b463f08a529a92312f9e3d13cf2c633c32d0ede875b8d6a260505a9d064e8d8ed5ee7bc6bbfc77a214cd4f41e57cb1a2d4818fd1d37b90637635ce1fe0dc60bbdb77b020000",
    ],
    [
      "ETag",
      "nudX9MUcUTO4P1OS/lVIeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-40-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "6d6f9b3010fe2bc8fbb2496d802610881475514a37aa34690969b54d5362cc41dd01a6d8b4abaafcf71dd0f445d5da4f98bbe7e5ee7c7e207f7811931189787a534375ffe95a44648f80a22946cf8278b81017fd9bbfa93cceed13f3e45cff79371e2382372c49f332837d29ea8a811cad96bdb41275492b21f651687f60ec9bb661baa665b98e6338c8939025335efc41f69552a51ce9facebb970a9166404b2e7b4ce44f71fdf6402f2b710d4c49fdb5a58e2e527fdff430138c2a2e8af16a8905d412aa35e4946758c233338ebebe96ee719af75204df720694315117aa290b259828129ed655ab4a460fa42df3c5812cbd99370db5e962350f3f6f68de90375f342ab5f5ba0259674a3b0e16a7daa644af2b2a416eb4cbef5ee061a41209cf60cde38d36d60eb5c9fc487bc675b1997fea879a89a5c420152fda42421a65d014f1382bffed0d3504aa50a64bae87864d4dc770a3241ab2c4e95b5162401439d1d0a2fdc860ee000671041479aa516f59b4100558ae11bbd435877460f56383458ecd1c440ea9cbe88169c73431304bb67be4aee20a8eb82c85e4ddc0c865e087de3a0c56f3e924f4da36128a4339ea8a6b9a7859a7c22611f44e5fdb26cb053a35d3f7e7a1174ca6a17fe175173e8394b2fbe50d5e7942330988a615cd4141752a6268367db1f4437f319fcc90d1dee2d90e21c9e8d7c33321bc2fdb29abf6db78d983d67f07b8a059dd226ebb0331c976bbf77f856518f8f36fef4b4c4aec16657e230a77bc5320e72b2ff841ba5000095450b08f3700c16de2c3a7ba7b3788c597833652e13fee1b938d09aba0db3b9eb75d766c7b600d0e6cd2822bf526670dfbbb01371a8d22e450a8c78eba77d3ccab4dd5f20984495c97793ba9ed3fe27dd692b7040000",
    ],
    [
      "ETag",
      "PRd7OoV3qxgsFm6J1JQ/Zw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6a",
      "83",
      "40",
      "1045ff65faaaa069538c9087a6481208a1b10d144a081b335a8d3a66776c6bc57feface9cbceecddb3732fd3c325afcf10c229cfae2deaee2e43ded92646d3966ca434541b0407905526e4fdee7da52ec552f3cf3688aebfe969d278d97c2e84493eb15210f690e6589e0d841f3dd4aa42f9763cea71a260dc3556596fdfa265148b50d1d90adbfd66f3b4d844301c06070a3ac598a2c63a413bb2d15460c26b9bd6a8aa29d135d4ea040d8cf0f890696a1ba5895c51dc07cff51f3d7fe64fa7b320f002014b4a14e7540bbb7f05b1616255c6f42d61c117408fade44ec7f34be4890d74f847171da379d124be06ada577b37f261b89252aeb161d48942c6395f3ed3efc012de2ea5869010000",
    ],
    [
      "ETag",
      "3QXHakjGrtxN8Eqzfb2p0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcfc97282300000d07fc9591c1629a43752900aa2234b402e0c84b048cb1614b0d37fafd3f707ef07a48450c692a96b680bdec19a8a704bb676a72269a65329b6e893aaa6d6c5259551252c9e88820309d060643aeff4e4419fc77d99afde256b4efdfd83196d155abae47ea9a72a915d33cc381cf46d7155ee3ed3b0cadb233ebbcc5a2ba1d0e3d9e93a28e06f598b1ba69a6bec84d8b599af45dccda8480e75ff0645c5393323d5f3e2e095d1ee3298b3b5eccf01c2bc5d5a83f0b8be1d77b55270bc15490ae1b4857206d800baf4f5485952bf66920ce106fc379369ede9eb8a683ad211fcfe012589a7f705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "2b",
      "64f6d516505a6893666d2aae4d5aaa4035ee664386e905472983cc50634cfffb5e06eb6a4cf48999b9e7dc73ee072fe481971b322629cf1f1ba89f7fdc8b941c115034c7d7dd46de5ef9f6a51d3953cf2c16bf63335e4f271344f09625e9b62aa02745533390e375d4cf6bd154b416a287897a8eddb387963db2078391e7591ef22414d982970fc8be53aa9263d33c68f77321f20268c5659f89eddbbbb93b36ab5adc0353d2fc2869a28a34bf16fd5908461517e5641da18146429dc096f2022dfc676ed2d38fa9fb9c6efb3982779c01654c34a56a6d610a26ca8ce74dadb392f10bd136df1d48e42ffc596c305134db3229e9168e8c0d553451cf1518e7e16a69cc83f355b89cc6f3559044b30b7f39edcf568bf532888c9b0b3ff40d45d30234d79818a7fa16e005f53720152fb57adc3eb7caaf0d9a7f1e4b4b4069095d3071ad21b53d6b9466a9cb32ef64906616a4a997ba037a925a6ce480b34981224f8b6a162d45499d81e5b88c26ae3718258e9739493ab22dbc667498b9e9315020fb23f2547305675c5642f2ae43e4269cc77e1287eb60368d7d5d42469b429d75c6da02de7b54582082bea869df46b940a5b6ddf320f6c3e92c9e5ffbdd84179053f61c3de28c335a484034adb1790aeaa5d860c348305dfa6708d613bb3c042519ff79216dcf5b17ef5afe468f7180ad5da5bf248ac379f04bdb3920ae69d168c8ae3b900a2ddf616de87aff1791b8a45d1672b5f6c35bd23d8590410d25fb7e9a08d6816fffb5c3e22316571f65a4",
      "c23bee0e93ad08aba1db21aecb7d650f9da1e5b944836bf52976ec9d1cbad6e66833c2164af55a51b7f8586827d6c837100671fc81eed6fe1f2f661f1978040000",
    ],
    [
      "ETag",
      "vdsYQE1P1S4A8/lLZT/TUA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d925b4fc2401085ffcbf85a92d6706de2435154b42097f2640859b653286ebb75772b12c27f77b6221a35d1977666facdf69cd3eee129cd63f06199ae9e4b54bbb3159ab12d26a84b6134dd0a996b0407d0b015912c6ce5c1cc75c7e2ee559cd7ef479cebeef6e28208cdd79831f0f790a428620dfee31e729621ad7129ca2c5f549d036657d8e1349af48737d46732b6fd7016864137ecc1c1392dc6ccb045c5ff636d7e70602397134c5061ced16a2994dc20377d6b53b3ac1058d3b2541c355470f560a564593025658d26b5ba57f39aaed7f11a8d4ebbedb60914923393ca9cd8d994f48191868989dc924b6812a0aa920c27d5f585c6695c19b1657f1835eb95beaf00494b52818bbf41d2bb66f4193eb06304df3996c9323727ea3a7c087e3b8e32fd3cea2a887a3f086d28a91312f507bd69140c46969b1fbd777706f548490a52a3cdd073ebed46abe9bec77a296dd4f41edfa8121de08cfe8edbd4809f30a1f1f006d0a876d67b020000",
    ],
    [
      "ETag",
      "aL7nAU00QlJxl24KPccsBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-42-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "b2494d02091088147551ca36a6947484b4aaa629b18da16e01536cda4555fefb0e68faa26aed27ccddf372773e3fa01b5ec46882084f6f6b56ed3e5d0b828e10533885e8ce13eb9fea32f84b5cdd282f726ab01b723f9d0282372c89f332633d29ea8a323959affa6925ea125742f440a8670e7b86ad1bae6159aee3e80ef024cb92052f6e807da554292783c1c1bb9f0a91660c975cf6a9c89fe283bbe1a0acc435a34a0e5e5b0ec0450ede373dce04c58a8b62ba5e4101b564d586e5986750c23333265f5f4bf739cefb2980ef386598525117aa290b24a828129ed655ab8a260fa82df3c501adbc85378fb4f9721d449fb7386fc8db2f1a96da66533159674afb162e4fb56d095e575832b9d52e7e78a107914a243c631b1e6fb5a976accd8213ed19d7c516fea91f6906941233a978d116126192b1a688c759f96f6fa8216005325d7233d66d6c38ba4b1232a68933b248a233421c32b6f088e8d4359919138681a71af596850b518c1c9dd8432bb6896edb96c9e2e1d825267586861d3bba452dd7a4a6ed8cd1fe08dd575cb1132e4b217937307411fa91b789c275309f455edb46826128275d714d132feb54d02480dee96bdf64b900a766fa7e1079e16c1ef9e75e77e10b9662ba5bddc2952738930cd0b8c23953ac3a15310c0d9d2d577ee42f83d90218ed2d9e1d10124d7e3f3c13a25dd94e59b5dfc6cb365bff03e01c67758bb8eb0ec840fbfdd1ff155651e807dfdf97c025740b327f",
      "00053bde29a05f6b2fbc445d286409ab58413fde0000b7890f9feae1dd00165e0ed84805ffb06f543626b462dddef1bcedb263dbe6d83447a80557ea4dced6edc3801b8d4691e5ac508f1d75efa699579baae5130892b02e413ba9fd3fe5f65dceb7040000",
    ],
    [
      "ETag",
      "yEoUJtYNxb901pWmc1ekbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90d16f823010c6ff97db2b24b04d23263ecc853837e236d4876531a6961351e0585b3084f8bfefdaeda5bd7ef7bbfbbe74804b516730854391ffb4a8fabb1ccda72d52d46d69345f0dd51ac103342267721d155f41dfbd3fc4a76ebcb8a4af5b19bf5d673326b43c6125603ac0b1c032d330fd1ea01615f2d87eafdc46c64cdf5865b9dac48b3865a1a2cc0aab6d923ccd93186ebb9b07673aa4784485b544bbb2517446699636ad165553a2afa955123538d83572456d231491cf8aff78ef87e3208cc2d1289a4c8209832549610aaa99ddae816d0c1951a674e5b01032a05cc9b98feeec580e6ca0dd3f3aef0dea0f45ecab31735d67ff4c3692e1a846b5e88114fc192f85f97bdf7e0106dc12f669010000",
    ],
    [
      "ETag",
      "S9iY0yvO3Ehv6GkRJUcEKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "7243400000d07fd9e7c8586cadbe55ebd290b17169c88b596b293625c84464faefcdf4fcc17900ca189fa67cee3bfe035ec19d2ac6966dbd1e9bea8dd11ebdc76140f6e7ee4bf7039badd1a7c51b6991cbeae489428176b556e883a58e7a83c7339434adc55e5026997cd1656d2a3299c46e245055a6ca8887ddea7f6b6121aa6eee902ada238ea2d22ad06e7027bc27fcaa087cc16f26d113ec1984c218dbce75c984ce6b899821a1b4862e4cabb23d7854b29cc1d70eb359cf6a025f9a495f9abbea9c5c6ee935d800be0ccdc8a7bc79ce5464181bf0dfcce7fbc09f5793d3918fe0f70f34de2edb05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-43-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d4fdb3014fd2b91f74adb94a634ad548d52c2e8d4a62c4d8ba6698a1ce726189238d80e08a1fef7dd38948190e029b6ef39f79cfb916772c7cb844c48ccb3fb1ae4d3b75b119323029a66f85adcecaed3c09767e2a79230bc50bb33e7319b4e11c11b96a245954347895a325093eda69b495157540ad1c1441d67d0e99fd8fd717f381cbbaeed224f419e2e797987ec1bad2b35e9f50edadd4c882c075a71d565a2787def3d1cf72a296e8169d57b2fd94315d5fb5cf47b2e18d55c94d3ed060dd40a640405e5395af8cf4ce2d3f7a9bb9c16dd0cc10f9c01654cd4a56e6c610a26ca9467b53459c9e499189b6f0e64e32dbd79683191d7451995b480232ba19a46faa902eb2258afac857fb10e56b370b1f6a3cdfcd25bcdbaf3f572bbf237d6f5a5177896a6710e866b4dad5373f3f182fa0928cd4ba31e36cf8df24b83161fc7d210505a411b8c46f609edbbf6384ee3114bddc1304e6d8863371e0de920b6d9d80127898122cf881a162d453970870e758e93683cea8f22c76534a2e3d88d808eec71e23a4e3a48c9fe883c4aaee19cab4a28de76885c078bd08bc260ebcf67a1674a48699debf3d65853c05b8f1a0b44d02735ed9b2817a8d4b47be1875e309b878b9dd74e780919654f9b7b9c714a730588a6129ba741ae44820d23fe6ce59d23d84cecea105464f2e799343d6f5cbc69f92b3dc4013676b5f9924d182cfc1fc6ce01b1a3796d200fed815468f9066b43d7fbbf88c4256db3905f5b2ff84ddaa700529050b2afa7896013f8f25f3b2c3e6271f5514669bce3ee30d5883009ed0e7153ee0bfbc471fba3213160a93fc41cfbf8d0b5264793110a28f54b45ede263a1ad58ad5e4118c4f1fba65bfb7f8044d1f978040000",
    ],
    [
      "ETag",
      "mhVWfRNrBoJsre5FsVB4wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92dd4ec2401085df65bc6d138880d0c40b50140cbfa5241843c8d24ea1d876caee5624847777b6221a35d19b7666facdf69cd31ee0394a03706019adb639cafdc50af5d8142eaa3cd68a6f19a50ac102d462c5a41b8e5fb7b4ede40f4377b60c67bb47b589c6d7d74c287f8d8900e700618471a0c0793a402a12e4359fe23c4917456781de676638f1dceee09efb8402d30fa6bd5eb3d56bc3d13a2f06428b45c1ff636d7eb460434b17439498fa68b4649236e8ebaeb1a94492c5682bcaa58f0a0ab878b09294674212d93cb12b9776b9562a37cad56aa35e2fd5198cc9173aa294d9e984f581262d629776ec126a0cc8a264c361717de1711414464cd91d78b54aa1ef2bc0d2c228c6c5df20eb5d0bfe0c1fd82982ef9c48284ff599baeb0d9bbf1dc7997e1e75dbf4da3f08a539a933e275fbed89d7ec8f0c373f796fed35aa91240e52a1c9b05caad4ab57b5d27bac3764a2e6f7385ae668812ff8efe8441a9c50c40a8f6fca78918a7b020000",
    ],
    [
      "ETag",
      "RfQxqoqHuJORXbfXwYsjiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-44-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "2bc8fbb2694d02011288147551c236b634e912d26a9aa6c49883ba054cb1695555f9ef3ba0e98baab59f3077cfcbddf97c4fae781e91110979725d4179f7e15284e48880a20946a3fe525617fae9945efeb4af67b7173ff8e7e8763c4604af599266450a1d29aa92811c6dd6dda41455414b213a28d4b1ac8e31d00dd7b06dd77174077912d278cef32b645f2855c851af77f0ee26422429d082cb2e13d963bc77d3ef15a5b804a664efa5650f5d64ef6dd3e35430aab8c8c79b3516504928b790519e62094fcc28fcf252bacb69d64d107cc31950c64495abba2c9460228f7952958d2a19dd93a6cc6707b2f6e6de34d0a6cbcd22f8b8a3594dde7dd2a8d4b6db1264952aedeb6a79a2ed0af4baa012e44e3bffeead3c8c9422e6296c79b4d3c6dab13659cc346d175105edffdc3ff103cdc03222908ae74d11010d53a80b789893fffa766a025568d526b7437d400d4777c3381cb2d831ed30d6210c9d70685333d4996b8115854091a76af586457391874e1c0e42d38521b32c6ada4c0767a0bb516cebba39b44d16b12832684cf647e4b6e40a665c1642f27658e47ce507de36586d16d349e0356dc41407326b8bab9b785ea7c22611f4465ffb3acb053ad593f71781b79a4c03ffcc6b2f7b0e096577eb6bbcee98a612104d4b9a8182f24444383472ba5cfb81bf5c4ce6c8686ef0f4809064f4e7fe8910dc15cd9455f3adbd0656e37f009cd1b46a1037ed811864bf3ffabfc2ac1ec19b027dbdaf77f47ec7b051e92f4271c55b11f26be3ad7e9336b482184ac8d9fb4b80e026f1ee4b3d3c1bc4e2",
      "c3411ba9f01f578ec9da8495d0ae1ecf9a465bf6c0724dd7240db854af7203d33cccb8d6a81521835c3d74d43e9b7a644daa928f204ce2c62cfcc537ccfe03579d067cb6040000",
    ],
    [
      "ETag",
      "d2Osuh0PCajK5qDwhJi+dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d90416fc2300c85ff8b77a51295602a95388cad1a48a883324e134221754bbb360e49ca8650fffb9cb24becbc7cf17bf21dbe2b95430ca7aabc74686e4f25baad6f32b45de32c174dca228c009d2899dcd4a7e5af2a13fdf1b6a374739e5c727dddcee74c5879c656407c87a2c226b7107fdd418916f9dbf16886898cb99bf6ca2afd4cde938c8596722fa4fbf5fa65b14ea03ff423a8e99461810695443f521baa51ba954f6b45ab1b0c2c7546a285011e1e4a439d1686286025984c82f0791ccec2e9741645e388c186a470152966f73b601b474e3419fd705808193043cbb98be1bc0e32073afca38b9b43bb31c4be16bde5f861ff4a3e92e3a8ce743802297819cbca3deefd1ffd29186e69010000",
    ],
    [
      "ETag",
      "PjbHxngEpODSoNPh4qdpvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dcfdb7243400000d07fd9e7241304d13724baee2ba2552f3b4bd75062d5ae86c9f4df9be9f983f300a4aa28e758b08e0ee005ac443676d5ce67474bb9d3c1c37c4eb018e7a8cfcb6a391d1b12154bd06617383b83802c793d24ee7a55908a07fbb45e231ed7db190769b85f5ce6ce9669f75f8af9b37aec50723dcdbc6f6d21e987dc9da35022813f7a6ef729b7d1bbae38791d0fb437905c773e342d5b6e35c940ce0d425f15176b2f3129a7e1d4a094e3d028607647371715c2d582b7265e9d80eba5a7b272405beb0c36802e633b518edbe74c510d6303fe9b58ac237d5e2d4a263a81df3f9e0d307705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-45-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536b4fa34014fd2b64f6ab6da1a5cfa4599b8adaa4a50a54b36e3664182e380a0c324337c6f4bfef65b0aec6443f3133f79c7bce7df0421e791193198978fa5443f5fce34144e48480a229bedeecee72792584a5c66b70efae2e7c79ed5dcfe788e00d4bd2bccca023455d3190b39ddf4d2b5197b412a283893af6b0638d4c6b6a0d87d3c9c49c204f4296ac79f188ec7ba54a39ebf58edadd548834035a72d965227f7befedfbbdb2120fc094ec7d94eca18aec7d2dfa33138c2a2e8af9ce4703b5842a849cf20c2dfc67c6d1e9c7d45d4ef36e8ae03d6740191375a11a5b98828922e1695de9ac64f642b4cd7707e23b6b6719184c64755e8405cde1c488a9a2a17a2ec138f7b61b63e59e6fbdcd22586dddd05f5e3a9b4577b95def36ae6fdc5e3a9e63281a65a0b9c6dc38d537172fa81f8354bcd0ea41f3dc28bf3668f5792c0d01a525b4c1706c8ea83531a751128d5932190ca3c484289a44e3211d44269bda60c71150e46951cda28528a676dfb447fd69984ced6168439c84d4b207a18929e2111bb1810de47042fe565cc11997a590bced10b9f556811306dece5d2e02479790d03a5367adb1a680f71e151688a02f6a3a34512e50a969f7ca0d1c6fb10c56374e3be135a4943dfb4f38e3846612104d2b6c9e826a23626c1871171be70cc17a6257c7a024b3df2fa4e979e3e25dcbdfe8010eb0b1abf497f881b7722fb49d23e28666b586ecdb0329d1f23dd686ae0f7f10894bda6621d73bc7fb45da270f12a8a060df4f13c13af0edbf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b9afecd1d0b4ac01d1e04a7d8af547e6b16b4d8e2623e450a8d78adac5c7425bb15abe813088e37775b70eff00fb91418678040000",
    ],
    [
      "ETag",
      "VUZmsPoo1t7LeNZPGSsQRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92414fc2401085ffcb78b44d20d05a9a7000412501045ae2c110b2b4d3b2d876ebee564308ffddd98a68d4442fedccf49bed7baf3dc0132f62f061c3d3e70ae5fe22453d37c50255956945b752140ac102d42c25b2c5f9360e767ae6945eb2d4cea0953c5ccebb5d2254b4c59c817f808463162bf01f0f50b01c692d12599517ebbab340ef4b330cc2c5687a4b7d2e62d34f97e371af3f1ec2d13a2fc64cb375cdff636d75b46027360b4c506211a1d1524ab1c3488f8c4dc5f232435b894a46a8a086eb07a91455c9a410364decb66337dd46b3d3749c8ee7353c02331131cd4541ec32207da08566d942bc924b70099075498693fafa42631ed7464c399a866ebbd6f715206909cf70fd37487ab78c3ec307768ae03bc7725115fa4cdd8cef7bbf1d47997e1e35e885c31f84d294d4190947936110f62633c3ad4edefb7b8d6a260505a9d064d86cb43de7ca6dbcc77a2d4cd4f41e5fcb0a2d8818fd1d775c839fb04ce1f10d6be8915d7b020000",
    ],
    [
      "ETag",
      "3iihdSjtP5p8fUt5D3fW+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-46-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "6f9b3014fe2bc87bd9a426c1e19a485117a56c43cba54948ab6e9a12630c750b9862d3adabf2df7780a617556b9f403edfed1c1fdfa36b9e476888429edc54acbcfb70254274849822099c7efbeb2fb1878deff48f4397b1eb727f7cb11c8d00c16b96245991b28e145549991c6ed6dda41455414a213a20d431ed0eb6753cc09635705ddd059e64693ce5f935b02f952ae4b0d73b7877132192949182cb2e15d9e379efb6df2b4a71c5a892bd97963d7091bdb74d8f534189e2221f6dd610a092acdcb28cf014223c31a3f0f34be92e27593701f02da78c502aaa5cd5b140828a3ce6495536aa68788f9a98cf7ed0da9b7a93409b2c36f3e0e38e643579f7492352db6e4b26ab54695f568b99b62bc0eb92482677daf9376fe5c14929629eb22d8f76da483bd6c6f3134ddb4905e1da83a93ff3030d438e8849c5f3264540c294d5091e06e5bfbe9e9a401478b5c5ada3db04bbfa208c4387c6ae6185b1cec2d00d1d8b18a14e072633a39011e0a95abd61915ce4d1c0654684711f38d4208eee846edf882d8b99566c4406b5891d59a689f647e877c9153be1b21092b7d342e72b3ff0b6c16a339f8c03af692326309193365cddc4f39c0a9a04d01b7dedeb2a17e0548fde9f07de6a3c09fc33afbded294b08bd5bdfc07dc724950cd0a4241953ac9c890886864e176b3ff017f3f11418cd159e1e10120d7fde3f1182bba299b26abeb597ddb4f908382369d5206edb1f84d17e7ff47f85c09f79eb603c3b7d5ba5aff7f58edeef602bc0fd213686d8eceabafe03c47f0111d6bed545cb8db7ba40edd18ac5ac64397d7f2f00dc14de7dbd87a70458784c60037ba9386c2195b5092d59bb8d3c6b7a6fd9b6854dc7460db854af6a36760e63af356a4596",
      "b15c3d74d43ea57a8a4da9928f2028c212cdfdf957a8fe035200b585ca040000",
    ],
    [
      "ETag",
      "HzIQ1E13Kcx7cQf88iIAYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b83301086ffcbede31494adce16fa611db2154456d742619492dad3daa9e792d82ac5ffbe4bba2fb9cb9b27f7bedc0d7ecae608333894c56f8772782850af4c93a2ea2aadb8b4d4280407508b82c9be1c9e929726978ff2d25f83d3a1c7ed7a359f33a1b213d6026637c84bac8e0a66df3768448dfc6dbf977622637a688db24cd6d17b94b250d3d108c9268e5f177104e36e74e04c87147394d8646846b692ce98e9a549ab44dd56e82aea64860a2c6c1f0a495d2b2491cb8afb1cb87ee0f9537f329986a1173258512674490db39b2f601b4d5a54295d392cf80c48db72eedc9e172b73a0dd3fba1834aa4f49ecabd0587a77fb3732913447d5b2430732c1cbf828f5fd3efe01de5177ad69010000",
    ],
    [
      "ETag",
      "xiy3N7nfr+rvxw6hbxeXTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcfdb6e82300000d07fe9b318112a656f10d950a888306e2f84948ad50ad8922198fdfbccce1f9c17a808a152964377a32df80053b5369764e975c8d6c63af76af764a23052e78324b02d92d5979ca2a3194e02e52219637f8f3b8845ad25bc896e99a5a359ccf81ef897d465b0575585043b27c9b43366c6c55583d168143d50c53661fc18f2213d41e5a7a090177bb4a5c420dfa50557f2d13458afed361f94c142a907f1cef1c7e289af31731e4925dd7843caaef178b6167151d9075edd3fbdfe7c9d1d6763746e0e16803e7b26a82cd97ba641d35c80ff66394c3d7d5f6d5a092ac0ef1f925090b005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-47-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d4fdb3014fd2b91f74a9b364ddbb45235aa3640359a6e690a9aa629b29d9b6048e32c766008f5bfefc6a10c84044fb17dcfb9e7dc8f3c913b5124644a98c8fed4503d7eb9958c9c10d034c357fb868991148ba4b815eed2f976f6709efdcd6633448886a5e8becca1a3645d7150d3ddb69b55b22e692565071375dc71a73feaf527fde170e2793d0f790af2f4521477c8bed1ba5453db3e6a773329b31c68295497cbfdcbbb7defd865256f816b65bf95b45145d91f8b7ecd25a75ac862b6dba2815a4115c39e8a1c2dfc6726ecf46deaaea0fb6e86e07bc181722eeb4237b6300597452ab2ba3259c9f489189baf0e64eb5ffa8bc8e232aff7455cd03d9c5809d534d68f255867e1666dad82b34db89e47ab4d106f1717fe7ade5d6c2e77eb606b5d5ff8a16f69ca72305c6b669d9a5b8017d44f40695118f5a8796e949f1bb47a3f968680d20ada603cee8d68dfeb4d58cac63cf5064396f680318f8d8774c07a7ce2829b30a0c833a286450b590c26c0060e78b1d74f20769de1309e383d16532f75fb89973a094cc8e1843c5442c352a8522ad176885c87abc88fa370172ce6916f4a48699deb656bac29e0b5478d0522e8839a0e4d5448546adabd0a223f9c2fa2d595df4ef81232ca1fb77f70c629cd15209a56d83c0dd55a26d83012ccd7fe12c16662df8f4145a6bf9e48d3f3c6c5ab96bfd0231c6063579b2fd946e12a3837768e882b9ad70672df1e4889966fb036747df88d485cd2360bf9b1f3c39fa47d0a21850a0afef934116c029ffe6bc7c5472cae3eca288d77dc1dae1a115e41bb43c294fbcc1e0d9dbee31203aef4bb9833768f5d6b723419610f857eaea85d7c2cb415abd50b088338fec074ebf00fda1739e678040000",
    ],
    [
      "ETag",
      "/hbi6oiCdnji4D2KFwGgxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2d811a7e9b705114a50610688d17c690b59d42b1ed94ddad8610deddd98a68d4446fda99e937db734ebb87e7248fc081a764b52d51eece56a8e7a658a02a53adf85650ae102c402d564cba9d7ceade0cce29f6ebf6bded6dcbeb517ddeef33a1c23566029c3dc409a69102e7610fb9c890d7424acb2c5f569d057a5798a11f2cbce935f71945a69fde8dc7ee603c8483755a8c8416cb8affc7dae3c1820d3d2d3046897988464b216983a1f68c4d25b222c59aa25286a8a082ab072b49652124518d27b566a766b71b76cf6eb57add6ea3cb604aa1d009e5ccdef9ac0f3469912ee8955d429b0159956c38aeae2f3c4ea2ca8829bd69d06e56fabe022c2d4e525cfe0db2deb5e0cff0811d23f8ce898cca5c9fa8abf1adfbdb719ce9e751976e30fc4128cd499d90c09b0cfdc09dcc0cf778f43ed8695433491ca44293a1dd68765b9d76e33dd60b3251f37b1c2d4bb42014fc778c120d4e2c52858737080c60447b020000",
    ],
    [
      "ETag",
      "A7nNAJB2ofS/1W1IquGH/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-48-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "b2496d489a9090485117a574a34a494b48bb699a12db18ea0e30b54dbaa8ca7fdf619abe6c5afb010177cfcbddf9fc807ef122462344787a5731b9fd702b083a404ce314a297df1676589d79f44cff26dee2ea36d8de6deec76340f09aa5705e66ec50894a52a646cb452b95a22ab114e210840e7bee61a7dfee0c3b8e3374ddb60b3cc5b264c68b5fc0bed1ba5423dbde7bb75221d28ce192ab1615f953dcde1cd9a514b78c6a65bfb6b4c145d96f9b1e678262cd45315e2ea0804a31b96239e61994f0cc8cc9e7d7d22d8ef3560ae00da70c532aaa42d76581041545c2d34a1a55347a40a6cc171f68e1cdbc69644de7cb20fab8c6794d5e7fb2b0b2562bc9549569eb349c9f5beb12bc6eb0626a6d5d7ff5420f2252243c632b1eafadb1756c4d8213cbda4b98c8cc3ff723ab0385c44c695e9832224c325697f03829ffdff3a909588359935c0dda7ddc71db439290014ddcae43923623c425030777499b0e7bac17138681a76b75c3c28528b08b8f62d2638edbef323a20bd6e7b48bbbd84386e6c9ebeeb0edd0146bb03742fb966275c9542f1665ce83af4236f1585cb603a893cd346826124274d7175132febd4d02480dee86b5767b900a77af67e1079e1641af9575e73dc339662ba5ddcc1812738530cd058e29c6926cf450c434317f3851ff9f36032038639c38b3d42a1d18f876742b42dcd94b579d75efd9ef1df03ae705619c4a6f9401db4db1dfc5fe174369fbcafd17200b1fb0920",
      "d8f046015d2ebdf03b6a42214b9864057d7f03006c12ef5ed4fdad012cdc1bb0511afe61dfa8aa4da864cddef1dc54d8b0fbced1b03f40062cf5dfb96e67e0ec075c6bd48a2c67857eeca8b935f5bc4caa524f2048c2ba047ef005b27f002edfbb17b5040000",
    ],
    [
      "ETag",
      "QXS/RuJEcJtxbESVjNyqvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90d16f823010c6ff97db2b64a2b221890f7321cecc9889fab41853cbc9aac0b1b66c2184ff7d57dc4beffaf5d7fbbe5c0737556510c359e5df0deaf62147bb754d8aa629ace1525365103c402b7226ab1b4ee464772e9fa7cb47f53e0eb356edb6f33913467e612920eee0a2b0c80cc49f1d54a244fe763ae9612263b6ad9db2daec936592b25052e684cd61bd7e59ac13e88fbd07573aa778418d954437b2d6744569572ead11655da06fa8d1120d0cf0f0906b6a6aa1897c56fc69e4074fa3601684e12c8a4611830549611555cc1e76c03696ac2852fae5b01030a08796735f86f387e5b10b74fc4717ad45f3a1897d0d3acbd1ddfe955c24cb51ad6ed0032978196fcadeeffd1fb5e173c169010000",
    ],
    [
      "ETag",
      "nke3c3Sbm74G/iK25dyiSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c97282300000d07fc9d971588492dec02a4b4564abca854943d8a209bb60a7ff5ea7ef0fde0f401893be4f074e0903ef6041125ce3f527d70cf991b74e709ef59b6b59bc645629c04eb7ebb32a151f417011bd519cf7533d556d96f366175fb9bdf717ca0b8741246303cf5993a37ac4534211cdbe136d394961e6358242dbc49d985a1b96599ac79b9bed229117fc607a0c69461b79db98b6ae3144aaa9d871a4df05f4d430accdf19e5d1cedc48af061fb9b378659ca8ed72fb5d8f8ca017538d4ed4aceb750a76005c8dc541de9d3ea3593150857e0bf990e4b435e5783a08e74e0f70fc65436de05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-49-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d6f9b3014fd2bc87b5c93c00281448ad628a56bb6846c84b49aa6091973a16e01536c3a5555fefb2ea6e95a55ea9eb07dcfb9e7dc0f1ec92daf52322309cfef5a681e3edc88849c105034c7d7547cf5d3d2beb9c9beb9859c4827fc18403e9f2382772c49cbba8081146dc340cef6bb61de88b6a68d10034c34b0a7036b625a53cb71a69e677ac89350646b5edd22fb5aa95ace46a3a3f63017222f80d65c0e99289fdf47f79f4675236e8029397a2d394215397a5ff4732118555c54f3fd0e0db4129a184aca0bb4f08f9926a7af530f392d873982ef3903ca98682bd5d9c2144c5419cfdb466725b347a26dbe38909dbff69791c144d196555cd1124e8c942a1aab871a8cf370bb3156c1f936dc2ca2d5368877cb0b7fb3182eb7ebfd26d81957177ee81b8a260568ae31374ef52dc00beaa72015afb47ad43d77ca4f0d5abd1d4b474069097d3076cd09b53c739a6489cb326fec24990949e225ae43c789c9a636d8690214795a54b36825aab19bd996eb99b1ed98596c2332a61ed8b149d3347180b9596691c309f9d37005675cd642f2be43e42a5c457e1c85fb60b9887c5d4246db429df5c6ba025e7a54582082dea9e9d045b940a5aeddab20f2c3c5325a5dfafd84d79053f6b0bbc31967b4908068da60f314341b9162c348b0d8f86708d613fb7e0c4a32fbf548ba9e772e5eb4fc991ee1003bbb4a7fc92e0a57c1176de788b8a445ab21f7fd81d468f91a6b43d787df88c425edb3901f7b3ffc49faa7103268a062ff9f268275e0bfffda71f1118bab8f3252e11d7787c94e8435d0ef10d7e53eb127ce78e25a44831bf5263675ac63d7ba1c5d4628a1524f15f58b8f85f662ad7c066110c71fe86e1dfe0221ed7e0278040000",
    ],
    [
      "ETag",
      "doJEdm4jjfK7ls6s5R+Neg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fc2401085ffcb782d0968c1d28443818a2480588a1763c8d24e4b61dbadbb5b0d21fc77672ba25113bdb433d36fb6efbdf600bbac88c18575963e5728f71729ea7b5304a82aae15dd4a5128040b50b394c820bebcdaed6c874f877e6efbdd87f9603b4a7b3d2254b4c19c817b8024431e2b701f0f50b01c692d12bcca8b55dd59a0f7a5192ec2603c1b519f8bd8f4b3e564e2f5273e1cadf362cc345bd5fc3fd69e8e166cc53ac0042516111a2da5145b8cf4d8d8542c2f393694a864840a6ab87e904a51954c0ad1a049c3ee365a9d66abdb6ab7bb8ed37408e422623a1305b1cb05e9032d34e381782597d02140d625194eeaeb0b8db3b83662caf12cecd8b5beaf00494b328eabbf41d2bb61f4193eb05304df39968baad067ea6672e7fd761c65fa79d4d00bfd1f84d294d41909c7537f117ad3b9e19e4edefb7b8d6a2e0505a9d064d86ada4efbbad37c8f75204cd4f41e57cb0a2d8818fd1db7990637615ce1f10dd3dc80d77b020000",
    ],
    [
      "ETag",
      "Rd23kk48lMDEm4E9VPCjGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` != ? LIMIT 1",
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
      jobId: "grouparoo-job-50-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "a5535b6fda3014fe2b99f7b2490512424240421da2591709420781aa9b26708c13dc26716a3b9daa8affbee3a4f4b249edc39e12fb7c9773f1794037acd8a1218a597a5b5171fff19ac7e804518553b8ad1232bb5aafcff7cee487ba7026b77b774cd3d108104cb324cecb8cb624af04a172b85ab653c1ab120bce5b20d472cc96e59ad6c0729c81e7991ef024cd92292b6e80bd57aa94c34ee7e8dd4e394f338a4b26db84e74ff79dbb6ea714fc9a12253baf2d3be0223b6f9b9e669c60c578315a2d21814a52b1a1396619a4f0ccdcc55f5e4bb719cedb2980ef18a198105e154aa705128417094b2b51aba2e103aad37cf18396fed49f44c664be0aa34f5b9c6bf2f6b381a5b1d9082aab4c195f17f399b12dc16b8f25955be3f29bbff0e146f0846574c3765b63649c1ae3f0cc30b6faf4411fa7c12c880c0bb2d851a95851e710e138a3daffb14dc1bfc3d104acc0a9096efaa68b2dcf1cc449dc2789673b7162d238f6e2be83edd824831eeded628a81a7b47acdc205543ec0a6959081ed76cdbed78dbbb66d393dd7763d0f3b9e4dec3e89fbfd9d8d0e27e8b7608a9e315972c99a5ea1cb4510f99b68b10a27e3c8afcb4830f4e3ac494e17f1324f054502e88dba0e3aca3838e9c60761e42fc6932858fbcdaca734c5e47e790bd34e702629a0b1c0395554ccf80e9a862ee6cb200ae6e1780a8c7a8017478444c39f0fcf84e8beacbbaceaaff6727bb5ff11b0c6595523ee9a1f64a1c3e1e4ff141c90f8051078da0d1b7d5ff98b2bd45c2d6842052dc8fbd307701d7877438feb02585818b0910acef0d688d42644d0e6cdb1bcceaf61bb4ecff3eafd5658a8bf630e7c8ecdd51a5a91e6b4508f1535eba27b55872af90482203c953008cf21fa07337eacf6ae040000",
    ],
    [
      "ETag",
      "ufcMYVVGh5CZtP5Cqh6Aeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90d16ac2401045ff65fa5843132145033ed422550841d34ac122b259c73436c9a4bb934a1afcf7cec6beecccde3d3bf7323d7c15f51122c88afcbb45d3dde5c81bd7a468db92ad94866a8b300264950bb95c174b3d0e2fbb316f37efc9c37db7f9cdf2d94c08ab3fb15210f5702ab03c5a883e7aa85585f2ed7030c344c1b86b9cb24ade162f8b54848a8e4e48b671fc348f1770dd5f4770a62cc5131aac35ba918da1336a5eb9b456554d899ea5d668b430c0c3436ea86d9421f244f142df0b1efd601a84e17432f1270296a41517540bbb7d05b1616255a67491b01008608656729f86f347e4d005daffa3f38ed1ae0d89af4567e9dfec9fc9456289caa6c5116825cb58167cbb5fff00defe137969010000",
    ],
    [
      "ETag",
      "HPiHc25wZ2tUQWN/+yQzbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "dd",
      "7643300000e077c975f5d01c87ec522b553aed14b52bc74fb4843009193b7bf7f5ec7b83ef07644541384f454f09036f60c976685b6cbddeb4a02ca33d9d6cf779f6aaa24ba6294051d19a359290b2d53837943d868b4eb5b9d599a29086e1dcbf4af8293c4c3a262dce445cda1f63a5ccddcc932f5de0d384bbc4dcf13acd8be84ee3f568f483a4cead5cd4218ca663081b9153c7ccb431b39dc8f0205a5d55c4d285811ade18be5e7a4b1dfc86c0bc3d05abf6deabe982f7e3ed79a7078b1cd640549aff50c10690efa11e094febd70cea086dc07f3315cb405e578b642319c1ef1feb51b68f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-51-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d4fdb3014fd2b91f74adb04da34ad548d52c2e8d4a65b9a82c63445b67b130c699cc60eac42fdefbb71280321c1536cdf73ee39f7234fe45ee46b32244ca4db0acadd973bc9c811014d537ca5672b7771b3bb71676797f7df67e9e2efd6bd7d1c8d10216a96a29b2283969255c9410d57cb765acaaaa0a5942d4cd4ea392dc7b59d81d3eb0d3ccff690a7204b6622bf47f6add6851a763a07ed762a659a012d846a73b97979ef3c1c778a52de01d7aaf356b2832aaaf3b1e8d74c72aa85cc47ab251aa81494316ca8c8d0c27fe69a9dbe4ddd1674d34e11fc203850ce6595ebda16a6e0324f445a95262b193e1163f3d5812cfd993f892c2eb36a93c739ddc091b5a69ac67a578075112ee6d634b85884f371345d04f17272e9cfc7edc962b69a074bebfad20f7d4b539681e15a23ebd4dc02bca0fe1a9416b9518feae75af9b941d3f763a90928ada009c67ddba58e670f58c2fa3cf14e7a2cb181318ff57bf484d97cd085ee9a01459e11352c9acb9cf511e2703bf61218c4dde3e324f6066e374e6c66f71dce98cb81ec8fc86329349c0b5548259a0e91eb701af97114ae82c938f24d0909ad327dde18ab0b78ed51638108faa0a67d1d151295ea764f83c80fc793687ae537139e414af96eb9c51927345380685a62f3349473b9c68691603cf7cf116c26f6e3105464f8fb89d43daf5dbc6af90b3dc201d676b5f99265144e836fc6ce017145b3ca401e9a0329d0f22dd686aef77f10894bda64213f577ef88b344f21245042ce3f9f26824de0d37fedb0f888c5d54719a5f18ebbc3552dc24b68764898729fd96e0f1374890197fa5dacef3987aed539ea8cb0815c3f57d42c3e16da8855ea0584411c7f60bab5ff07c29e356978040000",
    ],
    [
      "ETag",
      "aBU6OZyZ6LBHkJLgOxq6hw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f4584c21518a241eb4da96042d454c0f8d312b0c8a0596ee2e1a63fcef9da5d6366d93f60233c337cb7b0f0ef0929509b8b0cc56af358afdc50ad5a32e429475ae24dd2a5e4a040350b1159197ecea6930dcd58ac59608763bdb0c8aed63af47848cd75830700f9066982712dce70394ac405a8b795e17e5a2e90c50fb4a0fa751e84deea82f78a2fbc9ccf7fb037f0447e3bc9830c5160dff8fb5f9d1800d5f8698a2c03246ada5127c83b1f2b44dc98a2ac796e4b588514203370f5682d715139cb768d2ea582dcb36adaed5e9741dc77408cc79cc54c64b626753d2078a2b96877c472ec126403425194e9beb96c659d218d1a53789ec76a3ef2b40d2d22cc7c5df20e95d33fa0c1fd82982ef1c2b785daa3375eb3ff47f3b8e32fd3c6ad88f463f08a928a9331279e3d134ea8f03cdcd4fde077b8532109c8294a833b4ccb6d3b9b6cdf7586fb88e9adee32a51a30131a3bfe33e53e0a62c97787c037f53991c7b020000",
    ],
    [
      "ETag",
      "+a/WBDwutac1rPww60PmvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-52-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536d6f9b3010fe2bccfbb2494d802410881475514a37a4847484b49aa62931c65077802936dda22aff7d8769fab269ed27ccddf372773edfa39fac4cd004c52cbb6d68bd7f7fc3637482a8c41944fd2059e67ef2bbd8f8e746ecdd4655705964d3292058cb12b8a872da13bca9091593cdba9fd5bca970cd790f847ad6a067da86e99a96e53a8ee1004fd03c5db0f227b0afa5acc444d78fdefd8cf32ca7b862a24f78f118d7ef067a55f31b4aa4d05f5aeae022f4d74d4f734eb064bc9c6ed650402368bda505663994f0c44ce24f2fa5fb0c17fd0cc0778c504c086f4ad9960512849729cb9a5aa9a2c93d52653e3ba0b5b7f0e691365f6d82e8c30e172d79f751c342db6e6b2a9a5c6ae7e16aa9ed2af0bac6828a9d76f5c50b3d88d43c6539ddb264a74db5536d169c694fb89df6ae0d2efca51f6926d492502159a92a89709cd3b68a8761f9ff5e514bc01274bae4766cd8d8740c374ee331499da115a7068d63271e5b78181bc41dd15112530c3cd9aa2b162e79690ddcd41d1062a7aeed8c47ae63ba4317840c334dd3211d59639a984e6aa3c309fa553349cf98a8b860ddc4d055e847de360a37c17c1679aa8d14c354cebae2da269ed729a14900bdd2d7a1cd320e4e7bb5b79117cee6917fe97537bea01926fbf52ddc798a7341018d6b5c5049eb254f6068e862b5f6237f15cc16c050d77871440834f97eff4488f6959ab254dfd6cb1e29ff23e012e78d42dc750764a2c3e1e4ff0aeb28f483cfaf4bcc2ae816647e000a96bc53405f375ef80d75a190a6b4a625797b0300ac126fbed5e3c3012c3c1db01112fe61df88684d484dbbbd6385eab263db96ed0e8748816bf9776e6c8e06c701b71aad222d68291f3aea1e4e3b2f956ac4230892b02e819ad4e10fe8be7369b8040000",
    ],
    [
      "ETag",
      "INdMlIdxmUIF0bEqTpNVmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83",
      "40",
      "10",
      "85",
      "df",
      "65",
      "bc8504540c6dd20b31446b4855faa3c634cd7619100486ee2e9a4afaeece526f7666cf7e3be76406f82adb0ca6b02f8b438fea7851a079b14d8abaaf8de6d251ab111c40230a26375e7595e9c9eb6a79c0f7dff071a3dea2a762366342cb4f6c044c07c84bac330dd38f015ad1207fdbedd438913173ecac325face2fb3865a1a1cc0a8b7592dc46490ca7edc9818af629e6a8b0956847768a2a94666ed36ad17435ba9a7a2551c3088f0f85a2be138ac865c50d2e5dffc6f3277e104cc2d00b19ac490a5352cbec7a096c63c8883aa51f0e0b3e036a6c39773e9edf2c5fdb40db7f343a1ad4cf8ad857a3b5f4cef6776423198e6a548f0e48c1cb7828cdf97efa032e7d0e6169010000",
    ],
    [
      "ETag",
      "V0j3ds9WTSqeYz8JVrXBOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dcfdb7243400000d07fd9e734b3189b6cdfec8408da928bb22f4664c9a204eb9ae9bf37d3f307e709e224615d1789ba60157807732ce375b2b6eb2d51c6d4b19bd25237dfb9ecb579857a6f621c7553503a43786a079251dd322ca4a5d25d865ff666e022bfaa6716a9b0972ff31d8f747bd66ebba25c6add8e3a4b2032d009f1e2b3b70567868b7b9fee17f8d170f9ea6a3ff37eb8e8b04a16b4f8a65d1ccae34ec9fcb8a221c1d421b4c25ef8761c5d1345a6970469aa48b7e6944dfdcc8d473dc5040a18a4506ad3035801363d78cbba88bf668a8af10afc3723313fd8eb4a58dcb216fcfe0115c8085b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-53-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b5c93000981448ad628a52b52425242da4ed3848c31d42d608a4da6a8ca7fdfc5345dab4aed13b6ef39f79cfbc1337a646582a62866d95343ebc3b7071ea3334425cee07573571b9bbdb54bbde6108fbf9bece1ee605ecf6680602d4be0a2ca694ff0a626544c77db7e56f3a6c235e73d48d4b3863d63ac1b13c3b2268ea33bc013344f97ac7c04f6bd9495980e0627ed7ec67996535c31d127bc787d1feccd4155f3074aa418bc971c808a187c2efa23e7044bc6cbd96e0b061a41eb881698e560e13f3389cfdfa7ee335cf43300ef19a19810de94b2b50529082f539635b5ca8aa6cf48d97c73405b77e92e428df0bc29caa8c4053dd3122c71240f15d52e83f54af3fccb75b09a87deda8fb68b2b7735ef2fd6cbddcadf6ab7576ee06a12c739555c6da69dab9b0f17d04fa890ac54ea61fbdc2abf34c8fb38969600d28276c1c8d6c7d870f4499cc636499da115a73a8d6327b62d3c8c753219d15112530c3c25aa58b8e4a5ed4cc6a3344d22c3b69368a49b5634c1b611e9d821e6d01cd29163a2e319fa5b33492f98a8b8605d87d06de0856e14063b7f310f5d55428a9b5c5e74c6da02de7a945020803ea9e9d8461907a5b6dd9e1fbac17c117a376e37e125cd30396c9f60c629ce050534aea17992d62b9e40c3903f5fb917005613db9c82024d7f3fa3b6e7ad8b372d7fa58730c0d6ae545fb40d03cfffa9ec9c1037386f1464df1d500596efa136707dfc034858d22e0bbadeb9c12fd43d0534a5352dc9d7d304b00a7cf9af9d161fb0b0fa202324dc6177886845484dbb1d62aadc17f6d8b22d5b470a5ccb0f31db1c9ebad6e66833d28296f2a5a26ef1a1d04eac11af2008c2f87dd5ade33f6fcd4fb678040000",
    ],
    [
      "ETag",
      "PXr1Pv5UfIuyb6+2ijXy2Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "782d1122add08443415412408472d110b2b4d3d2baed96dd2da621fc77672ba25113bdb433d36fb6efbdf6002f491e820b9b24de9528ab8b18f5a329e6a84aae15dd0a912b040b50b398489e0decd491ed2aef627a8961f5b4d73bafd72342055bcc18b8078812e4a102f7f90039cb90d602c1cb2c5fd79d05ba2acc70e1cf47d33bea33119a7eba1c8fbdfe780847ebbc1832cdd635ff8fb5d5d182546ce618a1c43c40a3a59022c5408f8c4dc5b2826343895206a8a086eb07b11465c1a4100d9a34ecab46cb69b6ba2ddbee763acd0e815c044c27222776b9207da085667c2e5ec9253804c8ba24c3517dddd338096b23a61c4d7da75debfb0a90b428e1b8fe1b24bd5b469fe1033b45f09d639928737da66ec70fde6fc751a69f47dd78fef007a134257546fcd164b8f0bdc9cc70ab93f77ea551cda4a020159a0c5bcd76c7be769aefb10e84899adee36a59a20501a3bfe33ed1e0468c2b3cbe017b6c96ca7b020000",
    ],
    [
      "ETag",
      "lmC5j6r4yn9ej/edyZvtqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ? LIMIT 1",
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
      jobId: "grouparoo-job-54-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "cc",
      "fbb2a94d024d081029eaa294ae48699212d26a9aa6c49883ba054cb1e95455f9ef3ba0e9cba6b59f3077cfcbddf9fc486e791e91110979725741f9f0f94684e49080a209460d7173505c38c66996f593e5f2805e1e8983c9788c085eb324cd8a143a52542503395aafba4929aa8296427450a8630e3ac650371cc3341ddbd66de44948e319cf6f917dad542147bddedebb9b0891a4400b2ebb4c64cff1defd51af28c50d30257b6f2d7be8227bef9b1ea78251c5453e5eafb0804a42b9818cf2144b786146e1b7b7d25d4eb36e82e07bce803226aa5cd565a1041379cc93aa6c54c9e8913465be3a90953b73a781365dace7c1972dcd6af2f6ab46a5b6d99420ab5469a7fee25cdb16e8754d25c8ad7675e6fa2e464a11f314363cda6a63ed589bcc4fb417dc56fb540767deb9176806d61281543c6f2a096898425dc5d3b0bc7fafa82650853a6d7263e9436ad8ba13c6a1c562bb6f86b10e6168879649fba1ce9c010ca21028f254addeb0682e729bc2d032077d884c066164597d66513cc7cc760c6a1afad08c8e42c722bb43f2bbe40a4eb82c84e4edc4c895ef05ee26f0d7f3e924709b36628a5339698bab9b785da7c22611f44e5fbb3acb053ad5e3f7e681eb4fa68177e9b6373e8384b287d51dde794c530988a625cd4041792e221c1a592e565ee02de69319329a6b5cee11928c7e3ebe108287a299b26abeb5d770d0f8ef019734ad1ac47d7b2006d9ed0effafb00a7c6ffefd7d095a60b728f30b51b8e4ad02",
      "b958bbfe0fd2867c88a1849c7dbc01086e121fbed5fdc3412c3e1db4910aff71df98ac4d5809eddef1ace9b2650f4ddb761cd2804bf577ced12d7b3fe05aa356840c72f5d451fb70ea7935a94a3e833089eb326f26b5fb03ede3ac8bb8040000",
    ],
    [
      "ETag",
      "1oj+pQ91Fmm3gPP+aV2o+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cbed6b052d55acd00fabd8ade06473eb188c52523d333bf55c1257a4f4bfef62f7257779f3e4de97bbc077dd9510c1b1963f03aaf14ea279b14d8e7a688ce6d253a7116680464826e5668cb340ce17c3269fd755dcbe3f7d9ce56ac5842ebeb015105da0aab12935449f17e8448bfced7050d344c6ccd85b659bbd250f49ce424ba515b25d9adeafd304aefbeb0c4e74ccb142855d817664afe88485d9dab45ab47d838ea64115a86182a707a968e88522725871fc85e305aeb7f47c7f19866ec8604385303575ccee5e816d0c19d1e474e6b0e031a0a6967357d3f9cb726003edffd1f568503f2b625f8dd6d2bdd9c76423198e6ad4803328042fe3b136b7fbf50f54742afb69010000",
    ],
    [
      "ETag",
      "gFyCN6g24uFR2ifCmVMXwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e",
      "82300000d07fe9b318180ce8dea883d9712b98e1e4854053634b10421128cbfe7d66e70fce0fa82965525653dfb23b7803aa7e817bba0f7b17990b7df7261f3747c54bf3240c813955b9b4a96ad01783f309fab4ca93c62d2f8613f1c399781e92b81306f5978ce04086b7a2366d6e47dcee7bf210dafc09d3906ffe6ca44353923870db6bf238eb0839b923dd4e8d9165441f368677b32b8aebb1bd31b1e426ccac43e7c693c8089f934562cd9b75eb7b352e71b66c09196a3fcd33b8ad8a6beb88db40f7c00eb075e02393157fcecc570877e0bf594d6a60cf2b62f5c846f0fb07d92ea97a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-55-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b6f9b3014fd2bc8fbb826210f08448ad628a14ba6846c84b4aaa60919e742dd114cb0e91655f9efbb98a66b55a9fd84ed7bce3de73e7824bf79be232312f3f4504179fc742f62724140d1145fb3c37c753d3b3a36fcfdf6d9be35fd4332df4dc66344f09a25e9bec8a02545553290a3eda69d96a22a6829440b13b52cabd5b5cdaedbb52cd7714c077912b264c9f3dfc8be53aa90a34ee7acdd4e854833a005976d26f6cfef9d875ea728c53d30253baf253ba8223bef8b7ec904a38a8b7cbcdda0814a4219c19ef20c2dfc67eee2cbd7a9db9ceedb29821f3803ca98a87255dbc2144ce4094fab526725a347a26dbe38908db7f4a6a1c14456edf328a77bb8307654d1481d0b30ae82f5ca58f857eb603509176b3fda4ce7de6ad29eae97db95bf316ee65ee0198ac61968ae31362ef5cdc70beaef402a9e6bf5b07eae959f1ab4783b969a80d2129a6034346dda754c374ee2214b9cbe152726c4b1130f2dda8f4de60e60b08b81224f8b6a16cd456e81d31b26d48a7a7d30a381e9762367d035a39e6d5b8e0baee3f629395d903f255730e3b21092371d2237c122f4a230d8fad349e8e912125a656ad618ab0b78e9516181087aa7a6531de50295ea762ffcd00b26d37071ed35135e424ad97173c01927349380685a62f314942bb1c386117fb2f26608d613fb7e0e4a32faf948ea9ed72e5eb4fc991ee2006bbb4a7fc9260c16fe576de78cb8a659a5210fcd811468f90e6b43d7a75f88c4256db2901f5b2fb825cd5300099490b38fa789601df8f05f3b2f3e6271f551462abce3ee30598bb0129a1de2badc27b66db976cf221a5caa3731d71a9ebb56e7a833c21e72f55451b3f858682356c967100671fcbeeed6e91ff63a650f78040000",
    ],
    [
      "ETag",
      "lqHMVDy86exJ+6Y0NqfHdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "825014c6ff97d363b0e926a46c3d609959688af850cdb92b1c10052edd7bc939e7ffdeb964d6aaad5ee09cc3ef5cbeef833d6cd22202079669f252a1d89d25a826baf051569992742b7921110c40c5124d9e4f7a7967e3dff5cbd82d1fef974f5b6fe45e5e1221c315e60c9c3dc429669104e7790f05cb91d6429e5579b1a83b03d4aed4c369e00f467dea731ee97e34f33cb7ebf5e0609c1623a6d8a2e6ffb1363f18b0e64b1f63145884a8b59482af3154036d53b2bcccd094bc12214aa8e1fa4122785532c1b94913d3b2cca6dd68769a96d569b71b6d02331e3295f282d8d994f481e28a653edf924bb00910754986e3fafa4ae334aa8de872300aec56adef2b40d2e234c3c5df20e95d31fa0c1fd83182ef1ccb7955a81375e33db8bf1d47997e1e75ed06bd1f845494d4090906c3de34708763cdcd8fdebb3b85722c3805295167d86cb4dad685dd788ff58aeba8e93d8e12151a1032fa3b6e53054ecc32898737cc83ed6d7b020000",
    ],
    [
      "ETag",
      "b+QEm9kRJGpfApYKbZwLNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` != ? LIMIT 1",
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
      jobId: "grouparoo-job-56-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553eb6fda3010ff5732efcb26154820e125a10e41b6a582d04168f7d0048eb9a4a6214e63a71baaf8df774e4a1faad67e8a73f77bdc9dcf77e49aa71bd227218f6f0ac8f7efb722242704148d319a7d5ff83fb7fbe55fe04dde6e9d6db3337f3a1c0c10c1354bd25d96404d8a226720fbcb453dce4591d15c881a0ad59c76cd6a9b56cf729c5eb76b7691272189263cbd46f6955299ec371a47ef7a2c449c00cdb8ac33b17b88376e9b8d2c175b604a369e5b36d045365e373d4d04a38a8b74b05c600185847c053bca132ce191b9093f3d97ae73baabc708bee50c2863a248952e0b259848231e1779a94afa77a42cf3c9812cdc893b0a8cd16ce9071fd674a7c9eb8f0695c66a95832c12657c9ecfa6c63a43af2b2a41ae8dcbafeedcc5482e229ec08a6fd6c6c0383586fed830d61baa606dbcd3818937f502c3c23a3620154fcb2a021a26a02bb81f94f7f27a34812af4aa92ab8ed9a656d7ec8551d86151b7e584910961d80d3b0e6d8526ebd9606f42a0c8535abd64d154a44dc7b222bbc35a4d00dab518b3bad0b6233b84d066bd96d30166d1d0017238217f72ae60cc652624afa6452ee75ee0ae82f9d21f0d03b76c23a2389171559c6ee2699d0a9b44d02b7d1d74960b74d2a3f7fcc09d0f478177e156b73d8198b2fde206ef3ba2890444d39cee40413e151b1c1a399f2dbcc09bf9c30932ca2b3c3f2224e9ffba7b2404fbac9cb22abfdaab6d97fe47c0054d8a12715b1d88450e8793ff2b8cf5085e15689a4db366366b96834abf118a3b5e89906f4b77fe8354a139449043cade5e02049789379feaf1dd20165f0eda4885ffb8724c6a139643b57a7c57365ab1db6dcb6af64809ced58b9cdde91d67ac35b422ec2055f71d55ef468fac4c15f2018449dc18dff3bf60f61f2230d9aab7040000",
    ],
    [
      "ETag",
      "pXSNZjyUxei2i63JjpJNMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90416f82401085ffcbf42a091c2068e2015b5a4d88b5544e8d312b8e140b0cdd1d6a08e1bf7716bdecccbefd76decb0cf053366758c0a92c7e3bd4fd5381fc619b144d57b191d25263106680ac0a21cdfac5dc3c7ead827eb573dfb37e9f4551b45c0a61f26fac152c06b894589d0d2cbe0668548df2ed78d4d344c1b86fadb2d9eee3b73815a1a6b315b6599244ab2486f130cee04aa7142fa8b1c9d18e6c355d31e78d4d6b54dd56e818ea748e0626787a283475add2448e288e1f385ee07a73cff7e761e8860256942b2ea91136fb04b1616255a57493b0e009a0a756725fa6f34f64df063a3cd055cf68769ac4d7a0b574eff6cf6423b14465dde10c7225cb58977cbf8fff1709ca2f69010000",
    ],
    [
      "ETag",
      "sHDsw1tFl6yBP0OUyTUAAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "4b",
      "7282300000d0bb64ad0e8548487750101a8c22146660c3000d1f531bbe0a747af73a7d37783f202b0a360ce92838fb06af60c964bc2b76aed00ce5c1aad8af6244c24132ed6edf6a5c5b68f5b92236ce90f207968d39f205e38e33751429b7d37bca9caf35c85de86a97a04bee2f8cc08c5a3c546511e967b3dc7a489772b1f8d7a61d4a5acd35a29325bad319f92bbe93b0b87afc46b6ea2112fcc3eca54493398fe0dca76f841c2d194fb8c8c71a3547cf58f9c3a69d6b130c039d5f74bb0c6a2789d5031c2cb0016c6e9b9e0d69f39c297b8c37e0bf998e4bcb9e5783653debc1ef1f4ff0fdea05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-57-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda04f2202491a2354ae9ca9a908e9056d33421632ed42dc1049b6e5595ffbe8b69ba5695da4fd8bee7dc73ee832772cf8b844c49ccb37d0dd5e3973b119313028a66f8fa17bea797577c65f291bcdc6783ec7a3bb1e7b3192278c3927457e6d091a2ae18c8e976d3cd2a5197b412a283893ab6d3e98dacdea467db93f1d81a234f429e2e79718fec5ba54a3935cda376371322cb81965c7699d8bdbc9b0f7db3acc41d3025cdb79226aa48f363d1afb960547151ccb61b34504ba822d8519ea385ffcc243e7d9bbacbe9ae9b21f88133a08c89ba508d2d4cc14491f2acae7456327d22dae6ab03d9b84b77111a4ce4f5ae880aba831323a18a46eab104e33c58af0ccf3f5f07ab79e8adfd68b3b87057f3ee62bddcaefc8d7173e106aea1689c83e61a33e354df7cbca07e0252f142ab87cd73a3fcdc20effd581a024a4b688391638d686f6c4de23476583a1ed8716a411c8f63c7a683d86293210c931828f2b4a866d14214ce289938e9d08a8689358886ce90451471516fd08f9d0985646459e47042fe545cc11997a590bced10b909bcd08dc260eb2fe6a1ab4b48699dabb3d65853c06b8f0a0b44d007351d9a2817a8d4b4dbf34337982f42efda6d27bc848cb2c7cd1e679cd25c02a26985cd5350ad44820d23fe7ce59e21584fecea189464faeb89343d6f5cbc6af90b3dc401367695fe924d1878fe376de788b8a679ad210fed819468f9166b43d787df88c4256db3901f5b37f849daa70052a8a0609f4f13c13af0e9bf765c7cc4e2eaa38c5478c7dd61b2116115b43bc475b9cfecd1a86fd97da2c1957a171b588363d79a1c4d46d841a19e2b6a171f0b6dc56af902c2208edfd7dd3afc03d46d8eca78040000",
    ],
    [
      "ETag",
      "xeJfKPiM/i6sKqg3gVU95A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d926f4f825014c6bfcbe92d6cba1495ad17f8a7724333c45a35e7ae704014b874efa532e777ef5c326bd5566fe09cc3ef5c9ee7811d6c923c041b9649fc58a2d89ec4a8ae75e1a12c5325e956f05c2218808ac544baab4d747f83d9ed5de26dfa2f227a9df64ee3b3332264b0c28c81bd8328c13494603fec206719d25ac0d332cb17556780da167a38f5bde1f882fa8c87ba1fcf5cd7e9ba03d81bc7c59029b6a8f87faccdf706acf9d2c30805e6016a2d85e06b0cd450db942c2b5234252f4580122ab87a100b5e164c706ed2c46cb6ccba55ab77eacd66a7ddaeb5094c79c054c273626753d2078a2b967afc995c824580a84a321c55d7271a2761654497c3b16f352a7d5f01921625292efe0649ef8ad167f8c00e117ce758c6cb5c1da973f7caf9ed38caf4f3a8bee30f7e1052515247c41f8e0653df194d34373f78ef6e15ca89e014a4449d61bdd668375b56ed3dd61ed751d37b6c254a342060f4775c260aec88a512f76f0a6f82ea7b020000",
    ],
    [
      "ETag",
      "LhkfZVemWYiRkDxrfzSC3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` != ? LIMIT 1",
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
      jobId: "grouparoo-job-58-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "cc",
      "fbb2494d800408448aba28651d52de4a48ab6d9a12630c750b986293b6abf2df7740d317556bf902dc3d2f77e7f303ba667984862864c94d45cbfbcf573c4447884a9c40f48edd69aa757a654c7689ffd71167cbbb53f376340204ab590267454a3b825725a162b85e75939257052e39ef8050c7b43bbaa5e98e6e9a8e6d6b36f0044de329cbaf817d29652186aa7af0ee269c2729c505135dc2b3a7b8baeba945c9af2891427d6da9828b50df373d4e39c192f17cb45e410195a0e5866698a550c233330abfbd96ee329c751300ef18a198105ee5b22e0b2408cf63965465a38a860fa829f3c5075ab95377122893c57a1e7cd9e2ac266fbf2a58289b4d4945954ae5bbbf9829db02bc2eb1a062ab5cfc707d1722258f594a372cda2a23e55819cf4f14652b2414b7553ed591a937f302458742222a24cb9b32021ca6b42ee17152dedbf3a9095882599bdc0c340bebb6e684713820b1dd37c358a36168870313f7438d380635a29062e0c95abd61e19ce7d48647270609b1a3857df88d0d1c390671223a2056847ba11e453d8af647e8b664929e305170c1da71a10bdf0bdc4de0afe79371e0366dc4184672d2165737f1b24e094d02e89dbef675967170aa67efcd03d71f4f02efdc6d8f7b4a134cee573770e0314e0505342e7146252d673c82a1a1e562e505de623e9e02a339c3e50121d0f0f7c33321b82f9a29cbe65d7b5946e37f009ce3b46a10bbf603e968bf3ffabf42e0cddc55309e2ddf57e9693d",
      "ada3f53aba19e8bda1de1fea4657d3b45f20fe0788b0f7ad2e3a5bbbfe4fd4867c1ad392e6e4e3bd007093f8f0fa1eee1260e136810d2ca664b08544d426a4a4ed36b2ace9bd655b96d1ef0f50032ee59b9c695a87b1d71ab522cd682e1f3b6aef523dc52655892710246189e6defc14b2ff005257b136cb040000",
    ],
    [
      "ETag",
      "xix0/6Gj4CvgRz9sQPxG5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d904f6f83300cc5bf8b771c687060a2483d14c4b64aa85ad97a98aaaa4ac1fc1b6096844ea8e2bbcfa1bbc4cecb2f7e4fbec177dde710c0a52e7f4694d343897a6f9a14d5d86ac565a05e2158805a944c86d14b5b0d8fb170f3e8ea35e9d7beaa9e36eb35132aabb01310dca0a8b1cd1504c71bf4a243fe763ecb6522637a1a8cb2dd7dc6af71ca4247b911768724d984490cf369b6a0a14b8a054aec33342307490d667a6bd22ad10d2dda8a4699a182055e1e4a49e3202491cd8aedf9b6fbecb82bd7f356beeff80cb694095d53cfece103d84693166d4abf1c165c06e4d272ee6239af2c7b26d0e91f0d278dea5d12fb2a3496cedd3e22134973542d47b42013bc8cb75adfeff31fb99c71b869010000",
    ],
    [
      "ETag",
      "BCFlhp+Ea1dCv5jRYQhh/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff1dcfdb6e82300000d07fe9b318b989ec8d7aabe2824013c017825dd98001a52d836af6ef333b7f709ea020840a91cbbea11d7803aa30dc2559fafd069a53a9217f136da553fbf13999c9fbf8b8842172827b799bb33a3afee0e4d36fce41ca94c1981e7c14ba5be4c1ca9008b9c713c1c88ea72f39c0bac5774e3d43e8d8b26c8e7b55a99b6cbf8517a7be138a81b859a75bf50ae2316b351b1dd6181ada24c76bba9b87d33ae72aab07eb127ba57db8a64dd7f45b1893109768c7e3327cecf7a629924830365795d7171e58003ab38a539157af9969bbee02fc3773a9187d5d212d38e5e0f70fa507163705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-59-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fa34014fd2b64f6ab7d60a18526cdda54d4262d5d29d598cd860cc30547814166d035a6ff7d2f83753526fa8999b9e7dc73ee831772cfcb844c49ccb38706eae71f772226470414cdf0559e8797ac726e5598feb5ac8b9b1c202c9e663344f096256951e5d093a2a919c8e96edbcf6ad154b416a287897ab6db33c743d3356ddb759ca1833c0979bae2e53db26f95aae474303868f73321b21c68c5659f89e2ed7df0783ca86a71074cc9c147c901aac8c1d7a23f73c1a8e2a29cedb668a091504750509ea385ffcc243ef998bacf69d1cf10fcc81950c64453aad616a660a24c79d6d43a2b99be106df3dd816cbd95b7080d26f2a628a3921670642454d1483d57609c059bb5b1f4cf36c17a1e2e377eb45d5c78eb797fb159edd6fed6b8bef002cf5034ce41738d9971a26f3e5e503f01a978a9d5c3f6b9557e6dd0f2f3585a024a4be882d16438a6a63374e3349eb0d419d9713a843876e2894d47f190b91658490c14795a54b3688935dbd4b513378ec03169648ddd247226318da80b63668d86945a09d91f91a79a2b38e5b21292771d22d7c132f4a230d8f98b79e8e91252dae4eab433d616f0dea3c20211f4454dfb36ca052ab5ed5efaa117cc17e1f2caeb26bc828cb2e7ed03ce38a5b90444d31a9ba7a05e8b041b46fcf9da3b45b09ed8af435092e9ef17d2f6bc75f1aee56ff41007d8da55fa4bb661b0f4cfb59d03e28ae68d863c760752a1e55bac0d5defff201297b4cb422e775e7043baa70052a8a164df4f13c13af0edbf76587cc4e2eaa38c5478c7dd61b2156135743bc475b9afecf1d8364d976870ad3ec58ec7a343d7da1c6d4628a054af15758b8f8576628d7c036110c7efeb6eedff01af880f3078040000",
    ],
    [
      "ETag",
      "sGTQcp8htTfx44HYleeTmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8d92416f82401085ffcbf48a89264a91c4035aada468ad622f8d312b0c88855dbabbd418e37fef2cb5b6699bb4179819be59de7b7084e78cc7e0c2264b5f2a9487ab14f58329e6a8aa5c2bba95822b040b50b394c8c27e4cf8628077a3c9741c6c6641badb73afd72342455b2c18b8474832cc6305eed311382b90d6229157055fd79d05fa509ae1229cfbd35bea0b119b7eba0c02af1f0ce1645d1663a6d9bae6ffb1b63a59b0139b392628914768b49452ec30d2beb1a95851e6d850a292112aa8e1fa412a455532294483268d4eb7d1b29bad6eabd3e93a4ed321301711d399e0c42e17a40fb4d02c9f8b3db9049b0059976438a9afaf34cee2da8829fd6968b76b7d5f0192966439aeff0649ef96d167f8c0ce117ce758212aae2fd428b8f77e3b8e32fd3ceac60b873f08a529a90b12fa93e122f42633c3adcedefb078d6a260505a9d064d86ab69dceb5dd7c8f75204cd4f41e57cb0a2d8818fd1de34c839bb05ce1e90dc9eaaddc7b020000",
    ],
    [
      "ETag",
      "m6VfnSCeKFMNHLbPLgjwnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` != ? LIMIT 1",
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
      jobId: "grouparoo-job-60-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "10fe2bccfbb2494d801008891475594a36a694740969b54d53629c83ba034cb1e95455f9ef3ba0e9cba6b59f42ee9eb73bdb77e417cf776444229e5c5750debebd12113922a06882d570d6b307c16c76f6254a3fba83efaba8d055321e2382d72c49b322858e1455c9408ed6ab6e528aaaa0a5101d14ea3846c7740c7368daf6d0750d177912d278cef35fc8be54aa90235d3f78771321921468c1659789eca1aedff4f4a21457c094d49f5beae822f5974d8f53c1a8e2221faf5718a092506e20a33cc5088fcc5df4e1b97497d3ac9b20f88633a08c892a57752c9460228f7952958d2a19dd9126e6930fb2f2e6de34d4a68b7510bedbd2ac266fdf6b546a9b4d09b24a95365b2e4eb56d815e975482dc6a179fbda5879552c43c850ddf6db5b176ac4d82134d3b48686fead2dc3ff543cdc4243b908ae74d8e904629d419ee57e5ff7b4035812a746b9b9b81e150d33586511c0d58ec5a76141b10456e34b0a915196cd887fe2e028a3c55ab372c9a8b9c0d7bb0334ccb74ac816d1b2eb36c661abdd8a2ccb6a0df3323b0067da347f647e477c9159c705908c9db7d918ba51f7a9b70b90ea693d06bc68829eee4a40d570ff134a7c22111f4c25cfbbacb053ad5cbf783d05b4ea6a17feeb5e73d8784b2dbd5359e784c530988a625cd4041792a76b83472b658f9a1bf0826736434877876404832fa71f748086f8b66cbaaf9adbd9c7ee37f009cd3b46a1037ed0731c97e7ff47f85d97c31795da36b2362ff134178c55b05f275ed2dbf91b6b484184ac8d9eb3700c14de3d5977a783688c587833652e17fbc6f4cd626ac84f6def1ac49d8b21dc7754d8734e052",
      "fddd1b1a86755870ad512b4206b9ba9fa87d36f5be9a56251f40d8c4eb12f8c127ecfe01d3a0f506b6040000",
    ],
    [
      "ETag",
      "TF257NFFPJblB87ZSbp/tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cbf91512886e6124fbb029d1256473e862d42c4b29070381c3b66808d97ff7cafcd2bbbe7d7aef9b1be1ab6c3308212d8bef1ed57053a0d9db2641ddd74673e9a8d5080ea0110593957e88e2db728fbbddf9fd2df554ac3efad572c98496676c048423e425d69986f073845634c8df4e27354d64cc0c9d5536dbd7e8314a586828b3c2f610c7ab751cc1e57871a0a234c11c15b612edc84e5185d26c6c5a2d9aae465753af246a98e0e9a150d4774211b9acb873cff5e79ebff067b345107801833549614a6a993dbc00db1832a24ee897c382cf809a5ace9d4fe70fcb7736d0f11f5d0f06f5b322f6d5682dbdabfd3dd94886a31ad5a30352f0329e4a73bd5ffe00388e1c6569010000",
    ],
    [
      "ETag",
      "jsDEL3iQeOOhYWb0rLrZuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dcfdb7243400000d07fd9e7c80c426ddfac504ab1c8b8bc18645d1336a84b3afdf7667afee0fc80ac28c834a5f3d0911ebc833de3e0b1389a8384f895a47afd30bf8bb8ec067f4cea8af3ec419370d36a8ca914b296206d8581df9ef48a814c71e9e364c311ff4cb6884e3b6dfa60f39e1ff6a77c91b130e982aa64f4cbc9853d9cf337dd5df5e08e3d83c4669dab7c69065e0c2bc74d5d97edad9b40abb2b5cf9bb977736b858b139daf48bcfa481551c8df8ddeeab0c56279b1a0c8dd06e5b4b8297dd82272a59a630d700064a3cd48a6b479cd7801c203f86fa6f34ec9eb8a48369211fcfe01b38e90be05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-61-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6fa24014fd2b64f663ab62154113b335965613c52d62bb8f6cc8305ce8b4c85066e8ae69fcef7b196ad7a649fb8999b9e7dc73ee8367f2c0f3988c48c4d3c70acadd977b119153028aa6f87af5fdefed6c67f3ea647662d9d3d9cfeb38195e8fc788e0354bd26d91414b8aaa6420479b753b2d4555d0528816266a0dbaadeec0ec0ebb9635741cd3419e842c59f0fc01d9774a1572d4e91cb4dba9106906b4e0b2cdc4f6f5bdf374d6294a710f4cc9ce5bc90eaac8cec7a25f33c1a8e2221f6fd668a0925086b0a53c430bff997174fe36759bd36d3b45f0136740191355ae6a5b9882893ce16955eaac64f44cb4cda30359bb0b771a184c64d5360f73ba855323a68a866a578071e9af96c6dcbb5cf9cb49305f79e17a3a739793f674b5d82cbdb5713b737dd75034ca40738db171ae6f1e5e503f06a978aed583fab9567e69d0fcfd586a024a4b6882a16d0e68d731875112d92c717a56949810454e645bb417996cd8877e1c01459e16d52c9a8bfc2ceef6ad1e35437b60f5c2be99b0308ac00c19b57ba695f46cc736c9fe94fc29b9820b2e0b2179d32172ebcf03370cfc8d379d04ae2e21a155a62e1a637501c71e151688a00f6adad7512e50a96ef7dc0b5c7f320de6376e33e105a494edd68f38e3846612104d4b6c9e827229626c18f1264bf702c17a62df0e414946bf9e49ddf3dac551cb5fe9010eb0b6abf497ac037fee5d693b07c40dcd2a0d796a0ea440cb77581bbadeff46242e6993855c6f5cff07699e7c48a0849c7d3e4d04ebc0a7ffda61f1118bab8f3252e11d7787c95a8495d0ec10d7e5beb00783617f68130d2ed5bb98dd3b3b74adce5167842de4eaa5a266f1b1d046ac92af200ce2f83dddadfd3f28febf6878040000",
    ],
    [
      "ETag",
      "GXxWHy7iu+H+57CHZQdf9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92416f82401085ffcbf48a09344a91c40356ad266aade2a931668501d185a5bb4b8d31fef7ce526b9bb6497b8199e19be5bd0727d867450c3e6cb2f4a54279bc49513f99628eaae25ad1ad148542b000354b898cbd7efb167bbb70b89f38c8358ba783e0d0e910a1a22de60cfc132419f25881ff7c8282e5486b91e0555eacebce027d2ccd7011ce47d307ea73119b7eba1c8f83eeb80f67ebba1833cdd635ff8fb5d5d9829dd8cc3141894584464b29c50e233d323615cb4b8e0d252a19a1821aae1fa452542593423468d2709d86e3da4edb69b5da9e677b047211319d8982d8e582f481169af1b938904b70099075498693fafa4ae32cae8d9872340ddd66adef2b40d2928ce3fa6f90f46e197d860fec12c1778ee5a22af4951a8c1f83df8ea34c3f8fea0561ff07a134257545c2d1a4bf0883c9cc70ab8bf7ee51a39a4941412a34193a76d36bddb9f67bacf7c2444deff1b5acd08288d1df31cc34f809e30acf6f6a3a443b7b020000",
    ],
    [
      "ETag",
      "d8E92eDjTHkM1eltadNFAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-62-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffc553614fdb3010fd2b962704686d4310ed4aa58a759041a0b4a54d4068428d9b5c83218983eda021c47fdfd9a130c4c43eecc33ed5be7befdecbf3f591def222a13dbae0e95d05f2e1d38d58d00605cd52ac663ff561124e3e1f3bbb27b3f0e8302d0f07f159bf8f086e588ae565064d252a1983ea85b3562a45553229441307353bdb4db7b3e5eebaedf66eb7bbd5459e826c39e4c52db2afb52e55cf7156daad548834035672d58a45fe5277eeb79d528a1b88b572de4a3aa8a29c8f45f7321133cd45d10f6768a05220e790339ea1855766b2f8fa76748bb3bc9522f89ec7c0e258548536b670442c8a254f2b69a7d2de23b5367f3bd09937f4f603b23f0e47c146c472438e360953643e97a0aa4c93efd3f129894ad4ba660a54442e8ebca9871529963c83394f22d2277b64303a206438bef0a61b11d636c9d03ff1b03ef44ffd80b868278125c389074ce3206d6c24f5d1376fa44169043d07e8bf7f36fa64ba5c48ae8d757f1478d3c17ee09f7b755a434859fc30bbc3bc962c53806826590e1ae4a948002993f1cc0ffcf1683044868d60b24228dafbf1f84a081e4a3006b5fd355a9d1dabbf029cb3acb288fbfa405dfaf4d4f8a7096b6e7b0d875c2108d7a3e6d3b3d09b5ed2ba348525482862cbfa20270bb68dbf6ef96ae5108b4b87324ae35d691e2b23124bb0ed80e7f61b6b76e78bdb76b7a9054bfdbed7353d28923f769e352a3b1fa414726af7cc5c514d592fbcc050f09fdba03928c55233262cf04b14b04506c4be1d7989924411e10531519328b89c78731b77d420df58821dddd92136e51e3121afceebe6b26e1c591ff50afc270f57752c46e4603cf2700f7e012069ffeef3040000",
    ],
    [
      "ETag",
      "lxtGdUP+J/9KSUHGgpGAcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dcfc95283300000d07fc9b9edb059c01b010ba5b5828a2c178625102c4b086175fc773bbe3f783f20c932340c31ebeea805cf604d04f5901d2e9d02c5390f19363d95c3f0da56af7813cd3aea71ec6a3221f2d7ba6f1a660552b7bc4bb8be99653fbae96ceb13bfcef434979b975d718103df268a164fa95671d2a89cbcb4a6d492dbbd73f30cc3d8dc9a61c1b2fc339b8bd43e4a8b9e43c3a987306a9181dbb7961bbf591abdd890851f1799cfd35277f8465abdb8e0272e21de319892122ab6ff29340b090b39c3fdfd0c76002da4a26888abc74c7c52d51df86fc66c25e8718528a18882df3fa142044e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-63-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "6b4fa34014fd2b64f6a3b6807d004d9ab5a9a84d5aba4ba9ee66b321c370c151ca2033688ce97fdfcb605d8d897e6266ee39f79cfbe099dcf132251392f0fcbe81fae9dbad48c8310145737c7df4ac6dfdebe8c8b4bd0b6e3a17d9b830d78fd3292278cb92745715d093a2a919c8c976d3cf6bd154b416a287897ae341cf1e5bb6678f469eeb5a2ef22414d9929777c8be51aa9213d33c68f77321f20268c5659f89ddebbbf9706256b5b805a6a4f95ed24415697e2efabd108c2a2ecae97683061a09750c3bca0bb4f09f9926a7ef53f739ddf573043f70069431d194aab585299828339e37b5ce4a26cf44db7c73201b7fe9cf238389a2d995714977706ca454d1583d55609c87eb95b108ced7e16a162dd641bc995ffaab597fbe5e6e57c1c6b8bef443df50342940738da971aa6f015e503f05a978a9d5a3f6b9557e69d0e2e3585a024a4be882b1638da9ed5a5e92250ecbdcc128c92c4812377146749058cc1bc2304d80224f8b6a162d4539b0b2c41e3a699c5a2c8b87ae35883d7b3c884f60306227d4492c6f44f6c7e4b1e60aceb8ac84e45d87c875b888fc380ab7c17c16f9ba848c36853aeb8cb505bcf5a8b040047d52d3be8d72814a6dbb1741e487b379b4b8f2bb092f21a7ec69738f33ce682101d1b4c6e629a85722c5869160b6f2cf10ac27f6e3109464f2e799b43d6f5dbc69f92b3dc201b67695fe924d142e820b6de780b8a245a3210fdd815468f9066b43d7fbbf88c425edb2909f5b3ffc4dbaa71032a8a1645f4f13c13af0e5bf76587cc4e2eaa38c5478c7dd61b2156135743bc475b92fecb163bbb64334b8561f629e373e74adcdd166841d94eaa5a26ef1b1d04eac91af200ce2f803ddadfd3f9c3dfd8a78040000",
    ],
    [
      "ETag",
      "w90UrX++/19Gi/7Gf6l/Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92dd6e82401085df657a0b29a64a95c40b6cd59ae04f117bd318b3c2a058607177d11ae3bb77965adbb44dda1b9819be59ce39708497248fc08165b2da96280e572b548fbaf05196a992742b782e110c40c5564486e1b6318e584b46bda74215fdfc15af77fb769b0819ae3163e01c214e308d2438cf47c859867a8da765962faace007528f4701af883519ffa8c47ba1fcd3ccfed785d381997c58829b6a8f87faccd4f066cf8d2c71805e6216a2d85e01b0cd540db942c2b5234252f4588122ab87ab012bc2c98e0dca48969df9835dbaab56a8d46abd9b49a04a63c642ae139b1b329e903c5154b7dbe2797601320aa920cc7d57547e324aa8ce872300aec7aa5ef2b40d2e224c5c5df20e95d33fa0c1fd83982ef1ccb7899ab0bd5f3c6ee6fc751a69f47ddbb41f707211525754182c1b03b0ddce14473f3b3f7ce41a19c084e414ad419d6ac7ab3716b5befb1de711d35bdc751a2440342467fc743a2c089592af1f406f305a8837b020000",
    ],
    [
      "ETag",
      "ccq5Oda9sdFVptpGnxe/vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-64-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "a3",
      "40",
      "14",
      "7e",
      "15321b1337b12df4426993c6ad955dc922554a6d369b4d3b4c0f380a0c32831b63faee7b00eb2566f517c39cef726ef3486e79b6256312f2f8ae84e2e1cb8d08c911014563bc5d59a9f0acc5c9599c9526cd4ee6d3ebf4f672324104af5892a679022d29ca82811c2f17edb810654e0b215a28d432fb2dc3d48d9131188c2c4bb7902721895c9edd22fb5aa95c8e3b9dbd773b16224e80e65cb699489fef3bf7dd4e5e881b604a76de5a76d045763e363d4e04a38a8b6cb25c6002a584620d29e509a6f0c2dc86dfde4ab7394ddb3182ef3903ca98283355a585124c64118fcba25625e34752a7f9ea4016b66bcf026d365f7ac1e186a61579f355a3525baf0b9065a2b4effefc5cdbe4e8754d25c88db63ab37d1b6f0a11f104d67cbbd126dab136f54e35cd9daf6cfff0198d52aef3d3c6a8eb9c3b816660525b908a67754a010d13a8d279ea9af37e5615812a946a82eba16e52c3d24761140e5964f50661a443185ae170407ba1ce467de86f43a0c853957acda299c8ba605826a53d2bea7519b3869609d00513d95b93e9963ee81aba1e8e80ec8ec8df822b38e532179237ad232bdf09ec75e02fbdd934b0eb32228aed396d92ab8a789da7c22211f4415dbb2aca053a557370bcc0f6a7b3c0b9b29bd1bb1053f6b0b8c3e147349180685ad0141414e7628b4d2317f3851338736fea22a39ee7c51e21c9f8f7e30b2178c8eb2eabfa5b7999fdda7f0fb8a2495923ee9b0331c86e77f47f8545e03bde8f8f250e689e1fa0cc1f44e1b6370ae47269fbbf4873e543040564ecf30d40",
      "701df8f4d1ee5f1062f10da18d54f88ffbc66465c20a68f68ea775950ddb1cf674abda4c0417ea5dac3b32f70dae342a454821534f15352fa8ea571d2ae5330883b82e5edda9dd3f0469fc7ac1040000",
    ],
    [
      "ETag",
      "W8moN8SBHgnu6anBOAhmkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90d14ec2401045ff657ca5095521858487d654252144ab244643c8d24e6b71db29bb53b021fd77678b2f3bb377cfcebd990bfc94750673d897c5b145d3dd14c8afae49d0b69aad94866a8b30026455087924fbf11bddedcffa34fb2c423f0b0f8f3a5c2c84b0e937560ae617c84bd49985f9d7056a55a17cdbedcc305130ee1aa72cd7eff1539c885051e684f566b50aa3550cfdb61fc181f609e668b04ed18d6c0c1d30e5a54b6b55d568f42cb526450b033c3c1486da4619224f146f7aeff9d3b13ff3279359108c030135a58a4baa85ddbc81d830b1d2099d252cf80298a195dcf9709e44be7581b6ff68d431da1743e26bd1598eaff60fe422b14465d3e2085225cb782ef97aefff003f5a14bf69010000",
    ],
    [
      "ETag",
      "qosXxB3bwlv9ZgA1dAjFlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff1dcfc97282300000d07fc9599c60587b03a99545dba294e592618985802682b275faef65fa036fe6fd8034cf49d7e107abc90dbc8029dde8eb7ced32cd44c3a5164fa2cab2273c4436ffb63fa072f584ce35b7e7bbcc6bc632ca4b0dcd924b61bb434d28bfeb63f466663121c63169e0a9505e7de3807a7f9fc4936cccdb4d62797d21f947815d0b4d8742fdb5b0109b7b3a5a9242eb14ef28b5db29506904556e85dd880aee32b1c4f0deb3ea669d69c367af7405bf70d268fc6c5cc70ea4e23988911dc67840ade9389700ac001979d5920e57cb0cc9babe02ff4dfc983859ae26495bd282df3f8496ec1a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-65-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d12d2104222456b94d23552425620eda66942c65ca85bc0049b565595ffbe8b69ba7693da276cdf73ee39f7836772cfcb84cc48ccb37d03f5d3973b119313028a66f85aff60e00f27e6f406827de1a5fbd029d3abf91c11bc65495a5439f4a4686a0672b60bfa592d9a8ad642f43051cf1ef786b6399c0ec7e3a9e3980ef224e4e99a97f7c8be55aa92b3c1e0a8ddcf84c872a015977d268ad7f7c1c3e9a0aac51d302507ef2507a822071f8b7ecd05a38a8b72be0bd04023a18ea0a03c470b7f99497cf63e759fd3a29f21f88133a08c89a654ad2d4cc14499f2aca97556327b26dae69b0309dcb5bb0c0d26f2a628a3921670622454d1483d55605cf8db8db1f22eb6fe6611aeb65e142c2fddcda2bfdcae771b2f306e2e5ddf35148d73d05c636e9ce99b8717d44f402a5e6af5b07d6e955f1ab4fa7f2c2d01a52574c16862da74e898d3388d272c7546e33835218e9d7832a6a3d864530bac24068a3c2daa59b414a5655136a56c120d699c44d6a90d11b5c6a3e834714cea8cc11ea636399c90c79a2b38e7b21292771d2237fe2a74a3d0df79cb45e8ea1252dae4eabc33d616f0d6a3c20211f4414d8736ca052ab5ed5e79a1eb2f96e1eadaed26bc868cb2a7608f334e692e01d1b4c6e629a83722c186116fb171cf11ac27f6fd189464f6eb99b43d6f5dbc69f92b3dc401b67695fe9220f457de376de788b8a679a3210fdd815468f9166b43d787df88c425edb290ab9debff24dd930f29d450b2cfa789601df8f45f3b2e3e6271f551462abce3ee30d98ab01aba1de2badc17b63d193913936870adfe8d59a6631fbbd6e668334201a57aa9a85b7c2cb4136be42b0883387e4f77ebf0072496e8a078040000",
    ],
    [
      "ETag",
      "rXceR1709WeSqmNfqT8nfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd4e83401085df65bca509244229492f5aad4a42e91fd50bd3345b185a2ab0b8bbd8d4a6efee2cd66ad4446f6066f86639e7c0019eb232010f56d9fab946b1bf58a39ae8628ab2ce95a45bc54b8960002ab6267266df87c391edfbe1a6ed44afbb324e1e70d2ed1221e30d160cbc03a419e68904eff100252b90d6629ed745b96c3a03d4bed2c35934f5c35bea0b9ee83e9c0741af1f0ce0689c1713a6d8b2e1ffb1b6381ab0e5ab29a628b08c516ba904df62ac7c6d53b2a2cab125792d6294d0c0cd83b5e075c504e72d9ab41cbb6539a6d5b16cbbe3baa64b60ce63a6325e123b9f913e505cb17cca77e4121c02445392e1b4b9bed0384b1a23baf4c3c8b96cf47d05485a9ae5b8fc1b24bd1b469fe1033b45f09d6305af4b75a66e8251efb7e328d3cfa3ae7bd1e0072115257546227f389845bde158738b93f7fe5ea11c0b4e414ad4195ae6a56bb71df33dd62baea3a6f7784ad46840cce8efb8cb147829cb251edf00a353ee877b020000",
    ],
    [
      "ETag",
      "S5VNMO5IINh76TzwncdWeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-66-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "9b",
      "40",
      "18",
      "ff",
      "2a",
      "e4",
      "16",
      "1397d8165aa1b449e39a964db2da2aa59a6559dae3fa80a7c02177b818d3efbe87c3fa1233fd8be39edfcbf3768fe496e75b3224114fee2a281fbedc88881c115034c15bbfabae4f69b0a2f6f4fc989e46f2e2d211c96884085eb324cd8a145a52542503395c2ddb4929aa829642b450a8e5382dcb31ad8165db03d7355de44948e319cf6f917dad5421879dcedebb9d0891a4400b2edb4c64cff79dfb6ea728c50d30253b6f2d3be8223b1f9b9ea48251c5453e5a2d31814a42b9868cf2145378616ea36f6fa5db9c66ed04c1f79c01654c54b9aad3420926f2982755a955c9f091e8345f1dc8d29b7993d0982c56f3f07043b39abcf96a5069acd725c82a55c6f76071666c0af4baa612e4c6b83af5020f6f4a11f314d67cbb3146c689319e4f0d63b6b8f282c367344acdfc9f1e4667fe991f1a1626b505a978ae530a6994429dce53d7fcf7b3aa0954a154135cf74d875aae3988e2a8cf62b76747b10951e4467d9bf622930d8ee1781b01459eaad5358be622ef82e53a94f6dcb8d765ccedbb0e40171c646f1d66baa6ddb54c331a00d91d91bf255730e5b2109237ad2357811f7aeb3058cd27e3d0d365c414db336d92ab8b789da7c22211f4415dbb3aca053ad573f0e7a1178c27a17fe935a39f4142d9c3f20e871fd35402a269493350509e892d368d9c2f967ee82fe6e31932f43ccff7084986bf1f5f08e143a1bbacf4b7f6728eb5ff1e7049d34a23ee9b03b1c86e77f47f856518",
      "f8f31f1f4b1cd0a23840993f88c26d6f14c8c5ca0b7e91e62a80184ac8d9e71b80601df8f4d1ee5f1062f10da18d54f88ffbc6646dc24a68f68e67baca86edf46dd331890697ea5dac6bf7f70dae356a45c820574f15352fa8ee970e55f21984415c97b9eed4ee1f2a2ad7eec1040000",
    ],
    [
      "ETag",
      "I2thHaRUa5DP4aHbsQV6og==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90dd4ec2401085df65bc9426ad49b19070218a8a69108a448d2164d94eff683b7577ab6948dfddd9e2cdceecd96fe79ccc194e791dc3148e79fadda2eaae52341bdb44a8dbd2682e0dd51a61046844ca641105e17b967dd6e943e1bf7c5cdfae5f4f8f9bd98c092d33ac044ccf90e458c61aa65f67a84585fced7050c344c64cd75865b97a5b3c2d22162a8aadb0da85e1dd3c5c40bfef4750d031c20415d612edc8465181d22c6d5a2daaa6444753ab246a18e0e12155d436421139ac38e3b1e38d5d6fe2f9fe2408dc80c192a43039d5cceeb6c036868c2823fae5b0e031a086967327c3f9c3f28d0db4ff47e79d41bd56c4be1aada57bb1bf271bc97054a35a1c8114bc8ce7dc5ceefd1fad42194169010000",
    ],
    [
      "ETag",
      "jR8LWhhYngDj5JX+7POkFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcf4b7282300000d0bb646d1c6854427740f88823966045d930298dc33f1488403bbd7b9dbe1bbc1fc0b28c0f433a8a8ab7e0152cec455f67eb83c0269aee599ea32f68b59bd31b82183fb02f1371ec60396b8624b14bbb8b179c4307953831e8542d69c4c989ccfa99b4871cf2e483c68126f7782c723b8bb90795f1625e67db71cdbb0c42ba6b8e0d3758258a8858c9f8597ac46dccb25690aaed14d98eb7dbc442b14f37d48fe8c21c632e452d54e23c60b5bd7ef76a92c9dcd32c9f054a8b858d6736f5b92feb77b0027cee8a9e0f69f19ca1adaeafc07f331d978e3faf26673defc1ef1fed6da1b805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-67-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "fbda2490072191a2354a691b29211b9056ed3421632ed42dc10c9b4c5195ffbe8b69ba5695da4fd8bee7dc73ee8367f2c48b844c49ccb33f3554876f8f2226670414cdf0b57f3fb439577b27ccae1677ece066c13d9dcf6688e00d4bd25d9943478aba6220a7dba09b55a22e692544071375ec71c7b24d6b628d4613c7311de449c8d3152f9e90fda05429a7bdde49bb9b0991e5404b2ebb4cec5edf7bfb7eafacc42330257bef257ba8227b9f8b7ecf05a38a8b62b60dd0402da18a6047798e16fe3393f8fc7dea2ea7bb6e86e03d6740191375a11a5b98828922e5595de9ac64fa4cb4cd370712b82b77111a4ce4f5ae880aba833323a18a46ea508271e96fd6c6d2bbdcf8eb79b8dc7851b0b876d7f3ee62b3daaebdc0b8bd767dd75034ce41738d9971ae6f1e5e503f01a978a1d5c3e6b9517e69d0f2e3581a024a4b6883d1d8b4a9e59893388dc72c7506a33835218e9d783ca283d86493210c931828f2b4a866d1421488742c870da3349d4034ec5ba3c8892771649b8e6559f660980c46e47846fe565cc10597a590bced10b9f597a11b85fed65bcc43579790d23a5717adb1a680b71e151688a04f6a3a36512e50a969f7d20b5d7fbe0897376e3be11564941d823f38e394e612104d2b6c9e826a2d126c18f1e66bf702c17a623f4e4149a6bf9e49d3f3c6c59b96bfd2431c606357e92f09427fe95d693b27c40dcd6b0dd9b70752a2e507ac0d5d1f7f231297b4cd427e6e5dff8eb44f3ea45041c1be9e26",
      "8275e0cb7fedb4f888c5d54719a9f08ebbc36423c22a687788eb725fd8f678644f4ca2c195fa1073fafd53d79a1c4d46d841a15e2a6a171f0b6dc56af90ac2208edfd3dd3afe03a22aab4978040000",
    ],
    [
      "ETag",
      "2Z46iitv8TgGCYcyEgSZaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92d16e82401045ff65fa0a09260591c407b5da9aa0b5884d93c69815064581a5bb4bd518ffbdb3d4daa66dd2bec0cc7066b9f7c211b669118307cb74f552a1385cad503de8224059654ad2ade485443000155b11696df7eebeb9f407b19d3c3dc6fb6573dcc35dbb4d848cd69833f08e90a498c512bce723142c475a8b7856e5c5a2ee0c5087520fa761301cdf529ff358f7e399ef77ba7e1f4ec66531668a2d6afe1f6bf393011bbe0c30418145845a4b29f8062335d43625cbcb0c4dc92b11a1841aae1fac04af4a26383769623a4db3e1588d56c3b65bae6bb904663c622ae505b1b329e903c515cb02be2397e01020ea920c27f5f595c6695c1bd1e5701c3ad7b5beaf00494bd20c177f83a477cde8337c60e708be732ce755a12ed4c0bfeffc761c65fa79d44d27ecff20a4a2a42e48381cf5a7616734d1dcfcecbd7b5028278253901275860debdab59b8ef51e6b8feba8e93d9e12151a1031fa3bee52055ec23289a737d907b2087b020000",
    ],
    [
      "ETag",
      "0kx8x7bLFd5fXVdxb7NCew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
        types: ["INT64", "TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T08:00:00.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "a3",
      "40",
      "10fd5736dc174d6c81466bcba5f1aa458f5c4b2b508d674cbbc2825b81c5ddc5a431feef37bbb47ade8fdee74b485866de7bf3766678311e6999188e714fb3a79af0f5a715bb370e0c227106d18be9da5fe5d71787f96a76eadd9c9b651f8fb2c1001054b1042eaa9cb404ab794c84330fdb1967758539632d106a757b2dbb6bd97dfbe8a8dfeb593de00992a7635a3e02fb41ca4a38a6b9adddce18cb72822b2ada312bdee2e673c7ac385b91580af3634913aa087377d1939cc55852560ee62118a805e10b52609a8385776672ffe5a3749be2a29d01f899c604c731ab4ba96c8144ccca946635d7aa86f362689b3f1d8cd01dbb67113a9bcefd686f890b455eee232cd062c189a87389ce83e9042d2ba8f58005114b74fdd50d5c887096d29c2c68b24403748286fe08a1f1f4da0df696428245d0197bdf5c488dbd8917211b1c2524c5203ac212b4a4729234474f8d49122101b4e9a1f7fbe48c5795a58c53a9dc7b7ee406c3b3c8bb729b868d4986e375f8042d4b712e08a031c70591844f584280329b865ee44dfde11818ba0bb32d4218ceedcb3b215a57441994faad6a750f75fd2de00ae7b5463c3707c3365e5f0ffeae107913378c8693d96e958ed5b15a56a7651f4556cfb12c78da96657d07f13b20c2e634bac6e5dc0d6e8c261490947052c65a6947ff345827fef9036cb711b0b08f5006862aa9903416aa48cc894e47b4d0776fd8dde36ecf3a343498cb5f73c7565f2d0129933f6636356aad4f38673cd02ba83ea19ad05e68098da2c9a55ee00f2e9f36a18208813325ef335460193fd0324382662568738252c6515a97b1a2350bab4398677541",
      "4a89d4b88483dec6d546615d558c4b92bcab00a0d9f5300a3cff62fff3e6f3f4267243f88124bab59d9e7da72ea5afd26cd7ff7b8dbb6638cacf68eabbb08d3f00edc2a82a94050000",
    ],
    [
      "ETag",
      "GOyNjlWG4ljPBIYF/n9aDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e82300000d07fe9b3310a88edde00dd64842ca096c10be9da0e2a965bcb185df6ef333b7f707e00a1942b55eaaee12d78020bb1d09aaea30efaf6fc7982c5815f5c9e62a4116bcb5e451d19365368681a8b6d4ee3105a67ad0b01617d81a34970aecdf5ac18f68fd21cb46418c1d67fb142e7fd2a1db3706685840e7e285e4ffe47c546c71b7410a9bb68e5a6264dbc4b6e12059597c56e81ed48965f25d541f5d6aac9736791511b4dfdf3b8efb70e7658dcdcd0d1dbe72631697e2736c273ad10cdadac012bc0bf7b3172558ac7ccde21b402ffcd522f3d7f5c7d4e463e82df3f60a02ead05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-69-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "fd2b64f6ab2d608bd026cdda545c495aba4ba9c66c3664182e384a196406778de97fdfcb607dc4443f3133f79c7bce7df044ee78959129497971df42f3f8ed56a4e48880a205be2a6a2f6e4cc731ad0056ecdfd24ad36b3a9fcd10c13b96a4bbba8481146dc3404eb79b61d188b6a68d10034c3438990cec13cb9ed88e33f13ccb439e84325ff2ea0ed9374ad5726a9a07ed6121445102adb91c32b17b79371f8ecdba11b7c09434df4b9aa822cdcf45bf978251c54535db6ed0402ba14960477989165e99597afa3ef590d3ddb040f003674019136da53a5b9882892ae745dbe8ac64fa44b4cd3707b2f197fe22369828db5d95547407474646154dd4630dc679b45e194178be8e56f3385887c96671e1afe6c3c57ab95d851be3eac28f7c43d1b404cd3566c6a9be857841fd0ca4e295568fbbe74ef9b941c1c7b174049496d00713d73aa1b6674dd23c7559ee8d9c34b7204dbdd475e828b5d8640ce32c058a3c2daa59b4129577ecd92387b989e7b85e329e784e32c9c634716cc87277e4d8e37146f647e46fc3159c71590bc9fb0e91ab2888fd248eb6e1621efbba849cb6a53aeb8d7505bcf5a8b040047d52d3be8b72814a5dbb8330f6a3f9220e2efd7ec24b28287bdcdce38c735a4a40346db0790a9a95c8b061249caffc3304eb89fd3c042599fe7e225dcff5f6bfb6fc851ee3003bbb4a7fc9268e82f087b673405cd2b2d59087fe406ab47c83b5a1ebfd1f44e292f659c8afad1f5d93fe29821c1aa8d8d7d344b00e7cf9af1d161fb1b8fa282315de717798ec445803fd0e715dee33fbc4754723876870",
      "a33ec470ca87ae7539ba8cb0834a3d57d42f3e16da8bb5f20584411c7fa8bbb5ff0f456f1a4378040000",
    ],
    [
      "ETag",
      "ta1Ch/55/0IeMcxL0bbYaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4e83401085df65bca5499bb408245e50adb5a63fb6a57a614cb385015160e8ee22699abebbb3a8d5a889dec0ccf0cd72ce813d3ca745041e6cd2645ba1dc9d24a8e7a658a0aa32adf85652a1102c402d1226efdced7248757dedd7ab957bdb9f55dbedbc3e3b6342858f980bf0f610a798450abcfb3d1422475e0b29abf262dd7416e85d6986cb60319a0eb9cf2932fd74351efbfdf1000ed67131125aac1bfe1f6b0f070b9e68b3c0182516211a2da5a4270cf5c8d854222f336c29aa64880a1ab8799048aa4a21895a3c69d96eab63b73b6ea7d7731da7ed30985128744a05b3ab25eb034d5a640baad925d80cc8a664c371737de1711a35464c399a0676b7d1f7156069719ae1fa6f90f53e0afe0c1fd87b04df39915355e82375399ef9bf1dc7997e1e75e107831f84d29cd411094693c132f02737867b78f7dedf6954379238488526c34ebbebf44eedf65bace764a2e6f7785a56684128f8efb84a3578b1c8141e5e01b91de3e17b020000",
    ],
    [
      "ETag",
      "W9qSGowwJAwUU9VBOuqqQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-70-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb3010fd2b56f605249a261d853653c50a64235b9b4292c20a42ad499cd4348983ed3021c47fdfd96961888d7ddea73877efbd7bbe3b3f1a2b5a268663dcd0ecae26fce1c32dbb31760c227106d1fe79987657abe5c96177b6f27fcca2c3cb6ffecfc1001054b1042eaa9cb404ab794c84330dcd8cb3bac29cb11608b5f6ad96bd67d97dbbdbedf77a560f7882e4e988962b602fa5ac84d36e6f6a9b1963594e70458519b3e239debeefb42bce6e492c45fb75c9365411edf78b1ee42cc692b272300dc1402d089f9302d31c2cbc30939bcfafa54d8a0b3303f03d8d098e63569752d90289989529cd6aae550de7d1d0367f3b18a13b728f22743499fad1d602178abcd84658a0f99c1351e7127d092663b4a8a0d6120b2216e8e2c40d5c887096d29ccc69b24003748086fe3142a3c9851b6c2d84048ba033f2bebb901a79632f4236384a488a41f4184bd092ca49d21c3d3526498404d0ba87dedbc9194f2a4b19a752b9f7fcc80d86479177ee360d1b910cc70fe11db42cc5b92080c61c1744123e660901cae924f4226fe20f47c0d05d38dd2084e15c3dbe10a2878a2883527f55adbd5d5d7f0338c779ad11f7cdc1b08da7a79dbf2b44ded80da3e1f8f47d958ed5b15a56a7657723bbe3d81f1d7bd7b42ceb12c4af81089bd3e81a67533798194d282029e1a48cb5d23bfdd3609df8e703d86c2360611fa10c0c555221692c549198139d8e68a1efdeb0f7f6fb9d5edfd0602edfe4763f2a6552267fccac6bd45a9f70ce78a05750fd4235a1bdd0121a459333bdc0af5cdead43051102674ade67a8c0325ed2324382662568738252c6515a97b1a2350bab43986775414a89d4b884839ec765a2b0ae2ac625495e5400d0ec7a18059eff75fbd3",
      "faf77016b9213c2089ae6ca7675fab4be9ab34dbf5ff5ee3ba198ef2733cf15dd8c65fb27e70a694050000",
    ],
    [
      "ETag",
      "9VSf5kkhHB5YkNXYTBZJNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff1dcf4b7282300000d0bb64ad0eff4f7704466843a91034850d9386c8d74a03228cd3bbd7e9bbc17b00ca181fc762ba76fc1bbc80952af68eedd0d582ea9d0fdd49caf0e4c8468de47e7d7b9d978cc0c4a0c81c16a42767c5195adf47db9ede48b6646c7b1f75b388c27acfcfb8ed45d49010d384f2f6bdf55d1299f0c7c92d4952b28b7f49ab1a953c70678b659652cef2809bbd718c0ffc2b3c9584c6ada2257985aa0fa479ec16c0d9c39a07d35572f331f55d5aa9cdcd543b68c7722305d83f2422fe64244c85d51dc106f06568041f8be6395375dbde80ff6631ad037f5e21a7820bf0fb073d1ad32a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-71-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553614fa34010fd2b64efab2da0b6d026cdd9543cc9b5f40ea8e6ee7221cb32e02a65915d6a8ce97fbf61b19ec6443fb1bbf366de9b37c313b9e35546a624e5c57d0bcde3975b919223028a16f8babb0cccdacfa2df27be3371c676bdfcbe481f663344f02e4bd26d5dc2408ab66120a79b685834a2ad6923c4000b0d1c7b608f2d7b628f4613d7b55ccc9350e64b5edd61f68d52b59c9ae6817b58085194406b2e874c6c5fdecdddb15937e2169892e65b4a1359a4f931e9d75230aab8a8669b0805b4129a04b6949728e17f66969ebd2d3de4743b2c10bce30c2863a2ad54270b4b3051e5bc681b5d954c9f8896f9ea40226fe92d628389b2dd564945b770646454d1443dd6605c84eb95e10717eb70358ffd7590448b4b6f351f2ed6cbcd2a888ceb4b2ff40c45d31274ae3133cef42dc00bf2672015af347bdc3d77cccf06f9efc7d22520b5843e9838d698daae3549f3d461b97b324a730bd2d44d9d113d492d363985d32c058a799a5467d14a542eda69233c613638c92975dcc465f62471b2318c539b8e9c6320fb23f2d07005e75cd642f2de21721dfab197c4e12658cc634fb790d3b654e7bdb0ae81d71a153688a00f7ada77512e90a9b3db0f622f9c2f62ffcaeb27bc8482b2c7e81e679cd35202a26983e62968562243c348305f79e708d613fb71084a32fdf3443acf3b15af2c7f498f71809d5ca5bf248a433ff8a6e51c1057b46c3564d71f488d926fb03754bdff8b485cd2be0af9b9f1c25fa47f0a2187062af6f93411ac039ffe6b87c5472cae3ed2488577dc1d263b12d640bf435cb7fb9c3dc63fdd72880637ea5dcc3db50eae7535ba8ab0854a3d77d42f3e36da93b5f20584411c7fa0dddaff03717fed0c78040000",
    ],
    [
      "ETag",
      "vHN/pIdSZ3I79761pLKCbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "65bc2db18dfc36e1a22a22092042b95043c8da4ea1d076caee5620847777b62a1a35d19b7666facdf69cd31e601d6721b8f01c2f3605cafdd902f5bd29c6a88a442bbee59429040b508b05938ff6f9436350bbb8a1757790ca9dbfddecd6db769b09152c3115e01e208a310915b84f07c8448abc165052a4d9bcec2cd0fbdc0c27feb837ec729f5268fae1b4dff72efb1d385aa7c55068312ff97faccd8e16ace8798c114acc02345a72492b0c74cfd85422cd13ac282a64800a4ab87cb09054e44212557852693815a76e3b2da7566b359b7693c18402a163ca989d4e581f68d22219d3965d429d0159966c382aaf2f3c8ec3d288297b43bf5e2df57d05585a142738ff1b64bd4bc19fe1037b8fe03b27522a327da26efa77de6fc771a69f475d7b7ee707a134277542fcdea033f1bdc1c870b377ef977b8d6a24898354683274ec6ab3d6a8db6fb15e91899adfe36a59a00581e0bfe336d6e0462251787c05b70e6bcc7b020000",
    ],
    [
      "ETag",
      "Z0/Y7M53FokGMmrxTwqxkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-72-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3010fe2b9627c426b50d45d042a58a75348888d074690a42136adce41a0c491c6c070d21fefbce0ee5456cf0719f62fbee79f1e3cb03bde1654a0774c9b3db1ae4fd976bb1a42d0a9a6578cac7e5489ef4a7ceeca898175b6eef78bfff7b341c62073728c58a2a87b612b54c400de6b34e26455d3129441b89dafded76b7b7d5ddefeeeeeeefed6ded214e41bef2797983e82bad2b35709cb576271322cb81555c7512513c9f3b77db4e25c535245a396f251d5451cec7a207b94898e6a21cce6768a056201750309ea3851764bafcfe96bac359d1c9b0f98e27c09244d4a536b6902211e58a67b5b4ac74f040adcd570b3a737df7302287c17c127d8d5961c0f137c214592c24a83ad7e4280c4e495ca1d61553a062727eec862e9e48b1e2392c781a93213920a3c998103f3877c35744be77e262cdf74ebd8874d1520a2b86ac63a6914c1b2b69b3f4cc3b69501a9b9e42f4de3f1d7d34552e24d7c6be3789dc70741879676e93980f194bee67b798d98ae50ab09b49568006792a5240c834987991174c463e226c0cd37587a2835f0f2f80e8be026350dbafd1eaed58fd75c319cb6bdb71d72c68973e3eb6fecd70e407a34f3936ba9ddd9d0d24bac4361c938683fe9cbbe1056d8e4258818432b1b80fb2b2cdb6f0e9b4af470f7b71f8504669dc2bcd1365441209b61cf1c2deb341f710dbdda6b659eaf7b59dbef943cbf4af95278ddaf28394428676decc16d594f5c24b8c05ffe0162d402996199a79893751c0963910fb7ee4394c12c78497c4c44de2e862ea2e9e228f5be4074b492a6a83b2510f4893f47ab7d96c378d316ba79986ff6be5b209c9688d83898b53f107ca0328bb09050000",
    ],
    [
      "ETag",
      "iDnArK7P/SFmUm0E6H97xA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcf4b7282300000d0bb642dce10c426dd09586a6955c408b2c9441ac257307c24767af73a7d37783f802509ef3ada3725bf8257a018c4f364ee35c832ee69138bcc4351b449dcae3c64ae6d5aa7755d35260ade145915b58e9c895ed2821e547213de63802e39574ea6672dfdba2e762411e50e89026bd310be9b720befd4e039838eb0a36024f0130ec74b336a5b9b1356992feebe9ca44c31f24915ea0ba2a658dc56d53e7a947db6194e8135d6676fadb1ccf4aa0f5ef761ec848a18385f2e7dc8483495c631f2f36f0166804f6d2e7947f3e7cc30319e81ff26ed55cb9f578b33c925f8fd031d5c168a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-73-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b4fdb3014fd2b91f771f445d226ad548daa0da3a24d599ac2d034458e7b130c691c6207c450fffbae1dca4048ec536cdf73ee39f7916772c78b2d19918467f735544f5f6e45428e08289ae1eb62713efbcaafcbe0cafba3ece1e0e7f9e662f0381e23826b96a4bb3287961475c5408e36eb765689baa495102d4cd472ed566fd0ed0d7bfdfed0f3ba1ef224e4e9821777c8be51aa94a34ee7a0ddce84c872a025976d2676afef9d87e34e59895b604a76de4b765045763e17fd960b461517c578b34603b5842a861de5395af8c7dc2627ef53b739ddb533043f7006943151174adbc2144c1429cfeaca6425a367626cbe3990b5bff0a791c5445eef8ab8a03b38b2b654d1583d95609d86aba5350f4e57e17212cd5741bc9e9ef9cb497bba5a6c96c1daba3af343df5234c9c170adb175626e015e507f0b52f1c2a847fa592bbf3468fe712c9a80d2129a60ec7607b4e77587499ab82cf5ec7e92762149bcc4ed533be9b2a103ce36018a3c236a58b41045dfd151eac67408103b896dc794d9101fbb9eeb824d1dcc44f647e4b1e20a665c9642f2a643e42a9c477e1c859b603a897c53424aeb5ccd1a63ba80b71e151688a04f6adaeb2817a8a4db3d0f223f9c4ca3f9a5df4c780119654feb7b9c714a730988a615364f41b5145b6c1809264b7f866033b18b435092d1af67a27bae5dbc69f92b3dc2016abbca7cc93a0ae7c17763e780b8a4796d200fcd819468f9066b43d7fbdf88c4256db2901f1b3fbc26cd5308295450b0ff4f13c126f0df7fedb0f888c5d54719a9f08ebbc3a4166115343bc44db92fec81d73b76fac4802bf521e6388343d7740e9d117650a8978a9ac5c7421bb15abe823088e30f4cb7f67f010604240f78040000",
    ],
    [
      "ETag",
      "LLKD+iYpNW8zt396XKUP6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2401085df65bc2d4989fc94265e00a29200625b121343c8d24e4ba1edd4ddad8610deddd98a68d4446fda99e937db734e7b805d5a44e0c23a4d9e2b94fb8b04f583293c5455a615df4a2a148205a845c2e46eeb4cfdf2516caab5dd4e231aee63f292ab2b2654b8c15c807b8038c52c52e03e1da01039f25a48599517abbab340ef4b33f4036f3cbbe53ea7c8f4b3c564d21f4c4670b4ce8b91d06255f3ff585b1e2dd8d2dac3182516211a2da5a42d867a6c6c2a919719361455324405355c3f482455a590440d9e34ba978d66c76ef69aed76cf716c87c18c42a1532a985df8ac0f34699179f4ca2ea1c380ac4b361cd7d7171ea7516dc494e359d069d5fabe022c2d4e335cfd0db2de8de0cff0819d22f8ce899caa429fa99bc97dffb7e338d3cfa3aefbc1e807a13427754682f174e407fde9dc70cb93f7c15ea39a4be220159a0c9b76cb69773bf67bac433251f37b5c2d2bb42014fc77dca51adc58640a8f6fe43838fe7b020000",
    ],
    [
      "ETag",
      "kj8MSpXahub05idoCyfoRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-74-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d4fdb3014fd2b96270448fdca684ba954b18e6623a234b4494168428d9bdc06431217db414388ffbe6b87c210137bd8c39e62fb9e73cff1f1cd23bde54542fb74c9d3bb12e4c3a71bb1a4350a9aa5781ae43c181d4f13f04e6e83e1f760dafeb9bf371d0c10c10d4bb17c9d415d8952c6a0faf3a0914a51ae9914a28e8deafbedbad36d39074ea773d0ebb57ac85390adc6bcb845f6b5d66bd56f3637da8d54883403b6e6aa118bfce5bc79ffb9b996e20662ad9a6f259ba8a29a1f8b1e6622669a8b62300fd040a9402e20673c430bafcc64f9e56deb0667792345f03d8f81c5b1280b6d6c618b58142b9e96d276a5fd476a6dfeb6a0813b768f4272e4cf27e14ec472438e76095364b190a0ca4c936f33ff94446bd4ba660a54442e8edd998b2752ac78060b9e4464400ec970322264ec5fb8b39d08cf76c9c40fc9d83b71b136f64ebd903868298115c3ae23a6b1993656926ae99977d2a034829e43f4de3f1d7d32552e24d7c6be3709ddd9f028f4cedd2ab131a42c7e08ee30b315cb14209a49968306792a1240ca991f78a1e74f866364d818ce360845fb3f1e5f09e1c31a8c416dbf46abdbb6fa1bc039cb4a8bb8af16d4a14f4fb57feab0e574b6b0c9158270442a3e9dceddd925ad8e66b00209456c591fe464c1b6f0d749df8c1d6271f0504669dc2bcd6365446209b61cf2dcdeb162777b7badd601b560a9dfd51ca76bfece22f963e559a3b4fd414a216776d6cc16d594f5c20b0c05ffde1acd4129969a36f3026fa2802d3320f6edc84b94248a082f88899a44e1e599bbb0714735f2952558d1dd36b129f7890979b3de369b6de3c8faa846e03f79b8aa623122237fe2e21cfc02ad4d8c2cf7040000",
    ],
    [
      "ETag",
      "SmiSDHQdeIKkSAGSQ4x73Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e",
      "82",
      "30",
      "0000d07fe9b3318251dabd8143c12a1a2e0e79694a295085420a0c70d9bfcfecfcc1f9019431de75a46f9e5c820f30531d2dd91237d05a8f79138dca1a59693337d42f41a68841073f867808b712cfb12d442721ca3563e31ca6d35af9f26a167e696363d6699e8af8beab321204421f8ceea2af1e5add500457110d3fb350ce2ce2614b34131dda57dfa8d42b7059672ef64fb77407437e2cddeb39e96ec683961e9adc7d6a8bfb581deb7df1323d329d932aade45735b16f089d20769e396fe6446e31030bc0a75628de11f19ead37082dc07f93f473cbdf578b53c515f8fd03186ea29205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-75-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "fd2bc8fbda24e4414222456b94d0052d211b9056d53421632ed42dc1149b565595ffbe8b69ba5695da4fd8bee7dc73ee836772c78b84cc48ccb3fb1aaaa76fb72226670414cdf035dc862b919b3fd7d6ed62e3413a7683f575369f2382372c490f650e1d29ea8a819ced836e5689baa495101d4cd499589dfed8ec4ffb9635b56dd3469e843cddf0e20ed9374a9572d6eb9db4bb9910590eb4e4b2cbc4e1f5bdf730e89595b805a664efbd640f5564ef73d1efb960547151ccf7011aa82554111c28cfd1c27f66129fbf4fdde5f4d0cd10fcc01950c6445da8c616a660a2487956573a2b993d136df3cd8104cec659860613797d28a2821ee0cc48a8a2917a2ac1b8f0775bc3f52e76fe7611ba3b2f0a966b67bbe82e779bfdd60b8cabb5e33b86a2710e9a6bcc8d737df3f082fa0948c50bad1e36cf8df24b83dc8f636908282da10d4613734cfbb6398dd378c2527b68c5a909716cc7138b0e63934d47304a62a0c8d3a29a450b51b00133d3d170100de860188d58d28f6280241a4e2d9b523619a5239b1ccfc863c515acb82c85e46d87c895ef864e14fa7b6fb9081d5d424aeb5cad5a634d016f3d2a2c10419fd4746ca25ca052d36ed70b1d7fb10cdd4ba79df00632ca9e827b9c714a730988a615364f41b51509368c788badb342b09ed8af535092d99f67d2f4bc71f1a6e5aff41007d8d855fa4b82d077bd1fdace097149f35a431eda0329d1f20dd686ae8f7f11894bda6621bff78e7f4dda271f52a8a0605f4f13c13af0e5bf765a7cc4e2eaa38c5478c7dd61b2116115b43bc475b92fecb13d1c8e4ca2c195fa10",
      "b3fa8353d79a1c4d463840a15e2a6a171f0b6dc56af90ac2208edfd3dd3afe03a915e7e378040000",
    ],
    [
      "ETag",
      "TMTDol0KH5jALNef6ISHYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cbe963b8c94a44363f6859b9a91992ad35e76e70400c3874efa5e69cffbd73c9ac555b7d81730ecfb9bcef0b5b784a8b083c784c93e70ae5e628417d630a1f559569c5b7920a8560016a91303968db4ee7fe787d324fe77432973777e4fa49b7cb840a57980bf0b610a798450abc872d1422475e0b29abf262597716e84d6986b3c01f4e2eb9cf2932fde47634eaf54703d85987c54868b1acf97fac2d7616ace9d1c7182516211a2da5a435867a686c2a919719361455324405355c3f482455a590440d9e34daad86ed34ed8edd6a755cb7e932985128744a05b3b733d6079ab4c87c7a6597e03020eb920dc7f5f585c769541b31e5701238a7b5beaf004b8bd30c977f83ac7725f8337c60fb08be7322a7aad007ea6274ddfbed38cef4f3a8f35e30f84128cd491d9060381ecc82de786ab8c5de7b7fa3514d2571900a4d8676f3d46db59de67bac6764a2e6f7785a56684128f8efb84a3578b1c814eede0054265eeb7b020000",
    ],
    [
      "ETag",
      "E7169Y+j3ViVo3VrQWo8Rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-76-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536d4fa34010fe2b642f265e625b6a814293c66b2ae7e121f528d55c2e9776d92eb81658dc5d346afadf6f00eb4bcce927969de7656676e6116d58b1462314b3f4a6a2e2fecb358fd101a20aa7707b3a98dce4ce957ee21ca69bbbd38707191a9bc9780c0856b324cecb8c7624af04a172b4987753c1ab120bce3b20d4195a9dbea5f79dbe693ab6addbc093344b7c566c807da5542947bddecebb9b729e6614974c7609cf9fef7bb787bd52f06b4a94ecbdb5ec818bec7d6c7a94718215e3c5783187042a49c592e6986590c20b731d7f7b2bdd6538efa600be658462427855a83a2d9020bc48585a8946158d1e5193e6ab039abbbe3b8db4e96c1144fb2b9cd7e4d5570d4b6db914545699d2be87b3336d5582d7159654aeb4cb1f6ee8c28de009cbe892ad57da583bd226c1b1a6f9b34b37dc7f468354308b34dffbe902c2f7cebc48eb43626b2a152b9ab4221c67b44ee9a973defbf7aa0958815c1b5c0e750bf76ddd89937848127b60c6894ee3d88e87261ec43a710c6aac638a81a76af586850b5e0c6c23b1136c39b16198c418ea8e8e13eae803676899a685c980243a28a0ed01ba134cd163264b2e59db3e74197a91bb8cc245309d446e534682a145c76d727511aff3545024803ea86b5b471907a7fa2dbc2072c3c934f22edcf6f97d9a62723fbf810148702629a0b1c03955549cf135340d9dcfe65ee4cd82890f8ce64dcf770889467f1e5f08d17dd9745935dfdacb321aff1de002675583b86d0fa88fb6db83ff2bcca3d00b4e3e96d8e302177ba0f3176030f2ad04fab570c3dfa8bd0a6942052dc8e72300e026f0e9e6eed608b0b048602315fcc3c011599b1041dbc163795366cbb66cc368f75e61a1dec54cdbda75b8d6a815694e0bf55451bb4675c39a50259f41108479099a566dff01bc648b29c6040000",
    ],
    [
      "ETag",
      "J3Aqm9h0G92gkwJzzsR4kA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff2d90416f83300c85ff8b770509a4b6a3483dd0096d68a8ed587b9aaa2a0d86d1016649d88410ff7d0edd25765ebef83d7984afaacd21846b557ef7a8868712cd9b6d32d47d6d34978e5a8de0001a5132e9bd8a1c17d81d875c1e8260bff7933a8a361b26b4fcc44640384251619d6b083f46684583fced7251f344c6ccd05925d91de3e73863a1a1dc0abb539a46db3486e93c3970a36b86052a6c25da919da21b4a93d8b45a345d8daea65e49d430c3f343a9a8ef84227259711f57aebff2fcb5bf5cae83c00b18ac490a5351cbece91dd8c690117546bf1c167c06d4dc72ee623e7f585ed840e77f743b18d40745ecabd15a7a77fb27b2910c4735aa4707a4e065bc54e67e9ffe00bd4de0f169010000",
    ],
    [
      "ETag",
      "0Kade4epTydcP88OO1IlAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "52",
      "83300000d07fc9b9ed5056e38dc552818085c68217064244ca4e4016c77fb7e3fb83f70312422863f1d896b401cf604d78782007bb7dd284995c12c5874de215c1319763dc23e553e596d8893223ac732e25f83cf9ac34aaee8337eeb08f5c49783de5c179b24424a46871eeb5ec2e9632b7b6ac0ac8b54bee9d8ad55eaa6638d90eeef2ade14f5fdd10ecb1b679925145668f90a41fb3521dd0dbd52a74cdb9f6b3e0bf8cc594c7616df226ab9178c1d9b2def0a46426e719bab898dfd89979e66ce2ad0dd38d801da04b570c94c5c563264810eec07f331ed78e3eae1a4d063a80df3fd2ddce7705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-77-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbb8269034092452b466295db225a423a4dd431332e642dd124cb149d555f9efbb98a66b55a9fd84ed7bce3de73e7820373c8fc988443cbdada0bcff702d22724440d1145fff7e1c80372bbe655f7f885fe79fad892f17b3bbf11811bc6649ba2d32684951950ce468b36ea7a5a80a5a0ad1c2442ddb6e75065667d8e9f7878e6339c89390250b9edf20fb4aa9428e4cf3a0dd4e854833a005976d26b64fefe6ae6b16a5b806a6a4f952d2441569be2dfa29138c2a2ef2f1668d062a0965085bca33b4f09f1947272f53b739ddb65304ef3803ca98a87255dbc2144ce4094fab526725a307a26d3e3b90b5bb70a781c144566df330a75b383262aa68a8ee0b30cefcd5d2987b672b7f3909e62b2f5c4f67ee72d29eae169ba5b7362e67aeef1a8a461968ae31364ef4cdc30beac72015cfb57a503fd7ca8f0d9abf1e4b4d4069094d30b4ad01ed38d6304a229b25ce713f4a2c882227b2fbf438b2d8b007bd38028a3c2daa59341779c7ea0e868c76c39ed38dc35e2fb643da4d92d089a0d34d20b6ed614cf647e4aee40a4eb92c84e44d87c8a53f0fdc30f037de7412b8ba848456993a6d8cd5053cf7a8b04004bd51d3be8e72814a75bbe75ee0fa936930bf709b092f20a5ec7e7d8b334e682601d1b4c4e629289722c686116fb2744f11ac27767e084a32fafd40ea9ed72e9eb5fc891ee0006bbb4a7fc93af0e7de176de780b8a059a521bbe6400ab47c85b5a1ebfd1f44e2923659c8f78debff24cd930f099490b3f7a789601d78f75f3b2c3e6271f551462abce3ee30598bb0129a1de2badc47f6c0e95bc703a2c1a57a15ebf6ad43d7ea1c7546d842ae1e2b6a161f0b6dc42af904c2208edfd3dddaff036374938878040000",
    ],
    [
      "ETag",
      "z+6eNHpKlJXoZPB0ARsLHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92416f82401085ffcbf45848245154120fd8da6aaad6221e4c63cc0a036281a5bb8bc418ff7b67a9b54ddba4bdc0ccf0cdf2de8323bc2479080e6c92f8b54471b88a513de9c24359a64ad2ade0b9443000158b890c875577e93f2ca2a4bbb9cee5be6a2d0b51f57a44c8608b1903e70851826928c1793e42ce32a4b580a76596afebce007528f470ee7ba3e93df5190f753f5d8cc76e7f3c809371590c9962eb9affc7daea64c08e6f3c8c50601ea0d65208bec3408db44dc9b2224553f2520428a186eb07b1e065c104e7264dcc76dbb4ec86d5b55aad6ea7d3e81098f280a984e7c42ee6a40f14572cf578452ec12640d425198eeaeb9ec649581bd1e568eadbcd5adf5780a445498aebbf41d2bb65f4193eb07304df3996f1325717ea6efce8fe761c65fa79d4adeb0f7e1052515217c41f4d0673df9dcc34b73a7bef1f14ca99e014a4449da1d568765a6dbbf11eeb0dd751d37b1c254a342060f4770c13054ec45289a737c8a8c7037b020000",
    ],
    [
      "ETag",
      "dHw9YTKUfi9b+nsvw5Yprw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-78-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "6f9b3010ff2ac853a54eca8334402052d54529ddd828690969b54d53621c43dd02a6b649d555f9ee3ba0e943d5dabf30bedfe3ee7cf7806e58b1466314b3f4b6a2e2fed3358f5107518553b83da90cebd7019e7e1fdab7f6da3fff6b9f389bbbc34340b09a25715e66b42b79250895e3c5bc970a5e955870de05a1eec8ee0e2c7de00c4cd3b16ddd069ea459e2b3e206d8574a9572dcefefbc7b29e7694671c9648ff0fce9bebf39e897825f53a264ffb5651f5c64ff7dd3a38c13ac182f0e177348a092542c698e5906293c33d7f197d7d23d86f35e0ae00d231413c2ab42d5698104e145c2d24a34aa68fc809a345f1cd0dcf5dd69a44d678b20da5fe1bc26af3e6b586acba5a0b2ca947612ce4eb555095e575852b9d22ebfb9a10b3782272ca34bb65e6987da9136098e35cd9f5dbae1fe131aa48259a4f9de0f1710be77ea45da00125b53a958d1a415e138a3754a8f9df3debe574dc00ae4dae072a45b7860eb4e9cc42392d843334e741ac7763c32f130d6896350631d530c3c55ab372c5cf062681b899d60cb890dc324c64877749c50471f3a23cb342d4c8624d141016d3be84e30458f992cb9646dfbd065e845ee320a17c17412b94d190986161db7c9d545bccc534191007aa7ae6d1d651c9ceab7f082c80d27d3c8bb70dbe7f7698ac9fdfc160620c199a480c602e7545171cad7d03474369b7b91370b263e309a373ddb21241aff7e782644f765d365d57c6b2fcb68fc77800b9c550d62d31ed0006db79dff2bcca3d00bbebe2fb1c7052ef640e70fc060e45b0974be70c39fa8bd0a6942052dc8c72300e026f0e1e6eed608b0b048602315fcc3c011599b1041dbc163795366cbb66ceb6060a2062cd49b9801ddea3caf4fad48735aa8c78ada35aa1bd6",
      "842af9048220cc4bd0b46afb0f6585ec17c6040000",
    ],
    [
      "ETag",
      "Fu46Z2aCJ38q8dLQz8F9vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff2d90416f82401085ffcbf42a09a4b5028987da106b424c45eda5316685816281a1bb83d610fe7b67b1979dd9b7dfce7b991ebecb2683104e65f1d3a1be3d14c81bdb2468ba8a8d94961a833001645508e99ae507bbc5e32cdb45c136c38bdbfc5e37f3b91026fdc25a41d8435e629519083f7b68548df2ed78d4e344c1f8d65a65b5de45cb2811a1a6cc0aeb7d1cbf2ce20886c33081339d12cc516393a21dd96a3a63ca2b9bd6a8baadd031d4e9140d8cf0f85068ea5aa5891c519c99ef78cfae1778d369e0fbae2f6045a9e2921a61f75b101b2656554257090b9e007a6c25773e9e17919f6ca0c33fbab8319a774de26bd05aba77fb57b29158a2b2ee7002a99265bc957cbf0f7f527b113169010000",
    ],
    [
      "ETag",
      "0sGVt0g37dTE9Sdev0nxwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dcfdb4e83300000d07fe9f358540a11df60806940d98031e0a529a5dcafe53666fc7717cf1f9c1f402865d384e7be661df8003b79538ef468f5ef9ab8b12a565bbad2cf64c401d9786a7ad5b222e1f6225c2b4826d871d9a1de8c608c4d16e0328264c8b7dce7d71ca2d436cf81d1393a8bda56ba8bc9602999d76ddcbde062d5ea24b5467eda9923913b3255b5724e622315bd11a7beebd7cd6ed8995e84263cf3354342291356be7eab7a57502fbaec7b33dbe22d254d834833868f0566a538f6e8cb9d172c872a3800761f4ace265c3e67a2a42807f0dfc4f33eb0e7556384330e7eff00f7036d9005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-79-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "535d6f9b3014fd2bc87b6d12923409448ad628a52b52425620ada66942c65ca85bc0149bb45595ffbe8b69ba7693ba276cdf73ee39f7831772cfcb84cc49ccb38706eae72f772226270414cdf015dc8c1677ac90f0603fed83a7c71d5c5e658b052278cb92b4a872e849d1d40ce47c17f4b35a3415ad85e861a2deccee0da7e6d01e4e26b6659916f224e4e99a97f7c8be55aa92f3c1e0a8ddcf84c872a015977d268ab7f7c17e34a86a71074cc9c147c901aac8c1e7a25f73c1a8e2a25cec0234d048a8232828cfd1c21f66129f7d4cdde7b4e86708de73069431d194aab585299828539e35b5ce4ae62f44db7c772081b37656a1c144de146554d2024e8c842a1aa9e70a8c0b7fbb315cef62eb6f96a1bbf5a26075e96c96fdd576bddb78817173e9f88ea1689c83e61a0be34cdf3cbca07e0252f152ab87ed73abfcda20f7dfb1b4049496d005a39939a543cbb4e3349eb1d41a4fe2d48438b6e2d9848e6393d9a7709ac44091a745358b96a24cec291b8f27b368620da7d1a93d1b4516e069341e31b04d9ba576420e27e4b1e60aceb9ac84e45d87c88def864e14fa3b6fb50c1d5d424a9b5c9d77c6da02de7b545820823ea9e9d046b940a5b6ddae173afe7215bad74e37e13564943d070f38e394e612104d6b6c9e827a23126c18f1961be71cc17a62df8f4149e63f5f48dbf3d6c5bb96bfd1431c606b57e92f0942dff5be693b47c435cd1b0dd9770752a1e55bac0d5d1f7e211297b4cb42ae768eff83744f3ea45043c9fe3f4d04ebc07fffb5e3e22316571f65a4c23bee0e93ad08aba1db21aecb7d654fada93d9e110daed5dfb199694d8f5d6b73b419a18052bd56d42d3e16da8935f20d84411cbfa7bb75f80d5decad6778040000",
    ],
    [
      "ETag",
      "eIgamjcmseq9xvSxwUeHQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d92d16e82401045ff65fa8a091a4525f1015b6b4dd45ac4366963cc0a8362171677178d31fe7b67a9b54ddba47d8199e1cc72ef8523bc2659042e2c93d5b64079b85aa17e30858faae05ad12d179942b000355b11b90b83593f6ad79ebb63fe68fb4fb5dd76bbf73a1d2254b8c694817b8438411e29705f8e90b114692d14bc48b345d959a00fb9194e037f30ee539f8ac8f4e3d970e875873d385997c58869b628f97faccd4f166cc4d2c7182566211a2db9141b0cf5c0d8542ccd3956942864880a4ab87cb092a2c89914a242934ab35da93a76b55d6d34daad96dd22908b90e94464c4cea6a40fb4d08cfb624f2ec121409625198ecbeb8ec649541a31e5601c38f552df5780a4c509c7c5df20e95d33fa0c1fd83982ef1c4b4591e90b753bbcf77e3b8e32fd3ceac60b7a3f08a529a90b120c46bd69e08d26869b9fbd770f1ad5440a0a52a1c9b06ad75b8da663bfc77a2d4cd4f41e57cb022d0819fd1d77890637665ce1e90d347f3e267b020000",
    ],
    [
      "ETag",
      "vcTUGd92ZBNlV0RW2vqqwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`date`) NOT LIKE ? LIMIT 1",
        types: ["INT64", "DATE"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 1 } },
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "%2020-02-15%" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "cd",
      "53ef4fdb3010fd572c4f0826b54dda41d756aa5855b2112db42c4d4168428d9b5e8321898bed8000f57fdfd9a1fcdac6beee539dbb77ef3d3f5f1fe8152f16b447e73cbd2e41de7db814735aa3a0598ad5e1a7f9ae73f82ddc0df86dde76ef6fef47b7dea0df470437538ae5ab0cea4a943201d59b4e1aa914e58a4921ea4854efb8f566db6d769b7b7bdd4ec7ede09c826c19f0e20aa72fb45ea99ee36cb41ba91069066cc5552311f953ddb969392b292e21d1ca792de9a08a72de17ddcf44c23417457f3a4103a50239839cf10c2d3c4f2ee65f5e533738cb1b29826f78022c49445968630b2912512c795a4acb4a7b0fd4da7c71a0132ff08611198ea7a3682766b9198e3f12a6c86c26419599265fc3f1118957a875c114a8989c1e7aa1871529963c83195fc4a44ff6c960744048303ef5c29d78c13420cd681c91c0ffee6137f08ffc8834d1d402960c790f98463a6dcc2caaa36f5e4a83d2087a8cd1fffdf1e8da74b9905c9b0bf8a3c80b07c3c83ff1aacc0248597237b9c6d4962c53806826590e1ae49158008e1c8f277ee48f478300276c10c71b84a2bd9f0fcf03d1dd0a8c416d7f8d567bd7ea6f00272c2b2de2a63ad0265daf6b7f67381844defb045b2db7e5d6dd56bdb9b7855ce708c65da968e88fa9179ed1aa14c2122414899d7e272e0bb68d7faefc66ff108b1b88324ae3b7d23c5146249160db11cfed55abe976e773b7dba5162cf5db5ec7ed9a378762f1c7cea34669f9414a2143bb74e613d594f5c20b0c07ffc6359a83522c3534d3026fa280cd3320f609c953a4248e092f88499cc4d1d9b13733a9c735e2573cc42c678f6cbf4c7a9bd8fcdf568d3febaada8bffc2d1791599dda6f108b769fd0b82b24a3f1c050000",
    ],
    [
      "ETag",
      "C3b4/HGR4Liwm60zwzNwEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "7282300000d07fc9591c092ea4b784455b90d41114bc6430a665933520d8e9bfd7e9fb83f70362ce45d73159e5a2046f608a219af3b953e9447bdc3c7633371674b66c211425f26446d69ff14956347002124a7c82bb82c77acc1bb82745bb9b8c500d55623bf9f1c846facc6da57f176683dd293bf300c931ebc95dfac4eb09f6dde1db787ee4fb30493bdff28c6d7dc57e31e16a5ceaab34ea43fc68748a1588d44465015d5e344819b4d6351aee76b4704a36ba5c33bf36e5d522d625190eb43f9b2a2650c16006c458a7ade858fa9a692b8466e0bfc9e4548bd79588b8152df8fd037404d07b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-81-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "fbda04c893448ad62ca55ba4846c84b49aa609d9e642dd124cb1691555f9efbb98a66b55a9fd84ed7bce3de73e782277a248c8943091ddd7501dbedc4a46ce08689ae16b6f908feb6f9b9e1f2655eddaf7d5e17a73f5389b2142342c45f7650e1d25eb8a839aeeb6ddac9275492b293b98a8e3b91d77e4b81377389c789ee3214f419eae447187ec1bad4b35b5ed9376379332cb81964275b9dcbfbcdb0f3dbbace42d70adecb79236aa28fb63d1afb9e4540b59cc765b34502ba862d85391a385ffcc849dbf4ddd1574dfcd10fc203850ce655de8c616a6e0b248455657262b993e1163f3d5816cfd95bf882c2ef37a5fc405ddc39995504d637d28c1ba0c376b6b195c6ec2f53c5a6e8278bbf8e1afe7ddc566b55b075bebfa871ffa96a62c07c3b566d6b9b9057841fd04941685518f9ae746f9b941cbf763690828ada00dc66367445dcf99b0948d79eaf5872c7580318f8d87b4cf1c3e19c02061409167440d8b16b218bb34194f188fd904683c709c414c93b417732fe98ffa8e37009690e31979ac84860ba14aa944db21721d2e233f8ec25db09847be2921a575ae2f5a634d01af3d6a2c10411fd4746ca242a252d3ee6510f9e17c112daffc76c22bc8283f6cef71c629cd15209a56d83c0dd55a26d83012ccd7fe0582cdc47e9e828a4cff3c91a6e78d8b572d7fa14738c0c6ae365fb28dc265f0ddd83921ae685e1bc8437b20255abec1dad0f5f12f227149db2ce4d7ce0f7f93f62984142a28f8e7d344b0097cfaaf9d161fb1",
      "b8fa28a334de7177b86a447805ed0e0953ee337be479fd91430cb8d2ef62237772ea5a93a3c9087b28f47345ede263a1ad58ad5e4018c4f107a65bc77f360139f878040000",
    ],
    [
      "ETag",
      "24l7uBO2ERdru1/qryWOVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85",
      "ff",
      "cbf8282490f442497c686db524bd972646d3345b18282db0b8bb6848d3ffee2cd66ad4445f6066f86639e7c0110e491e820bdb247e2e51545731aab92e1628cb5449ba153c970806a0623191154efbf3c7ed4e56f870685fc72c995bc3f9cd0d1132d861c6c03d4294601a4a709f8e90b30c692de06999e59bba334055851e2efd8537b9a73ee3a1ee27abd1a8db1b0de0645c1643a6d8a6e6ffb1b63e19b0e7db054628300f506b2904df63a03c6d53b2ac48d194bc14014aa8e1fa412c785930c1b94913d3b14dbb65d91dbbd9ec388ee51098f280a984e7c4ae96a40f14572c5df05772092d02445d92e1a8bebed038096b23baf4267eab51ebfb0a90b4284971f337487a778c3ec307768ee03bc7325ee6ea42dd8da6dddf8ea34c3f8fea77fdc10f422a4aea82f8de78b0f4bbe399e6d667efbd4aa19c094e414ad419da56c369b65bd67bacb75c474def719528d18080d1df314c14b8114b259ede0031ce2d717b020000",
    ],
    [
      "ETag",
      "yeODQZbhsyeXk7+gaiQ0HQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-82-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffd5535f539b4010ff2a37f445c786406a6ca493b1a9d2ca484081e858c7494e38f01438bc3bd2b18edfbd7b47a2756ced739f3876f7f7e776f71e8c5b5a6786635cd1e2ae25fcfedd0dbb32de1b44e202a23615ecb0b0973f4f8ec4746b2b38f73c19fe188fa1822a94c05553929e602d4f897066b15970d6369833d603a2de68d0b3772c7bd71e0e7747236b043841cadca7f52da0afa56c84d3efafb5cd82b1a224b8a1c24c59f514ef2f07fd86b31b924ad17f29d90715d17f5b74af64299694d5e3590c065a41f89c54989660e119995d7d7e496d525c9905142f694a709ab2b696ca1650a4acce69d172cd6a380f86b6f9dbc1885ddfdd4fd07e380b928d05ae1478b189b040f33927a22d25fa1a8553b46840eb1a0b2216e8ecd08d5c887096d392cc69b64063b48726c101427e78e6461b0b21c122f00461827cefc885b4ef4dbd04d9e02a233906e2032c814f2a375977f4d4a82411128a567df45e4fcf785459ca3895ea065e90b8d1643ff14eddae693e29707a1fdf41db725c0a02d598e38a48c2a72c2300390e632ff1c260e2034277e2785d210ce7e2e11990dc37441994faabb476b6b5febae01497adae587607c3361e1fdfff9d21f1a66e9c4ca6c76fb30cac81d5b3603f86893d70ec0f8ebd6d5a96f51dc82f0108dbd3f11a2733373a37ba504472c2499d6aa637faa78b75e29f8f60bd91500b3b093230584985a4a9502229273a9dd04adfbd43efec5a1f6dfd8424e6f2556eb43d540fb7cefe985969b49a9f70ce78a4d750fd829ad05e680d8da2d9895ee2172eef56a18a08810b451f305461995ed3ba4082163570738272c651ded6a982754bab4398176d456a89d4b884839ec665a2b86d1ac625c99e59a0a0dbf73889bce0dbe6a7d5ef97f3c48de1114974613b23fb525d4a5fa5dbaefff71a97dd70949f833070611b7f017025032a98050000",
    ],
    [
      "ETag",
      "1isoHg1vzQKsM++NYIItOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcfdb7243401800e077d9ebc884ad53ef92513ace61a8ba311bfe5534c43aebf4dd9be9f706df0f22790ec3908d5d032d7a451b11d4637eb43ae58217da6d8b5f40e3796b791d75d960026e525f37ce216b8cafc85d4cffaea45c1968d47d93fd5e3e9badde8b12abf782b0b0c062889d3a682548c6bc2cf6d6b54ed4efbd44a9591ccd769af242f379d5fafd1ec5e6b79cc75c8801da4630edf4c51156699e28108527fb29a80d312c392fb16c97966a61eb19fea8b60ab8896e0bcfdf346573dea75b6f72f16cf1253a20581f158321ab9e332caaea01fd37b3717bc0f37a01c280a1df3f1946cf8c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-83-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535d4fa34014fd2bcdecab6d69a1963669d6a6e2dac45217a8c6dd6cc8cc70c151605866d018d3ffbe97c1ba1a137d6266ee39f79cfbc133b9176542e68489ec6f03f5d3b73bc9c811014d337cad6ee4b945a7a3e2e6d20be1caf955e4ba7a5c2c10215a96a24595435fc9a6e6a0e6bb7090d5b2a9682d651f13f55dbb3f3ab646b3d16432735dcb459e823cbd10e53db26fb5aed47c383c680f3229b31c6825d480cbe2f57df8301e56b5bc03aed5f0bde41055d4f073d1efb9e4540b592e76211a6814d4311454e468e13f336127ef530f042d0619821f0407cab96c4adddac2145c96a9c89ada6425f367626cbe3990d0bbf056518fcbbc29cab8a4051cf512aa69ac9f2ae89d05db4d6fed9f6d83cd325a6ffd385c9d7b9be560b5bdd86dfcb0777dee055e4f539683e1f616bd1373f3f182fa09282d4aa31eb5cfadf24b83d61fc7d212505a41178ca7d6311db9d68ca56cca53d79eb0d402c65c369d509b597ce6809330a0c833a286454bac19a833e6368d13cb7662c7b1594c7962c563968e6dc79db2094bc8fe883cd642c3a9509554a2eb10b90ed6911747c1ce5f2d23cf9490d226d7a79db1b680b71e351688a04f6adab7512151a96df7da8fbc60b98ad6575e37e10bc8287f0affe28c539a2b4034adb1791aea8d4cb061c45f6ebc53049b895d1e828acc7f3f93b6e7ad8b372d7fa54738c0d6ae365f1246c1daff61ec1c1057346f0ce4a13b900a2ddf626de87aff0791b8a45d16f273e70537a47b0a20851a4afef534116c025ffe6b87c5472cae3eca288d77dc1dae5a115e43b743c294fbc23e9e8d4696450cb8d61f6263c73e74adcdd16684024afd5251b7f8586827d6a857100671fcbee9d6fe1f3106828d78040000",
    ],
    [
      "ETag",
      "pYoH0a71mYPESeV4Zmltpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d925b4f83401085ffcbf84a9336bd4849fa40b52aa637298d0fa669b63050eac2e2ee62ad4dffbbb358ab51137d8199e19be59c037b784cf3081c58a5c95389727796a0be33858faae45ad1ad10b942b000354b88f45efb7cecc759d29c4d762fc5fd6dbf64cd6daf47840ad7983170f610a7c82305cec31e729621ad85829759beac3a0bf4ae30c359e07be36bea3311997e3c1f0eddfe700007ebb41831cd9615ff8fb5c5c1828d58f918a3c43c44a3a5906283a1f68c4dc5b282634d895286a8a082ab07891465c1a410359ad4ec66add1a937ba8d76bb6bdb759b402e42a65391133b9f913ed04233ee8b2db9840e01b22ac9705c5d9f699c469511537ae3a0d3aaf47d05485a9c725cfe0d92de35a3cff0811d23f8ceb14c94b93e5157c389fbdb7194e9e751976e30f841284d499d90c01b0d66813b9a1a6e71f4dedf6954532928488526c346bd65b7cf3bf5f7582f84899adee36859a20521a3bfe326d5e0c48c2b3cbc01a2be4f5a7b020000",
    ],
    [
      "ETag",
      "IzBlNRfmg3SOyxpWJBua3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ? LIMIT 1",
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
      jobId: "grouparoo-job-84-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d4fdb3010fe2b9627c426b50ded5a28952ad64160d142d3a529884da871936b302471b11d2684f8ef3b3b9417b1c1c77d8aedbbe7c58f2f77f48a97291dd005cfae2b90b71f2ec58236286896e1e938298edcce4ed13bea4cb67ecfc4e2e7e7d3c56838c40e6e508a15ab1c9a4a54320135984d5b9914d58a49219a48d4ec779bededadf66ebbd7dbedf7b7fa8853902f7d5e5e21fa42eb951a38ce5abb950991e5c0565cb512513c9e3b371d6725c525245a392f251d5451cedba27bb94898e6a21ccea668a05220e750309ea3852764baf8f292bac559d1cab0f98627c0924454a536b6902211e5926795b4ac747047adcd670b3a757d773f22fbc16c1c7d8c5961c0f127c21499cf25a82ad7e4300c8e49bc42ad0ba640c5e4f49b1bba7822c592e730e7694c86648f8cc60784f8c1a91b3e231a0711f1bdef2ed67defd88b481b6da5b064c87cc034126a6327ad979e792b0d4a63d34390deebe7a3f7a6ca85e4da5cc11b476e38da8fbc13b74ecd878c25b7d36bcc6dc97205d8cd242b40833c16292064124cbdc80bc6231f11368ac9ba43d1c1afbb274074bb026350dbafd1daee5afd75c309cb2bdb71532f689bdedf37fecd70e807a3773936daad5e770389ceb10d47a5e6a03f666e7846eba3109620a14c2cee8dac6cb32dbc3bf1ebf1c35e1c4094511af74af344199144822d47bcb0f7acd1dbbb9deece676a9ba57e55ebed74cd5f5aa67fad3c6854961fa41432b43367b6a8a6ac175e622cf8173768014ab1ccd0cc4abc8902b6c881d8f7238f61923826bc24266e1247671377fe1079dc205f594a525119948d7a40eaa4d7bbcd7abb698c593bf534fc5f2be7754846eb2018bb38157f00662745a00d050000",
    ],
    [
      "ETag",
      "NcmGE27m5G2P0wUobZ3WbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff1dcf496e83301400d0bb789d461048b1bbc364028483d2c8156c2c86cf50208c61aa7af7467d37783f288822e87b31d4053cd0075a821dd9465bbbc65499203b98da671b0e556257fa38f7bb8927424fc55a9518e7c9dba5595d532c2d738eb36bc84d71b6b2e60ae2764b93d01d31a538f59dd01a9e8aea10c7bb2befd3109ff07725bac62e52de8f9045345f72d692fb0e147d1d19d7cbc53464bae7fe259c1e386d3d1362f52b7e82e57791740a0c293a6b69e8318348ade59bb370d9c0eb4361974c53d5a3cce955451b04739377d08bfc3553f6846cd07f530c4b03af2b85a0830efdfe0126849e3f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-85-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "2bc8fbda04f2208148d11aa5748914c84648ab759a903186ba054cb1495555f9efbb364dd7aa52fb09dbf79c7bce7df08cee5995a2194a58fed0d2e6e9db1d4fd019a212e7eaf576e10edb7275436f52eb7e19f8983fae1ee7734030c512b8ac0bda13bc6d0815b3fdae9f37bcad71c3790f12f51cbb379858037760dbaee3580ef0042db20dabee817d2b652d66a679d2eee79ce705c535137dc2cbd777f33034eb86df512285f95ed20415617e2efabde0044bc6abf97e07065a419b9896981560e13f334dcedfa7ee335cf673001f18a19810de5652d98214845719cbdb466745b367a46dbe39a09db7f196914178d196555ce1929e19299638964f35352ec3ad6fac83cb6de82fa2f5368877cb95e72ffacbed66ef073be37ae5859e21715250cd35e6c6b9be057001fd940ac92aad1ea967a5fcd2a0f5c7b12802480bda05e3a935c103c772932c9992cc19d94966d1247192a98d478945dc311da709c5c0d3a29a852b5ea52377826d771a8f5cdb89c7d82671321dd97196ba563ac946c3c93041c733f4d830492f98a8b9605d87d075b88ebc380af7c1721179ba840cb785bce88ca902de7a945020803ea9e9a8a28c83926af73a88bc70b18cd6575e37e10dcd3179da3dc08c335c080a68dc40f3246d7c9e42c350b0f0bd0b00eb89fd3c05059afd7946aae7cac59b96bfd22318a0b22bf517eda2701dfcd0764e882b5cb41a72e80ea806cbb7501bb83efe05242c699705fdda7be16fd43d8534a30dadc8d7d304b00e7cf9af9d161fb0b0fa202324dc6177885022a4a1dd0e315dee0b",
      "7be20e1d6b8c34b8911f62103d754de5501969492bf95251b7f8506827d68a57100461fc81eed6f11f45254ea778040000",
    ],
    [
      "ETag",
      "bhA92umHZeZd0kCNMaowHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085df65bc2d498980a5091720a098f25f34c410b2b4d352dc76ebee564308efee6c45346aa237edccf49bed39a73dc0539285e0c226899f0b94fb8b18f5d414335405d78a6eb9c8148205a8594c243e14f7974bd55d2cf9b8e7f5a777b5c4cee3568b08156c3165e01e204a90870adcc703642c455a0b042fd26c5d7616e87d6e86737f3618dd509f8ad0f4a385e7b53b5e0f8ed67931649aad4bfe1f6baba3053bb199618412b3008d965c8a1d067a606c2a96e61c2b4a14324005255c3e88a528722685a8d0a4e2d42bd5865d6d56ebf5a6e3d80e815c044c2722237631277da085667c265ec925340890654986a3f2fa42e3242c8d987230f21bb552df5780a44509c7f5df20e9dd32fa0c1fd82982ef1c4b4591e933d5f7c6eddf8ea34c3f8feab6fdde0f42694aea8cf883616feeb78713c3ad4ede3b7b8d6a220505a9d06458b56b4efdaa61bfc77a2d4cd4f41e57cb022d0818fd1db7890637625ce1f10d01041b2b7b020000",
    ],
    [
      "ETag",
      "eWuV3YsDUYlOELFQJ4i0pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ? LIMIT 1",
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
      jobId: "grouparoo-job-86-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7b",
      "d9d426404a80448aba28651d529a740969374d53629c03750b98daa65355e5bfef004d2faad43eec0973ce773917fb81dcf0624b8624e6e96d05f2fed3b588c921014d538c0ae8b93fa77e72204ecdebe2a058f6b24b3f1d8d10c16b96a279994147894a3250c3d5b29b4a5195540ad141a18eef766cd7b20776bf3ff07dcb479e822c99f2e206d9575a976a689a7bef6e2a449a012db9ea32913fc5cdbb9e594a710d4c2bf3b5a5892eca7cdff438138c6a2e8ad16a8905540ae41a72ca332ce199b98dbfbe96ee729a775304df710694315115ba2e0b259828129e56b25125c307d294f9e24096c1349844c664be9a459f3734afc99b2f0655c67a2d41559936be2de667c6a644af2baa406d8ccbefc122c0881409cf60cdb71b63641c1be3d989616cf67fd3f02c8c0c1b8bd882d2bc684a88689c416dff38a5f0ed6e6a02d568d426d79ee552dbb70671127b2cf18ffa7162411cfbb1d7a747b1c5060e38db1828f274addeb068818dbbee910f9643e900a8e3014d1cdfb1e980faeed6f6c0a53d2b61aee790dd21f92bb98613ae4aa1783b2a72b908a3601d2d56b3c9380a9a36128ae338698bab9b7859a7c62611f44e5fbb3acb053ad5730f6751b0184fa2f02268573d8594b2fbe52d2e3ba1990244534973d020cfc4168746cee7cb300ae7b3f11419cdfecef7084586bf1f9e09d17dd94c5937dfdacb6dda7c025cd0ac6a1077ed81d864b73bfc3f853e4afc4108deec964d7eac82c52fd286",
      "16908084827dbc7d0437890f1fe8feb52016df0bda288dff78d798aa4d9884f6cef1bca9af65bb03c7b13cd280a57e93ebdbde7eb8b546ad083914fab1a3f6b5d4b36a52957a026112afca2c9c9d62f61f50ebbf8bad040000",
    ],
    [
      "ETag",
      "oe26XL8f+oG/jn+nS2lW8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90416f83300c85ff8b7705ad1c4014a9877542a31aaa56364e5355a560182dc42c09db10e2bfcfa1bdc4cecb17bf274f706d6409119c9bfa7b40353ed4680eb6c9500fadd15c7a921ac10134a266523e225d5ffb927cf91778b9977487243b6c364ce8e20b3b01d10455836da921fa9c408a0ef9dbe9a496898c99b1b7ca6eff11bfc4190b1d9556d8e769fab44d63988fb303173a6758a14259a01dd92bba60617636ad165ddfa2ab6950056a58e0e5a15634f44211b9acb861e07ac1ca5b7bbebf0ec355c8604b85300d4966f377601b4346b419fd7258f018504bcbb9abe5fc59640e74bca3dbd1a07e53c4be1aade5ea66ff4c3692e1a8460de84021781949636ef7f91f6960d43769010000",
    ],
    [
      "ETag",
      "n/eokKpdo5nx61U1HmQHRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "4e",
      "83",
      "300000d07fe9f3b200c5417d6342042b4cb6a2c04b534b19770814192cfebb8be70fce1d30cec53451d9d7a203cf60651adaf33deecd235cb277521b0d3e742e5c64a7fbc12abf49acb0735f2131a827ef0b0a271278a9af4198ceb9d94c2edf72cd57d09a6cf3cb9859de6949a9b5496a4dcb804d5945e641ad5bce96fcec295e7c1e6cdccda951175e61c3cf00adeca38b2f7a51cd3abc15d4b5a54310b91a39a1a515d0041b3fc9e6e38bbee1d7a2a9891a712d6cc79513270bda3c79e349b0c9b08ac00e88db508e62a2e563069f10da81ff2695eb201ed7a360a318c1ef1f26ba311b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-87-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "6b6f9b3014fd2bc8fbda24647941a4688d12da464bc84648ab699a906d2ed42d608a4da6aaca7fdfc5345dbb49ed276cdf73ee39f7c113b917454ca68489f4a186eaf1d39d64e48c80a629be2e6fdcf964387421fd4aedf43abf3ce4f7db7436438468588ae665061d25eb8a839aee77ddb49275492b293b98a8e34c3afdb1dd77fba391eb38b6833c0559b216c53db26fb52ed5b4d73b69775329d30c68295497cbfce5bd77f8dc2b2b79075cabde5bc91eaaa8defba25f32c9a916b298ed7768a0565045905391a185bfcc989dbf4ddd1534efa6083e080e94735917bab18529b82c1291d695c94aa64fc4d87c75203b6fed2d428bcbacce8ba8a0399c5931d534d28f255817c17663adfc8b6db09987abad1fed1657de66de5d6cd7fb8dbfb36eaebcc0b334651918ae35b3cecdcdc70beac7a0b4288c7ad83c37cacf0d5afd3f968680d20ada6034b1c7b4efd82e4bd88427ce60c4121b1873d8644407cce6ee108631038a3c236a58b49005ef3bb13d817e04a3248986cc1e478c3a2ce2f12049268324660cc8f18cfcae8486a550a554a2ed10b90956a11785c1de5fcc43cf9490d03ad3cbd65853c06b8f1a0b44d03b351d9ba890a8d4b47be5875e305f84ab6baf9df01a52ca1f770f38e384660a104d2b6c9e866a23636c18f1e71b6f896033b16fa7a022d39f4fa4e979e3e255cb5fe8210eb0b1abcd97ecc260e55f1a3b27c435cd6a0339b40752a2e55bac0d5d1f7f211297b4cd42beefbde007699f0248a082827f3c4d049bc087ffda69f1118bab8f324ae31d7787ab468457d0ee9030e53eb3c7eed01dd8c4802bfd6f6c643ba353d79a1c4d46c8a1d0cf15b58b8f85b662b57a016110c7ef9b6e1dff008bb7a38778040000",
    ],
    [
      "ETag",
      "DW9A7449egKa0gVmGvmkOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83401085df65bca509c49652122f5aad4ad2d6fe5035314db385815217167717b569faeece62ad464df40666866f96730eece0312b62f06195a54f15caed498a7a628a29aa8a6b45b752140ac102d42c35e4eaf6feaee88f03be71987c3d75aaa6bd999c9d11a1a235e60cfc1d2419f25881ffb08382e5486b91e0555e2cebce02bd2dcd70164e83d115f5b9884d3f9a0f06dddea00f7bebb81833cd9635ff8fb5c5de828d584d3141894584464b29c506231d189b8ae525c78612958c50410dd70f5229aa9249211a346978ed86e3da4ec769b53a9e677b047211319d8982d8f98cf481169af1a9782197e01220eb920c27f5f599c6595c1b3165300add66adef2b40d2928ce3f26f90f4ae197d860fec10c1778ee5a22af491ba1cdc747f3b8e32fd3ceaa21bf67f104a535247240c86fd59d81d8e0db73878ef6d35aab11414a44293a16337bd56dbb5df633d17266a7a8faf658516448cfe8eeb4c839f30ae70ff06bd125b4c7b020000",
    ],
    [
      "ETag",
      "bbVXWnEPIlj1arx31u40jQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-88-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "536d4fdb3010fe2b91f76593a04da0cd4ba58a55256311a565690a9aa6a9759c4b302471881d1842fdefbb389417a1b14f71ee9e97bbf3f991dcf032212312f3ecb681fae1d3b588c91e0145338c9a57935bdb6e66e1627a1add382797a6fde7f47e3c46046f599216550efb52343503395a2d7b592d9a8ad642eca3d0beebee5bb66979d670e8b9aee9224f429ece787983ec2ba52a39eaf777debd4c882c075a71d963a2788ef7ef0efa552dae8129d97f6bd94717d9ffd8f428178c2a2ecaf16a89053412ea351494e758c20b3389bfbe95ee715af43204df71069431d194aa2d0b259828539e35b55625a347a2cb7c75204b7fe64f2363ba58cda3cf1b5ab4e4cd17834a63bdae4136b932be858b336353a1d715952037c6e5773ff431528b94e7b0e6c9c6181b47c6647e6cbce0bad82c380b22c3c25212908a97ba9088c639b4453ccd2a787f432d812a94e9926bc7b4a9e59a5e9cc60e4bddc3619c9a10c76eec0ce9616c326f008324068a3cd5aa6b162d450943cf4c3cea590e1d0c0f1393c5aecd5c443ad463f4c0b2139a9a9825db3d725f7305c75c5642f26e60e4320c227f1d85abf97412f9ba8d94e2508ebbe2da265ed7a9b049047dd0d7b6cd72814eedf48379e4879369145cf8dd85cf20a3ec61798b579ed25c02a2694d0b50509f89048746ce17cb200a16f3c90c19fa16cf77084946bf1e5f08d143a5a7acf4b7f5b207da7f07b8a079a31177dd815864bbddfbb7c2320a83f9c9c712930abb4599df88c21def14c88f951ffe245d2884146a28d9ff3700c13af1dfa7ba7b3788c597833652e13fee1b93ad09aba1db3b5ee82e3bb6edd9078e4334b856ef72037bb81b70abd12a4201a57aeaa87b37edbc74aa91cf204ce2baccf5a4b67f018286ddc1b7040000",
    ],
    [
      "ETag",
      "0hAq66uLROCKTk7GW06xKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90614f83301086ffcbf91512309932927d7086e81497892ec69865e9e040b070d8162712fefbaecc2fbdebdba7f7beb901beca2683100e65f1dda1ea2f0a34cfb6495077d2682e2d351ac10134a260f2efa16a1f098b7791fcc64f6f1bafbc96f171b16042a79f580b0807c84b949986f0638046d4c8dff67b354d64ccf4ad5556ebd7e82e4a58a829b3c27a1bc737cb388271373a50d121c11c153629da91ada20a53b3b269b5a85b89aea64ea5a86182a7874251d70a45e4b2e20681eb5f79fedc9fcde641e0050c4a4a8529a96176fb026c63c80899d091c382cf809a5ace9d4fe70fcb9736d0ee1f5df606f54611fb6ab496ded9fe966c24c3518dead08154f032ee4b73be8f27a5a0af0469010000",
    ],
    [
      "ETag",
      "zJjpKoegYaRxLMWP0i7lLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "d1",
      "76",
      "43",
      "30",
      "18",
      "00",
      "e077c975dbb3622bbb63444aa5456b759593f10fad0e095376f6eeebd9f706df0fe2590652b2beb9c2177a4513578c55b6f21bdd52c7fc54a4a9042a127f3edeeafe2637492a5e1426bb37a094b4fb52c3b4f01859379724317ac16295f9b942cc2ecffc63f04daecb6d5db9e78d3a24e11cd52498c269d427c0b48482443839d84e9cfa143f919843304f8aa81df0424dc7562979a5ac834258ac13b5ad1f2e6a8adb6a37789a88e849183b3724a36396c3f9bd9de9d2fdb079adeccd656f6e3f75b440706f2b0192558f99fa6c180bf4df64fdd4c2e36a011720d0ef1f7747f8be05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-89-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbb8e64113128814ad514ab74c09d980b4aaa6091973a16e01536cda7555fefb2ea6e9da4d6a3f61fb9e73cfb90f1ec90d2f13322331cf6e1ba81f3e5c8b981c115034c3d78f39bd67a3f257b2befdfabbbab92ccfc280dfcfe788e02d4bd2a2caa12745533390b35dd0cf6ad154b416a287897ab6d3332743d3312dcbb1eda18d3c0979bae6e50db2af94aae46c303868f73321b21c68c5659f89e2f97d70773ca86a710d4cc9c16bc901aac8c1dba29f72c1a8e2a29cef0234d048a8232828cfd1c25f66129fbc4edde7b4e86708bee30c2863a229556b0b533051a63c6b6a9d95cc1e89b6f9e2400277ed2e438389bc29caa8a4051c19095534520f151867fe7663acbcb3adbf5984abad1705cb2fee66d15f6ed7bb8d1718175f5cdf35148d73d05c636e9ce89b8717d44f402a5e6af5b07d6e959f1ab4fa7f2c2d01a52574c1683a9c50d31e3a711a4f596a8fac381d421cdbf1d4a2a378c89c318c931828f2b4a866d1126b9e1c8f68324a23e6501a8d87132ba28e45a3a96952b0622b81f194ec8fc87dcd159c725909c9bb0e910b7f15ba51e8efbce522747509296d7275da196b0b78e9516181087aa3a67d1be50295da76afbcd0f517cb7075ee76135e4346d943708b334e692e01d1b4c6e629a83722c186116fb1714f11ac27f6ed109464f6e391b43d6f5dbc68f9333dc401b67695fe9220f457de676de78038a779a32177dd815468f90a6b43d7fb9f88c425edb290ef3bd7bf24dd930f29d450b2f7a789601d78f75f3b2c3e6271f551462abce3ee30d98ab01aba1de2badc27f6c4993863876870adfe8d4dcdb17de85a9ba3cd080594eaa9a26ef1b1d04eac91cf200ce2f83dddadfd1fa7fc3fde78040000",
    ],
    [
      "ETag",
      "+lawc3nxdLqJzpkYnFTSiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "401085ffcb7885d89a1629490f68ab92d4b652eac598660b03a2c0e0eea2364dffbbb3a8d5a8895e6066f86679efc1161ef22a010fd679f6d8a0dc1c64a8af4c11a26a0aadf85653a5102c402d32260f83d9e3e87aa383235dfbf3ec825e66ebe86a386442c577580af0b690e658240abc9b2d54a2445e8ba968ca6ad57616e84d6d868b280ca6e7dc9794987eba9c4cfc93c91876d67e31115aac5afe1f6bb73b0bee691d628a12ab188d965ad23dc63a30369528eb026d458d8c51410bb70f32494d2d2491cd13db1dd85da7d31d74fbfd81eb765c060b8a85cea96276b9607da0498b22a46776090e03b22dd970da5e9f789c27ad115306d3c8e9b5fabe022c2dcd0b5cfd0db2de3bc19fe1037b8fe03b274a6a2abda7ce2633ffb7e338d3cfa3467e34fe4128cd49ed9128b81c2f22ff726eb8db77ef271b8d6a2e8983546832ec767a6effd8e9bcc57a4a266a7e8fa7658316c482ff8e8b5c83978a42e1ee15cc92dac67b020000",
    ],
    [
      "ETag",
      "/IOqDVytI2tpAPgHoxObTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ? LIMIT 1",
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
      jobId: "grouparoo-job-90-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536d6f9b3010fe2bc8fbb2496d801408448aba28a51b5a425a425a55d3941863a85bc0149b6e5595ffbec3347d51b5ee13e6ee79b93b9f1fd12dab52344609cbef5ada3c7cbae1093a4054e21ca2b777a74ef6c71c85fad50d3977cc855d2d7e4c271340b08e25705917f450f0b621548cd7ab41def0b6c60de7872074e81987a663989e69db9eeb1a2ef0042db239ab6e817d2d652dc6babef71ee49ce705c5351303c2cbe7b87e3fd4eb86df502285fed6520717a17f6c7a5c708225e3d564bd82025a419b0d2d312ba08417669a7c7d2b3d60b81ce400be67846242785bc9ae2c9020bcca58de364a158d1f912af3d501adfcb93f8bb5d9721dc69fb7b8ecc8db2f1a16da66d350d116523b8d960b6d5b83d73516546cb5cbef7ee443a4e1192be886a55b6da21d6bd3f0447bc1f5b179b00862cd8452522a24ab5421314e0ada15f134abe0fd0d75042c41a64f6e4686834dd7f0922c1991cc3db293cca049e226231b1f2506f12c6aa509c5c0939dba62e18a5747ae9138433b7512c3716c8ba6c3919758c41d9a4eea1a36b13d8b588e3b42bb03f4bb61929e305173c1fa81a1cb2888fd4d1cadc3d934f6551b1986a19cf4c5754dbcae53429300faa0af5d97651c9cbae90761ec47d3591c5cf8fd85cf698ec9c3ea0eae3cc385a080c60d2ea9a4cd82a7303474b65c0571b00ca77360a85b3cdb23041aff7c7c21c40fb59ab254dfcecbb194ff1e70818b5621eefb0332d16e77f06f85551c05e1b78f25700ddd82cc2f40c18ef70ae87ced4757a80f4534a30dadc8ff3700c02af1dfa7ba7f37808597033642c23fec1b119d096968bf77ac545df66cc7738d918514b891ef7243dbdd0fb8d3e81469492bf9d451ff6eba79a9542b9e4190847509d5a4767f011be7f9d7b7040000",
    ],
    [
      "ETag",
      "kqF6fx17N/YjcQ61M5nMKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d90416f83300c85ff8b7705090e9d5aa41ec68ab6aea8da58394d559582cbd202a649588710ff7d4eba4be23c7ff67bca0817d99610c15156d71ed5f050a1f9b04586baaf8de6aba35623788046544c5ee395bca452afde2ee96fb9c9f3aedc6d6ecb2513baf8c6464034c249625d6a88be466845833c763828b79131337456596f77c94b92b1d05069856d9ea64f719ac0b49f3c38d331c3132a6c0bb42b3b45672cccdaa6d5a2e96af435f5aa400d0e768d4a51df0945e4b3e22f023f7c0cc245389b2de6f360ce604d8530925a66f34f601b4346d419dd382c840c285772ee933b7f580e6ca0fd3f1a0f06f5bb22f6d558baaeb37f261bc97054a37af4a010fc19afd2dcdfd31fb526901b69010000",
    ],
    [
      "ETag",
      "qBDikLisDJkLxdKUUpdTKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff1dcf4b7282300000d0bb642d8e8240e8ae40182c08d3aafc369910523e16032445b1d3bbd7e9bbc1fb018452260496fcc2aee0052c44b5d6741d70686bb72a2a64f88d326c5695ec2312a6aeddb5bcea62a53ad38de1219290fd311910623bc8bd48eeb60151fb9ca54977d251e80755a97e78b24811373f191e3dfddd2de2b0c966bda8f3fe56fa4b9464688f064735c78b0f3d0b1ae65b8d24d56b5e3a593743773b8a582a33fe32d58e8bc3e171a6c6c6124e7097b4c5d72ee576f3fab82930efa1aef94bce9b13126005d87d68272670fb9c69ba65adc07f13cb6560cfabcdc8c426f0fb07f0ebc50f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-91-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f795b6e9fa4852a91aa584ad529b429a526dd314d9ee4d304de3103b2086fadf77e3500642824fb17dcfb9e7dc479ec84ee45b32224ca47715948f5f6e25232704344df135d99dfdcacbc525fbbb79b872eccdce3fbbba7c188f11216a96a2fb2283969255c9418dd6ab765acaaaa0a5942d4cd4f2baadeed0ee7addc1c0735ddb459e822c998b7c87ec1bad0b35ea748edaed54ca34035a08d5e672fff2deb9ffda294a790b5cabce5bc90eaaa8cec7a2df32c9a916321faf5768a05250c6b0a722430bff995b76fa36755bd07d3b45f0bde040399755ae6b5b9882cb3c1169559aac64f4448ccd5707b2f2e7fe34b2b8ccaa7d1ee7740f27d6966a1aebc702ac8b70b9b066c1c5325c4ca2d9328857d31ffe62d29e2ee7eb45b0b2363ffcd0b734651918ae35b64ecd2dc00bea6f4169911bf5a87eae959f1b347b3f969a80d20a9a60ecd843da756d8f25cce189db1bb0c406c65ce60c688fd9dceb437fcb8022cf881a16cd650eb6635377d08ddd84f2b8efb05e4c1deec503b675fbd4766038e0e470421e4aa1e15ca8422ad174886cc259e4c751b80ea693c8372524b4caf47963ac2ee0b5478d0522e8839a0e75544854aadb3d0b223f9c4ca3d9b5df4c780e29e58fab3b9c7142330588a625364f43b9905b6c1809260bff1cc1666297c7a022a3df4fa4ee79ede255cb5fe8110eb0b6abcd97aca270167c37768e886b9a550672df1c4881966fb036747df883485cd2260bb95afbe14fd23c8590400939ff7c9a0836814fffb5e3e22316571f6594c63bee0e57b5082fa1d92161ca7d660f3d77e875890197fa5dccebd9c7aed539ea8cb0875c3f57d42c3e16da8855ea0584411c7f60ba75f80779c39e8a78040000",
    ],
    [
      "ETag",
      "fkBZnrMPbzWwQ70WkEBQPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "92dd4e83401085df65bc942625b14849bca05a9584fed8d22b639a15864a5d18dc5d6c9aa6efee2cd66ad4446f6066f86639e7c00e9e8b2a83001e8bd54b836a7bb24273678b19ea461acdb79a2a8de0001ab162f27974574ebcd3a98c072ff162a0d70b5a379b8b0b2674fa84a5806007798132d310dcefa01225f25a4ab229ab65db3960b6b51dce935934bee1bea4ccf6e3451c878378087be7b8980923962dff8fb587bd036b7a9c618e0aab14ad965ad11a5313599b5a94b5c48ea646a5a8a185db072b454d2d145187279dbedb71bdaedb777bbdbeef777d0625a5c2145431bb98b33e3064849cd1865d82c7806a4b369cb7d7571e17596bc496d138f1ce5a7d5f0196961712977f83acf749f067f8c00e117ce744494d658ed4753c097f3b8e33fd3cea2a4c863f086d38a9239244a3e13c094753cb3d1cbc0fb606f5541107a9d166e876cffcdeb9d77d8ff5926cd4fc9ec0a8061d4805ff1db78581201752e3fe0de7c89bb87b020000",
    ],
    [
      "ETag",
      "kMQmO6+PlLBqLUBsjUojuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:34:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ? LIMIT 1",
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
      jobId: "grouparoo-job-92-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "9b3010ff5790f765939a843c482052d44509db9052d225a4ed344d893107750b98da265555e57fdf014d1f9ad67ef2e37e8fbbf3f991dcf23c226312f2e4ae04f9f0e94684e48480a609de727faeafa4c8f7bc5c17bdabe9bd57dc64c96482085eb114cd8a145a4a9492811a6fd6ed448ab2a05288160ab59c5eab3b34bb4ed7b21cdb366de42948e305cf6f917dad75a1c69dced1bb9d0891a4400baeda4c64cff79d7daf534871034cabce5bcb0ebaa8cefba6a7a9605473914f366b4ca05420b790519e620a2fcc28fcfa56bacd69d64e10bce70c2863a2cc7595164a3091c73c2965ad4ac68fa44ef3d586acdd853b0b8cd972e3079f7734abc8bb2f0655c6762b4195a936bead9667c6ae40af6baa40ed8ccb1feecac51b29629ec296473b63629c1a537f6e18bb886a68ce0befcc0b8c2ea61181d23caf930868984295c0539fbc7f5fa722508d564d703b3287b46b9b4e18872316db7d2b8c4d08433b1c59b41f9acc19c0200a81224f57ea358be6220fed381c867d07466c30a07d8b99600f4d278a2dd3ec8fac3e8b581475694c0e27e45e720d73ae0aa178d32c72b9f202771bac36fe6c1ab8751931c586cc9be4aa225ee7a9b14804bd53d7a18a72814e55e73d3f7057d359e05db8cd632f20a1ec617d87cf1dd35401a2a9a41968906722c2a691f3e5da0bbca53f5d20a37ec1f3234291f1efc71742f050d45dd6f55a790d07b5ff117041d3b246ec9b0de992c3e1e4ff0af3aa05ef0af4cc9ed93271a42d54fa83501cf14684fcdcb8ab5fa4b95a410c1272f6f11020b80e7cf8538fdf06b1f871d046693ce3c83155993009cde8f1ac2eb4610f1dc7764c5283a57e1b1b99b80c8f3dae342a45c820d74f",
      "1535dfa66a591d2ad53308833831bee77fc7e85f634b8e0ab6040000",
    ],
    [
      "ETag",
      "iNDtXronviuSp2XAwIpjmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff2d90614f83301086ffcbf9151230ce00c93e385ddc12828a2e269a6529ec609dc0615b2448f8ef5e995f7ad7b74fef7d73237cc9e6081164b2fcee500d57259a17dba4a8bbca682e2d351ac10134a264b2bcf96dde9327e9c9ae0fc569f8c836bb877eb96442e727ac0544231412aba386e8738446d4c8df0e07354f64cc0cad55b6c9dbfa719db250d3d10ac92e8eef56f11aa6fde4c099b2140b54d8e46847b68ace989bad4dab45dd56e86aea548e1a66787e281575ad50442e2b6e78edfab79e1ffa8b4518045ec06045b930921a6677afc036868ca852ea392cf80ca8b9e5dcc57cfecc3207daffa3abc1a07e56c4be1aada577b1bf271bc97054a33a742017bc8c8d3497fbf407eb4e0ace69010000",
    ],
    [
      "ETag",
      "g4znWNOi0iuw9ahyZbHUDw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "72",
      "43",
      "40",
      "0000d07fd9e7c8b804d1374b5a71aba0225e8cb2112476ad5be8f4df9be9f983f303b23c477d9f0eb8412d78034bc62bdb7c6be13d14e6ab9ce310cf56a2d5aab49c7148ab80e14c967df2b276895be2511ae44c5b7c98be3f758acbd4918309213abcb756c3ad93cd9db9212e0cf77d0a8a9d188a9fd1b83f9492346bb6fa309cf8ee85b0186bebdb832236b25beb78a75a9666b76b1b62dad7a848ecdba19cd624192c03552a73dc091933aa25be407b3d2e7a899c4704d57ed1671eab253b759eef52fc0536003d4945519f56af99202aca06fc37d36121e8758528a38882df3f5da31d5805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-93-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fdb3014fd2b91f795b6297d24ad548daa0d23539b6e690a42d314d9ce4d30a471881d1042fdefbb71280321c1a7d8bee7dc73ee23cfe44e1409991226b2fb1aaaa76fb7929113029a66f8ea2711e77c7571f9737cad97b76bfbfefab17c9ccd10211a96a2fb32878e9275c5414d77db6e56c9baa495941d4cd4990c3afdb1dd9ff447a389ebda2ef214e4e94a1477c8bed1ba54d35eefa8ddcda4cc72a0a5505d2ef7afefbd87d35e59c95be05af5de4bf65045f53e17fd9e4b4eb590c56cb74503b5822a863d15395af8cf4cd8d9fbd45d41f7dd0cc10f8203e55cd6856e6c610a2e8b54647565b292e9333136df1cc8d65b798bc8e232aff7455cd03d9c5809d534d64f2558e7e1666df9c1f9265ccf237f13c4dbc585b79e77179bd56e1d6cadab0b2ff42c4d590e866bcdac33730bf082fa09282d0aa31e35cf8df24b83fc8f63690828ada00dc68e3da67dd79eb094393c75072396dac098cb9c111d309b4f86304c1850e41951c3a2852ca89bf253ce58ec38761a0f27098d5d44c70c46493a4e28759201399c90c74a68580a554a25da0e91abd08fbc380a77c1621e79a68494d6b95eb6c69a02de7ad45820823ea9e9d0448544a5a6dd7e1079e17c11f9975e3be11564943f6def71c629cd15209a56d83c0dd55a26d83012ccd7de12c16662bf8e4145a67f9e49d3f3c6c59b96bfd2231c6063579b2fd946a11ffc30768e884b9ad706f2d01e4889966fb036747df88b485cd2360bf9bdf3c26bd23e8590420505ff7a9a0836812fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca7d613bb63dee9f1203aef4879833748e5d6b723419610f857ea9a85d7c2cb415abd52b088338fec074ebf00fcc2fafde78040000",
    ],
    [
      "ETag",
      "IdTcccLHVJ6YtDjM0qYwpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92d16e82401045ff65fa2824922a55121fb0d5d644ad4534318d312b0c880596ee2e1a63fcf7ce526b9bb649fb0233c399e5de0b477849f2101c5827f16b89e27015a37ad28587b24c95a45bc1738960002a1613b97b8aacf53a56b5f942cc17cd9edcf76b9edbe91021830d660c9c234409a6a104e7f90839cb90d6029e9659beaa3a03d4a1d0c3a9ef0dc6f7d4673cd4fd78361cbadd610f4ec66531648aad2afe1f6bcb93015bbef630428179805a4b21f8160335d03625cb8a144dc94b11a0840aae1ec4829705139c9b3431dbd7a665d7adb6d56cb65bad7a8bc094074c253c277636257da0b862a9c7f7e4126c02445592e1a8baee689c8495115d0ec6bedda8f47d05485a94a4b8fa1b24bd1b469fe1033b47f09d63192f7375a1fac347f7b7e328d3cfa3ee5cbff783908a92ba20fe60d49bfaee68a2b9e5d97bf7a0504e04a72025ea0cad7aa3d5bcb1ebefb1de721d35bdc751a2440302467fc743a2c089582af1f4066004e36c7b020000",
    ],
    [
      "ETag",
      "vQf1bbgt+VYrVY5EswF+RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ? LIMIT 1",
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
      jobId: "grouparoo-job-94-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8553596f9b4010fe2b68fbd24ab1b96d6cc94a2d87b654be6ae3446955d90b0c64536031bb384a23fff70e90b35593171bcdcc77cceccc1df9c5f2880c49c0927d05e5edbb6b1e9013029226189db0df03f5ebfeb25a3887e5de2d02984dcc9bd1082b588d12342b52e8085e952188e166dd4d4a5e15b4e4bc83449d81d5d17b9a3ed06d7be0389a833801693c65f92f445f495988a1aa3e687713ce931468c14437e4d9635c3d186a51f26b08a5505f4aaaa822d4d7454f531e52c9783edaacd14025a0dc4246598a169e9051f0f1257597d1ac9b60f1818540c39057b9ac6d2145c8f3982555d9b092e11d696c3efb206b77ea4e7c65b2d8ccfdf73b9ad5e0dd07850a65bb2d4154a9543ead16336557a0d615152076cac51777e562a4e4314b61cba29d32524e95f1fc4c517642a2b93630f5669eafe8e823022159deb8f0699042ede07e50debfcf5303a844ad36b9ed6b3daa3bda2088837e183ba61dc41a048113f46d6a065a38b0c08a02a08893357b83a239cfa3810366a4eb06624293f6b57ee018666cdb60d9b11999618ff622dbb2c8f184dc944cc219130517ac9d16b95879bebbf5579bf964ecbb4d1b31c5899cb5e6ea269efb94d82416bdd2d7b1ce328e4af5e8bdb9efaec613df3b77dbd79e4242c3dbf51edf3ba6a900aca625cd404239e3110e8d2c176bcff716f3f11411cd132e1f2a0419feb87b02f8b7453365d9fcd75abda6cdc782739a564dc5a1fd203a391e4ffecfe07b3377ed8f67cbd7590ccdd03a9ad1d16d5f3786ba39d4adaea669df91fc270271ed5b5ef26de3ae2e491b5a410c25e4e1db7b81c54de2cdeb7d3825acc5634219dc4bc9700b43518b8425b4dbc8b2a6f716ddc75fabb97d494bf977ce3074f361ec3547cd0819e4f2bea3f694ea2936a94a3c1661129768eecd3f63f60f3e6ce0cbca040000",
    ],
    [
      "ETag",
      "Ciz9/JqYuO8vPqEpbeMC3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90416f82401085ffcbf40a0934b541120fd2106b428c456d0fc69815060a024377170d25fcf7ce622f3bb36fbf9df732035c8b26051f2e45fed3a1ec9f72d41fa689517595565c5a6a148205a845cea42c56bbcde7ef527c3d97db20b8deea7d2fee8b05132af9c65a803f405660952af08f0334a246fe763ecb692263ba6f8db2deecc35518b350536a84cd218a964114c2781a2d28e9126386129b04cdc8565289895e9bb44ad46d85b6a24e26a86082a7875c52d70a4964b362cf5f6cf7d571e7ee6c36f73cc763b0a244e8821a660f3b601b4d5a5431dd392cb80cc8a9e5dcd974de2699039dfed1a0d7a8b692d857a1b1741ef66f6422698eaa658716248297f15ee8c77dfc030375ef5669010000",
    ],
    [
      "ETag",
      "riGSNVzAaW2jPBBkvmTyaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff1dcfdb6e82300000d07fe9b3314861c0dec080172e8e88427821a536a18352048a2dcbfe7d66e70fce0f40189369aa66de921e7c028574678bb721b73df8c209c717cd1aebdd42113ee8dad5314313a66c5d0e2d6c257b38e5e43f8ca3e03ccf1a24bc023ba6543e7bc5bd8e3a82525b30d9f34505c17a7443a3b35b8d88f3c2638359819726fe395224cd7301194dca428aaf21121f4f43d1fd6e6a960bbdb64506bddb779dae519ddd57dbf44f7ed1abfb1cdfa246b2930b55e996bcda8b310b3a0fad83c565f4d4c0061039d0914c157dcfa0e9381bf0dfac663590f7d523682423f8fd03457d9d2205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-95-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85535d6f9b3014fd2bc87b6d02a4212191a2354ae99a2d210b9056d33421e35ca85b822936e9aa2aff7d17d374ad2ab54fd8bee7dc73ee074fe48e175b322609cfee6ba81ebfdc8a849c105034c3d745f1c3fcbee77fe566fd60ae45e5881f59b89e4c10c11b96a4bb32878e1475c5408e376137ab445dd24a880e26ea8c9c8e3db0ec91ed3823d7b55ce449c8d3052fee907da35429c7a679d4ee66426439d092cb2e13bb977773df33cb4adc0253d27c2b69a28a343f16fd9a0b461517c56413a2815a4215c38ef21c2dfc676e93b3b7a9bb9ceeba1982f79c01654cd4856a6c610a268a946775a5b392f113d1365f1d48e82dbc59643091d7bb222ee80e4e8c2d5534568f251817c16a69ccfd8b55b09c46f3951f87b34b6f39edce568bcdd20f8deb4b2ff00c45931c34d7981867fae6e305f5b720152fb47ad43c37cacf0d9abf1f4b434069096d301e5a036abbd6284993214bdd5327492d481237193af434b1d8a80ffd6d0214795a54b368218a41ca8660831d27bd9e13f7591f62d7a64e3ceaf5fbce60c006dba1430e27e4a1e20aceb92c85e46d87c875308fbc380a36fe6c1a79ba8494d6b93a6f8d3505bcf6a8b040047d50d3a18972814a4dbbe77ee405d35934bff2da092f20a3ec31bcc719a7349780685a61f314544bb1c586117fbaf4ce11ac27f6f3189464fcfb89343d6f5cbc6af90b3dc201367695fe92300ae6fe376de788b8a279ad21fbf6404ab47c83b5a1ebc31f44e292b659c87ae305bf48fb14400a1514ecf3692258073efdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef7993db47a83de29d1e04abd8bb976efd8b5264793117650a8e78adac5c7425bb15abe803088e3f775b70eff00e944f89078040000",
    ],
    [
      "ETag",
      "LnK/JvixsUQw/Qor5oKgSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcbf8284d5a636f247dc0b66a4d6f529a684cd3ac30502a30b8bbd890a6ffdd59d46ad4445f6066f86639e7c01e9ee22c001b1ee3e8b940599e44a86f4de1a22a12adf89653a6102c402d2226efcffaa70be7668aed0185773b3f2a676e3beaf59850fe065301f61ec218934081fdb0874ca4c86b3e25459aadabce025de666b8f0dcd1f48afb9402d34f97e3b173311ec2c13a2e06428b75c5ff636d75b0604b8f2e862831f3d168c9256dd1d723635389344fb0a6a8903e2aa8e0ea4124a9c88524aaf1a4d66dd61aad7aa3db6836bb9d4ebdc36042bed03165cc2e17ac0f346991b8b46397d0624056251b0eabeb0b8fe3a03262cad1d46b9d57fabe022c2d8c135cff0db2de8de0cff081bd47f09d132915993e5297e399f3db719ce9e75103c71bfe2094e6a48e88379a0c179e33991b6ef5eefda2d4a8e69238488526c346fdbcd36cb7ea6fb1f6c944cdefb1b52cd0025ff0df711d6bb04391283cbc022d0e80a47b020000",
    ],
    [
      "ETag",
      "Y2C+SAJNe7DofXwcgyOR7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ? LIMIT 1",
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
      jobId: "grouparoo-job-96-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536d6f9b3010fe2bc8fbb2494d020d492052d445295dd952d226a455354d893186ba054c6cd32dabf2df7798a62f9bd67e40c0ddf372773e3fa03b56c4688822966e2a2ab61f6e79840e10553885a8fb3516572c3d35b7bffcdf77dfd4e63ae0f862340204ab5912e765465b92578250395c2edaa9e0558905e72d106ab9fd96d5372dd7eaf55cc7311de0499a255356dc01fb46a9520e3b9dbd773be53ccd282e996c139e3fc53bf7879d52f05b4a94ecbcb6ec808becbc6d7a94718215e3c568b980022a49c58ae6986550c233338e3ebf966e339cb75300df33423121bc2a545d1648105e242cad845645c307a4cb7cf18116ded49b84c664b60cc28f6b9cd7e4f527034b63b512545699324ee6b333635d82d70d9654ae8dab536fee4144f0846574c5e2b531328e8c71706c187b091d99fa677e685850484ca562852e23c45146eb121e27e5ff7b3e35012b306b92ab81d9c79663ba51120d48e2747b5162d22872a2410f772393b836b5e38862e0a95a5db370c10bece0c338b269cfe97729194476d77449d74ea29e13eba7ef38ae33c06877807e0aa6e831932597ac1917ba9afba1b70ae7cb60320e3ddd46826124c74d7175132feb54d02480dee86b57671907a77af67e107af3f124f42fbde6b8a734c564bbd8c08127389314d058e09c2a2ace780c4343e7b3851ffab3603c05863ec3f33d42a2e1f7876742b82df594957ed75e7d5bfbef019738ab34e2bef94016daed0efeaf70329d8ddfd768f700b1fb0120d8f046015d2cbdf9356a42739a50410bf2fe06005827debda8fb5b0358b837602315fcc3be11599b10419bbd63b9aeb0610fccae63d9488385fa3b675b87ce7ec0b546ad48735aa8c78e9a5b53cf4ba72af9048224ac4be0075f20fb076af8c36eb5040000",
    ],
    [
      "ETag",
      "9JdrWigH0yxIzkKtqYNoaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "90d14e83401045ff657c2d0998b442933eb4865412248ad6c69aa65960a02030b8bb68b0e1df9da5beecccde3d3bf7662ef059b6192c21298baf1ee57053a07e364d8caaafb5e2d251ab1066805a144ceef3c3dd76e876bfc99b08ced56373788f9cf56ac5844acfd808585e202fb1ce142c3f2ed08a06f9dbe924a7898ce9a1334a10bdfa5b3f66a1a1cc08d12e0cd79bd087f138cea0a224c61c25b6299a919da40a531d98b44a345d8d96a25ea6a86082a7874252df094964b162790bcb59d88ee7cce79eebda2e8335a54297d432bb7b01b6d1a4451dd30f8705870139b59c3b9fce6f966f4da0e33fba1934aa2749ecabd058da57fb7b32913447d5b2c719a48297f150eaeb7dfc037601eb4c69010000",
    ],
    [
      "ETag",
      "WfZ7GypUzbVaIhjMmZYN1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9b333112c97bdd510199759283a2e2f4d811a2b084849a02cfefbccce1f9c5fc0aa8a4b49a7bee11df8048a69f6b6da06bd75d067de25a68c354e688952c403a9bb519f932427743168e994c5deb08eecd6b472956668a3e72d1ab24c848fab5e4308e72f4c8e73782eda93fead66b98add7d08f16e4ceb7d843e0c4f69c47ccc8ec2ced9c3f0c432c3416dee2f57bff4f0e8b7111269b20a738c50d9076492d0eaee78ea71624717e5ca8ec4934ae141af59f1f3c42bc2c242c5605edc26061bc097418c5c52f19ee9d0b637e0bf492735f0f7f5c0d9c847f0fa03e3810eed05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:04 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-97-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fdb3014fd2b91f74a5b079a36a9548dae8451a94db72405a6698a6cc709a6691c62078650fffb6e1cca4048f014dbf79c7bcefdc813da8a32451344457ed7f0faf1cbada4e808714d72788daf081d6fb7babebb9d5de3bfd7df5451e6f9740a08d1b214d95505ef29d9d48cabc926eae7b56c2a524bd983443d6fdcb347d8f66cc7f15c17bbc053bcc896a2dc02fb46eb4a4d068383763f97322f38a984ea33b97b791fdc1f0faa5ade72a6d5e0ade40054d4e063d1af8564440b594e3711186814af13be23a2000bff99293d7d9bba2fc8ae9f03f85e304e18934da95b5b9082c9321379539bac68f2848ccd570714f94b7f1e5b4c16cdae4c4ab2e347564a3449f463c5adf370bdb216c1f93a5ccde2c53a48a2f985bf9af5e7ebe5661544d6d5851ffa9626b4e0866b4dad53730be002fa29575a94463d6e9f5be5e7062dde8fa52580b4e25d3019e311b15decd18c8e59e69e3834c39c52978e1d724231f3867c98524e8067440d8b94b21c8e862473184db0cb46c9d06638f1dcd4496c8c9dd13065147b18ed8fd0432d343f13aa924a741d4257e122f69338dc04f359ec9b1232d214faac33d616f0daa3860201f4414dfb362a2428b5ed5e04b11fcee6f1e2d2ef26bce439618fd11dcc382385e2802635344ff37a255368180a662bff0cc066623f0e418526bf9f50dbf3d6c5ab96bfd06318606b579b2f8ae270117c37760e884b52340672df1d5005966fa03670bdff034858d22e0bfab9f1c35fa87b0a79c66b5eb2cfa7096013f8f45f3b2c3e6061f5414669b8c3ee30d58ab09a773b244cb9cfec311e3a182303aef5bbd8c83e3e74adcdd166e43b5eeae78abac587423bb146bd802008e30f4cb7f6ff0037f1f83c78040000",
    ],
    [
      "ETag",
      "TWab7kktrqjAX0xXBslngg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d92dd6e82401085df657a0b09261585c40bb4b6dae01f627ad118b3c2a058607177696b8cefde596a6dd336696f6066f86639e7c0119ed2220617d6e9665fa1385c6d50cd7411a0ac3225e956f2422218808a6d886ceed17f70a66c12f7eeedb51a6c676afb3aeb748890d1167306ee119214b35882fb788482e5486b11cfaabc58d59d01ea50eae13c0c86e33bea731eeb7ebcf07dafebf7e1645c1663a6d8aae6ffb1b63c19b0e3eb0013145844a8b59482ef3052436d53b2bcccd094bc12114aa8e1fac146f0aa6482739326a6d3321bb6d5701acda6d36e5b6d02331e3195f282d8c59cf481e28a65017f2197601320ea920c27f5f599c6695c1bd1e5701cdad7b5beaf00494bd20c577f83a477cbe8337c60e708be732ce755a12ed4ad3ff17e3b8e32fd3ceac60bfb3f08a928a90b120e47fd79e88da69a5b9ebd770f0ae554700a52a2ceb0615db79b2ddb7a8fb5c775d4f41e57890a0d8818fd1d8354819bb04ce2e90d40aaeaa67b020000",
    ],
    [
      "ETag",
      "5qeLW9PaOdCJ6btHhQthxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` > ? LIMIT 1",
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
      jobId: "grouparoo-job-98-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53ef4fdb3010fd5722efcba6d126294d9b54aa5857c288565a6853d0b44dade35e82218983ed3031d4ff7d9784f24348f0619fe2dcbd77efdd9d7d4fae79be210312f1e4a60479f7e14a44648f80a60946bf1e25e6d294cc3c3bef9dfe9d7dfe5ee8e3a3d17088085eb114cd8a145a4a9492811a2c17ed448ab2a0528816166a796ecbee59b6673b8ee7ba968b3c05693ce1f935b22fb52ed4c03477daed448824055a70d566227b8c9bb71db390e20a9856e64b49135594f9b6e8412a18d55ce4c3e5020d940ae40a32ca53b4f0c4dc445f5e966e739ab51304df7206943151e6bab2852598c8639e94b2ae4a06f7a4b6f9ec4016fec41f87c678b69c861fd734abc8eb4f0655c66a254195a9368ee6b313635da0d62555a0d6c6c5b13ff7312245cc5358f1cdda181a07c6687a6818ebeaef576959fb80a149701284868d4e36a034cf6b1f218d52a83c3c8c2a78bda08a4035aa35c955dfea51dbb5bc288efa2c76f79d28b6208adca8efd0fdc8625e17ba9b0828f27455bd66d15ce48c793d9775a903cceeb10eeb5ab4ef44767fd375a23eec3b2ca2d4b33d46b67be48fe41a0eb92a84e2cdbcc8c53c08fd55385f4ec7a3d0afdb8829cee4b0315735f1dca7c62611f4465fdb2acb052a55c30fa6a13f1f8dc3e0dc6ff63d8184b2bbc50d6e3ca6a90244534933d0204fc40687464e678b200c66d3d10419f5124f770845063fef9f08e15d514f59d7df4aabd7adf57780739a9635e2b639109b6cb77bff57c1c112bf1182d7bb6193b3a53fff419ad01c629090b3f7b78fe03af1ee2bdd3d19c4e2a34119a5f11fef1a53950893d0dc399ed5fe1a365e27bbdf253558ea5739a7d3d90db7aa5155840c72fdd051f364aa59d5a9523d82308957651a4cbf61f61fb4a9b342b2040000",
    ],
    [
      "ETag",
      "BFg/U/rc/QV6PzO+KptHFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "83401085ffcb7885046caa40d2831854124214eda1314db385016981c1ddc58610febbb3b4979dd9b7dfce7b9909ce75574000c7bafa1d508e7715ea0fd364a886462b2e3d750ac102d4a2627215a7618dfe2ec1669715b44a1fcffdcb65b36142e53fd80a0826286b6c0a05c1f7049d6891bf1d0e7299c8981e7ba3c4e957f41a652cb4541821dd26c953984430ef670b4e74ccb044895d8e66642fe984b98e4d5a25dabe415bd1207354b0c0cb432569e88524b259b17dcf761f1cd777d76bdff31c8fc18672a16bea98dd7e02db68d2a2c9e8c261c165402e2de72e97f38fe57b13687f43c351a37a97c4be0a8da573b57f26134973542d07b42017bc8cb75a5feff33fa4b190a969010000",
    ],
    [
      "ETag",
      "3INBie9YLelYRdo3N7kpFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "72",
      "82",
      "300000d07fc9d97180c892de044bd8a520205c3208c1d2a2ec6ba7ff5ea7ef0fde0f48b38cf63d19ea6ffa046f604d39b4cff6662dc970a6ab978e4b145451731da586c96ddb920d822369f290db9a57afcd67d5f0b131e66dc484957eaac74ad62dccdad050632dbe7f6de7b3a4bb4b25a72bc13974c3e4c35158911314820e363c5c94ad191e93797c169867b55531b68617685c7871fb59e4beb084e2cd12a707038f6a270bec294812c7c0e23dbaa05b3ec77ed2d27a74bc694ae13ba76118a0821ccb19ec005d9ab2a33d295f33c823b403ff4d32ac0d7d5d659a76b403bf7f0605fe7705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-99-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "fd2b64f6d5b660690b4d9ab569716dd252a554b3d96cc8305c701418961934aee97fdfcb605d8d893e3133f79c7bcefde099dcf332215312f3ec4f03f5d3b73b119313028a66f87abe74fdbbcb75985cd6c5e4efedf58d7da5e8e36c8608deb2242daa1c7a5234350339ddeffa592d9a8ad642f43051cf757bd6d8b45c6b34721dc7749027214fd7bcbc47f6ad52959c0e0647ed7e26449603adb8ec3351bcbe0f1e4e07552dee802939782f39401539f85cf47b2e18555c94b3fd0e0d3412ea080aca73b4f09f99c467ef53f7392dfa19821f3803ca98684ad5dac2144c9429cf9a5a6725d367a26dbe39909db7f616a1c144de146554d2024e8c842a1aa9a70a8cf360bb3156fef936d8ccc3d5d68f768b0b6f33ef2fb6ebfdc6df1937175ee0198ac63968ae3133cef4cdc70bea2720152fb57ad83eb7ca2f0d5a7d1c4b4b4069095d309a98636a39a61ba7f184a5ce7014a726c4b1134f4674189bccb5c14e62a0c8d3a29a454b518e2cd78e87891501d869640fad51e426f130b2e8c41a33db01d749c8e1843cd65cc192cb4a48de7588dc04abd08bc260ef2fe6a1a74b486993ab6567ac2de0ad47850522e8939a0e6d940b546adbbdf2432f982fc2d5b5d74d780d19654fbb3f38e394e612104d6b6c9e827a23126c18f1e71b6f89603db1cb635092e9af67d2f6bc75f1a6e5aff41007d8da55fa4b7661b0f27f683b47c435cd1b0d79e80ea442cbb7581bba3efc46242e6997855cedbde027e99e0248a186927d3d4d04ebc097ffda71f1118bab8f3252e11d7787c95684d5d0ed10d7e5beb027e6c4b46c",
      "a2c1b5fa10b3c6a7c7aeb539da8c5040a95e2aea161f0bedc41af90ac2208edfd7dd3afc03d510190478040000",
    ],
    [
      "ETag",
      "FD9NjPLTdPrm7zhVW4Qtaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8d92414fc2401085ffcb782d11146a69c2a1284a0d2042890763c8d24e4b71dbadbb5b4c43f8efce5644a3267a6967a6df6cdf7bed0e9ed33c02175669f252a2ac4e12d4f7a698a12ab956742b44ae102c40cd12221ff8d95a56c5e9f9e676a8b613ed6fb6ced8ebf58850e11a3306ee0ee21479a4c07ddc41ce32a4b550f032cb97756781ae0a339c07337f72437d2622d34f16a391d71f0d606f1d1723a6d9b2e6ffb1f6b4b7602356338c51621ea2d15248b1c150fbc6a66259c1b1a14429435450c3f583448ab2605288064d1add6ea365375bdd56a7d3759ca643201721d3a9c8895dcc491f68a1199f895772093601b22ec9705c5fb7344ea3da8829fd4960b76b7d5f019216a71c977f83a477cde8337c608708be732c1365ae8fd4f5e8cefbed38caf4f3a82b2f18fc2094a6a48e48e08f07f3c01b4f0df774f0deaf34aaa91414a4429361abd9763a1776f33dd64b61a2a6f7b85a966841c8e8ef18a61adc987185fb37a7aa8bdb7b020000",
    ],
    [
      "ETag",
      "Wl2hryp/3jJHsvNtIjv8MA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-100-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "ed",
      "6f",
      "9a",
      "40",
      "18",
      "ff57c8edcb965405114413d319651b896287d866d9163d8e077a2d72943bba368dfffb1ea0ae6d9ab59f38eef9bd3c6ff740ae791e933189787a534179ffe14a44e48480a229deba6bfd426777f69d3bafeccc5c4a3f9d2fd3c90411bc6649ba2f32e84851950ce478b3eea6a5a80a5a0ad141a18ea1eb1dc3d68d91615923c7d11d244ac89205cfaf917ea95421c7bdded1bc9b0a9166400b2ebb4cecffddf76efbbda21457c094ecbdf4eca18decbde37a9a09461517f964b3c60c2a09e516f6946798c313358e3ebfd4ee72baefa608bee50c2863a2ca559d174a3091273cadca46958c1f4893e7b30359bb0b77166ab3d5c60f3feee8be26ef3e69546adb6d09b2ca94f625582db55d815e975482dc6917dfdcc0c59b52243c832d8f77da443bd5a6fe5c7bc2edb45f95ae9b808185b7f442cdc07c62908ae74d36218d32a83379ec98f77a5035812ad46a83dba16e53c3d14751120d59e2985694e810454e34b4a819e96c3480411c01459eaad51b16cd45ee0c681c8ffa7d338a1d6a590333b62d6aeb402388fa311b51c3306327b1c9e184fc29b98239978590bced1ab908bcd0dd86c1c69f4d43b72923a1d899799b5c5dc4f33c151689a037ea3ad4512ed0a91e81e7876e309d85deb9db4e7d012965f7eb1b9c7b42330988a625dd83827229626c1a395badbdd05bf9d305329a519e1d11928c7f3e3c11c2fba2e9b26abeb5973d68fc8f80739a550de2b63d10831c0e27ff57588781e77f7d5b625a60b528f31b51b8e9ad02f9be71831fa4bd0a20811272f6fe0620b809bcff628faf07c1f87ed0472a",
      "fcc78563b2766125b48bc7f74d992d7ba83ba66e91065caa5731a73f3c76b8d6a815610fb97a2ca97d3d75c39a5025ff813088fbe237ad3afc0514c001f7bf040000",
    ],
    [
      "ETag",
      "ES0W0cx6xEDu6l3MsNgDMg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b",
      "83401085ffcbf41a41a12926904312426b119bda7a282584cd3a5a5375ecee9822c1ffde59d3cbceecdb6fe73de60adf559bc3124e55f9d3a319ee4ae457d7a468fb9aad948e5a8b300364550a59e9e7220ba34bb98eda8fbddd76bc4d5ed6ab9510567f61a3607985a2c23ab7b0fcbc42ab1a946fc7a399260ac643e7942879df3dee52111aca9d906471bcdec43b180fe30cce744ab14083ad4637b2337446cd914b6b55d3d5e859ea8d460b133c3d9486fa4e19224f142ff07d2f78f08345309f2fc2d00f85ac492baea815387b03f1616255a7f42b692110c04cad042fa6f322f2bd4b74f8473703a3dd1b12638bced3bff96fc96562c9caa6c7196825db78aaf8761fff00a6687c8d6a010000",
    ],
    [
      "ETag",
      "icJfU8IvgAInYPsCptCNOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dcfc97282300000d07fc9599d226b7a130159820b02c289410c3b120296c5e9bfd7e9fb83f7067192e0be8f86b6c24ff00de6780b37c9c66a25991d1fe958a7d133979886a8cec0c677d7bf7d953cacb3b3349aebaa668c5777b5881a4bc58838a131d0ec9243dffb71773812617633512c51be64fe85e17b55d7c4ccb3cb2b2d1cbcbba565d43042f842d4f439ce103dada2f8e7ae3961ae95684ad6caf668a7896dc1c7142af23e27bcbe40d71777011b0502691077d1952063b9c23b75272f4367535ad6ad4d02615f8115c0132928eea3e23363790857e0bf190d33c19fab8c638a29f8fd033c76640105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-101-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553db6ea33010fd15e47d6d12c895448ab6514a5ba4846c81b47bd10a193310b704536cb2aaaafcfb0ea6e9b6aab47dc2f69c33e7cc8567f2c08b84cc48ccb3c71aaaa72ff72226670414cdf0f56ac77797bb60747bbf707796fc59db6bf6fd663e47046f5892eecb1c3a52d4150339db06ddac1275492b213a98a8639956c71a9bd6d41a8da6b66dda489490a72b5e3c207da7542967bdde49bc9b0991e5404b2ebb4cec5fdf7b877eafacc43d30257bef357b28237b9fa87ecd05a38a8b62be0dd0412da18a604f798e1efe5193f8fc7dee2ea7fb6e86e0036740191375a11a5f98828922e5595de9ac64f64cb4cf370712382b67191a4ce4f5be880aba873323a18a46eaa904e3d2dfac0dd7bbdcf8eb45e86ebc28585e3beb4577b9596dd75e60dc5d3bbe63281ae7a0b9c6dc38d7370f2fa89f8054bcd0ea61f3dc28bf74c8fd38988680d212da603431c7d4b2cd699cc61396da83519c9a10c7763c19d1416cb2e91086490c14795a54b368210a1bccfe789a0c223b1e4ca2210316d1210ca2e124b1ecc114c6fdf1901ccfc89f8a2bb8e0b21492b71d2277be1b3a51e86fbde52274740929ad7375d11a6b0a78eb51618108fa4f4dc726ca052a35ed76bdd0f117cbd0bd75da09af20a3ec2978c419a7349780685a61f314546b9160c388b7583b1708d613fb760a4a32fbf54c9a9e372edeb4fc951ee2001bbb4a7f4910faae77a5ed9c10b734af35e4d01e48899677581bba3efe46246e699b85dc6c1dff07699f7c48a182827d3e4d04ebc0e77fdb69f3118cbb8f3a52e11d9787c9468555d02e11d7f5beb027e6b46f9944832bf52136980c4f6d6b723419610f857a29a9dd7cacb415abe52b0883387f4fb7ebf817c35388877b040000",
    ],
    [
      "ETag",
      "GhihFhS5VjAIh1sZu8McXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7a8b09246a91c40bb5d692f88b78d518b3c2a06b81a5bb8bd61adfbdb3d4daa66dd2dec0ccf0cd72ce81133cf13c060fd67cf35ca23cde6c50cf4c11a02a53ade856885c2158809a6d889cc6f1cb7ecded5efd7532d872fbd84b66d9a1dd2642455bcc1878274838a6b102eff10439cb90d622919659beaa3a0bf4b130c37918f8e301f599884d3f5e0c879deeb00f67ebba1833cd5615ff8fb5e5d9829d580798a0c43c42a3a590628791f68d4dc5b222c59a12a58c504105570f365294059342d46852736ca7e6346da7e5341a2dd7b55d22531131cd454ef0624e02410bcdd2401cc82634099055498e93eabaa7318f2b27a6f4c761b35e09fc0a90b684a7b8fa1b24c15b46dfe103bb64f09d639928737da5ee8793ce6fc751a89f47dd75c2fe0f42698aea8a84fea83f0f3ba3a9e19617efdda3463595829254684274ecbadbb86ddaefb9f684c99adee36959a20511a3dfe3816bf012962a3cbf0145dc84f57c020000",
    ],
    [
      "ETag",
      "Pddxvbi0C4zOGhi0yCfQmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ? LIMIT 1",
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
      jobId: "grouparoo-job-102-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553596f9b4010fe2b68fbd24ab1397c0096acd4716883e4d831c6899ab6b21718c826c01276491b45feef1d20cea1a8c913cbce77ccb50fe486e51119918025b71594f79fae79400e08489ae0adb89ce6c3e472eaff5dda2747674b532d8ff4e5788c0856b304cd8a143a8257650862b45e75939257052d39efa05047d78c8e3ed4745b1f0c6ccbd22c240a48e319cb6f907e25652146aaba37ef269c2729d082896ec8b3a77bf5ce508b925f432885fada53451ba17ee07a98f2904ac6f3f17a85195402ca0d6494a598c333350abebed6ee329a751304dfb1106818f22a97755e2811f23c66495536aa64f4409a3c5f1cc8ca9939535f992ed673fff396663579fb45a142d96c4a10552a956fdee254d916e875450588ad7271e2780ede943c66296c58b455c6caa132991f2bcfb8adf2abd2b41e6060e69ebabea2633e1108c9f2261b9f0629d4993c76cc7d3ba89a40256ab5c18da90da96e6976100766185bbd41106b100456600e682fd042bb0ffd28008a3c59ab372c9af3bc6fc4d190d230b08c5e64d8465f839e09ba6e46d0d3cc3e843dcd36863422bb03f2a764128e9928b8606dd7c885e7facec6f7d6f3e9c4779a32628a9d396e93ab8b7899a7c42211f44e5dbb3aca383ad52370e7bee34da6be7beeb4539f4142c3fbd52dce3da6a90044d3926620a13ce511368d9c2d56aeef2ee69319329a519eed11828c7e3e3c13fcfba2e9b26cbeb5d7b0dff8ef01e734ad1ac45d7b203ad9ed0efeafb0f23d77fefd7d095a60b528f31b51b8e9ad0259ae1def0769af3c88a1843cfc780310dc043e7eb1fbd783607c3fe82324fee3c285a276094b68178f654d992ddbd4b5816592065cca3731dbb0f61dae356a45c820978f25b5afa76e5813aac4130883b82ff3a655bb7f2cc6e7b7bf040000",
    ],
    [
      "ETag",
      "sZCn6gZCTxQ9HBPQ7/rB1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "7c",
      "142298d414923ed8866893a62ab635a9699a2d4c910a0cee0e3648faefceaebeeccede3933f76607f82c9b1c623894c55787babf2a905f6c91a2e92a3672b5d418040f905521a4ba9995b4e52d5da79bfee9278c826af5769e4c8430d907d60ae2018e2556b981f87d8046d52863fbbd761b05e3beb5ca7cb94a1e9254849a722b2cd78bc5fd7491c06577f1e04487148fa8b1c9d0ae6c359d30e3b94d6b54dd56e81bea7486061cec1a85a6ae559ac817c50f835b3fbc0bc2281c8da2f138180b5951a6b8a446e0f52b880f13ab2aa5b3a4855000ed4a097e74e7b7c8814db4fb47a73da379d624c60673d775fe33b29958b2b2eed0834cc96f3c96fcf7befc02599fa8106a010000",
    ],
    [
      "ETag",
      "a/CioZtZo+RVyOz190lTWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "72",
      "82",
      "30",
      "0000d07fc9591cca22a437042d534a2c302a706158c2529660402171faef75fafee03d419ae7789a9299b47800ef80a512dce65b87e87b7929178378ac53c8d27b41ea48d49afd37b7ada3665db0de39a75d0999c0b5efb093ec07723ff4f45eb66a1d1eede0528a19d2a9688943d65d0278e544721ba14a04d41f7f463d969daf4c4ca87a5e4dbe2bda9b95b2c2af5d6d702a331054a350f8498eefc8bf0e9da677b88ac82a28d2b96776f049c6267e985141913f852e3a7886324f9cc3877da05e2c88b7cc031b80d7b1a1784a9ad74c5621dc80ff6632b311bfae7b9c524cc1ef1f7a6439ec05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-103-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "14fd2bc87b5c93404802448ad62ca56ba4846c84a4aaa60919e742dd124cb1495555f9efbb98a66b55697dc2f63de79e733f7826f7bcd891314978f65043f5f4e54e24e48c80a219beee23c7fb7a7775554e17fcc7617b33dc7e1f7a8f93092278c392745fe6d091a2ae18c8f166ddcd2a5197b412a283893a966977ac916979d670e8b9aee92251429e2e78718ff45ba54a39eef54ee2dd4c882c075a72d96562fffade3bf47b6525ee8029d97bafd94319d9fb44f55b2e18555c1493cd1a1dd412aa18f694e7e8e11f75979cbfcfdde574dfcd107ce00c2863a22e54e30b533051a43cab2b9d958c9f89f6f9e640d6fec29f45061379bd2fe282eee1ccd8514563f554827119ae96c63cb85c85cb69345f05f17a76e52fa7ddd96ab159066be3faca0f7d43d12407cd3526c6b9be057841fd1d48c50bad1e35cf8df24b87e61f07d310505a421b8c1d73442dd7f492347158eadac324352149dcc419523b31993780c12e018a3c2daa59b410c56064c2ceb147b1673b2c1e3093c55edfb5638bb24102ae45ed519f1ccfc863c5155c70590ac9db0e91eb701ef971146e82d934f2750929ad7375d11a6b0a78eb51618108fa4f4dc726ca052a35ed9e07911f4e67d17cebb7135e4046d9d3fa01679cd25c02a26985cd53502dc50e1b4682e9d2bf40b09ed8cf535092f1ef67d2f4bc71f1a6e5aff40807d8d855fa4bd651380f7e683b27c496e6b5861cda0329d1f22dd686ae8f7f10895bda6621bf367e7843daa71052a8a0609f4f13c13af0f9df76da7c04e3eea38e5478c7e561b2516115b44bc475bd2f6cc7b26c4fffab8a56ea43ccf1faa7b635399a8cb08742bd94",
      "d46e3e56da8ad5f21584419c7fa0db75fc0b12815e087b040000",
    ],
    [
      "ETag",
      "mT79+jHHpALiGvVY5VB59w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcb782d491ba5d4261e004188800af5600c214b3b2d85b65377b72a21fc77672ba25113bdb433d36fb6efbd76079bb488c087659a3c5528b72709ea3b534c515599567c2ba9500816a016099354ae96af0fe3eb2a77bdb23bc0cdb6d36f2517174ca87085b9007f07718a59a4c07fdc412172e4b590b22a2f16756781de9666380ba6c3c915f73945a69fdc8f46edcea8077bebb818092d1635ff8fb5f9de82352da718a3c42244a3a594b4c6500f8d4d25f232c386a24a86a8a086eb0789a4aa1492a8c19386639f361cd776ce9d66f3dcf36c8fc98c42a1532a18be9fb140d0a44536a517b6092e03b22ed9715c5f9f799c46b513530e27817b560bfc0ab0b638cd70f137c8825782bfc30776c8e03b2772aa0a7da4faa39bf66fc771a89f475db683de0f42698eea8804c3716f16b4c7b7869b1fbc77b61ad5ad244e52a109d1b1cfbc66cbb5df73ed92c99adfe36b59a105a1e0df63906af0639129dcbf01c90e03397c020000",
    ],
    [
      "ETag",
      "ophbxYMKum68pCHekyBF7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` > ? LIMIT 1",
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
      jobId: "grouparoo-job-104-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536d6f9b3010fe2bc8fbb2494d6208242452d54509ebd0f2d225a4d5b44d893107754b30c5a65555e5bfef80a62f9bd67ec2dc3d2f77e7f303b9165944862414c94d09c5fd872b199223029a25181ddc4d4e93999d656a3436cfbe7d5d60f6faeef81811a26229b6cb53682959161cd470bd6a27852c735648d94268cba476cbec5173603acec075a98b4405693c15d935d22fb5ced5b0d33998b713299314582e549bcbdd53bc736b75f2425e01d7aaf3dab38336aaf38eeb492a39d34266c7eb1556502a2836b06322c51a9ea951f8f9b5765bb05d3b41f0ade0c0389765a6abba5082cb2c164959d4aa64f840ea3a5f1cc8ca9b7ae3c0182fd6f3e0e396ed2af2f693c194b1d914a0ca541b5f968b99b1cdd1eb9229505be3e2abb7f43052c858a4b011d1d638364e8cd17c6218db8869d81abf4a4abb80c1a93ff303c3c45a22505a647525010b53a8aa789c96ffef255504a6d1af496efab4c74c970ec238ecf3d8ed3a614c210cddb0efb06e48f9c0063b0a81214f57ea358b65321b8063c560757b56b78f381af3b84fc10e69cf76c2903adc0566831591fd11b92b84868950b954a29918b958fa81b70996ebf9781478751b31c3a94c9ae2aa265ed6a9b14904bdd1d7beca0a894ed5f8fd79e02d47e3c03ff79a1b9f42c2f8fdea06ef3c66a90244b382ed40433193110e8d9c2d567ee02fe6a32932ea6b3c3b201419fe7c782604f7793d655d7f2baf9e5dfb1f00e72c2d6bc46d732026d9ef8ffeaf30a946f0a680452ddaa256cb7450e9374271d11b11f27ded2d7f9026b484180ac8f8fb4b80e03af1fe833d3c1e04e3f3411fa5f11f778eabca8517d0ec9ed8d59d36ecbe690ddc6a3b115ce8bf735d8bd2c3902b8d4a117690e9c7969ac753cdac4e95ea0984495c99b93f3fc5ec1f3c95da23be040000",
    ],
    [
      "ETag",
      "9wDGgM4nnsAC1PKHOjobkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ff",
      "65",
      "fa0a09b44a94c4076d4cb525b6c59ad836c6ac30502c307477a821c67fef2cf66567f6eed9b9377386efa24e21844391ffb4a8bb9b1cf9d536319ab66423a5a1da203880ac7221df9fda60334d07db8fd53a783e2d387fbcdbe693891026f9c24a417886acc03235107e9ea15615cab7fd5ef71305e3aeb1ca72f5367f98c72254945a61b589a2e92c9ac3657771e048871833d458276847369a8e98f0d2a635aa6a4a740db53a41033ddc3fe49ada4669225714d7f706ae1f78fed81f0ec7a3913712b2a4447141b5c09b35880f13ab32a693a4055f00ddb7123cebcf5f916f6da2dd3f3aeb18cd8b263136683dbdabff3dd94c2c5959b7e840a2641b8b82aff7cb1f2bb9af9a6a010000",
    ],
    [
      "ETag",
      "YKu6UAd4XZNS6OwHtgJ3Xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff1dcf4b7282300000d0bb646d1d7e8a74470c95621115ad864d268450904214c2b7d3bbd7e9bbc1fb019431de34448a8257e0158c54b3e66cbe152ba8f7bc339168435b8ea6a62aa27824f69409b27fa90c9bc76397257838c340311d0c99d94ed9e0a1b7e974f28673d39a5ffd6d7129e9aa568f7da5941fbc190db96d7cbdc5bb32b65ca447bea957d7f22a7734402962860a352e11f15c82c335ee611e3928d827761a24b1e35e58bdd31f243a7e92625a0a2da5edc157cbce65efaa166ec8543a4be5dbc7c3dabb6d7a30037cb8e7356f48fe9ce90bcb9a81ff2691e39d3faf90d39ad7e0f70ffecbdabd05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-105-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d4fa34014fd2b64f6d5b6d096d2366956d2a23669a902d56c361b324c2f384a1964068d9afef7bd0cd6d5dd647d6266ee39f79cfbc12bb9e7c58e4c49c2b3871aaae76f772221270414cdf0f5a1726f2ec2f9cbd5cb79593c794f8ebbb0ceddd90c11bc6149ba2f73e84851570ce4741b76b34ad425ad84e860a28e65da1d6b645a13cbb627e3b13946a2843c5df1e21ee9b74a9572daeb1dc5bb9910590eb4e4b2cbc4fefdbdf7d8ef9595b803a664efb3660f6564ef0bd5efb960547151ccb6213aa8255431ec29cfd1c31fea2e39fd9cbbcbe9be9b21f89133a08c89ba508d2f4cc14491f2acae7456327d25dae7870309bd95378f0c26f27a5fc405ddc389b1a38ac6eab904e32cd8ac8da57fb609d66eb4dcf87138bff0d66e77be596dd77e68dc5c788167289ae4a0b9c6cc38d5371f2fa8bf03a978a1d5a3e6b9517eebd0f2dfc134049496d00663c71c516b6c4e923471583a1ed8496a42928c13c7a683c46493210c770950e46951cda28528a86d011bf6edd84ea91d0fa969c7e3d164173bfd7ed23759cae8a84f0e27e4a9e20a165c9642f2b643e42658465e1c055b7fee469e2e21a575ae16adb1a6808f1e151688a0ffd47468a25ca052d3eea51f79813b8f96d75e3be11564943d870f38e394e612104d2b6c9e826a2d76d830e2bb6b6f81603db1cb635092e9cf57d2f4bc71f1a1e5eff40807d8d855fa4bc22858fae7dace11714df35a431edb0329d1f22dd686ae0fbf10895bda6621575b2ff841daa70052a8a0605f4f13c13af0f5df76dc7c04e3eea38e5478c7e561b2516115b44bc475bd6f6cc71a38fd21d1e04afd1d1b0e9cd1b16d4d8e2623eca1506f25b59b8f95b662b57c076110e7efeb761d7e035994e3727b040000",
    ],
    [
      "ETag",
      "qrAWHSCzQzGpnwEw7AD1GA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "925b4f83401085ffcbf8282490945e487c68b56a137a852655d3345b18281558dc5d34b5e97f77166b356aa22fecccf2cdee3907f6f0981611b8b04e93a70ac5ee2c4135d5c50c659529494bc90b8960002a9610998eef17e77ecb538bbb5e310d7b437f84afc9c5051132dc60cec0dd439c621649701ff650b01c692ce4599517abba3340ed4abde907b3c1e886fa9c47ba1fcd3dafdbf3fa70304e8311536c55f3ff185b1e0cd8f2f50c63145884a8b594826f3154036d53b2bcccd094bc12214aa8e1fa4522785532c1b9493ba66d39a6ddb4ec8eed389d76db6a1399f190a9941704cf7d12088a2b96cdf80bd9842601a22ec9715c3f9f755651ed44978351d06cd402bf02a42d4e335cfd0d92e00da3eff0811d33f8ceb19c57853a51d7deb8fbdb7114eae75157dda0ff83908aa23a21c160d8f783ee70a2b9e5d17b6fa7504e04a72425ea106dabd1765a4deb3dd74baeb3a67b5c252a342064f47bdca60adc9865120f6f752124817c020000",
    ],
    [
      "ETag",
      "iOZX+S7LtXYBnQcBMSNezg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` > ? LIMIT 1",
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
      jobId: "grouparoo-job-106-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "9b3014fe2bc87bd9a426181202891475594a57d45cba84b45ab729b1c150b7802936a9ba2aff7d07687a51b5f609e4f3ddcef1f103bae159880688f2f8b664c5fda76b41d101628ac4707aecd1f2efa57e7a9dbb113e3d0e49f4ed24ba1b0e01c12b9624699eb0961465113039582ddb7121ca9c1442b440a865e05ecbe861a36f5856df71b00344c99268c2b31ba05f2995cb81aeefcddbb11071c248ce653b10e9d3b9be35f5bc10d72c50527feda9838dd43f703d4c44401417d970b58404a564c59aa5842790e1991ad2afafb5db9ca4ed18c05b1e301204a2cc54950b240291453c2e8b5a150d1e509df3c50f5aba1377ec6be3f96ae67fde90b4226fbe68446aeb75c1649928ed78319f6a9b1cbcae886472a35d9cb80b174e0a11f184ad79b8d186daa1369a1d69da462a08b7d17e971877189c4ebca9e76b06840999543caba3f88426ac8af1382eefed2d5504a2c0b029ae6ddc238683fb34a27610391d8b469851ea50db221d8a837e977543ca08f054a55eb34826326c7571c7c15117db3424b68349e8f4686477ba26b1acd0ecdb8e437bb6837607e8aee08a1d71990bc99b91a18b85e7bb6b7fb19a8d47be5bb7111118cb5113ae6ae2654e054d02e89dbe7655950b70aae6efcd7c77311afbdeb9db5cf984c524b85fdec2a54724910cd0a4202953ac988a108686cee64bcff7e6b3d10418f53d9eed11120d7e3d3c13fcfbbc9eb2aabf9557af5bfbef01e724296bc4b6f94106daed0efeafe07b5377e98fa667efab98d8c42d6cb60ccb37cc81d11918dd36c6f812c4ff001196bfd1453f56eee2276a8e162c6205cb828ff702c075e1e347bc7f50008627053eb09d8ac31a06b272090ad6ac234febe61bb66d58d8",
      "b1510d2ed49b9a69e1fddc2b8d4a91a52c538f2d350faa1a635d2ae513088ab045336ff61daaff00e42fb856d2040000",
    ],
    [
      "ETag",
      "FIbuzZ/KjpEf0KFdafBHfw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d90d16a83401045ff65faaaa02da646c84353a42648686c038512c24647ab554777d71611ffbdb3a62f3bb377cfcebdcc04df659b4100d7b2e80794e35d81fa689a04d5506bc5a5a3562158805a144cf65e8e0f51ef8bf263bfcf1f9d7c882a3c6e364ca8f40b1b01c104798975a620f89ca0150df2b7cb452e1319d3636794dde13d7c0913161aca8c7038c5f1d3360e613ecf1654744d3047896d8a666427a9c254ef4c5a259aae465bd1205354b0c0cb432169e88424b259b15d6765bb2bc75dbb9eb7f67dc767b2a654e8925a864f6fc03e9ab4a813fae5b4e03220979683e7cbf9c3f2bd4974fe47b7a346f52a898d151a4fe7e6ff4c2693e6ac5a0e68412a781b51a96ff7f90f5ad3bdab6a010000",
    ],
    [
      "ETag",
      "q5fe3Hq8aiXJJf70fuHjeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9",
      "599cb058496f40d9142aa858d24b06314040d9cbe6f4dfebf4fdc17b82288e69d791be2a6809dec11c09681daff795ac8a230d8e8b7de43d13365f8fd9d1ed5bd50d43aa062ace7721345c4bce359e093a3ce32c0fb76f18116e82903fa40e4bb06a64fe2299415d9caed1be485db4c88ebb49e749428aa5e11f3d61b810c54a63cafd53ba7c6b36f6fbcb2ee398ac99de629c17ebb46d9a6028adb29ad88813c9bf52b13c94f6183079468e3429c287d71a37c2c17b1e0d0f07913c347a7db4c10ad0a9662ded087bcdc40d422bf0df24fd5cd3d755a5514b5bf0fb07841a466a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-107-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "a3",
      "40",
      "10",
      "fd",
      "2a",
      "64ef5f5b682b059a346753519bb45429552f970b59960157298beca231a6dffd86c57a1a93332181dd796fde9b1fbc92075ea66442129e3f3650bffcb817093922a0688eb7b7d2047179b63db7579175e7cfcfb7e1fcf66a3a45046f5992eeaa027a5234350339d96efa792d9a8ad642f430516f6039bdc1d81a7803dbf65cd7729128a1c896bc7c40fa9d52959c98e641bc9f0b9117402b2efb4cecdeefcda7a159d5e21e9892e6674d1365a4f98deacf4230aab828a7db0d3a6824d431ec282fd0c33f6a9a9c7ccedde774d7cf11fcc41950c64453aad617a660a2cc78ded43a2b99bc12edf3c307d9f84b7f1e194c14cdae8c4bba832323a58ac6eaa502e32c5caf8c4570b60e57b368b10ee2cdfcc25fcdfaf3f572bb0a36c6cd851ffa86a249019a6b4c8d137d0af080fa2948c54bad1eb5d7adf25b87165f07d312505a42178c1d6b4c07aee52559e2b0cc1dd949664192b88963d3516231ef188ed30428f2b4a866d15294e9d876c7a364183bd9d88b8f6d97c69ec70631821d673870d2e1d022fb23f25c7305a75c5642f2ae43e4265c447e1c85db603e8b7c5d42469b429d76c6da023e7a54582082fe53d3be8d72814a6dbb1741e487b379b4b8f6bb092f21a7ec65f38833ce682101d1b4c6e629a85722c5869160b6f24f11ac277679084a32f9fd4ada9eb72e3eb4fc9d1ee1005bbb4abfc9260a17c1b9b673405cd3a2d190a7ee835468f90e6b43d7fb3f88c42dedb290abad1ffe22dd550819d450b2efa789601df8fe6f3b6c3e8271f75147",
      "2a3ce3f230d9aab01aba25e2bade37b6838f35221a5cab2f31d7b60e6d6b73b4196107a57a2ba9db7cacb4136be43b088338ff40b76bff170546e6a07b040000",
    ],
    [
      "ETag",
      "Xs/eoPFUG5MT0hECGURCXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bc2d499b4081265c1441250262295e680859dae90fb6ddb2bbd534847777b6221a35d19b7666facdf69cd31ee0392d4270609bc6fb0a457d11a3bad78587b2ca94a45bc90b8960002a1613b9180fc3c7e5be5d8723fbe1b63f4a645215f783011132483067e01c204a310b25384f0728588eb416f0acca8b4dd319a0ea520f97be37995f539ff350f7f3d574ea0ea763381ae7c59029b669f87facad8f06ecf8d6c3080516016a2da5e03b0cd444db942c2f336c495e8900253470f32016bc2a99e0bc45939665765b966d5a7dabd3e9f77a668fc88c074ca5bc2078b52481a0b86299c75fc926d80488a624c751737da1711a364e743999fb76bb11f815206d519ae1e66f9004278cbec30776cae03bc7725e15ea4c5d4defdcdf8ea3503f8f1ab9fef8072115457546fcc96cbcf4ddd94273eb93f761ad502e04a72425ea102db3ddeb746df33dd74baeb3a6f7384a546840c0e8f7b849153811cb241edf00c33c3fd17c020000",
    ],
    [
      "ETag",
      "PEBdZSq4ydD6VK9DhshunQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` > ? LIMIT 1",
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
      jobId: "grouparoo-job-108-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff8553596fda4010fe2bd6f6a55503d880c120a114254e6b89406a4ca25e82f57aec6c637b9ddd35511af1df3bb6430e452d4f9899ef986b1fc80dcf233226214f6e4b90f7ef7e8b901c11d034c1a8f3f1cab9165b9fb1814abfffb929f42dc8bbc90411bc62299a1529b494282503355e2ddb89146541a5102d146a59a6d3b206a635b26c7be438a6834405693ce3f90dd2afb52ed4b8d3d99bb71321921468c1559b89ec29ded9763b8514bf8169d579edd9411bd539e07a9c0a463517f964b5c40a4a05720d19e529d6f04c8dc24fafb5db9c66ed04c15bce803226ca5c5775a1041379cc9352d6aa64fc40ea3a5f7c90a53b734f02e364b19a07ef3734abc89b0f0655c67a2d4195a936cefcc5b9b129d0eb9a2a501be3ea8bebbb189122e629ac79b43126c6b1319d9f1ac65ec2f8599a660f303cf3cebdc0b0b09a0894e6795d4b40c314aa3a1ee7e5bd5d5345a01a1d9be47a680ea8e598a3300e872c767a76189b10864e38b4692f34d9a80ffd28048a3c5da9d72c9a8b3c1a38a3381ada76177a76d76211336dd6eff6cc0183c88ccd18ac2ed0be457647e44e720da75c1542f16666e4caf702771df8abf9c93470eb36628a73396d8aab9a7859a7c62611f49fbe7655960b74aa16e0cd03d79f9e04dea5dbec7c060965f7cb5bdc7a4c530588a69266a0419e8b0887462e164b2ff016f3e90c19f5222ff60845c63f1e9e09c17d514f59d7bf95d7a05ffbef0197342d6bc4b6f9203885ddd1bf15ce668be9618db68d88dd2f04e19d370ae4ebcaf5bf9126e4430c127276f802105c270ebfd7fddb4130be1ef4511affe3c13155b93009cde1f1ac2eb1610fadc1b067931a2cf59b9c33eaed275c69548a9041ae1f5b6ade4e35b03a55aa271026f15ee6defc3366ff023dd261b1bd040000",
    ],
    [
      "ETag",
      "8+W8hovRcc6slZzkptqerw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "2d90416f82401085ffcbf40a2934d12089076c4d6b638cc57a6a8c5961a02830b83bb4a584ffde59ec6567f6edb7f35ea6874b51a710c2a9c8af2deaee2e477eb34d8ca62dd94869a836080e20ab5cc8787be1ecf73e8a32de5e77afe7f467fa1445f3b91026f9c44a41d8435660991a083f7aa85585f2ed78d4e344c1b86bacb2dabc2f9f97b10815a556d8ecd7eb68b15ec270181c38d329c60c35d609da918da63326bcb2698daa9a125d43ad4ed0c0088f0fb9a6b6519ac815c5f5bdc0f5a79e3ff32793591078819025258a0baa05deef407c985895317d4b5af005d0632bc1b3f1fc12f9c1263afca38b8ed16c3589b141ebe9ddfc1fc96662c9caba45071225db7829f8761ffe005f189b846a010000",
    ],
    [
      "ETag",
      "RPktfz/AAftPqSJjdx6DAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7fc9591db658d35b295b5440817128970c8da144b6b095a5d37fafd3f707ef07a494b2be274353b01abc822555d08eee4ecd415727d618b11357d2e0a3d6492e872c72f7baa9c427c66dcfe843e270e55257a39dd1f24c3d75aff676d75cddc23586bab86b38e272a25074deb6be19c0464c5fe3857cd610b3abe6f02a1123d6ac2e819e3e5a182eb239f3a9289518de79f6e6bc64ef983d543fc86fad560cabe02d397e07e947e94a93b4b5949cacdcc8e79b1d529c2f8fb215b2cdfcd03a4668a56003d82c78c77ac29f331522b401ff4d322c823daf3a4b3bd681df3f923df51f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-109-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "c8fbda04581e9048d11a2574454bc84a48ab6a9a90712ecc2d60824da7aeca7fdfc5345dab4aeb276cdf73ee39f7c113b9e7e59e4c49c2b34303f5e3a73b919033028a66f8faadf0cdabab3f7797b7f6617310cd7e39ba2fe6b3192278cb92b4a872e849d1d40ce474b7ed67b5682a5a0bd1c3443ddb9af4ecb1654fecd168e2ba968b440979bae2e53dd27f2955c9a9699ec4fb9910590eb4e2b2cf44f1f26e3e7c36ab5adc0153d27cab69a28c343f50fd920b461517e56cb745078d843a8682f21c3dfca3ee93f3b7b9fb9c16fd0cc10f9c01654c34a56a7d610a26ca94674dadb392e913d13e5f1dc8d65b798bc860226f8a322e690167c69e2a1aabc70a8c8b70b336fce06213aee791bf09e2ede2d25bcffb8bcd6ab70eb6c6cda5177a86a2490e9a6bcc8c737d0bf082fa7b908a975a3d6a9f5be5e70ef9ef07d312505a42178c1d6b4c6dd79a2469e2b0d41d8c92d48224711367440789c5264318ee13a0c8d3a29a454b5126d688c1d01dc7d4a2c3784807349e3896138fc76cc45287da96c5c8f18cfcaeb98225979590bceb10b909fdc88ba370172ce691a74b486993ab6567ac2de0b547850522e83f351ddb2817a8d4b6db0f222f9c2f22ffdaeb26bc828cb2c7ed01679cd25c02a2698dcd5350afc51e1b4682f9da5b22584fecfb2928c9f4c713697bdeba78d5f2177a84036ced2afd25db28f483afdace09714df346431eba03a9d0f22fac0d5d1f7f2212b7b4cb42ae765e784bbaa71052a8a1641f4f13c13af0f1df76da7c04e3eea38e5478c7e561b2",
      "556135744bc475bdcf6cc77606964d34b856ef62437b7c6a5b9ba3cd080594eab9a46ef3b1d24eac912f200ce2fc03ddaee35f0ba0f8137b040000",
    ],
    [
      "ETag",
      "KmI/QQzjHY1qOqoudD5kmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb",
      "f4151348aa55121fd47a4bd47ac1b44963cc0a03a2c0d0ddc5c618ff7b67a9b54ddba47d8199e19be59c0327d8c759002e6ce2e8a54079bc8950cf4c314755245af12da74c2158805a444c8661afddf1078fb343ff69ecf5a9b7db47d559b3c984f2b7980a704f10c698040adce7136422455ef32929d26c5d7616e8636e860b6f3e9cf4b94f2930fd64391ab5daa32e9cadeb6220b45897fc3fd656670b76b499638812331f8d965cd20e7d3d34369548f3042b8a0ae9a382122e1f44928a5c48a20a4f2a8edda83835db6938d56aa35eb7eb4c26e40b1d53c6f072c102419316c99c5ed926d4189065c98ec3f27ae0711c944e4c399c78b5db52e05780b5857182ebbf4116bc15fc1d3eb04b06df39915291e92bd51b3db47e3b8e43fd3ceabee5757f104a735457c41b8ebb0baf359e1a6e75f1de3e6a5453499ca44213a263dfd6ab7735fb3dd70e99acf93dae96055ae00bfe3d06b106371489c2f31b5ce717937c020000",
    ],
    [
      "ETag",
      "ffFBCcHWQvGXMTGoFjkg5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` < ? LIMIT 1",
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
      jobId: "grouparoo-job-110-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "a5535b6f9b3014fe2bc87bd9a426c012121229eab2942d48b9740949356d5362cc81ba054cb1695555f9ef3b86a617555a1ff68439e7bb9c8bfd40ae791e9121097972534179ffe14a84e48480a20946d36977b9dd565f7d339f5e4daf2f2c9f87d5dd688408ae599266450a2d29aa92811c6ed6eda41455414b215a28d4b26dab65f72c7b603bcec0752d178912d278c6f36ba45f2a55c8a1691ecddb8910490ab4e0b2cd44f614376f3f9b4529ae802969bef634d1469aefb89ea68251c5453edaacb1824a42b9838cf2146b78a646e197d7da6d4eb37682e05bce803226aa5ce9ba5082893ce64955d6aa64f840ea3a5f1cc8da9b7993c0982c378be0e39e669abcff645069ec7625c82a55c6b7d5726eec0bf4baa412e4deb8987a2b0f23a588790a3b1eed8d91716a8c176786b1d77fbf2bcbea300ccdfcb91f1836561281543cafeb08689882aee17156fedb15690255e8d624777dab476dd71a8471d867b1db71c2d8823074c3be433ba1c5065de8462150e429ad5eb3682ef281d38b6ceab8361d400f7a1163561fe2d0721d66c75637ee76a0d7474972382177255770c66521246fe6452e567ee0ed82d5663119075edd464c7126674d71ba8997752a6c1241ffe8eba0b35ca0931ebebf08bcd57812f85bafd9f70c12caeed737b8f198a612104d4b9a8182722e221c1a395faefdc05f2ec63364d44b3c3f222419fe7a782604f7453d65557fb557af5bfb1f015b9a5635e2b639109b1c0e27ffa7e0a0c41f84e0fd6ed8e4c7c65bfd244d6805319490b3f7b78fe03af1fe3b3dbe1904e3ab411fa9f01f2f1b93da8595d05c3a9ed50536ecbeed769a57ae68a9dee4ba8e759caed6d08a9041ae1e5b6ade8c1e569daae4130893785716fee23b66ff0225f30388b5040000",
    ],
    [
      "ETag",
      "lH4OVVuBI/nHjHkW0Iibuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd4e83401085df65bc8504d4362d492fc4a0a2a4516c2f8c699a2d9d22e567e8ee504348dfdd59eacdceecd96fe79ccc0065d1ec21805d919f3ad4fd4d8efc619b144d57b191d25263101c4056b9905cde4e4fe7f81897af4fcd5b42babc0fbff2c5420893fd60ad2018e05060b537107c0fd0a81ae5db76abc7898271df5a255eaea2e72815a1a6bd1596eb24790893082e9b8b0347daa578408d4d867664abe98819c736ad51755ba16ba8d3191a18e1f121d7d4b54a13b9a2b8beefb9fed4f3e7fe64329fcdbc999015658a0b6a045e7f82f830b1aa52fa95b4e00ba0c756821fc6f32cf29d4db4f947c39ed1bc6b126383d6d3bbfa3f92cdc4929575870e644ab6f152f0f57ef90313a076b06a010000",
    ],
    [
      "ETag",
      "tk26qvIjIkJFnKLork4BYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cf",
      "dd",
      "76",
      "43",
      "30",
      "00",
      "00e077c975f550ebc8ee4a583bcc4fb5ac370e91614a900c393b7bf7f5ec7b83ef07e41813c6324e5bd2831720f21ddce2ad4375435d30919977f18bb3dadbabcf3e47657eb2dc140f84cb922764c6baec0395f19e176aa454cd3c96d7c3bd6c4b6c9e6f758768ea14af4e41971efa71f765cb5169ba4ab4b372ddedcd4904964048d2c645b98590c03490731a4c951da053d0dee793c75587088c1a3bf2eb100693ff56d135d1a2243cc6191afd901b7dc9c9554aa4e750bbb471adbc0b561d93ec5b071b40d6a19908cb9ac74cdd43b801ffcd8c8b813cae06c9273281df3f226ac68505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-111-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85536b6f9b3014fd2bc8fbd826e03c1a12295aa384ae4c09d90869354d13b28da16e0926d8f4a12aff7d17d374ad2aad9fb07dcfb9e7dc07cfe84e14099a202ab27dcdaba72fb792a253c435c9e0d57fcc1f1e4f4eb2bb808afef7ed7eb9d027f3d9740a08d1b014d99539ef2859578cabc976d3cd2a5997a492b203893a18e30e3e73f0180f8763d7755c202a9ea74b51dc01fd46eb524d6cfb28decda4cc724e4aa1ba4cee5edfedfb9e5d56f29633adecf79a36c828fb13d5afb964440b594cb71b70502b5ec57c47440e1efe51137afe3e7757905d3703f0bd609c3026eb4237be200593452ab2ba3259d1e419199f6f0e68e32dbd79643199d7bb222ec88e9f5a09d124d64f25b72ec2f5caf2838b75b89a45fe3a8837f34b6f35ebced7cbed2ad858d7975ee8599ad09c1bae35b5cecd2d800be8275c695118f5a8796e945f3ae47f1c4c430069c5db603c72ce08769d314de988a56e7f48538753ead2d190f4a9c3c6033e482827c033a286450a59f004272367d08b71df49e201a6493cee611cd3f1f06cd01b5217277d7438450f95d07c21542995683b84ae433ff2e228dc06f359e499125252e77ad11a6b0a78eb51438100fa4f4d87262a242835edf683c80b67f3c8bff2da092f7946d8d3660f334e49ae38a04905cdd3bc5ac9041a8682d9ca5b00d84cecc731a8d0e4f7336a7adeb878d3f2577a04036cec6af3459b28f4836fc6ce117145f2da40eedb032ac1f20dd406ae0f7f00095bda66413fb75ef80bb54f214f79c50bf6f934016c029fff6dc7cd0730ec3ee8280d77581ea61a1556f1768984a9f7853dc2ae3bc0c8802bfd21361ef68e6d6b723419f98e17faa5a476f3a1d256ac56af2008c2fc03d3aec35fe218d9af7b040000",
    ],
    [
      "ETag",
      "Ixlwx++gkNbi3JUqLDt+CA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d92dd6e82401085df657a292692282a8917d86a3541eb0f5e35c6ac30207661e9ee526b8cefde596a6dd336696f6066f86639e7c0099ed23c0217b669f25ca23cde24a8e7a658a02ab956742b44ae102c40cd1222b9aa0593fde83019e4c36cdf0fe6afed9a7fe8f58850e10e3306ee09e21479a4c07d3c41ce32a4b550f032cb375567813e1666b80c16e3e93df599884c3f5df9bed7f70770b6ae8b11d36c53f1ff585b9f2dd88bed026394988768b41452ec31d4636353b1ace05857a294212aa8e0ea412245593029449d2675dbb6ebb6d3b0bb76abd5ed741a1d22b908994e454ef06a4902410bcdf8421cc8263804c8aa24c771757da1711a554e4c399e064eb312f815206d71ca71f3374882778cbec30776c9e03bc73251e6fa4a0dfd07efb7e328d4cfa3eebc60f083509aa2ba22c178325806de6466b8f5c57bffa851cda4a024159a10ed46b3d36a3b8df75c6f85c99adee36a59a20521a3df63946a7063c6159edf00b59956347c020000",
    ],
    [
      "ETag",
      "ls+TMjHwMEnFmjBTQx7+Lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-112-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535b6fda3014fe2b91f7b2690562022420a10e41ba45e2d286d06ada26701c27751be2603bed50c57fdf49527ad9b4f6298ecf7739373fa05b9e456880429eec0a26f71f6e44884e10d324815b99fc5e5eedf6b35d212f3ec71797139c9ea5f7c3212078c952649ba7aca14421295383d5b2994851e4440ad100a106c6ed06ee99b88fbbddbee3980e10154be329cf6e817ead75ae06add6d1bc990891a48ce45c35a9d83eddb7eedaad5c8a1b46b56abdf66c818d6abde37a9a0a4a3417d970b5840c0ac5e49a6d094f2187676a147e79addde464db4c007cc72923948a22d3655e20414516f3a490952a1a3ca02acf1707b474a7ee3830c68bd53cf8b821db92bcf9641065acd792a922d5c699bf98199b1cbcae89626a635c7d737d176ea48879cad63cda1843e3d418cd27c6336e63fc2c4cd3a210987a332f3030e41331a57956651390306565268f1df3fe1d5449201ab4eae0da367b043b663f8c439bc68ed50d639385a113da5d628526ed7758270a19019e2ed52b16c944e6443dbb6d11dc6624c48e1dc716ee92aed9713ad82211316dcbc68cb6313a9ca07bc9359b70950bc5ebaea12bdf0bdc75e0afe6e351e05665c4043a33a9932b8b7899a7862201f4465d8732ca05389523f0e681eb8fc68177e9d6539fb284d0fd7207738f49aa18a089245ba6999c89089a86ce174b2ff016f3d11418d528cf8f0885063f1e9e09c13eafbaacab6fe9d5eb54fe47c025498b0a71571f1074e170f27f8565e07bf3af6f4b8c72a816647e010a36bd5640172bd7ff8eea2b9fc54cb28cbebf0100ae02efbfd8e3eb0130bc1ff0511afe61e1a82a5da864f5e2f16d5566cdb671bf6ff6500596faaf58dbc4d83a76b8d42815d99665fab1a4faf5940dab42857a024110f6655eb5eaf00726aae26dbf040000",
    ],
    [
      "ETag",
      "rgxSWqyMqurQ+fQVD1lFlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff2d90d16bc23010c6ff97dbe32c18a1c30a3ecc51ac20b275fab22112d36b17d7f66a925644fcdf77897b492edffdeebe8fdce057b705cce0a8ab738fe6fa54a1fbf0458eb6af9de5aba3d6228c009dac98bc94f1c4945f5ba187667b4eb2e5738643359f3361d50f361266372835d68585d9f70d5ad9208f1d0e266c64cc5d3bafac36db7499e62c34547861b35baf5f17eb14eefbfb084e74ccb14483ad42bfb2337442e5563ead954d576364a9370a2d0438342a437d270d51c44a24c424122f639188384ea6d3f194c99a94749a5a86779fc03e8e9cac73ba705a100c985072f0329c03cb639f68ff8f2eae0eedbb2136b658846ef07f239fc97156677a1c8192fc1b99768ff7fd0f85f98b2a6a010000",
    ],
    [
      "ETag",
      "wf52rfZT1ivmTq9HG+Hevg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dcf4b7282300000d0bb64ed387c25742719cb2fc50a580b1b864208281048500a9ddebd4edf0dde0fc88b8208914dec467af002965c31b7c5d667d052e7ea7af2719797861a4bd43a5e5c755e4b45da5b696c7a91a08f15c12f4cf46a85522e4345044c090d8edce6fe266e86c1648a927ad1165bc4356df3992763ea7f2a8fa88a3f246d371bf5f02a3cfbe8a43a4e1875ab81f5ad7ed45a2ea30bba671d9d9d538c3dccbaac9f507838472884d2d8cb5643a99705113679ab86f64e79df4f76110cf3752ca1331ec8196c00f91e1a4e44d63c67aa6e9a1bf0dfcca66520cfab45724e38f8fd0359ed3bb805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-113-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "f74a9ba4a534ad548daa04a8d6a65b9282a6698a1cf72698a671889d2286fadf77ed5006421a4fb17dcfb9e7dc8f3c932d2f37644c529e3f34503f7db917293921a0688eaf816f3ff8dfb6fdc7b5bfbdea657f9a9b7c903d4e2688e09a25e9ae2aa02345533390e375d4cd6bd154b416a283893aaedbefb8678e3b72078391e7391e122514d982975ba4df2955c9b16d1fc5bbb9107901b4e2b2cbc4eef5dddef7ecaa16f7c094b4df6bda2823ed4f54bf168251c545395947e8a0915027b0a3bc400fffa89bf4fc7dee2ea7bb6e8ee03d674019134da9b42f4cc14499f1bca94d56327e26c6e79b0389fc853f8b2d268a66572625ddc189b5a18a26eaa902eb325c2dad7970b90a97d378be0a926876ed2fa7ddd96ab15e0691757bed87bea5685a80e15a13ebdcdc02bca0fe06a4e2a5518ff5b3567ee9d0fce3603401a525b4c164e89c51d7734669960e59e6f50769e6409a7ae97040fba9c346a770ba498122cf881a162d45e9f59c11cb866789c7583f39a5cc49a8e7f6923e92ddccdd0c5cda278713f2587305175c5642f2b643e4369cc77e1287eb60368d7d5342469b425db4c674016f3d2a2c1041ffa9e9a0a35ca0926ef73c88fd703a8be7377e3be105e4943d450f38e38c1612104d6b6c9e827a2936a0977bbaf42f106c26f6fd189464fceb99e89e6b176f5afe4a8f7180daae325f12c5e13cb832768e881b5a3406b26f0fa442cb77581bba3efc46246e699b85fc58fbe14fd23e8590410d25fb7c9a08",
      "3681cfffb6e3e62318771f75a4c23b2e0f935a85d5d02e1137f5beb0873d07331003aed587d8d01b1cdba673e88cb08352bd94d46e3e56da8a35f21584419c7f60da75f80bff1f61cc7b040000",
    ],
    [
      "ETag",
      "NE/qEKk3wUEkG2fzuVg5fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "85ffcbf40a2944a54ae2015b6d49d55ac55e1a635618100516779736c6f8df3b4bad6dda26ed0566866f96f71e1c609b1611b8b04a935d85627f91a07ad4c51465952949b7921712c100542c2132193fe5e16e75bf6dccd7555c303b1838975eb74b840cd79833700f10a7984512dce703142c475a0b7956e5c5b2ee0c50fb520f67c1d41fdf529ff348f7e3f970e8f5867d381ae7c58829b6acf97fac2d8e066cf86a8a310a2c42d45a4ac137182a5fdb942c2f333425af4488126ab87e90085e954c706ed2c4b4ed86693b96ddb15bad4ebb6db589cc78c854ca0b82e73312088a2b964df92bd90487005197e438aeaf2f344ea3da892efd71e0346b815f01d216a7192eff0649f09ad177f8c04e197ce758ceab429da9c1f0c1fbed380af5f3a81b2fe8ff20a4a2a8ce48e08ffab3c01b4d34b73879efed15ca89e094a4441da26d35dbad2bc77acff59aebace93dae12151a1032fa3dee52056ecc3289c737a41038927c020000",
    ],
    [
      "ETag",
      "gNVmcqbKk3Uhufna1TF6/A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ? LIMIT 1",
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
      jobId: "grouparoo-job-114-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85535b6fa24014fe2b64f66537a902228a26a66b2c7569ac7611db6c76373a8c073a2d309419da98c6ffbe07a8bda4d9f68961ce7739b77924b73cdb922109797c5742b1fb722342724440d1186f69f670b7d3fde959d63975a693f1749ac3e978344204af5892a679022d29ca82811cae96edb810654e0b215a28d432cd6ecbec19e6c0b4ed81e3180e122524d18c67b748bf562a97435d3f98b76321e20468ce659b89f4f95ebfefe879216e8029a9bff5d4d146ea9fb81e278251c545365a2d31835242b18694f2047378a16ec3ef6fb5db9ca6ed18c1f79c01654c9499aaf2420926b288c76551ab92e123a9f37c75204b77e64e026db258cd83af1b9a56e4cd378d4a6dbd2e409689d24efdc5b9b6c9d1eb9a4a901bedea87ebbb7853888827b0e6db8d36d28eb5f1fc447bc16db43fa561580c0333efdc0b3413f3d982543cabb30968984095c953c7bcf783aa0854a156135cf78d1e351d631046619f458e6587910161e8847d9b5aa1c1065de86e43a0c853957acda299c8803a961119dd5e776b7558c7a666d7b458444d6a595168830d21ed19864df647e4a1e00a4eb8cc85e44dd7c895ef05ee3af057f3c93870eb32228a9d396992ab8a789da7c22211f4415dfb2aca053a5523f0e681eb8f278177e936539f414cd96e7987738f682201d1b4a0292828cec5169b462e164b2ff016f3f10c19f5282f0e084986bf1f5f08c12eafbbacea6fe5d5ebd6fe07c0254dca1a71df1c8849f6fba3ff2b2c03df9b4f3f96a039568b327f11859bde28909f2bd7ff459a2b1f222820639f6f0082ebc0e72ff6f07a108cef077da4c27f5c38262b175640b3783cadcb6cd8fd8ed9b307a40617ea5dccb1fa870e571a9522a490a9a7929ad75335ac0e95f2198441dc9779ddaafd3f067322e2bf040000",
    ],
    [
      "ETag",
      "anwqy/RGJn2F8GCAGGpeFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90614f83301086ffcbf915126adc6424fbe074d1256419e09219b32c1ddc90091cb6c58984ffee95f9a5777dfbf4de37d7c367516710c0b1c8bf5a54dd4d8e26b24d8cba2d8de6d250ad111c40237326e364f714fd5e7ea269f6767b7f945d94884d3e9f33a1d30fac24043d9c0a2c330dc17b0fb5ac90bf1d0e6a9cc898e91aabacd6afcbe765cc42459915d6db307c58844b18f68303673ac6784285758a7664a3e88ca959d9b45a564d89aea656a5a86184c7875c51db4845e4b2e20a71e78aa92766623299f9bee73359522a4d4135c3db04d8c79091654c174e0b820135b61cfc349edf2c4f6da2fd3fbae80cea8d2236d6683dbdabff23d94c86b31ad5a203a9e46dbc14e67a1ffe00021fc78d6a010000",
    ],
    [
      "ETag",
      "RSXDQzwxQ6dY27bayQS1Pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff1dcf4b7282300000d0bb642d0e1f6da53b225a3e238a140a6c981023ffc09020864eef5ea7ef06ef07208c096319ef1b42c1071048d5d778edf63ba8cdc4b742099a1692a05a09eb141d830d3af034af0f8abba1290c8419ab5de35973845b29551cdb8fcfaaac1521676e323e6f9382bef6b4a78bb13392d9db5f4e693741ab08ec8e955bb594efac60fcda4f33b3a3f8fc408d476f8d94d56d86eb6feede2f8b1392eb3b331f4798f853e2f062c4b61d11af9458494df169c87e7ed187c5e9df52e1d97525baae0d720656803c876a242cab5e336dabeb2bf0dfccb818c8eb0a091ac9087eff00e9cf6b4905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-115-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda2490405e52b446295da305b20269b54d1332e642dd124cb1695555f9efbb98a66b5569fd84ed7bce3de73e782677bc4cc99c243cbf6fa07efa722b12724240d11c5f1fa3ef55e3dd4c02f3d7657d5ded9a733b1be58b052278cb92745f15d093a2a919c8f92eece7b5682a5a0bd1c3443dcb727ad6d8b46696e3cca653738a440945b6e1e51dd26f94aae47c30388af77321f20268c5659f89fdebfbe06138a86a710b4cc9c17bcd01cac8c127aa5f0bc1a8e2a25cec4274d048a863d8535ea0877fd434397d9fbbcfe9be9f23f88133a08c89a654ad2f4cc14499f1bca97556327f26dae79b0309dd8dbb8a0c268a665fc625ddc38991524563f55481711e6c3d63ed9f6f036f19adb77e1cae2e5c6fd95f6d373bcf0f8deb0b37700d45930234d75818a7fae6e305f553908a975a3d6a9f5be5970ead3f0ea625a0b4842e184fcc31b5a6e62cc99209cba62327c94c4892693271e82831d9cc063b4d80224f8b6a162d45391b4d9cb165d318ec6c18db23338d67d3d48e2119cf2ccad2b133b6c9e1843cd65cc119979590bceb10b90ed6911b47c1ce5f2d23579790d1a650679db1b680b71e151688a0ffd47468a35ca052dbeeb51fb9c17215adafdc6ec21bc8297b0aef71c6192d24209ad6d83c05b527526c18f1979e7b86603db11fc7a024f3dfcfa4ed79ebe24dcb5fe9110eb0b5abf4978451b0f6bf693b47c4152d1a0d79e80ea442cb37581bba3efc41246e6997855ceedce027e99e02c8a086927d3e4d04ebc0e77fdb71f3118cbb8f3a52e11d9787c95685d5d02d11d7f5beb027c3e170a4ff55456bf521668f87c7b6b539da8cb08752bd94d46d3e56da8935f21584419cbfafdb75f80b0a2a31147b040000",
    ],
    [
      "ETag",
      "wTKpuMh7R0ZQrWpUuF4f3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f",
      "82",
      "50",
      "14",
      "c6",
      "ff",
      "97",
      "d363b8411343361fd0ccdcd00c713d34e7ae70400cb874efa572ceffbd73c9ac555bbdc03987dfb97cdf077b78ccca185c5867e9538d627796a2bad34580b2ce95a45bc54b8960002a961239b99f569e2d9d913910afe77e588d2eca34edf58890d1060b06ee1e920cf35882fbb0879215486b11cfeba25c359d016a57e9e13c0cc6d311f5058f753f5df8bed7f78770304e8b31536cd5f0ff585b1e0cd8f27580090a2c23d45a2ac1b718a9b1b6295951e5d892bc16114a68e0e6412a785d31c1798b262dcbb25b56c7b4ba966d771dc77488cc79c454c64b82177312088a2b9607fc856c428700d194e43869aecf34cee2c6892ec7d3b0d36e047e05485b92e5b8fa1b24c11b46dfe1033b66f09d6305af4b75a2aefd5befb7e328d4cfa3aebc70f883908aa23a21e178329c87de64a6b9e5d17b7fa750ce04a72425ea102db3edd8971df33dd701d759d37b5c256a342062f47bdc640adc84e5120f6f176254377c020000",
    ],
    [
      "ETag",
      "MWNpA5s8G0Crx+LTpG2ngg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` < ? LIMIT 1",
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
      jobId: "grouparoo-job-116-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85",
      "53",
      "6d739a4010fe2bccf54b3b8d0ae20b38e3a4564942c768aa98b4d376f43816720970843b92b119ff7b17887969a7c92771f779d9dddbbd27d73c0dc880f83cba2920dfbebb123e3920a06884d163fd6ef5ed6cbced7e8cb79f7f1fa9c99734dd8e864344f092256992c5d090a2c819c8c16ad98c7251643417a281420dc3e8358c9e6ed846b76b5b966e2151421c4e797a8df44ba5323968b5f6e6cd488828069a71d96422798cb76edbad2c1757c0946cbdf46ca18d6cbde17a180b461517e970b5c40a0a09f91a12ca63ace1891af89f5e6a37394d9a11826f3903ca98285255d685124ca4218f8abc5225837b52d5f9ec832c9da933f6b4f17c35f3de6f685292371f342ab5f53a0759c44a3b5acc4fb54d865e975482dc681727cec2c1482e421ec39a071b6da81d6aa3d944d3360155b0d17e16ba6e320c4edd53d7d30cac2500a9785a55e2513f86b28a8769b9ff3e5249a00afdeae4baaff7a861e9b61ffa7d165a66d70f75f07dcbef77a9e9ebccee4027f081224f95ea158ba622b54dd300ab6d06d00903c336adb04fc330f0030b2541f73b966ddbcca2647740ee72ae60c2652624af27462e16aee7acbdc56a361e794ed54648712a93bab8b289e7752a6c1241aff4b52bb35ca053397e77e6398bd1d873cf9dfac5a71051b65ddee09b87349680689ad30414e4a722c0a191b3f9d2f5dcf96c344546f58c677b8424831ff74f046f9b555356d56fe9d5eb54fe7bc0398d8b0a715b7f1083ec7607ff579894237855a0adb7f586de6e185d54fa85505cf45a847c5d398befa40e2d20841c52f6f61220b84abc7db0fbe341309e0ffa4885ff71e7982c5d580ef5eef1a4eab466f7dba6d5afce5dd15cfd9debe8a6be1f72a9512a4202a97a68a93e9e726655aa908f204ce2caccdcd9",
      "3166ff00b43f1fd5be040000",
    ],
    [
      "ETag",
      "G0wUXPCy5+lyBzFtDJnnyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd6e83300c85dfc5bb050956b502a45eac136a2ba1aeb0f56aaaaa140ca3fc9825611543bcfb1cba9bd839f9e273e411aab2cd20806b597cf72887a702756c9a04555f6bc5a5a3562158805a144cbe555b4a9e0795ede2dfa3e32f9238aaeef17acd844abfb011108c909758670a82cf115ad1207fbb5ce43c91313d7446d91f3ec26d98b0d0506684c3298a5e365108d379b2e046d7047394d8a6684676926e98eabd49ab44d3d5682bea658a0a66787e2824f59d9044362bb6ebae6c77e5b8bebb5cfa9ee7784cd6940a5d52cbf0e91dd84793167542774e0b2e03726e39783e9f3f2c2f4ca2f33fba1934aaa3243656683c9d87ff2b994c9ab36ad9a305a9e06dec4afdb84f7f027e7f7d6a010000",
    ],
    [
      "ETag",
      "OkGoR2ysdHQzP093RQLkwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff1dcfdb6e82300000d07fe9b3336a1d97bd4161088c61b858e5a5e1520a28165b128465ff3eb3f307e707e46549a52423bfd23bf80073bed3d7e5dae79a09a7eac2cd2a5104dd59087a369ba3c950fbc1c2acf550d0c936eb537f81438d83a09909da26c2e9a573ef793764b7e27899b18d6cf3b0288abad1d8a268e5c0e076973e08f175189eeba2f3dc4d7ff46a5131d3350d1cbe75847d32ee584d9dc6df46d6e189a045f0e46b740fed494bf7f4bc0f758d3b8fa010b1d644573f52d1d3ad4e18fa4a2195d8366e5d2bc10ad0e7d00a2a49fb9ac1775d5f81ff2619e781beae26cd0515e0f70fab95eaf505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-117-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6f9b3014fd2bc8fbda04685e2452b466295d2325a405d26e9a26649c0b750b9862932aabf2df77314dd7aad22a21817dcfb9e7dc07cfe481175b3221314f1f6ba8f65fee454c4e08289ae2edd37cfd4d5df27df983fd19eec475993eda0f4fd3292278c392342f33e84851570ce4641374d34ad425ad84e860a28e6d8f3af6d0b2c7f66030761ccb41a2842c59f2e201e9774a9572629a47f16e2a449a012db9ec3291bfde9bbb53b3acc43d3025cdf79a26ca48f313d5af99605471514c37013aa8255411e49467e8e11f751b9fbdcfdde534efa608de710694315117aaf185299828129ed695ce4a26cf44fb7cf3410277e9ce438389acce8ba8a0399c185baa68a4f6251817fe7a652cbc8bb5bf9a858bb51705f34b7735ebced7cbcdca0b8cdb4bd7770d45e30c34d7981a67fae4e101f5b720152fb47ad85c37ca2f1d5a7c1c4c434069096d301a59436a3bd6384ee2114b9cde204e2c8863271e0d682fb6d8b80ffd6d0c14795a54b368210a1b9284c1d08e1cc74ea27e6f0c11851e8d18c47d36b206703a70c8e1843c555cc13997a590bced10b9f517a11b85fec69bcf42579790d03a53e7adb1a680b71e151688a0ffd47468a25ca052d3ee8517bafe6c1e2e6edc76c24b4829db078f38e3846612104d2b6c9e826a25b6d830e2cd56ee3982f5c4ae8e414926bf9e49d3f3c6c59b96bfd2431c606357e93709427fe17dd7768e881b9ad51ab26b3f488996efb036747df88d48dcd2360bb9deb8fe4fd25ef990400505fb7c9a08d681cfffb6e3e62318771f75a4c2332e0f938d0aaba05d22aeeb7d618f4efbfd914534b8521f62f81cdbd6e46832420e857a29a9dd7cacb415abe52b0883387f4fb7ebf017e94df1db7b040000",
    ],
    [
      "ETag",
      "wCOBtHiypXcz6voQpgq1kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1085ffcbf4155348bc20890f6a6d4b82d60bd6268d312b0c8a024b7717ad31fef7ce526b9bb649fb0233c337cb39078eb08db3101c58c6ab9702c5e16a856aa48b31ca2251926e39cf248201a8d88ac8d9745074e50c1b5127dc8e76d1f5eb53f0b86fb58890c11a5306ce11a218935082f37c848ca5486b014f8a345b949d01ea90ebe1c41fbb833bea531eea7e30f5bc76c7ebc1c9b82c864cb145c9ff636d7e3260c397638c506016a0d6920bbec140b9daa664699e6045f2420428a184cb072bc18b9c09ce2b34a95856a362d54dab69d56a4ddb366d22131e3015f38ce0e9840482e28a2563be279b5027409425398ecaeb8ec671583ad1a53bf0ebd552e05780b44571828bbf4112bc66f41d3eb07306df3996f2225317ead67b68ff761c85fa79d44ddbeffd20a4a2a82e88eff67b13bfdd1f6a6e7ef6de39289443c12949893a44cbacdab546dd7ccfb5cb75d6f41e4789020d0818fd1ef7b102276289c4d31bcff9eb747c020000",
    ],
    [
      "ETag",
      "WUNuCsWe7fBdkQvf/xXcVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` < ? LIMIT 1",
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
      jobId: "grouparoo-job-118-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536d6f9b3010fe2bc8fbb2494d62206948a4a8cb52b62125244b48db759b120307750b986293a9aaf2df7740d317556b3f817ccfdb9dcff7e486672119129fc7b72514771fae854f8e082816e3e96abab8f8e2c225b7ac0b55de4c04db417f3c1a2182572cc9d23c8196146511801cae57edb81065ce0a215a28d4d275aba51f537da0f77a03cba216122524d194673748bf522a97c34ee760de8e858813603997ed40a48fe79d9dd1c90b710d81929d979e1db4919d775c4f121130c545365aaf304129a1d840ca7882199ea8a1fff9a5769bb3b41d2378c703604120ca4c55b950221059c4e3b2a855c9f09ed4399ffd90953db5279e3699af5defe396a51579fb496352db6c0a9065a2b4afcbf94cdbe6e875c524c8ad76fedd5eda7852888827b0e1e1561b6927dad83dd5b4ad54186eabfd2e2935033c9d3a33c7d3740c1382543caba378cc4fa08af1302ee7f52d5504a6d0b0296efaf498e9161df891df0f22cbecf91105dfb7fc7e8f993e0d065de8863e30e4a94abd66b14c64d48870b8d4d74dc3f74d06dd8145c1f40da36f84a10e0308f51ece8d92fd11f95b7005a75ce642f26664e47ce978f6c65baeddc9d8b3eb36228663396dc2554d3ccfa9b04904bdd1d7beaa72814ed5fc1dd7b397e389e79cd9cd954f2166c1ddea162f3d62890444b382a5a0a0988910874616f395e33973773c45467d8f8b034292e1affb27827797d75356f5b7f23aeed6fe07c0194bca1ab16b7e884ef6fba3ff2b78cecc5e79e3d9e26d15831ab4458d96def37463a89b43bddba6945ea2f81f24e2f237bae4c7da5efe24cdd1122228200bdedf0b04d785f71ff1e14121189f14fae0762a8e6b18c8ca2528a059479ed6cd37ecbed1eb9b0352830bf5aa36d0bb87b9571a9522a490a987969a07558db12e95f2118445dc22d771bf61f51f59c2544fd2040000",
    ],
    [
      "ETag",
      "SLPXBNeZi88XtukCoave7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff2d90416f83300c85ff8b771c48b0a91520f53026d456aaaa96adbb545515c0657480b324ac4388ff3e87ee123b2f5ffc9e3cc057d51610415695df1daafea144b3b74d8abaab8de622a9d5080ea011259337f911374ff3955887bbec71297ff728e7e562c184ce3fb111100d70a9b02e3444c7015ad1207f3b9fd5349131d34babacb7efc932495968a8b0c2f6b0d9bcc49b04c6d3e8c095b2142fa8b0cdd18e948aae989bb54dab45236b7435752a470d133c3d948a3a291491cb8aebfb81ebcf3d3ff467b33008bc80c99a72612a6a193ebc01fb1832a24ee9c669c167404d2d07bf4ce70fcbcf36d1e91f8d7b837aa7888d355a4fefeeff4a3693e1ac4675e8402e781babcadcefe31f5132402f6a010000",
    ],
    [
      "ETag",
      "wpVBm26HaI9Pb+GpxQep6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", {
    grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
    assertion: /.+/g,
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "1dcf4b7282300000d0bb642d0e5f81eef80803620b48415619088132624012c1e8f4ee75fa6ef05ea04208530ad978c1047c005ec9e6166d0fa3612b6b039be55069833e8a67ff64599f320da628e5056ae9203c8919a31c6a7ba37e465e2151cdf1be794a02f4f08df438a4e28e4923370605062a4aca38b77e3254548e5aa2b306ef6ec4d95792ac38a82fdcd55bc6499b0abeba94d09acdac5befb8c064f2d0d525b23af74257f9a7fd6e244c7244a284b570d33d959032ac976b9367eb2d33bbe4e8b03a09edb8041b801f533f630afbf74cd14c7303fe9b90f109bfaf36ae663c83df3fbfd4860b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-119-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
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
      "7b6d4268484222456b94923652423620adb66942c65ca85b821936a9d22aff7d17d374ad2aad4fd8bee7dc73ee07cfe4811709999098677f6aa80e5fee454cce08289ae1ebad337f3279f2f3000773bf78baa272542c1ea75344f08625e9aecca123455d3190936dd0cd2a5197b412a283893a9635ee58c39e35b60683b1e3f41c244ac8d3152f1e907ea7542927a67912ef66426439d092cb2e13bbd777737f6e9695b807a6a4f95ed34419697ea2fa35178c2a2e8ae9364007b5842a821de5397af8474de28bf7b9bb9ceeba1982f79c01654cd4856a7c610a268a946775a5b392c933d13edf1c48e0aedc79683091d7bb222ae80ece8c842a1aa94309c6c2dfac8da5b7d8f8eb59b8dc785130bf76d7b3ee7cb3daaebdc0b8bd767dd75034ce41738da971a16f1e5e503f01a978a1d5c3e6b9517ee9d0f2e3601a024a4b6883d1a837a496d31bc7693c62a9d31fc4690fe2d8894703da8f7b6c6c839dc44091a745358b16a2180f99cd7a431659c37e12d90975a298f5d3284919c416b0816d03399e91c78a2bb8e4b21492b71d22b7fe3274a3d0df7af359e8ea12525ae7eab235d614f0d6a3c20211f49f9a8e4d940b546adabdf442d79fcdc3e58ddb4e7805196587e00fce38a5b90444d30a9ba7a05a8b041b46bcd9dabd44b09ed8b7535092c9af67d2f4bc71f1a6e5aff41007d8d855fa4b82d05f7a57dace097143f35a43f6ed819468f90e6b43d7c7df88c42d6db390ef5bd7ff41da271f52a8a0609f4f13c13af0f9df76da",
      "7c04e3eea38e5478c7e561b2516115b44bc475bd2fecd1f9b06feb7f55d14a7d880dcefba7b635399a8cb08342bd94d46e3e56da8ad5f21584419cbfa7db75fc0b8802ab1a7b040000",
    ],
    [
      "ETag",
      "W8Cz/idZyey/vFzGas7nFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4f825014c6ff97d363b8c94a42361fb0b4586886f86273ee0a07c4808bf75e6acef9bf772e99b56aab1738e7f03b97effb600fcf59198303ab2cddd628766729aa475d0428eb5c49ba55bc940806a062299143f3deb3c4dcb73bf38be07c3b423f4cfcb4d72342466b2c18387b4832cc6309ced31e4a5620ad453caf8b72d97406a85da587d330f0c6b7d4173cd6fd78e6fb6edf1fc0c1382dc64cb165c3ff636d713060c357012628b08c506ba904df60a43c6d53b2a2cab125792d2294d0c0cd8354f0ba6282f3164d5aa6d96d9956dbec9a9d4ed7b6db3691398f98ca7849f06c4a024171c5f280bf924db008104d498e93e6fa42e32c6e9ce8d21b87d66523f02b40da922cc7e5df20095e33fa0e1fd83183ef1c2b785daa1335f41fdcdf8ea3503f8fba71c3c10f422a8aea8484de68300dddd144738ba3f7fe4ea19c084e494ad4219aed4bbb7365b5df73bde63a6b7a8fa3448d06448c7e8fbb4c8193b05ce2e10d8b4365e97c020000",
    ],
    [
      "ETag",
      "F1KI6rZL85Z3R+qMeLTfLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` < ? LIMIT 1",
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
      jobId: "grouparoo-job-120-1601915598808",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535b6f9b3014fe2bc87bd9a426400281448aba28a51b524a5a42daeea6c41843dd02a6b6e95455f9ef3b40b3b6aab63c859cf35dcecd4fe88e95099aa09865f735158f1f6e798c8e10553883a85ecf0c795158e9f5b5fb7d148738b8baf567d3292058c392b8a872da93bc1684cac97ad5cf04af2b2c38ef8150cf1c183d73649863d3b6c7ae6bb84094344f17acbc03fa8d52959ce8fadebc9f719ee514574cf6092ffec6f587815e097e4b8992fa5b4f1d6ca47ec0f538e7042bc6cbe97a0515d4928a0d2d30cba186176a127f7eabdd67b8e867007e60846242785daaa62e9020bc4c59568b56154d9e505be7ab0fb4f216de3cd2e6cb75107ddce2a2216f3f69586a9b8da0b2ce95761a2ecfb46d055e375852b9d5aebe7aa10711c15396d30d4bb6da543bd666c189a6ed25b49fb5610c098417fe991f6926549350a958d9d612e138a74d1dcff3f2dfafa92160058e5d72e318236cbac6384e6387a4eed08e5383c6b11b3b361ec606195bd44a628a81a71af596854b5e9a03cbb6e3816525d47612cb4df0d072c6ae950cd23189a99d8e860e3149827647e8b7608a9e305971c9ba99a1abd08fbc4d14ae83f92cf2da36520c7339e98a6b9a785da7822601f49fbe764d9671706a16e0079117cee6917fe9753b5fd00c93c7d53d6c3dc5b9a480c60217545171c613181a3a5faefcc85f06b30530da459eef11124d7e3cbd10a2c7aa9db26a7f1baf91d5faef019738af5bc443f7814cb4db1dfd5be174b19c1dd6e8db80d8fd0210dc79a7802ed65ef80d75a190a654d0921cbe0000b789c3ef75ff76000caf077ca482ff707044362e44d0eef058d196d8b19d81630d2dd482857a977306c67ec28d46a3480b5aaae796bab7d30cac4dd5f22f0892702f811f7c81ec1fec36e02abd040000",
    ],
    [
      "ETag",
      "/uA0sQm4fXX8Z6bRaNWjIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1601915598808"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff2d90616bc2301086ffcbede32ca41d8e5af0c31cce0922ae53061b22693cbbbab65793eb44a4ff7d97ba2fb9cb9b27f7bedc157e8a7a0f0964457e6ad15eee72e437dfa4e8da929d94866a873000649d0b795293cf876c16dd2bcdeb95cb5e2a1c7e9cc763219cf9c64a4372854381e5de41f275855a5728df763bdb4f148c2f8d57e6cbf574364d45a868ef85e566b1789a2ca6d06dbb011c294bf180166b837e6463e98886e73eadd3555362e0a8b5061df470ff905b6a1b6d89025182305241f8a8c251381c8ee258c54296643417540bbc7907f161625da67496b4100a60fb56821ffaf357e4c827dafea3930ba35b59126387de53ddfc9fc96762c9cab6c501182ddb782df876effe001433e7a16a010000",
    ],
    [
      "ETag",
      "q0BZ3bG2+0atTPsbFme5Ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 05 Oct 2020 16:35:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
