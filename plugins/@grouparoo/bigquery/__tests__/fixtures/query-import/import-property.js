const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1636475682424";

nock("https://www.googleapis.com:443", { encodedQueryParams: true })
  .post("/oauth2/v4/token", { grant_type: /.+/g, assertion: /.+/g })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffedd35b7282301400d0bde4db326010a57f12a4a4f8401e03f893411a10b48a37f1014ef75ea7dba8670fe781f2a2e0423079daf3237a475d3e349542f1da89e5dc2a3737bed229119a85dd62bf39acae3380c99d36e7fdbab50d8f05db251e93d88610efd6260b7dc9bb58238d9b0659906d8f63bca15d964535be8a69e01e9a7ec95c3de13e6d6220973a49030d6c0279e1dfc25da5ca440a0ce0ac2272dceae75ec58e37d7bffdabb7b03ba84b5ca8a21f89a1412e53522eb4b7c6f9a09f5534be6ce27c36313416362729b561c5cbd11c666bdaba25d7651f527ae81d5d7979f9bfd000f17b5b0317ac7e6ec723d31ca0bffa4c762d7ffeb7780e1cd0cf2fdd7dc1e219040000",
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
      "Tue, 09 Nov 2021 16:34:43 GMT",
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
        query: "SELECT first_name FROM test.records WHERE id = 1",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-1-1636475682424",
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
      "9b3014fe2bc87b6d02014242a468eb52da45ca529590557d8a6c73606e0153db248aaafef71da0cdda4d6adfc0dfeddc9ec883a85232234ce48f0da8e3977bc9c8190143737c55e1777f3db9595c5e3787ab47fa7099ee577787f91c19a255695ad6050cb46c14073ddb6e86b9924d4d959403341a8c06a3c00bfcc93898babeeba34c4391ad44f580e2dfc6d47a66dbafd1c35ccabc005a0b3de4b23cbddb7bd7ae95bc076eb4fd3ed1c6106d7f98f9b5909c1a21abf97683f98d06b583928a022bf82b4cd9b7f7ce4341cb618ee4bde04039974d65daaad082cb2a1379a33a57327b225d956f3ec8265a458bc4ca84d26657d112accbf8faa765409ba1022e55aaaddb1f511c5922b5e6d6084d53c444d559269415d0dabd34bdfc7fd2ad801aaaa107771327a0a3a913b28c4d7836f5c62c7380b1299b8ca9c71c1efae0a70c28ea4cebdea96825abd40d53d70b99e765633ff399437d3718f1803a2c9bb8cc4b9d74ecb2d025cf67e4a084810ba16ba945df3ab98d9749b44be2ed7a719e445d1b196d0a73d117d736f1b6ce760048faa0afe716151293da392ed749149f2f92e5afa85fdd0a72ca8f9b475c5e460b0d48c79527c71ae7456eb6517c47faa718325050f1cfe788e40ef8ec705fcf08a9784898a20dfee3d2b86e33b8827e79a26c6b39a9bdb03f7b4395f917f39dc043ec743ead239450999786fa3322cf2f618d3e9110c499af97eb2b44ff00f1963e1fc4030000",
    ],
    [
      "ETag",
      "r9B4N7QCFOuwGqakFdvLYw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:44 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1636475682424"
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
      "000002ff2d906f4bc3301087bfcbf9b605bbcd2985bd7032b438caecfea0c890b4bdd6ccb65793ebca18fbee5e3adf24f7bb3cc93de40c3fbac921845497bf1d9ad34d89fce68a046d57b195ada5c6227880ac4a21f3d7d5e63de2e3ba8e82b48877bd1a7fa87e3613c266df582b08cf5068ac720be1e7191a55a35c2bb4b1fc35040ff8d4bade7a9344f1b3e49a7297e3ed72f9385f2ee0b2bf7870a034c1020d3619ba375b4307cc3872ba56d56d85bea5ce646861808783d250d72a43e44bc70ffc603a9e4eeeefa60fa3c968225c4599624d8da0db35c81426565542bdc8422080194af12e86f528ed85d1e894f6fff4fcc468578664b24537f4f62af0444e8a45964d871e644afee345f3355ffe00f7c07c0b6c010000",
    ],
    [
      "ETag",
      "dKPTXItvSmI1bfNVwa3Yaw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:44 GMT",
      "Server",
      "ESF",
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
      "02ffedd3cd7643400040e1779975e2f80dd3a59228224a306c72744c1024824cd0d377afd3d768bef5ddde6f90624cfafe34dc2a72056f604a79c860c66a1575fb2c1f9d8bce21866afcd47c3472aded99bcecc84b948eaed3b1ad8e24a33e069ee4f81a1fee1aefceca5913bad10c3741f6a1b2bd98cf26e533ed4c7c837329c4c66d43a98384b576b0ed5d3ee717029390e3e1a5db2738209ca217d256392ab6c546872ca8e5774d6dbea23a437b544ed2208953d63ce22ac1639557d761740fad6e0f6bdda2456e209315e9a7293895468b940debe87e8bbd5d3c73897e645e5efe2fb002646ccb8ef4a772b95d90205c81bff54fc3d492e57f95a41de9c0cf2f3a6c6ea819040000",
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
      "Tue, 09 Nov 2021 16:34:44 GMT",
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
        query: "SELECT ltv FROM test.records WHERE id = 1",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1636475682424",
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
      "db",
      "30",
      "14",
      "fe",
      "2b",
      "91",
      "f74a9ba4cdad95aa8d95c02a41aba5e9d89e90ed9c642e691c6ca7ac43fcf79d24d08190e02df1773bb707722baa8c4c0913c55d03eaf0692b193921606881af3ecd8a507e5dacb6a72bf1f7e7c59fcd79c9ef6733648856a5e9ae2e61a065a338e8e9663d2c946c6aaaa41ca0d16034708371e0857e108dbc9187320d657e29aa5b14ff36a6d653db7e8e1e16521625d05ae82197bbe3bbbd1fd9b5925be046dbaf136d0cd1f6bb999f4bc9a911b29a6dd698df685037b0a3a2c40afe0b33f6e5b5f350d0ddb040f25e70a09ccba6326d5568c165958ba2519d2b993e90aeca171f641d5fc6f3d42acdde3a4f565796016d860ab85499b6aebfc5496c89cc9a592eba658889aaf34a292ba1f579ea76f176c4ad801aaaa1076f4227a06ee44c58ce429e47639fe50e3016b1d0a763e6f089075ec680a2ceb4ee9d8a56b28a78ee72e6f9d96494f9e0869ee7878e134559e60634e42e0f1c37089d09793c21f74a183813ba965af43d93eb6491c63769b259ce4fd3b86b23a74d69cefae2da265ed6d90e0049eff4f5d8a24262523bc0c5328d93d379baf811f73bbb8482f2c3fa0eb796d35203d271d7e9a1c67991ef9b38f945faa704725050f18fe788e40ef8e8629fef07a9784198a20dfee3d2b86e33b8827e7962d7d67254fbce784c3ab2326f30b7c38e77d33ac20e2af3d4507f3fe4f129acd147128238f3e5627981e83fed6d0ac8bd030000",
    ],
    [
      "ETag",
      "5adg7oBIOjAOizXGxUFlcw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1636475682424"
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
      "0002ff2d90514fc23010c7bfcbf9ba19996308090f4034982ca843a2d1f050ba630cb7dd686f3364e1bb7b1dbeb4f7bffedafba51dfce4550a13d8e5d9a94173bec990df5c91a06d0ab6b2d55459040f90552624ad3fcbf1aa3d84e9e8ebd42e77fa23b18bd9742a84d5072c154c3ad8e758a41626df1d54aa44b956702b049f6b179ee297d9bbc4925217579b389ecde347b86c2f1e1c6997e01e0d561add5bb5a1236a7e769a56957581bea5c668b4d0c3fd4166a8a99521f2a5e307fe20ba8fc2d1307a08c22014ae20ad38a74ad0cd1a640a13ab22a15f91848100a62fc577dfafadb483e1f8761038a9ed3f3f3f33da574332dba21b7b77555890d362d165d3a0075ac94f2c73bee6cb1f54fce4cb66010000",
    ],
    [
      "ETag",
      "oSXm9Nvh4d7ZqvHbcWRsCA==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:45 GMT",
      "Server",
      "ESF",
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
      "ed",
      "d3",
      "4b",
      "7282300000d0bb64ad0e828274271f9d5404411461c340080848880958a4d3bbd7e935eabbc3fb06094298f3b86b6b4cc0077826a23a43b354585f1ec2e8db15a5d63854a6e56981dcf5f940a153b44cf7914b908082cbd0414fdbe38cb029db22eaac08fc0c829050bb204ad1f8ee7d6a7ddd74d181aa2dedb348394b4f52dfc474582d1563c59a7dd74c4bcef9098b1783125e9ea89e4bf8ea2ac668f8d7a68ec23cb9eb9e4591b1b6e60ebbd96e7c84a6bcd8c1ac46e4111f06953ebc7e1b9949bfb117a72caa64373a6e9c309cd76131ca464ecb45b03bc787560cd3b1ca1d387b7bfb77c004e081960cf3b87c6d9796aa3a017ff5e3ee49f1ebbf86138619f8f905a9b2be0319040000",
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
      "Tue, 09 Nov 2021 16:34:45 GMT",
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
        query: "SELECT ios_app FROM test.records WHERE id = 1",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-3-1636475682424",
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
      "02ff85525b6f9b3014fe2bc87b6c1320e19648d116a56c8b94a61a21abf614d9e6c0dc02a6b6e91655fdef3b409bb5aad4be81bfdbb93d905b5167644e9828ee5a50c74f37929173028616f8ba3e2beacd45962d83abf4ef65a3e45959ed8bc50219a253695a35258cb46c15073ddfefc685926d43959423341a4d476e300dbcd00fa28937f150a6a1cc37a2be45f16f631a3db7ede7e871216551026d841e73599ddeedfb898dd137c08db65f27da18a2ed77333f9792532364bdd8ef30bfd5a00e5051516205ff8519fbf2da792c68352e907c2f3850ce655b9bae2ab4e0b2ce45d1aade95cc1f485fe58b0fb28b37f12ab584d407da34d6d7e4ead232a0cd5801972ad3d6f5f738892d91590bcb45c70c3151f77e296525745e4f1dafdf8eb9135043350ce0217402ea46ce8ce52ce47934f559ee0063110b7d3a650e9f79e0650c28ea4ce7deab682d6b67064ec061ca21ca32d70f67dc99792ccfa330f37c2f0a7c3e7123d7cdc9e339f9a384810ba11ba9c5d037b94ed6697c4893fd76b54ce3be8d9cb6a5b9188aeb9a785967370024bdd3d763870a8949dd10d7db344e96ab74fd331ef6b68182f2e3ee0e3797d35203d271dfe9b1c179911ffb38f94586a704725050f38fe788e41ef8e86a9f6f08a9784598a20dfee3d2b8ee32b8826179a2ea6a39a9fd601a919eaccc1b2c0c66889d6ea773840a6af3d4d07043e4f129acd527128238f3ed7afb0dd17f33f94acdc1030000",
    ],
    [
      "ETag",
      "I+gnLDddA6OTxMpro+lmUg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:45 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1636475682424"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d906f6bc2301087bfcbede55a98d5759be00b2bc2845237876f1c32627ad6b8b617f34729e277dfa5ee4d72f9e5b9dc43aef0abda12c6b053d5c9a3e91e2a749fa158a1f5b5b3bc696a2d4204e844c5a4384d67b8d1bedb257971a8178fcd5b7abe4c264c5879c046c0f80a7b85756961fc7d855634c86d8aec8fd09a29d7e91064cb653e9f161c345486a058e7f934cbe770dbde2238d26e857b34d84a0c2f6a4347946e1164ad68748db1256f245ae8e1fea232e4b530443127f1301ea4c374f4f29cbe26a364c45c4d5238452da3eb2fe0298e9ca857746155183060fa92adf7fd7ae6d8198f4169fb4f679d43fb6188275b0c439fee02330a528e6543470452f06fbc2b773fdffe005bb625c76a010000",
    ],
    [
      "ETag",
      "aqACeZpuyb2LNhlI+m96vw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:46 GMT",
      "Server",
      "ESF",
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
      "02ffedd34b7282300000d0bb64ad0c8650a14b109014a50af2db3021042b542a01e4d3e9ddebf41af5dde17d0342296bdbb4fbaa580d5ec144a02a50e1eda668e670995b2931e27363d579a79f723bcceef9b5d812dbdb6cee5d84af65f532fb7ecc6307e632eecb6398d06c8cd0a0e84b09cd5e081d682e310a30828db59126168c9fb6bfa27cb55364b613752d71735e2d73d521b48b2c63b5ebddbb6b3723b5b0e30d07aa6457427d19d5738f612817a258aea56d15b927d2ef3dbe3e444d8ad67b0796ba644eccb5c5c8f087ee8c51dd16f87d508f495cbbe5883e70d0084f4fff17580036de2e9cb5e9e5b15d92557501feeaa7dd74638fff1a239c71f0f30bd24bb11d19040000",
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
      "Tue, 09 Nov 2021 16:34:46 GMT",
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
          "SELECT first_name FROM test.records WHERE email = 'ejervois0@example.com'",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1636475682424",
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
      "5d",
      "4f",
      "db",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7c00b6dd2d649da4ad56090b14aacd5d27488a7ca766f32431207db614388ffbeeb043a10127b4b7cceb9e7dc8f47722beb3d99132e8bbb16f4c3a71bc5c93101cb0a7c5dd7b7179b6b302bd56cd6d9285a2fbf50512c16c8904e6558d5943030aad502cc7cbb19165ab50dd34a0db0d0800e46d124a271184dc7744c5166a0cc2f657d8be25fd63666eefb2fd6c342a9a204d6483314aa3abcfbf763bfd1ea068435fe5b471f4d8cffa1e7e7520966a5aa17db0dfab706f40e2a264b4cf04fb8e7276f2b0f25ab860592efa50026846a6beb526109a1ea5c16adeeaa92f923e952befa209be43239cbbc5c6a637735abc0fb9aaebf7b168c1d6a104aef8d77f52d4913af4be22dbc23b8412b254d70027fba20ceec08ddf6289275e795315e82f3799ec6f2fd0a9c805966a007777110b1d13498f19cc7229f4e429e07c0f994c7219bf040cc28d03d07863aebaa772a56ab3ae46ccaa3309ec593308828cd793e0b3815741686c14c8ca22818538827e4e998fcd6d2c2b9348d32b29f09b94a9759b2cbd2edeaec344bba3672d696f6bc0fe79a789dd34d06491ff4f5e450a9d0c90d78b9ca92f4f42c5bfe4cfa9d5e42c1c4c3e60eb79ab3d200d2f116b28706e7457e6c93f49af44f29e4a0a116ff9f23923be07f17fd725f48c50b431763f11f97268cf3101afae5c9ca6539a8233a1a938eaced3b2ca4116287bb7215a182da3e37d4df17797a366bcd818420ce7cb55c5d20fa1745e59dbedd030000",
    ],
    [
      "ETag",
      "OnkGSYesNopSOT16OIB4cg==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:46 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1636475682424"
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
      "90",
      "514fc23010c7bfcbf9ba45c13991840730444908d1b1f9a021a68cdb2c6ebbdade2048f6ddbd0e5fdafb5f7fedfdd2337ceb660763d8eaf2a7457bba2a915f7d91a06b2b76b2196a1c4200c8aa14323d98c3f6fd217e9b26c52f55261ba9ebf4389908e1f22fac158ccf5068ac760ec61f6768548d72add0d6f1671f02e093f1bd759a2c564f926bdaf9bcca96cbe96c39876ed305b0a76d82055a6c72f46f1a4b7bcc79e1759daa4d85a1a3d6e6e8a087fb83d2526b94250aa51346e120be8da3fbbb78348c86917015e58a353582666b90294cacaa848e220b03016c5f8a77d1af0769cfad46afb4f9a7672746f76249263bf4436f2e028fe4a55864d9b61840aee43f9e355f72f707497242dd6c010000",
    ],
    [
      "ETag",
      "TvpvbZ96VARfzolpU8a/Tw==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:46 GMT",
      "Server",
      "ESF",
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
      "02ffedd3516e82300000d0bbf4db1a0409b03f40080e514931203f4d65551a156aeba0d5ecee33bbc67c77784f409a864a89effd9976e00368627ad3669a723788c7f65a0dd7f60c5bd8d3920d9155186d0e59187b4e7cd1a53cb5150c2337c27b63a6c6682bf4f7cee879e7645ff78c740e9246bfba2ec30dea84da1a156e065be1d41aed0b458933c07913934c6667543ff46e31274e010996230bfdb57e50ba9c592a2f5685afe07cbb0c82aa168734dbfb353fd60f94f0c551b8c861a45fccb819f99fa64abab138656e3d2448c35b69a707ced6b7dcac715459f9a699bebdfd5f6002a8e24c5089d96bbb657bde04fcd5c777cde9eb7f4089a002fcfc026d3da39d19040000",
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
      "Tue, 09 Nov 2021 16:34:47 GMT",
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
          "SELECT ltv FROM test.records WHERE email = 'ejervois0@example.com'",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-5-1636475682424",
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
      "00000002ff85525d4fdb4010fc2bd6f58117123b8ee38f48518988db4685b4751c50fb82ee2e6bf7c0f199bb331f42fcf7eed9908290e0cdbe9dd9999ddd077225ea2d991226caeb16d4fda74bc9c82101434b7c3d9b2f687316c1f7c555791adefe0c57e77f46f3d90c11c2b234dd35150cb46c15073dddac87a5926d439594036c34980c46e1380ca24918fb811f204d43559c88fa0ac97f8d69f4d4759fa587a5946505b4117ac8e56effeedef86ea3e42570a3ddd78a2e8a68f75dcdcf95e4d40859cf366bd46f35a80bd85151a183ffc42d3b7add7928e86e5822f84670a09ccbb636d615b6e0b22e44d9aaae2b993e90cee58b0fb24e4fd2e3dca9cc8df325fb71ea18d066a8804bb5d5cef9b7344b9dce8233730ee01235a4d0de11dc750eacca01ca6c9124ea4e24a7ac022bf014c3f26df696400dd5d0172f222fa4a3d84b58c1225ec4e3092b3c602c66d1848e99c79300822d038a3c63bb772c5acb3aa27e5204dbc2e37ee187091bf9411c85312d269e374e123aa6118471e291c74372ab848185d08dd4a20f839c67cb3cbdc8b3cdea789ea7dd18056d2bb3e8cdd9215efab4c920e89db91e6d554854b2c92e57799acd8ff3e559da2ff3044acaefd7d7b8ce82561a108e4790df379817f9b549b3dfa47fcaa0000535ff38470477858f4ef9f9b0108aa7852adae03f2e8d6babc115f4cb133beb65cf8e46139f746065ded4fc30c4dafea06c47d8416d9e06ea0f8b3c3e89b57a0fc22266be5aaebe62f51f9e51d9e7d6030000",
    ],
    [
      "ETag",
      "VADapV7eKDkgM6wP6NWZ1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1636475682424"
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
      "0000000002ff2d904d6f83300c86ff8b772dd360c05aa41e68b58f4a681fac3d4c530f2918460b9825a615aafadfe7d05d12bfce93f851ce70a8da1c22d855e56f8f7ab829913f6c91a2e96b36b275d41a840920ab52c8f52aa5c3f0b50ac26298e9d3345dea67379ecf8530d90f360aa2331415d6b981e8fb0cad6a50aed57c148287ce86a7e42d5e4b6c28b7f1759324f1227984cbf632813ded522c50639ba17dabd3b4c78c5756d3a8a6abd131d4eb0c0d8cf078506aea3ba5891ce93881e386f7a1ff108453cff77ce16aca1457d40abaf90499c2c4aa4ee92492e00aa0c7527c8b713d4adb0b66b7ae67a5b6fffc626034ef9a64b6413bf6eeaab024abc5a2cbbac709644a7ee2a5e26bbefc01f481cca766010000",
    ],
    [
      "ETag",
      "TIRokyYI56fy9rw8RCrG1A==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:47 GMT",
      "Server",
      "ESF",
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
      "0000000002ffedd3516e82300000d0bbf4db1a0409b03f40080e514931203f4d65551a156aeba0d5ecee33bbc67c77784f409a864a89effd9976e00368627ad3669a723788c7f65a0dd7f60c5bd8d3920d9155186d0e59187b4e7cd1a53cb5150c2337c27b63a6c6682bf4f7cee879e7645ff78c740e9246bfba2ec30dea84da1a156e065be1d41aed0b458933c07913934c6667543ff46e31274e010996230bfdb57e50ba9c592a2f5685afe07cbb0c82aa168734dbfb353fd60f94f0c551b8c861a45fccb819f99fa64abab138656e3d2448c35b69a707ced6b7dcac715459f9a699bebdfd5f6002a8e24c5089d96bbb657bde04fcd5c777cde9eb7f4089a002fcfc026d3da39d19040000",
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
      "Tue, 09 Nov 2021 16:34:47 GMT",
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
          "SELECT ios_app FROM test.records WHERE email = 'ejervois0@example.com'",
        defaultDataset: { datasetId: "test" },
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1636475682424",
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
      "000000000002ff8552d14edb4010fc15ebfac00b89edd8b14da4a82070db48900ac729a22fd1dd796d0e1c9fb93b4329e2dfbb67430aad046ff6edccceecec3e921bd114644698a86e3b500f9fae2523fb040cadf0f5a74eefd75797f7ee8d7fb59e52c96455fd3e9fcf11212c4bd36d5bc348cb4e71d0b3f56a5c29d9b5544939c246a368e4474114c6d32899849310691aeaf254343748be32a6d533d77d911e57525635d056e83197dbddbb7b37715b25af811bedbe55745144bbef6a7eae25a746c866be5ea17ea7416d604b458d0efe120b76f8b6f358d0edb842f09de04039975d63ac2b6cc165538aaa537d57327b24bdcb571f64959ea6c7b923a4ded0b675be64dfcf1c03da8c1570a90aed5c7c4bb3d4e96d3873670fae51470aed1dc2afde8555da43a90249a2e98572ca6ab022cf512cfecfdf12a8a11a86e226f622ea27de012b59cccb2498b2d203c612164f69c03c7e10425830a0c833b67bcfa28d6c221a7b411007f1842650c4d8228280313f097dee4dd9a404eaf3302ec8d33eb957c2c089d0add46208845c648b3cdde4d97a797c94a7fd1825ed6a733298b343bcf6699341d03b733dd9aa90a864d35d2cf3343b3ace173fd261a1a75051feb0bac59596b4d680703c84fca1c5bcc8f93acd2ec9f09441090a1afe718e08ee0b1f9df3cb712114cf0b55b4c17f5c1ad756832b189627b6d6cb8e1d1f4c02d28395f9b796f8c1146bbba3b21d610b8d791e68382ef2f42cd6e91d088b98f972b1fc8ad53f1fdcbef9da030000",
    ],
    [
      "ETag",
      "ZsEwUhYw/k1hU5aoboggzQ==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:48 GMT",
      "Server",
      "ESF",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1636475682424"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff2d90616bc2301086ffcbede35a369dd621f8c10ed90645a7a3200c19b1bdb671692e26a943c4ffbe4bdd97e4f2e6b9dc432ef023750953d8cbfad8a13ddfd5e8d7a1d8a0eb9477bc19d20e2102f4a266f2d48c8fd57af29ae70f8dda1aa9a5b4f7ebd98c095734d80a985ea092a84a07d3af0b68d122b74972dfc218a6fcd984205dadb2c57cc9414b6508967996cdd36c01d7dd358203ed3758a1455d6078d1583a60e1df83ac13ad51183bea6c810e7ab8bfa82d754658a29893388907c953329a8c93e7e16838624e5121bc24cd68fe093cc593176a43bfac0a03066c5fb275d5af278ebded3028edfee9f4ecd17d58e2c90ec3d0c79bc00b0529cfb2a1238242f06fbc497f3b5fff000f2cea396a010000",
    ],
    [
      "ETag",
      "vh5qfQ7GUU/hlXpiniir+Q==",
      "Content-Type",
      "application/json; charset=UTF-8",
      "Vary",
      "Origin",
      "Vary",
      "X-Origin",
      "Vary",
      "Referer",
      "Content-Encoding",
      "gzip",
      "Date",
      "Tue, 09 Nov 2021 16:34:48 GMT",
      "Server",
      "ESF",
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
