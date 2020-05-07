const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1588841517427";

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
      "8b08000000000002ff1dcfdb6e82300000d07fe9b3310304616fe3126e66e2040abc341db488c8ad140496fdfbccce1f9c1f80f39c8c23e25d4d5af00e562c6afb7cef77aabe5e281e049bba86a2da61835cd6a47252c1a18b45723ba3bbc2668d3efb76308c8b4e9ee6e1cb4a1adf8b2638e48f358168b2036513660f4a1426ad199a4bccd64fef20975d78750b6b8e227a0a3c2edaf47b93529f6eb17556d737c4b5475a7505ed1b7e2a260ea35e358571cb64ef1ec0fa43a1c9ec607ccbaec82df3be3c9a8b23694e7ccc6a51efa4c67388ae821d204b5f3132a2ea3593644ddb81ff26e26b4f5e579d604618f8fd034c492b0205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-1-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6e9b40107df75720fa1a5ff025e048566361d220d938c5385155556481816e8259c22e8e9cc8ffdeddc5175c4769df6066ce9933979df786a2a8cf388bd42b450d70f25242b1f9f24402f5427880a14478de369e790765b764eedb6b6aae5112ddd26434aaa2b04453b4ca536852521621d0abe5a29514a4cc514148931336b5a636300ca3af0d34bddfd52b2885349ee2ec5910fc662ca757edf65e462b21244901e598b642b23ad8dbeb6e3b2fc813848cb64fb3b67922dafe34efd794848861928d968b4a4349a1f06185702a541cc151707dcadec268d54a78f41a8780c290941913ca2a9a9064314eca429273a6776ee46629f9f05b33a80b6b6a999e1292b45c657e865670a14488219f6d72506edcf94c796440d963cb766ee6ee6cecd973c75f98b7d66cdc32e7d3e5cc59280fb7966b290c0529480a65a45ccb3f87ff48613269c4797026a579c25b13c4bdbb6eda1fccf1402148b8380abb305fef5c22cde80c8338d0c3d8e80d82b803416004fa00f5824e38ec433f0a00d519a4b20a8f3292f5a358ef69a0f91d230afc7ed4d7fd611469be013d74190e74d082aeba436f0fb584052006134c7342f1aed9aae95a63cff2ed1bdfb1ac89353996fe5ae0b3e807d7e6c19ebb744c8eaab7294665ca2655a1a74d3aa95ecca55ed8671d3c2b202f30e1a2e412d88e67b963d3b3ef6b32f8464e2141e166f1227632462985231a157cb40c8a1989c41c55673cabd72bf7eb6e1f4479c4cf83ce63393c50ac8bace56c5d4ef3787c1d4f5a518db2b2aa0bcfb59d6f6acdb9fd98e61ea5e5073ceb9d59b430c6e9b15f92aaf1f7d7af462d85cadff74e9dfa7d69b93f0456fa84c785180ac8c263d2ff587401acdcffbe5e3c7a7f4c0480df93437acab8993fb9901e93cbbd150f10577ddf1376b561afb727e4c0829d4574b5ce21e5d94111b9600519dbb7a23a2c551fb72792ca9a1c0913e1fc1538bb116e1bdbc61f70e7e25a13060000",
    ],
    [
      "ETag",
      "zyTCPeu2utRzwlCvagdHsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95df6fda3010c7dff35720ef15a4064181497d201dedb2a5c02048fb2184dcf892b973e2cc76a850c5ff3edb09252f9d2215292fb1efbe77fe2877b2efc5e974d01f9a11f4b1831e69f2b70071f89080fa66362b900553522f39cf24a0ae8906851313fd35f2fb137f33f17e4e7e3ccfd897efc2c3cbe4e6a68c92d16f48b18e7bd196b6630a8c486dffb276a7f25b2dc329981323ce8a34db59b37b96d521b7f23a5cf9f3fbba92726295f92608a65e30439574ecbe0d2158e19d3df27d08bb6e9d0a869ef8e30a6210904570feeb5cf02788946fcb2b719a33e8495e880864053189a59c085ee45870ded3ae9edb7387e3f178e00eddd1a03f3a45331e6145796612366bf48a575c61b6e2cfa6c2c8ed973d10a55d56fc540a14d79a50af9096f6269b12f4ea3b76ff13e8cfc3eb412db6da6d9d5a66636a4c855465eb9bd1ab565d08cf709b747d53286b859c404640b482a6f90e132240ca76f05cee709e37647b8b45702932ce88e094b444dfd336a84ced1b52ef82c5f482ef8a7eee9bdee94fd3707629ac54fab16fc80dfd87d93a9c3e2cdf84ebeff6fccc7b07057229b81e2212ece870af06e3e1e8fa0a9d46d12d37a3469949a44401d61d613d923f53a57d3166129ca3f30fedb9546dfe070000",
    ],
    [
      "ETag",
      "KcI29IU9BZ9YwElJXrBaPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `first_name` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-2-1588841517427",
    },
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
      "8d",
      "546d6fda3010feceaf88b2af8540202454425d05618b46a10da1d5364de03817e636c4a9edb44215ff7d76c24b1855b76fc9dd3d2f773efbada669fa134923fd52d343b27ace816d3e3dd250bf50191068a532bfbbe688b5edd6d7cde8756afcf8d6254f5e78d7ef9755a44073b4ce12a8739a330cfc723e6bac18cd33c428ad4bc2ba596f598ee3745a56cbee987609e590c463923e15224264fcd230f6361a2b4a5709a08cf006a6eb43dc78318d8cd147c0821ba7aa8614e2c687ba5709c548109af6e7b3d243ce812d608d48a25c1cc151f8f994bd41d0bab192d52f0403c298e6a950ce4a1a4cd398ac7256904ba6371994e1c2f2e1b712d067eed81d04da32268c8b458ad6b0d410d7160b063c4f8436f2a737da52761a9304f8527bf8eafaaeb624d152eb6b57856841180117242d64031426501193d9dda4bc77cee840a14890401c76650bbbd9452da7d90be3d0c6b1d3b6c2b80961e884b685da6113f73ad08942405506a1b44b3c4ae52cb0dc971682c80113dabd9ed3b663844d2bb270b763b5e3d8b12368224bdf316c0ffd600648c090f08c72b21ba63ef0ddebc05d78a3c5c47587eef0d8fe2b2367d50fbe278b037f3e19485475543192a31d96cd9e0eea640242ceb4dadc47533c6b2063844a53c5217b93c0f5af0781775fb121376e0c2b8437b367b573314a381cd188c95510c06e68a4ce52bf9dcebcc09b4eaec7478662896ef7955c96fd3c983df654650b36d9e9669487564695cd6e47afe4b617efb2dca3247f87e66517d65b271cb5bfbf7ed52adcbabc9d3b57fadddcf5bf2b6c9153191f626090e2a3da7facb20296e97fbf3db27aff1428807c0d0ef25cc8b0bc54981fc58bad54578caccb4e7784a6e9f47a7b420964e2aca2ddb4ad7dc5d973a0b4600da9d88fa27c16ca396e4f2ce5153b054c95cb1d9f78932f85f9dab6f607289b6277d1050000",
    ],
    [
      "ETag",
      "h62Fr371HyFwO/ZK6ikIbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d515d4fc230147ddfaf58eaab8b8e80a0090f42889210a2e3e3414348e92e63b8edcef64e44b2ff6edb6dc04bdb73cebdbd3da727c775d9579c85ecc9659b38fa2e401e6f22a077730840150929bde5982960b7a61a8847a6fa6f9908ff833fd25d47450fcbdd3ccc7e87877ebfaa52620729d775278d34dec690844ae34f8bdd9ab75ac6533037aed7d20eb437d41a1d73abcde6c178fa72ada4185a65ba984c9e079311aba5d2ee2bbd96f6257bdc04b005099980cb7b72897b1034b6c6154ff3043c858514a0ea21a6b192238945ce25a2a729afe5f99d5eafd7f63b7eb7ddea36d5090a4e3166a6613163e7f184c493000fc63bf3ab706405ab289a20d8f62a9deb7cb4f4639a4732067666cbfab4721ab4bacc1b1c09d49b44ed4681f570cf9a308668cc92c982640196165c7fd76b4c35e794ce3fb95151b619020000",
    ],
    [
      "ETag",
      "zVlc1Za9t/5sg6VhTdnxCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfc97282300000d07fc9591ccb36d01b9480b2286b19bc640813288a24026169a7ff5ea7ef0fde0f28ab8a8c239ae89df4e01d6ca5a8efabbd4735738b085f78dec282bb7688f5209fdba44a4507d2cb50383c1cad5a8cb026a8eb33fe3c543e8b8a36971c881a49c5872681677ed7e2b17d6669ffc0e145982d7b93e69bac3a99cd289e178ff9df7a51e3f2a15e3be508d1c7e02ef014c89c91a026b1e1bb024eea29b87d1156999d45b99112ef9889343bfbb497d637415dd23e82a6877caa9c249c0e86dcf16bd1801d202b6b0732a2f63593145ddf81ff269a36465e5793940319c0ef1f6c291fb205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-3-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "44d96b810001d24a686590ae9148684368354d53ea1827759bc4a9ed30a18aff3edbe1238caadb5b72ef39e79e7b7dedf786a6e9af385fe9579a1ee1e4ad4474f3e58544fa85cc200e1299092834eeb24d31be7dcee9330c5c9074bfdd8f46150a2b36035991a226232585885d2d17ad8492b2009490a6106cf69a9dbe655966a7df199add614565288d67387f9502cf9c17ecaadddedb68258424290205662d48b243bcbdeeb60b4a5e10e4ac7d5ab52d0ab1f6a775bfa604028e493e5a2e2a0f2543344419c0a9747124afa2eb53f51606592b11e83586084048ca9c4b67950c24798c93922a71a1f42e8222ac2c1f7e6b017d61cfec49a0419296591ee6204317da0a7010f24d81b41b7fee6a4f1c31fed472bc9bb9ef8e0367ee858bc9aded8e5b93f96ce97a0bedf1d6f66d8d8328454a421b69d7eacf133fca982aba123a3857d60299ad1912d9dd349d0fcef120214584398676b070680c40c7322ea3381ac2d8eaf5a3d840516445c33ee84506bc3491b98a10a82b2867151fe424efc5a6d53187288cccd80acdcb6e3f04c030c2b81f0ffabdae21e4a1be636f0fbd408a004753cc0ac2f06ed8fac4b7c7811d3a37a167db537b7a6cfd37c567e847df11e0c05f7a13c1aa8f290665caa755a3a7433ae95e9e4bbdb1cf2678d640413111a6d412385e60fbe349e03cd46c888d9ca104c0cde24dee640c52868e6c40c5d172445db292e7a87b63b7deafdaafbb3d8809c4cf83cf633b0228d745f572b62ea77502b18e27a3a88eb28aea8bc077bcef7a2db9fd58e601a4e5073aeb5d588e30c6e9715e4aaaf1f7d7af46ad842eeef7ce",
      "9d7ebfb4fd1f92ab7232e3a3185194c363d1ff587449acd2ff7ebd047aff984882784f0ee519176171e5203b16577b2b2f20aee6be17ecf606e6602f2888949f23acaeb1479c3d28b216ca50cef7a3a81e966a8edb134b65cd8ea249b8b805deee08b78d6de30ff62bf25413060000",
    ],
    [
      "ETag",
      "Trc0PmypAHhnrhcTMag2BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc595c14ee3301086ef798aca1cb7d5126869b5128776b70b91420a6d40a055559978120c4e1c6ca7a8427d776c27a5b980226da55c62cffc33fe9419d9f3ee743ae8856604fdeaa0479abc1620364709a81bb399832c98927ac9792601754d34289c98e8fbf54fb1b8930f459088e0fee2d54be0c7e6edfcbc8c92d113a458c7bd6b4bdb310546a4b6ff59bb53f9ad96e114cc891167459aadacd9ddcb6a935b7911cebde0a2aea49c5825b8f5fdf1c49fa24ada76bf8610acf0ca1ef97f08bb2e9d0a869ef9e31c62109045b0ffeb5cf067889467cb2b719a33e8495e880864053189a59c085ee45870ded3aede69cf1d8c46a3be3b7087fd93e12e9af1082bca339370bb409f78c5156673fe662a8cdc93b207a2b4cb8aef4a81e25a13ea15d2d2da6453823e7ddbee37815e109ef56bb1d56ee9d4321b53632aa42a5bdf8c5eb5ea407886dba4eb9b42592be4043202a21534cd5798100152b683e77285f3bc217b329bf98722e38c084e494bf4356d83cad4ba21f5af3f1b1ff05dd1cf7dd33bfd671c4e0f85954a3ff60db9a177355d84e3abeb2fe1fabbdc3ff3938d02792db81e2212ece8708ffba3c1f0ec18ed46d16f6e468d3293488902ac3bc27a245f52a57d3166129cadf3015a928785fe070000",
    ],
    [
      "ETag",
      "Xv/rSVsYuNgrNXGqIge+yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ltv` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-4-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40ecb5f9809284568aba28a11b534a5a42da55d3941873616e09a6b6c95455f9efb3211f64a9babdc1bde79e73eef5b5df1a9aa63f932cd22f353d24c94b01ecf5d3130df533950181129579f4bce937ebfbc3b79e3d3a67ee9dffe4707f38185428525673b4ca5368725a300cfc723e6b258c16396294362561d36a1a5ddbb62da36bf42db35f957248e309c99e15c12f21727ed96eef6cb4124a9314504e780bd3d53ede5e9bed9cd127c082b78f55db5288b73fd4bd4a294682d06c309f551e0a0e6c012b4452e5e2501c859f8fd95b04ad5a8944af090684312d32a19c5534986631490a56924ba6371994e1d2f2feb716d067cec41905da3215eba586b8b65830e0452ab46b7f7aa32d658b3149812fb587af8eef684b122db5817655aa954c117041b2522f40610a351599dd8ec87de770f6148a0409c4610b5bf43b3d64d89d8b300efb38b6cfbb61dc8130b4c37e179d871d7c6181158580ea0c426957f528a359378e911999716400d828ecda5688a31ed866d88bec6e071b9d8e1d8361ea5b86cdbe1fcc000918139e534eb653d447be330c9c857bbdf01c67ec8c0fedff66e404fde0bb121cf8736f24abeaa38a911cedb86af6785047131072a6f5e63e9ae249033923549a2a4fd7f502c71f8e02f7be6643aeda0412845f672f6ad962947238542386562080ddd0489da57e3b9db9813bf586930343b93db73b2497b01f7bb3879eea6cc16b7ebc19d5a1555165b367e9b5dce6ec5d967b9416efd0acb761dd38e268fcfdf5b351e3d6e5b5dcbad2efe68effa86acb9ccaf81003830c1fd4fe6395556195fef7a323d1bb374015c867602fcf850c",
      "cb4b85f941bcdc4a75c5c8aaea744b685a5ddbd811ca42264e117dd3da214ede01a5052bc8c46e14d57b50cd717364a9a8d929cb145ceeb8e77a5f4af38d4de30fb1af5507ca050000",
    ],
    [
      "ETag",
      "YNNOJ4XWJ68C3rIQRjEsRA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "4d",
      "53",
      "83",
      "30",
      "14bcf32b9878545410a6e84c0faddf33686d6d4f4ea793c203a9c0c32458b1c37f3709d0f6926477dfcbcb6e76866992afb488c88d49d669f25d01ab4f121053759801af32c1e55662c1819ca96a103451d52fa33b2fdf7aecafbafa9d5ce4a7713a7fdc4e87c3b68a879f905359b79348e238852ce2127f686c76bcd60a9a83ba71b5627aa0bea1d3445d6aed21988ce6c7428e91165e1741301a07f7a4931abd2fe5dae8876c703d83181814211c9e5332dc40289eb56f4ef332038b63c542e0dd10d5d8ca09c3aaa40cd19294e55ab6e7fbbe6b7bf6c075067d758621152916aa61f14ef6e3050a9acd70abac13bbcd86b5b04da2cf81c447e11cc723a51fd5ec78d7e7b643f67cd39d96468f968789e35a007f6328fd70d02e2e491fc72d2abb42a52158059a0ea9fcafa754749cd118ffd90a04a81a020000",
    ],
    [
      "ETag",
      "MAD5mw5rzu3xO/m+fiTGwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "5d3a2d046ddc8108f2114af919374c0a0920d030045ba0e3ddedf86ef0ee80140515229f784b2fe0052c4446db62ebf283be84ac45f8d2b0a12df498c2677e9663a3ec7a3bb5244585f1ebedcdb6539d65b6a91a8c3b66243bf1b5277049fde453ab7152b06ce4be0f5dcd98b3a3950c52aa695ed8513cc525ddf74a8b9da63687aa75541c4ff0aba44f500a56b3b48e49ef0b8edd13622785457b71d0cb9ffcbb5ebd0fb298c1babb86f3d946d775342639f0dead5b13556b576542d9192a9104d8003a0fcd4845de3c668a8ad006fc37f36919e8e3aa5332d211fcfe01ef4bbe4b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-5-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6e9b40107df75720fad8f882b1632792d5b83669a86c9c629c28aa2ab22c03dd0458c22e89a2c8ffdeddc5175c4769dfd8993967ce5c98b786a6e98f240bf5734d0f48fc5442f1fae98106fa89f40047b1f4b89fd3bb97ef2fabc16cfef5c93beda6e83aeb8c47a32a8a283443699e4093d1b2c0c0ce57cb565cd0324705a54d41d8ec378dfe7038ec197d63d0eb0e2a2883249a91ec5112fce63c67e7edf656462ba6344e00e584b5304d77f6f673b79d17f4013067edc3ac6d9188b53fccfb25a1187142b3d16a59692819143ea4882452c51e1c061787ec2d82d2562ca29f090684312d332e95553498661189cb42910ba6376114662579f7ac19f4a535b3269e866952a6999fa1144eb41071e4f3d71cb44b7731d7ee39307edfb29dcb853b1f7bf6c2f197932b6b3e6e4d16b3d5dc596ab757966b691c0509280a6da45da897231e4a984a1a0a1e9229699ef4d60409efa69bf63b73dc514812218ec126cc1f744e9131ec9c055130c0d1d0ec0751078260180cfac80c3af8ac07bd3000546750ca2a3cca68d60ba18bba46e89bd169dfef750deca34160faa2b76002981de32cd437e8f5ae165c00e230252ca78c6c9aad4f5c6bec59be7de93b9635b5a6fbd25f0a72147debda22d87357ce44a0ea6d8a5099f06955e861930eaa9773a917f651078f0ac80b428528b504b6e359ee78e2d93735196223671023fcba7c923b19a184c11e8d0a315a0ec59c86728eba339ed7eb55fb75bd0d6222e2e74ee7be1c1128d745d572b42e87793cb18e07ada8465959f5a5e7dace37bde65cbf4f738392f21d9ee78d59b63022c9be5f8aaaf1f7d7af462d852efeef8d3afdc7ca72ef2456f9a4c785080ac8f03ee97f2cba0456ee7f5f2f11bd3d261220eec92e3de3c22c7e39ccf6c9d5deca1f90547ddf1276fba6616e0905b0e0c711b594470745e6821432be6d457558aa3eae0f249535390aa68efbca7136235c37d68d3fc52e085213060000",
    ],
    [
      "ETag",
      "R+mYwJwU7LMBqT62maPn0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc595516fda3010c7dff32990f70a52c3484193fa001bdb905242214c5a2784dcf8c25c925c663b54a8e2bbcf7642c94ba74843ca4becbbff9d7fca9dec7b753a1db2e719239f3ae489effe14208e1f76a01ecc6609b24894d44b8e9904d235d1a0e8ce442f7e3e7ad8dfc3631ead639418043f3eee1feeeeca2819fd8694eab8576d693be69030a9ed5fd6ee547eab6534057362844991665b6b762fb23ae6565e85cbd9fc5b5d49915965bef6fdf1c49f924a3a75df8730aae8d61ef97f08bb6e9c0a469ef169093108c822b8fc752ef0192235b3e59534cd13e8492c4404b28298c452de092c722a107bdad5f37aae371a8d06aee70e07fde1393ac1882a8e994958afc81b5ea1a2c9125f4c8589db2f7b204abbacf8b91424ae35a15e212d1d4c3667e4cd77eafe2370360f6f07b5d86ab7716a998da931175295ad6f46af5a75257c42dba4eb9bc29356c83bc8188856d03cdf52c60448d90e1ee596e67943f62408fc6b9169c60472d612fdc0dba026ead090fad50fc6577c57f473dff44e7f1987d36b61a5d28f7d436e38bb9faec2f1fde25db8fe6e2ecffce4a8402e04ea2122c18e0ef76630f286b737e43c8a3ea31935ca4c22250ab0ee88ea91fc9d2bed8b6922c139397f018aea50d4fe070000",
    ],
    [
      "ETag",
      "PYZ5o2keZpcUfosoOOV3kQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ios_app` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-6-1588841517427",
    },
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
      "8d",
      "54",
      "ef6f9b3010fd9ebf02b1afcd0f421268a5a86b13ba21a5694b48a3699a12630eea8e606a9b765d95ff7d3690842c55b76f70f7eebd77e7b3df1a9aa6ff2469a89f697a40e2a71cd8eba7471ae8272a0302c52a73175fa70061e8ccfcdf97bf1ec4e472b1e8be0c87258a14d51cadb3049a9ce60c033f9bcf5a31a3798618a54d49d81c348dbe6ddb3da36f58bdae55967248a209497f2a820721327ed66e6f6db4624ae3045046780bd3f52ede7eeeb633461f010bde3e546d4b21defe50f73ca1180942d3e17c567ac839b025ac1149948b7d71187c3e646f11b46ec512fd4c30208c699e0ae5aca4c1348d489cb3825c32bdc9a00c179677bfb5803e7326cec8d75684f225cab29586b8b65c32e07922b42befe65a5bc9362392005f698baf8ee7486cb8d286da79a158b085c005490b4d1f0509d49464b61a93fbce01ed281409128843055b5a9d0132ecce691005168e6cb31f441d08023bb0fac80c3af8b407bd30005467104abbac47294d0d0bfa91d5c5a1611a66ff1499b61d7550d0e958c8c641370a06b669f5c0d02b86cdae1fcc000918139e514eaa49ea23cfb9f09da57bb59c3aced819efdb7f61e408bdf05c09f6bdf97424abeaa38a901cedb86cf6705007131072a6f5e63e9ae251031923549a2a4ed89dfa8e7731f2ddfb9a0db96e1388117e9d3da9858b50c2615f8d185a8300764d437596faedcdccf5dd9be9c564cf506cd0ed16c925ecfbceecbea73a9bff9a1d6e4679686554d91cf4f45a6e73f22ecb3d4af277689eabb06e1c7034fefefad1a871ebf26a56aef4bbb9e37d53b5454e653c8880418af76affb1caaab04cfffbe191e8ed3ba00ae453b093e74286e5a5c27c2f5e6ca5ba62645d765a11760766d7de12ca42268e113d73b0451cbd054a0bd6908aed28ca37a19ce3e6c0525eb3539429b8dcf1a93bfd52986f6c1a7f001980f026ce050000",
    ],
    [
      "ETag",
      "QgMneeddESTzBxhtLBWW2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5b",
      "6b",
      "83",
      "30",
      "18",
      "7d",
      "f7",
      "5748f63a6196de18f4a1dd641d885d5d0b1ba394543f2f9dfad924ae48f1bf2f89daf6c5e49cf35d728e17c334c96f5a84e4d92487343e55c0ea8718c45a5d7ce05526b83c4a2c389047550d82c6aa7ab349ead57a6c7f7f79ce2459be266f83d3e13c9bb5553c4820a7b2ee2291c4510a59c825fed1d8ec78ad1534073571bf677aa19ed069a22eb5b658ad5c67eedd4b39865af2b6ae3b5fb80ee9a4469f3bf96df4538e78f02102064500b707950c8f108877ed9cd3bcccc0e258b10078b74435b672ccb02a2943b424658d2d7b349d4e87f6c89e0c0793be3ac3808a140bd5b0fd24d7f50205cd7c3c2bf3c46ed3612d6cb3e89320d15d3cf70149e94f350b5601b9b24d77db193ddaddf62d6a01fc83a174c3417b78227d182fa8cc0a95859aa8e980caffb54c45c7198df10f7e5785301a020000",
    ],
    [
      "ETag",
      "TThyOQ61YXNE7hHDhG2qbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b7282300000d0bb642d0e46a3d09d948f855406d458dd642084bf800905b1d3bbd7e9bbc1fb0111635c4adab7156fc01b9822a8cfd9dc6b35630a520f1f98add62e748e18b6cf31772913fa1ea9d062f94ad9449c4973b88d9a470f17790bc2b1f2cf5a4b4e629984f6b008d42a83a68269d337303e9138c422e59b75e2e54351119d841ddd3248ad0581a49f9a02595b9f946a5aeccffcee56995f1a4e9c0c0efaaafaf40325ddb13685fe8dde07be82771c798a5da7505cae538a1f5ab6bbfa9f3b2f2e0db9966006f8a32b0497b478cd9648d767e0bf49fba9e3afabc123c105f8fd0388aff84105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-7-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6f9b30147dcfaf40ecb54948f301a914ad51425aa484ac84b4eaa689da8e616e01536cda5555fefb6c1312b254dddee0de73ce3df7fadaef0d4dd39f48bad12f341d92e8b9c0f9db97470af53399c11c4432d3bff99d184febf9f5180cbbdf67eefdfdd56c138d46258a2836034916e326a3458e30bb58af5a514e8b0ce494368560d36c76fa9665f53afd8ed93b374b2ac3713827e99314f8c579c62edaedca462ba2348a31c8086b219aece3ed97f37696d3478c386b1f576d8b42acfd69ddaf314580139a8ed6abd243c1701ee0049058ba389037f0f258bd4540d28a04fa85200c10a245caa5b35206d1342451912b71a1f42e8222ac2cef7f6b017d65cfed89af211a17491aa420c167da067010f0b70c6b336fb9d01e3866fca1e5b8b3a5b718fbced20d56936b7b316e4d96f3f5c25d6977d7b6676b1cc0182b096da45daa3f57fc2863aae846e8905459f365b666486477d3743e38c7bd841411e618dec102d318808e650c61084d145add3e0c0d0ca105cd3ee842030d7bb8b78118d41594b3920f529a9ad6c0e80d210efa21b0829e651801ec5983005ae110758029f248dfb1b7fb5e508e01c753c232cac86ed8fac4b3c7be1d38b3c0b5eda93d3db4fe9a9313f49de708b0efaddd8960d5c7148222e6d3b2d1e3211d752fcfa5ded867133c6920cb0915a6d41238ae6f7be389efdcd66c888d9ce308a0b7d5b3dcc910c40c1fd8201747cb71bea01b798eba3b5ed4fb55fbf5ad023181f8b1f779684700e5baa85e4ed6e5b88e2fd6f16814e55196517de57b8e7ba5d792db8f656e415c7ca0f3b20bcb1186243ecc4b4935fefefad9a895d0c5fddeb9d36fd6b6772fb92a27331e0e718e537428fa1f8b2e8965fadfaf9740578f892488f7645f9e711116570eb14371b5b7f2029272ee95e0f96038342a4141ccf909c2ec98dd0a71f2a0c85a38c129af46513e2ce51cb747968a9a1d459370710bdcdd116e1bdbc61f0e0f39ff13060000",
    ],
    [
      "ETag",
      "5Qxm0kULHAa93ZFNYYGFdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "df",
      "6bea3014c7dffb5748eeabc23afcc5c007bd734ea8ba6937061791ac39ede2d2a64b52871bfeef4bd23afbb24b61425f9a9cf33d271f7a0ec9f9741a0df44a1382ae1ae899466f1988fd9f08d4bdd92c41664c49bda43c91809a261a148e4cf4fe75d6f5a2c9cd1bf99804ea51c4db97d9533418e45132788118ebb84f6d693ba4c088d4f63f6b370abfd5121c833931e02c8b938d359b2759ed532baffce5743e292b312756993f78de70e48d51211d9a3f43085678638ffc1dc2ae6ba780a12d7f5e42080292004e7f9d0abe85404d6d79258e53062dc93311802c2026319723c1b3140bce5bdad5eab5dc4ebfdf6fbb1db7d7beec1da3190fb0a23c31090f2bf48d575c61b6e4efa6c2c8bdcc7b20723baff8b114282c35a15c212ded4c3625e8db7768fe27703af7bbed526cb15b3ba5cccad4900aa9f2d657a317ad3a139ee13ae9faa650560b39828480a8054dd30d26448094f5e0b9dce034adc81e2d16deb9c83821825352137d47eba032b5ab48bdf116c333be2bfab9af7aa7af87fef85c58a9f4635f91eb4f67e3953f9cddfd08d7dff5e9991fed15c83bc1f510916047877bd1ee777add0b741c457fb91935ca4c222532b0ee00eb917c4b95f6859849700ece170c216d12fe070000",
    ],
    [
      "ETag",
      "ykM6LgGFqdzGctVrmjhMXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `date` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-8-1588841517427",
    },
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
      "00000002ff8d54db6e9b40107df75720fad8d8f8ca259295463649911c27c138515355f60203d91458b2bb248a22ff7b7701dbb88ed23e19cfcc3973e6ececbeb71445fd8db3503d55541fc7cf05d0b72f4fc4574f6406388a65c688addbf47236b2b3c799612d1f8c87e2e2ebeb785c55e112cd509a27d066a4a001b0d3e5a2135352e48812d216846db3dd1b99a639ec8d7ac6b06f5450064934c3d96f49f0c879ce4e356d2ba3131312278072cc3a01497771eda5afe5943c41c09976d855138d98f669dfb384048863928d978b4a43c180ae204538912af6e0d0ff76c8dec128edc4a2fa0507808280141997ca2a9a8064118e0b5a920ba6771114e152f2ee6f23a02eec993df194758838ac15c494d58a022b12ae5cb8d757ca5acc18e104d85ab9ff6ebbb6b2c6e15a192b6765bb922a04c6715636f4909f40a38dc8d61e391f9cce8e4292208e18d4652ba3aba39ed9b5fcc83782c81c8cfca80bbe6ffac6080dfc6e600d6118fa809a0c5cf6aef02823d9405aed1b43e4ebf2578f06233d1aeaa3be6ee946d71c58a80b8609a15a336c76f30414841753cc72c2706da33a71ed73cf5e3917abb96d4fede97efc578a8faaef5d47147bee723e11a8a6551112d64eab610f8d3a70800b4f9bc37de6e2d10039c544882a8fd7997bb67b3ef19cbb860cb16b338851f0b67896db16a184c11e8d284a8103bd22a13c4bf5e67ae178cef5fc7cb66728d7e7665bc944d9cf9dd8fd4c4d36ef2d3fdc8cead0aaa894a90fd5466e73f221cb1d4a8a0f685eeab0da3be068fdfdf5abd5e056c5bdac55a9b74bdbfd21b1654e665c88804216ecbbfdc72a4b6095fef7ab23aab78f8004887760d79e711116972a60fbe6e556ca2b86d36ad29ab06f587d734b2880941f55888bd4dd561c3d04b217a490f1ad15d58350f9b839905434e49430592e767ceecc2f4bf1ad4deb0fe0bcffa9cb050000",
    ],
    [
      "ETag",
      "7g9QmGL5EnhL79UZ7ZuF+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d51d16a8330147df72b247b9d10c5a20cfad06e850da4b45d7d1aa5a4f6ea6cd5eb92b821c57f5f12b5f525c939e7dedc9c939b65dbe49a5767f26293539efd34c0dba70ce4561f76209a420ab5d5580920cfba1a24cb7435f557e5d50f2feb2d2c689def37e80771369ff75522f98692a9ba9b420aa7391467a1f097c1f6c01bad6225e81b8f476e069a1b064db6b5d1de16fbd5942ff16cf8751c458b65b42283d499fda0d6cebce382a71da4c0a14ae0f19a9ae30512f9616c0b56d60538021b9e801886e8c65ece383635e3888ea29cd071676118faeecc0d7c2f18ab0b4c98ccb1d20df127b98f972859b1c33fed9cb87d34bc877d10630c249d64334d4749bfbad9a31e75a8e75097dcb56e381dac111d1e5397ad04b1e1a83c09304e28192379456d59ea44246fc0d009535ff69ecb81b33aeb1fb387d7e11d020000",
    ],
    [
      "ETag",
      "04Emk48jNQeA0piTPo47Ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfdb6e82300000d07fe9b31aed04e9dec6451d976560599097064a692a089522962dfbf7999d3f383fa0a0942945c6be611d78057301d18aae82deb2e7b8367069e87eeadddb85bb76e147797f3d47d8ab0e7e9560ba1da12ff48874663e58a4b3ef36e0f64e2795b74b35bcab13de77b50b63d9ae35f245e9b44966b6c7f312669394d8278340325bbbf9e0d461dc3d0268351b343569e3448c1e266fcb4bfeb589dbd48ac8db9ecf156b73fa71bc5f23ce2d4d1466974f95b8a8104b645a3782efefdd148ab038551c2c00d3520c4c11f19cbd18082dc07f938cb364cfabcd8a810de0f70f9b1b9f3b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-9-1588841517427",
    },
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
      "00000002ff8d545d6fda30147de75744d96b4b081f2554422b82748d0a614d42ab699a52c7dc646e439cc60e5357f1df673b7c8451757b82dc7bceb9e75e5ffbada169fa33c996faa5a647247929a178fdf44423fd4c6680a34466666b3bb9375becb6c37ebb4fc6f47602be73371c5628a2d80cadf214ce192d0b0cec72e137938296392a283d1782e78373b3675956d7ec99fd6ebb5f5119a4f19464cf52e027e739bb348c9d8d6642699202ca096b62badac78d75dbc80bfa049833e3b8aa210a31e3c3ba9f538a1127341b2efcca43c9a0086185482a5d1cc8cbe8ea58bd49d0aa9908f49a604018d332e3d2592583691693a42c94b8507a1341115696f79fb580eedb537b1c6898a6e52a0b33b482336d89380af96b0edab5379f698f1c187f6c3aeef5dc9b8d0267ee86fef8c69e8d9ae3f97431737dede1c6f66c8da3280525a10db52bf5e58a0f654c155d0a1d92296b81ccd60c89ec769ace3be7b8979022c21c832d2cecb72e9069b506511cf5716c757a51dc8228b2a27e0f75a2161e74a1bb8c00d51594b38a8f329ab5076dd3c2fd8b105f0084dd56af170e3af120ecf45a4b64596d343091be656ff6bde002108709613965643b6c7decd9a3c00e9debd0b5ed893d39b4feab2027e807cf11e0c05bb863c1aa8f294665ca2755a3c7433aea5e9e4bbdb18f2678d2405e102a4ca92570dcc0f646e3c0b9afd9101b398504e157ff45ee648c520607362ac4d17228667429cf517747b37abf6abfbeee404c20beef7d1eda1140b92eaa97937539ae1388753c1a4575945554f703cf71bfe8b5e4e67d997b9496efe8acb76139c298a4877929a9c6dfff7e346a257471bfb7eef4bb85ed7d935c9593190f622820c387a2ffb1e89258a5fffd7a09f4ee319104f19eeccb332ec2e2ca617628aef6565e4052cd7d27d8b6fa5d73272888053f45889f1de2e44191b5600519df8da27a58aa396e8e2c95353b8a26e1e216b8db23dc34368d3fce27f3d313060000",
    ],
    [
      "ETag",
      "MvEgV10sK3szNj/LKDeSIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "df",
      "6f",
      "9b",
      "3010c7dff92b22ef7189542ad26495fa005bbaa5223f46a8fa3045918b0fe6ce60669b4c5195ff7db6210d2f9d90168917ecbbef9d3fe24ef6bd3a8301fa450b826e07e89966bf2b10870f19a8ef661381ac98927a297921010d4d34289c99e8d55a44def2a1ca3eba0f617a1f3d0571b0f0efeeea2899fc841cebb8576d693ba5c088d4f60f6b0f1abfd50a9c833931e1acca8b9d358767591d4a2b6fe268befcda56724eacb27c0c433f0867a8918ec3f721042bbcb347fe1fc2ae5ba781a117fe1c410a028a04ce7f5d0afe02899adbf24a9c970c4692572201d9404c622d67825725169c8fb46bf469e48ea7d3a9e78edd89773d3945339e60457961121e37e80dafb8c22ce27f4c85917b5df740d4765df1532950da6a42bb425ada9b6c4ad09bef38fc47e07c19df78add866b7755a999da9291552d5adef466f5a75213cc37dd2f54da1ac1772060501d10b9a963b4c880029fbc173b9c365d9911dac56e1a5c8b8208253d2137d4ffba032b5ef48bd0f57fe05df15fddc77bdd35ffc787629ac54fab1efc88de78bd926f617eb77e1fabb3d3ff3c141815c0bae8788043b3adc2b6f3a9edc5ca1d328facccda85166122951817527588fe46f54695f8a9904e7e8fc05371e3301fe070000",
    ],
    [
      "ETag",
      "OPrR4NJug+1JLfFRWBTBMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `stamp` as __result FROM `profiles` WHERE `id` = ?",
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
      jobId: "grouparoo-job-10-1588841517427",
    },
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
      "8d",
      "54",
      "6d",
      "4f",
      "e24010feceaf687a5f055a2cb498108f40f57a07a8a568cce502bbcbb4ae966eed6e359ee1bfdf6ecb4b398cf15b3b33cfcbccceee7b4dd3f4279a2cf5334dc7347ace217bfbf6c8b07ea2322050a432af377f87bfd2f1ad3be60ff9258ec670dffad9eff5ca2a5aa0395aa531d439cb3302fc6c366d4419cb53943156978475d3a89b6dc7712cb36dda56cb2eb11ce270449327c5f02044cacf9acdad8f46c45814034a296f10b6dac59b2fad669ab1472082370f659b5289373f173e8f194182b2a4379b9626720ed91c5688c6cac61ebdc4df0fe91b14ad1a91ac7ea10410212c4f84b256d210968434cab3825c32bdcba00c179e77bf95803e7547ee20d0165c48958586b8369f67c0f3586817fed5585bc82e431a035f68773f5cdfd51674b9d07ada79a157702d810b9a148a01c231547464763325ef8303da5128122410874dd9dc363ac8748c2e0eb14d42e7b48d43033076b0dd46a7d8205d0bac25065465104abbc4a3842504b72d13d91669772c30306a616418124a60e9e056cb468e69753b1d43df30ac77fd900c908021e529e37433477de0bbfdc09d7b17f389eb0edde1befdd78c1e55dff99e2c0efcd9642051d55185488e7658367b38a883090839d36a739f4df1a88134a34c9a2aced79b04aedf1f04de6dc5865cb6114488bc4d9fd5ba8528e6b047a30cad404036664b7596faf5d5d40bbcab497fb46728f6e77a5bc965d9ef9dd97d4f55b6e02d3ddc8cf2d0caa8b2d9b1f44a6e7df221cb2d8af30f685e3661dd3ce0a8fdfff5a756e1d6e5cddcb8d26f66ae7fafb0454e657c08218384ecd5beb0ca0a58a6bff0f0c8f2ed33a010f225d8e9cbdb28a8bc5584efd58bb554778caeca563784adae6d1a5b4209ccc47185d336b715474f81d2821524623b8bf2492807b93eb09457ec1430552e977ce24d2e0bf3b575ed1f1439c2c2cf050000",
    ],
    [
      "ETag",
      "wQzDKpMVEMshuGbgMeY2JA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30147de72b48f73a165188b8c407352623d1c5397dd816636abd321c70b12d3a67f8f7b505d497b6e79e737b7b4e2f966d939f38db92679b6ce2e850003f3f4420dff4610ea248a4505b8e9900f2a8d52069a4d59f1dd61eb5471fe1325f847fb343e7d73bc6a77ebf5209f60d2955ba8b420aef6248b642e12f83edba6eb88ca6a06f5cafb919686ea83979ce0db708a7e3f7c5603abb2753dc1af27539990c869331a9a9d2ec2bb596e6317bdccc61071c3206b727e51cf7c06468bc0b9ae60938020bce40d443746345471c8b9c724447951cb7e5b87e10049eebbb5dafdd6de409322a63cc74c7f29d5ce74b943499e349fb276e1510af6015471306d9dd25749f91a28ea6f9c90f5abedf737bdeb847ae74599f56568356b7c1c3b30431e3a87c09306e5aa4896584dab6d4a9485e802933aafeee259675cd2aad7f763a317626020000",
    ],
    [
      "ETag",
      "Z3c2C2CYIUpTIzPq3x4viw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfd95283301400d07fc973ed54d6e09b0c4b252065294a5f322c974a298b09380d1dffdd8ee70fce1d1555059cd379ec60402f481492b1adb664c4a688aab86c667668afa3bc6467cf0bdfa8b68723186391595df29d0fce2df06b1c2922c1bb4ea12ce434d2567b3da9fe57a95c03ebdd35cc8fb8571ba22ba46732b321cfbda342a4c61642e5c66e50fd14071d4fe6f55036104a17b55e080ec52db1b5ce59b2d6b50a5fbcb25380c740cbe953dbd7b39b4e75f9ece8987da61739d4ad8cc0dce2f86cfe387bc88628401b04b7a965c069fb98c9aa616cd07f93ce6282c7d584820143bf7f38da6e4b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-11-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d54ef4fa34010fddebf82705fb52d2db5d4a4399b164f722d554a3597cb059765c055ca22bbe819d3fffd7697fea05763fc0633efbd79333bbbef0d4dd39f4816e9e79a1e92e4b984e2eddb230df51399018e1295f16e1edd71741dfefdf9801f6ce4fd64f3d1eb7058a1886233b4ca533865b42c30b0f3e5a29914b4cc5141e9a9103c358c53a367599669f48cbed9e9575c06693c25d9935478e03c67e7add6d64733a1344901e58435315dede2ad974e2b2fe82360ce5a87655ba2126b7d5ef87b4a31e28466c3e5a232513228025821924a1b7b76145e1cca37095a3513817e211810c6b4ccb8b456c9609ac524290b252e94de45508495e7dd6f2da02feca93df6354cd3729505195ac18916218e02fe968376e9cd67da3d07c6ef9b8e7b39f76623df99bbc1627c65cf46cdf17cba9cb90bedeecaf66c8da3300525a10db50bf5e78a1f654c158d840ec994355f666b864476334ee78393dc494811618ec10616f4db67c8b0da83300efb38b6babd306e43185a61bf87ba611b0f4c30a310505d4139abf828a3d9a06d59383aeb05a66976027300fdc032a11b589169b63b060ead8ea96fd8eb5d2fb800c46142584e19d90c5b1f7bf6c8b703e732706d7b624ff6adbf16e4087de73902ec7b4b772c58f531c5a84cf9a46af4704807ddcb73a937f6d9048f1ac80b428529b5048eebdbde68ec3bb7351b6223a79020fcb678963b19a394c19e8d0a71b41c8a198de439eaee6856ef57edd7f516c404e2f7cee7be1d0194eba27a395a97c33abe58c7835154475945f585ef39ee0fbd965c7f2c738bd2f2039d974d588e3026e97e5e4aaaf1ffd79f46ad842e2ef8c69d7eb3b4bd5f92ab7232e3410c0564785ff40b8b2e8955fa0bef97806f5f13c9100fcaae3ee3222cee1c66fbea6a71e50d24d5e0b782ddb63930b6828258f063c499616e11472f8aac052bc8f87616d5cb520d727d60a9acd951340917d7c0dd9ce1bab16efc03d5f519b816060000",
    ],
    [
      "ETag",
      "bRQjNCdPbxKhchEaRKsOAw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc595c14ee3301086ef798aca5c5b89a096969538a44b172a42c3b6e1b4aa2a634fb2669d38d84ed90af5ddd776529a0bab4854ca25f6cc3ff6a7ccc833ef5eaf87feb09ca26f3df4ccd2d712e4ee2c05fdd36e96a04aae95590a912b407d1b0d1aa7369a9570b5ba21fc366257e97df63711594482ebeb2a4a91df906113f76e2c63270c3855c6fee5ec5eed775a8e33b03712c1cb2cdf38b37f94f5ae70f22a5ece17b74d2513d4298ba7300ca6e10cd5d2beff3984628d37eecaaf21dcbaf66a187a11cf4b4840424ee0f8d785142f40f4dca557e1ace03050a29404540db1072b3995a22cb01462605c03df1ff8a3c96432f447fe7878313e847341b06622b7279e56e883af85c67c29de6c8a917f511541567695f2432e50d2a842334546dabac252f4e1dbf7ff13385fc497c3466cbd5b7b8d93ada909934a57b56f47af6b75223cc75dd2cd5361bc13720a3905d9099a151b4ca904a5bac10bb5c145d1923d8da2f054649c532918ed88be655d50b9deb6a4fe08a3e0847dc5f4fbb66ffa268867a7c22a6dba7d4b6e3c7f98ade2e0e1f153b8f9ae8f6d7ebad3a01ea5305344819b1dfef970321a5f9ea3c32cfa2eecacd1761469598273136c66f21dd3c69760aec0db7bff003da93ccfff070000",
    ],
    [
      "ETag",
      "iue9SDclGOi9gKmxfomOcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-12-1588841517427",
    },
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
      "8d",
      "54",
      "5b",
      "739a40187df75730f4b1898262c0cc38494649cad4688a984cdbe9e8821f741364c9ee626a33fef7ee2e5eb066327983ef72cef96efb5ad334fd096773fd5cd3439c3c1740579f1e49a89f480f7094488fb31a78bdaf2fcc8af2911dfffdbc5a7a3f6e5ebadd320aab6c8616790aa78c143402763e19d7134a8a1c51424e05e0a9d93c35db8ee35866dbb4ada65de63248e301ce9e24c26fce7376de686c75d413429214508e593d228b9dbdb16c36724a1e21e2ac7148db104cacf13ef1454a22c431c9ba937129a26040a7b040389532f6d9f3f0f210be8ed1a29e88e8258e00451129322ea5953011c9629c1454810ba457611466a579f75b31e86377e0f6026d1663caf834430b98698869d3290556a45cbbf647b7da4c941ae314d84c7bf8e2faae36534a675a57bb50bc0a730e8ce34c3107284ca1c227bc9b6e796f0c6a07214110470c366153db3843a66374c238b4a3d869b5c3d880307442bb8d5aa111752cb0e621a02a0297dc653eca48668696832cdb301dabd53c6b19ed8e2346d0b6cdd8e9c461d334510c60cf1d7d83b0ded51351401cfa98e584e14d3ff59eef5e05eed4bb9e0e5db7eff6f7e5bf507c14fde07b2238f027c39ec8aab62a46a2bbfdb2d8c3461d74808b9e568b7baf8b4705e41413214acdd91b06ae7fd50bbcfb8a0cb174034850b41a3fcbb58b51ca609f8da8d8060ef496cce52cf5bbd1d80bbcd1f06ab047507b74b78d6422ece74eecbea62a5ab0ca0f37a31c5a69d5c781ef0d6ff48a737df226cc3d4a8b3770961bb30e8fe2420866c625fc516d523752c5adfdfff5ab56e1d3c5d96ea4eadf26aeff5de62a9ff4f81003852cda2bf8c07ecbc4d2fd815749846fdf0899219e891d3fe3c22c4e2d627b76b5abf2f0f04249de02b64cab656c014522e5c711edce2ee2e89d905cb0808c6f7b51be176523d707928a8a1c9526c3c5e60f37035dd7d6b5",
      "7ff779beb0ec050000",
    ],
    [
      "ETag",
      "8yLICKws4cpO7fz+yvIZGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "df6f8230107ee7af20ddeb4856a3d12df1614e335d889938b387c5988a27c30187ede1420cffbb6d01f5a5edf7e37abdaf67c775d95f9cedd88bcbb671742c40960f11d0c21c025045424a6f39660ad8a3710389c8b8f947f97c94dfd3d994fbe3717eea079c568be1b076a9f01752a17d678d34dec790ec94c63f16bb0d6fb54ca4606edc6ca46d686f68342a73ab2dbf82d9fcfd5e49716795f9caf75f47fe84355265f7b55e2bfb92036e03d883842c84db7b728907086966075722cd13f014163204d5343185b51c492c7221113d4d79bce3f1de6030e8f21eef773bfdd69e602828c6cc54ac96ecda9f904412e0bfb2a1d5e9c81ad659b449b0fd5d3cf70169e9648a2732067665abe6b4765ab4bef51b9504ea53a21e47811de289b569bca199964c18240bb07428f47f4d636a38a7722ee78520701a020000",
    ],
    [
      "ETag",
      "1Jy9qrWHIH1LDDpv7R1tUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "d0",
      "bb64ad8e2522a43b508142ab8d9fd2b2616208128290012244a777afd37783f7008452d67569df08568357a0898166741635b6ab311506db98213b1dae88165842d2e8cc4aaad3703f607e37841d13745ba0d61f6e6fde3960c6b9e82e4ede57d370a7ea1c55d826a6165c1d449337c3b6f2128b07f9ea854305ed121e2ff3f27a145064b6339a85da79b22453ba6c7aba794fad6d589bba8df06dbf9749bb7623b956bc0e7e1ccf52a34ebf3e77cb53491646bcca2a3ffbf6558cf05acc254c3e220126808d92b7ac4bf973064d8426e0bf99f65ab2e7d565a4652df8fd03f27a970705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:11 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-13-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7df75720fa1a5f003bc691acc6b5498364e31670a2b6aac80203dd04b3845d525991ffbdbb8b2fb88ea2bcc1cc3967ceccceee6b4b51d4279cc7ea95a286387daea0dc7c7a24a17a2132c0502a3269fefc58e8e827f35cd773be381bf7ce49d3f1b84661c9a6685d64d0a6a42a23a0572baf9396a42a5049489b0bb635a3ad0d4cd3ec6b036dd8d78735974296cc71fe2414fe3056d0ab6e77efa393129266800a4c3b11591fe2dd17bd5b94e4112246bba765bbbc12edbe5ff8734622c430c9c72baf365151280358239cc9660fec38bc3e95ef60b4eea41cfd8223405144aa9c096bb54c44f204a75529c5b9d22b0ff2b0f47cf86d0454cf9a5b535f894856adf320476bb85062c450c036052837ee72a13c30a0eca1633b374b7731f1eda51378d35b6b31e94c97f3d5c2f194fb5bcbb51486c20ca4843256aee59fc37fa4315934e63a3897d67c916d18e2d9dd38ed374ef2202144b8390a3b5830ec5d22cdec8dc2241c4689690cc2a407616886c30132c25e34ea433f0e013515a4b39a8f7292c7faa5a9f5623330cd380cfa60a0c04c925190e8b131181910f7fbb1ba636f0fbd44252006334c0b42f16ed8ead4b526be15d837816359336b766cfd6f89cfd0f7aecdc1bebb72a69cd51c5382aa8ccdea464f8774d2bd38976663ef4df0ac81a2c4849b924b603bbee54ea6be7dd7b0c137720e298a36deb3d8c90465148e6c54f2a365502e482cce5175268b66bf72bfbeed4194237e1d7c1edbe140b12eb297b37539ade3f3753c19457d947554f57cd776beaa8de4f66d993b94556fe8bcecc2628409ce8ef39252adffbf7eb71a25547ec177eed4ef2bcbfd21b83227322e2450421e1d8b7e60d105b14e7fe0fde2f0fd6b2218fc4139d4a78c87",
      "f99d8be8b1ba5c5c7103713df8bda0a16bbab617e4c4929d237463b0479cbd28a216ac2167fb59d42f4b3dc8ed89a5aa6147d2049c5f03677786dbd6b6f50f8b3faa6016060000",
    ],
    [
      "ETag",
      "gnqjp2aZtSRRSNBNyRVNgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc595df4fdb3010c7dff35754e691562390fe10120f2d9491296d591b5e365595892fc1cc8933db29ab50fff7d94e4af3c2146995f212fbee7be78f7227fbde9d4e07fda21941d71df44c93df0588dd5902eabbd92c41164c49bde43c9380ba261a144e4cb43f7bf8f26350447f92972b2fe1a1a7be25e76f373765948c5e20c53aee5d5bda8e293022b5fdd3da9dca6fb50ca7604e8c382bd26c63cdee5156bbdccaab70e9cfbfd6959413abcc9f82603c09a6a892f6ddcf21042bbcb147fe1fc2ae6ba782a157febc84180464111cff3a17fc1522e5dbf24a9ce60c7a9217220259414c622927821739169cf7b4abe75ef5dcfe6834f2dcbe3bf42e878770c623ac28cf4cc6d30a7df01557982df99b2931722fcb2688d22e4b7ea8058a6b5da897484b5b934d09faf0edbbff08f4e7e1c0abc556bbb553cb6c4c8da990aaec7d337ad5ab13e1196e93aeaf0a65ad9013c8088856d034df60420448d90e9ecb0dcef386ecc962119c8a8c332238252dd1b7b40d2a53db86d4fb60313ee1bba2dffba677fa6e1c4e4f85954abff60db9a13f9baec2f1ecf153b8feae8fcffc64a7403e0aaea788043b3bdc0b6fd41f0e2ed06116dd72336b9419454a1460dd11d633f9812aed8b3193e0ec9dbff7517ea6ff070000",
    ],
    [
      "ETag",
      "IMH/Z6ucxgh34goT4tJg+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ltv` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-14-1588841517427",
    },
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
      "8d",
      "54",
      "ef",
      "6f",
      "da",
      "3010fdce5f11655f0b0408bf2aa19641b645a3b40da1d5344de03897d434c469ecd0a18aff7db613208caaeab7e4eedd7befce67bf55344d7f26b1af5f6aba47c2970cd2ed9715f5f40b99018e429909bffaf73f5fb693e7c048e8eb68e83eade8f87e30c851445533b44e22a8329aa518d8e57c560b539a2528a5b42a08ab0db3da68f77a3db3d16e74cd6637af65100513123f4b8627ce137659afef7dd4424ac3085042580dd3f5215edf34eb494a578039ab9fcad68512ab7f2c7c15518c38a1f1603ecb4d640cd205ac118954b3876adfbb3ea5af11b4ae8502bd211810c6348bb9b496d3601a0724cc52452e98de44508495e7c36f29a0cfac893572b565c4374b0d316db148816511d7be39b737da52f4189008d8527bfc613996b6541697da40bb52828acc07c649ac245de445501212d9624cf63b2774a09024882306056cd1353aa8d133fa5ee07571d06bb5bdc000cfeb79dd366a7906ee9b60fa1ea0320397da793d8a69dcf18d160efc5edb373cdc04b3e59986df6e74ba4d1f812fe21d6c1ad0e9e805c3eed00f4e017118139650468a41ea23c71abad6c2feb6985ad6d81a1fdb7f4dc919fad1b105d875e653b1a95679540112d31de7cd9e0eea64025cccb4dcdc47533c6b20490915a6d401db53d7728623d77e28d910db368110e1edec45ee5b802206c76a94a23570486fa82fcf52bfbb9dd9ae7d3b1d4e8e0c6a81eef6482660bf0f668f3d95d9dc6d72ba19f9a1e5517de63af6f4bb5e4aee2edea5794051f60ecfa608ebb012578312665cc35f35267539cabc95ffbffe544a7abab8af8555fd7e6e39bf64adcac98c0301a410e3a3834fecb72cccd39f788e047cff38c80af13e1cf419176171d5303baaab5d95178fac95e53d61abd96f77f684a230e5678856c3e8ef11670f84d48235c47c3f8bfca1c8",
      "07b93bb19495eca83209179b3f2d0e7457d955fe01e50cd03ce5050000",
    ],
    [
      "ETag",
      "gBdQKqyLkf0powCAThjoDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "dfaf58eaab53cb4740131ec0483419a253c2835948d9eee670dbad6d272164ffddb6db8097b6e79c7b7b7b4e8f8eeb929fac8cc9834bb659fa5b81385ca5a0decd210059e54aea8d6329815c9b6a502c35d5eb942ef68bdb79b65ac7bea29cfbfd653f9d4c9a2a197d43c174dd51238d930cf2586afc65b1dbf2562b5901e6c6cd46d881f6865653076eb5b9bf9c7e5e0a05c656785df9fe74e63f9156aaed1eeab5b60fd9e13680040494119c9fc305ee20522fd6b76405cfc193588908643bc43436722ab0e24c207a9af2e8c0a3c3f1783ca0433a1af4465d798e11531996a663f5414ef3152a9607b837de096dc2110d6ca2e88220c9453a97f968e9cf34f786f737b4474e7cdd9e42a743e179e2eca040be09d48624581b77a4cbe3118d5f65e250a2024b474c7fd873a65acea99d7f9a562fcf1b020000",
    ],
    [
      "ETag",
      "Wg1MwM/FiUWdLt1ppL3O3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb6e82300000d07fe9b3181994c1de281566a403868cc14bc3a5d14eb9b4a0a12efbf7b97dc1c9f90655d3b069a2f370663d7801aa7a72d6cd7a3fd84825cda77aa59542611f252cdd1d88a6caf998fbd713773381c24b420416fe0837bbce8ce1506a01e9b77edc59cf763a8a12cfc21bf196dedad2f2df72f70e979b347a41508031a77d644ad3c90eacab23473742fb83883d4527ff8f8db826ba1e5e5b2ecbe5cbb8d744cb8cf3525df4f742528b26fa0d6dbce908716dcb7629820c8a9c25419ae158ba5e53801560cbc8259b287fcc0ce8382bf0dfa4b31ad9e38a582599043fbf0be07a0005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-15-1588841517427",
    },
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
      "0002ff8d54ef6f9b3010fd9ebf02b18f6b13d2c0422b456b96d01629211d9056d33451630eea1630c5265355e57f9f0df94196aaaa940fe1eedebb77cf67bf7514457d2679a45e286a4892970acad72f4f34544f6406384a64865dffb8371dffeb6356ceb515cfbc5b64de8d47a3a68ad46886b222855346ab1203bb587adda4a455814a4a4f05e169df103fd334f5bed11fea67c306cb208d67247f960c8f9c17eca2d7dbeae826942629a082b02ea6d92ede5b9df58a923e01e6ac77d8b6273ab1dec78dbfa714234e683e5a7a8d888a41194086482a65ecd151787948df2528eb26a27a4530208c69957329ada1c1348f49529535b9607a134111ae35ef3e5b01d5b366d6c457304dab2c0f7294c18912218e02fe5a8072e52ee6ca0307c61fbab673b570e763df5e388137b9b1e6e3ee64315bce1d4fb9bfb15c4be1284ca1a65046ca65fde5888f5a58dd34123c24afa5f932db1224b21b3bed774e724721498438069bb260a87d437d533b0fe3708863736084b10661688643030d420d9feba04721a03643adacc1a35cf8a547860ec650700dcc400f210a4ccde80706f485c110c606d6d50d7abd9b059780384c092b28231bb3d5896b8d7d2bb0af02c7b2a6d6743ffadf921c55dfbbb628f6dda53311a8b64d31aa523e6d063d34e9607a792eedc13e72f06880a2245488aa97c0767ccb1d4f7cfbae25436ce40c12845fbd17b993314a19ecd1a81447cba19cd3489ea3ea8ce7ed79ebfdbadd163151f17ba7733f8e2894eb52cf72b42e877d7cb18e07563447d94455cf776de75a6d25d7efd3dca1b47a8767b5094b0b6392eefdaaa93afffffbd369b550c505dfa8537f2e2df797c4d639997121861272bc6ffa894597c026fd89f74b946f5f1389100fcaae3fe3222cee1c66fbeef5e2ca1b481ae3b784838139d4b6840258f2a30a5dd3ceb615472f8aec0519e47ceb45f3b23446ae0f24552d39354c968b6be06cce70dd5977fe01180f112316060000",
    ],
    [
      "ETag",
      "sGBW8NT+hmrM0vtmSPa8VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "c1",
      "6e",
      "e2",
      "30",
      "1086ef790ae41e17a40641a1957a802ebbcb2a8516422f1542269ea4a64e9cda0e2daa78f7da4e28b9b48a54a44851ec997fc69f325666de9d46033dd384a0ab065ad3e82503b13b8b40dd9bcd0c64c694d44bca1309a869a241e1c844cfb78bcb1795bdfdda80f7fcf4ff01a2fbc08faeaff328193c418c75dcbbb6b41d5260446afbd1da8dc26fb504c7604e0c38cbe26465cde65156bbd4ca737f369efc2d2b312756992c3c6f30f446a890f6cdaf21042bbcb247fe0c61d7a553c0d086af671082802480e357a7826f2050635b5e89e394414bf24c04200b8849cce548f02cc582f39676b5dcae7efafd7ec7edbabd4ebb7708673cc08af2c4642ce6e893afb8c26cc65f4d8991dbce2f41e4765ef2432d5058ba857289b4b435d994a04fdfbef94de078e25f744ab1c56ee994322b53432aa4caefbe1abdb8ab13e119ae93ae7f15ca6a2147901010b5a069bac2840890b21e3c972b9ca615d9c3e9d43b15192744704a6aa26f691d54a6b615a97fbce9e0847d45f7fbaafff4ef813f3a15562added2b72fdf1ed68ee0f6eefbe84ebf7f2d8e6873b05f24e703d4524d8d9e19e77fadddec5393acca21b6e668d32a348890cac3bc07a26ffa34afb42cc24387be7032d136e21ff070000",
    ],
    [
      "ETag",
      "SvU9qtux+jeLkhJVegQcTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `ios_app` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-16-1588841517427",
    },
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
      "02ff8d546b6f9b3014fd9e5f81d8d7e6410225a914b5594a37b434ed80b4aaa62931e6c2dc124c6dd32dabf2df67431e64a9aa7e83fb38e7dce36bbf36344d7f2259a49f697a4892e702d8ead3230df5139501811295f1c70f567f4547dfaeedc8f8fb993cf8ab4024c3615545ca6e8e96790a4d4e0b86819fcdfc56c268912346695302368dd3a661f5fb7dd3b00cdbecda552f87349e90ec4921fc1222e767edf656472ba1344901e584b7305deee2ed976e3b67f411b0e0ed43dab664e2edf789cf538a9120341bcefc4a44c181cd618948aa64ecbba3f0e210be45d0b295c8ea178201614c8b4c2869150ca6594c928295e012e9550665b8d4bcfbad0574df9938e3405b10cae728cf171ae2da7cce8017a9d0aebc9b6b6d21e78c490a7ca1dd7f753c475b943217da503b2f494bc008b82059491ba030851a99cc6eac72df38a51d8402410271d894cdedce2932fa9d411887368efb3d2b8c3b1086fdd0b6502fece08109661402aa2308c55df5a38c66101b961da36e84ec9e8d4cd3b4426cc576d4094f63c3e876bb36c426367afa0661bd9b073340022e09cf29271b33f5b1e78c0267ee5ecda78e73e95ceec7ffcdc851f5bde7cae2c09b4dc7b2ab6e558ca4bb97d5b087461d3820a4a7f5e1de73f168809c112a459587ec4e03c71b8d03f7ae26436edc04128457feb3dab918a51cf6dd88a1250860d7345267a9dfdef86ee0de4c47933d42b944b7db4a2ecb7eecc4ee67aaa305abfc7033aa43aba2ba1f78eef48b5e4bae4fde84b94369f106cecb26acc3a3bc1e94f0ce05fc296d2a2f481db7f1ffd7cf468d4f9777762355ff3e73bc07d55be654c68318186478afe003fbad1aabf4079e2459be7d2054877c2376fc5cc8b0bc6a98efd9cb5d55178f2c4bc95bc09e69db832da06c64e2b86260ed288f1e09c5054bc8c4d68beab1a88c5c1f482a6a72ca36552e377fba39d07563ddf807938080a7e9050000",
    ],
    [
      "ETag",
      "SCY58yoAKM7d1zBiYSyTtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff4d515d6f8230147de75790ee7524c3e9344b7c90c5c916a6938564c9424c852b830197b565c418fefbda02ea0bed39e77ef41c4e8669929fb48cc9a349f669f25b033bde2420b6eae203af73c1e55161c981dcaa6a103451d5b1bb5ae7cfabe0feed73d4b859f33a62b1bd98cfbb2a1e7d434165dd4922890f29e43197f84b63b3e7b556d202d4c4dd8ee9857a42af8963a53567b3f1968bf5b55460aca575e0790bc75b925e6af519ca6fab9f92e1de8703302823b83ca8629841245eb4734e8b2a078b63cd22e0fd12d5d8c909c3baa20cd19294653f58f664369b8ded893d1d8fa643798e11152996aa23f820e7fd0205cd7d6c947b6277f1b00e76610c5190c3553ed70949e94f350b560339b36d7f0b8d0185977dce51007f6728ed70d026eec890c6132ab74285a1266a3aa2f287b9a9e839a335fe01e2f12c0c1b020000",
    ],
    [
      "ETag",
      "dHGNlFGU3MX2wHjwJ2rd1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d07fc9591cd9a4f4c63a0c22c5325ae192092440584c588a40a7ff5ea7ef0fde0f40794ec6114eac210ff00e5624e9fb7c7f626fe67ac1a7cfbe5ffc016b54d8ec3a5a83f0ae9de7c4374bd508b423e2750a95045a6735daa8f215b9b7b030a25ef570de5127de78971d78b29595fc247cb435e3db957c585c72bdf0264b9152015f7d681daef12d5be471e16eed2925ceb49e6135b698cbd386cfed8713d0bb815a385476e12362360fb1ab9e704ec4a57125ec9448602d13cb239e85340d95d1ab13b00364e1742023a4af99aceafa0efc37e1b472f2ba9a040d6400bf7fc3e88c4805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-17-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f9b30147dcfaf40ecb5092190402a456b96d01529211b21ed3e3451630c734b30c5265555e5bfcf36f9204b55f50dee3de7dc73afaffdda5214f511e7b17aa9a8114e9f2a54be7c7a20917a21328881546436161c07e4cbafd8d4063f8c673dc81e06f17834aa5158b2295817196a53529510d1cbd5b29396a42a4049489b0bb675abadf76ddb36f5be6e993dabe6529425339c3f0a85bf8c15f452d3f63e3a292169864081690792f521ae6d7a5a5192070419d54ecb6abc12d5de2ffc392310304cf2d16a599ba8282a43b4063813368eec38ba3a95ef60b0eea41cbdc110010849953361ad9681244f705a95529c2bbdf2200f4bcf87df46405d3a336712289064d53a0f73b046174a0c1808d94b81946b7f3157ee19a2ecbee37ad70b7f3e0edc85172e2737ce7cdc992c66abb9b754ee6e1cdf51188832242594917225ff3cfe238dc9a231d7c1b9b416886cc310cfeec6e9be7192070921c2cd51b4838556770074bb3b8c92c882896df4a3a48ba2c88eac3e30a22e1c9ac88c23049a0ad259cd07399f976ee8868dec508f743d348dae1946661487dd1e4ce0100e8749d25377eceda1175822c0d014d38250bc1bb63af19d71e084ee75e839ced4991e5b7f2ef119face773938f057de84b39a634a4095b169dde8e9904eba17e7d26cecbd099e35509498705372095c2f70fcf124706f1b36f846ce500ae0cbf249ec6402328a8e6c50f2a365a89c93589ca3ea8de7cd7ee57e7ddb832847fc3ef83cb6c381625d642f67eb725a27e0eb78328afa28eba8ba0c7cd7fbaa3692dbb7656e4156bda1b3d985c508139c1de725a55aff7ffd69354aa8fc82efdca9df578eff5370654e647c94a012e5f058f4038b2e8875fa03ef1787ef5f13c1e00fcaa13e653cccef1ca4c7ea7271c50dc4f5e0f78246bfdfedef0539b164e7888165ec11672f8aa885d62867fb59d42f4b3dc8ed89a5aa",
      "6147d2049c5f036f7786dbd6b6f50f5089670916060000",
    ],
    [
      "ETag",
      "v7cAToBZd4/6X3w1Tlj6dA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5954d8fda301086eff915c8bd8244b67c4495f6002ded460ab00bd95e2a84bcf1243575ecd476a8d08aff5edb094b2e5b452a522eb167de193fca8cec79f57a3df48b72823ef5d00bcd7e97204f1f32d04f76b3015532adcc5208ae00f56d34689cd9e8f9e4e369c983ef39191e8a503f84c7281e66f7f755944a7e428e4ddcabb18c9d52604419fb87b37bb5df691ce7604f4c042b73be7766ff2aeb53e1e46dbc0957df9a4a2e885356cf51349b470b544be7fefb108235debb23ff0fe1d69d57c3d041bc6c2005093c81eb5f17521c20d1a12bafc279c160a04429135035c42656722645596029c4c0b806fe74e08f832018f9637f3aba9b5ec29948b0a682db8ce72d7ae36ba131db883fb6c4c8bfab9a202bbb2af9a516286d74a15922231d6d3625e8cd77eeff23305cc5935123b6deedbc46666b6a4aa5d255efdbd1eb5edd08cf709774735528eb849c0127203b41d3628f0991a0543778a1f6b8285ab2e7eb75742b32e6440a4a3aa21f691754a68f2da95fa3f5ec86ef8a79efdbdee92fb378712bacd2e6b56fc98dc3e5621bcf968fefc2cd77777de6e7270dea510a334514b8d9e10f47c1783a19a2cb2cfa2cecacd176146959827327d8cce407aa8d2fc54c8177f6fe0290cd6153ff070000",
    ],
    [
      "ETag",
      "B63yMn8Vmd0jpItHIvLT0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `date` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-18-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "739a40147df75730f4352a1814cc8c93384a52324653c464da4e4777e142374116d9c526cdf8dfbb0b7e60cd64f206f7e39c73cfdeddb79aa2a8cf2409d40b45c5245ae590bd7e79a2583d9319e0289299dbd96d80b5d58dd1ffbb367f3c462fabce038d7abdb28a14dd0c2dd318ea8ce6990fec62366d4419cd5394515a178075ddaaeb6dcbb20cbdad9b46cb2c7b19c4e18824cf12e137e729bb6836773a1a11a5510c2825ace1d3e53ede5cb79a69469fc0e7ac794cdb144cacf931f1654c7dc4094d7ab36929226790cd6189482c651cba037c750cdf2068d98844f59af8807c9fe60997d24a189f262189f2ac0017486f2228c285e6fd6f25a04eed913df0944580382c14c494f93c0396c75cb9762777ca420c199218d84279fc6abbb6b228342e949e725930166801304e9282d34338860a93c86e7d72de39a23d8404411c31d896cd4dad83744bebe2109b7e689db771a801c61636dbe81c6b7ed70023c080aa085c7297fd28a14980b0ae9b2104d082c034ba968521ec1a9d366ee10050d0d5003a81aea95b84cd7e1e3f0361c790b09432b275521db876dfb3e7cef57c6cdb437b7818ff4f464eaa1f5d47147bee6c3c105d55ab4224dc1d96c31e1b75e400179e5687fbc8c59301d28c5021aa386167ecd96e7fe0390f151962dd461021ff75ba920b17a298c1a11b6568091cb23b1ac8b354ef2753c77326e3fee880506cd0fdae9289b29f7bb18799aa68de6b7abc19e5a1955175eab9cef846ad243767efc23ca0387f0767bd0dabf024ee06254cbb8297c2a6e27654716bff7ffdaa55f8547161b752d56f33dbfd2e7b8b9cccb8104206897f50f089fd968d65fa13ef9128dfbd0eb2433c107b7ec645585c359f1dd88b5d95178f2c0bc93bc0f34edbeaee004563c64f2b4ca3bdab38792124172c21e13b2fca97a23472732429afc829da64b9d8fcf1f64037b54ded1f111fc838",
      "e6050000",
    ],
    [
      "ETag",
      "JUJdb0qG4Azv7ZWgxq6Vog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "147de75790ee7524403492253ee866e212b34d36b32c0b3105af0c052eeb078e18fefbda02ea4bdb73cebdbd3da767cbb6c9312b77e4c1267196fe4a60cd5d0a62ad0f2170990baeb60a4b0ee45e5783a0a9aee6f26b190675f3b986bfa68eeb577a9cd0d374da55f1e4070aaaeace0a29bccf20df7185bf0db67bde68252d40dfb8dd3233d0dcd06ba2a98cf634fb58dcf205ee0cffb259ad66f3d582f4526bf648adad79c701e310f6c0a04ce0fa9a8ae10112f16c6c735a5439381c254b80f743746327a70c654519a2a328c70b1c6f1c04c1c81b7b93913f19ca734ca8c8b0d41d9b7772992f50d03cc493b64ebc2e1bd6c12e892107b2bf09e7361e25d5bad9777dd7717dc7f5c8456bfb53640d28ba4e9d3702f81b43658a83b1e292219347d49e858e443009864ea8fab365267ace6aad7f1a5a09941e020000",
    ],
    [
      "ETag",
      "suYHR8vyWQexyvbvOak7aw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfc97282300000d07fc9d93ad04880de004196ca5206305e322c81622d4b081dc0e9bfd7e9fb83f7007959d26922bcffa21d78036bfeaaeecbbdd72bfa1ad51df293d576df6158f98ed659b1b6d52117532213ce4d191bc7e329e9a1c98a3cfb41fae124f8838ab78019758e3c3bc2623ba12d33f0383b4b18a18f1a07386f36d84d8a6197b19bfab3a8427e6eab40ba0ad610b3ec4524fc362726321a0bdf87f572fd946fe30ccff7c3a5d12585d7a31adbda540e95080dc70fbbefa271bd02ca82cde6b4249585160b6a6007e832b48c4ea47dcea0a4aa3bf0df247c1de8f3aad39c51067eff0018c940fd05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
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
      jobId: "grouparoo-job-19-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54ef6fa24010fdee5f41b8af5551a1601373354aaf24155bc43697cb852e3070db224bd9c58b69fcdf6f77f1079e4dd36f30f3de9b37b3b3fbde5214f515e7b17aa5a8214edf2a2837df5e48a85e880c3094caccfa5e8f663ec473cb79b49217e3feb5da3c8c46350a4b3645ab22833625551901bd5a2e3a6949aa029584b4b960bb376cf70ccbb2f49ed133f5be59732964c91dce5f85c21fc60a7ad5edee7d745242d20c5081692722ab43bcbbee778b92bc40c468f7b46c9757a2ddcf0b7fcf48841826f968b9a84d5414ca00560867c2c6911d87d7a7f21d8c569d94a3d738021445a4ca99b056cb44244f705a95529c2bbdf3200f4bcf87df46405dd877f6c457229255ab3cc8d10a2e94183114b04d01ca8d379f29cf0c287bee38eecddc9b8d7d67ee068bc9ad3d1b7726f3bbe5cc5d284fb7b6672b0c8519480965a45ccb3f97ff4863b268cc75702eadf922db30c4b3bb713a1f9ce441428870731476b0c0d42e51cfd28661129a51620d8c30d1200cadd034d020d4a2a10e7a1c026a2a4867351fe524b77440a00dcdc01c9a7aa06ba005e15037835effd240c3b8af1909a83bf6f6d04b54026230c5b42014ef86ad4e3c7becdb817313b8b63db5a7c7d6ff96f80cfde4391cec7b4b77c259cd3125a8cad8b46ef4744827dd8b736936f6d904cf1a284a4cb829b9048eebdbde78e23b8f0d1b7c23ef2045d166f1267632411985231b95fc68199433128b7354ddf1acd9afdcaffb3d8872c4af83cf633b1c28d645f672b62ea7757cbe8e27a3a88fb28eaa0bdf73dc1f6a23b9fd58e61165d5073aeb5d588c30c1d9715e52aaf5ffd7ef56a384ca2ff8ce9dfab0b4bd9f822b7322e3410225e4d1b1e817165d10ebf417de2f0edfbf2682c11f94437dca7898dfb9881eabcbc5153710d783df0b0eccc1c0d80b7262c9ce11fac0da23ce5e14510b5690b3fd2cea97a51ee4f6c452d5b0236902ceaf81bb3bc36d6bdbfa07b0acd26916060000",
    ],
    [
      "ETag",
      "bvP4cMTedO8IV8fj5PkuyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "df",
      "6f",
      "da",
      "3010c7dff35720f715b4a6e3d72af5013ad6a2a5c020d5a44d08b9f12573ebc49eed8050c5ff5edb09252f9d220d292fb1efbe77fe2877b2efd56bb5d00bcd08ba6ea1279afccd41ee2f12d03fec66092a675a9945f04c016adb68d038b1d151f4f2ebae8fc3dbef9ff0cf9ddcdf7f5e08b2bbb929a254f407526ce25e8d65ec980223cad8bf9ddd2afd4ecb700aee44cef234db38b37d92f55e3879152ea7b3bbaa9272e294d963108cc6c10495d2a1fd3184608d37eec8ff43b875ed9530f4cc9f961083842c82d35f0bc99f21d253575e8553c1a0a3782e235025c426167222792eb0e4bc635c1dff4bc7ef0d87c3aedff307ddabc1319cf1086bca339bf1b842ef7ccd35664bbeb32546fe55d10459d845c98fb54071a50bd51219696bb32941efbe43fb1f81d359d8ef5662cbdddaab64d6a6c6542a5df4be1ebdecd599f00c3749375785b246c80964046423682a369810094a3583e76a8385a8c91ecfe7c1b9c838239253d2107d4b9ba032bdad49fd16cc47677c57cc7b5ff74e7f1d859373619536af7d4d6e387d98acc2d1c3e243b8f9ae4fcffc78af412d24375344819b1dfe6577d81bf42fd17116dd723b6bb41d455ae6e0dc113633f99e6ae38b3153e01dbc375168708eff070000",
    ],
    [
      "ETag",
      "cckZG6aTCK/aWwryH3Ppdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query: "SELECT `stamp` as __result FROM `profiles` WHERE `email` = ?",
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
      jobId: "grouparoo-job-20-1588841517427",
    },
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
      "8d",
      "54",
      "5b",
      "6f",
      "a2",
      "40",
      "18",
      "7d",
      "f7",
      "57",
      "10",
      "f671abe005c126a6ed2add25b1b68bd8a6d96c74183fd8b1c8d099a19734fef7ce80175c9ba66ff05dce39df6dde6a9aa63f9074a19f6a7a48e2c71cd8ebb7250df513e5018162e571ee473fe8f7365cf2e42519dac6d24fae9acffd7e19458a6c8e565902754e7386819f4e278d98d13c438cd2ba04acb7cc7ad3721ca7d3b49a76a76597b91c926844d20785f04f888c9f1ac6564723a6344e00658437305dedecc653cbc8185d0216dc38a4352413373e273e4b284682d0b43f9d9422720e6c062b441225639fbd08cf0fe11b04ad1ab18c7e221810c6344f859256c2609a4624ce59012e91dea4519a0bcdbbdf8a419fb823771068732e24cb5c435c9bcd18f03c11daa57f7da5cd6595114980cfb5bb5faeef6af342e45ceb6b67056501b7002e485a9006284ca04225bd9b46791fcc6807a14090401c366133dbeca2a663f6c228b471e4b4ad3032210c9dd0b6503b3471af039d4508a88a201477998f529ae2a615757b3d709a96d573c006046dcbc18e697543c76947d8e9d99d85d5d33708eb5d3d98011230243ca39c6c5aa90f7cf7227067dee56cecba4377b82fff9991a3e83bdf93c1813f1d0f6456b5551192dd1d96c51e36eaa00342f6b45adc675d3c2a2063844a51c588bd71e0fa1783c0bbadc890fb368218e1d7c9a3dab808251cf6d988a11508605774a166a9df5c4fbcc0bb1e5f8cf608c50add6c23b90cfbb313bbafa98a16bc66879b510eadb4ea93c0f7c63ff58a737df221cc2d4af20f709e36661d96f23828e1e639bc146d2acea38a5bfbffeb6fadc2a7cb8bdd48d57f4f5dff5ee5163ee5f1",
      "21020629de2bf8c27eabc4d2fd850749866f9f0795215f881dbfbc5241e4a961be672f76551d1e591592b7806da7d531b780329189e3884eabbb8d387a221417ac2015db5e944f45d9c8f581a4bc22a74853e172f3c79b81ae6bebda3be8594982e7050000",
    ],
    [
      "ETag",
      "8YLBo+3eFslxlD7/jRlM1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d6f8230147de75790ee756c624471890fb89868a28b1f98b82cc454b8220eb8ac2d5b8ce1bfaf2da0beb43df79cdbdb737a354c937c277944de4c7248e29f12d8e52906b1528735f032155c6e05e61cc8b35283a0b152c30e573bf13aebafcad339ffec477e9f4fbdd1a856f1f0041995baab44121f1348232ef197c66653d75c4e335037eef74c0fd437349cb8149af3678bc9c6f716cb4732c348931fdbf9dc1bcf27a4a12abd0772adf463ce7858c31118e421dc9f54303c432866da3ba7599182c5b16421f066886aace9986159508668c992d5ed58b6e3ba6ecf76ec41af3b68e52986542498ab8eed86dce60b14345de39ff24fec3a2056c33a8e360c727c48e8312349fdeae617c7ed38ced01ef6264372a3abe614182d0aee83c717017cc950fae2a0dd74481bcb3b2adb42a5225809ba1c52f977d3443435a332fe01bc2e978226020000",
    ],
    [
      "ETag",
      "eXoQXt/I6QuhjnY6dT6sHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb64ad0e9f50a13b08df52820e105b370c436341504282fc3abd7b9dbe1bbc1f50942515221fba86dec12b580ac5d895bbb0d3ade548656838aacd87658471dd268199f5ab84b1d4bb0893e5d2b666d2a745d13481d7867c2c3ef3c09198ef66ab274673f2fa7764471cd5ae9dfa0423f3bbf4457cfd1ad85909f411a95ca071ad9a4744787c73b632ecadc37cda5ae8032e9a32639f556fa4ee5ebc7d2063a98b130f9e753c45fc9465d6150617fc6827cbd67c4c0ee13d259520ed2d1b94bdc420d8003ab39a5391d7cf99aa19c606fc37f36161f479b568c12907bf7f2a8838e705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-21-1588841517427",
    },
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
      "000002ff8d54616f9b3010fd9e5f81d8d72684041a52295aa384ac48095981b4daa6891a63a85b8229369db22aff7d36900496aaea37b87befddbbf3d96f1d49929f711aca57921ce0f8a540f9eecb1309e40b91410cc422f3a29a9b85bbfb6bfe54555d9939f7fa54dfdd4e26150a976c0ab65982ba94143944f46ae3f6e29c1419c809e972c1ee40edaaba61189aaaab236d30aab81425d112a7cf42e191b18c5e29cac1472f26244e10c830ed41b23dc695d78192e5e40941469576598557a2cac785bf26040286493ad9b8958982a2dc475b801361e3c40e83ebb67c0f836d2fe6e8570c118090142913d62a1948d208c7455e8a73a5371ee4e1d2f3f1b711905d7369ce3c0992a4d8a67e0ab6e8420a01033edb65485a38eb95f4c010650f3dcb5eac9dd5d4b3d6b6efce6eccd5b4375b2f372bdb95ee6f4cc794180812544a4813e9bafcb3f94f69ac2c1a721d9c96d63c916d18e2d97a9cd63b2779941022dc1c4535cc1ff52f816af4c741148c60640cf520eaa3203082910e86411f8e35a48501024d85d259c507299f97d137a2d1f8d21f1800fada4043fe1886037fd05791a6eb68ac85915cb3f7c75e608e0043734c3342713d6c79e69853cff4ad856f9be6dc9c9f5aff93e333f4bd6371b0e76cec196735c714812261f3aad1f6905add8b736936f6d104cf1ac8724cb8a972092cdb339de9ccb3ee1a36f8462e510ce0ce7d113b198184a2131be4fc6819ca572414e728dbd355b3df72bfbe1f4094237e1d7d9edae140b12e652f67ebd2aee3f1756c8da23aca2a2abb9e63d9dfe44672ffbecc1d488a77745eebb09cf1693df209d39656e7ffafdf9d460d99dff0da9e7cbb319d1f825be644c64111ca510a4f553fb1e98258a53ff18071f8e139110cfea21ceb53c6c3fcd2417aaa5e6eaeb882b89afc4170688cb5cb832027e6ec0c31ee6bc303e2ec4911b5d016a5ec308bea69a906b96f592a1a764a9a80f37b60d787b8efec3bff00c6e96bb617060000",
    ],
    [
      "ETag",
      "q1EUFSyzEZ115/CRW5A5yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "545d6f8230147de75798ee719a88c38f2cf10137b6b9e0c7141f96c5980a17c501c5b66c31c6ffbeb6a0f2e2423293bdd0de7bceedc9bded61af552ae833883d745f41cb60b54d81ee6e56c0dfe466022c0d39134b426206a82ad9c0f14ab26fd7a9fb3eba5b3aafb635c2ced672a2a56176bb198bb96b88b0e0ed4524623f80d06322fe507125cf2b2cc611c8135d12a651bc5061f50cf35da2e0a933e90f9f8b48443c850c67b66df66c0be5d0a17a59c4c31c2fd4917f9350eb5ccbc5d0862c27e00385d88573d709251b70795f8d97e12809a1c6484a5d60b9882ccce01525698229213591aa35f49adeec743a86ded4db46a37da487c4c53c20b1ac984dd1499f138ec309f9962346adec0e681666133f8e02f9854b284e48405fb238f0d02977a8fe42ec0f9d9651e0e6bbb956a82cad2a26e507212cfe495d5cc91a8b175e4e3b7f265712c71149635e52fac91e99576c5cb8a16cd38fa6635d4b9671e18592ba4e7f604d1d7330be282ebef3b3097a3b0e6c4c89f01803e52cbd6e749aed561d1d9dfa40a413b9342aa729a8b48bc51feb25e022e7e3908176d07e007ac53f531d050000",
    ],
    [
      "ETag",
      "+hucYO3bTJLEOaTqETmb4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT AVG(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-22-1588841517427",
    },
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
      "8d",
      "54",
      "ef",
      "6f",
      "da",
      "30",
      "10",
      "fdce5f11655f36694002814025d4219ab6d128ed42a09aa6091ce792ba0d716a3b545dc5ff3e3be14768abaadf92bb77efbd3b9ffd52d334fd81a4a17ea2e901891f7360cf5fee69a07f571910285699ec69e4a3f4e7b988096ecfff8dddbbf5e4f269302851a4a8e668952550e7346718f8c96cda8819cd33c428ad4bc27aab55373bbd5ecf323ba66db5ecb29643128d49faa018ee84c8f849b3b9f3d188298d134019e10d4c57fb7873dd6a668cde0316bc792cdb944abcf9b1f06942311284a683d9b4349173600b582192281b87ea30f8714cdf2068d588257a4d30208c699e0a65ada4c1348d489cb3825c32bdc8a00c179ef7bf95803e75c6cec8d786f38baf4bb45264cb6f1ae2da62c180e789d0cebdeb2b6d9949ed3bc4812fb5db4bc7736484d18824b020e1521b68a7857c411d0217242d0cf82848a0222bb3dba1b9ef9cd79e42912021d5b6b0856d7491d933fa4114d838eab53b41644010f402bb83da8181fb16586100a8ca209476598f529a22d4b7ec6ec7c2fd308cfa5de8b4ccc88ada61d0ee7521e8da8111d951883afa9661b3ef07334002ce08cf2827dbb1ea23cf19facec23d5f4c1ce7cc393bb4ffc4c81bf4ade74ab0efcd262359551d5584e48ccfca668f0775340121675a6deea329be692063844a53c571bb13dff18623df9d576cc8dd1b438cf0f3f4516d5f84120e876ac4d00a04b02b1aaab3d46faea7aeef5e4f86e30343b14e373b2497b03f7bb3879eaa6cfe7376bc19e5a1955165b36be995dce6fbbb2c7394e4efd0acb761dd3ce2a8bdfefa5bab70ebf2a26e5de9bf668ef75bd5163995f1200206293ea87d6295556199fec43b24e1bb574155c88761afcf850ccb5b85f941bd584b75c7c8aa6c754bd8eef7cdd68e50",
      "1632f11a6119a661ec106f5e06a5052b48c56e16e50b510e72736429afd829ca145c2ef9c49d5c14e66b9bda7f1caff8e8de050000",
    ],
    [
      "ETag",
      "pwCTanKFtgic3VzLIhvNHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "4e",
      "83",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48",
      "7d1523b8c962b207663433213ad1a98959968edd2113b8d85e6670e1df6d0b6c7b697bceb9b7b7e7746fd936fb4e8b35bbb1d92a4d7e2a10f55902f4ac0f11c82a23a9b6120b09ec5c5703f14457fbc2fbb8fe9b12af27a537cb77e15be1bf07e3715b25e32fc8b9aadb2ba4f026856c2d15fe34d8ee78a3153c077de37229cc407343a7515d1aed3e7c0a5e4f851cd746789c87613009ef582735665fa8b5310fd9e22a820d082862383ea714b885981e8c6fc9f332034762256290dd10ddd8ca89c0aae402d15194e3798e3b1c8d460377e8fa03cfefcb338c39a558e88ef90b3bcc27249e45f8abbd33b70d47b4b08da20f826d4ed239cd47493bd37ce15fb103db74a785d5a3c571dea426903381ca8e0463e292f569dca2764b3a0c1215183ae6eabba629759cd558ff90dc7d1119020000",
    ],
    [
      "ETag",
      "7r2X6zHtayBp2PmvLVn7WA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfb96e83300000d07ff11c226473b95b08229472a550712cc81813080173842a50f5df8bbabfe5fd0042299be7fcc95bd68337b012888ff4f8c1357dbd9658dd743ead37d45591512bd94928621b6d16ce954c501228b9865810d8cfa9609c03aac3cc580a71b27b45bca1f1bd2c690cbdb8d3b09c94cdc5477df76855cfc22a5aaceb4282a1e635712b8e138e42c2bd52cd0747ba485bb81b119bb6eaa44e7afaa68e69a6b3e0b71a66ad4d0d993fa250e8ee7164533f53e0ea8e8d5b7d9ebfc26488827bf81acb161c007b0dcdc4e6bcd96748c6f800fe9bf9731dd87ed51999d8047eff00e63cb97f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-23-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545d6f9b30147dcfaf40ecb509f92009a914ad514257a6846c84b49aa6891ae742dd124c6dd3a9aaf2df67433e60a9aabec1bde79c7beef5b5df1a9aa63f9174a35f6a7a48e2e71cd8eb97471aea172a0302c52a932f3b2c5a3ef1e50d7c476c6a84e6e343128fc7258a146c8eb659024d4e7386815fae57ad98d13c438cd2a6146c767bcd4edfb22cb3d3ef0ccdeeb0e47248a239499f94c2831019bf348c838f564c699c00ca086f61ba3dc68d97ae9131fa085870a35ed69095b8f171e1af09c548109a8ed7abd244ce8105b0452451364eec4d7855976f11b46dc512fd4230208c699e0a65ad94c1348d489cb3425c2abdc9a00c179e8fbf9580beb2e7f6d4d7304df26d1aa4680b17da06091488d70cb46b6fb9d0ee057071df72dceba5b798f8ced20d56d31b7b31694d97f3f5c25d697737b6676b0285091412da58bb2afe5cf953182b8a6ea40e490b6bbeca560cc9ec7e9cce3b2779945022d21c873d2c18b607a863b54761140e7164f5fa61d48630b4c2611ff5c2361e99606e42405585c259c947294d433cea4683360a603040811975078115f5074177685ab867766064f6f43d7b77ec053340026684679493fdb0f5a9674f7c3b70ae03d7b667f6ecd4fa5f46ced0779e23c1beb776a792551d5384f244ccca46eb43aa75afcea5dad847133c6b2063844a53c51238ae6f7b93a9efdc566cc88d9c438cf0ebea59ed6484120e273662f26805b005dda873d4ddc9a2da6fb15f3f0e202e11bf8f3e4fed48a05a97a297b375a9d7f1e53ad646511e6519d557bee7b8dff44a72f7becc2d4af277745ef6613d93d37a9013e635adc6ff5f7f1a951ababce17b7bfacfb5edfd52dc22a7321e44c020c5a7aa9fd874452cd39f78c024fcf09c28867c518ef5b9906179e9303f552f36575d41524efe2068b6076df32028894c9c232cb37d409c3d29aa166c21158759944f4b39c85dcd525eb153d0145cde03777f88bbc6aef10fd6555dea17060000",
    ],
    [
      "ETag",
      "uO1rfOksOHeJarC/b4jhlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af20f5514800f98a890fa8a8285fc2484c0c2165bb8369b73bdb0e4308ffddb61bb017cc12497c597bef39b727f7b6675bab50209f7ee892eb0259f8cbaf18f8e66209f2556fc6206226855a220c0590a26683a44bcd5ebf94e9257bf6defac306d20d2c06d578fd7a7393b084b382802ade56452af67c60ae50f1bb890b69de60210d409fe8208b83706ec2e211969bc8c0137bdc1d3c6691005d830ca6bd5efbb6d72129b42b9e1671a9a47373e4df24cc3ab35231f2818b3178c02174e0d875c4f1031cd935e3153488189404c6dc01918ae8c2045e728c23ca114b2a55aa5e952af556ab55abd42bcd5ab5b9a73374a8f431d415d30939e84b94948df15b8f9834923be049984c7c3f0ae2652e213b2105ad75b1ef92436e57fc85d81dd88d5a869bee6656a632b7aa9a94e73398ff93baba9215552f3c9f76fa4cce244e038c439953faa1376c9fb171e586bc4ddfb7edceb96485545ec8a96b77fb9d89ddee8f4e8aabefec6882db8d0431e2a83c26c038ab52aeb5eacd4699ec9d7a87da89521b55f2184cdaa1ea8ff5e44b95f3281360edac1fbaedd6c81d050000",
    ],
    [
      "ETag",
      "vK0a+lJfXMO6oayebN2uvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-24-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40",
      "ec65939a000909a452d45509dd9052d212926e9aa6c41843dd02a6b6695555f9efb3211f64a9aabec1bde79e73eef5b5df5a8aa23ee23c52cf1535c4c95389e8eb970712aa673283384864663ce86a18ceb272e93d5843fc2b5d7268dc8e46350a57d50c64458ada8c94142276be9877124aca025042da82b0dd35db46dfb66dd3e81b96d9b5ea5a86d2788af347c970cf79c1ce356de7a3931092a40814987520c9f671edb9ab15943c20c899762cab0925a67d2c7c9112083826f96831af4d940cd115ca004ea58d4375147e3fa6ef60907512817ec610010849997369ada681248f7152d28a5c30bd89a008579ef7bf8d803a77a6ce3850c6b385177c5d834cd2adbf298029ab1545ac4cb972e5cfae957521d4ef01436caddcfd747c47442889718a56385a2b23e5a23250914788719c57160210a6a8212cb2dbb1b9ef9cd89e4292002ed4b6b095a50f8061ebc3300e2d18dbbd7e18eb280cedd0ea835ea8c3a189cc2844a0c9c0a5765d0f72924728b410b062130cac01d461640812d8b57ab0a7db40b7bbfa308a0495ba65d8ecfb8114018e26981584e1ed60d5b1ef5c06cecabd5a798e33712687f65f283e41dff9ae0007fec21b8baae6a86220663ca99b3d1ed4d104b89869b3b98fa678d240413111a6aa0377bdc0f12fc781bb6cd810db37450980aff327b97f3148193a54030a32c411bd26913c4bf56636770377e65d4e0f0cd542ddec904cc0feeccd1e7a6ab205afc5f166d4875647a5cd81a936729bb3775996202ddfa179de8655e388a3f5ffd7df56835b155775eb4abd5d38fe6f595be564c64731a2288707",
      "b54facb22cacd39f7889047cf72ec80af134ecf519176171ab203ba8576b29ef18ceea56b784a631d08d1da128a4fc1461f5fa3bc4c9db20b5508672be9b45fd46d483dc1c592a1b76aa3209174beeb9de8fca7c6bd3fa07cdb937e2e0050000",
    ],
    [
      "ETag",
      "C62/icOmuVNj79iXlVtc1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff4d51d14ec230147ddf572cf55197380421263c30834a449029266a1652c6650eb6ddd9de6108d9bfdb761bf0d2f69c736f6fcfe9c1b26db68db315bbb3d9328e7e0b10fb8b0868a60f3ec82221a9b61c3309ec4a5703f148577fbecc6f96cf1f5f53da7a524c1f2e4534a059bf5f55c9f00752aeea0e0a29bc8e21594985bf0db66bde68194f41dfb8580833d0dc506bb4cf8d369abc0f1f87feb994e2ca4893f9783cf0c643564ba5d903b596e6291b5cfab006015908a707e5023710d2c838973ccd137024162204590fd18d951c092c722e101d4539adb6e3767abd5edbedb8dd76abdb942718728a31d31df337769c4f483cf1f14fbb676e158fa860154613055b9fe5739e909276baf9961da9b23e05568382d3306f4f205f052a2f128c836bd644718fda2ae924481460e890abdf7a8aa9e6acd2fa07753e7a6118020000",
    ],
    [
      "ETag",
      "YMU3bKVZOtkBsrOF+rgAtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfdb6e82300000d07fe9b31805aa636f2097311a1c9525d217c2a5204584160c9465ff3eb3f307e707644541c7319dfa963ec03b90996a6c8b6dd0bf59322a47644066ef3a3ede8391601a5235f30256299854ae60b5ed117d2e7d8cf47948a22b4ca46f86acedc2c596b03ce590380724576576befc8f9cb59abe64fa7a23577c44fb3a6ea81fb667b536c5933d20f2f7f7e3725b537458c9534d04c1d64a92b30b152d7270c2433e4f5ee276d5045ba7df19b1f31daf927f7a985f4ea4e712374197eb7d71613037c106d06568041dd3e635d3a0616cc07f339de4405f578b66820af0fb075d52250e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-25-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "a3",
      "30",
      "10",
      "7d",
      "cf",
      "57",
      "20f6b509b99026a9146dd3846c2305d225a4d56ab5a2c60cd42d608a4d5751957f5f1b72814d55f50dcf9c73e6cc78f07b4351d41792f8ea95a27a247ccd21db7e7ba69e7a2133c0512833934eb2ca2fb5f94d4eb677a665de939b380dc7e312450a3643711a4193d13cc3c0ae36eb5698d13c4519a54d21d8ecf69b9dfe7038d43bfdce40ef0e4a2e83285892e4452a3c719eb22b4d3bf86885948611a094b016a6f131aebd75b534a3cf8039d3ea65355189699f17fe1e518c38a1c978b32e4de40c321762442269e3c4f6bdebba7c8ba0b8150af41bc18030a679c2a5b55206d32420619e15e242e95d0445b8f07c3c5602eada581a5347c134cae3c44d500c178a8f3872f93605656eaf4ce59103e38fad85355fd9e6c459ac2c773dbd35cc496bba5a6e4c6bad3cdc1ab6a170e44550482863e5ba3859e250182b8afa428724853547662b8644763fcec5073779949022c21c833dcc1db42f5167d81e798137c0c1b0d7f7823678ded01bf451cf6be3910ebaef01aa2a14ce4a3e4a6802a33ef604c7f583c1d0d5c1efb99e3e12473de82274a9a37e07d43d7b77ec05678038cc084b2923fb61ab53db983886bb98bb9661cc8cd9a9f5bf1939433fd80b0176ec8d3515acea980294477c56365a1f52ad7b792fd5c63e9be059036946a830552cc1c2720c7b327516f7151b6223971022bc5dbfca9d0c50c4e0c44699b85a0e99497d798faa3531abfd16fb7577003181f87df4796a4700e5ba14bd9cad4bbd8e23d6b1368af22acba8ba76ec85f543ad24771fcbdca328ff40e76d1f565331ad27316156d36afcfff5a751a9a18a3f7c6f4ffdb931ec5f925be4",
      "64c686003248f0a9ea17365d12cbf4171e30013f3c2792215e94637dc64558fc74989daa179b2b7f41524efe20a877bb9dcb83a02066fc1cd1d37b07c4d993226b410c093fcca27c5aca41ee6a96f28a9d8226e1e23fb0f697b86bec1aff004ea2311217060000",
    ],
    [
      "ETag",
      "A1nOu6/FBuiyPMNMViBmpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d4fc230147ddfaf20f51512217c2c263c0c442502f2319e0c21a5bb9bd36e9d6d8722e1bfdb7603f6a25922892f6bef3de7f6e4def66c6f552ae82d8c3d7453419b30784f81efae029033bd998348a9146a49582c0055351b240e34dbdb92cd677f0a4fbd1d256f0e790cd22f7bd6ed662c415e20c28ab757918afd10a82754fc6ce24a9e37588c23d0271246d3285e9bb07a86e52e31f0c29d0f27f74524629e4126cbd1c8e98d0628870ed59f453c2cf1da1cf93709b3aeac5c0cbdb2cd1c7ce0101338779d70f60a440ecd78058e120a35c1524e40e422ba308303ced20473c66a2a556bb46af5966ddbcd7aabde69363a473a6504cb90c5ba62b940277dc924a673f6a1478cdad91df02ccc267e1c05f20b97509c9082b6ba38f4d02977a8fe421c4edc76b3c0cd772bab50595a554dca0f29acff495d5dc90b562fbc9c76fe4c2e248e2396c6b2a4f4dde8c9b960e3ca0d659bbe75dcc1a56485545e28a9eb0ec78385eb8ca73f8aabefea6c82de4e829872a63c26c038ab7eddb45b9df6353a3ab5cfb413a536aae4299834c1ea8ff5104a95f33115601dac6fbe64712f1d050000",
    ],
    [
      "ETag",
      "dvcbxCPeOBylckAcKguz8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT SUM(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-26-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d546d4fa34010fede5f41b82f77c9f50ddad29a18af69d123a95529ad9acba55d96015781c5dd45634cfffbed425fe8d518bfc1cc3c2f333bbbef354dd39f481ae8279aee93e83907f6f6ed91fafa4f9501812295f19c7b7b1a8ac522bbb3ed89f9da19dedc5ddc9c9e9655a44073946431d439cd19067e329f352246f30c314aeb92b06ef4eaed6ebfdfefb4bb6dab63582596431c4e48faa4181e84c8f849b3b9f5d188288d624019e10d4c935dbcf9623433461f010bde3c946d4a25defc5cf82ca6180942d3d3f9ac349173604b481089958d3d3af07f1dd237084a1a91ac7e211810c6344f85b256d2609a8624ca59412e99de6550860bcfbbdf4a409fd9137be469b3f9e5f7154a14d9ea8786b8b65c32e0792cb473f7ea525b6552fb0171e02bedf6b7edda32c2684862589260a59d6a67857c411d0017242d0c78c88fa1222bb39ba1391f9cd78e42912021d536654babd543ed7e6be087be85c3bed9f5c316f87edfb7bac8f45b78d0814ee003aa3208a55de2514a5308c3a0dbc756070fc068a330088d76800dab3b30c3d0ec9aa60506360353df30ac77fd600648c098f08c72b219ab3e72eda1672f9df3e5d4b6c7f678dffe2b2347d5b7ae238b3d773e1d495475542192331e97cd1e0eea600242ceb4dadc67533c6a2063844a53c5713b53cf768723cf59546cc8dd9b4084f0dbec596d5f88620e7b3462280101ec9206ea2cf5ebab99e33957d3e164cf50acd3f5b692cbb23f3bb3fb9eaa6cde5b76b819e5a1955165b3d7d12bb9f5cf0f591628ce3fa079d984f5f60147edffafbfb50ab72e2feac6957e33b7dd7b852d722ae342080c52bc57fbc22a2b6099fec23b24cbb7af8242c88761a7cf850ccb5b85f95ebd584b75c74852b6ba21ec98466bb0259440268e2bccde4ef2e865505a90402ab6b3285f887290eb034b79c54e0153e572c9a7cef4a2305f5bd7fe01d0bedb6ade050000",
    ],
    [
      "ETag",
      "TIYENftVVpXEEL3w4AQXGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "90",
      "ee756c805f64890fba6cd912a2cecd8c6521a6e285e1808b6d993186ffbeb680fad2f69c736f6fcfe9c9304df29b165bf260924d9aec2b60c79b04c49b3a2c815799e0722bb1e0406e5535089aa86adbad5c3bf07bfe7076ff197ceda78bb9171cc6e3a68a473f905359779248e238856ccb25fed6d86c79ad15340775e37acdf4407d43ab8963a9b5677f3ef9b81672dc6a61b6f2fdc9d47f22ad54eb3d946bad1fb2c3cd126260504470794ec970079178d5be39cdcb0c2c8e158b80b743546323270cab9232444b52963bb49c81e7797d67e08cfaeea82bcf30a222c54275acdec979be4041b3251e9477e234e1b0063651744190f82a9deb7ca4f4a79bedbb9e47ce74dd9e42a343e165e0f428802f184a3f1cb40b9b74713ca2b22b541a8255a0e988caff7a4945cb19b5f10ff5a9ecde1a020000",
    ],
    [
      "ETag",
      "02u20XL3L6N/WXYqBPO8Xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "516e82300000d0bbf45b4d2c42dafd096c5d14c1210aed4f0358401cc880421bb3bbcfecdde03d419ae76218f8f8b88b16bc019d42bcca57fb07b2f5579e99b1dca2823312d508eaef43c4daf7362e99010dcca683434ff3d5cdb076d7eda69a9026d4a795dd78a35dccb22f1a8bec707b2d5542989cf7308c955fa09f8b352b2acc7a0a8204eedac85d7adb65c8ce8d129ca27cfd89062d6b4a6cf891f9a95b1e4f544215fa86f24bdcb933f72a6611cfd1f9c469868f3233ddacb92463e9347170ae2bd2dc37600184ea6ebd18f8ed35334c8c17e0bfc947dd89d7d516692f7af0fb07758389ee05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-27-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b30147dcfaf40ecb5f92683548ad62ca12b52201d21adaa69a2b663a85b822936edb22aff7db6c9072c55d537b8f79c73cfbdbef65b43d3f42792aef4734d87247e2e70bef9f248a17e2633988358669efdfedf3fdfa7ae631bd7e38dbdc9a60fd777afa35189228acdc03a4b7093d12247989d2f17ad38a74506724a9b42b0d9339bdd8165594677d0358d9e5972194ea219499fa4c203e7193b6fb7f73e5a31a571824146580bd1f521de7ee9b5b39c3e62c459bb5eb62d2ab1f6c785bf2514014e683a5a2e4a1305c37988d78024d2c691bd821775f91601eb562cd02f046180102d522ead953288a611898b5c890ba537111461e5f9f05b09e80b7b664f020dd1a458a7610ad6f84c5b010e42bec9b076e9cf5ded9e63c6ef5b8e7739f7dd71e0ccbd7031b9b2dd716b329f2d5d6fa1dd5ed9bead710013ac24b49176a1fe3cf1a38ca9a22ba14352652d90d98a2191dd8dd379e7240f125244986378070bcdce57d0b53a4318411345567f00a30e86d082e600f461070d0d6cac20065505e5ace48394a63d68e03e8ccc100dcd7e6844bd4e68a161140e30eca3ceca440099fa8ebd3df482720c389e1296514676c3d627be3d0eecd0b90c3ddb9edad363ebaf393941dffa8e0007fed29b0856754c1128123e2d1bad0fa9d6bd3c976a631f4df0a4812c275498524be07881ed8f27817353b1213672866380368b67b9931148183eb2412e8e96e3dca52b798eba3776abfdaafdbade839840fc3af83cb62380725d542f27eb52af138875ac8da23cca32aa2f02dff17ee895e4f67d991b9014efe8bcecc27a26a6f52026cc6a5a8dffbf7e372a357471c377f6f49f4bdbbf935c9593191f4738c7293a56fdc4a64b6299fec40326e0fbe74432c48b72a8cfb8088b4b87d8b1bada5c79054939f9bda0d1b786d65e5010737e82303ad6608f387952642dbc",
      "c629dfcfa27c5aca416e6b968a8a1d459370710fbcdd216e1bdbc63fca66021517060000",
    ],
    [
      "ETag",
      "qR3zxBDMIE4PAyEypDhPYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "83",
      "30",
      "147de7572cf5754b86611f31f101752a714eddf041cdb254b830b470b12d1a62f6df6d0b73bc68485ce20bedbde7dc9edcdb1e3ead4e87bc2659488e3ae43989df0ae0e5410cf24e6fe6200a26855a72cc0490ae6683a4b1669718db578f369c73c7f3d70f8b7e7ec14af7f8b86289600d2955bc4f15a9384a808542c54f26eed479836534057d6280ac48b39509bb3b5896b98117fedc9b5d3491144383cceea753f7643a2135b4e9fe2c12524957e6c8bf49987569d562e4059fe71001872c805dd739c71708a467c62b689a33e8092c7800a216d185151c732c72ca117b2ad53b1cf5ecc1783c76ec813d720e475b3ac380ca04335d71bf20dffa12256573fcd02326c3ea0e78155613df8e82448d4b684e4841efba3809c9776ed3fd85e8cdfca1d3e0d6bba5d5a86cadaa2615250c56ffa4aeae644dd50b6fa75d3f933d89d3148b4cb6943e9fdeb87b6c5cb9a16dd367ae3fd997ac90ca0b2d757def7ab2f0ddebdb1fc5d577b933c1492941dc72541e13609c65f79df16034ec93ad534f513b516aa34a5e80490754fdb12e13a972116502ac8df505ea90b0891d050000",
    ],
    [
      "ETag",
      "yog1KZ1eFr4IThYS0pGlyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-28-1588841517427",
    },
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
      "0002ff8d54ef6f9b3010fd9ebf02b12f9bd4244012422a555d94d00e294ddb84b49ba62931e6a06e0153db74aaaafcefb3213fc85255fd0677efde7b773efbada169fa13c942fd54d303123f17c05ebf3cd2403f5119102856196131fff6e7edc520094c30fc4bd7f3227f787656a14859cd519a27d0e4b46018f8e962de8a192d72c4286d4ac2a6e534cd9ee3385db367f6bb56bfaae5904413923d29860721727eda6e6f7db4624ae304504e780bd374176fbf58ed9cd147c082b70f65db5289b73f163e4f284682d0ec6c31af4c141cd81252441265635f1d06df0fe95b04a5ad58a25f080684312d32a1ac5534986611890b56924ba6371994e1d2f3eeb716d0e7eec41df9da9537fdba42a9225b7dd310d7964b06bc48847631bbbed256b9d47e401cf84abbffe1ce5c19613422092c49b8d2ceb4f352bea40e810b9295067c1424509395d9cdd0bc77ce6b47a14890906a1bd8b26fd8c8748c4110057d1c399d5e101910044ed0efa14e60e04117ba6100a8ce209476558f329ad9a135b0b005761862135ba16d63c308c28ed9b1ed41e00cfad8865ea7e7e81b86f5ae1fcc000918139e534e3663d5473377e8bb4bef623975ddb13bdeb7ff979123f4fdcc93607fb6988e64557d541192331e57cd1e0eea600242ceb4dedc47533c6a2067844a53e5717b53df9d0d47be7757b321776f0231c2aff367b57d114a38ecab114329086057345467a9df5ccf3ddfbb9e0e277b86729d6eb6482e61bf7766f73dd5d9fcd7fc7033aa43aba2caa6ddd56bb9f5c9bb2c772829dea179d98475f380a3f1ffd79f468d5b971775e34abf5db8b35faab6cca9cc0c226090e1bdda2756591556e94fbc4312be7d1554857c1876fa5cc8b0bc5598efd5cbb554778ca455ab1bc26ed7e975b684b290892344cf308c2de2e865505a904226b6b3a85e886a90eb034b45cd4e59a6e072c9a7def4b234df5837fe015e522f8fde050000",
    ],
    [
      "ETag",
      "t2rTQXQF9lb1e0TGEIIfTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "90",
      "ee752cc360244b7c40b3654bd8178ea785988a57860217db8bc618fefbda02ea4bdb73cebdbd3da767cbb6d92eafd6ecc966ab3cdb37204e7719d0b73e44209b82a4da6aac24b07b5d0dc4335dbdf367417c10212de6efde785fa3c09d779c4ebb2a99fe41c955dd5921853739146ba9f0afc176cf1bade225e81b974b61069a1b7a8d4eb5d15ec2cfe0e75628716d848f380c8359f8cc7aa9357ba2d6d63c648bab083620a04ae1fa9c5ae016527a33be252feb021c898d4841f64374632767029b9a0b444751cec877dcb1effb9e3b7627de683294179872cab1d21df1825de613122f223c6aefccedc2111deca21882609b9b746ef351d2c1343f78237661dbfe9458034aaef3662702f92550d991604c3cb2218d396ab7a4c320d180a153aebeeb35a79eb35aeb1f925e370419020000",
    ],
    [
      "ETag",
      "k8BAUvrLtSCM45qporok4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7fd9e7c8b0aedbb720d2c4a58391d5be98b55dac088a0a3afdf7667afee0fc0042291bc76cea6eac052f602510ede9deed0c730d8bf2a4c6fe61ee0445584c6f3ea223f575694b795a2efada05fd76416ee6754e7c371e0fb8f9175c87a26dbea67a7dcf87198a1e8eb40236d841396fe53e4c2c52121ea616da8455dab80ba728a90824b6d62a15a36f4df07136aece55f798b47e196a5237cbe1dbed3e731d9f12a70acf5ef49efb51b959a36b3a6320a38260c11e6fb117614a95500914ee6822d801b6f47c6063c69f3359456807fe9bd9b4f6ec79351919d8007eff00e5c42b9905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-29-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40ecb5f9a00921a914ad594256a484ac84b4aba689dac650b7802936d9a22aff7d36e40396aaea1bdc7bceb9e75e5ffbada128ea0b497cf54a5121095f739c6dbf3c53a85ec80ce6209499f1df6fce83ffb019dff9f1cf859ee433166e6f47a312450a3603711ae126a3798630bb5aaf5a6146f3146494368560f372d8d4f4c160d0d374cde85d1a2597e1289893e4452a3c719eb2ab76fbe0a315521a4618a484b5108d8ff1f6e6b29d66f41923cedaf5b26d5189b53f2efc35a208704293d17a559ac819ce3c1c0312491b27b60fafebf22d02e25628d01b82304088e60997d64a19449380847956880ba5371114e1c2f3f1b7125057e6dc9cb80aa2511e275e02627ca1f880038f6f53accc9ce54279e498f1c79665cf96ce62ec5a4bdb5b4d6eccc5b83559ced70b7ba5dcdf988ea97000235c482823e5baf8b3c54f61ac28ea0b1d9214d65c99ad1812d9fd38ad774ef2282145843986f730cfe8f48136e80c61000d140cba3a0c3a18c2013474d0851d34ece19e0f31a82a14ce4a3e4868a261d4d5b0013d4deb0fbd1ef2bb1e144c4fd7810f81ae43800d75cfde1d7b4119061c4f094b2923fb61ab13c71cbba667cd3cdb34a7e6f4d4fa9f8c9ca1ef1d4b805d676d4f04ab3aa600e4119f968dd68754eb5e9e4bb5b18f2678d6409a112a4c154b60d9aee98c27ae7557b12136728e4380b6ab57b9930188183eb141268e96e36c417d798eaa3d5e54fb2df6ebc701c404e2d7d1e7a91d0194eb52f472b62ef53aae58c7da28caa32ca3eaca752cfbbb5a49eede97b90351fe8ece661f565331ad27316156d36afcfff5bb51a9a18a",
      "1bbeb7a7deae4de741728b9ccc3838c0194ed0a9ea27365d12cbf4271e30013f3c2792215e94637dc645585c3ac44ed58bcd95579094933f08f6f4fe65ff202888193f4718bde10171f6a4c85a38c6093fcca27c5aca41ee6a96f28a9d8226e1e21ed8fb43dc35768d7f49973afa17060000",
    ],
    [
      "ETag",
      "AxBRYdYvAVdmXM5nuFsgyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc5545d6bc230147defaf90ec5541a57e0d7cd0e9a6a06eb615c686486c6fb5ae6dba24ddfcc0ffbe24adda174761c25e9adc7bcecde1dee4f4a0150ae8c30b1d745f404b6ff51903ddddad804fe5c60016fb9c892522210354946ce07825d9fb37dcd36323da5aad8619f4b6adbdf93a98b6db098bd96b08b0e01d442462d703df61227e577121cd2b2cc401c8136de2c741b85061f102f35da460d3328693a72c1210472193d968d4e98efa28858ec5eb220ee678a18efc9b845ae75a2a86366469800b14421b2e5d47946cc0e643355e8683c887122331b581a522b230815794c411a6849444aa546d952ab566b3a9576a95865e6d9ce83eb131f748282b66263aeb73c2b16f906f3962544fee80266132f1d328909bb984ec8404f4258b3d079d73c7e22fc4e1c4aaeb196eba9b6b99cadcaa6252aee7c3e29fd4c595acb178e1f9b4d3677223711c9038e439a51f47cf9d1b362edc90b7e95ec7eadf4a9671e1859cbad670dc37adcef8e5aab8f8ce2f26e8ee38b0174a84c718286755ca7ab3d6a897d1c9a90f443a914ba3721a834adb58fcb1061e173917fb0cb4a3f6033873814e1d050000",
    ],
    [
      "ETag",
      "zZaD4uRpxT97SmDx9zSXHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-30-1588841517427",
    },
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
      "8d",
      "54",
      "ef",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "9ebf02b12f9bd4241020a195a22e4ae8c696261d216da7694a8c7350778029369da22afffb6cc80fb25455bfc1ddbbf7de9dcf7e69288afa87a42bf5425103123d1590af3f3cd2403d9319e02892992bfffbdd3dc9be3d0c066b34b1069aab3f4da37ebf4291b29aa1248ba1c96891636017f3592bca6991a19cd2a6206c1a5a53b76cdb36754bef999d5e55cb200ec724fd23191e38cfd845bbbdf3d18a288d624019612d4c937dbcfddc6967397d04cc59fb58b62d9458fb6de1cb9862c4094dfbf35965a260902f20412496360ed5abe0f3317d8ba0a41509f433c18030a645caa5b58a06d33424519197e482e9450445b8f4bcffad05d499337686be723db8ffb84489245b7e521053168b1c581173e5ca9b5e2bcb4c683f20066ca9dc7d753c4744721a92181664b554faca65295f52af80719296067c14c4509315d9edd0dc57ce6b4f214910176a5bd8a2a775916e6be74118f470681b56106a100476d0b3901168f8dc04731500aa3370a95dd5a394a6966623e884a069961ee8101a81ddb3b06e181d53d33bbad9d1b0610486ad6e1936fb7e700e88c388b08c32b21dab3af49c81ef2cdcabc5c47146cee8d0fedf9c9ca0ef3c57807d6f3e198aaafaa84224663caa9a3d1ed4d104b89869bdb9b7a678d24096132a4c95c7ed4e7cc71b0c7df7b66643ecde182284d7b327b97d218a191caa518e12e0905fd3953c4bf5663a737d773a198c0f0ce53addec904cc07eedcd1e7aaab3f9ebec7833aa43aba2d266d7546bb9cdd9ab2cb7282e5ea179de8655fd88a3f1ffd7ef468d5b151775eb4afd3177bc9fb2b6ccc98c0721e490e283da3b56591656e977bc4302be7b1564857818f6fa8c8bb0b85598",
      "1dd4cbb594778c2455ab5b42b36b697b425198f35344b7abef10272f83d4820452be9b45f5425483dc1c592a6a76ca3209174b3e71275f4af38d4de31fc09f6978de050000",
    ],
    [
      "ETag",
      "FTKWXipJhAAyaN5A0I1qOg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e75790ee756ce247344b7c9065cb9c641f6e26668b31152e0c075c6c2f33c6f0dfd716505fda9e73eeeded393d5ab6cd7e933c647736db24f1ae0471b88a81def5610eb24c49aaadc05c02bbd6d5403cd6d5cb289b2e5379fb352b3acf1ecf8733dac5fbf1b8ae92c10f645cd51d1552384a200da5c2df06db0d6fb49c67a06f5caf8519686e68343a14467bf45f279f974286a1115e16be3ff1fc07d64895d9576aadcc43b6b899430402f200cecf29046e21a0a9f12d7956a4e0482c4500b219a21b6b391658165c203a8a727a1dc71d8c46a3be3b7087fdeeb02d4f31e09460ae3b161fec349f90783ac7bdf6cedc3a1c51c33a8a3608165da473998f92fe7473f7a6db6327b66a4e2bab45abf33cef4020df042a3b128c890e6bd3b847ed967418244a3074c0d5773d25d4705665fd030023afa219020000",
    ],
    [
      "ETag",
      "XfmIXls/ZKp0JBan7Ktqgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fd9e734230c76fb465d426210a9dbcbce86d5204b6229d2e9bf37d3f307e70790a2a09ce3b16f6907dec14a44b42db6871eea6b5834641cae6bcaec54909cb70b52c9796f0584e4940401f78d04c3a3b79b23274e96a9447b54de32fe61990d674f5536977e3a7db5a82929565dc6cae3a4a1ea51320d763219781e4d17db666632d69af86d8acac8e2165a272bb412458330a8d2ab4a3ce464115f1e37cf10c2793da428f671e7fa4cafc2d96e8963f47107554df984aad749bbb36be58ea0676003e872af07ca71fd9a4932421bf0dfc4e37aa7afab4ec94007f0fb07129b1b6305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-31-1588841517427",
    },
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
      "8d",
      "54",
      "61",
      "4f",
      "a3",
      "4010fdde5f41b8afb69442859a3467af4525d752a554632e175c960557298bece29d31fdefb70bb485ab317e8399f7debc999dddf78e24c9cf380de533490e70fc52a0fceddb1309e41391410cc42283a7cadf4750143fafd5c168f4e3f932b9c7facd785ca170c9a6609325a84b49914344cfd6ab5e9c93220339215d2ed8d5d4ae3a344d535787aaa10f8c8a4b5112cd71fa2c141e19cbe899a2ec7cf46242e204810cd31e249b7d5c791d28594e9e1064546997557825aa7c5ef87b42206098a4e3f5aa32515094fb680370226c1cd86170de96ef61b0e9c51cfd8a210210922265c25a2503491ae1b8c84b71aef4ce833c5c7adeff3602f2ca9a5b534f82242936a99f820d3a9142c080cfde32245db8cb85f4c010650f3ddbb958ba8b89672f1d7f35bdb21693de74395f2f9c95747765b996c44090a052421a4be7e59fc37f4a6365d190ebe0b4b4e6896cc310cfd6e3b43f38c9bd8410e1e628aa61bed13f05aad91f055160c0c8d48641d447416006c61068411f8e74a48701024d85d259c5072949f581060d33d07c4d1f86beae0f916f02a8f92a406a68448351bf1fc8357bbbef05e6083034c3342314d7c396a7ae35f12cdfbef01dcb9a59b343eb7f727c84be736d0ef6dcb533e5ace6982250246c5635da1e52ab7b712ecdc63e9be05103598e0937552e81ed78963b997af66dc306dfc8398a017c5bbd889d8c4042d1810d727eb40ce50b128a73949dc9a2d96fb95fd73b10e5885f7b9f87763850ac4bd9cbd1bab4eb787c1d5ba3a88eb28aca2bcfb59d4bb991dc7e2c730b92e2039dd73a2c677c5a8f7cc2b4a5d5f9ffeb77a75143e637bcb627dfac2df75e70cb9cc8b82842394ae1a1ea17365d10abf4171e300edf3d2782c15f947d7dca78985f3a480fd5cbcd1557105793df09eac6e074b013e4c49c1d23744d",
      "df218e9e14510b6d50ca76b3a89e966a90db96a5a261a7a40938bf074e7d88dbceb6f30f58c1f0d517060000",
    ],
    [
      "ETag",
      "iC/xhauuKP1299BkGlYi4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d4fc230147ddfaf20f51512a67c69c2c3509419401c23261842ca7607c36d1d6da712c27fb7ed06ec05b344125fd6de7bceedc9bdedd94e2b95d0871fb9e8ae8416fe729300dd5e2d81bfca8d052c0938134b4c2206a82cd9c0f152b2dfa6d56f2fda98b73db3de30d6557f449fa746bb9db298b382100bde4e4422f67c085c26e2771597b2bcc2221c823cd1214112467315964f30dfc60a1edb96397cca23217115329cf4fb46a7df4519b42f9f177131c77375e4df24d43ad33231b4260b0b3ca0103970ea3aa6640d0e37d578190ee3002a8c24d4019689c8c2145e5292c498125211a9ca8d5ed1ebad56aba6d7f566edba79a007c4c1dc2791ac988cd1519f138e038b7cc911a3467a07340dd3891f4681bcdc25e42724a04f59ecbbe898db977f219a43bb51cb71b3dd4ccb5516561593f2fc00e6ffa42eae6485c50b2fa69d3d930b89e39024112f28fdd87f312ed8b87043d1a61f0cbb7b2959c685170aeadae6a03bb68dc1e8acb8f8ce4e26e86c39b01125c2630c94b3f46aad556f36aae8e0d47b229dc8a551394d40a51d2cfe583d9f8b9c870306da5efb012ccef2ab1d050000",
    ],
    [
      "ETag",
      "WZ0xfnqI9HI56Aj0iPrJZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-32-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "a330107ccfaf40dccb9dd48440082195a25e95d02b524a5a42529d4ea7c41843dd02a6b6695555f9ef67433ec8a5aafa06bbb333b3ebb5df5b8aa23ee13c52cf1535c4c97389e8dbb74712aa673283384864c6be9ef8d6b596e165b1bcb13ce3ee154ef46434aa51b8aa66202b52d466a4a410b1f3c5bc935052168012d21684ed9ed1d6fbb66d9b7a5f1f98c6a0ae65288da7387f920c0f9c17ec5cd3763e3a0921498a40815907926c1fd75e0cada0e41141ceb463594d2831ed73e18b9440c031c9478b796da26488ae5006702a6d1caaa3f0e7317d0783ac9308f40b86084048ca9c4b6b350d24798c939256e482e95d0445b8f2bcff6d04d4b93375c681329e2dbce0fb3a021cad7f288029ab1545ac4cb972e5cf6e947521b41f00436caddc5f3bbe232294c438452b1cad95917251c957d411621ce795810084296ac88aec7668ee07e7b5a79024800bb52d6c35e85a40b7bbc3300e0730b67bfd30eea230b4c3411ff4c22e1c9ac88c42049a0c5c6ad7f52027b9115bb189863ab4e381de1bc2b0a71b9669742d33b22203f66ca31b0d4303aa5b86cdbe1f489198ca04b38230bc1dab3af69dcbc059b9572bcf7126cee4d0fe2bc527e87bdf15e0c05f786351d51c550cc48c2775b3c7833a9a0017336d36f7d9144f1a282826c25475dcae1738fee53870970d1b62f7a62801f06dfe2cb72f062943876a40418638a237249267a9decee66ee0cebccbe981a15aa7db1d9209d89fbdd9434f4db6e0ad38de8cfad0eaa8b469996a23b739fb906509d2f2039a976d58d58f385aff7ffd6d35b8557151b7aed4bb85e3ff96b5554e667c14238a727850fbc22acbc23afd857748c077af82ac100fc35e9f711116b70ab2837ab596f28ee1ac6e754b68da8669ec084521e5a788deb0bf439cbc0c520b6528e7bb59d42f443dc8cd91a5b261a72a",
      "9370b1e49eebfdaaccb736ad7f9cc7f7a0de050000",
    ],
    [
      "ETag",
      "8HDR6H/miVpVM6N2QwcD1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e72b48f73a92e1749a253e4cc7d4c598c946345988a9706138e0b2b66c12c3bfaf2da0beb43de7dcdbdb737a324c937c2779481e4db24fe29f125875138358ab830bbc4c05975b81390772abaa41d058554f7ade267e79de1e3d7b3a9f79dbd755b539acc7e3a68a075f905159779248e2288134e4127f6a6cb6bcd6729a81ba71b7637aa0bea1d54455686db1fa70668e7b2d65186a69e52d974f93a5435aa9d6bb2fd75a3fe5807b1722609007707950c1f000815868e79c66450a16c79205c0db21aab1916386654119a22529ebbe67d983d168d4b707f6b0df1b76e52906542498ab0eef9d9ce70b143475f14fb92776130f6b601346170589aef2b94e484abfaaf9819ca9ba3df94687fccbb0492580bf31945e38680777a48b628acaaa5049085682a6032a7f6b9e8896336ae31f9662791d18020000",
    ],
    [
      "ETag",
      "B2UWgFDXxU1CHGUXJNyWjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfc94e83400000d07f997369ca1af0060c3240a08895c50b6199964136871de3bfdbf8fee0fd80ac28f038a653ff853bf002f68c53cec5d9e9656d7f2b1bce892c193d3c83b67ba332f365d5f968349a25e15a7c65798c8b404a02f6de0ec4856b059dc7bca5f6c52cec49729b2554830f25dc3e6bc63ad090916bf71adcf0ed3df74d98ac7ac6231fa544e96a4157cac83bbac98782002d4b242832f203316c53baf328776540f391c495478ca80fcd6da5df7128d59b6843a4892494cb38a3b2d9574b55b9f77a56c109e06d20148f2979ce7851514ee0bf994efb809f570d671453f0fb07a871376c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-33-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "a3",
      "30",
      "10",
      "7d",
      "cf",
      "5720f6719b845c08a452b48d12d25225644b48bb17ada83186ba054cb16995adf2ef6b432eb0a9aabec1cc3967ce8cc77e6b4892fc84135f3e97640f87cf39ca365f1e89279f890c62201419d5541e7b379b5f3f5e8df1f5dfbb591a5f7e45afa35189c2059b82388d5093923c83889eaf57ad3023790a32429a5cb0d9eb353baaaeebfd8edad1fa5dade4521405739c3c098507c6527ade6eef7db44242c2088114d31624f121de7ee9b6d38c3c22c868bb5eb6cd2bd1f6c785bf4504028649325aaf4a133945998b62802361e3c8f6bd8bba7c0b83b81572f40b86084048f284096ba50c244980c33c2bc4b9d21b0ff270e1f9f05b09c82b636e4c1c0992288f133701313a937cc080cb36299266f67221dd3344d97dcbb4664b7b3176cca5e5ae2657c662dc9a2ce7eb85b592eeae0cdb9018f02254484823e9a2f8b3f84f61ac28ea731d9c14d61c91ad18e2d9dd38cd774ef2202144b8398a7630575306a0a32b432ff03418e83dd50b14e479baa7a9a0e72970d8477ddf43a0aa50382bf920214947f73bbadeedba2a443db78f7aaa0b7c3570bb5a5753f5810a06434ddeb1b7875e60860043534c5342f16ed8f2c436c68ee19a33d7328ca9313db6fe9ae113f49d6d72b063afad096755c714803c62d3b2d1fa906add8b73a936f6d1044f1a48334cb8a962094ccb31ecf1c4316f2b36f846ce5108e066f52c76320011454736c8f8d132942d882fce51b6c68b6abfc57e7ddf832847fc3ef83cb6c381625d8a5e4ed6a55ec7e1eb581b45799465545e39b6695dca95e4f67d995b10e5efe8bcecc272caa7f5c0274c6b5a8dffbffe342a35647ec377f6e49bb561ff",
      "14dc222732360a50861278acfa894d17c432fd89078cc3f7cf8960f017e5509f321ee6970ed263f56273c515c4e5e4f7827d7da80cf6829c98b113c45051ba7bc4c993226aa118256c3f8bf2692907b9ad59ca2b760a9a80f37b60ed0e71dbd836fe018264f9f517060000",
    ],
    [
      "ETag",
      "5I0j3QyZXwEAJzWFpmG+ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4fc230147ddfaf20f51522c8a7263c0c059d0c44367c318494ed0e86db3adb4e4308ffddb61bb017cc12497c597bef39b727f7b6673bad54421f7ee4a2bb125afaabcf04e8f66a05fc556ea6c0928033b1c4246280ca920d1caf249b8743f37639f1966fcf4664316734b81e5a7ab79bb298b386100bde4e4422f67c085c26e2771597b2bcc2221c823cd1214112460b15964f30dfc60ab6eca9317ecc23217115329e99a6de33fb2883f6e5f3222ee678a18efc9b845ae75a2686366439050f28440e9cba8e29d980c30d355e86c338800a230975806522b2308557942431a6845444aa52af576acd4ea7d3a8356bedc64dfb400f8883b94f225931b3d0519f138e8329f9962346adf40e681aa6133f8c0279b94bc84f48405fb2d877d131b72fff4234c676ab91e366bbb996ab2cac2a26e5f9012cfe495d5cc91a8b175e4c3b7b261712c72149225e507a60bee8176c5cb8a168d30fbaddbf942ce3c20b05756d63d4b76c7d34392b2ebef393097a5b0e6c4289f01803e5ac5ab5d169b65b557470ea3d914ee4d2a89c26a0d20e167fac279f8b9c870306da5efb01e757e9a81d050000",
    ],
    [
      "ETag",
      "tmKL9bPfbVJInSscMF/KSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-34-1588841517427",
    },
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
      "8d",
      "54",
      "ef",
      "4f",
      "e2",
      "40",
      "10",
      "fd",
      "ce",
      "5f",
      "d1",
      "f4bedc25022d94524c8847a09ebd206a291aef7281ed768aaba55b77b71a63f8df6fb7e5475163fcd6cebc79efcdececbed6344d7f2069a41f6b7a48968f39b0976ff734d48f5406045aaacc7036780c13efacf71bdd3edb375c4cff0caeaffafd12458a6a8e565902754e7386811fcfa68d25a3798618a57549586f5b75b3e3388e6576ccaed5ea96b51c92784cd207c5702744c68f9bcdad8fc692d265022823bc81e96a176f3eb59a19a3f780056f1eca36a5126f7e2e7c92508c04a1697f362d4de41cd81c568824cac6be3a0a7f1ed237085a359612fd4430208c699e0a65ada4c1348dc9326705b9647a9541192e3cef7e2b017dea8edd61a09d7b93ef8b080958fcd010d7e673063c4f8476ea5f9c6b8b4c2adf210e7ca1dd9cb9be2b238cc624813989165a5f3b29c40be208b82069211fa030818aa8cc6e46e67d705a3b0a45828454dbc0e65dc346a663f4c238ece2d86977c2d8803074c26e07b54303f72cb0a21050954128edb21ea534b5c3ae0da61d75cdd8b6e501b4cc4ecb8a1cabd5b343c08e016085316eb5f50dc37ad70f6620a732223ca39c6c86aa0f7d7710b873ef743e71dd913bdab7ffccc83bf48def4970e0cf264359551d558ce48c4765b387833a98809033ad36f7d914df35903142a5a9e2b0bd49e0fa8361e05d576cc8cd1bc312e197e9a3dabd18251cf6d588a1150860e7345267a95f5e4cbdc0bb980cc67b8662992eb7482e617f7766f73d55d98297ec7033ca432ba3caa66de995dcfae843966b94e41fd03c6dc2ba79c0517bfbf5af56e1d6e535ddb8d2af66ae7fab6a8b9ccaf810038314ef",
      "d5beb0caaab04c7fe11592f0ed9ba02ae4b3b0d3e74286e5adc27caf5eaca5ba636455b6ba21b47a8ed5d912ca4226de223a8661b4b78877ef82d28215a4623b8bf27d2807b93eb09457ec14650a2e977ce24d7e15e66bebda7f97656f44dc050000",
    ],
    [
      "ETag",
      "CUAqblIH9JaYw6WstSZAVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff4d51d14ec230147ddf572cf5d5c56d4240131e806134412353d4c41052babb31d87667db6908d9bfdb761bf0d2f69c736f6fcfe9d1b26db24f8b88dcdb6493263f15f0c3550272a10f21882a93426d251602c8b5ae0649135ddd7fbe093eb69ffb94c57210dc7dc5d38760918c464d95605bc8a9aa3b2aa4709c42160985bf0db65bde6805cd41dfb85e7333d0dcd06af2501a2d18bfcf2ef91c23c3bf2ce7f3f1643e23ad549b7da5d6dabc63879b1062e0503038bfa6e4b803269f8c6d41f332034760c5198876886e6ce4846355528ee828cab9ed395e7f381cf6bcbe37e8f983ae3c4346658a85ee58be91d37c89926621fe69ebc46bb2e10d6c92e87220f1453897f128e95737fbaeef3aaeefb81e3969757b5a591d5a9da74e0e12c42b47654a80b1e2922e93296acf5247227905866654fdd9632a5bceaaad7fbf80a2df1e020000",
    ],
    [
      "ETag",
      "5M/DVhWkicft7D9XfCFDQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "49",
      "72",
      "82",
      "40",
      "14",
      "00",
      "d0bbf45aaca080901d8348414049753064d345c317083276cb94cadd63e5dde0fda0244d8131c2db0a1af48a9664a76dd3add7aac612c22170463516f1758e1fa631f56a98c4bdf549dc1bc00537263459f046d58eadcaa25b1f0e28f80baf8acb8923d73819e9c04533aeb2c6750bbdea52728a1a624de57d8d68e1db963ceb4e124f25d60589e57675e681671a2ffecc2a5f18a4bc3ed17d505cf9d02a63fe0d174d2d5793d6bc7edcd27350bac7f870a4769f8266ecc242a7919ce1bbe0bd4ba251a10d82b92b0760a47ccef6b2a66dd07f93f0a583e7d580648001fdfe01c69dbc9005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:30 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-35-1588841517427",
    },
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
      "00000002ff8d545d6fa330107ccfaf40dc6b139236145229ba46096dd125a421a4d5e974a2c618ea1630c5265155e5bf9f6df20197aaea1becceccceaed7fe68298afa8ab350bd52d400c76f252ade7fbc90403d1319c4402c32eb410ce7e966b3f016e18bb929eec7b7e9afc57058a1b0645390e6096a53521610d1abd5b21317a4cc4141489b0bb62ff4764f374db3dfd37b46ffdca8b81425d11467af42e199b19c5e69dade472726244e10c831ed40921ee2dafa5ccb0bf28220a35ab3acc62b51edebc23f130201c3241bae96958992a2c24729c089b0716487c17553be8341da89397a8d210210923263c25a25034916e1b82ca43857fae0411e969e0fbfb580bab4a6d6d8532049ca34f33390a23325040cf8ec3d47ca8d3b9f294f0c51f6d4b19d9bb93b1b79f6dcf197e33b6b36ea8ce7d3d5cc592a8f77966b290c04099212ca50b9967f0eff91c664d190ebe04c5af344b666886777e3b43f39c9838410e1e628dac17ca37b097a66771044810123f3420fa22e0a02333074701174e1a08ffa6180405d413aabf82023593830063d5d0ffd007481cfd1d00746a8fb51bf17f1f879802e0375c7de1e7a8105020c4d30cd09c5bb61ab63d71a79966fdff88e654dacc9b1f54d814fd08faecdc19ebb72c69c551f5304ca844daa469b436a742fcea5ded857133c69202f30e1a6e412d88e67b9a3b1673fd46cf08d9ca218c0f7e59bd8c90824141dd9a0e047cb503123a13847d519cdeafdcafdbadf832847fc39f83cb6c381625d642f27ebd2ace3f1756c8ca23aca2aaa2e3dd7766ed55a72fbb9cc0348ca4f74d6bbb09af3693df309d38656ebffafbfad5a0d95dff09d3d75b1b2dcdf822b7322e3a208152883c7aadfd87441acd2df78c0387cff9c08067f510ef529e3617ee9203d56979b2bae20ae26bf17d4bb977d732fc889053b4518fa0171f2a4885a284519dbcfa27a5aaa416e1b96ca9a1d4913707e0f9cdd216e5bdbd63fa98b584f17060000",
    ],
    [
      "ETag",
      "v9gcOmwwQTQdj8wrPCGmKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4bc330147defaf28f1d10dacee0bc187ea361d6e731f551832466c6f6bb5edad49aa8cb1ff6e9276ae2f9382035f9adc7bcecde1dee474639826790f138f5c9ae4250c3e3260eb9300c4546d66c0b34870b9a498702035c5064103c5ee2e9eac897d7b9ffaa77df4a78b918fe3707a7595b3b8fb0a3195bc8d8c64ec8710795cc6cf3a368bbcc6121a833ad1c5288b93950e6b7b58ac530dcf9dd9607c5b4662f434327e1c0eedeb618f14d0b67658c4a382aef4917f93d0ebd228c4c81bbeccc00706890bfbae53866fe08a811e2fa7711a419d63c65ce085882acce180619652865897a9fa45b36e353b9d4ec36a5aedc6797b478fd0a522c444553ccec98fbe4041a3197ea91193567e072c0ff389ef4641fcd225942724a14f551c7ae427b7adfd421c8c9d56a3c42d764ba3545959554eca0f2358fd93babc92572a5f7835ede2991c499cc69825a2a2747ff8601fb171e986aa4d776da7772c592ea4172aea3a83516feed8a3c94171f95dee4d70bd16c0270ca5c738686759678d4eb3dd3a233ba7dea072a25046152c039d76a9fc63dd8542e67c1a7130b6c637022536ce1d050000",
    ],
    [
      "ETag",
      "DYV1PAGKpf+FofQYMfoNiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as __result FROM `purchases` WHERE `profile_id` = ?",
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
      jobId: "grouparoo-job-36-1588841517427",
    },
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
      "8d",
      "54",
      "ef",
      "6f",
      "9b3010fd9ebf02b12f9bb42490420895a22e4ae84a97a61d21edaa694a8c39a85b82a90dadba2afffb6cc80fb25455bfc1ddbbf7de9dcf7e6d288afa40d2503d56d480c48f05b0974ff73450bfca0ce4289699c86078fc3c0a8637b7e767cfcedf1f0e3acfe27ebf4291b29aa365964093d38261e0c7b3692b66b4c810a3b429089b47dda66ef67a3d433775cbe858552d87241a93f44132dce579c68fdbed8d8f564c699c00ca086f61badcc6db4f9d76c6e83de09cb7f765db4289b7df173e49284639a1697f36ad4c141cd81c968824d2c6ae3a0cbeedd3b7085ab662817e221810c6b4487369ada2c1348d485cb0925c30bd8aa008979eb7bfb5803a75c6ced0572e06bf3e2f4294c3e28b82b8329f33e045922ba7dee585b2c884f21de2c017cacd99e33922c2684412989370a1f4959352bc240e81e7242de57d1424501315d9f5c8dc374e6b4b2149502ed4d6b0b9a57591ded3ec200a2c1cf58ecc20d220087a8165a2a340c3b601461800aa33e452bbaa47294d033dc2a165d99a16d9a16176cc0ed8606808ba477a886dddd4b0d6e96a96ba66586dfbc10cc4544684679493f550d5a1e70c7c67ee9ece278e337246bbf69f193940df78ae00fbde6c321455f5514548cc785435bb3fa8bd09e462a6f5e6de9be24103192354982a0fdb9df88e3718faee75cd86d8bc31c408bf4c1fe5ee4528e1b0ab460c2d21077641437996ead5e5d4f5ddcbc960bc632897e96a83e402f67b6b76d7539dcd7fc9f637a33ab42a2a6d760db5965b7d7d93e51a25c51b344febb0aaef7134fefffad3a871abe29aae5da93f678e772b6bcb9ccc7810018314efd43eb0cab2b04a7fe01512f0cd9b202bc4b3b0d5e7b9088b5b85f94ebd5c4b79c7c8b26a754d68ea866d6f084521cb0f115dc3d8200ede05a9054b48f3cd2caaf7a11ae46acf5251b3539649b858f289",
      "3bf95e9a6fac1aff00c5d35591dc050000",
    ],
    [
      "ETag",
      "f4rcLwDbCWYJHwEzKEaJpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff4d515d4f8330147de75790fa2a1170738bc91e4097cdb8f8315d6262c852ba3b640217db325d16febb6d818d97b6e79c7b7b7b4e8f966d93efb4d8905b9bc469f253013f5c24205ff56109a2caa4505b89850072a9ab41d24457678fc17e4e3f183c97b338e4b3fddfec0a82c9a4a912ec0b72aaea8e0a29bc4d21db08853f0db65bde6805cd41dfb85e7333d0dcd06af2501aed3e789ff6f91c37867f5a2d1641b8989256aacd1ea9b536efd861bc842d7028189c5f5372dc01930fc6b6a079998123b0e20c443b44373672c2b12a29477414e55cdf38de703c1e0fbca1371af8a3ae3c4346658a85ee58bd91d37c8992664bfcd5d689d764c31bd824d1e540b6bd70faf12869af9b7dd7771dd7777c979cb4ba3d455687a2f3d4f02041bc7054a604182b2ee932b943ed59ea4824afc0d08caa3f9ba7b2e5acdafa07fdfa80611e020000",
    ],
    [
      "ETag",
      "lKAvHaXceOpGbBrGvxG/eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc97282300000d07fc9599d0164eb4d0aa2a0ecfb850910d6d6208442dae9bfd7e9fb83f7036059a279ce091ed003bc010a59f9501e4c2c29d4ad36ed7b428b8935f7a6672bf113f4d0ece4d21ba5388f3eafc081e2abeee0c6bece45c5ecfb36abc3380821692ba9e0a35af4e29354a8de6a9e1cfdbdefe769b5a4ac4d037618bb2af46e0625822ea4bcda1a0164a937c5cf55b7ce426f37cfaf5c4dea3b1eabc664329e739d548c489d3b012ea1738e59f1e85fe8473158c2be6b964fc6684a2e51983bb6b7253a821d40dbd84d68cebbd78ce3657907fe9b39a1237a5d1504273481df3fe4442e9305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-37-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b30147dcfaf40ecb549480285548ad628a12b524236425a6dd3448d63a85b82a96d3a4555fefb6c930f58aaaa6f70ef39e79e7b7dedb796a6e9cf385feb579a1ee3f4a54474fbe589c4fa85cc200e5299097fb1fbed2305feaccf523eeef72cb35f8e47a30a85159b814d91a136232585885dad969d9492b2009490b6106c0fec76cf721cc7ec593ddbecdb1597a12c99e1fc592a3c725eb0ab6ef7e0a3931292660814987520d91ce3ddd77eb7a0e40941cebacdb25d5189753f2efc352310704cf2d16a59992819a211da009c491b27f63abe6eca7730d87452817ec510010849997369ad9281244f705a52252e94de44508495e7e36f2da02fdd993b093548b272934739d8a00b6d0d3888f8b640da4db0986b0f1c31fed0f1fc9b45301f87dec28f96935b773eee4c16b3d5dc5f6af7b76ee06a1cc4195212da48bb567fbef851c654d1b5d0c1b9b216ca6ccd90c8eec7e9bd739247092922cc31b48745b671097a8e318c93d8868933b0e2c44071ecc4b60506b101872632d731027505e5ace2839ce4b1ed24e6da194403c78a23d3e83bd1b067a3085c5a96613906bc742c7dcfde1d7b8114018ea6981584e1fdb0f549e08e4337f26e22df75a7eef4d4fa5f8acfd0f78127c061b0f22782551f5302ca8c4fab469b436a742fcfa5ded847133c6ba0a09808536a093c3f7483f124f4ee6a36c446ce500ae076f92277320119432736a0e26839a273b296e7a8fbe379bd5fb55fdf0f202610bf8f3e4fed08a05c17d5cbd9ba34eb84621d1ba3a88eb28aeacb30f0fc6f7a2db97b5fe60e64e53b3aaffbb05e88693d8a09b38656ebffaf3fad5a0d5ddcf0bd3dfdc7ca0d7e4aaecac94c801244510e4f553fb1e99258a53ff18009f8e139910cf1a21ceb332ec2e2d24176aaae36575e415c4dfe2068f57b43e7202888949f23068679409c3d29",
      "b216daa09c1f66513d2dd520770d4b65cd8ea249b8b807fefe1077ad5deb1fa474a4a017060000",
    ],
    [
      "ETag",
      "TZsWyhraNL2sgtA21542uA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "6e",
      "8230147de72b48f7aa894e44b3640f6cc38d449d53f6b41853e182cc42595b5c8cf1dfd7169cbc6c2199c95e68ef3de7f6e4def670304c136d932c4437265a27f147016c7f158378519b39f082082e979c661c504bb141e058b1d9fdd6dbed9c5ee0e6b66d8d46e2914cd7f1ed6dc9e2c106522c790719c9384a80845cc66f3a36abbcc6329c823a31a0a448b3950e5b6758ec730d2ffcb9377dac23290d35327d1d8f9dbbb18b2ae8d8fa5924c402aff4917f93d0ebd2a8c4d03b5dcf2102065900e7ae7346df21109e1e2fc7694ea0cd69c102e095882a2ce198d122c78cd2b64cb57b8376b73f1c0ead6ebf3bb0ae07273aa1011609cd54c5eb027deb0b2a3099d34f3562649777c0cab09cf8691428aa5d427d4212daa9e22444dfb963eb17a237f56dabc6ad764ba356d958554e2a4a08acfe495d5ec906cb17de4cbb7a261712c7292d32d1507a347e762ed8b87443d3a61f1cdfbd942c17d20b0d757d6fe22e7c6732fb515c7e976713dced05f019a3d2631cb4b3ba1d6bd81fd81d7472ea3d554e14caa88215a0d301967faca744c85c840907e3687c019b405bea1d050000",
    ],
    [
      "ETag",
      "rCkIvvA3cEp664FFtGlNbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ?",
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
      jobId: "grouparoo-job-38-1588841517427",
    },
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
      "02ffc554dd6fda30107fe7af88b2974d2b1f81044225d42148d748143a08eda669023bb9a46e93388d9d565dc5ff3e3b0910049bfab6b7e4ee7e1f77b6efada628ea23893df55c5131099e32485f3f3c50ac9ec90c7014c88c1f7ebfebb5bd61a88f30725f3e5ffebec2d9cb605054911ccd5094845067344b5d60e7cb4523486996a094d2ba20ac77ccba6698a6a96b86d6d3dbbd02cb20f427247e940cf79c27ecbcd9dcfa6804940621a084b0864ba35dbcf9dc6e26297d0097b3e6a16c5328b1e6bf852f42ea224e683c582e0a13198374051122a1b4b1477bf8cb217d83a0a81188ea67e202725d9ac55c5a2b685c1afb24c8d29c5c30bd89a008e79e77bf9580bab026d6c85146b3e5d4f9b84691a45b7f52105356ab14581672e5723ebb56d68950bf470cd85ab9bbb2e69688a4d42721ac88b75606ca85329c8e15655dfee57672290f1827716ec84138848a0d912d87689f38bf1d8524415c689765ab5eab8b34b3d5c73eeeb9bed931b0df028c4ddc335007b7dcbe0eba87015519b8d42ef028a6b1d9d1a0af7bd0422dcd00cf33f42ee8ed4ebbd3c15d5d0713f5b18e0dbfa7960c9b5d3f6e0a88c398b08432528e591dcdada163adeccbd5d4b2c6d678dffe4b4a8eaaefe6b62876e6cbe948a0aaa3f29198f8b868f670500713e062a6d5e6fe35c5a306929450612a3f7e7bea58f3e1c8b16f2b36c45d9c4080dcd7c593bc8d3e0a19ecd12845117048afa927cf52bd992d6cc79e4d87933d437ebd6eb6954c94fddc99ddf75465735e93c39b511c5a119536bbba5ac96dce4eb2dca2303b41f35c8655ed80a37682edbfba33fe62affcfa55ab90ab62af94b6d46f4b6bfe4362f39cccccc1871462772ff78e97268145fa1d6b53946f979844883db6d3675c84c5a377d95e3d7f35720590a8ecb52034dafd7e6b4b2880293faae8687bc9a34526b52082986f67512cb462909b034b59c54e0e93e5e20d4eede9d7dc7c6d53fb03eaf35d788d060000",
    ],
    [
      "ETag",
      "flXW72dAl4Cbacw+FzHbuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d16e8230147de72b48f73a92b169244b7c50c3a68b311bce972dc614b86015b8ac2d1a67f877db02ea4bdb73cebdbd3da767cbb6c99e153179b549c8d2bf0af8e92105f9a50f01882a93426d251602c8a3ae0649535d3d65fb6072d8b2b70ff0c291fff3cf97fe311d0e9b2a116d21a7aaeeac90c209832c160aff1a6cb7bcd10a9a83be71b3e166a0b9a1d5e4a934da6cf1edbffbc1bd94636ca4c56a3e1f8de73e69a5daec6bb5d6e6293b0c0348804311c1ed4125c71d4472669c0b9a971938022b1e816887e8c6464e395625e5888ea29c17cf71fb9ee7f5dcbe3be83d0fbaf20c232a1916ba63b524d7f91225cd023c6af7c46de2e10d6cc2e8a220c95d3ef70929e9d0345fa9ba3dadad0ead6fc3c62709e293a3f222c03878225d1413d456a54e42f20a0c1d51f55b53265bceaaad0bf632380818020000",
    ],
    [
      "ETag",
      "HikRCvhiFJe8bAEZzrSEwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb6e82300000d07fe9b3182660e8de2c50946b4047602f0d74e5e6406ea2edb27f9fd9f983f303724ad93c93e576653d78073cdfc12dddba371df188b6b212f6897372cc7a7f7868f1ae29f25ed5ad836e283279661ac62b34d97eed3c24c28f8eb7e7a19aa8535474492cffcdc3f539fdcc0a8c9de5c21d48a4c82f27c18671ce947e9db16f13f58a6c374ecb30898323d51e6889ac7b20dd6d9f2a95ae292b97aa74184fa2b4bfdcb045b828c75122e2b250284137f956852c9867f4a351d747e606872e364551810d60cfa199d84c9ad74cd120dc80ff2659f8c05e57c4f2894de0f70f1853ce5c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:33 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-39-1588841517427",
    },
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
      "02ff8d54ef739a4010fdee5fc1d0af5131a860669cc651d2d2516c1193493b1d72870bb90439e40e3b69c6ffbd77e00fa8994cbec1ee7b6fdfeeeddd6b4351d46792acd42b45c524dae490bd7c7aa258bd9019e02892193d9e7ed39c653a70379b6dffeff338f9797b1f0d87258a146c86d6690c4d46f32c0076b55cb4a28ce629ca286d0ac1a63e68767aa669763bbd8ed1bd344a2e83389c92e4592a3c729eb2ab76fbe0a315511ac58052c25a015d1fe3eded653bcde813049cb5eb65dba2126bbf5ff8734c03c4094d86cb4569226790f9b0462496364eec15beaecbb7085ab72281de92005010d03ce1d25a2913d02424519e15e242e9550445b8f07cfcad04d48535b5c69e12d0385f277e82d670a1ac10473e7f4941b971e733e58103e30f2ddbb999bbb39167cf1d7f31fe6acd46adf17cba9c390be5eeabe55a0a4738864242192ad7c59f237e0a6345d195d0214961cd93d98a2191dd8fd37ee3248f1252449863b087f986d6471d531be0101b4168ea3d1c6a80b1898d1ed2b1160cbad05d61405585c259c947094db06968e812affc5007cdefea7dece3ae09bed133bafd4b043d84b1ba67ef8ebd0419200e13c252cac87ed8ead8b5469ee5db37be6359136b726afd4f46ced077ae2dc09ebb74c682551d5388f2984fca46eb43aa752fcfa5dad87b133c6b20cd0815a68a25b01dcf724763cfbeadd8101b398508052f8b8ddcc910c50c4e6c9489a3e590cde84a9ea3ea8c66d57e8bfdfa7e003181f875f4796a4700e5ba14bd9cad4bbd8e27d6b1368af228cba8baf05cdbf9a25692bbb7656e519cbfa1b3dd87d5544ceb514c98d5b41aff7ffd6e546aa8e286efeda93f96967b2fb9454e665c082183243855fdc0a64b6299fec00326e087e74432c48b72accfb8088b4b17b053f56273e51524e5e40f823dbdaf69074141ccf839c2d0f503e2ec4991b5600d093fcca27c5aca41ee6a96f28a9d8226e1e21e38fb43dc35768d7ff878f59b17060000",
    ],
    [
      "ETag",
      "3lLJ0NUp9Rqqv6zkCnZVYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af",
      "20f51512f946131e8622920c84315e348494ed0e86dd3adb4e2584ff6edb0dd80b668924beacbdf79cdb937bdbb3bd512aa1f720f2d07d09ad82f547026c77b30631551b1b784204974b4c230ea8acd820f05ab1f1d6ae0fec560d56afbe35c21b668ebec9b4db4d59dcdd4088256f2f2319fb01108fcbf84dc7a52cafb10887a04e742949c268a9c3f21916bb58c333c71e8e077924a49e46c673cb327b561f65d0a17c59c4c3022ff5917f93d0ebc2c8c4d096ae6cf08141e4c2b9eb98d12db862a8c7cb711813a8709a30177826a20a5378cd681263466945a62af5bb4ab5d9e9741ad566b5dda8b58f74425d2c021aa98af90c9df4051598d8f44b8d18b5d23b6069984efc380ae4e72e213f21097daae2c043a7dca1fc0b7138765a8d1c37db2d8c5c65615539293f20b0fc277579251b2c5f7831edec995c491c8734894441e927ebc5bc62e3d20d459b7e349dfeb564b9905e28a8eb0c47fd99638e2617c5e5777136416f27804f18951ee3a09d55bd6d749aedd62d3a3af5812a270a6554c112d06917cb3fd6732064cec7848371307e000f16aa361d050000",
    ],
    [
      "ETag",
      "ajR3GR62ebZfLMahrAMxlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-40-1588841517427",
    },
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
      "ad",
      "54",
      "5d",
      "6f",
      "da",
      "40",
      "10",
      "7c",
      "e7",
      "5758ee4b2b0530c4e623124a1138ad236252639256550567b33697d83ec7774e8a22fe7bef6c838da05154f50599dd99d9d9bdbb7dad4992fc88a3957c21c90ef69f5248361f1e88239f890c30e48b0c7a84ef46e7eea6a7acafe75dfcfbfe7ab3d65e06831c85333645611c409d923471815ecc670d3f21698c1242ea5cb0ae2af596d6ebf5d496d6eaaaed6ecea51078131c3d0a85356331bd6836773e1a3e217e0028c6b4e192701f6f3eb79b71421ec065b47958b6c92bd1e6db852f03e22286493498cf72132985640121c281b051b257cee743f9064661c3e7e867ec02725d92464c58cb655c1279d84f934c9c2bbdf2200f679ef77f2b0179a64ff4912d8da673d3feb844a1905b7e921095168b04681a30e9ca9ade48cb98575f230a7429dd7fd52d9d4712e2e1001678b59406d2a53434c75289cb6299a9ace00a28c35166cb464e0015333c5b8cd238718a7b09218218572e608baed241ad9ed2773ca7eb7abd73cdf114709c9ed3d5d0b9a3b87d15d49503a8aac044ed9c8f22120120e53cfb6977562aa7297d70948ea3a95abbd777faedbeda715d0de44261bbefc74d003118631a138a8b61cb234b1fdafac2b85a98ba3ed6c765fb2f093e42df5b0607dbd6dc1c715675541ee2731fe7cd1e0eea60028ccfb4dadc5b533c6a204e30e1a6b24b6098b66e0d47b67157b1c16fe4047ce46e664fe24e7a28a050b25182426090dc9095384bf9763a336c636a0e27a54276c96e7748ca613ff766cb9eaa6af6263ebc19f9a1e55161b3a3ca95dcf6eca4ca1d0ad21332cf45586e1d68d44ea8fd8bbb996d19e697ff606f18f383fb8bc5e2eb57ada22ff30d535893bfcd75eb87e066",
      "3991b1c0830422b7acf88ed7268879fa1d0b94c377eb4c30f846dbd7a78c87f9c37769593d7b39620de0303f8d425053d5beb213e4c4841d233a5d7587385a69a2168410b1dd2cf2d5960f727b6029add8c96802cedfa1591ce0b6b6adfd01724f00f397060000",
    ],
    [
      "ETag",
      "akeXI6VM80hJU7ixWJyh5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6b",
      "c230147defaf28d9eb0ad60f2c031f74883a8acc6ec2d81089f5dad5a5bd5d72bbe1a4ff7d49daaa2f49ce39f7e6e69c9c1dd7655f69be670f2edba5c97709f2749700adcc2102550a527a2b3057c0ee4d35104f4c758fc4603efc1baf67fe5bf0347f0f85bfea8d47a3ba4ac59f90715d77d648e3430a62af34feb0d86d78abe53c0373e3762bed407b43a3d1a9b0da62f93a9d4da35b29c3bd9596eb301c4fc2296ba4caee1bbd56f62947dc45700009790cd70715128f10d3c23a573c2b04780a4b19836a8698c65a4e24960597889ea6bc7ec7f3074110f4fd813fec77876db9c098538ab9e958bfb0cb7c42e222c25fe39ef9753cb28675186d14ec7093cf6d425afa31cd5d76a1aae6b4715ab4b90e9b9c08d4b344ed458175d0616d148f68ac9249826409968eb9fead794a0de754ce3fe58981ef18020000",
    ],
    [
      "ETag",
      "3tl5H7zAUG1X8JHZLl1Q3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfdd7643300000e077c975f5a028bb2be69f350debce6e72c862ac880523dbd9bbaf67df1b7c3fa024844e139ed98d0ee0018852b5f6641f33d316902eb7dee075ebb5c9310d565f43a7d0909dbe6b452f6d9a9dcc8a50b29171bfc3677e2e25b24279088ac224b40b6253da285ee118b1e5bda962975d6ba8e8ca87f736a4d2920f3ed1650155d939f0a7b0e91738aea59945ec4517bd2bad0641cd7c5cc328c85145d5d033ddcb2bfae48f97a4c83b543d1708d7acc275f1750d34cc4ebee678df6552cf301bb214ec00ddc696d309b7f7d941b7ac1df86fe2598cf47eb569c92907bf7fb85a933105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20",
      "fad8d8600c3189643516260d928d138c736955916559c8269825ece22a8afcefdd055fa08ea2bcc1cc9c33672e3bef1d49925f7016c9e7921ce2e4b544c5dbb76712ca27c283184884677c3fb480727af3fd977f6d5f43cb77ef1fcc6434aaa37085a66095a7a84b49594044cf978b5e5290320705215d4ed8d5fbddbe619aa6de37fa435d1bd6588ad2788ab317c1f0c4584ecf1565a7a3971092a408e498f62059ededca5a53f2823c23c8a8d24eabf04c54f93cf18f9440c030c946cb452da2a4a808d00ae054c838a0a3f0a24ddfc360d54b78f41a4304202465c684b49a06922cc6495954e49ce99d1bb9b9d2bcff6d18e4853db52d5f82242d57599081153a9122c040c0de72245d7af399f4c810658f3dc7bd9c7bb3b1efccdd60615dd9b371cf9a4f97337721dd5dd99e2d3110a6a8a29046d245f5e7f29f4a589534e23c38aba4f9c2db10c4bddb763a1f4c724f2148b8388ab661c1503d057d533d0be3700863736084b18ac2d00c870618842a3cd3911e850834192a65351e6424838348d5fa6a1468f04c0d74641a01880771a0815035b561a8c79a296fd19b7d2db04080a109a639a178db6cd9f2ecb16f07ce65e0daf6c49e1c4aff5be0a3e83bcfe1c1beb7742d8e6ab6290665ca2675a1ed26b5aa17736916f659078f0ac80b4cb8a86a091cd7b7bdb1e53bb70d197c23a72801f06df12a7632062945073428f868192a6624127394ddf1ac596fb55fd7bb20ca237eef751ecae181625daa5a8ed6a59dc7e7ebd86a453dcada2a2f7ccf717fca0de7e6639a5b90961ff0acb76639e7dd7ae21da62daeceff5f",
      "7f3a8d1c327fe15b79f2cdd2f61e04b6f2098f876254a00c1eb27e61d305b0767fe180f1f0dd3911087e51f6f929e366fee8203d64af36573c415c777e4768189a61ec0839b060c711baba4f797452442eb44219dbf5a23e2d7523372d4965434e0513e1fc1db8db216e3a9bce3fb6daf36a17060000",
    ],
    [
      "ETag",
      "AX7Ca/6Q+ZTPEPcCTNXY8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554d16ac230147def5748f638053b6a95810f75d329a8dbdaca184324b6b75ad73635493744fcf72569d5be380a13f6d2e4de736e0ef726a77bad56439f61e2a3fb1a5a86ab6d067477b302fe2a3736b02ce24c2c294918a0ba6403c72bc9a62e75cc377877071bd3b66fad0d76b743abdbcd59cc5b438c056f2f22110721443e13f1878a6b455e61098e419ee891288b93850aeb6798ef52053bae3d9a3e959198f80a99cec663ab37eea3023ad42f8bf898e3853af26f126a9d6b8518da90a50d0150483c38779d52b2018f8fd478198ed3081a8c64d4035688c8c21c5e5192a59812d210a986a137f456a7d331f496de36eeda477a443ccc4392c88a99834efa9c701cd9e45b8e1899f91dd03ccc277e1c050a4a97509e9080be6471e8a353ee50ff85389abaa651e216bbb956aaacac2a261584112cfe495d5cc91a8b175e4dbb78265712c731c9125e517a307eb6aed8b87043d5a61f2db77f2d59c685172aeabaa349df71adc9cb4571f19d9f4dd0db71602f94088f3150ced29b46a7d5369be8e8d407229dc8a55139cd40a53d2cfe58c3908b5c802306da41fb01f2945bac1d050000",
    ],
    [
      "ETag",
      "rTrS6WeYTFj6RR+AjaTqHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-42-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffad545d6fda30147de75744d9cb26958f402050097508d22d150d5d0854d33481e338a9db10a7b6d30a55fcf7d9492041b0aa9af696dc7beeb9e77ef8bed514457dc2b1af5e2aaa87c3e714d1eda747e2a917d2833808a5073ed88fcb707c0366cbeddcd06fba6d2d0a5f87c31c85b36806364984ea8ca4142276b99837424ad2045042ea82b0aeb7eb5ab7dfefeb5a5733f4b691c7321405531c3f498607ce1376d96cee75344242c2088104b306249b83bdf9d26e26943c22c859f3386d536462cdf7135f4504028e493c5ccc731129437485360047524619ed7b5f8fe91b186c1aa140bf60880084248db99496d3401207384c69462e98de84519833cd87df8a419d9b5373ec2ae3d9c2763fafc146d2adbf288029ab15452c8db872edcc6e957522b23f0086d85ab9ff6e3aa6b05012e008adb0bf5686ca9532b2274a89cb6c99a82ca18f18c77126cb055e842a6284b768a575668a070a4902b8602e602ba3d5035abf35f002cf8041bfd3f58216f2bcbe677441c76bc1818e74df43a0cac065ee3c1ec4a2570069d033bc2e087a5a1b0606f051bfa7753a033fd007ad41cbef798120530b86dda11e4811e068825942182e9aad8e1d73e49a2beb7a659be6c49c94e5bf527c82be772c01769d853d1651d5560540f47d92177bdca8a30e70d1d36a71ef75f1a48084622244654b60d9aee98cc6aeb5acc8101b39452180dbf9b3dcc900440c95d180820de288de125fce52bd9bcd2dd79ad9a369c9902dd9dd1ec904ecd7416c595395cddd26c79b910f2db74a993d5dadf87617675996204acfd0bc1466553be2a89d61fb177573d7b1ec6fff411e48c4e0fe22b1f8fa5dabf0abe2c214d2d41f0bd3f92963339ff438284014c5b0ccf881d7260373f7070ea880efcf998c1017ed909f7161160f1fb2327bf672e419c09b7c1a0561b7d7d6b53da108a4fc14a11bed3de2e4a4c95c688362beef457edaf246ee8e24a515395998848b77681703dcd576b53f140baddc97060000",
    ],
    [
      "ETag",
      "chNjVgCJaOVyS74J521lgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "5790ee7564c360344b7cc0c52809338afab285980a5786032e6b8b0b31fcf7b5059497b6e7e3f6f69ede0cd3243f69119337939cd2e4b702563f2520b6ea1000af32c1e55662c1813c2b37089a28f71cf972eff197cfdd47bebabaa749eeba9bed6cd6ba78f40d3995be9b44129f53c8622ef197c666c76bada039a81b8f47a61bea1b3a4dd4a5d6bcf57eb15c044329c7584beb83efbb737f413aa9d17b28d7463fe582a700cec0a088e0f1a092e10522e1e9c939cdcb0c2c8e158b80774d54612b270cab9232444b529633b2ecf1743a75ecb13d714693de9e6144458a85aa38ecc8bdbf4041b300ffd4f4c46ee3612d6cc3e8a320e7413ec384a47455c5afe44e35dd29347a143e9acd6b017cc350cec2216e2bfb28de518d2a54128255a0e988cadf5aa5a2e38cc6f807f159bb8718020000",
    ],
    [
      "ETag",
      "BosGTIs/ZSMmHvAb7mAAPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb642d0e0a52e90eaa4405a4505a829b4c1a028594ffcfd0e9ddebf4dde0fd004229eb7b3cd49c55e01908b2d5d7746dd77b53f8a91125c8fe9c532568ddc3797e0f5218dff877de8f57756987b32a57feb51a9b4440a29dd0b4b371c683ba98eace51c2b81cc901ce8ebb7c9c2e5211e4c4b7187123398dbea6910549f6a259785ab0b2f19121b959d9d23df44207c388bb975c85fab125a55d6e2894916f21e366789a48ccbb90661a3a322f7a56be6d63cf8a147b78ad91cc9fe6704a35956b47b002ecdee41deb71fe98293b5d5f81ff261e44c31e5793918e75e0f70f172507d805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-43-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6f9b30147dcfaf40ecb54948431a52295aa384ae5409d90869354d13b58da16e01536cba4555fefb6c930f58aaaa3ce17bef39f7dc0ffbada569fa33c942fd52d321895f4a5c6cbe3c51a89f490fe620969e5b6313d9e985f5d72dfd59ef16029bc54f93f1b88a220acd409a27b8cd685920cc2ed7ab4e5cd0320705a56d41d836fbeddec0b22cb337e80dcdf36185653889e6247b960c8f9ce7ecb2dbddebe8c494c6090639611d44d383bdfb7adecd0bfa841167dd66daaec8c4ba1f27fe9a500438a1d978bdaa44940c17014e0149a48c233a84574dfa0e01692716d1af046180102d332ea5553488661189cb42910ba637611466a5f970ac19f4953db7a7be866852a6599081149f6921e020e09b1c6bd7de72a13d70ccf843c771af97de62e23b4b37584d6fecc5a4335dced70b77a5dddfd89ead710013ac28b4b176a54eae3828612a69287848a6a4f9d25b1324bcbb763aef4cf24021498438867761c1d0b8003dcb18c1080e5164f50730323084161c0e401f1a686462338418d41994b20a0f329a5996980808ad60d08f50609a231840f105d6c5c80cc39e1159e042dfa1b7875a508101c733c272cac8aed9fad4b327be1d38d7816bdb337b762cfd4f414ea2ef3d4704fbdeda9d0a54bd4d1128133eab0a6d36a951bd9c4bbdb08f3a7852405e102a44a925705cdff62653dfb9abc9101b39c731409bd58bdcc908240c1fd1a010a3e5b858d050ce5177278b7abd6abfbeef839888f875d0792c4704ca7551b59cac4b338f2fd6b1d18a6a9495555ff99ee37ed36bceedfb34772029dfe179dd99f55c74eb51749835b85afffffd6ed572e8e286efe4e93fd6b6f75362954f7a3c1ce10267e898f5139b2e8195fb130f9808df3f2712215e94437ec685595c3ac48ed9d5e6ca2b48aaceef090743c334f6840258f0d3889e69ee234e9e14990ba738e3fb5e544f4bd5c86d43525993a360325cdc037737c46d6bdbfa07cc598ce017060000",
    ],
    [
      "ETag",
      "J0yfEm68xNuTD1JbaEsgjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554d14ec230147ddf5790fa2824a083a1090fa0282403710c63620829dbdd186eeb6c3b0921fcbb6d37602f982592f8b2f6de736e4fee6dcf765aa5823e83d845f715b40cfcaf14e8f6ca07fe2a3716b034e44c2c098919a0aa6403c7be645be694d6af376f83c17bd35839f6dd86191bbfd3c958cc594184056f2722117b01842e13f1878a2b795e61318e409ee890308de2850aab27986f13054f6d6b387e2e22117115329e9966b767f6510eedabe7455cccf1421df93709b5ceb55c0cadc9d2020f28c40e9cba4e285983c3876abc0c474908354652ea00cb45646106fb94a409a684d444aaa6dfd61acd76bbad379a0d43bf310ef490389807249615b3293aea73c27168918d1c316a657740b3309bf86114c82b5c42714202fa96c5818b8eb97df517e2706cb7f40237dfcdb54265695531292f0861f14feae24a5658bcf072daf933b990388e481af392d24fe64bf7828d0b37946dfab16bf72f25cbb8f042495d7b38ea4fedee6872565c7ce72713f4b61cd88412e13106ca598dbade6e1aad3a3a38f58148277269544e535069078b3fd620e022e7e19081b6d77e000b5859f61d050000",
    ],
    [
      "ETag",
      "RLSr0+wVHHX57hcT9ws7wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ?",
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
      jobId: "grouparoo-job-44-1588841517427",
    },
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
      "a5",
      "54",
      "61",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "9e",
      "5f81d8974d6a12081048a5a88b12da2125a423a4d5344d890143dd124c6d93a9aaf2df670349889a55d5f60deedebdf7ee6cdf6b4b92e4279445f2a5240728792e2079f9f48803f94264200389c84c670fdb6434f6b6f7d737fde97c3698124b1b0d87150a95d5146cf214b6292e4808e9e572d149082e7240306e73c2b6aeb755c3b22c5d355453ef99552d85693c45d9936078602ca797ddeede4727c1384921c811ed8478738877b7bd6e4ef0230c19ed9eca76b912edbe2f7c95e2103084b3e17251992828242bb8012815368ed551f0f594be83c0a69370f416851084212e3226ac553421ce629414a424e74caf3cc8c3a5e7c36f23202feca93df6a5f17ce9fa9fd76023e8d65f2440a5d58a405aa44cbaf6e633699d73f50740215d4bf7df6ccfe611826394c2158ad6d250ba9246ee4492d61160b0fc2f0d956211a40c65a5251f04296c18e1d97a8cce99133c500812c0b87a0d5b994a1fa8963208e2c00c634b33825881416005a601b44009073ad4a30082260313da553dc8700662dd8a0343518c208230b24c2330555dd3fa9aa5f5784a819139e899aa5c33ec0efd8404f2262788e698a27ad0f2d8b347bebd72ae57ae6d4fecc9b1fddf04bd41df7b0e07fbded21df3aae6a862c0673ea99a3d1dd4c904189f69b3b9f7a6f8a6819c20cc4d9517c0717ddb1b8d7de7ae6183dfc6294c40f8b27816f731062985c76a40c00632486638126729dfce178eefccddd1f4c8505eb0db3d9272d8cf83d9634f4d36ff253fbd19d5a1555161b3afcb8ddceee22ccb1d488b3334db3a2cab271cad336cffe26e220ef1ffcdf5949ed2567a7c57fcc565fdf5abd51091f982a9dd",
      "c9df97b6f743d4963991f1600c09ccc2a3ec071e9c28acd21fd89f1cbedf66a2822fb4833e653cccdf7e488feae5e3119b006daa03a9090dd31c687b425e48d85bc4401dec116f369ad0821b98b1fd2caacd560d727762a968d829cb049c3f45d7716f4af3ad5deb0fc445c77796060000",
    ],
    [
      "ETag",
      "LMhvgACRvWFG6LOM9Lr83A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff4d515d6f8230147de75790ee7524b260c4253ee8c63617623636f6b21853f18a2070595b668ce1bfdb0f505fda9e73eeeded393d59b64df659b5218f365967e95f03ec789782f85487087853082eb71a2b0ee45e5583a0a9aaf6f6f960377e5907fb31a6d17b3c7dfe19e587c9c454f16407259575278924de66506cb8c4bf1adb1dafb58a96a06e5cad981ea86fe83471acb5365f7c07af41742b95b8d1d2220ec3e92c0c4827b57a5fcab5d54fc9711dc1161854095c1f5433cc211173ed9cd3b22ec0e1d8b004783744351a3965d8d494213a92723ccf7187beef7beed01d790fa3bebcc0848a0c2bd5117f91cb7c818216111e947be29a789881268c3e0ab2bdc9e7362129fd9be60bd576a7a5d5a3e575d8ec28807f30945e38680703d247f184caaa504908d680a6132a7feb2d131d67b5d6196498893918020000",
    ],
    [
      "ETag",
      "4kj0h9FbEk9ogRJUADV7jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc97282300000d07fc9d93aac427a632945963128a270611002449668a02838fdf73a7d7ff05e20cb733c0ce9481bdc834f3067025ce76b97aafa1ce0b2428f1072fbea2479e86aaa1a5a92f6217b668121d30adbf8384cc9b7ced78ac7bbb14ac4ee149964a3b8d63d6f03c37a52766ed42f76e02957ddac5d43b7218b7d27ec89d8985bc79f667bd8bbb0659b69d768b29c4c8b3f77472c44161103f1e2dcebd21f6294153f44570c31803a27c16e5ce8285fecf3a8fb469a1f4bd7b151e4163d9efa5aa00c855741022b809f37c2f09092f74c94215c81ff663ace37fcbeea38639881df3f8c1567dd05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:38 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-45-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d545d6f9b30147dcfaf40ecb509a48185548ad62c212b53423a20ada669a2b663a85b82293699b22aff7d36e40396aaea1bdc7bceb9e75e5ffbb5a528ea334957ea95a24212bf1438df7e7aa250bd9019cc412c336881adedd738d968b77fe1f47b6ede4df4fb7838ac50a46433b0ce12dc66b4c81166574bbf13e7b4c8404e695b08b60db3dd352dcb32ba66b76f5cf62b2ec3493423e9b35478e43c63579a76f0d189298d130c32c23a88ae8f716d73a965397dc28833ad5956139598f67ee12f094580139a0e977e65a260380ff11a9044da38b157f0ba29df2160dd89057a43100608d122e5d25a2583681a91b8c84b71a1f42a82225c7a3efed602aa6fcfec71a0209a14eb344cc11a5f282bc041c8b71956a6de62ae3c70ccf843c771a70b6f3e0a9c851bfae31b7b3eea8c17b3e5dcf595fb1bdbb3150e60824b0965a85c977faef8298d9545574287a4a5b540666b8644763f4ee78d933c4a4811618ee13d2ceceb9f41d7d20730827d14593d13463a86d0827d13f4a08e060636561083ba42e9ace28394a6bad985b0b78ac2680061687491190e008061cfd085e800226380d43d7b77ec05e518703c212ca38cec87ad8e3d7b14d8a1330d5ddb9ed89353eb7f727286bef71c010ebca53b16acfa982250247c5235da1c52a37b792ef5c6de9be05903594ea830552e81e306b6371a07ce5dcd86d8c8198e01dafa2f72272390307c62835c1c2dc7f99caee439aaee685eefb7dcafdb038809c4afa3cf533b0228d7a5ece56c5d9a7502b18e8d5154475945553ff01cf79b5a4beede96b90349f186ce661f563331ad473161d6d06afdfff5bb55aba18a1bbeb7a7fe58dade4fc92d7332e3e108e73845a7aa1fd87449acd21f78c004fcf09c488678518ef519176171e9103b552f37575e41524dfe20685a3dc33a080a62cecf1186a51f10674f8aac85d738e58759544f4b35c85dc35251b353d2245cdc03777f88bbd6aef50fc706063f17060000",
    ],
    [
      "ETag",
      "cOe8yBglv/PzbFJr5VD0Wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "544d6be33010bdfb5704ed3581a6eb7c50e821eda66dc0cde6c32d0b4b08aa3d76dcca1eaf344e0925ffbd92ec34be743134d08ba599f7468f19e9f9cd69b5d84b9285eca2c59e92f85f0172f723069a9bcd02542148e925c74c016b1b36108f0dfbe7ec718b7fcebd6d2c681e7277734df3c7d7cbcb92a5820da45cf3de74a4e32801112a1dffb571abca5b2ce32998130314459aad6dd83ec2b4cb2dbcf41793e96d1d4931b4c8f4c1f34657de9855d0befdb948c889afed915f93b0ebcaa9c4d8333e2d2002095900c7ae7389cf10d0c48e57f13417d05158c8005425620a4b389658e45c227674aae3f63addde703874bbbdeec03d1f1ce802034e0966a6e261c93ef409898b05be9a11b37e7907b20ccb891f46c1a2da25d427a4a1ad294e42f691dbb7ff439c4cfdbe5be356bb9553ab6cacaa27152502d6dfa4aeaf64c3f50b6fa65d3d931389f3148b8c1a4adf78bf47276c5cbba169d3bf46fef854b28ab4171aeafa93fbf1d21fddcf3e15d7dfd5d104573b023593a83da6c03aab7be60e7b83fe193b38f51a8d13c918956401361d70fdc7ba4b48e7222e14387be71d6341aa201d050000",
    ],
    [
      "ETag",
      "3PVvoX2LvgltQda4hCtQVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ?",
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
      jobId: "grouparoo-job-46-1588841517427",
    },
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
      "ad",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "147dcfaf40ec65539b0428041229eaa2846e4809e90869b74e5362c050b7802936d9ba2aff7d36e4832859554d7b837bcf3de7dc6bfbbe3404417c446920f604d143d15301f3e7770fd813cf79065210f18c6d9ffd3afb3dbf9bcce8ea6bacdd4ee21b471bf4fb150a95d50424590c9b0417b90f496f3e6b45392e329063dc64844db5d39435c3305459937555d1ab5a02e3708cd247ce704f69467aedf6d6472bc2388a21c81069f938d9c5db2ba59de5f801fa94b40f65db4c89b45f17be8cb10f28c2697f3eab4c1404e60b980014731bfbeac0fb7848df422069450cbd423e04be8f8b94726b158d8fd31045455e9233a6171664e1d2f3eeb7161067e6d81cbac2703ab7ddf74b9070bae507011061b1c82129622a5c39d389b0cc98fa3d20902c85dbcfa663b2488e4314c3050a96425fb81406f64810968432bb65a07454aa05905094969e5ce0c5b0e684653773b44e1ce18e829300cae437b0852e75806c485d2ff4743f342e342f94a0e7199eae810b4ff2bb2a54030f823a03e5da553d4871aae88aa102490b946e4709ba9dd03354d8958cd0ebc22084ba0e0c4ff50110370ceb5d3f7e0e01852344324cd066d2e2d03107aeb9b0ae16b6698eccd1befd9f393a42df3a1603bbcedc1eb2aafaa842c0863eaa9a3d1cd4c104289b69bdb9d7a678d4409623cc4c9537c0b25dd3190c5deba666835dc7318c80ff3c7be21732043181fb6a90830452984f70c0cf52bc9ece2cd79ada83f19ea1bc61d75b2461b0ef3bb3fb9eea6cee73767833aa43aba2dc6647156bb9f5f949961b10172768569bb0281f70344eb0fd8b3bd79a98337730b9fe0f0e1549919a92c236862b2b3df9a227ab2d4992eefe627cf3f5a3519314d9d2d91816bfcc4de71baf2d733ce3c010e630",
      "f5f726def0067961957ec34e65f0ed86e3156cc9edf4d97ea088ad039fecd5cbf7c497034aaa33da106a5d4591b784ac30a7c7880bcdd8228eb61cd782094ce97616d5b6ab06b93eb054d4ec94651cce5ea76dd99f4af38d75e30f280b76a8aa060000",
    ],
    [
      "ETag",
      "NN+x+zUZMStvXl5WMlVR5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "515d6f8230147de75790ee7564c3e04796f83016a226c46d38f7b21053e1c270c0656d9118c37fb72da0beb43de7dcdbdb737a364c93fc65654c5e4cb2cfd2ff1ad8e92105f1a90e01f03a175c6e15961cc8a3aa06415355cdc1f3276e331d7d27cbf7053e1d9b0ddae97cde55f1e8170a2aebce12499c6490c75ce21f8dcd9ed75a490b5037ee764c0fd437f49a38555a5badbfbc8517dc4b05c65a5a6f7dffd5f53dd24badde43b9b6fa2907dc079000833282db832a860788c44a3be7b4a872b038d62c02de0f518d9d9c32ac2bca102d4959cec4b2c7b3d9ccb1c7f6d4194d87f21c232a322c55c77643aef3050a9a07d828f7c4eee2611decc218a220c95d3ef70949e9d8355fa9b63f85c680c2db30f724807f30945e386807cf6488e20d9555a19210ac064d4754fed632133d67b4c605419bcaab18020000",
    ],
    [
      "ETag",
      "seEL6Bw72VfHOGo/vwSo1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d0bb64ad8e5a10e84e90620d60b0fc370c8444400a982092e9f4ee75fa6ef07e408e31e13c1bfb1be9c03b10f9565be115ec555d78f8b0cf230c4f821aa379112cd87788da8aef9013e38d2b45417667f3b96be95764f80dddb5a5ad6ca6cc1da96573837a39e2b7f4203f7c03ad37c5850a4955623bac5cf66d5dfbfb569be7ca5afaf2a3f03e490725642821545ac2f5c9395268969514c34297e7731d4f1fdb36a99ec97a59ed52248ca2b9a2328a78d4b204d13e1c5406e15132d5594e0b07076001c83cd48cf0ac7ecdde644d5b80ff66368a81bcae3ac91961e0f70f3e19384105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-47-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6ea330107dcf5720f6b509e45648a5681b25741729215b425aad562b6a1b43dd124cb169d5adf2ef6b9b5ca0a9aabec1cc3967ce8cc77e6b699afe48b248bfd0744892a71217afdf1e28d4cf64067390c8cc7d8fb3075cf66f2ce39af89ee1b8f09ff1321e5728a2d80c6cf214b7192d0b84d9c57ad5490a5ae6a0a0b42d04db03abdd1ddab63de80ebbd6a067555c86d3784eb2475585f39c5d18c6de4727a1344931c809eb20ba39c48de79e9117f40123ce8c6659435462c6e785bfa714014e68365eaf2a1325c345883780a4d2c6911dc1cba67c87804d2711e86782304088961997d62a1944b3982465a1c485d29b088ab0f27cf8ad05f4953377a68186685a6eb230031b7ca645808390bfe658bbf2970bed8e63c6ef3aae77b5f41793c05d7ae16afad3594c3ad3e57cbdf056daed4fc777340e608a958436d62ed59f277e94315534123a2453d60299ad1912d9dd38dd0f4ef220214584398677b0d032cf41d736473086168aedfe10c62686d086d610f4a18946033c8820067505e5ace2838c6600436022648756dc83e1004651685bfd5188226b688fe2b86b9d77f51d7b7be8051518703c232ca78cec86ad4f7d671238a17b157a8e337366c7d65f0a7282bef55d010efcb53715acfa986250a67c5635da1c52a37b792ef5c63e9be049037941a830a596c0f502c79f4c03f7a666436ce41c2700bdae9ee44ec62065f8c80685385a8e8b058de439eade6451ef57edd7af3d8809c49f83cf633b0228d745f572b22ecd3a8158c7c628aaa3aca2fa2af05def875e4b6e3f96b90169f981cef32eace7625af762c2aca1d57afff5b755aba18b1bbeb3a75faf1dffb7e4aa9cccf838c605ced0b1ea17365d12abf4171e3001df3f2792215e94437dc645585c3ac48ed5d5e6ca2b48aac9ef058723db36f7828258f0f78873d334cff788932745d6c21b9cf1fd2caaa7a51ae4b661a9acd95134",
      "0917f7c0db1de2b6b56dfd071afdb7c617060000",
    ],
    [
      "ETag",
      "h2tsjeu3V7/QiRN/EIbz/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f8230147de75798ee55135950c8121f7073d3c4af29f8b0c5980e2e8a038a6d9933c6ffbeb6e0e4650bc94cf6427bef39b727f7b687a356aba1f730f1d15d0dbd85eb5d06f470b306fe2c37336059c499585292304075c9068ed792fde94ebc9774d1eeba8be93e0bacfea36beeec4e2767316f033116bca388441c8410f94cc4af2aae15798525380679a247a22c4e562aac5f607e48153c776683f153198989af90b13b1cdadd610f15d0a9feb3888f395ea923ff26a1d6a55688a12d799b410014120f2e5da7946cc1e303355e86e33482062319f5801522b23087d7946429a6843444aa61980dbd655996a1b774d3b835cff488789887249115ee1c7deb73c27134237b3962d4ceef80e6613ef1f3285050ba84f28404f4218b431f7de74ef55f8883b1d3364adc62b7d44a959555c5a4823082d53fa98b2bd960f1c2ab6917cfe44ae2382659c22b4a3f0e27f6151b176ea8daf483edf4ae25cbb8f042455d6730eacd1d7b34fd515c7c971713740f1cd89412e13106ca597ad3b05a66bb89ce4ebd27d2895c1a95d30c54dac3e28fd50fb9c8053862a09db42f97d24bbf1d050000",
    ],
    [
      "ETag",
      "xUOcZpV6BUVPwuf8HFU7qA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ?",
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
      jobId: "grouparoo-job-48-1588841517427",
    },
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
      "0002ffad546d6f9b3010fe9e5f81d8974d6a5e0b81548aba28a12b534a3a425a6dd3941863a85bc0d436adba2aff7d3690842859554dfb0677f7bcdcd9bed786a2a80f380dd43345f571f49823faf2e19ef8ea89cc200e2299b9fc7af718ddfc2693b83febb8f0c7b3ff8c92d1705856e102cd4092c5a8c9484e2162678b792ba224cf0025a429089b9ad9eceaa6696a5dbd6b683da3c4321487539c3e48863bce3376d66e6f7cb42242a218810cb31624c936de7eeab5334aee11e4acbd2fdb164aacfdb6f0794c20e098a4c3c5bc3491334497280138963676e8c0ffbc4fdfc2206945a2fa094304202479caa5b592069234c4514e0b72c1f42a82225c78defed602eadc9a5a634f19cf168ef771051249b7faa400a62c9714b13ce6ca853bbb52569950bf030cb195727b69b996885012e2182d71b05286cab93272268ab2a19091c252211720c6715a98f2801fa39a1591ad06691f39c32d8524015ce857654ba3d3075db333f043df80a179aafb6107f9bee91b3a38f53b70a0212df011a83370a95de2414a5223d07b662f0cc24003bd8136088106b54107f47484a009fda0af878341d0552b86f5b61f4811e06882594618ae46ad8e5d6be4594bfb62e958d6c49aecda7fa6f8a0fad6b545b1e72e9cb140d547150231f549d9ecfea0f626c0c54cebcdbd35c58306328a8930555c01dbf12c7734f6ec9b9a0d711fa72802f065fe286f64086286766840418238a257249067a95ecfe6b667cf9cd174c7505cb1eb4d2513653fb766773dd5d9bc976cff6694875646a5cdbea6d672eb93a32c3720ce8fd03c5561b5bbc7d138c2f62fee2ea6b3d17ff2d7d2b5bf58acbe7e356af4aad82f9535f5dbc272bf4b6c919319178588a214ee04dff1da24b04cbf637d8af2cd329308b1cfb6fa8c8bb078f890edd48b9723d7004eca6e2bc27ec738d537840248f9618569989b8a838526b5508252be9945b9d8ca41aef72ce5353b054c968b77e8d8ce97c27c63ddf803ac36df9595060000",
    ],
    [
      "ETag",
      "HJhqgVzoDl6O0RcZwbwemA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d51d16ac230147def5794ec712baca258063eacae4c41647613644324d6dbaedaf676c9eda648ff7d49daaa2f49ce39f7e6e69c9c2ddb6687b4d8b1279b6dd3e4a70271ba4b8016fa1082ac32926a2bb190c01e7435104f74f582fc83bf3a7a93f1b158ddef07d27bf99c27a3515325a36fc8b9aa3b2ba4709c42b6930a7f196cb7bcd10a9e83be71b31166a0b9a1d5e8541a6d3aff085e83f056ca7167a4f972367bf667016ba5daec6bb5d6e6297bdc861083802282eb834a817b88686a9c4b9e971938122b11816c87e8c6464e04562517888ea29cbee7b803cff3faeec01df67bc3ae3cc388538a85ee58beb3cb7c42e259887fda3d739b7844039b30ba28587c93cf6d424afad5cd3d76a1eaf6b4b63ab4be0ef34f04f24da0f222c13878645d1463d456492741a20243475cfdd624a596b36aeb1f0b4c5c4b18020000",
    ],
    [
      "ETag",
      "QtBkBXx8HCxnX+j5s8DZNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7fe9b3982003ecdee6141930a504c2e5a581526e2a50caad2efbf7999d3f383f202584728ec7ee465bf00e44ba835bb2b5bbfd41a0229013274248ac29ff0ecef399991d2caa93d160a23eef3cec2b2e925d75e2493b4f6b964bab76d455b56945096b2dba44be5bbac86c5a2ec78a9ec8cc2fa8ff08acec4b5b9641ee42e1e5955931960b92e0b0f3e26b364ef672959c14a99a62d17dc3cc23546fbcbd1b780c0a1a3a1f319ab8d7d7f99b1291c7e5d3555c17c222d75952ceb6317ba5a4c716021b40d7be1e28c7f56ba6a8106ec07f138fa2a7afeb81a6031dc0ef1f51501cef05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-49-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "a3",
      "30",
      "10",
      "7dcf5720f6b5b9904b814ad1364ac81629212d9076abd58a1ac750b704536c5a5555fe7d6d1312d85455df60e69c3367c6637fb414457dc6e946bd50d410c72f05cadf7f3c91503d1319c4402c32cff786e95dcf29beb730b8fdad8760b5266fe37189c2924dc1364b509b922287885eacbd4e9c93220339216d2ed81e9a6d6d6418c6501b69fab0af975c8a926881d367a1f0c858462fbaddca472726244e10c830ed40b23dc4bbaffd6e9693270419ed36cb767925dafdbaf0cf8440c03049c76baf3451509407680b70226c1cd99bf0b229dfc160db8939fa154304202445ca84b552069234c271914b71aef4c1833c2c3d1f7e6b01d5b316d6d45720498a6d1aa4608bce940d602060ef1952e6ee6aa93c3044d943c776e62b7739f1ed951378d32b6b39e94c578bf5d2f194bb2bcbb51406c204490965ac5cca3f87ff4863b2e886ebe0545af345b6668867f7e3b43f39c9838410e1e628dac302bd770e34a3678651a8c3c8188cc2a887c2d008f51118843d680ed1701322505790ce4a3e48f9bc803e32a0a605b0df1f04c3730d06a6ae0d02d0db8c4c73804c3034d43d7b77e805e6083034c3342314ef87ad4e5d6be25b813d0f1ccb9a59b363eb6f393e41dfb93607fbeeda9972567d4c112812362b1b6d0ea9d1bd38977a635f4df0a4812cc7849b924b603bbee54ea6be7d5bb3c13772816200dfbd17b1931148283ab241ce8f96a17c4936e21c5567b2acf72bf7ebba02518ef873f0796c8703c5bac85e4ed6a559c7e7ebd8184579946554f57cd7767ea9b5e4ee73995b90149fe8bceec36ac6a7f5c8274c1b5aadffbffeb66a35547ec3f7f6d49bb5e5de0baecc898c8b2294a3141eab7e63d305b14c7fe301e3f0ea39110cfea21cea53c6c3fcd2417a",
      "ac2e37575c415c4ebe123cef0f8c5e25c889393b458c066685387952442db44529ab66513e2de520770d4b45cd8ea40938bf07cefe1077ad5deb1f5d49dcd317060000",
    ],
    [
      "ETag",
      "kY89SPFsiYEiaVX7baOUow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc554516fda30107ecfaf40dee340225520b4120f69c73634601d84bd540899e402e99c5c663b740cf1df6b3b01f24215a9487d897df77de74f77f697bdd568903f711a92bb0659c5ebbf39f0dda735c85f7a3305913329d492612a8034351b245d6bf698218d379fb73f6e7fbffc77e1df6cebae6cafdf2f5822d84042156faf22154731b050a8f8c9c48d326fb09426a04f0c90e549ba3461f30ccb5d66e0993f1d4ebe55910443834ce6a391773f1a90123a342f8b8454d2a539f27d12665d58a51879c6d51422e0900670ee3ae3f80c811c9af10a9a640c5a02731e802845746101af39e619e5882d956a39b72dbbd3ebf51cbb63bbce8d7ba4330ca88c31d515f31939e94b94944df1458f98748b3be045584cfc380a12552ea13a21056d75711c9253eed07c83389cf85da7c22d770bab52595b554d2a8a192c3f485d5dc986aa175e4fbb7c265712a709e6a9ac29fd75f4d3bb62e3ca0d759bfee2f9836bc90aa9bc5053d71f8e0733df1b3f5e1457dfc5d904f73b09e291a3f29800e32cbbedf43a6eb74d8e4e7d40ed44a98d2a790e261d50f5c7fa1e4b958b2813601dac578c0e0faa1d050000",
    ],
    [
      "ETag",
      "Mloaih+vK9Vwz7exSv7b1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` != ?",
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
      jobId: "grouparoo-job-50-1588841517427",
    },
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
      "c5",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "60",
      "ec659396ef10d24a55972564434a494748ab6e9a12632ecc2d606a9b4e55d5ff3e1bf2014a57f56d6f70efb9e79c7b6ddfa786a6e977240df4534df749749f037b7c7f4b7dfd93ca804091cadcde39536e5ecf7e245e6f66dfe4bd59f465159d9d95285254739464313439cd19067eba5ab62246f30c314a9b92b069749a5d63341a0dba46d71cf4ccb296431cce497aa7187e0b91f1d3767be7a315511ac58032c25b9826fb78fba1d7ce18bd052c78bb2edb964abcfdbaf0794c311284a667ab656922e7c0d69020122b1b87eac0ff5ca76f1194b422897e201810c6344f85b256d2609a8624ca59412e999e6450860bcffbdf4a405f5a736be26993c5caf13e6c50a2e8361f35c4b5f59a01cf63a1cddcc585b6c9a4fa6fc4816fb4eb6f966bc908a32189614d828d76a69d6b6367aa691bf5f74efe167e0aad00b82069e1c8437e0c151f32bb9da2fdc201ee29140912527c0b5b9b9d21ea8e3a277ee89b381cf50d3fec80ef8f7cd3407dbf834f0630087c405506a1b4cb7a94d2b4e38fc2a0df0b4dc0c834ba01eaf7babe894e8680a13f340dd337fa618007fa96e179df0f6680044c09cf2827db39eb13d71a7bd6da9ead1dcb9a5ad343fb7f1839425fbbb6047beeca99c8aaeaa84224473e2d9bad0faa360121675a6deeb5291e35903142a5a9e2fc6dc7b3dcf1c4b3af2a36e4659c4384f0e3f25e5dc710c51c0ed588a10404b00b1aa8b3d42f174bdbb317ce787e6028eed7e50ec925ece7deeca1a72a9bf798d56f4679686554d91cee8fa2d64d9de50ac5f90b340fdbb0dead71345e60fbafee8c7fd8db7efd6a54c875",
      "b958b6b6f4ef2bcbbd51b5454e655c0881418a0f726f7869aab04cbf616f4af86e8ba90ab9c8f6fa5cc8b07cf4981fd48b57a3560049b6bd968443c3e8757684b2908963c470d8df218e3699d2820452b19b45b9d1ca413ed72ce5153b459982cb37e8d8ced7c27ce3b9f11776708fcc8e060000",
    ],
    [
      "ETag",
      "jkNDs7WFZmT2FIYu2FgBUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff4d51d16e8230147de72b48f73a125968344b7cd0c54d1363369c4f0b31b55c10042eb6658b31fcfbda02ea4bdb73cebdbd3da757c775c929ab62f2ea9243969e1b1097a714d4973984209b4249bdd5584920cfa61a144b4df589729a8f69b08c57f9f69ced8e65f14e67d3695725f9114aa6ebae1a699c6450c452e31f8bdd9eb75ac54a3037eef7c20eb437f49abad4565b6dbe171f8bf0512a31b6d266b75ecfe6eb05e9a5d6ee915e5bfb941c0f212420a0e2707f502d3007ae56d6b964655d8027b1111c643fc43476722ab0a99940f434e5d191e7d3c96412f8d41f072fe3a1bc40ce548695e9d86dc96dbe42c58a10ff8c7be277f1880e76610c5190e4219fc784b4f46b9a29b9516d7f8a9c0145f761f38b02f929507b91601d8cc810c51b1aabca24a1440396e64cffd632533de7b4ce3fdca4e1cc18020000",
    ],
    [
      "ETag",
      "k5c5j754HdIjSqiUhmlF5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7282300000d07fc9d97180c8d69bd05416d99ca4162e4c8460898c84a585d8e9bfd7e9fb83f7036855b1692ae7fec6eee00548aad9db6a1bf6962333e6957ebf3b15a221c7d23b5b1f4a6ae58d6b547e12162453433d22d20e6f582d4ce14f2616469b9af19af4083e664f2373d198b48f735ca8c359d62ad7ed3c192fe9408f2d5fa0b8f6098fdcce20386ad72f76e011e2ee9ec24770e88260d1e2b70c55bbfa4274d4adf57245b281508d170f36927652f13e65e2681eb99b381e565ae23d55bfdfd1abe048011bc056d18e6c2adbe70ceab6bd01ffcd7296823daf0ea3231bc1ef1f4b0fb37d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-51-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6ea330107dcf5720f6b509b940482b45db28a15b5609e912d26ab55a51db18ea96608a4dabaacabfaf6d72814d55f50d66ce9c3973f1bcb7344d7f2259a45f683a24c973898bb76f8f14ea67d2833948a4e7e7edd2ccfa7c114fbc7836444931a7067b1d8f2b1451d10c6cf214b7192d0b84d9c57ad5490a5ae6a0a0b42d08db56afddb346a391d9b37ab6d9b7ab5886d3784eb227c9f0c079ce2e0c63afa393509aa418e4847510dd1cecc64bdfc80bfa8811674633ad213231e3f3c4df538a0027341baf57958892e122c41b405229e3181dc1cb267d87804d2711e81782304088961997d22a1a44b3982465a1c805d3bb300ab3d27cf8ad19f4953377a68186685a6eb230031b7ca645808390bfe558bbf2970bed9e63c6ef3bae77b5f41793c05d7ae16a7aed2c269de972be5e782bedeedaf11d8d03986245a18db54bf5e7891f254c258d040fc994b4407a6b828477d74ef783491e28248910c7f00e16dadd21e88dbae73086368a47030bc65d0ce108da1618c02e3a37b119410cea0c4a59150f329a0dc464e0308261145956680e6d338403d00f4d5bd059ddd8b6fa3d7d17bd3dd4820a0c389e1196534676cdd6a7be33099cd0bd0a3dc79939b363e9af053941dff9ae0007feda9b8aa87a9b6250a67c5615da6c52a37a39977a619f75f0a480bc205488524be07a81e34fa6817b5b932136728e1380de56cf72276390327c8c0685182dc7c58246728eba3759d4eb55fb75b3073181f873d0792c4700e5baa85a4ed6a5992710ebd8684535cacaaaaf02dff57ee835e7f6639a5b90961ff0bceccc7a2ebaf5203acc1a5cadffbffeb66a3974f1c277f2f45f6bc7ff2d63954f7a7c1ce30267e898f50b9b2e032bf7170e9880efcf898c1017e5909f7161168f0eb16376b5b9f20992aaf37bc2e1b0679a7b421158f053447f34d8234e4e8acc853738e3fb5e54a7a56ae4b621a9acc95161122ede81b71be2b6b56dfd03ca1a2ff717060000",
    ],
    [
      "ETag",
      "JVO4n2tMfANfD6cgrLo/sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ffc554514fc230107edfaf20f515a2331b10131fa622621011e69321a46eb731ed76b3ed3448f8efb6dd90bd689648e2cbdabbefbb7eb96bbf6dac568bbc265948ce5ae43989df0ae0eba318e483decc40144c0ab5e49809206dcd064963cd1e7e1cc7ae3bc5cfd83f15c3c059add8e5ad777e5eb244b082942ade46452a8e1260a150f193895b55de60194d419f18202bd26c69c2f61e96ebdcc0737f369a0ceb488aa141268fe3b177311e900adab67f1609a9a44b73e4df24ccbab02a31f282cf3388804316c0beeb9ce30b047264c62b689a33e8082c7800a212d185251c732c72ca113b2ad571ed8eedf6fb7dc776ed9e73dadbd11906542698e98ac739f9d69728299be1871e31e99677c0cbb09cf86e1424aa5d427d420a7ad7c54948be73dbf62fc4d1c4ef3a356eb55b58b5cac6aa6a5251c260f94feaea4a5654bdf066dad5333990384db1c86443e9ebf1bd77c0c6951b9a367de5f98343c90aa9bcd050d71fdd0de6be7737fd515c7d177b135cac25882947e53101c659f689d3777bdd13b273ea256a274a6d54c90b30e980aa3fd64d22552ea24c80b5b5be00686475ab1d050000",
    ],
    [
      "ETag",
      "Gw/g55PozgT2sGc4hhlCJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ?",
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
      jobId: "grouparoo-job-52-1588841517427",
    },
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
      "ad",
      "54",
      "db",
      "6e",
      "da",
      "40",
      "10",
      "7de72b5cf7a5550398802f4442290227b5444c6a4ca2a8aa606daf9d4d6dafb3bb4e9446fc7b776d838da05154f501c9cc9c3973e6b2f3da9224f9174a03f94c923d143de690bc7c7cc09e7c223c908148781617e3e5dd8dffa05da95fe8ef39bc9e934bf579342a51a888a620c962d8a638273ea467cb45272238cf00c1b8cd09dbea69bba71a8631e8a93d7d70aa97b114c6e10ca5bf04c33d63193deb76b73a3a11c6510c418668c7c7c9cede7d3aed66043f409fd1ee7eda2ecf44bb6f273e8fb10f18c2e968b92845e41492154c008a858c3a3af0beeed37710483a11473f211f02dfc779ca84b492c6c76988a29c14e49ce9951bb9b9d0bcfbdb30c80b73664e5c69325fdaeea7354804ddfab304a8b45a1148f3984917cefc4a5a673cfb3da090aea5db6fa663720bc1218ae10a056b69249d4b637b2ad5b8b5f4811b0b5545c6005286d242970bbc1836d4706fd54bebc81877148204304e5dc156baa2819ea10cbdd0d3fdd0e8ab5ea840cf333c5d057d4ff1870338083c089a0c4ce42ee3418ad37ea81b4aef345443433182a1a2690325e81b0a008ada57b4be3754f84f57e58a61b3abc7271030384534c31455dd96278e3976cd9575b1b24d736a4eebf29f093a40df3a1607bbced29ef0a866ab42c01b3f2d8bdd6fd45e0718ef69b3b8b7ba7850404610e6a28a2db06cd774c613d7ba69c8e02b398311f05f168f62294310535847030212c820b9c28198a57c3d5f58ae35b7c7b39aa1d8b2eb2d9272d88f9dd8baa6269bfb92ed6f4639b4d22a646a03b9e1db9c1c65b901717e84e6a932cbbd3d8ed611b67f51b7701dcbbefc0ff2c6191fdc5f24565f3f5b0d7e999f984a9afc7d693a7722b6f0098f03434860ead719dff1da4460e97ec705e5",
      "f0ed3d1311fca4edf253c6cdfce1fbb4ce5ebc1c710650524ea322d4b4e150d912f240c20e107a6fb0431cdc34910b263065db5e94b7ad6ce4664f52de90538409387f877635c04d6bd3fa03be8189ee98060000",
    ],
    [
      "ETag",
      "SFAUYVcj6M5+szOePOrG5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30147de72b48f73ae2303acd121fe6e2a6d19989f2b2c598025786032e6b2f5b8ce1df6d0ba82f6dcf39f7f6f69c9e2cdb663f491eb1279b0549fc5b8238dec5402b7df040962949b515984b60f7ba1a88c7bafad55fd1fba73f86f9e6f190c4d379671d74e2d1a8ae92e137645cd59d1452789f401a4985bf0cb61bde6839cf40dfb8db0933d0dcd068742c8c365b6e266f13ef56ca3032d2d25f2c9ec78b096ba4caec5bb556e629070c3cd883803c84eb830a81070869669c4b9e152938124b11826c86e8c65a8e05960517888ea29c7ed771fbc3e1b0e7f6dd41af3b68cb530c392598eb0e7fcd2ef30989a71efe6bf7ccade31135acc368a360fb9b7c6e1352d29f6eeeb10b5535a7add5a2ed75d8f848203f042a2f128c8307d646f182da2ae924489460e890abdf9a26d47056659d01616536f418020000",
    ],
    [
      "ETag",
      "FUQtMZUBeKT6jigHK/Sb/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b5283300000d0bb645d3b508a80bb807c2610a67c54ea264330945f0b122804c7bbdbf1dde0fd80bc2818e764ea5b76032f40e407635fecfd5e3745546ad039a6f3aa3cad58275cc6ad6724d9d8a181a0caee344aa9fe569cfc8c2a97ebe29ea928f33ba929cb5ce1775b882b071d4ccbc18b7326d1f7a2a1386da2502e619e3412d1b239fbece864472a0e1bd3bbcd88d3cd31a0269253ea2257eae74d860124fdf1aef8aa3e877c159e71b94f9460a995e26b8ce325ac02fada59183e7f7831fd922c617bc17b0f7680ad433d324eeac74c510d6307fe9b6412037b5c4d968f6c04bf7f06266da305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-53-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "4f",
      "a3",
      "40",
      "14",
      "7d",
      "efaf20ece35afa6169a949b3362d2a494b574a35bad9e0305c709432c80c6e5cd3ffbe33d00fd81ae31bdc7bceb9e7deb933ef0d45519f4912a8678aea93e82587eceddb13f5d51399018e2299e9c7417c7b773378fedeb6eefededf536775a95f8f46258a146c86d6690c4d46f30c033b5b2db528a3798a324a9b42b0a99f363bba6118bd8ede19f4ba8392cb200e672479960a8f9ca7ecacd5daf9d0224aa318504a9886e97a1f6fbd765b69469f0073d6aa976d894aacf579e11f31c588139a8c56cbd244ce20f3608d482c6d1cd8817f5e97d7085a6b9140bf120c08639a275c5a2b65304d4212e559212e94de4550840bcffbdf4a405d9a3373e22a98c6f93af112b4861325401c79fc2d05e5c259cc95070e8c3f68967db170e663d75ad8de727265cec7da64315bcdeda5727b653aa6c2911f4321a18c94f3e2cf163f85b1a26820744852587365b6624864b7e3b43e38c9bd841411e6186c61dea0dd471da33df4437f8043e354f7c336f8bee10f7474eab7f1b007bdc0075455289c957c94d0a4dbe9b603e8f89e1867dfeb75b0ee19616878be11e800fd611f047dcbdeec7bc119200e53c252cac876d8eac431c7aee959179e6d9a53737a68fd4f468ed0b78e25c0aeb3b22782551d5388f2984fcb46eb43aa752fcfa5dad867133c6a20cd0815a68a25b06cd774c613d7baa9d8101b398308e1b7e58bdcc910c50c0e6c9489a3e590cd6920cf51b5c7f36abfc57efddc819840fcdafb3cb42380725d8a5e8ed6a55ec715eb581b45799465545dba8e655faa95e4e663991b14e71fe8bc6ec36a2aa6f52826cc6a5a8dffbf7e372a355471c3b7f6d4eb95e9dc496e9193190742c820c187aa5fd874492cd35f78c0047cf7",
      "9c48867851f6f519176171e9303b542f36575e41524e7e27d81fe8bab11314c48c1f23fac3f60e71f4a4c85ab08684ef66513e2de52037354b79c54e419370710feced216e1a9bc63f28ba4c0617060000",
    ],
    [
      "ETag",
      "6ldlWYV7k+0IYzZZoRUG5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffc5545d6f8230147de75798ee5512757e65890f389d33a253c4ec6131a6c2457140b12d5b8cf1bfaf2da8bcb890cc642fb4f79e737b726f7b386aa512faf423173d95d0dadfec13a087870df099dc58c0928033b1c4246280ca920d1c6f24db988e8c8a152f5877b0ef19f3d1da18d5de679d4eca62ce16422c78471189d8f3217099883f545ccaf20a8b7008f24487044918ad5458bec2fc102b786e5bc3c9208f84c455c864619a46d7eca30c3a956f8bb898e3953af26f126a5d6a9918da91b5051e50881cb8761d53b203870fd578190ee300744612ea00cb4464610a6f2849624c09d1454a6f3cead546bbddae571bd556bdd63ad303e260ee9348562ce6e8a2cf09c78145bee5885133bd039a86e9c4cfa3405eee12f21312d0972cf65d74c99dcabf108713bb59cf71b3dd52cb5516561593f2fc0056ffa42eae648bc50b2fa69d3d933b89e39024112f28fd62be19776c5cb8a168d33dc3eedf4b9671e18582baf670dc9fdbc6787a535c7c975713740f1cd89412e13106ca59d54abddd68352be8ecd467229dc8a551394d40a51d2cfe58af3e17390f070cb493f6033510220a1d050000",
    ],
    [
      "ETag",
      "APKA0RpUsBGqDASKbAK2WQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` != ?",
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
      jobId: "grouparoo-job-54-1588841517427",
    },
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
      "ad",
      "54",
      "db",
      "6e9b40107df75750fad24af585041b8864a5964d5a2407a71827aaaaca5e60b0370196b08bdb28f2bf7717b00d721a4555df60e6cc9933979de79624c90f3809e40b49f6f0fa3187ece9fd3df1e44fc2030cad8567b4d5f5396cac808d69e26cfafaef5e9c8f86c312858b688ae23482362579e603bd58cc3beb8ce429ca086973c2765f6d2b7d5dd755a5af68ea9956c65288c2294e1e04c386b1945e74bb7b1d9d3521eb08508a69c727f1c1dedd9e75d38cdc83cf68b799b6cb33d1eeeb892f23e2238649325ccc4b1139856c0931c29190718c0ebccf4dfa0e467167cdd15bec03f27d92274c482b697c9284789d670539677ae6466e2e341f7e6b06796e4ecdb12b8d670bdbfdb042b1a05b7d94109596cb0c681e31e9ca995d4bab9467df200a7425dd7d351d935b3212e2089638584943e9521ad913e9885b49efb8b15055640c80329c14ba5ce4455053c3bd552fad17c678a010248871ea0ab6d47a03a4e83dc30b3dcd0ff5f3be17f6c0f3744feba373afe71b2aa88107a8cec044ee321e2524d1bc000d1425d4cecf7404aa1a047ecfe885e7a0694a68c040570ddf307455ae1876877afc0c108309a629a1b8eab63c76cc916b2eadaba56d9a1373722cff57864fd0778ec5c1aeb3b0c73caadeaa10f1c64fca629b8d6a7480f19ed68b7bad8b2705a419265c54b10596ed9ace68ec5ab735197c25a7b046fed3fc512c6588220ac76894a1181864d72410b3946f6673cbb566f6687a6428b6ec668fa41cf6e320f658539dcd7d4a9b9b510eadb40a9983c3281ad534596e5194bf40b3adccb2d2e068bdc0f62feae6ae63d95ffe833c94f2c1fd4562f5f5b355e397f989a9a4c9df16a6f35dc4163ee17120840c12ff98f10daf4d0496ee375c500edfdf3311c14fda213f65dccc1fbe4f8fd98b9723ce008ecb695484037d60187b421e98b15384aee87bc4c94d13b9208684ed7b51",
      "deb6b291bb86a4bc26a7081370fe0eed6a80bbd6aef507cd780a7c98060000",
    ],
    [
      "ETag",
      "Av88SehIdtCsnRh58x0muA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "4e",
      "83",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48",
      "7d54125070c4640fce90b9041787624c0c593a76412670b12d2ecbc2bfdb16d8f6d2f69c736f6fcfe9d1304df253d45bf260924d91ffb6c00e573988953a44c0db5270b93558732037aa1a04cd55f5e71d7b890bb46791bdafc25538bf6ec38fd574da57f1f41b2a2aeb8e12499c15506eb9c45f1a9b03afb59a56a06e5caf991ea86f18347168b4b658be07f320ba942adc6a691987e1e32c0cc820757a4fe4dae9a7ec701341060cea14ce0f6a18ee20150bed9cd3aa29c1e2d8b214f8304435f672ceb06d2843b4246579aee578beefbb8ee74cdcdbc9585e624a4581b5ea88dfc869be4041cb08f7ca3d71fa78580ffb30c628487691cf654252fa53cdf7e44475c3293146949c87cd0e02f82b43e98583766093318a275456854a42b016349d52f95bcf851838a333fe01de1129bc18020000",
    ],
    [
      "ETag",
      "X3rMUio0BR0wmLQLG+uLVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfdb7243400000d07fd9e7c8607562fb161b5a41888e4bbd98c50a4bd0b599844cffbd999e3f384f40ca92ce732ec68e0ee01d2c4445db72eb8cbab19c29e27521c79fa81cb1b6cbd851822b5a9783e736cdddfa6a189e7ad1cb91cda1935e1b67d1dbf8c3d6872ef0bca8d2868ad601c9c3b09efcece627977687e47d9a18be2ac37014df7ebd32063df74130bc1f4ccb6c635538ba223145c0a6c16e2839bd74e2d15886060aaaeb84957ba2439c5e72cb39ee73f3747363bbe8c47a2e488f5bf6a345992f1162471ad800fa985a4ee7bc7dcde01b421bf0dfccc532d1d7d5a084530e7eff009fa7506005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-55-1588841517427",
    },
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
      "000002ff8d545b6f9b30147ecfaf40ecb5b98784548ad628a12b52423620cdaa69a2c631d41d606a9b565d95ff3edbe4024b55f50dcef9ce77be73f1796b689afe07675bfd52d3431c3f1588be7e7924a17e213d8883587ad637c3e5cfcdf4ef3a7919d1bb158e21dfa42f934989c22a9a81344f5093918242c42ed75e2ba6a4c80125a429089b86d1ec1aa6690eba467734e88dca5886926881b33f92e181f39c5db6db071dad9890384120c7ac05497ab4b79f7bed9c924704396bd7d3b64526d6fe38f1d78440c031c9266baf145130440394029c4819a7e86d7855a76f6190b662817ec610010849917129ada481248b705c50452e98de84519895e6e36fc5a07bd6c29af91a2449916641065274a16d0107017fcd9176edae96da3d478cdfb76ce77ae52ea7bebd72026f76632da7add96ab15e3a9eb6b9b15c4be3204c90a2d026da95fa73c48f12a6926e050fce94345f7a2b828477df4efb9d491e29248910c7d01e168c3a43d0353be3300a473032fb46187550189ae1c800fdb003c70334d88608541994b2321e6424ebf5ba7d18817e007b7d23180c7b610042b3138cc3618440c7ec8cccadbe8fde1d6b8114018ee698e584e17db3f5996b4d7d2bb0af03c7b2e6d6fc54fa0bc567e88d6b0bb0efae9d9988aab6290245c2e765a1f526d5aa9773a916f65107cf0ac8292642945a02dbf12d773af3eddb8a0cb1910b1403f8ea3dc99d8c40c2d0291a50315a8ee8926ce51c7567baacd6abf6ebfb01c404e2d751e7a91c0194eba26a395b977a1e5fac63ad15e5284babeef9aeed7cd32bceddfb34b72029dee179de9bf55c74eb417498d5b81aff7ffd6e5472e8e285efe5e93fd6967b2763954f7a5c14218a3278cafa894d9781a5fb13074cc00fe7441d4aef949f7161168f0eb25376b5b9f209e2b2f307c2e1b86ff60f842290f273c4c0340e88b3932273a11465fcd08bf2b4948ddcd5241515392a4cc2c53b70f643dc35768d7f4a0f2c6f17060000",
    ],
    [
      "ETag",
      "UH6MXWAzUlw7rYOigctWmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc5544d6bc24010bde757c8f6aaa0add150f0105b6d85f8518df45044d664a2b14936dd0f8b88ffbdbb9ba8b95802157ac9eecc7bb38f99dd978351a9a0cf30f1d16305adc2f59700babf5b037f539b29301171269794240c5055b181e3b562073d78b726acfb3076fa20463b9aec37c2ee743216f3361063c93bc848c6410891cf64fca1e34a9ed758826350277a241271b2d461f502f37daae1993b1d8c5e8a484c7c8d8ce68e63779d1ecaa163f5ba888f395eea23ff26a1d785918ba12d594d21000a890797ae534ab6e0f1811e2fc3711a418d11413d60b9882acce0352522c594909a4cd54cb3d6302dcb6a36cc46bb79df3ed123e2611e924455cc67e8accf09c7d1947cab11a3567607340bb3899f468182c225142724a19d2a0e7d74ce1dabbf100723b7d52c70f3ddc22854965695930ac20896ffa42eaf6483e50b2fa79d3f931b89e39888849794ee3b63fb868d4b37946dfad9767bb792655c7aa1a4ae3b18f666ae3d9c5c1597dfc5c504dd3d0736a1447a8c817656a3deb4cc76ab8e4e4e7d22ca895c199553013aed61f9c77a0db9cc053862601c8d1ff33d0f281d050000",
    ],
    [
      "ETag",
      "fEeW8PsB3OLFeuNvrnyhuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` != ?",
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
      jobId: "grouparoo-job-56-1588841517427",
    },
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
      "a5",
      "54",
      "61",
      "8f",
      "9a",
      "4010fdeeafa0f44b9b9c0a88809798ab55ae25f1f08a7897a669748185db3b60b95db0b117ff7b770115a3bd5cdac40f38f3e6bd37b3bbf3d21204f109a5817829881e8a9e0b4836ef1fb1275ef00ccc41c433c6e673e1e8d6a31caea777bf3119adbdc7cd6838ac50a8aca620c962d8a6b8203ea4978b792722b8c800c1b8cd08db7dad2df70dc350e5beacab8a5ed552188753943e7186873ccfe865b7bbf3d189308e620832443b3e4ef6f1ee5ae966043f423fa7dd63d92e53a2ddd785af62ec831ce174b89857260a0ac9122600c5dcc6a13af03e1dd37710483a1143af910f81efe322cdb9b58ac6c76988a28294e48ce9850559b8f4bcffdb088873736a8e5d613c5bd8ee87154838ddeaa300a8b05c12488b3817ae9dd98db0ca98fa03a090ae84fbafa663b208c1218ae112052b61285c09237b2208ab00e47025bc6381d251a916409aa3b4f4e4022f860d272c5bcfd13a73847b0a4e0272265fc396baa401d990065ee8e97e68f4fa5e2841cf333cbd0f7a9ee40f54a8061e044d869c6b57f520c5a9acfb5aa8b01fec1b40516518fa41a07821d4829e2669aaaef4c2813408c59a61bbefc7279075394134c314d59316c78e3972cda575bdb44d73624e0eedff22e8047def580cec3a0b7bccaa9aa30a011bfaa46af678504713c8d94c9bcdbd36c593063282303355de00cb764d673476adbb860d761da73002fe66fecc2f6408620a0fd5808004e690dce0809fa5783b9b5bae35b347d3034379c36e7748ca603ff6660f3d35d9dc4d767c33aa43aba2dca6a68a8ddcf6e22ccb1d888b3334eb3a2cca471cad336cffe26ec20ff1ffcd299222b525852d8bbfb8acbf7eb61a2222db30b53bf1dbc274bef3da32c7330e0c2181a97f907dc383e38555fa0d0b94c177eb8c57b08db6d7a7390bb3",
      "b7efd3837af978f8264049752035a12e293d6547c80a497e8ae8a9da0e71b2d2b8164c609aef6651adb66a90db234b45c34e59c6e1ec29da96fda534dfdab6fe00815622dc97060000",
    ],
    [
      "ETag",
      "8yBuR7Ij1fvLVzorAvbjyA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff4d51d16e8230147de72b48f73a12d9649a253ecc856c26c66c4c1ecc624c852b83412fb645e60cff6e5b407d697bceb9b7b7e7f464d936f94d594c9e6db24d937d05fc789780fcd4870044954ba1b612990072afab41d244571ffe424857c912ebc7693658ed59ccf0bf9e4cda2a11fd404155dd4921857729e4b150f8db60bbe38dc66801fac6cd869b81e6864e93c7d268b3c5d27ff3835ba9c0d8488b703e7f99ce7dd2498dd9d76a6dcc5332dc06b0030e2c82eb834a8e194472669c0b5a943938022b1e81e886e8c6564e385625e5888ea21cefc971bdf1783c743d77347c18f5e5394654a6c87447f8452ef3254a9a07586bf7c46de3e12d6cc3e8a320bb9b7c6e1352d241377be44235dd696df5687d1d363d4a101f1c951701c6c180f451bca2b62a7512925760e888aadf7a4f65c7598d750601e0f7e418020000",
    ],
    [
      "ETag",
      "vxUeiYgTow3Bj0Yqndnozw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfd97282301400d07fc9b33aa23240df648b418b5208e81303e94559640b8b994effbd4ecf1f9c1f9430069cc74353428d3e904836da8aad8e8daa0bef5b8fe6bc99ccbd45aea9cb76853859be1fc6ad70400fbd6504d6575d5d6ff28ced9459ae2ce56735c38a3211ea4936e598d537ca3f49e7b2a23f90d2966ed9d875d2722f8ad2b1b4873698fe7318cbcc50e621d4990b1037d64cc2f470ad6a9ce3a36290715b52635a6fb07a36a20bee1f7973a72ff94e0587c0ad532720af2a68813e03677d6a199897b5b7430b04af36ef81c7f97bb695356d81fe9bf1205a785f75487ae8d1ef1fe73e8ea205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-57-1588841517427",
    },
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
      "8d",
      "54",
      "ef",
      "4f",
      "a3",
      "4010fddebf82701f4f5bb0e54093e66c5ad4deb554816a2e970bee2e03a2944576f1624cfff7db85fe80ab317e8399f7debc999dddb78ea2a84f4916aa678a8a93f8b984e2f5cb23c5ea91cc0047b1cc80995e8737235b67dc43973fbed2c5cf07ed6638ac5149c5666895a770cc68591060674baf1b17b4cc5141e9b1103c36cc63ddb02c6ba01bba3938316b2e83349a25d9935478e03c6767bdded64737a6344e01e509eb12badac57b2f27bdbca08f4038ebb5cbf64425d6fbb8f0f79412c4139a0d975e6da2645004b042492a6decd9213e6fcb7713b4eac602fd92104084d032e3d25a2d43681625715954e242e94d0445b8f2bcfb6d0454cf9ed9635f21342d575990a1151c2921e228e0af392817ee62aedc7360fcbe3b752e16ee7ce44f174ee08dafecf9a83b5ecc9673c753eeae6cd75638c2295412ca5039affe1cf15319ab8a864227c92a6bbecc360c89ec669cd3774e722721458439061b58606adf906e69a738c22689acbe81230d30b6b069a03ed6c8e900062106d454a89cd57c94d1ccc2180c03486084d00f0683f024c016310373a09904eb44eb6bbaba61af77bd9002108749c272ca92cdb0d5b16b8f7c3b985e048e6d4fecc9bef5bf457280be73a702ecbb4b672c58cd3145a84cf9a46eb43da456f7f25c9a8d7d34c18306f222a1c254b50453c7b7ddd1d89fde366c888d9c418cc8abf72c77324229833d1b15e2683914731aca73549dd1bcd96fb55fd75b101388df3b9ffb760450ae4bd5cbc1bab4ebf8621d5ba3a88fb28eaa9eef4e9d4bb5915cbf2f738bd2f21d9d974d58cdc5b41ec484594babf3ffd79f4ea3862a6ef8c69e7ab3b4dd5f925be564c685080ac8c8beea27365d12ebf4271e3001df3e2792215e945d7dc645585c3ac2f6d5abcd955730a927bf1534354beb6f0505b1",
      "e08788537d87387852642d5841c6b7b3a89f967a90eb96a5b261a7a249b8b807cee610d79d75e71f25a6519a17060000",
    ],
    [
      "ETag",
      "e7lPdQAE1stSaGJ+oOKh0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d6bc230147defaf90ec55618efac1c087fa312768e76a658c2112dbdb5ad7363549b739f1bf2f49abf6c55198b09726f79e7373b83739dd6b950a7a0f6217dd57d02af0b729d0dd8d0ffc596e2c6069c899581212334055c9068e7dc9eeb9af53d3342dde1f7ebfc057aa6f27b1eb773a198b396b88b0e0ed4524622f80d065227e537125cf2b2cc611c8131d12a651bc5461f50cf35da2e0996d8dcc61118988ab10733e1e1bddf100e5d0a17a59c4c51c2fd5917f9350eb42cbc5d086ac2cf08042ecc0b9eb84920d387ca4c6cb709484506324a50eb05c441666b04f499a604a484da46a8d56adde68b7db7abd516fe977ad233d240ee6018965c57c864efa9c701c5ae4538e1835b33ba059984dfc380ae4152ea13821017dc8e2c045a7dca1fa0b7164da4dbdc0cd770bad50595a554cca0b4258fe93bab89235162fbc9c76fe4cae248e2392c6bca4f4c3f8c9b862e3c20d659bee1bf6e05ab28c0b2f94d4b54793c1cc3626d38be2e2bb389ba0bbe3c0a694088f3150ceaadfeaed46ab798b8e4eed11e9442e8dca690a2aed60f1c77a0cb8c8793864a01db41f09a956451d050000",
    ],
    [
      "ETag",
      "CdYPNNNRtDGzWexu4qMndg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` != ?",
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
      jobId: "grouparoo-job-58-1588841517427",
    },
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
      "ad",
      "54",
      "5d",
      "73",
      "9a40147df75750fad24ea27c2882ce6452aba4a5a398222693763abae062360196b08ba993f1bf77175071b4994ca76f70efb9e79c7b77f7bed404417c44f142ec0aa287964f194cd7ef1fb0279ef30ca460c933d2b7e99da9262bf9f7e770229d9d49eb0882e78b8b0285f26a02a224847582b3d487a43b9d349629ce1290625c678475cda82b9a61182d4553f496aa17b50486c110c58f9ce19ed284742569eba3b1c47819429020d2f071b48b4b2b554a52fc007d4aa44359892911e975e1cb10fb80221c5f4c2785898cc074062380426e635fbdf03e1dd23710881a4b865e211f02dfc7594cb9b582c6c7718096599a9333a6171664e1dcf3eeb7121027e6d0ecbb427f3cb5dd0f731071baf947011061364b21c9422a5c39e391304f98fa3d2090cc85dbafa663b2488a0314c2195acc850be152e8d903419813caecce85772c925bcae516905014e7a65ce085b0628565cb415a27ce7047c1490065fa256ca6cb6da01872c70b3cdd0f8ca6e60532f43cc3d335d0f464bfd382ad850741958172eda21ec4389635bdddee68320486a6054051024d9135b903b58eee796d59553dbfa9a8aa58326c76fdf82904140e10493041e5a8c5be63f65c73665dcd6cd31c98837dfbcf293a42df3a1603bbced4eeb3aaeaa802c0a63e289a3d1cd4c104289b69b5b9d7a678d4409222cc4ce557c0b25dd3e9f55deba66283ddc7215c027f3d79e23732002181fb6a90820852988ef0829fa5783d9e58ae35b67bc33d437ec5aeb748c2603f7766f73d55d9dc757278338a432ba2dc66bb2556729bf3932c3720cc4ed0accab0a81c70d44eb0fd8b3bd71a9913b737bafe0f0e555995ebb2ca5686aba85da5d9555a0d59967ffcc578f9f5ab569114d9d6290d8bdfa7a673c76bf31ccf383080298cfdbd8937bc415e58a4dfb054197cbbe27805db723b7db6202862ebc0277b",
      "f5fc3df1e580a2e28c4a425dd15aed2d212b4ce931a2ad37b788a335c7b5600463ba9d45b1ee8a416e0e2c65153b791987b3d7695bf697dc7c6d53fb031b8bc879ab060000",
    ],
    [
      "ETag",
      "/JUYE2pv0xBlS/++/ymeaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48f73a92b148244b7cd08d6c2644279bdbc3624c850b43a197b5658618feddb680fad2f69c736f6fcfe9c9b26d72c859429e6cb2cbb3bf1a787397815ce94304a22ea4505b854c00b9d7d52069a6ab47e9375b2d8fc5e1a54a2277e97dedd78c4d2793ae4ac4bf505255775248e1348722110aff186cf7bcd1182d41dfb8dd7233d0dcd06bb2a98c365f7c06af41742b95981869b10ec3e92c0c482fb566dfa8b5354fd9e32e821438b018ae0faa38ee219673e35cd0b22ac01158f318443f44377672c6b1ae28477414e578bee37abeef8f5ccf1d8f1ec743798131953932ddb1fe2097f912252d223c6af7c4ede2e11decc218a220e94d3eb70929e95f377be442b5fd69630d68731d366b2488778eca8b00e3e0810c513ca3b62a751292d760e898aadf7acb65cf59ad75064535fdbc18020000",
    ],
    [
      "ETag",
      "4fWnQOwlkDpdR1O5VjUnnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb64ed3818c227dd81d8f2b5cad7b2c960923248050ca844a777afd37783f70415a57c1cc9d4b7bc036f4056102fe932e84d5beeb9b7bbd619dfe24850c60ec8e5a733f12c2b8ea2d394204550c7e4b7f91e08a13d4a15bab764f8606dbc91dd3e0dd7aba12a2ebaa186a4a352318f387d8f0ddf4da17bd47567c7f037754a2d8354a8b4eb219dd5b846b5121389919ca0f892d9dabb874a14f45ee9e64ee637ac3646943f52791db776f1b3ba3838b436ccbb37b81d12ff507c1ad139ef904c7ab0007c1e1ac147d2bc66aa86f102fc37c92407febadabc125c80df3f01c144b405010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-59-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545d6f9b30147dcfaf40ec714d42be1652295aa3846e4809590969554d1335e6429d124c6dd3a9aaf2df67433e60a9aabec1bde79c7beef5b5df1a9aa63f9134d42f353d20f1730eecf5cb8606fa85ca8040b1ca44f7ecbee78d36a26bc21a999bafb7e15d76331e972852b039da66093439cd19067eb95eb56246f30c314a9b52b03918353b03d334fb9d4167d8ef0e4b2e87249a93f449293c0a91f1cb76fbe0a315531a278032c25b986e8ff1f64bb79d31ba012c78bb5eb62d2bf1f6c785bf27142341683a5eaf4a133907e6c3169144d938b1c3e0aa2edf2268db8a25fa85604018d33c15ca5a2983691a91386785b8547a9341192e3c1f7f2b017d65cdada9a7619ae4dbd44fd1162eb41009e48bd70cb46b77b9d01e0470f1d0b29deba5bb9878f6d2f157d39fd662d29a2ee7eb85b3d2ee7e5aaea509142450486863edaaf873e44f61ac281a4a1d9216d63c95ad1892d9fd38ed774ef228a144a4390e7b983f34bea18e698c822818e2c8ec0d82c880203083e100f502038ffad00f03405585c259c947294d8d20c25104a1df3747c8ef1b66c73751c7f0510f4c6c046814f440dfb377c75e3003246046784639d90f5b9fbad6c4b37cfbda772c6b66cd4eadff65e40c7de7da12ecb96b672a59d53145284fc4ac6cb43ea45af7ea5caa8d7d34c1b3063246a834552c81ed78963b997af66dc586dcc839c408bfae9ed54e4628e1706223268f56005bd0509da3ee4c16d57e8bfdfa75007189f87df4796a4702d5ba14bd9cad4bbd8e27d7b1368af228cba8bef25cdbf9a15792bbf7656e5192bfa3f3b20feb999cd6a39c30af6935fefffad3a8d4d0e50ddfdbd36fd6967bafb8454e655c8880418a4f553fb1e98a58a63ff18049f8e139510cf9a21ceb7321c3f2d2617eaa5e6caeba82a49cfc4170d8ed76ba07414964e21cd1ebf50f88b32745d5822da4e2308bf2692907b9ab59ca2b760a9a82cb7be0ec0f71d7d835fe01df00c3b017060000",
    ],
    [
      "ETag",
      "fYrY3T9jt28eUa8j+VdWpQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc554cb6ec23010bce72b907b05095a5eadc4010aa5a829a5107aa91032c926049c38d80e0821febdb6132017aa4845ea25f6eecc7ab46b4f0e46a180d67ee8a0a7025af8de2606b6bff3407caacd18784c04974b44430ea8a8d820b0a7d8fd3589ccaebde96fb66f5f8b3a5980bf7bf05aad84c5ed250458f20e3292b1eb0371b88cbf755c48f31a0b7100ea449b923808e73a2c5e60b18f343cb1c683613f8b04d4d1c8706a9aed8ed94329742c5e1771b0c0737de4df24f43a335231b4a28b31b8c020b4e1d275c4e80a6c31d0e3e538880894388d990d3c15518509ec311a4798515a92a952edb154a9359bcd6aa5566954ef1b273aa136163e0d55c57482cefa820a4cc674a7468ceac91db0244c267e1a05723397909d9084b6aad877d039772cfe421c0cad7a35c34d77332353995b554ecaf509ccff495d5ec912cb179e4f3b7d263712c7018d439153fac5fc68dfb071e986bc4d77db56ef56b25c482fe4d4b506efbd89d57e1f5d1597dfd9c5049dbd003e62547a8c837656a55c6dd61af5323a39f5992a270a6554c162d0691bcb3fd6ab2f64cec5848371347e00b046fd891d050000",
    ],
    [
      "ETag",
      "GklpLDcqGqvKVb6lbeiw3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` != ?",
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
      jobId: "grouparoo-job-60-1588841517427",
    },
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
      "00000002ffad545d6fda30147de75764d9cb26958f04924025d421085d241aba10da4dd3048e71a8db244e6d87aaaaf8efb3930041b06a9af696dc7bcfb9e71edbf7ada628ea134e56eaa5a20678fd9c21fafaf19104ea85cc200ed63243afbfcf402f89c7169b85963966d66670f7d2ef175538473310a711aa33925188d8e57cd6585392a5801252178475b355d78c6eb7dbd10ccdeae8568165280a273879920c0f9ca7ecb2d9dce968ac09594708a498352089f7f1e6466fa6943c22c859f3b86d537462cdf71b5f4504028e49d29fcf0a111943748162802329e3805e055f8ee91b18c48db5a8de60880084244bb89456d0409284789dd19c5c30bd89a008e79af7bf95803ab327f6d05786d3b9eb7f5a8258d22d3f2b80298b05452c8bb832f6a637ca3215dd1f00436ca9dc7fb53d5b44280971841678b554faca953270478ab2a3503e8850ae29efb7428ce32457e5832042152d225b3ae99c39c43d8524015c0828cb1656cb045ab7d50bc2c08261b76d04610b054137b00cd00e5ab0d7419d5580409581cbde051e24243135c334cc95a5231db4dbba651950d3021df58005bb3a3485c19a69843db564d8eee78114018e4698a584e1d26b75e8d903df5e38e3856bdb237b7418ff85e293ea7bcf11c5be3777870255b52a04c2f65131ecb151470e70e16975b8f75c3c1920a5980851f91d705cdff60643dfb9abc810177282d600bece9ee5950c41c4d0010d28881147f486ace459aab7d399e33b5377303930e477ec7657c944d9cfbdd8c34c5536ff353dbe19c5a1155129d3eca895dcf6e22ccb1d88b233349b32ac6a471cb5336cffa26e3c990efe93be86d1f983c4f2eb57ad42af8a05534a53bfcd6def87c4e63999f15088284ae0a1e15fbc36092cd27fb13f45f96e9b49845868fbfe8c8bb078f8901dbae72f47ae011c17d3968456bb651a3b4201a4fcb442d7f45dc5c94693bd508c12bef3a2d86c8591db234959454e0e93e5e21dba8e7b9d8baf6d6bbf01c47c9e1296060000",
    ],
    [
      "ETag",
      "rGXSa9nmF7sSf76Fs7vAVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e72b48f73a123138d9121fe6423637629469f6b01853cb85e180cbda32670cffbeb680fad2f69c736f6fcfe9c9b26df29d953179b0c92e4b7f6ae0c79b14e4521f2210752e85da2a2c05905b5d0d92a6babaa8d861b1bc7f0be950e4023e56feeb5f76984cda2ac1bea0a0aaeea490c24906792c14fe34d8ee78a395b4007de376cbcd407343a7c96365b4d97c153c07d1b554606ca4f93a0c1fa761403aa931fb46ad8d79ca1e771124c0a164707950c5710f4cce8c73418b2a074760cd19886e886e6ce594635d518ee828cab91b38eec8f77dcf1db9636f38eecb7364546658ea8ef53b39cf9728691ee141bb276e1b0f6f611b461f0549aef2b94e4849bfbad92367aae94e1bab479bcbb0e951825870545e04180703d247f184daaad449485e83a11955bff592c98eb31aeb1f0187e28518020000",
    ],
    [
      "ETag",
      "mpcwPQ9KLa2slseWT8Jxiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "d0",
      "bb64ad8eb10aa43ba102417e511058319106ca9f020aa1d3bbd7e9bbc1fb013449d830c4635bb206bc034e7768936ccead2473c29c40249a12a9d61d5d8a36ba2c219f72df28bd494839d4953444516639be75ab70b55e8cf6090357b97a640fbf6a3f1417797d7f6ac55919bf4d9ae11d11122eb15272830a992455cdab4d8b43aebbb28b28f1781d56fb8f637162e623c8b96c7f6247afc4bef7a0e04758c2c80e8c51cf54dc6a4d13dc30acbb9ca4dc3985db816ca774c6317e28550de7ae042bc0e62eefd910e7afd9db01a115f86fc623efd8eb2a33dab31efcfe01f41d7e0f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-61-1588841517427",
    },
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
      "02ff8d54db6ea330107dcf5720f6b5b9d092402a45db28212dda84ec12d26ab55a51db18ea96608a4dabaacabfaf6d72814d55f50dcf9c73e6cc78f07b4bd3f4279245faa5a643923c97b878fbf648a17e2633988344669e669ee92dafcbc7c10f301c67e5ed80e5fdd7d1a84211c5666093a7b8cd685920cc2ed7ab4e52d0320705a56d21d81e186da36fdbb669f40dcb3cb72a2ec3693c27d9935478e03c6797ddeede4727a1344931c809eb20ba39c4bb2fe7ddbca08f1871d66d96ed8a4aacfb79e1ef294580139a8dd6abca44c97011e20d20a9b4716447f0aa29df2160d34904fa85200c10a265c6a5b54a06d12c2649592871a1f42e8222ac3c1f8eb580be72e6ce24d0104dcb4d16666083cfb4087010f2b71c6b337fb9d0ee3966fcbee37ab3a5bf1807eed20b57931b6731ee4c96f3f5c25b6977378eef681cc0142b096da45da993270eca982a1a091d92296b81ccd60c89ec6e9cee073779909022c21cc33b5868f506c0b07b4318430bc5f6451fc63d0ca10dad3eb8803d3434b119410cea0aca59c50719cd8c7818c19e618630327ba1699b51080d71b47ac032630b5bc836f51d7b7be8051518703c252ca78cec86ad4f7c671c38a13b0b3dc7993ad363ebaf053941dff9ae0007feda9b08567d4c3128533ead1a6d0ea9d1bdbc977a639f4df0a481bc205498524be07a81e38f27817b5bb32136728e1380de56cf72276390327c6483425c2dc7c58246f21e756fbca8f7abf6ebe71ec404e2cfc1e7b11d0194eba27a395997669d40ac636314d55556517d15f8ae77add792db8f656e415a7ea0f3b20bebb998d68398306b68b5fefffadbaad5d0c51fbeb3a7ff5a3bfe6fc9553999f1718c0b9ca163d52f6cba2456e92f3c6002be7f4e2443bc2887fa8c8bb0f8e9103b56579b2b7f41524d7e2f685dd8e6f95e50100b7e8a180efa7bc4c993226be10dcef87e16d5d3520d72dbb054d6ec289a848bffc0db5de2b6b56dfd033d9de14e17060000",
    ],
    [
      "ETag",
      "kFN4NOGuj6Ka9AnuV6sp5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5545d4fc230147ddfaf20f5114818e14b131e40519720f2318c8921a46c7763d8adb3ed5442f8efb6dd80bd609648e2cbda7bcfb93db9b73ddb19a5127a0f2217dd94d02af03f1260db2b1fc4446da6c01322b85c621a714015c506817dc5aed55f4d4b5cbbe50199bcccb1fbbd2d7b89dfeda62ceeac21c492b793918cbd0088cb65fca6e35296d758844350273a942461b4d461e5048b6dace1993db5460f7924a4ae4646f3e1b0d71f0e5006ed2be7455c2cf0521ff93709bd2e8c4c0c6de86a0a1e30881c38751d33ba0147587abc1c8731812aa70973806722aa30857d469318334aab32556d9955b3d9e9741a66d36c37eaed039d50078b8046aa623e43477d41052653faa5468c5ae91db0344c277e1805f27297909f90843e5571e0a2636e5ff985688dec5623c7cd760b23575958554eca0b082cff495d5ec91acb175e4c3b7b261712c7214d225150fa7ef8dcbb60e3d20d459bbeebd9834bc97221bd5050d7b69e0633bbf7343e2b2ebf8b9309fa5b017ccca8f41807ed2cb3d6e834dbad1a3a38f5962a270a6554c112d06907cb3fd6632064cec38483b1377e0011182a8d1d050000",
    ],
    [
      "ETag",
      "02X1It9d+ElQVUadxy+fug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) LIKE ?",
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
      jobId: "grouparoo-job-62-1588841517427",
    },
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
      "c5",
      "54",
      "5d4fe240147de7574cba316a566840109684b8aed66cb315b0145db2317428973ada76eaccd4c418fffbce4ca12d5934fbb4fbd6de73ef39a7f7a3af35848c47922c8d3e3216247cca80bd7c7aa00be348212070a890cbdb2fc7d667e77e658e6f6651eb72f8d39eb9d783419e457435c7711a419dd38c05c0fbd3492364344b31a3b42e09eb27ad7ab3d3ebf5dacd4eb3db6e75f35a0ed1ca21c9a362b81722e57dd3dcf86884948611e094f04640e3226e3eb7cc94d107080437b7654da9c4cd8f854f231a60416832984e721319073687189348d928ab978bafdbf40d82e34628b39f49003808689608652da70968b22261c634b9647a954119d69e8bd74ac098588e75eea1f3d174e81df8385674fe21c21ccde70c78160974e98eae909f4af57bcc81fbe8f6bbe55a32c2e88a4430274b1f0dd0293a1b5e20e48c6e2df7c097b143e4d83f2c74aa8d69d125acb024bcc042f2888a1d85e5415bcf510017459904d79db6770cd95867bd152a29239411a1bfce1e7a967b76eed937566943b6da8110072f9327d5ec158e3894d598e11804b02bba0445311e4d6ccf1e0dcf9c9241776fbcc9e432ed5761b6fca62a9bf792c2d6076b58e45165f3a46d54b0b7a39d2c3738ca76d03cafc346738ba3b683ed7fbadb6b76f6de31b87ebaab55e80d79386b63c6f5d47267aa56630a7161050c92a014fc704b4aca1cfe8bff824cdf5ca9aa90875ae87321c35c908097ea01039deb91389fc59ab0dbee760a4259c8c49f19bdd6f1260392e56e7c4b3cab08036394b9fa54ab172eedf0dc3949e408e40fb258df1838c7a1d69826b20b1cf02202a4b71a15e344be8f4882d41620df9b8dadb95e04ff087dc34b89889336d2b3ed2335d9cdf3be7ad937b626a92d56cfa472f8effbfc974e373b78570e4a68d98bd1d0d2bdafbdd57e03df9a24f9aa060000",
    ],
    [
      "ETag",
      "FW93E+Lhf/PVYl2FNXIYRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db6e82300000d07fe9b31ae5a6dd638518a94e9d808317529a2a5aa4d0960135fbf7999d3f382f4028654ae55a7056830f30120bcee80c8b151a4fb439984e97e28ec9833b38f05c6f1049410a7385f3c8d962ac5c54a5268961793b75a7275b181fd78b9b3dc0d57eeca68fc5b9276578a06e162f2fbb1fcd8965fab8a469b3defba8e5b62eeb4b15672a3aaec726b64c2ebfb7b832ed14cd93cf65927a301ad67e2dbeecf35165add83cc4463e293af3ded90516724299ca3ed4dccce9cdab43028b6b1f49aa0230016c68ee92a9fcfe9ed92e8413f0dfccf5d8b0f71531229904bf7f3d5f35db05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-63-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b40107df75720fa1adbf8167024ab716dd252d9b8c538515555645906b209b0845d5c4591ffbdbbe00bd45194379839e7cc99d9d97d6d298afa44d240bd52549f44cf05e42f9f1ea9af5ec80c7014c9ccf3f7876d9c7c41d859baa615ad8c31c0603a99542852b2194ab218da8c16390676b55977a29c1619ca296d0bc1f6e5a0dd1b198631ec8d7afab0af575c0671b820e9935478e03c6357ddeec14727a2348a01658475304d8ef1eeb6dfcd72fa0898b36eb36c575462ddf70b7f8e29469cd074b25957260a06b9070922b1b4716207fe7553be4350d289047a4b30208c69917269ad92c1340d4954e4a5b8507a1541112e3d1f7f6b01756d2ecc99ab601a1749eaa528810b25401c79fc2503e5c6592d957b0e8cdf772cfb66e52ca7aeb5b2bdf5ec9bb99c7666abc56669af95bb6fa6632a1cf9319412ca44b92eff6cf1531a2b8b064287a4a53557666b8644763f4eeb8d933c4a4811618ec11ee6e9da25ea19dad80f7d1d87c660e4871af8bee1eb2334f0353c1ec230f001d5154a67151fa53445be16f60697630fe37ee00d61a079c6b8af794168f40668e40b21aceed9bb632f3807c4614e584619d90f5b9d39e6d4353debc6b34d736ece4fadffcdc919faceb104d87536f64cb0ea630a5111f379d56873488deee5b9d41b7b6f82670d6439a1c254b90496ed9ace74e65ab7351b6223171021fcb27e963b19a298c1898d7271b41cf2250de439aaf67459efb7dcaf1f07101388df479fa7760450ae4bd9cbd9ba34ebb8621d1ba3a88eb28aaa6bd7b1ecaf6a2db97b5be616c5c51b3adb7d58cdc4b41ec4845943abf5ffd79f56ad862a6ef8de9efa73633abf24b7ccc98c0321e490e253d50f6cba2456e90f3c60027e784e2443bc28c7fa8c8bb0b874989daa979b2baf20a9267f10d4479a6e1c040531e7e788de7874409c3d29b2162490f2c32caaa7",
      "a51ae4ae61a9a8d92969122eee81bd3fc45d6bd7fa0751f610ff17060000",
    ],
    [
      "ETag",
      "qJhvlmBacRMTEIgO89ee3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "8230147de75798ee5513ddfcda121fd0b98d449d437c5816632a5c1457286b8b0b31fef7b5059517179299ec85f6de736e4fee6d0f7ba352419f41e4a1870a5a05ebaf04587ab306f1a63636f084082e9798461c5055b141e0b562d73d73b04befc93c7a9f9921581bfb3589cd5e2f637177032196bcbd8c64ec07403c2ee30f1d57f2bcc6221c823ad1a52409a3a50eab6758a4b186678e6d4d9e8b48483d8d4ce6a391d91f0d510e1daa97453c2cf0521ff93709bd2e8c5c0c6de9ca061f18442e9cbb8e19dd822b2c3d5e8ec398408dd384b9c073115598c16b469318334a6b32556bdfd51aad6eb7db6cb41a9de66de74827d4c522a091aa98cfd0495f5081894dbfd588513bbb039685d9c48fa3407ee1128a1392d04e15071e3ae50ed55f88d6c469370bdc7cb7300a95a555e5a4fc80c0f29fd4e5956cb07ce1e5b4f3677225711cd2241225a59f46afe6151b976e28dbf4a3e90caf25cb85f442495dc71a0f678e399e5e1497dfc5d904fd54009f322a3dc6413bab516f765b9d761d1d9d3aa0ca89421955b00474dac5f28ff5120899f331e1601c8c1f76c434c81d050000",
    ],
    [
      "ETag",
      "0dACvy9lUnYSAmeIhROupA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ?",
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
      jobId: "grouparoo-job-64-1588841517427",
    },
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
      "0002ffad54616f9b3010fd9e5f81982a75d292104280548aba28a12b5a4a5a425a4dd394d860a85bc01443a7aaca7f9f0d8480d255d5b46f707eefddbb3bfb5e3b82203ee2d813cf0411e2e02947e9cba70702c52ffc046520e027408dc1158c9f24055dce64cb7ec48aa7dd4c26250a176c0aa224445d4af2d445f46cbdea0529c9139012d265825d55e90e46baae2b83d1405364ade45214fa0b1c3f7285fb2c4be859bfbff7d10b08094204124c7b2e89ea78ff59ee272979406e46fbedb47d9689f6df4f7c1e12176498c493f5aa349153946e500470c86d1cd81efcda96ef6110f502867ec62e02ae4bf238e3d64a1997c43e0ef2b410674aaf2cc8c285e7fab7111057c6c29839c26cb9b69cd32d88b8dcf6b300a8b0d9a488e661265cd8cb2b619bb0ecf78022ba15ee2e0ddb609194f838441bec6d8589702e4cadb9202c9677867d5aa399d4c2fc6e08e785bd22b5876886e3c2a00360881ab6d869d554f38d79d6125c04644cbd826d344905035d1a431f6aaeaf0f47d09710843ad44660082577ac20c583083415329ebbe48398c48a3f907d15aab23c76254d51e591aff888f1a10ba0227baaae4b70282b62a5b0abeb7153043234c7342114576d1767b631758c8d79b1b10c636ecc0fe5ff4ef111face3619d8b1d7d68cb19aadf2019bc0bc2cb6dda8560732d6d36671ef75f1a88024c584992aae836939863d9d39e66dc306bb9b0b1400f765f5c46fa70f428a0e6c9082086528bd221e9fa578bd5c998eb9b4a68b834271ddaef748ca603f6bb3879a9a6ace4bd2be19e5d0ca28b7a9d6a36855d356b90561fe86cc731516072d8dce1b6affe26ee5d8a6f5ed3fd83b014972f2178bd5d7af4e435f64bba6b226deac0dfb07e71667fcc4463e4a51ec1e327ee0b5716279fc8155cae0fbc5c6196cb7d5f969c6c2ece1bbf490bd78397c0de0a89c4625a88df4b1be1764c4343b42a8d270bc471c2d379e0b4528cef6bd28975cd9c85dcb52deb053d0389cbd43ab1ae0aeb3ebfc011b75f09ba1060000",
    ],
    [
      "ETag",
      "a6naMbnq04eHC2NRki4d7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff4d51d14e8330147de72b487d54125936474cf6e0147566593674fa60c8d2c10561c0656dd16c0bff6e5b60e3a5ed39e7dede9ed393619a64971421b937c93689f715b0c3550c62a50e1ef02a135c6e25161cc88daa06416355bdbb3e8eb3afcf8a3f2d12a72cd2fdf312df56934953c5831fc8a9ac3b4924719440167289bf35365b5e6b05cd41ddb8d9303d50dfd06ae2506a6db6f8705f5caf2fe5186a69b19ecf1fa67397b452ad775faeb57e4a8a5b0f22605004707950c9308540ccb4734ef332038b63c502e0ed10d5d8c831c3aaa40cd192947537b4ec91e338437b648f878371579e6140458285ea58bf93f37c8182661efe29f7c46ee2610d6cc2e8a220512f9f7e4252fa55cd0372a6eaf6e41b1df22fc3a607017cc9507ae1a01ddc922e8a475456854a42b00a341d50f95baf896839a336fe01b79fca9918020000",
    ],
    [
      "ETag",
      "k+z7lWVusDNi8pnjqFPoJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1f8b08000000000002ff1dcfc97282300000d07fc9599d161a20bd011236714959d40b93c16001951032b274faef75fafee0fd005a14acef73d936ec013ec14415b42a56616b58d3a1e4fb66d3f65ae26fabf5816b8a2c873118e0b15b7212cee3345bf44d1abbdca5b422772786c8d133e534a9697a3cc3dd0906eaa36bd35a7a5f9b182382fd2d2a621e36520b6fa47e52a60757035f027bad7e8f18b241a1381c3ea8c1ce8486f83d4a6e773d13d114f9d6d5a5e628dd72ef3be82292cc4c6d1bd62835d14c76b5ee0689373e21e4887562e9996001d8c82bc1fabc7acd5488d002fc37733971f6ba5a8c0a26c0ef1f90380cca05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:56 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-65-1588841517427",
    },
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
      "8d",
      "54",
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "9e5f81d8d7e6d5f0482a456b96d09529211b9056db3451db18ea96608a4dbba8ca7f9f0d79c05255fd06f79e73eeb9d7d77e6d298afa48d250bd505448e2a702e79b4f0f14aa673283398865660e6f35f86d96267f43afbf71f1af2f6490bf8cc7158a946c06d65982db8c1639c2ec62e575e29c1619c8296d0bc1b6a1b7fbfa7038d4fa7adfd4cecd8acb7012cd49fa2815ee39cfd845b7bbf7d189298d130c32c23a88ae0ff1eef37937cbe903469c759b65bba212ebbe5ff8734211e084a6e39557992818ce03bc062491368eec105e36e53b04ac3bb1403f13840142b448b9b456c9209a46242ef2525c28bd8aa008979e0fbfb580ea59736bea2b8826c53a0d52b0c6674a083808f826c3ca95bb5c28771c337ed7b19daba5bb98f8f6d209bce9b5b59874a6cbf96ae178caedb5e55a0a0730c1a58432562ecb3f47fc94c6caa2a1d0216969cd97d99a2191dd8dd37ee3240f125244986378070bcc9e01fac3de0846d044d170a0c3a887211c42530703d843230d6b21c4a0ae503aabf820a5a9760e74786ef682de101b8166f65100477820a4b1313240684410aa3bf6f6d00bca31e07846584619d90d5b9dbad6c4b702fb2a702c6b66cd8eadbfe4e4047debda02ecbb2b672a58f53145a048f8ac6ab439a446f7f25cea8dbd37c19306b29c5061aa5c02dbf12d7732f5ed9b9a0db191731c03b4f19ee44e462061f8c806b9385a8ef3050de539aace6451efb7dcafef7b101388df079fc7760450ae4bd9cbc9ba34ebf8621d1ba3a88eb28aaa9eefdace57b596dcbe2d730392e20d9de75d58cdc4b4eec5845943abf5ffd79f56ad862a6ef8ce9efa6365b93f25b7ccc98c8b239ce3141dab7e60d325",
      "b14a7fe00113f0fd732219e24539d4675c84c5a543ec58bddc5c79054935f9bda069e8036d2f2888393f451886be479c3c29b2165ee394ef67513d2dd520b70d4b45cd4e499370710f9cdd216e5bdbd63f23028eb417060000",
    ],
    [
      "ETag",
      "LbW4bJDnlxdS1yReZBi3rw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4d",
      "4f",
      "c2",
      "40",
      "10bdf75790f5284490cf98784045c5948a6d3d1843c8d24ea1da76eaee564308ffdddd6d815e344d24f1d2dd99f7665f66765f3746ad46dec3c4271735b208971f19b0f5c912c493dad8c0b34870b9a498702075c50641978aedd03b614fce4edbd8762cdf7cf05eceacc5d3e565cee2de0a622a791b19c9380821f2b98c5f755c2bf21a4b680cea440fa32c4ee63aac1f60b14e35ecb8f6d8ba2b2331fa1ab19e4d7378658e48016deb3f8bf854d0b93ef26f127a9d19851879c3850d0130483c38749d327c034f8cf578398dd3081a1c33e6012f4454610e2f19662965880d996af4ba8d56773018745add56bf73dedfd123f4a808315115cf0ed9eb0b1434b2f14b8d98f4f23b6079984f7c370a12942ea13c21097daae2d027fbdcb6fe0b716cb9bd4e895bec6646a9b2b2aa9c54104630ff277579252b2a5f7835ede2991c499cc69825a2a2f4adf9383c62e3d20d559bbe19baa363c97221bd5051d71d4f468e3b9c4c7f1497dfd9c104576b017cca507a8c837656abd91974fbbd26d939f51a95138532aa6019e8b447e51feb3e143217d08883b135be015d65232d1d050000",
    ],
    [
      "ETag",
      "SaGtRM/+3o3SNdLJcY/NbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) LIKE ?",
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
      jobId: "grouparoo-job-66-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffad54616f9b3010fd9e5f81982a75d292104280568aba28a11d5a4a3a42524dd3941862a85bc0149b566995ff3e1b0801a5abaa69dfe0fcdebb7777f6bdb604417c40f1463c174417058f194cb79feeb12b7ee1279082809fbc5c5fd964fe387b565e16cbe59602e932bc1b0d87050ae56c02a224846d82b3d483e47c31ef0429ce129062dc66826d556df706baae2bbd414f5364ade01218fa53143f70853b4a1372deedee7d74028c83108204918e87a32ade7d92bb498aefa14749b799b6cb3291eefb892f42ec018a703c5ccc0b131981e90a460085dcc681bd71bf36e53b08449d80a19f900781e7e12ca6dc5a21e3e1d8474196e6e24ce995055938f75cfdd602e2dc981a634718cf169673ba0611975b7f16001156ab14922ca4c2a53dbb16d609cb7e0708246be1f69b611b2c92621f857085366b61285c08236b2208d3d9ad619f5668263535bf1bc2456e2f4fbd8184a23837e8003784355becb46caaf9c63c2b092e0228532f612b4d52414f97ce5cdfd53c5fef0f5c5f82aeabbbda00f45dc93b53a0b27121a82b509ebbe08318c78adf937dd55565f9cc9334459507bee243c6773de02af246d575c9edcb8a582aecaa7abc14020a27882498a0b2ede2d836468eb1322f5796614c8cc9a1fce7141da16f6d93811d7b618d19abde2a1fb0094c8a629b8d6a7480b29ed68b7baf8b47052429c2cc547e1d4ccb31ecd1d83197351bec6e4e6100bcedfc91df4e1f84041ed8200511a430bdc61b3e4bf16636371d73668da60785fcbaddec9184c17e55660f35d5d59c6dd2bc19c5d08a28b7a956a36854d3545982307b43e6a90c8bbd8646eb0db57f7137776cd3bafa0ff64e40929cfcc562f9f5bb55d317d9ae29ad893f1686fd9373f3337e62431fa630f60e193ff0da38b138fec02a65f0fd62e30cb6dbaafc84b2307bf81e3964cf5f0e5f03282aa6510a6a5a5f95f6828c98d26384a25588a3e5c673c108c674df8b62c9158ddc352c65353b398dc3d93bb4ca01ee5abbd61f1d813174a1060000",
    ],
    [
      "ETag",
      "zMGRsSqOw4zUVVyta0FlhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff4d51d16e8230147de72b48f73a926144c9121f86219b09711367f6b01053e18a30e0b2b66c23867f5f5b407d697bceb9b7b7e7f46c9826f9caaa843c9ae490a5df0db0f62e05b15187107853082eb71a2b0ee45e5583a0a9aa3e95be9d3a8dc3f276badc16feabf791fe6d168bbe8ac72728a9ac3b4b24f1318322e1127f6a6c0ebcd62a5a82ba71bf677aa0be61d0445b6b6db57ef79ffdf0562a31d1d27a17044f5ee09341eaf41ec9b5d34fc9f110c2111854315c1f5433cc21162bed9cd3b22ec0e2d8b018f8304435f672cab0a92943b42465cd6696edb8ae3bb51d7b3e9dccc7f202632a32ac54c76e4b2ef3050a5a84f8abdc13bb8f87f5b00f638c821c6ff2b94d484a3faa79422e54379c226344d17598d70ae06f0ca5170edac10319a358a2b22a54128235a0e998cadf7ac9c4c0199df10fe429b4b518020000",
    ],
    [
      "ETag",
      "hmE1g5u5rjy4CSlEOBWgxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b5283300000d0bb64dd76caaf107704111195f2b7dd64f844406ac89040491def6ec77783f703caba269c63310e848207204b15eeea5d305a48464dcaca93f9c5f5620dfb7d986a4fa59ebb73bb3d6f999d32ede45be3b1d72552af68597cc9687c599146dbacf22aaa167e7a53fdce20b629f1877814e44d8a58513fa3a52aaa20e661c6ed3eaf2d37d7311c15177e6364ce46d25ee660cc92dc1b55e83edbaf398d45551fe47b2431225ce9cec31e4dcd0b448672148197185ae6ad647686ceb9bace7a6828d5c1069095f513e1b8bfcf3403c20df86f622119b95f1129273281df3ffce5611205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-67-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "147dcfaf40ecb5f92685548ad628a12b52425a20ada669a2c618ea8e608a4db7aeca7f9f6d0881a5aafa86ef3de7dc73af2f7eeb288afa0ba7a17aa1a8018e9f0b94bf7e7922817a263288815864bce71b6f1bc3eb3fbab3fa6bddddcf1d571fddce66250a4b3605bb2c415d4a8a1c227ab1757b714e8a0ce48474b960f75cef0e27866168c3c950d7467ac9a528895638fd25141e19cbe845bf7ff0d18b09891304324c7b90ecea78ff65d4cf72f28420a3fd76d93eaf44fb1f17fe9a10081826e96ceb96260a8a721fed004e848d233b0c2edbf23d0c76bd98a35f3044004252a44c582b652049231c17b914e74a6f3cc8c3d2737d6c0454d75c990b4f81242976a99f821d3a5342c080cf5e33a45c399bb5f2c010650f3dcbbeda38ebb9676d6cdf5d5c9beb796fb1596dd7b6abdc5f9b8ea9301024484a2833e5529e6c7e90c664d190ebe0545af344b6618867ab715aefdc642d2144b8398a2a98af0fcec1d0184c8328d061648c27413440416004fa048c83019c6a480b03049a0ad259c9072949cfa70104236de28fa368e46b9371e84f756dc08f21186bc6241a80915ab1f7752f304780a125a619a1b81ab6ba70ccb967fad6956f9be6d25c1e5bff9de313f4bd6371b0e76ced056735c714812261cbb2d1f6905add8b7b6936f6d1044f1ac8724cb829b90496ed99ce7ce159770d1b7c23572806f0d57d163b198184a2231be4fc6a19cad72414f7a8daf375b35fb95f370710e5881fb5cf633b1c28d645f672b22eed3a1e5fc7d628caab2ca3aaeb3996fd4d6d24f7efcbdc81a47847e7a50aab199fd6239f306d6975fefffad969d450f91f5ed9536fb7a6f35d70654e641c14a11ca5f058f5139b2e8865fa130f18871f9e13c1e02f4a5d9f321ee63f1da4c7ea7273c52f88cbc91f04757d",
      "3ad40e829c98b3138431d06ac4c993226aa11d4ad96116e5d3520e72dfb25434ec489a80f3ffc0ae2e71dfd977fe01a560e23d17060000",
    ],
    [
      "ETag",
      "TqPTUgcHx7RLzIVWARS72Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4ec230147ddf5790fa0a891818c48487a1a8338030863e1842ca7607c36e1d6da741c2bfdb7603f6825922892f6bef3de7f6e4def66c67542ae8238c7d745b418b70b949816daf9620c66ae3004f89e0724968cc0155151b045e2a766c8fa38df33d7d85b7c47b166697248bb1d5e9642ceead20c292b793918c831088cf65fcaee34a9ed7588c2350277a94a4513cd761f5048b6da2e189ebd8c3c72212515f23c369bf6f75fb3d9443fbea79111f0b3cd747fe4d42af332317436bba70200006b107a7ae1346d7e0095b8f97e3282150e334651ef05c441566f092d134c18cd29a4cd5cc56adde6cb7db8d7ab3de6adcb40e74423d2c421aab8ae9041df505159838f44b8d1899d91db02ccc267e18050a0a97509c90843e5571e8a3636e5ffd85680f5db351e0e6bb9951a82cad2a27158404e6ffa42eaf6485e50b2fa79d3f930b89e388a6b12829fdd07fb12ed8b87443d9a6ef2db77729592ea4174aeabaf6a03771adc1e8acb8fcce4e26e86e05f011a3d2631cb4b3ead78d76b3655ea38353efa872a25046152c059df6b0fc633d8542e6024c38187be307d112e0b51d050000",
    ],
    [
      "ETag",
      "nIQmqRzUVeWpcJt6BlpbQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ?",
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
      jobId: "grouparoo-job-68-1588841517427",
    },
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
      "cd",
      "54",
      "5d",
      "6f",
      "da",
      "30",
      "14",
      "7de75758d94b2b1508a805c6843a5ab22d1b5f4d42abb6aac00d37a9db244e6d870955fdef731c4882c6ba69dac3241ec83df79e73ae7daf5f2a08694f245a6a5da4dd13ff3901b67ef748efb5a3140181fd1431a2fe6a387d7fe6ac46ece6ab39e8afafbe7bfd5e2fcb22aa9ae3300ea0ca69c25ce0dd995df3194d62cc28ad4ac26aab536d9c743a9de3c649a37ddc6c67b51c026f48a2a794e141889877ebf5ad8f9a4fa91f008e09afb934cce3f555b31e33fa08aee0f55dd9ba54e2f5b7854f03ea624168d49bd9998984039b43884990da28aa97f71f77e96b0487355f66af880bd875691289d45a46e3d2c8237ec214b9647a914119569ef3cf5240b38da171eea0f3c96cec1c2c7098d22d0e11e6683e67c09340a04fd6648416b1547fc01cf8025d7d312c434618f5480073b25ca01e3a45fdf100a1e1e4cab00e165c48d39267687e33d0a9f2a67497e061c939c042528992a314cb82a6ba4a015ce46512dc1cb6b9e79eb54dd66bae1233421911aa4173ec1856ffdc312f8dc2863ced21f8d85ddbcfe9797b38e0505463864310c046740929c574629b8e3919f78705833ac0e93693cbb4dbdc6cd15399cd59c7b0d3b08245164d6db68eb512f67ab497e51207c91e9ad526ac3576382a7bd8fec69d638e0cdbe98fa6ffc061536fea55bd2917c2d13b5d5d97bf9aaeeb37bf30bef9775729496a72a73686b58b99615da7b50a4b110b3c6010b9858937a7a7a0cce03f783264fa7681d30ab9c3b9be1c7c41b8202e2fd45d062ad7216176471bc276a775dcda12ca42267ece68eb8d6d0644cbfdf88e78521206c628b3d41697975fdae1997312c96b21cb0bf51ae4b35deeed79170a8173ec2b0f638a422cdc0712f988133f92d20c904719f292c84d",
      "ebb3c7408530f393102281d289e25d940f540dd9491c53266059b0c884ec1db11dcb1c7f3efcb0f93cbb760c5b3e4e02dd36ba9dc69db63314aadbf22696de96dfb4fc66d3ff69dbdbddb82b0648288783c9d850335179adfc000156d3775d070000",
    ],
    [
      "ETag",
      "EnAvLP9BTvMrZJIDAyWwfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cb",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "7f",
      "c9",
      "da3a158a4077a6e2a818098f1a75c340b80d5685181e4a3afdf73a3d7f707e50c639344ddad667a8d03b1a32c31df3b15f3b780861e1742aca0aaf8f4b3f4fdef6f134d2867d34fdf836a1665890e5ab0c6adbd03d2536a4c99a1d77b79d57aca20f26aed758de03192427ca57e29b0cd97d665de4644b2ccdf46ddd362c5a5d6deab93513a4cf2a2e2f3cac86f972677d4daa0dd93b1e1626681f166cde8978dac539498badc265a0e0e58c3926177773385047978f4079255e17827e6a37e720d008c1439e1434e9e939332dd71da1ff66da0e129e570c9902857eff00f402f41505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-69-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6f9b30147dcfaf40ecb509d09086548ad628212b5a4236425a4dd3448d31d42d608a4db7aeca7f9f6df2014b55f50dee3de7dc73afaffdda5114f511e7917aa9a8214e9e2a54be7c7a20a17a263288814464c8dfd97c90cffee8a9f515985a840a23bb4dc6e31a85259b82ac48519792aa84885e6ed6bda42455014a42ba5cb07b31ea1a03cbb24c63600ccdf361cda5288d17387f140af78c15f452d3f63e7a0921498a4081690f92ec10d79ecfb5a2240f0832aab5cb6abc12d5de2ffc392510304cf2f1665d9ba8282a0394019c0a1b4776145eb5e57b1864bd84a39f3144004252e54c58ab6520c9639c54a514e74aaf3cc8c3d2f3e1b71150d7f6c29efa0a246995e5410e3274a644808180bd1448997baba572c71065773dc79dafbce5c477566eb09e5edbcb496fba5a6c96ee5ab9bdb63d5b61204c919450c6ca95fc73f98f34268b465c07e7d29a2fb20d433cbb1ba7f3c6491e2484083747d10e160cf50b6058fa288cc3218cadfe208c75148656381c807ea8c39189cc2844a0a9209dd57c90931c5846649a400fcc3e428109066160c1fe4500f5be05467004ad0b4bddb1b7875e60890043334c0b42f16ed8ead4b327be1d38f3c0b5ed993d3bb6febbc427e85bcfe160dfdbb853ce6a8e290655ca6675a3ed21b5ba17e7d26cecbd099e34509498705372091cd7b7bdc9d4776e1a36f8462e5002e0cbfa49ec640c528a8e6c50f2a365a85c92489ca3ea4e96cd7ee57e7ddb832847fc3cf83cb6c381625d642f27ebd2aee3f3756c8da23eca3aaaae7dcf71bfa88de4f66d991b90566fe83cefc26ac1a775cf274c5b5a9dffbf7e751a35547ec377f6d4ef1bdbfb21b83227321e8a51897278acfa814d17c43afd81078cc3f7cf8960f017e5509f321ee6970ed26375b9b9e20ae27af27bc1a135b2fa7b414e2cd9096264e8c61e71f2a4885a284339dbcfa27e5aea416e5b96aa861d4913707e0fdcdd216e3bdbce3fa3750dec17060000",
    ],
    [
      "ETag",
      "ozDF5nDx0l8Ka4/dep1mWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb",
      "6ec23010bce72b907b058954bc5a894368a145e21902970a21936c20d48953db694511ff5edb09900b55a422f5127b77663ddab52707a35442ef41e4a1c7125a079b8f04d8fe6e0362aa3636f084082e9798461c5059b141e08d62ef60b720e3d8ea59df64dbf5eded2271cc69bb9db2b8bb85104bde414632f603201e97f19b8e4b595e63110e419de8529284d14a87e50b2cf6b186678edd1fbde491907a1a19cd0703ab33e8a20c3a96af8b7858e0953ef26f127a5d1a9918dad1b50d3e30885cb8741d33ba0357f4f578390e6302154e13e602cf4454610a6f184d62cc28adc854a5f15031ebad56ab66d6cd66edbe79a213ea6211d04855cc67e8ac2fa8c0c4a65f6ac4a891de014bc374e2a751203f7709f90949e85315071e3ae78ee55f88fd91d3a8e5b8d96e69e42a0babca49f90181d53fa9cb2bd962f9c28b6967cfe446e238a449240a4af70663eb868d4b37146dfad972bab792e5427aa1a0aed31f76678e359c5c1597dfe5c5049dbd003e61547a8c83769659adb5eacd46159d9cfa4495138532aa6009e8b48be51feb351032e763c2c1381a3f54d168d81d050000",
    ],
    [
      "ETag",
      "jejVlOpAFAzlhEfRhVuT1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:52:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) LIKE ?",
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
      jobId: "grouparoo-job-70-1588841517427",
    },
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
      "00000002ffcd545d4fdb30147defafb0b21790d6a609652d9d2ad64136b2b52924298c21d41ac70986240eb6838410ff7d8ed326e9d4b169dac3de92fb71ceb9d7f7dee71600da3d49036d08b41b123de4983dbdb9a337dadbc283058c94c7f972ab0fdc93c437c937171964cf4ec767a35119455436874916e336a73943980fe75e276234cf20a3b42d01dbfd6edbd81f0c063d63dfe8f7cc7e99cb711c4e487a5f20dc0a91f1a1aeaf7574224aa318c38cf00ea24965d71f4d3d63f40e23c1f54d5a5d3271fd75e2c3982228084d4773af149173cc163881242e64d4d9c1cd874df80e81492792d18f04618810cd5351482b61104d4312e54c814ba467699466a5b9fa6d1834cf9a58473e389acd1d7f670993026eb90b20078b05c33c8f05f8e4cea6609949f65bc8315f828b13cbb5a485d190c47841822518814330768e0198cc2e2c7767c985142d7126f6570b1c2a6d8a37c0219498c7504828d15054f84aa3ad9e52602eaa34e95c35dbdef2ceda2aeaa562c918a18c0855a0edf8963b3ef2ed73ab9621bb3dc111444fde43d1ef10c61cd7d990c1040bcca634c005c4e9ccb37d7be68c2735826ae0e93a92cbb0ab4a6c5d5313cd7fcaf046c1ca2d4a6b21f35d4f6bf85ede6e45398771be05e67165d68c0d8cd616b4bf51e7db53cbf3c7d3d37fa0d0ec9add76d7940be11be6d0d81b1abd4eb7dbfdfe0be1abafeb568352933bb512ac9dcd2df7b2c855bec2e3e210339ca25ac4abd3534396ee3f3819327cbdc04586dce18a5f0ebe205c10c46b76c4b08af54952bed10ab07f70d03b5803ca44267e8e18c8c698eb089c06dbfd1be4798318334699abb6b8b9fc520e2f9593543e0b09ced435a866bb59dbc3a62bc19cc34869702848a040b7248d0027512aa91906216520cc5354e497c74099208bf204a7021413c587a01aa80ef0f22ca34ce0a0469101e51df17cd7763eefbe5ffd7ebcf42d4f1e2701ae8ce1c0b8d636864255dbdcc4c66df94dc9af16fd9f96bdde8deb7a808452783c732c3513ad97d60ff4b936e35d070000",
    ],
    [
      "ETag",
      "bNJh/8RHmT2iXRc1i3InAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfc97282300000d07fc9591d02b2f596002d5b058aa870c9601a54140d9b2c9dfe7b9dbe3f783f20a794b52de91e5776076f60ca457d4557de43c353540c636cef61b0edd16939e3703a97d70fe5a4d97ea0bcaf87bd52b93c1aa44c8c8828eeb840dc39ed8e34937c8be152365ae5798f43c9f30ac2d1d9a8fc50f8421babaec7ad112284d5f2e69044ae536c08457a63d0a9542856a65ac4c9e859439941ad599b7d2f1d893dee6cf8691d86a5d76671908592397f6b30f2840d7d1e5c68a32e199d616ef844d589d716580036f24bc35a7279cd2459d717e0bf49ba89b3d715b3bc610df8fd030201761a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:00 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-71-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d54db6ea330107dcf5720f6b5b943a095a26d94902d5242b640da5dad56d40643dd124cb1691555f9f7b54d2eb0a9aabec1cc9c33672e9ef796a2a8cf388bd42b458538792951b1fdf644a07a213c88814478527de1e6de1b24e9160fd6c6fc998c7e4d6ec7e32a0a4b34059b3c456d4aca2244f46aed759282943928086973c2b6d16ff775d334b5bede37b4815161294ae305ce9e05c3236339bdea760f3a3a0921498a408e6927249ba3bdfb3ae8e605794221a3dd66da2ecf44bb9f27fe9e9210304cb2f1daab4494141501da009c0a19277404af9bf41d0c369d8447bfe21081302465c684b48a2624598c93b290e49ce99d1bb9596a3efed60caa672daca9af84242d375990810dba5022c040c0b63952e6ee6aa93c3044d943c776e62b7739f1ed951378d31b6b39e94c578bf5d2f194fb1bcbb51406608a24853256aee59fc37fa4309934e23c3893d27ce1ad09e2de7d3bed0f2679a410245c1c45fbb0c0e88d40dfec5dc2181a616c0e7518f710842634743084bdf052435a0411a8334865151e6424038636324c0d0686110d032deaf782cb11d2037da80f34304426d0a0ba47ef8eb58405020ccd30cd09c5fb66ab53d79af85660cf03c7b266d6ec54fa5b81cfa2ef5d9b07fbeeda997254bd4d31285336ab0a6d36a951bd984bbdb0cf3a7856405e60c245c925b01ddf722753dfbeabc9e01bb9400908b7de8bd8c918a4149dd0a0e0a365a8589248cc517526cb7abd72bf7e1e82288ff873d4792a87078a7591b59cad4b338fcfd7b1d18a6a949555f57cd7767ea835e7ee639a3b90961ff0bceecd6acebbf5c83b4c1b5cadffbffeb66a3954fec2f7f2d4dbb5e5fe1658e9131e17c5a8405978cafa854d17c0cafd8503c6c30fe74420f84539e6a78c9bf9a30be929bbdc5cf10471d5f903a1d91b18fd03210716ec3c42eb1d539e9d14910b6d50c60ebda84e4bd5c85d435259932361229cbf03673fc45d6bd7fa07ab8a07a417060000",
    ],
    [
      "ETag",
      "l5LRpSwbolyi2U7Fko6XAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5545d4fc230147ddfaf20f5151266f8d2c487a9a8c4810ae3c91052b6bb31ec7667db4988e1bfdb7643f6a25922892f6bef3de7f6e4def6ecd36a34c85b9c06e4b2415671f49e03df9d45205ff4660a226752a825c35400696a36481a19368eeddee671e2b2d9d6c1b61dcd5717dde8eaaa60097f0d0955bc4f15a9388c810542c5af266e947983a534017da28f2c4fd2a5099b4758ee3203cfbce968725f45120c0c3299bbae73ed0e4909ed9b3f8b0454d2a539f26f12665d58a518d9e06a0a2170487d38769d71dc802f4766bc8226198396c09cfb204a115d58c011c73ca31cb1a552adbeddb2bb83c1a06377ed7ee7bc7fa033f4a98c31d515f319f9d69728299be2568f98f48a3be045584cfc300a12562ea13a21057de8e23820dfb97df317e268e2f53a156eb95b5895cadaaa6a5261cc60f94feaea4ad654bdf07adae5333991384d304f654de93bf7c93961e3ca0d759bbe75bce1a96485545ea8a9eb8dc6c399e78c9f7f1457dfc5d104d73b09e299a3f29800e32cbbdd1974fbbd363938f506b513a536aae43998b44fd51feb21962a175226c0da5b5fa74fb08c1d050000",
    ],
    [
      "ETag",
      "boM16jKNLlSwAo01gUb95g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) LIKE ?",
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
      jobId: "grouparoo-job-72-1588841517427",
    },
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
      "c5",
      "54",
      "61",
      "4fdb3010fdde5f6165426c126dd62a4057a9621d0488280db429884da871936b302471b09d4a08f1df673b6d924a054dd3a47d8befddbdf7ecbbcb6b0321e389a4a1d143c69c44cf39b0974f8f746eec2904048e14e258df9283d03597d432cf3a67347fb8f8695ef7fb4516d1d51c27590c4d4e731600ef4d27ad88d13cc38cd2a6246c1e769aedfd6eb76bb5f7db8756e7b0a8e5102f86247d520c0f4264bc679a6b1fad88d228069c11de0a6852c6cd65c7cc187d8440707353d6944adcfc58f828a6011684a6fde9a43091736033483089958daa3a9c7fdfa46f119cb42299bd2401e020a0792a94b58226a0e9824439d3e492e9550665587b2e8fb58031b187f6b1878edde9c8fbece344d1f95f10e6683663c0f358a0d3b17b89fc4caa3f600edc47b7e7f6d896114617248619097dd4474768303a4168e8dedae31ad1d0b9b0d19136a785435860497a8285e412354b0a2b828eeea5002eca3209ae5edbd9d2686395f556aa648c504684bea133f2ecf1e0d8736eecca867cee21443878993cab075fe09843558d194e4000bba421288a2b77e2788e3b1a0c2b06fd8257eb4c2ed37e9566ab3bd5d9bc970c362eac61514495cd03cba8616f7b5b596e709c6fa159aec2467b83a3b185ed6fdc9d0eddc1bff1b7d36eed5b3bef985c7ddd376a02865ca09539e37a6a8fef54adc6143286053048834af2c349a9280bf80ffe0f327dbdadaa422e6ca9cf850c7341025ea9070c74ae4792a21f2bc26edbfada5913ca4226b664b4bbeb0c48c3edf886785e1306c6281beb95ad6fbab4c30be724954d903fca728413e01c475a639aca57e080e731203dd9a86c28f27d4452a42601f9dedd953d5b0d83bf877ee01085345755bac13d54b4777dda2d8ebbc64643b5d3fac6d4fe01efdbfd0f86d713795fb54d68f5137764eb4e34de1abf0119f8f992c0060000",
    ],
    [
      "ETag",
      "I49m6dO/vo4/G2GouhKZ/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fd9e7c84494aebe5192a06e191bf46567c90a55f7ebeaf4df9be9f983f303489ad261c06353d21abc01468ef23edd5b0d54999f8dfa8bb24d69ddb2330bcd4c7a1048eaca12b0dcdcd3938e041719f030108bab9062bd6a9903e9b5d6bff38fd087de8c0fb7eaa8c7ccae6e6864f7685e33af082228c6ddd6642830b55a458aad26fa671fafe1ba4c0be4dfc55c26a4c7a35b07bc7459542e72f84b6948f3e66badfde53a3d8e49cc796e9225e539cf1df1b1455d4ef96e2de174ca5bb3e40d11811da06b5bf474c0c5732688b2bc03ff4d3cb2963eaf2a253dedc1ef1f66349dcd05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-73-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "147dcfaf40ecb50949480aa914ad514257a4842c40da4dd3448d63a85bc0149b765d95ff3edbe40396aaea1bdc7bceb9e75e5ffbada528ea23ce36ea85a286387e2a51f1fae58184ea99c820066291f1cc3ffeb56d2fb51f617293e67f57b6b14a56e37185c2924d419a27a84d495940442fd65e272e489983829036176c1b7abb37344d73d01bf68c41dfa8b81425d11c678f42e19eb19c5e68dade472726244e10c831ed40921ee2da735fcb0bf28020a35ab3acc62b51ede3c25f130201c3241bafbdca44495111a014e044d838b237e16553be8341da8939fa194304202465c684b54a06922cc271594871aef4c6833c2c3d1f7e6b01d5b3e6d6d4572049ca340b3290a23365031808d86b8e942b77b950ee18a2ecae633b574b7731f1eda51378d36b6b31e94c97f3f5c2f194db6bcbb51406c204490965ac5cca3f87ff4863b2e886ebe04c5af345b666886777e3b4df39c9838410e1e628dac102a37b0e7a66771446a10123531f86511785a1191a43a0875d381aa0c12644a0ae209d557c9091acab6f2080e746108d603f1898a61e80e1500f4ca3ab8f467db307425dddb1b7875e60810043334c7342f16ed8ead4b526be15d857816359336b766cfda5c027e85bd7e660df5d3b53ceaa8f290265c26655a3cd2135ba17e7526feca3099e34901798705372096cc7b7dcc9d4b76f6a36f846ce510ce0abf7247632020945473628f8d132542cc8469ca3ea4c16f57ee57e7ddf832847fc3af83cb6c381625d642f27ebd2ace3f3756c8ca23aca2aaa7abe6b3bdfd45a72fbbecc0d48ca77749e776135e7d3bae713a60dadd6ff5fbf5bb51a2abfe13b7bea6a6db93f0557e644c645112a50068f553fb1e98258a53ff18071f8fe39110cfea21cea53c6c3fcd2417aac2e37575c415c4d7e2f",
      "68f68cfe702fc889053b45987a6f8f387952442d94a28ced67513d2dd520b70d4b65cd8ea40938bf07ceee10b7ad6deb1f820d508a17060000",
    ],
    [
      "ETag",
      "S8xTHIIO/XblVmpzQI7QlQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f8230147de75798ee55139d5f64890f389d9af8b1213e2c8b31152e8803cadaa233c6ffbeb6a0f2e2423293bdd0de7bceedc9bdede1a8954ae8d38f1cf454426bdffb4a801e1e3ce06f7263024b02cec4129388012a4b3670ec49f6766f3b83fdfb76e77d6fe6bde1ba593766fabed34959ccde408805ef282211bb3e040e13f1878a4b595e61110e419e68932009a3950acb57981f6205cf2d73341de49190380a992ec663a33beea30c3a956f8b3898e3953af26f126a5d6a9918da92b5092e50886cb8761d53b2059b8fd478190ee3002a8c24d4069689c8c214f62849624c09a98854a55dafd49abaae376acd5abbf1d83ed3036263ee9348562ce6e8a2cf09c78149f672c4a895de014dc374e2e75120377709f9090968278b7d075d72a7f22fc4d1d46a3572dc6cb7d472958555c5a45c3f80d53fa98b2bd960f1c28b6967cfe44ee2382449c40b4abf8c67c61d1b176e28da74cfb0faf792655c78a1a0ae359af4e7963179bd292ebecbab09ba070eec9512e13106ca59b56a436fb65b557476ea33914ee4d2a89c26a0d236167faca1cf45cec50103eda4fd00f9a46c3c1d050000",
    ],
    [
      "ETag",
      "jwcdGwYjvgxhSDHb53AO8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`id`) NOT LIKE ?",
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
      jobId: "grouparoo-job-74-1588841517427",
    },
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
      "c5",
      "54",
      "5d4fa340147defaf98b0316a624bdaedd73669dcaeb229b1b62ea5356663ca146e7114189c194c8cf1bfefccd0024daad9a7dd37b8e7de730ef783b71a42c613490263808c35099f3360af5f1ee9da385308081c2a84aff198dc75c7adeed7e5b7165e5ec1b24b46c3619e457435c7711a419dd38cf9c0078b792364344b31a3b42e09ebbd76bdd9e9f7fbed66a7d96bb77a792d87683321c99362781022e503d3dcf96884948611e094f0864fe3226ebeb4cc94d147f00537f7654da9c4cdcf85cf23ea634168325ccc73131907b682189348d928ab83f5f77dfa06c1712394d92fc407ecfb344b84b296d3f834d99030639a5c32bdc9a00c6bcfc56b2560ccad8975e1a28bd962ea9e78385674de29c21cad560c781609f4d3995d232f95ea0f9803f7d0edd8722c19617443225891c04343748e46d34b8426b35bcb39f164ec144d672e9ad857163ad7e6b470001b2c492fb1905ca262496179d0d6b314c0455126c16db7ed038336b659ef854aca086544e82fb4a7aee58c2e5c7b69953664bb271062ff75feac1abec11187b21a331c8300764d03501437b3b9eddab3e9685232e80edeec32b94cfb5d982dbfa9cae6bea6b0f7c11a167954d9ecb68d0af67e76906589a3ec00cdcb366c34f7386a07d8fea7bba366e7e80383dba7fb5a85de90c7b33566fc5a58ce9daad598421cd80083c42f053fdd92923287ffe2df20d37797aa2ae4b116fa5cc83017c4e7a5bacf40e7ba24ce67b125ecb73add825016327120a3576440121cc6f7c4b38a30304699a3cfb57ae5d20ecf9d93448e40fe248bf58d81731c6a8d4522bbc001af23407aab51314ee4798824486d01f2dcbb1b6ba517c13b433f702011d16d233ddb015293dd3d1fab9763636f92da62f54c2a87ffb1cf7fe974b783f7e5a08496bd9c4d2dddfbda7bed0f611206bbae060000",
    ],
    [
      "ETag",
      "sbaHiY6H263V92aVKeV6iA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00",
      "d0bb642d8e02f2e98edf284629f211ec86a1492a88484c02824eef5ea7ef06ef054a8408e785e81a72031f602a65738ee6b033ece980d56b6ce95a56f729753d3a2d2467cc1f61bf45c8188e51ba271d83581c777ea65b6eb68ab52bd7c744c66d10c2486aaafb595293f639e645c8d7b9ea91005a9b22f9b12e8feadeb26cf8164a81a2b882bbaf6893fa52e8e8a5836b2dcd954159c0be3d9d2516b89ffac443ec5381d192dae3b36f4eb5087064c8b2b14e21748c38be6c91b6bfb955602f55217b07300364a43523bca8df3365659a33f0df2cc444c9fb6a939211067eff0074bffa7105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-75-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "147dcfaf40ecb5f9200d052a456b96d01629211b21edaa69a2c618ea94608a4db6aaca7f9f6df2014b55f50dee3de7dc73afaffdd65214f51967917aa9a8214e5e4a54bc7e5991503d1319c44022327ffbdf6ef407ecf7ad8d76e3ff9caf5677ce4b321c56282cd914acf314b529290b88e8e572d1490a52e6a020a4cd05db86ded674d334079aae1983be5171294ae329ce9e85c2136339bdec76f73e3a0921498a408e690792f521deddf4bb7941560832da6d96edf24ab4fb71e1af29818061920d978bca44495111a035c0a9b0716447e15553be83c1ba9370f4064304202465c684b54a06922cc649594871aef4c6833c2c3d1f7e6b0175614fedb1af409296eb2cc8c01a9d2911602060af3952aebdf94c796488b2c78ee35ecfbdd9c877e66eb018dfdab351673c9f2e67ee42b9bfb53d5b61204c91945086ca95fc73f98f34268b465c0767d29a2fb235433cbb1ba7f3ce491e2484083747d10e1618bd0ba0993d2b8c4303c6e6b91ec63d14866668e8e03cec416b80065188405d413aabf82023d9b9deeb47c0328341a46bc100e971100260054674d103a176d13323a8eed8db432fb04080a109a639a178376c75ecd923df0e9cebc0b5ed893d39b6fea7c027e87bcfe160df5bba63ceaa8f290665ca2655a3cd2135ba17e7526feca3099e34901798705372091cd7b7bdd1d877ee6a36f8464e5102e0ebe245ec640c528a8e6c50f0a365a89891489ca3ea8e66f57ee57e7ddf832847fc3af83cb6c381625d642f27ebd2ace3f3756c8ca23aca2aaa2e7ccf716fd45a72fbbecc1d48cb777436bbb09af3693df109d38656ebffafdfad5a0d95dff09d3df5c7d2f61e0457e644c643312a50068f553fb1e98258a53ff18071f8fe39110cfea21cea53c6c3fcd2417aac2e",
      "37575c415c4d7e2f68f60dcbda0b7262c14e119676409c3c29a2165aa38ced67513d2dd520b70d4b65cd8ea40938bf07eeee10b7ad6deb1f3f130cc517060000",
    ],
    [
      "ETag",
      "x2BG5YiT29v1GTXOjjVIqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc554d16ac230147def5748f6aa6047ab32f0a16eba95a9dbb4ca6088c4f6b6d6b54d97a40e11ff7d495ab52f8ec284bd34b9f79c9bc3bdc9e95eabd5d0679878e8ae865661f09501dddd04c0dfe466022c8b38134b4a1206a82ed9c07120d9f377dbea27d3c1980ef4eddcd8c1336766d0ede62ce6ae21c682b7179188fd10228f89f843c5b522afb004c7204f744994c5c95285f533cc77a982a7cec41e3f969198780a19cf8643ab37eca3023ad42f8b7898e3a53af26f126a5d688518da90d5047ca090b870ee3aa564032eb7d578198ed3081a8c64d4055688c8c21c0e28c9524c09698854a36d3674b3d3e918baa9b78ddbf6911e1117f39024b2623645277d4e388e26e45b8e18b5f23ba079984ffc380ae4972ea13c21016d6571e8a153ee50ff85688f9d9651e216bb8556aaacac2a26e587112cff495d5cc91a8b175e4dbb78265712c731c9125e517a307cb1aed8b87043d5a61f2ca77f2d59c685172aea3af6a83f75acd1eb4571f15d9c4dd0db7160af94088f3150ced29b46c76cb79ae8e8d47b229dc8a55139cd40a55d2cfe584f2117391f470cb483f603b779b2381d050000",
    ],
    [
      "ETag",
      "VXIAEnSFNrF1vV4yeKts5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ?",
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
      jobId: "grouparoo-job-76-1588841517427",
    },
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
      "02ffad54616f9b3010fd9e5f81982a755293404302a91475514237b494748434aba62931c650af80a90dedaa2aff7d3690842859554dfb0677efde7b77b6efb52149f2034e7cf942923d1c3ee688be7cf8453cf94c645006429141c6e261ae8c2d1532157ebf0bf3befadb7c1e0c4a142eaa1988d3083519c92944ec623e6b8594e429a08434396153ef35d5ae61189ada5575ed5c2f6b198a82094e1e04c37d96a5eca2dddef868858484110229662d48e26dbcfd74de4e29f98560c6dafbb26daec4da6f0b5f4604820c9364309f95267286e812c50047c2c6aedaf73eedd3b730885b21473f61880084244f3261ada48124097098d3829c33bdf2200f179eb7bfb5803c3327e6c89546d3b9ed9eae402ce8561f25c0a4e5922296479974e54cafa555cad5ef01436c252dbe988ec923940438424becafa48174290dedb1244da60bd339dda239953d75a589f5d5942e0b8b85bc8f588693c2a40bbc08d5acf16c3558ebc8996e290409c8b842055bea4a0fa886d2f7024f8781d1e97a81823ccff0f42ee8780aec6b48f33d04ea0c99d02eeb4142922e0c1455f3fb5aa70b90a7a83d68f8baa729aaaef681ae9e03f53ce8a89e2e570ceb6d3f902290a131662961b81abd3c72cca16b2eadaba56d9a6373bc6bff99e203f4c2b138d875e6f68857d54715007e0ae3b2d9fd41ed4d20e333ad37f7d6140f1a482926dc5471252cdb359de1c8b56e6b36f8fd9ca010c097d9a3b8a1018818da55030a6294217a4d7c7196f2cd7466b9d6d41e4e760cc595bbd9201987fdd89addf55467735fd2fd9b511e5a1915367b9a5ccbadcf8eb2dc82283f42f3548565758fa37184ed5fdccd5cc7b23fff077b278482e4e42f1eabaf9f8d9a80cc174ee54dfe36379d3b515be444c64101a228813bc9773c375158a6dfb14f397cb3dd44055f705b7d96f1307ff990edd48ba723f6008ecbe3a8088d4e6f47c80b697688d03b9d0de260c3092d14a324dbcca2dc74e520d77b96f29a9da24cc0f943b4ab135c37d68d3f7b333167a6060000",
    ],
    [
      "ETag",
      "e8WkU0DI1cs1cXYgu91xEw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "8230147de72b48f73a92e17492253e4ce736174284cdf8b01853f18a2870b12ddb88e1df6d0b282f6dcf39f7f6f69c9e0dd324c738db9267936ce2e854002bef2210be3a04c08b4470b9e5987120f7aa1a048d54f5317a7cdb2f27b9bfa4f3d3ebbff7d973970b7f34aaab78b88794cabab34412ef6248b65ce21f8dcd86d75a46535037aed74c0fd437349a2873adcdbcefe9fb34e84a296eb5e42d5cf765ec4e4923557a5fc9b5d24f39e026801d30c842b83d2867788050ccb4734ed33c018b63c142e0cd10d558cb11c322a70cd19294357cb2ec81e3387d7b600ffbbd615b9e6048458c99ea587c91eb7c81822601fe29f7c4aee36135acc368a320bb4e3edd84a4f4ab9afbe44a55cd6965b468751b362e05f03943e9858376f040da2826a8ac0a95846005683aa4f2b73e62d17046655c00e79b725b18020000",
    ],
    [
      "ETag",
      "kg3FhWCpQWaPqDxNJ2LWUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b5283300000d0bb645d3ba14106dc0182228512c142d96420844f530103f273bcbb1ddf0dde0fc82865c340c68eb3163c81353b687bba773bd55871a106851fe8938cd572424eaab34afaa673a98f3c8924bee96e08bd8bbeb6af4d9cdd48cc12c35ede1044833c9733668616dac5b1b2a2e0e5b020e7a8375e316d5100fdd94e179b4c9e8c9dd0e4f59c2d5f0fcd8c90d8aa3c0eae322445f44e3b5519b10221656527a3f03c3ce7a98db1c9d58b9b09ff94f6f5e92c29bcbd0a8bd77dfba9e607d7489c9bfb615a6007d8d237820da4b9cfd0a3a6edc07f938c6bcfee5783658209f0fb07ca950d5e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:04 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-77-1588841517427",
    },
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
      "0002ff8d545b4fa340147eefaf20ece3da0b2d156ad2acdd962a6b4b5da01ab3d9e0300c380a0c3283c698fef79d815e606b8c6f70cef9bef39dcb9cf79624c94f380de43349f671f45ca0fceddb23f1e513e1410c44c233fdfee41b77f3ab5f037d78f50a7e5eacaf1d1c8dc755142ed11424598cda94143944f46ced74a29c1419c8096973c2b6a6b595a1aeebaa325434b5af55588ae27081d327c1f0c05846cfbadd9d8e4e444814239061da8124d9dbbb2ffd6e9693470419ed36d3767926dafd3cf18f9840c03049c76ba7125150947b28013816320ee8c03f6fd27730483a118f7ec110010849913221ada281240d7154e42539677ae7466e2e35ef7f6b06d93116c6d49520898b24f55290a01329000c78ec2d43d2dc5e2da57b8628bbef98d67c652f27aeb9b23c677a692c279de96ab15e5a8e747b69d886c4801fa392421a4be7e59fc57f4a6165d280f3e0b494e60a6f4d10f76edb697e30c93d8520e1e228da86795aef14287a6fe487be06437d30f4c31ef27dddd78660e0f7e048456ae023506728955578909234f00708841078089e224fd57aaa077acad01b691028a330e8f795a1bc456ff6b5c01c018666986684e26db3e5a96d4c5cc333e79e651833637628fd35c747d1b7b6c9835d7b6d4d39aadea61014319b5585369bd4a85ecca55ed8671d3c2a20cb31e1a2ca25302dd7b02753d7bca9c9e01bb94011806fceb3d8c910c4141dd020e7a365285f9240cc51b626cb7abde57e5def82288ff8b3d7792887078a75296b395a97661e97af63a315d5282babecb8b6695dc835e7e6639a1b10171ff0bc6ccd72c6bbf5c03b4c1b5cadffbffeb66a3964fec2b7f2e4df6bc3be13d8d2273c360a518e5278c8fa854d17c0cafd8503c6c377e74420f845d9e7a78c9bf9a383f490bddc5cf10471d5f91da1aef67bca8e900373761c3150f7298f4e8ac8851294b25d2faad3523572d39054d4e4943011cedf81b51de2a6b569fd038c0119bb17060000",
    ],
    [
      "ETag",
      "C+kbEYFKJ385KwaBGUPSig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc554514fc230107edfaf20f5151231c0d08407504422a0c288318690baddc6b4dbcdb64389e1bfdb7603f6a25922892f6befbeeffaa577fdf665552ae42d8c3d7251212f61f09e02df9c04201ff4660a226552a825c15800a96a36481a68f67ccd07fdeba7f1c7cde725b2601c3d26b7e70f9d4ec612ee0a22aa785f2a52b11f02f3848a9f4d5cc9f3068b6904fa4417591ac54b13560fb0dc24069e39d3e164504422f40c32998f46dddea84f72685bfd59c4a3922ecd917f9330ebc2cac5c82bbe4cc1070eb10b875b271c5fc19543d35e41a384414d60ca5d10b9882ecce080639a508e5853a99a6dd7eacd76bbdda837eb76e3ccded119ba5486189b09ccc85e5fa2a46c8a1fbac5a495cd806761d6f15d2b885f1842b1430a5aebe2d023fbdcb6fa0b7138715a8d0237df2dac42656955d5293f64b0fc2775359215552fbc9c76fe4c8e244e234c635952fa7a74d73de2c5951bca5efaaaebf48f252ba4f242495d6738eecf9ceef8fe4771f55d1c4cd0db4810f71c95c7041867d54f1beda6dd3a253ba75ea276a2d446953c059376a9fa63dd8452e57cca04585beb1b3c376aff1d050000",
    ],
    [
      "ETag",
      "UvrGEFYMwHxColgMmWpK9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`purchase`) NOT LIKE ?",
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
      jobId: "grouparoo-job-78-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffad54ef6fa24010fdee5f41b834e92555c1a26013d3334aafa4167b88f57ee4a20b2c765b607177e95dd3f8bfdf2ea062f49ae672df60e6cd7b6f6677e7b52649f2134a02f942923db45c6590bc7c78c49e7c26329081a5c8a8d75d4ffb7ea3cc94f06ea5dcaeb2df03f56bbfd72b5028afa6204e2358a738233ea417d349634970960282719d13d675a3aeb60dc3d0d4b6aa6b2dbda8a5300a472879120c0f8ca5f4a2d9dcf8682c315e4610a488367c1c6fe3cde7563325f811fa8c36f7659b5c8936df16be8cb00f18c2496f3a294c641492398c018a848d5d75e07ddaa76f201037961cfd8c7c087c1f670913d60a1a1f27215a662427e74caf3cc8c3b9e7ed6f25204fcc913970a5c1786abba70b100bbac5470950693e2790661193ae9cf1adb448b9fa03a0902ea4d9b5e9983c427088223847c142ea499752df1e4ad2683c339dd32d9a53d963571a5937a674995bcce50348194a72932ef02258b1c6b3e560ad2367baa510248071851236d7950e500da5eb859eee87c679db0b15e87986a7b7c1b9a7f85d0d6a810741958109eda21e243869fba1a26a41573b6f03e8296ac73702ddd3145557bb40575b406d85e7aaa7cb25c37adb8f4f20607088688a292a472f0f1cb3ef9a73eb6a6e9be6d01ceedaff45d0017ae6581cec3a537bc0abaaa30a013f8561d1ecfea0f626c0f84cabcdbd35c5830652823037955f09cb764da73f70adfb8a0d7e3f477009fc97c94adcd0104414eeaa0101316490dce2409ca57c379e58ae35b6fba31d437ee5ee3648ca613fb666773d55d9dc9774ff661487564485cd8e265772ebb3a32cf720ca8ed03c976159dde3a81d61fb177713d7b1eccfffc1de09262039f98bc7f2eb67ad2220f385537a93bf4c4de79ba8cd7322e3c0101298f83bc9773c375158a4dfb14f397cb3dd44055f705b7dca7898bf7c9feed4f3a723f6008a8be328098db6da6a6d0879216187885647d9200e369cd082314cd86616c5a62b06b9deb39455ece46502ce1fa25d9ee0bab6aefd017fe3109ba6060000",
    ],
    [
      "ETag",
      "1H9b4ZK0W0fPq0MquxC1XA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df572cf551179d81b098f00066ea22213224c6988594ed328a5bef6c3b0d21fb77db6e035eda9e73eeeded393d3aae4bbe19cfc8834b362cffa9411cae72500b738841d685927aab904b2037a61a14cd4df5aefe60fb6be62f6f39c06b142de24ffe34198fdb2a99eea0a4baeea891c65b06452635feb2d8ed78ab715a82b971bd1676a0bda1d3d4a1b25a347f0f9fc3f8522a31b3d27c359b4da6b390745263f744af8d7dca1e37316c41004fe1fca04ae01e521559e7929655019ec45aa420bb21a6b1957381754505a2a7296f1478fe300882813ff44783fb515f5e604a15436e3a564b729aaf50d122c63fe39ef86d3ca2856d187d14647b91cf65425afa35cd0372a29aee94383d4acec3a60705f24da0f622c13ab8237d148f68ac2a93841235583aa5fab75e98ea38a771fe01d6325eaa18020000",
    ],
    [
      "ETag",
      "huWij+i1S/neeKIIQRYnFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cf4b7282300000d0bb646d1d4b404877460ddf0a88b44c37991442a5866fa2029ddebd4edf0dde0f6079cea5a4aabdf006bc80896968992ffdd6c253cc55d204723f955b6da7a5338181581ff26351c3d5c9715c91c6e7c2631e2767716a7453856394dd64d4bd57759444fadd2fbfd1e68ab5c21efd98b8bbc4edaf070736329efb673bdae015257db616446d9dd8a4324b0a27df171f2aa4a1d15bae397c3a1a23f3932dbdbeb282e646e6f28d1b30c352f7d5fd157f65a24610b3be3d8dac144d3a1092682ac5e80216808f5d357049abc70c1a082dc07f93aaa9e38f2be66ce003f8fd03c436effd05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-79-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6fa240147df75710f6b58a5a3fb089d9ba4a2d896217b14db3d9d061b8d06991a1ccd0c636fef79d013f606d9a3e29f79e73eeb977eecc474d51d46712fbea85a27a247cc920ddfc78a29e7a2633c0512833fe9dfe1e67f6a6a54defc7d3e9ecdda7fcd7db7058a048ce66689d445067344b31b08bd5b211a6344b504a695d08d6fb837aababeb7aa7d56df53bed7ec165100533123f4b8547ce1376a1697b1f8d90d230029410d6c0747d886baf6d2d49e91360ceb46a594d5462dad7857f4614234e683c5c2d0b131983d485352291b47164fbde6555be41d0ba110af42bc18030a659cca5b54206d338206196e6e242e943044538f77cf82c05d4a53133c68e826994ad6337466b38537cc491cb37092857f662ae3c7060fca1615a570b7b3e72cc85e52ec7d7c67cd4182f66abb9b554eeae0ddb5038f222c82594a172997f59e223379617f5850e89736b8ecc960c89ec6e9ce6272779909022c21c831dcced377ba8a537075ee0f571a09f77bda0099ea77bfd2e3af79a78d0818eef012a2be4ce0a3e8a69ecfb3d0c187aeec0ef0edc4ef7bce5ea9d9eefb68300e97d18b4db7e5bddb1b7875e700a88c384b08432b21bb63ab68d9163b8e6956b19c6c4981c5b7f4bc909face3605d8b157d658b0ca630a5016f149d168754895eee5b9941bfb6a82270d2429a1c254be04a6e518f668ec98b7251b6223671022bc59bec89d0c50c4e0c846a9385a0ee99cfaf21c556b342ff79befd7cd1ec404e2cfc1e7b11d0194eb92f772b22ed53a8e58c7ca288aa32ca2ead2b14d6baa9692dbcf656e51947da2f3ba0bab8998d6a39830ab68d5fefff7b756aaa18a1bbeb3a7fe5e19f6bde4e63999b1218014627cacfa8d4d97c422fd8d074cc0f7cf89648817e5509f711116970eb363f57c73e51524c5e4f782baf86def050531e527885eb3d9db234e9e14590bd610f3fd2c8aa7a518e4b662292b",
      "d9c969122eee81b53bc46d6d5bfb07a97f4c4a17060000",
    ],
    [
      "ETag",
      "dW8znuRy1/GYCGGLzdotBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc554d16e8230147de72b4cf7aac934206c890fb2b969a2ce29660f8b31152e8803cadab28518ff7d6d41e5c58564267ba1bdf79cdb937bdbc35e6b34d0479878e8be813661f09901cd6f02e0af72330796459c8925250903d4946ce03890ecb7789199c3ceccb097e01ac37c120e2c3be8f50a1673b71063c1db8b48c47e0891c744fcaee24699575882639027ba24cae264adc2e619e679aae085331f4d9fab484c3c854c97e371df1e0f50091d9a97453cccf15a1df93709b5aeb4520cedc8660e3e50485c38779d52b203978fd478198ed3085a8c64d405568ac8c2020e28c9524c09698954cbbc6bb50dcbb2f4b6d136f58e79a447c4c53c2489ac582ed0499f138ea339f9962346dde20e681116133f8e02f9954ba84e48405fb238f4d0297768fe421c4d9dae5ee196bb9556a9acad2a26e58711acff495d5cc9168b175e4fbb7c265712c731c9125e53fa69fcd2bf62e3c20d759b7eec3b836bc9322ebc5053d7194d060ba73f995d1417dfd5d90476ce81cd28111e63a09cd5bed52dc3ecdea2a3531f8874229746e534039576b1f8630d432e723e8e186807ed076e436ad11d050000",
    ],
    [
      "ETag",
      "WmSu7H2P5BUec5HyMiE8Bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`date`) NOT LIKE ?",
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
      jobId: "grouparoo-job-80-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc554614fdb3010fdde5f616542308d366d47a1ab54b10e8288565a4853109b50e326d76048e2603b4808f5bfcf76da249d0a9aa649fb96dcbb7befd977e7d71a42c6234902a3878c39099f32602f1f1ee8dcd85708081c2a24f8719b81f5ed53cb7c1a2ccefc4ee7b03b71aefafd3c8be86a8ee334823aa719f381f7a69346c868966246695d12d6bbcd7aabd3ed760f5a9dd6d141fb28afe5102d862479540cf742a4bc679a6b1f8d90d230029c12def0695cc4cde7b69932fa00bee0e6a6ac2995b8f9bef071447d2c084dfad3496e22e3c066106312291b657530ffba49df20386e8432fb99f8807d9f668950d6721a9f260b12664c934ba657199461edb9f8ad048c8935b44e5c74329e8edc3d0fc78acefb883047b319039e45029d39e30be4a552fd1e73e01eba39b71c4b46185d90086624f0501f1da3c1e814a1e1f8c672f6bc000b9034a3b18b86f6770b1d6b7b5a3a800596b4a75848365131a5b03c68eb6e0ae0a22893e0eabeed2dad365659cb422565843222f419ed916b398313d7beb64a1bf2c2871062ff65f2a4ae7c81230e653566380601ec8206a0282ec713dbb5c7a3c1b064d07778b9cee432ed6761b63c5395cd7d4961e3c01a167954d93c3c302ad8727f2bcb358eb22d34cfabb0d1dae0a86d61fb1b77a703d7fa07e676dacd76b3de6ccb7dd879c3e7eaebae569131e416adfc195753cbb955b51a5388030b6090f8a5f0bbc35252e6f01f3c12327dbdb2aa426e6da1cf850c73417c5eaafb0c74ae4be2bc252bc2eee1d1e72f6b4259c8c4968c4e6b9d0149b01ddf10cf2ac2c018658ededbeaba4b3b3c774e12d90af95a16531c03e738d41ad344de02073c8f00e9e146455b91e7219220350cc8736f2fad999a076f1fd9391f520bdf43bbd5f6ee22ddf5dfa3c6465fb5e1eaee545e83b75dff3fdfebf9bc2b9b28f2fd188ff47e2c6bcbda2fb1a2394ad3060000",
    ],
    [
      "ETag",
      "dZYueEB+1/qAfFc5568SRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d07fc9b9edb094cd5b294b0145963898538625d23448d90375fc773bbe3f783f202f4b328e78ba33d28217b0e59271280fc15d37b7f84b9c6ded76ec316a385c93047a0915fc9a79d56909d54b76b61ce446c5bc723fcd664b892bbffd5664617a775fdf2689599d763104dfaf5799711c4869c04a254871d76a3adf574a7ad21c6a7be8e1247bcfb39c5a869f8b1d2e672eaa7de9621f762a44566813fb965d71cfe9438fc4e65a10688a7d5c55f1073a4602a42bda62d4685c2b06359d125a1b8c831d206b47073262fa9cc98a61ecc07f134f5b479e5793e40319c0ef1f29e0f4f105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-81-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545d6fa330107ccfaf40dc6b13202181548aae51425b7409690969753a9da83186ba054cb1695555f9ef67433ee052557d83dd99d9d9f5da1f1d49929f7116cae7921ce0f8a544c5fb8f2712c8672283188845e6b6b0f5ec2a2f1fb59b72913e6750fd95fe7a9b4c6a14aed814a47982ba94940544f47cb3eec50529735010d2e5825d53eb6a43d334756da8197adfa8b91425d10267cf42e191b19c9e2bcade472f26244e10c831ed41921ee2ca6b5fc90bf28420a34abbacc22b51e5ebc23f130201c3249b6cd6b58992a2c24729c089b0716487c1455bbe8741da8b39fa154304202465c684b55a06922cc2715954e25ce9830779b8f27cf86d04e4b5b5b0669e044952a6999f81149d492160c067ef39922eddd5527a6088b2879eed5caedce5d4b3578ebf9e5d5bcb696fb65a6c96ce5ababfb65c4b6220485025214da48beacfe13f95b1aa68c875705659f344b661886777e3b43f39c9838410e1e628dac17c431d01cd54c7411418303207c32052511098813104834085631de961804053a17256f34146326314a2913618fbba3a0a7dbddf0ffd313480af87c6383235640e46a1bc636f0fbdc0020186e698e684e2ddb0e5996b4d3dcbb72f7dc7b2e6d6fcd8fa5b814fd0f7aecdc19ebb71669cd51c5304ca84cdeb46db436a752fcea5d9d857133c69202f30e1a6aa25b01dcf72a733cfbe6bd8e01bb9403180efeb17b1931148283ab241c18f96a1624942718eb2335d36fbadf6eb660fa21cf1e7e0f3d80e078a75a97a395997761d8faf636b14f551d65179edb9b673253792dbcf65ee40527ea2f3ba0bcb399fd6239f306d6975fefffadb69d490f90ddfd9936f3796fb5b70ab9cc8b8284205cae0b1ea37365d10ebf4371e300edf3f2782c15f94437dca78985f3a488fd5abcd155710d793df0b9a866aaa7b414e2cd8294233cd3de2e44911b5508a32b69f45fdb4d483dcb62c950d3b154dc0f93d707687b8ed6c3bff008068652e17060000",
    ],
    [
      "ETag",
      "QrI4nGpuh1PuLmknc0KmKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "57",
      "90fa3a1267064c131e86a26200054662620829dbdd1876eb6c3b0d31fcbb6d37602f982592f8b2f6de736e4fee6dcfbe8d4603bdc769806e1a6815471f39b0ed450462a23653e039115c2e194d392053b141e048b1af46afcf30492d92bd12bfd7f1c6d7e4c976bbdd82c5fd352458f2be6524e33006127019bfe9b851e63596e204d4893e2579922e75681e61b1cd343cf3a683f143154968a091f17c38747bc33e2aa19d795a24c0022ff5917f93d0ebc228c5d086aea6100283d48763d719a31bf0c5408f97e32423d0e434673ef05244151670c4689e61466953a69a8ed5b45a8ee3d856cbead8579d3d9d501f8b98a6aa623e43077d41052653faa5468cdac51db0222c26be1f050a2b97509d90843e55711ca0436e67fe421c8cbdb65de196bb8551a9acad2a2715c60496ffa42eaf648de50bafa75d3e933389e384e6a9a8297d3f7c76cfd8b87443dda6ef5caf7f2e592ea4176aea7a83517fe6b9a39793e2f2bb389aa0b715c05f18951ee3a09d655dda4eabd3be447ba7de52e544a18c2a580e3aed63f9c77a8c85cc8598703076c60f28b15d6a1d050000",
    ],
    [
      "ETag",
      "2MXOeQn1lpXlcB7TN9lJ4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`stamp`) NOT LIKE ?",
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
      jobId: "grouparoo-job-82-1588841517427",
    },
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
      "cd",
      "54",
      "5d",
      "4f",
      "db",
      "30147defafb0b2179068d37465844e15eb20dbb2b529242908106addd4490d491c6c075121fefb6ca74d52a963d3b487bd25f7e39c73afefbd2f0d00b4079c2eb41ed0e6387acc115dbdbb2773ed407a108791f498d4bbe964abdc995f0e97dff5673d749ecd8b7ebf88c22a9bc1248b5193919c0688f5265e2ba224cf2025a429009b66a7691c9aa6d9350e8da36ee7a8c865280e87387d90084bce33d6d3f58d8e56444814239861d60a4852daf5a78e9e51728f02cef46d5a5d3031fd6de2939804906392f6275e212267884e5102712c6554d98bf9a76df81686492b12d14f38403008489e7229ad8009481ae228a70a5c20bd08a3302bcde56fcda079d6d03af5c1e978e2f87b339848b8d93e800c4ca714b13ce6e08b3b1e815926d8979021360357df2cd712164a421ca3295ecc401f9c80817306c0707c65b97b33c6856881e38c7d30b47f58e044e953dc0b1442817b06b980e33555d257186df59c1c315ea609e7bae1f68eb7d6d651af254b4631a198ab226dc7b7dcc1a96f5f5a950cd1f1218a60b0f21e65cf4318335465430a13c4111d91059210e763cff6edb133185608aa89e79b4826c26e4bb1554d75347f95a1ad82959b175629f34357abf95e0f76a25cc238df01f3b4366bc616466307dadfa8f3ed91e5f983d1f93f50d86977dacdb65c0adfe8f48cf73da3db6ab7db37bf10befeba6bd42835b1576bc1dac5c472af65aef2498f8b4244511a5422de9c9e0ab270ffc1d910e19b259619628f4b7e31fc1c338e0356b10714a9581f27c51bad01cda3e3aeb101148994ef88383edc44a074b1dbbf459ed78811a584ba6a93eb0740c86185729c8a67c18b0b7511cad9aed7f6b8ed4a106330521a1c0212c883254e23c070940a6a8a40482808f33490f9c541502648a33c41290772a2",
      "580f9403d5025e9e658472b4a8504440714b3cdfb59daffb1fd7bf9faf7dcb13078a835ba3671a77dad650a86aeb9b58bb2dbf29f9cda2ffd3b237bb71570d10570acfc68ea566a2f1daf809c52baddb61070000",
    ],
    [
      "ETag",
      "8rSZ2pyuNbVLhJ/x/fNx8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb646d9c011368ba6bc00f428b110171934969e42ba18022767af73a7d37783f40a4a9ec7b3ea84a36e0154c4227f374eeaa173a31699d4c142019b256d3a16ff84579dc94f9e39ac01ab9e517a2e33569369e867164dff8368f43e19cb250db0efea4d9746a55a32e6a2f79b3b4e899b18f7dce7c68d947c884b923e305495938458ee3b5509911c21b5e11e2bdbddb3aac0f63e1ecd0adefd2035ac45d69423b6db9cb6d054bf58887ac7672a61bd1390ea24f5aadd0f8ed78150ef89255e13a013320ef6dd1c99e17cfd902133203ff4d3e4cad7c5ea9149decc0ef1f5c4d50c105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-83-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cfaf40ec710d1042125a295a594257a484b484b49aa6891a30d409c1d4369daa2aff7d36e40396aada1bdc7bceb9e75e5ffbbd2349f206e5b17c25c9214a5f4a48debeac71285f880c6420159907cb5ef7c2fe66fd625944fdfafdee7ea3116b3cae51a86253b02d32d8a5b82411a457aba592125c168060dce5825db3dfed0d4cd3347a83dec8d0473597c22c99a17c23149e192be895aa1e7c2829c669064181a812e1ed31aebeea6a41f01a468caaedb22aaf44d5cf0b7fcb700418c2f978b5ac4d941492006e01ca848d133b0eafdbf20a025b25e5e85714411045b8cc99b056cb44384f505a924a9c2bbdf3200f579e8fbf8d80bcb467f6c497229c95db3cc8c1165e48316020606f05946ebcc55c7a6290b227c5716f16dedcf29d851b2c27b7f6dc52268bd96aee2ea5c75bdbb32506c20c5612d258baaefe5cfe5319ab8ac65c07e595355f641b8678763f4ee783933c4a08116e8ec23d2c186943d033b5cb3009475162f60761a2c13034c3d100f4432dba34a011871034152a67351fe43807201cc6434d0f06bade0f8ca1ae056004fa411883d800bda16e0c06f29ebd3bf6121108189c225a608af6c396279e6df976e0dc04ae6d4fede9a9f53f049da11f3d87837d6fe54e38ab39a60494199bd68db687d4ea5e9c4bb3b1cf2678d6404110e6a6aa25705cdff6ac89ef3c346cf08d9cc114446fcb17b19309c8283cb101e147cb2099e3589ca3ec5af366bfd57edd1d4094237e1d7d9edae140b12e552f67ebd2aee3f3756c8da23eca3a2a2f7dcf717fc88de4ee63990790951fe8bceec372c1a7f5cc274c5b5a9d7fbf7e771a35647ec3f7f6e4fb95edfd14dc2a27321e4c20817974aafa1f9b2e8875fa3f",
      "1e300e3f3c2782c15f94637dca78985fba889eaa579b2bae20aa277f10344dddd00f829c48d839a23fd20e88b32745d4825b98b3c32ceaa7a51ee4ae65a96cd8a96802ceef81bb3fc45d67d7f90bf762a93317060000",
    ],
    [
      "ETag",
      "VAEj1b3kjqAAr/+BPQk0rA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "7d",
      "ef",
      "af",
      "90ec5105ddfc28031f74d34da8ce6a65b22112db5bad6b9b2e491511fffb92b46a5f1c85097b6972ef3937877b93d3835628a02f2f74d063012dbdd5770c747fb7026ecacd1858ec73269688840c5049b281e39564173fe222cc0266be1bdb59b033bd41afbb355bad84c5ec350458f00e2212b1eb81ef30117faab890e61516e200e48936f1e3205ca8b07481f93e52f0c41af7872f5924208e428653c368778c2e4aa163e9ba8883395ea823ff26a1d6b9968aa10d598ec1050aa10d97ae234a3660f3be1a2fc341e443999198dac052115998c02b4ae2085342ca2255d61fcad5baaeebb56abddaacdd374f749fd8987b249415d3093aeb73c2b13f263b3962d448ee80266132f1d328909bb984ec8404b495c59e83ceb963e917627f68356a196eba9b6b99cadcaa6252aee7c3e29fd4c595acb178e1f9b4d3677223711c9038e439a57bc65bfb868d0b37e46dfab96d756f25cbb8f0424e5dab3fe84eacf66074555c7ce7171374f61cd88812e13106ca59d54a4daf371b157472ea13914ee4d2a89cc6a0d236167fac578f8b9c8b7d06da51fb01f0f15bc01d050000",
    ],
    [
      "ETag",
      "+Zu+eXmsQWLvXmwQiMFEvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  LOWER(`amount`) NOT LIKE ?",
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
      jobId: "grouparoo-job-84-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554616fda3010fdceafb03255dda4424a052b43421d6dd3158d262d845668aa88498ed4258953db414255fffb6c079220d16a9a26ed5b7cefeebd67df5d5e6b08194b92044617197312be64c0d69f9ee9dc385208081c2ae4fcfef8da5eddfd589e4f93e58bd36987eb29dcf57a7916d1d51cc76904754e33e603ef4ec68d90d12cc58cd2ba24ac775af566bbd3e9b49aede669ebe434afe5102d8624592a86272152de35cdad8f46486918014e096ff8342ee2e6eac44c197d065f707357d6944adcfc58f82ca23e168426bdc9383791716033883189948db23a987fdfa56f101c374299bd223e60dfa7592294b59cc6a7c9828419d3e492e9550665587b2e8e958031b686d6858b2e9c89ed7ef670ace8bc2f0873349b31e05924d0d5c8b9415e2ad59f3007eea1876b6b64c908a30b12c18c041eeaa133d4b72f111a3a0fd6a842643b2e1a0e7e5ae84c1bd4e2012cb024bec442f2898a2d85e5c181eea7002e8a32096e5e7cb0a7d9c626ebad504919a18c087dcb81ed5aa3fe853bb8b74a1bf2c98710627f3d7e518fbec01187b21a331c83007643035014b7ce78e00e1cbb3f2c19f42bde6e33b94cfb55982def546573d729ec5c58c3228f2a9b5f5b46057b3bdacb728fa36c0fcd6a13369a3b1cb53d6c7fe3ee6ae8f4ff8dbf8366a3dd3a78c7e4e6ebb1561130e4126dcc1977136b3455b51a53c80816c020f14bc90f27a5a4cce13ff847c8f4edc6aa0ab9b4853e1732cc05f179a9ee33d0b92e89f37e6c083bdf9ac705a12c64624fc6497b9b0149b01fdf11cf2ac2c0186523bdb6d56d977678ee9c24b209f267598c700c9ce3506b4c12f90a1cf03c02a4271b150d459e874882d42420cf9dde5ab3cd307847e81c0728a099aad20deea2bcbddbd3617e3c34761aaa9d5637a6f20f78dfee7f30bc9dc8c7b26d42ab5f3ab6a53b517babfd068a7eceecc4060000",
    ],
    [
      "ETag",
      "BV0HNvQGkBYnkqO85gyYeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b5283300000d0bb64dd762abf10778245a82da1488576c3408840030149cc808e77b7e3bbc1fb01052154885c0e8c72f0089642431bb2791d6c673911e5916360e187646d25cd3b9e4d78949991476cf4ceb036cbb49225a57277b91a41f926fda472faf3858bc2ef51378af0069302c3b109e1c8b4c8764cbde4587112cceb05a2340d9e907f0d6f86621ad143adfe5629d506eeba5968da6611c78d9256543bdd17dfc658442a6d5f269ab1d25fe6fdd673a1f79cef637460d5eec3f8eca1a25d6fe8f87052860d5680ce633b5191b7f7996e22b402ffcd5c2e23bd5f1d5a4c7402bf7f44daee2605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:09 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-85-1588841517427",
    },
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
      "02ff8d54db6ea330107dcf5720f6b5b9900bd04ad1364a488b36215b42daae562b6a9c81ba4b30c5a65555e5dfd7865c6053557d839973ce9c198ffdde5014f52f49d6ea85a206247ace217bfbf64403f54c6680a34866bcd7d7ab27e2b1b917badd1ff7d9f47e603edd0c87258a146c8636690c4d46f30c03bb582d5b5146f3146594368560d31c34b581699a7d6da019fdae517219c4e18c247fa5c223e729bb68b7f73e5a11a5510c2825ac85e9e6106fbf74db69469f0073d6ae976d8b4aacfd79e1ef31c588139a0c57cbd244ce20f36183482c6d1cd9ebe0b22edf2268d38a04fa85604018d33ce1d25a298369129228cf0a71a1f42e82225c783efc5602ead29a59634fc134ce37899fa00d9c296bc491cfdf5250a6ee62ae3c7060fca1653bd3853b1f79f6c2f197e36b6b3e6a8d17b3d5dc592a77d7966b291c05311412ca50b92cfe1cf153182b8aae850e490a6b9ecc560c89ec6e9cf6072779909022c21c831dcc373a3ad2ccce791006060ecdde20083b100466600c502fe8e0f33ef4d701a0aa42e1ace4a38426c8d035bdb7d6fd418875bf0f81e69bba11fa7ad7340c844133a0abeed8db432f3803c46142584a19d90d5b1dbbd6c8b37c7bea3b9635b126c7d65f337282be736d01f6dc953316acea984294c77c52365a1f52ad7b792ed5c63e9be049036946a830552c81ed78963b1a7bf66dc586d8c8194408bf2d9fe54e8628667064a34c1c2d876c4ed7f21c556734aff65becd7cf3d8809c4ef83cf633b0228d7a5e8e5645dea753cb18eb55194475946d5a5e7dace955a496e3f96b94571fe81cecb2eaca6625a8f62c2aca6d5f8ffeb4fa3524315377c674fbd5959ee2fc92d7232e342081924f858f50b9b2e8965fa0b0f9880ef9f13c9102fcaa13ee3222c2e1d66c7eac5e6ca2b48cac9ef05cdf39ededd0b0a62c64f117d43db234e9e14590b3690f0fd2ccaa7a51ce4b66629afd82968122eee81b33bc46d63dbf807e71b375b17060000",
    ],
    [
      "ETag",
      "TwwGjiTsMTfR2KXrFX58jQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "83",
      "30",
      "14",
      "7d",
      "e7572cf59525c3c0464c7cd874ba25731f802f9a65a9704166a1d89699c5ecbfdb16e678d190b8c417da7bcfb93db9b73d7c1a9d0e7a4bf3085d75d04b9abc97c0f617098895da78c04b22b85c0a9a7340a66283c089627b4fabdd882cf868174f7afe64eb70bf67afaeaf2b160f5f21c392f7292319c7299088cbf859c79d3aafb11c67a04e0c2929b37ca343f3048b7da1613ff0a6f3fb2692d14823f3c7d96c389a8d510d1dcc9f45222cf0461ff93709bdae8d5a0c6de98b073130c84338755d30ba85504cf57839ce0a025d4e4b1602af45546105278c960566947665aaeb3a5dcb715dd7b61c6b605f0e8e7442432c529aab8a471f7deb0b2a30f1e8871a31ea5777c0aab09af87114286e5c42734212daa9e23442dfb983f90b713a0ffa76835befd646a3b2b5aa9c549c12d8fc93babc92572c5f783bedfa999c491c67b4cc454be9bbd96278c6c6a51bda367d3b0cc6e792e5427aa1a56e307d18fbc1f061f9a3b8fcae4f2618ed05f025a3d2631cb4b3ac9eed3a837e0f1d9d7a4395138532aa6025e87488e51f6b920a998b31e1601c8c2f0044d09c1d050000",
    ],
    [
      "ETag",
      "RZQvBlOsBvfH0SHj5sS04Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` = ?",
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
      jobId: "grouparoo-job-86-1588841517427",
    },
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
      "00000002ffc5545d6fa240147df75710f66537591515149b986ea3744bd6628bd8ee47363ac0854e0b0c6586769bc6ffbe33808ad16dfab66f70efb9e79c7b67e6be3624497ec0892f9f48b28bc3c71cb2970ff7c4953f8b0c30148a8cfead6fdad7cac5e5f720bdf9f3d3f427d6e4fc79342a51b8a8a6284e23685292671ed093c5bc1566244f514648931336f57eb3a3e9baae76b4ce40ed0eca5a0a5130c5c98360b8632ca527edf6c6472b24248c00a598b63c126fe3eda76e3bcdc83d788cb6f765db5c89b6df163e8d88871826c968312f4de414b225c40847c2c6aeda77bfecd3b7308a5b21473f610f90e7913c61c25a49e39124c0619e15e49ce9950779b8f0bcfdad05e4b93135c68e349e2d2ce7e30ac5826ef54942545a2e33a079c4a4737b7629ad52ae7e8728d095747b61d8068f6424c0112cb1bf9246d2a974664d246955fd15760a291f28c34961c8416e04351b3c5b0dd13c727e5b0a418218d7ae60cb81d2471d5d19ba813bf002bda7b98102aeabbb030df55cc51baaa0fa2ea03a0313da653d4a48a2f73a30547d5090d2d1c0f735b50f6ab7d7edf5dcbeaa828e86aeea6ac140ae18d6db7ebc0c108309a629a1b81ab33cb68d33c7589ae74bcb3026c664d7fe73860fd0b7b6c9c18ebdb0c6bcaa3eaa00f1894fca66f707b53701c6675a6feead291e349066987053c5f19b9663d86763c7bca9d9e077710a21f25ee68fe2360628a2b0ab46198a814176497c7196f2d56c6e3ae6cc3a9bee188aeb75b541520efbb535bbeba9cee6bca4fb37a33cb4322a6cf655b9965b7f3eca7283a2fc08cd5315963b7b1c8d236cffd59df60f7bd5d7ef468d5ce67ba5b2255f2f0cfb87a82d72226343001924de4eee1d2f4d1496e977ac4d0edf2c3151c1f7d8569f321ee68fdea33bf5e2d5881580e3aad79270a8f047b721e485193b44f4bafa0671b0c88416c490b0cd2cca85560e72bd6729afd929ca049cbf41cbb4be16e61bebc65fcbbc9a888d060000",
    ],
    [
      "ETag",
      "8K6IRQ0HMXfpVxZIdDNDFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d51d14e8330147de72b487d5412319b10933d6c06dd923927ba0763c8d2c11d16818b6d71210bff6e5b60db4bdb73cebdbd3da747cbb6c90f2b13f260931d4b7f6be0cd550af24d1f4210752e85da2a2c05901b5d0d92a6ba3a98b2c05bbf5e67e5789e3d552c79619fc96132e9aa44fc0d055575478514de33c813a1f097c176cf1bada405e81bb75b6e069a1b7a4d3695d116ab8fe039082fa5021323ad36cbe574b60c482fb5668fd4da9aa764b80b610f1cca18ce0faa386610cb85712e6851e5e008ac790ca21fa21b3b39e5585794233a8a72fc7bc71dfbbe3f72c7ae37baf386f21c632a1996ba63f34e4ef3254a9a8778d0ee89dbc5c33bd885314441f617f95c26a4a4bfaef944b5fd29b206149d87cd1a0962cd517911601cdc92218a47d456a54e42f21a0c1d53f55b73267bce6aad7fb7f2ac8018020000",
    ],
    [
      "ETag",
      "EAiE7PO+jn5HjFpidMiYdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b5283300000d0bb645d3a35881277a44069915f0b326593096904a47c9a44041def6ec77783f70328635c4aa28696f7e0052c14a2355bfb83899784090bc72e923ee9f7865b69d1c5089ca90f21c4c3c8b6469940e726aaa4ee90669a3abca9872eff3ee49b6c3793af825a71d778c46328d2b34e72eba435598cec631769eca3783fb2722aa2542cd36b82c855d92e554c06619e8bc6dbee54984acf6f37d5b579e4a2c4c321ed292d3e15a4f1934b6a6c9d52f71cd4b6e744edfc8c425fd0fd9b7e76a74bab1b2d58013e8f8de09234f7996e20b402ff4da29691dfaf9853c105f8fd038d93198e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-87-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6ea330107dcf5720f6b5b9922c5029da4609d92225644b48bb17ada83103754b30c5a65554e5dfd7865cc8a6aafa12859973ce9c198ffdd65014f589a4a17aa9a801899f0bc8375f1e69a05ec80c7014cbccebe66786a7dcd01c73f0fbebcdca1e4dcdc7d17058a148c966689d25d064b4c831b0cbd5b215e7b4c8504e695308360dbdd91d1886d1ef0eba7abfa7575c06493423e9935478e03c6397edf6de472ba6344e006584b5305d1fe2ed975e3bcbe92360cedaa765dba2126b7f5cf85b4231e284a6c3d5b2325130c87d582392481b4776185c9dcab7085ab762817e211810c6b448b9b456c9609a46242ef2525c28bd89a008979e0f9fb580bab466d6d853304d8a75eaa7680d174a8838f2f9260365ea2ee6ca3d07c6ef5bb6335db8f391672f1c7f39beb6e6a3d678315bcd9da572776db996c251904029a10c95abf2cb111fa5b1b2682874485a5af364b666486477e3b4df39c983841411e618ec60bedef98aba46c70ca240c791a10d82a803416004fa006941079b7de88701a0ba42e9ace2a394a69ade1bf4b1a9fb26ee22bf1f683ddf04038b9fd0e86380400b0d75c7de1e7ac139200e13c232cac86ed8ead8b5469ee5db53dfb1ac893539b6fe9a9333f49d6b0bb0e7ae9cb160d5c714a122e193aad1d3219d742fcfa5ded847133c6b20cb0915a6ca25b01dcf724763cfbeadd9101b398318e1cdf259ee648412064736cac5d172c8e73494e7a83aa379bddf72bf7eec414c20fe1c7c1edb1140b92e652f67eb725ac713eb78328aea28aba8baf45cdbf9aed692dbf7656e5152bca3f3b20bab9998d68398303bd16afcffef6fa3564315377c674fbd5959ee2fc92d7332e3420439a4f858f5139b2e8955fa130f9880ef9f13c9102fcaa13ee3222c2e1d66c7eae5e6ca2b48aac9ef05cd8e616a7b4141ccf919a2dbd1067bc4d993226bc11a52be9f45f5b45483dc9e582a6a764a9a848b7be0ec0e71dbd836fe01f564125f17060000",
    ],
    [
      "ETag",
      "wyXpcFt83N95Z6QUIAF9jA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "c2",
      "30147ddfaf20f51512513ea6090fa0a818448491981842ea763786dd3adb4e8384ffee6d37602f9a2592f8b2f6de736e4fee6dcf3656a542dec2d8239715f21a06ef2988f54900ea496f262053a6242e098f2590aa6683a281665fad7a888d67cbd0a7e75fcf0c2eee47d3a0d3c958d25d424491b7c108633f04e6498c5f4c5cc9f3068b6904fa4497b3348a1726ac1e60b54e0c3c752683d16d1189b86790d16c38ecf6867d9243dbeacf221e5574618efc9b8459e7562e4656fc75023e08885d38749d08be02570dcc78258d120635c953e182cc457461060782a709159cd73055b3dbb57ad3b6ed46bd596f37ceda3b3ae32e55218f75c56c4af6fa8a2bca26fc538f98b4b23b1059984d7c370ae2172ea13821843e7471e8917d6e5bfd85381839ad46819befe656a1b2b42a4eca0f192cfe491daf6449f18597d3ce9fc991c469c4d3589594be193e768fd838baa16cd3d75da77f2c59a9d00b25759dc1437fea741fc63f8ae3777e30416fad408e05478f4930ceaa9f36ec66bb754a764ebde2da894a1b5589144cdaa5f8c7ba0b15e67cca24585beb1b892ce04f1d050000",
    ],
    [
      "ETag",
      "CjBltsPUhifa3zXle9JNSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-88-1588841517427",
    },
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
      "ad",
      "54",
      "61",
      "6f",
      "a2",
      "40",
      "10",
      "fd",
      "eeaf20dc97bba42a5a5468627a46e995c4628bd8f672b9e8b20e745b60290b6d9ac6ff7ebb8082d16b9acb7d3138f3de9b37b3bbf3de9024f989446bf94c925de23f6790bc7d79a4ae7c223290225f642e1f6f6ea70b9f74aed5be3e7fbd0f828bfbb13f1c162892b3190ae3009a8c66090676b698b7fc8466314a286d72c1a6a6353b3d4dd3d44eaf3350bb8382cb20f0a6247a120a0f691ab3b3767beba3e553ea078062c25a9886bb78fba5db8e13fa083865edfdb26d5e89b53f2e7c1e508c5242a3e1625e98c818244b081109848d8abd76bfefcbb7080a5b3e47bf100c08639a45a9b056c8601a79c4cf925c9c2bbdf3200fe79e777f6b01796e4c8db1238d670bcbf9ba42a1905b7d93109396cb045816a4d2853dbb925631affe8018b095747769d8068f24d423012cc97a250da57369644da40a97c7725379c135b09444b92d07b901d4ccf06c394af3c829ee2484084ab972095b0e943eea688aee7aee007bda69cff514705dcd1df4d0a9ab605d0575ed02aa2ba4a276c147118d0090729aff74fb6b95d3141d5ca5eff6d45e57d35dbdabab7d8c7b20970a9b5d3f380194c284b09832520e5b1edbc6c83196e6c5d2328c8931a9da7f4dc801face3639d8b117d698b3eaa3f2109ffba468767f507b1348f94cebcd7d34c58306e284506e2abf04a6e518f668ec98b7351bfc464ec147f86dfe2ceea4870206151b25288414922bba1667295fcfe6a663ceacd1b452c82fd9f516c938ecd7ce6cd5535dcd798bf76f4671684554d8ecab722db73939aa728b82ec88cc4b19963b7b1a8d236affe26eeed8a6f5e33fd81bc5fce0fe62b1fcfadda8e9cb7cc394d6e49b8561ff14dc3c27323678904084ab8a9f786d8258a43f",
      "b140397cbbce04836fb45d7d96f2307ff89855d5f39723d600098bd3280575aed8d90a7262921e22b4beb2451cac34510b4288d2ed2c8ad5560c72b36729abd9c96902cedfa1551ee0a6b169fc014ca72c3d97060000",
    ],
    [
      "ETag",
      "HjQVLUgi1P469SwXllFXCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "147de72b48f73a92e13092253e0c67a609311b9b4f0b31a55c190eb8d8163735fcfbda02ea4bdb73cebdbd3da767cbb6c94f5ea5e4c926499eed1be0c7bb0ce4bb3e44209a420ab5d5580920f7ba1a24cd74f50c668bbff2949ec421f4bce8317911fb209b4ebb2ac1bea1a4aaeeac90c2db1c8a5428fc65b0ddf346ab6809fac6cd869b81e6865e93c7da68cbd5e7fc751edd4a25a6465aadc3f03908e7a4975ab3c76a6dcd53769844b0050e1583eb836a8e3b6072699c0b5ad60538021bce40f443746327671c9b9a724447518eef3beed8f77dcf1dbb136f3419ca0b6454e658e98ef507b9cc97286911e1af764fdc2e1edec12e8c210ab2bdc9e73621251d74f3885ca8b63fc5d680e2ebb0e02841bc71545e0418070f64886286daaad44948de80a11955bfb5c865cf59adf50f4a788c0c18020000",
    ],
    [
      "ETag",
      "CeCHxmzdzsvL44R3bDsqBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfdb7243400000d07fd9e724e352297dc354695c924a35bc18d6b2ebb2d82568a7ffde4ccf1f9c1f904188384fa7be4114bc802d93b4033c9c7ad5d82e30a3638d6942f573b4366b90cb17c75c4517867a9e7c73eae088e1afa9aa9d6e1125a76cf45e97f352e804f54330173c84c65098fd555c8feeab756df5592be94cdbd20ead48956109e3776a205f11f350a966ab13d916db3e165ad783f322f96fd2a5f69ecd68844638ee1139def889050c6fc46f5832df8373712bfcf6d3537289f0a57aa27b85d8bcc2e63d063b80d68130c453f298c98aa6edc07f339db6013dae06ca1862e0f70f5d5a450e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-89-1588841517427",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "a3",
      "30",
      "10",
      "7d",
      "cf",
      "57",
      "20f6b509b99084548ab65142769112b225a455b55a51db18ea96608a4d5751957f5fdbe4029baaea1bcc9c73e6cc78ecf786a6e92f240df56b4d87247e2d70befbf64ca17e2533988358661e7a46989145c77cb99d640377be6b3f08f0785ca2886233b0cd12dc64b4c81166d79b752bce6991819cd2a6106c5aa366a76f5996d9e9778666775872194ea205495fa4c213e719bb368ca38f564c699c609011d642747b8a1b6f5d23cbe933469c19f5b286a8c48ccf0b7f4f28029cd074bc5997260a86f3006f0149a48d333b843775f91601db562cd06f046180102d522ead953288a611898b5c890ba577111461e5f9f45b09e86b7b614f7d0dd1a4d8a6410ab6f84a0b010701df65589b7baba5f6c831e38f2dc79dafbce5c477566eb09efeb49793d674b5d82cddb576ffd3f66c8d03986025a18db51bf5e78a1f654c150d850e4995355f662b8644f6304ee783933c494811618ee1032c18b607a063b5473082431459bd3e8cda18420b0efba007db686462338418541594b3920f529a0efa660401ee06562782811976602074bac1a08d916975074330eaeb07f6fed40bca31e07846584619390c5b9f7af6c4b703671eb8b63db367e7d6ffe6e4027def3902ec7b1b772a58d53145a048f8ac6cb43ea45af7f25caa8d7d36c18b06b29c50614a2d81e3fab63799face5dc586d8c8058e01daad5fe54e462061f8cc06b9385a8ef3250de539eaee6459ed57edd7af238809c4ef93cf733b0228d745f572b12ef53abe58c7da28caa32ca3fadaf71cf7875e49ee3f96b90349f181cedb21ac67625a4f62c2aca6d5f8ffeb4fa352431737fc604fbfddd8de83e4aa",
      "9ccc7838c2394ed1b9ea17365d12cbf4171e30013f3e2792215e94537dc645585c3ac4ced5d5e6ca2b48cac91f0547ddeec03a0a0a62ce2f113deb54f2e24991b5f016a7fc388bf2692907b9af592a2a76144dc2c53d700f87b86fec1bff00157ba26f17060000",
    ],
    [
      "ETag",
      "Y3/dpiL14kQAp6NFy0Ybig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "7e",
      "df",
      "af20f5514880c098263e80a292e0c43112134348dd6e73baadb3bda984f0df6dbb217bc12c91c497b577df77fd72d77edb188d06798b529f9c37c87314bee7c0d72721e083da3820f218855c32960a204dc506a4a1623ba6675bddeec2eee3e3358ebfeebba766185e5c142ce1bd4042256f2323190711c4be90f1938e1b655e63294d409de8b1384fd2950e9b7b18d79986e7ae33b16faa48c27c8dd88be974389a8e49096d9b87457c8a74a58ffc9b845e974629465ed9b3030170483dd8779d71f60a1e4ef478054db2185a82e5dc03518aa8c2020e39cb33ca196bc954cb3a6b75fa9665f53afdcea0d71dece831f328462c55158b39f9d147863476d8a71a31318b3be045584c7c370a12542ea13a21097da8e2c8273fb96df317e2c476cd5e855bee9646a5b2b6aa9c5410c5b0fa277579252f54bef07adae5333992384d589e624de9ebe9fdf0888d4b37d46dfa6ae88e8f252b507aa1a6ae3bb91bcfdde1ddeca0b8fc2ef72618ad11c48c33e93101da599d76cfea0fcc36d939f5922927a2322af21c74daa3f28f751ba1cc053416606c8d6f673c7bfa1d050000",
    ],
    [
      "ETag",
      "R6cN822UN5tXFtExO2+6gg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` = ?",
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
      jobId: "grouparoo-job-90-1588841517427",
    },
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
      "ad",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57",
      "20fad24af105df8964a5964d5a2a07275c925e54d9cbb2389b024b76974469e47fef2e6083e5348aaabec1cc9933672e3bcf0d45517fe124504f15d5c79bfb0cd1a77777c4574fa40771b0911eafabc55f96dcf9ed71903e5e7df7be868f97d3c9a440e13c9a81388d5093918c42c44e3da7b5a1244b0125a429089b7aa7a90dc6e3715f1b68a37e7754c43214850b9cfc920cb79ca7ecb4dddee9686d08d94408a498b52089f7f6f643b79d5272872067edc3b46d9189b55f4f7c1611083826c9c4730a111943748562802329a38a0efc8f87f42d0ce2d646a01f3044004292255c4a2b68204942bcc9684e2e989e85519873cdfbdf9a41758c85317395d9d2b3dcf76b104bbaf507053065b5a288651157ceede585b24e45f65bc0105b2b379f0ddb10164a421ca1150ed6ca443953a6d65ca970b92d1795270c10e338c965b9c08f504d8cf096ad345f98e29e4292002e984bd86ad419026ddcd1fdd01fc170dc1bf86107f9fed81f0d40cfef40bd8ffa818f409d81cbdc453c4844af00d2a03ff207201c6a5d188e4080c643add7d383b0af77f44e30f44341a6960cdb7d3d9022c0d11cb394305c365b9dd9c6d43556e6f9ca328cb931afca7fa4f8087d639b02ecda9e351351f5568540f47d5e147bd8a8830e70d1d37a71af75f1a88094622244e54b605aae614f67ae795d932136728136003e39f772274310315445030a62c411bd20819ca57ab9744cd75c5ad345c5902fd9e50ec904ecc75e6c55539dcd7d4a0f37a3185a619532877db5e6db9ebcc8720da2ec059a87d2ac6a071c8d17d8fe459de3daa6f5e93fc803a918dc5f24965f3f1b357e555c98",
      "529a7ae519f637199bfba4c74621a2288155c637bc361958b8df7040057c77cef243ed54f9191766f1f021abb2e72f479e011c17d32809f59ed6ebee084520e5c788ee40df218e4e9acc856294f05d2f8ad35634727b2029abc9c9c3245cbc43ab1ce0b6b16dfc01234df21997060000",
    ],
    [
      "ETag",
      "U21mJOtSzUtapwQZUXfwPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff4d515d6f8230147de75790ee7564b068744b7c18ce6d24c64c9465c9424c852bc280cbdab2450dff7d6d01f5a5edf9b8bdbda727c334c9775ac6e4d124db34f9a9811d6e12104b75f081d7b9e072abb0e4406e951b044d947b644f3f9eef3e8f94ef57419cf117cf5ebbcbc9a475f1680f0595be934412ef52c8632ef197c666c76bada405a81b371ba61bea1b3a4d1c2aad798bf5ec75e65f4b05c65a5a04f3f9933b9f914e6af41ecab5d14fc970ebc30e1894115c1e5431cc20129e9e9cd3a2cac1e258b30878d74415b672c2b0ae2843b424653dd896331c8fc70367e88c06f7a3de9e6344458aa5aa0856e4dc5fa0a0b98f7f6a7ae2b4f1b016b661f45190dd553ed70949e95715dbe44c35dd29347a145e9ab90701fc9da19c8543dc56f6514c518d2a541282d5a0e988cadf7a4b45c7198df10fe30a988118020000",
    ],
    [
      "ETag",
      "70CVD/XzashSUdjsFI0TBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db6e82300000d07fe9b318b540cadee4a2e3b6d09801e3850056c402ad05add5ecdf6776fee0bc40d534649aca995132820fa0aa8db56c962143b6c28df6c36fa6bbf2b87f13fcec69585d71e7c181653285d738437aea9978328ba842514f477829aaa35fefa066b4865caf0e65d80d4c2fe0b78b0215f37522277f4ef9be0e8c56f46e11a9e99c38ac74b6d1495adc4e62e7aae5a885789fd50fcba1c74d386fe32c913543b9b84b1546cf434fbfa448ab519f6d075d9ee97df6d91050da29eee4bb7294c5e9138305200fde093295dd7b060dcb5a80ff66392b4ede579b548208f0fb07502e818205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-91-1588841517427",
    },
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
      "00000002ff8d545d6f9b30147dcfaf40ecb50df90e548ad6287157b4846c84b4eaa689da8ea1ee08a6b6e9d455f9efb3211fb05455dfe0de73ce3df7fadaaf0dc3307fd3746d5e1826a2f1534ef8cba74786cc339d2112c63af3c37f020b0efede5d4f87c00a50777cf3158d47a312450bb6809b2c21e782e51c1371b15a3663cef20c72c6ce95e0b9d33e6ff76ddbeeb5fbed61af332cb98224d18ca6bfb5c2839499b8b0acbd8f66cc589c109851d1c46c73885bcf1d2be3ec916029ac7a594b5512d6fb853f270c4349593a5a2d4b13b9203c241b48136de3c85ea3cbba7c93c24d3356e8678a09c498e5a9d4d64a19ccd288c6392fc495d2ab0aaa70e1f9f05b09984b300393c0c02cc9376998c20d3933d650c250be64c4b8f21773e35e1221ef9bae77b5f0e7e3c05d78e172720de6e3e664315bcdbda5717b0d7c6048881252481823e3b2f8f3d44f61ac28ba563a342dac053a5b31a4b2bb71ba6f9ce441428b287382ec60e1b035806dbbe5a0080d716477fb286a11846c34ecc32e6a61a7477a6b446055a17056f261ca52d2434388b013e28ee3843da7df0f218e06a13d807677d06d77faeb81b9636f0fbd604ea024532a3226e86ed8e6c407e30084ee55e8013005d363eb7f383d41dffaae0207feca9b2856754c11cc13392d1bad0fa9d6bd3e976a63ef4df0a4818c53a64c154be07a01f0c793c0bda9d8501b392331c42fcb27bd93114c0439b22157472b099fb3b53e47d31bcfabfd16fbf56d0f120af1f3e0f3d88e02ea75297a3959977a9d40ad636d14e55196517319f8aef7c5ac24b76fcbdcc0247f43e77917363335ad07356151d36afcfff5ab51a961aa1bbeb3677e5f01ff4e738b9ccef824229ca4f858f5039bae8965fa030f9882ef9f13cd502fcaa1be902aac2e1d16c7eac5e6ea2b48cbc9ef059daeba3e7b4145e4f214e10c3a7bc4c993a26b910d49e57e16e5d3520e725bb39457ec14340d57f7c0db1de2b6b16dfc0379ab37bc17060000",
    ],
    [
      "ETag",
      "ZRqEOrEzYHD7E/Tb3AVKbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5544d4fc24010bdf75790f50a09c5f2a1098782a8988a02351e0c214b3bc56adba9bb5b0d1afebbbbdb22bd609a48e2a5bb33efcdbeccecbe7e19b51a790d139f9cd7c82a5cbf65c036276b1053b59901cf22c1e59262c281d4151b045d2bf6a97de3a2d5e2ceb0f90ad3cfe0711030dfeef77316f79e21a692f72523190721443e97f1938e6b455e63098d419de86194c5c95287f53d2c36a986e7ee6c3cb92a2331fa1a993c388e3d7046a480b6f5c3223e1574a98ffc9b845e174621465e7035830018241eecbb4e19be8027c67abc9cc669040d8e19f3801722aa3087d70cb39432c4864c35cecc86d9eef57a96d936bb56abbba347e8511162a22a1ee6e4475fa0a0d10c3fd4884927bf039687f9c477a32041e912ca1392d0bb2a0e7df293dbd67f218e276ec72a718bddc22855565695930ac20896ffa42eafe499ca175e4dbb78264712a7316689a8287de9dcd9476c5cbaa16ad317b63b3a962c17d20b1575ddf1ed68eedab7f707c5e577b137c1602380df33941ee3a09d6536ad5ebbdb69929d5387a89c28945105cb40a73d2aff58d7a190b980461c8cadf10df0b3262d1d050000",
    ],
    [
      "ETag",
      "3AJTo42sLC0keQzfWBfrdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` = ?",
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
      jobId: "grouparoo-job-92-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffa554616f9b3010fd9e5f81d8974d6b1292402095aa2e0a74434b494748bb699a120386ba054c6dd329aaf2df670349889255d5f60deedebdf7ee6cdf4b4b92e4479485f2b924fb287e2a2059bf7bc0be7c263290815864661ff335330d8dd9d4fd6e78f70ff9d727737c7151a150594d419a27b04d71410248cf17f34e4c70910382719b13b647fd764f330c43ed693d5dedeb552d85493445d9a360b8672ca7e7ddeed64727c6384e20c811ed0438ddc5bbcffd6e4ef0030c18ed1eca76b912edbe2e7c99e0003084b38bc5bc32515048963005281136f6d5a1ffe990be8340da8939fa19051004012e3226ac553401ce221417a424e74c2f3cc8c3a5e7dd6f2320cfada935f1a4c96ce178ef57201574ab0f12a0d27249202d12265db9b36b699573f57b40215d49775f2cd7e211822394c0250a57d28574298d1d5392562160b0fc2f0d956221a40c65a5250ff8096c18e1d97a8cf68913dc510812c0b87a0d5beaca10f40c65e447be1e44c640f32305fabee1eb1a18f84a3052a11afa10341998d0aeea41863310a946e46b8aa2f92184a1a16bbede530783e1c018f4794a81a13eeaeb3db966d8ecfa0908e44d9a88e698a27ad0f2c4b5c69eb5b4af968e659996b96fff374147e83bd7e660cf5d38135ed51c5504f8cccdaad9c3411d4c80f199369b7b6d8a470de404616eaabc00b6e359ee78e2d9b70d1bfc364e610c82f5fc49dcc7082414eeab01012964905ce3509ca57c339bdb9e3d73c6d33d4379c16eb648ca613f7766f73d35d9bc757e7833aa43aba2c2e650951bb9cdd949965b901427689eebb0dc3be0689d60fb1777a638c4ff37d757fa4a5b11bbe22f2eebaf5fad8688cc174ced4efeb6b0dc1fa2b6cc898c0b23486016ec65dff0e04461957ec3fee4f0ed3613157ca1edf429e361fef603ba572f1f8fd80428ad0ea4261ca9fcb56d09792161c788d1708738da68420ba63063db59549bad1ae4e6c052d1b0539609387f8a8eed7c2ecdb736ad3f365c571f96060000",
    ],
    [
      "ETag",
      "O+pytD85tIsRX8ThjpKqDA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e8230147de72b48f73a926134ba253e4cc29c89311b9bdbb285980217c4152eb6658b31fcbb6d01f5a5ed39e7dede9ed3a365dbe4372f13f2609328cff635f0c34d06f2551f02103593426d159602c8adae0649335dfdb4afbe8b28a1defcd3fbda4791d87eb0229b4edb2a116fa1a0aaeea890c2690e2c110aff186c77bcd14a5a80be71b3e166a0b9a1d3e4a132da62f5eecffde05a2a3031d26abd5c3ece963ee9a4c6eca15a1bf3941d4601a4c0a18ce1f2a08ae30e62b930ce052d2a068ec09ac720ba21bab195338e754539a2a328e77ee0b8a3c964327447ee783818f7e50c632a732c75c7fa8d9ce74b949405f8afdd13b78d87b7b00da38f82a457f95c27a4a4bfb6f94c35dd29b47a145e86cd0e12c40b47e54580717047fa283cd456a54e42f21a0c1d53f55bcfb9ec38abb14e76d50df018020000",
    ],
    [
      "ETag",
      "FqpZmbdaCGWCXqbbshVlmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "300000d07fe9b318c139e9de5631a34190ab83bd345d2929f742158565ff3eb3f307e70750c6b852e4dad7bc036f60a6065cb3b5d39b680e8a97b3b7c40db42ef4dbdf4427ccdf53d4c47411da1107f80607394f8d5315af48b4f990d49fb67ff0a654db85b93298901f7e387afecd46f8be87e7426689eb18e9bdf59212874d86bb6da17d35ad6bc8d3859a9aeb927acc6cb91089795ef184886367a7d352fac5dc4db5509b4ecb62a51e3a3c187735488495547ba68b08b5bd2e8291569615aad28c185801fe90e5c815299fb3ed0ec215f86f92eb2cf9f38a381df9087eff00c05e397005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-93-1588841517427",
    },
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
      "8d",
      "54",
      "5d6f9b30147dcfaf40ec71cd370452295aa384ae6809e90869354d1335c650b780293699aa2aff7db6c9072c55d537b8f79c73cfbdbef65b4b51d4679c85eaa5a206387e2951f1fae58904ea85c820066291f99a06e96372ab2fb290deb9db41f8a31c59f16452a1b0645390e6096a53521610d1cbcdba1317a4cc4141489b0bb6c7c3765f374d53ebeb7d431b181597a2245ae0ec59283c3296d3cb6ef7e0a31313122708e4987620498ff1ee76d0cd0bf28420a3dd66d92eaf44bb1f17fe9610081826d964b3ae4c9414153e4a014e848d133b0cae9af21d0cd24eccd15b0c118090941913d62a1948b208c76521c5b9d21b0ff2b0f47cfcad05d4b5b5b0669e024952a6999f81145d282160c067af3952aeddd552796088b2878eed5cafdce5d4b3578ebf9edd58cb6967b65a6c96ce5ab9bfb15c4b61204890945026ca95fc73f88f34268b865c0767d29a27b235433cbb1fa7fdce491e2584083747d11ee61bbd11e89bbd711005068ccca11e443d14046660e86018f4e058435a1820505790ce2a3ec8483618e9e3516f007cd3d0235f0381e98f0330f00d63a80d4606e885e391ba67ef8ebdc0020186e698e684e2fdb0d5996b4d3dcbb7af7dc7b2e6d6fcd4fadf029fa1ef5d9b833d77e3cc38ab3ea60894099b578d3687d4e85e9c4bbdb18f2678d6405e60c24dc925b01dcf72a733cfbeabd9e01bb9403180afeb17b1931148283ab141c18f96a1624942718eaa335dd6fb95fb757b00518ef87df4796a8703c5bac85eced6a559c7e3ebd81845759455545d7baeed7c576bc9ddfb32772029dfd1d9eec36acea7f5c8274c1b5aadffbffeb46a35547ec3f7f6d49f1bcbfd25b83227322e8a50813278aafa894d17c42afd89078cc30fcf8960f017e5589f321ee6970ed25375b9b9e20ae26af207c1b1ae0d7b07414e2cd83942d7b403e2ec4911b5508a32769845f5b45483dc352c95353b9226e0fc1e38",
      "fb43dcb576ad7fffbce0a617060000",
    ],
    [
      "ETag",
      "+mbmhlP5LndsVRv2dKu6Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "cb",
      "6e",
      "c2",
      "3010bce72b907b2c48d0f208957a004a5b24de84435521e43a9b1048e2d4764014f1efb59d00b9b48a54a45e62efceac47bbf6e460140a68e385367a28a00fcffd8c81ed6f5c1013b599028f7dc1e512d190032a2a3608ec2af66dfb8d4c76cdb7f6f6ab53ae87c45d0f471bf7f1316171b282004bde414632763cf06d2ee3771d17d2bcc6421c803a91503f0ec2a50e8b1758ec230dcfac696ff89245026a6b6438eff75bed7e17a5d0b1f8b3888d055eea23ff26a1d785918aa135fd9882030c420297ae2346d740444f8f97e320f2a1c469cc08f054441526b0cb681c61466949a64acdfb52a5669a66b552ab34aa778d13dda7040b8f86aa623e43677d4105f6a774a7468ceac91db0244c267e1a05723297909d9084b6aad8b3d139772cfe42ec0dad7a35c34d770b2353995b554ecaf17c58fe93babc9215962f3c9f76fa4cae248e031a8722a7f4737fd4ba62e3d20d799b7e6a59dd6bc97221bd9053d7ea0dba33ab3518ff282ebf8b8b09da7b017ccca8f41807edac4ab96ad61af5323a39b54395138532aa6031e834c1f28ff5ea099973b0cfc1381adf4ffd62961d050000",
    ],
    [
      "ETag",
      "+BYcQw9YBvzC06ncgjNOkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` = ?",
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
      jobId: "grouparoo-job-94-1588841517427",
    },
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
      "ad",
      "54",
      "61",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "9e5f81d8974d6a12a02440a4a8cb12ba2125a425a4d53a4d890143dd02a6d874eaaafcf7d94012a2645535ed1bdcbd7befddd9bed79620888f280dc481207a287a2a60fef2e1017be219cf400a229e993d24f40bba7d341e656f16ffbe738369645d0f87150a95d50424590cdb0417b90fc960b9e844392e329063dc66846d436dcb3d5dd755b9276baaa255b504c6e114a58f9ce19ed28c0cbaddad8f4e847114439021d2f171b28b779f956e96e307e853d23d94ed3225d27d5bf822c63ea008a7c3e5a232511098af600250cc6decab03eff3217d0781a41331f433f221f07d5ca4945bab687c9c86282af2929c31bdb2200b979e77bf8d80b830a7e6d815c6f3a5ed7e5c8384d3ad3f098008ab550e491153e1d299cf8475c6d4ef0181642ddc7e331d9345721ca218ae50b01686c28530b22782b02694d92d03a5a3522d8084a2b4f4e4022f860d272c5bcfd13a71843b0a4e022893af612b4dea0359970c2ff4343fd4cf7b5e2841cfd33dad07ce3dc93754a8061e044d06cab5ab7a90e254d1145d05522f508cbe1218fdd0d35568487ae8193008a1a601dd537d00c49a61b3ebc7cf21a07082488609aa272d8e1d73e49a2beb72659be6c49cecdbff95a323f4ad6331b0eb2ced31ab6a8e2a046ce893aad9c3411d4c80b299369b7b6b8a470d6439c2cc5479032cdb359dd1d8b56e1a36d8759cc208f82f8b277e21431013b8af0639482085f90c07fc2cc5abf9c272adb93d9aee19ca1b76b5451206fbb133bbefa9c9e6be648737a33ab42aca6df655b191db9c9d64b901717182e6b90e8bf20147eb04dbbfb873ad99b97047b3abffe0509114a92d296c63b8b23290cf07b2da9124e9ee2fc6ebaf",
      "9fad86a4c8964e6d58bc5e9ace775e5be678c68121cc61eaef4dbce30df2c22afd8e9dcae0db0dc72bd892dbe9b3fd40115b073ed9ab97ef892f079454675413b277a9eb5b425698d363842a295bc4d196e35a308129ddcea2da76d5203707968a869db28cc3d9ebb42dfb6b69beb569fd01bffb1a7eaa060000",
    ],
    [
      "ETag",
      "MjmtBiWk9k1bMlzZTdLgIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6f",
      "82",
      "30",
      "147de75790ee71231b0b4eb7c40734649a1133d97c5a8ca97061c8c7656d9953c37f5f5b407d697bceb9b7b7e7f4649826c9d232222f26d9a6c94f0dec70938058aa4300bcce05975b85250772a7aa41d04455cfb2b7c5d2c1d5f4e9e8c7b7ee3ebfff4b32773c6eab78f80d0595752789248e53c8232ef197c666c76bada405a81b371ba607ea1b3a4d1c2aadcd179fdeab175c4b05465a5aac7cdf9df81ee9a446ef6bb936fa293bdc061003833284cb832a863b08c55c3be7b4a872b038d62c04de0d518dad9c30ac2bca102d4959cf8e650f46a391630feca1f338eccb730ca948b1541dab0f729e2f50d03cc0bd724fec361ed6c2368c3e0a125fe5739d90947edbe633d574a7b5d1a3f565d8e42080bf33945e3868070fa48f628acaaa5049085683a6432a7f6b968a8e331ae31f77df071518020000",
    ],
    [
      "ETag",
      "HkKNQ4oUC6zLf+Awl/xgkA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1f8b08000000000002ff1dcfc97282300000d07fc9d93a299836e98d4db0b88020422f0c851040c2ae2c9dfe7b9dbe3f783f208a63daf7e150df68053ec01c09641dafcd1acbb39dda6e03870a25e73669f56b79d105e298fab750a0ba2c5e4fc7ac2dc63930da74f66df6599b4b67229cee8896d05052ac83a070cdda6c219c9c3690de5c0f5a1bdfe04928ba194ed898785339fa0fa6bd645cf5e4e83c777be70e178cf08d73a2317ca88ea74cb8f8f77c79f70cea179c49a4b94ed18202551d76c8bb4ba9ca0245fc92f525dfeef5476c41827d0c56804e4dded13ecc9f331111b202ffcd70981bfabcca34ea68077eff00eb0951e105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-95-1588841517427",
    },
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
      "0002ff8d545d6f9b30147dcfaf40ec716d12f251a052b446095dd912b20269b54d13358ea16e09a6b6e95455f9efb34d3e60a9aabec1bde79c7beef5b55f5b9aa63fe27ca59f6b7a8cd3a712d1974f0f24d64f64067190ca8cfb40a7e3f9e7593c749fc6bfcaef7df02d48af47a30a85159b817591a153464a0a113b5f06ed9492b20094905321786a0f4f8da1655903636898839e597119ca9219ce1fa5c23de7053bef74763eda292169864081591b92f53ede79ee750a4a1e10e4acd32cdb119558e7fdc25f320201c7241f2d83ca44c9108dd01ae04cda38b057f14553be8dc1ba9d0af43386084048ca9c4b6b950c247982d3922a71a1f42a8222ac3cef7f6b013d7066ce24d420c9ca751ee5608d4eb415e020e22f05d22efdc55cbbe388f1bbb6eb5d2efcf93874175e144cae9cf9b83d59cc96732fd06eaf1cdfd1388833a424b49176a1fe3cf1a38ca9a22ba18373652d94d99a2191dd8ed37de324f71252449863680b8bccee1930acae1d27b10913ab3f8c932e8a632b3687a01f77a13d4083558c405d4139abf820273904866df607ddc8b6ad7e3448801181b8072221914033317a5d03e95bf666df0ba4087034c5ac200c6f87ad4f7c671c3a917b19798e3375a687d6ff527c84bef55d010efda53711acfa981250667c5a35da1c52a37b792ef5c6de9be0510305c54498524be07aa1e38f27a17b53b32136728652005f8227b99309c8183ab0011547cb119d93953c47dd1bcfebfdaafdfab1033181f8bdf779684700e5baa85e8ed6a5592714ebd81845759455540f42dff5beeab5e4e66d991b90956fe83c6fc37a21a6752f26cc1a5aadffbffeb46a357471c3b7f6f4eba5e3ff945c9593191f2588a21c1eaa7e60d325b14a7fe00113f0dd732219e245d9d7675c84c5a583ec505d6daebc82b89afc4ed03eb37bd64e5010293f4298ddc17087387a52642db44639dfcda27a5aaa416e1a96ca9a1d459370710fbced216e5a9bd63f7923ca7017060000",
    ],
    [
      "ETag",
      "IjrDAM+Lb5IqAZuK3aJSgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7ddfaf20f5151266f8d284878128240361ccf8600829dbdd9c76eb683b9510febb6d37642f982592f8b2f6de736e4fee6dcff646ad86dea3c447b735b489c26d066c77158258a88d033c2382cb25a5090754576c103854ec6d302056d819849be6f310c653fb6b1b998b7e3f6771ef15622c797b19c9388880f85cc62f3aae15798d25380675a2474916276b1dd64fb0d8a51a5ebace64f6504662ea6b64f664dbd6c01ea1023ad4cf8bf858e0b53ef26f127a5d1985187aa31b070260907870ea3a65f40d3c31d1e3e5384e093438cd9807bc105185391c329aa59851da90a9c64dbb61b67bbd5ecb6c9bddd675f74827d4c322a289aa785aa21f7d4105260efd5423469dfc0e581ee6133f8e0205a54b284f48421faa38f2d14fee50ff853899b99d56895bec5646a9b2b2aa9c54101158ff93babc92572c5f7835ede2995c481cc7344b4445e97bfbd1ba60e3d20d559bbeb3dcd1a564b9905ea8a8eb4ea6a3a56b4de767c5e5777532c1602780cf19951ee3a09d65365bbd76b7d34447a70ea972a25046152c039df6b0fc638d23217301261c8c83f10d867239f11d050000",
    ],
    [
      "ETag",
      "qfBlAg6Bgb0WCeHMLxqi1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` = ?",
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
      jobId: "grouparoo-job-96-1588841517427",
    },
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
      "00000002ffad545f6f9b30107fcfa740ec65939690a410a052d46509ddd052d212d26a9aa6c418439d02a63674abaa7cf7d94012a2645535ed0deeeef7e7cef6bdb424497ec069209f4bb28fa3c702d1e7776be2cb1f4506e5201299cffa4c5df753657cf37badeabe65cea2ab6fd1705855e112cd4092c5a8cd48412162e78b7927a2a4c80025a4cd09dbe6a0ddd30cc3507b5a4f57fb7a8565280ea7387d100cf7799eb17345d9fae8448444310219661d48925d5c79ea2b19256b0473a61cca2a5c8929af0b5fc404821c9374b89857260a86e8122500c7c2c61e1df89f0ee93b18249d88573f61880084a4487361ada281240d7154d0929c33bdf0200f979e77bf8d803cb7a6d6d893c6b385e3bd5f8144d0ad3e488049cb2545ac8873e9d29d5d49ab8cabdf0386d84abafb6ab9168f5012e2182d71b09286d28534722692b4a51091d25229172096e3b434e5013f460d2b3c5b0fd23e71863b0a410272ae5f972df5ee00f48caee987be0e43e34cf3c32ef27dc3d73570e677a1a92235f0116832e442bbc28394a47aa0f58d7e1884810afaa66a864085aad9057d0d2168403f1868a169063db966d8ecfa8114811c4d30cb08c3f5a8e5b16b8d3c6b695f2e1dcb9a58937dfbbf283eaabe736d5eecb90b67cc51cd5185804f7d52357b38a88309e47ca6cde65e9be2510319c5849b2aaf80ed78963b1a7bf66dc306bf8f531401f83c7f1437320431437b34a0204139a257241067295fcfe6b667cf9cd174cf505eb1eb6d25e3653f7666f73d35d9bce7ecf0665487564585cd812a37729b8f27596e415c9ca079aac372ef80a37582ed5fdc5d4e67a3ffe4afa3a97fb1587ffd6c35e865be5f6a6bf2cdc272bf0b6c991319178588a214ee05dff0da04b04abf617df2f2ed321308becf76fa2ce761fef021dbab972f47ac019c54ddd684a6ce1ff4969003697e5c611abd6dc5d142135a284169be9d45b5d8aa416e0e2c150d3b254c94f377e8d8ce97d27c6bd3fa03caf0cdc095060000",
    ],
    [
      "ETag",
      "B7O4j2n/CQxj47bE9OgMKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "5d",
      "6b",
      "83",
      "30",
      "14",
      "7d",
      "f75748f63a6116bbda411fd6225d4164b315c6869454afce4ebd2e891ba5f8df97446dfb62723e929b733c1ba649be8b3a254f263914f94f0bec74978378539b10785b0a2e97066b0ee45eb941d05cb9a32658791f5178984fd6f0eeec1c675b45f962d1bb78f2051595beb344126705942997f8536373e0b556d30ad48dfb3dd303f50d83264e8dd636c1ce5b7be1ad5461aaa520f2fde7a5ef9141eaf41acb6fa79f72c443081930a813b83ea8617884446c74724eaba6048b63cb12e0c31075b09773866d4319a225296bfe68d953d7751d7b6acf9cc96cb49798505160adcbd992cb7c81829621fea9f4c4eeeb613deccb18ab20d94d3fb70d49e9571d9e900bd50dbbd818517c1db63c09e0af0c65160e3ac10319ab58a18a2a541382b5a0e984cabff5528881333ae31f6d13533718020000",
    ],
    [
      "ETag",
      "UpNCEZURb92GeX4T44SmUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fc9599c02b2f5188150828a05abed25c312d6b21890259dfe7b9dbe3f783f204a123a0c64ec6ada8257b04692b14db6b8d3e17ace18796027da312dfebe07ae10c066af659e5d4ee7e924a8625d842224a72e94d0e8716c8951aab6c7f9e3bee4efd920b0801f3e0fc85391e93c34142cbb8057b12ccd73ec63dfc05d6b37c4aacc74e23ecf5ad56d605b8992739d5519b688042a8a8bd91a3ac5bdd92f5842fb704c6d27943342c5c2b8bd9928bd5ea022d4620f8f63be2a5fe75a9f26c62ff9ac830da04b5f323a90f2399315c3d880ff2619d79e3eaf90468c32f0fb0758b4bd7405010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-97-1588841517427",
    },
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
      "000002ff8d54db6e9b40107df75720fa98f86e071cc96a5c1bb748366e304e1a55155960209b6096b04b2237f2bf7777f105ea28ca1bcc9c73e6ccececbed514457dc249a05e2aaa87a3e71cb2cd9747e2a9e722030c452293fdfadbb5ce5ebf6de6cff166306ddfadcecce87a382c5058b2295aa731d429c9331fe8e56ad9883292a72823a4ce05eb03addeeeebbade6bf7db5aafa3155c0a7138c3c9935078602ca597cde6de472322248a01a598367cb23ec49b2f9d669a9147f0196d56cb367925dafcb8f0d798f88861920c57cbc2444e2173618d702c6c1cd9817755956f60b46e441cfd827d40be4ff284096b858c4f9210477926c5b9d21b0ff2b0f47cf82d05d4a53133c68ee293385f276e82d670ae048821976d5250a6f662aedc33a0ecbe615ad3853d1f39e6c27297e31fc67cd4182f66abb9b5546e7f18b6a130e4c5202594a17225ff2cfe238dc9a201d7c189b4e6886cc910cfeec669be7392070921c2cd51d8c15cad7581da7a6be0859ee6877ab7ef852df03cddd3faa8ebb5fc410f7a8107a8ac209d157c9490a48b503b808bd0ed772e02b71700b803cdf35cafa36b5a8b4bea3d5dddb1b7875efc0c108309a629a178376c756c1b23c770cda96b19c6c4981c5b7fcdf009fad63639d8b157d698b3ca630a511eb349d168754895eec5b9941bfb6882270da41926dc945c02d3720c7b3476cc9b920dbe91338890bf593e8b9d0c514ce1c846193f5a06d99c04e21c556b342ff72bf7ebe71e4439e2f7c1e7b11d0e14eb227b3959976a1d87af636514c551165175e9d8a6f55d2d25b7efcbdca0387f47e7651756533ead073e615ad1aafdfff5a756aaa1f21bbeb3a75eaf0cfb4e70654e646c082183c43f56fdc4a60b6291fec403c6e1fbe74430f88b72a84f190ff34be7d36375b9b9e20ae262f27bc181deeb0ef6829c98b15344bfdfdd234e9e14510bd690b0fd2c8aa7a518e4b662292fd9913401e7f7c0da1de2b6b6adfd037f48e07c17060000",
    ],
    [
      "ETag",
      "rXz3N+wByMqly9F1YU+IgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "545d4fc230147ddfaf58eaa3109de16398f00088b26482c048fc082175bb83e9b6ceb65309e1bfdb7603f6825922892f6bef3de7f6e4def66ca3e93a7a0f620f5debe835587ea440d7674be063b999004b43cec492909801aa483670bc94eca79bdee3ea7bf0b51ed9cf713ab8b0ce5b4fdd71bb9db198bb82080bde464422f603083d26e21715eb795e61318e409ee892308de2850a2b0798af13054f9d8935bc2b2211f114329cd976a76bf7510e6d2bc7453cccf1421df93709b5ceb55c0cbd91d709f8402176e1d07542c91bb8dc52e365384a42a832925217582e220b337849499a604a4855a4aaad66d5a89ba65933ea46b376d5dcd143e2621e905856cca668afcf09c7e1847cc911a3467607340bb389ef4681fcc225142724a04f591c78689fdb567e215a43a7512b70f3dd5c2b5496561593f2831016ffa42eae6485c50b2fa79d3f931389e388a4312f297d6b8f3a276c5cb8a16cd3371da77f2a59c685174aea3ad67d7fea74ee1f8e8a8beffc6082ee9a037ba044788c817296715933ebcdc625da39b547a413b9342aa729a8b48bc51f6b107091f371c840db6a3f2705238b1d050000",
    ],
    [
      "ETag",
      "YDCXhxHwyOLZnuH/I+9YBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` > ?",
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
      jobId: "grouparoo-job-98-1588841517427",
    },
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
      "c5",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "147dcfaf40ec65d39a04f205548aba28a11b5a4a3a425a4ddb941863a85bc0149b566995ff3e1b484294aceadb9e12ee3de7dc73afedfbda9024f90127be7c2ec91e0e1f7394ad3fdc134f3e1319c44028322fd6588b8d974967bd4ea7ecf30bf93ebdba791e0e4b142ed814c469849a94e41944f47c316f8519c9539011d2e4824d436faa7d5dd77b6a5fd57a1dade4521405539c3c08853bc6527ade6e6f7db44242c2088114d31624f12ede7eeab4d38cdc23c868fbb06c9b57a2edb70b5f4404028649325ccc4b133945d912c50047c2c69eed7b5f0ee55b18c4ad90a39f3044004292274c582b652049021ce65921ce955e7990870bcfbbcf5a409e9b5373ec4ae3d9c2763fae402ce4569f2440a5e53243348f9874e9ccaea455caabdf018ae84abafd663a268f6424c0115a627f250da50b69644f246925be7ee78ad245d245e1a9a8e723ca7052b8728117a19a179ead26699d38c49d8410018c1ba8604b4d190055570c2ff03418e8ddbe1728c8f3744feb83aea740a3877abe87405d8189da251f24245194dec0eb77543080ba66f85dddf3c1000d3aba06029f67f8afaa760c28570a9b5d3f304380a109a629a1b89ab53c76cc916b2eadcba56d9a1373b26fff39c347e85bc7e260d759d863ceaa8f2a007cec93b2d9c3411d4c80f199d69b7b6b8a470da41926dc5471072cdb359dd1d8b56e6a36f8859ca210c0f5fc515cc9004414edd92003316228bb22be384bf97a36b75c6b668fa67b85e28e5d6f9194c37eedccee7baaabb9ebf4f0669487564685cd414faee5366727556e40949f9079aac2b27aa0d138a1f65fddf5ff61affaf7a7511397f972a96cc93f16a6f353708b9cc8382840194ae0bedc3b5e9a2096e977ec4e0edf6e32c1e0cb6c579f321ee6",
      "8f1ed27df5e2d5881580e3aad752d0303a5d752bc889193b4674357d8b38da66a2168a51c2b6b328b75a39c8cd81a5bc66a7a009387f83b6657f2dcc37368dbfc976381792060000",
    ],
    [
      "ETag",
      "zIC7m9zD2yypLt+zoKLMVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e8230147de72b48f7b8910da2932df14136b299183351e3c3424c850be280cbdae2620cffbeb680fad2f69c736f6fcfe9d9304df29395317935c92e4b7f6b60a7bb14c4421d02e0752eb8dc2a2c399007550d82a6aa7ab5449f3fef27ef8b47ef7e131f1dcfad37e978dc56f1680f0595756789244e32c8632ef1b7c666c76bada405a81bb75ba607ea1b3a4d9c2aad4de72bffc30f6ea502632dcdd7b3d9c49bf9a4931abd87726df4530eb80b2001066504d707550c0f1089a976ce6951e56071ac5904bc1ba21a5b3965585794215a92b25e5ccb1ebaae3bb087f668e08cfaf21c232a322c55c77a492ef3050a9a07f8a7dc13bb8d87b5b00da38f822437f9dc2624a5a36a76c8856aba5368f428bc0ef34e02f81743e9858376f044fa28de5059152a09c16ad07444e56f7d66a2e38cc6f8076d03c6f618020000",
    ],
    [
      "ETag",
      "TSoEs6hADQ/B+Wdv2B8uWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfc95283300000d07fc9b974a095cd1b080805ebb0140b970c84944dc29a42eaf8ef767c7ff07e4086109e67b8f42d26e015b0eca0eed1deed159df945d1cdd4e7bec36ba8a7fd479b90ab54b51cd98e84659ae352d7211efde4ce5dcc347921497331debedc48d421918cea5d3007cdb6d3cd8b6fe305e1dc81c989924018b9b44bac9656b0295637adcd26c9cb458946e1a5d3d836f92754f6eb907b71ad42e3eeb4a1624967541fdca5782c4320db7791976860f14d2497d88e27dc74acc4c454c39bb6aeaa49100f76006f433de119d6cfd95154d51df86fc2850df879d57136e109fcfe01c19e046c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-99-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6ea330107dcf5720f6b509e456a052b48d12daa226641748abddd58ada8ea16e09a6d8b45b55f9f7b5211768aaaa6f3073ce9933e3b1df5a8aa23e9274a59e292a24f15381f3d76f0f14aa2732833988656686c8e5d56f8c1eaf35e0b3ebfc1f345edc97d1a8429192cdc03a4b709bd12247989d2dfd4e9cd3220339a56d21d8b6ac7677689ae6a03bec1a839e5171194ea219491fa5c23de7193bd3b49d8f4e4c699c609011d64174bd8f6bcf3d2dcbe903469c69cdb29aa8c4b4cf0b7f4f28029cd074b4f42b1305c37988d78024d2c681bd82e74df90e01eb4e2cd0cf046180102d522ead553288a611898bbc14174a6f2228c2a5e7fd6f2da0faf6cc9e040aa249b14ec314acf189b2021c84fc35c3ca85b7982b771c337ed771dc8b85371f07cec20dfdc9953d1f77268bd972eefacaed95edd90a0730c1a5843252cecb3f57fc94c6caa22ba143d2d25a20b3354322bb1da7f3c149ee25a48830c7f016161afa29e89aba052368a0c8ec0f61a463084d680c411feac81ae0c10a625057289d557c90d2b4a7f7803e88f41075513f1cacfa7a6842ab1f421deaba6598c3d3a8ab6ed99b7d2f28c780e329611965643b6c75e2d9e3c00e9d8bd0b5eda93d3db4fe929323f4ade70870e02ddd8960d5c7148122e1d3aad1e6901addcb73a937f6d9048f1ac8724285a972091c37b0bdf124706e6a36c446ce700cd0abff2477320209c30736c8c5d1729ccfe94a9ea3ea8ee7f57ecbfdfab1033181f8b3f779684700e5ba94bd1cad4bb34e20d6b1318aea28aba8ea079ee35eaab5e4e663991b90141fe83c6fc36a26a6752f26cc1a5aadf75f7f5bb51aaab8e15b7beacfa5edfd92dc3227331e8e708e5374a8fa854d97c42afd85074cc077cf89648817655f9f711116970eb143f57273e51524d5e47782966599bd9da020e6fc1de254d77573b8431c3d29b2165ee394ef66513d2dd520370d4b45cd4e499370710fdced216e5a9bd67fc2ebb3a217060000",
    ],
    [
      "ETag",
      "LciGHZeckK/aSsKrxb7wNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "7d",
      "df",
      "af",
      "20f515a2183e4d7840455d82a863241a4348ddeec6b05b677b872186ff6edb0dd88b668924beacbdf79cdb937bdbb32fab5623ef51e2938b1a798bc28f0cc4e624047cd21b0764c650aa25e5890452d76c401a6af6da5ed90e765efacfe1ece5f413af961bb60c07839c25bd25c454f1be54a4e22002e64b15bf9ab856e40d96d018f4891e67599c2c4c583fc0b8490d3c751d7b725b4662ee1b64321b8f8797e31129a06dfd67119f225d9823ff2661d6b9558891157f73200001890787ae53c157e0a16dc62b699c3268489e090f6421a20b7338143c4ba9e0bca1528d7ebfd16cf77abd56b3ddecb6cebb3b3ae31ec58827ba6236257b7de44899c33ff5884927bf039187f9c477a32041e912ca1352d05a17473ed9e7b6f55f88f6c4edb44adc6237b74a959555d5a48288c1e29fd4d5952ca97ae1d5b48b677224711af32cc18ad237e387e1111b576ea8daf4f5d01d1d4b56a2f242455dd7be1f4ddde1fde38fe2ea3b3f98e07283201f05571e93609cd53c6bf5daddce19d939f58a6b27a2362a8a0c4cdaa3ea8f7517a1ca059449b0b6d63750f8535b1d050000",
    ],
    [
      "ETag",
      "vIjIRt6Y9XgUY/wtChylhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ?",
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
      jobId: "grouparoo-job-100-1588841517427",
    },
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
      "0002ffad54db6e9b40107df75720fad24ab50dbe812345a9659386cac609c689aab6b277d703d904b384855456e47fef2ef80272da4655df60e6cc9933979d979aa2a88f345aa9678a8a69f09441b279f7c0b0fa517a204581f474e7938d36b9b9d2b07b3309dac617724dee83f3f30245f3688ed6710875ceb284003f9bcf1a41c2b218258cd505615dd7b4bade354db3a37775a3d3328a600ea13fa6d1a3a4b84fd3989f359b7b218d80b120041453de206c7db0379f5bcd38610f4052deace66d8a54bcf997cc17212328a52c3a9fcf0a15198764016b4443a9e318bec29faafc0d8ad68d40a09f29014408cba2546a2b68088b7c1a64494e2e985e84519873d187df92419d59636be829c3e9dcf1de2fd15ad22d3f28882b8b45023c0b53e5d29d4e94652cb2df230e7ca9dc5d59ae252c09f369080bba5a2ae7ca85327046ca11b754be679ad606e5225796675d014f69946bf3100ea1a44878770db55f19e6814292a054d0ef600b43eb21ddd4fad8c706f1cd7617fb1a606c62a38bda5823fd0e74561850992195b98b7814b148ef75ba660be18e868966f82d5d237ea7d7f3b1de47be0fd0d2fa40fa7a47dd316c0ff59004500a23ca63c6e9aee3ead0b5069eb5b02f178e658dacd1b1fc9f093d41dfb9b6007beedc198aa872ab7c249a3f2a8aad36aad28154f4b45cdc9fba7852409c502644e59b603b9ee50e869e7d5b9221d6720c01229bd9935c4c1f851c8ed128416b482199b0959ca57a3d9dd99e3d7506e32343be69d77b2417b06f07b1c79aca6cde26ae6e4631b4c22a65f60ea3a8545365b94561f60acdf3ceacea158eda2b6cffa26ee6b9b6f3f93fc81bc46270bf91b8fbfa512bf1abe2ceeca4a93773cbfd2a63739ff4b8e043021139667cc36b938185fb2d7754e0f7474d8688bb7610c05361162f9ff063fafce9c83b40d7c5380ac29ea619edde9e500426e929c2ec997bc4c96193b9600d51ba6f4671e08a4e6e2b92b2929c3c4cc2c543747613dcd6b6b55fb4f6f2639f060000",
    ],
    [
      "ETag",
      "5UMy0MQH0bRQMg37JcPchg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "147de72b48f7b89181d14896f820864d13631467966531a6d60be280cbdab2c518fe7d6d01f585f69c736fef3d878b65dbe43b2d0ee4c526fb34f9a9809f1f12902b7d8940549914ea28b110409e7435489ae86aee07e3e9f23960aba33bf978e58f9fbd6abd1a8d9a2ac18e905355775148e13885ec2014fe32d86e79a3153407fde26ec7cd40f342abc97369b4d9e23d7c0ba37b29c78391169bf97c1ccc43d24ab539b7ea5b9b554eb88f20060e0583db4225c713303933ce05cdcb0c1c81156720da21bab191138e554939a2a328c7735dc71bf8bedff706deb0df1b76f519322a532c74cb664dae0b4894348bf04fdb275e930f6f609346970589ef02ba8f4849bfbab94fae54dddeb65687b6b761c159825872546604180b2ee9b298a0f62a75149257606846d5ef9aa6b2e5acdafa0773014baf19020000",
    ],
    [
      "ETag",
      "r8BAHP/BcQh0CWFr+Y2uSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb642d8e0410e8324e1104b16005ec261343085f050215e8f4ee75fa6ef07e00a19409818747c5eee00dcc049a6bba761f069a83ac4cf2d18fb72d92cb5197f199dec26be1cf7832ed0b329d3a973b58f9c6626ba7ceda6dd2e1d0d0c44a64e5e0f435172d5d367121d057582a8ddac7bba7e4a99117a1ad42a731e32ec70d2bdd2aadf71327133cdab9be0f2fc88972772cb467dcb9128ed4e41b5348b9a4d6d7ce3e7f2e157b0f078848990bee0569a6054c9f2592d11b378f1f8e75cf4f1e34c00ab0a92d7a2670f19a299a69aec07f130f73cb5e57c448cf7af0fb0774bf4d0505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-101-1588841517427",
    },
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
      "0002ff8d54616fa24010fdeeaf20dcd72a5251b089b97a8a57738a57c436cde5429765a1db024bd9a5ad69fcefb70ba8703677fd0633f3debc793bbbef2d49929f70e2cb1792ece1f03947d9f6cb23f1e43391410c8422137767c9f59b72f76332785b8eafbf6d6f1c7ff83a1a9555b8405310a7116a53926710d18bcdba1366244f4146489b13b6d5aeda56fb8661686a5fd5b573bd045314050b9c3c098a07c6527aa1287b219d9090304220c5b403497c882b2fe74a9a91470419559a7d15de8a2affe9fc352210304c92d1665daac829ca5c14031c091d47b8ef5d36f93b18c49d9057bf60880084244f98d056d240920438ccb3829c33bdf3200f17a20fbfb580bc3617e6c4912089f238711310a333c9070cb86c9b226966af96d23d4394dd77e6d66c652fc7ce7c65b9ebc995b91c7726abc56669ada5db2bd3362506bc081514d248ba2cfe2cfe53082b9afa9c0727853447646b8278b6f273fec1591e28040917475155e6eadd01508deed00b3c1d0646afef055de47986a7f741cfebc2a18634df43a0ce50282bf120e17e015533745d77d1401fb81ad0cf5da0c1be8b02ddf3f5a1df333c2057e8dd61169821c0d014d394505c992d4f6c73ec98ee7ce65aa63935a7c7d15f337c527d6bcf79b1636fac0947d56d0a401eb1693968d3a4c6f4e25cea83fdcbc19301d20c132eaa5882b9e598f678e2cc6f6a32f8462e5008e076fd2c76320011454734c8f8d132942d892fce51b6c6cbfabcc57efddc17515ef1eba0f3380e2f14eb52cc72b22ecd3e0e5fc78615e551965179edd873ebbb5c4bee3ea6b90151fe01cf4b159653eed603779836b85a7f7ffd6ed57ac8fc8a57f2e4eb8d69df096c9113191b052843093c76fdc4a60b6099fecc13c6ebf7ef8980f027e52080321ee6b70ed263fb6275c51dc4a5f515e1a0abf67ac33d210766ecb442d30f2d4fde14d10bc528617b33cab7a57472d79094d7e4143051ce2f82559de2aeb56bfd013f0e1d391a060000",
    ],
    [
      "ETag",
      "m0FnQx/YKC6xMAQByVTd9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f8230147de75798ee719ac8821f59e2034e3749d44dc4ec6131a6c2457140b12d6ec6f8dfd716545e5c4866b217da7bcfb93df4b6a707ad52419f41eca1c70a5a06ab6d0a747fb7023e91131b581a72268684c40c5055b281e39564df0f96dbd17bda32adc9d4f0f610ef7adf6cd2e9642ce6ae21c28277109188fd00428f89f843c5953cafb01847205774499846f14285d50bccf78982a78e6d8d5f8a48443c858c67c3a1d91df6510e1dabd7453cccf1422df9370935ceb55c0c6dc8d2061f28c42e5c769d50b201975baabd0c474908354652ea02cb45646106af2849134c09a989544dafeb35bdd16eb70dbda1b78c87d6891f1217f380c4b2643645e71fe084e3d0265fb2c7a8991d02cdc2ace5a75e20bf700ac5160968278b030f9d73c7ea2f446bec348d02379fcdb542656955d12a3f0861f14feae24cd6585cf172daf93db991388e481af392d2cfc357f3861b177628bbe99ee9f46f25cbb83043495dc71af5a78e397abb2a2ebef38b09ba7b0eec8d12613206ca5a7add68375acd3a3a59f589482b72e9544e535069178b276b107091f371c8403b6a3f800aeb5f1e050000",
    ],
    [
      "ETag",
      "+HbqMWu7AIQS4dyenvDxsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` > ?",
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
      jobId: "grouparoo-job-102-1588841517427",
    },
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
      "ad",
      "54",
      "6d",
      "6f",
      "9a",
      "50",
      "14",
      "fe",
      "ee",
      "af",
      "20eccb96550504c5264d67946e64565bc49abd452f70a0b7052ee5824bd3f8df772fa062745bb3ec1b9cf39ce73ce7e59e978620888f38f6c473417470f09443fafce68138e219f7408602eee9ddafbdc1fb3c584c91ba90be2e3e7bebf7f6edc54589c245344551124293923c75819ecf67ad2025798252429a8cb0294b4a53d6745d57654deea94aaf0ca610fa631c3f728afb2c4be879bbbd15d20a0809424009a62d97443b7b7badb493943c809bd1f661de364b45db7fc97c1912176598c417f359a922a7902e214238e43af6e19ef3e190bf8551d40a187a8d5d40ae4bf238e3da4a1a97c43e0ef2b420674c2fccc8cc85e8dd6fcd20ce8cb131b485e1743eb1dfae50c4e956ef044485e532059a879970654daf8555c2b2df230a74252c3e1996c12c29f171084becad840be152184c46c21eb712bee792d401e1b2505664f58066382eb4d9c809a1a68879ab869a2786b9a3e0242863f4156cd993ba48d6a5bee33b3dd7d73b9ae34be038bad3d350c791dcbe0aaae700aa33643c77198f6212a3aeabfa5ab7abb8e0a08ea2697d55ef384807a5273bb2aef5bbb20cdd5e5fac1836bb7adc145006234c134271d57171681903db589a57cb89618c8cd1befc9f293e422f2c93816d6b3e19b2a87aab7cc49a3f2a8b3d6cd4410732d6d37a717feae25101498a0913556c8239b10d6b30b4cdbb9a0cb696630890fb3c7be28be9a390c23e1aa528820cd26be2f1598a37d399699bd3c960bc672836ed668ba40cf66d27765f539dcd7e4e0e37a31c5a69e532bbaa58f36dce4eb2dca1303f41b3aecca27cc0d138c1f62fea66b6654e3efe077928",
      "6183fb8dc4eaeb47a3c62fb23b5349136fe786f585c7163eeeb1c0871462779ff115af8d0796eed7dc5186df1e351ec2eeda4e00cd9899bd7c97eed3174f87df011c95e32809bb92224bda969005a6d9314251e52de2e8b0f15c10419c6d9b511eb8b2939b0349794d4e11c6e1ec214eaa096e1a9bc62fc409c2e49f060000",
    ],
    [
      "ETag",
      "7hvdA+ugWOa4W0ZWKdv+TQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51df6f8230107ee7af20ddeb48043498253ecc854c3343361c4f0b31154e86030edbe2c20cfffbda02ea0bedf7e37a771f17c334c94f5ea5e4c924fb3c3b35c0da870cc487ba84c09b427079d45871208fca0d8266ca7d3ab360ebb84ee4ba9cad73affc5bbd85d962d1bb78f20d2595be8b44121f7228522ef197c6e6c06bada225a817773ba61bea17064db4b5d6d6c1a7ffea87f75289a9968268b3795e6e7c32489d3e63f9edf42847dc877000065502b7816a864748c45a6fce69591760716c58027c68a20a7b3963d8d494215a92b2ec8963d9b3f97c3eb567b63775bcd15f6042458e952a89b6e43a8040418b107fd5fac4eef3613decd318b32087bb80ee2392d259154fc895ea865b6c8c28be355bb602f83b43b90c87b4af1cb37841b5ab505108d680a6132a7fd72a17036774c63f4ad54dec19020000",
    ],
    [
      "ETag",
      "qvrNS232U33srIi7mzHKRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d07fe9b318956bf7068506864bc0a2d3a706a1086513692908cbfe7d66e70fce0fc88b82494987ae6577f006e67c07d7c53aee1c6f4eab23ad0cb53123d828733c84176f6934421c454ce204e392dd68105bbb289ee328cd8af4bbff30e725fbd4d8744eacc4e41821ca87e9dc1837a90aa1bbed7b1fa2a157b6c3eb7db0b01de632c9108d25f3515987de96d8e5365b360bcf118619ae28ad5d528aeb61bc2aa3d403c889383d27f1d5da8ecfa177841775b2c2bb1ed8659b7401c49de663772fc10ab0e7a3114cd2e635d34d0857e0bf4987f9c15e578fe58209f0fb073771e8e605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-103-1588841517427",
    },
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
      "000002ff8d54616fa24010fdeeaf20dcc7ab8a0a8a4dccd5286d49147b886d2e970b5d96856e8b2cdd5d7a318dfffd760115cee6aedf60e6bd376f6667f7bda528ea0b4e43f55251031cbfe688eebe3c9340bd9019c4412c3334ec2f28df8d075f9f6e82d906f2dbf4ee613a9994285cb019d866096a33925388d8e566dd8929c9334009690bc1764f1bb47b86699a7acfe88df4fea8243394440b9cbe488927ce3376d9ed1e8c746242e204810cb30e24db63bcfbd6ef66943c23c859b759b72b4ab1ee7f2a7f4b08041c9374b259972e7286a88fb60027d2c7891e06574dfd0e06db4e2cd06f18220021c9532ebd953290a4118e735a880ba5771114e1c2f4f1b71650d7d6c29a790a2449be4dfd146cd18512020e7cbecb9072edae96ca23478c3f766ce77ae52ea79ebd72fcf5ecd65a4e3bb3d562b374d6cac3ade55a0a0741820a0965a25c157f8ef8298c154543a183d3c29a27b33543225bcdd3fee02c8f1252449863a882f9236d087aa6360ea2600423736004918682c00c460618041a1ceb480f0304ea0a85b3920f52921aa3c1d0d0c73d3fec0f80aff781e19bc01cfa7d13684037f5a18634b562ef8fbd408a004773cc32c270356c75e65a53cff2ed6bdfb1acb9353fb5fe9be233f4836b0bb0e76e9c9960d5c714813ce1f3b2d1e6901addcb73a937f6af099e3590514c84a962096cc7b3dce9ccb3ef6b36c4462e500ce06efd2a77320209432736a0e26839a24b12ca73549de9b2de6fb15f77071013889f479fa7760450ae4bd1cbd9ba34eb78621d1ba3288fb28caa6bcfb59d1bb596dc7f2c730f92fc039db72aac66625a4f62c2aca1d5fafbeb57ab56431557bcb2a77edf58ee0fc92d7232e3a2085194c253d54f6cba2496e9cf3c61027f784f24453c2947038c8bb0b875909dca17ab2bef202e475f090eb5be503c080a22e5e708d3e81d10676f8aac85b628e58761946f4b39c97dc3525eb353d0245c5c04a73ac57d6bdffa03180b8ccf1a060000",
    ],
    [
      "ETag",
      "rd2Lrty93+hGbCUctHnPWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "4e",
      "c2",
      "30",
      "14",
      "7ddf5790fa0a09d3c188090f53504870ca186a348494ed0eabdb3adb4e430cff6edb0dd88b668924beacbdf79cdbb3def6f4cb6834d01b494374de402bb27ecf816d4ed620a66ae201cf63c1e590d194036a2a3608bc56ec816fcdf34f6edb4f2e711fc32919dd8f1ea6fd7ec1e2c10b2458f2be6424e388401c72193febb851e63596e204d48a018df3245deab07980c526d3f0ccf7c6ee75154968a811773e99381793212aa16df36791100bbcd44bfe4d428f0ba31443af74e541040cd2000ebbce187d85408c757b394eb2185a9ce62c005e8aa8c2025e339a679851da92a996d93e6b999d5eaf67991dd3b64eed1d3fa6011684a6aa643e43fb1f1054e0d8a39faac7a85b1c022bc2a2e5bb5ea0a8720ad51649e843159310ed73dbe62fc4b1eb77ad0ab79c2d8c4a656d55d9aa88c4b0fc277579262f585ef17adae53d3992384e689e8a9ad257935be7881b9776a8bbe981e30f8f25cb8534434d5d7f7c339cf9cecddd8fe2f2bb3898e0622380df312a4dc6415bcb6c5bbd8edd6da39d552fa9b2a2504e152c079d0eb07cb24644c85c84630ec6d6f806cb1c21501e050000",
    ],
    [
      "ETag",
      "DT4Uuws77ZNiNXdQiHVHWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` > ?",
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
      jobId: "grouparoo-job-104-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffa554db6e9b40107df75720fad2aab5011b0c8e64a5964d522407271827ea4df6028bb309b06477711b45f9f7ee822f20a76dd4bec1cc9933672e3b4f2d4992ef5116c927921ca0f54301c9e39b3b1cc81f840732b0161e949cbf77e2cd753cedcd6ce5f6a7f2c5f4cdabe1b042a1329a82344f609be28284909e2ce69d35c1450e08c66d4ed8d654bdad199665e99aa1997ad7ac82294ce229caee05c52d63393d51949d90ce1ae37502418e6827c4e9deae6cba4a4ef01d0c19559a79159e8a2a7fc97c9ae0103084b3e1625ea92828244b980294081d87f028f8d8e4ef209076d61cbd41210461888b8c096d154d88b318ad0b529273a6276ee4e652f4feb76690e7f6d41efbd278b670fdb72b900abad53b095069b92490160993cebcd985b4ca79f65b40215d49379f6ccfe616826394c0258a56d2503a9546ee449256116070257d2b54b507a5d3525599318294a1acd4e58320813535dcbb6da6f3c220f7148204302e610b5b9a6a1f68963a08e2c00c63ab6704b10a83c00a4c03f402351ce8508f0208ea0c4ce4aee24186b3c8ec6b5ad730fa5a10e883be09e10018461803ab17ab2aff8c2d438f812e6f199ef7f58404f24a2788e698a26db7e5b1678f7c7be99c2d5ddb9ed89343f93f083a42df780e07fbdec21df3a87aab62c01b3fa98a6d36aad101c67b5a2fee4f5d3c2a2027087351e51638ae6f7ba3b1ef5cd764f0959cc235081fe70f622963905078880604a49041728123314bf97236777c67e68ea6078672cb2e7748ca615ff7620f35d5d9fcc7bcb919d5d02aab90d9df8fa2514d93e51a24c50b349bad59d61a1cad17d8fe45dd440cf1ffc575d5aeda56bbfc60fc46e5f6eb7bab9644e66766ab4ebe5ad8de67115bfa84c7833124300b0f695ff1e04460e57ecd19e5f8dd4d1321fcaced0550c6cdfcf187f490be7c3de214a0b49a4845d8577bfc15ee08792061c788be36d8218eee9ac8055398b15d33aafb5675f2b921a9a8c929c3049cbf45d771cf4bf1ade7d62f6bbbf3c29e060000",
    ],
    [
      "ETag",
      "ilG+IfvVfL3OE/hx/Z7T7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e8240107ce72bc8f5b52462b498263e9486b4b46a2bad494d63cc090bc5024bef8e1a62f877ef0e505fb89b99dddb9de1689826f94d8b88dc9b6497267f15b0fa2601b15497007895092e8f120b0ee4565583a089aa5ee48eebafdfbe6ac78b5ee72fd5e16e3db797d3695bc5c31fc8a9ac3b4a24719c42167189bf35363b5e6b05cd41bdb8dd323d50bfd069a22eb5e62f3ebd272fb896728cb4b458cd660feecc239dd4e87323bf8d5e658fbb00626050847059a864b88750f8da39a7799981c5b16221f06e886a6ce584615552866849cab20723cb1e4f2693913db69dd1d0e9eb330ca948b1502dab0f725e40a0a0598007659fd86d3eac856d1a7d1624be0ae83a2229fdabe62139534d77db183dda5c86b9b500fece509ae1a02d0c489fc5232aaf42452158059a0ea9fc5dcfa9e838a3314ee40f5ed319020000",
    ],
    [
      "ETag",
      "Nm7BIYOXy7EdKMJuw6YM1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfc95283300000d07fc9b976582c126f0d1d5a48a1802c726220936090252c5582e3bfdbf1fdc1fb012521749e8b65f8a43d7805b2d4e09eecf16022199210ba2d8ba3326bd7cc2d6a54f567d50b9b7ae8856f6877b6194ed88d623c36895f58e4d89bde08dd89b514397a8e739d2bcd829980eb57a079e434744a9bc3955f2f386dcd1451e912d9a35bec478192748afdbd756960da9bcab3f79b3048e8d46c5ebd0bb3a92d2a1d61a8e24ed5ac17c2cda76b13d849931fde70a43841e4c8985bdb99de3f4ec6563d831da0abe0139d0bfe98e9070877e0bf592c52d0c715d172a213f8fd0325e1897a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-105-1588841517427",
    },
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
      "02ff8d5461739a4010fdeeaf60e8d7a8a81849669cc62a6998516c1193663a1d729c0bb90439c21da64ec6ffde3b40859a69f30d76df7bfb766fefde1a8aa23e9378a55e2aaa4fc2970cd2eda727eaab6732031c8532f39cbdaeb7e87ef2f4985abfc3cd2be73f5ebe84c3618122399ba175124193d12cc5c02e978b5698d22c4129a54d21d8ec68fd66a76f1886dee977067a7750901944c194c4cf52e291f3845db6db7b23ad90d230029410d6c2747d88b737dd7692d227c09cb5eb75dba2146bffa7f2e78862c4098d87cb45e12263907ab04624923e8ef4957f55d76f11b46e8502bd211810c6348bb9f456c8601a0724ccd25c5c28bd89a008e7a60fbf9580ba30a7e6d855308db275ecc5680d67ca0a71e4f16d02cab5339f290f1c187f6859f6f5dc998d5c6b6e7b8bf18d391bb5c6f3e972662f94bb1bd331158efc08720965a85ce57fb6f8c98de545574287c4b93557662b8644b69ca7f5ce591e24a48830c7a0847903ed1c750cedc20ffc010e8c5edf0f34f07dc31ff451cfd7f0850efaca075455c89d157c14d3b88bf5203837065e3718189eae9d83e7f771cf43d0d5f00afa86ae77d592bd3bf48253401c268425949172d8ead83147aee959d79e6d9a1373726cfd352527e83bc71260d759da63c1aa8e294059c42745a3f521d5ba97e7526dec5f133c6920490915a6f225b06cd7744663d7baadd8101b398510e1ede245ee6480220647364ac5d17248677425cf51b547b36abff97e7ddb839840fc3cf83cb62380725df25e4ed6a55ec715eb581b45719445545db88e657f552bc9ddfb32b728caded1d994613511d37a14136635adc6df5fbf1a951aaab8e2a53df5fbd274ee2537cfc98c0301a410e363d50f6cba2416e98f3c6102bf7f4f24453c2907038c8bb0b875981dcbe7ab2bef2029465f0a9e6b62f7f5bda020a6fc14d1b9e8ed11276f8aac056b88f97e18c5db524c7257b39455ece434091717c12e4f71d7d835fe00a53395cb1a060000",
    ],
    [
      "ETag",
      "kuwmyaYDjhrIxgvwttXqBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54d14ec230147ddf5790fa0a0953c616131e500189803846a23184d4ed6e0cb675b69d0608ff6edb0dd98b668924beacbdf79cdbb3def674afd56a6813261ebaaea1b73078cf806e2f02e04f726203cb22cec490928401aa4b36701c48f6f32e31dde9c30b33ccbeb599311a5ced0641a793b398bb82180bde5e4422f643883c26e25715d78abcc2121c835cd1255116274b15d64f30dfa60a9e39f67032282331f11432998f46dd9b510f15d0a1feb38887395eaa25ff26a1c6855688a13579b3c1070a890ba75da794acc1e543d55e86e3348206231975811522b23087034ab21453421a22d5d09b4643372ccb6ae9866eb62ecd233f222ee6214964c97c86be7f80138e239b7cca1ea3767e08340ff3961f7b81fcd229945b24a00f591c7ae83b77a8ff421c4e9c76abc42d660bad54595955b4ca0f2358fe93ba3893151657bc9a76714fce248e639225bca2747ff4d83de3c6851daa6efaaeebf4ce25cbb83043455d6738eecd9cee78faa3b8f82e4e26b8d97260534a84c918286be9cd966598ed263a5af596482b72e9544e335069178b27eb3ee422e7e3888176d0be00c2e12d0b1e050000",
    ],
    [
      "ETag",
      "Xzn7cPKYs57F8kSsrg3zGg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` > ?",
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
      jobId: "grouparoo-job-106-1588841517427",
    },
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
      "ad",
      "94",
      "5b",
      "6f",
      "da",
      "30",
      "14",
      "c7",
      "df",
      "f9",
      "14",
      "51f6b2490512c22520a10e41ba4682d04268b59bc03127d46d12a7b1c3d4557cf7d9099720d8564d7b229ccbfffcceb17d5e4b8aa23e9168a97614d523abe7149297778fd4532fa407385a490fbb433fafa3e5148721ac317ea6d7613abbed76f32892653314c60194194d130cac339b5656094d6394505a1682655d6b96f586699a75bda1b7eab5569ecc20f087247a92120f9cc7ac53adee402a2b4a5701a098b00aa6e1de5e5dd7aa71421f0173563dae5b15a558f52f952f038a112734eacea63945ca209943884820390ee94befe3b17e85a0b0b212d16b8201614cd3884bb65c06d3c827ab34c9c485d2ab300a7306bdff5b30a8536b68f55da53f9e39eefb050aa5dce2838298329f27c0d2802b5793f14859c4a2fa0362c016cafdb535b18425a13e09604e960ba5ab5c2a3d67a0280bc605ee42f9966a9a01ca658695955c02e324cac05ce40550c011deed34ed3327b9979022880b866dd8bca535916e6a6dcff75ad8378d86e76be079a6d76a20c3d370bb0ef5a507a8a8c065ed3c1f4534c29aa6e9c8f770bd6d42cd682c1be207d5c06fe276cbf0f516367c6c204fdd2a6cf6fde004108701613165643b6eb53fb17aae35b7afe68e650dacc1a1fd1f093989be9fd822d89dcc9cbec82a8eca4762f283bcd9e3411d4d808b99169bfbd3144f1a8813420554760d6cc7b526bdbe6bdf1530c49d1cc20ae197e9b3bc953e0a181cb2518242e0908ce8529ea57a339edaae3d767ac3834276cd6e76914c847dddc31e7a2aaab92ff1f1cdc80f2db74acc665d2df836176755ee50909e91596fcdaa7ea4",
      "513aa3f62f74ae3db2a66e6f74f31f086b5a4d2b6b35b1365cbdd6d18d8e5eaf88abfae537e0dbafefa5424955ac9e2db07a3bb3269f656ee6939e09f89040840f106f7883323177bf65b58af8dd9e932962d5ed01c496e044ec03cc0ee5b30725b70309f343ca059b5add348d9da0484cf8494443d3f71127bb4ed6821022be1b46bef3f2496e8e90d2024e9626c3c5f3746ce753065fda947e019ee3c97bb2060000",
    ],
    [
      "ETag",
      "sVazHndScmmevccqoHmuUQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d51d14ec240107cef5734e7ab8d948010131ec41024102255121343c8716c6bb1edd6bb2d5a49ffddbb6b0bbcf46e66766f77a627c775d9579cedd983cb7671f45d802c6f22a095b904a08a84943e72cc14b05b530dc423533d4f7e61fe178bddb194876ef84ed3bfcedd6a34aaab94f88494ebba93461a8731247ba5f187c56ec35b2de3299817b75b6907da171a8dcadc6ab3e5db643a09aea514f7565aae178bc7f162c21aa9b2e7467f2bbbca017701842021137059289778004133eb5cf1344fc053584801aa19621a6b399258e45c227a9af2fccebde7f787c361cfeffb835e77d0d6272838c5989996f52b3b2f40483c09f0c7d8677e9d8fac619d469b050baf02ba8e484b47d3dc6567aa6a6e1ba7459bcbb07149a05e246a330aac850e6bb37842e3954c14240bb0b4e0fa773dc7d4704ee5fc039bec184e19020000",
    ],
    [
      "ETag",
      "KlxeKzicbvyrj2fXtGz0/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b5283300000d0bb64dd7634400177849f1402a523037693010c1840f924954fc7bbdbf1dde0dd415e96947322fa967e8317b0e6503f9407bfd7d01a970bffc036c621ff922ea13f15314ef2bd21cb48ab2dc4eac1338a633853a7b892a0cd58b09a28521d3c2a2ec6a3853e2fa754f7dc5588a39b5ab0aeb667d5de1031baf733525f95ee7ae66f46c87030cea79494a283ad0637d5da3fc5cecfdcd8da24230b9a7136f2843469e6c88c988b14f93df451d2488304bd2aa295ea19ce4deac73d66dbcd5987a51732d801ba0c6ca29cb0c74c52747d07fe9b44ac037d5c11cd273a81df3ff2a67a4105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-107-1588841517427",
    },
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
      "8d",
      "54",
      "61",
      "6f",
      "a2",
      "40",
      "10fdeeaf20dcd7564045b489b91aa53d728a2d629be672a1cbb2d06d91a5ec62afd7f8df6f1750e134d7fb0633efbd79333bbb1f2d49925f7012c81792ece3e83547d9fb9767e2cb6722831888444641dffb2fd96fe59779b379787ac3d70abc566f47a312850b3605eb3446e794e41944f462b56c4719c953901172ce05cf35d538d7f4c160d0d374cde8758c924c511cce70f222249e184be985a2ec8cb42342a2188114d33624eb7d5cd974943423cf0832aa34eb2abc14553ea9fc352610304c92d16a59bac829ca3cb40638163e0ef4c0bf6ceab73158b7238ede60880084244f98f056ca40928438cab3429c2b7df0200f17a6f7bfb580bc3467e6c4952089f375e225608dcea40030e0b1f7144957ce622e3d3244d963dbb2af16ce7cec5a0bdb5b4ebe99f3717bb298ade6f652baff663aa6c4801fa342421a4997c59fcd7f0a6345d180ebe0a4b0e68a6ccd10cf56f3b44e9ce55e42887073145530cf50fb401ba8433ff40d180ebaba1faac8f707bea183aeafc2610ff5021f81ba42e1ace483842410a1608874ddeb06a0eff58c70e8f99aea7b5abfdb31740d0ef5ce40aed8db7d2f304380a129a629a1b81ab63c71ccb16b7ad695679be6d49c1e5a7fcbf011fadeb138d87556f684b3ea630a411eb369d96873488deec5b9d41bfbd7048f1a48334cb8a962092cdb359df1c4b5ee6a36f846ce5004e0fbf255ec6408628a0e6c90f1a365289b93409ca36c8fe7f57e8bfdbad9812847fcd8fb3cb4c381625d8a5e8ed6a559c7e5ebd81845799465545eba8e655fcbb5e4f6b4cc1d88f3133a9b2a2ca77c5a4f7cc2b4a1d5fafbeb67ab5643e657bcb227dfae4ce741708b9cc838284419e25b76b88d9f6fba2096e9ff79c2387ef79e080a7f52f60628e3617eeb203d942f",
      "5657dc415c8ebe12ecabbaae6a3b414eccd809c4b0bf431cbd29a2165aa384ed8651be2de524b70d4b79cd4e4113707e11ecea14b7ad6deb0f3a0f60511a060000",
    ],
    [
      "ETag",
      "/eK6krz/xEPvYhwiG/cG0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "c5545d4fc230147ddfaf20f5151266f88a890fa088988932c6833184d4ed0eaadbee6c3b091afebb6d37602f9a2592f8b2f6de736ecf7adbd32fab56236f2c09c8458dbcb0d57b067c7bb60239d51317441649a186141301a4aed920e94ab3af46c86cc79d0eee06ebcd28f868df7cb2a7cde565ce12fe1a62aa785f2a5271c8200a848a9f4d5c2bf2064b680c7a451fa32c4e9626ac1f61b94d0d3cf3dcf1645446620c0c32993b4e7fe00c4901edea3f8b0454d2a559f26f12665c58851879c5171742e090f870dc75caf1157c3936ed15344e236808ccb80fa210d18539bce298a594233654aa6137bb0dbbddebf55a76dbeeb6cebb7b7e843e950c135d329f91c30f4894347271a37b4c3af921f03ccc5bbeef05094ba7506e91823e74310bc821b7abff421c4fbc4eabc42d660bab54595955b52a64112cff495d9dc99aaa2b5e4dbbb8272712a7316689ac287de33cf44fb8716587aa9bbeee7bc353c90aa9cc5051d71bdf0f675efffef14771f55d1c4d30d84a108f1c95c904186bd9cd56afdded34c9deaa57a8ad28b55325cfc0a47daa9eac5b26552ea491006b677d0394148c191e050000",
    ],
    [
      "ETag",
      "CGoi1LRQBJBhwGdv5FziYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` > ?",
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
      jobId: "grouparoo-job-108-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffad545d6fda30147de75758d9cb260d48809050097508521a8986368456d336819338a9db10a7b6d3aeaaf8efb3133e82605b35ed0129dc7bceb9e75edbf7ad0680f288d35039038a8fe3a71cd1d70f0fc4573ecb0ce2309619cb687bf1740cc7a3f0e5727cf393b7bce1cda0df2f51b86033b8ca12546724a7016267f35923a624cf2025a42e04eb9a6ad635dd34cd8ea66b46a765946486926882d3472971cf79c6ce9acdad91464c489c209861d608c86a176f3eb79a19250f28e0ac7958b7294ab1e65f2a9f2724801c93b43f9f952e7286e802ad204ea48f3d3df4bf1cea37305c3562817ec601824140f2944b6fa54c40d208c7392dc485d29b088a70617af7b7125066d6c41a7a60389d3bdec7255c49b9e5270019582c286279c2c1853bbd02cb4c54bf870cb125b8bbb45c4b442889708216385c823e3807036704c056027ccf55b58dc079e1aba81922c6715a38f3a09fa08a1f91dd8cd33e71943b092902b930b1812d0cb50b3553edf9916f0491d9d6fd4845be6ffa860edbbe1af43aa813fa085615b8ac5df2614a5203f946a885aa19e97a5b87aa29787e2b68f93ad422d5507b50173fd554360aeb5d3f014590a31166196178336f65e85a03cf5ad8170bc7b246d668dffe0bc547e83bd71660cf9d3b43c1aa8e2a8262f4a3b2d9c3411d4c808b99569bfbd3148f1ac82826c254710f6cc7b3dcc1d0b36f2b36c4a59ca01806afb327792d239830b467430a5788237a45427996caf574667bf6d4194cf60ac53dbbde2299807ddb99ddf75455f35eb3c39b511e5a199536bb1da5925b7f3ea9720b93fc84ccf326ac68071ab5136affe2ee62321dfc277f0dbdf31b8b9baf1fb58abc22b6ccc69a7233b7dcaf925be464c64511a2280df605dff1da24b14cbf678b0afc76a5498ad86a3b038c8bb078f901db972f9e8edc037855b65b0a76d5aeaeb6b6828248f931a2dbea6d11476b4dd6422b94f2ed30caf5564e727d6029afd82968122e1ea2633be3c27c6d5dfb05d3745a759d060000",
    ],
    [
      "ETag",
      "E73TgOGaGDdwHGQxt2TCQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "c1",
      "6e",
      "82",
      "40",
      "10",
      "bd",
      "f3",
      "15",
      "647b2d891815d2c48334a435b1b6a29c1a631618291618babb608ce1dfbbbb807a61f7bd37b333ef71354c93fc6665425e4c1265e95f0decf29482d8a84b00bcce059747852507f2acaa41d054556f9d59389a35c9b9597cd89feb24f2b69b3a9dcfbb2a1eff404165dd5522898f19e40997f85b63b3e7b556d202d48b8703d303f50bbd262e95d696eb9dffe6078f52818996d6e16ab5f0563ee9a5569f7bf96df52a278c023802833286fb4215c313c462a99d735a5439581c6b1603ef87a8c64e4e19d615658896a42c7be45af6d475dd893db59dc9d819ea738ca9c8b0542de196dc161028681ee059d92776970feb6097c69005393e04f41891941ad53c2637aaed6f7b6340fbfb30ef22807f31946638680b233264f18acaab5051085683a6632a7fd77b267ace688d7f4ee8537e19020000",
    ],
    [
      "ETag",
      "S76U06vdwvAM1ONdbBSQug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb642d4e4944922e03088e9f29a050d864280d348500266211a777afd37783f700455972add9b56f78075ec1bd8064592e773da6f7b0dc6274ee69b16d02a34343f4d2d4916556786f7b87db187beeca94219edfab69be913ed44d3bdb6eb28e330fb20b14ce1bcf57845a75bcce7d97b699d41b8124da9a501d4cff18571a3336cb203dc1b3333aa6a17647ef74be045d3b496164e9e194c2afb5915bd6c43ec70a5da0565d8bc6fd0647d2ff1ef651825df1d1fe245e42bd230925b59b41a5a365d76001f83408c53513cf19b2085980ff26bbde07febc525e28aec0ef1f4db4efc605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-109-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545d739a40147df75730f4b151f183a099711a47b161aa98029a663a1db2ac0bd90459c22ec9a419ff7b771754a899366f70efb9e79efbb1f7ada128ea234e36ea85a206387aca51f6fae98104ea99f0200622e1b94e7ebccc6ebe7dd6dce1d0bd3a8fd6bfd7b7f865342a50584653b04d63d4a424cf20a2172bb71565244f4146489313363bdab0d9d1078341bfa3778c7ed72882298ac3394e1e05c53d6329bd68b7f7425a1121518c408a690b92edc1de7eeeb6d38c3c20c868bb9eb7cd53d1f67f327f8909040c9364b4720b153945998fb600c742c7317c135cd6f95b186c5b11473f63880084244f98d056d040928438ca3349ce99deb8919ba5e8c36fc5a0bae6dc9c780a2471be4dfc046cd199b2010cf8ec3545cacc592e943b8628bb6b59f66ce92cc69eb5b47d7772652ec6adc972be5ad8ae7273653aa6c240102349a18c944bf967f31f294c26dd701e9c48699ef05604716fd94feb9d591e28040917475109f30ded1c7406da3008030386839e1e841a0a824160e8a0176870d847fd4d804095412a2be2414212cdd07b868e023fec6e74bfafc3be3fe493f261cfe8a1811602dd08d4327a77a80566083034c534251497cd56278e39f64cdf9af9b6694ecde9b1f4970c9fa06f1c8b833d67654f7854b54d21c863362d0aad37a956bd984bb5b07f75f0a48034c3848b924b60d99ee98c279eb5aec8e01b39471180afee93d8c910c4141da341c647cb50b6201b3147d51e2faaf5cafdbade832847fc3ce83c96c381625d642d27eb52cfe3f175acb5a2186561555dcfb1ecaf6ac5b97b9f660de2fc1d9ee7d2aca6bc5bf7bcc3b4c6d5f8fbeb57a39243e54fbc94a77e5f99cead88953ee17150883294c063d60f6cba082cdc1f39611cbfbf2722849f948300cab899bf3a488fe9e5ea8a37888bd69784e79ad1d10e843c3063a7886eb7bb479cdc14910b6d51c2f6cd286e4bd1c95d4d525e9123c3049c3f04bb9ce2aeb16bfc01a4ef127b1a060000",
    ],
    [
      "ETag",
      "PnXwFWK+0S99SH6gVzVYiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffc5545d6f8230147de75798ee5513317e6d890fbab9cd05bf10f7b21853e18238a0ac2d73cef8dfd716545e5c4866b217da7bcfb93df4b6a77bad5442ef7ee4a0bb125af9de47027477e3019fca89092c093813434c2206a82cd9c0b127d99bd7afc9b43aaa8d0dfbc5357bf36fbaed7b5ea793b298bd86100bde5e4422767d081c26e2371597b2bcc2221c825cd1264112464b1596cf30dfc50a9e59e660f4944742e2286434378c6ecfe8a30c3a942f8b3898e3a55af26f126a5c689918da9095092e50886c38ef3aa66403361fa8f6321cc601541849a80d2c13918529ec5192c498125211a98a5ebdade88d76bb5dd71b7aab5e6b1df901b131f749244be63374fa014e380e4cb2953d46cdf410681aa62d3ff602b9b953c8b748409fb2d877d0297728ff421c8cac663dc7cd660b2d57595855b4caf50358fe93ba3893351657bc9876764fae248e439244bca0f4a331ee5e71e3c20e4537fdd0b5fad792655c98a1a0ae3518f667567738b9282ebe8bb3097a3b0e6c4289301903652dbd5a6f375acd2a3a5af59e482b72e9544e1350691b8b27ebd9e722e7e2808176d07e009459f63a1e050000",
    ],
    [
      "ETag",
      "jVxPQ0N2OLcJfRBUzrwEgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `id` < ?",
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
      jobId: "grouparoo-job-110-1588841517427",
    },
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
      "02ffc5545d6fda40107ce75758ee4b2b05b0f9b21309a5049c168998d41892aaade0ceac9d4b8ccfb9b3a9d288ffde3bdb8011b4cd5b9fc0bb33b3b37b77fb5a5114f589444bf5425131099e53602fef1e2956cf64061214c8ccd54d7a3f30d64ff457743bc3ccbdbe9f5de15eb79ba348c6e668158750e534651ef08be9a416309ac688515a1582555dd7aa7adb34cd96ded68d56c3c8c91c427f44a22729f1902431bfa8d7b7466a01a541082826bce6d1d52e5e5f37ea31a38fe025bc7e58b72e4af1fa3f2a5f86d44309a151773ac95da41cd81c568884d2c79ebec41f0ff56b04ad6a8140af8907c8f3681a25d25b2ee3d1c82741ca3271a1f42a82229c99de7d9602eac41a597d57e98fa7b6fb7e8156526ef141415c99cf19f0344c946b677ca32c6251fd0171e00be5eeb3e55822c2a84f429893e542e92a974acf1e28ca427e7d4f35ade9299799a7acde127842a2cc958b7008252f225b8c7278e2187712520425c240019b1b5a07e9a6768e7d6c78bed96c635f038c4d6cb451136bde790b5a4b0ca8ac90c8da391f453432316aa2664b6b22d3c7d0311aba8e1a86a6899f960e86d66a800118966aa1b0d9f5e33140090c088f2927c5acd5be63f55c6b3ebc9edb9635b006fbf67f327284be738602ec3a53bb2f58e551f9488c7d90377b38a883092462a6e5e6fe36c5a3066246a83095dd81a1ed5a4eafef0e67251be2428e2040decbe4595e491f851cf66cc4d00a1260377429cf52bd1d4f86ee706cf7467b85ec8edd6e915cc0beedccee7b2aabb92ff1e1cdc80f2d8f4a9b9d965aca6dce4eaacc50989e90591761553fd0a89c50fbafeeda7fb057fcfb512989ab62bb14b6d42f53cbf92ab9594e661cf08141e4edcbbde1a549629e7ecbf614f8ed2a9314b1cd76067822c2e2d57b7c5f3e7b3672079055d16c26d8d18c73adbd151444961c214cadd1d9228ed699ac052b8892ed30f2b5964f727360292dd9c968122e1ea13db43f65e62b9bca6f0b7a79e795060000",
    ],
    [
      "ETag",
      "BMuXD7vkoznPVbrTFXVBbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51d16e8230147de72b48f73a12d8349a253eccc56c26c44c36f7b21053cb05abc0c5b6689ce1dfd716505f68cf39f7f6de73b838ae4bf6bc4cc88b4b363c3bd420ce0f19a8a5b94420eb5c497d54584a208fa61a14cd4cf51ff7b7f4b8db8759743af069edb3c3cf763999b455926da1a0baeea291c629873c911aff5aec76bcd54a5a807971bd1676a07da1d3d4b9b2da7cf13d7b9f45f75281899516ab307c9d8633d2498d3d63fd6dec2a3bdc4490828092c16da14ae00e989a5be79216550e9ec45a3090dd10d3d8ca99c0baa202d1d3941704be170cc7e3f1201806a3c1d3a8afcf9151c5b1342dab2f725d40a1a2798427639f046d3ea2856d1a7d1624bd0be83e222d1d4df333b9524d778b9d1ec5b761d3b302f929509b91602df8a4cfe20d8d5765a250a2064b33aa7fd707571de734ce3f1a71695b19020000",
    ],
    [
      "ETag",
      "zi0havjkLgRwqiBu0cqVhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfc95283300000d07fc9b97698b0056f651105656961085e184823d0549ab0161cffdd8eef0fde0f2809a1c3508c37463bf00cd6121a7bb2f76fc85c63520d291259bc78e13ab67856ea480b66a43b69daa91a33961cea4a9b1706924ce47dccdb7153aa768ded0ad5c1c597f132d424799a27c8dccc9a822f47e893275ccc4b577e23f33558c9c97cef9ba829f2e6c5d270f87dc86d9c64e824b814863e6b291b7073b952b1a4f5672975304481dac8db942322ec572b0d7d471ca23bab20e4e7dcb5479ff273d231b003f4cedb9e0e45fb98c9aa61ecc07fb318574e1f5793963dedc1ef1f173d37b205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-111-1588841517427",
    },
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
      "8d",
      "54",
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "7d",
      "cf",
      "af",
      "40",
      "ecb509212509ad14ad514257b484ac84b4fbd0448d31d42d608a4dabaaca7f9f6d48024bb5f50dee3de7dc73afaffdd65114f51167a17aaea8018e9f4a54bc7e7a20817a2232888158645223598433577bf8fafdc54a92b9fd33bc7e7c994c2a14966c0ad23c415d4aca02227abe59f7e28294392808e972c1aeaeeb5d7d689aa6a10ff5b1311857648a926881b3472171cf584ecf356d67a41713122708e498f62049f771ed79a0e50579409051ad5d57e3a5a8f69fca9f130201c3249b6cd6958b92a2c24729c089f071a087c1455bbf8741da8b39fa194304202465c684b74a06922cc271594871aef4c6833c2c4def7f1b01756d2dac99a740929469e6672045274a0818f0d96b8e944b77b554ee18a2ecae673b972b7739f5ec95e3af6757d672da9bad169ba5b3566eaf2cd752180812242594897221ff1cfe238dc9a221d7c199b4e6896cc310cfd6f3b4df39cbbd8410e1e628aa61feb83f02bad93f0ba2600c23f37418447d140466301e82d3a00fcf0c648401024d05e9ace2838c640021783ad6913f3223e01bfd20f24ddd18f8008ca2613f34a01e986acddeee7b8105020ccd31cd09c5f5b0d5996b4d3dcbb72f7dc7b2e6d6fcd0fa4b818fd0b7aecdc19ebb71669cd51c5304ca84cdab46db436a752fcea5d9d8bf2678d4405e60c24dc925b01dcf72a733cfbe69d8e01bb9403180afeb27b1931148283ab041c18f96a1624942718eaa335d36fb95fbf56d07a21cf16beff3d00e078a7591bd1cad4bbb8ec7d7b1358aea28aba8baf65cdbf9a23692dbf7656e4052bea3f35c87d59c4feb9e",
      "4f98b6b43a7f7ffdee346aa8fc8ad7f6d4eb8de5fe105c9913191745a840193c54fdc0a60b6295fec813c6f1bbf74450f893b23740190ff35b07e9a1bc5c5d71077135fa5a70d4378dd16827c889053b460ccf063bc4d19b226aa114656c378cea6da926b96d592a1b76244dc0f94570ea53dc76b69d3fc31d6f301a060000",
    ],
    [
      "ETag",
      "m4lLdCR/jKXwEllDIZdQkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffc5545d4f8330147de7572cf5758b43d9474cf6803a9504e73e58d49865e9e0c250a0d8160d59f6df6d0bdb78992171892fb4f79e737be86d4f375aa3813ec2c443570db40a83cf0c687e16009fc8c914581671268694240c5053b281e340b2ad4b33c88d179de274963fb7cfede415af268341c162ee1a622c781b1189d80f21f29888df54dc28f30a4b700c72459744599c2c55d83cc03c4f153c73a6d6e8be8ac4c453c8686edbe6b53d4425b46d1e17f130c74bb5e4df24d4b8d04a31f44e5653f08142e2c261d72925efe0724bb597e1388da0c548465d60a5882c2ce080922cc594909648b5745d6fe99d7ebf6fe81dbd675cf476fc88b89887249125f319daff00271c4753f22d7b8cbac521d0222c5abeeb05f22ba7506d9180be6471e8a17d6edbfc85688d9cae51e196b38556a9acad2a5ae587112cff495d9cc91a8b2b5e4fbbbc272712c731c9125e53face7e324fb8716187ba9bbe359de1a964191766a8a9eb588fc399633e8e8f8a8befe26082eb9c031b53224cc640594b6f1bfd4eafdb463babde1069452e9dca69062aed62f1643d845ce47c1c31d0b6da0fb47f97671e050000",
    ],
    [
      "ETag",
      "I3Agy4X1rapSyW0/LnYabQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ?",
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
      jobId: "grouparoo-job-112-1588841517427",
    },
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
      "ad",
      "54",
      "616f9b3010fd9e5f81d8974d6a1248420295aa2e4b688796929690b4d33625c631d42d608a4da7aaca7f9f0d241025dbaa69dfe0eebd77efcef6bd3624497ec4f15a3e95640f074f194a5fde3d104f3e1119c44020329f6eacc7bb4e7c09c2c5dd97c5cde8dec55167787656a070cea6204a42d4a4244b21a2a7f3592b48499680949026176caa6aa7a96abaaef7544d1df43a83824c51e84f70fc2824ee194be869bbbd35d20a08094204124c5b9044bb78fbb9d34e52f28020a3edfdba6d5e8ab6ff52f93c2410304ce2b3f9ac709151942e510470287c54f4b5f7715fbf8541d40a38fa194304202459cc84b7420692d8c74196e6e25ce99507793837bdfbad05e499393147ae349ace6df7fd0a44426ef54102545a2e5344b3904917cef44a5a25bcfa3da088aea4dbcfa663f2484a7c1ca2255eafa433e95c1ada63a9c2ada4ef99a274a1749e3bcbabae116538cebdb9c00b51cd11cf9603b58e1ce64e428800c6e54bd872a0f481aa2b86e77b03e8eb5dcdf315e479ba37d040d753a0d143bdb587405d8189da051fc4240646df57a1de37ba5a8f637b06c76b3d0d797da8fb03ce4786a219de5a2e1536bb7e608a0043634c134271397179e49843d75c5a174bdb34c7e6b86aff678a0fd0b78ec5c1ae33b7479c551f950ff8f0c745b3fb83da9b00e333ad37f7a7291e3490a4987053f94db06cd7748623d75ad46cf06b394101802fb32771317d105254b1410a22c4507a45d6e22ce5ebe9cc72ada93d9c540af94dbbde2229877ddb99ad7aaaabb92fc9fecd280ead880a9bfd9e5ccb6d4e8eaa2c40981d91792ec3b2baa7d138a2f62fee66ae63d997ffc1de30e107f71b8be5d78f464d5fe67ba6b426dfcc4de7abe0e6399171908f5214c3aae21b5e9b2016e9b7ec518edf2e3541e17b6d6780321ee62f1fd2aa7cfe74c41ec051711c85605f31ba83ce569013537688d0146d8b38586ca2168a50",
      "ccb6c328165c31c9cd9ea5ac6627a709387f887679829bc6a6f10bbc582c459f060000",
    ],
    [
      "ETag",
      "BQIkX2nGalVXKVQChTim2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff4d51df6f8230107ee7af20ddeb4856a2d12df1411733cd9cd9702e660b31154e56058eb5650b31fcef6b0ba82fb4df8febdd7d9c1cd725479ec7e4c1253b9efc9420aa9b04d49bb90420cb54497d14984b20b7c60d8a25c69df3679fae8e9b19dc7f884f7ff632d8547c3c1a352e197d43c6b4efa491c67b0e692c35feb2d86d79abe52c03f3e2762b6c43fb42aba9aab0da7cf93e7d9a06d75286b19596ebc5623c594c492bd5f60cf5b7b6a31c7017c01e04e4115c062a041e205273bbb96459918227b11411c8b689296ce44460593081e869caa3d4f7687f381cf6689f0e7afea0f3a71831c5313725eb15390fa050b134c03fb33ea14d3ea2814d1a5d16647f15d075445afa35c577e44cd5ed2d743a145e9a4d2a05f255a05e4642dc5476593ca2d95599289428c1d211d3bf6bc655cb39b5f30f2057cb3319020000",
    ],
    [
      "ETag",
      "niK21SkXHe9VrZ2HM7XyiA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcf4b7282300000d0bb642d0e1f41e88e285a2adf4610bb61200461908f241ad34eef5ea7ef06ef071418134a73367664006f4014aab5c4cbc36842115706bf21c6917fd9c946226d32afbe41ef64f86c0ab95f531c569ba4797cea47571c4f8914a925f713f89e0c4a8fe51a86eba1c6d2d91c3b71ec871665651484e85e3181d4ad864cea329b9adc5779d138dd578b4a5dbb1adaeabcdd294df631e287d652a830631faa767c08ae65f4dd8f582ff3d5b4bf78564ad39815abc190650d8abb6ba543801d7b5eeb4ec1c10290e7d4ce84e6ed6ba6e996b500ffcd9c8989bcae90143399c1ef1fdec967b705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-113-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6fa240147df75710f671ab828a6213b3358a2d89e216b1cd66b3a1c338d06991a1ccd08f34fef79d1950a136bb7d837bef39f7dc8fb9ef0d45511f71b251cf1535c0d1538eb2b76f0f2450cf8407311009cf6bff3abd79b98c1e2ebfcf5e8cdb6bea78761c8d46451496680ab6698c9a94e41944f47cbd6a4519c9539011d2e4844d5def3675c334cd9e6ee8835e675080298ac3394e1e05c53d63293d6fb7f7425a1121518c408a690b92edc1de7eeeb4d38c3c20c868bb9eb7cd53d1f67f32ff8809040c9364b45e152a728a321f6d018e858e237c135cd4f95b186c5b118f7ec6100108499e30a1ada0812409719467929c33bd7323374bd187df8a415d59736be22990c4f936f113b04567ca0630e0b3b714293377b950ee18a2ecae653bb3a5bb187bf6d2f157932b6b316e4d96f3f5c25929b757966b290c04319214ca48b9907f0eff91c264d20de7c18994e6096f4510f796fdb43f99e58142907071149561fe40eb03ddd48641180c6068768d20d4501098c1c000dd4083c31eea6d0204aa0c5259810709ef9766847000816ff441e0f7b48eee9bc360e06b4331b10eea4203a9257a77a80566083034c534251497cd5627ae35f62cdf9ef98e654dade9b1f4970c9f44dfba360ff6dcb533e1a86a9b4290c76c5a145a6f52ad7a31976a61ffeae04901698609172597c0763ccb1d4f3cfba622836fe41c4500bead9ec44e8620a6e88806191f2d43d9826cc41c5567bca8d62bf7ebe73e88f288df079dc77278a0581759cbc9bad4f3787c1d6bad28465958d595e7dacea55a71ee3ea7b90171fe09cf73695653dead7bde615ae36a7cfcfad3a8e450f9132fe5a9d76bcbfd25b0d2273c2e0a51861278ccfa854d17c0c2fd9513c6e3f7f74440f8493908a08c9bf9ab83f4985eaeae7883b8687d49d8d786e6b0b727e4c08c7d8cd0354d3ba43cb9292217daa284ed9b51dc96a293bb9aa4bc2247c244387f084e39c55d63d7f80b02b96d8a1a060000",
    ],
    [
      "ETag",
      "x6QpVwGgjG+Fw5WQsNTIlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "545d4fc230147ddfaf20f51512a6632c263ca0a21201f918898921a4747730dcd6d9762221fc77db6ec05e304b24f165edbde7dc9ef5b6a73ba352411f41eca1db0a5a04cbcf14d8f66a0962a42663e06928b81c121a734055c50681978a9d12db89eae4daed34637b25c07af97e1b6d5aad8cc5c90a222c793b19c9d80f20f4b88cdf755cc9f31a8b71046a4542c3348ae73aac9e60b14d343c71c7ddc1531189a8a791c1b4d76bdff53a2887f6d5f3221e1678ae97fc9b841e67462e86d67431061f18c4044ebb4e185d03115ddd5e8ea324841aa72923c073115598c14b46d304334a6b325533cd9b9ad9701cc7321b66d3ba6e1ef821255804345625d3093afe80a0028763ba513d467676082c0bb3961f7a81fcc229145b24a12f551c78e898db577f217607ae6d15b8f96c66142a4babca56f94108f37f529767b2c2f28a97d3ceefc985c47144d35894947eecbdb62fb8716987b29b7e68bb9d4bc97221cd5052d7edf63b13b7dd1f9e1597dfd9c904775b017cc8a83419076d2db36e398da65d4707abde536545a19c2a580a3a4db07cb29e0321733e0e39187be307ef11a0731e050000",
    ],
    [
      "ETag",
      "uc68m0c2TE7n6hte4KxXQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `purchase` < ?",
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
      jobId: "grouparoo-job-114-1588841517427",
    },
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
      "ad",
      "54",
      "6d",
      "73",
      "9a",
      "40",
      "10",
      "fe",
      "eeaf60e897761a15144533e3a41925291d832962d24edbd1e358c825c0110ed2c964fcefbd03541c6d9be9f41bec3efbecb32fb72f0d49921f48ecc9a792ec92e03187f4f9cd3d75e513e1810c05c263beff42350b7bfa84a1cbc8bac09f1edf27c16854a24811cd509484d064344f31b0d3c5bc15a4344f504a6993133655556baabdc160a0a93d55d73a7a19cc20f4a7247e1014775996b0d3767b23a415501a848012c25a98465b7bfba9d34e527a0f3863edfdbc6d9e8ab5ff92f92ca4186584c6a3c5bc54913348971021120a1dbb70cffdb0cfdf22286a051cfd4430208c691e67425b498369ec93204f0b72cef4c28ddc5c88defed60cf2dc981a63471acf1696f376852241b77a2721262d9729b03ccca40b7b7625ad129efd0e31602be9f6a3611bdc92529f84b024de4a1a4967d2b9359176b895f43d57942e96ce0a6545560f5846e2429b83dc106a8ab8b76aa87964985b0a4182324e5fc196bad247ea4019babeab637fd0edb9be02ae3b70f51eeaba0a1e6aa0792ea03a43267297f128a6711fe39ee2abc30e60df05a5e329d8d7bd41b7d357b0a6e14117a0a377745fae18d6db7a700a288309610965a4eab83cb68d73c7589a174bcb3026c66457fecf941ca06f6d93831d7b618d7954bd553ee2cd9f94c5ee376aaf0319ef69bdb83f75f1a0802425948b2a36c1b41cc33e1f3be64d4d065fcb2904083fcf1fc562fa2864b08b46298a2083f48a7a6296f2f56c6e3ae6cc3a9fee188a4dbbde2019877ddb8addd55467739e93fdcd2887565a85ccbe26d77ceb93a32c3728cc8fd03c556659dde3681c61fb177573c736adcbff200f257c70bf91587dfd68d4f8657e672a69f2e785617f15",
      "b1854f786cf0218518ef32bee2b589c0d2fd9a3bcaf19ba32642f85ddb0a601937f3978fd92e7df174c41d2051398e92b0af2afdbeb221e481697688d087fd0de2e0b0895c10419c6d9a511eb8b293eb3d49794d4e1126e0fc215ad504d78d75e317dbd165b59f060000",
    ],
    [
      "ETag",
      "I+Xo4Ncd7DsaGmNFcJq+pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "c1",
      "6e",
      "82",
      "40",
      "10",
      "bd",
      "f3",
      "15",
      "647bb4a4a56a214d3cd4c6b426c4b42807db18b3c28828307477a921867fefee02ca85ddf7decccebcc7c5304d724af288bc986497c4bf25b0ea2e06f1a52e3ef032155c1e05e61cc8bdaa06416355ed2c4ef17ab85e7dbb033e5c160f100d82c3793269aa7878808ccaba8b4412ef1348232ef18fc666cb6b2da719a817b75ba607ea175a4d5485d6e68bd5ec7de6f7a50c232d2d02cf7b9d7a33d24ab53e37f25beb558eb8f3610f0cf2106e0b150c8f108ab976ce6956a460712c5908bc1da21a1b3966581694215a92b26c7b64d963d77547f6d876464f4e579f62484582b96a0996e4ba804041531fcfca3eb19b7c58039b34ba2cc8be17503f2229fda9e66772a5eaf6b6313ab4b90d9b5602f82743698683b6f048ba2cde5079152a0ac14ad07448e5effa4844cb19b5f10f1ca7211e19020000",
    ],
    [
      "ETag",
      "7NkgY3YTZ8+s3Sp/ed+Uhw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfd15682300000d07fd9b3781402b6de46250462311281971d849144b0b111819dfe3d4ff70fee0f28ca92294547deb21edc83a5d0d1ba5c071c3a4b54cb7d7ad21b76a7301a6cad8b94ee23ee761c621a05e78798309c3cb5580bbf922b8e5b210f3a86ca0d8edda8a5046eb3ca4fa91c03decb4cc2a496957944de3e2cb26ee709adcf0f5728ba8b7492f8b333caeda361591f7e49869d7b9c20e2c3a920e1342f85150be739c0a1bdb1897c7d6bbfb5deb573e2bd57b959cf9345794dfb4c1a4666bdb8172754e70d5801368b4632459bdbcc30115a81ff261d17c16e5787159249f0fb07c411a36f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-115-1588841517427",
    },
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
      "8d",
      "54",
      "61",
      "6f",
      "9b",
      "30",
      "10",
      "fd9e5f81d8c7b54968202195a2354ae88a94908e9054d53451db18ea1630c5a65355e5bfcf0692c0526dfd0677efbd7b773efbbda328ea334903f5525121895e0a9cbf7d79a2503d9319cc412433c5d72d875333194516211b787fbbe0e9763a99542852b21948b2189f335ae408b3cbcdba1be5b4c8404ee9b9103cd734e35c334cd3d435431be917a38acc701c2e48fa2c251e39cfd865afb737d28d288d620c32c2ba88268778eff5a297e5f40923ce7aedba3d518af5fe53f95b4c11e084a693cdba7251309cfb380124963e8ef4005eb5f5bb0424dd48a05f09c200215aa45c7aab64104d43121579292e94de4550844bd387df46405d5b0b6be62988c64592fa2948f09912000e7cfe9661e5da5d2d95078e197fe8dacef5ca5d4e3d7be5f8ebd98db59c7667abc566e9ac95bb1bcbb5140e608c4b0965a25c957f8ef8298d954503a143d2d29a27b30d43225bcfd3fee02c0f1252449863b886f9a3fe1068667f0c433842a1393060d8c7109a70648001eca3b18ef50062d054289d557c90d214e2000f7513f9381c605f1fc3810fc663e01b4360e8c3c01c0f8db15ab377875e508e01c773c232ca483d6c75e65a53cff2ed6bdfb1acb9353fb6fe3b2727e83bd71660cfdd3833c16a8e290445cce755a3ed21b5ba97e7d26cec5f133c6920cb0915a6ca25b01dcf72a733cfde366c888d5ce008a0b7f58bdcc910c40c1fd9201747cb71bea4813c47d5992e9bfd96fb75bb073181f879f0796c4700e5ba94bd9cac4bbb8e27d6b1358aea28aba8baf65cdbf9ae3692bb8f65b6202e3ed079adc36a26a6f52826cc5a5a9dbfbf7e751a355471c56b7bea8f8de5de4b6e999319178738c7293a56fdc4a64b6295fecc1326f0fbf74452c4937230c0b8088b",
      "5b87d8b17cb9baf20e926af4b5e050d32e0c7d2f2888393f450c86833de2e44d91b5708253be1f46f5b65493dcb52c150d3b254dc2c54570ea53dc75769d3f0e9a5d1c1a060000",
    ],
    [
      "ETag",
      "u+VtbA8m7gEiiUbYPLtnVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "82",
      "30147de75798ee553359fc604b7c40e7a60b730e712f8b31152e8a03cada32678cff7d6d41e5c58564267ba1bdf79cdb436f7bbad32a15f411c41ebaaba045b0fc4c816eaf96c05fe5c40696869c892121310354956ce07829d9bd95378aaedfecbefd7dfb549f6e600283b5d9e9642ce6ae20c282b7139188fd00428f89f85dc5953cafb01847205774499846f15c85d513ccb78982278e3d1c3d169188780a194d2dcbec5a7d9443fbea79110f733c574bfe4d428d332d17436bb2b0c1070ab10ba75d2794acc1e543d55e86a324841a23297581e522b230839794a409a684d444aaa6ebcd9ade340ca3a137f576e3a67de087c4c53c20b12c994ed0f10738e138b4c946f618b5b243a05998b5fcd00be4174ea1d822017dc9e2c043c7dcbefa0b7138725a8d02379fcdb442656955d12a3f0861fe4feae24c56585cf172daf93db990388e481af392d20fd68b79c18d0b3b94ddf4bde9f42f25cbb83043495d67f8dc9f38e6f3f8acb8f8ce4e26e86e39b03125c2640c94b5f47ac368b65b7574b06a8f482b72e9544e535069178b276b107091f371c840db6b3f969f60991e050000",
    ],
    [
      "ETag",
      "ChdNm/VRERx9J0UweSeHjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `date` < ?",
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
      jobId: "grouparoo-job-116-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffa5546b6fda3014fdceaf88b22f9b3420e1192aa10e41da65e2d14268356d13d8e686ba0d71b09d4e55c57f9f9df008826dd5f62db9f79c73cfbdb6ef6bc130cc271a2dcc0bc3c474b94e80bfbc7b64d8fca83320d15267aeb10debd6603d78823a77ebd5d697ae9cdcb6db198aa66c8156710845c1124e405c4c27a52567498c3863452558b4ed46d1ae3b8e53b3eb76b3566966640161d0a7d193967890321617e5f2ce4869c9d83204145351226cb58f979f2be598b3472052948feb96552951fe4be5cb901124298bdad349e62211c067b04234d43e0ef405fe74ac5fa268555a2af433258008614924b5b74c86b028a0cb84a7e24ae95505553835bdffcd05cc89db77bbbed11d4d87fefb395a69b9f90703096336e32092501a57e3d1c098c7aafa031220e6c6fd6777ecaa0867010d61461773a36d5c1a9d61cf30e60b24616e7c4f2cab4a8ccbd4555a710142d228f5e5231c42ce8dca6e87e99d39c8bd8416415259d8c2664dab816cc76ae1003749e054eb38b000630737eba88a2dd2aa416d8101e515a4ae9df151c4225c6934a05eb3a015340123c7a960c04d0b13e234308185dd847a150781b955d8ecfb211c54a73d2a6226e876da6677ec767c77e65dcd86aedb737b87f67f727a82be1f7b0aec8fa7c3ae62e547152035f85ed6ecf1a08e2620d54cf3cdfd698a270dc49c32652abd05ded077c79daeefdde56ca82bd98725222f93b5be94010a051cd888a31548e003b6d06769de8c269eef8d869dfe4121bd65373ba450b06f7bb3879ef26afe4b7c7c33b243cba2da66a366e6729b8f6755ee50989c9179de864dfb48a37046ed5fdcf5f421febfb98a55b18a56452d8cdfb8dc7efd28e48a986acd6cdd99b75377fc5573d39cce8c21000e1139947dc383d3c42cfd9635aaf0bb9da6296aaded0d08a9c2eaf11371289fbe1ebd0ae82a3b914cb06157ac466b27a8885c9e226ca7b6439cec355d0b5610c9dd30b2fd964d72736429c9d949691aaedee2d01b5ea7e60b9bc22fa691f93b9e060000",
    ],
    [
      "ETag",
      "Gb1eq9MqMke5rE539JCtSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "7d",
      "e7",
      "2b",
      "48f73a32eb749a253ee8623613e736365eb61853e1c260c0c5b6cca0e1df6d0ba82fb4e79c7b7bef391c2ddb267f711e90479b6ce3685702af6e22901ffae282285329d451602e80dcea6a902cd2d5877eb2abde6891c47cc0e8c19bdef55ebff793495325fc5fc898aa3b2aa47018431a08857f0cb65bde6839cb40bfb8d97033d0bcd06ab22a8cb6587dcd9fe7eeb5946160a495b75c4e67cb3969a5da9c6bf5adcd2a096e5d088143eec365a1826302be5c18e78265450a8ec092fb20da21bab191238e65c138a2a32887d207870ec7e3f1800ee968d01f75f529fa4cc698eb16ef939c17902859eae25edb27b4c98737b049a3cb828457015d47a4a47fdd7c4fce54ddded65687d69761b34a8278e7a8cc0830167aa4cbe209b557a9a390bc0443fb4cfdae9758b69c555b270412057819020000",
    ],
    [
      "ETag",
      "z2jqyO1pjir4a1zUA/0MZw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfc95283300000d07fc9b9ed4858e38d30ca6ad94be985414c14b105c21a3afebb1ddf1fbc3b28ab8a0c4331b60db98167c04b880ed5c16d35cc433ae96f7d7c2456f0faad5076f24ece2c2a47ce33c76c47058a4887349524238dbfc42b4edc32cafded47cd9f2e4e20f426c6857dd6c32cf3785366cbfbacaaf4dabbd0b575c894d14082c8cd7d27b65a1d482f1396ad7ddd27d62d33e2e4b284736b7814537f3dd7da24afd08ff20f0a37476fb7a4119049515a47b1cd50e4b97d99a69f7dcec26943b4e10259c00e90b5ab19198afa3113658476e0bf598cbc238f2b2625230cfcfe0193740a9805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-117-1588841517427",
    },
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
      "8d",
      "54",
      "61",
      "73",
      "9a",
      "40",
      "10fdeeaf60e8d74485a890cc380da3d8d8516c1193e9743ae43817720972843b6c3219ff7bef00156aa6cd37d87defeddbbdbd7b6b298afa4492b57aa5a801899e73c85e3f3dd2403d9319e028929949be45e399fb68bd5813cb74bf8e6e5e9eb8351c962852b019daa4319c339a6718d8d56ad98e329aa728a3f45c089e6b9a71aef54dd3ec697dcde8e9464966108733923c498907ce5376d5e9ec8db4234aa318504a581bd3cd21ded9ea9d34a38f8039eb34eb764429d6f94fe5cf31c588139a0c57cbd245ce20f36183482c7d1ce9ebe0baa9df2668d38e047a4b30208c699e70e9ad94c1340949946785b8507a1341112e4c1f7e6b017569cfec91a7601ae79bc44fd006ce9435e2c8e7af292813773157ee39307edf9e3a93853bb7bce9c2f197a31b7b6eb5478bd96aee2c95bb1bdbb5158e82180a0965a85c177f8ef8298c1545d742872485354f666b8644b69ae7f49db33c484811618e4105f38dee006966f73208030387e6453f08bb10046660f4d145d0c5973de8ad03407585c259c947094d0c13e0120f067e3fd44cbf17ae4d3f005df38d4117fa2880aeae076ac5de1d7ac119200e63c252ca48356c75e4da9667fbd389efd8f6d81e1f5bff9d9113f49d3b1560cf5d3923c1aa8f294479ccc765a3cd2135ba97e7526fec5f133c6920cd0815a68a25983a9eed5a236f7a5bb32136720611c2afcb67b993218a191cd9281347cb219bd3b53c47d5b1e6f57e8bfdfab6073181f879f0796c4700e5ba14bd9cac4bb38e27d6b1318af228cba8baf4dca9f345ad2577efcbdca2387f47675b85d5544ceb414c9835b45a7f7ffd6ad56aa8e28a57f6d4ef2bdbfd21b9454e665c082183041fab7e60d325b14c7fe40913f8fd7b2229e2493918605c84c5adc3ec58be585d79",
      "074939fa4a70a0e986aeef050531e3a708b3afed11276f8aac051b48f87e18e5db524e72d7b094d7ec1434091717c1a94e71d7dab5fe002fe4083e1a060000",
    ],
    [
      "ETag",
      "FuvaDLRjAxAFA8RJCHxktA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffc5545d6bc230147defaf90ec556115bf36f0a14ea7823a6d2bc886486c6fb5ae6d6a926e88f8df97a455fbe2284cd84b937bcfb939cd4d4e8e5aa9843efdc845cf25b4f637fb04e8e161037c262726b024e04c0c318918a0b26403c71bc9b6fa8bf7ddccde5beb6ef56911f67c73d71f18ed76ca62ce16422c78471189d8f3217099883f545ccaf20a8b7008724587044918ad5458bec2fc102bd8b2cde1a49f4742e22a64321f8d8ccea88732e854be2de2628e576ac9bf49a871a965626847d62678402172e0baeb98921d387ca8dacb701807506124a10eb04c4416a6f0869224c694908a485574bd59d1ebad56aba6d7f566adda3cf303e260ee934896cc2d74f9014e380e4cf22d7b8c1ae921d0344c5b7eee05f272a7906f9180be64b1efa24bee54fe85389cd88d5a8e9bcd965aaeb2b0aa6895e707b0fa277571265b2cae7831edec9edc491c8724897841e9d7d19b71c78d0b3b14dd74d7b07bf792655c98a1a0ae3d1cf72cdb184f6f8a8beff26a82ce81039b52224cc640594b7facb5eacdc6233a5bf585482b72e9544e135069078b276be07391f370c0403b693f410891f41e050000",
    ],
    [
      "ETag",
      "SGXZjQTqSbD29XmEiRjGHA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `stamp` < ?",
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
      jobId: "grouparoo-job-118-1588841517427",
    },
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
      "ffad945b6f9b3014c7dff329107bd9d42501420889147559423aa45cda84b46ab72931c650b7802936adaaaadf7d36e4024ab755d3dee05cfee7778eedf3529324f91ec79edc936417070f194a9f3fdc1157fe2c3c888140789ec0f8440fba2793a83dbe7ef8eadd68f767e0a2df2fa2709e4d419484a84e499642447bab65234849968094903a17acabaa5957dba669ea6a5bede85aa748a628f42738be1712b78c25b4d76cee401a012141884082690392686f6f3e6acd2425770832daacd66df252b4f997caa72181806112f757cb8222a3285da308e050701cd23df74b55bf8141d40878f42386084048b29809b6420692d8c74196e6e25ce9851bb93987deff960cf2d29a5843471ace5733e7e30644426ef34902545aaf5344b39049e3c57c2a6d125efd16504437d2d5376b61714b4a7c1ca235f636525f3a9506b391246d28e3b81be947a6282d289de65879490f5186e31ccc016e884a38dcbb9da6fdc649ee258408609c611bb6ee2806504da5ebfa6e07fa66abedfa0a725dd3edb441cb55605747bae722505660a276910f62121b5acbec1aaa6e7a0a3481064d53053a72a16698aae11950019aa7189e2e6f155ef7fdc014018646982684e2edb8e5e1c21a38d6da1eaf679635b24687f69f527c147db5b079b0b358cd863cab3c2a1ff0c98f8a66ab83aa4c80f199969bfbd3148f1a48524c38547e0dec99632d0643c7be2c61f03b39410180cfcb07712b7d105274c80629881043e99478e22ce5f3f9d276ecf96c303928e4d7ec7c174979d8f73deca1a7b29af39c546f4671688555601afba3a8745355b90461f686cce3d62cab158dda1b6aff42e7d8536be90ca6e7ff81505334a5ae687c6d38aad6535b3d556f288a72f31bf0edd7cf5aa9a4cc57cf1658be58598b6b919bfb8467817c94a2181e20def1064562e17ecf6ae5f1bb3d2752f8aadb03f02dc130df07901ecae70f4a6c071c158754081a6aabad6b3b419e98b2e308a36dee228e769da8852214b3dd308a9d574cf2b582949570f23411ce9fe7cc9e9d",
      "e5f0b5d7da2f8536c9fcb2060000",
    ],
    [
      "ETag",
      "waF+4g9+Lm5FYqBdZ2kGaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff4d515d6b8340107cf757c8f5b5426d13620b79688a3429121adb40a18470ea6ab5ea9afb4891e07fefdda9495ebc9b99dddb9df164d936f9cdeb843cd924cab38304d6de642036fa120297a5e0ea68b0e6406e7535089ae9eaf6b03e72fa28db62f32679147df9cb0437f3795fc5e31fa8a8aa3b29a4709a43997085bf0db607de6835ad40bfb8df3333d0bc3068a26d8cb65a7ffaaf7e782d55981869bd0d82e745e09341eaccb953dfceac526014420a0cea182e0b350c0b88c5ca38e7b46a4a70384a16031f86e8c65ece18ca86324447518eeb7a8e3bf53c6fe24eddd9e47e36d69718539163ad5bb61fe4bc804041cb10ffb47de2f6f9b01ef6698c5990f42aa0eb889474d4cd0fe44c75c36d678d687719b66805f07786ca0c0763e18e8c59bca0f62a7414824930744cd5ef5ae662e0accefa07618fc8b919020000",
    ],
    [
      "ETag",
      "yqNvsa9uyjQJusbbXEHdoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6a",
      "83",
      "30",
      "0000d07fc9732db5ce6af6e665ba126f11cbd497e034b351e235883afaef93fdc081f30b8ab2a4f34c44dfd20ebc83adb8c2737946bd6e6e986a611b18c155dfab07f1d2a1a7da6ca0707c4e09ab545931abac23fcab72befb655997201de7c11d7e12adb817686114da1ed3a8abe1bcf51eb589d2286eb24ef49cdf353bdb6629b0463fc44fccf666ef649273b1413712c6fe567bcbcae524fdd45b5bc237e323f2c51e0b074e50b5f0d896e8703a9f670941b2944b7874e4cb55bd28cd2dce424b526b7002741dd84467c28e99a2427802ff4d22b6811e579316139dc0eb0f59aaef0905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT column_name, data_type FROM `test`.INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-119-1588841517427",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d739a40147df75730f4357ea02824334e639524cc283688c9643a1db2bb2e64136409bb98b119ff7b7701156adae60deebde7dc73bff6bda128ea0b8957ea85a24212be6638dd7e79a6503d931ecc41283de4fac11a8716c270f06d7b1bfe32efc1b4ff361c1651244733b04e22dc64344b116617cb452b4c69968094d2a6206c6ada7953eb9ba6a96b7dcdd0bb460166380aa6247e91144f9c27eca2ddde0b69859486110609612d44d7077b7bd36d27297dc688b3763d6f5ba462edff64fe1a510438a1f170b92854640ca73e5e0312491d47f80a5ed6f95b04ac5ba188de10840142348bb9d456d0201a0724ccd29c5c30bd0ba330e7a20fbf1583bab0a6d6d853108db275ecc7608dcf9415e0c0e7db042b57ee7ca63c72ccf863cb76aee6ee6ce4d973c75f8c6facd9a8359e4f973367a1dcdf58aea57000239c532843e532ff73c44f2e2c4fba123c24cea579d25b1124bc653fed0f6679a09024421cc365986f740640333be73080060acc5e1f061d0ca1098d3ee8c10e3ad7b1be821854197265051ec434ee1a3aecf44ddd8786a1fb7acfecfbb067401fa05e0f22a8c34167a096e8dda1169462c0f184b0843252365b1dbbd6c8b37cfbca772c6b624d8ea5bfa5e424fadeb545b0e72e9db14055db14802ce293a2d07a936ad5cbb9540bfb57074f0a48524285a87c096cc7b3dcd1d8b3ef2a32c4464e7108d076f12a77320011c3473448c568394e677425e7a83aa359b5de7cbfbeef839888f871d0792c4704ca75c96b3959977a1e4fac63ad15c5280babbaf05cdbb9562bceddc7347720ca3ee0d994663511dd7a121d6635aec69f5f3f1b951caa38f1529e7abbb4dc0789cd7dd2e3e200a73846c7ac9fd874092cdc9f79c244fcfe3d9110f1a41c04302ecce2ea103ba6cf5757de20295a5f120e345dd3f43da100a6fc34a22b6ee1ec2f6f8acc85d738e6fb66146f4bd1c95d4d52569193c364b83804a79ce2aeb16bfc06a3f307651a060000",
    ],
    [
      "ETag",
      "iGYECgEceb6ByQgz8WaL5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d1",
      "6e",
      "82",
      "30147de72b4cf7aa992ca06e890fba3967a2cc29be6c31a6c2057140595b66d4f8ef6b0b2a2f2e2433d90bedbde7dc1e7adbd3bd56a9a0cf2076d143052d03ff2b05babdf181bfc9c904581a72268684c40c5055b281635fb2ad5dbf69de1af6bbd7e86d2ddfdcad98b7deb4db198b392b88b0e0ed4524622f80d06522fe507125cf2b2cc611c8151d12a651bc5061f50cf36da2e0a93d1958fd2212115721d66c38ec74873d944387ea65111773bc504bfe4d428d732d17436bb29c8007146207cebb4e285983c307aabd0c474908354652ea00cb45646106fb94a409a684d444aaa6ebf735dd6cb55a866eea4de3ae79e487c4c13c20b12c994dd1e90738e1389c908dec316a648740b3306bf9b117c82b9c42b14502fa96c5818b4eb943f517e2c0b21b46819bcfe65aa1b2b4aa68951784b0f8277571262b2cae7839edfc9e5c491c47248d7949e9e7e16be78a1b177628bbe9a78eddbb962ce3c20c2575edc1a837b53ba3f14571f19d9f4dd0dd7260634a84c918286be975a365361b7574b4ea239156e4d2a99ca6a0d20e164fd64bc045cec32103eda0fd00d87ba3ff1e050000",
    ],
    [
      "ETag",
      "NzG75/4TZf6EyNg5zhsfjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as __result FROM `purchases` WHERE `profile_id` = ? AND  `amount` < ?",
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
      jobId: "grouparoo-job-120-1588841517427",
    },
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
      "ad",
      "94",
      "5d",
      "6f",
      "da",
      "30",
      "1486eff9155176b3490312302154421d83b045a2a185d06ada26b01d27354de2344eba5515ff7d76c247106caba6dd25e7e339ef39b6cf4b4d51d4071a7bea85a2221a3ce6247d7eb366487d2f3d248381f4ac6f88330cd7b7f74d137c04fc267ef8390641bf5f46d1229bc32809499db33cc5845f2ce68d2065790253c6ea0258d75b5a5def98a609f48ede05ad6e99cc49e84f68fc2011f75996f08b667327a41130168404269437308bf6f6e653ab99a46c4d70c69bc7759ba2146ffea5f265c830cc288bfb8b79a922e7245d9208d250ea38a47be8c331bf4161d40844f413c50462ccf23893da4a0c66b14f833c2de082f4228cc25c88deff560ceadc9a584357194e178efb760523895bbd53205796cb94f03ccc94f16c7aa5ac1251fd1e72c257cadd676b66094bca7c1a9225f5564a5fb95406ce48517608e55bae696dac5c16ba8a9a1ee1198d0b652e4421a9e811deed38ed3347b9474808cc84886dd8b2ab195037b51ef25117fb66bb837c8d2064a26e07b691867b80000f11582564b276990f6316038074a30bb1e1811669fb00191ed2808e5b6d847c200846a70d0cafad6e099b7d3f3825302323ca13c6e976deea70660d5c6b698f978e658dacd1a1fd1f293d89be9bd922d89d2d9ca1c8aa8eca8762f4a3b2d9e3411d4d201333ad36f7a7299e3490a4940951c53db01dd79a0d86ae7d5b91212ee58404103fcf1fe5b5f461c8c9211ba630221949af9827cf52bd9ece6dd79e3a83c98150dcb3eb5d2417615ff7620f3d5569ee73727c33ca432bad52a601d48a6ff3fe2ce51686f919ccd3d6acea478cda19dabfa81b4fa683ffa4afd101bf91b8fdfa5eabe055b165b6d2d49b8535fb22730b9ff4cc884f5212e343c157bc369958ba5fb34545fc6ea5c914b1d5f6",
      "027826cce2e5637e285f3c1db9076854b65b020d1d98bdd60e2812d3ec34a2d7db973c596bb21689489ced8651aeb772929b234979454e9126c3c543746ce75321beb6a9fd02c200c16d9d060000",
    ],
    [
      "ETag",
      "jQeNCljVh/84B4sQnkxF4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1588841517427"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "4d",
      "51",
      "d16e8230147de72b48f7b89180936996f83017b69918e3505fb61853ca1571c0656dd9c20cffbeb680fa427bceb9b7f79ec3c9b26df295163179b4499426df15f0fa2601f9ae2f21882a93421d251602c89dae0649135dbd885ed05f2dd9c31fd4b707f03f82fbb59b4c266d956007c8a9aa3b29a4f03e852c160a7f1a6c77bcd10a9a837e71b7e366a079a1d3645d1a6db65807af41782de5181b69b199cf9fa6f380745263ceadfa366695234621ec8143c1e0b250c9f1084cce8c7341f332034760c519886e886e6ce5846355528ee828caf106aee3f9e3f178e8f9de683818f5f519322a532c74cb6645ce0b4894340bf157db275e9b0f6f619b469f05d95f05741d91927e74f3809ca9a6bb6dad1e6d2fc3a6b504b1e4a8cc0830165cd267f18cdaabd451485e81a11955bfeb2d951d6735d63f2c10d8ee19020000",
    ],
    [
      "ETag",
      "NbFo5SPc6zey+he5ZE3T0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 07 May 2020 08:53:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-Q050=":443"; ma=2592000,h3-Q049=":443"; ma=2592000,h3-Q048=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
