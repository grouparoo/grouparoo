const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1613768604315";

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
      "000002ff1dcf4b7282300000d0bb64ad0e42d326dd81102911e533ca6793a118296024c3af40a777afd37783f703b23ce75dc7faa6e60ff00ee64cc59b7c43a562a0ef6bb1d85767967a7dc93dabf115fd4e9c319f42cd296ef51b93fb206a855d3d0a8c1c483ee3dda5aae3eac003795ed601197c14d257590d469df9c31695316bb7fb43a246e932ba67714cd9b428d4e96f26bdd1de56bcc4b28ff0ac7821de8f4c90b2ec112a6637c5a1c83ee8789293e6db76a61f20df355f2fd1713aa9168298dcddd65c42a80a3369a640f7724289eaaeddaa638125064d94d0d0c10af049962def58f9cc6a10e315f89fb37e96fcd93778d6f216fcfe01af76098d18010000",
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
      "Fri, 19 Feb 2021 21:03:27 GMT",
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
        query: 'SELECT "grouparoo" as message',
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1613768604315",
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
      "6b",
      "9b",
      "40",
      "18ff57caed6b13356a3481b09554865b0834311b8542b83b9f7397a867bcb3232bf9dff7a869da5268bfe9fdde9eb727b297654aa684c9ecd0407dfcb2538c5c133034c3d71f715697f9dc8a7e7abb7d1c1f16e65efcbb9bcd90215b95a64595c340aba6e6a0a79bf530ab5553d15aa9011a0d9c813376dc601c8e6dcf757c9469c8c542967b14ff31a6d253cb7a8e1e664a6539d04aea2157c5e5dd7a1c5955ad76c08db6de265a18a2ad0f33bfe68a53235539dbac31bfd1506fa1a032c70a5e8429fbf6d679286931cc90fc283950ce55539ab62ab4e0aa14326beace954c9f4857e5ab0fb28e16d13cb97a7809782057545f15a035cd003d52d046969d4342590eadfadc63fc7eb0ad801aaaa107b7813da64e684f98600117a1eb33610363210b7cea329b4f3cf052061475a675ef54b454e55888304dbd903a7e6adb6e2000528f8dbd097e8c26b6705dcec21085a76bf2b796066ea5ae94967da7e4f72a4ea26db2da2ce73749d4b52168939bdbbeb8b689d7751a6c12491ff4756a51a930a91d5bbc4ca2d5cd3c897f45fda61690517e5c1f705782e61a908e1b4e8e15ce8bdc6da2d53de99f5620a086927f3e472477c06777fa7c3548c5bbc1146df01f97c6759bc16be897278bb6968b3af0fd9074e4dabcc3826084d8e55a5a4728a034e786faab21a77358a32f240471e6cb78f91dd1ff03278689b3030000",
    ],
    [
      "ETag",
      "JIgrnlC/EK4jkIIqLtYfzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Feb 2021 21:03:27 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1613768604315"
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
      "414f83401085ffcb782d4949150d490fb669b486540b344d343d6c61a02030b8b3a884f0df9d450f5e766766dfbcf76507782f9a147c3817f94787babfcad1ec6d1122779561b95a6a18610668542eca570add4b1ac5d1fa3b8d8ff9a67c7a8eeafd72290a4e2e582bf007c80aac5206ff6d8046d5286b3532abdcfa98beb583280eb7bb07e96b4a6dbf3b04c1fd2ad8c0781a6750d239c40c3536095ac356538989d95a5656755ba1c3d4e9041926f1f4906bea5aa5891c9938aee37aeee2d6bbf3e6d70bf746741525ca14d488f41081a41832aa0ae94b48c115819e4a81cea6f3f3bfa7e53afdadac7a83fca249e2196df2fc97624d96cc08b1d11dce2051f2238f85013f5315e3f803918e265f6f010000",
    ],
    [
      "ETag",
      "ZoR1hdSTSCxdTWgEjJOSmQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Feb 2021 21:03:28 GMT",
      "Server",
      "ESF",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "select count(catalog_name) as __count from INFORMATION_SCHEMA.SCHEMATA",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1613768604315",
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
      "5d4fdb3014fd2b95f7b269b44949dba495d0d6956c0b8220da94694f91ed5e07431287d861ab50fffbae93d28190e0a9a9cf39f79cfbf148ee64b92133c26476df40bdfd70ab183922606886af67cde2af07c162fbd9bbf8161bb8be394bd4d5c90932a455695a5439f4b56a6a0e7ab65e0db25a3515ad95ea63a1fe717f38197afe2498b8236f384699865c9ccbf20ec537c6547ae6384fd6834ca92c075a493de0aa38bc3b0fc74e55ab5be0463b2f1d1d34d1ce9b9e5f72c5a991aa3c59afd0bfd150a75050996382ffc20dfbfab2f240d2629021f94172a09caba634361596e0aa14326beab62a993d9236e5b30fdb2486edb5a28fe84e7395a5252de0538fea5e9ab6404fd4aae845f1f7cbe5c53c892ee374b5f8195ecc07dd4f3247ab0d6823cbd628a12c076bb21f45f47afe5680661a3a30f5dd091d06ee9409e673117863265c602c60fe987acce5d3118c360c28ea8caddeaa68a9ca603a9cfa2ee3291c0b918e82314b036f14a4b0a1beebf209f58520bb23f2a796064ea5ae9496dd30c8af65948469b25cc78b7912b62d08dae4e6b40b661b789ed16083487aa3a79d45a542273bd9284ec2e57c9144d761b7cc73c828dfaeee719d82e61a908e47906c2b9c15b95a87cbdfa47b5a82801a4afefe0c91dc02ef9df2d36121154f0b5db4c1ffb830aead07afa15b9c2c6c96833af0028fb4e4dabcc2fc91c50e07652b4201a5d937b40acfc34542767bb3461f4808e2cce328fe81e83f379e9f46d6030000",
    ],
    [
      "ETag",
      "JuCx3e8Cy+3MBNteVhJToQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Feb 2021 21:03:28 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1613768604315"
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
      "ff2d90cb6ec2301045ff65ba256a5220a0482c4a1b15a4884280558590712669a89349fd2842887fef38edc61e5d1ffb1ef9065f755b4002a7bafa76a8af0f15da8d1f72344e59c35b47ad4118005a513199bd5ff6d362b17d35e375aa9af071addc62339b3161e4273602921b9435aac240f271835634c8d78e4749aeb54cd96be783e56a97bea539070d153e58edb3ec799ea5703fdc0770a6538e256a6c25fa173b4d679476e9658d683a858121a7251ae8e1fea0d2e43aa189024e82a7208aa3e1249ec6e168188d99532485ada96574bf056eb16485cae9c2aa1031a0fb91adcb7efde963f639fca3f3ab45b3d6c4b5067d63148ea6e3491cfe49bc9017b32c6cb5c30148c13fb2a82d24a55006efbfca167d1d6f010000",
    ],
    [
      "ETag",
      "LOwU8dHSDs5PElm0/PluHQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Feb 2021 21:03:29 GMT",
      "Server",
      "ESF",
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
      "0002ff1dcf4b7282300000d0bb64ad0e1f41d25d01150a36013b0a6c981403257c4cf908a1d3bbd7e9bbc1fb0124cb68dfa7c3bda22d7801822870936d3c2e99c694574e34a8b8341a1468bee2ed157493cf070e85abf6ae7df4e3c54a8458c4ee7aa9f55b775a7787b19527ea7d63de68a68f61215dc917a6a1b6be05269bb1334f2c518c878de13142de47148de7de41d44e3f9b71712b05eb7a43118b626d1af340ce0e8c97fb5783689cd47e54ef0cd7be5f2c642e4ed8e6163b2516eaf35a7d4b92fc512fc4dd86033b6feb0a67edf02e61b3801756c4a26c8262022b40675e76b44fcb6756d5205c81ff793a084e9f7d93928e76e0f70f6dc1eccb18010000",
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
      "Fri, 19 Feb 2021 21:03:29 GMT",
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
  .get("/bigquery/v2/projects/sample-sources/datasets/test/tables")
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffb5945d6bc2301486ff4b76bb8da41f495af0c2c22e04196c78313686a4f55833abed924871e27fdfa9a21773b0d2d5bbf2e6edc37938697764a9d733129354e79f1b30db1ba7d202c6da3a724bc0a91ccf96af5f556892f4e9d1d472588a973a4fd27a30c0c6a16d49fcb6fb1d8415dda456adaa02ee6cb93119d8d88175f79932f68478863918586740e21da94cf901991b5dbe88f59972cac2f1b0c19c0887e080dc63b2ad904426c364fc8085cc8072ba5c4ff4aa895918792c929c452c8ab0de61f64599d7ca383bdd58e8dde207bc8d0fa534e4924bdfebe683c3ce75017d9b9cb12d1ca4e441c87c4f7ae1ff1c18bd920582db7808217c2e032a69470f7c5ee034bd2fe3cc6dbd8d5044ace3368ed9f45a3217f8bf9d38f5b8cf7c11044c7474aa4afc2cfb3639425bdd2cd95c2b8f0bdcc93bf64ba78a918315fe80c5fe1b9bf784bfcb050000",
    ],
    [
      "ETag",
      "kZzp5rBbQNrw8Ao7XwgBbw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Feb 2021 21:03:29 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-3-1613768604315",
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
      "f795b6e9d2f42555a36a03746bd391a620344d91e3dc6466495c62a783a1fef75d3b948190e0536cdf73ee39f79147f29b9709199398677735540f9f6e454c4e08289ae1ebb7fb0cbeb28e7b93cccffe9e1772cfe9bd7b399920826b96a4c52e87961475c5408eb79b7656897a472b215a98a8e5b4bafdae33e80ffb76cfe9ba489390a74b5efe46f22fa57672dce91ca5db9910590e74c7659b89e2f9bdb3ffdcd955e21698929dd78a1d14919d7735bfe48251c54539d96e50bf96504550509ea383ffc4243e7d9db9cd69d1ce10bce70c2863a22e957685299828539ed595c94ac68fc4b87c71201b6fe9cd428b89bc2ecaa8a4059c58095534520f3bb0ce82f5ca5af867eb60350d176b3fdacc2ebcd5b43d5b2fb72b7f635d5f788167291ae760b8d6c43a35371f2fa89f8054bc34eaa17ed6ca4ffd59bc1d8a26a0b48426180dec3eed0eed519cc603960e1d374e6d88e3613c70a913db6cd4835e1203459e11352c5a8a9225bd11b5538886091d44bd5e2f8d860e75a22475604061e4ba34268713f2a7e20ae65cee84e44d87c875b008bd280cb6fe6c1a7aa68494d6b99a37c674012f3d2a2c1041efd474d0512e5049b77be1875e309d858b2baf99f01232ca1e367738e394e612104d2b6c9e826a25126c18f1a72b6f8e6033b1efc7a024e31f8f44f75cbb78d1f2677a8803d47695f9924d182cfc7363e788b8a2796d20fbe6a0cb4879ae4d1f7e221057b449422eb75e70439aa70052a8a0641f0f13c126f0d18f765c7b84e2e2a38a5478c7cd61526bb00a9a0de2a6d823bb6bdbae4d0cb8526f62ce6874ec99cea1334201a57a2a",
      "a8597bacb311abe5330883387cdff4eaf00fd40e1c6274040000",
    ],
    [
      "ETag",
      "KxgeJc/5YdDFzGmsviax5Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Feb 2021 21:03:30 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1613768604315"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93616f9b400c86ff8bf7956861496986d40f49976d483469132a559aaae8ca1976e981d9dd91298af2dfe7a35d56b593e817b0cd639d5fdfcb011e552d21860755fe6ad1ec3f94e86e7cb042db6a67f9d5506d110240274a26cbedddf6b34edae2ee713cfbd85ed224b7f39b8b0b266cfe132b01f1010a855a5a887f1ca01615725b4ebaadea4d9705e0f68d2faeb355b2f8c67945d2e78bdb349dced2391c8353a3144e6c3afe1d6df7c700b6f4b0c2020dd639fa591a435bcc5de2655a51351a07965a93a3850eee3e9486da4618a2015706a3411885a3f368120dc7a3f08c394db9708a6a466fd73c1e387242afe8378b84f01313a68b5970d13d775c57b213e2c3649145e36ebe9740a18c754f3bf90b3e6b7b4d6af14e902f40e93ea8c45aa2e9a354b311521ab4b69724bb114d73c266cb65fa0612b534a4643fb8533d8076bb13f0355d4effb75ab6cdbf5d7d9966f33784756c8613922557f37536bdbaf6dcfdf3fdcef60eedb521f68a456f9370389e9c9d47c327e75c9277139f133bd36200b9e01fe0bb721017425b3cfe0178a677ca5e030000",
    ],
    [
      "ETag",
      "gjXj9lIufXk4B/uCo8csEQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Fri, 19 Feb 2021 21:03:31 GMT",
      "Server",
      "ESF",
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
