const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1602381381566";

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
      "8b08000000000002ff1dcfc97282300000d07fc9591d2a50a037c22e58966a4db9308829a6842d61d89cfe7b9dbe3f780f901705e63c1bda0a37e00d2cf95edb153bbf55a1a4dfe453e2510da372eb8f487295765c7b61e9a1bb98024728b19229775efc847bd70f61eacbda79fd3afb4aa841a73d2f11bdbd17ba6ac713b98746bf0fcd84115afa75aa1828265c5eb63fe911221ba293e17d4774b643d240763032c5092a651685d41f2f75349a83c93c6e5dbba0d2a53b8bdde9d27a6240690e1b26ad10d2d65a29ffcc4870508722ec7977041b80e78e30cc33f29c89b2a66dc07f331b960e3faf10e70c33f0fb074c6f0c9b05010000",
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
      "Sun, 11 Oct 2020 01:56:21 GMT",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1602381381566",
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
      "6d",
      "6f",
      "da3010fe2bc8fb36151212920012da104da74c94a9216ceb276a9b4bea368943ec50a18affbe33a1ac55a556e243f03d2ff7dcdd337914e5868c0913d9b6817affe54132724140d30c5fa129aedcc534bda1ce62bebbfdf9b485d5dfe964820861588a16550e5d259b9a831aaf96bdac964d456b29bb28d4ed77fbbeedb8c33efe3cdf479a823c9d8bf211c9f75a576a6c592fd6bd4cca2c075a09d5e3b238bf5b3bc7aa6af9005c2bebada38526cafad0f35b2e39d5429693d512fd1b05f51a0a2a72ece03f71c3bebf55ee095af43204ef0407cab96c4a6dba42092ecb54644d7d5425e36772ecf2d5075986f3709674be76aee25fd79dbb0a15efa90275d79947d751d2e9db28b301a54579144928cbc1089c6246ef676b0854a3485b5c07b64ffb437bc45216f074e87a2cb581b1210b3cea329b8f0630d830a0c8d346fdc8a2a52c9d017359406d4679ea7bded0f36d77138c2018d8bee36cdc9137e88f529f91c30579aa85864ba12aa9441b96fc89a3245c27f16a319b26e131464a9b5c5fb6cd9910affbd41812411fe43a98aa90e86426172d92309ece92e877d82e6b0e19e5fbe516d795d25c01c271c9c9bec279919b5518df92f62986146a28f9e77344f0b1f0d9a9be1c0e42f174d04569fc8f4be3ca78f01adae589c2f472663b83c0ac17c1b57e57f303a37c3e18a3080594fa14a83d1c72389935ea0cc222ce7c112d7e60f51fe23e8070b6030000",
    ],
    [
      "ETag",
      "eumF3NAfQa2NLvYJwqeUXA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:56:22 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1602381381566"
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
      "94",
      "6d",
      "6f",
      "da3010c7bf8bf796203b8f04a92fd236eb2251c62048d3a66a3289a161214e6d6715427cf75dd28a84d6b0512922c771bffbfbeef0edd0efac48d1102db2d553c5c4f6d38aa96fb53165b2ca958457c90bc9500f31455710197fbf09d64f133951f35be1473fe6991d91d5d51544c8e4916d281aeed03263792ad1f0e70e1574c300cb520850dbb2b6a3711cde8553706c785a3bc6f3d128b81e8568df3b00a5e0cb2c67bf2e072b913cd2e6c8afd82c9e46e3bbf314ddf0aa502df379f43588cf2329551d91db200ecfc74b4537650bc4d17d388b83fb898e7ad8f7d09a2fa66cc9042b125637153ab266898aea79494895334372289649d404373fac04af4a2a3837c0631083b8d8b406041ec775212ee70955192f20743e83d321c515cda7fc19a685088608d1d830b965f3f907fc5653c6b13553823e2f9810db83cbece3d6c62636b069e096207d67803d8bf8be1dfa4d895d0dd2b2cea5221db6162196e57a7a11efe39574d846c4b789a31571348504258cabd5ee13fb7da79ce34ef9d83e5184d9b2970874b8a60007fbfa0288ff4101ff48c024c4b6f4026ddc89fcc06b3a448e3be4383ed1e6f7fe797e7dfe3713c69ea76fd040f32ffa9ffc83e3fcc4b54edc8596b52f11e8708d803b300f037878bdead75bc5e44470581b92d51b03bf6c8f1b5e6f14d86843252ad64309856dfe25532fdff77f0126d4c4102a060000",
    ],
    [
      "ETag",
      "TXCAjqPsPtUDr9IZUi4I1g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:56:23 GMT",
      "Server",
      "ESF",
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
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb642d0e5f85ee08a062a8109001dc64f8c4162d0d062262a777afd37783f703cabaa6c3404676a5dfe00dcca56a2deb256226d46d8a1396aa9dcfb4166f773873d05691bd639574a1763486836a3a4d2c2e5e78958320f65489fbb683f19cbcaf327c66a316925d17a327b1e7cfd528881e11466f975c0e4455419437265f57a93f596c12b6ec26dd5d142eccbe84162968339df64d64ea138efa4df6219d9410597521e071cf8c9ca9ad649e613626317483ba55e5941f8a96de1ec5788f066d3d8105a08fbee57420ed6ba61996b500ff4d32ce3d7d5d212d39e5e0f70f4a85005e05010000",
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
      "Sun, 11 Oct 2020 01:56:23 GMT",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1602381381566",
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
      "00000002ff8552ed6f9a4018ff57cceddb520541504ccc662c6bc9d466885bf6c9de1d0ff42a70943bda98c6ff7d0f605d9b266de207bcdfdbf3f64cf6a288c99430913ed4501dbedc4b462e08689ae2ab78aa687465acccebeb7deeaef5e1677888e6b3193244a352342f33e82b59571cd474bb19a495ac4b5a49d947a3bed51fbaa6654f86f8735c17650ab264298a3d8aefb42ed5d4305ea207a9946906b4146ac0657e7e371e2da3ace43d70ad8cb789068628e3c3cc6f99e4540b59ccb61bccaf15543bc8a9c8b082ffc2987d7feb3c10341fa4487e141c28e7b22e7453155a70592422adabd6954c9f495be5ab0fb2f197fe22ea7dedfd086f56bddb121defa80275db5b06ab20ea0d4db489416951b4261165193406a73683f7b36d0454a34907eec6a64b8713d363091bf364623b2c3181b1091b3bd46626f746308a1950d4e9c6bd55d14216d688d96c4c4d4679e23acec4714d3b1e7b301e99ae65c5b6e78c865ee23272bc204f95d07029542995e89a257fc220f27751b85d2fe691dfb691d03ad3975d714d13afebd4d824923ee8ebd8a042625233b9601df9e17c1105bffd6e594b48293f6c1e705d09cd14201d971c1d4a9c17f9b5f5c3bfa47b0a21810a0afef91c91dc029f9deacbe120154f075394c6ffb834ae9a0c5e41b73c9137b59cd5f6c8f4484baef43bccb12dc4ce07d338420e853e35d41d0e399ec26a75262188335f07eb2b44ff01032a5441b6030000",
    ],
    [
      "ETag",
      "iwraTG/M0HHkm6NtyKRyTA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:56:23 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1602381381566"
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
      "94",
      "6d6fda3010c7bf8bf796203b8f04a92fe896754894d1247d314dd5648249d32571663b430cf1dd77492b125ac346a5881cc7fdeeefbbc3b7433fb37285c66899a5bf6a26b61f52a6ee1a2364b2ce958457c54bc9d000314553888cb3c5666686e1b7f44f91ae23425922e2bbab2b8890c9232b281aefd03a63f94aa2f1f71d2a69c100cb5610a0b655634fe771701384e028f8aa71ccef67b3c9f52c40fbc101a8045f6739fb7139588be491b6477ec1a2389cce6fce53b4e075a93ae6f3eceb243e8faca8ea897c9ac4c1f978a9685175403cbd0da27872bbd0510ffb017ae2cb90ad996065c29aa642479e58a2a6cdbc24a4ca99213914cb246a83db1f52c1eb8a0ace0df018a6415c6c5a23028fe3ba1097f384aa8c97107a1fc1e990e28ae621dfc0b410c110215a1b26b76e3f7f83df6acb38b62225e866c984d81e5ce610773636b1814d037704193a23ec59c4f7edc06f4bec6b908e752e15e9b18d08b12cd7d38b78efafa4c7b622be4d1cad88a3296452c1b83aed21b1df76ca39ee948fed1345981d7b89408f6b0b70b0af2f80f8ef14f08f044c426c4b2fd0c59dc80fbca643e4b8438ee3136d7eef9fe7d7e77f3561ec79fa068d34ffa2ffc93f3ace4f5cebc45de858fb12811ed70ab823f330808797ab7ebd554c2e0487b52159b331f0f3f6f8c89b8d021b6dac44cd0628a1b0cdbf64eaf9fbfe2f1ee6d2a72a060000",
    ],
    [
      "ETag",
      "TiPwL2RRYgzmgfS1aecrTQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 11 Oct 2020 01:56:23 GMT",
      "Server",
      "ESF",
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
