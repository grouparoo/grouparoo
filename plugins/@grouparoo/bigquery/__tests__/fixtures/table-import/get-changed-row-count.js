const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636335943836";

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
      "d3db7243400000d07fd9e7302ea1f48d885b524292522f3bca762be2b68b20d37f6fa6bfd19c7f3877906619a214f64d896af00ae65450d98cddb58a6ee2a273378d768d303e0cb66c1c73ebe6e5074ff03fbc75e94f7bfd1d8eb4481b4c398d6c5d41e1a638b2accfab1bc5b594d8451949d0b3b381bf28e6a25562a86aad928f4ad8374da18f49a854b5c3187617aecf2166dec8d5dc27ee3e30b3e4b29cf8d9e0cce0ab7ec17ebc04bb8581635b5fe2d3e01ccedb8deb4c15f10dd597d799136042b952176529b68eb4ca775dcf2fb71c337d8b041e87a7a9ac7104bfd9a7a7ff0bac009ada82200a8bc7765152d515f8ab0ffbb9458fff3a4a0922e0e7171d4feabb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:45 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1636335943836",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85536b6f9b3014fd2bc8fbda3c21e421456b94d09629211b9074d53421db18e696e0d4369daa2aff7d17d364a92ab59fb07dcfb9e7dc072fe88197299a20c2f3c78ac9e72ff782a00bc434cee1757bedf7b6f24e6ce2f1fdedcfe1371a2e96db7c3a0504af590aeff6056b295149cad46413b57329aa3d9642b42051abd7eab9b66bdb83b1638f6c17688a15d992970f40fea3f55e4d3a9da3743b17222f18de73d5a662777aef3cf53b7b29ee19d5aaf356b10322aaf3a1e6d74250acb928a79b08f42bc564c2769817e0e03f3125976f33b739deb573003f71ca30a5a22a75ed0a525051663cafa4c98a262fc8b83c3ba0c85b7af3d8a2a2a8766552e21dbbb052ac71a29ff7ccba0ad72bcb0faed6e16a16fbeb2089e637de6ad69eaf979b551059b7375ee8591a938219ae35b52ecd2d800be8a74c695e1af5b87eae955ffbe3bf1f4a4d0069c59a6032ecbab837ea8e494686341bd9039275192123321c609b74e9d8614e4a18069e11352c5c8a72d42743c7ed67493626e3c4b1492f21a9e326fd518fb8dd417fc01c820e17e8afe49a2db8da0bc59b0ea1dbd08fbd240e37c17c167ba6840c57855e34c6ea02ce3d6a2810401fd474a8a35c8052dd6e3f88bd70368ffdadd74c78c9724c9fa3479871860bc5008d25344f33b91229340c05b395b700b099d8f76350a1c9af1754f7bc7671d6f2133d8601d676b5f9a2280efde0dad83922b6b8a80ce4a93920c9a89029783efc061c6c689303fdd878e11d6a9e429631c94afaf92c016c029ffd67c7ad0728ec3da8280d77581caa6a0d2a59b340dcd47a620f1cbb870c58ea77b181e31e5b56e7a833b21d2bf56b41cdd6439d8d58a54e2008c2ec03d3aac33f1b39c3ad73040000",
    ],
    [
      "ETag",
      "VGI1VrYoUT9jWX7JcRDLVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:45 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636335943836"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93614fdb301086ff8bf735d5a8523216890fe928a35268214d05d28422635f32332797d94eabaaea7fdf39b082c6a4f025b93b3fa7dcbd7eb367bf542359cc1e55f5bb03b3fb5481bbf54106b6d3ced2abc5c6020b18385e110917dbfa3e5a27b7e2f22e9d6eafb2c5527faececf89b0e227d49cc57b562ad0d2b2f8c79e35bc066a13a8bbba29fa2c606ed7fae22acfe68bef94d7287dbe58a769324d67ec101c1b2577bce8f90fb43d1c02f6848f199460a011e067690d3e817073bfa6e575ab6164b133022cebe1fea032d8b5dc208ea8321a8fc6511885e1e9d749781646c46914dc296c085daf683ce6d0719de1969664e39008d3c7b470d93f375457b25fc487f3451e4dfaf9de025c08ec1a570c82a532d63d8bf7177c11e15f52f30f8274534a0f41153412cc10a5da824b69c0da41126dc1dbf6884d97cbf4bd2a8d34a8e430b8510380769b2370992e93ff494bfe7ad5ea22c967ef08ebc83547249f5fcf5679727de3b98717234c770eec8d41329505efa7f1c9e4ecf44b74f26cb16fe86d47df899de9206082d39f72a51c8b4bae2d1cfe00d926327287030000",
    ],
    [
      "ETag",
      "eDwmX6UAQcFWLBwHRNOl/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-2-1636335943836",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553794fa34014ff2a64f69fdd8d2db4147a24c66d2aba243d9452dd33edccf060472983cca031a6df7d1f603d62a2c9244ce6fd8e77f140ae451691116122b929a1b8ff7425193920a06982af9dbb13b74c8353df5908d30fec9c8daf7e8c0f0f11212a96a2db3c85969265c1418d56cb7652c832a785942d146a755b1dd7766ddb19f6ec81ed224d411a4f45768de47f5ae76a649a7beb7622659202cd856a73b97d7a376fbb665ec82be05a99af1d4d3451e6bb9e47a9e4540b991dae96e85f2a28d6b0a522c50c9e8911fbf65ab92de8b69d20f85670a09ccb32d3555628c165168ba42c6a55327a2075962f2e64e94dbd49684c16ab79687cfefac5182f8df5bad6304e82c5ccd814c06511a98d71f9dd0b3c63a334ba6f8c3fa565d9601ca14b044a8bacf608294ba1d27fec82ffb6f515816aaaa009aefb964b3b036bc862d6e7f1c076586c016303d677a8cd2c3eec412f624091a72bf59a453399f598c386ddc88e22db8981f66d1ac7a810b95dda0187320738b5fb2e25bb037257080dc742e55289a617e432f0436f1d06abf9641c7a7519312d537ddc245715f1324f8d4522e89dba7655544874aa1aebcf432f184f42ffc26b66398584f2fbe50d4e33a6a90244d3826e4143319311368d9c2d967ee82fe6e32932ea019ded118a8c7e3f3c13c2fbbceeb2aebf24f467de321ccfceea1cf6a00b9a9635eab6b990ceb06fb5ac0e9ed0b246f5695b96f58bec767f91881bd9e892f39517fc24cd5300311490f18fa78ae03af0d17fb5df7284e29ea30b6e9416b8425c551ebc806695c4b64e7acf76bb769fd4e042bf89d9aeb5ef59a55129c21632fd5850b3e558676356aa2710067103e6fefc14a3ff01a01e6e1563040000",
    ],
    [
      "ETag",
      "1wF6ulRGI5Oi/IR3pbAjXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636335943836"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c2301486ffcbf19625e01494840b318b1009910917c610d275671fb8edccf60cb22cfbef9e0e6ffaf1f669df27ede027af62984394a7bf0d9af62e45deb94588b629d8ca545365114680ac52218330a8c3f7d925df8d5751769d65f835d95f170b21acceb05430ef20c9b1882dccbf3ba8548972ed74d2d4542c14b7b50bd6db7df01684129414bb607bd86c5e969b00fa633f823345212668b0d2e85eac0d9d51f3dac95a55d6057a961aa3d1c2000f07a9a1a65686c893c4bbf726537feafb8fcf0ffe933f15ae20ad38a74ad0c327480b13ab22a4aba8c24400332cc53a19c68b8bc74ee8f8cf2e5b46fb61487a2dbacaf1adfe959c128b2a9b0647a095fcc52ae7dbbeff0356f0881868010000",
    ],
    [
      "ETag",
      "EREpRK7viQ0Hbhw7heY1Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-3-1636335943836",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85535d4fdb3014fd2b91f738da1452daa45235aa12a0529b429a82a6698a1ce72633a471b09d3284fadf77e3d00e84044fb17dcfb9e7dc8fbc90075ea66444129e3fd6209fbfdd8b841c11d034c7d7ab69f9f7d2f6b7cb9efceedcac27bded437d7d331e2382372c453755011d256ac9408dd6ab6e2e455d5129440713759ccef1c01938cea9d7775c678034054536e7e50392ff685da9916defa5bbb9107901b4e2aacbc4e6f06e6f4fec4a8a7b605ad9ef156d1451f6a79a3f0ac1a8e6a21caf57a85f2b90316c282fd0c17f629a9cbdcfdce574d3cd11bce50c2863a22e75e30a533051663cafa5c94a462fc4b87c73202b7fee4f238b89a2de947149377064a554d3583f57605d84cb85350b2e96e16212cd9641bc9a5ef98b4977ba9caf17c1cababbf243dfd23429c070adb175666e015e503f05a57969d4a3e6b9517eedcfece3501a024a2b6883f1b037a0c76ecf4bb264c832d7394db21e24899b0c4fa993f498d7877e9a00459e11352c5a8a7298f599eb1d277106c32cee7b9e132783de497c02347332c7f3bccc21bb23f224b98673ae2aa178db217217ce223f8ec275309d44be2921a375a1cf5b634d016f3d6a2c10419fd4b46ba25ca052d3ee5910f9e1641acd6efd76c273c8297b5e3de28c335a28403495d83c0d7221526c1809260bff1cc16662d7fba022a35f2fa4e979e3e24dcb0ff40807d8d8d5e64b5651380b2e8d9d3de29616b5816cdb0391c0844cd1f3ee37e27043db1ce466ed873f49fb144206124af6f52c116c025ffd67fbad4728ee3daa288d775c1ca61a0d26a15d206e6a3db00743d721062cf58798eb0ef62d6b7234196103a57e2da8dd7aacb315abd50184419c7d605ab5fb071678cfd673040000",
    ],
    [
      "ETag",
      "HCnxG/EvO0r+3QUA0vkuPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636335943836"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93514fdb3010c7bf8bf79a4a5429198bc4433b0a8b94b6d086a70945c6be0483e30bb6535455fdee3b07d62198145e92bbf3ef94bbbfffd9b32765244bd9bdaa9f3bb0bb6f35f89b10acc175da3b7ab5681cb08881e73591f5035f5c35feb9ee76f3ea069ec617d9a57c393f27c2890768384bf7ac52a0a563e9ef3d33bc016a13a8bbc6947d1631bf6b437153acb3e515e50dca902f6ff37c3acbe7ec101d1b25f7bcecf92fb4dd1d22f688f76ba8c082111066692d3e82f05958d3f1a6d53072d859018ef5707f505bec5a6e11475419c5a3711227717cfa63129fc509711a05f70a0da1b71b1a8f79f45caff1859664e39808dbc7b470d53fb75457b25f2484d9b24826fd7cef012e0476c6978360a5acf3afe2fd05df44f8486afe45906e4ae921a80623c10e51aa2db994169c1b24d195bc6d8fd86cb5ca3fab62a4452587c1ad1a00b4df1e81cb7c35fd9fb4e4af7f5a5d4c8bf927c27972cd1129b2c57c534c17d781bb7b33c26ce7c15d5b245339087e1a9f4cce4ebf2727af16fb89c176f49dd4db0e222638fd29bf946769c5b583c31fe564d86b87030000",
    ],
    [
      "ETag",
      "ghaMGmtqguyEfQek1DIFdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-4-1636335943836",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffa5546b4fdb3014fd2b91f7659b689b92575309b1aa8411a90f4852d05e6a1dc70986342eb6c38450fffb6e1cca4308f830c952ac7bcf39f7e9dca36b566568885256dcd454dc7dbae229da4354e102ac272a72f1597c298e6d4926eaa89a4cb27274700008d6b0245e6f4ada91bc1684cae122ee1682d71b2c38ef8050c7eef45dcbb52cc7b7ad81e5024dd2329fb0ea1ac8974a6de4b0d7db85ee169c1725c51b26bb84af1fedbddbfdde46f02b4a94ecbd8cd88320b2f76eccc39213ac18af0e1631c4af25154bbac6ac840c9e8859faeda57297e175b700f02d231413c2eb4a35598104e155ce8a5a685534bc473acb6717140793609c18e3f96296189fbf7e3146b1b15c6a0de3389a4f8d95a0848b4cae8c8b93200a8c9554107d65fcae4dd3a2c6a1319a1d19c68a656f9b887108b964542a56e94c129c96b4c9e2a157e1eb013504acb0a4ad73e9992eee0f4c3fcd538fe403cb497393a6e920f51c6ca526f16d6a6729c5c0538dba66e18a57596e3b03cfb7339710c7ce890f86dc37f37d27ef63d3ec678e4b7dcff3d0760ffd154cd12326375cb2b663e8220a936099448bd9789404ba8c1cd7a53a6a936b8a789ea7822201f44e5ddbc6cb38446ada1fce92201a8d93f03c68273ea1052677f10dcc3cc7a5a480c602afa9a262ca33681a3a9dc76112ce67a30930f4184f77088986bfee9f08c9dd467759e92f4ac2691027a3e9a9ce61073ac765ad51b7ed05f57dcfec987d3889690ef5e99aa6f9136db77b6f8b4321aefdbeb0fddf0a30a4ed1f40c0db69c9e86c11443f506b8a684e05adc8c79b0560edf8e80fb07b8f008517095160f715833526b28941046dd799ad75e3766ccf712da4c142bdf2b9037b37b746a351a46b5aa98782daf7d8744abb6af90802276ce12c9c7d07ef3f74ba2e480d050000",
    ],
    [
      "ETag",
      "HtR6aQShrF4scLtDnLLdlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636335943836"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff2d905d4fc2301486ffcbf19645c7703a122ec44c2559884e494c0c21a59ccde1d633da330c21fbef9e0e6ffaf1f669df273dc34f657630856d551e3ab4a7ab12f9cd2f72745dcd4ea6968c431801b22a854cefc64ff6b0e5242fc2d5676292da1dafcbd94c08a7bfb151303d435161bd7330fd3a83510dcab5cd46536758283eb53e582c3fd2e73497a0a19d0f96ab2c7b986729f4eb7e047bdae658a045a3d1bfd85adaa3e6859775aa696b0c1c7556a383011e0e4a4b5dab2c5120493009c2388aa3e8369944f7512c5c4d5a714546d0d53b480b13ab3aa75f518550003b2cc5ba18c6a3c463efb3fe47e72746f76a496a1dfac69b4bfb2379231653b61d8e402bf98a978a2ffbfe0f3874ce8c67010000",
    ],
    [
      "ETag",
      "E72Frqbt9Rf1UX9n9lsv/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "edd3417282300040d1bb64ad0e4651d39da402224c285810370c424c112129898a38bd7b9d5ea3bef5dffe07c8f29c4a992a5ed106bc817b06d1281f6dc4c23019b30de195f7ae8763ddeeeb247947aa4e179ab3279bed382a39f4b590284d86c1854dea5bbcd43c2b5ce6c670b1bf38cf4e9de791db91b80dae49d12fdd829b564da3949a53acdc55c3f21b6e25fb6a92f05b2087a9ed29ecaa537cdba868d65b762ce8358842d7f7c58aee6672ad67a7c3c7cebf92630ccda6e095449cb96d3e712a42a827fb830e31ae7636e6d3717cfef4e01113ccd1705d177338b7462f2fff171800da89b2a5322d9fb74f748406e06ffd54dd057dfe6fd0aca52df8f905e58c37ec19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1636335943836",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85536b4fdb3014fd2b91f795be481f69a56a542540a536ddd21486a629b29d9bcc90c6c576601dea7fdf8d433b10127c8aed7bce3de73ef24cee4591901161227b2841edbedc49464e08189ae1eb6d77f0f7565e664fbb8ebafae3ad67ec07a493f11811a26269bad9e6d0d0b2541cf468bd6a664a965baaa46c60a246afd1e9bb7dd7ed0dbbaee7f691a6214fe7a2b847f26f63b67ad46a1da49b9994590e742b7493cbcdf1bdf578dada2a7907dce8d65bc5168ae8d6879a5f73c9a911b218af57a85f6a50316ca8c8d1c17f62c2cede666e0aba6966087e141c28e7b22c4ce50a537059a4222b95cd4a46cfc4ba7c75202b7fee4f2387cbbcdc1471413770e224d4d0d8ecb6e05c84cb85330b2e96e16212cd9641bc9a5ef98b4973ba9caf17c1cab9b9f243df3194e560b9ced839b3b7002fa89f8036a2b0ea51f55c29bff467f67e281501a535d4c178d0eed38ed71eb2940d78eab93d96b681318f0d7ad4656d3eec423761409167452d8b16b2f006aec75cd68961d871e3ae0bddd84b7827a6940ddb5eb7477bed84ec4fc8931206ce85de4a2dea0e919b7016f97114ae83e924f26d09292d73735e1bab0a78edd1608108faa0a67d15151295aa76cf82c80f27d36876edd7139e4346f96ef580334e69ae01d15461f30ca8854cb06124982cfc7304db897d3b043519fd7c2655cf2b17af5a7ea44738c0caaeb15fb28ac2597069ed1c10d7342f2de4b13e10055caa043def7f210e37b4ce41beaffdf096d44f21a4a0a0e09fcf12c136f0d97f76d87a84e2dea38a3678c7c5e1bad2e00aea0512b6d623db3bed0d88052bf32ee60efa87965539aa8cb081c2bc14546f3dd6598b95fa08c220ce3eb0addaff03e5eef30473040000",
    ],
    [
      "ETag",
      "Y47zYoGgwy1rHx8UIbXefA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636335943836"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "f7",
      "71a944953640243eb45b37328516da549a985064ec4b66e6d8c6765a5555ff3be7001d1a93c297e4eefc9c72f7facd9efc118a9394dc8bfab105bbfb5483bf09c1125c2bbdc397d1ca018908785a2359989ff2f25c3d9ec2e7f5ed7cebe30c763fb617174838f61b1a4ad23da90448ee48fa6b4f146d00db98966da3ca2e8b88df99505c15cb6cfe1df346f390cfd7793e99e63372888e8d9c7a5a76fc07daee0e1179d0f74ba8c08262106631563f00f35958d3d1c6481838dd5a068e747077505bdd1a6ab51e6065301e0c933889e3f1f9283e8b13e4a466d40bad105daf703ce2b5a772a9b7b82419c648d82ec685abeeb9c1bae0dd2221cce64532eae67b0b50c674ab7cd90b56c23aff2cde2bf822c2bfa4a41f04f1a684ec836a501c6c1f254c4939b7e05c2fa95d498d3962d3c5227faf8ae2560bde0f6e440f20fde6087ccb1793ff498bfefaabd5d749317b47388fae39224576355b1593abebc0ddbd1861baf3e0aead465339087e1a9e8ccec6a7c9c9b3c5bee8603bfc4eea6d0b116114ff944be1495a51e9e0f004e7413ba687030000",
    ],
    [
      "ETag",
      "TpXlH9nq7e+UZNwt3IeyJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        query: "SELECT COUNT (*) AS __count FROM `records`",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1636335943836",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "ed",
      "4f",
      "9b",
      "40",
      "18",
      "ff",
      "57",
      "9a",
      "db976db1859602a589d99aca16924a1da53af7a5de1d0fec14b87a77688cf17fdf03ad9dc644bfc1fdde9eb7477223ea8c4c0913c56d03eae1d3b564e48880a105bee6b44e2ab02e299c5f2c223ffea37e5bf7c5f1313244abd2b4da96d0d7b2511cf474bd1a144a365baaa4eca351dfeb0f3dc7731c37183b13c7439986325f88fa06c57f8dd9eaa9653d470f0a298b12e856e80197d5e1ddba1b595b25af811b6dbd4eb430445bef667e2b25a746c8fa78bdc2fc4683da4045458915fc1766ecfb6be781a0d5a040f29de04039974d6ddaaad082cb3a1745a33a57327d245d952f3ec82a5c84f3b4375faee3b4f7f9eb97de6cd5db6c3a8fde8f6479dabb52c0a5caf415da65a08da83bb394b2125aa37dbbd1db19b7026aa8861db8f16d8f0e2776c072e6f37ce2b82cb781b109f35dea309b076318670c28ea4cebdea9682deb8c0d7ddfcf5c709d3c1b4130b6b9eba3954b191dfaa38cbba380b1a1479e8ec8bd12064e84de4a2d764d938b244ac34d9aace3f92c0dbb3672da94e664575cdbc4cb3a0d3689a477fa7a6a512131a99d6014a761329ba7d179b85bda020aca1f56b7b8b69c961a904d15adc0803a95190e8d9c2d57511a2de3d9a2f5c24b481fb6edfbaf75985cee9f12c84141cd3f1e32923be0a37b7ebe2ea4e27d618a36f88f1be5bacde00a769b15555bcb411dd89e4b3ab2326fb061602376b8aad6112aa8cdbea1dd7591a77d58a30f240471217114ff44f41f36d0ff3edb030000",
    ],
    [
      "ETag",
      "fanRme/YaeVWLI7NZrX/wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636335943836"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "905d6bc2301486ffcbd9ad854a5ddd042f74c894896837411822313d76edda9c2e397188f8df775277938f374ff23ee40adfa5c96104c7b2f8f1682f0f05f2262c3274be6627534bc621f4005915420e7943d5396f8c1f4cde4c33a761bc5b4fc663219cfec246c1e80aa712ebdcc1e8f30a463528d70e074ddeb0507c6943b0587dcc5e6799040de521586d97cbc9743983dbfed6838a8e199ed0a2d1185e6c2d55a87911649d6ada1a2347de6a74d0c1dd4161c9b7ca1245924469d44f9334491e9f07c953920a5793565c921174fb0ed2c2c4aacee85754a12f80ed96627deac67388e320b4ff67a71746b7b624bd0e43657caf7fa1a0c4a2cad6630fb492bf98977cdfdffe000707d6da68010000",
    ],
    [
      "ETag",
      "7tQojvdmnu4AKnmHo70XPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:45:49 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
