const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1640201498035";

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
      "0002ff1dd0d97282301400d07fc9b33a6040a16fb1a20d4b1444adbc3029dccaa2080464e9f4dfebf413cef9413c8a4088b079e450a03734f0b93e8b665f12f97c4aa3cf5c41a7ced43dd06c77310f812b1b7e07ea49dae78f73cccdcc16379f90ddbd60e3c7e6ae99cb2e59df3cd58cb3ed7b68e4ec724c452b8d7c002d1b2599b85d10db4a7437168cb2b381ebe449e215dd2ecbc526d06c9db77ddaa7d800c2bc93e91dc274bd597b736d946fb2161b7e7982d2aac0e35534447b07275ead2a4176c457a7a93b0b536bd94acc6dbe4b51e54f4a02795b5c5b3cbdce69d1f50a06e130aaa8024d10f4655a8308d3971babba3e41ff09613394f09a5801afa146bf7f66d009d523010000",
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
      "Wed, 22 Dec 2021 19:31:38 GMT",
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
      jobId: "grouparoo-job-1-1640201498035",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b4fdb3014fd2b91f771b475db647d48d5e84a806a6d3ad21484a629729c9b6048e3103b3086fadf77e3501e42824fb17dcfb9e7dc471ec98dc863322691486f2b281fbe5ccb881c10d02cc5d76355cee4d957f9f3b2a7a627e73f6efededffe4b271344889aa5d8b6c8a0a564557250e3cdba9d96b22a5829650b13b5baadee379bf668d71e0d69df419a822c5988fc06c9575a176adce9eca5dba9946906ac10aacde5f6f9bd73d7eb14a5bc06ae55e7ad62074554e743cdef99e44c0b994f366bd4af1494216c99c8d0c10b318e0edf666e0bb66da708be131c18e7b2ca75ed0a5370992722ad4a93958c1f8971f9ea40d6eec29d05169759b5cdc39c6de1c08a9966a17e28c03af6574b6bee1daffce53498afbc703d3b7597d3f66cb5d82cbdb57571eafaaea5599481e15a13ebd0dc3cbca07e0c4a8bdca807f573adfcd49ff9fba1d4049456d004c301fdc6ba433a8a9268c09361df89120a51348c060eeb47948f6cb0e30818f28ca861b15ce6b1c39c24e1347420a6a16d83130ee9c00efb0e8f28d0516fd0ed91dd01b92f858623a10aa944d32172e1cf03370cfc8d379b06ae29216155a68f1a637501af3d6a2c30a4b48bc00feadad5512151ad6ef9dc0b5c7f3a0be6e76e33e505a48c3fac6f71ce09cb14209a95d8400de552c6d834e24d97ee1182cdd47eed838a8c7f3f92baefb593576d7fa60738c4dab2365fb20efcb97762ecec11e72cab0ce4ae3990022d5f617de87af70791b8a74d1672b671fd4bd23cf990400939ff7ca2083681cffeb6fdee2314b71f5594c63bae0f57b5062fa1592361aa7d61f76d4a0cb8d4ef62f6b0b76f5a9da3ce085bc8f55341cdee639d8d58a59e4118c40df04cb376ff018243e19f79040000",
    ],
    [
      "ETag",
      "FsrCoQ+oKY2sAGVBkxwqzg==",
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
      "Wed, 22 Dec 2021 19:31:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1640201498035"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92514fc2400cc7bf4b7d1d71e898b88407504022a0c078308690632bdb705be7dd4d4308dfddde44346aa22fb7b6fbb5ebffbfdbc1539287e0c12a899e4b94db9308f5c404535465aa153f0aca158205a845c4e4edab337765368e1efa3d7bd2a5d33889e3a8d5624205316602bc1dac134c4305dee30e729121b705949659beac320bf4b630c5993f1d8cfb9c67149a7c3c1f0edb9d6117f6d6b131145a2c2bfe1f6d8bbd051b5a4d718d12f300cd2e85a40d067a60642a911529d61495324005155cbd88249585904435aed4eab5baebd86776ddb96cdae70de6520a844e2867743ee3f5409316e9945e5924b80cc82a64bdebea7ce17212563a4c3818fbae53adf7159018900c977f72056f1b0bfe091fd8c180ef9cc8a8ccf591ea0defdabf8d63473f475db7fdee0f4269f6e988f8835177e6b747f7865b1ca477b61ad5bd24b651a171b06e3bcdc6856bbf9b7a45c668fe8ea76589160482efc64da2c15b8b54e1fe0dd7760d2579020000",
    ],
    [
      "ETag",
      "Kw4U6rmNgYGF0QEo/hihhg==",
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
      "Wed, 22 Dec 2021 19:31:39 GMT",
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
      jobId: "grouparoo-job-2-1640201498035",
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
      "4f",
      "e2",
      "40",
      "10",
      "fe",
      "2b",
      "64efdb45e8b6144a49c89dc17a690e3194e29df705b7db695d2ddddadd6ad0f0df6f9622d198e8b776e7799967665ec8bd2853322689c81f1aa8b7dfee64424e086896e36bbe589c9f1583f3feefe1e5e06fe43d5fcdfe5d3f4d26881086a5d8a62aa0ab64537350e3d5b297d7b2a9582d651785ba4ed71ebad4a1b6eb8f687f803405453613e53d926fb5aed4d8b25ead7bb9947901ac12aac7e5e6f86e3d3a5655cb3be05a59ef1d2d3451d6a79e3f0ac99916b29cac96e8df28a8d7b061a230f18ec434f9f95eb927d8a69723f85170609ccba6d4a62b94e0b2cc44ded47b55327e21fb2edf7c9065300ba671e77be73cbabce8dc54a878cb14a89bce2cbc08e38e4d512605a545b917895952801138c40c3fced610984691b6b8f6e890d923ea2759e2f16cd41f241985241925de80f513ca7d17dc3401863c6dd4f72c56cad2776d00c71ffa9cfb9ee3bb8e6f33009e0e2838a9ed72cf4f6d70e890ec4ec8532d349c09554925dab0e44f14c6c13a8e56f3e9691cec6364ac29f459db9c09f1b64f8d21d794da08fc24dbce5485443733bd701e07d1e9340eaf82766133c819df2e1f7065192b14201c171d6f2b9c1959ac82e89ab44f11645043c9bf9e2582f785afcef5f578108ae7832e4ae33f2e8e2be3c16b68172836a69723dbb73d1319c1b5fe50eb53076bc7a3318ab081521f02b5c7437607b3461d4158c4b9cfc3f92facfe076136d4f3ba030000",
    ],
    [
      "ETag",
      "gQQFDl5F3K6O5XR7zVLZYw==",
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
      "Wed, 22 Dec 2021 19:31:39 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1640201498035"
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
      "516fda3010c7bf8bf73882ec242631521fd2917648941548f7325593490ca48538739c218af8eebba415099bc7465fc871f9fffcf7ddc1edd1739a25a88fe6e9f24729d4eec352e849154c4551ae75018f5c6685401d24345f82329bbc9009cb565f07e960e878f6eaf9e34db6bdba024511afc486a3fe1e2d52b14e0ad4ffb64719df08c0d204047a9757f1701c85b7e114121b995489f1c368145c8f4274e81c012562a992ef177379a9e215af6ffc86cda2e9707c7b9ee21b5966ba616e465f82e83c9270dd32190451785e5f68bec91b201ade85b328b8bb37518f870e7a92f3a9580825b258543dcd957c12b11e56e32ae0a8b5b00a09c58a02d5e2fac552c932e74a4a0b32966d919e8b6d4c5ce66387826e2d63ae539981f46106b7435a6abe9eca2d0c0b110c0a55c730b845fdf913f24e5dc66934d38a6fe742a9dd316577711383ab856d0b3704e9521f7b0e61cca521ab6b6c9b9006a697bab4d8ca85384ecf63aec9c47b7f292db636612ea146136a2824c8615e8d7797b87fb68a9eb68a61178aa03dcf5487dde09778b4b8ba068a99b906c2de69c04e0c6c425cc76cd0e8fe723ef0862691d32651ca88f17cef9ff7379fffdb90b1e7d17a083e3398f8865fd3ff98f8a726a4e73073931ad6bdc4a0c5d5063ddf3e4ee1f1ed3f7fbdd3a2b85712f64721aad5815fd7c82759ad16586d7dad4ad1413187adfe39d5afdf0fbf00077614f732060000",
    ],
    [
      "ETag",
      "nQz1Q9nhVDiDI372hk+Fnw==",
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
      "Wed, 22 Dec 2021 19:31:39 GMT",
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
