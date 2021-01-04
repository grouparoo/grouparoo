const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1609033226468";

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
      "516e82300000d0bbf45b4c0745717f804242456088223f04db0a14d486828266779fd9bbc17b8382102665dedf1b7603df602ad4d59cccb180d6e249c8f24b094218c85a68fa043d2eae15e62849ed4deb752f1da1d809172a965b7a1aa8bd8dd35b540e9b4e8a9f8ab7bbc250ddf19ee49aef9a34b3c52077461879bd6dae1596c71c17afc3e6b0e60ac702a9352afca365ca4bec796173b679961a7ab5bf288f36ca9aa1ec9cd17840cb874fe79a2bf812263d82e48834d764ea5ebb0ec1797a51a13bbba6df07c2354fd45e526cd05b4aca11467e0966808da2ee98cceb4f56d357ab19f89fe7fd24d8a76fb1a2631df8fd030f547d6718010000",
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
      "Sun, 27 Dec 2020 01:40:29 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 100 OFFSET 0",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1609033226468",
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
      "ff85525b4fdb3014fe2b91f74a9b4bafa98436da862d5a69459a32f1846ce7247349e2103bb00af5bfef38810a84046f89bfdbb93d937b5126644698c81e1aa80fdff6929133029a66f89ab9e5fd3ff7f760bf59fe2a76f342a8f9cdf0fafc1c19c2a8142daa1c7a4a36350735db6dfb592d9b8ad652f6d0a8e7f6dcb1e33b8381e78d87e329ca14e4e94a94f728feab75a566b6fd1addcfa4cc72a095507d2e8bd3bbfde8d9552df7c0b5b2df27da18a2ec4f33bfe792532d6479bedb627ea3a0be83828adcb4771226ecc77be7bea0453f43f2a3e04039974da94d5568c165998aaca95b57327b266d956f3ec83658058bd8128975196dae2c2c3e1539286b132d83c89adf1ae462bbb056e155185baee3589bcbcb6d105b0eda27a0b4285bf398b21c8cf14bfbe1c7991b01d5544107de4d9c3175a78ecf5236e1e9743062a9038c4dd9644407cce1fe108609038a3a6ddc5b152d65c9930977284dd8c8f3bc21f7c73e75137fca3c77e4a653df4b3cdf4f93f1841ccfc8532d342c85aaa412dd10c89f288c83bb38daad171771d0b691d226d7cbae38d3c4db3a353689a44ffa3a1a54484c32130dd771105d2ce2f026e896b8828cf2c3f601d798d25c01d271f9f1a1c27991eb5d10dd92ee2982146a28f9d77344720b7c75c2af0785543c294c511aff71695c990c5e43b73c51985a4e6adf1bf9a425d7fa03361a7a889d0ec9384201a57e69a83b28727c096bd4898420ce7c1dae7f22fa1ffa3f18bece030000",
    ],
    [
      "ETag",
      "g1nkx1K3jODHmUBmisBV4Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1609033226468"
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
      "ff65914153c2301085ffcb7a948e8562056638586504ed3052e5e47048dba516db6e4c521964f8ef6c8a07677249365fde262f2f47f82a9b1c269096c5778bea7055a059d92241dd5646f324a9d1083d40230a56fe86c5f58b8cb048fd58a6abf9cdea71f9bc9f4e59a1b34fac054c8eb02db1ca354c3e8ed0881ab9adcc59600ed2d68be5fbec699630a829b760b98ee3fb289ec16973eac18ed204b7a8b0c9d01e2615ed30330beb538b5a56e8696a55861a3a71b751286aa550441e13afeff5437fec07c160100ec311eb2aca8429a961e9fa0df81643465409edd925f47d56a8ae66c7db6efcb1bc33f49f0c1c123864e8905b87840eb973c8c8216387b073469bbfe7440783fa551147a3d1a6e25f127a209b9ae1348d6ab10799e09f9a97e6b23e9d01297944b706020000",
    ],
    [
      "ETag",
      "z6g+KpBegb0LpbQH/QDNJw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:29 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "08000000000002ff1dcf516e82300000d0bbf45b4c0745717f804242456088223f04db0a14d486828266779fd9bbc17b8382102665dedf1b7603df602ad4d59cccb180d6e249c8f24b094218c85a68fa043d2eae15e62849ed4deb752f1da1d809172a965b7a1aa8bd8dd35b540e9b4e8a9f8ab7bbc250ddf19ee49aef9a34b3c52077461879bd6dae1596c71c17afc3e6b0e60ac702a9352afca365ca4bec796173b679961a7ab5bf288f36ca9aa1ec9cd17840cb874fe79a2bf812263d82e48834d764ea5ebb0ec1797a51a13bbba6df07c2354fd45e526cd05b4aca11467e0966808da2ee98cceb4f56d357ab19f89fe7fd24d8a76fb1a2631df8fd030f547d6718010000",
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
      "Sun, 27 Dec 2020 01:40:29 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 100 OFFSET 9999",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1609033226468",
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
      "4f",
      "a34014fe2b64f6d59629b4f49234bbb5e286a4b611a81b9fcccc706047814166d034a6ff7d0fa05d8d89f689ce773bb717f220cb842c0897d96303f5e1c7bde2e48c806119be16ee26d84e2722cc6e1256af7cb9b93ea7d972890cd9aa342baa1c065a35b500bdd847c3ac564dc56aa50668347006238fcea9eb3a8e37f66628d390a71b593ea0f8af31955ed8f65bf430532acb8155520f852a4eeff6936357b5ba0761b4fd31d1c6106d7f99f933578219a9cae53ec2fc46437d0705933956f05f98f05f1f9d879215c30cc94f5200134235a569ab420ba1ca54664dddb992c50be9aa7cf741227fe3af634b26d665b8bbb2b0f854e6a0ad5d78e187d6f96d8baca2b5b509ae82d81a516aed2e2f233fb6e6f8c38404b49165e71f339e43ebfd3a81e0f3d85b01334c430fde4da9c746333ae7299f8a74e64e784a81f3199f4e98cba9988f619c7060a833ad7ba762a52ae96ce4399026545018a709d2a8eb098726e3f928c127e1ba7c3a7326e478469e6b69e042ea4a69d9cf81fc0983d8bf8bc3fd76bd8afdae8d9435b9b9e88b6b9b785fa7c12691f4455fc716950a93daa106dbd80f57eb38b8f1fb3d6e2063e2103de22653966b403aee3f3e54382f72bdf7c35bd23f8590420da5f87e8e48ee80efaef8eda6908a578529dae07f5c9ad06d86a8a15f9e2cda5aded42e75a8473a726d3e61930945ec744bad2314509ad786fa9b22c7d7b0469f4808e2ccb7c1f637a2ff0094eaf03ad1030000",
    ],
    [
      "ETag",
      "m3LIN75cRgVdarAEiLQB0g==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1609033226468"
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
      "ff2d8f414f83401085ffcb782d11a91221e9c11aa224a4a9689336c6c302032ec20eee2e6908e1bf3b5b7bda9937dfbe7933c38f5415c450c8e677443ddd3468df5c91a3193b6bf81948198415a0150d935844ed49ed6b1551571ffb07719b9e8ee7cd8609537e632f209ea196d85506e2cf1994e891bfc98a013b0dae4e771fc94b92b3d053e584dd21cb9eb65902cbd7b282968a1c6bd4a84a746683a6164b9bba9c46f443879ea1519768e0025f068da671109ac863c50bbcbbd08ffcf53a08c2fbf091b98e4a612529460fefc05b2c59d1e574e694e0c3b5df4e16cd5e137b1bacae13367c26b7d6721cab475c4129f8d45769fffbe50f0a8eafb747010000",
    ],
    [
      "ETag",
      "eb9jYnPfn9olfXm5a/IYXw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:30 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "000002ff1dcf4b7282300000d0bb642d8e1250d29da0c814b48255aa9b4c3441c1d6c4247c82d3bbd7e9bbc17b02723e33a5b0e63776076fc0101b0dcfc3588cfc495bac23e2587b8926cdcc9eb5d88a207fe093afa1caa7896587be6b8753cf5d887cbcf297b29caf8f9c37e9a67285d890aa46c9e3b3a1fd29eb826a27f825acd1414d0e19f2bae5f66ee6ba8dad08f5c19a3b51a2b3abedd163ba33729553e7b45884fbb6878112df3fd17c1b141561efc8e17971974e63e49ec66388616446351d919d3ae6bce228d3fa8b52dfe0384b615b7bcbfe7a293e9ae036bba6600058274ac9142e5f59e8223400ff73ac8d60afbecf886412fcfe01a9f921c618010000",
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
      "Sun, 27 Dec 2020 01:40:31 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 4 OFFSET 0",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1609033226468",
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
      "4fa34014fe2b64f6d596017a4f9add6ea586dd5a53a06bf4c5cc0c07769432c80c1a63fcef7b80dad598e81bcc773bb76772278b84cc0897d97d0dd5d3b75bc5c90901c3327c3dbbfe7d9d24260cb7e5c3a5bfdaee7e99cd74319f2343362acdf6650e3dadea4a809eeda27e56a9ba6495523d34ea793d6744a7d4f35c7734184d50a6214fd7b2b843f15f634a3db3edd7e87ea65496032ba5ee0bb53fbedb0fae5d56ea1684d1f6fb441b43b4fd69e6f75c0966a42ae6bb08f36b0dd50dec99ccb182ffc284ff78efdc976cdfcf90fc20053021545d98a62ab410aa48655657ad2b993d93b6ca371f24f2d7fe32b66462adc28b730b8b4f650edaba084ffdd0fa79d5208b6869ad83f320b606d6c56a15f9b145d13c016d64d15ac78ce7d0d81e9a0f3e4ebc1130c33474e0cd988e9833a1539ef2b14827de90a714389ff0f190799c8ae900060907863ad3b8b72a56a862c0452268ca12c71dbbc01d3af1c6e9505041b9eb7a23311e523a8229232f27e4b192064ea52e9596dd08c86518c4fe4d1cee36cb45ecb76da4accecd69575cd3c4db3a0d3689a44ffa7a6950a930a99967b089fd70b18c833f7eb7c235644c3c45f7b8c494e51a908eab8f9f4a9c17d9eefcf08a744f21a4504121be9e23925be0ab037e3d27a4e241618a36f88f4b13bac9101574cb93fba69657b5e778538fb4e4ca7cc086ae83d8f18c1a47d843610e0d75e7445e0e61b53e9210c4996f82cd19a2ff00e8eed8c5cc030000",
    ],
    [
      "ETag",
      "GZKZddtRRQpvWEFQUJtN9A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1609033226468"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff6590516f823010c7bfcbed551211c236121fd498cdc4908d6932b3f850cbc160c0615b3448fceebbe21e96f8d25e7ffdb5f76f7bf8c9eb044238e4d9b145d53d6468de6d11a36e4ba3796aa8d6082340233236bd637c926efa78f9acbac5f9b28976aa2a66d3291b5a7e632520ec21cdb14c34845f3dd4a2423e96272c98aeb1f52ada2c5f9631838a120ba2ed7a3d9baf9770dd5f4750d021c61415d612ed658da202a559d99c5a544d898ea65649d430c8c346a6a86d84227298389ee306e3e7b1e74d26811f3cb157921426a79ad5ed077017434694319d3925f82ca8a1e4c0e9309e18bb439eff647247bc3be25bb2ff6b30ef0cea37451c56a3cd39be655e907d87e1f719d5e208a4e0bf7bcdcd6d7dfd0501becfc998010000",
    ],
    [
      "ETag",
      "3qRvc1f7zXmyCwzTNYrmjA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:31 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "1dcfc96e82400000d07f99b31a028e32bdb10518d9c5825e080c836529b24d589afe7b4ddf1fbc1f901242c731995e356dc10758531e1dc8e1d271f269ceb5e75ef296a0182ba3e53b685d15641e193136eec86e2a141447930ad7827a6dbada3717f672d53bb508b707c32c9a4a5cf9feebcae72826fa60cc92a2787680693841977f087054eba7f2692d457889bf3c410b25c2d7d9ec5b7bc14f36868dfee46b0b546c6c8bee4051904538e7cfa50c5f62c98dceeca1a0e7c298f549674452d3eab838dfd8aa668de76c66457a223bc27dbe375cee3132831da04b570e744cca77568008edc0ff3c99d68ebefb324d073a80df3f6708d1d218010000",
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
      "Sun, 27 Dec 2020 01:40:32 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 4 OFFSET 4",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1609033226468",
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
      "02ff85525b4fa34014fe2b64f6716d99164a2f89d9ed851a925ab394baf1a999190e380a0c3283c618fffb1ec0763526fa06f3ddceed85dccb222633c265fa5043f5fce34e717246c0b0145fa1b8bd19954554af171732f7b370f1f33a4dcfcf91211b95667999414fabba12a067fb5d3fad545db24aa91e1af5dcdec0a353ea38c3a1e77a139469c8928d2cee517c6b4ca967b67d8ceea74aa519b052eabe50f9e9dd7e1cda65a5ee40186d7f4cb43144db5f66feca946046aae27cbfc3fc5a4375809cc90c2bf82f8cf9ef8fce7dc9f27e8ae447298009a1eac23455a185504522d3ba6a5dc9ec85b455befb203b7fe32f234bc6d63abcbab4b0f84466a0adab70e587d6e2a641e6bba5b5092e83c872adabf57ae7e3079ac7a08d2c5aeb88f10c1adbb7e683cf136f04cc300d1d7818538f0d2674ca133e16c9c419f18402e7133e1e3187533175c18d3930d499c6bd55b1421563c7e5d41d32ee8cbd9188a78e9b4c299d4e28a51e1dc4de808e87318d05793d234f9534b092ba545a7623207fc320f20f51b8df2ee791dfb691b03a33abaeb8a689f7751a6c12495ff4f5daa052615233cf601bf9e17c1905d77eb7c20da44c3cef1e708909cb34201d571f3d97382ff267ef8737a47b0a21810a0af1fd1c91dc02df1df0f19c908a078529dae03f2e4de8264354d02d4fe64d2d4735ea8794b4e4ca7cc29cd108b1d319358e904361de1aeace89bcbe85d5fa44421067be0db61788fe0300dcf7e5cc030000",
    ],
    [
      "ETag",
      "enhY5pnTuFBGimElRB+Vgg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1609033226468"
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
      "65",
      "90",
      "df",
      "4fc23010c7ff97f395457ecc894b7810438004090cd107c343d96eb3b0ed667b5317c2ffee75f860c24b7bfdf4d3deb73dc151970984b0d7d9678da6b9c990d7ae88d0d6395b992a2a2d4207905526e66b6a6fa7ebcde16d359d3db36f7ff4b1d764a3911836fec04241788254639e5808df4f50aa02e5984e44e0a672f57cf932994e220105250e2cb78bc5e3783181f3eedc8103ed234cd16019a3bbac3274c098e72ea7554595a367a936315a68e57623335457ca1079423cdfeb05dd87ee60d0ef077e30142fa758b1a652d4ed06a40b13ab3ca26f4909be08a62d2570da8e5f82efda3cff497045eeafc8d091dd5f8371c368578624ac4597b37bc9fc44ee1d2cef6353630762257f37d37c599f7f0164f1373598010000",
    ],
    [
      "ETag",
      "Vfs/GQSjWPGHMt4sxik1yg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:32 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
      "8b08000000000002ff1dcfc96e82400000d07f99b31a028e32bdb10518d9c5825e080c836529b24d589afe7b4ddf1fbc1f901242c731995e356dc10758531e1dc8e1d271f269ceb5e75ef296a0182ba3e53b685d15641e193136eec86e2a141447930ad7827a6dbada3717f672d53bb508b707c32c9a4a5cf9feebcae72826fa60cc92a2787680693841977f087054eba7f2692d457889bf3c410b25c2d7d9ec5b7bc14f36868dfee46b0b546c6c8bee4051904538e7cfa50c5f62c98dceeca1a0e7c298f549674452d3eab838dfd8aa668de76c66457a223bc27dbe375cee3132831da04b570e744cca77568008edc0ff3c99d68ebefb324d073a80df3f6708d1d218010000",
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
      "Sun, 27 Dec 2020 01:40:32 GMT",
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
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
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
        query: "SELECT id FROM profiles ORDER BY id ASC LIMIT 4 OFFSET 8",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1609033226468",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8552594fe33010fe2b91f79536698e5e52b50b25ac229522d2b42b9e90ed8cb386340eb103aa10ff7dc709744148f0d4d4f35d733c937b59e5644e982c1e5a680e3fee142327040c2df0b53cf03276abad5f87e94ee493b3dd6ec2ae170b4448cbd2745f9730d0aa6d38e8f976332c1ad5d6b4516a80428368301a7b332f087c7f1c8ea748d3508a95acee91fcd7985acf5df7cd7a58285594406ba9875ced8fefeea3efd68dba036eb4fbd1d14513ed7ee9f9b3549c1aa9aac57683fead86e616f6549698e03f3167bf3e2a0f25dd0f0b043f4a0e9473d556c6a64209ae2a218bb6e954c9fc997429df7d904dbc8a97992373e722bdba7430bc902568e72a3d8f53e7ecc6564e374b67955c2699133a5717179b3873ec7c72d046569d7446590956f6b5f9e4f3c42d811aaaa12fde4ebc311d4dbd19136cc2c5348898f080b1299b4434601e9f8510e60c28f28c55ef58b4525504a3681c84a11f89701c051032104c04231186b92f8260c6bc887131212f27e4a99106cea5ae9596fd08c89f34c9e2db2cddae97a759dcb521685b9af33e9c6de27d4e834d22e88bbe5e6c552a74b2f34cd6599c9e2eb36417f72b5c4141f961f3804b14b4d480705c7d76a8715ee47a1ba737a47f4a41400315ff7e8e08ee0adf1df0db3921140f0a5db4c1ffb834aead076fa05f9edcdb2c6fec20c05fd2811bf3a9e677cac733b28ab087cabc36d49f137979356bf51184459cf93a59ffc6ea3f9a80d10acc030000",
    ],
    [
      "ETag",
      "lyclE/nU2p4RVfd7BVV7bQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
nock("https://bigquery.googleapis.com:443", { encodedQueryParams: true })
  .get(
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1609033226468"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff4d90c16e82401086df657aaca488952889875a89353156a95eda785861442c307477b0258677ef2cf6d0cbeeecbfdfcc7ed92b7c666502011cb2f4ab46dddca5c81b5b4468ea9c8d6c159506a107c82a15922faf739c85dbf5c9ab1f7ede67e1fd70b4da4c264298f8848582e00ac70cf3c440f071855215286d5922003795ad17ab6d380f23090a4a6cb0da2d974fd36508edbeedc1990e111e516319a31d56693a63cc0beb695451e5e818aa758c063ab8bb4835d595d2448e24ced0e9fbeed81d0c3ccf7ff447c2e5142bcea81474f706f20a13ab3ca26fb1044f00dd95227cecd68bc4e3cee77fd2776db4ffeb9e368c66ad494c0c5a09f726f44c5692459e758d3d88957ccc4bc6b773fb0b14cd2dae75010000",
    ],
    [
      "ETag",
      "tvOGeDETPh2u/xZDE+58NQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Sun, 27 Dec 2020 01:40:33 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
      "SAMEORIGIN",
      "X-Content-Type-Options",
      "nosniff",
      "Alt-Svc",
      'h3-29=":443"; ma=2592000,h3-T051=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"',
      "Transfer-Encoding",
      "chunked",
    ]
  );
