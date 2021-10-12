const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631152720574";

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
      "d34b7282300000d0bb642d8cf291a43b29168b0ee52348d9641208042c0df2a960a777afd36bd47787f70d4896b1bec78338b34ff00466a2203993f72d34ad6b555b1b06c558961984f9327e316a21c54e1868f8a2a806730aed26b2c68ca7647730991a8f87d93bb9be44488357415d0baa5585b6ccf5512dd0e5bd318e384a4b9106e554ed903605d80ee179e621c1fcd5bfb43a6f46de52dac61635b931d74a68d367dbdf46274f4975cfb19c60358c939ff2c1adba0f4609cdd365b727b9b79db9b4aedfd4f42b998e098c90bd17986f50e2a2e186ddf51a4b852d3f3cfc5f6001d8d4561deb7175dfaeea082dc05f7d3ccc2dbbff3719e958077e7e01b9a7913f19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:42 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ff85535d6f9b3014fd2bc87b5c9390044212295ab384ae4809d980b49ba6091963985b822936a9a22aff7dd7a6c95a556a9fb07dcfb9e7dc0f9ed03d2b53344509cb1f1a5a1f3eddf1045d202a710eaf93cfd9f2d10aa5e5ecefedc3a0f1e6fce7d7f96c0608a65802efaa8276046f6a42c5741b76f39a3715ae39ef40a24ebfd31f0dfb7d7be00c4cdbb180266891ad58790fe4bf525662daeb9da4bb39e7794171c54497f0ddf9bdb71ff4aa9adf512245efb5620f4444ef5dcd2f052758325eceb621e83782d631dd61568083ffc434b97c9db9cbf0ae9b0378cf08c584f0a694ca15a420bccc58ded43a2b9a3e21edf2c50185eeca5d4406e145b32be312efe8859162896379a8a871156cd686e75f6d82f53cf2367e1c2eaeddf5bcbbd8acb66b3f346eafddc035244e0aaab9c6ccb8d4371f2ea09f522159a9d523f5ac949ffbe3bd1d8a2280b4a06d3076cc11ee8fcd4992250ec9c6433bc94c9a24e3c4b1f13031c9c4a2569a500c3c2daa59b8849a6d734806248dd391dd8f2ddba6f1d89af4e3341b644eea5067643ae878811e6b26e992898a0bd67608dd065ee4c651b0f517f3c8d52564b829e4b235a60a78e9514281007aa7a6a38a320e4aaadd9e1fb9c17c1179376e3be115cd3139840f30e30c1782021ad7d03c49eb354fa161c89fafdd2580f5c4be9f82024d7f3f21d573e5e245cbcff40806a8ec4afd45611478fe376de784b8c145a321fbf6a0cac858a14c1fff001056b44d827e6cdde0176a9f029ad19a96e4e3610258073efad14e6b0f50587c501112eeb03944280d52d37683982ef6cc1e58ce0469702ddfc446e6e4d433954365a43b5acae782dab5873a5bb1469c411084e1fbba57c77f8eadd57a74040000",
    ],
    [
      "ETag",
      "9+fDw4St47vk5y2uIAoXBA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:42 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631152720574"
  )
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
      "6f9b3010c6bf8bf79648a1cd9f09a92f4896769168d201d55e4c1572ec83b9353e6a9b4c5194efde8376d9b44ea26fe0eefc3b71f7f8e1c89e94912c623b553db7600f9f2af0dfba2005d76aefe8d5a071c002069e5744ba25cf6e443e5d3ecf77a9fcbe344fd7998cafae8870e227d49c4547562ad0d2b1e8c791195e03b509d46d6d8a3e0b983f345d31cbd3f5e686f21a65976fee93245e242b760ace8d927b5ef4fc07da1e4e017bc45d0a25583002ba591a8b8f20fcba5bd3f1bad13072d85a018ef5707f50596c1b6e1147541985a370761986d38bf9c5783a9f10a75170afd0107a9fd178cca3e73ac55fb4240b2f89b07d4c0b97fd734f7525fb45ba70bdc967937ebebf012e04b6c6178360a9acf3afe2fd06df44f897d4fc8320dd94d243500546821da2545370292d383748a22b78d39cb1c5769bbc57c5488b4a0e837b350068bf3f03d7c936fe9fb4e4af3f5a7d89f3d53bc27972cd19c9d7b7ab2c8f6fef3aeee1cd088b83077767914ce5a0f353389e7c9ece67e3578b2db1b31d7d27f2b68580094e7fca57e5595472ede0f40285745fd487030000",
    ],
    [
      "ETag",
      "sCaSGcT5Cq7bRdWCnkFSdA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:43 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "40",
      "10",
      "fc",
      "2b",
      "88beb4956dc0c6c6588a5a6ae316c91f29e0b67932c7b1904b8023dc91348af2dfbb60c74d5a29793b76777666779607f59a95893a536396dd3450dfbfbbe2b1da5341920ca3df3ceb6a6cff8e6fcf7745bd9e6f7f9172419db333ac602d4a90a2caa12f78535310b35d30c86ade54a4e6bc8f8dfac3be311919c678680df5b165224c409eae58798de04b292b31d3b427ea41c6799603a99818505e9ce2daed50ab6a7e05540aed25a38624427b95f353ce29918c9767bb00f91b01f51e0ac27254f01798c49f5f761e30520c322cbe651408a5bc2965ab0a5b505ea62c6beaaeab3a7b503b95cf1e6ae0aedc79a87cec2981b374f7732708df47422241a410a104a1ef6dbe7e689fd17e7f795744cad2dfae9508a74c590e2252b6fec2f5952f17ca13cc09e63d256249f75256deda0b1543d795ed7219b8a1a2a3ae04846465a72a24710eada2e3debcffcd6a0144120187e4ded227c498ea769cc6164da7a3719cea10c7d3d81a9351ac53db04338981204eb6dd3b14297909c6985853d04dd3b0e9d4d6f1c39c4ca86dc1483709494c53d70d34447deca9773593b060a2e2821db6a7fef4bdd0dd87fe6e337742b71b23254d2e170771ed10cf754a1c128b5e99ebb1cd328e4cad15de26747d671e7a3fdc83fb2bc808bd0f6ed0ff94e402b09ad4a40009f59a27b834f57c1b78a1b7dd38abb6179e54785fb5f1ef3bd7bf38867c48a18692bebd642cee126ffd184f678aa578a8c882c64b868e52d172d01a0eceb2a2d572428fec89a576c5b5fc37671afa0473a7f36c3b4201a53c0e743853f5f148d688531126d1900d5e2966ff00",
      "a28f1d9b24040000",
    ],
    [
      "ETag",
      "HI7j59xbvPUmrMCOXanDcA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1631152720574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff9d976d6fe2381080ffca29f7f14ace76de91563ada52962eb45b603f9d56c82426989a98734c7b55d5ff7e936c9b9725e4c27ea078c633ea3c33e3b179351e7912197d63c5e37f0e4cbdfc1e33fd902d662c3d089dc2d75e2629332e0ca6690c96db873fe31b7e3f8d37dc5fdd3eec93f9484d9f3f7d028b34dcb01d35faafc69a3311a546ffef5723a13b066e3c0203fdb2cfd6e3bbc570349c816227a34c71f76d32195c4e86c6db45e140c3501e12bd3cdb71cd55aa97b95038ce17b3f1dda8dd4fd05f7203622ece7389591231759e0fdf2f69142996a667fac97449f7fbd2e9f2fe7e321cdcfd4ff29348491efd82e7133fd743e8a7d2e366723f58b4db4754574a743d580cdbed534d77959816e3e970be184cbfb67b2d979be75d97547f7fbb30b67235636ba65812b2acfdf74a6e59a8c7d9c94ae1bf0bd64be541852c2b1e18e71bb192873d5552f640d3233dec5a183bc423c8f16cb01332a49acb044cbfcd2134434b4dc54c3ec3b93230020b95afe18cadf3bf4f993e67a8af868ab342b865ea49f2b490d9f68702fdc5fecd233543b92b76a75494aed83189ed99966f7aa4506a75282dd654a4ac798b3881894b378208ea21d24395804dc7478e13e0c01e060d86bf61d2c7561fdb7f2094a7bdca4d1ab8af68c845057d9835ce871032907023f40d1c69518ddc32b1ed9a36364925dc16d6fa56609b967bcc43eae0ae0de88de0a415dc6a001f29a699a888f210caf0b150c4f1bb8674e2c7d8f4a1781899d8b2cf2ebcebfaa6754c65d5f13d0b07cdf8562bbedd803fd8514dcb2e909aa56ba9a24243c30f95d5851f07961940e723f8b8cd8ca7051b32878ea1ec3abd8f7dab99de6ea5774a876235e1aa84bf959b24d530433e1462fbaeb1bba0679def66119a41d0a5d6f52d9f64eec74c4e1d3e40b6d70cefb4c2bb0df0d72ce185300fa9e0652ea234979d4e358721872d0ce71e86ddf93d4f3c6819ff18c8fd893cc027869ddb4aee35907f66222e59bf085699f19bc74c74bb80fbd98cf74da077fc66b6965e479e59296e01e3d5a831f2bc1393ce6ba5f61ba8474ce9ca84bf3aacb8d6e59c0b73d9eb54716856e23850f5ec9c9f28724bc97db81eec0678bf0e0f97fc89",
      "39e7b7c2070df09383128c9567fb12de034c94735fac7e28fc4e533eeb76b8a32105b6d58cd8960b17d257b91c0aaaa08e4f1c7462d005adf8b89ca16570d752e9cd4b218e6b832ee299187441b7b39ec7a66bc3b4b2bad4babe4502643ac7375c25e41cddb2dce63187d1cfe8dfdfdf7a972f704f7d5512de8d298bf234406df217e495cca8e03dd3cf22bb30420abfbd3e736df4f3e0defe0363789ce3d90d0000",
    ],
    [
      "ETag",
      "jQ/gFiOMghi8bJQpnSGrMw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb642d0c58b0a43b0309df22d02ae8868910caafc8b7829ddebd4eaf51df1dde37a049c286211e2f156bc00b58e81af2096fb70ad2ae25bc19b81a48e1db024dc40da1facc150a5b8212638fdd8ed9bb3009e1c15d4cd3b45ca2a6db264b91552a681c9f19e2d67b1fa9e158934e924349ffda4b8e60f461d69d0a32e2f34422421ca37287c6a9a1ef380d91f199dbceaf5037326fd17a27f0a64926542479f891fa275356ea1c676f1a1423dddad53b91cee50073751333da79aeaa0a8b7ab4db54e1e6eeb38bb5ab2728d1c135f2c4c64170e11f1efe2fb0026c6e8b9e0d7171dffe2443b8027ff5e37169d9fd3f62b4673df8f9051ac3ed8719040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:44 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "8553db6edb300cfd15437b6daece1d08562f755b6389b3394e8b61180c49a13db58e955a7286a0c8bf8f929ba04581f6c992780e0f79483f9347516cc88430913d55501ebe3c48462e08689ae16b56f17de11dd6ddc730f83ef8c61fda77eb1b6f3a4584302c45b7bb1c1a4a5625073559af9a5929ab1d2da56c60a286dbe80cdc4ea7df1d76dbfd610f690af2742e8a4724ffd57aa726add649ba994999e540774235b9dc9edf5bfb6e6b57ca07e05ab5de2ab65044b53ed4fc9a4b4eb590c574bd42fd4a4199c0968adcb477266ed8e5dbcc4d41b7cd0cc17bc181722eab429baa300597452ab2aab459c9e499d82a5f1dc8ca9ffbb3d8e132afb64552d02d5c381baa69a20f3b70aea3e5c209c2eb65b4f0e2601926abd9adbff09ab3e57cbd0857cefdad1ff98ea62c07cb75a6cea5bd857841fd0d282d0aab1e9b67a3fce24ff07e288680d20aea60326c0f6867d41eb3940d793a72fb2c6d03632336ec5397b5f9b807bd0d038a3c2b6a59b49005eda463de69d304688726bde1d84d187307c980b99806ad4e078c1c2fc8bf5268b8126a2795a81d22f75110fb491cadc39917fbb6859456b9beaa0b330dbcae51638308faa0a7a3890a894ac6ee208cfdc89bc5c19d5f4f780e19e587d513ce38a5b90244d312cdd3502ee4060d23a1b7f0af106c27f6e3145464f2fb9918cf4d15af2c3fd3631ca02957db2f59c55110ded8724e883b9a5716b2af0fa68d54e4a6e8e31f04e28ad649c8cfb51ffd22f55304299450f0cf8789601bf8ec473bad3d4271f1514569bce3e67065347809f50609dbec99dd1b8e46c4824bfd2e361a8f4f9e991c26236ca1d02f0dd56b8f7dd662953a833088c30fad57c7ff990ee6fe74040000",
    ],
    [
      "ETag",
      "gucvnAyU2kNIK6Bcj0VUGA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:44 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1631152720574"
  )
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
      "6b",
      "db3010c6bf8bf6720ec4f9bb19fa22d9d22ee026ade3d2c1284691ce9e5259d2243925847cf79ddc2e1debc07d63df9d7e87ef1e3d3e9247a13849c85654bf1ab0870f15f8db1064e01ae91dbe8c560e4844c0d30ac9abd1e5c7ddf7c5209bd687b934dbf5ede3fde7eae20209c77e424d497224a500c91d497e1c89a235601bd3b2a955d16611f107138a9b3c5baeae30af350ff9ea2e4d67f374414ed1b991534f8b967f47dbc329223bbdcda0040b8a4198c558bd03e697614d476b23a1e774631938d2c2ed41657563a8d5ba8795deb0174f86713c1e4c07fdf174849cd48c7aa115a2771b1c8f78eda9ccf4132e49e22112b68d71e1b27deeb12e78bb480897ab7c326ae7fb1ba08ce946f9a2132c8575fe59bc3fe08b08ff9292be13c49b12b20baa4071b05d943005e5dc82739da4760535e68ccdd7ebf4ad2a8a5b2d7837b8171d80f4fb337099ae67ff9316fdf5aad5d759be7843388fae3923f9f27ab1c967d737817b7831c2fce0c1dd588da67210fc14f7479fc6d349ffd9625f74b01d7e27f1b68188308a7fca37e1495252e9e0f41b56df25c987030000",
    ],
    [
      "ETag",
      "G4F+jXE2R7myBlpbOQkW9g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-4-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "d3",
      "30",
      "10",
      "fe",
      "2b",
      "91",
      "f9",
      "02686d9cb7a6ab3441e93288e81b89c7345ed43ac92578a471899d8d69da7fe792ac6308093ed9f23dcf3dcf9defeec877516564421251fc68a0be7d762513724440f3025faf4d3f73463fd7ea02d4faea5298c06ede17272788102d4bf1ddbe8481924d9d829a9cc7c3a296cd9ed7520e30d1c01d5823c7b23cdbb7a9e7bb485350e673517d47f237adf76a629a07e96121655102df0b354ce5eef1ddbcb6cd7d2daf20d5cafc53d1441165fe53f3552953ae85ac4ece63d46f14d41bd87151a283dfc42c79fd67e6a1e0bb6181e06b91024f53d954ba7585295259e5a268ea2e2b99dc91cee5930b8983793063c6cb23239e9e059bd93466cfb74aa3c0d6e0ca8859142edfbe68afdbcde6dbcd6e6b9c45ab85b1c52a735182da1a17ef8228300e9c2f0da50e9c18af8c55741a44c69bcbc7d0349e1d195b917537631e2e426658941aabb3b338600645bf19282daace2de34909add3877e867f7f624be09a2be8831b9f8eb835a6c7499ef8693e76bc24a79024e3c4f7b893d0f4d805374b80234fb7d93b16af64658db2cc71d2639f5b607bde28f71d779cf091670178b693f03c71479e6b93fb2372530b0da742eda5127d57c94514b260c3a2f3e56cca82ae8c9c37a53eedcdb5453cf5a9b14804fda3aefb362a242ab55f142e59104d672cfc18f453318782a7b7f10f9c8b9c970a10cd6bbe030df54266d834b25ec5210b57cbe91c19dd57af0f0845269fef7e13d8edbeebb2ee4ec2c24510b3e962dd7938803ef2b2e950d7fd85d8d4a6036a0fa8cf2c7b",
      "623913cb1d524a3f91fbfbaf48c4d9eef3920fe7417449faa70872a8a14affffab08ee02ffdbd0c3be201437065570d2b4c0114a55ab91d6d08f92d8b55e1ed923cbf54907aef55f317bec1f7ad6e66833c20e2afd5050bf2f58672fd6a8471006710296b82e18fd051d15a05bad040000",
    ],
    [
      "ETag",
      "v/7d36xPsWesPjYi/eTwKg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1631152720574"
  )
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
      "0002ff9d955d6fda301486ffcae45d16323b1fe443aa3468d3968dd296d2aba942263904b72666b6d38e55fdef73b229c09a31e80df83d3eaf38cf39b679418f2c4f5184a62cfb5e805c7dcc40df948b11a8826b65be962257805a0834cd4ce6f0e8e6fae11391bd9f45388ba7e1e397bea76f8e8f4d864ae6b0a0287a4133063c5528faf68272ba006363a949d0ab65b9ee0fc7f1793c32818548cbc0f06e30e8f606317a6dd5069a24a2c8f5e460e38c49a52795a88db7e3517f78bedbc7e9bb6c8698f1c32c19e429c8c33c6c39a1692a41a9037d424de872b936f5aeae067177f89fe6e7a9142c7d87f3891deae0fa69ed381b5c75c7bbf353aa374674da1dc7bbf395a68b8d9ac6fdcbf876dcbdbcdeed9a4ce6cf8b7d5a7dffda420f623a821948c813288fff528a074874bfbc59cafc3a87b612854ca01c9e49ae3632298a259542b44da4edb649c721c4b37d1b7bbe6bf2b848a8662237a977b7a634a485a67c249ecdbd426582ac96e68acdaacf2713f62b847265d7ab0be019add5570e4cd56afe58cace67f8515569256251ef9d9993cda1968167d96e600516f1823aa865017b0817fb16f6d6b5611bb7b1ddc6eb7289e50504fbbe17ba71d890f881d8117122e21e615cf57c933a68a03e07a9d9ba829362cab4ae659654dadf079cd88e657b9e451c6c3a508767942bf887da820f5c62b90df0c136bc197fd80c1fec840f1be00785e40079ad7be6a800e7b5e6d3df81601f7edb2166e6a1655ae03acd88bb7ad131ed73dcb754e136beed61a7193fdc894f70ed5817772aa49eaf6ad9575aac9b91b25286fba0bbe5992756c7b5cc74f699f5f6961d62cb73de106d945ca13b4ec76f4427f86ff4fb3faf406fa5415d4b615e140569d506339bea6d391125957922a3b2b2164aa8f957be601a455571afbf00e16274e2f3070000",
    ],
    [
      "ETag",
      "N+QPj/1rBzu9fEb9kJI5tQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:46 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d3",
      "59",
      "72",
      "82",
      "30",
      "00",
      "00d0bbe45b1ca1b2f5cf544082488320b53f0c8d9145ca92a02c4eef5ea7d7a8ef0eef0e124228e771575f68055ec19848fa9ccc9d4683eb3e1d2e37afabd521f79cacf4b8ad27f2696570715cecc2f27338d85f1b646975e86f4fc9558af66cef87566f5cc3efae3842878951b1194b4616c6ca0daae100a7231a6525431cef4c37a5e902e3b3250542f8e1a2dac4b4c79de92b42fa86942a1058ed79f612118d06228a4a1edc22fd4c7631cc0cb55862ed66555a64b283d9aa43b39729bbae316dcb490b93a66a31770b23174f0eeca622dbaeb9fbaecc9f9efe2f300374687246799c3fb6bfc8ba3e037ff5e36e6ce8e33fa409a30cfcfc028a0a628019040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:47 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff85536b4fdb3014fd2b91f795b6e92334ad548daa8451a94d214d41d33445b673130c69dcc50e0ca1fef75d3bb40321c1a7d8bee7dc73ee232fe4419429191326f23f3554cfdfee2523270434cdf1f56f1c5376d365fe53f570a5fa775916cfdcebc90411c2b014ddee0a682959571cd478b36ee795ac77b492b285895a5eab7bdaef76bddeb0e77ac301d21414d942940f48bed37aa7c69dce41ba9d4b9917407742b5b9dc1edf3b8fbdceae92f7c0b5eabc57eca088ea7caaf9bd909c6a21cbc9668dfab5822a812d15053af84f4cd9d9fbcc6d41b7ed1cc18f8203e55cd6a536ae3005976526f2bab259c9f88558976f0e641d2c8259ec7059d4db3229e9164e9c946a9ae8e71d3817d16ae9ccc38b55b49cc6f35598ac6797c172da9ead169b65b8766e2f83287034650558ae3371ceec2dc40beaa7a0b428ad7a6c9e8df26b7fe61f87620828ada0092643f794767d77c43236e499dff758e602633e1b7ab4cf5c3e1ac02065409167452d8b96b2f4fdd473e1d44b7a2e8764906534a1239f2703a0a9eff598eff507647f429e2aa1e15ca89d54a2e910b98de67190c4d1269c4de3c09690d1bad0e78d3153c05b8f1a0b44d02735ed4d54485432ed9e8771104d67f1fc266826bc809cf2e7f51f9c71460b0588a615364f43b59429368c84d365708e603bb1ab435091f1af17627a6e5cbc69f9911ee3008d5d6dbf641d47f3f087b57340dcd0a2b690c7e660cac844614cef7f231057b44942ae3741f493344f11645041c9bf1e26826de0ab1fedb0f608c5c54715a5f18e9bc395d1e015341b246cb147f6b0d71f110baef48798d7ef1d7a6672988cb08552bf16d4ac3dd6d988d5ea08c2200e3fb4bddaff039459ca1774040000",
    ],
    [
      "ETag",
      "xTTabV1b8wrkPs3hffTC0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:47 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1631152720574"
  )
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
      "9b",
      "3010c6bf8bf79648a1f9b722f505e9b28d8d245d425f4c53855cfb606e0d476c932a8af2dd77a65d36ad93e81bb83bff4edc3d7e38b247554b16b17b55ee5a30877725b86f3ed8806db5b3f46ab0b6c002068e9744ce46f2f1faa02e8b64b85b027cbf745f775fe2ab2b22acf8091567d191150ab4b42cfa716435af80da04eab6aaf32e0b983b34beb8cd36c9ea13e5154a9faf6ed3349ea70b760ace8d923b9e77fc1bdaee4e017bc0fb0d1460a016e067690c3e8070895fd3f2aad130b0d81a0196757077501a6c1b6e100754194c06e1741486938bd9c570321b13a75170a7b026f4764be331878eeb0d3ed1922c1c1161ba98162ebae79eea4a768bf8305965d37137dfdf001702dbdae5bd60a18c75cfe2fd065f44f897d4fc8d20dd94d27d5009b504d347a926e7521ab0b697449bf3a63963f3f53a7dad4a2d0d2ad90fee550fa0ddfe0c7c4cd7f1ffa4257ffdd1ea439c2d5e11d6916bce48962c17db2c5ede78eeeec508f383037b63904c65c1fb291c8edf4f66d3e1b3c5aed1db8ebe1339d342c004a73fe5b3722c2ab8b670fa058f8d8a1687030000",
    ],
    [
      "ETag",
      "73dkCyi9fI0qMeeY9tKqJA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-6-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ff85536b6f9b3014fd2bc8fbb24d7918480289147534251b531e1d9056dd43890143bd004eb169d555f9efbb4093b6aad47eb2e57bce3de75edffb80b62c8fd008052cb9296971ffe12f0f500b51491278dd6e07d169e0cebe5bced0c22e0ffe15699c8cc78060154b906c97d2b6e0651152315a799da4e0e58e149cb721517bd05607baaaf63543c37da3073441d378c6f22d90afa5dc8951b77b90ee249c2729253b263a21cf8eefdd5badbb2bf85f1a4ad17da9d80511d17d53f324e521918ce7e39507faa5a0c59a6684a5e0e08918055f5e66ee3092751200dfb2909230e4652e2b579022e479cc92b2a8b3a2d103aa5d3ebb20cf9ed9135ff9dc523c6b6aaf2796e77fdc0809021b8508c5f35d67f1f55375ddacd7d777d94699bacbb9b2812a639652b1512ebfd9aead1c38bf4b8c753a564e94a57b66bbcae9d53164799396b261517d5366cedcf115156365399d7ab6af60f01b5121595ebbf54990d2cae9633f9dd79f581188248236c1b581074435f1308803238c4dbd1fc498068119187da207381cf6682f0a28019eacb2d72c92438f6273606a660fab9a19c6588f87611c612d22d418f40db337a0c4304c3d40fb16ba2b98a4674cecb8604d57d1a5ebf8f6da77578b89e5db751931295379d698ab8a78ee534291007aa3ae7d15651c94aa2f7216beed5a13dfb9b09ba998d18484f7de0dcc454c5241014d0a9251498b398fa069e87ce939beb35c583360d45f7d7e400834faf5f044f0ef777597657d22df99db9e6fcdcf6b0f07d00549cb1a75db5c908635dcc65a5b557d551ba9fa48ed7530c63fd17eff078830db4d5ef46365bb57a87972694c0b9a87efff2a80ebc07b1b7ad81780c2c6800a4c9a643042a1a834c28236a3c4b2cacb916d021fd5e042be8ae9ba76e85995a3ca48339acbc7829a7d813a1bb1521c4110840958c0ba40f43f409d3604ad040000",
    ],
    [
      "ETag",
      "kk6dBbRLJAI9A0Robzrlfg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1631152720574"
  )
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
      "df4fc23010c7ff97fa0a911f0ac9121f864e1d9980633c19b394f698d56e37db0e4308ffbb3734ca133a9e7abd7e3f77d76b6fcbde542199c7962a7bafc06cce32708fb51183adb4b3b4945858602d068e67a41c7331ecf57ddf3f2f4d3e5e84b3f17a39c8aeae4861c50be49c795bb652a0a565ded396153c07c2942481db94b51d4e92e02e88c991a3ac1d934514f9a32860bbd60fc085c0aa70696370a58c75e97ef303ce93389cdc1de7343f09a31b2bdd0cc9a090609a31aa4cb99406ac6dc8a14d7959fe42a3e9340afcc91fcd2fa441254f20d7aa29a1ddfa97b88da67e725c2fb93b78a21b3f098eebade3f9414d49f810cc13ff61769c4ad3978ffc3fad7edeb5d82b2e635881814240fdfd4b83af205c584f96a5ec1ada162b23a07e3c12ef0f328355c90d629b3ced41bb3be877bb97bd61af7339bc209d46c19dc282a48b3995c61c3aae63fca0b9621df6bd1f6d1cd899418a6da10edbed5cf4bfb25c639d999ae53953418b094ef379af1cf3565c5bd87d02d27f9bb0fd030000",
    ],
    [
      "ETag",
      "Jac723AAA/prmJUIPJvb6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd34b7282300000d0bb642d0e103fd09d442255270a227e364c8c6102a10201a969a777afd36bd47787f70d2863bc6dd3ae92fc06de80a6b63b64c355ed78f3cf3c592f13b8d39d97578a41ff9e1506d9e019ab16d6633b0ddb9d819da9ec47b3c3baeaa232d4f1e490df5cab22c17b66287157e1b20c5062d2b8a6bee8179014cc09b2581a850a5024ae7126b94d52bf2b8ea6e1ea5c9df0bcb1cb0c617395541b261b891b55ce0471be1617fc311102e9c954404aa29d388fc8e9e863a67b7c468e358e54efed47f3005ed585d8d2a41d6cc5726fa02d0ac758debde1cbcbff0506803fea5cf136cd9fdbe1d87507e0af7edae99a3fff7b9c2aaec0cf2fcee517b519040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:48 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-7-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f7953ed2a4a4ad548daa04a8d6a65b9a82b6698a1ce72633a471881d1042fdefbb76680742824fb17dcfb9e7dc479ec91d2f53322109cfef1ba89fbedc8a849c105034c7d759c3befdea5737f7cd38bfbce2522a1e39f9748a08ae5992eeaa023a5234350339d96eba792d9a8ad642743051c7ebd8a78e6d0f07dea03ff45ca44928b2252fef90fc57a94a4e7abd83743717222f80565c7699d81ddf7b0f835e558b5b604af6de2af65044f63ed4fc5a08461517e574bb41fd46421dc38ef2021dfc27a6c9d9dbcc5d4e77dd1cc10f9c01654c34a5d2ae30051365c6f3a63659c9e4991897af0e64e32ffd7964315134bb322ee90e4eac942a1aaba70aac8b70bdb216c1c53a5ccda2c53a8837f32b7f35ebced7cbed2ad85837577ee85b8a260518ae35b5cecc2dc00beaa78063288d7aa49fb5f24b7f16ef87a209282da10dc65eff94daa3fe38c9128f65236798647d489251e20da993f4d9d805374d8022cf881a162d45394eddd40196c4e9d07163d77307f138f1b2d876878cdae97094d90ed99f90c79a2b38e7b21292b71d2237e122f2e328dc06f359e49b1232da14eabc35a60b78ed51618108faa0a6bd8e72814abadd8b20f2c3d93c5a5cfbed84979053f6b4b9c71967b49080685a63f314d42b9162c348305bf9e7083613fb7e084a32f9fd4c74cfb58b572d3fd2231ca0b6abcc976ca270115c1a3b07c4352d1a0379680fba8c8c17daf4fe0f027145db24e4c7d60f7f92f629840c6a28d9e7c344b0097cf6a31dd61ea1b8f8a82215de717398d41aac867683b829f6c81e8ddc1131e05abd8b8d1dfbd0339d4367841d94eaa5a076edb1ce56ac9147100671f881e9d5fe1fb2ddd38674040000",
    ],
    [
      "ETag",
      "AucKZ0pWqu9gGHisstiT3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:48 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1631152720574"
  )
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
      "db",
      "6e",
      "db",
      "30",
      "0c",
      "86",
      "df",
      "45bb7580b8396d067a916c5917d4392c712e86a1305489f6d4c9a227c919d220ef3ecaedb2611de0ded824f511267ffd3eb1efca4896b07b55fe68c01edf94e03f87600baed1ded1ab46e380450c3c2f897cbcb169761cdd4adcacf7c597e2f61d5f0ecaeb6b229cf8061567c989150ab4742cf97a628657406d02755399bccd22e68f7528eeb2ed627543798532e4ab7d9a4e67e99c9da34ba3e49ee72dff8ab6bb73c41ef07e0b05583002c22cb5c507107e11d674bcaa35f41c365680632ddc1e94169b9a5bc41e557a935e3c1ec4f1e86a72d51f4d86c46914dc2b3484ee77341ef3e8b9dee24f5a92c503226c1bd3c245fb3c505dc97691102e56d978d8cef737c085c0c6f8bc132c9475fe49bcdfe0b308ff929abf12a49b52ba0b2ac148b05d94aa732ea505e73a497439afeb0b365bafd397aa186951c96ef0a03a00ed0f17e063ba9efe4f5af2d71fad3e4cb3f90bc27972cd05c916cbf92e9b2e3781bb7b36c2ece8c16d2c92a91c043fc5fde1dbd164dc7fb2d87b0cb6a3ef24de361031c1e94ff9a43c4b0aae1d9c7f0171e07e6387030000",
    ],
    [
      "ETag",
      "zGrLTy5KdoPOUfYfK9aM3g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff8553db6eda4010fd15cb7d692b2e36d84090a29682a9dc12686dd32879c1bbcbd8d9d4f63ade75108af2ef9d3590268a94bcad66ce9973e6b20fe65f5e6ccdb149797a5743b5ff702ba8d932419114a3fb6be5fea09737e9ddecf67a349f58ceaeff73777e8e08ae5992e465066d29ea8a811cafc34e5a89ba2495106d2cd41eb5ed41dfb6dddeb067b943076912b264c18bbf48be51aa94e36ef724dd498548332025971d26f2a778f7bed72d2b710b4cc9ee4bc52e8ac8ee9b9a5f32c188e2a2385f87a85f4ba83690139ea183ffc42dfdfab2728793bc9322f89e33208c89ba50da159660a248785a574d5573fc60362e9f3dccd05b78d3c8f8dc32c2c9dcdb4c2761f431960a05628348238c027ff9fd937ec69bcdcd2e8f8d79b0ba3062ec32e119c8d85805332f30be5d1927da249cb68c986f9b97b1f02ffcc8708cd57c1e7a9161a1ab2d48c58bc653446806dacf716afeeb5569025144c221b9195a03628fac339ad0214b467d972616503aa24397f4a9c5ce1c70b61408f294aedeb048210a9c718f8e9c84c0c025bda1d5a7f62001666fdd1138c4b698337013ebcc311f5be6aee20a665c9642f2c3eccccbc08fbc4d14ac97d349e4356d24a4ced4ec604e37f1dca7c22611f4465f8f3acb052ae945f8cbc80b26d3c8ffe31d76bf8094b07d7887db4f482601d1a4223928a82ec4168766fe5a857ee4af969385ae850715ed4b1dffbdf682ab632880042a28d8fb4346709378ef5b9c8e14a178a6a8826b571c37caa4d660151c36cb73ede5c4ee5b3d776836e04abdcaf5073af7749cba22e450a863438723351f8f62b57c02611217b2c41bc5ec3f6d3ae08c22040000",
    ],
    [
      "ETag",
      "yZt5JbWhgqDjZ8FA04w3Kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1631152720574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff9d955d4fdb301486ffcae45dd27af147daa612d20a0bac5329b48449d3842a93b8c190c49ded9421c47f9f13204d4796512ed2f81cbfaf7a1efbd87900b7228bc0105c89f857ced5fdc7989b593198739d2746dbd74a669a830ee086c556b9cc3fedfd88e8ec10cfdc584e83ef384362b6bf6f153abce62903c307b0143c893418fe7c00194bb9b589c80accfdaa188fa7817feccf6d22955191985e4c26a383890f1e3b958185a1cc33b3d8d9b8144a9b451954c6f3603e9e1eb7fb12f62e9b2516c96e9698671157bb79c46ac1a24871ad77f449bd60abd5c674707a3af147d3ff2c7e162929a27738d762574762d61bc7d1e47414b4eb23666a5bf46514f8ed7a6d585aab29189ff8e7c1e8e4acddb5585cdfa56f59eacbc70eb8915773bee48a67212fda7fa5e40d0fcdb83859dafe7bc2bb5ae62ae4c5e6597139112b99af9892b26b33dd4117f508422eee63c7ed53ab4b64c88c9099955e9cdbd280918625737967cf152804aa1cda23b62c7fd7368d4a84ed91af04af826f5cada5d055cc6f9e12ce67febb2c148632ad664f58b2b1221762da876400fbb84a1a956f144b9668de3c855d0fa28d0d3bd8e93ab8ebd40a86eec0715d0f79d4f71a841f101e22324474cf71ca55af73e306ee43168aa486ee177df31284dc46a811fac89ee8a45e398188f6204510d7ca6d61dd9ef22824bdd73c781bbc472d7a23386e05270de0c78a1b9ed442998732bcad1271fc9cc16fe247080eece62107224277def85e6f00c96b2ab28ddf27c86bc627adf8b4017f9432c3365d200dd74ba9a22ac3c29714790b3ff208f46ce73bf6e93533fe3ba076e59cd750749b7e8006a4999efe4d7ff97c0d1cdc5b863325ed95a279719b208792a7cbe5501648b6d78745291d1032fb59fe2a0c1896dbf4f807e9f1257af4070000",
    ],
    [
      "ETag",
      "fu/+Yd4QC2Q5goNTV2n1iQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:50 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "ad8ee020a43b12fc80123fb4826e18a52182a101820de0f4ee757a8dfaeef01ee09c2454cab81137fa05de4077d6e12819ad4a0b398a8db58e38976c59c91509e13a0986e91eba1c0bf7eea4dec9cdb40a73f37a672abc98475ee2523669e148c2f68cdaa93db5e1e263a78e7873aa59972e79b1890d7edfdab9a8a69f5df4ee1f27e264dc9cfc8276310e0e1ca110eabbb96afd168e13459169e2b66c7a8ef4c623ac90a437dad9dc2022af74afb3b6d6c6eb35426675611ea288aafc1abac2d122cb5fe0e09afbc385b586df94895e283a1cbdbcfc5f6000685b66359571f6dc3e31201c80bffa71d395f4f91fd1734d6bf0f30bf85b78c819040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:50 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-9-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "6d",
      "4f",
      "db",
      "30",
      "10fe2b91f795364d9bd217a91a5d1b46a5361d690a1bd31439ce251892b8c40e13a0fef79d1dca4048f025b1ef9ee79e7b4b9ec82d2f13322631cfee6aa81ebedc88981c115034436bd07bbcda9e3df6be65d3bb9fc5f5fcb11bdc5c9d4f2688e09a2569b1cba125455d3190e3eda69d55a2ded14a8816066a8d5ace71cf71fadd41b7d31fb8489390a74b5ede22f95aa99d1cdbf641ba9d0991e540775cb699285eecf67dd7de55e2069892f65b451b45a4fda1e6d75c30aab82827db0dead712aa080aca73cce03f31894fde466e735ab43304df7306943151974a6785219828539ed595894ac64fc464f9ea4036ded29b851613795d9451490b38b212aa68a41e76609d06eb95b5f04fd7c16a1a2ed67eb4999d79ab697bb65e6e57fec6ba3cf302cf5234cec170ad8975626e3e5e503f01a97869d4436dd6cacffd59bc1f8a26a0b484c6190d3ac7d4197646711a0f583aecf5e3b403713c8c077dda8b3b6ce4829bc4409167440d8b96a274dcd1a83f48e328a1b11bb9c30e44c3ae934448a6687652b7cbc8fe88fcadb88239973b2179d32172192c422f0a83ad3f9b869e2921a575aee64d62ba80d7392a2c10411fd4b4d75e2e5049b77be1875e309d858b0baf99f01232ca1e367738e394e612104d2b6c9e826a25126c18f1a72b6f8e6033b11f07a724e3df4f44f75c67f1aae52ff41007a8d355e64d3661b0f0bf9b740e880b9ad70672df1c741929cf75d2fb3f08c4156d8290f3ad17fc228d2980142a28d9e7c344b0717cf6a11dd61ea1b8f8a82215de717398d41aac826683b829f6c0c6a7e31003aed43b5fd7710f3dd331744428a054cf05356b8f753662b57c01e95fc9d6f74daff6ff0094d7066c74040000",
    ],
    [
      "ETag",
      "R3zZUHz3BgAqXmhDz2RjZQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1631152720574"
  )
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
      "6d",
      "4fdb3010c7bf8bf736951ae8c3168917ed5658b4d096364cb00945c6bea4668e2ff3435157f5bbcf0eac4c63527893dc9d7fa7dcfdfdcf9efc108a9384dc8beaa703bd7b5781bd0ac10a8c93d6f85783ca008908585a05d2b9e5b7cdf94d7e7bb11dc45f7e7d4dd5e6e6f1eccc13866da0a624d9935280e48624dff744d11a7c1b43e96a55b45944ecae09c575be4ae7173eaf91877c7e9d659369362387e8d8c8a9a545cbbfa1edee109107bc5f41091a1483304ba3f101984dc39a86d68d849e41a71918d2c2ed41a5d1355423f67ca5f7a1178f4ee37878323ee90fc703cf4964d40a541ebd5efbf188454be50a1ffd92243ef5846e63bf70d93eb7be2e78bb4808d3793e1ab4f3fd0d50c6d0295b7482a5d0c63e89f7077c16e15f52d23782fea684ec822a501c7417259a8272aec1984e124d419be6884d178becb52a8a6b14bc1bdc8a0e40daed1138cf1693ff49ebfdf5a2d5a7493e7b4518eb5d7344f2f472b6ce2797cbc0dd3d1b61bab360961abda90c043fc5fdc1fbe178d47fb2d8470cb6f3df49ac76101146fd9ff259589294541a38fc0673f2a07f87030000",
    ],
    [
      "ETag",
      "buuPZhFXTYGv41KzVInhXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:51 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
          "SELECT *, SAFE_CAST(`stamp` as STRING) as `__hwm` FROM `records` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-10-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ff8553db6ee23010fd95c8fbb2bb2ae05c200109755308db48dc9a8456dd8bc0310e7537c434765aa18a7fdf49527ad995da275b9e73e69c19cf3ca23f3c5ba31e8af9e6ae60f9fed3ad88d109628a6ce095eb6e7a36df7b7c78316e15c13976673b71d1ef0382972c49b6bb9435a42872ca646f113637b928762417a201891a3a6ee81d53d7db866de0b66d014fb23419f3ec0fb06f94dac95eab75d46e6e84d8a48cecb86c52b17d7e6fdd1bad5d2e6e1955b2f556b2052ab2f5bee8692a28515c64fd4508060ac9f225db129e828517e63afef6367593936d7303e07b4e19a15414992a6d410a2ab2846f8abcca8a7a8fa8b2f9ea82426fec0d22edeb8916ba236f3970c3e8f34a2a105869446a6114f8d3ef5fcaeb6ab9bc79d8aeb451309b682b2833e129932bedeadc0b3cedc8f955606cb2be76aacd82a1176867d7cf21371c9c682bbeae6edad89ff8916669b3d128f4220d83db35938a6795d788c4292b7d3eb5d3ffff134b025144b23ab8b47187e80eeec6496cd3c431db7182591c3bb1dd26668c69d762d63a660478aacc5eb1482632d67698691b1dc3712c47ef18544f2c5ba7eb4e87da86d5756c43b75962127438410f39576cc8e54e485ef7145d057ee42da360311db891579591902255c3da5c59c46b9f0a8a04d03b751dca2817a0547e903f8dbcc01d44fea557cfc4986d08dd877730150949250334c9c99629964fc41a9a86e6b3d08ffcd9d41d03a3fae8f9112151efe7e30b21daefaa2eabea44913ff1c2c89dcc2b0f47d025498b0a755f5f90810ddcc046035b916ef474b3a75b4d8cf10f7438fc06228c769d175d2cbce01ad54f014b58ce32faf1af02b80a7cb8a1c775012c2c0cc8c0a0290e33446529427356cf12df96668e6c53ef9a6d548173f56fccc01de7d8b4324799916d59a69e2aaad7050aadc50af90c82208cc014b605a27f0162057b62ae040000",
    ],
    [
      "ETag",
      "i1AlBPyEiDQL/uRH0AOpoQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1631152720574"
  )
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
      "6f",
      "da3010c7bfcae4bd1c64769e835469a14d5b364a3ba0d3a4a9426e6282a989a96dda5555bffbecac4da0cd18f405e1ee7c7f723ffb7c3c821b5a64a003ae697ebb22e2e1634ed477630c895c3125f5d79217928016200ae73a33bef9e15c7c66ddf8e7693af7b137baec093f3f38d019329d9105069d4730a5846512747e3d82022f8896d14c27a887a5b17b837172920c7560c13313185cf6fb71b79f80a75625c069ca57859aec2d9c5221d5a4742ae1683cec0d4eb6eb187e974c1353b69f24274546c47e1aba9ce02c1344ca3d755c4ef072598bbae7e7fd241efc67f38b4c709abd437947f7553075572b8efbe7f1787b7e86d5da111dc5e3647bbe5478b156d3b877968cc6f1d9c576d56432bb5fecb2d5574f2d30e7d743322582142931edbf147c4e52d533374beab733d2967c2552620e4f27970bb9e0ab25169cb775a48d601bf90e429e1dd8d00b5c9dc8788a15e585cebd1ce9da80e20ab321bfd7170b9804519afa8e4dcbe75d19360cc64295152fb0c29577c81591532eb22a82d39790f385fc2ecbb552bea8d68f758b3352ff70e4589165bb507ffc2aaac48aece0b86164c1cab3a10ddbd06ec3b5b22d2f84210a9dc84da286c40fc8ee20a783dc4f10969bbf4eefd582caea5351c37fe5b3422abda52f01367f8eb8bba07b8e857c53a115d5b54d3193ffa0dd5c0a6d237fcbe46dc247d00d9ae1bdadf07e03fc112968e58c52cc68bd17992c7d6fa73377420b39c8426e6805ee2eb01b4b76a05b267c0be4bf228f106a26f7b792070de4a784e535eb3746a8acbcd98d71fd5dc0434f777968697a2f6c66dbd2eb30b0d60eb7820936a8110c02af993a784d7df53c03ba0ffac25e08ae078a24669620e83a7f47cb2137487a42764c2d2d9062fda77c4a15e894e7f3f407ba",
      "6bd996f2070000",
    ],
    [
      "ETag",
      "AkV3P/lBAXHcj6a5SUIr6g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:52 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb646d1d4d04a13b6cfc22668a30809b0c4290a8c408c4403bbd7b9d5ea3be3bbc6f9066196b1adade2e4c8077d0a7d01e6643575a33ac4fbbb0a68a2faaa024feb9f932c5d4d8982195ea33525025467282f9649acaced7f398dd8b9b68b56953e61437b8668e081e321713645b32f3fa8f2ddeb94d16f921dc54fe9ecf6914ee0f69bb2cd19dbb105d2daf3294491c5cc5ade810d67d88111f15774779a5b644de2471ed6dc98a9ca58df59a1c0fa33038965549d54abf150fb35f58c7325a8e773c20e3b9b19876baedf2138257cc2e2471bbe1cbcbff0506807592d7aca1fcb91d19b63d007ff569db4bf6fc3f6369cd6af0f30bafd2475419040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:52 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-11-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "0002ff85536b4fdb3014fd2b91f795b649dbf42555a32b61546a5396a6b0699a22c7b9c90c691c62a70850fffbae1dca4048f029b6ef39f79cfbc813b9e545422624e6d95d0dd5c3971b119313028a66f82aecdb804119d30bf1281e13faadff737e793f9d22826b96a4bb3287961475c5404eb69b765689baa495102d4cd4729c9633e8398edb1d766d77d8479e843c5df2e216d97f952ae5a4d3396ab73321b21c68c9659b89ddcb7b67dfed9495b801a664e7ad64075564e763d1afb9605471514cb71b34504ba822d8519ea385ffcc243e7d9bbacde9ae9d2178cf1950c6445d286d0b533051a43cab2b93954c9e88b1f9ea4036ded29b87161379bd2ba282eee0c44aa8a2917a28c13a0fd62b6be19faf83d52c5cacfd6833bff056b3f67cbddcaefc8d757de1059ea5689c83e15a53ebd4dc7cbca07e0252f1c2a887fa592b3f3768f17e2c9a80d2129a6034b407d419d9e3388d872c1df5dc38b5218e47f1d0a5bdd866e33ef4931828f28ca861d1421409b803d719c411c48324ea27dd241a8fdd61e48eecc471bad0737a36399c90fb8a2b38e3b21492371d22d7c122f4a230d8faf359e89912525ae7eaac31a60b78ed51618108faa0a6838e72814abadd0b3ff482d93c5c5c79cd84979051f6b0b9c319a7349780685a61f314542b9160c3883f5b7967083613bb3c062599fc7e22bae7dac5ab96bfd0431ca0b6abcc976cc260e17f37768e882b9ad706b26f0eba8c94e7daf4e10f0271479b24e4c7d60b7e91e62980142a28d8e7c344b0097cfaab1df71eb1b8f9282315de717598d422ac826685b8a9f6c8ee7547832e31e04abd8b8dddf1b1693a87ce083b28d47345cdde63a18d582d5f4018c4e9fba659877f200037b777040000",
    ],
    [
      "ETag",
      "o0kRcepbaHozozdaB4XCPw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1631152720574"
  )
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
      "6e",
      "db300c85df45bb7580b88d93cd402f922c5d833a3f4bdcaba2305489f694caa227c9198220ef3eda6dd3621de0ded824f511268f8e8fec4919c962f6a88adf35d8c39702fccf26d880abb577f4aad038600103cf0b22d753a56e16a3eb248ab6d09f7cdb4df9ad2aaeae8870e217949cc547962bd0d2b1f8fec80c2f81da04eaba34599b05cc1faaa6b84d37f3e50fca4b944dbebc4b92f12499b153706e94dcf3ace53fd1f6700ad80e1f3790830523a099a5b2b803e1e7cd9a8e9795869ec3da0a70ac85db83c2625d718bd8a34a2f0c7be1f0320ca38bd1453f1a0d08d428b8576888bddbd27ccca3e77a837f684b165e1261db9836cedbe79eea4ab69b34e17c990e07ed80ef012e04d6c6679d60aeacf3cfeabd822f2afc4b6afe4990ae4ae92ea80023c17651aacab894169ceb24d165bcaaced864b54a3eaa62a44525bbc1bdea00b4df9f81eb6435fe9fb464b037adbe8fd3d907c279b2cd1949e78bd9361d2fd60df7f06284c9c1835b5b245739680c15f6075fa3d1b0ffecb12936bea3efc4ded61030c1e957b9519ec539d70e4e7f0189accc2988030000",
    ],
    [
      "ETag",
      "PCiiHM7FL55Se0B9jCaKig==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-12-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff8553696fa33010fd2bc8fb657795842b842452d4cd26648b94a305d2aa7b28b1c150b780536c7aa8ca7fdf019a1eaad47eb2e5796fde9bf1cc23ba6679848688b0e4a6a4c5c3972b4e500b51891378bd8f2e2ef58cad57a7d3ddd5f17969a9fdf57d321a0182552c81b35d4adb82974548c570ed779282973b5c70de86446ddd68eb3d53d72dc33634cbee024fd0349eb3fc1ad89752eec450550fda9d84f324a578c74427e4d9f3bb7a6ba8bb825fd1500af5ada40a2a42fd58f428e521968ce7a3b50f064a418b0dcd304bc1c20b33223fdea6ee309c751200dfb290e230e4652e2b5b9022e479cc92b2a8b3a2e123aa6dbeba20df993b9340f9de52fcf1ccd94cc67ef0752b24086c152c143ff0dce5af6fd575bbd95cde655b65e6ad16ca16ca8c594ac556393f763c473970fe969a66d29172a4acbca9e3293f2f9e43637fd252b62caa6fcadc5db881d25556b399ef048a066e232a24cb6baf012629ad7c3eb5d37dff8915014b2c6813dcd85a0feb7d6d4062628771dfb448ac5142fac4b6b049b470d0a5dd88500c3c5965af5938e7f940273a2176df0cbbdddec00a2312c7b1114576a4e991dd37482fc6a6392068df4277059374cac48e0bd6f4149d7b6ee06c026fbd9c8c03a72e23c6652aa78db9aa88d73e251409a00feada5751c641a9fa20771938de7812b8674e3313739ae0f0c1bf81a988712a28a07181332a69b1e011340d9dac7c377057cbf11c18f5479f1c10020dff3cbe1082875ddd65599f2870178e1f8c1727b58703e80ca7658dba6d2ec8d00cadad196dcd0e7463a89b43bddbd134ed37daefff011146bbc98b4ed78e77819a278fc6b4a079f8f9af02b80e7cbaa18775012c2c0cc8c0a0490633148a4a242c68334b2cabcc1cd8a6d9b3aa69037021dfc56cab7f685a95a3ca48339acba78a9a7581421bb1523c83200823b0846d81e87f6c098d16ae040000",
    ],
    [
      "ETag",
      "xdYh1miUOQDpjHWu5/8Uxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:53 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1631152720574"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff9d956f6fda3010c6bfcae4bd1c4476fe9004a9d2a0a52d1aa52d5055d35421931ce0d6c4d476e850d5ef3e279b1258b30cfa06fc9cef11f7bbb3cd2b7a62498cda68c616cf29c8ede705e8db6c31029572adccd75a240a500381a60b93b9d4b7def3fda337d83e8db916df5be30ebfef9c9c980c152d614551fb15cd19f058a1f68f5794d015181b8b4d82deaeb3757f38e95df44626b012711618de0d069deea087de1a8581469148133d3dda386752e9692e0ae37832ea0f2fea7d9c7ec86688193fceb2802406799c87ada7348e252875a44fa8295daf4b53f7fa7ad0eb0cffd3fc249682c51f706ed8b10eae37a5e37c70dd99d4e7c754ef8ce8ac33e9d5e72b4d573b354dfa57bdf1a4737553ef9a4e972fab435afdf0d6408f62368239484822c88eff5a8a4788743fbb59cafc3a87a612a98c201b9e49ce371652a46b2a85689a4893d84dd27208f16cdfc69eef9a442e22aa99484ceeddd8d486b4d0948fc48bb958284b90f9d2dcb179feb931613f67c85676b1ba04bea085fac681a9422d9f32d9fa0a3ff332ad48ac8abd7373b4391432f02cdb0dacc0225e5004b54ce100e162dfc25e591bb67113db4d5c964b2c2f20d8f7bdd0ed8515899f88dd264e9bb85f30ce9bbe4b1d54505f80d4acace0349d31ad0bb98872ed1f024e6cc7b23dcf220e361d28c273ca15fc43edc1072eb1dc0af8601fde8c3fac860f6ae1c30af8412a394052e8ae392ac079a1f9ec77203884df76889979689916b84e35625d2f5aa67d8efb9e2adcc7b73dec54e387b5f804178eb2b83321f5725bc8bed2a26c46cc32191e82ee66679e582dd732d33964d6fb5b76882dcf7947b453728eee382dbf129de0bfd11ffebc02ddad06752385795214c4791bcc6cf2c7e5546454e68d6c6795355044cddff225d3a89d17f7f60b2d1d6efbf4070000",
    ],
    [
      "ETag",
      "htQ5qWj5LykSltoY6SAlWA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "d3",
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "e9b333a108d8bd8d8bc32002c220f0424a53106b04da72d165ff3eb3df98e71fce37c08450214ad9317a03efe08e215a93b5d76f4d7b6ecf6cd4a51aee0fb316537d280e902f512192a449b393510d126695426a1155cef192119ba1c5699b40ab27b755a869c0ce642c32bcd37cfc94bacda740d3330b4f634a92e1de5f6bfd6bf002e5ace40e73c963b89e1ece6123f3c5844b9916d6ee23ca1b82d5f1163fe090c95c44935f1a7193583b1a07d714237fab766f7b666d64e57462b11b1f9e03843c6fbee52e8d43dcf262cf3be95fca390bd72f2fff175801baf42da7a26c9fdb550da115f8ab5fca7b4f9fff4d8a39e5e0e7179d8ca61b19040000",
    ],
    [
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:54 GMT",
      "Server",
      "scaffolding on HTTPServer2",
      "Cache-Control",
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
            parameterValue: { value: "records" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-13-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "3014fd2b91f7b54042c253422b83744582b085d06a9aa6c8716ec06d8869ecd0a18affbe6ba774ad2ab59f62fb9e73cfb98f3c917b5ea4644812be79a8a03c7eb91309b920a0e8065fef3aebc9767048a777db63677bfc468bc7bff3f1688408ae5992eef63934a4a84a0672b85e3537a5a8f6b414a281891a8edb70baaee374dabdb6dde979c8939067735edc237babd45e0e5badb3767323c42607bae7b2c9c4eee5bd7568b7f6a5b803a664ebad640b5564eb63d1afb9605471518cd62b3450492863d8519ea385ffcc34b97c9bbac9e9aeb941f08133a08c89aa50da16a660a2c8f8a62a4d56327c22c6e6ab0359f9737f12594ce4d5ae880bba830b2ba58ac6eab807eb2a5c2eac5970b50c17e368b60ce2d5e4da5f8c9b93e57cbd0856d6edb51ffa96a2490e866b8dac4b730bf082fa2948c50ba31ee967adfcdca0d9fbb168024a4ba88371cfee52a76f0f922ce9b1acef7692cc8624e927bd0e75139b0d3cf0d20428f28ca861d1026b1e80ed413a88075ebf1d7b99db8e29801bdbdd8eebb9cc715817c8e9823c965cc194cbbd90bcee10b90d67911f47e13a988c23df9490d12a57d3da982ee0b547850522e8839a4e3aca052ae976cf82c80fc7936876e3d7139ec386b2e3ea01679cd15c02a26989cd53502e448a0d23c178e14f116c26f6e31c9464f8fb89e89e6b17af5afe428f7080daae325fb28ac259f0ddd839236e685e19c8a13ee832329e6bd3a73f08c41dad93909f6b3ffc45eaa7103228a1609f0f13c126f0e9af76de7bc4e2e6a38c5478c7d561528bb012ea15e2a6da33dbf5ba8e4d0cb854ef62bdae776e9acea133c20e0af55c51bdf758682d56c917100671fa8169d6e91f5fe8c8d477040000",
    ],
    [
      "ETag",
      "j5UCh9vdDjhy5hyBanwxLA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:54 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1631152720574"
  )
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
      "00000002ff8d93516fda3010c7bf8bf71a2452205491fa001bdd90526821dd4b5545ae7dc9cc1c5f6a3b4c08f1dd774e3b56ad93d297e4eefc3be5eeef7f8eeca73292a5ec4955cf2dd8c3a70afc5d0836e05aed1dbd1a340e58c4c0f38ac8e7f9c2e4096cdb840bfffd1a0e97ab727777754584133fa0e62c3db25281968ea50f4766780dd42650b7b529ba2c62fed084e236df2c575f29af51867c759f65b379b660a7e8dc28b9e745c77fa0edf114b11d3e6da0040b464098a5b1b803e197614dc7eb46c3c0616b0538d6c1dd4165b16db8451c5065108f0671328ae3c9c5f46238998e09d428b8576888bddfd27ccca3e77a83bf684b168f88b05d4c1b97dd734f7525bb4d42b85ce5c9b81bf02dc085c0d6f8a2172c9575fe45bd3fe0ab0aff929a7f10a4ab52ba0faac048b07d946a0a2ea505e77a4974056f9a33365fafb3f7aa186951c97e70af7a00edf767e03a5bcffe272d19ecaf565f66f9e21de13cd9e68ce4cb9bc5369fdddc06eef1d508f38307776b915ce520182a1e8e2f27d364f8e2b1cf187c47df49bd6d216282d3aff24d7996965c3b38fd06d7593ea788030000",
    ],
    [
      "ETag",
      "qBEnT6eSu6actVFey8NfjQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      jobId: "grouparoo-job-14-1631152720574",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "a5535b6f9b3014fe2b96f7b24db9400221895475594256a434e980b4aab62918638857c00936ada2aaff7d07687a51a5f661bc609df37ddfb9dfe31b9e47788c439eec4b561c3efd15216e61a64802d643ba3ddb3be56cbfd8ce0de3ccbe1819f9cdddc9092078c59224dba5ac2d45595026c76baf9314a2dc9142883608b575a3ad0ffaba6ef6ac9e665a06f0244be305cf6f80bd556a27c7ddee31762711224919d971d9a1227bb2776f7bdd5d21fe32aa64f775c82e4491ddf7839ea68212c5457eb2f6208152b262c332c25348e1991985df5e4b7738c93a09806f3965845251e6aa4a0b24a8c8639e9445ad8ac7f7b84ef3c5037bf6c29efae86b0b7993b9bd994e3cff73201504081091c8f35d67f9e34bf50c369bed5d16a0b9bb3a47019419f394c9005d9dd9ae8d50c0a300fd2e35adcfd0299a2c672f4d144c2b7766bbe8fb353aca4fbc69abc1c00b2d9c73c747baa6a1d57ceed93ed220ff8849c5f33a7b9f8429ab327f6cb0f376ac1581282259e3dc58da80e8436d14c6a145e361df0c638d85e130b44cd20f353a329811858c004f55ea358be422a783c12032faa1698de2d130d28d9e691a8611527300f30a233604313ad4f0430bdf155cb119973b2179d3657ce53abebdf1ddf5723af1edba8c9894a99a35c95545bccc534191007aa7ae87cacb0544aa46e62c7ddb9d4c7de7d26eb664c112420fde1ef62426a964802605c99862c5b988a069f862e539beb35a4e16c0a8477f7144483cfe75ff4cf00fbbbacbaafe57b106461dff08b8246959236e9b0706f743ebbf142c50f80308b889868c7fae6df71a372697c5ac6039fd78f800ae1d1f9ef6f1ce000b9706616023158755a3b20a420bd6ac1ccfaa648eecbe091faec1857ae3b3f4feb1b79546a5c83296abc78a9a3bab5a55bb4af90402276cca12ce0cbcff000bf5bae1e7040000",
    ],
    [
      "ETag",
      "ylhHqIuDqLhF44HEP94nkw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:55 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1631152720574"
  )
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
      "db",
      "72",
      "da",
      "30",
      "10",
      "fd",
      "95",
      "8e",
      "fa",
      "18f058b6b9d83399291493d27249c1993e74328c622f4654588e244328c3bf57761343534a212ff65ece91f7ac76bd453f6812210f3dd0f83103b1791f83fa9a1b6390195352bf529e484015048ac41af933f872f52d51c3c7015b43271e34eda0de5d5f5f6b840ce7b024c8dba219051649e47ddfa2842c41d368a4016a93e6766f18f837fe5807963cca03c3bb7ebfd5eefb68572909240c7996a8e9c5c41915524d0ba7244e82716f78739ac7c89b685a31659751624822109771683a25512440ca0b795c4e499aee49edd1a8efb786ff697e12094ea3373057f4520653ab3da3db1fb582d3f888a8832beab402ff345e2ab23ca829e80dfc49d01adc9e664da7f3f5f29c56dfef2a68c11fc63003014908f9f8a7822f2054bd7cb3a4fe3a83aae4990821bf3c0d2e12b1e0594a04e7551da962a78aeb36c635ab6199b586a3818c8744519e68ecdd44d7861457848df95a2f16b2344014a6deb159f15ce970add0b02a002f569f0a523a9ff93c914a1ffa12608be788f3019e8a5a8d902fcb7457cf3783d2add906ae63a3d6345cb70cce08937b881219fc23d5b472fabe44d332aba65535f755e7479baee9345cc7778f00df61cbc3b6879d2bd32c7a7f28be7e447c07125a3a939030baef45240bbf768e706c370d6c63033b4d43dfce1962ff48590ddb709b7f0baabf52ee627c5c79fdb5f2fbe779686f14c85bc1f57049c8e70a9b8efd7bcc3ef25c95de162fafa58242a27fd09fa8425e51e9ee1727e331affe050000",
    ],
    [
      "ETag",
      "zTK+WntNqMlweDgM83T6Fw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:56 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
