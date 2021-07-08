const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1625785879371";

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
      "d04b7282300000d0bb646d1da8b54077462ad50c11344871934969e463800041219ddebd4e8ff0de0f6069cafb9eaae6ca6bf00626f6ecccd339923684f782ad230f2365ba90885edf8a9844072454d4298ee3a5f6b20d914241410f7899fb6d722767d20a6cedc20853ec8b5756f2e99de2b60c9e1c2206069d331a798cdcfbd6b36aab6c823a8d903e1878e8a5b161ca37fc729d431f7f66ab809fe25d65b8a3f1c2106eb86d36c336eb2aaa4f6a3fd86df29d5caa4ba1f7e131fffa287592ef6f0ae9c49c56913348dfbbcad01dc31b56a90cc94264e30066808fb2e8784f8b0777b1749c19f8b7533549fe08809c75bc03bf7fa3cf4bb61a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:21 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-1-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f711fa489b90b65235aa1246249ab2340575d314d98e9319d238c44e5185fadf77ed500642824fb17dcfb9e7dc479ed1032f53344184e78f0dabf7dfee0541a788299cc36bf9a4bc9be06473725f6d0af2b8ff65ef36613e9d02826b96c4dbaa601d299a9a323959afba792d9a0ad742742051c7eed86703d71bb9236f3cf46ca0495664d7bc7c00f25fa52a39e9f58ed2dd5c88bc60b8e2b24bc5f6f5bdb71bf4aa5adc33aa64efbd620f4464ef53cdef85a05871514ed72bd06f24ab13b6c5bc0007ff8929397f9fb9cbf1b69b0378c729c3948aa654da15a4a0a2cc78ded4262b9a3c23e3f2cd01adfc6b7f1e5b5414cdb64c4abc65a7568a154ed4be62d665b45c584178b98c16b3385886c96a7ee52f66ddf9f27abd0857d6dd951ff996c2a460866b4dad73730be102fa29938a97463dd6cf5af9a53fc1c7a16802484bd60613af7f86ed517f4c32e2d16c347449d667848c88e7e221e9d3b1c39c94300c3c236a58b8849aed8133ca489610877a89930dfbc9387349e2d274908edd33c761193a9ca2a79a2b76c16525246f3b84eea220f693385a87f359ec9b1232dc14eaa235a60b78eb51418100faa4a6838e72014abadd4118fbd16c1e07b77e3be16b9663ba5f3dc28c335c4806685c43f314ab17228586a170b6f02f006c2676730c4a34f9fd8c74cfb58b372d7fa5c730406d57992f5ac55110fe30768e885b5c3406b26b0fba8c8c17daf4e10f006145db24e8e7da8f36a87d8a58c66a56d2af87096013f8ea473bae3d4061f141452ab8c3e650a93568cdda0de2a6d8237b643bfd2132e05a7d88b9f6f0d8339d4367645b56aa9782dab5873a5bb146be822008c30f4daf0eff004e1021b874040000",
    ],
    [
      "ETag",
      "nwt7PI+Y+jpYlbqyZ1vYNg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "3010c6bf8bf7369508d03f8bc48b741416115a68c3f66242916b5f3217c797d94e5955f5bbef1258378d49e14d7277fe9d72f7f8c99e3d292359c4d6aafcd180dd7d28c1dfb7c1125ca3bda3578dc6010b18785e12595c4d7fdec3f5a9fafa34ba4cd69b1b71137f892f2e8870e23b549c457b5628d0d2b1e8db9e195e01b509d44d65f22e0b98dfd56d71952d93f935e515ca369f3fa4693c4d67ec101c1b25f73ceff877b43d1e02b6c1f5120ab06004b4b3d41637207cd2aee978556b18386cac00c73ab83b282d3635b78803aa0cc241383a1d8e27c3c9f8e3d938244ea3e05ea121f46145e3318f9eeb253ed3922c3c23c276312d5c74cf2dd595ec1669c3649e8dcebbf9fe06b810d8189ff78285b2cebf88f71b7c15e15f52f3778274534af741251809b68f5275cea5b4e05c2f892ee7757dc4a68b45fa5615232d2ad90f6e550fa0fdf6085ca58bf87fd292bffe68751967b33784f3e49a239225b7b35516dfdeb5dce3ab11a63b0feece2299ca41eba7f0e47c321c8f4e5e2cf6095bdbd177226f1b0898e0f4a77c569e4505d70e0ebf0021109fcc87030000",
    ],
    [
      "ETag",
      "fFBxQeG2iWk6DIbjKcKAVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8553d16e9b4010fc15445fdaca36601b832d45adebe00809db2de056c98b398e855c021ce18e446e947fef82ed3451a4e4059d76777666779647f59695893a536396dd3550ef3fddf058eda920498651029976a5adb6139d5e7ade857175fd57f7b3b333ac602d4a90a2caa12f78535310b36d30c86ade54a4e6bc8f8dfac3be31199a966ddad6746419081390a71e2b6f117c2d6525669a76a21e649c6739908a8901e5c5735cbb1f6a55cd6f804aa1bd66d4904468ef727ecb392592f1f26c1b207f23a0de4141588e0afe0393f8fbebce03468a4186c5f78c02a19437a56c55610bcacb94654ddd7555678f6aa7f2c5430d1ccf5984cad79e12cc97ce6e310fc2cf9190481029442841e8bbeb8b2fed33daedae1f8a4859fa9b9512e19429cb4144cac63f777ce5c7a57282cd83454f8958d2bd14cf5db9a162e8bab2592e03275474d4958090acec548524cea15574dc9bfbd6ac164024117048ee2c7d420c5b9fc6696cd1d41e9971aa431cdbb1659251acd3e918c6490c0471b2eddea148c9cb31e8d3c988d8c49e5ad3c4c4cd93916e98898e8d26048c743c31f16ba84f3df5a16612ce99a8b86087eda97f7c377476a1bf5d2fe6a1d38d91922697e70771ed102f754a1c128bde99eba9cd328e4cad15ee3a74fcf922747f3b07f73dc808dd0777e87f4a7201584d6a5280847ac5135c9afa7313b8a1bb59cfbdb6179e54b8afdaf8afade35f1e433ea45043493f5e321677898f7e8cd39962291e2ab2a0f192a1a354b41cb48683b3ac68b59cd0f6703432d5aeb8966f7263d3c2dcf379b61da180521e073a9ca9fa74246bc4731126d190355e2966ff010176e28724040000",
    ],
    [
      "ETag",
      "aeg/Z/MU60cYLLG1Zhz0Rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d976d6fdb361080ffcaa07d6ccc92a25e0d14989db8493a27691c17c336140623d1b2125a74293a5d10e4bff7a8247aa9654dee07c7bce31d72cfddf1483f59f769165b43eb364dbe6db97afc3de1fada2c663cdf0a9dc3d7466639b78e2cae590296ff0457895cbf9fbdff8b9df9c9d978fd37b98eae3f7c008b3c5af135b3864fd632e522ceade1bf4f56c6d61cdcd2180cf4e3c6accf2fe793d3c90c146b191bc5e597e974349e4eace7a3d2814591dc667a71b0e33255b95e1442e978339f9d5f9e76fb09f64b6e409c8ac35c129ec55c1de6936e162c8e15cff303fd64be609b4de534beba9a4e4697ff93fc2c56328d7fc1f3213dd443e887cae3e3f46a34efb68f99ae95e864349f74dbe79aad6b31cdcf2f2637f3d1c5e76eafc562f57ddd27d55f9f8fac3b793be34bae781671d3fe1b25ef78a4cfcdc9cae1bf0b3ec8e55645dc140f8c8b8d44c9ed86292907a019d803e2d9ae1fb8811f529f809d9011d3a9ccc0f4cb0d846669a99998c9ef70ae2c82c142156b3863cbe2ef83d1170ccdd544a5bc143e71f520d3bc94f9dd8b02ffc1ff2b2245915c97bb174c54aec445b6e3231a20df2e955a6d2b8b2513396fdfb2dd1091cacdc6361e607b806b012337c0ae1b92d099842d86bf117b48e89038ef302ed25ee7b65bb88f59948a1afac434ce9b107190482bf44738d2a21e3945c4f19043905d0bb783b5b9153a887abb3c7613dc7300bd15dcee04a72de0a78a6b2e6aa2dc4632ba2f1549f2aab17bf1138202281ec18850e7e0c27b5e80e82e156de2fb9484edf8b413df69c11fad9966551748cdf3a55471a961d19b8af6e127214521743e868fd7ceb85f7020737817ca69d20724a0edf44e27bd5b3994ab69aa2af84f7295e51a66c89b42dcbd6a9c3ee8a6f33d13210ac33eb56e6e05b671df65729bf02176fc7678b713de6b813fe1595a0a37111369958b382f64b757cd61c8114ae0dcc3b03bbce76d1f5a26d805f27e220fc99e61e77592fb2de4675c2415eb9f82d766fceade885e1ff0c0ccf80001bd1bb4b375f43af651adb8258cdfa026d8f7f74c3abf933a68a13ee54ad726fcf1f636d5ba9a735121fbbd2a0ecd6abb2e54dd9cf33d45",
      "ee287900d783d3021f34e18947f7ccb9a0133e6c819f6e95e0bc3adb63780f7051cd7d71fba2087a4d79d3ed7047430a1cda8ed8950b0fd257bb1c4aaab0896fbb78cfa00b3bf1493543abe04ea4d2abc7523c6f0cba383562d807dd313d4f90e7c0b4a27d6adddcb2438cdcdd1bae1672814ea9d73ee608fe19fdebeb5b6ffc08f7d46725e1dd9873f364c42fcfc7636990e0313334611d5911831f5e67a97e919f7f005dc1856bd50d0000",
    ],
    [
      "ETag",
      "Z8Ogom/R/WaH7gHBmY1QcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "00000002ff1dd0db6e82300000d07fe9b31aa18cc8deda4224436347409d2fa494729b48b996ceecdf67f609e73c01e35c0c4332b6dfe201de8166a6b3e19b40ee3056759a87d423360bc6097587811afad89bd1dc09bb86aa2e2f2af7a33a3bb1a59ae9d943141985935d3fcf12b9d9942d70e45cdd79a79776acfa799f1e6cb7b4e4b4c60b3479245b8b370a5a19d3d4bcd6741ddaa9a3b0110784c43a436610cc071923c3aa157e7c359a7eecb7b8281b3b26dcbf09d7dbaefd8b7ff79cf6e492ce4b260bfa7144b6300f8f9cced629ec1b34dc8af24721c1d9ee48c00a884556bd1892eac5856f8eb302fff664d452bc02b060bde8c1ef1f0c98cb071a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:22 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-3-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6b6f9b3014fd2bc8fbb82690272452b446295d2325a425a455354dc8980b734b708a4da6a8ca7fdfb569ba7693da4fd8bee7dc73ee8367f2c8cb948c49c2f3a71aaac39707919033028ae6f8ea5c1fe8bc07375fa1dcdbf7d57409b37c75339920826b96a4db5d012d29ea8a811c6fd6edbc12f58e5642b43051abd7ea0cbb03d71b78eea8e7769026a1c816bc7c44f22fa576726cdb27e9762e445e00dd71d96662fbfa6eefbbf6ae120fc094b4df2bda2822ed0f35bf158251c54539d9ac51bf9650c5b0a5bc40077f896972fe3e739bd36d3b47f09e33a08c89ba54da15a660a2cc785e57262b193f13e3f2cd81acfd853f8b2c268a7a5bc625ddc2999552456375d8817519ae96d63cb85c85cb69345f05f17a76e52fa7edd96ab159066bebeeca0f7d4bd1a400c3b526d6b9b9057841fd14a4e2a5518ff4b3567ee9cffcffa168024a4b6882b1eb0c69c773464996b82cf37a8324732049bcc41dd05ee2b0511ffa6902147946d4b068294a371b7ab4ebba71c74b68dcefa64e4c9dd12866c341c7edf67b6e3a1a90e319f95d7105175cee84e44d87c85d388ffc380a37c16c1af9a6848cd685ba688ce902de7a545820823ea8e9a8a35ca0926ef73c88fc703a8be6b77e33e105e4941dd64f38e38c1612104d2b6c9e826a29526c1809a64bff02c16662d7a7a024e31fcf44f75cbb78d3f2577a8403d47695f9927514ce83efc6ce09714b8bda40f6cd419791f1429b3efe4420ae689384dc6cfcf09e344f21645041c93e1f26824de0b31fedb4f608c5c54715a9f08e9bc3a4d66015341bc44db127b6d71db95d62c095fa37d673bccea9673a87ce085b28d54b41cdda639d8d582d5f4118c4e107a657c73fd8d6ab2f74040000",
    ],
    [
      "ETag",
      "0PyaI3eQ+env/YrAMeCgOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "da",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "f73648a5fc098bd417a1d02e520a1452f162aa22635f52778e9dd90e1d427cf79ed38e4deba4f44d7277fe9d72f7f8c991fc108a9388ec44f9b30173f85282bbf7c11a6c239dc557ad9505121070b444b23f5b652f9be1af664b77dbf832dccf92adb9bfba42c2b227a828898ea41020b925d1f72351b4026c635a3695cadb2c20ee50fbe2265b278b5bcc2bcd7dbe7848d3789acec929383772ea68def29f687b3c05e459efd6508001c5c0cf521bfd0ccc257e4d4bab5a42cfeac630b0a485db83d2e8a6a646eb1e567a835e7f7c390a27a349f87510f691939a5127b442f46183e311a71d956bfd62bd2403244c1be3c245fbdc635df076111f268b6c3c6ce7fb1ba08ce946b9bc132c84b1ee4dbcdfe0bb08ff92927e12c49b12b20b2a4171305d94a873cab9016b3b496d735ad7676cba5ca61f5551dc68c1bbc1bde800a4db9f819b7419ff4f5af4d71fad667136ff405887ae3923597237df64f1ddca738fef46981e1cd895d1682a0bde4ffd8be164148e2fde2c76adbdedf03b91330d048451fc53be0947a2824a0ba757243648bf87030000",
    ],
    [
      "ETag",
      "1DPTwS4xuWabWA27vDIWrQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-4-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8554db6e9b4010fd15b47d69abd85ec089b1a528751d9c22f99200ceadadec0506bc09b00ebb248da2fc7b07887369a5e489d5ce3973cecccef040ae791e9101097872534271ffe94a046487806209deba97ecbabf5e27f61ff7fce8c6e89e6f203f3dd9df4704af5892659b145a5294450872b0f0da4921ca0d2b846861a256b7a5ef19bb3d6bd7eaf5cd9e8e3409693ce1f93592d74a6de4a0d3d94ab713219214d886cb7628b2e7fbceadd1d914e20a42253b6f153b28223bef6a1ea422648a8b7c7fe1a17e29a15842c6788a0e5e8851f0ed6de63667593b41f02d0f8185a1287355b9c214a1c8639e94459d950c1e48edf2d58178f6c41ef9dad71dcd1b8eede568e8f99f5752a1c04a6352f37cd7991d7da98eabe5727d97adb4b13b9f6a2bac32e629c89576f6c3766d6dcbf955526ac2be76a0cddd43dbd5be5f3c8786de68475bf1a83e691367eaf89a4ea9361f8f3ddbd728fa8d402a9ed76e7d16a450397deaa7f3ff235604a6988426b8ecd13da65bb41fc4412f8c2d73378829048115f4769919d0b0df856e1400439eaab2d72c968b3cb2c0024a41d78dae1198d00b228b51cb645637d8db330c2b8e801a86491e77c85dc1151c72b91192375d2567aee3db4bdf5dcc4643dfaecb885999aac3c65c55c46b9f0a8b44d03b753d56512e50a97a2267e6dbee70e43ba776331513485878efdde05cc42c95806856b00c1414531161d3c8f1dc737c673e1b4e90513ff5f11621c9e0e7c30bc1bfdfd45d56f597f8ced4f6fce1f4b8f6b0059db2b4ac51b7cd8118d4a02d6ab468cfd78d816e0ef46e9b527a491e1f7f231167bbc94b4e16b67b419a2b176228200f3f7e5504d7818f3674bb2f08c58d41159c34c57184425969840534a3c4b3cacb966d99fd7e356c082ed4bfb1ae4ead6dcfaa1c5546c820574f0535fb82753662a57c0655ffa0c56c86eb82d1bf76aa3e8aad040000",
    ],
    [
      "ETag",
      "RZak9hhgExRXGq24XpenVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6f6fda3010c6bfca94bd1c6476fe9004a9d2a00d1d1a8516d2bd992a649203dc9a98d94e3b54f5bbcf49a704d62c83be013fe77bc4fdcef6f16c3cd03431bac682ae7e6620761f57a06ef2c51464c694d45f5b9e4a305a0628b2d29983cf93ef6206e14eacc3018f2eaedd1d113767673a43c66bd810a3fb6c2c29b0441add1fcf464a36a06d34d1096ab7cdd7c371145e86531dd8f0240f8c6f47a35e7f141a2fadd240e29867a99a9f6c5c5221d5bc10a571164d87e3cb661f23efb26962ca4eb3ac204d409ce6a1db39491201529ee8e3724eb6dbcad49f4c46616ffc9fe6a789e0347987f3919eea60eab1720c46935ed49c9f10b5774417bd286cce978a6cf66a8a8657e12cea5d5d37bbe6f3f5d3e69856dfbdb48c7bbe98c21204a431e4d77f2bf83dc46a98bf2ca97f9d415bf24cc4901f9e4e2e365682675b22386feb48db69e38ee57abeeb7b81ed619dc7784c14e5a94ebd9de9d20cc5156153fea4df95e1e804512cf5135b169f8f3aec1508f9ca2a575f81ad48a9be31a0b254eb875c76bec0afa24a33e69b726fa06f368352faae6939bee99bd8f5cba012191c211ce499c8ad6a43166a23ab8daa72b1e9fa18799e1b38615093f8015b5d6c77b1f309a1a2e7fbd47e0df5250845ab0aceb30555aa94abb8d0de31e0d8b24dcb754d6c23dd8132bc244cc23fd401bcef60d3a981f70fe171c70eeae1fd46f8a0067e9409069096baafaf0a30566ab6780df8c7f05b36d6671e98ba058e5d8fd8d48b8e6e9fedbca50a0ef12d17d9f5f841233e46a5a32aee820bb5de95722815af9a91d05c06c7a03bf99dc766c731f5e91c73d6875b56804cd77e43b45772816edb1daf161da3bfd1effe4c81fe4e81bc165c4f1409f93041af83e59ce7487a3e76f3b25a464cf45ff257aa5ef5cb6fdf477bf4ef070000",
    ],
    [
      "ETag",
      "F/OVrSeEyrhEFoTDP5yarQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "82300000d0bb64ad0ef2a7cb4001f9b5555464934969040cbf2620c44eef5ea74778ef07e0a2209ca3b1a7a4032f4060d9da149b7030219c6b370ab5b2d38f6ab23f3454b977d65592e7f64d77959b98a4d67468d619bae9bcab16f473d806d282bfb78aea9574ce4ea321f6d1721fa041ba38635a3449e5abbb9d22271ed7bd904656a7fc8c1b53d614eaa6bb5be914e842c7eed0d47df079417cc7d7473db073ecf987c5ee1b6e6b95969ed023198ae9f1155c23cf1e8c8a858256d964ab56158778f6cb5c16298caaec4392f7d04eccf3cc8aba420a5801b20c35231cd54faea259d60afcdbd12806f20c800433c2c0ef1f76b8fbec1a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:24 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-5-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fdb3014fd2b91f711fa6ef3a8548daa0da3529b8e34054dd31439ce4d6648e32e768a18ea7fdfb5431908093ec5f63de79e731f7922f7bc4cc998243cff5343f5f8e54e24e49c80a239bece33bb80b34310dd0cfece7975165e3d0c67d7930922b86649badb17d092a2ae18c8f176d3ce2b51ef6925440b13b546ad9edd1f39eec875bc81d3439a84225bf2f21ec9bf95dacb71a773926ee742e405d03d976d26762fef9d43bfb3afc41d30253b6f153b28223b1f6a7e2d04a38a8b72b2dda07e2da18a614779810efe13d3e4e26de636a7bb768ee0036740191375a9b42b4cc14499f1bcae4c56327e22c6e5ab03d9f84b7f16594c14f5ae8c4bba83732ba58ac6ea710fd665b85e598be0721daea6d1621dc49bd995bf9ab667ebe576156cacdb2b3ff42d4593020cd79a5817e616e005f553908a97463dd2cf5af9b93f8bf743d1049496d00463a76bd39edbf5922c7158e60e4649d6852471136744074997794318a60950e41951c3a2a528d33eeb813be8c5498f7af170607bb19bb85eec51c7867e0a9e47fbe4784e1e2aae60cee55e48de7488dc868bc88fa3701bcca6916f4ac8685da879634c17f0daa3c20211f4414d471de5029574bb1741e487d359b4b8f19b092f21a7ec71f307679cd14202a26985cd5350ad448a0d23c174e5cf116c26f6fd149464fcf389e89e6b17af5afe428f7080daae325fb289c245f0cdd839216e68511bc8a139e832325e68d3c75f08c4156d9290ebad1ffe20cd5308195450b2cf87896013f8ec473bad3d4271f151452abce3e630a9355805cd067153ec89ed0e6dcffca68a56ea5dccb5ed53cf740e9d117650aae7829ab5c73a1bb15abe803088c30f4caf8eff009b5da2d274040000",
    ],
    [
      "ETag",
      "Df6le+vNTV3zDir+RHw4CQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d936f4fdb3010c6bf8b799b4a74d03f8bc48b94b55ba5d0746dd010138a4c7c092e8e2fd84ea7aaea77df39b08260527893dc9d7fa7dc3d7eb2678f520b16b27b593e3560762725b89f3e58816d94b3f4aa515b600103c74b222fcbe8766166cdd38d5efe9ae95b933c6e92e8e282089b3f40c559b8678504252c0b7fef99e615505b8eaaa974d6660173bbda17d7e96abef84e7985c2e78beb388e26f1941d8263a3e08e672dff89b6bb43c03678bf82020ce81cfc2cb5c10de46eeed7b4bcaa15f42c362607cb5ab83d280d363537883daaf406bdfef0cb60341e8c475fcf467de214e6dc49d4845eaf693ce6d071b5c23fb424eb9f1161da98162edae796ea52b48bf870be4887e7ed7c6f019ee7d8689775828534d63d8bf70f7c11e13da9f82741ba29a9baa012b400d345c93ae34218b0b693449bf1ba3e629324893faaa2854129bac1adec0094db1e81599c44ff9396fcf5aad5b7289d7e20ac23d71c91747e355da7d1d5d273772f4698ec1cd8a541329505efa7fee9f978301a9e3e5bec12bdede83ba1330d042ce7f4a7fc908e850557160e7f011263f43687030000",
    ],
    [
      "ETag",
      "CgAZNrFuqXnPWFnZrOkjOA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-6-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "db",
      "30",
      "10",
      "fe2b91f7659b689b344dd356aa5829e9c8d41796b830f6a2d64e9c6048e2123b6515ea7fdf25a1c084049f6cf99ee79ee7ce770fe89667211a20cae3bb82e5bb0f3782a223c41489e1f5ef7d44be9df8ea2c33778567d3a9f7c3dec6c3212078c99224dd24ac214591074c0e967e33ce45b121b9100d48d4e8368c6edbb27b56cfee9bb60134c99268cab35b205f2bb5918356eb20dd8c85881346365c3603913ebdb7b6edd62617372c50b2f5bf620b4464eb4dcde344044471910d973ee81792e52b96129e8083676248bffc9fb9c949da8c01bce5012341208a4c95ae204520b288c7455e6545830754b97c7141be3375c658fb7ca4f9a389b31a8f7cfc712d1508ac3522351f7beefceba7f2ba5eadaeefd3b536f116336d0d55463c6172ad5d9e399ea31d38bf0b5d37d9503bd616dea9e36927574fa1913f3ed2d63cac6edad49db95833745d5b4c26be83351dfc864c2a9e556e31a1092b9d3ef6d37dfd8925812822591d5cd97a97183dbd4f236a0751cfb468a4334a7bd4b68849f5a0df619d9032023c5566af582413198bccb06f13bb6305a6c9ac7e4849641add30ea44966950ca4c13f8fd10ed8fd07dce153be5722324afbb8a2e3d173b2bec2de7e31176aa32225224eab4365716f1d2a7822201f4465dfb32ca0528955fe4ceb1e38dc6d8bd70eaa998b298043bff0ee622228964802639499962f94c84d03474bef05dec2ee6a32930aaaf3e3f20241afc7a7826e0dda6eab2aa4e84dd99e3e3d1ecbcf270005d90a4a850dbfa82da7a5b6fe8ed866160a33d30cc81d169eabafe13edf77f8008b35de745df978e7785ea278f452c6759f0feaf02b80abcb7a1877d01286c0ca8c0a429",
      "0e2314c85223c8593d4a3c2dbd1cd83dcb32daa802e7ea55ac6bf60e3d2b73941959ca32f55850bd2f50672d56c82710046102e6b02e10fd07e7857b30ad040000",
    ],
    [
      "ETag",
      "xwfaJBStHn3yuR7bLRX7vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "93",
      "6d",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "4b",
      "7d",
      "29242a119084179b4e45c7c031121f6296b21ea3b8ed66db6108e1bb7b4302bc42e7abdec3ff776dafbd15fb9099601d3691f167016a791283792a0d1f7491184d4b8e9906566360784c4afb76f2e0c0f4d96b345e46f6f8f3b5f578da7cea7649a1a319a49c75566c2a21119a75de562ce32910260509cc322fed9e1738778e4f81144519f0c6ae6bd9aec3d6b51dc0a3088bcc8495c1a954da841b67078e02bfe7dd1de712fe2f8c6e2c936a480c9900558d9179c88550a075450e75c8f37c0fd98381eb58de2fcdcf844229fe412e645522318b3d71eb0eace0b85e7073f0443756e01cd76bc3d3833305bdbe330aacfef0381586b3aff42fad7e5fd7d81c273e4c41411641f9fd738573884caf9c2c4dbb2750d758a808cac723f126112b2c72ae10eb14a937ebe7cd8bcb56fbb2ddba6ab4ce499760c48dc48ca4e3111d8d19343cf1f18be68a9db1ad6f2f0de8a142aaad416c3354f01acb6da9531da30aa8b188d370de4bf3e3afbf01e69725adf9030000",
    ],
    [
      "ETag",
      "BFbJEefXN33YSBUqZ7K+6Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "cd7643400040e1779975e4904886ee281519746882d8cc119d88ff3154a23d7df73adddfcd777f409a657418c8d855b4052f604e37ea3a5b23a6e8faa3c4ddf121749d538ec81dc5ca9eee5886b4be41db6b7c519a54fb2b2e19e93defe2139eb8be7ad251f4d9ce4d6199f19ec591c6afed652e22e6207d9f7f7fc424087a6bda19614ddad03f2b06d3ba57253459f0c87a1ac5a6e7e77d3e5a9be64660aeb478a8ef4bfb9eb7a9ad78936361c93d102e0848577bf8b4274ce09b8635254bca430d834842d6165eeb53689f319584c090ad2a11658eb6fcc8c00ad0272b381d48b170b73b555d817f3b19674697013a4d39e5e0f70f2e92d0c61a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:26 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-7-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b4fdb3014fd2b91f795bed247da4ad5a84a1891da744b52d0344d91edde04431a97d80101ea7fdfb5431908093ec5f63de79e731f7926b7a2dc92296122bfaba17afc7623193921a0698eafd74f0fa5d7dfa8c1531d8bdde564122caf6fe6b31922846129badb17d052b2ae38a8e9266ee795acf7b492b285895a5eab377287de7838f6267daf87340545b614e5ad49aef55e4d3b9da3743b97322f80ee856a73b97b7defdcbb9d7d256f806bd579afd84111d5f954f37b2139d54296b34d8cfab5822a851d15053af84fdcb2d3f799db82eeda3982ef0507cab9ac4b6d5c610a2ecb4ce47565b392e933b12edf1c48ec2ffd45e27059d4bb322de90e4e9c2dd534d58f7b70cea3f5ca09c2f375b49a27c13a4ce3c585bf9ab717ebe56615c6ced5851ff98ea6ac00cb7566cea9bd857841fd2d282d4aab9e9867a3fcd29fe0e3500c01a51534c1d4eb8e686fdc9db08c793c1bf7872ceb026363e60d699f75f96400832d038a3c2b6a59b49425774759e6829bbacccdd281eb6d5364d3743ceab3091bf6071418399c90874a6838136a2f95683a44aea220f1d324da848b79e2db12325a17faac31660a78eb51638108faa4a683890a894aa6dd4198f8d17c9104977e33e125e4943fc67738e38c160a104d2b6c9e866a25b7d83012ce57fe1982edc47e1e838a4cff3c13d373e3e24dcb5fe9090ed0d8d5f64be2240ac21fd6ce1171498bda42ee9b8329231385317df88b405cd12609f9b5f1a3dfa4798a20830a4afef530116c035ffd68c7b547282e3eaa288d77dc1cae8c06afa0d920618b3db2c7a34177422cb8d21f6243b777ec99c96132c20e4afd5250b3f658672356ab57100671f8a1edd5e11fb912815874040000",
    ],
    [
      "ETag",
      "hzwn73Us4zuSimV99ILhjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff8d93516fda3010c7bf8bfb1aa4d2026191fa103aca32a5c0203c4c5515b9f62575e7d8c1766811e2bbef9c766c6a27a52fc9ddf977cadddfff1cc82fa13889c88328b70d98fd5909ee870f56601be92cbe6aad2c908080a3259293c1cfcd6e39fb3edb664971fd72112f6fd8f6f9ea0a09cb1ea1a2243a904280e496447707a26805d8c6b46c2a95b75940dcbef6c575b64ae633cc2bcd7d3edfa4693c49a7e4189c1a3975346ff94fb4dd1f03f2a41f56508001c5c0cf521bfd04cc257e4d4bab5a42cfeac630b0a485db83d2e8a6a646eb1e567a61af3fba1886e3e138fc7219f691939a5127b44274b3c6f188d38eca957ec62549ff1209d3c6b870d13e775817bc5dc487c93c1b0ddaf9fe052863ba512eef040b61ac7b15ef0ff826c27b52d24f82785342764125280ea68b12754e3937606d27a96d4eebfa844d168bf4a32a8a1b2d7837b8131d8074bb1370932ee2ff498bfefaabd5d7389b7e20ac43d79c902cb99daeb3f876e9b9fb37234cf60eecd268349505efa7fef9603c0c47e7af16bbd6de76f89dc8990602c228fe29df84235141a585e36f4bbb570c87030000",
    ],
    [
      "ETag",
      "B4YUvPGJGqTIfCx2APFcqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85535d6f9b4010fc2be8fad256b6c1c6186c296a1d0757548edd006e95be98e358c825c011ee481445f9ef5db09d268a94bc9d766776663fee91dcf032213312f3ecb681fae1d3b588498f80a219462b6bcdff36e5a9082e72e3a71e6fae8b6a9b9d9c2082b72c498b2a87be144dcd40ceb6c120ab4553d15a883e16ea3bfde16464d98ee5d853d31e224d429eae787983e42ba52a39d3f5a3f4201322cb81565c0e98289ee3fadd48af6a710d4c49fdb5a28e22527f57f35b2e18555c9427db00f51b09f50e0aca7374f09f98c4df5f571e705a0c3204df71069431d194aa7585259828539e35755795cc1e49e7f2c58304eeca5d84dad79e16cc97ee6e310fc2cf9154281069546a41e87beb1f5fda67b4db5ddd1791b6f437e75a845da63c0719691bffccf5b5d34bed489b078b9e16f1a47b692befdc0bb5b1b6592e0337d40c74958054bcec3c8534cea1f573989af776552d812a2a619fdcd9c6840e1d631aa7b1cd52c7b4e2d480387662dba2666cb0e918c6490c1479aaaddeb168294a183bd4b4c760d0d88221b3e9c8b246746259269bc23075d2643a359d31254f3d725f7305675c5642f2fdecc81fdf0bdd5de86fd78b79e8766da4b4c9d5d9de5cdbc44b9f0a9b44d03b7d3db5592e50a95d84b70e5d7fbe08bddfee7ef72bc8287b086e71fb29cd25209ad6b40005f5b9487068e4d726f0426fb39eafda5a7850e143d5c62fb6ae7f7908f990420d25fb78c808ee121f7d8be3912214cf145570ed8ae346996c35580dfbcdf2a2f572643bf6c81c930e5cab3739736262eef938db8a5040a90e0ded8f943c1dc41af90cc2242e648d378ad97f82c55d2022040000",
    ],
    [
      "ETag",
      "p5NiZunBoSQl0J/bOjmpUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95d16e9b3014865f6562974b3c8c8140a44aa31dcd32a5699ba6379baac835863a05cc6c93aeaafaee33b4256465ace905c1e7f8ff95f3d9c7e6c1b86579648c8d6b96fc2aa9b8ff9850755e0d165496a992fa55f05c526360508513ad2481cf7e1ccd3e1793b58bcbe0388eef6ea7e707075a21c90dcdb0317e306246d3481ae39f0f468e33aa6d2cd202755f54e3e97c194ec2854e643caa12f3cbd92c389c85c6e3a03160427899abd5dec69809a95675d0182f968be97cd2ef4bf1bb6c9a98a5fb59129a4754ece761c50a4791a052eee9e372858b626b3a3c3d9d85c1fc3f8b9f4782b3e81dce0ddbd791aacdd6713c3b0d96fdfa08abd6167d0d9661bf5e2a9cb56a5a4e4fc28b657072d6ef5aad6eeeb2b72cf5d5e3c058f3eb058da9a039a155fb1782af2951d3ea6449fdef291d4a5e0a42abcdd3e27a2211bc2cb0e07ca833436f085dcb19798e37f2d1086a5dca09568ce75a7a79a14b331457385df03b7dae0c5b0b443dd4472cae7f373a0d6b84dd5128186d82ef546c38934d4cd74f09f30bfd5d170a08cf9ad9139c6eadd001963d02c80323ab492a516e15314e25ed9eb21c1fc0adcd322d73685a43b35530703cd3717ce8dba1df21fc00ad314463687f32cd7ad5dbdc5607f711262c6da18755dfbc0484ea0876421feb139db62b4700da2eb021b05ae5f6b0ee4ef93640ee6b1e6b17dcb5357a27b8d50b8e3ac027822a9ab6425e124e6e9b44923c67ac37f143083cbd79d00410d97b6fbceb7a00bda642bbf82304fd6e7cd48b6f77e007195678db055c5119731135194c5e52e82dfcd047c0d79d6feac7ed66fc7760eb95335f43d9bbf41ef45037bdfd37fdd5f3357078af19ce04d7578aa4d56d623edd2c47bce2d18d3eaeea181804eb6ff237a69ee2c73f1a08e633f0070000",
    ],
    [
      "ETag",
      "cA9iZCL/pGj6auAFffwkIQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0002ff1dd0cb7282301400d07fc95a1d5079a4bba60a542c151c4661c340bcf511428040109dfe7b9d7ec2394f94530a52669d6050a13734e6733ca333bfb609196e66b8265c579132a6e4273a55e3e3e1a65c6900b76dcafa623715b8898f9a6e3b7b3d1ad8a7b9f67561a9722d7362adde7b26862e58f56279ac8459dcd378bb19ca1407a1db4662ba488ca428fd0ba4f53901eee1f8c67945b12ef619ed5db9f4258680a77116b8d2db6acda1f42a169e54d832704c8f9256d99ecb9379bfd909fbfb5c6843b351aad94bfc657d08e8c6c629acfe82193577597500344170afaf2dc8ecfae22e0c8c27e8df9e75630daf0002790b2dfafd039e00f4531a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:27 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-9-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "9b3010fe2b91f7b5797f218914ad514a5ba6846c405a4dd3846c7330b704336c1a5555fefbcea6e95a556abf00f63dcf3d77cf1d4fe45e1409991326b2bf35548f5fee2423670434cdf03664cb5b871fa2ed529537dfaef8c4bb3cdc1f160b4408c352745fe6d056b2ae38a8f92eec6495ac4b5a49d9c644ed59bb3f198c9de978eacc864e1f690af2742d8a7b24ffd1ba54f36ef724ddc9a4cc72a0a5501d2ef72ff7dd8741b7ace41d70adba6f15bb28a2ba1f6a7ecd25a75ac862b10b51bf5650c5b0a722c70afe131376fe367347d07d2743f083e040399775a14d559882cb2215595dd9ac64fe446c95af3e48e8aedd55d4e232aff7455cd03d9cb512aa69ac1f4b685d06db4dcbf32fb7c16619795b3f0e57d7ee66d9596dd7bb8d1fb66eafddc06d69ca72b0dcd6a2756e4f3e1e503f01a54561d523736d949ffdf1de0fc510505a41138c9dde84f6a7bd194b99c3d3e970ccd21e303665ce980e598fcf46304a1850e45951cba2852c1270062336a6f1b89f0ce311a44ecc26c3713c64740883de64c28193e319395442c38550a554a27188dc065ee4c651b0f357cbc8b52da4b4cef545539869e0758d1a1b44d0073d1d4d54485432767b7ee406cb55e4ddb8cd84d79051fe18fec519a7345780685aa1791aaa8d4cd030e22f37ee0582edc4be9f828acc7f3d11e3b9a9e295e52ff4080768cad5f64dc228f0fc2b5bce097143f3da421e9a0fd3462a7253f4f1370271459b24e4c7ce0d7e92e62a80142a28f8e7c344b00d7cf6a39dd61ea1b8f8a8a2349e7173b8321abc826683846df6c49e9a07b1e04abf8bcd9ce9c93393c364843d14fab9a166edb1cf46ac562f200ce2f07debd5f11f86b1773f74040000",
    ],
    [
      "ETag",
      "SbAW7cwTOAspVJGc6IFwkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93dd6edb300c85df45bb75b0a6cd5f0df4c2d9b22d809ba48e7b310c85a148b4ab4e163d49ce100479f7516e970deb00f74626e98f30797c7464df95912c663b55fd68c11ede55e0ef4290816bb577f468d038601103cf2b2215f797f528d989c7c5e8fd564c5cf6b5dd2437374438f1083567f191950ab4742cfe766486d7406d02755b9ba2cb22e60f4d286ef36cb9fa4c798d32e4abfb344de6e9829da273a3e49e171dff86b68753c49e70974109168c80304b63f109845f86351daf1b0d0387ad15e05807772f2a8b6dc32de2802a83ebc17072399ecec6b3e9f5d574489c46c1bd4243e8fd96c6631e3dd719fea425d9f08a08dbc5b470d99dfb2095ec1609e172954f46dd7c7f035c086c8d2f7ac15259e79fc5fb0dbe88f02fa9f91b41fa534af741151809b68f524dc1a5b4e05c2f89aee04d73c6e6eb75fa5a15232d2ad90fee550fa0fdfe0c7c4ad7c9ffa4257ffdd1ea63922f5e11ce936bce48bebc5d6cf3e47613b8871723cc0f1edcc62299ca41f0d3f062341b4f2717cf16fb80c176f49dd8db16222638dd942fcab3b8e4dac1e917850bcdd787030000",
    ],
    [
      "ETag",
      "iat2m4AbchE4/Sc6sRYuPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: ["TIMESTAMP"],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-04T12:13:14.000Z" },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "4ee33010fd95c8fbb2bba2ad93266d5aa962bb6d8088de485258f6a2d64e9d6048e3103b2084faef3b49281721c1932dcf3973ce8c671ed10d4f37a88f288f6f0b963f7cb916141d20a6480cafd365f6cb6edde8e3ebf36cb1393d51c7a78bb3783000042f59926cb38435a428f290c9fed26fc6b92832920bd180440d1d37f48e61756dcbeef6da5d1d789225d184a737c0be522a93fd566bafdd8c85881346322e9ba1d83ebfb7ee8c56968b6b162ad97a2bd90215d9fa58f4301121515ca483a50f060ac9f215db129e808517e686fe789bbac9c9b61903f88e878c84a1285255da8214a148231e17799515f51f5165f3d505f9cec41905daf703cd1f1e39abd1d00fbeaea50281b546a4e6079e3b3bfe565ed7abd5d5fd76ad1d79f3a9b68632239e30b9d62e4e1ccfd1f69cbf05c66d36d00eb5b937763cede7e57368e88f0eb435df54376de24edd4033b5f9d191ef041a06b71b26154f2baf01a1092b7d3eb5d37dff8925812822591d5c757187e836eed18876c3c86e5b34c28c529b762dd2a638ec99ccdc504680a7caec158ba422b54c1b633d24bd76d4a694f6280db1c13ab611591dc3a4b665980635db16da1da0fb9c2b36e6321392d73d45179e1b38abc05bce46c3c0a9ca884891a8716dae2ce2b54f054502e883ba7665940b502a3fc89d058e371c05eeb953cfc484c5247cf06f612a229248066892932d532c9f8a0d340d2de6be1bb8f3d970028ceaa3177b8444fd3f8f2f84e021abbaacaa1305eed4f183e1745179d883ce495254a8bbfa820c6ce006361ad80c74a3afb7fbbad9c418ff46bbdd3f20c268d779d1d9d2f12e51fde4b188e52c0d3fff550057814f3774bf2e80858501191834c5618642598a8439ab67896f4b337bb66d77ad0eaac0b97a17b33bf6be69658e3223dbb2543d5554af0b145a8b15f2190441",
      "1881196c0b44ff03cf5ba8f3ae040000",
    ],
    [
      "ETag",
      "MUpX8/k1DjVpPdKHtGKPQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "53",
      "e23010c7bfca4defa5d049fa9832e3cca156e54450c01777370e13dbb444db864b529571fceea6555bd05e0f7c41d9ddec9fee2fd92c4fda1dcd42ada7ddd0f86f4ef8ea7b4ce465614c88c81329d4d7926582681d8d481cab4cb4fafd787a76198dc5afbd2c35ccf8ec3037e3fd7d9521820549b1d67bd2224a925068bd3f4f5a8653a26434540972b52cecc168e69ff81315485958044657c361ff60e86bcf9d4a808380e5999cef2c8c2817725e3a95703a9b0c4627edba047f49a68869b29b24265948f86e1aba9ce330e444881d754cccf172598b0ec6e3a1df1ffd67f3b390331a7e41794f775524f2be561c0fc7fd597b7e88e5da111df5677e7bbe90385dab693638f7a7b3fef945bb6a3e5f3ca4db6cf5f57347bb65371312114eb28014edbfe4ec96047250dc2ca1de9e90ae60390f4871782ab95c8839cb979833d655912e045de818b68b6ce47aa60b5562c2022c29cb54eed554d5a649267132610fea6269964ae0a5a9ee58543eefcb70c15058b0b2fa2996b8f20e992422623cac2238780f993fc86359ae1eb0b45a3f562d9e90fa873d53f774c302eae35451c973b28563214f07956700037481d1056b65eb36020822d3b37caf21f11b347ad0ec416b0f8072f3d7e9ed5a505943ca6bf89f6c9109a9b6f43d90dcbe45ac6dd06d53874e51a1eed5b5453811ffa0dd5c424621ffcc646fc27bc0729be1ed5678a701fe8864b472a6014e68bd17a1287d7bab3337910e4da8430be9aeb50decc692e1aa96419f819c0fe41e84cde44e2bb9db407e4a92b8663d4b081595b7b82b5c671b7064ab2e47baa2b751335b4baf03575f3bdc0ac6dda086c075ed666af723f5f5db0c3858a90b7bc1991a288214b304bcce954356f0a8f1d82b0ae9680156ffc8a754befacf2fa74adf3bee070000",
    ],
    [
      "ETag",
      "8yZxHKQfOsY+nm23gKCu3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000d07fc9599db293de441486a52580a57061d21064df820a3afdf73afd84f79e001342194be7bea61d78072be6e18eecec41d5b47bb14467d271a96638f9e81ab56471356e48b98837d4bf3198efc3876238832755ea433f501feff9cf50ce6424c3b6338e7075dc2aa1e8806efb2829d85cfb9e36d24ce44ecdb7134442fb83ba400c72974f0a644e610ce796d76d167595e08c82af7c8d01d2f1d18fd362a9b7e4a339e78a63ab8358f5f663b456dd0b853088b71c3e71c9c59714e94ad860b671605dbd99ca66ae6af738bbe8949f6553cec106d0652827cad2f2c515240837e0df9eceeb405f011ac5139dc0ef1f2959fff41a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:29 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-11-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f7953ed2364d5aa91a5509d0a94d599a82a6698a6cf72633a471173b3084fadf77ed500642824fb17dcfb9e7dc479ec89d28b7644c98c8ffd4503d7eb9958c9c10d034c7d73ebdf85b4ebf659757f22eec5df716e76e201f26134408c35274b72fa0a5645d7150e3cdba9d57b2ded34aca16266ab96ecb1df63c3ff0027fd4f75de42928b28528ef90fd5bebbd1a773a47ed762e655e00dd0bd5e672f7f2deb9ef75f695bc05ae55e7ad64075554e763d1af85e4540b594e366b34502ba852d85151a085ffcc2d3b7d9bba2de8ae9d23f85e70a09ccbbad4c616a6e0b2cc445e57362b193f116bf3d581acc345384b1c2e8b7a57a625ddc189b3a59aa6fa710fce79bc5a3af3e87c152fa7c97c15a5ebd965b89cb667abc56619ad9d9bcb300e1d4d590196eb4c9c537b8bf082fa5b505a94563d31cf46f9b941f3f76331049456d00453bf3ba46ed01db18cf93c0bfa1ecbbac058c07c8ff659978f0630d832a0c8b3a296454b59765906b4eb77539f42960e32e02973d928dd66036f487dafc77b2e399c90874a6838136a2f95683a446ee27912a649bc8966d324b42564b42ef45963cc14f0daa3c60211f4414d07131512954cbbe75112c6d35932bf0e9b092f20a7fc71fd07679cd14201a26985cdd3502de5161b46a2e9323c43b09dd8d531a8c8f8e713313d372e5eb5fc859ee0008d5d6dbf649dc4f3e8c2da3922ae69515bc87d73306564a230a60fbf10883bda2421df3761fc83344f31645041c93f1f26826de0d35fedb8f788c5cd4719a5f18eabc39511e115342b246cb5477630f2461eb1e04abf8b0d47feb1692687c9083b28f57345cdde63a18d58ad5e4018c4e947b659877fe6dd932a77040000",
    ],
    [
      "ETag",
      "3aGxnAJfHPokE2V2LF18ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "93dd6edb300c85df45bb9c03d46bf33303bd70b67433e6245de2f6a6280c55a23d75b2a448728220c8bb8f72bb6c680bb83736497d84c9a3e303f92d1427097910f5a605bbff5083ff198215b8567a872fa395031211f0b446922b25e71f3782fbcdecc72ef3e66a9ddeee2e2f9170ec1734942407520990dc91e4ee40146d00db98966da3ca2e8b88df9b505c17ab6cf10df346f3902f6ef23c9de633728c4e8d9c7a5a76fc3bdaee8f1179d40f2ba8c08262106631563f02f35958d3d1c6481838dd5a068e747077505bdd1a6ab51e606510c78378f469389e0c27e3cfe7e31841a919f5422b646fd6381ff1da53b9d23bdc92c4e748d82ec68dabeeb9c5bae0dd2621cc16c5e8a21bf07f8032a65be5cb5eb012d6f927f5fe82cf2abc24257d27885725641f5483e260fb28614acab905e77a49ed4a6acc099b2e97f96b5514b75af07e702b7a00e9b727e02a5fa66f498b06fba7d5d7b498bd229c47db9c90229bcfd6453abf0edcfdb311a67b0feeda6a74958360a8f8ec62321c8fce9e3cf64507dfe177126f5b8808a3f8ab7c179e2415950e8e7f003aef253e88030000",
    ],
    [
      "ETag",
      "dnnlM+qidtqEKwItpFSAVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-12-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "e2",
      "30",
      "10fd2b91f7cbeeaa402e0841425d16c26e248e3631ed760f811d1cea368969ecf414ff7d2749e9a14aed275b9ef7e6bd19cf3ca04b9ead510f51beb92a587ef7e94250748098221b78bdbf49dd91f96bc8dde16572dbb9e5f87e303eeef701c14b9624e936610d298a3c62b2b7089b9b5c145b920bd180440dc36c181db3ed74db5dc7b51c03789225f1846797c03e576a2b7badd65ebbb911629330b2e5b21989f4e9bd756db6b6b9b8609192add7922d5091adf7450f131111c545d65f8460a0902c5fb294f0042c3c33d7f4dbebd44d4ed2e606c0d73c62248a4491a9d216a4884416f34d91575951ef0155365f5c50e84dbc21d6be1e68e160ec2d8783107f5e4905022b8d482dc4813ffbf1a5bcae96cbf39b74a58d83f9545b4199314f985c69a73fbdc0d3f69cbf85ae5bacaf1d6af360e405daf7b3a7d0201c1e682bbeae6edac49ffa58b3b5f9781c7a58d3c1ed9a49c5b3ca2b263461a5cfc776fa6f3fb124104524ab834b47ef10a3abbb34a64e1477ad368d754669973a6d62513d726d66af2923c05365f68a45329139c4b6da5d6ad2f5da7409e99aa66b581da74b2ca363536ab98e4d1de612b43b403739576cc4e556485ef7149d063ef6963858cc8603ec5565c4a448d4a8365716f1d2a7822201f44e5dbb32ca0528951fe4cfb0170c86d83ff1ea9998b00d89eec22b988a982492019ae424658ae553b186a6a1a379e8637f3e1b4c80517df4d11e2151efcfc33301df6dab2eabea44d89f7a211e4c8f2a0f7bd009498a0a755d5f90a99b7a43371bba830db367583dc36eeabafe1bed76ff8008a35de745c70b2f3843f553c06296b32cfaf857015c053edcd0fdba001616066460d01487198a642912e5ac9e259e9666",
      "f66c57b7ed72da009cab37b1b6d3de37adcc51666429cbd46345f5ba40a1b558219f4010841198c1b640f43feb8e0fbcae040000",
    ],
    [
      "ETag",
      "zwm9D2XCi9Cklx6xiTzAFQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "9d956f6fda3010c6bfca94bd2c4476fe9004a9d2a0a5148dd216e8de4c1532c911dc9a38b39d76acea779f934e09ac59067d037ecef788fb9dede3c578a44964748d258d7f6420b69f6350b7f9620a32634aeaaf9427128c96018ac43a13ad9f4f865fe3991f7e5b4e53fa4b9e442eb93d3dd519325cc38618dd1763458145d2e87e7f3112b2016da3914e50db345f8f26f3c17030d5810d8ff2c0e46e3ceef5c703e3b5551a4818f22c518ba38d2b2aa45a14a234cee6d3d164d8ec63e443364d4cd97196189208c4711e9a2e48140990f2481f970b92a695a97f7d3d1ef426ff697e12094ea30f389fe8b10ea69e2ac7c5f8ba376fce8f88da39a2f3de7cd09c2f15d9ecd4341f5d0d66f3ded54db36bb1583f6f0e69f5fd6bcb78e0cb29ac404012427efd53c11f2054a3fc6549fdeb0cda92672284fcf07472b1110b9ea54470ded69136b6dab863b99eeffa5e607b5827321e124579a273ef66ba36437145d8943feb8765383a41144bfdc656c5e7930e7b0543beb2cad525b09894ea2b032a4bb57ecc65e70bfc2cca3443be29f72ef4d566504adf352dc7377d13bb7e195422830384833c13b9556dc8426d64b551552e365d1f23cf73036710d4247ec25617db5dec9c2054347d97daafa11e8250b4aae02c5b52a54a198785f60e01c7966d5aae6b621be90e94e1156112fea1f6e07d079b4e0dbcbf0f8f3b76500fef37c20735f0e34c3080a4d47d7d5580b152b3e55bc03f84dfb2b13ef3c0d42d70ec7ac4a65e7474fb6ce73d55b08f6fb9c8aec70f1af1312a1d5571e75ca8f5b69423a978d58c88e6323804ddc9ef3c363b8ea94fe790b3dedfb20264baf63ba29d920b74dbee78b5e818fd8d7eff670af4b70ae48de07aa448c8a7097a9b2c673c47d203b29b97d53242a2ff932fa97ad3afbf0160a849ebf0070000",
    ],
    [
      "ETag",
      "0hw+GKgS8cVbRpizs+d5aQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dd04b7282300000d0bb642d0e9f82d09d19914fe55304316e188cc15214420218ecf4ee757a84f77e408931e1bc18ba86b4e01dcca56a2df1f2839a103eea40aaa3ed73b03b4f4921e52b639d11586f0cec8bb79142ecd0a29ee4fc1b1bbe4a4cd5bcdf438dbbcc99dba6f10e7286b2f0760cd0d0ead4f5d8346e12369184e8e1c1b484fd75817a3026bb400d52055f8ffb7ef4791e1ba17db64ff9ee98ece548747a8484714a5187e09ab77e822ea7a2942b9a2b739fa5b1ab49d5aa77a2c869364975e5e7cf5d7c5302262a3ef95b184b995fddc4f3baad9e4853c10210416b467851bfb89a6e590bf06f2f86999257002425230cfcfe01f6ba72181a010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:31 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Connection",
      "close",
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
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
      jobId: "grouparoo-job-13-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "0000000002ff85536b6f9b3014fd2bc8fbda3cc89b48d11aa5744d15c806a4d5344dc8980b754b708a4d9fca7fdfb569ba5695da4fd8bee7dc73ee836772c3cb944c49c2f3db1aaac76fd72221470414cdf175fd743e1950ffeadcbbbf98974f2197c1c3f5fd6c8608ae59926e7705b4a4a82b0672ba09db7925ea1dad846861a296dd6fd9a3de703c194ec64e7f6c234f4291ad787983ec2ba57672dae91cb4dbb910790174c7659b89edeb7be7aed7d955e21a98929df7921d54919dcf45bf178251c54539db8468a09650c5b0a5bc400bff996972fc3e759bd36d3b47f01d6740191375a9b42d4cc14499f1bcae4c56327d26c6e69b0309dd95bb882c268a7a5bc625ddc29195524563f5b803eb34587bd6d23f5d07de3c5aaefd385c9cb9debcbd58af369e1f5a97676ee05a8a260518ae35b38ecdcdc70beaa720152f8d7aa49fb5f24b83961fc7a209282da109c6e3ee88da93ae9364c9986593fe30c9ba902493643ca4fda4cb9c010cd20428f28ca861d1529490760736d8a3b84b47100fd27e1a3b43db8e47d4e9398c02734619d91f91fb8a2b38e17227246f3a442e8365e4c651b0f117f3c8352564b42ed449634c17f0d6a3c20211f4494d7b1de5029574bb977ee406f345b4bc709b09af20a7ec31bcc51967b49080685a61f314549e48b161c49f7bee0982cdc47e1e82924cff3c13dd73ede24dcb5fe9110e50db55e64bc22858fa3f8c9d03e28216b581dc35075d46c60b6d7aff1781b8a34d12f26be306bf49f31440061594eceb6122d804befcd50e7b8f58dc7c94910aefb83a4c6a115641b342dc547b603bb63de81203aed487586f601f9aa673e88cb08552bd54d4ec3d16da88d5f21584419cbe6f9ab5ff072d26e8f377040000",
    ],
    [
      "ETag",
      "OzJ84aNhJMwVAnzSisRxjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "dd",
      "6edb300c85df45bb9c03d449f33303bd48d6ac0be03a6de2de74280c45a25d75b2e949728624c8bb9772db6c5807b83736497d84c9a3e303fba92ac922b651c5af06ccee5301eed6072bb08d76965e35561658c0c0f182c8fd3ed9f73f8f36c3cbbc5f24f74af2c1767d7b714184158f5072161d58ae404bcba21f0756f112a84da06eca2a6bb380b95ded8beb74b548ae282f51fa3cb98be3e92c9eb363706a94dcf1ace53fd0f6700cd8136e569083814a809fa536f804c22dfc9a9697b5869ec5c608b0ac85db83c260537383d8a34a2f1cf4c2517f389e0c27e32f837148a046c19dc28ad8bb35cdc71c3aae57f89bb664e18008d3c6b471de3eb75457b2ddc4878b241d9db703fe0d7021b0a95cd609e6ca58f7a2de1bf8aac2bfa4e61f04e9aa94ee820aa824982e4ad51997d280b59d24da8cd7f5099b2d97f17b552a6950c96e70ab3a00edb627e05bbc9cfe4f5a32d81fad2ea7e9fc1d611dd9e684a48bebf93a9d5edf78eee1d508b39d037b63905c65c11b2a3c3b9f0cc7a3b3178f7d45ef3bfa4ee44c0301139c7e95efcab128e7dac2f119b99cf2ad88030000",
    ],
    [
      "ETag",
      "zzNz2+6b5Df2gNZida3vSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` WHERE  `id` > ? AND  `id` < ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-14-1625785879371",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffa553db6e9b4010fd95d5f6a5ad7c013b0ed85294ba366e911c3b059c286a2b7b5906b20db00ebb384aa3fc7b07887369a5e4a1e281d5cc3933676e77f44ae4111dd15024d72514b7ef7ec990b6286896a0f59af3c2def5dc2b2f2b17f262fb3b52c6597274840851b114cbb629b4952c0b0e6ab4f23b4921cb2d2ba46c63a0b679d0360f7b03cb1ed8d6b06f99c85390c673915f21fb52ebad1a75bbfbdc9d44ca2405b615aac365f668efee7add6d217f01d7aafb326517b3a8eeeb498f53c99916323f5af928a05450ac21632245094fcc28fcf4327447b0ac932078273830ce6599eb4a1686e0328f45521675543abaa3b5cc670fea3b736712908f2de28f67ce7a32f683f71ba531c1863045fcc073175f3e54cfcd7a7d79936dc8cc5b9e900d96198b14d4869c7f753c87908d8836e44769187d20c764bc983e3771342dbda9e391cf17641f7eec4f5a0d065f64ee9eb801310d832c6733df098881fa23505ae4b5fa80852954ca1f1aecfe3bd68ac03453d038d79671c84cdb18867168f1d8ee0fc2d88030b4436bc0faa1c18707701085c090a7abe8358be53207164796110e8da80fac67e367d9666c5ba66d032a0c7bfd81d1c3d1d1fb16bd298486a9505ba944d3657aeeb981b30ebcd562320e9cba8c9895a99e36e2aa229eebd45824825ea9ebbef20a8999aa91b98bc0f1c693c03d739a2d9943c2f8ad7f8d7b12b35401a259c132d0509cc8089b464f97be1bb8cbc5788e8c7af4a77b84a2a3ef774f84e0765b7759d7ff2ad7e1419d7f0f386369592376cd83a2fbbef55f112c8cf0131178130d997e5b39de056d4c1ec45040cedf1e3e826bc79ba7bdbf33c4e2a5611adc482d70d5b8aa92f0029a9513592566cf1e9a43c3a235b8d07ffb7a46dfdcf7b68a5145840c72fd5051736755ab6a57a91e41e8c44d59e099a1f70f2755669de7040000",
    ],
    [
      "ETag",
      "qccr8v2IkRmuNoYpzds0Vg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1625785879371"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "54",
      "6b",
      "6f",
      "da3014fd2b93f77110c5794012a9d2600d8c8dd7806ad2a60a99e412dc9938b50d2d43fcf739591b58c718f44b721fe738f75cdf9b2dfa41d31805684693fb1588cddb04d497dc18815c3125f52be3a9045441a048a29172fcd91ca6eb75cb869ff75eaf3dfcea7f9b2557571a21a3052c090ab6684e81c51205dfb728254bd0341a6b80da64b9dde94fc27638d281258ff340ffa6db6d34bb21da554a028922be4ad5f462e29c0aa9a6855312c79351a7df3ecd63e45534ad98b2cb2809a43188cb38349b92381620e5853c2ea724cbf6a4e660d00d1bfdff343f8d05a7f12b986b7a2983a9f59ed1ea0e1a93d3f898a8832bba6e4cc2d378a9c8f2a0a649a7178e278ddef0346b3a5d3c2ccf69f5edae82eef86c0473109046908f7f26f81d44aa936f96d45f6750957c2522c82f4f838b4422f82a2382f3aa8e54b153c535cbad7bae57f7ed3ad640c623a2284f35f666ac6b438a2bc246fc412f16b2344014a6deb179f15cebb05b6858178067ab4b05299d4f7c914aa50f7d0eb0bba788f31e1e8b5a8d882fcb744bcf3783d2756d03d7b0e17a86ef97c13961720f516205ff4879564edf97685a66d5b4aae6beeafc68d3379dbaef84fe11e01b6c05d80eb0f3ce348bde1f8aaf1d117f0d292d9d714418ddf7229685ef9e231cdb9e816d6c60c733eace3962ff485975dbf0bdbf05d55e28f7313eaebcf652f9edd33c34370ae450703d5c12f2b9c2a663ff1eb30f3c57a5b725c86ba9a088e81ff447aa505054bafb0579863f22fe050000",
    ],
    [
      "ETag",
      "sSK0PnvvF3ezq8MGPW9Zbg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 08 Jul 2021 23:11:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
