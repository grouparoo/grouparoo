const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1595636454214";

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
      "d07fe9b39848c1c2dea043b174289045e48514ace3e2a0dc2fcbfe7d66e70fce0f6069cabb2eeeeb9257e00d2c4cd6b7e9d6a93573e73dc2d5832eafe353f3080796649a54dd49159676b1d896c78d89d611d5bf03e8195927e33d769d8ede662465b67a0dc504c7a3c0b0b17d2910a3425813a9e8991663645efcc4619a9fbfdf0b46ca419f3c951e9535f1b5e47495159e3c2f955c7d24f3173ae0943a372a9dc9d8cba93c1ed481a058137d8b99d1c770705675b7779bcf86b90126163a67018216d8003e8bbce55d9cbf6650d5f50df86fc6fd22f8eb6a72d6f216fcfe0167e1b11d05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:20:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-1-1595636454214",
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
      "8d545d6f9b30147dcfaf40ecb509249092548ad62ca52d52425620adaa6942c618ea96608a4db7b6ca7f9f6d924096aadb1bdc7bcfb9e77ef8be7714457dc279ac9e296a84d3e70a95af5f1e49a49e080f6220159e95f6766f3fbc3957764cac7e0abefd5e427c3399d45158a229581719ea52529510d1b395df4b4b5215a024a4cb09bbfd6e7f381e9e1aa7e6d01cf4cd1a4a5196cc71fe24081e182be899a6ed64f45242d20c8102d31e24ebbd5d7b196845491e1164543bccaaf14454fb34efd78c40c030c9272bbfd650515486680d70265434e0383a3f64ef61b0eea53cfa054304202455ce84b29a06923cc169554a72cef4ce8ddc2c25ef7f5b06d5b7e7f62c5020c9aa751ee6608d4e94183010b2d7022997de72a138eee5d25b4c0367e986feecda5e4c7bb3e57cb5707de5eedaf66c8581284312ab4c9473f9e7f21fa948668b116538979a02e16d29e1de6d1b9d0f06b8a710245c1545dbb0d0d24f417fa48fa324b26032328651a2a3281a45d61018910ec72632e3088136835456e3414e72706a8dcd511287001a666846601c8e8d6810ea866e0d90391ae886a16ed19b7d2dbf4accd005a605a178db64f5ce73023b0cbc953b9b0676bbee045419bba8951f567d500ee30d6a2bfdac25478a8a12132e4a8ed37103db9bce02e7b62583efd61ca500befacf62bb129051d4a041c967c550b920b1188cea4e17f64503969bf27d174479c48fbdcea61c1e28e62f6b399aff619e802fd6412bead9d456d50f3cc7bd525bcecdc734b720ab3ee079d99a450b139c35fd92549dbfbf7e765a2954fe52b7ead49b95eddd0bacf4098f871254a21c3649ff637305b076fffb0ef1e8dd5990e7ce6fd253c6cdfc0d41da248725aa5f14aefbbe271cebe66047c881253b8e302c6b1771741a442eb44639dbb5a23e11751f370792aa961c0913e1fc15b8db116e3a9bce1fe25e9f5bdd050000",
    ],
    [
      "ETag",
      "U/zYEhzIGEdo71gaBxOciQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:20:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1595636454214"
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
      "ffc595516fda3010c7dff32990fb0a52d306b64eea03acaccb944209612f134226be646e9d38b31d2a56f1dd673ba1e4a555a421e525f6ddffce3fe54ef6bd3abd1e7aa639415f7a684bd33f2588fd450a6a613621c89229a99782e71250df4483c2a989f6f73feed22074b73fafc39bc5fddfd5f35c848bdbdb2a4ac6bf21c33aee555bda4e283022b5fdcbdabdda6fb51c67604e8c392bb37c63cdfe4956fbc2cacb28f467f74d25e3c42ab355108c27c114d5d2a1ff3e84608537f6c8ff43d875edd430f4c4b7212420208fe1f4d785e04f102bdf9657e2ac603090bc1431c81a62122b3915bc2cb0e07ca05d0377e00e6f86a3eb9137f4ae5cef18cd788c15e5b949582dd11b5e718559c85f4c85917b55f540547655f1632950d26842b3425ada996c4ad09befd0ff20d09f4523af115befd64e23b33535a142aaaaf5ede875abce8467b84bbabe299475424e2127203a41d362830911206537782e37b8285ab227f379702e32ce89e0947444dfd12ea84ced5a52bf05f3f119df15fddcb7bdd377e3687a2eac54fab16fc98dfc87e9321a3f3cbe0bd7dff5e9999fec15c847c1f510916047877be97d1e7e1a5da2e328facacda851661229518275c7588fe4ef54695f829904e7e0fc03533ad263fe070000",
    ],
    [
      "ETag",
      "IyJDgLR1bV3R9QGzUkOrRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-2-1595636454214",
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
      "546d6fda3010feceaf88b2af85bc90845209758ca65d24a02d8456d33481632ea9db244e6da75355f1df6727bc84b5eaf68ddcddf372773ede5a9aa63f917cad9f697a4492e712d8eb97471ae9272a0302252a73d94fc64eeffeea61344d0debdb6d668af9783818d455a44273941529b4392d19067eb698771246cb02314adb92b06db72db7ef7a5dcf711ddb726a2887341e93fc49113c0851f033c3d8d9e824942629a082f00ea6d93e6ebcd846c1e82360c18d6355430a71e353ddf394622408cd078b79eda1e4c0969021922a1707f03afa7accde2128eb24b2fa85604018d33217ca594d83691e93a46415b9647a934119ae2cef3f1b017dee8ffd51a8ad62c2b858e628839586b8b65c32e0652ab4cbd9f5445bc94e6392025f69f7dffd99afadc87aa50db4736d1c4c8250b32af18a780d5c90bc920f519442435466b7130b3ed8d59e42912081386ccb963dd343d6a9d98fe2a887e3d3ae1bc52644d169d47351373271df01671d016a3208a55de3514e732c11dd086cbcc69eeb46bdd8745c1b6ce8c756640242b603b6675ba6be65d8ecfbf9cd88800bc20bcac976a6fafd2c08fd65385b4c47c3d06ff61e2339b38bdafd71e7472d0939a4a6dbcfc6f2ce51c10895a6aaed05d3d09f0d476170d7b0219fd21812845fe7cfea31c528e570402326772c804de85a2d47bfb99e0761703d1d8e0f0cd5ebb8d9557259f6736ff6d053932d7c2d8e575d6fa18e2a9b9ea337729b930f59ee505a7e40f3b20debd61147ebef5fbf5a0d6e5d9eddd6957ebbf0673f14b6caa9cc0c626090e383da7fbc4d05acd3fffe5391d5bb1b570079e67b792e64585e09e60771cca0be1992d59d6e093dab6bf5768412c8c4fb0acfdcdddffb3b575a90412e76a3a8efbd9ee3e6c852d9b053c154b97ce3d3607a55996f6d5a7f00712ccc83aa050000",
    ],
    [
      "ETag",
      "F9gL47WGhCNl/1BQm0tSLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1595636454214"
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
      "000002ff4d514d6f824010bdf32bc8f65ad260c5a44d3c686b5a13632aeac11863161ce85a60e8ee60430cffbdbb0b7e5cd87defcdeccc7b9c1dd7653fa238b057974522fdad40d60f29d0c25c425055464a1f25160ad8a3a906e2a9a97eaf472bdfc74df4b49c148462739a2e9274386cab54fc0d39d775678d344e046407a5f1d662b7e3ad56f01ccc8bfbbdb403ed0b9d467569b5e52a9cce3fee951c0f5699af67b3d17836619dd4d873a7bf8ddde488510809482862b8ed534a3c424c536b5cf1bcccc05358c9185437c434b6722ab12ab944f434e5f53c3f780906cf837ed0eff9fd4b75863127818569582fd9753c21f12cc43fe39df96d38b2856d149720587297ce7d3e5a3a99e68914c0ae6cd3dd76ce05ed6ef3c63581fa92a8dd28b01efca0ddd4b87a4363974c1a242bb074ccf50ffb14a4b984670a9cc6f907a2ed48f51c020000",
    ],
    [
      "ETag",
      "DyAT11oYb/SEntoiYvIQfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d07fe9b39815a683bdd140002f6cc200f1859452a4614ad7965030fbf7999d3f380f8009a152566ae8e91dbc83199bce9aacf7838de0892abf128989fd40e7d916127dbee75ebfe032eec36b3d4f6627591e7eca37442ca3fbd9154bbc6d054fada311046e6db661992b061b129f988f1b26b3608ca3e4e57bd732e6719474e86011eff81596345beab94cf7b0f3586b2f555f5c92a660d1472ccc737adbd48322ea44a19bea8c930efa799168c1c6f110a5c5ab7bbdd4e38ddbb386463419369ac40456806ace0495157bceac8de3acc07fb35233a7cf2ba25850017eff00f6f9f56505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-3-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6f9b3010fe9e5f81d8d7e61d4252295aa384ae911ab20169954d1332e6a0ee08a6d8748aaafcf7d9262f64a9ba7d41f8ee9ee79ebbb3efada169fa2f9245fab5a687247929a1d87e7aa6a17e253dc051223d77dfc15b5b643b99ae237746d6f10a0f9f26e3711545149aa14d9e4293d1b2c0c0ae575e2b296899a382d2a6206cf69b5d73640efa03c3347a5da3823248e37b92fd92044f9ce7ecbadd3ec86825942629a09cb016a69ba3bdfdda6be7057d06cc59fb3c6b5b2462ed0ff37e4e29469cd06cbcf22a0d258322800d22a954710247e1cd397b8ba04d2b11d1af0403c298961997ca2a1a4cb3982465a1c805d39b300ab3927c3cd60cba67dfdb535fc3342d375990a10d5c6911e228e0db1cb45b77b9d0e6ceedd25d4cfcf9d209bce99dbd98b4a6cbfbd5c2f1b4c73bdbb5358ec21414561b6b37eae4888352a4b245c038c994265f7a6b4a8477dfc6f93b033c524812a18ac13e2cb03a03d41d7646611c5a381ef6cd30ee40180e43cb44fdb0834706185108a8cea094557894d12c32c10a0db002b367f402a32f3e2363d4092cb3d319747bbd6edf8cf53d7a77ace5774138cc08cb2923fb26eb8feedcb703df5d39d3896fd7eb8e5199f259a5fcbceab372b868505de9472db9509417840a516a9c73c7b7ddc9d49f3fd46488bb750f09c25bef45deae18a50c4e68548859712816349283d19dc9c29e9dc0eaa67c3d043111f1e3a8f3548e0894f357b55cccff3c8f2f2ed6592baad95456ddf3ddb9f345af3977efd33ca0b47c87e7756f962d8c497aea97a26afcfdf7b3514ba18b97ba57a77f5bd9ee5a62954f7a5c88a1800c9f92fec7cd95c0cafdef3d24a20f6b4102c46638a6675c98c51bc2ec941c1750bd2852f5fd4038e80dac23a10016fc326238340f1117ab41e6820d64fcd08a6a45547ddc9d492a6b72144c868b57e0ec47b86bec1a7f004524aae9dd050000",
    ],
    [
      "ETag",
      "HZeSY7iyACYdRDiYfUc8hA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc595c16ee2301086ef790ae4bd82544aa0b0520fa1a5dba8297421ddcb0a21379ea4ee3a716a3b54b4e2ddd77642c9a5ab488b944bec997fc69f32237b3e9c4e07fda11941df3be88926af0588ddb704d44fb359822c98927ac9792601754d34289c98e8b7f1e4fdeaf996e25f739f8c2fc46032be4bbdcbcb324a46cf90621df7a12d6dc7141891dafe6ded4ee5b75a86533027469c1569b6b166f728ab5d6ee555b8f4e73fea4aca8955e68f41e04d8319aaa47df76b08c10a6fec91ff87b0ebdaa960e8853f2d2106015904c7bfce057f8148f9b6bc12a739839ee485884056109358ca89e0458e05e73dedea0d7afde164381a8cdca17bde770fd18c4758519e9984c715fac42bae305bf2375361d43f2f7b204abbacf8a11428ae35a15e212d6d4d3625e8d3b7effe23d09f8723b7165bedd64e2db33135a642aab2f5cde855ab4e8467b84dbabe2994b5424e2023205a41d37c83091120653b782e3738cf1bb2a78b45702a32ce88e094b444dfd236a84c6d1b526f828577c277453ff74deff4b517ce4e85954a3ff60db9a17f3f5b85defdc39770fd5d1f9ff9e94e817c105c0f11097674f4cfdcf1f06274860ea3e88a9b51a3cc2452a200eb8eb01ec9b754695f8c990467effc05ade6617bfe070000",
    ],
    [
      "ETag",
      "w89zChHiaVNId87r398KmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-4-1595636454214",
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
      "6fda3010feceaf88b28f2baf09012aa10ed1b48b04b485d0aa9a26b09d4be636c4a9ed305515ff7d76c24bb256ddbe91bb7b5eeecec75bcd30cc679a04e6b961621abd64c05fbf3c316c9ee90c4814e9ccb5ed8fedafd62cf2fcbbab91e83c6648d268382caa688e166893c650172ce304c4f972d18838cb52c419ab2bc2ba5d6f77075dc772ecaedd69db0554401c4e68f2ac097e49998af366f360a3113116c580522a1a846d8ef1e6b6d34c397b022245b3aada5442a2f9a9ee45cc8832cf92e1725178c804f0156c108db58b1338c0dfaaec0d8a368d48556f29014408cb12a99d15348425218d329e932ba6371554e1dcf2f1b3143017eec41dfbc63a96dbb58184b15a7110592c8dabf9cdd458ab16431a83581b0fdfddb96bac69b03686c68531f1a69e6fb473d59c3100216992ebfa08c7505253d9fda8bc0f9674a4d024482201fbb255afe5a076bf35c021ee91b06f7571d8028cfbb8d745166e91810d7680019519a4d62ef02861490bf77b4e105a1d827168771c473120b0428b844e6760756c875830208eb967d81dfbf9cda9844b2a5226e87e98e6c3dcf3dd953f5fcec623df2df71e2235b3cbc27db5f34a4b520da9ecf6b3b1bc739472ca94a97c6ddecc77e7a3b1efdd976ca83734810891d7c58b7e45218a059cd088a30d48e05316e8e598b7370bcff76e66a3c989217f16b7874aa1ca7e1ccd9e7a2ab3f9af6975d5c5168aa8b6e9d86629b73bfb90e51ec5d90734db7dd86c57386a7ffffa592b719beadef6aeccbba53b7fd4d83ca73373088143424e6afff13635b048fffbdf44551f8e5b03d47d1fe58554617525449cc40987e266e8a6e8744fe8749db6732054402edf57f40687fb7b7fe05a0b3690c8c3288a432fe6b8ab58ca4a7672982e576f7ce6cdae73f3b55ded0f2b32a21ba305",
      "0000",
    ],
    [
      "ETag",
      "G4TC4+3NgITQFAs2Yuatig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1595636454214"
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
      "90ee756c43c1c5253ee89cd912f6216af6b01853f1c270c0c5b64c99e1bfaf2da0beb43de7dcdbdb737a344c93fcc4d9863c98641d47bb025879158198aa830fbc4804975b8e190772adaa41d048551ffc79775a8e0fb3ddeddf78f27a1f7c463e4c0783ba8a07df905259779448e2308664c325fed2d86c78ad65340575e36ac5f4407d43a38932d7dac47b1fce2f8514375a785b78de70e43d9146aaf4be946ba51fb2c5b50f2130c802383f2767b88540bc68df9ca6790216c78205c09b21aab1962386454e19a22529cbb16cb7eff6ba3dc7753ab6d3562718501163a61a1633721a2f50d0c4c7bdb24eec3a1b56c33a893607125e8473198f947e5573c7eddfd81d72e2abe6b4345ab43c4f1c9502f80743e987837661f7ee481bc8232ac342e52158019a0ea8fcb1e758482ea40907a332fe016cd24d6d1d020000",
    ],
    [
      "ETag",
      "xRT3QyDxSq/zDFM7cWgReQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfc97282300000d07fc9d93a65d3d29b5065911d15c925032182a3010a095ba7ff5ea7ef0fde0fc830267d8f58f32035f8047326aa6bbc3e361f9a10120d6d0667e9df1e8a7013c6397e1f3d2e73a4dbdf7b5895907eb9ce10e4199da23a45b720b0a333cd82a16e5529afa90e4f0c7358ea86a818d225dcedbcd29213b70ef9646f529533195644f5214e16166b66aea532f13b85577c89342534e2ade36d69752c5233999504f3033b79c501466ee33ff79670b93ec3b35947d2e857037563272dac48a4d702950d062b40a6f6de911edd5f334951d515f86f2236b7e475d548d6910efcfe014dfecbc105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-5-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d546d6fa24010feeeaf20dcd72a5a45b489b91a4b5b13c51e607b97cb852ccbc06d8b2c6597364de37fbfdd4505cfa677df60669e679e79d9796f699afe44b248bfd0f49024cf25146f5f1e69a89f490f709448cf9a0e09b989dda5793d725677b3ef4648cad7c9a48a220acdd0264fa1cd68596060176baf9314b4cc5141695b10b6cd76cf1c9bc3fe70600ece7b830aca208d17247b9204bf39cfd98561ec6574124a9314504e5807d3cdc16ebc9c1b79411f0173661c67354422667c9af76b4a31e2846693b55769281914016c1049a58a1a1c8597c7ec1d82369d4444bf100c08635a665c2aab6830cd6292948522174cefc228cc4af2e1b761d03d7b61cf7c0dd3b4dc6441863670a64588a380bfe5a05dbbaba53677ae57ee72eacf574ee0cd6eede5b4335b2dd64bc7d31e6e6dd7d6380a5350586da25daa3f47fc28452a5b048c934c69f2a5b7a14478776d9c7f30c003852411aa18ecc202ab3b44bd51771cc6a185e351df0ce32e84e128b44cd40fbb783c804114026a322865151e65348ba037b642d30aac1e0e8381658e82516fdc0de2213e8f7a78804710eb3bf4f650cb6b41385c11965346764dd61fdcb96f07bebb766653df6ed61da332e55795f2e3aa8fcae1a2414da59fb5e444515e102a44a971ce1ddf76a7337f7edf9021766b0109c26fdeb3dcae18a50c6a342ac4ac38144b1ac9c1e8ce74695fd560b52977fb2026227e1e74d6e58840397f55cbc9fc8ff3f862b18e5a51cda6b2ea9eefce9d1bbde1dc7e4c738fd2f2039e979d59b6302669dd2f45d5fafbeb57ab9142172f75a74effb6b6dd1f12ab7cd2e3420c0564b84efa1f9b2b8195fbdf774844efcf823a775e9d9e7161166f08b33a392ea07a51a4eafb9e703834cd03a10016fc34c2ea8ff71127a741e6820d647cdf8aea44547ddc1e492a1b72144c868b57e0ec46b86d6d5b7f004d1c76c2dd050000",
    ],
    [
      "ETag",
      "Uo6iiGfRM5F8NOPCX/biuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc595df6f9b3010c7dff92b22ef35914a0bd90fa90f499b7691684809d5a64e51e4e283b93398d9265554e57f9f6d48c34b2ba445e205fbee7be78fb8937dafce6080fed082a06f03f444b3bf1588dda70cd4bdd944202ba6a45e4a5e484043130d0a67267a7973ff7315ee6ef338cad9e30fe68717959b5d5ed65132f90d39d671afdad2764a8111a9ed5fd61e347eab1538077362c25995171b6b0e8fb2da95565ec5d17c71db56724eacb2780882c93498a146da0fdf8710acf0c61ef97f08bbae9d06869ef953042908281238fe7529f833246a6ecb2b715e3218495e890464033189b59c095e9558703ed2ae913f72fdaffef862ecf9deb9eb1da2194fb0a2bc30090f2bf486575c6116f1175361e49ed73d10b55d57fc500a94b69ad0ae9096b6269b12f4e6db0f3f089c2fe2b1d78a6d766ba795d9999a522155ddfa6ef4a65527c233dc275ddf14ca7a2167501010bda069b9c1840890b21f3c971b5c961dd9d3300c4e45c605119c929ee85bda0795a96d47ea4d104e4ef8aee8e7beeb9dbe9ec4b35361a5d28f7d476e3cbf9bade2c9ddf25db8feae8fcffc74a7402e05d74344821d1dee99f7c5ff3c3e43875174c5cda85166122951817527588fe4ef54695f8a990467effc030590dc08fe070000",
    ],
    [
      "ETag",
      "PFQXSOyGmTRmlZWl5O3u1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-6-1595636454214",
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
      "ff8d54ef6fda3010fdce5f11655f0b249484500975a8645b26a05d0854d334816d2e99db10a7b6c35455fcefb3137e84b5eaf68ddcbd7befdd9d8f978661988f345b9b57868969f254007ffef0c0b079a1332051a23341988d16dbafc3ad70a69dc41af9115df8c3c1a042d1b25aa04d9e4253b082131057f3592be1acc81167aca9089b6ed376fa8e7be9769d6ec7ee56a502d2784cb3474df04bca5c5cb5db071bad84b124059453d1226c738cb7b79d76ced9031029dae7aa6d2524daefea5ea78c2049593698cf2a0f8500be840da2a976712a5ee38fe7ec2d8a36ad44a1b7940022841599d4ce2a1ac2b29826052fc915d38b0aaa7069f9f8590b98337fecdf44c68a32b14479be329030964b0ea248a5f129bc9d182bd5664c53102be3fe8b1ffa0abb5e1903e3da1807932032ec52b9645d8390342bb5238453a829aaec7e5cc11b8b3a5268122491803d6cd9b35c647b561fc7b84762efd2c1b105187bb8e7a04b6c917e17ba6b0ca8ce20b576558f3296d9e0c55d6fddebdbb8ef78d021716c751c0bf5e31ec1b6eda23e761db088b967d81dfbf9cda98411153913743f50f33e0c227f1985f3e9cd30f2ebbdc748cd6c54b93feffcac25a9865477fbde585e39ca3965ca54b9ba601af9e1f0260a16351bea1d8d2141e479f6a45f528c5201a76ac4d10624f0095bebe59877b7b3200a6ea7c3f189a17c1a7707a450b01f47b3a79eea6cd1737ebeea6a0b5554db74bb662db7bb78936581d2e20d9aed3e6cda671c8dbf7ffd6cd4b84d75737b57e6b7b91f7ed7b5654e6742888143464e6afff136756195fef73f8a421f0e5c17a81b3fca0ba9c2ea4a883889130ed5cdd04dd5e99ed0ed39de91501572f91ae139d601f1eac8b5166c2093875154c75ecd717766a9a8d929cb345cbdf16930fd5c9a6fec1a7f00f224fb5fa7050000",
    ],
    [
      "ETag",
      "IRnDVvJAvs5N2g0DETiVEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1595636454214"
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
      "4f",
      "83",
      "40",
      "14",
      "bc",
      "f3",
      "2b",
      "c87a54a22834a9490fad69a291b4b54de3c190660b0f048187bb0f4d6df8efee2ed0f6c2eeccbc8f9de168d936fbcaaa983dda6c9fa5df0d88c3550af4a62f6b904d41521d355612d88dae06e2a9ae2ee33a7797b77ff8eabf535e4e037773bd4a2793ae4a469f507255775448e1248322960a7f186cf7bcd12a5e829eb8db09b3d04ce8353ad4469b2d97c17cbab8944a8c8db4d806c17416cc592fb5e60cd5b7354fc971bf86040454119c1f540bcc21a217e35cf2b22ec091d8880864bf443776722ab0a9b9407414e58c1cd71ffba38791e77bf7ae3754171871cab0d20ddb0d3bad27245eacf1579b676e978ee86097c590044b2ee2b90c48493fba994403ecc4b6fd2db406149ef7cd0e04722550b991603c8cefd890c6136ab7a4c3d0230d1d71f5c39e33525cc20b09566bfd0348116a5d1c020000",
    ],
    [
      "ETag",
      "mdpj1O/zoK5WtjmAL1S+Pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb642d0ee2c8a7cb40458906148ab8caa4103a7c034484e0f4ee75fa6ef05e80a62913823c78c55af00124d5ac75ba46dc849b4bbe85b8c1c285ea3d9e2e79302ff238f43f6a62ab073b73fc6e08e62ee31d4a6ad819185b3eddfb2ef30a5df3b08022746ccf0ef3be218d9d6fb44f7cd5025d54d188dbe7f779e2d302a5d97ae6492a74e25e93942ebaa9ca3d6ac90e7224847ad09a2f218c5e1d17df8ee5b52ad1120978ab33e662cc95d86766663c1de467275a17de58f624dc13ae1fcf6005d8dc150313a478cfb63bcb5a81ff2679c88ebdaf90d1810de0f70f5f2b747905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-7-1595636454214",
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
      "02ff8d54db6e9b40107df75720fad8f88e0d8e6435964d1a57364e314ed456155a96816e8259c22e49adc8ffdeddc5175c4769df6066ce9933979dd79aa6e98f240df54b4d0f48fc5440bef9f04003fd427a80a35879e6b7fd7413ffee395fee7b46f73b7c7427e465382ca3884233b4ce12a8335ae418d8e56ad988735a6428a7b42e08eb66bddd1bf4faddbed1333a6da3843248a219491f25c12fce3376d96cee6534624ae30450465803d3f5c1de7cee34b39c3e00e6ac799ab52912b1e6bb793f2514234e683a5c2d4b0d0583dc8735228954710487c1d5297b83a0752316d1cf0403c298162997ca4a1a4cd388c445aec805d3ab300ab3927cf8ad18f4a53db3c79e866952ac533f456bb8d042c491cf371968d7ee62ae4d9deb853b1f79d385e32fc737f67cd4182f66abb9b3d4ee6f6cd7d6380a1250586da85da93f47fc28452a5b088c935469f2a4b7a24478776d9cbe31c003852411aa18ecc27cb3d5476dab3508a2c0c491d5ed05510b82c00acc1eea062d3c30c00803405506a5acc4a394a6d8e8f6ad0821dfc2edc8178319f828344cbf657642ab1b21d38c40dfa1b7875a5e72c26142584619d93559bf77a79eed7beeca198f3cbb5a77848a844f4ae5a7559f94c34583aa4adf6bc999a22c27548852e39c3a9eed8ec6def4ae2243ecd60c628437cb27b95d114a181cd12817b3e290cf692807a33ba3b93d3982d5a6dcee839888f871d0792c4704caf9ab5acee67f9ac7138b75d28a7236a5555f7aeed4f9ac579cdbb769ee5052bcc1f3bc33cb16462439f64b51d5fefefa59aba4d0c54bdda9d3bfae6cf79bc42a9ff4b810410e293e26fd8fcd95c0d2fdef3b24a2f7674102c46538a4675c98c51bc2ec981ce750be2852f67d4fd8b72cabb32714c09c9f450c5a1d6b1f71761a642e5843caf7ad284f44d9c7ed89a4a22247c164b87805ce6e84dbdab6f6076ac45441dd050000",
    ],
    [
      "ETag",
      "bMP6nygx5NJW543Ze+RDiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1595636454214"
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
      "51",
      "4f",
      "db",
      "3010c7dff3292aef71ad44202d0c898714baad5b68210d1312aa2a135f325327ce6ca7a842fdeeb39d94e68529d22ae525f6ddffce3fe54ef6bd39bd1e5ad39ca0cb1e7aa6e99f12c4f6530aeade6c42902553522f05cf25a0be8906855313fdf9c78d887316baeb5f9b5760b39f637ffd985e5d555132fe0d19d6716fdad276428111a9ed276bf76abfd5729c813931e6acccf29535fb07596d0b2b2fa2703afbd654324eac327b08027f1c4c502dedfa1f43085678658ffc3f845d974e0d432ffc39840404e4311cfeba10fc056235b5e595382b180c242f450cb28698c44a4e052f0b2c381f68d7e07ce00ebf0c4767236fe89dbade3e9af1182bca7393f0b040ef78c51566217f351546ee69d50351d955c5f7a54049a309cd0a696963b22941efbe5dff1f81d35934f21ab1f56ee934325b53132aa4aa5adf8e5eb7ea487886bba4eb9b425927e4147202a213342d56981001527683e772858ba2257b3c9f07c722e39c084e4947f40ded82cad4a625f56b30f78ff8aee8e7beed9dbef1a3c9b1b052e9c7be25379ade4e16917f7bf7215c7f9787677ebc5520ef04d74344821d1dee8977313c1f9da0fd28bae666d42833899428c1ba63ac47f277aab42fc14c82b373fe0281149508fe070000",
    ],
    [
      "ETag",
      "+JDrcnlR1kVvwelNKBAkXg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-8-1595636454214",
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
      "0000000002ff8d546d4fe24010feceaf687a5f85be404b31211ed17ad70451a1682e970b6cb7d3ba5aba6577ab3186ff7ebb2d2f458d77dfe8cc3c2f33b3c35b4bd3f42792c7faa9a647245d97c05ebf3dd2483f511910285519ef2562c428fa9045b72346d7970e311e6e87c3ba8a54688e5645066d4e4b86819fce679d94d1b2408cd2b6246c7b6dcb19386ed7ed393ddbead5500e593226f993227810a2e0a786b1b3d149294d334005e11d4c57fbb8f16c1b05a38f8005378e550d29c48d2f75cf328a9120341fce67b58792035bc00a914cb93880e3e8fb317b87a0552795d5cf0403c29896b950ce6a1a4cf384a425abc825d39b0cca706579ffd908e8337fec9f87da324602961ae2da62c1809799d02ea7d757da52f698900cf852bbffe94f7d6d49e2a536d4ceb4717015849a55c95694317041f24a384451060d3999ddce2af8644b7b0a458204e2b02d5bf44d17599e398892a88f13afeb44890951e4457d077523130f7ad08b23404d06a1b46b3cca696edb80a0eb3a8007b66d238891d9b75d6c7a1ec4b1e598ae6d7707d6c0d4b70c9b7d3f2f8c08b820bca09c6ca7a9df4f83d05f84d3f9e47c14facdde1324677651bb3feefca8252187d474fbd5583e382a18a1d254b5b76012fad3d17918dc356cc847348614e1d7d95a3da304651c0e68c4d00a04b02b1aabe5e837d7b3200cae27a3f181a17a1737bb4a2ecb7eefcd1e7a6ab285afc5f1aaeb2dd45165d3ede98ddce6e453963b94959fd03c6fc3ba75c4d17affeb4fabc1adcb83dbbad26fe7fef497c25639959942020c727c50fb8fb7a98075fadf7f27b27a77dd0a200f7c2fcf850ccb2bc1fc208e19d437435675a75b4277e0f59d1da10432f1bea26fdad6bee2c3852b2d58412e76a3a82fbd9ee3e6c852d9b053c154b97ce39360f2a332dfdab4fe02b529e5c2a4050000",
    ],
    [
      "ETag",
      "8wbri/p7elbQAroqF5i/hQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1595636454214"
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
      "7de75790ee712303a6665be2833ab38fb00f993eccc5985a2e0c075cd6962dc6f0dfd716505fda9e73eeeded39dd5bb64dbed32222b736d9a4c94f057c7796809ce94308a2caa4505b89850072a1ab41d24457bffadff3c9f9c7f289858be7ed32b8bc5f46f16c386caa04fb829caababd420ac729649150f8d360bbe58d56d01cf48deb353703cd0dad2677a5d1ee46f3e9299f6364f89745108cc6c194b4526df6955a6bf38e2d6e42888143c1e0f89a92e316987c34b605cdcb0c1c81156720da21bab191138e554939a2a328e7daf1fa37fdc1d5a0d7eff95eafabce90519962a11b16efe4305ea2a459887fda39f19a6878039b20ba18487c92cd693a4afad5cdbeebbb8eeb3bae470e5add9e56568756c7a9e39d04f1c6517912609c78039774a14c509b963a13c92b3034a3ead31e52a9b8986602acdafa070e1582b720020000",
    ],
    [
      "ETag",
      "O2kTC+YZJcRUMjZL/GZdfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00d0bb646d9de15be80e2a54048d3fa0b0c9600811527e8142b0d3bbd7e9bbc1fb0119c66418d0d832d28037b064b2b9c66bbf356ce98443e457c320c30d57bbf782e418a7e7d9b84266551eb548e5a7f145eee9ac48aabd973b5d2d8459a897d63f709769df93d048ac3cae4970b4f3e455e4f2ad7623c42d6b0c4a569c39ac4d8bc1a9af5d371a95699bb3309676268609a98e2fbe8b774eb6345ffa96ee99e1e4fa898690b248446972f7bc299de3a011f4906cda0f6789a2fb4d429f462fc6b80c28580122ba92930195cf99a299e60afc37d1b874e479b549c60907bf7f4b98bcac05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-9-1595636454214",
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
      "8d54db6e9b40107df75720fa1a5f63c044b21acb268d251b371827aaaa0aedae07ba096609bba48d22ff7b77175f701da57d83993967ce5c76de1a86613ed16c6d5e1926a6c97309c5eba74786cd0be5018112e5e95aa197e12c416290f76f7fcf1713d7f1ef86c32a8a6a34479b3c8526676541805fad96ada460658e0ac69a92b0e936bb966bd99776dfeaf7bafd0aca218d67347b52043f85c8f955bbbd97d14a184b524039e52dc236077bfba5d7ce0bf60844f0f669d6b64cc4db1fe6fd9c32820465d970b5ac34941c8a083688a64ac511bcc6d7a7ec2d8a36ad4446bf5002881056664229ab6808cb629a948526974c6fd228cd5af2e1b7663097decc1b87066169b9c9a20c6de0c258238122f19a8371132ce6c6d4bf5904f351385df8d1727cebcd47adf162b69afb4be3e1d60b3c43209c82c61a43e35afff9f2472bd2d9d6c005cdb4a650796b4aa477d7c6e93b033c502812a98ac32e2c723a36ea0e3a2e8eb143e2c1a585e30e603cc08e852e7187b87de8af31a03a835656e151c632a787ed3522766481e3447ddbc691eb6288dc5e0f5b5ddb2603e2983bf4f650cbaf820a98509e334e774d361f8269e84561b0f2c7a3d0abd71da33215934af969d527e508d9a0bad28f5a72a6282f2893a2f438a77ee805a37138bdafc990bb35830491d7e5b3daae18a51c8e6854c8590928e66cad0663faa3b9373982f5a67cdd077119f1fda0f3588e0c54f3d7b59ccdff344f2817eba415d56c2aabb90c83a9ffc5ac39b7efd3dca3b47c87e76567562d8c697aec97a66afcfdf5a3514b61ca97ba5367deadbce09bc26a9ff204104301193926fd8fcd55c0cafdef3b24a3f7674101e46538a4e7429ae51b22fc989c1450bd285af57d4fe874dc8ebb2794c0429c45743b6e6f1f71761a542ed84026f6ada84e44d5c7ed89a4b22647c354b87c05fe6e84dbc6b6f107a9a0e118dd050000",
    ],
    [
      "ETag",
      "15TEnbngat8p4HxMOD97NQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc595516fda3010c7dff32990fb0a5a69026b27f50156b6450ad041fa3421e4c697cccc8933db09a215df7db6134a5e5a451a525e62dffdeffc53ee64dfabd3eba13f3423e84b0f3dd3e46f01e2709580fa69362b900553522f39cf24a0be890685131b3df3cb7df9f2e0baee72fa699ee63bf7c5dbdfdf575132fa0d29d671afdad2764c8111a9ed5fd6eed57eab6538057362c45991665b6bf6cfb23ae4565e872b7ff1bda9a49c5865f1140493693043b574ecbf0f2158e1ad3df2ff1076dd38350cedf8f30a6210904570feeb5cf01d44cab7e59538cd190c242f4404b28698c44a4e042f722c381f68d7e06e301cdd8dc6eed81b793743ef14cd788415e59949785aa337bce20ab315df9b0aa3e14dd50351d955c54fa54071a309cd0a69a934d994a037dfb1ff41a0bf08c75e23b6de6d9c46666b6a4c855455ebdbd1eb565d08cf7097747d5328eb849c4046407482a6f916132240ca6ef05c6e719eb7644f97cbe052649c11c129e9885ed22ea84c952da9df82e5e482ef8a7eeedbdee9874938bb14562afdd8b7e486fe7cb60e27f3c777e1fabb393ff3d38302f928b81e2212ece8185e7bb7a3cfe36b741a455fb91935ca4c22250ab0ee08eb91fc832aed8b3193e01c9d7f3e473725fe070000",
    ],
    [
      "ETag",
      "bEIvwvzD333OB/Mmpj3z4w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-10-1595636454214",
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
      "0000000002ff8d54db6e9b40107df75720fa5adb606e269295a60969916c27c538515b55f68207ba09b07877491b45f9f7ee822fd04451decccc9ccbccecf8a9a728ea3d2e36ea89a24638dd56401f3fdc9148fd2833c0512a3317538d5cfa5a50fcf8bbd573039774e67d4e2793a60ad76886f232833e23158d819d2c17839492aa449490be20eceb5a5fb75ccb366cd33247bad9601964c91417f792e137e7253b190ef73e0629216906a8c46c1093fc101f3e8c86252577107336ecca0e85121bbe2d7c9a9118714c8ac972d198a818d015e40867d2c611bd893e75e90718e58354543fe018501c93aae0d25a43139322c169456b72c1f42482225c7b3e7cb602eac29b7ae7a1b2665ca8ac15c494d58a02ab32ae5c065733652dba4c70066caddc7ef5024f59e3cd5a9928a7cad49ff9a1a2d7ba35e70618c745ad1ca22883969ec8eea6e5bfb2a8038524411c31d895ad1ccd46fa5873a32472e2646c5851a241148d23c74246a4c5ae09e62602d466e052bbc1a382148e6b688eed22d3b4c01e1ba344d3c6ae65d9b66924ae31768d8d33721032d51dc3f3a19f3f1473b8c0ac240cefc6a9de067ee8adc260393f3f0bbd76ef091233bb68dc773befb4c4c590da6edf1acb0b4725c54498aa17e7cf432f383b0ffd9b960df18aa690a2f871b195ef28411983231a519403073a231bb91cf5fa6ae187fed5fc6c7a64a81fc6f5be9289b29f07b3c79eda6ce163d95d75b385262a6dda87d976bae9b2dca0ac7a85e6611756f50e47efff5fbf7a2d6e559cdcce95fa6de905df25b6cec94c00095028e2a3da3bdea60436e977fca388f2fd7d4b8438f183be38338ec599c4eca81e53688e06e74dab3b42471f3bf69e5000297f5131d28f922f6e5c6a410e05dfcfa2b9f56690cf1d4b55cb4e0d93e5e291cffdf997da7cefb9f70ffdede5c6a8050000",
    ],
    [
      "ETag",
      "DL0oFI0RnZxq1m3iprMEBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1595636454214"
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
      "02ff4d51d16e8230147de72b48f7b8b1c0066c2cf141179399e0e250b3c4c5985a2e0c05cadae2660cffbeb680fad2f6dc736e6fcfe9c9304db4cfca18bd98689ba53f35b0e34d0ae2431d22e0752eb8dc2a5a7240774a0d02a74a4d82380ad3bf6a957e867e62af6ef7e5d3e1633068559c7c4381a5ee2491c4490679cc25fed2d8ecea9a2b7101eac6cd86e981fa868e13c74a738bc9743c5f0ca7b36bb2a0b126df9761381c8563d4518dded7726df46376741b41020c4a029727558cee808889f6ce7151e560715a3302bc1ba21a5b3a65b4ae30a3d49225cbb12dc70b3cffd1773df7c1717b794e0916192d55c7728ecef30515388fe8aff28f9c3620d6c2368e3e0c945c25749d91a40ebaf9de7bb63d2f7002771ca033dd74a7b5d1a3f565f0e82880cf1895be3868378e6fa33e9857aa8c0b958b6035e832c1f2f7de32216b09ce39188df10f5d9e707029020000",
    ],
    [
      "ETag",
      "c9dRLgxpZgWL6f0Z+kn7vQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9f3580a0ca1be5122b07119a8b0d497a6d4920cc6c5161066fc7717cf1f9c1fc038174ad16968450f9ec1c60cb4e7fb6870b09e8b0f3b1b9aca73b477ad4ceac9b3504eb282b93c3f062e2a49e0d1c2c046e328031a38a9575914b43aab289ee2337d09ef92a81b46ce6a974f5d3c0e9d8fb464e9eccf59bf345a3ff3963466481871d7349d0fc23aa515cde5a413ee35d03bf55f48466e47de44af65f98d40ffa0563d64160cdd9a718249b9645b4075ff7b7935abf13e5ca02aac369c8e10ec8058c7ab148a5e1f33d3426807fe9b74da46f1b862c1a490e0f70f020c911805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-11-1595636454214",
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
      "fa1a1b88ed0091acc67248e3c8c60de0446d55a16519e8269825ec92ca8afcefdd055f701d457983993967ce5c76de3a8aa23e933c562f153522e94b05e5facb138dd433e9018e52e981f5cf60922e31e777e057e6fc4ebbcfcdfbd1a88922359aa155914197d1aac4c02e977e2f2d6955a092d2ae20ec1a46d718dac38bfec560383837060d964196cc48fe2c19fe705eb04b4ddbe9e8a594a619a082b01ea6abbd5d7b3dd78a923e01e64c3b4eab894c4cfb38f1d78c62c409cd474bbf1151312843582192491907741c5d1dd3f7085af55211fd4a30208c69957329ada1c1344f485a9535b9607a134661ae35ef7f5b06d57766ce245030cdaa551ee66805674a8c380af9ba00e5c65bcc95a97bb3f0e6e360ba70437f72ebccc7bdc962b69cbbbef278eb788ec25194418d5546ca55fde78a9f5a519d2d06c6495e6b0aa4b7a54478b77d9cbe33c23d852411aa186cc34253bf4086a5db51129938b1fac328d1218aacc81ca27ea4637b00833802d466a895357894d31c59f650c7861e8265dbe1c01ad8a165413fc4ba11c5663f362eb0a96ed19b7d2d7f4bc2e19ab08232b26db2fae84d03270cbca53b19074ebbee045519bf6e941f577d540e170d6a2bfda825278a8a925021aa1ee7d40d1c6f3c09a60f2d1962b7669022bcf65fe4762528637040a352cc8a4339a7b11c8cea8ee7cef5015c6fcaf75d101311bff63a0fe5884039ffba9693f91fe709c4621db5a2994d6355fdc09bbadfd49673f33ecd03caaa77785eb766d9c28464877ed5549dffbf7e775a2954",
      "f154b7ead4fba5e3fd90d8da273d1e2450428e0f493fb1b912d8b83f718944f8ee2e4884380dfbfc8c0bb37844981db2e3129a27459ac6ef08cd73d31eee0805b0e427117ddd30771127b741e68215e47cd78be646348ddc1c49aa5a726a980c17cfc0ddce70d3d974fe0182497f88e0050000",
    ],
    [
      "ETag",
      "eyZTCgUcttJeSu7MJ/Qn7Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc595516fda3010c7dff32990f70a524313d64eea435869c714a085742f13426e7c49dd3971b01d2a54f1dd673ba1e4a553a421e525f6ddffce3fe54ef6bd3bbd1efa437382bef5d0334db72588fd9714d4a3d92c41964c49bd143c9780fa261a144e4df42ff8398cb3c5d5ccf71f2777db601baeae776f373755948c5f20c33aee5d5bda4e283022b5fddbdabdda6fb51c67604e8c392bb37c63cdfe4956fbc2caab68399ddf37958c13abcc9fc230188713544b87fee7108215ded823ff0f61d7b553c3d02b7f5e420202f2184e7f5d08fe0ab19adaf24a9c150c069297220659434c6225a7829705169c0fb46be0ba03d7bff6479723cff786ae770c673cc68af2dc643cadd0075f7185d992bf99122377583541547655f2632d50d2e842b3445ada996c4ad087efd0ff47e0741e8dbc466cbd5b3b8dccd6d4840aa9aadeb7a3d7bd3a139ee12ee9faaa50d60939859c80e8044d8b0d26448094dde0b9dce0a268c91e2f16e1b9c838278253d2117d47bba032b56b49bd0b17c119df15fddeb7bdd3b741343917562afddab7e446d3d9641505b3874fe1fabb3e3df3e3bd02f920b89e2212ecec702fbc2bffebe8021d67d1776e668d32a3488912ac3bc67a26ffa04afb12cc243807e72f653f8325ff070000",
    ],
    [
      "ETag",
      "VeJ2cmO8M55QEFqAqLS9vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-12-1595636454214",
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
      "9b",
      "30",
      "18",
      "7d",
      "cf",
      "af40ecb50924905ba5a88d5ab631a5694b48ab6d9a12633ea85382a96dba4655fefb6c080959abaa6ff05dce39dfcdaf0d4dd31f491aeaa79a1e90f82907b6f9b2a2817ea23c2050ac3ce9c3e657b0b90d7c7ab7eadea6c6fde34bfc633c1a9551a4c8e6689d25d0e4346718f8e97cd68a19cd33c4286d4ac066bbd36c7787dd9ed5b3bb76a76d97b91c926842d24785f02044c64f0da3d2d18a298d134019e12d4cd77bbbf1dc313246578005378e690dc9c48d8f89cf128a9120341dcd67a5889c035bc01a9144c9386487c1f9317c8ba0752b96d1cf0403c298e6a950d24a184cd388c4392bc025d2ab344a73a179ff5b33e83367e25cf8da32228c8b458ad6b0d410d7160b063c4f84f6d5bbbed296b2d48824c097dafd77c773b465a174a98db4336de25eb9bed62ef80bec10b82069a1c0474102355ee9dd75cd7d67607b08058204e2b00b5bf4cd1e6a0fcc6110057d1c0dac6e1099100483a0df455660e2a10d761800aa2308c55de6a394a6560783695bd6200aed70680fa013f670b76f213b1ab67be1109996157486a0ef10b6fb7afe3222e092f08c72b26bab7eefb9beb3f0bdf9f462ec3bf5da2324db7659aa3faefca824219b5457fb515bde28ca18a15254314077ea3bdef8c277ef6a32e4364d204678337b52fb14a184c3211b31396601ec8a866a38facdf5ccf5ddebe97872402816e4a68ae432ecf75eeca1a63a9abfc98e475d4ea1b4ea33df73a7dff49a737bf22ecc1d4af277709e77661d5672f529e1e639bc146d2a96bf8edbf8ffeb4fa3c6a7cb7bdc49d56fe78ef753e5163ee5f1200206",
      "293e28f8c4c2aac4d2fd89e7468657c7af32e4fdeff9b99066793b981fd83183f292c8ba905c010e4cabdda9006522136f23ec7e75956f1f00c5056b4845d58bf221281bb93d9294d7e414692a5c6efe7437d06d63dbf807d7e3cdd0c5050000",
    ],
    [
      "ETag",
      "nhyZbyQbToVj5Qn/WkxgJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1595636454214"
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
      "30147de72b48f7e84886531396f8303733cd8c71381e9685988a1786032eb6971963f8f7b505d497b6e79c7b7b7b4ecf966db3dfb4d8b1279b6dd3e4508138dd25401ffae083ac32926a2bb190c0ee7535104f74f52a09a693ec9dbe0e55de7b789d0534ea79c7f1b8a992d10fe45cd59d1552384e21db4985bf0db65bde6805cf41dfb8d90833d0dcd06a742a8db6fef4e7cbb75b25c79d5196c162f13c594c592bd5660fd55a9b97ec71eb430c028a08aeef2905ee21a2b9312e795e66e048ac4404b21da21b1b391158955c203a8a72dcbee30ebde1e87134180efaeea02bcf30e29462a13b8235bbcc27249ef978d4e699dba4231ad864d125c1e29b786e0352d29f6e9e8a14d885addb53687528bcce9b9c08e44aa0b223c198e87b1eebf27841ed97741c242a3074c4d58fcd52525ccc3309566dfd030a69047d1d020000",
    ],
    [
      "ETag",
      "PgUEBlKtYqum+0DHUt6+9w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b7282300000d0bb642d0e1128d01d54ab13a008868fdd64524815a2842628d04eef5ea7ef06ef07d0aa624a914170d6816730d395bbac9681707c98d436b3e3435b4ee3d097e8242ef00a0d16d609e4edd72522320a928c53d5a4da8b191bb920e8be9da84a5050aedef4c33ec3383fef8d5cbf75f51a7fd875e0e5b1b0347bb31e8fa82be6bb6f6c7dcf870186589c3997abd739ec18773e53f814bb306f103777a39cfa74a73461d93aa94a8714b3e0261d1df11ee110b9a3e714edf5b8296f8cc7e5492bbe279e81056053df48a648f3981996eb2ec07f930c73cf1e579f51c924f8fd0338f93c2605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-13-1595636454214",
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
      "000002ff8d54db6e9b40107df75720fad8d806836f91acc67248836ae304e3445555a1653dd04d304bd8259115f9dfbbbbf882eb28ea1bcccc3973e6b2f3ded034fd99642bfd52d32392bc94506cbe3cd148bf901ee028919e27d358ba9899fcc7ec7ef3158c3bcecdc7b7d1a88a220acdd03a4fa1c96859606097cb452b296899a382d2a6206c9a56d3ec0ebb3dab6777ed8e69575806693c25d9b364f8c379ce2edbedbd8e5642699202ca096b61ba3ed8dbaf9d765ed027c09cb54fd3b64526d6fe3cf1b79462c409cd46cb4525a2645084b0462495328ee85574754adf2268dd4a44f42bc18030a665c6a5b48a06d32c2649592872c1f42e8cc2ac341f7e6b067de14c9d49a0619a96eb2cccd01a2eb415e228e49b1cb41b7f3ed35cef66eecfc6813bf7c2c5e4d6998d5b93f97439f316dae3ade33b1a47510a0aab8db42bf5e7891fa548655b01e324539a02e9ad2911de5d1fdd0f4678a090244215835d58d8377ac81c18c3288efa381e58dd2836208a0651bf8bacc8c0431bec5504a8cea094557894d1ac67e3a111a36e6820dc0f6d14afc201f47b2132cd4e149bb6d5e947fa0ebd3dd4f256100ed784e594915d93f547df0d9c30f097de641c38f5ba6354a6fcba527e5af549395c34a8aef4b3969c29ca0b428528354ed70b1c7f3c09dc879a0cb15b534810de2c5ee476c528657044a342cc8a4331a32b3918dd1bcf9ceb23586dcadd3e8889885f079dc77244a09cbfaae56cfea77902b15827ada8665359f545e0bbde77bde6dc7e4cf380d2f2039ed79d59b63026e9b15f8aaaf1efd7ef462d852e9eea4e9d7ebf74fc9f12ab7cd2e3430c0564f898f43f3657022bf77f5c2211bebf0b12214ec3213fe3c22c1e1166c7ecb880ea4991aaf17bc28169f4fa7b42012cf879846559fb88b3db2073c11a32beef457523aa466e4f249535390a26c3c533f07633dc36b68dbfc1d7f245e0050000",
    ],
    [
      "ETag",
      "j10UIcs1tKMQy+e0Ptt1Ww==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1595636454214"
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
      "02ffc595516fda3010c7dff914c87d1c484d1be83aa90fb0d19529850ed2be4c08b9f12533757299edb0a18aef3edb09252f9d220d292fb1effe77fe2977b2efb5d3ed92179e31f2a94b9e79f2ab00b93b4b407fb79b05a8426865961c3305a467a341d3c4466fe9b70fc172b37962d778158e27b72fc99fbbe4e6a68c52d14f48a9897b3596b1630e822963ff7076b7f23b2da329d8132314459aad9dd93bca7a973b79192ea6b3af752545e694d963108cc6c18454d2bef73e84514dd7eec8ff43b875d5a9606483cf0b88414216c1f1af73891b88f4d49557d13417d05758c8085405b189a59c482c722a11fbc6d5f72efbdee07a30bc1cfa03ffc2f30fe10223aa396636e37149def81a35150bfc6d4b4cbc8bb209b2b4cb921f6a41e25a17ea2532d2d6667346de7cfbde3f02a7b370e8d762abddaa53cb6c4c8db954baec7d337ad5ab13e1056d936eae0a17ad9013c818c856d03c5f53c62428d50e1ed59ae67943f6783e0f4e45a61993c8594bf42d6f832af4b621f536988f4ef8ae98f7bee99dfe320a27a7c22a6d5efb86dc707a3f5986a3fb8777e1e6bb3a3ef3e39d06f520d14c11056e7678e7fec7c1d5f09c1c66d167b4b346db51a46501ce1d513393efb836be980a059d7de72f794eac39ff070000",
    ],
    [
      "ETag",
      "vaJ+LSjjVd9o7TBEFkgxHg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-14-1595636454214",
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
      "40187df75710f6b55e50406d625ad3d25d3656bb886d9acd4667860f3a5d642833e8ba8dff7d67c00b6e9ba66ff05dce39df6d5e6b9aa6ffa649a09f6b3aa6d14b0ed9e6cb33c3fa99f2804091f2acffb2e1b5dd7b5c9bc1f791bd797c9ab46f5ed6834119458b6c8e96690c75cef28c003f9f4d1b51c6f214658cd52560dd30eb86d5b7ec8e6d5a66db30cb5c0e7138a2c96f85f02444cacf9bcdbd8e46c45814034a296f10b63cd89bab7633cdd83310c19ba7b44dc9c49b1f135fc48c20415932984d4b1139876c0e4b446325e3981de0cb53f80645cb4624a35794002284e58950d24a18c29290467956804ba4576994e642f3e1b762d0a7cec8b9f2b5452c560b0d716d3ecf80e7b1d06ebcc9adb69035863406bed01ebe399ea32d0a890b6da05d6823f7d6f535a3202e4003e0822605b58f700c1542e9ddb5cb7d67520708058204e2b00b9b775b36327aad3e0e719784bd8e85c31660dcc35d0b75708bf44d30030ca88a201477998f1296a0c0ec592dd2090cdb426d8c3aa149ec6edf30011b16e02eb6bb60b74c43df216c0ff5ac332ae09af29471baeba7fee0b9be33f7bdd9f86ae83bd5da4324db765daa3fadfca424219b5455fb515bde284a33caa4a86272eed877bce195efde5764c8351a4184c866faa216294431876336cad0120464b72c50c3d1ef2653d77727e3e1e888506cc6dd3e92cbb09f07b1c79aaa68fe263d1d753985d2aa4f7dcf1d7fd52bceedd9bb30f728cedfc159edcc3a3ccb9d6794b72ee14fd1a662ebabb8b5ffbf7ed52a7cba3cc49d54fdc7ccf11e556ee1531e0f42c8202147059f58589558ba3ff1cec8f0fdd5ab0c79f8077e2ea459de0ee1477692417949745948de03f6da76bfbf07948999781bd1377bfb883797af",
      "b8600989d8f7a27c01ca466e4f24e51539459a0a979b3fde0d745bdbd6fe01444766e6be050000",
    ],
    [
      "ETag",
      "wzoAD68Yw4dJL6yYhO2Fqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1595636454214"
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
      "e75790ee756c43c1cc253ee8b2cfe074389f16632a5e18ae70b12d1a67f8ef6b0ba82f6dcf39f7f6f69c1e2ddb26bf69be260f3659a5c9b6047eb84a407eea4308a26452a8adc05c00b9d6d52069a2ab2118cf7a6c0aefe3f96ee5ffdd6ee185ddef0783ba4a443f905155775448e13805b6160a7f1b6c37bcd1729a81be71b9e466a0b9a1d1e4a130da7330197e5d0a19ae8df0310f82e12878228d54997da1d6ca3c6483ab1062e09047707e4ec17103917c33be05cd0a068ec09247209a21bab196138e654139a2a328c7f51cd7effbbd6ecff3bd8eebb5e50c232a53cc75c77c464ef3254aca42dc6befc4adc3e135aca3688320f1453a97f92869a79b3b7effc6ed90135f35a785d5a2c579e2e820414c392a43028c8dee9d4fda441e513b963a10c94b307444d597bda65271316502accafa07c43b83781e020000",
    ],
    [
      "ETag",
      "eLMS6lPeJMUvb5z/qeGl8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb9243300000d07fc973751645b28f2935c6255532e88b4143b12e1b8a7667ff7d3b7bfee0fc80ac28d834a5f3d0b21e7c826726a17db1b7078845bfec6ad1e87c43e37203af3a4408f1c757af0fc31c9653a3f4d872d85ae649274af9a5755b771d73aa667996249b86acd766cba6684252a616a4ebecdd0e5b98e8a7251ae8180a67331044ea1fce1057464570e593e05439f9f55823215699d3e8d886cb4d2049cf43f7b2f8630f9538260b296ccdc639a498ead1f1e8a8f387941ac1fdfb1ea99ef7289c645ac10eb06dac399bd2fa3d93158476e0bf99cecf91bdaf98659c71f0fb079e5f2fea05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-15-1595636454214",
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
      "0002ff8d546b4fdb3014fdde5f11651f81a68f3c5aa46a742540a426ddd21484a629725c2733a471b01d10a0fef7d94e1fe98a105215d5f7de73eeb90ffbbda569fa232e96fab9a627387baa107dfdf64012fd547a100799f45cb31f964117376fa973e29fdc5bbe31cbde5e46a33a0a2b3403ab3247678c54142276be98b7334aaa125042ce04e159d712bfa165f76dd3327b5db3c63294a7535c3c4a86bf9c97ecdc30b63ada1921598e4089591b92d5ce6e3cf78c9292070439330ed31a2213333e4ffc3d2710704c8ad1625e8ba818a2315a019c4b197bf432b938a46f63b06a6722fa194304202455c1a5b49a069222c5594515b9607a174661569a77c786419fbb5377126990e4d5aa880bb042a7da127010f3d7126957e1ccd7bce06a16fae3c89b05f17c72e3fae3f664365df8c15cbbbb714357e320c991c26a23ed429d0271508a54b625621c174a5324bd0d25c2bbe9a3f7c10877149244a8626813163b1d1b74079d6192260e4c077d2b493b2849068963817ed281431399cb048126835256e341410a1b0ea1d51bf662c7111fb3e3a038311d2bb6cc01825d312d3b75f40d7abdabe585628e2e312b09c39b26eb77a117b971142e82c938729b75a7a0caf965adfcb0ea8372b8685053e9672d395254524c8428354e2f88dc703c89bcdb860cb15b539401f83a7f92db95829ca13d1a50312b8ea84f9672307a30f6ddcb3d586dcacf6d101311bf773af7e58840397f55cbd1fc0ff34462b10e5a51cfa6b6eaf328f4826bbde15c7f4c730bf2ea039ee78d59b630c5f9be5f8aaaf5ffbf3fad460a5d5cd58d3afdd7c20def2556f9a4274429a2a880fba45fd85c09acdd5f788944f8f65d9008f134ecf2332ecce21241b6cf0e29aaaf14ae1bbf251cf46dc7de120a20e5c71103dbd9461cbd0d32175aa1826f7b51bf117523d70792aa861c0593e1e21a049b19ae5bebd63ffceed321e0050000",
    ],
    [
      "ETag",
      "GsB5/rUHzf7+M+Y5M/Ogzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1595636454214"
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
      "30",
      "10c7dff35720ef71a0952eb01f521fa08311294081f46513426e7cc9dc3a76663b4cb4e27f9fed8492974e918614298a7df7bdf347392b772f5ea7839e2827e86b073dd0f47701f2f02e05bdb29b35a8826965965c7005a86ba341e3d4463fada6b30f9bd98ff92c983fc37b7e3b9d3ecbd5cd4d19a5e25f906113f7622c6327141851c6fee9ec4ee5771ac719d81363c18a8cef9cd93dcbfa903b7913ad83c5f7ba9209e294c57d188ec6e10455d2b1fb3684608d77eec8ff43b875eb5530f4281ed69080041ec3f9ab73291e21d6812bafc259cea0a74421635015c42696722a4591632944cfb87afd8179be0c861f87fec0bfeefba7702662aca9e036e37e835ef95a68ccd6e28f2d31ea5f9797204bbb2cf9a91628a9dd42bd4446dadb6c4ad0abefd8fd4760b088867e2db6da6dbd5a66636a42a5d2e5dd37a3577775213cc36dd2cdaf42592be4143801d90a9ae63b4c8804a5dac10bb5c379de903d5e2ec34b9131275250d2127d4fdba032bd6f489d86cbd105fb8ae9f74dffe96fa3687229acd2a6db37e446c17cb28946f3bb37e1e6bd3db7f9f14183ba93c24c11056e76f4affccf834fc32b749a45b7c2ce1a6d4791960538778ccd4c9e516d7c09660abca3f71772de571fff070000",
    ],
    [
      "ETag",
      "kQFH/SHZMHIMze+nCFFzrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-16-1595636454214",
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
      "5b4fdb30187defaf88b257daa66d6e45aaa0946c8b560a4b53d0344dade37c0966691c6c870da1fef7d9492fe94088b7e4bb9c73be9b5f5a9aa6ff2679ac9f6a7a44d2c712d8f3a7071ae927ca0302a5ca73716fce123377ac0b74674d6c9e7c1bc7e67834aaa34895cdd1bac8a0cd69c930f0d3c5bc93325a168851da9680ed9eddee5943cb1ed8a665f67b669dcb214ba624ffad10ee8528f869b7bbd3d149294d334005e11d4cd77b7bf7a9df2d187d002c78f798b62b9978f77de2b38c622408cd478b792da2e4c096b0462453320ed971747e0cdf2168dd4965f413c18030a6652e94b41a06d33c2169c92a7089f4228dd25c69deff360cfadc9b7a93505b11ca97a828561ae2da72c9809799d03e07d757da4ad699900cf84abbfbea059eb6aa64aeb49176a64dfd2b3fd47a1579051c031724afe8431465d02095de6dcbfc37a6b587502048200edbb0a563d8a8e71ac328891c9cb8032b4a0c882237722c34880c3c34c18c23404d04a1b8eb7c94d3dc75613888fbc6b06738d88dada113f5c1b0f1c0ec47263843dbb5622391105b84cdbe9e3f8c08b824bca09c6c7baadf057ee82dc360319b8c43af597b8264db2e6bf5c7951f952464939a6adf6bcb2b450523548aaaa6e7cf422f184f42ffb62143aed21452849fe78f6a9912947138642386d620805dd1580d47bfb99efba17f3d1b4f0f08d576dcec22b90cfbb9177ba8a989163e17c7a3aea7505bf57918f8b32f7ac3b9397913e61665e51b384f5bb30e0f72ef29e1c639fcadda546d7e13b7f5ffd7af56834f97c7b895aa7f5f78c10f955bf99427800418e4f8a0e0030bab126bf707de1a19bebb7c95218f7fcfcf8534cbdbc1fcc08e19d49744d695e41da06b5aaeb30394894cbc8e701c7b17f1eafa1517ac2117bb5ed4af40ddc8cd91a4b221a74a53e172f367db816e5a9bd6",
      "3f4ac5d1b2c2050000",
    ],
    [
      "ETag",
      "Bh4Nf4n75BaW5C6sfKAd4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1595636454214"
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
      "d16e8230147de72b48f73ab2a0c232131fd0986c91e864fab41853eba5c30197b5658b31fcfbda02ea4bdb73ceedbd3da717c775c977561ec9d825878cffd420ce0f1cd4da1c129075aea4de2a2c259047530d8a7253bd0d660bce6582857c66e162b1899ef8663d99b455927d414175dd45238dd30cf2a3d4f8d362b7e3ad56d2024cc7fd5ed881b643a7a97365b5e96a15cfa3e5bd54e0d14acb6d1c47d3784e3aa9b1fb4eaf8d7dca090f09a420a064707b5025f0044cbd59e79216550e9ec45a3090dd1073b195b9c0baa202d1d394e7879e1fbc04e1301c05a3813feacb7364546558da703ec875be4245f304ff8c7be2b7f18816b661f45190f42e9ffb84b4f46b2e2b5103b9b24d77da393ddadde64dcf0ae4bb406d478235311806a4cf6386c6af3271989e9666547fd96ba63497d25c82d338ff3603b06d1e020000",
    ],
    [
      "ETag",
      "U5CKggsRoms7c6KKTA/gTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfdb6e82300000d07fe9b318186381bdd9a15c4a235010796a5a5614512e051b71d9bfcfecfcc1f901acaac434d1b96f45073ec1c2de9c75b546bd0d8da43e7d48e37897713bd9c5bd97a4f8465604d9ce25f93b195878be94b4d023752df67d761b4dced3c01f78a3ddfd416c94a7b06c2e4be62e5f30d6a4a7eac46932e49da231c9508591b537461de3ee89455e3bad4ecb679ce701a771a2e609b10dce20e17cdcdd0223d4b679e01f6655c3ad299747c9493085c7b0f346e4fbf3c1253c4dcee9b5575e6a8f16062b201e4323c5449bd7ccb41c6705fe9b745e06f1ba42c1a490e0f70f426324ff05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:25 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-17-1595636454214",
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
      "6f",
      "a2",
      "40",
      "10",
      "fe",
      "ee",
      "af20dcd7aaa8bc681373f52cbd9a28b6886d2e970b5996815b8b2c65171bd3f8df6f177cc1b369fa0d66e679e699979df786a2a82f240dd56b450d48fc5a40befdb6a2817a253dc0512c3dabe2f1c778b34a979d9535b00c976cdf5ec2d17058459112cdd03a4ba0c968916360d7cb452bce6991a19cd2a6206c76ac66c7181866cfd40dbddbd12b2c83249a92f44532fce53c63d7edf641472ba6344e006584b5305d1feded4db79de5740598b3f679dab6c8c4da9f27fe9e508c38a1e970b9a844140c721fd6882452c6091d0637e7f42d82d6ad58446f080684312d522ea5553498a611898bbc24174cefc228cca5e6e36fcda02eeca93df6144c93629dfa295ac39512228e7cbecd40b973e73365e2dccdddd9c89bcc1d7f31beb767a3d6783e5dce9c85f27c6fbbb6c2519040895586ca4df9e7889f5251992d04c6495a6af2a4b7a64478f77d9c7c30c223852411aa18ecc37c4b3351a7af0d8228b070d4ef1941a44110f403cb40bd40c3031df4300054672895557894d2d43420c4a666fa5d2d327d5d33751f45fdc84780b1d68974ace348dda377c75ade72c2e196b08c32b26fb2faec4e3cdbf7dca5331e7976bdee081509bfad949f577d560e170daa2bfdac25178ab29c5021aa1ce7c4f16c7734f6264f351962b7a61023bc5dbccaed8a50c2e08446b99815877c46433918d519cdecdb13b8dc948743101311bf8f3a4fe5884039ffb2968bf99fe7f1c4629db5a29a4d6555179e3b717eaa35e7ee639a2794141ff06cf666d9c28824a77e95548dffbffe346a2954f154f7ead4c7a5edfe92d8d2273d2e4490438a4f49bfb0b9",
      "1258b9bf708944f8e12e4884380dc7fc8c0bb37844989db2e31caa2745aac61f08fb86d1b30e840298f3cb08ab7b8cb8b80d3217ac21e5875e5437a26ae4ee4c52519353c264b87806ce7e86bbc6aef10f29ecc8b1e0050000",
    ],
    [
      "ETag",
      "juQBCvjnU1j7975RiywkdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc595516fda3010c7dff32990f70a12e902dd26f521e9688716a085749b5421e4c697cc9d1367b6c34015df7db6134a5e3a451a525e62dffdeffc53ee64df8bd3eba15f3427e8530f3dd1f4770962ff2e05756f364b902553522f05cf25a0be8906855313cd0af5ed7bb09b0de57db017bbaf89ca773ffcabab2a4ac63f21c33aee455bda4e283022b5fd68ed5eedb75a8e333027c69c9559beb166ff24ab7d61e555b49cce6f9b4ac68955e60f61e807e104d5d2a1ff3684608537f6c8ff43d875edd430f4cc9f969080803c86d35f17823f43aca6b6bc1267058381e4a58841d6109358c9a9e0658105e703ed1ab8970377f471347e3ff646de85eb1dc3198fb1a23c37190f2bf4ca575c61b6e47f4c89917b513541547655f2632d50d2e842b3445ada9a6c4ad0abefd0ff47e0741e8dbd466cbd5b3b8dccd6d4840aa9aadeb7a3d7bd3a139ee12ee9faaa50d60939859c80e8044d8b0d26448094dde0b9dce0a268c90e168bf05c649c13c129e988bea55d5099dab6a4de840bff8cef8a7eefdbdee9cf7e343917562afddab7e446d3d96415f9b3bb37e1fabb3e3df3c15e81bc135c4f11097676b843efc3e8723c44c75974cdcdac51661429518275c758cfe42f54695f829904e7e0fc051ff7c1e0ff070000",
    ],
    [
      "ETag",
      "lptVWBxM0sQByrxKftnxXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-18-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d545b6f9b30187dcfaf40ecb5b9432095a2366ad98694a41d21adb6694a6cf3c1dc124c6dd32eaaf2df67432e64ada6bec17739e77c37bf360cc37ca459649e1b26a6c953017cf3e98161f34c7b40a2447bae85dbc1e126fc317e8ca7a1c88895bd6c92d1a88aa265b640eb3c85a660052720ce17f356c2599123ce58530136bb6eb36b0fed417f60d956af6b55b902d27842b3478df05bca5c9cb7db7b1dad84b124059453d1226c7db0b79f7bed9cb3072052b44f69db8a49b4ff4f7c9132822465d96831af441402f812d688a65ac6313bc297a7f02d8ad6ad44453f530288105664524bab6008cb629a14bc045748afcaa8cca5e6c36fcd60cebd8977151aab084958194818cb250751a4d2f81cdc4c8d952a32a629889571ffd50b3c63556a5c1923e3c298f8533f34ba2573891a8190342bb9438453a8312aefae5ffe3ba33a4068102491805dd8d2e90c50d7ed0c718c1d12bb7d1bc71dc0d8c58e8dfab84386165811065447909abbca4719cb7adda115c5c3d871fac81af451ec460317c704a37e2f8a1d350f6503db367708db433d2f9c4ab8a6226782ee1a6ade077ee82dc36031bb1a875ebdf618a9b65d57ea4f2b3f2949aa26d5d5feaf2d6f14e59c3225aa1c9d3f0bbd607c15fa7735196a8f269020b2993fe94d8a512ae0988d385a83043e65911e8e797b33f743ff66369e1c11cad5b8dd470a15f6f320f658531d2ddce4a7a3aea65059cd7918f8b32f66cdb93d7b17e60ea5c53b38cf3bb3090f6ae919159d4bf853b6a95cfb3a6ee3dfaf5f8d1a9fa92e7127d5fcb6f082ef3ab7f4694f003170c8c851c10716562756ee0f3c342a7c7ff63a435dfe815f486556b743c4919d70a82e89ae4bc97b40776077ed3da04ae4f26d84d371f6116f4e5f73c11a32b9ef45f504548ddc9e482a6a72ca341dae367fb61be8b6b16dfc056228a2e8bf050000",
    ],
    [
      "ETag",
      "Ds80bTyTZAkfMTsnc4nwyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1595636454214"
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
      "48",
      "f73a128a62b6253ee066a6895b261b59e2624cc50bc30197b5c5c518fe7d6d01f5a5ed39e7dede9ed39365dbe4272b77e4c126db2cfdad811f6f52904b7d0841d4b9146aabb014406e75354896eaea03053f8846e12ca27c39fd5c05cf2fab79301eb75522fe8682a9ba93420a2719e43ba1f097c176c71bad6405e81b371b6e069a1b3a4d1e2ba33d051fd36bbec09de15fa3c522982ca6a4931ab3afd5da9877ec711b42021cca182eafa938ee219673635bb0a2cac11158f31844374437b672cab1ae18477414e5d03b87faf7fe68301afa438f0efbf21c6326332c7547f44ecef3254a9687f8a7ad13da66c35bd826d1e74092ab70aee351d241377baee73aaee7b8949cb5a63badad1ead2f53274709e28da33225c05819b83ee9537944ed5aea5024afc1d03153bf36cba4e212960bb01aeb1fefd121b521020000",
    ],
    [
      "ETag",
      "v1e5AU6RHU1rQEWZAGMZIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfcd4e83300000e077e9792cd4b28e7a033260038365b20117424b15e4570adbd0f8ee12afdfedfb0139e742ca6cea6bd18167b0e44f64cbb75eaf9b90727546ef93f21a079c0a6cf8b45f3d726ec8c6cc29b2b25055c34f680fbfe6b4b4cfad7fc8ccf1cdcec3474d99ecef2dfec425434982bb47c0dd105e95644e9a18a3c3ed1a10e8e961760f2135dc6fb5f6e37231247a99e7593b4e513d7844678da39d6a7eb158a957d19e741f4361c0c61f2e1a1353be58e69ea4e3ae0c2de6b6de49a6d5d209d14a5f098e6003c463a84621b36a9da11d211bf0dfcca66510ebd514f92846f0fb0757e7448c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-19-1595636454214",
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
      "db6ee230107de72ba2ec6b81402e4025b44534dd2241e826a1d56ab58a6cc7c9ba0d716a3b54a8e2dfd74eb884a5aafa96cccc3973e6e2796f699afe42f258bfd67448d2d712b3edb7670af52be5c102a4cac3a67e48513878a3f36d868ae4c5dce060321ed751a44273b02e32dce6b46408f3eb55d049192d0bc0286d4bc2766fd4eed923db311dcbb6fa3dabc6729c257392bf2886bf4214fcbadb3de8e8a494a6190605e11d44d7477b77d3ef168c3e632478f73c6d5766e2ddcf137fcf280282d07cbc0a6a1125c72cc26b403225e3848ee1cd397d8780752795d11b8230408896b950d26a1a44f384a425abc825d3bb344a73a5f9f8db30e8813b77a7a1866856aef328076b7ca5c54080486c0bacddf9cb8536f3ee96fe6212ce965e144cefddc5a4335dce570b2fd09eee5ddfd5048019aeb0da58bba9fe3cf95329aab2c5980b92579a42e56d2891de7d1f671f8cf048a148a42a8ef761d1c070406f688c60020728199a364c0c0ce1100e6c6042038d2c6cc510832643a5acc6839ce67d0341809c38329c811d59c0762238b48dc8324dd340b16542e8e87bf4ee58cb1b2302df125e504ef64dd69ffc59e846a1bff2a693d06dd69d803213b7b5f2f3aacfca11b2414da59fb5e44251c10895a2aa71cebcd0f527d370f6d89021776b8e5380b6c1abdaae04641c9fd080c95909cc16345683d1bdc9c2bd3d81ab4d7938047119f1fba8f3548e0c54f3af6ab998ff799e502ed6592bead9d4563d08fd99f7436f38771fd33c82acfc8067b337ab1626243bf5aba26afdfff5a7d548a1cba7ba57a7ff5cb9fe2f85ad7ccae3e304339ca353d22f6cae02d6ee2f5c22197eb80b0a214fc3313f17d22c1f11e2a7ec88e1fa4991baf107c2e1a03fb20f8412c8c46584e51c232e6e83ca85d73817875ed437a26ee4ee4c52d99053c154b87c06de",
      "7e86bbd6aef50f002ebcf2e0050000",
    ],
    [
      "ETag",
      "rCRTocT7woLylcpfk3veSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1595636454214"
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
      "02ffc595516f9b3010c7dff91491fbb8440b1da44ba53e246dd6b1d1a44be8cba62872f141dd19cc6c932aaaf2dd671bd2f0d209699178c1befbdff927ee64dfabd3eba1df3427e8b2871e69faa704b13b4b41fd309b25c89229a99782e71250df4483c2a98966b38fab6fe327ff6278f373c7be7f08aedd5b955e5d5551327e820cebb8576d693ba1c088d4f62f6bf76abfd5729c813931e6acccf28d35fb4759ed0a2bafa26530bf6d2a192756993f84e1641ace502dedfbef43085678638ffc3f845dd74e0d43cffc71090908c86338fe7521f833c42ab0e595382b180c242f450cb28698c44a4e052f0b2c381f68d7c01d0f5c7fec8f3e8d3cdf3b77bd4338e3315694e726e36185def88a2bcc96fcc59418b9e75513446557253fd402258d2e344ba4a5adc9a604bdf9f6fd7f0406f368e43562ebddda6964b6a626544855f5be1dbdeed589f00c7749d75785b24ec829e4044427685a6c302102a4ec06cfe50617454bf674b1084f45c639119c928ee85bda0595a96d4bea97703139e1bba2dffbb677fa6612cd4e85954abff62db95170375b4593bbfb77e1fabb3e3ef3d39d02792fb89e2212ecec7087de67ff623444875974cdcdac51661429518275c758cfe4af54695f82990467effc05a678b243ff070000",
    ],
    [
      "ETag",
      "lE/SJ9h570DZylK+IC1Gtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-20-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d54d96eda40147de72b2cf7b1018c17c091508212b7b5c49218435455158c876b6712e37166c669a3887fef78cc629a28ca9be72ee79cbbf9b5a169fa23c9d6fab9a64724792a80bd7c79a0917e567a40a0447916a4176367c1efa7375f4d2bba76d9d0bd1d0caa28a2b239dae42934392d18067e3e9fb512468b1c314a9b12b0691acd8ee33a5dab6b3bb6d9b1ab5c0e693c22d96389702f44cecfdbedbd8e5642699202ca096f61ba39d8dbcf663b67f401b0e0ed53dab664e2ed8f892f528a9120341bcc67958882035bc20691b49471cc5e4797a7f02d8236ad44463f130c08635a64a29456c1609ac5242998029748afd228cd4af3e15933e8336fe45d85da8a0bc9b2d210d7964b06bc4885f62d988eb595ac322629f09576f7c30b3c6da544aeb48176a18dfcb11f6a1d45ad60d7c005c9147988a2146a94d2bb6b98ffceac0e1025081288c32e6cd933baa8d337dc288e7a38ee5b4e141b1045fda8e7202b32b06b83bd8e00d51144c95de5a38c6676cf74ad2e9200a6e5f4d79115774c6cbbf26d83e53a1638c6da423d4bdf216c0ff5fc6144c035e139e564d751fd2ef0436f1906f3c9d530f4eab5c748b6edba527f5af949494236a9aef6a3b6bc51943342a528353b7f127ac1f02af41735197291469020fc327b2a5729462987633662680302d898aecbe1e837d3991ffad3c970744450bb71b38fe432ecd741ecb1a63a5af8929f8eba9a4265d56761e04fbeeb35e7f6ec5d98054a8b77709e77661d1ee4d653c28d4bf8abdaa4f6be8edbf8ffeb77a3c6a7cb53dc49d56fe75ef0b3cc55bed213400c0c327c54f089852d132bf727fe34327c7ff765863cfd03bf3c3f41e4ed607e64c70caa4b221b25790fd8ef9b96b50794894cbc8db00d671ff1e6f64b2ed84026f6bda8fe015523b727928a9a1c955686cbcd9fec06ba6d6c1bff00adf4b2c0c0050000",
    ],
    [
      "ETag",
      "bVi7fc5VshOP+23bD9rA9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1595636454214"
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
      "8e",
      "82",
      "30",
      "107ce72b48eff5b88882914b7c5063a2891a454dce5c8ca9b87078c0726df1620cff6e5b407d693b3bb3ddcef4669826f98db313f934c9318efe0a60d7b708c44a1d7ce04522b8dc72cc389077a5064123a50ebf0691bfcc47bb64e1e065b2eb458e735cf5fb958a073f9052a9bb492471184372e2127f6b6cd675cd65340575e3e1c0f4407d43cd896baeb9cd743e5e6f06f3e52b99e249938bed6c3618cec6a4a64abdefe55aeac79cf1e843080cb2009e4fca199e211053ed9dd3344fc0e258b000783d44355674c4b0c82943b464c96ab72cdbf5dc6ea7ebb84edb761a798201153166aa63bb268ff902054d7cfc57fe895d05c42a58c5d18441c297845e3392d445377fb8bd96eb7ab6e78c3df2a0cbfab4371ab47f0e1e5e05f02543e98b8376d369b9a4096684cab850b90856802e0754fede2416b216d28483511a779727b4e629020000",
    ],
    [
      "ETag",
      "fXAgRPpCYlN4ovHY8g44bQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e82300000d07fe9b3315201616f022928ac4261d1f1424a571419d7c22a98fdfbccce1f9c27a08c7121b2b1ad7803dec04ca1b9666bbf352c25623ff3b1089c8d65579b34766152d852855d0e5d221208ab12138cd523e929f530b1e0430905320f8b504768ebcebbe4a790f05e16f760a7ddf05d97c974c369cd346184ba33256e09e1a1efae51349d5de9c10b460815fda29d8690faa940e4db77b2be10752396c0372ef8b3c921d35324b601776d1e2f32f95af2ddd89ac1f088bd687fcd42e5fc51e33d5801fee8ca818bac7ccdb69a69aec07f331be78ebfae16a7031fc0ef1f8d6a6dc405010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-21-1595636454214",
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
      "0000000002ff8d54db6e9b40107df75720fa1adfc1984856e33824b564e306e3446955a1ddf54036c12c61975451e47fef2ef8027514e50d66e69c3973d9796f689afe4c93b57eaee998462f39646fdf9e18d6cf9407048a94e7e1729ea4fd1bf11cdd4eacc431baf9afcbf5ed685446d102cdd1268da1c9599e11e0e7ab652bca589ea28cb1a6246cf6bacdae699b83fec0308d5ed728b11ce270469367c5f02844cacfdbedbd8e56c45814034a296f11b639d8dbafbd769ab1272082b7eb69db32136f7f9ef87bcc08129425a3d5b2149173c802d8201a2b1947f41a5fd4e95b146d5a918c7ea50410212c4f849256d210968434cab3825c32bd4ba334179a0fbf1583be7466cec4d7088bf34d1224680367da1a091488b714b46b6f31d7a6eef5c29b8ffde9c20d96931fce7cdc9a2c66abb9bbd4ee7f389ea309846328b0da48bb28fe5cf953282ab2ad810b9a149a7ce5ad2891de5d1fa71f8cf040a148a42a0ebbb0c0ea0c5077d8b171882d120efb260e3b80f1105b26eae30eb10d30d6185095a15056e251c212ab0f1636702fb0ec210a8cbe3d08b08d5160761010dbc4d81a227d87de1e6af99b51015794a78cd35d93f57b6fea3b81efaddcc9d877aa7587288fc555a9bc5e75ad1c211b5455fa594b4e14a51965525431cea9eb3bde78e24fef2a32e46ecd2042e46df9a2b62b443187231a65725602b2395babc1e8ee78ee5c1dc1c5a6fcdc077119f1fba0f3588e0c54f32f6a39997f3d8f2f17abd68a7236a5555ffaded4bdd12bceedc7347728ce3fe079dd99f55476eb517698d7b81aff7ffd695472e8f2adeee4e9b72bc77b50d8c2a73c1e849041428e59bfb0ba0a58babf708a64f8fe302884bc0d87fc5c48b37c45841fb3930cca3745cbceef098776dfb0f784129889d388a169ee234e8e83ca051b48c4be17e591281bb9ad49ca2b720a980a97efc0dd0d71dbd836fe019b4f64b4e1050000",
    ],
    [
      "ETag",
      "YBMnp3GtkgQC7nE41uZBdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554d14ec230147ddf5790fa0a89e8186ac2c3141092810223d11842ca763787dd3ada0e4308ff6edb0dd98b668924beacbdf79cdb937bdbb3bd51aba18f28f1d15d0dada2709301db5d8420266a33059e11c1e592d28403aa2b36081c2ab63b197449fbe575bbeeaf9cbe7d6d75dd4df8d9e9e42ceebd438c256f2f23190711109fcbf84dc7b522afb104c7a04ef428c9e264a9c3fa0916bb54c333773a1c3f969198fa1a19cf1dc7be777aa8800ef59f457c2cf0521ff93709bd2e8c420cade96a0a0130483c38759d32ba064f0cf578398e53020d4e33e6012f4454610e878c662966943664aa71d56c345bb72debda325be655d33cd209f5b08868a22ae633f4ad2fa8c0644a3fd5889195df01cbc37ce2c751a0a07409e5094968ab8a231f7de70ef55f88c3b16b99256eb15b18a5cacaaa7252414460f94feaf24adeb17ce1d5b48b677226711cd32c1115a5fbce937dc6c6a51baa36ddb5dddeb964b9905ea8a8eb0e47bd996b8f9e7f1497dfc5c904f73b01fc9951e9310eda59cd4bf3a6d5b62ed1d1a90f54395128a30a96814e7b58feb1069190b900130ec6c1f8023a1e31d41d050000",
    ],
    [
      "ETag",
      "TQHDl7XYvjFbLFA36DTqgw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-22-1595636454214",
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
      "e2",
      "4010feceaf687a5f34110aa52dd4847804abd784170f0ac6bb5c6077bbadaba55b77b71acff0df6fb7e5a59cc6f80d66e67999999dbed5344d7f2469a89f6b3a24f1538ed9ebb7070af53395c102c42a33eabf34afe6770f7f7f8546c7b40264da8bdb975eafac22059a837596e03aa73943989fcf678d98d13c038cd2ba24ac9b66bd65bbb6d3762cdb325b5689e5388986247d540cf74264fcdc30763e1a31a5718241467803d1f53e6e3c9b46c6e80346821bc7b28654e2c6e7c217094540109af6e6b3d244ce315be2352089b2714087f0fb317d8380752396d5cf04618010cd53a1ac953488a611897356904ba6371994e1c2f3fe6f25a0cfbca13708b4c1a43ff46603efa4bfb83e5981b5625d9d9e69cd530d706db96498e789d0aea69391b6caa4917bc0315f69b73fbca927238c4624c14b12aeb49e76a10dfd911f68adc253a117622e485ab80a004c70c58bcc6e27e97fb0c43d85220142aa6ecb969da6035adda60b23d84151b76dc3a88921ecc28e0ddab0895c0b5b21c4a0ca2094768907294d1d68774d3782c88adc085bcdb00d43d8b55cab83bb21b4ecc87190e380b6be65d8ecfb796144e04bc233cac976d4faedd40fbc65309d8f07fdc0abf61e0139bccbd2fd71e7472d0939a4aadbcfc6f2ce51c60895a68aa5fae3c09bf60781bfa8d8902f6c8863805e674fea8d4520e1f880060cacb1c06c4443b51cfd6632f3037f32ee0f0f0cc5a3b9d9557259f67b6ff6d053952d78cd8e575d6ea18c2a9b8ea557729bb30f591620c93fa079de86f5d61147edff5f7f6a156e5d9ee3d695fe73ee4def14b6c8a9cc144798e1141dd4bef03615b04c7fe16b23cb77b7af10f2fcf7fa5cc8b03c13c40fea88e1f268c8ba6c754be8b6ba2d734728814cbcaf",
      "70ddbde4bbfb575a788d53b19b45f91d2807b939b29457ec1430552e1ff9d81f5f17e66b9bda3f406df931c4050000",
    ],
    [
      "ETag",
      "MAw0FUYjzZd/724Tc25VWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1595636454214"
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
      "147de75790ee752c825fd9121f74d9b22da81367b26421a6d40bc30117dbb2c518fefbda02ea4bdb73cebdbd3da727cbb6c94f5aecc8834da2343954c08f3709c8953e0420aa4c0ab595580820b7ba1a244d74f55b34daa4079c8f7be82dd6ec734e97bebb9a4c9a2ac1be21a7aaeea490c2710ad94e28fc65b0ddf2462b680efac6ed969b81e6865693c7d268cffe72fa712de4b833c262e3fbd399ff445aa9367ba8d6da3c648f5100317028185c9e5372dc0393afc6b7a079998123b0e20c443b44373672c2b12a29477414e5789ee30eef87a3fe68301c78eea02bcf90519962a13b366b729e2f51d22cc03fed9db84d38bc814d145d1024be4ae73a1f25fd9ae6bb719f9cd9ba3d855687c2cbbcd9518278e7a8ec083026fa5e8f74793ca2f62b751c9257606846d587bda4527131cd0458b5f50f48e047dd1c020000",
    ],
    [
      "ETag",
      "Jb6UiqoM70o2NScXMaOL1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcfc97282300000d07fc9d9382a7b6f2ca3b18122160af492618925224b4910339dfe7b9dbe3f783fa0a82aca3911434b7bf00264b1b3d6d51a0fa6b38d2a496c47c6306d1d9445798d4bdde0b9b6cb962699cf6f62c1fe1d41192751a6de191cd3d94b9b638cd283f409776751c4ca25d2af7048b2bd016b9c3cb4fe55982447b60dede0843ab6bd617835b4a9c7f777daaa21ff522a11ba8d98a7c1871b74e1be2a1196f4dbd7dac3d11deb8d319b5ea193c0b44ed2dbcb0fe5f66984a1eccaa66ba8d5e8ac64c1c2c10ad0c7c826ca097bce14cdb256e0bf49841ce9f3ead062a213f8fd036537857005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-23-1595636454214",
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
      "6f",
      "9b",
      "30",
      "10",
      "fe9e5f81d8d7e69d34a152b46609ed22256405d26e9a2664cc41dd124c6dd3aaabf2df67435e60a9aa7e89c2dd3d2f7767fbada169fa234943fd42d303123fe5c05ebf3cd0403f531910285699eb976bf6d71cbaf08dcf3cfe6006a39f6be7663c2eab4881e6689325d0e4346718f8c5da6dc58ce6196294362561b3d76f7607e6e0bc7f6e0c8c5ed728b11c926841d247c5702f44c62fdaedbd8f564c699c00ca086f61ba39c4dbcfbd76c6e80360c1db75d9b654e2ed8f85bf26142341683a5ebba5899c03f3618348a26c1cd1617059a76f11b469c5b2fa99604018d33c15ca5a4983691a91386705b9647a9341192e3c1f3e2b01ddb516d6d4d3304df24deaa76803675a8804f2c56b06da95b35a6a73fb6ae52c27de7c65fbeef4bbb59cb4a6abc57a69bbdadd77cbb1348182040aac36d62e8b2f5b7e148e0ab510b82069e1c953d98a1399ddcd71fece0a0f148a44bae2b02bf3879d73d41d75cc200a86381af50741d481201805c301ea071d6c1a608401a02a43e1acc4a394a6661fc2e1303af77b5127f48d20ecf9a32e923fa3ae01c8303ac818e93bf4f6d0cb0b23026684679493dd90f53b67ee59bee7acede9c4b3aa7d47284fc4ac745eefbad68e9003aa3afd6824278e3246a83455ac736e7b9633997af3db8a0d79b6161023fcea3ea9d315a184c3118d98dc9500b6a4a15a8c6e4f96d6ec082e4eca8f7d119715bf0f3e8fedc842b5ffa29793fdd7753c79b06aa32877534675d773e6f6b55e496edfa7b94549fe0ecff32eac67725af772c2bcc6d5f8ffdf9f464543977775674fbf595bce2f852d722ae340040c527c54fdc4d155c032fd89a74896ef1f0685906fc3419f",
      "0b1996b708f3a33a6650de29524e7e4f68f6ccde604f28814c9c54f4bb47c993c74169c10652b19f45f9489483dcd62ce5153b054c95cb7b60ef96b86d6c1bff00344cad2be1050000",
    ],
    [
      "ETag",
      "GwGrz97SeBsDTsj9b8XURQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1595636454214"
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
      "00000002ffc5545d6bc230147defaf90ec55616aed3ec0873add143ab7d50a634324b6b75a6d932e493764f8df97a455fbe2284cd84b937bcfb939dc9b9c7e1bb51ada442440b735b488961f19b0edc512c48bdab8c0b35870b9a494704075c50681978afdba76fb24bb1e6e7a2ed92ca6cdc11b638eddede62ceeaf20c192f72d23198711c40197f1bb8e6b455e630427a04ef4699c2564aec3fa1116db54c313cf1d8d1fca4842038d8ca78e63f79c012aa05dfdb44880059eeb23ff26a1d7995188a1355db8100203e2c3b1eb94d135f862a4c7cb7192c6d0e034633ef0424415e6f092d12cc58cd2864c355aed46b373d3b1da96d9315b4d734f8fa98f454489aa984ed0415f508163977ea911232bbf039687f9c4f7a34061e912ca1392d0a72a8e0274c8edeabf104763cf324bdc6237334a959555e5a4c22886f93fa9cb2b5961f9c2ab6917cfe44ce238a1191115a5ef9d27fb8c8d4b37546dba6f7b8373c97221bd5051d71b3d0e269efdf87c525c7e674713f4b602f833a3d2631cb4b39a97e675e7caba447ba7de51e544a18c2a58063aed63f9c71a4642e6421c733076c60f57f3adb11d050000",
    ],
    [
      "ETag",
      "XjRDnu8HkBRnkbU1EZrrLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-24-1595636454214",
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
      "00000002ff8d545b4fdb30187defaf88b2974d5adba4e4d220558c95b0452a2db429084d53ebb85f82218d83edb05588ff3e3be9251908f1967c9773ce77f3734bd3f40792adf4634d8f48f25800db7cbaa791fe557940a04479e65e74ee8171eb58c3f3cddff9f7681c98fed560504591329ba3759e429bd38261e0c7f3592761b4c811a3b42d01db3dab6dda9eed1c39966df54cabcae590c623923d28843b21727edcedee7474124a9314504e7807d3f5dede7dea757346ef010bde6dd2762513efbe4f7c92528c04a1d9603eab44141cd802d688a44ac6217b157d6bc277085a771219fd4430208c69910925ad82c1348b4952b0125c223d4ba334979af7bf35833ef347fe30d48693f938fcbc446b05b7fca221ae2d160c78910aed7c3ab9d096b964bf431cf852bbf9e94f7d69613426292cc86aa90db4136d145c04a16696424a92157041b2524a88a2146a02a477dbbee08dc9ed2114081292751bb6700d07997dc38be2c8c571ffc88e6203a2a81fb9363a8a0cec5960ad22407504a1b8ab7c94d1cc8962e4baae6d79c87363dc3762b0dd5edf701dbb1799bdd8b14d8c015bfa16e1655fcf1f46049c119e534eb6fdd56fa641e82fc2e97c3c3c0dfd7aed3192cd3babd4372b6f94246493ea6adf6bcb2b453923548a2a27198c437f7a3a0c83eb9a0cb956234810decc1ed562c528e570c8460cad4100bba02b351cfd72320bc260323e1d1d10ca4db9dc457219f66b2ff650531d2ddce4cd515753a8ac4aa6b3ef6da39a26ca354a8b37609eb666dd6c60b4fefffaddaa61ebf206b7aaf4abb93fbd55b9a54f79a61003830c1fd83eb09b2ab1727fe08991e1bb832f9fb2d9819f0b69966782f9811d33a88e86acab52b7809e25d77407281399781d611bee2ee2d5d12b2e58432676bda88ebf6ae44b4352519353a6a970b9e4e360fca314df7a69fd037814f877b9050000",
    ],
    [
      "ETag",
      "U9bF9e0Y64CFyxUBbNI1EQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1595636454214"
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
      "cb",
      "6e",
      "c2",
      "30",
      "10",
      "bc",
      "e7",
      "2b22f7da480d84a056e250102a1484202de5502164cc260d796cb09d5608e5df6b3b0970b13d33bb5ecff862d93649e2fc405e6cb28fa35309fcfc10815ce94300a24ca5505b81b900f2a8ab41d24857cffc557fc24ea3f74d3ff95a42b261b3444683415d25d80f6454d55d1452388c213d0885bf0db61bde6839cd40dfb8db7133d0dcd068f25c186dbaf81cbf8d837b29c3839116ebf9fc75381f9346aaccbe556b659e72c47d002170c819dc1e54703c029353e35cd0ac48c111587206a219a21b6b39e2581694233a8a723a9ee3f69e7b7ed7f77a5ec7f5daf214199531e6ba63fd41aef3254a9a06f8a7dd13b78e87d7b00ea38d828477f9dc27a4a45fddec932b5535a7add5a2ed6dd8f02c412c392a2f028c836ee789b4618c509b953a0bc94b3034a3eabf26b1545c4853015665fd03a9ac0cca1b020000",
    ],
    [
      "ETag",
      "K6Q7HcqCJW7kVPekWcKktg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcf4b7282300000d0bb64ad0e1ff9a43b638ba08c808a103799348612cb4f4024747af73a7d37783f8032c6bb8ef4f537afc01b9054830bb6d8d53652a36cc9e481ddd34b2b2d38e8b7dca1ce29c5b7638d144c4e571b092da38abffa0c2d41e59ce824f4e6e53b7d6c4b58797822baf91803769efc62071307b55c95580cc85c2a0fbd0e8dc24a3ec60963145c49e14d34dec5ee606bb12c36b6b2cef7a941bc55f8ec36ebf6d89bb0ee73ed6824d1fde27f0578eb3c7175506bcc6c77cf917b2e33b16eb0ad0bae455a0c66808f8d687947c46ba61b10cec07f93f4b2e1af2be2b4e52df8fd03e1e0d9dd05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-25-1595636454214",
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
      "0002ff8d546d6fda3010feceaf88b2af8504480a54422b82b02141584368374d53e4984bea36c4a9edb4ea2afefbec8497645455bf207277cfcbddd97e6b689afe48d28d7ea5e921899f7260af5f1e68a85fa80c0814abcc7244dacccca6de944d7efaddbf7711242f37c36159450a3447db2c8126a739c3c0afd6ab56cc689e2146695312363b76b36d0feccbeea5655b9db655623924d19ca48f8ae15e888c5f19c6c1472ba6344e006584b730dd1ee3c673c7c8187d002cb8519735a412373e16fe9a508c04a1e970bd2a4de41c58005b441265e384de84d775fa1641db562cab9f09068431cd53a1ac953498a611897356904ba6371994e1c2f3f1b312d057cedc19fb1aa649be4d83146de142db208102f19a8136f5960b6de64e97de62e4cf966eb01a7f7716a3d678395f2fdc9576f7ddf11c4da0308102ab0db5ebe2cb951f85a3426d035c90b4f0e4ab6cc589cceee7387b6785470a45225d71d897053df312b5fbe6208cc21e8efa5d3b8c4c08c37ed8b3513734f1c0026b1302aa3214ce4a3c4a698a3a16b6bb7810f4a2d00cac6e8403d4b3cd200cdb1801426dc9a6efd1bb632f2f8c0898109e514ef643d6efbc99ef04beb776c723dfa9f61da13c1193d279bdeb5a3b420ea8eaf4a3919c39ca18a1d254b1ce99eb3bde68eccf6e2b36e4d99a438cf0ebea499dae08251c4e68c4e4ae04b005dda8c5e8ee68e14c4ee0e2a4fc38147159f1fbe8f3d48e2c54fb2f7a39db7f5dc79707ab368a723765545ff9deccfda65792bbf7696e5192bfc3f3bc0feb999cd6bd9c30af7135fefff7a751d1d0e55ddddbd36fd68ef74b618b9cca78100183149f543f717415b04c7fe22992e587874121e4db70d4e74286e52dc2fca48e1994778a94933f10ca5fcb3c104a2013e7157df32879f638282dd8422a0eb3281f897290bb9aa5bc62a780a972790fdcfd12778d5de31f94106e1ae1050000",
    ],
    [
      "ETag",
      "OAi1r0pFRFrDXT3zWfelwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1595636454214"
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
      "dfaf20f51512d06d7e243ea080928c0f6118134348d9eee674db9d6da741c37fb7ed86ec45b344125fd6de7bceedc9bdedd9a7d168909728f5c94583aca3f03507b6390a41dca9cd0c781e0b2e970c530ea4a9d82068a8d8037fd17e6153b737f910f70fbdec2644270d2f2f0b16f79e20a192f72923190711c43e97f1a38e1b655e63294d409de8619c27e94a87cd3d2c369986e7ee6c38bea92209fa1a192f1ca77be5f449096d9b3f8bf854d0953ef26f127a5d1aa51879c6f50c0260907ab0ef3a63f80c9e18eaf1729a6431b438e6cc035e8aa8c2020e19e61965882d996a1d5bad8e756ed927b66999c71d73478fd1a322c254552ce6e45b5fa0a0f10cdfd588895ddc012bc262e2bb5190a07209d50949e84d15473ef9ce6d9bbf108763d7362bdc72b7342a95b555e5a4822886d53fa9cb2b79a2f285d7d32e9fc981c46982792a6a4a0f9c49f7808d4b37d46dbad775fb8792e5427aa1a6ae3b1cf5e76e7734fd515c7e977b135c6d04f02943e9310eda599db679669dda6db273ea352a270a6554c172d0698fca3fd66d24642ea03107636b7c01aebe51e01d050000",
    ],
    [
      "ETag",
      "FdU0krPTDOztVXDpGgoLng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-26-1595636454214",
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
      "59",
      "6f",
      "9b",
      "40",
      "10",
      "7ef7af40f42551631b9bcb44b252cba109928fc4c689aaaab21718c826c01276719b46feefdd051fb889a2bcd933f31d33b3c36b4392e4279c06f2b9247b387a2e207ff9f2483cf94c6480a14864c657fa9fbf6aefeaa6db8d17ee64d0b5d6d75f6ffbfdaa0a97688a922c86262545ee033d5fcc5b514e8a0ce584343961b36b343bbaa51baaa1e95ab7a355580a7138c2e9936078602ca3e7edf6ce472b22248a016598b67c92ece3ed75b79de5e4117c46dbc7b26dae44db1f0b5fc4c4470c93b4bf9857260a0af91212846361e3800ebc6fc7f42d8c9256c4abd7d807e4fba44899b056d1f8240d7154e42539677ae5411e2e3defffd602f2dc1ed943571a4e07237b3eb44fe68bf1c90a258275757a2629a712a2d27299032d62267d9f4dc7d22ae3461e1005ba92eeafed99cd233909710c4b1caca4be74218d9cb1e34a9dd253a9170065382d5db9c88ba1e68567b79374de59e29e429020c655b7654b533150a7a7585ee8997ed853752f54c0f37a9ea923d5537c4b032df000d51998d0aef0282569af874c30ad50ed28a6aa063dd3f44ddd3341d35564e95a609ac830a083e42dc366dfcfef1c33b8c43423146f472ddfcf1cd75ebab3c5643870ed7aef21e2c3bbacdc1f777ed412e343aabbfd682c6f1c653926dc54b95467e2dab3c1d075ee6a36f80b1b4184fc97f9b37863218a291cd028470930c8c72410cb916fa673c775a693c1e8c0503e9a9b5d25e5653ff7660f3dd5d9dc97ec78d5d516aaa8b06968722db7397b97e50ec5c53b34eb6d58ee1c7134fefff5ab51e396f9396e5dc9b70b7bf64360cb9cc8cc20841c52ffa0f689b7298055fa135f1b5ebebb7d81",
      "e0e7bfd7a78c87f999f8f4a0eee7501d0d4eaa56b78496612aea8e900373f6b6c2527607f8f6fe85162490b2dd2caaef4035c8cd91a5a266a7848972fec827cee4aa34dfd834fe01309d7897c4050000",
    ],
    [
      "ETag",
      "MG5xz38GP22lUTNA29vH+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1595636454214"
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
      "000002ff4d51cb6ec23010bce72b22f7d8a6e215542a710054fa50d4d2504e1542c66cd250279bda0e5584f2efd84e025c6ccfccaed7333e3aae4b7e936c471e5db24de2bf0244791383fa34871064c195d45b8e99047267aa41d1d854fbfb67c643f9b6b83db0a054c16cc9e7a3783caeab24fb8194eabaa3461a4709f09dd4f8db62b7e1ad96d114cc8d9b8db003ed0d8da6cadc6af3e063f2752da4b8b3c2fb2a0826d3e089345265f7b55e2bfb903d6e43884040c6e0f29c5ce01e987ab5be254d730e9ec4423090cd10d358cbb1c022a702d1d394d71b7a5d7fe40ffbc3813fe875076d394746558299e9582dc979be42457988ffc63be9d6e1881ad651b44190e82a9deb7cb474b0cd9dfbfe0339d355735a3b2d5a5f064e4b05722150fb91605df47b1dd20632436358993c9428c0d28cea1f7b4994e622ca253895730299fc4ddb1d020000",
    ],
    [
      "ETag",
      "5jGclRsJP+vcLytLCSlF9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e",
      "83",
      "30",
      "00",
      "00",
      "c0",
      "bff81c22f6d4bd35101495a5a60511b820302e4b0476b059abfebd51e707f3030a8c09e7b9a077328057b0152a3ce2a34b5fce4a587941acb956c9311155d627b3b763bf53cad9aacd34b45911bccb191c14a67ad169e954365f4642356435d27a0d3cdfcddef8c5401157e5b29784534d277f4975c4b3ac785448480147624d9c564b5b57c71b9eb0dff3e9b69696fdcde7e863adb9f2458d626fe2599eee0cc268ef6d1a774de58836347575caa521b093ba468fdbe7e298d7c9331c8d76520a0e80acac1d09cfdbe74c33203c80ff662e36469ed73329463282df3f2d74346305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-27-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6fa240147df75710f6b52a54146d62b6c6d2d644710bd866b3d9906118e8b4c8b033439b6ee37fdf994105d6a6e91bdc7bcfb9e77ecc7def689afe8cf358bfd0f408a77f4a44dfbe3d91483f931ec4412a3d1b9add4477cc45a3e095dcc235b1e3e4ef6c3aada2b04233b02d32d465a4a410b18b8ddf4b29290b4009e90ac2eeb9dd358793e16830b286d6b969555886b26489f367c9f0c879c12efafd838e5e4a489a215060d683647bb4f75fcefb05254f0872d66fa7ed8b4cacff79e2ef19818063924f377e25a2648886680b702665d4e838ba6cd3f730d8f65211fd822102109232e7525a4503499ee0b4a48a5c30bd0ba3302bcdc7df8641f79da5330f3448b2729b8739d8a2332d061c84fcad40dab5b75e690bf77aedad66c162ed86fefcd659cd7af3f572b3727dede1d6f11c8d8328430aab4db54bf5e78a1fa548658b11e338579a02e96d2811de7d1f171f8cf0482149842a86f661a16d8c803936265112d930190f865162a0281a47f6100c22034e2c64c511024d06a5acc2839ce4d0328d9111db610c1333b4a03d0a811919e1201e2709b0901ddba6be47ef8eb5bc52ccd11566056178df64fdc15b044e18781b773e0b9c66dd0928337e55296f57dd2a878b0635957ed692134505c5448852e35cb881e3cde6c1e2be2143ecd612a500bef97fe476252063a846032a66c5115d91580e4677672be7aa06ab4df971086222e2d751675d8e0894f357b59cccbf9d27108bd56a45359bcaaafb81b7706ff48673f731cd3dc8ca0f785ef666bd10dd7a141d662daeceff5fbf3b8d1cba78ab7b79faddc6f17e4aacf2498f871244510eebac5f585d09acdc5f384522fc7018d4c9f3ebfc8c0bb3784590d5d92145d59bc255e70f84137b6818074201a4fc34c2ae234e8e83cc85b628e7875e5447a26ae4ae25a96cc85130192ede81bb1fe2aeb3ebfc0394949d53e1050000",
    ],
    [
      "ETag",
      "UrlGbQsNe6TwoHcOo7dfzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1595636454214"
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
      "30107edfaf20f51512d131d4c407544492810823261a42ca769b936e9ded4d430cffddb61bb217cd12497c597bf77dd72f77edb74fabd120eb380dc84583ace2e82d07b1398a001ff4660a326728d592f15402696a36208d347bdd3d65f160fe8839aed64fc21df8237a165d5e162ce9bf404215ef53452a0e63608154f1b3891b65de60294d409fe8739627e9d284cd3d8c9bccc0336f3a1c0faa48c203838ce7aedbbb72fba484b6cd9f45028a74698efc9b8459175629465ef96a0a2108487dd8779d09fe0a3e0ecd78254d32062dc973e1832c457461014782e719159cb754aa75d26db53be71de7d4b13bf649dbded119f729c63cd515f319f9d6478e944df9871e31718a3b1045584c7c370a12562ea13a2105bdebe23820dfb96df317e270ec3976855bee1656a5b2b6aa9a54183358fe93baba9217aa5e783dedf2991c489c263c4fb1a6f4ad7bdf3b60e3ca0d759bbee979fd43c94a545ea8a9eb0d47fd99d71b4d7e1457dfc5de04571b0439115c794c827156fbd83eeb749d63b273ea35d74e446d54143998b44fd51feb2e46950b2993606dad2f43460e491d050000",
    ],
    [
      "ETag",
      "k73liGUWtutbkZrLGcMa8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-28-1595636454214",
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
      "a3",
      "40",
      "10",
      "fe",
      "de",
      "5f41b82f77897da105da9a349e514e49daaa946a2e974bbb2c03ae028bbb4b3dcff4bfdf2ef4859ec6f8adccccf332333b7d6d689afe48b2503fd6f480c44f05b0972f0f34d08f5406048a55c69cddf72ee7f86fe7c2baa3d674e5923f3deb6634aaaa4889e628cd1368725a300cfc783e6bc58c16396294362561b33b681ad6d0b27bb669995dc3acb01c92684cb247c5702f44ce8fdbedad8f564c699c00ca096f619aeee2ed55b79d33fa0058f0f6a16c5b2af1f6c7c22709c548109a8de6b3ca44c1812d2045245136f6e830f87e48df22286dc5b27a4530208c69910965ada2c1348b485cb0925c32bdcaa00c979e779fb5803e73c6ce99af4ddce9d7254a15d9f29b86b8b65830e04522b41fded5445be652fb1e71e04bedeed2f11c19613422092c48b8d446da89367627aeaf19a58d5222042e48561af15190404d5e6637c373dfd9db8e429120215537658b7ec746c6a0330ca2a08fa341cf0aa20e04c120e85ba81774f0d004330c00d51984d2aef028a399d9ef5b5db030425d6442609b51c7181a60855dcbb09165e330ea983d23d0370ceb5d3fcf8c0838273ca79c6ca6abdf79aeef2c7c6f3e3d3bf59d7aef1192c33bafdc1f767ed0929043aabbfd682c6f1ce58c5069aadca33bf51deff4cc776f6b36e4a31a438cf0cbec493dab08251cf668c4500a02d884866a39faf5d5ccf5ddabe9e978cf50be93eb6d259765bf7666f73dd5d9fc97fc70d5d516aaa8b2699b7a2db73e7a97e51625c53b34ab4d58370e381afffffadda871ebf20237aef49bb9e3fd54d832a7321e44c020c37bb54fbc4d05",
      "acd29ff88391e5db73570879f13b7d2e64589e09e67b75cca03a1a9256ad6e088703bbbb23944026de560c6d7b5bf1e6e49516a49089ed2caad3af06b93eb054d4ec9430552e1ff9d49d5e94e61bebc63f3af0b9fcb7050000",
    ],
    [
      "ETag",
      "4Sh3HUcz0G5Wo5NvIix35Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1595636454214"
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
      "ee752c8ae83e121fd46cd1846cca66b26431a6c085e10a97b5651b31fcf7b505d497b6e79c7b7b7b4e8f966d93afac88c9834dc22cfdae80d75729c88d3e04202a2685da4a2c04906b5d0d92a6bada5dae611006ef7f2b266e1709abbded6ab4994edb2a117d424e55dd512185930c582c14fe30d8ee78a31534077de37ecfcd407343a7c9ba34da93ff327bbb14728c8df0bcf5fdd9dc7f249dd4987da7d6c63ce480610009702822383fa7e4788048ae8c6f41f3928123b0e211886e886e6ce5946355528ee828ca71ef9ce1f87e3c194dbcb1e70ebdbe9c6144658685eed8be92d37c8992b2007fb577326cc3e12d6ca3e88320c9453a97f928e9c734df782e39b14d77da593dda9de7cd6b0962cd51d911604c8cdc01e9f358a0f62b751c925760e888aa0f5b665271096502acc6fa070258681d1c020000",
    ],
    [
      "ETag",
      "2HPe0bRXxIls7Cfly4UI3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfc97282300000d07fc9d93a030c5b6f208254a56cb29c182441529624104174faef75fafee0bd405955689a0a4e5a34804fb096a2beadb647a29942503399f65deeae0dcfe2b39fbb5fea536f91113670caa8e68cc307df65e45227292dc29dac2648bf75cbe25552901ce625ad217c44fe816012c9cf0ce6b9c59429892cd81249506e0e5a3cdcdc6733ee44951d35f9e465fc1c1a59fc1dc1eb7ead19c3a330ea8e15f484b280cc464e0745bd9a29b56d31dcfbbdcd5c31bf70d7b9ff547e299d60c031b60c66b76003d083e2114d057ecf2459d737e0bf59f095a2f7d544e58846f0fb0725861b1005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-29-1595636454214",
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
      "8d546d4fa34010fede5f41b8afb6a52fb4d4a4399b8adaa4a51ea59acbe5429665c055ca22bbd433a6fffd7697be801ae3379899e7656676f7ada169fa134943fd5cd303123f1790bffe78a4817e2633c0512c33f1bfc7f02aa6747b6b9b49ef39bb7e2988138fc765155168863659024d468b1c033b5faf5a714e8b0ce594360561b33b6a76cc9139e80dfa66bfdbe9975806493427e9936478e03c63e7edf6c1474b28c609a08cb016a69b63bcbdedb6b39c3e02e6ac5d976d0b25d6fe5af8674231e284a6e3f5aa345130c87dd82092a8668fe830b8a8d3b708dab46251bd251810c6b448b9b456d2609a46242e72452e98de44508495e7e36f25a0afecb93df5344c936293fa29dac09916228e7cfe9a8176e52e17daccb95aba8b89375b3afe6a7a632f26ade972be5e382bedfec6766d8da3200185d5c6da85fa73c48f72a4d442609ca4ca9327b3152722bb9fe3ec93151e29248970c5605fe60f8d01ea58c6288882218eac9e1944060481150c4dd40b0c3cea433f0c00551994b3128f529ac2686858dd28f2bba169f97d3302dfea5a1dbf67767b1646100668a0efd1bb632f2f39e17049584619d90f59bf77679eed7beeda994e3cbbda77848a845f96ceeb5dd7dae1624055a75f8de483a32c27549852eb9c399eed4ea6deecae62439cad39c408bfae9ee5e98a50c2e08446b9d815877c4143b918dd992ceccb13589d94db431113157f8e3e4fed8842b97fd5cb87fdd7753c71b06aa328775346f595e7ce9c6bbd92dc7d4e738792e2139eed3eac67625a0f62c2acc6d578fff5b751d1d0c55ddddbd37fad6df7b7c4aa9cccb810410e293ea97ee3e84a6099fec65324ca0f0f834488b7e1a8cfb8088b5b84d9491de750de29524efe40381a5983ce81500073feaec2340c63601d2a3e3c0e520b3690f2c32cca47a21ce4ae66a9a8d85130592eee81b35fe2aeb16bfc071d892904e1050000",
    ],
    [
      "ETag",
      "gxjdFgoovPE5l3qpGwuiNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc554d14ec230147ddf5790fa0a09e89860e2c350541426b0f9640829dbdd9c76eb683b0921fcbb6d37642f9a2592f8b2f6de736e4fee6dcf7646a3813ee23440570db48aa3750e6c7b168198a9cd1c784e04974b46530ea8a9d82070a4d8d3c7d94dd423c946ac06c47533673d644ff6f575c1e2fe1b2458f276329271180309b88c5f75dc28f31a4b7102ea449f923c49973a6c1e61b1cd34ec7af391735f45121a68c479198fedc178884a68dffc5924c0022ff5917f93d0ebc228c5d03b5dcd210406a90fc7ae3346dfc117233d5e8e938c408bd39cf9c04b115558c011a3798619a52d996a9df75b9d6ebf6b5d5866d73cef98073aa13e16314d55c58b8bbef5051598cce9468d1859c51db0222c267e18050a2b97509d90843e55711ca0efdcbef90b71e4789659e196bb8551a9acad2a2715c60496ffa42eafe40dcb175e4fbb7c262712c709cd535153fa6efc6c9fb071e986ba4ddfdadef054b25c482fd4d4f54693a1ebd993e98fe2f2bb389a60b015c0a78c4a8f71d0ceeab4cd5ef7d26aa383536fa872a25046152c079df6b1fc633dc442e6424c38187be30b1409e94f1d050000",
    ],
    [
      "ETag",
      "PJQCg8lmwtbBlSSpNqErKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-30-1595636454214",
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
      "000002ff8d546d6fa24010feeeaf20dc97bba42aa8a834313d63b92b89da56b1bdcbe5a2c332d06d91a5bbd0a669fcefb70bbee0b569fa4d66e67999991d5f6b9aa63fd024d04f35dda7d1638efce5cb3df3f51395c10c229581ebf45a5ce5b7d60381fec8882e1ec463fb793028ab688116b04e63ac0b967382e274316f449ce52970c6ea92b0de36eaa6655bdd76b763755a66a7c40a8cc3314d1e14c35d96a5e2b4d9dcf968448c4531424a4583b0f53ede7c6a3553ceee9164a2792cdb944aa2f9b1f059cc0864942583c5bc34910be44b5c038d958d033af0bf1fd33728ac1b91ac7ea2048110962799b256d210968434ca79412e995e6550860bcffbcf4a409f3b6367e46993e1afaf2b582bb2d5370d84b65c7214799c693f6697136d954aed3b102856daed8533736484b390c6b8a4c14a1b6867dad89db89e6616360a8900454693c288077e8c157999dd0ecf7d676f7b0a45029954dd962d7b4617ccbe61fba1df2361bf6df9a181bedff77b16b47d83d81dec043e42952153da251e129640405a41bb0b608468db214010da3de8633fec9b66170806a6dd320353df326cf6fd3c739ae139152913743b5dfd76e67aced29b2da6a3a1e7547b0f410eefbc747fdcf9514b991c52d5ed476379e328e5944953c51edda9e7cc8623cfbda9d8908f6a8c119097f9a37a5621c4020f68e0b0c60cf984056a39fad5e5dcf5dccbe9707c6028dec9d5ae52c8b23f7bb3879eaa6cde4b7abcea720b6554d9ec76f44a6e73f22ecb0dc4f93b344fdbb06e1e71d4fefff5b756e1d6e5056e5de9d70b67f65b618b9ccacc30448e0939a87de26d2a6099fec41f8c2cdf9dbb42c88bdfeb8b4c86e599107150271ccba3a1ebb2d592d0320cdbde9d9702f2ec4d85695add5dc59b93575ab8c624dbcda23cfd72909b234b79c54e0153e5f2914fdde9cfc27c6d53fb0708b54ceab7050000",
    ],
    [
      "ETag",
      "aQpQsPuW5kca8C0gHksq3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1595636454214"
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
      "83",
      "30",
      "14",
      "7de75790fa2abac1b644933d3075d104bfa67b50b32ca55c90095cd6962959f8efb605b6bdb43de7dcdbdb73bab76c9bfca44544ae6d12a6c9b6025e9f25205ff56101a2caa4505b89850072aeab41d2445747b79f13fcdb3e2efdca0b3fd87c7739f7bd643a6dab04fb869caababd420ac729649150f8cb60bbe38d56d01cf48deb353703cd0d9d26ebd268f3e0d97f3f15728c8cf0b40c027f16dc914e6accbe526b631eb2c17001317028181c9f5372dc00930fc6b7a079998123b0e20c44374437b672c2b12a29477414e578036738be1a4fbcc9683c7287a3be3c4346658a85ee58be91c37c8992660bfcd5dec9b00d87b7b08da20f82c427e99ce6a3a49d6e762f5c8f1cd8a63badac1ead8ef366b504f1c251d911604c78ee80f479dca0f62b751c9257606846d587dda7527131cd04588df50fd4f0025c1c020000",
    ],
    [
      "ETag",
      "dDZ6oxqMUAu3bYcFv/FA3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b7282300000d0bb642d0e840a4d77200c149002d244dc30294dda1851be02767af73a7d37783f805615ebfb72b84a76012f60a110adab75787db6b5942b674f857c2917814ffba6d03dbfb4f0e5d3cc683d18a374e5b2c56f980b32e1ba8bebed87420249fd8d9d4c49a677965b35d4ade88c28e14c0fadc420274b84e47d561bfe8dbba8a563ee2b6da48deacdbca77624a10b15543d6944502bcd6eb39e4a7e3cd8d094919b178127bc3810e714c6be8f5e43ddf10ff5aef6becc1ce2a3c19df6ee18b79d8aa602ac009b1bd1b1be148f99be416805fe9be5b034ec71b519ed58077eff00a32ca0e305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-31-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54616f9b3010fd9e5f81d8d72681044852295ab394764881ac84b4aaa6091963a85bc0149b4c5595ff3e1b48024b55f51bdcdd7bf7ee9dedf79e24c92f380be54b490e70fc5aa2e2eddb3309e40b91410cc422f3f882d25b535374abfcf13cdb8d46f6d352bf9bcfeb2a5ca12948f304f529290b88e8e57633880b52e6a020a4cf09fb63b5afea33dd181b9aae8d54adc65294442b9cbd088627c6727a391c1e740c6242e204811cd30124e9313edc8d8679419e116474d86d3be49de8f0f3c6df130201c3249b6f37b58892a2c24729c08990714287c155977e80413a8879f50e4304202465c684b49a06922cc2715954e49ce99d0779b8d27cfc6d05e48db932979e044952a6999f81145d482160c0676f39926edcb52d59cecddab5179eb576fccdf2a7692f06cbf56a6b3b1be9e1a7e99a120341822aac3497aeaa3f87ff548aaa6e21a20c6795264f645b4a78b6f1d1fa6085470a41c25551d494f913c500ea549905513081d174ac07918282601a4c74300e1438d390160608b4192a65351e64dc28a08df570a2faa39931f1b599a1fb53040d5f3550a04c152d9c404d6ed0fbe32c7f0bccd035a639a1b831597e702dcff43d77eb2c179ed99e3b0265c2ae6be5dda93be3306e505be967969c29ca0b4cb8a86a9d96e399ee62e959f72d19fc6cad500ce0dbe6559cae0824149dd0a0e0bb62a8b0492816233b0bdbbc3e81ab93f2eb504479c5efa3ced338bc50ecbf9ae56cffdd3e1e3f581d2beaddd45179e3b996732bb792fb8f69ee41527ec0b36bc272cedd7ae20ed30e57efffaf3fbd560f99dfd5469e7cb735dd4781ad7222e3a208152883a7ae5f38ba0258a7bff014f1f2c3c32010fc6d38f6a78c87f92d82f4d41d16a8be53b876be21d4959162a807420e2cd879853ad30f15678f83e8855294b18317f523511bb9ef482a5b722a9828e7f7c06996b8efed7bff00d46e6cf3e1050000",
    ],
    [
      "ETag",
      "YkemGE405IuBj9v22MhC5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1595636454214"
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
      "8230147de75798ee55133f807d243ee8a61b8bba89b897c5980a1764038a6d71318bff7d6d41e5c58564267ba1bdf79cdb937bdbc3b756aba1cf30f1d05d0dadc2609301dd5d05c0a7726303cb22cec492928401aa4b36701c48b6fb6c4d6776fb794cb76cebbef1a1bd318641b79bb398bb86180bdeb78844ec8710794cc4ef2aae157985253806752289b23859aab07e82f92e55f0ccb1adc963198989a790c97c34eaf547035440fbfa79110f73bc5447fe4d42ad0bad10431f6465830f1412174e5da7947c80cb2d355e86e3348206231975811522b23087034ab21453421a22d5e8b41a2de3d6303ba66ee8ed967ea047c4c53c2489ac98cfd0519f138e239b7cc9112333bf039a87f9c40fa3407ee912ca1312d05616871e3ae6f6f55f88d6c431f512b7d82db45265655531293f8c60f94feae24ad658bcf06adac533b990388e4996f08ad2c3d14bef828d0b37546dfaa1e70c2e25cbb8f042455dc71a0f664e6ffc7a565c7c172713f4771cd82b25c2630c94b35a4dfdc6b8369be8e0d47b229dc8a55139cd40a55d2cfe584f2117391f470cb4bdf6033eaf6e901d050000",
    ],
    [
      "ETag",
      "cJIQSR2JMrvsvcVtFRq5Fg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-32-1595636454214",
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
      "59",
      "6f",
      "9b",
      "40",
      "10",
      "7ef7af40f4a595621bb0f111c94a2d87a6483e528c935655652fcb4036c62cd95dd2a691ff7b77c1076ea2286f6666be636676fc5cd3347d4dd2503fd7f480c40f39b0a70ff734d0cf5406048a55e6afdd5f7fef661efb6399f0b0ceaf82c9d57038189455a44073b4c912a8739a330cfc7c316fc48ce6196294d62561bd65d54dbb6f775a9db6ddb6cc7689e590446392ae15c39d10193f6f36f73e1a31a571022823bc81e9e6106f3e5acd8cd17bc082374f659b528937df16be48284682d074b0989726720e6c091b441265e3880e83cfa7f40d82368d58563f120c08639aa742592b69304d2312e7ac20974ccf3228c385e7c36725a0cf9db133f2b5d16c31f53fae422460f549435c5b2e19f03c11da176f36d15699d4be431cf84abbfdea788e8c301a910496245c6903ed421bbb13d7d7ccc24621110217242d8cf82848a0222fb3bbe1b9afeced40a1489090aabbb265d7e820b367f48328e8e2a8d7b283c88020e8055d1bb50203f7dbd00e03405506a1b44b3c4a696a4418a1aed98b90850d30a2a8d7e999a18d31021c8215601b8556d7b6f41dc3f6d0cf6f46045c129e514e76d3d56f3dd77796beb7988e86be53ed3d42727897a5fbd3ce4f5a12724855b76f8de585a38c112a4d157b74a7bee30d47be7b53b1211fd51862849fe60fea594528e1704423863620804d68a896a35fcfe6aeefcea6c3f191a17827d7fb4a2ecb7e1ecc1e7baab2f94fd9e9aacb2d945165b3d3d62bb9edd9ab2c3728c95fa179dc8575f384a3f6ffaf5fb50ab72e2f70e74affb670bc1f0a5be454c6830818a4f8a8f68eb7a98065fa1d7f30b27c7fee0a212ffea0cf850ccb33c1fca8",
      "8e199447433665ab25a16db42ca3b5279440265e56b4cdcebee2c5c92b2dd8402af6b3284fbf1ce4f6c4525eb153c054b97ce453777a5598af6d6bff00c7f363fab7050000",
    ],
    [
      "ETag",
      "z59kX7pRrx21eqkuGbMGAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d515d6f8230147de75790ee752443c1644b7c98c64ce7c71467966c21a6e285e1808b6d9953c37f5f5b407d697bceb9b7b7e7f46c9826f989b32d7932c9268ef605b0e35d0462a10e1ef022115c6e39661cc8bdaa064123553d1d2fe71ffd747efa7c3d2d6cfbed6f3cdd0f0fdd6e55c5836f48a9ac3b4b24711843b2e5127f696cd6bcd6329a82ba71bd667aa0bea1d6c431d7da68f63e781978b7528a5b2dcd5693c9736f3220b554eadd976ba99fb2c38d072130c802b83e2867b883408cb4734ed33c018b63c102e0f510d558c911c322a70cd19294d56e59b6fbe876da1dc7755ab6d3942718501163a63a564b72992f50d0c4c383724fec2a1e56c12a8c260a12dee4739b90947e5573875ca8b23ef94683fcebb0de51009f33945e386807edd60369c2e8a3322b54168215a0e980caff1ac64272214d3818a5f10f3dc7b2801b020000",
    ],
    [
      "ETag",
      "MKSPWCmPzZJzQ11OxKMqHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcfdb6e82300000d07fe9b39a01b2c1de1442b90d68200abc34c0ea608865a580add9bfcfecfcc17980aa69c834614e7b7203ef4054aab96b7601358e0abaf0f12bf43368ba6a59c853a2c5a93378db7a5f040809c8e9daaa5782e8b2c259c6a9e22491b5dc5fdd569ba5e5bbdde25cf5b24b853fc185a9dc43c5678d87612fa4484afb20c55ba4b56a66483ece346dfc64768c1f85381867d6b265eeb9376e799c391e3b7b398b9867a4113be97655c93a094db4c297f032073da187155a1cbbd93732a0b0695e900fb001e43e768c4cb87bce34dd3437e0bf89b918c9f37a2415230cfcfe015945aac905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-33-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6e9b40107df75720fa1a5f62c09748566339a441b5718a71a2a8aad0b20c7813cc1276491a45fef7ee02b6a18ea2bcc1cc9c33672e3bef2d45519f4812a8178aea93e83987eceddb23f5d533e9018e22e979886fade9661cf792bfcb8d71477fda91db9f4e26651429d00c6dd318da8ce6190676b15e75a28ce629ca286d0bc2b6a6b5cf8db131d006baa1f7cff512cb200ee72479920c1bce5376d1edee7574224aa318504a5807d3edc1de7de977d38c3e02e6acdb4cdb159958f7f3c4df638a11273499ac57a5889c41e6c1169158ca38a203ffb249df2168db8944f40bc18030a679c2a5b49206d32424519e15e482e95d1885b9d07cf8ad19d495393767ae82699c6f132f415b385302c491c7df5250ae9de542b1eceba5b398bad6d2f656b31b7331edcc96f3f5c25e29f737a6632a1cf931145865a25c167fb6f8291415d902609c248526577a6b4a84b7eaa3f5c1080f149244a862508579c3de009d8f7a633ff487381c69861ff6c0f747fed0409adfc3631df4c00754672894957894d06414f6347f00034f3334c3d321083c140ec01bf82343f7879a06e148add0bb432daf19e17045584a19a99aacde3b966b7aaeb3b66753d7acd71da23ce657a5f266d58d72b868505de9672d39519466840a51c5382ddb359de9ccb5ee6a32c46ecd2142f86df52cb72b443183231a6562561cb2050de460547bba30af8ee062536ef7414c44fc3ee83c962302e5fc8b5a4ee6dfcce38ac56ab4a29c4d695557ae63d93fd49a73f731cd1d8af30f785e2ab39a8a6e6d44875983abf5ffd79f562d872ade6a254ffdb5369d07892d7cd2e340081924f898f50bab2b81a5fb0ba74884ef0f834488db70c8cfb8308b5784d9313bcea07c53a4ec7c4568f474ad7f2014c08c9f4618fa781f71721c642ed842c2f7bd288f44d9c85d43525e9353c064b878077635c45d6bd7fa071854ab4de1050000",
    ],
    [
      "ETag",
      "YlPIAh9l0nxOh5VoKNgT2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1595636454214"
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
      "8230147de75798ee719af901e896f8a0d36d26eafc80a7c5980a174581b2b66c31c6ffbeb6a0f2e2423293bdd0de7bceedc9bdede1a0954a68e7472e7a2aa195bffe4c80eeefd6c0a772330396049c892526110354966ce0782dd9fa43cbb193c9aa36a9dbf7466f177a46b33b6db7531673361062c13b8848c49e0f81cb44fca1e252965758844390273a2448c268a9c2f205e6fb58c1736b3618bfe69190b80a19dbc361a73beca30c3a96af8bb898e3a53af26f126a5d689918da92d50c3ca0103970e93aa6640b0e1fa8f1321cc601541849a8032c13918529bca624893125a422529546a352331e0db361ea865eafe9277a401ccc7d12c90a7b8ecefa9c701cccc8b71c3132d33ba069984efc340ae4e52e213f21017dc962df45e7dcb1fc0b7130b64c3dc7cd760b2d575958554ccaf30358fe93bab8920d162fbc9876f64c6e248e439244bca0f4cbf0bd73c3c6851b8a36ddeb58fd5bc9322ebc5050d71a8cfa73ab339a5c1517dfc5c504dd3d0736a144788c817256adaab78ca6594527a73e13e9442e8dca69022aed60f1c77af3b9c8793860a01db51fcc097d931d050000",
    ],
    [
      "ETag",
      "4/8cUuPb1P2U+5Dkmf57BQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-34-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54594fdb40107ecfafb0dc975622710e1f09524423705b43122071a0555525ebf5d82cd85eb3bba64228ffbdbb760ea720c45b3c33df31333b7969689afe40b2503fd6f480c48f05b0e74ff734d08f5406048a55e6029d5d3b2347e423c3391f0dce07713ffb793d1c5655a4447394e60934392d18067ebc98b762468b1c314a9b92b0d9339b1d6b60d93ddbb4cc6ec7acb01c92684cb207c5702744ce8f0d63eba315531a278072c25b98a6bbb8f1d4357246ef010b6e1cca1a52891bef0b9f2414234168365ccc2b130507b684149144d9d8a3c3e0eb217d8ba0b415cbea278201614c8b4c286b150da65944e28295e492e9450665b8f4bcfbac05f4b93b764f7d6de24d3faf422460f545435c5b2e19f02211dab7d9e5445be552f90e71e02bedf6873b736584d18824b024e14a1b6a27dad89b78bed6294d9402217041b2d2868f82046ae232bb199df7c6d676148a0409a9ba295b3a6d1b75faed4110050e8efa3d2b88da1004fdc0b1502f68e38109661800aa3308a55de15146338cdb5dd386ae65861045eda08fec5e60761d27ea77650e3b561f773a61a46f18d6bb7efe3222e08cf09c72b299ad7e3bf37c77e9cf16d3d391efd67b8f901cde59e5feb0f38396841c52dded7b6379e52867844a53e516bda9efce46a7be7753b3219fd41862849fe78fea514528e1b04723865210c0263454cbd1af2ee79eef5d4e47e33d43f94aaeb6955c96fdde99ddf75467f39ff3c355575ba8a2caa66deab5dcfae84d961b94146fd03c6dc27ae780a3f1ffaf3f8d1ab72eef6fe34abf5eb8b35f0a5be65466061130c8f05eed036f5301abf407fe5e64f9f6d81542defb4e9f0b19966782f95e1d33a88e86a455ab15a1d5b64cbbbb259440265e5738d6aee2d5c12b2d482113db5954875f0d727d60a9a8d92961aa5c3ef2a937fd5e9a6fac1bff00f850c2d0b5050000",
    ],
    [
      "ETag",
      "KaDQ7A7tpA/7JA9J9g8nXQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1595636454214"
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
      "cb6ec23010bce72b22f7da487981d44a1ca04dd55611025a7aa91032669306926cb09d2284f2efd84e025c6ccfccaed7333e5bb64df659b925cf36d964e9a1067e7a4841cef56101a2cea5505b85a500f2a8ab41d25457ff04c9b29eeea3e8c03e836386f22dce67f3d1a8ad12ec0f0aaaeace0a299c64906f85c2bf06db1d6fb49216a06f5cafb919686ee83479aa8cf63afe8eeef902b7869f2ee3783c8923d2498dd9576a6dcc3b76b85940021c4a06b7d7541c77c0e487b12d6851e5e008ac3903d10dd18dad9c72ac2bca111d453941e87883a7c130188683d0f7c2be3c47466586a5ee587e91eb7c8992e60b3c6aebc46bb3e12d6c93e87320c95d38f7f128e95f37fbaeef3aaeefb81eb96a4d775a593d5adda64e4e12c48ca33225c058097c97f4a9bca0762d752892d7606846d5afbd67527109cd05588d750185a5450c21020000",
    ],
    [
      "ETag",
      "V3fUuNkEEqcJ3wiotFLlPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfc97282300000d07fc9599c58a0437a5314641981c826970c4b3a50560125c1e9bfd7e9fb83f702699ed36922735fd30e7c019e7ea06dbeb57ae5b0f3725cf0f98ecc67d369a52b71c7a8032b2c4fbdbe0681d85c943b8bf0d58b3cdb5d6f0fa5bb165e2d85fec9c786aaa86b6b1f251ce07d9235fcb933fda52e74250b2de7dc56622198384a4a64dc60665aad3f6a569dc211b2014e213c0e5c602aa948eb12162bd07fe8b6a0d928b9483f728af7932b3534a6282b161d3a194b7074fe1e34bd578564893f895c796003281baa914ea47acf4419a10df86f92990ff47d3dd074a423f8fd03786dcbb805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:46 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-35-1595636454214",
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
      "ff8d54db6e9b40107df75720fad8f8820dc6896435964d5a2a1bb71827aaaa0a2dcb4036c12c61975451e47fef2e601bea28ca1bcccc3973e6b2f3da5114f591a4a17aa5a801899f0ac85f3e3dd040bd901ee028961e64dba3791c2f56dfbd05ffbc5d928771389c4da7551429d10cedb204ba8c16390676b5ddf4e29c1619ca29ed0ac2eec8e86ac6a5311e8d75431f6a7a856590444b923e4a867bce3376d5ef1f74f4624ae3045046580fd3ddd1de7f1ef6b39c3e00e6acdf4edb179958fffdc45f128a1127349d6e3795888241eec30e9144ca38a1c3e0ba4ddf2368d78b45f433c18030a645caa5b48a06d33422719197e482e9551885b9d47cfc6d18d48db5b4e69e826952ec523f453bb85042c491cf5f32506edcf54ab19d9bb5bb9a79f6daf137f36fd66ad69baf97db95b351eebe59aea5701424506295a9725dfe39e2a75454660b817192969a3ce96d2811deba8ff61b233c524812a18a411de69b8331d22683cb200a4c1c4d4646100d2008268169a05130c0973ae86100a8c9502aabf028a5a93932b4898647fe5033b0af07a1e607a639f0751db4c88c34cdd4276a8dde1f6bf99b130e0bc232ca48dd64f5ceb53dcbf7dcad339f7956b3ee0815095f54cadb55b7cae1a2414da5efb5e44c5196132a4495e3b41dcf726773cfbe6dc810bbb58418e197cd93dcae08250c4e68948b5971c857349483519dd9ca5a9cc0e5a6fc38043111f1fba8f3548e0894f32f6b399b7f3b8f2716abd58a6a369555dd78aeed7c551bcefddb34b72829dee079aecd6a26ba752f3acc5a5c9dffbffe741a3954f1566b79eacfade5fe92d8d2273d2e4490438a4f593fb0ba1258b93f708a44f8e1304884b80dc7fc8c0bb37845989db2e31caa3745aaced784c660acebc6815000737e1e618cb543c4d97190b96007293ff4a23a125523f72d4945434e0993e1e21d38f510f79d7de71fcbd44c2de1050000",
    ],
    [
      "ETag",
      "aII3CggDMJTDt+ULij6d2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1595636454214"
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
      "e7",
      "57",
      "2cf5754b9c027e243ea04e5d825337341ab32c1d5c36b4506c2fea34fbefb685395e34242ef185f6de736e4fee6d0f9f56ab459e932c22872d324d662f0588c5d60cf0466f86200b86522d39cf2490b66603d29966e71f770ff7ec447a3ecea7ef69913ddf60f0767454b2643887942adea78a541c27c022a9e24713b7aabcc1329a823e31e4ac48b38909db6b1817b98147c1b03f38af23298f0c32b8f57defd8ef910a5ab67f168928d28939f26f12661d5b951879e2d321c420200b61dd752ef81384d837e39534cd1974242f4408b212d185253c13bcc8a9e0bca3529d5da7d3750e1c77d7b51d7ba76bafe88c8714139ee98adb11f9d6478e940df99b1e3171cb3b1065584e7c350a12d72ea13e2105bdeae22422dfb965fb17627f10b8768d5bedc656adb2b1aa9a549c3098fc93baba9239552fbc9976f54c36244e535e64d850faccbff236d8b87243d3a64fbda0b7295989ca0b0d7583fe656f147897d73f8aabef786d82e30582bc165c794c82715677dbde77f6dc6db272ea09d74e446d541405987448d51feb2241958b2993602dad2f05b3b6a71d050000",
    ],
    [
      "ETag",
      "pzVYXlCsALthbxmunkQtTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-36-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d546d6fda3010feceaf88b22f9b5620695e804a5587da6c8d06b48340374d1338ce25759bc4a9ed74aa2afefbec8497b05655253ec0dd3d2f77e7e3b9a569fa3dc923fd44d343923c94c09e3edcd1503f521910285119cfb8ec7f9ecd99eb668b3be7fbec215b106b787a5a57910acd5156a4d0e6b46418f8c97cd649182d0bc4286d4bc2b6e5b64d67e0b8966b3bf6b169d7580e693c22f9bd62b815a2e027ddeed64727a134490115847730cd76f1eee371b760f40eb0e0dd43d9ae54e2ddb785cf528a9120343f9dcf6a132507b6840c9154d9d8a3a3f0cb217d87a0ac93c8ea478201614ccb5c286b350da6794c929255e492e9590665b8f2bcfbd908e8336fe49d07da78f8f3e32a4202569f34c4b5e592012f53a17d9d5e8db55521956f1107bed26e2ebda927238cc62485258956daa976a68dfcb11f686665a21288800b9257360214a6d01097d9cde8fc57b6b6a350244848d54dd9b267b8c8ec1b83300e7b38ee5b4e181b1086fdb0e7202b34f0c0063b0a01351984d2aef12897b3e999f8388a8dd040e0586668d96e0f1cdb302c7760f530760c1323d335f40dc37ad7cf5f46045c105e504e36b3d56fa67ee02d83e97c723e0cbc66ef3192c3bba8dd1f767ed09290436aba7d6b2c2f1c158c5069aadaa23f09bce9f03cf0170d1bf2498d2041f869f6a01e558c520e7b34622803016c4c23b51cfdfa6ae607fed56438da3354afe47a5bc965d9ef9dd97d4f4db6e0a9385c75bd853aaa6cbab6dec8ad8f5e6559a0b47c85e67113d6cd038ed6ffdffeb41adcbabcbf8d2bfdc7dc9bfe52d82aa732538881418ef76aef789b0a58a7dff1f722cbb7c7ae10f2de77fa5cc8b03c13ccf7ea98417d3424ab5bad091da36759ee965002997859213fdb8a1707afb420835c6c67511f7e3dc8f581a5b261a782a972f9c827fee45b65beb56efd0345310a58b5050000",
    ],
    [
      "ETag",
      "E0H8+SUr66mVj5KSqmVi3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1595636454214"
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
      "8230147de72b48f7b8111195654b7cd0cdc42564994c9f16632a5c18ae70b12d1a62f8f7b505d497b6e79c7b7b7b4e2f966d93bfac88c9ab4df6597aac80d70f29c8953e84202a2685da4a2c0490275d0d92a6ba1a035c3caf964552afbdc7e339af4f0318aca6d3b64a44bf905355775148e12403160b857f0cb63bde6805cd41dfb8db7133d0dcd069b22e8df63e5b2feef91c63c37f6e8260360f16a4931ab36fd5da98771c701f42021c8a086eaf29391e20921fc6b6a079c9c01158f10844374437b672cab12a29477414e58c7c67387999f8237f3c197bc3715fce30a232c342776cbec975be44495988676d9d0cdb6c780bdb24fa1c487217ce7d3c4a3ae966cff55cc7f51ccf2557ade94e5bab47dbdbd4792d417c7154a604182b23d5dba7f286dab5d4a1485e81a123aa7e6d9949c5259409b01aeb1f8477945e21020000",
    ],
    [
      "ETag",
      "oLoE7QHnfyT2+qwmyv/e/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d07fe9b31a1448606f968b9b4c84711178694a29b702456093c6ecdf6776fee03c012684ce335a38a3037803021ff41dd9395c837bbfdc5332bd1b9236844eaa72af540ed858ec7bbe44f57aaa9a58ac919717995a6d9d34c964d7168f98e0806797b8be1587c28f7fbc3091d9e51bbaacd790d967e6f93846cb1c09a3cbadbec4082e788461101470e07a747c48364ec4674b0ca9fea842e49ae5dd855311a05c525adbc76cd866e74114e536edd2919f7aebebca06bd63aec5e3eb2d23324b14adf5c106d0756c263aa3e63593555ddf80ff265ac4485f5748f14427f0fb07f528c8f805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-37-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6f9b30147dcfaf40ecb50da481402a456b94d23553425642da4dd3846c63a85bc0149b545595ff3e1b48024b55ed0deebde7dc733f7cdf7b8aa23e932c542f151592f8a5c4c5db97270ad533e9c11cc4d2837ee219d26d9486db1978cc34e3eeb5f81e4f267514a9d00ca47982cf192d0b84d9e566dd8f0b5ae6a0a0f45c109e0fadf381393647c391611a1703a3c6329c440b923d4b8647ce7376a9697b1dfd98d238c12027ac8f687ab06bdb0b2d2fe813469c69ddb49ac8c4b4cf137f4d28029cd06cb259d7224a868b00a7802452c6111dc2ab2e7d9f80b41f8be82d41182044cb8c4b69350da25944e2b2a8c805d3bb300a73a5f9f0db32a86b67e1cc7c05d1a44cb32003293e5342c041c0df72acdc78aba532776f56de72eacf576eb09edd3acb697fb65a6c96ee5a79b8753c47e10026b8c22a13e5aafa73c54fa5a8ca1662c6495669f2a5b7a544789b3ece3f18e181429208550c376181a58fc0c0d6c73082168aeca109231d436843cb0443a8a3b1818d1062d066a894d57890d10cea0308a08982a18e8681311ca1c08eec71608556a89b4664d820541bf4ee50cb6b4138be262ca78c344d561fbcb9ef04beb7716753df69d71d8132e1d7b5f26ed59d72b868505be9672d39519417840a51d538e7aeef78d3993fbf6fc910bbb5c031406feb17b95d1148183ea2412166c571b1a4a11c8cea4e97cef5115c6dca8f7d101311bf0f3a8fe5884039ffaa9693f977f3f862b13aada867535bd5b5efcddd6f6acbb9fb98e61e24e5073cdbc6ace6a25b8fa2c3acc3d5fbf7eb4faf9543156fb591a7de6d1cef97c4563ee9f170840b9ca163d6ff585d09acddff718a44f8fe304884b80d87fc8c0bb37845881db3a302d76f8ad49d6f084ddd3646177b42012cf8698435b0f61127c741e6c229cef8be17f591a81bb9eb482a5b722a980c17efc06d86b8ebed7a7f01c6459d21e1050000",
    ],
    [
      "ETag",
      "cXeCc08cmdvCahn/4QwrJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1595636454214"
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
      "af",
      "20",
      "f5514844c740131f1011898008e3c91052b7db9c76bbd9761a42f8efb6dd90bd609648e2cbdabbefbb7eb96bbf6dac5a8dbc47894fae6ae4250a3f32e0eb9310e493decc40644c0ab5a498082075cd064943cd4e3a4ebbc7824186fdc1780cbd87d387f349787d9db384f70a3155bc8d8a541c44c07ca1e26713d78abcc1121a833ed14396c5c9ca84f53d2cd7a981e7ee6c38199491187d834c16a351f766d42705b4ad1f16f1a9a42b73e4df24ccbab40a31f2862f33088043e2c1beeb94e31b787268c62b689c326808ccb807a210d185391c72cc52ca111b2ad5b868379aadcb9673e1d82dfbbc69efe80c3d2a234c74c5624e7ef4254aca66f8a5474c9cfc0e781ee613df8d8204a54b284f48419fba38f2c94f6e5bff85389cb88e5de216bba555aaacacaa2615440c56ffa4aeaee495aa175e4dbb78264712a7316689ac287d377aec1eb171e586aa4ddf76ddfeb16485545ea8a8eb0ec7fdb9db1d4f0f8aabef726f829bb50431e5a83c26c038ab7966775a6de78cec9cda43ed44a98d2a790626ed51f5c7ba8fa4ca059409b0b6d637a9f94ade1d050000",
    ],
    [
      "ETag",
      "n867ClfGuoEGMMeCK+K2Ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-38-1595636454214",
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
      "94",
      "5d6f9b301486eff32b10bbd9a425240de1a352d445095b99d2a44b48bb6a9a12430ed42d606a9b565dd5ff3e1b48026a57f56e77703edef39c63fb3cb51445bdc5e9563d56541f477739d0c70f37c4573f4b0f701449cfd5d19d6d9efef427cbf48fa3dd66596ea0ef0fc36119858b6c86922c863623390d801daf969d88923c439490b6106cf7ad766f600f8cbea10ff4a39e5ee63288c3294e6fa5c235e7193bd6b41d472722248a016598750292eceddafd919651720301675ab3ac262a31ededc227310910c7241dae962544ce80ae214138961887ecadffa529dfc128e94422fa1e07808280e4299768a54c40d21047392dc485d293300a73c1bcffad19d4a53375c69e329eaf66dec70d4aa4dce6938298b25e536079cc95af8bf999b2c944f56bc4806d94cb5367e1080b25218e618db71b65a89c28a3d9445136bbbfa97be67a4aafc02a4a6e81719c16601ef263a8e1086f354cf79573dc4b4811c4054315b636bb06ea595ddb0f7d3308adfec00fbbe0fb966f0e50dfef06b60efad6075457e0b276998f52312dc3e85bd0d511b201e926a050b7f41eb291656c7b2618e8a81b0686a9ab95c2f3be9f078a394c30cb08c3d5b4d5cb85eb396b6fb19a8d479e53ef3d4462949392bed979a3252e8654a77d6b2c2f88328a89802aced59d79ce6234f6dc8b1a86b864538850f0b8bc93d72c4431834336a228010ef48c6ce5e1a8e7f3a5ebb9f3d9687a5028eecdf92e9289b05f7bd8434f7535ef316b1e75790aa555621afbd936ba69aa5ca0387f45e6be32abbd8646eb15b5ff4a37f8075ef5f5bb551357c5c2a8b0d41f2b677125730b9ff42c20040a697028f78ea723134bf73bf6a108df6d27992116d4be3ee3c22c5e71c00ed5030ae59bc649d56b2138e8da86b97bfd3291f29711b669ed225e6c28590b1248f96e16e5a62a07f9dc40ca6b38459a",
      "0c176f70e6cebe15f0ade7d65f2f49053a66060000",
    ],
    [
      "ETag",
      "Y2q97HXbDSnzE/kppu6aJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1595636454214"
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
      "48f7e848c604a34b7c980bd94c885136e7b2c5980a17860297b5650b31fcfbda02ea4bdb73cebdbd3da727c334c9312d22f260927d9afc54c0ea9b04c44a1d02e05526b8dc4a2c38905b550d8226aa7a303ebe5739ae271e1b2d071bf763137de26a3a6dab78f80d3995752789248e53c8222ef197c666c76bada039a81b773ba607ea1b3a4dd4a5d6e68b37efd90baea51c232d2dd6beff38f33dd2498ddeb7726df4530eb80f20060645089707950c0f108ab976ce695e666071ac5808bc1ba21a5b3961589594215a92b28663cb7627ee6838725ce7de76faf20c432a522c54c7fa959ce70b14340bf04fb927761b0f6b611b461f0589aff2b94e484abf6df3996abad3d6e8d1f6326c560be04b86d20b07edc019df913e8c27546685ca42b00a341d52f95f2fa9905c4c330e4663fc03dfe8bfef1b020000",
    ],
    [
      "ETag",
      "+8kVumoU9Er6P+W5XWdZoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fe9b3982120656f051c848bc120375f48c1aa08e3524a0197fdfbccce1f9c1f80cb928c63ceba9ab4e013ac78a76dcbaddb415d3c9552a00651e8882e9adad81cf619a4e69e1b8a64582972fc8333ae430085921b68c249ee34677bad0b552adc16d75791a7cef92a450c42abf53b8ea8fac864ee7386cc087e33d5629dddd04a18bcac9e4ab9a766881a7579dd4e754e844b223ce24366b6c7bb5be877fcc4e9fc91cb0b55bc69e4461cb2d4f7f8dcdc9e6266723716e63485c9e5cb768f6ca7ce6003c8d257948c79f59e498aa66dc07f33676b4fde579d604a28f8fd034af5178305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-39-1595636454214",
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
      "14",
      "7e",
      "f7",
      "57",
      "10f6b58a28786962b646696baab80b6877b3d990613cd06981a1ccd0a669fcef3b5c54589ba66f70cef9bef39ddbbcb724497e22f14ebe94648f04cf19a46fdf1ea9275fe41ee028c83d2635a21b747fd7bbb9fba53ca7feed76be8d5e2793328a146886a2248436a3598a815d6eec4e90d22c4129a56d41d8ee8fdbaa3ed607fd81a66b3d552bb10c427f49e2a79ce181f3845d2aca414727a0340801258475308d8e76e5a5a724297d04cc99d24cab884c4cf93cf1f79062c4098d271bbb149131485d881009731927f4cebb6ad277088a3a81887e211810c6348b792eada4c134f64990a505b9607a1746612e341f7f6b06d93696c6cc91300db328766314c185b4431cb9fc2d01e9da5aafa48579bdb6565367b1365d7b766baca69dd97ab95999b6747f6b5886c4911742819526d255f1678a9f4251916d078c93b8d0e4e4de9a12e1adfab8f86084478a9c44a8625085b9c3ee00a9a3eed8f3bd21f6477dddf3bbe079236fa8a3bed7c5630db49d07a8ce50282bf128a6318cfa43157a63571b60d5d5babd918bbc21b8ba3ef4748c875ebfa7ca157a7face535251ce684259491aac9f2bdb5700cd7b136e66cea18f5ba7d94857c5e2a6f56dd28878b06d5957ed6923345494aa810558c73613a86359d398b6d4d86d8ad250408bfd9cff976f928647042a354cc8a43baa23b280e6dba32e62770b1293f0e414c44fc39ea3c952302f3f917b59ccdbf99c7118bd56845399bd22adb8eb5306fe49a73ff31cd1685d9073c2f95594e44b71e44875983abf5ffd7df562d872c6eb59227ffdc18d6ef",
      "1c5bf8728f053ea410e353d62fac6e0e2cdd5f788a44f8e161c811e26d38e6675c98c5156176ca8e53286f8a949daf08755555c7a303a100a6fc3c4253fb8788b3c721cf0511c4fcd08bf291281bb96f48ca6a720a581e2eeec0ac86b86fed5bff009c98dc4ae1050000",
    ],
    [
      "ETag",
      "NoEmGaWK2GKX/qrfHVDVmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5545d4fc230147ddfaf20f55188a0637e243c0c459d0e5418c1680829db1d4ebb75b69d8618febb6d37642f982592f8b2f6de736e4fee6dcfbe8c5a0dbd454980ce6a681e2dde3360cbbd058807b51902cf88e0724969c201d5151b045e28f6fecde5e4ba499e6ee3c475f8e3a4e51d04bedde9e42ceebf408c25ef4b46320e23200197f1b38e6b455e63098e419de85392c5c94c87f50d2c96a98647ded0195c959198061a198c5dd7eeba3d5440abfa7691000b3cd347fe4d42af53a31043af743e841018243e6cba4e197d055f387abc1cc7298106a719f3811722aa3087178c662966943664aa7174da68b54fdbd69165b6cdc396b9a613ea6311d144558c47e8475f5081c9907eaa11232bbf039687f9c4d7a34061e912ca1392d0872a8e02f4935bd57f213a03cf324bdc6237354a959555e5a4c288c0ec9fd4e595bc60f9c2ab6917cf6447e238a659222a4a5fba77f60e1b976ea8daf485edf57625cb85f442455dcfe9f7469eddbfdf2a2ebfd38d09ba4b01fc9e51e9310eda59ada679d23eb69a68edd473aa9c28945105cb40a77d2cff58d79190b910130ec6caf80674046ef31d050000",
    ],
    [
      "ETag",
      "+JFWH0lZKmnLIsXW1T/dcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-40-1595636454214",
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
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5f",
      "81",
      "d8974d6b022440924a5117a5ac45ca4b4748ab6a9a12630c750a98da90aeaaf2df670349889a55d5b46f7077cf8befec7b6d4892fc88135f3e97640f874f39a22f9fd6c493cf440665201499c9b5b241f7b7e3b57bb3f61ff4e7dff4eaeb3c1c0cca2a5ca01988d3083519c92944ec7c316f8594e429a08434396153579b9ad137cc8ea91b7a5bd34b2c435130c6c9a36078c8b2949d2bcace472b24248c1048316b4112efe3caa6ada494ac11cc98722cab7025a6bc2f7c111108324c92c1625e9ac819a24b14031c091b07b4ef7d3ba66f6110b7425ebdc1100108499e64c25a49034912e030a70539677ae5411e2e3cef7f6b01796e8dad912b8d668ba9fb79056241b7fa2201262d9714b13ccaa4efce6c22ad52aefe0018622be9eeda722c1ea124c0115a627f250da40b6938bd940e75656c6c4f6c57d20a7385b08f588693c29e0bbc08d54cf16cd552fbc434f7148204645ca12a5b765513683db5ef055e1706bd8ee1052af2bc9ed73540c753615f47baef215067c884768907094990d157fd3ee86b5da01b1d5f855ecf843d8ee9823e046dcdf441a0f2ac5c316cf7e779a638439798a584e1aae7f29d63bbd6d27516d3d1d0b5ea670f006fe865e9fef8e44747ca7893ea6edf6bcb1b4729c5849b2aa66b4f5dcb198e5cfbb666835fb5310a017c993f89cb168088a1031a5010a30cd109f1c570e49bd9dc76edd974383e3014b7e76657c978d9cfbdd9c399ea6cee4b7a3cea720a6554d83475b996db9e9d64b905517e8266538565ed",
      "88a37182ed5fdccd5dc79e5efd077bc3940fee2f16abaf5f8d1abfcc5747654dfeb1b09c7b812d7222e3a0005194c083e2079e8f0096e90f6c465ebedb5302c157d55e9f653ccc5f326407754851f9ae715c4ea32434b4b66e7677841c48b3b71566bbb7ab78b3ab84168a5192ed7a51eeacb291db234b79cd4e0113e5fc1d4eab016e1bdbc61f467c6b4270060000",
    ],
    [
      "ETag",
      "MH/veYVLjTPjdh4wxrG+Sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1595636454214"
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
      "0000000002ff4d51d16e8230147de72b48f73a92e9d0e9121f74716ac2c8c63499598ca9f58238e0b2b6cc10c3bfaf2da0beb43de7dcdbdb737ab66c9bfcc4d99e3cdb641747bf05f0f22e02f9a10f01882291426d396602c8bdae0649235dedcf76a7b7f571f9fa85f3a158ac0fde40b0f168545709768094aabab3420a8731247ba1f0b7c176c31b2da329e81bb75b6e069a1b1a4d96b9d116fe723a9b06b7528a7b23f92bcf1b4fbc2969a4caec1bb556e62947dc051002878cc1f54139c72330b930ce054df3041c810567209a21bab196238e454e39a2a328c77d703abd61afffd8777b6eb7e3b6e509322a63cc74c7ea935ce64b943409f0a4dd934e1d0faf611d461b05096ff2b94d48497fbab94b2e54d59c36568b36d76193528278e7a8bc08300edcc11369c378416d56ea2c242fc0d08caaff9ac75271214d045895f50ffe51f3fd1b020000",
    ],
    [
      "ETag",
      "NGbwMYjTFXoH9sIYhL8scA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb642d4e944fa13b50500151f955dd640844ca2fa4011cc0e9ddebf4dde0bd4092a6a4eb50df5684824f30256b6d992e9d5635569714b95e2ea3e96a439b0de7d0fbd1a3edf7090b390d15a58c379978bce1a95923afc732bc549162c0badedf0f1c99921320316a492ddc1c4cf1b9ca9a517ad60383a198b020c68f4cb19efbc1f3dd61dc0cc1f521f72ce73bb5b720a6ee475056279e3966f465ba31f1add5dc527b8ea95ef07b88ca5c876aea47ad41a1bc4b443c0b4d75a4f450c2a68d677d2b810520232b38e950f19e89b2a62dc07f13f51323efab41124e38f8fd038269d16305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-41-1595636454214",
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
      "546d6fa24010feeeaf20dcd7fa8282d526e6ea29bd9228f600db34970b59d6816e8b2c6597364de37fef2ea0c2d934fd42d899799e79666677de5b8aa23e9164a35e286a40a2e71cb2b71f8f3450cfa407388aa427b45c96bfce6936efdf3cdcad17f7b757a35faf934919450a3443db348636a37986815dacdd4e94d13c4519a56d41d8d6b5b6668c8de160a81b7a5fd34b2c83385c90e449323c709eb28b6e77afa313511ac58052c23a986e0ff6ee4bbf9b66f4113067dd66daaec8c4ba5f27fe19538c38a1c964ed96227206990f5b446229e388de04974dfa0e41db4e24a25f08068431cd132ea5953498262189f2ac20174cefc228cc85e6c3b166505d7361ce3c05d338df267e82b670a66c10473e7f4b41b972564bc5b2af56ce72ea592bdb7767d7e672da99ad16eba5ed2a77d7a6632a1c0531145865a25c16275b1c0a4545b60d304e92429327bd3525c25bf5d1fa6484070a49225431a8c2fcf3de1069a3de380883731c8e064610f6200846c1b98106410f8f75d03701a03a43a1acc4a384267a7fa46983e1c6d721141f8c7b7e600c03dfd06068183006d0476a85de1d6a79cd088739612965a46ab27ae7589ee97bceda9e4d3db35e7788f298cf4be5cdaa1be570d1a0bad2af5a72a228cd0815a28a715ab6673ad39967ddd66488bbb58008e137f759deae10c50c8e6894895971c896742307a3dad3a5393f828b9b72b30f6222e2ef41e7b11c1128e75fd47232ff661e4f5cac462bcad99456d5f51ccbfeadd69cbbcf696e519c7fc2f35299d55474eb41749835b85afffffd6bd572a8e2ad56f2d43f6bd3b997d8c2273d0e849041828f59bf717525b0747f631589f0fd629008b11b0ef9191766f18a303b66c719946f8a949daf080d6da0f70e840298f1d30863aced234e9683cc055b48f8be17e592281bb96b48ca6b720a980c17efc0ae86b86bed5a1f9f3376a9e1050000",
    ],
    [
      "ETag",
      "fISsuwDorD2PhWULYVF8Bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1595636454214"
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
      "147ddfaf20f51512d16d7e243e808292cc893013134348ddee70daedceb693a0e1bfdb7603f6a25922892f6bef3de7f6e4def6eccb6ab5c85b9245e4bc459e93c57b017c75b00079af3713100593422d396602485bb341d285664f736447be3f8c1f4f9dc41b2eaf06c5e3e7f2e2a26489f00552aa785f2a52719c008b848a9f4cdcaaf206cb680afac4105991667313b677b05ce5069e0693917f5d47528c0ce23f785eafef0d4805addb3f8b4454d2b939f26f12669d59951879c5e709c4c0210b61d775cef115423932e31534cd197404163c045189e8c2125e702c72ca113b2ad5b1bb9dae73e6b8c7aeedd8475d7b436718529960a62b1ea664ab2f515236c1a51e3171cb3be065584e7c330a12d72ea13e21057de8e22422dbdcbafd0b71e407ae5de356bb9955ab6cacaa2615270ce6ffa4aeaee485aa17de4cbb7a267b12a72916996c283df4ee7a7b6c5cb9a169d357bd60b02f592195171aea06a3dbc134e8dd8e7f1457dfd9ce04fd950431e6a83c26c038ab7b689f3a27ee21d938f512b513a536aae405987448d51feb26912a175326c05a5bdfd29e9ecf1d050000",
    ],
    [
      "ETag",
      "Spol2NNFfX85iLFwDEuXzw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-42-1595636454214",
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
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "7e",
      "cfaf40ec65939a3b105229eaaa946e4869d211d2db3425b631d42d606a9b565595ff3e1b4842d4ac9aa6bdc139e7bbf81cfbbc35344d7f2469a01f6b3a24d1538ed9eba7070af52395c102442a133afdf15d7ee5f1b979071ee1cbcdad79731e8d46651529d01c24598c9b9ce60c617ebc98b72246f30c304a9b92b069f49a5d73685a7dcb308d5ed728b11cc7e184a48f8ae15e888c1fb7db1b1fad88d228c62023bc8568b28db79f7bed8cd1078c046fefcbb6a5126f7f2c7c12530404a1e968312f4de41cb3254e0089958d1d3a805ff7e95b0424ad48563f13840142344f85b256d2209a8624ca59412e99de6450860bcfdbdf5a409f3b1367ec6be3d962ea7f5e8144d1adbe68806bcb25c33c8f8576eecd2eb45526d5ef01c77ca55d7f773c4746180d498c9724586923ed443b9d9e69bbba3236712f5c5feb16e60ae1007341d2c29e0f608c6ba664b66aa97b609a5b0a45028454a8ca96838e05ba766708433840a1dd3761d8c110da7060823eeca0a1818d00625067104abbc48394a67dbb03ad9e1958b06359a68183de60080d64f7ba5660774c640e0d6458f640af18d6dbf3bc3022f019e119e5a4eab97eedb9beb3f4bdc5747cea3bf5b3874036f4ac74bf7ff2bd2309d9a4badb8fdaf2ce51c60895a68ae9ba53dff14ec7be7b55b321afda044700bdce9fd4650b41ccf10e0d1848b0c0ec82066a38fae56ceefaee6c7a3ad93114b7e77253c965d9cfadd9dd99ea6cfe6bb63fea720a6554d9b40cbd965b1f1d64b902717e80e6b90aebdd3d8ec601b67f7137f73d77faed3fd803991cdc1f2c565fbf1a357e5dae8eca9afe63e1",
      "78b70a5be454c6c3216638453bc5bf783e0a58a6ff6233caf2cd9e5208b9aab6fa5cc8b07cc988efd411c3e5bb2649398d92d0ecdabda1bd21944026de5798467f53f16e57292d9ce0546c7a51eeacb291eb3d4b79cd4e0153e5f21d4eab01ae1bebc66f29cc1a9470060000",
    ],
    [
      "ETag",
      "fE3CZuVRsS5ZakbwXY5XFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1595636454214"
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
      "83",
      "30",
      "14",
      "7d",
      "e7",
      "5790fa2ad14df6a1c91eb685b825cb54740fc62c4b2917640217db22ce85ff6e5b60db4bdb73cebdbd3da747cbb6c9579287e4c12641127f97c00f5731c8177df04194a9146a2b301740ae7535481aebeabfd1f47d71b3a9826aec03aba2f0f7299f5793495325d8276454d51d1552384a200d85c21f06db2d6fb49c66a06fdcedb819686e683579288cb65cbf798f9e7f2965181a69bd59ada6b395475aa936fb56adb579ca1e031f22e09033383fa8e0b8072697c6b9a059918223b0e40c443b44373672ccb12c28477414e5b87da737b81f0cef86eec0edf7dcae3c45466582b9eed8bc92d37c8992a63e56da3de935f1f0063661745190e8229fcb8494f4a39b6fc989aadbd3d6ead0f63c6c7690209e392a2f028c03773c225d1873d466a5ce42f2120ccda8faaf45221517d15480555bff89783dea1b020000",
    ],
    [
      "ETag",
      "z7AYH/Uwbw8RecwfdxOnCw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4b5283300000d0bb645d3bfc0deef809c8d0922a95bac950127e8502819446c7bbdbf1dde0fd80bc28e83ce365b8d02b78012257cc6db18d0668cba8a0cb2dc76de83e3594542737b2c8c517dce0ab32b6f50761739fed6155957aa04211dea6e0840c98767a3213f169f367a2203f43f21785de6d3d77fa65e0cb6e11491cf4e17157622c1b87339f38f2631245484bcd7dc7eb23eb9dbb120bcf860c97ee55bed713c6d7298d452565efce28a4d700b523b1e0f0b63a763779eab716f4d2c14c8c2a18a3a4ca2d0d6c00bd8f0da3336e1e335537cd0df86fe2458cf471b569ce2803bf7fe30d9c4f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-43-1595636454214",
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
      "000002ff8d546d6fa24010feeeaf20dcd72a2ae04b137335965ecd29de01b6692e17b2ac035d8b2c65171bd3f8df6f1750f16c9a7e8399799e79e665e7bda128ea0b4956eab5a206247acd21db7d5bd340bd921ee028929e976da63ff5b5b749ba5edb290577f7d37b1c8f46651429d00c6dd2189a8ce6190676bd745b5146f3146594360561d3d09b1d7368f6f49e611add8e516219c4e18c242f92e199f3945d6bda41472ba2348a01a584b530dd1ceddab6aba5195d03e64c3b4fab894c4cfb3cf1f79862c4094d464bb7149133c87cd820124b1927f42ab839a76f11b46945227a4b30208c699e7029ada4c1340949946705b9607a1746612e341f7f6b06d5b566d6c453308df34de227680357ca0a71e4f35d0aca9db3982b53fb6ee1ccc7de7461fbeee4de9a8f5b93c56c39b75de5f1de722c85a3208602ab8c949be2cf163f85a222db0a182749a1c993de9a12e1adfa38fd6084470a49225431a8c2fc7ebb873a83f63008833e0e07ba19846d088241d037911eb4f1d000631500aa3314ca4a3c4a68827508cc5ed8f501f54cdf30ba863f001cf81db363a22ee821ea74d50abd3fd6f296110eb784a59491aac9eaa333f52cdf7396f664ec59f5ba4394c7fcb6547e5ef559395c34a8aef4b3965c284a334285a8629c53dbb39cf1c49b3ed46488dd9a4184f0ce7d95db15a298c1098d32312b0ed99caee460547b3cb76e4fe062537e1d829888f873d4792a4704caf917b55cccff3c8f2716ebac15e56c4aabea7aced4fea1d69cfb8f691e509c7fc0b3adcc6a2abaf52c3accceb81aff7ffd6dd472a8e2ad56f2d4df4bcb7992d8c2273d0e849041824f59bfb0ba1258babf708a44f8e1304884b80dc7fc8c0bb37845989db2e30cca3745cace5784666768f6fb074201ccf865c4406f1f222e8e83cc051b48f8a117e591281bb93f9394d7e41430192ede815d0d71dfd837fe0191f5a537e1050000",
    ],
    [
      "ETag",
      "kvr3Y7/wCpjjNpoeSyKTWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:21:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1595636454214"
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
      "7ddfaf20f5514840c644131f10a76200f9180f6a0829dbdd9c76eb683b0d12febb6d37602f9a2592f8b2f6de736e4fee6dcf3646a582dec3d8439715b40c83550a6c7d128018abcd04784a04974b42630ea8aad82070a0d8ed64d55d9e3e3d7eade2c143dd7e7e1e924f31bebaca58dc7d85084bde464632f643201e97f18b8e2b795e63318e409de8529246f14287d5032cd68986a7cea437bc2b2211f534329cf5fb9debbe8d72685bfd59c4c3022ff4917f93d0ebdcc8c5d01b5d4ec00706b10b87ae1346dfc0153d3d5e8ea384408dd394b9c073115598c101a3698219a53599aa99cd5aa375d1b29a96d932cf1ae68e4ea88b45486355319ba2bdbea0029309fd5423465676072c0bb389ef4681fcc225142724a10f551c7a689fdb567f21f6868e6516b8f96e6e142a4babca49f92181c53fa9cb2b79c5f28597d3ce9fc991c47144d3589494beed3f768ed8b87443d9a66f3a8e7d2c592ea4174aea3abd813d753a83d18fe2f23b3f98e07a2d808f18951ee3a09dd5a89bedd6b955473ba776a972a25046152c059d76b1fc63dd8742e67c4c38185be31b59aee39c1d050000",
    ],
    [
      "ETag",
      "8pqCb+YOzqnMJ0EZZNlwtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-44-1595636454214",
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
      "02ffa5945b6fda3014c7dff91451f6b269051272012aa10e41ba46e2d24268374d13388e93ba4de2d476a8aa8aef3e3be112545655db5b722efff3f339f679ad298afa88d3403d57541f474f39a22f9f1e88af9e490fe220929eabeceb78fce32bbb5d3f47d7713b362e754bbbe9f5ca285c6433906431aa33925388d8f962de8828c9334009a90bc1ba69d675ab6bd9866d5a664b37cb5c86e27084d347a970cf79c6ce9bcd1d472322248a11c8306b4092ecedcd75ab9951f2802067cde3b24d518935df2f7c1113083826696f312f217286e8122500c712e3901df8df8ee51b18248d4844af3144004292a75ca2953290a4218e725a880ba5576114e68279ff5b31a87367e40c3c65305d4cbccf2b9048b9d517053065b9a488e531572e67d3b1b2ca44f57bc0105b297757cecc11164a421ca3250e564a4fb950fa93a1a2ac02c051f93f72c7aea7e805585134408ce3b440f3801fa30a90f06edbe99e98e45e428a002e28b661cbb66603bda375fdd06fc3b063587ea821dfeff86d0b18be06bb2632031f81aa0297b5cb7c9092d4ef84beed1b5dd486a6090c0b6aa8636bdd20b434cd685b060c6010e82054b70a9bfd799e29e66888594618def65bbd9bb99eb3f4668bc9a0ef39d5b38740347358d21f9ffce8485c34a94afb5e5bde1065141301554cd69d78ceac3ff0dcdb0a86b866231401f8327f92172d043143876c40418238a26312c8e1a8d7d3b9ebb9d3497f7450286ecef52e9289b05f7bd8c399aa6ade4b763cea720aa55562daa65af16dce4eaadc82383f21b3de9a55fd48a37642ed5fe8867288ff0fd7d25a5a5d6b8925f017caedd7ef5aa5882a36c7964ebd5938b39f32b7f049cf0c8588a2141eca7ee005c9c4d2fd81c528c2776b4a66884db5afcfb8308bc70cd9a13aa4a87cda382907520a5a2dcdd6ed9da048a4fc6d44bb6bed22deac2a590b2528e5bb5e942bab6ce4e60829afe01469325c3cc5893bf95ec0d736b53fe6a54f5e6f060000",
    ],
    [
      "ETag",
      "Hp+MMX+sVvwgPl7l3F150Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51d16e8230147de72b48f73a92e1c06c4b7cd08da80921ca747b588ca9706138e0625bb619c3bfdb16505fda9e73eeeded393d19a6497eb232262f26d965e9a10676bc4b412cd521045ee782cbadc29203b957d52068aaaaf1e3ed305ef9d380c78bd9e0df2b3f97933a1d8dda2a1e7d434165dd492289930cf2984bfca5b1d9f15a2b6901eac6ed96e981fa864e13c74a6bf360e54dbdf0562a30d652b0f6fdf1c4f74827357adfc8b5d14fd9e32e84041894115c1f5431dc4324e6da39a7459583c5b16611f06e886a6ce594615d51866849ca721ccb769fdde1e3d0719d81edf4e53946546458aa8ef53bb9cc1728681ee29f724fec361ed6c2368c3e0a92dce4739b90947edbe60bd574a78dd1a3cd75d8e428802f184a2f1cb403e7e981f461bca2322b541682d5a0e988caff9a65427209cd39188d7106d6cd7f001b020000",
    ],
    [
      "ETag",
      "oVDqATLGNsdPH2xEnWQBug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "6e",
      "83300000c0bff81c229b00c2bd41d8549606d104e10b32d4a41002665faafebd51e707f303689eb36148c7f6c11af006362ae2637e745b55476111fbad84b8a105b1715132abd34f6a1cdd6fab6d4fe3de13fa81cdf6ea90069e51e3d7758037ec40783509dcedc2f74227e4ddac0b11677b3ab3828afa942d621e79169a4807b7625e92fb73b11cc714d2b67e5705fa2c954a9ea144be95b24a0cb5dbbd558658a0c1780bb4096986891bbb33c28c4767f7e22f9f43245661d6734c12e9564024ba0fef2b53c101b095973d1bd2f2353bc9181fc07f331d37ce5e579dd19ef5e0f70f40c130bb05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-45-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545f6fa240107ff75310eeb50a2aa8343157a3b467aa7807d8e6ee7221cbbad06d91a5bb4b7ba6f1bbdf2ea0c2d9347d8399f9fd9999dd7d6b298afa84d38d7aa9a8218e9f7344775f1e49a85ec80ce220969987dead767bdf47f65f7b476f9d27fde6d7acf73a1e9755b84033b0cd12d46624a710b1cbb5d78929c9334009690bc2b661b6bba6650efa03c3347a5da3c43294440b9c3e152a9c67ec52d30e3e3a312171824086590792ed31aebdf4b48c92470439d39ab29a5062dac7c25f130201c7241dafbdd244ce100dd016e044da38a137e15593be83c1b6138bea170c118090e42997d64a1a48d208c7392dc805d39b088a70e1f9f85b0ba89ebdb0a7be0249926fd320055b74a16c000701df6548b976574b65ee5cafdce5c49faf9cc09b7eb39793ce74b5582f1d4fb9ff66bbb6c24198a002ab8c95abe2cf113f85a3426d8318c769e1c997d99a1391ade6387f6785470a49225c31549505437d00ba23dd0aa37008a351df0c231d85e1281c9aa01fead03290b10911a83314ce4a3c48490a061134a3613f0807160a0c080701b02c2b8086c8e860646e745dadd0fb632faf147334c32c230c574356efddb96f07bebb76a613dfaef71d813ce1b3d279b3eb463b5c0ca8eef4a3919c39ca2826c254b1ceb9e3dbee64eacfef6a36c4d95aa018c09df72c4f570412864e6840c5ae38a24bb2918b519dc9d29e9dc0c549f97e2862a2e2f7d1e7a91d5128f75ff472b6ffa68e2f0e566314e56ecaa8eaf9eedcb9516bc9fdfb347720c9dfe179a9c26a26a6f52026cc1a5cadffbffeb46a1aaab8ab953df5c7da767f4a6c919319174588a2149e543f717425b04c7fe22912e587874122c4db70d4675c84c52d82eca40e292aef142e275f119abdaed5d30f840248f959454fb786878ab3c7416aa12d4af96116e523510e72dfb094d7ec1430592eee81532d71dfdab7fe01f60e0350e1050000",
    ],
    [
      "ETag",
      "h2K/KW3eExEyrKNk0GZD2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1595636454214"
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
      "20",
      "f5514844b7f991f80082ba08c8c7f4c51052b6bb31ecd6d9769285f0df6dbb217bd12c91c497b5f79e737b726f7bb6351a0df41e253eba69a065147e64c0f29310c4446da6c03322b85c529a70404dc5068143c5de38e1e9a4eb3ff5a29cccfcd5721de677af9bdbdb82c5bd15c458f2b63292711001f1b98cdf74dc28f31a4b700cea448f922c4e163a6c1e6091a71a9eb95367f4504562ea6b64f4321874ba833e2aa15df367111f0bbcd047fe4d42af73a314436bba9c42000c120f0e5da78caec1138e1e2fc7714aa0c569c63ce0a5882a2ce090d12cc58cd2964cb54cabd5b6ae2dfbc2362df3bc6deee9847a58443451152f33f4ad2fa8c0644a376ac4c82eee80156131f1fd285050b984ea8424f4a98a231f7de776cd5f88cec8b5cd0ab7dccd8d4a656d5539a92022b0f8277579252b2c5f783dedf2991c491cc7344b444de9fbc173e7888d4b37d46dbad771fbc792e5427aa1a6aeeb0cfb33b7331cff282ebff38309bab9003e66547a8c837656fbccbcb22eed33b477ea1d554e14caa88265a0d31e967facc748c85c80090763677c011017cc331d050000",
    ],
    [
      "ETag",
      "wIg+QBdKDiylSdhbjgyCVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-46-1595636454214",
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
      "ad945b6f9b3014c7dff329107bd9b425dc7393a22e4ae98694903621adb6694a8c31a93bc0d436edaaaadf7d36e4026a5755d3de9273f99fdf39079fc796a2a8bf7016a943450df1f6b640f4e1dd0d09d54fd28338d84acf19d37afe45027e7fbccf8b60604ff4fbebcbf1685445e1329b81344f509b918242c486ab65674b4991034a485b08b6ed6edb70064ed7eada8e6d1a7695cb50124f71f64b2a5c739eb3a1a6ed393a5b42b6090239661d48d2835dbb33b59c921b0439d39a6535518969af173e4908041c936cb45a56100543748d5280138971cc8ec2cf4df90e0669672ba2ef3044004252645ca25532906431de16b414174a8fc228cc25f3e16fcda02edda93b0994c97ce507ef372095729b0f0a60ca7a4d112b12ae9c2de63365938bead78021b651aebeba0b575828897182d638da2823e54419fba78ab2615ce05686a937f302c528c9caaa11621c67255b00c204d5888477374fef85551e24a408e0026317b6eee95d60f4f54118873d18f72d278c751486fdb0e7002bd4e1c0467614225057e0b276950f329245833eb222c3304536b4404fef857dd38a1d07d94e6c4516ec826ee4d8b6ba53783af4734f3147a798e584e1ddc0d5ab8517b8eb60b1f227e3c0adf71e0331cdd38abed979a3252e8654a77d6d2ccf88728a89802a57ebf981bb184f02efb28621beb329da02f8b0bc955f5a0c12868ed98082147144672492cb51cfe74b2ff0e6fe787a54283f9df37d2413613f0eb0c79eea6ac143de5c75b585ca2a31bb87d936ba69aa5c82a47841e66e67568d8646eb05b57fa10bbc99bb0cc6b3f3ff4068eaa6ded64d710a02c31c1ad6d0b03bbaae7fff0bf8eed7cf56ada42aaec90e58bd58b98b6f32b7f449cf02c588a20c1e21def0a86462e57ec3b114e1fbd32533c4f53ad4170f9f63f1be213b56871455af1da7d58e2a41c7b4f4c1fe2ec844ca9f47983d731ff1ec7cc95a284519dfcfa23a63d5209f1a48",
      "450da74c93e1e275fa9effa5846f3db5fe00e5c47b5083060000",
    ],
    [
      "ETag",
      "Fs/7NQlax+wpuT94C0whVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1595636454214"
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
      "e72b48f73a92e990cc253eccc54c19d1c9745bb21853e1c270c0656d9971867f5f5b4079697bceb9b7b7e7f4649826f94ef290dc9b6497c43f25b0e3550c62a90e3ef032155c6e05e61cc8b5aa06416355bd7013db5d4ddffaee70fab778ff788e57102e47a3ba8a075f905159779248e2288134e4127f6a6c36bcd6729a81ba71bb657aa0bea1d1c4b1d0da6cbe9a3c4dfcae9461a8a5f9daf31ec6de843452a5f78d5c2bfd943dee7c8880411ec0e54105c33d0462a69d739a1529581c4b16006f86a8c65a8e199605658896a42cdbb17a83e1c0b975ec81ddefd96d798a011509e6aa63fd4acef3050a9afa7850ee49af8e87d5b00ea38d82449d7cba0949e9b76e3e535573da182dda5c868d8f02f80b43e985837660dfdd90368c47546685ca42b012341d50f95fd344482ea22907a332fe0171349e1d1b020000",
    ],
    [
      "ETag",
      "OJi4JTHV2J9HzOWXKgTedQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "02ff1dcf4b7282300000d0bb642d0e4229a43b40a42d9f0c8288d9640053a18c90262804a777afd37783f700655d5321c83874b4076f40961a5cd7eb60b09c4d4233b4eceecb54995571b31852384e8535e78dc630f2702c53277abd5eb608a1db60615f09bf4cfa9e42a5925d0a4f02f2435155231e268df551d016f9c7bdf177a5f008efb6c1e4121cf8517d2cc3cc4879dfec8ff11cdb919cc4275345706fe4e527cdbe9d6ba9e8e6c97d919a6b4d09169ed0ceac36d5c53ee47b629fa7b80d374d3ff651a2d7b301d582990958013ab3965341dae74c37205c81ff261925a3cfab434b4e39f8fd0367e6ce3605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-47-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d54db6e9b40107df75720fa1a1b5fc0c691acc6b5498364e30670a2b6aad0b22c64136009bb248a22ff7b770163a8a3a86f3033e7cc99cbce7b4f92e4279c06f2a524fb387a2e50fef6e591f8f285f0200622e10977ee5a7b55d25f2e8d1e779b6fb7117cbe5b2e1655142ed11424598cfa94143944f472ef0ca29c1419c809e973c2be3aeb8fb4b9369d4c554d1d8fd40a4b511c6e70fa24181e18cbe8a5a21c750c2242a218810cd301244963575ec64a969347041955ba69159e892a9f27fe1a13081826e962ef54220a8a720f2500c742c6091df8575dfa0106c920e2d12f18220021295226a4553490a4218e8abc24e74cefdcc8cda5e6e6b765901d6363ac5c0992b848522f0509ba9002c080c7de32245ddbbbad645ad73b7bbb74cd9de539ab1b63bb1cac769bfdd672a4fb1bc3362406fc18955869215d957f16ff291595d90244194e4b4daef0b694706fdd47f3831136148284aba2a80ef366c32918e9c3b91ffa3318ea13cd0f87c8f7757fa681893f847315a9818f409ba15456e1414ad269380d752d987b108cc71e1f0bf0742d0cbcd9549d05ba3f01fa18c835fad0d4f29a6386d6986684e2bac9f2bd6dba86e7da7b6bb5748d76dd212862b6ae9477abee94c37883da4a3f6bc999a22cc7848b2ac7695aae612f57ae79d792c1776b832200df9c67b15d2188293aa141ce67c550be2581188c6c2db7c6fa042e37e5c73188f288df8dce53393c50ccbface56cfedd3c2e5fac4e2baad95456d9716dd3fa2eb79c878f69ee405c7cc0f3529be58c77eb81779876b87aff7efde9b572c8fcadd6f2e4dbbd61ff14d8d2273c360a518e5278cafa1fab2b8095fb3f4e110f3f1e0681e0b7a1c94f1937f35704e9293bcc51f5a670d5f99a501baba36143c881393b8f98ccb563c4d97110b950825276ec457524aa461e3a928a969c1226c2f93bb0ea211e7a87de5fd97c11d6e1050000",
    ],
    [
      "ETag",
      "fOTD5w/nZTsgjOLBQgcqVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1595636454214"
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
      "10bdf75790f50a11b41431f1000ad8a4a04239194296765a8a6db7ee874a08ffdddd6d815e344d24f1d2dd99f7665f66765f7746ad86dea2d447b735b48ac27701747b11027f519b2930117326978ca40c505db181e350b1c75f2b816962775f86c2b90c9aa2339a6fc2bbbb9cc5bc352458f2763292711041ec3319bfeab856e43596e204d4891e8945922e75583fc17c9b6978e64eedc9a88c24c4d7c864ee38bdbe334005b4afff2ce2638e97fac8bf49e87561146268435653088042eac1a9eb8c920d78dcd6e36538c962683022a807ac105185391c5222324c0969c854c3ec345aed6edbbab6ccb679d5320ff498789847245515f3193aea73c2713c259f6ac4c8caef80e6613ef1c3285050ba84f28424f4a18a231f1d73fbfa2f447be25a66895bec1646a9b2b2aa9c5410c5b0fc277579256b2c5f7835ede2999c491c2744a4bca2f4d079ea9db171e986aa4d3ff4dcc1b96419975ea8a8ebdae3c1cced8d9f7f1497dfc5c904fd2d07f64c89f41803edac56d3bc6977ac263a38f59e28277265544e05e8b487e51feb31e23217e09881b137be01b0a1fc921d050000",
    ],
    [
      "ETag",
      "MxbuarmI9QFuL/f0u7GUjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-48-1595636454214",
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
      "4f",
      "db",
      "30",
      "14",
      "c7",
      "df",
      "fb",
      "29",
      "acec6593e83d6953a48a5525b04825853605b1696a6dc70986240eb6c3c450bffbeca497543084a63d544acfe57f7ee7d83e2f35008c079a06c63130108d1e73c29f3fdd33641c690f9130d29e2b6f22d3efe7fe62fcdbcd6f830774cf174e341c9651b4c81630c96252172ce79888e3c5bc11719667903356578275d3aeb7ad81d5ebf64ccbecb4cd325790389cd0f4412bdc499989e36673cbd188188b6202332a1a98253b7bf3a9d3cc38bb27588ae661d9a6aa249aef173e89198692b274b8989710b9207c491248638db1cf0ed0d743f90685492352d14f14138831cb53a9d14a19ccd29046392fc495d28b322a73c1bcfb5b31187367e28c7d309e2e3cfff30a265a6ef5054001964b4e441e4b70369b5e8055a6aadf4141c40adc7c73668eb27016d2982c69b00243700246de29005b89c232712f5c1fb40bb4a26c4084a46901e74314930a92f26e06eabe71963b092d02a5e2d8842dfbad1e6cdbad010a511f8776d742618b2064a3be05bba8850726310344605541eada653e4c590a6dd80990492cbbd725b88fcc6e6b80bb66882c3b287e3ddb1ed87d686c14d6bb7e7e712ac929151913743371e366e6faced29f2dbcf1c877aabd87508df3b4a43fecfca025a98654a57d6f2caf88324e99822aced6f57c67361afbee7505435db40989207e9e3feaab16c258907d36e4302192f00b16e8c3312ea773d777a7de68b25728eecee53652a8b01f3bd87d4f5535ff393b3ceaf2144aabc6ec9946c5b73e7a53e51ac6f91b324f1bb3d13ed0a8bda1f6",
      "2f746793e9e83ff1352cf32f889baf9fb58abca116c706cdb85a38b35b9d5bf8b4674642c2498af7053ff07c7462e9fec05e54e1db2da533d4a2dad5175299d54bc6625f1d7352be6b9a94dd968256c732fb9dada04ae4f27544afdfda46bcda54ba1649482ab7b328375639c8f501525ec129d274b87a879eeb9d17f0b575ed0f8b0198866e060000",
    ],
    [
      "ETag",
      "QNLtnZGTUCzIuYdkbjrUEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d51d14ec230147ddf572cf5d5250e36a2263c8812c52c2813a28921a4747773b8ed8eb61308d9bfdb761bf0d2f69c736f6fcfe9d1b26df29b1611b9b7c93a4db615f0c3550272a60f21882a93426d251602c8b5ae0649135d1d3c79d1db97bf596fa7d9e762cedcd79dd8cf86c3a64ab01fc8a9aa3b2aa4709c42160985bf0db65bde6805cd41dfb85a7133d0dcd06af2501a6d329d8f9fc7e1a5946364a4e922081e46c198b4526df6a55a6bf3940dae43888143c1e0fca092e306989c18e782e665068ec08a3310ed10ddd8c809c7aaa41cd15194e3dd3aae7fe70ffa03cff77aaed79567c8a84cb1d01d8b0f729a2f51d22cc49d764fdc261edec0268c2e0a125fe473999092fe74738f9ca8ba3d2dad0e2dcfc3460709e29da3f222c038e8f76e4817c6236ab35267217905866654fdd74b2a1517d34c80555bff72cd006c1b020000",
    ],
    [
      "ETag",
      "LD4dOX5jbqNlWUTc1JwsxQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcfdb7243400000d07fd9e7244342d137822468e392c4f262b6acb515710b8b4effbd999e3f383f00a529eefbe45997f801dec18cb6ca26ddd8b5acf11e4697ada584613f04fb2ab27291560befb51a838b4f46d91c8b04ad87f976b287ef233b3266e1b4107291d906d285c8b8d75f26372a37860e1eb51dbd9a8842963b3b6f53352f248eb86d4e3a7afd101a633d74a1fbf0831606734e25df698653c089f288889149062c4bf190b5bbb7f6ba173c6a5d60349bb1cabbc514339fe273806387eae102d5cfcce9084cc10ae0a9a11dee13fa9aed44455981ff66f29c1bfcba6a1875b803bf7fbbf4d89e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-49-1595636454214",
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
      "6f",
      "da",
      "30",
      "10",
      "fe",
      "ce",
      "af",
      "88b2af050224bc54422b82746382b08640554d53643b4eea36c469ec746215ff7db613201955d56fc9dd3d2f7767fbada169fa334902fd5ad321895e729cedbf3c51a85fc90ce6209299c7d90bbc4db9c17ee47f1fdcad0df75b7477371e175544a119d8a5316e329a6708b3ebcdba1565344f414669531036cd51b3638dac7eaf6f5a66b763165886e370419267a5c279caaedbeda38f56446914639012d64274778ab75fbbed34a34f1871d6aecbb685126b7f2cfc35a608704293f1665d98c819ce7cbc03249636cee800ded4e95b04ec5a91a87e25080384689e7069ada04134094994678a5c30bd89a0082bcfa7df4a405fdb0b7bea6988c6f92ef113b0c3575a0038f0f93ec5daadbb5a6a73e776e52e27de7ce5f8ebe9777b39694d578bcdd2596bf7df6dd7d638803156586dacdda83f47fc28474a2dc08c934479f264b6e24464cb39cedf59e189429208570c9765fec0e883ced018c1100e5038ec59303430844338b0400f1a686462338018541994b3020f129af4bbd032b135f40d60f67c1304810f8d0ef041a7dbef8061af0fcdae5ea20fa75efe6484e319612965a41cb27eefce3ddbf7dc8d339d7876b5ef10e4319f15ceeb5dd7dae1624055a71f8de4c2519a112a4ca975ce1dcf7627536fbeadd810676b812380f6eb1779ba4210337c46834cec8ae36c4903b918dd992cedd919ac4ecacf63111315bf4e3ecfed8842b97fd5cbc5feeb3a9e3858b55114bb29a2fada73e7ce37bd923cbc4fb30571fe0ecf6b19d65331ad47316156e36afcfff5bb51d1d0c55d2ded",
      "e9771bdb7d9058959319178738c3093aab7ee2e84a6091fec45324ca8f0f834488b7e1a4cfb8088b5b84d8591d65b8b853a4987c496875fb96651c090530e39715835ee75871f138482dbcc3093fcea278248a411e6a96f28a1d0593e5e21e38e5120f8d43e31fc818ab26e1050000",
    ],
    [
      "ETag",
      "hDqbFpt0sJuzYRVEbyVcQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc5545d4f8330147de75790faba4537193a131f984e5d9cb80f7c32cb52e0c29885625b348bd97fb72dccf13243e2125f68ef3de7f6e4def6f06598267a4bb2105d99c84fe2f702d8e6240631559b19f082082e979c661c504bb141e058b1875362af1fb14b3e4fdd53def527c9dc8f9debeb92c58315a458f2be6424e32801127219bfead8acf21acb700aeac4809222cd963a6ced61b1c9353cf76623f7be8ea434d488fb321e3b83f11055d0b6755824c4022ff5917f93d0ebc2a8c4d09afa3388804116c0beeb9cd1350462a4c7cb719a1368735ab0007825a20a4b3866b4c831a3b42d536dabdfeef4fa3dfbdcb67a56b763ede8840658243453152f73f4a32fa8c064463fd588915dde012bc372e2bb51a0a87609f50949e843152721fac96d5bbf1047ae675b356eb55b18b5cac6aa7252514260f94feaf24a5658bef066dad5333992384e69918986d277e367e7888d4b37346dfad6f186c792e5427aa1a1ae377a1ace3de76972505c7e177b130c3602f88451e9310eda599d33ebb277619fa19d536fa872a2504615ac009d0eb0fc633d2442e6224c38185be31bb44afdc61d050000",
    ],
    [
      "ETag",
      "EQl6jKaNlw/N/s2bPiSbgA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-50-1595636454214",
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
      "0002ffc5945d6fda301486eff9155976b3a985049210a8843a44d32d13840e42ab699ac0314eea368953db61aa2afefbec24405059d5bbddc5e7e33dcf3927f64b4351d4479caed50b450d70f49423fafcf18104eab9f4200e22e9f182ebb351e74cc7c0fcce37de1d362ca245834119858b6c06922c464d46720a11bb58cc5b1125790628214d21d8b4f466dbea5b5da36b5a66a76d96b90cc5e118a78f52e19ef38c5d68da8ea3151112c5086498b52049f6766dd3d1324a1e10e44c3b2eab894a4c7bbbf0654c20e098a483c5bc84c819a24b94001c4b8c43f63af8722cdfc2206945227a83210210923ce512ad9481240d7194d3425c28bd08a33017ccfb63cda0ce9db133f295d174e1f99f56209172abcf0a60ca724911cb63ae5ccfa613659589eaf78021b652eebe393347582809718c9678bd5206caa532f4ae1465254f1fe471ec4e5c5f69175c45cd35621ca705990f8218d57884b79aa67b62917b092902b880a8c296b6de05ed9ede0fc2c08661cfb082504741d00b6c0b18810efb2632d7010275052e6b97f92015e3ea03bd1dc2bed1ede876af13740ca36d996253bd1eb07a06346c18d8f6da502b85edbe9f3f14737485594618aec6addecd5cdf59fab385371afa4ebdf71088595e95f4c79d1fb5c4c590eab46f8de5155146311150c5625dcf7766c391efded630c45f36461180cff327f99f852066e8900d284810477442d67239eacd74eefaeed41b8e0f0ac58f73b38b6422ecd71ef6d0535dcd7fce8e575d6ea1b44accaea9d67cdbf3932ab720ce4fc86c2ab3da3ed2689c50fbaf74d63ff0aaafdf8d9ab82a5e8c0a4bfdb170663f656ee1939e190a1145293c947bc7d59189a5fb1d0fa208df3d4f3243bc50fbfa8c0bb3b8c5901daa438aca3b8d93aad742d0ead856d7da098a44ca5f47d896bd8b78f544c95a284129dfcda27caaca416e8f90f21a4e9126c3c51df45cef6b01dfd836fe02188542eb67060000",
    ],
    [
      "ETag",
      "NbF+C2+0ia4JtvNWi35o/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1595636454214"
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
      "147ddfaf58eaa32e19ba1134e1413e44120499101f0c2165bb9bc3ad77b69d8490fd77db6e035eda9e73eeeded393d59b64d7e521691279becd2e4b7047ebc49402ef52100516652a8ad402680dce96a9034d1d5a3ddad5b4edea2d570c126bd97c5f473c416cb7ebfae12e137e454d59d1452384e218b84c25f06db0d6f344673d0376eb7dc0c3437349a3c16469bce57e3c938b896728c8c345fcf66cf83d998345265f68d5a2bf3943dee028881030be1f2a082e31e423935ce05cd8b0c1c81250f41344374632d271ccb82724447518eef3a1dffd1ef3e743ddfbbef786d798621952932ddb1fe20e7f91225cd023c68f7a453c7c36b5887d14641e2ab7cae1352d29f6ef6c999aa9ad3c66ad1e6326c709420de392a2f028c03afe792368c216ab35267217909860ea9faafd7542a2ea69900abb2fe01b5b8a8351b020000",
    ],
    [
      "ETag",
      "Db+0uGMdTCOnG8FOIWDnOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d0bb645d3a943fee884e10f914344065c3041a28da818440813adedd8eef06ef0790baa64294d3f04d7bf00436a2d8fb7aef0f163c24756e7e187e94cbc6dcc9a6c5465b4e25e7ed1c18972989a4f331e0978af18362265a2909c5aa34f37d4aac1b3b7a9e8fe16bde5aa74cdd548e9c2e8551b1cce2da7ca16ba1b8d9aab3f9257ede306ebdc41c42b4f0520b1d8c219ac867638d85daf5a7dae4348d367e2f56c89738ee3d5e842bd6032eda0611f74660b6cce88edc88f8925f79cccd9d45305d801da02beb462acaee315375dbde81ff66396d8c3eae9092918ee0f70f95c2fcdb05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-51-1595636454214",
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
      "0002ff8d545d6fa240147df75710f6b57e6045a189d91aa55b13c52e60ddcd66438661a0d3228333431bd3f8df770650616d9abec1bdf79c7beec7dcf796a2a82f380dd51b450d70bccb11dd7f7b26817a253d8883587a9e67e11b0da6bf8c87ddfe8e3f7073b249366fe37119850b3403db2c416d46720a11bb59bb9d98923c039490b6206ceb5a5bd34d7d783d1ce883be3628b10c25d102a72f92e189f38cdd74bb471d9d9890384120c3ac03c9f664efbef6bb1925cf0872d66da6ed8a4cacfb79e2ef09818063928ed76e29226788fa680b7022659cd16170dba4ef60b0edc422fa154304202479caa5b492069234c2714e0b72c1f42e8cc25c683efdd60caa6b2daca9a74092e4dbd44fc1165d2921e0c0e7fb0c2977ce6aa9ccedbb95b39c78f395edbbd37b6b39e94c578bf5d27695cdbde5580a0741820aac32566e8b3f5bfc148a8a6c21621ca785264f7a6b4a84b7eae3fc83119e28248950c55015e68f7a43a0193d338882118c8c6b3d887a28088c60a483eba007cd011a840102758642598907294981160df5514ff391010c7f106a23df347b7ddf10331ae89a398286a656e8c3a996378a399a61961186ab26ab1b67ee59bee7acede9c4b3ea7547204ff8ac54deacba510e170daa2bfdac25178a328a8910558c736e7b9633997af3c79a0cb15b0b1403b8777772bb2290307446032a66c5115d92500e46b5274b6b7606179bf2700c6222e2cf49e7b91c1128e75fd47231ff661e4f2c56a315e56c4aabea7acedcfea1d69c878f691e41927fc0f35a99d54c74eb49749835b85aff7ffd6dd572a8e2ad56f2d49f6bcbf92db1854f7a1c14218a5278cefa85d595c0d2fd855324c28f874122c46d38e5675c98c52b82ec9c1d5254be295c76be22d4fbc6d0308e840248f96584610e8f1117c741e6425b94f2632fca235136f2d09094d7e41430192ede815d0df1d03ab4fe0160ea4d27e1050000",
    ],
    [
      "ETag",
      "jDdwrbCX8PqyFtPt9AWlWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1595636454214"
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
      "e7572cf5754b9c027e243ea0ce498273321663ccb27470992870b12d9a65d97fb72dccf1a22171892fb4f79e737b726f7b581b9d0e794bf2889c77c82259be97c056074b100f6ae3032f53c1e55260ce8174151b045d2ab6ef6721c3f1c2b31ffda9180e474f6ef9e85c5c542c1ebe4046256f2d2319c709a41197f1b38e3b755e6339cd409d18625a66f95c87dd1d2c5685862781ef8e864d24c34823a3a9e73997de80d4d0a6fbb34844059deb23ff26a1d799518b91575cf81003833c845dd705c3570885abc7cb6956a4d0e358b210782da20a2b78c9b02c2843ecc954cfeaf7fad699651fdba6651ef5cd2d3dc5908a047355319d906f7d8182a63e7eaa1113bbba035685d5c4b7a32071e3129a1392d0872a4e22f29ddb747f21baa3c0361bdc7a37331a95ad55e5a4e22485f93fa9cb2b79a1f285b7d3ae9fc99ec46986652e5a4adf78f7ce1e1b976e68dbf4b5130cf625cb85f4424bddc0bd1b4c02e76efca3b8fcce7626b85c09e06386d2631cb4b3fa87e6a975621f92ad53af50395128a30a56824e8754feb16e132173314d39181be30b4bfee6581d050000",
    ],
    [
      "ETag",
      "RRmcroPbL6WRUtGGNYIuWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-52-1595636454214",
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
      "30",
      "14",
      "7d",
      "e7",
      "57",
      "64",
      "d9cb261542200152097588b22d120d6d08eda66902c7d8a9d7244e6da75d55f1df67270182caaa6ada5b723fce39f75edffbdcd034fd8ea46bfd54d34312dde7883dbdff4543fd4479900091f28cbdab6fd10d6bffa69dd1633b5e60631adf45c36119458a6c0e922c464d4e7306113f5dcc5b11a3790618a54d09d8b43b4dd376ec5eb767d956c7b4ca5c8e623c25e99d42b81522e3a786b1d5d18a288d620432c25b90263bbbf1d03132467f2128b871486b48266ebc4e7c16530804a1e970312f45e41cb1254a0089958c7df63afc7408df2220694532fa81400420a4792a94b41206d21493286705b8447a9646692e34ef7e6b067d3e994ec681369e2dbce0c30a240a6ef551035c5b2e19e2792cb4cffeec425b6592fd1670c457dacdd7893f9116463189d192ac57da503bd346deb9b68f5b69ef9471ea5eb8816616ea0ae635e282a485be008431aaa992deaaa7ee9171ee2014081092a20a5bf6db3d600eda4e88c33ec483ae1de2360ac341d8b741376c43c742d63a44a08e201477990f529ada1d073b1d087bd8e90dfa9633309dae2321db26c6b88b2cbb8fd6e600f7f40a61b3abe7911181ce09cf282755d3f51bdf0d26cbc05f78e35130a9d78e81ece879a9feb0f28392846c525ded6b6d79a12863844a51c5785d2f98f8a371e05ed764c8b7364511804ff37bf5da308839da670306122410bba06b351cfd7236770377e68da67b84e2f95c6e23b90cfbb113bbafa98e163c6587a32ea7505a95cc9ea5d77c9b93a328d720ce8fc03c5466",
      "dd3cc0681c41fb1775f3c077bd2fff41de289383fb8bc4eaeb67a386afcbdb5149d3af1613ffbbca2d7ccae3238c184ae19ef10deba3124bf71b4ea30cdf1e2a95216fd58e9f0b69969b0cf99e1d3254ee3549ca69948072b7fa9dee16502632f132c219ec225e1c2bc58512948a6d2fcaa3553672732029afc929d254b8dc43af1ae0a6b169fc01b017e96771060000",
    ],
    [
      "ETag",
      "CNQXgWr0xo2Aw0lUf/Llkg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1595636454214"
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
      "5d6f8230147de75790ee71238b0aee23f16138b2b91833713e2dc6d472612870595b66d4f0dfd716505fda9e73eeeded393d59b64d76691191679b6cd2e4b7027eb84940cef52104516552a8adc44200b9d3d52069a2abe560581cb7701bf8fb982d3e8eafcbfbf16e3e1a355582fd404e55dd492185e314b24828fc6db0ddf2462b680efac6f59a9b81e686569387d26893d957f01684d7528e919166cbe9f4c59f06a4956ab3afd45a9ba76c7113420c1c0a069707951cb7c0e4c43817342f337004569c816887e8c6464e385625e5888ea21cafeff4bc276f3818ba9edbefb95d79868cca140bddb15c90f37c89926621eeb57bd26be2e10d6cc2e8a220f1553ed70929e94f37bbe44cd5ed696575687519e61f24884f8eca8b00e3c07d7c205d1863d466a5ce42f20a0ccda8faaff7542a2ea69900abb6fe0156558f081b020000",
    ],
    [
      "ETag",
      "t36nzje+EBwfcSJzDU/CkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb646d9d088d85ee08c2f0931811f96c184c034546909f123abd7b9dbe1bbc1f9033c687211bdb9a37e013885c52d76cedb60aded082242e56d50ec7e77441fae6b8885112d396a4f03d796b8e7d6fd0e24463d336151c3b352d84dd25d75ca664af19fe149b81d31007ea12859e24ac070935cd6b4b7932bf58446a5720b2407881c3b7e2a3ac20face8e22e3890327d195f68066af1b43cc5065394b996e6191dcf27066724a1b549799ef2ddea57cc2b3cdad693ea9b7e05a3a1f87f1b97fec1858013edfab9e0f59f59ac9485557e0bf998de2ce5f57ccf39ef7e0f70f6454db7205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-53-1595636454214",
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
      "5f",
      "6f9b30107fcfa740ecb50d218126a914ad514ad76809598134daa609d9c650b704536c3a5555befb6c431258aaaa2f51b8bbdf9fbbb3fdd6d134fd8964917ea9e99024cf252e5ebf3c52a89fc90ce62091998791dfefe3877cb8b9fdb572a071b7f96ec26432a9aa884233b0cd537cce685920cc2ed77e372968998382d27341786e0fce4d7b6c5f0c2e2cdbea9b568565388d17247b522a9ce7ecd230f63eba09a5498a414e5817d1ed216ebcf48dbca08f187166b4650da1c48c8f85bfa614014e683659fb958992e122c45b405269e3888ee0559bbe4bc0b69b88ea1782304088961997d62a1a44b3982465a1c805d39b088ab0f27cf86c0474df5938b34043342db75998812d3ed322c041c85f73acdd78aba536776f56de721acc576ee8cf6e9de5b43b5b2dd64bd7d736b78ee7681cc0142bac36d1aed4972b3e9423a51661c649a63c0532db7022b2f51ce7efacf0402149842b86ebb270d8bb00e6a83786311ca27834b061dcc3108ee0d00603d843630b5b11c4a0c9a09c557890d12c1af5c77d68c1109a96195a96390e01143f160496ddb7103487915ea377875efe1684e36bc272ca483d647de3cd03270cbcb53b9b064eb3ef189429bfae9cb7bb6eb5c3c5809a4e3f1ac989a3bc20549852eb9cbb81e34d67c1fcbe61439cad054e007af59fe5e98a41caf0110d0ab12b8e8b258de4627477ba74ae8f6075527eec8b98a8f87df0796c4714cafdab5e4ef6dfd609c4c16a8da2da4d15d5fdc09bbbdff44672f73ecd3d48cb77785eeab09e8b693d8809b31657e7ff7f7f3a0d0d5ddcd5da9e7eb776bc9f12ab7232e3e11817384347d54f1c5d09acd29f788a44f9fe619008f1361cf4191761718b103baaa30257778a5493af09ed416f34e8ed0905b0e02715a6691e2a4e1e07a985b738e3fb59548f4435",
      "c85dcb52d9b0a360b25cdc03b75ee2aeb3ebfc03504e5b9ee1050000",
    ],
    [
      "ETag",
      "h8S22ehp7WHZOEb/QWK1bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1595636454214"
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
      "8330147de7572cf5754b9c03fc487c60732a91cdc9309a9865e9e08268a1d816cd62f6df6d0b73bc68485ce20bedbde7dc9edcdb1e3e8d4e07bda67984ce3a6895266f25b0f54102e24e6d7ce025115c2e05cd39a0ae6283c089624ff2c7d1cdf1d189fde099337fe092ebd53a71cecf2b160f9f21c392f7292319c7299088cbf849c79d3aafb11c67a04e0c2929b37ca9c3ee0e16eb42c3f3c077a7574d24a39146a6f79ee70cbd31aaa14df76791080bbcd447fe4d42af0ba316432f74e5430c0cf210765d178cbe40285c3d5e8eb382408fd39285c06b115558c109a3658119a53d99ea59835edf3ab5ec816d5ae651dfdcd2090db14869ae2aeee7e85b5f5081894f3fd488915ddd01abc26ae2db51a0b87109cd0949e85d15a711face6dbabf10dd69609b0d6ebd5b188dcad6aa7252714a60f94feaf24a9eb17ce1edb4eb67b227719cd132172da52fbd5b678f8d4b37b46dfac209c6fb92e5427aa1a56ee04ec6f3c099cc7e1497dfc5ce04c3b5003e63547a8c837656ffd03cb18eed43b475ea882a270a6554c14ad0e910cb3fd6752a642ec68483b131be00063b6e711d050000",
    ],
    [
      "ETag",
      "MnXCK7286WL4PR3IlHbygA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-54-1595636454214",
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
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5fc1d8974d6a5e48202495a22e4ae98694262d21adaa694a8c39a85b82a90dd9ba2aff7d369084a859554dfb0677f7bcf8cebe979aa2a88f24f6d55345f548f894017bfef8403df544662045a1ccd0b14eaf5a34bb18752fc6bfad5febe99de35d0f064515c9d11cad9208ea9c660c033f9dcf1a21a3598218a575415837f4ba66f48d6ea7ab1b7a5bd30b2c87281893f85132dca769c24f9bcdad8f46486918014a086f60badac59beb763361f40170ca9b87b24da1c49b6f0b9f4514a394d078309f1526320e6c012b442269638ff6bd2f87f40d82568d5054af09068431cde2545a2b68308d0312662c27174c2f2228c2b9e7dd6f25a0ceacb1357295d1743e713f2dd14ad22d3f2b882b8b05039e45a972e14c2f956522d4ef1107be546ebf598e25228c06248205f197ca403953869373655fb7543ec8e0d8beb45d45cbdde5ca3ef094c4b93f177911545c896cd953fbc83877149204a542a22c5b98ad2ed27aadbe1778260e7a1dc30b5ae0793dcf3450c76be1be0ebaef01aa32a452bbc0a398c63d045dd3d03be01b183cdf343bd844e23bc0bdbe860cadd535fcb6d737d59261b33bcf4f465238273ca19c944d576f1ddbb516ae339f8c86ae553d7b804447cf0bf787273f38522a9a5475fb565b5e394a18a1c2543e5e7be25ace70e4da37151be2ae8d2144f879f6246f5b80220e7b3462680529b04beacbe1a857d399eddad3c970bc67c8afcfd5b6928bb2ef3bb3fb3355d9dce7e470d4c5148aa8b4d9d5d54a6e737294e50645d9119a751956b5038eda11b67f7137731d7bf2f53fd8438918dc5f",
      "2c965f3f6a157e55ec8ed29a7a3db79c3b89cd7332e340000c62bc577cc7f391c022fd8ed528cab78b4a22c4aedae9f35484c54bc67caf8e1914ef9aac8a6914844647ebb78d2da100b2f455455b335bdb8a57cb4a6ac10ae274db8b6269158ddc1c58ca2a7672982c17ef70520e7053dbd4fe00df3e464671060000",
    ],
    [
      "ETag",
      "oL4oP0ouFC6FLzExvOYRbQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1595636454214"
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
      "4d51c152c23014bcf72b3af16a0f685ac1190e828ce260472a9c1c8609e5b516d3be9aa43a95e9bf9ba42d7049b2bbefe5653747c775c95756ecc9bd4b7659fa5d81a8af52504b738840565c49bd95584820d7a61a144b4df5c11f8622e58fab6814e4f594befed1f065391eb75532fe849ce9baa3461a2719f0bdd4f8c362b7e3ad56b01ccc8ddbadb003ed0d9da6ead26af370357b9a4597528e7b2b85ebc5e261b298914e6aecbed16b639f72c05d0409082862383fa814788058cdad73c9f2928327b11231c86e88696ce55460553281e869caf3a937f0477e701b509fde0c685fce31662ac3c274acdfc969be42c57884bfc63d19b4f18816b661f45190e4229fcb84b4f4639a0372a29aeeb4717ab4390f9bd40ae49b40ed458275408777a40f638ac6ac3259285181a563a6ffeb39539a4b1897e034ce3f275c11ec1b020000",
    ],
    [
      "ETag",
      "j58NrglDTR96myC4Mz4NJQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "d07fc9b9edb0244abc9522ebd0824569bd302c0103942db13438febb8c3ff066de0f48f39c3096f0be211d78012255f02edf79bda6cb61312a022b0c2bd7160a4bae6be40bbb980bb3e3526d1a31d6b2909ef5793a05b2ca3ee680c2166a21e9823683ece0427c265f277271104219155e643be4d936c6456b63bc025ddfa15eab9e16dee4db28aa2ab55c02d71be0c873c91792193fc29b7b7cbd2bef476e41de54f7fceda65ed27dec647a89f7ec40dd6cc890315dfdefcfd2d96aa369f1da9d47a3021b401e039d084be83a5311c61bf0df4cb818c87ad5493a9109fcfe01d106bcc005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:12 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-55-1595636454214",
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
      "a340147defaf20ece3da52a1d0d6a4599b8adaa4a50a54b3d96cc8300c384a199c19745dd3ffbe33405bd81ae31bdc7bcfb9e77ecc7def288afa84b3483d53d41027cf05a26fdf1e49a89e480fe220911e835e3e7096698c7cff739593bfafc50adedc4e2655142ed10c6cf2147519292844ec6cedf5124a8a1c5042ba82b06b9add53736c5a86353007fae9a0c23294c60b9c3d498607ce7376a6693b1dbd8490244520c7ac07c9666fd75e742da7e41141ceb4765a4d6462dae7897fa404028e4936597b958882211aa00dc0a994714047e1799bbe87c1a69788e8170c118090141997d22a1a48b21827052dc905d3bb300a73a979ffdb30a89ebdb067be02495a6cb220031b74a244808380bfe548b974574b65ee5caedce5d49faf9cc09b5ddbcb696fb65aac978ea7dc5fdbaead7010a6a8c42a13e5bcfc73c44fa9a8cc1621c671566af2a5b7a14478eb3ece3f18e19e429208550cd561c1b06f81d3517f1cc6e110c623c30ce33e0ac35138348111f6e178800651884093a15456e14146b281a5ebc0b0ccc0d075140c901e05a16e5a018c220b0003eafac8526bf4765fcb2bc51c5d60961386eb26abf7eedcb703df5d3bb3a96f37eb8e4191f28b4a79bbea56395c34a8a9f4b3961c29ca2926425439ceb9e3dbee74e6cfef1a32c46e2d5002e09bf72cb72b0629430734a062561cd12589e4605467bab42f0ee072536e76414c44fcdaeb3c942302e5fccb5a8ee6dfcee38bc56ab5a29a4d65553ddf9d3b576ac3b9fd98e60ea4c5073c2fb559cd45b71e4487598babf3ffd7ef4e23872ade6a2d4fbd5ddbee4f892d7dd2e3a2185194c143d62facae0456ee2f9c2211be3b0c12216ec33e3fe3c22c5e116487ec90a2ea4de1aaf335a169e8e3a1b1231440ca8f220cddd8471c1d07990b",
      "6d50c677bda88e44d5c86d4b52d19053c264b878074e3dc46d67dbf907be5d67dde1050000",
    ],
    [
      "ETag",
      "3rFhtsn/so+xGpozwuOcPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1595636454214"
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
      "00000002ffc5545d6bc230147defaf90ec55415ddb7d800f75739be0d7b463b02112dbdb5a4d9b2e493764f8df97a455fbe2284cd84b937bcfb939dc9b9c7e1bb51ada44898f6e6b6819851f19b0ed4508e2596da6c03322b85c529a704075c5068143c59ec0f526ccdcee7869bdbeb59bc3989833ee743a398b7b2b88b1e47dcb48c64104c4e7327ed771adc86b2cc131a8133d4ab23859e8b07e84c536d5f0cc9df6478f6524a6be46462f8381d31df45001edeaa7457c2cf0421ff93709bdce8d420cade9720a0130483c38769d32ba064ff4f578398e53020d4e33e6012f4454610e878c662966943664aa61598d967563d997b66999ed96b9a713ea6111d14455bcccd0415f5081c9947ea911233bbf039687f9c4f7a34041e912ca1392d0a72a8e7c74c8edeabf10fb23d7364bdc6237374a959555e5a48288c0e29fd4e595acb07ce1d5b48b677226711cd32c1115a51f0663e78c8d4b37546dfade717be792e5427aa1a2aedb1ff666ae339c9c1497dff9d104ddad003e61547a8c837656ab695e5b577613ed9d7a4795138532aa6019e8b487e51feb2912321760c2c1d8193fa5af1f4f1d050000",
    ],
    [
      "ETag",
      "Pe8kguTBOb5WZ20Mml4SsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-56-1595636454214",
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
      "94",
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "c7",
      "df",
      "f329187bd9b4e642b824a9147551ca56a434e912d2aa9ba6c49803730b986293aeaaf2dd67432e44cdaa6a7b8373f99f9fcfb1cf734d51d47b92f8eaa9a27a247cc8217b7a7f473df5447a80a3507af4efe61df16d7a9b0743dbfa74b1bae717bf1ffbfd328a14d90cc569047546f30c033b9dcf1a6146f3146594d68560ddb4ea9ad9332ddd324ca3ad19652e83281891e45e2afce23c65a7cde696a311521a468052c21a98c63b7b73d56ea619bd03cc59f3b06c535462cdd70b9f4514234e68d29fcf4a889c41b68018914862ecb37deff3a17c83a0b8118ae815c18030a679c2255a298369129030cf0a71a1f42c8cc25c30ef7e2b0675668feca1ab0c27f3b1fb61896229b7fca820a62c1619b03ce2ca97e9e45259a6a2fa2fc4802d959b0b7b6a0b4b460312c182f84ba5af9c2983f1b9a22c7dc461a9bc93869173e9b88a569015557d609c24059b8bbc082a44c2bbe9a77364943b092982b8c0d8842d3a2d0b69dd56cf0bbc0e0ebabae9052df0bcaed73191eeb570cf00c3f7005515b8ac5de6a384266d53d302a383f53600ea6a186b5db08cc0f0c033704f373b8035e499a06e14d6bbf33c6684c33961296564d370f566eab8f6c29dcec7c3816b57cf1e20d1cdf392fef0e40747e2a24955dad7daf28228cd081550c5689db16b4f0743d7b9ae60887b368210e1a7d983bc69018a18ecb3518662e0905d525f0e47bd9acc1cd7998c07a3bd427175aeb6914c84fdd8c1eecf5455739fd2c351975328ad12d332d48a6f7d7254e51a45f91199d5c6ac6a071ab5236aff42772e87f8ff70ed56bb556fb5c5",
      "16f80be5e6eb67ad524415ab6343a77e9bdbd35b995bf8a4670a016490e07dd937bc209958badfb01945f8764fc90cb1aa76f5191766f19831db57c719944f9bc4e5404a41533734abbb151489197f19a16b9d6dc48b5d256b410c09dff6a2dc596523d707487905a74893e1e2298e9df1d702beb6aefd01ad13031270060000",
    ],
    [
      "ETag",
      "3Z5jidEoYufCE6+HvktHxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1595636454214"
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
      "2b487d95c43958d4640fce2db2489689ee45b32c1d5cb0137ab12d1ab2f0efb605b6bdb43de7dcdbdb737a745c977c339e920797ec59fe538368ae7250afe61083ac0b25f556219740ae4d35289a9b6ace3ed2305c8d91cdf90b8b1b399bafab7c3aedaa64f20525d575478d34ce1814a9d4f8d362b7e7adc66909e6c6dd4ed881f6865e534d65b5e5ea7df1bc882fa512532bad3651f4388b16a4975abb6ff5dadaa71c701f4306027802e70755020f90a8a5752e695915e049ac4502b21f621a3b3917585754207a9af28289370aee83c978e207feedc81fca0b4ca862c84dc7e68d9ce62b54b488f1cfb827a32e1ed1c12e8c210a925de4739990967e4d73404e54db9fb6ce80b6e761b346815c0bd45e245807fedd0d19c278426356992c94a8c1d209d5ff1532a5b98c16129cd6f9072e5bd3011b020000",
    ],
    [
      "ETag",
      "niZdHHN3oiDnKiRysBDPpg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb7243400000d07fd9e7c8a0d2b57d0b225222562de5c5a86cdce2b64848a6ffde4ccf1f9c2748d2940e433cb6156dc007581211add3b5d9ca8a802f47359a5d7e2282b4f151d6b7041618cd0c6b75650a3aafdf3f556c89657e82991eed5277327b9eab0ad12b1587523d20d0302ac98ac93d3908e3e8ea5de69d23f9a7d4e014298bc804ae511f074a825e1e4a054ab759f6b767585fabd0123812eaf694dc44d4b166ca77762b6bfee3a2e1109147ed5de9be8fa0d5dae9be858e119cb6735eca5ff03b7fc7d4398215a07357303ac4c56bf6b6416805fe9bf1b874f4755568c22803bf7f32f043f705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-57-1595636454214",
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
      "000002ff8d54616f9b3010fd9e5f81d8d726812624a152b44629dd3225a403d2aa9a2664cc41dd124cb1e95655f9efb38124b05455bfc1ddbd77efded97eeb288afa44d250bd50d480c4cf05e4af5f1e69a09ec90c7014cbcce4e6c7e49644f6e0fe6e342a26de8d66fd7d9c4da7551529d10c6db304ba8c16390676b1717b714e8b0ce594760561d7187775c3344683d1d0189eebc30acb208996247d920c0f9c67eca2dfdfebe8c594c609a08cb01ea6db43bcff72decf72fa0898b37ebb6d5f7462fd8f1b7f4d28469cd074ba712b110583dc872d228994714487c1659bbe47d0b6178bea178201614c8b944b69150da66944e2222fc905d39b088a70a9f9f0db08a8aeb5b4e69e8269526c533f455b385342c491cf5f3350ae9df54a59d8d76b6735f3166bdb77e7dfadd5ac375f2f372bdb55eebe5b8ea5701424506295a97259fed9e2a75454760b817192969a3c996d2811d9dac7c53b2b3c504812a18a415de68fb511d2279a1944c11847938111441a04c124181b681068d81cc2300c0035194a65151ea5c2283d3837310a7c3cd24d7fa89be0230d19beae0d4c13eb82381ca9357a7798e54f4e385c119651466a93d53b67e159bee76cecf9ccb39a7347a848f855a5bc3d756b1c2e0c6a2afdc8921345594ea81055ae73617b96339b7b8bdb860c71b6961023fcea3ecbd315a184c1118d72b12b0ef98a867231aa3d5b5957477079526ef6454c54fc3ae83c8e230ae5fecb594ef6dfeee38983d5b2a2da4d15555dcf59d8dfd44672f73ecd2d4a8a77785eeab09a09b71e84c3acc5d5f9ffeb77a7d1431577b596a7fedc58cebdc49639997120821c527cecfa89a32b8155fa134f9128df3f0c1221de86437fc64558dc22cc8edd710ed59d2295f335a13130f4a1b92714c09c9f568c27dabee2e47190bd600b29df7b513d129591bb96a4a221a784c972710fec7a89bbceaef30faa8418c1e1050000",
    ],
    [
      "ETag",
      "8PJ8VifN3YW66u8TP0ExjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1595636454214"
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
      "0000000002ffc554516f9b30107ee75744ee6313a95981ae93fa40d76ccb946469429faa283270a464e063f6d12aaaf2df671bd2f0d20a6991f6827df77de74fbef3c7abd3ebb1df9948d8971e8bb2cd9f0ae4ee6c03746f360b50554e4a2f250a05ac6fd8407c63d8fe79249e49d27d166da73fb7f36b14d132b8b9a9592a7e82826bdeab8e749c6690274ac78f36ee35798b095e803931c6bc2ac4da86fd234cbbd2c2cb70319e7d6f23052616993d4c26c1ed64c41a68df7f5f24e1c4d7f6c87f93b0ebca69c4d816a305a42041c470bc7529710b318d6d7b152fca1c060a2b19836a444c610d6f2456259788039d1a785783a177edf997beebb99f86ee819e63cc2943612a1e96ec4d9f9078bec017654753cf40d661ddf1432b58da1a42bb431a7a36c559c2de72fbfe07c4f12cf4dd16b7d9ad9c56656755dda934cb61fd9fd4f5489eb87ee1ddb49b677222715e6025a8a3f4b7c9afe08417d76ee87ae9bb201c9d4a5691f64247dd703c1d2dc3603a7f575c7f574713dcee08d45ca2f69802ebace185fbd9bbf22fd8c1a95fd138918c51495660d331d77fac1f19e95cca7305cedef90bd9a9d69a1d050000",
    ],
    [
      "ETag",
      "6+bnvtrtQibjMJjP9onbSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-58-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffad945b6fda3014c7dff91459f6b269855c488020a10ed174cbc6a585d06a9d26701c27759bc469ec505515df7d76c225acacaaa6f144cee57f7e3ec73ecf354992ef71e2cb5d49f670f890a3ece9fd1df1e413e1410c84c21304dfa0fee8af94ef9fceefcc30bd61d72be5b2d72ba370914d419c46a84e499e4144bbf35923cc489e828c903a17ac9b9dba665a66abd9324c43d78c3297a22818e2e45e28dc3296d2aea26c391a21216184408a69039278675756ba9266e40e414695c3b20aaf4495d70b9f4604028649d29bcf4a889ca26c8162802381b1cff6bdcf87f20d0ce246c8a35718220021c91326d04a194892008779568873a5676ee4e68279f75931c8337b680f5c6930998fdd0f4b100bb9e547095069b1c810cd23269d4f27236999f2eab78022ba94aebfda539b5b3212e0082db0bf947ad2a9d41f9f49d292328ebb94de09cbd01939aea4156845591f51869302ce055e842a48dcbb69a87364963b09210218e7d8842dda6a0b681dd5f202af0d834ed3f40215795ec76b9ba0e9a9d03290e17b08541598a85de6838424a8c37f1a34a0072cd56bf2cfc000be6540cb476dd8f281ee69beaf2379a3b0de9de731c30c9d619a128a371d97afa78e6b2fdce97c3ce8bb76f5ec01e0ed3c2be90f4f7e7024c69b54a57dad2d2f88d20c130e55ccd619bbf6b43f709dab0a06bf68431402f8347b10572d001145fb6c90811831948d882f86235f4c668eeb4cc6fde15ea1b83b17db48cac37eee60f767aaaab94fe9e1a8cb29945681d932e48a6f7d7254e50a44f91199d5c62c6b071ab5236aff42e73a237be6f64717ff81505775b5aeea7c17b89aded59a5dcd68a8aa7af317f0cdbf5fb54a4999af930db07c39b7a73f446ee1139e290a508612b88778c3a31289a5fb0ddb92876f7797c8e0eb6b579fbf7c86f9fb86745f1d66a87ced382e67540a9a4dcbd2f5ad204fccd89f1186aa99ed6dc48bfd256aa118256cdb8b728f958d5c1f20e5159c224d84f3d73976c65f0af8dabaf61b30d8922e84060000",
    ],
    [
      "ETag",
      "ffJc2wdv/K+Fj5gpZtWv/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1595636454214"
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
      "8230147de72b48f73a9231a9714b7c5063361366261b4f8b31152f88032e6bcb3662f877db02ca4bdb73cebdbd3da767cbb6c9775a1cc8b34df669f25301afef12901b7d08405499146a2bb11040ee75354896e8eaf8c8ffdf3c6f41e7f50cf3784f4721549be9b4ad12d11172a6eace0a291ca7901d84c25f06db1d6fb482e5a06fdcedb819686ee8345997465bad3f972fcb6028e57830d23af4fdd9dc5f924e6accbe556b639e72c27d0031702822b83da8e4788248ae8c73c1f232034760c52310dd10ddd8ca09c7aa641cd1519443278e4b9fe87834f6a8f7e87a7d798611932916ba23fc20d7f91225cb02fcd3ee89dbc6c35bd886d14741e2413ec38494f4ab9b29b9524d77da5a3ddade86cd6b09e29da3f222c038f0260fa40f6381daacd459485e81a123a6feeb35958a8b5926c06aac0bd1c0e8d71b020000",
    ],
    [
      "ETag",
      "fhrxM44C5ByAomfb53UeuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcfdb7243400000d07fd9e7c808cbecf60d216904d598ddf262901541ba6e1174faef35fd8133737e409265acefe38157ec1bbc813991f036dbda1ce93bfffa91b9bebe78cdd850b93e8eaab1a88aa053476e2b2ccff449c2389da4206287c10ce4d2afead6e5230a2a2624da3b5ee0cb90724291b37768d8d536d2d0ca580649795c706fb2d4f28b46bd588a85a5640f165ea2cfc3e9e4e3361c20bf9d7b0491f02a4cea68c93937d0ce5804981ef1b01482e87b7b524d4de476c43675889e17e92a41943b09618f1b021bc0a6e6deb13ebeaf3359c17803fe9bf130376cbdea2ce958077eff00e91657a805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-59-1595636454214",
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
      "5720fa1a5fb0c19748566339a4b564e31670d2aaaad0b21ec8269825bb4ba228f2bf7717b00d7514e50d66e69c3973d9796b699afe48d2ad7ea9e921899f7260af5f1e68a85f280f08142bcf2f237c148fd1d29a0f117b4943e698c89b4da7651429d01cedb204da9ce60c03bfdc789d98d13c438cd2b6246c5b93b6614dace160685a66df304b2c87245a92f45131dc0b91f1cb6ef7a0a313531a278032c23b98ee8ef6ee73bf9b31fa0058f06e336d5766e2dd8f137f4d284682d074baf14a11390716c00e9144c938a1b7e15593be43d0ae13cbe8678201614cf3542869250da66944e29c15e492e94d1aa5b9d07cfcad1974cf5eda735fc334c9776990a21d5c685b2450205e33d06edcf54a5b38376b7735f3176b27f0e6dfedd5ac335f2f372bc7d3eebedbaead0914265060b5a97655fc39f2a7505464db0217242d34f9ca5b5322bd551f17ef8cf048a148a42a0e555830ea0d9131ee4dc2281ce1683cb0c2a80761380e47161a843d3c31c1dc8680ea0c85b2128f529a0e24d6188e2080c83402130c08c6517f1844a83f1af7060373844cbd42ef8fb5bc3022e09af08c72523559bf7317be1df8eec699cf7cbb5e7784f2445c97ca9b5537ca11b24175a51fb5e44c51c60895a28a712e1cdf7667737f715b9321776b0931c2afde93daae08251c4e68c4e4ac04b015ddaac1e8ce6c655f9fc0c5a6fc38047119f1e7a8f3548e0c54f32f6a399b7f338f2f17abd18a7236a555f77c77e17cd36bcefdfb34b728c9dfe179aecc7a26bb752f3bcc1b5cadffbffeb66a3974f9562b79facf8dedfe56d8c2a73c2e44c020c5",
      "a7ac9f585d052cdd9f384532fc70181442de86637e2ea459be22cc4fd93183f24d91b2f315a1651abd71ef4028814c9c47c8ed3e449c1d07950b76908a432fca23513672df9094d7e41430152edf81530d71dfdab7fe01de0e25f9e1050000",
    ],
    [
      "ETag",
      "X1bktkfL5C6arwnbrN4aSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1595636454214"
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
      "8f",
      "da",
      "30",
      "10",
      "bd",
      "e7",
      "5720ef15d4a54d5276250e81a52d124bb721eca542c82413365b2793faa30821fe7b6d272cb9b08a54a45e62cfbc377e9ab15f0e4ea7437e654542ee3b64936d7f2be0fb9b2dc81f661382504c0abd945808205dc30649b7861d3e8f076c52ee3056e3f2c35c8d828711dd0d87154bc42f9053cd3be848c769062c113afe69e34e9db75841733027c6c8545eac6dd83dc3725f5a781185d3f9d72692636291f972360b46b309a9a163f7b24842255ddb23ff4dc2ae2ba71623afb80921050e450ce7ae4b8eaf10cba91dafa079c9a02750f118442d620a2b78cb51959423f674aae7ddf5fade9de77ff25dcffdd8774f748631951916a662b9206ffa12256521eecc88895fdd01afc26ae2a75190b47109cd0969e88f29ce12f2963b76df214ee791ef36b8f56ee5342a5babea49a51983f57f52d757f242f50b6fa75d3f932b89d31c55215b4a7f997d0faed8b87643dba61f8268722d5921b5175aea46d3c7c9220a1e9f2e8aebefea6c82d15e8278e2a83d26c03aab7feb0ebccffe2d3939758cc689d218557205361d53fdc7fa96499d4b2913e01c9dbfa1ecf5691d050000",
    ],
    [
      "ETag",
      "RVC8lEpwocuCp/NuBADBaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-60-1595636454214",
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
      "5b6fda3014c7dff9145ef6b249051272012aa10e95748bc4a583d06a9a26708c93ba4de2d476e8aa8aef3e3be112545655d3dee05cfee777ce89cf4b0d00ed81a42bed1c6801891e73cc9e3fded3403b531e2c60a43c4effb7295c33ed5f77d6edd6fd68b01ec4f3a75eaf8c224536874916e33aa73943989fcf678d88d13c838cd2ba14ac3b7addb0bbb6633a966db50cabcce5380e87247d500a774264fcbcd9dc7134224aa318c38cf006a2c9dede5cb79a19a3f71809de3c2edb949578f3edc217314550109af6e6b31222e7982d700249ac300ed9abe0cbb17c83c0a411c9e83541182244f35428b45206d1342451ce0a71a9f4228dd25c30efff560cdacc1dba973eb89cccc7fea7254c94dcf233801c2c160cf33c16e06a3a19816526abdf418ef912dc7e73a7aeb4301a92182fc86a097ae002f4c703007612e083320dbd91e703a3602beaae3017242de87c18c4b8c224bddb897a2796b99750225048906dd8a2ad3bd0e8e8dd200cda28ec987610ea38083a41db8666a0a3ae85ad5580615541a8da653e4c698aba2dbcd20dd370ccb66deb1d64dac8d05ba109916d62b9b0009b6d4b6f695b85cdbe9f2746041e109e514eb623d76ea79eef2efce97c7cd9f7dd6aef2194f31c94f4c79d1fb524e490aab46f8de51551c6089550c572bdb1ef4efb97be7753c1905fda1047103dcf1ed5b716c298e343366430c102b3115da9e568d79399e77b93717f7850283e9eeb5d2497613ff7b0879eaa6afe7376bcea720ba555613a9656f16dce4eaadcc0383f21b3de9a35e348a37642ed5fe8ae8693fe7fe26bd8d65f10b7bf7ed52af29abc1c5b34edfbdc9dfe50b9854f79a638c40ca7e850f01dcf472596ee771c4619be3b532a435eaa7d7d2ea459be64c40fd511c3e5bb2649d96d2958e8b57782329189d711a6e5ec225e9d2a550b273815bb599427ab1c",
      "e4e60829afe014692a5cbec3b137fe5ac0d736b53fb2801a826f060000",
    ],
    [
      "ETag",
      "6Ax3tE3nAP8v72jMDvDlUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff4d51d16e8230147de72b48f73a125430d9121fd41067e6ccc666ccb21853e0c270858b6dd9620cffbeb680fad2f69c736f6fcfe9d9b26df293970979b4499467c71af8e92e03f9a60f21889a49a1b60a4b01e45e5783a499ae66eb807ebac7175a3d7b74bb75a3794217d3c9a4ad12f1371454d59d155238cd812542e12f83ed8e375a490bd037eef7dc0c3437749a3c55465bae3f824510de4a0526465a6f56abe96c15904e6accbe536b639e72c02884143894315c1f54713c402c97c6b9a045c5c01158f31844374437b672c6b1ae28477414e58c5d67e03ff8e3d1d8f3bde1c0ebcb19c654e658ea8ecd3bb9cc9728290bf14fbb2783361edec2368c3e0a92dee4739b90927e75b3472e54d39d76568f76d761b39304f1ca517911601c8c862ee9c398a3362b751692d760e898aaff7acaa5e252ca04588df50fd11ca50b1b020000",
    ],
    [
      "ETag",
      "lNEaY0qMapK4aWW0bCdaGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcfdb6e82300000d07fe9b31a11b9746f80021308415624be348514b909ac5c6a59f6ef333b7f707e00c9733a8e78ea1bda810f20c801eef29dd7eba614e57bbea0a828ea783c9dcfdc4faea31ae99572f7505119f729b0fc6cedaf5a52fb0f9b470bd364df9268c6840ed7229250931ab8bea4b616a1eea08e480d9cf990583ac9d3e7d2b8f6ade8caa2294f0155a1d8620f6a4aa86d498c1dd6cac2e1cd7a1c64f793cce99c4cf6e3c6acfd8a5e338cdd67d0ebb034f0da2eb37f693d8e080ebfea6f919acb310bab98830da0afa16274c4d57b262b106ec07f134f62a0efab4909a30cfcfe01535f347005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:23 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-61-1595636454214",
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
      "a3",
      "40",
      "10",
      "fe",
      "de",
      "5f",
      "41b8aff685027d3169ce5e456dd2528f528db95cc8b20cb84a5964178d31fdefb70bb485ab317e8399799e79e665e7a3a528ea334902f55c517d12bde490bdff78a2be7a263dc051243d4174ddd3160f6f4f26ea1398b928fc45c3b7c9a48c22059aa16d1a439bd13cc3c0ce37eb4e94d13c4519a56d41d81e686dcd1c9b037d6098465f334a2c83385c90e459323c729eb2f36e77afa313511ac58052c23a986e0ff6ee6bbf9b66f4093067dd66daaec8c4ba5f27fe19538c38a1c964b32e45e40c320fb688c452c6111df8174dfa0e41db4e24a25f09068431cd132ea5953498262189f2ac20174c1fc228cc85e6c36fcda0aead853573154ce37c9b7809dac29912208e3cfe9e8272e5ac96cadcbe5a39cba93b5fd9de7a76632da79dd96ab159da6be5fec6722c85233f8602ab4c948be2cf163f85a2225b008c93a4d0e44a6f4d89f0567d9c7f32c203852411aa185461deb03740daa837f6437f88c3916efa610f7c7fe40f4da4fb3d3c36c0087c40758642598947094d46233dec6b3dc31b05c3d033fa3af69031363de80ffa1a3630d6839e5aa177875ade32c2e192b09432523559bd77e6aee5b9cec69e4d5dab5e7788f2985f96ca9b5537cae1a24175a55fb5e444519a112a4415e39cdbaee54c67eefcae2643ecd6022284dfd72f72bb42143338a2512666c5215bd2400e46b5a74bebf2082e36e5761fc444c49f83ce63392250cebfa8e564fecd3cae58ac462bcad9945675ed3a73fb5aad39779fd3dca138ff84e7b532aba9e8d6a3e8306b70b5fefffadbaae550c55bade4a9bf3796f320b1",
      "854f7a1c082183041fb37e637525b0747fe31489f0fd619008711b0ef9191766f18a303b66c719946f8a949daf084d43d7c6c33da10066fc34421f9bfb8893e32073c11612beef457924ca46ee1a92f29a9c0226c3c53bb0ab21ee5abbd63f5654c22ae1050000",
    ],
    [
      "ETag",
      "dgG01LYwj5a2ieCTafBofw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1595636454214"
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
      "0002ffc554514fc230107edfaf20f51512d06da8090fa8a8184085f1600c2175bb8de1b69b6d072186ff6edb0dd80b668924beacbdfbbeeb97bbf6dbb751ab91cf30f1c8758d7c84c157066c73168078559b31f02c125c2e29261c485db141d040b1dbabe1ea693d5a607c1b67d6f9dba2edfa22e874721677171053c9fb96918cfd10228fcbf85dc7b522afb184c6a04e7431cae264aec3fa01169b54c31367dc1f3d9491183d8d8ca68341f766d02305b4ad1f17f1a8a0737de4df24f43a330a31b2c48f31f8c02071e1d075ca7009aee8ebf1721aa711343866cc055e88a8c21c0e18662965880d996ad8ad46cbbab2ec0bdbb4ccf396b9a347e8521162a22aa613b2d717286834c6b51a31b1f33b6079984f7c370ae2972ea13c2109ad5471e8917d6e5bff85d81f39b659e216bb9951aaacac2a27e58711ccff495d5ec982ca175e4dbb78262712a7316689a8287d3f78ee9eb071e986aa4ddf759ddea964b9905ea8a8ebf487bd89d31dbe1c1597dfd9c104371b01fc85a1f41807edac56d3bcb4da7693ec9c7a8bca89421955b00c74daa5f28ff5180a99f369c4c1d81a3f37909ca31d050000",
    ],
    [
      "ETag",
      "7vMvJwNhomCmu52Yh7cftg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-62-1595636454214",
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
      "5d6fda30147de7575899aab65a218301da9050d7b599168d421b42bb6aaa88492ea9db240eb6c384aafef7d90ef940a2d59eb6b7e49e7bcf39b91f796e20643c91243006c85890709501dbbc7ba40be344212070a81037e891e4299e5d939fce7576bbfebd59bdb7c3e130cf22ba9ae3388da0c969c67ce083d9b415329aa59851da9484cd7ea7d9ee7deef53ff6bbbd6ea7ddcd6b3944cb91e4560c0f42a47c609a858f56486918014e096ff9342ee3e6ba63a68c3e822fb8b92b6b4a256ebe2d7c1a511f0b4293e16c9a9bc838b039c49844ca46551d2cbeecd2b7088e5ba1cc5e131fb0efd32c11ca5a4ee3d36449c28c6972c9f42c8332ac3d97afb58031b546d6b98bce27b3b17be4e158d179c70873349f33e05924d037677289bc54aa3f600edc43b7df2dc792114697248239093c3444a7e86c7c81d068726b39479e8c1da391fdc392f1917d69bba8ad0d6af1009658125f6021f944cd96c2f2a0ade729808bb24c82db8edb7b866d6cb35e4a959411ca88d05f698f5dcb393b77ed1babb2215b3e8210fb9be94a357d89230e553566380601ec9206a028ae2653dbb527e3b351c5a0bb7855647299f6ab345b7d539dcddda4b0f3c11a167954d9ec778d1af672b297e50647d91e9af5366cb477381a7bd8fea7bb8376efe01583dba7fb468dde9007b435665ccf2ce74ed56a4c210e2c8141e257826f6e494599c37ff17f90e9c5b5aa0a79b0a53e1732cc05f179a5ee33d0b92e89f359e484bd6eb7d3fb5010ca4226f664f43f15199004fbf11df1ac260c8c51e6e893ad5fbab4c373e7249123903fca727d63e01c875a6396c82e70c08b0890de6a548e13791e2209525b803cf7eeca9aeb45f04ed0571c4844f4bb48cf7680d4648be743f57268ec4c525bac9f49edf05ff7f92f9d163b785f0d4a68d98bc9d8d2bd6fbc34fe002c522898b2060000",
    ],
    [
      "ETag",
      "Td5inkmUQiXRQuWvwyq+Ig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfc97282300000d07fc9599c6137bd410b830856a12c72c9401a56854040964effbd4edf1fbc1f90624c184363d79016bc813515e01eef4fdd41e7af446895fa59608b1a10dee36b4f7d9c7455a5dfb8e9cb7303d359b569b908aae444a2bba8ab83ca50cb6f09dfd40e2f074d184ca27bc69e65e7077756c48266676e435d3d94aaad25a5fe68a225ffbe7f78aadc65b97c917adb981fcee7f88ce4a2304b3f8ed3d952d0316c33791647cef430a1c7b82c6d9f154e65aa6ca396dea55b6b880584ef4c7a5acc3bf53a063b40165a0d84a1ea3513650877e0bf89c69592d75527e94006f0fb076247122f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-63-1595636454214",
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
      "6f",
      "a2",
      "4010feeeaf20dcd72a2a88dac45c8da557738a57c436cde5429675a0db224bd9c59e69fcefb70ba870364dbfc1cc3ccf3cf3b2f3de5014f585c46bf552517d12be6690eebe3d535fbd901ee028941e8ddfa16dd4fd3bfe99b4776fb73a5b65fc311c8d8a2892a319da24113419cd520cec72b56c8529cd129452da14844d536f767ac39ea99b46cfe8768c02cb200a66247e910c4f9c27ec52d30e3a5a21a561042821ac85e9e668d7b65d2d49e93360ceb47a5a4d6462dae789bf4714234e683c5a2d0b111983d4830d2291947142affdab3a7d8ba04d2b14d15b8201614cb3984b69050da67140c22ccdc905d3bb300a73aef9f85b31a84b6b664d5c05d328dbc45e8c3670a1ac11471edf25a0dc388bb932b56f16ce7cec4e17b6b79cdc5af3716bb298ade6f65279b8b51c4be1c88f20c72a23e52affb3c54fae28cfb606c6499c6b72a5b7a24478cb3e4e3f18e191429208550cca30afdf365167d01efa81dfc7c140eff9411b7c7fe0f77b48f7db786880b1f60155197265051ec534466b9033e979184cdd3382c0f40626189e8f7db33308ba26d203b544ef8fb5bca584c335610965a46cb2fae04c5dcb739d953d19bb56b5ee006511bf2e94d7abae95c34583aa4a3f6bc999a224255488cac739b55dcb194fdce97d4586d8ad198408ef96af72bb02143138a1512a66c5219dd3b51c8c6a8fe7d6f5099c6fcaaf43101311bf8f3a4fe5884039ffbc96b3f9d7f3b862b16aad28665358d5a5eb4ced1f6ac5b9ff98e61e45d9073cdbd2ac26a25b4fa2c3acc6d5f8ffeb4fa39243156fb594a7dead2ce75162739ff43810400a313e65fdc2ea4a60e1fec22912e187c32011e2361cf3332ecce2156176ca8e5328de14293a5f12f60cc3ece8",
      "0742014cf979c4a0dd3f449c1d07990b3610f3432f8a235134725f939455e4e430192ede815d0e71dfd837fe015cc92342e1050000",
    ],
    [
      "ETag",
      "/tQavl2xAKp0ywH3sUutYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1595636454214"
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
      "90fa28242063a2090fa0a8181c30468c318494ed0e86db3adb0e4208ff6edb0dd80b668924beacbdf79cdb937bdbb39d562aa12f3f72d17d09cdfdc57702747bb5003e921b0b581270269698440c5059b281e385645faf9b89f9baeebc373f061bdbc278ccba9b51ab95b298b384100bde4e4422f67c085c26e24f1597b2bcc2221c823cd1214112463315964f30dfc60a1edb56cf7cce23217115624efafd76a7df4519b42f9f177131c73375e4df24d43ad53231b422730b3ca0103970ea3aa664050eefa9f1321cc601541849a8032c13918529bca024893125a4225215a35ea935ee1a46ddd01bfa4d4d3fd003e260ee9348564cc6e8a8cf09c781453672c4c848ef80a6613af1c3289097bb84fc8404b496c5be8b8eb97df91762cfb40d3dc7cd76532d575958554ccaf30398fd93bab89225162fbc9876f64c2e248e439244bca0f4537fd0be60e3c20d459b7e6cdbdd4bc9322ebc5050d7eebd75c776fb6d78565c7ca7271374b61cd89012e13106ca59b5aade6cdc1a557470ea03914ee4d2a89c26a0d20e167fac179f8b9c870306da5efb01695201941d050000",
    ],
    [
      "ETag",
      "+v8uNJvBW8YOwTRaaSsEwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-64-1595636454214",
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
      "6d",
      "6f",
      "9a",
      "50",
      "14",
      "c7",
      "df",
      "fb",
      "29084b932eab0a0a884d4c675ab69259ed106b9765d1cbe5406f0b5c7a2f74691abffb2ee003a6ae6996bdd3f3f03bff730ef7bc3424497e20892f9f4ab247c2c71cd8f3877beac92785073214169ef0f2d6bcb4d5c7743a8f42e6f7fc2fb34fb7c3c1a08a22653647711a4193d39c61e0a7b3692b64344f11a3b429804d436baa7a5f37ba86a66b1d55ab723944c188240f05e12ecb527eda6e6f74b4424ac308504a780bd3786b6f3f75da29a3f78033dede2fdb169578fbedc26711c528233419cca695889c035b408c485436bbcdf6bdcffbf81641712b14d14f0403c298e6495648ab30982601097356c205e9451885b9d4bcfd5b33c8536b649dbbd2f96436768f97282e70cb8f12e2d262c180e751267d712657d23215d5ef1007be94e6979663090ba301896041fca53490cea4e1f842924693b9e51c6fa3056a647fb38477645fd9aea496324b093ef08c24a550177911d4e409ef7ab8f681bd6e11050465a2ca3a6cd1530ca49a4adf0bbc1e0eccaeee050a789ee9f574d4f514dcd740f33d40754256d4aef25142930ea8a68150d70cba1d8ccd9e690074c0101cdfc08aa9e81d5551bc3ec86bc26adbcf6f4632b8203ca59caca72fcf1ddbb516ae331b9f0f5dabde7b80c4682f2af5fb9defb5948921d5d5be3596578a5246a81055eed91ebb96333c77ed9b9a0cf1d18d2044f879fa587c76018a38ecb211433164c0aea85f2c47be9e4c6dd79e8c87a31da1fc8eae37915c84fddc8addf554a7b9cfe9feaaab2d54d642a6a1c935dfeae420e50645f901ccd3da2cab7b8cc6",
      "01dabfa89bba8e3dfefa1fe41da1343dfa8bc4f5af5f8d1a5f1647642d4dfe3eb39c1f456ee92b3c0e04c020c1bb8aef783e4562e57ec78d14e19b8b556488a3b5adcf3361162f19f35d75cca07ad724aeb65101754deff58d0d5024b2ec5584a168e626e2d5d52a6a410c49b6994575bdaa41aef624e53539655a112edee178bdc05563d5f803945163597a060000",
    ],
    [
      "ETag",
      "gHX8HI1qpSWlgrd7dFU+XA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1595636454214"
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
      "ee753ce0907d243ecc8d38136626d31717636abd305ce1b2b6cc18c37f5f5b407da13d1feded399c1cd7253f79b9234f2ed9e6d96f0de27893819a9b4d02b2e64aeaa5c25202b9356e503433eec164cbde7dbe4a57591ccd54fa1a2ee6e3c368d4ba24fb86826adf49238dd31cf84e6afc65b1dbf1562b6901e6c6cd46d881f6864e53c7ca6ad3d9229a44c9b554e0ce4ab3651c3f8fe388745263d7b5fe36f6297bdc2690828092c1e54195c03d3035b5c9252d2a0e9ec45a3090dd1073b0953381754505a2a7292f0c3c7ff8380cefc260180cfca0b7736454e5589a13cb4f729eaf50519ee0c1a4277e5b8f68615b465f0549affab96e484b7fb67272a69a6eb7767ab4be0c1b1f15c80f813a8b049b2078b8277d192f68c22ad3851235589a51fdbfde72a5b99472094ee3fc03354613671b020000",
    ],
    [
      "ETag",
      "2GbcM1lZfZgLENtfD6TQBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000000000002ff1dcf4b8e82300000d0bb742d864fa0303b8aa088d29128036c086281f295168c68e6ee63e6dde0bd4196e784f3741a1ad2832fb064b2b1ced7dea023e9445030624d88b03d9eadd4ae919b84316a5c8867e684e82cd33edebf6ee9f292bc62d607fa1cbf51d24c3dc47ebc15eb93426dda195c110a6d32ea3eaa03e9078a78c7f9d5dfdeb01e6a72f09827a5322fa1af0e03575b952e186f92bdc6e41436a2d71d974d503aa5a51e4d4f6c8b04864157b1abe3a9a6dcb991f5b4db801da0b06b4d1d860f97cae2a12a9d0b5801f2bc5346784a3f3345358c15f86fa6d372279f2b2219230cfcfe0157415fa205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-65-1595636454214",
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
      "9b40107df75720fa1a1b5f00e348566339a4716be30470a2a6aad0b21ec8269825ec92d68afcef5d2eb6a18ea2bcc1cc9c33672e3b6f2d49929f49bc96cf25d927e14b06e9f6cb13f5e5b3dc031c85b96781951f5bc03777d70f0f7f35c5f9be529ec3dbf1b88c22059aa14d12419bd12cc5c0ce574e274c6996a094d2b6206ceb5abba78d347da0ab9adaefa925964114cc49fc9c333c729eb07345d9ebe884948611a084b00ea69b835d79ed2b494a9f0073a634d32a2213533e4efc35a2187142e3f1ca2945640c520f368844b98c237aed5f34e93b046d3aa1887e251810c6348b792eada4c1340e4898a505b9607a1346612e341f7e6b06d931e7e6d495308db24decc5680367d21a71e4f16d02d295bd5c4833eb6a692f26ee6c6979cef4da5c4c3ad3e57cb5b01ce9fedab44d89233f82022b8da58be2cf123f85a222db1a182771a1c9cdbd3525c25bf571f6ce080f14398950c5a00af3865d1df58ceec80ffc210e8c81e6075df07dc31f6a68e077f1480575ed03aa3314ca4a3c8a69acf6fa3d4048f50686d6f55463a07b2343ed797da38b06fad05febd0952bf4ee50cb9f9470b8242ca18c544d96efed996b7aaebdb2a613d7acd71da02ce297a5f266d58d72b868505de9472d395194a4840a51c53867966bda93a93bbbabc910bb358710e1adf3926f5780220647344ac5ac38a40bbace07235b9385797904179b72b30f6222e2d741e7b11c1198cfbfa8e564fecd3cae58ac462bcad99456d971ed99f54dae3977efd3dca1287b87e7b532cb89e8d6a3e8306b70b5fefffaddaae590c55bade4c9b72bd3fe99630b5feeb1218014627cccfa89d5cd81a5fb13a74884ef0f438e10b7e1909f716116af08b363769c42f9a648d9f98a5053f5a1a1ed090530e5a711236db08f38390e792e",
      "d840ccf7bd288f44d9c85d4352569353c0f270f10eac6a88bbd6aef50fe9dca4c5e1050000",
    ],
    [
      "ETag",
      "Mc/KyecPVHZZx5/SJU/kgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1595636454214"
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
      "4fc24010bdf75790f50a09685b3f120ea008247c28143d184296765a2b6db7ee4e35c4f0dfdddd16e845d344122fdd9d796ff66566f7f5cba8d5c8264c3c725323eb3078cf806fcf02c047b59981c822147249592280d4151b90068afde13d3f0df0b3bb8ea79b7eb268d27e788141bb9db384fb0a3195bc2f19c9d80f21f2848c5f745c2bf21a4b680cea449745599cac74583fc2b84d353c7766c349bf8cc4ccd3c864311a75baa31e29a05dfd67118f225de923ff26a1d7a551889137b69e810f1c12178e5da79cbd818b433d5e41e3348286601977411422aa308703ceb29472c61a32d5b0ad46cbbab6ec0bdbb4ccf396b9a747cca518b244552ce6e4a08f0c6934639f6ac4c4ceef80e7613ef1fd28885fba84f28424f4a18a438f1c72bbfa2fc4e1c4b1cd12b7d82d8d5265655539293f8c60f54feaf24a5ea97ce1d5b48b677222711ab32cc18ad2f7a369e7848d4b37546dfaaee3f44e252b507aa1a2ae331cf7e64e67fcf0a3b8fc2e8f26e86e11c40367d26302b4b35a4df3cabab49b64efd45ba69c88caa8c833d06997ca3fd6204499f36924c0d819df4027df181d050000",
    ],
    [
      "ETag",
      "vdWVHtwBbmOkGnU0aGi3tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-66-1595636454214",
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
      "6d",
      "6f9b3010c7dfe75320a64a9dd6242421402a455dd4b28e2d0f2d218db6694a8c7330b7802986765595ef3e1b4842d4acaaa6bd837bf8dfcf77f63dd72449be23d14a3e956497f8f719244fef6ea92b9f080fa4c8179e2fa34bddf8fd7dfa81e9d67da0ce465e783d7fecf78b2892673314c601d419cd120cec74366df809cd6294505ae782754dabb7babdaed6d1d4aeda6ea9452e83c01b92e84e28fc4ad3989d369b1b8e864fa91f008a096b601a6eedcd8776334ee82de09435f7cb367925d67cbdf05940314a098dfab3690191314816102212088c5df6cafdb82fdf20286cf83cfa81604018d32c4a055a218369e4113f4b7271aef4cc8ddc9c336f7f2b06796a0ecd73473a9fccc6cef11285426ef95e424c5a2c126059904a9fecc9485ac6bcfa2fc4802da5f967d336b925a11e096041564ba92f9d4983f185240d2773d33ede4673a9a1f5d5e4dea135b21ca99563e6082b602989725007b90154f0b8b76cae7560ae5b092182525ea50c5be88a865a86d2733d57c79ed1e9ba9e02ae6bb87a17755c05f75450572ea0aa422a6a17f928a2511b5a868650c7f03a6d8c0dddd000daa0719d95861543e9b65b8ae2f6402e15d6dbf33c2624850bc262ca48d97d796e5b8eb970ecd9f87ce098d5b37b88b7f6a2a0df3ff9de9152dea42aed6b6d794114278472a87cced6d831edc1b963dd5430f8a51b828ff0d3f45e5c3b0f050c76d9284121a4908ce84a0c47be9a4c2dc79a8c07c39d427e8fae36918c87fdd8c2eece5455739ee2fd51175328ac025353e58a6f7d7250e50605d9019987d22cb7f6346a07d4fe856eead8d6f8f23fe01da1383efa0b62f9f5b356d197f91229d1e4eb99697f13b9b94f786cf0208108ef2abee1f988c4c2fd861dc9c3371b4b64f0a5b5adcf526ee62f19b35d759c40f1ae49584ca310ecaa",
      "bad6de6c009198a42f2374bdbd8978b1b5442d08214a37bd28b657d1c8f51e5256c1c9d344387f87e37280ebdabaf6078ec0aa4a7a060000",
    ],
    [
      "ETag",
      "JMG78xZS+s7Iql4UMfmQWw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1595636454214"
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
      "df",
      "572cf5d525306189263c88214844d409f1c110d295bb31dc76677b2712b27fb7ed36e1a5ed39e7dede9ed393e3baec2b2db6ecce65519a7c57208f5709d09b3984a0aa8c94de4a2c14b06b530dc413534dcb48443ce6d3f483fc9dff1cfebe3cf50ea35153a5c40e72aeeb4e1a691ca7906d95c69f16bb2d6fb582e7606edc6ca41d686f68353a96569b2d9693e924bc9472dc5a69b19acfefc7f3096ba5daee6bbdd6f6297b8c4288414221e0fca052e21e04cdac73c5f332034f612505a87688696ce44462557289e869ca0b02af3fbc1d0637c16038f0fb83ae3c43c129c5c274acded9ff7c42e2598807e39ef59b7864039b30ba28587c91cf65425afa31cd3efba7eaf6b4763ab43e0f1b1f09d4ab44ed458175d0635d140f68ac924982640596165cffd6634a2de7d4ce1ff100942c18020000",
    ],
    [
      "ETag",
      "tTbcbafaGiWt2h2MRxOK0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf4b5283300000d0bb645d3bb5604bdc813046a87c236dd930698c7c0a24108a04c7bbdbf1dde0fd00422993321ff99575e01928b2856bbaf6b8613d469fc5644d4e78808eec9232714b5f7dcd84bd177c4e0ef1a5695faa2133cf8696a3d6bcc97d06f5acd8d9af0a0729ec76dbd8d344e626ba1d6d549dca3e95dcb88468910d3ee2f1fcd1d77eca843752772e9d62f14943ec86f2bd8a4cc18b87d366a92899f5a5bf75f5f79bd50628e0654753344da8296d867b161bf2d8607c42888a1039ea1a8d66cb2a33a46005d82caa81c9bcbacfb4270857e0bf998f4ab0fbd562646003f8fd03be4e208b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:28 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-67-1595636454214",
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
      "107df75720fa1a5fc3c58e643596431a57364e314e5255155a96816c8259c22e89acc8ffde5dc036d4519437989973e6cc65e7bda528ea334902f542517d12bde4906dbf3d515f3d931ee028929e87c130e969706ba76916fad3edcffb07b28ec6e3328a14688636690c6d46f30c03bb58af3a5146f3146594b60561db30db7d7da41be786a66b83be566219c4e19c24cf92e191f3945d74bb7b1d9d88d228069412d6c17473b0775f07dd34a34f8039eb36d3764526d6fd3cf1f79862c4094dc6eb552922679079b0412496328ee8c0bf6cd27708da742211fd4a30208c699e7029ada4c1340949946705b9607a1746612e341f7e6b067565cdada9ab601ae79bc44bd006ce940071e4f16d0acab5b35c2833fb7ae92c26ee6c697babe98db59874a6cbf97a61af94fb1bcbb1148efc180aac32562e8b3f5bfc148a8a6c01304e9242932bbd3525c25bf571f6c1080f149244a86250857966cf40fd616fe487be89c3e1b9ee873df0fda16feae8dcefe191065ae003aa3314ca4a3c4a6832c0b81f84bae9e986d1f734d4f73d34d2032f0c4dd30c8cd10004bc42ef0eb5bc6584c315612965a46ab27aefcc5ccb739db53d9db856bdee10e531bf2a9537ab6e94c34583ea4a3f6bc989a2342354882ac639b35dcb994cddd95d4d86d8ad3944086f572f72bb42143338a2512666c5215bd0400e46b5270bebea082e36e5761fc444c49f83ce63392250cebfa8e564fecd3cae58ac462bcad9945675e53a33fb875a73ee3ea6b94371fe01cf6b655653d1ad47d161d6e06afdfff5b755cba18ab75ac9537fad2de7b7c4163ee97120840c127cccfa85d595c0d2fd855324c2f7874122c46d38e4675c98c52bc2ec981d6750be295276be22d4",
      "b5a1e0dc130a60c64f230ccddc479c1c07990b3690f07d2fca23513672d79094d7e41430192ede815d0d71d7dab5fe01b74e948be1050000",
    ],
    [
      "ETag",
      "X28n04ePNpprfbCyJWXiUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1595636454214"
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
      "c554d14ec230147ddf5790fa0a11740c35e16128e092090833311a42ea763786db3adb4e45c2bfdb7643f6825922892f6bef3de7f6e4def66ca3d56ae8354c3c7455432f61f096015d9f04c0efe5660a2c8b38134b4a1206a82ed9c07120d9e6a9ede83d3c1ec45fd7c193f5f9381c776641b79bb398bb84180bde464422f643883c26e26715d78abcc2121c833cd1255116270b15d6f7305fa70a9e39536b342c2331f114327ab06db367f751016deb87453cccf1421df93709b5ceb5420cadc8cb147ca090b8b0ef3aa564052eb7d478198ed3081a8c64d4055688c8c21c0e28c9524c09698854c3e8345aedcbb6716ee86dfdaca5efe81171310f49222b1e66e8479f138ea329f9902346467e07340ff389ef4681fcd225942724a077591c7ae827b7adff42b4468ea197b8c56eae952a2bab8a49f961048b7f521757b2c4e28557d32e9ec991c4714cb28457941ed863f3888d0b37546dfac674fac792655c78a1a2ae63ddf5678e793739282ebef3bd097a6b0e6c4289f01803e5ac5653bf68778c26da39f59a48277269544e335069178b3fd66dc845cec711036dab7d03a6560c641d050000",
    ],
    [
      "ETag",
      "A/LT4BaOFmzCgZIxXGO7Sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-68-1595636454214",
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
      "30147de75758d94b2b0d08142865421da5d9162d7c3409edbaaa029338a94b1207dba944abfef7390e244163dd34ed61120fe49e7bcf39d7f6bd2f150094158e5ca5079425f6d709a29b778f64a9bc4f11c4a19f229d89b65959dde1f2f9dbf419afa7cfa737ab8b41bf9f656159cd601807a8ca48421dc47a33abe65392c49012521584d54eb7da689fb53b279d56bbd56cb4b25a8602cfc0d12a6578e03c66bd7a7de7a3e613e20708c698d51c12e6f1fa53b31e53f2881cceeafbb275a1c4ea6f0b9f07c4811c93a83fb332130943748e428883d44651ed2e3feed3d7300c6bbec87ec20e828e439288a7d6321a87441ef6132ac905d38b088ab0f49c7f96028aa519dad006c3c96c6c1f2d6098d22d8e0164603ea7882501079fccc9082c62a1fe0019620b70f345333511a1c4c3019a637701fae01c0cc6970018931bcd3c5a302e4c0b1e43ffaa09c8d047ba0d1ad2a3d477910705f725e48292979ca55816d4e59572c4785e26c0eda1eb07ee5bd966bde62a31c584622e1bd5c7b6660e86b67ead1536c4a91bc887cec65aa7e7eec180a1a21a5218228ee888b828a5984e2cddd627e3815130c8839cee329948bbcbcd163d95d9ec4d8cf61a9630cfa2a9cd4e4b2961afef0fb25cc3203940f3b40d2b8d3d8eca01b6bf7167eb23cdb207a3e93f70d8549b6a556d8ac1b0d56e4f55c5afa6aaeaf75f18dffebbaf942415315b5bc3cad54c336fd35a89a588893c4451e41426de7c3d056506ffc1ea10e9bb414e2bc42ce7fa620038661c3bac50772892b9360eb33bca08dbadb393d3f68e501452fe7346abadee3250e41ec6f7c4939230a29450534e737909083b2c738e23712dd8bd925b217fdbe5ded6fb50881883bef430262084dc79c0910f",
      "18f623214d11f008055e1239697db6146408523f0951c441faa2580fe40faa06ac248e09e5c82d584442b64f2cdbd4c79f8f3f6c3f2f6e6dcd124b8a83bb46afdbb857f61e85ecb63c89a5ddf29b96df6cfa3f6d7b371bf7c503e2d2e1e564acc9375179adfc007b60287465070000",
    ],
    [
      "ETag",
      "6OEykS8CbzXPziqPz7WkBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ad8efcc47427d4c200155009c54d8642a04125905021747af73a7d37783f202f0a22041ed895b4e005c85c85ab62e5b3ada5c4d567e554b5bcd0698cbeaa308da5eb50ec9da83d7d1f8e6818e76453d7cee9eebbf1ab3fafe18197a9a775e759a4b8fda05b679921a937bbecbdbd04d18dea1a5e9728d11833916a79aeb984a273b9da93bd56d8b6a1a0c248917d0d8888fbfb184467231e5455835c8649d832238cccb7c26b7dde3f382bb38623b6178f3691f570cb0c5d7ace5cdacd4628c7112c00993aca89c0f439d30c0817e0bf8907d991e7d52239271cfcfe0175da852005010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-69-1595636454214",
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
      "a2",
      "40",
      "14",
      "7d",
      "f75710f6b52a28a834315b63696b56b10bd8a6bbd990611c705a64e8cce0a669fcef3b03a8b0364ddfe0de7bce3df763ee7b4b51d4179caed54b450d71fc9a23faf6ed9984ea85f4200e62e901f9afc5fde666b2d198477fdc1a4fa4673c4cc6e3320a176806b65982da8ce4142276b9f23a3125790628216d41d81e586dddb4cc417f6098464f374a2c434934c7e98b64d8709eb1cb6ef7a0a3131312270864987520d91eeddd5daf9b51f28c2067dd66daaec8c4ba9f27fe9e10083826e978e5952272866880b6002752c609bd0eaf9af41d0cb69d5844ef3044004292a75c4a2b692049231ce7b420174cefc228cc85e6e36fcda07af6dc9efa0a2449be4d83146cd185b2061c04fc2d43ca8dbb5c2833e766e92e26fe6ce904def4ce5e4c3ad3e57cb5703ce5f1ce766d858330410556192b57c59f237e0a4545b635621ca785265f7a6b4a84b7eae3ec83111e29248950c55015160cb501d0479a1546e11046a3be19461a0ac3513834413fd4a06520631d225067289495789092d434463d6dd433027dd48781b1465a60195614206818bade1fe8ba16a9157a7face52fc51c5d63961186ab26ab8feeccb703df5d39d3896fd7eb8e409ef0eb5279b3ea46395c34a8aef4b3969c29ca2826425431ce99e3dbee64eacf1e6a32c46ecd510ce09bf72ab72b0209432734a062561cd10559cbc1a8ce64615f9fc0c5a6dc1f829888f87dd4792a4704caf917b59ccdbf99c7178bd56845399bd2aa7abe3b736ed59a73ff31cd0348f20f78769559cd44b736a2c3acc1d5faffeb4fab9643156fb592a7fe5cd9ee93c4163ee9715184284ae129eb175657",
      "024bf7174e91083f1c068910b7e1989f716116af08b253764851f9a670d9f98ad034ac61af7f201440cacf232cd33c449c1d07990b6d51ca0fbd288f44d9c87d43525e9353c064b878074e35c47d6bdffa07c2ca176de1050000",
    ],
    [
      "ETag",
      "auZMPhFAh0sSrKG4Yo24VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffc5545d6f8230147de75798ee5513d990e9121f747eccc5af213e2dc654b8280e28b665c618fffbda82ca8b0bc94cf6427bef39b727f7b687a3562aa12f3f72d14b09adfcf52e017a785803ff901b0b581270269698440c5059b281e3b564bbbdeec6b2f54e1faadc7067d67637a9bfef9bcd94c59c0d8458f08e2212b1e743e032117faab894e51516e110e4890e0992305aaab07c85f92156f0ccb606e37e1e0989ab90f17c386cb5875d9441a7f26d111773bc5447fe4d42ad0b2d13435bb2b2c0030a9103d7ae634ab6e0f0811a2fc3611c408591843ac032115998c26b4a921853422a2255311b15bdd6a8994fa651331e75e34c0f8883b94f2259319fa18b3e271c0716d9cb112333bd039a86e9c4cfa3405eee12f21312d0b72cf65d74c99dcabf100763db3472dc6cb7d072958555c5a43c3f80e53fa98b2bd960f1c28b6967cfe44ee2382449c40b4af78693d61d1b176e28da74a76577ef25cbb8f042415d7b30eaceecd6687a535c7c175713b40f1cd89412e13106ca597ad5a8d79ecd2a3a3bf59548277269544e135069078b3fd69bcf45cec30103eda4fd004e724bd21d050000",
    ],
    [
      "ETag",
      "dFEhRT1DGe0t4dSRjqO8Jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-70-1595636454214",
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
      "51",
      "6fda30107ee75758d94b2b154828b0960975accdd6681068125a7555056e3852b7499cda0e5257f5bfcf7120091aeba6690f7b4beebbfbbeefec3bbfd410d21e49bcd07a48bb23c1530aecf9dd03bdd30e3204040e3224f657df6d80d660d215e7d3c3475b2477f1a0dfcfb388aae6384a42a8739a321f786fea360246d304334aeb92b0fe5eaf1b9de34ef7b0dbeeb45b463bafe5102e87247ecc18ee854878afd9dcf86804940621e084f0864fa322de5cb59a09a30fe00bdedc966d4a25de7c5bf824a43e1684c6fda99b9b4839b019449884998db27a71f7719bbe4170d40864f68af8807d9fa6b1c8ace5343e8d9724489922974c2f3228c3ca73f15b0968ae39344f3d743a9edadede1c4719dd7c1f618e6633063c0d05faec8c47689e48f57bcc81cfd1d5b9e99832c2e8928430238b39eaa31334b0cf101a8eaf4c676fce85342d7986d6575342436b6479c8501e95fe029658729f61212945c55986e5414b5da9002e8a3209ae0fddda71dfda3aebb5504918a18c08d5a8657ba63338f5ac4bb3b4214f7d0801f69fdda7ecdc9738e4505663862310c046740119c564ec5a9e35b607c392411de46493c965da4d61b6eca9cae63d27b0d5b082451ecd6c76db5a057b3dd8c97289c37407cd6a1dd68c2d8eda0eb6bf71e75923d3f506a3c93f70d8d25b7a5d6fc9c5f08c56cf38ec19ed86aeebdf7e617cfd755bab486a72b7d686b58ba9e95c67b50acb100796c020f64b136f4e4f4999c37ff074c8f4cd22671572970b7db9008270417c5eaafb0c54ae47a2fc8e72c24e473f6a753684b290899f338ef52203e2c56e7c4b3cad08036394396a9bab8f80b4c373e72496d7421617ea552866bbdadbd3361401e738501e6c8a222cfc7b120788932096d20cd09232b44c633fabcf1f0515c22c48238805ca268af7503150",
      "0de4a64942998045c92213f2f7c4f51ccbfeb2ff61fdfbe9da335df948097463f48e8c5b6d6b2854b7d54dacbc2dbf69f9cda6ffd3b637bb715b0e90500ecfc6b6a966a2f65afb01dfb0f9f365070000",
    ],
    [
      "ETag",
      "ncvzNee2AP6tHU3kNtpbnA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb64ed3843289f74572020a0a57c6ac50d4343108a120c41094eef5ea7ef06ef014a42e838168275b407af409610adc93a64a6a5c4d5e92a0c989fe38c2503938ae665ce68e2ec607f19473fb7588abdea33c14ba7256d40a19cadfed426fd14a953e14d417ac31ff5a5b3f10d6f62c2e75435a0de50e5b85fccd80ed56f4d287969da0212dad50ebf6f28beeccdb7c858dc26f4666d087986a2437d263215819473e1579272d7d9fe54b0d96d5bb5bdbafdc223a9df55e6eb559423f15e7668e7bc8015a0f3d0723a16ed73a66a08adc07fb31072a0cfab454b4e39f8fd032af733f805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-71-1595636454214",
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
      "f75720fad8f84230be44b21acb268d25835bc089daaa42bbcb4236c12c6617a769e47fef2e601bea28ca1bcccc3973e6b2f3da5214f58924817aa5a89044db1c672f9f1e29542fa4077310494fce763f9fb1f5977cde2dada7ed9f8739188c9f2793328a14680636698cdb8ce619c2ec6aed76a28ce629c8286d0bc2f6506b6bc6d818e883bed1bfd4fa2596e1385c92e449323c709eb2ab6ef7a0a313511ac518a4847510dd1ceddddd6537cde823469c759b69bb2213ebbe9ff84b4c11e0842693b55b8ac819ce7cbc012496324ee8005e37e93b046c3a9188de11840142344fb89456d2209a8424cab3825c30bd0aa330179a8fbf3583ea9a4b73e62988c6f926f113b0c1174a0038f0f94b8a951b6765290bfb66e558536fb1b27d77766b5ad3ce6cb55c5bb6abdcdf9a8ea97000635c609589725dfcd9e2a75054640b30e324293479d25b5322bc551f176f8cf0482149842a86ab307fd81b006dd41bc3100e5138d20d18f63084233834800e7b68dcc7fd006250672894957890d0e4120eb4f1d8087cbd17687edfd00d1f8091ee4300b540378601e81b6a85de1f6b79ce08c773c252ca48d564f5de5978a6ef396b7b36f5cc7add21c8633e2f9537ab6e94c34583ea4adf6bc999a2342354882ac6b9b03dd399cebcc55d4d86d8ad258e007a71b772bb4210337c42834ccc8ae3cca2811c8c6a4f2d737e02179bf2ed10c444c4afa3ce53392250cebfa8e56cfecd3c9e58ac462bcad99456d5f59c85fd55ad39f76fd3dc81387f83675799d55474eb41749835b85aff7ffd6ed572a8e2ad56f2d4ef6bd3f921b1854f7a1c1ce20c27e894f503ab2b",
      "81a5fb03a748841f0e834488db70cccfb8308b5784d8293bca70f9a648d9f98ad03034b1d7074201ccf879846ef40e1167c741e6c21b9cf0432fca23513672df9094d7e41430192ede815d0d71dfdab7fe011d3b912ce1050000",
    ],
    [
      "ETag",
      "usvZweMzi+vLMkqxhDa69w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1595636454214"
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
      "30147de75798ee719aa943dc96f8a0ce3912fc9862f6b01853e1a238a0ac2d33c6f8dfd716545e5c4866b217da7bcfb93de9bd3decb552097dfa918b9e4a68e9afbe12a0bb9b15f037b999004b02cec4129388012a4b3670bc926c633deac6f5f73b5a1f8c3aa6d15fdeea4b6bdb6aa52ce6ac21c482b71791883d1f029789f843c5a52cafb00887204f74489084d14285e533cc77b182a7f6c41cf6f348485c850c6796d5ee583d944187f265111773bc5047fe4d42ad732d13431bb29c8007142207ceb78e29d980c34dd55e86c338800a230975806522b2308557942431a6845444aad2ac556a8dc786716fe80dbd5ed38ff4803898fb249215b3293ae973c27130215ba64693ce80a661daf1632b90971b42be4302fa96c5be8b4eb943f917a239b40d3dc7cd76732d5759585574caf30358fc93ba18c91a8b175e4c3b7b265712c72149225e50fac51ab5af7871e186a2977e6edbbd6bc9322ebc5050d73607bda9dd1e8c2f8a8beffc6c82ce8e031b53223cc64039ab56d51f1a4da38a8e4eed12e9442e8dca69022aed60f1c77af5b9c8793860a01db41f56dbabf51d050000",
    ],
    [
      "ETag",
      "6hOCp2W/r2MOBI6Gb+4bLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-72-1595636454214",
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
      "4f",
      "db",
      "30",
      "10fdde5f6165426c126dd4d2b2ad52c53a1ab668a1853405b109356e720da6491c6c870921fefb6ca74d52ada0699ab46ff1bdbbf79e7d77796a2064ac481a1a7d642c48749f037b7c734717c6814240e048212c4d46b1dbc96699b8fc1eb5a9f9657575f1733028b288aee638c96268729ab300787f366d458ce6196694362561f37da7d9ee7dec1d1d1e757bdd4ebb5bd47288970e49578ae156888cf74d73e3a315511ac58033c25b014dcab8f9d0313346ef2010dcdc9635a512375f173e8e698005a1e960362d4ce41cd81c124c6265a3aa0e179fb6e95b0427ad48663f90007010d03c15ca5a4113d07449a29c6972c9f4248332ac3d97c75ac0985a8e75e2a193c96cecbdf571a2e8fc770873349f33e0792cd0a93b39437e26d56f3107eea3abaf966bc908a34b12c39c843e1aa063341c8f10722657965b2372ec6f96c41cfbccf6505b9bd406425862493ec242728a9a358515415bf7540017659904d7af6eef68b8b1ce7a2e553246282342dfd41e7b963b3cf1ec4babb2219fdd8108078fd37bf5f04b1c73a8aa31c309086067340445713e99da9e3d190f9d8a41bfe4f92693cbb41fa5d9ea4e7536ef3183ad0b6b58145165f3a86bd4b0e7839d2c9738ce77d03cacc3467b8ba3b183ed6fdc9d3a93e1bff1b7d76ef5ba7b2f985c7fdd346a02865ca4b539e36266b9d7aa56630a7161090cd2a0927c75522aca02fe83ff844cdf6cadaa908b5bea7321c35c908057ea01039deb91a4e84741d8eb750f3b1f3684b29089df33baedcda6189086bbf12df1bc260c8c51e6ead5ad6fbcb4c30be724954d903fcc728413e01c475a6396ca57e0801731203dd9a86c28f27d4452a42601f9def5b9355f0f",
      "837f803ee31085345755bac17d54b47773da2f8efbc65643b5d3fac6d4fe012fdbfd0f8637137953b54d68f5d1646ce94e349e1bbf00f489df02c8060000",
    ],
    [
      "ETag",
      "rnmDlR2pUptVZg1o/GkWQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb",
      "64ad4e238192ee0c9491828832c5da0d43214008c827c8274eef5ea7ef06ef01e224a1424443c3e90dbc8125dee24db2711a9dc0133da36476e8c71441d22858e745cd0a83be0484635b5430638c32177dfea4baf4826e0bbf2e161b0fddb765f1f7f5b199537f74bbd91cc3fca2582153c372314ae4a7f6be7d353a09a197bbb28e6f78d4338d9fe5d56b11415de0110dd22b128e4cfbc93968ee3a2ad616e74815630eefd9d0d6f95d4ee9ae54a5753c895d31ec47134f5955358999db7e813858013ab7aca72262cf99a262bc02ffcd68585afabc121af7b407bf7f2d97c0f605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-73-1595636454214",
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
      "ecb50949807c548a5694d22e534236425a6dd3846c63a85bc0149b565195ff3e1b48024b55f50deebde7dc733f7cdf3a8aa23e9134502f151592e8b9c0f9eecb2385ea85f4600e22e9f94ed7ceefc44a6ef5621c3da1076d67cd5fadd9ac8a22259a81248b7197d12247985d6e37bd28a74506724abb82b03bd6bb03736a8ef491611ac3815161198ec325499f24c303e719bbd4b4838e5e446914639011d6433439dab597a196e5f41123ceb4765a4d6462dac789bfc614014e683adb6e2a1105c3b98f13406229e3840ee0559bbe4740d28b44f40b411820448b944b69150da26948a2222fc905d39b300a73a9f9f8db30a81b7b69cf3d05d1b848523f0509be5002c081cf7719566edcf54a5938376b7765798bb5e36fe6dfec95d59baf97db95b351eebfd9aead7000635c6295997255fe39e2a75454660b30e3242d3579d2db5022bc751f17ef8cf0482149842a86eb307fdc1f81c1a43f85211ca370a29b30ec630827706c021df6d1d4c0460031683294ca2a3c48696ae8530883fec81f4e70e81b48073e1c0c86bea10f876610f6272334506bf4fe58cb6b4e38be262ca38cd44d56efdd8567fb9ebb75e6966737eb0e4111f3eb4a79bbea56395c34a8a9f4a3969c29ca724285a8729c0bc7b35d6bee2dee1a32c46e2d7104d06ef32cb72b0431c32734c8c5ac38ce57349083511d6b655f9fc0e5a6fc38043111f1e7a8f3548e0894f32f6b399b7f3b8f2716abd58a6a369555dd78eec2b9551bcefdfb3477202edee179a9cd6a26baf5203acc5a",
      "5c9dffbffe761a3954f1566b79eacfadedfe92d8d2273d2e0e718e5374cafa89d595c0cafd895324c20f874122c46d38e6675c98c52b42ec941de5b87a53a4ea7c4d689ac678a81f080530e7e71153737c88383b0e32174e70ca0fbda88e44d5c87d4b52d19053c264b878074e3dc47d67dff907b6d9af3ee1050000",
    ],
    [
      "ETag",
      "JoONZmAmG3u7gkch/yACwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1595636454214"
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
      "54d14ec230147ddf5790fa0a89c8186ac2c3d0a18b131166a2318494ed0ea7dd3adb0e4308ff6edb0dd88b668924beacbdf79cdb937bdbb38dd168a08f380dd165032de2e5670e6c7db204f1a83613e039115c2e194d39a0a66283c04bc54edc1b32b48473b1f2eee25e142e9ed9cbe0abdf2f583c7883044bde4646328e62202197f1ab8e1b655e63294e409d18509227e95c87cd032cd69986a7fec41ddd549184861a193d799e3df01c5442dbe6cf22211678ae8ffc9b845e67462986dee962021130480338749d31fa0e8170f578394e32022d4e7316002f455461012f19cd33cc286dc954abd769b5bb175dab63995df3ac6deee8840658c43455154f53b4d717546032a15f6ac4c82aee80156131f1dd285054b984ea8424b452c57188f6b96df317a23bf22db3c22d7733a352595b554e2a8a09ccff495d5ec91b962fbc9e76f94c8e248e139aa7a2a6f4d07bb08fd8b87443dda6af6ddf39962c17d20b35757df7de99faf6fdf84771f99d1d4c30580be06346a5c7386867b54fcdf36ecf3a453ba75e51e544a18c2a580e3a1d60f9c7ba8d85cc45987030b6c637186fcd061d050000",
    ],
    [
      "ETag",
      "mIGlF6tE9vLKi7fdbXrYBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-74-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5545d4fe240147de7574cba316a227451609584b80835368bc096a2eb6e0c1dcaa58eb69d3a3375438cff7d67a6d09604cd3eedbeb5f7dc7bcee9fde86b0521e389c40ba38d8c39099e5360ab4f8f746e1c2904040e14e22c3e0fbbab9b9ffcf4b2deff31ee754dfbeae277a79365115dcd71948450e534653ef0f674520b184d13cc28ad4ac2ea9746b5de3c6bb64e5a8d66e3b8dec86a3984cb01899f14c38310096f9be6c6472da03408012784d77c1ae571f3e5d84c187d045f70735bd6944adcfc58f83ca43e1684c69de9243391726033883009958da27a31ffba4d5f2338aa0532fb85f8807d9fa6b150d6321a9fc64b12a44c934ba657199461ed397f2d058c8935b07a2eea8da643f7c0c391a2f30e11e6683663c0d350a04b67748dbc44aa3f600edc43b7579663c908a34b12c28c2c3cd441e7a83bec233418dd5ace81276387683872d1c0fe66496c605fdb2eaa6b93dac002965892f7b1909ca2644d6159d0d63315c0455e26c175d7ed1d0337d6596fb94ac2086544e82fb587aee5747bae7d63153664db0710607f3579568d5fe29043518d198e4000bba60b5014e3d1c476edd1b03b28187427c79b4c2ed37ee5668b6f2ab3b9ab04b63e58c3228b2a9bad8651c2de8e76b2dce030dd41f3b20e1bf52d8eca0eb6ffe96eafdedc7bc7e0fae9be52a237e411ad8d19dfa79673a76a35a6100796c020f60bc10fb7a4a0cce0bff847c8f4cdc5aa0a79b4b93e1732cc05f179a1ee33d0b92e89b2596484cd66f3ac7eba2194854cecc8383bd96440bcd88d6f89a72561608c32479f6df9daa51d9e3927b11c81fc59e6eb1b01e738d01ad3587681039e8780f456a37c9cc8f3108991da02e4b977636ba617c13b4217782111d16a203ddb365293dd3cefab977d636b92da62f94c4a87ffbecf7fe974b383f7c5a08496ed8f8696ee7de5adf20755ae786bb6060000",
    ],
    [
      "ETag",
      "Rd0NAyVZs8F1DXPCA/IHBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "30",
      "00",
      "00d07fe9f35cb8844b7d833931c018131cc84b534ab90819d032d762fc77897f70ce0fc08450ced132f6f4069e81c41adc937d30daae7aa91b8d384bf14602d2b5e2fde215820d74586c13b787e3a7326084043247499cd29b95d0584abb391da2f3c78c330beaf21e99c6dc4f7038e9f17a24247586442ddcee2924eddd4d19aa881f3eb249b9a5c5e861e12fdf22aa05cbbf7a29afdc72874e76ed15aef86166397e85b9151809f7d538393b4d5c6916ab04676ef2528f0636d6a65436436d09ee286007a8983a4639eab6996e40b803ff4db4c8896e5797624619f8fd036f0c33cb05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:36 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-75-1595636454214",
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
      "0000000002ff8d545d6f9b30147dcfaf40ecb54980400895a2354be91a2d212b216da76942b663a85b8229369daa2aff7d36900496aaea1bdc7bcfb9e77ef8be7514457d22e9463d575448e2e702e7af5f1e2954cfa40773104bcff3fd94eb89e614fab77bcf37461bcff891de8cc7551429d10c6cb30477192d7284d9f97ad58b735a6420a7b42b08bbb6d5d52dc71a0e86a6651aba5961194ea239499f24c303e7193beff7f73a7a31a571824146580fd1edc1de7f31fa594e1f31e2acdf4edb179958ffe3c45f138a0027341daf57958882e13cc45b401229e388dec08b367d8f806d2f16d12f046180102d522ea5553488a611898bbc24174c6fc228cca5e6c36fc3a0aedcb93b0d144493629b8629d8e23365033808f96b86952b7fb95066ded5d25f4c82d9d20b57d36b7731e94d97f3f5c25b2977d7aeef2a1cc004975865ac5c947f9ef8291595d936987192969a02e96d2811deba8fb3774678a090244215c37558686b43a08f340746d046d16860c148c3108ea06d8101d4906362730331683294ca2a3c4869aa9b4604a16187b6351c85e6c07642e04027d4818d41a4430d6850add1bb432d7f73c2f125611965a46eb27ae7cf02370cfcb5379d046eb3ee081409bfac94b7ab6e95c345839a4a3f6ac989a22c2754882ac739f302d79f4c83d96d4386d8ad398e017a5d3dcbed8a40c2f0110d72312b8ef305ddc8c1a8de64e15e1ec1e5a6fcdc073111f1fba0f3588e0894f32f6b39997f3b4f2016abd58a6a3695555d05feccfbae369cbbf7696e4152bcc3f3529bd54c74eb417498b5b83aff7ffde93472a8e2add6f2d49bb5ebff92d8d2273d3e8e708e5374ccfa89d595c0cafd895324c2f7874122c46d38e4675c98c52b42ec981de5b87a53a4ea7c4d6859436364ec090530e7a711a6a3ed234e8e83cc85b738e5fb5e5447a26ae4ae25a968c82961325cbc03af1ee2aeb3ebfc038dc801d8e1050000",
    ],
    [
      "ETag",
      "qXCt1l09u1BXNR28dN2KnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1595636454214"
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
      "4fc230147ddfaf20f51512d16d7e243c0c45254ec46d44134348d9ee60b8adb3ed1442f8efb6dd80bd609648e2cbda7bcfb93db9b73d5b6b8d06fa88d2005d37d0349a7de640572733e02f72e300cb63cec4929194016a4a36703c93ecfc63895f07b6b7781bfa3dc774976e77f968753a058bf97348b0e0ad4524e230823860227e5771a3cc2b2cc509c8137d12e7493a5161730ff355a660d773fa83fb2a9290402183916d5b5dbb874a68d33c2c12608e27eac8bf49a875ac95626841a60e844021f561df7546c9027cde57e36538c962683192531f5829220b0b7846499e614a484ba45a1746ab6d5c19e6b9a91bfa595bdfd263e2631e9154568c5cb4d3e784e3d821df72c4c82cee80166131f1ed285058b984ea8404f4258ba300ed729be62fc4fec033f50ab7dc8db54a656d5531a9308a61f24feae24ae658bcf07adae5333992384e489ef29ad277f6b375c4c6851bea367d6b79bd63c9322ebc5053d7eb3ff55ccf7a1a1e1417dff1de04dd150736a444788c817256fb54bf342ecc53b475ea0d914ee4d2a89ce6a0d23e167fac87888b5c886306da46fb010fc845481d050000",
    ],
    [
      "ETag",
      "ukxaWNLTjXPcER6SxSBxKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-76-1595636454214",
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
      "000002ffad54616f9b3010fd9e5f81982a755293900648a8147551ca36b6847484349aa629318ea16e0153dbb4aaaafcf7d94012a2665535ed1bdcbd7beff9cebe9786a2a8f7385dab178a1ae0e82147f4f9c31d09d43399411c443233bb2693bb053247e6027dd353b703b979ff341894285c54339064316a32925388d8c57cd68a28c9334009690ac266cf6c760ccb30bba66ee8e71dbdac65280ec738bd970cb79c67eca2dddefa68458444310219662d48925dbcfd78dece28b94390b3f6a16c5b28b1f6dbc29731818063920ee6b3d244ce105da204e058dad857af834f87f42d0c925624d08f18220021c9532ead953490a4218e725a900ba6171114e1c2f3eeb7165067f6d81ef9ca683a77fdd3154824ddeaa30298b25c52c4f2982b9fbde944596542fd1630c456cae2abedd92242498863b4c4eb9532502e95a17ba528e3e9c2f64e776841e54e7d65ec7cb70562ec4c1c5fe914560b1b6bc4384e0bb33e086254b328b255839d23b3dd514812c08552055bf6341374fa9a1584410f86fdae11841a0a827ed0334037d0a0a5237d1d205067e052bbac072949bb7d3dec87c0b4025d37a0ded32c0d84c8d2ba56cf340c13c02e0c35c1a5560c9bdd799e28e6e80ab38c305c4d405d788e6f2f7d6fee8e86be5d3f7b08447baf4af787273f3812174daabb7dab2daf1c65141361aa98b5e3fab6371cf9ce4dcd86b878631401f83c7b90572f043143fb6a40418238a213b296c351afa733c777a6ee70bc6728eed2f516c904ecd7ceecfe4c7536ff393b1c753985322a6d9aba5acb6dce8eb2dc80383f42f35885d5ce0147e308dbbfb89bf99ee37ef90ff64e0805e9c95f3c565fbf1b3501556c92ca9bfa636e7b3f656d9193190f8588a214ee25dff17e6461997ec7a214f0edda92156273edf4191761f19421dbab438aca878d93721c25a161f43a96b925148594bf46742d638b78b5baa4164a50cab7bd285758d9c8cd81a5bc66a7289370f110dd6a829bc6a6f1079ef524067f060000",
    ],
    [
      "ETag",
      "SPoMjWe6C6WeJ4nN1ct6kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1595636454214"
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
      "000002ff4d51d16e8230147de72b48f7b8f18043714b7cc085381367369cd9c3624cc10bc30197b565460dff6e5b4079697bceb9b7b7e7f46c9826f94d8b1d79364998267f15b0e35d02e2431d02e05526b8dc4a2c389007550d8226aaba3a95decc3f78a755580c787ebffc1abfb9de64d254f1e807722aebce12491ca790edb8c4df1a9b2dafb582e6a06edc6e991ea86f6835712cb5365f7efa333fe84b39eeb4b45c2f16de74e19356aaf5be916bad9fb2c7308018181411dc1e5432dc4324e6da39a7799981c5b16211f076886a6ce484615552866849ca7247963d7c1a8e1e47ced019d84e579e6144458a85ea58afc875be4041b3000fca3db19b7858039b30ba2848dccba79f9094fe55b343ae54dd9e36468736b761d3a300fece507ae1a01d3863977461bca0322b54168255a0e988caff7a4d85e4629a71306ae3021e1f5fb51b020000",
    ],
    [
      "ETag",
      "uzpAGEwAzSbn2sm+NW8M7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d07fe9b3353240cbde202217c182ce407969a0eb0812a014c6c565ff3eb3f307e707e48cf161a06357f316bc83357f33b66c7bee90a5c4bc3096d81ec984d2cb03d73631ab3473f768f431a7c412b72b91b71343e5f4f59c95a948ced085222b5ad8395eefeb08ce054d2109979e4dfb83777cd6f7d22d3be1058f8b20e9ee8423cdb1a22093213b5a8da1d3552462889019259a2607c87d2ce3346e846d846db7ee66efea3693893e66a6ab0eb33f4375edb5ca3fb03bd6741c5851a97f2bbd074d0236802fa2927ca0d56ba6ea86b101ff4d3aae82bfae16cf2597e0f70f56cd18ac05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:37 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-77-1595636454214",
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
      "6f",
      "a2",
      "40",
      "10",
      "feeeaf20dcd756b182681373354aafa68a77806d2e970b59d6816e8b2cb24b2f5ee37fbf5d4085b369fa0d66e679e699979db796a2a82f2459abd78a1a90689b43b6fbf24c03f5427a80a3487ac6bbe5763ed99aeef4eff3ee2edddd2f6fefbd68342aa34881666893c670c9689e6160d72bb71d65344f5146e9a520bc34cdcbae3134fabdbe6ee8575dbdc43288c339495e24c313e729bbee740e3ada11a5510c2825ac8de9e668efbc5e75d28c3e03e6acd34cdb119958e7e3c45f638a11273419addc5244ce20f36183482c659cd0ebe0a649df2668d38e44f42bc18030a679c2a5b49206d32424519e15e482e94d1885b9d07cfcad1954d79a5b134fc134ce37899fa00d5c286bc491cf772928b7ce72a1ccecdba5b3187bb3a5edbb933b6b316e4f96f3d5c27695c73bcbb1148e82180aac32526e8a3f5bfc148a8a6c6b609c2485264f7a6b4a84b7eae3ec9d111e29248950c5a00af34dad8fba036d18848189c341cf08420d8260109806ea051a1eeaa0af0340758642598947094d3443ef0e7403f90083d0d78786e10ffb26f8a13934a06720cd84be5aa1f7c75afe6484c394b094325235597d74669ee57bceca9e8c3dab5e7788f2984f4be5cdaa1be570d1a0bad28f5a72a628cd0815a28a71ce6ccf72c6136ff6509321766b0e11c23b772bb72b443183131a6562561cb2055dcbc1a8f678614d4fe06253be1f829888f875d4792a4704caf917b59ccdbf99c7138bd56845399bd2aaba9e33b3bfa935e7fe7d9a0714e7eff0bc56663515dd7a121d660daed6ff5fbf5bb51caa78ab953cf5c7ca727e4a6ce1931e0742c820c1a7ac9f585d092cdd9f384522fc70182442dc8663",
      "7ec68559bc22cc4ed97106e59b2265e72b42c318687ded402880193f8fe80ebb8788b3e32073c106127ee8457924ca46ee1b92f29a9c0226c3c53bb0ab21ee5bfbd63f5504cc6ce1050000",
    ],
    [
      "ETag",
      "AyOqLCq7SDzjyHpyKOFKTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1595636454214"
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
      "4d4fc24010bdf75790f528443e4a51130f88a8c48a08351e0c214b3b8562dba9bb5b9518febbbbdb02bd689a48e2a5bb33efcdbeccecbe7e19950a790d628f9c57c83c58bca5c0d6470b108f6a33069e8682cb25c19803a92a3608ba50ec56e3a3f99c9a6b1cf54eccd1f17c78677fae1e2f2e321677971051c9fb92918cfd00428fcbf845c7953cafb19846a04e74314ca378a6c3ea1e16eb44c313673c18de1491083d8d0c9f6cbb7b69f7490e6daa3f8b7854d0993ef26f127a9d1ab91859e17c0c3e30885dd8779d305c812b067abc9c464908358e297381e722aa3083170cd38432c49a4cd53a9d5aa37dd6b65a96d9369b0d734b0fd1a522c058553c4dc84e5fa0a0e1183fd4888995dd01cbc26ce2db5110bf7009c50949e85d15071ed9e536d55f8883a16399056ebe9b1a85cad2aa72527e10c2ec9fd4e5952ca97ce1e5b4f3677220711a611a8b92d2d7f643f7808d4b37946dfaaaebf40f25cb85f442495d6770df9f38ddfbd18fe2f23bdd9be0722d808f184a8f71d0ce6ad4cdd376c7aa93ad537ba89c289451054b41a75d2aff58b78190399f861c8c8df10d67f2f49a1d050000",
    ],
    [
      "ETag",
      "31w2Wu4yoPC/4P+bNKLxjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:38 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-78-1595636454214",
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
      "9e5f81982a755a93900602548aba28651b1a251d21cda6694a8c63a85bc0d4864e5195ff3e1b4842d4acaaa67d83bb77ef3ddfd9f7dc9224f901a72bf94292031c3d1688aedfdd93403e131994834864407ffac11845bab77ef86ee9d8b95fdbc57c341c56285c56339064316a33525088d8c56cda8928293240096973c2b66eb47b9aa90dfa035553cf7b6a55cb501c3a387d100c77799eb18b6e77eba3131112c508649875204976f1eed37937a3e41ec19c750f65bb5c89755f17be8c09043926e97036ad4c140cd1054a008e858d7df52af87848dfc120e9441cfd842102109222cd85b58a069234c451414b72cef4cc833c5c7adefd3602f2d472acb12f8d2733d73f5d8244d02ddf4b80498b0545ac8873e99337b996961957bf030cb1a534ff6279168f5012e2182df06a290da54b69e45e499233995bdee90ecda9dc892f39f6578b231cfbdaf6a55e69b5b4b1422cc76969d607418c1a1679b66eb07d64b63b0a410272ae54c316ba32003d43318330d06168f4b5205450101881ae817ea0405345ea2a40a0c9900bedaa1ea424ed1b6a6884606006aaaa4155574c0584c854faa63ed0b401807d182a9c4bae1936bbf3fca6384757986584e17a02f2dcb37d6be17b33773cf2ade6d943c0db7b55b93f3cf9c19172dea4a6dbd7daf2c2514631e1a6ca59dbae6f79a3b16fdf366cf08be7a008c0f5f4515cbd10c40cedab010509ca11bd262b311cf96632b57d7be28e9c3d4379976eb648c6613f7766f7676ab2f9ebec70d4d514aaa8b03950e5466e737694e516c4c5119aa73a2cf70e385a47d8fec5ddd4f76cf7f37fb0774228484ffee2b1fefad56a08c8",
      "7c93d4dee46f33cbfb216acb9cc878284414a5702ff986f7230aabf41b1625876fd796a8e09b6ba7cf721ee64f19b2bd3aa4a87ad838a9c651116a9a61aae6969017d2fc05c2540c6d8b78b1ba84164a509a6f7b51adb0aa919b034b45c34e5926e0fc21baf50437ad4deb0f8dc6b6847f060000",
    ],
    [
      "ETag",
      "a3S+8Ag7RykXE7iLjyIuWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1595636454214"
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
      "dfaf58eaab8b4c3614131e40896208d12926c61052b6bbb1cf3bdb4e5dc8febb6db7012f6dcf39f7f6f69c1e0cd324695c04e4ce24bb38faae80d51711885775f0805799e0722bb1e0402e5535081aa9eae7c1c7f42fbc0ac2f1fe214da7e3cf616297d164d256717f0f3995750789240e63c8022ef197c666c76bada039a81bb75ba607ea1b3a4dd4a5d616abf7f9e3dc3b97720cb4b45a2f97d3d9724e3aa9d1fb46ae8d7e4a823b0f426050f8707a50c930015f2cb4734ef332038b63c57ce0dd10d5d8ca11c3aaa40cd1929475736bd9eed81d0d478eeb5cdb4e5f9ea14f458c85ea58bf91e37c8182661efe2af7c46ee3612d6cc3e8a320e1593ee70949e947353be44835dd6963f468731a36ab05f01786d20b07ed6040fa28ee5159152a09c12ad0b44fe56f3dc5a2e38cc6f8072945d85d18020000",
    ],
    [
      "ETag",
      "J0VAxf/df9hDkkA9Y3j1pg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c97282300000d07fc9d93a6537bdb108a2806864502e0c920c2214d2b04870faef657a7f97f706599e93ae4bfbb6220df8023c13e13a5f1fda8d219c48a824ce67751c52536bf8d3c3ae3311e5a396fbac62a6715ec0405869d0964a8997e83f82de9767f6c2aaccf2482e44badfdd060ee5533316260df57ae3d6d89a4566eb7a396309295b41d853ed5b09da8969351a31f507e83fece941551f35f22b9e4d76dd454e88b099de83e3d3be05a20b552bbeb0f8da21ef02333e6fc3d2ba57015747cfe9120b158708ac009968c9489796cb4c52205c81ff66da734a96ab41324618f8fd0376d0532105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:39 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-79-1595636454214",
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
      "6f",
      "9b",
      "30",
      "10",
      "fe",
      "9e",
      "5f81d8c7b5798524548ad62ca51b5b423a425a6dd3846cc750b780a96d3a4555fefb6c20092c55d54fe0bb7b9e7beecebe9796a6e98f24dde8179a0e49f49463b6fdf040a17ea63c58804879ee3ecec26f53667d8e1c37f94543d6dbde7c9f4e26651429d01c24598ccf39cd19c2fc62bd6a478ce61960949e4bc2f39175de332d7338181aa6d1ef192596e3389c93f45131dc0b91f18b4e67afa31d511ac5186484b7114d0ef6ce73bf9331fa8091e09d66da8eccc43b6f27fe14530404a1e964bd2a45e41cb3002780c44ac611bd81974dfa3601493b92d1cf04618010cd53a1a4953488a621897256904ba6176994e642f3e15833e82b7b6ecf7c0dd1384fd22005093ed3364080406c33ac5d7bcb85e6b8d74b6f31f59da51bac665fedc5b43d5bced70b77a5dd7db53d5b1300c6b8c06a13edb238b9f250282ab26d3017242d34f9ca5b5322bd551f9d574678a050245215c7555830ea0e416fdcb5600847281c0f4c18763184633832c10076916560630331a83314ca4a3c48696af536a1116218e030ec05c6c0020184fd71601a663f3431449639d22bf4ee50cb5f4604be223ca39c544dd6ef3cc7b703df5bbbb3a96fd7eb0e411e8bab5279b3ea46394236a8aef4ad969c28ca18a15254314ec7f56d6f3af39ddb9a0c79b7e6380268bb7a52b72b0431c7473460725602b305dda8c1e8ee74615f1dc1c54db9d9077119f1fba0f3588e0c54f32f6a39997f338f2f2f56a315e56c4aabbef23dc7fda2d79cbbd7696e419cbfc2f35c99f54c76eb5e769837b85afffffd69d572e8f2ad56f2f41f6bdbfba9b0854f793c",
      "1c62865374ccfa8eabab80a5fb1dab4886ef178342c8dd70c8cf8534cb5784f8313b62b87c53a4ec7c4568cacf78b8279440264e23c6a6b58f38590e2a174e702af6bd289744d9c85d43525e9353c054b87c076e35c45d6bd7fa07b177bbcce1050000",
    ],
    [
      "ETag",
      "W+CfJAr9BgINmZofr1yPKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:39 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554d14ec230147ddf5790fa0a89c81862c2c3105408228e11a38690b2ddc1705b67db4108e1df6dbb017bc12c91c497b5f79e737bd27b7bb6d34a25f4e5472eba2ba1b9bff84e806eaf16c05fe5c60296049c892526110354966ce07821d9136b7efb4dfb6fb8d937dfb79d75eda3b64e36ad56ca62ce12422c783b1189d8f3217099883f555ccaf20a8b7008f24487044918cd54583ec17c1b2b786c5bbde1631e0989ab90e1643030db832ecaa07df9bc888b399ea923ff26a1d6a99689a115995be00185c881d3ad634a56e0f09e6a2fc3611c408591843ac032115998c20b4a921853422a225569342bd57ab36ed40cbdaedf54f5033d200ee63e89d404c6e8a8cf09c7814536b2c5c8486740d330edf8a115c8cb0d21df2101ad65b1efa2636e5ffe85d81bda869ee366bba996ab2cac2a3ae5f901ccfe495d8c6489c50b2fa69d3d930b89e39024112f28fd3078312f7871e186a297ee9876f752b28c0b2f14d4b57bcfddb16d3e8fce8a8beff46482f696031b51223cc64039ab7aaddfd61bc6353a38f59e48277269544e135069078b3fd693cf45cec301036daffd00d0a032881d050000",
    ],
    [
      "ETag",
      "URb8qrJWa9JAYyDv3Z3vuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-80-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc554ef6fda3010fdce5f6165aaba4985500a7445421d6a332d1a3fba10caaaa922261ca9db244e6da713adf8df673b90848956d33469df927b77ef3dfbeefc5241c87820f1c2e820634e82c714d8eadd3d9d1b470a01810385fcbc9bd65737f3e9e0f43b3d7b76fca8613e9f04dd6e96457435c751124295d394f9c03b93712d60344d30a3b42a09ab1febd5e3d659ab7dd26eb69a8de36656cb215cf649fca018ee844878c734b73e6a01a541083821bce6d3288f9b4f0d3361f41e7cc1cd5d59532a71f36de1f390fa58101a7727e3cc44ca81cd20c22454368aeac5fcd32e7d8de0a816c8ec27e203f67d9ac64259cb687c1a2f4990324d2e995e645086b5e7fcb71430c656dfba70d1c5683274df7b385274de0784399acd18f03414e8b3331a202f91ea779803f7d0f48be55832c2e8928430230b0f75d139ea0d2f11ea8fa696f3de5b60019266387251dffe6a49b46f0f6c171d6b9bdac2029658d25f62215945c99cc2b2a0adbb2a808bbc4c829b7bb7f7b4dcd864ad73958411ca88d067b587aee5f42e5cfbda2a6cc88bef4380fdd5f8515dfd12871c8a6acc700402d8802e40515c8dc6b66b8f86bd7ec1a0eff26a9bc965da8fdc6c71a6329bbb4a60e7c01a165954d96c378d12b63edacb728dc3740fcdd3266c1cef7054f6b0fd8dbbcb9e6bfd0373078d7aa35ead37e45e1cbce273f3755b29c918729b36fe8c6f13cbb951b51a5388034b6010fb85f09bc3525066f01f3c16327dbbbaaa426e6faecf850c73417c5ea8fb0c74ae4ba2ac251961ab5d3fadd7b784b290893d19a7ad6d06c48bfdf88e785a1206c62873f4fe96d75edae1997312cb56c857339fe20838c781d698c4f21638e07908480f37cadb8a3c0f9118a961409e7b7365cdd43c7847c8cef8905afc0e3a2cb7f710e9aeff1e3576faaa0d9777a7f41abceefafff9decee76dd14491edc768a8f7635d59577e014efba3c3db060000",
    ],
    [
      "ETag",
      "whW0yYbWM7Xo9zRcm2/z3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:40 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dcfdb6e82300000d07fe9b39a505b90bdc9e41e106681b297a674cd50b90d284e97fdfbccce1f9c1fc08590d3c4e6fe2a3bf002ee1c9a1bb109fb9da5a5d25e97c75bb1857870789f5143291dd30f1e9c10b94eb4b2a34b8562d2419da66d8bded1c81a8f98d0771a94d7a91fe497cf3469624d118bb7f5ba5e47dd70c830f5dcd63c71bf3ce65f0b31e69b6b13ea2d2851fa02b1a6e6c8488a84c29ab90b7f544118622a8a92ce98891d168f3123fb5c9693f29237a51a3a4247cf5f15df37b143312f0f90bb295801f93d9c4739b1f373b6c5a6b902ff4d36df07f9bc5a928f7204bf7fe119ffa905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:41 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-81-1595636454214",
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
      "a2",
      "40",
      "14",
      "7df75710f6b50aa8f8d1c46c8dd22e59c55dc436ddcd86cc0c039d1619ca0c6e4ce37fdf194085b569fa06f7de73eeb91f73df5a8aa2be902450af151592e835c7d9fecb3385ea95f4600e22e9f93edda3f9afcdaab71bd9f1a34ecc18bfde4d2793328a146806b6698cdb8ce619c2ec7ab3ee4419cd539051da1684ed91d136ccb139e80dfa66bf6bf44b2cc371b820c98b6478e23c65d79a76d4d189288d620c52c23a886e4f766dd7d5d28c3e63c499d64cab894c4cfb38f1d79822c0094d269b7529226738f3f1169058ca38a30378d3a4ef10b0ed44227a47100608d13ce1525a498368129228cf0a72c1f4268cc25c683efdd60ceada5a58334f4134ceb7899f802dbe5202c081cff729566eddd552b19ddb95bb9c7af6caf1d7b36fd672da99ad169ba5b3561ebe59aea57000635c6095897253fc39e2a75054640b30e324293479d25b5322bc551fed774678a290244215c355983fd407c018e96318c2210a473d13863a8670048726e8411d8dfbb81f400cea0c85b2120f129a183d30c6a1a9fbe3610ff97d00800f0d33f4a1de85832044c10075d50a7d38d5f237231ccf094b29235593d507d7f62cdf7337ce6cea59f5ba4390c77c5e2a6f56dd28878b06d5957ed4920b456946a810558cd3763ccb9dce3cfbbe2643ecd6024700edd7af72bb4210337c46834ccc8ae36c49033918d5992eadf9195c6cca8f63101311bf4f3acfe5884039ffa2968bf937f37862b11aad2867535ad5b5e7dace9d5a731edea7b90771fe0ecfae32aba9e8d693e8306b70b5fefffad3aae550c55bade4a93f3796fb28b1854f7a5c1ce20c27e89cf513ab2b81a5fb13a748841f0f834488db70cacfb8308b",
      "5784d8393bca70f9a648d9f98ad01c1886a91f090530e397113d637c8cb8380e3217dee2841f7b511e89b2918786a4bc26a780c970f10e9c6a8887d6a1f50f59dd1366e1050000",
    ],
    [
      "ETag",
      "KAycDZUO3v8IlY0i5leqGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1595636454214"
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
      "5d4f8330147de7572cf5d12dd914f023d9c3a6d32d3254c6e28359960a17ac02c5b668a6d97fb72dccf13243e2125f68ef3de7f6e4def6f065b45ae89564213a6fa12712bf15c0560731887bb5f1801789e072c969c601b5151b048e15db25fcb0eb5f7d7a9e432c7e331fcf870f6edcef972c1e3c438a25ef4b46328e08242197f1a38e5b555e63194e419d18d0a448b3a50edb5b58ac720dcf7c6fe25ed79194861a71e78e33183a235441ebf66e91100bbcd447fe4d42af0ba312432ff4c983081864016cbbce197d81404cf478394ef3043a9c162c005e89a8c2128e192d72cc28edc854e7b4d7e95967967d6c9b9679d43337f4840658109aa98af90cfde80b2a70e2d10f3562649777c0cab09cf8661428aa5d427d42127a57c524443fb975fb17e2c4f56db3c6ad760ba356d958554e2a22092cff495d5ec933962fbc9976f54cf6248e535a64a2a1f495733bd863e3d20d4d9bbe1cf8a37dc97221bdd050d79f4c47337f30bddb292ebf8bad09862b01fc8e51e9310eda59bdae796a9dd85db471ea05554e14caa88215a0d301967fac31113217e18483b136be01acf67e0c1d050000",
    ],
    [
      "ETag",
      "Nis+0TFzRRLi5sKUHUBWNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-82-1595636454214",
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
      "0002ffcd546d6f9b3010fe9e5f61b12fadb4bc4093a8cd1475694b37b684b440fab2aa4a1c70a85bc0d436d1b2aaff7db649804859374dfbb06f70cfdd73cf9defeea50680f6849340eb016d8ec3e70cd1d5bb4732d7de4b0471184a64d98e0e53efbb7773f2c3989cafe65f32f7860dfafddc0bab6806e33442754632ea23d69bb88d90922c859490ba20ac1f1a75bd73d4e91e74db9db6a1b7f35886a2c510274f92e181f394f59acd8d8e46484818219862d6f0495cd89b4ba39952f2887cce9adb699b22136bbe9df838223ee49824fd899b8bc818a25314431c4919657430ffb84ddfc0306e84c27b897d047d9f640997d2721a9f240b1c6654910ba617611466a5b9f8ad1834d71c9aa71e381d4f6c6f6f06634937db079081e9942296451c9c3be31198a522fb036488cdc0f567d331858592058ed0140733d007c760609f01301c5f9bcede8c71215af0d8630f0cadafa68087d6c8f280ae742a0d015a40c17f06b9a0e5157512cb8d967a568e182fc204b86ebcb5e3cdb5b5d76b9125a59850cc55b196ed99cee0d4b3aecc5286e8fc1085d05fb9cfb2f70b18315446430a63c4111d9100498a8bb16b79d6d81e0c4b06d5cc8b8d27136e7785d8b2a62a9bb74ad156c10ae6b955caecb6b50af6fa7e27cb158cb21d34cbb559d3b7386a3bd8fe469d678d4cd71b8c2efe8142a365b4ea2db91c9e6ef4f4839ede6eb45aad6fbf10befebaaf55526a62bfd682b5cb89e9dcca588549c4410b4451e29722de9c9e923287ffe07c08f7cd32cb08b1cf457eb1041c338e7d5666f72952be1e8ef337ca093b5d436f6d76430652bec3a37bb4f14049b01bdf4a9e5512234a0975d446570f8190c372e53811cf82834b75198ad9aed6f6bc0dc58831182a0d360131e4fe034e42c0709888d4148105a1609125be8ccf0f8332411a66314a389013c57aa018a80670b3342594a3a064110ef94d713dc7b23fed7f58ff9edc7aa62b0e1507777aef50bfd7b68642555bddc4ca6df94dc96f16fd9f96bdd98dfb7280b8527836b64d3513b5d7da4f60",
      "eac16069070000",
    ],
    [
      "ETag",
      "v4l8pTxTXBz2UFybJuSXsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfc97282300000d07fc9599d2028a4b7b2545659aa8df5924188cabe2430c64effbd4edf1fbc1f906619658cf0aea22d7803225da355b6f23a4d97e23c88956f9b4ac387f0a12fde6faab28d8bb0f44c37982cccfb8331a0be5b565e79954697f16da318cea347d438447db26b23f36b5e1bc4c2da7c71d5331e06a77826d8b8669eea9fbc93c3d5257790ea13e7b80f47076265aa9b70076f79e9caf3fa0e2d2db84f11614da2ed8f26917362e7b0a526c74fe266672cd8250f05da94469dc4094475f359e96aa8db1d5800fae88b913252bc66f206a105f86f122e7afabaea341de9087eff004162159405010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-83-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6fa240147df75710f6b52a027e35315b6be996447117b1cd66b321c378a1d3224399a18d69fcef3b0ca8b0364ddfe0de7bce3df76bde5b8aa23e9364a35e2a6a40a2971cb2ddb7271aa8178507388a0a8fe3993b2db99ed90fbd10cd9764bd30aef3683229a3884433b44d6368339a6718d8e57ad589329aa728a3b42d08db23a3ddeb8ffb036360f64dbd67965806713827c973c1f0c879ca2ebbdd838e4e446914034a09eb60ba3ddabbaf7a37cde81360cebacdb45d9189753f4ffc3da618714293c97a558ac819643e6c11890b1927f426b86ad27708da762211fd4a30208c699ef0425a498369129228cf24b9607a174661969a8fbf3583bab2e6d6cc53308df36de227680b17ca0671e4f35d0acaadbb5c28b673bb741753cf5e3afe6a76672da69dd972be5e382be5e1ce722d85a32006895526ca95fc73c48f5424b36d807192484d5ee1ad2911deaa8ff607233c5214244215832acc1f6a03d41b69e3200c86381c19fd20d4200846c1b08f8c40c36313cc4d00a8ce2095957894d06404daa017eae08f04956f1a9b9e3f3642dd1f8cc10c35ddd0f530502bf4fe58cb5b4638dc10965246aa26ab0faeed59bee7ae9dd9d4b3ea7587288ff94da9bc5975a31c2e1a5457fa594bce14a519a142941ca7ed78963b9d79f67d4d86d8ad394408ef562fc5768528667042a34ccc8a43b6a01b9087365d583727b0dc949f87202622fe1c759eca1181c5fc652d67f36fe6f1c462355a51cea6b4aa2bcfb59d1f6acdb9ff98e61ec5f9073caf95594d45b71e45875983abf5ffd7df562d872a6eb592a7fe5a5beeef022b7d85c785103248f029eb1756b70096ee2f3c4522fcf0301408f1361cf3332ecce28a303b65c719943745cace5784fd816eeafd03a10066fc3c6268688788b3c7a1c8055b48f8a117e523513672df9094d7e44858112eeec0a986b86fed5bff00ce049ad9e1050000",
    ],
    [
      "ETag",
      "NT4y0nBCIW1faLOiUM3Bug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1595636454214"
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
      "0002ffc554d16e8230147de72b4cf7aac954445de2834e374dd439c4ec6131a6c2057140595b5c9cf1dfd716545e5c4866b217da7bcfb93db9b73d1cb452097df891831e4a68ed7b9f09d0fd9d07fc556e4c6049c099586212314065c9068e3dc9b6dc7836ddbcb57735aaf7f743f836b7cdd0eb745216b3371062c13b8848c4ae0f81c344fcaee25296575884439027da2448c268a5c2f205e6fb58c173cb1c4d9ff348481c854c17e371b7371ea00c3a96af8b3898e3953af26f126a5d6a9918da92b5092e50886cb8741d53b2059b8fd478190ee3002a8c24d4069689c8c214f62849624c09a98854a555af541bed865137f4865eabea277a406ccc7d12c98ac51c9df539e13830c9971c3132d23ba069984efc340ae4e62e213f2101ed64b1efa073ee58fe85389a5a869ee366bba596ab2cac2a26e5fa01acfe495d5cc9068b175e4c3b7b263712c72149225e50fa69fcd2bd61e3c20d459bee77adc1ad6419175e28a86b8d2683b9d59dccae8a8beff26282de9e039b51223cc64039ab7aafb71a4de31e9d9cfa48a413b9342aa709a8b48dc51f6be873917371c0403b6a3fcc864a401d050000",
    ],
    [
      "ETag",
      "TfpPNhW9v2r4DyHezRj7mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-84-1595636454214",
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
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "de",
      "5f",
      "61",
      "65426c126dd6d22256a9625d1bb488d0b03685a109356e720d86240eb6830488ff3edb6993542a689a26ed43a5e6dedd7bcfbe3bbf341032ee491a1a7d642c49f490037bfa704797c6814240e04821a47b467e8ecd672bb058e76ec457eddeb3331c0c8a2ca2ab394eb2189a9ce62c00de9fcf5a11a3798619a54d49d83cee36dbbd2fbda3c3a36eafdb69778b5a0ef1ca21e9bd62b81522e37dd3dcf86845944631e08cf0564093326e3e76cc8cd13b080437b7654da9c4cdf7854f621a6041683a98cf0a133907b680049358d9a8aac3e5d76dfa16c1492b92d98f24001c04344f85b256d004345d9128679a5c32bdc8a00c6bcfe5672d60cc2cc71a7968e4ce27de471f278aceff8430478b05039ec7029d4edd73e46752fd1673e03ebafa6e4d2d19617445625890d047037482869331428e7b654d6b4413d7438e7d6649dcb1cf6d0fb5b5516d2284159602632c24afa8d9535811b4755f0570519649707df3f68ea61bebacd7522563843222f469ed89674d8723cfbeb42a1bf2ea1d8870f0347b5097bfc23187aa1a339c8000764e43501417eeccf66c7732742a067d9b179b4c2ed37e9566ab33d5d9bca70cb60eac61514495cda3ae51c35e0f76b25ce238df41f3b80e1bed2d8ec60eb6bf7177eab8c37fe36fafddea75f7de30b9fe77d3a809187299d6e68c1f736b7aad6a35a69029ac80411a5492ef4e4a4559c07ff056c8f4cde6aa0ab9bca53e1732cc050978a51e30d0b91e498a7e1484f277fcb9b72194854cecc8e81c6e32200d77e35be2794d",
      "1818a36caad7b7bef5d20e2f9c935436413e9ae50827c0398eb4c63c95b7c0012f63407ab251d950e4fb88a4484d02f2bdeb0b6bb11e06ff007dc3210a69aeaa7483fba868efe66bbff8dc37b61aaa9dd637a6f606bc6df73f18de4ce44dd536a1d5c7eec4d29d68bc367e03aaa0338dcc060000",
    ],
    [
      "ETag",
      "i4KiXD/zEcEr2jCsf15zLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "bb",
      "642d0e22dfee9216904fa3a054609309211602030ad4829ddebd4edf0dde0fa08cf1712453dff00ebc80852ad69aad83de449b88abb8f2f0fe68b806dbe139f8760a479b65c1f254a69f5da9c0f0c3734c2f3c17a4ad7ac37fd73ac1a4b8090a26aa05965f6fad70e9f1814f101d4498e4291575945ffa2ac6913a353a92effa84ec5adcaa3b26cb260bfdf4266d51dcccd03313cab2573f4e2445cc825a21b74b475763256bede16165da41094782a53d3ca11d71cdf2b21cce01ec893f9bd0042bc0e76b3df091d4cfd956b3ac15f86f9269b9f2e715713af001fcfe01abb69e5205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:43 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-85-1595636454214",
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
      "000002ff8d546d4fa34010fede5f41b8aff61d5a3469ce5ec5b397967a946acce5429665c0adc022bb688ce97fbf5da02d5c8df11bccccf3cc332f3bef2d45519f48e2ab178aea91f03987eceddb967aea99f40047a1f4dcf8da0f7b090fb7e87a6cfcf2d1d3f360bb7d9d4cca2852a0198ad308da8ce6190676b15977c28ce629ca286d0bc2b6a1b7fbfab93e1a8e345d1bf4b512cb200a162479920c8f9ca7eca2dbddebe884948611a094b00ea6f1c1de7d1974d38c6e0173d66da6ed8a4cacfb79e2ef11c588139a4c36eb5244ce207321462492328e68dfbb6cd277088a3ba1887e211810c6344fb89456d2609a0424ccb3825c30bd0ba330179a0fbf3583ba3617e6cc51308df238711314c399e2238e5cfe9682726daf96cadcba5ed9cba9335f59ee7a76632ea79dd96ab1595a6be5fec6b44d85232f8202ab4c94cbe2cf123f85a2229b0f8c93a4d0e4486f4d89f0567d9c7f30c203852411aa185461eeb837427da377ee05de1807c650f7821e789ee18d7534f47af85c03cdf700d5190a65251e2534e96986a701eabbd81b8d5d6d38f65da33fd2dc81d617241869581ba8157a77a8e535231cae084b29235593d57b7bee98ae636facd9d431eb7507288ff855a9bc5975a31c2e1a5457fa594b4e14a519a1425431ceb9e598f674e6ccef6a32c46e2d2044f86dfd2cb72b401183231a6562561cb225f5e560546bba34af8ee062536ef7414c44fc39e83c962302e5fc8b5a4ee6dfcce388c56ab4a29c4d6955d78e3db77eaa35e7ee639a3b14e51ff0bc54663515dd7a141d660daed6ff5f7f5bb51caa78ab953cf5f7c6b41f24b6f0498f0d016490e063d62facae0496ee2f9c2211be3f0c12216ec3213fe3c22c5e1166c7ec3883f24d91b2f315a13ed2fac303a10066fc34626018fb8893e32073410c09dff7a23c126523770d49794d4e0193e1e21d58d51077ad5deb1f53906867e1050000",
    ],
    [
      "ETag",
      "Hd4BRMeYPaF78Jdakq2jjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1595636454214"
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
      "e7",
      "57",
      "2c",
      "f5519638059c267b608a4a32e7dc30f123cbd2c1853181625b348bd97fb72d6ce36586c425bed0de7bceedc9bdede15b6bb5d07b9c05e8b285e671f451005d1d45c01fe5660cac4838134b4e320648976ce038926cfbf8e335b8739e5f6c8b9a3c1f9d5fcc0b37eaf54a16f3179062c1fb169188c318928089f84dc5ad2aafb00ca7204ff44952a4d94c85fa0ee6ab5cc1136fec0e6feb484a02850c9f0603bb3f705005adf5fd2201e678a68efc9b845aa75a258696643e861028643eecbace295982cf5d355e86d33c81362305f5815522b2b084234a8a1c5342da22d5ee9aed8e79615a6796611aa71d63434f888f794c3259f134415b7d4e384ec6e44b8e1859e51dd0322c27be19050a6b97509f90803e65711ca06d6eadff4274879e65d4b8d56eaad52a1bab8a49857102b37f521757b2c0e28537d3ae9ec981c4714a8a8c3794be193cd8076c5cb8a169d3d7b6e71c4a9671e18586ba9e7bef4c3cfb7eb4575c7ca73b13f4571cd88812e13106ca599d13a36b9e5b2768e3d42b229dc8a551392d40a57d2cfe58773117b910270cb4b5f603091491f31d050000",
    ],
    [
      "ETag",
      "A+qZdHEXYA6r5tpP79buIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-86-1595636454214",
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
      "945d6f9b301486eff32b10bbd9a4e5ab0192548aba28651d5a42ba84b4daa62931e440dd02a6b6491b55fdefb3811050bbaa77bb83f3f19ee71cdbe7a9a128ea1d8eb7eaa9a2ba38b84f81ee3fdc1257fd2c3dc051203d817fa1ff9ad9df2fa2474defe1d574b21b3f3e8c467914ceb2198a92109a8ca4d40376ba5ab6024ad20451429a42b039309a5d7da81b3d43d3b593ae96e73208fd298eefa4c20de7093b6db70f1cad809020049460d6f24854dadbbb937642c92d789cb5eb65dba2126bbf5df82c241ee298c4a3d532874819d03544088759b365f6d6fd52976f6114b50211bdc31e20cf2369cc255a2ee391d8c7414a3371a1f4248cc29c3197bf1583ba34a7e6c45126f395ed7cdca048ca6d3e298829eb350596865cf9ba98cf944d22aadf20066ca35c7f3317a6b050e2e310d678bb5146ca9932b6cf156573f89b5a33cb51ba195656720b8ce3380373901b420547788b615aaf9c6329214510170c45d8badf315077d019babedbf7fc414f77fd0eb8eec0edeba8e776bca106dad6055455e0b2769e8f62312dc3e80da0a3213404a4f501f9da40eba2211a18db6e1f0c74d2f13da3afa985c273d9cf03c51cce314b08c3c5b4d5eb85e5986b67b1b22763c7acf6ee2331caf39cbede79ad252e8654a57d6b2c2f88128a8980caced5b21d73319e38d65505435cb22904c8db2fefe535f351c8e0988d288a80039d91ad3c1cf572beb41c6b6e8fa74785ecde5c1e229908fb5dc21e7baaaa39fba47ed4f929e456896994b3ad755357b94261fa8accae30abdd9a46e315b5ff4aa7ff03aff8fad3a888ab62611458ea8f95b9f82973339ff42cc0070ab1772cf78ea7231373f73bf6a1083f6c2799211654599f716116afd863c7ea1e85fc4de3a8e83513d40dbd6394822291f29711e2ed1e225e6c28590b2288f96116f9a6ca07f95c434a2b38599a0c176fd0b6ec8b0cbef1dcf80bb2",
      "d38b4966060000",
    ],
    [
      "ETag",
      "gfG5ZMNKGmx453iULCvAxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1595636454214"
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
      "00000002ff4d51d14e8330147de72b487d5412191b4e933d38836e0959946d4f66593ab83010b8d8167559f877db021b2f6dcf39f7f6f69c9e0dd3245f69199127931cd2e4bb0676ba49407ca84300bcce05975b85250772a7aa41d044553fe09fefd795e34cd7afb747b6c992d1c24b66b3b68a874728a8ac3b4b24719c421e71893f35363b5e6b252d40ddb8df333d50dfd069e254696db9da786f5e30940a8cb4b4dafafef3dcf74827357adfc9b5d14fc9f010400c0cca10ae0faa1866108aa576ce6951e56071ac5908bc1ba21a5b3961585794215a92b2a6ae654f1e27aee38e27e3913deecb730ca948b1541ddb35b9cc1728681ee0af724fec361ed6c2368c3e0a120ff2192624a59fb6f94235dd6967f468771d363f09e0ef0ca5170edac13de9a378416555a82404ab41d32195bfb54845c7198df10fda4b5dee18020000",
    ],
    [
      "ETag",
      "7oxLLup338SF+hrTjg2HEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d07fd9e7c8888ca26f765ca32a09ab78d9596b5d1a2a16293afdf7667afee0fc0042291b473cf537f6055ec14a246d4ff75eafc2c3850e6d207696c15a45a5efa5d915f649a29b1047485cf8250db3f24acf55e75ac8cf0ee568e3ad90cb224401c64a2b5c550e3f7cb698d50db35ca58a11555ef442fcdc255326d84ef1a852211b2d315ca7da7f6364c98c73d2e8cdf7203910b949a018c83dc281f7b57c8a72619b75a5f31c57fb54620c7594cca9e62cdcce3cb9ac7a5568d1f058f3ba9b616c821d60cbbde16cc4cd737694356d07fe9b785aefec79858c70c6c1ef1f8a112d3e05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-87-1595636454214",
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
      "51",
      "6f",
      "9b",
      "30",
      "10",
      "7ecfaf40ecb54948134252295aa394aed912d211d2769b2664cc41dd01a6d864aaaafcf7d9401258aaaae205dfddf7dd7777f6bdb61445fd43125fbd50548f84cf39642f9f9ea8a79e490f70144acfb7e0e7dd430c9681b6e3edd7db0734bb36fc703229a3488166284e2368339a6718d8c566dd09339aa728a3b42d08db23a3ddd3c7fab03f1ce883f3dea0c43288820549fe488647ce5376d1edee7574424ac308504a5807d3f860ef6ecfbb69469f0073d66da6ed8a4cacfb7ee2cf11c588139a4c36eb5244ce207321462492328e68dfbb6cd277088a3ba188de120c08639a275c4a2b69304d0212e659412e985e8551980bcd8763cda0aecd853973144ca33c4edc04c570a6f8882397bfa4a05cdbaba532b7ae57f672eacc5796bb9edd98cb6967b65a6c96d65ab9bf316d53e1c88ba0c02a13e5b23859e250282ab2f9c038490a4d8ef4d694086fd5c7f91b233c504812a18a4115e61ada10f546dad80b3c0307a3beee051a78dec83374d4f7343c1ec0c0f700d5190a65251e2534d1411b6bfd9eeff6b5a1ee0e4663cd451e60f7dc18636c8036001fa9157a77a8e56f46385c11965246aa26abf7f6dc315dc7de58b3a963d6eb0e501ef1ab5279b3ea46395c34a8aef4bd969c284a334285a8629c73cb31ede9cc99dfd56488bbb58010e197f5b3bc5d018a181cd12813b3e2902da92f07a35ad3a57975041737e5761fc444c4af83ce63392250cebfa8e564fecd3c8eb8588d5694b329adeadab1e7d617b5e6dcbd4d7387a2fc0d9e6d655653d1ad47d161d6e06afdfff7bb55cba18ab75ac953bf6f4cfb87c4163ee9b121800c127cccfa81ab2b81a5fb03ab4884ef17834488dd",
      "70c8cfb8308b5784d9313bcea07c53a4ec7c45a88b6f34da130a60c64f2286fdf3de3ee26439c85c1043c2f7bd289744d9c85d43525e9353c064b878075635c45d6bd7fa071d4fea11e1050000",
    ],
    [
      "ETag",
      "KfZVXmeN7av9vJPXaCF7dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1595636454214"
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
      "000002ffc5545d4fc230147ddfaf20f5514840c7fc48784045c50c1418f1c11052b7bb39ec7667db6988e1bfdb7643f6a25922892f6bef3de7f6e4def6ecd36a34c86b9c06e4bc419ee3e82d07be3e88404ef4660a226752a825c35400696a36481a69f661b89edcb923b85badde6e1fefdf19b6d368d2eb152ce1bf404215ef53452a0e63608150f193891b65de60294d409fe823cb937469c2e60e96ebccc0336f3a1cdf54910403838ce7aedbbf7007a48436cd9f45022ae9d21cf93709b32eac528cacf0790a2170487dd8759d715c812f8766bc8226198396c09cfb204a115d58c011c73ca31cb1a552add39356a77bd6758e1dbb6b1f75ec2d9da14f658ca9ae98cfc8b7be4449d9143ff4888953dc012fc262e2db5190b07209d50929e85d17c701f9ce6d9abf108763cfb12bdc72b7b02a95b555d5a4c298c1f29fd4d595bc50f5c2eb6997cf644fe234c13c9535a5afddfbfe1e1b576ea8dbf455df1bec4b5648e5859abade70349879fdd1c38fe2eabbd899e0622d413c70541e13609cd569dba7dd13a74db64ebd44ed44a98d2a790e26ed53f5c7ba8da5ca859409b036d61749f6105a1d050000",
    ],
    [
      "ETag",
      "+fyQJLMeJjjqHWOvlo0ngQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-88-1595636454214",
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
      "00000002ffad545f6fda30107fe75344d9cb261592000950097588665d241ada105a55d3048ee304b7214e6da71baaf8eeb3930041655535ed2db9bbdf1fdfd9f7da5014f509a7a17aaea8018e9f7344379f1e49a09ec90ce2209699e7584b3677abdf6e001fac7c15ea571ef26f87c3b20a176806d659829a8ce41422763e9fb5624af20c50429a82b0d9ef370d73605a1dab6b76db46b7c4329444139c3e498615e7193bd7b49d8f564c489c209061d68264bd8f6b2f6d2da3e41141ceb463594d2831ed7de18b8440c0314987f359692267882ed01ae044da38a0c3e0eb317d0b83752b16d52f18220021c9532ead953490a4118e735a900ba6571114e1c2f3feb7165067f6c41efbca783a77fdcf4bb09674cb2f0a60ca624111cb13ae7cf3a6d7ca3213ea2bc0105b2af7df6dcf16114a229ca0050e97ca50b95046eea572a82b6313e7daf115a33057088788719c16f67c1024a8664a64ab963a27a6b9a79024800b85aa6cd1d32d60f4f54110053d18f53b6610e92808fa41cf049d4087832eea86010275062eb54b3c48498acc811e0ec0c0e881aed9097518f42dd817981e1840d036ac1044bac8aa15c3767f9e5f14737489594618ae7aaede7b8e6f2f7c6fee8e47be5d3f7b0444432f4bf7c7273f3a12174daabb7daf2d6f1c65141361aa98aee3fab6371afbce5dcd86b86a131403b8993dcbcb168184a1031a50b0461cd16b12cae1a837d399e33b537734393014b7e76657c944d98fbdd9c399ea6cfe263b1e753985322a6d5a5db596db9e9d64b903497e82e6a50aabc61147e304dbbfb89bf99ee35efd077ba34c0cee2f16abaf9f8d1abf2a5647654dbd9ddbde83c4163999f15084284ae141f103cf4702cbf40736a328dfed298910ab6aafcfb8088b970cd9411d5254be6bbc2ea751129a56cf68eb3b4201a4fc6d45dbda57bcd955520bad51ca77bd287756d9c8ed91a5bc66a780c972f10edd6a80dbc6b6f107694c408870060000",
    ],
    [
      "ETag",
      "qg/lyVhxNbcY6uhd0GReTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d51d16e8230147de72b48f73a127160dc121f74611b0933938da7c5988257840197b5c5cd18feddb680fad2f69c736f6fcfe9c9304df293555bf26492384b7f1b60c7bb14c44a1d42e04d21b8dc6aac38907b550d82a6aada77a3f73c98bba577a8e2ff62bf9a8c5e9cd56cd655f1640f259575278924de65506cb9c4df1a9b3dafb58a96a06edc6c981ea86fe83571acb5e62fbfbc572fbc954adc6a691905c17c1178a4975abdafe5daeaa7e41887b003065502d707d50c734884af9d735ad605581c1b9600ef87a8c64e4e193635658896a4ace9d4b2dd4777f230715c676c3b43798109151956aa23fa2497f902052d42fc53ee89ddc5c33ad8853144417637f9dc2624a5836a1e930bd5f6a7b531a0f575d8e228807f30945e386807233244f18ccaaa504908d680a6132a7feb2d133d67b4c619aa1518ea18020000",
    ],
    [
      "ETag",
      "I5UMjLA5mEvnbxlhQ60F4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb642d0e0841e88e9f455204ea406d360c26c102159804e4d3e9ddebf4dde0fd80821026443e740d6bc10b588a9db9255bd419b692d06ab69281b3fb4daf339a11da78e8a0dffa9a1f06075b1e7a97ce9a9bee5a1e64e1f5d83953804bbaf3048da451b2e27169509d67b661f914ae69aa05b08c43693a91d9f09dbd8c3ee4e35db0549a43ed0bcf99959ef8e7d28598254d646832579cd1289d78b940ec413541fd25458a19c0d7c13748e49ebfcd495fc3657d7bc88a1a3ddcc871cb669f61726d05d80036f7156722af9e33159ae606fc37f361e9d9f36ab382330e7eff0048b1d01105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-89-1595636454214",
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
      "545d6f9b30147dcfaf40ecb509f980402a456b94d20e29211b9056db3421630c750b9862d3a9aaf2df670321b05455dfec7bef39f7dc0ffb6d2049f213ce42f95292031c3f97a878fdf24802f942781003b1f0e8a992dd962e21bf76ea836951086e1fc378b9aca37085a620cd1334a4a42c20a2977b771417a4cc4141c890130e8dc570a22db4f96cae6aea74a2d6588a926883b327c1f0c0584e2f15e5a8631413122708e4988e20495bbbf23255f2823c22c8a8d24fabf04c54f938f1d78440c030c9967bb716515254f828053811324ee830b8ead38f304847318f7ec110010849993121ada681248b705c161539677ae3466eae34b7d78e4176cd8db9f624489232cdfc0ca4e8420a01033e7bcd9174e3ecb69265dfec9cedcab376b6efaebf99dbd568bddbecb7b62bdd7f331d5362204850859596d25575b3f9a55254650b116538ab3479c2db51c2bd4d1fad7746d8520812ae8aa226ccd7c7733031c68b200a741819332d88c628088c40d7c02c18c3858ad43040a0cb5029abf1202319d4746d6a40c39f8189eeab909f806a04fe14a9d3f958d74310cce5067d686bf95b6086ae31cd09c54d93e57bc7f24cdf73f6f67ae599ddba235026ecba56deafba570ee30dea2afda825678af202132eaa1aa7657ba6b35a7bd65d4706dfad0d8a017c759fc5764520a1e88406059f1543c596846230b2bdda9ad72770b529df8f419447fc6e759ecae18162fe552d67f3efe7f1f862f55a51cfa6b6caaee758f6addc711edea7b90349f90ecf4b639673dead07de61dae31afc7ffa33e8e490f95b6de4c93ff6a6f353602b9ff038284205cae029eb275657006bf727be221e7efc180482ff0d6d7ecab899bf22484fd96181ea3785ebce3784da5c5f4c5b420e2cd8598431d627c788b3cf41e44229cad8b117f5275137f2d0935476e4543011cedf81dd0cf130380cfe01bb0b4c6be1050000",
    ],
    [
      "ETag",
      "7m/nGuSooZO4hEIscaGjdg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1595636454214"
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
      "90",
      "fa0a51744c34f1011094880863c4074348d9eec6a05b67dba984f0efb6dd90bd609648e2cbda7bcfb93db9b73ddb1a950a5a87b1876e2b681106ef29b0cd590062ac3636f094082e9784c61c5055b141e040b10177d2afde78b91a06cb736bf3445ea7f67a7c7797b1b8bb84084bde564632f643201e97f19b8e2b795e63318e409de8529246f15c87d5032c368986278edd1f3e1491887a1a194e0783567bd04539b4ab1e17f1b0c0737de4df24f43a337231b4a20b1b7c6010bb70e83a617405aee8ebf1721c25046a9ca6cc059e8ba8c20c0e184d13cc28adc954ad7953ab376e1ad6956536cccbbab9a713ea6211d258554c27e8475f5081894d3fd5889195dd01cbc26ce2fb5120bf7009c50949e84315871efac9edaabf10fb43c7320bdc7c37330a95a555e5a4fc90c0fc9fd4e5952cb17ce1e5b4f3677222711cd1341625a57b8397d6091b976e28dbf47dcbe99e4a960be98592ba4effb93b715acfa3a3e2f23b3b98a0bd11c0478c4a8f71d0ceaa5f98cdc6b57581f64eed50e544a18c2a580a3aed62f9c77a0c85ccf998703076c637bba982571d050000",
    ],
    [
      "ETag",
      "eaCuxFQhjNgh/6yKlWURkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-90-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad545f6f9b30107fcfa740ec65d39a842440a052d44529dd90d2a421d0aa9aa6c41843dd02a63674ebaa7cf7d94012a2665535ed0deeeef7c777f6bdb424497ec069209f4ab28fa3c702d1e70ff7c4974f4406e520129934f37ed3e257b1f06f33afbf08d28b85f7793c1a5555b844339064316a33525088d8a9b7ec44941419a084b43961db54da3dcdd4f481ae6a6abfa7565886e2708ad307c17097e7193bed76b73e3a1121518c40865907926417ef3ef5bb1925f708e6ac7b28dbe54aacfbb6f0594c20c8314947deb232513044572801381636f6e8c0ff7248dfc120e944bcfa0943042024459a0b6b150d246988a38296e49ce9850779b8f4bcfb6d04e4a535b526ae34997b33f7e31a24826efd49024c5aad2862459c4b17cefc525a675cfd0e30c4d6d2cd37cbb178849210c7688583b53492cea4f1ec5cdad755b1a97d69bb52af34570a0788e5382dedb9c08f51c314cfd62db58f4c7347214840ce15eab2d550d141cf504c3ff4873034069a1f2ac8f70d7fa88181af4053456ae023d064c88576850729490786e2eb7d2dd07d45d7351505fda1e9abd0e8f7f4c05034a8992a54756328d70c9bdd797e529ca373cc32c270dd73f9c6b15d6be53ade6c3276ade6d943c01b7a5eb93f3cf9c19172dea4a6dbb7daf2ca514631e1a6cae9da33d772c613d7be6ed8e0576d8a22009f978fe2b2852066688f0614242847f492046238f2d57c69bbf67c369eee19cadb73b5ad64bcecfbceecfe4c4d36f7393b1c7535852a2a6ceaaadcc86d4e8eb25c83b83842f35487e5de0147eb08dbbfb85bba8e3dfbfa1fec818c0fee2f16ebaf1fad06bfcc57476d4d5e7896732bb0654e641c14228a52b8577cc7f311c02afd8ecdc8cbb77b4a20f8aadae9b39c87f94b866caf0e29aade354eaa6954849a6e98667f4bc881347f5561f64c655bf16a57092d94a034dff6a2da5955233707968a869d1226caf93b9cd503dcb436ad3fafbd9d3470060000",
    ],
    [
      "ETag",
      "npUzruxuQbYpU2QdnFQU+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1595636454214"
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
      "df",
      "6f",
      "82",
      "30",
      "10",
      "7e",
      "e7",
      "af20ddebc874531397f83037e34c8c99a00fcb424c8193a1c0617bb839c3ffbeb680fad2f6fb71bdded7b365db6c9fe4117bb65990c48712c4e92e065aea830bb24c49aaadc05c02bbd76e201e6b37e65eb0fba3c3effe2dc9f0f8e0c6dee774391ad52e197e43c695efac90c2db04d2482afc65b0ddf046cb7906fac6cd469886e68646a35361b4d96235994edc5b29c3c8488bf57cfe329e4f58235566f7d55a99a7ec3070610b02f210ae0f2a04ee20a499995cf2ac48c191588a1064d34417d6722cb02cb8407414e50c3b4eb73fec0f9e06bd7eefb1db6bed29869c12cc75c5da6397fe84c453177ff4f4ac5bc7236a5887d146c1b637f9dc26a4a4a32eeeb00b553527df6a917f6d363e11c80f816a1609515dd946f18a7a54d2499028c1d02157bff59e50c35995f50fe288042518020000",
    ],
    [
      "ETag",
      "onSbjztqxkDimov/RgSYGQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfc77282400000d07fd9b338b21421374a10118234512f0c65690e75418a937f0f933f78ef03c23846180743f34235f8024b08f97dbcbf349c485a496cb6b720194b8c1dacb3f25cd6e673e5c24357b05af5c6a95f4659d4f8ddc45c89935373b2471e53e221ca6678aeeface0497526fa0a9dbb8c32ce4484b5b794c3f8a21f976985964d25d79f9b62b8d32c740f29169c010a6a013359824826d24a794ebe4e4ef6f7a1a3dcce1855e3746637a946550897397b6f339ba6e5c4d3d300562f9a5fd5cd329a83ab596007d0dc163dc241b1cd2886e777e0bf190c4b8bb6ab88c21ef5e0f70fe58984e305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:49 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-91-1595636454214",
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
      "ff8d546d6fa24010feeeaf20dcc76b552a2836315763e9d59c620fb0bd975cc8b20c745b6429bbf4d234fef7db0554389ba6df60669e679e79d979ed288afa48d2503d57d480c44f05e42f9f1e68a09e480f70144b0f37ef33c3fabcc8d39b1f9a1bf4d777bfbe3d4d27932a8a946886365902a78c16390676be76bb714e8b0ce5949e0ac2d3b176aa1963633818ea867ea6e9159641122d48fa2819ee39cfd879afb7d3d18d298d134019615d4c377b7beff9ac97e5f4013067bd76da9ec8c47aef27fe92508c38a1e964ed56220a06b90f1b441229e3800e838b367d97a04d3716d1cf0403c298162997d22a1a4cd388c4455e920ba6576114e652f3feb761505d6b61cd3c05d3a4d8a47e8a3670a28488239fbf64a05c39aba532b7af56ce72eacd57b6efceaeade5b43b5b2dd64bdb55eeae2dc752380a1228b1ca44b928ff6cf1532a2ab385c038494b4d9ef43694086fddc7f91b23dc534812a18a411de68ffa43a499fd711005231c99032388fa1004663032d020e8e3b10e7a18006a3294ca2a3c4a69aa69e6d978301afa0870e8eb60e8bea9c3c8d791d91f854610e8baa9d6e8edbe96bf39e17049584619a99bacde3973cff23d676dcfa69ed5ac3b4245c22f2be5edaa5be570d1a0a6d2f75a72a428cb0915a2ca71ce6dcf72a6336f7edb9021766b0131c22fee93dcae08250c0e68948b5971c89734948351ede9d2ba3c80cb4db9d9053111f17baff3508e0894f32f6b399a7f3b8f2716abd58a6a369555753d676e7f551bceeddb34b72829dee079aecd6a26ba752f3acc5a5c9dffbffe741a3954f1566b79eaf7b5e5fc94d8d2273d0e4490438a0f593fb0ba1258b93f708a44f8ee304884b80dfbfc8c0bb37845981db2e31caa3745aaced784c6703cd28c1da100e6fc38c2d487bb88a3e32073c10652beeb457524aa466e5b928a869c1226c3c53bb0eb216e3bdbce3ffc7e71a6e1050000",
    ],
    [
      "ETag",
      "t8hp5E+LrnPX1Sb0UWZKqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1595636454214"
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
      "af20f5514800c714131e405117f9663c184348d9eec6605b67db6990f0df6dbb017bc12c91c497b5f79e737b726f7bb6d34a25b4f12307dd97d0d2f73e12a0db2b0ff8586e26c0928033b1c4246280ca920d1c7b926df7cdbe39de0cafd7df7af8ba1ad7adeadbabd76aa52c66af20c482b71391885d1f028789f85dc5a52cafb00887a04e244112460b15964f30dfc60a9e5a1373f09c4742e2286430ebf5da9d5e1765d0be7c5ec4c11c2fd4917f9350eb5ccbc4d09a2c27e00285c88653d731256bb0b9a9c6cb701807506124a136b04c4416a6b0474912634a4845a42acd5aa5d668368c1b436fe8f59a7ea007c4c6dc2791ac984dd1519f138e8309f9922346467a07340dd3891f4681dcdc25e42724a04f59ec3be898db977f219a03cbd073dc6c37d772958555c5a45c3f80c53fa98b2b5961f1c28b6967cfe442e2382449c40b4a3ff586ed0b362edc50b4e9c7b6d5bd942ce3c20b05752db3df9d5aedfee8acb8f8ce4f26e86c39b01125c2630c94b36a55fdae716b54d1c1a90f443a914ba3729a804adb58fcb15e7c2e722e0e18687bed0780bb48da1d050000",
    ],
    [
      "ETag",
      "cMIMIQkO+jz4mKhQ2T0YKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-92-1595636454214",
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
      "94",
      "5b",
      "6f",
      "da",
      "3014c7dff91451f6b2490502245c2aa18e41b665a2d04168354d1338ce49ea2e8953dba14215df7d76c225a8acaab6b7e45cfee7e773ecf35cd134fd37497cfd52d33d123e66c036ef1ea8a75f280f08142a0f0bc2386a3e7863f3c6f53f71937c5bd3cd53bf5f44913c9ba3388da0ca69c630f0cbc5bc16329aa588515a9582d55eb3dab07a56bbd5362db3d9308b5c0e513026c96fa5702f44ca2febf53d472da4348c00a584d7308d0ff6faba594f197d002c78fdb46c5d56e2f5d70b5f4514234168d25fcc0b888c035b428c48a4308ed9bef7f154be46505c0b65f49a604018d32c110aad90c134094898b15c5c2a3d4ba334e7cc87df92419fdb637be86ac3e962e2be5fa158c9ad3e68886bcb25039e4542fb3c9b5e6bab5456bf471cf84abbfb6acf6c69613420112c89bfd2fada9536988c346de52301c5ffd8b9765cad9183e5457de08224399a8bbc084a40d2bb6ba77366920709258284a4d8852d3b461b35ba46cf0bbc0e0eba2dcb0b0cf0bcaed7b150cb3370cf04d3f700951584aa5de4a384265e37f0da5eab071d6c9aa8656103ba6da3e7079661b43a560bfbd8f71b28d0770adbc3799e181130223ca59cecfaaddfcd1cd75ebab3c5643870edf2d903249b392ae84f4f7e7224219b54a67dad2d2f885246a884ca27eb4c5c7b3618bace6d09435eb33184086fe68feaa20528e270cc460cc520805d535f0d47bf99ce1dd7994e06e3a3427e736ef6915c86fd3cc01ecf54567337e9e9a88b29145685d936f5926f7b7156e51645d91999f5ceac374e342a67d4fe856ea486f8ff704da369540db504fe42b9fbfa552915d1e5e6d8d1e9df17f6ec87cacd7dca3383001824f858f60d2f482516ee372c4619be5f532a436eaa437d2e",
      "a4593e66cc8fd53183e26993b818482168c927da68ef056522132f23ba666b1ff16255a95a104322f6bd285656d1c8ed095256c2c9d354b87c8a1367f22587af6c2b7f00178027146f060000",
    ],
    [
      "ETag",
      "rfgml2jbL4PTdBs4iJvoyw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-92-1595636454214"
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
      "6e8230147de72b48f73a32513071890f73239b09711b9b71c9624c850be280cbda32430cffbeb680f2d2f69c736f6fcfe9d9304df2931611b937c93e4d7e2b60f54d02e25d1d02e05526b8dc4a2c38905b550d8226aa3a7885aa64f95334196d3627ffce3facebafd37cde56f1f0003995756789248e53c8222ef1b7c666c76bada039a81b773ba607ea1b3a4dd4a5d696ab4fefd90b86528e9196566bdf7f58f81ee9a446ef5bb936fa2947dc071003832284eb834a864708c5523be7342f33b038562c04de0d518dad9c30ac4aca102d4959b3b165bb33773a993aae33b69dbe3cc3908a140bd5b1fe2097f90205cd023c29f7c46ee3612d6cc3e8a320f1209f614252fa6b9b2f54d39db6468fb6d7618b5a007f6328bd70d00e46a48fe2119555a19210ac024d8754fed64b2a3ace688c7f897d57a018020000",
    ],
    [
      "ETag",
      "ROeuprmDd30WWwL/LhUyXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7f",
      "d9e7c8544855df4a082188bbbe98c5b288ac2caa9b4effbd999e3f383f0096259aa67c263dba8177c0e04ede965b8bbc29fca5f4a0d770e9880a5cd5f149acbd100bfe634a94bdb5d22a79ed546a633f16d3be72f08ea262a71b2af19a84cdd7420ae152b94e7ece96b3d977e8ce2ee66a54cb30462231cc2ff5330e84a56cd280bf1b231e8e6e6307ac2875525b7da4cefd2c22a865b9dfea6b28bd9c267ac543c08cb1e66edaece89c65dbae4174f258a5f503158743c80f5964e7500bba630436007d8f2d4553de3e67c25e9637e0bf99cf6c44cfab82204514fcfe0195f5d89b05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:51 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-93-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d545d6f9b30147dcfaf40ecb5f90402548ad62ca56da6846c40da4ed3846cc750b704536c5a5555fefb6c20092c55b537b8f79e73cffdf07def288afa44d28d7aaea890c4cf05cedfbe3c52a89e490fe620969eb16fde3f5f3dacb4fbf47a15dc613330bf7f7b9d4caa2852a219d86609ee325ae408b3f3b5df8b735a6420a7b42b08bbb6d61d1ab631d6c6baa18f867a8565388916247d920c0f9c67ecbcdfdfebe8c594c6090619613d44b7077bff65d4cf72fa881167fd76dabec8c4fa9f27fe9a500438a1e964ed57220a86f3106f0149a48c237a032fdaf43d02b6bd5844bf10840142b448b99456d1209a46242ef2925c30bd0ba330979a0fbf0d83ea3b0b6716288826c5360d53b0c567ca067010f2b70c2b57de6aa9ccddab95b79c06f3951bfab31b6739edcd568bf5d2f595bb1bc773140e60824bac32512eca3f57fc948aca6c1bcc38494b4d81f43694086fddc7f907233c504812a18ae13a2c34076330b406368ca089224b336034c0105ad034800607c8d6b1be811834194a65151ea434d5cc8d65996318426b3c0e7514c1d01e0eecd0b046baade9d8181a23b546ef0eb5bce684e34bc232ca48dd64f5ce9b074e18786b77360d9c66dd1128127e59296f57dd2a878b0635957ed6921345594ea810558e73ee068e379d05f3db860cb15b0b1c03f4e63fcbed8a40c2f0110d72312b8ef325ddc8c1a8ee74e95c1ec1e5a6fcd8073111f1fba0f3588e0894f32f6b39997f3b4f2016abd58a6a369555f5036fee5eab0de7ee639a5b90141ff0bcd4663513dd7a101d662daecebf5f7f3a8d1caa78abb53cf5e7daf17e496ce9931e0f4738c7293a66fd8fd595c0cafd1fa74884ef0f834488db70c8cfb8308b5784d8313bca71f5a648d5f99ad030879a6eed090530e7a71162b9f71127c741e6c25b9cf27d2faa23513572d7925434e49430192ede815b0f71d7d975fe02a363680ae1050000",
    ],
    [
      "ETag",
      "6S7XqFhO3XnGOTWe7T7JBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1595636454214"
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
      "147de7572cf5d111f701b899f8b0e954e2bec71e8c59960a978902c5b6b8cc65ffddb6b08d170d894b7ca1bdf79cdb937bdbc356ab54d07b107be8aa825e82d5470a7473b6023e919b29b034e44c2c098919a0aa6403c72bc9f6ce27e9d3e462f4b57e1c3ecdcc7aa3dbf2eed6d7d7198bb9af1061c1db8a48c47e00a1c744fcace24a9e57588c239027ba244ca378a9c2ea11e69b44c133676a0fef8b48443c850ce7fd7ea7dbefa11cda557f16f130c74b75e4df24d4bad07231f4465ea6e00385d88563d709256fe0725b8d97e12809416724a52eb05c441666f08a9234c194105da4f47653af9b6dd36a5a866934eac69e1e1217f380c4b2623e43077d4e380ea7642d478cacec0e68166613df8f02f9854b284e48409fb238f0d021b7abfe42b4878e6514b8f96ea1152a4bab8a49f94108cb7f521757f28ac50b2fa79d3f931389e388a4312f297dd71f754ed8b87043d9a66f3b4eef54b28c0b2f94d475ec416fe67406e31fc5c57771344177c3818d29111e63a09c55af192df3d2aaa1bd536f8874229746e534059576b1f8633d045ce47c1c32d076da376a2a4b9d1d050000",
    ],
    [
      "ETag",
      "d+QuYQ/OzwKNYS512B8dFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-94-1595636454214",
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
      "db",
      "6e",
      "9b",
      "401086effd1488deb4526d7334b6252bb512da52f954c08edaaab21758c826c092dd259515e5ddbb0b3e80925651d53b7b0eff7c33c3ce634792e43b9447f258920394dc9790ecdfdce2407e2f3c9081447894d2612b776e4daf3d6fbff952b272b521d3c9a48e425536055991c22ec52509211dafbd5e427059008271970b764746573547e6401f18a6a1a9469d4b611acf507e27146e182be8b8df3f72f4128c93148202d15e88b393bdffa0f50b826f61c868bf5db6cf2bd1fedf0b5fa438040ce17cb2f66a889242b2851940a9c0386747c187b67c0f81ac97f0e80714421086b8cc9940ab65429cc728294925ce951eb9919b2be6d3df8641f6ec997de94b97cbf5c27fbb039990dbbd930095b65b02699932e9a3bb9c4bbb8257bf0114d29d74fdd9766d6e21384629dca268274da40b69bab892a41d651cb736cc9cb9e34b6a4556558d206528afd87c10a4b041c4bd87793a2facf224214400e31887b0ada50c803a5446411c58613cd4cd205660100c03cb047aa08423031a510041538189da753ec8711e8d86508f5455e3d9a10e2cc50a869a1e9b2634cc588ff4700006916918f241e1e9d4cf2f8218bc42b4c0141d062e5fbb8e6f6f7d77bdb89cfa76b3f718f0695ed5f4edce5b2d313ea426eddfc6f28ca8200873a86ab5cec2b7dde9a5ef6c1a18fc3b9bc104847bef5e7c693148293c67030232c82099e3482c475e2d3dc777968be9ecac507d3aab6324e5613f4eb0e79e9a6afebe68afbade426d159883d36c5bddb45536202d5f9079389865b5a5d17941ed5fe87c676e7bfe74befa0f849aa2295d45e3a7c057b5b1aa8f55a3a728caf73f801f7efdec344acafc9a1c80e5af6bdbfd26722b9ff0b8308604e6e119e2158f4a24d6ee571c4b1e7e",
      "3c5d22835faf537dfef019e2ef3ba4e7ea2181f56b4759bda35ad0b434d33c09f244c29e4758a6728c7876be442d98c19c1d67519fb17a904f2da4b28153a58970fe3a17cee25305df79eafc06d1d5914b83060000",
    ],
    [
      "ETag",
      "0uItPRM7AWSSyVJutuPVrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-94-1595636454214"
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
      "48f7b891a8033697f83017325d8c99387d59882978652870595be68ce1df6d0b282f6dcf39f7f6f69c9e0dd3248724df9217938449fc5b023bddc52016eae0032f53c1e55660ce813ca86a103456d5f7eb8f353e7993e765b838b8ce7fd22ba783e3685457f1e807322aebce1249bc4b20dd7289bf35361b5e6b39cd40ddb8d9303d50dfd068e254686d3afff2de3dbf2b65b8d5d27c359bbd8e671e69a44aef815c2bfd943d863eec80411ec1ed4105c33d4462aa9d739a1529581c4b16016f86a8c65a8e199605658896a4aca16df59da1e33ebab6630ffa765b9e62444582b9ea582dc975be4041531f8fca3de9d7f1b01ad661b451905d279f6e4252faab9baf54d59c02a345c16dd8f824807f32945e3868073dd246f186caaa5049085682a6232a7f6b928886332ae302f7f82fbb18020000",
    ],
    [
      "ETag",
      "+VJVo7EH8SbQk65xi0uI2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfc97282300000d07fc9591d30624b6f6c652903832c052e198c616980b008024effbd4edf1fbc27c83026e388ee8c92167c80353b8a077cf862ef32ef11279fa4eb94dcd4fad2979eeedb74ef9e1cbdd671c8b6fc187091b19868ef3ab600fdb89884866aa1ecb15b42c79e274835a4ada7ce162298cd987c6ef0ea985c2b535cf9ee4271da0781b9a68a299f343dcaa7d84eb750fd567a7ba23f12a72061615e53337d69f926480a4e8acbf67c31e6b715966757d21e1667332b3d7ae9c38a6ad60df10c795d2ce052801d204b570d6444d56b060551dc81ff26baaf1d795d65920d6400bf7f66237a6105010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:53 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-95-1595636454214",
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
      "0000000002ff8d546d739a4010feeeaf60e8c746f1055432e3348e21a9ad628b98b4d3e930c7b9904b9023dc918cc9f8df7b07a85033997c83dd7d9e7df6e5f6b5a128ea0389d7eab9a2fa247ccc20dd7ebaa7be7a263dc051283d547bf99e2c9e83a8ebfc7af9ec3e6cbfd1ebee78342aa2488e66689344d064344b31b0f3d5b215a6344b504a695310364da3d9314ca3dfebeb86deede805964114cc48fc2019ee384fd8b9a6ed75b4424ac3085042580bd3cdc1ae3d75b524a5f78039d3ea6935918969ef27fe12518c38a1f168b52c44640c520f36884452c611bdf62feaf42d8236ad50443f110c08639ac55c4a2b68308d031266694e2e985e85519873cd87df8a415d5a336be22a9846d926f662b48133658d38f2f83601e5ca59cc95a97db570e66377bab0bde5e4ab351fb7268bd96a6e2f95dbaf9663291cf911e45865a45ce47fb6f8c915e5d9d6c03889734daef45694086fd9c7e91b233c504812a18a4119e60dda7dd419b64d3ff0073818f60c3f6883ef0ffd81817a7e1b9b3ae86b1f5095215756e0514c63318ac05cebba870cc3f774148037ecb475afd7efb68300e3c0e80fd512bd3bd4f29c120e9784259491b2c9eaad33752dcf7556f664ec5ad5ba039445fcb2505eafba560e170daa2a7daf25278a929450212a1fe7d4762d673c71a737151962b7661022bc5d3ecaed0a50c4e08846a9981587744ed77230aa3d9e5b974770be293ff6414c44fc39e83c962302e5fcf35a4ee65fcfe38ac5aab5a2984d615597ae33b5afd58a73f736cd0d8ab237789e4ab39a886edd890eb31a57e3ffafbf8d4a0e55bcd5529efa736539bf2536f7498f0301a410e363d60facae0416ee0f9c2211be3f0c12216ec3213fe3c22c5e1166c7ec3885e24d91a2f325a131e8754c734f2880293f8de80dfafb8893e32073c10662beef4571248a46ee6a92b28a9c1c26c3c53bb0cb21ee1abbc63f5ddde0e2e1050000",
    ],
    [
      "ETag",
      "o/zKpOwfl2RXz+TkyJoG2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1595636454214"
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
      "0000000002ffc5544d6fda4010bdfb57a0ed1524486da744ca81a4b475c557c0a46a238436f6d898da1e773f12a188ff9eddb5015fa82c15a917efcebc37fb34b3fbfc66b55ae4779287e4a6459e93f88f04b6fb108378d09b3970990aae9602730ea4add92068acd93f59668fbf5fcf3c5cca1f79d4958fc1f4577c7b5bb278b0818c2ade9b8a541c2590865cc54f266e557983e534037d6280a9ccf2b509db2758ec0a032ffcb937f95a47320c0d32598e4683bbd19054d0be7d5e24a482aecd91ff2661d6955589912d3ecf2102067900a7ae0b865b088467c6cb6956a4d0e1285900bc12d185251c33940565881d95eaf49d4ecfe93bee47d776ecab9e7da0a718509160ae2b960b72d41728683ac7573d62e29677c0cab09cf8611424aa5d427d420a7ad1c549488eb97dfb2f446fe2bb768d5bed5656adb2b1aa9a5494a4b0fe4feaea4a3654bdf066dad533b99038cd50e6a2a1f497d17470c1c6951b9a36fd79e00f2f25cb85f242435ddf1b0f17fe603c3b2baebeab9309ee7602f88ca1f21807e3ac5ed7fee45cbb5d7270ea3d6a270a6d54c124987440d51feb5b22542ea229076b6fbd033378613d1d050000",
    ],
    [
      "ETag",
      "Yrm4MJ7PIoUuWnf0uVcOZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-96-1595636454214",
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
      "14",
      "86eff9155176b34985404942a8843a44d32d120d2d8476d33481ed38a9db244e6da715aaf8efb3133e82caaa6ada0552381fef79ceb17d5e1b9aa63f922cd4cf341d92f8a9c06cf5e98142fd4479b000b1f21837f3db150cd3b01d1789cfd2d5f58fc01e0e06551429b33948f30437392d18c2fc6c3e6bc58c1639609436a560b36f373b56dfb2bbb66999a71db3cae53889c6247b540af742e4fccc30b61cad98d238c12027bc8568bab31bcfa746cee80346821b87650d59891bef173e4f280282d06c309f551005c76c8153401285b1cf0ee1d743f91601692b96d1cf046180102d32a1d02a1944b388c4052bc5a5d2ab344a73c9bcfb5b33e83377ec8e026d3499fbc1e7254895dcf28b06b8b65830cc8b446897d3c995b6cc65f57bc0315f6a77dfdda92b2d8c4624c10b122eb58176ae0dfd0b4ddb4a9496b177e5055aa7442bcb86980b929570018009ae2149ef66a0de91b3dc4928112024c7266cd16bdba0e3b4fb30823d14395d0b466d0ca1037b16e8c236ea9bd80c21067505a16a57f920a31970c069084d6c397617a31e34bbed3eea9a11b49cb0fcd98ed3777a40df28ac77fdbc3022f005e139e5643371fd6eea05ee2298cefdd13070ebbd47408ef3a2a23fecfca025218754a77d6f2c6f887246a8842acfd6f303773a1c05de6d0d435eb4318e015acd9ed4558b40c2f13e1b30906281d9150dd5e1e8d793991778137f38de2b9477e77a1bc965d8af1decbea7ba5ab0ca0f8fba3a85caaa306d53aff9d62747556e41521c9179de98f5ce8146e388dabfd05d8e27c3ffc4d7b2ccbf206ebe7e376af2ba5c1c1b34fd66ee4e7faadcd2a73c531c618633b42ff881e7a3122bf707",
      "f6a20cdf6e29952117d5ae3e17d22c5f32e2fbea88e1ea5d93b4eab612b47aa669da5b4199c8c4db08f9b18d78b3a9542d9ce24c6c67516dac6a90eb03a4a28653a6a970f90e7dcfff56c237d68d3fd78c328e6e060000",
    ],
    [
      "ETag",
      "/QUVybdmd0gulNrmyPXT6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1595636454214"
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
      "5790ee7524ead4cc253ecc856c26ce4c1cf16131a6c285e1800bed65c618febb6d01f585f67cb4b7e770b66c9bfd2579c85e6cb64fe2b202717a8881567ae381ac52926a293097c01eb51b88c7da3dc8a8573e8b4d94bb9fe5315b961b7f1daea6d3c625835fc8b8f29d1552384a200da5c23f06db2d6fb49c67a06fdced8419686e68353a15469b2fbfdd77d7bb97320c8db4f4178bd7d9c265ad549b75abbeb579ca01f71e4420200fe0f6a042e001029a9be49267450a8ec44a0420db21fa6023c702ab820b444751ce64ecf44793d1f8693c1c0d07fd61674f31e09460ae4ff86b769d4f483cf5f0a8d3b37e538f6860534657058beefab96f4849ffa67276a5ea76b7b53ab4bd0d9b9d08e4974095458249d0635d156fa8a3926e824405860eb8fa5b1f09b59c555b17c516f05218020000",
    ],
    [
      "ETag",
      "2mt0q8rWfnEMqwmNqWUSdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "e9b3988ab0d0bd0d0682e00452b9f842485740a12da38876cbfe7d66e70fce0fa809a15256b3e82907af40d53a5a9375282c7b9334f0c0ed77340491e85e926c162581a7584fe0c0fd7c669098679abba56fc444f130528b73ae8a96b3878bf8dd68a0659d349a5e4950f16b3fabde93dffed8c2b865256edf06334d923a539f5629bc0eaa0263ff80944176d11816ec63838f014d3b59b24e680417b7bdfa5a602b358aa7adbf2b3ca8659deed49e33e56970c37b06ef4bc3d5d19ae241b86005e863bc4c545697e76c6b22b402ffcd6a56237d5e6d5a4f7402bf7fe917c3c605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-97-1595636454214",
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
      "6f",
      "a24010feeeaf20dcc7ab8a0abe34315763e969aa7887d8de4b2e645906ba2db2945dda6b1afffbed022a9c4dd36f3033cf33cfbcecbc3614457d20b1af9e2baa47c2c70cd2974ff7d453cfa407380aa5874c6e3d72ddff3c0b417f44bf7e109efc9d3d8fc74514c9d10c6d93089a8c66290676be59b7c29466094a296d0ac2e668d0ec1823a3dfebeb86deede8059641142c48fc2019ee384fd879bbbdd7d10a290d234009612d4cb7077bfba9db4e527a0f98b3763d6d5b6462edf7137f8928469cd078bc5917223206a90b5b442229e388f6bd8b3a7d8ba06d2b14d14f0403c298663197d20a1a4ce38084599a930ba6576114e65cf3e1b76250d7e6c29c3a0aa651b68ddd186de14cf111472e7f4940b9b2574b656e5dadece5c499af2c773d9d99cb496bba5a6c96d65ab99d99b6a970e445906395b17291ff59e227579467f3817112e79a1ce9ad2811deb28ff3374678a0902442158332cc1d687dd4196a232ff0063818f60c2fd0c0f386dec0403d4fc3231d74df035465c895157814d318bafd8e3fd40257ebf67c57074d77877d84dc610f0b1732346f10a8257a77a8e539251c2e094b28236593d55b7bee98ae636face9c431ab7507288bf865a1bc5e75ad1c2e1a5455fa5e4b4e142529a142543eceb9e598f664eacc6f2a32c46e2d2044f865fd28b72b401183231aa562561cd225f5e560546bb2342f8fe07c53beed839888f87dd0792c4704caf9e7b59cccbf9ec7118b556b45319bc2aaae1d7b6e7d552bcedddb343728cadee0792acd6a22ba75273acc6a5c8dffbffe342a3954f1564b79eaf78d69ff94d8dc273d360490428c8f593fb0ba1258b83f708a44f8fe304884b80d87fc8c0bb37845981db3e3148a37458ace9784c6c0e8e89d3da100a6fc346234eced234e8e83cc055b88",
      "f9be17c591281ab9ab49ca2a7272980c17efc02a87b86bec1aff009eb168f4e1050000",
    ],
    [
      "ETag",
      "iAWbiK6+Hge4qaZXitpxHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1595636454214"
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
      "af",
      "20f515a2e81862e2032aea12448199180d2175bb8d61b79b6da712c37fb7ed86ec45b344125fd6de7ddff5cb5dfbedd36a34c84b9c06e4a4419ee3e83507beda8b408ef56602226752a825c35400696a36481a69f6c3c23d5c7ea00cf7a3f3ab317b693f768f8fde4f4f0b96f0179050c5fb54918ac318582054fc64e2469937584a13d027fac8f2249d9bb0b985e52a33f0d49bb8a3ab2a92606090d1fd70d83f1b0e4809ad9b3f8b0454d2b939f26f12669d59a51859e2f30442e090fab0ed3ae3b8045fba66bc8226198396c09cfb204a115d58c011c73ca31cb1a552ad5eb7d5eef43ace916377ecc3b6bda133f4a98c31d515f753f2ad2f515236c1773d62e21477c08bb098f8661424ac5c4275420a7ad3c57140be73ebe62f4477e43976855bee6656a5b2b6aa9a54183398ff93baba9205552fbc9e76f94c76244e13cc535953fa7278dbdf61e3ca0d759bbee87b835dc90aa9bc5053d7736f0653af7f73f7a3b8faceb626385b4910771c95c7041867b50fece34ed739201ba79ea376a2d446953c0793f6a9fa635dc752e542ca04586beb0b148c53cd1d050000",
    ],
    [
      "ETag",
      "XhI2jxotf/gCGQlk1Z783w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-98-1595636454214",
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
      "94",
      "5d",
      "6f",
      "9b301486eff32b10bbd9b426810402a91475514b37a47c8d9056d33625c618ea1630b54da7aaca7f9f0d24216a56f56e77703edef39c63fbbcb414457dc059a89e2b6a80e3c702d1e70ff72450cfa40771104bcff5cdd8b13d6db1f0c2184ef3c4fa0c6c2b1e8daa285c663390e6096a33525088d8f96ad9892929724009690bc1f6d06eebe6d01cf4078669f474a3ca65288926387b900a779ce7ecbcdbdd71746242e204811cb30e24e9dede7dea75734aee11e4ac7b5cb62b2ab1eedb852f120201c7241bad961544c1105da314e044621cb2c3e0cbb17c0783b4138be8270c11809014199768950c245984e38296e242e9451885b964deff360cead2993897be72395fcdfc8f1b904ab9cd27053065bda688150957aebdf954d9e4a2fa1d60886d94db6f8ee7080b25114ed01a871b65a45c28e3d995a26ce4dfaf42d3fa489826eed4f515bd642beb8688719c95743e0812d46012de7aa2ee89c3dc4b4811c005481db6b6b401d06d6d1844810523bb6f06918682c00e2c13f4030d0e0d648401024d052e6b57f920231984c3810d0d6022a80f600f1a1ab0cc40b742c30c2cd4376100c0501f42b556d8eefbf94331475798e584e17ae4eaade7facedaf756b3cbb1ef347b8f8098e755457fdcf9514b5c0ca949fbd6585e11e5141301551eae3bf31d6f7ce9bb370d0c71d3262806f079f928ef5a0412860ed98082147144a7249487a32ee64bd777e7b3f1e4a0505e9ec52e9289b09f7bd8434f4d35ff393f3eeaea142aabc41c186ac3b73d3ba9720392e284cc536d56f5238dd609b5ff4a67fe03affefadd6a88ab626bd458eaf795e3fd90b9a54f7a3c14218a327828f78ea723132bf73b96a208dfad289921b6d4be3ee3c22c5e316487ea90a2ea4de3b4eeb514342d6b685a3b419148f9",
      "ab08bb67f47611afd694ac855294f1dd2caa75550d727b84543470ca34192edee0cc9d7d2de15bdbd65f98533c886b060000",
    ],
    [
      "ETag",
      "FVAE8R0PPRdgcMpl7+a87g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1595636454214"
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
      "00000002ff4d51d16e8230147de72b48f73a1271e874890f732193c5990d3559b21853f1c270d0cbda32470cffbeb680fad2f69c736f6fcfe9c9b26df29db23d79b0c92e4d7e4ae0d54d02f25d1f4210652685da0a6402c8adae0649135d1ddc1f8b6a15fcbdfa7c14cd96ac177cb097643269aa44f4053955752785148e53c8f642e14f83ed96371aa339e81bb75b6e069a1b5a4d5685d182c5ca7ff6c36b29c7bd9116ebf9fc713af7492bd566dfa8b5364f39e02e841838b0082e0f2a381e209281712e685e64e0082c7904a21da21b1b39e1581694233a8a72c623c71d8c07c3bba137f0faaed7956718519922d31deb2539cf97286916e251bb276e130f6f601346170589aff2b94e4849bfbab94fce54dd9e365687369761d34a8278e3a8bc08300ebc518f74613ca1362b7516929760e888aaff9aa5527131cd0458b5f50f62dfb4611b020000",
    ],
    [
      "ETag",
      "I7wpyTIxMEr8cHSn0IXnJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "ff1dcf4b5283300000d0bb645d3b40f9883b3054ac94698491cf2613d214106820495ba3e3ddedf86ef07e00a1944989151fd8193c014d2c7f4dd76ffc313411fb66b969c9894e45e3f12c6fd5559b653ddb5d8a6fad01754e5a48cdcd9435e6a4c3b4f2ba5846709f5bae0b7bbab8c9a8337beb0c445404c519e2a8a127ad6fef71080d6e59a991057eadfad765d9da59b5eb8ff59024ea8a5f745918b9930fe628d0c7ee503c48a81834a0f349bcf9f2cce3d3642ffb28c0c82ec5ed72b4c6b44c13340f61b41407b73b076005d8d7dc0b26717f9f6d1cdf5f81ff26567a66f76bc8886002fcfe01104b43d205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:58 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-99-1595636454214",
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
      "0002ff8d54db6e9b40107df75720fa1a5f88213691acc6b249e3d6c629c689d2aa42cb7a209b004bd8c55514f9dfbb0bd8863a8af2063373ce9cb9ecbcb514457d26c946bd54549f842f3964af5f9ea8af9e490f70144acf436e0eef27dfef262cdefebab99d6a3fa6fa703c1a9551a4403314a711b419cd330cec72bdea8419cd539451da16846dd36c6b86695cf42f74433fd7f412cb200ae62479960c8f9ca7ecb2dbddebe884948611a094b00ea6f1c1dedd9e77d38c3e01e6acdb4cdb159958f7e3c45f238a11273419ad57a5889c41e6418c4824651cd11bffaa49df2128ee84227a4b30208c699e7029ada4c1340948986705b9607a1346612e341f7e6b067565cdad89ab601ae571e225288633658338f2f86b0acab5b35c2833fb7ae92cc6ee6c697babc98db5187726cbf97a61af94fb1bcbb1148efc080aac3252ae8a3f5bfc148a8a6c1b609c248526577a6b4a84b7eae3ec9d111e28248950c5a00af306bd0ba40d7ba61ff8031c0cfb861ff4c0f787fec0407dbf874d1df48d0fa8ce50282bf128a1495f1b040836c8d3fba6e9e948ef7b263a37bd01683db367f8a6ae61b542ef0eb5fccd088729612965a46ab27aefcc5ccb739db53d19bb56bdee00e5119f96ca9b5537cae1a24175a51fb5e444519a112a4415e39cd9aee58c27eeecae2643ecd61c42845f572f72bb02143138a2512666c5215bd08d1c8c6a8f17d6f4082e36e5761fc444c4ef83ce63392250cebfa8e564fecd3cae58ac462bcad9945675e53a33fb9b5a73eedea7b94351fe0ecfb632aba9e8d6a3e8306b70b5fefffad3aae550c55bade4a93fd796f320b1854f7a1c082083041fb37e627525b0747fe21489f0fd619008711b0ef9191766f18a303b66c719946f8a949daf088d81a90d2ef6840298f1d308dd18ee234e8e83cc0531247cdf8bf248948ddc3524e53539054c868b77605743dcb576ad7fafae8b4ae1050000",
    ],
    [
      "ETag",
      "Yu98WCJVCsmvZHPD1KD48A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:22:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1595636454214"
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
      "00000002ffc554d16e8230147de72b4cf7aa896e8873890fe8743351e710f7b0c5980a17c501c5b6b819e3bfaf2da8bcb890cc642fb4f79e737b726f7bd86ba512faf423173d94d0c25f6e12a0bb9b25f057b9b180250167628949c40095251b385e4a760fafde36ef71c39b6c77710f6aebef55676cb65a298b392b08b1e0ed452462cf87c06522fe507129cb2b2cc221c8131d122461345761f90cf35dace0896df5474f792424ae4246d3c1c06c0fba28830ee5cb222ee678ae8efc9b845a675a2686d664618107142207ce5dc794acc1e17d355e86c338800a230975806522b2308597942431a6845444aad26c566af566ddb833f4ba7e5bd38ff4803898fb249215d3093ae973c27160912f396264a47740d3309df87114c8cb5d427e4202daca62df45a7dca1fc0bb13fb20d3dc7cd76332d575958554ccaf30398ff93bab89215162fbc9876f64cae248e439244bca0746ff0625eb171e186a24d3f9a76f75ab28c0b2f14d4b5fbc3eec43687e38be2e23b3b9ba0bde3c0c694088f3150ceaa55f5fb7ac3a8a2a3533b443a914ba3729a804a3b58fcb19e7d2e721e0e186807ed074ad9ea181d050000",
    ],
    [
      "ETag",
      "FahVqZp7fSvypFe1jxhCPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-100-1595636454214",
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
      "9b",
      "30",
      "14",
      "86",
      "eff32b10bbd9a426408034a9147551ca36b434690969556d53621b43dd02a63674adaafcf7d94012a2665b35ed0ecec77b1e9f639f9796a2a8f7240dd4134585247a28307b7e7747a17a243d380791f438973767a43b704cedebe8f2e9c9b921d044a3e1b08a226536074916e336a70543989f2ce69d88d122038cd2b6106c1bbade36ec81dd337b966d750dab4ae6380e2724bd9712b7799ef1134ddb8074224aa318838cf00ea2c9d6ae3d76b58cd13b8c72aeedd7d54429aefda5f2694c11c8094d878b79455170cc96380124961cbbf4007edcd7ef1090742211fd48100608d122cd255b2583681a92a860a5b8507a1146612ea1b7bf0d833a7726ced857c6b3c5d47fbf0289945b7d500057964b867911e7ca276f76aeac3251fd1670cc57caf517c7738485d190c47849829532544e95d1f44cd9c5ad94ef85ae9b583826eeb9eb2b464958560f30cf495a32fa00c6b84126bc7563dd0343dd4a4811908b3275d8f258ef01a3af0f60088f51d8376d18ea18c23e3cb681097534b0b015400c9a0ab9ac5de58394a67d0b04c1a0db3561d007b66d9941cf063d1d038861374003601866d00f7b6aadb0de9ee72723393e233ca39cd48d57af3dd77796beb7988e47bed33c7b084457cf2afafd93ef1d29174d6ad2fea92daf883246a8802a47ec4e7dc71b8d7df7aa8121eedb0447003dcf1fe48d0b41ccf12e1b3090e01cb3731ac8e1a817b3b9ebbbb3e968b25328afd0c526928bb06f5bd8dd999a6afe73b63fea6a0a955562f62cb5e15b1f1d54b902717140e6b136abc69e46eb80dabfd0cd7dcf9d7efe0f78a34c0cee3788f5d78f56435f150ba446",
      "532f178e7723734b9ff47838c40ca76857f10dcf472656eeb72c4811bfd95632452cac2d00cf85593c65c477e511c3d5c32649358e4ad0eeeb5d73b3026422cb5f4758a6be8978b5b1642d9ce034df34a3da5c5527d77b484503a74c93e1e2214eeb09ae5bebd62fbbe34e1778060000",
    ],
    [
      "ETag",
      "EQYDi29E3/KAQxxEYib3cA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1595636454214"
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
      "cb",
      "6e",
      "83",
      "30",
      "10",
      "bc",
      "f3",
      "15c8bd162914481f520e4d8bda3c14a534395551e49085921a96daa6118af8f7da06925cb06766d7bb339c2cdb263f59b1274f36d965e96f05bcbe49417ee84b04a26252a8a3c44200b9d5d52069aaabebe5b19e95af14a2b45e4d675ee50553761c8dda2a117f434e55dd492185930cd85e28fc65b0ddf1462b680efac5ed969b81e6854e937569b4c96215be85d1b594e3de488bf57cfe3c9e87a4931a736ed4b731ab1c701741021c8a182e0b951c0f10cb89712e685e327004563c06d10dd18dad9c72ac4aca111d4539ee60e0b8c16330f4867ee0dfb97e5fcf30a632c342b7ac3fc979018992b2088fda3e71db7c780bdb34fa2c487215d075444afad3cd3e39534d77db583dda5c868d6b0962c9519911602cf80ff7a44fe305b55ba9c390bc0243c754fdb0f74c2a2ea14c80d558ffba4fec6c1c020000",
    ],
    [
      "ETag",
      "yPwyKpDaeRgyTJK3u35Jlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bb642d8e209fd01da114e413e463cab061200d05ac9a014a894eef5ea7ef06ef016a4ad93455f3edccaee005885a31b7741bdc209213aaf40b55e64f1830a768a720ab6cd5e671534af4a35b50f8cd5bcbf2725475f9eabe8daf3255f52eb89034aa89dfac46758084de4b5527945979f1d5e3a06b644515ee609c967cd003aa420ff7efe8ca2fcc0db33d26a9d320db5fcf66dcce07c98368c60ef9b92727b1cb32781c59215a491b849f939db1621c72c520f1b078d292a4cd514b73ab14913d466003d8cafb914d55ff9ced35d3dc80ff66350bce9e57c4ea918de0f70f01c00c5605010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-101-1595636454214",
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
      "ff8d546d6fa24010feeeaf20dcd7564141a589b91a4baf268a57c036cde5429675a0db22cbb14b7b4de37fbf5d4085b3b9eb379899e799675e76de3b8aa23e9374a35e286a48e25f05e46f5f9e68a89e490f70144bcf6f6ef856ff8e3d6c16c9e0f9d58dd65e7a7d3b995451a44433b4cd123867b4c831b08bb5d78d735a6428a7f45c109eeb9a7eae9b96391c0c0dd3e8eb46056690440b923e4b8a47ce3376d1ebed8574634ae30450465817d3edc1de7be9f7b29c3e01e6acd7cedb13a958ef3f99bf2614234e683a597b958a82411ec0169144ea38c237e1659bbf4bd0b61b8be8178201614c8b944b6d150da66944e2222fc905d3bb300a7329faf0db30a89ebdb067be8269526cd320455b38533688a380bf65a05cbbaba53277ae57ee72eacf574ee0cd6eece5b43b5b2dd64bc753ee6f6cd756380a1328b1ca44b92cff1cf1532a2ab36d807192969a7ce96d2811deba91f30f8678a090244215833a2c186943a48f352b8cc2118ec603338c3408c3713832d120d4b06580b1090135194a65151ea5341d0d461099c330e88ffa5a60200307960956a08d0723cbe85b9aa6eb6a8dde1d6a79cd09872bc232ca48dd64f5de9dfb76e0bb6b6736f5ed66dd112a127e55296f57dd2a878b063595feab25278ab29c5021aa1ce7dcf16d773af3e7770d1962b7161023fce6fd92db15a184c1118d72312b0ef9926ee4605467bab4af8ee07253beef839888f871d0792c4704caf997b59cccbf9dc7178bd56a45359bcaaa7abe3b77bea90de7ee639a3b94141ff0bcd4663513dd7a141d662daecedf5f3f3b8d1caa78acb53cf5766dbb0f125bfaa4c785087248f131eb275657022bf7678e9188df5f060911c7e12080716116cf08b3637a9c43f5a848d5fa9ad01ceb7ddddc130a60ce4f2306d6701f71721d642ed842caf7cda8ae44d5c95d4b52d19053c264b878084e3dc55d67d7f903a9df149ce4050000",
    ],
    [
      "ETag",
      "xt4T92VsYdLl3kwRfUSnFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1595636454214"
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
      "545d4fc230147ddfaf20f51522d331c58487a1a824800823f1238494edee43b775b69d8410febb6d37602f982592f8b2f6de736ecf7adbd38d56aba1cf3071d14d0d2d43ff2b03ba3ef3813fcbc904581671268694240c505db281635fb2edd54bafed8fadb5f3fa16042333580ecf877ea793b39813408c056f2322117b21442e13f1bb8a6b455e61098e41aee890288b93850aeb0798af53054fed497ff4504662e22a64341b0caceea0870a685b3f2ee2628e176ac9bf49a871ae1562e8832c27e00185c481c3ae534a3ec0e17dd55e86e3348206231975801522b230877d4ab21453421a22d5d09b7a436fb55be6a569b48c0bddd8f123e2601e924496cca668ff039c701c4dc84af61899f921d03ccc5bbeeb05f24aa7506e9180be6571e8a27d6e5bff85d81fd9a651e216b3b956aaacac2a5ae585112cfe495d9c4980c515afa65ddc931389e3986409af287d3f78b24eb8716187aa9bbeb3ecdea964191766a8a86bf787bda96d0dc747c5c5777e304177cd818d29112663a0aca5378debd695d9443babde1269452e9dca69062aed60f1643d865ce43c1c31d0b6da0f46085e1d1e050000",
    ],
    [
      "ETag",
      "TwXE9gPAycYZhhN6hbM/Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-102-1595636454214",
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
      "6d",
      "73",
      "9a4010c7dffb2918faa69d46e549d4cc38a9353465c668821827d376f480855c021ce1c04c9af1bbf70e507162db4ca7ef601ffefbbbddbb7d690882f880634f3c154407078f39a4cfefee89239e700f6428e09eeb3057f58f170f3796be584b8bcf8b9f4f9ddbe1605046e1229ba22809a149499eba404fe7b35690923c4129214d26d89425a52977fa1d5dd5b58ea6c85a994c21f4c7387ee012775996d0d3767b0bd20a0809424009a62d97443b7b7badb49394dc839bd1f661dd362b45db7fa97c1612176598c483f9aca4c829a44b88100e39c73edd733e1deab7308a5a018b5e631790eb923cce385b29e392d8c7419e16e24ce9851999b980defdd60ce2cc181b235b184de713fbfd0a455c6ef5414054582e53a07998095face9a5b04a58f53b4481ae84c557c3329825253e0e6189bd953010ce84e1e45cd8c7ad84efb924a9c01c63f3d2b405b9202caa7b40331c178c367242a891316fd558f3c85077125c0465ac4c15b6ec4a3a927b52dff19daeebf7d48ee34be0383da7db41aa23b97d0d34cf015457c878ed321fc524d614dfd311729d9ea27a4a5fd12450bb20cb5d0f54a9ab81ab4a7d45479e58296c76e7794a7106e7982684e2aaf1e2c2326d63695bf3c968681bf5b3fb8875f5bca43f3cf9c19132d6a43aed9fdaf28a2849316150c588cd896d58c3916dded430d87d1b4380dce7d923bf713e0a29ecb3518a22c820bd241e1f8e78359d99b6399d0cc77b85e20a5d6d23290bfbb683dd9fa9ae663f2787a32ea7505a39a6ae8935dfe6e4a8ca0d0af32332ebca2cca071a8d236aff4237b32d7372f11ff050c206f71bc4eaeb47a3a62fb20552a189d773c3bae5b9858f7b2cf02185d8dd577cc3f3e189a5fb2d0b92c56fb7154f610b6b07403366664fd9a5fbf26e0ae5c3c651",
      "398e52b0d3536445da0ab2c4347b1da1aabd6dc4ab8dc56b410471b66d46b9b9ca4e6e0e90f21a4e91c6c3d9439c5413dc34368d5f999ef84b78060000",
    ],
    [
      "ETag",
      "Qlu36+GkVR6Wv0WBWzw5YA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1595636454214"
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
      "40",
      "10",
      "7c",
      "e7",
      "57",
      "90",
      "eb6b4945d17e243ea821ad099a4a6bfa15634e5c280a2cde1d6d89e1bff7ee00f585bb99d9bddd198e8669927d9c6dc9834936717428809557118885baf8c08b447079e4987120d7aa1a048d74b5ed7dbef5de271fb33fba38cc52ba1fdce06838acab78f00d2995754789240e6348b65ce22f8dcd86d75a4653502faed74c0fd42f349a2873ad4de7afeea3eb5f4a296eb5345f7ade68ecb9a4912a7daee4b7d2abec70e343080cb200ce0be50c771088a976ce699a2760712c5800bc19a21a6b396258e494215a92b2ec4ed7b2fbf7fd416fe0f49daeedb4f5090654c498a996e50b392d2050d0c4c75f659fd8753eac86751a6d1624bc08e8322229fda8e60e395155735b192d5a9d878d4b01fc99a134c3415b70ee6e499bc604955ba1c210ac004d0754feb0a758482ea40907a332fe0195ae7c071c020000",
    ],
    [
      "ETag",
      "b1LZW3XCYMxaQqMmak6/oA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b5283300000d0bb645d3afc23ee82adb1c5147080d06c18c054024c81402de078773bbe1bbc1f9097251fc76cea1a7e05cf60c975675b6ebdeec9d5425ef5f39ea1b22dccf4ae48f31c06474f3d7a880eaa4d6d2110bd1057bf753a3ec76b13d146489226667e13bddf582f69798a580caf24d15f4da7a8b4ba9e78089365870e8b1ee5d5debaafea7794ce8a52503f92ab80940c455d49a8aa4a6204b8d570d08edd67c90e3c9b8b1dac0772870d9206b3316ae71cbfd7ac8bbe58ec3b8570df4e1ce3e983ca0b011bc0e75e483e66e231332cc7d980ff66362d3d7f5c5d9e4b2ec1ef1fb5be743a05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:02 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-103-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54616f9b3010fd9e5f81d8d726902624a452b446295d23356405d2769a2664cc41dd124cb1695755f9efb38124b0545bbfc1ddbd77efded97eef288afa44d2503d53d480c4cf05e46f5f1e69a09ec80c7014cbccab777f9f68c525fb3dbbca6f66ae110ceec8cd745a559112cdd0264ba0cb68916360676bb717e7b4c8504e69571076fbfaa0db3726c668301a1ac3d3feb0023348a26b923e498a07ce3376a6693b21bd98d238019411d6c374b38f6b2fa75a96d347c09c69edbe9a68c5b4ff74fe9a508c38a1e974ed562a0a06b90f1b4412a9e3000f83f3367f8fa04d2f16d52f0403c298162997da2a1a4cd388c4455e920ba6771114e152f4feb711505debda9a7b0aa649b149fd146de0440911473e7fcb40b974564b65615fae9ce5cc5bac6cdf9d5f59cb596fbeba5e2f6d57b9bbb21c4be12848a0c42a53e5bcfcb3c54fa9a8ec1602e3242d357932db5022b2b5918b0f96b8a79024421583bacc1feb23d437f5491005631c9903238874080233181b6810e87832846118006a3294ca2a3c4a691aea23084d3cf24f858dfe3044a66f0e42ec47a3b1390eb10e93a8afd6e8ed7e96d79c70b8202ca38cd426ab77cec2b37ccf59dbf3996735e78e5091f08b4a797bead6385c18d454fa2f4b8e146539a14254b9ce85ed59ce6cee2d6e1b32c4d9ba8618e137f7599eae08250c0e68948b5d71c89734948b51edd9d2ba3880cb93f27d57c444c5cfbdcec338a250eebf9ce568ffed3e9e38582d2baadd5451d5f59c85fd4d6d24b71fd3dca2a4f880e7a50eab9970eb4138cc5a5c9dbfbf7e751a3d5471596b79eacdda727e486c9993190722c821c587ae9f38ba1258a53ff31889faddcb2021e271d80b605c84c535c2ecd01ee7505d2a52595f131ae6409f183b4201ccf971c5b03fde551cbd0eb2176c20e53b33aa57a27272db925434e49430592e2e825d6f71dbd976fe005189c0fce4050000",
    ],
    [
      "ETag",
      "wTXXl/uFsxAHrQAS5b3WiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1595636454214"
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
      "30147ddfaf20f5151290313f121ea6a2920c4498f1c11052b73b9876bbb3ed24c4f0df6dbb217bc12c91c497b5f79e737bd6db9e7e598d06798fd3905c36c86bbcfcc8816f4e96201ff5640a226752a821c35400696a3648bad4ec36bf5f7b4937c78fb52f47ec398a57c999dbef172c11ac20a18af7a522154731b050a8f8c5c48d326fb09426a0570c90e549ba3061730fcb4d66e0993f1d8eefaa4882a141c64f9ee75e79035242dbe66191904aba304bfe4dc28c73ab14236ff83a850838a401ec779d717c83400e4d7b054d32062d81390f409422bab080971cf38c72c4964ab53aed6eabd3bbe8395dc7eed9a71d7bc76718501963aa4b9e66e4e707244acaa6b8d63d264e7108bc088b96ef7a41a2ca29545ba4a04f5d1c87e427b76dfe421c8e7dc7ae70cbd9dcaa54d65655ad8a62068b7f525767b2a2ea8ad7d32eefc991c46982792a6b4adf7a0fee1137aeec5077d337ae3f3896ac90ca0c3575fde16830f3ddd1e4a0b8facef726b8da4810138eca64028cb53a6dfbbc77e6b4c9ceaad7a8ad28b55325cfc1a403aa9eacfb58aa5c4499006b6b7d03c1c8a7341e050000",
    ],
    [
      "ETag",
      "0rHwLm3uoqwTtMlWfihm7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-104-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffa594db6e9b401086effd1488deb46a6c30061f2259a965d316c9c1898d93a607d90b0c64136009bbb88922bf7b77c107acb86dd4dec11cfef97666779e6b9224dfe3c4974f25d9c5e1430ed9d39b3be2ca27c2030c85c233bf786fdf7cbdfc34fb72152b8f83e0f16ef5380efbfd320a17d914c56904754af2cc037a3a9f35c28ce429ca08a973c17a53d5eb4da367b45b6dddd0b5a65e26538882314eee85c42d63293d55942d482324248c00a598363c12efecca4a53d28cdc81c7a8725857e1a5a8f297ca6711f110c324e9cf6725454e215b408c702438f6e9befbe150bf8151dc0879f40a7b803c8fe409136ca58c4792008779568873a5676ee4e6027af75b31c833736c0e1d693899dbcedb258a85dcf29d84a8b4586440f388491fa793736999f2eab788025d4ad79fcda9c92d190970040bec2fa5be74260dec91242d7dc460297dcf55b505dc38b6ce2d476a167445651f28c349c1e72037820a15f76e9a6a1d19e84e428820c65136618b8eda46cdaeda7303b7e305dd96e1062ab86ed7ed18a8e5aa5e4f07dd7701551598a85de6a384243d30b400b4565b6b7578861a78414705dd55f9c05c5735bc2e201d345fde28ac77e7f9996106234c5342f1a6e9f2f5d472cc85339ddbc3816356cf1e20ded151497f78f2832331dea42aed9fdaf28228cd30e150c5782ddb31a783a1635d5530f85d1b4388bca7d983b86d018a28ecb351866260909d135f0c47be98cc2cc79ad883f15ea1b83e17db48cac3beed60f767aaaa394fe9e1a8cb29945681d9d6e58a6f7d7254e50a45f91199d5c62c370f346a47d4fe856e2486f8ff709aaaa97555e39be037949baf1fb54a1199ef8f0d9d7c3937a73722b7f009cf1402c820f1f6655ff1824462e97ecd7ee4f1db65552ce2d91e80326ee6afd9a3fbf25e06e5dbc671399152d0e8ea5a77bb054462c65e4618edf636e2c5c212b52086846d9b512eaeb293eb03a4bc8253a48970fe166dcbfe54c0d7d6b55f238783ed77060000",
    ],
    [
      "ETag",
      "UP+NYZQGSXVm/xAfxjvxLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-104-1595636454214"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d514d6f824010bdf32bc8f65a12b168da261ed09a96c4184bf5d410b3c240918fa1bb4b0d31fcf7ee2ea05cd87defcdeccc7b5c0dd324595a46e4d524a734f9ad81350f09884f75f181d7b9e0f2a8b0e4401e5535089aa86a76cab2d585bad9f92d9a2fdd9de7ad22d75d2cba2a1efe404165dd552289e314f2884bfcadb1d9f35a2b6901eac5e391e981fa855e134da5356fbb5fbfaffdb15460a4a5ed61b371979b35e9a5569f81fcb67a95339e7c88814119c27da18ae11942e169e79c16550e16c79a85c0fb21aab1931386754519a22529cb9e38963d7b99cd9fe6cecc99dace509f6348458aa56a397c91db020205cd7dbc28fbc4eef2611decd218b220f128a0714452fa53cd5372a3dafe1618030aeec3968d00be6328cd70d0169ce70919d258a1722b541882d5a0e990ca1ff6910ac9c534e760b4c63f1a2f074e1c020000",
    ],
    [
      "ETag",
      "rbkkCwaAkjDd6BAPIICdAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf496e83300000c0bff89c44ecc5bdb11320504c2870b21c70111016b108aca87f6fd4f9c1bc00294bba2c781d3b3a804fc088002fe5c51f559d8f695e58e1968e75137fe0b4658c0b0694988623ea755129d524e03efa6e45498426a78bdebcf82a735dde7a44a399164a8f10cf75f1d21ecaec5b612b97f533306e09ee2697c4774876e86c74d50563f3e1331f346c9b0cfd6cf29e3dbc463195ad92464743aba7943ba3d681c8fc95cb63ea57be1a6e761f5cb3ecc6d82425c639b28be89888cc34f37c0def2a38017a4ccd4c17dcbc67a20ce109fc37f1ca26fabeea94cc7406bf7fde70488205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-105-1595636454214",
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
      "6f",
      "a2",
      "40",
      "10",
      "fe",
      "eeaf20dcd7aa5841b189b97a965e4d147b80b697cb852c30d06d91a5ecd2a669fcefb70b88703677fd0633f33cf3cccbce7b4792e4279c04f285247b387ace217bfbf2483cf94c7880a1487842727fbb7e20b6bebdb9bd7f52d26fdb2159bf4ea765142ed014edd218ba94e4990ff46263f7a28ce429ca08e972c2ee40d1ba036da28d86235553cf076a09a610874b9c3c098a07c6527ad1ef1f84f42242a218508a69cf27bbdade7f39efa71979049fd17e3b6f9fa7a2fdff64fe1a131f314c92e9c62e55e41432177608c742c7111e78976dfe1e46bb5ec4a35fb00fc8f7499e30a1ada4f14912e228cf0a72cef4ce8ddc5c88ae7f1b06d93696c6dc917c12e7bbc44dd00ecea40031e4b2b714a46b6bbd9216e6f5da5acd9cc5da74edf98db19af5e6ebe56665dad2dd8d611912435e0c05569a4a97c59fc97f0a4545b60028c349a1c911de8612eead1ab9f86088358520e1aa285461ee5819a181ae4cbcd01bfba13ed4bc5001cfd3bdb186869ee24f5450030f5093a15056e2514292110c82f03c18bbaaaea8ae0a23dd45fa78e08e42a44cf4893ad141972bf4beaee535c30cae304d09c55593e53b6be118ae636dccf9cc319a7587288fd955a9bc5d75ab1cc61bd454faaf969c284a334cb8a8629c0bd331acd9dc596c1b32f86e2d2142fe9bfd2cb62b443185231a657c560cb21509c4606473b632ae8ee062536e0f419447fcaa751ecbe18162fe452d27f36fe771f862b55a51cea6b4cab6632dccef72c3b9ff98668be2fc039e97ca2ca7bc5b0fbcc3b4c5d5f9fbeb77a79143e68fb59227ffd818d64f812d7cc26341081924fe31eb275657004bf7678e118f",
      "3f5c0601e1c7a116401937f367e4d3637a3f83f251e1b2f515a1a66b43a526e4c08c9d46a8c3f121e2e43a885cb083841d9a515e89b293fb96a4bc21a7808970fe10cc6a8afbcebef30797874ae8e4050000",
    ],
    [
      "ETag",
      "foXPOhoS8VHPXk0pBV3oOw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1595636454214"
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
      "5790fa2844d06d8a090fa0a8444418e3c91052b63b186eed683b9518feddb61bb017cc12497c597bef39b767bdede9b751a9a0f790f8e8b682e6e1629d02db9c2d408cd4c4019e4682cb21a18403aa2a3608bc50ec215cf02fe77143ce896935cdf593785efba3562b63716f093196bc6f19c9380821f2b98cdf745cc9f31a233806b5a247a33426331d560fb0d8241a1ebb4e6ff0584462ea6b6430e9f7db9d7e17e5d0b67a5cc4c702cff4927f93d0e3d4c8c5d08ace1d088001f1e0b0eb84d11578a2a7dbcb719c4450e334651ef05c441566f082d134c18cd29a4cd51a75abd6b09a967d659b9679d93077fc887a588494a892c918ed7f40508123877eaa1e233b3b04968559cb77bd4041e1148a2d92d0872a0e7db4cf6dabbf107b03d7360bdc7c36350a95a55565ab823082d93fa9cb33596279c5cb69e7f7e444e238a6291125a51ffaafed136e5cdaa1eca6efdb6ef754b25c483394d4757b2fddb1db7e191e1597dfe9c1049d8d003e64549a8c83b656a36ede58d7761dedac7a4795158572aa6029e8b487e593f5140a990b70c4c1d81a3f05a2ebf51e050000",
    ],
    [
      "ETag",
      "Pe/sxRGyn+n4594qHtKqdQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-106-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad945d8f9a401486effd1584deb449d50101d1c46cad4bb7248a5bc5ddd4b6d101069d5d60586670b3ddf8df3b037e60d6b69ba677703edef3cc3933e7b92649f23d4e02b92bc91e5e3de4287b7a73473cf9bdf0200657c2a35c5ead27b1f7711dce7f9a37f3f5e07133771e7bbd320a17d914c66984ea94e4998f6877366dac3292a73023a4ce05eb0a30ea8aded18d96a1e99aaa686532455138c4c9bd90583396d26eb3b90769ac08594508a698367c121feccd8dda4c3372877c469ba7759bbc146dfea5f245447cc830497ab369499153942d500c7124388ee981f7e154bf8161dc58f1e80df611f47d92274cb095323e4942bccab3429c2b3d73233717d087df8a419e5a436be04a83f1cc71df2e612ce496ef2448a5c52243348f98f469321e49cb94575f438ae852bafd6c4d2c6ec9488823b4c0c152ea491752dfb994a425651c77297dcf0168216e1dda23db959402af281d20ca705200bad08b50058b7b775db5cf4cf420214420e32cbbb0451b18503141c70bbdb61f9a2ddd0b01f23cd36bebb0e501bfa3212df010ac2a3051bbcc87094980ae819609420db4bd00b64d0003d3f0c2764b53a1ae076aa76d9a9ed136e59dc2f6709ec70c337489694a28de755dbe9dd8aeb570273367d077adead943c85b7a59d29f9efce4488c37a94afba7b6bc204a334c3854315fdb71ad497fe0da37150c7ed9866805fda7e983b86e218c283a66c30cc688a16c4402311cf97a3cb55d7becf4874785e2fe5cef23290ffb76803d9ea9aae63ea5a7a32ea7505a05a6a1c915dff6fd59951b18e56764363bb3ac9c68d4cea8fd0b9d6b8faca9db1f5dff074215a8a00e54be0f5c45ed2aadaea2350000f3df80efbe7ed42a2565be5376c0f2979935f92a720b9ff04c50883294f84788573c2a9158ba5fb33379fc7e818914bec30e00fcf933cc1fb84f8fe5fd0c95cf1dc7e5904a41dd34147010e489197b19a11a601ff16289895a284609db37a35c666527b727487905a74813e1fc793ab67355c0d7b6b55fd68ff9058b060000",
    ],
    [
      "ETag",
      "1DGhRmbBhfZz8VZhCwvZNw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1595636454214"
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
      "0002ff4d51c16e824010bdf315647b2d892890b68987da106b42adc57ab13166c5015160e8eea2b1867fefee02ea85ddf7decccebcc7c5304d72488b2d7931c9264d7e2b60e78704c497ba84c0ab4c7079945870208faa1a044d54f5df615ea44b9ff1fd60c676cbe3c7a7ef8e4fc36153c5a31de454d65d2492384e21db72897f34365b5e6b05cd41bdb85e333d50bfd06ae25c6a6d32fdf6c77e782fe5b8d5d2741104afa3c027ad54eb7325bfb55e658f9b1062605044705ba864b887484cb4734ef332038b63c522e0ed10d5d8c809c3aaa40cd1929465f73ccb769f5d6fe039aed3b79dae3ec3888a140bd5b29893eb020205cd423c29fbc46ef2610d6cd2e8b220f15d40f71149e9a89afbe44ad5ed6d657468751b363a0be03386d20c076dc179ea912e8d37546e850a43b00a341d51f9c3de5321b998661c8cdaf807b7a51f011c020000",
    ],
    [
      "ETag",
      "zkSniZErsj3PrhZvMOE5Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "4b7282300000d0bb64ad4ef889e9ae30a090525a19a0b2c9609a803208247cedf4ee657a80b7783f20a7944949faa6620ff002965c453bbac3cdc1523ef9349353ec46db0cf30596dec0e765703fa839a5c7e6f1ae623d6bbc11f741412b5c6baf860eb5bd83c896679d506c866a5a16d85bc637661d64724db83d994fd4467999b8e87c292258a45e10b22e722093d82561df36d1008d2c24a7e36abb11735584deb5b9c779b687b61835edfc4cefe605c55150564297dc50c68477d01fbf71ed7fa9b33f3b71eb800d60737b134c92db3ad30c8436e0bf49faa565ebd562b96002fcfe018d2901b505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:06 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-107-1595636454214",
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
      "0002ff8d545d6f9b30147dcfaf40ecb14d202484a452b4a6295dd112b20269374d13328ea16e01536c325555fefb6c20092cd5d637b8f79e73cffdf07deb4892fc8cd38d7c21c9018e5e0a94bf7e7a22817c2e3c88814878b6675786b5596de3b5f29c5f7d2f92abb3afeedd745a45e1124d4192c5a84b499143442fd66e2fca4991819c902e27ecf655a3dbd727fa68301aea43ad3facc014c5e102a7cf82e291b18c5e28ca5e482f22248a11c830ed41921cecca5653b29c3c21c8a8d2ceabf05454f94fe6cf31818061924ed76ea5a2a028f75102702c741ce19be0b2cddfc320e9453c7a8b210210922265425b4503491ae2a8c84b72cef4c68ddc5c8a3efc360cb26b2eccb92741121749eaa72041e7d20630e0b3d70c4937ce6a2959f6cdca59ce3c6b65fbeefcd65cce7af3d562bdb45de9e1d6744c8981204625569a4a97e59fcd7f4a4565b60da20ca7a5264f781b4ab8b76ea4f5ce100f148284aba2a80ef30d7504fa637512848101c3f1400f421505c13830743008543819a2e12640a0c9502aabf02025a9d137a0ae07037fa022e40f4335f4c78116fa9aa6e9a13a19841ad2e51abd3bd4f23bc70c5d639a118aeb26cb0f8ee599bee7acedf9cc339b7587a088d975a5bc5d75ab1cc61bd454faaf969c28ca724cb8a8729c96ed99ce6cee59f70d197cb7162802f0d57d11db158298a2231ae47c560ce54bb2118391edd9d2bc3e82cb4df9b60fa23ce2e741e7b11c1e28e65fd67232ff761e8f2f56ab15d56c2aabec7a8e657f911bceddfb34f7202edee1d9d66639e3dd7ae41da62daecedf5fbf3a8d1c327facb53cf96e6d3a3f04b6f4098f834294a3141eb37e607505b0727fe418f1f8fd6510107e1c0e0228e366fe8c203da68739aa1e15ae5a5f13ea634355b53d2107e6ec34a2af1d529e5c07910b252865fb665457a2eae4ae25a968c82961229c3f04bb9ee2aeb3ebfc01c737926ce4050000",
    ],
    [
      "ETag",
      "v+B7IdOvlU/krBXumB+KSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1595636454214"
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
      "000002ffc5545d4fc230147ddfaf20f5754b40b7f991f080888a02e218c6c41052b6bb31ddd6d9761a24fc77db6ec05e344b24f165edbde7dc9ef5b6a76badd1406f51eaa38b065a44e17b0e747514027f941307581e7326868ca40c902ed9c07128d9eff77c39fc7c9b3e4f1ee8d31d1b395f96db0ddbed82c5bc252458f0d62212711041ec3311bfa8b851e61596e204e48a1e89f3249dab50dfc37c952978e23afdd14d154988af90d17430e85c0e7aa88436facf223ee678ae96fc9b841a675a29865ec9c2810028a41eec779d51f20a1eefabf6329c6431188ce4d403568ac8c2020e29c9334c093144ca68354f8d96756ed927b66999c72d73cb8f898779445259329da0dd0f70c271ec904fd963641787408bb068f9b61728a89c42b54502fa90c5918f76b98dfe0bb13f726db3c22d6733ad52595b55b42a886298ff93ba3893251657bc9e76794f0e248e1392a7bca6f4f5e0a173c08d0b3bd4ddf455c7ed1d4a967161869aba6e7fd89bb89de1f84771f19ded4d70b9e2c0c69408933150d66a35cd33ebd46ea2ad55bb445a914ba7729a834a7b583c59b71117b900c70cb48df60d411a32cf1e050000",
    ],
    [
      "ETag",
      "qKthMwkUXSOrVJsNRz5TCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-108-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad945b6f9b3014c7dff329107bd9a4260102b9548abaa8a51b5b2e5d42da4edb941873a06e01536c3a4555befb6cc885a8d9564d7b8373f99fdf39b6cf734d51d40792f8eaa9a27a247ccc215bbdb9a79e7a223dc051283db3518b87f7b77e3cfa74dbe9c6ab15dc7d9e86fd7e19458a6c86e234823aa37986819dce678d30a3798a324aeb42b0ae6bddba6ef5ac76ab6d5aa6a19b653283281892e4414adc719eb2d366730bd208290d234029610d4ce39dbdf96434d38cde03e6ac7958b7294ab1e65f2a9f4514234e68d29fcf4a8a9c41b68018914872ecd37deffda17e83a0b8118ae8278201614cf3844bb65206d32420619e15e242e9591885b980defd560ceacc1edae7ae723e998fddb74b144bb9e53b053165b1c880e511572ea79391b24c45f53bc4802d959b8ff6d416968c06248205f1974a5f395306e30b45d94a28df734d6b81300f9d91e32a7ac157d4f681719214842ef222a87009ef66acce9123dd494811c405cc266cd1d1da48ef6a3d2ff03a38e8b62c2fd0c0f3ba5ec7422d4fc33d134cdf035455e0b276998f129af8ed6e2ff03b966540cb3274ec63cdc2a6d1d2da187c2dd002d00d40a6ae6e14d6bb7e7e6684c305612965643376f566eab8f6c29dcec7e703d7aef61e2031d38b92feb0f38396b8185295f64f6379419466840aa8e2809db16b4f07e7ae735dc110b76d0821c2abd9a3bc6f018a18ecb3518662e0908da82f0f47bd9acc1cd7998c07c3bd427181aeb6914c847ddbc1ee7baaaab9abf4f0a8cb5328ad12b36daa15dffae4a8ca358af223324f1bb3aa1f68d48ea8fd0bdde57032f84f7c0dcbfc0de2e6eb47ad22af8af5b14153bfccede957995bf8a4670a016490e07dc1573c1f9958ba5fb31e45fc7657c914b1ae76008c0bb378ca98edcbe30cca874de2b2dd52d0ea767a46672b281233fe22a26b68da36e2c5be92b52086846f8751eead7292eb03a4bc8253a4c970f110c7cef843015f5bd77e017d78295d76060000",
    ],
    [
      "ETag",
      "SM3tgjXdmMJX78myyehKRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1595636454214"
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
      "cb6e833010bcf315c8bd162990903ea41ca08a9aa8346d69395551e4908592024b6dd38846fc7b6d03492ed833b3ebdd198e866992efacdc917b936cb3f4a706d65ca520ded425045ee782cba3c29203b956d52068aaaadd67f05f82bf43721304f5814ebd74113d79b35957c5e32f28a8ac3b4a24719241bee3127f6a6cf6bcd64a5a807a71b3617aa07ea1d74453696db9fa983fcec34ba9c09d96565110787e3027bdd4ea732dbfad5e658fdb10126050c6705ea862b887582cb5734e8b2a078b63cd62e0fd10d5d8c929c3baa20cd19294658f6e2ddbbd73a7e3e9c49d38f664a8cf31a622c352b544efe4b4804041f3100fca3eb1bb7c5807bb34862c487211d0654452fa55cd0e39516d7f5b1b035a9f87f98d00feca509ae1a02d8c9d1119d27840e556a83004ab41d331953f6c9109c92534e760b4c63f950854eb1c020000",
    ],
    [
      "ETag",
      "5MeBOLzwf7LLuwa6AgHUKA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:08 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf4d7282301800d0bb646d1dc050a03ba8808d292360a1b061103e85f24f6246747af73a7d37780f9417053096f1a1811ebda125578c75b1de0fba25fba51be1e55ceafabe95bc1d91653d506c6dd37a7548ae1dd92ecea7b61814625e79b5aec6ce2d1efb1d85be1d98e4cc56d2b958723b7a7a2591647eb4df6212712a848d79964498a510e26aa8b496beb0e99298497a8932c19a7739d15cbff93a8b801f9b2025318c80a1cbb856ca8a4d7b51f90ac7771dc2436c1cb750b93ff7d41ea78031a29aa7c3954a18ad10dcc67a0696d5cfd946358c15fa6f667c19e179b5209f6146bf7f51e65ad205010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:08 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-109-1595636454214",
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
      "9b3010fd9e5f81d8d72621011252295aa394ae5913b20169354d13b28da16e09a6d8b4abaafcf719431258aaaddfe0eedebb77ef6cbf7514457d2469a89e2b2a24f15381f3d74f0f14aa67650673109799cdefb961685fe18d9e662f2f8f77f774a5bbb3e9b4aa2212cdc0364b7097d12247989d6fbc5e9cd3220339a55d41d81d6893eec09c98237d6498c67060546086936849d2c792e29ef38c9df7fb7b21bd98d238c12023ac87e8f610ef3f0ffb594e1f30e2acdfeedb17ad58ff3f9d3f2714014e683add78958a82e13cc05b409252c7111ec28b367f8f806d2f16d5cf046180102d525e6aab68104d231217b924174c6f2228c252f4e1b711503d7b69cf7d05d1a4d8a6410ab6f84c090107017fcdb072e5ae57cac2b95abbab99bf583b8137bfb657b3de7cbddcac1c4fb9bbb65d5be10026586295a97221ff1cf12315c96e21669ca452935f661b4a44b63672f1ce120f14258950c5705d168cb5111858da0446708c224b3761a461082d3836810e353431b011420c9a0c52598507a9300a82c80a353d1859060c8cd1240ca01e9a81010da059e3e1403723b546ef0eb3bce484e34bc232ca486db27ae72e7c3bf0dd8d339ff97673ee081409bfac94b7a76e8dc385414da5ffb2e4445196132a44c9752e1cdf7667737f71db9021ced612c700bd7a4fe5e98a40c2f0110d72b12b8ef3150dcbc5a8ce6c655f1ec1f2a47cdb173151f1f3a0f3388e282cf72f6739d97fbb8f2f0e56cb8a6a375554f57c77e17c511bc9ddfb34b72029dee179aec36a26dcba170eb31657e7efaf5f9d460f555cd65a9efa7d63bb3f4aaccc9519174738c7293a76fdc0d12d8155fa238f91a8dfbf0cf2d5f38e02181761718d103bb64739ae2e15a9acaf094d6ba269da9e5000737e5a3134ad7dc5c9eb50f6",
      "c25b9cf2bd19d52b5139b96b492a1a7224ac2c1717c1a9b7b8ebec3a7f00ddd89b2ee4050000",
    ],
    [
      "ETag",
      "UxC440JbK3npwwkWhoM3RA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1595636454214"
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
      "d16e8230147de72b4cf7aa896c8873890fb8b9cd4c9d22265b16632a5c140714dbb2c518ff7d6d41e5c58564267ba1bdf79cdb436f7bbad32a15f419c41ebaaba045b0dca440b7574be06339b181a52167624848cc0055251b385e4af69b6379f6c0d6e3eea6a9b3facbe87d38a6e3763b633177051116bc9d8844ec07107a4cc41f2aaee47985c53802b9a24bc2348ae72aac9e60be4d143c71ecdef0a98844c453c870daef5b9d7e17e5d0be7a5ec4c31ccfd5927f9350e34ccbc5d09a2c6cf08142ecc269d709256b70794fb597e12809a1c6484a5d60b9882ccce02525698229213591aae9f5564d6fb41ae68d69348c6bdd38f043e2621e9058964c27e8f8039c701cdae45bf61899d921d02ccc5a7ee805f20ba7506c9180be6471e0a1636e5ffd85d81b3aa651e0e6b39956a82cad2a5ae50721ccff495d9cc90a8b2b5e4e3bbf271712c71149635e52fab1ff6a5d70e3c20e6537fd6039dd4bc9322ecc5052d7e90dba13c71a8cce8a8befec6482ce96031b51224cc640594baf1bb78da6594707abde1369452e9dca690a2aed62f1643d075ce47c1c32d0f6da0faf7051501e050000",
    ],
    [
      "ETag",
      "XTAdRMR1nEq71s0KPYNQrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:09 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-110-1595636454214",
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
      "94",
      "5b",
      "6f",
      "9b",
      "30",
      "14",
      "c7",
      "df",
      "f3",
      "29",
      "107bd9a426810672a9147551ca36a45cba84b4aab62931e640dd02a6d824abaa7cf7d94012b2665bdff606e7f23fbf736c9f979aa2a88f24f6d40b457549f09441fafcee81baea99f4004781f4dc2d1e344db7ec8dd635d69bc79fce664ccd41bf5f44913c9ba12809a1ce68966260178b7923486996a094d2ba10acebba56d7cd9ed96eb50dd338d78d229941e88f48fc2825ee394fd845b3b9036904940621a084b006a6d1dede5c9f3793943e00e6ac795cb7294ab1e63f2a5f8614234e68dc5fcc0b8a8c41ba84089150721cd23df7e3b17e83a0a81188e835c18030a659cc255b218369ec93204b7371a1f4228cc29c43ef7f2b06756e8daca1a30ca78b89f37e852229b7faa020a62c9729b02ce4caa7d974acac1251fd1e31602be5f68b35b38425a53e096149bc95d2572e95c1e44a5156f2ef7ba6692d2c4c237b6c3b8a9eb3e5753d609cc4399d83dc102a4cc25b8ed43e719c7b092982b80029c3961dad8df4aed6737db783fd6ecb747d0d5cb7eb764cd47235dc33c0f05c4055052e6b17f928a6b138194f476657473d6843dbc358eb80ef6a5d13ebbe66f8460bda1d21ae960adb7d3f9b9470b8222ca18c9423576f67b6632d9dd962321c3856b5771f89795e15f4c79d1fb5c4c590aab47f1bcb2ba224255440e5876b4f1c6b36183af64d0543dcb41104083fcf9fe45df351c8e0908d52140187744c3d7938eaf5746e3bf67432181d14f2cb73bd8b6422ecdb1ef6d05355cd794e8e8fba3885c22a31db865af16dcf4eaadca0303b21b32ecdaa7ea451",
      "3ba1f65fe9cc3fe0955f3f6a157155ac8d124bfdbab066773237f749cf0c7c4821c687726f783a32b170bf652d8af8dd8e9229624ded01181766f18c313b94c729148f9a4465b3b9a0d9edf55a9d9da0484cf9ef113d4dd7760be2f59e92b5208298ef8651ecab6292db23a4ac8293a7c970f10827f6e4730e5fdbd67e017ef783806e060000",
    ],
    [
      "ETag",
      "YUj001EIw084vwkxTwMo5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1595636454214"
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
      "00000002ff4d51d16e8240107ce72bc8f5b5a4a2686c131f8a21d5c49816a589698c3961a15860f1eea835867fefdd01ea0b7733b37bbb335c0cd3243f6911911793ecd3e458013b3f24203ed4c5075e6582cba3c482037954d52068a2aa8f2b78ea4fcb594e3f57413a76a30ddffc9d2693a68a87df905359779148e238852ce2127f696cb6bcd60a9a837a71b7637aa07ea1d5c4b9d4da7cb9f6de3cff5eca31d2d232582c5edd85475aa9d6e7567e6bbdca01f73ec4c0a008e1b650c9f000a1986be79ce6650616c78a85c0db21aab1911386554919a22529cbb67b963d7c1e8e062367e8f46da7abcf30a422c542b5042b725d40a0a0998f27659fd84d3eac814d1a5d1624be0be83e2229fdaae601b952757bdb1a1ddade86b96701fc9da134c3415b70c63dd2a53145e556a83004ab40d321953f6c960ac9c534e360d4c63fe4e95de81c020000",
    ],
    [
      "ETag",
      "qSe/2CpHmaVSUi8BdYsYxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:10 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d0bb64ad0e20d5d01d108bfc44516971c3604c319404483208edf4ee75fa6ef07e40893191b250ed17e1e0154ca5612df0226ca1a31ff0b89281c58fdd1b85ed87319cb74efdcdf7aee27e90ea2726b21d8b59b554d1fda10f5a5fba70d325728eccf5b4f5e121b3f18d1a0cd52925d3a74ad7c89e32b112a68f35311ff5a29221f3f44d9307adea12fbc883e8229a3df35074f3ca7ac87b68f3bb1cdd1dbac24b3cf2f184314fb1896883acaa4d3a66f4e7467b574b1e27d7c94d4353f83eb5606e83192063470591057dce962f963503ffcd424d1d795e1d520a22c0ef1f3ff2074305010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:10 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-111-1595636454214",
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
      "147dcfaf40ecb5f9208124548ad62ca56baa84b4405a75d3848c31d42dc1d436edaa2aff7dc69004966aeb1bdc7bcfb9e77ef8beb714457dc269a89e2a6a80e3e71cd1b72f8f24504f0a0fe2202e3c0ff73abdba3232f7f9faf74d7ffdedc7dd5483f1645246618966609325a8cd484e2162a76bb7135392678012d216846d4dd3da9a611ac3c15037f4bea6976086926881d3279986f38c9d76bb3b219d9890384120c3ac03c9666fefbef4bb19258f0872d66de6ed8a54acfb9fcc5f130201c7249dacdd5245ce10f5d106e0a4d0718087c15993bf83c1a6138be8170c118090e4292fb4953490a4118e732ac905d3bb300ab314bdffad1954d75a58334f8124c937a99f820d3a5142c081cfdf32a45c38aba532b72f56ce72eacd57b6efce2eade5b4335b2dd64bdb55ee2e2dc75238081224b1ca4439937fb6f8918a64b610318e53a9c92bbc3525c25b3572fec110f714058950c55015e68f7a43a08d7b66100523188d074610f550108c83910106410f9a3ad2c300813a835456e2414a5268461a0003d307c370e8eba35ecf371108fda83f1ea0ded08c063a502bf4765fcb2bc51c9d63961186ab26ab77cedcb37ccf59dbb3a967d5eb8e409ef0f35279b3ea46395c34a8aef45f2d395294514c842839ceb9ed59ce74e6cd6f6b32c46e2d500ce09bfb5c6c570412860e6840c5ac38a24b12168351ede9d23a3f80e5a65cef829888f8b9d77928470416f397b51ccdbf99c7138bd56845399bd2aaba9e33b7bfab35e7f6639a5b90e41ff0bc54663513dd7a101d660daed6df5fbf5ab51caa78ac953cf5666d39f70556fa0a8f832244510a0f593fb1ba05b0747fe61889f8dd652820e238ec05302ecce2194176480f29",
      "2a1f152e5b5f111aa6d61f8c77840248f9718431da471c5d872217daa094ef9a515e89b293db86a4bc2647c28a70f110ec6a8adbd6b6f507bfc12f7be4050000",
    ],
    [
      "ETag",
      "hY4rJJ5pSqPxQ2UBZWA1cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:11 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1595636454214"
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
      "df5790fa0a91e9186ac2c35054124484f9640829dbdd2c76eb6c3b9510feddb61bb217cc12497c597bef39b767bdede9c66a34d01b494374d5404b12bfe7c0d72731c8273d9982c8a9146ac8582a0035351b248e353bbbf6e8fa2e39255fabf8eda6cb1fbba40d9fbd5ec112c12b2458f1362a527144808642c52f266e947983a53801bd62c0689ea40b1336f7b05c67069ef9d3e1f8ae8a242c34c8f87934f2faa3012aa16df3b04888255e9825ff2661c6b9558aa1155b4e21020e6900fb5d679cad209043d35e81938c424bb09c07204a115d58c03167798639632d956ad9b6ddb23b971df7dc753ace99edecf89405581296ea92e719faf901c924a653f6a97b8cdce2107811162ddff502459553a8b648411fba9884e827b76dfe421c8e7dd7a970cbd9dcaa54d65655ad8a0885c53fa9ab3379c5ea8ad7d32eefc991c471c2f254d694be1d3d7a47dcb8b243dd4ddf78fee058b2422a33d4d4f5870f8399ef3d4c0e8aabef7c6f82fe5a829870a64c26c058cb6e3b179daedb463bab5e336d45a99d2a790e261d60f564dd13a97211a602acadf50d2820b87b1e050000",
    ],
    [
      "ETag",
      "pCAlyGm/ixjgkD7rO7i0ew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-112-1595636454214",
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
      "ad945b6f9b3014c7dff329107bd9a426e11a924a5117b56c454b4907a45d775162c050b7800936adba2adf7d369084a8d9564d7b8373f99f9fcfb1cf734710c47b9485e2b120fa285e95b0787a73877df1887b200531f758e7b1fbf5937df965b472272bb3cc7e42e3e6713caea350954d409a27b04b705904901ccfdd5e5ce0320705c65d26d89565a52beb237da00e345d5364ad4e263089a628bbe712b794e6e4b8dfdf80f4628ce304821c915e80d3adbdffa0f4f302dfc18092fe7edd3e2b45fa7fa97c92e0005084b3f1dcad294a028b054c014a38c72e3df4dfefebf710487b318b7e4001044180cb8c72b65a26c05984e2b2a8c499d23333327305bdfd6d1944d79c9aa79e703a9bdbdedb2548b9dcf29d0088b05814909409153e38b30b6199b3eab78040b214aecf4dc76496024728810b142e85b170224cec336117b714be9792a406cc31b52e2c4f902bc2aa7a08094559c5e8013f812d32e66d1a6b1d18ea56828b00caca34610b431a0079288dfcc8378268a8ea7e2441df1ffa860e545f0a461ad4421f82b602e5b5eb7c90e16c180e0c4505b202812f0f8d2852651de89236d4641584403254438681228b8dc27a7b9ec702517886488e096a1a2f5e3b96672e3c676e9f4e3cb37df608b0ae9ed5f4fb27df3b12654d6ad3fea92d2f88f2026106558dd8b23dd3999c7ad6550b83ddb7298c41f0e4aef88d8b4042e02e1b14208514161738e4c3112f67aee559337b32dd295457e872134958d8b72decee4c6d35ef29df1f753d85daca31079ad8f2ad8f0eaa5c81a43c20f3d09845794fa37340ed5fe85ccfb1ec8fff016f92b3c1fd06b1f9fad169e98b6c813468e2e7b9e9dcf0dccac73d0e8c6001b36057f115cf8727d6eed72c4816bfd9563c852dac2d00a1cccc9e724076e58302d60f1ba5f5386a417da428fa6823c8120bfa324293944dc48b8dc56bc1146674d38c7a73d59d5cef21952d9c2a8d",
      "87b3876837135c77d69d5fe6f196e478060000",
    ],
    [
      "ETag",
      "IHgSZKNPX9qSAqEunze7Yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:12 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1595636454214"
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
      "4d51d16e8240107ce72bc8f5b524c5a2b54d7c506b5a1b6294d6264d63cc890b6281a5778b8d31fc7bef0e505fb89b99dddb9de164d936fb49f22d7bb2d926897f4b10c79b1868a12f01c83225a98e027309ec565703f158577f5219c9f1f3577f3c3f2c763ef5df9677bde1605057c970071957752785148e1248b752e16f83ed86375ace33d02faed7c20c342f341a1d0ba34d671f939749702d65b835d26ce9fbc3913f618d549973a5be9559658f9b00221090877059a810b88790a6c6b9e459918223b11421c866886eace55860597081e828ca71dd8ee3761fbbbdfb9ed7f53aaed7d6a718724a30d72dcb77765e8090781ae09fb6cfdc3a1f51c33a8d360b165d05741d91920ebaf98e9da9aab9adac16ad2ec34647023917a8cc483016bcfe036bd318a3764b3a0c1225183ae4ea87bd26a4b888a712accafa07521dcab71c020000",
    ],
    [
      "ETag",
      "VtufsCDY8CPvQhLt8JU06A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "7fc9da3abc0bdd95b43cb5481104370c842b4206850441ecf4dfebf4fcc1f9410521c0793e5e295cd01b5a0ac95893b57fd54d3124d4cecea2374e78e1324926ac9cc9a12a0dadeffc7bd07dd90e9bea462a8f59eba56eba03e37503f810c9cefbe408ae431f336e44eb7b7a787595b80c3e47df2fbdac15a5b6d2281f6c57e9fc4801ac4ec671d6fce516632f56e44057db7d801d3ab36d7db2c4dbc7561bcaae4cf7f4b29c7aca246225bb60c610767a1868118d07c179092d6eba7803ac374701ad10dcfb8601cf9be74c560d6385fe9bf9b8f4f0bc9a503060e8f70f20f6521905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-113-1595636454214",
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
      "0000000002ff8d54db6e9b40107df75720fa1adb60f02d92d5b80e69516d9c004e5455155a9681906096b04bd228f2bf7717b00d75d4e60d66e69c3973d979eb4892fc18a7817c2ec97e1c3d1590bf7e7a20be7c263cc050243ceb1bdb31e9f0b7fa32bf2e262be7cb927d8f6e66b32a2a2ed1146db304ba941439067abe717a514e8a0ce5847439615755b5ae3a9c0e47da481fea0355afc014927019a78f82e29eb18c9ef7fb7b21bd8890280194c5b487c9f660ef3f0ffa594e1e0033da6fe7edf354b4ff9fcc9f1382118b493adb38958a8242eec116c589d0718407fe459bbf17a36d2fe2d1cf31068431295226b4553498a4611c157949ce99deb8919b4bd187df8641768ca5b170254c92629b7a29dac2991420863cf69a817465af5792695dadedd5dc35d796e72cbe19ab796fb15e6e569623dd7d336c4362c84fa0c44a33e9a2fcb3f84fa9a8cc160065715a6a7285b7a1847beb469aef0cf1402148b82a0a7598375646489d28533ff4c7389c68433f54c0f727fe7888345fc1531df4c007d46428955578949234503944c7aaa7050af2741d2bde1402dd53d008006961a04e905ca377875a5ef298c1654c3342e3bac9f29d6dba86e7da1b6b31778d66dd212a127659296f57dd2a87f1063595feab25278ab23c265c54394ed3720d7bbe70cddb860cbe5b4b88107e759ec4768528a17044a39ccf8a41be2281188c6ccd57c6e5115c6ecaf53e88f2889f079dc77278a0987f59cbc9fcdb795cbe58ad5654b3a9acb2e3daa6f5556e3877efd3dca2a47887e7b936cb19efd63def306d7175fefefad569e490f963ade5c9371bc3fe21b0a54f786c082187141fb37e607505b0727fe418f1f8fd6510107e1c0e0228e366fe8c303da6c739548f2aae5a5f130ea7da4019ef09393067a711da68b08f38b90e22176c2165fb665457a2eae4ae25a968c82961229c3f04ab9ee2aeb3ebfc01ba40feace4050000",
    ],
    [
      "ETag",
      "OQRSIs5x1wAPu8MSBLtKgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1595636454214"
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
      "30147de7572cf575c4a10c9d890f38a792b00f813d9965a970d950a0d816cdb2ecbfdb16b6f1a22171892fb4f79e737be86d4fb75aa783de933c42371df49aac3e4aa09bb315f06739f180952967622848ce0075251b385e49f6e310e6c1f0dc1d4c2f9e0646917b637fddb36f6f2b160bd79061c1db8a48c4710269c444fca2e24e9d57588e33902b86242db37ca9c2ee11e69b42c17ee03993c7269291482193b9ebda77ee08d5d0aefbb34884395eaa25ff26a1c685568ba137f2ea410c14f2108ebb2e287983903baabd0c67450a3a23250d81d522b2b08257949405a684e822a51bc6a56ef4077debd232fbe68561eef92909314f482e4be63e3afc00271ca71ef9923d46567508b40aab96ef7b81e2c629345b24a04f599c44e890db757f213a93c0321bdc7ab6d01a95ad5545abe22485e53fa98b33596371c5db69d7f7e444e2382365ce5b4a3fb853fb841b177668bbe97b3b189d4a9671618696ba81331ef9813d9efd282ebe8ba309ee361cd88c12613206ca5a46cfbcee5f593db4b7ea90482b72e9544e4b50e9108b27eb29e12217e39481b6d3be018672e74d1e050000",
    ],
    [
      "ETag",
      "GCeUTC/L9O2H91pnRMSh0A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-114-1595636454214",
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
      "00000002ffad946d6f9b3010c7dfe75320f666939a0402a449a5a86b53b62125a44b48bb699b12e31cd42d608a4dabaeca779f0d24216ab655d3dec13dfcefe73bfb9e1b8aa2de9164a59e28aa4fc2fb1cb2a737b7d4578fa407380aa5879feb5ad8a78fbe11d86377787efdf3cb551c0e06651429b2198ad3089a8ce6190676329fb5c28ce629ca286d0ac1a6ae9b4dddea5b5da36b5a664737cb6406513022c99d94b8e13c6527edf606a415521a468052c25a98c65b7bfba1d34e337a0b98b3f67eddb628c5da7fa97c1a518c38a1c9603e2b297206d902624422c9b14b5ff9eff7f55b04c5ad50443f100c08639a275cb2953298260109f3ac10174acfc228cc05f4f6b7665067f6c81e7aca703277bdb74b144bb9e53b053165b1c880e511573e4c276365998aea3788015b2ad79feca92d2c190d48040bb25a2a03e55439732f945ddc52f99e6b9a818563e48c1d4fd10bc2a2fa0a182749c1e8213f821a99f0568d750e0c752b2145101765aab0c5b1d6457a4febfb817f8c839e61f98106bedff38f2d64f81aee9b60ae7c4075052e6b97f928a109a09ea1059ad935574607772ca49bba8103a423c3087c0b2cf05157d32cb552586fcff398110e1784a59491aaf1eaf5d4f1ec85379dbbc333cfae9f3d40a2ab1725fdfec9f78ec44593eab47f6acb0ba2342354401523765ccf9e9e0d3de7aa8621eedb0842849f66f7f2c6052862b0cb46198a814336a62b391cf57232733c67e29e8d760ac515badc443211f66d0bbb3b535dcd7b4af7475d4ea1b44accaea9d67ceba3832a5728ca0fc83c546655dfd3681c50fb17ba993775dc8fff010fa56270bf41acbe7e346afaaa5820159afa796e4fbfcadcc2273d5308208304ef2abee2f9c8c4d2fd9a0529e237db4aa68885b505605c98c553c66c571e67503e6c1297e32805adbea9753b1b419198f197119dceb6e48b8d256b410c09df34a3dc5c6527d77b48790da74893e1e221bad504d78d75e3173e4f6df278060000",
    ],
    [
      "ETag",
      "tB10g9owb3fEMNCBWzXVmg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1595636454214"
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
      "02ff4d51d16e8240107ce72bc8f5b5a4a102b54d7cd086b426c42895c4a631e6c4856281a577478d31fc7bef0e505eb89b99dddb9de1629826f9c9ca037931c93e4b7f6b60e7bb14c44a5d42e0752eb83c2a2c39907b550d82a6aa7a5ccf82d56989d375b81fd9c1e766f310f1d564d256f1f81b0a2aeb2e12499c64901fb8c45f1a9b1dafb59216a05edced981ea85fe83471aeb4365facfd373f1c4a051eb4b48882603a0b7cd2498d3eb7f2dbe8558eb80f210106650cb7852a864788c55c3be7b4a872b038d62c06de0d518dad9c32ac2bca102d4959b6ed58b6fbec7a23cf719d47dbe9eb738ca9c8b0542dd107b92e2050d03cc493b24fec361fd6c2368d3e0b920c021a4624a53fd5ec912bd574b7add1a3ed6dd8ec2c802f194a331cb40567fc44fa345e51b9152a0cc16ad0744ce50f7bcf84e4129a73301ae31ffc0ce9f31c020000",
    ],
    [
      "ETag",
      "8uBLQwPoATRb31LYXX/UsQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "5283300000d07fc9b97458aa29de80b2ef2283e5c2401a1896420a11098eff6ec7f707ef079408e16529e8d4e311bc01568af2111ddde9ac0a3186936d0fa666a5067244b218d165efc6bb9b7f55db698799ad1771c38924d5fdf7f9a141be95fc78e3ee3cbcb928580adf7d0d0339b48c8e0d7abee6b1105c555aaa5dc44e3c1c358f6e8fcf21f2c5fd72f5105b138b72b55fdf4852cb1f99d7c0484b523e539cb9cf9d5e349bc0358b86d5c3839b2b0e9eeb6f291ec39e689ba3ae89495b2565e14e5461ad90020e006fa49df152b4cf99f422cb07f0df2c2823f879557139e319fcfe0130ea9da705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:14 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-115-1595636454214",
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
      "6fa24010feeeaf20dcd7fa828a4a13733596b6248a2d629bcbe5429675a0db024bd9c54bd3f8df6f1750e16ceefa85b033f33cf3ccccee7cb414457d25c956bd54549f846f3964efdf5ea8af5e480f70144a4f80f5cdf3abb6bc9fdbb101ccbab5efd3b787e9b48c22059aa1388da0cd689e6160979b7527cc689ea28cd2b6206c6b9aded674431f0d46437dd8d786259841142c48f22a299e394fd965b77b10d209290d234029611d4ce3a3bdbbeb77d38cbe00e6acdbccdb15a958f73f99bf4714234e6832ddac4b153983cc83189148ea38c1b7fe5593bf4350dc0945f48e604018d33ce1525b498369129030cf0a72c1f4218cc25c883e1e6b06756d2eccb9ab601ae571e22528860b658b38f2f87b0aca8db35a2a967db3729633d75ad9de7a7e672e679df96ab159da6be5e9ce744c85233f8202ab4c95abe2648b43a1a8c8b605c649526872a5b7a64478ab465a9f0cf1482149842a06559837ee8d9036e9197ee08f713019e87ed003df9ff8631d0dfc1e368630dcfa80ea0c85b2128f129af42748db021a78430c23f1e91bde444cca43c6a8df473ad28301562bf4fe58cbef8c70b8262ca58c544d569f1ccb353dd7d9d8f3996bd6eb0e501ef1eb5279b3ea46395c34a8aef45f2d39539466840a51c5382ddb359dd9dcb51e6b32c4dd5a4088f0fbfa4ddeae00450c4e6894895971c896742b07a3dab3a5797d021737e5fe10c444c4cfa3ce53392250cebfa8e56cfecd3caeb8588d5694b329adeada752cfb56ad39f79fd33ca228ff84675799d55474eb59749835b85a7ffffd6ad572a8e2b156f2d4878de9fc90d8c2273d0e049041824f59bf707525b0747f651989f8c3669010b11c8e02181766f18c303ba5c719948f8a94adaf08756338d626074201ccf87984a1e98788b3ed2073410c093f34a3dc126527f7",
      "0d49794d4e0193e1e221d8d514f7ad7deb0f586819f2e4050000",
    ],
    [
      "ETag",
      "fc5Uhk1MPCNm9esIGNPpqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1595636454214"
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
      "4f8330147de7572cf5754b86027e243ea04e25d9e664cc17b32c1d5c18ae506c8bba98fd77dbc21c2f1a1297f8427bef39b787def6f4d3e874d03acd2374d141cb34792d816d8e12108f6ae2032f89e0722868ce0175151b044e145b589b599190b5b7ba5d7eacce9fa275e2827b7959b178b8820c4bdea78c641ca740222ee3671d77eabcc6729c815a31a4a4ccf2850ebb7b586c0a0d4f03df1bdf35918c461a19cf8643f76a384035b4edfe2c126181177ac9bf49e8716ed462e8852e7d8881411ec27ed705a32f100a4fb797e3ac20d0e3b46421f05a44155670c268596046694fa67aa669f74cfbdc764e1ccbb68e4d6bc72734c422a5b92a994dd1f70f082a30f1e9bbea3172aa43605558b57cd70b14374ea1d92209bda9e23442dfb96df717a2370e1cabc1ad6773a351d95a55b62a4e092cfe495d9ec90acb2bde4ebbbe270712c7192d73d152fa76f8e01e70e3d20e6d377de3068343c97221cdd05237f0468369e08e263f8acbef7c6f82ab8d003e61549a8c83b696d9b7ceec53a78f7656bda6ca8a423955b012743ac4f2c9ba4f85ccc5987030b6c617f553fb2d1e050000",
    ],
    [
      "ETag",
      "t4yUpglkIhFbxh9VdkgAeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-116-1595636454214",
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
      "00000002ffa594db6e9b401086effd1488deb4526cc0f80091acd4b2694be4d829c689aab6b21718c826c01276496b457ef7ee820f5871dba8bdb1f01cfef97666779e1b92243fe03490cf25d9c3d16301f9facd3df1e433e10186a2d2034e145cdeeb48eb1674f1335edf5f2afd6830a8a270994d5192c5d0a4a4c87da0e78b792bca4991a19c9026176c6a5aafa975cd6e4fef75ba9db6d6a99229c4e104a70f42e28eb18c9e2bca0ea4151112c580324c5b3e49f676e5a9ad6439b9079f51e5b8aec24b51e52f952f62e22386493a58cc2b8a8242be8404e158701cd203effdb17e0ba3a415f1e827ec03f27d52a44cb055323e49431c157929ce959eb9919b4be8fddf9a419e5b136be44aa3d962eabe5da144c8adde49884acb650eb48899f4c1995d49ab8c57bf4314e84abafd643916b7e424c4312c71b09206d285349c8e25691520062be95ba1aabacf8d13fbca7625ada42b2b0740194e4b3e177931d4a8b877db54fbc440f7124204318eb20d5bf6d51ed20cd5f442afef8786def542153ccff0fa5da47baa6f76a0137880ea0a4cd4aef2514a5253d73530da7a009d30d04cdd08fb280c032f30b838a85ec7304dd33790bc55d8eccff323c70cc6986684e26dd3e55bc776ada5eb2ca6a3a16bd5cf1e22ded171457f7cf2a32331dea43aed9fdaf28228cb31e150e578eda96b39c3916bdfd430f85d9b4084fcf5fc51dcb610c5140ed928470930c8af482086235fcfe6b66bcfa6c3c941a1bc3ed7bb48cac3beee610f67aaabb9ebec78d4d5142aabc0ec75e49a6f737652e506c5c50999a7ad59d68e341a27d4fe856e2c86f8ff706db5ad36d536df04bfa1dc7e7d6fd48ac87c7f6ce9e4cf0bcbf922724b9ff03810420ea97f28fb8a1724122bf76bf6238fdf2d2b91c2f7d51e80326ee6afd9a787f27e0ed5dbc64935914a50fcb6775b4024e6ec6544bfabee225e2c2c510b1248d9ae19d5e2aa3ab939422a6a38659a08e76f716a4f3f96f08d4de31740af63f177060000",
    ],
    [
      "ETag",
      "beRgdJj3a15usUxlyjJ/7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1595636454214"
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
      "df572cf5d5254eb6054c781083804122538cc62ca494bb39dc7667db4908d9bfdb761bf0d2f69c73db7bcfe9d1b26df293165b7267934d9afc56c00f5709c8a53e8420aa4c0ab595580820d7ba1a244d7475efe3a93f159378f93e0976f03cf013f6f9980c874d9560df905355775448e138856c2b14fe32d86e79a3153407fde27acd4d43f342abc94369b4d9e26d3c198797528e5b232d56f3f9fd683e26ad549b3d526b6d46d9e126841838140cce03951c77c0e4cc3817342f337004569c81689be88b8d9c70ac4aca111d4539ae1b38ae3ff0835ee0f9deadeb75f519322a532cf495d52b390d2051d22cc4bdb64fdc261fdec0268d2e0b125f0474199192fe4ce6e444d5ed29b23a149d9b8d0e12c40b47654680b1e0f56f4897c6036ab752872179058666547dd834958a8b6926c0aaad7f294e1b311c020000",
    ],
    [
      "ETag",
      "3XJ8HsGfQVG6jeM95gcYFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dcf4b7282300000d0bb642d0e1802d21d2adfd62a28d8b8c9c410480a56e53385747af73a7d37783f8032c6bb8ef4b79a7f811730d1853367f3d7db72652445de4044adcc92588c51f208c2f3d11f09f6c5f715ad6538884d5aba4d5ca86525aa3e396c57cc8e905ca22e3eed3361bd537c1513374caccafdd93968173d3eaa375fc53c3047e9d246219e3e783c1078579d5f373074edccd2cc2c805be979bbe2a23d4a5559c66e63d7cc58eb30cdb6be118639a150fbb0fa4864c3e2d412af1df4265f20ccf6f8b3b4a71acc001fefb2e51d91cf19448e3303ff4dd24f77febcae386d790b7eff008d4cfde705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-117-1595636454214",
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
      "000002ff8d545b6f9b30147ecfaf40ec71cd9d4b52295aa394ae4809e90869354d13b21d43dd104c6dd3aaaaf2df67034960a9b6bec139e7fbce772e3eef2d4dd3b724dde8979a0e49fc9c63f6f6e58942fd4279b000b1f264d3dbe7af637ce74216dcb0b509b68bed6b3c999451a44073b0cb12dce6346708f3cbf5aa13339a678051da9684ed7edf6ef7cdb1690d2dc334067da304739c4473926e15c5a31019bfec760f423a31a5718241467807d1ddd1de7d197433469f3012bcdbccdb95a978f73f99bf25140141683a59af4a1539c72cc43b4012a5e304dfc0ab267f87805d2796d12f04618010cd53a1b4953488a611897356904ba6776994e642f4f1b766d057cedc99051aa249be4bc314ecf085b6010284e22dc3da8dbf5c68ae77b3f417d3c05d7ae16a76eb2ca69dd972be5e782bede1d6f11d4d0098e002ab4db4abe2cf933f85a222db067341d24253a0bc3525d25b35d2fd6088470a452255715c858576cf02fd516f0c2368a368343461d4c3108ea06d8221eca1b1818d0dc4a0ce50282bf120a5e9a0675b511fc0d0820886c6706084100dac10f46d609aa66dc3c148afd0fb632daf8c087c4d784639a99aac3ff86ee08481bff666d3c0a9d71d813c11d7a5f266d58d72846c505de9bf5a72a62863844a51c5385d2f70fce92c70ef6b32e46ecd710cd0dbea596d5704128e4f68c0e4ac04660bba5183d1bde9c2b93e818b4db93b047119f1eba8f3548e0c54f32f6a399b7f334f2017abd18a7236a5555f05beeb7dd76bcefdc734f720c93fe079a9cc7a26bbf5283bcc1b5cadbfbf7eb76a3974f9582b79fa8fb5e3ff54d8c2a73c3e8e30c3293a65fdc4ea2a60e9fecc3192f187cba020f2381c057021cdf219217e4a8f182e1f15295b5f119a63cbb00607420964e23cc21a1e23ceae83ca8577381587669457a2ece4be2129afc929602a5c3e04af9ae2beb56ffd01e6be338de4050000",
    ],
    [
      "ETag",
      "pAHq+9ePIbrTFrU5akMkwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1595636454214"
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
      "147ddf5790fa28244cc744131e405131883846223184d4ed6e4ebb75b69d4a08ff6edb0dd80b668924beacbdf79cdbb3def67465d46ae83d4a7c7451432f51f891015b1e85201ed5c4019e11c1e590d28403aa2b36081c2af6ddece3b8e78f67dfc4f7f9fb32746fedf653d8e9e42ceebd428c256f2523190711109fcbf859c7b522afb104c7a056f428c9e264a1c3fa0e16cb54c313d7198c6eca484c7d8d8ca6c361b737eca3025ad7f78bf858e0855ef26f127a9c1b85187aa32f0e04c020f160b7eb94d137f0c440b797e33825d0e034631ef0424415e670c8689662466943a61aa679d6305be72dfbd4b65ad689696df8847a5844345125d309dafe80a00213877ea91e233b3f04968779cb37bd4041e914ca2d92d0a72a8e7cb4cdadebbf100723d7b64adc6236374a95955565ab8288c0e29fd4e599bc6279c5ab6917f7e440e238a659222a4a5f0f1fba07dcb8b443d54d5f75ddfea164b99066a8a8eb0eeefb13b77b3fde2b2ebff39d097a4b017ccca83419076d2db369b55b6776136dac7a4995158572aa6019e8b487e593751b09990b30e160ac8d1f6a8cf44c1e050000",
    ],
    [
      "ETag",
      "JYq+BdPYxlddskygTH68Xg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-118-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffad94596f9b4010c7dffd29107d69a5da5ec0b764a5964d125a1fa98d939eb21718c8269825ec922889fcddbb0b3eb0e2b651d53798e33fbf9dd99de792a2a8b724f2d48ea23a24b84b21797c73431df5bdf400c781f45c9141757077633e0cdb9fe8f947ffeccbd3e953d0ede65124cb667815875066344d5c609df9ac1224348d71426959089635ad55d6eaed7ac368d4ea355dabe5c90c427f48a25b2971cd79cc3ad5ea16a412501a848063c22a2e5dedecd57bbd1a27f4065cceaa8775aba214abfea5f249485dcc098dbaf3594e91324816b0c224941cfb74cff970a85f2178550944f43d7101bb2e4d232ed9721997463e09d22413174acfc228cc19f4eeb7605067e6d0ecdb4a7f321fdb6f977825e596ef14cc94c5220196865c399d4e46ca3216d5af3103b654aececda9292c09f549080be22d95ae72a2f4c6034559322e7097ca8f1421c315d6a135b26c45cbf0b2d21e304ea20cd0c64e08052ce1dd74d53a32d19d8414c15cb06cc2164dd4c05a0bb51ddf69ba7ecba83b3e02c76939cd3a361ce4b66b50f31cc045052e6be7f938a211d2fd560b21473374c73130d4da2d0486a3eb4dddf3346883a7d545bf91ba5158efcef390100e03c262cac8a6ebead5d4b2cd853d9d8ffb3ddb2c9eddc7a2a5839cfef0e40747e2a24945da3fb5e505519c102aa0b2f95a63db9cf6fab67559c010976d0801761f6777f2baf93864b0cfc6095e018764443d391cf56232b36c6b32ee0df70ad9fdb9d8463211f67d07bb3f5351cd7e8c0f479d4f21b74acc464d2df8d6ef8faa5ce2303d2273bf31abda8146e988dabfd0d9d6c89cd9bdd1c57f20d4918eca4817fbc0d6f48e6674b45a0521f4ed37e09baf9fa5424955ec940db0fa796e4ebfcadccc273d53f02181c8dd43bce251c9c4dcfd9a9d29e2b70b4ca6881db60310cf9f13f1c05db62fef26903f77b2ca87940bd6db4d436f6f054562c25f46d45bdbd5f17289c95ab082886f9b912fb3bc93eb03a4b48093a5c970f13cc7d6f82c832fad4bbf00a85edcb48b060000",
    ],
    [
      "ETag",
      "WiD/DqjEwL9KoHJfGXzFzg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1595636454214"
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
      "40",
      "107ce72bc8f9a824d2426d4dfa600dd1c65a95da34d134cd15160481a57787da34fcbb7707b47de16e66766f778683619ae43b2942726b926d12ef2a60fb8b18c49bbaf8c0ab4c70799458702057aa1a048d55f562b77a71d3e75e7f307f82cb91f777f311ade2f1b8a9e2c117e454d61d2492384a200bb9c49f1a9b2dafb582e6a05edc6c981ea85f6835b12fb5369dbf7b0f9e7f2ee5186a69be9ccdee26338fb452adcfb5fcd67a9514b73e44c0a008e0b450c93085404cb5734ef332038b63c502e0ed10d5d8c831c3aaa40cd1929465db43cb7647eea03f705ca7673b5d7d8601150916aa65b920c705040a9af9f8abec13bbc98735b049a3cb824467019d4724a51fd5dc2747aa6e6f6ba343ebd3b0c95e007f6528cd70d0169ce135e9d2b847e556a83004ab40d301953fec3111928b68c6c1a88d7f798eba2f1c020000",
    ],
    [
      "ETag",
      "SqWO5jM236NKe+9Ex7ZfWg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcf496e83300000c0bff81c22d60a7ac3464a0d85420910b858404c406c16666dd4bf37eafc609e202f4bca3999c7960ee01d1cb96c9ccbb333ea500acaf4a6e3753ddec4a44d85225dbe9b54dd23bb12483c161fd23dce1e19aa1b11c9c3e783eab356148bad86a6c4698b192e98eaafa6ef42d1f111824ebbc442ac6d7d2c9975670412da07bdcc2ff9b032cfc23d0c5c4eeaa489baaaaf32a9429cacf6a6d2b962968be0e875eb55e9c905ff4478eed4ab1cdafb647af7c88a6f79282c5f43a8714543aed0247403274077d64c9493e6355334c33881ff26990f465f5748f3894ee0f70f52fb391505010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
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
      jobId: "grouparoo-job-119-1595636454214",
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
      "ef6f9b3010fd9ebf02b1afcdef90904ad19aa5748d94908d9054d334a1b363a85bc0149b4c5595ff7d369004966aeb37b87befddbb3bdb6f0d4dd39f69bcd3af351dd1e02523e9eba72786f42b952102029501b6ed654110f1ede3f3176bd7c9b2e0ae174c26058ae66c0e5112922667598a09bfdeac5b41cab20452c69a52b0d9ed8e9b5d636c0cfbc38131e87507059993d05fd0f859493c0a91f0eb76fb68a4153016840412ca5b9845a7787bdf6b27297b2258f076bd6e5b96e2edff54fe1c320c82b278b259172e324e528f444043e5e34cdfa19bba7e8b42d40a247a4f31018c59160be5ad90c12cf66990a5b9b8547a934119ce4d9f7e2b017d6d2dac99ab61166651ecc510912b6d07023cf19a10edce592db5b97db772965377beb2bdf5ecde5a4e5bb3d562b3b4d7dac3bde5589a0014929cab4db49bfccf963fb9a3bcda8e7041e3dc93abb21527325b0e72fece124f124a44bae2a48479a3ce10ba66678c7c34c2bed93790df2108996864401f75f07840063b44a0aa903b2bf810b3b83b04308cd1c80363049ec49b9e897df07cd40718f8466f8c905eb20fa75e7ea754905bca13c6693964fdc199bb96e73a1b7b3675ad6adf3e64a1b82d9cd7bbaeb523e480aa4eff35920b47494a993495af736ebb96339db9f36dc5863c5b0b12007e5dbfa8d3e543c8c9990da9dc9520e992edd462747bbab46ecfe4fca47c3b82b844fc3cf93cb723816aff792f17fbafd771e5c1aa8da2d84d11d5d7ae33b7bfea95e4e17d992d84d93b3afb32ac27725a8f72c2bca6d5f8fbeb57a352439797b5b4a77fdf58ce0fc5cd732ae3109fa424c6e7aa1f38ba8a58a43ff21849fcf1655014f9389c0c7021c3f21a617e2e8f53525c2a5a8cbe1434c6e6a0d73f0a4a622a2e1186393c222e5e07558b442416c76114af4431c943cd5256b193d3145c5e04bbdce2a17168",
      "fc0160078c1de4050000",
    ],
    [
      "ETag",
      "aoV2uggmsVhkBEd0uugF2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1595636454214"
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
      "000002ffc554d16e8230147de72b4cf72a99386473890fb8b969a2ce29be6c31a6c2457140b12d33c6f8ef6b0b2a2f2e2433d90bedbde7dc1e7adbd3bd56a9a0af20f6d063052d82e52605babb59027f979331b034e44c0c098919a0aa6403c74bc9ee6c57f463b37962d1addf9dc6bb41d25dd7b7ad56c662ee0a222c787b1189d80f20f498883f555cc9f30a8b7104724597846914cf55583dc37c972878e28c7bc3d72212114f21c369bf6fb7fb1d944387ea65110f733c574bfe4d428d332d17436bb218830f146217cebb4e285983cb7baabd0c4749083a23297581e522b230839794a409a684e822a51b4653371acd867567990db36e98477e485ccc0312cb92e9049d7e80138ec331d9ca1e232b3b049a8559cb8fbd407ee1148a2d12d0b72c0e3c74ca1daabf107b43c7320bdc7c36d30a95a55545abfc2084f93fa98b33596171c5cb69e7f7e44ae2382269cc4b4abff4dfec2b6e5cd8a1eca69f6da7732d59c685194aea3abd4167e2d883d14571f19d9d4dd0de7160234a84c918286b1935f3a1716fd5d0d1aa4f445a914ba7729a824abb583c59dd808b9c8f4306da41fb01220242591e050000",
    ],
    [
      "ETag",
      "EwhrZqqCsm/fHUnyMpHj2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
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
      jobId: "grouparoo-job-120-1595636454214",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffad945b6fda3014c7dff91456f6b2490512488054421d6ad32d13851642abee22701c27759bc4a9edb46215df7d76c225a86caba6bd25e7f23fbf736c9f971a00da034903ed18683e891e73cc96efeea9af1d290f1630529e677d1c5cd9b7cb9ff75fb9ffe526b7dbe3217feef7cb28526473986431ae739a3384f9f16cda8818cd33c828ad4bc1bad1d2eb86655b9d76c7b4cc966196c91cc7e190a40f4ae24e888c1f379b1b9046446914639811de4034d9da9b4fad66c6e83d468237f7eb366529defc4be593982228084dfbb369499173cce6388124561cbbf4c0ffb8afdf2030694432fa89200c11a2792a145b2983681a92286785b8547a9146692ea0b7bf1583367586cea9074ec7b391f77e011325b7f8002007f339c33c8f05389f8c2fc02293d5ef20c77c016e3e3b13475a180d498ce72458803e380183d119001b09f03dd7f53692e6a17be17ac028f88ada01e682a405a107fd1857b8a4773d56f7c0916e2594081412661d36efea1d68f474db0ffd2e0a7b6dcb0f75ecfb3dbf6bc1b6af23dbc466e063585510aa76990f539a1a2dd3b2fc966906d8ea06662f806db36bf7cca015dac8c756d869779181026dadb0daf6f3cc88c06784679493f5d8b59b89eb39736f321b9d0e3ca7da7b08e54ccf4afafdcef75a12724855da3f8de51551c6089550c501bb23cf990c4e3df7ba82216fdb1047102da78feabe8530e678970d194cb0c0ec8206ea70b4cbf1d4f5dcf16830dc291417e87213c965d8b72decaea7aa9ab7ccf68fba3c85d2aa303ba656f1ad8e0eaa5cc3383f20f3b4366bc69e46ed80dabfd09d0fc783ffc4d7b0ccdf20aebf7ed42af29a5c1f6b34ed6ae64c6e556ee1539e090e31c329da157cc3f35189a5fb2deb51c66f76954a91eb6a0bc08534cba78cf8ae3c62b87cd82429db2d052ddbb6747d23281399781dd1696f4bbeda57aa164e702a36c328f75639c9d51e525ec129d254b87c882377f4a980afad6abf00795f9c2c76060000",
    ],
    [
      "ETag",
      "w0OdQ9YyzjZsbJWu93OLsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1595636454214"
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
      "000002ff4d51d16e8230147de72b48f73a12412571890f7333d3c4398733d9b21853e1c270d0cbda32660cffbeb680fa427bceb9b7f79ec3c9b26df29db288dcd9649f263f25f0e34d02f2555f02106526853a0a6402c8adae0649135d3d7a7ce1fbe239eafbc12c627ff17bc53e56d578dc5489f00b72aaea4e0a291ca7904542e14f83ed96371aa339e817773b6e069a175a4d1e0ba3cd976fd3a769702de5181969b9592cee278b2969a5da9c5bf5adcd2a07dc0710030716c265a182e301423937ce05cd8b0c1c81250f41b443746323271ccb82724447518eebf51c77381afa7d7f301c78eea0abcf30a43245a65b366b725e40a2a4598095b64fdc261fdec0268d2e0b125f05741d91927e75b347ce54dddeb65687b6976193a304b1e2a8cc083016fa5e8f74693ca0762b7518929760e890aa1f364ba5e2629a09b06aeb1f9046bac51c020000",
    ],
    [
      "ETag",
      "9DOrbpMd36RHdnxfXwnYPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sat, 25 Jul 2020 00:23:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
