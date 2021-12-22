const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201464884";

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
      "7282300000d0bb64ad4ef8a8437709a0965a0882026e9804828223bf807c3abd7b9d1ee1bd1f4093840b1177d58397e0034c54d656c98a4114bee0ec13bfa78373569e9b078d9abe5aca38d821c6b4a37c370d2ccd338b949023d70cea38f3147c271eef7587a0c036a6b8f0cf7bb216073f188b7db0236373dd204a993625990bed2fcb9bbccb2dec2ed0b8cd956af9c3c36eb7b49d2d166530dd4ad83ac6db9beabf524ad55260e2e458ea61f98d4fe7f4e9da732d2f4d5d8a74d2b1a36811c69e7948f941923f5dd599fa865183976957245d4532745d1bcaae87e920c002f0b1ce5b2ee2fced56d69ab600ff097137d5fc3d81396d790b7eff00e91501a423010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6f9b3014fd2bc87b6d1220349048d19aa5b48d96908d9076d33421632ed42dc1149b4e5195ffbe8b69ba5695ba276cdf73ee39f7832772cfcb944c48c2f38706eafda73b919013028ae6f8aabecef7b7a3fd3eb52f3db3d9021fff28bee4d3292278cb92745715d093a2a919c8c976d3cf6bd154b416a287897a56cf1a39a66d5acec8f13c0769128a6cc9cb7b24df2a55c9c9607094eee742e405d08acb3e13bb97f7c1a33da86a71074cc9c15bc5018ac8c1879a9f0bc1a8e2a29c6e37a8df48a863d8515ea0837fc434397b9bb9cfe9ae9f23f89133a08c89a654ad2b4cc14499f1bca97556327922dae5ab03d9f84b7f1e194c14cdae8c4bba831323a58ac66a5f817111ae57c622b85887ab59b45807f1667ee5af66fdf97ab95d051be3e6ca0f7d43d1a400cd35a6c699be057841fd14a4e2a5568fdae756f9b93f8bf7436909282da10bc6ae39a296678e932c7159e60d4f93cc8424f112f7940e13938d1d70d20428f2b4a866d15294639ad8c9a969c743a066ec78e0c463ca92786c5923dbb52d7019258713f2a7e60aceb9ac84e45d87c84db888fc380ab7c17c16f9ba848c36853aef8cb505bcf6a8b0c0d8342d047e50d7a18d72816a6dcb1741e487b379b4b8f6bb292f21a76cbf79c03967b49080685a630315d42b9162d348305bf9e708d653fb760c4a32f9f544dabeb74e5eb5fd851ee1105bcb4a7fc9260a17c1a5b673445cd3a2d190c7ee406a60a24ed1f3e137e2704bbb1ce4fbd60f7f92ee29840c6a28d9ffe789601df8dfbf76dc7c84e2eea38a5478c7e561b2d56035744bc475ad47b66bbae6906870addec53cdb3db6accdd166841d94eab9a06ef3b1ce4eac912f200ce2fc03ddaac35f3c57fcad77040000",
    ],
    [
      "ETag",
      "tKCyh6yyd2G80uUei9XlBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93616fd3301086ff8bf9482a25104215691fd252b64a693bda0c0dd014b9f625783876b09d56a5ea7fe79c6d0531a4ec4b72777e4eb97bfde6487e08c5494ab6a2fed98139bcaac17df2c11a6c279dc557ab9505121070b446325b5497b757fbe921f9f575baddbc9e882fe1e7fdc50512967d878692f4482a01925b927e3b12451bc036a665d7a8b2cf02e20ead2f6e8af57c798979a3b9cf9737799e4df2193905e7464e1d2d7bfe056d77a780dcebed1a2a30a018f8595aa3ef81b9b95fd3d2a69530b2ba330c2ce9e1fea036ba6ba9d17a849551348a92387c134671128fc731725233ea845688de6c703ce2b4a372adf7b82489de2261fa1817aefae70eeb82f78bf870be2c92b89fef6f8032a63be5ca41b012c6ba07f19ec04711fe25257d21883725e4105483e2608628d196947303d60e92da96b46dcfd864b5ca9faba2b8d1820f833b310048b73b031ff355f63f69d15f7fb4fa9015b3678475e89a3352cc17b34d912dae3d77f76884c9c181bd361a4d65c1fb290ae3f1bbf749f860b1a9f6b6c3efa4ce74101046f14fb9128ea41595164ebf01e31a6c8187030000",
    ],
    [
      "ETag",
      "AMfGXHwCy6zZCbS+BiY0Vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-2-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "9b4010fd15445fdaca97c5c6065b8a5ad7c115922f2de05679b29765209b006bef2e89a228ffde595fd244919217b49a3967ce990b8ff62daf337b6ca7bcd837201f3edd88d46ed9a0698151bd2f3cef767815ef27852b5944789286c5c50522b861295aed4a682bd148066abc8e3b8514cd8e4a21da58a8dd6b3b4397f488e30e5ddf7791a6a0cce7bcbe45f2b5d63b35ee76cfd29d4288a204bae3aac344f51cefdef5ba3b296e8069d57dadd84511d57d57f35b2918d55cd417eb18f51b05720315e5253af84fccd2efaf2b7738ad3a0582ef3803ca98686a6d5c610926ea9c178d3c54b5c78ff6c1e58b871d07f3609a585f5b563c99059be9244e3e6f954681ad4595152751b8fcf9c53cb79bcdf57db5b566d16a616d25302133b5b556d16510593faeac336b124f5bd696678797350f176162398458abd92c0e128ba0ad0c94e6f5c15442d3128ca1d3d8c2b7bb3204aaa9826372e39121757c324af3d463b9df1fa4398134f5536f40fb29612317dc2c058a3c6daa1f58b41675ea309710afdf03cf73f391eff7e8880dd35136e87b90e584e4e0e097da4f2dfb5e720d975ced84e2c7e1d97fa330093649b45e4e2749706823a74da92f8fe64c132f7d6a6c72438883c0777a7b32592e50cd6c235c2641349926e19fe078007328287b88f77802392d15209a4a5a8106b910190ecefeb58ac3245c2d2773530baf2a79d899f8ef75105d9d4211e420a1661f0f1ac187c447ffc6f952118ab78a2ab87ccd71ab4c190d26e1b85d5e192f67b6e70c5c330f044bfd26371cf9987bbe5053112aa8f5a9a1e3a5da4f27b1463d8330894b59e2a162f61f5b2001a427040000",
    ],
    [
      "ETag",
      "tqg77k6YSqAg4rcR0iTbIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff9d976d4fe33810c7bfca29f7f26864c74e62575ae95ac8b2b00576dbaeb4d26955a589db06d2b8e7b8b008f1dd6f12200f5b934bf745a9673c23e6f71f3ff5c9ba4bb2d81a5acb64fdef5ea8c73fd7427f2d065391ef539dc3d74e66b9b04e2ca1c335443a37df3fff5c8e83d925574ccef52cfafeb0fefae10344e4d1466c436bf864ad1291c6b935fce7c9cac2ad80b4248600fdb82bc617d7f3e03c9882632be3c271fd6d32198d2781f57c5225845124f7995e1c9db84a54ae17a55125cee6d38bebf3eebc34fcad34204ed2e352d6228b853a2e27d92dc2385622cf8fcc93f922dcedeaa4f1cdcd24185dff8ff859ac6412ff46e67d726c46aaefeb8c8f939bd1bc3b3e0e75a34567a379d01d9feb70dba8697e7115cce6a3ab2fdd598bc5e661db47ea1fcf27d6ad5c4ec54a289145a258fe3b256f45a42f8a9d95c37f4fc520977b1589a279105c4eac95dcef4225e5003c0367803d8a1c84a94719a31097ca28d489cc20f4db0c4ab3b4d4613a950fb0af2c8c20429563d863abf2ef7de12f19daa34025a2322e85ba97495ed9e2f6c581fe163fcb4aed486eabd9ab30ad53b16b3bd4b709b37da7726ab5af2356619a0bf394e3721bd7690ea00e9033408d826d9721d7e598d3801b02ffc0ce109321a67f2154cadee4760cdca76194a40df4a058386f4624c0c246e88fb0a5d366e5c486aed814db4ea3dc0ed6f614a736f10e799c36b847019dba2672a722b75d844cf4c4407fae841669c394fb4846779563bd7ef538bd44c0d866d0418c6c4ce8d1ddf73c66934332d2d6c0279883069e6f52813454f07c930ad4a0c2681beab05e11528b7c25555c79c2e8cd45fac88039b139ec02041fcf8cfabe414140740846db2230cc48290233a9405b2a30f37270ebbc6a344954adc3a5dc64b986a3e5cd91debe7a681f158a0de115c5da9cf7e97e7b8a3945fa219adbd68123eabfe8c04d42b86d21b85108cf20c499c892ca9845619ad4bac47969bbbd96029c839860381ae03c3c7e47383eac2476c8e5fda202c7ef9c875ee779e81bc83f89745d",
      "b37e4e45e31ad8dc15a6d7079c15d700b381de6566b68e2d807cbbd1e80ac66f5163e4fbae99daefa46606ea73a174e31238dd2f13adeb53302a6dbf57c761e13aae0b5d2fb6ff3b4dee6839831b841ae0591b1e7b849be159273c37c04ff62a15a2dee763783288b4be15d2e58b83f5ba038ad50ed73848408919b14b0b0fe46b5c1d15156fe33b2e22667cde898feba3b52eee4c2abd79accc8bd6a1172785c9fba0d362cd63dba37072913ebd6e4f391cd9eee1fdd728b94427c4f38de818fd8afee3f539387e84ebeb8b92f0b4cc455cca00bd291f99a7b2a08227cfb0a8ecc48a42f879f629d1d6b02ceef93f5df9c380fc0d0000",
    ],
    [
      "ETag",
      "2OXKxbBESJ9r8oTtScXwgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "8b08000000000002ffedd34b7282300000d0bb64ad4ed4a84977e28f56b07e30c46e321023106c440214e8f4ee757a8dfaeef0be412084348617b7546af0029a60407aa217c229ab60eb6decee458959335e542a8b136f7c0d726d6f5695aaed0fb8c7223ae0a02a295be2143a449d5f776aceb88652ba91d33808d787130969c5a2223a6eb575678688358a71d43d1a34cfeab97bb7d8db4a8f54e98bdb19eeecbd7df1a158067db3503e7ee7b33e8ea95b85c3bab555bfe1d91a5a617b4a46349c4c5d1ee759eab9def64ad0da323b7f45918b82230e754116714ad9467f9ee864db2e07064ac77c9510956eefe9e9df011d20eb2cc9a5e1c963fb70444807fcd5e74593c9c77f4b06b9ccc1cf2f1c25543a19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553ef4fdb3010fd5722efe36893b6a1bfa46a74258c4a6dba2529689aa6c8712e99218d8bed8010eaffbeb3431908697c8aed7befdeddbbcb13b9e5754ea624e3e55d03f2f1d38dc8c809014d4b7cddfab7629c97a0bf3ea835bf8c3894eee772364304372c4577fb0a3a4a3492819a6ee36e2945b3a752880e26ea0c3abda1eff5bd9e3ff4c7631f690aaa62c5eb5b24ffd17aafa6ae7b94ee96429415d03d575d26762fefee7ddfdd4b71034c2bf7ada28b22cafdafe6974a30aab9a867db18f51b0532851de51556f08f9867676f337739dd754b04df73069431d1d4da54852998a80b5e36d26625d32762ab7c752071b00a1689c344d5eceab4a63b387172aa69aa1ff7e05c449bb5b30c2f36d17a9e2c37611a2f2e83f5bcbbd8acb6eb3076ae2f83287034cd2ab05c67e69cd95b8817d4cf41695e5bf5c43c1be5677f96ef87620828ada00da6236f487b636f9215d98815e3c16956789065e36c744a0799c7263ef87906147956d4b2688d3d67e0015a91fa9041eaf7fba3948e277e9ad33c6343184c7afe801c4ec883e41aceb9da0bc55b87c875b44c823489b6e1629e04b6858236953e6f0b330dbcae516383a9e7f510f89fbe0e26ca05aa19cb97611244f345b2bc0ada29afa0a4ec31bec33917b45280682ad1400d722d72348d84f375708e603bb5efc7a022d35f4fc4f86e2a7965fb0b3dc1219a92b5fd92388996e1375bce117145abc642eedb0391c084ccb1e6c36fc4e196b639c88f6d10fd24ed53040548a8d9c7f344b00d7cf4af1d37dffcc8b151511aefb83c4c190d26a15d226e7b3db247fdd3e129b160a9dfc54683c9d13293c364841dd4fab9a176f3b1cf56ac512f200ce2fc436bd5e12fa22aba3877040000",
    ],
    [
      "ETag",
      "U4ko8dgetBwsMiHRieg/+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d93616fd3301086ff8bf99a4a2d0ba144da87140a54cadad1a612689a22cfbe040fc797d94ea7aeea7fe79c8d8236a4ec4b72777e4eb97bfde6c07e292359ca6e547dd781ddbfa9c17f0bc11a5ca7bda3578bc6018b18785e13196f9558fdb8cb75cd9b870fdf559d6993dc9f9f13e1c44f68384b0fac52a0a563e9d58119de00b509d45d63ca3e8b98dfb7a1b829d68be517ca1b94215f6ef33c9be573768c4e8d927b5ef6fc2bdaae8f11bbc59b355460c10808b3b4166f41f84558d3f1a6d53072d859018ef5707f505bec5a6e114754199d8d26493c7e3b9ec4493c9dc6c46914dc2b34846e37341ef3e8b95ee33d2dc9266744d83ea685abfeb9a3ba92fd22215c2c8b24eee7fb17e04260677c390856ca3aff28de1ff04984e7a4e6af04e9a6941e826a3012ec10a5da924b69c1b941125dc9dbf684cd56abfca52a465a547218dca90140fbdd09f89cafb2ff494bfefaabd5a7ac98bf209c27d79c90627131df14d9c565e0ae9f8c30db7b709716c9540e829f26e378faee7d327eb4d8470cb6a3efa4de761031c1e94ff9aa3c4b2bae1d1c7f03eb95103087030000",
    ],
    [
      "ETag",
      "4UicOYqLlgamz9XigAln6w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-4-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553db52db3010fd158ffad24b2e72e2c44966189a0643dde6426d03036d2791e57510d856b06428c3f0ef5ddb84cb30034fd268cfd97376b57b472e4516911109c5faaa80fcf6c3850c498380666b7c757fec85074eec7aa688b39f675f2efed95e77bcb3830851b2144b370934952c720e6a74e4b7d6b92c362c97b289899a56d3ec5bb4434dab6f0d0616d21424f1546497483ed77aa346edf656bab596729d00db08d5e2327d7c6f5f77da9b5c5e00d7aafd52b18d22aafda6e66e2239d342663b473eea170af225a44c24e8e08918855f5f666e0996b6d608be161c18e7b2c874e90a537099c5625de4555632ba2395cb6717e23b536712189f1b863fde779693b11f7c5c298d022b8329c30f3c777ef0a9bcae96cbf39b7465ec7b8b99b1ca81cb3c522be3e4bbe339c696f2a7a0b40b3bc6aeb1f0f61ccff876fa181afb9386b112517533a6eecc0d0c935263b1bfef3b8141d16e044a8bac321bb03081d2e8433bddd77f581298660aeae0d2a67d660ee8308c439bc7836e2f8c2984e120b47bac1b523eb4c08a4260c8d365f68ac5326c916d99fd9046439bda118facc8b23bc3c1900fa04ffb7d006bd01bc270d825f70d72930b0d7b426da4127553c989e706ce32f08ee69371e05465c4ac48f45e6dae2ce2b94f8d452e293511f8466df7655448542b7fc99d078e379e04eeb1530fc614d68cdffa57381a314b14209ae52c050df94c46d83872b8f0ddc05dccc7536454bf7db8452832fa7df744086e3755a7757592c09d397e309e1d561eb6a063961415eababe900ece6d93769ad40ecccec8ec8e4cab45293d23f7f77f9188e35de725bf8e1cef94d44f1ec49043c6dfff59045781f79674bb3208c5a541159c362d708cb82a35780ef53889b4f4b265db5dab570e1c8273fd2ad637bbdb9e9539ca8c9042a61f0aaa5706ebacc50af508c2204ec11c3706a3ff013b4f64d2b0040000",
    ],
    [
      "ETag",
      "IJDbGEfIR1ifnKZ+jx7R3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d95616fda301086ffcae47d1c4471e24012a9d2a0a52d1ba51d4d3f4c53854c7204b726ce6c878e55fdef73b229c09a31e817f07bbe57dc73679b67f4c8b2048568c6d2ef05c8f5fb14f4977231015570adcc572e3205a88540d3d46442e406f3607ceae2af59f6d377dc459e7e4a4f4e4c868a17b0a4287c4673063c5128fcf68c32ba0463638949d0ebbc5c0fc7d1e062303181a548cac0f86e34eaf54703f4d2aa0d348e4591e9e9d1c639934a4f2b511b6fa3c9707cb1dfc7e99b6c8698f1e32c296409c8e33c2c9fd22491a0d4913ea1a634cf37a6fef5f568d01bffa7f95922054bdee05cb1631d5caf368ef3d1752fda9f9f50bd35a2b35e34d89faf345d6ed5140daf06b751efea66bf6b3a5d3c2d0f69f5fd4b0b3d88d904e620218ba13cfeb9140f10eb6179b394f9750e6d250a1943393c935c6da45214399542b44da44ddab8436cc7c6a4437c9f983c2e62aa99c84ceaddad290d69a1299f882773af509920aba5b962f3ea7365c2dd0aa15c39f5ea12784a6bf5990353b55a3c96b2f3117e54555ab158d67be7e66473a8a5ef590ef12ddfc29e5f07b52ce00041ecae657b9bda0c67db76daf6a65c6c793eb6bb5d2f2083a021f11d7642ec86987cb0edaae7dbd47e03f50548cd36159c1633a6752dd3b8d2dd43c0b1e35a8ee759d8b54d07eaf09c7205ff503bf03ec1166980f777e171c70d9ae1fdbdf04103fca8901c20ab75df1c15e0bcd67cf63be01fc2efb8d8cc3cb04c0b88db8cb8af171dd33e97bca60a76f11dcf769bf183bdf8d8ae1d9be2ce84d48b752d874a8b4d331256cae01074529e796c758865a673c8ac77b79cc0b63cf715d156c915baeb76ba8de8d8fe1bfdfecf2bd05f6b5037529817454152b5c1cca67a5b4e4549659ec8b0acac85626afe952f99466155dccb2fdbefedc6f3070000",
    ],
    [
      "ETag",
      "eT39f9NC31Ynnz823hpgJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "d1",
      "56",
      "82300000d07fd9b37ac01cb6de28c0108a5440f0850363d844606c0c719dfe3d4f9f70ef0fc83126426443579316bc807bbe440bbc2834331935157efa5169b2f87964cbfb266de8d5311b14d2a2b69a79635ad657457ae5aee4a5ef7cb4bec2f1b0a29307b5239beae8f2e6efded9d90e5448bdbeaf79a8df489c8e42547e25a2442fbfbd88d2d226bea1422997d1f92607b66d71b23e07b9d28b569aee68e42d0e2689fdccdb1d868adb1f5287fbe0e4140e9a5ff7b4ebf829819bbd6109376d3992256b4464c02d21f50e2aa2629a8eb6571d3dd9575b3dc686db0930036462941391d187fb09223403ff09d97067e431f14a724e38f8fd03746c29fd23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "6b4fdb3014fd2b91f795b6499b3ea8548daa04e8d4a690a6a0699a22c7b9098624ee6ca7a843fdefbb71280321c1a7d8bee7dc73ee23cfe4919709199398677f2a90fb6f0f2226270434cdf0f5af2a92dd9310e1ac185e0bf6637f7f1b5fde4c2688e0354bd1629b434b894a3250e3cdba9d49516da914a285895afd963370edaeedb80377347291a6204f17bc7c44f2bdd65b35ee748ed2ed4c882c07bae5aacd44f1faded9753b5b291e8069d579afd84111d5f954f37b2e18d55c9493cd1af52b05328282f21c1dfc2726f1d9fbcc6d4e8b7686e01d6740191355a96b5798828932e559254d56327e26c6e59b03597b0b6f165a4ce4555146252de0c44aa8a691de6fc1ba08564b6bee5fac82e5349caffc683dbbf296d3f66cb5d82cfdb57577e5059ea5699c83e15a13ebccdc7cbca07e024af3d2a887f573adfcd29ff9c7a1d4049456d004a3a13da0cec83e8dd378c8d251af1fa736c4f1281ef6692fb6d9a90b6e1203459e11352c5a8ab27fda4ba0eb3811f269e4829344b4db73a2d1c0b187497798a403208713f224b98673aeb642f1a643e42e98875e14061b7f360d3d53424aab5c9f37c6ea02de7ad4586064db0e023fa9eb5047b940b5bae5733ff482e92c9cdf7acd94179051b65fffc139a7345780682ab1811ae45224d834e24f97de3982cdd4ae8f4145c6bf9e49ddf7dac99bb6bfd2431c626d599b2f5987c1dcbf34768e885b9a5706b26b0e4402133241cf87df88c32d6d72909b8d17fc24cd5300294828d9d7f344b0097cf5af1d371fa1b8fba8a234de717998aa3598846689b8a9f5c81ebaeec826062cf587d8c01d1c5b56e7a8334201a57e29a8d97cacb311abd42b0883387fdfb4eaf00fc921a56277040000",
    ],
    [
      "ETag",
      "zsmdvwooTCm7PocJyhVbGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93516f9b3010c7bf8bf73822c14a5986d48764cbd6a834c912f23455c8b10fe6ce70cc3669a328df7d67da65d33a89be98bbe377e2eecfdf47f6433592a56ca7aa9f1d98c39b0adc571facc176da597ab4d858600103c72b2255c2f7ab9b8bb7d3babc9e85d187c7e866bb7bb8ba22c28aef5073961e59a9404bcbd26f47d6f01aa84da0eeeaa6e8b380b943eb8b9b7c3d5f7ca1bc46e9f3c536cb26d36cc64ec1b95172c78b9e7f45dbdd2960f7b85b4309061a017e96d6e03d0837f76b5a5eb71a46163b23c0b21eee5f5406bb961bc411554697a32889c377611427f1781c13a75170a7b02174bba1f19843c7f51a1f6849165d1061fa98162efb73efa592fd223e9c2ff224eee7fb1be04260d7b862102c95b1ee49bcdfe0b308ff929abf12a43fa5f410544123c10c51aa2db89406ac1d24d116bc6dcfd874b9cc5eaad248834a0e837b350068b73f039fb3e5e47fd292bffe68f56992cf5e10d6916bce483ebf9d6df2c9edca7377cf46981e1cd89541329505efa7288cc797ef93f0c9621fd1db8ebe933ad341c004a79b72ad1c4b4bae2d9c7e01000ebdb587030000",
    ],
    [
      "ETag",
      "i6avPK3+BmfHE019x1KUbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-6-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b91f7659b68eb34e9834a8875256c91fa5a6240eca1d6716e82471a97d88121c47fdf4d427908093ed9f23de79e73afefbd2397328fc9884432bd2aa1b8fdf05745648f80e129be6affda9c4f97c1d9e9a5b9fd77de5f6ac1c2f4e00011b26269bed966d0d2aa2c04e8d149d84e0b556e79a1540b13b5fa2dbbefd22eb5ddbe3b1cba48d3902553995f22f9c298ad1e753a3be976aa549a01df4add166af3f8deb9ee76b685fa0bc2e8ce4bc50e8ae8ce9b9a879912dc48951f9c84a85f6a2856b0e13243074fc438faf232735bf24d3b45f0b514c08550656e2a579842a83c916959d459c9e88ed42e9f5d48e84dbd09b33eef59e1f8d85b4dc621fbb8d60605d616d756c8027ffeed53755daf5617379bb5751c2c66d6ba00a18a58afadb3ef5ee0593bcaef9252070eac436b111c7981f5f5fc31340e277bd65ac6f5cd9afa339f5936a5d6e2f838f49845d16e0cdac8bc36cb78944165f4a19dfeeb3fac08dc700d4d7035a07d6e0fe97e944403910c9d5e945088a26134e87127a262df05378e8023cf54d96b16cf55de75c4101c216c9af41d1ec7b00f768ff77b2e47fc800ffb3674e388f6c8fd1eb929a48123a9b74acba6a9e42cf099b762c1c97c32665e5d46c2cbcc1c35e6aa229efb3458e48a521b816fd4765f45a542b5ea97fc39f382f184f9a75e33185348b9b80daf7034129e6940342ff8060c14331563e3c87211facc5fccc75364d4bfbddc213419fdba7b22b0db6ddd69539f84f9332f64e3d9b2f6b0039df2acac51d7cd8574716e5bb4dbb26d667747b633b2dd36a5f427b9bfff83441cef262ff971e205e7a4790a20810272f1fecf22b80ebcb7a4bb9541282e0daae0b41989632474a5210a68c6496e2a2f3bf6a0e75087d4e0c2",
      "bc8ab9dddeae67558e2a236c20370f05352b83753662a57e046110a7608e1b83d1ff5fdcedc6b0040000",
    ],
    [
      "ETag",
      "sIvtYLPRWVktyxY6PscTSg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff9d93514fdb3010c7bf8bf7b8566a4754b1483ca45be83a8514d2c0264d2832f1259839be605f80aaea77e7c210f0d4119e7c3eff7f77e7b36f2bfe6aab4428ae747ddb81db7caa81ce7a2303df19f2bcb4683d88910092352babe021a5cf5f7fc70fb72b6be73f2fea6af1ebece88815bebc86468a702b2a0d467911fed90a2b1b604c2b16d0a6eded659ac78b38634783aa77a4e74912cd9358ec462f802c4bec2c1583c14a3b4fc5d3e6055ce7d9325dece78cfc10c637d66618528355e08631ba2da4520ebc1fc8a12f64dbbe42f3d52a89a3f43fcdb7caa1561f20eff450c2d0dd2b719caca27cbf5e497af344dfa33cdeaff7249b3735e5cb93789d4727a7fba9a2b8be6fded3eacbdd48dce055061538b025f4dfbf757803252dfbc9f29cddc0d863e74ae81f8fc54f07b5c3ae950e71cc9ef16c3c9d05932f9369300b0e0f03d6192c2569b42c3d5f73698290a4c9f09ee74a4cc4f37ebe21f0a70e39b6873eec74121cfccbf20dfbccdcac905c0723514a9ecf1f9a445849e361f70852881459fd030000",
    ],
    [
      "ETag",
      "f4xNt+9XExqOnnBJVgfGWQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ad8e0a28746727a201040141609309107f848f4110d2e9ddebf408effd009265b46df1ab2e6805bec04896da2c9ba5f34dd4cfc5e9707d904b0717ea2a2b92e3a65221b6b851c021cab550a19076865015e95091e06832053a5997dbb224686979235dd773ef11a8c4f3afdb355f5b89efe2ca4d65fd99b8ee99c8fd7bcc75fdc2d0bec3adb70b7d21a153d3b0e106bb525e081dc50c9790d7ab36574dc41cf719bf372ceaa7dcb6de38c2e8b69da6e2b13b2e2fd59485f15904aee39cb12d9527731f24851916668f6ec81ea0f094c16b6ac7f09706afc104d0a1b973dae2fbc72d299a3601ff09f83536f433f14d09a71cfcfe01cd6a16c323010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b6d0249684222456b94d29529908d9056eb3421632ecc29e0149b565595ffbe8b69ba5695da276cdf73ee39f7832772cbab94cc48c2f3bb06eac72f3b919013028ae6f8bab3a29befabb5b82eabe52e8a6e3cd3f7fdc57c8e08deb2242df705f4a4686a0672b6ddf4f35a347b5a0bd1c344bd496f30b6ada135b0c7b6e3d8489350642b5edd22f9af527b3933cda3743f17222f80eeb9ec3351bebc9bf743735f8b1d3025cdb78a268a48f343cdaf8560547151cdb71bd46f24d431949417e8e03f314dcede66ee735af67304df73069431d154aa75852998a8329e37b5ce4a664f44bb7c75201b77e52e238389a229abb8a2259c18295534568f7b302ec2b56f78c1c53af41791b70ee2cdf2d2f517fde57ab5f5838d717de986aea1685280e61a73e34cdf02bca07e0a52f14aab47ed73abfcdc1feffd505a024a4be882f1c41ad381634d932c99b0cc199d26990549e22493533a4a2c36b5c14e13a0c8d3a29a452b51b1d3e138cb323ba6d3a115dba369162753e6c4d6c0198c5298a6e3cc228713f2507305e75cee85e45d87c875e8456e1c85db60b9885c5d42469b429d77c6da025e7b5458606c5903047e50d7a18d72816a6dcbbd2072c3c532f2aedc6eca2bc8297bdcdce19c335a484034adb1810a6a5fa4d834122c7cf71cc17a6a3f8e414966bf9f48dbf7d6c9abb6bfd0231c626b59e92fd944a1177cd3768e882b5a341a72df1d480d4cd4297a3efc411c6e699783fcdcbae12fd23d8590410d15fb7c9e08d681cffeb5e3e62314771f55a4c23b2e0f93ad06aba15b22ae6b3db227e3a13d241a5cab77b1d1c439b6accdd16684122af55c50b7f9586727d6c817100671fe816ed5e11fb65ae8f077040000",
    ],
    [
      "ETag",
      "j0TZJLOoWmnCjTTZI/MMMA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f7954849c76884d40f64cbb6483449099d2a4d1572ec833a351cb34da628ca7fef99b6d9b44ea25fe0eefc9cb87bfd72648faa912c665b55fdeac01c3e54e06e7c9081edb4b3f46ab1b1c002068e57446eeac7dd347b586777b5849b8be887e8b6985c5d1161c503d49cc547562ad0d2b2f8e79135bc066a13a8bbba29fa2c60eed0fae226cf16cb6f94d7287dbebc4dd36496ced92938374aee78d1f3ef68bb3f056c87db0c4a30d008f0b3b4067720dcc2af6979dd6a1859ec8c00cb7ab83fa80c762d378823aa8c2e4793281c5f8c2761144ea721711a05770a1b426f37341e73e8b8cef0372dc9261f89307d4c0b97fd734f7525fb457cb858e651d8cff737c085c0ae71c520582a63ddb378afe08b08ff929abf13a49b527a08aaa091608628d5165c4a03d60e92680bdeb6676cb65aa56f5569a4412587c1bd1a00b4db9f81afe92af99fb4e4af3f5a7d49f2f91bc23a72cd19c917d7f34d9e5caf3d77ff6284d9c1815d1b245359f07e9a8cc3e9a7cb68fc6cb1cfe86d47df899de9206082d39ff25d3916975c5b383d017aecc71c87030000",
    ],
    [
      "ETag",
      "Smkj8RhPRXmdeQ26VcuboA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-8-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "daca17c0d83896a2d6b17145e4d80de0b4ee8bbd2c03d90458b2bb2472a3fc7b076ca78922256fab9973e69cb9eca37ecb8a581fe9114bef2a10bb4f373cd25b3a2892627478b7febb8a06e3dd99b538cfd89faba9bdfe7d797a8a0856b324c9cb0cda925782821cad824e2a785512c1791b0bb5876d73601b9661da037b38b49126214be6acb845f2b552a51c75bb47e94eca799a012999ec509e3fc7bbf756b714fc06a892ddd78a5d1491dd7735bf659c12c57871ba0a50bf922036901396a183ffc438fafeba728791bc9322f89e512094f2aa50b52b2c417991b0b4124d557df4a8372e5f3cf4c09dbb9350fbdad282f1ccdd4cc641f8792b150a6c3522b520f4bdc58f2ff573bbd95c3fe45b6de62f2fb4ad00ca452cb7dad29fbabe76b6d68eac713069695b16372f6dee5d78a1666bcbd92c7043cd40533148c58ac65248a20c6a3b87a1796f375513882212f6c98d630c8839344ea224726832ecf5a3c480281a464e9ff422839ed860c71110e4a9ba7ac322052f4c62db033a307b0ef412120f2ceaf47b063589751253c7318d9e933816a5fa534b7f104cc194c9924bb61f9dfecbf7427713faabc5641cba4d1b09a93235dd9bab9b78e95361931bc33011f84e6f4f75967154ab77e12d42d71f4f42efcaddaf7f0e29a1bbe00e0f202199044413417250202e788c83d37f2e032ff4968bf1bcae853715eeca3a7eb972fdf521e44302020afaf1a011dc243efa19c73b45285e2aaae0ea15c3ad52596b5001fbedb2bcf672643b8e61f5f5062cd49b9c69f530f77c9f7545c8a1508786f677aa3f1dc42af90cc224",
      "2e6581678ad97fcf4ade9725040000",
    ],
    [
      "ETag",
      "8qYzUb6AyB2NJliZVD4YXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "61",
      "6f",
      "da",
      "30",
      "10fd2b93f77160d989090952a54197b66c145aa0da87a9426e62a8db1033dba14355fffb2e691b829ab1d20f21bef37be2de3b9ff388ee651aa30eba918bdf99d09bcf0b612ff3c558982cb1065e2b951a811a4858be00646f1dcbf9cf87717036f97efba3df1f11966e2e8f8e0061a25bb1e4a8f388e65224b1419d5f8f28e54b01341903c06e56f9ba3f9c86a7e118124b15e789e1d560d0ed0d42f4d428093c8a5496dad9c1c4b9d4c6ce8aa0244ea6e3fef0743f2fe11fa28162991c4659883416fa308e5ccd781c6b61cc813c65667cb5da927aa3d120ec0eff637e1a6b25e30f30d7f2504662d75bc6c960d49deec7c7dc565af4ad3b0df7e38de5cb4a4dd3fe79389976cf2ff6b366b3db87e57bacbe7e6aa03b75331673a1451a89fcf8afb4ba1391ede79365e0df13d1342ad391c89b07e06263a155b6e25aa926649a7e937a8c3884328ff93e035ca2226ea54a017a3581d29055962763f500738572802e963062f3e2770d695a48d85d855a8a32f82ef45a4953c6e2ee3941be8a3f45a13852cb72f79c275b2a6d6187b5b1ebe3b65326adceb688394f8ca8df725a01a65b9a034a9bc469924ac1b8e593562ba0010b831ae027ea74a8dba1ec0b2185eb55dd4e8dee631ec9a4223dcccfcd6b10098868ade81398e8a45ab98ba1299851ec54cadda375772b60d8f5deea7176857b0ca4b3569d72a7548e5b84d4a9776bd49f6a614552095516a9e8be4c2c162f19e75d26508a7de8202598baece0ee7b9e8fddb7cadc5d0fda2e0dc003af5de7825b71c16bd7b9c06a5ce82eb9e5db13a1ac3073a5e332c3a3d794fb1e1b68e0e200a680c0e3d54bfd77c0c040f25618db35c1a7be5b98e0d7b9c0765cf0cbe370fd723bf43620e7422bb8698cc82f194a98fb7ce71cab5c1d8c4027",
      "afaa81220e5feb336951a768dcd35fb36018b50b080000",
    ],
    [
      "ETag",
      "BvdifWwR9HSJhKIIO04nyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "ff1dd04b7282300000d0bb64ad0eca47e84e400441999212289b4c805490540304013bbd7b9d1ee1bd1f408a82f63d16f786dec01b98c9c65815ab5cdaa50fe9f9718ae531cc74e7b21ca3f7b9b9ded1065725d73e756557a38c552e0e2f45764e6c8d856b3baf4fcd6c0fed13a160db5c6fe74615fcf64ce0da1c05f4ca1daff58d7f466b7b96fb8a5b0722f4105a8364c71aed5c07e5d0f115ea51bf9c02a7656dbad4a04825de32b5770783285bad85241e2aeba1403193ee1e6899dc442c3b4e294f5a3732236baf4027f0311bbe46a993f71e5697071d1f8540dbc729645c55be0bb00074e275477b5cbfdcb26a180bf09f80c5cce96bc2a4a4a31df8fd03c168564e23010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:17 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd",
      "2b",
      "91f7b802090408486845345d9120ac21b4daa629b2cd4de636c4d4765a5515ff7d374ee9da4d6a9f62fb9e73cfb91f7922b7a2dc92316122bfab403d7eba918c9c103034c757ef762aa21fd12cf054c2e8e6f2f3ddc3acb89c4c10216a96a6bb7d012d2d2bc5418f37eb76ae64b5a74aca16266a8d5adec077bbaee70ffc20f091a6a1c816a2bc45f26f63f67adce91ca5dbb9947901742f749bcbddcb7be7bedbd92b7903dce8ce5bc50e8ae8cebb9a5f0ac9a911b29c6cd6a85f695029eca828d0c15fe2969dbecddc1674d7ce117c2f3850ce65559ada15a6e0b2cc445e299b958c9f8875f9ea40d6e1229c250e9745b52bd392eee0c4d9524353f3b807e73c5e2d9d7974be8a97d364be8ad2f5ec225c4edbb3d562b38cd6cef54518878ea1ac00cb7526cea9bd457841fd2d68234aab9ed4cfb5f2737fe6ff0fa526a0b48626980edd01f50277c43236e459d0ebb3cc05c60236ecd31e73f9c8077fcb8022cf8a5a162d65092c831eedf2b43ff282d41f7abd9479bc9fba7ee08d5810001d0cc8e1843c2861e04ce8bdd4a2e910b98ee7499826f1269a4d93d09690d1aa30678db1ba80d71e0d1698baae87c077ea3ad4512151ad6ef93c4ac2783a4be6576133e505e4943faeef70ce192d34209a2a6ca001b5945b6c1a89a6cbf00cc1766adf8e414dc63f9f48ddf7dac9abb6bfd0131c626dd9d82f5927f13cfa6aed1c1157b4a82ce4be3910055caa2d7a3efc421c6e6993835c6ec2f83b699e62c84041c93f9e27826de0a37fedb8f908c5dd47156df08ecbc375adc115344b246cad47f67038ea0e89052bf36f2c7007c1b165758e3a23eca034cf05359b8f753662957e016110e71f",
      "d9561dfe001a7697f877040000",
    ],
    [
      "ETag",
      "1kAiNZNC81rTbaUQ+qwClQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "8bf74a34d2b12c43ea0349d32d2a256d42f73255c8b50fe6ce70cc3689a228dfbd67da65d33a89bec0ddf977e2eeef3f07f6533592c5ec4155bf3a30fb7715b85b1facc176da597ab5d858600103c72b22e757b7bb2cbbbc98ee64b6b9dabd3f0bbfd5f3e4fc9c082b7e40cd597c60a5022d2d8bbf1f58c36ba03681baab9ba2cf02e6f6ad2f6ef2f532fb42798dd2e7d95d9a26b374c18ec1a95172c78b9e7f43dbfd31608ff8b086120c3402fc2cadc147106ee9d7b4bc6e358c2c764680653ddc1f5406bb961bc41155469f47e349149e85e368124da711711a05770a1b42ef36341e73e8b85ee38e9664e30f44983ea685cbfeb9a5ba92fd223e5c66f924eae7fb1be04260d7b862102c95b1ee59bcdfe08b08ff929abf11a49b527a08aaa091608628d5165c4a03d60e92680bdeb6276cb65aa5af5569a4412587c1ad1a00b4db9e80cb7495fc4f5af2d71fad2e927cf18ab08e5c7342f2e5f5629327d7379ebb7f31c26cefc0de18245359f07e1a87d1f4e3a749f86cb1397adbd17762673a0898e0f4a77c558ec525d7168e4fa553d7e087030000",
    ],
    [
      "ETag",
      "CKQwNNFD8wdNSKw/20VmCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-10-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "69",
      "6f",
      "a33010fd2bc8fb658f1c90102091a26e36255ba45c05d2aa7b283130a4de024eb1695455f9ef3b40d34395da4fb63cefcd7b339e7920372c8bc880046c7b5b407effe91f0f488380a45b7ced27f19cb3a9982ee87ec9e03c3ffb762ef7c3212258c91234dd25d014bcc843108395d7dae6bcd8d19cf326266a6a6a533374b5a36abaa15b968e3c01493c65d90db2afa5dc8941bb7dd46e6d39df2640774cb4429e3ebdb7ef3aed5dceff412845fbb5641b5544fb7dd193848754329e0d571e1a2804e46b48294bd0c233330abebf4edd62346d6d117cc742a061c88b4c96b63045c8b3986d8bbcca4a060fa4b2f9e2423c7b6a8f7de56b43f146137b3d1e79fee78d9028b051a8503cdf75e63fbf94d7cd7a7dbd4f37cac45dcc944d0e21cf23b1512ecf6cd7568e943f85aa7661a89c280bf7d476951f574fa191376e281b16553765eacc1c5fd195c564e2d9bea2a2d90884645965d5a74102a5cdc76e3a6fffb024504905d4c1b5a91a54b3d47e100766185bdd5e10ab10045660f6683750c3be0e7a1400459e2cb3572c9af12c3262e8005535931a10c5b146bb61107562daefc671dfea99560f4cb36b924383ec7326e194891d17ac6e29b9741ddf5efbee6a3e1ef97655464c8b449ed6e6ca225efa9458e45a553504be53dba18c328e6ae51f3973df764763dfb9b0ebb198c29686f7de2d0e464c130188a6394d41423ee311368e2c179ee33b8bf9688a8ceaaf9747842083df0fcf04ff7e57755a5627f19d99edf9a3d9b2f270045dd0a4a85077f58574706a9b6aa7a9eabed61968dd81a6b77a86f98b1c0e7f9188d35de725e72bdbbd22f5930b31e490851fff2c82abc0874b7adc18c4e2cea00c0e9b643847a12845c21cea79626969e6c836fb86da271538976f6296661c9b56e62833420a997caca8de182cb4162bc41308833806735c188cfe07c820e1e3b1",
      "040000",
    ],
    [
      "ETag",
      "9lfNoiLsLOawPieQrH+Qtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff9d555d4fdb3014fd2b93f7b836b2f39d4a482b50a05b28d096ed614295499cd6e0c499edc210e2bfcf0e90b490752d0f4defbd3ea7b9e7d8d77d04b7b448410f5cd3f9ef25110f9fe7445d98604ce49229a9bf4a5e48023a80283cd748e7fbc922bbfc391cc61e5b8ca7ecfa479fa08bbd3d8d90c982e418f41e4146094b25e8fd7a0405ce89a6d15403d44369e2e1683a381e8c7521e7a9298c2ee3b8bf1f0fc053a726e024e1cb42cd762666544835ab929a38998e87a3e3cd3c863f44d38a29db8d3227454ac46e1c5ace709a0a22e58e3c2e67b82c1bd2fed9593ce88ffe637e910a4ed30f30efe8ae0ca6ee1ac6517cd69f6ec6a758ad6cd1617f3ad88c970ae72b3d4d87a783c9b47f7abe99359b2deef36dacbe7aea801b7e3d261911a4488839fea5e037245143335952bf9d91aee44b9110b3791a5c2dcc055f965870ded5952e825de4bbd086c8f5dd30743590f1042bca0b8dbd9ce8de80e20ab331bfd783050c4054a19eb1ac7ade5565a3c144a88efa3956b8ce0eb82232e322ad2b38792d395fc99faa5d2be179bd7ea48f3823cd0f478e1559b60bf5c7afab4a2cc916891b4616ac335bebed42bb0b57dab6bc1086287422d7f3837010b5803f21bb879c1e722d0381f00b84d53eac1ae135bc3a8aa9687cf8c6178554daddd702bb79a9b8dbb8e03916f24db356d4b4986126ff217c7d29b40dfdbd346fdd8708bac1b30f519b11deba1151ab117e8b1187a4a075324930a38d2fa9ac726faba3e08416729085dcd00adc6d84af2dd9813e49e17b5dfe1b17228422b7cd00bf36a04d79d0a2fc84b079a3f53b2354d6d9e2d6a4fe36c2434f1ffed0d2eabdb05ddb86118081b5b2d1b598604d358241e0b5ab0edeaabe7ab91af61ff41c9f0baeef1949cc1583a0eb3cdf3807dc48d21767cff4d20109d6ffd52754815eb53f4f7f0181e5746f09080000",
    ],
    [
      "ETag",
      "3KHhfUWIIL5lhRTlbVAe1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "1d",
      "d0",
      "dd",
      "96",
      "42",
      "40",
      "00",
      "00",
      "e07799eb74d4d664f68e0e42281ce1c66176fc14c20ca1b3efbe9d7d84ef7b8304634269cc9e0fd2806f30275bb4c6eb941783915f3c2b42a9639a120b3daa8b8b8686e3b6851c5115ad3fec6ab3d6a111ce8d1bd8297b32c73d3b6e98e99876a725d3a2904ffd5751b24ecd02890afe082b1d16c9a189a1b21972bbabfdaa18cdfe357287ccda1be529849be8342f7c2ec84e165d7f5a786d85db533ad2411e2e083d6c5a1962f8e21c53f4a6877f942d59f5777e3db99da528bbc528705e58e82edcabfec2655b0fdd84511bb53d2fa85a53e3c0f4ec33cb31580132b5654f685c7edc5f7b8456e03f2166734b3e1312497ad283df3f6a6f509123010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "fd2b91f738daa44ddaa695aa5195b055a2294b53189ba6c8716e82218d8bed8010ea7fdf8d431908099e62fb9e73cfb91f7922b7bccac884a4bcb8ab413e7eb911293922a06981afae9bcb70b8b2cff9afebaafa9d6dbe5e89ab87e91411bc6129badd95d051a2960cd464b3ee1652d43b2a85e860a24eafd7e90d3da7eff4bca1e7fb1ef21494f919af6e917dadf54e4d6cfba0dd2d84284aa03baeba4c6c5fdeedfbbebd93e2069856f65b491b5594fdb1e8b75230aab9a8a69b351aa815c804b6949768e13f334b8fdfa6ee72baed1608bee70c2863a2ae74630b533051e5bca8a5c94a264fc4d87c7520ebe02c98c7161365bdad928a6ee1c8caa8a6897edc81751aad96d6223c5d45cb59bc5885c97afe2358cebaf3d5d96619aeadcb1f4114589aa62518ae35b58ecd2dc40bea67a034af8c7adc3c37cacf0d5abc1f4b434069056d30193943daf39d719aa72396fbee20cd1d48533f1d0da89b3a6cec8197a5409167440d8b56a2f2f2b1e3f63348fab9d74fbc7400890f6e3f198efba937707c07a84bf647e441720d275ced84e26d87c865b48883248e36e17c1607a6849cd6a53e698d3505bcf6a8b1c0c4717a08fca0ae7d13e502d59a962fc2388866f3787111b4533e8382b2c7f51dce39a7a5024453890dd4209722c3a69170b60c4e106ca6767e082a32f9f3449abe374e5eb5fd851ee3101bcbda7cc93a8e16e17763e780b8a0656d20f7ed8148604266e879ff1771b8a66d0ef273134457a47d8a20070915fb7c9e0836814fffb6c3ea2316971f6594c63b6e0f538d0893d06e1137c51ed8be33ec8d88014bfd2e3672fd43cf9a1c4d46d842a59f2b6a571f0b6dc56af502c2202e40687ab5ff072ec4f4fe7a040000",
    ],
    [
      "ETag",
      "33frN6O/PiXhnnZdU+YoYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93516f9b3010c7bf8bf738a2858d6519521f922cdb9068d226547d982ae4e28339333e6a9b544994efbe336dd369ad445fe0eefc3b71f7f79f03fb23b56031bb95d55d0b66f7ae0277e98315d856394baf06b505163070bc22f26b3216d7efef6777eb74ff21dbb4ba9cedf797676744d8e237d49cc507564a50c2b2f8d781695e03b515a8da5ae75d1630b76b7c719dad92c50fca6b143e5f5ca5e9649aced93138350aee78def16f68bb39066c83b72b28c1802ec0cfd218dc40e112bfa6e575a36060b1350558d6c1dd4165b06db8411c506510868370140d3f0ec368148dc711810a0bee246a62afd6341f73e8b85ae13d6dc9c24f44982ea68dcbeeb9a5ba14dd263e4c16d928ea06fc17e04581ad76792f584a63dd837a4fe0a30aff938abf11a4ab92aa0faa400b307d946c722e84016b7b49b4396f9a13365d2ed397aa6861508a7e702b7b00e5b627e07bba9cbc262d19ec59ab6f936cfe82b08e6c7342b2e47cbece26e7179ebb7934c274e7c05e18245759f0860a87d1f8f397d1f0c16333f4bea3efc4ceb410b082d3aff2533a16975c5938fe05ddcb682f88030000",
    ],
    [
      "ETag",
      "9I8dW+wCqSLz/TjunfCzzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-12-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
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
      "4fdb3014fd2b91f7659b68eb34e953aa5857d22d5b5f242e0cb6a9751ca71892b8c40ea842fdefbb49283021c1a758b9e7dc73eeeb01dd8834447d1488cd6dceb3dd876b19a023c435ddc0dfebdbde489daacb5feac7992376579370d1fe793f180042142c45936dcc6b4ae619e3aabff4eb9b4ce65b9a4959834435b35933db366e62d36edbddae0d3cc5e36822d21b605f69bd55fd46e3a05ddf48b98939dd0a55673279fadfb86b36b699bce64cabc6ff920d50518db7458f63c9a816321d2c7d30902b9ead7842450c169e9961f0e5ffd4754193fa06c0778271ca98cc535dd882144ca691d8e4599915f51f5069f3c503f9cec41911e3f391e10fc7ce6a34f4c9c7b5d220b036a8327ce2b9b36f9f8ae77ab5baba4fd6c6d89b4f8d75c699cc42b536cebf3b9e631c287f728c2d3e308e8db977e278c6d78ba7d0d01f1d196b11962f63e24e5d62d8c67c3cf61d6260301b72a5455a5a2534887961f3b19beeeb191604aaa9e25570d5c16d6a76712f88820e8bba562b88300f826ed069512bc0ac67733b0c38059e2eb2972c9aca34e43da075da26e65688238bb24e076642ad168becae6ddbcd9665597684f647e83e139a9f08b5954a542d45e79e4b9c15f196b3d19038651911cd637d52992b8a78e95343912b8c4d00be51dbbe880a096ac58cdc1971bce188b8674eb51613bea16ce7dfc2624434561cd034a309d73c9bca101a871673df25ee7c369c00a39cf5e28050a8fffbe1994076dbb2d3bafc22e24e1d9f0ca78bd2c3017446e3bc44dd550fd4840ed570b3863bc46cf64dab6fda758cf125daefff0211b6bbca8b4e978e7781aa5f1e8f78c653f6fe64015c06de3dd2c3c500166e066460d9b4803d62aa106119aff64924859903bb6bdab88d4a70a65fc55a76efd0b422479191273cd58f15551703855662b97a024110d660060703d17f75428e7bb1040000",
    ],
    [
      "ETag",
      "jq9CsQsZXsJVEiyhLdP6Kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "6f",
      "da",
      "30",
      "10",
      "c6",
      "bf",
      "cae4bd1c4471fe9120551ab429654b694be99b4d1532c911dc9a98d90e1dadfadde76453026bc6a06fc0cff91e71bf3bdbbca0479a25a88b6634fd9183d87c4c41dd148b31c89c29a9bf563c93805a08144975a6bdcc9f9fa3ebc5b7f3a741b4f9b2bea43f06f39b93139d21e3052c09eabea039059648d4fdfe8232b2046da3894e509b55b11e8e26e1201cebc092274560741745bd7e14a2d756652071ccf34c4d8f36cea9906a5a8aca783b190f4783fd3e46de65d3c4941d6749214b401ce7a1ab29491201521ee9e3724a56abdad4bfba8ac2dee83fcdcf12c169f20ee79a1eeb606a5d3bcea3abde647f7e42d4d688ce7a93707fbe5464b955d3647819de4e7a97d7fb5dd3e9e2697948abef5f5be881cfc6300701590cc5f15f09fe00b11a16374bea5f67d0963c173114c3d3c9e5462a78be2282f3b68eb4b1d5c69e635a26763cc7f71d9dc8784c14e599cebdbbd5b521c5156163fea42f162a1244b9d4776c5e7eae75b85332142bab5a5d004b49a5be32a0b2528bc7427a9fe16759a611f365b577ae8f36834afaae6139bee11bd8f5aba012391c201cb363986e5d9be66c9b56dbaccbc586eb63b3d37103270c1a123f60ab8bed2e763e9966d9f46d6abf817a0042d1ba82d37c4695aa641a97ba730838b66cc3725d03dba6ee40159e1326e11f6a07de77b0e134c0fbbbf0d8b38366787f2f7cd0001fe582016495eeeba3028c559acd7e07fc43f82d1beb9907866e81633723eeeb85a7db673b6fa9825d7ccb35ed66fc602f3e362b475ddc19176ab1a9e4502a5e3723a1850c0e41778a338f0dcf31f4740e99f5ee961598866bbf21da2ab944b76dafd3888ecdbfd1efffbc02fd8d02792db87e",
      "522424651bf46ccac7e5941754fa8dec1695b5504cf4dff20555a85b16f7fa0b82790193f4070000",
    ],
    [
      "ETag",
      "3muzzLPhZFwGLyJvMiqGfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ffedd34b7282300000d0bb64ad4efc44a03ba13250098d8e88ba6110224181404025717af73abd467d77784f1027096ddba8e3575a810f20e389314a4627b8d8dfa1dafabb4eb7af32c9e78daee9c81385aaca494c34222b51ee085402aa46987c762a0eb961d100b330b5fd31834ee8b6cc0948c0b315ee6db547ce2db4ce8868b04a75641f4aee12f761db71e687dfad508a2dddce6343135d83e5aaf7cb4deaae05b6304ea7a6f47abf368f0d3ece89567f06adb649d6b3fbc2fba27c7ae3e735d4c2fa26a992f3bdeb98248df805b2f1a6decd8aa270b6abe2920d11ce0e0d3b95d6f2317a7bfb77c000d0bece056da3fcb57d8a0c6300feea479dace9ebbf49634105f8f90569ee65dd19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b6f9b3014fd2bc8fbb82681843ca5688d12ba464bc806a455354dc8980b734b706a9b4e5995ffbe8b69ba5695da4fd8bee7dc73ee834772c7cb944c48c2f3fb0ae4e1d3ad48c819014d737cfd4c6ff4e1dbb7b03c2caade457af9f7ea7251cda65344f09aa5e86e5f404b894a3250936dd8cea5a8f6540ad1c2442da7d77206aeddb51d77e08e462ef21414d98a9777c8feadf55e4d3a9d93763b17222f80eeb96a33b17b7eef3c743b7b296e8169d5792dd94115d5795ff44b2118d55c94d36d88062a0532861de5055af8cf4c93f3d7a9db9ceeda39821f3803ca98a84a5ddbc2144c9419cf2b69b292c92331365f1c48e8adbc7964315154bb322ee90eceac946a1aebc31eac8b60b3b696fec52658cfa2e5c68fc3f9a5b79eb5e79bd576ed87d6f5a5177896a64901866b4dad7373f3f182fa2928cd4ba31ed5cfb5f25383966fc75213505a41138c87f6803a237b9c64c99065a35e3fc96c48925132ecd35e62b3b10b6e9a00459e11352c5a8a92829d392c83d8e9531abb30e8c6b43b1ec46e928ca13b4cc7ee9091e319f923b98605577ba178d321721d2c232f8e82ad3f9f459e2921a355a1178db1ba80971e351618dbb683c077ea3ad6512e50ad6ef9d28fbc60368f96575e33e515e4941dc27b9c73460b0588a6121ba841ae458a4d23fe6ced2d106ca6f6fd145464f2f391d47daf9dbc68fb333dc221d696b5f992300a96fe5763e784b8a24565200fcd81486042a6e8f9f80b71b8a64d0ef263eb0537a4790a20030925fb789e0836810fffb6d3ea2316971f6594c63b6e0f53b50893d06c1137c59ed8a3aed31f130396fa4dac3b1c9e7a56e7a833c20e4afd5451b3fa58682356a967100671017cd3abe33f5dc87c1c7a040000",
    ],
    [
      "ETag",
      "+aYtyKKSnyDu3FdHzVHDuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93616fd3301086ff8bf9482a9a352b55a47d68a140a5acdd9a4c424253e4d997d4c3f105db29aaaafe77ced9288821655f92bbf373caddeb3747f65d19c952f6a0ea1f1dd8c39b1afc6d08b6e03aed1dbd5a340e58c4c0f39ac864b27359f57597d7ef76976f2fcc1a73d5d457574438b18386b3f4c82a055a3a967e3b32c31ba03681ba6b4cd96711f3873614f362bb5a7fa6bc4119f2f55d96cd17d9929da273a3e49e973dff8ab6fb53c41ef1610b15583002c22cadc547107e15d674bc69358c1c765680633ddc1fd416bb965bc4115546f164144f93f1c5384ea6c96c9610a85170afd0107b97d37ccca3e77a8b3f694b164f88b07d4c1b57fd734f7525fb4d42b85a17d3a41ff06f800b819df1e5205829ebfc937abfc16715fe25357f254857a5f410548391608728d5965c4a0bce0d92e84adeb6676cb1d9642f5531d2a292c3e05e0d00daefcfc0a76c33ff9fb464b03f5a7d9c17cb1784f3649b3352acae977931bfbe09dcfdb31116070feec622b9ca4130543c4e6697efa7e3278f7dc0e03bfa4eea6d0711139c7e952fcab3b4e2dac1e9176c7c3add88030000",
    ],
    [
      "ETag",
      "43hsLfXhSg/h5+2nNoSimg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-14-1640201464884",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "a553db6e9b4010fd95d5f6a5ad7c011b1b63294a1d07b7488e9d024e14b5955996856c02acb3bb248aa2fc7b07887351a4e6a14fac66ce9973669879c0d7bc4cf014c73cbba998bcff742562dcc14c930ca2d78e2c1747e5382357cee674ac9681696fee0e0e00c16b9622c52e675d252a49999a6e825e2645b52352882e14ea9a56d71c5bc6c030adb1359958c0532c4f97bcbc06f6a5d63b35edf7f7dabd4c882c6764c7558f8ae239debf1df477525c31aa55ffad641f5454ffdfa287b9a04473511e6c0230502926b7ac203c070b2fcc24fef6b6748f93a29701f8965346281555a96b5b50828a32e559259baa78fa801b9baf1e387097ee3c445f3b28982ddced7c16849f23a541204244a120f4bdd5f72ff533da6e2fef8a082dfcf5098a24a342262a42e73f5cdf4528e249847e57863164e810cd56c7af4314426bffd8f5d1d105da579f05f34e8b81175a7a275e884cc340ebc52270436480fd8429cdcbc67c48e29cd5c69fe6ebbdffab358168a2589bdcdac6989813c389d3d8a6e964388a5383c5f124b64764181bd4b19895c48c004fd7d51b16294569327b9098312123d3b6ed74c28c91e30c9d713c8c139a8e864393c5a93d48f16307df49aed931573ba1783b647cee7ba1bb0dfdcd6a3e0bdda68d9454b93e6ecdd54dbcf6a9a1c9ad619800fc476f8f75960b50abff9ab70a5d7f360fbd33b75d9425cb08bd0f6e605552922b06682249c13493272281c1e1d375e085de7a355b02a3f9fba77b84c2d35f0f2f84f07ed74c5a37df5a6b6c35fa7bc019c9ab0671db3e30a41f3bff55c1860a7f000167d192f1cf8deb5fe036e4b3944956d28f1700c04de2c3ebde9f1a60e1d84006b652735837aa6a112a59bb76bca8cdecd993a13170700396fa5dce1c59fbd9d635ea8aac60a57eeaa83db57a544daa52cf2048c2b6ace0d220fb177bd8d66dea040000",
    ],
    [
      "ETag",
      "k9rnFBn6gaj9UP6sLS17Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1640201464884"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff9d545d6fda3014fd2b93f738c862704212a9d2604d1955f828a4eac35445263160e6c4996de810e2bfcfc968601b63d097e47e9ce3dc7b7c6fb6e01bcd12e081299d7f5f11b1793f27eaa130c644ae9892fa95f34c12500344e1b9463ea1c5f4de44366df5d7e2290dbb161e7d7cb8b9d108192f488a81b705334a582281f7750b329c124da38906a84d5ed8bd41e877fdb10ea43c290283c7206877021fec6a1501c7315f652aba9a38a342aaa8742ae2241cf706ddf33c86df44d31d53761d654eb28488eb38348f70920822e5953c2e239ce7075267380cfcf6e03fe26789e0347903734daf6530b53e30ee82613b3c8f4fb03abaa2db76e89fc74b85d3a39ac25edf9f84edfee83c2b8a162fe925523fef6a60c9a763322382643129c63f177c4962d52b364beaaf3352977c2562525c9e069789b9e0ab1c0bceeb3a5287a80e6d64364c886ce4384803198fb1a23cd3d8c789ae0d28ae301bf317bd58a0a101a234f58ecdcae75a87adb287750978b5022a70e5dcf34526953ef435c096fb08fa447e94b51a314fabf49d9e6f462ad76a1ad08686e518ae5b056798c903448915f947ca6914f44389baddbad9a89b87aa8ba34dd7442d175976cb717df704fa1d6c78b0e941649418f3836996f7702c847d42885b92d1ca99c498d1832e892c7deb121160d33160131a1039460b5dd2f86fa946ab69b8cedf7dd97fa8e042e8a25302d89500fbce9ff7b3d1d928224782eb4193a4983168a2e6af91fbcc8baef4e678452d351063fdb3fe4215f0ca4a773f0150e936e50a060000",
    ],
    [
      "ETag",
      "W4hbJ046i7MvrWmTG5aP/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
