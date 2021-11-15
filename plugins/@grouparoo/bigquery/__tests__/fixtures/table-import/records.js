const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475664353";

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
      "00c0bfe46c184588a437114441052d0e940b1320a5018b84a42076faf73afd46dd3fec3720794e8548e5b5a60d78012351b1922b5e6b98eba1f4dc147652d02de3f2d56ea39e31ecb29b03e5e2881da4e1cd48ab7d12d51ff51622f4753c75308ed090a9f119ae50743084c6b9115e622a67b1a55d78bf5dcb1d64f5beac3297133d5c58a6b0ed7b23ed1dabf27279cfb424193c82dc538fdb26e6853e3b045356bc41dfd9e5e9b10b4ba2abd65e77db20f59c3a4afcebfcd325731644c686a16478c776a2ea6a358df935e3abac398da2f2cfe6a5c895a7a7ff0b4c00bdb5aca322658fed731de309f8ab9fcab1a58fff26251dedc0cf2f5e3aa73519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b6fda3014fd2b91f7b5bc213c24b422485726086b08ada6698a6ce726751b62b09d4eace2bfefc629ac55a5f6536cdf73ee39f79167f228f2988c0813e9be0075f8f22019b92060688aaf7fd9fdd56cc1f6e9f7f830dccfcc80068bd9cd788c0851b234ddee32a86959280e7ab459d753258b1d5552d63051ad556bb91db7dbefb96eb7d3eb204d43962c44fe88e47b63767ad4689ca4eba99469067427749dcbedf9bdf1d46eec947c006e74e3ad62034574e343cdaf99e4d408998f376bd42f34a808b65464e8e03f3166976f33d705ddd653043f090e947359e4a6748529b8cc139116ca6625a367625dbe3a90b5b7f0a6a1c365566cf328a75bb870626a68640e3b70ae82d5d299fb57ab603909e72b3f5a4fafbde5a43e5d2d364b7feddc5d7b81e718ca32b05c67ec5cda9b8f17d48f411b915bf5b07c2e955ffa337f3f949280d21aaa60d46fbab435680e59c2fa3c19747a2c69026303d6efd10e6bf26117ba31038a3c2b6a5934977973d84bdc2eeb44346e0ea3ae0bfd689874e2c875dd16929aed7ebb4d8e17e48f12066642efa4165587c85d300fbd280c36fe74127ab6848416999955c6ca025e7b345820823ea8e958468544a5b2dd733ff482c9349cdf7ad5841790527e58ef71c609cd34209a2a6c9e01b59431368cf893a53743b09dd88f535093d1af6752f6bc74f1aae5677a88032ced1afb25eb3098fbdfac9d13e2966685853c5507a2804b15a3e7e36fc4e1865639c8cdc60b7e92ea29800414e4fcf35922d8063efbcf4e5b8f50dc7b54d106efb8385c971a5c41b540c2d67a66237d402c589977b15ebf776a5999a3cc085bc8cd4b41d5d6639d9558a1cf200ce2ec7ddbaae33f2d1befd773040000",
    ],
    [
      "ETag",
      "zbhFDLbqgJdy9qDt8aRLDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4fdb301086ff8bf9b8546ad436a0487c48b7b2450a2d6b83d034a1c8c497cce0f882ed1495aaff9d7360dd3426852fc9ddf939e5eef59b3d7b905ab098ddc9fab103b33ba9c17df7c11a6ca79ca5578bda020b18385e13f9948e3f817c7e842c79b8d8dc8437d1f687a9cfcf89b0e52f68388bf7ac92a08465f1cf3dd3bc016a2b51758d2efa2c606ed7fae2265fa7cbaf9437287cbebcceb2649e2dd82138360aee78d1f31f68bb3d04ec1eefd65081015d829fa535780fa54bfd9a9637ad8291c5ce9460590ff707b5c1aee50671449551380aa349343d9d45d174329b10a7b0e44ea226f47a43e331878eab353ed1922cf484e9635ab8ea9f5baa4bd12fe2c3749947d37ebebf015e96d869570c829534d6bd8af71b7c13e15f52f10f827453520d413568016688926dc1853060ed2089b6e06d7bc4e6ab55f65e152d0c4a310c6ee500a0dcf6085c64abe47fd292bffe68f525c917ef08ebc83547244f2f179b3cb9bcf2dced9b11e63b07f6ca2099ca82f753389e9ecd4ea3f1abc53ea3b71d7d2776a68380959cfe946fd2b1b8e2cac2e105e90ce12f87030000",
    ],
    [
      "ETag",
      "wI0+eizqeLAkFSW1W6vYrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-2-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85535d6fa24014fd2b847dd9dda8a020a249b3eb2a3624567701bbe9930cc3858e05c6ce0cfd48d3ffbe17b46e9b26eddbe4de73ee39f7639ef41b56a5fa444f587e5b8378fcb2e389ded141911ca33bf039a48b9d59dd550f79707e39984f8dfbb33344b0862549b92fa02b792d28c8c926ece582d77b2238ef62a1eea0db772cc71e0d1dc7b68616d22414d992553748be566a2f2786f122ddcb39cf0b207b267b9497a7b8713730f682ef802a69bc553450441a1f6afe2838258af1ea6c13a27e2d416ca124ac4007ff8969f2f36de51e23652f47f01da34028e575a51a575882f22a63792ddaaafae4496f5dbe7ae8a1b7f46691f6bda385d385b79d4dc3e86b2c150ac41a915a1805feeafc5bf38cb7dbebfb32d616c1fa428b05502e52196beb60ee05daaf2bed85350d671d2d6669fbd296fe851f697dd3d4d68b45e8459a89b652908a55ada988240534868e63f3dfefaa211045241c92db91e990be6b8e932c19d1ccb58649664292b8c96848acc4a4631bec3401823cd5546f59a4e255eadab6331a9843482d7764b9c3b139a4842690b8031b0864e37ee698d6407feee8f782299833b9e7921d86a7ff0dfcc8db46c166359b465edb4646ea42cd0fe69a265efb54d824823ee8ebb9c9328e4acd26fc55e405d359e45f7a87e52f2127f431bcc5f567a49080682248090ac4054f7168faef75e847fe7a355d36b5f0a2a2c77d13ffb3f182ab6328800c0454f4f32123b84d7cf62f5eae14a178a7a8828b570c374a65a341051c36cbcac6cb893db22c576fc142bdcbd96e1f73a7eb6c2a4209953a3674b852fdf92856cb130893b890151e2966ff016e7d6c1323040000",
    ],
    [
      "ETag",
      "jeIoedFj0nvnxgRGV2DA/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6fe23810c7bfca29f7f24a64c78e9320ad74b4a56cf7e81365dfdc6985dcc440688859c7b0adaa7ef79d84360f8b9b0bfb82e219cfa8fefdc71e9b17eb314e23ab6f3dc48bef5ba19eff5c087d970f2622db263a83af8d4c33619d5842f30544b289a7474fcedd6277b14a57ff3e79dfe3db8bbb4f9f20220b9762cdadfe8b358f45126556ffbf172be56b0169710401fa79938f2fafa7c3d170028eb58c72c7f5d7f178703a1e5aaf2765020f43b94df5ece8c479ac323d2b8c32f17e3ab9bc1eb5e725fcb7d280384e8e4b59883412eab89c7833e351a444961d9927b319df6caaa4d39b9bf17070fd3fe2a7919271f41b99bbf8d88c44efaa8c8bf1cd60da1e1f715d2bd1f9603a6c8fcf345fd7d634bdbc1ade4f0757b7ed59b3d9f2c7ba8bd4df5e4fac957c9888b950220d45befd374aae44a82ff39395c17f4f442f935b158abc78105c4c2c94dc6eb892b2079e9ed3c38c30eab98c51e212884b64c8752c5308fd7a0f4bb3b4d43c99c81f70ae2c8c204215633863f3e2ef2ef7170ccdd150c5a234be08b5937156da62b577a0bfc553b1523b94eb72f68a27552a766d877a36f16dcf299d5a6dab88394f32619e72dcc0c6559a831cd4434e0fd5166cbb3e72dd000774181802ffc04e1f933ea67f2154c85ee7760cdc673c8c931afa30df38ef4628c0c246e80b38d2497de5c4c694d914db4e6db92daccda980da841df2384d7046019dba2672a724b75d844cf4c4403f52428ba466ca6d28c3c7d2b158bc799c4e22606cfb50418c6c4ce8d1d567ccb7c92119696ae0111c8006cc33a9406a2a30cfa40235a8305873cdab1d21b5c8e65245a58787ef2ed245061c103b805380e0c3cca81f1b1404448760b429828f7d5288e09b54a00d157cf37670abbc72348e55a5c317b94c330dade5dd91acde3cb48b0af98160f962ed20e852fde694efe4e987686e538700516faf436012c26d",
      "0a111885600621ce451a97c67dc893b8d225ca0adbedb415a00f6282a135403f3cfe44381eec24ff908bfda242803fe887acb51f7a06f2cf225954acff24a2760d2c1f73937501f7f36bc0b781def5cd6c2d47007976add0258cd7a0c6c8f35c33b5d74aed1ba84742e9da2570b67d88b5aeba6058d85ea78ac3c6755c17aa9e1fff0f8adc52721f6e106a80f79bf0f00e08ccf07e2b7c60801f6f55224475ce4fe1c92092ea56481ef60ebfd31d90ef76b8c641024acc886d5a3090af767594544113df711131e307adf8b86aadd5e2cea5d2cbe7d2bc6c34bd28cecda00b3acdf73cb61985ce45bad4ba39e504c8760fefbfda920b7442986744c7e857f46f6fcfc1d367b8be6e9584a76526f25725dabf30cf648e04ef9d7ebeac132be4f0dbec73acf7f6eb4ffc28c6ccf80d0000",
    ],
    [
      "ETag",
      "6R7tGx2QgvFjnjZx7qiPFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd34b7282300080e1bb642d4c34f2ea4ee4210d16b0da0a1b2684a00c82914725767af732bd46fd0ef0effe6f4028655d97f6d78a35e00508b230642a63ae9bcefd7c5d0ee94d0b93d54d5cfdc24f37d1512a4e89edb2d53eecccb24673144417b43c38cc2b705698db9d1eef2ba8678a97a452240225af2bad6a20479eb463eeb1d1d44811eb2f42faced77d1eab0fcb8097c7295fd128bf63ec8ee7831fcf2d617f663c50519e48f0550906ab3a08f8e610946b988efb20f7ce9bf5fb7d310576a1cb91f5a10e1eeeb74363c2f56d54c4483a1c2e1eb046342a5b6a3bbe5dcb4f4fff17980136f2b2655d5a4eb723c53066e06ffdb4179c4dff9b8cb4ac053fbf54158dbf19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "85536b4fdb3014fd2b91f79536e9336da56a54258c6a6d0a490a43d314d9ce4d6696c62576400cf5bfefc6a11d08093ec5f63de79e731f79267f449190096122bbafa07cfa7227193921a06986afb776b29ed3f9f9e5773dbe8347ffef0f18d2abe91411a26629badde5d052b22a39a8c9266c67a5ac76b494b285895abd5667d81bf6ddc170d8ef0d7a485390a74b51fc41f26fad776a62db07e97626659603dd09d5e6727b7cb71fbaf6ae9477c0b5b2df2ada28a2ec0f35bfe692532d6431dd84a85f292863d85291a383ffc4849dbecddc1674dbce10fc203850ce6555e8da15a6e0b248455695262b993c13e3f2d58184ded29b47169779b52de2826ee1c44aa8a6b17eda81751eac57d6c23f5f07ab59b458fb7138bff056b3f67cbddcacfcd0bab9f002cfd294e560b8d6d43a35371f2fa89f80d2a230ea51fd5c2bbff467f17e283501a51534c1d87586b43372c62c652e4f47bd014b1d606cc4dc01ed31878ffbd04f1850e41951c3a2852c30dee9f6076edc678e13f7d32489599a7663ea529731774c070e25fb13f2580a0d6742eda4124d87c84db088bc380a36fe7c1679a6849456b93e6b8cd505bcf6a8b140047d50d3be8e0a894a75bb177ee405b379b4b8f69a092f21a3fc29bcc719a7345780685a62f334942b9960c3883f5b7967083613bb3c041599fc7c2675cf6b17af5a7ea44738c0daae365f1246c1c2ff66ec1c10d734af0ce4a1399012b82c13f4bcff8538dcd02607b9da78c12d699e0248a184827f3e4b049bc067ffd961eb118a7b8f2a4ae31d1787ab5a8397d02c9030b51ed9a38ee310032ef5bb5877303ab4acce5167842d14faa5a066ebb1ce46ac5247100671f6be69d5fe1fc6c5c52d73040000",
    ],
    [
      "ETag",
      "Y/dOCaCFPKt9jewNzXe6aQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8d936f6fd33010c6bf8b799b4aaddaa628d25eb4502028fdb3369318688a3cfb123c1cdbd84eb750f5bb73ceb6821852f626b93bff4eb97bfce4487e08c549426e45f5b301dbbea9c05f866007ae91dee1cb68e58044043cad906cb79fdb957c305fcdafe19759b5bcbc3626bdbfb840c2b1ef5053921c4929407247926f47a2680dd8c6b46c6a557459447c6b42719fefd2f547cc6bcd43bebecab2f9225b9253746ee4d4d3a2e35fd176738ac89dbedd4109161483308bb1fa0e984fc39a8ed646c2c0e9c63270a483bb83caeac650abf5002b83f160148fe3c96c1ac793f1748c9cd48c7aa115a2577b1c8f78eda9dce97b5c928c0261bb18172ebbe701eb82778b84305de7f1a49bef6f8032a61be58b5eb014d6f947f19ec12711fe25257d25883725641f5481e260fb28610acab905e77a49ed0a6acc195b6c36d94b5514b75af07ef0207a00e90f67e043b699ff4f5af4d71faddecff3e50bc27974cd19c9d3d5729fcf57dbc0dd3c1961d17a705babd1540e829f46c3c9dbe92c1e3e5aec9d0eb6c3ef24de36101146f14ff9243c494a2a1d9c7e03846af83a87030000",
    ],
    [
      "ETag",
      "yPJyMlxpZpz0X7gEQYppIw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-4-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "b24d4d629e0991a22e4bc9ca96470ba455f750628c616e01536c5a6555fefb0c3469bb49ed275bbee7dc73eef5bd0fe086e61118829026b71529b7efae59088e00112891af67dfa6f6c5575f2bace5b955fe399d2cb7cb59321a4904ad591c65454a3a9c5525267cb8f2bb49c9aa02958c7564a28ed1512ddd32faa66519baa94b1a27693ca3f98d24ff16a2e0c35e6f2fdd4d184b52820acabb986587f7de9dd62b4a764db0e0bd978a3d29c27baf6a1ea70c2341593e5af952bfe2a45c930cd1543a782246e1a79799bb1465dd4482ef2826086356e5a27625536096c734a9ca262b183e80c6e5b30bf09d993309948f478a3f9e3aebc9d80fde6fb890021b0571c50f3c77f1e5437dddacd7bfefb38d32f59673655312ccca886f94cb53c773943de56705a14e46cab1b2f44e1c4ff97c75088dfdc991b2a151735366eedc0d14154265399dfa4ea0406937225cd0bc311ba03025b5d1c776baffff614d400271d206d77d68217500ed300efb381ee8661843128683b06f223d84d83688118504499ea8b3372c94b31c45da00e13036f4580bfb8669f509b2427d601ba6a11a24c2aa6a6033b6c1ee08dc97549013ca0bc669db5470e9b981b30ebcd562320e9ca68c1855a93869cdd5453cf729649112f44a5dbb3a4a9954aa7fc85d048e379e04ee85d30ec58c24086ffd5b3916314a39916854a28c0852ce5944ea5d58fa6ee02e17e39964343f7db6477030fcf1f04408b645d365d19c2070e78e1f8ce7678d873de802a55583ba6b2f40831aec40ad03fb81aa0d557da81a5d08e177b0dbfd924439da6d5e70be72bc2bd03e79242625c9f1db",
      "bf2ac14de0ad05ddaf8b84ca85912a72d20495238479ad814bd28e12cd6a2f07f6c0366dd0804bf16fcc860373dfb33a479d916424178f05b5eb22eb6cc52a7e00c9a09c8085dc1619fd0bc2d2f796ac040000",
    ],
    [
      "ETag",
      "PKF9VJS2p6OQ6rzHCOyOLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "bfca94bd1c4476fe07a9d2a04d5b344a3b4ab71753854c7204531367b6d30e55fdee73d229813563d037e0e77c8fb8df9d6d9e8d079a2546cf98d3f4670162f33105f5b55c4c40164c49fd95f34c82d13140915467e2e9b7bb95257154dc5c459751947e7787abf4e44467c878096b62f49e8d05059648a3f7e3d9c8c81ab48d263a416df2723d1c4fa38b68a2036b9e9481f1dd68d41f8c22e3a5531b481cf32253b3a38d0b2aa49a55a236de4e27c3f1c57e1f23efb26962ca8eb3a49025208ef3d07c469244809447fab89c913c6f4c83ebeb51d41fffa7f95922384ddee17ca4c73a987a6c1ce7a3ebfe747f7e42d4d688cefad3687fbe5464bd55d3747815dd4efb5737fb5db3d9f2697d48abef5f3ac68acf27b00001590ce5f1cf055f41ac86e5cd92fad71974252f440ce5f07472b5910a5ee44470ded591aed3c59eed39beeb798eedda3a8ff19828ca339d7a77ab4b331457844df893be5786a31344b5d4576c517d3eeab05f21942bab5e5d024b49adbe30a0b256cb87527a9fe15755a519f375bd77ae4f36835a06ae6939811998d80deaa012051c201ce49bc86d6a4316ea22ab8b9a72b1e90618f9be1b3a51d892f8015b3d6cf7b0f309a1aae7dbd4410bf50508459b0a4e8b3955aa96695c69ff10706cd9a6e5ba26b691ee401d5e1026e11f6a073e70b0e9b4c007bbf07afc613b7cb0173e6c811f15820164b51ee8a3028cd59acd5f03c121fc968df5cc4353b7c0b1db11f7f5c2d3edb39db754e12ebee522bb1d3fdc8b8f51ed688a3be3422d37b51c4ac59b6624b494e121e84e79e6b1e939a69ece21b3deddb24264baf61ba2ad922b74dbf6fc56748cfe46bffff30a0c360ae48de0fa4591503e26e8f56139e525927e1f7b",
      "65591d2326fa2ff992aa57fdf21b35f133e7ef070000",
    ],
    [
      "ETag",
      "1TVUj2s1EuPMEHEEgW5Ijg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "00",
      "00",
      "e0bbf4590d8832d99b20bf0e07055a782295546d5028a506bb65779fd935e67787ef1b90a6a1e358cbbea51d78078a2cad45b3d8f38ded4daccec7ed7d67a4590f4d098f4bd47efae1479691a1449b34f15645c3dc7d32bfc4c430ed6aaf9138ff42a57e922b4107be9be302bad948ce9c3d6c17d304964919968a317544016e1d959b7939d5ba68a650d3fc40f7bbde89d840d28edd048216bec2ac42f01e9b9d304ed3509d93ce25c1dbb18059774df1617ca4708de25645d316d3ad9820ad447bf0146ea45344c6a5be7121992db9ce9d7ef1f2f27f8119a00fce041d6bf6dc6eac2d6b06feead75271fafc6f5322a8003fbfc152cdd219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f795be68d3b495aa5195303ab5e996a4a0699a22dbb9c90c695c6c07d6a1fef7dd38948190e0536cdf73ee39f79147722bca944c0813f95d056affe946327242c0d01c5ff7a38b1bde8daabfe1d7a2eb5d2dfff4d8baff309d2242d42c4db7bb025a5a568a839e6ca276ae64b5a34aca16266ab9addeb03f1c78ee7038e8bb7da46928b2a5286f91fcdb989d9e743a47e9762e655e00dd09dde672fbfcdeb93fedec94bc016e74e7b562074574e75dcdcf85e4d408594e3711ea571a54025b2a0a74f09f98b2b3d799db826edb3982ef0507cab9ac4a53bbc2145c9699c82b65b392c923b12e5f1c48e42ffd79ec705954db3229e9164e9c941a9a98fd0e9c8b70bd7216c1c53a5ccde2c53a48a2f9a5bf9ab5e7ebe5661544cef5a51ffa8ea1ac00cb75a6ce99bd057841fd14b411a5558febe75af9a93f8bb743a90928ada109265e77487ba3ee9865cce3d9a8efb2ac0b8c8d98e7d23eebf2f1000629038a3c2b6a59b494a5cb3973a9db4b78d71b278331a309f5c04bfa2ccb78968d86639a92c3097950c2c0b9d03ba945d321721d2e623f89c34d309fc5be2d21a35561ce1b6375012f3d1a2c1041efd474a8a342a252ddee4510fbe16c1e2faefc66c24bc829df477738e38c161a104d1536cf805ac9141b4682d9ca3f47b09dd8b7635093c9cf4752f7bc76f1a2e5cff4180758db35f64ba2385c045fac9d23e28a169585dc3707a2804b95a2e7c32fc4e1863639c8f78d1ffe20cd5308192828f9c7b344b00d7cf49f1db71ea1b8f7a8a20dde7171b8ae35b882668184adf5993df67a6362c1cabc898d4e4f8f2dab73d419610ba5792aa8d97aacb311abf433088338fbc0b6eaf00f7f111c0e73040000",
    ],
    [
      "ETag",
      "y8Fjc0SuzRJl07VLx1bO3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d93516f9b3010c7bf8bfb4aa446013a21f581acd99689261da10fd35421171fd4a9f131dba48aa27cf79e69974ded24fa0277e7df89bbbfff1cd8a3d48225ec5e36bf7b30fbb306dc0f1fe4607be52cbd3ad41658c0c0f186c8ddf74c6e564f8fe14f9d6f6bc1a345b8e7e9e52511b67a8096b3e4c06a094a5896fc3a30cd5ba0b60a55dfea72c802e6f69d2f6e8a7cb9fa4a798bc2e7abdb2c4be7d9821d8353a3e08e9703ff81b6bb63c0b6789f430d0674057e96cee0162ab7f46b5ade760a26167b538165033c1c3406fb8e1bc4095526d1641acfe2f0228ae37016cd885358712751137abba1f19843c7558e4fb4249b7ac20c312d5c0fcf1dd5a51816f1e17255c4e130dfbf00af2aecb52b47c15a1aeb5ec4fb03be8af09654fc8320dd94546350035a8019a3645772210c583b4aa22d79d79db0f97a9dbd57450b83528c833b390228b73b015fb275fa3f69c95f7fb5ba4a8bc53bc23a72cd092996d78b4d915edf78eeeed508f3bd037b63904c65c1fb697a1e7e8a2ee2f3178b7d466f3bfa4ee24c0f01ab38fd29dfa46349cd9585e33304dab9ff87030000",
    ],
    [
      "ETag",
      "vJLiSNwk4YnRjfda5E4yaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-6-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff8553db6ea33010fd15e47dd95d25c15c022452d5cda6641729971648abee45890143dd129c62936e55e5df7780a617556a9f6c79ce9973663cf3806e5891a0218a58765bd1f2fed3358f500751493278dd698c8b146f8d9be84290e4dfa894676a7674040856b304d96c73da15bc2a632a86cba09795bcda9292f32e24ea5a5dcd322cd3ee5b9669f40da0099aa75356dc00f94acaad18aaea41ba97719ee5946c99e8c57cf3f4aeee74755bf26b1a4ba1be56544144a8ef6a1ee73c2692f1e26819807e2568b9a21bc27270f04c4ca26faf33f718d9f43200ef584c491cf3aa90b52b4811f3226559553659d1f001352e5f5c50e04edd71a87ced28c168e2aec6a320fcbc161204d60a114a10fadefcc797faba5eadaeee366b65e22f66cabaa4312f13b1562e7ebabeab1c287f2a8c0d7aa41c2b0bffc4f595ef974fa15130ee286b96343765eacdbc50d13056169349e0860a06bb091592158dd9904439ad8d3eb6d37bfb8735814822681b5cd9d8229a8307511ad971ea18fd28c5348a9cc8ee1323c2f1c0a4661251023c59676f58a4e005d14dec244edf22b66d0d6cdd321d3dc156df706ca33f30491aeb8348d72cb4efa0bb92497ac2c4960bd636155df85ee8ae427f391f8f42b7292325552e4f5a7375112f7d4a281240efd4b5afa38c8352fd43de3c74fdd138f4cedd7628a63423f17d700b6391925c504093926ca8a4e58c27d03474ba08bcd05bcc475360343f7d7a400834fcfdf04c08efb74d976573a2d09bb941389a9d361e0ea07392570d6ad75e908e75dcc57a57d3424d1f6ac650337b18e35f68bfff0b4418ed362f3a5bbafe256a9f7c9ad29216f1c7bf0ae026f0d1821ed605a0b030a0029326198c502c6a8db8a4ed28b14dede5c0b6715fab870dc0a57c13b31cf3d0b33a479d916e68211f0b6ad705ea6cc52af10482204cc01cb605a2ff018e13f576ac040000",
    ],
    [
      "ETag",
      "v1iosf0p3kbWsadxArtQ/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff9d93df4fc23010c7ff97fa3aa2069809890f43072e9980633c186396d21ea3baed46db8184f0bf7b53033ca1f3a9f7e3fbb9b6d7de8ebdab42b21e9bab745581de5ea4609f6a23025365d6d052626180390c2c4f49b9f9580ee287b658e5fd1b087275b9889fd79bdb5b5218b1849cb3de8e2d1464d2b0decb8e153c07c2942481dd96b51d8c627fe84714c851d681d12c0cbd7ee8b3bd7300b810581536690c2e943636f9720ee0348e82d1f03c97f17f617463953543522824e8668c2a132ea506631a7268125e9647a83f1e87be37faa5f985d4a8e43fc8b56a4a64767d2406e1d88bcfeb25b7274f74efc5fe79bdb13c3f39531c3cfad3d87b9c9ca79264b9c9ffd2ead7bdc3de701ec102341402eaef5f6a7c0361837ab20ced9e41cb60a505d48f47e2af44aab12ab9466c51a4e5b6aeddb6dbb9e9ba6ea7dd6d932e43c1adc282a4b3291d8d59b43c8b704373c5aed88fdfdf5a30138d54db80fcc950c13bacb7a54ef5acaec06182d3703e28fbedef3f01e7ff85f3f9030000",
    ],
    [
      "ETag",
      "wxhFTH3cqmB7eImi/fTYvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bbe4db3042b40dfd63d1a2b8319462fcc93024c86e0c288bd3bbd7e935eabbc37b80288e79d3d0f652f01a7c8021d27425565c81cd6597d675b4656251c58e658dc952238d4754efbe1adf6778c1d43228cc39f3dffa3ef072bc333cd90d711ea662df642e0cea1b71d31b677bbcfe2e50356e446a40ad63cc1a92a96a6f6bd8c36115ccc212425c2d3ad1d1f525336d1fb14db9b6369aeacc0c171fc2c3ca3502768212efcee84e559ae657ffcbb2475b9eab63f9999f92cc2199bc4557d67a07cd9dea32281c4674744d3c744c7ceab4c4181da4bcbcfc5f6002782f32c91b9a3db7a3b9ae4fc05f7dda0e823fff9b3c925c829f5f9e1e11a219040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbdabc809010295aa394ae9112d20169374d13b28d616e094e6d93aaabf2df77314d97aa52fb09dbf79c7bce7df08cee7995a10922bc78a8997cfa7227083a434ce3025e57c1b8f2faf1dab669965cef9d1fceeceff8713a05046f580a6f7725eb28514bcad46413770b29ea1d964274205167d419788ee78e869ee73a4307688a95f99257f740fea3f54e4d7abda374b710a22819de71d5a562fbfadedbdbbd9d14778c6ad57babd80311d5fb50f36b2928d65c54d34d0cfab56232655bcc4b70f09f9891f3b799bb1c6fbb0580f79c324ca9a82bddb882145454392f6a69b2a2c933322e4f0e280e96c13cb1a828eb6d955678cbceac0c6b9ceaa71db32ea3f5ca5a8497eb68354b16eb308de757c16ad69daf979b55185bb7574114581a939219ae35b5cecd2d840be8674c695e19f5a4796e945ffab3783f948600d28ab5c174d4f7f060dcf7494e46341f3b4392f7192163321a6287f4a9ef3237230c03cf881a16aea06632c8fc414ed27ce4bba9ebd9594a5c92a7d41efbbedb1ffad4f3d0e10c3d4aaed905573ba178db21741b2d92204da24d389f25812921c775a92f5a634d01a71e351408a00f6a3a34512e40a969f7224c8268364f1637413be1252b307d8a1f60c6392e15033496d03ccde44a64d03014ce56c10580cdc4ae8f418526bf9e51d3f3c6c549cb5fe9090cb0b1abcd17c549b408bf193b47c40d2e6b03d9b7072419153203cf87df80830d6d73a0ef9b20fa89daa788e54cb28a7e3e4b009bc067ffd971eb010a7b0f2a4ac31d1687aa46834ad62e1037b51ed9a381ed0e91014bfd2ee60ced63cb9a1c4d46b665957e29a8dd7aa8b315abd52b088230fbd0b4eaf00fcaf011a673040000",
    ],
    [
      "ETag",
      "ME8n60SO22cdTPv3X3Az8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "301086ff8bf79548cd206442ea8764cd3626923409952a4d1572ed83b9331cb34db628ca7fdf9976d9d456a25fe0eefc9cb87bfd72643f542359c2ee55f5b30373785781dbf8600bb6d3ced2abc5c6020b18385e11f95b8f5762f9fe2ada84e96d985778fb556eaacb4b22acf80e3567c991950ab4b42cf976640daf81da04eaae6e8a3e0b983bb4beb8cbb7e9ea33e5354a9faf6eb26c36cf16ec149c1b2577bce8f937b4dd9d02f680f75b28c14023c0cfd21a7c00e152bfa6e575ab6164b133022cebe1fea032d8b5dc208ea8329a8ec6711847d3491c47e124244ea3e04e6143e8cd8ec6630e1dd75bfc454bb2b1274c1fd3c265ffdc535dc97e111fa6ab3c8efaf9fe07b810d835ae18044b65ac7b14ef2ff824c27352f3378274534a0f41153412cc10a5da824b69c0da41126dc1dbf68ccdd7ebeca52a8d34a8e430b857038076fb33f0295bcf5e9396fcf54fabab59be78415847ae392379ba5cecf2d9f2da73774f46981f1cd86b83642a0bde4fe38be8c3641a5f3c5aec237adbd17712673a0898e0f4a77c518e2525d7164e7f003755681787030000",
    ],
    [
      "ETag",
      "xl1NcM2D4Q3IX3TgoXJdQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-8-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "14",
      "fe",
      "2b",
      "91",
      "f7b24d5c42088422551ba3618b44614bc2b6f6051ce724f59ac4d476caaaaaff7dc701ba5695da37eb9cf35dcec5f7e49a5729199384e73735c8bb777f44425a0434cd317ae35f2e96d74e9afc9e5e0efeeee8b7cc8ee9eef4142bb841295a6e0b682b514b066abc8a3ab914f5964a21da48d41eb57bc3fed0f506c3a1db1ff411a6a0c8e6bcba46f095d65b35ee768fd29d5c88bc00bae5aac344f918efde3addad147f8069d57daed84511d57d55f3532118d55c54a7ab08f56b05720d25e5053af80f4c93cfcf993b9c969d1c8b6f3903ca98a82b6d5c21051355c6f35a36ac647c4f1a974f1e24f2e7fe34b63eb6ac6832f3d7d34914bfdf288d021b8b2a2b8ac360f1f583796ed6ebab5db9b166e1f2dcda486042a66a632dc3333fb4be5c5847d4249ab6ac0d4f9b97350fce83d872ade56c16f9b165a3a91494e6556329a64901c6ce6168c1cb4d1900d554c13eb9f6ec21ed8dec93244b3c968dfa8324b32149468937a0fdc466272eb869021471dab037285a89aa8793b64f3ccf7346f872ed9e03699f0e00c13d646383c410b8943cb4c84e720d675c6d85e2fbd1915f6110fbeb385c2da693d86fdac8685de8b3bd39d3c4539f1a9bc4a257fa7a30592e50c9ec2158c47e3899c6c14f7fbffa39e494dd4537b8fc8c160ab09a4a5a8206792e521c1af9be8c8238582e2673c385f714df6d4dfcc7ca0f2f0ea110329050b1b7878cc54de2ad5f71bc512cc52b45155cbbe6b851a68c0693b0df2c2f8d9723da7370f4a42996fa45ce7146987bbc4dc3082554fad0d0fe46c9c341ac568f4598c4852cf04431fb0f1c9f683f21040000",
    ],
    [
      "ETag",
      "qEZNOk2dbXCZ5xwaHf0Taw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d55616fda3010fd2b53f6b160d9b11312a44aa35ddab101ed806a9aa60ab98949439398d9860e55fdefbba46d086ac64a3f84f8ceef897bcf77ce837597e491d5b56e92f8f74aa8cdc75898efc5622cf42a351a5e4b996b61b52c61780c482cef94bf1999b57b949e4d7e7efb112f74d63b3e06840e6f45c6adee83354f441a69abfbebc1ca792680964400309b65b1ee8fa6c17930864426a32231ba1a0c7a2783c07a6c55041e8672959bd9c1c479a2b4999541459c4cc7fdd1f97e5ecadf4503c5497a1825167924d4619c6439e351a484d607f2a49ef1e5724b3ab9b81804bdd17fcccf232593e81dcc7572282335eb2de36c70d19beec747dcd48ee8736f1aecc76bc3b35a4dd3fe30984c7bc3cbfdacd9ecf63e7b8bd5d78f2d6b216fc6622e94c84351b4ff52c985084dbf982c0dff9e8ab6962b158ae2f0005c6ec44aae965c49d9864cdb6b1397baace3b82ea30e055c2a436e129903f46a02a559461a9e8ee53dcc95c500a0ca258cd8bcfc5d439a94127657814a44157c156a2d135dc562f194c09fc49fb25014caacda1df2744b250eb25907510f75ec2a69d46a8b98f3548be62ddbf111d9d26c6ce336b6dbb85630723cec383ef159e037003f10bb4b6897b0238c4bd7ebbaed06dda73c4cd29af4a0e89b972014109146d16730d169bd728a08731123c8ae95bb47ebee96cf10755febb17785bb0ca433a749b95d29470ec64dea6983fa73258c486ba15c8532bcab1271fc9cb1df640221c88313241811ca0e3e7dd7f5107dad8cee7ad0a1c4070fdc4e930bb4e682db69728135b8d0cbb8e1db8e9046e8b9545195e1e14b8abec506e253e4c3146078dc66a9ff0e1818885f0b63bb2678c4a3a5095e930b6cc705af6a87ebe7dbe16403722e95849b468be292c14f17cea92ca441ff778b925a56c8e153fd25314ff1e35fecde3a1c07080000",
    ],
    [
      "ETag",
      "0okr9yNtv6+lFSYKWgjsmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "56",
      "82",
      "30",
      "00",
      "00",
      "e0",
      "77",
      "d9b5700ac258770c7f406560a2ab6e385336601b8582e2e8f4ee797a8dfcdee1fb06f470606d9b755f927d8217a0a905cd83b96c5c34eb2b6e27530fa2a36a92277f552e24deca45da2a3fcab0ced506b969c7821895ac70c60893ae162ebe789570e634d1c27f46162c096367017155da90f4f13b9a0646fed12a48a3a20bfb30aecffc38ecf8f671ac8357fd90e90b2f64b0e233b28cf337cdceb498372b495cecdbcad9592215c35028635cefa7f5ccebfa49d0bbe1b0c79e93af7b0ac3c93a8ca26d40b8a732694912ba1ba321c73231847977f77f811160d7a63ab136ab6edb6d07c211f8ab9f75ba61b7ff88d1133b819f5fcd78cdef19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "91f75a2014020109ad88a68509c21a42ab6a9a22dbb9c9dc8698da4ea7aae2bfefc6295dab4aed536cdf73ee39f723cfe45e9429191326f2870ad4d3b73bc9c8090143737cbd55ec7a3a2fd8fda53bba736f7eb02ccee75793092244cdd274b72fa0a565a538e8f176d3ce95acf65449d9c244ad51ab3be80dfa436f30e8f7bc1ed23414d95294f748fe63cc5e8f3b9da3743b97322f80ee856e73b97b7def3c9e76f64ade0137baf35eb18322baf3a9e6f742726a842c27db0dea571a54023b2a0a74f09f98b2b3f799db82eeda39821f0507cab9ac4a53bbc2145c9699c82b65b392f133b12edf1cc8265806b3d8e1b2a8766552d21d9c38293534314f7b702ea2f5ca598417eb68358d17eb30d9cce6c16ada9ead97db55b8716ee641143886b2022cd7993867f616e205f553d04694563dae9f6be597fe2c3e0ea526a0b48626980cdd01edfaee88656cc833bfe7b1cc05c67c36f4688fb97cd4877eca8022cf8a5a162d65c93ce8bb3cf513eef5fca4df6334a1a73e4bba5e7fd865aecf062e258713f2570903e742efa5164d87c84db48883248eb6e16c1a07b6848c5685396f8cd505bcf568b040047d52d3a18e0a894a75bb17611c44d359bcb80e9a092f21a7fc69f38033ce68a101d15461f30ca8954cb161249cae827304db89fd3c063519ff7a2675cf6b176f5afe4a8f7180b55d63bf6413478bf0d2da3922ae695159c86373200ab854297a3efc461c6e6893835c6d83e896344f1164a0a0e45fcf12c136f0d57f76dc7a84e2dea38a3678c7c5e1bad6e00a9a0512b6d6237b783a1c79c48295f910f347c363cbea1c7546d841695e0a6ab61eeb6cc42afd0ac220ce3eb4ad3afc0390ee843273",
      "040000",
    ],
    [
      "ETag",
      "YrbVAHlbkG09j0WJbfTgHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8d93616f9b301086ff8bf795488d027443ea07b2656b349a64844e93a60ab9f641dd198ed926551ae5bfef4cbb6c5a27d12f70777e4edcbd7e39b01faa952c61b7aafed983d9bfa9c17df1410eb6d7ced2abc3d6020b18385e13c9f347a5be4626ba0b3f2fa2eadb83bcdcc4e9c5051156dc41c359726095022d2d4bbe1f58cb1ba03681ba6fda72c802e6f69d2f6e8b7cb9fa447983d2e7abeb2c4be7d9821d8353a3e48e9703ff8ab69b63c0eef136870a0cb402fc2c9dc17b106ee9d7b4bce9344c2cf6468065033c1cd406fb8e1bc4095526ef26d3781687e7511c87b368469c46c19dc296d0eb2d8dc71c3aae737ca025d9d413668869e16a78eea8aee4b0880f97ab220e87f9fe06b810d8b7ae1c052b65ac7b12ef37f82cc2bfa4e6af04e9a6941e836a682598314a752597d280b5a324da9277dd099bafd7d94b555a6950c97170a74600ed7627e063b64eff272df9eb8f561fd262f182b08e5c73428ae5d5625ba4571bcfdd3c1b61be77603706c95416bc9fa667e1dbe83c3e7bb2d87bf4b6a3ef24cef41030c1e94fb9548e2515d7168ebf000860264087030000",
    ],
    [
      "ETag",
      "aRziiV5r5h4KE5fXwdHP6A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-10-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b",
      "40",
      "10",
      "fd",
      "2b",
      "68fba5ad7c70632c59a9ebe006c9470a38517ac85e60219b004bd8258722fff70e1027a922259f76b5f3debc37b3338fe89a16311aa390a63735a91e3e5db110f51011388557a554ef6f0aacd4421c63eb44f166f7aa7a37990082362c8ef332237dceea2a227cbcf10769c5ea12578cf521515f91fb8aa999ba6598a6ae191af038c992052dae817d2944c9c7c3e1417b903296660497940f22963fbf0f6fd56159b12b12093efc5f72082a7cf8bee851c6222c282b261b1f0cd49c545b92639a818517661c7efb3ff580e27c9002f89646044711ab0bd1d88214112b129ad6559b158d1f516bf3d505f9cec29905d2d79ee44fe7ce7636f583cf3b2e406027612ef981e7ae7e7c69aebbedf6f22edf49736fbd947615895815f39d747ee2788e74a0fca965592313e9485a7bc78e277dbf780e4dfd594fdad1b8bd490b77e906922eade773df092419ccc6840b5ab456031c66a4b1f9d44df7ed1f36042c30275d706bc9265646b21d26a1152523cd08139984e128b40cac857264eb448f438281279aec2d0b17acb04d4d91a1712362c4b1ad9a3230645596e53809639d9806366cd5d66cb4efa1bb8a0a724c79c938ed5a8ace3d3770b681b759cda681d39691e03a83316ccd3545bcf629a04800bd53d7be8952064acdffb8abc0f1a6b3c03d73ba91589014470ffe0d0c4582334e008d2b9c1341aa258ba169e874edbb81bb5e4d17c068fff9f480e068fcfbf185103c946d97457ba2c05d3a7e305d9eb61e0ea0339cd52deab6bb2015bad397d5beac078a3a56b4b1a20f0cd3fa85f6fbbf4084c9eef2a29f1bc7bb40dd934712529122faf85701dc063e5cd0c3b60016f6056460d00485198a78231255a49b259a",
      "37660e6c4b33ec66da005c8937314bd10e4d6b723419494e0af15451b72d50682756f3671004610456b02c10fd075dcaf998ad040000",
    ],
    [
      "ETag",
      "1p2xqna1uttDa7H1RCx22w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fd",
      "2b",
      "93f7489bd9f94e25a41508ac5b29d01669d2842ae3b8adc18d33db8521c47f9f1d206921eb5a1e9ade7b7d4e73cfb1affb086e599e810eb866b3df4b2a1f3ecfa8beb0c190aa25d7ca7c15225714b400d57866903c24341ded155fd40871427a3f5de45d5fecef1b842273bac0a0f308a68cf24c81ceaf4790e30535349619807e286cdc1b8cd39374680a0b91d9c2e0b2dfef1ef453f0d4aa089810b1ccf56467e29449a52765521147e3616f70b299c7f187684631e3bb516634cfa8dc8dc38a09ce324995da9127d40417454d3a383beba7ddc17fcccf332958f601e61ddb95c1f55dcd38ee9f75c79bf119d62b5b74d41da79bf14ae3c54a4fe3de693a1a774fcf37b32693f9fd621babaf9e5ae0465c0fe9944a9a136a8f7f21c50d25ba67274b99b773da56622909b59b67c0e5c24c8a6581a5106d536923d846a117fa511086be177806c805c19a89dc602f47a637a085c67c28eecd6001df0064199a199b96cfbbb26c35d8085551778135aeb243a1a99a0a9955154c5e4bde57faa76cd7216251ad1f9b23ce69fdc389e7248eeb43f309abaa964bba45e2c78903abcc852e6c43b70d57da768218c628f6123f08a3384d1ac09f90db415e07f98e8540b80761b90fab460435af8afa4cd63e7c17f35c69e3ee6b81dfbc54fc6d5c083c0785b65927a95b9c62aefe217c7d29762dfdbdb460dd8704fad1b30f499311c1ba1149a31161831147346755322298b3da974c9579b0d551f0620779c8417eec44fe36c2d796dcc89ca4f8bdaef08d0b094289df64405819d0a43c6a50fe8df259adf507a74c55d9fcd6a6e136c2e3c01cfed831ea83b859db86118091b3b2d19598684d358251",
      "1434ab8edeaabe7ab91a0e1ecc1c9f4b61ee1945ed15039faf9b4361f5985bb3631b690182cd1ff537a69ff3a7bf527b5c1205080000",
    ],
    [
      "ETag",
      "l6ceES+p/sS1lccIX213bQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "0000d0bb64ad8e1f50e82ee15788b52841281b064204058112f988d3bbd7e935eabbc37b808852c67978ab72568237708f96f28cce702d21bdbf0847fa7154892625359cc7edbdd4cc320cd4b5a928f08b88dcdfed8959792e92f1a573368576c87bf124a899ef8cdb3d7c37b21daeabb5bf5595a583337f1a17626f20bb9f132e16368ebb1ca688168e401731424a2eedb54313916b3bb838b161ea1ae6a51d0457efadaaf086ed090e28b9f2d0b42dcd3a2f460ead848e9f37f7b8ecec4d277552f01d3963e88df9904be830b67ea597299e922676c92a98bdbcfc5f6002d8509f1bc6c3f373fb4a94e509f8ab1fdeee357bfe472c6a58037e7e01532a666e19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "53ef4fdb3010fd5722efe3689b92f4a7548daa04e8d4a65b9ac2a6698a1ce7120c495c6c07a850fff75d1cca4048f029b6efddbd77ef2e4fe4969709199398677715c8dd971b119323029a66f8fa98ce96e7fcfbeaebeea1a017ceaf6c78767dfe30992082d7598a16db1c5a4a5492811a6fd6ed4c8a6a4ba5102d2cd4ea765bddbed37707bd7edf757a0ee629c8d3052f6f31fb5aebad1a773a07ee7626449603dd72d566a27879efdc1f77b652dc00d3aaf396b2832caaf331e9b75c30aab928279b350aa814c8080aca7394f03f33894fde966e735ab43304df730694315195ba9685259828539e55d25425e3276264be3a90b5b7f066a1c5445e156554d2028eac846a1ae9dd16acb360b5b4e6fed92a584ec3f9ca8fd6b30b6f396dcf568bcdd25f5b57175ee0599ac639985c6b629d989b8f17e44f40695e1af6b07eae999f0d9abf1f4b9d80d40a9a6034b0fbb43bb447711a0f583a747a716a431c0fe3418f3ab1cd462eb8490c14f30ca9c9a2a528e3c4edd9a3248d86b46747ee71cca2115a1ca5c36400b6e3da4e3220fb23f220b98653aeb642f1c6217215cc432f0a838d3f9b869e6921a555ae4f1b617503af356a6c10411ff4b4afa35c20536df7dc0fbd603a0be7975e33e1056494edd67738e394e60a104d259aa7412e458286117fbaf44e116c26f6e3105464fce789d49ed72a5e59fe921ee2006bb9da7cc93a0ce6feb99173405cd2bc3290fbe64024302113d4bcff8b385cd1a606f9b9f182dfa4790a20050925fb7c960836814fffb4c3da2316171f6994c63b6e0e53350993d06c1037cd1eb207eef1c8fca79a4afd2ee6dabd8367758dba221450eae78e9ab5c7461bb24abd803088c3f78d57fb7ff59b469d76040000",
    ],
    [
      "ETag",
      "xfCMGiJO+ywmaH3Xg8FhGw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93514fdb3010c7bf8bf79a4a446d038bc4434bbb3528b4d006ed614291b12f9999e3f36c275355f5bbcf0eac9b0029bc2477e7df29777fff73203f85e224258fa2fed582d97faac1dd85600bb695cefa9746658144041cad3d59e87c114bba6a56dd055e5f77dfae169fb3bbcb4b4f58f6031a4ad203a904486e49fafd40146dc0b731946da3ca3e8b88dbeb50dc15db6cfdd5e70df290afeff37c36cf97e4189d1a3975b4ecf90fb43d1c23f2848f5ba8c080621066d1069f80b92cac6969a3258c2cb68681253ddc1fd4065b4d0de2c85746713c8a937132399f26c9643c1d7b5022a34ea0f2ecfdcecf471c3a2ab7f8db6f49e240983ef61b57fdb3f375c1fb4d4298ad8b64d20ff83f4019c356b97210ac84b1ee59bdbfe08b0aaf49493f08faab127208aa4171304394d025e5dc80b58324da926a7dc2e69b4dfe5615c50d0a3e0c76620090ae3b015ff2cdec3d69bdc1fe69b59815cb378475de3627a4c86e96bb6276731bb8871723ccf70eecad41ef2a0bc150f1d9e4627a9e9c3d7bec0a83effc7752675a8808a3fe57590947d28a4a0bc73f5f29251888030000",
    ],
    [
      "ETag",
      "TpLD1laHmHv8oJJvWCD9IQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:34 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-12-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "fbb24d4d629e4923455d9a928d298f0e48b3eea1c41887b9059c6293aaaaf2df7781a60f556ac5072cdf73ee39f7fade7b74cdf318f551c4939b9215771fae44848e10532481dbe5295637f39fc49e2eb3d3dda5fedd72e824190c00c12b9624d936652d29ca8232d95f04eda410e5961442b420514b375aba633a56d7761ccbb44de049966e263cbf06f63fa5b6b2dfe91cb4db891049cac896cb3615d9e37d676774b685b86254c9ce4bc90ea8c8cedba227a9a04471910f16011828252b562c233c050b4fcc38faf232759b93ac9d0078c72923948a3257952d484145bee14959d45951ff1ed5369f1d50e04edc51a87d3ed282e1d85d8d8641f8712d1508ac3522b520f4bdd9d74fd571bd5afdbbcdd6dad89f4fb575c1a82862b9d696df5cdfd50e943f25c6261b6827dadc3f737dedf4f231340c4647da9ac7f5499b78532fd42c6d3e1e076ea861301b33a9785e5b0d4994b2cae64337bdd76f581188229235c155173b44efe1e3681375e9a667dad106b328ea455d9b9811a6c716b3e28811e0a92a7bcd22b9c8b18db1c5887d1ce9566cc55dd6b36393c0671856ccba44b7759b3a0e46fb23745b70c5ceb8dc0ac99b96a2a5ef85ee2af417b3d13074eb3236a44cd55963ae2ae2b94f054502e88dbaf655940b50aadec79b85ae3f1c85de85db8cc4842584de053730141b924a066852908c29564c450c4d43e7f3c00bbdf96c380146fdcee7078444fddff74f84f06e5b7759d57f147a53370887d3f3dac3017441d2b246ed9a0332b0815bd868e16ea81b7dddeceb561b63fc0bedf77f810893dde4453f16ae7f899a2b9f6d58c172fafeab02b80ebcbba0876d012cec0b",
      "c8c0a0290e33446525420bd6cc12cf2a330776d7c63d0bd5e042bd8a198679685a95a3cac83296ab878a9a6d81421bb1523e8220082330836581e87f92d93f0bad040000",
    ],
    [
      "ETag",
      "WB0tqOXa5MWmBvY1J46cLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff9d956f6fda3010c6bfcae4bd2c4476fe9120551ab494a251da512aad9a2a649223b835716a3b6d51d5ef3e279d02ac1983be013fe77bc4fdee6cf38a1e581aa3369ab1e43107b9fa9a80fe512cc6a072ae95f9ca44aa003510689a98cc9f477afcf0d8e98f6f57b754dcdcf2dcee5f3c1f1f9b0c152d604951fb15cd19f058a1f6af5794d225181b8b4d825e65c57a309af4fabdb1092c455c044637c361a73beca1b74665a05124f2544f0f36ce99547a5a8aca783d190f46fddd3e4e3f6533c48c1f6649208d411ee661d994c6b104a50ef40935a559b636752f2f87bdcee83fcd4f632958fc09e7133bd4c1f5d3da7136bcec4c76e7c7546f8ce8b433e9edce579a2e376a9a0c2e7ad793cec5d56ed774ba785eeed3eabbb706ba17b331cc41421a4171fc3329ee21d283e26629f3eb1c9a4ae43282627826b9dc48a4c8332a85689a4893d84de23bbedbf27cdf753cc724721151cd446a726fae4d6d480b4df9583c9b8b855c9320cba5b963f3f2f3c9845b2543b1b2abd539f08456ea3b07a62ab57828a4ff0d5eca32ad482cabbd3373b4395432f02cdb0dacc0225e5005b5cc610fe1e29685bd756dd8c64d6c37f1ba5c627901c1ad9617babdb026f10bb1dbc46913f708e3b2e99bd4410d751fa466eb0a4ef219d3ba924954ead63ee0c4762cdbf32ce260d3812a3ca75cc13fd4167ce012cbad810fb6e1cdf8c37af860277c58033fcc2507482bdd35470538af349fbd07827df86d87989987966981ebd423eeea856fdae7b81fa9c26d7cdbc34e3d7eb8139fe0cab12eee5448bd585572a0b458372366850cf741778b334f2cdfb5cc74f699f5f6961d62cb733e106d945ca23b8edfaa4527f86ff4bb3faf4077a5415d49619e1405c56b82df5f961351209907b25d94d5401135ffc9e74cbfebb7dffac7987df0070000",
    ],
    [
      "ETag",
      "X+tRkqAGRYyYaoUYlu2GMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "7282300000d0bb64ad0ce19fee804aada4820a826e9890060d9f8a7c44e8f4ee757a8dfaeef0be01a194b56dd25d0af6055ec048242450c1ad0dcb19f2788fd1dc37d25eaaf011b68775e6d17191a35acc6e9614c1f4746445b95add42c5a08ae62a7ca74ddde7f2ea8ac1c1edd5686be8e26db1f4b1bd4bb40cf6711785f9c6894fc924ea1e31dd16d94e400d72d7d63ccb2fb0d05f03986a1d142b226eae7344828d51cdcbcaa39dff31c4d86eda535a0e75a94e7854bca66436377b16c66f8bf8da9c213d632ea140d575b950a77b65e277f9b2f738c7c9d15a0a4f4fff17980176af79c3da843fb6cb2a4233f0573fe9c69a3dfe5b8c34ac013fbff1641a8519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-13-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db3014fd2b91f7953e92b6495ba91a5509a353936e690a4cd31439ce4d6648e3623b2084fadf77e3500642824fb17dcfb9e7dc479ec82daf323225292fee6a908f5f6e444a4e08685ae06b3c72b6c1f7917b915d0b7b21570b1df3ebf96c8608deb014dded4be828514b066abadd740b29ea3d9542743051c71e746c77e00ebd91eb0e07a301f21494f98a57b7c8feabf55e4d7bbda376b710a22881eeb9ea32b17b79efdd3bbdbd1437c0b4eabd95eca18aea7d2cfab5148c6a2eaad97683066a0532811de5255af8cfccd2d3b7a9bb9ceeba0582ef3903ca98a82bddd8c2144c54392f6a69b292e91331365f1dc8c65ff98bd862a2ac775552d11d9c5819d534d18f7bb0cea375602dc3f37514cce3e53a4c368b0b3f987717ebd5360837d6d5851ff996a66909866bcdac53730bf182fa1928cd2ba31e37cf8df2738396efc7d210505a411b4cbcbe4bed717f92e6a9c7f2f16094e67d48d371ea8de820edb3c91086590a147946d4b06825aa8137749c3c9d248e6b3bc9904db26432a65e927940bd146c6fe8f6c9e1843c48aee18cabbd50bced10b98a96b19fc4d1365ccc63df9490d3bad467adb1a680d71e351688a00f6a3a34512e50a969f7328cfd68be8897977e3be11514943d6eee70c6392d15209a4a6c9e0619880c1b46c279e09f21d84cecc731a8c8f4f713697adeb878d5f2177a8c036cec6af3259b385a86df8c9d23e29296b581dcb70722810999a1e7c31fc4e18ab639c8cfad1ffd22ed53043948a8d8e7b344b0097cfaa71dd71eb1b8f828a334de7173986a4498847683b829f6c8f6469ee7100396fa5d6c3cb68f3d6b7234196107957eaea85d7b2cb415abd50b088338fcd0f4eaf00ffb7a52e576040000",
    ],
    [
      "ETag",
      "T52UMJ56HdXo1CrLCtTiXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:35 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d936f4fdb3010c6bf8bf736d5086dc31689172d745ba4d0b226ecaf5064ec4b30737c9eed745455bffbecc0ba69208537c9ddf977cadde3273bf243284e5272239a9f1d98edab06dcc710acc176d259ffd2a82c908880a38d275f17163e7d2dc4976ffa73569edfc2fd71fcb6393df58465b7d05292ee482d40724bd2ef3ba2680bbe8da1ec5a55f55944dc56876251aeb3e57b9fb7c843bebccaf3d93c5f907d7468e4d4d1aae75fd076bd8fc81ddeaca106038a4198451bbc03e6b2b0a6a5ad9630b2d8190696f4707fd018ec343588235f19c5e3519c8c93c9c9344926e3e9d883121975029567af0a3f1f71e8a85ce32fbf25890361fad86f5cf7cf8daf0bde6f12c26c5926937ec07f01ca1876ca5583602d8c750feafd011f55f89f94f485a0bf2a2187a00614073344095d51ce0d583b48a2ada8d6076cbe5ae54f5551dca0e0c3e0460c00d26d0ec0bb7c357b4e5a6fb0bf5a9dcfcac513c23a6f9b035266178ba29c5d5c06eefad108f3ad037b69d0bbca4230547c3479333d498e1e3c7686c177fe3ba9331d448451ffab7c108ea4359516f6bf01a60ec38c88030000",
    ],
    [
      "ETag",
      "/SseVYSiXZpWITDhex219g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
      jobId: "grouparoo-job-14-1636475664353",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "96",
      "f7",
      "b24df98040208954752c212b5a9a74405a55db148c63a85bc02936adaaaaff7d1768faa14aedc39e6cf99e73cfb9d7f7dee32b5e6cf104c73cbdae5879f7e952c4b883992229bcf2e969264a27fbe91f994976c4b8393db3d3830340f09a2549becb58578aaaa44c4ed6412f2d45b523a5105d48d4d5cdae6e1996690f2dcb348606f024cb92052fae807da1d44e4efafdbd762f1522cd18d971d9a3227f7aefdf0cfabb525c32aa64ffb5641f5464ff7dd1c34c50a2b8280ed60118a8242b372c273c030bcfcc6dfced75ea1e27792f05f00da78c502aaa42d5b620051545c2d3aa6cb2e2c93d6e6cbeb8e0c05db8d3107deda0c099bb9ba913849f23a940204244a220f4bde58f2ff535da6c2e6ef308cdfdd5318a4a4645b995113a3b727d17a1886f23f4a7d23483a143e42c672f9f283cadfc99eba3efe7689fdd09a69d160337b4f08ebd10e99a8656f379e0864803fb5b26152f1af3218933561b7fecaff7f6576b025144b236b8b1358be8236d1c27b14d9391318c138dc5f128b687c488353a3699b98d19019eaab3372c52886260d9891d9b09d14dc646439beabaa925e6c0b6c79a311e8dc764404d8326f8a1836f4baed88ccb9d90bc6d323ef3bdd0dd84fe7a397542b729232155a666adb9ba88973e151409a077ea7aa8a35c8052fd63de32747d671a7aa76e3b240b96127a175cc3982424930cd0a4243953ac3c165b681a3e59055ee8ad96ce0218cdcf9fec11124f7edf3f13c2bb5dd365d59cb5966536fa7bc029c9aa0671d35e30841f3aff95c1860c7f01012bd192f1afb5eb9fe3f6c967092b59413ffe7c0037810f377bbf6680",
      "854503199848c561d4a8ac4568c9da91e3796d66cfb62d4bd371032ed59b986d5afbded639ea8c2c67857aaca85db3ba554da8924f2008c2a42c61cb20fa0f5eb73d86e6040000",
    ],
    [
      "ETag",
      "iCVlorAlKRH4flHei4CW7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:36 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1636475664353"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff9d545d6f9b3014fd2b93f7b88070f80820551a696897294dba40b587a9422e38c49d83996dd26651fefb0c4d49b66559d217b81fe7987b8fef650dbe9322033e7820f98f0af3d5fb1ccb2fb531c5a2a252a857c90a8141076089728534e84f3a404ef8358cc6c1d025e4320ea2fce24221443ac70b04fc3598114c3301fc6f6b50a00556349229805c95b53d1cc7e17538558105cbeac0f86e340afaa3106c3a2d01a529ab0a999c4d9c112e64d2382d318aa7c3f1f5711e456fa2a98e093d8f92e322c3fc3c0e291394651c0b71268f890495e58ed49f4c466130fe8ff845c619c9dec05c927319542e778cabd124888fe33324f7ae6810c4e171bc9068b157533cbc09a338b8b93dce4a92f9d3e214a9ef371df0c81ea67886392e525c8f7fc9d9234ee5b0de2ca1be4eb12658c5535c5f9e0237899cb3aa449c314d45346869d0311dab673b8e65daa6025296224958a1b07791aa0d4826119db227b558a0ab00bc31d58ecd9ae75285eda687650378b54684a3d6f9cce68590ead0d7007ddc46ac8ff8b9a9554fd9a24d5fa9f9a6b8756d53870ed46d57f7bc36384354ec209257f81f29b75bd377251a5d4333ba9ab1abba3edaf00cabe759b6d373bdd03b807e07bb3e347d68e90dc6f86018cd3dec0be11c1062800bd23a518a28d9e99289c6b74f11019aae0e4da843cbd57bd6298dff96eaf64cdd73ffeecbf943050f42cf3a2480d30ab0edfc7e3b1bfd95c4e29633356802d73366bcccdb25ab5b526be3d78574408ad49ffa13912ffee6176895d08506060000",
    ],
    [
      "ETag",
      "0lzlDa6EWESNAI8iiCTASg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:37 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
