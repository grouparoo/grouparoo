const nock = require("nock");
process.env.BIGQUERY_JEST_TIMESTAMP = "1631211111899";

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
      "41",
      "7282301400d0bb64ad0e10a84977454cc5482d5844dc6468fc0a06150355a1d3bbd7e935eabbc3fb46999450d7a2392938a267d466161dc801af88eb5d73a38e66aa5c6bb0e8862e2f01f7fa219d511ca787d44e03cbe0a951f61d95d8519ebfc6c0802d49b98af6c5e240aa7db08335c8b62b726a54137ffb31aabc2ebc7ca5e16daaaecdacc1ad14c4a4221e3eb5573565414938dfcd379fe0ac8a68ee4ac6b67438c6d616fbeeeedd4fb4898fb61a99993a1153d591afb3b38d1349bc053e4eea0002debde961a273d21c98b3ef4ef2c54e27e26c0a1e33351e3c3cfc5fa887e056151a6a51dcb76387d21efaab2f9ab682fb7f17320d1afdfc02e94017b119040000",
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
      "Thu, 09 Sep 2021 18:11:57 GMT",
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
      jobId: "grouparoo-job-1-1631211111899",
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
      "ef6fda3010fd5722ef6b21fc8620a115414a5341d892d06a9ba6c83197cc6d8869ec74aa2afef79d9dc2a82ab5f992d8f7debdbb779717f2c08b2d199384678f1594cf5fee45422e08289ae1ed02ae6e42bf7b73b710d1a2b857bdb9fdd39f4e2688e09a25e96e9f43438aaa6420c79bb09995a2dad3528806266ab41bed41b7dd69eb67e438489390a74b5e3c20f98f527b39b6eda374331322cb81eeb96c32b13bdddb4f1d7b5f8a7b604ada6f156d1491f6879a5f73c1a8e2a2986c42d4af249431ec28cfb182ffc46d72f9367393d35d3343f0136740191355a1745598828922e559559aac64fc424c95671f247497ee2cb298c8ab5d1117740717d6962a1aabe73d5857c17a6579fed53a584d236fedc7e1ecda5d4d9bb3f572b3f243ebeeda0d5c4bd12407c3b526d6a539f97840fd2d48c50ba31ee96badfcea8ff77e289a80d212ea603c6c0d687bd472923419b274d4ed27690b9264940cfbb49bb498d383de36018a3c236a58b41045ab43fb4eaf95c4499ab6e25eafdb8d1de6d078344ae97090f63be00cc9e182fc2db98239977b2179ed10b90bbcc88da360e3cfa6916b5a486995ab795d986ee0bc46850d22e8839e0e3aca052a69bb3d3f7283e92cf26edd7ac24bc8287b0e1f71c629cd25209a96689e827225b66818f1a72b778e6033b16fc7a024e35f2f447baeab38b3fc448f7080ba5c65de248c02cf5f98728e885b9a5706f2547fe836529eeba20fbf11882b5a2721df376ef083d45701a45042c13e1f26824de0b31fedb8f608c5c54715a9f08c9bc3a4d66025d41bc44db327f6b0ebf4890197ea5dac3fe81f3dd3397446d841a15e1baad71efbacc52a7902611087ef1baf0eff00585b05b274040000",
    ],
    [
      "ETag",
      "GeFJSN3JWGoTGnjt4D/ZNA==",
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
      "Thu, 09 Sep 2021 18:11:57 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-1-1631211111899"
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
      "ff8d936f6f9b3010c6bf8bf7966861edd206a92f922d5bd968fed25753855cfb60ee8c8fd8265514e5bbf74cbb6c5a27515ec0ddf13b71f7f0f8c07e292359c2ee55b56dc1eedf55e0572158836bb577f468d038601103cf2b22b7ab8b7cbbfaae36e9f07abcfc367dcf71377abcba22c2899f5073961c58a9404bc7921f0766780dd42650b7b529ba2c627edf84e2265fa7f3af94d728433ebfcdb2c9349bb163746a94dcf3a2e3dfd076778cd803deafa1040b464098a5b1f800c2a7614dc7eb46c3c0616b0538d6c1dd8bca62db708b38a0ca201ec4a3b3f8431caecbf198388d827b8586d0db0d8dc73c7aaed7f8484bb2f88c08dbc5b470d9dd775457b25b2484e93c1f9d77f3fd0d7021b035bee8054b659d7f16ef37f822c2bfa4e66f04e94f29dd07556024d83e4a350597d28273bd24ba8237cd099b2e16d96b558cb4a8643fb8533d80f6bb13f0255b4cfe272df9eb8f569f27f9ec15e13cb9e684e4e9cd6c934f6e9681bb7b31c274efc12d2d92a91c043fc5c3f3cb8f17a3e1b3c53e61b01d7d27f1b68588094e27e55a7996945c3b383e01d8c3050a87030000",
    ],
    [
      "ETag",
      "qQ7TqQKiSI0H9PJB/aov6w==",
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
      "Thu, 09 Sep 2021 18:11:58 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-2-1631211111899",
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
      "7f",
      "4f",
      "db",
      "30",
      "14",
      "fc",
      "2a",
      "91f7cf26b54dd3dfa984580719cb56d22e4d41689a5a27790986340eb603aa50bffb5e1c0a744850556aedbb7b77efd97e24b72c8fc998842cbd2b416c3fddf0903408289ae2ae592c7fceb9f5d0b9be9c5035fdd5b77ba7fd87a32364b04a25e9a6c8a02979292290e3e5a2950a5e165470dec442cd4ed31a74ad8e557d46b68d3209593265f92d8aaf952ae4d834f7d6ad94f334035a30d98af8e679dfbcef9885e0371029691e3a9a6822cd773d8f331e51c5787eb45ca07f2941ac60435986095e8471f8f5b0728bd14d2b45f23d8b8046112f7355a5c21211cf139696425725e347a253befa4316ced439098c75c28454ab9c6e60dd30d62c5e1b541aab55716b7cf767e7c61abb4a5806726d5cfe707cc7a839ae672c3dcf5904c6e7e32fc6993f5bce8d6f571a6b1cd4c42c3148c5729d24a06106558aa759b96f0fa812504525d4e06ad81e506bd4b6c3241c46c9a8db0f933684e1281cf669376c47760f7a71081475aaaaae5534c7feed21746c2b4c60d48b01ba839882ddefb77ba16585c3e1a047216ef7ed98ec1ae4413005a74c165cb27a62e4d277036715f84bef641238ba8d8496993aadc3554dbccea9b04924bdd3d7ae421947a76afcae1738fee424702f9cfac4a790d268bbb8c3334f682601d954e0041588731ee3d0c87cb6700377e64da6a8d0c738df332419ff797c1104db424f59e95f32f1fdc9156aa81074fb1f8639063db2dbbdb2bba059a9299aaf5775fdfb1a2016f6f2b2ea1cac0664f77787df06c17b5e7b91df4bc7bf22f5960f0908c8a38f6f019235f0d16bddbf1da4e2eb4117a9708d572e92954724",
      "a0be7a6ca3b3efd5a36ed7229a2cd41bac371ced675cd5a82ac20672f5d450fd76f4d42aa894cf2404f1c678ae7786e83f52a680efb9040000",
    ],
    [
      "ETag",
      "/pUJPo1w2hWAatLK594D5w==",
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
      "Thu, 09 Sep 2021 18:11:58 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-2-1631211111899"
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
      "6d",
      "51",
      "d1",
      "6a",
      "c2",
      "30",
      "14fd97bbc7b5b02ab855d883baa242115bf56988c4785ba36d5393745b11ff7d37713861cb4372cfbde724e790331c45b5833e6c457e6a50b50f399ac41629eaa6309a8e5a561ac103342c2766f8c830799ef474f235df877152b6ddd361f0fa4a0ccdf75832e89f211358ec34f4dfcf50b112499609a5cdc6010f4c5bdbde62994e6763c2a5dc593c5bc5f160184770f16ebacda63efe2aa6b365348ed2ff24eb8b0707b94d31438515476ba356f280dc4c6d42cdcaba405fcb4671d4e0c86e902bd9d44c49e953c7eff841af1b7402bb5ec2907885e4cc08591175b5206b60a461452a3f291f7489a05c495133b77f503b52025d0a0b0267ee7efc8695b88d7b7fc623c645717741c732d63f0f0f5b837aae2485d068fd3f5db38ca4cd6728b7510d7ac019fdc644982bbe7c03089d6677ea010000",
    ],
    [
      "ETag",
      "9+aeQ7H6sQxPh9LQmy3qjA==",
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
      "Thu, 09 Sep 2021 18:11:58 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "642d4e0551e94e0c7ef88816e2874d2649334c8c154c2825747af73abd467d7778df8030c6b5c64d25f90dbc02436c6fc886513df3e15799408804b2f251f91262d22e653c4d67d531704793345f99844dbe56fdc24c13d2bb3d3eebfb3c283d74a7419ac537e6e28c5e4a6dd47161eaf591c2fd5514fb9dcc68700e3f928d9b45526de671db4dc2ea605ff6f8b4e3e3777bb66e6211f276893af629d095c0f24d6139df49b968c728e3274bdb9bbbd5b1c3cdd7c1816c1ded170a428f5beeb288ba26a7514909754825d2bcf0b78610e7a451bf1d3e3dfd5f600078570bc535168fed8eeb7903f0571f37a6e68fff3e278a2bf0f30b29dc8c3819040000",
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
      "Thu, 09 Sep 2021 18:11:58 GMT",
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
      jobId: "grouparoo-job-3-1631211111899",
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
      "ff8553ef4fdb3010fd5722ef2b6d93fe2069a56a54258c429b8e2485b1698a6cc7c90c695c62a70ca1feef3b3bb4032141be24f6bd77efeedde519ddf33245234478fe50b3eae9cb9d20e808318573b82d9721c7db0bdb553fbc8b8be2eef2f6efe5cfabf118105cb3245e6f0ad692a2ae2893a355d4ce2b516f7025440b12b57a2de7b8e7741dfd78c321d0242bb2392fef81fc47a98d1c753a7be9762e445e30bce1b24dc5fa70dfd9763b9b4adc31aa64e7ad62074464e743cdaf85a05871518e5711e8d79255095b635e4005ff892939799bb9cdf1ba9d0378cb29c3948aba54ba2a48414599f1bcae4c56347a46a6ca571f28f2e7fe34b6a828ea75999478cd8eac142b9ca8a70db3cec2e5c29a0567cb70318967cb2089a6e7fe62d29e2ee7ab45105937e77ee85b0a938219ae35b64ecc298003e8a74c2a5e1af5585f6be5177f66ef87a209202d59134c5cfb183b9e3d24197169e6f50624b319211e7107b8476c3aecb37e4a18069e11352c5c8ad2f5bc2ef606bd24b5bbdda44f1d2721a4ef26c425b4db779d94f608da1da1c78a2b76cae54648de38846ec259ec2771b80aa693d8372d64b82ed46953986ee0758d0a1a04d0073ded74940b50d276cf82d80f27d37876ed37139eb31cd3a7e801669ce1423240e30acc53ac5a88140c43c164e19f02d84cecfb3e28d1e8d733d29eeb2a5e597ea0c730405dae326f14c5e12cf866cad923ae71511bc8b6f9d06d64bcd045ef7e031056b44982ae567e788b9aab9065ac6225fd7c98003681cf7eb4fdda0314161f54a482336c0e955a8356acd9206e9a3db087f660800cb852ef624ebfbff74ce7d019d99a95eaa5a166eda1cf46ac9607100461f881f16af70f6491041674040000",
    ],
    [
      "ETag",
      "nORiavJ07tX8JJljKYxKZQ==",
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
      "Thu, 09 Sep 2021 18:11:59 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-3-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d936f6f9b3010c6bf8bf7966865f9b314a92fc8ca36249ab409dd8b4d1572ed83ba351cb34daa28ca77df997669b54ea2bc80bbe377e2eee1f19e3da846b288ddaaea770766f7a10277e58335d84e3b4b8f161b0b2c60e07845e404e332f9783eaf1eee7ece92e98fb9da4ed3c7b33322acb8839ab368cf4a055a5a16fddab386d7406d02755737459f05cced5a5fdce4eb74f98df21aa5cf97d759162fb2841d8263a3e48e173dff8eb69b43c0eef1760d25186804f8595a83f7205cead7b4bc6e358c2c764680653ddcbfa80c762d378823aa8cc6a370360e3f85fe9a9f9e12a75170a7b021f47a43e331878eeb353ed2922c1c1361fa98162efbfb96ea4af68bf8305de6b3493fdf6b800b815de38a41b054c6ba27f1fe82cf22fc4b6afe4e90fe94d24350058d043344a9b6e0521ab07690445bf0b63d628bd52a7bab4a230d2a390c6ed500a0ddf6087ccd56f1ffa4257fbd68751ee7c91bc23a72cd11c9d38b6493c717979ebb7936c262e7c05e1a245359f07e0a4f26f3e9e7d9c993c5bea0b71d7d2772a68380094e27e5bb722c2ab9b670f803cd2bce9987030000",
    ],
    [
      "ETag",
      "4oAfE/D8gkhZ6E5V8iv5Iw==",
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
      "Thu, 09 Sep 2021 18:11:59 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `first_name`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-4-1631211111899",
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
      "fd",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "57",
      "22",
      "ef974de223e11ba4aaa334eb32d1404368d54d13d88e93b90d716a3bdd50c5ffbe8b535ada692d4202fbbd77efee7cf7806e7916a111223cb92b98dc7eb81104d510d33881db30a6f3137b1bdae1ddb7c5c59fef97e7f6e4767c74040c5eaa14dee429ab2b5148cad468b968245214399642d42150bd53777a6da7e5949fc1700832c5d278cab35b10ffd23a57a366736fdd488448528673ae1a546c9eee9bf7ad662ec50da35a355f3a36c14435dff43c4e05c59a8bec68b900ff4231b9621bcc53c8e0591891cf2f233738de341220df73ca30a5a2c874991584a0228b79524813158d1e90c9f2e00f5ab85377125aeb984ba55719deb075cd5aa7f8e0c0a3b58595b55ae5b7d69760766eada1c498a74cadadabaf6ee05a15c7f3ada5efbb8bd0fa78fcc93a0b66cbb975726db0daff0d20cb8829cd3393638849cacafc1ebbe8fdfb74a5006bac5805aefa760f3b037b4862d2a7f1a0dd25b1cd0819907e17b7894d871dd68908c3a0d36574a3c21974863976bbd3c2d8e9765a8e4d08b359b71bf7e36ebb1f61020f43874ed4eea35d0dfd965cb353ae72a178d54b741578a1bb0a83a53f1987ae2923c645aa4fabe4ca220ef3d4502490dea86b57a25c8053f9309e1fbac178127a976e350b539660ba5ddcc134c438550cd85842073593e72282a6a1f96ce185decc1f4f41611e78be672834faf1f02c08b7b9e9b236bf681c04e36bd06029f1f6150679f43a68b73bb0bbc4696128866f4e55fcfb0a400ed4f27c6abd38f5d0eee70ebe35041b5079a18ba51b5ca3ea2a6031932c",
      "a3ef4f01900df0de1eefb70aa8b057e0a2349c61e4a82a3da864d5e8f18dc97daf1e0eba0364c852bfc25ab6dd1eee7b5cc62823b20dcbf46341d55699ae9550a19e4800c2c4f89e7f06e85f03266890d3040000",
    ],
    [
      "ETag",
      "TfcPB0yT0TqJSQxZVM0CkA==",
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
      "Thu, 09 Sep 2021 18:12:00 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-4-1631211111899"
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
      "91",
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cbf9e8161c1822243c082e3843880cf6a08690526eb3d0adb3ed3484f0ddbd0e3348f4c93eb4f7bffefecdddf5003b516ca00f6b917d54a8f75719da990b623495b4868e521506c103b42c23f2b59b8e6655c65ae6ba7a491497b69544b3c18008c3df3167d03f402a506e0cf4df0e50b01cc9960a6decaa161ed87de972f3451c4dc7a473b5717a9a4c26f7c3490847aff149f62fdb6a55eece8e68ba08c761fc976579f460abd631a6a8b1e0e8aa2fb5da22b7911b8c617929d137aad21c0dd4707d916955954c2be553c6bff5836e2768076eddf57ac449c59915aa203499536960956532565f3416e810a0eb902694d6fb27a5432db0eec28927d49f4a98460775b197f80316a2b99e7326056b64f7173d625cc88bf74366cfa2edf0e54f91c3bd45f3ac15356cd0f57a73ea7ba4dc2cc8d5b7ba420f38a30f7f14f6a48fdf2ef3d4a44d020000",
    ],
    [
      "ETag",
      "Z6fCQuga/s+uYUoclt/UIQ==",
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
      "Thu, 09 Sep 2021 18:12:00 GMT",
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
      "000000000002ffedd3596e82400000d0bbccb7906153e81f239b3491c5a2c00f611901111856c1a677afe935eabbc3fb06719ae26188c6b6c20df8006bcc4a744a7f1211298ffc3e5f1ba8798c79f2114feeb6adb7029b39e14ce05eead010374f4768cf52b7c8a78b2bd87b9f25eeecf6add5279411c2b5aa91b8722d775c99b2de1dbdda46515705b7b440e2be86222699aff24de72632c6d02e10b40253a1ae5a6898685e289d85b7873b292b2c0e861346c12e3b47a332e54af7a5d5922c64097f81ed5056d8cb185dd33b5533dca186969c2b45e81b5c03e5039cb66ab3cd9c29a0dfdefe2fb0017821658f87a87c6de70449da80bffad1b812fcfa8f70dce31efcfc02bb3fb08419040000",
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
      "Thu, 09 Sep 2021 18:12:00 GMT",
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
      jobId: "grouparoo-job-5-1631211111899",
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
      "db",
      "30",
      "10",
      "fe",
      "2b",
      "91f795bea4f45daa4657021435294b53d0344d91ed5e32431297d8e960a8ff7d6787321012e44b62dff3dc73f7dce589dc896243c68489f4be82f2f1cbad64e48880a629de3e5c5d5c0efab7eee559b1fceb87dff2cb07f77c3a9920421896a2f93683869255c9418dd7ab665aca6a4b4b291b98a8d16bb8fd63b7e39a67381a214d41962c447187e4df5a6fd5b8d53a48375329d30ce856a82697f9cb7d6bd7696d4b790b5cabd65bc5168aa8d6879a5f33c9a916b298ac57a85f292863c8a9c8b082ffc40d3b799bb92968de4c11bc131c28e7b22ab4a90a5370592422ad4a9b958c9f88adf2d50759790b6f16395c66555ec405cde1c8d9504d63fdb805e72c5cface3c385b86fe349a2f837835bbf0fc6973b65cacfd60e5dc5c78a1e768ca32b05c67e29cd8538007d4df80d2a2b0ea91b936cacffeccdf0fc510505a411d8c07ed3e7587ed114bd88027c3e31e4bdac0d8900d7af498b5f9a80bdd0d038a3c2b6a59b49045870d37096d0fe3a4efba71b7c79398f5ba10238d3286d44e7f40f647e44f29349c0ab5954ad40e919b701e797114ae83d934f26c0b09ad327d5a17661a785da3c60611f4414f7b131512958cddf320f2c2e92c9a5f7bf584179052feb8bac71927345380685aa2791a4a5f6ed030124c7def14c176625787a022e39f4fc4786eaa7865f90b3dc2019a72b57d935514ce83735bce01714db3ca4276f58769231199297aff0b81b8a27512f27ded853f487d1542022514fcf36122d8063efbd10e6b8f505c7c54511acfb8395c190d5e42bd41c2367b6077dc76bf472cb8d4ef62eea87df0cce4301921",
      "87423f3754af3df6598b55ea0584411c7e60bddaff03bc273fa574040000",
    ],
    [
      "ETag",
      "xPHJ76j1JFnOzMRBmJx1GA==",
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
      "Thu, 09 Sep 2021 18:12:01 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-5-1631211111899"
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
      "93516fda3010c7bf8bf71a24b2520691fa002bdb900274217d9aaac8d897d4ccf165b6c38410df7de7b463553b29cd437277f99d72f7cfdf27f65319c912b653d5af16ecf14305fe7b083270adf68e1e0d1a072c62e07945e464578ff67959ee56209a6aea6eb34733ac6e6e8870e2116ace92132b1568e958f2e3c40caf81da04eab636459745cc1f9b50dce6d972fd95f21a65c8d7f7693a9ba70b768e2e8d927b5e74fc3bda1ece11dbe32e83122c18016196c6e21e845f86351daf1b0d0387ad15e05807772f2a8b6dc32de2802a83eb413cbe8a3fc6e19a4ca7c46914dc2b3484de6f693ce6d1739de16f5a92c55744d82ea685cbee7ea0ba92dd22215caef3f1a89bef25c085c0d6f8a2172c9575fe49bcbfe0b308af49cddf09d29f52ba0faac048b07d946a0a2ea505e77a4974056f9a0b36df6cd2b7aa186951c97ef0a07a00ed0f17e04bba99fd4f5af2d73fad6e67f9e20de13cb9e682e4cbd5629bcf5677817b7836c2fce8c1dd59245339087e8a87a3c9f5a7f1f0c9629f31d88ebe9378db42c404a793f24d7996945c3b38ff01d6613c0087030000",
    ],
    [
      "ETag",
      "8bm4jTffbMecpg9sDRhn0g==",
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
      "Thu, 09 Sep 2021 18:12:01 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-6-1631211111899",
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
      "7f",
      "4f",
      "db",
      "30",
      "14",
      "fc2a91f7cf26f5579a92369510eb20b04c2565695284a6a975d297cc90c42176ca2ad4efbe178742191254955afbeededd7bb61fc91dcbd7644c4296dc57506e3fddf290b408489ae0eead1b9ac6240a7e049b45b5c8ce8decefe2fee1f81819ac56099a1529b405afca08c4389877929257052d396f63a1b6d9d64d43efebf5676459281390c65396dfa1f88f94851877bb7beb4ec27992022d98e8443c7bdeef6efadda2e4b71049d17dedd84513d17dd7f324e511958ce7c7c11cfd2b01e51232ca524cf0225c875f5f57ee309a7512246f5804348a7895cb3a159688781eb3a42a5555327e242ae5c11f32b7a7f6a9afad522ae432a719ac5ada8aad571a15da7259dc69e7deec525b6153314b41acb4ebefb6676b0dc771b5c075edb9af7d3ef9a25d78b3e04afb76a3b0d661494cb2062159ae72f8344ca1cef03429e7edf1d4022aa980065c0e7b26d5473d2b8cc361148f8ca330ee41188ec2e11135c25e640d60b00e81a24ed6d5958ae63cd7ad81454d3a8c753a0003894363d0076b64f62c7338b2f481de37d61480ec5ae4a16412ce9828b860cdbcc8b5e7f8f6d2f702f774e2dbaa8d9856a93c6bc2d54d1ce694d82492dee96b57a38ca3533d7cc7f56d6f72ea3b0bbb39ef292434daceeff1c4639a0a40362d718212ca4bbec6a191abd9dcf19d993b99a2421de2d59e21c8f8d7e38bc0df166aca52fd9289e74d6e5043cb926effc330873920bbdd81dd82a695a228be5a35f5370d4074ece565d57fb532c9eef70ebf2d82b7bcf1223f03dbbb21cd9607319490471fdf02242be0a3b7ba7f3948c5b7832e42e21aaf5c246a8fa884e6eab14c657f52f7f5d1d188287229df60d650df",
      "cfb8ae5157840c72f9d450f372d4d46aa812cf2404f1c6b88e7b81e83f85dd8c4eb7040000",
    ],
    [
      "ETag",
      "jNb63AcUJUvVuVmF3mxVqw==",
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
      "Thu, 09 Sep 2021 18:12:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-6-1631211111899"
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
      "00000002ff6d91d14ec2401045ff657c6d130b094a131e441b2812d416a2c610b294a116dacebabb8534847f67b61834d13e6ce7ce9c9b9d9b3dc0362b57e0c3324bbf2a54f5558ae6c51611ea2a379a7f924a8de0001a9132f95ebcea701fd76fa387b69c0d297d5cde3ca5bd1e133af9c442807f807586f94a83ff71805214c8b65c68b3686a074c2d6d2b9e46e164c0baa095d593d9787cd71f0770742eb6c5426e7f1ce1641a0c82e83fcbfce8c0869611ae516199a0dd422ada6062421b508b42e6e86aaa54821a1ab819a48a2a291491cb1db7e37a9db6d7f2ec77dbed329753224c4625a3b39857034346e411ed391eb419504dc949d7cdb9e3f608d58e32dd04b1da6bf6fb4dc489c83371013a7f804018bc8c5b763cffbeba5f1bd4cf8a3886469be0fa9ce69e6c4276f94655e84022f839869939ebe309e11f774feb010000",
    ],
    [
      "ETag",
      "YmWsIwSyXJD3pUHogKb7Og==",
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
      "Thu, 09 Sep 2021 18:12:02 GMT",
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
      "1f8b08000000000002ffedd34b7282300000d0bb64ad0e4241e88e0834a61a15d140364c8c81816ac1c41f3abd7b9d5ea3be3bbc07e04248adf353f325bfc13be8b8e90dc4e0b3756170adef2e5e4c39736611ada348b40d3ed2e13c73cfe89096c5e828cb30ab619a4d3276f3568c753e4fe0b2ef7a0b93c657848ebb8d6fdfa7c4297d23f89891780693647361c820d6b66ef8ba0ae5e1bcdb8ea1762fea428ba5d82b4775a834344b69e3d855bce70e160ce1ae55540d9d049dc7387e1b2d098b49c542194cb4350ea7ee309d5866611ab6ee4a82d7cdbc9026a684217b6588ed55f48310c1c1cbcbff057a40deda4a499d57cfed96ed793df0573f3f75ad7cfe87922ba9c0cf2fc3d0e14219040000",
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
      "Thu, 09 Sep 2021 18:12:02 GMT",
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
      jobId: "grouparoo-job-7-1631211111899",
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
      "61",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2b",
      "91",
      "f7",
      "b51020d000125a194d5724085b125a4dd314d9e692b90d318d1ddaaae2bfefec94ae55a5361f48ec7befdeddbbe389dc8a7243c68489fcae86eaf1cb8d64e48480a639dede5cbb0ffcdb74ef8efcb806ffe1e18217ec7e324184302c45b7bb025a4ad61507355ec7edbc92f58e5652b63051cb6f754fbd6eaf6b9ee16884340545b610e52d92ff6abd5363d73d4ab77329f302e84ea83697db977b77df737795bc01ae95fb56d14511e57ea8f9b5909c6a21cbc93a46fd5a4195c2968a022bf84fdcb0b3b799db826edb3982f78203e55cd6a53655610a2ecb4ce47565b392f113b155befa2071b0086689c365516fcbb4a45b38713654d3543feec0b988564b671e5eaca2e53499afc2349e5d06cb697bb65aac9761ec5c5f0651e068ca0ab05c67e29cd9538807d4df80d2a2b4ea89b936cacffeccdf0fc510505a41134cfdce29ed0e3b2396319f67436fc0b20e303664fe807aacc3477de86f1850e45951cba2a52ca1df87ac4b7ba9e7333fed67de20651dfca1fd8c72b6e97a237f440e27e4be121ace85da49251a87c875344f823489d6e16c9a04b6858cd6853e6f0a330dbcae51638308faa0a783890a894ac6ee799804d17496ccaf8266c20bc8297f8cef70c6192d14209a56689e866a2937681809a7cbe01cc176623f8e4145c6bf9f88f1dc54f1caf2177a820334e56afb267112cdc3efb69c23e28a16b585ec9b0fd346260a53f4e10f0271459b24e4e73a887e91e62a820c2a28f9e7c344b00d7cf6473bae3d4271f15145693ce3e67065347805cd06",
      "09dbec91ddeb9d7a0362c1957e17f3bdeed13393c364842d94fab9a166edb1cf46ac562f200ce2f043ebd5e11f9974d2c074040000",
    ],
    [
      "ETag",
      "jW/xcBAv/97Sue7xxFclbw==",
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
      "Thu, 09 Sep 2021 18:12:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-7-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d93614fdb301086ff8bf99a4a64400b91f890761d8b165a68838434a1c8d89760e6f832dbe95455fdef3b0756a63129e4437277794eb97bf37ac77e282359c21e55fdb303bb3daac1df866005aed3ded1a345e380450c3caf894c67b7b05e986f5d3b9b9c690199ba92f7f5e525114e3c41c359b26395022d1d4bbeef98e10d509b40dd35a6ecb388f96d1b8aeb62952dae286f50867c7197e7e9349fb37d746894dcf3b2e73fd0f6b08fd8333eaea0020b464098a5b5f80cc267614dc79b56c3c861670538d6c3fd8bda62d7728b38a2ca68328ac727f1a7385ce71717c46914dc2b3484dead693ce6d173bdc25fb4248b4f88b07d4c0b57fd7d437525fb4542982d8af1693fdfdf0017023be3cb41b052d6f917f1fe80af22fc4b6afe4190fe94d243500d46821da2545b72292d383748a22b79db1eb0e97299bf57c5488b4a0e831b350068bf39005ff265fa3f69c95f6f5a7d4e8bf93bc27972cd0129b2ebf9ba48af6f02f7f06a84e9d683bbb148a67210fc141f9f9e9f4dc6c72f169b61b01d7d27f1b68388094e27e5abf22ca9b876b0ff0d5d276b4b87030000",
    ],
    [
      "ETag",
      "ACQeSNnKupC75lceIiGdXg==",
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
      "Thu, 09 Sep 2021 18:12:07 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-8-1631211111899",
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
      "7b",
      "6f",
      "da",
      "30",
      "10",
      "ff",
      "2a",
      "91",
      "f7",
      "cf26f148780590aa2e6bb32d1b0d5d08add03481632e994b88d3d8a14215df7d17a7f4b14a2d4202fbf7ba3bdbf764c3b33519938827b72514fb0f3722220d028a26b87b1565e6c47436cea6bb9bfe5c5c38f90fcbbe3b394106af54926ef3149a52940503399ecf5a4921ca9c164234d1a8396c5a83aed5b1aacf7034429984349ef06c83e2bf4ae572dc6e1fa35b8910490a34e7b2c5c4f671bfbdebb4f342dc0053b2fd32b18d21b2fd66e6692a18555c6427f319e697128a256c294fb18227e13afafcd2b9c5e9b6952079c71950c64499a9aa2ab460228b795216da958cef89aef2d91f327327ee5968ac52b55b358c155faf0c2a8de532df185f83e985b1c276629e825c19d7dfddc0356a8ee71b73df7767a1f1f1f493f12d98ce2f8d2f0b8d356a334c5f83543cd3d9218d52a8721fa6e3bd3e924a40159550834bdb1c506b688ea238b2593cecf6a3d884281a46769f7623938d7ad05b474051a72a77ada299c8fa716f444d13067ddba2fdb80fc8b2d7f6a84f996d451d80ee70d4431f726890bb822b38e7321792d73322d78117bacb3098fb674ee8ea36625aa6eabc2eae6ae2799d0a9b44d21b7d1d2a940b4caa06eef9a11b3867a177e5d6673c8184b2fdec164f39a6a90464d3826e41417121d6383472399d79a137f59d092af4c15d1e19928c7fdf3f09c27daea7acf42f7182c059a0861605ddff87611d831e391c9ec55dd1b4d414cdd7abda7f5703c4c25e9e569d17ab0139fc39e0b741f066d759e4d7dc0d16a4de0a20860232f6fe2d40b206",
      "de7b9fc7d782547c2f982215aef1ca315965b002eaabc7b7baf60775c7ee747b44930bf50aebdaf671c69547e5085bc8d44343f56bd153aba0523e9210c41be37bfe3744ff015cda5868ab040000",
    ],
    [
      "ETag",
      "Vbn0L0AkAk3vOKYMApJ17w==",
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
      "Thu, 09 Sep 2021 18:12:07 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-8-1631211111899"
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
      "ff6d91d16e82301486dfe5ec16cc00c7c4c40b35385d8873a8c9dc624c8523a240595b34c6f8ee3bc5c565d97ad1f6eff94eda2f3dc33e2d6268c33a4d3e2b14a7bb04d5abde8428ab4c495a4a5e48040350b18448d11f676ff1422e5c7f3d980c9befc7676f9b743a44c8688b3983f619362966b184f6c7190a9623b565ea40843a953a0c8297ee8c62ce631dc7f320e8f6021f2ec68d5fadcafd4fc3683cf39ffcf0bf96e5c5801d5f87b841814584fafa52f01d466aa4cd24cbcb0c4dc92b11a1841aae0b89e055c904e7269d982dd3721dcbb6f468791e71198f984a7941e87c4a4f03c515cb427e242f700810f5961437f57ca063fbc16b5876eda1a3553fef17f0e834bcd60d70ff005eb3e1b8b7baadebcbefab7b27857222386948d406f7579b3ed7868acc95a8d08088d13f0c5375cd972f993d88a4e4010000",
    ],
    [
      "ETag",
      "rCNlXdYsY6EbFPH4ZwJ9hg==",
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
      "Thu, 09 Sep 2021 18:12:07 GMT",
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
      "000002ffedd34d7282300040e1bb64ad0e42ad4977461488201205c50d0321b5d10e7f0902edf4ee757a8dfa9de06dde374819e35226aabcf102bc8121d5d1844d3615c46627e094fa2f26744bdc9a0bf7cb394bf6196d8814a186216e0ee3d21491716ac31d2b8cec18d1fa6eed83fd98aef1b17fafcd5af58b282eae38860141dcbf7e945ed371e64c33595e883d4f77c5ddebdbab45ed3adf2a8d562e7467049d97c35156214354668e08ca606be679b3512b6fa9dbfa74b88bd63fb4c47aad5a375cfbb6c62ffd3c56bab778d4111e9dd88a13bbb0991a60e645e816762aa9c774f2f4f47f8111e07d251a2e13f1b8dd982134027feb276aa8f8e37fccd38637e0e717fd30530119040000",
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
      "Thu, 09 Sep 2021 18:12:07 GMT",
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
      jobId: "grouparoo-job-9-1631211111899",
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
      "02ff85536b6f9b3014fd2bc8fbd826e49d10295ab39476d112b20069374d1332e6c2dc124cb1e95455f9efbb364dd76e52cb17b0ef39f79cfbe091dcf222215312f3ecae86eae1c38d88c929014533bcbdd9cafadb968a5172e29d5c6ebe049f3627fe76364304d72c49f7650e2d29ea8a819cee82765689baa495102d4cd4725add51bfdbebea67e238489390a72b5edc22f99752a59cdaf651ba9d0991e5404b2edb4cec9fefedfb9e5d56e2069892f66b451b45a4fda6e6c75c30aab82866bb00f56b0955047bca7374f09798c467af33b739ddb73304df7306943151174abbc2144c1429cfeaca6425d347625cbef82081bb7217a1c5445eef8ba8a07b38b512aa68a41e4ab02efccdda5a7a171b7f3d0f971b2f0a169fddf5bcbdd8ac766b2fb0ae3fbbbe6b291ae760b8d6cc3a33270f0fa89f8054bc30eaa1bed6ca4ffd59fe3f144d4069094d301a7746b43be938711a8f593ae90fe3b403713c89c743da8f3bcc19c020898122cf881a162d4491b0947693713f1a8efabd68d01f4d226790a6511f62d64b27dd78341a92c329f95d7105e75c9642f2a643e4da5f866e14fa3b6f310f5d53424aeb5c9d37c674012f3d2a2c10416fd474d0512e5049b77be985ae3f5f84cb2bb799f00a32ca1e823b9c714a730988a615364f41b51609368c78f3b57b8e6033b1afc7a024d31f8f44f75cbb78d1f2677a8803d47695799320f497dea5b173445cd1bc3690fbe6439791f25c9b3efc4420ae6893846c77aeff9d34573ea45041c1de1f26824de0bd1fedb8f608c5c54715a9f08c9bc3a4d66015341bc44db147766fec8c87c4802bf56f0cb76670ec99cea133c21e0af55450b3f658672356cb67100671f89ee9d5e10f500d058b74040000",
    ],
    [
      "ETag",
      "jQsuXQao6d+N+GOKSBO+RQ==",
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
      "Thu, 09 Sep 2021 18:12:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-9-1631211111899"
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
      "516f9b3010c7bf8bf74aa4d0742c41ea43b2b10d89262d214f53855c7c3077c6c76c93288af2dd77a65d36ad93280f7077fc4edcfdf9fbc47e482d58cc1e65f3b307737cd780bbf7410eb657ced2a3436d81050c1c6f889ced137980fc6abe3a6c65124dfbcd2e4aef6f6e88b0d57768398b4fac96a08465f1b713d3bc056aab50f5ad2e872c60eed8f9e2b6c8d3f517ca5b143e5fefb26cb9ca12760e2e8d823b5e0efc1bda1ece017bc2c71c6a30a02bf0b374069fa072a95fd3f2b65330b1d89b0a2c1be0e14563b0efb8419c5065b29884d12cbc0afd355f2c88535871275113badbd278cca1e32ac7032dc9c21911668869e17ab8efa92ec5b0880fd375115d0ff3fd0df0aac25ebb7214aca5b1ee59bcdfe08b08ff928abf11a43f25d518d4801660c628d9955c0803d68e92684bde75176cb5d964af55d1c2a014e3e05e8e00caed2fc0e76cb3fc9fb4e4af3f5a7d5a16c92bc23a72cd0529d2db645b2c6fef3cf7f06284d5d181bd3348a6b2e0fd144eafe7ef3f44d3678b7d446f3bfa4eec4c0f01ab389d94afd2b1b8e6cac2f91743a7f28187030000",
    ],
    [
      "ETag",
      "3vEiweR28BwSiE60uOU6IQ==",
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
      "Thu, 09 Sep 2021 18:12:09 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ltv`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-10-1631211111899",
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
      "9b3014fd2bc8fbb2494980900744aabaac652d524a3a425a55d394d860985b82a96d326555fefb2ea6e96bd38a90e0fa9e73efb90f3fa03b56a6688208cbef6b2a761f6e39411d4415cee1342c02714e7e576685afd560b8ab96d80df3a32340b08625f1a62a6857f25a24544e968b5e2e785d61c1791702756dab6b8f1cbb6f378feb79c093b4c866acbc03f64fa52a3931cd43ee5ece795e505c31d94bf8e6e9dcdcf6cd4af05b9a2869be4e69421669fe3fe971c113ac182f8f960b10504b2a5674835901129e9929f9fc3a748fe14d2f07f09625142709af4bd5c88210092f3396d74247459307a465bef8410b7fe69fc4c6ba50db75073e58aa558937b43158ba36b03456abeacef81acd2f8c351497b182cab5717dee47bed16282d05886a1bf888d8fc79f8cb368bebc34bedc685fe71f9141574aa562a556156352d046d163e382bfc7d510b0c292b6ced5d81a61dbb53c92917192b9ce90641625c425e32176889578033a4809c5c0534d74cdc2252f47593a48eca135f6bc3e71c71919d1111e588eeb387d8293d4ceecd41a6723b4efa05f82297aca64c5256bbb87aea320f65771b40c4fa6b1afcbc8705da8d3565c53c44b9d0a8a04d07feada375ec62153338a208cfd687a1207577e3bfd19cd71b25bdcc3fc335c480a682ca0838a8a0b9e42d3d0e57c11c4c13c9cce80a1477a79404834f9fef04c887795eeb2d25f348da2e90d70b01078f7c6073a4603b4dfbf4877858b5a43345e5b6dfc6deb4036d4f26cf55f59d0ce1f7b783b0896becd85be2dfde806b54711cda8a065f2fe1600583bdebdbb878b0458b84a90462ab061e712d92449046d778f6db4f84776df73c70ed260a1def81ccb1a7a872637319a8874434bf558517b9174db1a572d9f40e084950983f00cbc7f008f7755a6c804",
      "0000",
    ],
    [
      "ETag",
      "NlIrHbzp/paWt45ypUa8Ng==",
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
      "Thu, 09 Sep 2021 18:12:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-10-1631211111899"
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
      "0002ff7d91514fc23010c7bf4b7d74236c53744b78009d8841906df0620829e518836d9d6d875908dfddeb302346631fdafbdffdfec9ddf548f649be261e5925f14709a2ba8a414d7510802c5325f129782e811804148d910cab397bccaffb02b6f3d7f6ca9dd865184dbb5d2424db42468977249b04d2b524defb91e43403b4a5ea8084aa0a2d9e46935e8432e36b2dc7b3d1a8d71ff9e4645c782ad5b28e1b571805c3f1e07fdb7259ec2f8ee138f2077ef097657132c88eaf02d880809c81eeba107c074c0df54224cd8a144cc94bc140921aae0bb1e0654105e726664cab6d5a1dc7b22d7dee5d17c19433aa129e233b0bb137a2b8a269c03f711fc44140d421ae6653df074cdbb76ecbb2eb41b47c0171e0896cb455f7fbc370e7b4dcfb0608194d13dac8ce2fdebd69399da6ee53058db035bcf86eb35f29906f82e3cc12f4b8edf3e80f5caf035d9e1225188451fcebe7449df5e90b28e5bae748020000",
    ],
    [
      "ETag",
      "SyVcDn+BrehVM0b9O2uSTQ==",
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
      "Thu, 09 Sep 2021 18:12:10 GMT",
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
      "02",
      "ffedd3597282300000d0bbe45b9c8e204bff841464535922c20f1342867d29b845a777afd36bd47787f70498103acfe97968680f3e01c32b654996f628abf0565ef451defb255f7907357dec8d723e6025ad39febb937dd5c9456648c5c9d3b26cedee39d8a3ddd535209ab855518dd0340ba14fe23ec499af5a9ba32935a2933d288e5d1f76048afa96bf3b39a4edd189308f052f68a0edea1db2864dd9e71fc915e98c745e10d63b31fa0a2f2716b5c8deb43e8abbdc0888b935d1711b6bb2700dce6d4cd609bec52393d8206556d2d4174bcb07ea71c9402c5bb84de1f2ededff020b40ef6335d139ad5edbf9b5a22cc05ffdf4cc46fafaaf523cd109fcfc02a87413f719040000",
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
      "Thu, 09 Sep 2021 18:12:10 GMT",
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
      jobId: "grouparoo-job-11-1631211111899",
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
      "02ff85536b4fa34014fd2b64f6e3da524a1fb449b3762b2a494b15a8ee66b321c330e0286590196ad4f4bfef9dc1ba1a13e50bccdc73ee39f7c133ba63658aa62861f97d43ebc76fb73c4147884a9cc3ede0e1ca995f3c45f8d7adf7f3e6f2ece2e93b36f3d90c104cb104de5605ed08ded4848ae926ece6356f2a5c73de81441dcbea5823dbea5bea712613e0095a644b56de01fb46ca4a4c4df3a0ddcd39cf0b8a2b26ba846f5fefcd5ddfac6a7e4b8914e67b49135484f9b9e88f82132c192f679b100c3482d631dd62568085ffcc34397e9fbacbf0b69b0378c708c584f0a694ca16a420bccc58ded43a2b9a3e236df3cd070adda5bb880cc28b665bc625ded22323c512c7f2b1a2c669b05e199e7fba0e56f3c85bfb71b8387757f3ee62bddcacfcd0b83e7703d7903829a8e61a33e3589f7c38807e4a8564a5568fd4b5527e6990f7712c8a00d282b6c178dc1b61cbe94d922c1993ccb18749d6a349e224e321b6931e990ce8204d28069e16d52c5cf2d2b29db1ddb72771e6f4ec7830e8277132180ce33e1e5ae9045b36190fd1fe083dd44cd213262a2e58db21741d78911b47c1c65fcc23579790e1a69027ad3155c05b8f120a04d02735ed5594715052edf6fcc80de68bc8bb72db092f698ec963780f33ce702128a0710dcd93b45ef1141a86fcf9ca3d01b09ed8c52128d0f4cf33523d572edeb4fc951ec100955da9df288c02cf3fd3760e882b5c341ab26b3f5419192b94e9fd5f00c28eb649d0e5c60d7ea3f62aa019ad6949be1e268075e0cb5fedb0f78085cd071921e10cab43841221356d5788e96a0f6cbb371a5948836bf921e68c8687a6a91c2a23ddd252be54d4ee3d14da8a35e215044198beaf9bb5ff079926013177040000",
    ],
    [
      "ETag",
      "4wV8APzTaXjIBhQGPz+a/g==",
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
      "Thu, 09 Sep 2021 18:12:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-11-1631211111899"
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
      "51",
      "6f",
      "9b",
      "3010c7bf8bf74aa4b0b4598bd407b2655d269ab4813c4c53855cfb606e8d8fd926551ae5bbef4cbb6c5a27511ee0eef89db8fbf3f79e3d282359c2ee54fdb303bb7b5783bf09c11a5ca7bda3478bc6018b18785e13993f2d2fc76e85a7937cf235dd3c3c3d7eabbbf4e28208277e40c359b26795022d1d4bbeef99e10d509b40dd35a6ecb388f95d1b8a79b15e2c2f296f50867cb9c9b27496cdd9213a364aee79d9f36f68bb3d44ec1eefd65081052320ccd25abc07e117614dc79b56c3c861670538d6c3fd8bda62d7728b38a2ca288e47f17412bf8fc375767e4ea046c1bd4243ec26a7f99847cff51a1f694b164f88b07d4c1b57fd7d4b7525fb4d42b85816d3937ec0bf012e0476c6978360a5acf3cfeafd065f54f897d4fc8d20fd2aa587a01a8c043b44a9b6e4525a706e904457f2b63d62b3d52a7bad8a9116951c06b76a00d07e7b043e67abf47fd292c1fe68f5292de6af08e7c93647a4585ccdf322bdba0edced8b11663b0feeda22b9ca4130543c3e393bfd301d3f7bec2306dfd177126f3b8898e07454be28cf928a6b07875fd30d652088030000",
    ],
    [
      "ETag",
      "SzNG0sOo53S3JAUkzwYguA==",
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
      "Thu, 09 Sep 2021 18:12:15 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-12-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85537f6f9b3010fd2ac8fb6793d224407e90485597b6ac634b494648aa689a12db18e696608a4daaa8ca77df619aa65da5162181fddebb77773e3fa23b9e456888084fee4b56ec3edd0a821a88299cc0ee22385f5c0d5ac16cfae3a7ea2de7a635de8a87d35360f04a25f1264fd989146541991cce67cda410658e0b214e20d089699d983ddbb4ccea710603d04996c6639edd81faaf52b91cb65a07ef66224492329c73d9a462f3bcdfda5aadbc10b78c2ad97a6dd90217d97adff42c15142b2eb2d3f90c1228252b566c83790a291c9511f9fa3a7493e34d3301f2965386291565a6aab420041559cc93b2d051d1f011e9345ffca0993b762f4263cd855ce13c5f37e0375a1b581aab557e677c0b26d7c61a6a8a79cae4dab8f9ee06ae51733cdf98fbbe3b0b8dcf675f8cab60329f1ae74b8d358e01218b8849c5339d438849ca2affa736796f0fa712608525abc155bfddc3a6d31e9098f469ecd85d12b719210ee977b14dda74d0619d88300c3a5545d72a9c89ac1db52dc7ea10bb3f7068d475308d3b76cf2666d722ccee5b6d081b5ba48ff60df45070c52eb9cc85e475afd04de085ee2a0ce6fec528747519312e537559275715f1324f054502e99dbaf615ca0538558df7fcd00d4617a1b770ebb31eb304d3ddec1e4e3bc6a964c0c605de30c58a6b1141d3d07432f3426fe28fc6a0d007383d30241afe7e3c0ac25daebbacf4178d8260b4040d2e0abcfb0f833c7a1db4dfbfb05be0b4d414cdd7ab3afeb6069009b51c57d6ab550fedffece16d2018f1da0bfd9abbc112d55b018b59c132faf1140059031fded4c3b5012e5c1cb0910ad63073545626b460f5ecf18d4efe496d77bba68334b9506fb05ed73934b98a5145641b96a9a78aea6ba3db5641a57c26010823e37bfe15a0ff00224991f3b6040000",
    ],
    [
      "ETag",
      "VRBVG9/RSPJKt6YU12Lvow==",
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
      "Thu, 09 Sep 2021 18:12:15 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-12-1631211111899"
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
      "75",
      "51df4fc23010fe5fce47b7c44142848407308b12e7d02931c61052c66d16ba5d693b0921fcef5e879107b50fedddf7a3bd2f3dc046d62b18c05296db06cdfea244f7e48b0c6da39ce543536d110240274a563edccb683752dbf2324fdf10137c956a520e87acb0f907560206072824aa9585c1fb016a5121db24d985d09a556eaf3d309e4e9378943250d1ca03e92c4946e3248663f0e35a2cf4e66c99a42ff16d9cfd65991f0358d332c3020dd639fa21b4a135e66ee2f359516985a1a5c6e468a115b74469a8d1c210858c8451278c7adda813f975ddefb350512e9ca49ab5b3679e0d1c39a132da713ce8b2c0b425272ddafd9361671a6c63f8266aa7fb97eefda20ba1ec99ef787efefdec78efd03e1ae20c16fdf857a72837e4e3398eedef0e2017fc1577d29dfae317be105168e7010000",
    ],
    [
      "ETag",
      "MKi1wAlqg+cNYeeLeWilIg==",
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
      "Thu, 09 Sep 2021 18:12:15 GMT",
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
      "02",
      "ff",
      "ed",
      "d35d6e82300000e0bbf459ccc095c1de06884120808a155f4883050ad8f22fb0ecee33bbc6fceef07d039c24a4ebe29e9784814f3063495d276bbb5634e3416dcf99b78574cdd37dee85aeac08163c0783b3bf4af1e8f87e33f8c9115da21c0d5b33aa5bdb1297d0e197773e4d7214b2ca3b20ca37413a7bcd58c807aea12463f7ed42f5c13c869222e80ade8956118d5f66cc7bb70a4ec688f81ba1cdb908e4d055b38c1becf8c8342878cce8043513ab930b8334f990a1767b74e2292d6f87a5dced3181425d606fd2e388dd97c5ef5d03217233e7b262bee3e89db27e79f9bfc00a90a9a62de962fadcbe81aaba027ff5e37eaec9f3bf46704b5af0f30b5d4f641119040000",
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
      "Thu, 09 Sep 2021 18:12:16 GMT",
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
      jobId: "grouparoo-job-13-1631211111899",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda2424e42d452b4ae89a29212b21ed1e9a903117e696608a4da7a8ca7fdfb569ba56955abe807dcfb9e7dc078fe48e170999929867f73554874fb72226670414cdf0f6e7ddfafbe11efcaf57f1b55bdc2e2ebe0e45e1ce6688e09a25e9becca125455d3190d3ddb69d55a22e6925440b13b5ba4eab3b74babdae7ec69309f224e4e98a1777c8fea35429a79dce49bb9d0991e5404b2edb4cec9fef3b0fbd4e59895b604a765e4b76504576de17fd9c0b461517c56cb74503b5842a823de5395af8cf4ce2f3d7a9db9ceedb19821f3803ca98a80ba56d610a268a94677565b292e92331365f7c90adb7f2e6a1c5445eef8ba8a07b38b312aa68a40e255817c1666d2dfd8b4db076c3e5c68fb6f34b6fedb6e79bd56eed6fad9b4b2ff02c45e31c0cd79a59e7e6e4e301f513908a17463dd4d75af9a941cbb763d1049496d004a3913da4ddb13d89d378c4d2b13388531be2781c8f06d4896d36e9433f898122cf881a162d44e1382c6123db89267da717f59dc1301a33a71fc58e9dd0ae4dc73600399e91bf1557b0e0b21492371d2237c132f4a230d8f97337f44c0929ad73b5688ce9025e7a54582082dea9e9a8a35ca0926ef7d20fbdc09d87cb6baf99f00a32ca0edb7b9c714a730988a615364f41b51609368cf8eeda5b20d84cecdb2928c9f4d723d13dd72e5eb4fc991ee200b55d65de641b064bff8bb173425cd3bc369087e6439791f25c9b3efe4620ee6893845cedbce00769ae0248a182827d3c4c049bc087bfda69ef118b9b8f3252e1195787492dc22a6856889b6a4f6c67d8eb0e890157ea4dcc190c4e4dd3397446d843a19e2a6af61e0b6dc46af90cc2204edf37cd3afe031c99c14077040000",
    ],
    [
      "ETag",
      "ZkMXyqeNJQbVAnjDFJ6onA==",
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
      "Thu, 09 Sep 2021 18:12:16 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-13-1631211111899"
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
      "51",
      "6f",
      "d3",
      "3010c7bf8b7924959675b46ba43da4ac40216d479b3d009a22cfbe040fc7176ca75357f5bb73ce46410c29cb437277f99d72f7cfdf7bf64319c91276abaa9f2dd8ddab0afce710acc1b5da3b7a34681cb08881e715915f2f5fb7f7e3855313fcf2f161fc69966d4ff3f4e2820827be43cd59b267a5022d1d4bbeed99e135509b40ddd6a6e8b288f95d138a9b7c3d5fbea7bc4619f2e57596a5d36cc60ed1b15172cf8b8e7f41dbcd21627778bb86122c18016196c6e21d083f0f6b3a5e371a060e5b2bc0b10eee5e5416db865bc4015506f170108f86f1691caef3c984408d827b8586d8eb0dcdc73c7aaed7784f5bb2784884ed62dab8ecee5baa2bd96d12c2f9321f9d7503fe0d7021b035bee8054b659d7f54ef37f8a4c2bfa4e62f04e95729dd07556024d83e4a350597d28273bd24ba8237cd119bae56d973558cb4a8643fb8553d80f6db23f02e5ba5ff93960cf647abcb349f3d239c27db1c917cbe986df2747115b89b27234c771edc954572958360a8f8e4ecfccd7874f2e8b1b7187c47df49bc6d216282d351f9a03c4b4aae1d1c7e01016fa79188030000",
    ],
    [
      "ETag",
      "ZD+uw7Msi9oYJz7KELv2TA==",
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
      "Thu, 09 Sep 2021 18:12:17 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `ios_app`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-14-1631211111899",
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
      "7f6fda3010fd2a91f7cf2651484880805475accdba483474215055d304b671529710a7b6d30a557cf75d9cd21fabb6222438bff7eede9dcf8f68c38b351a21c2b3bb8ac9dda75b41500b318d33385d6cce6e88173cdc4c060be2553617ee95ce8e8f81c16b95c2db3267474a549232359acfda99145589a5104790e8c8f18e9cbeeb749dfae30f87a0532c4f27bcd880fa46eb528d3a9d43ed76264496335c72d5a662fb7cdeb9ef764a296e19d5aaf3b66407aaa8ceff8b9ee48262cd45713c9f81814a31b9645bcc73b0f0a25c93af6f53b739deb63320df73ca30a5a22a746d0b525051a43caba4c98a468fc8d87cf507cd8249709a582b2ed41297e5aa65ad72acf4b2c05b56077cbdb2b0b296cb72637d8fa717d60a1a4c79ced4cabafa11c481d570c2c89a4751304baccf275facf3783abfb4be5d1bacf58fece06fcd94e68571976092b3dad9d300c3f7d7560bb0c68a35e07260f7b1e3db439292014d7db747529b11e293410fbbc4a6438f796bc230e8749ddda870218a9eed7964e0fb6bdfefa63d77e03aa9eb3a1eb387b6ebf6a9ed776dcfe9f57cb46fa107c9353be3aa148a37534457719804cb249e47a7e324306da4b8caf55963ae6ee2b54f0d4d02e93f7ded6b940ba8545f491825413c3e4dc245d06cc1846598ee6677b00729ce150336963041cde48558c3d0d0e5741626e1341a4f4061aef6f2c05068f4ebf14590ec4a33656d7ed1388ec7d7a0c152e2dd5f18f8e87b68bf7f556e81f3ca500cdf444dfefb06400ef4f21275df447db4ffbd876f0bc1f237b5d0cf79105fa3e628662993aca01f6f01900df0e11b3e3c28e0c29382324a430c3b47555d844ad6ec1edf1af34f6a5888ae8d0c59ea779837e81f865ce7a833b22d2bf45347cd833263aba14a3d9300849589c2e81cd03fda8b835cd0040000",
    ],
    [
      "ETag",
      "VkDhb4EwhL7Vb4u0io3Wtg==",
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
      "Thu, 09 Sep 2021 18:12:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-14-1631211111899"
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
      "7d",
      "91",
      "4f",
      "6f",
      "82",
      "40",
      "10c5bfcbf62aa9606b2a8907b5d4da126c512f6d0c5961a0abc0d0dda58d317ef7ce628387fee1c0ce7bfb7b616638b09d2813e6b28dc8de6b90fb8b0cf4b329425075ae151d15960a588781e6199197cec64926527471793be9bd8cd2bbc7ec3a1b0e8950f11b149cb907960ac813c5dcd7032b79011413a8225e5544e97d658cf17cee7ba3808c021363042bdf1f8d7d8f1d3b6d2ae74a474ddde616cb70164cff8f4551b53b2766c1d29b7ae16f91f5b1c3b6b809210509650ca6f74ae216623d336b51bca872b014d63206c51ab8b9c824d61597881639967d65d9fd9eedd8e6b9190c08cc31e65a6049ec6a41bd318d9ae7217ed256588f00d994b4a0b4797f90ad650dcd18463c80fc40a15a6d37ddfe892f629e0bdecafe0f3ae5b93ae31ed767e11878fddde278af413d49a479159851bba7b12768564129d77cb7c3624e7ffb5ee8933e7e0104867d1c4a020000",
    ],
    [
      "ETag",
      "/2b2dCri0oTDC3ZAfFKg5g==",
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
      "Thu, 09 Sep 2021 18:12:17 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b7282300000d0bb64ad0ea250e84ea09202f2715a5adc30490809a50a12fe4eef5ea7d7a8ef0eef0610215488b4ad4a7a01cf6042b2be222bb7d60c6be0b311c47bc82c38f0de23253b5e9dde183fe293ac7d6fe7a04b02ac7173ecbad93ee3b85fe67c0a5dc7cf61e10b1dd9eda79a42d87ad16e509ff22bc644ea0e583f4f4320224da90a31f5d2b27388c8669c376183a022411a4d252dcb2e65d681cbc2e7b11738b6795cfb9257b95ef21a242f08e1565f53ea8bfdb894cc5dce6af57a3128abd9bb91f154d276682499d8840c17d95b3bc36df4d50fa7d5c3c3ff0516808e75d1509116f7ed1b45d717e0af7eda4e35bdff37286a68037e7e0187dfa6ac19040000",
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
      "Thu, 09 Sep 2021 18:12:17 GMT",
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
      jobId: "grouparoo-job-15-1631211111899",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "fd2bc87b6d0284a49048d19aa5b4cd9a90959056db3421e35c985b82536c3a5555fefbae4dd3b5aab4f202f63de79e733f782277bcda9011c97871df40fdf8e95664e48880a205de5ede86f7bdcdf5e5e545f2e5fc0724f6f95dfdf56a3c4604d72c49b7bb123a52343503395aafba452d9a1dad85e860a28e3be8b8c79edb73f5130c87c89350e6735edd21fbb7523b39b2ed8376b710a22881eeb8ec32b17db9b71f7af6ae16b7c094b4df4adaa822edff8b7e2e05a38a8b6abc5ea18146429dc296f2122dfc636eb293b7a9bb9c6ebb05821f3803ca98682aa56d610a26aa9c174d6db292d11331365f7d9055380fa789c544d96cabb4a25b38b23654d1543deec03a8b970b6b169d2de3c524992da37435bd081793ee74395f2fa295757311c6a1a5685682e15a63ebc49c223ca0fe06a4e295514ff4b5567e6ed0ecfd583401a525b4c1d4778ea91b38c32ccf7c9607de20cb1dc8b220f307d4cb1c36ec437f9301459e11352c5a89ca0327e87b3448bdccf3d2beeff4d3e100fc34875ed6f773a7e7329fec8fc89f9a2b38e57227246f3b446ee25912a649bc8ea693243425e4b429d5696b4c17f0daa3c20211f49f9af63aca052ae976cfa2248c27d364761db6139e4341d9e3ea1e679cd35202a2698dcd53502fc4061b46a2c9223c45b099d8b7435092d1cf27a27bae5dbc6af90b3dc1016abbcabcc92a8967d1b9b173405cd3b2319087f6439791f3529bdeff4220ee689b845cadc3f83b69af62c8a1868a7d3c4c049bc087bfda61ef118b9b8f3252e1195787492dc26a6857889b6a0f6c2f707a7d62c0b57a17735dffd0349d4367842d54eab9a276efb1d056ac912f200ce2f4",
      "23d3acfd5f769fb75577040000",
    ],
    [
      "ETag",
      "KjEq2dVKKHTBGZeT/GkrJQ==",
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
      "Thu, 09 Sep 2021 18:12:18 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-15-1631211111899"
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
      "61",
      "4f",
      "db301086ff8bf735d5c880d246e243ba15a8145ad6069036a1c8d897ccccf105db29eaaafef79d0374d39814f221b9bb3ca7dcbd79bd653f95912c61f7aa7a6cc16e3e54e0bf866009aed5ded1a341e380450c3caf88bc7dfcf5ed467ebc10e3f37ad4dc8ccc193fa9d2d353229cf8013567c996950ab4742cf9be6586d7406d02755b9ba2cb22e6374d28aef2e56c7e4e798d32e4f3eb2c4b27d994eda27da3e49e171dff8eb6bb5dc41ef07e0925583002c22c8dc507107e16d674bc6e340c1cb65680631ddcbda82cb60db78803aa0ce2e3413c3c8c3fc5e11a8dc7046a14dc2b34c45eaf683ee6d173bdc427da92c58744d82ea68dcbeebea6ba92dd26219ccdf3e15137e0df0017025be38b5eb054d6f967f55ec11715fe25357f2748bf4ae93ea80223c1f651aa29b894169ceb25d115bc69f6d864b1c8deaa62a44525fbc1b5ea01b45fef81b36c91fe4f5a32d81fadbea4f9f40de13cd9668fe4b3cbe92a4f2faf0277f76284c9c683bbb248ae72100c151f1c8d8e4f8607cf1efb8cc177f49dc4db162226381d950be5595272ed60f71b454981f588030000",
    ],
    [
      "ETag",
      "WqzZVd/Hc9Gm8pV8nFa7gA==",
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
      "Thu, 09 Sep 2021 18:12:18 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-16-1631211111899",
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
      "fd",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90f7cb26a509f92210a9eab296b54829690969154d5362ccc1dc124cb1691555f9df7798a41fabb42224b0df7bf7eecee76772cff3988c49c4d3870acaed973b119116014553dccdd2c164e9762e2e9fac210f7b81ba184cb2ebe36364f05a25e9a6c8e0488aaa6420c78b793b2d4555d05288230c74d4b5f0ed777bddfab11d077512b264caf37b54ff51aa90e34ee7e0dd4e854833a005976d26362ffb9dc75ea728c51d30253bef2d3be8223bff373dc904a38a8bfc7831c7042a09e50a36946798c2ab328ebebf0fdde674d34e91fcc81950c64495ab3a2d0cc1449ef0b42a7554327e263acd373f64ee4eddd3d058c754c1ba65ac79bc36a83456abe2def819cc2e8d351694f00ce4dab8bd7003d768389e6f2c7cdf9d87c6d7936fc679305b5c193f961a6beda3a17f0c52f15cbb8734caa076de37c8fb782cb5802a2aa1015723d3a25ddb74a2241ab1c4ee0fa3c48428b2a3d190f62393390318c41150d4a93aba56d15ce456b76fdb4e14434cfb3062b43b4822d3193227a123d3b12cdbb612331a8cc8ae459e4aaee08ccb4248de7489dc065ee8aec260e19f4e42579791d02a53674d7275116ff354582492fe53d7ae46b940a7bae59e1fbac1e434f46edce694a79052b69d3fe039273493806c5ad20d28282f458c4d2357b3b9177a337f3245853ebaab034392f1afe75741b82d749795fe9249104c96a8a16549b7ff6098873520bbdd1bbb1b9a559aa2f97ad5c47f6c00d2c55a5e57bd772b8bec7eeff06d111ceec68b5c2fdc60499aad00122821679f4f019235f0e91d3d5c18e4e295411ba9708d33c7646dc24a68668f6f74f27b",
      "75df31ed21d1e4527dc07a43f3d0e43a461d113690ab7d45cd85d16daba14abe9010c491f13dff1cd1bf6a1c74e3b0040000",
    ],
    [
      "ETag",
      "lg4AYE/HMw65iT2RtH4AlQ==",
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
      "Thu, 09 Sep 2021 18:12:19 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-16-1631211111899"
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
      "75",
      "91514fc23010c7bfcbf9ba25db485096f0c0745122993281174348b71d73b0ed6adb6908e1bb7b1d065fb069dafeafbf6befdf1e615fb505849055e56787ea7053a299db458abaab8de64952ab111c40234a265789c9b297329e63543f7732b96d0a134dc6632674fe818d80f008db0aeb4243f87e845634c8698530f6107390563d4c1631ab860aab92e56c368966319c9c0bbfd9c8fd1f3f4d16f1639c5e4b599f1cd85196e21615b639daeba5a21de6666a9d69d1c81a5d4d9dca51430ff71ba5a24e0a45e472c4f587dc077ee0db76371a3158532e4c452db3cb37ae0d0c1951a7f4cdc660c080ea97ec71db8f5f1c0ebcc073bdc0f5fcde8c0df97d8d57a1e1051afe0f051728b0d0fab78ee86050bf2a62531aad1fefeced9eac5f7eecd0a80e1dc805ffca5365cefaf40322c7334bf2010000",
    ],
    [
      "ETag",
      "VNtbbOgEQeBlKupN7mdtBA==",
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
      "Thu, 09 Sep 2021 18:12:19 GMT",
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
      "02ffedd34d7282301800d0bb64ad8c8008e94ea4807f28860675f30dc460b1a2340131edf4ee757a8dfaeef0be51c61897129aeb07bfa017a432036b4c9bd78eeb7565093cef9fde56ad35a234706f8bd73b1e384bde7695a8e23c2ae22aaa537fcc76096c889fe6ef7dc3536da5d6e561eadfd25d21b662ab8f82cd111cacdb7ccfd902e4e5b0224143bab39d252180418bcfc999ec1de68d5492717f0ec3c58d4a92baf1179e2621b1c2231d0657cc8ce4ee8ce7a96e46a621846c6ddf35d24110cafdc9ecd752cfd725541305f185dab96a22a798592bd24c059d1d96630adad3d3ff857a88dfeb527009e563bb6961dc437ff5a151357ffc777926b8403fbff697355819040000",
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
      "Thu, 09 Sep 2021 18:12:19 GMT",
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
      jobId: "grouparoo-job-17-1631211111899",
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
      "c8",
      "fb",
      "da04f20212295ab394ae4c095981b4eaa6091963985b820936adaa2aff7dd7a6e95a556af902f63de79e731f3ca13b566568865256ec5bda3c7eb9e5293a4154e2026ec7edcaca7efdc0c4f4bfd1fdd5be8c2e6eeccbf91c104cb104ded525ed09de36848ad936ea170d6f6bdc70de8344bd81d31bd8a3c170a01e773a059ea065be62d51db0ff4a598b99691eb5fb05e7454971cd449ff0ddcbbd793f34eb86df522285f956d20415617e2cfab5e4044bc6abf9360203ada04d4277989560e13f334b4fdfa6ee33bceb1700be67846242785b49650b52105ee5ac681b9d15cd9e90b6f9ea0345deca5bc606e165bbab920aefe88991618913f95853e33cdcac0d3f38df84eb45ec6f82245a5e78eb457fb9596dd741645c5f78a167489c9654738db971aa4f011c403fa342b24aabc7ea5a293f37c87f3f1645006941bb60e258361eb8d634cd5387e4ee6892e6164d5337752678945a643aa6e32ca518785a54b370c5abe1c84933673c4986d87292b16d8f13d7caec644a89351ab9ee783274d1e1043d344cd233266a2e58d721741dfab197c4e136582e624f9790e3b694679d3155c06b8f120a04d007351d5494715052edf683d80b17cbd8bff2ba09af6881c963b48719e7b81414d0b881e649daac79060d43c162ed9d01584fece73128d0ecf713523d572e5eb5fc851ec300955da9df288a433ff8aeed1c1157b86c35e4befb5065e4ac54a60f7f00083bda2541975b2fbc41dd554873dad08a7c3e4c00ebc0a7bfda71ef010b9b0f3242c21956870825",
      "421adaad10d3d51ed9a3a9ebda48831bf92e3675ec63d3540e9591ee68259f2beaf61e0aedc45af10282204c3fd0cd3afc03a69c19f477040000",
    ],
    [
      "ETag",
      "4uL0dZJac/IBeqVqlSHY6Q==",
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
      "Thu, 09 Sep 2021 18:12:20 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-17-1631211111899"
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
      "6f",
      "6f",
      "9b",
      "30",
      "10",
      "c6bf8bf7966865cd688bd41764cb9648e4cf12fa6aaa906b1fcc99f131dba4caa27cf79d69974deb24ca0bb83b7e27ee1e1e1fd97765244bd983aa7f74600f6f6af05f42b001d769efe8d1a271c022069ed744be850cc68bba9eb8d93afbb957c96c973cd6b7b74438f10d1aced223ab1468e958faf5c80c6f80da04eaae31659f45cc1fda50dc169bf9f233e50dca902feff23c9be453768ace8d927b5ef6fc2bdaee4f11dbe1c3062ab0600484595a8b3b107e1ed674bc69358c1c765680633ddcbfa82d762db78823aa8ce2ab519c5cc6efe2705ddfdc10a85170afd0107bb7a5f99847cff5061f694b165f1261fb9836aefafb9eea4af69b8470be2c92713fe0df0017023be3cb41b052d6f927f57e83cf2afc4b6afe4a907e95d243500d46821da2545b72292d383748a22b79db9eb1c96a95bf54c5488b4a0e837b350068bf3f039ff255f63f69c9607fb4fa9815d31784f3649b3352cc17d36d912dd681bb7f36c2e4e0c1ad2d92ab1c0443c517e3ebf757c9c593c73e60f01d7d27f5b68388094e4765a63c4b2bae1d9c7e0199f0b44a88030000",
    ],
    [
      "ETag",
      "/eAe4MggBsHPAzvi6Hj6wg==",
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
      "Thu, 09 Sep 2021 18:12:22 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `date`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-18-1631211111899",
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
      "fd",
      "6f",
      "da",
      "30",
      "10fd5722ef974da2247c07a4aa636dd6a5a2a10da155354de0d84ee612e2603b9d68c5ffbe8b53fab5a94548707eefddbd3b9f1fd08ae7148d50ccd34dc9e4f6d3ad885103318d53380d5667a767f9fd6aeadfcf65cbf636e71b7e7d7978080c5ea9145e17193b50a29484a9d17cd64ca5280b2c85388044072df7a0d5efb4daadeae30e87a0532c4b263c5f81fab7d6851ad9f6be76331522cd182eb86a12b17e3ab7efda7621c52d235ad9af4bda5045d9ef173dca04c19a8bfc703e0303a56272c1d6986760e15949e3afaf5337395e375320df71c23021a2cc75650b521091273c2da5c98a460fc8d87cf107cdbc89771c594b8a355b36ac6586955ee4786d024e971656d66251acacefe1f4dc5a427709cf985a5ad73fbcd0b36a8e1f58f320f06691f5f9e88b751a4ee717d6b71b8335fe971a9c51a634cf8daf08c719ab3c3d8ecefff7c22a01d658b11a5c0c9c3e6eb9ce304ee20149dc4e2f4e1c16c76e3ce8e14eec9061977569cc30e87495dda8702e7232a409a5bd9eeb0cdabd618c1ddaedd07edf2549925096d05edbc5f1a043d1ae81fe48aed909578550bc9e1fba0efdc85b44e13c381e479e6923c165a64f6a7355132f7d6a681248eff4b5ab502ea05275197e1079e1f838f2afbcfafe272cc5643bdbc0062438530cd858c2043593e782c2d0d0c574e647fe34184f40612ef562cf5068f4f3e159106d0b33656d7ed1380cc737a0c152e2ed1b0c7cf4bb68b77b51ee0a67a5a118be89eafc7735805ad0cb73d47e15f5d1eed70ebe0d046b5fd74297732fbc41f551c81226594e3ede02201be0c3d7bb7f4ac085c70465948618768ea8aa0891acde3dbe36e61fd5ddb6ebb691214bfd16eb388eb31f7295a3cac8d62cd78f",
      "1dd54fc98cad824af54402105626f0835340ff0257b74230ca040000",
    ],
    [
      "ETag",
      "NkJGJnzkOIzUr1/EqMqiWQ==",
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
      "Thu, 09 Sep 2021 18:12:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-18-1631211111899"
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
      "0000000002ff7d915f6f823014c5bf4bf70a19606294c4079dc43f316602264b16632a5c190894b5173762fceebbc58dbdb8f150eeb9fd9de6f6f4c24e691933971dd2e4bd06d93c24801b5df8a0ea1c15fd2a512a600603e40991e3b80a71fe9905d9e379f0325d220e7bcd66342242456f5070e65ed831853c56cc7dbdb0921740b698a33e049b4aabe938f4481522d66abd5dadc69395c7ae46c7e75ce1bead3b5310fa8bf5ec7fdb7e5f9d7e1d8b75e8cd3cff9e65773558260e3e1c414219819eba92228308173a10c58b2a0753895a46a0580bb71b891475c5a51026754c7b60dafd9eedd8fa1b0c8704e622e2988a92d86d40b33114c8735f7c501eac47806c4b8ae6d8ae676a3b96639996635a767b19dd5a823c8b5475da6e67be6bea775010f13ce59decffed713ac8d32ff3231cedd87dcf3c6910d4b3141480027d77eb96c393d0d990cb455983c1224e0f3f4ff1a6af5f8aca552955020000",
    ],
    [
      "ETag",
      "AdpTtHxjSj/v8XDJtt93yQ==",
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
      "Thu, 09 Sep 2021 18:12:23 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "59",
      "52",
      "83",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "e4",
      "bb321544827f6c958285915296fe304926a58c2c81a46c8e77b7e335ecbbc3fb068810ca7921ba2fda8237b020599788e43368da5389abb2af4f4ebebd3688be4ca592ad56432cbf8642bb2eba613c7b221f67fcc1dc5633555cac76338f9dc73d582361694adaab7ae806e11e1bc264b3df5ec6e614305fce203da6d4a9cf5e141dfd843ceda0afb837dce4db3d6fd9c15cf97208b1a22b322fd18ebaf1e226bd3b06836c1b711b546637a985d51cc6d99127d4e69c84f6cd8171ee4c63c2d2baca3eeb5830fbbc08e782d5e8f51d9222911e1efe2fb0017466d5407951ddb72baaae6fc05ffd422c8cdeff9b140d74003fbf6165211319040000",
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
      "Thu, 09 Sep 2021 18:12:23 GMT",
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
      jobId: "grouparoo-job-19-1631211111899",
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
      "00000002ff85536b6f9b3014fd2bc8fbb826843c80448ad628a16baa846c405a4dd3846c63985b82536c5a4555fefbae4dd3b5aad4f22160df73ee39f7912774c7ab0c4d10e1c57dc3eac3975b41d019620a17703bbbbaf0f32bd7168b9517f76f0e2332ff7a5b4ca780e09a25f16e5fb28e144d4d999c6ce36e518b668f6b213a90a8e38c3b8e3b70fa8e7efcf118789295f98a5777c0feabd45e4e6cfba4dd2d84284a86f75c76a9d8bddcdb0f7d7b5f8b5b4695b4df4adaa022ed8f45bf958262c54535ddc660a091ac4ed90ef3122cfc6766e4fc6dea2ec7bb6e01e0074e19a6543495d2b620051555ce8ba63659d1e409199baf3e501cac827962515136bb2aadf08e9d5919563855873db32ea2cdda5a86179b683d4b969b308de797c17ad69d6f56db75185b37974114580a939219ae35b5cecd298403e8674c2a5e19f5445f6be5e7062ddf8f4513405ab236987a3d173b7e6f4c72e2d1dc1f8c48de6384f8c41be101e9d1f1900d33c230f08ca861e14a540c0f7cc7edf5523f1bbae9d0ef6729711c2fcdbc01c93cf819b923743c438f35576cc1e55e48de7608dd44cb244893681bce6749604ac87153aa456b4c17f0daa3820201f4414d471de5029474bb97611244b379b2bc0eda09af5881e921be8719e7b8940cd0b886e62956af45060d43e16c1d2c006c26f6e3149468f2fb09e99e6b17af5afe424f6080daae326f1427d132fc6eec9c10d7b86c0ce4a1fdd065e4bcd4a68f7f00083bda26413fb741f40bb55711cb59cd2afaf930016c029ffed54e7b0f58d87c90910aceb03a546a115ab37685b8a9f6c41e0e5cb78f0cb856ef62b037a7a6e91c3a23dbb14a3d57d4ee3d14da8a35f2050441987e689a75fc07e2c6a78477040000",
    ],
    [
      "ETag",
      "AJF8fJ6/oDL7S2Wy5bC+jg==",
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
      "Thu, 09 Sep 2021 18:12:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-19-1631211111899"
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
      "61",
      "4f",
      "db301086ff8bf771a944067434121f5a285ba5b4853468120845c6be64668e2fb39d4255f5bfef1c58990652c887e4eef29c72f7e6f596fd5246b284ddabea770b76f3a9027f15820c5cabbda34783c6018b18785e1179735196e9719c3e81b57afef947933dc1f2f1f49408277e42cd59b265a5022d1d4b6eb7ccf01aa84da06e6b537459c4fca609c5559ecd16df28af51867c719da6e3493a65bb68df28b9e745c77fa0ed6e17b107bccfa0040b464098a5b1f800c2cfc29a8ed78d8681c3d60a70ac83bb1795c5b6e116714095413c1ac4c3c3f84b1cae93d188408d827b8586d8eb15cdc73c7aae337ca42d597c4884ed62dab8ecee6baa2bd96d12c2d9221f1e7503fe0b7021b035bee8054b659d7f56ef2ff8a2c2ffa4e61f04e95729dd07556024d83e4a350597d28273bd24ba8237cd1e9b2c97e95b558cb4a8643fb8563d80f6eb3d70912ec7ef494b067bd5ea7c9c4fdf10ce936df6483e9b4f57f9787e19b8bb17234c361edca54572958360a8f8e0e8e4f8ebf0e0d96367187c47df49bc6d216282d351f9ae3c4b4aae1decfe005f7cd92e88030000",
    ],
    [
      "ETag",
      "ZFffL51LxerrlM+WpRxeOw==",
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
      "Thu, 09 Sep 2021 18:12:24 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-20-1631211111899",
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
      "fd",
      "4f",
      "db",
      "30",
      "10fd5722ef974df4bba16d2a21562063412565690aeaa6a9b5d34b669ac6c176982ad4ff7d1787f23124882225f67befdeddf9fc40d63c5b9121613cb92b406e3fdd0a466a04344d70d751ebd67cd63fe84717eb930319b8173fa54c8e8e90c14b95a29b3c85ba12858c400d67d3462245915329441d03d53bad7abbd76d77dae533701cd42948e331cfd6a8fea375ae86cde6debb910891a44073ae1a91d83ced37ef3bcd5c8a5b88b46abeb66ca28b6abe6f7a9c8a886a2eb2a3d914132814c8056c284f318567e58a7d7d1dbac1e9a69120f99e4740a34814992ed3c21091c8629e14d24425c30762d27cf143a6eed83d0dada5d2187359b3967cb5b4a8b2168b7c6d7d0b2697d6122b8a790a6a69dd7c7703d7aa389e6fcd7cdf9d86d6e7e32fd67930995d59277383d5f6e130831528cd33e31f529642e9fdd822efedc19402aaa9820a5cf45b3dda1eb41c16b37e140fba872c6e016303d63fa45dd68a1c1bec15038a3a5d46372a9a89aceb741cd6819e63233f660e73b0d35d0a039bc6281a443183d88115d9d5c85fc9359c71950bc5ab3e919bc00bdd4518ccfcd351e89a32625aa4faac4aae2ce2659e1a8b44d23b75ed4a940b742a9beef9a11b8c4e43efdaadce790c098db6d33b3ce998a60a904d25dd8006792956d8347235997aa137f147635498c3bbda331419fe7a781684dbdc74599b2f1905c1688e1a2a25ddfe87611e3d9bec762fecae695a188ae19b5515ffbe02481b6b795e755ead7a64f77b876f8de078575ee4c7cc0de6a4da0a20060959f4f11420d9001fded2fd95412e5e1ab4c1c9d31c672e52a54924a19a3dbe31c93faa6ddb1ef488214bfd06ebb53bfb269731ca88b0814c3f56545d19d3b6122ad413",
      "09411c19dff3cf11fd0798b1e376b2040000",
    ],
    [
      "ETag",
      "9sk0YU7+7cJkB+rREJZrrg==",
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
      "Thu, 09 Sep 2021 18:12:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-20-1631211111899"
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
      "6d",
      "916f6f823010c6bfcbed2d2ca2c0c4c417ba908d448d434d5c16632a9c0c05cada3225c6efee1597fdc9ec8bf6eee9efda7bda13ecd322861e6cd2e4a34251df25a85e7410a2ac322569297921110c40c512228b651a1c37cbe32e5e1c8207f1ead8b65b27fd3e11327ac79c41ef04db14b35842efed0405cb91caa46279498caa4b9dce83b13f9b0fc65392721e6b69b2188d06c3910f67e3bb6abd2ef73f45c164ee3ff9e1ad92d5d9801ddf84b845814584ba8952f01d462ad0fe24dd9ea12979252294d0c0cd4622785532c1b9498ad96e9996dbb1da961e5dcf2330e31153292f885dcca837505cb12ce407b2071d02441392d36d337f926cdd3bdd96e3789667fb5ee3a7519b36ff719e67fde5dcdb9c6bd389bfb9b6e6565f0d0d6b85722a38b993a88db5ae261fb936aee84194a8d08088d1273da7ea9a9f2ff3a2516e01020000",
    ],
    [
      "ETag",
      "nXiIxbXxjdUwI7rY5446yg==",
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
      "Thu, 09 Sep 2021 18:12:24 GMT",
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
      "08000000000002ffedd3597282300000d0bbe45b9c8865eb9fa8d02265316ef5271363c2566409a0b1d3bbd7e935eabbc3fb0684522604eeaa825dc02b9044b5c674bcaa4d7b71cdf5c31d7ed9e6964a6bb239e263020befe382b4b8dbd3659ce317c90e77122a7da5bb329d2c42d8a62ec73e5f5f3f7d67b54554bad4d38d038e4d0bcef1da5ce60bdd204253ca0206058d729f4f92d9a036e112b779d53732188c15d36fa9736b9433761de847f6bcdc95d26068973abceadfaf81919f82ca435ebf398a0d831c0599106f9ccb5a4ddc619a397ba38eb40422d51bcea52a638d74f72d398d9f9efe2f3002ec56672d13387b6c9f6a9635027ff571276bf6f86f33d2b216fcfc02b579f3a119040000",
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
      "Thu, 09 Sep 2021 18:12:25 GMT",
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
      jobId: "grouparoo-job-21-1631211111899",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14fd2bc87b4d4242420391a2354b691b29212b21ada66942365c985b82536cba5555fefbae4dd3b5aad4f202f63de79e733f782277bccac884305edc37503f7eb9158c7408285ae0adedc46c3c2ab8bce87f1b3bf7e57cfb17e8d5748a08ae5992eef62574a568ea14e464bbe915b568f6b416a28b89bacea03b38190e9c817e3cdf479e84325ff2ea0ed9bf95dacb896d1fb57b8510450974cf652f15bb977bfbc1b1f7b5b8855449fbada48d2ad2fe58f46b2952aab8a8a6db0d1a6824d409ec282fd1c27f66c64edfa6ee71baeb15087ee029d034154da5b42d4c918a2ae745539bac64f2448ccd571f64132c83796ca5a26c765552d11d74ac8c2a9aa8c73d58e7d17a652dc2f375b49ac58b75986ce697c16ad69baf97db55b8b16e2e8328b014652518ae35b54ecd29c403ea672015af8c7aacafb5f2738316efc7a209282da10d26e3fe091d787d9fe56c9ce6ded065791f18f3d8d8a543d64ffd118c3206147946d4b068252aa0279e9b8d20c9fca19b8c7287257eee8d12c745aa3b60aee77be4d0217f6aaee08ccbbd90bced10b989167190c4d1369ccfe2c09490d3a65467ad315dc06b8f0a0b44d007351d74940b54d2ed5e847110cde6f1e23a6827bc8482a68f9b7b9c714e4b0988a635364f41bd1219368c84b35570866033b1efc7a024939f4f44f75cbb78d5f2177a8c03d4769579934d1c2dc20b63e788b8a66563200fed872e23e7a5367df88540dcd13609b9da06d10fd25e4590430d55faf930116c029ffe6ac7bd472c6e3eca4885675c9d546a91b4867685b8a9f6c81eb9037f480cb856ef620e8eb8f37fdf7546d841a59e2b6af71e0b6dc51af902c2204e3f34cd3afc03fd83619d77040000",
    ],
    [
      "ETag",
      "/2Tb74gisG0B72qlCUxeaQ==",
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
      "Thu, 09 Sep 2021 18:12:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-21-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d93514fdb3010c7bf8bf79a4aa440a1917868b7c2228516daf0845064ec4b66eaf832db29abaa7ef79d032b0826853c247797df2977fffcbd636b65244bd8a3aa7eb760b7df2af0b72158826bb577f468d038601103cf2b22efdad9ed383d9b0fcdba86abf5f4cfa51c9e3e5f5c10e1c42fa8394b76ac54a0a563c9fd8e195e03b509d46d6d8a2e8b98df36a1b8ca97e9fc8af21a65c8e7775936996633b68f0e8d927b5e74fc17da1ef6117bc2c7259460c10808b334169f40f834ace978dd6818386cad00c73ab87b51596c1b6e110754190ce3413c3a8e8771b8cec76302350aee159aa0c08ae6631e3dd74b7ca62d597c4c84ed62dab8ecee1baa2bd96d12c2749e8f4eba01df035c086c8d2f7ac15259e75fd4fb07beaaf091d4fc8b20fd2aa5fba00a8c04db47a9a6e0525a70ae974457f0a63960d3c522fbac8a911695ec0737aa07d07e73002eb3c5e47fd292c1deb4fa31c9679f08e7c93607244faf67ab7c727d13b88757234cb71edc8d4572958360a8f8e8e4fcf46c74f4e2b1ef187c47df49bc6d216282d351f9a93c4b4aae1decff02213838b288030000",
    ],
    [
      "ETag",
      "UuEQ9I7N2nkmeGkBxFd25w==",
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
      "Thu, 09 Sep 2021 18:12:25 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp`, `last_name`, `id` as __pk FROM `profiles` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `stamp`, `last_name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-22-1631211111899",
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
      "2bc8fbb2497991072191aa2e6de98696928e9054d13425b631d42d608a4db3a8ca7fdfc5347d6d6a1112d8f79c73cfbdbe7e40b73c0bd118111edf95acd87dba110435105338865d33deeed2c9f2cfe4c7f6fce47a751e79d6d2dc1e1d0182572c89d33c614d29ca8232395ecc5b7121ca1c17423441a8d9ed364dab6776cdeab14723e0499644539edd02fb5aa95c8edbed43ee562c449c309c73d9a2227dda6fdf77db79216e1855b2fd3a651bb2c8f6fb498f1341b1e2223b5accc1402959b16629e60958786686e4eb6be916c7692b06f03da70c532aca4c55b640828a2ce271596855347e40dae68b1f3477a6ce69606ca402cd4dc3d82458aa758653562d78b831b034d6ebfcd638f76717c606ca8b78c2e4c6b8faeef88e51635ccf58789e330f8ccfc75f8c6ffe6c71699cac74acf15f6df01632a978a69d059824ac72f5d83cf7df23ab085861c9eae07ad8b1b06977462422431ad9bd01893a8c109b0c07b8473a74d467fd90300c3c55a96b16ce446646516fd01b746d125112d97db333b2877dd3a6cc1c609b7458685ae130b2d0be81b60557ec8ccb5c485e77105df96ee0ac037fe19d4e02479711e1325167b5b9aa88973e151409a077eada57512e2053751cae1738fee43470974e3d01531663ba9bdfc10c4438910cd0b8800e2a565c88109a862e6773377067de640a0c7dac97078444e35f0fcf846097eb2e2bfd4513df9fac80838b02efdec4c087d547fbfd8b744b9c941aa2f17a55ebdfd70164422dcfabeeab15b4f3f71ede0682c1af73a19f0bc75fa17acb67112b58463f9e0200ebc087f7f77099000bd709d2c0182a0e334765958416ac9e3d9e",
      "6af38fecfe6034ea230d2ed4db98650e868726571a95224b59a61e2baa2f936e5b152ae513088230329eeb7d83e85f2b10285ecc040000",
    ],
    [
      "ETag",
      "1gwymAVxAKwFBhYFfN6V1w==",
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
      "Thu, 09 Sep 2021 18:12:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-22-1631211111899"
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
      "02ff7d92dd6e82401085df657b0b2de04f84c40b35c4d2a8b1804993c69815478a024b7717ad18dfbdb3d8d03635e502e60ce7cb1e4e38937d926f8843d649fc5e023fddc5209fd5e083285329f051b05c00d108481aa3f3205a93ca98daa3ca7f308e1fed6af672aa06fd3e3a44f4061925ce996c1348378238af6792d30c10139266057ae4a95032f4a66e100ea6735c656ca356b3c56432184e5c72d11a2aa542aeeab92183d0f766e3ffb1d5aad87f13de2c74c7ae7f0b595e34b2636b1fb6c0218f40652f38db41243d558bc0d029e882953c02416a73fd22e6ac2c28674cc78d6e59bad96d9996a9ae9e6da33165119509cbd1bb08301b914cd2d467476c85b4d0c0eb110bdad6f703aecdfb4ecfe8746cd36ebb76fd3d6afb04fcc012d168b38efd87b36df3371744344d6823bbb7b16e1b0ffc89b95442232c052dbfc20f4f12c49c336c42802ac1b8163262aa24a41cc94bd04844f13f784ce4555f3e011436d8a464020000",
    ],
    [
      "ETag",
      "vs3Lz0M9CzR/0wx4zNXyzA==",
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
      "Thu, 09 Sep 2021 18:12:26 GMT",
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
      "8b08000000000002ffedd3516e82300000d0bbf45b8c40a0b2bf311822140822203fa4eb6a55aa34805231bbfbccae31df1dde03604268dfd743dbd00b780377ac5973320fc4d27646e6c05236beda32c9af884c32cdb2622457c8c3c2436daab19090da18f9f29cadbb56284ba998f146b82a3ba7c921728c515bcbc37eb3a97bdf3cb493312cd458e9d02996bb4f0c3f8ebc8189c1749c9e78958b55d08715c1d0c46618e8b1875ca732bc3c1a16d35ed16ee9c53ddb85b9bda1aceaa6c6b503bf64304e129da30966ba576edfd5225f95da17ca29260c7d27c2e791be8d52ab10bbbba6ce5f5efe2f3003548a6347fbfaf8dcae1b9635037ff5ebe12ee8f3bf4d71473bf0f30b6ea7a82419040000",
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
      "Thu, 09 Sep 2021 18:12:26 GMT",
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
      jobId: "grouparoo-job-23-1631211111899",
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
      "db3014fd2b95f711fa4c69d24ad5a84a5823b5e996a4a0699a22dbbd0986342eb10342a8ff7dd70e652024c897c4bee7dc73ee23cfe44e945b32214ce4f735544fdf6e2523a70434cdf13680557f744f17e1c94d12072a39d181b3789c4e11210c4bd1ddbe80b69275c5414d367127af64bda795946d4cd41e38edfec8e90ffae6f1c663e42928b2a528ef907da3f55e4dbadda3762797322f80ee85ea70b97bbdef3e0cbafb4ade02d7aafb5eb28b2aaafbb9e8f74272aa852ca79b180dd40aaa1476541468e13f73cbcedfa7ee08baebe4087e101c28e7b22eb5b18529b82c3391d795cd4a26cfc4da7cf341627fe9cf93169745bd2bd392eee0b4b5a59aa6fa690fadcb68bd6a05e1e53a5acd92601da6f17ce1af669df97ab9598571eb7ae1477e4b535680e5b6a6ad737b0af180fa5b505a94563d31d746f9a541c1c7b118024a2b6882a9db1bd1bed71bb38cb93cf39c3396f580318fb967d4613d3e1ec270cb8022cf8a5a162d65e90c07cc01eea599e7b274086c948e3d96a57d67c05ddacfbce1c0258753f258090d1742eda5124d87c87514247e9a449b703e4b7c5b4246eb425f34c64c016f3d6a2c10419fd47430512151c9b43b08133f9acd93e0ca6f26bc849cf2a7f81e679cd14201a26985cdd350ade4161b46c2d9cabf40b09dd8cf635091c99f67627a6e5cbc69f92b3dc1011abbdabe499c4441f8c3da3922ae68515bc843f361cac844614c1ffe221077b449427e6dfce83769ae22c8a082927f3d4c04dbc097bfda71ef118b9b8f324ae31957872b23c22b685648d86a8fece168341e120baef48798eb3ac7a6991c2623eca0d42f15357b8f853662b57a056110a71fda661dfe01103e4a5f77040000",
    ],
    [
      "ETag",
      "IeM16qaHN+hTSIsT+tI3Hw==",
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
      "Thu, 09 Sep 2021 18:12:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-23-1631211111899"
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
      "936f4fa34010c6bfcbde5b1ac56a55125fd05ef59ad03f527ce3c590951db8f5961ddc5d6a9aa6dffd66d1abe6bc04790133c36fc2ccc3b33bf65b6ac122f628abe716ccf65b05eed60729d856394b8f06b505163070bc2252af124cef757c6de74737f89c0e27b7f793eaea8a085bfc829ab368c74a094a5816fddc31cd6ba0b602555bebbccb02e6b68d2faeb374b6b8a1bc46e1f3c55d92c4e364caf6c1a15170c7f38eff42dbc33e604ff89842090674017e96c6e013146ee6d7b4bc6e140c2cb6a600cb3ab87b51196c1b6e100754199c0c07e168189e84febab8bc245061c19d444decdd9ae6630e1d5729bed0962c1c1261ba98362ebbfb86ea52749bf870b6c846a7dd801f015e14d86a97f782a534d6bdaaf7177c53e15f52f12f82f4aba4ea832ad0024c1f259b9c0b61c0da5e126dce9be6808d97cbe4b32a5a1894a21fdcc81e40b9cd01b84e96f1ffa42583bd6bf53dcea69f08ebc83607249bcda7eb2c9eaf3cf7f06684f1d6815d19245759f0860a8f4f2fcece47c7af1e9ba0f71d7d2772a68580159c8eca0fe95854726561ff075e8f65ae88030000",
    ],
    [
      "ETag",
      "nPLoRZnAFsM/GoqR3CQZCg==",
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
      "Thu, 09 Sep 2021 18:12:27 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-24-1631211111899",
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
      "da3014fd2b91f765d378131240aa5a56b21289421b42ab6e9ac0496e52d31053dbe9862afefb6e9cd296556b23a4109f73ee3df7e14772c7b288f449c092fb1cc4f6d38a07a44240d1044f47a320fffa3d3d5b653faebac3ebd5f976c846974747c860854ad2f52685aae4b90841f6e7b35a2278bea182f32a06aab6cc6ad36a375bcde2e9f67aa89390c66396dda1fa56a98decd7ebfbdcb584f32405ba61b216f2f5f379fda155df08be8250c9fa61ca3a6691f5f7931ea73ca48af1ec683e4303b904b1803565295a785146c1c961e81aa3eb5a82e40716020d439e67aab08521429ec52cc9858e4afa8f44db7cf587cc9cb173ea1bcb9809a916195dc3b2622c75d6a541a5b1586cee8cefdef4dc586265314b412e8deb91e339c633cd9d18f3c9c499f9c6e7e32fc699379d5f18df6ef670e520389a8a402a96694b3e0d5228ec3c75cd7d3bab4240159550820bbb61d166b7d10be2c00ee36ebb13c40d08826e6077683b68843d13cc28008a3a5544d72a9af18cb67a5664b76cda307b76bb091dd3b4034a032bead8d06e87605956a31575c9ae427e0ba660c8e4864b56b68e5c7baeef2c7c6f3e391df88e2e23a679aa86a5b9a288d73e151689a477eada1528e398a998833bf11d6f70eabb574e39fa312434dcceee71f8314d25209b0aeca00271ce236c1ab998ce5cdf9d4e066354e8795eec1992f47f3ebe08fced467759e9371978dee006355408bafd079bf99e3b3923bbddab7c5734cd35470bf45799e0a10408ac70f938938d13f8a38bd4ebb7abbc3070311534ff0be37cd42d8843fcd70e7f158237a5f4482ee78e7743ca230f621090851f6f0f9235f0e185dfdf3ee4e2fdc33452e137ee6a288b24a1807267d9ba30b3579bb6d9b488260bf506eb98ddfd708a1845445843a6",
      "9e2a2a6f9fee7601e5f2998420aedaa49cc55fe0a859e2fd040000",
    ],
    [
      "ETag",
      "HHbu+FlGjnZV8DWjMyDiHQ==",
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
      "Thu, 09 Sep 2021 18:12:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-24-1631211111899"
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
      "0000000002ff8d91d14fc23010c6ff97f3d1cd303446484884655122121cf2640829e5360bdb6eb61dba10fe77afc518e2937d68efbb7e5f7abff4003b556da00f6b957f34a8db8b1ced8b2b52344d610d1f3555062100b42267a7bc5c3f45b3b8a5668af239d1493cded7c3c1801d46be6329a07f804c61b131d07f3b40254ae458a6b4b12b2f02b06ded7af3d7743c7d605dd2c6e9e96232198e26091c83dfdc6a55effe93581e03d8d23ac50c355612dd14b5a62d4a3b768046947581a1a1464b34e0cdfe22d7d4d4421385dc09bb3761747b1d7523b7ee7a3d361624855554b17731e7d1c09215454a9fcc075d36685f326ae6f73db713add05338815bd47b52a6738f5f7e8a2b49a59ff83c120ba98ab394446131fa1b59fe3c3f6a2d9a99266631e8303a27a4989cdb32bed50d062005ffc9a3b2277dfc069ec5ef4cf0010000",
    ],
    [
      "ETag",
      "c+bK1PCyouNecMErECIvpA==",
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
      "Thu, 09 Sep 2021 18:12:27 GMT",
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
      "0000000002ffedd34b7282300000d0bb64ad8e8048e8ae918fc102f2abc28609312868f85a513abd7b9d5ea3be3bbc6f4028657d9f5eeb33abc01b7810519dd1d9a681481bca5c24364d03617fd41d09eed25894b5d0dc63365f858c1db431ae3181ef19c45196d45cd70adf184ec3b995461885b7d25ab85de5f3d8b3707ed295c23dadab9edb9ff7ad7c768ee3eab034913625a560c0ddb650e5aca522211946edc63285dad5ab85b26ea340a47969d7fc869bc30d9b16bae412ff487890aeaafd57b2a5ae99fb8ad74c51a62717e8ef3cf2306544edfc2aae979e1174730e1bee0ceaece5e5ff0213c0ee4dd1b13e2d9edb25595527e0af7e7a7d34ecf91f31d2b10efcfc0294496fb719040000",
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
      "Thu, 09 Sep 2021 18:12:28 GMT",
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
      jobId: "grouparoo-job-25-1631211111899",
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
      "c8",
      "fb",
      "da843c089048d19a25748d96900e48ab6e9a903186b9259862d328aaf2df776d9aae55a5962f60df73ee39f7c113ba67658a262861f94343ebc3973b9ea0334425cee176d5ecbddbe0e65b7630a5d34b863f6e17fb5ffbe914104cb104de5505ed08ded4848ac936ece6356f2a5c73de81449dc1a8d3b787fd415f3dee780c3c418b6cc5ca7b60ff95b21213d33c697773cef382e28a892ee1bb977bf371605635bfa3440af3ada4092ac2fc58f46bc109968c97d36d08061a41eb98ee302bc0c27f669a9cbf4ddd6578d7cd01fcc808c584f0a694ca16a420bccc58ded43a2b9a3c216df3d5070abd95378f0cc28b6657c625ded13323c512c7f25051e322d8ac8da57fb109d6b368b9f1e3707ee9ad67ddf966b55dfba17173e9059e21715250cd35a6c6b93ef97000fd940ac94aad1ea96ba5fcdca0e5fbb12802480bda0663a767e3bedb1b2759e290cc1d8e92ac4793c44d9c111e263d32b6a8952614034f8b6a162e79993a63cb4e5d2b26c4eec556af9fc5637760c76460bbfdd1d0c99cb48f8e67685f3349174c545cb0b643e82658465e1c055b7f3e8b3c5d42869b422e5a63aa80d71e251408a00f6a3aaa28e3a0a4dabdf4232f98cda3e5b5d74e7845734c0ee103cc38c385a080c635344fd27acd536818f2676b6f01603db1ab5350a0c9ef27a47aae5cbc6af90b3d82012abb52bf5118054bffbbb673425ce3a2d190c7f6439591b142993efe0120ec689b04fddc7ac12d6aaf029ad19a96e4f3610258073efdd54e7b0f58d87c901112ceb03a44281152",
      "d3768598aef6c4b65ccbb69006d7f25d6c643ba7a6a91c2a23ddd1523e57d4ee3d14da8a35e205044198beaf9b75fc07263bcc2577040000",
    ],
    [
      "ETag",
      "LuwEYRWBfy/t70b3KYDwZw==",
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
      "Thu, 09 Sep 2021 18:12:28 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-25-1631211111899"
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
      "6f",
      "6f",
      "9b",
      "30",
      "10",
      "c6",
      "bf",
      "8b",
      "f79648a17fd214a92f922d5ba3d1a44ba8b469aa90631fccadf131db244251befbceb44bab7512e505dc1dbf13770f8ff7ec5119c912b651e5ef066cfba104ff2d042b708df68e1e351a072c62e07949e4ae995e7f773fb2cd857c346d3b16c3af3bb7bbba22c2895f507196ec59a1404bc7929f7b667805d426503795c9bb2c62bead43719dade68b2f94572843beb84bd3c9349db143746c94dcf3bce3dfd1767f88d8036e565080052320cc525b7c00e1e7614dc7ab5ac3c061630538d6c1dd8bd26253738b38a0cae0e47c108f4ee393385ce3cb4b02350aee151a62efd6341ff3e8b95ee18eb664f12911b68b69e3a2bb6fa9ae64b74908e78b6c74d60df81ae04260637cde0b16ca3affa4de5ff059857f49cddf09d2af52ba0f2ac148b07d94aa732ea505e77a497439afeb23365d2ed3b7aa186951c97e70ab7a00edb747e073ba9cfc4f5a32d88b569f26d9ec0de13cd9e68864f39bd93a9bdcdc06eefed908d3d683bbb548ae72100c150fcfc6e717a3e193c73e62f01d7d27f1b68188094e47e55a7996145c3b38fc01391fbb6088030000",
    ],
    [
      "ETag",
      "wuBHXsYTb7dknyy8c0Kwsw==",
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
      "Thu, 09 Sep 2021 18:12:29 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `first_name`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `first_name`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-26-1631211111899",
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
      "ff85546b4fe24014fd2bcdec97dd84474b6b0b244659adbb24086e29baee6603d3728b03a55367a6bac4f0dff7762a8a6b544202d373cebde73ea60f64c5b239e992882d6e0b109b4f4b1e911a014517f8d41dd0e5d5afd5fd59780ade393337b667ffec1d1e2283952a49d7790a75c90b1183ec4ec68d85e0454e05e7750c546fb975cbb5ad96557eda9d0eea24a4c980652b54df2895cb6eb3b9cbdd5870be4881e64c3662be7e7adebc6b3573c197102bd97c99b2895964f3fda447298fa9623c3b9c8cd14021414c614d598a169e95f3e8f865e806a3ebc602c9772c061ac7bcc854690b43c43c4bd8a2103a2ae93e106d73ef0f19fb03ff2434660913524d33ba8659cd98a574efa02dcc0c2a8de9345f1967c1e8dc986199094b41ce8cabef7ee01b4fb4fed0980c87fe38343e1f7d31be05a3c985f1f57a07d7dece8476e72015cbb4d990462994461ffbd97f3dc552401595508153cf74a9d5363b51127971d2b60fa2c484286a47de01b52333ee38e0cc23a0a8536574ada219cfecd8b3bc56e4cce379cb8c1c4a0f1ccfa3d4712dcb496ccf0470dd7662b9645b23f78229386532e792554d2557413ff4a76130199ef4425f9791d02255a795b9b2887d9f0a8b44d23b756d4b9471cc544ea83f0cfda07712f62ffd6a2906b0a0f1667c8b6b91d05402b2a9c00e2a10e77c8e4d2317a3713fec8f86bd012af4a42f760c49babf1f9e05e126d75d56fa97f482a0778d1a2a04ddfc878dc3a03ffc46b6dbbd7c97342d34470bf4a94a7057010496b8969c49f318feea22f5626e6bcf0c5c5905d69b30ce47dd807889ffd9e2b746f00e551ec98f891f5c93ea51000908c8e28fb707c91af8f055b0bb97c8c59b8969a4c233ee6a2ccb24b1806a67d9ba34b3533b1ddb6e134d16ea15e6d8ce6e38658c3222ac21538f1555f75277bb840af9444210576d58cde21f7114502617050000",
    ],
    [
      "ETag",
      "6LajWZkwFTDe7Mi0y373XA==",
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
      "Thu, 09 Sep 2021 18:12:29 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-26-1631211111899"
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
      "51",
      "d14ec23014fd97eba39bb2912c4242a2230b620891210fc61052cadd2c6ceb6c3b8410fedddb6290f864ec43db737bcecd39b707d8886a055d588afca341b5bfcad14cec2545dd1446d351cb4a23788086e5c47c8d93b889cae8f65adf0eda21db45ed6632e9f588a1f93b960cba07c804162b0dddb70354ac4492654269b370c003b3af6d6dfa920ec703c2a55c593c9e8d460ff12881a377d615ec5fb2c5a2defc45313f7ab096cb1433545871b4e66b25d7c8cdd0ce45b3b22ed0d7b2511c3538b27bc8956c6aa6a4f4a9e287911f44ed200cecbaeb74885848ce8c9015716753b206461a56a4f293c602211194bbd28432b76fa99c28812e85054fa8b652e833c6f5a9d0bac79d7375c365e9125cb6e8332e8a8b2e09333f8023a1e0b77efeed2dde1bd4cf4a52508d3663eb94b72f2d9bda748d6ad003cee89f1f8539e1e3177c8babb544020000",
    ],
    [
      "ETag",
      "YBEBu6m6/+s/G32ax63uQQ==",
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
      "Thu, 09 Sep 2021 18:12:29 GMT",
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
      "02",
      "ff",
      "edd34b7282300000d0bb64ad4e9528a43bf90815818a8ac44d866260281f5302c4d0e9ddebf41af5dde17d83244d29e7a4bb95b401af40260b344b672ed37453e4d7cff4faaecd8fed86ba2a3935c22eeb31f4b9ad8d22f3ca385e2ebbb7d8a984a925b058c332ecfb731aadf3555927bd742b5f425c6cd1c994a251727c74b371bff36c05f181099137f3bdd3411daae738d5ab43846d250836c418ea10a919ac8e7c75cedb97068ed920a7c1ad29ac51153b793f518745d2c1bc542f1e0e0287628b2c288abf3ceeeaeac12af469ee6f1d6c9035bb740a365646bff960b3a7a7ff0b4c00bdb3a2a59c148fedca12a109f8ab4f3ac9e8e3bf4e9396b6e0e717500f9fc019040000",
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
      "Thu, 09 Sep 2021 18:12:29 GMT",
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
      jobId: "grouparoo-job-27-1631211111899",
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
      "9b3014fd2bc8fbb82681bc13295ab384b69112b211d2aa9a2664cc85b9059c6293298af2df776d9aae55a5962f60df73ee39f7c1913cf222266312f1f4a982f2f0e54144e48280a229de5e1f72190fbfdecfb79ecabfcfb8eaa7fbe974324104d72c49f35d060d29aa92811c6f37cdb414d58e9642343051a33d6838fd8ed376f4331c8d9027214b96bc7844f61fa57672dc6a9db59ba910690674c7659389fce5beb56fb776a57800a664ebad640b5564eb63d16f99605471514cb61b3450492843c829cfd0c27f661c5dbe4ddde4346fa608de7306943151154adbc2144c14094fabd26425e32331365f7d908dbb746781c54456e54558d01c2eac982a1aaac30eac2b7fbdb216ded5da5f4d83c5da0b37b31b77356dced6cbedcadb587737aeef5a8a461918ae35b12ecdc9c303eac720152f8c7aa0afb5f2738316efc7a209282da10e8603bb4f9da13d8a9268c09261a717253644d1301af46827b2d9a80bdd38028a3c236a58b41045bfd7e924b6e384d0b769d875581cd2763b0ee3b84f47711be2fe2826a70bf2b7e40ae65cee84e47587c89dbf08dc30f0b7de6c1ab8a6848456999ad7c67401af3d2a2c10411fd474d2512e5049b77be105ae3f9d058b5bb79ef01252ca0e9b279c7142330988a625364f41b91231368c78d3953b47b099d88f735092f1af23d13dd72e5eb5fc851ee000b55d65de6413f80befdad839236e695619c8befed065243cd3a64fbf11883b5a27213fb7ae7f4fea2b1f1228a1609f0f13c126f0e9af76de7bc4e2e6a38c5478c6d561528bb012ea15e2a6da33bb67db9d3631e052bd8b395de7dc349d4367841c0af55c51bdf758682d56c917100671fa9e69d6e91f0f0904e677040000",
    ],
    [
      "ETag",
      "Gymsd8+YDUNtmBCit6gvAA==",
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
      "Thu, 09 Sep 2021 18:12:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-27-1631211111899"
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
      "00000002ff8d93516f9b3010c7bf8bf74aa49264698ad48764655d244ada843e7453855cfba0ee0cc76c93288bf2dd77a66d36ad95280f7077fc4edcfdf97bcf7eaa5ab2883da8f2570b66f7a90477e38315d8563b4b8f066b0b2c60e07849e4446cdde57818df6d47bfe7e9f4e6bb8d1fd3edf93911563c42c559b46785022d2d8b7eec59cd2ba03681baadeabccb02e6768d2faeb3d522bda4bc42e9f3f4364966f3246687e0d828b9e379c77fa0edfe10b0277c584101066a017e96c6e01308b7f06b5a5e351a06165b23c0b20eee5e9406db861bc4015506c3d341381985c3d05fd3b33302350aee14d6c4deae693ee6d071bdc22d6dc9c21111a68b69e3a2bb6fa8ae64b7890f176936197703fe0b7021b0ad5dde0b16ca58f7acde2bf8a2c2ffa4e61f04e95729dd0795504b307d946a722ea5016b7b49b4396f9a23365f2e93b7aad4d2a092fde046f500da6d8ec0d764397b4f5a32d85fad2e6659fc86b08e6c7344b2c555bcce6657d79ebb7f31c27ce7c05e1b245759f0860a4fc6d3cfa79393678f7d41ef3bfa4ee44c0b01139c8eca37e55854706de1f0077e486d8c88030000",
    ],
    [
      "ETag",
      "6cwtG42EYw3zBN8QZsEhNw==",
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
      "Thu, 09 Sep 2021 18:12:33 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-28-1631211111899",
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
      "02ff85536b6fda3014fd2b91f7659380bc7804a4aa6534eb22d1d086d0aa9b267082939a8638b51d5656f1df77e39496ae5a1b2185f89c73efb90f3fa23b9a2fd1004534bd2f09df7e5ab1083510913885d3953de96e379e3e62f4617695d8d18f65f1e7f2e80818b45209bc2e32d214ace4311183d9b4957256169833d684404dcb699a5ddbb4ccea71fa7dd0099225639adf81fa56ca420c747d9fbb95329666041754b462b67e3ed737965e70b622b114faeb943a6411fafb498f33166349597e349b828152103e276b4c33b0f0a25c4627af43b7285eb752206f684c701cb33297952d0811b33ca169c95554347844cae6c11f3475c7ee28d4161916729ee3355934b4854abad0b0d0e6f3e24efb164cceb5051496d08c888576fddd0d5ced99e6f9daccf7dd69a87d3efea29d0593d985f6f5660f370e6383a5251192e6ca5088a38c54669e7ae6bd9d5425c0120b5283f39ed1c5a663f4a324eac5896377a2c42051e444bd0eb62323eeb7497b19110c3a5945572a9cb31c3b498c7162987dabebb4934ed7ea1b6d1b9b51d7329776bb97d8edbed1c30eda35d06f4e2539a5a26082d68d43d78117baf33098f9a361e8aa32125c66f2b436571571e8534291407aa7ae5d85520699aa29787ee806c351e85db9f5e0c724c5f1767a0fa34f702608b031870e4ac2cfd9129a862e26532ff426fe700c0a35cd8b3d43a0c1cfc71741b82d5497a57aa361100c6f408339c7db7fb0691878fe19daed0ef25de1ac541c25505f75824d0d20b282d563541827e44115a9966fd77861c05a4a62fe1786f9c85bc25fe3bf76f06b20b827b547743973831b541f0524219ce4f1c7db0364057c78ddf7770fb870fb208d90f00dbb1a8b2a49cc49bdb3745d99d9ab3bb6d536912273f9066b5b9dfd70aa185544b226b97caaa8be7baadb15548a671280b06a7e3d8bbf275a14e4fb040000",
    ],
    [
      "ETag",
      "j3O6yvI/CoixUVf3bZdpzQ==",
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
      "Thu, 09 Sep 2021 18:12:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-28-1631211111899"
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
      "000002ff8d515d6bc23014fd2f778f6b8775e04741d81cb2399c689dfa304462bcd66adbdb25a94ec4ffbe9b74c8d8d3fa90dc73724e720e3dc33ec9d710c22a893f4b54a79b18cdd80e11ea32359ab782728de0011a115be5ecb649d49c8df76f819a8f1a661e6fb7c74e87155a6e3113109e619360bad6107e9c211719b22d15da2cddec813915969abc47fde133e38cd6160fa783c16377d0838b77b52d97c5fe3f8ec5c5831dad22dca0c25ca20d5128daa1347ddb4f8bac48d1d7542a891a9cd81dc48aca4228229f19bfdef283c67d500fecd76ab75998921426a19cb5d30947034346a4111db91ed459a0dcc84d376e3d30fd8aea408976452cc65d45d41ef0cb05b99394b9d0bf5d3d61f06a91c828f8ab5ffc3cdf3d19d42345dc45a3ad51ab2a3d9155f335a151257a2005ff9297c454f8f20d2b1584a8ef010000",
    ],
    [
      "ETag",
      "bV+7oo7VQkM1rWP6tWghhw==",
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
      "Thu, 09 Sep 2021 18:12:33 GMT",
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
      "000002ffedd34b7282300000d0bb646d1ce563a14b7e7e688b4269814d0662a0d48081442238bd7b9d5ea3be3bbc1bc831269c23713e91163c833157cc399efbccb01c595bbcc38a63d2aac0b160a15f678312c34bab4b6fefef92a9d19cb00936e36e812bc18ec4c8121a6850ddb74c3a762016c706364513949f16255de496877334558da764d724feae56c7019950a598dab4d3d33534a2cbf4127eacbb54ae183f902716c9c80e65be7c856ef1b6a523d4a5769936db0deb85575b998b86d368a1aa0cd57e446b6e17e7afc544f76959c4ab54e722d9a55c0c4bc37bafca369d3f3cfc5f6006c895d53de1a8be6f5775d39c81bffa488c8cdcff5b24ef490f7e7e01ffef3f7b19040000",
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
      "Thu, 09 Sep 2021 18:12:34 GMT",
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
      jobId: "grouparoo-job-29-1631211111899",
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
      "54",
      "ef",
      "6f",
      "9b",
      "30",
      "10fd5790f7b5f91d1212295aa394ae4809d980b49aa609d9cec1dc02ceb0695555f9df77364dd7aa52cb17b0efbd7b77ef2e792277a2da93396122ffdb40fdf8e55632724640d31c6f2713aaeed681ba5e4f1fc2ab4a27912af37cb14084302c45cb43011d259b9a839aefe26e5ecbe6406b293b98a8339c750693d16038308f379b214f4191ad457587ec3f5a1fd4bcd73b69777329f302e841a82e97e5cb7def7ed83bd4f216b856bdb7923d5451bd8f45bf1692532d64b5d8c55840a3a04ea1a4a2c012fe33f7ecfc6deaaea0653747f0bde04039974da54d599882cb2a137953dbac64fe446c99af3e48ecaffd55e2705934659556b48433674f354df5e3019ccb68bb7182f0721b6d9649b00dd37875e56f96ddd576bddb84b17373e547bea3292bc0729d85736e4f211e507f0f4a8bcaaa27e6da283f1b14bc1f8b21a0b48236984efb133af0fa3396b129cfbc91cbb23e30e6b1a94b47accf676318ef1950e45951cba215f6ec4d3d97cd2629f7066e3a9eb8b3948d18a4eed8f5189edc291b91e31979a885860ba10e5289d621721305899f26d12e5c2d13dfb690d1a6d0176d61a681d7356a6c10411ff47434512151c9d81d84891f2d574970edb7135e434ef963fc17679cd14201a2698de669a837728f869170b9f12f106c27f6fd145464feeb8918cf4d15af2c7fa127384053aeb66f122751107eb3e59c10d7b4682ce4befd306d64a230451f7f231077b44d427eecfce82769af22c8a0868a7f3e4c04dbc0a73fb5d3de2316371f6594c633ae0e574684d7d0ae90b0dd9ed8ee783019120baef5bbd8a83f3a996672988c5002fe333cdb61f71e1b6dc51af502c2204e3fb4661dff013edeafb277040000",
    ],
    [
      "ETag",
      "66askLIsVL7wNHntTRsmgg==",
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
      "Thu, 09 Sep 2021 18:12:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-29-1631211111899"
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
      "936f6f9b3010c6bf8bf7b2442a4d9725487d916cd99689fc5942a44a53855cfb606e8d8fd9265514e5bbef4cdbb45a27515ec0ddf13b71f7f0f8c0ee95912c61b7aafcd380dd7f28c1ff0cc11a5ca3bda3478dc6018b18785e12b95743d5a4cbb9bfc7c1d9f4875955eefaacbcba22c289df5071961c58a1404bc7925f07667805d426503795c9db2c627e5f87e2265bcf16df28af50867cb14dd3f1249db263746a94dcf3bce5dfd176738cd81ddeaea1000b464098a5b67807c2cfc29a8e57b5869ec3c60a70ac85db17a5c5a6e616b14795dec5a8170ffaf1451caee16844a046c1bd4243ec7643f3318f9eeb353ed0962cee1361db98362edafb8eea4ab69b8470b6c80697ed80af012e0436c6e79d60a1acf38fea3d834f2afc4b6afe4e907e95d25d50094682eda2549d73292d38d749a2cb795d9fb0c97299be55c5488b4a76833bd50168bf3b015fd3e5f87fd292c15eb4fa32cea66f08e7c93627249bcda79b6c3c5f05eee6c90893bd07b7b248ae72100c159f5f0e3f7e1a9c3f7aec3306dfd177126f1b8898e07454be2bcf92826b07c7bf6f80704688030000",
    ],
    [
      "ETag",
      "yi8iuLOMtko6+EJnPmsX+g==",
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
      "Thu, 09 Sep 2021 18:12:34 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-30-1631211111899",
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
      "2b91f765934a9b504a1f12820219449414921484a6a9759c9b6048e3623b1d15ea7fdf8d43790c0da24a697cceb9f7dc879fc83d2f12322031cf1e4a90ab6f7722260d029a66781ab6f34379b2b31a3dfae2ecd45b9d5df583d6e5de1e3278a55274bec8614b895232508349d8cca42817540ab18581b6daf696b3db76b69deae9f5fba85390a7235edca3fa56eb851ab45a9bdccd4c882c07bae0aac9c4fce5bcb5dc6e2da4b803a655eb7dca166651adcf93eee78251cd45b13709d140a9404e614e798e165e95497cf03e7493d3793343f29233a08c89b2d0952d0cc14491f2ac94262a193c1163f3cd1f12ba23f728b266b95ece1ad6cca49b595459d3e9e2defa198ccfad199694f21cd4ccba3e7503d77aa179be35f17d378caceffb3fac93603cb9b00e6f3670a38e8a3612509a17c64444e31c2a03cf7df23e4ea712504d15d4e0b46bef52a767f7e334eeb2b4d7eec4a90d71dc8bbb1dda8e6dd6df819d24068a3a5d45372a5a88a247bbdd5d3b49ec24eeb394d1247592ed3eb459ea503bed31da7762daa3295937c81fc9351c73b5108ad7cd22d78117b9d32898f847c3c83565a4b4ccf5716dae2ae2ad4f8d4522e993bad615ca0566aa3aeff9911b0c8f22efcaad873d828cb255f880e34e69ae00d954d2396890e722c1a6918b71e845ded81f8e50612678b1612832f8f5f42a88560bd3656dde641804c31bd45029e9ea1f2c8c02cf3f21ebf59b7c57342f0dc708cc579d60590304ee70dd0457f6013c9a22cdc2ad1baf0c5c450dce7f619c8fbe05f91effbdc65f83e0dda83d92cb891bdc90fa2880142414ecebed41b201bebce29bfb865cbc",
      "71984669fcc65d65aa4ac224d43bcbe795998dbad3b13b6d62c8527fc09caeb3194e15a38a087328f47345f57d33ddaea052bd9010c455f3eb59fc055ddeacaaef040000",
    ],
    [
      "ETag",
      "S3lBrG4yLxNoKHIyKV9R/Q==",
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
      "Thu, 09 Sep 2021 18:12:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-30-1631211111899"
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
      "6d",
      "91",
      "5d",
      "6b",
      "c2",
      "30",
      "14",
      "86ff4b76db8aad1f5841d8947dc88aae55d9c51089f1b456db9e2e49dd44fcef3b89c38db15c24e74d9e97735e7262fbacdcb03e5b67e97b0df27893828e4c1183aa73ade8a8b054c01c069aa74406c56b3b998e9ec3b01347ebad1f4d45cf8b06032294d842c159ffc4920cf28d62fdb7132b790164cbf581087dac8c7808a7777392056e8c9c2cc2f06e18deb3b373e557ab6aff6398cde3f1e4f13fc7f2ecb01dae6348404229c074af24ee40e8b109a67851e5e02aaca500c52c6c1f528975c525a24b376eabe97add96e77b66f58280c01c05d71996c42e66341ad3a8791ee307e5623e01d2961431b1fbc15c778286e7db1c46c20ee40133d5bc854f3b4743606167fe6d0ada8d56f7ea11c035787f0dcbeff6c3a306f52291b22830319a97482334b4a6f85ad6e030c1e92f9e327dd1e72f6eba75d2e8010000",
    ],
    [
      "ETag",
      "9mW4fOCKLL5RQbh2QOc81Q==",
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
      "Thu, 09 Sep 2021 18:12:35 GMT",
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
      "8b08000000000002ffedd34b7282300000d0bb646d194443a4bb066b00f9554019370c42108c1a0c504c3bbd7b9d5ea3be3bbc6f901705edbaace78c5ec12b90b9662885b26e177839d67e96e0c3a6f4d54388c98edcb6d118af79dbdb56454e0393c26363851069ee1fb63d0b337dfa69ac547d30adc42d33c67beda67363bfda04b976e1c4bcc4acda74d7dd1b8c6c8aa30537e569f021f48efa7d17d2aa5cc43e0e9ada5b3acccb7920e69ee05ca2269d1134069a653b06c30e8df5d51a5af0dccfed347e29069544efae731df42fc4dc1c91488a6d7d9407397713ba47033ca7fd684e2355797afabfc004d07bdb08da65cd63fb0c1ac604fcd5cf7ad9d2c77f4c734105f8f905ab6a945b19040000",
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
      "Thu, 09 Sep 2021 18:12:35 GMT",
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
      jobId: "grouparoo-job-31-1631211111899",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2bc87b6d0294249048d11a2574414a484748ab699a903186b905ccb0695755f9efbb364dd7aa52cb0bd8f79c7bcefde009ddb13a433394b2e24f47dbc72fb73c4567884a5cc0ad555af421bc5ddf347fad6abd5d61935ca5c57c0e08a65802574d490782772da16276d80f8b96770d6e391f40a281630fec89639fdbeaf1a653e0095ae61b56df01fbb7948d9899e6497b58705e9414374c0c09af5eeecdfb73b369f92d2552986f254d5011e6c7a25f4b4eb064bc9e1ff660a013b44d6885590916fe33b3f4e26dea21c3d5b000f03d231413c2bb5a2a5b9082f03a6745d7eaac68f684b4cd571f68ef6ffc656c105e76559dd4b8a2674686254ee463438dcb68b73582f072176d1771b00b93fd72ed6f17c3e56e73d8867be366ed47be21715a52cd35e6c6853e857000fd8c0ac96aad1eab6ba5fcdca0e0fd581401a405ed83896b4db0ed59d3344f5d927bce38cd2d9aa65eea8eb1935a643aa2a32ca518785a54b3700d3563c773dd699e7829c992513e1e275e3671124cb133f56c77726e4fd0f10c3db44cd215130d17acef10ba8982d84fe2e8102e17b1af4bc87157ca556f4c15f0daa3840201f4414d4715651c9454bb8330f6a3c5320eaefd7ec21b5a60f2b8ff0333ce712928a0710bcd93b4ddf20c1a86c2c5d65f01584fecea141468f6f309a99e2b17af5afe428f6180caaed46fb48fa320fca6ed9c10d7b8ec34e4beff5065e4ac54a68fbf00083bda2741df0f7ef403f55711cd694b6bf2f93001ac039ffe6aa7bd072c6c3ec8080967581d2294086969bf424c577b628fc793918d34b895ef62ae639d9aa672a88cb4a2b57caea8df7b28b417ebc40b088230",
      "fd5037ebf80f6ae5f3e077040000",
    ],
    [
      "ETag",
      "0l0ewNjHWpx0mHMDa/cPbg==",
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
      "Thu, 09 Sep 2021 18:12:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-31-1631211111899"
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
      "61",
      "6b",
      "db",
      "30",
      "10",
      "86",
      "ff",
      "8bf6710ed44b97a6867e48566f0b384993b85018c528d2d95327eb3c494e0921ff7d27b7cb4a3b70fdc1be3b3f87ef5ebf3ab05fca4896b0adaa7eb760f71f2af0ab10acc1b5da3b7a34681cb08881e71591f17e311f5f6f4d9d361f1fefa677bbf462255657574438f1136ace92032b1568e958f2e3c00caf81da04eab636459745ccef9b50dce4ebd9e21be535ca902f6eb36c32cd52768c4e8d927b5e74fc3bdaee8f117bc0ed1a4ab0600484591a8b0f20fc2cace978dd6818386cad00c73ab87b51596c1b6e110754190ce3413c1ac69fe2708d2f2f09d428b8576888bdddd07ccca3e77a8d8f2e683224c276316d5c76f71dd595ec3609e16c918fcebb015f025c086c8d2f7ac15259e79fd4fb0b3eabf09ad4fc9d20fd2aa5fba00a8c04db47a9a6e0525a70ae974457f0a63961d3e5327bab8a911695ec0777aa07d07e7702be66cbc9ffa42583fdd3ea7a92a76f08e7c93627249fcdd34d3e99df04eefed908d3bd077763915ce520182a3e3b1f7fbe189d3d79ec0b06dfd177126f5b8898e07454be2bcf92926b07c73f00aa555e88030000",
    ],
    [
      "ETag",
      "1yNM8DbnmEp+wXBXvE7QcQ==",
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
      "Thu, 09 Sep 2021 18:12:36 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ltv`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ltv`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-32-1631211111899",
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
      "ff85536b6fda3014fd2b91f76593788457084855cbdaac8b4a431b42ab6e9ac0364e701be2d476d850c57fdf8d53fa58b70e2125ce39e79efbf203bae3d9120d11e1c97dc1e4f6c3ad20a88698c6097c4da40c93abbc7b565c638e27ab6fe3e6d9eaf2e00018bc5429bcce535657a29094a9e16cda48a428722c85a843a07aa75d6f399d56bb55fedcc100748aa5f1986777a05e699dab61b3b9f76e24422429c339570d2ad64fdf9b9b763397e29651ad9aaf2d9be0a29aef9b1ea68262cd4576309b4202856272ced698a7a6c0bd72498e5e876e70bc6e2440de70ca30a5a2c874991684a0228b79524813150d1f9049f3c50b9a7a63ef38b216a9de2c6af0c04acf33bc66e5c1782f2cacacf93cbfb3be8493736b01f5c53c656a615d7ff542cf7aa2f981350b026f1a591f0f3f59a7e16476617dbed9c3b5bf5840824ba634cf4c7a1126292b537beca0ff766ea5006bac5805cefbb6835bae3d2031e9d3d8edf4486c33425cd2efe10eb1e9a0cbba4bc230e87419dda870263262bb0eed0fdc38b67b4bd7e991410f3bc4217dbbddc5fdcec00470691bed6ae8a7e49a9d70950bc5ab36a2ebd08fbc7914ce82e351e49932625ca4faa44aae2ce2659e1a8a04d23b75ed4a940b702a67e20791178e8e23ffcaabd660cc124cb7d37b588418a78a011b4be8a066f25c2ca169e86232f5237f128cc6a030b3bdd833141a7e7f781644dbdc74599b271a85e1e80634584abcfd039b46a11f9ca2ddee85df154e0bc3310273aa0c361580d82d2ca2e0ca3e62bf4c91661577b567062ca966ad7fc2301fbd62f235fe6307ff1a825b53e5882e675e7883aa4f218b996419fdfff600d900ffbdfcfb9b085cb88b60a3349c6157a92a4da864d5cef27599cc5edd73ba6e1b19b2d46f30c776f6c329639411d99a65fab1a2ea269a6e9750a19e4800c2aa05d52c7e032614d79809050000",
    ],
    [
      "ETag",
      "grrRgVp4KuWaiaOhZL/KhQ==",
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
      "Thu, 09 Sep 2021 18:12:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-32-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d91dd6e82401085df657b0b06b0da4a62526d6db52156516fda18b3e2404160e8eee24f8cefde596c68d38ba65c2c7386ef6ce60c27b68df30d73d93a8e3e4a10c7ab08d454173ec83255925e05e61298c140f188c8315ad164f8b03f24a31befb5152e66a5554ebb5d2264f00e1967ee898531a41bc9dcb713cb7906644bd58e08752cb478f45e7a7392196eb41c2f3cafd7f706ec6c7cf35caa5555d7aed9dc1f8d9ffeb6ad56c5f63f8ee5d96009ae7d0841401e801eba109840a0467a1f9267450aa6c45204205905571f228165c105a2491db3e99876bb693bb67e6e3b1d02530cb88a31277631a3d19842c5531ff7b40ee61020aa92361356e74eb75b9d86ed5439b47c06b1c358d61a924bc3ba8343355723c0accaf0f392ce75a3d9ae3d03aea0160190b27fbb975fb3f58f0ae444200595a0335a97bcf7a869bac655a20483059cfeef3056177dfe046c3aed1f3c020000",
    ],
    [
      "ETag",
      "No0gPHDwxjI7LZ5fUSu0uQ==",
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
      "Thu, 09 Sep 2021 18:12:36 GMT",
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
      "000000000002ffedd34b7282300000d0bb646d1d24c8a73bf9a81d14088a09ab0cc568818210989aa4d3bbd7e935eabbc3fb064559b271a4d3ad611d7805b2d09d79390f7bdbf5efd55d35ab6db8dde75e85482329f24d3f14d619eaebbd7d4f2d2c742ef0918c79030fa4dc45d59e7255b851d21249eabef5cb3c423ed4bc5388da832b2da8ea38d39896d2b61772325fbe32d2e38fe1dd509fab3796737464328456b0a14b844f1ba4ea308ff5c0af95a90fc9a50e16222b3a23f22e4572859db0afa45e9b975b3bc5b667894133f839b3656aa248926ec2bc4d327b27b072ac035ecc9f9efe2f30034cf4156723ad1edbe1d27166e0af3e9d64cf1eff5d5670c6c1cf2ff2ab659919040000",
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
      "Thu, 09 Sep 2021 18:12:37 GMT",
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
      jobId: "grouparoo-job-33-1631211111899",
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
      "000002ff85536b6f9b3014fd2bc8fbda3cc98b48d19aa5748d94908e9056d33421632ed42d608a4daaa8ca7fdfb569ba56955abe807dcfb9e7dc07cfe4811731999288a78f3554876ff722226704144df116eee2f27218e587e8c75d96c9207ef2f7f269364304d72c49f33283961475c5404e77db765a89baa495102d4cd4b2ed566f64f7fa3dfd4c1c077912b264c58b0764df2955ca69a773d26ea742a419d092cb3613f9eb7d67dfef9495b807a664e7bd64075564e773d1ef9960547151cc765b34504ba842c829cfd0c27f661c9dbf4fdde6346fa708de7306943151174adbc2144c14094febca6425d367626cbef9205b77e52e028b89acce8bb0a0399c59315534548712ac4b7fb3b696dee5c65fcf83e5c60bb78b2b773d6f2f36abdddadb5ab757aeef5a8a461918ae35b3cecdc9c303eac720152f8c7aa0afb5f24b83961fc7a209282da10986e3ee88f6265d274aa2314b26f6304aba104593683ca476d465ce00067104147946d4b068218a5e3c60dd9e330ce3be330907349e84b4dfef87037b446de638741433723c234f155770c16529246f3a446efd65e08681bff316f3c0352524b4ced445634c17f0d6a3c20211f4494d471de5029574bb975ee0faf345b0bc719b09af20a5ecb07dc41927349380685a61f314546b1163c388375fbb17083613bb3e052599fe7926bae7dac59b96bfd2031ca0b6abcc9b6c037fe9fd34764e881b9ad506b26f3e741909cfb4e9e35f04e28e3649c8af9debff26cd950f095450b0af87896013f8f2573bed3d6271f351462a3ce3ea30a9455805cd0a7153ed893d1cf77b0362c095fa10b3c7cea9693a87ce083914eaa5a266efb1d046ac96af200ce2f43dd3ace33ffe69499477040000",
    ],
    [
      "ETag",
      "ehdpF5bmybBhllsTdwRvsw==",
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
      "Thu, 09 Sep 2021 18:12:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-33-1631211111899"
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
      "61",
      "4f",
      "db301086ff8bf73595c8ca3a1a890f2deba05a68581aa44d084526be6406c7176c27ac54fdef3b0756d09814f221b9bb3ca7dcbd79bd6577520b16b11b59ddb760361f2a70df7d90826d95b3f468505b600103c72b224fcf78f7a8d37b7ef7e3e7b4fbf698fc4e366d757c4c842d7e41cd59b465a504252c8baeb64cf31aa8ad40d5d63aefb380b94de38beb2c5dae4e29af51f87c7519c7b379bc60bb60df28b8e379cfbfa3ed7a17b05bbc49a10403ba003f4b63f0160ab7f46b5a5e370a46165b5380653ddcbfa80cb60d378823aa8cc6e3513819871f437f1d4da7042a2cb893a889bd5cd37ccca1e32ac507da928563224c1fd3c6657fefa82e45bf890f97ab6c72d80ff81ae04581ad76f920584a63dd937a7fc16715fe25157f2748bf4aaa21a8022dc00c51b2c9b91006ac1d24d1e6bc69f6d83c49e2b7aa6861508a61b093038072dd1ef81a27b3ff494b067bd1eacb2c5bbc21ac23dbec916c79be5867b3f30bcf5d3f1b61be71602f0c92ab2c7843850787479f3e4f0e9e3c7682de77f49dc899160256703a2a67d2b1a8e4cac2ee0f76be072c88030000",
    ],
    [
      "ETag",
      "GHavznRqakXY9vKzOxOyug==",
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
      "Thu, 09 Sep 2021 18:12:38 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-34-1631211111899",
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
      "7f",
      "6f",
      "da3010fd2a91f7cfa60101022420552da559c744a14b4251354de0980b350d711a3bed50c577dfc529a55db536420af17befeedd0f3f925b9e2c498f847c759743b6fdb41621a910507485a73f66a7e646f9ebafadee99cda33c18cc5af07074840c5ea824dda43154a5c83306b237f56bab4ce429cd84a862a0aad5aa363a56a3d9281ea7db459d84381af1e416d5374aa5b2679afbdcb59510ab1868ca658d89cdf3b979df34d34cac812969be4e69621669be9ff438168c2a2e92a3a98f067209d91c3694c768e1a05c8627af43d738ddd45648bee70c2863224f54610b433091447c95673a2ae93d126df3c51fe2bb237710180b2ee49ca6e9a2622c74ca8541a5319fa7b7c6376f72612cb0ac88c72017c6ecbbebb9c6336d3836a6e3b1eb07c6e7e32fc6b937995e1aa7d77bb872888c769620154fb49980863114469efa357c3ba542401595508273bbdea10da7de0da3d0669163b5c3a80e61e884769b5a619d755bd05a864051a78ae85a451391d06e64590e0b59a3436d075bcea246a7d3b69d365d5ab61dda56b7d56ad23ad955c843c6159c71990ac9cba69199370cdc79e04dc7837ee0ea32229ac7eaac345714f1d2a7c22291f44e5dbb02e502331513188e03d7eb0f82e1955b0e7d042bcab6fe1d8e3da2b10464d38c6e4041762196d8347239f187c17032ee8f50a12779b96748d2fbf5781004db547759e937e97b5eff1a3534cbe8f61fcc0fbce1f89cec762ff25dd138d71c2dd05f6582fb1220b0c6b5135cd64fe08f2e522fdeae7260e04a2a68fc17c6f9a81bc85ee3bf77f8ab10bc23a547f273ea7ad7a43cf220820c12f6f1f62059031f5ef5fdbd432ede3c4c23157ee3ae3259246119943bcb378599bdbaed589d26d1e44cbdc15a4e773f9c224611113690a8a78a",
      "ca7ba7bb5d40b97c262188ab362e67f1179e764435f7040000",
    ],
    [
      "ETag",
      "JWB/mtSj+49D7ifuTCW4ew==",
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
      "Thu, 09 Sep 2021 18:12:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-34-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff6d916d4fc2301485ff4bfdba2903a2404222982924cb509018630829e56e16b6ddda76e042f8efde0e23c6d80f7d393d273d4f7a605b59ac598fad64fa5182ae2e52b04f6e33055366d6d0a2b030c03c0696a7e48ce1aacdc3f026a964f4aa1a2f95bcef8cf6fd3e398c78879cb3de812512b2b561bdb7032b780e149368965c2972d94a3961389944e1202621c7b513e279140d8651c88ede4f6ab954db7364f63c1dc70fff2516478f6d703585043414025c07a57103c28e1d9ee1b9cac037586a0186d5e6fa22d5582aae117d52fc56db0fae5b413370a3d3ed923143c1adc482bcf3195563162dcfa6b8273ad62483aeb7049ad4f38e64ab4ba829dc0136a077284de3163eeb169702f3baf1ef48c23373ce08e01682bf81c5f7e3c3ca8279d44824061c44e3047487ce6d09de15f098e0f41f23694fe7e317f4df5946ec010000",
    ],
    [
      "ETag",
      "Ne/4aEE7fyiLYp0WyiF8Hw==",
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
      "Thu, 09 Sep 2021 18:12:38 GMT",
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
      "0000000002ffedd3597282300000d0bbe4db3845cad6bf1a5c28d10211417f18c0944dca9250309ddebd4eaf51df1dde3788d3943216f1a6a29fe005dce285314fe776ab2fcdb13cf90e6252c7948279d7b859e3810ec93112a6ab5496b0c880c8d947b0b13adcd13a81ef90b32bc97639cdd42251349cebbb277468543dcb47f2e19d90092b691b06075793edfcf5768925bd45d89fd2c037103eda255f9f275806e24dae1da2256e162a06ac56f9a657c5a62c47ee16a13cf1674b08b2ff8a920db958db7a4d70ea9d17e1aad2b3938f56a5d36734357b2dd046e4b787d0837bc1eb62fef0f07f8119a0535bf49445c57dbbac18c60cfcd58ff8ada5f7ff4b1af7b4073fbfaa6431ab19040000",
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
      "Thu, 09 Sep 2021 18:12:39 GMT",
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
      jobId: "grouparoo-job-35-1631211111899",
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
      "14fd2bc8fbda3c210f22456b94d20529211d9056dd3421db18e696608a4dbbaeca7fdfb569ba56955abe807dcfb9e7dc074fe89697299a21c2f3bb86d58f5f6e04412788299cc3ed9fe14afa173f56db4d3afcbbbe766fd2eac25ecce780e09a25f1be2a58478aa6a64cce765137af4553e15a880e24ead8a3ce606c0f8603fd4c5d17789215d99a97b7c0fead542567bdde51bb9b0b91170c575c76a9d8bfdcf7ee87bdaa16378c2ad97b2bd90315d9fb58f46b2128565c94f35d04061ac9ea84ed312fc0c27f664a4edfa6ee72bcefe600bee794614a45532a6d0b525051663c6f6a9315cd9e90b1f9ea0345deda5bc6161545b32f9312efd98995628513f55831eb3cdc6e2c3f38df869b45ec6f83245aaebccda2bbdcae779b20b2ae565ee8590a938219ae35b74ecd298003e8a74c2a5e1af5585f6be5e706f9efc7a209202d591b4c26fd311e4cfb2ec9c88466537b44b23e23644a26236c933e751de6a48461e01951c3c2a5286d3c4ad3211927344b2789933938c1c4b593bec33021c4e967038a0e27e8a1e68a9d715909c9db0ea1abd08fbd240e77c172117ba6840c37853a6b8de9025e7b545020803ea8e9a0a35c80926eb71fc45eb858c6fea5d74e78cd724c1fa33b9871860bc9008d6b689e62f546a4d030142c36de1980cdc42e8e4189663f9f90eeb976f1aae52ff41806a8ed2af346511cfac13763e788b8c4456320f7ed872e23e385367df80540d8d13609fabef3c26bd45e852c63352be9e7c304b0097cfaab1df71eb0b0f92023159c6175a8d422b466ed0a7153ed913d72878e830cb856ef62f6d83d364de7d019d99e95eab9a276efa1d056ac912f2008c2f403d3acc33f183cdf1a77040000",
    ],
    [
      "ETag",
      "x2HsIPZHOMd2zLY9jdpP3A==",
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
      "Thu, 09 Sep 2021 18:12:39 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-35-1631211111899"
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
      "02ff8d93616f9b301086ff8bf795486549d316a91f922ddb22d1a42174523755c8b50fe6ccf8986d52a551fefbceb4cda67512e503dc1dcfc9772f2f7bf65319c91276afaa5f2dd8ddbb0afc2a0419b8567b478f068d031631f0bc22f2ec76c53d6fb3c77cf42dd3e0be8e57abcdc3e525114efc809ab364cf4a055a3a967cdf33c36ba03681baad4dd16511f3bb2614d779365f7ca6bc4619f2c54d9a4ea6e98c1da263a3a4d38a8e7f43dbdd21621bbccfa0040b464098a5b1b801e1e7614dc7eb46c3c0616b0538d6c1dd8bca62db708b38a0ca60783a88c7c3f87d1caef38b0b02350aee151a626fd6341ff3e8b9cef081b664f19008dbc5b471d9ddb75457b2db2484f3453e1e7503fe0d7021b035bee8054b659d7f52ef057c56e15f52f33782f4a994ee832a30126c1fa59a824b69c1b95e125dc19be6884d97cbf4b52a465a54b21fdcaa1e40fbed11f8942e27ff93960cf647ab8f937cf68a709e6c7344f2f9d56c9d4faeae0377f76c84e9ce83bbb648ae72100c159f8cce4fcfc6274f1efb80c177744ee26d0b11139c7e952fcab3a4e4dac1e1379e44912488030000",
    ],
    [
      "ETag",
      "7YQatauRzT4ZRlesV6QQjw==",
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
      "Thu, 09 Sep 2021 18:12:39 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `ios_app`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `ios_app`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-36-1631211111899",
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
      "54",
      "6b",
      "4f",
      "db",
      "30",
      "14fd2b91f76593fa481fe94b42d041c6229516d21484a6a9b59d9be292c621763a3ad4ffbe1b87f21802aa4aad73ceb9e7be9c07722b92900c0813cbbb1cb2ed979564a44240d3253e8deee84fea3759b21141be4aaf42efef3dbb3838408628548aaed318aa4ae6190735984d6bcb4ce629cda4ac62a06aab536d745a8d66a3f8f4fa7dd42988a391486e517da375aa06f5fadebbb6947219034d85aa71b97e7a5edf34eb692657c0b5aabfb6aca38baa7f6c7a184b4eb590c9c16c8a09e40ab239aca98831856765c88e5e87ae09baae2d91bc111c28e7324f74911686e03289c432cf4c5432782026cd177fc8d41db9c781b51052cd699a2e2ad622a64acf13ba86e260fc171655d67c9ede5a3ffcc999b5c01a2311835a58573f5ddfb59e68ded89a8dc7ee34b0be1e7eb34efdc9ecdcfa7ebd872befd860a221282d12936640590c458a8f9df4deceaf10504d1594e0bc6b7768a367f759c4ba3ceab51c16d9c0588f751dda6236efb7a11d32a0a8d34574a3a2894c1acdb6d38efafd30ec75b9e3d8d0e7ad0e65b6dd43a5d30c29eb73e638407615f227131a4e844aa512653bc995ef05ee3cf067e3e361e09a32229ac7faa44cae28e2659e1a8b44d20775ed0a5448742a66e38d03d71f1e07dea55baec30896946fa777b810118d15209b66d8410dd9990cb169e47c32f5026f321e8e5061667cbe672832f8f5f02c08b6a9e9b236bf64e8fbc36bd4d02ca3dbffb069e07be353b2dbbdf0bba4716e3846604ea5c1a60408ac7021a550f611dc9b22cd4aee2acf0c5c560d8d77619c8fbe81ec35fe7b87df0ac1db53e6482e66ae7f4dca473e449041c23fdf1e241be0d397c0fe462217ef24da288d67dc55ae0a139e41b9b3",
      "625d24b35777ec66b7430c39d36fb0b6ddd90fa7885144843524fab1a2f2469a6e1750ae9e4808e2aa8dcb59fc036e9b835811050000",
    ],
    [
      "ETag",
      "fqaHaR2bnviTujpWdIzxbQ==",
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
      "Thu, 09 Sep 2021 18:12:40 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-36-1631211111899"
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
      "51",
      "616bc23010fd2fd9d776b30a320bc2ec90e928eaeadc604324d66b8db6bd2e499d45fcefbbc4a1631fc6fa21b9f7f2de71ef7a605b51ac98cf9622fda840d65729e8275344a0aa4c2bba4a2c14308781e629298b766f1d052f3b8183f1db70bf9ca437af75daed9242c56bc839f30f2c1190ad14f3df0face039904da05af0b22495ae4b4304e371d8ef8d88c8716588d12c0c7b41d86747e7eccab8d20b5b9f7dd3e768387af8dbb65894dbff38e647876d70194102128a18cce8a5c40dc47a68b6a2785e66e02aac640c8a59b17d4825562597882e316eabed7aed96d7f4cc77dbe99030c3986b81056967531a8d69d43c8bf09396c29a2490b6a4fd24f6dc11ad65053685018f207728d419c3e64434ee606fa7ba8e31b7097eb64878a62e3dfa5c5f400c84bcdfeef9f76441ad414d24524c052661e394f61e8d9adaf8663a87c59cfef140e8133e7e01292b5e3240020000",
    ],
    [
      "ETag",
      "n6AhRBVvioHOZIxbPg/Wyg==",
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
      "Thu, 09 Sep 2021 18:12:40 GMT",
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
      "02",
      "ffedd3597282300000d0bbe45b1d54d298fe8156d984425c283f4c086111654b2cda4eef5ea7d7a8ef0eef1b50c6b810b16c2a5e835770a7333c6113bb5de8aba1f41baddca07999a6827c892b8496976a56b45bedb023613f884ee2941d2e869debb30525d9b130e909c1fdcb31e09ed9e0777d1d90c03f11b37149a75e58986cedf456a1e0806ccd68dd8f04f979ada0cb75672ebb84d499d7b406846cd84c9be9f258a8f47c8e62eacbf1e0bd696eba5c55f121b2eb6d20554561fb614cf6f64072d74c90c9a2dc8259b846e833ab8a506c9c7914269d1e534d5a8e8a6f93a7a7ff0b8c00bfb565cf455c3eb6cf21c623f0573f96f7963ffeeb9cf6bc073fbfc04b6d3f19040000",
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
      "Thu, 09 Sep 2021 18:12:40 GMT",
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
      jobId: "grouparoo-job-37-1631211111899",
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
      "536b6fda3014fd2b91f7b540781408125a114d572608238456d33445b67393b90d318d1d265af1df77ed94ae55a5365f12fb9e73cfb98f3c917b5124644498c81e2a280f5fee2423670434cdf0b6fbe86abe7a5c0cae56ab5bf17dba4acffb87c9788c0861588a6e77393494ac4a0e6ab45937b352563b5a4ad9c0448deea0d1ee77db9db679869e873c05793a17c53db2ff68bd53a356eba4ddcca4cc72a03ba19a5c6e5fee5bfb4e6b57ca3be05ab5de4ab65045b53e16fd9a4b4eb590c578b34603958232862d15395af8cf4cd8c5dbd44d41b7cd0cc17bc181722eab421b5b9882cb22155955daac64f444accd571f64edcffd69e4709957db222ee816ce9c846a1aebc30e9cab70b97066c1d5325c4ca2d93288d7d36b7f31694e97f3cd22583bb7d77ee83b9ab21c2cd7193b17f614e001f513505a14563d32d746f9b941b3f763310494565007e381dba7eda1ebb1940d783aec9eb3d405c6866c704ebbcce55e0f7a09038a3c2b6a59b49005ef73e6d1de30e68314e21e4d3bb197501af798eb26c03a7d8f7be47846fe9642c3a5503ba944dd21721bce223f8ec24d309d44be2d21a555ae2f6b63a680d71e351688a00f6a3a9aa890a864da3d0b223f9c4ca3d98d5f4f780e19e587f503ce38a5b90244d3129ba7a15cc8041b4682c9c2bf44b09dd88f535091d1af27627a6e5cbc6af90b3dc2011abbdabec93a0a67c1376be784b8a1796521fbfac394918adc983efe4620ee689d84ac367ef893d45721a45042c13f1f26826de0d35fedb4f788c5cd4719a5f18cabc39511e125d42b246cb52776bfed0e3bc4824bfd2e86a94f4d33394c46d842a19f2baaf71e0badc52af502c2204e3fb0cd3afe031407607477040000",
    ],
    [
      "ETag",
      "3z0tcQzM7FQQWiJCQf56yA==",
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
      "Thu, 09 Sep 2021 18:12:41 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-37-1631211111899"
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
      "51",
      "6f",
      "da3010c7bf8bf71a44333a4a23f521b474434a8142aa3e4c5564ec4b66707299ed5021c477df39ed58b5564af390dc5d7ea7dcfdf3f7816d552559c4d6aaf8dd80d97f29c0ddfb6009b6d1ced2a3c6ca020b18385e103951a374b348c2c7410e5bb58eb7fd7ede7fbeba22c28a5f5072161d58ae404bcba29f0756f112a84da06eca2a6bb380b97ded8bab74399d7da7bc44e9f3d94392c4e364c28ec1a95172c7b396ff44dbd331601b5c2f21070395003f4b6d7003c24dfd9a9697b5869ec5c608b0ac85db1785c1a6e606b14795dee0a2170e07e1d7d05fa3cb4b02350aee1456c43eac683ee6d071bdc467da928503224c1bd3c6797bdf515dc976131f4e67e9f0bc1df02dc085c0a6725927982b63dd8b7a7fc15715fe2735ff2448bf4ae92ea8804a82e9a2549d71290d58db49a2cd785d9fb0f17c9ebc57a5920695ec0677aa03d06e77026e9379fc91b464b07f5addc4e9e41d611dd9e684a4d3bbc92a8def169e7b7a35c278efc02e0c92ab2c78438567e7a36f17c3b3178f5da3f71d7d2772a68180094e47e587722ccab9b670fc03a82f50ba88030000",
    ],
    [
      "ETag",
      "Ei8TjPL1W3fekibAk//f/w==",
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
      "Thu, 09 Sep 2021 18:12:42 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-38-1631211111899",
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
      "69",
      "6f",
      "9b4010fd2b68fba5557d80f1812d45899bd084d6c129c68da2aab21718c826c01276496345feef1d963847a326c81266df7b336f8ebd27d72c8fc884042cb9a9a0dc7cb8e20169119034c1d3ecdb891f04df3f8f87d7fad16066df5983c132d9db4306ab558266450a6dc1ab320431592e3a49c9ab82969cb73150dbb4dac6d0347a46fd58e331ea04a4f18ce5d7a8be94b210936e7797bb93709ea4400b263a21cf1ecfbbb7bd6e51f22b08a5e8be4cd9c52ca2fb76d2fd948754329eef2d1768a01250ae20a32c450b4fca28387819bac368d649907ccb42a061c8ab5cd6b63044c8f3982555a9a292c93d51369ffd210b7b661ffada3aa212d62d6dadf2ad352ab4d5aab8d6be7af3536d8d35c52c05b1d6ce4f6ccfd61e698eab2d5dd75ef8dac7fd4fdab1375f9e695f2e7670eb212c1a894048962b1b3e0d52a82d3c74ca793d9f5a402515d080ab913ea486a58f83381885b1650e82588720b082d1809a811e8efbd08f02a0a8937574a5a239cfa905f1d01cf4a1370ec0d0a391198c4661d437a3deb04fc3be6e58a6d91fc764db227f4a26e18889820bd6b48b9c7b8e6faf7c6fe91e4e7d5b9511d32a95478db9ba88e73e251689a437eadad628e398a9eebde3fab6373df49d9f7633ee192434dc2c6e70e0314d05209b96340309e5298fb069e46cbe707c67ee4e67a850333cdb310499fcba7f12f89b427559aa37997adef40235b42ce9e61f6ce17b8e7b4cb6db67f97ed2b4521c25505f4d82db062070850bc799d00fe04e15a9566edb7a62e0324a30fe0be37ce425942ff1df5bfcb508de8ec623f9b1b4bd0bd21c7910430979f8fef6205901ef5ef2dd8d432ede394c23247ee3ae86a24e1296d0ec2ccb6a333bf5b067981651e452bec27a96b51b4e1da38e0819e4f2a1a2e6c6",
      "a96ed750251e4908e2aab9cd2cfe02ec51cc16f1040000",
    ],
    [
      "ETag",
      "mJHTbbK+96k0D5LEx855Ug==",
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
      "Thu, 09 Sep 2021 18:12:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-38-1631211111899"
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
      "02ff6d91614fc2301086ffcbf995996d24069690088a02e2a203e2074348e96e63b0ed66dba184f0dfbd0e8389b11fdabbebf3b6f7b647d865650c01acb3f4a34675b84ad1bcda20425de746f35251a9115a8046a44c26f378b28ea91e8ca2a7cedb240c370ffab9dfeb31a1e5060b01c111920cf35843f07e845214c8b258187b88395436bbefcf879c1514db2c5c4ca7fdc17408a7d6855fadaadd2f3f9b47e3f0f13fc5f2d4822dad234c506129d1de5e29daa234636b4c8ba2cad1d1542b891a1ab8d94815d59550440e579c76c7f16eda9eefd9d1e97619cc490a9351c9ec62c6ad812123f2883ed917f80ca826648b4933ef6dd9f55dc7f51dd76bbcd8126e51ed29d3ee2d7e35bd5c4b2a9abeff15fa17a1447e32efaf6af9d3c7e06050bf2862531aad1ff7eced8e2ccd6f1d1855630ba4e04f1965e69c9fbe0152cc74caf1010000",
    ],
    [
      "ETag",
      "fTdJbdouBHRK8WJNNhFsMA==",
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
      "Thu, 09 Sep 2021 18:12:42 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "db",
      "72",
      "43",
      "40",
      "00",
      "00",
      "d0",
      "7f",
      "d9",
      "e724b3885bdf88608a9212092f3bc8d6ad6543169b4effbd99fe4673fee17c83ac28f038a25bdfe20ebc0096f1eaa6d83844d18db992aae5e042839da35c44f62e767dd998a2ce0c1d79e772b8d29cb74f05427b3a8f728927be3859829052139ad7f8cae95f86d18621b6a9edab7bfbac56cd958ad4145b394df35ee36db1aca5bd1688cd255158ef91d082c5e1c4057578cf08bb07544a9ad2f5e76e591a72244863a7962442e4c5d008c61cbef652c1a70d8af5f7c14ad77d92cfc82b912287f403ae8fd1c85fd896f6ba95999210b365bb797afabfc00ae085d4031e51fdd82e88aaba027ff5d18d11fcf8afe36cc003f8f905f963436319040000",
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
      "Thu, 09 Sep 2021 18:12:42 GMT",
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
      jobId: "grouparoo-job-39-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbda249027448ad62ca16dd4846c84b49aa609d9c650b780536cda6555fefbae4dd3b59bd4f205ec7bce3de73e784277bc4cd018119eddd7acda7fba15049d20a67006b797b73783fdafc2f9ed7853ef8b7349cee73c799c4c00c1354be26297b396147545991c6f37edac12f50e5742b42051abe7b59c61cfe93afa713d0f7892e5e9929777c0be516a27c79dce51bb9d0991e50cefb86c5351bcdc771eba9d5d256e1955b2f356b2032ab2f3bee8e75c50acb82827db0d18a825ab6256609e8385bfcc849cbe4ddde6b86867007ee094614a455d2a6d0b525051a63cab2b93158d9f90b1f9ea036dfca53f8b2c2af2ba28e31217ecc44ab0c2b1daef987516ae57d622385b87ab69b45807f16676e1afa6edd97ab95d051bebfac20f7d4b619233c3b526d6a939057000fd8449c54ba31ee96badfcdca0c5ff63d1049096ac09c6237b881dd7f6484a4634757b0392da8c10978c06b8476ceaf5593f210c03cf881a162e45990c8743ea302726364ee33ea669ecba7d274ef028b109265edfeda2c3097aacb862732e7742f2a643e83a5c447e1c85db60368d7c53428aeb5ccd1b63ba80d71e151408a0776a3ae82817a0a4dbbd08223f9ccea2c595df4c78c9324cf79b7b98718a73c9008d2b689e62d54a24d030144c57fe1cc066625f8f4189c63f9e90eeb976f1aae52ff40806a8ed2af3469b285c04e7c6ce117185f3da401e9a0f5d46ca736dfaf01380b0a34d12f46deb87df517315b29455aca41f0f13c026f0e1af76dc7bc0c2e6838c547086d5a1528bd08a352bc44db547f6b0eb7a4364c095fa37d6b3edc1b1693a87cec80a56aae78a9abd87421bb15abe802008d30f4cb30e7f0096dab8da77040000",
    ],
    [
      "ETag",
      "Kjh5yxm1z19A9B1KbGDidw==",
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
      "Thu, 09 Sep 2021 18:12:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-39-1631211111899"
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
      "000002ff8d93516fda3010c7bf8bf71aa4062885487d80966d682950485f3655916b5f32778e2fb31d2a84f8ee3ba71dabda49691e92bbcbef94bb7ffe3eb05fca4896b00755fe6ec0ee3f95e06f43b001d768efe851a371c022069e9744eefb4313cb8b2b587e1fafe7dfb6d2f6fba3a7cb4b229cf8091567c981150ab4742cf971608657406d02755399bccd22e6f775286eb3cd62f985f20a65c89777693a9da573768c4e8d927b9eb7fc07daee8f117bc4870d1460c10808b3d4161f41f84558d3f1aad6d073d858018eb570fba2b4d8d4dc22f6a8d21b4c7af16810f7e3708d271302350aee151a62efb6341ff3e8b9dee0136dc9e20111b68d69e3a2bdefa8ae64bb490817cb6c346c077c0d7021b0313eef040b659d7f56ef2ff8a2c25b52f30f82f4ab94ee824a30126c17a5ea9c4b69c1b94e125dceebfa84cd56abf4bd2a465a54b21bdca90e40fbdd09f89caea6ff93960cf64fabeb69367f47384fb63921d9e266becda637ebc0ddbf1861b6f7e0d616c9550e82a1e2b3e1f8fc6274f6ecb12b0cbea3ef24de361031c1e9a87c559e2505d70e8e7f00a84aac4e88030000",
    ],
    [
      "ETag",
      "y24n1d7CeNZ8PEKSdr226w==",
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
      "Thu, 09 Sep 2021 18:12:45 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `date`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `date`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-40-1631211111899",
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
      "f7",
      "65d3fa485f695a0941818c452a294b53109aa6d6496e82218d83edc02ad4ffbe1b87f2da0655a5d63ee7dc7beec30fe486e531199390a5b72588cda76b1e9206014553bc3de91e7eed4f86e644ddd33c092efad75de73cdddb4306ab5492ae8b0c9a92972202395ecc5ba9e0654105e74d0cd4ec9bcd8ed5eb743bd5c71e8d5027214ba62cbf41f59552851cb7dbbbdcad94f334035a30d98af8fae9be7dd76d17825f43a464fb75ca366691edf793ee673ca28af17c6f314703a504b1843565195a7856c6e1c1ebd02d46d7ad14c9772c021a45bccc55650b43443c4f585a0a1d958c1f88b6f9e20f993b53e72830563155b06a18ab8c4ab5cce95a1f74f29541a5b15c1637c6377f766aacb0c084652057c6c577c7778c279aeb190bcf73e681f179ff8b71e2cf1667c6e1e50e6efc2b075a8c412a966b83010d33a8cc3df6d0fd7b7295802a2aa1069743d3a21ddb1c8549388c12bb37081313c2d00e8703da0bcd68d4877e1c02459daaa26b15cd793e4ac25ed289a3419cf4a8d5b1c3ae45a117c7d670145bfd24b1ad3e1dc47644b60d722f988263260b2e59dd4872e1bb81b30cfc857734091c5d4642cb4c1dd7e6aa225efa54582492dea96b5ba18c63a66a2aae1738fee42870cf9d7a11a690d26833bfc55548682601d95460071588531e63d3c8d96cee06eecc9b4c51a1a77bb6634832fef9f02c083685eeb2d2bf64e2fb934bd45021e8e60d360f7cd73b21dbed8b7ce7342b35470bf4a94e70570304ae71153993e601fcd645ea65dc369e19b8a60a3a",
      "ff85713eea0ac46bfcd716bf0d82efa6f6487e2c1cff92d4573e2420208f3ede1e246be0c3e7bf7b8bc8c5d78869a4c233ee6a24ab2491807a67d9ba32b3535b037b60114d16ea2d6699ddc16e38558c2a22ac21578f15d56f5177bb824af944421057cdab67f1077c5001e20b050000",
    ],
    [
      "ETag",
      "G2B+4A70AtwanfTW4j2EVg==",
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
      "Thu, 09 Sep 2021 18:12:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-40-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d51d14ec23014fd97faba69378cc812124151404264c083318694ee6e0cb675b6dd9410fedddba27b30c6b887f69edb734eeeb93b905d5a442420eb3479ab40eecf12d0335384a0aa4c2bbc4a5128200e01cd1264c63d59df5fcc86f9189e1fa7ed76dddad14dd2ed2243f10de48c040712a790458a042f0752b01c5016316d4cf4be34e8aeb71820ca4564d0743999f4fa9301393a0d3f634aaf6cdd88e68b70347df85bb65a95bbff285e8f0ed98a75083148283898a14b29b6c0f5c8ec43b1bcccc055a2921c14b164fb904851954c0ae162c7bda4ae77d5f27ccf7cd79d0e1233c1994e4581dce51c47235a689685e21dd7417c24485be266627bd6a64d7dea52dfa59ecd625a6390b5485583617b6ad01bf8b0b39d7391db1cbf1af98d706016ff0d3820f27e5abc7e0dd9df6b504f52606205262c3d05bf15868d36819615388433fcd1c3549ff0f1130924c2f245020000",
    ],
    [
      "ETag",
      "fArvF/QHmJeYKN77v3k0hg==",
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
      "Thu, 09 Sep 2021 18:12:46 GMT",
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
      "02",
      "ff",
      "edd34b7282300000d0bb642d0c08d1a43b04ab88550c42914d2698f829bf088862a777afd36bd47787f70dd87e2f9a86b655264af0067a36c4ea5ef5249a38b763e6d96d86669c8bb51f8c6f5b872eb42a514e49ee73629be42a39ce370a29972c369de40123e4e6dd4ca6b3d397e1bba5179cd1b0a7d00ed121c66bf2998e27058349f67e49d6811bf8186f8b8b55951f7e3bcfabc7521b1934360fbb22e4cdd486e19c6a6316e9a9b682f0d6f69e2921918b5a2a1db786092a8f0b25ba9239bd8781a13b76cb8c551ea151a6f5ae1e598e1fa655bc8bbbe9b4661c09e2aa2f2fff1718007197e75a34f4fcdc6e408c07e0af3e6d7b299eff2782d5a2063fbfc52d160819040000",
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
      "Thu, 09 Sep 2021 18:12:46 GMT",
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
      jobId: "grouparoo-job-41-1631211111899",
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
      "00000002ff85536b4fdb3014fd2b91f771b44ddf0fa91a550923124d4792c2d03445b6739319d2b8c40e1b43fdefbb7628032141be24f63de79e731f7924b7a24cc98c3091dfd5503d7cba918c1c11d034c7dbbf6efc9d7e5eb8de4575763dfa7313dda9957f319f23421896a2db5d012d25eb8a839a6da2765ec97a472b295b98a835e8b6baa37eb7d735cf643a459e82223b17e52db27f69bd53b34ee7a0ddcea5cc0ba03ba1da5c6e9fef3bf7bdceae9237c0b5eabc96eca08aeabc2ffaa5909c6a21cbf9264203b5822a812d15055af8cf4cd9f1ebd46d41b7ed1cc1f78203e55cd6a536b63005976526f2bab259c9ec91589b2f3e48e49d7bcbd8e1b2a8b76552d22d1c3929d534d10f3b704ec3f5caf183d375b85ac4fe3a48a2e599b75ab497ebf3cd2a889cab332ff41c4d590196ebcc9d637b0af080fa29282d4aab1e9b6ba3fcd420ffed580c01a51534c164ec8e6877e24e59c6c63c9bf4872c7381b1091b0f699fb97c3a8041ca8022cf8a5a162d65d973fb30e8b251c252779c0c7a439eb0e98826a90b2ee7e0f6d3b44bf647e47725349c08b5934a341d2257a11f7b491c6e82e522f66c0919ad0b7dd2183305bcf4a8b14004bd53d3de44854425d36e3f88bd70b18cfd4baf99f039e4943f447738e38c160a104d2b6c9e866a25536c1809162bef04c17662df0e4145663f1e89e9b971f1a2e5cff4180768ec6afb26511cfac1576be780b8a4456d21f7cd872923138531bdff8940dcd12609b9d878e13569ae42c8a082927f3c4c04dbc087bfda61ef118b9b8f324ae31957872b23c22b685648d86a0fecd168d29f100baef49bd8b4373c34cde43019610ba57eaaa8d97b2cb411abd533088338fdc0366bff0f5fe796e177040000",
    ],
    [
      "ETag",
      "z0TXa+A0EQrHY6xjSqsMIQ==",
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
      "Thu, 09 Sep 2021 18:12:46 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-41-1631211111899"
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
      "51",
      "4fdb3010c7bf8bf79a6a642d2d44e2a11ddd5629b42c0de2614291b12f99c1f105db695555fdee3b0756d09814f290dc5d7ea7dcfdf3f79e3d2a2359c2ee55f5d482dd7daac0ff0c4106aed5ded1a341e380450c3caf881c9d5eded6dbcc4d9e1eed64b8f95c216f6fb717174438f11b6ace923d2b1568e958f26bcf0caf81da04eab636459745ccef9a505ce7d962f99df21a65c89737693a9da57376888e8d927b5e74fc07daee0e117bc0fb0c4ab0600484591a8b0f20fc22ace978dd6818386cad00c73ab87b51596c1b6e110754198ce2413c1ec65fe2709d9d9f13a85170afd0107bb3a6f99847cf75865bda92c543226c17d3c66577df505dc96e93102e96f978d40df816e042606b7cd10b96ca3affacde5ff045857f49cd3f08d2af52ba0faac048b07d946a0a2ea505e77a4974056f9a23365badd2f7aa186951c97e70a37a00ed3747e05bba9afe4f5a32d8ab5697d37cfe8e709e6c7344f2c5d57c9d4fafae0377f76284d9ce83bbb648ae72100c159f8cce4e27e393678f7dc5e03bfa4ee26d0b11139c8eca0fe5595272ede0f0078a2117c988030000",
    ],
    [
      "ETag",
      "45DWmwRs7qkr73v/goauWw==",
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
      "Thu, 09 Sep 2021 18:12:48 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-42-1631211111899",
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
      "0000000002ff85536b4fdb3014fd2b91f76593fa489f492a21e8206c914a0b690a42d3d43ace4d314de3623bb00af5bfefc6a13c860651a5a43ee7dc7beec38f64c5f3840c48cc977705c8ed975b11931a014d97787a3ab1676a3bf13a2757ee289e32d9e2ab8b87830364f052a5e87a93415d8942325083d9b4b194a2d85029441d03d5bbed7aabdf69b55be5e37a1eea1464e988e72b54df68bd518366739fbbb114629901dd70d56062fd7cdebc6f373752dc02d3aaf9366513b3a8e6c7490f33c1a8e6223f984dd140a140ce614d7986165e94497cf4367483d3756389e47bce8032268a5c97b630041379ca97853451c9e091189baf3ec8d41ff9c791b5501a632e6ad6c2245c585459f3f966659d8693336b8145a53c03b5b0ae7efaa16f3dd382b1351b8ffd69647d3dfc66fd0827b373ebfbf51eaeede3a2950494e6b93112d13883d2c453af82f7132a05545305153877ec3e6db9b617a7b1c352b7d38b531be2d88d9d1eedc436f3bad04d62a0a8d36574a3a2b9c86d2ff56c46bd9ed37680baccedd969e224e0258e97b4934eb7d7f33a1893ec6ae441720d275c6d84e255c3c8551844fe3c0a67e3e361e49b32525a64faa4325716f1daa7c62291f4415dbb12e5023395dd0fc6911f0e8fa3e0d2af063e822565dbe91d8e3ca59902645349d7a0419e89049b46ce27d3200a26e3e10815668ae77b8622835f8f2f8268bb315dd6e64d866138bc460d95926effc1a651188c7f90ddee55be4b9a15866304e65f95e0be0208dce2ca09aeec23f8638a344bb7abbd30701d35b4fe0be37cf40dc8b7f8ef1dfe6a04ef47e5915cccfcf09a544721a42021679f6f0f920df0e935dfdf39e4e2adc334b8b19ae3ae3255266112aa9de5ebd2cc5edd777b6e9f18b2d4ef30c769ef8753c62823c21a72fd545175e74cb74ba850cf240471d5c6d52cfe02b6eea2edf3040000",
    ],
    [
      "ETag",
      "FO0UsyO93DW8LbScr1ikQw==",
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
      "Thu, 09 Sep 2021 18:12:48 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-42-1631211111899"
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
      "6d",
      "91",
      "51",
      "4f",
      "c2",
      "30",
      "14",
      "85ff4b7d744386401c098960881207c10de28321a494cb186cbbb3bd4309e1bf7b3b8c1ab50f5d7b76bef49cf6287649be121db14ce2d712f4e122067ab28b104c9992e14f81b901e1082019b333b84cae7a7d803c0a36a3c7f259b66962e26e971d466d2093a27314eb04d295119d97a3c865068c199259c11e3a14763b1d8e06d1b4379ab094e1ca4ae35910f4fac1409c9c2f6ab12876df50340d87e3fbff88f9c9115b5c86b0060db9029ba1d0b80545435bcff0e129b8064badc088ca5cfd88359685d4882e2b6eb3e17aed6bafe1d971e3fb6c4c51494a3067ef2ce2688290641ae21bb7130d36e86ac945d7d5bc67d9abb56eeaad96eff9cd815fd5b12a6c41ef3131f55b78afe2d4146655f43f6cbbc9f44f568124f07e83f3cf34fd03819968e46a066cabfab9e11d5a37f16d902ec1114af2033d2474de9f3e00df0c36f0fd010000",
    ],
    [
      "ETag",
      "L+i/ABeenSLhMKuWa6tPsg==",
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
      "Thu, 09 Sep 2021 18:12:49 GMT",
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
      "000000000002ffedd34b7282300000d0bb64ad8ce280d21d2805211425c218364cc02810a87c82189ddebd4eaf51df1dde13902ca37d9ff02ba3dfe00308226b5226b9cdcad88cc5aecdbdda18855358e5a63e4691d8a09cd6d04e2f4e24c8a5534e86a56cdbb93eb09c25be663bd47cac65d9233b82228ebdb33f771f74ead80b19225ee361d692a286ae6be230389d4fb7e91a8d5e55c1d81c61c0564adfde715924cbaf3458a63adcb3e3c12857b042d7ae2fed5c88f0883db3b3d47b89e7b9bd75139fc7ea16578c0db7075275ffd3890f621f72bdb98d43c015dd70eccb01b1b01733e9ededff021340ef4dd1d13e295edb178aa64dc05ffd848b86befe1b9474b4033fbf0e5723f019040000",
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
      "Thu, 09 Sep 2021 18:12:49 GMT",
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
      jobId: "grouparoo-job-43-1631211111899",
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
      "5d",
      "6f",
      "a2",
      "40",
      "14",
      "fd",
      "2b",
      "64",
      "f6",
      "b52aa8a89898adb1b46ba2d8056cb3d96cc8305ed86991416668d334fef7bd33d46e9b262d2f3073cfb9e7dc0f9ec93d2f77644a529e1f1aa89fbedd89949c115034c7dbc5f8108e2e1fbd83b891e056cef5156caf1f67334470cd92745f15d091a2a919c8e936eae6b5682a5a0bd1c1449de1a0e38c064edfd1cfc4f39027a1c856bcbc47f65fa52a39edf54edadd5c88bc005a71d96562ff7adf7be8f7aa5adc0153b2f75eb2872ab2f7b9e8f74230aab82867db080d3412ea04f6941768e13f73979ebf4fdde574dfcd11fcc01950c644532a6d0b533051663c6f6a93954c9f89b1f9e68344feca5fc4161345b32f9392eee1ccda514513f5548175196ed6d632b8dc84eb79bcdc0449b4f8e1afe7ddc566b55d079175fbc30f7d4bd1b400c3b566d6b939057840fd1d48c54ba31eeb6badfcd2a0e5c7b168024a4b6883c9d81e5167627b69968e593619b86966439a4ed2b14b07a9cdbc210c772950e41951c3a2a5289de168ecf45d3b716d3a4c8636f4132f73dd64e48cbccc7307ce646793e31979acb9820b2e2b2179db21721b2e633f89c36db098c7be2921a34da12e5a63ba80b71e151688a04f6a3aea2817a8a4dbbd0c623f9c2fe2e58ddf4e780539654fd101679cd14202a2698dcd5350afc50e1b4682f9dabf40b099d8f52928c9f4f733d13dd72edeb4fc951ee300b55d65de248ac3657065ec9c1037b4680ce4a1fdd06564bcd0a68f7f10883bda26213fb77ef88bb45721645043c9be1e26824de0cb5fedb4f788c5cd4719a9f08cabc3a4166135",
      "b42bc44db527f6c81bda2e31e05a7d88b98e7b6a9acea133c21e4af55251bbf758682bd6c857100671fa8169d6f11f48d3349a77040000",
    ],
    [
      "ETag",
      "C7qR6Fw9qoVse5p1PGeUPw==",
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
      "Thu, 09 Sep 2021 18:12:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-43-1631211111899"
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
      "02ff8d93614fdb301086ff8bf99a0ab2960e22f1a1850ea285b6b441084d2872e34b66707c99ed145555ff3be7c0ca3490423e247797e794bb37afb7ec496ac122b692e59f06cce6a00477e38305d846394b8f1ab505163070bc24f2e7fcf8ea3cbeb8b787cfabbbcb1bb3d64fe5b23c3b23c2e6bfa1e22cdab24282129645bfb64cf30aa82d47d5543a6bb380b94ded8bcb74114f2f29af50f87c7a9b24a3713261bb60df28b8e359cb7fa1ed6117b0475c2da000033a073f4b6df0117217fb352daf6a053d8b8dc9c1b2166e5f94069b9a1bc41e557a837e2f1cf6c36fa1bf4e4e4f095498732751137bbba4f99843c7d5029f694b16f689306d4c1b17ed7d4d7529da4d7c184fd3e1a01df05f80e73936da659d60218d75afeafd05df54f89f54fc8b20fd2aa9baa012b400d345c93ae34218b0b693449bf1bade63e3d92cf9a88a1606a5e806d7b203506ebd077e24b3d167d292c1deb5ba18a5930f8475649b3d92c6d793653aba9e7beee1cd08e38d033b3748aeb2e00d151e0d4e8ebf0f8f5e3d768ede77f49dc899060296733a2a57d2b1a8e0cac2ee0518e507f088030000",
    ],
    [
      "ETag",
      "KP5HCIDYs/wbWGQrvnkgSg==",
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
      "Thu, 09 Sep 2021 18:12:50 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `stamp`, `last_name`, `email` as __pk FROM `profiles` WHERE  `email` IN UNNEST (?) GROUP BY `email`, `stamp`, `last_name`",
        types: [["STRING"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "STRING" } },
            parameterValue: {
              arrayValues: [
                { value: "ejervois0@example.com" },
                { value: "ceate1@example.com" },
                { value: "another@example.com" },
              ],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-44-1631211111899",
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
      "000002ff85546b4fa34014fd2b64f6cb6e525ba0f44113a3d5b22e49a54aa9c66c36ed402f380a0c32836e63fadff732581febae364d5ae69c73efb98fe191dcb27c4d462464c95d05e5e6cb0d0f498b80a4099edad6e4a830b3c1c464276bfbe2dcbe768ad9c3fe3e3258ad12342b52d813bc2a2310a3c5bc9d94bc2a68c9f91e06dab3ac3da3df354ca3fe0c6d1b7502d278caf25b545f4b598851a7b3cbdd4e384f52a00513ed8867cfe79d7bb35394fc0622293a6f5376308be87c9cf420e511958ce7fb8b391aa804944bc8284bd1c28b721d1ebe0ddd66346b2748be6711d028e2552e6b5b1822e279cc92aa5451c9e891289baffe90b933758e036d2524c65cb5b4554a855ce63483fa41655f695468cb6571ab7df767a7da0a2b8c590a62a55dfe707c477ba6b99eb6f03c671e685f0fbe6927fe6c71a61d5dede0d63f93a0c93508c9726531a0610ab5bda72ebaef67570ba8a4021a7039d0fbd418ea76188783281e767b61ac43180ec3418f76433db22db0d62150d4c93aba52d19ce77a649a3d338278680e4dddb6d646b7a71b16d52d3a3086b43fb0fab16d740db26d9187924998305170c19a56924bdf0d9c65e02fbce371e0a832625aa572d298ab8b78ed53629148faa0ae6d8d328e99eab9b85ee0f8e3e3c0bd709a55984242a3cdfc0e9721a6a90064d3123b28a13ce56b6c1a399bcdddc09d79e3292ad47ccf760c41463f1f5f04c1a6505d96ea978c7d7f7c851a5a9674f317360f7cd73b21dbedab7c1734ad144709d45393e0be0108dce0327226f443f8ad8a54ebb86dbd3070512518ff85713ef21acab7f8af2d7e5b046f4ee3919c2f1cff8a34473ec450421e7dbe3d4856c0a72f80dd6d442ede474c83eb2b19ee6a24ea245109cdceb2ac36b3530f74b3d7258a5cca7758d7d677c3a963d41121835c3e55d4dc46d5ed1aaac43309415c35af99c51fdd69e04f0d050000",
    ],
    [
      "ETag",
      "94DBp2m7D2iGd9VQ9hEpOw==",
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
      "Thu, 09 Sep 2021 18:12:50 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-44-1631211111899"
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
      "51",
      "61",
      "6b",
      "c23010fd2fd9d72a565bb105613aeae6a8e2aae26088c4f4dab5b64d97a46e22fef75dea286383b17e48eebdbcf7b8bb9ec9212942e2927d12bf55204e3731a8275d0420ab4c49bc4a5e48200601456354661b7f33b1a2d9b33328c3f9710269cf4e46c3212a247b859c12f74ca204b25012f7e54c0a9a03daa4a279891a752a355c4d67de72359a2d90ca79a8a9f9daf74763df2317a3716554aa5d5d37cee52a98ceefffb6ed76e5e13f8eedc52029df0710818082816ebd143c05a6a67a2b127bcea02579251848528beb8758f0aaa482f316322dcb6a99fd9ed935f537701c14669c5195f002b5eb25b6461457340bf83b2e85745120ea12f713d5e71169b36d0f3ab6ed988ee539f5389a7d0471e4896c30a457a2730b1f757b6dc6f37a945f597d0bd3be67795441031820327fa66cbf5a1d9f14c885e038b7043d72e73afe1dd76a8c7195a8c0208ce24f7f48d4155f3e014884fa1c51020000",
    ],
    [
      "ETag",
      "lWLWF4fMX98pdNvFej35iA==",
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
      "Thu, 09 Sep 2021 18:12:50 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "300000d0bb642d8e1154e80e1268c02a2298021b06314588ca57043abd7b9d5ea3be3bbc6f1027096b9aa82d38bb813730c473659a4cd7a5ace147ea980e0f77b27646518dd1119370e14866aa5ae232d0d555c130a6b052bb59e11ecd1b2975b91aa5b3d497d281d139aa0c72cb3542af06fcb8845b29ec181d8842db225f7ba4e39d701fcd1cde259a0e333f68cc3cdea4f0b134d52d17dc1524910595a20b2ecd7b36a2af5e4b0edede3ec59bcf8b9511c5da0a70b87a2d0e7c633c315deefb2b46097a6409125cdde155ead063cced46acb315de71df9ebebcfc5f6002585f66356ba2ecb95d5c28ca04fcd58fdaa164cfff1a8b6b56839f5f01cf74b419040000",
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
      "Thu, 09 Sep 2021 18:12:50 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-45-1631211111899",
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
      "5d",
      "6f",
      "9b",
      "30",
      "14fd2bc87b6d1248d284448ad62ca54ba4403a42da4dd3848cb9507704536c5a5555fefbae4dd3b5aad4f202f63de79e733f78227f7999922949787ed740fdf8e55624e48480a239deae2fdd62d11ff957cb6fb42c7eae97ca77f8c36c8608ae5992eeab023a5234350339dd6dbb792d9a8ad6427430516778da714603a7efe8c79d4c9027a1c8d6bcfc8bec1ba52a39edf58edadd5c88bc005a71d96562ff72dfbbeff7aa5adc0253b2f756b2872ab2f7b1e8d74230aab82867bb2d1a6824d431ec292fd0c27f669a9cbd4ddde574dfcd117ccf1950c644532a6d0b533051663c6f6a93954c9f88b1f9ea836cbdb5b7882c268a665fc625ddc38995524563f5588175116e7c6b155c6c427f1ead3641bc5d2c3d7fde5d6cd63b3fd85ad74b2ff42c4593020cd79a5967e614e001f553908a97463dd2d75af9b941abf763d1049496d006e3b13da28e6b4f922c19b3cc1d9c26990d49e226e3533a486c3619c2304d8022cf881a162d45892d75a9eda4b193f5211eb27112d3e180c663773419d876ea8e1d208713f2507305e75c5642f2b643e43a5c455e1c85bb60318f3c5342469b429db7c67401af3d2a2c10411fd474d0512e5049b77b15445e385f44ab2baf9df01a72ca1eb77738e38c1612104d6b6c9e82da1729368c0473df3b47b099d8e53128c9f4f713d13dd72e5eb5fc851ee100b55d65de641b85abe0bbb173445cd1a23190fbf6835468f9066b43d7873f88c4256db3901f3b2ffc45daab1032a8a1649f4f13c126f0e9bf765c7cc4e2eaa38c5478c6dd61528bb01ada1de2a6dc237b6c4fec2131e05abd8f4ddc63d7740e9d11f650aae78adac5c7425bb146be803088e30f4cb70eff00a6962bec780400",
      "00",
    ],
    [
      "ETag",
      "LP8lC26MVHBanlXLHtM1iw==",
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
      "Thu, 09 Sep 2021 18:12:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-45-1631211111899"
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
      "dd",
      "4e",
      "c2",
      "40",
      "10",
      "85",
      "df",
      "65",
      "bc2d912a5668c2455554127e044ab830862ced14aaed4eddddaa487877672ba25113ed453b33fbcd76ced9ddc0432a63f061912e1f4b54eb83259a910dc6a8cbcc68fe142435820368c492499dafbcd7d162f622657038719bc359449d51bbcd848e56980bf03790a498c51afcdb0d489123b7459495b99c579903665dd8e2241c7707579ce714db7c30edf582b35e07b6cebe311646cc2bfe1f6d775b07ee6931c60415ca08ed2c85a27b8c4cd7cad4222f32ac692a55841a2ab85a582a2a0ba1886a5ca9354e6aae77ec1eb9f669b65a0c661409939264763ae1f9c09011d9989e5925780ca82a64c149f57ee2721a57426cd81d845ea39aef2bc0a3256986f3bf419e7725f8183eb09d05df39915329cd9ebaec0d83dfb6634f3fb7ba08c2ce0f421b766a8f84dd7e671206fd1bcbddedb49fad0dea1b456ca446eba15b6f344f4ebdfabbade764ade6fff84695e84024f8765ca706fc44641ab76fd57b53417b020000",
    ],
    [
      "ETag",
      "smh6zQbWxnnA/S18OWcoEQ==",
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
      "Thu, 09 Sep 2021 18:12:51 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(AVG(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-46-1631211111899",
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
      "0002ff8553614fe24010fd2bcdde174d100ad4b690188fc3aa4db068291873b9c07699d6d5b65bbb5b2fc4f0df6fda8aca99282181ddf7decc9bd99917f2c8b335199290c74f25149b1f0f22242d028ac678dbdfb0792fdf5c9ec1f4c630787e9e0a58c42727c8e0954ad2344fe0488ab2602087f3593b2e4499d34288230c746498475db3dfed75ab8f3d18a04e42124d78f688ea7ba57239ec7476b9dbb110710234e7b2cd44fa76df79ee75f2423c0053b2b39fb2835964e7eba4a789605471919dcc6768a094502c21a53c410befca75f8733f749bd3b41d23f99933a08c893253952d0cc14416f1b82ceaa864f8426a9b1ffe90993371c681369e8e26ce6cec1c8c1617072b9a563156872d4d3fd4a8d476172d6d85e5453c81255faf2a64b9cc1fb5737f7a85089ab9a712e44abbbd747c47db27bb9e36f73c67166807a787da853f9d5f6bbfeef63868780d52f1acb61bd03081caea6b47ddcfef5809a8c29c0db8b47493766d7d1046a1c522bb7f1c463a84a11d5ac7b41fea6c6080b10e81a24e55d16b15cd44d63375c67a966d41df3019d803880cdd34ed3e3058836d1b460f58dfd2c9b645fe165cc11997b990bc692bb9f5ddc05906fedc1b8f02a72e23a265a2ce1a7355111f7d2a2c12495fd4b5ad502e3053f546ae1738fe681cb80ba7198b09c4946d664f3818114d24209b16340505c5955863d3c8f574e606eed41b4d5051bff5f58e21c9f0f7cbbb20d8e4759755fd4b46be3fba430d2d0abaf90f431fa641b6db0fe91634296b4acdaf4f4dfce706205dace5fdd4db3b9964fb678bdf16c16d6872919bb9e3df91e6ca87080ac8d8f75380e41af876a9771b865cdc314c23159e71e698ac92b0029ad9e3696dfe556d75cd9e496a72a13e619639d835b98a5145841432f55a51b36175db2aa8946f240471643cd7bb40f41fdc86a739e1040000",
    ],
    [
      "ETag",
      "3ycU2pyHDeOQ44ipFmoeVg==",
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
      "Thu, 09 Sep 2021 18:12:51 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-46-1631211111899"
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
      "6d",
      "50",
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "fc",
      "97",
      "f5",
      "b5351414908407d02a988a5ac0070d2147596aa1bd6defae2821fcbb7bc58826eec3ddceee4c6ee6f6b049e4123ab048e2a244b53b8bd13cdb26445da646f39593d4080ea0113133c7979307a90b11f45ffd9741517c8afbe14dafdb65868ede3113d0d9c32ac174a9a1f3b60729326499c8a894864966975b7c1b3cf6260c335a5a389a0641af1ff870707e24f379be390986a3897fe787ff49660707d6b40871850a6584d641ae688d9119da705a64798aaea65245a8a122578b5851990b45e4f2c4bd68ba5eb3e1d53d5bedab2b26a61409939064ee74ccdec0901169481f9c0dea4c5055cb3157d5b9e5b177de6e356bbfaa5185da560aebf52fb9755a7b763dfb7ea4bf33a89f14b1638dd66ced68fc9a6c18c3218d2ad18148f0af0f1273c4872ff26e0fded2010000",
    ],
    [
      "ETag",
      "S5TMnsqaLBZEVHqqxaJIDA==",
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
      "Thu, 09 Sep 2021 18:12:52 GMT",
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
      "08000000000002ffedd34b7282300000d0bb64ad8c22a8e94e3e1135620982e086c1187e55120145e8f4ee757a8dfaeef0be414c29abeba8e15fac041fa08b6528516923e69ad1a6f7fe918a46afa8b631b78b67e94fd0272bef996bf0e1791d7b4b6b59936e48822a999e1434936f369c2b7ba50857aebec89ad9d9cb49a2eeb24bb9d76a15431f224ba701c124bfcd86845e8adef2ec8e0a5f39ef8545656f77bd6f9d93572a6910a8516f238c05ef7d3b41f6c154bb1decdb16f34c77b8714c511b16b98bb8b3e6f9789caebc251ed3685498c7eb485b4db65399f478fa74d74ea8bb3c398ca4b7b7ff0b0c007b8abc627594bfb64f540807e0af7ed47482bdfe6b2cae58057e7e015e14aabf19040000",
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
      "Thu, 09 Sep 2021 18:12:52 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-47-1631211111899",
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
      "5d",
      "6f",
      "9b",
      "3014fd2bc87b6d4212482091a2354ae88a94900e48aa6d9a906d0c754b30c5a65555e5bfef629aae55a59617b0ef39f79cfbc133bae3658a6688f0fcbe61f5d3b75b41d019620ae7705bde5fddacfcdfe35b7b3fb64d7be93bdb7df1389f0382b72c890f55c17a5234356572b68bfa792d9a0ad742f42051cf767ac389351c0ddbc79d4e81275991ad797907ec1ba52a3933cd93763f17222f18aeb8ec537178bd371f4666558b5b469534df4b9aa022cdcf45bf178262c54539df4560a091ac4ed801f3022cfc67a6e4fc7dea3ec7877e0ee0074e19a65434a56a6d410a2aca8ce74dadb3a2d933d236df7ca0c85b7bcbd8a0a2680e6552e2033b3352ac70a29e2a665c84db8de10717db70b388fd6d9044cb4b6fb3e82fb7ebdd26888ceb4b2ff40c8549c134d7981be7fa14c001f45326152fb57adc5eb7ca2f0df23f8ea52580b4645d307106133c74075392118766ae3526d98011e212678c2d32a0539bd9296118785a54b370294a978de9908ead844c6c37b1536b92106bcc129bd034735227b36c171dcfd063cd155b715909c9bb0ea1ebd08fbd240e77c172117bba840c37855a75c6da02de7a545020803ea9e9d846b900a5b6dd7e107be16219fb7baf9bf09ae5983e45f730e30c1792011ad7d03cc5ea8d48a16128586cbc1580f5c4ae4e4189667f9e51dbf3d6c59b96bfd26318606b57e9378ae2d00f7e683b27c41e178d863c741fa802cb37501bb83efe05242c699705fddc79e12fd45d852c63352be9d7d304b00e7cf9af9d161fb0b0fa2023159c6177a86c4568cdba1de2badc13db195923176970ad3ec46ccb3e75adcdd166640756aa978abac587423bb146be822008e30f74b78eff00d7cac79278040000",
    ],
    [
      "ETag",
      "nqPhDIZ5j4V54/4CI7OVlw==",
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
      "Thu, 09 Sep 2021 18:12:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-47-1631211111899"
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
      "dd",
      "4e",
      "c2",
      "40",
      "10",
      "85",
      "df65bc2d09557e9b70511495a48094122f0c214b3b8542dba9bb5b0d21bcbbb315d1a889f6a29d99fd663be7ec1e6097e41138b04ad6cf25cafdc51af5d4043eaa32d58a3f05e50ac102d462cd6493dc4dece9ddbced77843fb59bf36cf238edf59850e1063301ce01e204d34881f374805c64c86d21a565962fabcc02bd2f4c7116f8c3f11de71945261fcf3dcfed7b03385ae7c64868b1acf87fb42d8e166c69e5638c12f310cd2c85a42d867a68642a911529d61495324405155c2dac259585904435aed41aed9addbab22f6df374ba5d06530a854e2867763ee3f9409316a94fafac125a0cc82a64c171f57ee1721255424c381c07ad4635df5780478b9314977f833cef46f0317c60270bbe7322a332d767ead69bb8bf6dc79e7e6e75e306831f84d2ecd4190986a3c12c70470f865b9cb4f7f71ad583243652a1f1d0ae373acd76abfe6eeb3519abf93f8e96255a100abe1df789062716a9c2e31b05cbb91d7b020000",
    ],
    [
      "ETag",
      "5oAhfLtkU7R8aRQ15UmOWQ==",
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
      "Thu, 09 Sep 2021 18:12:53 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-48-1631211111899",
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
      "61",
      "4f",
      "a3",
      "40",
      "10",
      "fd",
      "2b64ef8b266d8116a134315eafa24752a947a99e77b9b4cbb2e05a60915df41ad3ff7e0358b567a24d9376f7bd37f36676e609ad591ea1110a59725fd172f3e58e87a883a8c409dcfe9aaed3bf4e7c252cdbbe53a3dbc8f8699d25c7c7c060b54ae0ac486957f0aa24548c16f35e52f2aac025e75d08d435865ddd1ce87dbdfe0c6d1b7482a6f194e56b50df4a598891aaee72f712ce9394e282891ee1d9cbbdfad0578b92df512285ba9f52852c42fd38e949ca09968ce7c78b3918a8042d9734c32c050bafca28fcba1fbac770d64b80fcc008c584f02a97b52d0841781eb3a42a9ba868f4841a9b6ffea0b93375268132992dbce06085b35abc3a54b05076878eb2829a6296d2258b5635b25c166be5cc9f5d00020e6eb1a062a55c7f777c47d927bb9eb2f03c671e28072787cab93f5b5c2adf6ef638e032a242b2bcf118e030a5b5bfe736baef1faf166009395b70696926d6879a1dc6a145e2e1e0288c351a86c3d03ac2835023b6418d28a41874b28edea870ce735d33fa66181b36b1ec61641ad111b1f040b7629b6a383663538b28d18731da76d063c9243d65a2e082b5bd44d7be1b38cbc05f789371e03465c4b84ae5696bae2ee2ad4f094502e983bab635ca3864aa1fc6f502c71f4f02f7ca6967614a134c36f37b988618a782021b9738a39296173c82a6a1cbd9dc0ddc99379e82a279e0cb1d43a0d1efa75741b0299a2ecbe6178d7d7f7c031a5c9678f31f063e4c036db76fd25de1b46a280dbf39b5f11f5a00e950cbeba9bf7732d1f6cf16be1d042bd0e6423f168e7f83da2b9fc6b4a439f97c0a80dc009f6ef26ead800b8b0569848433cc1c11751252d2",
      "76f658d6987f565b300a266ac8a57c870d346bd7e43a461d91663497cf15b56bd5b4ad862af142021046c673bd7340ff0134fa833dd6040000",
    ],
    [
      "ETag",
      "ZLklxEfVs799j/dhd4X7Fg==",
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
      "Thu, 09 Sep 2021 18:12:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-48-1631211111899"
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
      "8d90d16bc23010c6ff97dbe35a589d132df8a0c3cd4291d9296c0c91d89e5db5ed75c9c521e2ffbe4b1db2c7e521b97cf7bbf07d39c1bea833086153e45f16f5f126479ebb2241634b367234541b040f90552ea47e5a587e8bbafadd4efba3a8ba3583b9990f874298f4132b05e109b605969981f0e304b5aa50c65445b66681f8d8b87b345b4c9e27890815654e982de378348e2770f6ae43eb75b3ffd7c8eaecc18e36096e51639da2f3d068da61ca918b6754d594e81bb23a45032ddc36724db6519ac817c5eff6fda0771f7402b7fa83818025a58a0baa855dbe8a3760625526f42de9a023806e4b09ba6df783c80f6d86430b386b7f7bbd6b2f70bdd5ef83e323a379d124ee0c3a637717938fe48cb304626dd18354c91f4f0bbedccf3ffe63d3fcc0010000",
    ],
    [
      "ETag",
      "rFTutXI4rYuH8AIm+s9QsQ==",
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
      "Thu, 09 Sep 2021 18:12:53 GMT",
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
      "00000002ffedd34b7282300000d0bb64ad0e2a20e9ae0c2ab4226a84289b0cd0888860cc878f9ddebd4eaf51df1dde3748b28c0a41e4ada43578037d3281a36cf4c92cdb69732f9d7db98a059e1892d6989b6b21828fcd768e4a9de37d9169b776a7a79e8c8ca04327f770c143cc6b56b5c86c2cb5add2eb3146b3a4d6f3c27317511e4dd18a5930b5b5f126b8ab981c4278aaf6bedd4356c6be21b5897bab02477735ce1eab7687b18ede8fbd6c97fd6c6e46ae128f4ccb953a8b3d4c43dd5765ce91b99cac641ec425be10035bd6629d79d78469641cf6675fd54edd6cbbce69eeeb6ef4f2f27f8101a01d2b3815a4786e9f1a100ec05f7d227b469fff6d9a70cac1cf2f15e99eae19040000",
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
      "Thu, 09 Sep 2021 18:12:53 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-49-1631211111899",
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
      "00000002ff85536b6f9b3014fd2bc8fbb8e6d5400891a2354ae81a29908d9056d33421e35ca85b822936ddba2aff7dd7a6e95a556af902f63de79e731f3c925b5eeec884a43cbf6ba07ef8742352724240d11c6f3fffb5edd8654d165c5effa1b7f3d85ecc9c7c3a4504d72c49f755011d299a9a819c6c37ddbc164d456b213a98a8637b9dc16838381de867ec79c89350642b5ede22fb5aa94a4e7abda3763717222f80565c7699d83fdff7ee4f7b552d6e8029d97b2dd94315d97b5ff44b2118555c94d3ed060d3412ea04f6941768e13f73979ebd4edde574dfcd117ccf1950c644532a6d0b533051663c6f6a93954c1e89b1f9e2836cfc953f8f2d268a665f2625ddc389b5a38a26eaa102eb3c5a07d6323c5f47c12c5eaec36433bff0835977be5e6d8370635d5df8916f299a1660b8d6d43a33a7100fa8bf03a97869d4637dad959f1ab47c3b164d4069096d3071fb233a18f7bd344b5d968d874e9af5214dc7a9ebd061da679e0df62e058a3c236a58b414a5c386a301a534713da089ed0c9dc4b30769720a5e1fdcc16e0ca94b0e27e477cd152cb8ac84e46d87c855b48cfd248eb6e17c16fba6848c36855ab4c674012f3d2a2c1041efd474d0512e5049b77b19c67e349bc7cb4bbf9df00a72ca1e367738e38c1612104d6b6c9e823a103b6c18096781bf40b099d8b7635092c9cf47a27bae5dbc68f9333dc6016abbcabcc9268e96e15763e788b8a4456320f7ed07a9d0f235d686ae0fbf10894bda6621dfb77ef483b45711645043c93e9e26824de0c37fedb8f888c5d54719a9f08cbbc3a4166135b43bc44db947b63b1c3be64f55b4566f629e333a764de7d019610fa57aaaa85d7c2cb4156be433088338fed074ebf00f5a62206c78040000",
    ],
    [
      "ETag",
      "+z44T7cufMVhxakCT4DA5g==",
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
      "Thu, 09 Sep 2021 18:12:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-49-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92dd4ec2401085df65bcb444aa88d0848b22554900b1146f0c214b3b2d85b65b76b7fc487877672ba25113ed453b33fbcd76ced9ddc332ce02b0601647ab02c5ee2c42f5a40317659128499f9c6712c100542c22b2b94c6b9d73b1dabee69be7f5e0c276e416a3568b08e9cf316560ed218c310924582f7bc8588ad4e6f3a448b3699919a076b92e8e3cb73bb8a73ce581ce07e35ecf6ef71c3818a7c68029362df97fb44d0e062cf8ccc51005663eea5972c117e8abae9629599a275891bc103e4a28e1722112bcc899e0bc42954aad5931eb57e6a5a99f46b34960c27da6629e113b1ed17ca0b86289cb37a412ea04883224c161f95e53390e4a213aec0ebc7aad9cef2b40a3857182d3bf419a77cee8183eb0a305df3996f2225327eaaef768ffb61d79fab955c7f69c1f8454e4d409f1ba7d67e4d9fda1e62647eded9d4239149c8c94a83d34abb5c6f54dbdfa6eeb2dd756d37f2c250a34c067743b1e620556c8128987370f2efd7f7b020000",
    ],
    [
      "ETag",
      "9km4D+rqxzpwVvN/AEsxeg==",
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
      "Thu, 09 Sep 2021 18:12:54 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COALESCE(SUM(`amount`), 0) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-50-1631211111899",
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
      "00000002ff8553616fa24010fd2b64ef4b9ba888288849d3f32cd72351ec01b6692f17dd85856e0b2c659736a6f1bfdf00b5add7a43526bafbde9b79333bf38cee591ea109222c79a868b9fd76c709ea202a7102b749e48df45ffcc6bdb4d474eb2c6c5db76e9e4e4e80c16a95c05991d2aee05519523159f9bda4e455814bcebb10a83bea773543d7065afd195b16e8044de339cbef417d2b652126aabacfdd4b384f528a0b267a21cf5eefd5c7815a94fc8e8652a8872955c822d4cf939ea63cc492f1fc64e583814ad0724d33ccd2bac0576544be1f86ee319cf512203fb290e230e4552e6b5b1022e479cc92aa6ca2a2c9336a6cbefb837c7b6ecf0265b69cce6d7f661ff9abc5d10667758ccd7147e91f2b5828fb8b8eb281f26296d2358b3635b25e17f7ca4f6fb90004ccdc6241c546b9fa657bb67248765c65e5bab61f2847a7c7cab9b75c5d283fae0f386038a242b2bcb11b6092d2daea4b479d8fef580bb0849c2db836fb06d6c67d8bc4c40ce3b13e22719f123226e608eba41f5a433a8c08c5a09375f44685739e1b4433f581a569b1a991483746c3f138d6cdd8b028a5714c86a116c521c168d7414f2593f48c89820bd6b6155d794e60af036fe5cea681dd9411e32a9567adb9ba88f73e251409a44feadad528e390a97e23c70d6c6f3a0b9c4bbb1d8b394d70b8f51f6030629c0a0a6c5ce28c4a5a2e78044d43174bdf099ca53b9d83a279eb8b3d43a0c99fe73741b02d9a2ecbe6174d3d6f7a0d1a5c9678fb1f063e8c21daeddea5bbc469d5501a7e736ae33fb600d2a096b7d3e0e064a0dddf1d7c3b08b6a1cd857eaf6cef1ab5571e8d6949f3f0eb290072037cb9d4fb0d032eec18a41112ce3073a1a89384256d678f658df917b5391ce963d4904bf901334c7ddfe43a461d916634972f15b51bd6b4ad862af14a021046c675dc7340ff01d7a9f789e1040000",
    ],
    [
      "ETag",
      "gdR53HoZNV9/lyIME339Zw==",
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
      "Thu, 09 Sep 2021 18:12:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-50-1631211111899"
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
      "6d",
      "50c16ec2300cfd17efdaa216b6419138c0d46d68158c0e4e134221985268eb92a44c08f1ef3865621ce643e267bfa7bc9713ecd262055d58a6c9be42757c48d04c6c13a3ae32a3f92aa9d0080ea0110933c5c76813278f9878aada8ec3b1dcb777cb49afc70c2d37980be89e609d62b6d2d0fd3e412172b4b29caac230c91c4b8b5fa3717fca30a79585a35914f507510867e726592ccadd9f60389a866f61fc9f647e76604bcb18d7a8b090681d948ab628cdd086d3222f337435554aa2869a5c2f124555291491cb13f7c973fde796dff46d75828089194961522a983bfb626f60c8882ca61fce064d26a8bae598ebfa3cf03868b4dac17dd5990eb5c05abde7fa5ea3d5b9ed7dbb9fff3e32381ad49f8ad8b1466bd6bb1a7f211bc67048a32a74400afef5f7d45cf1f90231e2574dd2010000",
    ],
    [
      "ETag",
      "aKNhRg4eg0rujOEOcq7kbQ==",
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
      "Thu, 09 Sep 2021 18:12:54 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b7282300000d0bb64ad4c2152a13b418aa0b48894809b0c42f8080d6900f9747af73abd467d7778df204e12d2b6b86b2a42c10b986249151261cf146d3be4c9aa84efc3a9cb43e9c6c38f3ecdac329403e2479686e88024676545012add18a6ee943bc17cf159ba357973c6d0ec3256578e72149732adc479ded5c5ca85b4779fbc32977cdb889658bf6eeb319be160cff45a64ba97f4e1a83c279a19bc6eceb1a192d010153f54919ed202a59f3ea507fbb43ecc536fe64e7f159de2e831dba80234606e133572eac86c0784d769c4dee879b36bacb1933d585cf65fc2c3c3ff0516808cace4a4c5e57d3b94557501feeae36e62e4fe5f2331271cfcfc024ed3888319040000",
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
      "Thu, 09 Sep 2021 18:12:55 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-51-1631211111899",
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
      "02ff85535d4fa34014fd2b64f6d5b6d4d2963669d6a6a276d3d25d4a35eb664386e182a3c02033b86b4cfffbde19acab31515e60e69e73cfb91f3c913b5e26644a629edd37503f7eb915313922a06886b7a2f8763d39bf70aeab9da0a38d5afd756e45369b21826b96a4459543478aa66620a7bb6d37ab4553d15a880e26ea0cfb9dfe68d03feeebc79d4c9027214f57bcbc43f68d52959cf67a07ed6e26449603adb8ec3251bcdcf71e8e7b552d6e8129d97b2bd94315d9fb58f46b2e18555c94b3dd160d3412ea080aca73b4f09f99c4276f5377392dba19821f3803ca98684aa56d610a26ca94674d6db292e91331365f7d90adb7f216a1c544de146554d2028eac842a1aa9c70aacb360b3b696fed92658cfc3e5c68fb68b0b6f3def2e36abdddadf5a57175ee0598ac63918ae35b34eccc9c703ea2720152f8d7aa8afb5f2738396efc7a209282da10d46637b44fbae3d89d378cc5277308c531be2d88dc7433a886d3671c04962a0c833a286454b51da301ac3808e22e63a34726c9745d4496894da74648f1985fe6440f647e44fcd159c725909c9db0e91ab60197a5118ecfcc53cf44c09296d7275da1ad305bcf6a8b040047d50d35e47b94025ddeea51f7ac17c112e2fbd76c22bc8287bdcdee38c539a4b4034adb1790aeab548b061c49fafbd53049b897d3f042599fe7a22bae7dac5ab96bfd0431ca0b6abcc9b6cc360e99f1b3b07c425cd1b0379683f4885966fb03674bdff8d485cd2360bf9b1f3829fa4bd0a20851a4af6f934116c029ffe6b87c5472cae3eca488567dc1d26b508aba1dd216eca3db0c7c3fed0fca98ad6ea5decd8710f5dd339744628a054cf15b58b8f85b6628d7c016110c7ef9b6eedff019871890778040000",
    ],
    [
      "ETag",
      "omJZ9GH4ZpUoa6OtLx4jog==",
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
      "Thu, 09 Sep 2021 18:12:55 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-51-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92c14ec2401086df653c5a12ab80da840320620d2094e2c510b2b4d3526c3b75772b21847777b6221a35d11eda99d96fb6f3ffbb3b784ef2101c5826f14b89727b12a39e98c04355a65af1a7a05c2158805ac44c7a1407777dfbb5ff782af4cabbefda1b77b269b59850c10a3301ce0ea204d35081f3b4835c64c86d01a565962faacc02bd2d4c71ea7beea8cf7946a1c947b3c1a0dd19f4606f1d1b43a1c5a2e2ffd136df5bb0a6a587114acc0334b31492d61868d7c854222b52ac292a65800a2ab85a88259585904435aed41a76cd6e5ed8e7b679aeaeaf194c29103aa19cd9d994e7034d5aa41e6d582534199055c882a3eafdcae524ac8498d01df9cd7a35df5780478b9214177f833cef4af0317c60070bbe7322a332d747ea76f0d0fe6d3bf6f473ab9bb6dffb4128cd4e1d11df1df6a67e7b3836dcfca0bdb3d5a8c692d84885c643fbac7ed5b86c9ebddbda256335ffc7d1b2440b02c1b7e32ed1e0442255b87f03a801ae677b020000",
    ],
    [
      "ETag",
      "RogcHG1vGV+athRJC1wIQw==",
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
      "Thu, 09 Sep 2021 18:12:55 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-52-1631211111899",
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
      "7f",
      "4fe24010fd2acdde3f9a00e5570b25311e6a8f6b02454bd190cb05b6cbb4eed9766b77eb8518befb4d5b51f1122524b0fbde9b79333bf34c1e78ba252312f0e8b1807cf7ed8f08488380a211de4e9613fde6b6edcca45ccda87e01374ce9e3b33364f052256992c5d094a2c819c8d172d18a7251643417a289819a46b7d9317b9d6ea7fc0c2d0b7512e270cad30754df2b95c991ae1f72b72221a21868c6658b89e4f55e7feaea592efe0053523f4ea96316a97f9ef43c168c2a2ed2b3e5020d1412f2352494c768e14db90dbe1f876e719ab422243f7106943151a4aab485219848431e157915958c9e4965f3dd1fb2b0a7f6a5afcd1cf764439352ba39d5a8d40e8786b6c18a421ec39a6f3725b25e670fda0f6f3e4304f3df530972a3ddfdb43d5b3b263baeb6745d7be16b27e7a7dac49b2fafb58bd511073d6e412a9e560e7d1ac450ba7b69a2f3ffd39502aa30670dae076d9376866d2b0883010b873d2308db1004c36060d05ed066561ffadb0028ea5419bd52d154a4a661194637347a3de8026da3ce185ac321748d9e619a41dfb24ce833cb20fb06f99b7305575c6642f2ba93e4ce737c7bed7b4bf772ecdb5519212d6275559b2b8b78ef53619148faa4ae7d89728199ca67715cdff6c697be736bd793308588b2dde2116721a4b10464d39c26a0209f892d368d5ccf178eefccddf11415d5f35e1f18928c7e3dbf09fc5d56755955bf64ec79e3156a689ed3dd070c7d987db2dfbf4b774be3a2a254fcea54c77faa01d2c15ade4edda39349f6bff7f86d105c803a17b959dade8ad4571e849043cabe9e022457c0977b7c582ae4e25a611aa9f08c33c7649984e550cf1e4f2af32fea014e83412a72ae3e6266dbe81c9a5cc628234202a97aa9a85eaaaa6d2554c85712823832aee34e10fd07309bc995d4040000",
    ],
    [
      "ETag",
      "GUG/QV0IMssYMa/BeQct/A==",
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
      "Thu, 09 Sep 2021 18:12:56 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-52-1631211111899"
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
      "6d",
      "50",
      "cb",
      "6ec23010fc97edb1094a022d0f890354bca488470aeaa142c898250d24d9d476a810e2dfbb0e15eda13ed83b9e196bc6173826f90e3ab04de2cf12d5f92146b3b04384ba4c8de6a3a05c23388046c4ac7c9bcd875e3d692e0a397a9c04be688c85d7eb7659a1e50766023a17d82798ee3474de2f908b0cd926322a73c322732e2c1e86b3de9261463b0ba7ab30ecf5c3015c9dbb65b3298ebf86c97439180da2ff2cebab0307da46b84785b9449ba05074406926b69c165991a2aba954123554e28a8815958550442edfb84f81eb3fd7fdc0b7abd56eb33025294c42396b57af9c0d0c199146f4c5dd206081aa46aeb9aff6135f7bb566abaa71aa3436dd5fdaaf35823bed5b7afdf36cff6c50cf1571468d369e778bfa4236bee15a4695e88014fccfe3c4dcf0f51b502d3639c4010000",
    ],
    [
      "ETag",
      "WOPF03i7QpcG+I21a4Ha0A==",
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
      "Thu, 09 Sep 2021 18:12:56 GMT",
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
      "02",
      "ff",
      "edd34b7282300000d0bb642d4ef90add3582f2956271f86c3231441b110d1047c0e9ddebf41af5dde13d002684f63d12d79a5ec03b18b162cdc93ce026b4ef2c721abe3c25ed35d2209f34596cf332977a5676e79b1562df43249302f538e13a71040a5dc89b95ddb3fc63d7d677326a95b9de4377616c5cfd569bb2a1da8db030ec64ade5a9998d5b29ea7921cbba705d2ddd7bbb943267adc7251541f689e0d01458ca2edf0b8525f7b85496c43e0e4158b3901b87f04b3b0b9f581e5a2845d4967e626cdfaa657dd91c532f3ce5093f678e6e56c66a8c7d3ee58798cd5f5efe2f300374e0aca33d62cfedaa6e5933f0571f8991d3e77f4871473bf0f30b761f6d7d19040000",
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
      "Thu, 09 Sep 2021 18:12:56 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-53-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85536b4fdb3014fd2b91f795be1f492b55a32b61746b5396a6a06d9a22dbbd0986340eb1c354a1fef75d3b948190205f12fb9e73cfb98f3c923b916fc9983091de5750ee3fdd4a464e08689ae2adfcf6ebeab29fc3973bb5bf61b7d1e23b849b74324184302c457745060d25ab92831a6fd6cdb49455414b291b98a831e8353ac35ea7db318f371a214f41962c447e87ec1bad0b356eb58edacd54ca34035a08d5e472f77cdf7ae8b68a52de02d7aaf55ab2852aaaf5bee8e74c72aa85cc279b351aa8149431eca8c8d0c27fe6969dbe4edd1474d74c11fc203850ce65956b630b5370992722ad4a9b958c1f89b5f9e283acfd853f8b1c2eb36a97c739ddc189b3a59ac67a5f80731eae96ce3c385f85cb69345f05f17a76e12fa7cdd96ab159066be7fac20f7d47539681e53a13e7d49e023ca0fe169416b9558fccb5517e6ad0fced580c01a515d4c1d86d0f69c76b8f58c25c9e78bd014bdac098c7dc01edb1361ff5a1bf65409167452d8be6321f76dc4e77d06fc72ee3bdb8df1f7a31e34337f67ad4a349977ba38493c309f95b0a0d6742155289ba43e43a9c477e1c859b60368d7c5b4242ab4c9fd5c64c012f3d6a2c1041efd47430512151c9b47b1e447e389d45f32bbf9ef00252caf7eb7b9c7142330588a625364f43b9945b6c1809a64bff0cc1766297c7a022e3df8fc4f4dcb878d1f2677a84033476b57d937514ce83afd6ce117145b3ca421eea0f52a0e51bac0d5d1ffe201297b4ce427e6cfcf027a9af4248a0849c7f3c4d04dbc087ffda71f1118bab8f324ae31977872b23c24ba87748d8728f6c7738ecf6890597fa4dcced0e8e5d33394c46d841ae9f2aaa171f0badc52af50cc2208e3fb0dd3afc0386493efe78040000",
    ],
    [
      "ETag",
      "oJZVP4neBksyhbjTLKeRUg==",
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
      "Thu, 09 Sep 2021 18:12:56 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-53-1631211111899"
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
      "0000000002ff8d92614fc2301086ffcbf9d19180c080257c00445d32d0c190184348d96e30dcd6aded2484f0dfbd4e44a326ba0fdbddf5b9eedeb73dc04b940660c12a5ae7058afdc51a95ab8309ca2256923e194f258201a8d89ac8419ebbf3c85d79f3bc8d8dc7963bb8b49f76dd2e11d2df60c2c03a4018611c48b09e0f90b204a9cde77191a4cb323340ed335d9c7a137b7c4b79c2039d8f678ed3eb3b43381ae7c68029b62cf97fb42d8e066cf96a82210a4c7dd4b364826fd157b696295992c55891bc103e4a28e172612d789131c179852a9566bd5233ebb5ab9a7eda9d0e8131f7998a784aec6c4af381e28ac513be2395601220ca900487e5fb95ca51500ad1a13df6cc4639df5780460ba318977f8334ef86d1317c60270bbe732ce145aaced48d73dffb6d3bf2f473abeb9e37fc4148454e9d11cf1e0da75e6ff4a0b9c5497b7faf503e084e464ad41ed6aa8d76b36556df6d1d706d35fdc752a240037c46b7e32e5260852c96787c034b142ffb7b020000",
    ],
    [
      "ETag",
      "CqqQWiQbTWq8e4V7QC+IYw==",
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
      "Thu, 09 Sep 2021 18:12:57 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-54-1631211111899",
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
      "fd",
      "4fa34010fd57c8de2f9af48b16fa95188fab9c72a9d4a3d48f5c2eed0203ae521677174d63fabfdf0056ed9968d3a4dd7defcd9b999d7926f72c8bc898042c7928406cbeddf1803408289ae0edc438bb164f969aaac8e0bfac59ce4f2fbda7a32364b05225e93a4fa12979214290e3c5bc95085ee45470dec4404dd368eafd9eded5cbcf7034429d84349eb2ec1ed5b74ae572dc6eefbc5b09e7490a3467b215f2f5eb7dfbb1dbce05bf8350c9f6be651b5d64fb73d3e3948754319e1d2de6984021412c614d598a29bc29a3e0fb7ee816a3eb5682e44716020d435e64aa4c0b43843c8b5952882a2a193f932acd777fc8dc9eda135f3bb7ae0f56745d4a57871a95daeed0d0565851cc5258b2685522cb657eaffdf466e788a0ff2d952057dad599edd9da3ed971b585ebda735f3b383ed44ebdd9e242fb71b3c7c11c23908a6555863e0d5228b37b69a2f3f1e94a0155e85983cb41a74ff5616714c4c1208c873d33883b1004c36060d25ed00947061851001475aa8c5ea968c6b36048633300ddd4cdfe3036e368148f060684ba0e46d73074c3ecf5fa236340b60df22498821326732e59dd4972e539bebdf4bd853bb17cbb2a23a645aa4eeae4ca22dee7a9b048247d52d7b6441947a7f2591cd7b73d6be23b97763d09534868b8993fe02cc43495806c2ae81a1488731e61d3c8c56ceef8ceccb5a6a8a89ef762c79064fce7f94de06ff2aacbaafa2596e75937a8a142d0cd7f18e6d137c876fbceee92a64545a9f8d5a98eff580344c75ade4eddbd539f6cff6ef1db20b800b517f9bdb0bd1b525f791083802cfc7a0a905c015feef16ea9908b6b853652e119672e94a54928a09e3db6ae927f510f063db34f2ab2501f30b3d3dd35b98c5146843564eaa5a27aa9aab69550215f4908e2c8b88e7b8ae83f9b928639d4040000",
    ],
    [
      "ETag",
      "C4HXrwAtLtd4oJAOpoGVRw==",
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
      "Thu, 09 Sep 2021 18:12:57 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-54-1631211111899"
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
      "6d",
      "50",
      "c1",
      "4e",
      "c2",
      "40",
      "14",
      "fc",
      "97",
      "e7",
      "d196d08208241c8aa2903420152e1a4296f2a885b6afee6e8b84f4df7d5b0c7a700fbb6f766636337b86439c6da10f9b38fa2c509e6e22d4733304a88a442b3e72ca148205a845c44a6f763cdc7fbde966efb6ec3e964d8ac75e673e18b042851f980ae89f611763b255d07f3f432652649b48a9c8348bf42937f8c99f790b86296d0d9c2e7ddf1bfa23a8acab65bdce0fbf86c974317a1e05ff595695057bda04b84389598826412e698fa19e98724aa47982b6a24286a8a016d74424a9c88524b2f9c6be6bdb4ea7e5b88e59dd5e8f85098542c794b176f9cad9409316494047ee062e0b643d72cd5dbd977cdd6a38edba46596b4cbabfb4db705b57da31f4eae7d9e149a37a91c419159a78cd4bd40732f135d7d2b2400b42c1ff3c8ef50557df44aa319dc4010000",
    ],
    [
      "ETag",
      "AOwk7xZt09+v8Dv0oiHA6Q==",
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
      "Thu, 09 Sep 2021 18:12:57 GMT",
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
      "02",
      "ff",
      "ed",
      "d34b7282300000d0bb64ad0e0a52e88e9f959fb48805dd64421a21a64848502a9ddebd4eaf51df1dde374018132961df327206cfe08616e60ccf426ed8ee50c790374ff4adc4a17cdd54856f7448fb6c60f7922668aa07a6da2c0b21c6b59bcfa3b6b5e2b9ac7cacdaa3129467848be888fad1d1685e5c87ba0bcb3363736d4f73e1f11591b1be655e739a96c551da5d92d5a5950d7d162e0c6f55b8fd86044ae4d429ae45a7dbca615db1a5aa85eda1d13fd2b137f577cd33e5a64ae20072a53ac57e15ecb6a9eb5cd8b51bdc93a1262cbbf8dc820b1a39a9b5dfe5573a7b78f8bfc004902f4e059190deb7ab4bd39c80bffab0bf7172ff6f132488003fbf30a545de19040000",
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
      "Thu, 09 Sep 2021 18:12:58 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-55-1631211111899",
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
      "00000002ff85536b4fa34014fd2b64f6a3f64d6d69d2ac4dc5b56b4b5d4a35ee664386e182a3944166501bd3ffbe7706eb6a4c942f3073cfb9e7dc07cfe48ee731199188a7f71594db6fb722228704144df1f662f2f83419fe3e7f3ab8f69c4ef7e7797b7b70ff381e23826b96a49b2283861455c9408ed6ab665a8aaaa0a5100d4cd4e8f71b9da35ea7dbd1cfd0719027214be63cbf43f68d52851cb55a7bed662a449a012db86c32b179bd6f3d745b45296e8129d97a2fd94215d9fa5cf47b2618555ce4e3f50a0d5412ca1036946768e13f338e8edfa76e72ba69a6087ee00c2863a2ca95b6852998c8139e56a5c94a46cfc4d87cf34156eedc9d06161359b5c9c39c6ee0d08aa9a2a1da16609dfacb8535f34e97fe6212cc965eb89a9eb98b4973ba9caf17decaba3a737dd75234cac070adb1756c4e1e1e503f06a9786ed4037dad955f1a34fb38164d40690975301cb48f6867d876a2241ab064d8eb47491ba268180dfab417b59963831d47409167440d8be622b7933889ed28091d967443dbe925e190311a3280b8e3b47bf6118dc8ee903c965cc109978590bcee10b9f267811b06feda9b4e02d79490d02a5327b5315dc05b8f0a0b44d02735ed74940b54d2ed9e7981eb4fa6c1ecd2ad273c8794b2edea1e679cd04c02a26989cd53502e448c0d23de64e19e20d84cec621f9464f4e799e89e6b176f5afe4a0f7080daae326fb20afc99f7c3d8d9232e695619c843fd410ab47c83b5a1ebdd5f44e292d659c8afb5eb5f93faca87044ac8d9d7d344b0097cf9afed171fb1b8fa2823159e717798d422ac847a87b82977cf1e0c3bb64d0cb8541f625dbbb7ef9acea133c20672f55251bdf858682d56c957100671fc9ee9d6ee1f7b573c3b78040000",
    ],
    [
      "ETag",
      "PAwxA8ZKx+YN912JK0y+qw==",
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
      "Thu, 09 Sep 2021 18:12:58 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-55-1631211111899"
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
      "8d926f4fc23010c6bfcbf9764b400161092f86a042c6ff115f1842ca761bc36e1d6d272184efee75221a35d1bdd8eeaebfebee79da23bc2459080eac937857a03c5cc5a8a72698a12ab856f4c945a6102c40cd6222073e9fec3d8cc7d3eb697750e92c9eb8bbdbb7db44a860832903e70851823c54e03c1f216329525b20789166ab32b3401f72539cfbb3fee881f25484261f2d3ccfed783d385997c69069b62af97fb42d4f166cc57a86114acc0234b3e4526c31d07d2353b134e7682b51c800159470b9104b51e44c0a6153c5aed7ed6ae3a67a5d354fb3d522908b80e94464c42ee6341f68a1199f893da9840601b20c497054be5fa99c84a51013f6477ea356cef715a0d1a284e3ea6f90e6dd303a860fec6cc1778ea5a2c8f485baf7c6ee6fdb91a79f5b755dbff783509a9cba207e7fd89bfbee7062b8e5597be7a0514da42023151a0fab955ab37edba8bcdb7a278cd5f41f47cb022d0818dd8ec744831331aef0f406d8912e167b020000",
    ],
    [
      "ETag",
      "JTlPwLegOQ2QDJ0BUWlAqw==",
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
      "Thu, 09 Sep 2021 18:12:58 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-56-1631211111899",
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
      "8553fd6f9b3010fd5790f74b2be5fb0b12a9eab294754c29c90869574d5362cc41dd00a6d8648baafcef3ba0699b556a1112d8f7debd77e7f323d9f0c42723e2f1f021876cf7e95e78a44640d110777b7abb73f5733b0ed2fbbbefbb701ee79bbfe6f8ec0c11bc60491aa711d4a5c8330672b45c34c24ce429cd84a863a27a7f506f0fbaed4ebb788ce1107912a260ca930db2ef944ae5a8d93c68374221c20868ca658389f879bfb9ed34d34cdc0353b2792cd94415d97c5ff43c128c2a2e92b3e5020de412b215c4944768e185e97b9f8f5337388d1b2182b79c01654ce4892a6c610a2692808779566625a34752da7cf54316e6d49cb8da64b6b4dd93b54f15ac4f352ab5eab7a6adb19e8047b0e2febad85fadd28df6d5995d6104d5efa804b9d66ebe998ea91d832d5b5bdab6b970b593f353edd2992de7da97db230c3af4412a9e94fe5cea4550787b6aa1f5f6e00a0255a85905577a6b40db466be8059ece02a3dbf78216789ee1e97ddaf55a6cd8839eef01459e2ab2972c9a88c4eb0e821e6b0dfb3d1fa0d33198def274d0f5c0f7fbcca07d0646bfab7702b2af913f195770c1652a24affa486e1ccb3557aeb3b42763d72ccb08681ea98bca5c51c46b9f0a8b44d03b75ed8b2817a8541c8a65bba6339eb8d6b559cdc11442ca768b079c84804612104d331a8382ec4af8d834329f2d2cd79ad9e32932cac39d1f10928c7e3dbe10dc5d5a7659955f32769cf12d726896d1dd7f31f431e891fdfe95dc358df21252e2cb55957f5b05481b6b7959758e5603b2ffbdc7b74670fc2b2df263693ab7a4da7220800c12f6f11420b80c7c788b0f570ab178a950462a5ce3cc315988b00caad9e37169fe89ad1bc6a04d4a70a6dec4867aebd0e4224791116248d45345d5952adb568472f90cc2208e8c6dd99718fd0725dd35d7d2040000",
    ],
    [
      "ETag",
      "4712MXvAfpjhJygPmukxEA==",
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
      "Thu, 09 Sep 2021 18:12:59 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-56-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d50cb6ec23010fc97ed355109556889c4a154a8204511a4a5970a21c75942c8635ddba142887fef3a54a8c7fa60efceccae667c86aa6c7388202b8baf0ef5e9ae40bb72458aa6abade147516b103c402b0a5616e5326e3fd420099aa45aedc347799fcd5793092b8cdc6323203ac3aec43a37107d9ea1150df2582eac5b624fca758be47df63a4b1968287740b28ee3e7693c838b771bd96e55f5af91cdc583036529ee50632bd139509a0e28edc28533a25135fa863a2dd1402fee894253a78426f219f1c3911f8c1e8261e0ced378ccc29aa4b025b5ac5dbfb137b064459dd2376783210b745f72cc5d7f1f190efb0cc75ee0acfde546372e70dce677e1f464d12c35b13b83ced8e06af2859c71feb8c8ea0e3d90827f785eda6b7ff901fc7f2e5dbe010000",
    ],
    [
      "ETag",
      "giPLnVp0N1mNkQh57c/bHQ==",
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
      "Thu, 09 Sep 2021 18:12:59 GMT",
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
      "02",
      "ff",
      "edd3417282300040d1bb646d19628c487720b68a18449dd2b2c90408342026462960a777afd36bd4b7fedbff0d5896f1cb855e65cd4fe0190c6c6c1b99b15633d7ebcad7e2ec855fa427620f3152f93645fdd80cf02694fd64386f9a581c8acf00c28897c5b1eb3c8b42bb3904304ec37736e53a14b56c615c8610058206cb566627b2214ea5762575b1754e7031cba73953f732b78492847a293449479edc1091eb1b4a2435d7d182cad58e6938a1072cf19ce16698d4dedc299b2c59d412f9c417dad7d26ad7ea78636d14aff89276b7ddbe7a71aaad33b41fe5b8981b0f0fff171801de2ba1f9858afbed08dbf608fcad4faf83e2f7ff5dce34d7e0e7175be0664219040000",
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
      "Thu, 09 Sep 2021 18:12:59 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-57-1631211111899",
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
      "00000002ff85535d6f9b3014fd2bc87b5c939026292452b446295d2305b212d26e9a26641b43dd02a6d8644aabfcf75d9ba64b55a9e505ec7bce3de77ef08c1e7899a009223c7b6c58bdfb722f083a414ce10c6eafdda7c27edafdccc9579f24f668ceb7ab4d369d02826b96c44595b38e144d4d999c6cd6ddac164d856b213a90a833723afdb341ffb4af1f773c069e6479bae4e503b0ef94aae4a4d73b68773321b29ce18acb2e15c5eb7d6f7bdaab6a71cfa892bdb7923d5091bd8f45bfe58262c54539ddacc14023591db302f31c2cfc6726e4fc6dea2ec7453703f096538629154da9b42d48414599f2aca94d56347946c6e6d1075a7b4b6f1e5954e44d51c6252ed88995608563b5ab987519ae7c6b115cae427f162d5641bc9e5f79feac3b5f2d377eb0b66eafbcd0b3142639335c6b6a9d9b530007d04f9854bc34ea91bed6ca2f0d5abc1f8b2680b4646d3076ec33dc77ed3149894353773022a9cd08718933c20362d3f1900d13c230f08ca861e1529423324ca94b4e63eaba493c4cc62476699ac6983967ce608c07361da2fd09fa5b73c52eb8ac84e46d87d06db888bc380a37c17c1679a6841437b9ba688de9028e3d2a2810401fd4b4d7512e4049b77b11445e389b478b1baf9df0926598eed68f30e314e792011ad7d03cc56a5f24d03014cc7cef02c066623f0e418926bf9f91eeb97671d4f2577a0403d4769579a375142e82efc6ce017183f3c640b6ed07aac0f21dd406aef77f00094bda6641d71b2ffc85daab90a5ac6625fd7c9a0036814fffb5c3e20316561f64a48233ec0e955a84d6acdd216eca3db05d7be0f49101d7ea5d6cd4770e5dd339744656b052bd54d42e3e14da8a35f2150441187f60bab5ff0727e1b9dc78040000",
    ],
    [
      "ETag",
      "Q8zm0zyXlb+Mbd05CivOUg==",
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
      "Thu, 09 Sep 2021 18:13:00 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-57-1631211111899"
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
      "6d",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bfcbf9d29180f2b884173c892403750cdf18424a771bc36e9d6da741c277f73a118d9ae85e6c77d7df75f7ffb77b784cb2105c5827f153816a7716a3b9b3818fba1046d32797994670000d8b89cc06de3d3f673e17fe70304e5f378a7bf3b8db2542f30da60cdc3d44098a5083fbb0878ca5486d5c8a22cd5665e680d9e5b6380ffcc96c4c792a439bcf169ed7eb7b233838a7c69019b62af97fb42d0f0e6ce5dac70815661ced2cb9925be46662656a96e6022b5a168aa386122e1762258b9c29292b54a9345a955af3b27651b34fbbd3215048ce4c22336217739a0f8c344cf8f28554429300558624382adfcf544ec252880d27b3a0592fe7fb0ad068512270f53748f36e181dc30776b4e03bc7525964e6445d7937bddfb6234f3fb71af682d10f421b72ea840493e9681ef4a6b7965b1eb5f77706f5ad9264a446eb61ad5a6f375acdeabbad0369ada6ffb84615e80067743bae13036ec484c6c31b5d07b4ad7b020000",
    ],
    [
      "ETag",
      "nCLVc+aRclRDCGmzhrcLSg==",
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
      "Thu, 09 Sep 2021 18:13:01 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MIN(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-58-1631211111899",
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
      "7f",
      "4f",
      "a3",
      "40",
      "10",
      "fd2a64ef1f4dfa8b524a6962bcaadc1db94a7b946acce5d22e30e02ab0c82ef51ad3ef7e0358b567a2840476e7bd796f66679fc83dcb4232263e8b1f4a28b65feeb84f5a04248d7137eda7d6e4ece75fefc2bee5c566beb446aefb7872820856b1044df304da8297450062bc5c74e28297392d386f63a2b63e6aab434dedabd533324de40948a229cbee917d2b652ec6ddee5ebb13731e274073263a014f5ff6bb9b7e372ff81d0452740f25bba822ba1f8b9e263ca092f1ec64b94003a58062052965095a786586fed7c3d41d46d34e8ce00d0b8006012f3359d9c21401cf221697459d958c9f486df3cd0f595853ebdc532e6de7681d5209eb63850aa5f96d296bac266209ac58b8aef657abfc5ef9e6ce2e3182dab75480582bd73f2cd7520ec1b6a32c1dc75a78cad1e9b1f2dd9d2de7cad9cd0106fd852024cb6a771ef513a89c3d37d07e7f6c15814ad46c822ba337a4eaa867fa916f04d148d3fda807be3ff20d9d6a7e2f300730087da0c89355f69a45339ee9a6a647d4005f8d4caa1b9aa61b466f10e86018615f33231d0f034c6340762df2583009174ce45cb0a68be4dab53d6be5b94be77ce2597519112d1379d198ab8a78eb53629108faa0ae5d15651c95aa23b11dcf7227e79e7d65355330859806dbc503ce4144130188a6054d414271c9436c1a99cf16b667cf9cc91419f5d1cef70841c6bf9f5e09de36afbb2ceb2f99b8eee40639b428e8f6bf18fa18620b766fe4ae6852d6901a5faf9afc9b264054ace575d53f580dc9eecf0edf16c1e16fb4c8afa5e5de9066cb85080ac882cfa700c175e0d33bbcbf5088c52b853242e21a672e1095485040337b2cadcd3fb347aa6a0e49",
      "0d2ee4bb98a60df64dae72541921854c3e57d45ca8ba6d55a8142f200ce2c838b6f31da3ff00f14c6db5d0040000",
    ],
    [
      "ETag",
      "m2mEABKxTDIhorvPUE8RRw==",
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
      "Thu, 09 Sep 2021 18:13:01 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-58-1631211111899"
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
      "6d",
      "90",
      "51",
      "6b",
      "c2",
      "30",
      "10",
      "c7bfcbedb585b6c3a1051f742b9b20b2557dd91089edb546db5e97a493227ef75de2702f8690e42ebfe4feff3bc3513639c4b093e57787aa7f28d17cd8438abaab8ce6ada54623788046944cee07ab852c3ea70d26cbe528c268d877f2341e33a1b33dd602e2331412ab5c43fc758646d4c8cf7261ec27a66f6df43259251cd594db68b19ecf27d3790217efc66fb7edf19f9f2d56c96b92de7bb2b97870a05d8a052a6c32b4e55b4507cccccc3ad3a26e2bf435752a430d0e7617a5a2ae158ac8e78c3f18fae1d3631885760c4723062bca8491d430bb5eb23630644495d2898d41c4807247f658b8f5c7a68328f08388a733e3524ee35d28bc41a185367f25a6bd41fdae88f56ab45283abec67b256b88fb1511d7a90096ef89b34d7f8f20ba3851feccd010000",
    ],
    [
      "ETag",
      "h5TNifZBneESS92e28yuiw==",
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
      "Thu, 09 Sep 2021 18:13:01 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "51",
      "6e",
      "82",
      "30",
      "0000d0bbf45b8d220ebb3f5a0c43104407e25703a50c904201a19265779fd935e6bbc3fb0631a5acefc9bdb9b11abc832956e0822e6cb14586cc2bd3aa8680fa46eacc23e429c195daf9b052646d16c29e44e19f3cd3194dca8e2a6e609fb5db22e48796739496a5b5ecb5fc66865866839b143a949a32d81259696204614242b8a16d97c5fea3d37daeab0dd257d80f6a7d89c5c595e3dbbc4a8e636d8ae6ee7c126f7f55354fdd6534946422e852664e60afb1d5eef8dc953db10f17d72d53be5f3a138ec63381b7b5e458fb7279754ccfe4e31ce58b9797ff0bcc007b88a2633d299edbd71b0867e0af3eb94f823dff231677ac033fbf41c7cd7e19040000",
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
      "Thu, 09 Sep 2021 18:13:01 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-59-1631211111899",
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
      "000000000002ff85535d6f9b3014fd2bc87b6d42489a86448ad628a56ba48474405a4dd3846c73a16e01136c5a5555fefb2ea6e9da4dea7801fb9e73cfb91fbc90075126644698c8f60dd4cf5fee2523270434cdf076ef337e16ee76ee28df0f8bbb6be5dbecfe693e478468598a16550e3d259b9a839aedc27e56cba6a2b5943d4cd41b4f7bced9c8193aede34ea7c85390a76b513e20fb4eeb4acd6cfba8ddcfa4cc72a095507d2e8bb77bfb716857b5bc07ae95fd51d24615657f2efa35979c6a21cbf92e44038d823a86828a1c2dfc6126ecfc63eabea0453f43f0a3e04039974da95b5b9882cb321559539bac64f6428ccd771f24f4d6de32b2b8cc9ba28c4b5ac08995504d63fd5c8175196c37d6cabfdc069b45b4dafa71b8bcf2368bfe72bbde6dfcd0babdf202cfd294e560b8d6dc3a37271f0fa89f80d2a234ea517bdd2abf3668f5ef585a024a2be882f16470461d773065299bf0d41d8d593a00c65c3619d3111bf0e9299c260c28f28ca861d15296c3b1eb3a0c78ec82e3c6a7c3e9287619b8b1e3007592c41db98e430e27e4a9161a2e84aaa4125d87c86db08abc380a76fe721179a6849436b9bee88cb505bcf7a8b140047d52d3a18d0a894a6dbb577ee4058b65b4baf1ba09af21a3fc39dce38c539a2b4034adb1791aea8d4cb061c45f6cbc0b049b895d1f838acc7ebe90b6e7ad8b772d7fa34738c0d6ae366f1246c1caff66ec1c1137346f0ce4b1fb20155abec3dad0f5e117227149bb2ce4fbce0b7e90ee2a80146a28f9ffa7896013f8efbf765c7cc4e2eaa38cd278c6dde1aa15e135743b244cb947b6eb4cc74362c0b5fe3b361cb89363d7da1c6d4628a0d4af15758b8f8576628d7a036110c7ef9b6e1d7e0325de824778040000",
    ],
    [
      "ETag",
      "qNbc6SUU83lq2mhPsN/bjw==",
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
      "Thu, 09 Sep 2021 18:13:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-59-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d92db4ec2401086df65bc2d09e52434e1a2286a935211da2b43c8d24e4be961ebee164308efee6c45346aa2bd686766bfd9ceffef1e214bcb082cd8a4c94b8de27095a07ad2c102659d2b499f8a9712c100542c21d2ecdafd49370bb2a0336cefdb99a746bb79321e1321c32d160cac23c429e69104ebf908252b90da429ed745b96e3203d4a1d2c5a5bf70bc7bca0b1ee9dc0b5cd79eb853381997c68829b66ef87fb4ad4e06ecf86681310a2c43d4b35482ef30548e96295951e5d892bc16214a68e0662111bcae98e0bc4595567fd432075db363ea67381a1198f390a99497c4064b9a0f14572c5ff05752090302441392e0b879efa99c468d101d3a9e3fe835f37d0568b438cd71fd3748f36e191dc30776b6e03bc70a5e97ea42ddb98ff66fdb91a79f5bdddafef40721153975417c67365dfaf66caeb9d559fbe4a050ce052723256a0fcd766fd8bf1eb4df6dbde1da6afa8fa5448d06848c6ec743aac08a592ef1f4067e78727d7b020000",
    ],
    [
      "ETag",
      "13A5B3kUkU280v0kNt9jPg==",
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
      "Thu, 09 Sep 2021 18:13:07 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT MAX(`date`) as `date`, `profile_id` as __pk FROM `purchases` WHERE  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-60-1631211111899",
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
      "000002ff85537f4fdb3010fd2a91f70f48a5f9d1366d2a21d641c6ba9514d21486a6a9759c4b30a471881da60ef5bbef9250a04c82285262df7bf7de9dcf8fe48e671119929027f72514eb4fb722242d028a26b8cb6f8d112dbf5b7f5373a2ebfe45fa4359f717878788e0154bd2559ec2811465c1400ee7b376528832a785100798e8c0360e4cbb635a66f50c1c077912d278c2b33b64df2895cba1ae6fb5db8910490a34e7b2cdc4ea795f7fb0f4bc10b7c094d47725755491fafba247a9605471911dce6768a094502c6045798a165e9851f87937759bd3553b41f0036740191365a62a5b9882892ce64959d459c9f091d4365ffd90993b718f03ed6cf4736f195105cb7d8d4aadf96d694bac26e6292c78b4acf6178bfc4efbea4fcf3082da3754825c6a57df5cdfd576c1634f9b7b9e3b0bb4bda37dedd49fcecfb52fd73b18f41781543cabdd05344ca172f6d4c0f1ffc75611a842cd26b8e81b3635078613c6619fc5834e2f8c0d08c341d8efd14e6830a70bdd28048a3c5565af5934c39e98cc8c3a4e0c61afebd8bdae65dbdd81d98d0c300ccb0ac166616451cb269b16f9537005275ce642f2a68be4ca1f07ee22f0e7def12870eb32625aa6eaa4315715f1daa7c22211f44e5d9b2aca052a554732f602d71f1d07e34bb79982092494ad67f73807314d25209a1674050a8a331161d3c8f974360ec6536f3441467db4e75b8424c35f8f2f84609dd75d56f5978c7c7f748d1c5a1474fd26863eec2ed96c5ec95dd2b4ac2135be5e35f91f9a0031b1969795b5b3c276fedee0db2238fc8d16b998bbfe3569b67c88a1808c7d3c0508ae031fdee1ed85422c5e2994910ad738734c5622ac8066f6f8aa36ffc41ef41da3476a70a1dec60646c7d936b9ca5165841564eaa9a2e642d56dab42a57c06611047c61b7ba718fd07d91c2e5bd0040000",
    ],
    [
      "ETag",
      "ij0AauJ2zl1L//RQlKt2qQ==",
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
      "Thu, 09 Sep 2021 18:13:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-60-1631211111899"
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
      "6d",
      "90",
      "51",
      "6b",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cbedd116da0a6e167c50d74da1c8d629084324b6d75a6d7b5d926e88f8dd7789c3bd9887e4eef2bbdcff9f331ccb2683107665f1d5a13c3d14a8df4d90a0ea2aadf868a951080ea0160593eb7611cbfd7a30ed3dae5f44b93ccef27eaf188d9850e91e6b01e119f212ab4c41f8798646d4c86d99d0e6117d6a4df63c5e469cd594996cb18ae3f1248ee0e2dcf8edb63dfef3f3c5327a8d927b2d9b8b0307da2598a3c4264533be9574c054cf8d3325eab642575127535460617b5148ea5a21895caeb803cff5077d3ff0cd7a1a0e19ac2815baa486d9d5076b034d5a5409fdb03108189036648fb9ddbf4dd90b3cd70b5c7f68cdd892d5780f0abc1be41b68f3376272d2a8de24b15e8546aa77953d256385ff31d4b2430752c11f3e2bf535bffc02d9a01535cd010000",
    ],
    [
      "ETag",
      "XpNLrhX6C+7XFaiTkHf3+g==",
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
      "Thu, 09 Sep 2021 18:13:08 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb64ad8e217c92eec0484504818a55364c8a11044690a07c3abd7b9d5ea3be3bbc6fc092840b11b755c1afe00d0c4c22b36466d7d8a05d1ada02fbd0df96c2b9ef605d4bae878f6be7aeeda9a62a6e765a6383cff1a98864761ef774117ffa92a7ee9149c213f28a2c1a531a7d38532b7087e6dcfbbe848ddbb16a7308a96e21f3b698966147db47b4b6dca2ea59f3d53b8879a9ae8bedfc72f5cc331ad2657ee364f33e56c81db562291434a8f22ab1969d7c1d2d5212a5cda88a2babb183388f56b109c3e0b10bd0066e32bd540ff281734d82cc9cbdbcfc5f6002785f5f1a2ee2cb733b52089980bffa713bd4fcf9dfe0ace10df8f90508c0467f19040000",
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
      "Thu, 09 Sep 2021 18:13:08 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-61-1631211111899",
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
      "5d",
      "4f",
      "a3",
      "4014fd2b64f6d516686b4b9b346b5351892ddd05aa6b361b32330c380a0c3283a66bfadff732585763a2bcc0cc3de79e733f7846f7bc4cd00c119e3d34acde7dbb13041d21a67006b7377f7f3d14e162b0bd38b7b3dbf1e5eefad21c3dcde780e02d4be2a2ca594f8aa6a64cceb6613fab4553e15a881e24ea8ded9e3d1eda03bb7d9ce9147892e5e98a97f7c0be55aa9233d33c68f73321b29ce18acb3e15c5ebbdf93830ab5adc31aaa4f95ed20415697e2efa3d17142b2ecaf93604038d6475cc0acc73b0f09f999093f7a9fb1c17fd0cc08f9c324ca9684ad5da8214549429cf9a5a6745b367a46dbef940a1bb7297914145de14655ce2821d1909563856bb8a1967c1666d78fed926582f226fe3c7e1f2c25d2ffacbcd6abbf643e3fac20d5c43619233cd35e6c6893ef97000fd8449c54bad1eb5d7adf24b83bc8f636909202d59178c27d618db8e35252999d0d4191e93d462843864728c87c4a2d3111b258461e06951cdc2a52887840c9995a4f164908ce211b59c98101bc75632a20eb3a6499226687f849e6aaed829979590bceb10ba0ebcc88da360eb2f1791ab4b487193abd3ce585bc05b8f0a0a04d02735eddb2817a0d4b6dbf32337582c23efcaed26bc6219a6bbf001669ce25c3240e31a9aa758bd1609340cf98bb57b0a603db11f87a044b3dfcfa8ed79ebe24dcb5fe9110cb0b5abf41b8551e0f9e7dace017185f346431ebb0f5481e55ba80d5cefff001296b4cb827e6edde0067557014b59cd4afaf53401ac035ffe6b87c5072cac3ec8480567d81d2a5b115ab36e87b82ef7c0769ce3b1fe5315aed587d8786c1fbad6e66833b28295eaa5a26ef1a1d04eac91af2008c2f87dddadfd3f9691d15678040000",
    ],
    [
      "ETag",
      "YzXqmSA2UHG1gh6KyWK/4w==",
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
      "Thu, 09 Sep 2021 18:13:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-61-1631211111899"
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
      "00000002ff8d926f4fc23010c6bfcbf9d21199e28425bc000559c2df314c8c21a46cb731d8d6d9762a12bebbd78968d444f762bbbbfeaebbe76977b089b3006c58c6d16381627b12a19ae8c04559244ad227e799443000158b883cbb6bbf58a388f54e97c5c4c4eee65ebdd6a2669308e9af306560ef208c310924d80f3bc8588ad4e6f3a448b3459919a0b6b92e4e3dd719de529ef240e7c359bfdf6af73bb0378e8d01536c51f2ff689bef0d58f3a58b210acc7cd4b3e482afd1578e9629599a275891bc103e4a28e1722112bcc899e0bc42958a65564cebc23c37f5536f34084cb8cf54cc336267539a0f14572c71f933a9048b00518624382cdf4f548e8352880e9da167d5caf9be02345a1827b8f81ba479578c8ee1033b58f09d63292f3275a4bafd51ebb7edc8d3cfad6e5a5ee70721153975443c67d0997aadc15873f383f6f656a11c0b4e464ad41e9ad55afdf2caaabedb7acdb5d5f41f5b89020df019dd8e5eacc00e592271ff060cbe7fd27b020000",
    ],
    [
      "ETag",
      "/VBx6OgaH+buQ1eFkYtz4g==",
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
      "Thu, 09 Sep 2021 18:13:09 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-62-1631211111899",
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
      "54",
      "7f",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2a",
      "91f74f2b012109bf25d431081d120d6d08edaa6902c738a9db10a7b1c3842abefbce4e698bdab5115272bef7eebdb3cf3ca10796ae510f852c7e2c68befb76cf43544154e2185647e3e1afc7a4fb73dbd93ae3512318048139beeaf701c1144be04d96d0aae0454ea8e82de6b538e7458673ceab50a8dab2ab56cbb16c4b3d9d6e17788226d194a50fc0be9332133dd33c68d762cee384e28c891ae19b9775736b9b59ceef2991c23c96344145989f8b9e259c60c978da5fccc1402168bea41bcc12b0f0ca5c87df8f4bd718ded462006f19a198105ea452d9821284a7118b8b5c5745bd27a46dbef9407377ea0e0363385b78c1c90a6f1479756a60611c828ab1829e2296d0255baf5466b9cc1e8cb13fbb800c38b8c3828a9571f3d3f55dc3582950df383306dec838a64e3c63e179ee3c304ece4e8d737fb6b8347edc1e61c0f39a0ac952ed38c0614295dbe74d9dbc3f4a45c0121c94c965bbdec256a7de0da3b04da28ed30ca33a0dc34ed86e6227ac936e8336d621c5c093aaba66e194a74e8823c7723a1671daad5684f1dab65ba143c246d3aa371b8edd685ba4e9b4d1be82fee64cd211131917acdc5974e34f027719f80b6f38085cdd46848b448e4a73aa89b73e253409a04ffadaab2ce3a0a48e69e205ae3f1806936bb79c8c298d31d9cd1f6136229c080a689ce30d9534bfe06bd83474399b4f82c9cc1b4c81a18ffbf28010a8f7fbe99510ec32bdcb52bf9556aba1f50f806b9c141ab12d3f90d544fb7de5ff2506be3fb805599ce778f771f90feb6bbc8e4a8b2f7a48a91d22fb286aa1fd9f3dfc2a08ee54a985ae16",
      "ae7f8bca259f4634a729f97a9000ac135ffe351cee2960e1a6828c9010c3d812a144484ecbf1651b6dfe99dde93ab685343897ef728d66e7704eaa86aa48373495cf1d95f7546f9b4a15e2050449983a6fe29d43f61ff1eda63127050000",
    ],
    [
      "ETag",
      "DFCXql9Hv8v3FD4TATT/FQ==",
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
      "Thu, 09 Sep 2021 18:13:09 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-62-1631211111899"
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
      "000002ff8d50416ec23010fccbf69a88062404481c4a85281242252da70a21e32c2124f1067bd33645f97bd701f55c1fecd9f18c3ce32be499496002872cbdd4689b871479e3418cae2ed8c9519171080120ab549423fbe3546f50ace3fc9b74a916a677396da65351387dc252c1e40ac70c8bc4c1e4e30a4695283655526d5844dc547e5eaedfe78b792c44498927d6dbd5ea69b69a431bfc99f6fb2aff9765d70670a6438c47b46834fa0c95a5336a5efa7a4e955581a1a3da6a74d089bb8bd4525d294b140a130efb61341c44fdc8afd1782cc282b4e28c8c68b76f920d985815317d493b8844603b28458fddfed9d1bec31deddadddd346b18ddab2549e0d03ffe780bf24c3e1c4b68b63506a095fce34bc6b7b9fd0569477278a4010000",
    ],
    [
      "ETag",
      "8rzsa/3lNRkxocmaGn/qhQ==",
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
      "Thu, 09 Sep 2021 18:13:09 GMT",
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
      "0002ffedd34b7282300000d0bb642d0cbf207447fca006aa13053b6e18a061a494484244a2d3bbd7e935eabbc37b80bc2c69df67f2d25006de80ca2d5f2f75dc79687eaba338bdb5add63785b04e7784f7b0375dd5a7e5f4a20df1266128fafcb2f724c51c2e64734f336397ad48899359480db23d93f5b85c6c8cc4b70e0e2e3cce39bbad2ad39aed7703d7c4650921e457422a495ab4fa2e46250f9b8812899b08b9835b262a0d8ec2634e9b1b26abeadadc221506d3c8535756b83028e2207c1fcce369ed937327964e927eb823ce7cc6b7d2b2e651112ce22636b4a0893b5b7f79f9bfc004d0b1ab05edb3fab9dd86be3f017ff533a93afafc8f682ea8003fbf806b98cc19040000",
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
      "Thu, 09 Sep 2021 18:13:09 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-63-1631211111899",
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
      "c8",
      "fb",
      "da24e41d22456b94d21529212b21ada66942c65ca85bc0149b4e5195ffbe6bd374ad2ab57c01fb9e73cfb90f9ec9032f13322731cf1e1ba80fdfee454cce08289ae1ad5afad57a9c860771ed3e5c7a6cbd499b225b2c10c1354bd2a2caa12345533390f3fdae9bd5a2a9682d4407137526c34e7f32ec0ffafa99390ef224e4e99a970fc8be53aa92f35eefa4ddcd84c872a015975d268ad7fbded3a057d5e21e9892bdf7923d5491bdcf45bfe78251c545b9d8efd04023a18ea0a03c470bff99497cfe3e7597d3a29b21f88933a08c89a654da16a660a24c79d6d4262b993f1363f3cd07d9b96b77155a4ce44d5146252de0cc4aa8a2913a54605d06db8de5f997db60b30cbdad1fed5657ee66d95d6dd7fb8dbfb36eafdcc0b5148d73305c6b619d9b938f07d44f402a5e1af5505f6be59706791fc7a209282da10d46537b42fb33db89d378cad2d9701ca736c4f12c9e8ee930b6993382511203459e11352c5a8a723c1b8cc0b19d683ae943344a93491427b37e34a209d8948e603c9c90e319f95b7305175c5642f2b643e436f042370a83bdbf5a86ae2921a54dae2e5a63ba80b71e151688a04f6a3aea2817a8a4dbedf9a11b2c57a177e3b6135e4346d961f788334e692e01d1b4c6e629a83722c186117fb9712f106c26f6f3149464fefb99e89e6b176f5afe4a0f7180daae326fb20b03cfff61ec9c1037346f0ce4a9fd20155abec3dad0f5f10f227149db2ce47aef06bf487b15400a3594eceb6922d804befcd74e8b8f585c7d94910acfb83b4c6a115643bb",
      "43dc947b623bf6603424065cab0fb1a1d33f754de7d019a18052bd54d42e3e16da8a35f21584411cbf6fba75fc07434031c178040000",
    ],
    [
      "ETag",
      "tANpL5fTyoQEkFIcLMfumg==",
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
      "Thu, 09 Sep 2021 18:13:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-63-1631211111899"
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
      "02ff8d925153824010c7bfcbf60a339246ca8c0f5864346a86f852e338272c88014777478ee3f8dddb23b3a69a291e6077efb7c7feff777b78ceca181c5865e94b8d627796a27ad04180b2ce95a44fc54b8960002a9612d9615e556232c4c7b12ce45d21b6c16ab3edf78990d11a0b06ce1e920cf35882f3b4879215486d11cfeba25c3699016a57e9e22c0cfcc990f282c73a9fcc47237730f2e0609c1a63a6d8b2e1ffd1b63818b0e1ab0013145846a867a904df60a47c2d53b2a2cad194bc16114a68e0662115bcae98e0dca48a69b74dcb6e5be7967ebabd1e81398f98ca7849ec7c46f381e28ae501df924ab009104d488293e6fd4ae52c6e84e8d09f8476a799ef2b40a325598ecbbf419a77cde8183eb0a305df3956f0ba5427ea6674effeb61d79fab9d5b51b7a3f08a9c8a91312fa636f16bae3a9e61647ed839d4239159c8c94a83db45a9deec5a5dd7ab7f58a6babe93f8e12351a1031ba1db799022761b9c4c31b60799b957b020000",
    ],
    [
      "ETag",
      "4aEpnefGeZMsmsJmrwRbjw==",
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
      "Thu, 09 Sep 2021 18:13:11 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-64-1631211111899",
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
      "ff8554fd4fdb3010fd5722ef17904adbf423fd902a564a06994a0a690a62d3d43a8e530c491c620756a1feef3b3b0428dba0add4d8f7debd77be739ed01d4b433444015bdf1734df7cb9e501aa212af11a7667edf0f78f4dd0e85abdb1fbfde6719393d3a38bd108104cb1044eb2981e085ee4848ae1625e5fe7bcc870cef901243ab03a07a6d5365ba6faf40703e0091a475396de01fb46ca4c0c1b8d4abbbee67c1d539c3151273c79d96f3cb41a59ce6f2991a2b12bd90015d1f858f430e6044bc6d3d1620e060a41f3254d308bc1c22b330cbeeea6ae339cd4d7007e6084624278914a650b52109e466c5de43a2b1a3e216df3cd039adb537be21b93d9c2f5f7563851e4d5be8185512d6ac60a6a8a584c972c5ca9c87299dd19dfbcd91944c0c10d1654ac8cab53dbb38dd7ad9531320e8db17b6cec26705c63e1baf6dc37f60ef78d136fb638378eae7730e03ca442b254fbf6711053e5f9f9689dbf1baa08588268195cf69a1636fbcd4110053d12f5dbdd206ad220e807bd2e6e074d32e8d04e18500c3ca9b26b164e791a5a83a6495a03da0f4910e041bbdfec76dad86cf73ad46a463d6cb6baa61911b4ada1c79c497acc44c6052bcf175d798e6f2f7d6fe14ec6beadcb887011cbe3d29c2ae2ad4f094502e883bab62aca3828a96639ae6f7be389ef5cdae57c4ce91a93cdfc1e2624c2b1a080c6394ea8a4f9190fe1d0d0f96ceef8cecc1d4f81a19b7e5e21041afe7c7a25f89b4c9fb2d4ff68ee7b8e7ba20d54884b1c171af2503ea071065ed1765bfb7f9ab1e78daf411ae739debc8b41395647d1ff21a1f17a55daac244da4d4aa556b6765a1edaf2dfc6a086e57a9852e16b6778dca2d8f4634a729f97c9800ac039fbe24aa1b0b58b8b3202324ac617489502224a7e508b3449b7f660fe0db451a9ccbf7b156b3d5a97aa572a88c34a1a97caea8bcb1fad854a8102f2008c2e4b9ba6ddb3fb67426b031050000",
    ],
    [
      "ETag",
      "O3dxZyb/567ANJhwyrcHBQ==",
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
      "Thu, 09 Sep 2021 18:13:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-64-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f6fc2300cc5bf8b776da515a66a20711815da2a2ab47570d98450286e5668eb2e71f923c4779f5326b4e372489ce79fa3f772865d516f6008eb427fb7684e771af9cd1529dab6642b4743b545f000596921a795a6e8230ae6d3791e1efb7838c63ad4a3911036fbc24ac1f00c7981e5c6c2f0f30cb5aa50c654456dcd02f1a971f778369f3c4f52112ada3861b64892a77132818b771b5aad9addbf4696170fb6b44e3147837586ce4363688b19c72e9e555553a26fa935195ae8e0aea10db58d3244be287ef8e007613fe8056e3d0e06029694292ea81676f12ede80895599d241d2414f00d3951234eff6bdc8fd2ec3be039cb5bfbddead17b8def2f7c1f189d1be1a1277169db1fbabc9889c7196406c5af42053f2c72f055fef971f5d1e040bc0010000",
    ],
    [
      "ETag",
      "KmgoCZC1TKTf6x3ewxIg6g==",
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
      "Thu, 09 Sep 2021 18:13:12 GMT",
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
      "000000000002ffedd3417282301400d0bb642d4c0b6a4c772a7620d28a2814dc6422fd40648a149200edf4ee757a8dfaeef0be11cf32e83a26af15d4e8098ddc2266666e9bc5cae90b892fcb5d8a1f9393b5f784e72797b46c0f62a3d7ef616e958e1f1098ae8d58166fe7d6c59be0e48ad7d8f01c36e68be0aa3c5abe8c3c5ac6cc8f6c9ad7107abeb1eb9e2d5b5dd3629a18b2175a44bd0d2c2e7da0514866f5cc716d7715395a2f83acc672cd7372085d262574c7b84cf638ce3ee6eaac8b9438fdc054c769f5a5c478a9f0628b158546ab920e78da932319f87c3bf69f0f454553a1cdbbbbff0b4d100c8d68a163e2b6dd9e1132417ff5991c1bb8fd5f016fa1453fbf54edf38a19040000",
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
      "Thu, 09 Sep 2021 18:13:12 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-65-1631211111899",
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
      "00000002ff85536b6f9b3014fd2bc8fbb8e60d498814ad514a57a684ac84b4aaa609d98ea16e00536cd25655fefbae4dd3b5aad4f205ec7bce3de73e78463b5e6cd104119eded7ac7afa7627083a414ce1146e77bd08fbbff2a0da7f1f5fcebbcee3e50ddb3d4ca780e09a25715e66ac25455d5126279b753bad445de24a8816246a0d9d566f38e8f57bfa19bb2ef024cb92052f76c0be55aa94934ee7a8dd4e854833864b2edb54e4aff79d7dbf5356e28e51253bef253ba0223b9f8bfec804c58a8b62ba5983815ab22a6639e61958f8cfdc92d3f7a9db1ce7ed14c07b4e19a654d485d2b620051545c2d3ba3259d1e419199b6f3ed0da5b78f3c8a222abf3222e70ce4eac2d5638564f25b3cec3d5d2f283f355b89c45fe2a88d7f30b6f396bcf578bcd32585bd7175ee8590a938c19ae35b54ecd298003e86f9954bc30ea91bed6ca2f0df23f8e4513405ab226188fba43dc1b775d9290114dc60387245d46c8988c1c3c205deadaccde12868167440d0b17a218d96ed21fda493c1c8cedd8ee33128fdd911b3bb64d89638fb60e19a0c3097aa8b862675c9642f2a643e83af4232f8ec24d309f459e2921c175a6ce1a63ba80b71e151408a04f6a3ae82817a0a4dbed079117cee6917fe535135eb014d3a7f53dcc38c1996480c615344fb16a29b6d03014cc96de1980cdc47e1f83124dfe3c23dd73ede24dcb5fe9110c50db55e68dd651e8073f8d9d23e20a67b581ec9b0f5482e55ba80d5c1ffe021296b4c9822e375e78839aab9025ac6205fd7a9a0036812fffb5e3e20316561f64a48233ec0e955a8456acd9216eca3db2ddbe33ea2203aed487d8d0b18f5dd339744696b342bd54d42c3e14da88d5f2150441187f60ba75f807dafc350078040000",
    ],
    [
      "ETag",
      "k1TaIJmNrv+8QC05xQYekw==",
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
      "Thu, 09 Sep 2021 18:13:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-65-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d926f4fc23010c6bfcbf976244c61c2125e0c419d01e4cf88444348d96e63b8ada3ed1442f8ee5e27a25113dd8bedeefabbee9ea7ddc3739c0560c3328e36058add59846aa48331ca2251923e39cf248201a85844a4dbbcb366b3c9763baad7b79b41c7f41f1e65d46a1121fd15a60cec3d8431268104fb690f194b91da7c9e1469b6283303d42ed7c5893776073794a73cd0f960daeb39ed5e170ec6a931608a2d4afe1f6df383016bbe1c638802331ff52cb9e06bf495ab654a96e60956242f848f124ab85c88042f722638af50a562d52ba675619e9bfa69349b0426dc672ae619b1d309cd078a2b968cf92ba9048b00518624382cdf2f548e8352880edd8167d5caf9be02345a1827b8f81ba479578c8ee1033b5af09d63292f3275a2ae7bf7ce6fdb91a79f5b751caffb83908a9c3a219edbef4e3ca73fd4dcfca8bdbd53288782939112b58766b5d6a85f5ad5775bafb8b69afe632b51a0013ea3db711b2bb04396483cbc0165a5e8c77b020000",
    ],
    [
      "ETag",
      "I9J6XXSxxQ55xqND1cWZsg==",
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
      "Thu, 09 Sep 2021 18:13:13 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-66-1631211111899",
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
      "85546b6f9b3014fd2bc8fbd24a79401ee421455d96b00d29251d9076d13425060c754330c5265554e5bfefda346db36e2d8a04d7f79c7bceb5aff38836348bd0100534b92f49b1ff74c702544344e00456fde6cf7b3ec0c5c3b59e6e96532bd85d2ebd64340204952c8eb7794aea9c954548f870e135928295392e18ab43a1ba69d60db36db40cf9f40703e07192c6339a6d807d2b44ce87cde651bb913096a404e7943742b67d5e6fee5acdbc60772414bc792ad90415de7c5ff4226521169465a38507064a4e8a15d9629a82851766147c3e2ddda078db4800bca321c161c8ca4c485b502264594c93b25055d1f011299baf3e9067cdac89af4de60bc73f5be3ad24afcf35ccb56350d3d6d0534c53b2a2d15a6656ab7ca37d75e797900107b79813bed66ebe5baea5bd2cadb59176a18d9da9765ac076b485e3589eaf9d5d9c6bdfdcf9e24afbb23cc180f388704133e5dbc7414aa4e7a7adb5df1ea8246001a25572d5d34d6cf4f5411007bd30eeb7bb41ac9320e807bd2e6e077a38e8904e14100c3c21ab2b16ce5866066134885b5d139308b7bb3830f45640e276df68775b46bb15852689754347871a7a28a82053ca73c669b5bfe8c6b57d6be5bb0b6732f62dd5468ccb544c2b73b289d73e053409a077fa3ac82c65a0240fcb767ccb1d4f7cfbdaaae66346121ceebd7b989018a79c001a17784b04292e59049b86aee69eeddb73673c03863af4ab2382a3e1afc71782bfcfd52e0bf5469eefdace3765e088b8c669a920bbea03e11cbca2c3a1f6ff3263d71d2f411a1705deff958376cc8ea4ff4342e15554d93c4a1a48aa1da3d64964a2c3ef03fc6a086e57a5857e2c2c7789aa2597c4a42059f8f1300158253efc9338de58c0c29d05192e2086d10db914090b528d30dd2af34fec41bbd3ea23052ec49b5cd7ec1dcf4ad69015c99664e2a9a3eac6aa6d93a9923f83200993e7a8633bfc0114dacb0131050000",
    ],
    [
      "ETag",
      "T/Xqs9arwV0lkYDEbvMYSg==",
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
      "Thu, 09 Sep 2021 18:13:13 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-66-1631211111899"
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
      "00000002ff8d50c16a834010fd97e9b10ab10549841c9222ad20a1350d399412363a5a8d3a76774444fcf7cea6a1e7ee65f7bd796fe6cd4e7029db0c023897c5778f7abc2b90dfec2341d3d76ce4eaa835080e20ab429443768c69191ff3a1d8ecc76a61ee9b38daacd7a230e917360a8209f212ebcc40f03141ab1a149b6aa86f59443c761647bbf7f0394c846828b3c4ee10c79b6d1cc2ecfc994ea7eef22fcbe7ec4045e70473d4d8a66833749a2a4c39b2eb19d57435ba867a9da281abf85a2834f59dd244ae30aeefbb9effe83d78f62c572b11d6942a2ea915ed612fd98089559dd020dbc1026e783b329a574dd2dc6076ab48c727b27359f2b0eed18154c917bd94fc8be71f2cea44157f010000",
    ],
    [
      "ETag",
      "wdWLo8LWfwgASyj0s+mLIA==",
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
      "Thu, 09 Sep 2021 18:13:13 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "59",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bbe4db32058449fa27cb9465a4ca56f02703181a903580183bbd7b9d5ea3be3bbc6f90150599263cf717d28137c033090985e00e5033d6af0a86cc76d5c0b7a466b4e2b8d368be3abb285812d8df6b69b77b91bdf08024910ebd8248d550773de2d64b083d2f5102e3ea9c057c4b46846a7ed2b1c2d30f293d166eb57eea5a6ad772e9162ce557fda2235319f0482d5cfb54d1e16205737fa38eecccde2142a5c3f4f7bb038da0bd32fb0a6f54ddfab414f39c69a1e433d1ec4ef9714d5ee57de3efed6d264ee7b234d45ee6c1d09a68b1581e53e1e9e9ff021b406e43c5c884abc77659416803feeae3990fe4f15f2319230cfcfc027d837e8119040000",
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
      "Thu, 09 Sep 2021 18:13:13 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-67-1631211111899",
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
      "85536b6f9b3014fd2bc8fbda04c83b91a2354ae91a35211b9076d33421632ed42dc1149b4e5595ffbe6bd374ad2ab57c01fb9e73cfb90f9ec81d2f53322309cfef1ba81fbfdc8a849c105034c75b7f59ad33d719db3fc36d90f2fcf2b277e52fe6734470cd92745f15d091a2a919c8d92eece6b5682a5a0bd1c1449dd1b8e38efa6ecfd5cf643a459e84225bf3f20ed9374a557266db47ed6e2e445e00adb8ec32b17fb9b71f7a76558b5b604ada6f256d5491f6c7a25f0bc1a8e2a29cef4234d048a863d8535ea085ffcc34397d9bbacbe9be9b23f88133a08c89a654da16a660a2cc78ded4262b993d1163f3d50709bdb5b78c2c268a665fc625ddc38995524563f55881751e6c37d6ca3fdf069b45b4dafa71b8bcf0368bee72bbde6dfcd0babef002cf523429c070adb9756a4e3e1e503f05a97869d4237dad959f1bb47a3f164d4069096d301e3b23ea4e9c69922563964dfac32473204926c97848fb89c3a60318a40950e41951c3a2a5285da07dc71d410c23a7170fc049e3e964e0c42ca343ca684a0743208713f2b7e60aceb8ac84e46d87c875b08abc380a76fe721179a6848c36853a6b8de9025e7b545820823ea8e9a0a35ca0926ef7ca8fbc60b18c56575e3be135e4943d86f738e38c1612104d6b6c9e827a2352d0abbdd87867083613fb7e0c4a32fbfd4474cfb58b572d7fa14738406d57993709a360e57f33768e882b5a3406f2d07e900a2ddf606de8faf00791b8a46d16f263e705bf487b1540063594ecf36922d8043efdd78e8b8f585c7d94910acfb83b4c6a115643bb43dc947b644f07ced421065cab773177e21ebba673e88cb087523d57d42e3e16da8a35f20584411cbf6fba75f80791f9da5c78040000",
    ],
    [
      "ETag",
      "NCpLf107/XSORdigKK2VNA==",
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
      "Thu, 09 Sep 2021 18:13:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-67-1631211111899"
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
      "0002ff8d92dd4ec2401085df65bc2d81221668c24551444c41849a981842d6760ac56db7ee8f8610deddd98a68d4447bd1cecc7eb39d737677f0941509f8f098ad9e0dcaedc90af5ad0d66a80cd78a3ea528148203a8d98ac8bab9b857fcdc1d8fc37e3d36d79d7a73c8825e8f0815af3167e0ef20cd90270afc871d142c476a8b053779b1ac3207f4b6b4c579341b4d8694e722b1f9e42e0c837e3880bd736c4c9866cb8aff47db62efc0463cce304589458c7696528a0dc67a64652a96971c6b4a1819a3820aae165652989249216a54a979ed9aeb9dba4dd73e9d6e97402e62a63351107b37a7f9400bcdf84cbc924af00890554882d3eafd42e52ca984d8703489bc5635df5780464b338ecbbf419a77cde8183eb08305df39960b53e8237519de04bf6d479e7e6e751144831f84d2e4d4118946e3c13c0ac653cb2d0edafb5b8d6a2a0519a9d07ae8365a9db3b6d778b7f55c58abe93fbe96061d8819dd8eab4c839f32ae70ff06b3be05467b020000",
    ],
    [
      "ETag",
      "/uDXslC1MMLB/cuJ8/2GaA==",
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
      "Thu, 09 Sep 2021 18:13:14 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-68-1631211111899",
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
      "ff8554fd6fda3010fd5722ef9756e223e1231024d451c8ba4c34b0105a55d30497c4a12e21a6b1d31555fcef3b27a52debb64648897defdd7b773ef344d62c8d488f046c759fd36cf7e98e07a442a88415eee6740d7cf0989917295c7d9baeefce1f67f341bf8f08a6580236db845605cfb3908ade7c565b653cdf42c679151355cd6ed5309b46c3504fd7b2902768128f59ba46f6ad945bd1abd70fdab515e7ab84c296895ac8372ffbf587467d9bf13b1a4a513f96aca38aa8ff5ff42ce12148c6d3fe7c86067241b305dd004bd0c22b330a3e1fa7ae31d8d456087e60218530e4792a952d4c11f23466ab3c2bb292de13296cbef920337b6c0f7d6d3899bbfec912368abc3cd540688745455b624d314be882454b15592cb66bed8b37b9c4083ab80541c552bbfe6a7bb6a62d239074a9f5b5336de08eb463b2e36a73d7b567be767276aa5d7893f9543bbf39c2a0eb880ac9d2c2b30f414295dfe7b63aef0f531140a28732b8e8e826185ddd0ae2a013c6dd663b88751a04dda0d38666a087568bb6a28002f2a4ca5eb020e5692b6c76ba46db8400a24627b0ac76a853303b1044466c99b109dda8d1b674b2af905f199374c4c4960b56f6965c7b8e6f2f7c6fee0e07be5d9411439ec851694e15f1d6a7c42211f49fbaf62aca382aa983725cdff60643dfb9b2cbd918d31584bbd93d4e470c89a088860c3654d2ec9247d834329dcc1cdf99b88331328a039f1e1082f47e3cbd12fcddb6e8b22cde64a40ad8bf497805495e001eca0fd2d01b7a556f548d36d9ef2bffce34f0bcc10daa4396c1ee8f185664b614fd2f3a05be58954e0fba06516a2f2e8e5626d9ffdce3af42f072955ae4fbdcf66e48b9e5d19866340d3f9e270417810fff230e1716b178655146485ce3f486428984192da7986d0af3cf6cabd5c1292ac0997c17b30cf3705c2a87ca48373495cf159517b6689b0ae5e20584411c3ed7712f30fa1b4857cc3c30050000",
    ],
    [
      "ETag",
      "uekaoAxr6GnaVJPkjBxSUA==",
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
      "Thu, 09 Sep 2021 18:13:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-68-1631211111899"
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
      "50",
      "d1",
      "4e",
      "c2",
      "40",
      "10fc97f5b54dac9a0a243c80294a8244aabc600839ae4b29b4ddf36eab21a4ffee5e213e7b0f77b37333b9993bc3b1a83318c0b6c8bf1ab4a79b1c79e1418aae29d9c961a876080120ab5c9414ebc7fd4a4f260f68cc7ca1539bc5afa3e150144eefb1523038c3aec0327330f83c43ad2a149baaa8a959447c327e9ece3f92e72415a2a2cc13f3e56c361acf1268833fd366638effb2acdb000eb44d7187166b8d3e83b17440cd535fcfa9ca94183a6aac46079db8bbc82d354659a2509830ee85517c1fdd457ef5fa7d1196a41517548b76f92ed980895599d28fb4834804b6835274d7eddf1ded3b5cd1ba5d5f4de313a37bb324091cfac76f2f419ec8876309cdb6c100b4927f7c29f832b7bf31b7f531a4010000",
    ],
    [
      "ETag",
      "o6c7hZcFF4eppNQcRrd6MA==",
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
      "Thu, 09 Sep 2021 18:13:15 GMT",
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
      "000002ffedd34b7282300000d0bb642d8e05d1d09de12388da20229f4d26a64169a885f051ecf4ee757a8dfaeef0be01658c370d69bf04bf80573050d518b3b15f41645d4fc91de2b5b60d558871ba76265d7b608b959b05366d12b8a2ef6d894e85c8b322dd876a540674b6cc03dc5789374d5ecc3c50304475b433a57238404b09f5a5855c7fae8535227b758184b8a37456aafa7c5a16d3e8fe0119ae31aebc21eacf986690d572d56d5c69edeb1dceb7be1debeded42620d063b8f79dd4430e7f34cca61f3a6664dcfcccc71cfba2f432f8fe3460837b48979c48a75546014d0f1d3d3ff054680dfaa42f286148fed9a6e1823f0579fb443c51fff11a7924bf0f30b1bd9530919040000",
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
      "Thu, 09 Sep 2021 18:13:15 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-69-1631211111899",
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
      "0002ff85536b6f9b3014fd2bc8fbb8e64113f292a2354ae98a94900e48ab6d9a903117ea1630c5265556e5bfef629aae55a5962f60df73ee39f7c113b9e7454c6624e2e9430dd5fecb9d88c809014553bcdd5bb1e5a55fafc6b77fe37c38f107bffacedde37c8e08deb024cdcb0c3a52d4150339dbfaddb41275492b213a98a8339a76ccd1c03c359b67329d224f4296ac78718fec5ba54a39ebf58edadd548834035a72d965227fb9efed4e7b6525ee8029d97b2bd94315d9fb58f45b2618555c14f3ad8f066a09550839e5195af8cf8ca3b3b7a9bb9ce6dd14c13bce803226ea4235b630051345c2d3bad259c9ec89689baf3e886fafec65603091d579111634871323a68a866a5f8271e16dd686e35e6cbcf52270366ee82f2fedf5a2bbdcacb66bd7376e2e6dcf36148d32d05c636e9ce9938b07d48f412a5e68f5a0b96e949f1be4bc1f4b434069096d301cf747d49cf4a751128d5932195851d287289a44638b0ea23e9b0e6118474091a745358b16a2000073604212b2c1c00c87233a0e27661c87fd8905ec74381e45438b1c4ec863c5159c73590ac9db0e911bcf09ec30f0b6ee7211d8ba8484d6993a6f8d3505bcf6a8b040047d50d3a18972814a4dbb1d37b0bdc53270aeed76c22b4829dbfb0f38e3846612104d2b6c9e826a2d626c1871176bfb1cc17a6257c7a024b3df4fa4e979e3e255cb5fe8010eb0b1abf49bf881e7b8dfb59d23e29a66b586ecda0f52a2e55bac0d5d1ffe201297b4cd427e6c6def2769af3c48a082827d3e4d04ebc0a7ffda71f1118bab8f3252e1197787c9468455d0ee10d7e51ed9536b38d27faaa2957a17b346e6b16b4d8e2623e450a8e78adac5c7425bb15abe803088e37775b70eff0096ffccd378040000",
    ],
    [
      "ETag",
      "y5d5Rg+P7hzdm48S3Z0Ijw==",
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
      "Thu, 09 Sep 2021 18:13:15 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-69-1631211111899"
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
      "61",
      "4f",
      "c2",
      "30",
      "10",
      "86",
      "ff",
      "cb",
      "f9754b4071c2123e0c9dba08883012a321a46cb731e8d6d9761a24fc77af13d1a889eec376777daebbf76db7b0ce8a185c5864e95385727394a2be33c11855c5b5a24f290a8560016a961279c37d360d46a17cc85ebdfb86b31e867c9376bb44a868893903770b49863c56e03e6ea16039525b24789517f33ab3406f4a539c84e3607845792e62930fa7fdbed7ebfbb0b30e8d31d36c5ef3ff689bed2c5889c51813945844686629a55861a4032353b1bce4682b51c90815d470bd904a51954c0a6153c5763a76d339691e37cdd3ee7408e422623a1305b1d309cd075a68c6c7e28554824380ac43129cd4ef672a67712dc484c130745af57c5f011a2dc938ceff0669de25a363f8c0f6167ce7582eaa421fa8cbfeadf7db76e4e9e756175ee8ff209426a70e48180cfc49e80d46869bedb5f7361ad5480a3252a1f1b0d968b54fcf9cc6bbade7c2584dff71b5acd08288d1edb8ce34b809e30a776f85cb12987b020000",
    ],
    [
      "ETag",
      "KlEaUIPTrZizAX06kNTlyg==",
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
      "Thu, 09 Sep 2021 18:13:16 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-70-1631211111899",
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
      "54",
      "6b",
      "6f",
      "9b",
      "30",
      "14",
      "fd",
      "2b",
      "c8",
      "fbd24a79f0c85b8aba2c651d5d4232421a75d3941830d40d608a4dabacca7fdf35346db36e5d8414ec7bcebde7be78445b9a0668803c1add1524df7db8651eaa21227004b75f17e6e5aa73f92b996d27643ed7f55598060fc32120a864719c6431a97356e43ee183e5a211e5acc870ce581d1cd5bb6a5deb189aaec95fafdf071e277138a1e916d83742647cd06c1e623722c6a298e08cf286cf92e7fbe6bddecc72764b7cc19bc7219b108537df0f7a16331f0bcad2e17201020a4ef23549308d41c20b33f03e1ebb6e509c342200df539f60df67452aa42c70e1b334a45191975ed1e01195325fbda0853931c7ae329e2d6df764831349de9c2a982b87434dd9404e218dc99a061b6959afb3adf2d9994dc1020a6e30277ca3acbe988ea9281b2e40dd46192a67cac83e578ed996ad2c6ddb5cb8cac9d9a972e1cc9673e5d3f511066407840b9a96a25decc5440a7eaaabf5b69b92800588a88cebaedac15a4fed7ba1d7f5c39ed1f64295785ecfebb6b1e1a97ebf455a814730f084f45eb270cad27edf6baba1ded5f41669ab4657d75baad1d6544fef768cc0ef6b5ea0855acb47fb1a7ac8a920e794678cd3aab868e558aeb9769da53d1eb9669946888b589c57e26412af750a481240efe4b59756ca2092ec9465bba6331abbd695590dc78444d8df2dee603c421c7302689ce38408924f59004543f3d9c272ad993d9a00a3ecf8fc80e068f0e3f185e0eeb2b2caa2fc47ae35851e8da6f352c3017485e3a244dd572f485775b5aeea75aded6afa4033065aaba1aaea77b4dfd7feed7ce438a36b1084f31cef",
      "feb041929d96a4ff256a892f4f95f8830a0dc968cf9a8e4e1db4ffb987a78660e1aa58e8dbd274ae5175e59090e424f5ff3f62002e0dfffd6e1c9618b0b0c6100616425018689fcb207e4eaac1a64929fe89ddef68ddf2ab23702eded80cd5387450fa901e494252f19451b5c465d9a4a9e0cf2030c23cda967d01d6df63b9397144050000",
    ],
    [
      "ETag",
      "KSEJW6JzmOkLePP22Wfndw==",
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
      "Thu, 09 Sep 2021 18:13:16 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-70-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d50d16a023110fc97edeb1d7815da2af8d096a30a22ed55e9431189713da377d96bb25144eedfbb39a5cfcd43323b992133b9c0c1d80d0c616dca9f80ee7c57227f4450a00f157b391ab21e210164558a92beecbc189b72d70f47a3c67d7d1ce4bdd368240aaf77582b185e606bb0da78187e5fc0aa1ac5a66a0a9645c4e726ce93d93c7fcb0b216ada4462b6984e9f5fa639b4c99f69b56a0effb22cdb04f6b42e708b0eadc698a171b447cd9358cfabbaa930f5149c460f9db8bb281d854639a25498f4b197660ffdec3e8beb69301061455ab1212bdac5a764032656554127690799085c07a5e8b6db8f1d1d3bdcd0b25dde4c2f6746ffee4812788c8ff7ae415e29866309cd2e60025ac93f8e0d5fe7f61794dcd3e6a4010000",
    ],
    [
      "ETag",
      "oWnTRHigh3uviaH3cv9E0w==",
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
      "Thu, 09 Sep 2021 18:13:16 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "59",
      "7282300000d0bbe45b9da99240fac7a22c5169ad0c949f0c4b58542010cbd6e9ddebf41af5dde17d8328499810f4de5c590d5ec114adf12a5911ae68c67009f87e39f8cd2daea14355cb9eb9fceeda31b28a4f6b43e7bcae13b4f33599bac3d93cf6a2c2393ce6a78848523f5d9460cc247598b648204f22051e61d16013ea5925e2ad3b1edaea167aa4ec039bac75d9840656063d0ff7f744d7553ab7e9c7ecddaebab043159fdb1da43e89e3c0fb1a70f432199528c67e7697cbc92b0f565fa1b6d9be65c70ed57e5e12e8380a6a47c653ff10c47e9b76068762f5f4f47f810560232f3b2668f9d8be81182fc05f7d7a9f387bfcd758d4b10efcfc021b4a4ed619040000",
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
      "Thu, 09 Sep 2021 18:13:16 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-71-1631211111899",
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
      "9b3014fd2bc8fb9a04f27e48d19aa5748d9490969046d33421db5ca85b822936a9aa2aff7d17d3f4b1492d5fc0bee7dc73ee8367722fb2884c0813c94309c5d3b73bc9488380a609deeef4e5c84f2f6e6607efc73573765b6d3fdecea65344888aa5e83e4fa1a96459705093eda69514b2cc69216513133587ed667bd06d77dad5331a8f91a7208d9722bb47f6add6b99ad8f649bb954899a44073a15a5cee5fefed43c7ce0b79075c2bfba3a48d2acafe5cf47b2a39d54266d3ed060d940a8a10f654a468e18d19b1b38fa95b82ee5b09820f8203e55c9699ae6c610a2eb358246561b292c9333136df7d908dbb74e781c5655aeeb330a37b685811d534d44f395817fe7a652dbc8bb5bf9a058bb5176ee697ee6ad69aaf97db95b7b17697aeef5a9ab2140cd79a5a67e6e4e101f523505a64463da8ae2be597062dfe1f4b4540690575301c3a03da1e396316b3218f47dd3e8b1d606cc4867dda650e1ff7a01731a0c833a286453399f587fd6830883a21ed4027ec390316b23e8d43e882c3c683b83f188fc8b1411e0ba1e15ca85c2a517788ecfc45e08681bff5e6b3c03525c4b44cf5796dac2ae0bd478d0522e8939a8e55544854aadabdf002d79fcd83c58d5b4f780909e54f9b079c714c530588a605364f43b19211368c78b3957b8e6033b1ab535091c9ef6752f5bc72f1aee5aff4000758d9d5e64d3681bff07e1a3b27c40d4d4b0339d41f2447cbb7581bba3efe41242e699d855c6f5dff17a9af7c88a1808c7f3d4d049bc097ffda69f1118bab8f324ae3197787ab4a841750ef9030e59ed8631c638f1870a1ff8d0d1d9c71e36de1ab8cb0874cbf54542f3e165a8b95ea1584411cbf67ba75fc0b6c6d884e78040000",
    ],
    [
      "ETag",
      "WtH8RlFVAvNBQb0WUt/whA==",
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
      "Thu, 09 Sep 2021 18:13:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-71-1631211111899"
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
      "02ff8d92514fc23010c7bfcbf9e8489cc2d4253e80a02e1928633c1942ca768361b79b6da712c277f73a158d9ae81eb6bbebefbafbffdb2d3ce4650a3e2cf2e5638d6a73b04433b64184ba9646f3a7a252233880462c996c7782fef050ac5fa614b9fda473e5ca1ac717174ce8648585007f0b598e32d5e0df6fa11405725b42b22eca7993396036952d4ee228185d735e506af3d1340cbbbd70003b67df980a23e60dff8fb6d9ce81352d22cc506199a09da552b4c6c40456a6164525b1a5a956096a68e06661a9a8ae84226a71a575eab65cefc43d76ed73767ecea0a444989c4a66a7139e0f0c1921237a6695e031a09a900567cdfb89cb79da08b161308abd7633df578047cb7289f3bf419e7725f8183eb0770bbe73a2a0ba347bea2abcedfeb61d7bfab955bf1b0f7e10dab0537b240e868349dc1dde596ef6aebdb731a8ef14b1911aad87ee51fbac73ea1dbdd97a49d66afe8f6f548d0e24826fc74d6ec0cf84d4b87b05f60344cf7b020000",
    ],
    [
      "ETag",
      "45IDM+ajxUoR1Dc5F1lueQ==",
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
      "Thu, 09 Sep 2021 18:13:17 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-72-1631211111899",
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
      "8554fd4fa34010fd57c8de2f9af40be8073469bc5ad16b52a952aa672e977659165ca52cb24b4d63fabfdfb0d86acf3b254d6076de9bf76677b62fe891a521eaa380c54f05cd37df1e78806a884a1cc36ae2e7e773716d5e7acff103cd7edadefa347c1e0c00c14a96c0ab2ca175c18b9c50d19fcf1a71ce8b0ce79cd7a150bd67d4f5aea91b7af958b60d3c419368c2d24760df4b99897eb3b9d36ec49cc709c519130dc257fbf5e6da6866397fa0448ae6a164135444f373d19384132c194f07f319182804cd177485590216de9861f0fdb07483e1552306f09a118a09e1452a4b5b5082f034627191abaaa8ff8294cd771f68e64c9c91af8da673d73f5ae255495e1e6b5868bba0a62da1a7882574c1c26599592cb247eddc9b5e42061cdc6341c552bbfde1788eb6a76903ed441bba67da217dec6a73d77566be767472ac5d78d3f995767a778001df211592a5cab58f8384968e5f3776fcf1384b0296e0a24a2e7aad2ed6ad961d44418f4496d909a2160d022be875b019b488dda6ed30a01878b2acae5838e569a76d63d334234bb73b5dcb6aeb6dbda547861519212636c1b6898d1e315a685b43cf3993f48c898c0b56ed2ebaf5c6beb3f0bdb93b1afa8e6a23c24522cf2a736513ef7d4a6812409ff4b52db38c8352795463d777bce1c81fdf38d5744c688cc966f604f311e1445040e31cafa8a4f9250f61d3d0d57436f6c753773801863af2ab1d42a0feaf973782bfc9d42e4bf546e793e9d0efb695831de4062785c2acab0fa4373a80d8d6fe5f66e879c33b90c6798e377fe5a09daea2ff4341e15554d9dc2ba2526d17190751176d7f6fe1574370b72a2d743d77bc3b542d7934a2394dc9d7c3046095f8f22f62775f010b3716648484184697885284e4b41a61b652e65fd976cf6ae9488173f921671bdddd599535ca8a744553f9da51755fd5b695a942ec419084c973c7ee0564ff00fcb99ead2f050000",
    ],
    [
      "ETag",
      "lTrFUsQ3MRwgjepX9RvBdw==",
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
      "Thu, 09 Sep 2021 18:13:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-72-1631211111899"
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
      "0000000002ff8d50c14ec24010fd97f1da26b4260a241c80542590aa154e8690653bad85b65376a71a24fcbbb3c5108fee6177e6bd3793f7f604fba24e6108db223fb4688e3739f2ab2b12b46dc9569e866a8be001b2ca45a9fbd3e5725ea68778fe907144bdefe7f8301e8d4461f507560a8627c80a2c530bc3f713d4aa42195315b5358b888f8deb67f1327a8c12012a4a1d10af168bf16411c1d9bb0e6d36cdfe5f23ebb3073bda2698a1c15aa3f3d018daa1e6998b6755d594e85b6a8d460b9db82372436da30c912f887f1ffac1dd6d1006eef407031196a41517548b76f526de80895599d097a4835004a62b2568d6dd9f1dec32b82ae8acfde5822b173a6efdbb707264b42f86c49d4567ac77313925679c25109b163dd04afef8a9e04b7ffe01112b4375c0010000",
    ],
    [
      "ETag",
      "c8CTTKldqNKFftEo0zONqA==",
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
      "Thu, 09 Sep 2021 18:13:18 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "59",
      "72",
      "82",
      "30",
      "18",
      "00",
      "e0",
      "bb",
      "e4",
      "591d40acda372275210246c1a52f9908bfb2285012363bbd7b9d5ea37e77f8be110f021082c93c850cbda38e6bd3413020c5049b4dc432e2a8cdced4bab78f8c2aa96a55a96e47391e5aaa16e3fe79fd181b235b98ca17738fae90b8cec70e9c8cb6defba60969b1bec8b66d48c4fd5bc565fd09c9c8764a50e61e848e2eef5eb5b91a9b8eaaa71072410f8d4ebb4cb91e777c27579e36bb10d696e238bf54d827494074bee5f2a129b9d54ffb8ccc53cf5f4cd425799ca33dce0c3a34679b0575bdc4d20ef76a6fdf12f71a86494c567c4983f1e0e5e5ff423d046d11972058fcdc3e1c4da73df4579fc9ae80e77f0cbc8412fdfc02548fcff319040000",
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
      "Thu, 09 Sep 2021 18:13:18 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-73-1631211111899",
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
      "5d",
      "6f9b3014fd2bc87b6d12d2841022456b96d22d5a423a425a4dd3848cb950b704536cba4555fefbae4dd3b5aad4f202f63de79e733f782477bc4cc984243cbf6fa0de7fba15093921a0688eb772b98c5cffef6535d87f091cbb527df87e339b4e11c1354bd25d5540478aa6662027db4d37af4553d15a880e26eab8834e7f34e89ff6f533f63ce44928b2252fef907da3542527bdde51bb9b0b9117402b2ebb4cec9eef7b0fa7bdaa16b7c094ecbd96eca18aecbd2ffab9108c2a2ecae97683061a09750c3bca0bb4f09f992667af537739dd7573043f70069431d1944adbc2144c9419cf9bda64259347626cbef8201b7fe9cf238b89a2d9957149777062a554d158ed2bb02ec2f5ca5a0417eb70358b16eb20deccbff9ab5977be5e6e57c1c6bafee687bea5685280e15a53ebcc9c023ca07e0a52f1d2a847fa5a2b3f3568f1762c9a80d212da60ecda23da1fdb5e92252ecbc60327c96c489271e23a7490d8cc1bc2304d8022cf881a162d45e9649026d9c889fba7198b87f6c88b137b3c8a53374dbd9133b25dc7218713f2a7e60aceb9ac84e46d87c875b888fc380ab7c17c16f9a6848c36853a6f8de9025e7a54582082dea9e9a0a35ca0926ef72288fc70368f16577e3be125e494ed37f738e38c1612104d6b6c9e827a25526c1809662bff1cc1666297c7a024935f8f44f75cbb78d1f2677a8403d4769579934d142e82afc6ce1171458bc6401eda0f52a1e51bac0d5d1f7e231297b4cd427e6cfdf02769af42c8a086927d3c4d049bc087ffda71f1118bab8f3252e1197787492dc26a6877889b728f6c6f3c74cd9faa68addec41c777cec9acea133c20e4af55451bbf858682bd6c867100671fc81e9d6e11fbf50b1a878040000",
    ],
    [
      "ETag",
      "sLLT7ExPp3yBN50pt1eKhA==",
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
      "Thu, 09 Sep 2021 18:13:18 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-73-1631211111899"
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
      "dd",
      "6e",
      "82",
      "40",
      "10",
      "85",
      "df",
      "65",
      "7a",
      "8b51ab454be285b65631f853c4abc6981506c4028bbb8bc618dfbdb3d4daa66dd2720133b3df2c73ceee095ee32c000bd671b42b501c6f2254cf3a7051168992f4c97926110c40c5222247d32dabc6bdf9b055dd2d9c4163bf6f1e4651a74384f4379832b04e10c6980412ac9713642c456af37952a4d9aacc0c50c75c17e79e6b4f0694a73cd0f964e138dd9ed387b3716d0c9862ab92ff47dbf26cc096af5d0c5160e6a39e25177c8bbeb2b54cc9d23cc18ae485f0514209970b91e045ce04e715aa545a8d4add6cd46febfa69dfdf1398709fa99867c42ee6341f28ae58e2f203a9049300518624382cdf7b2ac741294487f6c4339be57c5f011a2d8c135cfd0dd2bc1b46c7f0815d2cf8ceb1941799ba524fceb4fbdb76e4e9e7568f5dafff83908a9cba229e3deecfbdee78a6b9e5457befa850ce042723256a0febb566fbae65d6de6d7de0da6afa8fa5448106f88c6ec7305660852c91787e03e29a0dfa7b020000",
    ],
    [
      "ETag",
      "JOja/iBSH7/qULG3vv4wJg==",
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
      "Thu, 09 Sep 2021 18:13:21 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-74-1631211111899",
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
      "54",
      "7f",
      "4f",
      "db",
      "30",
      "10",
      "fd2a99f70f48fd91a66d9a54aa5829d916ada490a620364dade338c590c421764015ea77df39a140370651a5e47cefdd7b679ffb886e5916a1210ad9faaea4c5e6f30d0f51035189d7b05adeb8eef5836d7b77c7c737ec32fbf9231c67e7a311209862099ce6096d0a5e16848ae162de5a17bccc71c179130a3507bd66c7ec768c8e7a2cdb069ea0493c65d92db0afa5ccc5b0ddde69b7d69caf138a73265a84a7cfebed7ba39d17fc861229dafb926d5011edf7458f124eb0643c1b2de660a014b458d214b3042cbc30a3f0cb7ee916c3696b0de07b46282684979954b6a004e159ccd665515545c34754d97cf581e6ced49904da64b6f08283154e157975a861a1ed8286b6829e6296d0258b562ab35ce6b7da577f760a1970708d05152bedf2bbe33b9ab652a04f23ed481b7b27da3ed7f5b485e739f3403b383ad4bef9b3c599767cb58701d31115926595e500870955769f76d5fdf72c15014bb050279703ddc41d4bb7c3381c90d8eaf6c358a7616885833eee863ab17bb4178514034faaea150b673cd3e31ed5edc8c43ae9f7f1c0a6a665118b18b16162dbd6c36e64d2be1111b46da08782497ac244ce05abb7165dfa6ee02c037fe14dc68153b511e3329127b539d5c46b9f129a04d03b7d6d5596715052e7e47a81e38f27817be1d4a331a56b4c36f33b188e182782021a1738a59216a73c824d4367b3b91bb8336f3c054675de673b8440c35f8f2f84609357bb2cabb7d2327b95fe0e708193b242dcd71fa8d347db6de3ff25c6be3fbe02595c1478f376f937eb57f82aaa2d3eeb21a5b68b8cbdc844dbdf5bf835105caa5a0b9d2f1cff0ad54b3e8d694133f2f12001b84a7cf8dfb0bba8",
      "8085ab0a3242420c634b84122105adc797a595f99a6de81dab63a10a5cc8bf738665ebbb73523554459ad24c3e75545fd46adb54aa14cf2048c2d479aef70db27f004b5af18428050000",
    ],
    [
      "ETag",
      "ujIIhw99NqBBjiWnZKbAnQ==",
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
      "Thu, 09 Sep 2021 18:13:22 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-74-1631211111899"
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
      "000002ff8d90414fc2401085ffcb786da3050421e1400d41924aa45a136308d9b6432db49db23b4509e1bf3b5b8c270fee6177f6cd379bf7f604bbbc4a6104719eed1bd4c7ab0c79698b104d53b091a3a6ca203880ac3221d3eef031bd1ec45f41afbf8c5ef7037f3f7b9b8cc74298e4034b05a3136c722c5203a3f71354aa4419532535150bc4c7dadee78b97e96c1a8a50526a85451404133f98c2d9f91d5aafebddbf46566707b61487b8418d5582d643ad698b09cf6d3ca3caba40d750a31334d0c26d23d3d4d44a13b9a2b8839eebf5bb5ec7b3eb6e3814b0a044714e95b0d1b37803265645489f920e3a02e8b694a09b763f887cdb6638b480b5f677cfb3bdd5cf83fe91d13c69127706adb19b8bc97bb2c65902b16ed08144c91f3fe47cb99fbf016538edbcc0010000",
    ],
    [
      "ETag",
      "d39Md/7bxL46QUVq7BqGYA==",
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
      "Thu, 09 Sep 2021 18:13:23 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "dd",
      "56",
      "82",
      "30",
      "00",
      "00",
      "e0",
      "77d9b57a6c888cee5a0e3168a2187f379c0d06231368a0429dde3d4faf91df3b7cdf806599e8bab46f8ea2068f6064d09c6533a7457875ad5aab33727eb45ef6e1aef46113293bb0a0136a34de12ea4854cc374d7ccd38c5629bf3c5f54c07e38314c2312a22d9827ffac893cb65feec867215f1068d554082ceb787e59342a74bb183a6d9142e5bb46668d71b1eb7824f4fc53a085fa9b79678e85df1a01b1751c244c6a81be8e1c0a7326591c34f1971ed4312b00441a2d7250dd65a49e38df7ae123babab2d97b6aebd9dbf241e759cc386cc677777ff17980031b495125d5addb66bba694ec05ffdb41f5b71fb8f055342819f5ff73f36fb19040000",
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
      "Thu, 09 Sep 2021 18:13:23 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-75-1631211111899",
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
      "14fd2bc8fbda04f27e48d11aa574650a6403d26a9b26648ca16e00136cb24555fefbae4dd3b5aad44689827dcfb9e7dc078f68c7ca04cd51ccb27d43ebe3a7071ea30b4425cee0d6fceaba55818f7fdd9ff66eefecf62bdb73978b05209862095c5439ed08ded4848af936e866356f2a5c73de81449dc9a8d31b0f7afd9efa4c6733e0099aa76b56ee807d2f6525e6a679d6ee669c6739c515135dc28be77bf3d037ab9a3f502285f95ad2041561be2ffa39e7044bc6cbc53600038da075440bcc72b0f09f99c497af5377192eba19800f8c504c086f4aa96c410ac2cb94654dadb3a2f923d2365f3ca0c05edbabd0203c6f8a322a71412f8c044b1cc963458d6b7fe31a8e77bdf1dd65e86cbc2858ddd8eeb2bbdaacb7ae17187737b66f1b12c739d55c63615cea930707d04fa890acd4eaa1ba56ca4f0d72de8e4511405ad036184dac31ee4dad599cc613924e07a338b5681c4fe3c9080f628bcc867498c414034f8b6a162e79d91b4c0789351846493c1a45c3744aa278362411fc52ab3f1ba7f045a70bf4a766925e315171c1da0ea13bdf09ed28f4b7de6a19daba841437b9bc6a8da9025e7a94502080dea9e9a4a28c83926ab7e385b6bf5c85ceaddd4e784d334c8ec11e669ce25c5040e31a9a2769edf2041a86bca56b5f01584fecdb3928d0fcd723523d572e5eb4fc991ec200955da9ff5110fa8ef745db39236e71de68c8a17d401558be87dac0f5e937206149db2ce8fbd6f67fa0f6caa729ad69493e9e268075e0c377edbcf88085d5071921e10cbb43841221356d7788e9729fd87d6b30ee4f9006d7f24d6c32b1ce5d533954465ad0523e55d42e3e14da8a35e219044118bfa7bb75fa07668f0f0878040000",
    ],
    [
      "ETag",
      "/JMMpmayxMZEkqIkqCENMA==",
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
      "Thu, 09 Sep 2021 18:13:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-75-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92614fc2400c86ff4bfde8480465e2123e0c455d04443662d410726c1d4cb775dcdd3448f8eff626a25113dd87aded3dbdf57defd6f094e41138304be6cb12e56a6f8efac604235465aa157f0aca158205a8c59c495cfaaffb645ff55f57fbb7dd3b25eec3c6f8a6dd6642850bcc04386b88134c2305cec31a729121b7859496593ead320bf4aa30453f1879830bce338a4c3e18f77a6ea7d7858db56b8c8416d38aff47db6463c123cd4618a3c43c44334b21e91143ed19994a64458a3545a50c514105570b7349652124518d2bb5e366ad6e1fd61b75f3b44e4e184c29143aa19cd9b1cff381262dd211bdb04ab0199055c882e3eafdcce524aa8498d01b04f65135df5780478b9314a77f833cef42f0317c605b0bbe7322a332d73beabc77edfeb61d7bfab9d5991b747f104ab3533b24f0fa5d3f70fb43c34db6da3b2b8d6a28898d54683cac1f1cb59ac7f6c1bbada764ace6ff385a96684128f8765c261a9c58a40a376f2a356bbe7b020000",
    ],
    [
      "ETag",
      "eqSz+o6KMzy+WEYsaZc2UQ==",
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
      "Thu, 09 Sep 2021 18:13:24 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-76-1631211111899",
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
      "54",
      "fd4fdb3010fd5732ef1790fa913621fd902ad695c0aa959425290c4d53eb244e304de3103ba00af57fdfd92140c70651a5e47cefdd7b679ffb88d6348bd0100534b92b49b1fd7ccb02d44044e0045605f67f7a0fdcfc8eadc9ba67ded1d3b3f53a198d0041258be34d9e9226676511123e5c78ada460658e0bc69a50a8d9b39a1dcbe8743bf2e90f06c0e3248d67345b03fb46889c0fdbed5abb953096a404e794b742b6795e6fdf77db79c16e4928787b5fb20d2abcfdbee871ca422c28cb460b0f0c949c144bb2c134050b2fcc28f8b25fba45f1a69500f89e860487212b33216d41899065314dca425545c347a46cbefa409e3db327be36992f1cff60853792bc3ad430d7eaa0a1ada0a798a66449a395cc2c97f95a3b75e7e7900107379813bed2aebed9aeadbd2cadb44f23ed581b3b27da7e85a9a32d1cc7f67cede0f8503b73e78b0bedebf51e06ac47840b9a29e33e0e52224d3fededf4ed894a0216a05a25973dddc29dbe3e08e2a017c67de32888751204fda077848d400f072631a38060e009595db170c632cb308ca8171bdd4e6499716c0c3a06d675f348d7f540eff6a378106328d543bb067a28a8202794e78cd36a83d1953bf5eda5ef2e9cc9d8b7551b312e53715299934dbcf629a04900bdd3d74e66290325795a53c7b7ddf1c49f5edad580cc4882c3ad77072312e3941340e3026f8820c5398b60d3d0c5dc9bfad3b9339e01439dfa458de068f8ebf185e06f73b5cb42bd91e7bb53e74c19a81197382d15e4befa40e31cbca2ddaef1ff3263d71d5f83342e0abcfd2b07ed58a6a4ff4342e15554d9ac253b48aad551772fb2d0eef70e7e0d04d7abd2423f16b67b8daa2597c4a42059f8f1300158253efc97a8af2c60e1d2820c1710c3e8865c8a8405a946986e94f98addd54d031a57e042bcc9997dab3e2b594356241b9289a78eaa2babb64da6",
      "4afe0c82244c9ea38e6df7073f7eee0832050000",
    ],
    [
      "ETag",
      "taTXSws4Ka6Ck74qiFGkkg==",
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
      "Thu, 09 Sep 2021 18:13:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-76-1631211111899"
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
      "50",
      "4d4fc24010fd2fe3b58db61214120ed6102569885439194296ed504b3f66dd9daa48f8efce16433cba87dd99f7de4cdedb0354659bc3183665f1dea1dd5f14c80b5f64e8ba9a9d3c865a871000b22a447999b866a12be5e6b5597ce749110ff0ab984c44e1f41b360ac607d89658e70ec6af0768558332a61aea5a1611ef8def67f397e9c33413a0a1dc03f3659ade25e9148ec17968bd36d5bf4656c70076b4c9708b165b8dde83b1b443cd331fcfa9c6d4183aeaac4607bdb8270a4b9d5196281424bc1986d1f03a8a237f6e472311d6a41597d48a76f92cde8089559dd1a7a4835804b62f25e8b6bf3f041ef4197c15f5d6fe72f1998b3db7fa5d98ec19dd932571e7d01bbb3a99bc276f9c2510db0e03d04afef8b1e4537ffc010d36cce5c0010000",
    ],
    [
      "ETag",
      "/BsmQckasNlpQzdBg24exg==",
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
      "Thu, 09 Sep 2021 18:13:24 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "41",
      "72",
      "82",
      "30",
      "0000c0bfe46c1c2a22d01b298a91aa35224a2f4c888920881852103afd7b9d7ea3ee1ff61b50c6785dc7ea9af312bc828e8eec211bfa9585dc362b3735a3384e8ac57249b68b737c6b7c266d7cf52cd2697e6d31cc04f3a23c9ac906952b7a8db27c24f72f1f5aac36c20df726573b694dc3f12534e0b42f4a9b052e6cbb53a21a54547cf76642d85ec693528c16798b851304ebe09ea2d627d6acd87b6947d15c3baa3c3da7ba9ac34c78476cf647e3dc078766bb82c23a404f225293e5c425587a66e418a2b8c9b5deacfa70f219e45f0e3d25a473f0fbf0e9e9ff0203c0ef5526791d678fedba61db03f0573f565dc51fff11a7924bf0f30b8155f0e519040000",
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
      "Thu, 09 Sep 2021 18:13:24 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-77-1631211111899",
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
      "da",
      "30",
      "14",
      "fd",
      "2b",
      "91",
      "f7",
      "b540286f24b4229aae4810b6241475d314d9e626751be23476a850c57fdfb553ba5695da7c49ec7bce3de73ef24c1e44be2563c244fa584179f8762f193923a0698ab7c9f490dfeed993fe7de52fbad3db55029b7d3a9920421896a2bb2283869255c9418dd761332d6555d052ca06266a0c068d76bfd33e6f9b67381a214f41962c44fe80ec3bad0b356eb54edacd54ca34035a08d5e472f77adfda9fb78a52de03d7aaf55eb2852aaaf5b9e8f74c72aa85cc27eb100d540aca1876546468e13f73cb2edea76e0aba6ba608de0b0e947359e5dad8c2145ce68948abd26625e367626dbef920a1b7f06691c36556edf238a73b3873b654d3581f0a70ae82d5d299fb57ab60398de62b3f0e67d7de72da9cad16eba51f3a9b6b2ff01c4d590696eb4c9c0b7bf2f180fa5b505ae4563d32d746f9a541f38f63310494565007e381dba7eda13b62091bf064d8e9b1c405c6866cd0a31de6f25117ba5b06147956d4b2682ef3aecb99db6fd31812de8dbbdd368b471d4ee3de0073f4133064723c234fa5d07029542195a83b4436c13cf2e22858fbb369e4d912125a65fab236660a78eb51638108faa4a6a3890a894aa6dd733ff282e92c9adf78f5841790527e081f71c609cd14209a96d83c0de5526eb161c49f2ebd4b04db89fd3c051519ff7926a6e7c6c59b96bfd2231ca0b1abed9b845130f77f583b27c40dcd2a0bd9d71fa440cb77581bba3efe45242e699d85fc5a7bc12da9af0248a0849c7f3d4d04dbc097ffda69f1118bab8f324ae31977872b23c24ba87748d8725fd8e7",
      "6ecfedb8c4824bfd21d6ee0c4e5d33394c46d841ae5f2aaa171f0badc52af50ac2208edfb7dd3afe0326fb430d78040000",
    ],
    [
      "ETag",
      "fAynYvbwtZFNL4AYOfeWvg==",
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
      "Thu, 09 Sep 2021 18:13:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-77-1631211111899"
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
      "0000000002ff8d92db6e82401086df657a8b89d633891778684b82d6225e35c6ac3020bab07477b131c677ef2cb5b6699bb45cc0ccec37cbfcffee09f6691e810d9b347929511e6f12d44f26f051955c2bfa1422570816a06609915e71709cfebe198f5337d969de2e46fd69321810a1c22d660cec13c429f24881fd7c829c65486da1e06596afabcc027d2c4c7111f8eeec9ef24c44269f2d3dcf197a13385bd7c68869b6aef87fb4adce16ecc4c6c71825e6219a590a2976186ad7c8542c2b38d6942865880a2ab85a48a4280b2685a851a5d6edd61a9d66e3b6619e5ebf4f201721d3a9c8895d2e683ed04233ee8b5752091d02641592e0b87a1fa89c46951013bab3a0d3aae6fb0ad06871ca71fd3748f36e191dc30776b1e03bc73251e6fa4add798fce6fdb91a79f5b8d9d60f283509a9cba22813b9d2c02673a37dceaa27d78d4a8e65290910a8d878d7aabd7ee76eaefb68e84b19afe636b59a20521a3dbf1906ab063c6159edf00c07867837b020000",
    ],
    [
      "ETag",
      "LpvAA9k3fDiIgjtl5pC9Mg==",
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
      "Thu, 09 Sep 2021 18:13:29 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-78-1631211111899",
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
      "0000000002ff8554fd4fdb3010fd5732ef1790fa91947e24952a564ab6552b294b52109aa6d6719d6248e2103ba00af57fdfd92140d90651a5e47cefdd7b679ffb886e59b6464314b1cd5d498bede71b1ea106a2126f60d55c8cdd9052af8bbbd98f4b771205e949fc301a01822996c0699ed0a6e06541a8182e82d6a6e0658e0bce9b50a839b09b56ffc8ea58eab11d07788226f18c65b7c0be963217c376bbd66e6d38df2414e74cb4084f9fd7dbf79d765ef01b4aa468ef4bb64145b4df173d4e38c192f16cb408c0402968b1a4296609587861aea32ffba55b0ca7ad0d80ef19a198105e6652d98212846731db9485ae8a868f48db7cf5810277e64e4263325f78e1c10aa78abc3a34b030eaa061aca0a7982574c9d62b95592ef35be3ab3f3f830c38b8c6828a9571f9ddf55de36569657c1a19c7c6d83b35f62b4c3d63e1796e101a07c787c6377fbe38374eaef630607d4d856499361ee228a1caf4d3de4eff3e5145c01254abe47260f6b1659b4e14470312db47bd28366914d9d1a0878f2293385dda5d4714034faaea9a85339e9188588edde953ab1b0fec816d76a2a3788dfb16213d0accd8e99addb8e7a05d033d144cd25326722e58b5c1e8d29f86ee32f417de641cbaba8d1897893cadcca9265efb94d02480dee96ba7b28c83923aada917bafe78124e2fdc6a40667483c936b8831189712228a07181532a6971c6d7b069e87c1e4cc3e9dc1bcf80a14ffdbc460834fcf5f84208b7b9de65a9df2808fda9f74d1ba81117382935e4befa403807af68b76bfcbfccd8f7c757208d8b026fdfe4a09d7e57d1ff21a1f13aaa6cd69216526a75d4d98bfa68f77b07bf0682eb5569a19f0bd7bf42d5924f635ad08c7c3c4c00d6890fff25ea2b0b58b8b4202324c430ba44281152d06a8459aacd57ec8ee938830ed2e042bec95966cfb4ebb3523554459ad24c3e75545d59bd6d2a558a67102461f23c7d6cbb3fa84dd3d632050000",
    ],
    [
      "ETag",
      "0UAETeeN4a4nKWECbSmBfw==",
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
      "Thu, 09 Sep 2021 18:13:30 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-78-1631211111899"
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
      "90",
      "41",
      "6f",
      "c2",
      "30",
      "0c",
      "85",
      "ff",
      "8b",
      "77",
      "6da595690c90388c09315085b6324e08a1909aaed0c45992823ac47f9f5326b4e372489ce7cfd17b39c3a1d4390c605b165f35dae6ae40ff1e8a0c5d5d79c78721ed1022402f0a2667e9ec34ed4d9a427d1bd7efce32b590ba180e9970f2139580c119762556b983c1ea0c5a28e431a1a8d69e21df98709fce3fc69371c682a23c08f3659a3e8fd2315ca2dbd066630eff1a595f22d8d336c31d5ad412830763698fd24f433c2794a93076545b890e5ab86d14966a232c51cc4afcd48b93ee43d249c2eaf5fb0c5624852f4933bb5cb037f0e44595d189d3418701db961c74d7ee47961fdb0cc71608d6fef6bab75e127aebdf07478d47f76689dd390cc6eeaf265f2818f71cc8db1a239082fff8b5f4d7fbe507414c5dbac0010000",
    ],
    [
      "ETag",
      "JLJwI8Gygmzps96JRmScng==",
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
      "Thu, 09 Sep 2021 18:13:31 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "6d19142cd09d1294f2918f02633619060295164c080c814eef5ea7d7a8ef0eef1be4454138c7c3fd9374e00dccf9c6900ac9a5fa1e4e0d945f7ab5fa72d031c6b008bdc0cd1a18d9d348f5892b3964c625d752cac9c54c2c64ea096c5c23f598efb3b6edc6a46ef5f3a9b9aa360e99f82817339a29966125f360f02f8cdf9585aaef19ee1cebbc0f75ab2fe5318d5eaf54113beae49a1edbc27423dbf1262d3bb226aafaee346a9bf5d9cbe0c14555bdf5511ba268aa55649b2d11a9c67759e9c2835d283458576211759bceeb521531628bf4f4f47f81152082de7ac2f1edb15dd91ac60afcd5c7c34cc9e3ff9ee43de9c1cf2f4c38467b19040000",
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
      "Thu, 09 Sep 2021 18:13:31 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-79-1631211111899",
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
      "85536b6f9b3014fd2bc8fbda3c28490891a2354a698b16c80aa455354dc81843dd0266d874ebaafcf75d9ba66b55a94591c0bee7dc73ee234fe89ed5195aa09415bf3ada3e7eb9e3293a4254e2026ef1b73f7fefcfadebcbf322be5b4f48e03b377cb55c02822996c05553d281e05d4ba858eca261d1f2aec12de7034834b09d8139b3cc63533d73c7019ea065be61f53db06fa56cc462343a680f0bce8b92e2868921e1d5cbfde8e178d4b4fc8e1229466f2547a022461f8b7e2d39c192f17ab98bc04027689bd00ab3122cfc6766e9c9dbd44386ab6101e0074628268477b554b62005e175ce8aaed559d1e209699baf3e50e46edc756c105e76559dd4b8a2474686254ee463438db370eb1b5e70b60dfd55ec6d83245a5fb8fe6ab8de6e767e1019d7176ee81a12a725d55c63699ce8530007d0cfa890acd6eab1ba56cacf0df2de8f4511405ad03e98d8e31936e76327cd539be4736b9ae6639aa6f3d49e622b1d13674227594a31f0b4a866e19ad7d6d4c972db3e4eb20c9bc9c4c2e3c449c92c31ede97c36c66936c726da1fa1df2d93f49489860bd677085d875eec2671b80bd6abd8d525e4b82be5696f4c15f0daa3840201f4414d7b15651c9454bbbd2076c3d53af6aedc7ec21b5a60f218fd8219e7b81414d0b885e649dafa3c8386a160e5bba700d613fb7e080ab4f8f18454cf958b572d7fa1c730406557ea378ae2d00bceb59d03e20a979d863cf41fa801cbb7501bb8deff04242c699f055deedcf006f55721cd694b6bf2f93401ac039ffed70e8b0f58587d901112ceb03b442811d2d27e87982ef7990d3f6b3a411adcca77b1c96c76e89acaa132d28ad6f2b9a27ef1a1d05eac132f2008c2f803ddadfd3f1276d8bb78040000",
    ],
    [
      "ETag",
      "aKxzkG3WQGgTjC4cNM9YoA==",
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
      "Thu, 09 Sep 2021 18:13:31 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-79-1631211111899"
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
      "61",
      "4f",
      "c2",
      "301086ffcbf9758b0c71b0257c188ab00410c64834c690b2dd60b8adb3ed3484f0dfbd4e44a326ba0fdbddf5b9eedeb7ddc3535ac4e0c22a5d3f572876676b54331d0428ab4c49fa94bc900806a0626b228703a708ec61e72ef7e2c5ec7e76eee74de175bb44c868833903770f498a592cc17dd843c172a4b68867555e2cebcc00b52b75711e06fe644079ce639d4f16a391d71bf5e1609c1a63a6d8b2e6ffd1f6783060cb57012628b08850cf520abec548f95aa6647999a1297925229450c3f5c25af0aa648273932a66db312dfbc26a5afae9380e81198f984a7941ec624ef381e28a65017f2595601320ea900427f5fb85ca695c0bd1a13f09ed563ddf5780464bd20c977f8334ef86d1317c60470bbe732ce755a14ed4cde8d6fb6d3bf2f473ab6b2fecff20a422a74e48e88ffbf3d01b4f35f778d4dedb299453c1c94889da43abd1ea5cb6edc6bbad575c5b4dff7195a8d08088d1ed18a60adc8465120f6f7f93b01d7b020000",
    ],
    [
      "ETag",
      "HG9nR6H8XmAdUQYQ/Im2rA==",
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
      "Thu, 09 Sep 2021 18:13:36 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-80-1631211111899",
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
      "54",
      "7f",
      "6f",
      "da",
      "30",
      "10",
      "fd",
      "2a",
      "99f74f2bf12301920012ea18642d130d6d08edda6902c77152b7494c63a713aaf8ee3b27a52debd64648897defdd7b67dff188ee5816a23e0a587c5fd07cf3f99607a886a8c431ec9efdb83ef9ee3ab3f4fac22724699d7787f17c381800822996c0e93aa175c18b9c50d15fcc1b71ce8b35ce39af43a27a57af1b56db6819eae9f67ac0133489a62cbb03f68d946bd16f3677da8d98f338a178cd4483f0f479bff9d06aae737e4b8914cd7dc926a888e6fba247092758329e0d16733050089a2f698a5902165e9861f0653f7583e1b41103f881118a09e14526952d48417816b1b8c8cbaca8ff884a9baf3ed0dc993a235f1bcd16ae7fb0c2a922af0e352cb4dda2a6ada0a6882574c9c2958a2c97eb3bed9b373b850838b8c1828a957679e2788ea6ad422ce94afb34d08eb4a13bd6f6d913575bb8ae33f7b583a343edd89b2dceb4af577b18b01d522159569af671905065f8e95c276f6f5311b00413557069eb1636ba7a2f88029b44ddb619443a0d826e609bb81de8a4d7a19d30a0187852652f5938e3991146d80c70480c2b304cacdbb6deed99d4b2c2c8b622b36b9ba66d74f416dad6d0ef9c493a6662cd05ab0e175d7a13df59fadec21d0d7da72c23c24522c7953955c46b9f128a04d03b756d55947150523735717dc71b8efcc9855335c794c6986ce6f7d01e114e040534ce714a25cd4f7948d554cce6137f327387536094377eb64308d4fff9f842f037ebf29465f9466355c0f655c20b9c1425e0a1fa402dbda5d7f556dd30d1765bfb7fa6a1e70daf401de739defc15838aac8ea2ff43a7c497abcae94e",
      "d7404aedd9c5deca42db5f5bf8d5104c57a585ce178e7785aa2d8f4634a719f9b89f005c063efc93d84d2c6061664146485843f712a144484eab2e666969be62b70ccbd275548273f926669beddd75a91c2a234d69269f2aaa26b63c36152ac4330882d07ceec43d86e81f1323484d31050000",
    ],
    [
      "ETag",
      "PXZHJNEOmZVTccl2Q8AgSA==",
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
      "Thu, 09 Sep 2021 18:13:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-80-1631211111899"
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
      "90",
      "416fc2300c85ff8b776d25ca0403240e8018202136ba31314d0885d6ed0a6d9d252e1342fc779c32edb4c372489ce7cfd17b39c3212b63e8c12e4bbf2a34a7bb1479e98a106d95b395435369113c4056a9908f83f6d3f45deb877cb21eb5de16a375235d2dfb7d216cf4898582de19920cf3d842efe30ca52a50c6544155c902f149bbfb6cf13a9e8c43110a8a9db058cde783e17c0c17ef7768bbd5877f8d6c2e1eec6917628206cb089d076d688f11cf5c3cab0a9da36fa932115aa8e1ba911aaab43244be287ea7e107edfba019b8d5e97605cc29529c5129ecea45bc0113ab3ca46f49074d014c5d4ad0a4de8f22b7ea0cc71a70d6feee05aeb7f979707862b4cf86c49d4567ac71333922679c25109b0a3d8894fcf134e3dbfd7205ccb243acc0010000",
    ],
    [
      "ETag",
      "FA6OHYpp7lGXC5VNCX0gUQ==",
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
      "Thu, 09 Sep 2021 18:13:37 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "cb",
      "72",
      "82",
      "30",
      "00",
      "40",
      "d1",
      "7f",
      "c9",
      "5a1c1410e91263112b04b12876c38490c843c2232062a7ff5ea7bf51cff6aeef37c0845021a2ae2a28076f60c473634aa61ff5d284434acc1efb6899121cac6040965a275c9fe182ec6f9eeeedb7eb70c75a4ba9c6b4976b7fdc18c70695e2fd215d1369917f429331d5ae59d2597c9e47b1f2b81e062b51843a841c267ae9cbadae844d703bc6d6651f0fc87154ef3034e9098d90787604ed73775c9f7c69bb29f8c0ce5108f925cb91ba107196cc6468b34385f8b332abdecda5af6ee56a8e5148eab6ba6bad8bfb13cf51c95daadb338cc8f4e5e5ff021340ef75d6521165cfdb15cd3026e06ffda81b6bfafcdfa4b8a52df8f905cbd4c35619040000",
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
      "Thu, 09 Sep 2021 18:13:37 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-81-1631211111899",
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
      "000000000002ff85535d6f9b3014fd2bc87b6d1248a02191a2354ae91a29211b9056d33421db18ea96608a4daaa8ca7fdfb569ba56955a5ec0bee7dc73ee07cfe88157199a22c28bc79635876ff782a033c4142ee0f6516d1ee4fa4a149e3aec278e9f2da258cc67334070cd92785797ac2745db5026a7dbb85f34a2ad7123440f12f57ca7e79c8f9ca1a31f7f32019e6465bee2d503b0ef94aae574303869f70b218a92e19acb3e15bbd7fbc17e38a81b71cfa89283f79203509183cf45bf978262c54535dbc660a095ac49d90ef3122cfc6766e4e27dea3ec7bb7e01e03da70c532ada4a695b90828a2ae745db98ac68fa8c8ccd371f280e56c122b1a828db5d955678c7ceac0c2b9caa43cdacab68b3b696e1d5265acf93e5264ce3c575b09ef7179bd5761dc6d6ed75100596c2a464866bcdac0b730ae100fa19938a57463dd1d75af9a541cb8f63d1049096ac0ba663fb1c3bbe3d213919d3dc1f7924b719213e197b78446c3a71999b11868167440d0b57a2a236c1d8c6a3d4b51d2f759947d2c9d819a66e4e1dec8c3272eebbe878869e1aaed82597b590bceb10ba8d96499026d1365ccc93c09490e3b654979d315dc05b8f0a0a04d027351d75940b50d2ed5e864910cd17c9f226e826bc6205a687f811669ce3523240e3069aa758b31619340c85f37570096033b19fa7a044d33fcf48f75cbb78d3f2577a0203d4769579a3388996e10f63e784b8c1656b20fbee03d560f90e6a03d7c7bf808425edb2a05fdb20fa8dbaab88e5ac6115fd7a9a0036812fffb5d3e20316561f64a48233ec0e955a8436acdb216eca7d610f9db13bb6910137ea43ccf3bd53d7740e9d91ed58a55e2aea161f0aedc45af90a82208c3f34dd3afe038decf5a578040000",
    ],
    [
      "ETag",
      "qtOksMFog5tyv918dCRSoA==",
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
      "Thu, 09 Sep 2021 18:13:37 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-81-1631211111899"
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
      "02ff8d92614fc2301086ffcbf9754b98e284257cd8742209208e41348690b2dd60b0adb3ed2484f0dfbd4e44a326ba0fdbddf5b9eedeb7ddc3262d627060912e5f2a14bbb325aa071d0428ab4c49fa94bc900806a0624b22cbc5a3ef3e44ae3bdd4cbb41f19458b6e76d3b1d2264b4c29c81b38724c52c96e03cefa16039525bc4b32a2fe6756680da95ba380e83deb04b79ce639d0f27fdbeebf57d3818a7c6982936aff97fb4cd0e06acf922c004051611ea594ac1d718a99e9629595e66684a5e890825d470bdb014bc2a99e0dca48ad9b24ccbbeb0ce2dfdb4da6d02331e3195f282d8c998e603c515cb02be2595601320ea900427f5fb95ca695c0bd1616f18dacd7abeaf008d96a419ceff0669de15a363f8c08e167ce758ceab429da8dbfebdfbdb76e4e9e756376ee8ff20a422a74e48d81bf8e3d01d8c34373b6af7760ae548703252a2f6d06a345b975776e3ddd66baeada6ff384a546840c4e876dca50a9c8465120f6fd6bbbb2b7b020000",
    ],
    [
      "ETag",
      "pbXEAQcAAVkVGRnYf16BBw==",
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
      "Thu, 09 Sep 2021 18:13:41 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-82-1631211111899",
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
      "02ff85546b4fa34014fd2becec174ddaf228f495346e5554924a2ba51a77b3698761a8a3944166d018d3ffbe77c0aa5d77953481997bcebde7befa8cee5816a3018ad8eabea4c5d3f75b1ea106a212afe0d6b52e6f0e2ff5b9736aeb5dfbf6ece4b17b9b5f0c8780608a25f03a4f6953f0b220540ce6b3d6aae0658e0bce9be0a8d9b39a66a76d5aa67a7afd3ef0044d9331cbee807d23652e06babe8ddd5a71be4a29ce996811be7ebdd71f2c3d2ff82d2552e8bb21758822f4cf831ea49c60c978369ccf40402968b1a06bcc5290f0c68ca31fbbae5b0caf5b2b003f30423121bccca492052e08cf12b62a8bca2b1a3ca34ae6bb0f3473c7ee51a81d4de67eb8b7c46b455eee6b5868db43435b424e094be982c54b65592cf23bed24989c830514dc6041c552bb3a730357d3964282baa5f66da81d6823ff58dba57bbe36f77d77166a7b07fbda6930994fb5c3eb1d0ce88ea9902cab5487384aa952fc5258ef633b15014b50511b175da383cd9ed18f92a84b925edb89128346512fea3ab81d19a46f533b8e28069e54de2b16ce78165949d27792b8dfb58cb8ef10c37162db3449d4b3a26e62d8d48c68a74d1cb469a0c782497acc44ce05abab8bae022f74176130f78f46a15ba591e03295c7b53895c47b9d129204d027796d94957188a45ae5f9a11b8c8e42efd2ada7634c57983ccdee613e129c0a0a685ce03595b438e731140d4d27332ff426fe680c8caae5d32d42a0c1afe73742f894575596d51b85de39f468743ead346c4197382d2bd443fd812cc3329a068cb1139ad6c06c0f4cbb6518c64fb4d934feef7c1404a36b10848b023ffd6583243bb6a2ff236a85af4eb5f8ad0a13a968af9a764e1db4f9bd815f03c1c6d5b1d0c5dc0dae517d15d0841634235f8f18802bc3977f1cdb2d062cec3184818d900c069a08158414b41e6cb6aec4d76ccbb28cbe8d2a70213fd82cdbde7650f9501ee99a66f225a37a8babb22953295e41608479f43dff14ac7f003be8270945050000",
    ],
    [
      "ETag",
      "E2VhBV/U5G4/74jHFw7jpQ==",
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
      "Thu, 09 Sep 2021 18:13:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-82-1631211111899"
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
      "90",
      "41",
      "6b",
      "c2",
      "40",
      "10",
      "85",
      "ff",
      "cb",
      "f49a80d15a54f0a0415a21584d95528ac89a4cd26892d9ee4e2c22fef7cec6d2530fddc3eeec9b6f96f7f602c7a24e6104fb22ff6cd09cef72e4952b62b44dc9560e4db545f00059e542e27db8efafa3e75cf7aa55aff31a9a375c4ec663216cf2819582d105b202cbd4c2e8fd02b5aa50c654454dcd02f159bbfb7cb19e3dce62112a4a9db0d844d1641acde0eafd0eed76faf8af91edd58303ed63ccd0609da0f3a00d1d30e1b98b6755a54bf42d3526410b2ddc3672438d5686c817c51f74fde0a1177403b706c3a18025258a0baa85ddbc8837606255c6f425e9a02b80694b099ab5fb49e47e9be1d402cedadfbdc0f5b63f0f4ecf8c766948dc5974c63a37932139e32c81d834e841a2e48f9f0abeddafdfe0540645c0010000",
    ],
    [
      "ETag",
      "e4Cb5TLOgp3mQ30WCrYePA==",
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
      "Thu, 09 Sep 2021 18:13:42 GMT",
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
      "000000000002ffedd34b7282300000d0bb64ad8ee59392ee100a453ea2a815364c02a9016ca010f9d8e9ddebf41af5dde17d039c65b4eb5251579483173061092db285db682b73386b30da5bba9c265861099489d6fbcbb3e30c52c8ec404538afd6ae45bcd4a3ec56522338c607348ed790a1ea892584a2cba8b9bc6ca3833a9da2e32ef7113909a9e04ebc7d57cd6d8c7a31f7f7fd286b6f4a61203a8459bd663b4fdf182444f526e0b24420be424f0d3ba65f18bf4e67c1f381e9f531ad20c681312cebf9da36b9029dd20a7d1a6f83d3e797e0afcf0c2fe1c73e9baaa8321b61b781bd7878f8bfc00cd0b1295adaa5c57dbbac2234037ff5533135f4fe7f45714b5bf0f30b8118f32a19040000",
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
      "Thu, 09 Sep 2021 18:13:42 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-83-1631211111899",
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
      "2b91f795bed2575aa91a5d0923539b8e34054dd31439ce4d30a471889d3284fadf77ed500642827ea9ed7bce3de73ef244ee789190298979765f43f5f8e556c4e48480a219befae5fe07dca6dd6af4ede1c7b577a9fe065bfb72364304d72c4977650e2d29ea8a819c6e37edac1275492b215a98a8e5f45bbd51bf67f7f4cf994c9027214f97bcb843f68d52a59c763a47ed76264496032db96c33b17b79efeced4e59895b604a76de4a765045763e16fd9a0b461517c56cbb4103b5842a821de5395af8cf4ce2d3b7a9db9ceeda1982f79c01654cd485d2b630051345cab3ba3259c9f489189baf0e64e32edd45683191d7bb222ae80e4eac842a1aa9c712acf360bdb23cff7c1dace6a1b7f6a3cde2c25dcddb8bf572bbf237d6f5851bb896a2710e866bcdac5373f3f182fa0948c50ba31eea67adfcdc20effd583401a52534c168dc1dd19ed39dc4693c66a9d31fc66917e2d889c743da8fbb6c3280411203459e11352c5a60cda3eea83f604e14db891d0d60c8221a0ff03464a3d1789cf4689290c30979a8b882332e4b2179d321721d78a11b85c1d65fcc43d79490d23a57678d315dc06b8f0a0b44d007351d74940b54d2edf6fcd00de68bd0bb729b092f21a3ec71738f334e692e01d1b4c2e629a8562201bddaf3957b866033b19fc7a024d3df4f44f75cbb78d5f2177a8803d47695f9279b30f0fcefc6ce117145f3da40f6cd819468f9066b43d7873f88c4256db290cbad1bfc22cd5300295450b0cfa7896013f8f45b3b2e3e6271f551462abce3ee30a9455805cd0e7153ee33dbb66da73f26065ca977b1c97870ec9acea133c20e0af55c51",
      "b3f858682356cb17100671fcbee9d6e11fac3ecfcc78040000",
    ],
    [
      "ETag",
      "NpvJejf0r6BwJWIQtxRU2Q==",
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
      "Thu, 09 Sep 2021 18:13:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-83-1631211111899"
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
      "db4ec2401086df65bcb4242088d8840b1054c2412cf5ca10b26ea7a5da76ea1e2484f0eece5645a326da8b7666f69bedfcffee0e9ed222021f1ed2e4d9a2da1e25686e5d10a0b699d1fc29a9d0081ea011099363b228e74fc783c1f4c206cfebb1eca79ba4db6542cb35e602fc1dc429669106ff7e0785c891db2465362f5655e681d996aeb80883d1ec8af39c2297cfee26935e7f3284bd77688c8411ab8aff47db72efc1233d0418a3c242a29ba554f488d28c9c4c2df232c39a26ab246aa8e06a2151644ba1886a5ca9759ab546bbd93869b8a7737ece60465298940a66ef163c1f1832220b68c32aa1cd80aa42161c57ef172ea75125c485a359d86e55f37d0578b438cd70f537c8f3ae051fc307f66ec1774ee4640b73a02e2737bddfb6634f3fb71af4c2e10f421b76ea8084a3e97011f6a673c72ddfb5f7b706f55c111ba9d179d8a8b73aa767edfa9bad17e4ace6fff84659f4400abe1dd7a9013f1699c6fd2b0b03c4267b020000",
    ],
    [
      "ETag",
      "KouecPk+DDMCuRqhKcBiwg==",
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
      "Thu, 09 Sep 2021 18:13:43 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` != ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-84-1631211111899",
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
      "54",
      "fd",
      "4f",
      "db",
      "30",
      "10fd5732ef17d0fa957ea46925c4ba1258a492963485b1696a1dc72986340eb1c356a1feef3b3bb4d0b141542939df7bf7ded9e73ea23b9646a88f42b6bc2f68befe78cb43544154e225ac0e3f85f89e9a93e0771dcfdadf3adffd8b8e7371740408a65802afb28456052f7242457f36ad2d735e6438e7bc0a85aa76bb6a5a2db369aac7eef5802768128f587a07ec1b2933d1afd7b7dab525e7cb84e28c891ae1abdd7afda159cf727e4b8914f57dc93aa888fadba2c7092758329e1ecda660a010349fd315660958786646e1e7fdd2358657b525801f18a198105ea452d9821284a7315b16b9ae8afa8f48db7cf181a6cec81906c6703cf38283055e29f2e2d0c0c2d8061563013dc52ca173162d54663ecfee8c537f7c0e1970708305150be3eaabe33bc68e667c38328e8d817762ecf35dcf98799e330d8c83e343e3cc1fcf26c697eb3d0c188fa8902cd5b6031c2654597eda59f7f5792a029660a34ccebb0d0b9b76a317c66197c476ab13c60d1a8676d8ede056d820bd366d4721c5c093aaba66e194a7a6dd36bb8d4e2bc611c68da61575a3861d112b8aa216e9d190906e14133b469b0afa9533494f98c8b860e5f6a22bdf0d9c79e0cfbce12070741b312e1279529a534dbcf429a14900bdd1d746651907257556ae1738fe6018b8974e391e23bac4643dbd870189712228a0718e5754d2fc9c47b06968329eba813bf6062360e8339f6c1102f57f3c3e138275a67759ea373a1d8d0781d5d60eb6904b9c141af3507e20b3d601c4a6f2ff3203df1f5c8334ce73bcfe2b07ed589afe0f058dd7516973a78894da366aee4516dafcdcc0af82e072955ae862e6f8d7a85cf2694c739a92f78709c03af1ee7fc4f6c20216ae",
      "2cc80809318c2e114a84e4b41c61b6d2e64b76b3d9b2ec0ed2e05cbecad9a6bd3d2b554355a42b9acaa78eca0babb74da50ab103411226cf73bd33c8fe01a2912e8e30050000",
    ],
    [
      "ETag",
      "C+baqe1PTx/aU4X5ZRQ5EQ==",
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
      "Thu, 09 Sep 2021 18:13:43 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-84-1631211111899"
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
      "90",
      "41",
      "6fc2300c85ff8b77a4955686102071808d6d485537ca384d130ac1ed0a6d1d12970921fefb9c32edb4c372489ce7cfd17b39c3bea8b730824d911f1ab4a79b1c79e18b145d53b293c350ed10024056b9908f49ff61995167607427d19397799c4787c5782c84d39f5829189d212bb0dc3a18bd9fa15615ca98aaa8a959203e197f9f276fb3a7592a42455b2f24ab389e4ce3195c82dfa1f5daecff35f2710960479b1433b4586bf41e8ca51d6a9efb784e55a6c4d05163353a68e1b6915b6a8cb244a128e1a01746fdbba81bf935180e052c492b2ea81676b5146fc0c4aa4ce94bd2415700db9612346bf7a3c8bd36c3b105bcb5bf7b91ef7dfc3c383d31ba574be2cea137767b35794fde384b20b60d06a095fcf173c1d7fbe51b682193b4c0010000",
    ],
    [
      "ETag",
      "FN6DSfo+8pc+NcAOILg1qQ==",
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
      "Thu, 09 Sep 2021 18:13:44 GMT",
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
      "8b08000000000002ffedd34b7282300000d0bb646d1d4140e84e217c448aa0a0b0c94048d048257c1c44a777afd36bd47787f70419c6a4eb505f5fc8157c823113b5299eba5c5d1903bb6c8ac696d2b5eb94fc4bdadbfd5ad0c7cd4cdc56aa53765545f568798f7d776b86d0e434e1b6be39d5a4a9ae223b47b26fcc1b9c27050d87400ccca497f6eb87576ab6593ffa987ac24ecfd90def7ad30fad122fac66c4947cdc95588d3d782ba090736d4cd5ce8891a724ae0c833611a41685b03e68263c26cae23816940d5134b4be23abf393427d1ca2ce58a617641de0f211b19a7dcb65432db69f4ddfdefe2f3001e4cecf2de9d0f9b57d2e6bda04fcd547fdc8c9ebff8a642d69c1cf2fed5be28419040000",
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
      "Thu, 09 Sep 2021 18:13:44 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-85-1631211111899",
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
      "000002ff85536b6f9b3014fd2bc8fbb8e641200d8914ad514237a4847484b4daa609d9c650b704536c1a4555fefbae4dd3b5aad4f205ec7bce3de73e7842f7bc4cd104119e3f34ac3e7cb913049d21a6700eb757d1f9fe4098f3d5bb53fbf06af83bc89dc57e3a0504d72c897755c13a5234356572b2dd74f35a3415ae85e840a28e37ecd8e78e3db0f5e38dc7c093acc896bcbc07f6ad52959cf47a27ed6e2e445e305c71d9a562f772df7b1cf4aa5adc31aa64efad640f5464ef63d16f85a05871514eb71b30d04856276c87790116fe335372f1367597e35d3707f023a70c532a9a52695b90828a32e379539bac68f2848ccd571f68e32ffd796c515134bb3229f18e9d5929563851878a5997d17a6505e1e53a5acde2601d269bf90f7f35ebced7cbed2adc58373ffcc8b7142605335c6b6a5d98530807d04f9954bc34eab1bed6cacf0d0ade8f4513405ab236988cfae7d8f6fa63929111cd3c6748b23e23c423a32176489f8e5de6a68461e01951c3c2a528edd4f61ccf1924832c751397e07e42f0c84bc64074a93d1e9e8f87e87886f635576cc16525246f3b846ea220f69338da86f359ec9b1232dc146ad11ad305bcf6a8a040007d50d35147b90025ddee208cfd68368f836bbf9df092e5981e360f30e30c1792011ad7d03cc5ea9548a161289cadfc0580cdc4ae4e4189267f9e90eeb976f1aae52ff41806a8ed2af3469b380ac2efc6ce09718d8bc6401edb0f5481e55ba80d5c1fff021296b4cd827e6efde8176aaf2296b19a95f4f36902d8043efdd74e8b0f58587d90910aceb03b546a115ab37687b829f7993d18b8aeed2003aed5bbd8d0764f5dd3397446b663a57aaea85d7c28b4156be40b088230fed074ebf80f3fb2e56178040000",
    ],
    [
      "ETag",
      "PR6wybe3+8jtwNP5ZIg3Dw==",
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
      "Thu, 09 Sep 2021 18:13:44 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-85-1631211111899"
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
      "00000002ff8d92dd4ec2401085df65bc6da3c88fd8c48b828818402ce5ca10b26ca7506c3b7577ab21847777b6221a35d15eb433b3df6ce79cdd1d3c2579041e2c93d573896a7bb242f360830075991acd9f82728de0001ab162529d52ffa9debe93c1b8291b93a89bd7e9c1bfba6242cb356602bc1dc409a69106ef7107b9c890db24a565962faacc01b32d6c711a0683719ff38c229b8f67c3a1df19f660ef1c1b2361c4a2e2ffd136df3bb0a16580312acc25da590a451b946660656a911529ba9a4a25514305570b2b4565211491cb15b7dd746bad7aedbc669ff6e5258329496112ca999d4d793e3064441ad02bab841603aa0a59705cbd5fb89c4495101b0ec661ab51cdf715e0d1e224c5c5df20cfbb167c0c1fd8c182ef9cc8a8cccd91ba19defbbf6dc79e7e6e75ed87bd1f8436ecd4110907a3de34f44713cbcd0fda3b5b837aa2888dd4683dac9d35dacd8bd6d9bbad5db256f37f3ca34a74400abe1db789012f16a9c6fd1b9ea41a5b7b020000",
    ],
    [
      "ETag",
      "r/oGk38JcRN5c4PdCn3oQA==",
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
      "Thu, 09 Sep 2021 18:13:51 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-86-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ffc5547f4fdb3010fd2a96270448fdb17650954a881508a35a494b9a80aa09356e720d86242eb683a850bffbce0e815530f6e7a248f1f9dedd7bbe3be799def33ca63d3ae7c9430172f5e54ecc698d826609ee8adba9737e36bd1c47fb7701044f4fe329dbbf3c3c440437518a65cb14ea4a143202d50b268d448a62c9a410754c54ef76eaadceb756bb659eeec101c6294817439edf63f4add64bd56b362bee46224492025b72d58844f6badf7c6c379752dc41a4557393b2892caaf939e9512a22a6b9c80f83090a2814c819648ca728e12d329e7fdf4cdde02c6b24087ee411b0281245ae8d2c4c11897cc19342daacb4f74cadcc3f1674e20c9d139f9c8c02d7df09596682c35dc214a98c1a09f14c0b9ec28cc7a1f1cc66cb7b72e68d2ed0830a6e99021592eb73c77308198eae1d6f2744e82e190e7e3ae488f4dd53b29964e092c0759d894f768e76c90f6f148cc9f1740383ea6358b022d5a74c238336aae37239302dd5a034825eea3d78df65ba365e2e24d7e6a403d777bcfe893fb872cae20e2161d16af280e55db05401a299641968901722060c198f26037f3072fb438cb0151b5708457bbf9edf02fcd5128c406dbf86abb367f92bc0154b0b8b782c1774abb5bf45d7ebdadf93f43daf3f456226255b7d4cf02183c55bab145931b6a861abacf686d5a1eb9b35be358a835972d1cbc0f1a6b4dcf2600112f2c8127c52720bb68e7fdeaf6ad8118be38e344aa3ad348f9421892458b7cf332bbe8c6e7f6b753b5d6ac152bff71d7c35ff843cfed0f3c251d8fc20a5901e281c3063229bb25a788e35c17f468d66a0144b4c9a20c7932860f314881d03f25a75128684e7c4b48584fe74eccc6c6bf0d61cb3183dbab3476c917bc474bc5a6f1b63db28b23aca46fd270d3765590cc9e9c87570aa7e03362662cc6d050000",
    ],
    [
      "ETag",
      "ohYEHFYQPc5jUeUxxPYa5Q==",
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
      "Thu, 09 Sep 2021 18:13:51 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "adccc8afa43b32888881165174dc301183e007300991e8f4ee757a8dfaeef09e801405e53c17ed9936e01328a243add0169d83bcfb71d92f1437772b975c27d3a4bd8426956585d3be0b4ee3c4c6492e82c3e1db4d0dcb26d4b32f72cc398bd0961fdd64cfe7edee866a313e34b7a6c1e49c199d6bdf881a220757f13e3a7f65dec3fb80d67a1a392b8e4e66ee5f27fa6480fe7ed8a401ad84bb81f5629d0c3361e8335ac9b58f8b397b243d5ac69753e057acd6bb288cad94a91e99329231d6776199a958da5084b2dcdeab727b756a5bb638d7dedefe2f300274e86a46795ebfb61b168423f0573f17aaa3afff88124619f8f9056d36a8d219040000",
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
      "Thu, 09 Sep 2021 18:13:52 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-87-1631211111899",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda3c20e441a468cd52ba464ac806a4d53a4dc8980b714b30c5265355e5bfef629aae55a5962f60df73ee39f7c113b9e74542a624e6d9430dd5e3973b119333028a66785b67df4498a7f1ed80dfec6ecbd1e5ee10d8d96c8608deb024dd973974a4a82b0672ba0dba5925ea9256427430516732ee98a3816999cd33711ce449c8d3152fee91bd53aa94d35eefa4ddcd84c872a025975d26f62ff7bd83d52b2b71074cc9de5bc91eaac8dec7a25f73c1a8e2a2986d0334504ba822d8539ea385ffcc243e7f9bbacbe9be9b21f8c01950c6445da8c616a660a2487956573a2b993e116df3d50709dc95bb080d26f27a5f4405ddc39991504523f5588271e96fd6c6d2bbdcf8eb79b8dc7851b0b872d7f3ee62b3daaebdc0b8b9727dd75034ce41738d9971ae4f1e1e503f01a978a1d5c3e6ba517e6ed0f2fd581a024a4b6883d1b83fa2e6a4efc4693c66e964308cd33ec4f1241e0fe920ee33c7063b8981224f8b6a162d4491a4496cdbc36194306718d98e9546ced83623d301807402238b99e47846fe565cc10597a590bced10b9f197a11b85fed65bcc43579790d23a5717adb1a680d71e151688a00f6a3a36512e50a969f7d20b5d7fbe0897d76e3be11564943d060f38e394e612104d2b6c9e826a2d126c18f1e66bf702c17a623f4e4149a6bf9f48d3f3c6c5ab96bfd0431c606357e93709427fe97dd7764e886b9ad71a72683f48899677581bba3efe41242e699b85fcdcbafe2fd25ef990420505fb7c9a08d6814fffb5d3e22316571f65a4c233ee0e938d08aba0dd21aecb7d665b03cbb22da2c1957a171b0ced53d79a1c4d46d843a19e2b6a171f0b6dc56af902c2208edfd3dd3afe03025a1e5978040000",
    ],
    [
      "ETag",
      "ugBoTlfbZ3iWhZp6FhvS4g==",
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
      "Thu, 09 Sep 2021 18:13:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-87-1631211111899"
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
      "ff8d92614fc2400c86ff4bfd3a12101cb0840fa008248008233131841c5b3786db3aef6e9249f8eff626a25113dd87aded3dbdf57def0ef014a53e38b089c2e71c657111a2be37c11c551e6bc59f8c528560016a1132991445d39fdd0f9af4300c768dd7695decb37da7c384f2b69808700e104418fb0a9cc703a422416ef328ce93745d6616e82233c5853b1f4d079c27e49b7cba1c8fbbbd711f8ed6b9d1175aac4bfe1f6daba3053bdacc314089a98766964cd20e3d3d32329548b2182b8a72e9a182122e17424979262451852b9556b352b3ebb5cb9a795aed3683317942479432bb5cf07ca0498b784e7b56093603b20c597050be5fb81cf9a510138ea6aedd28e7fb0af0684114e3fa6f90e7dd0a3e860fec64c1774e2494a7fa4cdd8eefbabf6dc79e7e6e75d375fb3f08a5d9a933e28e26fd85db9dcc0cb73a69ef151ad54c121ba9d07858ab365a574dbbfa6eeb3519abf93f8e96395ae009be1dc34883138858e1f10d0cba19b67b020000",
    ],
    [
      "ETag",
      "myy7dPQG7oXHfj4zN3awpw==",
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
      "Thu, 09 Sep 2021 18:13:52 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-88-1631211111899",
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
      "54",
      "0d",
      "6f",
      "9b",
      "30",
      "10fd2bc853a556ca17f92010a9eab284756829c90869154d5362c050b704536c5a6555fefbcea6699b6e6b512438df7bf7ded9e73ca25b9a456880029adc95a4d87eba6101aa21227002abe36132c381158adfbd65aaa713dfc9afe387d3534050c9e27893a7a4ce595984840f16f34652b032c7056375285437cdba6e74f4b62e1fd3b280c7491a4f68760bec6b21723e6836f7da8d84b1242538a7bc11b2cdf37af3beddcc0b764342c19b87924d50e1cdf745cf521662415976ba988381929362453698a660e18519059f0f4b3728de341200dfd390e030646526a42d2811b22ca64959a8aa68f08894cd571f686e4fec91af8da60bd73f5ee38d24af4f34ccb57d50d3d6d0534c53b2a2d15a6656abfc56fbea4d2f20030eae31277cad5d7db33d5bd326d32bdb3b7e4e40ad89f3ddd6ceb4a13bd60e4b39aeb6705d7bee6bc76727dab9375dccb42fcb030cf410112e68a63af0719012e9fe69939dbf8f5612b000e12ab9eab70cac9b2d2b88837e189b9d5e10b748109841bf873b412bb4baa41b0504034fc8ea8a85339619a6a5f7fba6a9777bad48ef1a808e3b6da3d536fa563bee9961cf8af4a86ba15d0d3d14549031e539e3b4da6974e539bebdf2bd853b1afab66a23c6652ac69539d9c46b9f029a04d03b7ded6496325092c7e6b8beed0d47be736957933221090eb7f33b989518a79c001a17784304292e58049b8666d3b9e33b53773801863afed91ec1d1e0e7e30bc1dfe66a97857aa3b9ef39eeb932b0475ce2b45490fbea031de13c3f42bb5dedff65869e375c82342e0abc7d9383768caea4ff4342e15554d9dc4bea48aaeda3f64164a0ddaf1dfc6a08ee59a5857e2c6c6f89aa258fc4a42059f8f130",
      "0158253efcbbd8df5dc0c2ed05192e2086d10db914090b528d30dd28f315bbdd695b460b297021dee63a2d4bdf9f95ac212b920dc9c45347d5dd55db2653257f06411226cf55c7b6fb038a501bcd3b050000",
    ],
    [
      "ETag",
      "DAgPab9ctz5Yl1lLTIphfw==",
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
      "Thu, 09 Sep 2021 18:13:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-88-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d904f6bc24010c5bfcbf49a80d152a2e0a1b6628554dab4e2a188ac9b495c4d3271ff5854fcee9d8d457aec1e7667dffc66796fcfb05375060358ab62ef501fef0ab4efbe48d1b8d21a3e1aaa0d42006845c1e4e924d5ab48d4f67993efa37b379bc49d45311c3261e4062b018333e40acbccc0e0eb0cb5a890c74445aeb60cd963e3efd3d9e778324e59a828f3c26c9e248fa3640c97e036b45a35bb7f8d2c2f016c699d628e1a6b89de43a3698bd24e7d3c23aaa6c4d090d3120db470db2834b94668a29095308ec3e8a1177523bfe27e9fc192a4b08a6a66e71fec0d2c5951a6f4cde9a0cb806e4b0e9ab7fb81e55e9be1d002dedadf5ef7d68b7c6ff9fbe0e868d1bc69627706bdb1ced5e41379e3960359ed300029f88f5f94bdde2f3f1baf63e3c0010000",
    ],
    [
      "ETag",
      "zzciMaLijDhfq14uNG80Wg==",
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
      "Thu, 09 Sep 2021 18:13:53 GMT",
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
      "000000000002ffedd3597282300000d0bbe45b1d9445ec1fb2890bad09da901f86865001216c82e0f4ee757a8dfaeef01e20a494354dd0f28c15e00d0ce16235a3b35da9ae8d3ec94fb052ba6c9ba448caa93ff53b95bbc2be903b273531847a8e0ca2c7d5797e5097de9782046c1e23930470676ac4d93b97db687df6edd9d6377685515c0d6a2f66c7805f255c4b6e9e1aefc8c325c9b06611384eaf5c56362d12cf4bde6cfd1b8f2057e33239dce609b3ece3556e65d413575a86e1c7098ab6b5f74d9a0a3df9ce8bdca0877828168d2b6b6bafa696a8dd7573ccc6885da2456bec525cce5e5efe2f3001ec5e26356b82e4b95d9457ab09f8ab1fb443c99effd72cac590d7e7e019673f50219040000",
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
      "Thu, 09 Sep 2021 18:13:53 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-89-1631211111899",
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
      "02ff85535d6f9b3014fd2bc87b6d4212480291a2354a688b94900d48ab699a90710c750b986293aeaaf2df776d9aae55a59617b0ef39f79cfbc133ba67d51ecd50caf28796364fdfee788ace10953887db6c7aeda787f232372fadc7ca267f571759b898cf01c1144be0b22e684ff0b62154cc76513f6f785be386f31e24ea396e6f38b186a3a17a1cd7059ea045b666d53db06fa5acc5cc344fdafd9cf3bca0b866a24f78f97a6f1e4666ddf03b4aa430df4b9aa022cccf45bf179c60c97835df4560a015b4496889590116fe33f7e9f9fbd47d86cb7e0ee003231413c2db4a2a5b9082f02a6379dbe8ac68f68cb4cd371f28f2d6de3236082fdab24a2a5cd233638f254ee4534d8d8b70bb31fce0621b6e16b1bf0d926879e56d16fde576bddb04917173e5859e21715a50cd35e6c6b93e057000fd3d1592555a3d56d74af9a541fec7b12802480bda0593e9608287cec04db3744a32c71aa7d980a6a9934ec7d84a07c4b5a9bd4f29069e16d52c5cf18a0c0743274bd364e8384e625bce3e712d6c25537b604fec91eb5a99838e67e8b16192ae98a8b9605d87d04de8c75e1287bb60b9883d5d4286db42ae3a63aa80b71e251408a04f6a3aaa28e3a0a4daed07b1172e96b17fed75135ed31c93a7e801669ce1425040e3069a2769b3e17b68180a161b6f05603db11fa7a040b3dfcf48f55cb978d3f2577a0c035476a57ea3280efde052db3921ae71d16ac8a1fb403558be85dac0f5f10f206149bb2ce8e7ce0b7fa1ee2aa4196d6845be9e268075e0cb7fedb4f88085d5071921e10cbb438412210ded7688e9725fd823cb9a8c6da4c18dfc109b8e27a7aea91c2a232d69255f2aea161f0aedc45af10a82208c3fd0dd3afe03f2ba7e6978040000",
    ],
    [
      "ETag",
      "f7VIbvmGg/G3wn4cxDFfRA==",
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
      "Thu, 09 Sep 2021 18:13:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-89-1631211111899"
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
      "8d92dd4e83401085df65bc1492fe624bd20baa5549686d29bd324db3c040a9c0e2eea2699abebbb358ab5113e5026666bf59e69cdd033c65650c368459fa5ca3d85fa4a8163af051d6b992f4a97829110c40c55222bb55efd2ddf69330149d553175b3b8aafb8bd18808196db160601f20c9308f25d88f07285981d416f1bc2eca4d9319a0f6952e2e03df9ddd515ef058e7b395e739636f0247e3dc1833c5360dff8fb6f5d1801d0f7d4c506019a19ea5127c879172b54cc98a2a4753f25a4428a1819b8554f0ba628273932ae66068b6ad6ebbd3d6cf60382430e71153192f895d2d693e505cb1dce7afa4122c02441392e0a479bf50398b1b213a746781d56be6fb0ad0684996e3e66f90e6dd323a860fec64c1778e15bc2ed599baf51e9cdfb6234f3fb7ba7182c90f422a72ea8c04ee74b20c9ce95c73eb93f6f15ea19c0b4e464ad41eb65bbd41ffca6abddb7acdb5d5f41f5b891a0d8818dd8efb4c819db05ce2f10dbeec6b787b020000",
    ],
    [
      "ETag",
      "3p4+Ih5fbbr2UmMIidpu5Q==",
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
      "Thu, 09 Sep 2021 18:13:54 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%app%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-90-1631211111899",
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
      "54",
      "0d",
      "6f",
      "9b",
      "3010fd2bc853a556ca17e40b22551d4dd9c696928e9046d13425064ce296608a4daba8ca7fdfd9346db36e2d8a04e77befde3bfb9c47744bb3180d504857772529b69f6e58886a8808bc8255666fc7f3f6ddf96c6ddb619cb2f375f77bf7e1f4141054b238dee429a973561611e183e9a4b12a5899e382b13a14aa5badbade6beb862e1fd3b280c7499a8c68760becb510391f349b7bedc68ab1554a704e7923629be7f5e6bdd1cc0b764322c19b87924d50e1cdf745cf5216614159763a9d8081929362413698a660e18519879f0f4b3728de345600bea711c151c4ca4c485b50226259425765a1aaa2c12352365f7da08933728681361c4fbde078893792bc3cd130d7f6414d5b424f094dc982c64b99592cf25bed8b3fbe840c3858634ef8529b7d737c47d346e399e31f3f27a0d6c8fde168679aed5d6887a55c4f9b7a9e3309b4e3b313edab3f9e5e69e7f3030cf410132e68a63a08709812e9fe6993ddb7472b09588070955cf45b3dac9b2d2b4cc27e9498ed6e98b448189a61bf8bdb612bb23aa4138704034fc8ea8a853396f54c4beff74d53ef745bb1dee9013a691bbd96d1eb5b46d235a3ae15eb71c742bb1a7a28a8201794e78cd36aa7d1cc77036711f8536f68078e6a23c1652a2e2a73b289d73e053409a077fadac92c65a0248fcdf502c7b787817bed549332222b1c6d2777302b094e3901342ef08608525cb218360d5d8d276ee08e3d7b040c75fc577b0447835f8f2f84609bab5d16ea8d2681ef7a5f95813de21aa7a582dc571fe808e7f911daed6aff2f63fbbe3d07695c1478fb570edae97524fd1f120aafa2cae65e5247526d1f1907510fed7eefe0574370cf2a2df473eaf873542df9242105c9a28f8709c02af1e1dfc5feee02",
      "166e2fc87001318c6ec4a54854906a84e94699afd846bbd3d14da4c0857893eb1ac6feac640d59916c48269e3aaaeeaeda36992af933089230799e3ab6dd1f0a0dde7e3b050000",
    ],
    [
      "ETag",
      "oAyOY3qBWhAAbdloBh5J5w==",
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
      "Thu, 09 Sep 2021 18:13:54 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-90-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d904f6fc2300cc5bf8b775c2b51d0fe1489c398104342682bb01d268442305d691b77890b6388ef3ea74c68c7e59038cf3f47efe5087966d6d08555967ed6680f5729f28b2f127475c14e8e8a8c43080059a5427edff5dde8e62dd1afb3fc3affca86268ea7fb5e4f08a73fb054d03dc226c362eda0fb7e04a34a943155526d58203e54fe3e9acc06c3412242496b2f4ce6e3f1437f3c805370195a2eabfc5f238b53005b5a25b8418b46a3f75059daa2e6918fe7545915183aaaad46070ddc34524b75a52c51284a18b7c2e8b613b523bfeee358c082b4e28c8cb0f3a97803265645427b49076d016c534ad04db3ef44ee3419760de0adfdedb52fbdc8f716bf0ff60f8ceed992b873e88db5ce261fc91b6709c4b6c600b4923f7ecaf87c3ffd0086c2da5cc0010000",
    ],
    [
      "ETag",
      "z7BsI5WRcVTk+kxiGn99Sw==",
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
      "Thu, 09 Sep 2021 18:13:54 GMT",
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
      "000000000002ffedd3597282301800e0bbe4d93ab800491f836c4ac5d209555e18969f450a868045707af73abd46fdeef0dd519424d075617fa9a041af688c96649ecc771cd3cd50989ba1b5e58f96a724b303ddc596f7699bbea1e38e791b8394ba3be667ca2fcb3d4bb679cd04c16b375dd0fc04ac5967a196d5d5419287d394f655ec2ffa283d5481e728f4fc7d3c5fed42482c90af0eef636d3c282a18854898ce54bdb1e0985abc530456a53d3d2aef6a505a5f2fae5c4fc4225a34c5c1ae2003bd3a0ca6b102a7157659626fb798c215d6d7b8f0a79135c60dcc7aab697d2ebbeadbfce9e9ff423304375e0ae8c2f2b17d251332437ff5c37ee4f0f84f211220d0cf2f3487039f19040000",
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
      "Thu, 09 Sep 2021 18:13:54 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-91-1631211111899",
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
      "000000000002ff85536b4fa34014fd2b64f6ab6dc1b6149a346bb7a292b45429d57d644366a6038e520699a1c698fef7bd33585763a27c81997bce3de73e7846f7bcdca031223c7f6858fdf4ed4e10748498c239dcd6e7a113fd7cc87eec9219bbbaba7fbcf9fd58e4930920b86649bcad0ad691a2a92993e3f5aa9bd7a2a9702d440712757ca7e3b87de7d8d18fe7fbc093acc8e6bcbc07f6ad52951cf77a07ed6e2e445e305c71d9a562fb7adfdb1df7aa5adc31aa64efbd640f5464ef73d1ef85a05871514ed62b30d04856a76c8b790116fe3337e4e47dea2ec7db6e0ee01da70c532a9a52695b90828a32e379539bac68fc8c8ccd371f6815cc835962515134db322df1961d591bac70aa9e2a669dc5cb85154667cb78314dc26594ae6617c162da9d2de7eb45b4b26e2e8238b0142605335c6b629d98530407d0df30a97869d4137dad955f1a147e1c8b2680b4646d301dd92e763cdb271919d1cceb0f496633423c321ae23eb1a93f60830d61187846d4b07029cad170e8d8eed04d6d42703a70476eea79d4494703bfefdb99ebf984a0fd117aacb962a75c5642f2b643e8260e93204de275349b26812921c34da14e5b63ba80b71e151408a04f6adaeb2817a0a4db1d4649104f6749781db4139eb31cd3a7d503cc38c3856480c635344fb17a2136d030144d17c12980cdc42e0f4189c67f9e91eeb976f1a6e5aff40406a8ed2af346ab240ea37363e780b8c6456320bbf6035560f9166a03d7fbbf8084256db3a0ab7510ff42ed55cc3256b3927e3d4d009bc097ffda61f1010bab0f3252c11976874a2d426bd6ee1037e5beb08ffb437bd447065cab0f31c7f50e5dd3397446b665a57aa9a85d7c28b4156be42b088230fec8746bff0fd402d4ea78040000",
    ],
    [
      "ETag",
      "rGI1NXqfBvTCeQQkwWZwlg==",
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
      "Thu, 09 Sep 2021 18:13:55 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-91-1631211111899"
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
      "0002ff8d926f4fc23010c6bfcbf976240c1161092f4001a7fc1306be308494ee06c36d9d6d075908dfddeb44346aa27bb1dd5d7fd7ddf3b4077809131f1c5885ebd70c657eb146fd688209aa2cd28a3ea948148205a8d99ac8cacef7556ffe903f8ddc5117ebfc7e1ef07db34984e21b8c19380708428c7c05cef301121623b571116571b22c320b749e9ae2d49bb8c31ee5b1f04d3e9cf5fbad76bf0347ebdce833cd9605ff8fb6c5d182ad584d3040890947334b2ac516b9768d4cc5e234c2921299e4a8a0808b85b51459caa41025aa941a76c9ae5dda15db3cf54683c04870a64391103b9bd27ca08566d144ec4925d4089045488283e2bda372e817424ce80ebd5ab598ef2b40a3056184cbbf419a77c3e8183eb09305df39168b2cd167aadb1fb57edb8e3cfddceab6e5757e104a935367c473079da9d71a8c0db738696fe71ad5580a3252a1f1d02e57eb57d7b5f2bbad37c2584dff71b4ccd002cee876dc851a9c80450a8f6fcb898d927b020000",
    ],
    [
      "ETag",
      "2vddsGVKyWOIOFe8cJVfcw==",
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
      "Thu, 09 Sep 2021 18:13:58 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-92-1631211111899",
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
      "d5",
      "53",
      "61",
      "6f",
      "da",
      "30",
      "10fd2b96f7a595800c8a2a60aa3adaa65d3408908456a8aac0244eea368953db416215ff7d6707ca58b7eef310129cefbd7befcee757fcccf208f7f092252f2515eb4f4f7c896b982a92c0e9f564b6b42e04b5271dbbed5c97abc193fda37f760608a6599264454aeb929722a4b237f51b89e0654104e7752854efb6eacdd39366aba93f9d6e177892a6f180e5cfc07e54aa903dcbda693712ce93949282c946c8b3b7736bd5b20ac19f68a8a4752869818ab43e163d4f794814e3f9d9d40703a5a4624e33c252b0b06746cbaf87a51b8c648d04c02b16521286bccc95b60525429ec72c2985a98a7bafd8d8fce50ff6ed817d19a0cbd1d40d8e1624d3e4c5312212ed821a5a404f314be99c450b9d99cf8b6774ed8d869001078f4452b94077df6ccf466830bab3bda38554e0110a0d9cef363a477df70a1dd6715c34755ddb0fd0d1f931baf146d331ba981d60a08188c6a44cd5155120a2b4f1a8faebe85b55542a006d47eebcbf68bcd159c60553ba59c70d6caf7f1938b77635df014d48b8f65f60c231492505341124a38a8a218f2850c623df099c91db1f00c30c6dbc4348dcbb7fdd13827541b541657e71e00ca1b9fe708c379bdadf617dcfebcfa0341182ac7fcb81ddd3b6a6efd9b7242d0dc4e04d54d9585509dcc45a6d17b50ea253bc79d8c0b78661fb2a2d3c99dade0c57471e8da9a07968043e18aa019bc43f1fd16ea3010b3b0d32b0178a49c542a94542414d3a6099315fb15b27ddcfdd363660a1dee59aed8e7ef879f4c7cc56a334f5a9105c7854c20ae910d4a4f1c27298098b26e6111cb87cd91e65544a92e8f22e471951e123cb13245992436d4151cc058acb3cd4b46ae7cd11114999d15c217d85b287deb6",
      "a081fcb228b85034da570140f55cfcc073dc9be32fdbf06216d83e3c4285ee9bbd4eeb4137655aa9eefaff6de3a1ba1cede76ae4dab0db3f01793b3ea1d8050000",
    ],
    [
      "ETag",
      "FQYb/BreEQ8E4IFuvLjEzA==",
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
      "Thu, 09 Sep 2021 18:13:59 GMT",
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
      "00000002ffedd3576e83300000d0bbf83b4284edfe318a588d2010025f16c371d8cb84a2a8776fd46b34ef0eef09b2a2c0cb82e8d0e01e7c803de3205330eea868c646889d992c74c73c8feb6e0a04a8ac3713b2c64ca76e906de8749749f7baa9edb8d825d56932832fdd4febb0a516975c299152efaa8a8f528e6895af4ab4c1bb481a4a919d3d342a205ed55aad5732f392e8e7cdab7d2229cd808821493d57042537e53bb14f91aa0d4693b0e1fdb3b6d8b2977d36545b279db1b2cbf618a2b888b1cfb535ad742b0f967696d1b9f357371691e3863c3d0a857b0b8223f3f6f67f8103c0df6335e30555afedbc08e101fcd547741ff1ebbf86b319cfe0e717c2f2382619040000",
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
      "Thu, 09 Sep 2021 18:13:59 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-93-1631211111899",
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
      "fd2bc8fbda3c491a8814ad514ad74c09d978b49aa60919b850b780293699a22aff7dd7a6e95a556af902f63de79e731f3c910756a5644e62963fb6d01cbedcf3989c119034c7dbc338fc1e5a190d6b71bddb5ff9e5dd389d2e170b4430c512b4ac0be809de36098879e8f7f386b7356d38ef61a29e6df646e7e6683c528f65dbc81350641b563d20fb4eca5acc078393763fe73c2f80d64cf4135ebedc0ff6e341ddf07b48a418bc951ca08a187c2cfab5e009958c578bd04703ad80268292b2022dfc67a6f1c5dbd47d46cb7e8ee03d4b8026096f2ba96c618a845719cbdb466725f327a26dbefa20beb371568191f0a22daba8a2259c1929953492871a8c2b6fb735d6eed5cedb2e83f5ce8dfcd5b5b35df657bb4db8757de3f6daf11c43d2b800cd3516c6853eb97840fd14846495560fd4b5527e6ed0fafd581401a50574c168363ca7236b68c7593c4b32cb9cc6d910e2d88a67536ac6c3c49ec0248d81224f8b6a16ad783531add41c41164db3d48c26298c220b5951364a6d7b06c394d28c1ccfc8df8649b864a2e682751d22b7de3a70a2c00bddd532707409196d0b79d9195305bcf628b140047d50d35145194725d5eeb51b38de7215ac6f9c6ec21bc86972f01f71c6192d04209a36d83c09cd96a7d830e22eb7ce2582f5c47e9c8282cc7f3f11d573e5e255cb5fe8010e50d995fa4dfcc05bbbdfb49d13e28616ad86ecbb0f52a3e53bac0d5d1fff201297b4cb427e868ef78b74571e64d040957c3e4d04ebc0a7ffda69f1118bab8f3242e2197727114a2469a0db21a6cb7d668f4d7b321d120d6ee4bbd874727eea9acaa1324209957caea85b7c2cb4136bc50b0883387e5777ebf80ff8ef6223",
      "78040000",
    ],
    [
      "ETag",
      "y2UJU8faUpsHOvFSmh2d5A==",
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
      "Thu, 09 Sep 2021 18:13:59 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-93-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d92db4ec2401086df65bc2d9172a8d0848ba2204d00118a378690a59d42b1edd63da084f0eece5644a326da8b7666f69bedfcffee019e923c021756c9fa59a3d85fac51dd9b608a52a74ad2a7e0b944b000155b1319c936135af627ba78adcd9af5dde5c3c0f63a1d2264b8c18c817b8038c13492e03e1e206719525bc8539de5cb32b340ed0b539c05537f7c4b79c623938fe7c3a1d71df6e0689d1b23a6d8b2e4ffd1b6385ab0e5ab29c628300fd1cc5208bec550f946a66459916245722d429450c2e5c25a705d30c179852a9576bd623b75bb669ba7d56e1398f290a984e7c4ce67341f28ae583ae52fa4121c02441992e0b87cefa89c44a51013fae3c06994f37d0568b4384971f93748f36e181dc30776b2e03bc732ae7375a6fac33befb7edc8d3cfad6ebca0f783908a9c3a23813feacd026f3431dce2a4bdbb572827829391128d8776b5d16a5e39d5775bafb9b19afee32aa1d18290d1ed18240adc98a5128f6f097138a67b020000",
    ],
    [
      "ETag",
      "ds9arusFPupx2S53v/VH1A==",
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
      "Thu, 09 Sep 2021 18:14:02 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-94-1631211111899",
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
      "0000000002ffd553ef6fda3010fd572cef4b2bf163d0aa03a6aa8336eda2414293d00a5515b88993ba2471b09d4eace27fdfd98132d6adfb3c8404e77befde3bfbee052f581ee11e7e60c9b2a462f5e1893fe01aa68a24701af028fa381d7c5f8c7f745d26dda3cbf672707d7a0a08a6599264454aeb929722a4b237f11b89e0654104e7752854ef1ed75b2747ad764b7f3add2ef0244de321cb17c07e54aa90bd6673abdd48384f524a0a261b21cf5ecf9bcfed6621f8130d956cee4b36414536df173d4b794814e3f9e9c40703a5a4624633c252b0b063460f5ff64b3718c91a09809f59484918f23257da169408791eb3a414a62aeebd6063f3973fd8b786d67980cedd89131ccc49a6c9f3434424da063534879e6296d2198be63a339b150b74e9b923c880834722a99ca3dbaf96672134746f2def602e1578844243fb9b85ce50dfb940fb756c074d1cc7f20374707688ae3c77324683e91e061a88684cca545d1005224a1b8faabfb67e5545a502d0e6caedb70f8dd73acbb8604a376b3b81e5f5cf03fbc6aaee77481312aefc25dc704c5249014d04c9a8a262c4230a94b1ebdb81ed3afd2130cca58db708897b772f3b42b02aa836a8cc2f0eec1134d71f8df17a5dfb3bacef79fd2994264290d56f39b07b72ace93bf60d494b0331781355369eab046e61adb68dda7bd1095edfafe15bc3307d9516be9e58de1457471e8da9a0796804deb9540336897f2ed176a2010b330d3230178a49c542a94542414d3a6099315fb1dbc7ed4f2db3828a08f536d739d28b9f477fcc6c344a539f0ac18547258c900e414d1a2f2c873b61d1b559823d97cbcd5146a524892eef709411153eb23c41922539d41614c55ca0b8cc434dab66de1c11919419cd15d24f287be8750a1ac82f8b820b45a35d150054ebe2079eed5c1d7ede84836960f9b0840addb57a9df6bd6ecab452bdf5ffdbc67df538dacf85eb5830db3f01be05052cd8050000",
    ],
    [
      "ETag",
      "Todd0YBwkPz9OisO3F2qBQ==",
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
      "Thu, 09 Sep 2021 18:14:02 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00d0bb64ad0e2834a63b2216142804056b3719c5a080c53484afd3bbd7e935eabbc3bb834392b0aaa2f256b012bc82fe30459364e2f03936db3c565337ad8597c9f5b9f0341c527313e9692acd2cf48ea415ddb129316cb48d84b65af12de6767922e1a7a72c22c8d798c315ea6b985cadc2cd970e89a54f86ed70795fc4f12e801ff197425fa2dce117ee5a86327e6bfb757725f64a27384ff5261253c3da2f49e328fdd8c6aa1cce21520b15e9016c5070c4255f2e76caeaa4414945f13dbd7530b0679a43c786b92f734b8b584b62bf9e978daf4136797afabfc008b08e678255347b6c9fe9088dc05f7d2a7bce1eff313b0826c0cf2f11f18c5f19040000",
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
      "Thu, 09 Sep 2021 18:14:03 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-95-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85536b6f9b3014fd2bc8fbb8262421e425456b94d2356b4236425a4dd3848cb950b704536c327555fefbae4dd3b5aad4f205ec7bce3de73e782477bc48c884c43cbbafa17af8742b62724240d10c6f2fbff5d79d7da790579797491a84abbfddcff66c3a4504d72c4977650e2d29ea8a819c6c37edac1275492b215a98a835765bdd81d3ed75f5331a8f9127214f97bcb843f68d52a59cd8f651bb9d0991e5404b2edb4cec9eefed7dcf2e2b710b4c49fbb5a48d2ad27e5ff44b2e18555c14d3ed060dd412aa087694e768e13f33894f5fa76e73ba6b6708de7306943151174adbc2144c1429cfeaca64259347626cbef8201b6fe9cd438b89bcde1551417770622554d1483d94609d07eb95b5f0cfd7c16a162ed67eb4995f78ab597bbe5e6e57fec6babef002cf5234cec170ada9756a4e3e1e503f01a97861d4437dad959f1ab4783b164d4069094d301a7606b43bea8ce3341eb274e4b871da81381ec543973a71878dfbd04f62a0c833a286450b510cd9009c6ee244b13b1a467dc761513c1c8e2267e0025247eec0ed91c309f9537105675c9642f2a643e43a58845e14065b7f3e0b3d53424aeb5c9d35c674012f3d2a2c1041efd474d0512e5049b77be1875e309b878b2baf99f01232ca1e36f738e394e612104d2b6c9e826a25126c18f1672bef0cc16662df8f414926bf1e89eeb976f1a2e5cff41007a8ed2af3269b3058f85f8d9d23e28ae6b581ec9b0f52a2e51bac0d5d1f7e231297b4c9427e6cbde02769ae0248a182827d3c4d049bc087ffda71f1118bab8f3252e1197787492dc22a6876889b729fd8bdbed31df4890157ea4dac37708f5dd3397446d841a19e2a6a161f0b6dc46af90cc2208edf37dd3afc030160b17678040000",
    ],
    [
      "ETag",
      "KJ4O0v0nsVKKdfRTMz1+/A==",
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
      "Thu, 09 Sep 2021 18:14:03 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-95-1631211111899"
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
      "db",
      "4e",
      "c2",
      "40",
      "10",
      "86",
      "df65bc2d09c84168c20528220927a178630859da6969dd76eaee564308efee6c45346aa2bd686766bfd9ceffef1ee029ce0270611b47cf05aafd4584e6de060bd485349a3f39651ac1013422623229eade3648e43435797f789fcd1f289945dd2e13dadf612ac03d4018a30c34b88f07c8448adce6932cd26c53660e987d6e8b4b6f319a0e394f29b0f974351ef7fae3011c9d7363208cd894fc3fdad6470712da2e304485998f76965c5182be1959995aa4b9c48aa642f9a8a184cb854851910b4554e14aa5d3acd45af5da65cd3eed4e874149be303165ccae963c1f1832422ee89555428b0155862c382cdf2f5c8e8352880d4753afd528e7fb0af068612c71f337c8f3ee041fc30776b2e03b27522a3273a66ec7b3de6fdbb1a79f5bddf4bcc10f421b76ea8c78a3c960e9f52673cbad4fdafb7b837aae888dd4683dac551bede655abfa6eeb3559abf93fae51053ae00bbe1d77b101371452e3f10d1b9ba9cd7b020000",
    ],
    [
      "ETag",
      "ju3TbdjlNmtpBGQnPVojOg==",
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
      "Thu, 09 Sep 2021 18:14:03 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-96-1631211111899",
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
      "0002ffc5546d4fdb3010fe2b96270493fa42bb524625c45a085bb692746902ea26d498c40d86240eb6d3a942fdef3b3b04e860ece3a24af1f99ebbe7b997f41edfb23cc6037cc592bb928ad5bb1b7e851b982a92c0ed0f6b14ecdd3031738a659277475ff71dcfff75780808a6a324c98a9436252f4544e52098b612c1cb8208ce9b90a879d06f76fa1f3add8e7e3e1e1c409ca4e962ccf25b88be56aa908376bbe66e259c2729250593ad88678ff7ed65b75d087e432325db9b946d6091edb7498f521e11c5787e184c414029a998d38cb014243c45c6579f3653b718c95a0980972ca2248a78992b2d0b52443c5fb0a414262b1edc6323f3d9014fadb175eca3633770fc9d90643a387c8f8844b5d14021d4b460299db338d49ef9bcb845a79e7b061e50704d249521baf86279164263f7c2f29e651adbdf2c748486ce09da4c643b28701c6beaa39da3f7e8b3e70613349a6d60a082982e4899aa13a2804569e57175b4f55815950a400f3db75f4e1aafb59771c194aed6767ccb1b1efbf6b95535784c1312ada677d0e205492505341124a38a8a331e530899b853dbb75d67388608d3b5498d9078f0f3fe29c05f15540b54e68d4fc7eed0eff78c821a724ed2d26096d5016f755a7bbd2dbc5e37fe9e68e879c319901321c8ea0f1f14a4295ee530786355426bce0ed66cb5d5ddb0fa787db9865f03c382565cf87b6079335c5d79744105cd2343f046db0dd838fef99dd54b0f58587ba0910a6ca95824354924a871fb2c33e2abe86eafb7bbbb8f0d58a897be9ece4cf3f855cf034769f25321b8f0a88425d326b049a385e5d013f8ef68e08c4a49129d26c8a11249c9554a915905f4d875148688e5488f0585fe6c62cd1fe60fdfcf88c428e6a58e327d1ea06aecb5b55d99db5a989153cdebff4ab9ac9aa4b94e5cc7821dfb0d4624cdc983050000",
    ],
    [
      "ETag",
      "ZEBU5jirYNpvgn2BJ7NRTw==",
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
      "Thu, 09 Sep 2021 18:14:04 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bb",
      "64",
      "6d1c0ca2a63b30809f824045a01b864f0445630854814eef5ea7d7a8ef0eef1b2459469b266e6f1565e00df409c2e36cbce50b8d3cca9b237402379b6e9098da0730aff914ae18a4d54e4d09594687c8780f6d1b57874172fbc2930d2e54e2eb06974caf41ade01a14520e518b2aba7b449e2cd943586e976c4de4b5b54767ad583322d5b9bd2ff0448795725974d5c45de853338bf200b2b2bbde6d9a0ede8628ad5ea6174bc573cb62274ff357c7f9d94d8c14cd0e53fd2ecba88fbfdab4fb348a55e35cf947809dd9b99c1fcd90f98e1bb17afcf2f27f8111a01d3f09dac4a7e77659c17804feeac76dcfe9f3bf46134105f8f9059c939b2019040000",
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
      "Thu, 09 Sep 2021 18:14:04 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-97-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85535d6f9b3014fd2bc87b5c1342420a8914ad514a975409e90869b54d1332c650b780293699a22aff7dd7a6e952556a7901fb9e73cfb91f3ca3475626688c62963d35b4de7f79e0313a4354e20c6e77f3ebebfdd69a137ffdf5de097f5573ff864c27134030c512b8a872da11bca90915e3eda69bd5bca970cd79071275464ec73a1f587d4b3dee68043c41f374c9ca4760df4b5989b1691eb5bb19e7594e71c54497f0e2f5dedcf5cdaae60f944861be95344145981f8b7ecb39c192f172b2dd808146d03aa205663958f8cf4ce28bb7a9bb0c17dd0cc03b4628268437a554b62005e165cab2a6d659d1f819699b271f68e32dbd5968109e37451995b8a0674682258ee4bea2c655b05e190bff6a1daca6e162ed479bd9dc5b4dbbb3f572bbf237c6dddc0b3c43e238a79a6b4c8c0b7df2e100fa091592955a3d54d74af9a5418bf76351049016b40d464eef1c5b6e6f14a7b1435277308cd31e8d633776867810f7c8c8a67612530c3c2daa59b8e4a58df1c0eeb9a3c871fb69649f5b49e4daa4070949cfb6fb168487e87086fed64cd24b262a2e58db2174172c422f0a83ad3f9b869e2e21c54d2e2f5b63aa80538f120a04d007351d5494715052ed5ef8a1174c67e1e2d66b27bca41926fbcd13cc38c5b9a080c635344fd27ac5136818f2a72bef12c07a6237c7a040e3dfcf48f55cb93869f92b3d84012abb52bfd1260c16fe776de788b8c579a321bbf6035560f91e6a03d7873f8084256db3a01f5b2ff889daab80a6b4a625f97c9a00d6814fffb5e3e20316561f64848433ec0e114a84d4b4dd21a6cb7d61f76ddb76f49f2a712ddfc5868e7bec9acaa132d28296f2a5a276f1a1d056ac11af2008c2f87dddadc33f02d7191178040000",
    ],
    [
      "ETag",
      "vHJJyU1HcNO+h7TZpHNPcA==",
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
      "Thu, 09 Sep 2021 18:14:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-97-1631211111899"
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
      "dd4ec2401085df65bc6d13aac84f132e4051514084122f0c214b3b2dc5b65377b71220bcbbb315d1a889f6a29d99fd663be7eceee039ce02706111472f05cacd4984fac104635445a2157f72ca148205a845c4e4b2ea3c0e5782b6cbb088eae9ed7a7b570fa2568b09e52f3115e0ee208c310914b84f3bc8448adce65352a4d9bccc2cd09bdc1427deb837bce63ca5c0e4c369bfdfeef4bbb0b78e8d81d0625ef2ff689bed2d58d1628c214acc7c34b3e49256e8eb9e91a9449a27682b2aa48f0a4ab85c882415b990443657ec66dd766a67cea9639e46b3c96042bed03165cc4e273c1f68d22219d39a55428d0159862c382cdfaf5c8e835288097b43af562de7fb0af068619ce0fc6f90e75d0a3e860fec60c1774ea45464fa485df5efdbbf6dc79e7e6e75d9f6ba3f08a5d9a923e2f506dd89d71e8c0c373b68ef6c34aa91243652a1f1d0a9541be7f55ae5ddd60b3256f37f5c2d0bb4c0177c3b6e620d6e281285fb37c325f40a7b020000",
    ],
    [
      "ETag",
      "h41WNjaozhfug7mJwzK7dg==",
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
      "Thu, 09 Sep 2021 18:14:05 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`id`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "INT64" },
            parameterValue: { value: "%15%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-98-1631211111899",
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
      "c5547f4fdb3010fd2a96270448fda176a5a295102b34631125296902aa26d4b8891b5c92b8d84e5187fadd777608ac82b13f17458acff7eedef3dd39cff881e531eee3394b1e0b2a365f967c8e6b982a92c0ee2811c35f416b79b17cba1f5f4f9ec6eb7170999c9c0082e92849b2554aeb921722a2b21f4c1a89e0c58a08ceeb90a8de3baeb7ba5f5bed967e8e7b3d8893345d8c58fe00d1f74aad64bfd9acb81b09e7494ac98ac946c4b3d7fde6badd5c09bea49192cd5dca26b0c8e6e7a4a7298f88623c3f092620a09054cc6846580a12de22e3f9b7ddd40d46b24602e0358b2889225ee44acb821411cf172c2984c98afbcfd8c8fc638127d6c83af7d1b91b38fe4148321d1c1e22225165d45008675ab094ce581c6acf6cb67a40df3df70a3ca0e09e482a4374fbc3f22c8446eeade51d84003d448eeba3917d69a153347086683791eda0c071ac898f0e4e0fd185e706637436ddc1c00962ba2045aa8644018bd2cae37269ebb62a2a15805e6a6ebfef34de6a2fe382297d5adbf12d6f70eedb375659e0114d48b4993c428917249514d044908c2a2aae784c2164ec4e6cdf769dc108224cd5c61542e2fecfe7b7007fb3a25aa0325fcdd5ed18fe0a7043d2c220d6e502efb58ef6f0765bfb7b9281e70da6404c84209b8f093e6430786395222bc616d66c95d5deb1ba787bb785b78661384b2e7c1d58de14975b1e5d5041f3c8107c527203368e7fdeb16ae0010b230f3452812d158ba4268904356e9f65467c19ddee1cb58fdad880857aefeb75f47f218f3ff4bc7014263f15820b8f4a18306d029b345a580e3581ff460d67544a92e834410e279194cc538acc18a0d7aaa330442c47ba2d28f4a7636b665a0337e78cc4e051dd0e3245ee23ddf16abdaf8d7dadc8e8281bf59f34dc9565d12443d7b160aa7e03d88860f171050000",
    ],
    [
      "ETag",
      "LgrDzU1jGjwhPQSwPvPUKg==",
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
      "Thu, 09 Sep 2021 18:14:05 GMT",
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
      "0002ffedd35b7282301400d0bde4db3aa505c5fe9547202a048a56e487c1f4826820bc85e974ef75ba8d7af670be51c218b46ddc892b94e80d4dc9cb6acee69b4ad58c5bceb8ed93fc663667971416eb39710f8b05773d35a43b48770acdd4f0581cebe129ec34dbad3b1e79258ef268e38134e2dcb149da5e8d43a8d03431f7d3425c24ff620ca03954c165cf5d09c680a5c7da5916d9e9b4cdcaf7706bfaf2e845ad64d45fd573a09b0de122c6e2a3c7e9a45b81bad7ad03b8caa7dc47988d10314a85bcf6b39320815587d560ac6dae2f8593d68c0ce792f95068b24d059e3f3cfc5f688660acf206da38bf6f7f5556ab19faab1f775305f7ff1a240d34e8e7175faedd4419040000",
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
      "Thu, 09 Sep 2021 18:14:05 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-99-1631211111899",
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
      "85535d6f9b3014fd2bc87b6d1248808448d11aa5b4cd9690959056d33421630c750b986093a9aaf2df776d9aae55a58e17b0ef39f79cfbc1337a64558aa62861f9bea5cdd397079ea0334425cee1b6b5bdeffb2ad867df0e56eb6ecab4beaab29bd90c104cb1042eeb82f6046f1b42c574b7ede70d6f6bdc70de83443dcfeb59eec81a5aea99781ef0042db215ab1e817d2f652da683c149bb9f739e1714d74cf4092f5fef0787e1a06ef80325520cde4b0e40450c3e17fd5a708225e3d56cb70503ada04d4c4bcc0ab0f08f9926e7ef53f7192efb39800f8c504c086f2ba96c410ac2ab8ce56da3b3a2e933d236df7ca0adbff217914178d196555ce1929e19299638964f35352ec3cdda5806979b703d8f969b20de2eaefdf5bcbfd8ac76eb606bdc5dfba16f489c1454738d9971ae4f011c403fa542b24aab47ea5a29bf3468f9712c8a00d28276c1786cbad89a985e922563924d464e9299344926c9d8c1a3c4249e4ded34a118785a54b370c52b4c336a5bae1d7b99338c6d6a66f164928e6373ec3aaee99a23c71ba1e319fad330492f98a8b9605d87d05db88cfc380a77c1621ef9ba840cb785bce88ca902de7a945020803ea9e9a8a28c83926af73288fc70be8896b77e37e115cd3179daee61c6192e0405346ea07992366b9e42c350305ffb1700d613fb710a0a34fdf58c54cf958b372d7fa54730406557ea37da46e132b8d2764e885b5cb41a72e83e500d96efa136707dfc0d4858d22e0bbad9f9e14fd45d85d0dd8656e4ffd304b00efcf75f3b2d3e6061f541464838c3ee10a1444843bb1d62badc17f6d0765cc7421adcc80fb1b16b9ebaa672a88cb4a4957ca9a85b7c28b4136bc52b088230fe4077ebf817138e001178040000",
    ],
    [
      "ETag",
      "u49KqnNqfJv1u6OmdpGnfQ==",
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
      "Thu, 09 Sep 2021 18:14:05 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-99-1631211111899"
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
      "0002ff8d92614fc2301086ffcbf9d1119cc0644bf83014910410c730268690b2ddc6705b67db4108e1bf7b9d88464d741fb6bbeb73ddbd6fbb8797240fc1816512bf9628766731aa071d7828cb5449fa143c970806a06231918fd1b952f556dc7b6a8c3663af2e6656bfbeed748890c10a3306ce1ea204d35082f3bc879c65486d014fcb2c5f5499016a57e8e2d4f706e33ee5190f753e9e0d876e77d88383716a0c99628b8aff47dbfc60c09a2f3d8c50601ea09ea5107c8d811a68999265458a35c94b11a0840aae1662c1cb8209ce6b54a9d976cdb41ae6a5a99fb66d1398f280a984e7c4cea6341f28ae58eaf12da9048b0051852438aade1b2a276125448783b16f35abf9be02345a94a4b8f81ba479578c8ee1033b5af09d63192f7375a26e87f7ee6fdb91a79f5bddb87eef072115397542fcc1a837f5ddd14473f3a3f6ee4ea19c084e464ad41e9a17cd76ebcaba78b7f59a6babe93f8e12251a1030ba1d7789022762a9c4c31b9e2437af7b020000",
    ],
    [
      "ETag",
      "Vf+tt/5gEX3MvNR/rU6G/w==",
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
      "Thu, 09 Sep 2021 18:14:06 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-100-1631211111899",
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
      "54",
      "0d",
      "6f",
      "da",
      "30",
      "10",
      "fd2b91a74aadc45720091f52d5519a75d168a0211455d3047670a8db10a7b1c3c42afefbce4e69cbbaad1152727eefddbbb3cf3ca107962e510f11b67a2c68befd74cf09aa202af10a562f7e85336bdb1f59f1d834a7eef9966c30b93e3d0506532a81d75942ab82177944456f3aa9ad725e6438e7bc0a89aa66a351359d96d934d5d3e976412868120f59fa00f23b2933d1abd7f7e6b515e7ab84e28c895ac4d72febf54db39ee5fc9e4652d40f3deb6023ea1fb89e253cc292f1f4743a810a0a41f3395d6396400dafd225f97c98bbc6f0bab602f286451447112f52a9ea8214114f63b62a729d15f59e90aef3cd079ab84377101a83d1d40f8f1778adc48b13030b631f548c053415b384ced972a190f93c7b30be04a32b40a0823b2ca85818b3af6ee01ac670347383e3170072f9a3d0187adf5ce3cce8fb17c6613acf37a6beef4e42e3f8ecc4b80c46d3b1717e7bc0813e96544896ea2e424c12aa3a78de69effd012b0196605e82f376c3c166a7d12531694771a76593b84109e990b68d5ba411752d6a2d09c5a0932abb56e194a7d8b41c4a1c276e3aa4819dc802a5d5b2e3d8eed83669396dd371ba56db46bb0afa9933492f98c8b860e56ea359e085ee3c0ca6fea01fbaba8d181789bc288b534dbcad53429340fa4f5f3b85320e4eeae83c3f7483fe20f46edc725a867485a3ede411e625c689a0c0c6395e5349f32bbe844d43e3d1c40bbd91df1f82428fc078cf10a8f7fde955106e33bdcb52bfd1240c3cff5217b067dce0a4d0944df9818e788ed323b4db55fe9da71f04fd5bf0c6798eb77f60d08f6329f95f3c345f47659d7b4f1329b77dd43c881cb4fbb1835f05c16d2bbdd0f5d4",
      "0d6e51b914d098e6348d3e9e26206be0e37f8dfd0d0632dc61f011126218de48289728a7e510b3b5aebe54372dc76a769026e7f21d6677ccfd69a91c2a235dd3543eb754de60bd6f0a2ac40b0940983d5f1fdcee371885956443050000",
    ],
    [
      "ETag",
      "DzTW4yAO4fP11UEBybvabQ==",
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
      "Thu, 09 Sep 2021 18:14:06 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-100-1631211111899"
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
      "90",
      "d1",
      "6b",
      "c2",
      "30",
      "10",
      "c6",
      "ff97db6b0bb6db64157c98229b20b275933d0c91d89e5db4ed75c94529c5ff7d973a648fcb4372f9ee77e1fbd2c141d7398c60ab8b6f87a6bd29905f7d91a275255b391aaa2d4200c8aa10924b9d6afe18c63865a35ddc26f9bc3a8dc742d8ec0b2b05a30e761acbdcc2e8b3835a552863aa2257b340dc36fe3e5fbecf9e66a90815e55e58ae168bc7c96206e7e03ab4d934877f8daccf01ec699be20e0dd6197a0f8da13d663cf7f1acaa9a12434bce6468a187fb4661c835ca1085a284d1601046c3db288efc7a4812214bca146baa055ebd8939606255a6749278100b60fa5292eefafd28f27d1fe2d803dedbdfdeddb517f9defaf7c149cb685f0c893d8bded9e0e2724ade394b22360e03c8947cf2b3e6cbfdfc03724f843ec1010000",
    ],
    [
      "ETag",
      "tliRitW62eCtriu2y9dImw==",
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
      "Thu, 09 Sep 2021 18:14:06 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "0000d0bb642d0c422da44bc428050d1f416093c11828151009cac7e9ddebf41af5dde13d404a29e39c749733abc1071853198a54b41a4d37faaff6da5566cba39303c3374afbbe2892c00a87200aa81094bab5a3ae7f43a6e7f8f46eac4eae9d967966451041c687eaec48cb9e1d13a21e96354e32ffb38b1a75539a926ee3f090cfd7823ce1e310eff8d823cc11666b45fd9ecabb7dc008159c6d4c2db3e360ec937a33c1469e2b5e46ab029adbd356421e5c286c45dc5070c32e8d6f4412c8be5c85eff6e5ee1925de6bf988a65cae55df760621c9afe2cbcbff0566800d4dd1324e8ae7766501e10cfcd527ddd8b0e77f9da52d6bc1cf2f5969fea319040000",
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
      "Thu, 09 Sep 2021 18:14:07 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-101-1631211111899",
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
      "000002ff85536b6f9b3014fd2bc8fbda2490a47949d11a2564456a484b48ab699a903117ea1630c5265355e5bfefda345dab4a2b5fc0bee7dc73ee8317f2c8cb84cc48ccb3a706eae76f0f2226670414cdf076bd76ee36852aaac03b5f5d1fe2817d7f932fe6734470cd92b4a872e848d1d40ce46cbfeb66b5682a5a0bd1c1441dc7763ace68e0f41dfd4ca653244ac8d32b5e3e22fd5ea94ace7abd9378371322cb81565c769928deee7b877eafaac50330257b1f357b28237b5fa87ecf05a38a8b72bedfa18346421d4141798e1efe5193f8e263ee2ea7453743f08133a08c89a654da17a660a24c79d6d4262b99bd10e3f3dd07d9b957ee32b498c89ba28c4a5ac09995504523f55c81b50eb61bcbf3d7db60b308bdad1fed9697ee66d15d6eaff61b7f67dd5dba816b291ae760b8d6dcba30271f0fa89f8054bc34eaa1bed6caaf1df23e0f4613505a421b8cc6f6883a137b1aa7f198a593c1799cda10c793787c4e07b1cda64318263150e41951c3a2a5284749cc9c114d237b34a6d1d099da11b56118a5099d3849da079a52723c237f6aae60c56525246f3b44ee022f74a330d8fbcb45e89a1252dae46ad51ad305bcf7a8b04004fda7a6a38e72814abadd9e1fbac162197ab76e3be12bc8287bde3de18c539a4b4034adb1790aea8d48b061c45f6cdc1582cdc4ae4f414966bf5e88eeb976f1aee56ff41007a8ed2af326bb30f0fc1fc6ce09714bf3c6400eed07a9d0f23dd686ae8fbf11895bda6621377b37f849daab0052a8a1645f4f13c126f0f5df76da7c04e3eea38e5478c6e56152abb01ada25e2a6de57767f3876da7f55d15a7d8a0d06c353db740e9d110a28d56b49ede663a5ad5823df4018c4f9fba65dc7bf9eb12dde7b040000",
    ],
    [
      "ETag",
      "FF1WMmtmpRI5DPvb30hQlA==",
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
      "Thu, 09 Sep 2021 18:14:07 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-101-1631211111899"
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
      "6f",
      "4f",
      "c2",
      "30",
      "10c6bfcbf976249b02c2125e0c4524e1ef18898921a46cb731dcd6d9761042f8ee5e2ba25113dd8bedeefabbee9ea73dc24b5a44e0c23a4d5e2b1487ab04d54c073eca2a53923e252f248205a85842e4deeeb71bad27c1f68b497fb74bd220f071d6e91021c30de60cdc23c429669104f7f90805cb91da429e5579b1329905ea50eae23cf007e33ee5398f743e5e0c875e77d8839375698c98622bc3ffa36d79b260cbd73ec628b00851cf520abec5500db44cc9f232c39ae49508518281cd4222785532c1798d2a35c7766a4ef3c6b976f4d36ab789cc78c854ca0b8217731a1014572cf3f99e644293006142521c9bf78eca696494e870300e9a7533e05780668bd30c577f8334f086d1397c60670fbe732ce755a12ed4c370e2fdb61d99fab9d5bd17f47e105291551724188c7af3c01b4d35b73c6bef1e14caa9e0e4a4446da263d75b8ddba6fdeeeb1dd75ed37f5c252ab42064743d1e53056ecc3289a7374e726c497c020000",
    ],
    [
      "ETag",
      "w0G958XrawUOGvvgiTTReQ==",
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
      "Thu, 09 Sep 2021 18:14:07 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`purchase`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "%oran%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-102-1631211111899",
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
      "000002ff85540d6f9b3010fd2bc853a556ca17f9802452d565096bd952d20169144d536288a16e01536c5a4555fefbcea6699beea328129cdf7bf7eeec739ed01dcd366888021adf97a4d87eba6501aa2122700cab136c269dc8bbf0cbc5e3729e7a5ef35b7efb787a0a0c2a551ca77942ea9c954548f870ee35e28295392e18ab43a2bade6ad775a3a3b775f9f4070310729244539add81fc46889c0f9bcdbd7923662c4e08ce296f842c7d596f3eb49b79c16e492878f3d0b30936bcf981eb59c2422c28cb4ee71e54507252ac488a690235bc4a37c1e7c3dc0d8ad3460ce4071a121c86accc84ac0b52842c8b685c162a2b1a3e2155e79b0fe459536bec6be3d9dcf18fd73895e2f58986b9b60f6ada1a9a8a68425674b396c86a95df695fddd9252050c10de684afb5c585e55a9a369d2d2cf7f805805cceccd7a6f6774b3bd346ce443b4c673bdadc712ccfd78ecf4eb4737736bfd2be2c0f38d0c786704133d5858f8384c80e9e77dafef380a5000b30afc095d932b0de6f0d822830c3a8dfe905518b04413f307bb813b4c24197743701c1a01332bb52e18c6558ef1a24308ca86d042d6c845d50763bbd28eaf57bbda06398ba610cba660fed6ae8b1a0824c28cf19a7d56ea3856bfbd6ca77e7ce78e45baa8d0897899854c5c926ded629a04920fda7af9d442903277974b6e35bee68ecdbd756352d5312e370ebddc3bc4438e104d8b8c02911a4b8641bd8347435f36cdf9e39a32928d4085ced191c0d7f3ebd0afc6dae7659a837f27cd776ce55017bc6354e4a4579a83ed0112b70768476bbdabff38c5c77b4046f5c1478fb0e837e8cae94ffc543f15554d5b9f7d49174db47ed83c840bb5f3bf8d510dcb6ca0bfd985bee12554b2e894841b2f0e36902b2023efed7d8df6020c31d061f2e2086e10db974090b520d314d55f595badd3507fd1e52e442bcc7fa2dd3dc9f96cc2133929464e2b9a5ea06ab7d9350c95f4800c2ec39eae076bf01ffed42ba43050000",
    ],
    [
      "ETag",
      "Da7l3fSHTuWwYUmSS/Jpjw==",
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
      "Thu, 09 Sep 2021 18:14:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-102-1631211111899"
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
      "90",
      "d1",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "ff",
      "97",
      "f3754b188a01121e9c2108214426248a31a48c630eb65d69af1824fcef5e87213eda87f6faddef9aefeb097679b5862eacf26cefd01c6f32e4a92f12b4ae602b87a6ca220480ac3221bf5f676ffbc360c1c5a21debd1c8b662574e7b3d216cfa89a582ee093639166b0bddf71354aa44195325b98a05e2a3f6f7e164d61ff413114a5a7b61321f8f1fe2711fcec17568b9d4bb7f8d7c9c03d8d22ac10d1aac52f41eb4a12da63cf4f1ac2a7581a1256752b450c3752333e4b43244a12861d46886d1fd6dd48cfc6a773a4216942acea91278fe22e680895591d097c483a600a62e25e9a6de0f22b7ea10871af0defef6eeaebdc8f73e7e1f8c8f8cf6d990d8b3e89d352e2e1fc93b6749c4c66100a9924f7ecaf9723fff00dd0b93d6c1010000",
    ],
    [
      "ETag",
      "zXTYqvGZtlZ8BpJJs5BumQ==",
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
      "Thu, 09 Sep 2021 18:14:08 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "41",
      "72",
      "82",
      "30",
      "14",
      "00",
      "d0",
      "bb",
      "642d0e06a5a43b110b14233840b12b06f1db88888180413abd7b995ea3be3bbc6f94e5390891b6b70b54e8153d324ca6f9d4e3866949f6ced6b02f20a2fd2cf69689521b9febb49343efe2da0f0dba0f950144aabc7436e729a3cbb895ab53a2b19d5e6dcff8c436bee3c452efbaaf7546344f2fe54700585637059bd40c16a2322392ab816c2f2e4dd5429f192e5c13631b32a1bfb90c0a429b4b6945b54332eb6e2bc2efe3a8c38c370775be0aa9efdc0fc72d73ca938e253873b991337fb872bb60de2181ba7473511ebd5ac4048638983e3dfd5f6882a0e7e7663c7b1eb76b0b4226e8af7eda3e388cff4dc81a68d0cf2f0e7e065e19040000",
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
      "Thu, 09 Sep 2021 18:14:08 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-103-1631211111899",
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
      "0000000002ff85536b6f9b3014fd2bc8fbb82621ef8714ad514257a484ac84a4aaa609d9e642dd02a6d8b4aaaafcf75d4cd3b5aab4f205ec7bce3de73e7821f7228fc88c30913c54503e7fbb938c9c11d034c1dbd5a4bb1d1d607c3375be1fc422bb727b425ccde78810354bd1ac48a1a564557250b3fdae9d94b22a6829650b13b5ba76bfd51df5bbbd6efd4ca653242a48e3b5c8ef917eab75a1669dce49bc9d4899a4400ba1da5c666ff79dc75ea728e51d70ad3a1f353b28a33a5fa8fe4825a75ac87cbedfa1834a41194246458a1efe512376fe31775bd0ac9d20f85170a09ccb2ad7b52f4cc1651e8ba42a4d56327b21c6e7bb0fb273d6ce32b0b84cab2c0f739ac19915514d43fd5c8075e16f3796eb5d6cfdcd2270b75eb85b5e3a9b457bb95def37decebabe747cc7d294a560b8d6dc3a37270f0fa81f81d22237ea417d5d2bbf76c8fd3c989a80d20a9a6038b647b43bb1a72c66631e4ffa4316dbc0d8848d87b4cf6c3e1dc02062409167440d8be632b77b71af1f457648390cc341cc862103360d27a351c439a3d3fec826c733f2540a0d2ba10aa944d32172edbb811306fede5b2e02c79410d32ad5abc6585dc07b8f1a0b44d07f6a3ad6512151a96eb7eb058ebf5806eec16926bc8684f2e7dd03ce38a6a90244d3129ba7a1dcc8081b46bcc5c65921d84cecd729a8c8ecf70ba97b5ebb78d7f2377a8003aced6af326bbc077bd9fc6ce0971a06965208fcd0729d0f22dd686ae8f7f10895bda6421577bc7bf21cd950f319490f3afa7896013f8fa6f3b6d3e8271f75147693ce3f27055abf0129a2512a6de57766f3019f507c4804bfd29361ed8a7b6d539ea8c9041ae5f4b6a361f2b6dc42af506c220cedf33ed3afe0540c3a9b07b040000",
    ],
    [
      "ETag",
      "D81O6Ve7Y9E+ViAmQI2iiQ==",
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
      "Thu, 09 Sep 2021 18:14:08 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-103-1631211111899"
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
      "ff8d92614fc2301086ffcbf9754b98e084257c188a88015418266a0829db6d14b775b61d0609ffddeb44346aa2fbb0dd5d9febee7ddb2d3cf13c020f163c792e516e8e12d4b72618a32a53ade853885c2158809a2544deb538aeddce032f31bedaf45eef5bba3ef4db6d2254b8c48c81b78598631a29f01eb790b30ca92d146999e5f32ab3406f0a539c04e3fea847792622938fa68381df197461671d1a23a6d9bce2ffd136db59b0128b31c628310fd1cc5248b1c250f78d4cc5b222455b895286a8a082ab85448ab26052089b2ab653abdb8e5b778e1df3345b2d22531132cd454ef074420382169aa563f14232c125405621298eabf79aca3caa9498b03f0adc4635e05780668b798af3bf411a78c9e81c3eb0bd07df39968932d707ea6270edffb61d99fab9d5b91f747f104a93550724e80fbb93c01fde186eb6d7ded96854375290930a8d894eadd13c39756befbe9e09e335fdc7d3b2440b4246d7e3926bf062962adcbd013078fcab7c020000",
    ],
    [
      "ETag",
      "V9iev6BZiuefJyGzY9t3MA==",
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
      "Thu, 09 Sep 2021 18:14:10 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`date`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "DATE" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-104-1631211111899",
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
      "000000000002ffd553614fdb3010fd2b96f705a4d2d20e187442ac948c452b292429a842a875934b302471b01da60ef5bfefecb4eb3ab6f17955a5f67cefdd7b3edfbdd0475ec4b44b673c7daa40cedf3d88196d50d02cc5d3f006daf3e4a8c3fdfeae1b7f3fdd9f45a2f8767c8c086e588ae565063b4a543202d51d05cd548aaa6452881d2cb4d3dedddb691fbc6f77dae67378748444055932e0c523d2efb52e55b7d55a89375321d20c58c9553312f9cff3d673a7554af1009156ad4dcd16caa8d61baa27998898e6a2381e05e8a052202790339ea18735359e7ddaacdde42c6fa6087ee611b0281255a18d2f2c816d48785a495b95765fa8f5f9cb1f1a3803a71f92fe70e4855b53961bf2749b30455641834cf15209cf60c2e3a9c94c26e523f9ec0f2f30830eee99023525375f1cdf216430bc71fcad69cc34601d6f189281fbd52127a4e79d91cd52ae47469ee70421d93ad926e7fe7074494ec71b18bc430c09ab327dc634ea68e33daeffbae66935288da065dbddd7af4d1726cb85e4dadcd7f542c7eff543f7daa95b3c809445f3e0099b9cb04c01a29964396890172206a45c0e033774875e6f800cdbb7cb1542d1eeedcb9a10ce4b3006b5fda567bdd0a18b45e3ef889eeff7c6589549c9e6bfe5d0e9c19ea1afd9d72cab2cc4e26d543b78ae13b44d8dda2aea6c44077471b7c06f83e2f0d55af46ae4f8635a1ff990808422b202ffe8a705dbc4db4bb41a6804e348a38ed2182bcd2365542209361df2dcbaafd99dfdddf6e1076ac152bfca75f6f7cce617f11f334b8dcad6072985f441e1f89810d594f5c20b6c0a8fafec0e6cb87c5a1ee5a0144b4d794f909ce9e89e1729513c2db0b60492084992aa880cad1e797bc4645ae5506862de50758999802609aab2145243bc2e80b97a5182d077bdf3ed8fcbf0741c3a01ae9f26b7edee61e7cedcc7dea27ee7fff20677f593d88d187a66237e00754ee512cf050000",
    ],
    [
      "ETag",
      "TWe1yf92iRC0IdzB5bconw==",
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
      "Thu, 09 Sep 2021 18:14:10 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82",
      "30",
      "00",
      "00",
      "d0bb64ad4eaa354277443415503e4645374c4c63c61fa44125d1e9ddebf41af5dde13d00e35cd47571a98ea2041fc0b2aedbe19d5039d86f640d2b3e98645e98a4509d61f3cd4aba647c70bade378bb7629e2664f9be3e3ba5cf3f6f6214e0c4ce50d49d9ebd5dd7a737bcb5610fc60cf5833852718cd628b0d12ad77a785c9dec614628230e0c73e2f74d6ea08b968ed1f9e4301e16ae75763425836671c05389b434d1068e65dac427d9f012b78797f1622e31556a648fe42bb5b0cab2fa867232ba93a46a5f031939b4dac7a5b74d52979a243393cecbcbff055a4018b5d7a22ef6cfedbdbeebb6c05ffde2629578fec78269a1c1cf2fe7c0db2919040000",
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
      "Thu, 09 Sep 2021 18:14:10 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-105-1631211111899",
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
      "5d",
      "6f",
      "9b3014fd2bc87b6d0209242491a2354be91a29211b9056db3421630c750b9862932eaaf2df776d9aae55a59517b0ef39f79cfbc113ba67558a662861f9434b9bc3a73b9ea0334425cee1f6a1f972c8363f0f45b9bdbe0cffecd7b653548ff339209862095cd605ed09de36848ad92eece70d6f6bdc70de8344bd8135ea0dc6f6603850cf643a05a2a045b666d53dd06fa5acc5cc344fe2fd9cf3bca0b866a24f78f9726fee8766ddf03b4aa430df6a9a2023cc0f543f179c60c97835df85e0a015b489698959011efe51d3e4fc6dee3ec3653f07f09e118a09e16d25952f48417895b1bc6d7456347b42dae7ab0f147a6b6f191984176d59c5152ee9999162896379a8a971196c37c6cabfdc069b45b4dafa71b8bcf2368bfe72bbde6dfcd0b8b9f202cf903829a8e61a73e35c9f7c38807e4a856495568fd4b5527eeed0eafd601401a405ed82b16b8df160624d932c714936b1474966d1249924ee08db8945a60e75d28462e06951cdc215aff03873ad9133885d3bb562c7b1d3783276484cddc475478e354cdc313a9ea1c786497ac144cd05eb3a846e8255e4c551b0f3978bc8d32564b82de445674c15f0daa3840201f49f9a8e2aca3828a976affcc80b16cb6875ed75135ed31c9343f80033ce702128a07103cd93b4d9f0141a86fcc5c6bb00b09ed8b75350a0d9af27a47aae5cbc6af90b3d82012abb52bf5118052bffabb673425ce3a2d5907df7816ab07c0bb581ebe36f40c2967659d0f79d17fc40dd554033dad08a7c3c4d00ebc0c77fdb69f3010cbb0f3a42c219968708a5421ada2d11d3f53eb387236b6cdb48831bf92ee64edd53db540e959196b492cf25759b0f957662ad78014110e6efeb761dff020eaa86d07b040000",
    ],
    [
      "ETag",
      "qrByfMZylmOVFSxvL34lnw==",
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
      "Thu, 09 Sep 2021 18:14:10 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-105-1631211111899"
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
      "61",
      "4f",
      "c2",
      "30",
      "10",
      "86",
      "ff",
      "cbf9d1913084094bf8008ab80450c7484c0c2165bb8d41b7ceb68310c27ff73a118d9ae83e6c77d7e7ba7bdff6009b348fc085659abc9628f71709ea2713f8a84aae157d0a912b040b50b384482f8beb83d9b0dcec78d218dae1f3f6b23d4bba5d2254b8c28c817b8038451e29705f0e90b30ca92d14bcccf2459559a0f785294e03df9b0c29cf4464f2c96c34eaf54703385ae7c68869b6a8f87fb4cd8f16acc5d2c71825e6219a590a29d6186acfc8542c2b38d6942865880a2ab85a48a4280b2685a851a566d75b35dbb9b21bb679da9d0e915c844ca722277836a501410bcdb82f7624131c02641592e2b87a6fa99c469512137a93c06956037e0568b638e5b8f81ba481578ccee1033b79f09d639928737da6ee460fbddfb623533fb7baed05831f84d264d51909bcf1601af4c68f869b9fb4f7f71ad5a314e4a44263a25d6fb65bd74efdddd71b61bca6ffb85a966841c8e87adca71adc987185c73711efe8be7c020000",
    ],
    [
      "ETag",
      "Imf0EUGukwlg2G1cXv+8Ug==",
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
      "Thu, 09 Sep 2021 18:14:11 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`stamp`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "TIMESTAMP" }, parameterValue: {} },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-106-1631211111899",
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
      "000000000002ffd5536d4fdb3010fe2b96f705a4beac8575a51362856610d1262549611542ad499cd490c4c176903ad4ffbeb3d3d2756ce3f3a248c9f99ebbe7b9f3dd0b7e6479847bf89e254f2515cb0f0ffc1ed730552481d3b1f3e3f07bdb1e3a379fcb83e9e2b22caf07b27f7c0c08a6a324c98a94d6252f4548656fe23712c1cb8208ceeb90a8defad8a9b73a07ad764b3fdda3230894348d872c7f84f0855285ec359b1bf246c27992525230d90879f67ade7c6e370bc11f68a8647397b30934b2f90eeb49ca43a218cf8f273e28282515339a119682866d6874ff7537778391ac9100f899859484212f73a575418a90e7314b4a61b2e2de0b363a7ff9c1be35b4ce0274e64e9c606f4e321d3cdf4744a28d514373282a66299db168ae3db359f188be79ee083ca0604124957374736179164243f7c6f2f6e652814648e4b8011ada97163a417d67807673d90e9a388ee50768ef641f9d7bee648c4ea73b182822a231295335200a8894161f55bfb6be5b45a502d0baeff6dbebc62bed655c30a50bb69dc0f2fa67817d6d553d1ed284844bff09ba1c93545240134132aaa818f188eaf1727d3bb05da73f8408d3b8f1062171eff6651b102c0baa052af3c5813d82e2faa3315ead6a7f87f53daf3f85d44408b2fccd07723b873a7c1b7d4dd2d2400cde58958ce7ca815b58b36dacf68ed5c1abbb15bc350c235871e1ab89e54d7175e4d1980a9a8786e01f4d3560e3787f9536630d60186ce081e1504c2a164acd120a6adc01cb8cfa2abafda9d53d308ba888506f7ddd8edeff3cfaa367cd519afc54082e3c2a6186b4096cd268613934854557661376543ead8f322a2549747a87a38ca870c1f2044996e4905b50147381e2320f755835f8e68888a4cc68ae90be43d943af63d0407e59145c281a6db300a0da193ff06ce77cffcbda3c9d06960f9ba8d06dabd76ddfe9a24c29d565ffbf65dc5597a3f50c5cc782e1fe09de8ad542df050000",
    ],
    [
      "ETag",
      "PNz4X2ILNW7u3YhKuuVDsA==",
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
      "Thu, 09 Sep 2021 18:14:11 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0",
      "bbf45bc90602edfea8080381a12332fc21580bd40ea814036a76f7995d63be3bbc3b2808a152e643c7690bdec0b550914294b580d81ed9f89d594de0bd6cd279f15e938bc3a371cab176e00b74e194bbdeebde3f90aeadcfe93a89d114b38317ab51cb2b9b6d0dd644931538a2327b94e015f7a28ddab02fdf2739ce96c950c84e068e6db4654955b6a4fecda47c274c437435b321ee422b9c1fe52ad1b7353fa51d7711cc4ebb4113b16d1e498b7224e1cdf117689185cd87af5721948843f59348380d2eb7d93826d848f75579d6981eec94a7a7ff0bcc009d04eba9ccd963bba62334037ff5f3e12ae8e33fa6454f7bf0f30bb5ba765919040000",
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
      "Thu, 09 Sep 2021 18:14:12 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-107-1631211111899",
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
      "2b91f795bed2a62fa91a5509a35b9bb224056dd314d9ee4d30a471881d2684fadf77ed5006421af992d8f79c7bce7de489dc896247a68489ecbe86eaf1d3ad64e48480a619de7ee55752fefc4ac1cb2e79b03d1fc5d4fb369fcd10210c4bd17d99434bc9bae2a0a6dba89d55b22e6925650b13b57add51ab37ecf7dc9e79c693091215e4e94a147748bfd1ba54d34ee728decea4cc72a0a5506d2ef72ff79d07b75356f216b8569db79a1d94519d0f543fe792532d6431db46e8a0565025b0a722470fffa83b76fa36775bd07d3b43f083e040399775a18d2f4cc165918aacae6c56327d22d6e7ab0f12f92b7f113b5ce6f5be480aba87136747354df46309ce79b8593bcbe07c13aee7f1721324d1e2c25fcfdb8bcd6abb0e22e7fac20f7d47539683e53a33e7d49e023ca0fe0e941685558fcdb5517eeed0f2fd600c01a51534c164d41dd2deb83b61291bf174dcf758da05c6c66ce4d13eebf2c900063b06147956d4b268210bca98d7675e2f81890bc9c075fbc904866992b21e0c47ee20059890c309f953090d6742955289a643e43a5cc67e1287db60318f7d5b424aeb5c9f35c64c01af3d6a2c1041ffa9e960a242a29269f73288fd70be8897577e33e11564943f46f738e394e60a104d2b6c9e866a2d77d83012ccd7fe1982edc42e8f4145a6bf9e88e9b971f1aae52ff4180768ec6afb26511c2e832fd6ce117145f3da421e9a0f52a2e51bac0d5d1f7e2312b7b4c942be6ffdf00769ae4248a182827f3c4d04dbc0c77fdb71f3118cbb8f3a4ae31997872ba3c22b689648d87a9fd9aee70edc11b1e04abf8b7983eeb16d2687c9087b28f47349cde663a58d58ad5e",
      "4018c4f907b65d87bf17965deb7b040000",
    ],
    [
      "ETag",
      "JcVooZJae5gPcNUF7Ta5KA==",
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
      "Thu, 09 Sep 2021 18:14:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-107-1631211111899"
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
      "db",
      "4e",
      "83",
      "40",
      "1086df65bc1412d0da03492f68adb609ad3dd00b354db385815281c5dda5a6367d7767b156a326ca05cccc7eb3ccffefeee129c943706095c4cf258add598c6aa28329ca3255923e05cf258201a8584ce4d6b7e6e17db7c19af6287c38afb9fdd79d3d69b78990c11a3306ce1ea204d35082f3b8879c65486d014fcb2c5f5699016a57e8e2cc9f0e46b794673cd4f968ee796ec7ebc1c13835864cb165c5ffa36d713060c357538c50601ea09ea5107c83811a68999265458aa6e4a508504205570bb1e065c104e726554cdb6a9876fdd2beb0f5d36cb5884c79c054c27382e7331a1014572c9df21792097502441592e2a87a6fa99c8495121d0e467ebd560df815a0d9a224c5e5df200dbc66740e1fd8d183ef1ccb7899ab1375e3ddb9bf6d47a67e6e75edfabd1f845464d509f107c3decc778763cd2d8eda3b3b85722c383929519b685bb5e655a36ebdfbdae5da6bfa8fa3448906048cae473f51e0442c95787803c50d183c7c020000",
    ],
    [
      "ETag",
      "vT0UdYC7a81NdZ+4AHzy1Q==",
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
      "Thu, 09 Sep 2021 18:14:13 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  LOWER(`amount`) NOT LIKE ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "%1.54%" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-108-1631211111899",
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
      "c5",
      "54",
      "6d",
      "4f",
      "db",
      "3010fe2b962704487da105aa5209b10281450b4997a6a06a428d9bb8c1348983ed2075a8ff7d6787001d6c7c5c15a93edf73f73cf7923ce125cb633cc073963c9454acbedcf3396e60aa4802b7fda5771dbb9777fde8aab01c370d7e4de645727c0c08a6a324c98a9436252f4544e560326e25829705119c372151b3b3d76f767afb9d6e47fffa4747102869ba7058be84f03ba50a3968b76bf256c27992525230d98a78f672df7eecb60bc1ef69a4647b93b30d34b2fd09eb49ca23a218cf8f276350504a2a6634232c050dafa1f1fceb66ee1623592b01f0238b2889225ee64aeb821411cf172c2985c98a074fd8e87c73c063cbb1ce0274e64ddc602724990e0e771191a8361a2884a2162ca5331687da339b154b74e17b57e0010577445219a29b6f966f21e4783796ff2693eb05c8b1bf5be8040ddd73b499cc76d1c475ad7180764e76d1a5ef4d46e874ba81812a62ba2065aace890226a5d5c7d5d1d6c355542a003d37de7e3f6fbcd65ec60553ba62db0d2c7f7816d8d756d5648726245a8d1fa0cd0b924a0a682248461515573ca61032f2c676607beed08108d3b9518d9078f0f3e935205815540b54e61f5f38de30e81d180535e49aa4a5c13c5607bcd5691d1e6ce1f5baf1f74443df1f4e819c0841567ff8a0204df12187c11bab125a7376b066abadee86d5c3ebdb353c0d0c5b5a71e11f13cb9fe2eacaa70b2a681e19827fb4dd808de3f3b7adde7c00c3ee038f54604bc522a95922418d3b6099515f45770ff73b4787d880857ae7ebeef5f427228f3ff43c7394263f15820b9f4ad8326d029b345a580e4d814f480367544a92e834931c4a9194cc538acc2ea097b6a330442c477a2e280ca6236bf6bc00f0129d9218c5bcd451a6d10354cdbdb6b62b73",
      "5b0b3372aa81fd5f29b7559334d7b9e75ab064bf01086c93e98a050000",
    ],
    [
      "ETag",
      "8kOVdNGh8cMpELNlTzUbpg==",
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
      "Thu, 09 Sep 2021 18:14:13 GMT",
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
      "02",
      "ffedd34d7282300040e1bb64ad4e09b6427750a5388c163599a09b0cc414223f420229d0e9ddcbf41af53bc0dbbd6f1033c695a2ed3de7157805430ced055b04b5e5aebfb2779c551e5563772cfb5564bd659a11151d9304993097411f5ade167abe391c1ae86353a4b58dd37659c6708decf176e2bd9926d7a6e1a73e97ba98a21ee632308c1b69e112ce1172c632202f1ebfd673aaf3cf30ea1ce4379a1d90156f7521f7e7fab07f22a1ee3ad1d0e3d820a7fa50585c08722c17fb2284d86091cac6acc0da64be135ec8d9f157d93612f7385c9515c19bcd32dff17ca7e8e2e1e1ff0233c0fb5a48aea8986e379f6d7b06fed6a7ed50f3e97f97c7924bf0f30bbeec398a19040000",
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
      "Thu, 09 Sep 2021 18:14:13 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-109-1631211111899",
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
      "000000000002ff85536b6fda3014fd2b91f7b510088f02125a19a42b1a842d8456d33445b67393ba0d711a3bedaa8affbe6ba774ad2aadf992d8f79c7bce7de489dc8a222113c244765743f5f8e94632724240d30c6f676ee55116cac5b7b53b7eb8c8feacd4979b6c3a4584302c45f7650e2d25eb8a839aecb6edac9275492b295b98a8d5ed8c5bdd61afeb75cd331a8f91a8204f57a2b845fab5d6a59ab8ee51bc9d4999e5404ba1da5cee5feedd7bcf2d2b79035c2bf7ada68b32cafd40f5732e39d54216d3dd161dd40aaa18f654e4e8e11f3561676f73b705ddb73304df0b0e94735917daf8c2145c16a9c8eaca66259327627dbefa205b7fe5cf2387cbbcde177141f770e22454d3583f96e09c879bb5b30cce37e17a162d3741bc9d5ff8eb597bbe59edd6c1d6b9baf043dfd194e560b9ced439b3a7000fa89f80d2a2b0ea91b936cacf1d5abe1f8c21a0b48226189f7686b43bea8c59ca4e793aea0d58da01c646ec74407bacc3c77de8270c28f2aca865d142165e2f618c79fdb8db1b0ee23e1d7663d6eb8f639ef221f0613f49917438210f95d0b010aa944a341d2257e132f2e328dc05f359e4db12525ae77ad1183305bcf6a8b14004fda7a683890a894aa6ddcb20f2c3d93c5a5efacd84579051feb8bdc319a7345780685a61f334546b9960c348305bfb0b04db897d3f061599fc7a22a6e7c6c5ab96bfd0231ca0b1abed9b6ca370197cb5768e884b9ad71672df7c90122d5f636de8faf01b91b8a54d16f263e7873f497315420a1514fce36922d8063efedb8e9b8f60dc7dd4511acfb83c5c19155e41b344c2d6fbccf606bd81e7110baef4bbd8d0eb1cdb6672988cb087423f97d46c3e56da88d5ea0584419c7f60db75f80b8839994b7b040000",
    ],
    [
      "ETag",
      "A/r2abRoDKM/9wHgxLsBjg==",
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
      "Thu, 09 Sep 2021 18:14:13 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-109-1631211111899"
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
      "c1",
      "4e",
      "c2",
      "40",
      "10",
      "86",
      "df653c5a22154468c20104a5092042b9680859da6929b69dbabb9510c2bb3b5b118d9a680fedccec37dbf9ffdd3d3cc759000eace2e8a540b93b8b503f98608aaa48b4e24f4e9942b000b588981c8cbb354f5ea4b3c734eab9c179b5efbab46db79950fe1a5301ce1ec218934081f3b4874ca4c86d3e25459a2dcbcc02bdcb4d71e64dddf11de72905261fcf87c34e77d88783756a0c8416cb92ff47dbe260c18656530c5162e6a3992597b4415fbb46a612699e604551217d5450c2e54224a9c88524aa70a562575b15bb51b32f6df3345b2d2613f2858e2963783ee301419316c994b62c131a0cc83264c561f97ee5721c944a4ce88ebd46bd1cf02bc0b3857182cbbf411e782df81c3eb0a307df39915291e913753bbceffcb61d9bfab955afe3f57f104ab35527c47347fd99d7194d0cb7386aefee34aa89247652a131d1aed69b57d78deabbaf3764bce6ff385a1668812ff87a0c620d4e28128587374789a02a7c020000",
    ],
    [
      "ETag",
      "HNB3Tr/mSZmgDId+0EIIow==",
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
      "Thu, 09 Sep 2021 18:14:14 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-110-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd6f9b3010fd5790f74babe60b08f992a22e4bd9869492969056d13425c618ea06708a4da6b4caffbe33346da3762b8a04e77befde3bfb9c27b4665988062860f14341f3dd977b1ea01aa212c7b0cab6e1fa71bc98586767cee335e561eb2e7a8c87434030c51238dd24b42e7891132a06f35923ce79b1c139e7752854d7f5565def98baa1aba7d7ef0351d0249ab06c0df43b293762d06c1ec41b31e77142f1868906e1e9cb7a736b343739bfa7448ae6b166136444f313d5f384132c19cf86f319382804cd9734c52c010fafd430f87a5cbbc170da8801bc65846242789149e50b4a109e452c2ef2b22a1a3ca1d2e79b0f34b327f6d8d7c6d3b9eb9fac70aac8ab530d0bed10d4b4153415b1842e59b85299e572b3d6be7bd34bc880833b2ca85869b73f6dcfd6b495020db5736de45e68c754c7d5e6ae6bcf7cede4fc54fbe14de757dab7c511063c87544896958e7d1c2454b97dde55e7fd612a0296e0a04a2ebbad0ed67bad7e10055d12f54c2b885a34087a41d7c266d022fd366d8701c5c093aa7ac9c219cfcc0047a66ef67462763b9d08e3d0303a814982b6a5b7acb669b4bb3ab1cc2edad7d09f9c497ac1c4860b56ed2cbaf51cdf5efadedc1d8f7cbb6c23c245222f2a73aa89b73e253409a0fff4b55759c641491d93e3fab6371afbce8d5d4dc684c698ec660f301b114e040534ce714a25cd2f79089b86aea633c777a6ee68028cf2b8af0e088106bf9e5e09fe6e53eeb22cdf4aabd32ef50f801b9c1425625b7d20dd42fb7deddf25469e375a802cce73bcfbb8fc87f54b7c1955165ff490523b44c651d441fbdf7bf8d5105caa4a0b5dcf6d6f81aa258f4634a719f97c90005c263eff73385c5400c355051d212186b92542a9909c56f3cbd2d27dc536acb6d1d55109cee5bb9cd9eb1e0e4ad55015694a33f9dc527551cb7d53a942bc80200963e73aee0fc8fe05c8dbb7232a050000",
    ],
    [
      "ETag",
      "ivdkzCYL5++IzQeod0hfzg==",
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
      "Thu, 09 Sep 2021 18:14:14 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-110-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d50d16ac24010fc97ed6b82a64251c1875a8215446a5aa5a5889ce7264d4cb2f16ed31a24ffdebd287dee3ddccdcecd70337781635a1e600cfb3439d5689abb0479e54084b6ced9ca515169113c405689284f4dd63f9bf7c66e7ae78fcd50cf6683536f359988c2ea2f2c148c2f10a7981f2c8c3f2f50aa02c5a60aaa4b161137959be7cbb770164642147470c472bd583c4e1721b4de9f69b7ab8effb26c5b0f32da4718a3c152a3cb5019ca50f3dcd5b3aaa872f42dd546a3854edc5d2486ea4a19225f183f08fa7ef03008ee03b786a3912873d28a532a45bc7e9570c0c42a8fe847ea412002d341691a77fb7747bb1237b46db737d3b461b42f86248245f77aff9ae4895c3a96d46c6af4402bf9c8e794af73fb0b19c85f73a5010000",
    ],
    [
      "ETag",
      "qyj0xrXysV/xYV8cGG3q/Q==",
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
      "Thu, 09 Sep 2021 18:14:14 GMT",
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
      "00000002ffedd3cb8e82300040d17fe95a48114598ddd4118834800f40dc10c046c080a52d2f27f3ef43e637c6b3bedbfb0dd23c279c27e2f9200df80053ba34e45c76a88ebe86fb29eb6fa59046083ddc42bbb559ab3a97691bed3422795c82a7cfa4aa76b61159f782b9743b9ad03f5e9c1b350945ae8427d7cf62d4d5afa2f7fc6bc54ca8ebc32a7becd322581d383b858aadec046e8230cad65de38d71e88a83556473d90b4deacc735477c3cb0a7082b47d3a3dcf78d3204ccc8355d3cbf9dac5595e973df234cb53582b0a9ed74b671b38c3be6c950d4f0213c50eb15511437c94dfdefe2fb00064a425233c29e7dbd5b5612cc0dffa89982899ff47246584819f5f216ad64419040000",
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
      "Thu, 09 Sep 2021 18:14:14 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-111-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85536b6f9b3014fd2bc8fbda249027448ad628a15bb6846c405a4dd3848c73a16e09a6d8b4aaaafcf75d9ba66b3769e50bd8f79c7bce7df0446e79b9275392f2fcae81faf1c38d48c919014573bcb51fdc48a97c52dc7e99efe5d76074b9042f9fcd10c1354bd2435540478aa66620a7bba89bd7a2a9682d440713751cc7e938e381d377f4e37a1e122514d99a97b748bf56aa92d35eef24decd85c80ba015975d260e2ff7bdfb7eafaac50d30257b6f357b28237befa87e2c04a38a8b72b68bd04123a14ee04079811efe50f7e9f9dbdc5d4e0fdd1cc1f79c01654c34a5d2be30051365c6f3a63659c9f489189faf3e48e4affd456c315134873229e901ceac3d5534518f155817e17663ad828b6db899c7ab6d90448bcffe66de5d6cd7bb4d1059579ffdd0b7144d0b305c6b669d9b538007d4df8354bc34eab1bed6cacf1d5afd3b184d4069096d3099d863eab8b69766e98465ee60946636a4a99b4e467490dacc1bc2709f02459e11352c5a8a125c3a1cc37890b863e625c3014b13cf1b43e2f4bdc1840e3d7bc06c723c230f3557b0e4b21292b71d2257e12af69338dc058b79ec9b1232da146ad91ad305bcf6a8b04004fda7a6a38e72814abaddab20f6c3f9225e5dfaed84d79053f618dde18c335a484034adb1790aea8dd863c34830dff84b049b897d3b052599fe7c22bae7dac5ab96bfd0631ca0b6abcc9b4471b80a3e193b27c4252d1a03b96f3f488596afb136747dfc8548dcd2360bf9bef3c31fa4bd0a21831a4af6fe34116c02efff6da7cd4730ee3eea4885675c1e26b50aaba15d226eea7d66f747436f3222065cabbf6323db734f6dd33974463840a99e4b6a371f2b6dc51af902c220ce3f30ed3afe06773934927b040000",
    ],
    [
      "ETag",
      "0w8Sttg7lkJAdsKN5VDe9g==",
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
      "Thu, 09 Sep 2021 18:14:15 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-111-1631211111899"
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
      "6f",
      "4f",
      "c2",
      "3010c6bfcbf976244c1161092f86222ee19f6333218690b2dd60b8ada3ed3448f8ee5e2ba25113dd8bedeefabbee9ea7ddc3535ac4e0c0325d6d2b14bbb315aa7b1df828ab4c49fa94bc900816a0622b2267ec61188ea751b90cc299bb7db5d9a4efdd773a44c8688d3903670f498a592cc179dc43c172a4b68867555e2c4c6681da95ba380d7c6fd4a73ce7b1ce47e160e076073d3858a7c69829b630fc3fdae6070b367ce96382028b08f52ca5e01b8c94a7654a969719d624af4484120c6c1656825725139cd7a852b36dbb66372fec735b3fad769bc88c474ca5bc20389cd280a0b86299cf5f48263409102624c589793f53398d8d121d7aa3a0d930037e0568b624cd70f1374803af199dc30776f4e03bc7725e15ea44dd0ec6ee6fdb91a99f5bddb841ef072115597542026fd89b06ee70a2b9f9517b77a7504e042727256a13ed7aa37579d5acbffb7acdb5d7f41f47890a2d88185d8fbb548193b04ce2e10de74d82207c020000",
    ],
    [
      "ETag",
      "YaVMUOScpbTUYAqz1aPGIQ==",
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
      "Thu, 09 Sep 2021 18:14:21 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-112-1631211111899",
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
      "54",
      "7f",
      "4f",
      "db",
      "30",
      "10",
      "fd",
      "2a",
      "91",
      "f70f486dd3a4bf2b55ac946c8b54524853109aa6d6719c6248e2103ba00af5bbefec10a0631b51a5e47cefdd7b679ffb8cee5916a1310ad9f6a1a4c5eecb1d0f51035189b7b06a86fcb497f9f1f92ccb67665a5efa0fc5fc69320104532c81d33ca14dc1cb8250315e2d5bdb8297392e386f42a1a665d94dabdfb16c4b3dc3d108888226f19c65f740bf95321763d3acc55b5bceb709c539132dc2d3d775f3d136f382df51228579a869828c303f513d4938c192f16cb25a828352d0624d53cc12f0f0468dc2af87b55b0ca7ad2d801f19a198105e6652f98212846731db9685ae8ac6cf48fb7cf78196cedc9905c66cb1f282a30d4e1579736c6061d441c3d84053314be89a451b9559aff37be39bbf38870c38b8c5828a8d71fdc3f11de36d69634c8c1363ea9d1987055ccf58799eb30c8ca39363e3bbbf585d18a7370718701e512159a67d07384ca8f2fcb2b7eec72355042c41b44aae07ed3eb686ed51188703120f3bbd306ed3301c86831eee846d32ead26e14520c3ca9aa6b16ce7816f5476d8bd8233a8c4818e25167d8ee753bd8ea0cbab4df8e07d8b27b961513b46fa0a782497ac644ce05abf6175dfb6ee0ac037fe5cda681a3db887199c8b3ca9c6ae2bd4f094d02e83f7ded559671505287e57a81e34f67817be554f331a75b4c76cb079890182782021a1738a59216e73c824d43178ba51bb80b6f3a07863ef48b1a21d0f8e7f31b21d8e57a97a57ea365e0bbde776da0465ce1a4d490c7ea034d73f08af6fbc6bfcb4c7d7f7a03d2b828f0ee8f1cb4d3ef2afa5f24345e4795cd5ad242",
      "4aad8eec83a88ff6bff6f06b20b85e9516ba5c39fe0daa967c1ad38266e4f36102b04e7cfe37515f5900c3a5051d212186d92542a990825633cc52edbe62db7d55006970213fe46cbb571f96aaa12ad29466f2a5a5eacaea7d53a952bc822009a3e7e973dbff06ae7c153334050000",
    ],
    [
      "ETag",
      "/boB5nRfMCnpC/muQRqrLw==",
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
      "Thu, 09 Sep 2021 18:14:21 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-112-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08",
      "000000000002ff8d90416bc2401085ffcbf4d8044c2cb60a1eaa041544daa8a722b26ec63431c9c4dd8922e27fef6c2cd263f7b03bfbe69be5bdbdc221ab1218c02e4b8f0d9acb538afce98a186d53b095a3a6ca227880ac52218fcbd56191bc8c8e9de76947bfe6d3de448dcfc3a110567f63a96070857d86456261f075854a952863aaa4a66281f852bbfb6cb18a26512c4249891316ebf9fc7d348fe0e63d86b6dbfaf0af91cdcd839c7631eed160a5d179a80de5a879e6e25955d605fa961aa3d1420bb78dd450532b43e48be20741e807bd6e10066ebdf5fb4216a415675409bc5e8a39606255c4749678100a60da5292eedbfd2472b70d716a01e7ed6f2f7cf402d7dbfc3e38ba30da0f4362cfa273d6b9bb1c9373ce92884d831e68259f3ccdf87ebffd00e626e1c5c1010000",
    ],
    [
      "ETag",
      "qSTkNd4Bq0+H0c7jH6GaCw==",
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
      "Thu, 09 Sep 2021 18:14:21 GMT",
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
      "02ffedd34b7282300000d0bb642d4ec00fa63b02ca0ce12b2ad00d1320501028bf91864eef5ea7d7a8ef0eef1bd03465e3184f9f77d68237c0a984d6e99a7407accd6565196e4b2bbdaa2e82a277cede856ab270dbd89d2d09277a50c99199d1457c286169ed4f8141a353181263b467a4559149eb544534700772ec0bdbf6c8837cf8bb4e7908b22ec344ca228127532d987e68795bf350ba58cafd1667d06bdc16c1e5ec14fc7c99ebed0d36e2951fb1a829c7d8859b7a361a2a372728a982a8f4a3d6df66de5b3af13c3f6f9d56f26374ef87e2dd53b31cdb36f7c93531d72f2fff175801f6d595031be3f2b97db3436805feeac713efd8f33f66746003f8f905d872227719040000",
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
      "Thu, 09 Sep 2021 18:14:21 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-113-1631211111899",
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
      "c8",
      "fbda8490278914ad5142b74c09d980b49aa6091973a16e09a6d8b4abaafcf75d9ba66b5569e50bd8f79c7bce7df0446e7999921949787ed740fdf8e94624e48c80a239deba1cd26f919bdcf2f082dffdb9b299b77ac8e7734470cd92f45015d091a2a919c8d93eece6b5682a5a0bd1c1441dc719749cf1c0e93bfa71a753244a28b20d2f6f917ead542567b67d12efe642e405d08acb2e1387977bfbbe6f57b5b801a6a4fd56d34619697fa0fab9108c2a2ecaf93e44078d843a8603e5057af8474d93f3b7b9bb9c1eba3982ef3903ca98684aa57d610a26ca8ce74d6db292d913313e5f7d90d0db78cbc862a2680e655cd2039c59295534568f155817c16e6badfd8b5db05d44eb9d1f87cbafde76d15dee36fbad1f5a575fbdc0b3144d0a305c6b6e9d9b938f07d44f412a5e1af5485f6be5e70eaddf0f4613505a421b8c27bd3175dcde34c99209cbdcc128c97a90246e3219d141d263d3210cd30428f28ca861d1529493711f18757af1783076e3e1341bc5d3d4cde2c92449fa7d6788d91c723c230f3557b0e2b21292b71d2257c13af2e228d8fbcb45e4991232da146ad51ad305bcf6a8b04004fda7a6a38e72814abadd6b3ff282c5325a5f7aed84379053f618dee18c335a484034adb1790aeaad48b161c45f6cbd1582cdc4be9f8292cc7e3d11dd73ede255cb5fe8110e50db55e64dc22858fb5f8c9d13e292168d81dcb71fa442cbd7581bba3efe46246e699b85fcd87bc14fd25e0590410d25fb789a0836818fffb6d3e62318771f75a4c2332e0f935a85d5d02e1137f53eb3fb63673272",
      "8801d7ea5dcc1df74e6dd33974463840a99e4b6a371f2b6dc51af902c220cedf37ed3afe05de69a55c7b040000",
    ],
    [
      "ETag",
      "8iedJT8bkiSFiqxW/cEDwg==",
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
      "Thu, 09 Sep 2021 18:14:21 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-113-1631211111899"
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
      "514fc23010c7bfcbf9c8169de084253c0c055c028830f4c11052b61b0cb775b69d6412bebbd78968d444f7b0dd5d7fd7ddffdfeee029ce42706019af9e0b14e5c90ad59d0e26288b4449fae43c930806a0622b22838eaabdb2073b1ff6ef6b3daf57b74e45b96db78990c11a5306ce0ea218935082f3b8838ca5a8db7852a4d9a2ca0c5065ae8b537fe28dfa94a73cd4f9683618b89d4117f6c6b131648a2d2afe1f6df3bd011bbe9c608402b300f52cb9e01b0c94a7654a96e6099a9217224009155c2dac042f72263837a9625a56ddb4ecba756ee9a7d96a1199f080a9986704cfa6342028ae5832e15b92093601a20a497154bd5fa81c8795121d7a23df6e54037e0568b6284e70f1374803af199dc30776f0e03bc7525e64ea48f506b7ee6fdb91a99f5b5dbb7ef70721155975447c6fd89dfaee70acb9f9417ba75428c782939312b589d659a37971699fbdfb7ac5b5d7f41f4789020d08185d8f9b588113b144e2fe0da8a3944e7c020000",
    ],
    [
      "ETag",
      "cBt+zaW6pMGV+FIF31/ryw==",
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
      "Thu, 09 Sep 2021 18:14:24 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-114-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff85547f6fda3010fd2a91f74f2b51f203480109758c668c890616422b364de0244eea3689d3d8e9c62abefbce4e69cbbaad115272bef7eebdb3cf3ca05b9a47a88f029adc55a4dcbebb61016a20227002ab7e30b68d22d3c755a2af92f9cfcf575f87bf86830120a864719c152939e1ac2a43c2fbcb4533295955e092b1132874629aed13d36e9996299f6eaf07444ed2784af35ba05f0b51f0beaeefc59b0963494a7041793364d9d3ba7e6fe945c96e4828b87ea8a9830cd7df503d4b59880565f960b900071527e59a6498a6e0e1991a05ef0f6b3729ce9a0980ef69487018b22a17d2179408591ed3a42a5555d47f40cae78b0fb470a6cec8d746b3a5eb1f6d7026c99b630d736d1f34b40d3415d394ac69b49199f5bab8d53e7ab30bc880836bcc09df68579f1ccfd19e9736da403bd386eeb9765860e26a4bd77516be767476ac8dbdd972ae7d581d60c07944b8a0b9f2ede32025d2f3e3de4e5e1fa9246001a275727d6ad8d8ec1abd200e4ec3b8dbea04b14182a01b9c76702b30c25e9bb4a38060e009595db170ce723b08a35e6c756c4c22dceae0c034ac80c4adaed9ea5866cb8a429bc48669a05d03fd28a920e794178cd37a7fd19537f19db5ef2dddd1d077541b31ae52715e9b934dbcf429a04900fda7af9dcc52064af2b026aeef78c3913fb974eaf998920487dbc51d4c488c534e008d4b9c1141ca0b16c1a6a1f96c31f12733773805863af4f91ec151ffdbc333c1df166a97857aa385ef4ddcb132b0475ce2b45290fbfa03e102bca2ddaef1ef3243cf1bae401a9725defe918376ecb6a4ff4542e15554dbdc4b9a48aaed23eb20b2d1eefb0e7e0d04d7abd6425f968eb742f592476252923c7c7b9800ac126fff4decaf2c80e1d2820e1710c3ec865caa8425a9679866ca7dcdb6ec8ed1ee22052ec5ab9c655afbc39235644592915c3cb6545f59b56f3255f127102461f45c756ebbdfcb83a40934050000",
    ],
    [
      "ETag",
      "TbG60pm/Gug/YgPxJWZAzA==",
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
      "Thu, 09 Sep 2021 18:14:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-114-1631211111899"
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
      "0000000002ff8d50c14ec24010fd97f1681b2c252a4d3888214a24042b9c8c21cb765a0bed4edd9da636847f77168967f7b2fbdebc37f3668f70284d0609eccae2ab45db5f15c8affe91a26b2b767235641c4200c8aa10a589bb61f932588df6faae1f4cf36f175f53379988c2e94fac152447c84bac3207c9fb118caa516caaa6d6b088b86f3c9e2fd7b3a7592a444d9927969bc5e261ba98c129f8336db7cde15f968f53007bdaa598a345a3d167682ced51f3dcafe754dd54183a6aad460767f1b950586a1b65894261c2281a85d16d1c0d237feec7635156a415976444bc799370c0c4aa4aa993f5e0062e78da33ba9525e9ee30bb54a4e523f9c12c81d8b6188056f247cf25ffe2d30f7fb3387a80010000",
    ],
    [
      "ETag",
      "n3w2iK/P4jc7y/Bfxs3+ow==",
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
      "Thu, 09 Sep 2021 18:14:25 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "5b",
      "6e",
      "82",
      "401400d0bdccb725823cfb57408c8a842019617e080ca3e2f0924b1cb0e9de6bba8d7af670be514e2903c8c68eb3167da239572c894afbdeb45d71dd677059429c90a68292d298aef1b9a8efe2a314f380fb289a2fb724388afa18f8f18a08e3d05875adfb6b77470d27371af55e865aa813859bcb64cff1a66d40b6e17222b55de0d2af046db0cb1ba30bdb9b4abc078e399f3a6d3368f15695a97a5d87e4f07532abd4b91de3a46c9faae38d585668a2c33505907d3bf226cf709681a1f83be1a6fad64ca1785adb4ef168767e90e2cebcb9c2d0312ebdbdfd5f6881d8d4570383ac7a6d5f6996b5407ff5b371eed9ebbfcdf2810de8e7171a2fe1f919040000",
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
      "Thu, 09 Sep 2021 18:14:25 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-115-1631211111899",
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
      "6b6f9b3014fd2bc8fbda8410f296a2354ac81a29211b21ada66942c65ca85b8229367dacca7fdfb569ba569556be807dcfb9e7dc07cfe4961709999098677735544f5f6e444cce08289ae16d9843a51eeffaa2185e8d97cbc170b1f973f9309d22826b96a4873287961475c5404ef6bb765689baa495102d4cd4729c7ecb19b84ed7d1cf683c46a2843c5df3e216e9d74a957262db27f176264496032db96c337178bdb7efbb7659891b604adaef356d9491f627aa5f73c1a8e2a298ee77e8a096504570a03c470fffa8497cfe3e779bd3433b43f03d6740191375a1b42f4cc14491f2acae4c56327926c6e79b0fb2f3d6de3cb498c8eb431115f400675642158dd45309d632d86eac95bfdc069b59b8dafad16e7ee16d66edf976bddff83bebeac20b3c4bd13807c3b5a6d6b939f97840fd04a4e285510ff5b5567ee9d0eae3603401a52534c168d8195067d419c7693c64e9c8edc76907e278140ffbd48d3b6cdc835e1203459e11352c5a60cd493c7069b71b256ec2a2de1058445d97455d64b29439038752723c230f1557b0e0b21492371d2257c12af4a230d8fbf359e89912525ae76ad118d305bcf5a8b04004fda7a6a38e72814abadd2b3ff482d93c5c5d7acd84d79051f6b4bbc319a7349780685a61f314541b9160c3883fdb780b049b897d3f052599fc7a26bae7dac59b96bfd2431ca0b6abcc9becc260e57f33764e884b9ad70672df7c90122d5f636de8faf81b91b8a54d16f263ef053f497315400a1514ecf36922d8043effdb4e9b8f60dc7dd4910acfb83c4c6a155641b344dcd4fbc2ee0efac341871870a53ec446bdfea96d3a87ce080728d44b49cde663a58d582d5f4118c4f9fba65dc7bf1016f38e7b040000",
    ],
    [
      "ETag",
      "Tlertxq5on7W9FF67DMzVw==",
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
      "Thu, 09 Sep 2021 18:14:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-115-1631211111899"
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
      "6f",
      "4f",
      "c23010c6bfcbf976244c0161092f864e59c23f6124464348e96e63b8adb3ed340be1bb7b9d88464d742fb6bbebefba7b9e760f4f491e82039b247e2e51566731ea3b13cc5195a956f42944ae102c40cd6222d145fe32e6ae5f445935bc9f79ad076f1af7fb4428bec58c81b38728c13454e03cee216719521b176999e5eb3ab3405785292e82b93fb9a53c13a1c927cbd1c81d8c3c3858a7c69069b6aef97fb4ad0e16ecc4668e114acc399a590a2976c8b56f642a961529369428254705355c2fc4529405934234a8d2b0ed76c3ee5cd8e7b679babd1e91a9e04c27222778b9a001410bcdd2b9782599d02140d621298eeaf70b9593b05662427f12745af5805f019a2d4a525cff0dd2c05b46e7f0811d3df8ceb14c94b93e5137a3a9fbdb7664eae756d76ee0fd209426ab4e48e08fbd45e08e67865b1db50f2a8d6a260539a9d09868375bddf665a7f9eeeb95305ed37f1c2d4bb48033ba1ec3448313b154e1e10ddda02d627c020000",
    ],
    [
      "ETag",
      "eAecvMcAIpfmyHXPE4ZEOg==",
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
      "Thu, 09 Sep 2021 18:14:26 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-116-1631211111899",
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
      "0002ff85547f6f9b3010fd2ac8fba795f20348022152d465095dd1129211d2aa9aa6c480a16e09a6d8b4caaa7cf79da1699b755b5124b0efbd7befcee73ca13b9a456880029adc97a4d87dba65016a20227002bbbf7ac1f964793b2333abb3fbe65cd8fac5e322190e0141258be36d9e9226676511123e582d5b49c1ca1c178c35215153d38ca66674345d934fdfb280c8491a4f697607f41b21723e68b70fe2ad84b1242538a7bc15b2edcb7efb416fe705bb25a1e0ed63cd36c8f0f607aa67290bb1a02c1bae96e0a0e4a458932da6297878a546c1e7e3dc2d8ab7ad04c00f3424380c599909e90b52842c8b695216555634784295cf371f68694fedb1af8ce72bd73fd9e0ad246f4e15cc95c3a2a16ca0a898a6644da38d8cacd7f99d72eecd67100107379813be51ae2e6ccf56944d8405d92843e54c19b913e598ecb8caca75eda5af9c9c9d2a5fbdf96aa17cb93ec280eb887041b3cab38f839448bfcf7d75de1fa72460011eeae0da540dacf5552b8803338cfb9d5e10ab2408fa81d9c39d400dad2ee94601c1c013327bc5c219cbba61c7ec6b3d030738d2cdc0b27aa14ab061e220d262cb880ddc8ff49ea5a27d033d16549009e539e3b4ee2dbaf21cdf5efbdeca1d8f7cbb2a23c6652a26b53959c45b9f028a04d07feadacb2865a0240fca717ddb1b8d7de7d2ae67634a121cee96f7301d314e3901342ef0960852cc58044d438bf9d2f19db93b9a02a33af0c501c1d1e0c7d32bc1dfe5559745f5461359c0fe4dc24b9c9615e0a1fe40baaaab4d556f6a3db4df37fe9d69e479a36b50c74581777fc4a022a32be97fd1a9f0d5aa767ad0d590547b7171b432d0fee71e7e0d04b7abd642df57b6778dea2d8fc4a42059f8f13c01b80a7cfc2f71b8b100863b0b3a5cc01ac637e452252c483dc6745bb9afd9ba61744d1355e042bc8b199ddee1bc640e99916c49269e4baa6f6cd537192af90b0882307daee37e85e86f41ee53e233050000",
    ],
    [
      "ETag",
      "z5bFDSjMeM93yKIHE2HwPg==",
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
      "Thu, 09 Sep 2021 18:14:26 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-116-1631211111899"
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
      "50d14ec23014fd97ebeb96305122243e80122159884e494c0c21a5bbccc1d63bdb5b9190fdbbb783f86c1fda734fcf49cfe909f6a5c961049bb2f8f2688f5705f24b00193a5fb193a321e3102240568528d3b1eee59381ef9b59ffe7e6b156b787f75e717f2f0aa73fb156303ac1b6c42a7730fa388151358a4dd5e40d8b888f4d98e78bb7e9d33413a2a63c108b659a8e27e914dae8cfb45e37fb7f59566d043bda64b8458b4663c8d058daa1e679a8e754dd54183bf256a3834edc5d14967ca32c512c4c9c24833819f493eb24acbbe150941569c52519112f5f251c30b1aa323a483d4844603b284db7ddfeddd1a1c405addad5c5343932ba674b12c16178bd774ef240211d4b6ab61e23d04a3e7256f2796e7f01691eddc9a5010000",
    ],
    [
      "ETag",
      "LAc0dB6u3nH3x4Dma5wX0g==",
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
      "Thu, 09 Sep 2021 18:14:26 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "7282300000d0bb646d1d5183a13b31103f234835037593a121440a920856249ddebd4eaf51df1dde374839176dcbaeaa143578057d3a76867cb8d1c8c5dd69a46a7a8f9b0eee9610a9cde9a8c363159d3186c43e0725af1b63d26c9df85ebcf27934b7f8e233bc8975dcd9876c5e12b3c475624b92f36e7ed1376cba7cbb97eb039d78c681d12c20362e2eb0a5452bc60bcb40564b34661e6dad64742071587d4d13d5232bddfad55e4bb4cb62461255ac5e3e64eedf094910a2b97b820c7bc1265a4c850c8dcae81ecbe94805fa8d5fdfb3598565e996864ecae1d3d3ff050640dc75d18896158fed13e83803f0579f5d7b2d1eff5d9136a2013fbfa64405b719040000",
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
      "Thu, 09 Sep 2021 18:14:27 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-117-1631211111899",
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
      "00000002ff85536b6f9b3014fd2bc8fbda04f2248914ad514a57a4847484b49aa6091973a16e09a6d8b4aaaafcf75d9b266b5569e543c0bee7dc73ee23afe4819729999184e78f0dd42fdfee4542ce08289aeb5bc19bb5ed5f55931be578e347cf0b27f9f37c8e08ae5992eeab023a5234350339db6dbb792d9a8ad642743051a7d7733bbdf1a0d7efe967329d22514291ad78f980f43ba52a39b3eda3783717222f80565c7699d89feeeda7be5dd5e21e9892f6474d1b65a4fd85eaf74230aab828e7bb2d3a6824d431ec292fd0c33f6a9a9c7fccdde574dfcd11fcc41950c644532aed0b533051663c6f6a9395cc5e89f1f9ee836cbd95b78c2c268a665fc625ddc39995524563f5528175196ed6961f5c6ec2f522f23741bc5d5e79eb4577b959edd6c1d6babdf242cf523429c070adb9756e4e011e503f05a97869d4237dad95df3ae47f1e8c26a0b4843618bbce98f626ce34c912976593c128c91c489249e28ee82071d87408c334018a3c236a58b414a5d3c7468c26100fa7ce147f066e4ca7e0c4e970d44f280c333775c9e18c3cd75cc105979590bced10b90dfdc88ba370172c1791674ac86853a88bd6982ee0bd47850522e83f351d74940b54d2edf683c80b17cbc8bff1da09af20a7ec65fb8833ce682101d1b4c6e629a8d722c5869160b1f62e106c26767d0c4a32fbfd4a74cfb58b772d3fd1231ca0b6abcc9b6ca3d00f7e183b47c40d2d1a03796a3f488596efb036747df88348dcd2360bf9b9f3c25fa4bd0a21831a4af6f534116c025fffdb8e9b8f60dc7dd4910acfb83c4c6a155643bb44dcd4fbc6ee8fdd616f4c0cb8569f6223133b6dbcce087b28d55b49ede663a5ad58234f200ce2fc03d3aec35f077b37f47b040000",
    ],
    [
      "ETag",
      "boiuM/IHp8Vt0E6qEER8gw==",
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
      "Thu, 09 Sep 2021 18:14:27 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-117-1631211111899"
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cb",
      "f93a924d1074090f034148262a9bbe1842ca76c369b79b6d272184efee752a1a35d13d6c77d7df75f7ffb73b78cacb147c58e5ebe71ad5f6688de6c60673d4b5349a3f15951ac1013462cd642827ed20dc246e7e37966e271cba2aa24dbfcf844e1eb010e0ef20cb51a61afcfb1d94a2406e4b48d645b96c3207ccb6b2c5289e4f67179c1794da7c761b86c1201cc1de3934a6c28865c3ffa36db177e0915673cc506199a09da552f48889995a995a1495c496a65a25a8a1819b85b5a2ba128aa8c59596e7f55a5eb7ed1d7bf6393d3b635252224c4e25c3b7110f08868c9073dab04ce832a09a901567cdfb85cb79da28b1e17416773bcd805f019e2dcb252eff0679e007c1e7f081bd7bf09d1305d5a53950e3f02af86d3b36f573abf3201efd20b461ab0e483cbd1c457170796db9c5bbf6c1d6a0be56c44e6ab4267a6ee7f4a4d775df7c1d92f59affe31b55a30389e0eb31c90df899901af7af9a34e4927c020000",
    ],
    [
      "ETag",
      "LlH3ALwc0iVFl04LC0rSow==",
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
      "Thu, 09 Sep 2021 18:14:32 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-118-1631211111899",
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
      "0000000002ff85546b4fdb3014fd2b91f705a43ee2f491b61262a5645b509bb2340595696a1dc72986242eb1c340a8ff7dd70905ca1e449512fb9e73efb9af3ea15b9e45688042bebe2b58fef8e94684a88698226bb83dbb7a884ea3f46431a7f797d767c1836bcb7c78740408ae5992a49b84d5a52872cae4603e6bac73516c482e441d1cd531eed571b7852dac9f5ebf0f44c99278ccb35ba05f2bb59183667317bcb116629d30b2e1b24145fa72dfbcb79a9b5cdc30aa64733f6613c2c8e607518f134189e2223b9acf40412159be6429e1096878a546e1e77ddf0d4ed2c61ac0f79c3242a92832a575810b2ab298af8bbcf48a064fa8d4f9e603cd9cb1330a8cd174ee05072b926af2ead020d2d81d6ac60a928a79c2963c5a69cb72b9b935bef8d3095840c135914cae8ccb6f8eef18c64a2a50b7328e8c6363e89d1afb6cd733e69ee7cc02e3e0f8d0f8ea4fe7e7c6c9620f03b2232615cf4ad1010913a6053f17d6fdb39f9a401488a88c4bdbec12dc33fb611cda34eeb53a616cb230ec857687b44293f6dbac1d858c004f69ef258b6422ebf7c38e195b36b6daac63b66ccb6a9bad0e3643cbeeb622dac7618463dca6685b43bf72aed829971b2179555c74e9bb81b30cfcb9371a064e99464c8a449d56e274126f752a481240ffc96babad5c4024dd29d70b1c7f380adc0ba71a8e315b13fa38bb83f188492219a0494e52a6583e1111140d9d4f676ee04ebde1181865c7cf770889063f9e5e09c1e3a6acb22adf287027d0a3e1e4bcd4b0035d90a42851f7d507b24ccbac9b561d77026c0d706b80db0dd334afd0765bfbb7f3a1ef0f172088e439797c678324bb6d4dff4bd4125f9e2af13b1518e9682f9af64e5db4fdb9855f0dc1c655b1d0f7b9e32f5075e5b398e52ca31f8f18804bc3c7ff1cbb2d0630ec31c4818d501c269a4a1d85e6ac9a6c9e96ea2bb6655bdd760f95e05cbdb7b5bad8deb550fbd01e59ca32f59c52b5c565ddb4a9902f2030c2407aaef715acbf01fb0f7ca947050000",
    ],
    [
      "ETag",
      "JZxdDdmBYUcvWhJTxI7srA==",
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
      "Thu, 09 Sep 2021 18:14:33 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-118-1631211111899"
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
      "0002ff8d50d16ac24010fc97ed631330ad04157ca862ad3488c686428bc8996cd268924def361691fc7bf7a2f4b9f770373b37c3cddc058e7995c008f679f6dda03edf65c86b0b42344dc1468e9a2a83e000b2ca4479ff111d3745ff7df5fc1a9cfafe70ee4f93de7a3c168589bfb05430ba409a639118187d5ea052258a4d95d4542c223ed7765e2cdf66f35928444989259651103c4d8219b4ce9f69b7ab8fffb26c5b070eb40f31458d558c3643ade980312f6c3da3caba40d750a36334d089bb8b4c53532b4de40ae37adec0f5fc47efc1b36b301c8ab2a058714e9588a38d8403265645483f520f3c11e80e4ad3b4db4f1d6d4bdcd0b6ddde4c9333a35969920806edebbd6b9229d9742ca95937e840ace4235f72beceed2f8b6170d0a5010000",
    ],
    [
      "ETag",
      "+ZUkSl4WPFKLv469G6Cd0Q==",
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
      "Thu, 09 Sep 2021 18:14:33 GMT",
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
      "02",
      "ff",
      "ed",
      "d35d6e82300000e0bbf4598960a8766fa0b021bf1a86d197a6401d2a14680129cbee3eb36bccef0edf3720594685c05d7da70cbc014934a4648adbaccdede3ead62219cb00fb2bbfe72458b4edb485cd671e5911d4198676d9a8717738b2c6b8cd93c94a245b7e417c1601f14cabacd9a0b60f6f872e5b09f3565bf9785f98e1820fb11adb61c88857b15d90b7b1e865742e0bc45cb4ffe88fc6e93e215d1543d56f84b3195827ada1424e618f985f865b7ada6dde97eb94a686d6edd328715452adb00d51c5ba1106229a5c32f5d229a8f4e77c9e9c54a39fb07d545e5efe2f3003746cae9c0a7c7d6e5fea08cdc05f7ddcc9863eff9b9470cac1cf2f47e0f43c19040000",
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
      "Thu, 09 Sep 2021 18:14:34 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-119-1631211111899",
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
      "5d6fda3014fd2b91f75a2010200109ad8ca62d12842d8456db34458eb949dd86388d1d2a54f1df77ed94ae55a5352f897dcfb9e7dc8f3c93075e6cc998243c7baca13a7cb917093923a06886b787fb5fd9d57e448507dee6b6a4dfa2d5f06a3a9920826b96a4bb3287961475c5408e37eb765689baa495102d4cd4ea7647adeed0e9f6bafaf14623244ac8d3052f1e907ea75429c79dce49bc9d0991e5404b2edb4cec5eef3bfb5ea7acc43d30253bef353b28233b9fa87ecd05a38a8b62b259a3835a4215c38ef21c3dfca36e93f3f7b9db9ceeda1982f79c01654cd485d2be30051345cab3ba3259c9f899189f6f3ec8da5ff8b3c86222af77455cd01d9c595baa68ac0e255897e16a69cd83cb55b89c46f35510af67d7fe72da9ead169b65b0b66eaffdd0b7144d72305c6b629d9b538007d4df8254bc30ea91bed6ca2f1d9a7f1c8c26a0b4842618bbf690763d7b94a489cb52cf1924a90d49e225ee803a89cd467de86f13a0c833a286450b51f4d2a1edd8f6361e8cec41dc1fbaddd873691af79907d0b36d9aba8c1ccfc853c5155c70590ac99b0e91db701ef971146e82d934f24d0929ad7375d118d305bcf5a8b04004fda7a6a38e72814abaddf320f2c3e92c9adff8cd8417905176583fe28c539a4b4034adb0790aaaa5d862c348305dfa17083613fb7e0a4a32fefd4c74cfb58b372d7fa54738406d5799375947e13cb832764e881b9ad706b26f3e488996efb036747dfc8348dcd2260bf9b1f1c39fa4b90a21850a0af6f934116c029fff6da7cd4730ee3eea4885675c1e26b50aaba059226eea7d61f7dc7ecf71880157ea43cc71dc53db740e9d117650a897929acdc74a1bb15abe823088f30f4cbb8e7f01a8d66b0b7b040000",
    ],
    [
      "ETag",
      "yjZgGv9ao8e8UWpaBTO6GA==",
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
      "Thu, 09 Sep 2021 18:14:34 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-119-1631211111899"
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
      "02ff8d92514fc23010c7bfcbf9e8880c1161090f03518803610c5f0c2165bbc1705d67db6990f0ddbd4e44a326ba87edeefabbeefeff76078f49168103cb64f554a0dc9eac504f4ce0a32a52ade8938b4c2158809aad88ec9e71ff74e2f15bd7ed0fa7afa86b4d7eefb6db44a8708d9c81b38338c13452e03cec20631ca92d1469c1b3459959a0b7b9294e037f30baa19c8bc8e4a399e7b91daf077bebd81831cd1625ff8fb6f9de828d58fa18a3c42c44334b2ec506433d303215e3798a15250a19a282122e1756521439934254a852b1ed56c56e9cdb35db3ccd568bc854844c2722237836a501410bcd525fbc904c681020cb9014c7e5fb99ca49542a31e1601434eae5805f019a2d4e525cfc0dd2c06b46e7f0811d3cf8ce312e8a4c1fa96befcefd6d3b32f573ab2b37e8fd209426ab8e483018f6a6813b1c1b6e7ed0ded96a546329c84985c644bb5a6f5e5c36aaefbe7685f19afee36859a00521a3ebd14f3438314b15eedf0042499c1d7c020000",
    ],
    [
      "ETag",
      "C/mR+QLmKAAHMSzet28mVA==",
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
      "Thu, 09 Sep 2021 18:14:34 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` = ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-120-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85546b6fda3014fd2b91f7a59578e4c12341421d83b48b44431702159a26708c43dd86388d9d56a8e2bfefc629b4acdb8a2291eb7bce3de7dad779410f2c5da31e8ad8e6b1a0f9eecb3d8f500d518937b03a7d9e99b7637dc1f26b3af2e6f391e94dbbcffd3e2058c912789b25b42e7891132a7ab3696393f322c339e7752854374cbd6e742cc334ca9fed3840143489c72c7d00fa9d9499e8359b07f1c686f34d4271c64483f0ed71bdf96436b39cdf532245f354b30932a2f989ea45c209968ca7fdd9141c1482e64bbac52c010f6fd475f4f5b47683e16d6303e0274628268417a92c7d4109c2d3986d8a5c5545bd17a47cbe7b415377ec0e436d3899f9e1d90a6f4bf2ea5cc3423b04356d054dc52ca14bb65e9599e5327bd02e83c93564c0c11d1654acb4dbef6ee06a479ad6d72eb4813fd24ee99eafcd7cdf9d86dad9c5b976154c6637dab7c509067cafa9902c55ae431c25b474fcbab3dec7032d0958828b2ab9ecea1d6cd8ba13c55197c4b6d58e629d46911d75dbd88a74e2b4686b1d510c3c5956572c9cf2b4dd72b06559b16d38ed8e6db78c96a11bb169c7e61a138760c7c26697983adad7d073ce241d319171c1aadd45b78117bacb3098f9c341e8aa36625c247254992b9b78ef53429300fa4f5ffb32cb38289547e5f9a11b0c86a13777abe918d30d26bbe923cc478c1341018d73bca592e6d77c0d9b866e26532ff426fe600c0c75e437078440bd9f2f6f847097a95d96ea1f5d8e2783b0d3520e0e90394e0a8579aa5e90d16803625ffb779941100c16208df31ceffec8413b1d45ff8b82c2aba8b2795444a5da21324fa20edaffdac3534370b92a2df463e6060b542d0534a6394dc9e7c3046095f8fc2371b8b000862b0b3a42420cb34b44a942725acd30db2af715dbecb6754b7d6224cee5879c619b87c32a6b9415e996a6f2b5a5eac2aa7d2b538538822009a3e77bfe15647f033413238032050000",
    ],
    [
      "ETag",
      "SwU2WL0YirMeDIVVD2IS7w==",
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
      "Thu, 09 Sep 2021 18:14:35 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-120-1631211111899"
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
      "02ff8d50c16ac24010fd97e935a1490aa50a1e622bad1044d37a2845648d631a4d76d6dd49c58affded958a4c7ee6177e6bd37c37b7b825da5d7d0875555ee5bb4c79b1279e68b1c5d5bb393c79076080120ab5294fb28dda6dfb3437ad0ef4fd1ad194fb3599a0e06a270c527360afa27d85458af1df43f4ea0558332a61a6a358b888fc6f7e3c9dbe879940bd0d0da03937996a5c36c04e7e03ab45c9addbf4616e700b6b4ca7183167581de83b1b4c582c73e9e538da93174d4da021d74e28e282db54659a25090304ea230bebf8b93d89f875e4f9435158a2bd2229ebf8a39606255e77490789088c076a524dd74f75707fb10be8a3b6f7fb9f8ca259e5bfc2e1c1e19ddd492d873e89d4517978fe49db32462db620085924f7ea9f8d29f7f0098fa8084c1010000",
    ],
    [
      "ETag",
      "q0AjAzQwAwnYD0/pIPLQAA==",
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
      "Thu, 09 Sep 2021 18:14:35 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "db",
      "6e",
      "82",
      "300000d07fe9b331dc43f7a6918052943106841782b502021d944ba1cbfe7d66bf31cf3f9c6f90634c86211bbf6a42c11b5873056ef1d6edccfd81571f743c192c94ad4732e65e93d62196d0dea67523bbe531ab62781c0e6c41467b09975d22eac695a095aa8e35f7673e1b885e3ff3b5e511f4a2d08d125e70d933954b502981d1ed1884521b2ce7ac13a5774dac51506e56d9fdd63ac2d512a5efbb49e86e7939dd358a4cacd714fafcfe589b221e69113b896937737912781a1054fa426593362f0ab623df9891ea07727e43e9649bb33fbd4b728cb62f2fff17d800b274152343563db7ab3a841bf0573f1bd78e3cffef49ce08033fbfc4a2ff6219040000",
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
      "Thu, 09 Sep 2021 18:14:35 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-121-1631211111899",
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
      "85536b6f9b3014fd2bc8fbd826e44948a468cd52ba444bc84648ab6a9a90712ed42d608a4da7aeca7fdfb569ba569556be807dcfb9e7dc074fe48e177b3221314fef6ba81e3fdd8a989c125034c5dbd122e774e10ce4b7932fd749b2e07f44ff64369d22826b96a47999414b8aba622027bb6d3bad445dd24a8816266a757bdd56d7e9e34b3fee788c440959b2e2c51dd26f942ae5c4b68fe2ed548834035a72d966227fb9b71f7a7659895b604ada6f356d9491f607aa9f33c1a8e2a298eeb6e8a096504590539ea1877fd47d7cf636779bd3bc9d22f88133a08c89ba50da17a660a248785a57262b993c11e3f3d507d97a2b6f1e5a4c64755e4405cde1d4da534523f5588275116cd6d6d2bfd804eb59b8dcf8d176bef0d6b3f67cb3daadfdad75b5f002cf5234cec070ada975664e3e1e507f0f52f1c2a887fa5a2b3f7768f97e309a80d2129a6034ea38b4eb76c671128f58e2f68771d2813876e3d190f6e30e1b0f60b08f8122cf881a162d44113b903863671875582f89063d378e5ce826d1de01c7753bc3c4a13d723825bf2baee09ccb5248de74885c05cbd08bc260e7cf67a1674a48689da9f3c6982ee0b547850522e83f351d74940b54d2ed5efaa117cce6e1f2d26b26bc8294b2c7ed3dce38a1990444d30a9ba7a05a8b3d368cf8b3b5778e6033b1efc7a024939f4f44f75cbb78d5f2177a8803d4769579936d182cfdafc6ce117149b3da401e9a0f52a2e51bac0d5d1f7e2112b7b4c9427eecbce09a345701245041c13e9e26824de0e3bfedb8f908c6dd471da9f08ccbc3a4566115344bc44dbdcfecde68e88e06c4802bf52e36767bc7b6e91c3a23e450a8e7929acdc74a1bb15abe803088f3f74dbb0e7f01c1d0ba567b040000",
    ],
    [
      "ETag",
      "7HmiaH64sK+BYffHizo3+A==",
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
      "Thu, 09 Sep 2021 18:14:36 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-121-1631211111899"
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
      "51",
      "4f",
      "c2",
      "30",
      "10",
      "c7",
      "bf",
      "cb",
      "f9",
      "e8489822c2121e40504900e718e1c11052b6dbd8e8d6d9761042f8ee5e27a25113dd437b77fb5d77ff7f77804d9287e0c02a895f4b94fb8b18f5b3093c5425d78ab642e40ac102d42c26d29dbb7a8e716bc32fed5d5a6c23bfefa671a743840ad69831700e1025c84305cecb01729621b505829759beac320bf4be30c5a9ef0d270f94672234f964361a757ba3011cad7363c8345b56fc3fda16470b52b1f230428979806696428a14033d343215cb0a8e35254a19a0820aae5ec45294059342d4a852b3afec9addbca6cd3cad769b482e02a61391133c9bd280a08566dc133b92094d02641592e2a85ab7544ec24a89098713bfd9a806fc0ad06c51c271f9374803af19ddc30776f2e03bc73251e6fa4cdd8f9ebabf1d47a67e1ed5effa831f84d264d519f187e3c1d4ef8e5dc32d4eda7b7b8dca95829c54684cb4eb8dd6cd6db3feeeeb9d305ed3771c2d4bb42060f47b3c261a9c887185c7379cea6d967c020000",
    ],
    [
      "ETag",
      "PWPtWeg8kl+1wjpvfTDPjg==",
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
      "Thu, 09 Sep 2021 18:14:37 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-122-1631211111899",
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
      "54",
      "fd",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "57",
      "90",
      "f74b2be503484842a4aacb52d621a52425a45df7a1c41843bd124cb1c99455f9df7786a66dd46e4591e07cefdd7b679ff380ee5816a1210a59725fd262fbe1170f5103518913583dcfdd8d2cecafa36ff476eb74ffccc8c4bdbf3c390104532c81d7794a9b829705a162b898b7928297392e386f42a1a6619a4da3d7314c433d03db06a2a0693c61d91dd06fa5ccc5b0ddde8bb712ce9394e29c8916e1eba7f5f6c66ce705ff458914ed43cd36c888f63baaa7292758329e9d2ce6e0a014b458d23566297878a646e1c7c3da2d86d7ad04c01b46282684979954bea004e159cc92b2a8aaa2e103aa7cbef8407367e28c036d3c5d78c1d10aaf157975ac61a1ed8386b682a66296d2258b562ab35ce677da677f7a011970708b05152bedfa8be33b9ab652a01fa5ae77a876aa8dbc33ed90ef7adac2f39c79a01d9d1e6be7fe7431d33edd1c60c07844856459653bc0614a95e5c7ad755f9fa822600936eae4b2aff7b031d0ed300efb241e74ac30d669180ec2be853ba14eec2eed4621c5c093aa7ac5c219cff408f74c6adba66919bdee20d66dcb2276af679301eedaa665471630bb06da35d0ef82497ac644ce05abb7175dfb6ee02c037fe18d478153b511e3329567b539d5c44b9f129a04d07ffadaa92ce3a0a4cecaf502c71f8d03f7caa9c76342134cb6f37b189018a782021a17784d252d2e78049b8666d3b91bb8536f34014675e6b33d42a0e1f7876742b0cdab5d96d55b69f5ba95fe1e7085d3b2426cea0f645868b76bfcbbc4c8f74737208b8b026fdf2eff66fd0a5f45b5c5",
      "273da4d4f6917910f5d0eee70e7e0d0437abd642970bc7bf41f5924f635ad08cbc3f4800ae12efff43ec6f2b80e1be828e9010c3dc12a1544841ebf965ebca7dcd36fb03dd3050052ee4ab9cd1b1f607a56aa88a744d33f9d8527d5bab7d53a9523c81200963e7b9de3964ff029cf924a72f050000",
    ],
    [
      "ETag",
      "GpIvtr9XAZehyE4zPcLIqQ==",
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
      "Thu, 09 Sep 2021 18:14:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-122-1631211111899"
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
      "02ff8d50c14ec24010fd97f1489bd092a89070102d4a428856b8681ab26d8752683b7577aa36a4ffee6c219e3cb887dd376fde4cdedb131cf32a8509c479f6d1a06eaf32e4170b42344dc1469e9a2a83e000b2ca4439f80e6ee2f91af70f381ccc476fa9372b0ed9742a0a93ecb1543039c12ec7223530793f41a54a9431555253b188b8ad6dbd58ad83c72014a2a4d412abcd7279375b06d039bf43db6d7dfcd748d43970a038c41d6aac12b41e6a4d074c7861e31955d605ba861a9da0815edc37324d4dad34912b8cebf9beeb5d8f3cdfb3e7763c16654189e29c2a116f5ec51c30b12a42fa9278e08b40f75092eefafbb3a76d880b8a2cfeabe7d95e7459386b19cdb326b167d03a1b9e5dde9375ce928875830e244a3ef929e773ddfd00c66be931c1010000",
    ],
    [
      "ETag",
      "+xE7bFTehDe0+F3Zd1Bljg==",
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
      "Thu, 09 Sep 2021 18:14:38 GMT",
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
      "0000000002ffedd34b7282300000d0bb64ad4e05c5a43b3e22886040a4c8868118188c0301945fa777afd36bd47787f70d124268dbc68f8ad1127c823111d0822c2c0e15ad2f7c8f0b927d10b874447c23aabc2b9849f6d3243c03a736dcade946b792624f8053e71ab5eeec6fc35cb92f9f95375c53a4e96273ea86d1b89c4ba90ebac9df38a25f6b676c5fb0ca763dd12176b22c5c8e784e4abc1e53a75fd58e25a53dcf2dd563556e4283652b39c8a86c1db7bbd2bbf507286b790209b331ab9e4de83687f8686272df20418b907fffe85aff1ce9d711065fb91a15e1103d0ac5f64e8bb7b7ff0bcc001d78d1d0362e5edbc5354233f0573f7e8c9cbefe2b346968037e7e0192b2b7d319040000",
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
      "Thu, 09 Sep 2021 18:14:38 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-123-1631211111899",
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
      "fd2b91f7953e92be2b55a32b61546a5396a620344d91edde04431a87d80115d4ffbe6b873210d2c897c4bee7dc73ee232fe45ee45b32264ca40f1594fb6f77929113029aa6e67610f22e7bbebcf971bd4de83e1d5d55a17c9a4c10210c4bd15d914143c9aae4a0c69b75332d6555d052ca06266ab85ea7e1f63baee79a67381a215141962c447e8ff45bad0b356eb58ee2cd54ca34035a08d5e472f776df7af45a4529ef806bd5faa8d94219d5fa42f57b2639d542e693cd1a1d540aca18765464e8e11f75cb4e3fe66e0aba6ba6087e141c28e7b2cab5f18529b8cc139156a5cd4ac62fc4fa7cf741d6fec29f450e9759b5cbe39ceee0c4d9524d63bd2fc0390f574b671e9cafc2e5349aaf82783dbbf097d3e66cb5d82c83b5737de187bea329cbc0729d89736a4f011e507f0b4a8bdcaa47e6da28bf7668fe79308680d20aea603c68f7a93b6c8f58c2063c19767a2c6903634336e8d10e6bf35117ba5b06147956d4b2682ef33e83be4bfbc3d8e30071b7e70d63367093b8ed8dba6c94246ed265e470429e4aa1e14ca8422a5177885c87f3c88fa37013cca6916f4b486895e9b3da9829e0bd478d0522e83f351d4c54485432ed9e07911f4e67d1fccaaf27bc8094f2fdfa01679cd04c01a26989cdd3502ee5161b4682e9d23f43b09dd8e531a8c8f8f70b313d372edeb5fc8d1ee1008d5d6ddf641d85f3e0a7b573445cd1acb290c7fa831468f9166b43d7873f88c42dadb3905f1b3fbc21f55508099490f3afa789601bf8fa6f3b6e3e8271f75147693ce3f27065547809f512095bef2bdb1b0cfb7d8f5870a93fc506bdf6b16d2687c9083bc8f56b49f5e663a5b558a5de4018c4f907b65d87bf1db8b1",
      "dd7b040000",
    ],
    [
      "ETag",
      "b7Rc4bzPYBWdfayg9VuRow==",
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
      "Thu, 09 Sep 2021 18:14:38 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-123-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d926d4fc23010c7bfcbf976244c908725bc18ca74094fc2484c0c2165bbc1a05b47db8984f0ddbd4e44a326ba17dbddf577ddfdffed11b649168103cb64b52b501eae56a81f4d30415570ade8938b4c2158809aad88dcef9e987abdf30e5eb5c9a7d2db8e98e7bb9d0e112a5c63cac039429c208f1438cf47c8588ad4160a5ea4d9a2cc2cd087dc14a7c1c41fde539e8ac8e4c359bfef76fb3d385997c68869b628f97fb4cd4f166cc47282314acc4234b3e4526c30d4be91a9589a73ac2851c810159470b9b092a2c89914a242958a7d5dabd88d9a7d6d9ba7d56e13c945c87422328267531a10b4d08c4fc49e644283005986a4382edf2f544ea2528909fd61d0a897037e0568b638e1b8f81ba481d78ccee1033b7bf09d63a928327da1bcfec8fd6d3b32f573ab3b37e8fd209426ab2e48e00f7ad3c01d8c0d373f6bef1e34aab114e4a44263a25dadb76e9a8deabbafb7c2784dff71b42cd08290d1f57848343831e30a4f6ffb2c15e87c020000",
    ],
    [
      "ETag",
      "wqXasxDFyF07lSrFkOaFIA==",
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
      "Thu, 09 Sep 2021 18:14:41 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-124-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8554fd4fdb3010fd5722ef1790fa95f42bad845857b22da8a42c4d60689b5a3b758a691a87d829aa50fff79d1d02746c23aa94d8f7debd77e7731fd19aa54b344484adee0b9aef3edc71826a884abc825db6fd4ec2627b7e6ea7ebe6b67b3e7ba0e46e74720208a658026fb284d6052ff2888a61386bac725e6438e7bc0e89eaa6d5a99bbdb66999eab10703200a9ac41396ae817e2b652686cd6625de5871be4a28ce9868447cf3bcdfdc5acd2ce7773492a279a8d90419d17c47f534e111968ca727e10c1c1482e673bac12c010f2fd425f97898bbc1f0a6b102f096451447112f52a97c418a88a7315b15b9ce8a868f48fb7cf58166cec41907c6781a7ac1d1026f1479716c6061548b9ab180a26296d0395b2e54643ecfd6c6677f7a011170708b05150be3faabe33bc6cbd6c2f859b45a6d6a9c1a23efcc38cce27a46e879ce2c308e4e8f8d2ffe34bc343edd1c60c0fe920ac9526d3ec024a1caf85383ddb7e7aa08588272199cf75b3d6cdaad0189493f8aed7697c42d4a884dfa5ddc26ad68d0a19d25a118785265d72c9cf294b4ac2eb6ec6edf365b566c0eba66bfd783d6da3135fbdd6e44487b8097568cf635f4903349cf98c8b8606593d1b5ef06ce3cf0436f3c0a1c5d468c8b449e95e65411af7d4a281240ffa96bafa28c83923a31d70b1c7f340edc2ba71c92095de16837bb873189712228a0718e3754d2fc822fa169e8723a730377ea8d26c0d0277f5921041afe787c2104bb4c7759ea379a05beeb7dd1062ac4154e0a0dd9961f68948157b4dfd7fe9d66e4fba31b90c6798e777fc4a09c5e47d1ff22a1f17a55daac244da4d4aa9575b0eaa1fdaf3dfc6a08ee58a985be858e7f83ca2d9fc634a769f4fe30015807deffafa8ee2d80e1e6828e90b086d98d845289725ace30db68f725dbb2cd9ed9411a9ccb37b1bed5a90e4be55019e986a6f2a9a4f2deeabea950219e411084d1f3f4b9ed7f034a5f7fb139050000",
    ],
    [
      "ETag",
      "ivXbUuvJJ8nk/v5JSwebjA==",
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
      "Thu, 09 Sep 2021 18:14:41 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-124-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff8d50c14ec24010fd97f1da26b61023241c0409d610945ae2c110b2b4d35a6877eaee144308ffee6c31c4a37bd89d79efcde4bd3dc1bed4190c615b165f2d9ae34d81bc74458cb6add8cad390b6081e20ab429405ebfdec39793c6c9397a48e32ee4d96efcbd1481436fdc45ac1f0047989556661f87102ad6a94315553ab59447c6c5c1f2d92e96c1a0b5053e680c56a3e7f18cfa770f6ae439b4db3ffd7c8faecc18eb631e66850a7e83c3486769872e4e259553715fa965a93a2854edc1185a1b65186c817c40fc2be1fdcf5823070e77e30106545a9e292b488576f620e985855317d4b3c084560ba5292e6dd7d10b8df857055d079fbcb85572e74dcfa77e1f8c8685f0d893d8bced9edc5e5849c7396446c5af42055f2c94f255ffaf30facb10431c1010000",
    ],
    [
      "ETag",
      "gtnkGJTDvbTOTmIdt3CQWQ==",
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
      "Thu, 09 Sep 2021 18:14:42 GMT",
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
      "02",
      "ff",
      "edd34b7282300000d0bb642d8c4001e98e8f7c140d2d55940d13682ca8184ca2103abd7b9d5ea3be3bbc6f80aa0a33567072c217f00a04522db99297ddccf1fa3a220ba174ee358bb9e3e48b8aa4aa66b1681bf3504a6e1ac54ddda888a48609f5aa47655d67dbfd660a0f76c2bec6841e7b3670cf29209afa2e5ab53bc53c78996b07428f028dfb14d98d7282f6adcc2efb7560523d374877160c8d355ae9eb79549e89db1433912dc29d2da463d2c7656ef9ef2f6f4e0ebb4b0fc9d8ba298ab8759f43f3b84ea43bf44363a8ddf6d3574ba826d78f76a906761408afdac84f4fff1798003c740dc5ac681edb35ddb226e0af7ec145871fff1d8c28a6e0e71750f757a019040000",
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
      "Thu, 09 Sep 2021 18:14:42 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-125-1631211111899",
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
      "000002ff85536b6f9b3014fd2bc8fbda849027448ad628a16bb4403620ada66942c65ca85b822936ddaa2aff7d17d374ad2aad7c01fb9e73cfb90f9ec81d2f53322709cfef1ba81f3fdd8a849c115034c7dbb539bafa6a67cebd34a7a967ca3f236fdf2c170b44f09625e9a12aa02745533390f37dd8cf6bd154b416a287897ad670d2b3a6236b68b58fed38489450645b5ede21fd46a94ace4df324decf85c80ba015977d260e2ff7e6c3d0ac6a710b4c49f3ada68932d2fc40f5732118555c948b7d880e1a09750c07ca0bf4f08f9a26e76f73f7393df473043f70069431d194aaf585299828339e37b5ce4ae64f44fb7cf5414277ebae228389a2399471490f7066a454d1583d56605c043bcfd8f817bbc05b469b9d1f87ab4bd75bf657bbeddef343e3fad20d5c43d1a400cd3516c6b93ef97840fd14a4e2a5568fdaeb56f9b9439bf7836909282da10bc6b3c1945af6c049b264c6327b3449b20124899dcc2674940c983386719a00459e16d52c5a8a72e0cc52874ea631409ac5e36166c5ceccb1e21164c934b3812593941ccfc8ef9a2b58735909c9bb0e91eb6013b97114ecfdd532727509196d0ab5ee8cb505bcf6a8b04004fda7a6631be50295da766ffcc80d96ab6873e57613de424ed963788f33ce682101d1b4c6e629a83d9162c388bff4dc3582f5c4be9d8292cc7f3e91b6e7ad8b572d7fa14738c0d6aed26f1246c1c6ffa2ed9c1057b46834e4a1fb20155abec1dad0f5f11722714bbb2ce4fbde0d7e90ee2a800c6a28d9c7d344b00e7cfcb79d361fc1b8fba823159e7179986c55580ddd12715def337b680f87339b6870addec5c696736a5b9ba3cd080728d57349dde663a59d58235f4018c4f9fbba5dc7bf8cf95a907b040000",
    ],
    [
      "ETag",
      "D/3VK8f9qs/6dM/sx3MUuA==",
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
      "Thu, 09 Sep 2021 18:14:42 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-125-1631211111899"
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
      "000002ff8d92dd4ec2401085df65bc2d818a5469e2052820092242894663c8da4ea1d876eafe4008e1dd9dad88464db417edccec37db3967770b2f491e810fcfc9fcd5a0dc1ccd51dfda608ccaa45af1a7a05c2138805acc995cf61e86edda1d5d54bb0aef575563b2bab73e3f6742850bcc04f85b88134c2305fee316729121b785949a2c9f9599037a53d8e22418f7873dce338a6c3e9c0e06adf6a0033be7d018092d6625ff8fb6a79d034b7a1e638c12f310ed2c85a42586ba6f652a91152956141919a282122e17e6924c212451852b15f7b85171bdba7becdae7acd96432a550e8847286a7131e103469918e69cd32c1634096212b8ecbf78acb49542ab1617f187827e5805f019e2d4e529cfd0df2c00bc1e7f081ed3df8ce898c4cae0f547770d3fa6d3b36f573abcb56d0f94128cd561d90a07fdd9904adeb91e59ef6dadb1b8d6a24899d54684d746b27678d53aff6eeeb0559aff93fbe96061d08055f8fab44831f8b54e1ee0de1919fa47c020000",
    ],
    [
      "ETag",
      "jGZNB0WoC/FseXv/uum36w==",
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
      "Thu, 09 Sep 2021 18:14:48 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-126-1631211111899",
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
      "54",
      "69",
      "4f",
      "db4010fd2bd6f60b48b9ec1c4e22211a826923254eea3820d456c9da1e9b055f78d7d008e5bf77764d80d0032b92bd3befcd7b333b9b2772c7d2800c89c7a2fb128aeda7dbcc2335028246b8ebcea63e5c7ac9991dd9bf0cb1e8dd5fccfa8f2727886092c56992c750e75959f8c087ab65232ab232a74596d531515d377a75bdd7d60d5d3efdc100891ce270cad23ba4df0891f361b3b9176f445916c54073c61b7e96bcec371f8c665e64b7e00bde3cd46ca20c6f7ea07a1a673e152c4b4f564b74507228d6905016a387576ae07d3eccdd60346944087e603e50dfcfca54485f98c2cfd2904565a1b292e113513edf7c90a535b5c6ae369eaf6cf768431349de1c6b946bfb454ddb6051218b61cd828d8cacd7f99d76e1cc67184107379403df68575f2dc7d25eb736da8fb2d56a8376aa8dec73ed30cbc4d656b66d2d5dede8f458fbe2cc570bedecfa0083f603e082a5cabc4bbd18a4f1e7064ffe3c5749a00295abe0da6cf5a8de6f0dbcd033fdb0dfee7a610b3cafef995ddaf65afea0039dc0038a3c21b32b164db165b4ad5353378dc0e8b53d436ffb001d130cb36b86dd7e0bc26ee07966d021bb1a792c988073c6f38cb3aac9e4ca99b8d6da7556f678e45aaa8c9096b138afccc922defa14582482fe53d74e4659864af2c426b66b39a3b13bb9b4aa21994244fdedf21ec724a4310744d3822620a0986501368d2ce6cb893b99dba32932d4c92ff6084e86df9f5e09ee36575d16ea4d96ae33b1bf28037bc4258d4b0579a83e08cdd12bd9ed6aff4e33729cd1354ad3a2a0db77312ca7d791f4bf4828bc5a5536f7923a916afb9571b0ea91ddcf1dfe6a04ef58a545bead2ce79a545b0e845040ea7f3c4c0856818fff2bf6f716c1787351870b5ce3ecfa5caaf8055433cc12e5be621b7d",
      "241b44810bf13e36d00d737f583287cc0809a4e2b9a4eadeaabec950c95f4018c4d1b3d5b9ed7e03d482f5de39050000",
    ],
    [
      "ETag",
      "TMLceVbmBNgNx2tP6qFM8w==",
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
      "Thu, 09 Sep 2021 18:14:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-126-1631211111899"
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
      "50",
      "d1",
      "4e",
      "c2",
      "40",
      "10",
      "fc",
      "97",
      "f59136a12828243c88a94282a855121363c871ddd6427b5befb6210de9bfbb87c467efe56e66677667ef08fbc2a430816d917f3768db8b1cf9c53f12744dc94eae9a8c43080059e5a24c06f3c3fcb1a7ef7b4fc36868d5553fbb7ecfa7535138fd859582c911b202cbd4c1e4e308465528365551635844dcd61e2f566ff1439c085151ea89d57ab9bc9d2d63e8823fd36653efff65f9ec02d8d136c10c2d1a8d3e436d69879a177e3da7aabac4d05163353a38894f85dc52532b4b140a13468351188d2ea341e4cfcd782cca92b4e2828c88d7af120e985895091d643de8c319cf5a46f76c49ba3b4ccf156979477e304b20b60d06a095fcd1bce05fdcfd00c33072ac80010000",
    ],
    [
      "ETag",
      "R2HwHM+cF+O515ra40f7Xg==",
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
      "Thu, 09 Sep 2021 18:14:49 GMT",
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
      "02",
      "ffedd35d6e82300000e0bbf4d91aa793ccbdd1a26d140830d8c017524a5b88012b207fcbee3eb36bccef0edf37609c8bb64dbbeb45d4e01d4c6cbd5bf2e549bf216b289487cea6eb4790419d7daacee2393d9aeb49d21232deb86d302745605fd9174dabbcb0efde9e68bf86d82083cf864be5e7274961ad7333dc584364c48523ea31ae8abce71479bda3a9eabbdb7d84632288ba1cab64c6594995245d3011d93b9e7bf056fb069952e11745c21586514ac3f6cc51a25dbc9d4fe7dba1cd82c016288d655ebf0a2b28e8bd8c073bb37133ce6e68900e1bf26370ace5d3d3ff0516408cba6c449b968fed9bed6eb7007ff5d36ed2e2f11f09d68806fcfc023f54158419040000",
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
      "Thu, 09 Sep 2021 18:14:49 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-127-1631211111899",
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
      "4fdb3014fd2b91f795be435f5235aa1246479b429a82a6698a6ce72635a471881d5085fadf77ed5006421af992d8f79c7bce7de4853c883c2663c244fa5841b9ff762f193921a0698ab7eecffdf67199a5f22adeaaebf615f3b6f9ddcd64820861588aee8a0c1a4a56250735deac9b6929ab829652363051a3d31d343afd5ea7db31cf703442a2822c5988fc01e95bad0b356eb58ee2cd54ca34035a08d5e472f776df7aeab68a52de03d7aaf551b38532aaf585eaf74c72aa85cc279b353aa8149411eca8c8d0c33f6accce3ee66e0aba6ba6087e121c28e7b2cab5f18529b8cc139156a5cd4ac62fc4fa7cf741d6dec29b850e9759b5cba39ceee0c489a9a691de17e05c04aba533f72f56c1721ace577eb49e5d7acb6973b65a6c96fedab9bbf402cfd1946560b9cec439b3271f0fa81f83d222b7eaa1b936caaf1d9a7f1e8c21a0b4823a180dda7dda19b6472c61039e0c7ba72c690363433638a53dd6e62317dc9801459e15b52c9acb1ce23e1fb8c0a3eea89d44ae7bca223ae0fd8821d8edd19e9bd0981c4ec87329349c0b554825ea0e91bb601e7a51186cfcd934f46c0909ad327d5e1b3305bcf7a8b14004fda7a683890a894aa6dd733ff482e92c9cdf7af584179052be5f3fe28c139a2940342db1791acaa58cb161c49f2ebd7304db895d1f838a8c7fbf10d373e3e25dcbdfe8210ed0d8d5f64dd66130f77f583b47c42dcd2a0b79aa3f488196b7581bba3efc41246e699d85dc6cbce017a9af0248a0849c7f3d4d04dbc0d77fdb71f3118cbb8f3a4ae31997872ba3c24ba89748d87a5fd9dde1a8dfb3ffaaa6a5fe141bb8a363db4c0e93117690ebd792eacdc74a6bb14abd813088f3f76dbb0e7f01e63d6ce47b040000",
    ],
    [
      "ETag",
      "4JyhqMlgoKdhsP0KbEhnWQ==",
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
      "Thu, 09 Sep 2021 18:14:49 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-127-1631211111899"
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
      "51",
      "4f",
      "c2",
      "30",
      "10c7bfcbf9e81619e080253c00a22e014418be1842ca761bc36d9d6d872e84efee75221a35d13d6c77d7df75f7ffb77b788ab3001c58c7d17381a23c8b50ddeb6086b24894a44fce338960002a1611b96df80fe7afd37270e12e764a4dcab2d888a8db2542fa1b4c19387b08634c0209cee31e329622b5f93c29d26c556506a832d7c5b93773273794a73cd0f964311af5faa3211c8c5363c0145b55fc3fda960703b67c3dc31005663eea5972c1b7e82b57cb942ccd1334252f848f122ab85a88042f72263837a9625af59669d90dab6ee9a7dde91099709fa99867042fe6342028ae5832e32f24136c02441592e2b07aefa81c0795121dba13cf6e56037e0568b6304e70f53748036f189dc30776f4e03bc7525e64ea445d8fee7abf6d47a67e6e75d5f3863f08a9c8aa13e2b9e3e1dceb8da79a5b1eb5f74b85722a383929519b68d59aedcb965d7bf775c0b5d7f41f4789020df0195d8fdb588113b244e2e10db31551c47c020000",
    ],
    [
      "ETag",
      "j3cV+xPyC/IUvttNyyuhrg==",
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
      "Thu, 09 Sep 2021 18:14:52 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-128-1631211111899",
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
      "ff8554fd6f9b3010fd5790f74b2be503480a49a4aa63095ba9529211d2aadaa6c480a16ef8aa6d5a4555fef79da1699b755b5124b0efbd7befcee73ca10dcd233442014dee2bc2b69fee8a00b510113881ddf37b7671ae59f985ab2fe7ccf2b79e609bc7d3534050c9e2382b53d2e645c542c247cb45276145556256146d48d4d6f4415b337a9aaec967301c029193349ed27c03f45b214a3eea76f7e29da4289294e092f24e58642ffbdd07bd5bb2e28e8482770f35bb20c3bb1fa89ea54588052df2d3e5021c549cb015c9304dc1c32b350a3e1fe6ee509c7512003fd090e0302caa5c485f90222cf2982615abb3a2d113aa7dbef9400b7b6a8f7d653c5bbafed11a6792bc3e563057f68b96b286a2629a92158dd632b25a951be5ab37bb840838b8c59cf0b5727d6e7bb6a2ac232cc85af959a96a8f28678ae54e94c30c8eab2c5dd75ef8cad1d9b1f2cd9b2de7ca979b030c588f081734af8dfb38488934fddc5ce7fd994a021660a409ae4cd5c0da401d06716086f1a07712c42a098241609ee05ea086c33ee94701c1c013327bcdc239b4ab3f0c8db8af9a66a4aa6660c683b8df33b5d01c1ab88f0dad1713cdec4518ed5ae891514126949705a74d83d1b5e7f8f6caf796eed8f2edba8c1857a99834e664116f7d0a281240ffa96b27a3b40025795a8eebdb9e35f69d2bbb1990294970b85ddcc388c438e504d098e18c08c22e8b089a86e6b385e33b33d79a02a33ef5f91ec1d1e8c7d32bc1df96759745fd461359c0ee4dc22b9c5635e0a1f940baaaab6d556f6b2768b76bfd3b93e579d60da863c6f0f68f185464f425fd2f3a35be5e354ef7ba1a926a2f2e0e5606dafddac1af85e08a355ae8fbd2f66e50b3e591983092871fcf1380ebc0c77f15fb6b0b60b8b8a0c305ac617c432e5542469a31a659edbe61eb43dd504d548399781733a1a9add7eb2a33928ce4e2b9a4e6dad67d93a18abf802008d3e73aee3788fe067bc4122738050000",
    ],
    [
      "ETag",
      "HqrJH1AnJN2UPrATyRtrkw==",
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
      "Thu, 09 Sep 2021 18:14:52 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-128-1631211111899"
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
      "00000002ff8d50c16ac24010fd97e9b1096d5210153cd4225610a9b19e4a907533a6d124b3dd9d2812fcf7ce46e9c943f7b0fbe6cd9be1bd6de150d4190c615be43f0ddaf3438ebcf42041d794ece431543b840090552e4a3e557a10bbc7e33e7a9a9a78ba3af44ebde568240aa7bfb152306c6157609939187eb550ab0a654c55d4d42c223e1b5fcf169f93e92411a2a2cc138bf57cfe3a9e4fe012fc0d6d36e6f0af91f412c09eb609eed062add17b3096f6a879e6e33955991243478dd5e8a013778ddc526394250a8509a3b81f46bd97288efce90f06a22c492b2ea816f17a25e680895599d049e2412c02db4149baebee6347fb1037947a7caf17f95e7a5b383e33ba0f4b62cfa177f67c75f946de394b22b60d06a0957cf27bc1d7faf20b9a81cdd2c1010000",
    ],
    [
      "ETag",
      "twmc92s+vj1/Gp2GSk6w6Q==",
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
      "Thu, 09 Sep 2021 18:14:52 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "41",
      "72",
      "82",
      "300000c0bfe4ac0c848931bd69b156114c2b82cd25833102a2104003d8e9dfebf41b75ffb0df201642360dbf96b92cc00be863480c61b86a3c75da345a902871b35a5c527b817b09436e9dd71bd66ddf139daf451556e8b5395b79c0e6b55ff89d42c351d67f8529722435bd301f6185308d1c98b670afa5c894c6ae3d87093c68c71f97d6f1d41fcd88e30b858ea66b46fd741f7c8eed1d9477d2c2797c9a298a155b05075479cbac24cddb75d36e4dc2d888df8a185577f6c12f015dd816dee57ab8aaf50c27fd646957b997dc3a4b15b3564c9240c09bf1f4f47f8101909dca6ad9f0ecb1dd46840cc05f7d7eed957cfc9fcab89635f8f905fd75c48519040000",
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
      "Thu, 09 Sep 2021 18:14:53 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-129-1631211111899",
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
      "00000002ff85536b6f9b3014fd2bc8fbda843c9a0091a2354be91629212b9056db3421dbb950b704536c324555fefb2ea6e95a555af902f63de79e731f3c9107516cc98430913dd6501d3edd4b46ce08689ae1edf5cf78b97606fbebb92d62a50ee5fe8b7ccca653448886a5e8aecca1a3645d7150934dd4cd2a5997b492b283893afd81d7e98f87fd41bf795ccf43a2823c5d8ae201e9775a976a62db27f16e266596032d85ea72b97bb9b7f703bbace43d70adecb79a36ca28fb03d5cfb9e4540b594c37113aa8155409eca8c8d1c33fea965dbccddd1574d7cd10bc171c28e7b22e74e30b537059a422ab2b93954c9e88f1f9ea8344fed29fc7169779bd2b9282eee0ccda524d137d28c1ba0ad72b6b115cadc3d52c5eac83249a7ff357b3ee7cbddcac82c8bafde687bea529cbc170ada975614e011e507f0b4a8bc2a8c7cd75a3fcdca1c5fbc134049456d00613a737a67db7e7b194393c75872396f680319739233a643dee9dc3f99601459e11352c5ac8c2e93bc0c64396b88e9726e76ce4258cba6ec2d33177dd2df346d023c733f2a7121a2e852aa5126d87c86db888fd240e37c17c16fba68494d6b9be6c8d3505bcf6a8b14004fda7a663131512959a762f82d80f67f37871e3b7135e4246f9217ac419a7345780685a61f334542bb9c5869160b6f22f116c26f6fd145464f2eb89343d6f5cbc6af90b3dc6013676b57993280e17c15763e784b8a1796d20fbf6839468f90e6b43d7c7df88c42d6db390eb8d1ffe20ed5508295450f08fa7896013f8f86f3b6d3e8271f75147693ce3f270d5a8f00ada2512a6de67f6c01b0ebc1e31e04abf8b0d5de7d4b6264793117650e8e792dacdc74a5bb15abd803088f30f4cbb8e7f01baebd6217b040000",
    ],
    [
      "ETag",
      "QZTLO72vQC/iTssypvBoqg==",
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
      "Thu, 09 Sep 2021 18:14:53 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-129-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f8b08000000000002ff8d926f4f833010c6bfcbf9169231276e247bb139744bf61f1663ccb274703026506c8b862cfbee5e714ea326ca0bb8bbfeaedcf3b407784af2101cd826f17389a2ba88512d74b04459a64ad2a7e0b9443000158b89648362a8e6b356c39d56d2da2e1e5cfbde8bbb5d2264b0c38c81738028c13494e03c1e206719525bc0d332cb37756680aa0a5df4fce5687a4779c6439d4f57e371af3f76e1689c1b43a6d8a6e6ffd1b63e1ab0e7db254628300f50cf5208bec7408db44cc9b2224553f2520428a186eb8558f0b2608273932aa6d5ec98967d69352dfdb43b1d22531e3095f09ce095470382e28aa54bfe4a32c12640d421298eeaf70b9593b056a2c3d1d4b75bf5805f019a2d4a52dcfc0dd2c03b46e7f0819d3cf8ceb18c97b93a53b7e359efb7edc8d4cfad063ddffd414845569d117f34713dbf37996b6e7dd2deaf14cab9e0e4a4446da2d568b5afaeedc6bbaf375c7b4dff719428d18080d1f518260a9c88a5128f6f96c32b7d7c020000",
    ],
    [
      "ETag",
      "aDpHtPO40ENys1bQYE6WSg==",
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
      "Thu, 09 Sep 2021 18:14:56 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-130-1631211111899",
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
      "0000000002ff8554696f9b4010fd2b68fb25957c70d8185b8a5237a1299283138cdba687ec653dd06d304bd9259515f9bf7716eab4ee15640976e7bd9937971fc81d2f366442129e7dada1da3dfb2212d221a06886b7d9bbfad2f1227b64070b77d62f2fb39bd7bb6fa7a788e09a25e9b6cca12b455d319093e5a29755a22e692544171d752dc7ec5aae63d9967ebcf1188912f274c68b3ba47f56aa94937eff10bc970991e5404b2e7b4c6c1feffbf776bfacc417604af68f63f6318cec3f11f52c178c2a2e8ad3e50215d412aa156c29cf758a8fd44df2e2d8778fd36d2f43f03d6740191375a1b42e74c14491f2acae1aaf64f2401a9dbf7c90853ff3cf63e37cbe0ce39335dd6af2fab941a57138748c352695f21c567cb3d696d5aabc335e45f32bb4a082cf54825c1b6f5ffb916f186ba950dddaf8589ba603c699310d2f8c631741682cc3d05fc4c6c9d973e3329a2faf8d97b74718d4be01a978d1288f69928356fda3bac19f4dd504aa50496b5c8d4c975a9e394ed264c452cf1926a90949e225a3217512938d0730d8244091a7b4f786450b510c2838a907963b309dc41a7a233375d9c861ce980e9967b9a30de035d864df21df2aaee082cb5248de5698bc8d82d85fc5d1323c9fc67e93464aeb5c5db4e27412bfea54982482fe93d75e5bb9c048ba5d4118fbd1f43c0edef8ed84cc20a36cb7f88a3392d25c02a26945b7a0a0ba121b2c1ab99e2f82389887d319329ab65f1f10924c3e3cfc24c4bbb2a9b26ade240eaeb047d3abeb46c301f486e67583ba6f3f886dda66d7b4bbd630b6ec89e54cac41cf34cdf764bfeffcdbf9348aa6b728885615ddfd66c324dd81a6ff256a836f4eadf8830a8be8688f9a8e4e2ed97fdae3af4370edda58e466e947b7a4bd8a20850a0af6f48821b8313cfdf771586504e332631c5c0bc571a299d4515805ed64f36da3be65db63d7b66dd2802bf587cd71bc430bb50fed11b650a81f29b5abdcd44d9b6af90842230e6418849768fd0ebb22dc8f4c050000",
    ],
    [
      "ETag",
      "gXuG38R272IS6L/pGgQHyw==",
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
      "Thu, 09 Sep 2021 18:14:56 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-130-1631211111899"
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
      "8d50c16e824010fd97e91512c1c456130fa51a6ba3a6a57a681a63561c280a0cdd1d3484f0ef9d45d3530fddc3ee9b376f26ef6d03a7b438c008f669f25da1aeef12e4370b423455c6469e920a83e000b24a44399824fed20f66e1793d59fbcbe14b187fdc5fc6635198e80b7305a306e214b38381d1670385ca51c6544e55c122e2bab4f57cb59ecea6a110391d2cb1da2c168fc1620aadf33bb4db95a77f8d6c5b078eb40f31468d4584d643a9e98811cf6d3ca3f23243d750a52334d089bb46a2a92a9526728571bd7ecff5067dcff7ec79180e459951a438a542c49b7731074cacb2902e120f7c11e80e4ad2b8bbcf1d6d43dcd0d6e2bf7a9eed6d6f0b839ad1bc6a127b06adb3ded5e51359e72c895857e840a4e4939f53bed6ed0fae86a8eec1010000",
    ],
    [
      "ETag",
      "6Dg2M2BGRvTDT2M9JRfY7w==",
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
      "Thu, 09 Sep 2021 18:14:56 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "4b",
      "72",
      "82300000d0bb642d8e9f504c772a604aaa154401374cc408418b1882409cdebd4eaf51df1dde03d024615515cbeb9915e01d747484fa499f949399d9a4ec642fd7874831c1c4f92af562e190a8b09c49e262fde46f165fdcee1a045da1fc880dbc008ae1b639e786d28e7b2e3d02316d75f763981a776f35f54dd51a08e5f59e3a9e421e0c443ea012ce37d668692fbd1a233d31836dc82f92d3417e85a28465885656adde90ff992b72975d94cd77c421e286356c6f846feae3997949a5f6bd66ce69971db27a5a15c7962758856e98951109161a6b0edbddadfff2f27f811e606dc905ab62fedc3ed611ea81bffab1ec4af6fc3f63f4791dfcfc02976589f919040000",
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
      "Thu, 09 Sep 2021 18:14:56 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-131-1631211111899",
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
      "3014fd2b91f7953ed2772b55a36bc3a8d6a62c4d416c9a22dbb90986340eb10342a8ff7dd70e6520a4912f897dcfb9e7dc479ec99dc86332214ca4f715944f5f6e25232704344df17611aa95185eb0f58f6b9fff9acfce83e1b7229d4e11210c4bd17d914143c9aae4a026bb6d332d6555d052ca06266ab85db7e10eba6ec735cf683c46a2822c5989fc0ee9375a176ad26a1dc59ba9946906b410aac9e5fef5bef5d06915a5bc05ae55ebbd660b6554eb13d5af99e4540b994f775b7450292823d85391a1877fd4989dbecfdd1474df4c11fc203850ce65956be30b5370992722ad4a9b954c9e89f5f9e6836cbd95370f1d2eb36a9f4739ddc38913534d23fd548073166cd6ced23fdb04eb59b8dcf8d1767eeead67cdf966b55bfb5be7eadc0b3c47539681e53a53e7d49e7c3ca07e0c4a8bdcaa87e6da28bf7468f971308680d20aea60346c0fa83b6a8f59c2863c1975fb2c6903632336ecd32e6bf3710f7a31038a3c2b6a593497394f3a6dd68bdbd1603c6c473d4efb11a31c22247491c987239792c309792c858685508554a2ee10b90a96a11785c1ce9fcf42cf9690d02ad38bda9829e0ad478d0522e83f351d4c54485432ed5efaa117cce6e1f2d2ab27bc8294f2a7ed3dce38a1990244d3129ba7a15ccb181b46fcd9da5b20d84eece2185464f2fb99989e1b176f5afe4a0f7180c6aeb66fb20d83a5ffddda39222e695659c843fd410ab47c83b5a1ebc31f44e296d659c8cf9d175c93fa2a80044ac8f9e7d344b00d7cfeb71d371fc1b8fba8a3349e7179b8322abc847a8984adf785dd190f46833eb1e0527f888dfbbd63db4c0e9311f690eb9792eacdc74a6bb14abd823088f3f76dbb0e7f01783427bd7b040000",
    ],
    [
      "ETag",
      "DTsLi7PbMKYNcZCAHR7Bpg==",
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
      "Thu, 09 Sep 2021 18:14:57 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-131-1631211111899"
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
      "92514fc23010c7bfcbf9e8169920c2121e06a21001618c276348d96e63d8adb3ed2484f0ddbd4e44a326ba87edeefabbeefeff760fcf691e810bab34792951eece12d43313f8a84aae157d0a912b040b50b384c846436d3c3928f8ac37405f9e5fec2683fb6da743840ad7983170f710a7c82305eee31e729621b585829759beac320bf4ae30c579e00f277794672232f964311a79dd511f0ed6a931629a2d2bfe1f6d4f070b3662e5638c12f310cd2c85141b0cf5d0c8542c2b38da4a94324405155c2d245294059342d854b19dba633bcdba73e998a7d56e13c945c8742a728217731a10b4d08cfb624b32a14980ac42521c57ef572aa751a5c484c349d06c54037e0568b638e5b8fc1ba481d78ccee1033b7af09d639928737da26e470fde6fdb91a99f5bdd7841ff07a13459754282e1b83f0fbcf1d4704f47eddd9d463595829c54684c746a8dd6d575b3f6ee6b4f18afe93fae96255a1032ba1e8354831b33aef0f006b8d16bb47c020000",
    ],
    [
      "ETag",
      "44sjArHplQCHeRr+/yNHKw==",
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
      "Thu, 09 Sep 2021 18:15:01 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` > ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-132-1631211111899",
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
      "000002ff85546b4fdb3014fd2b91f705a4d2e6d1b784586903742a294b5310daa6d6719c60c88bd8a1eb50fffbae1d5ae8d84615a9b1ef39f79c7b7d9d67f4c0d200f591cfa2c79216eb4ff7998f6a880a1cc1ee7c1479abe2cbd9303fff199cae42c3f87511ae8e8f01c1248be3248fe911cfca8250de9fcfea519195392eb2ec08121d19967964b42dc334e4afdbeb0191d3389cb0f401e87742e4bcdf686cc5eb51964531c539e3759225bbfdc693d9c88bec9e12c11bfb9a0d90e18d0f544fe28c60c1b2f4783e030725a7c5822698c5e0e1951af89ff773d7194eea11809f18a19890ac4c85f405294896862c2a0b9515f59f91f2f9e605cdec893df4b4e174ee78074b9c48f2f250c35cdb2e6ada128a0a594c172c58cac862913f6867eef41222e0e00e73ca97dacd85eddada8ea67d2f75dda2da89367046da7e8eb1a3cd1dc79e79dac1c9a176ee4ee757dae9ed1e06cc07940b962aeb1ef6632a6dbfb477fcfe5425010bb05205171dbd8d8daedef343bf43c2aed5f2439dfa7ed7efb4b0e5eba4d7a4cdc0a718784266572c9c42c37a9d5edb223e6976cd76470f2c4a89de0c740aa97a8669b6ba4633ecb642b4a9a155c1041d319e679c552d4637eed8b3179e3b778603cf566584b88cc5a832278b78eb53409100fa4f5d1b19651928c9f31a3b9eed0e86def8daae466442234cd6b347189210c79c021a1738a182169759004d4357d3d9d81b4f9dc10418eadcafb6088efadf9e5f09de3a575d16ea1f9d4da603afdd540eb6906b1c970af354bd20a3de02c4a6f6ef3403d71ddc82342e0abcfe2306e5b415fd2f0a0aaf5695cd9d22926adb95b9b76aa3cd8f0d3c350437acd2425fe7b67b8baa2d9786b4a029f9789800ac021f7f29b6b7567e886652870b58c3ec122e554841ab196689725fb12dddd4ad2e52e042bc8b196d637b583287cc48139a8a9792aa5babfa264325df812008a3e78c9d7388fe06aac3ee6f37050000",
    ],
    [
      "ETag",
      "UDgTwrJFCpGxdBwf11zHfw==",
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
      "Thu, 09 Sep 2021 18:15:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-132-1631211111899"
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
      "50",
      "c1",
      "4e",
      "c2",
      "40",
      "10",
      "fd",
      "97",
      "f1",
      "da464b0d91261c441ac43444aae8c110b2b4432db49dba3bd514c2bf335b88270fee61f7cd9b3793f7f600bbbc4a2180759e7d35a8dbab0c796e418ca629d8c8535365101c405699289f424abd713f9decfdeb31bfbdefd7b9b99d0f87a230c927960a82036c722c5203c1c7012a55a28ca9929a8a45c46d6debe9ec359c84b11025a596982da2e87e148570747e8756ab7af7af91e5d1812dad63dca0c62a41eba1d6b4c584a7369e51655da06ba8d1091ae8c45d23d3d4d44a13b9c2b89edf73bdbeeff53c7bee060351169428cea912f1e245cc0113ab22a61f89073d11e80e4ad24d777f77b40d71414b8bffea79b6b7bc2c1cb58ce65993d833689ddd9c5d3e9075ce928875830e244a3ef931e7737d3c012b9a5cfdc1010000",
    ],
    [
      "ETag",
      "JEod1D6dGz3/DtVWzbis4Q==",
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
      "Thu, 09 Sep 2021 18:15:02 GMT",
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
      "00000002ffedd34b7282300000d0bb642d8c8880e9ae01f93928816a2d9b0cd05404c490801a3bbd7b9d5ea3be3bbc6f90972515820ce78676e005c87c06d5525db10572ae87881e6cabf03e4595615478ebf23ec5bbaa3d17eb5441411d9779622c85cbfb30193d9362b770a7fd546b17f1d08c324a7b04e5525a63e2d4fefbfc941fa5098958ea7756581f55a077ce3ab3a3d07476953fef3094bb8b77d178cf6a37ae78c0957b97457bd30a7d236b3d9f683035fc44898dedebb8b5c720eeecfd0add4e6f5b522ea0e0573d9849147c31396ccc9aa18de60eadddb344c198dbcd7e549f9efe2f3001f4c68e9c0a727c6cd70d0827e0af3e1924a38fff88e69c72f0f30bdcf14b4719040000",
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
      "Thu, 09 Sep 2021 18:15:02 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-133-1631211111899",
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
      "00000002ff85536b6f9b3014fd2bc8fbda3c21e421456b94d2355a202b21ada66942b673a16e01336cba4555fefb2ea6e95a555af902f63de79e731f3c910751ecc98c3091feaaa13a7cba978c9c11d034c55b9aaf35fb7a003798fc59df9423ee2faaec7a3e478468588ae665061d25eb8a839aedb6ddb49275492b293b98a833b0edcec0b507c341f34ca653242ac892b5281e907ea775a966bdde49bc9b4a9966404ba1ba5ce62ff7bdc761aface43d70ad7a6f357b28a37a1fa87ece24a75ac862bedba2835a4115434e45861efe51f7ecfc6deeaea0793745f0a3e040399775a11b5f9882cb2211695d99ac64f6448ccf571f64ebadbd65647199d57911173487336b4f358df5a104eb32dcf8d62ab8dc84fe225a6d8278bbbcf2fc4577b959effc606bdd5e79a16769ca32305c6b6e9d9b538007d4df83d2a230ea5173dd283f7768f57e300d01a515b4c178dc77e960d29fb2848d7932b1472ce9036313361e519bf5f9d40167cf8022cf881a162d64d19f4c13e64e593c759c51ecc090c593914de3810d2eef2383ba2e399e91df95d07021542995683b446ec355e4c551b80b968bc8332524b4cef4456bac29e0b5478d0522e83f351d9ba890a8d4b47b15445eb85846ab1baf9df01a52ca0fdb5f38e384660a104d2b6c9e86ca977b6c180916be77816033b16fa7a022b31f4fa4e979e3e255cb5fe8110eb0b1abcd9b6ca370157c31764e881b9ad506f2d87e90122ddf616de8faf81391b8a56d1672bdf3c2efa4bd0a21810a0afef134116c021fff6da7cd4730ee3eea288d675c1eae1a155e41bb44c2d4fbccb6fb43d775880157fa5d6cec38a7b635399a8c9043a19f4b6a371f2b6dc56af502c220ce3f30ed3afe057c84ba377b040000",
    ],
    [
      "ETag",
      "amLtbKye6N8xLVp5cMArlQ==",
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
      "Thu, 09 Sep 2021 18:15:02 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-133-1631211111899"
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
      "ff8d926f4fc23010c6bfcbf976244c1061092f40a72c8e7f63c4184348d96e30dcd6d976e242f8ee5e27a25113dd8bedeefabbee9ea7ddc3539c8560c12a5e3f1728cab335aaa90e3c9445a2247d729e49040350b13591d1787517dd7726bbedabb49bf9fcc12e07d1b4db2542061b4c19587b88624c4209d6e31e329622b5053c29d26c596506a832d7c599ef39a35bca531eea7c3477dd5edfb5e1609c1a43a6d8b2e2ffd1b63818b0e52b0f23149805a867c905df62a01c2d53b2344fb0267921029450c1d5c25af0226782f31a556a66a351335b0df3dcd44fbbd32132e1015331cf089ecf6840505cb1c4e33b92092d02441592e2a87abf50390e2b253a74467eab590df815a0d9a238c1e5df200dbc61740e1fd8d183ef1c4b7991a91375e38e7bbf6d47a67e6e75ddf3ed1f845464d509f19da13df37bc389e61647edfd52a19c084e4e4ad4269af566fbe2b2557ff7f58a6bafe93f9612051a1030ba1e83588115b144e2e10d2ef3455d7c020000",
    ],
    [
      "ETag",
      "fObKfW9PwjxsE4pUYEyHfQ==",
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
      "Thu, 09 Sep 2021 18:15:03 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `id` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["INT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          { parameterType: { type: "INT64" }, parameterValue: { value: "15" } },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-134-1631211111899",
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
      "54",
      "61",
      "6f",
      "9b",
      "30",
      "10",
      "fd",
      "2b",
      "c8",
      "fbd24a6902214012a9eab294754c296909b4aab6293160a81bc0149b6e5195ffbe33346da3762b8a04e77befde3bfb9c47b4a6458cc628a4e97d4daacda73b16a20e2202a7b0ba5ec7c3e0cf794c2d7d44be6fae624fe49797c7c780a092c5715e66e488b3ba8a081f078b6e5ab1bac415634750e848d307479aa96b7d4d3ec3d108889c64c98c166ba0df0a51f271afb713efa68ca519c125e5dd88e5cfebbd877eafacd81d8904efed6bf64086f73e503dc958840565c571b000073527d592e49866e0e1851a879ff76b7729cebb29801f68447014b1ba10d21794885891d0b4ae9aaa68fc881a9faf3ed0c29ed9535f99ce03d73f58e15c9257870ae6ca2ee8282b682aa11959d2782533cb65b956be7af373c880835bcc095f29d7df6ccf56949504fdac55558f941365e29e2afb7cc75502d7b517be727072a89c79f3e042f972b38701e331e182168d6d1f871991969fb6d6797ba2928005d868934b4b35b136544761125a5132d48d305149180e43cbc07aa846a30119c421c1c013b27ac3c2052b0cad4f92be1eab9a1599866668ba3ad04ccb3047fd218e2d53334c82b146d0b6837e57549053ca4bc669bbbde8da737c7be97b813b9df876d34682eb4c9cb6e66413af7d0a681240ffe96b2bb39481923c2bc7f56d6f32f59d2bbb1d8f194971b459dcc3802438e304d0b8c23911a43a67316c1aba982f1cdf99bb9319309a33bfd821381aff787c21f89bb2d965d1bca5963968f477802b9cd50de2a1fd409a81b6dbcebf4b4c3c6f7203b2b8aaf0e6fdf2efd66ff04dd45a7cd643526d",
      "17f5f722136d7f6de1d74170b35a2d7419d8de0d6a973c92908a14d1c78304e026f1f13fc4eeb60218ee2be8700131cc6dc4a54a5491767e69deb86fd9baaaebc61035e04abcc90d2c737750b286ac48725288a796dadbdaec9b4cd5fc190449183bd771cf20fb179836748d2f050000",
    ],
    [
      "ETag",
      "kkd8UxMdi739eJyVdRtmQQ==",
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
      "Thu, 09 Sep 2021 18:15:03 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-134-1631211111899"
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
      "90",
      "4d",
      "4f",
      "c2401086ffcb78b44d2c3520241cc4104509912a46620859cab416da9dba3b0b12c27f77b61a4f1edcc3ee7c3cb379df39c2b6d06be8c1aac83f1c9ac3598e3cf54182d6956ce5a9495b840090552e64fcd9799dcdefb3f9e87c5ac4aeadb79d97877dbf2f844ddfb152d03b425660b9b6d07b3b825615ca98aac86916880fb5cf4793e7e1ed309142456b5f98ccc6e3ebc17808a7e07768b9acb7ff1a599c02d8d02ac10c0dea14bd86dad006531e797b56557589a1256752b4d0c04d2337e46a658842a984517c1946ed386a45fe5c75bb4296942a2e480b3c7b1271c0c4aa4c682ff6a025806942719a35f7ceefa831b16b00afedef5ee47b8b9f0f070746fb6848e459f4ca2ebe55de9057cee2888dc30052254bbe2bf83b3f7d01e72fa9c3c1010000",
    ],
    [
      "ETag",
      "3x7XUYJfYI+Qi3u6nk7VKw==",
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
      "Thu, 09 Sep 2021 18:15:03 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "59",
      "72",
      "82",
      "30",
      "00",
      "00d0bbe45b986197fe354d595c509180f687410810160d9b809ddebd4eaf51df1dde3788e298745dd8df4a72056f608e449d8ff9355b423466686b16295312b8623e0e1e5cf7d895ca60387758b0fbcda2bae79abdb6ba89f5a0b4fb61f618110bee92c7cbd44dbffcf7d1492bce97e98c32dd3447d56e6cb8941f646829ae045864fbc3056d5becb86b41251b6ed7a7b286ad40330a6a7aee2821a594cb93e50a98f9c1946709da34c946ba07899d7fd616c597d3b1db1fcbde154c83d44c6c2c49cad3c98e2a4df3edf3fa438595733e3afef5809a01f32f2fff1758003231da922ea4cfed92a2eb0bf0573fec67469eff21895ad2829f5f8e8c164419040000",
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
      "Thu, 09 Sep 2021 18:15:03 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-135-1631211111899",
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
      "000002ff85535d6f9b3014fd2bc87b6d0229494322456b9ad23652423620cda66942c6b950b704536cba7555fefbae4dd3b59bb4f202f63de79e733f782277bcdc923149797edf40fdf8e156a4e48880a239de9ea985b437c3c14f35fb959d5d7e51753f5e4c27134470cd92745715d091a2a919c8f13aeae6b5682a5a0bd1c1449d9e3be8f44edcde714f3fde6884440945b6e0e51dd26f94aae4d8b60fe2dd5c88bc005a71d96562f7726f3f1cdb552d6e812969bfd5b45146daefa87e2c04a38a8b72b28ed04123a14e604779811efe50b7e9e9dbdc5d4e77dd1cc10f9c01654c34a5d2be30051365c6f3a63659c9f889189faf3e48e42ffc596c315134bb3229e90e8eac2d5534518f155817e16a69cd838b55b89cc6f3559044b32b7f39edce568bf53288accd951ffa96a26901866b4dac53730af080fa5b908a97463dd6d75af9b943f37f07a309282da10d2643e784f63c679466e990659e3b483307d2d44b8703eaa60e1bf5a1bf4d8122cf881a162d45e98cbcace73a4e32028f25fde11012cf71d3c46174c8e889eb6ddd8cec8fc88f9a2b38e7b21292b71d229b701efb491cae83d934f64d09196d0a75de1ad305bcf6a8b04004fda7a6bd8e72814abaddf320f6c3e92c9e5ffbed84179053f618dde38c335a484034adb1790aeaa5d862c348305dfae7083613fb74084a32fef64474cfb58b572d7fa1c738406d57993789e2701e5c1a3b07c4352d1a0379683f4885966fb03674bdff8e48dcd2360bf9bcf6c3afa4bd0a21831a4af6fe34116c02efff6d87cd4730ee3eea4885675c1e26b50aaba15d226eea7d66bb8e3bf23c62c0b5fa3bd6c72d38b44de7d0196107a57a2ea9dd7cacb4156be40b088338ffc0b46bff1bfa5c37837b040000",
    ],
    [
      "ETag",
      "BtLs/W75xtCzfBGXtr4TLA==",
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
      "Thu, 09 Sep 2021 18:15:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-135-1631211111899"
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
      "6f",
      "4f",
      "c2",
      "30",
      "10",
      "c6",
      "bf",
      "cb",
      "f9",
      "76244cfe084b7831642a0920c278650829db6d0cdb75b49d8410bebbd78968d444f762bbbbfeaebbe7698ff092e53178b0ced25d89ea7095a279b2c10c75c98da64f21738de0001a9612c9b59fecd6fb602b94182c1a02a7d162eaf77a44e868838281778424431e6bf09e8f903381d416495e8a7c55650e9843618bf370369cdc532e646cf3c96234f2fba3004ecea5316686ad2afe1f6dcb93035bb99e61820af308ed2c85925b8cccd0cad44c141c6b5a962a420d155c2da44a96055352d6a852731bad9adb6eb8d7ae7d3add2e915c46cc6432277831a701c148c3f84cee4926b4095055488a93eafd4ae52cae94d8703809dbcd6ac0af00cd96641c577f8334f086d1397c60670fbe734cc8323717ea6ef4e8ffb61d99fab9d5c00f831f843664d5050987e3601efae3a9e59667edfd83413d55929cd4684d74ebcd4eeba65d7ff7f5565aafe93f9e51253a1031ba1e0f99012f615ce3e90de52fe0d37c020000",
    ],
    [
      "ETag",
      "lsAfqbwEjmrmDU3mePcUPA==",
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
      "Thu, 09 Sep 2021 18:15:04 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "Apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-136-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff85547f4fdb3010fd2a91f70f48fd91b469099510eb4ac62a410a690aabb6a9b51d2718d238c40ea842fdee3b3b14e8d846542939df7bf7ded9e73ea13b9ec76880084fef2b56ae3fdd0a821a88299cc2eaba935e8d66154ddb98f3874bfc7d5dcd1f87474780e09a25f1aac858538aaaa44c0e66d3565a8aaac0a5104d28d474bafda6d3ef3a1d473fdee1211025cb92339edf01fd46a9420edaedad782b1522cd182eb86c51b17a596f3f74da45296e1955b2bdabd90619d9fe40f53813142b2ef2a3d9141c5492950bb6c23c030fafd4987cdeaddde278d54a01fcc029c3948a2a57da1794a0224f785a95a62a1a3c21e3f3cd079afa67fe28b246935910ed2df14a9397fb1696d63668584b682ae1195bf078a9338b4571677d0d27e7900107375832b9b4aebff9a16fbd2e2dad9f956d77a9756c0d83136bb7ca38b06641e04f236bef78df3a0d27b30bebcb7c0703f6632615cf8df908938c69e3cf1b3c7e7fae9a801528d7c9c581ddc78e671f92841cd0c4ebf6486233423c72d0c35d62d34397b9316118784a57372c9c8b9c741ddb4e12cfb163dbed25dd0ec1ae4d7acca33de2b87142121cbbd4b3d1a6811e4baed809978590bcde64741d8e237f1185b360348c7cd34682ab4c9dd4e674136f7d2a681240ffe96ba3b35c80923eb17110f9e170148daffc7a48ce588ae97a7a0f6392e04c3240e312af9862e5b98861d3d0c5643a8ec6936078060c73f2175b8444831f4faf84685d985d56e68da651380e4e8d812de20a6795813cd41f68588057b4d934fe5d661886c33948e3b2c4eb3f72d04edfd5f4bf4818bc896a9b5b490769b56dd4d989fa68f36b03bf06823b566ba1cb991fce51bd14b284952ca71f0f13804de2e3ff8aedbd0530dc5cd0910a62985d2ab50a2d593dc37c65dcd7ecaeed1ef45c64c0a57a97f3bccef6b0740d5d91ad58ae9e5baaefadd9379daae40b0892307a8139b7cd6fda3c632039050000",
    ],
    [
      "ETag",
      "y2gVCUucg/aiivQaXyuYwA==",
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
      "Thu, 09 Sep 2021 18:15:04 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-136-1631211111899"
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
      "50c14ec3300cfd17736d25baa1894dda614315545483750c0e084d59eb956e6d1d1247a8aafaef3863e24c2ec97b7ecf7e4e0fa7aa2d6006fbaafc7268baab1279ed1f195a57b3954b536b11024056a5285db1785bbede60d26d47e526d58ff1d3daade77351d8fc131b05b31e0e15d68585d97b0fad6a506caa21d7b288b8d31e27ab97f83ece8468a8f0c46a9ba68b651ac310fc99763b7dfa97e56308e048fb0c0f68b0cdd167d0868e9873e2d7b3aad13586969cc9d1c2597c2e94869c56862814268cc693309a8ca351e4cfed742aca9a72c515b522de6e241c30b1aa33fa96f5e01a2e78d931da6743d2dd6271a948cb3bf2835902b1711840aee48f1e2afec5c30fbe6fb86580010000",
    ],
    [
      "ETag",
      "udAWBV4eIyU2gSLpKEOQuQ==",
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
      "Thu, 09 Sep 2021 18:15:05 GMT",
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
      "02",
      "ff",
      "ed",
      "d34b7282300000d0bb64ad8cfc0a745744a3a0f29341dc6442084591180845b1d3bbd7e935eabbc3fb0698102a04eaaf3565e01d8c58b1242279dcb49ddbe72215340f2f0fe338b33eb6e15bdc1e935d99f3c5282ac3739b3058a758862c0b222d9f9d3cb8babbf2ba493c13d53cdf4fabf8d2c047acdb9868a328ae9511c9f9438ff1702001b4d5e5bc710a79b51b123fcc48ff95aed814ddc9601e7c971ac3e0575352163a71824d0233c636b3cd784e115f86b06ca3c1b1e8a8c65a363f970a878aaad487bcb83297f12855d0beaf6fa40d04e54545b6087785e94a2f2fff1798007ae7a78e0a747a6e5775cb9a80bffaa81f397dfeb729ee68077e7e01b2f4298519040000",
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
      "Thu, 09 Sep 2021 18:15:05 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-137-1631211111899",
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
      "fd2bc8fbdabc212191a2354ae98a9690959056db3421632ed42dc1149b565595ffbe6bd374ad2aad7c01fb9e73cfb90f9ec91d2f53322309cfef1ba89fbedc8a849c105034c7db4db38a7c37fd5e24d1ed2ff7d1d9b883d1d5e57c8e08ae5992eeab023a5234350339db6dbb792d9a8ad64274305167309a7406e3d16038d08f3b9d22514291ad787987f41ba52a39ebf58ee2dd5c88bc005a71d96562ff7adf7b18f6aa5adc0253b2f75eb38732b2f789ead74230aab828e7bb2d3a6824d431ec292fd0c33f6a9a9cbecfdde574dfcd11fcc01950c644532aed0b533051663c6f6a9395cc9e89f1f9e6836cbd95b78c2c268a665fc625ddc38995524563f55481751e6ed6961f9c6fc2f522f23741bc5d5e78eb4577b959edd6c1d6babef042cf523429c070adb9756a4e011e503f05a97869d4237dad955f3ae47f1c8c26a0b48436184ffa633a70fbd3244b262c73474e92f52149dc64e2d051d267531bec34018a3c236a58b414653a75a6c32cb563c7b1ddd8a6531a27e0a4b19d52361ec37862f7c7e470421e6baee08ccb4a48de76885c877ee4c551b80b968bc8332564b429d4596b4c17f0d6a3c20211f49f9a0e3aca052ae976fb41e4858b65e45f79ed84579053f6b4bdc71967b49080685a63f314d46b9162c348b0587b67083613fb710c4a32fbfd4c74cfb58b372d7fa54738406d579937d946a11f7c33768e882b5a3406f2d07e900a2ddf606de8faf00791b8a56d1672b9f3c29fa4bd0a21831a4af6f934116c029fff6dc7cd4730ee3eea4885675c1e26b50aaba15d226eea7d618ffa8edd778801d7ea43cc19dac7b6e91c3a23eca1542f25b59b8f95b6628d7c056110e71f98761dfe",
      "02645d829d7b040000",
    ],
    [
      "ETag",
      "OuLTI8dKlbTjZ8w5O813VQ==",
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
      "Thu, 09 Sep 2021 18:15:05 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-137-1631211111899"
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
      "000002ff8d92dd4ec2401085df65bc2d910af2d3c40bd0aa248008f5ca10b2b453286e3b75770b22e1dd9dad88464db417edccec37db396777074f49168107f364f15ca0da9e2cd0dcdb608cba9046f327a74c233880462c987c8d5f7cd9a4616d9556a35355f8eb38a2cdc505133a5c622ac0db419ca08c34788f3bc8448adc16922cd26c56660e986d6e8b9360dc1bde709e5264f3e143bfdfe9f67dd83bc7c64818312bf97fb44df70eac683ec618156621da5972452b0c4dcfcad422cd255634152a440d255c2e2c1415b9504415ae54dc5ab3e2366aee996b9f56bbcda4a450988432861f263c201832428e69c332a1c1802a43561c97ef359793a85462c3de3068d4cb01bf023c5b9c489cfd0df2c04bc1e7f0811d3cf8ce89948acc1ca9ebfe5de7b7edd8d4cfadae3a81ff83d086ad3a22416fe04f82ce6064b9e9417b776b508f14b1931aad896eb5de3a6f36aaefbe5e92f59affe31955a003a1e0eb719b18f0622135eedf007a8b78af7c020000",
    ],
    [
      "ETag",
      "zfxEl7oN3jm0d/ruEvfdow==",
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
      "Thu, 09 Sep 2021 18:15:11 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `purchase` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["STRING", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "apple" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-138-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8554fd4fdb3010fd5722ef17904abfd28fb412621d64ac5349214d41dd87da8be304431a87d86142a8fffbce0e053ab651456acef7debd77f6398fe49667111992902777252b1e3edc8890d4085390e0ea28b9be6f7c530e5c2f169de9e557a7f925585c1c1e22826b9684759eb20329ca8232399ccfea4921ca1c0a210eb0d041cb760e5a3dbbd56ee99f33182051b2349ef0ec16e9d74ae572d8686cc5eb891049ca20e7b24ec5fa79bd71df6ee485b86154c9c6ae66036564e31dd5a35450505c6487f3193a28252b966c0d3c450f2fd428fcb85bbbce615d4f107ccf29034a459929ed0b4b5091c53c290b53950c1f89f1f9ea85ccdc897b1c58c7d3b917ecad60adc9ab7d0ba4b50d6ad60a9b8a79ca963c5ae9cc7299df5a9ffde91966d0c135482657d6d517d777ad97a595f5a36c366d6a1d5923efc4daad32f6acb9e7b9b3c0da3bdab74efde9fcdcfab4d8c1a0fd8849c533633e803065daf8d3068fdf9eab268042e52ab9ec377bd0729a83300efb3476ec6e183759183a61bf0b76d8a4830eeb442103e4295dddb02013598b529b76e2a8c9ba7d87f6c3187a1d88bad0edc476e4745a76047dc706209b1af95570c54eb8cc85e4d526932b7f1cb8cbc09f7bc7a3c0356dc450a6eaa432a79b78ed53619308fa4f5f1b9de50295f4898dbdc0f547c7c1f8d2ad8664c212a00fb33b1c931852c9100d05ac9962c5998870d3c8f974360ec6536f34418639f9f32d4292e1f7c71742f0909b5d56e69fcc027fec9d1a035bc425a4a581dc572f0472f44a369bdabfcb8c7c7fb44069280a78f82387edf43a9afe170983375165732bd9225a6d1bb577a21ed9fcdce0532378c72a2d723177fd05a9967c16b38265f4fd6142b049bcffadd8de5b04e3cd451da930c6d9a552abd0825533ccd7c67dc5b6f1e9f5880117ea4dae6bb7b787a56be88a6ccd32f5d452756fcdbee954299f4198c4d1f3ccb96d7e033bfc285239050000",
    ],
    [
      "ETag",
      "Aghv/Zt8ahYY4OVJ80HTYQ==",
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
      "Thu, 09 Sep 2021 18:15:11 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-138-1631211111899"
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
      "90",
      "4d",
      "4f",
      "c2",
      "40",
      "10",
      "86",
      "ff",
      "cb",
      "78b44d2cc4a69070105385d810ac72308690a50cb5b4dd59f7038384ffee6c31c4a37bd89d8f6736ef3b47a82bb98121acabf2d3a13e5c95689f7d90a3718d35fc2892062100b4a264f2d69532fe8eebda3dbc25aa79ba8ee7e349391a31618a0f6c050c8fb0adb0d91818be1f418a16794cb4e4a465c81e94cfa7b3d7f431cdb9d0d2c617668b2cbb1b67299c82cbd06aa5ea7f8d2c4f01ec689de31635ca02bd06a56987859d7a7b46b4aac1d090d3051ae8e0ae516a724a68a2902b61d44fc228ee47bdc89f643060b2a142d88a24c38b17160796ac6872fa627bd0634077213bdd76f7deefa833b1ef00afed6f2fbef422df5bfe7e383e5834734d2ccfa057767356794f5eb96547563b0ca010bce44965cff9e907d2eada9dc1010000",
    ],
    [
      "ETag",
      "5ugn6z6kkuFY8plK+6PBHg==",
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
      "Thu, 09 Sep 2021 18:15:11 GMT",
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
      "0002ffedd34b7282300000d0bb646d1df9184977a6b18084a0c858e98601898288040854e8f4ee757a8dfaeef0be417c3cf2b68d6455f01b780543aca2e971ea080393afac5249a6a6575ffa81169b9f6b1b5b569df6033dd71beab21e3b818c56917e61963cd3d2c08b9ebd175e8a0e5885e2cd4124f6220f16e160b14056bb32b4ed2afbf0b18966b272b70964e44e930daf47dfe994f5a828901a626beb16d4051b5d4e974952bd187277a5e8e484f06006ed5a399fe60b9f24ab4e932169eb21511b4becf706dc29b9dbb7bd9877325eceb46539924d96b30e79fae5206fcdf4e9e9ff0213c0ef226f781be58fedda1ca109f8ab1fc941f0c77fcce38637e0e7170ffe5f2f19040000",
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
      "Thu, 09 Sep 2021 18:15:12 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-139-1631211111899",
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
      "6f9b3014fd2b91f771cd8390168814ad514a17a486ac84349ba60919e742dd124cb1495555f9efbb364dd7aad2ca87807dcfb9e7dc479ec93d2fb7644c529e3f34503f7db913293921a0688eb75fe76ef02837d1dc5afcb4f69bdca9d99c5d4f2688e09a25e9ae2aa02b45533390e3f5aa97d7a2a9682d441713752ddbeb5a67b635b4f4e37a1e122514d9152fef917eab5425c7fdfe51bc970b9117402b2e7b4cec5eeffbfb61bfaac51d3025fbef35fb2823fb9fa87e2b04a38a8b72b25ea18346429dc08ef2023dfca36ed3f3f7b97b9cee7a3982f79c01654c34a5d2be30051365c6f3a63659c9f899189f6f3ec8cabff267718789a2d99549497770d2d9524513f55441e7325a2e3a4178b98c16d3385886c96a36f717d3de6c79b55e84abce66ee477e47d1b400c3ed4c3ae7e614e201f5b720152f8d7aacafb5f24b87828f83d1049496d006136770462d77e0a559eab0ccb54fd36c0069eaa6ce29b5d301f34630daa6409167440d8b96a24c2dd71e798e9b0cbd2124a3d1d04e5c8f42421d0ba8739659a7b6470e27e4b1e60a2eb8ac84e46d87c8260a623f89a375389bc6be2921a34da12e5a63ba80b71e151688a0ffd474d0512e5049b73b08633f9acee2e0c66f277c0539654fab079c71460b0988a635364f41bd105b6c1809a70bff02c166623f8e4149c6bf9f89eeb976f1a6e5aff41807a8ed2af326ab380ac2efc6ce1171438bc640f6ed07a9d0f22dd686ae0f7f10895bda6621d76b3ffa45daab0832a8a1649f4f13c126f0f9bfedb8f908c6dd471da9f08ccbc3a4566135b44bc44dbd2f6cfd331a1003aed587d8d0768e6dd3397446d841a95e4a6a371f2b6dc51af90ac220ce3f34ed3afc0578938c3f7b040000",
    ],
    [
      "ETag",
      "+H8IwsWRH1MX1vWg7rcHcQ==",
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
      "Thu, 09 Sep 2021 18:15:12 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-139-1631211111899"
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
      "ff8d926f4f833010c6bfcbf9962543e77424bed81495844d65f8271ab37470205a386c8b6659f6ddbde29c464d94177077fd5db9e76997f054542978302ff2e706d5622b477361830875238de64f4d954670008dc899ccc7a1baea1dfb7576dd95230aa29b13fff6f5e080099d3c6029c05b4256a04c3578774ba84489dc96906cca6ad6660e98456d8bd3380a26279c9794da7c721986c351e8c3cad934a6c28859cbffa3ed7ee5c023cd23cc506195a09da556f4888909ac4c2dca5a624753a312d4d0c2ed42aea8a98522ea70a5e3ee0c3a6e7fc7dd76edb33f1830292911a6a08ae1cb290f08868c9011bdb24ce833a0da901567edfb85cb45da2ab1613089fbbd76c0af00cf961512677f833cf083e073f8c0d61e7ce744494d6536d4717836fc6d3b36f573aba361ecff20b461ab36481c8cfd693c1c9f5bee7ead7db430a8cf15b1931aad896eb7b7bfbbd7efbefb7a48d66bfe8f6754830e2482afc76961c0cb84d4b87a0341ee7d6e7c020000",
    ],
    [
      "ETag",
      "gMLrV4FEpfW0lBoIRXGEZw==",
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
      "Thu, 09 Sep 2021 18:15:16 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `date` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["DATE", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "DATE" },
            parameterValue: { value: "2020-02-15" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-140-1631211111899",
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
      "ff8554fd6fda3010fd5722ef9756e22381103ea4aa63906e48347421b4abb609ece442dd8698c60e1babf8df774e4a5bd66d4548897defdd7b773ee781dcf134223dc2f8f23e876cfbee56305221a0e81277a7629c4237faf5c5717fdea50ebb3c3fdb6cfa272788e09a25e96a9d40558a3c0b41f666d3da3213f99a6642543151d5b2cdaae534ad86a57f9d6e1789129278ccd33ba4df28b596bd7a7d2f5e5b0ab14c80aeb9ac8562f5b45fdf34eaeb4cdc42a864fd50b38e32b2fe86ea692242aab8484f665374904bc8e6b0a23c410fcfd488bd3fcc5de374555b2278c343a06128f254695f98221469cc9779566425bd0752f87cf142a6eed81d04c66032f382a3055d69f2e2d8a0d2d82f2ac6028b8a7902731e2d74643e5fdf1967fee41c23e8e0864a900be3ea93ebbb86b188a88285f12d37cd66689c1a7d6f681c661879c6ccf3dc69601c9d1e1b1ffdc9ecc2f8707d8041eb1148c5d3c278405902daf4637347afcf5413a842236570de361d6a75cc2e8b593b8c3bcd168b4d60acc3da2dda6466d8b5c18e1850e4299dbd60d154a4363826d84ec43043d361d0a0ad96d5615da7cd5a96134651a3edb423bb417615f223e30a865cae85e46583c9953f0adc79e0cfbc413f708b32629a276a589ad345bcf4a9b04804fda7ae9d8e72814afab4465ee0fafd4130ba74cb0119c39286dbe93d8e484c130988a6195d8182ec5c44d8347231998e82d1c4eb8f91519cfac51e2149efebc33321d8ae8b2eabe24986ba80dd8b849734c90bc0a67c210db36156cd46d56a91ddaef2ef4c7ddfef5fa33acd32bafd23861539b6a6ff45a7c017abd2e95ed7225aedc9c5c1ca21bbef3bfc57085eb1528b7c9eb9fe3529b77c882183347c7b9e105c04defe54ecaf2d82f1e2a28e54b8c6f10da556093328c798af0af725bb894fbb450a70a65ec5ec4e6b7f5e3a87ce082b48d56349e5b52dfaa643b97c026110a7cf1b791f31fa1b253bf5c838050000",
    ],
    [
      "ETag",
      "SoLne9dzX6Exkn6bVMFvvA==",
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
      "Thu, 09 Sep 2021 18:15:16 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-140-1631211111899"
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
      "90",
      "4f4fc24010c5bfcb78b48d14d4080907318d129068914431842c65a885b6b3ee4ef963c37777b6184f1edcc3eeec9bdf6cdedb0a3669b1840e2cd2e4b34473384b909f5d11a12d33b672682a2c8207c82a11f262ab2783e9e3f8eabcf13a684ddff6ebe02bdc75bb42d8f80373059d0a5629664b0b9df70a0a95a38ca99cca8205e28376f7fee825bc0f2311725a3a6134190e6f7bc3108edeefd07cae37ff1a991d3d58d322c2151a2c62741eb4a135c6dc77f1acca7586bea5d2c468a186eb4662a8d4ca10f9a2f8c165c30fae5b413370eba6dd1632a358714a85c093b19803265659443b89074d014c5d4ad255bd6f456ed521b635e0bcfddd0b5c6ff6f360efc0689f0c893d8bce59e3e4f28e9c7396446c4af42056f2c90f299feec76f86995835c1010000",
    ],
    [
      "ETag",
      "/vpUKZMS5+0XK3ZYxj1zEw==",
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
      "Thu, 09 Sep 2021 18:15:17 GMT",
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
      "0000000002ffedd3cb7282300085e177c95a180511e84ea00691702916850d83180424080955b0d3772fd3d7a8ffe66ccfe6fb06699661c692fe76c50d7803632aa87cc6ef5a45331e97da1da629485cf5e7730aa9a7285f4cce24d82d5bd391ed2cdc4abda1cdc566bf350b9144b47a725cc4b8308ccce644c38d872a475ff9c7ec5135d8bd59f6a1b00a8a62418a49bd92c6b9393a47951839ac83d3e0a3bbae209d419b05b54849aeea46d7214431ec1a7720e947ed31ea3ec3f5672a71090cbccdd5d7164ea32d498fdecd7c611936a7ef772e44b6e686e5e520d4d36db6366582fc28e05fbdfabf8119c0435b52cc9272d22e4aaa3a037ff4937e6cf1e45fc329c514fcfc02bb24440e19040000",
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
      "Thu, 09 Sep 2021 18:15:17 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-141-1631211111899",
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
      "536b6f9b3014fd2bc8fbb82684e60591a2354b691b29211b9076d33421db18ea1630c5265355e5bfefda345dab4a2b5fc0bee7dc73ee832774cfab14cd10e1f943cb9ac74f7782a013c414cee1f6eb72787df739603baf25b9bc6ca2c5c58f72319f03826b96c4655db09e146d43999ceda27ede88b6c68d103d48d473464ecf990c9d53473faee70151b2225bf3ea1ee8b74ad57266db47f17e2e445e305c73d9a7a27cb9b7f7a776dd883b4695b4df6ada2023ed0f54bf148262c54535df45e0a095ac49588979011efe515372f636779fe3b29f0378cf29c3948ab652da17a4a0a2ca78de36262b9a3d21e3f3d5078afcb5bf8c2d2a8ab6ac920a97ecc44ab1c2897aac9975116e37d62ab8d8869b45bcda0649b4bcf2378bfe72bbde6d82c8bab9f243df529814cc70adb975664e011c403f6552f1caa8c7fa5a2b3f7768f57e309a00d29275c1643a9860c71d782423539ab9c331c9068c10974cc7784806d41bb1514a18069e11352c5c896a9c7a8e3bf146091967c30450e384387492507784a7ee24cdbc818b0e27e84fc3153be7b21692771d4237e12af69338dc05cb45ec9b1232dc16eabc33a60b78ed51418100fa4f4d071de5029474bb5741ec878b65bcbaf6bb09af598ee963f40033ce702119a07103cd53acd988141a8682c5c63f07b099d8b76350a2d9af27a47bae5dbc6af90b3d86016abbcabc511487abe0d2d83922ae71d11ac8befb403558be85dac0f5e13720614bbb2ce8fbce0f7fa2ee2a64196b58453f9e26804de0e3bfedb8f90086dd071da9e00ccb43a556a10deb96889b7a9fd943673a9a9e22036ed4bbd8d89b1cdba673e88cac64957a2ea9db7ca8b4136be50b088230ffc0b4ebf017bdb16bbf7b040000",
    ],
    [
      "ETag",
      "BC3Vj+NeU9ubgsGrSAFXmA==",
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
      "Thu, 09 Sep 2021 18:15:17 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-141-1631211111899"
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
      "02ff8d92514fc23010c7bfcbf93a120688b08487a15349c640183e680829db6d0cb775b41d0409dfddeb44346aa27bd8eeaebfebeeff6f0ff092e42158b04ce24d89627f11a37ad0c10465992a499f82e712c100542c26721dda4fde63bd192c1b3bffd5d9eecad170b3ebf58890c10a3306d601a204d35082f57c809c65486d014fcb2c5f5499016a5fe8e2d49f0cbc3bca331eeadc9bb9aedd771d381ae7c69029b6a8f87fb4cd8f06acf97282110acc03d4b31482af3150032d53b2ac48b1267929029450c1d5422c785930c1798d2a35b365d6cc76d36c98fae974bb44a63c602ae139c1b3290d088a2b964ef88e64429b005185a438aade5b2a2761a5448703cf6fb7aa01bf02345b94a4b8f81ba481578ccee1033b79f09d63192f7375a66edd91fddb7664eae75637b6effc20a422abce883f183a53df1e8e35373f69efef15cab1e0e4a4446da2596f752eafdaf5775fafb9f69afe632951a20101a3eb719f28b022964a3cbe01b60b88db7c020000",
    ],
    [
      "ETag",
      "jdAZNV03cb2wTzEvwuOMqw==",
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
      "Thu, 09 Sep 2021 18:15:19 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `stamp` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["TIMESTAMP", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "TIMESTAMP" },
            parameterValue: { value: "2020-02-15T12:13:14.000Z" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-142-1631211111899",
    },
  })
  .query({ prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b08000000000002ff85546b6fda3014fd2b91f7a5d5803c7823555d46b335120408a11ddd26701c87ba0d318d1d2654f1df779d94b6acdb1a2125f63de7de735f3ca27b9646a88742b67ac869b6fb70c743544154e215dc7efcb61d79c16472b39bea3c0e92cbb96f4f26676780608a25f07a93d0aae07946a8e8cda6b555c6f30dce38af82a3aad9b0aa66ab6e5aa67a3add2e10054de2014bef817e2be546f474fd10bcb6e27c9550bc61a246f8faf95edf5afa26e3779448a11fc7d4218cd0df897a9e708225e3e9d96c0a0a7241b3055d63968086176a147e3af65d63785d5b0178cb08c584f03c954a17b8203c8dd92acf0aafa8f7880a9daf3ed0d41938fd40eb8f665e70b2c46b455e9e6a58688743455b4252314be882454b65592c36f7da177f34040b28b8c5828aa5767de9f88ea62d8504754bed476e1875a29d6bb677a11dbb703d6de679ce34d04ece4fb5affe6836d63ecf8f30a03da242b2b4501ee030a14af55375ddb74d55042c4149695cb48d16363b46378cc336893bf566181b340c3b61bb89eba141ba0dda88428a812795f78285539e4661dc889aa413932822d096769386c4b4acb8d5e9b4b1694561141b6164a17d05fdca98a4174c6cb8606585d1b5ef06ce22f0675edf0e9c228d18e789bc28c5a9245eeb94902480fe93d75e59198748aa5dae1738bedd0fdc2ba79c90015d61b29b3ec08cc4381114d038c36b2a6936e411140d8d47533770479e3d0046d1f6f1012150effbe30b21d86d8a2acbe28d0277083db287e342c301748593bc406dcb0f641996513560949b8169f5cc7acf6cd40cc3b841fb7de5dfce6ddfb7e720086719defd6183245b0d45ff4bd4025f9c4af107152652d19e351d9d5a68ff730fbf0a82b52b63a1c9ccf1e7a8bcf2694c339a92f7470cc085e1fdbf8fc32a03189619e2c05a4806134d848a42325a4e365b17ea4b76ddecb6ea2d548033f9c6d66e360e2d543e9447baa6a97c4aa95ce5a26eca948b67101861203dd7fb0ad6df62b52d724c050000",
    ],
    [
      "ETag",
      "+XvONTQQZyS/ofTlHYRAQQ==",
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
      "Thu, 09 Sep 2021 18:15:19 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-142-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90416bc2401085ffcbf49a40a36da9010fb584568862a382a5886ce29846934cba3b6b10f1bf7736969e7ae81e7667df7cb3bcb7673814f51642488bfccba23edde4c86fae48d0d8928d1c0dd506c10364950bc9f7e971a169b27a2fa72dc7f3d9d24e743b1c0a61b24fac148467d815586e0d841f67a8558532a62ab2350bc4a7c6ddc7d345f412252254b475c27419c74fa338828bf73bb4d934877f8dac2f1eec294d70871aeb0c9d8746d31e331ebb7846554d89be21ab3334d0c15d23d7641ba5897c51fce0aee7070ffda017b8f53818085952a6b8a05ae0e55ccc0113ab32a156e2414f00dd959274d7ed4791fb5d886307386f7ff702d75bff3c383a319a9926b167d039bbbdba7c26e79c25116b8b1e644a3ef9b5e0ebfdf20d9d3d5a17c1010000",
    ],
    [
      "ETag",
      "t5bvTroMXYlNwtLSPUuMrw==",
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
      "Thu, 09 Sep 2021 18:15:20 GMT",
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
      "02",
      "ff",
      "ed",
      "d34b7282300000d0bb646d1d1005d29d54c0488b2020940dc32722c82724523e9ddebd4eaf51df1dde3788d3143316dddb1b6ec02b98e2155ca64b83c8ca6ec85174a073fb91a8d205d96516e3612e7479b6643f4293eb434266c6554dbf3e5b278ef7e18b6a859e60a229158f49eed0d1ae49455bd2f612bcac24137955696ac261574e816f09fa5ec7b97215478f75e22e0cd77680f51e05bdb3356b0d57aedee5b7ec586665ec464398bc67295bbd35f76bd0265a5ae7a5a2d373e5f94611ce2daf49d0684e5f5ec79a0c7386ab4e4e627d2a83c7f3fbad566f20a7a2e5d3d3ff0516008fa4a09845c563bbb0817001feea47f789e0c77f05c71453f0f30bf74c42cc19040000",
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
      "Thu, 09 Sep 2021 18:15:20 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
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
      jobId: "grouparoo-job-143-1631211111899",
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
      "a3",
      "40",
      "14",
      "fd",
      "2b",
      "64f6ab2d50e83369d6a6e2daa4a595528dd96cc8305c709432c80cddb8a6ff7d2f837535262b5f60e69e73cfb90f5ec8232f12322131cf9e6aa89ebf3d88989c115034c3dbbbcd6e34a7a199ffe13e1c127fb9b913c3ebe91411bc6149ba2f73e84851570ce464b7ed6695a84b5a09d1c1441ddb753af6c0b17b76f38cc663244ac8d3252f1e917eaf542927a67912ef66426439d092cb2e13fbb77bf3d033cb4a3c0053d2fca869a28c34bf50fd9e0b461517c574b74507b5842a823de5397af8474de2f38fb9bb9ceebb19820f9c01654cd4856a7c610a268a946775a5b392c90bd13edf7d90adb7f4e6a1c1445eef8ba8a07b383312aa68a49e4b302e83f5ca58f897eb60350b176b3fdaceafbcd5ac3b5f2f772b7f6bdc5e798167281ae7a0b9c6d438d7271f0fa89f8054bcd0ea6173dd28bf7668f179300d01a525b4c168680da83db2c6711a0f593a72fa716a411c8fe2619f3ab1c5c62eb8490c14795a54b368210a6625037b387022d6ef0d22770c6e14339b45ae6df56dcbb2134a63723c23bf2baee082cb5248de7688dc068bd08bc260e7cf67a1a74b48699dab8bd65853c07b8f0a0b44d07f6a3a36512e50a969f7c20fbd60360f17375e3be12564943d6f9f70c629cd25209a56d83c05d54a24d830e2cf56de0582f5c436a7a024939f2fa4e979e3e25dcbdfe8210eb0b1abf49b6cc360e1ffd0764e881b9ad71a72683f488996efb136747dfc8548dcd2360bb9de79c11d69af0248a182827d3d4d04ebc0d77fdb69f3118cbb8f3a52e1199787c9468555d02e11d7f5beb29d9ee5da0ed1e04a7d8af51df7d4b62647",
      "9311f650a8d792dacdc74a5bb15abe813088f3f775bb8e7f0129d15c137b040000",
    ],
    [
      "ETag",
      "YPU8CaT/lziNevdNLPYo7Q==",
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
      "Thu, 09 Sep 2021 18:15:20 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-143-1631211111899"
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
      "ff8d92dd6e82401085df657a0b89f85725f102abada44a2de25563cc0a036281c5dda58d31be7b67a9b54ddba4e5026666bf59e69cdd233ca74504366cd2645fa1385c25a81e75e0a3ac3225e953f2422218808a2544de63d1796deedb93d243dfebcdf304972367302042865bcc19d8478853cc2209f6d3110a9623b5853cabf2625d6706a843a98b8bc077bd3bca731ee9dc5b4ea7ce703a869371698c9862eb9aff47dbea64c08e6f7c8c516011a29ea5147c87a172b54cc9f2324353f24a8428a186eb8544f0aa648273932aa6d56e9956b765352dfdf4fa7d22331e3295f282e0e5820604c515cb7cfe4a32a14b80a843521cd7ef172aa751ad4487ae1774dbf5805f019a2d4e335cff0dd2c05b46e7f0819d3df8ceb19c5785ba50b7d307e7b7edc8d4cfad464e30fe414845565d90c09d8d1781339b6b6e75d63e3c289473c1c94989da44abd1ee75aebb8d775f6fb8f69afe632b51a10121a3eb314915d831cb249ede00bde6da9e7c020000",
    ],
    [
      "ETag",
      "Ken5w2q4HpNeRN8PmgeUDA==",
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
      "Thu, 09 Sep 2021 18:15:21 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT COUNT(`amount`) as `amount`, `profile_id` as __pk FROM `purchases` WHERE  `amount` < ? AND  `profile_id` IN UNNEST (?) GROUP BY `profile_id`",
        types: ["FLOAT64", ["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "FLOAT64" },
            parameterValue: { value: "1.54" },
          },
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: {
              arrayValues: [{ value: "1" }, { value: "2" }, { value: "6" }],
            },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-144-1631211111899",
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
      "54",
      "fd",
      "53",
      "e2",
      "30",
      "10",
      "fd573ab95f7406a1a5a57ccc381e07d563c4a2a5e8711f0369486bb434d8a43a8cc3ff7e9b5450cebb9381a19b7d6fdfdb64d36774cfb205eaa088250f05cdd79fee78842a884a9cc06a7c733d8d3cdc93c9f7a7f3ab6f57fdf3c49d768f8f01c1144be0e52aa547821739a1a2331957939c172b9c737e04858e2cc739b25cdbaa5bead36ab78128681a0f59760ff45b2957a253ab6dc5ab09e7494af18a892ae1cbdd7aedb15e5be5fc8e12296afb9a359011b50f544f524eb0643c3b9e8cc14121683ea34bcc52f0f04a5d449ff76b57195e5613003f32423121bcc8a4f2052508cf629614b9ae8a3acf48fb7cf380c6ded0eb85466f34f1c383395e2af2fcd0c0c2d80615630e4dc52ca533b698abcc6cb6ba374e83d10564c0c12d1654cc8d9baf5ee0193b9af1b3304d9b182746d7ef1bfb3506be31f17d6f1c1a072787c659309a5c1a5fa67b1830bfa042b24c5b0f71945265fb657b07ef4f5511b0042b6572d6345d6cb5cc7614474d12b7ec46149b348a5a51b381edc8246d873a8b8862e049555db370c63307b75cb38d23a7612d9a96d35a38ae6b932625663dc22dabe95a764c6cb3893615f4943349fb4cacb860e516a39b60107ab33098f8bd6ee8e936625ca4b25f9a534dbcf529a14900fda7af8dca320e4aeabc067ee805dd5e38b8f6ca1119d20493f5f8018624c6a9a080c6395e5249f30bbe804d4397a3f1201c8cfcee1018fadc2fb708813a3f9e5f09e17aa57759ea7f743a1c7543d7d10eb6906b9c161af3583e20abda00c4a6f2ef32dd20e84e411ae7395eff9183765c4dff8b82c6eba8b4b953444a6d1bd5f722176d7e6de05b4170c34a2d7435f182292a97021a",
      "d39c66e4e36102b04e7cfca6d8de5a00c3bd051d212186d92542a9909c9633cc96da7dc9b6d5af89343897ef7275dbda1e96aaa12ad225cde44b4be5add5fba65285d8812009a3e70ffc33c8fe067c98730637050000",
    ],
    [
      "ETag",
      "fWVYbEaCtgZwKQXQDKg6YA==",
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
      "Thu, 09 Sep 2021 18:15:21 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-144-1631211111899"
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
      "90",
      "4f",
      "4f",
      "c2",
      "40",
      "10",
      "c5",
      "bf",
      "cb",
      "78",
      "b44d6c2546483808416d4210aa3d1142b6ed504bffccba3b4509e1bb3b5b8c270fee6177f6cd9bcdefed09aab2cd610469597c74688e5705f2ca1531daae662b87a6d6227880ac0a71bed870994f7592a7a5a1af431a5578fdb81a8fc561b3776c148c4eb02bb1ce2d8cd62768558332a61aea5a16131fb5bb478bb7d9d32c16a1a1dc098b643e7f98cc6770f67e87b65b5dfd6b6473f6604f698c3b34d866e818b4a13d661cb9785635ba46df526732b4d09bfb4661a8d3ca10f9a2f8c160e00777b74118b8753f1c8ab3a64c7149ad98935781032656754c9f120f423198be94a4bb7e3ff4b20be1aaa067fbbb17badee6e7c1c991d12e0d099e45477673a19c92236749c4a6430f32259ffc5cf2e57efe062fd21e26c1010000",
    ],
    [
      "ETag",
      "Os2PdCpUdbiroxvbIke+FQ==",
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
      "Thu, 09 Sep 2021 18:15:21 GMT",
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
      "02",
      "ff",
      "ed",
      "d34b7282300000d0bb646d1da00d4277228541e42b8d964d06356014490c7448747af73abd467d77787750edf7a4eff1c0cea403ef4055863ddd4f436e39ee78aa8b0cadb08988bb9131c3db511cb701f2834ad22c49d4f5c83dad8af9e112bccc8b4b9eeb9ea319eaa6e7cc992143f8286cbc1d4d95b7f0d37a89598bb6eddafd7298a945716b89d4cfd8c11d376fbda8e346ef6e65be50166756044fd24ccedca7059bedc2f367b3d69bb14bcd011d651bd5df2362666964da21c0721596d5502e612b137b17513683c569ae0c6c772cc3e31c521d7e24b0ec56d7cdf4e9e9ff02134024a782f4983eb6bf42db9e80bffa78509c3cfe3ba41244809f5f16bc041e19040000",
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
      "Thu, 09 Sep 2021 18:15:21 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-145-1631211111899",
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
      "0000000002ff85536b6f9b3014fd2bc8fbda84409e448ad62ca52b52425620ada66942c65ca85b82536c32b555fefb2e26e9da4d5af902f63de79e731fbc90075ea6644a129e3fd6503d7dba17093923a0688eb7f5f37af4c574bd3bcf7f0e6fefae3756c6e47c3643046f58926e770574a4a82b0672ba09bb7925ea1dad84e860a28e351876ac51dfb2ade699380e122514d992970f48bf536a27a7a67912efe642e405d01d975d26b6aff7e6de367795b807a6a4f95ed34419697ea0fab9108c2a2ecad9264407b5842a862de5057af8434d93f3f7b9bb9c6ebb3982f79c01654cd4a56a7c610a26ca8ce775a5b392e90bd13edf7c90d05dba8bc860a2a8b7655cd22d9c19295534564f3b302e83f5caf0fccb75b09a47deda8fc3c595bb9a7717ebe566e587c6ed951bb886a249019a6bcc8c737df2f180fa2948c54bad1e35d78df2b143debf836908282da10dc6e3de885a939e9364c9986593fe30c97a902493643ca4fda4c79c010cd20428f2b4a866d152941406f6241da5b193da100f9cd1384e6068c713e6a459ea38431b6c723823bf2aaee082cb9d90bced10b90dbcc88da360e32fe691ab4bc8685da88bd65853c05b8f0a0b44d07f6a3a34512e50a969b7e7476e305f44de8ddb4e780939654fe123ce38a3850444d30a9ba7a05a89141b46fcf9cabd40b09ed8b7535092e98f17d2f4bc71f1a6e5aff40807d8d855fa4dc228f0fcafdace0971438b5a43f6ed07392e0f9a3efc44202e699b845c6fdce03b69af02c8a082927d3c4c04ebc0c73fdb69f1118cab8f3a52e1197787c9468555d0ee10d7e51ed97ddb72ac1ed1e04afd1db37bf6e0d4b526479311b650aa6349ede263a5ad582d5f4118c4f1fbba5b87df9cb20e8d7a040000",
    ],
    [
      "ETag",
      "uzO6B/EIhINzSWhQU1fcsA==",
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
      "Thu, 09 Sep 2021 18:15:22 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-145-1631211111899"
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
      "91",
      "df",
      "4b",
      "c3",
      "30",
      "10",
      "80",
      "ff",
      "97f3d11656f74357d88353d16919aedb449031b2f65a3bd35e97a4ca1cfbdfbdc429223e9887e4eef21ddc97ece0a5a852086155e49b06d5f6284733b1418cba9146f35153a5113c402372269b77fdf0783c19dedd66abe872be89fbed3c9d0c064ce8e4194b01e10eb20265aa217cda41254ae4b6846453564b977960b6b52d4e67f1687ccd7949a9cdc7f3283a1f4657b0f7be1b5361c4d2f1ff685bec3d58d32ac60c155609da596a456b4cccc86a6a51d6127d4d8d4a508383dd45aea8a98522f2b9e2079dae1ff4dac14960d759bfcfa4a44498822a86e7531e100c1921637a634d6833a05cc8c699db5fb95ca4cec486a3f1acd77103fe049ce31772d0facdd452547f308bc304c3ad417daf887d345a95a0d539eb9ef65a9f7617648d0dbf84510d7a9008fea49bc2409809a971ff01cd2ed54902020000",
    ],
    [
      "ETag",
      "uzsVX+QBKJfbLDUqR93gdQ==",
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
      "Thu, 09 Sep 2021 18:15:22 GMT",
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
      "02",
      "ff",
      "ed",
      "d3d15682300000d07fd9b37a40a78cde0466c414c91290971d82814283c586a29dfe3d4fbf91f71fee3748b38c4949555bb3063c816b3a3527d98408643997729ccb40871fda7036fd7370909de0c59e405d4de72b43dde2721cc23165c92e7235e7ca4fab577f1386998c452f61f032f35de3d3e61ef7d0d26b6061d7c246c77df06e9fb9f665e1669d1b2a71f43738a55ebe3a4059d4f1cd5d2cb772594141fa6358c2bce031767174283541d61bae5adfc7f9cd4d62a3ea7565ce16244f0683222b5571152d104ac965a7557bdaf502d7db160dcfb827010ecccc9a3c3cfc5f6004d8204e1d93f474df3e9b9be608fcd5a7ea2ad8fdbfc5d28e75e0e717796aacf919040000",
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
      "Thu, 09 Sep 2021 18:15:22 GMT",
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
        query:
          "SELECT column_name, data_type FROM INFORMATION_SCHEMA.COLUMNS WHERE table_name = @tableName",
        defaultDataset: { datasetId: "test" },
        parameterMode: "named",
        queryParameters: [
          {
            parameterType: { type: "STRING" },
            parameterValue: { value: "accounts" },
            name: "tableName",
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-146-1631211111899",
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
      "000002ff85535d6fda3014fd2b91f7b84280849420a11541ba2241584368354d53e4989bcc6d8869ecb46315ff7dd70e74ad2aad7949ec7bce3de77ee499dcf372438624e5f9430dd5fed39d48c919014573bc1df33df76ec2e9b51ffe993c7df6f6d56f3b781a8d10c1354bd2edae80961475c5400ed7ab765e897a472b215a98a8d575bd56d773babdae7e06be8f44094536e7e53dd27f29b59343db3e89b77321f202e88ecb3613db977bfbb167ef2a71074c49fbada68d32d2fe40f54b2118555c94a3f50a1dd412aa04b69417e8e11f75935ebccddde674dbce11fcc81950c6445d2aed0b533051663caf2b93950c9f89f1f9ea83ac827930892d268a7a5b2625ddc299b5a18a266abf03eb325a2eac5978b98c16e378b60c93d5e42a588cdb93e57cbd0857d6ed55100596a26901866b8dac0b730af180fa1b908a97463dd6d75af9d8a1d9fbc168024a4b6882c979c7a3dd41c74fb3f49c6503a79f661d48d3417adea74eda61be0bee26058a3c236a58b4c49a7b74e3f55d2ff120eb27aedb4993d4a39dc4a199eb50cf01a7ef93c31979aab88229973b2179d321721bcde22089a3753819c7812921a375a1a68d315dc06b8f0a0b44d07f6a3ae82817a8a4db3d0be3201a4fe2d94dd04c780e3965fbd503ce38a3850444d30a9ba7a05a880d368c84e3453045b099d8b7535092e18f67a27bae5dbc6af90b3dc6016abbcabcc92a8e66e15763e784b8a1456d208fcd07392e0f9a3efc44202e6993845caf83e83b69ae22c8a082927d3c4c049bc0c73fdb69f1118cab8f3a52e119778749adc22a6876889b728f6ca7d71bf45d62c0957a17f3fdfea96b3a87ce085b28d5b1a466f1b1d246ac962f200ce2f843d3adc35f6ca9fad07a040000",
    ],
    [
      "ETag",
      "Aiyi6VNDQ9NzCw+6yrx/Ew==",
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
      "Thu, 09 Sep 2021 18:15:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-146-1631211111899"
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
      "8d91df4fc2301080ff97f375240c70c2121ec018251282e3478c8690b2ddc6a0dbcdb65309e17ff75ad118e3837d68efaedf25f7b547d8e76502216cf2eca54675b8c8d03cd820425d4ba3f9a8a8d4081ea01119933aaa5bfba5dacea8f72edacde560fa78ff94f5fb4ce8788b8580f008698e32d1103e1fa11405725b4cb22ecab5cb3c3087ca1667f36834b9e5bca0c4e693c5783c188e6fe0e47d3726c288b5e3ffd1b63a79b0a34d84292a2c63b4b3548a76189b91d5d4a2a8243634d52a460d0e761799a2ba128aa8c19586df091a7ed0f65bbe5ddd5e8f4949b13039950c2f663c2018324246f4c69ad06640b9908d53b7bf72394f9c890d479379d07103fe049ce31772d6facd5452947f30abf304c383413d55c43e1aad8adfec742faf82e6a7dd355963c32f61548d1ec4823fe92e3710a6426a3c7d003b9e9c9a02020000",
    ],
    [
      "ETag",
      "sRu2kVrhSo9xa30VAPXKZg==",
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
      "Thu, 09 Sep 2021 18:15:23 GMT",
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
  .post("/bigquery/v2/projects/sample-sources/jobs", {
    configuration: {
      query: {
        useLegacySql: false,
        query:
          "SELECT `name`, `id` as __pk FROM `accounts` WHERE  `id` IN UNNEST (?) GROUP BY `id`, `name`",
        types: [["INT64"]],
        defaultDataset: { datasetId: "test" },
        parameterMode: "positional",
        queryParameters: [
          {
            parameterType: { type: "ARRAY", arrayType: { type: "INT64" } },
            parameterValue: { arrayValues: [{ value: "1" }] },
          },
        ],
      },
    },
    jobReference: {
      projectId: "sample-sources",
      jobId: "grouparoo-job-147-1631211111899",
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
      "796f9b3014ff2ac8fb67937240c80191aa2e4b598796928c9046d53425c618e696606a9b4e5195efbe87497aacd28a2211fc7ec7bbfc88ee5891a0318a59765f51b1ff70cb63d44254e10c4e5793f97a6dca923bea7b9a2cbcc29d2a31393b0304ab5912efca9cb625af04a172bc5a7632c1ab120bcedb20d4b6faa3b635b4ad9e553f8eeb0251d23c9db1e20ee8bf952ae5b8db3d997732ceb39ce292c90ee1bba7f3ee43af5b0a7e4b8992ddd79e5db091dd775ccf734eb062bc385b2d21834a52b1a13bcc72c8e1999ac49f5f6b7718de7532003f30423121bc2a549d1748105ea42cab845645e347a4f37cf1072dbd99378d8c6d817774db32b62cd91a581a9b4d79677c0de757c6f6a828b7c6fa9b177a4683f103631504de32323e9e7f322ec3f96a617cb9d1b1d6510dfc132a152bb47b84e39cd6cec70ef96f075313b0c29236c1cdc81c62cb31dd388d472475ec419c9a348e9d7834c0766c12b74ffb494c31f054adae59b8e0c5d0ee3b43d7b5521763d34d53bbe7b883c18824038cad1176ed04f792616ca2430bfd114cd10b06cb2359d325b40efdc8db44e12a984e224f9791e22a57174d7275112ff354502480fe53d7a18e320e4e75cbfd20f2c2c934f2afbd66ca339a61b25fdec39c539c4b0a682ca0838a8a2b9e40d3d062bef4237f1e4c66c0d0a35b9c10128d7f3e3e13a27da9bbacf41b4dc27072031c2c04deff13833c867d7438bcb0bbc679a5211aafbf1afd8726802c74f875805f0bc106377ae8c7ca0b6f507314d2940a5a90f7270d601d78ff269e6e457dd197b58f54f00d8b4564ed42046d168ced74860ddbeed9c39e893458a837b151cf3975b2d6a815e98e16ea5852732b746fea50259f401084bd08fce012a27f013682e12e97040000",
    ],
    [
      "ETag",
      "UAOWW0spo8tKfdPEn9CtrA==",
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
      "Thu, 09 Sep 2021 18:15:23 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-147-1631211111899"
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
      "6d",
      "50",
      "cb",
      "6ec23010fc97ed35919ad217481c4a9552aa286a039c108a8cb3b80949d6b51d1042fc7bd7a16a2ff5c1bb63cfac677c825dd91630824da9be3a34c72b85eec33719daae76968ba6d62204804e286666cd5dfc66ca6a77485552bd48adf4a050e33133acfcc446c0e804db12ebc2c26875825634c8b2be04e08edaa3f9229ba553c60d151ea7cb24799a24319c835f459eebdd9f62962ee2699cfd27599f03a86893e1160db612bd016da842e9663e9b158dae31b4d41989167a727fa10c755a18a2904fc2e8f6218cee07d14de4d7e370c8cc9aa47025b54c5eced91c3872a2cee8c0d9206282e95b8eb9edf7bd7faed368f20695c82519dd47daf77476bafe1931393ab4ef86d89045efe5fae2eb99bc57c7199ce9300029f84f5f4b77c1e76fac193cc5b0010000",
    ],
    [
      "ETag",
      "Rm5EJrijkwNgLjFcpgp3dg==",
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
      "Thu, 09 Sep 2021 18:15:23 GMT",
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
      "000000000002ffedd3497282401400d0bbf45a2c6c19b3132d13107046ec0dd5c8679051c6c654ee1e2bd788ef0eef1bd1db0d9ac66bcb140af481468ad5e96dbaa9146d35c44e74318fa341acaf245d5df9747b2282e6882cb1f4ba3b7bc58995b6ee044474877e5d9571c6595bcc5fe42282dc5937b2425a3763f9cec7e3d9698b1dcb61e872beaa8f99277a061e69d4f91b55e716f3fb8c041c089a4415d1c0b12b6c97cc3dc8f163962b4fb3dfab456ffb7e670b2166d6d21c301f3669d6f37d573de4270548c2fbe7228572bfdb0732e10e8144c9d0f6abc2b005f37a79484ad029d3b7b7ff0b4d10b02aa9a1f192d7f6b9a8aa13f457df6bc70a5eff35a035d4e8e7174eb5e11f19040000",
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
      "Thu, 09 Sep 2021 18:15:24 GMT",
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
      jobId: "grouparoo-job-148-1631211111899",
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
      "4fdb3014fd2b91f795be1fa495aad19500d5da744b53aa699a22c7b9c90c491c6c078650fffbae1dca4048235f12fb9e73cfb98f3c915b5e26644a629eddd5201f3fdd88989c10d034c3dbafc14571ebee2fc59faf79f5650fa3aa3fcc1e66334470c352b4a8726829514b066abadbb63329ea8a4a215a98a8d51bbaadde78d0ebf7cce34e26485490a72b5ede22fdb7d6959a763a47f17626449603adb86a3351bcdc77eefb9d4a8a1b605a75de6a765046753e50fd9c0b463517e56cb74507b502194141798e1efe5193f8ec6dee36a7453b43f03d6740191375a98d2f4cc14499f2ac96362b993e11ebf3d507d97a2b6f113a4ce4755146252de0c449a8a6917eacc0b908366b67e95f6c82f53c5c6efc68bbb8f2d6f3f662b3daadfdadb3bff202cfd134cec1729d9973664f3e1e503f01a57969d543736d949f3bb47c3f18434069054d303aed8e69cfed4ee2343e65a93b18c56917e2d88d4f47741077d96408c324068a3c2b6a59b414659f2168928ea37834ee45433a4ea378301a472965fdc92089e9c01d91c30979905cc339579550bce910d907cbd08bc260e72fe6a1674b48699debf3c69829e0b5478d0522e83f351d4c940b5432ed5efaa117cc17e1f2da6b26bc828cb2c7ed1dce38a5b902445389cdd320d722c186117fbef6ce116c27f6ed185464faf389989e1b17af5afe420f7180c6aeb66fb20d83a57f69ed1c11d734af2de4bef920129890097a3efc421cee6893837cdf79c10fd25c05908284927d3c4b04dbc0c7ffda71ef118c9b8f3a4ae319578729a3c224342bc46db5cfec417f38ec8d89054bfd2e86933f36cde43019a180523f97d4ec3d56da88d5ea0584419cbe6f9b75f80be67e53ff79040000",
    ],
    [
      "ETag",
      "KRFmk8WGoxKlpBWe5p24gw==",
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
      "Thu, 09 Sep 2021 18:15:24 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-148-1631211111899"
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
      "90",
      "5d",
      "4f",
      "c2",
      "30",
      "14",
      "86",
      "ff",
      "cbf1764b98228c255c80f18384101c92688c21a53b1bc3ae67b4679265e1bfdb4ee3b5bd397d4f9ff77cb483cf526790c0be2c4e0d9af6aa407ef697146da3d8ba5093b60801208bc291afa36d7c7ecbab533b3ee8f5fa61f1258ae36c3a75849507ac04241de425aacc42f2de8116153a9b24d5547ad7ab00b8ad7d72f3922e568f4e579479bdda2e97b3f9f21e2ec19f31132c763dff0fdbc7258023ed53ccd1a096e867a90d1d51f2c2af6945552b0c2d3546a2851eee1f0a434d2d0c51e83261348cc36874135d47fec49389231549c12569076f376e406062a1523abb356100bf7ade32dab52157dda22f1c0d86f1ed7834f8e97547be3fbbb9d834188014eecb9e4a862417cae2e51b25c2597390010000",
    ],
    [
      "ETag",
      "X6U8wYfmqy7hnPPFIvagjA==",
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
      "Thu, 09 Sep 2021 18:15:25 GMT",
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
      "02",
      "ff",
      "ed",
      "d3",
      "51",
      "6e",
      "82",
      "30",
      "00",
      "00",
      "d0bbf45b0ca282dd5f2b09a23045840e7f48a95541a5152882cbee3eb36bcc7787f70d2863bcaed3465c78093e404f0d3864c3959c61fb51948727d484a1b5bc2de6ad98b43dca97130b455251b74b785367853c55b65f92b1b2d57d3d627682200e3ac3b22b1a75c2deb8f1d9cd56e7bcca844e3472a5db9c3447333d04d95ec76b277211ee55d86d1f7a5dee19f118c2cef4b6582e4c6f66f0c50ea781ca7c093fcbc7ee1268253fd3380895a3a77a6e5a7a68085fd4cd16dee66312f7f26b07d9d19bae4ce96e1284466d7c6dee113e698a64d1f0ededff0203c03b9957bc4ef3d7f6f114c201f8ab9f36bde4afff98d38a57e0e717280762f919040000",
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
      "Thu, 09 Sep 2021 18:15:25 GMT",
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
      jobId: "grouparoo-job-149-1631211111899",
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
      "85536b6fda3014fd2b91f7b54020bc25b4329aae4810da105a55d31439ce4de636c4d476d850c57fdfb553ba5695d67c49ec7bce3de73ef24c1e799992314978fe54813c7c7910093923a0698eb781a4a1b8be9f2e0697fb1bd7dbfcf1d26fbd7c324104372c45b7bb021a4a5492811a6fd6cd5c8a6a47a5100d4cd46877478d76df6b77dae6198e46485450640b5e3e22fd97d63b356eb54ee2cd5c88bc00bae3aac9c4f6f5beb5efb476523c00d3aaf55eb38532aaf589ead74230aab928279b353aa814c818b69417e8e11f354dcedfe76e72ba6de608de730694315195daf8c2144c9419cf2b69b392f133b13edf7c90b5bff06791c344516dcbb8a45b387352aa69ac0f3b702ec3d5d2990797ab70398de6ab205ecfaefce5b4395b2d36cb60eddc5df9a1ef689a1460b9cec439b7a7000fa89f82d2bcb4ea91b936ca2f1d9a7f1c8c21a0b4823a180fdc3e6d0fdd51922503960dbd5e92b99024c364d0a35ee2b25117ba6902147956d4b268294a7738809479dd38cb06bdb88b49e2043237ee75329a8efa9ed7eeb7c9f18cfc965cc305573ba178dd217217ce233f8ec24d309b46be2d21a355a12f6a63a680b71e351688a0ffd47434512e50c9b47b1e447e389d45f35bbf9ef00272ca0eeb279c71460b0588a6129ba7412e450a66b9a74bff02c17662d7a7a022e31fcfc4f4dcb878d3f2577a84033476b57d937514ce83efd6ce09714b8bca42f6f50791c0844cd1f3f127e27047eb1ce466e387f7a4be0a21030925fb7c9608b681cfffb5d3de2318371f7594c633ae0e53468549a85788db6a5fd85ea7d7753d62c1527f88f5dcfea9692687c9085b28f54b49f5de63a5b558a55e4118c4e907b659c7bf2641b25b79040000",
    ],
    [
      "ETag",
      "NraRoPYAL7FvQ03Ux3dB5g==",
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
      "Thu, 09 Sep 2021 18:15:25 GMT",
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
    "/bigquery/v2/projects/sample-sources/queries/grouparoo-job-149-1631211111899"
  )
  .query({ location: "US", prettyPrint: "false" })
  .once()
  .reply(
    200,
    [
      "1f",
      "8b",
      "08000000000002ff8d90db4ec2401086df65bc6d13aac8a10917a2464808d10209620c59b643296e3b75779a0609efee6c355ebb37b3ffecf7cf61cff0919729c4b0cbb3cf1aede92a437ef197045d6dd849a8a874080120ab4cc8c3a2bfde2ce7ebe36ba3365f93b44957f6a1198d8470fa808582f80cfb1c4dea207e3b43a90a149b265317e5b65501f0a9f2c9c53299ce9f4417947a3d5fcd6677e3d9235c823f63aa586d5bfe1fb6f74b0047da25b8478ba5463f4b65e9889aa77e4da78aca60e8a8b61a1db470fb9059aa2b658942c98451771846bd9be83af267301c0a69482bcea91478b5900181899549a89135a103bf7a7c6274cf96a4ba435f38ea7407b7fd5ee7a7d73df9fe2c73b1ad3100ade4cb263943bc57c6e1e51b2dd9e12390010000",
    ],
    [
      "ETag",
      "hS7XZTNXjYwaZzHdwdUrDw==",
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
      "Thu, 09 Sep 2021 18:15:27 GMT",
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
