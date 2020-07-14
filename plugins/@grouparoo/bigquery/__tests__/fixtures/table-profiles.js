const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1594756748502";

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
      "db",
      "6e",
      "82",
      "300000d07fe9b3182c72db1b18c822aed0595cd90be94a6538474b4b105cf6ef333b7f707e00e35c18538ff24bf4e0092c0c866bbece6410dbb7339d3ef098de1847397ccb2fe83ddae12c6d0f9f598b483a29cb6eb49bc164e3e7e13d5294c0cb667bad8eb4494b3abd3c27e5980cf29b6e35a7cb52ba75ac135935ccd3a498d49da1a3b504f9e9da8b40cb584464e8781f373bdad99e6af1610f1d098b316c0a8778125b49800a553b03268a7a1633af159c7bffccd3a99a4d89c7d227705f9c6c64221bac809855a785a9bbc7cc71c37005fe9bf5b828f1b8c68269a1c1ef1f8a25f3f205010000",
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
      "Tue, 14 Jul 2020 19:59:12 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-1-1594756748502",
    },
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
      "00000002ff8d546d6f9b3010fe9e5f81d8d7e68d42422a456b94d2355a4256206da76942c639a85b822936edba2aff7db6c90b59aa6edfe0ee9e97bbb3fdd6d034fd91644bfd4cd323923c9550bc7e7aa0917e2233c0512233e87e6499e9d7f1f4eee56eec194fbffd5f5f3bd7c3615545149aa1559e4293d1b2c0c0ce167e2b296899a382d2a6206c769b5d6b60f6ad5edfb4ad8e514119a4f194648f92e09ef39c9db5db5b1bad84d224059413d6c274b58bb79f8d765ed007c09cb50f55db4288b53fd4fd9c528c38a1d970e1571e4a0645082b4452e9620f5e46e787ec2d8256ad44543f130c08635a665c3aab6830cd6292948522174c6f2228c2caf2eeb716d07d67ea8c030dd3b45c6561865670a22d1147217fcd41bbf4e6336de25ecebdd92898ccddd01f5f39b3516b3c9f2e66aeafdd5e399ea37114a5a0b0da503b577faef8518e94da12182799f214c86ccd89c86ec6387967813b0a49225c31d89485fd4e0f75edce208aa33e8eed532b8a3b104576d4b7d069d4c10313cc6504a8cea09c557894d10c6ccbe81a18426441149a911187b61d7743d419f44c0b59c818207d835eef7a792908870bc272cac866c8faad37099c30f016ee781438f5be6354a6fca2727ed8f5413b5c0ca8eef4a3911c39ca0b428529b5ce891b38de681c4c6e6a36c4d99a4282f0abff244f578c52067b342ac4ae381433ba948bd1ddd1ccb9d883d549f9b62d62a2e2c7cee7be1d5128f7af7a39daffa14e200ed6c128aadd5451dd0fbc89fb45af25d7efd3dca0b47c87e7791396238c49ba9f97a26afcfdf5b35193d0c54dddb8d3af178ef75d62554e663c88a1800cef45ffe3e44a6095fef73b24aab7cf820488976127cfb8088b3b84d95e1c1750dd2852cd7d4b681966cfdc120a60c18f2b06f64ef2e869905ab0828c6f47513d11d51cd70796ca9a1d0593e5e216b89b15ae1bebc61ff74ce3dcdd050000",
    ],
    [
      "ETag",
      "ahA54lKCLXwXCR2qzSxK0Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "95",
      "4d",
      "8fda301086eff915c8bd8204151f6da53d00a52d6a16b610545515424e3c49bd7562d77660a315ffbdb613965cb68a54a45c62cfcc3b7e94b13cf3ec753ae837cd08fad041214dfee4208b3709e86f76b3019533adcc2278a60075ad1a344eac5a84bc780afac5d7f414eee6c18ff9f79007a7bbbb52a5a25f9062a37b3696b1630a8c2863ff7476a7f2bb588653b027469ce569767066f71ad68570e16db059ae3ed72329272eb2daf9fe74e62f50153a775f8710acf1c11df97f08b7eebd0a861e79b881182464115cff5a48fe08915ebaf22a9c0a063dc5731981aa2036b10c2792e7024bce7bc6d51bf406a3f7c3c9683c19be1bf5df5ed48c4758539ed984dd16bde035d7986df8c956180d4a3992a55d56fc520a14d72ea15e21133ada6c4ad08befdcfd8770b90ac6c39ab6daedbd5a66636a4ca5d2e5d537a3575775233cc36dd2cd4ba1ac1572021901d90a9a8a0326448252ede0b93a60211ab267ebb57f2b32ce88e494b4443fd236a84c1f1b523ff9ebe90dfb8a69f74ddff4c769b0b8155669d3ec1b7283e5fd621b4cef1f5e859beffedae6678506f520b919220adce818f4cd90988cfbe8328ae6dc8e1a6d27919639387784cd48fe42b5f1c59829f0cede5fe3f836ddfe070000",
    ],
    [
      "ETag",
      "pboyxT0yKmwbUCTYCWboTw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:13 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT * FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1594756748502",
    },
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
      "8d",
      "53",
      "5b",
      "6f",
      "9b30147eefafb0d8dbd404d2000995aa2da36463ca652364539f1a630ecc2dc1d4369daaaaff7d36e442d4a9db1bf89cef726ecf670819f7b44c8d4b6424347fa8813fbdbb638971ae232071ae237260d9f0b590f8def7cdf517afa47e319d5c5db559b4410bbcad0ae809567302e272bdeae79cd515e68cf51461efa237703c7be4b8237bec58172d544091cd6879af097e4959894bd3dcdbe8e78ce505e08a8a3e61dbc3bbf97861569cdd0191c23c5535959030dfd4fd5030822565e5d57ad57aa805f05bd8625a681747709a7c3c65ef53bcede72afb9112c084b0ba94da594b435899d1bce60db9627a568feab9b17cf8ed3c18ab6016f8317a8fa6d1728e36aaa48c16203668195d0711fa748336422a031b3459f9e76843d3e60bcdc27918a38165a1e574ba0a626435061af21484a4656321c649011d6115dd752dfccbbc0e149a044b2c6097763bb25c3c185b5e922523928d874e92599024e364e4e0616211cf063b4d007719a4d66ef1b864e528c5dec84b5c2f7313c7b6c643dbb689e5a58e95a68a86b83626ee78e0183b8697433dbf3995704d45c504ddf5d5f8198571701b47eb853f89836eed19ae0b79ddba3fadfca424a99ad475fb565b5e39aa3865ca5433c1701107d1c48fc31f1d1b6a9d669063f2b47ad00b95e142c0118d39de82043e67a91e8ef16db90ae370b998cc5aa99d90a136377eaa9a94efeb20bad1d126a6231164c0a124c7f1fec76835b00dfffb2e55f6fe4c34405dca415eada4a46ac988388a130eedcad16de3784fe80cc7b6bb2754402e5f65d88381b7cf78752a5a0bb650ca7d2bda93d975eac452ddb1d3c074ba5a9145b8f8dc983f7b39fb037700a415ed040000",
    ],
    [
      "ETag",
      "t104eJltakCC/UH9niClFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "59",
      "4b",
      "6f",
      "22",
      "39",
      "10",
      "be",
      "e7",
      "57",
      "44",
      "bdd760b5fbdd2b8db424611266c98b309ac32a8a9c6e030e06b3b621138df2dfd7368fe1c08eaa3758b373e061fbab2a53f5b95cd57c3b3a3e0e266c5607bf1f074f6cf4f782cad7df4654dfd92f7daa165c2bf33117334583138ba69a8c2cba987e6167c597cb5b751edf4dfacb3a7ae94fee3e7c58a15435a6536270dfccc88c878cf25a99f15f6e7cbc9e776b3332a55623ab9dec7a56bfcedd6cf77ad0b9e8f47797a6a2764bd79f7bbdf669af13ac97de4efe5df99049a51fdd688f91fb41bf7b7df15e1b9c7837619ccab83ff5233aaba9f4a79fcd1f495d4baa94471b423d92f97c9f81d39b9b5ea77dfd5e0b64564bc16acf5696cca776ae97fbb47fecddb407efd55d13bdf7089cb7079df7ea569a4cf7fa65d0bdeadc0fda57b7200beef3e1686d2b78164f7d3aa492ce2afa3d69cda578a695eebaeca88c5d4e5b4a2c644537f4b582abe591148b399142b4cc542b6ae1b44cf234cb93220da30d9a8b8a68266656e0f37db035af8526bc2f5e6c820c70b84aa172355e25cc8d2782e14e0edd7590595a3ae9603bf576f2035c47320a847ea272299802a2e9f30a1efe41bf3a97a14a4c81b25784433785531425398a0b944740112d1750ed43c21514db406d94960843b71b8551d80aa356080d29466911a66989cba453eec8acbf3d1ced6800f309badb3352310ea654c7660818b4a2068bff03993e9abb124ca7288d114e32946014811dee89254dd496098ab3a68482c6d4112a4b0c",
      "a50e48a81868fc42524d39182c1695a82640f868b4c647de7985312acca1c721c271f2cb24aa2c2b1034505b5a41051cadf2189787a415d4b7ed29d1049ad384a66a28640dc4936a2310fbe6152e63549a1b30342fe8f96f107f3fd0c49c84b029aba08175ac2a70111f925529d0788f4928a93e89f14c695303c2e0fc798d4f7c53cade8099f5222acb9f9b7d9aa82d22bbeda6a482c6d591aa0c93fc90a482eef69cce18107a5f11cea00cac9543a7de739429ce718c4d5d658af45fe7ee8b72935a8ba68c820675c5a8121fb448cf81c62f291f4159f227a7e09e6f3cb1e0cc37a10adbf315c8b02a85c6e7e7df79618ec0e966cb2668402d9b7098e707add0a1bebda052833bbeb3c513d31a5a9f570e9d7bcf50e6f288d2d464295b4779483b9e525461dad4a431a9a07175a4c2597cd0fa1c5a52f41692530aad8e4ea578a11cda25f2a715bcf0def5d95b2f2d91a15602ed8a3c5d7c4db099390ee026754b2b68641dada2343c68818ea1fdc4b9907afc0a04771b14e835b3e0d237a5127bf7619425a6da8552ea7f509e476588d2a64f12c04175948ae3ecc7e5b9797ff8fe98fdf4d5f4e8b752545429ea1edd97c6a19b7f01ce840da2b67f02588fb8e98a54637ac9b499733ffde8ede81fdfc5db0b381d0000",
    ],
    [
      "ETag",
      "8mWiC8WHPsD3QkRvd2wRkQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:14 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "6e",
      "82",
      "30",
      "00",
      "00d07fe9b33154c3b07b03222bb708cc18e0a561a5203781b65c74f1df47f60527e7176494322188ec1bf6009fe0991dd09eeeddfe64284bb1c6631c45a58e8d5e8db53c74a3299daaec5161ed657466286ffe68b852c0a60ca3042be5c73a3304f3a66d55eaf042c1e6937d35824b7b98dcec7e863fe6ab87a7403bcc172bbe0b9d880bbd8a5b3b193481df7e90968e595849378b11792439db1a254e5bcc9ab3d8767d3d2630b0a43760bfe636326bbab973b3ae72c65e4e3b61a56e192690ebf1027680ad43c59920d5363baa08edc07f93c8e7c0b6abc132ce3878ff019ad76a7405010000",
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
      "Tue, 14 Jul 2020 19:59:15 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-3-1594756748502",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54db6e9b40107df75720fa1adbc4406c47b21acb2629928d1bc089daaa42cb7aa09b6096b04bd228f2bf7777f105d751da37989973e6cc65e7ada569fa23c957faa5a6c7247daaa07cfdf44063fd4c7a80a3547a1cff713126c6ef32f8eede4cf1fcf67a66bfdc8e467514516886d645066d46ab1203bb5c069db4a455814a4adb82b06db6cfeda1d5b72ffad6c0367a35944196cc48fe28097e715eb0cb6e7727a393529a66800ac23a98aef7f6ee73af5b94f4013067dde3ac5d9188753fccfb39a3187142f3d132a835540cca08d6886452c501bc8aaf8ed93b04ad3ba9887e261810c6b4cab95456d3609a2724ad4a452e98de84519895e4fd6fc3a007cecc99841aa659b5cea31cade14c5b218e22fe5a8076ed2fe69aeb5d2ffcf93874175e144cbe38f37167b2982de75ea0dd7f717c47e328ce4061b59176a5fe3cf1a314a96c2b609ce44a5328bd0d25c2bb6da3fbce00f7149244a862b00d8bfac6053a1f18c33889fb381998769c1810c783b86f233336f0d0026b15036a322865351ee534b70c2389e39e155908ccc8b286463444098e7a68609d63d334c034f42d7ab3afe5a5241ca6841594916d93f57bdf0d9d28f497de641c3acdba1354657c5a2b3faefaa81c2e1ad454fa514b4e141525a142941aa7eb858e3f9e84ee5d4386d8ad19a408bf064f72bb12943138a0512966c5a19cd3951c8cee8de7cef400569bf27517c444c48fbdce43392250ce5fd57232ffe33ca158aca356d4b3a9ad7a10faae77a3379c9bf769ee5056bdc3f3bc35cb1626243bf44b51b5fefefad96aa4d0c54bddaad36f978eff4d62954f7a7c48a0841c1f92fec7e64a60edfef71d12d1bbb32001e232ecd3332ecce20d6176488e4ba85f14a9fbbe23b4ed9e39dc110a60c94f232cf3621771721a642e5843ce77ada84f44ddc7cd91a4aa2147c164b87805de76849bd6a6f507cc9c9834dd050000",
    ],
    [
      "ETag",
      "ERkOAi0xrSZIGDcMQFL5wQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:15 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ffc595df6fda3010c7dff35720ef153418bfb6497d081d5b23a5d041789a1032f12575ebc4aeed50a18aff7db6134a5e3a451a525e62dfddf7fc51cef2dd9bd7e9a0679a13f4bd83f6347d29401e3fa5a07fdbcd0a54c1b4328be0b902d4b56ad038b5ea3bea3f8be1e4f118eda7e321de7c7e0d6e5fd29b9b52a5e247c8b0d1bd19cbd809054694b1ff38bb53f95d2cc719d81363ce8a2cdf39b37b09eba370e175b40a16bfea918c1317596cc2d09f857354854edd8f21046bbc7347fe1fc2ad5baf82a127be5f410212f2182e7f2d247f825807aebc0a6782414ff142c6a02a884d2cc3a9e485c092f39e71f586bdc1f8db683a9e4c475fc7fd2f6735e331d694e73661b346ef78cd35662bfe6a2b8c06a51cc9d22e2b7e2e054a6a9750af90091d6c3625e8dd77eafe43182ca2c9a8a6ad765baf96d9989a50a97479f5cde8d5555d09cf709b74f352286b859c424e40b682a662870991a0543b78ae76588886ecd972195e8b8c732239252dd10fb40d2ad38786d49fe1d2bf625f31edbee99bfee147f36b619536cdbe21370aeee7ebc8bf7ff8106ebedb4b9b9f1d35a807c9cd1051e046c7a06f86c474d247e75174cbeda8d1761269598073c7d88ce43baa8d2fc14c8177f2fe02a7e36fbcfe070000",
    ],
    [
      "ETag",
      "HiAkp36hyTb753aU/wICqg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-4-1594756748502",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d546d739a4010feeeafb8a1df3a510f1451679cd41a9230e34b0a984cfa32f1c0855e821ce18eb4998cffbd0728629349fbc5c1dd7d9e7df6e5f6a58190f240e3b532448a47c3c70cd2e70ff7cc534e720f0812e69ec9e5b46be8e349fc6875c793db8b0bedf2f7321c8dca285aa039d924113439cb521ff870e9b4c294650949196b4ac266b7a9ea03c9d233ba7d1d6b259443144c69fc9013fc1422e1c3767b2fa3153216464012ca5b3edb54f6f693d64e52760fbee0ede3ac6d9988b7dfcd7b1a319f08cae2d1d22935641cd23bd8101ae52a0ee0b5f7e998bd45c9a615cae827ea03f17d96c5225756d2f82c0e6898a505b9647a9146692e24577f6b06c531a7e6c4451fd1b9bd98a1952c29a011f015bab9346d13adb890d957e87b86710746e8142dec33d3469f6f2bd7d8999ca0155d175f686acd2c17a918a3c5f9b963ba0817c28aa46be082c68534977811d40449efae9bd61b73ac2872122208875dd89d817b44ede3811778861ff43bba1760f0bcbe67e8a4e3617fd085eeda0352671079ee124f6216f7fbb807f207d6445371a7a7c140f371df08ba81a7eaaabfee9140871e51760cdbaa9e5f2915704679c238ddf55bb9b12dd7bc73ede57c3276cd7aed01c9227156aa3faefca824219b5457fb5e5b5e294a52caa4a862b2d6dc35edf1c4b5ae6b32e49a4d2124feb3f3982f5a40220e073449c90604a433b6ce87a35c2d1ccbb516f3f1f4c0506cced53e92cbb06f95d8434d7536f739391e753985d2aab8d6cc74dcf1ec4aa9f9b7276f325d93287b83ea69675634ace126d69ad870556da876866ab78531fe7a44ddf8fbeb47a3965291af752758f9b234eddb1c5bf8728f0d01a410fb0711ffb1b639b074fffb16c9e8fd69c801f23a54e9e57313543e209f1f92fb2994cf896e0ac57b42bdd7d12b42094cc5eb087d60ec235e9d873c176c2016fb569467a2ece3f64852569353c0f270b9fe736b7e51886f6c1b7f001468915ce1050000",
    ],
    [
      "ETag",
      "CHL475ACnqI4ACYGG2HxUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:16 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02",
      "ff",
      "c5574d6fe23010bdf32b50f65aa27c7fac5469a14d29bb29eda6e96955552631a95b13676da75d54f5bfaf6da0e5c0564634da0b6166decc8399e7c1bcf4fa7de311d5a5f1b56fcc50f5bb8574f9a582fca77c9341d662cec4a3213583c69144430e2a89f64fa21fd1b80dbec7496ad50b37cb7976fe7c7cbc42b1e21e2e80c0bd084bd8730471c984fd4bd9fdb55fc56ab080b2222a55eedacb978df24ea679324eb2edd082942a34bd49d3e1284d8c75e8f5e8dfc5e788327ea7ac1d24d77936998e0fe5c0a0730ad15484bb2b5fc1ba84b4bbfaa8b903654921631d721076079a6617c1e8f2324d86d34319405d5282ca8e599e5097d5317fda55fd2cbd1ce687d62e01df79044e877972686dc6c162675ff2c945729d0f2faeb418d4f3b6b7e6321ec82c837348615dc0f7a5d550f2000b3e51db91095e0c078cb4b4801bf9cac455b8a2a46d002564205c036f60fbb117fa41e845bee56cd09814802352cb849b6be38d9e130e70469ee58234bcd506a52b73b52f378d30e65b2b74bb3f22f4249343e3cdf57af401ee1ce20a68627f60889826f6fe5182836ff08f6a9759908566e699586d186a8223df74bcc88c4cdb8f3453386d75ab7703f5acd0b47c4db06339d6c0720696ee406dd38f6c2b0c85ec92782b67fdeeb6b755415b4dbabd1d43ca916e1f4eda19e25c135c150a1d762d28db714dc7f74ddbb584b23493e600335d827db07b882af26cd3db5b54ba7355a2b20337fe4c51c59ae4694b3184b5267a24f625c458138d672b78d4b5ae1cd7163b2a3685b43cf7f3c7df950203711c5cdd63f0262bddc92a5939bee57ea6ac6c4b93fd94507ebfd4044f1827ba122c9104c75d4bca93bf7db61978a63899ff77fbec53d6892dd3d7fdbc1b49690f5549ca7583f0434989d7dbf70bd768c921bba2445ce7185497b8583474731f3c2172",
      "885c5e07654794bb00e26fed39e2c2a7be7aefb5f7174e7dee03420f0000",
    ],
    [
      "ETag",
      "5C8K8Gu6J9EL0nm3RTtRHw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "c9",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "7f",
      "c9591d0b14a4b7462aa04259c222970c091916cb224941a6d37f2fd3f33bbd1f9053ca38c7a2bfb30ebc812597f41ddd5dfa03dccf34f3e353d1540961bc1d1b596a356598b5bda42995701c8423761b3e4c6f2ecd089a5fad4cbf6149ae4da6180f712e879867eadca28064531a6a9f76b47d393a2972a172eae55b1c9a057249179c3b61c80e3189ee1fad1a19a9a31624549715123f1cde6334e2ed62db969a042996e0a165e2d2b8d4b867169a2b4e930935e514787d727dc4ba87bda04f7bb001ec39d423e3b85e67f2abae6fc07f138b6560eb15b27c6423f8fd03474fe51a05010000",
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
      "Tue, 14 Jul 2020 19:59:17 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-5-1594756748502",
    },
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
      "02ff8d546d6f9b3010fe9e5f81d8d726212f94a452b446295d23256425a4d13a4dc83607730b9862d329abf2df67435ec85275fb0677f7bcdc9dedb786a6e9cf340df42b4dc7347a2920df7c7a6258bf501910285299deef597f1d046b6c1664f3983c6e52f3b6733f1a5555b4447394643134392b7202fc6ab56c45392b329433d694844db3d931877dcbbcb4fa03d3e856500e7138a3e9b322f82944c6afdaedbd8d56c4581403ca286f11961ce2edd76e3bcbd91310c1dba7aa6d29c4db1fea7e8e194182b274b45a561e0a0eb90f09a2b172710407f8fa94bd4551d28a64f52b25800861452a94b38a86b034a4519197e492e94d0665b8b47cf8ad05f4a53db3279e46585c24a99fa2042eb40009e48b4d06daadbb986b53e776e1cec7de74e1f8cbc99d3d1fb7268bd96aee2cb5f59dedda9a40388612ab8db4ebf2cf913fa5a3522d002e685a7af254b6e6446677639cbeb3c003852291ae38ecca7ccbb8449d8131c421b64838e899383400e301b64cd4c30619f6a11f60407586d2598547294b2fad6ebf6b0ebabe690443bf6f01f808c3c0271de899003de802d677e8eda1975f3915704379c638dd0d595fbb53cff63d77e54cc69e5def3b44452c6e2ae7a75d9fb423e480ea4e3f1ac999a32ca74c9a2ad739753cdb1d4fbce943cd863c5b338810d92c5fd4e90a51cce18846b9dc95807cce02b518dd19cfed9b23b83c295ff7455c567c3ff83cb6230bd5fecb5ecef67faae3c98375328a6a3755545f7aeed4f9a2d792dbf7691e505cbcc3f3ba0bab1186343eceaba46afcfdf5a35193d0e54dddb9d3ef57b6fb4d61cb9ccab810420e29398afec7c955c02afdef774856ef9f0505902fc3419e0b19967788f0a338c9a1ba51b49afb9ed0b4ba86b12794c05c9c57f4ac83e4d9d3a0b4208154ec47513d11d51cb727968a9a9d12a6cae52d70762bdc36b68d3ffb8e4398dd050000",
    ],
    [
      "ETag",
      "3zL4WddWb5ucyZmZyn5F1Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:17 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ffc595c16ee2301086ef790ae43d16246809b42bf5002ddd22052810b4870a21379ea4ee3a716a3becd28a775fdb09259756918a944bec99f9c79f329667de9d4603fda109413f1be88946af1988dd8f08d4dc6c162033a6a45e529e48404da3068523a31ec6f37fdbab55fbad7f964d7e9fa99bde0575e7d7d7b94a06cf1063ad7bd796b6430a8c486d3f5abb51f86d2cc131981303ceb238d958b3790cab5d6ac34b7f319efe2a47624e6c64baf2bcc1d01ba122b46f7e0e2158e18d3df27b08bbae9d02865ef8d3024210900470fceb54f01708d4d89657e23865d0923c1301c8026212f37024789662c1794bbb5a6eabe35e75fb6eafdfbd74dbe70735e3015694272661b5441f78c515660bfed7541875723912b99d57fc500a14962ea15c211dda9a6c4ad0876fdffc42389efabd6e495becd64e29b33235a442aafceaabd18bab3a119ee13ae9faa550560b39828480a8054dd30d26448094f5e0b9dce034adc81ece66dea9c83821825352137d4beba032b5ad48bdf3668313f615ddeeabbee9db813f3a15562addec2b72fdf164b4f40793874fe1fabb3eb6f9e14e817c105c0f1109767474da7a48f47b6d74184537dc8c1a6526911219587780f548bea74afb42cc24387be73f8e25738cfe070000",
    ],
    [
      "ETag",
      "BmQxv9U0z7+uMW+tC63i5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 100 OFFSET 0",
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
      jobId: "grouparoo-job-6-1594756748502",
    },
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
      "8d",
      "54",
      "db",
      "6e",
      "9b",
      "40",
      "10",
      "7d",
      "f7",
      "57ace85b15db0bbe802d59a9eb9016c9971470a2f4a2785906b20906c22e49a3c8ffde057cc14d94f60d66e69c3973d9796920a4dcb3d8578648f158f89043f6fce12ef19493c203828485e749bdeb8c17bf2f1face03e9a0176d3dbabf86934aaa25889e6649d46d0e4499e51e0c3a5d30ab3244f4996244d49d8ec37d5dea0abf7fa7ad7e861ad82728882298bef0b825b21523e6cb777325a619284119094f1164dd67b7bfb516ba759720754f0f671d6b64cc4dbefe63d8d124a044be2d1d2a934e41cb21b581316152a0e60dffb74ccde6264dd0a65f423a340284df25814ca2a1a9ac4010bf3ac24974c2fd228cda5e4fd6fcda038e6d49cb8e8233ab71733b49225052c02be42575f4ddb442b2e64f615fa9963dc81113a450bfbccb4d1e7ebbd6bec4c4ed08af9e5179a5a33cb452ac668717eee982ec2a5b032a90f5cb0b894e6122f829a20e9dd76d37a638e7b8a828408c2611b76a3e33e510d3cf0024fa781d1e9790106cf333cbd473a1ea6832e747d0f489d4114b92b3c8965bfba12e17b2af1707f40fd5eaf3f30280c348c41d73b01350c43f30d6fa06c1936fb7a9e3226e08cf134e16cdb6fe5cab65cf3c6b597f3c9d835ebb507248fc459a5feb8f2a392846c525ded7b6d79a528cd5822459593b5e6ae698f27ae75599321d76c0a21a1cfce43b1680189381cd024236b1090cd12bf188e72b1702cd75accc7d30343b93917bb482ec37eecc51e6aaab3b9cfe9f1a8ab295456c5b566a6e38e67174acdbf397993e99244f91b548f5bb3a2",
      "610d37b1d6545557d5866a67a8765b18e3ef47d48dbfbf7e356a2915f95ab782956f4bd3be2eb0a5aff0d8104006313d88f88fb52d8095fbdfb74846ef4e430190d7619f5e3e37c1e403a2fc909c66503d27b62e15ef08fbaa8e8d1da10466e27584d1577711afce43910bd6108b5d2baa3351f571732429afc9296145b85cffb935ff528a6f6c1a7f00a9b09d85e1050000",
    ],
    [
      "ETag",
      "w1j3AOxVqIfklMe0TphWnw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:21 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "000002ffb5945d4bc3301486eff72b46bcddc08f6d3a61179dd659e8beba0e04919135a75d66dad4245586ecbf9b649d7a514118bd4ace7bce799f4368cf67a3d944af3423e8b689d634792b40ecce125073730940164c497de43c93805aa61a144e4c75b2b97c9acee61eeb889b75e4c59e33dec1c76070a892d10652aceb3e75a4e398022352c7cf366e96bacd653805e34889ed2d55b5cbadea4d4277e406bf532927363559fabe33f45d54a6f6adbfcd632aa45ad9a802b208036f323a95c170ed08fda894d5679f404640d4e74ff315264480943532b85ce13caf020ca753df7526a712704604a7a466ca3badd39da9f72af7077fea84a77a13ac2a7f817b27744ff5960aa795ef127a6377113ae3d9bf08f67c69942cb4e5eb0062109045f0b3b472c1b71029cf6e47a9b90cda92172282e3e76b1a0fe944f022c782f3b696dabdf645b7dfb9eef6ae3b37ddf3cb6335e311569467a661b940df78c5156601ff300b129da31f6db8532067826ba204cbe9f7aed071e43b6e46526662250ab07284f5e67da44a6b3166121afbc6173333aa2ae5050000",
    ],
    [
      "ETag",
      "gh2XOPQIl4r8bcIfIAMyew==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "0000000002ff1dcfc97282300000d07fc9591c084ba137562d6b14b02317264050685924ac76faef75fafee0fd009ce784d274ecbe480bdec186a1b2cff74e276bec42dcb562acc2f48d83d2676adc1d6ddac4d18cc2a0e4553ac1fab935a8b0bd719d67d1fe3e63a3f674a864570bb76af4f1c6852e7f6dece284643da232233ace8dc964eb6c17f19c10280dee3d7b840b140a47b29891437e9c957aad9b97e1b95dcad224edc15fd3100d2cc69a13e84d1dd0ec614482ddceacc747a20027daa4d3dd5c93cf58628fc192432e89d00dec0059fb6a2034ad5e335e54941df86fa6e3d693d75523782003f8fd03f246720505010000",
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
      "Tue, 14 Jul 2020 19:59:22 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-7-1594756748502",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d545d6f9b30147dcfaf40ec714d42081f49a5688d52baa64ac84648ab699a903186b9259862d32aaaf2df679b10c852757bc3f7de73eeb91fdcb78ea2a84f388bd44b450d71f25ca262f7e99184ea85f0200612e1f116bb45aedfe7af49f4f4f90ebc12fbce7693c9a48ac2124dc1364f519792b280885e6ed6bda420650e0a42ba9cb06b7707e6d8b04dcb3646a6a657508ad27881b32741f09bb19c5ef6fbb58c5e424892229063da83647bb4f75ff47e5e90470419ed9f66edf344b4ff61de2f29818061924d36eb4a43495111a02dc0a950d180a3f0ea94bd87c1b697f0e8170c118090941913ca2a1a48b218276521c939d31b3772b3947c7cb60ceada5938335f81242db75990812dba5022c040c07639526ebcd55299bb372b6f39f5e72b3758cf6e9de5b4375b2d364b77ad3cdc3a9ea33010a64862958972255f2e7f4845325b8428c399d4e40b6f4b09f71eda387f6780470a41c2555174080b6ccd028391360ee3d086f1686886b186c27014da2618861a1c1bc8884204da0c5259850719c98036d68743330e06b66e0446a819c1c8d6b5005811188ec38119db967a40ef8fb5bc1698a16b4c7342f1a1c9ea8337f79dc0f736ee6cea3bedba6350a6ecba527e5af549398c37a8adf4a3969c29ca0b4cb82839ceb9eb3bde74e6cfef5b32f86e2d5002e06efd2cb62b0629450d1a147c560c154b1289c1a8ee74e95c3760b929dfea20ca237e1e7536e5f040317f59cbd9fc4ff3f87cb14e5a51cda6b2aa6bdf9bbb5fd59673ff3ecd3d48cb77785e0e66d1c218a74dbf2455e7efaf5f9d560a95ffa90775eaf78de3fd1058e9131e0fc5a840196c92fec7e60a60e5fef71de2d1f55910007e198ee929e366fe0f41da248705aafe285cf5bd26b474cb1ed6841c58b0f3889169d51167a741e4425b94b1ba15d589a8fab83f9154b6e448983cd31bd73d8c70dfd977fe0086846605dd050000",
    ],
    [
      "ETag",
      "RLyLp2Vpwgdk+Jawo7J7Ng==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:22 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffc5954b8fda3010c7eff914c83d16546879b495f610ba748b141e0bd94b57089978929a75e2d47678ec8aef5edb094b2e5b455aa45c62cfcc7ffc53c6f2cc8bd368a0279a10f4bd813634fa9b81387e8840dd9bcd0264c694d44bca1309a869d4a07064d4b787df1f87fefef9d3f6cb7c730c275ec7ed1df63737b94a067f20c65af7a22d6d87141891da7eb476a3f0db5882633027069c6571b2b666f31256c7d48697fe623cbd2b47624e6c64fae079eed01ba122746abe0d2158e1b53df27d08bbae9c0286b67cb380100424015cfe3a157c0b811adbf24a1ca70c5a9267220059404c621e8e04cf522c386f69576bd0eaf4be7507bdfea0fbb5d7fe7c56331e60457962121e96e815afb8c26cc1f7a6c2a893cb91c8edbce2e752a0b07409e50ae9d0ce6453825e7da7e67f84e3a9dfef96b4c56ee594322b53432aa4caafbe1abdb8aa2be119ae93ae5f0a65b590234808885ad0345d63420448590f9ecb354ed38aece16ce65d8b8c1322382535d177b40e2a53bb8ad49fdeccbd625fd1edbeea9bbe75fdd1b5b052e9665f91eb8f27a3a5ef4ee66fc2f5777569f3c3a30239175c0f1109767474da7a480cfa6d741e453fb81935ca4c222532b0ee00eb91fc8b2aed0b3193e09c9c7fddda0ee2fe070000",
    ],
    [
      "ETag",
      "DxZ+BTwz/j3PbyfML1A5xw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT * FROM `profiles` ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
        types: [],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1594756748502",
    },
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
      "8d535b6f9b30147eefafb0d8dbd6045a20904ad596a564424a931548a73e35b631cc2d606a9b5651d5ff3e1b7221ead4ed0d7cce7739b7d713008c475aa5c6053010cd9f1ac2379f1e18324e75844898ebc8977839b25f788517a3d923abaadba7cd8bbcb9bcecb2688b16b0ac0b3210ace198888b553ccc396b6ac8191b28c2813f3873c78ee78e3cc777adf30e2a4891cd69f5a8097e4b598b0bd3dcd918e68ce50581351543cccafdbbf97c6ed69c3d102c8579ac6a2a21617ea8fbb560184acaaacb55dc796804e1f7a484b4d02e0ee0147d3b661f52580e7395fd4c318118b3a692da5947835995d1bce12db9627a558feab9b5bcffed3d1871300fa609f80c66d1f21aac5549192d88588365741544e0fb1d580ba90cacc1249e9e82354ddb2f300fafc3043860399bc54102ac56bea54e8990b46a0d241015a427aba2db9e857f99d69e4293400905d9a6dd7bd6089ef9d61865c8c3996fbb28b308423ef25c68230b8f1de2a488c03e83d4da1d1e56acb2708a2ddf766c07e1f13946bee763dfc2998bc7aee758a9e35a696665beb16578dbd7f3c2a9245754d44cd06d578d5f519804f749b45a4c2749d0af3d834d21af3af7c7951f95245593fa6e3f6acb3b4735a74c996ae7172e92209a4c93f0b667432dd39ce4106fe227bd4e192c0439a021872591845fb3540fc7f8b98cc3245c2e26f34e6a2b64a8bd4d36759b72b30aa23b1d6d633a12918c7052e1c378ff63b41ad885ff7d952a7b77241aa0ee642faf165252b564581cc43127ddcad1b275bc231cd99eedec081590cbf719fed8de65bc3b14ad454a52c95d2bba83d976eac852d3b3d3c274ba5a9145b8f8d19a3f793bf9030f43ec02eb040000",
    ],
    [
      "ETag",
      "+SO63wrncN6FkonnVqywtQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:23 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00",
      "00",
      "00",
      "02ffd557df6fda30107ee7af40d96bb1e2fc22995469a14d3b264a5b0ad3a4a9aadce4c8dc8638b30d6d55f57f9f63a0e5815566340f7b80e4cedfdd17ee3e5fcc73abddb6ee6999599fdbd62dcd7fcf813f7dca415ed6372310f3420a75a95829c03aa8d120495ea32f1faa09803d913fc2f87bf7fec4c1bdf4383f3c5ca244fa0b6644e19e95a5ec29852213cafea9edf6caafd74a32833a23cd74ecca2b9f2aeded0fc7c96932da5c9ab14c2f0d278341dc1b24d66ae9e5e0efc9a7940b79a3ad2d2457e3517f78ba2f47411aa75045a54573e9732833e0cde5a7d50dc9320e4234c8c1c40da9aa6d04bdf3f341120ff7652065c619cd1a6659d026b31772b12dfbc9e03c1eef9b3b2372eb16388ec7c9beb98524b3ad7519f7cf92ab717c7661c4a0afd7ad159775c76e4730050e650a6f43abe2ec0e52d9d7d35128de023a82cd790a6bf9d681cbe59cb3794538631de5ea841dec475ed70fba5ee8dbce1a5db09448caca3a607265bdd24b264931620ff580b4bce504e54b73392fd785b0a61b2374b33e6a69510763ebd5f572f00e2ee1140ca1df802f18158668b85bc2ed2ff0a82b865236338c3d2385e943611f395e17b921ea3a862192cf4db34f49214cb13ba475fc0861d3c7756cc7eed84ec7366d29467e68fb7e84232f8936625677d7ad8d0cc67a327dda2392d2c25852493d20cca029282cfe07319da857a5b19c1cdf45d80b908791635cf08654b24bdac8436eb0aba04c7baa0515784a521f2828d790fc948384c218cce6294bef0de179bec23b8deb0a6314aa4d8f6d845defbf1954411022d346bdcaca3440cbaaebe2e82365655adb784624319d694c8298329e19e249ba0e709bd6158e5c14a937a0ad3ea6fb7f87fe3703f5d44eb07755956963b5aa421cbaefaa4a7d5fbf9db87a4faa5f179ca9f39c007d8a8b02d75a1f088f58dd41599f07eb1fa9dd2951ff6bbf52a97c7aebb55e5a7f00c1ead0de430f0000",
    ],
    [
      "ETag",
      "QwpUee0UtX8AV7kF21BcDg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8e",
      "82",
      "30",
      "00",
      "00d0bb742d868f0acc8e22187f68252075d394521804e45308e064ee3e66de0dde0fa08c7121485f17fc05bec04c5573c996c7da80f2c8282955d50a7c58c9be23b03964232bac166efbc97d8b6b77c71a72cb6bf2b61076ed62e3490ab6d369c6f006096669d4da4f57d90f86fc3cedf40ec6424662dfcec2d322c9545ea14e3339ab48759e875179c4bb76588df9fd40592363c3896fe810915247935f3d8a6b82923555a7e212d65b7a1c63c7fd9656c79029c6c90fbcf2d29f838daaa74f64b565148005e05393775c90fc33d3d6a6b900ff4dd2cf0dff5c21a71defc0ef1f713491a305010000",
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
      "Tue, 14 Jul 2020 19:59:24 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-9-1594756748502",
    },
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
      "0002ff8d54db6e9b40107df75720fa1a1bdb016322598d659306c9c62dc68eaaaa42cb32904d304bd8c56d14f9dfbb0bbee03a4afb063373ce9cb9ecbcb514457d2659a4de286a489297128ad74f4f3454afa407384aa487509d6a0e5f0d56ebbbdeefe9ec295b3f96e3d1a88e22159aa14d9e429bd1b2c0c06e56cb4e52d0324705a56d41d8b6da3dc3d24d6360ea43a3dbafa10cd27846b26749f0c879ce6e34ed20a393509aa48072c23a986e8e766ddbd7f2823e01e64c3bcfaa89444cfb30efe79462c409cd46ab65ada1645004b04124952a4ee028bc3d67ef10b4e924227a4b30208c699971a9aca6c1348b49521615b9607a134661ae241f7f1b067569cfec89af609a969b2cc8d006ae94087114f0d71c943b6f31571cf76ee1cdc7beb37083e5e4de9e8f3b93c56c357797cac3bdedd90a47610a15561929b7d59f2b7e2a4555b608182759a5c997de8612e1ddb7d1796780470a49225431d887056677807ac3ae15c6a189e3e1b511c65d08c361681ae83aec624b073d0a0135192a65351e65341b7687160ea35e80869115e8863e082ceb5a0f7ad00f7b96a55b2618ea1ebd3bd6f2ab201ca684e594917d93d507cff1edc0f756ee64ecdbcdba6354a67c5a2b3faffaac1c2e1ad454fa514b2e14e505a14254354ec7f56d6f3cf19d754386d8ad192408bf2e5fe476c528657042a342cc8a4331a7911c8cea8ee7f6f404ae36e5eb218889881f479da77244a09c7f55cbc5fccff3f862b1ce5a51cfa6b6aa4bdf73dc2f6ac3b97b9f668dd2f21d9eedde2c5b1893f4d4af8aaaf5f7d7cf5623852a5eea5e9dfa6d657bdf25b6f2498f07311490e153d2ffd85c09acddffbe4322fa701624405c86637ac68559bc21cc4ec97101f58b2275df0f8403ddb0cc03a10016fc32c2ec5b87888bd32073c106327e68457d22ea3eeece24950d39154c868b57e0ee47b86bed5a7f0039162fe2dd050000",
    ],
    [
      "ETag",
      "io4o/ItU6UVF1xDLjnVhuA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:24 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ffc595df6bdb3010c7dffd5704ed3561c9c88f75d007bbcd3a839b74894b072304c53a7bea64c993e49450f2bf4f929dc62f1d8605fc62e9eebea70f3ea1bb57afd743bf2927e84b0fed68f6a70479f89081fe6e372b5025d3ca2c85e00a50dfaa41e3ccaa83e069ce6ef21f49c8e5edd3c77c72b7de29fffaba52a9e417e4d8e85e8d65ec940223cad83f9dddabfd2ec6710ef6c444b032e75b67f6cf617d285c781dafc2c55d33920be2228bc728f283688eead0b1ff3e84608db7eec8ff43b875e3d530f42c762b4841024fe0fcd78514cf90e8d09557e1bc603050a29409a81a6213ab702645596029c4c0b8065783d1e46a3c9b4c67e3cf93e1a7939a89046b2ab84d785ca337bc161ab39578b11546a34a8e646557153f9502a58d4b6856c884f6369b12f4e63bf6ff210c17f174dcd0d6bb8dd7c86c4d4da954babafa76f4faaa2e8467b84bba7929947542ce8013909da069b1c5844850aa1bbc505b5c142dd9c172195d8a8c399182928ee87bda0595e97d4bead768e95fb0af9876dff64ddffaf1fc5258a54db36fc98dc3fbf93af6ef1fde859befe6dce6838306f5208519220adce8180dcd90984d87e8348a6e841d35da4e222d4b70ee049b91fc8d6ae34b3153e01dbdbf8ea45c08fe070000",
    ],
    [
      "ETag",
      "BBWElCmXcInrDW/m5GSbsA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:25 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-10-1594756748502",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d54d96e9b40147df7578ce85b15db03c6c6b664a5ae4352246f059ca58be2015fe8249821cce02a8afcef1dc00b6ea2286f709773ce5de6bed410521e69bc52fa48f168f89441fafce98179ca59ee0141c2dc432ee79bf9f4e9f6ca32b3db1bcabc47955ae1605046d1229b937512419db32cf581f7174e234c59969094b1ba04acabb8aeb67bbad1ee187ab78db5329743148c69fc9823fc1122e1fd6673afa3113216464012ca1b3e5b1feccd8dd64c52f600bee0cd53daa664e2cdf789cf23e61341593c5838a5888c437a0f6b42a35cc6317be57d39856f50b26e84327a437d20becfb258e4d24a189fc5010db3b40097482fd228cd85e6c36fc5a038e6d81cb9e833bab46713b49435053402be4437df4cdb444b2e24fb12fdca306ec1009da3997d61dae8ebddc135744667684957c5171a5b13cb453a9a5d5e3aa68b7021aba05c0117342e84b9c48ba022477a77cdb4de98e3012207218270d885dd1bb843d42eee798167f841b7d5f6020c9ed7f58c366979d8efe9a0af3c205504917397f92466b1d62586aa7a24f03500e8ac02198e3dd03a7ad7e8f53443f3ba6d68e9bab243d81eeaf99b52011794278cd35db7951bdb72cd7bd75e4c4743d7acd61e902c1217a5fad3ca4f4a12b24955b5efb5e595a224a54c8a2ae66a4d5dd31e8e5cebba22432ed91842e23f3b4ff99a0524e270cc262959838074c256f97094f9ccb15c6b361d8e8f08c5deccf7915c86fd3c883dd65445739f93d351975328ad8a6b4d4cc71d4ee64ac5bf3d7b13e99a44d91b509b9d59d1b086eb58ab63dd55b5bedaeaab7a0363fce304baf6ffd7ef5a8552918f752758f9be30edbb3cb7f0e51e1b024821f68f223eb0b67962e9fec02d92e1fbcb9067c8e370e097af4d50f9827c7e64f75328df135d1792f7809d0e6e75f680323115af23b4567b1ff1ea3ae45cb08658ec7b515e89b291db134959454e919687cbfd9f5ad3ab427c6d5bfb0774994b16e2050000",
    ],
    [
      "ETag",
      "aFPvPNqXGIEuXWiobk1iIg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "57",
      "df",
      "6f",
      "da",
      "30",
      "10",
      "7e",
      "e7",
      "af",
      "40",
      "d96b89f29324932a0ddab465a3b403ba3d4c55e5c626989a38b50d2daafabfcf76a0e581554634da0324befbeebee0fb7c395e1acda6f5800b687d6d5af7387f5c20b6fa9223f153dd0c115f10c1e5a5a40547d69142230172859e3d4cf3b4fb58fcbe87edc745267e0d4fc2d5d3f17185e2d914cd81c4bdc8955c4f302290cbf51fbd6eaeedda578039521931d4b16bab5895dada1b8cd3f374b8ed9a53a85d839b7ebfd3eda7d6daf57af4efe413ccb8b8d3ab1d24a3f1b037383f948380da29e4a662525ffa1c1510b1faf2e3f20e40c810e73572507e07ca721741f7eaaa9f760687328002328a61cd2c4b5c67762296bbb29ff5af3ae343734320761e81d3ce383d34371760be735fc6bdcb7434ee5c5e1b31e8eb6d63cd65cde8fd104d10434586de9b56c9e80c65a2a7bb2397bc04b5385db00c6de4ab022b77cee8a2048cd29634b55ca7e586491085ed288843c7dbc009cd80c0b450113723eb8d5f5001c8903ea90e6905550b65d5b26a989b9db0265b3d747b83a46b5905bf995e8f3ec075e6400043ec0915884f28838678906d02fc6fe859ef9b9dd1b961f499ec71041982ddc4b713db0b1cf9691bc608b6304d5f0f348813db31c47a8ee7b41cafe59816d6b5c3d889ddd84f8234d98a59dfdd36b63218ab2a3424ef63662aaaef745a70218f82199cccd6f8a06e4985beedb6d52eda496218320184d7a0937dd2c69e7aec7d45655a572daac409a2cf1495e9d39ea2021b42",
      "471920d85481906b74587b8ff263dbf55ddb0d623b323dc635c9648fb45e245b6bbcafa24c8b5a292a71ddcf545464487e81486eaa921f04616e889d3e2870bb6e41c5a17cdbc5b65455685a9fffffce7322dbb8ddbca9c9b4a04a4dae1345e1876a92dfb7efe356772587946b46e534c7919ee192b66f6dc6c113aa2a28d434a87ea5366740feabbdc042daf4996bbc36fe02624215de410f0000",
    ],
    [
      "ETag",
      "jkhgEBqnWbd6quctVRC5yw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:26 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "db",
      "72",
      "43",
      "40",
      "0000d07fd9e7342394d03742ebd28888a05e769075dbc4b2d4653bfdf7667afee0fc8034cfd130c09160d48237b0a6bcb2cdb70e91356ebe4dd539f616e4ef9da5615116e0cb986486ba3bf025bd4044d4e07b66467c8d0e558bf5d8bab73ab58f93d52f02599d4771d093627f52b55140d8857cede2aeee6d9d95aa1399e238c49e5fee02a9b1c67c0ae70ff6e9496c8ec2aa580291c9f2179f0cb47d1fd8232386729d12455f6da295b7b3458fe69a112eb14de17e62d24b57b818f25cb3867e5f783dd7bc820d404b575334c0fa39134445d980ff261cd70e3daf1a4a29a2e0f70f0b5b320505010000",
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
      "Tue, 14 Jul 2020 19:59:26 GMT",
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
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      jobId: "grouparoo-job-11-1594756748502",
    },
  })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d545d6f9b30147dcfaf40ec714d423e80a452b446295d53256423245d354dc81843dd02a6b669d555f9efb34d3ec852557d837bef39f7dc736dbf35344d7fc479a49f6b7a8893a712d1d72f0f24d4cf64067190c84c16dedcdfad7fd9ee7842bb71df77be3efe5dbf8c465515566806b222454d464a0a113b5f2d5b0925650128214d41d8ec749a1d73d8b74dcbee0f4ca35b61194ae319ce1f25c33de7053b6fb7773a5a0921498a4081590b926c1f6f3f77db05250f0872d63e6edb169d58fbe3c6df520201c7241fad96958892211aa00ce054ca38a0a3f0e298be8541d64a44f53386084048ca9c4b69150d24798c93922a72c1f4268222ac34ef7f6b017de9cc9c89af419296591ee42043675a043808f86b81b42b6f31d7a6eed5c29b8ffde9c20d96936b673e6e4d16b3d5dc5d6ab7d78ee7681c842952586da45da83f57fc2845aa5b8418c7b9d2e4cb6c4d89c86e7d9cbeb3c23d852411aa18da9605b66181cec018867168c378d033c3d8406138086d13f442030efba81f8508d41994b20a0f7261546c9afd6e1c0726b4a2a0df03dd00a061144446278e0691615bb0a36fd19bfd2c2f14737489594118de9aacdf7a53df097c6fe54ec6be539f3b0665ca2f2be5c7531f8dc3854175a51f5972a2a8a09808516a9d53d777bcf1c49fae6b32c4d99aa104c0d7e5933c5d3148193aa00115bbe288ce492417a3bbe3b9737900ab93f26357c444c5efbdcec338a250ee5fcd72b2ffe33ebe3858475654bba9a2fad2f7a6ee77bd96dcbc4fb30669f90ecff3362c2d8c717af04b5135fefffad3a8b5d0c555ddaad37fae1cef4e62554e663c14238a727868fa89932b8155fa132f9128dfbd0b12219e867d7fc645585c22c80edd2145d595c295f13b42cb1a58c68e5000293fa9b03b666f5771f236c85e284339df7951bd1195919b2349654d8e82c972710ddced0e378d4de31f81e2514ce0050000",
    ],
    [
      "ETag",
      "mbJhYVX7NACr2f4TE+kzVw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "00",
      "00",
      "00000002ffc5954d6fe2301086eff915c87b2ca8a4e263b7520f61977691523ed3d30a21134f525327ceda0e155bf1dfd77642c9a555a422e5127b66def1a38ce59937a7d5422f3425e8b685b634fe9b83387c8b412dcc660932674aea25e3a904d4366a503836eaabedcba2b757d2db5d5dcb417ff7ef797e23177777854a86cf9060ad7bd396b6230a8c486dffb176abf4db588a133027869ce549bab166fb1c5687cc8657c172327da846124e6c64fae4fbdec81fa332746c7f0c2158e18d3df26b08bbae9d1286767cbb840804a4219cff3a137c07a19ad8f24a9c640c3a92e7220459424c62118e05cf332c38ef6857c7753b6eff476fd81f0c7bdffbdd9b939cf1102bca5393f1b442ef7cc515664bfe6a4a8cdc428e446117253fd50245955ba8964887f6269b12f4ee3bb63f114ea6c1a057d196bbb553c9ac4d8da890aab8fb7af4f2ae2e8467b849ba7e2a9435428e2125201a41d36c830911206533782e3738cb6ab247b3997f29324e89e0943444dfd326a84ced6b52effd9977c1bea2fb7ddd37fdcb0bc697c24aa5bb7d4d6e30791caf02ef71fe215c7fd7e7363f3a289073c1f51491606787dbd5436238e8a2d32cfac9cdac516614299183758758cfe4df54695f849904e7e8fc07708d2b3fff070000",
    ],
    [
      "ETag",
      "+bkQ4vtsAj+/s65jzhP2sQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:27 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
          "SELECT * FROM `profiles` WHERE `stamp` >= ? ORDER BY `stamp` ASC, `id` ASC LIMIT 4 OFFSET 0",
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
      jobId: "grouparoo-job-12-1594756748502",
    },
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
      "8d",
      "54",
      "d96e9b40147df7578ce85b15db0378c196acd475488aea25059c285d140f70a19362863083ab28f2bf77002fb889a2bcc15dce397799fbdc4048f94393401922c5a3d1630ed9d38707e62967850704890acf157c0d54e3ce1ddf32d1eb2ea71b63c6fdf1685445d1329b93751a4393b33cf3810f974e2bca589e928cb1a6046caa5a53ed0e3afd6eafdf31ba58ab7239c4e194267f0a84df42a47cd86eef75b422c6a218484a79cb67eb83bdbdd1da69c61ec017bc7d4adb964cbcfd36f179cc7c22284b464ba7129173c8ee614d685cc8386607dea753f81625eb5624a337d407e2fb2c4f4421ad82f15912d228cf4a7089f42c8dd25c6a3efcd60c8a634ecd898b3ea24b7b31432b59534863e02b74fbc5b44db4e242b2afd0cf1c631d46e81c2dec0bd3469fef0eaeb13339432b1a945f686acd2c1775d0e2f2d2315d844b592565005cd0a414e6122f869a1ce9dd35d37a658e0788028408c2611776dfc73da21a78e0855edf0f0dbdeb85183ccff0fa5da27bd81f74a0137840ea08a2e0aef249c292411743e819d803ac063a0e8d810e58d3431cea4677109250d37d4df7026587b03dd4f337a3022e284f19a7bb6e2bb7b6e59af7aebd9c4fc6ae59af3d24792c2e2af5a7959f94246493ea6adf6acb0b456946991455ced59abba63d9eb8d64d4d865cb22944c47f721e8b350b49cce1984d32b20601d98c05c57094eb8563b9d6623e9e1e11cabdb9de477219f6e320f658531dcd7d4a4f475d4da1b22aae35331d773cbb566afeedd9ab483724ce5f81daeccc8a8635dcc45a13f75d551baafa50edb430c6df4fa01bff7ffd6ad42815f9587782956f4bd3be2b724b5fe1b121840c12ff28e21d6b5b2456ee77dc2219bebf0c45863c0e077ef9da04952fc8e747763f83ea3dd17529790fd8eb1b",
      "466f0f281333f122c2c078b08f78711d0a2e584322f6bda8ae44d5c8ed89a4bc26a74c2bc2e5fecfadf95529beb16dfc0357e5b057e2050000",
    ],
    [
      "ETag",
      "GeKd18YTAWot65ULv8MscA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1594756748502"
  )
  .query({ location: "US" })
  .once()
  .reply(
    200,
    [
      "1f",
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
      "57",
      "df",
      "6f",
      "da30107ee7af40d96b89f29324932a0ddab465a3b4032a559aaaca2407756be2cc76e850d5ff7db68196075619d1682f84bbfbee3eb8fb7c989746b3693de122b7be36ad099efdae802dbfcc40fc546f86c02b22b87c94b4e0601d29340834536832b8e5a33466d96dc981f983e8fbe2267c3e3e5ea178f6007324712fd292f61403c9b9b47f69bbb9f6eb5881e6a02ae25ce7aebd62596a6f6f304ecfd3e176684e731d1adcf4fb9d6e3fb5d6a1d7a37f179f62c6c5bdb676908cc6c3dee0fc500e826aa7904dc5a4bef233287260f5d5c7e53dca73069cd7c841f93d2acb5d04ddabab7eda191cca808a9c519cd7ccb2c075562762b1abfa59ffaa333eb4768ec4ce2370da19a787d6e602cd77f665dcbb4c47e3cee5b511837ede35d65cd6239d0c610a0c8a0cde9756c9e82364a2a7b72397bc045a9c562c838d7c55e22a3c63b42a11a3b4255d2dd76bb9611244613b0ae2d0f13670423324302d54c6cdc87ae317542032a4cf6a435ac16a85b295b95a989b4e58d3ad1dbadd20195aa8e4c87a73bd1e7d80bb00324386d81f043037c43e3c2970fb1bfcd1fdb2333a37cc3c93bb8d8021380e6d2f88edd876c3d83045b0cab47a3dd0c0896c2734047b8ee7b41cafe5980ed4b5c3d875a248ca2e4db672d6efee1a5b158cd564dadb7360029bf6e1a49a60210cc1b34ca3a3ba05e57abeed85a1edfa8e549661d214116e4ab00f760f51c5816b077b8bca74ae5a546edb4f3e5354892179bf6204a0304477e5be04420cd164b282c775ebcaf35db9a3125b4a2bf03f7ffc7529b02d8f836f7a0cde64653a592d2b2f74fccf9495eb18b29f52261e9686e01e17d454823956e0a46e4905eab7cfb5db812d4fe6ffdd3efb94f5",
      "12c70e4d3fef4652c643d592f2fd76f4a1a4e4ebddfb85abbb14c0af1995f7390efa1697c8866e2e8427540d51a8fba0ea88766748feafbdc042faf4576fbc36fe02d073b732430f0000",
    ],
    [
      "ETag",
      "lNXsSE8rcXpser3N7JvU5w==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 14 Jul 2020 19:59:28 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-27=":443"; ma=2592000,h3-25=":443"; ma=2592000,h3-T050=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
