const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212585295";

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
      "02ff1dd0c97282300000d07fc9591d4d0c36bda94104cb360282970c4bea208b08312c9dfe7b9d7ec27b3f204e53de754c3c0a5e834f30c6902cd245b2dc86723979f6f7b932af457f1b783234c83a517231b01b28c765b656a3bb408fd5b873b38bad539347a2cfe1be8a1ca64596818dfda1854cd14221cfac33c7f292788ca34d115766472d384f6bebe3c9eb861e6865486989979d511f63943c22259da8ed55c7814a1bcd539ff7f16aecb6cebab1fc402964a8dd4b0ccbab4d36d9b3c86aa14135a87d22a6be94afe874db63ec076755d747b42182150d7487610ebf8e4e55de5d30037c68f296772c7fbb11266406fe1398181bfe9ed8f1b8e52df8fd036998fd9d23010000",
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
      "Wed, 22 Dec 2021 22:36:26 GMT",
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
        query: 'SELECT "grouparoo" as message',
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1640212585295",
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
      "6f",
      "9a",
      "4018ff57cced6b951701c1c46c9d9285c498a8b86e4d1373773cb06b8143eee8661afff73d80b56d9ab4dfe07e6fcfdb1379106542a68489ecd0407dfc722f19b922a06986aff577e3df3abe716e93c3edc22da25f4ea5f87a36438668558a16550e43259b9a839aeeb6a3ac964d456b29876834b48696e798b665bbbe6b072eca14e4e952940f28fea375a5a686f11c3dcaa4cc72a09550232e8bcbbbf1681b552def816b65bc4d343044191f667ecd25a75ac872b6db627ea3a0de4341458e15bc0813f6edadf348d0629421f95170a09ccba6d46d5568c165998aaca93b57327d225d95af3ec8365c86f37870f712704706540d0a508a66801e09282dcace21a62c87567dee317a3fd856403555d083fb89e951cb370396b2094ffdb1cb521318f3d9c4a56366f2c00127614051a75bf74e454b59fa2e586e128017389e67da81cf7c8a26a69f5893c0f6b9e579639742404e57e46f2d342c84aaa4127da7e46613c5e13edeec56f3eb38ecda486993eb455f5cdbc4eb3a3536b9374d0b891ff4766a512131ad1d5db48ac3cdf53c8e7e86fdb69690517edc1e705f29cd15201db71c1f2b9c1959efc2cd6fd23f6d20851a4afef92c91dc019fddeaf3e520156f075394c67f5c1c576d06afa15fa028da5a2eea89694f4847aef53bcc721dc42e17d33a4201a53e37d45f0e399dc31a75212188735f45ab1f88fe0770a3354cb7030000",
    ],
    [
      "ETag",
      "rB/xQTW4ZdqZD5mIX4pscQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212585295"
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
      "4d",
      "90",
      "41",
      "4f",
      "83",
      "40",
      "10",
      "85",
      "ffcb78850468a995a487b631da8410a5b61a4d0fdb65401018dc5d54d2f4bf3b4b3d78d99d997df3de973dc147d96610c1b12c3e7b54c35581e6d11629eabe369aaf8e5a8de0001a51b0d27b91d7c97e5ac9c9e4399efd4cc57a1ebf2e170b5668f98e8d80e804798975a6217a3b412b1ae4b506b51685f531436707dba77493dc71df5066fb6417c7cb557c0be7c3d9818a8e29e6a8b095680d3b45154ab3b1ac5a345d8daea65e49d4308ac7874251df0945e4f2c4f55d7f36f5023f08e7617013b2ae26294c492d4b775be0144346d4297d3329f82c5063c9d0f9787efdf7b45c87bf95d560503f28e2788d36d9bb50acc992192636aa4707a4e01fb92fcda53fff0292ba70276e010000",
    ],
    [
      "ETag",
      "0Xc7NV4jc33WL6x4aC8LZA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:27 GMT",
      "Server",
      "ESF",
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
          "select count(catalog_name) as __count from INFORMATION_SCHEMA.SCHEMATA",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640212585295",
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
      "02ff8552d16e9b4010fc15ebfad24ab1c1d81863296a2d87b6480e516cdcd64fe83816723170843b923a91ffbd7be0b88922254fc637333bbbb3fb4476bc4cc88cc43cbb6ba0de7fba15313923a06886af232f785c3c6e611edc88adbbfb938eb2ebbfd9f93932b856495a5439f4a5686a0672b6590fb25a3415ad85e863a1bed51f4ec6a635b4eca96db936ca24e4e992973b14df2855c999613c5b0f3221b21c68c5e58089e2f46edc5b46558b5b604a1aaf1d0d3491c6bb9e5f73c1a8e2a23cdfacd1bf91504750509e6307ff8549fced75e501a7c52043f23d674019134da9745758828932e55953b755c9ec89b45dbef8d04362b3bd56f419dd692eb2a8a4057ce951d98ba216e8a5b5287a7ef0fd6a75390ffdab205a2f7e7a97f341f713ced12a01a978d91a8534ce419b1ca3f0dfe6af056826a10323c79cd0e1d474e33476583a1dd9716a421c4f63c7a6a3d864ee18c6490c14754a576f55b41425b326304aac2472ade1241a275316b929b523875943a02e1b318b92c31979a8b9820b2e2b21791706f9bdf2432f0a579b60310fbd76849436b9bae81ad303bcec51e18091690e91f8ce5c078d72816e3a5d3f08bdd57c11fabfbc6ea14bc828dbafef70a529cd25201d0f21dc579817b9de78ab2de99e5690420d25fb384724b7c047e7fc7c5c48c5f34217a9f03f2e8d49edc16ae896c70bddcb49ed4ca62669c9b57a8339ae8ee37454ba221450aae3406b6fe92d4272389a35f2444210730ffce007a2ff003e42a256da030000",
    ],
    [
      "ETag",
      "3ENzCzYeANhoY9kXf3gQxg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640212585295"
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
      "90d14ec2301486dfe578cb221b0c71091762503004758a37869052cec660db99ed993808efeee9f4a63df9fbb5ff979ee190955b886093a55f359ae62a457e75438cb6ced9ca565169113a80ac5221afabe973461fbb532f7c40f5a4363f7cd81f472321acde61a1203a439261beb5107d9ea15405cab5f55a535db250dc542e982dde278f93588282b62e582ce7f3bbf17c0297d5a5037bdac498a0c152a37bb132b447cd33276b5551e5e859aa8d460b2ddc1ea486ea4a19224f122ff0fc41bf1bf841380c83db50b89cb4e28c4a41976f202d4cacf2988ea20abe00a61dc53a69d76f897bce67f58f8e1b46fb62486a2dba46bfdb1f863783ee9fc43d39311661363576402bf99169c610252ab778f905c55678b36f010000",
    ],
    [
      "ETag",
      "/pHOioVhz35FeaJabxtkjw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:28 GMT",
      "Server",
      "ESF",
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
      "8e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb74ad86afb5b3132508453e0e566143f8548282140a0498ccddc7cc11defb01499651cee3be79d137f8027322a14db64985fd7d1496e00cab179654e21a3a1efde0f24a8b6b191de743ceb77a9558b762af5ef727b11d1d561d86b599c234944d612bf944c0c4aa33376a9f8aa9ec507b2945e6ee643eb2c186e7e3f4edf5a25a2b8202b157e9eafbc0afe1bd5db4cede7a7eff5cb0ba767cf880cbf4401eb2dd37926e38c8834a4aefd2a03bcfa65fe4334e9cc628023a59ad338856c79a44a03531c8499b0c6830b4ce53de900987ec165d349fb8fe43e30d58013ab1b2a33c2e3f6e59456805fe13e27e66f433a1d1a4a31df8fd0337e66d3723010000",
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
      "Wed, 22 Dec 2021 22:36:28 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test_001/tables")
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
      "00000002ffb592414bc3301886ff4bbcaa344babb5b0c3040f830e61543c8848967e8b99691393afc228fdef7e9bd41df430063be6cdc3431e48cf3e4c5bb382ad8cfeec206c2f50ae2c942622bb648052d3dd6266dd9736cf952f97eb45feb479d436eae994883d1d59f1d2ff2f22c4ecd6281b6fe12aba2e28880542c4b724e1d75229d7b51847d512d610a055c08a9ef9e036a070fe5740782d5146f8b91c75a3653ffeaa075ab79e8cac9add970f04a900128d6b2bd3ec667e932693446482e7935bc24f6cf1747ea7379d23e6e03eb2868bbb948bf4f49a00ca85fa1c2da3f9e8929c679960c32bf10ea59d2334f4e5c4f00d3b88cf78bd020000",
    ],
    [
      "ETag",
      "MAlovgiWTpLRfM8UjOglsg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:28 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-3-1640212585295",
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
      "da3014fd2b91f771051220e521a115d1746382d08540354d53643b37a9db24a6b1d3aeabf8efbb710a6b55a9fd14dbf79c7bce7de489dc8a222663c2447a5741f9f8e94632724240d3145fafb67c7b33cfd59fcbef83bf85609fed6b277f984c10216a96a2f92e83969255c9418d37eb765aca6a474b295b98a8d56b39a77dbbeb74dda1db1db9485390250b51dc22f95aeb9d1a773a07e9762a659a01dd09d5e6323fbe77eebb9d5d296f806bd579add84111d57957f34b2639d5421693cd1af52b0565043915193af84f8cd9d9ebcc6d41f3768ae07bc181722eab42d7ae3005974522d2aa3459c9f88918972f0e64ed2dbc59687199557911153487132ba69a46fa7107d645b05a5a73ff62152ca7e17ce547ebd9376f396dcf568bcdd25f5b57dfbcc0b334651918ae35b1cecccdc70beac7a0b4288c7a583fd7cacffd99bf1d4a4d4069054d301ad8a7d419da2396b0014f863d9725363036640397f698cd477de8c70c28f28ca861d142168edd8ffbcc6551123b76d487911db1eea91b513b71e3c1690f7a7c44f627e4a1141ace85da49259a0e91ab601e7a51186cfcd934f44c0909ad327dde18ab0b78e9516381916d3b087ca7ae7d1d1512d5ea96cffdd00ba6b370bef59a292f20a5fc717d87734e68a600d1b4c4066a289732c6a6117fbaf4ce116ca67679082a32fef544eabed74e5eb4fd480f7188b5656dbe641d0673ffabb173406c695619c87d7320257059c6e879ff1b71b8a54d0ef263e3053f49f31440022514fce37922d8043efad70e9b8f50dc7d54511aefb83c5cd51abc84668984a9f5c81e0e1df3a76a5aea37b151af7b68599da3ce083914fab9a066f3b1ce46ac5247100671febe69d5fe1fa7ce901477040000",
    ],
    [
      "ETag",
      "WVcVjImsxPJ7znib+0h1mw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640212585295"
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
      "6edb300c85df45bd9c83e57f9d815e2469ba6570932e71773314862ad1ae3a59f424396d16e4dd47b95d36ac05dc1b9ba43ec2e4d1f19efd5046b298ddaae2670d76775280ff1a8235b85a7b47af0a8d031631f0bc20f2fda3e9ff7a1c7cb3e793f4ddf99787d96cda1d146767443871072567f19ee50ab4742cfebe678697406d02755d9aacc922e67755286ed2f562f989f21265c897d7493299267376888e8d927b9e35fc1bda6e0e11bbc7db35e460c10808b35416ef41f84558d3f1b2d2d071585b018e3570735058ac2b6e113b54e90c3abdf1b0dbeff547a7a3fec711711a05f70a0da1d71b1a8f79f45caff1819664bd0111b68969e1bc796ea9ae64b3480817cb743c6ce6fb17e042606d7cd60ae6ca3aff24de1ff05984ff49cddf08d24d29dd06156024d8364a551997d28273ad24ba8c57d5119bae56c94b558cb4a8643bb8552d80f6db237091ac26af494bfefaab15797afe82709e5c7344d2c5e57c934e2eaf0277f36c84e9ce83bbb248a67210fcd4eb0e4f471fc6dd278bcd30d88ebe137b5b43c404a73fe5b3f22cceb97670f80db2a483a787030000",
    ],
    [
      "ETag",
      "/xn2zx3VrDAT+DJwCCB03g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:29 GMT",
      "Server",
      "ESF",
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
