const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640212609667";

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
      "ad0e8218d21d14f9a89862413e9b4c1a6201f949a80338bd7b9d1ee1bd27a08c7121c8d0de7803dec04465b462ab2f498f1fd21c78673dce1c7e0d10c247e2e6061e1b41a4b9894985ac6469c14ca7756f4ffd719f775009a474ed84ed50b5723898b786b6feb8f582d9cc6f6b53efecb6d69683298f24a1c4e116fb546b98562429847f49c28dc8608f99b231e4983e06d88dbe6427657838f02bc6d17bc4ce3bee977b74928f67e3616b4ea9295b7c3afccc7181a7bd45eec4b12b353315e8a92edcd5862a47639b5ac5857de751502642d477f5c3156001f8d8153d17a478b91515a105f84f20c3d4f1d784c169cf7bf0fb07a8c2393d23010000",
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
      "Wed, 22 Dec 2021 22:36:49 GMT",
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
        defaultDataset: { datasetId: "test_001" },
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
      jobId: "grouparoo-job-1-1640212609667",
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
      "a3",
      "4010fe2b64efe3d9027da12f49733615cf5e5aea51aa672e17b22c03ae028beca231a6fffd86c5361a13fdc4eecef3cc33f3ccf042ee791193298978fa5043f5fced4e44e48480a229bea67facd82ce2f966977f9fdc783d77e4fdba9ccf6688e00d4bd2bccca023455d3190d3ddb69b56a22e692544071375ec8eed0cac9edd73ac89e38c9026214b56bcb847f2ad52a59c9ae641ba9b0a9166404b2ebb4ce4c777f3b1679695b803a6a4f95ed14411697eaaf923138c2a2e8ad96e8bfab5842a849cf2ac69ef488ca3d3f799bb9ce6dd14c18f9c01654cd4856aaac2144c14094feb4a6725d317a2ab7c73205b77e52e028389acce8bb0a0399c1831553454cf2518e7fe666d2cbdf38dbf9e07cb8d176e1717ee7ade5d6c56bbb5b735ae2f5cdf35148d32d05c63669cea9b8717d48f412a5e68f5a0796e945ffd597e1c4a434069096d301c590eb5c7d6244aa2114bc6fd6194581045e36834a4fdc86293010ce20828f2b4a866d142144316c1089c38b4fb433b1c38630823cb1a861367324e62bb074eaf47f627e4a9e20aceb82c85e4ad43e4da5f066e18f83b6f310f5cdd4242eb4c9db585350dbcad516183a165d908fca4af7d13e502d51acb975ee0faf345b0bc72db29af20a5ec79fb80734e682601d1b4420315546b11a369c49bafdd3304eba95d1e82924cffbe90c6f7a69237b61fe9010eb12959e92fd906fed2fba9cb3920ae68566bc8637b2025967c8bfd61d5fb7f88c43d6db390df3bd7bf21ed930f095450b0af278a601df8ea6f3bec3e4271fb51452abce3fa30d968b00ada35e2badb03db46ef2da2c195fa10b387fd83694d8e2623e450a8d786daddc73e5bb15a1e4118c40df0b459fbff27d2f02f79040000",
    ],
    [
      "ETag",
      "gX0d/ndAOUm+9YN2E7NJPA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:50 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640212609667"
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
      "dd4ec2401085df65bcb42414a168132f8aa212f9b3d41b0d216b3b9462db29bb5b9110deddd98a68d4446fb633d36fa6734e770bcf491e810b4f49bc2a516e8e62d47726f05195a956fc2828570816a0163193abf5e543d6f4f5c94806af76a37ddcba15adf8fc9c09152e3013e06e619e601a29701fb7908b0cb92da4b4ccf2599559a03785294e02bf37bce63ca3c8e4c3fb7edfebf4bbb0b30e8d91d06256f1ff689bee2c58d2938f73949887687629242d31d43d235389ac48b1a6a894212aa8e0ea452ca92c8424aa71a566d76ca7596fd80da77ee6386de6520a854e2867f47ec2eb81262d529fd62c121c066415b2de7975be7039892a1d26ec0d03a759adf7159018928c667f72056fbb10fc133eb0bd01df39915199eb0375d51f79bf8d63473f475d7a41f707a134fb744082dea03b09bcc1d870d3bdf4ce46a31a4b621b151a07ed7af3b4d576eaefa65e90319abfe36a59a205a1e0bb71936870e72255b87b033948eaf879020000",
    ],
    [
      "ETag",
      "qwDZm4Rt3OrTx127+5Ka5g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:50 GMT",
      "Server",
      "ESF",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test_001" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1640212609667",
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
      "5b",
      "6f",
      "da",
      "30",
      "14",
      "fe2bc87b9b0ab934e48284b60ab2292aa52b844ddb0b759c93609ac469ec94a18affbe930458ab4aed5be2ef766ecfe4811731199188a78f3554fb4f5b11910b028aa6f87a5dcea63f764cfcd57677d7b7db3ffc215f6ed2f11819bc51499a9719f4a5a82b0672b45a0ed24ad425ad84e8a351dfec1bb6a59b8669eb9e6d3b28939025335e3ca078a35429479a768a1ea442a419d092cb0113f9f95d7b32b5b2125b604a6aaf13350c91dabb995f32c1a8e2a218af96985f4ba8d690539e6105ff8571f4f5b5f380d37c9022f98933a08c89ba504d5568c14491f0b4ae5a57327a266d952f3ec8d29ff993b0f7b9f76d717bd3bb2fd1714325c8fbde2cb809c29ea1a34d0c52f1a2350969944163706c33783bdb4640159a74e0dad16d6ab8ba172591c312f77218253a44911b39437a19e9ccb3c08a23a0a8538d7baba285283ccb00303ddb63cc734ccf323d8302b078a883191b1673bcd80053b7c9e182ec2aae60ca652924ef9a25bf1641e8afc3c56a3eb90afdb68d84d6999a76c5354dbcac5361936b5d3790f84e6f8706e502d39ae905f3d05f5c4dc2e0a7df2d6c062965fbe523ae2ca19904a4e3a2c37d893323772b7ff19b744f0b48a082827d3c4b24b7c047e77a3a1ea4e2f9608a54f88f8b63b2c96015740be47953cb496de8eed0252db9526f30cfb5103b1f4de3083914ead850773ce4700cabe5998420ce7d1eccbf23fa0fa26b7535ba030000",
    ],
    [
      "ETag",
      "KpLDPwcox/wQKOjZikmShg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:51 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640212609667"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff9d94516f9b3010c7bf8bf71a221b30c491fa403bd62291ac25e469aa26079c948e60669b755194ef3e43ab40362f5bfa122ec7ffe7bfef2eb93df8565439988255b1f9de30b1fbb061eaa10d12269b5249fda87925191801a6e8a6553af2e6671ec4f1ccaea2ecae58ba2c2a3757575a21b327b6a560ba07eb8295b904d32f7b50d12dd358916b81dad56d1ccdd3f0364c7462cbf336315fc671701d87e0303a0282655ce45f2fe6ea46644fb4bbf11bb64893687e7b9ea25bde54aa673ec59f83f43c92533530f918a4e179bd54745bf7401acdc2451accee4dd4e361049ef92a616b265895b1b6a7b5e0cf2c53513b2ea98f2a9925b92e9649d089bb171bc19b9a0ace2d9db16c0b792eb491ed41e279bed6953ca3aae095962e17fa76407145cb84bfe8610104b54274b11edcbafbfca1f34e57c669b45082beac9810bb63ca1ec33e8636b4a06dc19e40633c81be8308717148ba1a8726a887f1a52e03b675418ee3f9c43599f8ef2f65c07626c445d868820d8504b59e57ef3d46ee9fadc2a7ad22d0d54560cf37d561f7f8251e03aeab014362ae0191771a9013031b21d7311bf4babf9caf794393d069933026c878beffcffb9bcfff6dc8d0f77137840931984c0cbfa6ff31999c9a20cf21e626f5ac7b89c180eb0cbc897d9cc2e3db7ffe7aa798bc175cef0fc9dad5015fd7c80d6f578b5e6d53251a360219d55bfdae50afdf0fbf00139538e532060000",
    ],
    [
      "ETag",
      "b3sCxdALLM2nIcHiU4eIlg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 22:36:51 GMT",
      "Server",
      "ESF",
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
