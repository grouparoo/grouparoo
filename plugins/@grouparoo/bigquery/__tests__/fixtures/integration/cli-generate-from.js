const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201464983";

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
      "4d",
      "72",
      "82",
      "30",
      "18",
      "00d0bb642d0e204ad29d40512430fe404536cc678c48b0220454e8f4ee757a84f77e1030c6a5ccdaaae437f4817ad0c9988d8fea3c79a843b4b68689e23f73e8b599cc379b4748d4d824d8e8663469e63b463f2d920ea75a4da4ebeff166113ab9e61d8ffbdcd584591b1df5e0e6cbf451446588ebb5b2d36c9ec44ca8f56aae440b5db0d0c1f73458766781318481b7c86eacafe24a17cad740ede65541a40f87b54f418b8b689ac8a517974a4369e7e07c88b7f6c172c084cb05bc607535723762c6b54bcd93475a3fc47b179f85538aef53bd042393f0cc40a211e2af7bd17099156ff7644ac808fd27646d7fe7ef098b43c31bf4fb0710c9c8a823010000",
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
      "Wed, 22 Dec 2021 19:31:11 GMT",
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
      jobId: "grouparoo-job-1-1640201464983",
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
      "db",
      "6a",
      "db4010fd95b07d8dadfbcd605ae3a8c5600c91e59642c0ecae46ea269256d1ae524cf0bf6724d94e4220799376ce65cecc3c93075167644698281e3b680fdfee2523d704342df0d56edc6c99489e39f9cf76b9e6b77aa1d9623e4784e8598a564d091325bb96839aedb6d3a2955d435b29272834b12696ef9ab669b9be1b850ed21494f95ad40f48fea775a3668671b69e16521625d046a82997d5e5dd78b28da695f7c0b532de3b1a68a28c4f3dbf9792532d643ddf6dd1bf53d0eea1a2a2c40e5e8919fbf15e792a68352d10fc243850ce6557ebbe2b94e0b2ce45d1b5832a993d93a1cb371f641bafe3657a75f76a7047aea8baaa40295a006a64a0b4a8078594b2127af629e3eae3607b02d554c158dc07a64fadd08c58ce029e878ec77213180b59e05187993c72c1cd1850e4e95e7d60d15ad6a107969745e047aeef9b7614b290a28819665610d921b77cdff12844e4784dfeb742c38d508d54624c4afe24ab34dea7c96eb35ca4f11023a75da96fc6e6fa106ffbd418726f9a16023fc976ecab42a25b3fbad5268d93c5325dfd8ec76dada1a0fcb07dc47de5b4548070dc727a687066e47617277fc9f894400e2dd4fceb592278287c75abe7cb4128de0eba288dffb838ae7a0fdec2b84051f5bd9cd981e544c3a56bdaea0f35cf0eb076b9985e112aa8f529d07839e47832ebd40584459cfb66b5f985d5174d75a2c7b7030000",
    ],
    [
      "ETag",
      "2p4dCRocd3fFrCLcQtAtbA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:11 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201464983"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff4d90416f82401085ffcbf40a09b4d42a89076d1a6a638c624d6c1a0f2b0c880586ee2c35c4f0df3b8b3df4b23b33fbe6bd2f7b85afa24e218463917fb7a8bbbb1ccdc61631725b1a96aba19a111c40a3725106fb4bf438fe884eecadf66fd5ec32593ff99be954149c9cb052105e212bb04c19c2cf2bd4aa4259ab9059e5d6c7748d1d6cdfe3c52a92bea2d4f6abdd72399b2f5fa03ff40e9ce91863861aeb04ad61a3e98c89595856565553a2cbd4ea041906f1f0906b6a1ba5895c99b8beeb8f02efdef3835130193f88aea44499826a91eeb62029868c2a63ba0829f822d04329d0d970fefcf7b45c87bf95796790d79a249ed1267b378a67b26446888d6ed18144c98fbc16e6d6f7bf9090dfd86e010000",
    ],
    [
      "ETag",
      "4XwG58YGhs0NXJmAw9P71Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:11 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-2-1640201464983",
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
      "2b91f7b2494d2021851029daa294766829d508d9b4bd20db3950b780a96dba6655fffb0ed066ed26b54f9873becbb9dd936b51edc89c3091df34a0f6efae242347040ccd317ab7d277bf9dd39fe597e44c5d4627b251f5e972b1408468599a967501438d710e7abedd8c72259b9a2a298728349c0cc7eed49ed8e3a93bf5670ed23414d95a54d748be34a6d673cb7ab21ee552e605d05ae81197e5216edd4eac5ac92be0465b2f1d2d34d1d6ab9e1f0bc9a911b25a6c37e8df68502994541458c15fe28e7d7aa93c12b41ce508be151c28e7b2a94c5b154a705965226f54a74ae6f7a4abf2d9a36d128b1d74a4f7e84e0b99a7152de1c380ea419a768941a6643908a3d38bf87c99841751ba597d0ece97a3fe932cd16a07da88aa334a282ba035791c45f8fffc5b029a69e893a967bb743cb37d96318f6733e7986536303663de317598cdfd294c770c28f24cabdeb16825ab31751d77e23ae984fb593a75322ff5671e4b7d17a8e7f928eb7ae4e188fc52c2c089d0b5d4a21f06f91e87499026f1365a2d93a06b21a34d614efac2da069ed768b0c1d4b6c7087ca5af87362b24bab5d30da3248897ab24fc16f40b5d434ef97e73832bcd68a101e17808c9bec67991afdb20fe41fa500c1928a8f8db7344709778eb9c9f8e0ba1785ee8a20dfee3d2b86e3db8827e79a26c6b79627b63dff3480756e6dfdcc4ee940f47d52a420995796c6813ac8355421e1ecd1a7d006112e71e85d11966ff00b42b820fda030000",
    ],
    [
      "ETag",
      "xCsxz3FZmKTGrhNDourpFA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:12 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640201464983"
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
      "00000002ff2d905d4fc2301486ffcbf112966c3011977021ba28094118909818424a773687db4eed874a08ff9dd3e94d7bf2f669df273dc367d5e690c0a12abf1cead34d8976e5870c8dabade14d516b10fa8056944cf6d69bf16b7cd8fcbea965af87abb07872aa9c4c9830f2031b01c9198a0aebdc40f27e865634c8d7f67b49aeb54cd993f2c16cb1499fd38c8386721f2cb6f3f9c3749ec26577e9c3910e1916a8b195e85f549a8e28edcccb1ad1a81a03434e4b34d0c1dd41a9c929a189024e8241108de2701046f128be1f0f99ab490a5b51cbe8760ddc62c98a3aa31f56858801dd8d6c5d74eb37c743efb3fb47a7278b66a9896b0dfac6288cc7b777a3f04fe291bc986561ab1df6410afe9197ca425288dae0e50a82cbd1196f010000",
    ],
    [
      "ETag",
      "+ST8O4bTxXpP++eQ0fDupg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:12 GMT",
      "Server",
      "ESF",
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
      "72",
      "82",
      "300000d0bb646d9da85193eec41fad60fd6088dd64428c40b0110950a0d3bbd7e911defb01424a652d2fef9932e015b46248fab21fc119ab61176cdd97ab96f376b2ac759ea4c1e4260ae36ed7b56edc4f78c0323e62515794ad70063da22f6f7bbd60dc40a5fcd86b3d849be39944b46671199f76c679304be40625387e3959b4c89b85ff70d8fbda8c7515cafb05eedd837b0da15c89815dea107ff0f90027d4afa351d3b97ad0f27c039da83ba7631a4d673e4f8a3c0bfc60772368e3d87db8a6c847e284235392659251b6355f673add75aba185cab3df1544950f7a4035795a28cbd3a77b3426a407fe1378d9e6ea39e12851a802fcfe014a1b331723010000",
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
      "Wed, 22 Dec 2021 19:31:12 GMT",
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
      "00000002ffb591c16ac2401086df657ab5259b44d180870a16949462f12645d6cd54d726bbdbddc92184bcbba36de8a11ea4d0e3fcf3cd073fd3c287360564b0d3fbcf1a7d7347725762ae03c10090e49e77b6890f4f63e99ff3e5c41deb66999a17b39a4e99b8d001b24d7b5dc4883ea74156aec4fb606baf30648481b651241e1ccf071958f1ed7ac577f4681442d682f3f6888a16bf0d8c1792f8f06bd9fb7acb25fc71771c378e95b07e9ce573a6944749da9ab5aeceb118a5511c8964928a2465fc8f6d3c2aeb8bffe8d29b6f6e3216c36102dd1bf39664b920acf84d7177022aeef7c4f1010000",
    ],
    [
      "ETag",
      "oy2hF8arMLJ9pjuyJ4nOnQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:12 GMT",
      "Server",
      "ESF",
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
      jobId: "grouparoo-job-3-1640201464983",
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
      "c8fbda2424a1e421456b94d2355b4236425a75d3848cb930b780a96d3a4555fefb2ea6e95a556a3f61fb9e73cfb90f1ec91d2f13322531cfee6b90fb4fb72226270434cdf0f5db9d286e13f9f3e67a77b15f9f7ebdfc5309399fcd10c11b96a245954347895a3250d3ddb69b495157540ad1c1449d61a7ef3af6c0ee3bae33190f91a6204f57bcbc43f21fad2b35edf58ed2dd4c882c075a71d565a2787eef3d0c7a9514b7c0b4eabd56eca188eabdabf939178c6a2ecad96e8bfab502194141798e0efe1393f8ec75e62ea7453743f0036740191375a91b5798828932e5592d4d56327d24c6e58b03d97a2b6f115a4ce4755146252de0c44aa8a691de57605d049bb5b5f42f36c17a1e2e377eb45d5c7aeb7977b159edd6fed6babef402cfd234cec170ad9975666e3e5e503f01a57969d4c3e6b9517eeacff2ed501a024a2b6883d1c876697f6c4fe2341eb1743c3c8d531be2781c8f4ee930b6d9c40127898122cf881a162d45d99f0c20ed3b4e341a2583c8495c27a2d4a5919bd053db49993b8a87e47042fe4aaee19cab4a28de76885c07cbd08bc260e72fe6a1674a48699debf3d65853c04b8f1a0b8c6cbb8fc077ea3a34512e50ad69f9d20fbd60be0897575e3be5156494edb7f738e794e60a104d253650835c8b049b46fcf9da3b47b099daf7635091e9af47d2f4bd71f2a2edcff41087d858d6e64bb661b0f4bf183b47c415cd6b0379680f4402133241cf87df88c32d6d73901f3b2fb821ed5300294828d9c7f344b0097cf4af1d371fa1b8fba8a234de7179986a3498847689b8a9f5c81e0dfb039718b0d46f6283c9f0d8b2264793110a28f55341ede6639dad58ad9e4118c4f9fba6",
      "55877fb3a4f56477040000",
    ],
    [
      "ETag",
      "KkomjdrZYWUFyM5JHhporA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:13 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1640201464983"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d93614fdb301086ff8bf99a4ae9081d8bc48716525629b4ac0d9aa60945c6be043327e7d94ea7aaea7fe71c58378d49e14b72777e4eb97bfd66cf7ea856b2943da8fa670776775283ff128235b84e7b472f83ad031631f0bc26b23659ac0cff1a9bf9b75d36aff2eb475fd417174438f1080d67e99e550ab4742cfdbe672d6f80da04eaae69cb3e8b98df9950dc14ebc5f29af20665c89777793e9de5193b44c746c93d2f7bfe1d6df787883de1c31a2ab0d00a08b3188b4f20fc22ace97863348c1c765680633ddc1fd4163bc32de2882aa3d3d17892c41fe27132493e9d9f12a75170afb025f46e43e3318f9eeb35fea225d93810b68f69e1aa7f6ea9ae64bf480817cb6292f4f3fd0d7021b06b7d390856ca3aff22de6ff055847f49cddf09d24d293d04d5d04ab04394322597d282738324ba921b73c466ab55fe5695565a547218dcaa0140fbed1198e7abe9ffa4257ffdd1ea6a5a646f08e7c93547a458dc649b627a731bb8fb5723cc761edcad45329583e0a7719c9c9f7d9cc42f16bbc4603bfa4eea6d0711139cfe94cfcab3b4e2dac1e119ddb78fea87030000",
    ],
    [
      "ETag",
      "gpE0ipaW0pFYyEFfLGhtTg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Wed, 22 Dec 2021 19:31:13 GMT",
      "Server",
      "ESF",
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
