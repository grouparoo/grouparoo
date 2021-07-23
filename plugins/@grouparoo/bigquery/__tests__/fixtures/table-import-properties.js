const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1626997768481";

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
      "cb",
      "72",
      "82",
      "30",
      "1400d07fc95a9d0411a13b159569111f5840374c0c97a7d034102476faef75fa09e7fc20ca18b46ddc7d55d0a037a4a8664dd8e4839bcbd5b1d09fa7cfe1923755216d9e9ee7e05ec3c20b4c012be7b60ca1f6abf4b6f738f88b3222d79db355a20fc88ad502e7d211e77eccfc53a78c409a6d72b7baad1604f963e3614fad9f76d2e288734de17d623943fc4dc745653604bb0b4aeba3240f1eedeb77639a4afb702bb59e193392b28c706bad6d2ee50caba3201926d3a7a1c76e46ef32d19b3467de5d8e75771e0c15546179069bf63bfb906fcc0c8d100cbc10d0c6c58b3b9d59d608fddbe34e7178052c810a10e8f70fc9574d231a010000",
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
      "Thu, 22 Jul 2021 23:49:30 GMT",
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
      jobId: "grouparoo-job-1-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85535d6f9b3014fd2bc87b6d02a4349048d19a2574cd94901548bb699a903186b9019c62932aaaf2df776d9aae55a5ee09dbf79c7bcefde0096d599da1314a59f1d0d2e6f0e99ea7e80c51890b789d3e6eadf9976f87ebfd126f697677f16363f29bc904104cb104ae7625ed09de36848af126ea170d6f77b8e1bc07897a76cf1e0e86a391eb0e3dc7b3812668992f59bd05f21f2977626c9a27e97ec1795152bc63a24f78f5f26eee07e6aee1f7944861be55344144981f6a7e2e39c192f17ab28940bf15b449688559090efe11b3f4f26de63ec355bf00f09e118a09e16d2d952b4841789db3a26d7456347e42dae5ab038afca53f8b0dc2cbb6aa931a57f4ccc8b0c4893ceca87115ae57c622b85a87ab69bc58074934bbf657d3fe6cbddcac82c8b8bbf643df90382da9e61a13e352df02b8807e468564b5568fd5b3527eeecfe2fd501401a405ed82896b0db1ed59a3344f5d927be717696ed134f552f7029fa7161939d4c9528a81a745350bd7bcceecdc2683819364ded04a9c7c384a52cb268903c91c8be62ef62c743c438f0d9374cec48e0bd67508dd858bd84fe27013cca6b1af4bc8715bca79674c15f0daa3840201f4414d4715651c9454bb1741ec87d359bcb8f5bb092f6981c9217a8019e7b81414d0b881e649daac78060d43c174e5cf01ac27f6fd141468fceb09a99e2b17af5afe428f6180caaed45f14c5e122f8aaed9c10b7b86c3564df1d5419392b95e9e36f00c28a7649d0cdc60f7fa2ee29a4396d684dfe3f4c00ebc0ff7eb4d3da0314161f5484843b6c0e114a8334b4db20a68b3db15dcb1d3948831bf92e36b2bd53cf540e959156b496cf05756b0f757662ad78014110861fe85e1dff021d94b8ec74040000",
    ],
    [
      "ETag",
      "Awk0DBJyHvLakedW5XU/oQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1626997768481"
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
      "00000002ff8d93514fdb3010c7bf8bf7b85422a3a425120fed285029b490a6e2614291b12f993b27ceec4ba7aaea77df39404163527871ee2ebf53eefef97bcf7ea95ab2983da9f2770b76f7a504bcf7410aaed5e8e8d198da010b18202f89545fafb7a7d1038a549ddd54768762b35edd5f5c10e1c44fa8388bf7ac50a0a563f18f3dab7905d4268c6eab3aefb280e1aef1c55596ce17d7945746fa7cb14e92c93499b143706c941c79def19f687b3c046c639e5228c0422dc0cfd258b3018173bfa6e355a361e04c6b0538d6c1dd8bd29ab6e1d698015506e1208cbe45e7e7a351341e8e43e2b4111c95a9095daf683c8606b94ecd1f5a9285a744d82ea6858beedc7aa964b7880fe78b2c1a76f3bd07b810a6ad31ef050b651d3e8bf70abe88f02fa9f92741fa534af74125d4126c1fa59a9c4b69c1b95ed2b89c37cd119b2e97c947556a698d92fde056f5001ab747e02a594efe272df9eb4dabcb4936fb403824d71c916c7e3b5b6593db3bcf3dbe1861ba437077d690a91c783f8527c3f1d9283a79b6d877e36d47df89d1b61030c1e9a6dc286471c1b583c35fab4bf8fa87030000",
    ],
    [
      "ETag",
      "i+Gv36WtcRi5HmrytcjUSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:31 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1626997768481",
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
      "ff",
      "6f",
      "9a",
      "40",
      "14",
      "ff57c8ed972d5511444093a6732d6bd9145bc436ddb2e8711cf42a72943b5c4ce3ffbe07d4b6ae499b98c8ddfb7c7befee1ed18a65111aa290250f252db69fee79885a884a9cc0ee85f9333fbabf5be99b604226bfae8e5463f463747c0c0856b1045ee7296d0b5e16848ae17cd6490a5ee6b8e0bc0d426dbdad99ba39185896691bb6063441d378ccb21590efa4ccc55055f7d69d84f324a53867a243f8fa795fdde86a5ef07b4aa4500f1d553011eabb9e27292758329e1dcf67e05f0a5a2ce81ab31412bc10a3f0eba17287e1752701f086118a09e16526ab5420417816b3a42c6a55347c4475ca571f68e68c9dd34059c6ac107291e1355db694258b960a16ca6291af94effe74a22ca1ab98a5542c959b0bc7779406e37acadcf39c59a07c3ef9a29cfbd3f9a5f2edb6aeb50e34214b448564599d24c0614aab144fb372df1e5045c0120bda141756d7c49add1d84716891d8eef5c3b84bc3d00ead3eee855d3230a8118514034f56ea350b673ceb63c3a2b6de2706c59116ea3d5b2351d7ea513d1ef4f4081b20029f16dab5d0df82497ac644ce056b26866e7c377016813ff74e478153b711e33295674db8aa89d739253409a077fada5555c6c1a91abfeb058e3f3a0ddc6ba739f1314d30d9ce1ee0cc639c0a0a685cc004252d263c82a1a1cbe9cc0ddca9371a03a33ec6cb3d42a0e1efc71742b0cdeb29cbfa1f8d7c7f740b1c5c1478fb5f0d729806daed5ed95de3b4ac2135be5e35fa9ba68034e8e565a51fac4cb4fbb3835f0bc13d6fbcd0d5dcf16f51b3e5d3981634231fdf0200d7858f5eebfeed00145e0fb808096bb87244541ea4a0cdd563eb3afb13dbd24c434735b8",
      "906f6ab6a6ed675c69548a744d33f9d450f376eaa955a5523c83a00837c673bd73a8fe03190f9858b9040000",
    ],
    [
      "ETag",
      "H6Kp+jhk2vTMcMZQ+/4AJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d515d4fc23014fd2fd747b704d08c8f8407c105d03965403431849471370bdb3adb4e2084ffee6d3148a22f6dcf3de7b4e7a407d8f062051d58f2f4b342b9bf4a518fcd214255655ad1568a422138809aa5a4ac45eaa11a5fbf06e1e3f36e2c891c3ebd6dbb5d52a8f80373069d03241cb39582cefb010a9623d9122e955e58e080de9766369946a3704038172b83c35910dcf5021f8eced9b758949b5fc7289cfa033ffacf323f3ab016cb08139458c468629452ac31d623d350b1bcccd055a292312ab0624ba45254259342b834711b6edd6b78ed76b3e9b56e5b75d26522669a8b82a4b30945032d34cb22b1a57e704302698f5435b1eb178d7dc9d1b630a06ec35dd2f758f033edfda1fb2ce6d9c5050da398ff3cdcdb6b542f52500985267fedd4a52f4c3f4dbdb5acd08198d16f0cb93ee1e337bc61f231ea010000",
    ],
    [
      "ETag",
      "0RsJuQ+WLNKOxQronsHMXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:32 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ed387ea090ee4854c0d0520484b8c9d018c002050946a4d3bbd7e911defb0119e7424a36b495f806afe091ade09ccf4967221c14ad6e217ba9994e6c5177aa7a5c7fa9bedbef5d3dbc1c70e5729f72122d904e5e0a2c934febeadf1a7ba223fa70b0f4d8898592dc93b7e88e948ae142155ab9a19ab3180c7cbfca382adfcf7e1206def158e426cb19ca9731b5f9b5d9d391bb5eefb7cc39d28d0aa25424518d6f19b915bb091ee0b47254a5528f9cdccc5ac372f968c6d258ef8c03cc9bba4af3610bcfa69526693a385e566ced801804cc8018bb4b2f24bb3cb96b1dc219f8b7b3e1d189670012592f7af0fb079a6ec25f1a010000",
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
      "Thu, 22 Jul 2021 23:49:32 GMT",
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
      jobId: "grouparoo-job-3-1626997768481",
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
      "3014fd2b91f75a0810200409ad08d21509c21a42ab6e9a22c7b9c9dc8698c64e2b54f1df77ed94ae55a5f629b6ef39f79cfb916772cfcb948c49c2f3871aaac3b73b919033028ae6f87ad53db830f5b6f457ed3a3cad6ee7b6e8e5930922b86649badb17d092a2ae18c8f176d3ce2b51ef6925440b13b59c5677d81b7a9eeb0e47fd511769128a6cc9cb7b24ff556a2fc7b67d926ee742e405d03d976d2676afeff663cfde57e20e9892f67b451b45a4fda9e6f74230aab82827db0dead712aa18769417e8e03f314dcedf676e73ba6be7087ee40c2863a22e957685299828339ed795c94ac6cfc4b87c73201b7fe9cf228b89a2de957149777066a554d1581df6605d84eb95b5082ed6e16a1a2dd641bc995dfaab697bb65e6e57c1c6bab9f443df523429c070ad89756e6e015e503f05a97869d423fdac955ffab3f838144d4069094d30763b43da1d75bc244b5c968d9c419275204946893ba04ed2615e1ffa6902147946d4b068294a6fe0b8a9973971d219f4e33ea688bd4e67102700aee33a30c8fa29399e91a78a2b9873b91792371d2237e122f2e328dc06b369e49b12325a176ade18d305bcf5a8b040047d52d35147b94025ddee4510f9e174162daefd66c24bc8293b6c1e70c6192d24209a56d83c05d54aa4d830124c57fe1cc166623f4f4149c6bf9f89eeb976f1a6e5aff40807a8ed2af3259b285c043f8c9d13e29a16b5813c36075d46c60b6dfaf80781b8a24d1272b5f5c35bd23c8590410525fb7a98083681af7eb4d3da2314171f55a4c23b6e0e935a8355d06c1037c59ed86eaf3fea1103aed487d860e49d7aa673e88cb08352bd14d4ac3dd6d988d5f21584411c7e607a75fc0724ca2d6b74040000",
    ],
    [
      "ETag",
      "Q1y7eA9UaZu73idrYD/o2g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1626997768481"
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
      "93dd6ed3401085df65b9c4911a1a9cd4522f120810e426ade3c205aaacedeed86c58ef98fd491a457977c66e098822b937f6ccec37f2ccd9e303fba18c6409bb57d5cf0076ffaa027fd30619b8a0bda35783c6018b18785e119941adf9d72f37a95061175e3f6cc69fcbb0bbbc24c289ef5073961c58a9404bc7926f0766780dd4265087da145d1631bf6fdae23acf16cb8f94d728db7c799ba6d3593a67c7e8d428b9e745c7bfa0edee18b10dde6750820523a09da5b1b801e117ed9a8ed78d8681c3600538d6c1dd41653134dc220ea832381f0ce337f1c5c5781c4f469321711a05f70a0da1b76b1a8f79f45c67b8a325d9f09c08dbc5b470d93db75457b25ba40d17cb3c1e75f3fd0d702130185ff482a5b2ce3f8af71b7c12e15f52f3178274534af741151809b68f524dc1a5b4e05c2f89aee04d73c266ab55fa5c15232d2ad90f6e550fa0fdf6047c4857d3ff494bfefaa3d5fb693e7f46384fae3921f9e26abecea757d72d77f76484d9de83bbb648a672d0fa6978369abc1dc7678f167b87adede83b89b701222638fd299f946749c9b583e32fb0f93e6e87030000",
    ],
    [
      "ETag",
      "RemlaWVQLciuwu+xj7Jfuw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:33 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1626997768481",
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
      "fd4fdb3010fd5722ef974dea77f3d54a887590b14c2565690242d3d43aae9319d238d84e5187fabfefe250284303a9526adf7bf7de9def1ed02d2b56688c1296dd55546c3fdcf004b5105538835bfc75101767dfe36c13dfa83fd1adbcf7d3f9e4e80810ac6649bc2e73da96bc1284ca713cef64825725169cb72151db6cf7ed813d1a398eed9a6e1f6892e6e99415b740fead5429c7ddee5eba93719ee514974c76085f3fdd7737836e29f80d254a765f2a76414476dfd43cce39c18af1e2289e837e25a958d0356639387826ae92cf2f3377185e7732006f18a198105e15aa760529082f529655426745e307a45d1efc41736fea9d44c6326542aa4581d774d93296393e38b0d5d2c0d2582cca5be36b383b37965062ca722a97c6d5372ff48c06e307461c04de3c323e1e7f32cec2597c617cb9d6b1d6ff05c0e58a4ac50aed31c2494e6b7f8f5df45f3f5d4dc00a4bda04174ecfc67db7374ad2c421a93bb492b44793c44d1c0b0f931e1999d45c2514034fd5d9350b17bc180e5cd776072362622b4d1d6263d3ec0d899d58c4a2e9ca49fb7dd3eea77db46ba17bc1143d65b2e49235bd4457a11f798b288c839349e4e932525ce5eab431571771e8534191007aa3ae5d1d651c94ea87f183c80b2727917fe935b330a51926dbf91d4c438a7349018d0574505171ce57d03474319bfb913f0b265360e807bed823241aff7c782644db527759e92f9a84e1e41a385808bcfd27063e6c13ed7607729738af3444e3f5a9c9bf6902a86ed9f369f0e264a3ddaf1dfc5a0836a0d1423f622fbc46cd5548532a6841de9f0200ebc07b7bbcdf2a80c25e818a5470869123b2d6208236a3c7d6dafb23db195a968d3458a85731c71aee7b5ce7a833d2352dd46341cd56e9aed5a14a3e8120081313f8c11944ff02fbb2da29d3040000",
    ],
    [
      "ETag",
      "aF2UnGJUgvUjtzTkswIfSA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1626997768481"
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
      "91",
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7bfcbf9ba45411cb08407c005d185c8062f1a424ab9cd42b7ceb60309e1bbdb0e3348f4c997f6fe77bf7f73773dc296e56bf061c5d2cf12e5e126453db54184aae45a99ab10b942700035490df9f0f596bdb0602082dba4ef0583fd342661daeb1942d10fcc08f8474818f2b502fffd0839c9d0d81226955e56c2017d286c2e9e45e3c9c8e84cacad9eccc3b03f08033839b58f937fd996cb627b718c27b36014447f59162707366215618212738ab6fb428a0d523db68b51242b38ba4a9492a2820aae0aa9146541a410aec9b82db7e135bd6eb7ddf63aad4ec3705c50a299c80d3a8f4d6ba085263c127bb316b83780ac42b3a1a43a77261d4886d514563ca3dc09a66adda89abdc61f31677539a68433524bef173d2494f1abf703a22fa269f1c54f93838346f52a851958a19df5ee3cf750d85d1897af65890e50623efc89e9b33e7d034d7126e84d020000",
    ],
    [
      "ETag",
      "5xZmKiEBoE/fA6EBwQSaLg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:34 GMT",
      "Server",
      "ESF",
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
      "000000000002ffedd44b7282300000d0bb646d9d14a190ee02298a05a95a04dd30118284ff5704a777afd37d6fe03bc4bb031a04ac6dfdae4c5901dec14805340fe69f95a26adb24f6b3bdcaac450497d8fe28a8e3905bfc45b5d4301914051fc62339b63acdd14537a4ca9cb01be2e175bc906293895c22abb8bf72c295daf6bee15148c35e70ae93e72a1bb9964e9e78ce7b2c0ce5552d8793dc17488cc61dc1c45c5638a5878478a56ef19dfde279b7663868f65b3d6ed77bc84423eb02313797d202354e782e73bd8e92a9e92668a7166f71a4c81b68242aca4ceefaaeba3eeb64c5a5f9d3d3d3ffc00cb05bc51bd6fafcf1c142426806fe72f0bbb1628f2154461bd6809f5fd2572f503b040000",
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
      "Thu, 22 Jul 2021 23:49:34 GMT",
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
      jobId: "grouparoo-job-5-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fdb3014fd2b91f74adbd0364d5aa91a551b46a53665690a1ad31439ce4d302471173b4c0cf5bfefdaa10c84044fb17dcfb9e7dc8f3c917b5ea56442129eff6ea07efc722712724240d11c5fc7f7625516e9e096dfe47fa3e232bc59cce6b3e914115cb3242df70574a4686a0672b2db76f35a347b5a0bd1c1441da7733aea8fc663d71d7943ef1469128a6cc5ab7b24df2ab597935eef28ddcd85c80ba07b2ebb4c942fefbd877e6f5f8b3b604af6de2af65044f63ed4fc5a08461517d574b745fd46421d434979810efe13d3e4ec6de62ea7653747f003674019134da5b42b4cc14495f1bca94d56327922c6e5ab03d9fa2b7f1e594c144d59c5152de1c44aa9a2b17adc83751e6ed6d63238df84eb59b4dc04f1767ee1af67ddf966b55b075bebfac20f7d4bd1a400c3b5a6d699b9057841fd14a4e295518ff4b3567eeecff2fd503401a525b4c1d8b547f4d4b3c74996b82cf3064e92d990245ee23a7490d86c3c84619a00459e11352c5a890a1c2749c1e9c73675583ccc3227f632cf8e1dc773ddbe978dfa764a0e27e44fcd152cb8dc0bc9db0e91eb7019f97114ee82f92cf24d09196d0ab5688de9025e7b545820823ea8e9a0a35ca0926ef73288fc70368f96577e3be115e4943d6e7fe38c335a484034adb1790aeab548b1612498adfd0582cdc42e8f4149263f9f88eeb976f1aae52ff40807a8ed2af325db285c06df8c9d23e28a168d813cb4075d46c60b6dfaf00b81b8a26d12f27de7873f48fb1442063554ecf36122d8043efbd18e6b8f505c7c54910aefb8394c6a0d5643bb41dc147b64bbc3a13724065cab77b1d16070ec99cea1334209957a2ea85d7bacb3156be40b088338fcc0f4eaf00fbbf5377374040000",
    ],
    [
      "ETag",
      "9koLmld3hiZgzTlPRZDACA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93516fda3010c7bf8bf71a24b2d14023f5013ab6d20568217d9aaac8d897d4d4b183ed4029e2bbef9cb6745a27a52fc9ddf977cadddfff1cc8a3509cc464258a4d0d66ffa50077eb8305d85a3a8baf4a2b0b2420e06881e4e5b3529bd5746dafc36bbe9be7bf9eba8f9bddc50512963d4049497c20b900c92d897f1f88a225601bd3b22e55d6640171fbca1797e96232fb8979a9b9cf677749321c2563720c4e8d9c3a9a35fc27daee8f0159ebd5027230a018f8592aa3d7c0dcc4af69695949e8585d1b069634707350185d57d468ddc14ae7ac13465fa3f3f37e3f1af40621725233ea845688de2d713ce2b4a372a177b82409bf21619a1817ce9be716eb82378bf870324ba35e33dfdf00654cd7ca65ad602e8c752fe2bd81af22fc4b4afa49106f4ac836a800c5c1b451a2ca28e706ac6d25b5cd68559db0d17c9e7c544571a3056f07b7a205906e7b027e24f3e1ffa4457fbd6bf57d988e3f10d6a16b4e483a998e97e9707ae3b9fb57238cf60eec8dd1682a0bde4f61b73738eb47dd178b5d6a6f3bfc4eec4c0d016114ff942be1489c5369e1f80708d7096c87030000",
    ],
    [
      "ETag",
      "CznnqbMjsJ1JdwOfKx0kqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:35 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1626997768481",
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
      "ff8553fd4fdb3010fd5722ef974d2afd48f3d15442ac83ac0b2a294b13109aa6d6499ccc90c6c1760a1deaffbe8b43f91812489552fbbd77efee7cf7806e6899a2318a697e5b13befd74cd62d44144e21c6e2f36e2342aa6d3bff7e15d3cbdb74f336247778787c0a08d4ae075559003c16a9e10318e16dd9cb3bac29cb1030874601d0c2cdd721cdbb646c6680032418a6c46cb1b10ff91b212e35e6f6fddcd19cb0b822b2aba095b3fddf7367aafe2ec9a2452f45e3bf6c044f4def53c2a58822565e561b400ff5a10be246b4c0bc8e05998c65f5f47ee52bceee640ded084e0246175299bac2044c2ca8ce6355751d1f801a92c5ffc410b77e61e87daaa909b55475bd174a561a12d97d58df63d989f692b2827a305112bedf2871bb85acbf17c2df27d77116a9f8fbe68d3601e9d6bdfae14d66983817b4a84a4a5f20e715c90c6f7b13bdedb2769045862415a7069f72d3c18f59d388bed241b0dcd38eb93381ec5b68987713f710c62a431c1a0934d74a5c2252b13ec988e61668615a7f180a4a66e38ba8147a63330c9b06feb036c0ff5fe00ed3ae88e53494ea8a898a06d8fd065e085ee320c22ff7812baaa8c0cd7853c69936b8a7899a7842281f44e5dbb06a50c9c9a867b7ee80693e3d0bb70db379e911c27dbc52dbc72860b41808d395e1349f8194ba169e87cbef0426fee4f66a0500f77be670834fef5f02c08b795eab2545f340982c9156830e778fb1f06795806daed5ed85de0a25614c557a736fea60550d3b2e793feea64a1ddef1dfc3a0826bbf5423f2337b842ed554032c249997c3c054056c047fbb9df16a0c2be808b907086914b44e39170d28e1e5dabdc1fd5b6a93b0e52642edf6086dedff7b889d144246b52cac782da6d515d6ba05a3c91008489f13d7f0ae83fbd1d60e7ab040000",
    ],
    [
      "ETag",
      "VvsJUlGGzxTwbGx7Jfe7Uw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1626997768481"
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
      "6d",
      "91",
      "61",
      "4f",
      "c2301086ffcbf9d10ddd866323e103e85492056540d41842ca38c6605b47db4108e1bf7b1d0663f44bdbb7f75cae4f7a844d5a2ca00df334d956280e5709aaa13e4428ab4c49da4a5e48040350b184c87c350f84d793a38fb71b7cbf7ed83b72eb0c3b1d2264bcc29c41fb08cb14b38584f6e7110a9623b5656a47843a943a3c862fdd31c59c2f741c4cc2b0db0b033819177e362b373f0dfdc138780aa2ff5aa62703d67c1ee112051631eaf1a5e06b8c555f9b499697199a9257224609355c1712c1ab9209ce4dba315dd3726dd7f75b2dd76b7a1671198f994a7941e864444f03c515cb22be272f700810f5911497f5baa36bfbce6f5876eda1a3553fef17d0721abe7701dc3f80df6c38eea56eebfaf47b74efa050be0a4e1a12b5c1edd9e69e6b4345e64a546840cce81f9e5375cea72fa5a1951be4010000",
    ],
    [
      "ETag",
      "mhbEr8BsSYW/eX+Dw3sq3Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:35 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb642d8e80fcba23763aca4f4023e086c1180b4220204262a777afd323bcf7030a8cc9e3918f5d4d5af00144a1584bbc749909375149a60b0eda78d6a444399eab1b24f37e345bd7794d9991f958df1e8fe55eaeeacea54118ed6a1bc29b9799b02f431939e2f42af42c3e38cdf749cbbdf53edd088482e1ea3b46c8ce6b355d3541e7a5a2b970cfd04331afd035c0d2249bf5f38b7e4a74569eda8907b063b4f48a88fbb469ef7ad5d5fd9ca87837abf7d80ebd68603ea238b1d3f2ae4f347177e3aae7ccaddc2db2432cf3f2e67769a17301168070560de491576faeaa59d602fcdbf35130f20e80a418c8007eff0097c181c11a010000",
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
      "Thu, 22 Jul 2021 23:49:35 GMT",
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
      jobId: "grouparoo-job-7-1626997768481",
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
      "ff85536b6f9b3014fd2bc8fbb8e6414b02448ad62ca11b52423a425a6dd3848c73a16e094eb1e95a55f9efbb364dd76e52fb09dbf79c7bce7df0486e78b5212392f1e2b681fae1c3b5c8c81101450b7c15e17d792eef6170f5f1f3d58fbe082f660b7b321e23826b96a4db5d091d299a9a811cad57dda216cd8ed642743051c7edd8c3e3a1efbbeed0733c1b6912ca7cceab1b245f29b593a35eef20dd2d84284aa03b2ebb4c6c9fdf7b77c7bd5d2dae8129d97badd84311d97b53f3532918555c54e3f50af51b09750a5bca4b74f097b8c94e5f67ee72baed1608bee30c2863a2a99476852998a8725e34b5c94a468fc4b87c7120ab601e4c138b89b2d9566945b770646da8a2a97ad88175162f1756189d2de3c524099751ba9a7e0d1693ee74395f2fa29575f93588034bd1ac04c3b5c6d6a9b9457841fd0d48c52ba39ee867adfcd49ff0ffa168024a4b6883a9db1f52dbebfb599eb92cf74e0659de872cf33277404fb23ef31d70361950e41951c3a295a87ce6650ef3b3d4f76c9a3abeeda49ecdfc941dfbe00ce8d01b9c30b23f22bf6bae60c6e54e48de76885cc66112a449bc8ea693243025e4b429d5ac35a60b78e9516181087aa3a6bd8e72814abadd619404f1649a8417413be13914943dac6e71c6392d25209ad6d83c05f5426cb061249a2c821982cdc4ce0f4149463f1f89eeb976f1a2e5cff40407a8ed2af325ab240ea32fc6ce017141cbc640eeda832e23e7a536bdff85405cd13609f9b60ee2efa47d8a21871a2af6fe30116c02effd6887b547282e3eaa488577dc1c26b506aba1dd206e8a3db0dd81ef9adf54d15afd1b1bf63df7d0339d4367842d54eaa9a076edb1ce56ac91cf200ce2f023d3abfd1f98ae6f5674040000",
    ],
    [
      "ETag",
      "oIxlPsxe5h+BhZ0oIVDM1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1626997768481"
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
      "9b3010c7bf8bf74aa4644b2145ea43d8b22d1a4d32421fa6a9422e3ea85363539f491545f9ee3bd32e9bd649f405eecebf13777fff39b207a9058bd99dac1f3bb0877735b8ef3ec8003be5905eadd1082c60e0784de485e6f749661de2c32efaf19884e3a7cdb7faea8a082cefa1e12c3eb24a8212c8e29f47a67903d4561ad535bae8b380b943eb8bdb3c5baebe50de18e1f3d54d9ace9374c14ec1b95170c78b9e7f43dbed29603b739741051674097e96d69a1d946ee9d744deb40a46683a5b02b21eee0f6a6bba965b6346541945a349f83ebcbc8ca270369d4d8853a6e44e1a4de8cd96c663ce38ae32f3444bb2c907226c1fd3c255ffdc535d8a7e111f2e577938ede7fb1be065693aed8a41b09216ddb378bfc11711fe25157f23483725d510548316608728d9165c080b8883a4c182b7ed194bd6ebf4b52a5a5823c530b897038072fb33f0395dcfff272df9eb8f569fe6f9e215818e5c7346f2e5f5629bcfaf379ebb7d31427270801b6bc85408de4f93f174761185e3678b7d34de76f49dd8d90e025672fa53be4ac7e28a2b84d32fbc2402f687030000",
    ],
    [
      "ETag",
      "5nahBRrtsskj7YqB60wPKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:36 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1626997768481",
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
      "53fd6fda3010fd5722ef974d0302817c8054758ca66d241aba105a75d3048ee3a46e439cc60e15aaf8df7b714a3fd6a99590c2f9bd77f7eece7e40b72c8fd108452cbdab68b9fd72c323d44254e2144eb171b389f4c1f7e323d7fc3ddb5c9fbad5c4be3f380006ab5502af8b8cb605af4a42c56831efa425af0a5c72de86446da7ddb30c6b38b46dcb19383d90099a255396df82f85aca428c747d5fba93729e6614174c74085f3f9feb1b432f4a7e438914fadb8a3a1411fa87350f334eb0643c3f58cca17e2568b9a46bcc3270f0228ca31f6f3377185e7752206f18a198105ee5b276052908cf139656a5ca8a460f48b97cf507cddda93b09b5552637ab167cb090cb1caf691db078a561a12d97c5ad761cccceb415f496b08c8a957679ea06aed6703c5f5bf8be3b0fb5af87dfb49360b638d77e5e29acf59fcce02ba642b25cb90a7194d1dad1d3dcbcf7cbaa055862411b7069772ddc73bac328896c92387d334aba348a9cc836713fea92e1800ee28862d0c93abb52e19ce7b661f47a763f22fdae133b89ed0c8ca165c443139b381950db22a6496c6380762d745f32498f9828b860cdf4d065e085ee320c16fe641cbaaa8d0457993c6accd54dbcf629a149207dd0d7ae4619874af52a3c3f7483f124f42edc66fb539a62b29ddfc1fe139c090a6c5cc204252dcf780c4343e7b3b9177a337f3c05855ae9f99e21d0e8cfc38b20dc166aca527dd13808c657a0c16589b7ff60e0c38211ec5e95bbc059a5288aafa226ffa601500f7a79898c379185767f77f06b21b8f34d2df46be10657a8390a68424b9a93cf6f019015f0d9cbddbf23a0c24b822a42420c578e88ba06296973f5d85a797f52db96dd73902297f21de698e67ec6758e3a235dd35c3e35d4bc2335b51aaac4330940b831bee79f00fa083a6f7e37c5040000",
    ],
    [
      "ETag",
      "a2jvb/4+FDE5ZOvhHEuC7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1626997768481"
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
      "00000002ff7d915b4fc2401085ffcbfa680b72b1b78407c08a6883d0962743c852865a68bb75770b12c27f77b69812a3f16577ceec779233b327b24bf23571c82a893f4ae0c79b18e44c153e88329502af82e502884640d2184973260e6cf8607c5aa370d06d4e5f2068dec6bd1e12227a878c12e7443609a46b419cb713c96906684be51e09792c9478f45efb21ca8cad959ccc3daf3ff05c72d6ae3c157259d5b52b08fdf164f4bf6db92c7657c77812ba23d7ffcbb2386b64cb563e6c80431e814a5d70b685488ed54204cd8a1474c14a1e8120155c3dc49c9505e58ce9d8d12dbd65b40ddb364dc3ea5a2de452165199b01cd17980d1886492a63e3be03a4807015e95b8994d75eeb1ddbeb71bad76358792cfc0f72c11b56e55717f18cc4ec3b66a2088689ad05a1abf78bbdbe818f5bb4b25d4a2ade0c577ccc15182987286230b50d3de5d261f32b50d74399297a09188e2573f25f2a2cf5f6e94418347020000",
    ],
    [
      "ETag",
      "7QswoCD6x8GTB4/PKeS/+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:37 GMT",
      "Server",
      "ESF",
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
      "ffedd4497282400000c0bfcc592865273747c22a2802b25ca6080c3806648d02a9fc3d56eef981fd88fe066996e1614063f3896fe00dcc2923d3196db512dcb964396a30ee1fad535acd7c10d5daabd1b6d8ccb2e2eeb092a4f7690acc9e4a058a3b42526dbb9051b9283145a25dc8bd37f675d0a14324ba45fe7043b344574c7428475dc02b4be695e50d9fe6ac944c35da6afc175b19949789a41e15752338b19fc7987f67a6bcb97bb038afd94710412d6f443b3410e1f702ac356f909293eed8175df5c558b759dff42bdfd3ada4b5cdc4d01696bb7eac55f76ccce3a6a25f5e5efe0756004f2de9f180c8f3039697e515f8cb018d738b9f43409cf6b8073fbfc27a2d423b040000",
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
      "Thu, 22 Jul 2021 23:49:37 GMT",
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
      jobId: "grouparoo-job-9-1626997768481",
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
      "85536b4fdb3014fd2b91f771f445d3a4ad844657c288d4a690a4a0699a22c7b9c90c695c62a70ca1fef75d3b948190e0536cdf73ee39f7912772c7ab8c4c49ca8bfb06eac72fb722254704142df0f5aa1c09fb2bcc9d55e48faf17bbdbbf9797df1f4e4e10c1354bd2cdb6848e144dcd404ed751b7a845b3a5b5101d4cd4997406ceb13399b8ae33b6c703a44928f305afee90fc47a9ad9cf67a07e96e21445102dd72d96562f3f2dedb1df7b6b5b805a664efad620f4564ef43cd6fa5605471519dac23d46f24d4096c282fd1c17f62969ebecddce574d32d10bce30c2863a2a99476852998a8725e34b5c94aa64fc4b87c752091b7f0e6b1c544d96caaa4a21b38b232aa68a21eb7609d87aba5e507e7ab70398bfd559044f30b6f39ebce578bf53288ac9b0b2ff42c45d3120cd73ab14ecd2dc00bea672015af8c7aac9fb5f2737ffcf743d1049496d00613b7efd0c1b83f49f3d465f978384af33ea4e93875477498f6d9c4063b4b8122cf881a16ad4405f9284fb3a19330673c49ec41ea24291b42e266690e23bb0fae7b4cf647e4a1e60aceb8dc0ac9db0e919bd08fbd240ed7c17c167ba6849c36a53a6b8de9025e7b545820823ea869afa35ca0926eb71fc45e389bc7feb5d74e780105658fd13dce38a7a50444d31a9ba7a05e8a0c1b4682d9d23b43b099d8e52128c9f4d713d13dd72e5eb5fc851ee300b55d65be248a433ff861ec1c10d7b46c0c64d71e7419392fb5e9fd6f04e28ab649c8d5da0b7f92f629841c6aa8d8e7c344b0097cf6a31dd61ea1b8f8a82215de717398d41aac867683b829f6c0765d7be01203aed5bbd868681f7aa673e88cb0814a3d17d4ae3dd6d98a35f20584411c7e607ab5ff07c6ee3aa974040000",
    ],
    [
      "ETag",
      "Ql5o4+eC6OSI8VLvjxPPBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1626997768481"
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
      "fb",
      "71440b6b4612a47e206bda45a249975069da5421c73e883b6333dbd04651fefbceb4cba67512fd0277e7e7c4ddeb9703f921142731d98af26703667f5682fbe28335d8463a8baf5a2b0b2420e06889e4ec31fbf6b4bb7cbf13acfd5a6ddb77c3305b2617174858b6838a92f8400a01925b127f3f10452bc036a66553a9bccb02e2f6b52f6eb2f562798d79a5b9cf9777699accd2393906a7464e1dcd3bfe0d6df7c7803ce8ed1a0a30a018f8596aa31f80b9855fd3d2aa9630b0ba310c2ce9e0eea034baa9a9d17a8095c17410461fa2e9743c8e26a349889cd48c3aa115a2771b1c8f38eda85ceb475c9284e748982ec6858beed9625df06e111f2e965934eae6fb1ba08ce946b9bc172c84b1ee59bcdfe08b08ff9292be11c49b12b20f2a4171307d94a873cab9016b7b496d735ad7276cb65aa5af5551dc68c1fbc156f400d2b527e02a5d25ff9316fdf547abcb249bbf22ac43d79c906c7133df64c9cdade7ee5f8c30db3bb0b746a3a92c783f85c3d1e4e3381a3e5bec93f6b6c3efc4ce34101046f14ff92c1c890b2a2d1c7f01bfdae5d987030000",
    ],
    [
      "ETag",
      "BwTZxhD/hicvXmbv+01TNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:38 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1626997768481",
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
      "6f",
      "9b",
      "30",
      "14",
      "fc2ac8fb67d3f20b92068854752c652b534a3a425a55d3941863985bc0049b765195efbe87699a76955a2952b0efeeddbd67fb01ddb222461314b17453d36afbe18647a883a8c429ec263fe834248e3338db989be2af3be79fcfee9de36360b04625705e66b42b785d112a26cb452fad785de28af32e14eaea83ae3e36c6b66d9a636b64e9a013344b66acb805f51f294b31e9f7f7debd94f334a3b864a24778feb4dfbf33fa65c56f2891a2ffd2b20f2ea2ffb6e949c609968c17c7cb0504a805ad5634c72c830807651c7d7959bac770de4b817cc708c584f0ba904d2c28417891b0b4ae54553479402ae6b30fb47067ee34d4d68c8b152ecb75073ee3b58685b65a95b7dab7607eaeada1a7846554acb5ab333770b596e3f9dad2f7dd45a87d3cf9a47d0fe6cb0bedebb5c23a87829022a642b24265087194d1c6ff714cdeebc369045862415b70650ec658b7067694442649ace151940c68145991798487d180d8233a8a238a41279bea4a850b5e5849840d7d4c75a213db88621b1343c7b6ad8f0c9ce8f6100f6333c18685761d745f31494f9928b960edacd055e085ee2a0c96fed4095dd54682eb4c9eb6e19a269ee794d02490dee86bd7a08c83533378cf0fddc09986dea5db9ef58ca6986c171b38ed046782021b5738a79256e73c86a1a18bf9c20bbdb9efcc40a10ef062cf1068f2ebe12008b7a59ab254ffc80902e71a34b8aaf0f63f0c728c4768b77b667789b35a51145faddafa772d8074e8e5b0325eacc668f77b07bf0e822bde7aa19f4b37b846ed5640135ad182bc7f0b80ac80775feafed900171e0ed808096bb873443426a4a2eddd63b90affa8362d6330448a5cc957d8",
      "d0b0f7436e6a3415694e0bf9d851fb6cd4d81aa8164f2400e1caf89eff1dd07fbc7fe9abb6040000",
    ],
    [
      "ETag",
      "fJeCTcAA0Hq7qnxEOo+HwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1626997768481"
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
      "75",
      "51",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "fd",
      "2fd7d72d6148c647c203900548169029be1842cab89b836eb7b69d4a08ffdddb61e4417d697bcf477b4e7a866351ed6100bb227fab519fee72b42b7748d0d4d21ade145506c103b42267e5e78aa6f3c96a16c8a590367d9e94b9ee8c86435698f4154b0183336405cabd81c1cb192a5122db0a325ba114abec493960bc5cc6d168c140497b072cd6713c1ac7115cbc1fd776ab8e37cb7cf1144da3e42fcbe6e2c181760966a8b14ad185509a0e98dab9eb6744a924fa866a9da28146dc10b9a65a094de433e2072d3f08db61bfdfed86bd4e2f60a1a454d8822ad6ae1f391b58b24226f4c1f5e09e05ba3972d3ac59df19b6bac6a6861b8226ddbf74f88bce843437beedf8cdf7b3e39345f3a0893b1874f15bd72a1372f52cd776777b900afe8a5961aff3e50b04cfb0b8e7010000",
    ],
    [
      "ETag",
      "xQoGICQH1lOaltcVCmgr4A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:38 GMT",
      "Server",
      "ESF",
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
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d07fe9b318532ec2de2c854940846c45f1a5a15029e8005bd806cbfe7d669f70ce0f28ca922b45c7fec63bf002e6023aeb721d0e3672532164864637f71a84e17e5b1b817263dfea2d64aa8bd6da763a8ce6b5d26c4860bfb0bca746e433022b1c57093e791b167d264be43db8d06a53dea5a4571d31596e8ddd051f8799dcee6d9b2d4c3f7ba40b9cfda69006334e55ac84a6cd4b966a0aa34b759cca76dce654ea4184d9eb8e4fb08f926497b0900e7e7dc8c5d9a55f53621ce0fe4ce85b63796e8e1e640973118869a95c22de7117d71f6005f8f7d048ae68f3e4eaa6e3acc0bf9d8ef3c09f018817924bf0fb07993359971a010000",
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
      "Thu, 22 Jul 2021 23:49:38 GMT",
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
      jobId: "grouparoo-job-11-1626997768481",
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
      "14fd2b95f7953e429ab6a9548dae0d50d4a6234d41db34458e739319d238c40e0ca1fef75d3b94c126c1a7d8bee7dc73ee234fe4961709199398677735548f9f6e444c8e08289ae16befcbf779919c5d06d45d97cbdf175635bbb87b984c10c1354bd25d99435b8aba6220c7db4d27ab445dd24a8836266a5b56db1a1c0f5c77381c8cfa230b7912f274c98b5b64ff52aa94e36ef7a0ddc984c872a025971d26762fefddfbe36e59891b604a76df4a76514576df17fd9c0b461517c564bb4103b5842a821de5395af8cb4ce293b7a93b9cee3a1982ef3903ca98a80ba56d610a268a94677565b292f11331365f1dc8c65b7ab3b0c5445eef8aa8a03b386a2554d1483d96d03a0dd6abd6c23f5d07ab69b858fbd16676eeada69dd97ab95df99bd6f5b917782d45e31c0cb735699d989b8f17d44f402a5e18f5503f6be5e7062dfe1f8b26a0b48426180d7b036a8d7a6e9cc643968e6c274e7b10c7a378e8503bee31b70ffd24068a3c236a58b41005d8a9e338368d5c889da8ef38c7513c4afa516adb9633b4ecbec36cb23f220f155730e7b21492371d22d7c122f4a230d8fab369e89912525ae76ade18d305bcf6a8b04004bd53d35e47b94025ddee851f7ac174162eaebc66c24bc8287bdcdce18c539a4b4034adb0790aaa9548b061c49faebc3982cdc4be1e82928c7f3c11dd73ede255cb5fe8210e50db55e64b3661b0f0cf8c9d03e28ae6b581dc37075d46ca736d7aff1381b8a34d1272b9f5826fa4790a20850a0af6f130116c021ffe6a87bd472c6e3eca4885775c1d26b508aba059216eaa3db08723d7191003aed4bf31b7e73887a6e91c3a23eca050cf15357b8f853662b57c016110a7ef9b66edff00ac6718ae77",
      "040000",
    ],
    [
      "ETag",
      "0BZDndGQRa9OpLxJ1rCJqw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1626997768481"
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
      "d3",
      "30",
      "10",
      "86",
      "ff",
      "8b",
      "f9b8545a4649bb48fb904281aa593bda0c21a129f2ec4bf0707cc1768aaaaaff9d73360a6248d997e4eefc9c72f7facd817d5746b294ddabfa470776ffaa06ff29041b709df68e5e2d1a072c62e0794de4e749b69c8f97d5d9c5b2fab28bbb33013cabafae8870e21b349ca5075629d0d2b1f4eb8119de00b509d45d63ca3e8b98dfb7a1b82d368bd507ca1b94215fdde67936cbe7ec189d1a25f7bcecf917b4dd1d23f680f71ba8c082111066692d3e80f08bb0a6e34dab61e4b0b3021cebe1fea0b6d8b5dc228ea8328ae3519c5c2497979349321d4f6302350aee151a626fb7341ff3e8b9dee04fda92c5af89b07d4c1b57fd73477525fb4d42b85815c9b81ff06f800b819df1e5205829ebfca37abfc12715fe25357f214857a5f410548391608728d5965c4a0bce0d92e84adeb6276cb65ee7cf5531d2a292c3e04e0d00daef4ec0fb7c9dfd4f5a32d81fadde65c5fc19e13cd9e684148bebf9b6c8ae6f0277f76484d9de83bbb148ae72100c159f8fa76f26c9f9a3c7de62f01d7d27f5b68388094ebfca47e5595a71ede0f80b6af3ec3d88030000",
    ],
    [
      "ETag",
      "V7AKE4Kf+2KfXv1u+ceaAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:39 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1626997768481",
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
      "0000000002ff85537f6fda3010fd2a91f7cf260121010241aa3a46d336120d2c8476d53481935c32b7214e63a713aaf8eebb38a53f56ad9590c2f9bd77f7ee7c7e20b72c8fc998842cbdaba0dc7dbae12169119034c5d3f4bcf8212737d33c30bc580f16a766f76c921e1d2183d52a41b745066dc1ab3202315e2d3b69c9ab82969cb73151db30db86655ab63d1c5aa3fec8409d802c99b1fc16d5bfa52cc458d70fb53b29e76906b460a213f1edd3b97e6fea45c96f2092427f5d52c72a427fbfe871c6232a19cf8f564b34500928d7b0a52cab1b7c52c6e1d7d7a93b8c6e3b2992ef5904348a7895cbda16a688789eb0b42a5556327e20cae68b3f64e9cc9c69a06d18176b5a149b96b6c9a890eb9c6ea10e58bcd1a8d0d6ebe2563bf5e717da061b4c580662a35d9d3bbea3351cd7d3569ee72c03edf3f117edcc9faf16dab76b85b5fe931dfdc52024cb95bb808619d4ce1e07e8bebdb65a402515d080eb61d7a2c6a86b8749388c92516f10265d08c351381cd05ed88dec3ef4e31028ea649d5da968cef39e6524030be2de6014c7bddec0a4602649dc3707fde10862c3a609f42032c8be45fe944cc209130517ac9922b9f2ddc05907feca9b4e0247b591d02a93278db9ba89973e253689a477fadad728e358a9be12d70b1c7f320ddc4ba7d98219a434da2def700f129a0940362d718212ca0b1ee3d0c862be740377ee4d66a85057bb38300419ff7c781604bb424d59aa2f99f8fee41a35b42ce9ee1f0c7d587db2dfbf287749b34a51145f454dfefb0620f5c89e23f3556491fdaf3dfe5a0497bfa945beaf1cff9a34473e2450421e7dbc054856c0876ff8f0a0908b4f0acb088931ee5c24ea225109cdeeb1ad32ffa81eda96dd258a5cca37986d1a8721d739ea8cb0855c3e76d43c2835b61aaac41309415c19cff5ce10fd0b4fcc0d2bd0040000",
    ],
    [
      "ETag",
      "gHpXtAjCnT1Nd/TPF20GAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1626997768481"
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
      "0000000002ff7d915b4fc2401085ffcbfa689b58345c9af000a642951429a0898690a50c7561e9d4dd2d0609ffddd962ca839797ee9cd3ef6467660f6c23b225f3d942a4ef05a8fd450a66648b1874218da623c74c037318189e1259f403eff2390cef5ec4273e3d1499ec8adda8dd2642276fb0e5cc3fb09500b9d4cc7f3db08c6f816202f59ce73951669f5ba33b1c0e824e44c61697d688a68341a73b08d8d1a952926b332feb2a379ec461d4fb3f369fe79b73228c26412f887f8bcc8e0e5be322861528c812b0bde70ad79098d0ae45f36d2ec1d558a804342be1f247aab0c8b94274c971bd9aebd56bf556abd1a8376f9a1e8112136e0466c44ec7d41b3368b88cf183b6c2ae095065490b5a95df1dd94615508e61c53da81d0a5d69afecf64f7c9c70297825eb3fe81597fa8c07dc9c45cdc2b3ef16bb7b03fa5121cdabc18e7a751afb16ed2a28e5db7b1d96707aedbe30277dfc02e8494ea14a020000",
    ],
    [
      "ETag",
      "uHE1+WIIFZizoVKunlBivQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:40 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "0000d0bb642d0e9f41a03bf94941230e9f946e9c14038454a04194e0f4ee757a84f79e00972519c7f3ad67a4036f4060d55a97eb68306de744eba5bde3db3c415c8b7a90915465b8d34402bddc2d6a256d643d39c66a391b352b9acb976d1aa51d7a4bd10dac08b4d8c09acb1fef4c61a6402109e30477c8e734aaf2ed7468f699c803ae5adf3ba16b77c5e751b1880aa52e67dc3fb286e6de35ca90f491c3cf0df5fb74a28e7c25c363dcc910eb1d4e7a473a093b6817698bd22d2486d09b4d631cdbbd77f861105f6287ef0c4fa44e2c4f920ec10a9079a09c8c67fae26aba65adc0bffd7c13037905d80473c2c1ef1f777661821a010000",
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
      "Thu, 22 Jul 2021 23:49:40 GMT",
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
      jobId: "grouparoo-job-13-1626997768481",
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
      "fbdabc092191a2354ae91a29212b21a9a66942b6b950b78029369daa2aff7dd7d074ad2ab59fb07dcfb9e7dc07cfe45e1431991126d2871aaaa76f77929133029aa6f85a6eaf0f57bcf4ec2c96b7eb519ee9432dd3f91c11c2b014cdcb0c3a4ad6150735dbefba6925eb9256527630516730ea0c9ca1339d4e268e6bbb03e429c892b528ee917dab75a966bdde49bb9b4a9966404ba1ba5ce6afefbdc761aface41d70ad7aef257ba8a27a9f8b7ecf24a75ac862bedfa1815a4115414e458616fe336376fe3e7557d0bc9b22f85170a09ccbbad0c616a6e0b248445a574d56327b268dcd3707b2f3d6de32b4b8cceabc880a9ac39915534d23fd548275196c37d6cabfdc069b45b8dafad16e79e56d16dde576bddff83bebe6ca0b3c4b539641c3b5e6d67973f3f182fa31282d8a463d34cf46f9a541ab8f6331049456d006a349dfa103b73f65099bf0c41d8d59d207c65c3619d311ebf3a90d76cc8022af116d58b490c560c880c1a01f0d626647b6edf0883a43370270d87884295dcec9f18cfcad84860ba14aa944db217213ac422f0a83bdbf5c845e534242eb4c5fb4c64c016f3d6a2c10419fd47434512151c9b47be5875eb05886ab83d74e780d29e54fbb079c7142330588a615364f43b59131368cf88b8d7781e066623f4f414566bf9f89e9b971f1a6e5aff4100768eceae64b7661b0f27f34764e8803cdea06f2d81e4c1989c88ce9e31f04e28eb649c8f5de0b7e91f62980042a28f8d7c3447013f8f2573bed3d6271f3514669bce3ea7065447805ed0a89a6da13dbeddbe3e647d5b4d21f626367786a",
      "9ac96132420e857ea9a8dd7b2cb415abd52b0883387dbf69d6f11f7041811477040000",
    ],
    [
      "ETag",
      "pOQVHcpE4ldohL3mltVuog==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:40 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93516f9b3010c7bf8bf738a295362309521fc89a749928e9087daa2ae4e283b9333e669b545194efde8376d9d456a22f7077fe9db8fbfbcf9efd965ab090ddcbea4f0b66f7a902f7b30b52b0ad72965e0d6a0bcc63e07845649c7cc62649abe5971f17971188763993f1e3f93911b6f8053567e19e951294b02cbcdd33cd6ba0b602555bebbccf3ce6764d57dc64e92ab9a4bc46d1e5c94d1c47f378c10edeb15170c7f39eff40dbddc1630f789f4209067401dd2c8dc10728dcaa5bd3f2ba5130b2d89a022cebe1fea032d836dc208ea832f2cf467e701acc669349301d4f7d021516dc49d4c4de6c683ee6d07195e2236dc9fc33224c1fd3c665ffdc525d8a7e932e5c255930ee07fc1fe04581ad76f920584a63ddb37a7fc117155e938a7f10a4ab926a08aa400b3043946c722e84016b0749b4396f9a23365fafe3b7aa6861508a61702b0700e5b6476019afa3f7a42583fdd3ea22ca166f08ebc83647245b5d2d36597475dd71772f4698ef1cd86b83e42a0b9da1fc93f1f4eb243879f6d837ec7c47df099d69c16305a75fe5bb742c2cb9b2707802630c0e3588030000",
    ],
    [
      "ETag",
      "LN+opNRgF/JDGAeduF9iLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:41 GMT",
      "Server",
      "ESF",
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
          "SELECT `date`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1626997768481",
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
      "6fda4010fc2bd6f54b2b11c03cfc408a520a6e6a8998c49844a8aae06cafdd4b8ccff19d13a188ffdef519f268a44442327733b3b3bbb7fb44ee581e931109597a5f41b9fb72cb43d22220698ab7d60da7ba3ee7abe9d4baa5a6693e4e2793abd35364b05a25e8b6c8e044f0aa8c408c968b765af2aaa025e72718e8441f9ce846cfb06dd334ac81a5a34e4096cc587e87eabf521662d4e91cbddb29e76906b460a21df1edf37de7a1d7294a7e0b91149db7961d74119d8f4dcf321e51c9787eba5c60029580720d5bca324ce1451987dfdf866e33ba6da7487e6011d028e2552eebb43044c4f384a555a9a292d1135169befa4316cecc9904da26a612362d6dc3e28d4685b65e1777da4f7f7ea16db0a084652036dacd2fc777b486e37adad2f39c45a07d3dfba69dfbf3e5a5f663a5b0d6211afac72024cb957b40c30c6ae74383dcf7cf520ba8a4021a706d760daa5b5d3b4c42334aacfe304cba108656680e693fec46f6000671081475b28eae5434e7b98dd756d24b2c3dd1c10e0d3bb101fab6dd0d9364a87787091dc4fd9e4dc9be451e4b2661ca44c1056bba446e7c3770d681bff426e3c0516524b4cae4b449ae2ee2759e128b44d20775ed6b947174aa5bee7a81e38f27817bed34af3c839446bbc53dbe73423301c8a625dd8284f282c7d83472395fb8813bf7c63354a8a7bb3c320419fd7e7a1104bb427559aa2f19fbfe78851a5a9674f71f86791803b2dfbfb2bba659a5288aaf4e4dfc8706203ad6f272eabd391964ff678fbf16c1e16ebcc8d5d2f157a4b9f2218112f2e8f32940b2023eddd1e3c2201757066d84c433ce5c246a93a88466f6d856257f505bfac0501b2e6929df6143bb776c721da38e085bc8e5a1a2666154db6aa812cf240471643cd73b47f41f69675f6eb0040000",
    ],
    [
      "ETag",
      "8Woa11OoYDD8ja777wDCCQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1626997768481"
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
      "75",
      "91",
      "51",
      "4f",
      "c2301080ff4b7ddd926de080253c804cc510940989c61052badb1c6cbbd1761824fc77afc3e00bbeb4bdeb77ed7ded916db33266015b67e9ae0679b84941cfcc220255e75ad15461a980590c344f8914f908bfc7ada7f7c16e8fc9eddbf3fd62b64ffb7d2294f88482b3e0c8920cf258b1e0e3c84a5e0095c55c9b43f4a132d168300f292a3036d17431990c8693909dac0bbf5a55db3f7e3c9d870f6174ad6479b2d806d7112420a11460aeaf246e40e8b13153bca872b015d65280620ddc6ca412eb8a4b449b32b6dbb65ddff37bbd4ec7efb6bb2e81390aae332c895dbc526f4ca3e679845f24c65a04c866498e4933ee29ed399e633b9eedb88d8c49b94d8f5721ff02f9ff43de05f20cb4fced6378d0a05e24929402e3e39cddeed0f8d263075ad66031c1e9571e337d8e4f3f5f289bf9f2010000",
    ],
    [
      "ETag",
      "clDozI3JYAqvof5XOFUQvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:41 GMT",
      "Server",
      "ESF",
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
      "d04b7282300000d0bb642d0eca04a13b81d8a21812a57cdc64680cc24031f2c74eef5ea74778ef07a49c8bb665ddbd1435780373ba36977c79908665d31c375457ed0f2f42cf788fa3dc3fcc7e80be73d5c7dba3de720cdba27b579d817a19f5c68db10a1fecd43f60e476eb3325f6e898c9ae1ae233d5be128cc8de85a12c6dd92b7e7887933b5d0e5aad4c7e255170ad02857c6a0f9cd3d11ca38e18dcbda2a1b46b65af262c08b259af56a1d165bb1a8e71861c6a0c2bb6c11ee983636f0fd604457adbdc6e62583b359517e29d58ac3a648be2279faaed95830510932c1ad1b2e2c5d5a0692ec0bf9d75b314af004ba48d68c0ef1fd78d705e1a010000",
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
      "Thu, 22 Jul 2021 23:49:42 GMT",
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
      jobId: "grouparoo-job-15-1626997768481",
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
      "ff85536b6f9b3014fd2bc8fbdabc5f10295aa384ae4809590969374d1332e6c29c02ceb0e91655f9efbb364dd7aa52fb09dbf79c7bce7df048ee799990298979f6bb86eaf8692f62724140d10c5f45afdacf474b31f0c431fd76dcf78a78f0f766364304d72c498b430e2d29ea8a819ceeb6edac12f5815642b43051ab376af5c6fdb1e34c26637b68f79027214f57bcbc47f62fa50e72dae99cb5db9910590ef4c0659b89e2f9bdf3d0ef1c2ab107a664e7b564075564e77dd1cfb960547151ce765b34504ba8222828cfd1c27f66125fbe4edde6b46867087ee00c2863a22e95b685299828539ed595c94aa68fc4d87c71205b77e52e428b89bc2ecaa8a4055c5809553452c7035857c1666d79fed52658cf436fe347dbc5b5bb9eb7179bd56eed6fadbb6b37702d45e31c0cd79a5997e6e6e305f513908a97463dd4cf5af9a941dedbb168024a4b6882d1a43ba63dbbebc4693c61a93d18c56917e2d88e27233a88bbcc19c230898122cf881a162d4599d84932701c889c381946c3118c22a79b7623b007ce840d7b2c1e3be47441fe545cc192cb8390bce910b90bbcd08dc260e72fe6a16b4a48699dab65634c17f0d2a3c20211f44e4d271de5029574bb3d3f7483f922f46edd66c22bc8283b6e7fe38c539a4b4034adb0790aaab548b061c49fafdd2582cdc4be9e83924c7f3c12dd73ede245cb9fe9210e50db55e64bb661e0f95f8c9d33e296e6b5813c34075d46ca736dfaf41381b8a34d1272b37383efa4790a20850a4af6f130116c021ffe6ae7bd472c6e3eca4885775c1d26b508aba059216eaa3db3ed7e7fd427065ca937b16177726e9acea1334201a57aaaa8d97b2cb411abe5330883387ddf34ebf40fa93ce89977040000",
    ],
    [
      "ETag",
      "o1rjA5Do3IoyfXyj1mb3xQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93514fdb3010c7bf8bf7482a355b494b241ed2ad6395424bdbc0c3261419fb92191cdbb39db2aeea77df3940378d49e125b93bff4eb9fbfb9f3d79108a9394dc89fa470b76f7ae06bf0ac11a5c2bbdc397d1ca018908785a2399dfc4c34db25a3c7c353f4f32feeba21a9fb8d5f939128e7d878692744f2a01923b927edb13451bc036a665dba8b2cb22e277261437c57abeb8c0bcd13ce48beb3ccfa6f98c1ca26323a79e961dff86b6db4344eef5dd1a2ab0a01884598cd5f7c0fc3cace96863240c9c6e2d03473ab83ba8ad6e0db55a0fb032884f0771f23e393b1b8f93c96812232835a35e6885ecf506e7235e7b2ad7fa11b724f107246c17e3c655f7dc625df06e9310ce174532ea06fc1ba08ce956f9b217ac8475fe49bd17f059857f4949df08e25509d907d5a038d83e4a9892726ec1b95e52bb921a73c4a6cb65fe5a15c5ad16bc1fdc8a1e40faed11f89c2fb3ff498b06fba3d5a7ac98bd229c47db1c91627e39db14d9e555e06e9f8d30dd79705756a3ab1c0443c5c3d1e4749c0c9f3cf65107dfe177526f5b8808a3f8ab7c119ea415950e0ebf0100e331ce88030000",
    ],
    [
      "ETag",
      "LV10S6QNkZpx+AdzGf7+sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:42 GMT",
      "Server",
      "ESF",
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
          "SELECT `date`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1626997768481",
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
      "000000000002ff8553fd4fdb3010fd5722ef974d2afd6e3e2a21d641c6224a5ad21484a6a9b51d2733a471b01da60af57fdfc5a17c8c09a448edf9bd77f7ee7c7e40b7bc48d018119edd554c6e3fdd08825a88699cc1e9109f9e28cccaf32b275c6a49fcf9e5ecece2f01018bc5629bc297376a044252953e3e5a29d495195580a7100890e7a367c7ddbf31cc776876e0f748ae5e99417b7a0fead75a9c69dcebe763b1322cb192eb96a53b1793aefdcf73ba514378c6ad5795db2035554e7fda247b9a05873511c2e1760a0524caed806f31c2c3c2b13f2f575ea36c79b7606e47b4e19a6545485ae6d410a2a8a9467953459d1f801199b2ffea0853ff58f636b9d60cdd62d6b9d63a55705de9880276b0b2b6bb52a6fadefd1ecdc5a437729cf995a5b573ffcc8b71a4e105acb30f417b1f5f9e88b751acd9673ebdbb5c15aff4b0dce12a6342f8caf18939cd59e1e4717bcbdb05a803556ac01574ed7c63db7eb91943834750723927619212e71467840bad41bb2614218069daeb31b152e44e1d08163db43ca062ee97789976037ede3c41bf57bdeb0976297a58cd8230fed5ae88fe49a9d70550ac59bf9a1ab2888fd551c2dc3e349ec9b36525ce5faa4315737f1d2a7862681f44e5fbb1ae5022ad5971184b11f4d8ee3e0d26fee7fca324cb78b3bd88014e78a011b4b98a066f25c243034349f2d82389885932928cca5cef70c85c63f1f9e05f1b63453d6e6174da268720d1a2c25defe83810f7b8876bb17e52e715e198ae19ba8c97fdf00a807bd3c47fd57918d76bf76f0b510ac7d530b5d2cfde81a3547114c5db2827ebc054036c087af77ff94800b8f09ca280d31ec1c5575112a59b37b7c63cc3faadd41d7f190214bfd06eb79fdfd90eb1c7546b661857eeca8794a666c3554a9271280b03261109e02fa17191273c3ca040000",
    ],
    [
      "ETag",
      "4aGDsaepMW7NUtrbEPVOKQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1626997768481"
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
      "7d",
      "91",
      "51",
      "6f82301485ff4bf70a09b0894ae2836ec4e99c71804f8b3115ae0c052e6b8b8b33fef7dde2c65edc1252eeb9fd4e737b7a62fbac4c98c73659fa5e8338dea4a05e741180ac7325e957612981190c144f890c0f0bb59ba2e8749ea36a1fe3d3e7c8f787830111327e838233efc4b619e48964deeb8995bc00b2255ce943d4b1d2ea6118f9a40a4cb49a2f67b3e168e6b3b3d1f239976addd4ad298c82c97cfcbf6dbdaef6bf8ec93cf2c77e70cdb23a1b6c879b00b620a08c414f5d09dc41ac263a10c98b2a0753622d6290ac819b8d54605d71816852c7b45dfa1cb7dfef76ddde5dcf2630c798ab0c4b629721cdc6142a9e07f84179b05b0244535234db663d50dbb11ccbb41cd3b29bcbe8d614c40133d96abb99f9aac96da130e679c65be9feed715ac8d72ff3231ced587dcf3c3a2a900b811480047d77eb92c33dea6cc8e5295183c1624e0fff98a98b3e7f01037c5fb055020000",
    ],
    [
      "ETag",
      "SvPtjJor55MTpkcoKzBEEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:43 GMT",
      "Server",
      "ESF",
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
      "d9",
      "72",
      "82",
      "30",
      "00",
      "40",
      "d1",
      "7f",
      "c9b3388d884adf005b04ca220547f392610990b21ab6d04effbd4c7fe0ce9cfb03a224217d8f87b6240d78054bb493b7c9d6ea4eaa76fde255a509a56a7817c57acfcffd611f4e08f7fe502f5a0b43387b8f5b5506e7e3331bdf309e8fd0602f17694f9363c138a3ad39b6d14e889dbe3120a485dceaa36ea782398d1fdfd028837490cdac0b9d5c9c9e98907217c6c1e420a51eef54c130b373f640f7e59eeb99245c3f6531b7b5c2370f51c71d97f801c7132e4c8478638baee1559d9508aeb8b61fb7f80453e3a0505aa339408d8af95cb6600308ef28233da62b5794647903feed78583ab20e5049c40803bf7f150b2fa61a010000",
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
      "Thu, 22 Jul 2021 23:49:43 GMT",
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
      jobId: "grouparoo-job-17-1626997768481",
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
      "000000000002ff85536b4fdb3014fd2b91f711fa0aa1492b55a32a81556ad3354d61d334458e73931992b8c40e88a1fef75d3b948190e0536cdf73ee39f7912772cbab948c49c2f3bb06eac72f372221c70414cdf1f5a17938fab128eebcd53a748ffe5e9f5ebaeb723d9920826b96a4e5ae808e144dcd408eb79b6e5e8b66476b213a98a833703b83a13d1c8d5c77e839de0079128a6cc1ab5b64ff516a27c7bdde41bb9b0b911740775c7699285fde7bf7766f578b1b604af6de4af65045f63e16fd5a08461517d564bb41038d843a8692f2022dfc67a6c9d9dbd45d4ecb6e8ee07bce8032269a4a695b9882892ae379539bac64fc448ccd5707b2f117fe2cb298289ab28a2b5ac2b195524563f5b803eb225c2dad7970b10a97d368be0ae2cdec9bbf9c7667abc576196caceb6f7ee85b8a260518ae35b1cecc2dc00beaa72015af8c7aa49fb5f27383e6efc7a209282da10dc66e7f48075e7f946489cb32efe434c9fa90245ee29ed293a4cf460e386902147946d4b068252aca326764db833871ec61ecb051168f8640e3d4eddb2ea549c6ec94ec8fc943cd159c73b91392b71d22d7e13cf2e328dc06b369e49b1232da14eabc35a60b78ed51618108faa0a6bd8e72814abaddf320f2c3e92c9a5ff9ed84179053f6b8b9c31967b49080685a63f314d44b9162c348305dfae7083613fb7e084a32fef54474cfb58b572d7fa14738406d57992fd944e13cb834760e882b5a340672df1e7419192fb4e9fd6f04e28eb649c87aeb873f49fb1442063554ecf36122d8043efdd50e7b8f58dc7c94910aefb83a4c6a115643bb42dc547b607b27aee31203aed5bb98e7b987a6e91c3a239450a9e78adabdc7425bb146be803088d30f4cb3f6ff00efc43b5d77040000",
    ],
    [
      "ETag",
      "wuw+XLlq8OQR7+zW5G7QmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1626997768481"
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
      "da3010c7bf8bf71aa4a4630122f501065d910274101ea6a98adcf892b9757c99edb021c477df39edd8b44e4a5f92bbf3ef94bbbfff39b127a9054bd883acbeb7608eef2a709f7db005db2a67e9d5a0b6c002068e5744ee8ff330fc59cdbe2cae6e31bc795a4ddaf9bebabe26c216dfa0e62c39b152821296255f4f4cf31aa8ad40d5d63aefb280b963e38bbb6cbb5c7fa2bc46e1f3f53e4da7b374c1cec1a55170c7f38e7f43dbfd39608ff8b085120ce802fc2c8dc14728dcd2af6979dd2818586c4d019675707750196c1b6e1007541944a341145fc593c968148f87e3884085057712b5576047f331878eab2dfea02d59f49e08d3c5b471d93d0f5497a2dbc487cb75160fbb01ff06785160ab5dde0b96d258f7acde6ff045857f49c5df08d25549d50755a005983e4a363917c280b5bd24da9c37cd059b6d36e96b55b43028453f78903d8072870b70936ea6ff93960cf647abf9345bbc22ac23db5c906cb95aecb2e9eace73f72f46981d1dd83b83e42a0bde5051381c7f18c5e1b3c73ea2f71d7d2771a68580159c7e955be958527265e1fc0bf540344d88030000",
    ],
    [
      "ETag",
      "UyD00xgBYE2Ho0FkM9uDUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:44 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1626997768481",
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
      "0002ff85537f4fdb3010fd2a91f7cfa6f5671a92b412621d6490ada490a640354dad935e32431a87d8e9d4a17ef75d1c4a614820554aedf7debdbbf3dd03b963d9920c48c892fb128acd875b1e9206014913bc75bfc3f287ee7f9e9597579db3f5cdcd7a24ff0e0f0f91c12a95a0ab3c85a6e0651181184c27ada4e0654e0bce9b18a8d9b59b5d5337fb7dcb326dc3eea24e401a8f587687eadf52e662d06eefbc5b09e7490a3467a215f1d5d37d7badb7f382df422445fba5651b5d44fb6dd3a3944754329e1d4e27984029a098c38ab21453d82b97e19797a15b8cae5a0992d72c021a45bccc64951686887816b3a42c54543278202acd677fc8c41939c781b61012632e1ada822d171a15da7c9edf69dffcf1b9b6c08a6296825868d7678eef6835c7f5b4a9e7399340fb78f4493bf5c7d30bedeb4c618d5d38cc600942b24cf907344ca1f27e6c91fbfa612a019554400dcead8e49bb76a71fc6a115c576ef208c3b108676681dd05ed889fa0618cb1028ea64155da968c6338875a0bd88d29076fa46cfe8e83dc3b47a5618c6966175f56e7ca05b360ab70df2a760124e98c8b960759fc8b5ef06ce3cf0a7def130705419312d537952275715f13c4f894522e98dbab615ca383a554d77bdc0f187c7817be5d4ef3c8284469bc93dbe744c5301c8a6055d8184e29c2fb169e4623c710377ec0d47a8508f77b1630832f8f9b017049b5c7559aa2f19fafe70861a5a1474f31f86799806d96e9fd95dd1b45414c557a73afeba0648176bd99ff41727936c7f6df1d72038deb517b99c3afe8cd4573ec4504016bd3f054856c0bb5bba5b19e4e2d2a00d4e9e64387391a84ca202ead9632b95fca3da364cdd228a5cc85798854d69ec57a58a082bc8e46345f5caa8b65550299e4808e2c878ae778ae83fb62322eab2040000",
    ],
    [
      "ETag",
      "IJedK2R+YuQV0HvXXvLtzA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1626997768481"
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
      "000002ff6d915d6f82301486ffcbd92d6ca288d4c40b5d8833f16b28c992c5988a478602656dd9e28cff7da7b8ec23f3a6ed79fbbced79db131cd2620b5dd8a4c96b85f27893a07e348b105595694553290a8560016a9e10397b9a861f5175c78eb348e5fb796b18b993a4d72342c52f9873e89e609762b655d07d3e41c173249bd23c2f89d1c7d294cbd124582cfb933949b9d81a691a8dc7fdc13880b3f5ed5aafcbc38f69345d06c320bc66599d2dd88b4d883b9458c4689a28a5d863ac47269fa2db33b495a8648c0a6ab8de48a4a84a2e85b049b11ddf76bca6c758a7e3f9aeef10988998eb5414c4460bea0db4d03c0bc53bc5831601b25e52d25d3dbe91ecdcb6fd46bbcd1ce606acce53ab759bff38c69cbf9c779df35c3af137d734dceaaba1c151a39a4b41e9149a608d4bc87b61826b7a102d2bb420e6f4490fa9bed4e74f481b31bd01020000",
    ],
    [
      "ETag",
      "OXNRzUu/9yOUsmjP3GU4Mg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:45 GMT",
      "Server",
      "ESF",
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
      "82",
      "300000d0bb64ad4e9114487744145118a0628d6e3201130552fe08d8e9ddebf408effd009624bc6d6957e6bc001f60624bb44816fbcac0abf01ef95a69493f0a4e0a5c3ba6cbf242c7706afaa4a9d1a197f11cce09d58f9d6aebb210194bcf274f468618298655105d4c6bc572d2f2077d5e9c2d1463ec21d735ea4cf5b19910651768299a281a4b617d6afd95c1e108373b5ce79ef8f2541687bbe0e63b74c89ee67d22d2dda2e1edbb50a608ca8789ae5a4d6d6eefb146f220b1a0b05ae3b0316f4f2c2e044bfd7cb61cc2b265be8eef422a760866808f55daf096a62faefa8ed00cfcdb693755fc1580396b78037eff00ff0a83d71a010000",
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
      "Thu, 22 Jul 2021 23:49:45 GMT",
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
      jobId: "grouparoo-job-19-1626997768481",
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
      "000000000002ff85535d4fdb3014fd2b91f74adba4346d5aa91a5509a3134d479282b6698a1ce72633a471881d2686fadf77ed50064282a7d8bee7dc73ee471ec92daf323223292fee5a681e3edd88941c1150b4c0d7fa07f3145f6797aecfa371e888b3f3bf5f17f33922b86649baab4be849d1360ce46c1bf58b46b4356d84e861a29e33ed39e3e1783a9d4cc6dec8739027a1cc2f78758becdf4ad57236181cb4fb85104509b4e6b2cfc4eef97d703f1cd48db801a6e4e0b5e40055e4e07dd1cfa560547151cdb7111a68253409ec282fd1c27f66969ebc4edde774d72f107ccf1950c6445b296d0b533051e5bc681b9395cc1e89b1f9e24022ffc25fc6161365bbab928aeee0c8caa8a2897aa8c13a0b376b6b159c6dc2f5225e6d82245a9efbeb457fb9b9d8ae83c8ba3ef743df52342dc170adb975626e015e503f03a97865d463fdac959f1ab47a3b164d4069095d3099d863ea78f634cdd309cbbd6337cd6d48532f9db8f438b5d97404a32c058a3c236a58b41295474730cdc74e9252db4d46f6f1304973c74ddccc757236f4a68e9d93fd11f9d37005a75cd642f2ae43e43a5cc57e1287db60b9887d53424edb529d76c674012f3d2a2c1041efd4b4d7512e5049b77b15c47eb858c6ab2bbf9bf00514943d447738e39c9612104d1b6c9e82662d326c1809166bff14c16662df0e4149663f1f89eeb976f1a2e5cff41807a8ed2af325511cae822fc6ce017145cbd640eebb832e23e7a536bdff8540dcd12e09b9dcfae177d23d8590430315fb78980836810f7fb5c3de2316371f65a4c23bae0e935a8435d0ad1037d51ed89eeb8e46c4801bf526369ed887a6e91c3a23eca0524f15757b8f857662ad7c066110a71f9866edff01ce73e91877040000",
    ],
    [
      "ETag",
      "pZc8tiMdQ5EiS6R1oFHzJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93616fda301086ff8bfb354884d10091fa216cb4450ad042ba699aaac8d897d49d6367b6438b10ffbde7b463d33a29fd92dc9d9f53ee5ebf39909f42711293ad287f3560f66725b85b1facc136d2597cd55a59200101474b24bf6fc3c5b34d067234f85a7d53cf97fdd9f5edd3c50512963d4045497c208500c92d897f1c88a215601bd3b2a954de660171fbda1737d97abebcc2bcd2dce7cbbb344da6e98c1c835323a78ee62dff81b6fb63401ef5760d0518500cfc2cb5d18fc0dcdcaf6969554be859dd180696b4707b501addd4d468ddc34a2f9cf4c268104d26a351341e8e4304a566d409ad90bddbe07cc46947e55a3fe19624fc84846963dcb8689f3bac0bde6ee2c3f9328b86ed807f039431dd289777828530d6bdaaf71b7c53e15f52d20f82785542764125280ea68b12754e3937606d27a96d4eebfa844d57abf4bd2a8a1b2d7837b8131d8074bb137099ae92ff498b06fba3d597249bbd23ac43db9c906cbe986db26471e3b9fb37234cf70eec8dd1e82a0bde50617f383e1f45fd578f7dd6de77f89dd8990602c228fe2ad7c291b8a0d2c2f1059e0445da88030000",
    ],
    [
      "ETag",
      "Yb1MxsA2l72VmWnxF0EHQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:46 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1626997768481",
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
      "61",
      "6f",
      "9b",
      "3010fd2bc8fbb2494980400889547559cb5aa4947484b48aa629b18d616e01536c5a4555fefb0e689b769d562912b1df7b77efce778fe89617319a22c2d3bb9a55bb4f3782a01e620aa770bb9839eb1b3bbd92c6ce65e75e6e9e13dd78383a02066f5412e765c6fa52d4156572ba5a0ed24ad425ae84e843a0fed0e89bced0994cc663c7b55d13749265c99c17b7a0fead5429a7bafe9c7b900a91660c975c0ea8c85feef5fba15e56e2865125f5b72975c822f5ff273dce04c58a8be268b50403b564d586e5986760e1a08cc9d7b7a1071ce78314c8f79c324ca9a80bd5d882105414094febaa8d8aa68fa8b5f9ea0f5a7a73ef24d2b65241cc6d4fdb6658aa4d8173d61c78bcd5b0d4369bf256fb1e2e2eb42d9497f08cc9ad767dee859ed671fc405b0581b78cb4cfc75fb4b370b1bad4bead5bacf7cfd8e02d6652f1a275166192b1c6d553f3fcf74fd608b0c29275e0666c38d8748d0949c89826ae352289c10871c978842d62d089cdec98300c3ad5446f55b81005360d2b198ea9159b2e66c4c686494723ea124a2c3b4e62833893d8b48668df430f1557ec94cb5248de75105d877ee46da270159ccc22af2d23c175a64e3b734d11af7d2a281248ffa96bdfa05c40a6e639fc20f2c2d949e45f79dd04cc598ae96e79073390e04c3260e30a3aa858752162681aba5c2cfdc85f04b33928da67bd7c664834fdf9781044bbb2edb26abf681686b335687055e1dd5f18f8706cb4dfbf4a7785b3baa5b4fcf6d4c5bfef0064422d87d3f0cdc941fb5f7bf8f5100c7e970bfd5879e11a7557214b58c50afaf11400b9053edcdfe765022eac13a48131541c668eca2609ad58377b3c6fcd3fa95dc71a5aa82557ea1d6643537a87256a22b29c15eaa9a26e99dab635502d5f4800c2c8",
      "047e7006e81fd68d09c7cc040000",
    ],
    [
      "ETag",
      "OA6Yj4gVs0y8eHEm1Hb/0w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1626997768481"
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
      "7d",
      "92",
      "516f82301485ff4bf738d8440585c4075d98629c51d064c9624c852ba240595b5c8cf1bfef1617b665662ff49ec3f9c2e5a4677248f288386493c4ef25f0d35d0c72ae061f44994a8147c17201442320698cc9d1c8ddbbc173693e76ee5f7745ff6845adf1bcd7c38408779051e29cc936813412c4793b939c66809890342b30234f85920befc50d16fd97195a198b94355d4e26fdc1c42517ada6522ae4ba9a6b3258f8de74f83fb65e17876fc29b2edca1ebdf4256178decd9c6872d70c84350bb179ced21949eaa45e0d229e882953c0441aa70f522e6ac2c28674c47476f3674c36a5ab6dde958dd76d7c060ca422a1396637619e06e443249539f7d602ba485015e8d58d0b67a1ed1361ecc6ec3346dc36ebb76f53fca1d033fb244d4daa8d6fec3d9b6f19b0b429a26b496d66dcc6ae3077f622e95508ba682565fcb0f4e12c48c336c42802aa1712de489a9929072242f412321c57b304ae4555f3e012d5f3fa564020000",
    ],
    [
      "ETag",
      "HHEjESFu5/7+XhpAv6d3JQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:46 GMT",
      "Server",
      "ESF",
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
      "dd",
      "56",
      "82300000e077d9b57a8a5058770d0c141812bf76b303b840a60263e1a0d3bbe7e911beef07e4654987818896d11b780553aec055b9723a1d194115c9bbe6c6b67ada5ab7afaad5c7d88a77a4459abebfb94bcbbe4e619da8d73214a837eb93620589f78965c337c516c3b05d66da9918b1986b84076dddb8d78dfc2e3abc091a47c6f4e01429e3a92c0f6614d4b84ee13e6a2f6ccdde67cf8a0afd9924996b2baa7db2cd2133de9e9c39f091dbe3a32c54798fcaa339671f9e6110d50adc8b4079daabdc77a051b3108f7ee7412443dfaeb8a86403d96e040b406577e67420e707f7650de102fcdb89983afa084034e79483df3fb80113251a010000",
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
      "Thu, 22 Jul 2021 23:49:46 GMT",
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
      jobId: "grouparoo-job-21-1626997768481",
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
      "fd",
      "2b",
      "91",
      "f7953ed257d24ad5e84a80a2368524056dd31439ee4d6648e2123b6c08f5bfefdaa10c84049f62fb9e73cfb98f3c913b5e6ec984243cbbafa17afc722b12724440d10c5f2fcefe5edcfd10dfecf5b99097db7a53dca65757d32922b866495aec72684951570ce46413b6b34ad43b5a09d1c244ad9eddb247bdd178ec382377e0dac89390a74b5ede21fbb7523b39e9740edaed4c882c07bae3b2cd44f1f2de79e8757695b805a664e7ad64075564e763d1afb9605471514e37211aa82554311494e768e13f739b1cbf4ddde6b46867087ee00c2863a22e95b685299828539ed595c94a264fc4d87c7520a1b7f4e691c5445e17655cd2028eac2d5534568f3bb04e83f5ca5af8a7eb60358b166b3f0ee7e7de6ad69eaf979b951f5a37e75ee0598a263918ae35b58ecdcdc70bea6f412a5e1af5483f6be5e7062dde8f4513505a42138c9dee88da6e779ca489c352b73f4cd22e24899b3843da4fba6c3c80c136018a3c236a58b41425653dec68378dfb090ce3c1d886d81d8c93d885a103360c1cd6a7647f44fe545cc109973b2179d32172132c222f8e828d3f9f459e2921a575ae4e1a63ba80d71e151688a00f6adaeb2817a8a4dbbdf0232f98cda3c5b5d74c780919658fe13dce38a5b90444d30a9ba7a05a892d368cf8b39577826033b1cb435092c9cf27a27bae5dbc6af90b3dc2016abbca7c4918050bffccd83920ae695e1bc84373d065a43cd7a6f7bf10883bda2421571b2ff84e9aa70052a8a0649f0f13c126f0e9af76d87bc4e2e6a38c5478c7d561528bb00a9a15e2a6da03db75",
      "ba5d871870a5dec56c7b74689acea1334201a57aaea8d97b2cb411abe50b0883387ddf346bff0f52edbe5177040000",
    ],
    [
      "ETag",
      "JGxJkZoB1OHosPduUmjfQQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1626997768481"
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
      "00000002ff8d93614fdb301086ff8bf7355549d7a525121f5ae8b68ad0b23668308422635f3233c797d94e5155f5bfef1258996052f892dc9d9f53ee5ebfd9b15fca4816b37b55fcaec16e3f14e0bf35c10a5cadbda35785c6010b18785e10b99e9e0f049e8efbdf35c0a27ff383f7afcf1f4f4e8870e227949cc53b962bd0d2b1f876c70c2f81da04eaba34599b05cc6faba6b84e57f3c517ca4b944dbeb84a92c93499b17d706894dcf3ace5dfd176b70fd803deaf20070b4640334b65f101849f376b3a5e561a7a0e6b2bc0b1166e0f0a8b75c52d628f2abd41d80ba341747c3c1a45e3e1382450a3e05ea121f66a4df3318f9eeb153ed2962cfc48846d63da386f9f1baa2bd96ed284f3451a0ddb01ff05b810581b9f7582b9b2ce3fa9f7177c56e135a9f93b41ba2aa5bba0028c04db45a92ae3525a70ae934497f1aa3a60d3e53279ab8a911695ec0637aa03d07e73003e27cbc9ffa42583bd68753649676f08e7c93607249d5fccd6e9e4e2b2e1ee9e8d30dd7a709716c9550e1a438547c3f1a75174f4e4b1536c7c47df89bdad216082d3aff2557916e75c3bd8ff01d4e949a088030000",
    ],
    [
      "ETag",
      "SBK2coC8/WleeN/YZa/XKw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:47 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1626997768481",
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
      "fd2b91f76593fa6e69934a083a082c5a9b96340575d3d43ac94d30a471b11d4687fadf77e350a043032952129f73ee3df7e14772cbb288f449c092bb1cc4e6d30d0f488580a2099ed647d68fb32073bff3b9e79d8d567f260fe05d1c1e2283152a4957eb14aa92e72204d99f4d6b89e0f99a0aceab18a8da6a559bdd56d7b27abdaed9319ba89390c64396dda2fa5aa9b5ecd7ebbbdcb584f32405ba66b216f2d5f379fdbe555f0b7e03a192f5fd9475cc22ebef273d4a794815e3d9e16c8a06720962012bca52b4f0a28c82e3fdd0354657b504c9f72c041a863ccf54610b43843c8b59920b1d95f41f89b6f9ea834ceda17de21bcb9809a916195dc1b2622c75d6a541a5b158ac6f8d336f3c32965859cc52904be3ea9bedd9c633cd718d99ebda53dff87cf4c538f7c6b389f175be832b7bc1d1540452b14c5bf269904261e7a96bcedb591502aaa884125cf41a5dda341b561007bd3036db0741dc80203083de016d078dd0ea40270a80a24e15d1b58a663c838675103423cbeac496151e985114b62cd36a40b7474d68058d66bbd342846c2be4b7600a4e995c73c9cad6912bcff1ed85efcddc93816feb32629aa7eab4345714f1daa7c22291f44e5ddb02651c331573705cdff60627be736997a31f4242c3cdf40e871fd35402b2a9c00e2a10231e61d3c8643c757c67ec0e86a8d0f39cec1892f47f3ebe08fccd5a7759e9371978de608e1a2a04ddfc834d7dcf71cfc976fb2adf254d73cdd102fd5726b82f010237b87c9cc9c6313ce822f5fa6d2b2f0c5c4c05cdffc2381f750d621fffb5c5a742f0a6941ec9c5ccf6e6a43cf220060159f8f1f62059031f5ef8dded432ede3f4c2315fee3ae86b24812",
      "0a287796ad0a333bb5898f493459a83798d5eeee8653c42822c20a32f5545179fb74b70b2897cf240471d5dc72167f0101ed2c05fd040000",
    ],
    [
      "ETag",
      "/M9ZFbnNKoYRRFMmzPxeRQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1626997768481"
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
      "91",
      "dd",
      "4e",
      "c2",
      "401085df65bc6d152a293f09894240490842912b43c8b24ceb96b65377b72821bcbbb3c518e29537bb7366cec9ce973dc15e153be8c156251f15eae34d8276e18a084d9559c357498541f000ad48d83996adb4ba7fb1c9dcf2641c8e8f87e06ed1efb3c3c877cc05f44e102bcc76067a6f2728448e1c8b953676530b0fecb174bde56b34993db1ce69e7f46c359d3e0ea623387bbfb9cda6dcff27b13e7b90d236c218351612dd16a5a614a59d384023f23243df50a5251aa8cdf520d154954213f9dcf183c06f8641d8edb6db61a7d569b2312329aca282bdab25af0696acc822fa643e08d8a0eb9251e3fa3c707ba415d6144e608afa40ca341ef0abdee256525e6f7c1d190aa9b2ab944461b1f937b2fe797e70b468e69a98c5a0c3685c9086e4dc96f1adaed00329f84f9e95bde8f33784af2556f0010000",
    ],
    [
      "ETag",
      "Fc4ju3OtgPtponF6Fyv2/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:48 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64adce34e227dd15514708698902d20d9340908f909440013bbd7b9d1ee1bd1fc09244681d77b2120d7805138368912c1cb53577de2d80147298c8737f47f7d0f773981aa164745907c5965bb59bf14db96273c9ebbe5a69ae2f565a94fcb2c6dddc88e787d21b0703b9749a6c048bd4c6987a32bb5fabb121d7f3f79e5aceb1c882372c49e412e9c28d32b687877d2af1cbe0f89df341bae1e4dc1e4e1dd02f46db9c5532a544f4511426f57a8948635a0ffd9ef5be554f6993e7e53185f66e1c95e2eab0163e6f3d82abcf112b1db67b30036254452b745c3cb9cb154233f06f8fbb4989678029582b5af0fb077c33daf51a010000",
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
      "Thu, 22 Jul 2021 23:49:48 GMT",
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
      jobId: "grouparoo-job-23-1626997768481",
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
      "02ff85546b6f9b3014fd2bc8fbda8440120291a2354be91629211b8f76d33421630c730b38c5a65554e5bfefda345dab4aed27b0ef39f79cfb804774cb9a1ccd51c6cabb8eb6874f373c4367884a5cc26d68dd7d59feac2f93e460e6f534cea36b963c2c1680608a2570bdafe840f0ae2554cc936858b6bcdbe396f301241ad8e381e5d88ee7cd668e3b712de0095a151bd6dc02fbaf947b3137cd93f6b0e4bcac28de333124bc7ebe37ef6d73dff21b4aa4305f4b9aa022ccf7453f579c60c978b3482230d009daa6b4c6ac020bff997976fe3af590e17a5802f89e118a09e15d23952d48417853b0b26b7556347f44dae68b1714f91b7f151b84575ddda40daee9999163895379d853e332dc6d8d7570b90bb7cb78bd0bd268f5cddf2e87abdd26d9069171fdcd0f7d43e2aca29a6b2c8c737d0ae000fa391592355a3d56d74af9a941ebb76351049016b40fa6b391832d77e465453623853b9e66c58866999bcda6789c8d8837a1933ca318785a54b370c31bc7b3b3918da7e9d82b9c74e2e54e9a4dad3cb52c6a3b16f19ccc75d0f10c3db44cd20b26f65cb0be43e83a5cc77e1a8749b05ac6be2ea1c05d252f7a63aa80971e251408a0776a3aaa28e3a0a4dabd0e623f5caee2f595df4f78434b4c0ed11dccb8c095a080c62d344fd276cb7368180a965bff02c07a62df4f4181e6bf1f91eab972f1a2e5cff41806a8ec4afd44511cae83afdace097185ab4e43eefb175546c12a65faf80780b0a37d12f423f1c35fa8bf0a69415bda908f8709601df8f0533bed3d6061f341464838c3ea10a144484bfb1562bada13db7527b68734b8956f62d3c9ecd434954365a4356de45345fdde43a1bd58279e41ea6f9204816ed6f11fef4f1af077040000",
    ],
    [
      "ETag",
      "R1qBAXmFUUy/dm5TdSWiUw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1626997768481"
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
      "000002ff8d93516f9b3010c7bf8bf74aa4d2642445ea03c9b22d120d0d214f53851c7c3077c6c76c932d8df2dd77d02e9bd649f405eecebf13777fff39b16f520b16b2bdacbeb7608eef2a709b2e48c1b6ca597a35a82d308f81e3159163be419decf60bed47e9e267c26dac9e36b7b744d8e22bd49c8527564a50c2b2f0cb89695e03b515a8da5ae77de631776cbae2364b57eb4f94d728ba7cbd8be3681e2fd9d9bb340aee78def36f687b387bec11f72994604017d0cdd2187c84c2adba352daf1b05238bad29c0b21eee0f2a836dc30de2882aa3ebf1c80fae839b9be934984d663e810a0bee246a62775b9a8f39745ca5f883b664fe9808d3c7b471d93f0f5497a2dfa40b57eb2c98f403fe0df0a2c056bb7c102ca5b1ee59bddfe08b0aff928abf11a4ab926a08aa400b3043946c722e84016b0749b4396f9a0b364f92f8b52a5a189462183cc80140b9c305f81827d1ffa42583fdd1ea43942d5f11d6916d2e48b6ba5b6eb3e8eebee31e5e8c303f3ab0f706c955163a43f95793d9fb6970f5ecb10576bea3ef84ceb4e0b182d3aff2593a16965c5938ff0259806eff88030000",
    ],
    [
      "ETag",
      "3aQonOUbCn1ARCxOasLlzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:49 GMT",
      "Server",
      "ESF",
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
          "SELECT `first_name`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1626997768481",
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
      "02ff85546b6fda3014fd2b91f7659378264012a4aaa56dd665a3d086d00a4d1338e186998698da4e5756f1df77e39496ae6a2b21817dceb9f7dc877920372c9b932e89d8e23607b1f9b4e411a910507481b77d53fe689f2efdfbceb975f67d39f93b0ff8f1e5c1013258a19274b54ea12a792e6290ddf1a8b6103c5f53c179150355cd56b5d9313bae6bdb1da7e5345127214dfa2cbb41f56fa5d6b25bafef72d7169c2f52a06b266b315f3dddd7efccfa5af025c44ad65fa6ac6316597f3fe961ca63aa18cf0ec62334904b1053585196a28567e53c3a7a19bac6e8aab640f21d8b81c631cf3355d8c21031cf12b6c8858e4aba0f44dbdcfb41465edf3b098d59c28454d38cae6056316629dd3b680b33834a633a5ddf185f83e1b931c3321396829c19d7dfbcc0339e68fec0180f06de28343e1f7e31ce82e1f8c2389eece0cadb99d0ee1ca46299361bd22885c2e8633ffdd7532c045451092538b51b1dda741a6e9444769c38563b4a1a10454e64b7a9153562b705ad79041475aa88ae5534e359649b49a365bb8e0396edce9346d3765a6d336a9b71c7695a966dc57683824db615f2473005a74caeb9646553c975e087de340cc683935ee8e932129aa7eab4345714b1ef536191487aa7ae6d81328e998a09f983d00b7a27a17fe5954bd187058d37a35b5c8b84a612904d0576508138e7736c1ab9188efcd01f0e7a7d54e8495fec1892747f3e3c0bc2cd5a7759e96fd20b82de04355408baf90f1b85813f3823dbed5ebe2b9ae69aa305fa5426b82b01024b5c4bce64e308ee75917a31b7956706aeac82e69b30ce47fd06f112ffb5c54f85e01b2a3d92cbb1174c487915400202b2f8e3ed41b2063efc2bd8bd4be4e2cbc43452e11977359645925840b9b36c5598d9a91dd7b42ca2c942bdc22cd7de0da7885144841564eab1a2f25dea6e17502e9f4808e2aa0dca59fc03faef083517050000",
    ],
    [
      "ETag",
      "L2sK5DjIx6M3GJjYzdRoBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1626997768481"
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
      "00000002ff9d51db6ac24010fd97e96b52d48a97805015f182488db5508ac8ba99a46b2e9bee6eb441fcf7cec662a54fa52fbb7366cf19ce993d412cb2003cd889e8a34055de456896b6f0511789d174e532d3080ea0611131c39759d18f8793dab21cc783c96bb0300fd9b1d72386e6ef9832f04e100a4c020ddedb093296a29509a5cdb6020e9832b7bdd5b33f5d8c09a732b078b19ecffb83f908cece5597b07fc9b6db3cfe8b627376602f773e86a830e368cde74aee919ba9dd8b66699ea0ab65a1386aa8c8d543a464913325a54b1db7d174ebad46abdb6db75b9d66a74ec444726684cc88bb5e913530d2b0c497475a0b3488a0aa92361456e781da2325b04a61c10cd5410a7dc5b8bf346a8ff859b9bae732ad12dc8e18322e929b2923667e004742f5dffacdb7b74169503f29494135da8cb54bdea1b46c1ae31955a0039cd13f4f84b9e0f3176c668a7444020000",
    ],
    [
      "ETag",
      "fVJuAkCH0QyGkBHYdNt3nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:49 GMT",
      "Server",
      "ESF",
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
      "d04b7282300000d0bb646d9d18286077461d40fe6845d864f8448342f80808747af73a3dc27b3f204e53fa7c92ae7a500ebec014a3f5325d1ab582b7de5dc922e2ec0ea3dff5a26925894a8e16d2f950e912ccc20e7a37dd76d497e83c34ba67b18c5dfb8cc82971f5fe6e39e74239142336e06ede60dbeb7d0d9ea2bcd158a05cc3b8f1036354f104915dc6da4afe2ef81ca439ee0c24c24c17e820979cdfa6fdeadc9a656f1e67a98aea54f054c637034217ae13c2b0e420f715deb8cc8f3e1385e4749902ccbaeae34a9a29a95958b522dcce9190a801b2c002d0b1ce5bfa24f99b2b7caed70bf06f27dd54d37700a6714b5bf0fb072e667a251a010000",
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
      "Thu, 22 Jul 2021 23:49:49 GMT",
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
      jobId: "grouparoo-job-25-1626997768481",
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
      "14fd2b91f711fa207d24a9548daa0d50ad4d479a82d8344576729319d2b8c40e08a1fef75d3b94c126c1a7d8bee7dc73ee23cfe48e97291911c6f3fb1aaaa72fb7829163028ae6f83a0bbfb957e10fa7bcbc39b237e7f2e892e7553e1e23826b96a4db5d012d29ea2a0139daacdb7925ea1dad846861a2963d689d0ceda1e739ced0edbb27c89350640b5ede21fbb7523b39ea740edaed5c88bc00bae3b29d88edeb7be7c1eeec2a710b89929df7921d54919d8f45bf1622a18a8b72bc59a3815a4215c396f2022dfc65a6ecf47dea36a7db768ee0079e004d1251974adbc2148928339ed795c94a46cfc4d87c73206b7fe14f232b1145bd2de3926ee1d84aa9a2b17ada817516ae96d63c385b85cb49345f05f17a7ae12f27ede96ab159066bebfac20f7d4b515680e15a63ebd4dc02bca07e0a52f1d2a847fa592bbf3468feff583401a52534c1d8e90ee989dbf558c69c24737b0396758131973903da63ddc4eb433f65409167440d8b96a2f46ce6a5c0ec7838f020eebb60c75eea65719f0dbb7d67e83883b447f6c7e4b1e20a665cee84e44d87c875388ffc380a37c17412f9a6848cd6859a35c674016f3d2a2c10411fd4b4d7512e5049b77b1e447e389946f32bbf99f002729a3cadef71c6192d24209a56d83c05d552a4d830124c96fe0cc16662df0f4149463f9f89eeb976f1a6e5aff40807a8ed2af325eb289c07e7c6ce0171458bda401e9a832e23e38536bdff8540dcd12609b9dcf8e10d699e42c8a08232f97c980836814f7fb5c3de2316371f65a4c23bae4e22b5485241b342dc547b60bb9ed7b3890157ea9f98d7eddacea1693a87ce085b28d54b45cdde63a18d582d5f4118c4e907a659fb3fbea98f3c77040000",
    ],
    [
      "ETag",
      "DRK8VRZ7nQY+2UGs+Qigrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1626997768481"
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
      "db3010c7bf8bf7b85490aea46d241eda5146a5d0421b9e261419fb12cc9c5cb09d4c55d5efbe7360058d49e125b93bff4eb9fbfb9f3dfba52ac962f6a08ae706ccee4b01eed6071bb08d76965e35561658c0c0f182c8241adaaba94cbe9eb4e6165d13b6737d519c9f1361c523949cc57b962bd0d2b2f8e79e55bc046a13a89bb2caba2c606e57fbe236dd2c573f282f51fa7c759724b379b26087e0d828b9e359c77fa2edfe10b0277cd8400e062a017e96dae01308b7f46b5a5ed61a06161b23c0b20eee0e0a834dcd0de2802a83e1d9208c86d1743a1e4793d1242450a3e04e6145ecdd96e6630e1dd71bfc4d5bb2f01b11a68b69e3bc7bb65457b2dbc487cb551a8dba01df035c086c2a97f582b932d6bda8f7177c55e15f52f34f8274554af7410554124c1fa5ea8c4b69c0da5e126dc6ebfa88cdd7ebe4a32a9534a8643fd8aa1e40bbf6085c26ebd9ffa42583bd6975314b171f08ebc83647245d5e2fb6e9ecfac673f7af4698ef1cd81b83e42a0bde50e1e96872368e4e5f3cf61dbdefe83bb1330d044c70fa55ae946371ceb585c31ff14d98d488030000",
    ],
    [
      "ETag",
      "L62sH9dL+/vrQotu1vBlDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:50 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f765934a9b96b6492b21e820db2a9500690a62d3d4dace4d30a471b11d5885fadf77e3501e43032952129f73ee3df7e10772238a840c0913d96d096afde95a32d220606886a76783281e0562922523b54e665cfde45e78bfb7870c51a9345dae72d8d1b2541cf470366d664a962baaa4dcc1403b9dfe4ebbdfe90f069ed7f7bb7e1b751af274228a1b545f19b3d2c3566b9bbb994999e540574237b95c3e9db7ee3aad9592d7c08d6ebd4ed9c22cbaf57ed2fd5c726a842cf6665334506a5073585291a3856765c20e5e876e0aba6c6648be131c28e7b22c4c650b437059a4222b958d4a860fc4da7cf141a6c124388c9d456eee160d6761d32d1caa9df97c75e37c8b4e8e9d0596948a1cf4c2b9f8114481f3441b87ce2c0c8369ec7cdeffe27c8f4e66a7ced7cb2ddca8a3a28d04b41185351153964365e0b14fe3b7d3a904d4500d3538f7dc3e6dfbee80a5cce3a9bfdb63a90b8cf9ccebd15de6f24117ba09038a3a5345b72a5ac882f5390337a52c4992ceae9b74fd5d17baacdd493dea79bd3e4b07bd5edf07b269907b250c1c09bd925ad4cd2217d1380ee671340b0f477160cb4869999ba3da5c55c44b9f068b44d23b756d2a5448cc54757e1cc641343a8cc7e7413dec096494afa7b738ee94e61a904d155d8201752c136c1a393d998ee3f149389aa0c24ef074cbd064f8ebe15910af57b6cbc6bec9288a4697a8a14ad1f53fd8348ec6e177b2d9bcc8774ef3d272acc0fed509ee6a80c035ae9b14da3d803fb648bb709bc6330357d140fbbf30cec75c817a8dffdee0d32078376a8fe46c164497a43e8a20050505ff787b906c810faff8f6be21176f1ca6d106ff7157b9ae927005f5ce8a656566ab1eb85ecf2796accc1bcc1f74b6c3a962541161098579aca8be6fb6db1554ea271282b86a613d8bbfb0839f37ef040000",
    ],
    [
      "ETag",
      "Q9RTAEiLgdArydUcrZc7Nw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1626997768481"
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
      "6d",
      "91",
      "5b",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcbfa688b944ba5242402f142a820055e34842cedb416da4edddd5691f0df9d2d068df16577ceec773273b207b68bb38075d9268ede0a10fb8b08d44c171ec8225192ae1c3309cc60a078446473f8e93c86e3597b3c0d2eafa01c3fcf6de8f77a4448ff1552ceba0716c6900492755f0e2ce329902d5125116a9f6b71e74efb0b9229065a4e96aedb1fb8b7ec689cf9f53adffd18e60b6f34b9ffcfb13a1a6c8b1b0f421090f9a0a7e702b7e0ab910e26799a27604a2c840f925570f510092c722e104dea980ddbb4ec86ed38d7d776a7d5b1084cd0e72ac68cd8e59c56630a154f3c7ca75cac4180a84a8a185667a9db6da76635aa1c5ac2164489b1acdfc047b547cdc7b4daf9b7c969d59af6d9e3035760fd35acbec70ff60ae49340ca2241c7a89f220d51d38ae22b5180c17c4e7ff110ab933e7e0179d8f790e8010000",
    ],
    [
      "ETag",
      "3Cz9MfKQ5KOd+/evKZS6eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:51 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd0c97282300000d07fc9591d7181a437442b422a42456b2e0c4b641b16b35062a7ff5ea79ff0de0f88d394721e89aea62d78032a5ea0593a737bb8b1fcea4a826ae872835d618d6f97728ca179637265e1f958857705ed34d44bb10d59b77c5785363590284e6bf4f03413fb5c8eddae10fa12daad675b823d4db698abdc58684701a34c4646eba4c730f3e6a622f830dc2fe54079b193542b4ffcdca64954bb5f8de938dfd0a9f47dfe990588181211b6971639bacf5b2e1a6c7536b6636f9bb8d32aebd56a18af8f447f10ffb04a02feb1d6f2bca596accfb8011340c7be649447e58bbb5c233401fff648a89ebe023634669481df3f3c0901d81a010000",
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
      "Thu, 22 Jul 2021 23:49:51 GMT",
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
      jobId: "grouparoo-job-27-1626997768481",
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
      "02ff85536b4fdb3014fd2b91f771b44d9f692b55a32a61ebd4a6234d41db3445b673130c495c628709a1fef75d3b948190e0536cdf73ee39f79147722bca844c0913d95d0dd5c3a71bc9c809014d337cfd559cfb752dfcdb717d77ed41e57ddf7c762f66334408c352b4d8e7d052b2ae38a8e96edbce2a59ef6925650b13b57a5eab3bea8d2613cf1b8d07e32ef214e4e94a94b7c8bed67aafa69dce51bb9d4999e540f742b5b92c9edf3bf7bdcebe9237c0b5eabc96eca08aeabc2ffa25979c6a21cbd96e8b066a05550c0515395af8cf4cd8e9ebd46d418b7686e07bc181722eeb521b5b9882cb3215595dd9ac64fa48accd1707b2f557fe2272b8cceba28c4b5ac08993504d63fdb007e73cdcac9d6570be09d7f368b909e2ede29bbf9eb7179bd56e1d6c9dab6f7ee83b9ab21c2cd79939a7f616e005f513505a94563d32cf46f9a941cbb76331049456d00463cf1dd1eed89db094793c1df7872c7581b131f386b4cf5c3e19c02061409167452d8b96b21c304ebda1c7e23e77dd7890b8c398d221c4e9c0a56c3cc4689a90c309f95b090d6742eda5124d87c855b88cfc380a77c1621ef9b68494d6b93e6b8c99025e7ad4582082dea9e960a242a29269f73288fc70be8896977e33e11564943f6cef70c629cd15209a56d83c0dd55a26d83012ccd7fe1982edc47e1c838a4c7f3f12d373e3e245cb9fe9110ed0d8d5f64bb651b80cbe5a3b47c425cd6b0bb96f0ea68c54e4c6f4e10f0271479b24e462e7873f49f314420a1594fce36122d8063efcd58e7b8f58dc7c94511aefb83a5c19115e41b342c2567b644fba83de845870a5dfc4867df7d83493c36484024afd5451b3f758682356ab67100671fa816dd6e11fd15bd67277040000",
    ],
    [
      "ETag",
      "ZmFEuuiEk8uqh7er7JO+0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1626997768481"
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
      "10",
      "c7",
      "bf",
      "8b",
      "f7",
      "1aa4d241a091fa001b5ba95228213c4d5564e24be6e2f832db0131c477df39edd8b44e4a5f92bbf3ef94bbbfff39b19dd482456c2bcb1f0d98e38712dcca0709d846394baf1ab505163070bc24f260a69bc1f0e7fd5dbc5a0db7f7bb719cece4e1f696089b7f878ab3e8c40a094a58167d3b31cd2ba0b61c5553e9accd02e68eb52faed364bef84a7985c2e78b4d1c4fa6f18c9d834ba3e08e672dff8eb6a773c09e719b400106740e7e96dae033e46eeed7b4bcaa15f42c362607cb5ab83d280d363537883daaf4ae47bd7e781ddedc8c46e17830ee13a830e74ea22676b3a6f99843c7558207da92f53f1261da98362edae79eea52b49bf870be48c3413be0df00cf736cb4cb3ac1421aeb5ed4fb0dbeaaf02fa9f83b41ba2aa9baa012b400d345c93ae34218b0b693449bf1babe60d3e5327eab8a1606a5e806f7b203506e7f01bec4cbc9ffa42583fdd1eaf3249dbd21ac23db5c9074fe305ba7938747cf3dbd1a617a74601f0d92ab2c7843f5af06e3e128bc7af1d827f4bea3ef44ce3410b09cd3af72271d8b0aae2c9c7f01b077a7c688030000",
    ],
    [
      "ETag",
      "wrBU45zJHLQQ5bJk8LRkiw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:52 GMT",
      "Server",
      "ESF",
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
          "SELECT `ltv`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb24979004d028954b569cb3ab4847484b48aa62931e442dd124cb1491755f9efbb98a68f756ba52860ce39f7dc971fc82dcb5664404296dc95506c3fddf0903408489ae0d7717a1e4527e55cca1507f37b7773658db7f78787c860954ad0759e4253f0b288400c66d35652f032a705e74d0cd434eda6d1337bfdbe65f5ec8e6da04e401a8f58768bea6b29733168b7f7dead84f324059a33d18af8fae97b7b63b6f382df402445fbb5651b5d44fb7dd3a3944754329e1dcea6984029a058c09ab214537856aec2e3d7a15b8cae5b0992372c021a45bccc64951686887816b3a42c54543278202acd172f64ea8c9cd3405ba672b36ce0830ab9c8e81aaa83f25e6a54688b457eab7df527636d89f5c52c05b1d4aebe39bea33dd15c4f9b799e330db4cf475fb4737f32bbd04ee67bb8f10f0b4c700542b24ca517d030852ab5c70eba6fe75609a8a4026a7061e93d6ad87a3f8c432b8aed836e18eb1086766875e941a847fd0e74562150d4c92aba52d18c67866e981da31bf6f503dd88e30e18b6a5777a16fe85d0b1edae6dac626af4c8ae41ee0b26e18c899c0b56b7915cf96ee02c027fe69d0e03479511d3329567757255112ff394582492dea96b57a18ca3533513d70b1c7f781ab8974ebd06234868b49ddee122c43415806c5a6007251463bec2a6918bc9d40ddc89371ca142cdf662cf1064f0f3e159106c73d565a99e64e8fbc3396a6851d0ed5fd834f05def9cec762ffc2e695a2a8e12a8536db0a9010237b8889c09fd187eab22d52aee1acf0c5c5209c67f619c8fbc86e235fe6b87bf06c15b53e7487ecc1c7f4eea4f3ec45040167dbc3d4856c087977f7f13918b77116d84c433ee6a242a93a8807a67d9ba4a66afee9b46a74f14b9906f30d336f7c3a9625411610d997caca8be89aadb15548a271282b86a5e3d8b3fa87800c809050000",
    ],
    [
      "ETag",
      "MlGccBuYttdoe2K5vW7Myw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1626997768481"
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
      "00000002ff8d91514fc2301485ff4b7ddd904d1c6c0989a008980565809a1842ca7699836d1d6d8710c27ff7b698697c30beacf7dc7da7b9e7f64836491e118f2c93785b023f5cc420c7aa084094a91478142c17400c0292c6486ead7436d827d3a87b6797afcdcb17ebb9d11fb7db4888f01d324abc235925904682786f4792d30cd096ca1d12f2502871ef3f76a628331629399af97ea7ebf7c8c9f8e6a9900b5d57aec934188efa7fdb168b62f31fc7fc6490355b06b0020e79086ae882b3358472a8f6216856a4600a56f21004d1b0fe1173561694336662c7b45ba6e5d88eeb369b4eabd1b2104c594865c2726467131c8d4826691ab00f5c07b111e0bac4cdacf477a7dad76ecdb2750e251f80ef58222a0deb73a37e037b3d572d6499cef0f312b751bb722a4f8f4aa84408a8acdfeef9d76cdd8304f1c4190615a032d6cf796f99a2f11a4ff2120c12527cdf4122cffaf4093273ac633c020000",
    ],
    [
      "ETag",
      "q1lUHxiTdBD2uX7/W1V4GQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:52 GMT",
      "Server",
      "ESF",
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
      "300000d07fc9d93a8020d01b605d586567bc3029a42cca1664499cfe7b9d7ec27b2f00b30c8d63faeceea8059f80404ede665ba39754cdade04217de674db95f5a2970f873934072f492391c276312da7d528f5de3173909f4af7bd026dc89713132a65b63ab9c6d89e3c18e33918faf6a1c280b96cc87974b3888ebc592c954ae35d9cf4eaee5de2965143a482985c950f36bca4673588a57c38d43f9c79774dbe075baf8c7087e28d3cdeb599b74c4a1ab79158ca1a87665e8924be2f4b4620eaa9547df8fd60d3d7e7667acc5c585c50a15cfe20a3600ad7d85d198566fee4e90e50df8b7a74fd2a377808a204618fcfe0185634db31a010000",
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
      "Thu, 22 Jul 2021 23:49:52 GMT",
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
      jobId: "grouparoo-job-29-1626997768481",
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
      "00000002ff85536b6f9b3014fd2bc8fbb826e4550291a2354ae98a94900d48ab6d9a906d0cf50a38c5a65556e5bfefda345dab4aed276cdf73ee39f7c123bae575866688f0e2ae65cdfed31f41d009620a17f0faf9e6e1d6dd5f05973fb776fe37cb72b976fc623e0704d72c89ab5dc97a52b40d6572b68dfb4523da1d6e84e841a2dec8eb0d9d91e379d3a9e34edc21f0242bf315af6f817da3d44ece6cfba8dd2f84284a86775cf6a9a89edfedfb91bd6bc41f4695b45f4bdaa022edf745bf948262c5453ddfc660a095ac495985790916fe333372f63a759fe3aa5f00f89e538629156dadb42d4841459df3a26d4c56347b44c6e68b038afd95bf4c2c2acab6aad31a57ecc4cab0c2a9daef9875116dd656105e6ca2f5220936611a2f2ffdf5a2bfdcacb6eb30b6ae2ffdc8b7142625335c6b6e9d995b0817d0cf9854bc36ea897ed6ca4f0d0ade8e4513405ab22e984e070e1eba038fe4644a73777c4af20123c425d3533c2603ea4dd824230c03cf881a16ae453d76462ecdc7599ad3114927a7d920f5c818a7d8f1187106de9491293a9ca087862b76cee54e48de75085d4741e2a749b40d978bc43725e4b82dd579674c17f0d2a3820201f44e4d071de5029474bb8330f1a3c53209aefc6ec22b5660ba8fef60c6392e2503346ea0798a356b9141c350b858fbe7003613fb760c4a34fbf58874cfb58b172d7fa62730406d57992f8a932808bf1a3b47c4152e5b03b9ef0eba8c9c97daf4e137006147bb24e8fbd68f7ea0ee2962396b584d3f1e26804de0c35fedb8f78085cd0719a9e00eab43a516a10deb56889b6a8f6c6fe40e1c64c08d7a13f386eeb1693a87cec82a56aba78ababd87423bb1563e832008d30f4db30eff00f14e851877040000",
    ],
    [
      "ETag",
      "+hwk8yVIHZU/fzddfsM6Eg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:52 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1626997768481"
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
      "93614fdb301086ff8bf99a4a14bab48dc48796751029b4b44db5490845c6be0483e30bb6535455fdefbb04d64d30297c49eececf2977afdfecd9b3329245ec41152f35d8dd49017ed9042b70b5f68e5e151a072c60e07941e4c2fc4aaf86f112cccfcdf363799e0f787cb9bcb820c2894728398bf62c57a0a563d1dd9e195e02b509d47569b2360b98df554d719daee2f915e525ca269f6f9264324d66ec101c1b25f73c6bf92fb4dd1f02f6840f2bc8c18211d0cc52597c02e1e3664dc7cb4a43cf616d0538d6c2ed4161b1aeb845ec51a57736eef5c3b3703c1e0ec3d160d42750a3e05ea12176b3a6f99847cff50a5f694bd63f27c2b6316d9cb7cf2dd5956c3769c2789e868376c07f012e04d6c6679d60aeacf36feafd01df55f8486afe4590ae4ae92ea80023c17651aacab894169ceb24d165bcaa8ed874b1483eab62a44525bbc1adea00b4df1e811fc962f23f69c9607fb5fa3e49679f08e7c93647248d6f66eb747273db70f7ef4698ee3cb85b8be42a078da1faa783d1b76178fae6b14b6c7c47df89bcad216082d3af72ad3c8b72ae1d1c7e03067aeec888030000",
    ],
    [
      "ETag",
      "OnXTG7IQenWUkhm3f4aICQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:54 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537f4fdb3010fd2a91f7cfa6f577d2a6a984a08300d54a0b690a43d3d43ae9a5b84de2603b6c15ea77dfc5a114860652a4247eefddbdf3dd3d92354b17a44702b6bccf416c3ead78402a04145de2e9693a6cfe584f1cebaa7bfe3d597d15272be7bc7f70800c56a8244db218aa92e72204d99b4e6a4bc1f38c0aceab18a86a36aacd4eabe338b6dde95add26ea24c4d190a56b54df2995c95ebdbecb5d5b72be8c81664cd6429e3c9fd71f5af54cf015844ad65fa7ac6316597f3fe961cc43aa184f0fa61334904b103348288bd1c25eb9088e5e87ae319ad496487e6021d030e479aa0a5b1822e469c496b9d05149ef91689b2f3ec8c41dbac7be31675cce6896cd2bc65ca79c1b541ab359b6364ebdf18531c7b22216839c1b37e7aee71acfb4c1c8988e46eec4373e1f7e31cebcf1f4d2f876bb832bfbc868670152b1549bf169104361e4e9be066fbb5408a8a2124a7066373ab4d96d384114d861d435db41d48020e806769b9a4123742cb0160150d4a922ba56d194a7b6433b61dbb61ba1493b6644a34eb30540ada8d9b2ba96b930ad86d5a26644b615f25b3005274c665cb2f2d2c88d37f0dd99ef4d47c77ddfd56544348fd54969ae28e2a54f854522e99dbab605ca38662a3a3018f9aed73ff607d76ed9f4212c69b899dc63db231a4b403615340105e2822ff0d2c8e57832f007e3517f880addc9cb1d4392decfc7bdc0df64fa96957e93bee7f56f514385a09b7fb089ef0d466764bb7d91ef9ac6b9e66881fe2b133c940081158e1d67b271047f74917af0b6953d03475241f3bf30f647dd81788dffdae25321b823a547723575bd5b521e7910818034fc787a90ac810f577db777c8c5cdc33452e13fce6a288b24a1807266595298d9a91dcb6cdb4493857a8359b6b36b4e11a3880809a4eaa9a272eff46d17502e9f4908e2a88dca5efc05bdc44c13f7040000",
    ],
    [
      "ETag",
      "FnL1XkS94Q8HKmj+rDj9HA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1626997768481"
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
      "6d915f4fc23014c5bf4b7d74331b1afe252432258a992043f4c11052ca650eb6ddd276c042f8eede0e23c6f8d2f69e9e939e5f7a60eb245fb0369b27f1a600555ec46046f610812e52a36993986b600e03c363723e95e86f83cd5bb6e7efd9e8f21ef3676fb4eb74c8a1c527649cb50f6c9940bad0acfd716039cf806209ea1997925ca694560886c3b0d71d9090e1c20a8349187683b0c78ece4f6a3693eb7364fc1af5070fff25a64787ad701ec11214e4026c07a97005c2f42d9ee6994cc1d55828019a55e6ea22565848ae105d52dc6bcff5ebb57aabd568d49b374d9f8c290a6e12ccc93b19533566d0f034c21dd1b11a19547524d065b56e4936aa808ac20eb002b5c5447bb7b0af5a5c09ccaac6bf234b9eea73460037e0ff0d4cbf1f0f4a03fa45219168b010de09e80eaddb10bc2de030c1e93f1e13739a8f5ff23f6c51ec010000",
    ],
    [
      "ETag",
      "Jyo1vBqVmxaWmQ+DonM0Qw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:54 GMT",
      "Server",
      "ESF",
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
      "4b7282300000d0bb642d8e2088e98e80914fac0d05ac2b0642404b07d204ace0f4ee757a84f71ea0608c2b950f7dcb3bf002a6c2804bb68cc416b9f48270e637491659be1ac894d60ad35294b631ca4b62662a60097629dbc589a3d7199edabe1bf51f51f3f3e6c309f9fa4419152728eda661d5a58a72d6f4674c702b3d4f49a2d9647fa77657edac747691f73987a42936b984c9cd34c54aea3a37d36f43efeb3835c3bd5946b8dd86811bbc190c3a6dea1505d13472bcb9d3c1d74fa5af41071ddf67b44b564af5b4cbc5eb14a56bf74b0676dccd87112c00bf8babe42abf3eb96b0bc205f8b7e7c324f83300f14272097eff00d4ec7ef71a010000",
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
      "Thu, 22 Jul 2021 23:49:54 GMT",
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
      jobId: "grouparoo-job-31-1626997768481",
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
      "02ff85536b4fdb3014fd2b91f795be68daa495aa5195302a35e94853109aa6c8766f328f340eb1c38650fffbae1dca4048f029b6ef39f79cfbc813b913e58e4c0913f97d03f5e397df929113029ae6f8faf7f27ae086f7a1ba9bf3dba62a567536a757b31922846129baaf0ae828d9d41cd474bbe9e6b56c2a5a4bd9c1449de1a033189f8e2713cf1bfbae3f409e82225b89f20ed9bfb4aed4b4d73b6a777329f30268255497cbfdcb7befe1b457d5f23770ad7a6f257ba8a27a1f8b7e2d24a75ac872b6dda08146419dc29e8a022dfc67eed8d9dbd45d41f7dd1cc10f8203e55c36a536b63005976526f2a6b659c9f489589baf0e6413ac8245e2705934fb322de91e4e9c1dd534d58f153817f13a7496d1c53a0ee7c9721da59bc56510cebb8bf56a1b461be7e632880347535680e53a33e7ccde22bca0fe0e9416a5554fccb3517e6ed0f2fd580c01a515b4c1d4eb8fe9c0ef4f58c63c9ef9c311cbfac098cfbc111db23e9fb8e0ee1850e45951cba2a52c7d6fe8c10e58cafc533775fd114f277cc452cf1b4d4ea9cb689f03399c903fb5d0702e542595683b446ee26512a449bc8d16f324b02564b429f4796bcc14f0daa3c60211f4414d07131512954cbb975112c4f345b2bc0eda09af20a7fc71738f33ce68a100d1b4c6e669a843b9c38691681e06e708b613fb7e0c2a32fdf1444ccf8d8b572d7fa12738406357db2fd924f132fa66ed1c11d7b4682ce4a13d9832325118d3879f08c41d6d9390ab6d10df92f629860c6a28f9e7c344b00d7cfaab1df71eb1b8f928a334de7175b83222bc86768584adf6c89e8cfaae4b2cb8d6ef6283f1e0d83493c364843d94fab9a276efb1d056ac512f200ce2f423dbacc33fbb098f4f77040000",
    ],
    [
      "ETag",
      "xHV14MqMskAcYuplLrfAaQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1626997768481"
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
      "0000000002ff8d93514fdb3010c7bf8b794d2532bab444e221ddcaa8145ad686876942916b5f521727176ca7a8aafadd770eac9b0029bc2477e7df29777fff73608faa962c666b553eb560f66725b89f3e58826db5b3f46ab0b6c002068e97446ed6fcd7a272931bbdb9deaed276bc376b915c5d1161c5062acee2032b14686959fcfbc06a5e01b509d46d55e75d1630b76f7c71952d67f31f9457287d3ebf4fd364924ed93138354aee78def19f687b38066c8beb251460a016e067690c6e41b8995fd3f2aad130b0d81a0196757077501a6c1b6e100754195c848330fa125d5e8e46d178380e09d428b85358137bbfa2f99843c7f5129f694b165e1061ba98362ebae78eea4a769bf87036cfa26137e0ff001702dbdae5bd60a18c752feafd055f55784b6afe4990ae4ae93ea8845a82e9a3549373290d58db4ba2cd79d39cb0c96291be57a5960695ec0777aa07d06e7702aed345f291b464b07f5a7d4fb2e93bc23ab2cd09c966b7d35596dcde79eee1d50893bd037b67905c65c11b2a3c1f8ebf8ea2f3178f7d43ef3bfa4eec4c0b01139c7e951be5585c706de1f807713c541688030000",
    ],
    [
      "ETag",
      "hbaYOmtBHlhFjSLu8yrbcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:55 GMT",
      "Server",
      "ESF",
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
          "SELECT `ios_app`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1626997768481",
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
      "54",
      "6b",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91f765d3fa267da41282ae6410a9a490a62098a6d6716f8a218d83ed0015ea7fdf8d43790c0152a5d439e7dc7beec37924373c5d903e89f8f23607b9fe762d225221a0e912df8667ce4f3a5eaba37bb73b742e1f2ee91144a7bbbbc8e0854ad155964055895c3250fde9a4b69422cfa814a28a81aa3bad6ab3d3ea384eb7dbe9d9bd26ea1424f188a737a8bed23a53fd7a7d9bbbb614629900cdb8aa31b17a7e5fbf6bd53329ae8169557f9bb28e5954fdf3a47b8960547391ee4e276820572067b0a23c410b2fca45b4ff36748dd3556d89e43bce803226f25417b630041369cc97b9345149ff91189baffe90893b7287a135e742cd6896cd2bd63ca14acf52ba82e260f2cf2daaacd92cbbb17e07e3636b8e35c63c0135b7ce8fdcc0b59e699e6f4d7ddf9d84d6f7bd1fd661309e9e58bf2eb670e583346874014af3d4d80c69944061f1a993defbf91502aaa982129c751b1ddaec359c288eba2ceeedb4a3b80151d48bba6dba1335986383bd8880a24e17d18d8aa6d81cd65dd81ddbeef460c7eeda51d38636b46c07b5b068367b8c0173da2d9b6c2ae45e720d075c6542f1b29de43cf042771606537f38085d53464cf3441f94e68a225efbd45824923ea96b53a05c60a662369e1fbac160187a676eb90e235852b69edce242c43451806c2ab1831ae4b15860d3c8c978e285ded81f8c5061667cb26528d2fff3f82208d799e9b2364f320882c1056aa89474fd1f360903cf3f249bcdab7c6734c90dc708cca94c70570204ae712105578d7d7830459a95dc545e18b8ac1a9a1fc2381f7d05f22dfe7783bf0ac1db537a24a75337b820e5ab",
      "00629090b2afb707c906f8f223b0bd91c8c53b896994c633ee2a53451226a1dc59be2acc6cd54ebbd7349f104da57e87391d7b3b9c224611115690eaa78aca1b69ba5d40b97a262188abe697b3f8078953c2a411050000",
    ],
    [
      "ETag",
      "TV9+aOysHwE7C9ZxZaHebQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d515d4fc24010fc2fe72b2854e42b21110c228680803c19428eebb616daee797b451ac27f77af18303e185fda9de9cc66667b10db28f5455baca3f02303935f8560a76e980165b1257e694c0944498095212b6f76d3bd5f1bd0a30a7232134fd7d59de9763aac20f50e8914ed830822887d12edb7834865026c8b9056526b56d95c3ba237998cfadd311309fa8e182f46a36e6fd417c7d2d9154bb2ab623efbe6afb3e178f0b76db5d2dbff3896c792d8e07a0601184815b8e8dae006941dbaab904c740c65c2cc282051888b0fa1c14c4b835866a67ceb95ab75afde6a351af566ad5965618c4ada0853d62ee61c4d58b4329ee1271f45782c30c5c8f7098ae78e696b32285a38f00c6687119d316c4e44e51ef645aa6b8549d1e0e78a40c674d9d197f6021430aafe762fbf93f5720bf462906b12b8869553db07746a5ed376e94a4249fec74f913de1e317ad0169a540020000",
    ],
    [
      "ETag",
      "/vQxd4GsFcfysrO2p6c5rA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:56 GMT",
      "Server",
      "ESF",
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
      "ed",
      "d4",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d8e800cd09d20a8450ac64f8a9b0cc4d004413e51043abd7b9dee7b03de21de378809a142e07b79a537f006fa5831a764ea558665ef58102437e5548b444be08cc28b1898b6513dc4e63c3deb7ebf1bf4f6934024d478e9b0dc8b50707490b94b24ddd97707b719d2b5f0ceb07887bc6c64377a2ecbd2b40be92b93c2835f0783a787690395d6a9db4bb057ac228fe4ad8654c40cee67d8ddd71fab055c181b5e648fd094f8b20f8beb63fb944f7e8948c9d7b3d6ad609bcb5db08831dbceb3cea0c7d5cacb4295e4b053ba03e698dce8dab654361d8d46ff031340bb8a375460fefa40d54c7302fe72c0f7bea2af212c1a37b4013fbf75a0350f3b040000",
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
      "Thu, 22 Jul 2021 23:49:56 GMT",
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
      jobId: "grouparoo-job-33-1626997768481",
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
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7",
      "b59000e11124b422485724085b08ada6698a1c7393b94d62163bacace2bfefda295dab4aeda7d8bee7dc73ee238fe49e973b322609cf7ed7501d3fdd89845c105034c357e741dc14c79e1ddc1ffee673afbb7e581cfd6c324104d72c498b7d0e2d29ea8a811c6f37edac12f59e5642b43051abd76b7506dd81e70d8783913bea204f429e2e79798fec5f4aede5d8b6cfdaed4c882c07bae7b2cd44f1fc6e1fbaf6be1277c094b45f4bdaa822edf7453fe78251c54539d96ed0402da18aa1a03c470bff99bbe4f275ea36a7453b43f08133a08c89ba54da16a660a24c795657262b193f1263f3c5816cfca53f8b2c26f2ba28e392167061eda8a2b13aeec1ba0ad72b6b115cadc3d5345aac837833bbf657d3f66cbddcae828d757bed87bea5689283e15a13ebd2dc02bca0fe0ea4e2a5518ff4b3567e6ad0e2ed583401a52534c178e80c6867e478499a0c593aeaf593d481241925c33eed250ef35c70770950e41951c3a2a528c1eba76e3f6171bf93d2d8edb85e3c1ab94edcf186801d72fa2975c9e982fca9b88239977b2179d321721b2e223f8ec26d309b46be2921a575aee68d315dc04b8f0a0b44d03b359d74940b54d2ed5e04911f4e67d1e2c66f26bc848cb2e3e637ce38a5b90444d30a9ba7a05a891d368c04d3953f47b099d8d7735092f18f47a27bae5dbc68f9333dc2016abbca7cc9260a17c11763e78cb8a1796d2087e6a0cb4879ae4d9f7e221077b44942be6dfdf03b699e4248a182927d3c4c049bc087bfda79ef118b9b8f3252e11d5787492dc22a6856889b",
      "6acf6c6fd0775c62c0957a131b74bbe7a6e91c3a231450aaa78a9abdc7421bb15a3e833088d30f4cb34eff0062d10a3377040000",
    ],
    [
      "ETag",
      "0xoVmy3/NkvzlD92OxIyEg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1626997768481"
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
      "614fdb301086ff8bf99a4a74edd210890f2deb58b7b4853408690845c6be64668eedd94e5155f5bfef1c5887c6a4f025b93b3fa7dcbd7eb3273f85e224250fa2fed582dd9dd4e0af4390836ba577f8325a392011014f6b2467edd76d72fbbdda54f1729d7f33098c62fe747e8e84633fa0a124dd934a80e48ea4777ba26803d8c6b46c1b55765944fcce84e2a6c817ab4bcc1bcd43bebac9b2e92c9b9343746ce4d4d3b2e3dfd1767f88c8a37ec8a1020b8a4198c558fd08cc2fc29a8e3646c2c0e9d63270a483bb83daead650abf5002b83d168308c3fc4676793499c8c9321825233ea8556c8de6c703ee2b5a732d74fb825198e90b05d8c1b57dd738b75c1bb4d42b85815f1b81bf0354019d3adf2652f5809ebfcb37a7fc01715fe25257d27885725641f5483e260fb28614acab905e77a49ed4a6acc119badd7d95b5514b75af07e702b7a00e9b747e073b69efe4f5a34d85fad3e4d8bf91bc279b4cd112916cbf9a6982eaf0277ff6284d9ce83bbb21a5de520186a783a4e3e4ee2d3678f5de8e03bfc4eea6d0b1161147f952fc293b4a2d2c1e13768bb76d288030000",
    ],
    [
      "ETag",
      "BuJv8WZfSf6MORKp8e36dw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:57 GMT",
      "Server",
      "ESF",
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
          "SELECT `date`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1626997768481",
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
      "4014fd2b64f6cb6eb62dd0276d62b42ad62695ba94ea9acda61da6171ca50c32836e63fadff732581f6b56131260ce39f79efb984772cbd315199090c77705e49b2f37222435028ac6789a7aa3cbece7e9e184c74dcb1ed927f2bbf910efed2183972a49d7590275298a9c811ccc678d381745467321ea18a8de6ad7ed6eb3dbeff77a5da7edd8a8939044139edea2fa5aa94c0e4c7397bb110b112740332e1b4cac9fcfcdfba699e5e2069892e6db94266691e6c749f713c1a8e222dd9bcfd04021215fc09af2042dbc2857e1c1dbd00d4ed78d18c9f79c01654c14a92a6d610826d288c745aea392c123d1365f7d90993b718f0263b9a20a963563a9f32d0d2a8dc522bb354efce999b1c49a229e805c1a97a7aeef1acfb4b167cc3dcf9d05c6d7fd6fc6c89fcecf8dc3ab1d5c7b0a8b465620154fb58d80860994169e3a357e3f9f5240159550818b9ed5a5b663f5c328ecb1c86975c2c8823074c25e87b6428bf5dbd05e854051a7cae85a45539186fdb0b96a46dd0eeb3896432dabd772babd08ac90d9961d365b7de6389d9645b635f2907305c75c6642f2aa5de4d21f07ee22f0e7ded130707519112d12755c992b8b78ed53619148faa0ae6d89728199cade8fbdc0f58747c1f8c2adc63d8198b2cdec0e071ed14402b2694ed7a0203f132b6c1a399fcec6c178ea0d27a8d0333cdf312419fc7a7c11049b4c7759e93719fafef00a3534cfe9e61f6c16f8636f44b6db57f92e6852688e16e8bf2ac17d0510b8c185135c5a07f04717a9576e5b7b61e0322ab0ff0be37cd435e46ff1df5b7c6a046f47e591fc98bbfe15a98e7c882087947dbe3d48d6c0a7977c77e3908b770ed34885ffb8ab4c9649580ed5cef2756966a7eef75a4d8b6872aede61ed4e67379c3246",
      "1911d690aaa78aaa1ba7bb5d42857c262188abe655b3f80b7f0c4e91f1040000",
    ],
    [
      "ETag",
      "nNGWpXHBLig201G1Fs+/wg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1626997768481"
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
      "6d916f6bc23010c6bf4bf6b61d6d27fe2908b34e36a1c856155f0c91985e6bb5edd524d539f1bbef528783e19be4eef27b927b2e67b6cbca98f96c9da5fb1ae4e92105fd618208549d6b455b85a5026631d03c25921f45381a6ed29697ec3781da2dbe177290f6fb4428b1818233ffcc920cf25831fff3cc4a5e00c962aecd25fa5499ec65301b5156606cb2c93c0c0741386217ebc6af56d5ee8f9fcea2f1e4f59e6279b1d816d7112420a114605eaf246e41e8b131a67851e5602baca500c51ab8394825d61597883655eca796edb6bd76afd7e9b4bbadae4b608e82eb0c4b62e7536a8d69d43c8ff048be9847806c42b29834ebc1941dcfb11dcf76dcc68b29c116e40133e53cc357d3cba3c0a2e9fbaed0bb0905d0c8dcffaae56f1fc149837a9748a614183fced5db100d4db3f6b5acc16282d3a7bc65fa9a5f7e00f4ec4c5df1010000",
    ],
    [
      "ETag",
      "awcLEChg42fqhBskWzWrAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:57 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00",
      "d0bb642d0e1fa5a43b10035815111574938110100183848fe8f4ee757a84f7de202284728e5b56d03bf8066324c32999fed49ab1f06e8704d5db32097d3288e549f20d6ee23d952eeea36583ab6819d20203a5c76a1ce25d7c1bac30d7fb8d2361bf9dc93d0ca0db646c3df76483dd55b153305f728137583c9f8ba7c76b1375f6e3b528ec9b0a0b5e9aae303e5478758fca46d7dc2e42ca97b14a84d84bb49d2e5c77a822896c556b0936abd2b25fd73d7774b52616f3d45cca67c8d6faedc5f1d9b96bd57178054b91a4eb4dc6aa13ecd3f000c104d0679d3794e3fcc355e6104ec0bf1db7634d3f01068d1ada80df3f915c06c61a010000",
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
      "Thu, 22 Jul 2021 23:49:57 GMT",
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
      jobId: "grouparoo-job-35-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85535d4fe24014fd2bcdecab402b5028095909d61517ca5a8a64b3d934d3e96d1d2c1dec4c35c6f0dff7ce545c8d893e7566ee39f79cfbd16772c7cb948c48c2f3fb1aaaa76f5b919013028ae6f8bac9ebf2dab912db2b75bb2efc6abbf9095793f118115cb324dded0b684951570ce468bd6ae795a8f7b412a285895add7ecb714f5dcf1b0cdc616fe8204f4291cd797987ec5ba5f672d4e91cb5dbb910790174cf659b89ddeb7be7e1b4b3afc41698929df7921d54919dcf45bf178251c545395eafd0402da18a6147798116fe33d3e4ec7dea36a7bb768ee007ce803226ea52695b98828932e3795d99ac64f44c8ccd3707b2f2e7fe34b29828ea5d1997740727564a158dd5d31eac8b70b9b066c1c5325c4ca2d9328857d34b7f31694f97f3f52258599b4b3ff42d4593020cd71a5b67e616e005f553908a97463dd2cf5af9a541b38f63d1049496d004e381ed5267687b49960c5836ecf693cc86241926833eed2636f37ad04b13a0c833a286454b510eec6cd077dd24eeda2e8b7ba993c6b46b7763701cea79ae9d003b258713f2587105e75cee85e44d87c8269c457e1c85eb603a897c534246eb429d37c674016f3d2a2c10419fd474d0512e5049b77b16447e389946b31bbf99f01c72ca9e56f738e38c1612104d2b6c9e826a21526c1809260bff1cc16662bf8e4149467f9e89eeb976f1a6e5aff40807a8ed2af325ab289c053f8c9d23e28616b5813c34075d46c60b6dfaf01781b8a34d1272bdf6c3dfa4790a21830a4af6f530116c025ffe6ac7bd472c6e3eca4885775c1d26b508aba059216eaa3db2bda1ed74890157ea43cc71bc63d3740e9d117650aa978a9abdc7421bb15abe823088d30f4cb30eff00d3a608f977040000",
    ],
    [
      "ETag",
      "WgunQ1JojJthUlErjWKeJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1626997768481"
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
      "10c7bf8bf74aa466494982d407d2651b124d3a024f55855cfba0ee8ccd6c932a8bf2dd77a65d5ab595e80bdc9d7f27eefefe7320bf85e2242277a2fed381d97fa9c1fdf24106b693cee2abd5ca020908385a23b99cecfeee8b05cf12deade4dc1645fa781f5f5c2061d93d34944407520990dc92e8e640146d00db98965da3ca3e0b88dbb7beb8cdb364fd03f346739faf8b348d97e98a1c835323a78e963dff89b6db63401ef45d061518500cfc2cadd10fc05ce2d7b4b469258cacee0c034b7ab83fa88dee5a6ab41e616534391f8dc3afe162319b85f3e97c8ca0d48c3aa115b2c516e7234e3b2a33fd885b92f10409d3c7b871d53f775817bcdfc487c93a0fa7fd80af01ca98ee942b07c14a18eb9ed4fb0f3eabf09694f493205e959043500d8a8319a2445b52ce0d583b486a5bd2b63d61cbcd267daf8ae2460b3e0ceec40020ddee047c4f37f147d2a2c15eb4fa16e7ab778475689b13922757ab6d1e5f5d7beef6d908cbbd037b6d34baca8237d4f86c3a3f9f85674f1ebbd4de77f89dc8990e02c228fe2a3f85235145a585e33f076e642088030000",
    ],
    [
      "ETag",
      "B3vzyU9dRIduEl8sUULwhA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:58 GMT",
      "Server",
      "ESF",
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
          "SELECT `date`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1626997768481",
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
      "0000000002ff85536b6f9b3014fd2bc8fbb24979928440a4aa4d53d631a5a423a45d354d89810b734a30c5a65b56e5bfef629a3ed6ad952211fb9c73cf7df98e5cb32c222312b0e4a68462fb6ecd03d220206982b7e6cce9ad4f82fec4b54f8f7f1bc6e7afdc87f1c1013258a5127493a7d014bc2c4210a3c5bc9514bccc69c1791303357b46b36be886650d8786d937bba81390c653965da3fa8794b918b5db7bef56c2799202cd9968857cf370dfbed5db79c1d7104ad17e6ed94617d17eddf430e521958c67078b3926500a2896b0a12cc5141e955170f43c748bd14d2b41f22d0b8186212f3359a58521429ec52c290b15958cee884af3c91f32b7a7f6c4d7561195b06a68ab940ab9cce8461d94f94aa3425b2ef36beda3373bd3565860cc52102bedf293edd9da03cd71b585ebda735f7b7ff8413bf5668b73edf86a0f37fee58129462024cb54823e0d52a892bbefa1f3727295804a2aa00697c38e41bb66c70ae26018c6666f10c41d080233180e682fe884561ffa51001475b28aae5434e39961523dd27bbdb0a34786ded74d63680eac80f683019ebba14e83ae0160915d83fc2c98841326722e58dd4872e939bebdf4bd853b19fbb62a23a6652a4feae4aa229ee629b14824bd52d7ae421947a76a2a8eebdbde78e23b1776bd08534868b89ddfe02ac43415806c5a60072514673cc2a691f3d9dcf19d993b9ea2424df77ccf1064f4edee51e06f73d565a9be64ec79e32bd4d0a2a0dbbfb0b9ef39ee29d9ed9ef85dd0b4541c2550a7dae0b60608ac711539139d23f8a58a54cbb86b3c32704d2574ff0be37ce40f289ee3df77f86b107c37758ee4cbc2f6ae487de5410c0564e1dbdb836405bcf9fcf76f11b9f81ad146483ce3ae86a232090ba877966daa64f66acb1c1a1da2c8857c8199a6b51f4e15a38a081bc8e47d45f55b54ddaea0523c9010c45573eb59fc016aeed0ca0b050000",
    ],
    [
      "ETag",
      "8OI3jDb4CNEGBz66JXoTeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1626997768481"
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
      "0002ff8d51d14ec23014fd97faba996d9a014b48045c00b3a00c78308690d2ddcdc1b63bdb0e25847fb72dba07638c2fed3db7e79cdc737b22fbbc4a4840b679f6d6003f5e6520e7ba8841348514eaaab112402c0292668a59f00c66a3673884de64fc18a58ff37dedccfb7dc510ec154a4a82134973281241829713a968094a9650a94de4b1d6e87eb00c152a31d168b68aa2c1300ac9d96af905157263ea56b458c6d3d9f86fd96653efffa3589f2db2c36d0c2970a818e8a16b8e3b6072aaf721685917600b6c3803410cd93c641c9b9a72445b75ec1bdf767dcfeff53a1dbf7bdb7515b14046658e95e2ae166a342251d222c677b50ee2290237a5da4c6ace836e3b9e633b9eedb8268b6e3d003f602e5a0cbb4bc3b9830f33db35c3d2e4f8d5c86b85a15efc3760a090fbd362fd35e4f028413c71548905e8b0ce25f808355bd9049237601146d5474f7279c1e74fa34b57e545020000",
    ],
    [
      "ETag",
      "lrgeNCYevE2HGOLfOQkp0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:59 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd04b7282300000d0bb64ad8e800ae94e501123a538986a364cc0a86024e163f8747af73a3dc27b3f80a629abebb8110f56800fd0531d4ed2099296ed84b7747829f3915fdd72b68cba76981e77db0d6e4eb2d4ef263eddb66efcd8ad76d85b5896ef84a7921ba6fa6c561a49ceb85cae333b6d2f28f228ae84e3aeb1c8c23ee0414e0dced025f4e8f52bf19ffd629813ecd8413f7049ec71f1c43a49257eb985e468afdf93ac5310c589bda9672d9c4dcf9c986ef4fc4647b3da778db999171705e99e8da33a5424de4e73022d711015c98576c884bfa891e2502bc108b04e6615abe3eccd35e6108ec0bf3d6e7ac9de0136a315abc0ef1fec9afce91a010000",
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
      "Thu, 22 Jul 2021 23:49:59 GMT",
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
      jobId: "grouparoo-job-37-1626997768481",
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
      "0002ff85536b6fda3014fd2b91f7b5bc094990d08a68284810b610caa6698a1c7393b90d31c40e5355f1df77ed94ae55a5f6536cdf73ee39f79127f2c08b1d19928467c70acac72ff72221570414cdf07537b08f1d1093e9c3b1bcdddece4e3f66d371361a21826b96a4fb430e0d29aa92811c6ed6cdac14d5819642343051a3e7343a83eec0f31c67e0f6dd0ef224e4e982170fc8fea3d4410e5bad8b76331322cb811eb86c32b17f796f9dbaad4329ee8129d97a2bd94215d9fa58f46b2e18555c14a3cd1a0d5412ca18f694e768e13f73975cbf4ddde474dfcc107ce20c2863a22a94b685299828529e55a5c94a864fc4d87c75206b7fe14f228b89bcda177141f77065eda8a2b17a3c80350d574b6b1e4c57e1721ccd5741bc9eccfce5b839592d36cb606d6d677ee85b8a263918ae35b2aecd2dc00beaef402a5e18f5483f6be5e706cddf8f4513505a421d8c9df68076dcb697a489c352b76727691b92c44d1c9bf69236f3fad0df25409167440d8b16a260d401db76bb31ebd94edcb73b839852b717f7ec3674fbd44bdd41879cafc8df922bb8e1f22024af3b44b6e13cf2e328dc049371e49b12525ae5eaa636a60b78ed51618108faa0a6b38e72814abaddf320f2c3f1249adff9f584179051f6b83ee28c539a4b40342db1790acaa5d861c348305efa37083613fb76094a32fcf54474cfb58b572d7fa14738406d57992f5947e13cb835762e883b9a570672aa0fba8c94e7daf4f937027147eb24e4fbc60f7f92fa2984144a28d8e7c344b0097cfaab5df61eb1b8f9282315de717598d422ac847a85b8a9f6c2f6bc7ea74b0cb854ef6276d7bb344de7d019610f857aaea8de7b2cb416abe40b088338fdc034ebfc0f2f87a3a377040000",
    ],
    [
      "ETag",
      "d65q1eoCFkqrGWGHvXHFAg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:49:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93516f9b3010c7bf8bf74aa490662441ea03d9b20589261da10fd55421d73e983b6333dba48aa27cf79e69974d6d25fa0277e7df89bbbfff1cc96fa13889c9bda8ff74600e9f6a703f7c9083eda4b3f86ab5b24002028ed648aec7e1ed62914ec2db24795cb9dc4ed61b535f5e2261d92f6828898fa41220b925f1cf2351b4016c635a768d2afb2c20eed0fae2aec8d3cd77cc1bcd7dbeb9c9b26499adc829383772ea68d9f31f68bb3b05e441dfe7508101c5c0cfd21afd00cca57e4d4b9b56c2c8eace30b0a487fb83dae8aea546eb11564617b351184da2c562368be6d37988a0d48c3aa115b2373b9c8f38eda8ccf5236e49c20b244c1fe3c655ffdc635df07e131fa69b229af603fe0f50c674a75c390856c258f7acde5ff04585d7a4a41f04f1aa841c826a501ccc1025da92726ec0da4152db92b6ed195b6eb7d95b5514375af061702f0600e9f667e05bb64dde93160df64fabaf49b17a435887b63923457ab5da15c9d5b5e7ee5e8cb03c38b0d746a3ab2c784385e3e9fcf32c1a3f7bec8bf6bec3efc4ce74101046f157590b47e28a4a0ba7277933ac1a88030000",
    ],
    [
      "ETag",
      "H01Y99I21YAAwEtRs2HNrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:00 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fe24014fd2bcdec97dd04a1508496c4282b55c962714bd198cd06a6c36d1d2d1d9c99eaa2e1bfefed547cac594d488039e7dc7beeeb91dcf07c417a24e6e96d0172fde55ac4a44640d3145fe5e8e8c7c3940f82fba368e0f293e5e0a1d54ff7f690c14b95a2cb55063b4a149281ea4d27f5548a6245a5103b1868c771779a9d56c7f3badd8edb769ba8539025239edfa0fa4aeb95ea351adbdcf554883403bae2aacec4f2f9bd71d76aaca4b806a655e36dca0666518d8f93ee678251cd45be379da08142819cc192f20c2dbc2817f1c1dbd0754e97f514c9779c01654c14b92e6d610826f284a785345149ef91189baf7e90893ff20f236bae34c69cd7acb94938b7a8b266b3d58d75148e4fad391695f00cd4dcba38f143df7aa60d036b1a04fe24b2beee7fb38ec3f1f4ccfa7eb9856bdbb86865014af3dc1889689c4169e2a957c3f7132a055453051538ebda1dda746d2f4ee22e4b5c67374e6c886337eeee5227b699d786f622068a3a5d46372a9a8bbced743dd66e31bbe3b4773b89ed355dd6f55c94794e2bb1e34ecb753c485a645323f7926b1870b5128a570d2317e130f26751380d0efb916fca486891e94165ae2ce2b54f8d4522e983ba3625ca05662abb3f0c223fec1f46c373bf1af80852cad6935b1c79423305c8a6922e41833c150b6c1a391b4f86d1701cf447a830533cdb3214e9fd7a7c1144eb95e9b236dfa41f86fd4bd45029e9fa1f6c1285c3e0986c36aff29dd3ac301c2330ffaa04771540e01a574e70651fc01f53a459ba4ded8581eba8a1f95f18e7a3af40bec57f6ff05323781f9547f273ea8797a47a0a21010939fb7c7b906c804fcf7c7b73c8c5abc334b8b19ae3ae3255266112aa9de5cbd2cc93dab5ed96d326862cf53bccd9f5b6c3296394116109b97eaaa8ba39d3ed122ad43309415cb5a09ac55f57db3b3af3040000",
    ],
    [
      "ETag",
      "rLFKzUiDNwFTD8iHmDz2Ag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1626997768481"
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
      "02ff6d915d4fc2301885ff4bbd74230cd8d84848dc0c510c201fe3ca1052ba9759d8d6d9760821fc77df0ea346bde9c7e973d273da33d9f322213db2e1e95b05f27493829e99c51c5495698553290a05c422a0698aa43bf3e290b713daf69ea2e0f659f2f01885fd3e128abd424e49ef4cb61cb24491decb99143407b4294df312197d2acd361e8e078b381c4f51ca4562a4c972340aa3d1805cac2fd77a5deebf4d8b783e9c3cfce7585d2cb2139b396c4142c1c06428a5d801d343534fe1e519d84a54928122355c1fa45254259542d8a8d86ddf76bc961704ddaee7777c07c14c30aab928905d2e301ad142d36c2edeb11d692120eb2516ddd6e30165a7e1fa4dd70d9ca03308ea3a46851dc883e0aa7907c73a4e8389bc8efec7eb75d0fdd3cb806a707e1b579f69a29306359502ab2930ad9ad786f7c2d01a5f43cb0a2cc2287ed023d7d7fde503a01dfe11fd010000",
    ],
    [
      "ETag",
      "5Q6TAi3da36JB9+OriAxBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:00 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0c97282300000d07fc9591dd93aa437904d96620850e8854921501665092ae8f4dfebf413de7b0292e794b16cee5b7a01ef60253cdce53b6790d503fae15bb45665591ef17ef2f8e033f0b5b32a54f76ecb509b41138b86723fe54b3cb8a70aa5dc5228a5991949509ff5c8c84649083f4ce91be296c97c4f1ebecde9981ad5f1a00b7111e081e3afc9542c3ee1425b5120e6902f06dd88df4cd228172c49224b647d8a907a751d4e91b78be58568fcba59d6094a2b1ee3624fd6d58f04536b1adeeee654bd258e87ead11e1fd7c4846edcc4a4afd23874458d810da0cb504f9465f58b2b48106ec0bf3d9bd781be02544a263a81df3f556a9b731a010000",
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
      "Thu, 22 Jul 2021 23:50:00 GMT",
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
      jobId: "grouparoo-job-39-1626997768481",
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
      "fd",
      "2b91f771b44d5f495aa91a550950a949b73485a1698a6cc7c90c695c6c8709a1fef75d3b94c126c1a7d8bee7dc73ee234fe88ed7399a22c2cbfb86c9c74fb782a013c4342ee1f5e2fcb3caa3cbfbefde0d5edf8ac1709b4b59ce6680e086a5f06e5fb18e128da44c4db79b6e2945b3c752880e24ea0c279dbe37f02613dff78251d0079e6255b1e2f51db07f69bd57d35eefa8dd2d85282b86f75c75a9d8bdbcf71e06bdbd14b78c6ad57b2bd90315d57b5ff44b2528d65cd4b3ed060c348ac98ced30afc0c25f664e4edfa6ee72bceb96007ee094614a45536b630b52505117bc6ca4cd8aa64fc8da7c75409b70152e52878aaad9d5598d77ecc4c9b1c6997edc33e73c5947ce323e5f27d13c5daee36cb3b80ca37977b15e6da378e35c5f8649e8684c2a66b9cecc39b5b7182ea09f33a5796dd553f36c949f1bb4fc7f2c8600d28ab5c1cc773ddc0fdc0929884f8b60382685cb0809883fc643e2d2c9888d72c230f0aca865e15ad4c4737d3a1c4d326f3cc0d9c8c35e16f805c9fafed0cfc7c4777150a0c309fa2db966675ced85e26d87d075b24cc32c4db6f1629e86b6840237953e6b8d99025e7bd4502080dea9e960a25c809269f7324ec364be489757613be1152b317ddcdcc38c0b5c2906682ca1799ac948e4d03014cfa3f00cc076625f8f4185a63f9e90e9b971f1aae52ff4140668ec6afb459b3459c617d6ce117185abc6421eda8329a3e095317df80940d8d13609fab60d931bd43e25ac6092d5f4e36102d8063efcd58e7b0f58d87c90511aeeb03a5419112a59bb42dc56fbcc0e5c77d21f210b96fadf58df1d0d8e4d33394c46b663b57eaea8dd7b28b415",
      "6bd40b088230fdd836ebf007db325abd77040000",
    ],
    [
      "ETag",
      "GF+sdMHqX6YaOjo23Udrrg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1626997768481"
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
      "db3010c7bf8bf79a4a740d691b898714ca5629b4d086a709456e7c09668e2fd84e5955f5bb730eac9bc6a4f092dc9d7fa7dcfdfdcf81fd945ab0986d65f5dc82d97fa9c0ddf9600db655ced2ab416d81050c1caf88dc572f9bb01a57e155d2a6a3e7cb5f4bb57dbcbbb820c2168f5073161f58294109cbe21f07a6790dd456a06a6b9d7759c0dcbef1c54db65e2cbf515ea3f0f9f23e4d93593a67c7e0d428b8e379c77fa2ede118b027dcaea10403ba003f4b63f0090ab7f06b5a5e370a06165b5380651ddc1d5406db861bc4015506a3e960187d8da6d3f1389a849321810a0bee246a62ef37341f73e8b85ae30b6dc98623224c17d3c665f7dc515d8a6e131f2e9659147603fe0df0a2c056bbbc172ca5b1ee4dbddfe0bb0aff928a7f12a4ab92aa0faa400b307d946c722e84016b7b49b4396f9a13365badd28faa6861508a7e70277b00e57627e03a5d25ff93960cf647abab249b7f20ac23db9c906c7133df64c9cdade71ede8d30db3bb0b706c95516bca18667e1e47c1c9dbd79ec12bdefe83bb1332d04ace0f4ab7c978ec52557168eaff172993288030000",
    ],
    [
      "ETag",
      "ygwS4g7g4DAuL3qCxNlbhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:01 GMT",
      "Server",
      "ESF",
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
          "SELECT `stamp`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1626997768481",
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
      "00000002ff85547f4fe24010fd2acdde3f7709d0f2b385c428a7d56b82c095a292cb05b6cbb4ae962e76b77a68f8ee37dd0aea79772624a53befcd7b333bd32772cbd325e99190c77739649b4f37222415028ac6787a629e06e3d155db5557923fceba778fe7edb387830344f08225e96a9d40558a3c63207bd3492dce44bea69910554c546d59d57aa7d1e9766dbbe3b49c3af22424d180a7b7c8be566a2d7ba6b9d3aec542c409d03597352656fb73f3be61ae3371034c49f3ada4892ad2fcbfe8612218555ca407d3091ac825647358519ea08517e6323c7a9bbac6e9aa1623f89e33a08c893c55852d4cc1441af138cf7456d27b22dae6ab3f64e20edce3c0584885391715639150a9e6295d41f1a2d5170695c67cbebe354efdd1b9b1c00a239e805c1897df5cdf35f6306f684c87437712189f0fbf1867fe683a36bece76e1ca5f45d0e412a4e2a9b618d03081c2de7317bdf7775710a8a212cae0dcb63ab4ee58dd300a6d1639cd76185910864e68b76933b458b705ad65081479aac8ae593415690701ac0e56a3cd223bb4ed769d5a2cead41d87854da7db640e387667d920db0a79c8b882132ed742f2b295e4d2f702771ef8d3e1713f70751911cd1375529a2b8a78ed53619108fa4f5ddb22ca052a15f7e20d03d7ef1f07de855b8ec20062ca36933b1c86882612104d33eca082ec5c2cb169643c9a7881371af607c8d0f73bde2124e9fd787a21049bb5eeb2d24fd2f7fdfe0c3934cbe8e68fd824f0bde119d96e5fe95dd024d7184dd06fa5c07d19207083c328b8b48ee0972e528fe3b6f282c0415550ff6718ef475d43f636fe738bbf0ac1cd293d92ef53d79f91f2c887083248d9c7d383601df8f003b0db46c4e23ea20c8eafe238ab4c16222c837266f9aa30f3cc76ac7ac7d69f0f4533f52e66ebccfb2d2c32c20a52f55c51b98dbadb4528977b100671d486e55dfc06e248b74b0d050000",
    ],
    [
      "ETag",
      "D/FTPOX5EtXsizY9qzM5Gw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1626997768481"
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
      "8d51d14ec24010fc97f395222550280989601aad292805e28321e438166c69bbf5ee8a12c2bfbb7718623431beb43bd399cdccf6c87649b1663db64ab66f15c8c3d516f4c40c31a82ad38a5e25160a588d81e65b52e2e33078f6d36e2cab26446b2fbc9e0dfc49bf4f0a255e21e7ac77649b04b2b562bd97232b780e64539ae72569f4a13470168e82e96c307a222ac7b5a1c6f3281a0ca3809d6a1757c6955edaf9e29ccee2707cf7b76db92c77ff712c4e3596e22a860d48280498e8a5c414840ecd551465cec0515849018a59b1fdb09558955c223ac438ad86e37a4dcff73b1dafdbeaba24cc50709d6041daf994a2318d9a6731bed351589304d28e749f8d7dee8976ebed6ea3ddf65dbf15f8b68e611f40ee3151170ce99968dcc0878d571798db2abf76792ddaf67d57c0355c800042eecf2d8bafa8c38306f524917a2b30951be7fab768d4b4a6a76505352638fdf4fb449ff1e9139e8e348951020000",
    ],
    [
      "ETag",
      "oOBEW9j8Rru2eLd6I/TA9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:02 GMT",
      "Server",
      "ESF",
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
      "02ff1dd04b8e82300000d0bb746d8d29e8d8d9298a413e553e015604b1a51da040210a9ab9fb9839c27b6f9017051d866c6c2b2ac13798738497c5d2eeb67be35ab28ddfb1908d89e39d6e06df5555ba86fa1817336a603be8affce06a7ed2389e23b844b96f4d3a2bce35d1570f1cd436f2114f359d119440f7c966ec2797300b0eb359f4ad16f7c68aec746c0d8d4d202fa7217e90c3b53fcf92543232cc344eb4ed19bea6db45f4a1996eccfb972af792b39fc6b9de954a89809142c72caf3def284728a4d5f298db1144b58b3d6546c2dd3df969650741d0a3122c009d3aa1e890890f575b63bc00fff66c9c3bfa09d8d35c51057eff002dfd1f291a010000",
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
      "Thu, 22 Jul 2021 23:50:02 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-41-1626997768481",
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
      "7b6d0249484822456b96d23552202b21adb66942c65ca85b822936adb22aff7d17d374ad2ab54fd8bee7dc73ee074fe48e170999929867f73554fb2fb72226270414cdf0f5d2b587699d5ade75f66dccc3c75ffb55f5f7723643046f5892eeca1c3a52d4150339dd6eba5925ea925642743051c7ee757aa3fe6832719cd1d81ef79027214f57bcb843f68d52a59c9ae651bb9b0991e5404b2ebb4cec5edecd87be5956e2169892e65b491355a4f9b1e8d75c30aab82866db0d1aa8255411ec28cfd1c27f66129fbe4ddde574d7cd10fcc01950c6445da8c616a660a2487956573a2b993e116df3d5816cdc95bb080d26f27a574405ddc18991504523b52fc1380fd69eb1f4cfd781370f976b3fda2c2e5c6fde5dac575bcfdf18d7176ee01a8ac63968ae31334ef5cdc70bea2720152fb47ad83c37cacf0d5abe1f4b434069096d3072ac11ed8dad499cc60e4bc783619c5a10c7e3d819d2416cb1890d761203459e16d52c5a8862c80696351cb0c81a39696423369a8c9c38ea393173204953b0811c4ec863c5159c71590ac9db0e91eb6019ba51186cfdc53c74750929ad7375d61a6b0a78ed51618108faa0a64313e502959a762ffdd00de68b7079e5b6135e4146d97e738f334e692e01d1b4c2e629a83c9160c3883ff7dc3304eb89fd38062599fe7e224dcf1b17af5afe420f71808d5da5bf6413064bffbbb673445cd1bcd69087f6404ab47c83b5a1ebc31f44e292b659c8e5d60d7e92f62980142a28d8e7d344b00e7cfaaf1d171fb1b8fa282315de7177986c445805ed0e715dee337b6cf5fb",
      "b6fe5315add4bbd860d03b76adc9d164841d14eab9a276f1b1d056ac962f200ce2f87dddadc33fc78a570378040000",
    ],
    [
      "ETag",
      "QE45fuf0MWgB8iTwZyLrzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1626997768481"
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
      "00000002ff8d92d153824010c6ff97ed3198b40c95191fb4342935457c681ac73961410c38ba3b6cccf17f6f8fcc9a6aa65e6077f9edf17d1fece029ce02b0611947cf058aed49846aa20b1765912849b79c6712c100542c22b267a5cbdbc943f02aa717597f731a55ceee3651ab4584f4579832b07710c6980412ecc71d642c455af37952a4d9a2ec0c50db5c0fa79eeb8c6ea84f79a0fbd16c306877065dd81bc7c58029b628f97faccdf706acf9d2c51005663e6a2db9e06bf495a36d4a96e6099a9217c24709255c3e88042f722638376962d6aa66d53ab79acd7add6ad41a550213ee3315f38cd8d994f481e28a252e7f2197601120ca920c87e57543e338288de8d2197956add4f7152069619ce0e26f90f4ae187d860fec10c1778ea5bcc8d491ea0deedbbf1d47997e1e75ddf6ba3f08a928a923e239c3eed46b0fc79a9b1fbc77b60ae558700a52a2ceb05aa9352eeb56e53dd62baea3a6f7d84a146880cfe8efe8c70aec902512f76fe827613a7b020000",
    ],
    [
      "ETag",
      "F6mbJQYdzsS3nHv+g0/Kvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:02 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(AVG(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8553614fe24010fd2bcdde174d8096524b21311e873daf17285e291a73b9c07699d63d4bb776b71a62f8ef376d45c54b342129bbefbd9937b3334fe48e676b3224114fee4b28b65ffe8a88b408289ae0ad77329e59e5d48fb9fed37b9cccf5844f17c9e9293278a5927493a7d096a22c18c8e162de490a51e6b410a28d81da96d9eedaa63d18f4fbb663395dd44948e309cfee507dab542e87babecfdd49844852a039971d26362ff7fa83a9e785f80b4c49fd30a58e59a4fe71d2b35430aab8c84e177334504a2896b0a13c450bafca75f4f5307487d34d2741f2036740191365a62a5b1882892ce64959d451c9f089d436dffc217377e28e436d3c1b4ddcf9d83d1a5d5d1cade8a68ab13a6e69c6b146a5b6bf68692b2c2fe6292cf97a5521cb657ea77d0f665344d0cc2d952057daf50f3770b543b2e76b0bdf77e7a1767476ac5d04b3c5a5f6ede6808386d72015cf6abb218d52a8ac3e77d4fbff1d2b015598b301977dc3a65dc7184471d467b1d33b896203a2c889fa27b417196c6081b58e80a24e55d16b15cd4466da066366dfe943cfb2193803882dc3b69d1e305883e3589609acd737c8ae451e0baee09ccb5c48deb4955c075ee82ec360e18f47a15b9711d33255e78db9aa88b73e151689a40feada55281798a97a23cf0fdd60340ebd2bb7198b0924946de7f73818314d25209b1674030a8aa95863d3c8e56cee85decc1f4d5051bff5e59e21c9f0f7d3ab20dce6759755fd25a32018dda0861605ddbec3d0876d91ddee4dba2b9a9635a5e6d7a726fe4303902ed6f27a320f4e36d9fdd9e1af45701b9a5ce4d7c20d6e487315400c0564ecf32940720d7cbad4fb0d432eee18a6910acf38734c56495801cdecf14d6dbe513b8639b06c52930bf51eeb19b6b96f7215a38a081bc8d47345cd86d56daba052be9010c491f13dff02d17fd00e7935e1040000",
    ],
    [
      "ETag",
      "I5CO4uMNfi/JIwLS/giMUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1626997768481"
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
      "6d",
      "90",
      "d1",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "ff",
      "97",
      "f375336c900d96f0300c2ac98238e1c11842cab8cdc1b69b6d0741c2ffce751ad1c43eb477bddf977e5f4fb0cbab0d04b0ceb38f06e5f12643fd6c8a18555368c5474d9542b000b5c898fcec89d7c6f722393b603e1b69cae683301c0e9950c93b96028213a439161b05c1db092a5122cb44494da519d2c7daf4f7d15338e7b6a48d69a78b280a47d118ced68f64b5aa7757c1643a1f3f8ce3ff24cbb3055b5ac798a2c42a41e3a096b4c5444f4c3825caba405b51231354d0c2ed2093d4d44212d97c63f75cdbf15c6f30f07dafdfeb3b0c1694089d53c5ece285bd81262d8a980e9c0d5c06645b72ccb4ddf77ceddcf67daff36b75db50fb5661bcfe85fdebd831e3e5f723a3a3463593c48e151ab35db7f365fd8e4c1ccd31b56cd08244f0bf3fe61a8254140acf17958ef0a0d5010000",
    ],
    [
      "ETag",
      "z4aYu76LrPweiPBtogT9AA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:03 GMT",
      "Server",
      "ESF",
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
      "00",
      "00",
      "d07fc9591c44b6f486ec2a52a196e225934094a5480c9bd8e9bfd7e927bcf7037096d1ae437d5bd31b78033396e0325bee98be318fc5fc80b9a711b63bb7f794a0c967b74fc3c12741a8b4eb21b2cd417897098bcd228fe0b0f3ad49916cc9f9585f256458288992cd85a9d5a58fe37b5335ae62ab78f43b53121ea363133fbeb7b51d698a16e8c4b2e46f5e1d7d6f9f4672a7f7dc31b158872e99e85698649405cd1666c4a36bd185497aa8d36608ae2b8ed4b1abcad3b60cc3220f8a2cd51577ff2518a1da3c579ccc9377699bfe24e2e15cd86001e883959c76a87c71d70a840bf06f47fdcce82b604331a71cfcfe01b52b8bee1a010000",
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
      "Thu, 22 Jul 2021 23:50:03 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-43-1626997768481",
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
      "14fd2b91f795b6297d24a9548d520274b4e996a6a06d9a22c7bd0986340eb1d309a1fef75d3b948190e0536cdf73ee39f7912772cf8b0d199184670f35548f5fee44428e08289ae1ebed2e599e5e5d94ced524f9653f9c9e5fd26f321b8f11c1354bd26d99434b8aba622047eb553bab445dd24a8816266af57badeef078e8798e3374fb6e177912f274ce8b7b9d5da9528e3a9d83763b1322cb81965cb699d8bebc7776c79db21277c094ecbc95eca08aec7c2cfa35178c2a2e8af17a85066a09550c5bca73b4f09fb9494edea66e73ba6d6708de7106943151174adbc2144c1429cfeaca6425a327626cbe3a90953ff7a791c5445e6f8bb8a05b38b23654d1583d96609d87cb85350bce97e16212cd9641bc9a5efa8b497bba9caf17c1cabab9f443df5234c9c170adb175626e015e507f0352f1c2a847fa592b3f3768f67e2c9a80d2129a60ecd843da756d2f491387a56e6f90a43624899b3803da4b6ce6f5a1bf498022cf881a162d44b1e97a0e1d24100fdc413fee773d3b76bbde30765ddb7553e8796ce890fd11f95b7105675c9642f2a643e4269c457e1c85eb603a897c53424aeb5c9d35c67401af3d2a2c10411fd4b4d7512e5049b77b16447e389946b36bbf99f01c32ca1e570f38e394e612104d2b6c9e826a2136d830124c16fe1982cdc4be1f82928c7e3f11dd73ede255cb5fe8110e50db55e64b5651380b2e8c9d03e29ae6b581ec9a0329d1f22dd686aef77f10894bda64213fd67ef893344f21a45041c13e9f26824de0d37fedb0f888c5d54719a9f08ebbc3a4166115343bc44db9cf6cd7eeb94e9f1870a5dec53cd73e744de7d019610b857aaea8597c2cb411abe50b088338fec0746bff0f9c63017d78040000",
    ],
    [
      "ETag",
      "hvbOBKGp7KAbZ0qBFHaJsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1626997768481"
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
      "8d92d14ec2401045ff657c2d89201468c24355541244846a8cc690753b2dd56ea7ee6e5542f87767aba251137d6967a667b6f7de760d0f591143007759fa58a15eeda468cf5d314353e5d6f0ada4c220788056a44caa6bf9d0a296509dab549a83974bb577129e0f064c18b9442520584392611e1b086ed6500885bc2629af54b1a83b0fecaa74c379341b4d8eb95714bb7e72311e87fbe3216cbced622cac58d4fc3fd66e371edcd3dd0c13d45848745a4a4df728edc8d934429539360c555aa2811aae1fa49aaa5268a2064f1aedbd46d36ff9fd7eb7ebf7dabd2683394961332a98bd98b33eb064453ea36776093e03ba2ed970525f9f789cc5b511578e2691dfaef57d05585a92e5b8f81b64bd4bc19fe1037b8fe03b27145585dd5247e3b3f0b7e338d3cfa30ec368f883309693da22d1e874388fc2d3a9e36edfbdefaf2c9aa9260ed2a0cbb0b9dbee75bafeee5bac07e4a2e6f7045657e88114fc779c64168244e40637afef119adf7b020000",
    ],
    [
      "ETag",
      "mZck2o2am5XgcsCxVm3HAQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:04 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1626997768481",
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
      "4fdb3010fd2a91f70f48a54ddb343f2a21d6958c452a294b53189ba6d6719c6048e2603b6c15ea77df25a140990452a5d47eefddbd3bdf3da23b56c4688c2296de57546c3eddf2087510553885db812dcfc58f61709f17dfaabf73f99304c2991c1f0383d52a89f332a34792578250395e2ebaa9e0558905e74710e8c8308efae6c0741ccb326dc3ee834ed22c99b1e20ed4374a9572dcebed727753ced38ce292c92ee1f9f37def61d02b05bfa544c9de7eca1e6491bdf7939e649c60c57871bc5c80814a52b1a2396619587851c6d1e7fdd05d86f36e0ae407462826845785aa6d4108c28b84a59568a2a2f1236a6cbefa8316eecc9d86da74bef4c38335ce6bf1fa50c352db1d3ada1a6a4a5846572c5ed7c86a55de695f83f93920e0e0064b2ad7dad5373770b57db2e76b4bdf7717a1767072a89d05f3e585f6e57a8f032e632a152b1a8f218e325afb7b6aa3f7ffe3d502ac20670bae2cddc47d5b77a224b248620f4751a2d328b2236b8487914e1c831a714431e8541dbd51e182177ddd1898516238c472ecd834e211b1f0b06f250ed5716226a61e53d2b713b4eda03f82297aca64c9256b7b89ae022f745761b0f4a793d06dca487095a9d3d65c5dc46b9f0a8a04d23b756d6b9471c8543f8ce7876e309986dea5dbcec28ca6986c16f7300d09ce2405361638a78a8a731e43d3d0c57ce185dedc9fcc40d13cf0c58e21d1f8d7e38b20dc944d9755f3459320985c83060b81376f30f0611a68bb7d95ee1267554369f8cda98dffd002a80fb5bc9c067b27136d7f6fe1d741b0026d2ef47de906d7a8bd0a6842052dc8c75300e406f87093776b055c582c4823159c61e688ac931041dbd9637963be55dbbae10c86a8210bf5161be9c3d1aec9758c3a22cd69a19e2a6ad7aa695b0d55f29904208c8ceff96780fe0345544437d6040000",
    ],
    [
      "ETag",
      "28sMrX3RqmnHuxOsZcRr9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1626997768481"
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
      "8d905b4fc2401085ffcbf8489bc8ad40131e8010c510d002be18429632ad85b65377a75542f8efce56437cf4652fe77cb339672f704af203f8b04fe28f12f5f92e467eb187004d99b291ada0dc203880ac62211bd5f86959e120187dd17ad4ee365e97dd493c1c0a61c277cc14f81788124c0f06fcb70be42a4319531995390bc4e7c2de678bf5f4611a8890d1c10a8bcd7c3e1acfa770756e43bb5d71fad7c8f6eac091f60146a8310fd16628341d31e499ad675456a4e81a2a7588066ab836624d65a134912b8adbe9b84dafe50d06bd9ed7eff49b02a6142a4e281776b3926cc0c42a0de853da414b005d1fa56854af95c8ddba43550336da5fcfbb794deb6d7f1f1c9f19cdb3264967d0066bb7ee7f624ec84667a9c4ba44074225bffc9830f8914a0d5ebf01c246b871c3010000",
    ],
    [
      "ETag",
      "+vBJOve9RAxoTA35+VO5Cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:05 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "0000d0bb642d4e070825dd8952910c287fca86410808583e01c4a4d3bbd7e911defb01599e93694ae7be251df8002c13d136dfe241d5f64edd56a299c9b0188cf4dac89661cec90a3d59683b5e8e3d87a66f04515ce94d32a0525ff408d9413d89bde0a614ae81c16486b35b382b506e4cefb09ba5c7a5f0a5a69e5ceb968b7dac86e74f2c2a4c7f6a5ca17675a7ceecb7a12d18e661807d691d2b2925310f0d4f70d560e7ed8a6471ac9147ecbe7fa31d5c27169b10aba7537bfd52e55511c68b8df533ae1fef6d1e2cbce2ddd1c917a421fcdd696003c873a82999d2fac59520421bf06f4f673690578046324a28f8fd0333895d181a010000",
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
      "Thu, 22 Jul 2021 23:50:05 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-45-1626997768481",
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
      "000000000002ff85536b6f9b3014fd2bc8fbdabc084948a4688d12ba464b4807a4d5344dc8980b750b986293aaaaf2df77314dd76e52fb09dbf79c7bce7df04cee791193198978fa5043f5f4e54e44e48c80a229bede9ab9adace9351d1e4cf87e4f6f1e7d6bb598cf11c11b96a4799941478aba6220677bbf9b56a22e692544071375ac51673036c7d3e96432b62d7b803c0959b2e1c57d935da952ce7abd9376371522cd80965c7699c85fdf7b07b35756e20e9892bdf7923d5491bd8f45bf668251c54531dffb68a096508590539ea185bfcc383a7f9fbacb69de4d117ce00c2863a22e54630b533051243cad2b9d95cc9e89b6f9e6407c67e32c038389acce8bb0a0399c19315534544f251817de6e6bacdd8b9db75d04eb9d1bfacb4b67bbe82e779bfdd6f58d9b4bc7730c45a30c34d7981be7fae6e205f563908a175a3d689e1be59706adff1f4b434069096d309cf4c77460f7a751124d58620f4751d28728b2a3c9880ea33e9b5a60c51150e46951cda28528a86546039bd130ee27666845432b9cc2200ec79669c7a384c5c93826c733f25871052b2e4b2179db2172e3ad03270cbcbdbb5c048e2e21a175a656adb1a680b71e151688a00f6a3a36512e50a969f7da0d1c6fb10cd6d74e3be10da4943df90f38e3846612104d2b6c9e826a2b626c1871175b6785603db1ab535092d9af67d2f4bc71f1a6e5aff40007d8d855fa4bfcc05bbbdfb49d13e29a66b5861cda0329d1f22dd686ae8fbf11894bda66213ff68ef793b44f1e245041c13e9f268275e0d37fedb4f888c5d54719a9f08ebbc36423c22a687788eb725fd8767f644f8644832bf56f6cdc1f98a7ae35399a8c9043a15e2a6a171f0b6dc56af90ac2208edfd5dd3afe018a51330678040000",
    ],
    [
      "ETag",
      "h2m8t49Va3v2eKkaWwS4DA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1626997768481"
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
      "000002ff8d92dd6e82401085df657a8b891a4425f1425bab26fe55f1a68d312b0c8a050677975a637cf7ce526b9bb6497b0333c337cb39074ef01ca501b8b08e36fb1ce5f16683fac114335479ac15df324a158205a8c586c91189fee36b636ff776ba975626543b54d5a1d56242f95b4c04b82708238c0305eed309529120aff914e749ba2a3a0bf43133c3b9371b8c7bdc2714987ebc180edb9d6117ced67531105aac0afe1f6bcbb3053b5acf304489a98f464b266987be1e189b4a24598c2545b9f4514101170f3692f24c48a2124f4a76ad5471aa4eb359af3b0dbb516130265fe88852661773d6079ab48867746097e030208b920d87c5f585c751501831e560ec3976a1ef2bc0d2c228c6d5df20ebdd0afe0c1fd82582ef9c48284ff595ba1f4edabf1dc7997e1e75d7f6ba3f08a539a92be20d46ddb9d71e4d0db7bc78ef1c35aaa9240e52a1c9b052b61bb5ba537e8ff5964cd4fc1e57cb1c2df005ff1dfd48831b8a58e1f90d0af1880c7b020000",
    ],
    [
      "ETag",
      "MoaHZx8q4GjtGn1Oo5w2sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:06 GMT",
      "Server",
      "ESF",
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
          "SELECT COALESCE(SUM(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8553fd4fdb3010fd5722ef17904adbf423492b21d6958c652b29e4a3ac9aa6d64eece091c62176982ad4ff7d9784021d1248951afbbd77f7ee7cf788ee7816a331223cb92f69b1fdf44710d44254e1046ebf2f080bfae17c51feb89f4f7fc64bef5a66c9e9293078a5927893a7f4448ab288a81c877e3b294499e3428813087432304e74a3678c46a66958034b079da4299bf1ec0ed4b74ae572dce9ec73b713219294e29ccb762436cff79d875e272fc41f1a29d9394cd9812cb2f37ed2b354445871919d863e1828252d567483790a165e9431f97c18bacdf1a69d00f98147144791283355d9821091c8184fcaa28e8ac68fa8b6f9ea03f9f6cc9e06da743e99d9fed43ef2c3cba335de5431d6c72dad7bac61a9ed2f5ada1aca633ca52b1eaf2b64b5caefb4afdefc121030738b25956bede69bedd9da21d971b5d0756d3fd08ece8eb50b6f1e5e695f96071c301c53a97856db0d30496965f5a9a3cedb77ac045841ce065c995d03eb56774418312366f58784752921163187b84fbad168400731a11874aa8a5eab70263283e866bf37d27566ea24ee1bc38165b1bec98c11a594313288f4984504a35d0bfd2db8a2e75ce642f2a6ade8c673027b1578a13b9d04765d06c365aace1b735511af7d2a281248efd4b5ab502e2053f5468e1bd8de641a380bbb198b194d70b4f5ef6130184e2505362ef0862a5a5c8a189a86aee6be13387377320345fdd6577b8644e35f8f2f82609bd75d56f53f9a78de64091a5c1478fb1f063e8c01daed5ea55be0b4ac2935bf3e35f11f1a00e950cbcba9777032d0eef70e7e2d04dbd0e442d7a1ed2d5173e551460b9a451f4f01906be0c3a5de6f187061c7208d547086998b6495242a68337b7c539b6fd456d7800f54930bf5063387c6bec9558c2a22ddd04c3d55d46c58ddb60a2ae53309401819d7712f00fd07b3b7081fe1040000",
    ],
    [
      "ETag",
      "JVbfT3UOVuKqOCXdYRQsng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1626997768481"
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
      "6d",
      "90",
      "51",
      "4f",
      "c2",
      "30",
      "14",
      "85",
      "ff",
      "cb",
      "f5",
      "d18d3020832de1011011b3a04e88464348d9eee6a05b67db6116c27ff7761ae4c13eb4f7f67e273da747d867450c3e6cb3f4b342595fa5a89f4c11a2aab8567494a2500816a06629916efce626afb3fa9ebfa8fa5a5fd7a3c94d2f1d0e8950d107e60cfc232419f25881ff7e8482e54832968baad004e9ba34fd6df0305a529b8bd8b48b55108cc6c1144ed659b2d994fb3fc17cb19ccea6e17f92f5c9829dd88698a0c42242e3a0946287919e9b708ae525475b894a46a8a0819b412a45553229844d3776cfb51db7e37a5ebfef0e7a0387402e22a6335110bb7a266fa085663c145f940d3a04c8a6a49849b31fe8da6b75fbdee56a321d1a81b17ac93aed5677709e3b66befe7d645c6b548f52906385c66cb7d3feb13e11268ea6985a566841c4e8dfef320d7ec2b8c2d33782ea0185d5010000",
    ],
    [
      "ETag",
      "6dZ6fXGyJlWsy+t+yACD4g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:07 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd04b7282300000d0bb646d1dc56a497742116820150c82d9642246480d08817e62a777afd323bcf70378598a6160e3f5225af00c0cb7e0b49ca2ce76dc4486c93c6f2f4f3ecefc3deb90840b05cfe33a4faf9c369fcbd531b0f8ccc5b3bd3634f5b187909357f8f6a6242923e3650d35474409fe6ae2d8e207376c872278df56bbfd39701246c2f96915bb76dc6ff4cd1a5db5e5f525b2ad0a160429e2b17c4d8d3df88979499af871a7654a64b6aec7f3d652d52ceaeb8f6bdbe3431d144b763c85de2972a4b12b9a953a6d149dab0789ea6263709fbd0e042e309800f1dd492d0626efdcc512c209f8b7b3d174e21ee008ae8506bf7f779c861e1a010000",
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
      "Thu, 22 Jul 2021 23:50:07 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-47-1626997768481",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda84bc8148d11aa574cd94900e48ab6d9a903117ea8e608a4da6acca7fdfc5345dab4aed276cdf73ee39f7c123f9cd8b844c49ccb3871aaac3a77b119333028a66f8ca6f69f1f5071c6e565bf657ac82ad995cefb3d90c11bc6149ba2b73e84851570ce4741b74b34ad425ad84e860a2cec8eaf4278389e358d6c41ed97de449c8d3152f7e23fb4ea9524e4df3a4ddcd84c872a025975d2676cfefe67e609695b807a6a4f95ad2441569be2ffa39178c2a2e8ad9364003b5842a821de5395af8cf4ce2f3d7a9bb9ceeba1982f79c01654cd4856a6c610a268a946775a5b392e923d1365f1c48e0aedc45683091d7bb222ae80ece8c842a1aa94309c6a5bf591b4bef72e3afe7e172e345c1e2ca5dcfbb8bcd6abbf602e3f6caf55d43d13807cd3566c6b9be797841fd04a4e285560f9be746f9a941cbb7636908282da10d46566f42fb76cf89d3d862a93d1cc7690fe2d88ead311dc63de68c6094c44091a745358b16a2b053ca26e3118d1ca79f442360c3c8b6e9388a078c3a29f47b563220c733f2a7e20a2eb82c85e46d87c8adbf0cdd28f4b7de621ebaba8494d6b9ba688d3505bcf4a8b04004bd53d3b18972814a4dbb975ee8faf345b8bc71db09af20a3ec103ce08c539a4b4034adb0790aaab548b061c49bafdd0b04eb895d9f82924c7f3e92a6e78d8b172d7fa68738c0c6aed25f1284fed2fba2ed9c103734af3564df1e488996efb036747dfc85485cd2360bf9b675fdefa47df221850a0af6f13411ac031ffe6ba7c5472cae3eca488577dc1d261b115641bb435c97fbc4b67bd66438221a5ca937316bdc3b75adc9d164841d14eaa9a276f1b1d056ac96cf200ce2f83dddade33fd88dc35878040000",
    ],
    [
      "ETag",
      "iWanJZeyVLUczoLSU/dPvg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd4e83401085df65bc85a4350894c40baab5ade99f94de689a660b434b0b2cee2e36b5e9bb3b8bb51a35d11b9819be59ce3970806d5ac4e0c1325d3d5728f6172b540fba0850569992742b7921110c40c55644f6dcb1f3386ca678dfedc9626bedf055babbeb6b2264b4c69c81778024c52c96e03d1da06039d25ac4b32a2f16756780da977a380d83fea84b7dce63dd8f668381df1e74e0689c1763a6d8a2e6ffb1363f1ab0e1cb0013145844a8b594826f30527d6d53b2bcccd094bc12114aa8e1fac14af0aa6482739326a6e5984dfbd26eb51cc7762db74960c623a6525e103b9b923e505cb12ce03b72093601a22ec970525f5f689cc6b5115df647a16dd5fabe02242d49335cfc0d92de35a3cff0819d22f8ceb19c57853a537783b1ffdb7194e9e751b77ed8f9414845499d91b03fec4c437f38d1dcfce4bdbd572827825390127586cd86e55e3976e33dd61baea3a6f7784a546840c4e8efe8a50abc8465128f6faa1010f37b020000",
    ],
    [
      "ETag",
      "H8O7ZM1ieJGHsnk4wezs8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:08 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1626997768481",
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
      "000000000002ff85537f4fa34010fd2a64ef1f4d6a7f028526c6ab8a1e494b95528db95cda850e751558ca2ebd34a6dffd86c5aa3d134d9ad0d9796fde9bdd9917f2ccb225199090add62514db1f4f3c240d0292aef074f378e5c23aa5e7eba21b507b341e45e5e6f6f41411ac62099ae6099c085e161188c16cda5c15bccc69c1f909163ad1ad938ed9356dbbdf372dddea204f40128f58f68cec4729733168b5f6dacd15e7ab0468ce4433e2e9db796bd36de5057f82488ad6a1640b5544eb6bd1b3844754329e9dcea668a01450cc21a52c410befcc65f8f3b07493d1b4b942f0864540a3889799ac6c61898867315b9585aa4a062f44d9fcf0874c9d9173116863d73b5ad0b4a22e8e352ab47dd0d016d851cc1298b3e5a2cacce7f9b376e54fc69841fd472a402cb4fb5f8eef688760d7d3669ee74c03ede8ec58bbf627b31bedfce100831e972024cb94c380860954ee5e2fd1fdfc7415814ad4ac93f37edba41dab6d8771d88f62ab6784711bc2d00afb06ed85edc8d6415f86409127abea8a45339e99866d18ddd8e8f5a00bb48d3cc3b22d0bba46cf30cd50b76d13f4c836c8ae41fe164cc225133917acbe4972efbb81330ffc9977310c1cd5464ccb445ed6e6aa263efa94d82482bee86b57651947a5ea595c2f70fce145e0de39f5248c6045a3ed748db310d34400a269415390508cf9122f8ddc4ca66ee04ebce10819ea796ff6084106bf5fde09c13657b72cd5970c7d7ff8801c5a1474fb5f0e7d983ad9ed3ec8ddd1a454108557515d7f532748077b798fba079149767f76f86b105c805a8bdcce1cff81d4473ec45040167d3f050856896ff778bf5488c5b542192131c6998b4425121550cf1e4b95f99a6db52dbdad13052ee4a79ca12abf2d53551152c8e46b47f552a96bab52a57803611247c673bd6bccfe0367f5407ed4040000",
    ],
    [
      "ETag",
      "vhFIeqmaBqr2Ta9LMLcuvQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d905f4fc23014c5bfcbf5d18db0b98cb18407d0a9240bea047c3084947137065b3bdb6e8610bebbb7d3a00fbeb4f7cfef34e7f40487826f21844d917f34288f5739ea175324a89a522bba6ac1158205a8594e64fcd6de45d7c365b1f40b2fe7e349eb65bb7c342242a53bac188427c80a2cb70ac2f713705621c958251aae09d2c7daf4f7f1d3784e6d25b6a69d2de2783c8923385b17c97a5d1f7e05d3d93c7a8892ff24abb3057bb1493043893c45e3a096628fa99e9a708a557589b6128d4c514107778b5c8aa66652089b26b617d88eeffac3e160e0075ee010588a94e942706217afe40db4d0ac4cc42765039700d9951433ebce96c6fdde20e862b41d63dcfd5d3b3dcfbdac1db35efd3c3b396a54cf52904785c6de8ddbff367b2b4c004dc1b46cd08294d14f3f161ac28c950acf5faf95ab00c7010000",
    ],
    [
      "ETag",
      "LWvDE+9ViV6i4gnABv4fhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:09 GMT",
      "Server",
      "ESF",
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
      "1dd0db7243400000d07fd9e7c8b8067da361d141ab2cf2625c76652b4448b1e9f4df9be9279cf303cabac6f35cdcaf1d1ec00b60a5a8efebfddba899af1f2d8da8e823c63464cd85813b2e9206dca6bd839abc542df5d67b44c81e89f31da240c36c12091acd6d55b835b9269035f66796aeeab1cde9894930dc0e34520dc2050a3b7b65bdc5abb1ba4e7b7344f6f51e2c31c9d28ab76ada549a4fba956827f8b848025f1de46191f2d46750698f8615cf2e14dd725a06a4a7e748957aa44361619b6d6beaede2f061cdc95e1ca67a97202b28a042cc0129b20c76006f239df05cd0275752747d07feedc59d8df81960e272c213f8fd03b98e5d931a010000",
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
      "Thu, 22 Jul 2021 23:50:09 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-49-1626997768481",
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
      "c8fbda8490101e91a215a564454ac806a4dd344dc81843dd124cb1e95655f9efbb98a66b55a9fb84ed7bce3de73e784277acced10265acbcef68fbf8e99667e80c51894b78f5da68fd272b76aeee7d5f7b95ee3784506fb90404eb59021f9a8a8e04ef5a42c5621f8fcb96770d6e391f41a291e98e0c6b6ab9ae6d5b8ee918c013b42a36acbe03f68d948d58e8fa497b5c725e5614374c8c093fbcbceb0f53bd69f92d2552e86f25755011fac7a29f2b4eb064bc5eee6330d009daa6f480590516fe31f3ecfc6dea31c3877109e0074628268477b5ec6d410ac2eb82955dabb2a2c51352365f1d50ec6ffc55a2115e75873aadf1819e69399638958f0dd5d6d16eab05e17a176dbd24d88569bcbaf4b7de78b5dbecb761ac5d5ffa91af499c555471b5a576ae6e215c403fa742b25aa927fd73affcdca0e0fd587a02480b3a04537b6261c399b85991d9a47066f3ac98d02c73327b8e67d984b82635f38c62e02951c5c235afe7e6dcb06d639a3ae6d44a4d337752a7c8cd7466b86e66e533035b041dcfd0ef96497ac144c3051b3a84aea320f1d324da872b2ff1550905ee2a793118eb0b78ed51428100faa0a6631f651c94fa760761e247de2a09aefc61c21b5a62f218dfc38c0b5c090a68dc42f3246db73c8786a1d0dbfa17005613fb7a0a0ab4f8f984fa9ef72e5eb5fc859ec0007bbb527d519c4441f845d93921ae70d529c8c370400d58be81dac0f5f117206149872ce8dbde8f7ea0e129a2056d694dfe3f4d00abc07fffb5d3e20316561f6484843bec0e11bd0869e9b0434c95fbcc86cd98cdd59f2a712bdfc54cdb",
      "3875adcfd167a4075acbe78a86c5874207b14ebc802008e30f55b78e7f01d965e0f078040000",
    ],
    [
      "ETag",
      "ArRFxbfO9/AXFAl/EpcceA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1626997768481"
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
      "dd6e82401085df657a8b89361695c40ba8b49af80b989a34c6ac30280a2cdd5d6a8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c13ec923b0609d6c5e4a14c79b0daa992e3c9465aa24dd0a9e4b040350b10d91bd853f73278eeae733c7dd3377377e3217876e9708196e3163609d204e308d2458cf27c85986b416f2b4ccf255d519a08e851efa8137183f529ff148f7e3f970683b4317cec67531628aad2afe1f6bcbb3013bbef630468179885a4b21f80e4335d03625cb8a146b9297224409155c3dd8085e164c705ea349add9a935cc5bb3d369b5cc76b3dd2030e5215309cf899dfba40f14572cf5f8815c824980a84a321c57d7571a2751654497837160362b7d5f0192162729aefe0649ef96d167f8c02e117ce758c6cb5c5da987e1c4feed38caf4f3a89e1db83f08a928a92b120c46ae1fd8a3a9e69617efce51a19c0a4e414ad41936eacdf65dcbacbfc77acf75d4f41e4b89120d0819fd1dfd448115b354e2f90d9f43ec577b020000",
    ],
    [
      "ETag",
      "DXSQEOBtHnQBEkaEjNW6Xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:10 GMT",
      "Server",
      "ESF",
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
          "SELECT MAX(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1626997768481",
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
      "54",
      "7f",
      "4f",
      "e2",
      "40",
      "10fd2acdde3f9af0abd09642623cd4aa4db060292ab95c605ba675b5edd6ee56430cdffda6ada89c892624303befcd7bb33bc32b7964e99a0c89cfa2a702f2cdaf07ee93060149233c9d2ece2fef323b1fcbb93e532faf4fa61a9dbe1c1d2182952c41932c86a6e0451e8018ce67ad28e7454673ce9b58a8a9779aaad13506837edf303553459e80381cb3f411d9f7526662d86eefb45b11e7510c3463a215f0e4fdbcfddc6d67397f80408af6be641b5544fb7bd1e3980754329e1ecd6768a010902f21a12c460b1fccb5ff7bbf748bd1a41521f8990540838017a92c6d618980a7218b8abcaa4a86afa4b2f9e907995963ebd453ae4677072b9a94d4d5a14285b20b1aca0a3b0a590c4bb65e9599e5327b54ceddc9156650ff9e0a102be5f6d2722d651f6c3bcadc71ac99a71c1c1f2a17ee643e554e167b18f4b80621595a39f4a81f43e9eeed12edaf4f5712a844cd3ab9ec770caa9a9d811ffafd20347bba1f76c0f74dbfafd39edf09061a686b1f28f26459bd62d194a7be4943dd07555775c30cf5703d08077d0d025505adab69aaa6f77ac640eb936d83bce44cc219131917acbe4972ebda9eb5f4dcb9733af2acaa8d9016b13cabcd954d7cf629b149047dd3d7b6cc328e4ae5b3d88e67b9a353cfbeb1ea4918434483cdec096721a4b10044d39c262021bfe26b28576032b33d7be28cc6c8a89e77ba430832fcf3fa41f0365975cbb2fa2623d71d2d9043f39c6efecba10f4323dbed27b91b1a1715a4c257515dffb94e10157bf988ba7b9141b67fb7f869105c805a8b5ccf2d7741ea231742c8210d7e9e020457891ff778b75488c5b542192131c6990b442912e450cf1e4b2af335db543baa5afd0b489acb2fb96e",
      "b7b7bbe4b24659111248e55b47f55255d756a60af10ec2248e8c633b1798fd07e3ae605ed4040000",
    ],
    [
      "ETag",
      "PYFHXpIrLtU5S1HQBP4aPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff6d905d4fc2301486ffcbf176236c433e9670010694644e19708321a48cb339d8d6d2762810febba7d3a017deb4e7e3799bf7ed05f659b9051f36597aa8509eee52d4535344a8aa5c2bba042f158205a8594aa4183f9fc370d93d9c972d219a0ef33ea7f1b4df2742c5ef5830f02f9064986f15f86f17285981246305af4a4d903e09d38f8397c19cda826f4d1b2e8260300c4670b56e92f55aec7f0593703e7a1c45ff4956570b767c13618212cb188d0321f90e633d31e1142b448eb6e2958c51410dd78b54f24a30c9b94d13fbbe693b6db7ddeb753aed6eabeb1098f398e98c97c42e66e40d34d72c8ff8076503970059971433a9cf238dbd86d3aa631c6bc6b8fbbb761bae775b3b66bdfa797678d2a85e25278f0a8d3dcf6d7e9b7de02680a6605a566841cce8a79f320d7ec27285d72f3edddc66c7010000",
    ],
    [
      "ETag",
      "pFMzNNZ8qzZ4pp01a3xQcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:10 GMT",
      "Server",
      "ESF",
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
      "ff1dd04b7282300000d0bb64ad8e43f898ee08221f517ed6a66e32801141c40848804eef5ea74778ef072459c6da96768f1babc1071813092db2c596afb011965976db861a9320912ba50c2edabcdd79befc48957581c8b908a96d1e5f16c2df897ba0d789793e1c687829e4548e73b28c146d2e1c52ab17f37e4cb8e55bb4428749ef611b8e7e99bba7330af211d7badd859398aea9e26de43a8dcda6b7492fbee00952e1f481a1ef9ddd5da892fbdc9ec6c16c1b888d32eeb0f2f271be2fabc85555b1c988cda348a374553d88f3e422d757f510a7d67ed9ddcecdfa13cc001b78d1b096166f2e54109a817f3bed46cede0198250d6bc0ef1f7ae717121a010000",
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
      "Thu, 22 Jul 2021 23:50:10 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-51-1626997768481",
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
      "6f9b3014fd2bc8fbb826214f2052b446296d23356403d26a9a26649b0b754b30c3a65355e5bfef629aaedda4f613b6ef39f79cfbe089dc8b322573c244feab81faf1d39d64e48480a639be6ee2d1f8f37551c1c5ecf2fedc5d176954dc2c170b448896a5e8be2aa0a764537350f35dd4cf6bd954b496b287897ad3616f381bcd3ccf7166eec41d224f41915d89f21ed9b75a576a3e181cb5fbb9947901b412aacfe5fee57df0301a54b5bc03aed5e0ade40055d4e07dd12f85e4540b592e76111a6814d409eca928d0c25f66ca4edfa6ee0bbaefe7087e101c28e7b229756b0b53705966226f6a9395cc9f88b1f9ea4022ffca5fc5169745b32f9392eee1c44aa9a6897eacc03a0fb71b6b1d9c6fc3cd325e6f83245a5dfa9b657fb5bdda6d82c8bab9f443dfd2941560b8d6c23a35b7002fa89f82d2a234ea71fbdc2a3f3768fdff585a024a2be8828963cfe8d0b53d96318767ee78ca321b18739933a56366736f02939401459e11352c5aca72ecc0880383c49d8dbd6402e934a16ce825293853f0ec1963f6841c4ec8ef5a683813aa924a741d2237e13af69338dc05ab65ec9b1232da14faac33d616f0daa3c60211f44e4d87362a242ab5ed5e07b11f2e57f1fadaef267c0539e58fd12f9c71460b0588a635364f43bd9129368c04cb8d7f866033b1afc7a022f31f4fa4ed79ebe255cb5fe8310eb0b5abcd974471b80e2e8c9d23e29a168d813c740752a1e55bac0d5d1f7e221297b4cb42beedfcf03be99e42c8a086927f3c4d049bc087ffda71f1118bab8f324ae31d7787ab5684d7d0ed9030e53eb3dda1ed8d1c62c0b5fe3736b427e363d7da1c6d46d843a99f2bea161f0bedc41af502c2208e3f30dd3afc01be88787e78040000",
    ],
    [
      "ETag",
      "MT23+VlpeG6HkF8IldSlWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1626997768481"
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
      "40",
      "10",
      "85",
      "ffcb78a549312d6d493ca062c5d05a29f5629a660b438b2e2cee2e1a6cfadf9d45ad464df40233c337cb7b0f76f0909729b8b0ce378f35cae66883fac61411aa9a6b45b74a940ac102d46c43e4bc19fb63bf175cce8e5faeaae6d6aba33e7f3e392142255b2c18b83bc872e4a902f76e07252b90d612c1eba25cb59d05baa9cc701e47c1744c7d2152d34f1761e89d863eecadc362ca345bb5fc3fd6967b0beec53ac20c2596091a2d9514f798e8c0d854aca8387694a865820a5ab87db091a2ae9814a243934edfeed8ceb1331a0d06ceb037b409e422613a1725b18b39e9032d34e391782697e01020db920c67edf589c679da1a3165308d9d5eabef2b40d2b29ce3ea6f90f46e197d860fec3d82ef1c2b445dea0375115e7bbf1d47997e1e75eec5fe0f42694aea80c4c1c49fc7de6466b8e5bbf7d346a39a4941412a3419dadddeb03f70ba6fb19e091335bdc7d5b2460b12467fc765aec1cd1857b87f052c04d4fe7b020000",
    ],
    [
      "ETag",
      "SyGEGE4IHP2zJpyVAuR5lw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:11 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1626997768481",
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
      "8553fd4fdb3010fd5722ef1790fadde6a395102b25db824acad214544d53eb3897629ac62176ba55a8fffb2e09053a249022c5f6bd77efddf9fc44d63c09c980047cf59843b6fbf220025223a0e80a4fffb66fafd66136bf6c29eab6d87c7b71c5e3e1d9192278c1927493c6509722cf18c8c16cda5865224f6926441d13d5f54ebd6d748c7edf340dab67b59127218ec63c5923fb5ea9540e9acd83766325c42a069a72d96062f372dedc769a69261e8029d93c966ca28a6c7e2c7a1e0b461517c9d96c8a067209d9023694c768e19519065f8f533738dd345608de720694319127aab08529984822becab3322b193c91d2e69b0599da637be46ba3c9ccf54f962155b03cd5a8d4aa654d5b623d118f61c1c36571be58a46bed9b37b9c608aadf530972a9ddfdb03d5b3b063bae36735d7bea6b27e7a7da776f32bbd12ee64718741882543c29fdf93488a1f0f6dc42e7fdc51504aa50b30a2ecc9641db56ab1f4481c922abab07510b82c00a4c9d768316ebf7a017064091a78aec258b262209ba46d463adbede0b013a1d8b99adc004d38cc2506716d519587ad7ec44645f237f32aee092cb54485ef591dc798e6f2f7c6fe68e86be5d9611d13c569795b9a288b73e151689a00feada17512e50a9b814c7f56d6f38f29d5bbb9a8331ac28db4d1f7112221a4b4034cde8061464d722c4a6919bc9d4f19d893b1c23a3bcdc9b034292c1afa75782bf4bcb2eabf24f869e379c23876619ddfd17431f468fecf76fe46e699c9790125feeaafcdb2a40da58cbebae73b433c8fef71ebf1ac1f1afb4c8cf99edcd4975e441041924ecf329407019f8f4151f9e1462f151a18c54b8c79963b210611954b3c737a5f98a6db5db866191129ca97731d3d40f4d2e7214196103897aaea87a5265db8a502e5f4018c491711df73b46ff015d23e09cd2040000",
    ],
    [
      "ETag",
      "x1VJkdrYD0taN0cYvBJilA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1626997768481"
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
      "50",
      "c1",
      "6e",
      "82",
      "4010fd97e915928a1595c4436d496b8246417b698c5961a02830b8bbd850e3bf779636a6c75e7667de7b33796f2e70ccab043cd8e7d9a941d9de65a857a60851358556fcd55429040b508b8c95f3e6ebd43f166fd1fa79393fe44114b5a3763599b042c51f580af02e90e658240abcf70b54a2441e4b84364b745b9b6eb658fb2f7ec840498901169b20789c063e5caddbc86e571fff35b2bd5a70a07d88294aac62340e6a49078cf5cc8453a2ac0bb415353246059db82332494d2d2491cd883d70ec9eebb8e3f170e88e1e463d1616140b9d53c5da4dc4de40931645489f9c0d1c16c8aee49869f79e191e7419ce9dc058fbcbb937ae67b8edefc269ab512d25b13b85c658dfb9ffb1f944c63a9fced3b2410b62c1377ecd3578a928145ebf012681cd74c1010000",
    ],
    [
      "ETag",
      "Muzq3klVSTDPMjiLSSy8yQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:12 GMT",
      "Server",
      "ESF",
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
      "82",
      "300000d0bb64ad8e106c487720621146c520a29b0c8dd1f28f048ce8f4ee757a84f75e20658c4b49bba6e035f80443aae3099bf8c2b4e76136d67034c0f86297f59a6776b097b2efad8aa44285d7735876d98945dfcbd28a4f1f8e76444e17505f368b67ff109b48697db2c50d72c875f02379908a4a7628dbc4436b7708963abe30e11e837df4d5b99941ef55119f9fb1a78df315d46be426fa149b8c7a4883c9836d66ebce34f37a77eb8d698887ea6751d67a1d1550dd91e1a0452a6224dc8aad7684105f355359b8b982376b6bcc898224563a1801fe1059cb25cdde5c38c37804feedb41b047f07d83c6d790b7eff00826a345f1a010000",
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
      "Thu, 22 Jul 2021 23:50:12 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-53-1626997768481",
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
      "fd2bc8fbda843c2040a4688d52ba664dc84648ab699a903117ea96608a4da7aaca7fdfc5345dab4aed276cdf73ee39f7c113b9e3654aa624e1f97d03f5e3975b919013028ae6f86a5b8173b930afecf5ca9ba7fef749605ddecf673344f09625e9be2aa02745533390d3ddb69fd7a2a9682d440f13f5ec716f38194d3ccf7126aee50e9127a1c856bcbc43f68d52959c9ae651bb9f0b9117402b2efb4cec5fdecd879159d5e2169892e65b491355a4f9b1e8d74230aab82867bb2d1a6824d431ec292fd0c27f669a9cbe4ddde774dfcf11fcc01950c64453aad616a660a2cc78ded43a2b993e116df3d5816cfd95bf880c268a665fc625ddc38991524563f55881711e6ed6c63238df84eb79b4dc04f17671e1afe7fdc566b55b075be3fac20f7d43d1a400cd3566c6a9be057841fd14a4e2a5568fdae756f9b941cbf7636909282da10bc6ce604287eec04bb2c461993bb6936c0049e2268e4dc7c980791658690214795a54b36829cad4f326f668388e818db2d8ca6c88bd091dc4834166592e1b39ee9092c309f95b7305675c5642f2ae43e43a5c467e1c85bb60318f7c5d42469b429d75c6da025e7b545820823ea8e9d046b940a5b6ddcb20f2c3f9225a5ef9dd84579053f6b8bdc71967b49080685a63f314d46b9162c348305ffb6708d613fb710c4a32fdfd44da9eb72e5eb5fc851ee1005bbb4a7fc9360a97c1376de788b8a245a3210fdd815468f9066b43d7873f88c425edb2909f3b3ffc45baa71032a8a1649f4f13c13af0e9bf765c7cc4e2eaa38c5478c7dd61b2156135743bc475b9cf6c7738b23d876870addec59cd1f0d8b536479b11f650aae78abac5c7423bb146be803088e30f74b70eff0092e3",
      "164078040000",
    ],
    [
      "ETag",
      "54N7KC/V5ML9AdEJ6N4KqA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1626997768481"
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
      "1085ffcb782d11140a34e10082da088850bc184396edb414b7ddbabb4509e1bf3b5b118d9ae8a59d997eb37defb53b784ab2103c5826f173816a7b12a3b9b3c51475218ca65b2e338de0001a1613695eb9f0537edf5f8f92f978a536f14d7e1a773a4468bec29481b7832841116af01e7690b114698d4b51a4d9a2ec1c30dbdc0e67c1d41f5f519fcad0f6e3f970d8ed0d07b0778e8b21336c51f2ff587bdc3bb096cb2946a830e368b5e44aae911bdfdad42ccd0556b42c14470d255c3e88952c72a6a4acd0a4d238afd4dc33b7dd6e36dd56bd55235048ce4c223362e733d207461a26a6f2855c824b802a4b321c95d70d8d93b034624b7f1cb8f552df5780a44589c0c5df20e95d31fa0c1fd82182ef1c4b659199237539bcedfe761c65fa7954bf1b0c7e10da50524724f0478359d01d4d2cf778f0dedb1ad4132529488d36c35ab5de6a34ddea7bac17d2464deff18c2ad001cee8efb84e0c7811131af76f9e2746c57b020000",
    ],
    [
      "ETag",
      "txclImcVDjMiUNhrvgKp/g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:13 GMT",
      "Server",
      "ESF",
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
          "SELECT MIN(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1626997768481",
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
      "7f4fa34010fd2a64ef1f4d6a7f42294d8c572b7a242ded51aa692e97765986ba96b2c82e9ac6f4bbdf0056ed996842c2eece7bf3decccebe900d4f42d227015f3fe690ed7e3c8880d40828bac6d35fa1edeca6b763c12e470f83c510368c5d3f9f9f2382172c49b7690c6752e41903d99fcfeaeb4ce429cd8438c34467867ed6eab6bb96659add9ede6b214f421c8d78b241f6bd52a9ec371a07edfa5a88750c34e5b2cec4f6edbcf1d46ea4997800a664e358b2812ab2f1b5e8452c18555c24e7f3191ac825644bd8521ea385776618fc3c4e5de7745b5f23f88933a08c893c51852d4cc14412f1759e955949ff8594363f2cc8cc1ed9435f1b3beec92aa40a56a71a955ab5ac692bac26e2312c79b82ace97cb74a35d7b93314650fb9e4a902bedee97edd9da31d871b5b9ebda335f3bb938d56ebcc97caa5d2e8e30e82f04a97852baf3691043e1ecb581cee76b2b0854a166155c9acd2e6df59a561005268b7a1d23889a1004bdc034682768324b073d0c80224f15d94b164d4462581d23a22604adc8a286d9e918a6d9d49901a619b63b5664f42c0b2c5327fb1a79ceb8822b2e532179d54572e739bebdf4bdb93b1cf876594644f3585d55e68a223efa54582482bea86b5f44b940a5e24a1cd7b7bdc1d0776eed6a0a46b0a66c377bc43988682c01d134a35b50908d45884d23d3c9ccf19d893b1821a3bcdae9012149ffcfcb3bc1dfa5659755f92703cf1b2c9043b38ceefe8ba18f2eb660ff41ee96c6790929f1e5aecaff5405480b6b79dfb58f765db2ffbbc7af4670f82b2df27b6e7b0b521d7910410609fb7e0a105c06be7dc3870785587c52282315ee71e6982c445806d5ecf16d69be62f75a9d8eae93129ca94f31bdd73c34b9c85164842d24eab5a2ea41956d2b42b97c03611047c675dc1b8cfe0357e5a266d0040000",
    ],
    [
      "ETag",
      "HdEIyPVMocBLjAYCekccFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1626997768481"
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
      "6d",
      "90",
      "51",
      "6f",
      "823010c7bfcbed1512600e95c40775643353e398660f8b31150e8602c7dab2c519befbae6c712f264d7b77fd5defffef198e79954000fb3cfb68509e6e32d4cf2688503585567cd45429040b508b8cc941e6af30cc5e8f345d3c7dd70be9f67c311e8d9850f13b96028233a439168982e0ed0c952891db12a1cd23fa549bec7ebc0e392b2931d972339f8f27f3105aebc2ef76f5f19f9f2dd7e143185d6bd9b6161c681f618a12ab18cdf85ad201633d33ce9428eb026d458d8c514107771799a4a61692c8e68a7dd7b35ddff387c37edf1ff4062e8305c542e75431bb79616da0498b22a22f36061e03b20bd963daed9fa6ec788eed78bc3a335da9d37815722f906ba0eddf88c949a35a4962bd0a8dd45bcff9153e2563867f32d0b2410b62c15ffe986b085251286c7f00f6de8c24d0010000",
    ],
    [
      "ETag",
      "8g6PeEgWkoCMKzpMr146aA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:14 GMT",
      "Server",
      "ESF",
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
      "00000002ff1dd0d97282300040d17fc9b338352c42df5884a8382a52a07dc9b084bd2c2128d0e9bf97e917dc39f70784714c8601b3b6220d78077308956dbc3d77b2a6df0b1559dfbd8eac1d5fb78e84965c8b0e42243e22f1d43697a3204d69c91e4970f1ae36eceb13b589978f9f9a5aa79167f8483ae070bed316a2805f8c7d578eaccfeefa6ce537830d5de606438ca06bf053108e6e1568424d93c2eb309b89c5f6258215761433734ebeea78dcc7ce925de9c863323bcf94d8e1d79189902d4a9d0726a4a340b9dbd99415e1c5955253196f6d8f9f57e39620947309617e0536804c5d41c9808b95cb8b8ab201fff635d991758046424a28f8fd0385218d921a010000",
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
      "Thu, 22 Jul 2021 23:50:14 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-55-1626997768481",
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
      "a34014fd2b64f6ab7d495ba049b3928a4ad2d29552cd66b321c370c151ca2033d418d3ffbe97c1ba1a13fdc4ccdc73ee39f7c10b79e0654a6624e1f96303f5f38f7b919013028ae6f86a5e3e98f6f570e83bee2abfb7afdda459544ff3392278cb92745715d093a2a919c8d976d3cf6bd154b416a287897a93496f343d9d3a8e654dedb13d429e84225bf2f201d9774a557236181cb5fbb9107901b4e2b2cfc4eeed7db03f1d54b5b807a6e4e0a3e40055e4e06bd19f8560547151ceb71b34d048a863d8515ea085ffcc3439fb98bacfe9ae9f2378cf1950c64453aad616a660a2cc78ded43a2b99bd106df3dd816cbca5b7880c268a6657c625ddc18991524563f55c817111ae57861f5cacc3951bf9eb20de2caebc95db5fac97db55b0316eafbcd033144d0ad05c636e9ce95b8017d44f412a5e6af5a87d6e955f1be47f1e4b4b4069095d30b686533ab2874e922516cb6c7392644348123bb126d44c86cc19c3384d80224f8b6a162d4539b21cd3b6d8381e8d6c2b1e6760c589994ee3a99541e6c0d40236268713f2547305e75c5642f2ae43e436f4232f8ec26db070234f9790d1a650e79db1b680f71e151688a02f6a3ab4512e50a96db71f445ee82e22ffc6eb26bc849cb2e7cd23ce38a3850444d31a9ba7a05e89141b460277e59d23584fecd73128c9eccf0b697bdeba78d7f2377a84036ced2afd259b28f4834b6de788b8a145a321fbee402ab47c87b5a1ebc35f44e2927659c8f5d60b7f93ee29840c6a28d9f7d344b00e7cfbaf1d171fb1b8fa282315de7177986c45580ddd0e715dee2bdb1e8d4f4d876870ad3ec54cc73c76adcdd166841d94eab5a26ef1b1d04eac916f200ce2f803ddadc33fa118e29278040000",
    ],
    [
      "ETag",
      "3Gk38Q00I9AMgj8QAbuCpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1626997768481"
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
      "0000000002ff8d92d14ec2401045ff657cb4443050a0890fa0a844408492180d21eb765a8b6da7ee6e4542f877672ba251137d6967a667b6f7de76034f711680070f71f45ca05a1f44686e6c31415d2446f32da74c23388046444c1ede2cc3a3ee957c255cc9dbe8ee2ccd2f6aab931326b47cc45480b78130c624d0e0dd6f201329f29aa4a448b345d93960d6b91d4efd497f74c17d4a81ed47b3c1a0d31df460ebec170361c4a2e4ffb136df3ab0a4870986a8309368b5e48a96284ddfdad422cd13ac682a94440d255c3e881415b95044159e541a8d4acd3d76dbed66d36dd55b35061392c2c494313b9bb23e30644432a115bb04970155966c382caf2f3c8e83d2882dfb23dfad97fabe022c2d8c135cfc0db2de47c19fe103db45f09d13291599d953e783ebce6fc771a69f479d75fcde0f421b4e6a8ff8fd616fea778663cbcd77debb6b837aac8883d46833ac55ebad46d3adbec77a4a366a7e8f6754810e48c17fc7656cc00b45a271fb06f66b0b487b020000",
    ],
    [
      "ETag",
      "+Qjf/BKcxoewcXgZDmpG1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:14 GMT",
      "Server",
      "ESF",
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
          "SELECT MAX(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1626997768481",
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
      "ff8553fd6f9b3010fd5790f74b2ba549208440a4aacb5ad63125a423a41f9aa6c49883bae5abd8b48aaafcef3ba0699b4d6a25246cdf7bf7de9dcfcfe49e6721199380c70f15949b2f7779403a04248df1747837d067561527717afd7368e84f1099497c7c8c085eb3044d8b048e445e950cc478b9e8c6655e15b4ccf3234c7434348e5443332c6b34324cdd5491272089a63cbb47f6ad948518f77a3bed6e9ce77102b4e0a2cbf2f4f5bcf7a8f58a32bf0326456f5fb2872aa2f7b1e84992332a799e1d2f1768a01250ae20a53c410b6fcc30f8ba9fbacb69da8d11fcc81950c6f22a93b52d4cc1f22ce271553659c9f8993436df2dc8c29edaa7be329b5c1fac432a617da850a1b4cb8eb2c66a229ec08a87ebfa7cb52aee95efde7c8611d4bea502c45ab9fa617bb6b20f765c65e9baf6c2570e4e0e95736fbebc50beddec61d05f0842f2ac71e7d32081dad94b039dffafad2650899a6d7035ea1b5435fb561005231699836110f52108cc6034a483a0cf2c1df430008a3c59676f5834c39ea84c0d075604c150b78ca1ae1906b65f0ffbd0ef6b5a00060b428d6a06d976c853c9259c7151e482b75d24579ee3db2bdf5bbaa713df6eca886895c8b3d65c5dc47b9f128b44d007756deb28cf51a9be12c7f56d6f72ea3b97763b05538829db2c1e700e229a0840342d690a12ca591e62d3c8c57ce1f8cedc9d4c91d15cedc50e21c8f8f7f31bc1df144d9765f32713cf9bdc20879625ddfc13431f864eb6db77729734a91a48836f766dfec7364054ace56da7ededb09d7fb6f875080e7fab457e2d6def86b4471e445042c63e9f020437814fdff0ee4121169f14ca08897b9c39266a1156423b7b3c6dccb76c531daa039334e052fe17d306d6aec9758e3a23a490c9978ada07d5b4ad0e55e21584411c19d771cf31fa171c63f241d0040000",
    ],
    [
      "ETag",
      "5j34M9uglgmXJ564wef8lg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1626997768481"
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
      "ff6d90514fc23010c7bfcbf9c8966c55072ce101744122129df0400c2165bbcdc1b6ceb6d32c64dfdd6b63f08597f6eefabbdeff7f673815750a211c8afcab45d9dde4a8df4c10a36a4bade86a44ad101c40cd732279347b3e556c3d50836ecb5683b9bf7dc17c322142259f587108cf901558a60ac28f33d4bc426a4bb9369fe8ae31d9e3741d515689d464abcd72399d2d23e89d0bbfdf37a77f7eb15a47f328bed6b2eb1d388a438c194aac1334e31b298e98e88571a678d594e82ad1ca041558d83ee452b40d9742b85471ef03d70f58301e0f87c1e86ee413588a84eb42d4c46ede491b68a179198b1f32068c006943f298d9f3db943de6b91e73fdb135634b56e335887917c837d0ee6fc4acd3a85ea520bd0a8dd45b22adf00761ccd026432d5b7420e1b4f2a7424398f15261ff0bede0f1a3d0010000",
    ],
    [
      "ETag",
      "aEBKkm2T+s+yY2N+G1YMeg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:15 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad4ee5634c7789a002959fe0881b0621a669104350119ddebd4e8ff0de0b146549bb2ebf5e046dc027180a0d4dca8927e764117d9feec23b63fecc6ae3cb851c5aacab70d5ba841ecc5047ce334ab055954846a1478a7529f370a37b6369443c13072d5008ee761dd7a1a44b7a4c2a1fb2b499f5381bd4b0ab8d7ee9b627c4cedb2e6c668f87f641ce75e3c1046f82743b5bac7f0c6c06913dbe0d7eef68d376a57493f5291663c18685bf62b688e33d6131b3ee751ce728ddb7ab8d6297e9656fdca46071406c93259c3a37087d6b7e0423401f922bdae5fccdd54d8446e0df9e5f0749df0184168a2af0fb077a63bec01a010000",
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
      "Thu, 22 Jul 2021 23:50:16 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-57-1626997768481",
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
      "02ff85536b4fdb3014fd2b91f7953e42db24ad548daa04a8d6a45b9a82c63445b67b130c691c62078450fffb6e1cca4048f029b6ef39f79cfbc833b913c5964c0813d97d0dd5d3b75bc9c811014d337cbdbed367e7a1777b7f2dd4b9cac615fcc883c7e91411a26129ba2b73e82859571cd464b3ee6695ac4b5a49d9c1449d91dbb19d63673c765dc71b7a36f214e4e9521477c8bed1ba54935eefa0ddcda4cc72a0a5505d2e77afefbd87e35e59c95be05af5de4bf65045f53e17fd9e4b4eb590c574b34603b5822a811d15395af8cfdcb293f7a9bb82eeba19821f0407cab9ac0bddd8c2145c16a9c8eaca64259367626cbe3990b5bff4e7b1c5655eef8aa4a03b38b2b654d3443f95609d45abc05a8467ab2898c58b5598ace7177e30ebce57cb4d10aeadab0b3ff22d4d590e866b4dad13730bf182fa5b505a14463d6e9e1be597062d3e8ea521a0b4823698b87d87da5e7fcc52e6f2d41b8c58da07c63ce68ee880f5f97808c32d038a3c236a58b4c09a5d6740793a4ec6a9e724c3743b4818703b71c076dc74c858df1991fd1179ac848653a14aa944db2172152d623f89a34d389fc5be2921a575ae4f5b634d016f3d6a2c10419fd4b46fa242a252d3ee4518fbd16c1e2f2efd76c24bc8287f5adfe38c539a2b4034adb0791aaa406eb161249c05fe2982cdc47e1e828a4cfe3c93a6e78d8b372d7fa5c738c0c6ae365fb28ea345786eec1c109734af0de4a13d90122ddf606de87aff1791b8a46d16f26be347bf49fb14410a1514fceb6922d804befcd70e8b8f585c7d94511aefb83b5c3522bc8276878429f785edd98e3d70880157fa43ecd81e1dbad6e46832c20e0afd5251bbf858682b56ab57100671fca1e9d6fe1f77d9827278040000",
    ],
    [
      "ETag",
      "ZktFGN8jqZisGsg9reKlMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1626997768481"
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
      "0002ff8d92416f82401085ffcbf48a891a0525e9412db62468ad620f6d8c5961402cb07477b15ae37fef2cb5b6699bb4179819be59de7b7080a7240fc18655123f9728f61731aa3b5d4c5196a992742b782e110c40c562221f76bbd7384b862e5ad6e47e3b10cebc99c7979744c8608d1903fb0051826928c17e3c40ce32a4b580a765962fabce00b52ff470e64fddf135f5190f753f9e7b5eafef397034ce8b21536c59f1ff585b1c0dd8f0d51423149807a8b514826f3050aeb6295956a45893bc14014aa8e0ea412c785930c1798d26b5b6556b984db3dbb52cb3d3ea34084c79c054c27362e733d2078a2b964ef90bb904930051956438aaae5b1a2761654497eed8375b95beaf00498b9214977f83a477cde8337c60a708be732ce365aeced4d0bbedfd761c65fa79d455cf777e1052515267c47747ceccef8d269a5b9cbcf7f70ae544700a52a2ceb0516f75da96597f8f75c075d4f41e5b89120d0818fd1d3789023b62a9c4e31b295724127b020000",
    ],
    [
      "ETag",
      "ZxxzgmiFIe77PVvCrEU2ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:16 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85547f6f9b3010fd2ac8fba795f28b4080448aba2ca519534a3a42da46d39418c750b704a7d8b48aaa7cf79da1699bad6b252438df7bf7ded9679ed01dcb56a8872296dc1734df7eb9e511aa212a7102abc3ebd964cea8f9188f46217b34821fddebb341bf0f08a65802af3729ad0b5ee4848ade6cda48725e6c70ce791d0ad53b4e5db7da56b76bdb96633a3af0044de331cbee807d23e546f49acdbd7623e13c4929de30d1207cfdb2de7c68373739bfa5448ae6a164135444f363d19394132c19cffab329182804cd17748d590a165e99abe8eb61e906c3eb4602e00746282684179954b6a004e159cc92222faba2de132a6dbef9405377ec0e436d3899f9e1d112af157979ac61a1ed839ab6849e6296d2055b2d5566b1d8dc6967c1e41c32e0e0060b2a96dad5773770356da9407ded441bf8a7da21d5f3b599efbbd3503b3a39d646c16476a17d9b1f60c0f38a0ac9b2d27188a3942ab7cf9beafd7b948a802538a8920bbb6561dd6975a338b249ec189d286ed1287222bb838da845ba26355711c5c093aa7ac9c219cf8c08c7866e383a316ccb8a315eb5db566490c8ece8ad8e69b44d5b271dc346bb1a7acc99a4a74c6cb860d5cea2abc00bdd4518ccfce12074cb36625ca4f2b432a79a78eb53429300faa0af9dca320e4aea983c3f7483c130f42edd6a32c634c1643bbd87d988712a28a0718ed754d2fc9caf60d3d0c564ea85dec41f8c81511ef7c51e2150efd7d32b21dc6eca5d96e55b695966a9bf075ce2b428110fd507d23b68b7abfdbfc42008067390c5798eb7ef977fb77e892fa3cae28b1e526afba87d105968f77b074f0dc19daab4d0cf991bcc51b514d098e634239f0f1280cbc4a7bf86fd3d052cdc5490111262185b229408c96935be6c5d9aafd88e6e39968d4a702effced9adb6be3f27554355a46b9ac9e78eaa7b5a6e9b4a15e2050449983adff34790fd0347fc2bc727050000",
    ],
    [
      "ETag",
      "CXUOYie4wfGGTiw3RJ9XFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1626997768481"
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
      "ff8d90dd4fc23014c5ff97ebeb9688013696f0208620ba1099f2600c21a5dccdb18f5bfb812164ffbbb793f8ec4b7b7bfa3be939bd4055b60748605f165f0ef5f9a640bbf64386c6d5d6f0a6a8350801a0150593d1228b8e27f52cf74f8311e5efaa9a4ddc7a3a65c2c84f6c042417c84bac0f06928f0bb4a241b689865c6b19b267e5cfcbd5db7c31cf5868e8e085d5264def67e91cbae0cfb4dba9ea5f966d17c091f619e6a8b195e833284d479476e9eb19d1a81a43434e4b34d0c3fd45a1c929a1894256c2511c0ec677e3c9248ac6f1301e30589314b6a496d9cd2b67034b56d4197d733bf080ee472e9af7eba9977d87ebb4edb657d3ec6cd1bc68e20406fde3c3f8f637ca03f97896635bed300029f8271f4b0b492e6a83dd0f6a20aae8a7010000",
    ],
    [
      "ETag",
      "7GR7jvpKcbJ15ofYpkB9uQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:17 GMT",
      "Server",
      "ESF",
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
      "82300000d07fc9d93a83c8d69b484064b1800b786110a30221c4106471faef75fa09efbd4196e7a86d53de5488806f30660b6d9ecf1daaeaebe01e3b41a4ea1309fc91bd60dd8886d7897eb09a2e358d22aae6ea45813dbc8f1baa2e19228d137b715329a562a0176fb737bb575c45285d9424a76e99865222ecfa23d97c199047162f1f37792a6db77e0c27a5f57c6ce13dccee9d90c8924378ba36972e5f5de9f389c6c1946dffec8766b797fc47713248cd4cb8402276311e9cbe7e61b63a6e0f4ef7130f7bbe2bcec73e2c53b724b88a3ccb0c9ac3b5063380065a30d4a6c5872b4a9a3603fff6948f147d02749431c4c0ef1ff53257271a010000",
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
      "Thu, 22 Jul 2021 23:50:17 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-59-1626997768481",
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
      "00000002ff85535d6f9b3014fd2bc87b6d0269488048d19aa5748d94900d48bb6e9a906d0c750b9862d3aaabf2df77314dd7aa52f784ed7bce3de77ef0846e7995a219223cbf6b59f3f8e94610748498c239bcfeb8dafd3cf36ea2f8361bf32ff4f83ab8fc73f1309f0382772c89cbba600329da863239db45c3bc116d8d1b2106906830f106a3e9f1d4f31c67eadaee08789215d99a57b7c0be56aa9633d33c680f7321f282e19acb2115e5cbbb797f6cd68db8615449f3ada4092ad2fc58f4732128565c54f35d04065ac99a8495981760e11f3325276f530f392e873980ef39659852d156aab30529a8a8329eb78dce8a664f48db7c754091bff697b14145d1965552e1921d19295638518f3533cec2edc6580567db70b38857db208996e7fe66315c6ed7bb4d101997e77ee81b0a938269ae31374ef42d800be8a74c2a5e69f5b87bee949f1bb47a3f968e00d292f5c1c4b1a678e45a1ec9884333773c2199c508718933c1636251cf66764a18069e16d52c5c89cab66c9778d9341959e37162678e9d90894d130c69468ee7a69004ed8fd043c3153be5b21692f71d4297e12af69338dc05cb45eceb1232dc16eab437d615f0daa3820201f4414dfb2eca052875ed5e05b11f2e96f1eac2ef27bc6639a68fd11dcc38c3856480c60d344fb166235268180a161bff14c07a62df0e418966bf9e50d7f3cec5ab96bfd06318606757e92f8ae270157cd5760e880b5cb41a72df1f500d96afa13670bdff0d4858d23e0bfabef3c32bd43f852c630dabe8ffa709601df8efbf76587cc0c2ea838c547087dda1b213a10deb7788eb729fd9eec8716c0b6970a3dec5bcb175e85a97a3cbc84a56a9e78afac587427bb156be802008e30f74b7f67f01f801002078040000",
    ],
    [
      "ETag",
      "XYUZF9jSTkf3iBc2hNWzVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1626997768481"
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
      "8d92416f82401085ffcbf48a89184525f180adb5268a8a78b131668541b10b4b779736c6f8df3b4bad6dda26ed0566866f96f71e9ce029cd6370619bee9e4b94c79b1deab929025425d78a6e85c8158205a8d98ec8783548bc43623766d98acbe1643a0ffcc2ebf58850d11e3306ee09921479acc07d3c41ce32a4b548f032cb375567813e1666b80883913fa43e13b1e9fde578ecf5c703385bd7c59869b6a9f87facadcf161cc436c00425e6111a2d8514078cf4c8d8542c2b38d6942865840a2ab87ab093a22c9814a246935aab5bb39d86d3edb6db4ea7d9b109e422623a1539b1cb05e9032d34e381782597e01020ab920c27d5f585c6695c1931e5c80f9d66a5ef2b40d29294e3e66f90f4ee197d860fec12c1778e65a2ccf595ba1f4fbddf8ea34c3f8fbaf3c2c10f42694aea8a84a3c960117a9399e1d617effda34635938282546832b4ebcd4eabedd4df63bd15266a7a8fab658916448cfe8e8754839b30aef0fc06a93178a37b020000",
    ],
    [
      "ETag",
      "dZEfAjf12PmZlrGMOQRNpA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:19 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1626997768481",
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
      "85547f4fa34010fd2a64ef1f4d6a0bfd41a149e37195f3c855aa946acce5d22ecb82ab944576d134a6dffd86c5aa3def342181d9796fde9bdd599ed01dcb633442114bef2b5a6ebedcf208b51095388555ae0f30498bf8e7e9e305ef157a61309d3ae3312058cd12785d64f448f0aa24548c16f3765af2aac025e74750e8c8d48f0cb36bdaf670685a7dcb009ea0593265f91db06fa42cc4a8d3d969b753ced38ce2828936e1eb97f5ce43b75394fc9612293afb921d50119d8f458f334eb0643c1f2fe660a012b45cd2356619587865c6d1d7fdd26d86d7ed14c00f8c504c08af7259db821284e7094bab525545a327a46cbef9407377ea4e426d325bf8e1c10aaf6bf2ea50c342db052d6d053d252ca34b16afeacc7259dc69df83d91964c0c10d1654acb4ab1f6ee06aaf4b2b6dac1d6b8e7fa2ed17f07c6de1fbee3cd40e8e0fb5d360b638d7be5def61c0794c8564b9f21de228a3b5e7e7adf5de1f684dc012449be472a89bd8b0743b4aa22149acde204a741a4556341ce05ea413bb4ffb714431f0645d5db170cef3d8b47583746d6ac5248ab0ddb3f441bf878ddeb04f4d3d1962a33b308c84a06d0b3d964cd213260a2e58b3bfe82af0427719060b7fe284ae6a23c155264f1a7375136f7d4a6812401ff4b5adb38c83527d589e1fba813309bd4bb7998f294d31d9ccef6142129c090a685ce23595b43ce3316c1a3a9fcdbdd09bf9ce1418ead0cf77088146bf9e5e09e1a650bb2cd51bcdc3c0f34f95811de2126795823c341fc829c02bda6e5bff2fe30481730dd2b82cf1e6af1cb463f66bfa3f24145e458dcd9da4816ab55dd4dd8b4cb4fdbd85a785e076355ae862e106d7a8590a68424b9a93cf8709c02af1e94f627763010b7716648484184697885a8494b41961b656e61bb665d8bda18d14b894ef720363b03babba465d91ae692e9f3b6a6eacdab63a558917102461f27c756cdb3fed86f73c31050000",
    ],
    [
      "ETag",
      "o05acgpdKGwQo3p0p1i0eA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d905f6bc23014c5bfcbdd6b0bd349ad051fe6262a38b7d509c21089f1b6abb6bd31497545fceede7443f6b897fc39e777c33939c33e2bb710c1264b0f15eafa2e45fbee0e319a2ab7863745a541f000ad48990cc7dfafe1738272b454f37ab93fd4e98b3cf5fb4c18f9858580e80c4986f9d640f479865214c863a2a0aab40cd95ab9fb64f6311c0d63160ada3a61b6984e1f07d3215cbcdbd07aadf6ff1a595d3cd8d126c6043596125d06a56987d24e5c3d230a95a36fa8d2120d347063a49a2a253491cf8a1fdcfbada01df47add6e1076c21683394961332a995dcc391b58b2228fe9c4eda0cd806e8e5c3469d623cb0f4d876303b8687fbdf6cd6b396ff5fbe0a0b668de34713a832e5827ecfec47c2217dd7225ab2bf4400afee57166214a446ef07205ba7c3c8fc3010000",
    ],
    [
      "ETag",
      "8HxO8DfecGXpSyXkqygMcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:20 GMT",
      "Server",
      "ESF",
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
      "02ff1dd04b7282300000d0bb64ed381a05a53b8160040b43f954b3c9600825a155840082d3bbd7e911de7b828c31deb654dd2a7e056f60cca0316773afde9a56588ebe5d60cf2c5d2d09be1844cce9072bcc68f8c3494cc42883854298b82a59765122aa65fa0117cd2aa86d6ba74d6a8df477bd8450eef111fb05a9e36253a52ba8e8311adcc017fe614b4e11eb92f062e73b297a7a5cc7cd458751296ac93582f27e3d448f73174d7d8a53cf6003dcdc8add7dc3da643a280efd475f3977e44d93453a99c7cbbd6b5dabcf124b1fcb14dd5de8e6d3373543c73e9d119801fea845c35b2a5edc95661833f06fa76aacf92bc0e459c31bf0fb075142e74b1a010000",
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
      "Thu, 22 Jul 2021 23:50:20 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-61-1626997768481",
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
      "ff85536b6f9b3014fd2bc8fbda3c48522091a2354be99a29909590b6d33421632ec42dc1149b4e5195ffbe8b69ba5695da4fd8bee7dc73ee832772cf8b844c48ccb3871aaafd973b119313028a66f85ab8b757d98db3bddd9afbadfae62d973fe4369b4e11c11b96a4bb32878e1475c5404e36eb6e5689baa495101d4cd4b1cc8e690dacf1d8b62d67e498c89390a74b5edc237bab542927bdde51bb9b0991e5404b2ebb4cec5ede7b8f835e59893b604af6de4af65045f63e16fd9a0b461517c574b34603b5842a821de5395af8cf4ce2b3b7a9bb9ceeba19821f3903ca98a80bd5d8c2144c1429cfea4a67259327a26dbe3a90b5bb74e7a1c1445eef8aa8a03b383112aa68a4f6251817c1ca3316fec52af066e162e547ebf9a5ebcdbaf3d572e3f96be3e6d20d5c43d13807cd35a6c699bef97841fd04a4e285560f9be746f9b9418bf7636908282da10d4676dfa2a6d31fc7696cb3d4199ec6691fe2d889ed533a8cfb6c3c82511203459e16d52c5a88c2195a90f65912414ae368649b66e4a4431ad1a19d580336623698e47042fe565cc13997a590bced10b90916a11b85c1c69fcf42579790d23a57e7adb1a680d71e151688a00f6a3a34512e50a969f7c20fdd60360f17d76e3be1256494edd70f38e394e612104d2b6c9e82ca1309368cf833cf3d47b09ed8cf635092c9ef27d2f4bc71f1aae52ff41007d8d855fa4bd661b0f0bf6b3b47c435cd6b0d796c0fa444cb5bac0d5d1ffe201297b4cd42ae366ef08bb44f01a45041c13e9f268275e0d37fedb8f888c5d54719a9f08ebbc36423c22a687788eb729fd9cea03f185844832bf52e361c59c7ae35399a8cb083423d57d42e3e16da8ad5f20584411cbfafbb75f807979af83b78040000",
    ],
    [
      "ETag",
      "nEXQgW8hXh1yhtBMLLJshg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1626997768481"
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
      "000002ff8d92614f82501486ffcbe92b6ce20c95cd0f58566c688a586dcdb92b1c10032edd7ba939e77fef5c326bd5565fe09cc3732eeffbc21e9eb2320607d659fa5ca3d89da5a866ba0850d6b99274ab7829110c40c5522237eda06c8f2c2b1e7a7176afee1ea6a198b983011132da60c1c0d94392611e4b701ef750b202692de2795d94aba63340ed2a3d9c878137b9a6bee0b1ee270bdf7787fe080ec66931668aad1afe1f6bcb83015bbe0e30418165845a4b25f81623e5699b9215558ea6e4b588504203370f52c1eb8a09ce4d9a98b6655a76dbeef7bb5dbbd7e95904e63c622ae325b18b39e903c515cb03fe4a2ec126403425194e9aeb0b8db3b831a24b6f12da9d46df5780a425598eabbf41d2bb61f4193eb06304df3956f0ba5427eacabf757f3b8e32fd3cead20d473f08a928a913127ae3d13c74c753cd2d8fde873b85722a380529516768b53abdf3aedd7a8ff582eba8e93d8e12351a1031fa3b6e32054ec2728987378a4f96277b020000",
    ],
    [
      "ETag",
      "h2Rn2E11dBIdiWtVXPTrQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:20 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1626997768481",
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
      "000002ff85547f4fa34010fd2a64ef1f4d6a0bb4a53f92c6ebb5a82495f628d598cba55d960557814576d134a6dffd86c5aaf5ee342181dd796fde9bdd199ed13dcb423444018b1f4a5a6cbfddf10035109538865d432cce3c32bfd36f5b17c56a6118e74ff3e9d368040856b1044ef3849e085e16848ae16ad98c0b5ee6b8e0fc04129d58e6896199d660d0eb59fd4edf009ea0493463d93db06fa5ccc5b0d5da6b3763cee384e29c8926e1e9eb7eebd16ce505bfa3448ad6a1640b5444eb73d1d384132c19cf46ab251828052dd634c52c010b6fcc30f87e98bac970da8c01fcc808c584f03293952d48417816b1b82c5456347c46cae6bb0fb4b467f6c4d726f395eb1f6d705a9137c71a16da7ed1d0365053c412ba66e1a68aacd7f9bd76e6cd2f21020e6eb1a062a35d5fd89eadbd6d6db49176aa8ddda97698c071b595ebda4b5f3b3a3dd6cebdf96aa1fdb839c080f3900ac932e5dbc741422bcf2f47ebfc7da115014b10ad83eb9e6e61a3af0f8228e891a8dfee06914e83a01ff4bab81de864d0a19d30a01878b2caae5838e39915907010995d0bd310b7bb38307433a051bb6fb4bba6d1364362d1483774b46ba0a782493a6522e782d5e78bae3dc7b7d7beb7722763df566544b84ce4b4365715f1dea7842201f4495dbb2aca38285597e5b8beed8d27be7365d7fd31a33126dbe5037448841341018d0b9c52498b4b1ec2a1a1c57ce9f8cedc1dcf80a12e7db1470834fcf5fc46f0b7b93a65a9de68e97b8e7bae0cec1157382915e4b1fe403807af68b76bfc3fcdd8f3c637208d8b026f3fc4a01cab53d1ff21a1f06a55dbdc4b1aa852dbafcc83958576bf77f034104c57ad857eae6cef06d55b1e8d684133f27533015805befc49ec2716b030b3202324aca17589a8444841eb1666a9325fb3fba63ee8f4900217f263ccd055e6d749ad32d29466f2a5a27a62d5b155a152bc8220089de7aa6bdbfd01ae349d8931050000",
    ],
    [
      "ETag",
      "1sPFRcOj0h/HrUP11GwODw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1626997768481"
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
      "90",
      "41",
      "4f",
      "c2",
      "40",
      "1085ffcb786da3106ca10907218d1008c122178d214b3bad2d6d67dd9daa84f0df9945e3d9d3eebcfddecc9b3dc1a16c3388605f161f1d9ae34d81fce42e09daae662b87a6d6227880ac0a218d592dbee37b3d5dcfc2db45b5c9069f2fa3623c16c2a6efd828884e9097586716a2d713b4aa41b1a986ba9605e2a376f57cf51c3fc689080d654e586d97cb87c93286b3f767daedf4e15f96b7b30715ed13ccd1609ba2cba00d5598f2dcad6755a36bf42d7526450b57f8fa5018eab43244be287ed0f77b413f188dc230180e863d016b4a1597d40abbdd483660625527f425dbc11dfcd69323a35d1b92e6165ddfc130fc993225379925119b0e3d48957cd2ac648872555b3c5f0039c6d3c882010000",
    ],
    [
      "ETag",
      "rrNKxE5pCPH7/KjSd4vZ9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:21 GMT",
      "Server",
      "ESF",
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
      "000002ff1dd0d17682200000d07fe1393b6959b1b7a4e92a7395a392170e128bd4cc84a9d4d9bfafb34fb8f70918e74229aa6fb928c11b30cc817dde5f55530f6de53d227b3db56027a3951ac95d23e9437dd83cd3241f04510de76c129cee8b6483b5f80c8dde2f69c29b5389875b9487d72365fe48da829b9b15af544accf8719c1c3072f8a66cb36f52c558c5b364ed1a9aaab1c55a690d6cdfed70eee4b6c9c4d9a9bea6e9d998785e942276acf0105c295ba299d715e98f3f441ebe0593aa7d2f92f022a1266887e183ee331511c366ebac20a9ebab7193ded14221d003a2ab2eb550f4f2e20e5d087be0df4eb5a9c42bc013ac1635f8fd03e1264efd1a010000",
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
      "Thu, 22 Jul 2021 23:50:21 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-63-1626997768481",
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
      "9b3014fd2bc87b6d4248299048d11a2574454ac84a48ab6e9a906d0c750b986293a9aaf2df77314dd76e52fb84ed7bce3de77ef08c1e7895a229223c7f6c59f3f4e55e10748298c239bc7a63727b59fe289b4204f7cb873b8223e72a9fcd00c13b96c4655db081146d43999ceeb6c3bc116d8d1b21069068e09c0e2c67ec4c26aeeb78b667014fb2225bf1ea01d8774ad5726a9a47ed612e445e305c7339a4a27c7d37f763b36ec43da34a9aef254d5091e6c7a25f0b41b1e2a29aedb660a095ac495889790116fe325372fe3ef590e372980378cf29c3948ab6529d2d48414595f1bc6d7456347d46dae69b03dafa2b7f111b54146d5925152ed98991628513f55433e322daac8d20bcd844eb791c6cc264bbb8f4d7f3e162b3daadc3ad7173e947bea1302998e61a33e35cdf42b8807ecaa4e295568fbbe74ef9a541c1ff63e908202d591f4cdc91832d6f3421197169e69d9e916cc408f1887b864fc9884e6c66a78461e06951cdc295a89865537732b21337739cc4b6499a90945a09b47a32b6d334b55c1b1d4ed0ef862bb6e4b21692f71d42375110fb491cedc2c53cf67509196e0bb5ec8d7505bcf5a8a040007d50d3a18b72014a5dbb8330f6a3f9220eaefd7ec22b9663fab47d841967b8900cd0b881e629d6ac450a0d43e17ced2f01ac27f6fd189468faf319753def5cbc69f92b3d8601767695fea26d1c05e1376de788b8c645ab21fbfe806ab07c07b581ebc32f40c292f659d0d5ce8f6e51ff14b18c35aca29f4f13c03af0e9bf765c7cc0c2ea838c547087dda1b213a10deb7788eb725fd8ded89a3836d2e046fd1b1b8f3cefd8b52e47979195ac522f15f58b0f85f662ad7c054110c61fea6e1dfe0015ea062f78040000",
    ],
    [
      "ETag",
      "82bYHmZmrloIjDkhbaR6Qg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1626997768481"
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
      "c2401085df65bcb4248058b00917050149ca7f894643c8d24ea1b0edd6ddad8610deddd98a68d4446fda99e937db734e7b805d9c86e0c02a5e3fe728f7176bd413534c51e55c2bba6522550816a0666b22dba359d76b97cbfcfe725fabf6ec875dfeb89d349b44a860830903e700518c3c54e03c1d206509d25a20789ea4cba2b340ef33339cf9d3feb0477d2242d30fe79ee7b6bc0e1cadf362c8345b16fc3fd616470bb66235c50825a6011a2d99145b0c74dfd8542cc9389694c865800a0ab878b09622cf9814a24493927d55aad855fbe6a65eb71bb54685402e02a66391123b9f913ed042333e15afe4126c02645192e1a8b8bed0380e0b23a6ec0f7dbb56e8fb0a90b428e6b8fc1b24bd1b469fe1033b45f09d6389c8537da6badec8fded38caf4f3a85bd7effc2094a6a4ce88df1f7466be3b181b6e71f2deda6b54632928488526c34ab9d6b8aedbe5f758dbc2444def71b4ccd18280d1df71176b7022c6151edf00411b5d1f7b020000",
    ],
    [
      "ETag",
      "COSFLC00lW+y42G6XkuZjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:22 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1626997768481",
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
      "0000000002ff85546b6f9b3014fd2bc8fbd26a7910125e91a22e4dd8162d251d217d6c9a1203863a059c62d329aaf2df770d4ddbac5b2b21817dcfb9e7dceb6b1ed02dcd23d447014dee4a526c3fac59801a88089cc0ee45e2fdf8f88dc657eb62bd985f9d5eb1d88c86830120a864719c6d52d2e4ac2c42c2fb8b792b2958b9c105634d48d4347acd8ea119b66d9a86d5b33ac0e3248da734bf05f68d101bde6fb7f7daad84b124257843792b64d9d37efb5e6b6f0ab626a1e0ed43c936a8f0f6dba227290bb1a02c1f2ce660a0e4a458920cd3142c3c33a3e0d361ea16c5592b01f03d0d090e4356e642da821421cb639a94459515f51f5065f3c5079a3b5367e42ba3d9c2f58f563893e4d5b182b9b25f349415d414d3942c69b49291e57273ab7cf66667100107379813be522ebf3a9ea328ab080bb25206ca893274c7ca2179e22a0bd775e6be727472ac7cf1668b73e5f4fa0003ae23c205cd2bcf3e0e5222fd3eb675f2fa3025010bf0500797a66ae08ea5da411c98616c75f5205649105881a9e36ea086768ff4a28060e00999bd62e19ce5bdb06b5a1dddc0018e3433b06d3d5409364c1c449dd83662035b91a6db2ada35d0ef820a32a67cc338ad7b8b2ebd89ef2c7d6fe18e86be539511e33215e3da9c2ce2a54f014502e88dba76324a1928c9839ab8bee30d47fee4c2a967634a121c6ee777301d314e3901342e70460429ce58044d43e7b3f9c49fccdce11418d5819fef111cf57f3e3c13fceda6eab2a8de682c0bd8bd487881d3b202dcd71f485335b5a96acd8e8e76bbc6ff330d3d6f780deab828f0f6af185464f424fd1f3a15be5ad54ef7ba1d24d59e5c1cac0cb4fbb583a781e072d55ae8fbc2f1ae51bde5919814240fdf9f2700578177ff11fb0b0b58b8b220c305ac617a432e45c282d4534cb3ca7ccdb634cdd47554810bf12a6659ddfd71c91c3223c9482e1e2baa2f6cd536192af9130882307ceec4fd02d13f449af82130050000",
    ],
    [
      "ETag",
      "VgRZ+KifXjrjUSXBXof7dA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1626997768481"
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
      "8d90dd4ec2401085df65bcb44dc46081265c00122412d4026a620859da692db49dba3f364dd37777b612afbdd99d3dfb9dec39dbc0392d22f0e198265f06657d95a07eb14380ca645af15652a1101c402d12265ff345b5adee96f7d7b3b7c9bba89fcce339aac6632654f889b900bf8138c52c52e07f3450881cd9267232856648d7a53d2fd7dbf9621eb090536485f56eb59a4c5773689d3fd3e1509eff65d9b70e9ce818608c128b106d8652d20943bdb4f594c8cb0c5d454686a8a083bb8b4492298524725971bdbedbf36ebdd16830f086fd618fc18c42a1532a98dd6d381b68d2220ba8e2766001d98d5c34eed6ef4eb61d2ed3bedd5f4cd35aa37a96c40914dac7fbc39bdf2833b2f134c7d6d2a003a1e09f7c4835f8b1c814b63fd2737f36a7010000",
    ],
    [
      "ETag",
      "VmGwTw5ID+CWAXayOuKkdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:23 GMT",
      "Server",
      "ESF",
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
      "1f8b08000000000002ff1dd0c95283300000d07fc9b9e9b02fdeda52d622410988974ca1b102956080b238febb1d3fe1bd1f702e4bdaf764600d6dc11358ce92b92db74167ec0f71b513c28165b4fbf4a9b592b00df24565a2501f53e6b63559ee8c71f4962835741b4b73ac9c44cba92ead7c92952f519e95e0d99667a4422c3abe156b3be9c056c3ff0874c51ec7ef5ebf61452caa56901cf5e5d0a689a0bf5e11c427a3f05cc8afea05c6042d6584d1d4799138dd8ed0d53cc87556849763304a758bc32bb605ddb9711b054a0ac71d913c5330d677cd3cd9c9c0f64d8fb3d043538644b00174ee2a4e7b523db8b26a9a1bf06f27c3d2d147c09e9e39e5e0f70f48876b551a010000",
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
      "Thu, 22 Jul 2021 23:50:23 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-65-1626997768481",
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
      "000002ff85535d4fa34014fd2b64f6716d8b6d29b449b33615954d4b5da01ab3d99061b8e0b894416670e39afef7bd0cd6d598e8133373cfb9e7dc0f9ec86f5ea66446129edf37503f7eb913093922a0688eaf29cdc7fcebdf2b27fc7ee3af69bdbc3cbf88f2f91c11bc6549baab0ae849d1d40ce46c1bf6f35a3415ad85e861a2dec4ea1d4f8693e9d4b627ced839469e84225bf1f237b26f95aae46c303868f77321f20268c5659f89ddcbfbe06138a86a71074cc9c15bc901aac8c1c7a2df0ac1a8e2a29c6f4334d048a863d8515ea085ffcc3439799bbacfe9ae9f23f88133a08c89a654ad2d4cc14499f1bca97556327b22dae6ab0309dd95bb8c0c268a6657c625ddc19191524563f5588171166cd686e79f6d82f522f2367e1c2e2fdcf5a2bfdcacb66b3f34ae2fdcc035144d0ad05c636e9ce89b8f17d44f412a5e6af5a87d6e959f1be4bd1f4b4b4069095d30b6cd093d76cc69922536cb9c91956426248993d8161d25269b8e619c264091a745358b96a234133ac5481a5b766ac7e31198b163a7a338812903e6a48e6599647f44fed45cc129979590bceb10b90ebcc88da360eb2f1791ab4bc86853a8d3ce585bc06b8f0a0b44d00735eddb2817a8d4b6dbf32337582c23efcaed26bc829cb2c7f01e679cd14202a2698dcd5350af458a0d23fe62ed9e22584fecf2109464f6f389b43d6f5dbc6af90b3dc201b67695fe92300a3cff5cdb3920ae68d168c8437720155abec5dad0f5fe17227149bb2ce4c7d60d6e48f71440063594ecf3692258073efdd70e8b8f585c7d94910aefb83b4cb622ac866e87b82ef799ed0c47d6d0261a5cab77b1c9c43a74adcdd166841d94eab9a26ef1b1d04eac912f200ce2f87dddadfd3f1281be5a78040000",
    ],
    [
      "ETag",
      "dag4i+zV8SJYNMarCPGHTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1626997768481"
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
      "0000000002ff8d92414fc2401085ffcb78b44d4060c1261c0aa2900022142f8690a59d9642dbadbb5b0912febbb315d1a8895eda99e937dbf75e7b806d9c05e0c02a8e9e0b94fb8b08f58329a6a88a442bbae522530816a0e61191afecb2c1e5b6561b3db29dd7ed6ffaf5f53a6ab78950fe1a530ece01c218934081f374808ca7486bbe488a345b969d057a9f9be1cc9b0ec677d4a72230fd783e1cba9d610f8ed67931e09a2f4bfe1f6b8ba3051bb19a628812331f8d965c8a0dfa7a606c2a9ee609da4a14d24705255c3e88a428722e85b06962b3865d6557ecfabad964ad7aab4a60227cae6391113b9f913ed042f3642a76e4121801b22cc970585e5f681c07a511530ec61eab97fabe02242d8c135cfe0d92de35a7cff0819d22f8cef15414993e53b7c37bf7b7e328d3cfa36e5caff783509a923a23de60d49b79ee6862b8c5c97b67af514da4a020159a0cab957aabd16495f758bbc2444def71b42cd0029fd3dfd18f3538214f141edf00a7fff0b87b020000",
    ],
    [
      "ETag",
      "z6+5ark33MV6wTCHjH4hhg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:24 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1626997768481",
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
      "54",
      "6b",
      "6f",
      "a2",
      "40",
      "14",
      "fd",
      "2b64f64b9bf800445013d3b5ca7649145dc43676b3d101063a2d309419dc98c6ffbe17a86dddeeb60909ccdc73ee3df7c5137aa0698006c8a3d16341f2fd977be6a106220247704b2faf97e9fa6a72fb3db72cbc8bc6b39e791b0d8780a0258be3248b4993b322f7091fac96ad2867458673c69ae0a8a9eb4d4557f57edf30f49ed65380c7491c4e69fa00ec3b21323e68b78fb15b1163514c704679cb67c9cb7d7ba7b6b39cdd135ff0f669c83644e1ed8f835ec4ccc782b274b85a828082937c43124c6390f0ca0cbcafa7ae5b1427ad08c03bea13ecfbac4845290b5cf82c0d6954e4955734784295cc371f68694ecdb12b8de72bdb3ddbe2a4246fcf25cca5e3a1216d21a790c66443836d69d96cb207e99b339f810514dc614ef856baf96e3aa6246db900755b69285d48237b229db22d5b5ad9b6b974a5b38b73e9ca99af16d2e5fa0403b203c2054d2bd12ef662520a7eaeabf5be9b25010b10511b3786ac63a527f7bdd033fcb0d7e97aa14c3cafe7195ddcf164bfaf112df008069e28bd572c9cb2b4dff7ba72a81a8aaa91aedc315455933b5d45f65443ef047e5ff1022554341f1d1ae8774e0599509e314eebe2a21bc772cd8debacecf1c835ab34425cc462528b2b9378ab53409200fa20af4369a50c22959db26cd7744663d7ba36ebe1989208fbfbe5238c4788634e008d739c1041f2190ba06868315f5aae35b7475360541d5f1c111c0d7e3ebd12dc7d565559546fe45a33e8d168b6a8341c41d7382e2ad4aefe40aaacca4d596d2a5d5751074a67a0682d59966fd1e1d0f8bff391e38cd62008e739deff65832475ada4ff236a85af4eb5f8a30a0595d1",
      "5e349d9c7474f87580a78160e1ea58e8c7ca74d6a8be7248487292fa9f8f18802bc3a7ff8de3120316d618c2c042080a03edf332889f937ab0695289afd93d55ebe83d548173f1cea6f58d63074b1fa5479290543c67542f7155b6d254f0171018611e6dcbbe02eb1f57443fa044050000",
    ],
    [
      "ETag",
      "iBVSnYGDZHrIIavgCM8EZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1626997768481"
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
      "90",
      "5f",
      "4f",
      "83",
      "30",
      "14",
      "c5bfcbf515e26616c648f6b019a28b642a4ae29f2c4b572e08032eb6459d0bdfdd5b5c7cf6a5bd3dfd9df49c1e615f342904b02bf2f70ed5e12c47736f8718755719cd5b4b8d4670008dc8997cfe8e5e64997cf9a394a68bdbb4bc397f0a17f339135abe612d2038425660956a085e8fd0881ad9266aea1ac39039b4f6bc5a3f865761cc424da915d649142d965108bdf367da6edbfdbf2c9bde8192763166a8b0916833b48a4a946665eb6951b715ba9a3a2551c3000f17b9a2ae158ac865c5f53c77ec5d78b3d974eaf9137fcc60455298821a669307ce06868ca862fae4766001358c5c341bd68f41b61d4ed3a6df9c4ccb83417da7881368b48f4ffcd16f944bb2f10cc736aa4307a4e09fbc2e0c0499a834f63fb395bef6a7010000",
    ],
    [
      "ETag",
      "YzLZcjUx80do7AOdjK/XEA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:25 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb642d8e8896d21d440451f9946fd96400a340e41702053abd7b9d1ee1bd1f906419ee7bc41a826bf001e6642badb3f5b97d57a0535ea06e88f9316c73b14eedfb15b9d3946d14957196168722e46f64bc3bc80f6e8f661648b06cd5a756655d2c0472733c10de9cf57071defc3a2e3a4d2458d021ebaafb26f1ec911630f1633796a3ee20dcdc6f9c1757b284516df9bdbde31a5582273e8567ce6207483f23755038a9345d3a57514ead117503e38d5278c47b3da0e4542f2962b263eeb4a7f1c598e74983d9e953655f9ab4b075c3d9643358013cb505c53d2a5e5c612f492bf06f476c6ef12b40c109c514fcfe01b63f54011a010000",
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
      "Thu, 22 Jul 2021 23:50:25 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-67-1626997768481",
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
      "0002ff85536b4fa34014fd2b64f6ab7db7409b346b53d13669e90a54e36e3664182e380a0c3283c698fef7bd0cd6d598e82766e69e73cfb90f5ec83d2f623223114f1f6aa89e7fdc89889c105034c5d7e026ebe7bf53b6f2b6e741b6b928a76ab4ba9ccf11c11b96a4799941478aba6220677bbf9b56a22e6925440713754cab333087e6746a59a63db607c89390251b5edc23fb56a952ce7abda376371522cd80965c7699c8dfde7b8fc35e59893b604af63e4af65045f6be16fd9909461517c57cefa3815a4215424e798616fe33e3e8f463ea2ea7793745f0236740191375a11a5b98828922e1695de9ac64f642b4cd7707e23b1b6719184c64755e8405cde1c488a9a2a17a2ec138f7765b63ed9eefbced2258efdcd05fae9ceda2bbdc6df65bd737ae578ee7188a461968ae31374ef5cdc50beac720152fb47ad03c37caaf0d5a7f1e4b434069096d30b4fa261dd8fd699444164becd1244afa104576644de828eab3e918c6710414795a54b368210aa030b22d6b180e6c6b1a8e93110da364300e87b1c9fa2c32ed381992c30979aab882332e4b2179db2172edad03270cbcbdbb5c048e2e21a175a6ce5a634d01ef3d2a2c10415fd47468a25ca052d3eeb51b38de6219acaf9c76c21b48297bf61f70c609cd24209a56d83c05d556c4d830e22eb6ce1982f5c47e1d8392ccfebc90a6e78d8b772d7fa30738c0c6aed25fe207dedabdd0768e882b9ad51af2d81e4889966fb136747df88b485cd2360bb9dc3bde0d699f3c48a082827d3f4d04ebc0b7ffda71f1118bab8f3252e11d7787c9468455d0ee10d7e5beb2ede16432d07faaa295fa1433fbc363d79a1c4d46c8a150af15b58b8f85b662b57c036110c7efea6e1dfe01b425138c78040000",
    ],
    [
      "ETag",
      "TYl0mZgcHRMFTlLGp9t3HQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1626997768481"
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
      "000002ff8d92614f82501486ffcbe92b6cda0c94ad0f9856142a296e6dcdb92b1c10052edd7ba939e77fef5c326bd5565fe09cc3732eeffbc21eb659198303ab2c7dae51ecce52540fba98a2ac7325e956f1522218808aa5440e587017def77a9d943d8e4ae1cf027bb24d2f2f8990d11a0b06ce1e920cf35882f3b4879215486b11cfeba25c369d016a57e9e12c9c7ae31bea0b1eeb7e3cf77db7ef0fe1609c1663a6d8b2e1ffb1b63818b0e1ab292628b08c506ba904df60a43c6d53b2a2cad194bc16114a68e0e6412a785d31c1b94913d3b2cdb6756ef57ab66d753bdd3681398f98ca7849ec7c46fa4071c5f2297f25976011209a920c27cdf585c659dc18d1a5370ead4ea3ef2b40d2922cc7e5df20e95d33fa0c1fd83182ef1c2b785daa1375ed4fdcdf8ea34c3f8f1ab8e1f0072115257542426f349c85ee28d0dce2e8bdbf532803c12948893ac376abd3bdb0add67bac575c474def7194a8d18088d1df719b297012964b3cbc014a192dac7b020000",
    ],
    [
      "ETag",
      "DaPJTK994gaXMnrLSP7Okg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:26 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1626997768481",
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
      "000002ff85547f6f9b3010fd2ac8fba795f20b92108814752ca11b524a32425a45d39418c7a46e01a7d874caaa7cf71da6499b756b252438df7bf7ded9679ed03dcbd6a88f22b6792868befb74c723544354e24db96a64c6fcf76c91c5776234f5ad9b49ef3a75060340b0922570ba4d685df0222754f4e7b3c626e7c516e79cd7a150ddb4eaba6998b6ddeb9956c7d2812768128f59760fec5b29b7a2df6c1eb41b1bce3709c55b261a84a7c7f5e6a3d1dce6fc8e12299aa7924d5011cdf7452f124eb0643c1bcc6760a010345fd214b3042cbc30d7d1e7d3d20d86d3c606c08f8c504c082f3259da8212846731db14b9aa8afa4f48d97cf58166eed81d86da7032f7c3b3154e4bf2ea5cc3423b04356d053dc52ca14bb65e9599e5727baf5d06932bc880835b2ca8586937dfdcc0d58e346da05d688e3fd24ee99eafcd7ddf9d85dad9c5b9f63598cca7da97c509067cafa9902c53ae431c25b474fcbcb1dedbe32c0958828b2ab9ecb54cac5b2d3b8aa31e89ad76378a5b348aaca8d7c5eda845ec0eedac238a8127cbea8a85339e753b366eb7dbb1a5db5dd3b23a7a476fe9b161c5c61a139b60bb8d8d1e315a685f43bf7226e988892d17acda5d741378a1bb0c83b93f744257b511e32291a3ca5cd9c46b9f129a04d03b7dedcb2ce3a0541e95e7876ee00c43efdaada6634c3798ec660f301f314e040534ce714a25cdaff81a360d4d27332ff426be3306863af2e9012150ffc7d30b21dc6dd52e4bf54697e389139a1de5e000b9c649a1308fd507d21b5d40ec6bff2fe30481b300699ce778f7570eda3115fd1f0a0aafa2cae65111956a87c838894cb4ffb987a786e06e555ae8fbdc0d16a85a0a684c739a918f8709c02af1e12fe2705f010b3716648484184697885284e4b41a61962af315db32cc8ea97e3012e7f24dae67d987b32a6b9415694a33f9dc51755fd5b695a9421c419084c9f33dff2b64ff008d4af2c62f050000",
    ],
    [
      "ETag",
      "b2n2UzSYnfjsDPN8WO7VmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1626997768481"
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
      "ff8d90414f83401085ffcb788544d0d096a407b1446bb0d1b59c4cd36c61405a607077b1214dffbbb3681a8f5e96e1bd6f36efed090e559b4308bbaafcec510d57259a573b08d47d6d347f3a6a3582036864c9e4f1181f9245ba88845611e5a57812cf43399f33a1b30f6c248427282aac730de1fb095ad920afc986fad6306486cefe2f57ebf821162c34945b619526c95d94c470762e4bdb6d77f8d7cae6ecc09e76020b54d8666833748af69899a5ada765d3d5e86aea55861a4678344a457d271591cb8a1b4c5d2ff083d96c3209a6b7538fc19a32692a6a994ddf381b1832b21674e476e033a0c6918b16e3f935cab6839dbc31da5fcfbb78bef536bf17468341fda288d369b4c16efceb9f98f764a31bae64548f0e64925ff9b1321016b2d678fe06a6646afec3010000",
    ],
    [
      "ETag",
      "wwEkLDUDBRsrBodgRJRMyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:27 GMT",
      "Server",
      "ESF",
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
      "1dd04b7282300000d0bb642d8e21054d77a0a00811e427ba6108a47cb480247eb0d3bbd7e911defb01599e33ce53d19d590b3ec198c9789a4fed7ea12ff7a5110dbb7c5798925f10ef4efd57d394e171e579e7005a79fb10aa82887ce34a1774c2b3edc699b7d81c75b2ad2813e5e688d3b5f8e89ab9152b9d1686f9a1d891c630bf2f95390a4809b989d070e13852c38a132b724c3dd62414b9c89e056aa2ae6112f1ad0f1fd7b583c2a6af2ed7e1b40a67620fa562e9945818434c648a82bb56530553fab5a8e8493e70053aa5435edc45c1a6edebda9a97f4a2820960cfbe1e184feb371729184fc0bf3d1563cfde013acb063680df3fa27c24a61a010000",
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
      "Thu, 22 Jul 2021 23:50:27 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-69-1626997768481",
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
      "14fd2b91f715dab469f3a8548daa8491ad4d214d41d334458e7b13ccd238c40e0ca1fef7dd3894c126c1a7d8bee7dc73ee234fe4172fb76442529edf35503f7eba15293922a0688eafbfc38bc81a8a60c4bf7eb31ff2f3e6d234d387e91411bc6549baab0a3896a2a919c8c966ddcb6bd154b416e218131ddbdef1c01eda9ee738b63b7207c89350640b5efe42f68d52959cf4fb07ed5e2e445e00adb8ec31b17b79efdf0ffb552d6e8129d97f2bd94715d97f5ff4732118555c94d3cd1a0d3412ea0476941768e12f739b9ebc4ddde374d7cb117ccf1950c64453aad616a660a2cc78ded43a2b993c116df3d581acfd853f8f0d268a66572625ddc191b1a58a26eab102e32c5a2d8d203c5b45cb591cacc2643d3ff797b3de7cb5d82cc3b5717dee47bea1685a80e61a53e344df42bca0fe16a4e2a5568fdbe756f9b941c1ff636909282da10b268e69d3816b7a69963a2c73ad719a9990a66eea8ca9959acc1bc1689b02459e16d52c5a8a925a6c34b6b241e299192423277513ea5a5ee2d9e638630e6443cb26fb23f2507305a75c5642f2ae43e43a0a623f89a34d389fc5be2e21a34da14e3b636d01af3d2a2c1041efd4b46fa35ca052dbee208cfd68368f832bbf9bf00272ca1ed77738e38c1612104d6b6c9e827a29b6d83012ce96fe2982f5c42e0e4149263f9e48dbf3d6c5ab96bfd0631c606b57e92f59c751107ed1760e882b5a341a72df1d4885966fb03674bdff89485cd22e0bb9dcf8d177d23d4590410d25fb789a08d6810fffb5c3e22316571f65a4c23bee0e93ad08aba1db21aecb7d66bb43c7199b44836bf56fccb5ecf1a16b6d8e3623eca054cf15758b8f8576628d7c016110c71fea6eedff006a1f7b6378040000",
    ],
    [
      "ETag",
      "xNPR32oI4iJK6wgHuQ00bw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1626997768481"
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
      "02ff8d92dd4ec2401085df65bc2d110c1668c245415422a042897f216469a765b1ed2ebb5b0d21bcbbb315d1a889deb433d36fb6e79c760bcf3c8fc083054fd605aacd5182e6d61663d4456a34dda4c8358203685842e4832cd651f751e6f52b7e77cf8fa51c554dd26e13a1c325660cbc2dc41cd34883f7b4859c65486ba1488b2c9f979d036623ed70128cfba30bea3311d97e341d0cfccea0073be7b01831c3e625ff8fb5d9ce8195588c3146857988568b546285a1e95b9b9a6532c58a16850a514309970f12250ac99410159a54dc56a5e69eb8ad56a3e136ebcd1a81a90899e12227763a217d608461e958bc924b700950654986e3f2fa42631e95466cd91f056ebdd4f7152069314f71fe37487a978c3ec307b68fe03bc73251e4e6409d0faefddf8ea34c3f8f3af383de0f421b4aea8004fd616f12f8c31bcbcdf6de3b1b83fa46090a52a3cdb056ad374f1b6ef53dd6aeb051d37b3ca30a742064f4775c72035ecc528dbb3717f488397b020000",
    ],
    [
      "ETag",
      "YpuqdCZpn4KiWXi/ppN0tg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:29 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1626997768481",
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
      "ff85546b4fe33010fc2b39df1790fa485f7954aab85e0910a9a45c9a82aad3a9751c2718d238c40ea842fdefb74e28501d0752a464bd333bb3f63acfe89e65111aa290250f252db6dfef78881a884a9cc0ead4ea983dffc2cca797cbfe997f3bb6cd503c8d4680608a25f0264f6953f0b220540c17f35652f032c705e74d28d434f566c7e81ab66d9a86d5b73ac013348da72cbb07f6ad94b918b6db7bed56c27992529c33d1227cf3bade7eecb6f382df512245fb50b20d2aa2fdb9e849ca09968c67a3c51c0c9482162bbac12c050b6fcc28fc7158bac5f0a69500f891118a09e16526952d28417816b3a42caaaa68f88c2a9bef3ed0dc993a93409bcc165e70b4c61b455e1f6b5868fba0a1ada1a798a574c5a2b5caac56f9bd76e6cf2e21030e6eb1a062addd5c38bea3696b05fa36d24eb4b177aa1d725d4f5b789e330fb4a39363eddc9f2daeb49fcb030c988ea8902cab2c07384ca9b2fbb2abeebf67a9085882853ab9327503772cdd0ee3d024b1d51b84b14ec3d00acd01ee853ab1fbb41f8514034faaea150b673cd3e33ed5edc8c03a190cb06953c3b28845ba71d7c0b6ad87bdc8a0836e44d0ae819e0a26e929133917acde5a74e3bb81b30afc853719074ed5468ccb549ed6e65413ef7d4a6812409ff4b55359c641499d93eb058e3f9e04eeb5538fc69426986ce70f301c314e0505342ef0864a5a5cf208360d5dcde66ee0cebcf11418d5795fed11020d7f3fbf11826d5eedb2acde4acbe857fa7bc0354ecb0af1587fa0ce00ed768dff9718fbfe7809b2b828f0f6e3f21fd6aff055545b7cd5434a6d1f750f2203edfeece06920b854b516fab570fc25aa977c1ad38266e4eb41027095f8f2dfb0bfa88085ab0a3242420c634b84122105adc7976d2af335dbeada7da3872a7021ffc90d2c6b7f4eaa86aa483734932f1dd517b5da36952ac52b089230759eeb9d43f62f93e563fe28050000",
    ],
    [
      "ETag",
      "L8173RH7pLMY4FRhA97bsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:29 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1626997768481"
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
      "0000000002ff8d904f6f824010c5bfcbf40aa9128b48e2411ad3921863b19e8c312b0c080243f78f0d317ef7ced2a6a71e7ad99d7df39bc97b7b834bd96610c2a92c3e0ccafea140fd668b0495a9b5e2aba3562138805a144cc6917fadb69bde78c1a3a9cea35d1697de623e6742a5676c048437c84bac3305e1fe06ad6890c74443a6d50ce9beb3ef78fdbe7c59262c34945961bd5bad16d16a0977e777e878ec2eff1a39dc1da8e894608e12db14ad874e5285a98e6d3c259aae46579191292a18e0a15148329d90442e2bee74e48e7dcf9fcda6533f980463066b4a852ea96576b7656fa0498b3aa14f4e071e03722839683e9c57969f860cd701b0d6feee8d6deff0b330ea35aa8d2476a7d01a9b04a36f9bcf64ad6b8ea4a5410752c1bffc5a6a0873512bbc7f013934c99cc3010000",
    ],
    [
      "ETag",
      "IB6vjSPyu28/ujh0UdIi2A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:30 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb64ad0e6da490ee04da0610327c5474c3400c10d012c34fecf4ee757a84f77e404629ebbab46f1bf60ddec19cbda2155db94237cc80c39da807dd093212a5615c8adc89fccde112c8243c2db75695ed43473585ceaef5f2ab9ab0bb2d0ab2b12cadc9e5258f0e38187d329da7d9421c6946f501d723d1ed9732321f735cc2fc3ab6de3d43256ee2026942256e1df1137d506ff0afc2de5d524ff0b79c0ba56037bfe50ade88d8973daceaa1ac6f1676d72cc4b5977c56ad76ebfb03de8ba63d8e3639774e6b268a21f32086c9f6380e14b20e2c00bb0b2e5997f22717aa082dc0bf3ded67c19e0106cb2493e0f70f1227d7c71a010000",
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
      "Thu, 22 Jul 2021 23:50:30 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-71-1626997768481",
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
      "535d6f9b3014fd2bc87b5c13484280448ad62ca56bd44036425a4dd3846cc750b7802936ada22aff7d17d374ad2ab54fd8bee7dc73ee074fe88e973b34458467f70dabf75f6e05412788299cc1ebde0af0fa6221be5ff2af9328103c26f3ea713603046f59121755ce7a5234356572baddf4b35a3415ae85e841a29e3be80d9ca13399b8aee3d9de007892e5e98a9777c0be51aa9253d33c6af73321b29ce18acb3e15c5cbbbf93034ab5adc32aaa4f956d20415697e2cfa2d17142b2ecad97603061ac9ea841598e760e13f73474edfa6ee735cf433003f70ca30a5a229556b0b525051a63c6b6a9d154d9f90b6f9ea8036feca5fc4061579539449890b7662ecb0c289da57cc388fd681b10ccfd751308f97eb30d92c2efc60de5fac57db20dc18d7177ee41b0a939c69ae31334ef52d840be8ef9854bcd4ea71fbdc2a3f3768f97e2c2d01a425eb82896b3978e05913921297a6de684c528b11e211778c47c4a2139bd93bc230f0b4a866e15294ee8852ecd071623bc334b12d9a26de604892c16468b9d4b153e279e870821e6baed819979590bceb10ba8e96b19fc4d1365ccc635f9790e22657679db1b680d71e151408a00f6a3ab4512e40a96df7328cfd68be8897577e37e115cb30dd6fee61c629ce250334aea1798ad581d841c350380ffc3300eb89fd3c06259afe79426dcf5b17af5afe428f6180ad5da5bf681347cbf087b673445ce1bcd19087ee802ab07c03b581ebc35f40c2927659d0afad1ffd46dd53c45256b3927e3e4d00ebc0a7ffda71f1010bab0f3252c11d7687ca5684d6acdb21aecb7d667b23cbb65ca4c1b57a171b0fed63d7da1c6d4656b0523d57d42d3e14da8935f2050441187fa8bb75f807456cd7cc78040000",
    ],
    [
      "ETag",
      "y0MaOHCoBKi+9RMoiTbApw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1626997768481"
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
      "000002ff8d92614f82501486ffcbe92b6c6a86cae6074c331b5a09ceb6e6dc150e880197eebdd498f3bf772e99b56aab2f70cee13997f77d610f4f491e820d9b247e2e51546731aa7b5dcc5196a992742b782e110c40c56222abc5d21d5a4e6f9c3fa865ebdc6f4fbd1bd7e9f78990c1163306f61ea204d35082fdb8879c65486b014fcb2c5fd79d01aa2af4d0f3e793d998fa8c87ba9f2d5cd719b8233818a7c59029b6aef97facad0e06ecf8668e110acc03d45a0ac17718a889b6295956a4684a5e8a0025d470fd2016bc2c98e0dca489d9699a4dab65f57a9d8ed56d779b04a63c602ae139b10b8ff481e28aa573fe4a2ec12240d425198eeaeb0b8d93b036a2cbc9ccb7dab5beaf00498b9214d77f83a477cbe8337c60c708be732ce365ae4ed4957bebfc761c65fa79d4d0f1473f08a928a913e24fa623cf77a6779a5b1dbd0f2a85f24e700a52a2ceb0d968772f3a56e33dd64baea3a6f7d84a946840c0e8efb84e14d8114b251ede00567baf847b020000",
    ],
    [
      "ETag",
      "yUWLD6A9GnXtW23T4MSJLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:31 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1626997768481",
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
      "54",
      "7f",
      "4f",
      "a3",
      "40",
      "10",
      "fd",
      "2a",
      "dc",
      "de",
      "3f1afb034a5b6893c6e32aa724957a946acce5d22eb0d45560915d348de977bf6111b5e79d2624303befcd7bb33bcb13baa35984c628a09bfb9214dbafb72c402d4404dec0eab6d8aac6f4eacc3ad2e8c82747b78f83d0b1261340d08ac5719a27a4cd595984848f978bcea660658e0bc6da50a86df4dadab0371c8d0c6368f64d0d789c24f18c6677c0be1122e7e36eb7d1ee6c18db2404e794774296beac771f7addbc60b72414bcbb2fd90515defd58f438612116946593e5020c949c142b92629a80855766147cdb2fdda138ed6c00fc404382c3909599a86c4189906531dd9485ac8ac64f48da7cf38116f6cc9efaca74be74fd83354e2bf2fa50c15c698296b2869e629a90158dd65566b5caef941fdefc1c32e0e00673c2d7cad599edd9caebd25af932518e15cb3d51f62b38aeb2745d7be12b07c787caa9375f5e28dfaff730603d225cd04c1af7719090caf4f3de3aef4fb4226001aa757265a843ac99ea288803238c4d7d10c42a0902333006580fd470d427fd28201878a2aa2e593863d950d7f5c888f59e160dfb71ac8f341dab6a7fa0aa6aa0f6cc281ec5184a1968d7428f0515e484f29c715a6f30baf21cdf5ef9ded29d5abe2ddb8871998893da5cd5c45b9f029a04d0077dedaa2c65a0549d96e3fab6674d7de7d2ae0764463638dc2eee6144629c7002685ce09408529cb308360d5dcc178eefcc5d6b060c79ea170d82a3f1afa75782bfcde52e0bf9460bdf73dc5369a0415ce2a4949087fa0359397845bb5debff652ccfb3ae411a1705de",
      "fe95837686fd8afe0f098997516db391d450a5d644bdbd688876bf77f0b4105caf5a0bfd5cdade35aa973c12938264e1e7c3046099f8f42fd15c59c0c2a505192e2086d10d79251216a41e619a4af335dbd435dd1c21092ec4bb5cdf1c346755d5a82a929464e2b9a3facaca6dab52257f01411226cf95c7b6fb038b829b3932050000",
    ],
    [
      "ETag",
      "yry07CWHA+1i9Te+jw5cIA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:31 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1626997768481"
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
      "0002ff8d90dd6a83401085df657a59a528a289908ba6a44d2084d634945242d8e86835ea98fd49919077efac2da197bd59c773be59ced9331cca368318f665713428fb9b02f58b1d1254a6d68a3f1db50ac101d4a260f274c4ca7fcca2f7fdf8edaef7e8766e16eb62326142a59fd80888cf909758670ae28f33b4a2415e130d995633a4fbcefe2f56afb3a759c242439915569be5f27eba9cc1c5b92eed76dde15f2bdb8b0315ed13cc51629ba2cdd049aa30d50b5b4f89a6abd15564648a0a0678300a49a61392c865c58d7cd70bfd703c8ea270148c3c066b4a852ea96576b3e66ca0498b3aa12f6e073e037218b9683e9c279683a1839dbc21da5fcfbf7abef5b6bf174e7b8dea5912a753688305a3e827e603d9e89a2b6969d08154f02bcf4b0d712e6a85976f8185c221c3010000",
    ],
    [
      "ETag",
      "vqej2Fd7Yb9W/y1o+HuISg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:32 GMT",
      "Server",
      "ESF",
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
      "00",
      "00d07fc9599c11cbd69bb22908180c4bb8302c01590a61a9829dfe7b9d7ec27b3f20c932324df1dc37a4039f604d58699b6d4d2a1e65587fa7e42394d2202c4d4891c872aeeac4ed4dbe14a7594ab9817782a285b1ecdd6cdbddc96b302a7a222c62d82326d54a53d8bfeace4388d8cc39c5593e4cbb5ee1be0e379377616fac0f1d95ad6313e8b5174bc485b54459d7b0a9c653baaacf2bc65015270df1baf1b411b260e8d9fe1ce5be79c70adda30807f51d129f65c6a165652babcef9833bb0afe85a08f014512c36a46c0ca44b25ba2a03061b40165a8d648aab3777cf49d206fcdbe379a5e41d7024c94846f0fb0776955f201a010000",
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
      "Thu, 22 Jul 2021 23:50:32 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-73-1626997768481",
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
      "f6ab7dd1164a93666d2a2a494b772955379b0d19860b8ea50c3283ae31fdef7b19acab31d14fcccc3de79e731f3c931d2f12322531cfee6ba89ebedd89989c105034c3d7472bdded46a677b1c895babb296eb67faf768fb3192278c392745fe6d091a2ae18c8e976d3cd2a5197b412a283893af6b033b04ccb716cdb9a8c2603e449c8d3252f76c8be55aa94d35eefa8ddcd84c872a025975d26f6afefbd07b35756e20e9892bdf7923d5491bdcf45bfe78251c54531db6ed0402da18a604f798e16fe3393f8f47dea2ea7fb6e86e007ce803226ea4235b630051345cab3bad259c9f499689b6f0e64e32edd45683091d7fb222ae81e4e8c842a1aa9a7128cf360bd323cff7c1dace6a1b7f6a3cde2d25dcdbb8bf572bbf237c6f5a51bb886a2710e9a6bcc8c537df3f182fa0948c50bad1e36cf8df24b83bc8f636908282da10d4676dfa28349df89d3d866e964388ed33ec4f124b6c77418f7993382511203459e16d52c5a888226636621271ac0681c8dc64327726c6a470eb50683be998c4dd3218713f2587105675c9642f2b643e43af042370a83adbf9887ae2e21a575aece5a634d016f3d2a2c10419fd47468a25ca052d36ecf0fdd60be08bd2bb79df01232ca9e36f738e394e612104d2b6c9e826a25126c18f1e72bf70cc17a623f8e4149a6bf9f49d3f3c6c59b96bfd2431c606357e92fd98481e75f683b47c415cd6b0d79680fa444cbb7581bba3efc41242e699b85fcdcbac12fd23e0590420505fb7a9a08d6812fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb7d614f",
      "86a63971880657ea436ce858c7ae35399a8cb08742bd54d42e3e16da8ad5f21584411cbfafbb75f80703a7209878040000",
    ],
    [
      "ETag",
      "w6fkk42IGClttjXnXUxVkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:32 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1626997768481"
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
      "c2",
      "40",
      "10",
      "85",
      "ffcbf85a22682dd0840710d4466e969290184396765a8a6db7ee452584ffee6c45346aa22fedccf49bed39a7ddc1635a44e0c22a4d9e348aed4982eace143e4a9d2949b7921712c102542c21b2bde8097bd53f9de8d1ad5693a963bf2e8aa4d32142866bcc19b83b8853cc2209eefd0e0a9623ad853cd379b1ac3a0bd4b634c359e07be36bea731e997e3c1f0ebbbde100f6d67131628a2d2bfe1f6b0f7b0b367ce5638c028b108d9652f00d86ca333625cbcb0c6b926b11a2840aae1e2482eb9209ce6b34a935cf6b0de7cc69b79b4da765b71a04663c642ae505b1f319e903c515cb7cfe422ec121405425198eabeb338dd3a832624a6f1c3876a5ef2b40d2e234c3e5df20e95d33fa0c1fd82182ef1ccbb92ed491ba1a4ebabf1d47997e1ed5ef06831f845494d41109bcd16016744753c33d1cbcf7b60ae554700a52a2c9b051b75b174da7fe1eeb253751d37b5c25345a1032fa3b6e52056ecc3289fb37ac39b0257b020000",
    ],
    [
      "ETag",
      "9XBr4bD/OuMKutOP64xXng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:32 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1626997768481",
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
      "00000002ff8554fd6f9b3010fd5798f74b2be58b7c0089147569ca5aa694b484a48aa629318e49dd02a6d8748aaafcef3b4c699b756b252438df7bf7ded9679ed03d4b36688002b67dc869b6fb7ac703544354e22dac2e3cdb4882966b9e8e2f7edc9df3bba5f37d713d1c0282152c81e334a275c1f38c503198cf1adb8ce729ce38af43a1bad9adeb46dbe8f74dd3b0ba960e3c41a370c2927b60df4a998a41b3596937b69c6f238a53261a84c72febcdc77633cdf81d2552340f259ba0229a1f8b9e449c60c978329ccfc0402e68b6a23166115878656e826f87a51b0cc78d2d801f19a198109e27b2b00525084f42b6cd3355150d9e90b2f9e603cdec893df6b5f174eefa476b1c17e4f5b186855605356d0d3d852ca22bb6591799d52abdd7be7bd34bc880835b2ca8586b3717b6676baf4b6bedcb503bd146ee997658c171b5b9ebda335f3b3a39d6cebde9fc4a3b5d1e60c0fa860ac91265dcc741440bd3cf7bebbc3fd1828025a896c995d932b06eb5fa41189824b43abd206cd120b002b3873b418bf4bbb4bb0928069e2caa2b164e784202a2f7adb641f56e685aa6d56a079d70830d9d901e0566d8efb6ba61af8ff635f43b63929e319172c1ca0d46379ee3db2bdf9bbbe3916fab36429c47f2ac345734f1d6a7842601f4415ffb22cb382815a7e5b8beed8dc6beb3b0cb0199d02d26bbd9038c48882341018d331c5349b34bbe814d4357d399e33b53773401863af5ab0a21d0e0e7d32bc1dfa56a97a57aa399ef39eeb93250211638ca15e4b1fc403805af68bfaffdbfccc8f3464b90c65986777fe5a01da35bd0ff21a1f02a2a6d56923a2ad4aaa87d101968ff6b0f4f0dc1f52ab5d0f5dcf696a85cf26848339a90cf8709c02af1e95fa2bab280854b0b3242420ca34b442142325a8e308b95f9926d753a2ddd400a9cc97739bdd3aeceaaa85154a4314de47347e59555db56a472f10282244c9eab8e6dff070fb72e4732050000",
    ],
    [
      "ETag",
      "VRE6nb0N7BCHJjGojYIFVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:33 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1626997768481"
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
      "90",
      "5f",
      "4fc23014c5bfcbf5758b01e7064b7800c54942884e8889869032eee6a0eb9d6d875908dfdddb69888fbef4cf39bfdb9cd3131c4ab58318b665f1d9a06eaf0ab4cfee90a269a435bcd5a40c82076845c164dade27945cbfd1f2d506372a7948e561311e8d9830d9075602e213e425ca9d81f8fd044a54c863a2a24659866c5bbbfb6cb19c26d394858a764e58ace6f3f1643e85b37719da6ceac3bf46d6670ff6b44d31478d2a4397a1d6b4c7ccce5c3d23aa5aa26fa8d1191ae8e0ce283435b5d0443e2b7e14f8bdb01f0e8751140e82418f414999b0252966572f9c0d2c592153fae276d0674077472e9a77eb91e5dbaec3b1035cb4bf5e78f17ace5bff3e38692d9a274d9ccea00b160ca29f9877e4a25bae6475831e64827ff9b1b410e7421a3c7f039901ae9dc3010000",
    ],
    [
      "ETag",
      "RyDGoG/ZoTWt43nGFRlkNA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:33 GMT",
      "Server",
      "ESF",
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
      "d04b7282300000d0bb64ad4e8a564d77c50045c26007c1e8260321513e120a564c3abd7b9d1ee1bd1f90712e8681dd542d5af0067466a1199f05dddade7c5e365ee8e7ece439df2cd6cc32119cfb2ab1308ce3a072a54a332a8bd055d76119359e2944f07e27e5510cc157894d7e5679542f1610133f68cc08d386697eec6c7a47a423d53e611a2de159912dac15defa1fa47954ab6ae9b6635a9c774d2fdbdd21e68a5a7884d8c5b539c9cbb5c689ee91983a95b1e8a15a6b87d369be42518364044936986deaede8fe851e6598b887873ce565be4a5b578e6002c4a32b7b31b0f2c99dbf223401ff7676d39d7806d822eb450f7eff0034dc16dc1a010000",
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
      "Thu, 22 Jul 2021 23:50:33 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-75-1626997768481",
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
      "6f9b3014fd2bc87b6d02841048a4688d52ba2205b20269354d1332c650b704536c325555fefb2ea6e95a556a9fb07dcfb9e7dc0f9ed103ab73b440192b1f3bda3e7dbbe7193a4354e2125efd6b7e201bb1d1a74970631316dc1b66bc5a2e01c17a96c0fba6a223c1bb9650b1d8c5e3b2e55d835bce479068e4d823733699cde78e3373a7ae093c41ab62c3ea0760df49d98885ae9fb4c725e7654571c3c498f0fdebbb7e98e84dcbef2991427f2fa9838ad03f17fd5e718225e3f5721783814ed036a57bcc2ab0f09f9967e7ef538f19de8f4b001f18a19810ded5b2b7052908af0b5676adca8a16cf48d97c7340b1b7f1d6894678d5edebb4c67b7aa6e558e2543e3554bb8cb681e68797db285825fe364ce3f59517acc6ebed661784b1767be5459e26715651c5d596dab9ba857001fd9c0ac96aa59ef4cfbdf24b83fc8f63e909202de8104c1d63864dd7986745e690c2b5ecac306896b99963632b33c87c4aa7794631f094a862e19ad7b94d8d89e3baa96912239dce26569a392e9cec8c5a8665da242fd0f10cfd6d99a4174c345cb0a143e836f2132f4da25db85e259e2aa1c05d252f06637d016f3d4a2810409fd474eca38c8352df6e3f4cbc68b54efc1b6f98f08696983cc58f30e3025782021ab7d03c49db80e7d03014ae02ef02c06a623f4f418116bf9f51dff3dec59b96bfd21318606f57aa2f8a93c80f7f283b27c40dae3a05390c07d480e53ba80d5c1fff00129674c882ae775ef40b0d4f112d684b6bf2f53401ac025ffe6ba7c5072cac3ec8080977d81d227a11d2d26187982af785ed5a96ebcc9002b7f2436cee58a7aef539fa8c744f6bf952d1b0f850e820d68957100461fca1ead6f11feab97c4178040000",
    ],
    [
      "ETag",
      "IQovcLsL/4TMV5ciMj01SA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1626997768481"
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
      "000002ff8d92416f82401085ffcbf4584cb45554120fd8626ba256114f8d312b0c88024b77171b34fef7ce526b9bb6497b8199e19be5bd0747d8c5590016ace3e8a540515e45a866ba705116899274cb7926110c40c5222277cea02bf7ce2072cbf2209ddbf1223f5ccf7a3d22a4bfc19481758430c62490603d1f216329d29acf9322cd565567802a733d9c7bee70f2407dca03dd4f16a391dd1f3970322e8b01536c55f1ff585b9e0cd8f2b58b210acc7cd45a72c1b7e8aba1b629599a275893bc103e4aa8e0ea4124789133c1798d26b576abd6306fcc6eb7dd363bcd4e83c084fb4cc53c237631277da0b86289cb5fc925980488aa24c36175ddd3380e2a23ba1c4e3cb359e9fb0a90b4304e70f537487a378c3ec307768ee03bc7525e64ea420d464ff66fc751a69f47dddb9ef383908a92ba20de70eccc3d7b3cd5dcf2ecbd5f2a9453c12948893ac346bdd969b5cdfa7bac775c474defb19428d0009fd1dff1182bb04296483cbd01b142842c7b020000",
    ],
    [
      "ETag",
      "kEF9svEFgRyyzsE3MUpz+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:34 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1626997768481",
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
      "02ff8554fd6f9b3010fd5798f74b2be50392f0914851c71ab622a5a423a45d374d890143dd024eb1c91455f9df7786a66dd6ad9590c0bef7eebd3b9f794077b488d1088534bdaf48b9fd78cb42d44244e014767f4c03bbdb3f13829ff736fec4f87ee626813d1e03824a16c7f93a236dceaa32227cb49877d292556b5c32d686446dd3686b46cf180e4dd3b00696063c4eb2644a8b3b60df08b1e6a36e77afdd49194b3382d7947722963fed7737bdeeba64b72412bc7b28d90515de7d5bf4246311169415e3c51c0c549c944b92639a818567661c7e3a4cdda138efa400ded088e028625521a42d4811b122a16955d659d1e801d5365f7ca0b933754e03e574b6f082a315ce257975ac60aeec172d6505352534234b1aaf6464b95cdf295ffcd93944c0c10de684af94ab33c777146515634156ca87b172a2d8de443964bb9eb2f03c671e284727c7ca577fb6b8503e5f1f60c0764cb8a0456d3ac06146a4e1c7bebaaf4f5312b000134d7069aa06d62c751826a11925565f0f139584a1159a3aee876a341c90411c120c3c21b3d72c5cb0428b13ac87388e3423d474ac9aa66a0d75621871621a896e99ba6e6a03b587762df4bba4824c285f334e9be6a22bdf0d9c65e02fbc533b70ea32125c6562d2989345bcf429a04800bd51d74e462903257952ae1738be7d1ab8974e331c5392e2683bbf87f14870c609a0718973224879ce62681aba98cdddc09d79f61418f5895fec111c8d7e3e3c1382edbaeeb2a8df68220bd8bd487889b3aa066c9a0fd4537b6a5bedb5351ded76adff67b27ddfbe06755c9678fb570c2a320692fe0f9d1a5faf1aa77b5d0d49b52717072b03ed7eede06921b85d8d16fab670fc6bd46cf924212529a2f7e709c075e0dd9fc4fec60216ee2cc870016b98de884b91a824cd14d3bc36dfb0adfec0b086a80697e255ccea5bfbe3923964469293423c56d4dcd8ba6d3254f127100461f83cd7fb0ad13f7dd1bdef31050000",
    ],
    [
      "ETag",
      "ZLTA/3HttsM2vRD6XHIfTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:34 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1626997768481"
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
      "0002ff8d904f4fc24010c5bfcb786d132150a0090750a24442b0428c31862c655a97fe99ba3b8554c27777b61a4f1ebceccebef9cde4bd3d43a6cb3d84b0d3e9478da6b94a911f5d11a1ad73b67255545a040f90552ae49a3ef50bf7b35b9dad9acdf3c3441f8ad3643c16c2c6ef582808cf9068ccf716c2d73394aa40195305d5250bc44de5def3e57a76378b442868ef84e566b1984c1733b878bf43db6d95fd6be4ede2c18176112668b08cd179a80c1d30e6b98b675551e5e85baa4d8c165ab86da486ea4a19225f147f10f89da01b8c46834130ec0d3b02e6142bd6540abb79126fc0c42a8fe824e9a02b80694b099ab4e751e47e9be1d802cedadfbd8eebbdfd2c9c368c766548dc5974c67ac3eb6f9b37e4acb3446253a307b1925fbed70c61a2728b972fc84c55d0c3010000",
    ],
    [
      "ETag",
      "ToziYt5kDikPyUWKAijmwA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:35 GMT",
      "Server",
      "ESF",
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
      "db",
      "72",
      "43",
      "40",
      "0000d07fd9e7c8c46595be9524086a34c4f262162b91ee22cb083afdf766fa09e7fc005c966418f2b1fb262d78070b96f46db9757bcd30c3db93266ea52b425d74eabe427ad31cf85755b5ee282c6607a707b7ee07849ed0e4936c157a98c54e7ba14a52fa7be953624e51c51d7a18aecd495074d9d56638d6163ed503a654f26f820315715edbe38cd62733e050681fb84977e77ec5626fdb732af33172efb39455ad1776cc8fa3c9837c6138d2d089468b7249de2c31f455cd94212d932b4bce1499bbb16898e9a9a7c087727a9c03588e358ac10690b96f3819f2e6c595a1ae6fc0bf3d1f979ebc020c8239e1e0f70fc237cfef1a010000",
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
      "Thu, 22 Jul 2021 23:50:35 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-77-1626997768481",
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
      "8553db4ee33010fd95c8fb4a6fb469924ad552b5012ab5299ba6a0d56a15d9ee2418d238c44e5185faef3b71280b4282a7d89e73e69cb9e4853c8a7c4b468489f4a982f2f0e34132724640d3145f13f7be1c1ea6b3c9f5557f35d353258a9bec793c4684a8598aee8a0c5a4a56250735daacdb6929ab829652b63051cb715abde1f9d0f31c67e80edc1ef21464c942e48fc8bed7ba50a34ee7a4dd4ea54c33a085506d2e776fef9dfd79a728e50370ad3a1f253ba8a23a5f8bfecc24a75ac87cbc59a3814a4119c38e8a0c2dfc676ed9c5c7d46d4177ed14c17bc181722eab5cd7b63005977922d2aa3459c9e885189bef0e64ed2ffc6964719955bb3ccee90eceac2dd534d68702accb70b5b4e6c1e52a5c4ea2f92a88d7d36b7f39694f578bcd32585b77d77ee85b9ab20c0cd71a5b17e616e005f5b7a0b4c88d7a543fd7caaf0d9a7f1e4b4d4069054d3076ba43da73bb1e4b98c313b76fb3a40b8cb9ccb1699f75b93780c19601459e11352c9acbbcd707bbeb393cf66c9bc583aeedc61e008b79cf1ef6988ddd4e6c723c23cfa5d03013aa904a341d2277e13cf2e328dc04d349e49b12125a657ad618ab0b78ef51638108faa2a6631d151295ea76cf83c80f27d3687eeb37135e404af961fd84334e68a600d1b4c4e6692897728b0d23c164e9cf106c2676730a2a32faf342ea9ed72edeb5fc8d1ee1006bbbda7cc93a0ae7c195b17342dcd2ac32907d7320055abec7dad0f5f12f2271499b2ce4d7c60f7f93e62984044ac8f9f7d344b0097cfbaf9d161fb1b8fa28a334de7177b8aa457809cd0e0953ee2b1b1762d81d10032ef5a79873ee9dba56e7a833c20e72fd5a51b3f858682356a937100671fc81e9d6f11f019fc3f978040000",
    ],
    [
      "ETag",
      "f8hr6yCDAHG3ODtCsipPlw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:35 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614f82501486ffcbe92b2e2d0365f3039a164b4d11db5a73ee0a07c4808bf75e6acef9df3b97cc5ab5d51738e7f09ccbfbbeb087e7240fc18655126f4b14bbb318d554171eca3255926e05cf258201a8584ca4f778279be88fceb7bdcb71e64ed7edc1432bee748890c11a3306f61ea204d35082fdb4879c65486b014fcb2c5f569d016a57e8e1ccf7dcf10df5190f753f9e0f874e77d88783715a0c9962cb8affc7dae260c086af3c8c50601ea0d65208bec140b9daa6645991624df2520428a182ab07b1e065c104e7359ad42cabd6302fcc76dbb2cc56b3d52030e5015309cf899dcf481f28ae58eaf15772092601a22ac970545d5f689c8495115dba63df6c56fabe02242d4a525cfe0d92de35a3cff0811d23f8ceb18c97b93a5183e1bdf3db7194e9e751d78edfff414845499d10df1df567be339a686e71f4dedd299413c12948893ac346bdd9bab2ccfa7bac3daea3a6f7d84a946840c0e8efb84d14d8114b251ede00bfe984b07b020000",
    ],
    [
      "ETag",
      "RYKs4eTM/qC3NmIQh9FV8g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:36 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1626997768481",
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
      "0002ff85546b6f9b3014fd2bccfbd24a7900098f448abaaca52d524232425a75d394186352b704536c526555fefb2ed0b4cdbaad1212d8f79c7bcf7df184ee591aa13e0ad9eaa1a0f9f6f31d0f5103518957707b91fa99a55f5efeb285dbed18f6663a3af71f070340b09225f03a4b6853f0222754f4e7b3d62ae7458673ce9be0a869d94dcdd4cd5ecfb24cbb6b6bc0133489472cbd07f6ad9499e8b7dbfbd8ad15e7ab84e28c8916e1eb97fbf6466f6739bfa3448af661c8364411edff073d4938c192f174309f818042d07c41d7982520e19519855f0e5db7185eb75600de30423121bc4865290b5c109ec66c55e49557d47f4295cc371f68e68c9cd340399dccbde06889d7257979ac60a1ec0f0d650939c52ca10b162d4bcb6291dd2be7fe640c1650708b05154be5fad2f11d45590a09ea96caa78172a20cbd33e590ee7acadcf39c59a01c9d1c2b17fe643e55bede1c60407744856469a53ac061424bc5cf8575dfb7b32460092a6ae3c2524dacd96a2f8c438bc476c708639586a11d5a06ee842ae97569370a29069e2cbd572c9cf234d4e3b867c451cfd2d5a86710d530a2aea691d0d6432b56bb540ba9d92106da35d063ce243d6322e382d5d545d7be1b388bc09f7ba7c3c0a9d2887191c8b35a5c99c45b9d129204d07ff2da9556c62152d92ad70b1c7f781ab8574e3d1d23bac2643b7b80f988712228a0718ed754d27ccc23281a9a4e666ee04ebce1081855cba77b8440fd1f4faf84609b555596d51b05ee187a341c4f2b0d7bd0154e8a0ab5a93f90aeea6a53d59b9a11687a5febf4b56e4b55d5ef68b76bfcdbf9d0f787372008e739defe618324cd6e49ff4bd40a5f9d6af17b151a2aa3bd683a389968f773074f03c1c6d5b1d0b7b9e3dfa0facaa731cd694a3e1e310057860f7f1cfb2d062cec3184818d900c069a883208c9693dd86c5d89afd976c7343b1d548173f9ce6619fabe83a58fd2235dd3543e67546f7155b6d25488171018611e3dd7bb00eb6f4ab2e30745050000",
    ],
    [
      "ETag",
      "GnRp72HHz8sI4358vPLFRw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:36 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1626997768481"
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
      "0000000002ff8d90414fc2401085ffcb786d831084d28483280209a21609268690a59d9642dba9bb539010febbb3d578f2e06577f6cd3793f7f60cfbb488c0874d9a7c54a84f5709f28b2d023455c646ae920a83e000b24a84fc7c88e2657b64c6f3ddf2fe71bb7c6ad05be3d8ef0b61c22de60afc33c429669101fffd0c85ca51c6544e55c102f1a9b4efc9ec75381a0622e4145961b6984e6f07d3215c9cdfa1f5badcff6b64757160479b0063d45884683d949a7618f2c4c6332a2f33740d553a4403355c37124d55a934912b8adbf5dc66a7d5e9f5badd8ed7f69a0266142a4ea9107631176fc0c42a0be828e9a02580ae4b091ad7e741e49b3ac3a106acb5bf7b4ddb5bfd2c1c9c18cdb3267167d01a6b7bd7df36efc85a6789c4ba42074225bf3c4e19fc5865062f5f78eebef2c3010000",
    ],
    [
      "ETag",
      "xFdfW4GsHSjWDMhWO/oX/w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:37 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb642d0e0502a43b11814a95f0b1da15032491ff1f043bbd7b9d1ee1bd1f1025091d86706c0a5a8377b04602da265bbb55b5bd9b42ac4a872058b9b16401e59ea5d33d9bfc49d0edb38ad4b0ccc6e3414f3f2c7ff5213cd52e5e59e30b2c96dc25c5905953a7558666c6242733931f4e72b1ef9d6a50a3be3616d2d155a9d2523871c48608db7842b49b22af74726c0e0eb31401faf142666961a4c8b2c99cb17841bab20b1cbb4f9b9bea95050f47fd48265ed6c637b336effb2f84e2b347e42e0ece0e2f1394eb6d607fcfb5283e28d800bab4594f87307b714588d006fcdbc3716de92b40a3514f7bf0fb074cd8f9001a010000",
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
      "Thu, 22 Jul 2021 23:50:37 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-79-1626997768481",
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
      "4fdb3014fd2b91f795b66968f3a8548daa04c8d4a65b92c2a6698a6cd70986240eb10362a8ff7d370e652024f814dbf79c7bce7de409ddf26a876688f0fcae65cde3971b41d011620ae7f0fad30add6b7f4927dfb66ec23d12d173fbef623e0704ef58129775c10652b40d6572b68d877923da1a37420c20d1c0f10663dbb23dcf716c77e28e81275991ad78750bec6ba56a391b8d0edac35c88bc60b8e6724845f9f23ebab74675236e185572f45672042a72f4b1e8d74250acb8a8e6db180cb49235292b312fc0c27fe68e9cbc4d3de4b81ce600bee794614a455ba9ce16a4a0a2ca78de363a2b9a3d216df3d501c5feca5f260615455b5669854b7664ecb0c2a97aac9971166dd646109e6da2f5220936611a2f2ffcf562b8dcacb6eb3036ae2efcc837142605d35c636e9ce85b0817d0df31a978a5d593eeb9537e6e50f07e2c1d01a425eb83a963da78ec9a1ec9884333f7784a329311e212678a8f8949bd099bec08c3c0d3a29a852b515900b36c4a53db74b27482b32c25de649a8ebda99799536a52cb42fb23f4d070c54eb9ac85e47d87d05514247e9a44db70b9487c5d4286db429df6c6ba025e7b545020803ea869df45b900a5aedd4198f8d1629904977e3fe115cb317d8cef60c6192e2403346ea0798a356bb18386a170b1f64f01ac27f6fd109468f6fb09753def5cbc6af90b3d8101767695fea2388982f05cdb39202e71d16ac87d7f403558be86dac0f5fe0f206149fb2ce8c7d68f7ea1fe2962196b58453f9f268075e0d37fedb0f88085d50719a9e00ebb436527421bd6ef10d7e53eb3dd63676aea3f55e146bd8f79cea16b5d8e2e232b59a59e2bea171f0aedc55af90282208c3fd4dddaff03799f8f3978040000",
    ],
    [
      "ETag",
      "X2N8hECc4JU8Ti9bRcG6zA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:37 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1626997768481"
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
      "00000002ff8d92416f82401085ffcbf48aa91a0b4ae2415bb124682de2a931668541b10b8bbb4b1b63fcef9da5d6366d93f60233c337cb7b0f8ef09c1509b8b0ce36fb0ae5e16a83fad11421aa8a6b45b752140ac102d46c43647be2c5637fe1f126e3d9fedaf376c32879edf78950f1167306ee11d20c79a2c07d3a42c172a4b558f02a2f567567813e9466388f427f3aa63e1789e9a78b20180c83119caccb62c2345bd5fc3fd696270b76621d628a128b188d96528a1dc6da373615cb4b8e0d252a19a3821aae1f6ca4a84a268568d0a4e1f41a2dbb6df77a8e63773bdd16815cc44c67a2207631277da085663c14afe4126c02645d92e1b4bebed0384b6a23a6f4a791dda9f57d05485a9a715cfd0d92de2da3cff0819d23f8ceb15c5485be505ef030f8ed38caf4f3a8bb4134fa41284d495d90c89f8ce6d1603233dcf2ec7d78d0a8665250900a4d86ad66a77be3d8cdf7586f85899adee36a59a10531a3bfe33ed3e0a68c2b3cbd013b018e3e7b020000",
    ],
    [
      "ETag",
      "2MFcGIUFl0aliq/FFjBTdw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:38 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1626997768481",
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
      "00000002ff8554fd6f9b3010fd5798f74babe5fb0348a4a8cb12d621a5a4252455354d893186ba054cb1691555f9df7798266bd6ad9590e07cefdd7b679f7946f72c0dd010f92c7a2868befd7cc77d544354e20856a3227dfa729df5e245974defcd2bd15eddadae462340b092257092c5b42e7891132a86cb4523ca7991e19cf33a14aa9bad7a5befe8838161e866cf6c034fd0389cb1f41ed8b7526662d86ceeb51b11e7514c71c64483f0e4b0de7cec34b39cdf512245f358b2092aa2f9bee859cc09968ca7a3e5020c1482e66b9a6016970d1e9881fff5b87483e1a41101f891118a09e1452a4b5b5082f034645191abaa68f88c94cd571f6861cdac89a74de64bc73bd9e0a4246f4e352cb47d50d336d053c862ba66c1a6ccacd7d9bdf6dd9d5f40061cdc6241c546bbfe61b99676a0699f46da993676a6da31df76b4a5e3580b4f3b393bd5ceddf9f252fb76738401e3011592a5cab687fd9896965f76d67e7b9e25014bb05125d7464bc76db335f043df20a1d9edfb618bfabee91b7ddcf55b64d0a3bdc0a71878b2acae5838e569dbecb58d56bf1be200e356470f8ca06506440f82a04b06d427c4084262866857434f399374ca44c605abb6175dbbb667ad3d77e94cc69ea5da087111cb6965ae6ce2b54f094d02e89dbe76659671502acfca763ccb1d4f3c7b6555e331a31126dbc5030c48886341018d739c5049f30b1ec0a6a1cbf9c2f6ecb9339e01439df9e51e21d0f0e7f31f82b7cdd42e4bf546df67f3b1a7f794833d6485e342611eab0fd46ef401b1abfdbfccd875c737208df31c6fffca413bbaa2ff4341e15554d93c28a2526d1f758e221ded7eede0a921b85c9516ba5a5aee0daa965c1ad29ca6e4e36102b04a7cf88fd85f58c0c2950519212186d125a2142139ad469825ca7cc536bb66071a57e05cbec97507c6feacca1a65459ad054be74545d58b56d65aa1007102461f21cdb3987ec6fe01cdb7030050000",
    ],
    [
      "ETag",
      "gunw+Wp4lS3iDk8Qs1VjVQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:38 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1626997768481"
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
      "8d90416bc2401085ffcbf49a80b1a231e0414b6803416caa142952d6649246934cba3b5144fcef9d4d4b4f3df4b23bfbe69be1bdbdc2b16c3208605f169f1deacb5d81fc6c8b044d57b191aba5c6203880ac0a21a3384cfc815ea957758eb6db7d8c5eb69ecf664298f4036b05c115f212abcc40f0768546d52863aaa6ae6181f8d2da77b45c878f6122424d9915969b389e2fe2106eceefd0fb7b7bfcd7c8eee6c081f609e6a8b149d17a68351d30e5c8c633aa6e2b740d753a45033ddc370a4d5dab34912b8aeb0f5c6f3c1c4fa793c9d81ff99e8015a58a4b6a84ddbc883760625525749674301440f7a504cdfbf324f2a8cf70ea016bedef9e677bbb9f858b0ba35969127706adb1fbe1e0dbe60359eb2c915877e840aae4979f4a86205795c1db17ab485a60c3010000",
    ],
    [
      "ETag",
      "ILER80rPaWawIYYbLe1dTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:38 GMT",
      "Server",
      "ESF",
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
      "d9",
      "52",
      "83",
      "30",
      "1400d07fc973db61c00af10d904ab0c35aa9f29201bc65514a9ab0041cffdd8e9f70ce0fcacb1284a043ff0557f484965cc5bb72f7ca0ccb8eea2a5eba795e5aa6e8937485d2ea6c20602bfb0c82eaf69958f147d4bf2f19e1db39d44cc725fc92b653be3569643b9ad567a2fed60f782d9ac9caf5191e92145f6465bee05b7d029f5a05996ac8699c79734028f6a4770824311b2a42b7c5a3512f536a0f9d7f2d143b92be797bebda314cc691852439adbc108feb74f618d19dcaa9c5b3e3ca8eaf4d783c1691da1bfa395b1968c251b3ad88bd006d1048d67010b4b973b53dc61bf46fa7c3c2e01e6041ce81a3df3f105ca4631a010000",
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
      "Thu, 22 Jul 2021 23:50:39 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-81-1626997768481",
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
      "0002ff85536b4fdb3014fd2b91f795be4b1e95aa5195303ab5e94853189ba6c8716e82591287d86174a8ff7d370e652024f814dbf79c7bce7de491fce6454c2624e2e95d0dd5eed3ad88c8110145537ccd8bbbddf707757df3e3e1eb8ce77f83b2b86017d3292278c392342f33e84851570ce464bbe9a695a84b5a09d1c1441d7bd0199843d3712ccbb4c7f6007912b264c98bdfc8be51aa94935eefa0dd4d854833a025975d26f2e7f7defdb05756e2169892bdd7923d5491bdf7453f678251c54531dd6ed0402da10a21a73c430bff997174f23a7597d3bc9b22f89e33a08c89ba508d2d4cc14491f0b4ae7456327924dae68b03d9b84b771e184c64755e8405cde1c888a9a2a1da95609cf9eb95b1f0ced6fe6a162cd65eb8999fbbab5977be5e6e57dec6b83a777dd75034ca40738da971a26f1e5e503f06a978a1d583e6b9517e6ad0e2ed581a024a4b6883a1d537e9c0ee3b5112592cb147c751d28728b223eb988ea23e73c6308e23a0c8d3a29a450b515863db8906360b87c9d00ac7cc34437b343c0e631b229b0d47a66303d91f913f155770ca6529246f3b44aefc45e08681bff5e6b3c0d52524b4ced4696bac29e0a547850522e89d9af64d940b546adabdf002d79fcd83c5a5db4e78092965bbcd1dce38a1990444d30a9ba7a05a89181b46bcd9ca3d45b09ed8b7435092c9cf47d2f4bc71f1a2e5cff40007d8d855fa4b3681bff0be683b07c425cd6a0db96f0fa444cb37581bbadeff42242e699b855c6c5dff9ab44f3e245041c13e9e268275e0c37fedb0f888c5d54719a9f08ebbc36423c22a687788eb729fd8f6c819580ed1e04abd890d9df1a16b4d8e2623e450a8a78adac5c7425bb15a3e833088e3f774b7f6ff00d828f05a78040000",
    ],
    [
      "ETag",
      "mnqyXxtYhZxJAimzTpnQcQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:39 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1626997768481"
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
      "0002ff8d92414fc2401085ffcb782d09182cd884435154124084c24143c8d24e4ba1edd4ddadd810febbb315d1a8895eda99e937dbf75ebb876d9c05e0c02a8e9e0b94e55984fac114135445a215df72ca148205a845c4e4d6cd5e73773c1fdaf372f5f07c1eeda8f918753a4c287f8da900670f618c49a0c079da432652e4359f9222cd965567812e73339c7a93fee896fb9402d38f668381db1df4e0609d1603a1c5b2e2ffb1b63858b0a1d504439498f968b4e49236e8ebbeb1a9449a27585354481f155470f5209254e44212d578526b376a0dfbdcbebc6cb5ec76b3dd6030215fe89832666753d6079ab44826b46397603320ab920d87d5f585c771501931657fe4d9cd4adf5780a5857182cbbf41d6bb16fc193eb06304df39915291e9137533b8777f3b8e33fd3ceadaf57a3f08a539a913e2f587bda9e70ec7865b1cbd774b8d6a2c89835468326cd49bed8b965d7f8ff58a4cd4fc1e47cb022df005ff1d77b106271489c2c31bfc9a31757b020000",
    ],
    [
      "ETag",
      "kAnxpAPVM6VybQq2gwo4Zg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:40 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1626997768481",
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
      "547f4fdb3010fd2a962704486db376fd4525c40a64235a694a9a80d8841a377183691217db0155a8df7d6787c02a18fb7352a4f87cefee3ddf9dfd84972c8ff100cf59725f50b1fe74c7e7b886a92209ec3efe5cdb9ed594ee059f9c75ef0267d949bf3c1e1e0282e92849b2554aeb921722a272104c1b89e0c58a08ceeb90a8de6fd59bdd56f7e0a0d7ebf6dbfd26c4499a2e462c5f42f4ad522b39b0ac8abb91709ea494ac986c443c7bd9b71e5ad64af03b1a29696d535ac022ad8f498f521e11c5787e184c414021a998d18cb01424bc46c6f3afdba91b8c648d04c00f2ca2248a78912b2d0b52443c5fb0a410262b1e3c6123f38f059eda23fbc447276e30f6f74292e9e0701f11892aa3864238d382a574c6e2507b66b3d5127df3dc73f080825b22a90cd1d599edd9088ddc2bdbdb0b01ba8f46ce0f1b1da1e1f8146d2771c628188feda98ff68ef6d177cf0d26e8f87a0b03ea63ba2045aa4e890206a555c7e5d2d12d55542a003dd7db79db65bcd15ec60553faa4ced8b7bde189ef5cda6571473421d17a7a0fe55d90545240134132aaa838e7318590893b757cc71d0f4710612a36a910120f7e3dbd06f8eb15d50295f96bae6edbf057804b921606f1502ef04eb3b383379bdadf930c3d6f780dc44408b27e9fe05d0683375629b2626c62cd5659ad2dab8b37371bf86a1806b3e4c21781ed5de372cba30b2a681e19820f4a6ec0c6f1cffb550d3b6061dc81462ab0a56291d42491a0c6edb3cc882fa3fbedcf9d4e0f1bb0506f7dbd8e7e13f2f85dcf334761f25321b8f0a88401d326b049a385e5501378336a38a3529244a709723889a4649e5264c600bd541d85216239d26d41a17f3db167a635706b8e490c1ed56d2353e401d21dafd6bbdad8d58a8c8eb251ff49c34d59164d72ea8e6d98aadf954be9286d050000",
    ],
    [
      "ETag",
      "wZyER/1sOQoPH6jUIk5l3w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:40 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0497282400000c0bfccd95828b2e5c62e8250c30e176a980c0ac822101052f97bac3ca1fb07208cc93866535793167c82151d853dde9b3d2fc9b0a2cbf9256a140d552360ef30b8ad7d76e396a8a8e3af839686cd2cb0a726fae8ed79a9193a369d081fd96fbb2df58d5a5526ec607bb7168528495ec59aaae08e350e448d9e9c973fd051efca767ad8a178cef82b9fca9cd8f9917939e9c1d81abcab93b056923b6fa8d7b1d9cee8b2f295fcc4b970814ddce60937a7aee99791b361c79a57062d07046dd723350a0d33af2c377b40244914199b02dabe57801d20afbe1cc898956f2ecd08c20efcdbb369edc93b4022682003f8fd032b240b311a010000",
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
      "Thu, 22 Jul 2021 23:50:40 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-83-1626997768481",
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
      "ff85535d6f9b3014fd2bc87b5c939084008914ad594ad74809d90849354d1332e642dd124cb1495555f9efbb98a66b37a97dc2f63de79e733f782277bc48c884c43cbbafa17afc742b62724640d10c5f7d6b177e3e8c765f65103e2437e5f56134d8cda65344f08625e9becca123455d319093eda69b55a22e692544071375dc61a76f0fecf1d8716cd772fbc89390a74b5edc21fb46a9524e7abd9376371322cb81965c7699d8bfbcf70e835e59895b604af6de4af65045f6de17fd920b461517c574bb4103b5842a823de5395af8cb4ce2f3b7a9bb9ceebb19820f9c01654cd4856a6c610a268a946775a5b392c913d1365f1dc8c65b7af3d06022aff74554d03d9c19095534528f251897c17a652cfccb75b09a858bb51f6de657de6ad69daf97db95bf31aeafbcc033148d73d05c636a9ceb9b8f17d44f402a5e68f5b0796e949f1bb4f87f2c0d01a525b4c1c8316dda77cd719cc60e4bdde1284e4d886337764674189b6c6c8195c44091a745358b16a200cb8de3d81a44fd919b44964d071165ae1d257ddb017b64270eb5c8f18c3c545cc10597a590bced10b90e16a11785c1d69fcf424f9790d23a5717adb1a680d71e151688a0776a3a36512e50a969f7c20fbd60360f173baf9df01232ca1e37f738e394e612104d2b6c9e826a251268567bb6f22e10ac27f6fd149464f2eb89343d6f5cbc6af90b3dc401367695fe924d182cfc6fdace09b1a379ad2187f6404ab47c83b5a1ebe36f44e292b659c88fad17fc24ed5300295450b08fa789601df8f05f3b2d3e6271f551462abce3ee30d988b00ada1de2badc67b66b9963d3241a5ca97f637d73303c75adc9d164843d14eab9a276f1b1d056ac962f200ce2f87dddade31fb85ad1eb78040000",
    ],
    [
      "ETag",
      "N4VT+v5VBsRTwdhpWv52VA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1626997768481"
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
      "0000000002ff8d92d14ec2401045ff657c2d09281468c2435110124085a2268690a59d42b1ed94ddad0409ffee6c45346aa22fedccf4ccf6dedbeee1394a037060112d3739caddd912f59d29c6a8f2582bbe65942a040b508b259357c3ede6e1fc3e5df7a8d6d58faf0b5df7d06db59850fe0a1301ce1ec208e34081f3b4875424c86b3ec57992ce8bce02bdcbcc70e28dfba36bee130a4c3f9a0e066e7bd08183755a0c8416f382ffc7daec60c19a16630c5162eaa3d192495aa3affbc6a61249166349512e7d5450c0c583a5a43c1392a8c49352e3a254b1cfed66b35eb71bd54685c1987ca1234a999d4e581f68d2221ed3965d82cd802c4a361c16d7171e474161c494fd9167570b7d5f0196164631ceff0659ef4af067f8c08e117ce7444279aa4f547770e3fe761c67fa79d495eb757e104a735227c4eb0f3b13cf1dde1a6e76f4dede6954b79238488526c34ab9daa8d5edf27bac9764a2e6f7385ae668812ff8efe8451a9c50c40a0f6f98e023af7b020000",
    ],
    [
      "ETag",
      "DMwqW2VnjHo5FtXzbt7TeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:41 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1626997768481",
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
      "000002ff85540d4fa34010fd2b642f269af48b4af96862bc9ee249ac54816acce5d22eb0e02ab0c82e9ac6f4bfdfb058b5e79d264dbabbf3debc37b3b33ca37b5ac4688c429a3ed4a45a7dbb6321ea2022700aa7ba7dc6eaf474548723f7523df179f1105d3e1d1c0082362c8ef332235dceea2a227c3cf77b69c5ea12578c752151d7d4baaa3ed42dcb3074533355e0719225535adc03fb5688928ffbfd8d762f652ccd082e29ef452c7f3def3f0efb65c5ee4824787f5bb20f2abcffb9e861c6222c282b0ee63e18a839a91624c734030b6fcc38fcbe9dba4771de4b01fc482382a388d585686c418a8815094deb4a6645e367246dbe5b20df9eda478172349bbbc1ee12e70d79b9a760ae6c361d6509352534230b1a2f9bc86251de2b27deec1c22e0e01673c297caf5a9edd98a329d5ddbdeee6b00724d9d335b395426eeb1b29dca7195b9ebda7ea0ec1eee293fbdd9fc42f971b385811a62c2052d6405010e33d2b87f69b2f3f16a1b021620dc0617c640c7aa39b0c22434a2c4dc1f85c98084a1191a23bc1f0e224b235a1c120c3cd164972c5cb042372dd5304c53d5468358d5744027fb437d30d40d6b988ccc6864c56aac5968dd414f1515e498f29271da761a5d7b4e602f026fee1e4d025b9691e03a13c7adb9a688f73e051409a04fea5a3751ca40a9b936c70d6c6f72143857763b295392e268e53fc0ac2438e304d0b8c23911a43a6731340d5dcc7c277066ee640a0c79fd171b0447e35fcf6f846055ca2e0bf98ffcc073dc9fd2c0067185b35a421edb05dac165b983d6ebceffd34c3c6f7203d2b8aaf0eaaf1894a36b0dfd1f12122f77adcd8da48a1ab5cd6eb8b5d3d1faf71a7e1d04efacd5429773dbbb41ed914712529122fa7a98002c035f7e2e366f17b0f07a41860bd8c3e846bc11892ad28e30cda5f9966d6ab0901f1b812bf1216640533a6f6fb6c948725288978adab72bdbd6846afe0a82204c9e2baf6dfd079f23b88c3b050000",
    ],
    [
      "ETag",
      "6EKougH5ub5NQ1FSsnqcQw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:41 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1626997768481"
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
      "90",
      "4f",
      "6f",
      "82",
      "40",
      "10",
      "c5",
      "bf",
      "cbf40a07ad5124f150d0541363146b7a688c5971a0283074775089f1bb779636a6c75ef6cf7bbfd9bcb7373865e5017cd867e9578dba794a9157f610a1a97336b255541a040790552ae475fd1e4caf3abc5c575e1326e332588e391d8d8430f127160afc1b2419e60703fec70d4a55a08ca982ea9205e2a6b2f7d9e26df23a894428e86085c5663e7f09e613b83b8fa1ddae3afd6b647b77e048fb0813d458c66833549a8e18f3ccd633aaa872740dd53a46032ddc1aa9a6ba529ac815c5f57a6ea7dfed0f878341dfeb791d01738a1567540abb594b3660629547749176d01540b747299ab4eb59e4e7b6c3b9056cb4bf5ef7e175acb7fd7d306818cd5293a4336883f5bcc14fcc906c74964aac6b742056f2cbd38cc14f546ef0fe0d03442546c3010000",
    ],
    [
      "ETag",
      "xSWBHxrCwxQ8yCfDnBPDtg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:42 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00",
      "d0bb642d8e50b5d09d7c342de53b13086c3282517e4248c092767af73a3dc27b3fe05c965408320d2dedc11b9067cd58976b97e9a615dd60f55ed921fd8675731d397c45f8413a45e9ddfda675033e1766bc6feffe710867bd5d3a7c376f899c2ecd017d882c3ff64e8d730dd9585bf2cac1852afb8e0faa3cf0b8919fbb2bd2a64ca4fab6bf3ca293ef6cb12d6ef55cc0913949b4d72161417c4907556588f2231c915d9014da7881dd502b5fcbc997a9bc92d2f644d9c48d9a58c83b35de265bca5125110fb81b517dc7426da2516a75430856802eace65490fac97dd919c60afcdbc924197d0698f4cc2907bf7fa153c27b1a010000",
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
      "Thu, 22 Jul 2021 23:50:42 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-85-1626997768481",
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
      "da",
      "30",
      "14",
      "fd2b91f7b5bc210f24b422485724086b08eda6698a6c7393ba0b711a3bdd58c57fdf8d53ba5695da4fb17dcfb9e7dc471ec92f91efc8983091de57501e3edd4946ce08689ae2ebeaef1f155e5edd7ef361ee05f7c3a2cb0f8774324184a8598aee8b0c5a4a56250735de6eda6929ab829652b63051cb1db57a76dff63cc7b1dda1db439e822c598afc17b26fb52ed4b8d33969b75329d30c6821549bcbfdf37be7a1df294a79075cabce6bc90eaaa8cefba29f33c9a916329f6c3768a05250c6b0a722430bff993b76fe3a755bd07d3b45f083e040399755ae6b5b9882cb3c1169559aac64fc488ccd1707b2f197fe2cb2b8ccaa7d1ee7740f67d68e6a1aeb4301d645b85e598be0621daea6d1621dc49bd9a5bf9ab667ebe576156cac9b4b3ff42d4d5906866b4dac73730bf082fa3b505ae4463daa9f6be5a7062dde8ea526a0b48226183b5d9bf6dcaec712e6f0c41d8c58d205c65ce68ce88075b93784e18e01459e11352c9acb9cb93ce13b66c74e32a4f170d0e3b137e25e6c0fa893382ee35e3721c733f2bb141ae642155289a643e4265c447e1c85db60368d7c534242ab4ccf1b6375012f3d6a2c1041efd474aca342a252ddee4510f9e174162daefd66c24b48293f6cee71c609cd14209a96d83c0de54aeeb0612498aefc3982cdc4be9e828a8c7f3c92bae7b58b172d7fa64738c0daae365fb289c245f0c5d83921ae695619c8437320055abec5dad0f5f1272271499b2ce46aeb87df49f314420225e4fce36922d8043efcd74e8b8f585c7d94511aefb83b5cd522bc8466878429f789ed0efba3be470cb8d46f62f66070ea5a9da3ce087bc8f55345cde263a18d58a59e4118c4",
      "f107a65bc77f2e02fe5e78040000",
    ],
    [
      "ETag",
      "MzxsRHQhXEeD9Nq4p0cyyg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:42 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92dd4ec2401085df65bc2d493150a00917fca92405a1941b0d214b3b85e2b65b77b71a427877675744a3267ad3ce4cbfd99e73da233c6545023e6cb2ed7385f270b5453d374588aae25ad1ad148542700035db1239682e1ab364e0ba49cc83321f3ee851c6e7dd2e112ade61cec03f429a214f14f88f4728588eb4160b5ee5c5da760ee84369868b281c4f6fa9cf4562fae932087afd600427e7b29830cdd696ffc7daeae4c05e6c424c516211a3d1524ab1c7588f8d4dc5f292634d894ac6a8c0c2f6c1568aaa6452881a4d6aed66adee5d7b9d4eabe5b51bed3a815cc44c67a22076b9207da085663c14afe4123c02a42dc9706aaf2f34ce126bc494e369e435acbeaf00494b338eebbf41d2bb63f4193eb07304df39968baad017ea26b8effd761c65fa79d4b0178d7e104a535217241a4f468ba83799196e75f6de3f6854332928488526c3badb68375b9efb1eeb4098a8e93dbe96153a1033fa3bee320d7ecab8c2d31b02aa09b67b020000",
    ],
    [
      "ETag",
      "C5S4PdC00dclLpmDZtEilQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:43 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1626997768481",
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
      "54",
      "0d",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2b",
      "c8",
      "53a556cb17090112a9ead294756c29490969154d5362c050b78029369da22aff7d8769da66dd5a0909cef7debd77f699477447b3100d914fe3fb92149b4fb7cc470d44048e61f5aa1f2fd5d9f7cbcf9b596e9cce47978b9e1ac6c7c780a0158be3344f4893b3b208081f2ee6adb860658e0bc69a50a869ea4d55efea838161e8a666aac0e324892634bb03f68d10391fb6db3bed56cc589c109c53de0a58fabcde7ee8b6f382dd9240f0f6be641b5478fb7dd19384055850961d2fe660a0e4a4589114d3042cbc3043ffcb7ee916c5692b06f0030d080e025666a2b20525029645342e0b59150d1f91b4f9ea03cdad8935f694f174e178876b9c56e4f59182b9b20b1aca1a7a8a684256345c5799d52abf53bebad30bc880831bcc095f2bd7df2cd75294c9f4da720f9f13506b62ffb0941365e49c29fba56c4759388e35f794c39323e5dc9d2e66cae9720f033d84840b9ac90e3cec27a472ffb4c9f6dba3ad085880709d5c191d1dab6667e047be114466afef471de2fba66ff471cfef04038d68a14f30f044555db270c632dd1ca886619aaad6ef84aaa6033aea75f54e573706dda86f06fd41a886da006d1be877410539a33c679cd63b8dae5ddbb3569ebb70c623cf926d44b84cc4596dae6ae2b54f014d02e89dbeb655963250aa8ecd763ccb1d8d3dfbcaaa276542621c6ce6f7302b114e3801342e704a04292e58089b8666d3b9edd953673401863cfed90ec1d1f0e7e30bc1dbe47297857ca3b9e7daceb934b0435ce1a4949087fa031de03c3f40db6de3ff6546ae3b5a82342e0abcf92b07ede8",
      "5a45ff8784c4cba8b6b9935451a5b68bba7b918eb6bfb6f03410dcb35a0b5d2e2c7789ea259744a42059f0f1300158263efc5decee2e60e1f6820c1710c3e806bc12090a528f304da5f99a6d6abd9eda41125c883739add7dd9d5555a3aa48529289a78eeabb2bb7ad4a95fc190449983c471edbf60f190fc7683b050000",
    ],
    [
      "ETag",
      "V5gY1PJQ+yPp7BSAQU31dg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:43 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-86-1626997768481"
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
      "90",
      "dd",
      "4e",
      "c2",
      "401085df65bc6d13a95a0a0917601a2541a2558c3f21645b8652683b65770aa9847777b618e3a537bb3367bed99cb347d866e512fa1067e9ae46dd5ca4c84fb688d0d4391bb92a2a0d8203c82a1572fda1c25d70f31647ded7f0219e4d5f9bf7d1613010c2246b2c14f48fb0ca305f1ae87f1ea15405ca9a2aa82e59206e2adb8fa72fe15d188950d0d20ad3d964321c4d423839bf4b8b45b5fdd7cafce4c086e20857a8b14cd07aa8346d30e1b18d675451e5e81aaa7582065ab81da49aea4a6922571437f0dd8eeff9bd5eb7eb07d74147c09c12c51995c2ce9ec51b30b1ca233a483af004d06d294157edb917f9aacdb06f016bedefccfb9d75ec6cfef3e0a861348f9ac49d416becf26cf296ac719640ac6b742051f2c7f7199ffbd33716873e51c0010000",
    ],
    [
      "ETag",
      "hZaEq85XbR2zAMbUNVyYBw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:43 GMT",
      "Server",
      "ESF",
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
      "5b",
      "72",
      "82",
      "30",
      "1840e1bde4591d2b05a46f8230c40b12a020bcfc0318152c210404c5e9deeb740567bef342699ed3b685aebe5186bed0335d68b37cb6e54bdd206538f8b61f2d20ebb9e4f57c598f4d346f3a21b4260c9d205a9950797bd7bfece2ebb85587bdc9f2caaf026594a072327f7ac66d7137599f1e21cdd538deaacca2d6ca0d37327ff0ebc9f83e11304469f7f4263a00ec668410899d33271954eb53afe71d593bcb8bab932b63e5ed4858bb86d639a489fe539be35af4d3381fba04b358a19b631480591bf8e360bfd30656bc3bf6e524d899503c4bccd004d1072f046da178732559d326e8df0edd93d3f7009da6820af4fb07338a0c271a010000",
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
      "Thu, 22 Jul 2021 23:50:43 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-87-1626997768481",
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
      "000000000002ff85535d6f9b3014fd2bc87b5c939040028914ad514ad74c09d980b4daa60919e742dd124cb0e95a55f9efbb98a66b37a97dc2f63de79e733f7824b7bcd892094978b6afa17af8702312724240d10c5f3fcef757f71b77fd25b8074bae7fcc6a1eb2d9748a08deb024dd953974a4a82b0672b209bb5925ea925642743051c7753afdd160341e3bcec8b5dd3ef224e4e99217b7c8be56aa94935eefa8ddcd84c872a025975d2676cfefbdbb41afacc40d30257baf257ba8227b6f8b7eca05a38a8b62ba09d1402da18a6147798e16fe32b7c9e9ebd45d4e77dd0cc1779c01654cd4856a6c610a268a946775a5b392c923d1365f1c48e82dbd79643091d7bb222ee80e4e8c2d5534560f2518e7c17a652cfcf375b09a458bb51f87f30b6f35ebced7cbcdca0f8dab0b2ff00c45931c34d7981aa7fae6e305f5b720152fb47ad43c37ca4f0d5afc3f968680d212da60ec9823da77cd7192260e4b5d6b98a42624899b38436a25261bdb606f13a0c8d3a29a450b51c07868b97dd7896d879ab16d6ded38190c9c786cf58783be495ddbb4c8e184fcaeb882332e4b2179db2172152c222f8e828d3f9f459e2e21a575aece5a634d012f3d2a2c10416fd47468a25ca052d3ee851f79c16c1e2d2ebd76c24bc8287b08f738e394e612104d2b6c9e826a25b6d830e2cf56de1982f5c4be1e83924c7e3e92a6e78d8b172d7fa64738c0c6aed25f1246c1c2ffaced1c119734af35e4ae3d90122d5f636de8faf00b91b8a46d16f26de305df49fb14400a1514ecfd69225807defdd78e8b8f585c7d94910aefb83b4c3622ac827687b82ef789eddad6d872890657eadf986d8eec63d79a1c4d46d841a19e2a6a171f0b6dc56af90cc2208edfd7dd3afc01a61ea54278040000",
    ],
    [
      "ETag",
      "+CqWxU8OJRxe3sOZAuiScA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1626997768481"
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
      "00000002ff8d92515382501085ffcbf618ce681912333e605939a396882f358d7383855060f1de4b658effbdbd64d65433f502bbcbb797730e6c60991611b8f09026ab0ae5fa20413d31858faacab4e25b498542b000b54898bc72ecc3e5ebd964bd7ab970bc808e6f9b719574bb4ca8f0117301ee06e214b348817bb78142e4c86b2165555eccebce02bd2ecd701af883f125f73945a61fcf8643af37ecc3d6da2f46428b79cdff63ed7e6bc1821e7c8c516211a2d1524a5a60a807c6a612799961435125435450c3f5834452550a49d4e049c3e9345af6917d7adae9d84edb6931985128744a05b3b329eb034d5a643e3db34bb0199075c986e3fafac4e334aa8d9872300eec76adef2bc0d2e234c3f9df20eb7d14fc193eb05d04df39915355e83d7531bcf67e3b8e33fd3ceadc0bfa3f08a539a93d120c46fd69e08d6e0c77bff3de5b6b54379238488526c356b3ed9c74ece67bac6764a2e6f7b85a56684128f8efb84a35b8b1c8146edf00ca78fd4f7b020000",
    ],
    [
      "ETag",
      "H86+kzCQyqxF8ATo3Z0fug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:44 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1626997768481",
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
      "54",
      "616fda3010fd2b96f7a5d5800c848032551d6db32e2d049a8476a8aac04d9cd46d12a7b6538955fcf79d1d2863ddbacf9390e07cefdd7b67dff1821f591ee13ebe63c95349c5f2c303bfc3354c1549e09404b3ef1f7fd8e7e781ed8bf34fd3f82c8bbbc9e12120986649921529ad4b5e8a90cafed46f24829705119cd7a150bdd7ab373badcec141b7dbe9b57b4de0499ac643963f02fb5ea942f62d6ba3dd48384f524a0a261b21cf5ecfade7965508fe404325ad5d490b54a4f5bee851ca43a218cf0fa73e18282515739a119682852d33bafbb25bbac148d64800fccc424ac29097b9d2b6a044c8f39825a5305571ff051b9bbffcc0be3db44f0274329ebac1de82649abcd84744a24d50430be82966299db368a133f379f188be7ae31164c0c13d91542ed0f537dbb3111a8eaf6d6f6f211578844243e7c2464768e09ea2dd3a8e8ba6ae6bfb01da3bda4767de783a41c7b31d0c3410d19894a93a250a4494361e553f1dfdaa8a4a05a0f5953b6f1f1aaf749671c1946ed67103db1b9c04ce955dddef9026245cfa4f70c331492505341124a38a8a118f28502663df099cb13b1802c35cda648390b87ff3b22504cb826a83ca7ce3c019417383d104af56b5bfc3069e37984169220459fe9603bb9db6a66fd957242d0dc4e04d54d978ae12b889b5da266aed441dbcba5dc1a78661fa2a2d7c39b5bd19ae8e3c1a5341f3d008bc73a9066c12ff5ca2cd440316661a64602e14938a85528b84829a74c03263be62f7daed4ed7aca02242bdc9755b2dbdf879f4c7cc5aa334f5a9105c7854c208e910d4a4f1c272b813165d9a25d871f9b43ecaa89424d1e55d8e32a2c27b962748b22487da82a2980b149779a869d5cc9b23229232a3b942fa09651fbd4e4103f9655170a168b4ad02806a5dfcc073dcb3fdcfebf078067f63b0840add34fbbdd6ad6ecab4",
      "52bdf5ffdbc66df538dacfe9d8b561b67f023c7ddaf9d8050000",
    ],
    [
      "ETag",
      "aTYX+zEJJTESrJ0UfGmf7g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:44 GMT",
      "Server",
      "ESF",
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
      "d0417282300000c0bfe4ac0e0a02e9cd50a0038a22a2c2254362a8a8a410420d74faf73a7dc2ee0f2828655d87e5d79d71f006866201677416363672e2dbd58e311f6b8fb7f0563039186616a1efcbb1a7fbc07dd477438ef6cad8a9f2c1a59ea8a4d42ed360eacc4574bfea6b14f95e4b1c8512432523d5456e9d35acac69c79fab7853e430eb5bd49b8e68989e7a437888c2554d73efdd2d1394d638932544d7ea84b8e509f8f4b5a475624a4e859a93cdc7c1b6b76dc0e1ced742bc6907c83e4d5f101792ea2cc6cc92846c8f76986ad9822d0feb20edad1c4c00534d255887ab17575f423801ff762c8786bd02102b0413e0f70f5952335a1a010000",
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
      "Thu, 22 Jul 2021 23:50:44 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-89-1626997768481",
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
      "c8fbdabc9a17448ad628a16ba4846c405a4dd3846c73a16e01536c5a5555fefb2ea6c95a556a3f61fb9e73cfb90f5ec8bd286232234ca40f3554cfdfee24236704344df175e5e541320c4775b5bbf793ac5cf1c92848e773448886a5685e66d051b2ae38a8d93ee8a695ac4b5a49d9c1441ddbe90c26e713c7994e27f6c81e204f41966c44718fec5bad4b35ebf58edadd54ca34035a0ad5e5323fbdf71ecf7b6525ef806bd57b2fd94315d5fb5cf47b2639d54216f37d80066a0555043915195af8cf8cd9c5fbd45d41f36e8ae047c181722eeb4237b63005974522d2ba3259c9ec85189b6f0e247037ee32b4b8cceabc880a9ac39915534d23fd5c8275e9efb6d6dabbdcf9db45b8de7951b0bc72b78bee72b7d96fbdc0bab9727dd7d2946560b8d6dcba30370f2fa81f83d2a230ea61f3dc28bf3668fd712c0d01a515b4c168da9fd081dd7758c2a63cb1876396f481319b4dc774c8fadc19c12866409167440d8b165873320018f27134e6318f46638823e6303b9a0e793c3c8f69ec50460e67e4a9121a5642955289b643e4c65f876e14fa7b6fb9085d534242eb4caf5a634d016f3d6a2c10419fd47468a242a252d3eeb517bafe6219aeafdd76c21b48297f0e1e70c609cd14209a56d83c0dd556c6d830e22db6ee0ac166623f8f4145667f5e48d3f3c6c59b969fe8210eb0b1abcd9704a1bff67e183b47c435cd6a03796c0fa444cbb7581bba3efc45242e699b85fcdabbfe6fd23ef990400505ff7a9a0836812fffb5e3e22316571f6594c63bee0e578d08afa0dd2161ca7d65dba371bf3f24065ce90fb181899d16bec9083914fab5a276f1",
      "b1d056ac5627100671fc9ee9d6e11f0949788678040000",
    ],
    [
      "ETag",
      "DNmSf3T4urOkRflpDc64Sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92d14e83401045ff657ca589359552121fb05625a9d5b6b4a931a6596140da85c1dd45d334fd776751ab51137d8199e1cc72ef852dacf332011f1ef2eca946b539c8d08c6d31415d4ba3f95651a9111c40233226b3fec28c626a67eb542de478d0bd9d8fe7c1c909133a7ec44280bf8534479968f0efb6508a02792d265917e5b2e91c309bca0ea7d1241c5d705f5062fbd16c380c4e8703d839fbc54418b16cf87facddef1c58d1c304535458c668b5548a56189bd0dad4a2a824b634d52a460d0ddc3cc814d59550442d9eb4bc5eabed1eb9bd5eb7eb7a1dafcda0a458989c4a666753d607868c90137a6197e032a09a920da7cdf599c779d218b165388adc4ea3ef2bc0d2d25ce2f26f90f53e0afe0c1fd87b04df3951505d9a3d753ebc0e7e3b8e33fd3cea2c88063f086d38a93d1285578369145cdd58eefeddfbe9c6a0be51c4416ab419b60f3bde71d73d7c8bb54f366a7e8f6f548d0ec482ff8ecbdc809f0aa971f70a8f5a71867b020000",
    ],
    [
      "ETag",
      "gCXtNco1gkfrXlQE7YVQVA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:45 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1626997768481",
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
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2b",
      "96",
      "f7052468d7aa2b6d27c4026410d1a690a4b00aa1d624d76048e2603b4815ea7fdfd9a1b08e8d7d9e54a939df7bf7ded977cff48117091dd05b9e3e5620979feec52ddda1a0598aa7c1b435754fc3cb089c7eb39f4567f0031c677f1f11dcb014cbcb0c7695a8640c6a30091ba91455c9a410bb5868b7ff79b7d56d77fbfdbdbd6eafd36b214f41b618f2e201d9775a976ad06caeb51ba9106906ace4aa118bfcf5bcf9d46e9652dc43ac557353b2892aaaf9b1e8412662a6b928f627211aa814c819e48c6768e18d99dc7edb2cdde02c6fa4087ee231b0381655a18d2d2c118b62c1d34adaaa74f04cadcd5f3e68e80edda3881c8d277eb43567b921cfb70953641dec9039f6b4e019cc78323799d9ac7c20df83f10833e8e08e2950737275ea062e21c3f1951b6ccd95468f5868e89db9e48038fe31d9ace3f964e2fb6e1891ad836d72128c27e7e470ba81c1061258b02ad3c74ca38836c693fad333afaa416904bd5cb9f7fea1e9ca64b9905c9b663d3f7203e728f22eddfa7e8790b278193ee20d2f58a600d14cb21c34c891480029e7e3d08bbcb1ef0c91612fed7c8d507470fdfc468896251883dafed3c81b6173cee89cae563b7f873941e04cb13493922d7fcba1dd6ec7d0dfd8972cab2cc4e26d54db78aa13b4458dda3a6a6f445dbaba59e16f87e2f4d55af462e206535a1f05b00009456c053eb8540bb6897f2ed17aa2118b338d3238179a2bcd6365446209361df1dc9aafd9bdce977ec7aea06652bfcff53b66f18be48f99178dcad60729850c40e1089910d594f5c20bbc139e5cd825",
      "d870f9f8729483522c35e57d4172a6e33b5ea444f1b4c0da12c84248b2a88ad8d0ea99b7474ca6550e8526e609d580bc4e41838455590aa92179ab82807a5dc228f0fc93edaf2fe1e13472435c424dae5b835efbc634655ba9dffaff6de3a67e1ce3e778ecbb38db3f018bcaf1d8d8050000",
    ],
    [
      "ETag",
      "RY1YEHSVTeA9/9lTKeXeAA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:46 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb642d0ed222d05d104401898094b69b0cc4880144fe069cdebd4e8ff0de132484d0aec3fdbda015f8005322694bb2746a55dff8f9adf7b61d1e0762afcd92e12177b3db616a7b26a7541b2e828b32c94325173e65149a82c2cace42b37d15fcdcbea3bd2b170d3967d51586413272c53c226f18ab52dc287ced6ca16c0452cca712ada065ec51a92a28334eba7c89626db78a0d32cce430a6313ef3e4c7812a8a70c81f464bc881291b53d74e4d5a28577ddbf0825bb6ef8b22ce7015cd465745edee4b9df6ecfb5d84bbe00c8f773e3e26b00094d7aca51d662fee9bac690bf06fc7fd54d357804e9396b6e0f70f26ca16971a010000",
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
      "Thu, 22 Jul 2021 23:50:46 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-91-1626997768481",
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
      "fd",
      "2b",
      "91",
      "f7",
      "71b4e923b44da56a542540249a8e34854dd314d9ce4d30a471889d6e08f5bfefc6a10c84049f62fb9e73cfb98f3c917b5124644a98c81e6aa81ebfdc49468e08689ae1ebcdf9dfb4c8bd7ae5ffd82d6c351f09b6f97a359b2142342c45b7650e1d25eb8a839a6ed6ddac9275492b293b98a8e3f63bfdd160e4bae3f168e24cfac85390a797a2b847f6add6a59adaf641bb9b4999e5404ba1ba5c6e5fdeedddc02e2b79075c2bfbada48d2acafe58f45b2e39d54216b3cd1a0dd40aaa18b654e468e13f3361276f537705dd763304ef0407cab9ac0bddd8c2145c16a9c8eaca6425d327626cbe3a90b577e92d228bcbbcde167141b770642554d3583f96609d85aba5e50767ab70398ffc5510af1717de72de5dac2e37cb606ddd5c78a16769ca72305c6b669d985b8017d44f40695118f5a8796e949f1be4bf1f4b434069056d301ef746b43fe9b92c65639e4e86c72ced016313363ea643d6e3ae034ec28022cf881a162d64d14b609ca40327a62e776287ba2ca683f1201ec208269cf507c7a94bf647e44f25349c0a554a25da0e919bd08fbc380a37c1621e79a68494d6b93e6d8d3505bcf6a8b140047d50d3be890a894a4dbbfd20f2c2f922f2afbd76c2979051feb87ec019a7345780685a61f334544b9960c348305f7aa7083613fb7e082a32fdf5449a9e372e5eb5fc851ee1001bbbda7cc93a0afde0dcd83920ae695e1bc8ae3d90122ddf626de87aff1b91b8a46d1672b5f1c29fa47d0a21850a0afef934116c029ffe6b87c5472cae3eca288d77dc1d",
      "ae1a115e41bb43c294fbcc9e38a361cffca99a56fa5dcce9f70e5d6b723419610b857eaea85d7c2cb415abd50b088338fec0746bff0f78495c3478040000",
    ],
    [
      "ETag",
      "WGxfnlEuOIXvC/sA6ibU+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1626997768481"
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
      "00000002ff8d92414f83401085ffcb78a54931155a120fa8556b68ad94eac134cd16068a0283bb8ba669fadf9d45ad464df40233c337cb7b0fb6f098570978b0cab3a706e5e620437d638a10555368c5b79a2a8560016a9131393c5c2767ae8826fa92b247f736b9eb5eddf8c7c74ca8788da5006f0b698e45a2c0bbdf42254ae4b5988aa6ac966d6781ded466388bc2d1e482fb9212d34fe641e09f0443d859fbc54468b16cf97fac2d76163cd02ac4142556311a2db5a4078cf5c8d854a2ac0bec286a648c0a5ab87d90496a6a21893a3ce90cec8eed1c3a8381eb3afd5edf66b0a058e89c2a66e733d6079ab428427a6197e03020db920da7edf599c779d21a31e5681239bd56df5780a5a57981cbbf41d6bb16fc193eb0f708be73a2a4a6d27bea3cb8f67f3b8e33fd3ceacc8f863f08a539a93d128dc6c359e48fa7865bbc7b3fd9685453491ca44293a1ddedf58f5ca7fb16eb2999a8f93d9e960d5a100bfe3b2e730d5e2a0a85bb57227af00c7b020000",
    ],
    [
      "ETag",
      "E2hdD7aTNtHogk7VdW0JQA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:46 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1626997768481",
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
      "02ffc5546d4fdb3010fe2b962704487da155296d25c44a092c5a494a9a80aa09356ee206431217db41ab50fffbce0e01ba31f67152a4f87ccfddf3dc4bf28c1f581ee3015eb0e4b1a062fde59e2f700d534512b83d3ce88cce83d155f4530d3b17ad5ebf15c9ced5f13120988e92245ba5b42e7921222a07c1b491085eac88e0bc0e89eafd76bdd56d77fbfda3a36eafd36b419ca4e972ccf20788be536a2507cd66c5dd48384f524a564c36229ebdde379fdacd95e0f73452b2b94dd90416d9fc9cf424e511518ce7c7c1140414928a39cd084b41c25b64bcf8ba9dbac148d64800fcc4224aa28817b9d2b22045c4f3254b0a61b2e2c1333632df1df0d41a5b231f8ddcc0f1f74292e9e0701f11892aa38642a869c9523a6771a83df3f9ea019d7bee257840c11d915486e8e69be559088ddd1bcb7b97696c7fb7d0091a3a67683b91eda0c071aca98ff64ef6d185e70613743adbc24005315d9222556744018bd2cae3f268ebb12a2a15805e7a6eff3969bcd15ec60553ba5adbf12d6f38f2ed6bab6cf09826245a4f1fa1c54b924a0a682248461515973ca6103271a7b66fbbce700c11a66b930a21f1e0c7f35b80bf5e512d5099373e1fbb43bfdb310a2ac835490b83792a0f78a7d538ecece0cda6f6f74443cf1bce809c0841d6bff9a0204df12187c11bab145a71b6b066abacf696d5c59bdb0d3c350c0b5a72e1abc0f266b8bcf2e8920a9a4786e093b61bb071fcf33bab961eb0b0f6402315d852b1486a924850e3f65966c497d1bdce51eba08b0d58a83f7ded03fd6fc8e30f3d2f1c85c94f85e0c2a312964c9bc0268d1696434fe0df51c3199592243a4d9043259292454a915905f4da75148688e5488f0585fe6c62cd5fe60fdfcf298951cc0b1d65fa3c40e5d82b6bb73477b53023a79cd7ff95725b3649739db98e053bf60b44044cb483050000",
    ],
    [
      "ETag",
      "504CFUCQcxtA4G1891cs4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:47 GMT",
      "Server",
      "ESF",
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
      "00",
      "00",
      "d07fc9591dd94ae94d10a530524103c285092160d8f7cde9bfd7e927bcf7020863d275415f65a4045f6041acb4c33ba3fe94152b1dc62a6e1eb536f9939b8a072b93b1a89d585f61dcc94ef45c117376bd66e67ea11f778c2934d808c679c05154a68724d8ffdc223e721611ba67b330ee5583d2588f6eabef08853ab07357acb96cce7c915d8847bcf3a5cd1feaf619f2960e5dd56364a1ba94fa6871edc42853c679ccd3286dbbcfc26f24f43a3ca5390387516b8e90b289581e45f3811d1ad78de286dba54a6e038a1b877fcedad531e5066c00996bda922ea06f2e2748d206fcdb837ea9c93b4026a8252df8fd031aa5ad111a010000",
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
      "Thu, 22 Jul 2021 23:50:47 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-93-1626997768481",
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
      "6b6f9b3014fd2bc8fbdabc098448d11aa564454a484748bb6a9a903117ea96608a4da6aaca7fdfc5345dab4aed276cdf73ee39f7c13379e04542a624e6d9630dd5d3b77b119333028a66f8babccf87102c1f6f7fdd5cadbc7531cec46590cd6688e00d4bd27d9943478aba6220a7bb6d37ab445dd24a880e26ea38a3cec01a5a8e63dbd6c49c0c9027214f57bc7840f69d52a59cf67a27ed6e264496032db9ec32b17f7def1d86bdb212f7c094ecbd97eca18aec7d2efa3d178c2a2e8ad96e8b066a0955047bca73b4f09f99c4e7ef537739dd7733041f3803ca98a80bd5d8c2144c1429cfea4a6725d367a26dbe3990adbb7217a1c1445eef8ba8a07b383312aa68a49e4a3096c1666d78fe7213ace7a1b7f1a3ede2d25dcfbb8bcd6ab7f6b7c6cda51bb886a2710e9a6bcc8c737df3f182fa0948c50bad1e36cf8df24b83bc8f636908282da10d4676dfa28349df89d3d866e964348ed33ec4f124b6c77414f799638299c44091a745358b16a2180f86038bc571648efb66649a5612c5c33e8d6cc7492d3b75120b46e47846fe565cc10597a590bced10b909bcd08dc260e72fe6a1ab4b48699dab8bd65853c05b8f0a0b44d027351d9b2817a8d4b4dbf34337982f42efda6d27bc828cb2a7ed23ce38a5b90444d30a9ba7a05a8b041b46fcf9dabd40b09ed8d52928c9f4f733697adeb878d3f2577a88036cec2afd25db30f0fc1fdace09714df35a430eed819468f90e6b43d7c73f88c4256db3909f3b37b825ed5300295450b0afa789601df8f25f3b2d3e6271f551462abce3ee30d988b00ada1de2badc17f6c4b44d53ffa98a56ea436c3c199ebad6e46832c21e0af55251bbf858682b56cb57100671fcbeeed6f11fad7189b078040000",
    ],
    [
      "ETag",
      "Fjl2eRFqYXWPLIMn5goHRg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bc2d09281668e205282a09f2d76234c690a59d96e2b65377b71a427877672ba25113bd6967a6df6ccf39ed169ed23c020f9669f25ca2da1c2568a6b698a12ea5d17c2b28d7080ea0110993d3b0dfec65ebdba7bbe4de4fe578ec533d7e3d3b6342872bcc04785b8853949106ef610bb9c890d7429265962faace01b329ecd00f6683d115f71945b61fcd87c36e6fd8879d73588c84118b8affc7dae3ce81352d6718a3c23c44aba550b4c6d00cac4d2db242624d53a942d450c1d583445159084554e349ad73526bb8c76ea7d36ab9ed66bbc1a0a45098947266e73eeb034346c819bdb24b70195055c986e3eafac2e334aa8cd872300adc66a5ef2bc0d2e254e2e26f90f5ae047f860f6c1fc1774e6454e6e6405d0ec7dddf8ee34c3f8fbae806fd1f84369cd4010906377d3fe8de4c2cf7b8f7dedb18d413451ca4469b61a3de6c9fb6dcfa7bace764a3e6f7784695e84028f8efb84e0d78b1901a776f926ec7a47b020000",
    ],
    [
      "ETag",
      "QcE4BmjVkXgYSilOOSo0fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:48 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1626997768481",
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
      "000000000002ffc5547f4fdb3010fd2a96270448fdb1765da095102b906d819274695a544da87113371892b8d84eb70ef5bbefec105805637f4eaa545feebd7bcf77973ce03b96c7b887e72cb92fa858bfbbe5735cc35491049ede9e5b038bf42f0edcf3f9af89554c8ad5e1cf1f474780609a2549b64c695df2424454f6c6a3462278b12482f33a14aa773bf596d5b6badd8303ebb073d8029ea4e962c0f23b60df28b594bd66b3d26e249c2729254b261b11cf9e9e3757ede652f05b1a29d9dc966c828a6cbe2d7a9cf28828c6f3a3f1080c14928a19cd084bc1c233339e7fda2edd60246b24005eb1889228e245aeb42d2811f17cc1924298aab8f7808dcd3f0e78640fecd3009d7a6337d80b49a6c9e13e221255410d8570a7054be98cc5a1cecc66cb3bf4d9f72e21030e6e88a43244575f6ddf4668e05dd9fe5e08d07de47a011a3817363a467df70c6d17725c34765d7b14a0bde37df4c5f7c6437432ddc2c00d62ba2045aace880215a59dc7e5d1d16355542a003df6dc793969bcd159c60553fab68e1bd87eff34702676d9e0014d48b41edd438b17249514d044908c2a2a2e794c8132f4464ee0786e7f000cd3b5618590b8f7fde19910ac97541b54e65f6b591da35f0126242d0c62551ef04eebe30ede6c6a7f2fd2f7fdfe1484891064fdbac0ab0a066fa2d264a5d8c25aad8ada5b918537d71bf8d5302c67a985bf8d6d7f8acb473e5d5041f3c808bcd1720336897fbe63d5c20316561e64a482582a16492d12096ad201cb8cf9920ddc76ab8b0d58a897b90feff577218f5fcd3c6a14a63e15820b9f4a58301d829a345e580e3d81ef460d67544a92e832e31c6e222999a7149935404f5d476188588ef45850184c87f6cc8c06de9c13124346591d649adc437ae2d5795707bbda91f1510eea3f79b82edba245ce3cd786adfa0d299ad0db71050000",
    ],
    [
      "ETag",
      "jJ6L6aAK7NJbzV6uVuv8xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:48 GMT",
      "Server",
      "ESF",
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
      "08000000000002ffedd44b7282300000d0bb646d19453ea13b01016540a0f273c3f00914a9101350a0d3bbd7e9be37e01de27d8334cf11a549df35a805ef604a5989c91913435971ebe6ca72ae1f94ae7318d30b9207ad522cdfc407c81ac7bed34fc1b4275a38cda241e7b3c1c7ece6d80585f8288a363d37de8ee25091e608da62ee43a45e8d8776b7cc9be91dc949bfb6d4bd3de3787088e1cc452ef4dc5bf0a0283b47a8da4d920133c7f246783165cf4e36de7d5d4a99c2f36165bbd8f59a1a77e4147d3a50d847adca7da99db615eeb9e073f6c05a44d5932ad3ed0fe106a3b634077e5a77cc62b1f81f580134e29a209ad4af0fb6bc24adc05f0e493f61f41a4246294104fcfc02596b068c3b040000",
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
      "Thu, 22 Jul 2021 23:50:48 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-95-1626997768481",
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
      "5d4fa34014fd2b64f6716d4b6b0ba549b3762b6a9396ee02d5b89b0d19860b8e0283cca031a6ff7d2f83753526ee133373cfb9e7dc0f9ec91d2f13322331cfee1ba89fbedc8a981c115034c3d7cabee3d575d938bfccb5f39dafcbf3af55f3389f2382b72c498b2a879e144dcd40ce76413fab4553d15a881e26ea3993ded01a598e63dbd6743c1d224f429eae797987ec1ba52a391b0c0edafd4c882c075a71d967a2787d1f3c8c06552d6e812939782f39401539f85cf45b2e18555c94f35d80061a09750405e5395af8c74ce293f7a9fb9c16fd0cc10f9c01654c34a56a6d610a26ca94674dadb392d933d136df1c48e0aedd6568309137451995b4802323a18a46eaa902e3ccdf6e8c9577b6f5378b70b5f5a26079e16e16fde576bddb78817175e1faaea1689c83e61a73e344df3cbca07e0252f152ab87ed73abfcd2a0d5c7b1b4049496d00523dbb4e8706a3a711adb2c9d1e4fe2d484389ec6f6841ec72673c6304e62a0c8d3a29a454b510e9351c2201e45c7cc8ea3f194dad13475cc08c6a3c4b48793a1e500d91f91c79a2b38e5b21292771d2257fe2a74a3d0df79cb45e8ea1252dae4eab433d616f0d6a3c20211f4494dfb36ca052ab5ed5e79a1eb2f96e1ead2ed26bc868cb2a7e01e679cd25c02a2698dcd53506f44820d23de62e39e22584fecc72128c9ecf733697bdeba78d3f2577a88036ced2afd2541e8afbc736de780b8a479a3210fdd815468f9066b43d7fb3f88c425edb2909f3bd7bf26dd930f29d450b2ff4f13c13af0df7fedb0f888c5d54719a9f08ebbc3642bc26ae87688eb725fd8c89d8c1ca2c1b5fa10b3c6d6a16b6d8e36231450aa978abac5c7423bb146be823088e3f774b7f67f01fa66843878040000",
    ],
    [
      "ETag",
      "p7kipYnu9Z0L9BiLnG+puw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1626997768481"
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
      "0002ff8d92dd4ec2401085df65bc2d89281468c245515412407eca8dc690a59d9662db29bb5bb121bcbbb315d1a889deb433d36fb6e79c760fcf71168003ab38da1628cbb308f5d414335445a215df72ca148205a845c4e4e5f3eef6615c46cd74b29e6ecbcd2bc572e576bb4c287f8da900670f618c49a0c079dc432652e4359f9222cd965567812e73339c7bb3c1f896fb9402d38f17c3a1db1bf6e1609d1603a1c5b2e2ffb1f674b06043ab19862831f3d168c9256dd0d703635389344fb0a6a8903e2aa8e0ea4124a9c88524aaf1a4d669d6eaf685dde9b45a76bbd1ae3398902f744c19b38b39eb034d5a2433dab14bb0199055c986c3eafac2e338a88c987230f6ec46a5ef2bc0d2c238c1e5df20eb5d0bfe0c1fd83182ef9c48a9c8f489ba19debbbf1dc7997e1e75ed7afd1f84d29cd409f106a3fedc734713c33d1dbdf74a8d6a228983546832ac9f37dacd967dfe1eeb1599a8f93d8e96055ae00bfe3bee620d4e28128587376c0fcf1a7b020000",
    ],
    [
      "ETag",
      "3kwGZNyg5mPhQqyjxoirbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:49 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1626997768481",
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
      "54",
      "0d",
      "4f",
      "db3010fd2b91272410fd6ee27e4888756d60d14acaf20142d3d43aa9130c49dcc60e5b85fadf777128d0b181142939df7bf7eed9e73ca27b962dd110052c5e1734df7cbae301aa212a490caba9bb3e66e77ce2fb214fa7bf8f393d5b47a3931340b0922548ba4a685df0220fa918fa6e23ce79b12239e77528541fe07a1b77f060d0ebe1bede6f034fd0249ab2ec1ed8b752aec4b0d9dc693762cee3849215130dd07b5e6f3e749aab9cdfd1508ae6be64135444f37dd1d3848744329e9df82e3450089acf694a58022dbc3097c1e7fdd20d46d2460ce00716521286bcc864d91694087916b1b8c85555347c44aacd571fc835a7e6d8d3c633dff60e17242dc98b238d086d17d4b405788a5842e76cb92833f3f9ea5e3b73661790810e6e89a062a15d7f351d53d3a6b36bd3397c4e402d7be66953eb9ba99d6a237ba2ed97b36ccdb76dd3f5b4c3d323eddc99f997da979b3d0cf858522159a65c78244868e9e069a3adb7c75b128804f12a39efb53069f75b83200a7a61d4ef1a41d4a241d00f7a06e906ad70a0537d1950023c5956572c92f18cb4754c038ca30e0e5a04873a30f5ae114546df30822eeeb5311ee83d036d6be857ce249d30b1e28255bb8dae1dcb33e79ee3dbe391672a1b11291239a99a2b4dbcee53824900bde36b5b661907a5f2e82cdb339dd1d8b3aecc6a5aa63426e1c65dc3bc44241114d02427299534bfe04bd8347439732dcf9ad9a32930d4085cee10020d7f3cbe10bccd4aedb2546fe47a8e659fab0676882b92140af2507da0039e93ec006db7b5ffd71939cee806b4499e93cd5f39f083f592fe0f0d855751d5e74eb38d4ab55dd4d98b30dafedcc2534370d92a2df4dd379d1b542d3934a239cdc28fa709c02af1e13f637781010b571864848418663714a54898d36a8659aa",
      "9aafd87d7d60185da4c0b97c93c3b8b33bacb2465991a634934f8eaa0bacb6ad4c15e2190449183d5b9ddbf60ff5b6e16940050000",
    ],
    [
      "ETag",
      "mSq+iGoDUUcomLx+oeFqfA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:49 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-96-1626997768481"
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
      "90",
      "4f",
      "6f",
      "82",
      "40",
      "10",
      "c5bfcbf40a078d0524f1508dad26c654d4f4608c5961a028307477d010e377ef2c6d4c8fbdec9ff77eb3796f6f70ceab044238e6d95783ba7dca9057f610a1690a36b2d55419040790552664fbb149d6cbf52c9d5c573a8f36d935b9bc66a3911026fec45241788334c7223110ee6e50a912654c95d4542c10b7b5bdcf979be9db3412a1a4c40acbed62f1325e4ce1ee3c860e87fafcaf91fddd81131d234c516315a3cd506b3a61cc735bcfa8b22ed035d4e8180d747067649a9a5a6922571477e8b93dafef0d87beef0583a0276041b1e29c2a61b76bc9064cac8a88aed20efa02e8ee2845d36ebd88fcdc75b874808df6d71b3cbc9ef5f6bf0f8e5b46f3ae49d219b4c10681ff137342363a4b25d60d3a102bf9e559ce10a6aa3078ff0602670c3bc3010000",
    ],
    [
      "ETag",
      "yWTdSNSHfCwQriRTgwdvFg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:50 GMT",
      "Server",
      "ESF",
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
      "dd",
      "6e",
      "82301800d077e9b59ac11061770a0ba92082cc51b96958f9f829012aad0e5cf6ee337b84737e50ce184849d5d0428fded09cebf68aad7c61ed9c98b7e57eec0a8d6974a80b226fd6fd5e26956732e11c09563b2bc99672e90c76aa4601900ef37c6d0cb989794469a430dcaa737fd53b3e791f2e0be8a9bdbaeb347fd807b19d30379a7dad93171146a4ed470d6f838883f1ae8ef9414b45178498338fc29084c346e5974233abcfcc3c11c339fb17232c14d62fc15264d3415818d81737b1a705b1a39feaa4e225277e991ebdb6e985f96d6e63f7e1a3058249342348da3cb9af6bdb5ea07f3b55b38067c00ef21146f4fb07c3dacd5c1a010000",
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
      "Thu, 22 Jul 2021 23:50:50 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-97-1626997768481",
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
      "00000002ff85536b6f9b3014fd2bc8fbb82681e6018914ad514ad74c09d980b47b6842c65ca85b822936edb22aff7d17d374ad2ab59fb07dcfb9e7dc070fe486170999909867b73554bb0fd72226470414cdf075f51166565c5cefee773fff9ac1e8bbffe7fe4b369d2282372c49b7650e1d29ea8a819c6c826e5689baa495101d4cd419db1d6b743c1a8f6d7be40c1c0b7912f274c98b1b645f2955ca49af77d0ee66426439d092cb2e13dba7f7dedd71afacc43530257b2f257ba8227b6f8b7eca05a38a8b62ba09d0402da18a604b798e16fe3393f8e465ea2ea7db6e86e03bce803226ea4235b630051345cab3bad259c9e481689bcf0e247097ee3c3498c8eb6d1115740b474642158dd4ae04e3cc5faf8c8577b6f657b370b1f6a2607eeeae66ddf97ab95979817179eefaaea1689c83e61a53e344df3cbca07e0252f142ab87cd73a3fcd8a0c5ebb134049496d00623db1c51cb31c7711adb2c75fac33835218e9dd81ed27e6cb2f10006490c14795a54b368210a3306cbb25388461638d1c04acc68ec0ceda84f8f53b0133b1df763b23f22f7155770ca6529246f3b442efd45e846a1bff1e6b3d0d525a4b4ced5696bac29e0b947850522e88d9af64d940b546adabdf042d79fcdc3c585db4e78091965bbe016679cd25c02a26985cd5350ad44820d23de6ce59e22584feceb2128c9e4d703697adeb878d6f2277a88036cec2afd2541e82fbccfdace017141f35a43eeda0329d1f215d686aef7bf11894bda6621df36aeff83b44f3ea45041c1de9f268275e0dd7fedb0f888c5d54719a9f08ebbc36423c22a687788eb721fd9ced01c98fa4f55b452af62183d74adc9d164842d14eab1a276f1b1d056ac964f200ce2f83dddadfd3f0818312a78040000",
    ],
    [
      "ETag",
      "M+eA1bnjywyZz0S6XRxwJg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1626997768481"
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
      "8d92d14ec2401045ff657c2d110c14da8487a22844448592188d214b3b85e2b65377b71a42f877672ba251137d6967a667b6f7de760b4f691e830f8b74f95ca2da1c2dd1dcda6282ba9446f3ada05c233880462c99bc5c3f79f7c7c76e7d3db86b68cae4ace59d07dd2e133a5a6126c0df4292a28c35f80f5bc84586bc16912cb37c5e750e984d6187d370321c5f709f516cfbf16c340a7aa33eec9cc3622c8c9857fc3fd61e770eac6931c10415e6115a2d85a2354666686d6a9115126b9a4a15a1860aae1e2c1595855044359ed4bc76ade19eb89ed76ebb9d66a7c1a0a448989472666753d607868c90137a6597e032a0aa920d27d5f585c7695c19b1e5701cbacd4adf5780a525a9c4f9df20eb5d09fe0c1fd83e82ef9cc8a8cccd813a1f5d07bf1dc7997e1e751684fd1f84369cd401098757fd69185cdd58ee71efbdb731a86f1471901a6d868d7ab3d36abbf5f7584fc946cdeff18d2ad18148f0df31480df889901a776f536eca0b7b020000",
    ],
    [
      "ETag",
      "Kjk9Z//60jHX1somlU59FA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:51 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1626997768481",
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
      "54",
      "0d",
      "6f",
      "9b",
      "30",
      "10",
      "fd2bc853a556cb1749f848a4aacb52d6a1a5a403d22a9aa6c41043dd02a6d874caaafcf71da6b4cdbab512129cefbd7bf7ec330fe896661b3446018def4a526c3fdcb000b51011388655c357dd999ddfb0a5f67be2a9e4e3f52cbe8c8f8f01412b16c7699e9036676511123e5e789db860658e0bc6da50a83d32dbaaded74723c3d0cda1a9028f93249ad1ec16d8d742e47cdced36da9d98b1382138a7bc13b2f469bd7bdfefe605bb21a1e0dd7dc92ea8f0eedba227090bb1a02c3b5e78d040c949b12229a609b4f0ccdc049ff64b77284e3b3180ef69487018b23213555b5022645944e3b29055d1f801c9365f7c20cf9a59535f99ce178e7fb8c669455e1f29982b4dd052d6e029a20959d1cdbacaac56f9adf2c59d9f43063ab8c69cf0b572f5d5722d4599cdaf2cf7f02901b59cb9afccec6f9672a24c9c5365bf9ced280bc7b13c5f393c3952cedcf9e242f9bcdcc3808f0de18266d2858f8384540e1e37da7e7dbc15010b10af932ba3a763d5ec8d822830c2c81c6841d423416006868607412f1c0dc97013100c3c5155972c9cb10cab439d04ba1ef5f5a087f57008cce1408b22cdd4b460a01baaae8f868686762df4aba0829c529e334eebdd4657aeed5b2bdf5d38d3896f491b112e13715a37579978d9a70093007ac3d7aeca52064ad5d1d98e6fb993a96f5f5af5b4cc488cc3ad7707f312e1841340e302a74490e29c6d60d3d0c5dcb37d7bee4c66c0902370d120381aff787826f8db5ceeb2906fe4f9aeed9cc9061ac4254e4a09b9af3fd0012b70768076bbd6ffeb4c5c77b2046d5c1478fb570efce8c38afe0f0d899751dd67a3a9a24aad89fa7b918e763f77f0b4105cb65a0b7d",
      "5f58ee12d54b2e894841b2f0fd6902b04cbcfbcf682e3060e10a830c1710c3ec86bc12090b52cf304d65f335dbd4545537900417e255ae6f0e9ac3aa6a5415494a32f1e8a8bec072dbaa54c99f409084d173e4b9edfe00d2bd46c540050000",
    ],
    [
      "ETag",
      "7T1RLIpjoY5zAS1e+hLgVg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-98-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90dd6ac2401085df657ad9047fb06a042f6a09adad88a695428bc8ba4ed268924977278a88efded958a497bdd99d39f3cd72ce9e6097161b18c03a4dbe2b34c79b0479ee8a086d95b195aba4c2227880ac1221434d2f71330a83f0fdf0fcd148dbf9ecb6311f0e85b0fa0b73058313c429661b0b83cf13142a4759533955050bc4c7d2f5e3e95bf8184622e4b471c2743199dc8f26219cbdebd26a55eefeb5b23c7bb0a57584311a2c343a0fa5a12d6a1ebb7856e56586bea5ca68b450c3f520315495ca10f9a2f841df6f75dbdd20e8f5bafd4ebf2560465a714a85b08b57f1064cacb2880e920eda0298ba94a0717dee45beab33ec6bc059fb3beb5c672d375bfe3e383a32da99217167d1196b5e4c3e9033ce12884d851e68257ffc94f2a53fff003a1c8f94c0010000",
    ],
    [
      "ETag",
      "EcoKf0RE9EWwJZ/i2mP+/Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:51 GMT",
      "Server",
      "ESF",
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
      "ff1dd0db6e82301800e077e9b598510ea3bb13233060a0504177437ea163e55028902859f6ee337b84effb4150966c9e8b656899406f68054cb6e536182d7b7f6acc78bf4f2150f552836695dcf52ff2980905a4fea9405bdd69849d7aecf09596619b76458a97c9828f4a1e61d7295c4933b29c838854f6629faad80aee666364e7e12ea5ea5c72f71812c1a4e71b3976cd170316ae60976681bc3a64a86edc319a74553caf48ead639d06fa9f55f428689368a881f28cbc7b6a63e54beb74e0f41fb738c6ff9ce545535f321517b31bfc7895e9b75d2baf06ae86883d863e4139b0bfee46a06211bf46f2f967564cf009bc1c426f4fb072cce426c1a010000",
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
      "Thu, 22 Jul 2021 23:50:51 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-99-1626997768481",
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
      "2b64f6ab6da97d004d9ab5a9b8625aea02d56c361b324c2f389632c80c35c6f4bf7b19acab31d14fcccc3de79e731f3c932d2f366442129e3dd4503dfdb817093921a06886af65e82e12ea3d0e6fb65757c5606bef797a3d9b4e11c11b96a4bb32878e1475c5404ed66137ab445dd24a880e26ea384ea73f3e1d3b8e658deda1dd479e843c5df0628bec3ba54a39e9f58edadd4c882c075a72d96562f7f6dedb9ff6ca4adc0353b2f751b2872ab2f7b5e8cf5c30aab828a6eb100dd412aa187694e768e13f73939c7d4cdde574d7cd10bce70c2863a22e54630b533051a43cab2b9d954c9e89b6f9ee40b06fee3c3298c8eb5d1117740727c6862a1aaba7128c8b60b5343cff62152c6791b7f2e3707ee92e67ddf96ab15efaa1717be906aea1689283e61a53e34cdf7cbca0fe06a4e285568f9ae746f9b541dee7b134049496d00663cb1cd3be6d3a499a582cb507a324352149ecc41ad14162326708c34d0214795a54b368210a07d2814d4d271e39561a0f111cdb03731c9b9bd3211bd843d306871c4ec863c5159c73590ac9db0e91dbc08bdc380ad6fe7c16b9ba8494d6b93a6f8d3505bcf7a8b040047d51d3a18972814a4dbb3d3f7283d93cf26edc76c20bc8287b0a1f70c629cd25209a56d83c05d5526cb061c49f2ddd7304eb895d1f83924cfe3e93a6e78d8b772d7fa34738c0c6aed25f124681e7ffd2768e881b9ad71ab26f0fa444cb77581bba3efc43242e699b85fc5ebbc11fd23e0590420505fb7e9a08d6816fffb5e3e22316571f65a4c23bee0e938d08aba0dd21aecb7d65dba3be650f880657ea53ccb646c7ae35399a8cb08342bd56d42e3e16",
      "da8ad5f20d84411cbfafbb7578015a47289178040000",
    ],
    [
      "ETag",
      "pSELbaIw4VkJJn3k8vifPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1626997768481"
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
      "02ff8d92414fc2401085ffcb782d09281668c2a12868938a58cac910b2b45328b49dbabbd520e1bf3b5b118d9ae8a59d997eb37defb57bd8a6450c0e2cd3d553857277b642fd608a00559569c5b7920a8560016ab162327f0d851bd0766dab0bdf5bdf8bd176dc71fb7d2654b4c65c80b38724c52c56e03ceea11039f25a445995178bbab340ef4a339c868137bee13ea7d8f4e399efbb037f0807ebb4180b2d1635ff8fb5f9c1820d2d034c506211a1d1524ada60a43d635389bcccb0a1a892112aa8e1fac14a52550a49d4e049a3d76bb4ec73bbd7eb74ec6ebbdb6230a348e8940a666753d6079ab4c8027a6197603320eb920d27f5f599c7695c1b31a5370eed76adef2bc0d29234c3c5df20eb5d0bfe0c1fd83182ef9cc8a92af4891af9f7ee6fc771a69f475dbbe1f007a13427754242ef6e380dddbb89e1e647ef839d463591c4412a3419b69aedee65c76ebec77a45266a7e8fa36585164482ff8edb548393884ce1e10d35b57a777b020000",
    ],
    [
      "ETag",
      "mzTaARokh6s3LIhOaFkN7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:52 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ffd553614fdb3010fd2b96f705a4d2d202a57442ac4060d94a0a490a4208b526b904431207db0155a8ff7d67a71debd8c6e749959abb7b77efddf9ee953ef222a67d7ac7d3a70ae4ecd383b8a30d0a9aa5e83ddf8e67277055f4be6dbd5c788387e871eb347fd9df470437598ae565061b4a543202d51f07cd548aaa6452880d2cb4d1dedcdc68773bddbdbddddd6e6fbbd7c644055932e4c523a6df6b5daa7eabb5246fa642a419b092ab6624f29ffed673a7554af1009156ad55ce16d2a8d607ac07998898e6a2d81f07a8a052202790339ea186b7d4f8eecb6aed2667793345f0338f804591a80a6d7461894814094f2b69abd2fe2bb53a7ff9a08133748e4272341a7be1da94e52679ba4e98224ba341a6d854c23398f0786a229349f9484efcd1194650c13d53a0a6e4eaabe33b840c47578ebf368d9906ace38d423274bf3be4800cbc63b25acaf5c8d8f39c20246b07ebe4d41f8dcfc9e1f50a067b88216155a68f99461e6db4c7f5a76b9e5683d2085a8cdd7dffda746ea25c48ae4dbfae173afee028742f9d7ac4434859340b9e70c809cb14209a4996830679266230db350adcd01d79832166d8b99d2f118af66f5edf12c2590946a0b6fff478103a743e6ffc1d31f0fdc135566552b2d96f3154dadd36e96fd9972cab2cc4e2ad552b78ae03b44d0ddbd2eaac585d3abf9de3af4171f96a2e7a3176fc6b5abb7c4840421159827fccd3826de0e3235a2e348271a5914769b495e691322c91041b0e796ed5d7d9bd9dce4e7b935ab0d4ef63bb5d73f945fcc7c882a3b2f5414a217d50b83ec6443665b5f00287c2e30b7b032b2a9f16ae1c9462a929ef0992331dddf322258aa705d6964012214952159149ab57deba984cab1c0a4dcc1baa3e311bd024415596426a88df0a60ac3e9420f45def74fdf3c23cbc0e9d00cf4f939b76bfd7b935fdd82eea77fe2f3bb8ad9fc45ec4c83317f1039dce9280cf050000",
    ],
    [
      "ETag",
      "P4dyFeWn8J3wQNAjck3Gmw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:52 GMT",
      "Server",
      "ESF",
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
      "7282300000d07fc9d93a6c61e98d6059aa46094e412e998041911a76153afdf73afd84f77e00cb73def774a82b2ec03b9898622df3e5ba31911396d8356f36b6a954c833629b50b45bdffd54f244fb8857880471dfea8f145f742d3ac5f3ccb990519230781fc97cf5556730440bdbe35a63d446da73be40398c87717b570f4a36a457d4131a479b1a4f765c95542fa4446d88947e794533e3c0792b6d39c39245cce04e926277343ca380ebd189f48d0ecd9dff0d0fc6344df519dd0c568931ecb85beee5153c0be48775350addabb4ac38d5e16e7fc10a5800fe6cca8ef7b47c715568590bf06fa7c3d4f05700e2ace31df8fd03fd8e934a1a010000",
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
      "Thu, 22 Jul 2021 23:50:52 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-101-1626997768481",
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
      "02ff85536b4fdb3014fd2b91f795b6e93bad548dd286d1a949214d41d33445b673130c691c62870da1fef7dd3894c1268d4fb17dcfb9e7dc479ec9bdc86332254ca40f15944f9fee24232704344df1751d5cd265e8ddce27e5afcbbb337e365e7fadae663344889aa5e8bec8a0a564557250d3ddb69d96b22a6829650b13b5ba76b7d51df54693c9783c72064e17890ab2642df27ba4df6a5da869a773146fa752a619d042a83697fbd7f7ce63af5394f20eb8569df79a1d94519d0f543f6792532d643edb6dd141a5a08c604f45861efe506376fa3e775bd07d3b45f0a3e040399755ae6b5f9882cb3c1169559aac64fa4c8ccf3707b275d7ee22b4b8ccaa7d1ee5740f27564c358df45301d679b0f1ac957fbe09bc79b8daf8d17671e17af3f662b3de79fed6bab97003d7d2946560b8d6cc3a35371f2fa81f83d22237ea61fd5c2bbf7468f5ef606a024a2b6882d1d81ed1ae634f58c2c63c71fa4396d8c098c3c643da67369f0c601033a0c833a286457399f780da498f2591d3ef25d100c62c62f1a01f4d06b10ddd1e0c9933248713f2b3141a9642155289a643e42658856e14063b7f310f5d534242ab4c2f1b6375016f3d6a2c1041ffa9e950478544a5badd2b3f7483f9225c5dbbcd84d79052feb47dc01927345380685a62f334949e8cb161c49f7bee12c1666297c7a022d3efcfa4ee79ede24dcb5fe9210eb0b6abcd976cc360e57f31768e886b9a5506f2d81c4881966fb136747df88148dcd2260bb9dab9c137d23c0590400939ff789a0836818fffb6e3e62318771f7594c63b2e0f57b50a2fa1592261ea7d613bc3dea46bfe554d4bfd77ac6ff79d63dbea1c7546d843ae5f4a6a361f2b6dc42af50ac220cedf37ed3afc067fcc7b037b040000",
    ],
    [
      "ETag",
      "LRPaDTMhA9rxPjBcB7LJuQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:53 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1626997768481"
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
      "4ec2401085df65bc2d91122cd0848ba2a88dfc09c5c4184396765a8adb6edddd4a90f0eece5644a3267ad3ce4cbfd99e73da1d3ca579042e2cd3e4b944b93d4950df9a628aaae45ad1ad10b942b000354b887c4d6e5ade7dbadcf8779b62ec70d9c84fb34db74b840a579831707710a7c82305eec30e729621ad85829759bea83a0bf4b630c35930f54757d4672232fd683e1878bd411ff6d67131629a2d2afe1f6b8f7b0bd66239c51825e6211a2d85146b0cb56f6c2a96151c6b4a94324405155c3d48a4280b2685a8d1a466d7ed9aed349c4ea7d572dacdb64d241721d3a9c8099ecf482068a1199f8a0dd90487005995e438aeae2f344ea3ca8929fd51e0342b815f01d216a71c177f832478c5e83b7c60870cbe732c1365ae8fd4e560ecfd761c85fa79d48517f47f104a53544724f087fd59e00d27867b3c78ef6d35aa891494a44213a25d6fb6cf5a4efd3dd77361b2a6f7b85a966841c8e8f7b84e35b831e30af76f19d12aab7c020000",
    ],
    [
      "ETag",
      "zgK7AYibwIVwpO6lr2n/mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:53 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1626997768481",
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
      "53616fda3010fd2b96f7a5952819b4a5c0547540b32e1a243409ad5055819b98d46d12a7b683842afefbce0e94b16eebe74948e47cefdd7b773ebfe26796c7b88b1f58f25252b1faf4c41f700d53451238159da87f7cfa34f2ad417f99a5b16c9fa665effc1c104cb324c98a941e495e8a88caee24a827829705119c1f41a1a3c6e7e651a3d56c753a6767adf649bb014449d3c590e5cf407f54aa905dcbda8ad713ce93949282c97ac4b3b7736bd9b40ac19f68a4a4b5af69818cb43e50bd48794414e3f9f9240007a5a4624633c252f0b0a3c60f5ff76bd719c9ea0980972ca2248a78992bed0b4a443c5fb0a414a62aeebe62e3f3970f1cd8437b10a2813771c38339c934797e888844dba086e6d0d482a574c6e2b9cecc66c533fae67b23c880834722a99ca3dbefb66f2334f46e6dff602e15788442ae17a2a1f3c34617a8e75ea2fd5a8e8b26ae6b07213ab8384457be3719a3fe740f034dc47441ca545d1205424a9b8fab4f47dfada25201683377e7fd75e3b5ce322e98d20d3b6e68fbbd41e8dcd8d58c873421d12a7881292f482a29a089201955548c784c8132f60227743cb737048619dc788b90b87bf7ba2384ab826a83cafce3d0194173bdd118afd7b5bfc37abedf9b4269220459fd9603bbad134ddfb16f485a1a88c19ba8b2b1ac12b881b5da366aee452dbcbe5fc3af8661052b2d7c3db1fd29ae8e7cbaa082e69111f8c7500dd8243e7e4adbb506302c36e8c0722826158ba456890435e99065c67dc56e9f1e9f75dad880857a976b9f74f4fbcfe33f66361aa5a94f85e0c2a712764887a0268d1796c350587c6d5ec29ecb97cd5146a524892eef729411153db23c41922539d416142db8408b328f34ad5a7c7344445266345748dfa1eca2b735a8a3a02c0a2e148d77550050bd9920f41df7eaf0cb26ec4f433b8097a8d05da3db6edeeba64c2bd565ffbf6ddc5797a3",
      "fd5c7aae0dcbfd135b4e7722df050000",
    ],
    [
      "ETag",
      "r9cB35jMR/CBvmlds85luA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:53 GMT",
      "Server",
      "ESF",
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
      "08000000000002ff1dd04b7282300000d0bb64ad0e9ff2497786f267940c142c1b0642b48008210862a777afd323bcf7030a4228e7f9d4b7f406dec15a48704776fea0230337e2fe3314ade7ea3ab11ecce91e3d4cb8bf22b7118eac977c263e2bdbeddc6f1c5dad527757a21d6476da86b594cf9e38c3c8d44327ee58587f9c99b30d2eb8f798eac95e954969729eb4ad80d740b8d516b9cfaa31414d3cf5f6a52bd324e7ebdd8f0c120d0a1c32aeddcde5b8204c95c022e80b25c91b29e4b8b79656d24a518f67bfa509be2c8581c773cada29307946eda2be356ed6e343c72b4badc006d0c7508f94e7f58b2b2b106ec0bf3d9fd681be02102d463a82df3f66b6956d1a010000",
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
      "Thu, 22 Jul 2021 23:50:54 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-103-1626997768481",
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
      "c8fbdabc434222452b4ae99a29211b90760f4dc83617ea8e608a4dbbaaca7fdfc5345dab4aeb276cdf73ee39f7c123f92d8a84cc0913d96d0dd5c3871bc9c809014d337cfde1b39a5d7ebbbfffc3fcebcf5799276df7dc5d2c10211a96a2fb32878e9275c541cd776137ab645dd24aca0e26ea0cfaa3ce60329ccc66d3e9c4193b03242ac8d3b5287e23fd5aeb52cd7bbda378379332cb81964275b9dc3fbff7ee86bdb29237c0b5eabdd6eca18ceabda3fa31979c6a218bc52e4407b5822a863d15397af8474dd8e9ebdc5d41f7dd0cc1778203e55cd6856e7c610a2e8b54647565b292f923313e5f1c48e8adbd65647199d7fb222ee81e4eac846a1aeb8712acf360bbb156fef936d8b8d16aebc7e1f2c2dbb8dde576bddbf8a17575e1059ea529cbc170ad85756a6e3e5e503f01a54561d4a3e6b9517eead0eaed601a024a2b6883f1b43fa103a73f63299bf2d419d92ced03630e9bda74c4fa7c368671c28022cf881a162d6431a53c19266c16f791138f9d218d6743807834b0fbb6334d4636a4e47042ee2ba1e14ca8522ad176885c05abc88ba360e72fddc83325a4b4cef5596bac29e0a5478d0522e83f351d9aa890a8d4b47be5475ee02ea3d5a5d74e780d19e50fe12dce38a5b90244d30a9ba7a1dac8041b467c77e39d21d84ceccb31a8c8fce723697adeb878d1f2677a84036cec6af3256114acfc4fc6ce117149f3da40eeda0329d1f235d686ae0fbf10895bda66215f775ef09db44f01a45041c1df9f26824de0fdbfedb8f908c6dd471da5f18ecbc355a3c22b689748987a9fd88e3d1e4c6c62c0957e13",
      "1bce46c7b635399a8cb087423f95d46e3e56da8ad5ea1984419cbf6fda75f80beb4fedb37b040000",
    ],
    [
      "ETag",
      "ZNbubVXwwxbNhJWgEo5AFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:54 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d92dd6e82401085df657a8b89140b4ae20556db9aa0f5077bd318b3c2a05860e9ee624b8cefde596a6dd336696f6066f86639e7c0019e923c0217d6c9e6b944515d6c504d75314359a64ad2ade0b944300015db1069daebedabe5e368ffd077ac2a92ac695d4ebb5d2264b8c58c817b8038c13492e03e1e206719d25ac8d332cb57756780aa0a3d9c07b3e1f896fa8c47ba1f2f7cdfebf903381ae7c58829b6aaf97fac2d8f06ecf87a86310acc43d45a0ac17718aaa1b6295956a4d890bc14214aa8e1fac146f0b26082f3064d1a66d36a98f6a5dde9388edd6eb54d22531e3295f09ce0c59c0482e28aa533fe4236c12640d425398eebeb9ec649543bd1e5701cd8ad5ae05780b4c5498aabbf4112bc65f41d3eb05306df3996f1325767eac6bff77e3b8e42fd3caaef05831f845414d5190986a3c13cf04613cd2d4fde7b954239119c9294a843349badf6956337df73bde63a6b7a8fab448906848c7e8fbb44811bb354e2f10d2bf87c2f7c020000",
    ],
    [
      "ETag",
      "16bhx3LeMvVD73ydsa032Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:54 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1626997768481",
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
      "ffc5546b4fdb3014fd2b962704487d50d607ad845880b0552b499ba6a06a428d9bb8c16d1217db41aa50fffbae1d0274b0f17152a4f8fa9e7bcfb98fe409af5816e11e9eb3f821a762f365c9e7b882a92231dc2e3bcbd56a6cd1f128eeb446f56b757535fa6a9d9e0282e92849d27542ab92e722a4b23719d762c1f335119c572151b571d4ac36dac7ed6eb7d3699f344f1a102869b218b06c05e1f74aad65af5e2fc96b31e77142c99ac95ac8d397fbfae3717d2df892864ad67739eb4023eb9fb09e253c248af1ec74320605b9a4624653c212d0f01a1acdbfede6ae3192d662003fb2909230e479a6b42e4811f26cc1e25c98acb8f7848dce37073cb607f6858f2edc89e31f0424d5c1c12122129546050550d4822574c6a2407b66b3f50a5d79ee357840c13d915406e8f687edd9080ddc5bdb7b93c9717d34e8ffb4d119b29c4bb49bacefa089e3d8631f1d9c1da2ef9e3b19a2f3e90e06aa88e882e489ba240a9894561f15c7be1eaea25201e8b9f1fdf7f3c65bed655c30a52bee3bbeed59177effc62e9a3ca0310937e30768f3822492029a08925245c5358f28840cdd71dfefbb8e358008d3b9618990b8f7ebe935c0dfaca916a8cc1b5f0d5ccb6f378d8212724392dc601e8b03de6bd45acd3dbcdd56fe9ec8f23c6b0ae44408b2f9c30705698a0f390cde5885d092b381355b691def586dbcbddbc253c1b0a505171e4d6c6f8a8b2b8f2ea8a0596808fed17603368ecfbfb672f3010cbb0f3c52812d150ba5660905356e9fa5467d117dd26a1d75bad880857aefebb6f52f228b3ef43c73e4263f15820b8f4ad8326d029b345a58064d815f4805a7544a12eb34930c4a9194cc138acc2ea097b6a320402c437a2e28f0a7437bf6bc00f0119d9308453cd751a6d13d54ccbdb4f60b735f0b33728a81fd5f2977459334d7a5ebd8b064bf0117289fe98a050000",
    ],
    [
      "ETag",
      "j7jkkSAeSQg75Q/MtFFQ3A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:55 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "2d0e20d4d21d88140b8ada2aea2603217cf2132182e0f4ee757a84f79e204108b72d94578a05f80043a25b53340dea7767b12bb34d5098c68f02a94969aaacf2f06e442939745491b2d5eea254e46315c82f180eb7c6e8f46fedec32fbecd4eaa11544459f68bd61dc2ab9e99ce24ae67c7671ed5159aaf6900cfefcb0377a9f773ed1463957adec843c9dd191447d9688faaaa595436d79e44c1b8f6203b7ddb12ff27a0761ccfca5f0c2075ae49970d35b0b1bef8d148cc728520999ef7b91f1c84265cffd74bd551b9fe5bd7ee9c004e0475d35b885d58b3b332d6b02feed500e357e0538386970037eff00358caeef1a010000",
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
      "Thu, 22 Jul 2021 23:50:55 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-105-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda24242181448ad628a56da6846c40da4dd3848cb950b704136cfa5095ffbe8b69ba5695d64fd8bee7dc73ee836772c78b844c49ccb37d0dd5d3975b119313028a66f89a9c6f067bf9080fce3e185c6cbeddd8e5cfea613643046f5892eeca1c3a52d4150339dd06ddac1275492b213a98a8d337479dfe78309e4c6c7bec584e1f8912f274c58b3ba4df2855ca69af7714ef66426439d092cb2e13bbd7f7defda05756e2169892bdf79a3d9491bd4f54bfe68251c54531db06e8a0965045b0a33c470fffa8497cfa3e7797d35d3743f03d6740191375a11a5f98828922e5595de9ac64fa4cb4cf370712b82b77111a4ce4f5ae880aba831323a18a46eaa904e3dcdfac8da577bef1d7f370b9f1a26071e9aee7ddc566b55d7b81717de9faaea1689c83e61a33e354df3cbca07e0252f142ab87cd73a3fcd2a1e5c7c134049496d00623db1cd3be634ee234b659ea0c47716a421c3bb13da2c3d864130bac24068a3c2daa59b41085150fac613a8628b16227b2120ba2c9c0b1a22485310c4cab3fb62d7238210f155770c66529246f3b44aefd65e846a1bff516f3d0d525a4b4ced5596bac29e0ad47850522e83f351d9a2817a8d4b47be985ae3f5f84cb2bb79df00a32ca9e823dce38a5b90444d30a9ba7a05a8b041b46bcf9da3d43b09ed8f7635092e9ef67d2f4bc71f1a6e5aff41007d8d855fa4b82d05f7a17dace117145f35a43eedb0329d1f20dd686ae0f7f10895bda66213fb6aeff8bb44f3ea45041c13e9f268275e0f3bfedb8f908c6dd471da9f08ecbc364a3c22a689788eb7a5fd8ce6834b44da2c195fa10b3ecd1b16d4d8e2623eca0502f25b59b8f95b662b57c056110e7efe9761dfe025cd876e47b040000",
    ],
    [
      "ETag",
      "dFO2qsxew8qS2GOJh7pXrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:55 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92dd6e82401085df657a594cd5282a891758b525f117314dd318b3c2805860e9ee62638cefde596a6dd336696f6066f86639e7c0119ee32c000b3671f452a0385c45a8e6ba705116899274cb7926110c40c52222f7dea33cd4af5b75df7910f6b05fbd61dbe9bcdb2542fa5b4c19584708634c0209d6d311329622adf93c29d26c5d7606a843ae870bcf752677d4a73cd0fd64391ad9bdd1004ec66531608aad4bfe1f6bab93013bbe71314481998f5a4b2ef80e7de5689b92a5798215c90be1a384122e1f44821739139c576852a9559b959a59373b9d56cb6c37da352213ee3315f38ce0e5820482e28a252e7f259b601220ca921c87e5754fe338289de8d2997866a314f815206d619ce0fa6f90046f197d870fec9cc1778ea5bcc8d4851a8ea6f66fc751a89f47f56d6ff083908aa2ba209e331e2c3c7b3cd3dceaecbd77502867825392127588b56aa3dd6c99d5f75c6fb9ce9ade632951a0013ea3dfe33e5660852c91787a03bb5a4e437c020000",
    ],
    [
      "ETag",
      "vTYsy2+72cIWrAFD0/ahOQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:56 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1626997768481",
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
      "54",
      "fd",
      "4f",
      "db3010fd5722ef1790fa958f266da58a9592b1482565690a42d3d43aae130c491c6287ad42fddf774e2850c186142939df7bf7ded9e73ca17b966fd008452c79a868b9fd72c723d44254e20456e5707847e9a9f1270b8df9741873313fd727e331209862099c15296d0b5e95848ad172d1494a5e15b8e4bc0d85da7acf6eebb6610f878e630fac810e4441d378c6f27ba0df4a598851b7bb17ef249c2729c505131dc2b397f5eea3d12d4a7e478914dd43cd2ec888ee27aa27292758329e8f970b7050095aae6886590a1e5ea99be8eb61ed0ec3592701f023231413c2ab5c2a5f5082f03c664955d655d1e809d53edf7ca0853b73a7a1369d2ffdf0688d33455e1f6b5868fba0a5ada1a998a574c5366b9559ad8a7bed5b30bf800c38b8c5828ab576fddd0d5c4d5b2bd0583bd126fe997648f57c6de9fbee22d48e4e8eb5f360bebcd44e6f0e30e07943856479ed38c4514a95dbe75df5de1fa62260090e9ae4cae9d9581ff486511c39241e98fd28eed1281a444e1f9b518f0c2d6a6d228a812755f59a85739e9b118e4ddd1ce8c4746c3bc6786318766492c8eaebbdbe651a96a393bee9a05d0bfd2e99a4674c145cb06667d175e085ee2a0c96fe7412ba751b31ae5279d698534dbcf529a14900fda7af9dca320e4aea983c3f7483c934f4aedc66326634c164bb7880d988712a28a07189332a6979c137b069e872bef0426fee4f66c0a88ffb728f1068f4f3e995106e8b7a9765fd565ab655ebef015738ad6ac463f381f43edaed5aff2e310982c90dc8e2b2c4db8fcb7f58bfc6d75163f1450f29b57d641c4436dafddac1d34270a91a2df463e90637a8590a684c4b9a93cf0709c075e2f39fc3fea20218ae2ae8080931cc2d114a8594b4995f96d5ee1bf6a06febbd1eaac1a57c97",
      "33746b7f50aa86aa48339acbe7969a8b5aef9b4a55e2050449183bdff3cf21fb170fabf70e2a050000",
    ],
    [
      "ETag",
      "t99jeeB2xmT2OC9fosOG1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-106-1626997768481"
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
      "90",
      "dd",
      "6a",
      "c2",
      "401085df657ad904622951035e54112b0d52d34aff1059e31813934cdc9d54ace4dd3b1ba5d7bdd99d3dfb1df69c3dc33e2d3710c03a4d0e35ead34d823cb74384a6ced9c8565169101c4056899087e3c74ff6f4ae47a389b99daaa1b7f87cdbcd0703214cbcc3424170866d8af9c640f075865215283655505db2407caaec793a7b1d4fc69108056dac305b84e1c3301c43e3fc9956ab6aff2fcbb27120a375845bd458c66833549a328c796aeb19555439ba866a1da381166e2f124d75a534912b8adbf17cb7e3dff9fd7eb7ebf7ee7b1d21738a15a7540abc789170c0c42a8fe828f5c002ba1da5e9b65dbf5bd996b84ecb6679350d4f8ce659934430685ff72e494664d3b1a4665da303b1928f7c4cf9726e7e0133911deda5010000",
    ],
    [
      "ETag",
      "qwYzjKXrCCGs+IaB0UZWhQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:56 GMT",
      "Server",
      "ESF",
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
      "82300000d0bb642d8ef213ba232a0415fc142d71c3841814518484bfd3bbd7e911de7b0342291322aa5e19cbc117e8896c8ee9785d1870be4f8931d3a55d899b568b0eb9e3bb76c3938ecb85ba0a82d7f328fa0ca5025d2f44235a4a6edfaaae98b7d870036529557932295c2b0f75ccb1551fdacd74611f4f531579bc14cd95a23c13dc3fb3381daa8286241960ef507c9a4ddae7f0037db8f5e6e7fb0d13e82c7771e220f7e2aeb547b50a679bc454940a850cab67c5b0e88240fdbe2a6d43629bda7b303960db691bedaf655987b0c6b571ea22d4db60045857a49c8928fd7015cd3447e0df1e557dc13e019011ce38f8fd03aefc7f3f1a010000",
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
      "Thu, 22 Jul 2021 23:50:56 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-107-1626997768481",
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
      "000002ff85536b6f9b3014fd2bc8fbda84bc8148d11aa5748d94900e48ab699a90ed5ca85b8219369dd22aff7d17d374ad2aad9fb07dcfb9e7dc07cfe441143b32254c64bf6ba80e5fee2523670434cdf055dafd490eded3c1664fd558e482d5703d9fcd10211a96a2fb32878e9275c5414db75137ab645dd24aca0e26eaf47b4ea73f194c3ccf7126eec8ed2351419eae44f180f43bad4b35b5ed9378379332cb81964275b9dcbfbedb8f03bbace43d70adecf79a36ca28fb13d5afb9e4540b59ccb6113aa8155409eca9c8d1c33fea8e9dbfcfdd1574dfcd10fc283850ce655de8c617a6e0b248455657262b993e13e3f3cd8144feca5fc4169779bd2f9282eee1ccda514d137d28c1ba0c376b6b195c6ec2f53c5e6e82245a5cf9eb7977b1596dd74164dd5ef9a16f69ca72305c6b669d9b5b8017d4df81d2a230ea71f3dc28bf7468f971300d01a515b4c1c4e94d68dfed792c650e4fdde198a53d60cc65ce980e598f7b2318ed1850e41951c3a205d6cc52c71bf587c968307092913776123aee39c9d8f1fa7c40810d472e399e913f95d07021542995683b446ec365ec2771b80d16f3d83725a4b4cef5456bac29e0ad478d0522e83f351d9ba890a8d4b47b19c47e385fc4cb1bbf9df00a32ca0fd16f9c714a730588a615364f43b5963b6c1809e66bff02c16662d7a7a022d39fcfa4e979e3e24dcb5fe9310eb0b1abcd974471b80cbe193b27c40dcd6b03796c0fa444cb77581bba3efe42246e699b857cdffae10fd23e8590420505ff7c9a083681cfffb6d3e62318771f7594c63b2e0f578d0aafa05d2261ea7d61bbe389e30e880157fa43cc7587a7b635399a8cb08742bf94d46e3e56da8ad5ea1584419c7f60da75fc0b432a48db7b040000",
    ],
    [
      "ETag",
      "o/16le9zy/bzr5ilibuePA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:56 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1626997768481"
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
      "5f",
      "4f",
      "c2",
      "30",
      "14c5bfcbf5752460708c253e0c05c18c3f8ef1640829db1d0cb775b69d8084efee6d45346aa22febbdddefb6e79ced004f6911830bcb74f55ca1d85fac503de8224059654ad252f2422258808aad884c83d75d3f977110efc661cf1b2eedfbd8d95e5f1321a335e60cdc03242966b104f7f10005cb91c6229e5579b1309d056a5feacd69180c4677d4e73cd6fd68e6fb5ec7efc2d13a0fc64cb185e1ff31363f5ab0e1cb0013145844a8b594826f3052036d53b2bcccb026792522946060f36225785532c1798d766a8d7aabd6b02fed76bbd5b29da6d32032e31153292f089e4d492028ae5816f02dd9049b00614a729c98e78bce2a364e7439188576d308fc0a90b624cd70f1374882d78cbec30776cae03bc7725e15ea4cf5fcb1f7db7114eae751b75ed8fd414845519d917030ec4e436f38d1dcfce4bdb35728278253921275888d7ad3b96ad9f5f75c6fb8ce9aee7195a8d08288d1efd14f15b809cb241edf0086b3d5587c020000",
    ],
    [
      "ETag",
      "iRzxHmsdRdxOTFAMb6Jd8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:57 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8554fd4fdb3010fd5722ef17904adbf4231f952a164ad8229594a509084d53ebb84e31a471881da042fddf777108d0b10d295272bef7eebdb3cf7946772c5ba1118ad9fabea4c5f6cb2d8f510b5189d7b05a5c3d9e95d934ee3c4dbd13193f8ae8e6e9c9198f01c12a96c09b3ca547829705a16214cddbeb8297392e383f8242477ad73ad28d9e61dba66958034b07a2a0693265d91dd06fa4ccc5a8d369c4db6bced729c539136dc237afeb9d875e272ff82d255274f6353b20233a9fa81ea79c60c978368ee6e0a014b458d00d66297878a3aee2affbb5db0c6fda6b003f30423121bccc64e50b4a109e256c5d16aa2a1a3d23e5f3dd079abb5377126a9359e487074bbca9c8cb430d0bad095ada129a4a584a176cb5ac328b457ea79d05b373c880831b2ca8586a57dfddc0d5de9696da583bd61cff54db2fe0f95ae4fbee3cd40e8e0fb56fc12cbad04eaef730e07c45856499f21de238a595e797bdf53e1e6945c01244ebe4c2ec1a58b7ba769cc42649acfe304eba348eadd81ce27edc25f6800e5631c5c0935575c5c219cf5686ddd549cfa6d68ac431b6fb567738e863bd6f0ea8d14d4cacf786ba9e10b46ba1c782497aca44ce05abf7175d055ee82ec220f2274ee8aa36125ca6f2b4365735f1dea7842601f49fbe7655967150aa0ecbf343377026a177e9d6f331a56b4cb6f37b989004a782021a177843252dcef90a360d5dcce65ee8cd7c670a0c75e8170d42a0d1cfe73742b8cdd52e4bf546f330f0fc6fca4083b8c469a9200ff5077272f08a76bbd6bfcb3841e05c83342e0abcfd2307ed18838afe17098557516db391d451a5d644bdbdc840bb5f3b785a08ae57ad857e446e708deaa58026b4a019f97c9800ac129fff269a2b0b60b8b4a02324c430bb44542aa4a0f50cb38d725fb3ada169f66da4c085fc90b34cbd39acaa4655916e68265f5aaaafacdab72a558a57102461f47c756ebbdfda4a1f5034050000",
    ],
    [
      "ETag",
      "rWwFunLb/xLIBtbwsUhxxA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:57 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-108-1626997768481"
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
      "00000002ff8d904f6fc2300cc5bf8b776d250a13ff240e30aa8d89a1d18d5d2684d2624a4b5b7789c38410df7d4e99d08ebb24f6f3cfd17b39c321abb63084384bbf2cead35d8abc744584c6166ce4aaa932081e20ab54c83ce47df0dcf988c7d3e94bf036e9c4b9cd96a3911026d963a96078865d86c5d6c0f0f30c952a51d65449b66281f854bb7eb6780f1fc3488492b64e58ace6f3f1641ec2c5bb2d6d36f5e15f2beb8b0739c511ee506395a0f3506bca31e1998b67545917e81bb23a41030ddc0c524db6569ac817c50f5a7d3fe8b6bb8341afd7eddff703210b4a14675409bc7a1373c0c4aa88e85be2415b00dd949274d79c47913b4d886303386f7f67eddb2c70b3f5ef839313a379d524f60c3a67adabcb0772ce5912b1b6e841a2e4939f32bef6971ff46824b9c1010000",
    ],
    [
      "ETag",
      "jEth1J3VbADDM1SB3bjuiQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:58 GMT",
      "Server",
      "ESF",
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
      "ff1dd0c97282300000d07fc9591d1459d21b094b71410394422f0c6094a0845da09dfe7b9d7ec27b3f20c932da75715fdd29076f604e367095adf6b58a302964092545a547e5dcf7a1d18483cf797a9595ad3e637bd75d4ae5c3c382f03857571205c9aefd2e91f890ef78da3862e392a3c2d7d0e6b90375d47c768ee45b5bb7a29eb977e3e1fc551c8eb858aaaa6f9cf69aba66ba89c2daa5f1fd9d31460263808788190c2265c412795aa8d1ecf136f9eba0b1f27008d53abcf5cf9e47e574300bf2344fd92ce5769e0a2d16ccad34e68ae3d1f432581bba234bf3a18105a053cd5adac5ecc515250817e0df1ef7734d5f0188262d6dc1ef1fc3a61a7e1a010000",
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
      "Thu, 22 Jul 2021 23:50:58 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-109-1626997768481",
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
      "535d4fa34014fd2b64f6d5b6d4d2429b346b53712569a902d5ec6e3664182e389532c80c1a63fadff732585763b23e3133f79c7bcefde085dcf332253392f0fca181faf9db4e24e48480a239bed66a77938ea018edd8f5caab9ed2f4b6fa95cfe788e02d4bd27d55404f8aa6662067dbb09fd7a2a9682d440f13f586e6b4379c9c4ea653db9e38963344a284225bf1f21ee9774a557236181cc5fbb9107901b4e2b2cfc4feed7df0783aa86ab103a6e4e0a3e60065e4e00bd5ef8560547151ceb7213a6824d431ec292fd0c33f6a9a9c7dccdde774dfcf11fcc81950c64453aad617a660a2cc78ded43a2b99bd10edf3dd8184eeca5d46061345b32fe392eee1c448a9a2b17aaec0b808366bc3f32f36c17a11791b3f0e9797ee7ad15f6e56dbb51f1ab7976ee01a8a260568ae3137cef4cdc70beaa720152fb57ad43eb7caaf1df23e0fa625a0b4842e18dbe6840e1d739a6489cd3267344e321392c449ec311d25269b5a60a50950e46951cda2a5289db16931cb4a637b9265b185f0983a93493c021b1860c72d0ae470429e6aaee09ccb4a48de7588dc065ee4c651b0f5978bc8d52564b429d47967ac2de0bd47850522e83f351dda2817a8d4b6dbf32337582c23efc6ed26bc829cb2e7f001679cd14202a2698dcd5350af458a0d23fe62ed9e23584fecea189464f6fb85b43d6f5dbc6bf91b3dc201b67695fe92300a3cff87b67344dcd0a2d190c7ee402ab47c87b5a1ebc31f44e2967659c8f5d60d7e92ee29800c6a28d9d7d344b00e7cfdb71d371fc1b8fba82315de7179986c55580ddd12715def2bdb193b9639251a5cab4fb1b1e91cdbd6e66833c21e4af55a52b7f9586927d6c837100671febe6ed7e12fb3513a1a7b040000",
    ],
    [
      "ETag",
      "rtjVd3el3jcQLIpwddWpZg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:58 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1626997768481"
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
      "0000000002ff8d92d16e82401045ff65fa8a89564525f101ad5612b5563169d218b3c280d885a5bb4bad31fe7b67a9b54ddba47d8199e1cc72ef85233c2559080e6c92f8b94079b88a51df9b628eaae05ad12d179942b000358b89ec8fe2452b1ac6ea35abef27deae5e6f3e70b7db2542055b4c1938478812e4a102e7f108194b91d602c18b345b979d05fa909be1c29f7bd35bea53119a7eba1c8fddde780027ebb21832cdd625ff8fb5d5c9829dd8cc3142895980464b2ec50e03ed199b8aa539c78a12850c504109970f62298a9c49212a34a9d4aa9d4acdbeb63b9d56cb6e37da3522b908984e4446f0724102410bcdf85cecc926d804c8b224c751797da17112964e4ce94d7dbb510afc0a90b628e1b8fe1b24c15b46dfe1033b67f09d63a928327da186e33bf7b7e328d4cfa36e5c7ff083509aa2ba20be37192c7c773233dceaecbd77d0a8665250920a4d88b56aa3dd6cd9d5f75cfbc2644def71b42cd08280d1ef314a343811e30a4f6f4eb3d1af7c020000",
    ],
    [
      "ETag",
      "CHgS7fFgsxn3wMIj335XlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:59 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1626997768481",
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
      "54",
      "fd6f9b3010fd5790f74b2be503f24142a4a84b13d621a5a405d22a9aa6c48049dd124cb1e91455f9df7736a56dd66d9590e07cefdd7b679f79460f348bd1088574fb589262ffe59e85a88188c05b58d5bfcd2ce167fef94579b91f3cb2ec8ef8abebf1181054b238dee5296972561611e1a3a5dfda16accc71c158130a350d436f1a66c7b4acc1c01cf686061039499339cd1e807e2744ce47ed762ddeda32b64d09ce296f456cf7bade7eeab4f382dd9348f0f6b1661b6478fb13d5b394455850968d973e38283929d66487690a1edea871f8f5b8768be25d6b0be0271a111c45accc84f40525229625745b16aa2a1a3d23e5f3dd07f2edb93d0db4e962e906271bbc93e4cda986b956070d6d034d2534256b1a6f6466bdce1fb46fdee21232e0e00e73c237daed77dbb3b5b7a58d36d6ceb4893bd38e0b38aeb6745ddb0fb493b353edc25b2cafb4f3d511069cc7840b9a29df010e53223dbfecadf3f14825010b10ad92eb816e6263a85b61120ea264d8ed87894ec270180efab81bea91d523bd382418784256572c9cb1cc0ca3d84a3a7d13931877fb3834f44e4892eed0e8f63b46b7134726497443478706fa5550416694e78cd36a7fd1ade704f63af096ee7412d8aa8d0497a99855e66413ef7d0a681240ffe9eb20b39481923c2cc70d6c6f320d9c1bbb9a8f39d9e268ef3fc2842438e504d0b8c03b224871c962d83474b5f09dc059b8933930d4a15fd5088e463f9edf08c13e57bb2cd41bf981e7b817ca408db8c169a9204fd507c23978458743e3df65269e375981342e0abcff2307ed983d49ff8b84c2aba8b2594b1a48aad551e72832d1e1e7019e0682eb5569a1eba5edad50b5e4918414248b3e1f2600abc4e7bf89faca02182e2de8700131cc6ec4a54a54906a86e94eb9afd8c3be65f4d54f46e0427cc875ac7e7d58b286ac487624132f2d555756ed9b",
      "4c95fc150449183d579ddbe137cc6ee8c734050000",
    ],
    [
      "ETag",
      "0FD9tSnSBGuMy7qonheSYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:59 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1626997768481"
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
      "90",
      "4f",
      "6f",
      "c2",
      "30",
      "0c",
      "c5",
      "bf8b776da5964dfc9338d0a96245088dae9cd084426bba425b97c4d15421befb1c8676de2979cf3f3bcfb9c2b96a0b98c2a12a2f1675ff54226fdc2545636b367274d41a040f90552964328fecf21064995e3c5f74162ffbcd60bc99cd8430f917360aa6573856581706a6bb2bb4aa4169530dd99605e2be733a5967f1224ec568a870c67abb5acda3550c37efaf69bfefceff6af9bc7970a2438a47d4d8e6e832749a4e9873e2d633aae96af40d599da3813b7c2f949a6ca734912f8e1f86811f0e07c3c964341a8e5fc6a19035e58a2b6a05de7e4838606255a7f42deb41000f1df58ce65d934c37583c2a32f295dcc32c81585bf42057f2476f15ffeadb0f371c3cda80010000",
    ],
    [
      "ETag",
      "IABuJb0TTrG3qrTEJyQ28Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:50:59 GMT",
      "Server",
      "ESF",
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
      "00000002ffedd44b7282300000d0bb642d0c4210e80e146444017fe5b361680810d0c8242860a777afd37d6fe03bc4fb06394298f3acbfb598820f30e5b22122d1eb746bb9af9c7468ece24b5a6d556ace6f49dbe850984a81c5da452bed9e2ba17168ecb33108edc3beba61e43cf58a3e86dc3b05a6c22e3460dd31c51816e44e76ad89cc7a8b0e7e3d41ba49da5d66515485f3b91c387e7d8cd59a77792e5d8b4706378eba781e59fff487354e46de4972a1b8ba32f82b6d626e74da13d27e5ee0b8bc738fc7d9dadda42c947abe608a2e5f059304de19dda212420bf5bc844835ab547c7b7bfb1f98013c7684619e91d7078a6a1833f09743d64f1d7e0d61e19c61067e7e01ba7be37c3b040000",
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
      "Thu, 22 Jul 2021 23:50:59 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-111-1626997768481",
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
      "00000002ff85536b6fda3014fd2b91f77185100a7920a115d1744583d085d0aa9ba6c83137a94b8843ecb4aa2afefb6e9cd2b59bb47e8aed7bce3de73ef24cb6bcd890114978b6afa17afa742f12724240d10c5ff7b4a0dfa2f2cab9d9c2ed8ffd55f979badd3e8ec788e00d4bd25d9943478aba622047eb5537ab445dd24a880e26ea5896d5b1ecbeed798e63bb03d742a2843c9df3628bf43ba54a3932cda378371322cb81965c7699d8bdbe9b0f7db3acc43d3025cdf79a26ca48f303d52fb9605471518cd72b74504ba862d8519ea3873fd44d72f63e7797d35d3743f0036740191375a11a5f98828922e5595de9ac64f44cb4cf3707b2f2e7fe343298c8eb5d1117740727c6862a1aaba7128c8b70b93066c1c5325c4ca2d9328857d34b7f31e94e97f3f522581937977ee81b8a263968ae3136cef42dc00bea6f402a5e68f5a8796e945f3a34fb77300d01a525b4c1d8e9d9d4727b5e92260e4bddd36192f62049dcc419d2d3a4c7bc010c360950e46951cda285284ea9ed0d8660c7e030271e24b613bbd067b1d3a7769f3a7daf670dc9e1843c565cc13997a590bced10b90967911f47e13a984e225f9790d23a57e7adb1a680b71e151688a0ffd47468a25ca052d3ee5910f9e1641acdaefd76c273c8287b5aed71c629cd25209a56d83c05d5426cb06124982cfc7304eb895d1d83928c7e3e93a6e78d8b372d7fa54738c0c6aed25fb28ac259f055db3922ae695e6bc8437b20255abec3dad0f5e11722714bdb2ce4fbda0f6f49fb14420a1514ece3692258073efedb8e9b8f60dc7dd4910aefb83c4c362aac827689b8aef785ed0e3dd772880657eaaf98ddeb39deb16d4d8e2623eca0502f25b59b8f95b662b57c056110e71fe8761d7e0377c0a4567b040000",
    ],
    [
      "ETag",
      "qanaKTpP7WkeYZqPp+Ckkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1626997768481"
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
      "86ffcbe9a3b8895354363f605ad1d44cb1b59a73573820065cbcf79273ceffdeb964d6aaadbec03987e75cdef78503bcc4590036ace2685ba0d85f44a8ee75314559244ad22de799443000158b887c7ce867b5a8b26e0e6e9ffc59ddadacb6adcdaedb2542fa6b4c19d80708634c0209f6f301329622adf93c29d26c597606a87dae87336fea8eafa94f79a0fbf17c38747ac3011c8df362c0145b96fc3fd6164703367c35c51005663e6a2db9e01bf495ab6d4a96e60956252f848f124ab87c10095ee44c705ea549d534cdaa69d5ad4ea7d5b2da8db64964c27da6629e113c9f9140505cb164ca7764132c02445992e3b0bcbed2380e4a27ba74c79ed528057e05485b1827b8fc1b24c16b46dfe1033b65f09d63292f3275a6ae8677ce6fc751a89f47f51d6ff083908aa23a239e3b1acc3c6734d1dce2e4bdb757282782539212758866add16eb6acda7bae975c674defb19528d0009fd1ef71132bb04396483cbe01b0f908137c020000",
    ],
    [
      "ETag",
      "XVDn0g+h5EJZcS2I+bq7jw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:00 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85546b6f9b3014fd2bc8fbd24a79401e3c22451d4be88694928c9056d53425c698d42dc12936adb22aff7dd7d0b4cdbaad1212d8f79c7bcebdbee609ddb13c410314b3f57d498bdda75b1ea306a212af61d77d9c189deeb931f9e50bc227b39bc73b97bac32120986209bcd966b4297859102a068b796b5df0728b0bce9b90a869189da661764cc7b12cd3eed9061005cdd209cbef807e23e5560cdaed83786bcdf93aa378cb448bf0cdcb7efba1d3de16fc961229dac79a6d9011ed0f54cf324eb0643c1f2ee6e0a014b458d20d66197878a526f1e7e3dc2d8637ad35801f18a198105ee652f9821484e7295b974595150d9e50e5f3cd079a7b136f1469a3e922884e5678a3c8ab530d0bedb068682b282a65195db264a522cbe5f64e3b0fa717100107375850b1d2aebe79a1a769ab044bbad286da99e60663ed98ec07da2208bc79a49d9c9d6a5fc3e962a67db93ec280eb840ac9f2ca7384e38c2abfcf7df5df1fa72260091eeae0d2d24d6cd8ba13a7b14552bbdb8f539dc6b11d5b7ddc8d75e2f4682f8929069e54d92b16ce79de235dcb36fa268e71d2b162c7e9139d62d3c27162a48e999ad84e3a7d4747fb067a2c98a46326b65cb0bab7e82af4236f19858b60e4465e55468acb4c8e6b73aa88b73e251409a0ffd4b55751c641491d941f445ee88e22ffd2ab676342d798ece6f7301d29ce0405342ef0864a5a5cf0049a8666d3b91ff9d3c09d00a33af0d90121d0e0c7d32b21da6dab2ecbea8dc6aa80fd9b8497382b2bc043fd813a7a476fea30bf7db4df37fe9dc90d43f71ad47151e0dd1f31a8c8ec29fa5f742a7cb5aa9d1e740da4d45e5c1cad4cb4ffb987a781e076d55ae8fbc20baf51bd15d2941634271fcf1380abc0c77f89c38d0530dc59d01112d630be44281552d07a8cd9a6725fb36d53b70c0755e042be8bd97df3705e2a87ca48373497cf25d537b6ea9b0a95e205044198bec00fbe42f437f08404b233050000",
    ],
    [
      "ETag",
      "AwL123F1LzIscoLPhwkAeA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:00 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1626997768481"
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
      "8d904b6fc2301084ffcbf69aa80d6ac343e200080152844a0a521f42c898250d24d9d4deb4a528ffbdeb807aeec55e8fbf91677c86635aeca007db34f9a8d09c6e12e4851b62b455c656b6920a8be001b24a845cbc0c26abe574f410c66dcdcfdfb73ffc1a0dfa7d21ac7ec75c41ef0cfb14b39d85dedb190a95a3d8544e55c102f1a974e7d97c399e8c631172da3961be8aa2c1301a43edfd99369bf2f82fcbbaf6e040db18f768b0d0e83294860ea879e6ea59959719fa962aa3d14203371789a1aa5486c817c50f82961f84adb0db6db7c3ce7d27103223ad38a542e0d59384032656594c5f520f1c609a519aee9bf5b3915d89ebb4aed757d3f0c4681f0d49048beef5bb4b9211b9742ca9d954e88156f291d3942fe7fa1742770db1a5010000",
    ],
    [
      "ETag",
      "QYAGUTHC56R7ctXx/ztZLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:01 GMT",
      "Server",
      "ESF",
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
      "8b08000000000002ff1dd0516e82300000d0bbf4db185418747f2bd2545a22ca70c00fc1ae13040ab64cc065779fd911defb0105e742eb7ce86a21c12b988b355cf225ed1de41eae9d9ccf28a9f7c9f8291f1f6bb466045dbdd93214dfc441d954f795a97854e1621bf14218a8b3f5d0f6b3a6ae393644aae6ec0f079bede58474509f2e16997372dc66cc2613a6418c075ed7b793134cd44f1863668c8d8d91854474c6c823863c2785071b6b32bc75dee8d348ed6e97545bf77d9a9961896168633f95d7bbf73265d0f2ed46565fc7115978e5866d5d56256c93c7f73bbd641ddd796001c4d4574ae8bc7a723716840bf06fcf87b917cf00240a2514f8fd0306f7fa6b1a010000",
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
      "Thu, 22 Jul 2021 23:51:01 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-113-1626997768481",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda3c494212295aa394ae6c816c40da55d3848cb950af8029369dba2aff7d17d374ad2aad9fb07dcfb9e7dc078fe496970959929867770dd40f1f7e89989c105034c357f8530477d7eea4bae0f6e7db2f66b5ffee5cad572b44f096256951e5d093a2a919c8e53ee867b5682a5a0bd1c344bdd1c8ec8d66e3d9626159b3f9643e42a2843cddf2f216e9374a557239181cc5fb9910590eb4e2b2cf44f1fc3eb81f0faa5afc02a6e4e0b5e60065e4e01dd58fb960547151aef6013a6824d4111494e7e8e11f35894f5fe7ee735af43304df73069431d194aaf585299828539e35b5ce4a968f44fb7c712081bdb537a1c144de146554d2024e8c842a1aa9870a8c737fe71a8e77bef3dd75e8ecbc28d85cd8eebabfd96df7ae17185717b66f1b8ac63968aeb1324ef5cdc30bea2720152fb57ad83eb7ca4f1d72de0ea625a0b4842e1859c3191dcd878b388d2d96cecd699c0e218ee7b135a5663c648b094c921828f2b4a866d152946026638b521a513a4ca289655a51bc988e23369ea4161b5133314d723821bf6baee08ccb4a48de75885cf94e6847a1bff736ebd0d625a4b4c9d55967ac2de0a547850522e83f351dda2817a8d4b6dbf142db5f6f42e7d2ee26bc858cb287e00e679cd25c02a2698dcd5350bb22c186116fedda6708d613fb7a0c4ab2fcf148da9eb72e5eb4fc991ee2005bbb4a7f4910fa8ef749db39222e69de68c87d7720155abec1dad0f5e12722714bbb2ce4dbdef6af49f7e4430a3594ecfd69225807deffdb8e9b8f60dc7dd4910aefb83c4cb62aac866e89b8aef7893d9f8dcc854934b8566f625373786c5b9ba3cd080594eaa9a46ef3b1d24eac91cf200ce2fc3dddaec35f1f8fcb1f7b040000",
    ],
    [
      "ETag",
      "ezmSqYM4pHiEJkK3pUXIWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:01 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d925b4fc2401085ffcbf8688954a140131eca4d21dc2ce5c11842b6ed148a6db7ee6e3584f0df9dad88464df4a59d997eb33de7b407788ab3106cf0e3cd7381627fb14175af0b1765912849b79c6712c100546c4364fd6a5befcb917ff9306a395d77d99b65fec069b78990c1165306f601a218935082fd78808ca5486b014f8a345b979d016a9febe1c27387d35bea531eea7eba1c8f9dceb80f47e3bc1832c5d625ff8fb5d5d1801df75d8c506016a0d6920bbec3400db54dc9d23cc18ae48508504209970f36821739139c57685231cd9b8a695d5bad56a361356b4d93c884074cc53c2378b92081a0b86289cb5fc926580488b224c751797da1711c964e74399c7a56ad14f815206d519ce0fa6f90046f197d870fec94c1778ea5bcc8d4991a8c67ce6fc751a89f47f51cafff83908aa23a23de70d25f78ce64aeb9d5c97b67af50ce05a72425ea10cd6aad596f58d5f75cbb5c674defb19528d08080d1ef71172bb02396483cbe01c495823b7c020000",
    ],
    [
      "ETag",
      "5/h5EsJb+YJ9ACRUDOnbFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:02 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1626997768481",
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
      "54",
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "fbd24a796042c843aaba2c651d5a4232425ab5d3941862a85bc0149b565995ffbe8b69da65dd560909ec7bcebde7be7842772cdba0210a587c5fd262fbe19607a881a82431dc1631bfe97a3fc7b36977fc758baf094f6e1fe3931340b08a25489a27b429785984540c978b565cf0322705e74d70d4c4d86c62cbb006835ecfea9b7d0c44419368c2b23ba0df48998b61bbbd0fde8a398f134a72265a214f5feedb0f463b2ff82d0da5681fc66c4318d17e27ea69c2432219cf4e960b50500a5aac684a58021a5ea99be0e3a1ef1623692b06f0030b2909435e66b2d2052e429e452c2e0be5150d9f90d2f9db075ad8137bec6be3d9d2f58fd624adc8eb638d086d7f68686b482a62095db1cdbab2ac56f99df6d99b4dc1020a6e88a062ad5d7eb13d5bd3d64282bab576a29d6a23f74c3b643baeb6745d7be16b47a7c7dab9375bceb54f57071890bda142b24c89f64990d04af073619db7fdac08448288dab8eae916c17d7d1044412f8cfa9d6e10e93408fa41af4b3a811e0e4c6a6e024a80272bef8a45329e0d0641578f8c1e364cdad53b3dc330f54e17eb81d1b33a9b7080830d8eb019a25d033d164cd23326722e585d5c74e939bebdf2bda53b1ef9b64a23226522cf6a715512bfeb94902480fe93d7aeb2320e91aa4e39ae6f7ba3b1ef5cd8f5704c684cc2ede21ec6232289a080260549a9a4c5946fa068683e5b38be3373471360a88ecff7088186df9f5e09fe36575596ea8d7c670a3d1a4de74ac31e74419252a11eea0f64e886ded48d26eefad818e2ce109b2d5dd7afd16ed7f8b7f391e78dae4010",
      "290ab2fdc306495a6645ff4b548557a75afc5e054655b4174d07270bed7eece06920d8b83a16fab6b4bd2b545f7934a205cdc2f7470cc0caf0fe9f63bfc500863d8638b01192c14487a28a1216b49e6c962af535bb6f19d8b2900217f28dada30ff62dac7c541e694a33f99c52bdc5aa6e95a9142f2030c240ba8e7b0ed65fe35ec3e047050000",
    ],
    [
      "ETag",
      "rgoh5RzCOM5CKy1Zaoljwg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:02 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1626997768481"
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
      "02ff8d904b6fc2301084ffcbf69aa80d205e12873ea2960a45342da8528590099b3490648dbd698b50fe7bd701f5dc8bbd1e7f23cff804fbbcdac218367976a8d11caf32e41737c468eb82ad6c9a2a8be001b2ca840cd36839d5ddc3e1fd274a9f1fae97ddce7c9e4d2642d8e4134b05e313a439165b0be38f1354aa44b1a992ea8a05e2a376e769f4163e86b108256d9d102d66b3dbbb59088df7675aaff5fe5f9655e3c18e3631a668b04ad065d0867698f0d4d5b3aad405fa966a93a085166e2f3243b55686c817c50f829e1ff43bfdd16830e80f7bc340c88212c53955022f5e251c30b12a62fa967ae000d38ed2346dd7af5676252ed3aa595d4c7747463b3724112cbad76fce49eec9a56349cda6460f12251ff994f3f9dcfc025ecc78bfa5010000",
    ],
    [
      "ETag",
      "EfNVIp3qqXxNfJD/V32PPg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:02 GMT",
      "Server",
      "ESF",
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
      "02ff1dd04b7282300000d0bb642d0e1aa9d25d28a9500a531011dc307c0243f8484250c0e9ddebf408ef3d41926564186271ab4907dec19c6cd575b6b6fa83f6e196856f3a563979868d17999a8da3b0e658f3fdb6f1d89be4a6d41c8fe68eeb3b9676b942e3892ebaacabb9088bdced2ee7564468b4b934cc90d80c5f5352fb48c25ea56dce9f085b22c356b53ffc68c12375992d4e8be77d577eebb634241d8c8aaf791c483b244708a17e37cad32817c6d589f61b0da14b7d8befbd11d8014d6f49e36925147c412743091f321af30e33cb6fc67ec161c4b08d8ba0072b40a6bee26488ab17172aaaba02fff658cc3d79056824e18483df3f07c410581a010000",
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
      "Thu, 22 Jul 2021 23:51:02 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-115-1626997768481",
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
      "7b6d4248482091a2354ac98a14480ba4d5344dc81843dd02a6d8646aabfcf75d4cd3b5aab43e61fb9e73cfb91fbca00756a5688112963fb6b479fa76cf137486a8c439bcae469b2befd9bb8a36d713fd4ed4b879aec2ebe51210ac63095cd6051d08de36848ac53e1ce60d6f01c6f900120d0c633a3066e3d97c6e5933dbb40d200a5a645b563d00fd4eca5a2c74fd243ecc39cf0b8a6b268684976feffa61acd70dbfa7440afda3a60e3242ff42f57bc109968c57cb7d080e5a419b98969815e0e11f354dce3fe61e325c0e73001f18a19810de56b2f3052908af3296b78dca8a162f48f97c7740a1b375d6914678d196555ce1929e69299638964f35d536c1ced35c7fb30bbc55e4eefc385c5f3ade6ab8de6df79e1f6ab7974ee068122705555c6da99dab9b0f17d04fa990ac52ea51f7dc29bf76c8fd3c988e00d282f6c1d81acdb0618fe649965824b327d3241bd124b1136b8a27c988cc4d6aa609c5c053a28a852b5e25937432b2531a63738c63d3b28cd84ed3796c9864664c33486512743c437f1a26e905133517acef10ba0ddcc889a360efaf5791a34ac8705bc88bde5857c07b8f120a04d07f6a3a7651c641a96bb7eb474eb05a47ee8dd34f784b734c9ec2479871860b41018d1b689ea48dc7536818f2579e73016035b1ab5350a0c5af17d4f5bc73f1aee56ff40806d8d995ea8bc22870fd1fcace0971838b56410efd01d560f90e6a03d7c7df80842dedb3a0ebbd13fc44fd534033dad08a7c3d4d00abc0d77fdb69f3010cbb0f3a42c21d9687884e8534b45f22a6ea7d65dbb3b13d35910237f253",
      "6c6e8d4f6deb72741969492bf95a52bff950692fd68a37100461febe6ad7f12f4f2764a97b040000",
    ],
    [
      "ETag",
      "A0FPMzMPTFQ3/hsparznSQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1626997768481"
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
      "ff8d92dd4e83401085df65bc944631edb625e905d56a49fa4be98dc6342b0c940a2cee2e35b5e9bb3b8b5a8d9ae80dcc0cdf2ce71cd8c3635a44e0c0439a3c5528772709eab9297c5455a615dd4a5128040b50f384c8b3ab88452fd129f3ab21f3e6d3f0b6b5ed26bd1e112a5c63cec1d9439c62162970eef650f01c692d14599517abbab340ef4a335c04be37b9a13e1791e927cbd1c8ed8f0670b08e8b11d77c55f3ff58bb3f58b0110f3ec628b108d16829a5d860a83d6353f1bcccb0a14425435450c3f583448aaae45288064d1ab6dd6ad8ec8275bbed36eb343b36919908b94e4541f0724102410bcd335f3c934d6004c8ba24c7717dddd2388d6a27a6f426016bd602bf02a42d4e335cfd0d92e035a7eff081bd67f09de3b9a80a7da4ae4753f7b7e328d4cfa3aedc60f083509aa23a2281371e2c02773c33dcfdbbf7fe4ea39a4941492a3421dae7cd4eabcdcedf72bd14266b7a8fa3658516849c7e8f61aac18979a6f0f00aa540eeba7c020000",
    ],
    [
      "ETag",
      "/Dd6dzd+6RuH6IQOcZ5v9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:03 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1626997768481",
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
      "547f6fda3010fd2a91f74fabf12b09840409758ca62d1a0d348476689ac0310e751b621a3bb4ace2bbefe2145ad66d952225e77befde3bfb9c6774cf92396aa1902d1e329a6e3eddf1109510957801abceb7e1c5e489dcfeba7a1a3af1d3f7f073e361fdd86e0382e52c8197ab989605cf5242456b3caa2c529ead70ca79190a9575dd2aeb9661394eb369d9755b07a2a071d467c93dd06fa55c8956b5ba13af2c385fc414af98a810bedcaf57d7467595f23b4aa4a81e6a564146543f503d8939c192f1a43d1e81834cd0744a9798c5e0e1953a0fbf1cd6ae30bcac2c00bc668462427896c8dc1794203c89d8224b5555d47a46cae79b0f3472fb6e37d0ba83b1171ccdf03227cf8e352cb45d50d266d054c4623a65f3599e994e57f7da993fb8840c38b8c5828a997673e1faaeb6a7696ded44eb78a7da21bde76963cf734781767472ac9dfb83f150fb3a39c080ef39159225ca7580c398e68e5f76b6f7fe40730296e0a2484e9b350beb76cd09a3b04922db6c84518d86a11d361bd80c6bc4a9d3fa3ca4187832afae5838e149a3ee60d334235b771a966dd7f5ba5ed323c38e8c39260ec18e898d26316a685b428f2993f494891517acd85d74e3f702771af863afdb095cd54684b3589e16e6f226defa94d02480fed3d736cf320e4af951f5bcc0f53bdda077ed16d3d1a70b4c36a307988f08c782021aa77849254d2ff91c360d0d07a35ed01b789d3e30d4910f7708815a3f9e5f09c166a57659aa373aeb0f3a8155570e76906b1c670ab32e3e905e6900625bfa77998eef7726208dd3146ffec8413b96a2ff4541e15554d8dc2ba25c6d1719079185b63fb7f094105cae420b5d8d5d7f828a259f4634a509f9789800ac121fff24761716c0706541474888617689c855484a8b19664be5be60db96d9709a488153f92ed734ccdd61e535f28a744913f9d2527161d5bee5a94cec419084d1f37ade3964",
      "7f03b716ef2032050000",
    ],
    [
      "ETag",
      "9KPHYxchzQxP9lxXb+5qvw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:03 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1626997768481"
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
      "50",
      "5d",
      "6b",
      "c2",
      "3014fd2f77af2d2c9dd40ff0610eb7c944b66e0e6488c4f4b656dbde2c492722fe776fea903dee25b9f77c847372845d51a7308075917f37680e3739ba373f24689bd259be34d5162100743267a5c817aaff98dcbd5047278bdea749376bbb1f0e5961d5062b098323640596a985c1d7116a5921db64454ded58e40edaef93d9c7f8699c305051ea81d97c3abd1f4dc7700aaea6d54aeffe65599e02d8d23ac10c0dd60a7d066d688bca4d7c3d2b2b5d6268a9310a2db4e296c80d355a1aa29091508838147114f7fbdd6edcebf4042b4b52d21554b378fecee1c0919365427bae07110b4c3b72d3ac3d7f5ad897f09368b3fde5c4958b3cb7fc7d707470685f0d713c8b3ed9ed25e503f9e48e1b39d360004af2273f17eeb29fce707199a6c1010000",
    ],
    [
      "ETag",
      "1gYc9FR3Ko4pRY8Vrdhbsw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:03 GMT",
      "Server",
      "ESF",
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
      "d04b7282300000d0bb642d4e803a25ddf19102f213aac82a831090824093f0d3e9ddebf408ef3d4196e78431ccfb8674e003ac9984b6f9f630289a7efc1695c9a893743c9d90796670fa1957a1d4188c8798a242b54e1de6ca92b9c2c1e8767bea48efbad5b7176e6132cd8884add3d986bfca769ab69e4983e86c9b7c9f2dd72966a55647e31c36b319347c1121d5434e639b0b6bf8652df056f91784ddb36e0b4e7eab4c4369eff73716de5d2959d2d1171df5ca2252c1237ccc752e16b2c0d424f23e3ba7efeb21f195be683537c36650791369d612eef507d800b20c35250cd72faebc436803feed98af0379056824a38482df3fa4a9cc5d1a010000",
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
      "Thu, 22 Jul 2021 23:51:04 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-117-1626997768481",
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
      "4fa34014fd2b64f6e3dad20752daa4599b8a2b494b95528dd96cc8305c70943294196a8ce97ff732585763b27e6266ee39f79cfbe0853cf222211312f36c5743f5fce341c4e48480a219be8ecdf2aafa2913b07762b7bf2aad276f75773d9d2282372c49b7650e1d29ea8a819c6cd6ddac1275492b213a98a8d3ef8f3a7d7b608fc7a391ed584e1f8912f274c18b47a4df2b55ca89691ec5bb9910590eb4e4b2cbc4f6fddddc0fccb2120fc094343f6b9a2823cd6f547fe58251c54531ddacd1412da18a604b798e1efe5193f8ec73ee2ea7db6e86e03d6740191375a11a5f98828922e5595de9ac64f242b4cf0f07b27617ee3c3498c8eb6d1115740b274642158dd47309c645b05a1a9e7fb10a96b3d05bf9d17a7ee92e67ddf96ab159fa6be3f6d20d5c43d13807cd35a6c699bef97841fd04a4e285560f9be746f9ad43ded7c134049496d006a351cfa67da7378ed378c45267781aa73d8863271e9dd261dc63630bac24068a3c2daa59b4104592c6b615db4ee43070226be03811ed597885d41a5a34198fac01399c90a78a2b38e7b21492b71d22b78117ba51186cfcf92c74750929ad7375de1a6b0af8e851618108fa4f4d8726ca052a35edf6fcd00d66f3d0bb71db092f20a3ec79bdc319a7349780685a61f314544b9160c3883f5bbae708d613bb3a062599fc79214dcf1b171f5afe4e0f71808d5da5bf641d069eff5bdb39226e685e6bc8be3d90122ddf636de8faf01791b8a56d1672bd71833bd23e0590420505fb7e9a08d681efffb6e3e62318771f75a4c23b2e0f938d0aaba05d22aeeb7d633bb635e80f890657ea4b6c38383db6adc9d164842d14eaada476f3b1d256ac96ef200ce2fc7dddaec32b41cafb247b040000",
    ],
    [
      "ETag",
      "9/pPr+sde6qoqvPp4wIOYQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:04 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1626997768481"
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
      "401085ffcb78a549319522898756ab12b16a4be3c134cd0203a50283bb8bda34fdefce62ad464df40233c337cb7b0f36f09857097810e5d95383727d90a1be33c504555368c5b79a2a8560016a9131d9bcde8b38787647512f22ff515557ae7aba3b396142c54b2c05781b48732c1205dec3062a5122afc5543465b5683b0bf4ba36c36938f1c717dc9794987e3c0b82c13018c1d6da2f26428b45cbff636dbeb56045d104539458c568b4d49256186bdfd854a2ac0bec286a648c0a5ab87d90496a6a21893a3ce9d876bf633b87cef171bfefb83dd766b2a058e89c2a86675316089ab42826f4c236c16140b6253b4edbeb338ff3a475624a7f1c3abd56e05780b5a579818bbf4116bc14fc1d3eb05d06df39515253e93d751edc0c7e3b8e43fd3cea6c108e7e104a73547b24f4af47d370707d6bb8f9cefb70ad51dd4ae224159a10ed6ecf3dea3bddf75c4fc964cdeff1b46cd08258f0ef71996bf0525128dcbe01480bb0ad7c020000",
    ],
    [
      "ETag",
      "uxWacLv8Eb4boIksnK8sqQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:04 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1626997768481",
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
      "54",
      "7f",
      "6f",
      "9b",
      "3010fd2ac8fba795f203482010a9eab294754829490969576d5362c0a45e01536cb26555befbced0b48ddaad52a4f87cefdd7b679f794077348fd11085747d5f9172fbe1270b510b1181d7b0bbf1fed0afb3f3bb7165df5e06fa6f2f54ef93cb93134050c9e2382b52d2e6ac2a23c2878b79675db2aac025636d28d4d634abad99ba69db838169f52d0d889ca4c984e67740bf15a2e0c36e772fde5933b64e092e28ef442c7bdaef6ef46e51b29f2412bc7ba8d90519de7d47f53465111694e5278b3938a838299724c334050fcfd438fc7858bb4371d6590378432382a38855b990bea044c4f284aeabb2ae8a860fa8f6f96281e6cec41907ca78baf082a315ce247975ac60aeec8396b282a6129a92258d5732b35c1677ca677f7a011970708b39e12be5fa8be33b8ab292a0ef95aaf68872aa8cbc33e590ef7acac2f39c79a01c9d1e2be7fe7431533edd1c60c0784cb8a0796d3bc0614aa4e5c7a3755fdfa8246001369ae472a09a58b3543b4cc24194583d234c541286563830702f5423bb4ffa714830f084ac5eb370ce7235c6a64e6c5bd70dcdec5b896a1b46649ba61d59b86feb861d1bc0ec6b68d742bf4a2ac819e505e3b4395e74edbb81b30cfc85371e054edd4682ab549c35e664132f7d0a681240ffe96b27b3948192bc2bd70b1c7f340edc2ba7198f0959e3683bbf87014970ca09a0718933224879c1623834349bceddc09d7aa30930ea3b9fed111c0dbf3d3c13826d519fb2a8ffa596d9aff5f7802b9c563562d32c9066a0ddaef5ef1223df1fdd802c2e4bbc7dbbfc9bf56b7c1d35169ff49054db47fa4164a2dd8f1dfc5a085e56a3852e178e7f839a2d9f24a42479f4fe2001b84ebcff85d8bf5600c37b051d2e2086b98db854894ad2cc2fcd6af70ddb320d",
      "b567a01a5c8a573958ed2f4ad69015494672f1d852f35aeb7393a98a3f81200963e7b9de3964ff0241790f112f050000",
    ],
    [
      "ETag",
      "vNziXPGkCu9hQT2xNb0qfQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1626997768481"
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
      "90",
      "414fc2401085ffcb786d232508a5090751224442b4428c31846cdb692db49dba3bc53484ffee6c259e3c78d9bebef966f3de9ee09057090410e5d96783babdca909fad08d134051bf9d454190407905526e4a15dddf792f5bc3d46fbebe851bde2cdfa2d9b4c8430f107960a8213a439168981e0fd04952a51d654494dc502715bdbffc56a3d7b98856294945863b5592e6fa7cb199c9ddfa5ddae3efc6b657b76604f5188296aac62b4196a4d7b8c7961eb1955d605ba861a1da3810eee0699a6a6569ac815c7f53cdff586fde1783c1a0dfd81ef095950ac38a74ae0cd8b8403265645485f520ffa02e84e4ad3b43b8f9d6d4b5cd4d6eabf669e9d6d2f174e5b46f3a449e219b4c9067eef27e71dd9ec2c9d5837e840ace499e7394390aac2e0f91bd86ed0ebc4010000",
    ],
    [
      "ETag",
      "kyND0dTHyvbj/bKaWe5TYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:05 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "0000d0bb646d1d089f92ee443381626b148a950d83106910302654039ddebd4e8ff0de0f28ca9229950f9733ebc10b180b88e6e53c129ebfdc72b363c631e62b1cd7f1b89d3283d8f766a35bae43d8ac7689637a291cec723cc3ce8e9659dc6df7d76b2b2e96d2614d4ae8554fbda4725305dd62e1e28f356ee9ed902042f736770b384427f94e6bd9bee2ba57eb09b928a1ba2832e5b579921293508c8f5011a1bf53039bcd3a3f387a4a852543cbe76fbb4f66337ef36576b85192e12eba5446f7d5d4a6ff1cc86bb0741215994d2f4ed35da0da0733c0b4e092a99c3fb89683d00cfcdbf36114ec11e0b34232097eff007a014c511a010000",
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
      "Thu, 22 Jul 2021 23:51:05 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-119-1626997768481",
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
      "fd2bc87b6d1248098148d11aa5b48d94908d9076dd3421e35ca85b82093699a22aff7d17d374ad2aad4fd8bee7dc73ee07cfe489171b322209cf763554872f8f2221670414cdf0f5fac0ee16bebddbff9c5b3f9c65963ddddb0fd9788c08deb024dd963974a4a82b0672b45e75b34ad425ad84e860a28e65791dcbe93b9e371c3aaeed5a489490a7735e3c21fd41a9528e7abd9378371322cb81965c7699d8bebef7f6fd5e598947604af6de6bf65046f63e51fd9a0b461517c578bd4207b5842a862de5397af847dd2417ef737739dd763304ef3903ca98a80bd5f8c2144c1429cfea4a6725a367a27dbe3990953ff7a791c1445e6f8bb8a05b38333654d1581d4a30aec2e5c2980557cb70318966cb205e4d6ffcc5a43b5dced78b6065dcddf8a16f289ae4a0b9c6d8b8d0b7002fa8bf01a978a1d5a3e6b9517ee9d0ece3601a024a4b6883f1d074a8e59a5e92264396bae78324352149dc6438a0e789c93c1bec4d0214795a54b368210a60ce90f63d2f4edc8119dba69dc65edf19c429a4eec0b21d130626399e913f155770c96529246f3b44eec259e4c751b80ea693c8d725a4b4ced5656bac29e0ad47850522e83f351d9b2817a8d4b47b16447e389946b35bbf9df01c32ca0eab1dce38a5b90444d30a9ba7a05a880d368c0493857f89603db16fa7a024a35fcfa4e979e3e24dcb5fe9110eb0b1abf497aca270165c6b3b27c42dcd6b0dd9b70752a2e507ac0d5d1f7f2312b7b4cd42beaffdf09eb44f21a45041c13e9f268275e0f3bfedb4f908c6dd471da9f08ecbc364a3c22a689788eb7a5fd8ae3318ba26d1e04a7d887996776a5b93a3c9085b28d44b49ede663a5ad582d5f4118c4",
      "f907ba5dc7bf447150067b040000",
    ],
    [
      "ETag",
      "GycWME4qvZL1X6OggkY4hg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:05 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1626997768481"
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
      "0002ff8d92d14ec2401045ff657c2d09552cd0c487aa8898820a35311a4296760ad56da7ee6e3148f87767aba251137d6967a667b6f7de76038f5991800ff36cf154a15aef2dd05cdb628cba9246f3ada442233880462c9894172111ed2fd3bb48ddaafec1eab4787183a3232674bcc45c80bf8134439968f0ef3750881c792d2659e5c5acee1c30ebd20e27d17830ea739f5362fbd14d1806c7610fb6ce6e311146cc6afe1f6bd3ad030f341f638a0a8b18ad9652d103c666606d6a9197121b9a2a15a3861aae1f2c1455a550440d9e345cb7db70bd7dafdb6db7bd4eabe33229291626a382e19b090b044346c8313db34df0185075c98ed3fabae27196d44e6c3918455eab16f815606d692671f637c8829782bfc307f69ec1774ee4541566479d8597c16fc771a89f479d0651ef07a10d47b543a2c1b0378982e195e5a6efde8fd706f595224e52a30dd16db63a876daff996eb09d9acf93dbe51153a100bfe3dce33037e2aa4c6ed2ba63ed8287c020000",
    ],
    [
      "ETag",
      "lJLooo2hfZTrXrG3vDnz1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:06 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1626997768481",
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
      "54",
      "7f",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2a",
      "c8",
      "fb",
      "a755f303920648a4aa63296b91529211d2aadaa6c42626730b9862d32aaaf2dd7798d236ebb64a4860df7bf7de9dcf3ca13b96add10811b6b92f69b1fd74cb096a212af10676cf1789713bf38ec83479bc20c9233eb226967372020856b1044ef384b6052f8b888ad162ded914bccc71c1791b12b58d9ede36cc9e391c5a96691fdb0610054de209cbee80fe4bca5c8cbadd46bcb3e17c93509c33d18978fab2df7de875f382dfd2488aeebe66176444f703d5d3844758329e9d2ce6e0a014b458d214b3043cbc52d7e4f37eee0ec3696703e00716511c45bccc64e50b52443c8bd9a62c5456347a42cae79b0f347727ee38d4c6d3851f1eac705a9157871a165ab368692b282a66095db2f5aa8a2c97f99df635985e42041cfcc2828a95767de106aef6bab5d27e94badea7daa9e6f867da7e16cfd716beefce43ede0f4503b0fa68b99f6e5660f03f6d754489629f3212609ad8c3f37d87b7fae15014b50ae834b4b37b161eb4312132b8aedfe80c43a25c426d600f7891e0d8fe9f19a500c3c5965572c9cf18ce8bd01eed903cb36f45e6c0c0786659ad05a3ba68635184484f48778dd8bd1ae851e0b26e919133917ac6e32ba0ebcd05d86c1c21f3ba1abca887199c8b3da5c55c45b9f128a04d07feada5551c641a93a31cf0fddc01987de955b0fc9846e70b49ddfc398c4381114d0b8c02995b4b8e46b681a9a4de75ee84d7d67020c75f2b30621d0e8fbd32b21dce6aacb52bdd13c0c3cff5c19681057382915e4a1fe404e0e5ed16ed7fa771a27089c1b90c64581",
      "b77fc4a01cf3b8a2ff4542e1d5aab6d9481aa8526b56bdbd9589763f77f0b410dcb15a0b7d5bb8c10daab7021ad38266d1c7c3046015f8f85fd1dc5b00c3cd051d21610db31b894a252a683dc32c55ee6bb66d9a034bfd69242ee4bb9839d49bc3aa725419694a33f95c527d6f55dfaa50295e401084d1f3d5b9ed7e034f6504b639050000",
    ],
    [
      "ETag",
      "GUl1jPI+bOlwHblwa+7L7A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:06 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1626997768481"
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
      "90",
      "4f",
      "4f",
      "c24010c5bfcb78a48db421fc69c24108d1c64ab44a3c184296322d856e67ddddaa84f4bb3b5b0df1e8653b7def379bf7f60cc7b2de4104dbb2786f509fae0ab44f6e48d1349535fc51541b040fd08a8249792dbe5ef798f462d99b3fc4a9eadff756c574ca84c9f628054467c84bac7606a2b733d44222af09494d6d19b227e5fee3e5cbe27691b22069e784e52a496e66c9025aefb2b4d9a8e3bf56d6ad0707daa698a3c63a439741693a60666357cf08a92af40d353a43031ddc1985a646094de4b3e20761df0f86e17032198d86e3c13860b2a24cd8926a8657cf1c0e2c5951a5f4c9f5206440772337cdbbf383e54157c24d4197edaf175ebcd079ebdf0b67278be65113c733e8920dc6a39f9c7372d92d77b2ba410f32c1cf7c575a887251196cbf0137088efbc4010000",
    ],
    [
      "ETag",
      "m/axWheL+Im+CMIRp0K+Ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:07 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0c97282300000d07fc9591cada0d0233415022e68c0e592c1183621869dd8e9bfd7e927bcf703224a59d390f6f9601c7c02197d18533a75856e5a7e3a8b157f3c14c155c1f1ba9a2f8b65d40f16bc7cc1d03bbb997a93c96c60a182e655d2bfcec44c84c0bdb9db69f231ece9b8e19be5f1640a07960b3cacb4c292f7d1e6c8858f55d1751bf8d4101f624b6de9c97ead7baf463cb7b721eab19da4174e1c68e6396659e628517a6cd6867250562ed7508d39b2b7f732d3bd56ed820b8f9a4e77e1b6f4a838543a9e5bee8c881ddd6bba0c487aadbef3d7cd2fc104b05164356b48f6e62e34c398807f3b69a560ef00934535abc1ef1fc1d22fc71a010000",
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
      "Thu, 22 Jul 2021 23:51:07 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-121-1626997768481",
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
      "14fd2b64f6e3da27b4409366ed565c312d554a75cd664386e905472983cce0c698fef7bd0cd6d598ac9f98997bce3de73e7826f7bcd892094978f65043f5f4e54e24e48880a219bef6cffbd6c945f835b8bcf95e5ae757be1bfe1c65d3292278c3927457e6d091a2ae18c8c966ddcd2a5197b412a283893a83e1a033180fc7ae6bdb63c77206489490a70b5edc23fd56a9524e7abd8378371322cb81965c7699d8bdbef71e87bdb21277c094ecbdd7eca18cec7da2fa2d178c2a2e8ae9668d0e6a09550c3bca73f4f08fba4d8edfe7ee72baeb66087ee40c2863a22e54e30b533051a43cab2b9d954c9e89f6f9e640d6dec29b47061379bd2be282eee0c8d8524563f55482711aae96861f9caec2e52cf25741bc9e9f79cb5977be5a6c96c1dab83ef342cf5034c941738da971ac6f015e507f0b52f142ab47cd73a3fcd221ffe3601a024a4b6883b1dd1fd381d3779334b159ea98a324ed439238893da266d267ae05d636018a3c2daa59b410c52875cd0198696c6fc7496c81ebc40975ccd81e0e2db76f9b23d71d90fd11f9537105275c9642f2b643e43af4232f8ec24d309f459e2e21a575ae4e5a634d016f3d2a2c1041ffa969df44b940a5a6dd7e1079e16c1ef9575e3be10564943dad1f70c629cd25209a56d83c05d5526cb16124982dbd1304eb895d1c82924c7e3d93a6e78d8b372d7fa54738c0c6aed25fb28e423ff8a1ed1c105734af35e4b13d90122ddf626de87aff1b91b8a56d1672b9f1c21bd23e8590420505fb7c9a08d681cfffb6c3e62318771f75a4c23b2e0f938d0aaba05d22aeeb7d613b63db322da2c195fa101b99c343db9a1c4d46d841a15e4a6a371f2b6dc56af90ac220ce3fd0eddaff054c52c81a7b04",
      "0000",
    ],
    [
      "ETag",
      "0J04DPR+NQYBp4JVI9RX5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:07 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1626997768481"
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
      "dd4ec2401085df65bc6d134ab040132e8a56c100f25334d110b2b45328b6ddbabb0591f0eece5644a3267ad3ce4cbfd99e73da3d3cc559080e2ce2e573816277b64435d2c51865912849b79c6712c100546c4964ed26beaf3f589bbbd791d749b75bb90ad8cbb6d52242062b4c19387b88624c4209cee31e329622ad053c29d26c5e7606a85dae87137fdc1d5c539ff250f78369afe7b67b1e1c8cd362c8149b97fc3fd6660703d67c31c6080566016a2db9e06b0c5457db942ccd1334252f4480124ab87cb014bcc899e0dca48969552dd3b2ab76b359afdb8d5ac32232e1015331cf089e4e482028ae5832e65bb2093601a22cc971545e37348ec3d2892ebb03dfae9502bf02a42d8a139cff0d92e015a3eff0811d33f8ceb19417993a5157bd5bf7b7e328d4cfa32e5ddffb414845519d10bfdbf726bedb1f6a6e76f4dede299443c12949893a44ab526b9cd7edca7bae175c674def719428d08080d1efd1891538114b241ede00beb9e9417c020000",
    ],
    [
      "ETag",
      "4JiW7Z1vVzQEHmwwshcaxw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:08 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1626997768481",
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
      "54",
      "fd",
      "4f",
      "a34010fd57c8de2f9aeb17b4056c62bcaa9c4752a947a9c6dc5dda0586ba0a2cb28b1f31fddf6f58acdaf3ee4c486077de9bf76676962772c3f2988c48c856b715948f9fae79485a04245de1eee1c3edec2abebbb88eedd4e6aef5f9e1ec3e1defef2382d52c41b32285b6e055198118cd679d55c9ab82969cb731515b378cb66e1ae6de9e6599f6c0d69128204d262cbf41fa9594851875bb1bf1ce8af3550ab460a213f1ec65bf7b67748b925f432445775bb38b32a2fb81ea41ca232a19cff7e7337450092817905196a287576a1c7ed9cedd6134ebac107cc722a051c4ab5cd6be3045c4f384adaa526525a327a27cbef9203367e21c05dad174ee053b4b9ad5e4e5ae4685b659b4b4251695b014162c5ed691c5a2b8d1befad3538ca0832b2a402cb58b6f8eef68af5b4bed67d5ebf5413bd0c6deb1b69dc5f5b4b9e739b340db39d8d54efce9fc4c3bbcdcc2a0fd188464b9321fd03085daf87383ddf7e75a13a844e526b8b07a26d5edde5e98845694d8fd6198f4200cedd01ad27ed88bf606308843a0c8937576c5a239b68cf6756ae996111b663f34f47e0430b0c0b0865632b47b900ce330b4e20159b7c87dc9241c335170c19a26930bdf0d9c45e0cfbda371e0a832125aa5f2b8315717f1d6a7c42211f49fbad675947154aa4fccf502c71f1f05eeb9d30cc90456347a9cdde29824341580685ad20c2494a73cc6a691b3e9cc0ddca9379e20439dfcd90621c8e8c7d32b21782c5497a57a9359e0bbde8932b0419cd3b45290bbe683d002bd92f5baf5ef3463df1f5fa2342d4bfaf8470ccb310735fd2f120aaf568dcd8da44e6ab5cdcad85a9964fd6b8d4f8be01d6bb4c8f7b9e35f9266cb87044ac8a38f8709c12af0f1bf62736f118c37177584c435ce6e246a95a884668659a6",
      "dc376cdbb4f59e4914b894ef6286d1df1c569da3ce0819e4f2b9a4e6deaabed5a14abc803088a3e7a9735bff0606a72b7139050000",
    ],
    [
      "ETag",
      "BxqShdvWjd8l8oI7+xPwlA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:08 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1626997768481"
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
      "0002ff8d90416f82401085ffcbf42824951a40120fc5986a424c8b7a304d635618110586ee0e31d4f8df3b6b9b9e7bda9db7df9b79b35738974d0e11eccbe2b343dd3f14c86ff692a2e92a3672b4d4180407905521a41a6cd753b55dcdbf06f1223e8e923ef09e2e938910263b62ad20bac2a1c42a3710bd5fa151355a5b4d5dc30271dfda7ab15ccf5e66a90835e556586e92e4394e667073fe4cbb5d7bfe97e5e3e6c089f6291e506393a1cdd06a3a61c60bbb9e51755ba16ba8d3191ab8c3f7874253d72a4de48ae20e3dcf1dfa9e3f1e07811f8ec2a19015658a4b6a04deac241c30b1aa52bac87af008bf75dc339a574dd2dda06d3c0a839f3153b2a35922b1eed0814cc92fcd4b86e8a02a83b76f9caa4c4783010000",
    ],
    [
      "ETag",
      "a+YTCaYSHz+BIBh4Ly723w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:08 GMT",
      "Server",
      "ESF",
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
      "000000000002ff1dd04d7282301800d0bb646d1dc482a43bb08a3f600505814d26908f9aa6110aa1089ddebd4e8ff0de0fa245016d4b5425e0865ed040753c2da6fbda7296c1f56045d2cef8f6e4da24e527a3234c9fd5c45e74673f2e4960c297c61676be34ab24616fd229a270ef7acad2194d3cdc945b952d544f87ee30069841dfdf442ccdf8160d82eb72ed41ecac2e6e08677c09acbb64eddc4d9d11e74f31d38fc3335c3595a4bb591ea57ae59a15505ffafb53180761d5f1703773a8260f028763fe9dbd9617ff53f1e3dc10de87b55679306642d964f76e6e37652a36a25fa109827bcd1b68097f70e706c613f46f276aa8e111e0006da041bf7f911a58041a010000",
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
      "Thu, 22 Jul 2021 23:51:08 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-123-1626997768481",
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
      "7b6d1292500291a2354be88616c80aa455354dc8980ba52538c5a65154e5bfef629aaedda4f509dbf79c7bcefde0993c14554aa62429f2c706eac3a77b9e90330292e6f8eaeeaff607db0d3df301e08b957ef76e97f57e364344d1b204ddee4ae809ded40cc47413f6f39a373b5a73dec344bde168dc1b9a23d3b62713d332ac21120594d9aaa81e907e27e54e4c078393783fe73c2f81ee0ad1677cfbfa3e781a0d7635bf0726c5e0bde60065c4e003d5cf25675416bc9a6d4274d008a863d8d2a2440f7fa86972f13e77bfa0db7e8ee0a78201658c37956c7d610ac6abacc89b5a6525d367a27cbe3990d059398b4863bc6cb6555cd12d9c6929953496871d6897c1dad35cff721d78f3c85dfb71b8f8e678f3fe62bdda787ea8dd7c7302479334294171b59976a16e3e5e503f05218b4aa947ed73abfcd221f7dfc1b4049416d005e3896ed2a1a5db49964c58668dcf934c8724b192c9391d273ab30d30d20428f294a862d10a6bd6c1b0f4b11d333020364cdd8ced848d62db3646b669a7e7e9c824c733b2af0b09cb42ecb828ba0e919bc08d9c380a36fe621e39aa848c36a55c76c6da02de7a94582082fe53d3b18d161c95da76bb7ee404f345e45e3bdd8457905376081f71c6192d05209ad6d83c09b5c7536c18f1e79eb344b09ad88f535090e9cf67d2f6bc75f1a6e5aff40807d8da95ea4bc22870fdafcace09714dcb46419eba03d9a1e53bac0d5d1f7f2112b7b4cb42ae364e704bbaa70032a8a1621f4f13c12af0f1df76da7c04e3eea38e9078c7e561a2556135744b54a87a5fd89669d9964114b896",
      "7fc7eca1ae9fdad6e66833c2162af95252b7f9586927d68857100671febe6ad7f137da46ca417b040000",
    ],
    [
      "ETag",
      "IwQwy9ISM6keeB8dKMYDrw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:09 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1626997768481"
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
      "ff8d92d153824010c6ff97ed1567d40895191fb0b498d414d197c6714e5814038eee8e1c72fcdfdb23b3a69aa917d85d7e7b7cdf0707788ab3106c58c79be7024579b14135d58587b24894a45bce338960002ab62172b25894f7ee74f09a95628161db349da2b9ef768990c1165306f601a218935082fd78808ca5486b014f8a345b559d01aaccf570e67beef896fa9487ba1fcf8743a737ecc3d1382f864cb155c5ff636d793460c7d71e4628300b506bc905df61a05c6d53b2344fb0267921029450c1d5838de045ce04e7359ad41acdcb5ac36a5a9d4eab65b5cd7683c884074cc53c23783e2381a0b86289c7f764132c02445592e3a8babed0380e2b27ba74c7be655602bf02a42d8a135cfd0d92e02da3eff0819d32f8ceb19417993a5383e183f3db7114eae751378edfff414845519d11df1df567be339a686e79f2de2b15ca89e094a4441d62a36eb6af5a56fd3dd76baeb3a6f7d84a146840c0e8f7b88b15d8114b241edf005d5a7da17c020000",
    ],
    [
      "ETag",
      "PVVyKIQFznyrVed844Au2w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:09 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-124-1626997768481",
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
      "0000000002ff85546b6f9b3014fd2b96f7a595f280402189547559c25aa49474045a55db941830d40daf62d329aaf2df770d4ddb748f4a2860df73ee39f7fa3a4f78c3f2088f71c092879a56db4ff745803b980a92c0ae31b93ce9c7fe22cb2fbc19d9dc6c4b6d4392d3534030c9e2242b53dae5455d85948ffd652fa98aba245551742151571de85dd51818a391691a437da80291d3349eb37c03f43b214a3eeef7f7e2bda42892949292f15e58642ffbfdc741bfac8a7b1a0ade3fd4ec830cef7fa07a96162111acc84ffd2538a839ad5634232c050fafd428f87c98bbc748d64b00fcc8424ac2b0a873217d418ab0c86396d45593158f9f70e3f3cd075e5a736beaa1e9c277bca335c924797d8c0847fb4507ada1a898a574c5a2b58cac56e5067d751797100107778453be463717966b21b48e88a06bf4a356148da233347166e83083ed20df71aca5878ece8ed1b9bbf0afd097db030c588f28172c6f8c7b2448a934fddc5cfbcf33950422c0481b5c998a41d4a1320ae2c00ce3a17612c40a0d8261609e102d50c2914ef528a0047842666f58248776e9a3d08875c53423453103331ec6ba66aaa13932884e0c558ba96a6a11c1bb0efe553141678c9705676d83f18d6b7bd6ca737d673af1aca68c98d4a998b5e664116f7d0a281240ffa96b27a3ac0025795ab6e359ee64ead9d7563b20739a9070bb7c80118949ca29a04945322a68755944d0347cb558da9ebd7026736034a77eb547703cfefef44af0b665d365d1bcf14c16b07b93f09aa47503786c3ff04019285d65d0554ff06ed7f977a689eb4e6e419d5415d9be8b4145862ee97fd169f0cdaa75bad755b1547b7171b032f0eee70e9e0e862bd66ae16fbee5dee276cba531ad681e7e3c4f006e021fff55ecaf2d80e1e2820e17b086f10db954092bda8e31cb1af72d7b083f9a8e1b7025dec54c983d6d7f5e3287cc48339a8be792da6bdbf44d866afe0282204c9f633be710fd0d0a98c21138050000",
    ],
    [
      "ETag",
      "6AM5/fUOmnHTDakWyp3kag==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1626997768481"
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
      "90",
      "4b6bc3301084ffcbf66a431d421e861c9a076d2084d6490fa584a0d86bd789ac55f5683021ffbd2b37f4d4432ff278f65b31a30b9c6a55400a87bafaf468dabb0add4b10195a2f9de58f2665112240272a26491e3672de5a5db8379c69e9a59a6fcf93091336ffc046407a81b246595848df2fa04483bc261af2ca31e45a1dfe97ebede27191b1d150118cf5eb6af5305d2de01afd2eedf7faf4af95dd3582231d322cd1a0ca3164d0868e98bb65a86745a325c696bcc9d142077783ca90d7c210c5ecc449af1f2783de603c1e0e07a3fe286152522e5c4d8ae1d70d8703474ec88cce5c0f7a0c984e72d3b23bbf3a3b94b8a95dd07fcd9230dbdd2e9cb60eedb3218e673124eb8fee7f72ce286477dcc9198f11e4829ff9a9769096425abc7e03f4575683c4010000",
    ],
    [
      "ETag",
      "olbSlDyspdtYeCplulnDTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:10 GMT",
      "Server",
      "ESF",
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
      "cb",
      "72",
      "82",
      "30",
      "1400d07fc95a1ca0bcd25dc1b6231111b016dd6422bd4208208fc8804effbd4e3fe19c07625906c340e55540835ed1cc74bccc96a4755c2f2ac6f7f0e2247ea0df3b71a6364d0e564b48a61863c778deb8a26e23f3a7aeb8ae37651e8a6a4b30de25e9a5b4d9d59d240cac992d451f8c94772df0f43c9903f5ecbdd954dbf8ec8f906c6e25e6fe31f6602faa525bd1502de82a3999f4eec962f40ded7813427cbe196a459a28edfd7dadc80f3b994ff75cf6041c5f73d2325cad27398a947caf778a6a65d6a6b81a6350c2a12b70e414b26671b0fb420b0453cb7b18287f725f4c8c17e8df4ee5dcc233c005d6438f7eff00f2379bee1a010000",
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
      "Thu, 22 Jul 2021 23:51:10 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-125-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda2490101e91a2354ae91a29212b21ada66942c6b950b704536c327555fefb2ea6e95a555a3f61fb9e73cfb90f9ec9032f776442529e3f36503f7db917293923a0688eaf9ee3a7d5ecaeb9b1bdfacf1aae87b7dba1cca75344f09625e9be2aa0274553339093eda69fd7a2a9682d440f13f5ace1b8673943c7f75dd7f16ccf42a284225bf2f201e9774a557232189cc4fbb9107901b4e2b2cfc4fef57d70180eaa5adc035372f05e73803272f089ead74230aab828a7db0d3a6824d409ec292fd0c33fea2e3d7f9fbbcfe9be9f23f8c01950c64453aad617a660a2cc78ded43a2b993c13edf3cd816c8265308f0d268a665f2625ddc399b1a38a26eaa902e3325aaf8c4578b98e56b378b10e93cdfc2a58cdfaf3f572bb0a37c6ed55100586a269019a6b4c8d737d0bf182fa3b908a975a3d6e9f5be5970e2d3e0ea625a0b4842e98b8a6432dcff4d32c7559e68dc66966429a7aa93ba6a3d464be0df62e058a3c2daa59b4c49a3dd76376364a2ccf1926b663f909b5332b3133df734ce68cc60cc8f18cfcaeb9820b2e2b2179d721721b2de22089a36d389fc5812e21a34da12e3a636d016f3d2a2c1041ffa9e9d846b940a5b6dd8b300ea2d93c5edc04dd84979053f6b479c41967b49080685a63f314d42bb1c3869170b60a2e10ac27f6fd149464f2f399b43d6f5dbc69f92b3dc601b67695fe924d1c2dc26fdace0971438b46430edd815468f90e6b43d7c75f88c42dedb290eb6d10fd20dd530419d450b2cfa789601df8fc6f3b6d3e8271f751472abce3f230d9aab01aba25e2bade17b6e79a9ee9120daed587986fd9a7b6b539da8cb08752bd94d46d3e56da8935f21584419c7fa8db75fc0b5425d2107b040000",
    ],
    [
      "ETag",
      "869bpAhuV48rzOeQ2WU2sg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:10 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d92614f82501486ffcbe963b0d41495cd0f58662e3453dcda9a735738200a5cbaf75263ceffdeb964d6aaadbec03987e75cdef7853dece22c001bd671f45ca028cf22540fba98a12c1225e996f34c2218808a45448eada0d19af43bdee5d07dcc2fc272579cdf45bd1e11d2df60cac0de4318631248b09ff690b11469cde7499166abaa334095b91ecebdd96832a43ee581ee270bd775faee000ec66931608aad2afe1f6bcb83015bbe9e618802331fb5965cf02dfa6aa46d4a96e6099a9217c24709155c3d88042f722638376962d61b2db36e35ac6eb7ddb63acd4e9dc884fb4cc53c2378312781a0b862c98cbf924db0081055498ec3eafa42e338a89ce87234f1ac6625f02b40dac238c1d5df2009de30fa0e1fd83183ef1c4b7991a91375e3de3bbf1d47a17e1e75ed78831f845414d509f146e3c1dc73c653cd2d8fdefba54239159c9294a843acd79a9d56dbaabde77ac575d6f41e5b89020df019fd1eb7b1023b6489c4c31b74a082bc7c020000",
    ],
    [
      "ETag",
      "M6d25NB8T3GLXp/fyku+Kg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:11 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-126-1626997768481",
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
      "54",
      "69",
      "6f",
      "9b",
      "40",
      "10",
      "fd",
      "2b",
      "68fb25957c80b1015b8a52c7a12dad831d8c5ba587ec653d389b004bd825511af9bf77803aad7b454282dd796fe6cdc523b9e1d9868c48c4b7b725140f2fae45445a0414dde2ade7f9eff234057675f1be3cbd5e04df4e5fabfbe36344f08a25699a27d096a22c18c8d172d1d916a2cc6921441b1db58d9ed536ac9e351cdab6e5f41d0389129278cab31ba45f2995cb51b7bb0fded90ab14d80e65c7698489feebb77bd6e5e886b604a760f6376318cec3e13f524118c2a2eb2e3e5021594128a15a49427a8e1277513bd3af4dde134ed6c117cc71950c64499a94a17ba60228bf9b62c6aaf64f4486a9dbf7c90853b7527a136992dfdf0684dd38abc7ea951a9ed0f2d6d8d49c53c8115dfac2bcb6a95df68af83d9395a50c1159520d7dac7b76ee06ada5a2a54b7d6be94ba6e8276a28dfd33edd085e76b4bdf7717a17674f2527b13cc9673edf4f20083da372015cf6ae5218d12a854ffa8aef767532b0255a8a431ae6cdda286a30fa338b259ec988328d6218a9cc81e5033d2d9b00ffd4d041479aaf25eb36826b23e053376c0b0faba191903c7d6638bd926338774c01cc3b23780d7d023bb16b92fb882332e7321795361f231f0427715064b7f320edd3a8d9896893a6bc45549fcaa53619208fa4f5ebbcaca0546aadae5f9a11b8c27a1f7c16d26640a5bca1e16b73823314d24209a16340505c5b9d860d1c87cb6f0426fe68fa7c8a8db3edf2324197d7efc49081ff2bacaaa7e93d03bc71e8dcfe7b5863de8034dca1a75d77c909eded3db7aaf6d0c42a33732cc91d1efe8bafe89ec76ad7f3b1f07c1f81205d1a2a00fbfd9",
      "3049ab5fd1ff12b5c6d7a746fc5e8541aa684f9a0e4e16d97ddde1d322b8764d2c72b174834bd25c05104301197b7ec4105c1b9eff7dec5719c1b8cc1807d742719c6826ab28ac8066b2795aab6fd88e6d0ccc21a9c185fac3660dcc7d0b2b1f95474821533f526a56b9ae5b652ae513088d3890bee7bf41eb77ce30f3474c050000",
    ],
    [
      "ETag",
      "IINJpmmechQKuBjSRzBFtw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f4fc24010c5bfcb78b44d2c92024d3888a26010a4c2c910b22cd35ad876eafed120e1bb3b5b89270f5eb6af6f7eb3796f8fb02faa2d24b029f27787fa7091a39d7b91a271ca1afed454198400d08a9cc9fbebdddd60f63477b54a1f475f97b3854a65deef3361e41b960292236405aaad81e4f508952891d74449aeb20cd943edffc7d3c5f06198b251d2d61bd3e5647233980ce114fc2eadd7f5fe5f2bab53003bdaa498a1c64aa2cf506bdaa1b4635fcf88b256181a725aa281066e06b926570b4d14b21346ad388ce256dceb753a71b7dd8d985424852da86278f9c2e1c092152aa54fae072d067423b969d69c1f8ded4b9cd5caebbf66919fadce170e0e16cdb3268e67d0276b77af7e72de92cf6eb993d50e0390829f7954584832a10c9ebe012da9ca66c4010000",
    ],
    [
      "ETag",
      "F3jDBOMQuplRJHz+OTlRcg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:12 GMT",
      "Server",
      "ESF",
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
      "0002ff1dd0c97282300000d07fc9591c6591a437a06c8a2836ac1726a5c132b43612b6e0f4dfebf413de7b00525594f3b2ff69e90dbc004164b4aed607064d2b6ab4f17b8f3d1766f08e7a8d942e5d749fef334f398ffc944ef96be514726b0473a492b4ee3a9e1c8981e476914c2673bfb57a5dd95a597c56a3d09ccd2b56157ceb850f5938d8012f0d23cc5be6296472a25a1a897b2d066581d0c57dd20652b83bccd967e1f0e16bf3bee4a9f6c16555ce52cec2cb46e8e8a295776f4ea2b11a613d382a16531020717a13088534736cf318efe8d67331566d87763158013ab3a6a3bc6c9e5c45436805feed652f187d06989474b403bf7f9eb91b511a010000",
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
      "Thu, 22 Jul 2021 23:51:12 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-127-1626997768481",
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
      "85535d6f9b3014fd2bc87b6d1212522091a2354ae9829690959056d33421632ed42dc1149b765595ffbe8b69ba5695d6276cdf73ee39f7836772c7cb944c49c2f3fb06eaa72fb72221270414cdf195d97f1e978fcdcddabab2fce5c5f7da540c2e673344f09625e9be2aa02745533390d3ddb69fd7a2a9682d440f13f58623a737b447f664e238b63b7687489450642b5ede21fd46a94a4e0783a3783f17222f80565cf699d8bfbe0f1e4683aa16b7c0941cbcd71ca08c1c7ca2fab5108c2a2ecad96e8b0e1a09750c7bca0bf4f08f9a2667ef73f739ddf773043f70069431d194aaf585299828339e37b5ce4aa6cf44fb7c73205b6fe52d228389a2d9977149f77062a454d1583d55605c849bb5e107179b703d8ffc4d106f174b6f3def2f36abdd3ad81ad74b2ff40c45930234d7981967fa16e005f553908a975a3d6a9f5be5970ef91f07d312505a42178c1dd3a643d79c2459e2b0ccb54e93cc84247113e7945a89c9266318a70950e46951cda225d6eca4ee885a2ca6a3d48ac716b563d775ad38b386307113666563931c4ec863cd159c735909c9bb0e91ebd08fbc380a77c1621e79ba848c36853aef8cb505bcf5a8b04004fda7a6431be50295da76fb41e485f345e45f79dd84579053f6b4bdc71967b49080685a63f314d46b9162c348305f7be708d613fb710c4a32fdf54cda9eb72edeb4fc951ee1005bbb4a7fc9360afde09bb673445cd1a2d19087ee402ab47c83b5a1ebc36f44e2967659c8e5ce0b7f92ee29840c6a28d9e7d344b00e7cfeb71d371fc1b8fba82315de7179986c55580ddd12715def0bdb754663d3261a5cab0f31db1c1fdbd6e66833c21e4af55252b7f9586927d6c857100671fe816ed7e12fc6bd94b17b040000",
    ],
    [
      "ETag",
      "c6xwHwuhM3V3IHFKr0tceQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd6e82401085df657a8b89188b4ad20b6cb5b5c19f0a264d1a635618145d58dc5d6a8cf1dd3b4bad6dda26ed0dcc0cdf2ce71c38c236cd63706199ae7625cac3d50af59329a6a84aae15dd0a912b040b50b31591e3ded67fdcf477435b2ad5deec9f032fe2decd0d112a5a63c6c03d4292228f15b82f47c85986b416095e66f9a2ea2cd087c20c83703a18dd539f89d8f4a399ef7b5dbf0727ebb21833cd1615ff8fb5f9c9828d584e3141897984464b21c506233d303615cb0a8e35254a19a1820aae1eaca4280b2685a8d1a466375a35db69389d4eabe5b49b6d9b482e22a65391133c0b482068a1199f8a3dd90487005995e438a9aeaf344ee3ca892907a3d0695602bf02a42d49392efe0649f09ad177f8c0ce197ce75826ca5c5fa8be3ff67e3b8e42fd3ceace0b7b3f08a529aa0b120e86bd20f48613c3cdcfdebb078d6a220525a9d08468d79bedeb96537fcff55698ace93dae96255a1031fa3d1e520d6ec2b8c2d31b10c6da277c020000",
    ],
    [
      "ETag",
      "OEkLJjFqM1rss8jwXSAclA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:13 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-128-1626997768481",
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
      "54",
      "fd",
      "4f",
      "db3010fd5722ef17904a9b7ee5a3126259092c5b49599a82d036b58eeb14d3240eb103ea50fff75d1c5ae8d8861429b1efbd7befcee73ca115cb16688022b6bc2f69b1fe70c723d44054e225ec7eb99f7e5e19f86b6938bffa8ec47298aef2c7e36340b08a25709a27f448f0b220540ca693e6b2e0658e0bce8f20d151bb631db58d8e61dba669583dab0d44419378c4b215d06fa5ccc5a0d5da8a37979c2f138a73269a84a7bbfdd643a79517fc8e12295afb9a2d9011ad77544f124eb0643c3b9e4ec041296831a32966097878a12ea28ffbb99b0ca7cd25801f18a198105e66b2f2052908cf62b62c0b95150d9e90f2f9ea034ddc913b0cb5e178ea8707739c56e4f9a18685b65d34b4391415b384ced8625e4566b37ca59d05e30b8880835b2ca8986bd79fddc0d57634ed47a9eb5daa9d688e7faaede7f07c6deafbee24d40e4e0eb5f3603cbdd43eddec61c0fc820ac932653dc451422bdbcfedf5de9e6a45c012acd4c199a91bb86de97614472689ad6e3f8a751a455664f67137d289dda3bd454431f064955db170060db34ddbe89288f4ac8e61ea8b2ea544ef2d740aa9ec76a7d3b7dabdd8eac768d3408f0593f494899c0b56b7185d075ee8cec260ea0f9dd05565c4b84ce4696dae2ae2b54f094502e83f756daa28e3a0549d97e7876ee00c43efcaad4764449798ac27f73024314e0405342e704a252d2ef8029a862ec7132ff4c6be3302863af7cb2d42a0c1f7a71742b8ce5597a57aa3b3d1d8098d9e72b0855ce1a4549887fa03b59b7d406c1aff4ee304817303d2b828f0fa8f18946328fa5f14145ead6a9b3b4554a96d579dbd9581363f37f03410dcb05a0b7d9bbac10daab7021ad38266e4fd6102b00abcffa7d8de5a00c3bd051d017f2006b34b44a5420a5acf304b95",
      "fb9a6d99dd4ecf460a5cc837b1ae696d0fabca5165a429cde47349f5ad557dab42a5d8812008a3e77bfe39447f0340352bea37050000",
    ],
    [
      "ETag",
      "JqUHk6aKu6Az5AtatCmkpw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1626997768481"
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
      "50",
      "5d",
      "4f",
      "c2",
      "40",
      "10",
      "fc",
      "2f",
      "eb",
      "a3",
      "6db4d51468c283286a4943b44a8c31841c655b0b6db7dc07a610febb7b95f8e4832f7773b3339b993bc0a6a85710c2b2c8b706657b96a37eb62041654aadf86aa856080ea016392b672a0adef793f3c985bf8bde7293c5f777db7c3864854a3fb112101e202bb05c29083f0e508b0ad9262a32b566916e1bfb8ea6afe38771c244452b4b4c67717c338ac770747e4d8b45b3f997657e74604dcb04339458a768333492d698eac8d653a26a4a74151999a2824edc0d7249a61192c865c6f5fcbeeb057e3018f47a41ffbaefb1b2a454e8826a5bfd85c381262dca84beb81ef82c901de4a65977ee3ada9638a1b9c57fcd3c3b9b9f168e5a8dea4912c75368935df9973f396fc966d7dc494b830ea482bff9b1d01066a25478fc06c1755789c4010000",
    ],
    [
      "ETag",
      "UsI6YzJ+J/2vIWgufLFDqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:13 GMT",
      "Server",
      "ESF",
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
      "82",
      "30",
      "00",
      "00d0bb642d8e10c1d01d54a2a214140574c3f0091283884181e8f4ee757a84f7de20c932d2b6f1e3c6480dbe8048147d9c8dd70d32bfb734844fecdaedb2a3275b657e67b2f030bb92942877d5727cc52907ba7ff2d8c2cec491dae36b4f853dbb4e659cde2a81254d3947faae1b346d22e76665cdeb9d81d00f8b8ff3feb13a46990ff90d3d65181921da78ec55df4f5a6417858407547a6819156bea5962a1af8c3e48bd8643eee4d779805dafb2b53eea725115b9502ec40efa455d5e145316795a6e0edba2739bb68767174ec380619fa552a08111204343396963fae14255d747e0df1e3f44433e01264938e1e0f70f82902c3c1a010000",
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
      "Thu, 22 Jul 2021 23:51:14 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-129-1626997768481",
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
      "000000000002ff85536b4fa34014fd2b64f6ab2d7d034d9ab5a9a8dd58aa4035bb9b0d19860b8e0b0c3283c635fdef7b19acab31593f3133f79c7bce7df04c7ef332217312f3ecbe81fae9cb9d88c9110145337cfdb695f663f1e72ab8bc3dfb716eeeac9bf0fa6cb9582082b72c498b2a879e144dcd40ce77413fab4553d15a881e26ea0d474e6f381bcd1cc7b266f6c41e2251429e5ef0f237d26f95aae4dc340fe2fd4c882c075a71d967a2787d371f4666558b3b604a9aef354d9491e627aa5f73c1a8e2a25cec0274d048a8232828cfd1c33f6a121fbfcfdde7b4e867087ee00c2863a22955eb0b533051a63c6b6a9d95cc9f89f6f9e64002f7c25d85061379539451490b383212aa68a49e2a304efdedc6587ba75b7fb30cd75b2f0a56e7ee66d95f6d2f761b2f306ece5ddf35148d73d05c63611ceb9b8717d44f402a5e6af5b07d6e955f3ab4fe38989680d212ba60640d6674680f9c388d2d96dae3699c0e208eedd89ad2713c60ce0426490c14795a54b36829ca99634f1d3a49a231b39268628da7111d801d011b4362a574309c8cc9fe883cd65cc109979590bceb10b9f1d7a11b85fece5b2d43579790d22657279db1b680b71e151688a0ffd4b46fa35ca052dbeeb517bafe7215aeafdd6ec2179051f614dce38c539a4b4034adb1790aea8d48b061c45b6edc1304eb895d1e8292cc7f3e93b6e7ad8b372d7fa58738c0d6aed25f1284feda3bd3760e886b9a371af2d01d4885966fb13674bdff8548dcd22e0bb9dab9fe77d23df990420d25fb7c9a08d681cfffb6c3e62318771f75a4c23b2e0f93ad0aaba15b22aeeb7d61dbd664e05844836bf521361acd0e6d6b73b419a18052bd94d46d3e56da8935f21584419cbfa7dbb5ff0b7ea883f17b040000",
    ],
    [
      "ETag",
      "JOs8wmzQSPhGZH/U7WTVGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:14 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1626997768481"
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
      "6e",
      "82",
      "40",
      "1045ff65fa8aa91a8b4ae283565a4dd05ac4c4a431668501d185a5bb4b1b63fcf7ce526b9bb649fb0233c399e5de0b47d8a779040e6cd2e4b94479b84a503f9ac2475572ade856885c2158809a254446dd0547b7e54d962356ee876abf1c5e0f1f7b3d2254b8c58c81738438451e29709e8e90b30c692d14bcccf275d559a00f8519ce037f3cbda73e1391e9a70bcfeb0f3c174ed66531629aad2bfe1f6bab93053bb1f13146897988464b21c50e433d363615cb0a8e35254a19a2820aae1e245294059342d468526b34bbb586ddb4bbdd76dbeeb43a0d22b908994e454ef0624e02410bcdb82f5ec926d804c8aa24c771757da1711a554e4c399e0676ab12f815206d71ca71fd374882b78cbec30776cee03bc73251e6fa42dd790ffddf8ea3503f8f1af603f707a13445754182f1c49d07fdc9cc70abb3f7c141a39a4941492a342136eaadce4ddbaebfe77a2b4cd6f41e47cb122d0819fd1ea354831333aef0f4067554a6377c020000",
    ],
    [
      "ETag",
      "d9UleE4LMXHaukDskXD/DQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:14 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-130-1626997768481",
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
      "54",
      "fd",
      "6f",
      "9b",
      "30",
      "10fd5790f74b2be503f2012452d56529ebd0529211d2aadaa6c41843dd02a6d8748aaafcef3b43d3366ab74a4870bef7eebdb3cf3ca23b9647688c4296dc57b4dc7ebae5216a212a7102ab82703fa3dfad4b7b7b63da233d5c7cbbbb4d4e4e00c1144be0ac48695bf0aa24548c57cb4e52f2aac025e76d28d436fa7adb307be6686459a63db00d200a9ac63396df01fd46ca428cbbddbd7827e13c49292e98e8109e3daf771f7adda2e4b79448d13dd4ec828ce87ea07a9a728225e3f9c96a090e2a41cb35cd304bc1c30b350a3f1fd6ee309c7512003f30423121bccaa5f2052508cf639654655d158d1f51edf3d5075a3a33671a68d3f9ca0b8e363853e4cdb18685b60f5ada069a8a594ad72cdaa8cc7a5ddc695ffdf90564c0c10d16546cb4ab6f8eef68da46817e55bade27daa936f1ceb443beeb692bcf73968176747aac9dfbf3d542fb727d8001e3111592e5b5ed00872955969fb6d67d7ba28a8025d868926b4b37b161eba3300e2d12dbfd6118eb340cedd01ae27ea893d1800ea29062e04955bd66e19ce743a347e35e3fd20d8b984363084734304c6b688e7a368e2cd3189a146383a25d0bfd2999a4674c145cb0667bd195ef06ce3af057de741238751b31ae5279d698534dbcf629a14900fda7af9dca320e4aeaac5c2f70fcc934702f9d663c6634c164bbbc870189712a28a07189332a6979c123d834b4982fddc09d7b931930ea335fec11028d7f3ebe10826d51efb2acdf4acb1cd4fa7bc0254eab1af1d07c20638876bbd6bf4b4c7c7f720db2b82cf1f6fdf2efd6aff175d4587cd6434a6d1ff50e2213ed7eefe06921b8598d16fab172fc6bd42cf934a625cdc9c78304e03af1f11f627f5b010cf71574848418e69608",
      "a5424adacc2fcb6af70ddbb606f6a08f6a7029dfe446667f7f50aa86aa48339acba7969adb5aef9b4a55e2190449183bcff5ce21fb173decd70a2f050000",
    ],
    [
      "ETag",
      "scoRmeK7V8yh6890bPHkjg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:15 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1626997768481"
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
      "02ff8d904f6f824010c5bfcbf40a89884124f1a00d694d8c515a4f8d312b0e741518dc3fb6c4f8dd3b4b9b9e7ae86577f6cd6f26efed0dceb239420207595e2caaeea144b3714586da5646f3d552a3113c40234a26cfb3f0f2196dcbb1bd4c64da055aaee7f1663a6542e7ef580b486e5048ac8e1a92b71b34a2461e1335d9c63064bad6bd17abd7f429cd58a8e9e884d576b99ccd9729dcbddfa1fdbe3dff6b6477f7e044870c0b54d8e4e83cb48a4e989b858ba745dd56e86bb22a470d3ddc374a45b6158ac867c50fc2811f44c36832198fa37814074c56940b23a96178fbc2e6c0901155461f1c0f860ca8bee4a4457f5e590efb10d71e70defeee05aeb7fb5938ef0ceab522b6a7d1391bc5836f9f8fe4bc1bce6494450f72c1dffc2c0d2485a834debf00310fb1bec4010000",
    ],
    [
      "ETag",
      "kA3qx6Ug7uq9iEy1siPB8Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:15 GMT",
      "Server",
      "ESF",
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
      "cb",
      "72",
      "82",
      "30",
      "1400d07fc95a1c1510e8ce58dfb609928ab86168b8ca4349208060a7ff5ea79f70ce0f8a3807a5c25ae450a037d4471367c8873b69e3b97bfdca6179768824cdc1c3edd67595163f4539aa9aab1e8cd3132cd96dcd8c19b4476fe1bcefab1b3e0a2a2e2667db69e87ba385ccf6fa6c3cbad4a5d52405834605be795f1931c33651259d5cd7bb44d232b73693de3e25e29b5d0c9251a2d8e6718fa9b50b123256e533cd82b801e19d551a7f08578716f79534cbce98938017365786e54736272bc38c0b0d7887318e0e9f6b5cb40d9dd279b7d5fc131a20e8645a810ad31757371d6780feed61dd4b780560882aa8d0ef1f51b9b95e1a010000",
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
      "Thu, 22 Jul 2021 23:51:15 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-131-1626997768481",
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
      "b8e641f380448ad628a56baa403a20adaa6942c6b950b7802936a9aa2aff7d17d364ed26ad9fb07dcfb9e7dc07afe491175b3225314f9f6aa85ebe3c88989c105034c5d78b6787de6d647a1db8f9cde88a7ebdb2f27c3e9b2182372c49f332838e1475c5404e374137ad445dd24a880e26ea9803b3638e4fc79389658deda16d22514296ac78f188f47ba54a39edf50ee2dd548834035a72d965223fbef776a7bdb2120fc094ec7dd4eca18cec7da2fa2d138c2a2e8ad9264007b5842a829cf20c3dfca16ee3b38fb9bb9ce6dd14c13bce803226ea4235be30051345c2d3bad259c9f495689fef0e247056ce223498c8eabc880a9ac389b1a58a46eaa504e3c25fbbc6d2bb58fbee3c5caebd28585c3aeebcbb58af36ae1718b7978eef188ac61968ae3133cef4cdc30bea6f412a5e68f5b0796e94df3ab4fc77300d01a525b4c1c8ea8fa969f72771125b2cb107a338e9431cdbb135a283b8cf2643186e63a0c8d3a29a450b51303b3647746247d41c42348ced24b2c11c46161b9a26b393c1a4bf25fb13f25c7105e75c9642f2b643e4d65f864e14fa1b6f310f1d5d4242eb4c9db7c69a02de7b54582082fe53d3be8972814a4dbb975ee8f8f345b8bc71da09af20a5ec2578c21927349380685a61f31454aed862c38837779d7304eb895d1f82924c7fbe92a6e78d8b772d3fd2431c606357e92f09427fe97dd7760e881b9ad51ab26b0fa444cbf7581bbadeff42246e699b85fcd838fe1d699f7c48a082827d3e4d04ebc0e77fdb61f3118cbb8f3a52e11d9787c9",
      "468555d02e11d7f5beb16d6b649ba744832bf5776cdcd7b1e3c63719218742bd95d46e3e56da8ad5f208c220cedfd3eddaff06df2455ee7b040000",
    ],
    [
      "ETag",
      "FwEaYUsgPSMmV5Ja+J7mmA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1626997768481"
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
      "6f",
      "4f",
      "82",
      "50",
      "14",
      "c6",
      "bfcbe92d6e5286cae60b29353635435c6dcdb92b1c10032edd3f35e7fcee9d4b66addaea0d9c73f89dcbf33cb087a7ac8cc18575963e6b14bbb314d59d2902943a57926e152f258205a8584a648c42a7ebeb9677af6772f850b111fa5edaeb1121a30d160cdc3d2419e6b104f7710f252b90d6229eeba25cd59d056a5799e13c0cfce988fa82c7a69f2ec6e3be371ec0c13a2dc64cb155cdff636d79b060cbd7012628b08cd068a904df62a47c6353b2a2cab121b916114aa8e1fa412ab8ae98e0bc4193867d61376ce7dce976db6da7d3ead844e63c622ae325c18b390904c515cb03fe4a36c12140d425394eeaeb0b8db3b876624a7f1a3aad5ae05780b425598eabbf4112bc61f41d3eb06306df3956705daa13351cdff67f3b8e42fd3ceaba1f0e7e105251542724f4278379d89fcc0cb73c7af7760ae54c704a52a209d16eb63a976da7f99eeb153759d37b5c25345a1031fa3d6e32056ec272898737e78e188c7c020000",
    ],
    [
      "ETag",
      "derugbD4BWuPsFXpaGeIBg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:16 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-132-1626997768481",
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
      "0002ff8554fd6fda3010fd5722ef9756e22340808054750cb236120d2c8456dd87c0761cea12e23476a850c5ffbe8b53dab26eab142939df7bf7ded9e73ca1354f42d44784af1e7296ed3edd0b822a8829bc82d5b5958f6639cd1f2efdefd3ad399ddfcbf6e4f1ec0c10bc6049bc4963569522cf2893fdf9acb6ca449ee24c882a14aa365acd6aa3d3ecf47add6ec7b6ec0610258ba3314fd640bf532a95fd7afd205e5b09b18a194eb9ac51b17959af6f9bf53413f78c2a593fd6ac838cac7fa07a1e0b8a1517c9d97c060e72c9b205db601e8387576a483e1fd7ae71bca9ad00bce594614a459ea8c21794a02289f82acf7455d47f42dae79b0f3473c6ce30308693b9179c2cf1a6202f4f0d2c8d43503196d054c463b6e0e1b2c82c16e9daf8ea4fae20030eeeb0647269dc5c3abe63bc2e2d8d9fb969b6a8716e0cbc91715cc5f58cb9e739b3c038393f352efcc97c6a7cb93dc280fd9049c5136d3ec0246685f1e70d76df9f6b41c00a94cbe4a26b7670c3367b24225d1ad9ad36894c46884dba6ddc2226ed59cc0a09c3c0534575cdc2894848ab619a516437ccd0b4da51ab49b0659236b3699b34ac3022110e2d6a9b685f418f19576cc4652a242f3719ddf86ee02c027fee0d0781a3db88701eab5169ae68e2ad4f054d02e83f7ded8b2c17a0549c98eb058e3f1806eeb5530ec998ad30ddcd1e604c221c4b06689ce10d532cbb12216c1a9a4e666ee04ebcc11818fae4a7078444fd1f4faf846097ea5d56fa8d6681ef7a17dac001718de35c43b6e5071aa4e015edf7957f9719f8fee016a47196e1dd1f3968a76315f4bf4868bc8e4a9b07c9062ad40e51f328eaa0fdaf3d3c150477acd442dfe68e7f8bca259f452c6309fd789800ac131fff2b0ef716c0707341472a886176a92c5468c6ca19e61bedbe64dbdd4eb7a9ff340a67ea5dceee9887c32a6a1415d98625eab9a5f2deea7d2b52b97c01411246cfd3e7b6ff0d2677996d39050000",
    ],
    [
      "ETag",
      "k4uDSucuqHRZPv0PUjs5Ow==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:16 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1626997768481"
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
      "90",
      "416bc2401085ffcbf49a40b5c1988087a6481582adb1a2508aac718cd124b3dd9d5042f0bf77d6969e7bda9db7df9b79b33d5ccae60031eccbe2b345d3dd15c84b77c9d0b6155b39343516c103645508799a872bfd52cc863add74db2e586e314a8ac944089b9fb05610f7702cb13a5888df7b68548d625335b50d0bc49d76f57cf1367d9e6622d47470c2629da68f493a85abf767daedf4e55f968fab0767da677844834d8e2e833674c69ce76e3dab6a5da16fa935395ab8c1b787c250ab9521f245f1070f437f301a8ea2280c47e3603c10b2a25c71498dc0eb958403265655465fb21edcc36f9d748cf6d59074b7e81a07e3f067cc13b9d12c91d8b4e841aee4976625437c5495c5eb37345b5eed83010000",
    ],
    [
      "ETag",
      "hI7SpOgH2pLWyXy4QXe9Bg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:17 GMT",
      "Server",
      "ESF",
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
      "1dd04b7282300000d0bb642d8edf0addf1d5418d5f10dd30212612b010480282d3bbd7e911de7b038431112296654e0af00d3a34318678b8e6ba651f98dc1ac78a3a89793e42db2bc60a15689fdf29963b5f6135e92f911a63d97ad7ed2c83dd86398996ae972b44affaa33b5f1641e99ffa4b489ea62e55e5739e562b628e3705860a46f9b9aa1f513a9b963291eef31e7ef52f6781a6dc55c2d66feb4a0b92fea7497dbdbd65a6c423075a256b474ba5dd8ec26efceed40a9315a76abe0af27be97ab177786df63473951743c128ed299cedc2651065b8e1ed040c007971561311b30f773a378c01f8b7c7b2e3e413601154931afcfe01b13d03a21a010000",
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
      "Thu, 22 Jul 2021 23:51:17 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-133-1626997768481",
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
      "3014fd2bc87b6c81d0101290d08a205d9920ac21504dd314d9e626f51ae23476a8aa8affbe1ba774ad2aad4fb17dcfb9e7dc8f3c937b91efc88830913e54503e7df923193927a0698aaf912aa3b3eaec516fbfe7dbf0705f85f9ecfa663c4684a8598aee8b0cda4a56250735daac3b6929ab829652b63151bb67dbeddee062301cbaeec0eb7b3d242ac89285c8ef917ea775a146ddee49bc934a9966400ba13a5cee5fdfbb878b6e51ca3fc0b5eabed7eca28cea7ea2fa35939c6a21f3f1668d0e2a05650c7b2a32f4f08fba6397ef737704dd7752041f0407cab9ac725dfbc2145ce68948abd26425a367627cbe3990b5bff0a7518bcbacdae7714ef770deda514d63fd5440eb2a5c2d5bf3e06a152e27d17c15c4ebe9b5bf9c74a6abc56619ac5bb7d77ee8b7346519186e6bdcba34b7002fa8bf03a5456ed4a3fab9567ee9d0fce3606a024a2b6882b16b0d68cfb3862c612e4f3cdb6189058c79cc75a8cd2c3eec437fc78022cf881a16cd65deb3060e631c62c749fa719f59107b17891533d7763cb05c076c871ccfc9632934cc842aa4124d87c86d388ffc380a37c17412f9a6848456999e35c6ea02de7ad4582082fe53d3b18e0a894a75bbe741e487936934dffacd84179052feb47ec01927345380685a62f334944bb9c3869160b2f467083613fb710a2a32faf54cea9ed72edeb4fc951ee1006bbbda7cc93a0ae7c13763e784d8d2ac3290437320055abec3dad0f5f13722714b9b2ce466e3873f49f314420225e4fcf36922d8043effdb4e9b8f60dc7dd4511aefb83c5cd52abc84668984a9f785ed21dfb1890197fa43cc1dd8a7b6d539ea8cb0875cbf94d46c3e56da8855ea1584419c7f60da75fc0b280661a37b040000",
    ],
    [
      "ETag",
      "TsrT+u+wtVJnVRvkuRnDHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:17 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1626997768481"
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
      "53",
      "82",
      "40",
      "10c6ff97ed311c330d95191fb0b4984153c4971ac73961410c38bc3b6accf17f6f8fcc9a6aa65e6077f9edf17d1fece129c943b06095c4db12c5ee2c4635d58587b24c95a45bc1738960002a1613e90d5fc7db7a347b3077ae69e3f928ccebf369af47840cd69831b0f61025988612acc73de42c435a0b785a66f9b2ea0c50bb420f67bee78c6fa9cf78a8fbf1dc75edbe3b8083715a0c9962cb8affc7dae260c086af3c8c50601ea0d65208bec14039daa6645991624df2520428a182ab07b1e065c104e7359ad41acd66ad615e9add6ebb6d765a9d0691290f984a784ef07c46024171c5528fbf904d30091055498ea3eafa4ce324ac9ce8d219fb66ab12f815206d5192e2f26f9004af197d870fec98c1778e65bcccd5891abaf7f66fc751a89f47ddd8fee00721154575427c673498f9f668a2b9c5d17b7fa7504e04a72425ea101b17adce55dbbc78cff59aebace93d9612251a1030fa3dee120556c4528987377991db377c020000",
    ],
    [
      "ETag",
      "RFzNq/fSZ6yL6Ae+Mdn/UQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:18 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-134-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f4fa34010fd2a64ef1f4dfa035a5a6813e3f52aa74d2a554a357a77699765a9abc022bbd434a6dffd8645d49e77674202b3f3debc37bbb33ca3079686688802b67e2c68befd72cf03d44054e235ac9edd6667b79b4be6eaf3edb58816f9a5bd359e8e8e00c14a96c04916d3a6e0454ea8182ee6ad75ce8b0ce79c37a150d3e89a4da3dfe90f0696d5b74ddb00a2a0713465e903d0efa4ccc4b0ddaec55b6bced731c519132dc293d7f5f6a6d3ce727e4f8914ed7dcd36c888f627aac7312758329e1e2de6e0a010345fd204b3183cbc51c3e0eb7eed16c3496b0de00d231413c28b5496bea004e169c4d645aeaaa2e133523edf7da0b93375c6be369e2d5cff60859392bc3ad4b0d0eaa0a1ada0a988c574c9c25599592eb307edbb373b870c38b8c3828a95767de6788ef6b6b4d27e16bade25dab136724fb4fd2a13575bb8ae33f7b583e343edd49b2d2eb46f377b18b01f522159aaccfb38886969fc6583271fcfb5246009ca557269e97d6cd8fa2088028b4476b717443a0d023bb07ab81be8646052330c28069e2cab2b164e796a10d2256614eab467d9c40a22dc3771d8c33d33ea86b66974436cd95d8cd1ae819e7226e909131917acda6474ed4d7c67e97b0b773cf21dd546848b589e54e6ca26defb94d02480fed3d7aecc320e4ae5894d5cdff146637f72e5544332a56b4cb6f347189308c782021ae738a192e6e73c844d4317b3f9c49fccdcd11418eae42f6a8440c31fcf6f047f9ba95d96ea8de6be37714f95811a7185e3424136d507c2197845bb5de3df65469e37ba01699ce778fb470edae99b25fd2f120aafa2ca662d69a052ad8e3a7b511fed7eede06920b8639516ba5c38de0daa963c1ad19ca6e4f36102b04a7cfeafa8ef2d80e1e6828e9010c3ec1251aa909c5633cc12e5be62db96ddef98488173f92167999dfab0ca1a65459ad054beb454dd5bb56f65aa10af2048c2e8b9eadc76bf013528e7aa39050000",
    ],
    [
      "ETag",
      "HZpHZvQiN0SyWsfUrQ8y1w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:18 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1626997768481"
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
      "90",
      "5b",
      "4f",
      "c2",
      "40",
      "10",
      "85ffcbf8da2616b140131e4051492a4a117d30842c655a0bed4edd0b8634fc7767ab213efab29773bed99cb30dec0bb985083645fe69511d2f723473774850dbd268de6a921ac103342267f235be7b5a2c46b7f3b7c3deaac71d5d6e96723e1c32a1d30fac04440d6405965b0dd17b035254c863a2222b0d43e658bbfb74f632b99f242c54b475c26c19c7a3713c8193771e5aafebfdbf4656270f76b449304385324597a156b4c3d44c5d3d2daaba445f9355296a68e1d6c815d95a28229f153fb8eafa41d80907835e2fec77fb019325a5c21424195e2e381c1832a24ce88beb418701d51eb969d6ae0796afdb12871670d9fe7ae1d90b9cb7fa7d707c34a89f15713c8d2e59b7dffbc979432ebbe14e4659f42015fccd0f85812813a5c6d337c8e38960c4010000",
    ],
    [
      "ETag",
      "VLFOSSADQWvkurMjo0bUnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:19 GMT",
      "Server",
      "ESF",
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
      "1dd0cb7282300040d17fc9da3a2044a13b102818ac2082c286010ce5550c4940b1d37fafd3e55d9efb03b2a2c08ca5fcd6e21ebc83395ba9cb628988a26ffd8668707402fc4431a2b5cd272b746f83903075eba04362e5c722ac36857d1ffa3532934b94552da2f22177148397fc3a9df6ae1baca2b5c0cd74ec78fccac983a6e67f9ef3ca9f7571eebe4a6f17b08cd7f60a92d843c8c8dc1cce83f02613a88e8f2b13b5eb5e30033c8c8df8edeca69952fd511e7d2d3f7f9c24d4774108e170770e63d9c664f23d8b32cd901ae569bbd6c6bb44a77b2136b92b37d1112c007e909a6296d62fae04557501feed299f097e0dd071463105bf7f454ada501a010000",
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
      "Thu, 22 Jul 2021 23:51:19 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-135-1626997768481",
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
      "0002ff85536b6f9b3014fd2bc8fbda2424e40191a2354de9ca94901548ab6d9a9031863a25986093adaaf2df776d9aae55a5f513b6ef39f79cfbe0093db032455394b07cdfd0faf1d39627e80c51897378dddcf181f9673d6cbc6afbc33f6cdd8bfdd78b9bd90c104cb104de5505ed08ded4848ae926ece6356f2a5c73de81449dbe35eaf4c783b1e34c26637b68f7812868912d59f900f47b292b31edf54ee2dd9cf3bca0b862a24bf8eee5bd7718f4aa9a6f2991a2f756b30732a2f781eae782132c192f679b101c3482d631dd615680877fd434397f9bbbcbf0ae9b03f8c008c584f0a694ca17a420bccc58ded43a2b9a3e21edf3d50185eed25d4406e145b32be312efe89991628963f95851e32a58af0ccfbf5a07ab79e4adfd385c5cbbab7977b15e6e567e68dc5dbb816b489c1454738d9971ae6f3e5c403fa542b252ab47ea59293f77c87b3f1845006941db603c31c7b86f9b4e92251392d9d628c94c9a24763219612b318933a4c334a118785a54b370c94b9b8c2dc7a1596ca5633b1e668e15036d145b56364c2d1327c426e878867ed74cd24b262a2e58db21741778911b47c1c65fcc23579790e1a69097ad3155c06b8f120a04d07f6a3aaa28e3a0a4daedf9911bcc179177ebb6135ed21c93c7700f33ce702128a0710dcd93b45ef1141a86fcf9cabd04b09ed8b75350a0e9cf27a47aae5cbc6af90b3d82012abb527f5118059eff45db39216e71d168c8a13da00a2cdf436de0faf80b90b0a56d1674b37183efa87d0a68466b5a928fa709601df8f86f3b6dbefa9943a52324dc617988502aa4a6ed12315def33db9e3823738034b896ef62e3fee0d436954365a43b5acae792dacd874a5bb146bc802008f3f775bb8e7f012a168a557b040000",
    ],
    [
      "ETag",
      "UWo20xO4uIpjZNvjEBqJBQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:19 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1626997768481"
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
      "8d925b6f82401085ffcbf415136d1191c4072f5849bc55f1a1698c5961401458babbb431c6ffde596a6dd336695f6066f86639e7c0090e491e8203db247e2e511c6f62540fba58a02c5325e956f05c2218808ac5449aee6137733dfb5826c3c1ee71d4b747cdf643a743840c769831704e10259886129ca713e42c435a0b785a66f9a6ea0c50c7420f97fec29bde539ff150f7d3d578dced8d5d381bd7c59029b6a9f87facadcf06ecf97681110acc03d45a0ac1f718284fdb942c2b52ac495e8a00255470f52016bc2c98e0bc46935ae3ae596b58b756bbdd6a59b66937884c79c054c27382574b12088a2b962ef82bd9048b005195e438aaae2f344ec2ca892ebda96f9995c0af00698b9214377f832478c7e83b7c60970cbe732ce365aeaed4703cebfe761c85fa79d4a0ebbb3f08a928aa2be27b1377e9772773cdad2fde7b4785722e3825295187d8a89b76b365d5df73ed739d35bdc751a244030246bfc72851e0442c95787e03440fcb407c020000",
    ],
    [
      "ETag",
      "4EkhOEI8yuiFDhYHC8H59Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:20 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-136-1626997768481",
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
      "00000002ff85547d4f9b4018ff2ae4f68f267da1b405dac4b8ae4525a9d4515a67b6a53de0c053e0903bd4cef4bbef39b06ae7369326e5787e6fcfdd733ca15b9a8568887c1adf95a4d87cba613e6a2022700c6f1faf97e7eef2f1faf1eceeb2cfba9b6fbfa29b9387a3234050c9e238cd13d2e4ac2c02c2878b792b2e5899e382b12608353b5dbdd9d1357d30300cddec991d20729244539add02fd5a889c0fdbed9d792b662c4e08ce296f052c7d79dfbed7da79c16e4820787bdfb30d36bcfd81eb71c2022c28cb8e167348507252ac488a6902195ea9a1ff795fbb4571da8a017c4f03828380959990b94022605944e3b2a854d1f0095539df3ca0b935b5c69e329e2d1cef608d53495e1f2a982bbb4543594353114dc88a866b5959adf25be5c49d9d4305125c634ef85ab93cb35c4b51d6211664adfc2855b51b28c7cac89928fb0ab6a32c1cc79a7bcac1f1a172eace1617ca97ab3d0c440f091734ab827bd84f880cfdbcb9f6fb3395042c20485d5c19aa8e3ba63af023df0822b3dbf72395f8bee91b7ddcf5d560d023bdd027187842aa572c9cb1ac477495f4f4d00785aeee130df7fb1dd31fe886dfefe841186a866e843d0d6d1be8a1a0824c28cf19a7f506a34bd7f6ac95e72e9cf1c8b3aa36225c26625287934dbccd29a04900fda7afadac52064ef2b46cc7b3dcd1d8b397563d205312e36033bf83118970c209a0718153224871ce42d83474319bdb9e3d7346536054a77eb1437034fcfef44af03679b5cba2fa4713d9c0f68de012276505b8af1f90a66a6a53d59a9d3eda6e1bff561ab9eee80adc7151e0cd1f35e848ef49fa5f7c2a7cb5aa93ee7c3b48babda4d85be968fb730bbf06822b567ba1af0bcbbd42f52b9744a42059f0f13c01b82a7cfca9d85d5b00c3c5051f2e600de31b70e91214a41e639a56e96bb669aa9a5e7d68042ec4bb5ad73076e72535a4224949269e5baaaf6db56fb254f217101461fa1cdb3985ea6f9413331538050000",
    ],
    [
      "ETag",
      "xhVMRVxhxHqW5o3yXzfjFw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:20 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1626997768481"
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
      "904f4fc24010c5bfcb786da305524a130e4288a28448958331842c655a4bdb9dba7f3095f0dd99adc693072fbbb36f7e33796f4f5016720f31ec8afcc3a26aaf72342b5724a86d65345f0d498de0011a913359458f5faf32d3d78761593e4c2796846e57e331133a7dc75a407c82acc06aaf217e3b811435f298a8c94ac390691bf79e2f5f6677b384859af64e58ae178bdbc9620667ef7768bb6dca7f8d6cce1e1c689760860a658ace43a3e880a999bb785ad44d85be26ab52d4d0c15d2357641ba1887c56fca01ffa41d80b47a3e1308c0651c06445a930054986d7cf6c0e0c195125f4c9f1a0c780ea4a4e9a75e791e57e17e2d801cedbdfbdc0f5363f0b27ad41fda488ed6974ce06d1cdb7cf2939ef86331965d18354f037df1706e24c541acf17d96329d7c4010000",
    ],
    [
      "ETag",
      "l8KzYnfs/j7kkJCBuoasyQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:20 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd04b7282300000d0bb642d8ef20be9cea81d1a02a98369c40d936240a0b52158143abd7b9d1ee1bd1f208b42f57d7efd6ad5053c8151da685ecc231de0f5ee1c5a468fed740bd63c3a7e8b784abd64d83f9f4278b7fd355ff93c1751d9389ae42c8369b0b0f1cb9904a9f7f6490292982e7316693cbe0aca68225db144bb9aa55240da90535bc5616990fb419d2e662b0ae1fb16faeca8881e33b73af9678db3f4809b05cfa6fdde7505c796f04cb7f199d595d7dbf1a28b9c123884cb61d94a3c28a624e26e6d536f7bd0abea6613d41b0b061b3ec9ade475026640dd756d549fd70faee3213403fff6fc3a6af508c04a1a65c0ef1f502104061a010000",
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
      "Thu, 22 Jul 2021 23:51:21 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-137-1626997768481",
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
      "fbda8457122052b466295d9112b212d2769a26648ca14e09a6d8b4eaaafcf75d4cd3b5aab47ec2f63de79e731f3ca33b5665688a5256dcb7b479fab2e3293a4154e2025e6fcef5f8cfb7dd6ecc027e131656e50bc7ba9ccd00c13a96c0fbbaa403c1db865031dd6e8645c3db1a379c0f20d1c0b49d8139b1269ee7381377e49a4014b4cc97acba03faad94b598eafa517c58705e9414d74c0c09dfbfbeeb0f965e377c478914fa7b4d1d6484fe89ead792132c19af66db0d3868056d12bac7ac040fffa8597afa3ef790e1fdb000f003231413c2db4a76be2005e155ce8ab65159d1f419299f6f0e68e32ffd45ac115eb6fb2aa9f09e9e68199638914f35d5cea3f54a0bc2f375b49ac7c13a4c368b0b7f351f2ed6cbed2adc68d7177ee46b12a725555c6da69daa5b0817d0cfa890ac52ea71f7dc29bf7428f838988e00d282f6c1c43126d8740d2fcd5387e4ae3d4e7383a6a99b3a636ca706f1467494a514034f892a16ae7835365ddbb06c9c1826b69291e59124f56c23b1c7b94d264e6664130f1d4ed063c3243d63a2e682f51d42d75110fb491c6dc3c53cf65509396e4b79d61beb0a78eb51428100fa4f4d872eca382875ed0ec2d88fe68b38b8f2fb092f6981c9d3e61e669ce3525040e3069a2769b3e219340c85f3957f066035b11fc7a040d35fcfa8eb79e7e24dcb5fe9310cb0b32bd5176de22808bf2b3b47c4152e5b0579e80fa806cbb7501bb83efc06246c699f055d6efde827ea9f229ad38656e4f3690258053effdb8e9b0f60d87dd01112eeb03c44742aa4a1fd123155ef0bdb",
      "754dd3f2900237f243cc1a3bc7b67539ba8c744f2bf95252bff950692fd68a57100461fea16ad7e12f744105cc7b040000",
    ],
    [
      "ETag",
      "XF/TzBjj5iIoXNg2nEs72Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:21 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1626997768481"
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
      "ff8d92d14e83401045ff657c9446692bad247d40addaa4d64a696c624cb38581a2c0e0ee626d9afebbb3a8d5a889bec0cc7066b9f7c2061ed32202171669f254a15cef25a86f4ce1a3aa32adf85652a1102c402d12266faf67fbfe7279d04c5e68552633bb356e5649afc7840a97980b703710a798450adcbb0d1422475e0b29abf2625e7716e875698693c01f8c2eb8cf2932fd683a1c7a27c33e6caddd6224b498d7fc3fd6eeb7163cd0c2c7182516211a2da5a4070cf5c0d854222f336c28aa64880a6ab87e9048aa4a21891a3c69d8ad4ec3769acef171a7e374db5d9bc98c42a1532a189e4e582068d222f369c536c16140d6253b8eebeb338fd3a87662cac12870dab5c0af006b8bd30ce77f832c7829f83b7c60ef197ce7444e55a177d4f9f0dafbed380ef5f3a8332fe8ff2094e6a8764830b8ea4f02ef6a6cb8fb77ef276b8d6a2c8993546842b40fdbdda38e73f896eb2999acf93dae96155a100afe3d2e530d6e2c3285db57d53805637c020000",
    ],
    [
      "ETag",
      "WOX+Rhh/2gxowpgX13P2ug==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:21 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-138-1626997768481",
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
      "546b4fa34014fd2b64f68b267df068296d62dcaeb22e494b2ba53ef6917618061c05069941d398fef7bd8055bbeeae0909ccdc73ee3df7c513ba635988462860f17d498bcda75b1ea016a212c770fbe8d030f58cab494fb869f9689f5f5d98b7f1d1112058c51238cd13da16bc2c0815a3e5a21317bccc71c1791b1cb535c36a6ba66e0e87838169f52c0d888226d184657740bf913217a36e7717bc13731e2714e74c74084f5feebb0f7a372ff82d255274f76376218ce87e10f538e1044bc6b3a3e502149482162b9a62968086576a187cdef7dd6138edc4007e608462427899c94a17b8203c8b585c16b557347a42b5ce371f68614fec135f39992d5dff608dd38abc3e54b050768796b286a42296d0150bd79565b5caef94afde6c0a1650708305156be5f29bedd98ab21612d4ad959fa5aa1a443956c6eea9b2efc27195a5ebda0b5f39383e54cebcd972ae7cb9dec380f6900ac9b25ab98f838456aa9fabebbc6f6a45c0129434c6d54035b166a9c3200a0624b28c7e10a93408ac60d0c746a092618ff6c28062e0c9ca7bcdc219cfc220ea857d6245240c89a659833e0d88a6eb91695903ace96110466a10ea68db428f0593f494899c0bd654185d7a8e6faf7c6fe99e8c7dbb4e23c265224f1b7155126f754a481240ffc96b5b5919874855bb1cd7b7bdf189ef5cd8cd844c688cc966710f3312e1445040e302a754d262ca43281a9acf168eefccdcf1041875dbe73b8440a31f4faf047f93d75596f51bf9ce147a349ece6b0d3bd0054eca1af5d07c205dd5d5b6aab7b5beafe923cd1869bd8eaaaadfd176dbfab7f3b1e78daf41102e0abcf9c306499abd8afe97a835be3e35e2772a3454457bd1b47732d1f6d7169e1682b56b62a1f3a5ed5da3e6caa3112d68463e1e3100d7868f7f1fbb5506302c33c481b5900c269a882a0a296833d92cadd5376ccbd255b5876a7021dfd934c3d8b5b0f25179a429",
      "cde4734acd2ad775ab4ca57801811106d275dc33b0fe067cf628dc4c050000",
    ],
    [
      "ETag",
      "wIedmR3XL4sNmuwEQXV6jg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d90414fc2401085ffcb78b48d16082d4d3888412521a01562c410b22cd35a683bebee168284ffee6c359e3c78d99d7df3cde4bd3dc12eaf3610c33acf3e6ad4c78b0ced932b123475610d5f8a2a83e0015a913179a9f4d576914da7e9e75df87ab97821390b0ffd3e1346be6329203e419a63b13110bf9da01225f29828a9ae2c43f6a8dc7b34990def87090b256d9c30998fc73783f110cedeefd06aa576ff1a599e3dd8d23ac1143556129d07a5698bd28e5c3c234a55a06fa8d6120d3470d3c834d54a68229f153f68477ed06d757bbd30ec469d2860b220296c4e15c3f367360796ac28123a703c6831a09b9293a6cdb967b9dd84d83780f3f6772f70bde5cfc2c1d1a279d4c4f60c3a679de8fadbe72d39ef9633595da30752f0373fe416e2541406cf5f41193012c4010000",
    ],
    [
      "ETag",
      "+pr/jZgOOfzF7Y+ZWocT7w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:22 GMT",
      "Server",
      "ESF",
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
      "d1",
      "9642400000d07f99e774a622d93759ac364a83f032c78c4169d18c8a3afbefdbd94fb8f705324a9910b86f6bd6800f3066736d4aa7dfdd6a6df85532de300b9d1a29b7b4b9682dcc55b49da1940c1b6784a809cfed5e47eaea129857cb1c84646a773d87a9f0ae6df5a4fa23c4416d858fa7f08c81e6bbbef3b68706c54e45a03d93b19a87f1c9a2666555444d217d6c16d23e9e19c2bbff6c1191edb572edb05b4b65ea57d148dc821c03dbe0bd1e3a87ec684429e676e4cee1392b5c9b37bd527e15645c26041652a2702df2e5ddb2f9ccec555c967ae08209604377e24ce0d39bbb50346d02feedb81f3bf60e58b38c330e7eff0070dbad7b1a010000",
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
      "Thu, 22 Jul 2021 23:51:22 GMT",
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
            parameterValue: { value: "purchases" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-139-1626997768481",
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
      "ff85536b6f9b3014fd2bc8fbda2684bc2052b446295d23256423a4d5344dc8980b750b9861d32aaaf2df776d9aaedda4f513b6ef39f79cfbe0993cf02a253392f0fc570bcde1d3bd48c8190145737cdd4561749f877be7500d4bafd9d483c13a799acf11c1354bd2b22ee05c8ab6612067fb5d2f6f445bd34688734c743e187ae7838933f1bce974e28edc01122514d99a570f48bf53aa96b37eff24decb85c80ba035973d26cad7f7fea3d3af1b710f4cc9fe7bcd3ecac8fe07aa9f0bc1a8e2a29aef77e8a095d0c450525ea0873fd434b9789fbbc769d9cb11fcc81950c6445b29ed0b533051653c6f1b9395cc9e89f1f9e64076feda5f461613455b5671454b38b352aa68ac0e355857e17663ad82ab6db85944ab6d10ef96d7fe66d15b6ed7fb4db0b36eaffdd0b7144d0a305c6b6e5d985b8017d44f412a5e19f5483f6be5970eadfe1d8c26a0b4842e184fed091db8b69764c99465ee709c643624899b4cc77498d8cc1bc1284d8022cf881a16ad4495da8e3781f1341e78d3493cc263eca589138f5d3666a3e188da76468e67e4a9e10a2eb9ac85e45d87c86db88afc380af7c17211f9a6848cb685baec8ce902de7a54582082fe53d35147b94025ddee5510f9e16219ad6efc6ec26bc8293bec7ee18c335a4840346db0790a9a8d48b16124586cfc4b049b897d3d052599fd7826bae7dac59b96bfd2231ca0b6abcc57ff23abe08bb17342dcd0a23590c7ee406ab47c87b5a1ebe34f44e2967659c8b7bd1f7e27dd5308193450b18fa7896013f8f86f3b6d3e8271f751472abce3f230a9555803dd127153ef0bdb751dcff1880137eaefd8d0f69c53db740e9d114aa8d44b49dde663a59d582b5f4118c4f907a65dc7df2bb0ff857b040000",
    ],
    [
      "ETag",
      "STRTjgRU2yn3m9rMp11Lbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1626997768481"
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
      "926f53824010c6bfcbf51666a40c85195fa05931a129e2abc6714e5810058eee8fe5387ef7f6c8aca966eacdb1bbfc7679f6e10e649b570971c92acf9e15f0fd450672aa8310842aa4c047cd2a01c420206986a43db8b1553656a3579b6f2db11b580fa933edf59010f11a4a4adc034973281241dca703a96809d816b34295d5b2c90c22f7b52ecea2d01fdf615eb244e7e3791078fd60488ec6b931a1922e1bfe1f6d8ba341366c15420a1caa18b4969ab30dc4d2d76b0a5ad6059882291e83200ddcbcc8385335e58c995831ad2bc7b4ec4bdb713a1dbbdbee5a48162ca6326715c2f3190a2492495a84ec45685310e04d881ba7cdb9c3729e349be8d01f4776bb11f815406d695ec0f26f1005af29fe870fece4c1778e964c55f24cdd068fde6fe3d0d4cf51375e34fc410889569d91c81f0d6791379a686e71dabdbf9720269ca19302b48956abddbdeed8ad775f074c7b8ddf712557609098e2f5b8cf2571535a0838be01302c92a17c020000",
    ],
    [
      "ETag",
      "6CD6ugNuMx6rk1svC1Kf9Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:23 GMT",
      "Server",
      "ESF",
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
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-140-1626997768481",
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
      "00000002ff85547f6fda3010fd2a91f74fabf223819004a4aaa39076a834b421b4abb6091ce3a46e434c63870d557cf75d9c42cbbaad52a4e47cefdd7b679ff38c1e593a471d14b2f829a7d9fad3030f510551896358bd08af9975bf8a7fa5fdd3af49368e8e2ed2a3f8f81810ac6009bc5826b42a789e112a3a93712dce78bec419e7552854354cbd6a580dabddb66dcb311d03888226d190a58f40bf9772293af5fa56bc16731e27142f99a811bed8add7578dfa32e30f944851dfd7ac838ca87fa07a92708225e3e9f1640c0e7241b3295d6096808757ea3cfcbc5fbbc6f0a2160378c508c584f03c95852f2841781ab138cf5455d47946cae79b0f3476876e2fd07aa389171cccf0a220cf0e352cb46d50d166d054c4123a65f35991994e978fda993fba840c38b8c7828a9976fbc5f55d6d47d3bee7bade24da89d6f5fada7e8d81a74d3ccf1d07dac1c9a176ee8f2657dae9dd1e06cccfa9902c55d6031c26b4b0fdb2bd83f7a75a10b0042b65726aeb16361cbd1d46a14d22a7d90a239d86a113da2ddc0c75d236a9390f29069e2caa2b164e796a62c7d2db38345bc6dc364c676e5a5693d894e88d103b866d19cd8834751b6d2ae867c624ed33b1e482955b8c6efd41e04e037fe2f5ba81abda88709ec87e69ae68e2ad4f094d02e83f7d6d8a2ce3a0549cd7c00b5cbfdb0b06376e3922431a63b21e3fc19044381114d038c30b2a6976c9e7b069e86a341e048391d71d02439dfbd5162150e7dbf32b21582fd52e4bf54667c35137b04ce5600bb9c149ae30abf20319b5162036957f97e9fa7ef70ea47196e1f51f3968c752f4bf2828bc8a4a9b3b4554a86da3c65e64a1cd8f0d3c150437acd442d713d7bf43e5924f239ad1947c3c4c0056898fff14db5b0b60b8b7a02324c430bb44142a24a3e50cb385725fb21da769b76ca4c0997c97736c677b58458da2225dd054beb454de5ab56f452a173b102461f4bc81770ed9dfa6f2368637050000",
    ],
    [
      "ETag",
      "KbQi6hvgxnDBXlrSf+Kn+g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1626997768481"
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
      "02ff8d90414fc2401085ffcb786d03ad8442130ea88d9210c42a5e0c214b3bad85b65377a79a4af8efce56e3c98397ddd9376f26dfdb131c8b3a8510f645fed6a2ee2e72e4075bc468da928d5c0dd506c10164958bf333cd6fe6f9603d099e83c1e87edd7110c5f3d94c1c2679c54a417882acc0323510be9ca05615ca98aaa8ad594cdc35f6bd583d45b7512c4245a915569be5727eb58ce0ecfc0eed76cdf15f23dbb30307dac798a1c63a41cbd0683a60c20b1bcfa8aa29d135d4ea040df4e6be916b6a1ba5895c515c6f3474bdb13f9e4e83603c194d3c719694282ea816f3e651e080895519d387c4035f0cba2f2569d69fefbd6c43d8caebd9feeef9b6b7fd5978d5319ab526c13368c92efde137e7355976964cac5b742051f2cd77054398a9d2e0f90beafc4c73c4010000",
    ],
    [
      "ETag",
      "zdgDAg/P87V7/4OPyt7ERA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:24 GMT",
      "Server",
      "ESF",
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
      "7282300000d0bb646d1d473e862e53042568473e12d8303146c48210b098a4d3bbd7e911defb0194313e8ee5a3fbe277f00e145d3a7336c73d441f877a918ed9f1260dbd8d964e806fdf1344b1bd0bb2d36899d0b43069f0e692ec0a0d454456feba36e9c4c90506b92f5bdbaef4394f84ddb8054b376d788863e2ef27a3cac260259a4d43e8be09ce3459e8372365b0c8fb3ad2eb2e3a75437e9eba7d1c48eb7a3d0e775485cc1fa4209652c973496145b6ea13793df74a5f4699796cc34497bb4eb24695054f8b50e0dcd5588de8e99da4db56d2bad502cc00977d3df0b1ac5f5cc3729c19f8b7970fd5f35700e274e003f8fd03c1d7d2db1a010000",
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
      "Thu, 22 Jul 2021 23:51:24 GMT",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-141-1626997768481",
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
      "535d4fdb3014fd2b91f74a9b949636ad548daa0488d4a65b9a82d03445b67b130c491c62a70ca1fef7dd382d03218da7d8bee7dc73ee475ec9a328b6644298489f6aa85ebe3d48464e08689ae2ab737fc787576e76edb9f0c7cbc4f3d3e6de7d9e4e11211a96a279994147c9bae2a0269b7537ad645dd24aca0e26eaf406bd4e6f783a1c8f47a3a13b707b485490250b513c22fd5eeb524d6cfb28de4da54c33a0a5505d2ef3b7777b776a97957c00ae95fd51d34619657fa1fa3d939c6a218be9668d0e6a05550c3915197af847ddb2f38fb9bb82e6dd14c13bc181722eeb4237be3005974522d2ba3259c9e495189fef0e64ed2dbc79647199d57911173487136b4b358df54b09d665b85a5a7e70b90a97b3c85f05f17a7eed2d67ddf96ab159066bebf6da0b3d4b539681e15a53ebdcdc02bca0fe16941685518f9ae746f9d021fff3601a024a2b6883f1c819d29eeb8c59c2463c71fb672c718031978dce689f397c3c80c19601459e11352c5ac8829e39ee96f5694c876e120f0006314b388bfb3c49a84b4f7b9070b23f21cf95d07021542995683b446e433ff2e228dc04f359e49912125a67faa235d614f0dea3c60211f49f9af64d5448546adaed079117cee6917fe3b5135e404af9cbfa09679cd04c01a26985cdd3502de5161b4682d9d2bb40b099d88f635091c9af57d2f4bc71f1aee56ff40807d8d8d5e64bd651e80757c6ce117143b3da4076ed811c96074def7f231097b44d427e6ebcf08eb44f21245041c1bf1e26824de0eb9fedb8f808c6d5471da5f18ebbc355a3c22b68774898720f6cd71d8cc66362c095fe141b3bc363d79a1c4d46c8a1d08792dac5c74a5bb15abd813088e30f4cb7f67f01e81f23537a040000",
    ],
    [
      "ETag",
      "0hYc6G8lHE8exEliwqUh8w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:24 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1626997768481"
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
      "0000000002ff8d91516bc23010c7bfcbedb505eb6aab051f748c4d10d9aac26088c4f45aab69d325e9448adf7d97cc8d31f6b097e6eefa3bf8ff920e8e659d4102bbb2786b519d6f0a34cfb64851b7c2683a1a596b040fd0b082c841969dfafc180a1516fdeaf8a24731df4fc6632234df63c520e9202f51641a92d70e6a5621ad7129daaadebace03736eec70b94a678b07ea2b99d97eb19ecf27d3f93d5cbcefc58c19b675fc3fd636170f0e7297628e0a6b8e364ba3e401b999594dcdaa46a0af65ab386a70b0fb5128d9364c49e9d3c40fc2c00fa27e341ac571340c8701914272664a5913bc5e524030d23091ca1369c22d01ca95649cbbef3b8dcbcc99d872b65845a10bf813708e5fc855eb37d30856ffc16cae09a66783fa4949f2d16855825e381cc451efd3ee4e5a63433761548b1e70468ff4581a487226345e3e003777e02002020000",
    ],
    [
      "ETag",
      "5ddw2ck4lr4g2mkXs97chA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:25 GMT",
      "Server",
      "ESF",
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
      "d1",
      "6e",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "7f",
      "e9",
      "b3338093d1bd0d56062a6bcc04911752ca0d038b145a445cf6ef33fb84737e10e31c94ca7577860b7a4533b3f0922fb7d271bd7dcdd253406c1a269e6f46deb3c8c79c126360b62cde5f9c7e7ba585eb9f2c12d27dc70ed3651b64b326712087e9297c93c222e7d8164dd1865943ce69ff55361b2e5cb5b1451f4066f7517b5b53ba3263a3c8cc78d776c96e6dc9ca9959daaf6e1fe50c13937e75f2af59f2397fa796d297968fb4a83a170309f9644ad8e8fe8ee3081f6a3dc6860ec4a4f68d57a60e3f0a0c867042656a380eb9f4d102c14dd603a8bc7e70576b8c17e8df9eeb59c223c00536c0807eff004e63de761a010000",
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
      "Thu, 22 Jul 2021 23:51:25 GMT",
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
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-142-1626997768481",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b6f9b3014fd2bc8fbdabc492091a2354a699b35211b21adaa6942b673616e09a6d8648daafcf75d4cd2b5aab47e01ec7bce3de73e78218f22db90116122792aa1d87f79908c9c11d034c1dbe7f6b79b92dda4f973eff26ab90faef3e49e4ec66344888aa5e8364fa1a164597050a3f5aa9914b2cc6921650313353a76b7d1197407c3a1e30c5cdbed2051411acf45f688f4df5ae76ad46a9dc49b8994490a3417aac9e5f6f5beb5ebb6f2423e00d7aaf55eb38532aaf589ead75472aa85ccc6eb153a281514116ca948d1c33fea869dbfcfdd1474db4c10bc131c28e7b2cc74e50b537099c522290b93958c5e88f1f9e683acbcb9370d2d2ed3729b4519ddc299b5a19a467a9f8375192c17d6ccbf5c068b49385bfad16a7aed2d26cde972be5ef82bebeeda0b3c4b539682e15a63ebdc9c7c3ca0fe06941699510fabeb4af9d8a1d9c7c154049456500723a73da01db73d64317378ecf6fa2c6e03632e73fab4c7da7c6883bd61409167440d8b6632eb77a1dbb1373ca2b1cd239be38371a71b75fa3dcae3b8db677d4e0e67e44f21345c08954b25ea0e91bb60167a5118acfde924f44c09312d537d511bab0a78eb51638108fa4f4d872a2a242a55ed9ef9a1174ca6e1ecd6ab273c8784f2fdea09671cd35401a26981cdd3502ce4061b46fcc9c2bb40b099d8f7535091d1cf1752f5bc72f1a6e5aff4100758d9d5e64d566130f3af8c9d13e296a6a581ecea0f725c1e347df885405cd23a09f9b1f6827b525f0510430119ff7c98083681cf7fb6d3e22318571f7594c633ee0e57950a2fa0de2161ca3db25db7eff41c62c085fe1073edc1a96b558e2a236c21d3c792eac5c74a6bb152bd823088e3f74db70e7f013b17d3567a040000",
    ],
    [
      "ETag",
      "x0JKubKlpx3FGOyRHpgYaA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:25 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1626997768481"
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
      "ff8d91514bc33010c7bfcbf9dac23a6bb715f6b089b849295bb7a12832b2f65abba54d4d52a58c7d772f718a880fbe3477d7dfc1ff971ce150d61984b02b8bd716657751a05e9a2241d572ade86844ad101c40cd0a22f3c76914ebfbbbe4613fe91ff2a861dd6cb11c8f8950e90b560cc223e425f24c41f874849a55486ba9e06d556f6de780ee1a335cad93797c4b7d2532d3c79b289a4ca31b3839df8b19d36c6bf97fac3d9f1cd88b5d82394aac5334591a29f698eab9d154ac6a38ba4ab432450516b63f0a29da8649215c9ab89edf77bda01f8c46834130f4871e915ca44c97a22678b3a280a085663c11efa4099704485b92716ebf6f342e336b62ca79bc0e7c1bf027601dbf90b3d66fa6e1acfe83793e2798761ad5420af2516854bc9e3fbc1a04bd4fbb6b618c35dd84962d3a90327aa459a921cc195778fa0073046ffb02020000",
    ],
    [
      "ETag",
      "fZBLNtWJRXjA2kfLpayHPQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:26 GMT",
      "Server",
      "ESF",
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
          "SELECT `name`, `id` as __pk FROM `accounts` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-143-1626997768481",
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
      "0000000002ff8553796f9b3014ff2ac8fb67d3721f1c91aa2e4d594b95928e40ab6a9a120386b9054c6c9329aaf2ddf730498f555a2524c0bfebbd67fb093dd222461314d2745311befbf4c042d44244e21456d9ee72b70982599edd9e55579bedf974bbf83a3d390106ad5502e76546da82553c2262122c3b2967558939636d306af747c3765f1fe8966518ba3932fb2014244be6b47804f96f294b31e9768fe19d94b13423b8a4a213b1fc79bdbb1d744bce1e482445f76d66176244f783d4d38c455852569c044ba8a01284af488e690635bc48e3f0db5bef0ec5792705f29646044711ab0a59d70516112b129a565cb9a2c9135275befa404b7b6ecf7c6d5de09cac5bda9ac66b0d0b6db52a1fb5efdee25a5b1f1cc55abbbbb43d5b6b388eab05ae6b2f7dedf3e917edc25b0437dad9bdc25a0737c88f8990b450e93e0e3352271f26e4bcdf985a802516a40157464fc77db3678549684489391c87498f84a1191a633c0c7b913522a338241874b276572a5cb0421f8e4c186b3fb130ee5949321c98d6786c44f118e3be81ad618c07b11ef6d0be85fe702ac939152513b49912baf31cdf5ef95ee0cea6beadda487095c9f3a6b8ba89d7754a681248ffe96b5fa39441523d72c7f56d6f3af39d5bbbd9e5394971b45b6e609f139c09026ccc618292f06b16c3d0d0cd62e9f8cec29dce41a1b6eee6c81068f2f3e945e0ef4a3565a9de68ea79d37bd060cef1ee1f0cead04768bf7f15778bb34a51145ffd35fedb06407db4ffb587a785e004377ee847607bf7a859f248423829a28f771ac80af8f8261e6f0590e15e408e90f00f072b12754ac44973c068ae2a6cd4a6a91b832152642edf61801e27597bd48e2427853cb4d4dc0a359b1aaac43309403817aee35e00fa172a2f20fb97040000",
    ],
    [
      "ETag",
      "oyHyqUUCmlVBuJqvDAvO+A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:26 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d90d14fc23010c6ff97f3758b41c980253c0021488228038cc690a58cdb1c6cbbda76c842f8dfb956a32fbef4eedaef6b7f5fcf70c8ab1d84b0cdb3cf1a557393a159d826425d174673915469040fd0888c956f4f7976db948bf2f5f0781a0c5f249df251d6efb342271f580a08cf90e658ec3484ef67a844896c73c503d3483b2d57d1743ee1b9a49d9de7ebd96c309c8de1e2fd3ae2581efe1cd3f96a3c1947ff5936170ff6b48d304585558216402ada6362a6369b16a52cd0d754ab043538b13bc814d55228229f77fc56fbde6f057741afd7e904dd76b7c5ca82126172aa58bc5e321c1832a288e88bb3811528d772ccd4ad47fb5c2d51c52566224e484917e9e8e44cbaf9b962d818d4cf8a1848a365093adf6023b2b086431855a30789e04f7dc80d84a928345eae38cc3865b2010000",
    ],
    [
      "ETag",
      "YOig/ymQmXkMxABVpoxiCg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:27 GMT",
      "Server",
      "ESF",
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
      "0000000002ff1dd0417282300000c0bfe42c0e5201d39b41d184024241910b13d2204a514a02824eff5ea74fd87d02ca18172293b78a5fc13b18a906a76cea340b6405e558afe68d270e97bbf9d0d82abdea9baa9314d3390e0788c9296ed4d2dc19aa62636419a42388e65fa5f0d328aeef638463878631feee7592f0a3ad16274f77208a1e78962cc90c6f833032e37d65fa48fc681bb636f8c24572c82f7ab26049ef7b81eb4a85175a9b1c7087551d7b4a7feb37cd215bcaeab1ea4e7b5224c221c1f6082db92d3f336e2b4a6753dfd23eb25d4dfcaa54f2b5abf5ac47300513c087e6dc72919d5fdc371dc209f8b767726cf82b0071daf216fcfe018ac916e71a010000",
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
      "Thu, 22 Jul 2021 23:51:27 GMT",
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
      jobId: "grouparoo-job-144-1626997768481",
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
      "0000000002ff85536b6f9b3014fd2bc8fbdabc080d2452b446095d9112b20269354d13b28d616e0127d8b4eaaafcf75d9ba66b5569fd84ed7bce3de73e7846f7bcced00c115e1c5ad63c7db913049d21a67001af627988f3fbdb8dbd76aff23f0789f1ee72753d9f03826b96c4d5be643d29da863239dbc5fda211ed1e3742f420516fe438bdd1c49e4ca7ae3bf11c6f0444c9ca7ccdeb7ba0ff566a2f6783c149bc5f0851940cefb9ec5351bdbe0f1eecc1be11778c2a3978af39001939f844f56b2928565cd4f35d0c0e5ac99a94559897e0e11f352317ef73f739aefa05801f38659852d1d64afb821454d4392fdac66445b367647cbe39a0d85ffbcbc4a2a26cab3aad71c5ceac0c2b9caaa73db32ea3edc60ac2cb6db45924c1364ce3e595bf59f497dbf56e13c6d6ed951ff996c2a464866bcdad0b730be102fa19938ad7463dd1cf5af9a543c1c7c16802484bd605537738c1236f3825397169ee8dcf493e648478c43dc76332a45387391961187846d4b0702dea496613ec78799a633c4a9de9709a4edd8ca4b69d8db3919b3b3661e878861e1baed88acbbd90bceb10ba8d82c44f9368172e17896f4ac8715baa55674c17f0d6a3820201f49f9a8e3aca0528e9760761e2478b6512dcf8dd84d7acc0f4293ec08c735c4a0668dc40f3146b36228386a170b1f157003613fb7e0a4a34fbf98c74cfb58b372d7fa52730406d57992f8a932808bf193b27c40d2e5b0379e80eba8c9c97daf4f117006149bb24e87ae7473f50f714b19c35aca69f0f13c026f0f9cf765a7c00c3ea838e547087dda152abd086753bc44db92f6ccf7327e76364c08dfa10f386f6a96b3a87cec82a56ab9792bac5874a3bb156be822008e30f4db78e7f01c1df98857a040000",
    ],
    [
      "ETag",
      "oCqSfkWM2L7HfzqsaaUFDQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1626997768481"
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
      "0000000002ff8d93514fdb3010c7bf8b794d253242da46e2a1ddda1129b49006f130a1c8d89760707cc1763a5555bf3b76806e1a93c28b7377f99d72f7cfdf7bf22c1427097910f54b077a775283bdf1410ea693d6b8478bca000908585a3b52a4693e3dcf96d5dd23c3976679b90ccf563717178e30ec111a4a923da904486e48f26b4f146dc0b531945da3ca3e0b88ddb5beb829f274f5d3e50d729faf6eb36c36cf16e4101c1b39b5b4ecf92fb4dd1f02f2840f3954a04131f0b3b41a9f80d9d4af6968d34a1819ec3403437ab87f516bec5aaa1147ae320aa36814c6dfe2e9743c8e27d12474a44446ad40e5e0db8d1b9058b454e6f8dbad49c23347e83e762b57fdb9f562f17e151fa6ab228efa09ff062863d8295b0e8295d0c6bec9f701becbf02f29e91741f7af841c826a501cf41025da9272aec19841124d49dbf688cdd7ebecb32a8a6b147c18dc8a0140daed115866ebd9ffa4750efba3d58f59b1f84418eb7c73448af46ab1296657d79ebb7f37c27c67c15c6b74b632e01d159e4693f3717cfa66b2efe88de7be9358dd4140187577e552589254541a38bc0201a4f22f89030000",
    ],
    [
      "ETag",
      "iIIR95LFfWhcoqmFHF13NQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:28 GMT",
      "Server",
      "ESF",
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
      "ed",
      "d4",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ad0e1f85a43b81484144cac7a21b0642f8593e268a389ddebd4ef7bd81ef10ef1ba48450ce936b7fa61d78038f54420bb2d80e50d33f2ad717da4277f503c4c42a032b991736b1c5491a3d9c4222a95e6d1463545dca408d7494a1d430b06f4b3ae30adc96b123b783ed21b914c750f4fa2e1e43dc2378a3645db07692b1399ca2f3c517842c293ff56ce38470bfb34a350f82b0df57474e7865256eddac25aaae5c75e934cb531c9b58cba231df35d0ec312e6e73071af7e640ba9a2b666b1e9d89bde3603f39a902ad23f3364cb6bebc3617162f2f2fff033340a7a1669427f5f3037985d00cfce5905c1f037d0ea1d19451067e7e010cb1d1943b040000",
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
      "Thu, 22 Jul 2021 23:51:28 GMT",
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
      jobId: "grouparoo-job-145-1626997768481",
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
      "3014fd2bc87b5c93901402448ad628a56ba684ac405a75d3846c63985b82536c325555fefbae4dd3b5aab43e61fb9e73cfb91f3ca17b5ee76882082f1f5ad63c7eba13049d20a67009af9709ff365332c6d26f9d1f1757eee7f1e6b69c4e01c1354be2edae623d29da863239d924fdb211ed0e3742f420516fe8b8bde178340e02cf1bfb8e3f04a26455b1e4f53dd07f2bb59393c1e028de2f85282b86775cf6a9d8bebc0ff6a3c1ae11778c2a3978ab39001939f840f54b2528565cd4d34d020e5ac99a8c6d31afc0c33f6a4ecedee6ee73bced9700de73ca30a5a2ad95f60529a8a80b5eb68dc98a264fc8f87c754049b80ce7a94545d56eebacc65b7662e558e14c3dee987511af57d622ba58c7ab59ba58475932bf0c57b3fe7cbddcaca2c4bab90ce3d0529854cc70ada975666e115c403f6752f1daa8a7fa592b3f7768f17e309a00d29275c1ccb3c778e8db012988470bffd42585cd08f189e7e25362d3c0614e4e18069e11352c5c8bda0d72d719f924734850648e5dd819297227735c3aa6a300dba3c2438713f4a7e18a9d73b91392771d4237f1220db334de44f3591a9a120adc56eabc33a60b78ed51418100fa4f4d071de5029474bb17511ac6b379bab80ebb092f5989e963f200332e702519a07103cd53ac59891c1a86a2d92a3c07b099d8f76350a2c9cf27a47bae5dbc6af90b3d85016abbca7c5192c68be8abb173445ce3aa35907d77d06514bcd2a60fbf00084bda2541579b30be45dd53cc0ad6b09a7e3c4c009bc0c73fdb71f1010cab0f3a52c11d76874aad421bd6ed1037e53eb37ddf7703071970a3dec53c7b74ec9acea133b22dabd57349dde243a59d582b5f401084f147a65b87bfe0bdccdb7a040000",
    ],
    [
      "ETag",
      "HSiJAtsRas8u4ZFQ5+6UYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1626997768481"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93614fdb301086ff8bf99a4a044a1a22f1a165ddd629b4d00634694291b12fc1ccf165b6d329aafadf770950a631297c49eececf2977afdfecd84f65244bd8832a7f3560dba312fc4d17acc135da3b7ad5681cb08081e7259171fa6da2b2e63b14273e6e2f6fdaf82eb6e5c505114e3c42c559b26385022d1d4b7eec98e115509b40dd5426efb380f9b6ee8a9b6cbd587ea1bc42d9e5cbdb349dced239db078746c93dcf7bfe036df7fb803de1c31a0ab0600474b3d4169f40f845b7a6e355ad61e4b0b1021cebe1fea0b4d8d4dc228ea8320ac767a3303a89cecf2793281ec721911a05f70a0dc1b71b1a9079f45caff137adc9c253226c1fd3ca45ffdc525dc97e952e5c2cb368dc4ff837c085c0c6f87c102c9475fe59be57f045867f49cd3f08d25d293d04956024d8214ad53997d282738324ba9cd7f5019bad56e97b558cb4a8e430b8550380f6db03f0395d4dff272d39ec4dab4fd36cfe8e709e7c7340b2c5d57c934dafae3beefec508b3d683bbb648b672d0392a3c1ec76793e8f8d96497d8198fbe9378db40c004a77fe5abf22c29b876b0ff03cd3412e789030000",
    ],
    [
      "ETag",
      "8LJ7iTuXef2t8yCQy8V8rg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 22 Jul 2021 23:51:29 GMT",
      "Server",
      "ESF",
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
