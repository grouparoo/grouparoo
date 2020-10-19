const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1603147432080";

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
      "1dcf4b7282300000d0bb642d8e4290d09d7ca48ca020502a1b26404002969488113bbd7b9dbe1bbc1f80cb92709edf868e7c81373063595f96cbfd800c1812786155db3945112b5babbd2aae673ae67c1ed41a16c751d53e0e77183f70bc46826e3bf3dde5b6c86cd16622140e329bc89f60be09664d6f4e56557d43e64a28e9539cda661234b4c7545a659ca98749df60dbf7b4b6bad39da30db12f85b64c65d5088c8b48c3287d626b4719bd9ef2a41e10aeb3cf3ee26c959ccbee68f781accca5b74e90a441313968ef8305200fd68e84e7ed6ba6a8babe00ffcdfc3633f2ba1a048f6404bf7f13be216805010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:55 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-1-1603147432080",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553ef4fdb3010fd5722ef2b6d93fe4aa9548daa84d189a65b9282d034458e730986340eb103aa50fff79d1dda8190e0536cdf7bf7eede5d5ec8032f53322509cf1f1ba877dfee45424e08289ae3eb687197ee1ed6e1eea7e7dda56c5cddba357f9ecd10c1354bd26d5540478aa66620a79bb09bd7a2a9682d440713759c8e33b607ced01d0efaf6c4469a8422bbe2e50392ef94aae4b4d73b48777321f20268c5659789edf1bdf7d4ef55b5b807a664efbd620f4564ef53cdef8560547151ce3621ea3712ea18b6941758c17f629a9cbdcfdce574dbcd11fcc41950c644532a5d15a660a2cc78ded4262b99be1053e59b0309bd2b6f11594c14cdb68c4bba85132ba58ac66a57817511ac57d6d2bf5807ab79b45cfb71b8b8f456f3ee627db559f9a17573e9059ea5685280e15a33ebccdc7cbca07e0a52f1d2a847fa592bbffab3fc38144d4069096d3076ed317526f66992252ecb26835192d9902493c41dd14162b3d3210cd30428f28ca861d1529454fb90d07e9c3070e2a103a378729a3a71e6c0d01e26eec09d50b23f21cf355770ce6525246f1d2237c132f2e228d8f88b79e4991632da14eabc2d4c37f0b646850d22e8939ef63aca052a69bb977ee405f345b4bcf6da095f414ed92e7cc41967b49080685aa3790aea9548d130e2cf57de3982cdc47e1d82924cffbc10edb9aee28de5477a8403d4e52af32561142cfd1fa69c03e29a168d813cb507dd46c60b5df4fe2f027145db24e4f7c60b6e49fb1440063594eceb6122d804befad10e6b8f505c7c54910aefb8394c6a0d5643bb41dc347b648f4623f39b2a5aab0f31b73f3e78a673e88cb08552bd36d4ae3df6d98a35f208c2200edf375eedff018e0ae43c74040000",
    ],
    [
      "ETag",
      "5ChdykOSyJEEhdc6pY7riw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1603147432080"
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
      "0002ff8d93c16ee2301086dfc53d12a4a45040917a082ded464a81427a695521134f5217c7ceda0e0821debde3b4cb56cb4ae92599997c23cf3ffe73201b2e1909c99a17bf6bd0fb8b02eca30b16606a610dbe2a250d108f80a50592cbcdfc71fc367c7ede44bb79a723d79d515cecaeaf9130d91b94948407927310cc90f0e540242d01db3225ea52ae9acc23765fb9e2325dc4d37bcc4bc55c3e7d4a92689c4cc8d13b35326ae9aae17fd0f67af4c8bb5a2f20070d3203374ba5d53b643676320d2d2b015da36a9d81210ddc7c28b4aa2baa95ea62a51b748381df0bfac37eefd21ff9c8099551cb9544f46989e311ab2c150bb5439124b8444237310ace9be716eb9c35425c184fd341bf99ef3b90736dece74efe805fdafe2505fd218817c0451b548064a0db285ead28631a8c69259559d1aa3a61e3d92c3983a8645a71d60e6e790b20ecf604dc25b3e87fab45dbfcddd56d944ece0863d10c27248d1f26cb347a983beef5eb7ec77b0b66ae157ac580b349e0f74757c381ffe99c1be5dc84e78456d7e0918ce20ff08b5b12e65418387e00e4cd6e785e030000",
    ],
    [
      "ETag",
      "SkPQBh7ZZkAwP++nb+8Igw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1603147432080",
    },
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
      "db",
      "30",
      "0c",
      "fd",
      "15",
      "c3",
      "7bd9865cecc4b902c596a5ce602c97ce5636f4299164da556b5ba92537088afefb2827cd5a1468811810481e9e431ee6d1be13456c8f6d26d2fb0acac3a75bc9ec860d9aa618edcdc8cdaff8b01f92e99e5ce51dd6eb7aebfdc5055608835234df65d054b22a39a8f13a6aa5a5ac76b494b2898d9a9da6db77baae37f0ba1d67e8204c4196cc457187e01bad776adc6e3f53b75229d30ce84ea81697f939de7ee8b477a5bc05ae55fb35631b4954fb5dce6f99e4540b595cac23e4af14941bc8a9c850c17f60ccbebfeedc12346fa558fc203850ce655568a30a5b70592422adcabaab3d7eb46b952f1e76e4cffd29b1be36ac6832f337d349443e6f954682ad459515913058fefc629edbcde6669f6fad59b85a585b9c321119a8adb50a2ffdd0fa716d3dc326d1b4616d455cbfac79b00888e53a8eb59acd229f5866b531282d8a5a15a12c03a3e8b4b7e0ad5906403555704c6e064e9fba4367c41236e0c9b0db6389038c0dd9a047bbcce1230fbc9801459c36dd6b142d6431723bace339fdc41d821b8ff0e7249c7b0ef46038a29078ace3c4dec8b59f1af6be141a2e85da49258edbb3ff8601f137245c2fa713e2d76324b4caf4e5519c19e2a54e8d4362d13b733d99ac90c864ac0896c40f275312fcf18feecf21a5fc10dda3ff09cd1460352d690e1aca858c7169f6d52a0a48b05a4ee6a6179e1439ec4cfcf7da0faf4fa1101228a1e01f2f198bebc4477f8ce733c5523c546441e3b54047b9321cbc84a3",
      "b322375acee83e7e765d5cea37b9916b72e7f3341d2187429f063a9ea9fd7422abd4b9089368c812af14b3ff0095eb989624040000",
    ],
    [
      "ETag",
      "5FThKdyw8TCwTPm2b534Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1603147432080"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d97db6edb3810865f65a1bd6c2c90a28e060ad44e54c75d27696d77516051048c44cb4a68d14bd149bd41de7d876aa2432d0b722f926886f33bf3718623fad97848b3d8181a7769f2ef8ec9fd9f09535ff4c39ce53bae72f8b31559ce8c3383299a40a435fdfbe1f2bff97ee184dfe245324eb2c9b7a72fefdf43441eadd9861ac3676395321ee7c6f09f6723a31b06b2348600b5dfeae7e9f5329c8473706c44ac1dd75f67b3d178161a2f67a56095ca5cdd1646295c2ce7d3eb49b78ed3df9241e2293f4d92b02c66f2344dbabda5712c599e9fa813f92ddd6e2bd1f8e666168eaebb55348ba548e3df503ea6a72ab87aac141f6737a365777c4c55ad4417a365d81d9f2bbaa9e5b49c5e858be5e8ea73b7eaf676fdb4e9b3d5df5fce8c7b7137672b26591631ddc55b29ee59a4a6fa80e4f0df391be4622723a68b07c1c54222c56e4ba51003f00cac017611c1b667130bf908e2b888a84a4506a15f17909aa184a27c2e9ee078185847c8e2198ecaaaf8fda8fd05837e0a65ca4ae313938f22cd4b9bddff74a00fec47919f19894db97a457925c58e69d99e497cd3b34aa792bb2a624579ceda972c27307125b3908506c81aa02a4d6c3a3e729c00077618b404fe81ad2126436cbf43a8d8ec3a6df5c9e7344a790d38d44df266440c2cdc8afa118e2fafe74b4c6cbba68d4dab966407617329b04de21e52584d5cd706e0565cab1397948289648af19a297691881e4a4792bc7aac5ed4189b3e140a231313fbe422bbae6f924316d284f6080edaa149277495cf684315ad2a2e14cb5742c6a587466f2ed2871a07c40ca0b711fcb8ed64c70d1bf60b1da2d84d661ffba49dd9ee64764ac12c9515f227b1ce720513e1cdc1ef5f3d761f60dddbaececb0c823e756d2ef996961f92384de400d95e3bb2d3895c7df205cbd2d2584494a7d50ec479613bbdea0b230b130ce71946d7e95d6d79d01efe2186fb0b6f808f8c2eb793d72b05978c2715e15f9cd5e6f4fa419b6e1f5c5fcf69df0466c76f27eae866e499b54296085e831523cf3b32b7bc4ed62a9f0993aa36a5cf7777a9",
      "52d5d48a0adbeb555d6847cb71a0c2fafc1e296847797d18f1760bb2df44c62e3932b5fc4ee44a30db49ce587566c7f0d666bc9addfceea7c3ef35a9753fc33b15c06dd20ed6b5032e6c5a6dc0972c4113da72d091b1157442e36a225e08a9d6fbd29c36c6569c6a33e8036cebaec6a66bc3ec217deada5cb202643a87efa65aa20530216efbd0c2e857e0efaff7b0f11ede359fa5803b5dcef4752e80fc8acbddb9d05070fd18eac4ce8c88c2b79bcb5419c322b797ff010300a2a23b0d0000",
    ],
    [
      "ETag",
      "2IVkHzRyS5EXdSgBgnGXwQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ff1dcfdd6e82301800d077e9b53308d5d1dd0dc2bf945410d11bc2a00b1d0bfd461b05cdde7d66e70dce03356dcb95aab51cf888ded0d29864ddae13693b98f19876968acf7140f0b0804d6cca26a84e74610a6a5a1eb317276641825dc3cc76fafbd3b436f4b2a9c82d35fcd976c22008bceb907afaa3fa32848b5599e7ed4cc18bf174f30973b7792858b2b083e8a2520b5bd25e55832efaeb399b9b719f8a4cc3b19712b09c45319ea2a20f0b0c26bb5cf97b7fa87c46f6d68e6540ee5de782f58aef51ab0be707a315e2338889ab5a3c67d6969015fa6fd67a01febc3abc99f8847eff00373dc31705010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:57 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-3-1603147432080",
    },
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
      "0000000002ff85535d6fda3014fd2b91f7b80209a40490d08a205d9920744968b54d53e4989bd46d8869ec74eb2afefbae9dc25a55ea9e62fb9e73cfb91f792277bcdc901149797e5f43f5f8e156a4e48480a239be5efeb928edbbeef7687d3313e1c7eab7e37e8926e33122b86649badd15d092a2ae18c8d13a6ae795a877b412a285895abd96d3b77b8eebb9bdae3db09126a1c816bcbc43f28d523b39ea740ed2ed5c88bc00bae3b2cdc4f6f8de79e8767695b805a664e7b562074564e75dcd4f85605471518ed711ead712aa04b69417e8e01f71939ebdcedce674dbce11fcc01950c6445d2aed0a533051663caf2b93958c9e8871f9e240227fe14f638b89a2de964949b770626da8a2897adc81751eae96d63c385f85cb493c5f054934bdf09793f674b5582f83c8babef043df52342dc070adb175666e015e507f0352f1d2a8c7fa592b3ff767fe76289a80d2129a60e2d97dea0cec619aa51ecb06bdd334b3214d07a9774a7ba9cd862eb89b1428f28ca861d152948ec3fa1bc71e241e3b6589eb423f491d1824ee006c9641df03af4bf627e457c515ccb8dc09c99b0e91eb701efb491cae83e924f64d0919ad0b356b8ce9025e7a54582082dea969afa35ca0926ef73c88fd70328de7577e33e105e4943d46f738e38c1612104d2b6c9e826a2936d830124c96fe0cc166629787a024a31f4f44f75cbb78d1f2233dc6016abbca7c491487f3e0b3b173405cd1a2369087e6a0cbc878a14def7f221057b44942beaefdf01b699e42c8a08292fd7f98083681fffd6887b547282e3eaa488577dc1c26b506aba0d9206e8a3db23dcf3e25065ca937b1a1333cf44ce7d019610ba57a2ea8597bacb311abe51184411c7e607ab5ff0b0e42c18f74040000",
    ],
    [
      "ETag",
      "PzHn0k2ZSUhDoR+rx14JSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:57 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1603147432080"
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
      "c1",
      "4e",
      "e3301086dfc51c37d5a66d28108943bb5bd84aa12d6d38a015aa4c3c09669dd8789c5655d577671ca02058295c9299c937f2fce33f3bf64f5682c5ec5e164f35d8ed5101eeda070bc05a39a497d115020b18385e10799698689efd486f4b758cbda79fe3db24379bf37322307b8092b378c772094a208bffee58c54ba0b64cabbaac564d1630b735beb84c1793e925e5a5163e9fde24c970948cd93e38340aeef8aae1bfd176b70fd8a3be5f400e16aa0cfc2cc6ea47c8dcc4cb445e1a051dd4b5cd005903371f0aab6bc3add61daa74fa9dee20ec77a393a8df0b4f43e294ceb893ba22f46649e331a71d570bbd2191acdb23c2363109ce9be79aea5234427c3899a683a899ef23904b8bee65276fe0abb6cfa4e2df04e902a46a830aa804d8364a9a1517c202622ba971c58d3960a3d92cf902f14a582d453bb8962d8072eb037091cc86ff5b2dd9e67d57bf87e9f80b818ecc7040d2c9d578990eafe69ebb7bbddfd1d601cead26af20789b74c3e8f4f86410be38e797f66ea27362676b0858c6e907f8231d8b73ae10f6cf672692995e030000",
    ],
    [
      "ETag",
      "9Lp4Pc+TYml5s2q/EYLfpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      jobId: "grouparoo-job-4-1603147432080",
    },
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
      "0000000002ff85546d4fe24010fe2bcdde977be165810a85847808f56c02946b8b46ef2eb0bb4ceb6adbc5ee56630cfffdb6ada0c6443f75b3f33cf33c333bd32774cbd30d1a20caa3bb1cb2c72f3782a21a0245227debe56764ecc65727d3e46ee1f616931f913b7b180e3582172c49926d0c7529f28c811c2cfd4694897c4b3221ea3a51ddacb7bab8d3327b66a78d2dac6912e270cad35b4dbe566a2b07cde65eba110911c540b65c3698480ef7cdfb76739b891b604a36df2a36b5886c7ea8791c0b461417e970e96bfd5c42b68284f0583b78216ee8cfb7991b9c248d4883ef3903c298c85355b8d2299848431ee55999150d9e50e9f2d501f9f6d41e07c6f79ae18f4eedd578e4075fd7526981b541a4e1079e33fff5ad38ae57abeb87646d9c7aeecc58eb2a431e835c1b1767b6671b7bcedf1ce30e0c8d63c3f526b6679c5c1e42237f5c33d67c539e8ca9337302a385b1e19e9efa7660142ddf80543c2ddd0684c650387deea7f3fe110b02514442155cf57097b42cdca721edb1d0ea1cd11003a516ed1d910ec5ac6f82b9a140344f15d94b164945aa831ba0d0a2c03005ca42c0b47b44ad0e852eb54c0a60f6597fd345bb1a7ac8b88209975b2179d55574e13981bd0abce57c3c0aecb28c90e4b19a54e68a225efb54ba480dfaa0ae5d11e5422b154fe4cc03db1b8d03e7dcaea6620a11618ffe9d9e8b90c412349a64240105d94c6c74d3d0c2f59dc071e7a3a966944fbdd823241afc797a21048fdbb2cbaafca2c099d97e309a2d4a0f7bd03989f312755f1d501bb7711db7ebb817b4da835667d0321b18e32bb4dbfdd3443ddb555ef47b697b97a8baf220840c52f6f9ab6a7019f86c43f7fba2a17a63b48a9e34c5f508315968b00caa51e249e1e5c0b6bafd1e2ac1997a17b3cceebe67458e22232490aae782aa7dd1755662b93c808a7fd0723ed7eba2a3ff014ae319a4ad040000",
    ],
    [
      "ETag",
      "RuHaCOlZBLmqPO7PD+gOMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:58 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1603147432080"
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
      "0002ff9d955d6fda301486ffcae45d16223b1f9020551ab4698b46a1a5f46aaa90490ec1ad1367b6d31655fdef75b229c0ca22e84de2f7f8bcca798e3ff2869e5816a31e5ab0e4770172fd3d017d5b0ea6a00aae9579e52253805a08344d4ce6cb84db632f4da3d5e36b9adf9e8cd5bdbfec9f9e9a0c15ad20a5a8f786960c78ac50efd71bca680ac6c66293a0d779391e8e67e16538358154c465607c3f1af507a310bdb76ac39249a5e795a88d77b3e9707cd9ece3f44b365338e3c75912c86290c779583ea7712c41a9237d42cd699e6f4c83c96414f6c7cd2e9ac552b0f80bce6776ac83ebe78de36234e9cf9af363aab796e8bc3f0b9bf395a6e9564db3e1757837eb5fdf34bbe6f3d54b7a48ab1fde5be8512ca6b004095904e52ecea57884480fcb03a2ccd739b495286404e5e299e46a2291a2c8a914a26d226db74d3ad8216ed7756cec6393c7454435139949bdbf33a5212d34e553f1628e07724d82ac86e6a42cabe7b309772b847274053ca1b5fac981a95aad9e4ad9f901af556d5624d27aeec2ec670eb5f43dcb767dcbb788e7d7412d0b3840b8b86b61af9636b6711bdb6dbc2992589e4f70b7eb056e18ec49fc46ec1e717ac43dc1b8eaf436eba69e4b909a6dbe7b562c98d6b54ca24a770fc125b663d99e6711071bee3abca45cc17fd40eb2ef12cbdd83ecef22938e13ec47f61b9137865121394056eb81d90cc079adf9e24fc03f84da768859dfc032e0aeb31faca9031dd334c7fdcc12ec42db1e76f643078dd004d78e7321f56a5dcba1d262d3829895323804d82d7735b13aae6556e29075dd9db2036c79ce278ead422b60c7e974f70213fc2ff0c3dfd33d586b503752989b4241794904a6beeaca38132594b9f97a65612d1451f3cfbc621af5aadade3f00ecec379591070000",
    ],
    [
      "ETag",
      "wOl2N5mmchjxmpQ+NsU8fA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "02ff1dcfdb6e82300000d07fe9b318eecadeb82aa099ad8c002f4d53ca258ccba04ecab27f9fd9f983f30308a56c59301f3b36803720886aede93e1e8f8e0e5968c65e460a6c286329666778bcd7c79ca3986dd76178c0ac4c8ab6ca2f62fbae72ab496c253a95876a65e5e4c82354bd5e421582b5844ce1daca95a340c8beda8cd927893d8bc28dd067a8a53a96298ff4cc3e69ea56958957997eea9ccf311407de42ec36bc3637ab2710dfa30f5f08b976d5c040c2efbe8aa94e4329b8f5e2e2866b37d6a87bc2fb2d5dc00eb0756a67b6e0f635d30ccbda81ff26e66262afabc3c8cc66f0fb07a845559c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:59 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-5-1603147432080",
    },
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
      "6b6fda3014fd2b91f7718584f20820a115d1b46582b08650b44d53e4383799bb2486d8e95455fcf75d3b85b5aad47e8aed7bce3de73ef244fef032216312f36c5f43f5f8e95ec4e48c80a219bef6e3afc56c7fbbdd4e3fafaa1fc39bbb6b775f67930922b866495aec72684951570ce478b36e6795a877b412a285895afd5667e0743b3db7d73d77860ed224e4e982977f90fc5ba99d1cdbf651ba9d0991e540775cb699284eeff6c3b9bdabc43d3025edd78a368a48fb5dcd2fb9605471514e366bd4af2554111494e7e8e03f31892f5e676e735ab433043f7006943151974abbc2144c9429cfeaca6425e327625cbe3890b5b7f066a1c5445e176554d202ceac842a1aa9c71d5857c16a69cdfdab55b09c86f3951fad6737de72da9ead169ba5bfb6b6375ee0598ac63918ae35b12ecccdc70bea2720152f8d7aa89fb5f2737fe66f87a209282da10946ae33a09da1338ad3d865e9b0db8f5307e27818bb7dda8d1d36ea412f898122cf881a162d45990c807512b7133940cfa35edceb4474d887883aee201ea4fda4d71f91c319f95b7105975cee84e44d87c83698875e14061b7f360d3d53424aeb5c5d36c674012f3d2a2c1041efd474d0512e5049b77bee875e309d85f33baf99f00232ca1ed77b9c714a730988a615364f41b51409368cf8d3a577896033b16fc7a024e39f4f44f75cbb78d1f2133dc4016abbca7cc93a0ce6feb5b17344dcd1bc369087e6a0cb4879ae4d1f7e211057b449426e375ef09d344f01a45041c93e1e26824de0a31fedb8f608c5c54715a9f08e9bc3a4d66015341bc44db127f6080fc4802bf526e60ebac79ee91c3a231450aae7829ab5c73a1bb15a9e4018c4e1fba657877f603ad27074040000",
    ],
    [
      "ETag",
      "5bJmCqQWWA+OrZ8HVG7qug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:43:59 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1603147432080"
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
      "00000002ff8d93614fdb301086ff8bf771a994402928121f9aaddb3a8516d254084da83ae24be6ce893ddb29abaafef79d4329684c0a5f92bbcb73f2bde7373bf64b349cc5ec4154bf5b34db0f15ba1b1f64685be92cbdb46a2cb280a1838ac8448f16771fa3db3feb9bec36ff9e48be06a82e2f89b0c54fac81c53b560a94dcb2f8c78e355023b5154ab675b3eab280b9adf6c5459e4d675f29af15f7f96c99a6e3249db07d706ce4e060d5f1ef68bbdf076cad1e322cd16053a09f451bb5c6c24dbd4c0bb59638b0aa35055ad6c1dd87caa85683516a4095c1d9201a85a7d1f07c787a125e84c449558013aa2174b9a0f198530e64a61e49248b4e88305d4c82cbeeb9a1bae09d101f4e67f968d8cdf71a2885b1ee6927cfe041dbbfa4847782740142f64115361c4d1f25f40a3837686d2fa9ec0ab43e62c97c9ebe81a0e14609de0f6e440f20dde6087c49e7e3ffad966cf3b2abcfe37cf286b08ecc7044f2e9d564918fafae3d777fb8df64ebd05e1b455eb1e86d1285c38bb3f351f8e49c4fcabb89ce899d69316005d00ff04d381697202deeff0277a31f915e030000",
    ],
    [
      "ETag",
      "Bp6SY+1WxjQRWTJBldjaag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      jobId: "grouparoo-job-6-1603147432080",
    },
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
      "a33010fd2bc8fb657795c31c093452d4cda6641735471748a3eea1c41843dd129c62d3aaaaf2df7780a6872ab59f6c79de9bf7663cf380ae791ea3018a787a53b2e2fed39588500b31455278d5d5829eae56be112f3d4b9d52275a99653a1c0282572c49b6bb8cb5a5280bcae4601974d242943b5208d18644ed7e5bef6353b76ccb34b083812659964c797e0de44ba57672d0ed1ea43ba91069c6c88ecb0e15dba7f7eeadd1dd15e28a5125bbaf15bb2022bbef6a1e678212c5453e5c06a05f4a56acd996f00c1c3c13e3e8dbebcc1d4eb69d14c0b79c3242a9287355b9821454e4094fcba2ce8a060fa876f9e2820277ea8e43ed6b4b0b4613773d1e05e1e78d5420b0d188d482d0f7e63fbe54d7cd7a7d79b7dd68137f31d3365065c2332637daeaa7ebbbda81f3b7c4d86443ed585bf827aeaf7dbf780a8d82714bdbf0b8be69536fe6859a8eb1b6984c0237d4aa96c74c2a9ed76e431265ac72fad84fefed275604a288644d706de33ed11d7c1425914d13c7ec45096651e444768f9811a64716b3e28811e0a92a7bcd22b9c88d7e6cc73189cdd83629b6fb3dd33659dfe83b7ddd707ad6916931ddd18989f62d745770c54eb8dc09c99baea295ef85ee3af497f3f12874eb32125266eaa4315715f1d2a7822201f44e5dfb2aca0528555fe4cd43d71f8d43efdc6da662ca5242ef831b988b846492019a1464cb142b662286a6a1b345e085de623e9a02a3feeab30342a2c19f87674278bfabbbacea1385decc0dc2d1ecacf670009d93acac51b7cd0519d8c06d6cb4753dd48d816e0e74ab8331fe8df6fb7f4084d96ef2a25f4bd7bf40cd93cf1256b09c7efcab00ae031f6de8615f000a1b032a30698ac308515969",
      "d08235a3c4b7959703dbc2b661a01a5ca83731c7310f3dab725419d996e5eab1a0665fa0ce46ac944f2008c204cc615d20fa1ffa73d87aad040000",
    ],
    [
      "ETag",
      "1tOcKWWR2dUI4tKc8bW3ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:00 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1603147432080"
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "80",
      "ff",
      "4b7d944514455dc2c3d0a9c4093a467c306629eb6d56bbdd6c3b0c21fc77af98804f8bf8d4f6fa7dbd4bdb5bb10f5909e6b3b92c3e1bd0cb8302ec939bc4601a650d0d355606588781e50591fc28bbbc79c6defdfcac39e45a666793fba6180c8830d91b949cf92b964b50c230ff65c52a5e026952106097b59b8fc649781bc6142851b8c0781645c1300ad9bab31572a98d4d378bad384de2d1f8b6dd53fc5f1a152ed57e4a019500bd9f23eb940ba1c1983d3d3429afeb9d349c4ca23018b75bbc121aa5f887b990fb1aca2e76c64d340992765e70fbeb89ae83246ce78de5e5af9a92d143384d8287c7762b4ddfbecabf5cf5ebbac3de711e430e1aaa0cdc2fae35be436647ae410c6557e0196c7406eef108de6c141a9b9a6b448f225edf3bee777bc7a7e7a7bd93ee4597388519b7122b4267532a8d59b45cc5f845edc11cb0590f9716cca3463adb803bf6b2dffb4972852e31dd956f75031d9671eab23b69999f736560fd0d38974d05c3030000",
    ],
    [
      "ETag",
      "a/c9FWo3Kb5u+aric5OKug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "000000000002ff1dcfc95283300000d07fc9b976d8ace02d5816015331a62c1786252c65294d98b238febb1ddf1fbc1f90e639e53c99ae2d1dc02b585349dbe77bf7aaea8a5f2c72d0d6b3a0c4a1d69c8d7276be6cef7e37a69aaf44e216cc3e0397fb562b6de2f1cd31e1ad3da8bc3a6729c4a597c6621f7e045895359bad6ca889e21a554765093d55430c61f112665120a0180de838460166db32da7d2daefec1ea54bd3e094ed43997eb440b5488640ecb5365c62669cc8dd85bf29e2cf8066782ed085f8897f37e4221d3973589c9f70c76802e63c3284f9ac74c7ed6b41df86f26d33ad2c755a729a30cfcfe01fa9b709905010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:01 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-7-1603147432080",
    },
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
      "6f9b3014fd2bc8fbdabc202d49a468cd52ba32256423a4d5344dc83617e696e0149b3e54e5bfefda345dab4aeb276cdf73ee39f7c113b9115546268489e2b681faf1d3b564e48880a605beaebe2d1741f965f370ecb96cfe300b2f3d99df4fa7881086a5e876574247c9a6e6a0269b75b7a865b3a3b5941d4cd4f13b8393be3718fa43cfed8ffa485350e60b51dd20f98fd63b35e9f50ed2dd42caa204ba13aacbe5f6e5bd77e7f676b5bc06ae55efad620f4554efbf9a9f4bc9a916b29a6ed6a8df28a853d85251a2837fc48c9dbecddc1574db2d107c273850ce655369e30a537059e5a2686a9b954c9e8875f9ea40d6c12298270e9765b3add28a6ee1c8c9a8a6a97edc81731eaf964e189dafe2e52c095751ba9e5f04cb5977be5a6c96d1dab9ba08e2c0d1949560b9ced439b5b7082fa89f81d2a2b2ea897936cacffd09df0fc510505a411b4cfdfe091d8cfa6396339fe723ef98e57d606cc4fc63eab13e1f0f619831a0c8b3a296452b5979d9d8cb80d1d475c73c1d329ea56ce443cafde171ee52d7632e23fb23725f0b0d6742eda4126d87c8551c26419ac49b683e4b025b424e9b529fb5c64c01af3d6a2c1041ffa9696fa242a29269771825413c9b27e165d04e780105e58feb5b9c714e4b0588a635364f43bd9419368c44b3657086603bb1ef87a022935f4fc4f4dcb878d5f2177a82033476b5fd92751287d1576be780b8a465632177edc194918bd298deff4620ae689b84fcd804f14fd23ec590430d15ff789808b6818f7eb4c3da2314171f5594c63b6e0e574683d7d06e90b0c51ed8c3c1c9d823165ceb77b1913f3af4cce43019610b957e2ea85d7bacb3156bd40b088338fcc8f66aff17ba817cb674040000",
    ],
    [
      "ETag",
      "OJMLElBUx532bCxAIV3ofw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:01 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1603147432080"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d936f4fdb3010c6bfcbed6d2aa5105a1489172d2b5bb4f47f788110aadcf812cc9cd8d84ea752f5bbef1c5899c6a4f026b9bbfc4ebee7fce4003f45cd2186ad289f1b34fb2f25baa50f56681be92cbdb4aa2d4200e85849e4e3324cee76c9229c6ea34c6f9f7fcc5edc7879754584cd1fb162101fa01028b985f8fe0035ab90da72259baadeb459006eaf7d719dad92d937ca2bc57d3ebb4dd3d1389dc031383572e6d8a6e53fd1f6700ce0496d5758a0c13a473f8b36ea097397789996555a62cfaac6e468a185db0fa5518d6646a91e557ac35e7f109ef7a361747e165e86c449953327544de8ed9ac603a71c932bf58b4442ff8c08d3c624b8689f3baa0bde0af16132cb06513bdfdf40218c75af3bf903be69fb9794ec93205d80905d50893547d34509bd619c1bb4b6935476c3b43e61e3f93cfd00b19a1b257837b8131d8074bb137093ce47ff5b2dd9e67d575f47d9e403611d99e18464c974b2ce46d385e71edeee77bc7768174691572c7a9bf4c3e8f26238085f9d73adbc9be89cd8990603c819fd00df8583b860d2e2f13711be49f25e030000",
    ],
    [
      "ETag",
      "hQ0IYvIP0Mb4TpbqKNztBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1603147432080",
    },
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
      "fd15445f7af105db18634b51eb3ab8a2f2a58575dbf4c55e96816c022c61975851947fef2cb6d3449192b7d5cc3973ce5cf6debce6456c4ecc88a737355477efae4464b64c5034c52819ba85effdf9befc54ccc87e3dfe5b15d3607f768608ae5992e665066d29ea8a819c6cc24e5a89baa495106d2cd476db3dc71af4ec913de85bae85340959b2e0c535922f952ae5a4db3d49775221d20c68c9658789fc31debded77cb4a5c0153b2fb5cb18b22b2fbaae6e74c30aab828ce3621ead712aa2de49467e8e03f318ebe3cafdce134efa408bee50c2863a22e947685259828129ed65553d59cdc9b8dcb270f33f416de8c181f5b46389d7bdbd93424ef7752a1c0cea0d20849e0afbe7dd0cfdd767bb9cf77c63c582f8d1d7699f00ce4ce5807e75e607cbd304eb469386b193b1e372f63e12f7d62d8c67a3e0f3d62e8c1c620152f1a4f844619683fc7a9f92f57a50954510987e4766439b4e75ae32889462c7107c328b1208adc6834a483c862631bec38028a3ca5ab372c5a886238ea47437be45ab6e38c63ca7a716239b695008c1d3aa6ce90454e9f4603f3a165ee2baee09ccb52487e989df93bf089b725c166359b12af6923a175a6ce0fe674134f7d2a6c1241aff4f5a0b35ca0925e84bf225e309d11ff9777d8fd0252caeec21bdc7e42330988a615cd4141b514310ecdfcb10e7de2af57d385ae850745ee4a1dffb9f1828b632880042a28d8db4346709378eb5b9c8e14a178a6a8826b571c37caa4d660151c36cb73ede5c4b6fb43db351b70a55ee41c57e71e8f5357841c0a756ce870a4e6c351ac968f204ce2",
      "425678a398fd07a89ba2f022040000",
    ],
    [
      "ETag",
      "T58nIEXJM+nCTwO9ZrnARw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:02 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1603147432080"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d956153e2301086ffca4deee341276942699971e6d0ab1e0e2242bd2f370e13dba556dba69704d471fcef97566de1e43ae20720bb795fd8a79b0d4fe82ec9233440d749fc6705f2f16b0cfaa25ccc40ad52adcc47217205a88340f3d828e134f825423e0d1896637c3a4d8bd5fc223e38300a15de40c6d1e0092d1348238506bf9f50ce3330b6243202fd5894ebd124f04ffc994964222a1393cbf1787838f6d173a7362c13a9f4a20a6ae33c988d2627edbe947fca660a4fd2fd2c31e411c8fd3c49b1e0512441a93d7d422d785134a6c3f3f3b13f9cb4bb781e4991449f70ae937d1da95e378ee3f1f93068d7475c6fb4e8c730f0dbf54af36ca3a66074e6cf83e1d9b4ddb558dcdc671f79d457cf1d742bae67b004097908e5292ea4b885508fca0151e6d753e82ab1922194cd33e26a23966255702944d764ba6e97389812d667d4c62e36bad40c8b4e446ea49773531ad242f37426eecd78206604b25a9a495956ef6b93261542b9f2650275700a722d1255c770fb92c0dfe1a12acf0a4556ef9ef1b4b1929e65b3be455dab6fd7492d578d62c95305bbb7ec9e6791c666631b77b1ddc54d99c4eab9b8d7f388c77c6f87f00bb107840e08fb8671f5ac37699b6f3ee261926e00fbe519790b423011d9897a6ca637ddac975a8439162396bd51640be1f696c72ceabca7b0b7711d668077e2daadb8b4369c48d0906e8462158af0ae4ec4f16bc6fe103521966b1a45b04528dbbbc98ee35af43d0bdd86ee53e2ed86a6add04d3dc38c6bde745c68504b21a33ac3c3b714fd0835f1a8e599b38dcdcbd94df6ff8099e785dfa3b06d6697b8743733fb97f9ea75bc0f1f0dc3540a735528286f09cfa12f77c6912889ccb11e94957450c8cd9fe6cf44a341d59be7bf29394b5992070000",
    ],
    [
      "ETag",
      "eJTVocaPT40rL0JPlpuSQg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "08000000000002ff1dcf4b7282300000d0bb642d0edf02dd1114ad824a89a1b061220d7f410288d0e9ddcb74f7b6ef079038a65d17f54d496bf00e2622eaeb787d6c3428bb94b8378ad1a63aa061869faec6aac16b0c7bbae801f9faa8abb60f126b28be7d8d78e596c8ea0d0bf33513ed20aaecd6979d8d8224eb9cf91eabb87dc6341a6e672cbd0401e56ae63c277ab10eb5e4bc250adf07c5d18011c7aebb13aac51e3a366a5d772c191c0b5d2c6bb90d17c5de3985d67d3479139973ba9f316b76496a961887f793e8765ca466213278b002f4f5c819eda27c99498aaeafc07f33eaa7075dae90124619f8fd03fa875f6c05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:03 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-9-1603147432080",
    },
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
      "535d6f9b3014fd2bc87b6d0229694823456b94d21529211b9046d33421632ed42dc1293699ba2aff7dd7a6e95a556a9fb07dcfb9e7dc0f9ec83daf733221192f1f5a681ebfdc898c9c1050b4c4d71bb52993605fdc96237b93f34df4b77207e5748a08ae59926e7715f4a4681b0672b28efb6523da1d6d84e861a2de796f3072dcc1d01bbaa7ced8419a84aa58f0fa1ec9b74aede4c4b68fd2fd5288b202bae3b2cfc4f6e5ddde9fdabb46dc0153d27eab68a388b43fd4fc5a09461517f5741da37e2ba149614b79850efe13f3ece26de63ea7db7e89e03d674019136dadb42b4cc1445df0b26d4c56327922c6e5ab0389fd853f4f2c26aa765ba735ddc28995534553f5b803eb2a5a2dad20bc5a45cb5912acc2349e5ffbcb597fbe5aac97616c6daefdc8b714cd2a305c6b6a5d985b8817d4cf412a5e1bf5443f6be5e7fe04ef87a209282da10ba69e33a283b1739e1599c78ab17b96150e64d938f3cea89b39ec7c08c33c038a3c236a58b416b59b79744c475e3aa0a3513aa44e9e662370523a1c00e6f1724a5d7238217f1aaee092cb9d90bceb10d94441e2a749b40ee7b3c4372514b4add465674c17f0daa3c20211f4414d071de5029574bb8330f1a3d93c096efc6ec20b28297b8c1f70c605ad24209a36d83c05cd52e4d83012ce96fe2582cdc4be1f83924c7e3d11dd73ede255cb5fe8090e50db55e64be2240ac26fc6ce117143abd640f6dd419751f04a9b3efc4620ae689784fc58fbd14fd23d4550400335fb7c98083681cf7eb4e3da2314171f55a4c23b6e0e935a8335d06d1037c51ed943f7cc1d10036ed4bb98371e1f7ba673e88cb0855a3d17d4ad3dd6d989b5f20584411c7e687a75f807e9f6ed8b74040000",
    ],
    [
      "ETag",
      "VtWgTIvfhg6/WdiWRzl31g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:03 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1603147432080"
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
      "00000002ff8d93614fe3300c86ff8bef239dd44137a0121f366e1c95ca065b39a143680a8ddb0ba44949d2a169da7fc729dc407052f9d2daee63c5aff376038f427188e15e944f0d9af58f12dd950fe6681be92cbd6aad2c4200e85849e4998aa6bf55b2970ff820bde17f9e57b347bc3a3921c2e67fb162106fa01028b985f876038a55486db9964da5966d16805bd7beb8c8e6c9f417e595e63e9f5ea7e9689c4e601bec1a39736cd9f2df68bbdb06f0a0efe758a04195a39fa536fa01739778999655b5c49ed58dc9d1420bb71f4aa39b9a19ad7b54e91df7fac3f0a01f1d4607fbe151489cd43973422b42af17341e38ed989ceb671209fd7d224c1b93e0a27daea82e782bc487c9341b46ed7c1f814218eb5e77f20f7cd3f69994ec9b205d80905d50898aa3e9a244bd649c1bb4b693d476c9ea7a878d67b3f40bc414375af06e70253a00e9563be02c9d8dfeb75ab2cdfbae7e8eb2c917c23a32c30ec9928bc9221b5d5c7aeeeeed7ec76b87f6d268f28a456f937e181d0d0e87e1ab734eb577139d133bd3600039a31fe05c38880b262d6e5f00c66ca5d45e030000",
    ],
    [
      "ETag",
      "Fn4NVnI+c5d5LXdZwvOkeQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      jobId: "grouparoo-job-10-1603147432080",
    },
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
      "c8fbb24d4d30094968a4a86329d998f2e8c069d73d9418c7a46e01a7d8b44aabfcf75da0e943955abe60f99e73cfb9d7f7dea32b91ad501f45627d5df07cfbe15246e800714dd770fb0bdfdd5d983f78923ab7cc95d675b24d3aee60000851b2144d37096f2859e48cabfe3c6cae73596c682e650312352cdcb0bab86dd93dbbddc20e069ee2493c16d915b02fb4dea8be69eeb59b6b29d709a71ba19a4ca68ff7e64dcbdce4f29233adcc979226a828f36dd1a34432aa85cc06f3100c148ae70b9e5291808527e62afaf2327553d0b4b906f08d609c32268b4c97b6200593592cd6455e6545fd7b54d97c7640a137f686c4f87c6084eec85b0cdd907c5c2a0d024b832a2324813ffdf6a93c2e178b8bdb74698c82d9c4584299b148b85a1a67dfbdc033f69cbf05c66d3e308e8c5970ec05c6d7f3c7901b0e0f8ca558552763ec4f7c62d8c66c340a3d62941d5f71a545567925344a78e9f3a19dfeeb472c095453c5ebe0a287bbd472f06114473d163bed4e14631e454ed4ebd07684d9a1cded55c429f07499bd62d14c664ecf7670dbc6d4b6bb0c770e7bb413af3ad466711c3931a538eec5f0596877806e73a1f9b1501ba944dd537416f8c45b90603e1dbac4abca886991e8e3da5c59c4739f1a8a04d01b75edcaa890a0543e903f255ee00e897fead53331e66bcab6e1354c454c13c5014d739a72cdf3895c41d3d0c92cf4893f9bba6360540f7db24728d4ff73ff4420db4dd5655dfd11f1275e48dcc949e5610f3aa54951a16eea036ae1166ee05603db",
      "c46af5ad76dfb29b18e3df68b7fb074418ed3a2ffa39f78273545f053ce639cfd8fbaf0ae02af0ee86eed705b0b030200383a605cc1053a508cb793d4b222dcdecd9f0392d548173fd2ad6b59d7dd3ca1c65469ef24c3f5454af0b145a8b15ea1104411881296c0b44ff0315cecec0ae040000",
    ],
    [
      "ETag",
      "X0zzh/Jelm8wcAo1qlyl5A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:04 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1603147432080"
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
      "00000002ff9d956d4fdb3010c7bfcae4bda4cdec3c2712d20a04e82805dab0174ca83289dbba247166bb3084f8eeb333485ae8a296174d7de7fb37f7f3ddb9cfe09e162908c11d9dfd5e12fef47546e4955e8c88586652a8af921582800e2012cf54e4599cfc1c7dfb810f6f8e50e91529bca18bbdabfd7d15219239c931089fc194922c1520fcf50c0a9c1325a3a90a904fa55ef7877174128d942367a9760caf0783dec120022f9d5a30a55cc84965d4c2713cea0f4fda7519fe944c254eb3dd243352a484efa6a1e504a7292742eca8636282cbb2111d5c5c0ca2deb05d858b94339a7e42f940775564f2a1511c0f2e7a717b7c8ae54a898e7a71d41e2f24ce57728afbe7d138ee9d5fb6ab2693f963becd51dfbe74c082dd8dc894705224447771c9d98224b2af0744a8b767a42bd8922744174f05571b33ce9625e68c7595a78b6017b9d042b6675b26f4a10acc58822565858abd1eabdc8064126723f6a8e603d82a80574b352ad3eaf950b935835ef5722c716d1d3249c494f1b4f6e0e4cd657d277faa248d84e5f5feb16aec8cd4260a2c23304c1baa8f5b7b255f922d0cdb0f0c585b263461179a5dd8248b0cc7873ef2adc08e820d815f9019222b44f61e84d591af323bb560407983fc83cd0b21d5f1bd39b2c5abc7de06d8b10ce4eabc8ca0c9688a33f11fc6f52ddfd4f28f24ce3a72006d6f33b2d38adcfcf21129686d8c139cd1e6045251d9ce56f5b57c0359c840b66f78f636886b5ba6a7dac3ff88e1bee30d10daccebb6f27ab5e09464b386f02c2354d4d6fc5e9bee36b8bea3fad83714b3e36f266ae966e8192b85ac11bc3556043dcfd9cceabd67bd7d9ded83273592979ca98b42107d4704aef5efc638649a485d7ca14ea50312acfe324fa90461559497bf83543c7390070000",
    ],
    [
      "ETag",
      "KTcVR/JaCZD1p7nd0Zij+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      "56",
      "82",
      "30",
      "00",
      "00d07fd9b37a583282de403210095d46e20b676e1326146303023bfd7b9eee1fdc1f4028e55ae75d53f12ff00426f2e02ce8226a6ccfdcf380b666c1aaf438644b0adf8a748d89ea989c4b894b5e8749253e8fb836485c7cefc4250ea2c1f07de4da7e6c9cdc8f5a246c34b0e831ce3d66c220c4257cbee9b4f4bbc31c4635545eeb843a330f56b09d1cd4b0f1645de956dc72e8d25454c6b9df67089d07b999bfb681e16e52a432b55a93e92566635abdf7ababbad0da9a24d48f7517255564b5ccdad96006f82885e23a17f7d91239ce0cfc37f36e92fc7ef538515c81df3f3942d61f05010000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:05 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
      jobId: "grouparoo-job-11-1603147432080",
    },
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
      "c87b6d02141248a46845096d2325a403d26a9a266483a16e094eb1e9d455f9efbb364dd7aa52fb84ed7bce3de77ef08cee5953a02922ac7ae868fbf4ed8e137482a8c415bc2ece13d7b9ba322f2eee6f6f364114fead4f27c16c0608a65802eff6351d08deb53915d36d32ac5adeed71cbf900120d6c7b608f2dc7763dd739b57c0b7882d6e58a35f7c0be95722fa6a679d41e569c5735c57b268639dfbdbe9b8fa7e6bee5773497c27c2f69828a303f17fd5ef31c4bc69bd93601039da06d467798d560e13fb32067ef530f19de0d2b003fb29ce23ce75d23952d4891f3a66455d7eaac68fa8cb4cd37079484ab709e1a39afbb5d933578474f8c024b9cc9a73d35cee3cdda5846e79b781da4cb4d9425f3cb701d0ce79bd5761d25c6cd65188786c4a4a69a6bcc8c337d8be002fa051592355a3d55cf4af9a541cb8f6351049016b40f669e35c6b66f4d4849bcbcf49d11292d4a884fbc117688954f5cea168462e06951cdc20d6f2ce250627be3ccb39d51e67a0467c4b7bdac704605c62ea59e67a1c309fad33249174cecb9607d87d04dbc4cc32c8db7d13c48435d4289bb5a2e7a63aa80b71e251408a04f6a3aa828e3a0a4dabd8cd2300ee6e9f23aec27bca215ce9f92079871896b41018d5b689ea4ed9a17d0301405eb7001603db1ab6350a0e9af67a47aae5cbc69f92b3d85012abb527f5192c6cbe842db3922ae71dd69c8637f506594ac56a60fbf01083bda27413fb661fc13f54f312d694b9bfceb61025807befcd58e7b0f58d87c901112eeb0",
      "3ab95022794bfb1562bada23db1d8d7d1769702b3fc4fc897f6c9acaa132d21d6de44b45fdde43a1bd58275e411084e947ba59877fa8fca9ce77040000",
    ],
    [
      "ETag",
      "DFS43PP/GGkhWOANEzl29A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:05 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1603147432080"
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
      "0002ff8d93516f9b3010c7bfcbf59548d0646985d40768b335124d3a429fa62a72f1c19c199bd9265116e5bbef4cbbac6a2bd117b83b7e27dffffce700bf84e210c393a87f7768f66735baef3ec8d176d2597ab55a598400d0b1da93a6a9d3dd2ef9a3529ead36e3c54d2e4d727545842d7f62c3203e402550720bf18f0328d620b5955a768d5af759006edffae2aac8e78b6f94379afb7cf19065499acde0189c1a39736cddf39f687b3c06b0d14f3956685095e867698dde60e9e65ea6654d2b716475674ab4d0c3fd87dae8ae6546eb11554651348aa6e1389a5c4cc6e7e16548a0d42573422b621f56341f38ed98ccf58e5442744e84e963525cf5cf2dd505ef95f870be28a6937ec0d740258c75cf4bf907be887b4b4af649906e40c821a846c5d10c51a25d33ce0d5a3b486abb666d7bc2d2e5327b0731c58d167c18dc8a0140baed09f89a2d938f564bbef9bfab9ba498bd23ac23379c90627e375b15c9ddbde71e5fee37dd3bb4f74693592c7a9f44e1e4f2cbc5347cb6ceb5f676a27362673a0ca064f407dc0a0771c5a4c5e35fd2edae195f030000",
    ],
    [
      "ETag",
      "brmgBwwAznBdLSj3NDRlrA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
      jobId: "grouparoo-job-12-1603147432080",
    },
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
      "a34014fd2b64f6cbeea62dcf42dba4716ba52b491f2e4c75dd47da01061c05a63283c698fef7bd80553726fa8130997bce3de7deb9f711ddb022462314b2f4b6a2e5c3a76b1ea20ea292a4708b83e39fa7a5efa5e7d3f5e9f16d30bb51efed743c0604ab5982e4bb8c7605afca888ad13ae8a525af76a4e4bc0b89babad1d56dcdd42dc7320d6da0014fd02c99b3e206d85752eec448550fdabd94f334a364c7442fe2f9f3bd7a67a8bb925fd3480af57f49155484fabee851c62322192fc6eb000c5482961b9a1396818517661c7efb3f758f91bc9702f88e45944411af0a59db8214112f1296566593158d1e5163f3d50105eedc9d62e56b4709263377339d04f8f3564810d82a442801f6bde5f72ff571bbd95cdde75b65e6af16ca16ca4c5846c556b938757d573970fe549a66d2b172a4acfc13d7578e2f9f439360da51b62c6e4ecadc5b7858b194d56c16b858a93b1e532159d178c524cc68edf3a99ddedb47ac09441241dbe0c6d16ca20fb46198844e940ccc7e9868340c07a1d32766a845438b5a714809f0649dbd619182173a3162bd9f38833e8d89611043a7a633b06de218c3248c75d38e06916d11b4efa0fb92497ac2c48e0bd6f6145df81e7637d85f2fa713ec366524a4cae4496bae2ee2b54f094502e89dbaf675947150aa1fc85b62d79f4cb177eeb63331a729891e825b988a846482029a9424a792960b1e43d3d0d92af0b0b75a4ee6c0681efaec801068f4fbf185801f764d9765f347d85bb8019e2cce1a0f07d039c9aa0675d71e90a1195a5733ba9a837563a49b23ddea699af60bedf77f8108a3dde6453fd6ae7f89da2b9f26b4a445f4f1ab02b8097cb8a18775012c2c0cc8c0a04906331489",
      "5a242a693b4b2cafcd1cd896ddb787a80197f24d0cbe43d3ea1c75469ad3423e55d4ae0b14da8a55e21904411881256c0b44ff01c1d2a8f6ae040000",
    ],
    [
      "ETag",
      "TSBXHrRIgVCUHBqSFk/w6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:06 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1603147432080"
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
      "5d",
      "6fda301486ffcae45d0e223b1f2441aa3468d3160d684bd3ed62aa90490ec1ad89996ddaa2aaff7d4e3625b0b2087a93f83d3eaf729ee38fbca24796a7a88b662cfbb506b9f99c81be290613506bae9579ad44ae00b510689a99ccd1a99fdc9c7f1fbc3cfc185d8e9259fc387016d9c989c950c9029614755fd19c014f15eafe7c45395d82b1b1d424e8cdaa180fc67174114d4c6029d22230be1b0e7bfd6184de5a9561cea4d2d35254c6db7832185f34fb38fd90cd14cef871960cf214e4711eb69ad23495a0d4913ea1a674b5aa4dfdabab61d41b37bb689e4ac1d20f389fd8b10eae9f6ac7f9f0aa1737e7a7546f2dd1592f8e9af395a6cbad9ae2c128ba8d7ba3eb66d774ba785e1ed2eafbb7167a10b309cc41429e40b18b57523c40a207c50151e6eb1cda4aac6502c5e299e472229362bda25288b689b489dd261dec10d7771d1b07d824729150cd446e72ef6e4d6d480b4df9443c9bf3815c9320cba1392af3f2f964c27ec9508c2e8167b452df383055a9c563213b5fe1a52cce4ac4b29a3b371b9a432503cfb2ddc00a2ce2055550cb351c205cec5bd8aba48d6ddcc6761bd74512cb0b08f67d2f74a3704fe227627789d325ee178ccb566fb3d6f55c80d4acfeeee97ac6b4ae649694da3f0497d88e657b9e451c6cb8abf09c7205ff513bc8814b2c770f72b08b4c3a4eb81f396844ae0dc3b5e40079a5fb663300e795e6b33f81e0106adb21667d43cb80bbce7eb0a60e744cd31cf73d4bb80b6d7bd8d90f1d3642135c39ce84d48b4d25074a8bba05292b647808b05bec6a62755ccbacc421ebba3b6587d8f29c771c5b8596c08ed3f1f70213fc2ff0fddfd3dddf6850d75298ab4241714b84a6bef2ce38150594b9faba45612d9450f3d3bc641a",
      "75cbdade7e03eb3f472092070000",
    ],
    [
      "ETag",
      "MC7cQFVIxjWMHMcbTkI3hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Mon, 19 Oct 2020 22:44:07 GMT",
      "Server",
      "ESF",
      "Cache-Control",
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
