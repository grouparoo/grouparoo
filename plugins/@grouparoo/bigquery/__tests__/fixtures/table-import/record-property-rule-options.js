const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631152720512";

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
      "000002ffedd3516e82300000d0bbf45b0c5a26b23f3b87188188d809fd690ab45805ed28a86876f7995d63be3bbc076079ceb5a6edf9c84fe01df46cec0cf3e14a4dd1fc2abb4366465b84652456a59fec54d5d160e37b224deae2665c16990b7b4446dc3bae02ea4d8d4947ed59a8a8c0e82a8c256965702745bc8e5c8b160ea9dc141f3ee6b29089a16ca3bd6d2266a7f17a5197ccc7a7b024977296a12fd6599ef79967917d32437df69489eb6f12b698ba105a728ba6505b67e637fc8e47cb0b0dd6d014a5799cecf502563b049bd9aecb445d457b9d267d1b07a21f6f480e872f2fff1718007e53b2e19acae776f8e63803f0579fb6bde2cfff88b38637e0e717183f7c6719040000",
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
      "Thu, 09 Sep 2021 01:58:40 GMT",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1631152720512",
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
      "000000000002ff85525b6fda3014fe2bc87b9b0ab9918420a10dd1b48b46e916c2a63e51db9ca46e439cc64e11abf8ef3b49e86d93da1714fcddceed91dc896243c68489ecbe866affe95632724240d30c5f7f4cebeffb4b5ba61acc9d33ba3afbf6e77cbe9b4c90211a95a2db3287be9275c5418d57cb4156c9baa495947d34ea5b7dcb732ccbb57ddb742d1b650af2742e8a3b14df685daab1613c450f3229b31c6829d480cbedf3bbf1601b65256f816b65bc4d34304419ef667ec925a75ac862b25a627eada05ac3968a1c2b78116ed8d7b7ce0341b7830cc90f8203e55cd6856eaa420b2e8b546475d5ba92f12369ab7cf54196e13c9c25bdcfbdb3f8f2a2775da2e30d55a0ae7bf3e8224a7a9689361b505a14ad4942590e8dc1b1cde8ffd93602aad1a403d7bee9516b64062c653e4f478ecb5213181b31dfa50e33793084e18601459d6edc5b152d64610f99c37c6a32ca53cf7547ae673a1b3f007f687ab6bd7102776805a9c7c8e184ec2aa1e154a8522ad1354b7ec75112ae9378b5984d93b06d23a575ae4fbbe29a265ed7a9b14924bdd3d7a14185c4a46672d12209e3e92c897e85ddb2e69051be5fdee3ba529a2b403a2e39d997382ff27315c657a47b8a21850a0afef11c91dc021f9dead3e120154f075394c6ffb834ae9a0c5e41b73cb16d6a79510781435a72a5ffc5f0d743ecf9601a47d842a18f0d7587430ec7b05a3d9310c4992fa2c539a27f0150565e64b6030000",
    ],
    [
      "ETag",
      "PAuKyO2ofte0w38YFHzGLw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631152720512"
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
      "946d6f9b3010c7bf8bf73644360f2120f505ed681729c9ba84689da66a72c024740453dbb48aa27cf71dac0a6473b2a56fe074dceffebe3b7c3bf4332b12e4a365b67aae98d87e5831f5a536664c56b992f02a792119ea21a6e80a22453c7ca0c9ede0265d045fd7e3676b123d7c5b5d5d41848cd76c4391bf4369c6f24422fffb0e1574c300cb120850dbb2b647d328bc0b67e0d8f0a4764c17e371703d0ed1be77004ac1d32c673f2e072b11af6973e4376c1ecd46d3bbf314ddf0aa502d733bfe1c44e79184aa8ec8c7200acfc74b4537650b44a349388f82c9bd8e7adcf7d0135fce58ca042b625637153af2c46235aae7252155ce0cc9a158265113dc7c58095e9554706e80c7200619588438a66b6287981097f398aa8c1710ba98c3e990e28ae633fe0ad342044384686c985cda3c5fc06f35651c5b7325e8eb9209b13db8cc3e6e6d6c62039b066e09d27786d8b588e7d9a1d794d8d5202deb5c2ad2616b11625903572fe2bebf920edb88783671b4228ea690a08471b5da7d62ffdd29e7b8531eb64f1461b6ec25021dae29c0c19ebe00e2bd53c03b123009b12dbd401b77223ff09a0e91e30e398e47b4f9dd7f9e5f9fff8f0963d7d53768a8f98bfe27fff0383fdccd1377a165ed4b043a5c2330189a87013cbe5df5ebad62f25e70581b92d51bc31bb8bff7c70daf770aec345f898af5504c619f7fca14f2539a4bb6ff05ae037e122d060000",
    ],
    [
      "ETag",
      "rc8XadF6CfUAWhLq3MTXYg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Thu, 09 Sep 2021 01:58:41 GMT",
      "Server",
      "ESF",
      "Cache-Control",
      "private",
      "X-XSS-Protection",
      "0",
      "X-Frame-Options",
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
      "02ffedd34b7282300000d0bb642d0e082a744740665084865823dd64a88d1f42319220864eef5ea7d7a8ef0eef1b94fb3d9392aa0b670d7801ba9c78e3fd78255c18f627ff33f63df1ba5d1628dc19199927ee664afb0dc16f3821f549d0665740e9c4812d899e1dfdc0aa914273a57a6e45cef20373c427b95840ddc2c68477974e56dbc08c73685c5dd759f1994dfc7759ebea427414098bea44de31d9901cdb376c053d09999966a47168b93d148b2f937a91e84e9587bbba8b23822ef343a52a248c2b7707c38106126bbe0cb39b361b3548d34aedd429925c1d93613d7e7afabfc008b0bb38b74cd2f363bb3df5bc11f8ab4f9516ecf11fb2b2652df8f90530c164f119040000",
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
      "Thu, 09 Sep 2021 01:58:41 GMT",
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
        query: "SELECT * FROM `purchases` LIMIT 10",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1631152720512",
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
      "9b",
      "30",
      "14",
      "fe",
      "2b91f73635e192002152b4552d9d58936c23a4d59e52db1c881b822936ada22aff7d0748b35695da37f0773bb767b2154542268489eca1866affe55e32724640d30c5fd30d2cdd2beff74f45e7b7d71bfffa666b6d9fa653648846a5e8aecca1af645d715093d5729055b22e6925651f8dfa76df728796e5d89e6d3a968d3205793a13c516c51bad4b35318c97e841266596032d851a70b93bbd1b8fb65156f21eb856c6db44034394f161e6b75c72aa852ca6ab25e6d70aaa35eca8c8b182ffc2847d7feb3c107437c890fc283850ce655de8a62ab4e0b248455657ad2b993c93b6ca571f6419cc828bb8f7b57715fd9af7ee4a74dc5005eaae370be761dcb34cb449406951b4263165393406c736c3f7b36d0454a34907ae3dd3a5d6d8f459ca3c9e8e870e4b4d606ccc3c870e99c9fd118c12061475ba716f55b490853d6243e65193519eba8e33765c7398783e7823d3b5ed64e83b23cb4f5d460e67e4a9121a2e852aa5125db3e4360ae3601d47abc5c5791cb46da4b4cef565575cd3c4eb3a353689a40ffa3a34a89098d44c2e5cc441747e11873741b7ac196494ef970fb8ae94e60a908e4b8ef725ce8bfc5905d15fd23d4590420505ff7c8e486e81cf4ef5e570908aa783294ae33f2e8dab268357d02d4fec9a5a4e6adb745dd2922bfd0eb3fc1162a783691c6107853e36d41d0e391cc36a75222188335f848b1f88fe03ef5da786b6030000",
    ],
    [
      "ETag",
      "fheS6F7PJsaMWKh9KVk1kw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1631152720512"
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
      "51",
      "6f",
      "da",
      "30",
      "10",
      "c7",
      "bf",
      "8bf758826c272104a90f74cb3a24a02d84a7a99a4c6268588853db19a288efbe4b5a91d01a36fa422e97fbdddf77876f877e27598c7a689e2c9f0b2eb75f965c3f94c684ab22d50a1eb9c814472dc4355b42a4f78287a3f4f96175b7a257ddd5d299f9576a737d0d112a7ae26b867a3bb448781a2bd4fbb943195b73c0921802f4362fedc1380c6e830938d6222e1de3d970d8bf190668df3a00b9148b24e5bf2e070b193db1eac86fd8349c0cc6b7e729b61645a66be6fbf0ae1f9e4762a61b22dffa61703e5e69b6ce6b201c8c8269d81fdd9ba8c77d0badc47cc2175cf22ce26553a1232b1ee941392f05a9526e2901c57285aae0eac3528a226752080b3c16b548c726c4a51ec52ea110978a88e94464103a9bc2e990169aa513b181692182214256364c6e51fdfe01bf5d95716c4db5649b3997727b70d136ae6d4cb185a9856b82b4dd2ef66ce2fb4ee05725363548cdba978a34d85284d876c7338b789fafa4c15622be435ca3886b28a49fc3b86aed36713e76ca3dee948f9d1345d09abd44a0c15505b8d8371740fc4f0af847029410c7360bd47127f2036fe81039ee90ebfac498dffbe7f9cdf9df4d187b9eb9415dc3bfe87ff2778ff3c3dd3c71176ad6b944a0c155029d2e3d0ce0f1edaadf6c3557f752c0da50bcdc18f8757b7c15e546818dd6d3b2e02d1431d8e63f12fdfabeff0b705e98bf2a060000",
    ],
    [
      "ETag",
      "7z0LMlqQjOj2+8jg4U9+sw==",
      "Content-Type",
      "application/json; charset=UTF-8",
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
