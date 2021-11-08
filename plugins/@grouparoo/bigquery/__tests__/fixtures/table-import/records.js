const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636336091579";

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
      "0002ffedd34b7282300000d0bb642d0e49d44077322582220802a21b06210454a805e4e7f4ee757a8dfaeef09e208a6356d761f3756525f8004384e4693cdddc2585f2cb5ad5487046303fda9b5d864969a35c7e549e19a70be8ccf6cbbe278d384bd2cc84e60da22d39f6c476c921100f6dcf43d7ee96cc2d76863d688a20345cefe5523f25b24229cd851ac1796915ced6f05ba5330d4f6abb453da24cff1461508cc299a1151c703e68145b2489228b5750eff01a3b28b8e97b3fb16c8256ea01b30d571d6d169c3995ae953a66739e3e4eb5a85ddad8bd10eaef54ef9bfbd3b7b7ff0b4c00ebef79c5ea307f6dc773599e80bffa6133dcd9ebbfc2a28a55e0e717c431b0ff19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:13 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553616fda3010fd2b91f7b54028011224b4229aae4810b624b4eaa62972cc25731be23476a8aa8affbeb35350ab4aeda7d8bef7eeddbdbbbc90075e6ec984a43c7f6ca07efe762f52724640d11c5ff3abea3e9a8fbcc760236d35fcfdb4bf832c9f4e11c1354bd25d5540478aa66620279ba89bd7a2a9682d44071375fa9dfe68301a0c46b6d71f8e3da44928b2252f1f90fc4fa94a4e7abda3743717222f80565c7699d89dde7bfbf35e558b7b604af6de2bf65044f63ed5fc5e08461517e57413a17e23a14e604779a1db3b11b7e9c5fbcc5d4e77dd1cc17bce8032269a52e9aa30051365c6f3a63659c9e485982adf1c48e42ffd796c315134bb3229e90eceac2d553451cf155857e17a652d82ab75b89ac58b759044f36b7f35ebced7cbcd2a88acdb6b3ff42d45d3020cd79a5a17e616e005f5b720152f8d7aac9fb5f2ab3f8b8f43d1049496d00693b13da27dd7f6d22c1db3cc1d0cd3cc863475d3f1900e529b790e38db1428f28ca861d152944e7fc46c70bc24f586347186e74ee282eb2403c846e00d6d2705971ccec853cd155c725909c95b87c86db888fd240e37c17c16fba6858c3685ba6c0bd30dbcad51618308faa4a7838e72814adaee4510fbe16c1e2f6efc76c24bc8297b8e1e71c6192d24209ad6689e827a25b6681809662bff12c166623f8f4149267f5e88f65c57f1c6f2133dc601ea7295f992280e17c10f53ce1171438bc640f6ed81d4c044bdc59a0f7f11871bdae620bf367e7847daa71032a8a1645fcf12c126f0d57f76dc7a84e2dea38a5478c7c561526bb01ada05e2a6d7137b303eb78901d7ea43ccedbb47cb740e9d117650aad786daadc73e5bb1469e4018c4d907c6aac37f6927115273040000",
    ],
    [
      "ETag",
      "gFpjSC69qNUs0t5ZwvYefg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "10c7bf8bf74aa4a0347445ea03d9b22d1b4db2843c4c55855cfba0ee8c8fd9862a8af2dd77d0369dd64af405eecebf13777fff39b0dfca4816b35b55fe69c0ee3f94e07f76c1065ca3bda3578dc6010b18785e1299fcfa0e42f866d7dea9690432fbb16eb70f9797443871071567f181150ab4742cbe3e30c32ba03681baa94cde6701f3fbba2b6eb3cd62f995f20a65972f77699accd2393b06a746c93dcf7bfe1d6d37c780dde3ed060ab0600474b3d416ef41f845b7a6e355ad61e4b0b1021cebe1fea0b4d8d4dc228ea8320a476134892693687c114ecf2f88d328b8576808dd6d693ce6d173bdc1075a928513226c1fd3c245ff6ca9ae64bf48172e965974d6cff72fc085c0c6f87c102c9475fe51bc67f04984ff49cddf09d24d293d04956024d8214ad53997d282738324ba9cd7f5099bad56e96b558cb4a8e430d8aa0140fbf6047c4957c95bd292bf5eb4fa9c64f35784f3e49a13922daee6db2cb95a77dccd9311667b0f6e6d914ce5a0f353383efb383d8fc68f16fb849dede83bb1b70d044c70fa53be29cfe2826b07c7bf321d676387030000",
    ],
    [
      "ETag",
      "AYJecctuUvhi56edTKPvSw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53db6e9b4010fd15445f7af1051bb0b1a5a8751ddc22f992026e95bed8cb32904d807576975851947fef2c76dc449192b7d5cc3973ce5cf6c1bc61556a8ecd84e5b73588fb0fd73c315b26289263b4fe4b175e145ec4a0e8faf2a78ce81abeeccfce10c1344b927257405bf25a5090e375d4c905af774470dec642ed7ebb37b007b63db0463d7738429a84229bb3ea06c9574aede4b8db7d92eee49ce705901d931dcacb53bc7bd7efee04bf06aa64f7a562174564f74dcdaf05a744315e9dad23d4af25880d948415e8e03f314dbebdacdc61a4ece408be631408a5bcae9476852528af3296d7a2a96a8e1fccc6e5b38719f9737f1a1b9f5b463499f99be9248a3f6ea54281ad41a411c561b0fcf1493fb79bcdd5bedc1ab370b530b6022817a9dc1aabf0dc0f8def97c6136b124d5bc696a5cdcb98078b20367a9665ac66b3c88f0d0b6da52015ab1a5331490ad0868e630b5eef4a138822120ec9cdd01a909e678d922c19d2ccb3dd24b32049bc64e8123bb1e8c801274d80204fe9ea0d8b54bc4a3dc7190cfb960ba9ed0d6dcf1d592e253481c4eb3b40201bf5b28165f7cdc796b9174cc139933b2ed96178e69f3088fd4d1cae97d349ec376d64a42ed4f9c19c6ee2b94f854d22e88dbe1e75967154d29b0896b11f4ea671f0db3f2c7f0e39a1f7d12dae3f2385044413414a5020163cc5a19917ab288883d57232d7b5f0a2e2fb9d8eff5afbe1e531144206022afafe9011dc24defb174f578a50bc5354c1c52b861ba5526b500187cdb2527b39b11dc773cc062cd4ab9cebe9caa7ebd415a1844a1d1b3a5ca9f97814abe50984495cc8128f14b3ff005639699923040000",
    ],
    [
      "ETag",
      "uZcM8SRPTetcUYHsScUe+w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f",
      "e2",
      "38",
      "10",
      "c7",
      "bf",
      "ca29f7f24a64e7d9482b1db46cb77b94ee51563ae9b4422631c134c49c63ba5755fdee370e6d1e163717f605c5339e51fdfb8f3d36cfd603cf136b68ad78facf81c9a75f53a6fed483392b0e992ae06b2ff2825917165334854831def1bfb65b9f62ba4288ced7b7fe2c4d3f7c808822deb01db586cfd69ab32c29ace1dfcf564e770cd2780201ea69afc737b3c5e47a3207c74e24da31fb3a9d8ec6d389f5725125d03816875c2dcf4e5c7359a865695489f78bf9cdecba3b2fa33f9506c43c3b2f256579c2e479397cbfa4492259519c99278a25ddefeba4f1dddd74329afd8ff87922054f7e22f3919f9b91a9c73ae3e3f46eb4e88e4fa86a94e86ab49874c7178aee1a6b5adcdc4eee17a3db2fdd59cbe5e6fbae8fd4df5e2eacad58cdd99a4996c74c6fffbd145b16ab1b7db20af8ef191b14e22063a68b07c1e5442ac5614fa51003f00c9c010edcc0750344b01f1288cb444c151739847ebd87a5594a289acdc577385716461021cb319cb175f9f751fb4b86f6682239ab8ccf4c3e0a5e5436db1e1de877f66fb9523b16bb6af69666752af66dc70b6d37b243a7722a79a823d6342b9879caf1898deb34073968809c016a2cd8f623e4fb04136f420c81bf606788dd21f67e43a894bdc9ed18b82f69ccb306fa446f9c372366606123f44738d25973e5ae8dbdc0f6b0ed3496dbc1da9e229eed06a73c4e1b3cf000ddf34de44e456efb0899e85d03fdb5648a650d531c62113f548e347df538bd44c0d88ea08218d9d8f5ceae7e1044b67b4ae6b635085d4c40832034a9e036540842930a9e4185d18e2a5aef08a158b11632a93c347e73b97d64c0c4b5099c02049fc08cfabee18180e814cc6b8b10e1c82d45",
      "884c2a782d1522f376f0ebbc6a34e5b2d6e1b3d8e48582d6f2e6c8b6af1eaf8f0afa40047ab136217daadf9e8a1c9d7e8ae6b77520c80b8f3a1093107e5b08621422300871c5725e19f731cd78ad4b5294b6df6b2b401fc42e86d600fdf0fc13e184b093a253aee00715087ea71f069dfd3034907f62595ab3fe91b1c635b079d066d0073cd2d7406403bd1f99d93a8e000aed46a12b98b0458d5118fa66eab0933a32505f33a91a97c0e561c595aabb605cda61af8ac3c6757c1faaae8fff3b45ee287904378867808fdaf0f00e2066f8a8139e18e0a7079931569ff3313c195856df0ad9eae8887add017ab7c3350e1278ae19b14b8b00e46b5c1d151569e33b3e72cdf8a4131fd7adb55edc95906af3549937ada697706d923ee89edef3d80e3ce85c6e9f5ab7a71c826cfff4fe6b2cb94487d75f6844c7e847f46fafcfc1f1135c5f5fa480a765c1f4ab121d5f98974223c17b67a8977561c5147e9b7de2ea68bffc072cf6e45af80d0000",
    ],
    [
      "ETag",
      "oBmiXjj5a1ab00aRfM5Ngg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000002ffedd34b7282300000d0bb642d0e8844d29d88808a0a6304e986811024a12208f2ebf4ee757a8dfaeef0be414408adebb0b9e7b4001f608866684aa6bb52d58c6be658aae6c2952d62167f31a2c442efcc969c0752e208b976ef783d9754529e1abd228985bdb269cdfd2680fd2e91f31ef9ba5999c1c2bd64fe5a2eb690431987d0e95c57f14c71ec18dedb25efefc878ae4c1d9235be1416ab232809071c9e0d010d4f2ec6f4b93383391c20eb2ea94547230fb96ae35bec202f929bb45af8b7b64ad7dbcd6939daac09da4fed902cb1db725dbbceabde3b667438cadbf3f4ededff021340fb923d681db2d77659416802feea87cd50d2d77f8d460ffa003fbfc1a31c3719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:15 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff85535d6fda3014fd2b91f75a08348400125a11a42d13843584b6db34458e7393ba0d711a3bdd50c57fdf8d5358ab4aed536cdf73ee39f723cfe481e731199188a78f1594bb2ff722222704144df135ab6e27ceec62f7f75bb5a9923b93fdcc6ed3abf11811bc6649ba2d32684951950ce468b36ea7a5a80a5a0ad1c2442dabd5ed5b7dcbea77865ddb19224d42962c78fe80e43ba50a3932cd83743b1522cd80165cb699d81edfcda753b328c53d3025cdb78a268a48f343cdaf99605471918f376bd4af2494216c29cfd0c17f621c9dbdcddce674db4e11fcc41950c64495abda15a660224f785a953a2b193d13edf2d581acdd853b0d0c26b26a9b8739ddc28911534543b52bc038f7574b63ee9daffce52498afbc703dbd749793f674b5d82cbdb57173e9faaea1689481e61a63e34cdf3cbca07e0c52f15cab07f573adfcd29ff9fba1d4049496d00443a7d3a7dd4167182591c3928165474907a268103936b5a20e1bf6a017474091a745358be622071846b6dd8d43d63b85b0672756384cac24b4a3bed303ab033138647f42fe945cc18ccb4248de7488dcf8f3c00d037fe34d2781ab4b486895a95963ac2ee0b547850522e8839af675940b54aadb3df702d79f4c83f9b5db4c78012965bbf523ce38a1990444d3129ba7a05c8a181b46bcc9d29d21584fecfb2128c9e8d733a97b5ebb78d5f2233dc001d67695fe9275e0cfbd0b6de780b8a659a5214fcd8194c04419a3e7fd6fc4e1863639c8d5c6f57f90e6c987044ac8d9e7b344b00e7cf69f1db61ea1b8f7a82215de717198ac355809cd02715deb916d779d2ed1e052bd8b9d0e3a8796d539ea8cb0855cbd14d46c3dd6d98855f208c220ceded3addaff03280decf873040000",
    ],
    [
      "ETag",
      "luXA7DGyxJuUufh/cZlXgQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93616fd3301086ff8bf99a8a86ace91a691f52e82052da8e364548688a5cfb123c9cd8d84e51a9fadf3967a32086947d49eececf2977afdf9cc837d1729290bda8bf77608eaf6a701f7db001db4967f1a5556b8104041cad919ced96ab7578fb3a9dea68ff6692cd7e7efe745ddfdc2061d9576828494ea41220b925c99713696903d8c694ec9ab6ecb380b8a3f6c56db1c956ef316f14f7f96a97e7e93c5f90737069e4d4d1b2e75fd0767f0ec883da6fa002032d033f8b36ea0198cbfc9a96365ac2c8aace30b0a487fb83daa84e53a3d4082ba36814c6511c45f178164ea633e4a462d409d522badbe278c42947e546fdc02549182161fa1817aefae701eb82f78bf8305b15f1553fdfdf00654c75ad2b07c14a18eb1ec5fb0d3e89f02f29e90b41bc292187a01a5a0e668812baa49c1bb0769054b6a45a5fb0f97a9d3f57a5e546093e0c1ec40020dde102dce6ebf47fd2a2bffe68f52e2d16cf08ebd03517a4c8968b6d912eef3c77ff6484f9d181bd330a4d65c1fb291c5f5d4fa6f1f8d1626f95b71d7e2771a68380308a7fca07e148525169e1fc0bfb9c7b5087030000",
    ],
    [
      "ETag",
      "9UMNO1F/A7p3b25I9zXV8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-4-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f7658f3e9c267da452c5b21246a43e204961b04dade3389d21894bec1421d4ffbe9b8416d824f864cbf79c7bcebdbef711ddf22c424314f2f55dc1f2870f3722440dc41459c3eb971fa73cb16fd8c69df1ebada297172eb93b1f8d00c14b9624e926614d298a9c32395cf8ad752e8a0dc9856842a2a6d9d47b46cf307ad8d2bb7d0b689225f18467b740fea3d4460edbedbd746b2dc43a6164c3658b8af4f0dede76da9b5cdc30aa64fbb5621b4464fb4dcda34450a2b8c8460b1ff40bc9f2254b094fc0c133310abfbecedce2246dad01bce594114a4591a9d215a4a0228bf9bac8abac68f8882a972f2ec87726ce38d03e3734df3e719663db0f3eaea402819546a4e6079e3bfbfea9bcae96cb3ff7e94a3bf1e6536d95332af248aeb4cb53c773b43de55781b1c146da9136f78e1d4ffb767508d9feb8a1ad7854ddb4893b75034dc7589b9f9cf84ea061b01b31a97856990d4898b0d2e8533bddffffb024104524ab83cb3eee117d80ad300efb341e18dd30c62c0c0761bf4b8c1053cb64661432023c5566af58241319893a0342c3d834e24ed837bbbd3e23bdd0185866d7d44d16515d376937b6d0ae81ee73aed831971b2179dd5474e9b981b30cbcc56c6c074e55464c8a441dd7e6ca225efa54502480dea86b5746b900a5f287dc59e078f638702f9c7a28266c4de8837f07631193443240939ca44cb17c2a22681a3a9bfb6ee0ce67f60418d54f9fed11120d7f3e3e1382874dd565559d2870a78e1fd8d3b3cac31e744192a2426deb0beae00e6ee24e13f703bd33d48da16eb630c6d768b7fb0d4418ed3a2f3a5f38de15aa9f3c16b39c65f4fd5f057015786f41f7eb02505818508149531c4688ca5283e6ac1e259e965e0eecaed5d75105ced5bfb19edeb1f63d2b73941959ca32f55450bd2e50672d56c8030882300133d81688fe05ed5d0940ac040000",
    ],
    [
      "ETag",
      "+XHilAjepINiZvtcWVIaqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "9d956f6fda3010c6bfca94bd2c4476fe40825469d0d2168d420bf4d55421931ce0d6c4a9edb44555bffb2ee91460cd18f40df839df23ee77679b37eb9127b1d5b2667cf194815a7f5f80b9cd1723d099301abf529968b06a1618b6c0cc5ea84fe4edd3e5cbab593e9d409a0cc9f9b87d7a8a193a5ac28a59ad376bce41c4da6afd7ab312b602b4f11813cc3acdd7bdc1a47bd91d616025e33c30b8ebf7db9d7ed77aaf95061645324bccf468e39c2b6da685288de3c9a837b8dcef13ec4b3624e6e238cb029218d4711e9e4e591c2bd0fa489fd45396a61b536738ec77db83ff343f8995e4f1179ccffc588730cf1bc7457fd89eeccf8f99d91ad1797bd2dd9faf0d5b6dd534e95d77c793f6f5cd7ed774ba7c591dd2eafbf79af52067239883822482fcf8a74a3e40647af9cdd2f8eb02ea5a662a827c78985c6c2c94cc52a6a4ac63a4eed569c36db86e8384d46f86982764c40c9709a6de8db134cb48c3c448bee0bdb23c4c50c512afd8bcf87cc670b340c8574eb9ba02b160a5fa2980eb522d1f73d9f801af4595762457e5de059e6c01a50c7cdbf1023bb0a91f9441a332384078a469137f531b71489d3875b22997da7e4049b3e9875e37ac48fc469d16755bd43b21a4e8f9367550417d09caf04d0567d98c1b53ca4554e8e621e0d4716dc7f76dea12ec40199e33a1e11f6a073ef0a8ed55c007bbf038feb01a3ed80b1f56c0f7332500925277f0a88010a516b38f407008bfe3529c7968630b3cb71a715f2f1ad83ed7fb4c15eee23b3e71abf1c3bdf894948e4d71e75299e5ba943d6de4a61931cf657808ba979f796a373c1ba773c8ac77b79c90d8befb8968abe4021d2f7db3129d92bfd1efffbc029db5017da324be281af2c7847c3c2c673247c2f7b1959755b322867fc957dc7ce8f7df3505febdef070000",
    ],
    [
      "ETag",
      "I9s+oQqGwxthq+epnO0DSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "000000000002ffedd34b7282300000d0bb64ad8e411892ee0a16b5503e0a15dc6430460815a4900869a777afd36bd47787f70d724a59df1371fd600d78022ad7f08ccedc16594e51bec44371d622e1ecea5572bc4c8d90c0ac4e83c41c295a3aebb0b81d7555e0285c3f07e6c557e70a8da896571bb9967ec8ac92538ad22e3363c99124b73ca8e6eff6cef3330461447439b5a81b06a119d14a9eb6fe32b6fab2b46363f5a65d8c4f29e6eda91903e1e983a66c68f23c25e2bcf65e6b746c5c35247cb5d82b1885bcbf0992c38d27a1dbe3832dfc7d1e6f357fa3e36535c872d3d809fe72660f0fff17980036b6bc633de1f7ed0b03e309f8ab4f846ad9fdbfc5f28e75e0e7177ccff5ca19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:16 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91",
      "f7b802a140084868a5345d91206c21944dd31439ce4d661a626a3bdd58c57fdf8d5358ab4aed536cdf73ee39f7238fe48e170919929867f725c8fd878d88c919014d337cdd646cb3becce29bde9f6f1fefd4faefe4b2bdcf462344f08aa5e87697434389523250c3d5b2994951eea814a281891abd46dbe9389d8e630fdabdfe00690af274c68b3b24ffd27aa786add651ba990991e540775c3599d89ede5b0fe7ad9d141b605ab55e2ab65044b5ded4fc940b463517c568b544fd52818c604b798e0efe1393f8e265e626a7db6686e007ce803226ca4257ae30051345cab3529aac64f8488ccb6707b2f466de24b498c8cb6d1115740b675642358df47e07d675b0985b53ff7a11ccc7e174e147cbc98d371f37278bd96aee2fadf58d177896a6710e866b8dac0b73f3f182fa0928cd0ba31e56cf95f2537fa6af875211505a411d8cfab643dbae3d88d3b8cf52b7d38b531be2d88dfb3dda896d36e84237898122cf881a162d4461bb6e3200e8455d68db51b77f7e1e218745d0ed439ca6cec07562723823bf25d770c5d54e285e7788ac8369e84561b0f227e3d03325a4b4ccf5556dac2ae0b9478d0522e88d9a0e55940b54aada3df5432f184fc2e9ad574f78061965fbe53dce38a5b902445389cdd320e722c186117f3cf7ae106c26f6e5185464f8e391543daf5c3c6bf9891ee2002bbbda7cc9320ca6fe6763e788b8a57969200ff58148604226e8f9f01371b8a1750ef275e505df49fd14400a120af6fe2c116c02effd67c7ad4728ee3daa288d775c1ca62a0d26a15e206e6a3db11dc76d130396fa55ccb5fbc7965539aa8cb085423f15546f3dd6598b95ea04c220ce",
      "de37ad3afc0354bed5b873040000",
    ],
    [
      "ETag",
      "jgcjWBgbH5xX+ksWzCB1yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8d93514fdb3010c7bf8bf7b8546b571a20120f6dd78d6ea185343c4d2832f6253538b9d4768aaaaadf7de7c00a1a93c24b7277fe9d72f7f73f7bf6a82ac92276af8a4d0366f7a90077e383046ca39da5578d9505163070bc207233badc26d3af5f968f1b3c5bfffadcfc9c4dd73717174458b18692b368cf72055a5a16fddeb38a97406d02755356599b05cced6a5f5ca5c97cf183f212a5cf17b7713c9ec43376088e8d923b9eb5fc07daee0e017bc0fb0472305009f0b3d4061f40b8b95fd3f2b2d6d0b3d8180196b5707b50186c6a6e107b54e98d7a8370180e8761ff7c303a3d274ea3e04e6145e8ed8ac6630e1dd7093ed1926c3024c2b4312d9cb7cf2dd5956c17f1e17c918627ed7c6f012e043695cb3ac15c19eb9ec5fb0bbe88f02fa9f90741ba29a5bba0022a09a68b5275c6a534606d278936e3757dc426cb65fc5e954a1a54b21bdcaa0e40bbed11f81e2fc7ff9396fcf5aad5b7713a7b475847ae3922e9fc6ab64ac757d79ebb7b31c264e7c05e1b245359f07e1af44fce46a761ffd96253f4b6a3ef44ce341030c1e94fb9548e4539d7160e7f00060a2da287030000",
    ],
    [
      "ETag",
      "q5HvRC2/Okqo8hK+uJEChQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-6-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8553db4ee33010fd95c8fbb2975e9ca44dda4a88ed96b044ea854d0c88bda8751227189238c40e08a1fefb4e125a4048f064cb73ce9c33e3994774c3f3084d50c093db8a950f9fae45803a88299ac06b7efaadb039b9304731bd9dcd0afba40a8ce4e00010bc66499a1529eb4a519521939333bf9794a22a682944171275adae6e9996695a78ac0fed31d0244be339cf6f807ca5542127fdfe4eba970891a48c165cf64291eddffb7746bf28c5350b95ecbf56ec8388ecbfab79988a902a2ef283331ff42bc9ca35cb284fc1c133310abebfcedce334eb2500bee321a36128aa5cd5ae204528f2982755d964459347d4b87c7141be33776644fbdad1fce9b1b39e4d7df2792315086c342a359f78eef2e797faba59afafeeb38d76ecad16daa664a12823b9d12e4e1ccfd17694bf15c6263bd00eb59577e478da8fcb7d68eacf3ada8647cd4d9bbb0b97683ac6daeaf8d8778886c16ec4a4e2796396d02065b5d1a776ba6fffb0265045256b836b1b5b541fe171100776188fcc6110631604a3c01e5233c0e178c00651c028f0549dbd61d15ce4d418e051341a5ad4b6adb16d58839111616b688e6c73381ed03834c681a15b68db41f72557ec88cb4248de36155d782e71d6c43b5bcea6c469ca886995aaa3d65c5dc44b9f0a8a04d03b756deb2817a054ff90bb248e379d11f7dc698762ce121a3ef8b73016314d2503342d69c6142b172282a6a1d395ef1277b59cce81d1fcf4e90e21d1e4cfe333813c144d97557322e22e1c9f4c17a78d871de89ca65583ba6b2fc8c006ee62a3abeb443726ba39d1073d8cf16fb4ddfe03228c769b17fd3a73bc4bd43e792c6625cbc38f7f15c04de0a305ddad0b4061614005264d7118a150d61a61c9da51e259ed65cfb607631b35e052bd8959a6bdeb599da3cec83296aba782da75813a5bb14aee4110840958c2b640f43f556d9eabac040000",
    ],
    [
      "ETag",
      "nP+p7iTW38faqCCp7Hub2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff9d93df4fc23010c7ff97fa0a09868081c48781134826e09826c698a5b4c7a86ebbd9de2048f8dfbda9419fd0f9d4fbf1fd5cdb6b6f2f5e4cae455f2c4df25a82dd9d2540b79511822b5372bc14983b100d012413565ef7f4fddcbed1831d8e369d40c1fd703bde5e5eb2c2a9356452f4f7626520d54ef41ff72297193066340b685754f6641af9233fe44086ba0a4cef82c01b04be38348e80540acb9ce2dae0ca5847f1877304175138998e4e73a9fc17c63736693d24815c83adc79822965a5b70ae26872e9645f10d0d66b3c0f7a6bf343fd7168dfe07b93175899436dfc47530f3a2d37a2de9c7135d79917f5aef48663fce144d6efc45e4ddcc4f5371bcde667f69f5d3a1219e7119c20a2ce40aaaef5f587c0645936ab21cef9e42d3616915548fc7e28f4462b12ca4456c72a4d96d9e77dbdd76bbdbea9d772e7aac4b51493298b3f46ec147138424d310b73c57a225befcc18ec0cd2d726d07fa2bc30587586dcb9dea932da12194e4e11c1bfaf40fef1994e5cdf9030000",
    ],
    [
      "ETag",
      "F9dVPrztYrCGv5LceVCwHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "6e",
      "82",
      "30",
      "0000e0bbf459494105ba376123902a58dd80f6a5a950b70a91f2a30ecdee3eb36bccef0edf1d88a2907dcf87a69227f002466121a330b076bde0f388b268d4a7837339d4be9516ce323709735fcfc1c72d6acac5f19c43420583ab7034d76542f81175575a8f04ce57b6080549a23dee453c659b75454db81a82766ff9673b1530dea834ace36007f15be6681db4581519af38e62c3fe425b5dfe3450db384aad28ec4bebee29de3b02fbc75d936446c4e894b1ab5dc447e4a55778d3bb7f1a622d8464bac69e95537abbf641791c7bb16cd5ba6076be6184f4fff179800f9ad55277bae1edb670b8426e0af3e1f462d1fff3d293ad9819f5f419e6abb19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:18 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d6fda3014fd2b91f75a2029941024b422485b34085b086da7698a1ce726731b626a3b7455c57fdf8d5358ab4aed536cdf73ee39f723cfe49e9729199284e70f15c8a72f772221270434cdf1b5f7771db1b5737b773d5dec82f937777e7b79f7381a2182d72c4537db025a4a5492811aae57ed5c8a6a4ba5102d4cd4725b4ebfdbef76fbb6e79cb91ed21414d99c97f748fea3f5560d3b9d83743b17222f806eb96a33b139be7776a79dad1477c0b4eabc55eca088ea7ca8f9b5108c6a2ecad17a85fa950219c386f2021dfc27a6c9f9dbcc6d4e37ed1cc13bce803226aa52d7ae30051365c6f34a9aac64f84c8ccb5707b2f2e7fe24b29828aa4d1997740327564a358df5d316ac8b70b9b066c1c5325c8ca3d9328857932b7f316e4f96f3f522585937577ee85b9a260518ae35b2cecd2dc00beaa7a0342f8d7a543fd7ca2ffd99bd1f4a4d4069054d3076ed3e7506b6976489cbb241f72cc96c489241e29ed16e6233af07bd34018a3c236a58b414a5e3d849b7c768cc3c0fe2dea09fc5d4e97563eab9a9ed31a76f0f12b23f218f926b9872b5158a371d2237e12cf2e3285c079371e49b12325a157ada18ab0b78ed51638108faa0a67d1de50295ea76cf82c80fc7936876ed37139e434ed9d3ea01679cd14201a2a9c4e669900b9162c348305ef853049b897d3f041519fe7a2675cf6b17af5a7ea44738c0daae365fb28ac2597069ec1c10d7b4a80c64d71c880426648a9ef7bf11871bdae4203fd67ef893344f216420a1649fcf12c126f0d97f76d87a84e2dea38ad278c7c561aad660129a05e2a6d6237be0b8363160a9dfc54efbcea165758e3a236ca0d42f05355b8f753662953a823088b30f4cabf6ff00163473a073040000",
    ],
    [
      "ETag",
      "4xUTcU1XjVDMvNLK7LXGjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "10c7bf8bfb1a24326880487d808e766c013a084f5315b9f62575e7e432dba14388efbe73dab1699d94be2477e7df29777fff7364df552559cc1e54f1a30173b828c07df5c1066ca39da5578d9505163070bc20721e8e975b7b9d7e083fcf86c331ec263fbfd8e7ab2b22ac788492b3f8c872055a5a167f3bb28a97406d02755356599b05cc1d6a5fdca69bc5ea96f212a5cf57bb2499ce92393b05e746c91dcf5afe1d6df7a7803de1c30672305009f0b3d4069f40b8855fd3f2b2d6d0b3d8180196b5707b50186c6a6e107b54e98d7a6134880683a83f092f4713e2340aee145684eeb6341e73e8b8dee0332dc9c20111a68d69e1bc7deea9ae64bb880f17ab341ab6f3fd0d7021b0a95cd609e6ca58f722de6ff055847f49cddf09d24d29dd05155049305d94aa332ea5016b3b49b419afeb33365baf93b7aa54d2a092dde05e7500daedcfc04db29efe4f5af2d71fad3e4ed3f91bc23a72cd194917cbf9369d2eef3c77ff6a84d9c181bd3348a6b2e0fd14f687e3cb51d47fb1d8357adbd17762671a0898e0f4a77c528ec539d7164ebf0005fad71c87030000",
    ],
    [
      "ETag",
      "E18MSsCT21JB448eU9xKsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:18 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff85535b6fda3014fe2b51f6b20b9000810052b5510853260a6d1236f5091ce724759bc4a9edb4abaafef71d07cada4d6adfac73ce7739173f9a37ac4ccc8919b3ecb606f1f0e19ac766cb0445328cba732592b40a7fff50f2fceec2f2ca2fa7ddfb9313ac601a254951e5d096bc1614e464137632c1eb8a08cedb48d41eb5bbc3feb0df1fdae3eec01d234c429e2e597983e02ba52a39b1ac67e94ec6799603a998ec505e1ce3d65dcfaa04bf06aaa4f55ad1421169bda9f935e79428c6cb934d88fab504b18582b01c1dfc0526f1b7d7cc1d468a4e86c5778c02a194d7a5d2ae9082f23265592d1a5673f268362e5f3cccd05b7ab3c8f8dc32c2e9c2dbcea661f47127150aec0c228d300afcd5f74ffab9db6eafee8b9db108d667c64e00e522913b631dccbdc038bd349e51d370d632762c695ec6d23ff323c331d68b45e845868da612908a958da588c439683b87a1f9ff6f4a03882212f6c9ad6b0f4977648fe33476693aea0fe2d486381ec5ee80f4639b8e1d70921808e294666f50a4e465b73f74ecb1ebbabd11be1cbbdb83a44f0680e02eb2d141ac091c623eb5cc7bc114cc99acb864fbd199bf023ff2b651b059cda691d7b491923a57f3bd39ddc44b9f0a9bc4a237fa7ad259c65149efc15f455e309d45fe4f6fbffa2564843e84b7b8fc94e412b09a0852800271c6131c9a79be0efdc85fafa64bcd85f7143d543a7eb1f182cb432880140494f4fd2163719378ef573cdf2896e295a20aae5d31dc28955a830ad86f9615dacb113d1af74666532cd4bfb9b1edf43077bc4dcd080594ead0d0fe46cda783582d8f4598c485acf04431fb071a3bfde821040000",
    ],
    [
      "ETag",
      "7DtrdfpSxJtsPvQ/En+B1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "9d55614fdb3010fd2b53f691d6b3e3244d2a21ad6581752b8595224d9a50651227b8a471673b6508f1df770990a622eb281fd2f8ceefa9f79eef9c07eb56e4b1d5b7ae45fabbe0eafe63cacd8f7231e5bac88c86d74ae69a5b1d8b1b96027268fcc57021cdf7737c4b4432f97930f9f6293d3c04848e6ef89259fd072b113c8bb5d5fff560e56cc98126620098fb55b91e4d66e1493885c452c6656272391e0f86e3d07aecd4041645b2c8cd7c6f62229436f32aa88917b3e96872b29b97b177d140b1c8f6a3a43c8fb9da8f23567316c78a6bbd274fea395bad36a4e1d9d9381c4cfe637e1e2b29e27730d7625f4666d61bc6f1f86c30db8d8f99691cd197c12cdc8dd7862d1b35cd46a7e1c56c707abe9b359fdfdc2ddf62f5d563c75ac8eb294fb8e279c4cbf65f29b9e091199593a5e1df33ded5b250112f0f0fc0d546aa64b1624aca2e64ba7e9778d4a3d4c301717b01e032193123640ed0cb0b28cd32d2b06c2aef60ae2c0700aa5ac28825d5ef1ad2a492b0bd0a95e075f08dabb514ba8ef9e229813ff33f55a12892cb7af794651b2a7191edf410f551cfae9346151b44c232cddbb76c37406443b3b18dbbd8eee246c1c8f5b1eb062470c2a005f881d87d42fbc439c0b872bda9db6ed17dc4229135a48765dfbc04118788b48a3e8689ce9a9553441c0f3904d98d727768ddde0a1c44bdd77aec6de19e03d21db74db95d2b472ec66dea698bfa13c50dcf1aa12c2219ddd689347dced86f328110e4c309128c0875f63e7dcff3117dad8c6e7bd0a324000fbc5e9b0bb4e182d76b73c1697161b064866d3a421aae13a9e23ac3a297147d8b0d24a0288029c0f078ed52ff1d3860207e2dccd936c1273ead4cf0db5c70b65cf0eb76b87abe1d86f720e75c49b869342f2f19fc74e11cc9521af47fbf2ca963450c3ed55f85798a1fff0283bc367307080000",
    ],
    [
      "ETag",
      "Bt8jBjotKP0k1ifNX+NJ/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "59",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bbe45b18098ba47fc1a62e5146ca26fc301122db806c05b1d3bbd7e935eabbc3fb062c8e79df47c3ade43578033383488c45dae8c6475a3c060a7d9b09309e3214b2ad8d75acd50732205d97aada86a57b8d43133bfb7953bb8114be7b947786e49ebeb4ab3a55980a151454eb7651d6c1d22c66352d0c928f4a66936922a586472f745623e6b2dc96163d7b0a2d062d68f3fd0aa6f8e2d3e0ec447e82b44fe7981c70ccdaa3b9db3a9726f58af39a2ba75d9a6841943d1a1df1a54f5262ee224bb689034d8b31d6b4f9cd95bd8d804204bd6a105f5efe2fb000fcdee41defa3fcb95d56115a80bffad13037fcf9dfe0ace31df8f9053f8083d619040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:19 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "2b64f6d596564a0b4d9ab55b51495aaa946a369b0d19860b3b4a99ca0c758de97fdfcb60bb1a137d6266ee39f79cfbc10b79e0654ac624e1f9630dd5f3b77b919013028ae6f8caa1fea1aeef23cfbce4bbbfeb0b7f6adf9a3793092278c39274b32da023455d3190e3f5aa9b57a2ded24a880e26eab89dfed01a5ad6b0e7f6ed918b34094536e7e50392ff28b59563d33c48777321f202e896cb2e139be3bbb93b35b795b807a6a4f95ed14411697eaaf9bd108c2a2ecac97a85fab5842a860de5053af84f4c93b3f799bb9c6eba3982779c01654cd4a56a5c610a26ca8ce775a5b392f10bd12edf1cc8ca9b7bb3c860a2a837655cd20d9c1829553456cf5b302ec2e5c2f0838b65b89846fe328857b32b6f31edce96f3f522581977575ee8198a260568ae3131cef42dc00beaa720152fb57ad43c37caaffdf13f0ea521a0b48436188f7a43da777a6e9225239639969d643d48122719d9d44a7acc1dc0204d80224f8b6a162d45d9073775d8d08e6d3875e241eaf4639a5a56ccac64e0b281635bce88ec4fc853c5159c73b91592b71d2277a11f797114ae83d934f2740919ad0b75de1a6b0a78eb51618108faa4a67d13e502959a76fb41e485d359e4df7aed84e79053f6bc7ac41967b49080685a61f314540b9162c348305d78e708d613bb3e042519ff7a214dcf1b176f5a7ea44738c0c6aed25fb28a423fb8d4760e885b5ad41ab26b0fa40226aa143def7f230e37b4cd416ed65ef893b44f21645041c9be9e258275e0abffecb0f508c5bd4715a9f08e8bc364a3c12a681788eb5a8f6cd7b62ca2c195fa101bdad6a1654d8e26236ca054af05b55b8f75b662b53c823088b30f74abf6ff00ad436f6473040000",
    ],
    [
      "ETag",
      "ieuBtPjTE/GivxUFIA5V/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:19 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "1086ff8bfb71410241d312a91fa0cb36a41428a4dda4a98a8c7d49dd39b9cc764008f1df7b4e5b36ad93d22fc9ddf939e5eef59b03fba52ac922b651c5ef06ccfeac0077eb8315d8463b4baf1a2b0b2c60e07841e468b383ebeff6fe53bc8d9b4b01b7a9f8b1dc5d5d1161c523949c4507962bd0d2b2e8e78155bc046a13a89bb2cada2c606e5ffbe23a5dcde65f292f51fa7c7e9724936912b363706a94dcf1ace53fd0f6700cd8136e569083814a809fa536f804c2cdfc9a9697b5869ec5c608b0ac85db83c260537383d8a34a6fdc1b84c370380cfbe3c1f9c598388d823b8515a1776b1a8f39745caf70474bb2c19008d3c6b470de3eb75457b25dc487b3791a8edaf9fe06b810d8542eeb047365ac7b11ef0d7c15e15f52f30f8274534a77410554124c17a5ea8c4b69c0da4e126dc6ebfa844d178be4bd2a9534a86437b8551d8076db13f025594cfe272df9eb8f569f2769fc8eb08e5c7342d2d94dbc4e27374bcf3dbc1a61ba77609706c95416bc9f06fdd1e5f945d87fb1d8357adbd17722671a0898e0f4a77c538e4539d7168ecfe4edea5787030000",
    ],
    [
      "ETag",
      "4bweCWsV+EvEu8ceQTcXPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-10-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db6ea33010fd15e47dd95de562424242a4a89b4dc82e526e05a7ddee45890143dd024eb1695555f9f71da0e94595da275b9e73e69c19cf3ca06b9e8568887c1edf142cbfff74257cd4404cd1185ea76bcb49067bbcb83e3bbd3226e62fecc683d3d10810bc64499aee13d694a2c80326871baf15e7a2d8d35c8826246aeab8a99b86691826b6f45edf029e644934e7d935b02f95dacb61bb7dd46ec542c409a37b2e5b81489fdedbb79df63e17572c50b2fd5ab20d2ab2fdbee8492202aab8c8461b0f0c1492e55b96529e80856766e87f7b9dbac569da8a017ccb0346834014992a6d418a4064118f8bbcca8a860fa8b2f9e2823c7b6e4f88f6b5a179e399bd9d8c3df279271508ec342a358fb8cef2c797f2badb6e2fefd29d3673570b6d97b340e4a1dc69e73f6dd7d68e94bf05c6061b6927daca9ddaaef6fde22934f6260d6dc7c3eaa6cd9d8543b4aeb69acd3c9b6818cc864c2a9e555609f51356da7ceca6f3f60f4b025554b23ab8ed6393ea036cf991df0fa281d1f323cc7c7fe0f77bd4f07160755937f419059e2ab3572c9a89cc320d1d43e306ac178656c7c4c0c01d8c7118f96197993ddab33a9661a14303dde55cb129977b2179dd5274ee3ac4de1277b39c8c895d9511d12251d3da5c59c44b9f0a8a04d03b751dca2817a054fe8fb324b63b9e10e7ccae4762ce621adc7b373014114d240334cd69ca14cb172284a6a1f5ca7388b35a8ee7c0a8fe797d444834fcf3f04c20f7fbaacbaa3a117116b647c68b75e5e1083aa34951a16eeb0bea40779ab8d3c45da27786ba31d4bbad9ed9ff8d0e877f4084c9aef3a2d38ded5ea0fac96511cb59167cfcab00ae021f2ee8715b000bfb023230688ac30c05b214097256cf124f4b338f6c1de61397d306e05cbd897575fdd8b432479991a52c538f15d5db0285d662857c024110466009cb02d1ffc3db77b8ad040000",
    ],
    [
      "ETag",
      "DP9Il8p0MkVQj3C6X0Rg8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "14fd2b53f6b836b2f39d4a484b21b06ea1401b1ea60955267152831b77b60b4388ff3e3b40d242d6b53c34bdf7fa9ce69e635ff7d1b825556e0c8c6b52fe5e61fef0b9c4f24207132c56540af5b56495c046cfc012950ae9d2ca1f4649791815a913fd2c490553767170a010229be30532068f464130cd8531f8f568546881158de40a201f963a1e8dd3f8249ea8c282e5ba30be4c926898c4c653af21a02c63ab4acef62616840b39ab9386384d27a3f1c9761e451fa229c584ee4729719563be1f872c6728cf3916624f1e1333b45cb6a4e1d9591247e3ff985fe59c91fc03cc3bb22f83cabb96719c9c45e9767c8ee4da161d4569bc1d2f245aacf5948e4ee3691a9d9e6f67cd66f3fbc52e565f3df58c1b763dc105e6b8cab03efe4bce6e7026477ab2847a3bc57dc1563cc37af314b85e28395b2d1167acaf2a7d08fad0b33ddbf640085d3f5440ca322409ab14f672aa7a332493884ed8bd1a2cc351005e876ac68afa795797b5061dc1268a1648a2263b64128b82f1bca9a0ecb5647fc57fea76cd8c2d9af56375c4296e7f38b4cdd0b41ca03e5e53957c8577489c2034419359c0027d60f5c15adba61b80000676e8b89e1fc46107f813b406d01e40c7d41000be0050efc3ba116ecb6ba284f0d687ef6c5e09a9dc7d2dd09b978ab38b0bae6d424f376b866d8b05a2e21fc23797024bd3df4b73377d0881e33ffb107619e16e1a11761ae1751871842bd224d30c51d2fa928b3a77773a0a7660421b9ad0094cdfd945f8c692e5ab9314bcd7e5bd7121843074ba0cf01a03ba94fb1dcabf615ab65a7f504c4493cd6f75eaed223c70d5e10f4ca5de0dbab56d1901e09b6b1bdd88f1375443e0fb6eb76affadeaab97ab61f8a0e6f89c3375cf08acaf18f07cdd1c32ad47dd9a03dd48cfc890faa3fe46e4",
      "73fef417e771466905080000",
    ],
    [
      "ETag",
      "5ln7BALgCAfT4AYgin1ToQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:20 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00000002ffedd3597282300000d0bbe45b9ca06ce95fc1462a3ba60afe6480468b0b62886c9ddebd4eaf51df1dde37c88a82350d15d713abc00b18b2199a1653a7364c7cf8c2b57c3e6f36fa05ad350fef827dd0f1eb9c874b6de5312cfb8a2b6b979820bc5596f7f22331d05c978ac3ea74249173fc4cc82274accab71a926d85d0b5880f9510380e535fafb07a2c6fe4d5ee24fb16599ee4bec3becb7b7c0e9d24a8497e70f4317e93ef45eeefa06ed0a627b393d2ba0bc594d670802d52532f10dc1d62438c81955bf235afb837cb686cc356dd97e905d918418f8eb7906a1accc9f4e9e9ff0213c0fabae4aca1e563fb5c456802feea5331d4ecf1df6419671cfcfc02cdc8f14f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:20 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "c8fbda2410c88348d11aa564456bc84648bb699a903117ea8e608a4da7a8ca7fdfc5345dbb49ed276cdf73ee39f7c123f9c5cb94cc48c2f3fb06eac3873b919033028ae6f8ea9887eb6f36bdf57df85cd9aee9ae0ee16a319f2382b72c49f755013d299a9a819cedb6fdbc164d456b217a98a867593d6b6c8f6d7b6cbad668e2224f42915df1f217b26f95aae46c303869f77321f20268c5659f89fdf3fbe06138a86a71074cc9c16bc901aac8c1dba21f0bc1a8e2a29cefb668a09150c7b0a7bc400b7f996972fe3a759fd37d3f47f003674019134da95a5b98828932e37953ebac64f648b4cd1707b2f5aebc6564305134fb322ee91ece8c942a1aab4305c62adcac0d3f586dc2f522f23741bc5d5e7aeb457fb9b9daad83ad7173e9859ea1685280e61a73e35cdf02bca07e0a52f152ab47ed73abfcd420ffffb1b4049496d005e38939a6d6d474932c99b06c6a8f92cc842499269311b51393b90e38690214795a54b36829caf138650e12e3643861b1e30ced985a43164f26963975ada935b4a7e478467ed75cc105979590bceb10b909fdc88ba370172c1791a74bc86853a88bce585bc04b8f0a0b44d01b351ddb2817a8d4b6db0f222f5c2c23ffdaeb267c05396587ed3dce38a3850444d31a9ba7a05e8b141b4682c5dabb40b09ed897535092d98f47d2f6bc75f1a2e5cff40807d8da55fa4bb651e8079fb49d13e29a168d863c7407520313758a9e8f3f11872bdae5205f775ef89d744f21645043c9de9f258275e0dd3fedb4f688c5c54719a9f08e9bc3642bc26ae83688eb629fd89669ba8e4334b856ffc62cd3199d7ad6e66833c21e4af55451b7f6586827d6c867100671f881ee",
      "d5f10f0e37070e76040000",
    ],
    [
      "ETag",
      "40yVX3ahIIeKp3909FyRFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "10",
      "c7",
      "bf8b795caa35a40d23120f29745ba4d0b236f032a1c8b52fc1cc893ddbe95455fdee9c0374d3400a2fc9ddf977cadddfffecc92fd17292908da87f7760762735b81f3e5881eda4b3f8d2aab54002028ed6487ecea2f8b4fba4efe6f9dd65ba9bd0cdf4cad617174858f6000d25c99e540224b724f9b9272d6d00db98925dd3967d1610b7d3beb82e56d9e21be68de23e5fdce6793acbe7e4101c1b3975b4ecf90fb4dd1f02f2a8362ba8c040cbc0cfa28d7a04e632bfa6a58d9630b2aa330c2ce9e1fea036aad3d42835c2ca280c47611cc551148fcfc3e9d939825231ea846a91bd5de37cc42947e54afdc12d49182161fa1837aefae716eb82f79bf8305b14f1a41ff05f8032a6bad6958360258c75cfeabd822f2afc4f4afa4110af4ac821a886968319a2842e29e706ac1d24952da9d6476cb65ce66f5569b951820f835b310048b73d025ff365fa9eb468b0bf5a5da5c5fc0d611ddae68814d9f57c5da4d7379ebb7f31c26ce7c0de1885aeb2e00d158e275fa667f1f8d96397cafb0ebf9338d3414018c55fe5bb7024a9a8b47078024ec154d388030000",
    ],
    [
      "ETag",
      "/I362u+pVELVCAy4ab5Dsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-12-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53db6e9b4010fd15b47de9c597058cb12d592971708be44b0a3851d256f6020bd90458875d1ca591ffbd03c4b92852221e58ed9c33e7cceccc03ba617984462860c96d498bfb4fd73c402d442549e0f69a7c73e777faf1bfe072b13819ecbcc5343eb3c66340b08a2548b64d695bf0b208a918adbc4e52f0724b0acedb90a8ad6a6db5aff775bd8f87aa610e8127681acf587e03ec2b29b762d4ed1eb43b09e7494ac996894ec8b3a7fbee4eeb6e0b7e4d4329baaf25bba022baef8b1ea53c2492f17cbcf2c0402968b1a619612958786646c1f7d7a93b8c649d04c03b16521286bccc65650b52843c8f5952167556347a40b5cd1707e4d9337be22b5f5b8a674dedf5c4f2fccf1b214160a310a178beeb2c7e7ca98e9bf5faea2edb285377395736050d7911898d72fed3766de540f95362acd3b172a42cdd13db558e2f9e42963769291b16d52765e6cc1d5fe929cbe9d4b37d0583d9880ac9f2daaa4f829456361fbbe9bc7dc38a402411b409ae4ddc27ea000f833830c378a01b418c69100c02d3207a80c3618ff6a28012e0c92a7bcd2239cfb181718f126318a8bda817997460443a814fd37a1135896aa846d8ef63b46fa1bb82497ac2c4960bd6b4149dbb8e6faf7d77b59858be5d9711933295278db9aa88973e251409a077eada5751c641a97a1f67e1dbae35f19d33bb1989194d4878efddc250c4241514d0a4201995b498f3089a864e979ee33bcb85350346fdcea7078440a3df0fcf04ff7e5b7759d67fe43b73dbf3adf969ede1003a236959a376cd016958c36dacb5b1e9abda48d5476aaf8331be44fbfd5f20c2643779d1af95ed5ea0e6caa5312d681e7efcaa00ae031f2ee8615b000bfb0232306892c10c85a212090bdacc12cb2a338f6c15aba66ea01a5cc837b181313834adca5165a419cde56345cdb640a18d58299e4010841158c0b240f43f6dcf1fbfad040000",
    ],
    [
      "ETag",
      "ja+RMw3BzbZNND8vSNFfVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "956f6fda3010c6bfca94bd1c4476fe07a9d2a04d291aa52dd017d35421931ce0d6c499edb46555bffb9c740ab06619f40df839df23ee77679b17e381a689d131e674f93307b1f9bc0475532cc62073a6a4feca782ac16819a0c85267fe4abec719ee5fe6e772e09e6de4e9c47b8e6e4e4e74868c57b02646e7c558506089343a3f5e8c94ac41db68a213d4262bd683d134ea47631d58f3a4088c6e87c36e6f1819afadca40e298e7a99a1d6d5c5021d5ac149571321d0f46fd661f231fb26962ca8eb32c214d401ce7a1d98c248900298ff471392359b635f5aeae865177f49fe6a789e034f980f3911eeb60ea71eb381f5e75a7cdf909513b233aeb4ea3e67ca9c87aa7a6e9e0329a4cbb97d7cdaed96cf5b43ea4d577af2de39ecfc7b00001690cc5f1cf04bf87580d8a9b25f5af33684b9e8b188ae1e9e4726329789e11c1795b47dad86a63cff66cdb432176fd5027321e134579aa736f27ba36437145d8983fe98b65383a41944b7dc716e5e7a30efb2543b1b2aad505b025a9d4370654566af55048ef2b3c97659a315f577be7fa6833a864e09a9613988189dda00a2a91c301c241be89dc6d6dc8426d64b5d1b65c6cba0146beef864e14d6247ec25607db1dec7c41a86cfa2e755043dd07a1e8b682d37c4e95aae4322eb57f0838b66cd3725d13db4877a00a2f0893f00fb5071f38d8746ae0837d783dfeb01e3e68840f6be087b9600069a57bfaa800639566f3b7407008bf65633df3d0d42d70ec7ac4a65e78ba7db6f39e2adcc7b75c64d7e3878df818558e6d71675ca8d5a69203a9f8b619092d647808ba539c796c7a8ea9a773c8acf7b7ac1099aefd8e68a7e4125d5f7abf161da3bfd1effebc02bd8d02792db87e522414af097a7b594e7981a41fc84e5156cb8889fe4fbea0ea4dbffe0698aaf63bf0070000",
    ],
    [
      "ETag",
      "zdYcp1GMuFsI5DysCS6xEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "08000000000002ffedd34b7282300000d0bb64ad4e15fca43b61c0214814110ddd64020d1a13250da242a777afd36bd47787f70d5851f0baa6d74af20b78072d1bc1413108f5ccf10f82e9c36a47864e40433fc7fd93505e99d0769cdcf2da56f3d822769cb3db70d3a1f30591bc458b06d7de5c22dc1df6919ed48aae93205a4936ba090ab7d6ce472e6eaaea8ed38c4508f5f94c8a7df3b55a86966ccfeefa8e958b3716f3b6dbacb3e77092c6444da71171e2eb6710bbfba99d6ee0ba84ea2117b37e234d1e16faa3b44f245d1c4d520e75b07447459cbd3daac03881a73a111a9f9c8f76e60c5e5efe2fd003fca185e13515cfedd618c21ef8ab4fafade6cfff0e67861bf0f30b2acb8d6f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "535d6f9b3014fd2bc87b6d1208250991a2354ae88a14484748ab6d9a90712ecc2dc10c9b545595ffbe8b69ba5695da276cdf73ee39f7832772cfcb1d999294e77f1ba81fbfdc89949c115034c7d7c0f6d7e39fd5e13a182b912e2dff9ac2e1613643046f5992eeab027a5234350339dd6efa792d9a8ad642f43051cfb27bd6c81ed9f6c8742d67ec224f4291ad78798fec3f4a55723a189cb4fbb9107901b4e2b2cfc4fee57d70180eaa5adc015372f05672802a72f0b1e8d74230aab82867db0d1a6824d409ec292fd0c27fe62ebd789bbacfe9be9f23f8c01950c64453aad616a660a2cc78ded43a2b993e116df3d5816cbc95b7880d268a665f2625ddc399b1a38a26eab102e3325a07861f5eaea3601efbeb30d92caebc60de5fac57db20dc18b7575ee4198aa60568ae31332ef42dc40beaef402a5e6af5b87d6e959f1be4bf1f4b4b4069095d30199b236a4d4c37cdd231cb26b6936626a4e9241d3bd44e4de69ec3f92e058a3c2daa59b4c49a2d96b976e62463371d27e76c384a26e66492644e6ada4370dca19391e31979a8b98225979590bceb10b98dfcd84be2681b2ee6b1a74bc86853a86567ac2de0b547850522e8839a8e6d940b546adbed87b117cd17b17fe375135e414ed9e3e62fce38a3850444d31a9ba7a00ec40e1b46c279e02d11ac27767d0a4a32fdf544da9eb72e5eb5fc851ee3005bbb4a7fc9268efcf09bb67342dcd0a2d190437720353051efd0f3f137e27045bb1ce4fbd68b7e90ee29820c6a28d9e7b344b00e7cfaa79dd61eb1b8f8282315de7173986c45580ddd06715dec33db3287b6eb100daed5bb986399a79eb539da8cb087523d57d4ad3d16da8935f20584411c7ea87b75fc07d017099876040000",
    ],
    [
      "ETag",
      "M3IO7ZpvPM7tobD1IPaevw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f6f9b3010c6bf8bf7964861347441ea8b64a35b54f2a784beaa2ae4da0773666c669b4c5194efbe33edd2aa9d44dfc0ddf977e2eef1c391fc128a93843c8afa7707e6f0a90677eb831c6c279dc557ab9505121070b44632bd49d5a45b77d5cd75954fe7f099ed36cbdbab2b242cfb090d25c991540224b724b93f12451bc036a665d7a8b2cf02e20ead2f6e8b7cb1fa8e79a3b9cf577759369b67293905e7464e1d2d7bfe036d0fa780ecf4630e1518500cfc2cadd13b606ee1d7b4b469258cacee0c034b7ab83fa88dee5a6ab41e61651446a3308ee2288ac7d370723945506a469dd00ad9bb2dce479c7654e6fa0f6e49c20809d3c7b871d53ff75817bcdfc4878b55115ff403be062863ba53ae1c042b61ac7b52ef1ff8acc25b52d20f827855420e4135280e6688126d49393760ed20a96d49dbf68ccdd7ebecbd2a8a1b2df830b817038074fb33709dad67ff93160df6a2d5b75991be23ac43db9c9162b14cb7c56cb9f1dcc3b311e60707766334baca82375438bef832b98cc74f1efbaabdeff03b89331d048451fc557e0847928a4a0ba7bf649c6fc588030000",
    ],
    [
      "ETag",
      "EKEn5uOufKFfR9Be2cjPMQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: 4 } },
          { parameterType: { type: "INT64" }, parameterValue: { value: 7 } },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1636336091579",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ffa5535d6f9b3014fd2b96f7b24df9804042885475694237a634e980b4abb6291863a85bc02936edbaaaff7d1768faa149edc39e6cf99e73cfb9d7f7dee14b5ec47882239e5e55acbc7d772122dcc14c91145ebfae82c5ef8c7d3fbbf813ad4572b035e373f7666f0f10bc6649926f33d695a22a299393b5df4b4b516d49294417127575b3ab8f8c91618c345b1f5a36f024cb92052f2e817daed4564efafd9d762f1522cd18d972d9a3227f7cef5f0ffadb525c30aa64ffa5641f5464ff75d1fd4c50a2b828f6d63e18a8242b372c273c030b4fcc38faf432758f93bc9702f89a5346281555a16a5b90828a22e169553659f1e40e37369f5db0ef2c9c59803e76903f3d7436b3a91fbc0fa50281101189fcc073979f3fd4d770b339bfc94374e8ad8e5058322aca5886e8f48be33908853c0ed1cf4ad30c86f6d174397ffe44e169e5cd1d0f1d9ca15df6a93febb418b8a1857be40648d734b43a3cf49d0069603f6652f1a2311f902863b5f187febafffe6a4d208a48d60637963622fa58b3a324b26832368651a2b1281a47d6901891466d939971c408f0549dbd6191421483919558919910dd646c3cb4a8ae9b5a620e2ccbd60c7b6cdb64404d8326f8be836f4aaed89ccbad90bc6d323ef5dcc0d904de7a399b064e534642aa4ccd5b737511cf7d2a281240afd4755f47b900a5fac7dc65e078d359e09e38ed902c584ae8ad7f056392904c32409392e44cb1f248c4d0347cbcf2ddc05d2da70b60343f7fbc43483cf971f744086eb74d975573d65a23b3d1df014e48563588ebf682217cdff9af0c1664f805085889968cbfad1def0cb74f1e4b58c90afaf6e703b809bcb9d9bb35032c2c1ac8c0442a0ea346652d424bd68e1ccf6b330f6c5d3306fa1837e052fd133306d6aeb7758e3a23cb59a11e2a6ad7ac6e5513aae423088230294bd83288fe0595c38360e6040000",
    ],
    [
      "ETag",
      "JOTLxleXYjzbUofBp4dhIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1636336091579"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d54db72da3010fd958efa58702d7c017b263385c649e9984b80bcb4936184bd1011db7225194219febdb2436cda520a79b1f7728ebc7bb4eb2d7aa249885c34a38b1f19f0cdfb05c8bbdc1881c82229d42b658900544320c94221e163f273385bea72c8eefcf53761f67b4f4efbea4a2144f0083141ee16cd2944a140eef72d4a480c8a464305909b34b7bbfd8977eb8d542066611ee8dffb7ebbe37b68572b0924085896c8e9c5c439e5424e0ba7248e27a36efff6342f226fa2a98e69741965014908fc320e4da7240c390871218f892949d38ad4190c7cafddff8ff849c8190ddfc05cd14b19915c558c1b7fd09e9cc687441e5cd1757be29dc60b49e2839a26dd9e379eb47bc3d3ace9f4711d9f23f5c3ae86966c368239704802c8c73fe56c0981ece69b25d4d723a80b96f100f2cb53e022b1e02c4b0967acae22756cd6b16dd88661eb0eb69a8e02462c2092b24461efc7aa36249924d188add562a18602f0c2543b362f9e2b15b68a1e5605e0d5f22927a5f3953d2642aa435f03d1721f313fc17351ab16b0b84cdfa8f98ea0742d43c336d6ac96e63865704e22514124cfe01fa95623a75725ea0dbdae37ea7a55757eb4eee866d3312dbbd9723ce708fa1d6eb8d870b1a91518fd83ae17f77028847d44886b4868e98c0312d14a975014be758e08d86869d8c01a365b5ad33ca7f1df528da6a139adbffbb2ff50c1c1d8318f09609702ec3b7fd8cf466723410c39538326209f31fd65de3eb3bc25b5366e5e480d0544fda9bf50f9e2ef7e019481d81406060000",
    ],
    [
      "ETag",
      "e/nzPbj0tPoQLwZs4NMk9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 08 Nov 2021 01:48:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
